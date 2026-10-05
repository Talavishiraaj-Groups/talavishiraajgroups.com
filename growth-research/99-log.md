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
