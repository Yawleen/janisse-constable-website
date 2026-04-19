import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

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
  metadataBase: new URL(SITE_URL),
  title: 'Janisse Constable - Miss Hauts-de-Seine 2026',
  description:
    'Élue Miss Hauts-de-Seine 2026, découvrez l’univers de Janisse Constable, son parcours, ses valeurs et ses engagements.',
  openGraph: {
    title: 'Janisse Constable - Miss Hauts-de-Seine 2026',
    description: 'Découvrez son parcours et ses valeurs.',
    url: SITE_URL,
    siteName: 'Janisse Constable',
    images: [
      {
        url: 'images/hero-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Janisse Constable - Miss Hauts-de-Seine 2026',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janisse Constable - Miss Hauts-de-Seine 2026',
    description: 'Découvrez son parcours et ses valeurs.',
    images: ['images/hero-bg.jpeg'],
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
        <Analytics />
      </body>
    </html>
  );
}
