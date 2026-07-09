import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funeral Planning Checklist",
  description:
    "A practical funeral planning checklist for South African families covering documents, providers, costs, service details and after-funeral tasks.",
};

export default function FuneralPlanningChecklistPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              CHECKLIST
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Funeral planning checklist
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            A practical checklist to help families organise the key documents,
            decisions and arrangements involved in planning a funeral.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Use this as a guide</h2>

            <p className="mt-5 leading-8 text-[#4B5B55]">
              Every funeral is different, but this checklist can help you keep
              track of the most common steps and decisions. Some items may not
              apply to your situation.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Important documents",
                  items: [
                    "Identity document of the deceased",
                    "Death notice or medical certificate of cause of death",
                    "Death certificate once issued",
                    "Burial order where applicable",
                    "Funeral policy or insurance documents",
                    "Will or estate documents if available",
                    "Marriage certificate if relevant",
                  ],
                },
                {
                  title: "Funeral provider",
                  items: [
                    "Choose a funeral provider",
                    "Request a written quote",
                    "Confirm what is included and excluded",
                    "Confirm transport arrangements",
                    "Ask who will assist with documentation",
                    "Confirm payment terms",
                  ],
                },
                {
                  title: "Service decisions",
                  items: [
                    "Decide between burial or cremation",
                    "Choose the date and time",
                    "Choose the venue",
                    "Select a coffin, casket or urn",
                    "Choose readings, music or prayers",
                    "Decide who will speak at the service",
                    "Arrange printed programmes if needed",
                  ],
                },
                {
                  title: "Family and guests",
                  items: [
                    "Notify close family and friends",
                    "Share service details",
                    "Arrange transport where needed",
                    "Consider accommodation for travelling family",
                    "Confirm catering requirements",
                    "Arrange flowers or décor if desired",
                  ],
                },
                {
                  title: "Costs and payments",
                  items: [
                    "Set a realistic budget",
                    "Compare provider quotes where possible",
                    "Check funeral policy benefits",
                    "Confirm cemetery or crematorium fees",
                    "Track additional costs such as catering and transport",
                    "Keep receipts and important records",
                  ],
                },
                {
                  title: "After the funeral",
                  items: [
                    "Collect final documents and receipts",
                    "Follow up on insurance or policy claims",
                    "Begin estate-related administration if needed",
                    "Arrange a tombstone or memorial if desired",
                    "Send thank-you messages where appropriate",
                    "Keep important documents safely stored",
                  ],
                },
              ].map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-[#E6E0D2] p-6"
                >
                  <h3 className="text-xl font-bold text-[#1E3D34]">
                    {section.title}
                  </h3>

                  <ul className="mt-5 space-y-3 leading-8 text-[#4B5B55]">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-[#C8A46A]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#E8EFE9] p-6">
              <h2 className="text-2xl font-bold">Funeral Insights tip</h2>

              <p className="mt-4 leading-8 text-[#4B5B55]">
                Do not feel pressured to decide everything at once. Start with
                the urgent items: documentation, choosing a provider, transport,
                burial or cremation arrangements, and confirming the service
                details.
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
                href="/resources/choosing-a-funeral-provider"
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