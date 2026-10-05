# Ahrefs baseline, captured 2026-09-27/28

Source: Ahrefs free Traffic Checker and Backlink Checker, screenshots supplied by
the owner. These are Ahrefs estimates from their own index, not Search Console
first party data. Treated as directionally reliable for comparison between
domains, not as exact truth.

## Traffic

| Domain | Organic traffic / mo | Traffic value / mo | Trend May to Sep 2026 |
| --- | --- | --- | --- |
| mckinsey.com | 742.1K | $745.7K | **Declining**, roughly 1.15M to 850K |
| bcg.com | 419.8K | $545.8K | Slight decline, roughly 520K to 480K |
| **umbrex.com** | **84.3K** | **$87K** | **Rising steeply**, roughly 35K to 80K |
| smartbugmedia.com | 11.5K | $24.3K | Rising then flat, roughly 10K to 13K |
| newbreedrevenue.com | 5.4K | $10.5K | Rose then fell, peak ~7.5K in Jul |
| **talavishiraajgroups.com** | **not measured** | **not measured** | Traffic checker not run on our domain |

## Backlinks and authority

| Domain | DR | Backlinks | Dofollow | Linking websites | Dofollow |
| --- | --- | --- | --- | --- | --- |
| mckinsey.com | 92 | 7.1M | 90% | 282K | 91% |
| bcg.com | 90 | 5.5M | 98% | 82K | 86% |
| smartbugmedia.com | 74 | 81K | 80% | 4.9K | 73% |
| datatobiz.com | 38 | 9.5K | 24% | 1.9K | 44% |
| **talavishiraajgroups.com** | **0** | **2.7K** | **26%** | **852** | **42%** |

---

## The finding that matters most

**Talavishiraaj Groups has 852 linking websites and a Domain Rating of 0.**

That combination is not normal and it is not good news. For comparison:

| Domain | Linking websites | DR |
| --- | --- | --- |
| datatobiz.com | 1.9K | 38 |
| **talavishiraajgroups.com** | **852** | **0** |

datatobiz has roughly 2.2 times our referring domains and a DR of 38. We have 852
referring domains and a DR of 0. A healthy profile with 852 referring domains
would normally sit somewhere in the DR 15 to 30 range.

DR 0 alongside 852 referring domains means those domains carry essentially no
authority themselves. The realistic explanations are:

1. **Scraper and aggregator sites.** Automated directories that list every
   company they can find. They link, they pass nothing.
2. **A past mass directory submission campaign.** The one referring page visible
   in the screenshot is titled "Best Tech Companies and Startups" linking with a
   raw URL anchor, which is the classic listing directory pattern.
3. **Link scheme residue.** If anyone previously bought links or used a
   submission service, this is what it looks like afterwards.

Supporting signal: **only 26% of backlinks are dofollow.** Compare bcg.com at 98%
and mckinsey.com at 90%. A natural profile earned through content skews heavily
dofollow because editorial links are dofollow by default. A 26% dofollow ratio
points at profile links, comment links, directory entries and similar.

### Why this is urgent rather than interesting

Building content on a domain with this profile is building on sand. The same
article published on a DR 30 domain and a DR 0 domain does not compete equally.
Before investing in content volume, the link profile needs to be understood.

### What has to happen next, in order

1. **Audit the referring domains.** Ahrefs free tier shows one link per domain
   for the top 100. The owner needs to export and review what is actually
   linking. Look for: obvious scraper directories, non English spam, sites with
   no traffic of their own, and anything that looks purchased.
2. **Decide on disavow.** Google's guidance is that disavow is rarely necessary
   and that Google usually ignores low quality links automatically. It is only
   warranted if there is evidence of a manual action or a genuine paid link
   history. **Check Search Console for a manual action first.** Do not disavow
   speculatively; it can do harm.
3. **Do not add more directory links.** Whatever produced 852 near worthless
   referring domains should not be repeated.

**Blocked on:** Search Console access. The manual actions report is the only
place to confirm whether this profile has already caused a penalty. That single
check determines whether this is a cleanup job or merely a weak starting point.

---

## What umbrex.com tells us, and it is the most useful data point here

Umbrex is the standout: **84.3K monthly organic traffic and rising steeply**,
roughly doubling between May and September 2026, while McKinsey and BCG both
declined over the same window.

Umbrex is also the closest thing in this set to a reachable model. It is not a
global firm with a 92 DR and 282K referring domains. It is a network of
independent consultants that built organic traffic through published frameworks
and toolkits.

McKinsey and BCG are **not** a usable model, and the reason is arithmetic:

- McKinsey: 282K referring domains, DR 92
- BCG: 82K referring domains, DR 90
- Us: 852 referring domains, DR 0

Their traffic is a function of brand, alumni networks and decades of accumulated
authority. Their content strategy is downstream of that authority, not the cause
of it. Copying their content approach without their authority produces nothing.
This is the same error as the earlier competitor transcript and it should not be
repeated.

Note also that both are **declining**. Whatever is happening in search in 2026 is
taking traffic away from the large generalist content libraries.

---

## Honest read on the two models

| | High volume content | Earned authority |
| --- | --- | --- |
| Example | smartbugmedia 339 posts, 11.5K traffic, DR 74 | umbrex 84.3K traffic on frameworks and toolkits |
| Dependency | Requires DR in the 70s to convert volume into traffic | Requires genuinely useful, citable assets |
| Our position | DR 0. Volume would not convert. | Reachable, slowly |

smartbugmedia is the cautionary case: **339 blog posts, DR 74, 4.9K referring
domains, and only 11.5K monthly organic traffic.** That is a very large content
investment for a modest return. Volume alone is not the lever.

newbreedrevenue is worse: **2,188 blog URLs producing 5.4K monthly traffic, and
declining.** Roughly 2.5 visits per published URL per month.

**Conclusion:** publishing 1,000 articles is not the answer, and the data here
actively argues against it. The two firms with the largest content libraries in
this set have the weakest traffic per page in it.
