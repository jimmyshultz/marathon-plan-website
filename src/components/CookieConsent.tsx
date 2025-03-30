"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consentAccepted = localStorage.getItem('cookie-consent');
    if (!consentAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 pr-4">
          <p>
            This website uses cookies to ensure you get the best experience on our website. 
            By continuing to use this site, you consent to our use of cookies in accordance with our{' '}
            <Link href="/privacy-policy" className="text-blue-300 underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Accept
          </button>
          <Link
            href="/privacy-policy"
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
} 