import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
      <>
            <Navbar />

    <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        
        <div className="flex items-center justify-center gap-8">
          <div className="h-[2px] w-32 bg-[#C8A46A]" />

          <span className="whitespace-nowrap text-base font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
            ABOUT FUNERAL INSIGHTS
          </span>

          <div className="h-[2px] w-32 bg-[#C8A46A]" />
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-tight">
          Bringing clarity to one of life's most difficult moments.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#4B5B55]">
          We believe no family should have to navigate funeral planning without
          trusted guidance. Funeral Insights exists to help families make informed
          decisions with confidence, clarity and practical support.
        </p>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <h2 className="text-3xl font-bold">
          Why we exist
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-[#4B5B55]">

          <p>
            Losing someone you love is emotionally overwhelming. At the same
            time, families are expected to make important decisions about
            funeral arrangements, documentation, funeral cover, providers and
            costs.
          </p>

          <p>
            We believe nobody should have to navigate those decisions without
            guidance.
          </p>

          <p>
            Funeral Insights was created to provide practical tools,
            personalised planning and trusted information that help families
            understand what to do next.
          </p>

        </div>

      </section>

      {/* Mission */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-8 text-xl leading-9 text-[#4B5B55]">
            Helping families make informed funeral decisions through practical
            guidance, personalised tools and trusted information.
          </p>

        </div>

      </section>

      {/* Vision */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="text-3xl font-bold">
          Our Vision
        </h2>

        <p className="mt-8 text-lg leading-9 text-[#4B5B55]">
          We are building towards becoming Africa's most trusted platform where
          families, funeral providers and the wider funeral ecosystem come
          together. Our goal is to reduce uncertainty, improve transparency and
          help families make informed decisions during one of life's most
          important moments.
        </p>

      </section>

      {/* Principles */}
      <section className="bg-[#E8EFE9] py-16">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-3xl font-bold">
            Our Principles
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Families First
              </h3>

              <p className="mt-4 text-[#4B5B55] leading-8">
                Every decision we make begins with one question:
                "Will this genuinely help families?"
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Independent Guidance
              </h3>

              <p className="mt-4 text-[#4B5B55] leading-8">
                We believe recommendations should be driven by what is best for
                families—not by who pays the most.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Practical over Complicated
              </h3>

              <p className="mt-4 text-[#4B5B55] leading-8">
                Funeral planning is already difficult. We focus on making
                information simple, practical and easy to understand.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-bold">
                Building Trust
              </h3>

              <p className="mt-4 text-[#4B5B55] leading-8">
                Trust is more valuable than short-term growth. We aim to earn it
                through transparency, accuracy and genuine care.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">

        <h2 className="text-4xl font-bold">
          We're just getting started.
        </h2>

        <p className="mt-8 text-xl leading-9 text-[#4B5B55]">
          Funeral Insights is growing into a platform that will help families,
          support funeral providers and improve transparency across the funeral
          industry. Every new feature we build is guided by one purpose:
          bringing clarity when families need it most.
        </p>

      </section>

    </main>

    <Footer />
    </>
  );
}