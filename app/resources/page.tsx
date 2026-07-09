import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funeral Resources",
  description:
    "Helpful funeral planning resources for South African families, including funeral costs, checklists, burial, cremation and what to do when someone dies.",
};

const resources = [
  {
    title: "What to do when someone dies",
    description:
      "A calm step-by-step guide to the first actions families may need to take after a loved one passes away.",
    href: "/resources/what-to-do-when-someone-dies",
  },
  {
    title: "Funeral costs in South Africa",
    description:
      "Understand common funeral expenses, what affects the price, and how to plan within a realistic budget.",
    href: "/resources/funeral-costs-south-africa",
  },
  {
    title: "Burial vs cremation",
    description:
      "Compare the practical, emotional, cultural and cost considerations when choosing between burial and cremation.",
    href: "/resources/burial-vs-cremation",
  },
  {
    title: "Funeral planning checklist",
    description:
      "A practical checklist to help families organise documents, service details, providers and key decisions.",
    href: "/resources/funeral-planning-checklist",
  },
  {
    title: "Choosing a funeral provider",
    description:
      "Questions to ask before choosing a funeral parlour, undertaker or service provider.",
    href: "/resources/choosing-a-funeral-provider",
  },
  {
    title: "Planning ahead",
    description:
      "Helpful guidance for people who want to prepare in advance and reduce stress for their family.",
    href: "/resources/planning-ahead",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              RESOURCES
            </span>

            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Funeral guidance for difficult moments.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Helpful articles, checklists and practical guidance to help South
            African families make informed funeral decisions with confidence.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A46A]">
                  Guide
                </p>

                <h2 className="mt-4 text-2xl font-bold text-[#1E3D34]">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-8 text-[#4B5B55]">
                  {resource.description}
                </p>

                <p className="mt-6 font-semibold text-[#C8A46A] group-hover:text-[#1E3D34]">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}