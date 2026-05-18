import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const linkGroups = [
  {
    title: 'Company',
    items: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Systems', to: '/systems' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Capabilities',
    items: [
      { label: 'Strategic & Systems Consulting', to: '/services#strategy' },
      { label: 'Technology Systems & Infrastructure', to: '/services#tech' },
      { label: 'Implementation & Engineering', to: '/services#rd' },
      { label: 'Growth Systems & Market Enablement', to: '/services#growth' },
    ],
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
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white text-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Talavishiraaj Groups" className="h-8 w-auto" />
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Talavishiraaj Groups</p>
            </div>
            <p className="text-sm text-gray-600">
              Technology consulting, AI and automation, R & D, and growth systems delivered by a single accountable partner.
            </p>
            <p className="text-sm text-gray-500">
              <a href="mailto:info@talavishiraajgroups.com" className="hover:text-primary">
                info@talavishiraajgroups.com
              </a>
            </p>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{group.title}</p>
              <ul className="space-y-2 text-sm list-none">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-gray-600 hover:text-primary cursor-pointer">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Social</p>
            <ul className="space-y-2 text-sm list-none">
              <li>
                <a
                  href="https://www.linkedin.com/company/talavishiraaj-groups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-primary"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 6.5C6.5 7.88071 5.38071 9 4 9C2.61929 9 1.5 7.88071 1.5 6.5C1.5 5.11929 2.61929 4 4 4C5.38071 4 6.5 5.11929 6.5 6.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2 10.5H6V21H2V10.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9 10.5H13V12.1C13.5803 11.1937 14.7572 10.25 16.6 10.25C20.2 10.25 21 12.6 21 15.7V21H17V16.4C17 15.16 16.8 13.75 15.2 13.75C13.6 13.75 13.3 15 13.3 16.3V21H9V10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/talavishiraaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-primary"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.969l4.254 5.625L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                  <span>Twitter / X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
          <span>© {new Date().getFullYear()} Talavishiraaj Groups. All rights reserved.</span>
          <span>Execution is Our Foundation. Innovation is Our Identity.</span>
        </div>
      </div>
    </footer>
  );
}