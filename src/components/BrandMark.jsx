import React from 'react';
import logoPng from '../assets/logo.png';
/*
  `?no-inline` is load bearing. The WebP is 3,620 bytes, under Vite's 4,096
  byte inline threshold, so the first build base64 encoded it straight into
  every page. That is worse than the problem it was meant to solve: base64 is
  about a third larger than the bytes it encodes, the mark appears twice per
  page, and it landed in HTML that is cached for sixty seconds rather than in
  a fingerprinted asset cached for a year. Roughly ten kilobytes added to
  every page to save four and a half kilobytes once. Forcing a file keeps it
  one request, shared between header and footer, cached immutably.
*/
import logoWebp from '../assets/logo.webp?no-inline';

/**
 * The logo mark, served as WebP with a PNG fallback.
 *
 * It appears twice on every page, in the header and in the footer, and it was
 * previously a bare <img> in each. Both instances point at one URL, so the
 * browser makes a single request and the second is served from memory, but
 * both carried the same two defects: an older format and no decoding hint.
 *
 * WebP here is lossless, not the 80 to 90 percent quality a conversion guide
 * would suggest. On a brand mark the saving from going lossy is a few hundred
 * bytes and the risk is visible artefacts on the one asset that must never
 * look wrong. Lossless takes it from 8,175 bytes to 3,620, which is 56 percent
 * off for a pixel identical image.
 *
 * `lazy` exists because the two placements need opposite treatment, and this
 * is the part a generic "add lazy loading to all images" instruction gets
 * wrong. The header mark is above the fold and visible before anything is
 * scrolled: deferring it delays first paint and can push out LCP, which is the
 * opposite of the intent. Only the footer mark is deferred.
 *
 * There is no fetchPriority hint. The first version set one on the header
 * mark and React 18 dropped it silently, because it does not pass that
 * camelCase prop through. On an eight kilobyte mark shared between two
 * placements it was never worth a workaround, so it is simply gone.
 *
 * Worth recording for whoever revisits this: the genuinely correct format for
 * a flat monochrome mark is SVG, which would be around a kilobyte and sharp at
 * every pixel density. That means redrawing or tracing a brand asset, which is
 * the owner's call rather than an optimisation to slip in.
 */
export default function BrandMark({ lazy = false, className = 'h-8 w-auto' }) {
  return (
    <picture>
      <source srcSet={logoWebp} type="image/webp" />
      <img
        src={logoPng}
        alt=""
        width="32"
        height="33"
        decoding="async"
        {...(lazy ? { loading: 'lazy' } : null)}
        className={className}
      />
    </picture>
  );
}
