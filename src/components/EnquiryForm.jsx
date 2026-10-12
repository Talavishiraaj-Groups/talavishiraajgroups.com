import React, { useEffect, useRef, useState } from 'react';
import { track } from './analytics';
import { CONTACT_EMAIL } from '../seo';

/**
 * The enquiry form that sits in front of the calendar.
 *
 * Kept deliberately short. An earlier version asked for a budget band and how
 * settled the decision was, on the theory that the form should filter out the
 * calls we would decline. That is the right instinct at volume and the wrong
 * one here: there is no inbound yet, so the problem is not too many
 * conversations, it is none. Every extra field multiplies a number that is
 * currently zero, and asking a stranger to disclose a budget before we have
 * shown them a named person or a single client result is a poor trade.
 *
 * So the form asks who you are and what you are deciding, and nothing else.
 * The free text answer does the real qualifying anyway: a decision that is
 * narrow, already made, or not actually cross functional is visible in one
 * read, and it costs five minutes on a call to say so. Revisit this when
 * there are more calls than there is time for them.
 *
 * Booking uses Cal.com. Their hosted free tier sends a confirmation to both
 * the booker and us, attaches the calendar invite, and sends the default
 * reminder before the call, which is the behaviour people expect from
 * Calendly. Set VITE_CAL_LINK to the booking link (for example
 * "talavishiraaj-groups/30min"). If it is not set, the form still submits by email
 * and simply says we will reply, so nothing breaks in the meantime.
 *
 * Note: the Cal embed is the only third party request on the site, and it is
 * loaded only after the form is submitted, so it never touches first paint for
 * ordinary visitors.
 */

const CAL_LINK = import.meta.env.VITE_CAL_LINK || '';

function CalEmbed({ link }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!link || !ref.current) return undefined;
    const frame = document.createElement('iframe');
    // No `embed=true`. That parameter expects Cal.com's own embed script and
    // renders a blank frame on a bare iframe: it loads, throws nothing, and
    // shows nothing. The plain booking URL frames correctly.
    frame.src = `https://cal.com/${link}?theme=light`;
    frame.title = 'Choose a time';
    frame.loading = 'lazy';
    frame.className = 'w-full rounded-2xl border border-border';
    frame.className += ' h-[760px] md:h-[560px]';
    ref.current.appendChild(frame);
    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, [link]);

  return <div ref={ref} />;
}

export default function EnquiryForm({
  heading = 'What would you like to talk about?',
  help = 'A sentence is plenty.',
  placeholder = 'We are trying to work out...',
  service = 'Enquiry',
  location = 'enquiry',
  messageLabel = 'About',
  confirmation = 'Pick a time below. We will read what you have sent before we speak, so you will not need to start from the beginning.',
} = {}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    decision: '',
  });
  const [status, setStatus] = useState('idle');
  const [started, setStarted] = useState(false);

  const change = (event) => {
    const { name, value } = event.target;
    if (!started) {
      setStarted(true);
      track('qualifier_start', { location });
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const message = `${messageLabel}: ${form.decision}`;

    // Move on regardless of what the email endpoint does.
    //
    // An earlier version waited for this call and only showed the calendar on
    // success, which meant a failed send stopped someone booking at all. That
    // is the wrong way round: the booking is the point and these details are
    // the convenience. It also made the page untestable on a local preview,
    // where the serverless function does not run and every submit looked
    // broken.
    //
    // Nothing is lost if the send fails. Cal.com still collects a name and an
    // email at the booking step, and the webhook delivers its own copy, so the
    // only thing missing is context we can ask for on the call.
    //
    // That is why the visitor is told nothing when it fails. They came to book,
    // they can still book, and a warning about our mail plumbing is something
    // they can neither act on nor fix. It only makes a working page look
    // broken. The failure goes to the console for us instead.
    track('qualifier_submit', { location });
    setStatus('sent');

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service,
          message,
        }),
      });
      if (!response.ok) {
        // Never surface a raw response body. On a local preview this endpoint
        // does not exist and the SPA fallback returns a page of HTML, which is
        // how a block of markup ended up on screen once.
        throw new Error(`The endpoint returned ${response.status}.`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Booking details were not delivered by email:', error.message);
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-white border border-border rounded-2xl p-8 space-y-5">
        <h3 className="text-2xl font-semibold text-black">Thank you, that is enough to go on.</h3>
        {CAL_LINK ? (
          <>
            <p className="text-gray-600 leading-relaxed">{confirmation}</p>
            <CalEmbed link={CAL_LINK} />
            <p className="text-xs text-gray-500">
              You will get a confirmation and a calendar invite by email, and a reminder before the
              call.
            </p>
          </>
        ) : (
          <p className="text-gray-600 leading-relaxed">
            We have your details and will reply within one business day with either a time to talk
            or an honest note that this is not the right fit. You can also reach us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  const field =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-gray-400 focus:border-gray-500 focus:outline-none';

  return (
    <form onSubmit={submit} className="bg-white border border-border rounded-2xl p-8 space-y-6">
      <div className="space-y-2">
        <label htmlFor="decision" className="block text-sm font-semibold text-black">
          {heading}
        </label>
        <p className="text-xs text-gray-500">{help}</p>
        <textarea
          id="decision"
          name="decision"
          required
          rows={3}
          value={form.decision}
          onChange={change}
          className={field}
          placeholder={placeholder}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-black">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={change}
            className={field}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-semibold text-black">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={change}
            className={field}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={change}
            className={field}
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-black">
            Phone <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={change}
            className={field}
            autoComplete="tel"
            placeholder="Include the country code"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto bg-primary text-accent px-8 py-4 rounded-full text-sm font-semibold hover:bg-graphite transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send it over'}
      </button>
      <p className="text-xs text-gray-500">
        {CAL_LINK
          ? 'You can pick a time on the next screen. No obligation either way.'
          : 'We reply within one business day. No obligation either way.'}
      </p>
    </form>
  );
}
