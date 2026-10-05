# Research log

## 1. Source learnings applied

Principles taken from the supplied library that actually change what we build.
Adapted to context, not copied.

| Source | Principle | How it is applied here |
| --- | --- | --- |
| Marcus Sheridan, *They Ask You Answer* | Buyers search their questions long before they search a vendor. Publish the answers, including the uncomfortable ones. | Insights section exists to answer pre-vendor questions. Capability pages already answer "when to consider this" and "who should not buy it". |
| Steve Krug, *Don't Make Me Think* | Cognitive load is the enemy. A visitor should never have to work out what a page is. | Plain page titles, one H1, one job per page, progressive disclosure: summary first, detail underneath. |
| Donald Miller, *Building a StoryBrand* | The customer is the protagonist, not the company. | Pages open with the buyer's situation ("signals you would recognize") before what we sell. |
| Tim Ash, *Landing Page Optimization* | Every page needs one primary action; competing CTAs cost conversion. | One primary CTA per page, contextual rather than generic. Intent routed into the contact form. |
| Minto, *Pyramid Principle* | Answer first, support second. | Direct answer in the opening paragraph, evidence below. Also what AI answer engines extract. |
| *Product-Led SEO* | Build pages around what you genuinely do, not around keyword lists. | Six capability pages, not twenty keyword pages. No industry landing pages without evidence. |
| David C Baker, *The Business of Expertise* | Positioning narrows to deepen. Undifferentiated breadth reads as weakness. | Cross sector capability is expressed through the nature of the problems, never as "we serve every industry". |
| Rob Fitzpatrick, *The Mom Test* | Ask about what happened, not about what people would like. | Case studies describe what was actually built and what changed, with no invented metrics. |
| Henneke Duistermaat, *Seductive Web Copy* | Specificity persuades; abstraction does not. | "Automation that saves twenty minutes a month rarely justifies the engineering" rather than "we optimize operations". |

## 2. Competitor intelligence

### Anti-pattern: the AI answer farm

Exa surfaced `slickrock.dev` with an `/answers/*` directory containing pages
written in the register of unverifiable authority: "widely cited as a premier",
"internationally recognized as the premier development shop", "the leading custom
software firm". Several such pages exist per niche.

This is scaled content generation aimed at citation by AI answer engines. It is a
direct match for what Google's spam policies describe as scaled content abuse, and
it is exactly what the brief forbids.

**Decision:** do not imitate. It is recorded here so nobody mistakes it for a model
worth following.

### Verified pattern worth learning from

`whiteraven.app/blog/services/applied-ai/python-ai-ml-production/` — "From
Notebook to Production: Python AI/ML That Ships", Feb 2026, roughly 15 minutes.

What makes it competitive:

- **Question headed H2s**: "How do you define the inference contract first?"
  Matches how the question is actually searched, and is extractable as an answer.
- **A takeaways block near the top.** Answer first, detail below.
- **Named tooling**: FastAPI, Pydantic, uv, Poetry, Docker. Specificity signals
  the author has done the work.
- **Opens on the failure mode**, not on the vendor: "Most AI projects stall
  because production was planned too late."
- **No pitch until the end.**

**Assessment:** this is the realistic quality bar for the "AI prototype to
production" intent. It is beatable, because Talavishiraaj has a documented
engagement on precisely this problem (`/case-studies/ai-workflow-notebook-to-production`)
and can write from what actually happened rather than from general practice.

### Prior competitor list: rejected

`Website books/website competitors and inbound traffic leads.txt` is a transcript
from another AI assistant. It lists competitors with confident monthly traffic
figures. The owner pushed back twice in that same transcript that the named sites
had no meaningful traffic.

The traffic numbers are unverifiable and several named domains could not be
confirmed. **Not used as a basis for any decision.** The one durable observation
worth keeping is that self serve diagnostic tools (HubSpot Website Grader, the EOS
Organizational Checkup) are a genuine, well documented inbound pattern.

**Decision on that pattern:** not adopted. A homepage diagnostic quiz would pull
the company's identity back toward "operational diagnostic firm", which is the
exact positioning the owner has repeatedly corrected away from. Prism is one
product, not the company. Revisit only if it can live inside `/systems` without
recentering the brand.

## 3. Search intent and demand

### Current coverage

| Intent | Page | Status |
| --- | --- | --- |
| Brand | `/` | Covered |
| Entity, leadership, credibility | `/about` | Covered |
| Capability: software and systems engineering | `/services/technology-and-engineering` | Covered |
| Capability: AI and automation | `/services/artificial-intelligence-and-automation` | Covered |
| Capability: product engineering and R&D | `/services/product-engineering-and-rd` | Covered |
| Capability: business and operating systems | `/services/business-and-operating-systems` | Covered |
| Capability: growth and market enablement | `/services/growth-and-market-enablement` | Covered |
| Capability: implementation and delivery | `/services/implementation-and-delivery` | Covered |
| Product | `/systems` | Covered, read only |
| Proof | `/case-studies` + 6 detail pages | Covered |
| Partnership | `/partnerships` | Covered |
| Conversion | `/contact` | Covered |

### The gap

Every page above is a **vendor page**. It converts someone who already has a
vendor shortlist. None of it reaches someone earlier than that.

Pre-vendor questions the capabilities genuinely support answering:

| Question | Evidence we hold | Priority |
| --- | --- | --- |
| Why do AI prototypes fail to reach production, and what does production actually require? | Documented engagement: notebook to production, with fallback-first design | **1** |
| When is workflow automation worth engineering, and when is it not? | Documented engagement: decision-heavy workflow automation, plus the explicit "volume, repeatability, error cost" test | **2** |
| Should a system that has outgrown its design be rebuilt or integrated? | Capability page content, plus the founder operations engagement built on existing tooling | 3 |
| What changes when a product moves from prototype to production? | Product engineering capability, test rig practice | 4 |

**Attainability judgement:** questions 1 and 2 are informational, long tail, and
answered today mostly by vendor listicles and general practice pieces. A specific,
experience grounded answer can compete. They are also commercially adjacent: the
reader with that question is a buyer for the AI and automation capability.

**Not attempted:** head terms such as "AI consulting" or "software development
company". Dominated by domains with authority we cannot reproduce. Pursuing them
would produce impressions and no enquiries.

### Demand validation status

**Not validated.** Exa surfaces what exists and what ranks; it does not give
search volume. No volume figure is recorded here because none has been verified.
Validate through Search Console impressions once connected, which is the only
first party source available.

## 4. Content gaps and decisions

| Decision | Rationale |
| --- | --- |
| Build Insights, not a blog | "Blog" implies cadence and news. Insights implies durable, useful answers. Small number of strong pieces, each tied to a capability and a case study. |
| Two articles now, not ten | Each must be genuinely substantive and grounded in real work. Publishing thin pieces to fill a section is the failure mode being avoided. |
| Every article links to capability plus case study | Completes the chain: answer → capability → proof → CTA. An article that does not route anywhere is a traffic exercise. |
| No author bylines invented | Attribution is to the organization until the owner confirms who should be named. |
