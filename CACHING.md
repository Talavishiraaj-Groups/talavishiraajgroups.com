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
