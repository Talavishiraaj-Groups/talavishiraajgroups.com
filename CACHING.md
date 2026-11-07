# Caching policy

Set in `vercel.json` under `headers`. Read this before editing that block.

## The policy

| What | Cache-Control | Why |
| --- | --- | --- |
| HTML documents (all routes) | `public, max-age=60, must-revalidate` | A returning visitor clicking around gets a minute of freshness without a round trip. A deploy reaches them within 60 seconds, which is an acceptable trade for a prerendered marketing site |
| `/assets/*` (JS, CSS) | `public, max-age=31536000, immutable` | Vite fingerprints these filenames with a content hash, so a changed file is a different URL. They can safely be cached for a year and never revalidated |
| `/fonts/*` | `public, max-age=31536000, immutable` | Self hosted and versioned by path. Same reasoning |
| Root images (`.png .jpg .jpeg .svg .ico .webp .avif`) | `public, max-age=86400, stale-while-revalidate=604800` | **Not** fingerprinted. `logo.png` and `og-image.png` keep their names across deploys, so a one year immutable cache would leave visitors holding an old logo for a year. One day fresh, then served stale while revalidated in the background for a week |

## The ordering rule, which matters

**Vercel applies every matching header rule, and for a duplicate key the last matching rule wins.**

So the order in `vercel.json` is deliberate:

1. `/(.*)` — security headers and the HTML cache default
2. `/(.*)\.(png|jpg|…)` — overrides the default for unfingerprinted images
3. `/assets/(.*)` — overrides it again with immutable
4. `/fonts/(.*)` — same

If the catch-all is ever moved below the specific rules, it will override them and every hashed asset drops from a year to 60 seconds. That is a silent, expensive regression: nothing breaks, the site just stops caching and gets slower for returning visitors.

**If you add a rule, add it after the catch-all, not before.**

## Verifying after a deploy

Header rules only take effect on Vercel, so they cannot be tested locally.

```bash
# HTML should be max-age=60
curl -sI https://www.talavishiraajgroups.com/ | grep -i cache-control

# hashed assets should be a year and immutable
curl -sI https://www.talavishiraajgroups.com/assets/<hashed>.js | grep -i cache-control

# root images should be a day with stale-while-revalidate
curl -sI https://www.talavishiraajgroups.com/logo.png | grep -i cache-control
```

Expected:

```
/                 public, max-age=60, must-revalidate
/assets/*.js      public, max-age=31536000, immutable
/fonts/*.woff2    public, max-age=31536000, immutable
/logo.png         public, max-age=86400, stale-while-revalidate=604800
```

If `/assets/*` comes back as `max-age=60`, the ordering has regressed. Fix the order rather than the values.

## What this is not

It is not a performance fix for first time visitors. Server response was already measured at 12ms and the assets were already immutable before this change. The only things it alters are repeat visits and the unfingerprinted root images, which were previously revalidating on every request.

## Compression

Vercel negotiates Brotli automatically for text responses. There is nothing to
configure and no server config file to edit: there is no `.htaccess` and no
`nginx.conf` on this platform.

### Verifying it, and the trap

Compression is **negotiated**. A client that does not send `Accept-Encoding`
is correctly served an uncompressed response, so a test that omits the header
will report compression as disabled:

```bash
# What a browser sends. Expect: content-encoding: br
curl -sI -H "Accept-Encoding: gzip, deflate, br" https://www.talavishiraajgroups.com/ | grep -i content-encoding

# What a naive crawler sends. Expect: no content-encoding, full size
curl -sI https://www.talavishiraajgroups.com/ | grep -i content-length
```

Measured 2026-11-08, live:

| resource | uncompressed | brotli | saved |
| --- | --- | --- | --- |
| `/` | 41,548 | 8,880 | 78% |
| `/assets/*.css` | 40,508 | 7,536 | 81% |
| `/assets/*.js` | 510,912 | 145,656 | 71% |

**An external audit reported `gzip: false` for this site and quoted a homepage
size of 41,322 bytes.** That figure is the uncompressed response, and it is
within 226 bytes of the uncompressed size measured above. The crawler did not
send `Accept-Encoding`, received exactly what the spec says it should, and
reported the absence of something it never asked for. Before acting on a
compression finding from any tool, re-run the two commands above.

### The real number in that table

The JavaScript bundle is 510,912 bytes raw and 145,656 over the wire. That is
the largest single thing the site ships and compression is already doing its
part; the remaining fix is route splitting, written up in
`growth-research/15-optise-audit.md` section 1b and deliberately not attempted
because it means diverging the server and client trees.
