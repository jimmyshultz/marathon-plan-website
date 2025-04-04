"use client";

import { Analytics } from "@vercel/analytics/react";

// A simple wrapper component to enable Vercel Analytics
export function AnalyticsWrapper() {
  return <Analytics />;
}

export default AnalyticsWrapper; 