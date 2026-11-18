import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { BehaviourAnalytics, CookieConsent } from '@/components/consent';
import { SiteAnalytics } from '@/components/SiteAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Attribution } from '@/components/Attribution';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talavishiraajgroups.com'),
  title: { default: 'Talavishiraaj Groups | Engineering, AI and Research', template: '%s | Talavishiraaj Groups' },
  description:
    'Research, engineering and AI in one accountable team, for problems that stall between suppliers. From first analysis to a system running in production.',
  icons: { icon: '/logo.png' },
  openGraph: { siteName: 'Talavishiraaj Groups', type: 'website', locale: 'en_US', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Talavishiraaj Groups' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  alternates: { canonical: './' },
  // Search engine ownership checks. Add the codes in Vercel as GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${sans.variable} ${serif.variable}`}>
      <head>
        <noscript>
          {/* Animated sections ship their starting state as inline styles; without JavaScript, show them finished. */}
          <style>{`[data-reveal],[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        {/* Who we are, in a form search engines and AI assistants can read without guessing. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.talavishiraajgroups.com/#org',
                  name: 'Talavishiraaj Groups',
                  alternateName: 'TJ Groups',
                  url: 'https://www.talavishiraajgroups.com',
                  logo: 'https://www.talavishiraajgroups.com/logo.png',
                  description: 'An engineering, AI and research firm that combines software and systems engineering, applied AI and automation, product engineering and implementation in one accountable team, plus an independent read on build, buy and AI decisions.',
                  email: 'info@talavishiraajgroups.com',
                  areaServed: [
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'Place', name: 'Europe' },
                    { '@type': 'Country', name: 'India' },
                  ],
                  knowsAbout: ['Artificial intelligence', 'AI agents', 'Workflow automation', 'Software engineering', 'Data engineering', 'Product engineering', 'Build vs buy decisions'],
                  sameAs: ['https://www.linkedin.com/company/talavishiraaj-groups/'],
                  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'info@talavishiraajgroups.com', url: 'https://www.talavishiraajgroups.com/contact' },
                },
                { '@type': 'WebSite', '@id': 'https://www.talavishiraajgroups.com/#site', url: 'https://www.talavishiraajgroups.com', name: 'Talavishiraaj Groups', publisher: { '@id': 'https://www.talavishiraajgroups.com/#org' } },
              ],
            }),
          }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <BehaviourAnalytics />
        <SiteAnalytics />
        <SpeedInsights />
        <Attribution />
      </body>
    </html>
  );
}
