# Diagnosis, corrected

Supersedes earlier assumptions. Written after reading the book audit in
`Website books/website upgrade pdf.txt` and receiving the Search Console status.

## The facts we now hold

| Fact | Source | Implication |
| --- | --- | --- |
| **Search Console is completely empty. No impressions, no clicks.** | Owner, 2026-09-28 | Either the property was verified recently, or the site has effectively no search presence at all. Either way there is no baseline and no CTR problem to diagnose yet. |
| DR 0 with 852 referring domains, 26% dofollow | Ahrefs | Link profile is low quality. See `ahrefs-baseline.md`. |
| "Ranking around 700,000" | Owner, earlier | **Not a Google keyword ranking.** Google rankings are query specific. A figure near 700,000 is a global web rank or visibility score from a third party tool. It should not be used as a diagnosis. |
| Homepage, capability pages, case studies all exist and are technically sound | Repository | The technical layer is not the bottleneck. |

## The correction I needed to make

I had been treating this as a technical SEO and content volume problem. The
evidence says otherwise.

**With an empty Search Console, there is no CTR problem, no ranking problem and
no conversion problem to optimise. There is a visibility problem: almost nobody
is arriving.** Every downstream metric is undefined until that changes.

This also reframes "zero CRO". It does not mean the pages convert badly. It means
there is no measurable sample. A site with two visitors and one enquiry has a 50%
conversion rate and that number means nothing.

## Four separate systems, not one problem

From the book audit, and correct:

| System | Question | Our status |
| --- | --- | --- |
| 1. Search visibility | Can people find us? | **This is the bottleneck.** Empty GSC, DR 0. |
| 2. SERP click | Do they choose our result? | Undefined. No impressions to click. |
| 3. Page conversion | Do they understand and trust us? | Improved but unmeasured. |
| 4. Business conversion | Do they contact us? | Undefined. |

Working on 2, 3 or 4 before 1 produces no measurable result. That is the sequencing
error I was making.

## What the books changed in the site, concretely

Applied 2026-09-28 to `src/pages/LandingPage.jsx`:

| Book | Criticism accepted | Change made |
| --- | --- | --- |
| StoryBrand | Hero explained what the company *is* rather than what changes for the visitor | H1 now opens on the reader's situation: "Some problems need more than one kind of engineer" |
| StoryBrand, Business of Expertise | Negative positioning, "We are not a generic agency or a consultancy that occasionally writes code", competes inside someone else's category | Replaced with a positive definition: "We combine research, technology, engineering and implementation when a problem crosses more than one discipline" |
| Landing Page Optimization, Making Websites Win | Site described capability better than the change the visitor receives | "How we work" rewritten from our sequence into what the client gets |
| Krug, Laws of UX | Title and description were company centric | Both reframed on the reader's problem |

Not applied, deliberately:

| Temptation | Why refused |
| --- | --- |
| Hormozi style urgency, scarcity, guarantees | Commercial rules forbid it and it would damage credibility with a technical buyer |
| Simplifying the company to one category | Norman, *Living with Complexity*: reveal the structure, do not fake simplicity. The multidisciplinary identity is the differentiator |
| A/B testing programme | No traffic. Heuristic and qualitative review is the correct first CRO phase at this volume |
| 200 article content programme | newbreedrevenue: 2,188 URLs, 5.4K visits. Volume is not the lever |

## Entity inconsistency, an unexploited asset

The audit noted that LinkedIn, Crunchbase and Wellfound already carry richer
descriptions of the company than the website exploits, and that they do not fully
agree with each other.

For entity resolution in both classic and generative search, those descriptions
should converge on the same set of facts. Not identical wording, consistent
substance: what the company does, what it builds, where it operates, who leads it.

**Action for the owner:** review the LinkedIn, Crunchbase and Wellfound
descriptions against the current site positioning and align the facts. This is
free, it is outside the repository, and it directly supports the entity signals
the `Organization` schema already emits.

## Correct order of work

1. **Establish that the site is indexed at all.** Empty Search Console with a
   verified property either means recent verification or a genuine indexing
   problem. Use URL Inspection on the homepage and two capability pages. This is
   the single next action and it takes ten minutes.
2. **Submit the sitemap** and wait. 33 routes, 31 indexable.
3. **Align external entity descriptions** on LinkedIn, Crunchbase, Wellfound.
4. **Audit the 852 referring domains** and check manual actions.
5. Only then: content, CTR and conversion work, against real data.

## What I will not claim

That any of this produces traffic on a stated timeline. At DR 0 with no search
presence, the honest position is that the first measurable signal is indexing,
not ranking, and that everything after it depends on evidence we do not yet have.
