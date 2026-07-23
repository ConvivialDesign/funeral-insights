import type { Metadata } from "next";
import CallbackForm from "./CallbackForm";

export const metadata: Metadata = {
  title: "Request a Callback | Funeral Insights South Africa",
  description:
    "Request assistance from a participating funeral provider in South Africa. Complete the form and a provider can contact you.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-800">
              Funeral assistance
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Need help arranging a funeral?
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
              We understand that this may be an overwhelming and
              difficult time. Complete the form below and we can share
              your request with a participating funeral provider in
              your province.
            </p>
          </div>

          <CallbackForm />

          <div className="mt-10 rounded-2xl bg-emerald-950 p-6 text-white sm:p-8">
            <h2 className="text-xl font-semibold">Our promise</h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-emerald-50 sm:text-base">
              <p>✓ The service is free for families seeking help.</p>
              <p>
                ✓ There is no obligation to use a provider who contacts
                you.
              </p>
              <p>
                ✓ Your enquiry is only shared for the purpose of
                helping with your funeral arrangements.
              </p>
              <p>
                ✓ Your information is not displayed publicly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}