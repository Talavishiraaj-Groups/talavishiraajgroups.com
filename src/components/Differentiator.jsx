import React from 'react';

/**
 * A short statement of what makes this different from the obvious alternative.
 *
 * Why this exists: both the capabilities hub and the case study index described
 * what we do without ever answering the question a visitor is actually holding,
 * which is why them rather than the ten other firms offering the same list. A
 * capability list is not a differentiator. Everyone in this category publishes
 * the same one.
 *
 * Two constraints shaped it. First, it has to be provable from what is already
 * on the site rather than asserted, because the site has no client references,
 * logos or testimonials to lean on yet. Each point below maps to something a
 * reader can go and verify on a service or case study page. Second, it is a
 * contrast, not a boast: Dunford's point is that differentiation only means
 * anything relative to a named alternative, so each point says what the usual
 * alternative does and what we do instead.
 *
 * Used sparingly and deliberately. Two instances sitewide, on the two hub pages
 * where a visitor is comparing. Repeating it on every child page would turn it
 * into boilerplate, which readers skip and crawlers discount.
 */
/*
 * tone exists only so the block does not collide with whatever band sits next
 * to it. Two adjacent muted sections read as one grey slab, and the case study
 * filter chips are white on muted so that band has to keep its own background.
 */
export default function Differentiator({
  eyebrow = 'What is different here',
  heading,
  points,
  tone = 'muted',
}) {
  return (
    <section
      className={`border-y border-border ${tone === 'white' ? 'bg-white' : 'bg-muted'}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">{eyebrow}</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 max-w-2xl leading-tight">
          {heading}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div key={point.title}>
              <span className="block text-xs font-mono text-gray-500 mb-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold mb-2 leading-snug">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
