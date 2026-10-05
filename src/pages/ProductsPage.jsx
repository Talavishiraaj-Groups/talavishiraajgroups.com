import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../seo';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';
import { prism } from '../data/prism';
import CtaBand from '../components/CtaBand';

/**
 * Products page. Prism is the product it carries.
 *
 * Replaces the former /systems page. Three things changed and they are the
 * point of the page:
 *
 * 1. The product is named for the decision the buyer is actually making
 *    (build, buy or bet on AI), not for an internal category label. Nobody
 *    searches for a workflow intelligence system.
 * 2. The hero line and the product itself are both above the fold, so the
 *    first screen answers what this is and whether it is for you.
 * 3. No price, no internal process description, no em dashes. Buyer language
 *    only.
 *
 * The title and description target the build vs buy phrasing because that is
 * what buyers type. The body keeps decision language throughout.
 */

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Prism: an independent build vs buy and AI decision | Talavishiraaj Groups"
        description="Before you build it, buy it, or bet on AI, know what matters most. Prism is an independent two week go or no go on the technology decision you are about to make. Not your dev shop, not a gut check call."
        path="/products"
        jsonLd={[
          webPageSchema({
            path: '/products',
            title: 'Prism: an independent build vs buy and AI decision',
            description:
              'An independent two week go or no go on a build, buy or AI investment decision, for founders about to make a commitment they cannot easily reverse.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
          serviceSchema({
            name: 'Prism',
            serviceType: 'Build vs buy and AI investment decision',
            description:
              'An independent two week go or no go on a build, buy or AI investment decision. Homework across product, economics and systems, then a straight answer on whether to proceed and what to do first.',
            path: '/products',
          }),
          faqSchema(prism.faqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />

      {/*
        HERO.

        Built around the three questions a stranger needs answered before they
        will read anything else: what is this, why does it matter to me, what
        do I do next.

        Three things are deliberate and were wrong before.

        The headline is the promise, not the product name. "Prism" as a
        headline answers nothing, because nobody has heard of it. The name sits
        above as a label, where it orients without being asked to do work it
        cannot do.

        The supporting line describes the reader's situation, not our
        mechanism. "An independent two week go or no go" is how we describe the
        engagement. It is accurate, and it means nothing to someone who has not
        yet decided they have this problem. The shape of the engagement is on
        the page, two sections down, where it answers a question they are by
        then actually asking.

        One action, and it continues the page rather than leaving it. Someone
        who has just arrived has no reason to want a meeting yet, so the hero
        does not ask for one; booking is at the close, after the evidence.
        The framework is not offered here either. It is a top of funnel
        asset whose job is to bring people to this page, so linking back to
        it sends an engaged reader the wrong way down the funnel. It also
        implies the arithmetic is the product, when the whole argument for
        Prism is that cost alone does not settle a cross functional call.
      */}
      <section className="bg-secondary text-accent overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">
              Products · {prism.name}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{prism.heroLine}</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {prism.situationLine}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#is-this-you"
                onClick={() => track('cta_click', { location: 'products_hero', target: 'is_this_you' })}
                className="bg-accent text-primary px-8 py-4 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
              >
                Is this your situation?
              </a>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              Two weeks. Fixed scope. We will tell you not to proceed if that is the answer.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="w-full h-full text-white fill-current"
          >
            <path d="M0 0 L100 100 L100 0 Z" />
          </svg>
        </div>
      </section>

      {/* WHAT IT IS, plus the contrast against the biased alternatives. */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-black">What Prism is</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{prism.summary}</p>
            {/*
              The mechanism belongs here rather than in the hero. By this point
              the reader has read the situation and is asking what the thing
              actually is, which is the question this sentence answers.
            */}
            <p className="text-gray-700 leading-relaxed">
              {prism.mechanism} Typically {prism.timeline} from the point we start.
            </p>
          </div>
          <div className="space-y-4">
            {prism.contrast.map((item) => (
              <div key={item.not} className="bg-muted/50 border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-black mb-2">{item.not}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.because}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION. Self qualification instead of a six way sort. */}
      <section id="is-this-you" className="scroll-mt-24 bg-muted py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10">
          <h2 className="text-3xl font-semibold text-black text-center">
            Does this sound like you?
          </h2>
          <ul className="space-y-4 list-none">
            {prism.recognise.map((line) => (
              <li
                key={line}
                className="flex items-start gap-4 bg-white border border-border rounded-2xl p-5"
              >
                <ArrowIcon className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-black font-medium">{prism.recogniseThreshold}</p>
        </div>
      </section>


      {/* WHAT YOU GET. */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-black">What you get</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              The answer comes first. Everything else is there to support it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prism.deliverables.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED FROM YOU. Short, and about their effort only. */}
      <section className="bg-secondary text-accent py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">What we need from you</h2>
            <p className="text-gray-400 leading-relaxed">{prism.effortNote}</p>
            <ul className="space-y-4 list-none">
              {prism.whatWeNeedFromYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-800 rounded-3xl p-10 bg-graphite space-y-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              What we will tell you
            </h2>
            <ul className="space-y-4 list-none">
              {prism.willTell.map((item) => (
                <li key={item} className="text-sm text-gray-200 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FIT AND BOUNDARIES. */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">When Prism is the right call</h2>
            <ul className="space-y-4 list-none">
              {prism.fit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowIcon className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">When it is not</h2>
            <ul className="space-y-4 list-none">
              {prism.notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 pt-2">
              If one of those describes you, tell us anyway and we will point you somewhere better.
            </p>
          </div>
        </div>
      </section>

      {/* QUESTIONS. Answers the things buyers ask before they will talk. */}
      <section className="bg-muted py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-10">
          <h2 className="text-3xl font-semibold text-black text-center">Questions</h2>
          <dl className="space-y-6">
            {prism.faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border border-border rounded-2xl p-6">
                <dt className="font-semibold text-black mb-2">{q}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        heading="Talk through the decision you are facing"
        body="Book a call if you would rather talk it through, or send a few lines and we will reply. Either is fine, and neither commits you to anything."
        location="products"
        intent="prism"
      />
    </>
  );
}
