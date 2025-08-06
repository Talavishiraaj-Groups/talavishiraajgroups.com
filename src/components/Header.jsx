import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-primary'
      } text-white`}
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <motion.a 
          href="#home" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-shadow"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Talavishiraaj Logo" className="h-10 w-10 object-contain" />
          </motion.div>
          <span className="font-bold text-lg tracking-wide group-hover:text-accent transition-colors">
            Talavishiraaj Groups
          </span>
        </motion.a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative hover:text-accent transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <motion.span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <motion.span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-accent transition-colors duration-200 py-2 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 