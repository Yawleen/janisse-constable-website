'use client';

import { useState, useEffect } from 'react';
import LinkButton from './LinkButton';
import { smsLink } from './sections/Vote';
import { sendGAEvent } from '@next/third-parties/google';

const StickyVoteBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVoteClick = () => {
    sendGAEvent('event', 'vote_click', {
      button_location: 'sticky_vote_bar',
    });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-primary-text px-4 py-3 md:px-6 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-5">
        <p className="text-sm md:text-base text-center">
          Soutenez Janisse Constable — Candidate n°3 à Miss Île-de-France 2026
        </p>
        <div className="md:hidden">
          <LinkButton onClick={handleVoteClick} isExternal href={smsLink}>
            <span className="text-base font-bold">Voter</span>
          </LinkButton>
        </div>
        <div className="hidden md:block">
          <LinkButton href="#vote">
            <span className="text-base font-bold">Voter</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default StickyVoteBar;
