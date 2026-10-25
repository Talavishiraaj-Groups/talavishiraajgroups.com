import React from 'react';

/**
 * Information graphics for the cost pages.
 *
 * Why these exist. A measurement of the built site found 25,553 words across
 * 36 pages, two images in the whole of <main>, and one table. Every argument
 * the site makes, including the numeric ones, was carried by prose. "Build cost
 * rarely exceeds 35 percent of five year total cost of ownership" is a sentence
 * doing a picture's job: the reader has to hold two quantities and compare them
 * in their head, which is exactly the work a proportion bar does for free.
 *
 * Why these are HTML and CSS rather than SVG, which is the more obvious choice
 * and was the first attempt. An SVG with a fixed viewBox scales its text along
 * with its geometry. These figures are 700 units wide, and inside a phone
 * viewport the rendered width is about 293px, a scale factor of 0.42. Measured
 * in the browser at 375px, a 15 unit label came out at 6.3 real pixels and a 12
 * unit axis tick at 5. Every number on every chart was illegible on a phone,
 * which is the one place an external audit had already flagged the site as
 * failing. Bars are rectangles and CSS draws rectangles natively, so building
 * them from elements keeps the labels as ordinary text at ordinary sizes, legible
 * at every width, selectable, and indexable without a second thought.
 *
 * Three further constraints.
 *
 * 1. Monochrome. The site has no palette beyond black, white and grays, and
 *    these are magnitude and part-to-whole stories rather than identity ones,
 *    so a single dark-to-light ramp is the correct encoding anyway rather than
 *    a compromise. Emphasis carries the meaning: the quantity being argued
 *    about is black, context is gray. No figure here has two series competing
 *    for identity, so none needs a legend box.
 *
 * 2. No chart library and no hover layer. These pages are prerendered to static
 *    HTML and the JavaScript bundle is already the heaviest thing the site
 *    ships. A tooltip would also make values reachable only by hover, which
 *    fails a keyboard and a crawler alike. Every number here is visible text
 *    instead, so nothing is gated behind an interaction.
 *
 * 3. Every figure takes its numbers from src/data/benchmarks.js, the one file
 *    allowed to carry a currency amount and the one that forces each figure to
 *    name a source. A chart drawn from a hardcoded number is a claim nobody can
 *    trace.
 */

/* The ramp. Dark is the thing under discussion, light is context. */
const INK = 'bg-primary';
const CONTEXT = 'bg-[#d4d4d4]';

const usd = (n) => (n >= 1000 ? `$${Math.round(n / 1000)}K` : `$${n}`);

/**
 * Shared frame. <figure>/<figcaption> rather than divs, so the attribution is
 * programmatically tied to the graphic instead of merely sitting near it.
 */
function Figure({ title, standfirst, children, source, url }) {
  return (
    <figure className="my-10 border border-border rounded-2xl bg-white p-6 md:p-8">
      <h3 className="text-base font-semibold mb-1.5 leading-snug">{title}</h3>
      {standfirst && (
        <p className="text-sm text-gray-600 leading-relaxed mb-7 max-w-2xl">{standfirst}</p>
      )}
      {children}
      <figcaption className="mt-7 pt-4 border-t border-border text-xs text-gray-500 leading-relaxed">
        Source:{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline decoration-gray-300 underline-offset-2 hover:text-black"
        >
          {source}
        </a>
      </figcaption>
    </figure>
  );
}

/**
 * Part to whole, two segments, one bar.
 *
 * The argument is a single ratio, so this is closer to a meter than a stacked
 * bar chart: one quantity measured against the whole it sits inside. A 2px gap
 * in the surface colour does the separating rather than a stroke, which would
 * add ink that is not data.
 */
export function ProportionFigure({ title, standfirst, sharePct, shareLabel, restLabel, source, url }) {
  return (
    <Figure title={title} standfirst={standfirst} source={source} url={url}>
      <div className="flex gap-[2px] h-14" role="img" aria-label={`${shareLabel}: ${sharePct} percent. ${restLabel}: ${100 - sharePct} percent.`}>
        <div
          className={`${INK} rounded flex items-center px-4`}
          style={{ width: `${sharePct}%` }}
        >
          <span className="text-accent text-sm md:text-base font-semibold">{sharePct}%</span>
        </div>
        <div
          className={`${CONTEXT} rounded flex items-center justify-end px-4`}
          style={{ width: `${100 - sharePct}%` }}
        >
          <span className="text-primary text-sm md:text-base font-semibold">{100 - sharePct}%</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 text-sm">
        <span className="flex items-start gap-2.5 text-gray-900">
          <span className={`${INK} w-3 h-3 rounded-sm flex-shrink-0 mt-1`} aria-hidden="true" />
          {shareLabel}
        </span>
        <span className="flex items-start gap-2.5 text-gray-900">
          <span className={`${CONTEXT} w-3 h-3 rounded-sm flex-shrink-0 mt-1`} aria-hidden="true" />
          {restLabel}
        </span>
      </div>
    </Figure>
  );
}

/**
 * A span between two published extremes, with a reference point marked.
 *
 * One series, so no legend. The width of the span is the entire argument, so
 * the two ends and the marked average are the only things labelled.
 */
export function SpreadFigure({ title, standfirst, low, high, marker, markerLabel, source, url }) {
  const lowPct = (low / high) * 100;
  const markerPct = (marker / high) * 100;

  return (
    <Figure title={title} standfirst={standfirst} source={source} url={url}>
      <div
        role="img"
        aria-label={`Quotes for the same brief span ${usd(low)} to ${usd(high)}. ${markerLabel}: ${usd(marker)}.`}
      >
        {/* End labels, anchored to the ends of the span they describe. */}
        <div className="relative h-6 mb-2 text-sm md:text-base font-semibold text-primary">
          <span className="absolute left-0" style={{ left: `${lowPct}%` }}>
            {usd(low)}
          </span>
          <span className="absolute right-0">{usd(high)}</span>
        </div>

        <div className="relative h-6">
          {/* The span. */}
          <div
            className={`${CONTEXT} absolute inset-y-0 rounded`}
            style={{ left: `${lowPct}%`, right: 0 }}
          />
          {/* The reference point. The surrounding white sliver keeps it legible
              where it crosses the span. */}
          <div
            className="absolute -inset-y-1.5 w-1 bg-white"
            style={{ left: `${markerPct}%`, transform: 'translateX(-50%)' }}
          />
          <div
            className="absolute -inset-y-1 w-0.5 bg-primary"
            style={{ left: `${markerPct}%`, transform: 'translateX(-50%)' }}
          />
        </div>

        <div className="relative h-5 mt-3 border-t border-border pt-2">
          <span
            className="absolute text-xs md:text-sm text-slate whitespace-nowrap"
            style={{ left: `${markerPct}%`, transform: 'translateX(-50%)' }}
          >
            {markerLabel} {usd(marker)}
          </span>
        </div>
      </div>
    </Figure>
  );
}

/**
 * Two ranges compared against a common scale.
 *
 * Emphasis rather than categorical: the outcome being argued against is the
 * dark one. Both are directly labelled, so identity never depends on telling
 * two grays apart. The gridlines exist because a floating range bar with no
 * scale behind it gives a reader nothing to judge magnitude against, which is
 * how the first version of this read.
 */
export function RangeCompareFigure({ title, standfirst, rows, unit = '%', source, url }) {
  /* Round the scale up to a clean number, so the ticks are readable values
     rather than artefacts of the data. */
  const rawMax = Math.max(...rows.map((r) => r.high));
  const max = Math.ceil(rawMax / 20) * 20;
  const ticks = [0, max / 2, max];

  return (
    <Figure title={title} standfirst={standfirst} source={source} url={url}>
      <div
        role="img"
        aria-label={rows.map((r) => `${r.label}: ${r.low} to ${r.high}${unit}`).join('. ')}
      >
        <div className="space-y-7">
          {rows.map((row) => (
            <div key={row.label}>
              <p className="text-sm text-slate mb-2 leading-snug">{row.label}</p>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 h-5">
                  {/* Grid behind the data, hairline and solid. */}
                  {ticks.map((t) => (
                    <div
                      key={t}
                      className="absolute inset-y-0 w-px bg-border"
                      style={{ left: `${(t / max) * 100}%` }}
                      aria-hidden="true"
                    />
                  ))}
                  <div
                    className={`${row.emphasis ? INK : CONTEXT} absolute inset-y-0 rounded`}
                    style={{
                      left: `${(row.low / max) * 100}%`,
                      width: `${((row.high - row.low) / max) * 100}%`,
                    }}
                  />
                </div>
                {/* Outside the bar end, because a fifteen point range has no
                    room to hold text inside it without clipping. */}
                <span className="text-sm md:text-base font-semibold text-primary whitespace-nowrap">
                  {row.low} to {row.high}
                  {unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The axis carries the values the bars are not directly labelled with.
            It is inset on the right by the width of the value column so the
            ticks stay aligned to the track above them. */}
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border">
          <div className="relative flex-1 h-4">
            {ticks.map((t, i) => (
              <span
                key={t}
                className="absolute text-xs text-gray-500 tabular-nums"
                style={{
                  left: `${(t / max) * 100}%`,
                  transform:
                    i === 0 ? 'none' : i === ticks.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)',
                }}
              >
                {t}
                {i === ticks.length - 1 ? unit : ''}
              </span>
            ))}
          </div>
          <span
            className="text-sm md:text-base font-semibold invisible whitespace-nowrap"
            aria-hidden="true"
          >
            {rows[0].low} to {rows[0].high}
            {unit}
          </span>
        </div>
      </div>
    </Figure>
  );
}
