import React, { useEffect, useRef, useState } from 'react';
import { track } from './analytics';
import { CONTACT_EMAIL } from '../seo';

/**
 * The way in to Prism.
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
 * "talavishiraaj/prism"). If it is not set, the form still submits by email
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
    frame.src = `https://cal.com/${link}?embed=true&theme=light`;
    frame.title = 'Choose a time';
    frame.loading = 'lazy';
    frame.className = 'w-full rounded-2xl border border-border';
    frame.style.height = '660px';
    ref.current.appendChild(frame);
    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, [link]);

  return <div ref={ref} />;
}

export default function PrismQualifier() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    decision: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [started, setStarted] = useState(false);

  const change = (event) => {
    const { name, value } = event.target;
    if (!started) {
      setStarted(true);
      track('prism_qualifier_start');
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const message = `Decision: ${form.decision}`;

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: '',
          service: 'Prism',
          message,
        }),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Unexpected response from the server: ${text.slice(0, 120)}`);
      }
      if (!response.ok) {
        throw new Error(data.error || data.details || 'The message could not be sent.');
      }

      track('prism_qualifier_submit');
      setStatus('sent');
    } catch (error) {
      setStatus('error');
      setErrorMessage(`${error.message} You can also write to us at ${CONTACT_EMAIL}.`);
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-white border border-border rounded-2xl p-8 space-y-5">
        <h3 className="text-2xl font-semibold text-black">Thank you, that is enough to go on.</h3>
        {CAL_LINK ? (
          <>
            <p className="text-gray-600 leading-relaxed">
              Pick a time below and we will come to it having read what you sent. If Prism is not
              the right engagement for this, we will say so on the call and tell you what is.
            </p>
            <CalEmbed link={CAL_LINK} />
            <p className="text-xs text-gray-500">
              You will get a confirmation and a calendar invite by email, and a reminder before the
              call.
            </p>
          </>
        ) : (
          <p className="text-gray-600 leading-relaxed">
            We have your decision and will reply within one business day with either a time to talk
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
          What are you deciding?
        </label>
        <p className="text-xs text-gray-500">
          A sentence is plenty. For example: whether to build our own scheduling system or buy one.
        </p>
        <textarea
          id="decision"
          name="decision"
          required
          rows={3}
          value={form.decision}
          onChange={change}
          className={field}
          placeholder="We are weighing whether to..."
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

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">
          {errorMessage}
        </p>
      )}

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
