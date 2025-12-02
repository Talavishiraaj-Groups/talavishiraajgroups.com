import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Partnerships', to: '/partnerships' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClasses = ({ isActive }) =>
    `px-4 py-2 text-sm tracking-wide transition-colors border-b-2 border-transparent hover:text-black hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
      isActive ? 'font-semibold text-black border-black' : 'text-gray-700'
    }`;

  return (
    <header className="fixed w-full top-0 left-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Talavishiraaj Groups" className="h-8 w-auto" />
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-black hidden sm:inline">
            Talavishiraaj Groups
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1">
            <span className="block h-0.5 w-full bg-black" />
            <span className="block h-0.5 w-full bg-black" />
            <span className="block h-0.5 w-full bg-black" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} className={navClasses} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

