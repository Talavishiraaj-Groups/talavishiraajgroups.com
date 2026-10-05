import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A horizontally scrolling row of cards.
 *
 * Used on the landing page so a six item list takes one screen row instead of
 * three stacked rows. The page keeps all of its content, it just stops being
 * three tall grids in a column.
 *
 * Things that matter here:
 *
 * - Every card stays in the DOM and in the normal reading order, so search
 *   engines and screen readers get the full list. Nothing is hidden behind a
 *   click or lazily injected.
 * - The track is a real focusable region with a label, so a keyboard user can
 *   tab to it and scroll with the arrow keys. A scroll container that cannot
 *   be reached by keyboard is an accessibility failure, which is the usual
 *   problem with carousels.
 * - The arrow buttons are a convenience on top of native scrolling, not the
 *   only way through. They hide themselves when there is nothing to scroll to,
 *   and they are hidden from assistive tech because the region itself is
 *   already operable.
 * - Scroll snapping keeps cards aligned without any animation library.
 */
export default function HorizontalRail({ label, children, className = '' }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 4);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const nudge = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    // One card plus the gap, so a press lands on the next card rather than
    // part way through it.
    const step = el.firstElementChild ? el.firstElementChild.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const arrowClasses =
    'hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-primary transition-opacity hover:border-gray-400 disabled:opacity-0 disabled:pointer-events-none';

  return (
    <div className={className}>
      {scrollable && (
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => nudge(-1)}
            disabled={atStart}
            className={arrowClasses}
          >
            <span className="sr-only">Scroll left</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => nudge(1)}
            disabled={atEnd}
            className={arrowClasses}
          >
            <span className="sr-only">Scroll right</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      <ul
        ref={trackRef}
        // tabIndex makes the overflow region keyboard scrollable. role and
        // label tell a screen reader what it is before they enter it.
        tabIndex={0}
        role="region"
        aria-label={label}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0 list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black [scrollbar-width:thin]"
      >
        {React.Children.map(children, (child, i) => (
          <li
            key={i}
            className="snap-start shrink-0 w-[85vw] sm:w-[20rem] lg:w-[22rem] flex"
          >
            {child}
          </li>
        ))}
      </ul>

      {scrollable && (
        <p className="text-xs text-gray-500 mt-1 md:hidden">Swipe to see more</p>
      )}
    </div>
  );
}
