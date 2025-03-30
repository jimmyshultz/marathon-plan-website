"use client";

import { useEffect } from 'react';
import Script from 'next/script';

// Add type declaration for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

interface GoogleAdsenseProps {
  client: string; // Your AdSense Publisher ID
  slot: string;   // Your Ad Unit ID
  format?: string; 
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function GoogleAdsense({
  client,
  slot,
  format = 'auto',
  responsive = true,
  style = { display: 'block' },
}: GoogleAdsenseProps) {
  
  // This effect is necessary for loading ads dynamically after component mount
  useEffect(() => {
    // Push commands to the AdSense command queue
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <>
      {/* AdSense Script */}
      <Script
        id="google-adsense"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      
      {/* Ad Unit */}
      <div className="google-ad-container my-4">
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </>
  );
}

// Example usage:
/*
  <GoogleAdsense 
    client="ca-pub-XXXXXXXXXXXXXXXX"
    slot="1234567890"
  />
*/ 