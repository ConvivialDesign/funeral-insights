import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              CONTACT
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Get in touch with Funeral Insights.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Have a question, suggestion or provider enquiry? We&apos;d like to
            hear from you.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Contact us</h2>

            <p className="mt-5 leading-8 text-[#4B5B55]">
              For now, please contact us directly by email. As Funeral Insights
              grows, we&apos;ll add a dedicated contact form and provider
              enquiry process.
            </p>

            <div className="mt-8 rounded-2xl bg-[#E8EFE9] p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A46A]">
                Email
              </p>

              <p className="mt-3 text-2xl font-bold">
                hello@funeralinsights.co.za
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-[#4B5B55]">
              Please do not send sensitive personal, medical or financial
              information by email unless requested.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}