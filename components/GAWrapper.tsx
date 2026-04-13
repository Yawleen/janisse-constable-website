"use client";

import { useCookieConsent } from '@/lib/useCookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';

export function GAWrapper() {
  const { consent } = useCookieConsent();

  if (!consent) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />;
}
