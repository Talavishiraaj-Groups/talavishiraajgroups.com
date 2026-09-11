import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Systems', to: '/systems' },
  { label: 'Partnerships', to: '/partnerships' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  // Close the mobile panel on navigation so it never covers the new page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const navClasses = ({ isActive }) =>
    `px-3 py-2 text-sm tracking-wide transition-colors border-b-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
      isActive
        ? 'font-semibold text-black border-black'
        : 'text-gray-700 border-transparent hover:text-black hover:border-gray-400'
    }`;

  return (
    <header className="fixed w-full top-0 left-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <img src={logo} alt="" width="32" height="33" className="h-8 w-auto" />
          <span className="text-sm font-semibold tracking-[0.28em] uppercase text-black hidden sm:inline">
            Talavishiraaj Groups
          </span>
          <span className="sr-only">Talavishiraaj Groups home</span>
        </Link>

        <ul className="hidden md:flex items-center gap-4 list-none">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={navClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-black rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span aria-hidden="true" className="block w-6 space-y-1.5">
            <span
              className={`block h-0.5 w-full bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-full bg-black transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-full bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!open}
        className="md:hidden border-t border-border bg-white"
      >
        <ul className="px-4 py-3 flex flex-col gap-1 list-none">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-2 py-3 text-base rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset ${
                    isActive ? 'font-semibold text-black' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
