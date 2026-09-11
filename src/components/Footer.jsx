import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CONTACT_EMAIL, LINKEDIN_URL, TAGLINE, TWITTER_URL } from '../seo';
import { capabilityPath, serviceCategories } from '../data/servicesData';
import { track, trackOutbound } from './analytics';

const linkGroups = [
  {
    title: 'Company',
    items: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Systems', to: '/systems' },
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
    title: 'Governance & Legal',
    items: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Refund Policy', to: '/refund-policy' },
      { label: 'Delivery Policy', to: '/delivery-policy' },
      { label: 'Risk & Mitigation Framework', to: '/risk-mitigation' },
      { label: 'Confidentiality & Data Handling', to: '/data-handling' },
      { label: 'Intellectual Property Policy', to: '/ip-policy' },
    ],
  },
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
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="space-y-4">
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

        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Talavishiraaj Groups. All rights reserved.</span>
          <span>{TAGLINE}</span>
        </div>
      </div>
    </footer>
  );
}
