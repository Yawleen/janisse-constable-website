'use client';

import { useState, useEffect } from 'react';
import Button from './LinkButton';

const number = '71414';
const message = 'MISS 1';

const smsLink = `sms:${number}?body=${encodeURIComponent(message)}`;

const StickyVoteBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-primary-text px-4 py-2 md:px-6 md:py-3 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <p className="hidden lg:block text-base text-left">
          Soutenez Janisse Constable — Candidate n°1 Miss Hauts-de-Seine 2026
        </p>

        <div className="flex items-center gap-6 mx-auto lg:ml-auto lg:mr-0">
          <p className="text-primary-text/70 text-sm md:text-base text-center lg:text-right">
            Envoyez <strong className="text-primary-text">{message}</strong> au{' '}
            <strong className="text-primary-text">{number}</strong>
          </p>

          <Button href={smsLink}>Voter</Button>
        </div>
      </div>
    </div>
  );
};

export default StickyVoteBar;
