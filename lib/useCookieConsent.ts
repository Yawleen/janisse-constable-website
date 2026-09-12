'use client';

import { useEffect, useState } from 'react';

type CookieConsent = 'accepted' | 'refused' | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    
    if (savedConsent === 'accepted' || savedConsent === 'refused') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(savedConsent);
    }

    setIsLoaded(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
  };

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setConsent('refused');
  };

  return {
    consent,
    accept,
    refuse,
    isLoaded,
  };
}
