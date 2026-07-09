"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import {
  getPotentialRisks,
  getImmediateActions,
  getFuneralTypeGuidance,
  getSituationOverview,
  getKeyConcerns,
  getRecommendedNextAction,
} from "@/lib/planning-guide/decisionEngine";

export default function PlanningGuide() {
  const [deathLocation, setDeathLocation] = useState("");
  const [province, setProvince] = useState("");
  const [urgency, setUrgency] = useState("");
  const [funeralCover, setFuneralCover] = useState("");
  const [funeralType, setFuneralType] = useState("");

  const inputs = { deathLocation, province, urgency, funeralCover, funeralType };

  function resetGuide() {
    setDeathLocation("");
    setProvince("");
    setUrgency("");
    setFuneralCover("");
    setFuneralType("");
  }

  function printPlan() {
    window.print();
  }

  function OptionButton({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 text-left text-lg font-medium text-[#1E3D34] shadow-sm transition hover:border-[#1E3D34] hover:bg-[#E8EFE9]"
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">
        <section
          id="planning-hero"
          className="mx-auto max-w-4xl px-6 py-16 text-center"
        >
          <div className="flex items-center justify-center gap-8">
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              PLANNING GUIDE
            </span>
            <div className="h-[2px] w-24 bg-[#C8A46A]/60" />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Get your personal funeral plan.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#4B5B55]">
            Answer a few simple questions and receive practical guidance,
            important considerations and a recommended next step.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20">
          {!deathLocation && (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">
                First, where did the death occur?
              </h2>

              <div className="mt-8 grid gap-4">
                {["At home", "In hospital", "In hospice", "Accident", "Other"].map(
                  (option) => (
                    <OptionButton
                      key={option}
                      onClick={() => setDeathLocation(option)}
                    >
                      {option}
                    </OptionButton>
                  )
                )}
              </div>
            </div>
          )}

          {deathLocation && !province && (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">Which province are you in?</h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Gauteng",
                  "Western Cape",
                  "KwaZulu-Natal",
                  "Eastern Cape",
                  "Free State",
                  "Limpopo",
                  "Mpumalanga",
                  "North West",
                  "Northern Cape",
                ].map((option) => (
                  <OptionButton key={option} onClick={() => setProvince(option)}>
                    {option}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {deathLocation && province && !urgency && (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">
                How urgently is assistance needed?
              </h2>

              <div className="mt-8 grid gap-4">
                {["Immediately", "Within a few days", "Planning ahead"].map(
                  (option) => (
                    <OptionButton key={option} onClick={() => setUrgency(option)}>
                      {option}
                    </OptionButton>
                  )
                )}
              </div>
            </div>
          )}

          {deathLocation && province && urgency && !funeralCover && (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">
                Is there funeral cover in place?
              </h2>

              <div className="mt-8 grid gap-4">
                {["Yes", "No", "Not sure"].map((option) => (
                  <OptionButton
                    key={option}
                    onClick={() => setFuneralCover(option)}
                  >
                    {option}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {deathLocation && province && urgency && funeralCover && !funeralType && (
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">
                What type of funeral are you considering?
              </h2>

              <div className="mt-8 grid gap-4">
                {["Burial", "Cremation", "Not sure"].map((option) => (
                  <OptionButton
                    key={option}
                    onClick={() => setFuneralType(option)}
                  >
                    {option}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {deathLocation && province && urgency && funeralCover && funeralType && (
            <div id="print-plan" className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-4xl font-bold">Your Personal Funeral Plan</h2>

              <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F7F7F4] p-6">
                <h3 className="text-2xl font-bold">Funeral Plan</h3>

                <div className="mt-5 grid gap-3 text-[#4B5B55] md:grid-cols-2">
                  <p><strong>Where it happened:</strong> {deathLocation}</p>
                  <p><strong>Province:</strong> {province}</p>
                  <p><strong>Urgency:</strong> {urgency}</p>
                  <p><strong>Funeral cover:</strong> {funeralCover}</p>
                  <p><strong>Funeral type:</strong> {funeralType}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <h3 className="text-2xl font-bold">Assessment</h3>
                <p className="mt-4 leading-8 text-[#4B5B55]">
                  {getSituationOverview(inputs)}
                </p>
              </div>

              {getKeyConcerns(inputs).length > 0 && (
                <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6">
                  <h3 className="text-2xl font-bold">Key Concerns</h3>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4B5B55]">
                    {getKeyConcerns(inputs).map((concern) => (
                      <li key={concern}>{concern}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 rounded-2xl bg-[#E8EFE9] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A46A]">
                  Recommended Next Action
                </p>

                <p className="mt-3 text-xl font-semibold leading-8">
                  {getRecommendedNextAction(inputs)}
                </p>
              </div>

              <ReportSection title="Immediate Actions">
                {getImmediateActions(inputs).map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ReportSection>

              <ReportSection title="Funeral Type Guidance">
                {getFuneralTypeGuidance(inputs).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ReportSection>

              <ReportSection title="Questions to Ask Funeral Providers">
                <li>What is included in the quoted price?</li>
                <li>Are removal, storage and transport included?</li>
                <li>Are there extra costs not shown in the quote?</li>
                <li>When is payment required?</li>
                <li>Can I get the quote in writing?</li>
              </ReportSection>

              {getPotentialRisks(inputs).length > 0 && (
                <ReportSection title="Potential Risks to Watch">
                  {getPotentialRisks(inputs).map((risk) => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ReportSection>
              )}

              <div
                id="find-providers"
                className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F7F7F4] p-6"
              >
                <h3 className="text-2xl font-bold">Find Providers</h3>

                <p className="mt-3 leading-7 text-[#4B5B55]">
                  You can now compare funeral providers in your area.
                </p>

                <div className="no-print mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/find-funeral-parlour"
                    className="rounded-lg bg-[#1E3D34] px-6 py-3 text-center font-semibold text-white hover:bg-[#173229]"
                  >
                    Find providers near me
                  </Link>

                  <Link
                    href={`/planning-guide/print?deathLocation=${encodeURIComponent(
                      deathLocation
                    )}&province=${encodeURIComponent(province)}&urgency=${encodeURIComponent(
                      urgency
                    )}&funeralCover=${encodeURIComponent(
                      funeralCover
                    )}&funeralType=${encodeURIComponent(funeralType)}`}
                    target="_blank"
                    className="rounded-lg border border-[#C8A46A] px-6 py-3 text-center font-semibold text-[#1E3D34] hover:bg-white"
                  >
                    Download Funeral Plan (PDF)
                  </Link>

                  <button
                    onClick={resetGuide}
                    className="rounded-lg border border-[#1E3D34] px-6 py-3 font-semibold text-[#1E3D34] hover:bg-white"
                  >
                    Start Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

function ReportSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6">
      <h3 className="text-2xl font-bold">{title}</h3>

      <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#4B5B55]">
        {children}
      </ul>
    </div>
  );
}