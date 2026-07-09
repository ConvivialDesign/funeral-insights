import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choosing a Funeral Provider",
  description:
    "A practical guide to choosing a funeral provider in South Africa, including questions to ask and costs to confirm.",
};

export default function ChoosingAFuneralProviderPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              PROVIDER GUIDE
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Choosing a funeral provider
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            The right funeral provider can guide your family through a difficult
            time with care, clarity and professionalism.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">
              What to consider before choosing
            </h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Check what is included",
                  text: "Ask exactly what is included in the quoted price. Transport, storage, documentation assistance, coffin, venue, flowers, catering and gravesite costs may be charged separately.",
                },
                {
                  title: "Ask for a written quote",
                  text: "A written quote helps avoid misunderstandings and makes it easier to compare providers fairly.",
                },
                {
                  title: "Understand the process",
                  text: "Ask who will handle transport, Home Affairs documentation, the burial order, cremation arrangements, service coordination and communication with the family.",
                },
                {
                  title: "Consider location and availability",
                  text: "Choose a provider that can serve the area where the death occurred, where the family is based, and where the funeral or memorial will take place.",
                },
                {
                  title: "Ask about cultural or religious needs",
                  text: "Some families need specific traditions, timelines, rituals or religious requirements to be respected. Confirm that the provider can accommodate these needs.",
                },
                {
                  title: "Be careful with pressure",
                  text: "A good provider should give clear guidance without pressuring your family into rushed or expensive decisions.",
                },
              ].map((item) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[#E6E0D2] p-6"
                >
                  <h3 className="text-xl font-bold text-[#1E3D34]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-8 text-[#4B5B55]">
                    {item.text}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#E8EFE9] p-6">
              <h2 className="text-2xl font-bold">
                Questions to ask a funeral provider
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-[#4B5B55]">
                <li>What is included in the quote?</li>
                <li>Are there any additional or optional costs?</li>
                <li>Do you assist with Home Affairs documentation?</li>
                <li>Can you help with burial or cremation arrangements?</li>
                <li>How quickly can arrangements be made?</li>
                <li>Can you accommodate our cultural or religious requirements?</li>
                <li>Who will be our main contact person?</li>
              </ul>
            </div>

            <div className="mt-10 rounded-2xl bg-[#F7F7F4] p-6">
              <h2 className="text-2xl font-bold">
                Funeral Insights tip
              </h2>

              <p className="mt-4 leading-8 text-[#4B5B55]">
                Try to compare at least two providers where possible. The lowest
                price is not always the best option; clarity, compassion,
                reliability and transparency matter just as much.
              </p>
            </div>

            <div className="mt-10 flex justify-between text-sm font-semibold">
              <Link
                href="/resources"
                className="text-[#C8A46A] hover:text-[#1E3D34]"
              >
                ← Back to Resources
              </Link>

              <Link
                href="/resources/planning-ahead"
                className="text-[#C8A46A] hover:text-[#1E3D34]"
              >
                Next Guide →
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}