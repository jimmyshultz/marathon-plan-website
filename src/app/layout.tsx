import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marathon Training Plans | 3, 4, and 5-Hour Goal Times",
  description: "Structured 12-week marathon training plans for 3, 4, and 5-hour goal times based on Jack Daniels' methodology. Personalized running schedules for all levels.",
  keywords: "marathon training, running plan, marathon schedule, Jack Daniels, marathon training plan, 3 hour marathon, 4 hour marathon, 5 hour marathon",
  authors: [{ name: "Marathon Training Plans" }],
  openGraph: {
    title: "Marathon Training Plans | 3, 4, and 5-Hour Goal Times",
    description: "Structured 12-week marathon training plans for 3, 4, and 5-hour goal times based on Jack Daniels' methodology",
    url: "https://www.marathontrainingplans.com",
    siteName: "Marathon Training Plans",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marathon Training Plans | 3, 4, and 5-Hour Goal Times",
    description: "Structured 12-week marathon training plans for 3, 4, and 5-hour goal times based on Jack Daniels' methodology",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5443760017915120"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">
              Marathon training plans based on Jack Daniels&apos; methodology
            </p>
            <p className="text-gray-400 text-sm mb-4">
              This is for educational purposes only. Consult with a coach for personalized training.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
