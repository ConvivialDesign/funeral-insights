import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Do When Someone Dies",
  description:
    "A calm step-by-step guide for South African families on what to do when someone dies.",
};

export default function WhatToDoWhenSomeoneDiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              FIRST STEPS GUIDE
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            What to do when someone dies
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            A calm, practical guide to the first steps families may need to take
            after a loved one passes away.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A46A]">
              Funeral planning guide
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              First steps to consider
            </h2>

            <div className="mt-8 space-y-8 leading-8 text-[#4B5B55]">
              <section>
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  1. Confirm the death
                </h3>
                <p className="mt-3">
                  If the person passed away at home or unexpectedly, contact
                  emergency medical services, a doctor, or the relevant local
                  authorities. If the death was unexpected or unnatural, the
                  South African Police Service may need to be involved.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  2. Obtain the required documentation
                </h3>
                <p className="mt-3">
                  In South Africa, a death must be reported and registered with
                  the Department of Home Affairs. A death certificate is issued
                  after the death has been registered. A burial order is also
                  required before a burial may take place.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  3. Contact a funeral provider
                </h3>
                <p className="mt-3">
                  A funeral provider can help with transport, documentation,
                  care of the deceased, burial or cremation arrangements, and
                  coordination of the funeral service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  4. Locate important documents
                </h3>
                <p className="mt-3">
                  Try to find the deceased person&apos;s ID document, funeral
                  policy details, medical aid information, will, marriage
                  certificate, and any written funeral wishes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  5. Make key decisions
                </h3>
                <p className="mt-3">
                  Families may need to decide between burial and cremation, set
                  a budget, choose a venue, arrange transport, select a coffin or
                  urn, and plan the service or memorial.
                </p>
              </section>

              <div className="rounded-2xl bg-[#E8EFE9] p-6">
                <h3 className="text-xl font-bold text-[#1E3D34]">
                  Important note
                </h3>
                <p className="mt-3">
                  This guide is for general information only. Requirements may
                  differ depending on the circumstances, municipality, provider,
                  religion, culture, and family wishes. Always confirm current
                  requirements with the relevant authority or provider.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/resources"
                className="font-semibold text-[#C8A46A] hover:text-[#1E3D34]"
              >
                ← Back to resources
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}