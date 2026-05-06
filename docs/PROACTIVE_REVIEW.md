# PROACTIVE_REVIEW.md — Monthly Site Health & Optimization Audit

## Purpose

This file defines a self-initiated monthly review protocol. It exists because of a proven failure pattern: Claude Code makes mistakes (wrong architecture choices, shallow updates, stale content, oversized files) and the operator has to discover them manually. That is backwards. This protocol reverses it — Claude Code runs the audit, finds the problems, and presents a prioritized action list before the operator has to ask.

**This is not a reactive tool. It runs proactively on a schedule.**

---

## Schedule

| When | What |
|------|------|
| **25th-28th of each month** | Run PROACTIVE_REVIEW. Produce the Monthly Report. |
| **1st of next month** | Execute PAGE_UPDATER.md on all flagged pages. Set `dateModified` to the 1st. |
| **2nd-3rd** | Commit, push, verify builds. Google recrawls. |

**Why not run on the 1st?** Because the review takes time and may surface issues that need human decisions. Running it a few days early means the 1st is pure execution — no surprises, no analysis paralysis.

---

## Required Inputs

The operator must provide the following data before the review can run. **If any input is missing, ask for it. Do not run a partial review.**

### 1. Google Search Console Export (MANDATORY)
- **Scope:** Full site, last 28 days
- **Tabs needed:** Pages, Queries, Countries, Devices
- **Format:** XLSX export from GSC Performance report

### 2. Google Analytics Data (RECOMMENDED)
- **Scope:** Last 28 days
- **Metrics needed:** Sessions, bounce rate, avg session duration by page
- **Format:** CSV or screenshot

### 3. Previous Month's Report (IF EXISTS)
- The last PROACTIVE_REVIEW output, to compare trends month-over-month

---

## The Review Process

### Phase 1: Site-Level Health Check

Run these checks against the GSC data before looking at individual pages.

#### 1.1 Traffic Trend
Compare this month's 28-day totals to the previous report (or to expectations):
- Total clicks: trending up, flat, or down?
- Total impressions: expanding or contracting?
- Overall CTR: improving or declining?
- Average position: moving up or sliding?

**Flag if:** Clicks dropped >15% month-over-month, or CTR dropped >20%, or position worsened by >0.5.

#### 1.2 Device Split Analysis
Check desktop vs mobile vs tablet:
- Is mobile CTR still dramatically higher than desktop? (This was a known pattern — desktop impressions are low-intent bulk queries)
- Are mobile impressions growing or shrinking?
- Is there a new device segment appearing?

**Flag if:** Desktop CTR is <0.1% while mobile CTR is >2% — indicates desktop impressions are noise, not real demand.

#### 1.3 Country Performance
Check top 15 countries:
- Which countries have the best CTR? (Historically: DE, FR, smaller EU countries)
- Which countries have massive impressions but near-zero CTR? (Historically: US)
- Any new countries appearing with meaningful volume?

**Flag if:** Any country with >5,000 impressions and <0.05% CTR — investigate whether queries from that country match page content/language.

#### 1.4 Language Version Performance
Check `?lang=` URLs vs base URLs:
- Are language versions getting independent impressions?
- Are language versions getting clicks?
- Which languages are underperforming their impression share?
- Are there queries in non-English languages hitting English pages? (Means the language version is missing or not indexed)

**Flag if:** A language version has >500 impressions and 0 clicks — title/meta likely not localized properly, or content is stale.

#### 1.5 Architecture Issues
Check for structural problems:
- Any pages with >10,000 impressions and 0 clicks? (Critical title/content problem)
- Any pages with position <5 and CTR <0.5%? (Title is the bottleneck)
- Any pages with position >15 dropping from previous month? (Content depth problem)
- Are there duplicate/cannibalized pages (two pages ranking for the same query)?
- Any `?lang=` URLs competing with base URLs for the same query?

**Flag if:** Any of the above are true — these are highest-priority fixes.

---

### Phase 2: Page-Level Audit

For the **top 30 pages by impressions**, run these checks:

#### 2.1 Freshness Compliance
Read each page's frontmatter:
- What is the `freshness_tier`?
- What is the `next_refresh_due`?
- Is the page overdue for refresh?
- Does `dateModified` reflect the actual last update?

**Flag if:** Page is past its `next_refresh_due` date.

#### 2.2 Content-Query Alignment
For each page, cross-reference its top 5 GSC queries:
- Does the page title contain words from the top queries?
- Does the lead paragraph directly answer the top query?
- Are there high-impression queries that the page doesn't cover?
- Are there zero-click queries at position 5-8? (Title/meta problem)

**Flag if:** Top query has >100 impressions and 0 clicks — urgent title/meta fix needed.

#### 2.3 Cross-Page Consistency
Check that all pages in the same content cluster agree on:
- Best overall model recommendation
- Best model per hardware tier (8GB, 16GB, 24GB)
- Primary benchmark (SWE-bench vs HumanEval vs other)
- GPU recommendations per tier
- Ollama commands for recommended models

**Flag if:** Any two pages in the same cluster contradict each other.

#### 2.4 Content Quality Signals
For high-impression pages, check:
- Is the page internally consistent? (Top says X, middle says Y)
- Are comparison tables current? (Do they include this month's model releases?)
- Are slide decks / PDFs current or stale relative to body text?
- Are image alt texts accurate?
- Are TOC anchor IDs matching section headings?
- Are there any sections still referencing deprecated models or benchmarks?

**Flag if:** Any internal contradiction found.

#### 2.5 Technical SEO Check
For each page:
- Title tag length: 50-60 characters?
- Meta description length: 150-160 characters?
- OG/Twitter descriptions present and different from meta?
- H1 present and matches title intent?
- No duplicate H2s?
- Schema markup (`dateModified`, `headline`) matches page content?
- Hreflang tags present for all 5 language versions?
- Canonical URL set correctly?

**Flag if:** Any technical SEO element missing or malformed.

#### 2.6 Code / File Quality
Check for known Claude Code failure patterns:
- Any file >5,000 lines? (Risk of the 90k line problem)
- Any file with >50% duplicated content across language blocks?
- Any hardcoded dates that should be dynamic?
- Any broken internal links?
- Any images referenced but missing from `/public/images/`?

**Flag if:** Any file exceeds reasonable size or has structural problems.

---

### Phase 3: Competitive Position Check

For the top 10 pages by impressions, search Google for their primary query and note:
- What position does the page actually hold?
- Who ranks above it?
- Do competitors have fresher content (more recent dates in titles)?
- Do competitors cover topics the page doesn't?
- Are competitors using better title formats (more specific, more compelling)?

**Flag if:** Competitors published fresher content in the last 30 days on the same topic.

---

### Phase 4: Opportunity Detection

Look for growth opportunities:

#### 4.1 Rising Queries
From GSC query data, identify:
- Queries with >50% impression growth vs previous month
- New queries appearing for the first time
- Queries where position is improving (moving toward page 1)

**Action:** If a rising query doesn't have a dedicated page, consider creating one.

#### 4.2 Quick Win Pages
Identify pages where small fixes could produce big results:
- Position 8-12, high impressions → small content improvement could push to page 1
- Position 3-7, low CTR → title rewrite could dramatically increase clicks
- High CTR but low impressions → content expansion could capture more queries

#### 4.3 Missing Content
From GSC queries, identify:
- Queries hitting the wrong page (user intent doesn't match landing page)
- Queries with no good landing page at all
- Topics competitors cover that you don't

---

### Phase 5: Previous Mistakes Audit

**This is the section that exists because of past failures.** Explicitly check for:

#### 5.1 Shallow Updates
Read the last month's Update Reports (from PAGE_UPDATER.md). For each updated page:
- Did the update actually reach all sections? (Read the full page, not just the top)
- Are there sections that still reference old models/benchmarks despite the update report saying "UPDATED"?
- Do non-English versions match the English version?

**Flag if:** Any page that was supposedly updated still has stale sections.

#### 5.2 Architecture Decisions
Review any structural decisions made in the last month:
- Were they the right choice? (e.g., `?lang=` vs `/de/` routing)
- Did anyone say "perfect implementation" about something that isn't?
- Are there known technical debt items being ignored?

#### 5.3 Instruction File Compliance
Check whether the existing instruction files are actually being followed:
- GEO_WRITING_GUIDELINES.md — are new pages compliant?
- PAGE_UPDATER.md — are updates following the full-depth protocol?
- SEO_CHECKLIST.md — are checklist items being completed?
- TRANSLATION_SPEC.md — are translations following the spec?

**Flag if:** Any instruction file is being systematically ignored.

---

## Output Format: The Monthly Report

The review must produce a structured report in this exact format:

```markdown
# PROACTIVE REVIEW — [Month Year]

## Data Inputs
- GSC: [date range], [total clicks], [total impressions], [CTR], [avg position]
- GA: [provided/not provided]
- Previous report: [date or "first review"]

## Site-Level Health
- Traffic trend: [UP/FLAT/DOWN] — [1-sentence summary]
- Device split: [summary]
- Country performance: [summary]  
- Language versions: [summary]
- Architecture issues: [list or "none found"]

## Page-Level Flags (Priority Order)

### CRITICAL (fix before monthly update)
1. [page-slug] — [problem] — [recommended fix]
2. ...

### HIGH (fix during monthly update)
1. [page-slug] — [problem] — [recommended fix]
2. ...

### MEDIUM (fix when time allows)
1. [page-slug] — [problem] — [recommended fix]
2. ...

### LOW (backlog items)
1. [description]
2. ...

## Freshness Compliance
- Pages overdue for refresh: [list]
- Pages due this month: [list]
- Pages healthy: [count]

## Cross-Page Consistency
- Contradictions found: [list or "none"]

## Competitive Position
- Pages where competitors are fresher: [list]
- New competitor pages to watch: [list]

## Opportunities
- Rising queries: [list with impression growth %]
- Quick wins: [list with expected impact]
- Missing content: [list of suggested new pages]

## Past Mistakes Check
- Shallow updates found: [list or "none"]
- Architecture issues: [list or "none"]
- Instruction file violations: [list or "none"]

## Recommended Actions for [Next Month] 1st
1. [action] — [page] — [expected impact]
2. [action] — [page] — [expected impact]
3. ...

## Technical Debt Backlog (Updated)
1. [item] — [priority] — [estimated effort]
2. ...
```

---

## How to Trigger This Review

On the 25th-28th of each month, tell Claude Code:

```
Run PROACTIVE_REVIEW.md. Here is the data:

GSC export (28 days): [attach XLSX]
GA data: [attach or "not available"]
Previous report: [attach or "first review"]
```

Claude Code must then:
1. Read all data
2. Run all 5 phases
3. Output the Monthly Report in the format above
4. Wait for operator decisions on CRITICAL and HIGH items
5. On the 1st, execute approved fixes via PAGE_UPDATER.md

---

## Rules

1. **Do not skip phases.** Even if Phase 1 looks fine, run Phase 2-5. Problems hide in the details.
2. **Do not say "everything looks good" unless it actually does.** The whole point of this file is to find problems. If the report has no flags, something was missed.
3. **Do not approve your own work.** If you made a change last month, Phase 5 must verify it was done correctly. Do not assume it was.
4. **Be specific.** "Some pages need updating" is not a flag. "[page-slug] has 15,000 impressions and 0 clicks because the title references HumanEval when users search for SWE-bench" is a flag.
5. **Prioritize by measurable impact.** A page with 50,000 impressions and 0.04% CTR is a bigger opportunity than a page with 200 impressions and 0% CTR.
6. **Compare to last month.** Every metric should be compared month-over-month. Trends matter more than snapshots.
7. **Catch your own mistakes.** If you recommended something last month that didn't work, say so. If you approved something that was wrong, say so. This is how the system improves.
