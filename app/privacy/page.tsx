import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar />

    <main className="min-h-screen bg-[#f7f3ea] text-[#173f35]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#c89b4b]">
          Legal
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Privacy Policy
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#35594f]">
          Your privacy matters to us. Funeral Insights South Africa is committed
          to protecting your personal information and being transparent about how
          we collect, use and safeguard it.
        </p>

        <p className="mt-6 text-sm text-[#6b7c75]">
          Last updated: July 2026
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-6">
          {[
            {
              title: "What information we collect",
              text: "We may collect information you choose to provide through contact forms, provider enquiries, newsletter sign-ups, or other forms on our website. This may include your name, contact details, message content and information related to your enquiry.",
            },
            {
              title: "How we use your information",
              text: "We use your information to respond to enquiries, improve our website, maintain provider listings, communicate with you where appropriate, and comply with applicable legal obligations.",
            },
            {
              title: "Cookies and analytics",
              text: "We may use cookies and analytics tools to understand how visitors use Funeral Insights, improve site performance and make our content more useful.",
            },
            {
              title: "Third-party services",
              text: "Our website may use trusted third-party services, such as analytics tools, maps, forms or embedded content. These services may process information according to their own privacy policies.",
            },
            {
              title: "How we protect your information",
              text: "We take reasonable technical and organisational measures to protect personal information from unauthorised access, loss, misuse or disclosure.",
            },
            {
              title: "Your rights",
              text: "Subject to applicable law, including POPIA, you may request access to, correction of, or deletion of your personal information.",
            },
            {
              title: "Contact us",
              text: "If you have any privacy-related questions, please contact us through the Contact page.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-[#e6ddc9] bg-white p-8 shadow-sm"
            >
              <h2 className="mb-3 text-2xl font-semibold text-[#173f35]">
                {section.title}
              </h2>
              <p className="leading-8 text-[#35594f]">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}