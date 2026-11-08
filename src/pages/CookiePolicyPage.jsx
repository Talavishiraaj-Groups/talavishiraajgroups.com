import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema } from '../seo';

/**
 * Cookie notice.
 *
 * Written against what the site actually does, measured in a browser rather
 * than assumed, because the usual version of this page is boilerplate that
 * describes a site the author never checked.
 *
 * What the measurement found, on every page: no cookies, no localStorage, no
 * sessionStorage, no external scripts. On /book, Vercel Analytics loads and
 * sets no cookie, which matches its documentation. The Cal.com embed issues no
 * request at all until a visitor submits the form and asks for the calendar.
 *
 * There is a consent banner, added at the owner's request after this page was
 * first written. It is wired to the only third party the site has rather than
 * being decorative: declining means the Cal.com frame is never created.
 *
 * The storage irony is real and is described on the page rather than hidden.
 * Remembering a dismissal takes storage, so the consent choice is the only
 * thing this site writes to a browser. One key, one word, strictly necessary
 * by definition.
 *
 * If tracking is ever added, this page and the consent position both have to
 * change, and section 7 of the privacy policy already commits to that.
 */

const TITLE = 'Cookie Notice | Talavishiraaj Groups';
const DESCRIPTION =
  'This site sets no cookies and stores nothing while you read it. What the banner is actually asking, the one third party that loads when you book a call, and what your answer controls.';

const rows = [
  {
    what: 'Cookies set by this site',
    answer: 'None.',
    detail:
      'No cookies are set on any page, for any purpose, including analytics, advertising and personalisation.',
  },
  {
    what: 'Data stored in your browser',
    answer: 'None.',
    detail:
      'Nothing is written to local storage or session storage. Closing the tab leaves nothing behind.',
  },
  {
    what: 'Advertising and cross site tracking',
    answer: 'None.',
    detail:
      'There are no advertising pixels, no remarketing tags and no social network trackers anywhere on the site.',
  },
  {
    what: 'Page view counting',
    answer: 'Cookieless.',
    detail:
      'Vercel Analytics counts page views without cookies and without building a profile of you. It cannot follow you to other websites and it runs whether or not you accept anything.',
  },
  {
    what: 'Behaviour analytics',
    answer: 'Only if you allow it.',
    detail:
      'If you accept, Microsoft Clarity shows us which pages hold attention, how far people read, where they go next and where they give up. It sets cookies and can replay a session. Text you type into forms is masked and stays masked. Decline and it is never loaded.',
  },
  {
    what: 'Fonts',
    answer: 'Self hosted.',
    detail:
      'Typefaces are served from this domain rather than from a font network, so loading a page does not announce your visit to a third party.',
  },
  {
    what: 'Server logs',
    answer: 'Standard.',
    detail:
      'Our hosting provider records ordinary request information such as IP address and user agent, for security and reliability. That is described in the privacy policy.',
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-white text-primary">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/cookies"
        jsonLd={[
          webPageSchema({ path: '/cookies', title: 'Cookie Notice', description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Cookie Notice', path: '/cookies' },
          ]),
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Legal</p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">Cookie notice</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This site sets no cookies and stores nothing in your browser while you read it. The only
          thing that can change that is booking a call, which loads a calendar from Cal.com.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          That is unusual enough to be worth setting out precisely, so the whole position is below
          rather than buried in a policy. Everything on this page describes what the site does
          today, and it was checked in a browser rather than copied from a template.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            What this site does and does not do
          </h2>
          <dl className="space-y-7">
            {rows.map((row) => (
              <div key={row.what} className="border-b border-border pb-7 last:border-0 last:pb-0">
                <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-base font-semibold">{row.what}</span>
                  <span className="text-sm font-medium text-slate">{row.answer}</span>
                </dt>
                <dd className="text-sm text-gray-700 leading-relaxed max-w-2xl">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
            The third parties, and when they load
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            Two, and both wait for your answer. Microsoft Clarity measures how the site is used,
            and loads only if you accept. Cal.com provides the booking calendar inside our page,
            and loads only if you accept and then go to book. Decline and no request reaches
            either of them, ever: the scripts are not inserted rather than inserted and idle.
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            Both set their own cookies under their own terms once loaded. We do not control those
            and we do not read them. Declining costs you nothing that matters: the contact form
            reaches us identically and involves nobody else.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
            What the banner is actually asking
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            Not much, which is the point. Nothing is stored while you read the site, so the choice
            is about one thing only: whether the Cal.com calendar may load if you go to book a
            call. Decline and that frame is never created, and the contact form reaches us just as
            well.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            There is an irony in it worth stating rather than hiding. A banner you can dismiss has
            to remember that you dismissed it, so your answer is the one thing this site does write
            to your browser. It is a single entry holding a single word, it is readable only by
            this site, and remembering a consent decision is permitted without asking permission
            for it. If you clear site data it comes back, because the record of your answer went
            with it.
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            Neither answer is made easier than the other, and declining is not a dead end anywhere
            on the site.{' '}
            <Link
              to="/privacy-policy"
              className="font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
            >
              The privacy policy
            </Link>{' '}
            sets out what we collect when you contact us, how long it is kept and your rights over
            it.
          </p>
        </div>
      </section>
    </div>
  );
}
