import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EnquiryRequest = {
  name?: string;
  phone?: string;
  province?: string;
  funeralType?: string;
  preferredContactTime?: string;
  additionalInformation?: string;
  website?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryRequest;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const province = body.province?.trim() ?? "";
    const funeralType = body.funeralType?.trim() ?? "";
    const preferredContactTime =
      body.preferredContactTime?.trim() ?? "";
    const additionalInformation =
      body.additionalInformation?.trim() ?? "";

    // Honeypot field used to catch simple spam bots.
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !phone ||
      !province ||
      !funeralType ||
      !preferredContactTime
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // Basic South African phone validation.
    const cleanedPhone = phone.replace(/[\s()-]/g, "");
    const validPhone = /^(?:\+27|0)[6-8][0-9]{8}$/.test(cleanedPhone);

    if (!validPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid South African phone number.",
        },
        { status: 400 },
      );
    }

    const recipient = process.env.LEAD_NOTIFICATION_EMAIL;

    if (!recipient) {
      console.error("LEAD_NOTIFICATION_EMAIL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "The enquiry service is not configured correctly.",
        },
        { status: 500 },
      );
    }

    const submittedAt = new Intl.DateTimeFormat("en-ZA", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Johannesburg",
    }).format(new Date());

    const { data, error } = await resend.emails.send({
      // Use the Resend testing sender initially.
      // We will replace this after verifying funeralinsights.co.za.
      from: "Funeral Insights <onboarding@resend.dev>",
      to: [recipient],
      subject: `New Funeral Enquiry – ${province}`,
      replyTo: recipient,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #222;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">
            New Funeral Enquiry
          </h1>

          <p style="color: #666; margin-top: 0;">
            A family has requested assistance through Funeral Insights.
          </p>

          <table
            cellpadding="10"
            cellspacing="0"
            style="width: 100%; border-collapse: collapse; margin-top: 24px;"
          >
            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold; width: 35%;">
                Name
              </td>
              <td style="border: 1px solid #ddd;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Phone number
              </td>
              <td style="border: 1px solid #ddd;">
                <a href="tel:${escapeHtml(cleanedPhone)}">
                  ${escapeHtml(phone)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Province
              </td>
              <td style="border: 1px solid #ddd;">
                ${escapeHtml(province)}
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Burial or cremation
              </td>
              <td style="border: 1px solid #ddd;">
                ${escapeHtml(funeralType)}
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Preferred contact time
              </td>
              <td style="border: 1px solid #ddd;">
                ${escapeHtml(preferredContactTime)}
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Additional information
              </td>
              <td style="border: 1px solid #ddd; white-space: pre-wrap;">
                ${
                  additionalInformation
                    ? escapeHtml(additionalInformation)
                    : "None provided"
                }
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #ddd; font-weight: bold;">
                Submitted
              </td>
              <td style="border: 1px solid #ddd;">
                ${escapeHtml(submittedAt)}
              </td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 13px; color: #777;">
            This enquiry was submitted through funeralinsights.co.za.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not submit your request. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      enquiryId: data?.id,
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your request.",
      },
      { status: 500 },
    );
  }
}