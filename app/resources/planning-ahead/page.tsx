import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning Ahead",
  description:
    "Learn how planning ahead for a funeral can reduce stress, provide peace of mind and help your family make informed decisions.",
};

export default function PlanningAheadPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              PLANNING GUIDE
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Planning ahead
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Planning ahead gives you the opportunity to make important decisions
            in your own time, helping reduce uncertainty and easing the burden
            on your loved ones in the future.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">
              Why plan ahead?
            </h2>

            <p className="mt-5 leading-8 text-[#4B5B55]">
              Funeral planning is often done during an emotional and stressful
              time. By making decisions in advance, you can give your family
              greater clarity, reduce difficult choices and ensure your wishes
              are understood.
            </p>

            <div className="mt-10 space-y-6">

              {[
                {
                  title: "Record your wishes",
                  text: "Consider writing down your preferences for burial or cremation, the type of service you would like, music, readings, and any personal requests you wish your family to know about.",
                },
                {
                  title: "Talk to your family",
                  text: "Having an open conversation now can help avoid uncertainty later. Let your loved ones know where important documents are kept and discuss any wishes you have for your funeral.",
                },
                {
                  title: "Review your finances",
                  text: "Understand how funeral costs may be covered, whether through savings, funeral insurance or other financial arrangements. Knowing what resources are available can reduce financial pressure.",
                },
                {
                  title: "Keep important documents together",
                  text: "Store documents such as your ID, will, funeral policy, medical aid details and emergency contacts in a place that trusted family members can easily access when needed.",
                },
                {
                  title: "Review your plans regularly",
                  text: "Your wishes and personal circumstances may change over time. Reviewing your plans every few years helps ensure they remain up to date.",
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
                Planning ahead is about peace of mind
              </h2>

              <p className="mt-4 leading-8 text-[#4B5B55]">
                Planning ahead does not mean expecting the worst—it means giving
                yourself and your loved ones greater confidence about the future.
                Even a few simple conversations and written notes can make a
                meaningful difference during a difficult time.
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
                href="/resources/what-to-do-when-someone-dies"
                className="text-[#C8A46A] hover:text-[#1E3D34]"
              >
                Read First Steps Guide →
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}