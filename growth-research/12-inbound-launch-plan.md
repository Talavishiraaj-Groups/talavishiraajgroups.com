# 11 — Inbound launch plan: what to register, in what order

The operational file. Everything here is actionable the week the code goes live.
Evidence lives in `02` (demand), `03` (competitors), `08` (directories),
`09` (landing page) and `10` (canon and keywords).

**Two standing constraints, both from your own canon:**
- Canon §12: *"Unnecessary (do not build yet): a content calendar, an SEO machine,
  nurture automation."* Nothing below is a content machine. It is listings,
  profiles and a small number of owned assets.
- Canon §18: the first thing to prove is *whether qualified demand can be
  surfaced at all.* Treat the first 90 days as a demand test, not a campaign.

---

## Part 1 — What the deployment automates, and what it does not

| Automated by shipping the code | Still manual, every time |
|---|---|
| `sitemap.xml` regenerates from `entry-server.jsx` routes on every build | Submitting the sitemap in Search Console |
| Canonicals, titles, descriptions, OG tags, JSON-LD per route | Verifying domain ownership in Search Console and Bing |
| `robots.txt` (open, AI crawlers allowed, `/api/` blocked) | Requesting indexing for priority URLs |
| `/systems` → `/products` 301 via `vercel.json` | Watching whether the 301 is honoured after deploy |
| Analytics events fire to whatever provider is present | **Loading a provider.** None is loaded today, so nothing is collected |
| Booking confirmations and reminders, both sides, via Cal.com | Every directory listing, every profile, every outreach |
| Internal booking copy through your own Zoho pipeline, via the webhook | The three client references that gate most of Part 3 |

> **Analytics, precisely:** `src/components/analytics.js` needs **no environment
> variable**. It is a runtime adapter that forwards to whichever provider global
> exists (`window.va`, `window.plausible`, `window.gtag`, `window.dataLayer`).
> Verified in the browser this session: with a provider present, a CTA click fired
> `prism_interest` with its location, and a route change fired `page_view` with the
> path and title. Until a provider script is loaded, every call is a silent no-op.
> The required action is **enabling Vercel Web Analytics in the dashboard**, or
> adding a Plausible or GA script. Not a variable.

---

## Part 2 — The publishing pattern, extracted from the firms you named

From McKinsey, BCG and Umbrex. Structural facts, separated from the agency
commentary around them.

**1. Own the channel.** McKinsey's decisive move was building the McKinsey
Quarterly and the Global Institute rather than competing for Harvard Business
Review slots, where the page count was fixed and the editors were a bottleneck.
Owning the platform removed the cap on how much they could publish. [FACT]
> Applied: your own site is the asset. Do not build the audience on LinkedIn
> alone. Publish on the domain, distribute from LinkedIn.

**2. A named framework becomes a citable entity.** 7-S, the Growth-Share Matrix,
Net Promoter. Named methods persist in citations and now in AI answers decades
later; unnamed approaches do not. [OBS]
> Applied: **Prism is already a named framework.** That is a real asset and it is
> currently used only as a product name. Naming the method inside it, and using the
> same words everywhere, is what makes it quotable.

**3. The annual research report is the highest-leverage format**, generating press,
speaking invitations, citations and inbound for 12 to 18 months from one asset.
[UNVERIFIED as an ROI claim — the sources making it sell content marketing. The
*structural* point, that MGI and the BCG Henderson Institute work this way, is sound.]
> Applied, honestly: **you cannot do this yet.** It needs proprietary data, and six
> anonymised case studies is not a dataset. Do not manufacture one. Revisit at ~20
> engagements. This is the twelve-month goal, not the launch move.

**4. Altitude.** Write at the level the buyer operates at, not the mechanics of the
tactic. [OBS]
> Applied: this is the same correction made to the site copy this session. Lead
> with what the decision means for someone running the business.

**5. Named bylines, not team bylines.** Consulting content is attributed to named
people with verifiable credentials. [OBS] Every competitor page that ranks in your
space is bylined (`03`).
> Applied: still blocked. Canon §6 is unresolved and the site has no named operator.

**6. Two levels that feed each other.** Firm-level assets (frameworks, research,
case library) give partner-level content (LinkedIn, bylined articles, podcasts)
something to reference; partner content drives readers back to the firm asset.

> [INFER] The version of this available to you now, at your size, is:
> **one named framework (Prism) + one citable tool (the calculator) + the founder
> publishing under his own name, referencing both.** That is the whole engine until
> there is enough delivery history to publish data.

---

## Part 3 — Where to register, in priority order

Nothing here is paid. Costs are marked where a paid tier exists, to be ignored for now.

### Tier A — Do first. Free, ungated, no product required.

| # | Platform | What it is | Notes |
|---|---|---|---|
| 1 | **Google Search Console** | Index coverage, queries, sitemap | Submit `https://www.talavishiraajgroups.com/sitemap.xml`. Without this you are blind |
| 2 | **Bing Webmaster Tools** | Same, and feeds ChatGPT search | Import from Search Console in one click |
| 3 | **Google Business Profile** | `near me` and city queries | Needs a verifiable address. Decide Bengaluru or UK first (`02` Finding 4a) |
| 4 | **DesignRush** | Agency directory | **Ranks page one** for `ai automation agency for small businesses` [FACT]. Analyst-judged, so **not blocked by the reviews gate**. Free listing only |
| 5 | **Clutch** | The authority directory | Free profile, ~3 days to publish, auto-includes **The Manifest**. Note: free tier gives **no website link** |
| 6 | **Crunchbase** | Company profile | Journalists use it constantly. Free |
| 7 | **F6S** | Startup/founder network | Free |
| 8 | **Wellfound** | **Already listed** | Just correct it and align with the site |
| 9 | **LinkedIn company page** | 143 followers today | Fix the description to match the new positioning |
| 10 | **YourStory** | India startup media, dofollow | Relevant given the Bengaluru HQ |

### Tier B — After the three client references exist

| # | Platform | Gate |
|---|---|---|
| 11 | **GoodFirms** | 4-step research verification including **2–3 client reference calls**, ~23% acceptance [FACT] |
| 12 | **Clutch Verified** ($499/yr) | Pointless before 3 reviews. Premier Verified needs 3+ reviews, one within 12 months |
| 13 | **TrustRadius / G2** | Software-oriented. Only once a system ships |

> **This is the bottleneck for the whole tier.** The same three conversations unlock
> the reviews content, the site's proof layer, Clutch ranking and GoodFirms
> acceptance. It is the highest-leverage unpaid action available.

### Tier C — Tool and product directories, once the calculator is positioned as a tool

The calculator is live at `/build-vs-buy`, is genuinely interactive (4 inputs,
2 selects) and targets a term with verified demand. That makes these eligible.

**Launch platforms (free):** BetaList · Peerlist Launchpad · Uneed · MicroLaunch ·
Fazier · TinyLaunch · PeerPush · Open Launch · Launch Vault
**SaaS directories (free, many dofollow):** AlternativeTo (list as an alternative to
competitors — captures comparison intent) · SaaSHub · SaaSWorthy · Serchen ·
SaasGenius · Crozdesk · SoftwareSuggest · Startup Stash · Hive Index
**AI directories (fastest moving, feed AI assistant answers):** There's An AI For That ·
Futurepedia · FutureTools · Toolify · TopAI.tools · Supertools · Altern.ai · Dang.ai ·
aitools.fyi · AI Tools by Neil Patel
**Dev/technical:** Hacker News "Show HN" (free, immediate, high variance — read the
norms first)

> Submit to roughly **twenty relevant** ones, not four hundred. One list says it
> plainly: *"Twenty relevant listings beat a hundred random ones."* [FACT]
> **Decline any that require a reciprocal backlink** (AITop10.tools is explicit about
> it) — that is a link exchange and a liability.

### Tier D — Earned, slower, highest value

- **Tool-vendor partner directories.** Highest intent of all, because the searcher has
  already chosen the tool. **n8n Expert Partners** is a closed pilot requiring
  automation/AI as *main revenue stream* and **3+ customers actively using n8n** [FACT].
  You meet neither; the UK presence does fit their region requirement. Join the
  community (~200,000 members, free) now and qualify later. Make, Zapier, HubSpot and
  Airtable have their own gates — unverified, worth a session of their own.
- **Fractional COO and boutique ops partnerships.** `05` #5, still the fastest route to
  revenue and it needs **no traffic at all** — roughly 30 accurate conversations. They
  sell a person on retainer; you sell a fixed-scope artefact. They need a defensible
  diagnosis to scope a retainer and cannot produce one profitably.
- **Reddit and practitioner communities.** `ai automation agency reddit`, `n8n agency
  reddit` and `ai automation for small businesses reddit` all complete [FACT] — buyers
  explicitly route around vendor sites. Answer as the founder, no links, no pitching.

### Not now, with reasons

| | Why not |
|---|---|
| **Product Hunt** | Featured rate collapsed to ~10%; top-3 base rate under 5% and reserved for products with existing distribution; 50–120 hours of prep. A verified **#1 Product of the Day finish produced 539 sessions over two days** — ~28% of one ordinary day's traffic — for a team that already had tens of thousands of users [FACT]. You have 143 followers and your buyer is not on Product Hunt. **The calculator is a lead magnet, not a standalone product.** Revisit only with an audience behind it, and point the link at the tool, never the home page |
| **Paid search (SEM)** | Bidding against funded agencies, sending clicks to a site with no published proof. Canon §12 says no. Revisit after a page is known to convert |
| **Microsites / satellite domains** | No evidence they are needed, and they split the authority a one-year-old domain has not accumulated yet. **Keep the single domain and the single generated sitemap** |
| **Paid submission services** ($99+) | You are buying what the free tier gives. Their DR-gain promises are marketing, not evidence |
| **aibusiness.ai, b2bvetted, selectedfirms, edverise, topdevelopers** | Pay-to-play. One sells "high-authority backlinks" as its headline product; another's buyer base is dentists, HVAC and roofers |

---

## Part 4 — Sequence for the first 30 days

| Week | Do | Cost |
|---|---|---|
| 1 | Push. Verify Search Console + Bing, submit the sitemap. Enable an analytics provider. Confirm the `/systems` 301 resolves. **Make one real test booking** and confirm all three emails arrive | £0 |
| 1 | Ask three clients to go on record: name, one number each | £0 |
| 2 | DesignRush, Clutch, Crunchbase, F6S, YourStory. Fix Wellfound and the LinkedIn company page | £0 |
| 2 | Founder starts publishing under his own name. Altitude, not mechanics. One piece a week | time |
| 3 | ~20 relevant tool/AI directories for the calculator | £0 |
| 3 | Open the 30 fractional-COO partnership conversations | time |
| 4 | GoodFirms application, once references are secured | £0 |
| 4 | Read Search Console: what is indexed, what is being searched. **First real keyword data** | £0 |

## Part 5 — What to measure, and what to ignore

Measure: pages findable by someone who has never heard of you (**0 before this
deploy**); named clients on record (**0 today**); calculator completions; partner
conversations held; inbound enquiries that reference a specific page.

Ignore for now: rankings, sessions, follower counts, and any conversion-rate target.
A/B testing is arithmetically impossible at this traffic (`04 §5`), so changes are
validated by the page audit, the trunk test and real buyers reading the page aloud.

## Part 6 — Honest limits on everything above

- **Keyword work is qualitative.** Autocomplete proves a query exists and what it
  means. It gives no volume and no difficulty. Everything in `02` and `10` stays a
  hypothesis until Search Console or a paid tool returns real numbers. Nothing here
  depends on a volume figure.
- **Exa finds mentions and pages. It is not a backlink index.** No claim in this file
  rests on a complete backlink picture, because one was never obtained.
- **No directory's lead volume for this niche is known.** Claim the free ones because
  they are free and they occupy SERPs you cannot rank in directly. Do not assume any
  of them produces enquiries, and measure before paying for anything.
- **Booking delivery is unproven in production.** The code is correct and fails
  closed, but `bodyParser: false` is a platform behaviour that cannot be confirmed
  without a deployed test. **Make a real booking before trusting it.**
- Canon marks the build/buy beachhead itself a hypothesis. This is a demand test.
