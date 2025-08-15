import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import AnalyticsWrapper from "../components/AnalyticsWrapper";
import Navigation from "../components/Navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marathon Training Plans | Science-Based 12-Week Programs for 3, 4, & 5-Hour Goals",
  description: "Free marathon training plans based on Jack Daniels' proven VDOT methodology. Comprehensive 12-week schedules, training guides, nutrition tips, and race strategies for runners targeting 3:00, 4:00, and 5:00 marathon times.",
  keywords: "marathon training plan, Jack Daniels VDOT, marathon schedule, 3 hour marathon, 4 hour marathon, 5 hour marathon, running training program, marathon preparation, distance running, endurance training, marathon pace calculator, running coach, marathon tips, race strategy",
  authors: [{ name: "Marathon Training Plans" }],
  openGraph: {
    title: "Marathon Training Plans | Science-Based Training Programs",
    description: "Free marathon training plans based on Jack Daniels' VDOT methodology. Achieve your 3, 4, or 5-hour marathon goal with structured 12-week programs, training guides, and expert advice.",
    url: "https://www.marathontrainingplans.com",
    siteName: "Marathon Training Plans",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marathon Training Plans - Science-Based Training Programs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marathon Training Plans | Science-Based Training Programs",
    description: "Free marathon training plans based on Jack Daniels' VDOT methodology for 3, 4, and 5-hour marathon goals.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.marathontrainingplans.com",
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
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5443760017915120"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <CookieConsent />
        <AnalyticsWrapper />
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
