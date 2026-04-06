import { Instagram, Mail, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-25 md:py-30 px-6 md:px-12 text-primary-text bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-3">
          Janisse <span className="italic">Constable</span>
        </h2>
        <p className="text-primary-text/60 text-xs tracking-[0.3em] uppercase mb-12">
          Candidate n°1 — Miss Hauts-de-Seine
        </p>

        <div className="flex items-center justify-center gap-8 mb-12">
          <Link
            href="mailto:janisseconstable97@gmail.com"
            className="contact-link"
            aria-label="Contact"
          >
            <Mail size={20} strokeWidth={1.2} />
          </Link>
          <Link
            href="https://www.instagram.com/janisse_ctbl/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.2} />
          </Link>
          <Link
            href="https://www.facebook.com/janisse.constable"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Facebook"
          >
            <Facebook size={20} strokeWidth={1.2} />
          </Link>
          <Link
            href="https://fr.linkedin.com/in/janisse-constable"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.2} />
          </Link>
        </div>

        <div className="w-12 h-px bg-white/60 mx-auto mb-8" />

        <p className="text-xs">
          © 2026 Janisse Constable. Tous droits réservés.
          <br />
          <span className="italic">
            Site réalisé par{' '}
            <Link
              href="https://fr.linkedin.com/in/constable-yolene"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yolène Constable
            </Link>
            .
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
