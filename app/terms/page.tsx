import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function TermsPage() {
  return (
    <>
    <Navbar />
    
    <main className="min-h-screen bg-[#f7f3ea] text-[#173f35]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#c89b4b]">
          Legal
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Terms & Conditions
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#35594f]">
          These terms explain how Funeral Insights South Africa may be used.
          Our goal is to provide helpful guidance, practical tools and trusted
          information for families making funeral-related decisions.
        </p>

        <p className="mt-6 text-sm text-[#6b7c75]">
          Last updated: July 2026
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-6">
          {[
            {
              title: "Using this website",
              text: "By using Funeral Insights South Africa, you agree to these Terms & Conditions. If you do not agree with them, please do not use the website.",
            },
            {
              title: "Information and guidance",
              text: "Funeral Insights provides general information to help users make informed funeral-related decisions. Our content is not legal, financial, medical or professional advice.",
            },
            {
              title: "Provider listings",
              text: "We aim to keep provider information accurate and useful, but we do not guarantee the completeness, availability, pricing or quality of any listed provider or service.",
            },
            {
              title: "Independent decisions",
              text: "Users should independently verify provider details, costs, terms and service availability before making funeral arrangements or commitments.",
            },
            {
              title: "Intellectual property",
              text: "The Funeral Insights name, website content, design, branding and original materials belong to Funeral Insights unless otherwise stated.",
            },
            {
              title: "Our responsibility",
              text: "We provide this website in good faith, but we are not liable for losses or damages arising from the use of the website, reliance on information, or interaction with third-party providers.",
            },
            {
              title: "Changes to these terms",
              text: "We may update these Terms & Conditions from time to time. Continued use of the website means you accept the updated terms.",
            },
            {
              title: "South African law",
              text: "These Terms & Conditions are governed by the laws of the Republic of South Africa.",
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