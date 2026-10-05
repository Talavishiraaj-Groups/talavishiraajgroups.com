import React from 'react';
import { Link } from 'react-router-dom';
import { track } from './analytics';

/**
 * The closing call to action for every page.
 *
 * One destination, not two. An earlier version offered the calendar and the
 * form side by side on every page, which meant the same choice was presented
 * over and over and the two paths diverged before the visitor had any reason
 * to prefer one. Everything now points at /contact, where both options sit
 * together and the choice is made once, in the place built to handle it.
 *
 * The label still names both so nobody has to guess what is behind the button.
 *
 * `variant` only changes the colours so the band can sit on either a light or
 * a dark section without fighting the page around it.
 */
export default function CtaBand({
  heading = 'Talk to us about it',
  body = 'Book a call if you would rather talk it through, or send a few lines and we will reply. Either is fine, and neither commits you to anything.',
  location = 'page',
  intent = '',
  variant = 'light',
}) {
  const dark = variant === 'dark';
  const contactHref = intent ? `/contact?intent=${intent}` : '/contact';

  return (
    <section
      className={
        dark
          ? 'bg-secondary text-accent'
          : 'bg-muted border-t border-border'
      }
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center space-y-6">
        <h2
          className={`text-2xl md:text-3xl font-semibold tracking-tight ${
            dark ? 'text-accent' : 'text-primary'
          }`}
        >
          {heading}
        </h2>
        <p
          className={`max-w-xl mx-auto leading-relaxed ${
            dark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {body}
        </p>
        <div className="flex justify-center pt-2">
          <Link
            to={contactHref}
            onClick={() => track('cta_click', { location, target: 'contact' })}
            className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-colors ${
              dark
                ? 'bg-accent text-primary hover:bg-muted'
                : 'bg-primary text-accent hover:bg-graphite'
            }`}
          >
            Book a call or send a message
          </Link>
        </div>
      </div>
    </section>
  );
}
