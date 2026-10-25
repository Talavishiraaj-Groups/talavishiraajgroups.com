import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CONTACT_EMAIL, LINKEDIN_URL, TAGLINE, TWITTER_URL } from '../seo';
import { capabilityPath, serviceCategories } from '../data/servicesData';
import { track, trackOutbound } from './analytics';

/**
 * Footer structure.
 *
 * Adding the two cost and comparison pages took the Company column to eleven
 * items and made the footer visibly top heavy. Lengthening a list was the
 * symptom; the cause was that the column had been carrying three unrelated
 * kinds of thing at once. Primary sections of the site, content hubs, and the
 * pages that help somebody decide are different jobs, and a reader scanning for
 * one of them had to read past the other two.
 *
 * So the regrouping is by what a link is for, not by what fits:
 *
 *   Company     where the organization is described and reached
 *   Capabilities the six service pages, generated from the data
 *   Guides      everything written to help somebody decide something
 *
 * /build-vs-buy is in the footer for the first time here. It is an indexed page
 * with real search demand behind it and it had no sitewide link at all, which
 * meant the only routes to it were editorial ones inside other pages.
 *
 * The legal block has left the grid entirely and now runs as a single wrapped
 * row above the copyright. Seven policy pages with long names made the tallest
 * column on the site out of the links that are looked for least, and a reader
 * only ever wants one of them, by name, having already gone looking. A row is
 * the right shape for that. Nothing was removed.
 */
const linkGroups = [
  {
    title: 'Company',
    items: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Products', to: '/products' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Capabilities',
    items: serviceCategories.map((category) => ({
      label: category.label,
      to: capabilityPath(category),
    })),
  },
  {
    title: 'Guides',
    items: [
      { label: 'What it costs', to: '/what-it-costs' },
      { label: 'In-house vs agency', to: '/in-house-vs-agency' },
      { label: 'Build vs buy vs partner', to: '/build-vs-buy' },
      { label: 'Insights', to: '/insights' },
      { label: 'Resources', to: '/resources' },
    ],
  },
];

/**
 * Shorter labels than the page titles they point at, because a wrapped row of
 * seven full policy names is unreadable. The full name is the h1 on each page.
 */
const legalLinks = [
  { label: 'Privacy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Refunds', to: '/refund-policy' },
  { label: 'Delivery', to: '/delivery-policy' },
  { label: 'Risk framework', to: '/risk-mitigation' },
  { label: 'Data handling', to: '/data-handling' },
  { label: 'Intellectual property', to: '/ip-policy' },
];

const socialLinks = [
  {
    label: 'Talavishiraaj Groups on LinkedIn',
    network: 'linkedin',
    href: LINKEDIN_URL,
    path: 'M6.5 6.5A2.5 2.5 0 1 1 4 4a2.5 2.5 0 0 1 2.5 2.5ZM2 10.5h4V21H2V10.5Zm7 0h4v1.6c.58-.906 1.757-1.85 3.6-1.85 3.6 0 4.4 2.35 4.4 5.45V21h-4v-4.6c0-1.24-.2-2.65-1.8-2.65s-1.9 1.25-1.9 2.55V21H9V10.5Z',
  },
  {
    label: 'Talavishiraaj Groups on X, formerly Twitter',
    network: 'x',
    href: TWITTER_URL,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.969l4.254 5.625L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white text-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-12">
        {/* Two columns of links on a phone rather than one. Stacked single
            file, the three groups ran to more than one and a half screens of
            footer, which is a long way to scroll past something nobody is
            reading. The brand block keeps the full width at that size because
            its paragraph is unreadable in a half column. */}
        <div className="grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width="32" height="33" className="h-8 w-auto" />
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Talavishiraaj Groups</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              A multidisciplinary organization combining research, software and systems engineering,
              artificial intelligence, product development and implementation capability under a single
              accountable partner.
            </p>
            <p className="text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => track('email_click', { location: 'footer' })}
                className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            {/* Icon-only links, with the platform name carried by the
                accessible name rather than visible text. */}
            <ul className="flex items-center gap-3 list-none pt-1">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackOutbound(social.href, { network: social.network, location: 'footer' })
                    }
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-gray-600 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  >
                    <span className="sr-only">{social.label}</span>
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{group.title}</h2>
              <ul className="space-y-2.5 text-sm list-none">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-gray-600 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-border pt-6 space-y-5">
          <nav aria-label="Governance and legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs list-none">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Talavishiraaj Groups. All rights reserved.</span>
            <span>{TAGLINE}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
