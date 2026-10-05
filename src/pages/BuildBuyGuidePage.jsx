import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, faqSchema, webPageSchema } from '../seo';
import { track } from '../components/analytics';

/**
 * The build, buy or partner decision framework.
 *
 * This replaced a cost calculator, and the reason is worth keeping.
 *
 * The calculator asked the visitor to enter their build cost. That is the one
 * number they do not have, and not having it is why they are on the page.
 * Anyone who can estimate their build cost accurately has already done the
 * hard part. The tool took the answer as its input.
 *
 * It also argued the wrong thing. A cost comparison says the decision is
 * arithmetic. The entire case for Prism is that cost alone does not settle a
 * call that crosses several parts of a business, and that the people telling
 * you it can are usually the people paid to build it. A calculator is a tool
 * for working out whether you *can*. The question underneath is whether you
 * *should*.
 *
 * So this asks about the dimensions that actually decide it, and it is honest
 * about the result: it gives a leaning, not a verdict, and it names the
 * questions the answers did not cover. On the evidence it is also the better
 * search fit. "build vs buy framework" completes to mckinsey, decision
 * framework, analysis framework and ai build vs buy framework; "decision
 * matrix" and "criteria" are live too. "build vs buy calculator" sits next to
 * house calculator and cost of building a pc.
 *
 * Nothing the visitor enters leaves the browser. There is no scoring model
 * dressed up as a result: the output is a reading of their own answers, and it
 * says so.
 */

const DIMENSIONS = [
  {
    id: 'differentiation',
    question: 'Is this thing how you win, or is it plumbing?',
    help: 'The single most decisive question in any build vs buy call. Build what customers choose you for. Buy the commodity parts that simply have to work.',
    options: [
      { value: 'core', label: 'Customers would notice if we did it better than anyone', weight: { build: 2, partner: 1 } },
      { value: 'mixed', label: 'Part of it is ours, the rest is standard', weight: { partner: 2 } },
      { value: 'utility', label: 'Nobody buys from us because of this', weight: { buy: 2 } },
    ],
  },
  {
    id: 'fit',
    question: 'How close does the best thing you can buy already get?',
    help: 'If an off the shelf product covers most of it, building the whole thing in house to gain the rest is rarely worth it. Weigh the gaps against vendor lock in, and against what it would take to leave later.',
    options: [
      { value: 'none', label: 'Nothing on the market really does this', weight: { build: 2 } },
      { value: 'most', label: 'Something covers most of it, with gaps', weight: { partner: 2, buy: 1 } },
      { value: 'close', label: 'Something covers nearly all of it', weight: { buy: 2 } },
    ],
  },
  {
    id: 'functions',
    question: 'How many parts of the business does this decision depend on?',
    help: 'This is what separates a question for one specialist from a question that needs someone looking across the seams. It is also where integration work hides, and integration is the single most common source of overrun on published post mortems.',
    options: [
      { value: 'one', label: 'Really just one team', weight: {} },
      { value: 'two', label: 'Two, and they do not fully agree', weight: {} },
      { value: 'several', label: 'Product, money, operations and tech all have a stake', weight: {} },
    ],
  },
  {
    id: 'urgency',
    question: 'When do you need this working?',
    help: 'Time to market is where build and buy diverge most sharply. Published timelines put a focused in house build at months, and an off the shelf rollout at weeks.',
    options: [
      { value: 'now', label: 'There is a deadline and missing it costs us', weight: { buy: 2 } },
      { value: 'quarter', label: 'This quarter would be good, next is survivable', weight: { partner: 1 } },
      { value: 'open', label: 'No external clock on it', weight: { build: 1 } },
    ],
  },
  {
    id: 'reversible',
    question: 'If this turns out wrong in a year, how hard is it to undo?',
    help: 'Reversible decisions should be made quickly. Hard to reverse decisions deserve the homework.',
    options: [
      { value: 'easy', label: 'Awkward, but we could change course', weight: { build: 1, buy: 1 } },
      { value: 'costly', label: 'Expensive and slow to unwind', weight: {} },
      { value: 'locked', label: 'We would be living with it for years', weight: {} },
    ],
  },
  {
    id: 'capacity',
    question: 'Who maintains it in year two, and do they know that yet?',
    help: 'Published figures put ongoing maintenance at roughly 15 to 25 percent of the original build cost every year, which is the largest missing piece in most total cost of ownership estimates. The opportunity cost matters too: whatever that team stops doing instead.',
    options: [
      { value: 'named', label: 'A named team, with the time already allowed for', weight: { build: 1 } },
      { value: 'assumed', label: 'The people who build it, on top of everything else', weight: { buy: 1, partner: 1 } },
      { value: 'unknown', label: 'We have not worked that out', weight: { buy: 1 } },
    ],
  },
  {
    id: 'advice',
    question: 'Who has told you it is a good idea?',
    help: 'Not a trick question. It matters whether the people encouraging it earn money from the answer.',
    options: [
      { value: 'independent', label: 'Someone with nothing to gain either way', weight: {} },
      { value: 'internal', label: 'Our own engineers, who would build it', weight: {} },
      { value: 'vendor', label: 'An agency or vendor who would be paid to do it', weight: {} },
    ],
  },
];

/**
 * The four conditions that make a decision worth two weeks of outside work.
 * These come from the product definition, not from the scoring above, and they
 * are what the closing note is based on.
 */
const WEIGHTY = {
  functions: 'several',
  reversible: ['costly', 'locked'],
  advice: ['internal', 'vendor'],
};

const LEANING_COPY = {
  build: {
    title: 'Your answers lean towards building',
    body: 'What you have described sounds closer to something customers would actually choose you for, with no off the shelf product that covers it. That is the case where building in house can be worth it. Settle who owns it in year two before you commit, because that is the part of total cost of ownership that usually goes missing from the estimate.',
  },
  buy: {
    title: 'Your answers lean towards buying',
    body: 'What you have described sounds like a commodity that has to work rather than something you win on, and an off the shelf product already covers most of it. Building it in house would mean paying to own a problem somebody else has already solved. Check what the gaps actually cost you, and what vendor lock in would mean if their terms change.',
  },
  partner: {
    title: 'Your answers lean towards a mix',
    body: 'Part of this is genuinely yours and part of it is commodity, which usually points at the hybrid route: buy an off the shelf platform with a real interface, and build in house only the piece that differentiates you. It is the option most build vs buy comparisons leave out, and it is often the right one.',
  },
  unclear: {
    title: 'Your answers do not point anywhere yet',
    body: 'That is a real result rather than a failure of the questions. It usually means the decision is genuinely balanced, or that it rests on something not asked about here. Either way it is not a call to make on instinct.',
  },
};

export default function BuildBuyGuidePage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  const choose = (dimensionId, value) => {
    if (!started) {
      setStarted(true);
      track('build_buy_tool_start');
    }
    setAnswers((prev) => ({ ...prev, [dimensionId]: value }));
  };

  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === DIMENSIONS.length;

  const result = useMemo(() => {
    if (!complete) return null;
    const totals = { build: 0, buy: 0, partner: 0 };
    for (const dimension of DIMENSIONS) {
      const chosen = dimension.options.find((o) => o.value === answers[dimension.id]);
      if (!chosen) continue;
      for (const [key, value] of Object.entries(chosen.weight || {})) totals[key] += value;
    }
    const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    const [top, topScore] = ranked[0];
    const [, secondScore] = ranked[1];
    // A one point gap is not a direction. Saying so is more useful than
    // manufacturing a verdict out of seven multiple choice answers.
    const leaning = topScore === 0 || topScore - secondScore < 2 ? 'unclear' : top;

    const weighty = [
      answers.functions === WEIGHTY.functions && 'it depends on several parts of the business at once',
      WEIGHTY.reversible.includes(answers.reversible) && 'it would be expensive or slow to reverse',
      WEIGHTY.advice.includes(answers.advice) && 'the people encouraging it are paid for one of the answers',
    ].filter(Boolean);

    return { leaning, weighty };
  }, [answers, complete]);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (result) track('build_buy_tool_complete', { leaning: result.leaning });
  };

  const faqs = [
    {
      q: 'Does this tell me what to do?',
      a: 'No, and anything that claims to from seven questions is selling you something. It gives you a leaning based on your own answers and names what the answers did not cover. The decision stays yours.',
    },
    {
      q: 'Why does it not ask what it costs?',
      a: 'Because the build cost is the number you do not have, and not having it is usually why the decision is open. A comparison built on a guessed figure is a guess with a total at the bottom. Cost matters, but it is the output of the decision rather than the input.',
    },
    {
      q: 'What is the partner option?',
      a: 'Buying a platform with a real interface and building only the part that is genuinely yours. It is left out of most build or buy comparisons and it is frequently the right answer, which is why it sits alongside the other two here.',
    },
    {
      q: 'Do you keep my answers?',
      a: 'No. Nothing you select leaves your browser. We do not receive the answers, and only whether the tool was started and finished is recorded.',
    },
  ];

  return (
    <>
      <Seo
        title="Build vs Buy vs Partner: A Decision Framework | Talavishiraaj Groups"
        description="Seven questions that decide whether to build it, buy it, or do both. Covers differentiation, fit, who maintains it, and who is advising you. Free, nothing to fill in, nothing leaves your browser."
        path="/build-vs-buy"
        jsonLd={[
          webPageSchema({
            path: '/build-vs-buy',
            title: 'Build vs buy vs partner: a decision framework',
            description:
              'A build vs buy decision framework: seven questions for deciding whether to build software in house, buy off the shelf, or combine the two.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Build vs buy framework', path: '/build-vs-buy' },
          ]),
          faqSchema(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />

      <section className="bg-secondary text-accent">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">Free framework</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Build it, buy it, or partner? Seven questions that decide it
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            A build vs buy decision framework, not a cost calculator. The build cost is the number you
            do not have yet, and guessing it just produces a guess with a total underneath. These are
            the questions that actually settle the direction, including the hybrid option that most
            build vs buy comparisons leave out.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#framework"
              onClick={() => track('cta_click', { location: 'calculator_hero', target: 'framework' })}
              className="inline-flex items-center justify-center rounded-full bg-accent text-primary px-7 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
            >
              Start the framework
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Seven questions, about two minutes. Nothing to fill in first and nothing leaves your browser.
          </p>
        </div>
      </section>

      <section id="framework" className="scroll-mt-24 max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <form onSubmit={submit} className="space-y-10">
          {DIMENSIONS.map((dimension, index) => (
            <fieldset key={dimension.id} className="space-y-3">
              <legend className="text-lg font-semibold text-primary">
                {index + 1}. {dimension.question}
              </legend>
              <p className="text-sm text-gray-600 leading-relaxed">{dimension.help}</p>
              <div className="space-y-2 pt-1">
                {dimension.options.map((option) => {
                  const id = `${dimension.id}-${option.value}`;
                  const checked = answers[dimension.id] === option.value;
                  return (
                    <label
                      key={option.value}
                      htmlFor={id}
                      className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                        checked ? 'border-primary bg-muted' : 'border-border bg-white hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        id={id}
                        name={dimension.id}
                        value={option.value}
                        checked={checked}
                        onChange={() => choose(dimension.id, option.value)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={!complete}
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-8 py-4 text-sm font-semibold hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See where this points
            </button>
            <span className="text-sm text-gray-500">
              {complete ? 'All six answered.' : `${answeredCount} of ${DIMENSIONS.length} answered.`}
            </span>
          </div>
        </form>

        {submitted && result && (
          <div className="mt-12 border border-border rounded-2xl p-8 bg-white space-y-6" role="status">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary">{LEANING_COPY[result.leaning].title}</h2>
              <p className="text-gray-700 leading-relaxed">{LEANING_COPY[result.leaning].body}</p>
            </div>

            {result.weighty.length > 0 && (
              <div className="border-t border-border pt-6 space-y-3">
                <h3 className="font-semibold text-primary">What makes this one weigh more</h3>
                <ul className="space-y-2 list-none">
                  {result.weighty.map((item) => (
                    <li key={item} className="text-sm text-gray-700 leading-relaxed">
                      {item.charAt(0).toUpperCase() + item.slice(1)}.
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 leading-relaxed pt-1">
                  Any one of those is a reason to do the homework properly before committing. All
                  three together is the situation Prism was built for.
                </p>
              </div>
            )}

            <div className="border-t border-border pt-6 space-y-3">
              <h3 className="font-semibold text-primary">What this does not know</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your actual numbers, what your systems will do when you try, what your team can
                absorb alongside the work already in progress, and what breaks downstream. Six
                questions cannot see any of that, and a cost calculator cannot either.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                If this settled it, go and do it. If it did not, that is usually because the decision
                rests on more than one part of the business at once.
              </p>
              <Link
                to="/products"
                onClick={() => track('cta_click', { location: 'framework_result', target: 'products' })}
                className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-semibold hover:bg-graphite transition-colors"
              >
                Read about Prism
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-16 space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Questions</h2>
          <dl className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-primary mb-1">{q}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
