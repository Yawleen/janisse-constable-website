'use client';

import { useState, useEffect } from 'react';

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
      <div className="max-w-7xl mx-auto flex justify-center">
        <p className="text-sm md:text-base text-center">
          Soutenez Janisse Constable — Candidate n°1 Miss Hauts-de-Seine 2026
        </p>
      </div>
    </div>
  );
};

export default StickyVoteBar;
