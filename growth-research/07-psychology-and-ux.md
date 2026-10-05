# 07 — Web psychology and UI/UX principles, applied

`04` covered the commercial books. This file covers the design and psychology half of
the library, which is the larger half: Weinschenk, Yablonski, Krug, Norman ×3, Ash,
Walter, Dahlström. All quotations verified against the extracted text this session.

The point of this file is not to list laws. It is to establish **why the current site
fails at the pre-conscious level**, before a visitor has read a word — and to fix the
order in which design decisions get made later.

---

## Part 1 — Weinschenk, *Neuro Web Design: What Makes Them Click?*

Weinschenk (PhD psychology) organises the entire book around one thesis: **most
decisions to click are made unconsciously**, and the conscious mind rationalises
afterwards. The chapter structure *is* the framework — eight persuasion factors:
[FACT — contents, verified]

| # | Factor | Weinschenk's framing |
|---|---|---|
| 1 | **Social validation** | "Wanting to Belong" — "Why Would You Listen to Total Strangers?" |
| 2 | **Reciprocity & concession** | "Feeling Indebted" — *"Give Away Free Info"*, then *"It's Okay to Ask for the Reciprocal Action"* |
| 3 | **Scarcity** | "If Something Seems Unavailable, We Seem to Want It Even More" — incl. *"If It Costs a Lot, It Must be Good"* |
| 4 | **Choice paralysis** | "Given Too Many Choices, We Freeze (and Then We Don't Choose at All)" — incl. *"Talk to the Old Brain"*, *"First Is Best: The Order Effect"* |
| 5 | **Self-interest** | "Speaking to the Self-Centered, Unconscious Mind" — *"Danger, Sex, and Food"*, *"Don't Let Them Get Bored"* |
| 6 | **Commitment & consistency** | "We Want to Think We're Consistent" — *"One Small Step…"*, *"When Is a Survey More Than a Survey?"* |
| 7 | **Similarity, attractiveness, association** | *"Similar Is Better"*, *"Make Them Look Like Me"* |
| 8 | **Fear of loss** | "How Fear of Loss Trumps Our Anticipation of Victory" |

### Scored against the live site

| Factor | Present? | Evidence |
|---|---|---|
| Social validation | **Absent** | Zero testimonials, zero named clients, zero logos, zero review counts. Six case studies, all anonymised, no figures [FACT] |
| Reciprocity | **Absent** | Nothing is given away. No tool, template, guide, teardown or free artefact anywhere on 26 pages [FACT] |
| Scarcity | **Absent** | No cohort limit, no capacity statement, no waitlist. Also *inverted*: price is hidden, forfeiting *"if it costs a lot, it must be good"* [FACT] |
| Choice paralysis | **Actively harmful** | 6 capabilities × 6 buyer types presented as co-equal. Visitor must self-diagnose before acting [FACT] |
| Self-interest | **Weak** | Copy is "we" — *"we bring together"*, *"we execute"*, *"we are vendor neutral"*. Reader's own situation appears only in abstract [FACT] |
| Commitment | **Absent** | One door, maximal commitment: "Initiate Engagement". No "one small step" exists [FACT] |
| Similarity | **Absent** | No human face, no name, no location. Nothing for a founder to recognise himself in [FACT] |
| Fear of loss | **Absent** | No cost-of-inaction framing anywhere [FACT] |

> **Eight for eight, absent or inverted.** [INFER] This is the most damning single
> result in the whole research project. It is not a copywriting problem that a rewrite
> of headlines fixes — every pre-conscious lever Weinschenk identifies is either unused
> or working against the company. Weinschenk's point is that these operate *before* the
> visitor evaluates the argument. The site therefore loses visitors who never reach the
> (genuinely competent) argument it makes.

**Two factors are unusually cheap to fix here, and worth naming:**

- **Reciprocity.** Weinschenk's sequence is *give free info → then it's okay to ask*.
  This is the same conclusion `05` reached from SERP evidence (the ungated instrument),
  arrived at from psychology instead. Two independent routes, one answer.
- **Commitment.** *"When Is a Survey More Than a Survey?"* — completing a
  self-assessment is itself a commitment act that makes the next step consistent with
  the last. A free diagnostic quiz is not a lead magnet; it is a **commitment ladder**,
  and Prism is the top rung. That is why the instrument matters more than any article.

---

## Part 2 — Yablonski, *Laws of UX* — verbatim, with the site's verdict

[FACT — all definitions quoted from the text]

**Jakob's Law** — *"Users spend most of their time on other sites, and they prefer your
site to work the same way as all the other sites they already know."* Key takeaway:
*"Users will transfer expectations they have built around one familiar product to
another that appears similar."*
> **Verdict: violated at the category level.** "Workflow Intelligence System" is
> unfamiliar vocabulary for an unfamiliar navigation label ("Systems"). `02` proved
> nobody searches it; Jakob's Law explains why nobody clicks it either. The buyer has a
> mental model — *operations audit*, *consultant*, *assessment* — and the site refuses
> to meet it.

**Hick's Law** — *"The time it takes to make a decision increases with the number and
complexity of choices available."* Takeaways: *"Minimize choices when response times
are critical"*, *"Avoid overwhelming users."*
> **Verdict: violated.** Six co-equal capabilities, six buyer segments, five regions,
> five differentiators — on one page, at the top of the funnel.

**Miller's Law** — *"The average person can keep only 7 (± 2) items in their working
memory."* Takeaway: *"Organize content into smaller chunks."*
> **Verdict: at or past the ceiling.** The home page asks the visitor to hold six
> capabilities and six audiences simultaneously to locate themselves.

**Aesthetic-Usability Effect** — *"Users often perceive aesthetically pleasing design
as design that's more usable."*
> **Verdict: the site's genuine strength.** Clean, self-hosted fonts, no third-party
> requests, disciplined typography [FACT]. This buys real credibility. It is currently
> the only persuasion asset working.

**Peak-End Rule** — *"People judge an experience largely based on how they felt at its
peak and at its end."*
> **Verdict: the end is a refund policy.** `/systems` closes with reproduced refund,
> delivery and governance extracts [FACT]. The last thing a prospective buyer of a
> diagnostic reads is how to get their money back. The peak should be the moment they
> recognise their own problem; the end should be the smallest possible next step.

**Tesler's Law** — *"for any system there is a certain amount of complexity that cannot
be reduced"*; it must be absorbed by the system or pushed onto the user.
> **Verdict: the complexity is being pushed onto the buyer.** The company's breadth is
> real and irreducible. Today the visitor is made to do the sorting. A diagnostic
> instrument is precisely the device that absorbs it — the site asks the questions and
> routes the visitor, instead of presenting six doors and hoping.

**Fitts's Law**, **Postel's Law**, **Doherty Threshold** (<400 ms feedback) — build-time
concerns, not strategy. Noted for the build phase.

---

## Part 3 — Krug, *Don't Make Me Think*

**Fact of life #1**, verbatim: *"We don't read pages. We scan them... looking for words
or phrases that catch our eye."* Plus satisficing and muddling through. [FACT]
Chapter 3 is *"Billboard Design 101: Designing for scanning, not reading."*

> The `/systems` page is ~8,000 characters of prose with "structured" nine times [FACT].
> Scanned rather than read, it yields: *structured… structured… structured…* — no
> concrete noun catches the eye, because there are almost none.

**The trunk test** — Krug's acid test, verbatim: imagine being *"blindfolded and locked
in the trunk of a car... and dumped on a page somewhere deep in the bowels of a Web
site,"* then answering without hesitation: *"What site is this?"* (and what page, what
the major sections are, what I can do here, where I am). [FACT]

> **Run on `/systems`:** what site — clear. What page — "Prism", but a visitor cannot
> tell whether that is a product, a service, a platform or a department. What can I do
> here — "Initiate Engagement", meaning unclear. **The page fails the trunk test on its
> own product's identity.**

**The reservoir of goodwill** — *"every time we enter a Web site, we start out with a
reservoir of goodwill. Each problem we encounter on the site lowers the level."* [FACT]
Krug's second question: *"Does my site behave like a mensch?"*

> Hiding the price is the single largest goodwill withdrawal available on a commercial
> site — and it is exactly Sheridan's Big 5 topic 1 (`04 §1`). Psychology and content
> strategy converge again.

---

## Part 4 — Norman: *Emotional Design*, *Design of Future Things*, *Living with Complexity*

**Three levels of processing** — visceral, behavioural, reflective. [FACT — ch.3]
And the thesis of ch.1: **"Attractive Things Work Better."**

Mapped to a B2B buying decision:

| Level | What it asks | Site's standing |
|---|---|---|
| **Visceral** | Does this feel credible in the first 50 ms? | **Strong.** Clean, restrained, fast. Genuine asset |
| **Behavioural** | Can I find what I need and act? | **Weak.** Six-way sort, one high-commitment door, product absent from the front page |
| **Reflective** | What does hiring them say about me? Can I defend this to my board/spouse/co-founder? | **Unserved.** No name to vouch for, no client to cite, no number to quote. A buyer cannot construct the internal justification |

> [INFER] Reflective is the level that actually closes a $2.5k–$6.5k judgement
> purchase, and it is the level with nothing on it. Norman's framing explains precisely
> *why* case studies without figures fail: they give the buyer nothing to reason with.

**Living with Complexity** — Norman's distinction between *complexity* (an inherent
property of the task) and *confusion* (a failure of the design). Complexity is
legitimate; confusion never is.
> The company's work is genuinely complex. Its website is confusing. These are
> different problems and the second is entirely self-inflicted. This is the most useful
> sentence in the design half of the library for this project.

**Design of Future Things** — systems must communicate what they are doing and why, or
users lose trust. Applies directly to Prism-the-product later; not to acquisition.

---

## Part 5 — Ash, *Landing Page Optimization* / Walter / Dahlström

**Ash:** match the page to the visitor's **stage of awareness**; one page cannot serve a
problem-unaware and a purchase-ready visitor.
> `06 §2` established the funnel is inverted — 100% of pages serve the vendor-aware
> stage. Ash is the authority for why that cannot be patched with copy: it needs
> different pages for different awareness states.

**Walter, *Principles of Product Design*** — the hierarchy of user needs: functional →
reliable → usable → **pleasurable**. You cannot buy delight before reliability.
> Applied: don't add motion, illustration or polish to the current site. The layer that
> is missing is lower down — the visitor cannot complete the basic job of working out
> what is sold and whether it applies to them.

**Dahlström, *Storytelling in Design*** — extracted this session (~700KB). Narrative
structure across a multi-page journey; each page is a scene that must advance the story.
> Applied: the six case studies are the narrative asset and they are all denouement
> with no stakes. "Operations scattered across spreadsheets were consolidated into one
> view" has no before, no cost, no tension, no number.

---

## Part 6 — The finding this file adds: **Prism is invisible on its own website**

Verified by direct measurement this session, and it is worse than a copy problem:

- **The word "Prism" appears 0 times on the home page.** [FACT]
- "Systems" appears 28 times on the home page — **every instance a generic adjective**
  ("business systems", "production systems", "operating systems"). Never the product.
  [FACT]
- Across 15 pages measured, **every page links to `/systems` exactly 3 times: header
  nav, mobile nav, footer.** Zero in-body editorial links from anywhere. [FACT]
- "Prism" appears in the body of exactly **two** pages: `/systems` itself, and
  `/contact`. [FACT]
- `/services/business-and-operating-systems` — the capability page whose subject *is*
  workflows and operating systems — **never mentions Prism.** [FACT]
- The `founder-operations-cockpit` case study — a Prism-shaped engagement — **never
  mentions Prism.** [FACT]
- There is no `/prism` URL. Checked `/prism`, `/systems/prism`, `/prism-diagnostic`,
  `/services/prism`, `/workflow-intelligence` — all 404 `noindex`. Prism exists only at
  `/systems`, rendered by `src/pages/SystemsPage.jsx`. [FACT]

### Why this is a compounding problem, not a cosmetic one

**Commercially:** the only productised, scoped, priced, sellable thing the company owns
is absent from its front door. Every visitor to the home page is routed into six
open-ended consulting capabilities instead.

**For SEO:** sitewide nav and footer links are boilerplate, and search engines discount
them heavily relative to in-content editorial links. A page whose *only* internal links
are boilerplate receives almost no internal authority and — more importantly — **no
topical context**, because there is no surrounding sentence to tell a crawler what the
page is about. `/systems` is effectively orphaned-by-boilerplate. [INFER — mechanism is
well established; the specific effect on this site is unmeasured without Search Console]

**For UX:** the nav label "Systems" sits between "Services" and "Partnerships", so a
visitor reads it as a seventh capability, not a product. Jakob's Law again — the label
matches no model the buyer has.

**For the psychology above:** the Order Effect (*"First Is Best"*, Weinschenk ch.5) says
first position carries disproportionate weight. The thing that should be first is not
present at all.

> [INFER] Fixing this is the highest-ratio change available on the entire site: the
> asset already exists and is fully written. It needs a home-page section, a truthful
> name, in-body links from the capability pages and case studies that actually relate to
> it, and — on the evidence of `02` — its own URL at a term buyers search rather than at
> `/systems`.

---

## Part 7 — The decision order for the build

Derived from the above, and deliberately different from the usual sequence:

1. **Name it in the buyer's vocabulary** (Jakob's Law + `02`) — nothing downstream works
   until the category label matches a model the buyer already holds.
2. **Reduce the choice** (Hick, Miller, Tesler) — one wedge on the front page, with
   Prism on it. Capabilities move behind.
3. **Absorb the sorting with an instrument** (Tesler + reciprocity + commitment) — the
   site asks the questions instead of presenting doors.
4. **Install the reflective layer** (Norman) — named humans, named clients, real
   figures. Unblocked only by getting clients on record. Highest-value dependency.
5. **Repair peak and end** (Peak-End) — recognition at the peak, small step at the end,
   policy demoted to a link.
6. **Only then polish** (Walter's hierarchy) — not before.

## Open
- None of this can be validated by A/B test at current traffic (`04 §5`). Validate with
  five-second tests, the trunk test, and recordings of real buyers. [INFER]
- Whether `/systems` is indexed at all, given zero editorial inbound links. **Needs
  Search Console.**
