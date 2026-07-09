import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://funeralinsights.co.za"),

  title: {
    default: "Funeral Insights South Africa",
    template: "%s | Funeral Insights",
  },

  description:
    "Helping South Africans plan funerals with confidence. Compare funeral providers, access planning guides, and make informed funeral decisions.",

  keywords: [
    "Funeral Insights",
    "Funeral Planning",
    "Funeral Guide",
    "Funeral Parlours",
    "Funeral Costs",
    "South Africa",
    "Burial",
    "Cremation",
  ],

  authors: [{ name: "Funeral Insights South Africa" }],

  creator: "Funeral Insights South Africa",

  openGraph: {
    title: "Funeral Insights South Africa",
    description:
      "Helping South Africans make informed funeral decisions.",
    url: "https://funeralinsights.co.za",
    siteName: "Funeral Insights",
    locale: "en_ZA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
          />
      </body>
    </html>
  );
}
