import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funeral Costs in South Africa",
  description:
    "A practical guide to understanding funeral costs in South Africa, what affects the price, and questions to ask before accepting a quote.",
};

export default function FuneralCostsSouthAfricaPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              COST GUIDE
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Funeral costs in South Africa
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Funeral costs can vary widely depending on the type of service,
            location, provider, transport, coffin, catering and family
            preferences.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">
              What affects the cost of a funeral?
            </h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Burial or cremation",
                  text: "Burial and cremation have different cost structures. Burial may include cemetery, grave opening, coffin and tombstone costs, while cremation may include crematorium and urn-related costs.",
                },
                {
                  title: "Coffin or casket",
                  text: "The coffin or casket can be one of the larger expenses. Prices vary depending on material, finish and design.",
                },
                {
                  title: "Transport",
                  text: "Transport costs may include collection of the deceased, hearse services, family transport and long-distance transfers where needed.",
                },
                {
                  title: "Venue and service",
                  text: "Costs may differ depending on whether the service is held at a church, chapel, home, community hall, cemetery or crematorium.",
                },
                {
                  title: "Catering and flowers",
                  text: "Catering, flowers, printed programmes, music, tents, chairs and décor can add meaning to the service, but they also affect the total cost.",
                },
                {
                  title: "Tombstone or memorial",
                  text: "A tombstone or memorial may be arranged separately after the funeral and can significantly increase the total cost over time.",
                },
              ].map((item) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[#E6E0D2] p-6"
                >
                  <h3 className="text-xl font-bold text-[#1E3D34]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-8 text-[#4B5B55]">{item.text}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#E8EFE9] p-6">
              <h2 className="text-2xl font-bold">
                Questions to ask before accepting a quote
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-[#4B5B55]">
                <li>What exactly is included in the quoted price?</li>
                <li>Are transport costs included?</li>
                <li>Are cemetery or crematorium fees included?</li>
                <li>Does the quote include a coffin, casket or urn?</li>
                <li>Are there extra costs for weekends, distance or storage?</li>
                <li>Is catering included or separate?</li>
                <li>What payment terms apply?</li>
              </ul>
            </div>

            <div className="mt-10 rounded-2xl bg-[#F7F7F4] p-6">
              <h2 className="text-2xl font-bold">Funeral Insights tip</h2>

              <p className="mt-4 leading-8 text-[#4B5B55]">
                Ask for a written quote and compare providers on both price and
                clarity. A cheaper quote is not always better if important items
                are excluded or unclear.
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
                href="/resources/funeral-planning-checklist"
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