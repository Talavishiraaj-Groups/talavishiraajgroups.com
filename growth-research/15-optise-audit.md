# 15 — Optise audit, 23 October 2026: what it found, what it got wrong, what it revealed

Third party audit of `talavishiraajgroups.com`. Scored **42 overall**, marked
"Underperforming". Sub scores: Discovery 21, Foundations 70, Experience 30,
**Visibility 3**.

Tagging per `README.md`. The scores themselves are `[FACT]` as reported; whether
the scoring is meaningful is `[INFER]`.

---

## 1. The three named failures, measured independently

Each was checked against the built output before anything was changed, because
an audit tool's diagnosis and its stated cause are not the same thing.

### 1a. "Conversions funnel: competing calls to action and generic button text"

**[FACT] Confirmed, and worse than stated.** A count of button level actions
across the 36 built content pages found **56 actions carrying 4 different
labels for the single destination `/contact`**:

| label | uses | problem |
|---|---|---|
| "Start a conversation" | 12 | names a genre of interaction, not an action |
| "Discuss a similar problem" | 6 | acceptable, but a fifth name for one thing |
| "View our capabilities" | 6 | generic, **and redundant** (see below) |
| "Talk to our team" | 1 | describes what we do, not what the visitor does |
| "Explore our capabilities" | 1 | "explore" asks for unbounded effort |

**[FACT] One instance was genuinely competing rather than merely inconsistent.**
All six case study detail pages closed with two buttons in the same flex row:
`Discuss a similar problem` (the conversion) beside `View our capabilities`
(generic, pointing at the services hub). Directly above that row sat the
"Capabilities involved" pill list, already linking to the two *specific*
capabilities that engagement used. So the second button offered a worse version
of a route the reader had been given one scroll earlier, positioned to split
attention with the only action on the page that converts.

**[INFER] The four other multi button pages are not the same problem and were
left alone.** On `/about`, `/partnerships`, `/products` and `/build-vs-buy` the
two filled buttons are a hero anchor (scroll down, low commitment) and a closing
conversion, in separate sections, never visible at the same time. That is
correct funnel sequencing, not competition. A check for *adjacent* filled
buttons now returns zero across all 36 pages.

### 1b. "Mobile experience: unoptimized images create friction"

**[FACT] Real, but small, and not the main cause.** Measured payload:

| file | was | now | displayed at |
|---|---|---|---|
| `dhiraj-th-founder.jpg` | 27KB, 512x512 | 9KB, 256x256 | 128px |
| `yatharth-chauhan-cto.jpg` | 22KB, 512x512 | 8KB, 256x256 | 128px |
| `logo.png` (and `src/assets/`) | 19KB, 171x176 | 8KB, 93x96 | 32px tall |

Total image payload 116KB to 66KB, of which `og-image.png` (41KB) is never
fetched by a browser, only by social crawlers. **Page loaded images went from
roughly 75KB to roughly 25KB.** Both portraits are below the fold on a single
page and already carried `loading="lazy"`, `decoding="async"` and explicit
dimensions.

**[FACT] The actual mobile weight is the JavaScript bundle: 467KB raw, 129KB
gzipped, in one chunk.** That is more than six times the entire image payload
before the resize, and it is downloaded on every page.

**[FACT] Probing the bundle confirms every page's prose is in it**: the insights
articles, all six service descriptions, all six case studies, the Prism copy and
the resources are all present in the single chunk. 370KB of source under
`src/data` and `src/pages` compiles into it.

**[INFER] So the content of all 37 pages is shipped twice to every visitor:**
once as the prerendered HTML for the page they asked for, and again as
JavaScript for hydration. Optise named images because images are what a crawler
can see; it did not measure the bundle.

**[HYP] Fixing it is a real refactor and was deliberately not attempted here.**
`src/entry-server.jsx` renders the same `App.jsx` through `renderToString`,
which cannot handle `React.lazy`, so route splitting means diverging the server
and client component trees. That is precisely where prerendered sites break
subtly: a hydration mismatch shows as a flash of wrong content or a silently
dead page, and the site is currently taking live inbound traffic. The safe
pattern, if it is done later, is to keep the server tree static and have
`main.jsx` dynamically import the current route's chunk and await it *before*
calling `hydrateRoot`, so no Suspense boundary is ever reached and the
prerendered HTML is never discarded. Estimated saving, unverified: initial JS
from roughly 467KB to roughly 230KB raw.

### 1c. "Trust signals: case studies omit client identities and logos"

**[FACT] Correct, and it is the one finding that cannot be fixed in code.**
It is the same blocker already recorded as canon section 6: a named operator
with a provable track record, and three client references. Nothing was invented
in response to it.

**[FACT] What was already in place before this audit:** the anonymization
disclosure, and the `/case-studies` differentiator block added on 15 October
which states why the entries carry no logos and what is published instead.

**[INFER] That mitigates the objection, it does not answer it.** See section 3.

---

## 2. What the audit got wrong or overstated

- **[INFER] "Action buttons appear immediately on the first screen, guiding
  visitors forward without dead ends"** is listed under *where you win*, while
  *where you lose* says calls to action are scattered. Both describe the same
  buttons. The scoring is directional, not internally consistent.
- **[INFER] Images were named as the mobile cause when the bundle is six times
  heavier.** Acting only on the stated cause would have addressed a symptom the
  tool could see rather than the problem.
- **[UNVERIFIED] The 42 to 71 to 100 score progression** is presented as what
  migrating to Optise would achieve. It is a sales projection with no stated
  method. No weight given to it.

---

## 3. The genuinely valuable part: the competitive set

**[FACT] Optise named six competitors. All six were fetched and all six are
real**, which matters because `03-competitive-landscape.md` found that 3 of 13
competitors claimed by an earlier source did not exist.

| firm | based | named client logos on the home page |
|---|---|---|
| Softeq | Houston, Vilnius, Munich, Guadalajara | ~40, incl. Coca-Cola, Siemens, Microsoft, Samsung, Bosch, Disney, NVIDIA, GE |
| Cardinal Peak (an FPT company) | Lafayette, Colorado | ~20, incl. Samsung, Comcast, iRobot, Medtronic, WHOOP, Dish |
| Very | not stated | Vizio, HP, L'Oreal, Interstate Batteries, Fellowes, iHeart |
| Lemberg Solutions | not stated on home page | UNDP, Syngenta, Henkel, Freudenberg, Astronics, Nedap, Bosch Rexroth |
| Digica | Manchester, San Jose, Lodz | AMD, Meta, Teledyne FLIR, NHS England, T-Mobile, Roche, BAE Systems, LEGO, Dyson |
| DornerWorks | Grand Rapids, Michigan | none shown |

**[OBS] Five of the six lead with named logos. Four carry ISO certifications or
named silicon and cloud partnerships** (ISO 27001, 9001, 13485, 26262; AWS,
Google Cloud, Arm, Silicon Labs, Imagination). Digica states 70+ engineers and
300+ AI projects; Cardinal Peak claims 1,100+ clients; DornerWorks claims 25+
years.

### 3a. The positioning signal, which is the real finding

**[OBS] Optise classified this company into embedded, IoT and hardware product
engineering**, not software or AI consultancy. Every one of the six is primarily
an embedded or connected hardware firm.

**[INFER] That classification is a consequence of the site's own content.** The
`/services/product-engineering-and-rd` page advertises mechanical design, CAD,
simulation, design for manufacture, embedded firmware and sensor integration.
A classifier reading that page puts the company in this set, correctly.

**[INFER] It is an unwinnable set to be read into on current proof.** Against
firms carrying Siemens, Medtronic, BAE Systems and Dyson logos, ISO 13485 and
26262, and 25 year histories, a page with six anonymized engagements and no
certifications does not compete. This is a stronger and more specific version of
the trust signal finding than Optise itself gave.

### 3b. The whitespace, which the same evidence reveals

**[OBS] All six firms are paid to build. Not one of them sells an opinion on
whether to build at all.** Every home page fetched leads with engineering
capability and shipped products.

**[INFER] That is exactly the gap Prism occupies**, and it independently
corroborates the differentiator written for `/services` on this date: *the usual
problem with asking a build firm whether to build something is that they are
paid either way to say yes.* The competitive set is the evidence for that claim,
not an assertion about it.

**[HYP] Strategic implication, not yet acted on.** If the hardware and R&D
framing pulls the site into a category it cannot win, and the decision framing
is a category with no incumbent, the weighting between them on the site is worth
revisiting. That is a positioning decision for the owner, not a code change, and
it should be taken against canon rather than against this audit.

---

## 4. What changed in the site on this date

- One conversion action, one label, one destination. `src/components/cta.js`
  holds `CONVERSION_LABEL` so the four labels cannot reappear.
  **[FACT] Generic labels went from 8 to 0; 24 pages now carry the same action.**
- The redundant second button removed from all six case study detail pages.
  **[FACT] Zero adjacent filled buttons across 36 pages.**
- Three images resized. **[FACT] Page loaded image payload roughly 75KB to 25KB.**
- **[FACT]** `check-content.mjs` passes, `audit-pages.mjs` 36/36, 37 titles all
  under 60 characters. Verified rendering and hydration at 375px in a browser.

## 5. What this audit does not move

**[INFER] Visibility 3 and Discovery 21 are not code problems.** They agree with
`14-search-console-baseline.md`: zero non branded clicks in nine weeks. Nothing
changed here affects them. Those scores move with indexed time, published
content and external links, and the directories in `12-inbound-launch-plan.md`
are still the live work there.

**[FACT] Still blocked on the owner, unchanged:** named operator with a provable
track record, and three client references. Those gate GoodFirms and Clutch, and
they are what the trust signal finding actually asks for.
