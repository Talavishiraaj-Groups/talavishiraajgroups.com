# Log & open questions

## Session 1 — 2026-09-28
Started from zero. No prior company research used (the repo's existing
`marketing-research/` folder was deliberately not read, per the brief).

Done:
- Extracted and inventoried the 21-book source library.
- Audited the live site (26 URLs from sitemap, all prerendered).
- Discovered the company independently (Exa, LinkedIn, Wellfound, live site).
- Verified/falsified the competitor list supplied in the notes file.
- Pulled first-party demand evidence from Google's autocomplete corpus
  (US, GB, AE, IN) across 48 seed queries.

## Open questions (need evidence, not assumption)
1. Is the site indexed at all? No Search Console access — need the owner to
   confirm, or an index-coverage proxy.
2. Which of the five stated target regions actually produces revenue today?
   Unknown. This materially changes the geo strategy.
3. Prism's real price point: the notes file says $2,499; the live /systems page
   states no price. Which is current?
4. What did the existing clients behind the six case studies actually buy, and
   how did they find the company? This is the highest-value unknown in the
   whole project — it is the only first-party conversion evidence available.

## Next
- SERP reality-check on the winnable query clusters.
- Channel applicability assessment with evidence.
- Extract operative principles from the book library.

## Session 1 result — files written
- `01-company-baseline.md` — what the company and site actually are
- `02-demand-evidence.md` — demand evidence; what it rules in and out
- `03-competitive-landscape.md` — verified competitors + the fabrications to discard
- `04-book-principles.md` — operative principles from the library
- `05-channel-assessment.md` — channel-by-channel applicability
- `06-strategy.md` — synthesis

## Evidence sources used (session 1)
- Live fetch of all 26 sitemap URLs, robots.txt, sitemap.xml, raw HTML of 6 pages
- Exa organisation record + LinkedIn (company page, founder profile, 3 posts)
- Wellfound, Jobaaj, Buyersprove, worldbizconnect listings
- HTTP resolution of 13 claimed competitor domains
- Google Autocomplete, 48 seeds, gl=us/gb/ae/in (raw JSON in scratch)
- Live SERPs: `ai automation agency for small businesses`,
  `operations consultant for small business fixed price operations audit`
- Full read of covisionconsultants.com/operations-audit-for-small-business/
- n8n.io/experts (partner criteria), producthunt.com/about (scope)
- 18 of 21 books text-extracted; 5 mined in depth

## Things deliberately NOT done
- Did not read the repo's existing `marketing-research/`, `task/`, `upgrade-web/` or
  `new_update_docs/` folders — the brief required independent discovery.
- Did not modify the website or any code.
- Did not process the 41MB "400 organic leads daily" MP4.
- Did not extract the 2 EPUBs (design philosophy; not acquisition-relevant).

## Next session — in priority order
1. **Ask the owner the four blocking questions** in `06` (client acquisition source,
   index status, real price, revenue region). Cheap, and they move the strategy most.
2. Run the 10-conversation partnership test with fractional COOs / boutique ops
   consultants. No build required. Fastest path to revenue.
3. Get 3 existing clients on record, named, one number each. Unblocks Big-5 topic 4.
4. Review the ~10 verified competitor domains individually: what they publish, where
   they are cited, how they capture.
5. Resolve whether geo-SEO incumbents (`osiz` et al.) win with quality or with spam.
6. If tool access appears: volume + difficulty for the clusters in `02` Finding 4.
7. Only then: propose the build in `06` for approval.

---

## Session 2 — 2026-09-29

Triggered by owner feedback: the psychology/UX half of the library was under-used, the
directories were named but not listed, Prism's page situation was mis-weighted, and more
evidence was wanted.

New files: `07-psychology-and-ux.md`, `08-directories.md`.

### New hard findings
- **Prism is invisible on its own home page.** "Prism" appears 0 times there; "systems"
  28 times, every one a generic adjective. Every page links to `/systems` exactly 3× —
  header, mobile nav, footer — **zero in-body editorial links**. "Prism" is in the body of
  only `/systems` and `/contact`. `/services/business-and-operating-systems` and the
  `founder-operations-cockpit` case study never mention it. No `/prism` URL exists
  (`/prism`, `/systems/prism`, `/prism-diagnostic`, `/services/prism`,
  `/workflow-intelligence` all 404 noindex). Prism lives only in `src/pages/SystemsPage.jsx`.
- **Weinschenk's 8 persuasion factors: 8 for 8 absent or inverted** on the live site.
- **Both credible directories are gated on client references** — Clutch needs 3+ reviews
  for Premier Verified; GoodFirms does 2–3 client reference calls at ~23% acceptance.
  Same three conversations unblock reviews content, social proof, Clutch and GoodFirms.
- Verified directory costs: Clutch free basic (no website link on free tier),
  Verified $499/yr, sponsorship reportedly $1.5k–$15k/mo. GoodFirms free (fully
  functional), PRO $588/yr. DesignRush free basic, Marketplace $200–$500/mo with 1-year
  upfront, Sponsorship from ~$2,000/mo.
- Identified 4 pay-to-play listing platforms to avoid, one of which sells "high-authority
  backlinks" as its headline product.

### Method additions
- Both EPUBs extracted (Norman *Design for a Better World*, Dahlström *Storytelling in
  Design*) — 20 of 21 files now text-mined. Only the MP4 remains unprocessed.
- Verbatim law/principle definitions pulled from *Laws of UX*, Krug, Weinschenk, Norman.
- Per-page internal-link and Prism-mention counts measured across 15 URLs.

### Still open (unchanged, plus new)
- The four owner questions in `06` remain the biggest blockers.
- **New gap:** Google Business Profile eligibility — is there a verifiable address in
  Bengaluru and/or the UK? Bears directly on the geo play.
- Make / Zapier / HubSpot / Airtable partner programme requirements not yet verified.
- Whether Clutch verification works cleanly for an Indian entity with a UK-resident founder.

---

## Session 3 — 2026-10-05

Owner questions: is the landing page too long; put Systems/Prism on it; give more
directories that drive inbound faster, including Product Hunt.

New: `09-landing-page.md`. `08-directories.md` gained a full Part B.

### New hard findings
- **"Too long" is not supported.** Measured 10 homepages. Talavishiraaj = 1,190 words,
  third-SHORTEST in the set; median competitor ~1,350; ScaleUpExec 3,281 and Covision
  2,559. But Talavishiraaj has 26 h3s — the MOST of any — vs ScaleUpExec's 0.
  **The page is too wide, not too long:** three parallel six-way grids. Hick's Law
  explains why it feels long while measuring short.
- **Every competitor H1 names a buyer, outcome or concrete service.** Talavishiraaj's is
  the only one naming a method. Every competitor puts proof numbers and often price in
  the hero (ScaleUpExec: "0% client churn · 25+ businesses scaled · engagements from
  $5,000/month"; Luhhu: "100+ clients helped · Same-day quotes · No calls required").
- **Two direct competitors already run the instrument play as their front door.**
  Proofpoint's hero CTA is "Take the Positioning Risk Assessment"; ELSE offers a free
  "PDF with your bottlenecks after the call". The recommendation from `05`/`07` is the
  observed market standard, not a theory.
- **Product Hunt: verdict is no, for now.** Featured rate ~10%; top-3 base rate under 5%
  and reserved for products with existing distribution; 50-120 hrs prep. Decisive
  first-hand case: a #1 Product of the Day finish (410 upvotes, Sept 2026) produced
  **539 sessions over two days** — ~28% of one ordinary day's traffic — with 23 reaching
  a pricing page. They already had tens of thousands of users. Talavishiraaj has 143
  followers, no product to launch, and a buyer who is not on Product Hunt.
- **Directories beat Product Hunt here precisely because they need no audience.**
  Day-1 2-20 visitors vs 300-4,000, but month-3 50-500/mo compounding vs near zero.
- **The keystone insight:** nearly every launch platform and product directory requires a
  *product*. The free diagnostic instrument is what makes the company eligible for
  several hundred free listing platforms. One build unlocks SEO, the commitment ladder,
  partner collateral, AI-assistant citations and the entire launch ecosystem.
- **Eligible today with no product:** Crunchbase, F6S, Indie Hackers, YourStory
  (India-focused, DR 85 dofollow) — added to the sequence at step 4.

### Source-quality warnings recorded
- Most directory lists are published by firms selling $99 submission services; their
  DR-gain claims are marketing, not evidence.
- DR figures disagree badly across sources (Clutch 91 vs 79; GoodFirms 55 vs 68;
  Futurepedia 42 vs 67). Do not plan on a number.
- Some free tiers demand a reciprocal backlink (AITop10.tools). Decline.
- The "3x AI Overview visibility" claim is UNVERIFIED. Do not repeat it.

### Next
1. The four owner questions in `06` — still the biggest blockers, still unanswered.
2. Steps 1-6 of the `08` Part B sequence: all free, all ungated except the client calls.
3. Spec the free diagnostic instrument (step 7 — the keystone).
4. Then propose the landing-page rebuild in `09` for approval.

---

## Session 4 — 2026-10-05 (BUILD)

First session with the real product docs (`10_final-architecture.md`,
`11_positioning-corrected.md`). New research file `10-prism-canon-and-seo.md`.
**First session in which code was changed.**

### Research
- Prism is NOT a workflow intelligence assessment. Canon: an independent two week
  go/no-go on a build / buy / AI investment decision.
- Canon bans the words diagnostic, audit, assessment, diagnose, recommendations,
  optimize, transform, unlock, holistic, end-to-end. The old /systems page used most
  of them. **This corrected my earlier advice in 02/05/06 to target "operations audit"
  and "AI readiness assessment" vocabulary.**
- Canon §12 says do NOT build an SEO machine, a content calendar or paid search yet.
  Resolved as: build the one page and the permanent technical layer, do not switch on
  SEM or a content programme.
- Keyword research on canon's own language: "build vs buy" + software / framework /
  analysis / **calculator** / "in the age of AI" all have real demand (US, GB, IN).
  Bare "build vs buy" is polluted by house/gaming PC/shed. "ai go no go" is owned by
  PMI methodology and a firearms part. "should we invest in ai" is stock market.
- **The whole SERP for "build vs buy software decision framework" is dev shops**
  (BETSOL, Saigon, Neontri, Diatom, ThirstySprout, CleverTap, Windward, feature23,
  MarsDevs). Every ranking page is written by someone paid to build. Prism's
  independence is the one thing absent from the entire page one.
- Booking: self-hosted Cal.com sends confirmations to BOTH host and attendee, needs
  SMTP, and reminders work ("Self-hosted Instances: No restrictions on workflow usage").
  BUT cal.diy (the new MIT fork) has Workflows REMOVED and is marked non-production.
  Recommendation: Cal.com free hosted tier + embed. **Not yet built.**
- Site services (6 abstract buckets) do not match canon's 5 priced services. Not fixed.

### Built
- `src/data/prism.js` (new) — buyer language only, no price, no internal process, no em dashes
- `src/pages/ProductsPage.jsx` (new) — replaces SystemsPage
- `/systems` route now redirects to `/products` (client) + **301 in vercel.json** (server)
- Navbar and Footer label: Systems -> Products
- `entry-server.jsx` routes: /systems -> /products (drives prerender AND sitemap)
- `LandingPage.jsx` — compact product section added directly after the hero
- `TermsPage.jsx` — removed the last em dash on the site

### Verified after build
- 33 routes prerendered, 31 in sitemap. /products present, /systems gone from sitemap.
- /products: 1,131 words, 12 h2, 9 h3 (old page was wider and vaguer)
- Schema on /products: Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage
- "Prism" on the homepage: 0 -> 3. Homepage 1,190 -> 1,286 words, h3 count unchanged at
  26 (the new section adds no h3s, so the page got no wider)
- Zero em dashes across all of dist. Zero price strings on /products.

### NOT done
- Booking integration (Cal.com embed + qualifying form). Researched, not built.
- The 6-vs-5 services mismatch.
- SystemsPage.jsx still on disk, now unused. Delete after the owner confirms.
- Canon §6 reason-to-believe is still empty: no named operator, no track record on the
  page. Canon says no premium claim until that exists. Needs the founder.

### Session 4 addendum: the qualifying form was cut back

Owner challenge: why gate the booking form at all when there is no inbound yet?
Correct, and the form was wrong. Removed the budget band dropdown
($25k/$100k/$500k+) and the "how settled is it" dropdown, including the branch
that told a "mostly decided" visitor not to bother.

Reasoning now recorded in the component header: qualification gates solve a
too-many-leads problem. There is no inbound, so every field multiplies zero.
Asking a stranger for a budget band before the site shows a named operator or a
single client result is a bad trade on the reservoir of goodwill.

Market check supports it. Neither fractional COO firm measured in `09` gates on
budget: Asamby's hero CTA is "Book a Free Discovery Call", ELSE offers
"25 minutes on video, free, PDF with your bottlenecks after the call".

Form is now 4 fields: what are you deciding (free text, required), name, email,
company (optional). The free text does the real qualifying anyway, and a bad fit
costs five minutes on a call. Revisit when there are more calls than time.

**Standing principle for this project:** do not add friction designed for a
volume problem the company does not have yet.

### Session 4 addendum 2: book-a-call offered sitewide

Owner request: every services, products and other page should let someone either
book a call directly or fill in the form.

Built:
- `src/pages/BookPage.jsx` at `/book`. The Cal.com calendar is embedded on our own
  domain rather than sending people to cal.com, so the visitor stays on site and the
  visit is measurable. Marked **noindex**: a booking widget is not a search result and
  an indexed calendar page competes with the pages that should rank.
- `src/components/CtaBand.jsx`. Two paths side by side, book a call and send a
  message, with a light and a dark variant so it sits on any section.
- Book a call added next to the existing "Start a conversation" CTA on the 6 capability
  pages, partnerships, insights and resources detail pages.
- CtaBand appended to the About, Services, Case Studies, Insights and Resources hubs.
- Products hero: the second button is now Book a call (was an anchor to a section).
- Landing page product section: Book a call alongside See Prism.
- Contact page: a line offering the call for people who would rather talk than type.

Coverage verified in the built HTML: every public page carries both paths.
CommunityPage was skipped (its JSX has no top level fragment to append to); it is
noindex anyway.

Reasoning recorded in the component: the split between people who want a calendar and
people who want to write a few lines is about the moment, not about seriousness.
Offering one loses the other half, and there is no traffic to lose.

Still required before booking works live: `VITE_CAL_LINK` and `CAL_WEBHOOK_SECRET`.
Without `VITE_CAL_LINK` the /book page explains the call and routes to the form, so
the button is never a dead end.

### Session 4 addendum 3: one funnel, contact is the hub

Owner direction: services and products should close with a call to action, but it
should send people to the contact page, and both options live there.

Changed from the previous version, which put the calendar and the form side by side
on every page. That presented the same choice repeatedly and split the two paths
before the visitor had any reason to prefer one.

Now:
- Every page closes with a single button: "Book a call or send a message" to /contact.
- /contact opens with two cards: **Book a call** (to /book, the calendar) and
  **Send a message** (anchors to #contact-form below).
- /book still exists and holds the embedded calendar. It is only reachable from
  /contact, and stays noindex.

Verified in the built HTML: zero direct /book links on any page except /contact.

Booking is now live locally: VITE_CAL_LINK=talavishiraaj-groups/30min is in a
gitignored .env and compiled into the bundle, so /book renders the real calendar
instead of the fallback. Production values are set in Vercel by the owner.

## Session 5 — 2026-10-05 (BUILD VS BUY RESOURCE)

Added one focused build-vs-buy worksheet at `/build-vs-buy` under the existing
domain. It compares only visitor-entered one-time and yearly costs over 1, 3, or
5 years. It reports the lower entered cost, does not present that as a business
recommendation, and sends no entered values to analytics or the server.

Linked the worksheet from the homepage and Prism page. The Prism page now closes
through the shared contact hub, matching the latest funnel decision. Added the
guide route to prerendering, sitemap input, and the content checker's route list.
Updated this README to point to the latest strategy.

The Cal webhook now reads the raw request stream for signature validation,
disables Vercel's JSON body parser for that endpoint, requires TLS 1.2 or later,
and returns a generic processing error to the caller.

The distribution strategy is in `11-microsite-strategy.md`. It treats this as
one testable resource, keeps expansion behind qualified and paid signals, and
lists the remaining owner-only inputs. No analytics provider has been configured
or production outcome claimed in this session. No build or check was run.

### Session 4 addendum 4: one CTA per page

Owner: where "Start a conversation" already exists, use that and point it at the
contact page; do not put two buttons on every page.

Removed the duplicate "Book a call or send a message" button that had been added
beside the existing CTA on the capability pages, partnerships, insights and
resources. Removed CtaBand from About and the Services hub, which already close
with their own CTA. CtaBand now only appears on pages that had no closing CTA at
all: case studies (hub and details), insights hub, resources hub, products.

Audited in the built HTML: every page now carries exactly one closing CTA and all of
them resolve to /contact. The landing page keeps a hero CTA plus a closing CTA,
which is normal for a home page, and /contact itself shows the two choice cards by
design.

Landing hero second button relabelled from "Talk to our team" to "Book a call".

**Cal.com branding: cannot be removed on the free plan.** Cal.com's pricing page
lists "Remove Cal.com branding" as a Teams feature ($12/user/month). The embed is a
cross-origin iframe so it cannot be stripped from our side. Recommendation recorded
in BOOKING_SETUP.md: leave it until there is traffic worth protecting.

### Session 4 addendum 5: the booking embed was broken, and the logo overlay was tested and rejected

Two findings, the first far more important than the second.

**1. The calendar was not loading at all.** The iframe src carried `?embed=true`,
which expects Cal.com's own embed script to be present. On a bare iframe it renders
a completely blank white box: the frame loads, no console error, no network error,
nothing appears. Cal.com sends no X-Frame-Options or CSP, so framing itself is fine.
Fixed by dropping the parameter and framing the plain booking URL. Verified: the
calendar, slots, timezone and the full confirm step now render.

**2. Clipping the Cal.com wordmark breaks bookings. Do not reinstate it.**
The owner asked for an overlay or clip to hide the wordmark. It was built and tested
rather than argued about. On a 375px viewport the calendar step is taller than the
confirm step, so a fixed 170px trim that hid the wordmark on the calendar step put
the **Confirm button inside the hidden band at the confirm step**, where it cannot be
reached or scrolled to. The page looks completely normal and bookings simply stop at
the last step.

Cal.com's content height varies by step and by breakpoint, so no fixed trim is safe.
`CLIP_PX` is now 0 with the reasoning recorded in the component, and the frame is
760px so the confirm step fits.

The wordmark can only be removed properly on the Teams plan ($12/user/month), toggle
at Settings > Appearance. See BOOKING_SETUP.md. The free alternative that gets most
of the benefit is to stop embedding and link out to cal.com, where the mark is on
their page rather than ours.

### Session 4 addendum 6: embed height made responsive

Reviewed the whole /book page at both breakpoints in the browser rather than trusting
one number.

Problem: a single 760px frame is tall enough for the stacked mobile layout but leaves
a large empty band on desktop, where Cal.com lays the booker out side by side and the
card only needs about 500px. The page looked unfinished.

Fix: `h-[760px] md:h-[560px]`. Confirmed Tailwind emits both arbitrary utilities into
the built CSS, since the classes are only referenced from a JS string.

Verified in the browser:
- Desktop 1280x900: card fills the frame, left panel, calendar and slot list all
  visible, no dead space.
- Mobile 375x812: calendar renders, and the confirm step shows name, email, notes,
  add guests, terms line and both the Back and Confirm buttons.

### Session 4 addendum 7: duplicate CTA on case studies removed

Owner spotted two stacked calls to action on the case studies pages: the page's own
"Working through something similar? / Describe your situation" block, immediately
followed by the generic CtaBand.

My earlier audit missed this because the regex only looked for a fixed list of
button labels and "Describe your situation" and "Discuss a similar problem" were not
in it. Replaced with a proper audit that extracts every anchor pointing at /contact
in the body, with its visible label, and flags any page carrying more than one.

Removed CtaBand from both the case studies hub and the detail component. Checked the
other two hosts rather than assuming: the Insights and Resources hubs have no CTA of
their own, so the band is doing real work there and stays.

Audit after the fix: every page carries exactly one contact CTA except two, both
deliberate and not adjacent:
- `/` has a hero CTA, the product section CTA and a closing CTA, spread down the page.
- `/products` has a hero CTA and a closing CtaBand at the end, separated by the whole
  page. Worth revisiting only if the owner wants it stripped to one.

**Lesson recorded:** audit by extracting all links to the target, not by searching for
labels I expect to find. The label list was my own assumption and it hid a real defect
through two rounds of checking.

### Session 4 final: all page checks green, inbound plan written

Built `scripts/audit-pages.mjs`, a repeatable audit of every built page against
published reading research rather than taste. Each rule cites its source in the file
header: NN/g eyetracking (130k fixations, and 1.5M fixations for the paragraph decay
figures), the Speero value proposition study, and Buscher/Cutrell/Morris CHI 2009.

Started at 10 of 34 pages clean. Finished at **34 of 34**.

Three of the early failures were my own rules being too blunt, and were fixed in the
tool rather than by changing good copy: inward-language was checked against the whole
first screen including reassurance fine print (now only the H1 and opening paragraph);
card titles in listings were being counted as calls to action; and unmatched labels
defaulted to a high commitment score. Recording this because tuning the page to satisfy
a wrong rule would have been the easy and wrong move.

Real fixes: RelatedPath added to every page template so the site stops being a set of
dead ends (31 of 33 pages previously had no in-body route to the product or the
calculator, only nav and footer); above-fold actions added to About, Partnerships and
the calculator page.

**Funnel architecture corrected, twice, after owner challenges.** The site has two
funnels that canon §8 says must not merge: unsettled decision goes calculator to Prism
to conversation, settled decision goes services to conversation. Consequences:
- Services pages frame Prism as a filter for the undecided, never a gate on buying.
- Case studies link to the decision, not the calculator. Half of them have nothing to
  do with build versus buy, so a calculator link there was a non sequitur.
- `/products` does not link out to services at all, which vendor neutrality requires.
- The calculator was removed from the product page entirely. It is top of funnel; its
  job is to bring people to Prism, so linking back from Prism sent engaged readers the
  wrong way, and it implied the arithmetic is the product when the argument for Prism
  is that cost alone does not settle a cross functional call.
- The calculator was then also removed from the **home hero**: that headline is about
  the firm, so a tool about one narrow decision is a non sequitur there and it dragged
  a Prism-funnel asset into the company-level hero. Replaced with "See our work",
  which is what a stranger actually wants from an unknown firm.

Final gates: `npm run build` 35 routes prerendered, 32 in sitemap. `npm run check`
passed, 45 files, no violations. `node scripts/audit-pages.mjs` 34 of 34 clean.

New file `11-inbound-launch-plan.md` holds the registration list and the 30 day
sequence. Nothing pushed, deployed or submitted.

### Session 4 final 2: the calculator was replaced with a framework

Owner challenged the calculator three times. They were right and the problem was
worse than placement.

**Why the calculator was wrong.** It asked the visitor to enter their build cost.
That is the one number they do not have, and not having it is why the decision is
open. Anyone able to estimate it accurately has already done the hard part. The tool
took the answer as its input. Separately, a cost comparison asserts the decision is
arithmetic, which contradicts the product: canon says the analysis feeds the judgement
and is not the product, and the value sits at the seams between functions. A
calculator is a tool for working out whether you *can*. The positioning is explicitly
about whether you *should*.

**The search evidence agreed.** `build vs buy framework` completes to mckinsey,
mckinsey pdf, decision framework, analysis framework and ai build vs buy framework.
`decision matrix` and `criteria` are live. `build vs buy calculator` sits beside
`house calculator` and `cost of building a pc vs buying`, which is consumer noise.
Framework beats calculator on search fit and on product fit at the same time.

**What replaced it.** A six question build / buy / **partner** framework at the same
URL. The questions are differentiation, how close an existing product gets, how many
functions the decision touches, reversibility, who maintains it in year two, and who
is advising you and what they earn from the answer. The last three map to canon's
Prism-worthy conditions, so the tool qualifies on the axes that actually matter.

It gives a leaning rather than a verdict, refuses to call it when the gap is under two
points, names what six questions cannot know, and includes the partner option that
most comparisons omit and that kept recurring in the demand data. Nothing leaves the
browser.

Also fixed a real bug in the audit tool found by this change: the first screen was cut
at a raw 4000 character count, which truncated mid element and silently dropped a hero
link whose closing tag fell past the boundary. Now cuts at the second H2, then the end
of the opening section, then a character count.

Final gates: build 35 routes, 32 in sitemap. check passed, 45 files, no violations.
audit 34 of 34 clean. Nothing pushed.

### Session 4 close: end to end verification and the launch runbook

Full sweep from the beginning, not just a re-run of the gates.

Found and fixed two real defects that the automated checks could not see:

1. **"Prism Diagnostic" was still the product name on five indexed legal pages**
   (privacy, terms, refund, delivery, data handling). Canon bans "diagnostic" as the
   Prism label and the product page had moved to decision language, so the site
   contradicted itself in public. The checker missed it because legal pages are
   prose-exempt. Renamed to "Prism" and "Decision engagements". Only the product
   label changed: no obligation, scope or term was altered. Generic uses such as
   "diagnostic data" in privacy categories were left alone deliberately, since
   rewriting contract language for vocabulary consistency is the wrong trade.

2. **The content did not use the vocabulary that actually ranks.** Checked the site
   against the terms the ranking build vs buy pages use. Eleven of thirteen were
   absent, including the head term: **"build vs buy" did not appear in the body of
   /build-vs-buy at all**, only in the title and H1. Also missing: total cost of
   ownership, decision framework, commodity, time to market, vendor lock in,
   opportunity cost, hybrid, off the shelf, in house, integration.

   Two of those were gaps in the framework itself rather than in the wording. A build
   vs buy tool that ignores how fast you need it, and what happens if the vendor
   changes terms, is incomplete. Added a seventh question on time to market, and
   vendor lock in to the fit question. The rest were worked into the existing copy
   where they belonged. All thirteen now present, and the tool is better for it
   rather than merely keyword-matched.

Also verified: 0 broken internal links across 34 pages, no duplicate titles, correct
canonicals, 0 em dashes, 0 price leaks, /systems absent from the sitemap and
redirecting, /book /community /404 correctly noindex.

Interaction tested in the browser: seven questions render, the submit button stays
disabled until all seven are answered, and the logic branches correctly (first options
return "lean towards building", last options return "lean towards buying", and the
weighty block renders).

Final gates: build 35 routes / 32 in sitemap. check passed, 45 files. audit 34 of 34.

`LAUNCH.md` written at the repo root: the ordered runbook from push to first inbound.
Nothing pushed, deployed or submitted.

### Vercel Web Analytics installed

`npm i @vercel/analytics`, `<Analytics />` rendered in `src/App.jsx`. Build is
unaffected: the component is SSR safe, so the prerender still produces 35 routes.

One decision worth recording. Vercel counts page views natively, including client
side route changes. The adapter was also sending its own `page_view` custom event,
which would have double counted every navigation and spent the custom event
allowance on something already measured for free. `usePageViews` now stands down
when `window.va` exists, and still fires explicitly for providers that do not track
automatically.

Verified in the browser rather than assumed:
- the script injects from `/_vercel/insights/script.js` and `window.va` becomes a
  function
- a hero click produced `cta_click` with `location: home_hero, target: case_studies`
- a client side navigation to /products produced **no** custom events, confirming the
  page view suppression works

This is now the only third party request the site makes. Everything else, fonts
included, is first party. The script is cookieless and collects no personal data, so
it does not create a consent obligation, but the trade is recorded in the code
comment and in LAUNCH.md because it is a change to the site's privacy posture.

LAUNCH.md step 2 rewritten from "turn analytics on" to "confirm it is reporting",
with the custom event vocabulary listed. `12-inbound-launch-plan.md` updated to match.

Gates after the change: build 35 routes / 32 in sitemap, check passed 45 files,
audit 34 of 34.

### The 27-course marketing library, read and extracted

73GB, 1,307 files, 577 videos. Extracted ~1.4M characters from the relevant modules
into `13-course-library-extraction.md`.

Extraction notes: only 31 of 579 subtitle files are English, the rest are translations.
The 41 HTML transcripts are the real source. Website Building, Email Marketing, Content
Marketing Machine, Manual Market Research and THEORY are video only and could not be
read. Website Building is the one worth watching manually.

Honest verdict recorded in the file: the library is beginner to intermediate and mostly
repeats the 21-book library at lower rigour. Sales Psychology covers four persuasion
principles; Weinschenk covers eight with the research behind them. Copywriting teaches
AIDA; StoryBrand and Maslen are sharper. Content Marketing is a weaker Big 5.

Four things are additive:
1. **The 3 Boxes.** Move a buyer from "yes or no" to "which one". Prism is a single
   offer, so every visitor currently faces a binary. Cannot be applied as price tiers
   (canon fixes one scope and one price, and no price appears on the site), but the
   framework already outputs three directions, and the result screen could present
   three real paths rather than one call to action.
2. **The LinkedIn profile template.** Concrete structure for the primary channel. Its
   "certifications/patents" slot is already fillable and unused. Its testimonials slot
   is blocked, which independently confirms the same bottleneck.
3. **Long-tail keyword principle.** Adds no data but confirms the approach in 02 and 10.
4. **The GA4 module**, 296k chars, the largest extracted. Directly relevant because
   Vercel Hobby does not support custom events at all, so every instrumented event is
   currently discarded. GA4 is free with unlimited custom events and there is a full
   course on it here. Deferred at the owner's instruction; recorded so it is not lost.

Deliberately not extracted: Google Ads, all Facebook/Instagram/YouTube/Pinterest/Quora/
Twitter modules, Influencer Marketing, Freelance. Paid and consumer social are ruled
out in 05 and 12 on evidence.

Nothing here changes the direction in 06 or 12.

### Queue task 3: Search Console baseline recorded

`14-search-console-baseline.md`. First first-party search data in the project.
Window 5 Aug to 9 Oct 2026: **26 clicks, 224 impressions, 12 queries.**

The headline: **95% of impressions and 100% of clicks are branded. Zero non-branded
clicks in nine weeks.** `01` and `06` inferred the site had no non-branded surface
area from the page inventory. Google has now measured it. The strategy does not
change; its evidence base does.

Largest anomaly, and the first thing to investigate: **"talavishiraaj groups company"
returned 164 impressions and zero clicks**, while "talavishiraaj groups" converts at
60% (26 clicks on 43 impressions). Three hypotheses recorded: low average position,
a LinkedIn or directory profile outranking the site for its own brand, or non-human
impressions. **Cannot be settled without the average position column**, which the
export provided did not include.

Four non-branded impressions are worth more than their volume. `ai production
readiness audit what happens in two weeks?` maps to both the resource page and the
two week engagement window, and is exactly the shape of query the content strategy
targets. `founder-led services firms` shows the positioning language landing.
`dpa vs nda` is accidental coverage from the legal pages. The two boolean queries are
recruiters using search operators, not demand.

Important framing: this window **predates** the build vs buy framework, the Prism
repositioning and the data engineering article. It measures the site as brand-only,
which is what makes it a clean reference point.

Gaps flagged for the owner to export next: average position, the Pages tab, countries
and devices, plus how many of the 40 crawled pages are actually indexed against the 33
in the sitemap. The tool's claim of 538 backlinks is UNVERIFIED and not from Search
Console.

Re-measure 9 Nov and 9 Dec. The only metric that matters is non-branded clicks, which
is currently zero. No movement should be expected before late November.

### Queue task 4: AI integration explainer published

`/insights/what-ai-integration-costs`. Unlike the data engineering task, this
recommendation targeted a term with real buyer intent and I said so rather than
pushing back reflexively.

Intent test: career intent exists (specialist, jobs, salary, certification) but does
not dominate. Four buyer clusters are live: `ai integration services` + geo
(enterprises, usa, india, bangalore), `ai integration for` + segment (small business,
d2c), `how to integrate ai into business` (problem aware, pre vendor), `ai integration
cost` and `ai integration challenges`. The article targets all four at once.

Angle: what it costs and why quotes come in low. Uses three already sourced figures
from benchmarks.js rather than new claims: AI 24 month TCO at 1.6 to 2.2 times build
cost, integration work at 35 to 50 percent of development cost and the most frequent
overrun source, and annual maintenance at 15 to 25 percent. Expressed as ratios rather
than currency, so no price appears and the content check stays clean.

Includes a section on when a smaller business should not integrate at all, and closes
on who is answering the question: the party explaining whether you should integrate AI
is frequently the party paid to build it.

Verified: title 48 chars, description 149, 1,187 words, 9 h2 sections, Article schema,
0 currency, 0 em dashes, in sitemap (34 URLs), links onward to /build-vs-buy and
/contact?intent=ai. check passed, audit 36 of 36.

/insights now holds four articles, up from two when the recommendation was written.

### Queue task 5: "Install web analytics on all 40 URLs" — false positive, verified, no change made

The premise was "HTML analysis reports an empty analytics list and scripts_total 1".
That observation is accurate and the conclusion drawn from it is wrong.

`@vercel/analytics` injects its script **client side after hydration**. A crawler
reading the served HTML sees four JSON-LD blocks and one module bundle, and no
analytics tag, because at that moment there genuinely is none. The analytics code is
inside the bundle.

Verified on the live site rather than asserted:
- the script injects at runtime from `/_vercel/insights/script.js`
- `window.va` resolves to a function
- a client side navigation to /services fired a real beacon to `/_vercel/insights/view`
  carrying the correct URL, sdk name `@vercel/analytics/react` and version 2.0.1
- zero console errors

Decisive independent proof: Vercel Analytics recorded **38 visitors and 91 page views**
in the last seven days. A system reporting real traffic is installed.

Route coverage is structural. `<Analytics />` sits inside App, which wraps every
`<Route>`, so it applies to all routes by construction rather than being added page by
page. There is no per-page work to do and no per-page risk of missing one.

**Declined to add a second analytics script.** It would double count page views, add a
second third party request to a site that currently makes exactly one, and in the case
of GA4 create a consent obligation the current cookieless setup does not have. It would
fix a detection artefact, not a measurement gap.

One genuine limitation recorded while checking: because the script loads after
hydration, a visitor who leaves before JS executes is never counted. That is true of
all client side analytics and is not worth a second vendor to solve.

Separately noted: the live bundle is still `index-DaolzuXq.js`, which means the site
has **not been redeployed** since the booking form, the title fix and both new
articles. Those are all sitting undeployed.

### Queue task 6: problem to capability block moved under the hero

Most of this recommendation was already satisfied. The headline it asked for,
"Some problems need more than one kind of engineer", was already the H1 word for
word; the supporting line was already the hero sub line; all six capability links
were already in the body, twice each. The tool's own note admitted it lacked
evidence for the task.

The one real difference was placement: it wanted the six links directly under the
hero and above the first scroll on mobile. Implemented, but reframed rather than
copied, because six bare links in the first screen is a six way sort performed by
someone who does not yet know what they need. That is the choice load measured on
this page in `09` (26 sub items, the most of any competitor benchmarked).

What shipped: the existing problems section moved from position five to directly
under the hero, with the heading changed from "The problems organizations bring to
us" to **"Does one of these sound like you?"**, and a threshold line added
underneath: if more than one is true at once, that is usually why the work stalled.
Recognition rather than a menu. All six capability links kept, so the routes to the
service pages are unchanged.

Order now: hero, recognition, product, who we are, capabilities. Recognition before
the offer, which is the right sequence and was not the case before.

**A real defect the task surfaced:** the six capability links were 20px tall on
mobile, which fails WCAG 2.5.8 (24px minimum) and is poor under Fitts's law. Raised
to 44px. Verified at 375x812: all six now 44px, no horizontal page scroll, rail
scrolls correctly, six cards present.

Step 4 as literally written is not met and deliberately so. The block sits 1,211px
down on a 812px viewport, about 1.5 screenfuls. Getting it above the first scroll
would mean gutting the hero. NN/g's data puts 74 percent of viewing time in the first
two screenfuls, so this is inside the window that matters, and the trade is not worth
it. Recorded rather than quietly ignored.

Gates: build 37 routes / 34 in sitemap, check passed, audit 36 of 36.

### Queue task 9: caching policy

Audited the live headers before changing anything. Step 4 of the recommendation, long
immutable caching for static assets, was **already done**: /assets/* and /fonts/* were
already returning `max-age=31536000, immutable`.

**The tool missed a real gap it did not mention.** Root level images are covered by
neither rule. `/logo.png` was returning `public, max-age=0, must-revalidate`, so it
revalidated on every request. Same for og-image.png and the favicon.

Those files are **not fingerprinted**, unlike the Vite assets, so the recommendation's
"cache everything static for a year" would have been wrong for them: a logo change
would leave returning visitors on the old file for a year. Set instead to
`max-age=86400, stale-while-revalidate=604800`. One day fresh, then served stale while
revalidated in the background for a week.

HTML changed from `max-age=0, must-revalidate` to `max-age=60, must-revalidate` as
specified. Honest assessment of the value: small. Server response was already 12ms and
the previous header still produced cheap 304s via ETag. It removes one conditional
request per returning visitor per minute. Low risk, so taken.

**The risky part, and why CACHING.md now exists.** Vercel applies every matching header
rule and the last matching rule wins for a duplicate key. Adding Cache-Control to the
`/(.*)` catch-all meant reordering it to sit **first**, so the specific `/assets/` and
`/fonts/` rules still override it. If anyone later moves the catch-all below them,
every hashed asset silently drops from a year to 60 seconds. Nothing breaks, the site
just gets slower. That ordering constraint is documented with the failure mode spelled
out.

Header rules only apply on Vercel, so none of this is verifiable locally. Verification
commands and expected values are in CACHING.md and must be run after the next deploy.

Steps 6 and 8, CDN purge and PageSpeed verification, are post deploy and belong to the
owner.

---

## 2026-10-15 — REVALIN queue: "Shorten the titles on case studies", plus differentiation

### What the recommendation got right, and what it undercounted

[FACT] REVALIN reported "9 case study pages with 'title_too_long' issues". A measurement
of the 37 built pages found **17 titles over 60 characters**, of which 7 were case study
pages (the index plus all 6 entries). So the problem was real and about twice the
reported size. The other 10 were service, product, insight and utility pages.

[FACT] The worst was `/services` at **91 characters**:
`Capabilities: Software, AI, Product Engineering and Business Systems | Talavishiraaj Groups`.
Case study detail pages ran 76 to 83.

### The structural cause, which the recommendation did not name

[FACT] Case study detail titles were composed as `${study.title} | Talavishiraaj Groups
Case Study`. The suffix alone is 34 characters, so **no entry could ever fit** regardless
of how its title was written. The h1 was doing double duty as the `<title>`.

[INFER] This is the part worth recording, because "edit each title to be under 60" would
not have fixed it. The fix is that the SERP title and the on page h1 are different fields
with different constraints: an h1 has no pixel budget, a title has about 580px. Each
case study now carries an explicit `metaTitle`, and `study.title` stays long.

### What was changed

All 17 titles rewritten. **Every one keeps the full brand token** `| Talavishiraaj Groups`
rather than dropping it to buy characters. Reasoning: at zero non branded clicks in 9
weeks (see `14-search-console-baseline.md`), brand recall is the thing least affordable
to truncate. Google was cutting "Groups" off six case study pages.

[FACT] Result: **37 pages, 0 over 60**. Range 41 to 59. `check-content.mjs` and
`audit-pages.mjs` both pass, the latter 36/36.

One correction made during the work: the first draft retitled the AI prototype article
`Why AI Prototypes Fail in Production`. The article is about prototypes stalling
*before* production. Changed to `Why AI Prototypes Stall`, which loses the "production"
keyword from the title but keeps it in the h1, description and slug. Accuracy over the
keyword.

### Differentiation, which was not in the REVALIN item

[OBS] Neither `/services` nor `/case-studies` answered why this firm rather than another.
`/services` listed six capabilities that any competent firm in the category also lists,
then went straight to a call to action. A capability list is not a differentiator.

New `src/components/Differentiator.jsx`, two instances sitewide. Deliberately not on
every child page: 13 copies of the same three points would be boilerplate, which readers
skip and crawlers discount.

Constraint applied, per Dunford: differentiation only means something against a **named**
alternative. Each point states what the usual alternative does, then what we do instead.

Second constraint, and the harder one: with no client references, logos or testimonials
available yet, nothing could be asserted. **Every point maps to something already on the
site that a reader can go and verify.**

`/services`: (1) we will tell you not to build it, mapping to the "Establish whether it
is worth building" and "Report what the evidence supports" approach entries; (2) we build
what we recommend, mapping to the strategy FAQ; (3) the engagement is designed to end,
mapping to "Hand it over properly" and "Plan the exit at the start".

`/case-studies`: (1) no logos and no numbers we cannot stand behind, mapping to the
existing disclosure; (2) each entry names the constraint not the output, mapping to the
`whyItMattered` field; (3) the implementation choice is published, mapping to the
`implementation` field, which most published case studies omit entirely.

### A regression caught by the audit

Placing the case studies differentiator **above** the card grid, which was the first
instinct since it explains the absence of logos before a reader meets it, pushed every
link on the page below the fold. `audit-pages.mjs` failed it on "no call to action above
the fold". Moved below the grid. The hero disclosure line already sets the anonymization
expectation, so by the time a reader reaches the block the live question is "so why you",
which is what the three points answer. Same position as on the services hub.

[FACT] No new routes. Sitemap unchanged at 34 indexable of 37 prerendered, so nothing new
to submit.

### Still open from this item

Nine page descriptions are flagged as "may truncate" by the audit, worst 227 characters
on `/services/technology-and-engineering`. Notes rather than failures, and a separate
piece of work from titles. Not touched here.

---

## 2026-10-25 — Optise audit (score 42), acted on

Full analysis in `15-optise-audit.md`. Summary of what was done and what was
deliberately not done.

**Acted on.** The conversions funnel finding was the real one and it measured
worse than reported: 56 button actions across 36 pages carrying four different
labels for one destination, 8 of them generic. One case was genuinely competing
rather than just inconsistent, on all six case study detail pages, where a
generic "View our capabilities" sat beside the conversion button and pointed at
the services hub while the capability pills one scroll above already linked to
the two specific capabilities. Removed rather than relabelled.

`src/components/cta.js` now holds the single conversion label so the drift
cannot recur. Generic labels 8 to 0. Zero adjacent filled buttons sitewide.

Images resized: page loaded payload roughly 75KB to 25KB.

**Checked and deliberately not changed.** Four pages carry two filled buttons,
and on inspection all four are a hero anchor plus a closing conversion in
separate sections that are never co-visible. That is correct funnel sequencing.
Downgrading those heroes to satisfy a count would have made the pages weaker
for the sake of a metric.

**Found but not fixed, with reasoning.** The real mobile weight is a 467KB raw
/ 129KB gzip single JS chunk carrying the prose of all 37 pages, so every
visitor downloads every page's content twice: once as prerendered HTML, once as
hydration JavaScript. Optise named images, which are six times smaller. Fixing
it means route splitting, which means diverging the server and client trees
because `entry-server.jsx` renders the same `App.jsx` through `renderToString`
and that cannot handle `React.lazy`. On a live site taking inbound, a silent
hydration mismatch is worse than the weight. The safe approach is recorded in
`15-optise-audit.md` section 1b for a later, deliberate pass.

**The valuable part was not the score.** Optise named six competitors; all six
were fetched and all six are real, unlike 3 of the 13 in the earlier list.
Five of six lead with named client logos including Siemens, Medtronic, BAE
Systems, Dyson and Meta, and four carry ISO or silicon partner credentials.

Two findings follow from that, both recorded in `15-optise-audit.md` section 3.
First, Optise classified this company into embedded and hardware product
engineering rather than software consultancy, which is a fair read of the
`/services/product-engineering-and-rd` page, and it is a category this site
cannot currently win on proof. Second, and more useful: not one of the six sells
an opinion on whether to build at all. They are all paid to build. That is the
gap Prism occupies, and it is independent corroboration of the `/services`
differentiator written on 15 October rather than an assertion about it.

**Unchanged and still owner blocked.** Named operator with a provable track
record, three client references. That is what the trust signals finding
actually asks for and no part of it can be written in code.

Visibility 3 and Discovery 21 are not code problems and nothing here moves
them. They agree with `14-search-console-baseline.md`.

---

## 2026-10-25 (second pass) — Optise suggestion 02, and the text density problem

### The cost page, and the constraint it had to respect

Optise listed "missing dedicated pricing page and comparison page" as critical.
The standing rule is that our own numbers do not go on the public site, so the
obvious reading of that recommendation is the one thing the page must not be.

Resolved by answering a different question. A visitor searching for cost is not
asking what we charge, they are asking whether they can afford this kind of work
and whether they are about to be overcharged. Both are answerable from published
market data. `/what-it-costs` says in its opening paragraph that there is no rate
card on it, because naming the omission is more credible than quietly not having
one, and then spends the page on evidence.

**[FACT] Verified against the built output: the only currency amounts anywhere
in the site are the published market figures, and the known internal price
points appear nowhere.** Every figure on the page is interpolated from
`benchmarks.js`, which is the single file permitted to carry a currency amount
and the one that forces each number to name a source. Writing the numbers into
the page directly would have passed review and quietly removed that guarantee.

[FACT] Demand checked before building, by the autocomplete method used in
`02-demand-evidence.md`: "custom software development cost" returns multiple
live variants including 2026 and geographic ones, and "how much does custom
software development cost" exists in question form, which is what an assistant
answers. The site had no page for either.

### The comparison page

[FACT] "in house vs outsourcing" and "in house vs agency" both return in
autocomplete. `/in-house-vs-agency` compares four routes across seven criteria.

[INFER] The design decision worth recording: **three of the seven rows go to
routes other than ours, on purpose.** A comparison table where one column wins
everything is read as marketing and discarded, and in this case it would also be
false. Your own team genuinely wins on cost, ownership and knowledge of the
business. The single row we win outright is the incentive to say no, which is
the whitespace established in `15-optise-audit.md` section 3b: all six verified
competitors are paid to build.

No competitor is named. Naming them invites a comparison on proof, which is the
axis where five of the six carry client logos we cannot match yet.

### Text density, measured

[FACT] The site before this pass: **25,553 words across 36 pages, two images in
the whole of `<main>`, and one table.** Both images were the leadership
portraits on `/about`. Every numeric argument on the site was carried by prose.

Three figures now exist, plus the comparison table. They are the site's first.

### A mistake worth recording, because it would have shipped

The figures were built first in SVG, which is the obvious choice and was wrong.
**An SVG with a fixed viewBox scales its text along with its geometry.** These
are 700 units wide; inside a 375px viewport the rendered width is 293px, a scale
factor of 0.42.

[FACT] Measured in the browser: a 15 unit label rendered at **6.3 real pixels**,
a 12 unit axis tick at **5**. Every number on every chart was illegible on a
phone, which is the exact device Optise had already scored as a losing area. The
charts looked correct in every desktop screenshot.

Rebuilt in HTML and CSS. Bars are rectangles and CSS draws rectangles natively,
so the labels stay ordinary text at ordinary sizes, legible at any width and
indexable without special handling. [FACT] Re-verified at 375px: legible, no
horizontal page overflow, and the comparison table scrolls inside its own region
rather than dragging the page sideways.

The general lesson: a chart that is only ever checked on a desktop screenshot
has not been checked.

### Storytelling, and the dead end on `/products`

The observation that every element "ends there" was correct and most costly on
the product page. Its order ran hero, what Prism is, does this sound like you,
then what you get. **It moved from recognition straight to remedy with nothing
in between establishing that there was anything worth remedying.** Recognition
on its own produces a nod, not a decision.

A stakes section now sits between them, carrying the discovery overrun figure.
The stakes are not asserted by us, which would be worthless; the published data
is the argument. It also gives the page a route onward into the cost evidence
instead of stopping where it stood.

### Still outstanding

[OBS] This pass added figures to three pages. The other 33 remain prose only,
and the insight articles at roughly 1,200 words each are the next candidates.
That is a larger pass and was not attempted here.

[FACT] The bundle finding from the first pass of 25 October is unchanged and
still the largest mobile cost. Two new pages were added to it.

---

## 2026-10-25 (third pass) — the visibility detail, and what it actually says

Optise ran 12 Google queries and 12 assistant questions. Result: **1 of 12 on
Google, 2 of 12 in AI answers.** Every hit was a brand query.

### The finding that matters is not the score

[FACT] Mapping the 11 Google misses against what is already published:

| query | matching page | gap |
|---|---|---|
| prism ai readiness assessment tool | `/products` | vocabulary |
| ai and systems engineering consulting firm reviews | none | needs third party profiles |
| custom hardware and software integration services | `/services/product-engineering-and-rd` | authority |
| production grade ai implementation services | `/services/artificial-intelligence-and-automation` | authority |
| enterprise internal platform development agency | `/services/technology-and-engineering` | authority |
| how to transition ai model from notebook to production | `/insights/why-ai-prototypes-stall-before-production` | authority |
| internal systems fragmented across departments | `/services/business-and-operating-systems` | authority |
| custom software project stalled between multiple vendors | home page h1 | authority |
| build vs buy enterprise ai platform assessment | `/build-vs-buy`, `/products` | authority |
| best embedded systems companies for startups | none | listicle intent, cannot be owned on site |
| ai workflow automation consulting for b2b operations | `/insights/when-workflow-automation...` | authority |

**[INFER] Nine of the eleven misses already have a page that answers the query.
This is not a content gap.** One of them, notebook to production, is the exact
subject of a published article.

[FACT] Vocabulary was checked as a possible cause and largely cleared it:
"vendor" appears on 13 built pages, "production" on 19, "integration" on 20,
"notebook" on 7. Only "fragmented" is absent from the entire site.

[FACT] The brand query ranks **#1**, so the domain is indexed and ranks
normally when nothing competes.

[INFER] So the constraint is domain authority and age, not on page work. The
site is nine weeks old with no external links. The six verified competitors in
`15-optise-audit.md` are established domains carrying named client logos, ISO
certification and years of accumulated links. No amount of further page writing
closes that, and the marginal return on more pages is now close to zero.

**[INFER] What moves this is the directory and citation work already set out in
`12-inbound-launch-plan.md`, and time indexed. Both of the highest value
directories are gated on the owner supplied items: client references and a
physical address.**

### What was done on page, because it was cheap and genuinely missing

[FACT] All four insight articles had `Article` schema and no `FAQPage`, despite
**25 of 25 section headings across them already being questions** with the
answer directly underneath. Now exposed as FAQPage: 4 blocks, 25 pairs, all
parsing cleanly.

Note on what that buys. Google restricted FAQ rich results in 2023 to
government and health sites, so it will not produce a snippet. It is for the
assistants, which is the channel measured at 2 of 12.

[FACT] `llms.txt` added, generated from the render pass. Previously absent,
which was the stated cause of the AI engines and agentic browsing scores.

### Deliberately not done

[INFER] The query "prism ai readiness assessment tool" suggests Prism could be
renamed toward "AI readiness assessment", which has clearer search intent.
**Not acted on.** Prism's positioning is governed by canon and by the owner's
explicit instructions on its language, and one audit query is not sufficient
evidence to reopen it. Recorded here as an observation only.

No pages were written to chase the two queries with no matching content. One
needs third party review profiles and the other is listicle intent that a
vendor site cannot own.

---

## 2026-10-25 (fourth pass) — the "goal completion" SEO method, applied and bounded

Source: a video arguing three on page fixes, prioritised from Search Console.

### What the method says, and which parts apply here

1. **First paragraph answers the query immediately.** Applies, and found real
   problems. Done.
2. **Title tag and H1 aligned to the target keyword.** Applies. Two H1s carried
   no keyword at all. Done.
3. **Match the format of what already ranks.** Applies. Done for the strongest
   target query, by reading the live SERP rather than guessing.
4. **Prioritise with Search Console: find queries at position 6 to 15 and lift
   them.** **[FACT] Does not apply yet.** The method needs existing rankings to
   work on. `14-search-console-baseline.md` records zero non branded clicks in
   nine weeks and Optise measured 1 of 12 on Google. There are no position 6 to
   15 queries to find. This step becomes usable once anything ranks at all.

[INFER] The video's headline claim, 10x traffic in 30 minutes with no
backlinks, does not transfer to this site, and the video itself concedes why at
15:03: "you might need more authority." That is the same conclusion reached
independently in the previous pass. On page work is necessary and is now done
to a good standard; it is not sufficient on a nine week old domain with no
external links.

### Goal completion: measured, and nine pages failed

[FACT] Extracted the H1 and first paragraph of every page. Nine opened with
context, an aphorism or a refusal rather than the answer:

- All six capability pages opened with the situation that makes the work
  necessary rather than what we do. "Most organizations do not have a software
  problem in the abstract" is true and is a bad first paragraph.
- `/what-it-costs` asked what the work costs in its H1 and opened with "there
  is no rate card on this page". **Written the previous day, by me.** The
  figures were four screens down.
- `/in-house-vs-agency` opened on what most comparisons skip rather than the
  recommendation.
- `/case-studies` opened on how engagements begin rather than what the page is.

[FACT] The capability page fix needed **no new copy**. Each category already
had a `summary` field, one direct sentence, written for the hub and never shown
on the detail page at all. It now leads and the intro follows. That is the
video's actual point working as advertised: the win was in fixing what was
already there.

### Title and H1 alignment

[FACT] `/services` had title "AI, Software and Systems Services" against h1
"What we build and run". `/case-studies` had "AI and Operations Case Studies"
against "What the work looks like when it is finished". Both h1s named nothing
anyone searches. Both now front load the subject and **keep the original line**
rather than replacing it.

### Search intent, read from the live SERP

[FACT] Fetched page one for "custom software development cost". Pattern:

- **Every result leads its snippet with a figure range.** `/what-it-costs` now
  does too.
- **Every result carries the exact phrase "software development cost".** This
  page's title said "What Custom Software Costs", dropping "development", the
  highest volume word in the phrase. Changed.
- People Also Ask is present, so question format is rewarded. FAQPage schema
  was added in the previous pass.
- [OBS] Seven of nine results carry 2026 in the title.

[INFER] The year was **not** copied. It would match the pattern and it commits
the owner to revisiting the title every January or looking stale. That trade
belongs to the owner. Recorded as an available option, not taken.

### Two bugs this pass surfaced

[FACT] `.toLowerCase()` on a whole sourced claim had shipped "ai deployments
routinely reach 1.6 to 2.2 times the build cost" to the live FAQ, lowercasing
the acronym. Replaced with a helper that lowers only the first character and
leaves acronyms alone.

[FACT] The first version of the new meta description typed the currency amounts
directly and **the content checker rejected it**. Composed from benchmarks.js
instead, via new `shortClaim` fields kept beside their sources. The guard
worked exactly as intended against its own author.

---

## 2026-10-25 (fifth pass) — the transcript end to end, including the "Home" point

Previous pass took three of the video's points. This one works it through
completely and catches what was missed.

### The "Home" point (03:12 and 04:14)

The video: title tags left as "Home" are a website builder default, tell Google
nothing, and "you will almost always rank first for search of your title tag".

[FACT] The home page title is **not** "Home", so the literal warning did not
apply. Three other places did carry it:

1. **Breadcrumb schema said `"name":"Home"` in position 1 on all 37 pages.**
   This is the structured data version of the same mistake: a default nobody
   changed, naming the most important page on the site as nothing in
   particular, and Google can render it directly into a result. Now the brand.
   Enforced inside `breadcrumbSchema` rather than at the fifteen call sites, so
   it cannot be one page's job to remember. [FACT] 0 pages still say Home.

2. **Nav and footer anchor text "Home", three links per page.** [FACT] Checked
   and left alone: the logo link already carries "Talavishiraaj Groups" as its
   anchor text, so the brand signal exists, and renaming a nav item that every
   visitor expects would cost usability for nothing.

3. [INFER] Nothing else.

### The h1 and title mismatch on the home page, which the previous pass missed

[FACT] Home page title terms were software, systems, engineering. Home page h1
terms were problems, kind, engineer. **Zero shared terms**, which is the exact
mismatch corrected on two other hubs the day before and missed on the page that
matters most.

Front loading the subject into the h1 was tried, rendered, and **rejected on
looking at it**: it pushed the headline to five lines and blunted the sharpest
line on the site. The eyebrow above the h1 now carries the terms instead. It
previously said "Talavishiraaj Groups", which the navbar says two lines above
and the title says again, so it was three statements of the brand before a
stranger learned what the company does.

### Cannibalisation (07:45 to 10:05), which the previous pass caused

The video's point: optimising one page can cost you the rank of another, so
pick a page that is not already ranking for other things.

[FACT] A term overlap check across all 36 indexable pages found **5 colliding
pairs**, the worst a three way collision on "software, systems, engineering"
between `/`, `/services` and `/services/technology-and-engineering`.

[FACT] **The previous pass caused part of it.** Front loading "Software, AI and
systems engineering" into the `/services` h1 fixed a title mismatch and walked
straight into the capability page's keyword.

Resolved by intent rather than wording. The capability page keeps the specific
discipline term. The hub leads on services and breadth. The home page leads on
the brand it already ranks first for, plus the proposition no capability page
claims, instead of a head term it cannot win from its own child page.

[FACT] 5 pairs down to 2. Both survivors are deliberate: an article asking "Do
You Need Data Engineering?" and a service page about data engineering share
vocabulary but not intent, which is the video's own black dress versus black
dress history distinction. Keeping them apart is correct.

### Word count against what ranks (11:56), measured rather than assumed

[FACT] `/what-it-costs` is 1,528 words. A page one result for the target query,
soltech.net, is roughly 1,400 to 1,500. **At parity. No words needed.**

[FACT] More useful: that ranking page's opening paragraph does **not** give a
cost figure, it cites an industry market total. After the previous pass this
page leads with the published range, so on the video's own goal completion test
it now beats a page one result.

[OBS] That page carries several images including a cost factors chart. This one
carries three information graphics. No gap.

### Still not applicable

[FACT] Step four, prioritising by Search Console position 6 to 15, remains
unusable: there are no rankings to lift. Unchanged from the previous pass.
