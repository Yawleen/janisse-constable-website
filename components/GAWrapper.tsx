'use client';

import { useCookieConsent } from '@/lib/useCookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';

export function GAWrapper() {
  const { isLoaded, consent } = useCookieConsent();

  if (!isLoaded || consent !== 'accepted') {
    return null;
  }
  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID_TEST!} />;
  {
    /* remplacer l'ID par celui de la production */
  }
}
