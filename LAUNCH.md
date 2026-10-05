# Launch runbook

From pushing the code to the first inbound. In order. Do not skip step 4.

Strategy and evidence live in `growth-research/`. This file is the sequence.

---

## Before you push

Run all three gates. All must pass.

```bash
npm run build
npm run check
node scripts/audit-pages.mjs
```

Expected:

| Gate | Expected result |
| --- | --- |
| `npm run build` | 35 routes prerendered, 32 in sitemap, 3 noindex |
| `npm run check` | Passed. 45 files scanned, no violations |
| `audit-pages.mjs` | 34 pages audited, 34 with no failures |

Then review the diff. **It contains work from more than one session.** Check
`src/data/insights.js`, `src/data/resources.js` and `marketing-research/` are
things you want in the commit. `src/pages/SystemsPage.jsx` shows as deleted and
that is deliberate: it was orphaned and carried the old positioning.

```bash
git add -A
git commit
git push
```

---

## Step 1: Confirm the deploy is correct (15 minutes)

Do these in a private window, against the live domain.

| Check | Expected |
| --- | --- |
| `/systems` | **301 redirects to `/products`.** Only works in production, the local preview returns 404 |
| `/products` | Loads, H1 reads "Before you build it, buy it, or bet on AI" |
| `/build-vs-buy` | Seven questions render, the button enables once all seven are answered |
| `/book` | **The Cal.com calendar loads.** If it says "online booking is not live yet", `VITE_CAL_LINK` was saved but not redeployed |
| `/sitemap.xml` | 32 URLs, no `/systems` |
| `/robots.txt` | Open, points at the sitemap |

> `VITE_CAL_LINK` is compiled into the bundle at build time. Saving it in Vercel
> changes nothing until you redeploy. This is the single most common thing to
> get wrong.

## Step 2: Confirm analytics is reporting (5 minutes)

**This is now wired in code.** `@vercel/analytics` is installed and `<Analytics />`
renders in `src/App.jsx`, so there is nothing to enable in the dashboard beyond
turning Web Analytics on for the project if it is not already.

What was verified in the browser before the push:

- The script is injected client side from `/_vercel/insights/script.js`.
- `window.va` becomes available, and the existing adapter routes events to it. A
  hero click produced `cta_click` with `location: home_hero, target: case_studies`.
- A client side route change produced **no** custom event, because Vercel counts
  page views natively. `usePageViews` now stands down when `window.va` exists, so
  page views are not double counted and the custom event allowance is not spent on
  something already measured. Other providers still get the explicit call.

After deploying, open the site, click between a few pages, then check the Analytics
tab. Vercel's own note applies: if nothing appears within about 30 seconds, check for
a content blocker and navigate between pages again.

Custom events to expect once traffic arrives: `cta_click`, `prism_interest`,
`service_interest`, `service_inquiry`, `contact_form_start`, `contact_form_submit`,
`book_call_click`, `build_buy_tool_start`, `build_buy_tool_complete`,
`case_study_view`, `email_click`, `social_click`, `external_link_click`.

> One trade worth knowing: this is the only third party request the site makes.
> Everything else, fonts included, is served from the domain. The script is
> cookieless and collects no personal data, which is why it does not create a
> consent obligation here.

## Step 3: Search Console and Bing (20 minutes)

1. **Google Search Console**, add `https://www.talavishiraajgroups.com`, verify
   by DNS or the Vercel integration.
2. Submit `https://www.talavishiraajgroups.com/sitemap.xml`.
3. Request indexing for `/`, `/products`, `/build-vs-buy`.
4. **Bing Webmaster Tools**: import from Search Console in one click. Bing feeds
   ChatGPT search, so this is not optional any more.

Nothing to measure for about two weeks. Do not judge anything before then.

## Step 4: Test a real booking (10 minutes) — do not skip

Book a slot on `/book` with a personal email. Confirm **all three** arrive:

1. Attendee confirmation and calendar invite, from Cal.com
2. Your own Cal.com notification
3. **A "New call booked" email at `info@talavishiraajgroups.com`, through Zoho**

Number three is the one that proves the webhook and `CAL_WEBHOOK_SECRET` match.
If one and two arrive but three does not: Vercel → Logs → filter
`/api/cal-webhook`. A 401 means the secrets differ between Cal.com and Vercel.

> The webhook code is correct and fails closed, but `bodyParser: false` is a
> platform behaviour that cannot be confirmed without a deployed test. **Until
> this test passes, do not assume bookings reach your inbox.** Then cancel the
> test booking and confirm the cancellation email arrives too.

## Step 5: Ask three clients to go on record (this week)

The highest leverage unpaid action available, and it gates most of what follows.

Ask for: **their name, their company, and one number.** Not a testimonial
paragraph. A number.

Those three conversations unlock four things at once: the reviews content, the
site's missing proof layer, Clutch ranking, and GoodFirms acceptance (which
requires 2 to 3 client reference calls and accepts about 23% of applicants).

Until this exists the site has no proof of any kind, which is the single
biggest gap in it.

---

## Step 6: Free listings, nothing gated (week 2)

All free. None needs the client references.

| Platform | Why | Notes |
| --- | --- | --- |
| **DesignRush** | **Ranks page one** for `ai automation agency for small businesses` | Analyst-judged, so not blocked by the reviews gate. **Do this first.** Free listing only, ignore every paid tier |
| **Clutch** | The authority directory in this category | Free profile, about 3 days to publish, automatically includes **The Manifest**. Note the free tier gives no website link |
| **Crunchbase** | Journalists and AI assistants use it constantly | Free |
| **F6S** | Founder and startup network | Free |
| **Wellfound** | **Already listed** | Just correct it so it matches the new positioning |
| **YourStory** | India startup media, dofollow | Relevant to the Bengaluru HQ |
| **LinkedIn company page** | 143 followers today | Rewrite the description to match `/products` |
| **Google Business Profile** | `near me` and city queries | Needs a verifiable address. Decide Bengaluru or UK first |

**Do not pay for anything.** Not DesignRush sponsorship (from ~$2,000/month),
not Clutch Verified ($499/year) until three reviews exist, and not any $99
submission service.

## Step 7: Founder publishing (starts week 2, never stops)

The pattern McKinsey, BCG and Umbrex actually use, reduced to what works at your
size:

- **Own the channel.** Publish on the domain. Distribute from LinkedIn. Do not
  build the audience on someone else's platform.
- **Named byline.** Every competitor page that ranks in your space is bylined.
  The company page is not the asset; the founder is.
- **Altitude.** Write at the level someone running a business operates at, not
  the mechanics of a tactic.
- **One named framework.** Prism already is one. Use the same words everywhere so
  it becomes quotable.

One piece a week. Start with the Big 5 (cost, problems, comparisons, reviews,
best in class) — it is simultaneously the content backlog and the trust strategy,
and it is currently 0% built.

**The annual research report is the twelve-month goal, not a launch move.** Six
anonymised case studies is not a dataset. Do not manufacture one.

## Step 8: Tool directories for the framework (week 3)

`/build-vs-buy` is a genuine interactive tool, which makes it eligible where a
consulting engagement is not.

**Launch platforms:** BetaList · Peerlist Launchpad · Uneed · MicroLaunch ·
Fazier · TinyLaunch · PeerPush · Open Launch
**SaaS directories:** AlternativeTo (list as an alternative to competitors, which
captures comparison intent) · SaaSHub · SaaSWorthy · Serchen · SaasGenius ·
Crozdesk · SoftwareSuggest · Startup Stash · Hive Index
**AI directories** (these feed AI assistant answers): There's An AI For That ·
Futurepedia · FutureTools · Toolify · TopAI.tools · Supertools · Altern.ai ·
Dang.ai · aitools.fyi
**Technical:** Hacker News "Show HN" — free and immediate, but high variance and
it punishes anything promotional. Read the norms first.

Aim for about **twenty relevant** listings, not four hundred. **Decline anything
that requires a reciprocal backlink** (AITop10.tools is explicit about it) —
that is a link exchange and a liability.

## Step 9: Partnerships (week 3, in parallel)

Likely the fastest route to actual revenue, and it **needs no traffic at all**.

Fractional COOs and boutique ops consultants are not rivals. They sell a person
on retainer; you sell a fixed-scope artefact. They need a defensible diagnosis
to scope a retainer and cannot produce one profitably themselves.

Target about **30 accurate conversations**. Umbrex is a whole network of them.

## Step 10: Communities (ongoing)

`ai automation agency reddit`, `n8n agency reddit` and `ai automation for small
businesses reddit` all complete in autocomplete — buyers explicitly route around
vendor sites to find honest answers.

Participate **as the founder**. Answer specific questions. No links, no pitching.
This channel punishes marketing more reliably than any other. Join the n8n
community (~200,000 members, free) now; the Expert Partner programme requires
three customers actively using n8n, which you do not have yet.

## Step 11: Read the data (week 4)

Search Console gives you **the first real keyword data in this project.**
Everything in `growth-research/02` and `/10` is autocomplete evidence: it proves
a query exists and what it means, but gives no volume and no difficulty. Treat
it as hypothesis until Search Console confirms.

**Measure:** pages findable by someone who has never heard of you (0 before this
deploy) · named clients on record (0 today) · framework completions · partner
conversations held · enquiries that reference a specific page.

**Ignore:** rankings, sessions, followers, and any conversion rate target. A/B
testing is arithmetically impossible at this traffic, so changes are validated by
`audit-pages.mjs`, the trunk test, and real buyers reading the page aloud.

---

## Not now, and why

| | Reason |
| --- | --- |
| **Product Hunt** | Featured rate collapsed to about 10%. A verified **#1 Product of the Day produced 539 sessions over two days** for a team that already had tens of thousands of users. You have 143 followers and your buyer is not there |
| **Paid search** | Bidding against funded agencies, sending clicks to a site with no published proof |
| **Microsites or extra sitemaps** | No evidence they are needed, and they split authority a one-year-old domain has not accumulated. Keep the single domain and the single generated sitemap |
| **Paid submission services** | You are buying what the free tier gives |
| **aibusiness.ai, b2bvetted, selectedfirms, edverise, topdevelopers** | Pay to play. One sells "high-authority backlinks" as its headline product |

## The one thing still blocked on you

**Canon §6: the named operator.** Your own product doc says it plainly: *"Prism
cannot claim premium senior judgment on build/buy/AI decisions with an anonymous
senior operator."*

The site has no named person and no track record on it. Until that exists, the
positioning is structurally sharp but not yet credible enough to command a
premium. Nobody else can supply this.
