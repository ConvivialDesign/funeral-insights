"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormStatus = "idle" | "submitting" | "error";

export default function CallbackForm() {
  const router = useRouter();

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      province: formData.get("province"),
      funeralType: formData.get("funeralType"),
      preferredContactTime: formData.get("preferredContactTime"),
      additionalInformation: formData.get(
        "additionalInformation",
      ),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "We could not submit your request. Please try again.",
        );
      }

      router.push("/request-callback/thank-you");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block font-medium text-gray-900"
        >
          Full name <span className="text-red-700">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block font-medium text-gray-900"
        >
          Phone number <span className="text-red-700">*</span>
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          inputMode="tel"
          placeholder="e.g. 082 123 4567"
          maxLength={20}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="province"
          className="block font-medium text-gray-900"
        >
          Province <span className="text-red-700">*</span>
        </label>

        <select
          id="province"
          name="province"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            Select your province
          </option>
          <option value="Eastern Cape">Eastern Cape</option>
          <option value="Free State">Free State</option>
          <option value="Gauteng">Gauteng</option>
          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
          <option value="Limpopo">Limpopo</option>
          <option value="Mpumalanga">Mpumalanga</option>
          <option value="North West">North West</option>
          <option value="Northern Cape">Northern Cape</option>
          <option value="Western Cape">Western Cape</option>
        </select>
      </div>

      <fieldset>
        <legend className="font-medium text-gray-900">
          Burial or cremation?{" "}
          <span className="text-red-700">*</span>
        </legend>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {["Burial", "Cremation", "Unsure"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 px-4 py-3"
            >
              <input
                type="radio"
                name="funeralType"
                value={option}
                required
                className="h-4 w-4"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="preferredContactTime"
          className="block font-medium text-gray-900"
        >
          Preferred contact time{" "}
          <span className="text-red-700">*</span>
        </label>

        <select
          id="preferredContactTime"
          name="preferredContactTime"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            Select a preferred time
          </option>
          <option value="As soon as possible">
            As soon as possible
          </option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Any time">Any time</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="additionalInformation"
          className="block font-medium text-gray-900"
        >
          Additional information
        </label>

        <textarea
          id="additionalInformation"
          name="additionalInformation"
          rows={5}
          maxLength={1500}
          placeholder="Tell us anything that may help the funeral provider understand what assistance you need."
          className={inputClassName}
        />
      </div>

      {/* Hidden honeypot field. Real users will not see it. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
        By submitting this form, you consent to Funeral Insights
        sharing your details with one or more participating funeral
        providers so they can contact you about your request.
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Submitting your request..."
          : "Request a Callback"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Free for families. No obligation.
      </p>
    </form>
  );
}