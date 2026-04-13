'use client';

import { useCookieConsent } from '@/lib/useCookieConsent';

const CookieBanner = () => {
  const { consent, accept, refuse } = useCookieConsent();

  if (consent !== null) return <></>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
      <p className="text-xs md:text-sm">
        Nous utilisons des cookies pour mesurer l’audience (Google Analytics).
      </p>

      <div className="flex gap-2 text-sm md:text-base">
        <button
          onClick={accept}
          className="bg-white text-black p-2 md:px-4 md:py-2 rounded cursor-pointer"
        >
          Accepter
        </button>

        <button
          onClick={refuse}
          className="border border-white p-2 md:px-4 md:py-2 rounded cursor-pointer"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
