import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { BehaviourAnalytics, CookieConsent } from '@/components/consent';
import { Analytics } from '@vercel/analytics/next';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talavishiraajgroups.com'),
  title: { default: 'Talavishiraaj Groups | Engineering, AI and Research', template: '%s | Talavishiraaj Groups' },
  description:
    'When a problem spans software, data, AI, hardware and the business around them, it stalls between suppliers. We combine research, engineering and implementation in one accountable team, from first analysis to production.',
  icons: { icon: '/logo.png' },
  openGraph: { siteName: 'Talavishiraaj Groups', type: 'website', locale: 'en_US', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Talavishiraaj Groups' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  alternates: { canonical: './' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        <noscript>
          {/* Animated sections ship their starting state as inline styles; without JavaScript, show them finished. */}
          <style>{`[data-reveal],[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <BehaviourAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
