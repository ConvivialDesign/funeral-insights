import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { location } = await req.json();

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
      "X-Goog-FieldMask":
        "places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri,places.websiteUri",
    },
    body: JSON.stringify({
      textQuery: `funeral parlour near ${location}`,
      maxResultCount: 10,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    results: data.places || [],
    error: data.error || null,
  });
}