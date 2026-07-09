import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burial vs Cremation",
  description:
    "Understand the differences between burial and cremation, including costs, planning considerations and common questions for South African families.",
};

export default function BurialVsCremationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              COMPARISON GUIDE
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Burial vs Cremation
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Choosing between burial and cremation is one of the most important
            funeral decisions a family will make. There is no universal right
            answer—your decision may be influenced by personal wishes, religious
            beliefs, family traditions and budget.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">

            <section className="mb-10">
              <h2 className="text-3xl font-bold">
                Understanding the difference
              </h2>

              <p className="mt-5 leading-8 text-[#4B5B55]">
                A burial involves laying the deceased to rest in a cemetery,
                while cremation respectfully reduces the body to ashes through a
                specialised process. Both options allow families to hold a
                meaningful funeral or memorial service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold">
                Burial
              </h2>

              <div className="mt-6 rounded-2xl bg-[#E8EFE9] p-6">
                <h3 className="text-xl font-semibold">May be suitable if:</h3>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4B5B55]">
                  <li>Your religion or culture traditionally practises burial.</li>
                  <li>You would like a permanent gravesite for family visits.</li>
                  <li>There are existing family burial plots.</li>
                  <li>A traditional funeral service is important to your family.</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold">
                Cremation
              </h2>

              <div className="mt-6 rounded-2xl bg-[#E8EFE9] p-6">
                <h3 className="text-xl font-semibold">May be suitable if:</h3>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4B5B55]">
                  <li>You prefer a simpler or more flexible arrangement.</li>
                  <li>You have limited cemetery space available.</li>
                  <li>You plan to keep or scatter the ashes where legally permitted.</li>
                  <li>You are looking for an option that may reduce some long-term costs.</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold">
                Things to consider
              </h2>

              <div className="space-y-5 mt-6">

                <div className="rounded-2xl border border-[#E6E0D2] p-6">
                  <h3 className="font-bold text-xl">Family wishes</h3>
                  <p className="mt-2 leading-8 text-[#4B5B55]">
                    Discuss the decision with close family members and, where
                    possible, respect any wishes expressed by the deceased.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E6E0D2] p-6">
                  <h3 className="font-bold text-xl">Religious beliefs</h3>
                  <p className="mt-2 leading-8 text-[#4B5B55]">
                    Different faiths have different traditions and teachings
                    regarding burial and cremation. Consider speaking with your
                    religious leader if you are unsure.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E6E0D2] p-6">
                  <h3 className="font-bold text-xl">Budget</h3>
                  <p className="mt-2 leading-8 text-[#4B5B55]">
                    Total costs vary depending on the funeral provider,
                    cemetery, crematorium, coffin, memorial arrangements and
                    optional services.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E6E0D2] p-6">
                  <h3 className="font-bold text-xl">Memorial options</h3>
                  <p className="mt-2 leading-8 text-[#4B5B55]">
                    Both burial and cremation offer meaningful ways to remember
                    a loved one through memorial services, monuments or other
                    personal tributes.
                  </p>
                </div>

              </div>
            </section>

            <div className="rounded-2xl bg-[#E8EFE9] p-6">
              <h2 className="text-2xl font-bold">
                Our advice
              </h2>

              <p className="mt-4 leading-8 text-[#4B5B55]">
                There is no "correct" choice between burial and cremation.
                Consider the wishes of the deceased, your family's preferences,
                religious or cultural traditions and your available budget.
                Taking time to discuss these factors can help you make a
                decision that feels right for everyone involved.
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
                href="/resources/funeral-costs-south-africa"
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