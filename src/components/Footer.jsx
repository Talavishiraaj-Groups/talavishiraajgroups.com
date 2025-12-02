import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const linkGroups = [
  {
    title: 'Company',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'About', to: '/about' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Contact', to: '/contact' },
      { label: 'Community', to: '/community' },
      { label: 'Products', to: '/products' },
    ],
  },
  {
    title: 'Capabilities',
    items: [
      { label: 'Strategy and Operations', to: '/services#strategy' },
      { label: 'Technology and AI', to: '/services#tech' },
      { label: 'R & D and Engineering', to: '/services#rd' },
      { label: 'Creative and Growth Systems', to: '/services#growth' },
    ],
  },
  {
    title: 'Policies',
    items: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'IP Policy', to: '/ip-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white text-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Talavishiraaj Groups" className="h-8 w-auto" />
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Talavishiraaj Groups</p>
            </div>
            <p className="text-sm text-gray-600">
              Technology consulting, AI and automation, R and D, and growth systems delivered by a single accountable partner.
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
                  href="https://www.linkedin.com/company/talavishiraaj"
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
                  href="https://www.instagram.com/talavishiraaj"
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
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
          <span>© {new Date().getFullYear()} Talavishiraaj Groups. All rights reserved.</span>
          <span>Built for leaders who value execution.</span>
        </div>
      </div>
    </footer>
  );
}