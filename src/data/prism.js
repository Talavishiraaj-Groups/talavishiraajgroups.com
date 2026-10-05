import { benchmarks } from './benchmarks';

/**
 * Prism, product content.
 *
 * Rules for this file:
 * 1. Buyer language only. The internal description of what Prism is stays
 *    internal. Nothing here explains how we run the work on our side.
 * 2. No pricing anywhere. Price is handled in conversation, not on the site.
 * 3. No em dashes. Use a comma, a colon or a full stop.
 * 4. Short sentences, plain words, nothing the reader has to learn.
 */

export const prism = {
  name: 'Prism',

  // The line that has to work on first look.
  heroLine: 'Before you build it, buy it, or bet on AI. Know what matters most.',

  // What it is, immediately under the hero line on the product page itself,
  // where the reader has already chosen to look at the product.
  mechanism: 'An independent two week go or no go on the technology call you are about to make.',

  /**
   * The same product, described for someone who did not come looking for it.
   *
   * `mechanism` above is how we describe Prism: go or no go, two weeks,
   * independent, not a dev shop. That is accurate and it is the wrong thing to
   * lead with on the home page, where the reader does not yet know they have
   * this problem and has no reason to care how the engagement is shaped. This
   * line starts where they are, with the money they are about to spend, and
   * leaves the mechanism for the product page.
   */
  situationLine:
    'You are about to spend serious money building something, buying a platform that nearly fits, or betting on AI. Prism tells you which of those is right for your business, and what to do first, before you commit to any of it.',

  // The paragraph a founder reads and recognises.
  summary:
    'You are about to spend real money building something, buying a platform, or betting on AI, and you are not certain it is the right call. Prism does the homework across your product, your numbers and your setup, then gives you a straight answer in two weeks: build it, buy it, or not yet, and what to do first.',

  timeline: '10 to 13 business days',

  // Named alternatives the buyer already recognises.
  contrast: [
    {
      not: 'Not your dev shop',
      because:
        'They tell you whether they can build it. They are paid to build it. They will not tell you whether you should.',
    },
    {
      not: 'Not a gut check call',
      because:
        'An hour on a call reframes the question. It does no homework inside your actual business.',
    },
    {
      not: 'Not a consultancy deck',
      because:
        'A large firm takes weeks and hands you a presentation. You need a decision, not a document.',
    },
  ],

  // The buyer should find themselves in one of these.
  recognise: [
    'You are weighing whether to build something yourself or buy a platform that nearly fits.',
    'Everyone is telling you to invest in AI and you cannot tell which part is real.',
    'Your engineers say they can build it. You are not sure that answers the question.',
    'You are about to replace a system that mostly works, and the cost keeps growing.',
    'The commitment is large and hard to walk back once it starts.',
  ],
  recogniseThreshold:
    'If two or more of those are true, the decision is worth two weeks before you commit.',

  // What you get. Concrete, no process language.
  deliverables: [
    {
      title: 'The answer, first',
      desc: 'Build, buy, or not yet, stated plainly on the first page, with how confident we are and what would change it.',
    },
    {
      title: 'The case behind it',
      desc: 'What you believed going in, what the evidence showed, where those differed, and the trade offs made explicit rather than hidden.',
    },
    {
      title: 'What to do first',
      desc: 'The first moves that matter and what they unlock, what is valid but should wait, and what looks attractive and should not take resources now.',
    },
    {
      title: 'The numbers per move',
      desc: 'Cost, dependencies, downside and cost of delay, where the evidence supports an estimate and marked clearly where it does not.',
    },
    {
      title: 'A live session with your leadership',
      desc: 'Sixty to ninety minutes walking your team through the decision and defending it, recorded so you can share it.',
    },
    {
      title: 'Everything packaged',
      desc: 'The full record, the working files and an editable tracker, in your hands within 24 to 48 hours of the session.',
    },
  ],

  // Kept deliberately short. What the client does, not how we work.
  whatWeNeedFromYou: [
    'One short kickoff session with you and the people who hold the relevant parts.',
    'A few focused conversations across the two weeks.',
    'Access only to what the decision actually touches, nothing more.',
    'Ninety minutes at the end for the live session.',
  ],
  effortNote: 'A few hours of your time in total. The work is ours to carry.',

  // Trust signals stated as commitments.
  willTell: [
    'We will tell you not to build it, if that is what the evidence says.',
    'We will tell you the evidence is not enough to decide, rather than inventing certainty.',
    'We will tell you when a cheaper specialist is the right answer.',
    'We do not sell you the build afterwards. Nothing we recommend pays us more.',
  ],
  notFor: [
    'A decision you have already made and want confirmed.',
    'A narrow question one expert could answer on their own.',
    'A general review of the whole business with no specific move at stake.',
    'The building itself. Prism ends at the decision.',
  ],

  // Fit conditions, in plain terms.
  fit: [
    'The decision commits meaningfully more than the engagement does.',
    'It depends on more than one part of the business, so no single specialist can settle it.',
    'It is genuinely still open, and expensive to reverse once it starts.',
    'You will act on what the evidence says, including being told to wait.',
  ],

  /**
   * These are the questions people actually search before this decision, not
   * the objections we would like to answer. The first five were taken from
   * real query data; the last three are about the engagement itself.
   *
   * Figures are attributed, never asserted as ours. Most published cost data
   * in this category comes from firms that sell the build, which is worth
   * saying out loud rather than quietly repeating their numbers.
   */
  faqs: [
    {
      q: 'How much does it cost to build custom software?',
      a: `${benchmarks.buildRanges.claim}, and ${benchmarks.clutchAverage.claim.charAt(0).toLowerCase()}${benchmarks.clutchAverage.claim.slice(1)}. Those numbers are close to useless on their own, because ${benchmarks.quoteSpread.claim.charAt(0).toLowerCase()}${benchmarks.quoteSpread.claim.slice(1)}. The spread is driven by who is actually writing the code, how tightly the scope is defined, and whether testing, security and integration work are inside the quote or waiting outside it. The useful question is not the headline number, it is what the quote excludes.`,
    },
    {
      q: 'What does it really cost once it is running?',
      a: `This is the number that gets missed. ${benchmarks.maintenance.claim}, and one analysis puts the initial build at under 35 percent of five year total cost. ${benchmarks.integrationCost.claim}. Anything with AI in it carries inference and retraining costs that scale with usage rather than with team size. Ask any vendor for the three year number, not the build number.`,
    },
    {
      q: 'How long does it take to build custom software?',
      a: `${benchmarks.timelines.claim}. ${benchmarks.overrun.claim}, so treat any quoted date as the optimistic case unless real discovery sits behind it.`,
    },
    {
      q: 'Should we build, buy, or partner?',
      a: 'Partnering is the option most comparisons leave out, and it is often the right one: buy a platform with a real API and build only the part that is genuinely yours. The honest test is whether the thing in question is your competitive advantage or a utility. Build what differentiates you. Buy what does not. Partner where the answer is some of each. Most teams get this wrong by treating a utility as a differentiator because building it feels more satisfying.',
    },
    {
      q: 'How do you actually decide?',
      a: `Price all of it, not just the build: the five year running cost on both sides, the integration surface, what your team stops doing while they build, and the cost of being wrong. Then ask who gave you each number and what they earn from it. One figure is worth knowing: ${benchmarks.discovery.claim}. The homework is not overhead. It is the cheapest part of the decision.`,
    },
    {
      q: 'Can I trust the cost comparisons I find online?',
      a: 'Read who wrote them. Almost every page ranking for build versus buy is published by a software agency, which means the party explaining your decision is also the party paid for one of the answers. That does not make their numbers wrong, but it does mean nobody in that search result is neutral. We are not selling you the build either way, which is the only reason our answer here is worth more than theirs.',
    },
    {
      q: 'What if the answer is not to proceed?',
      a: 'That is a common and entirely legitimate outcome, and it is usually where the money is saved. We would rather tell you to stop than be comfortable.',
    },
    {
      q: 'How much of my time does this take?',
      a: 'A few hours in total: one kickoff session, a handful of focused conversations with the people who hold the relevant parts, and the live session at the end. The work is ours to carry.',
    },
    {
      q: 'Is this right for every decision?',
      a: 'No. If one specialist can answer your question, a specialist is cheaper and better, and we will say so. This is for the call that depends on several parts of the business at once.',
    },
  ],
};

export default prism;
