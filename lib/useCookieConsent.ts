'use client';

import { useState } from 'react';

type CookieConsent = boolean | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    const stored = window.localStorage.getItem('cookie-consent');

    if (stored === 'accepted') return true;
    if (stored === 'refused') return false;

    return null;
  });

  const accept = () => {
    window.localStorage.setItem('cookie-consent', 'accepted');
    setConsent(true);
  };

  const refuse = () => {
    window.localStorage.setItem('cookie-consent', 'refused');
    setConsent(false);
  };

  return { consent, accept, refuse };
}
