import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const serif = Playfair_Display({
  variable: '--font-serif',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const sans = Inter({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://janisseconstable.fr'),
  title: 'Janisse Constable - Candidate n°1 Miss Hauts-de-Seine',
  description:
    "Découvrez le parcours de Janisse Constable, Candidate numéro 1 à Miss Hauts-de-Seine. Soutenez sa candidature et assistez à l'élection.",
  openGraph: {
    title: 'Janisse Constable – Candidate n°1 Miss Hauts-de-Seine',
    description: 'Découvrez son parcours et soutenez sa candidature.',
    url: 'https://janisseconstable.fr',
    siteName: 'Janisse Constable',
    images: [
      {
        url: '/og-image.jpg',
        width: 1600,
        height: 2400,
        alt: 'Janisse Constable - Candidate n°1 Miss Hauts-de-Seine',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janisse Constable – Candidate n°1 Miss Hauts-de-Seine',
    description: 'Candidate numéro 1 à Miss Hauts-de-Seine.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${serif.variable} ${sans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
