import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
     <>
      <Navbar />
      
    <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Guiding families. 
            <br />
            Connecting providers. 
            <br />
            Bringing clarity.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5B55]">
            Planning a funeral can feel overwhelming. Funeral Insights helps South African families make informed 
            decisions through trusted guidance, practical planning tools and an independent provider directory.
          </p>

          <div className="mt-8">
            <Link
              href="/planning-guide"
              className="inline-block rounded-lg bg-[#1E3D34] px-6 py-4 font-semibold text-white shadow-sm hover:bg-[#173229]"
            >
              Start Your Personal Funeral Plan
            </Link>
          </div>

          <p className="mt-5 text-sm text-[#4B5B55]">
            Already know what you need?{" "}
            <Link
              href="/find-funeral-parlour"
              className="font-semibold underline"
            >
              Find a Provider →
            </Link>
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#E8EFE9] to-white p-8 shadow-sm">
          <div className="rounded-2xl border bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A46A]">
              PERSONALISED PLANNING
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Every family's situation is different.
            </h2>
            <p className="mt-4 leading-7 text-[#4B5B55]">
              Answer a few simple questions to receive a personalised funeral plan with recommended next steps,
              practical guidance and helpful resources tailored to your situation
            </p>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Start Here</h2>
            <p className="mt-3 text-[#4B5B55]">
              Get a personalised plan and clear next steps, based on your
              situation.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Funeral Planning Guide</h3>
              <p className="mt-3 leading-7 text-[#4B5B55]">
                Answer a few questions and receive a personalised funeral plan
                with practical guidance and next steps.
              </p>
            </div>

            <div className="md:text-right">
              <Link
                href="/planning-guide"
                className="inline-block rounded-lg bg-[#1E3D34] px-6 py-4 font-semibold text-white hover:bg-[#173229]"
              >
                Get Your Personal Funeral Plan
              </Link>
              <p className="mt-3 text-sm text-[#4B5B55]">
                Private. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Or explore our other tools
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Find a Funeral Provider</h3>
            <p className="mt-3 leading-7 text-[#4B5B55]">
              Search funeral providers near you and compare available options.
            </p>
            <Link
              href="/find-funeral-parlour"
              className="mt-6 inline-block rounded-lg border border-[#1E3D34] px-5 py-3 font-semibold"
            >
              Search Providers
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Funeral Planning Resources</h3>
            <p className="mt-3 leading-7 text-[#4B5B55]">
              Read practical guidance on funeral planning, documents, funeral
              cover and provider questions.
            </p>
            <Link
              href="/resources"
              className="mt-6 inline-block rounded-lg border border-[#1E3D34] px-5 py-3 font-semibold text-[#1E3D34] transition hover:bg-[#1E3D34] hover:text-white"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why families trust Funeral Insights
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold">Independent</h3>
            <p className="mt-3 text-[#4B5B55]">
              We focus on helping families make informed decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold">South African</h3>
            <p className="mt-3 text-[#4B5B55]">
              Built around South African funeral planning needs.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-bold">Compassionate</h3>
            <p className="mt-3 text-[#4B5B55]">
              Practical support during one of life&apos;s most difficult
              moments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#E8EFE9] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4B5B55]">
          Funeral planning can feel overwhelming. Funeral Insights exists to
          provide practical guidance, trusted information and personalised
          planning to help families make informed decisions when they need it
          most.
        </p>
      </section>

    </main>

     <Footer />
    </>
  );
}