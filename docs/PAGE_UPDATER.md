# PAGE_UPDATER.md — Full-Depth Content Refresh Protocol

## Purpose

This file governs how content pages are updated. It exists because of a proven failure mode: Claude Code updates the top of a page (lead paragraph, Quick Answer, Key Takeaways) and leaves the rest stale. This produces pages that contradict themselves — "Model X is best" at the top, "use Model Y" in the comparison tables. Google reads the whole page. Users read the whole page. Half-updated pages perform worse than consistently outdated ones, because the internal contradiction signals low editorial quality to both readers and search engines.

**This protocol applies to every page update, regardless of content type.**

---

## The Core Rule

**Every section of the page that references specific names, versions, numbers, dates, benchmarks, commands, or recommendations MUST be checked and updated in every refresh pass. There are no exceptions. Updating only the top of the page is a failure.**

---

## Freshness Tiers

Every page has a `freshness_tier` field in its article object (these are inline-multilingual `.ts` files under `src/lib/<cluster>/articles/`, not YAML frontmatter — the field lives in the EN block of the article object). This determines how often updates are needed and what kind of update is required.

**Note on field location:** Gate fields like `freshness_tier`, `next_refresh_due`, `last_full_refresh`, `next_seo_review_due`, `last_seo_review`, `dateModified`, `current_models_mentioned`, and `audience` live in the **EN block** of each article. Translated blocks (de/es/fr/ja/zh) typically omit these and start at `theme` — that is by design, not a defect. Read freshness/gate fields from the EN block. (Some older files redundantly repeat `freshness_tier`/`next_refresh_due` in each language block; keep those in sync when present, but the EN block is authoritative.)

| Tier | Refresh Cycle | Trigger | Update Scope |
|------|--------------|---------|--------------|
| `monthly` | Every 30 days | New model releases, benchmark shifts, tool updates | Full-depth refresh of all specific references |
| `semi_annual` | March + September | Seasonal review | Full-depth refresh + structural review |
| `annual` | January | Year rollover | Full rewrite or archive decision |
| `evergreen` | Every 24 months | Conceptual accuracy check | Light review — no specific model/tool/version references should exist |

### When to Use `monthly`

Assign `monthly` freshness to pages where:
- The topic has a release cycle shorter than 60 days (e.g., Ollama models, GPU releases, LLM benchmarks)
- Competitors publish fresh content on this topic weekly or monthly
- The page's GSC queries include month names or "latest" or "current" or version numbers
- Falling behind by one release cycle makes the page factually incorrect

Examples: "Best Local LLMs for Coding," "New Ollama Models," "Qwen vs Llama vs Mistral," model comparison pages, GPU recommendation pages, benchmark pages.

### When NOT to Use `monthly`

Do not assign `monthly` to:
- Conceptual explainers ("What is prompt injection?", "What is quantization?")
- Tutorial/how-to pages where steps don't change ("How to install Ollama")
- Legal/compliance content
- Framework methodology pages ("TRACE framework," "Chain-of-thought prompting")

These belong in `evergreen` or `semi_annual`.

### Gate Fields for Monthly Pages

These are fields in the EN block of the article object (illustrative values — the operator/agent fills real values per page at update time; do NOT treat the examples below as current data):

```ts
freshness_tier: 'monthly',
next_refresh_due: '2026-06-05',        // content/facts — monthly (every 30 days)
last_full_refresh: '2026-05-05',
next_seo_review_due: '2026-07-01',     // title/meta/intent — QUARTERLY (Jul 1 / Oct 1 / Jan 1 / Apr 1)
last_seo_review: '2026-04-01',
current_models_mentioned: ['<model>', '<model>', '<model>'],   // e.g. the models the page currently features
current_benchmarks_used: ['<benchmark>', '<benchmark>'],        // e.g. SWE-bench, LiveCodeBench
current_hardware_mentioned: ['<gpu>', '<gpu>', '<apple-silicon>'],
```

### Two Cadences: Monthly Facts vs. Quarterly SEO Review

A `monthly` page has **two independent update cadences**. Do not conflate them.

| Cadence | Field | Frequency | Scope |
|---------|-------|-----------|-------|
| **Content / facts** | `next_refresh_due` | Every 30 days | Models, benchmarks, VRAM, ollama commands, ranking order, prices, speed tables — everything in the Type A–E checklists |
| **SEO review** | `next_seo_review_due` | **Quarterly** — fixed calendar anchors **Jul 1 / Oct 1 / Jan 1 / Apr 1** | Title tag, meta description, OG/Twitter description, H2 intent-alignment to top GSC queries, structural ordering |

**Why two cadences:** Facts go stale monthly — leaving them stale makes the page *wrong*. Title/meta tags are different: every change forces Google to re-crawl and re-evaluate, and the SERP needs weeks to settle a new title. Changing titles monthly creates ranking volatility and destroys any clean read on whether a change helped CTR. A quarter accumulates enough CTR/position data to judge. So title/meta tuning is **scheduled quarterly, not monthly**.

**Rules:**
- The monthly content refresh is **facts-only**. It does **not** rewrite the title/meta/descriptions.
- **Exception (always allowed):** if a monthly fact refresh makes the title or meta *contradict* the updated body (Anti-Pattern #6), fix it on the spot — a forced correction is not a scheduled SEO change.
- The quarterly SEO review **requires GSC data** (Step 0) — it is the heaviest consumer of per-page query/CTR/position signal. Without GSC, skip the SEO review; do not guess at titles.
- When `next_refresh_due` and `next_seo_review_due` both fall in the same month, do them together: facts first, then meta.
- Set `last_seo_review` to the date a review actually ran, and roll `next_seo_review_due` to the next fixed quarter anchor.
- Quarterly SEO review applies to **`monthly`-tier pages only**. `semi_annual` pages already fold a structural/meta review into their twice-yearly refresh.

---

## Content Type Classification

Different page types have different update patterns. Identify the page type before starting.

### Type A: Model Ranking / Comparison Pages

Examples: "Best Local LLMs for Coding," "Qwen vs Llama vs Mistral," "Best Ollama Models"

**What goes stale:** Model names, benchmark scores, ranking order, ollama commands, VRAM requirements, speed benchmarks, "best for X" recommendations.

**Update checklist:**
- [ ] Lead answer block — correct top pick?
- [ ] Quick Answer box — matches lead?
- [ ] Key Takeaways — all bullets current?
- [ ] Every model section/writeup — still accurate?
- [ ] Every comparison table — rows current, no missing new models?
- [ ] Every "which model for your use case" section — recommendations match new rankings?
- [ ] Every persona/scenario recommendation — consistent with top picks?
- [ ] Every benchmark reference — using current benchmark (not deprecated ones)?
- [ ] Every ollama/CLI command — correct model tags?
- [ ] Every image and alt text — matches current content?
- [ ] FAQ answers — no stale model recommendations?
- [ ] Speed/performance tables — current numbers?
- [ ] "When NOT to use" section — still accurate?
- [ ] Title tag — matches page content?
- [ ] Meta description — matches page content?
- [ ] OG description — matches page content?

### Type B: Hardware / VRAM / GPU Pages

Examples: "How Much VRAM for Local LLMs," "Best GPUs for Local LLMs," "Hardware Guide"

**What goes stale:** GPU models and pricing, VRAM requirements (especially for new architectures like MoE), model-to-GPU mapping tables, price references, speed benchmarks.

**Update checklist:**
- [ ] Lead answer block — VRAM tiers still correct?
- [ ] GPU recommendation tables — include latest GPUs (RTX 50xx, new Apple Silicon)?
- [ ] VRAM formula section — covers MoE models (active vs total parameters)?
- [ ] Model-to-VRAM mapping — includes new model families?
- [ ] Price references — current used/new market prices?
- [ ] Speed benchmarks — measured on current hardware?
- [ ] "Best for X VRAM tier" recommendations — current models?
- [ ] FAQ answers — no stale GPU or model references?

### Type C: Tutorial / How-To Pages

Examples: "How to Install Ollama," "How to Fine-Tune with LoRA," "OpenAI-Compatible API Guide"

**What goes stale:** Version numbers, CLI commands, API endpoints, configuration syntax, prerequisite versions.

**Update checklist:**
- [ ] Version numbers — current release?
- [ ] CLI commands and syntax — still valid?
- [ ] Screenshots or code examples — match current UI/output?
- [ ] Prerequisites — correct versions?
- [ ] Troubleshooting section — known issues still current?
- [ ] Links to external docs — not broken?

### Type D: Conceptual / Evergreen Pages

Examples: "What Are Local LLMs?", "What is Quantization?", "Prompt Injection Explained"

**What goes stale (rarely):** Frontier model references used as examples, benchmark baselines cited for comparison, "as of [date]" statements.

**Update checklist:**
- [ ] Any "as of [date]" references — still accurate?
- [ ] Frontier model comparisons used as examples — current models?
- [ ] Baseline numbers cited — still valid?
- [ ] No fundamental conceptual errors from new research?

### Type E: Tool Comparison / Ecosystem Pages

Examples: "Ollama vs LM Studio," "Best Local LLM Frontends," "One-Click Installers"

**What goes stale:** Tool versions, feature sets, compatibility matrices, supported model counts, API compatibility.

**Update checklist:**
- [ ] Tool versions — current releases?
- [ ] Feature comparison tables — new features added?
- [ ] Supported model counts — current numbers?
- [ ] Compatibility notes — still accurate?
- [ ] "Best for X" recommendations — still valid?
- [ ] New tools entered the market that should be mentioned?

---

## The Full-Depth Refresh Process

### Step 0: Ingest GSC Query Data (MANDATORY FIRST STEP)

**Before touching any content, the operator must provide Google Search Console data for the page being updated.** This is not optional. Without GSC data, the update is a guess. With it, the update is aligned to what real users actually search for.

**What to provide:**
- GSC Performance report filtered to the specific page URL
- Time range: last 28 days (or last 7 days if freshness is critical)
- Include: Queries, Clicks, Impressions, CTR, Position

**What Claude Code must do with this data:**

1. **Identify the top 10-20 queries by impressions** — these are the searches Google is testing this page for. The page content must answer these queries directly.

2. **Flag query-content mismatches** — if a top query asks about a model, tool, or concept that the page doesn't mention or mentions only in passing, that's a gap. Add or expand coverage for that query.

3. **Flag zero-click high-impression queries** — these indicate the page is appearing but not compelling enough to earn clicks. Check if the title tag and meta description directly address these queries. If the query says "ollama vs lm studio vs gpt4all 2026" and the page title doesn't mention these tools, the title needs work.

4. **Check position vs CTR** — queries at position 5-8 with 0% CTR have a title/description problem. Queries at position 10+ with 0% CTR are a ranking problem (content depth or authority). Different fixes needed.

5. **Identify language-specific queries** — if GSC shows queries in German, French, Chinese, or Japanese, check whether the corresponding language version of the page adequately covers those queries. A German query hitting the English page means either the German version is missing, not indexed, or lower quality.

6. **Align recommendations to search intent** — if the top queries are "best X for 8GB RAM" and the page leads with a model requiring 22GB, the page structure is wrong. Put the answer to the highest-impression query closest to the top.

**Example GSC-driven decisions** (illustrative — the model names, dates, and numbers are placeholders showing the *pattern*, not current data):

| GSC Signal | Action |
|-----------|--------|
| Query "ollama update may 2026" — 38 imp, 0 clicks, pos 5.2 | Title/meta must include "May 2026" and "latest" — user wants freshness signal |
| Query "how to choose quantization level" — 24 imp, pos 11.9 | Page ranks poorly for this — either add a section or link to the quantization page |
| Query "lm studio openai compatible api docs" — 22 imp, pos 7.9 | Page mentions LM Studio but doesn't cover API docs — add or link out |
| 10,506 US impressions, 0 clicks | US queries are likely informational/version-check — check if title signals "latest" or "updated" |
| Mobile CTR 3.4% vs Desktop CTR 0.07% | Desktop impressions are low-intent bulk queries — don't optimize for them, focus on mobile-intent queries |

**If no GSC data is provided:** Ask the operator for it. Do not proceed with the update without it. A content refresh without search data is guesswork.

### Step 1: Read the Entire Page First

Before changing anything, read the full page top to bottom. Note every specific reference (model names, benchmarks, commands, numbers, dates). This prevents the shallow-update failure where only the top gets refreshed.

### Step 2: Identify What Changed Since Last Refresh

Check the `current_models_mentioned` and `current_benchmarks_used` frontmatter fields against current reality. List:
- New models released since last refresh
- Models that have been superseded
- Benchmarks that are now considered outdated
- Hardware that has been released or discontinued
- Pricing that has shifted

Cross-reference this with the GSC data from Step 0: are any of the new/superseded items appearing in user queries? If users are already searching for Qwen 3.6 and the page still features Qwen 2.5, that's a priority fix.

### Step 3: Update Top-Down, But Do Not Stop

Update the page in reading order:
1. Title tag
2. Meta description and OG/Twitter descriptions
3. Lead answer block (bolded first paragraph)
4. Quick Answer box (if present)
5. Key Takeaways section
6. Each body section, in order
7. Every comparison table
8. Every recommendation/persona section
9. Every FAQ answer
10. Image alt texts
11. Related Reading links (ensure they point to updated pages)
12. Sources section
13. Frontmatter (`dateModified`, `current_models_mentioned`, `next_refresh_due`)

### Step 4: Consistency Check

After updating, verify:
- [ ] The title tag matches the page's actual top recommendation
- [ ] The lead paragraph and every recommendation section name the same models
- [ ] No section recommends a model that another section says is outdated
- [ ] All ollama commands use current model tags
- [ ] The TOC anchor IDs match the actual section headings (no orphaned anchors from renamed sections)
- [ ] Benchmark references are consistent (don't use HumanEval in one table and SWE-bench in another without explanation)
- [ ] The top 5 GSC queries by impressions are directly answered by the page content
- [ ] The title tag contains words that match the highest-impression GSC queries
- [ ] Zero-click high-impression queries have been addressed (content gap filled or title/meta improved)

### Step 5: Multi-Language Propagation

After the English (EN) page is finalized, propagate changes to all active non-English language versions. The active set is **6 languages total** (EN + 5):
- DE (German)
- ES (Spanish)
- FR (French)
- JA (Japanese)
- ZH (Chinese)

**Reserved languages — `pt` and `ar`:** These exist in the `Language` type but have no content yet. Do NOT propagate to them or fabricate blocks for them. Only translate `pt`/`ar` once their content is authored. When `pt` is authored it MUST be **Brazilian Portuguese** (pt-BR — você form, BR vocabulary such as *arquivo*/*tela*/*gerenciar*, LGPD/ANPD for compliance, hreflang and schema.inLanguage = `pt-BR`), never European Portuguese. `ar` is **RTL** and must keep Latin technical terms LTR.

**Language update rules:**
- Model names, benchmark names, ollama commands, and VRAM numbers are language-independent — copy exactly
- Translate updated prose sections following the **geo-translation** guide (the authoritative per-language localization spec)
- Do NOT re-translate unchanged sections — only translate what actually changed
- Update `dateModified` in all language versions
- Regional context sections (EU/GDPR, France/CNIL, Japan/METI, China Data Security Law, Brazil/LGPD, Gulf/PDPL) may need language-specific updates — apply only where the article is fundamentally about compliance or data governance

### Step 5.5: Structural Parity Across Languages (MANDATORY — fix, don't just flag)

If, at any point during the refresh, a language block is found to be missing sections, tables, FAQ entries, or other structural content that the EN (or another fuller) block has, **this is not a note for a follow-up pass — it must be fixed in the same update.** Do not report a structural gap as "found, not fixed" and move on.

**Rule:** When a page update reveals that DE/ES/FR/JA/ZH/PT/AR/KO blocks are missing sections (e.g. `benchmarkTable`, `methodology`, `vramGuide`, `decisionMatrix`, `softwareCompat`, `powerAndCooling`) or have fewer FAQ entries than the most complete language block, bring every active language up to parity as part of that same page update:

1. Treat the fullest existing block (usually EN) as the structural source of truth for that page.
2. For each active language missing a section, author it via the **geo-translation** guide (do not machine-translate verbatim — localize per the guide's per-language rules, e.g. pt-BR vocabulary, RTL handling for ar).
3. Bring FAQ counts up to match — if EN has 7 FAQs and DE has 4, add the missing 3 FAQ entries to DE (translated/localized, not stubbed).
4. Re-run Step 4 (Consistency Check) and the Verification Command against every language block, not just EN, once parity is restored.
5. Only skip a language if it is explicitly reserved/unauthored per the current active-language list in this file and `CLAUDE.md` — do not fabricate content for a language that has no content at all yet; that is a separate "author this language" task, not a parity fix.
6. Report the fix in the Step 6 report (see `Structural parity` line below) — do not report it as a deferred finding.

**Why:** A structural gap between languages is the same failure class as a shallow content update (Anti-Pattern #1) — it leaves some language versions contradicting or underserving readers relative to others, and non-EN pages rank independently, so an incomplete DE/FR/JA/ZH page underperforms silently. "Found but not fixed" defeats the purpose of running the page updater at all.

### Step 6: Report What Was Updated

After completing the update, output a section-by-section report:

```
## Update Report: [page-slug]
- GSC data reviewed: [date range], [X] queries, [Y] impressions, [Z] clicks
- Top GSC query gaps addressed: [list queries that were missing from content]
- Title tag: UPDATED (was "X", now "Y") — aligned to top query: "[query]"
- Meta description: UPDATED — now addresses: "[top query]"
- Lead answer block: UPDATED — new top pick: [model]
- Key Takeaways: UPDATED — 3 of 5 bullets changed
- Section "Benchmark Table": UPDATED — added 2 new models, removed 1
- Section "Persona Recommendations": UPDATED — all 5 personas refreshed
- Section "FAQ": UPDATED — 2 of 8 answers changed
- Section "Common Mistakes": NO CHANGE — still accurate
- TOC anchors: FIXED — 2 mismatched IDs corrected
- Frontmatter: UPDATED — dateModified, current_models_mentioned, next_refresh_due
- Structural parity: FIXED — [DE, FR, JA, ZH] were missing [benchmarkTable, methodology, vramGuide]; sections authored and FAQs brought to 7/7
- Languages pending: DE, ES, FR, JA, ZH
```

This report serves as the audit trail for the update and prevents the "I think I updated it" problem.

---

## Anti-Patterns: What NOT to Do

### 1. Shallow Update (THE critical failure)
**Wrong:** Update lead paragraph and Key Takeaways, leave comparison tables and FAQ stale.
**Why it fails:** Page contradicts itself. Google sees inconsistency. Users who scroll see outdated advice.

### 2. Title-Only Update
**Wrong:** Change title tag without updating body content.
**Why it fails:** Title promises current info, page delivers old info. Users bounce. CTR may increase but dwell time crashes.

### 3. Patch Without Read
**Wrong:** Search-and-replace a model name without reading context.
**Why it fails:** "Qwen 3.6 27B" replacing "Qwen2.5-Coder 32B" changes the meaning when the section discusses 32B-specific VRAM requirements or HumanEval scores that don't apply to Qwen 3.6.

### 4. Update English Only
**Wrong:** Refresh EN page, forget the DE/ES/FR/JA/ZH versions.
**Why it fails:** Language variants rank independently. A stale DE or ES page still gets German or Spanish traffic with outdated recommendations.

### 5. Update Content, Skip Frontmatter
**Wrong:** Update all sections but forget to change `dateModified`, `current_models_mentioned`, `next_refresh_due`.
**Why it fails:** Freshness audit scripts will not detect the update. Page will be flagged for refresh again. Wasted work.

### 6. Flag a Structural Gap Instead of Fixing It
**Wrong:** Noting "DE/FR/JA/ZH are missing benchmarkTable/methodology/vramGuide and have fewer FAQs than EN — worth a follow-up pass" and leaving the update there.
**Why it fails:** A flagged-but-unfixed gap is a shallow update in disguise (see Anti-Pattern #1) — the non-EN pages still ship incomplete and keep underperforming until someone remembers to run a separate pass. See Step 5.5: fix structural parity in the same update, don't defer it.

### 7. Ignore Title/Meta When Content Changes
**Wrong:** Being told "don't update the title, it'll confuse Google" when the page content has fundamentally shifted.
**When to override:** If the title references a benchmark, model family, or framing that the page itself now says is outdated (e.g., title says "Ranked by HumanEval" but body says "SWE-bench replaces HumanEval"), the title MUST change. Google penalizes title-content mismatch more than title changes.

---

## Monthly Refresh Workflow (for `monthly` tier pages)

### Week 1 of Each Month

1. Run freshness audit: identify all pages with `next_refresh_due` in current month
2. For each page, check: have new models/tools/benchmarks been released since `last_full_refresh`?
3. If yes: run full-depth refresh process (Steps 1-6 above)
4. If no: update `next_refresh_due` to next month, no content changes needed

### Batch Efficiency

Group monthly pages by content cluster:
- **Model ranking cluster:** best-local-llms-for-coding, qwen-vs-llama-vs-mistral, top-open-source-models-ollama, best-local-llms-2026, best-beginner-local-llm-models
- **Hardware cluster:** how-much-vram-local-llm, local-llm-hardware-guide-2026, best-budget-gpus-local-llm, best-amd-gpus-local-llm
- **Tool cluster:** ollama-vs-lm-studio, best-local-llm-frontends, local-llm-one-click-installers

Update all pages in a cluster together. This ensures cross-references stay consistent (e.g., coding page and Ollama page recommend the same models).

### Cross-Page Consistency Rule

After updating a cluster, verify that every page in the cluster agrees on:
- Which model is "best overall"
- Which model is "best for 8 GB RAM"
- Which benchmark is primary
- Which GPU is recommended per tier

If page A says "Kimi K2.6 is best for coding" and page B says "Qwen2.5-Coder 32B is best for coding," one of them is wrong. Fix before publishing.

---

## Slide Decks and PDF Reference Cards

Many pages include embedded slide decks and downloadable PDF reference cards. These are separate assets that also go stale.

**Rule:** If the page body was updated, check whether the slide deck and PDF need regeneration. If the slides still show old model rankings or benchmarks, they contradict the updated body text. Either regenerate them or add a note: "Slides reflect [month/year] data. Updated recommendations are in the text above."

---

## Integration With Existing Systems

### GEO_WRITING_GUIDELINES.md
This file does NOT replace GEO writing guidelines. All updates must follow existing H2/H3 rules, lead answer block format, meta description formulas, Sources requirements, Related Reading requirements, and FAQ format. This file adds the update-specific process on top.

### geo-translation (per-language localization) and geo-meta-optimizer (meta tags)
Step 5 translations must follow the **geo-translation** guide (the authoritative localization spec — 6 active languages, pt/ar reserved, Brazilian Portuguese for pt, RTL for ar). Title/meta-description optimization follows **geo-meta-optimizer** (per-language length targets, hard length gate). This protocol governs the *content refresh*; those two govern *how translation and meta are produced*. Keep all three in sync on the language set.

### CONTENT_FRESHNESS_CLASSIFICATION.md
This file extends the freshness system by adding the `monthly` tier and defining the operational process for each refresh cycle.

### PRE_RULES.md / POST_CHECKS.md / REAUDIT.md
After any page update, run the existing POST_CHECKS and REAUDIT against the updated page. The update is not complete until the page passes reaudit.

---

## Verification Command

After completing a page update, run this self-check:

```
For each section of the page, answer:
1. Does this section reference any specific model, benchmark, tool, GPU, or version?
2. If yes, is the reference current as of today?
3. Does the reference match what the lead paragraph and Key Takeaways say?

If any answer is "no" → the update is incomplete. Fix before marking done.
```
