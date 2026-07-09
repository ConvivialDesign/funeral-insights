"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function FindFuneralParlour() {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function searchPlaces() {
    if (!location.trim()) return;

    setLoading(true);

    const res = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location }),
    });

    const data = await res.json();

    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F7F4] text-[#1E3D34]">

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-16">

          <div className="flex items-center justify-center gap-8">

            <div className="h-[2px] w-32 bg-[#C8A46A]/60" />

            <span className="whitespace-nowrap text-base font-semibold uppercase tracking-[0.45em] text-[#C8A46A]">
              FIND A FUNERAL PROVIDER
            </span>

            <div className="h-[2px] w-32 bg-[#C8A46A]/60" />

          </div>

          <h1 className="mt-8 text-center text-5xl font-bold leading-tight">
            Find trusted funeral providers near you.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-[#4B5B55]">
            Search funeral providers in your area, compare options and visit
            their websites or Google Maps listing.
          </p>

        </section>

        {/* Search */}
        <section className="mx-auto max-w-4xl px-6">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <label className="mb-3 block font-semibold">
              Search by suburb, town or city
            </label>

            <div className="flex flex-col gap-4 md:flex-row">

              <input
                className="flex-1 rounded-lg border border-gray-300 p-4 outline-none focus:border-[#1E3D34]"
                placeholder="Example: Roodepoort"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <button
                onClick={searchPlaces}
                className="rounded-lg bg-[#1E3D34] px-8 py-4 font-semibold text-white hover:bg-[#173229]"
              >
                {loading ? "Searching..." : "Search"}
              </button>

            </div>

          </div>

        </section>

        {/* Results */}
        <section className="mx-auto mt-10 max-w-6xl px-6 pb-20">

          {loading && (
            <p className="text-center text-lg">
              Searching funeral providers...
            </p>
          )}

          {!loading && results.length === 0 && location !== "" && (
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold">
                No providers found
              </h2>

              <p className="mt-4 text-[#4B5B55]">
                Try searching for a nearby town or city instead.
              </p>
            </div>
          )}

          <div className="space-y-6">

            {results.map((place, index) => (

              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm"
              >

                <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wide text-[#C8A46A]">
                      Funeral Provider
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      {place.displayName?.text}
                    </h2>

                    <p className="mt-4 text-[#4B5B55]">
                      {place.formattedAddress}
                    </p>

                    <p className="mt-4">
                      ⭐{" "}
                      <span className="font-semibold">
                        {place.rating || "No rating"}
                      </span>{" "}
                      ({place.userRatingCount || 0} reviews)
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {place.websiteUri && (
                        <span className="rounded-full bg-[#E8EFE9] px-3 py-1 text-sm font-medium text-[#1E3D34]">
                          Has Website
                        </span>
                      )}

                      {place.rating >= 4.5 && (
                        <span className="rounded-full bg-[#E8EFE9] px-3 py-1 text-sm font-medium text-[#1E3D34]">
                          ⭐ High Rating
                        </span>
                      )}

                      {place.userRatingCount >= 50 && (
                        <span className="rounded-full bg-[#E8EFE9] px-3 py-1 text-sm font-medium text-[#1E3D34]">
                          Trusted by Many
                        </span>
                      )}
                    </div>
                    
                  </div>

                  <div className="flex flex-col gap-3">

                    {place.googleMapsUri && (
                      <a
                        href={place.googleMapsUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#1E3D34] px-6 py-3 text-center font-semibold text-white hover:bg-[#173229]"
                      >
                        Open in Google Maps
                      </a>
                    )}

                    {place.websiteUri && (
                      <a
                        href={place.websiteUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[#1E3D34] px-6 py-3 text-center font-semibold text-[#1E3D34] hover:bg-[#F5F5F5]"
                      >
                        Visit Website
                      </a>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}