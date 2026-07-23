"use client";

import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParameters?: Record<string, unknown>,
    ) => void;
  }
}

export default function CallbackThankYouPage() {
  useEffect(() => {
    window.gtag?.("event", "generate_lead", {
      lead_source: "callback_form",
      form_name: "funeral_callback_request",
    });
  }, []);

  return (
    <main className="bg-gray-50">
      <section className="mx-auto flex min-h-[65vh] max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-800">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-950">
            Your request has been received
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
            Thank you for contacting Funeral Insights. We have received
            your information and will work to connect you with a
            participating funeral provider who can assist you.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-lg bg-gray-50 p-5 text-left text-sm leading-6 text-gray-700">
            <strong>Please note:</strong> Funeral Insights is an
            information and referral platform. In an emergency, or
            where the death requires urgent medical or police
            assistance, contact the relevant emergency services
            directly.
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-lg bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
          >
            Return to Funeral Insights
          </Link>
        </div>
      </section>
    </main>
  );
}