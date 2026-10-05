# Organic strategy, grounded in the Ahrefs baseline

Written after the real numbers arrived. Supersedes the earlier assumption that
content volume was the lever.

---

## 1. Where we actually stand

| | Us | datatobiz | smartbug | umbrex | bcg | mckinsey |
| --- | --- | --- | --- | --- | --- | --- |
| Domain Rating | **0** | 38 | 74 | n/a | 90 | 92 |
| Referring domains | **852** | 1.9K | 4.9K | n/a | 82K | 282K |
| Dofollow backlinks | **26%** | 24% | 80% | n/a | 98% | 90% |
| Organic traffic | **unmeasured** | n/a | 11.5K | 84.3K | 419.8K | 742.1K |

Two things jump out.

**We already have 852 referring domains and a DR of 0.** That is the anomaly.
datatobiz has 2.2x our referring domains and a DR of 38. Our links are coming
from domains that carry no authority. See `ahrefs-baseline.md` for the full
diagnosis. The 26% dofollow ratio, against bcg's 98%, says the same thing: these
are not editorial links.

**This is the single most important constraint on everything else.** Content on a
DR 0 domain does not compete with the same content on a DR 38 domain.

---

## 2. What Umbrex is actually doing, and why copying it directly would be a mistake

Umbrex is the one genuinely interesting case here: **84.3K monthly organic
traffic, roughly doubled May to September 2026**, while McKinsey and BCG both
declined.

I read their resources library. The traffic is not what it appears to be.

Their published assets include: "Guide To Setting Up Your Own Practice",
"Independent Consulting 101", "How To Set Consulting Fees", "The Consulting
Career Guide", "PowerPoint Slide Template Library", "McKinsey Approach to Problem
Solving", and roughly 80 playbooks. Their newsletter has "82,000+ subscribers
from the world's top firms".

**Their organic traffic is consultants, not clients.**

Umbrex is a two-sided marketplace. The free library recruits the *supply* side,
independent consultants. That network is then the product sold to the *demand*
side, corporate buyers. Someone searching "how to set consulting fees" is a
future Umbrex consultant, not a future Umbrex client.

**Implication for us:** copying Umbrex's content strategy would build an audience
of consultants. We do not sell to consultants. That traffic would convert to
nothing.

**What is transferable** is the artifact model, not the audience. Umbrex ranks
because it publishes *reusable reference material* that people return to and
cite, not opinion posts. Their "How to Analyze a [SaaS Company / Retail Bank /
Pharmaceutical Company / Manufacturing Company]" series is the clearest example:
one rigorous structure, genuinely different substance per entry.

---

## 3. Why McKinsey and BCG are not a model, arithmetically

The supplied AI conversation proposed copying their approach. The numbers rule it
out:

- McKinsey: 282,000 referring domains, DR 92
- BCG: 82,000 referring domains, DR 90
- Us: 852 referring domains, DR 0

Their content ranks *because* of that authority. The authority is not a product
of the content; it is a product of decades of brand, alumni placement into
Fortune 500 executive roles, and press coverage. The AI conversation identified
this correctly when it described the "alumni-as-buyers engine". That is the real
mechanism, and it is not reproducible by publishing frameworks.

Worth noting: **both are declining.** McKinsey fell from roughly 1.15M to 850K
between May and September 2026. Large generalist content libraries are losing
search traffic, which is consistent with AI answers absorbing informational
queries.

---

## 4. Volume does not work. The data in our own set says so.

| Firm | Blog URLs | Organic traffic | Traffic per URL |
| --- | --- | --- | --- |
| newbreedrevenue | 2,188 | 5.4K | **~2.5** |
| smartbugmedia | 339 | 11.5K | ~34 |
| umbrex | (library) | 84.3K | high |

newbreedrevenue published 2,188 blog URLs and gets 5.4K monthly visits, and it is
declining. smartbugmedia has DR 74 and 4.9K referring domains, and 339 posts
still only produce 11.5K.

**A thousand articles is not the strategy.** The two largest libraries in this set
have the worst return per page in it. This corrects my earlier read of the
sitemap data, which treated volume as the signal.

---

## 5. What to do instead

### Phase 1: diagnose the link profile (blocked on owner)

Nothing else is worth much until this is understood.

1. Check **Search Console → Manual actions**. This is the only way to know whether
   the 852 low quality referring domains have already caused a penalty.
2. Export the referring domains from Ahrefs and categorise them: scraper
   directories, genuine listings, real editorial links.
3. Disavow **only** if there is a manual action or evidence of purchased links.
   Google ignores most low quality links automatically, and speculative
   disavowing causes harm.

### Phase 2: build citable artifacts, not posts

The Umbrex mechanism, aimed at our actual buyers.

A reference asset is something a reader bookmarks, returns to and links to. A
blog post is something they read once. We need the former.

Candidate artifacts, each grounded in capability we genuinely hold:

| Artifact | Why it earns links | Maps to |
| --- | --- | --- |
| Production readiness checklist for AI systems | Teams reuse it at every launch. Linkable from internal wikis. | AI and automation |
| "How to evaluate a [legacy system / AI prototype / vendor proposal] before committing" series | Same rigorous structure, genuinely different substance per entry. The Umbrex pattern. | Technology, business systems |
| Automation decision framework, with the arithmetic | We already argue publicly for when *not* to automate. Nobody else does. | AI and automation |
| Open source technical artifact | How fryga and nilenso earn links. Requires something genuinely worth releasing. | Engineering |

**Rule:** each artifact must be usable by someone who never hires us. That is what
makes it linkable.

### Phase 3: earn links deliberately, from the right sources

Our 852 referring domains produced DR 0. The lesson is that source quality is
everything and volume is irrelevant.

**Pursue:**
- Practitioner citations, earned by the artifacts above
- An open source release with a genuine README
- Conference and podcast appearances, which produce real profile links
- Delivery partner and client pages, currently unused
- Selective high quality industry publications

**Do not pursue, and stop if previously used:**
- Mass directory submission. This is the most likely cause of the current
  profile.
- Paid links, guest post networks, reciprocal schemes
- Comment links and profile links

---

## 6. Tactics from the supplied AI conversations, assessed

The two pasted conversations proposed a specific playbook. Several parts carry
real risk and I am not implementing them without the owner overruling me.

| Tactic proposed | Assessment |
| --- | --- |
| **Parasite SEO**: publish on Medium/LinkedIn so it ranks on their authority | **Do not.** Google's site reputation abuse policy now targets exactly this. It also builds no asset for us: the ranking belongs to Medium. |
| **Mass directory submission** for instant links | **Do not.** This is very likely what produced 852 referring domains at DR 0. Repeating it deepens the problem. |
| **Comment interception** on competitor LinkedIn posts, then pitch a framework in the reply | **Do not.** It is visible to everyone in the thread, including the prospect. For a firm selling engineering judgement, being seen fishing in a competitor's comments is a credibility cost, not a lead source. |
| **IP de-anonymisation** (Clearbit, Snitcher, Koala) to identify anonymous visitors | **Not without legal review.** We sell into the UK, EU and UAE. Identifying visitors and then contacting them on LinkedIn has a GDPR lawful basis problem. This is the owner's call with advice, not a default. |
| **"Skyscraper 2.0"**: copy competitor top pages and make them 2x | **Do not copy.** Reading what ranks to understand intent is fine. Rewriting their page structure with our name on it is scaled content abuse and produces nothing original. |
| **"[Competitor] alternative" comparison pages** | **Conditionally yes.** Legitimate when the comparison is honest and we genuinely compete. Not yet: we do not have a named competitor buyers are actively comparing us against. Revisit when Search Console shows such queries. |
| **Low difficulty keyword targeting** (KD under 15) | **Yes.** This is sound, and it is the right approach at DR 0. Needs real keyword data, which needs a paid tool or Search Console. |
| **Reverse engineering competitor backlinks** to find link sources | **Yes, selectively.** Finding which publications cover this space is legitimate research. Mass outreach to every linking domain is not. |
| **Signature framework** naming our method | **Careful.** The internal handbooks already contain named frameworks that are explicitly internal only. Inventing a public one risks colliding with those and reads as consulting theatre, which the owner has repeatedly corrected away from. |

---

## 7. Realistic timeline

The supplied conversation suggested leads in week one. At DR 0 that is not
available through organic search, and saying otherwise would be dishonest.

| Window | Realistic expectation |
| --- | --- |
| Weeks 1 to 4 | Indexing of new pages. No meaningful ranking. Baseline established in Search Console. |
| Months 2 to 4 | Long tail impressions on low competition question queries. First non branded clicks. |
| Months 4 to 8 | Position improvement on the artifacts if they earn any links. First inbound enquiries attributable to organic. |
| Months 8 to 18 | Compounding, conditional on link profile health and continued publication. |

**The one lever that moves faster than this** is not SEO. It is direct outreach
and the owner's own network. That is a different channel with a different
playbook and it should not be confused with organic.

---

## 8. Next actions

| # | Action | Owner | Blocked |
| --- | --- | --- | --- |
| 1 | Check Search Console manual actions report | Owner | Needs Search Console |
| 2 | Export and categorise the 852 referring domains | Owner | Needs Ahrefs export |
| 3 | Decide disavow, only if evidence supports it | Both | Depends on 1 and 2 |
| 4 | Confirm Insights byline | Owner | Decision only |
| 5 | Build the first reference artifact | Claude | Ready to start |
| 6 | Connect Search Console, submit sitemap | Owner | Needs access |

Nothing in phase 2 or 3 is worth doing at scale until action 1 returns a clean
result.
