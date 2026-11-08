import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema, CONTACT_EMAIL } from '../seo';
import { track } from '../components/analytics';
import EnquiryForm from '../components/EnquiryForm';

/**
 * Booking page.
 *
 * The calendar lives here rather than on cal.com so the visitor stays on the
 * domain, the page carries our own framing around the slot, and the visit is
 * measurable. Cal.com still runs the scheduling, sends the confirmation and
 * calendar invite to both sides, and sends the reminder before the call. The
 * internal copy of each booking also comes back through our own SMTP via
 * api/cal-webhook.js, so bookings and form submissions land in one inbox
 * rather than being split across two systems.
 *
 * Set VITE_CAL_LINK to the booking link, for example "talavishiraaj/intro".
 * Until it is set this page is still useful: it explains the call and sends
 * people to the form, so the button is never a dead end.
 *
 * Marked noindex because a booking widget is not a search result, and an
 * indexed calendar page competes with the pages that should rank.
 */

/**
 * Only used to decide whether online booking is live at all. The calendar
 * itself, its consent gate and the Cal.com framing notes all live in
 * EnquiryForm, which renders it after the details are collected. There used to
 * be a second copy of that component here, unreferenced since the form took
 * over, and it had drifted out of working order without anyone noticing
 * because nothing rendered it. One copy only.
 */
const CAL_LINK = import.meta.env.VITE_CAL_LINK || '';

export default function BookPage() {
  return (
    <>
      <Seo
        title="Book a call | Talavishiraaj Groups"
        description="Pick a time to talk through what you are working on. No preparation needed, and nothing is expected of you afterwards."
        path="/book"
        noindex
        jsonLd={[
          webPageSchema({
            path: '/book',
            title: 'Book a call',
            description: 'Choose a time to talk to Talavishiraaj Groups.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Book a call', path: '/book' },
          ]),
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-8 space-y-5">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary">
          Book a call
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          Pick a time that suits you. Tell us roughly what you are working on when you book, and we
          will come to the call having thought about it rather than asking you to start from the
          beginning.
        </p>
        <ul className="text-sm text-gray-600 space-y-2 list-none">
          <li>No preparation needed, and no deck.</li>
          <li>If we are not the right people for it, we will say so and point you elsewhere.</li>
          <li>Nothing is expected of you afterwards.</li>
        </ul>
      </section>

      {/*
        Details first, then the calendar.

        Cal.com's own booking form asks for a name and an email and nothing
        else. No company, and no sense of what the call is about, so the first
        ten minutes get spent on questions that could have been answered
        beforehand. Worse, that information only reaches us if the Cal webhook
        fires, which is a dependency outside this codebase.

        Collecting it here fixes both. The details post through the same
        endpoint as the contact form, so the lead lands in the normal inbox
        whether or not the webhook works, and we arrive at the call having read
        what they sent. The calendar appears immediately afterwards, so it costs
        the visitor one short form rather than a round trip.
      */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
        {CAL_LINK ? (
          <EnquiryForm
            heading="What would you like to talk about?"
            help="A sentence is plenty. It means we come to the call having thought about it rather than asking you to start from the beginning."
            placeholder="We are trying to work out..."
            service="Book a call"
            location="book"
            messageLabel="Wants to talk about"
          />
        ) : (
          <div className="bg-muted border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold text-primary">Online booking is not live yet</h2>
            <p className="text-gray-600 leading-relaxed">
              Send us a few lines instead and we will come back with times that work, usually within
              one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                onClick={() => track('cta_click', { location: 'book_fallback', target: 'contact' })}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-accent hover:bg-graphite transition-colors"
              >
                Send a message
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 text-sm font-medium text-primary hover:bg-white transition-colors"
              >
                Email us directly
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
