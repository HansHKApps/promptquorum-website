---
name: geo-meta-optimizer
description: Advanced GEO/AEO/SEO meta optimization engine for PromptQuorum articles. Maximizes CTR, adapts to search intent, integrates GSC feedback loops, and deploys multi-variant title strategies across 5 languages (en, de, fr, ja, zh). Built for 2026 SERPs, AI Overviews, and aggressive ranking growth. Now includes audit-only mode, batch analysis, body-title-query coherence checking, and model-version-update detection.
---

# GEO Meta Optimizer Skill (2026 – Adaptive CTR Engine + Coherence Checker)

## Usage

### Optimization mode (write changes — original behavior)
`/geo-meta-optimizer <URL>`

Examples:
- `/geo-meta-optimizer https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm`
- `/geo-meta-optimizer https://www.promptquorum.com/local-llms/best-budget-gpus-local-llm?lang=de`

### Audit-only mode (analyze, no changes) — NEW
`/geo-meta-optimizer <URL> --audit`
`/geo-meta-optimizer <URL> --check-coherence`

### Batch mode (multiple pages) — NEW
`/geo-meta-optimizer --batch <category|slug-pattern>`
`/geo-meta-optimizer --batch /local-llms/ --audit`
`/geo-meta-optimizer --batch all --audit --top-impressions 50`

### Model version update mode — NEW
`/geo-meta-optimizer --model-update --before "Qwen 2.5" --after "Qwen 3" --audit`

---

# SYSTEM OVERVIEW

Transforms static SEO metadata into a **dynamic, intent-aware CTR optimization system** that:
- Adapts to SERP intent
- Generates multiple title variants
- Injects high-value entities
- Uses real query data (GSC)
- Optimizes for both Google + AI Overviews
- **NEW:** Checks body + title + query coherence (not just title vs query)
- **NEW:** Runs in audit-only mode to find systematic issues without changing anything
- **NEW:** Batch-analyzes multiple pages to find drift patterns across the site
- **NEW:** Detects model-version drift (body updated, title still on old version, or vice versa)

---

# MODES — DECIDE FIRST WHICH MODE TO RUN

Before any execution, parse the command flags:

| Flag combination | Mode | What it does |
|---|---|---|
| `<URL>` (no flag) | **Optimization** | Original behavior — full pipeline with writes |
| `<URL> --audit` or `--check-coherence` | **Single-page audit** | Run full diagnosis, output report, make NO changes |
| `--batch <pattern>` | **Batch optimization** | Run full pipeline on multiple pages (asks confirmation before writes) |
| `--batch <pattern> --audit` | **Batch audit** | Diagnose multiple pages, output systemic patterns, NO changes |
| `--model-update --before X --after Y` | **Model-version drift scan** | Find all pages where model version X is mentioned but title says Y (or vice versa) |
| `--model-update --before X --after Y --audit` | **Model-version drift report** | Same as above, audit-only output |

**In any audit mode, the skill must NEVER write to content.ts, NEVER call `npm run seo:log`, NEVER modify the changelog. Output report only.**

---

# EXECUTION PIPELINE (Optimization Mode — original behavior, unchanged)

## 0. Change History Lookup (ALWAYS FIRST — before any analysis)

Before doing anything else, read `src/data/seo-changelog.json` and filter entries where `entry.slug` matches the canonical URL path of the article being optimized (e.g. `/prompt-engineering/prompt-version-control-workflows` or `/local-llms/how-to-install-ollama`).

**This is a full change history database — every past change is stored, not just the last one.**

Display the history in this format:

```
📋 Change History — /prompt-engineering/[slug]

[If no entries found]:
  No previous optimizations on record. This is the first time.

[If entries exist — show ALL entries, most recent first]:
  #3 — 2026-05-12
      seoTitle:        "Old Title" → "New Title" (52 chars)
      metaDescription: "Old desc…" → "New desc…" (148 chars)
      Reason: CTR optimization — position 8.2, 3,400 impressions
      Baseline: pos 8.2 | 3,400 impr | 12 clicks | CTR 0.35%

  #2 — 2026-04-28
      seoTitle:        "Even Older Title" → "Old Title"
      Reason: (none recorded)

  #1 — 2026-04-15
      metaDescription: "Original desc" → "Previous desc"
      Reason: First optimization

Total changes recorded: 3 | First optimized: 2026-04-15 | Last optimized: 2026-05-12
```

Then ask:

> **Continue with optimization?** (yes / no)

- `yes` → proceed to Step 1
- `no` → stop here

In **audit mode**, this question is replaced with: "Continue with audit?" — the difference being audit never reaches Step 13/14 (write/log steps).

---

## 1. URL Parsing & Context Detection
- Identify:
  - Content type (Local LLMs, GPU/Hardware, Prompt Engineering, Comparison, Tool)
  - Target keyword cluster
  - Language (en, de, fr, ja, zh)
  - Funnel stage (informational, commercial, comparison, tool)

---

## 2. Current State Audit
Extract:
- `seoTitle`
- `metaDescription`
- `faqSchema`

**NEW — also extract for coherence checking (Step 12 uses these):**
- H1 (may differ from seoTitle)
- og:title and og:description
- twitter:title and twitter:description
- Schema.org `headline` and `description`
- **Article body as plain text** (strip MDX/JSX, preserve H2/H3 section headers)
- **Article structure**: list of H2 sections with first 200 chars of each
- **Entity inventory**: extract model names, model versions, hardware names, tool names mentioned in body

Evaluate:
- Missing year (2026)
- Weak CTR triggers
- No specificity (no models, GPUs, tools)
- Generic phrasing
- No emotional hooks
- No differentiation

---

## 3. SERP & Competitor Analysis
Analyze:
- Top-ranking titles/descriptions
- SERP structure (listicles, comparisons, guides)
- Dominant keyword patterns
- Use of:
  - numbers
  - years
  - benchmarks
  - model names

Extract:
- Winning CTR patterns
- Content gaps

---

## 3.5 Search Intent Classification (CRITICAL)
Classify dominant SERP intent:

- Informational → learning / explanation
- Commercial → "best", "top", buying decisions
- Comparison → "X vs Y"
- Tool → calculators, configs

Then:
👉 Map to correct **title angle strategy**

---

## 4. GSC Query Data (BLOCKING — do not proceed without this)

**STOP here.** Do not generate any title variants or meta descriptions until GSC query data for this URL is available.

### Input options for GSC data

**Option A — User paste (manual):**

> "Please paste the top 10 queries for this page from GSC:  
> **Performance → Pages → [this URL] → Queries tab**  
> (impression count + position per query is enough)"

**Option B — Excel file (preferred for batch and audit modes):**

If `/data/gsc-exports/` or similar directory exists with recent GSC export files (e.g. `*.xlsx`), read the most recent file matching the URL. Look for sheets `Queries` and filter rows where the page matches.

**Option C — Cached GSC data (NEW):**

If `src/data/gsc-cache.json` exists, look up the URL there. This is populated by a separate GSC fetch script (not part of this skill). If cache is more than 7 days old, warn the user and ask whether to proceed.

**Wait for response. Do not skip. Do not proceed with "intent-based generation" or keyword research as a fallback.**

Once data is received:
- Identify high-impression / low-CTR queries → these go in `seoTitle` and `metaDescription`
- Identify long-tail queries → these go in FAQ schema
- Use exact query wording where possible — this is real search language

**NEW — extract for Step 12 (coherence check):**
- For each top-10 query, identify the **key terms** (model names, version numbers, hardware specs, decision verbs)
- Categorize each query by **intent**: informational / decision / comparison / how-to / version-specific

👉 This replaces guessing with real data. Skipping it means optimizing for the wrong queries.

---

## 5. CTR Pattern Engine (Title Generation Core)

Generate **3–5 title variants per language**:

### Title Types:
1. **SEO-safe**
2. **Aggressive CTR**
3. **Curiosity-driven**
4. **Authority-driven**
5. **Contrarian**

### Pattern Library:
- "Best [X] for [Y] (2026): [Winner]"
- "[X] Still Dominates in 2026 – Here's Why"
- "Don't Buy [X] Before Reading This (2026 Guide)"
- "[Number] Tested: The Best [X] for [Y]"
- "[X] vs [Y] (2026): The Truth"

### Rules:
- 48–60 characters
- Front-load keyword + benefit
- Include "2026"
- Emotion + specificity
- Mobile-first readability

**Audit mode: skip this step. Don't generate variants. Only diagnose what's wrong with the current title.**

---

## 6. Entity Injection Layer (SEO + GEO Boost)

MANDATORY inclusion:

- GPUs (e.g., RTX 3060, RTX 4090)
- Models (Llama, Qwen, Mistral)
- Tools (Ollama, LM Studio)

Apply to:
- Title (if natural)
- Description (always)

👉 Boosts:
- topical authority
- long-tail ranking
- AI Overview citation likelihood

**Audit mode: report what entities are missing, don't inject.**

---

## 7. Meta Description Optimization

Length: 140–158 characters

Structure:
1. Immediate answer
2. Key benefit
3. Differentiator (tests, benchmarks, tool)
4. CTA

Include:
- "2026"
- Specific entities
- Real-world signals

Example structure:
"Best GPU for local LLMs in 2026? RTX 3060 still leads. Tested with Llama & Ollama. See benchmarks, VRAM needs & real setups."

**Audit mode: report what's wrong with current meta description, don't rewrite.**

---

## 8. FAQ Schema (AEO-Optimized)

Generate: 12–20 questions

### Tiering Strategy:

**Tier 1: Featured Snippet Targets**
- "How much VRAM for 7B model?"
- "Can RTX 3060 run LLM?"

**Tier 2: Comparison Queries**
- "RTX 3060 vs 4060 for LLMs?"

**Tier 3: Objections & Decisions**
- "Is local LLM worth it in 2026?"
- "Is 8GB VRAM enough?"

### Rules:
- Short, extractable answers
- Fact-based
- Structured for AI parsing

**Audit mode: report whether FAQ schema exists and covers top GSC queries, don't generate new ones.**

---

## 9. AEO Defense Layer (Anti-AI-Overview Strategy)

Enhance metadata with:
- "Tested setups"
- "Real benchmarks"
- "Measured performance"

Use phrasing:
- "We tested…"
- "Based on real runs…"
- "Across multiple configs…"

👉 Increases likelihood of:
- being cited
- surviving AI summaries

---

## 10. Language-Specific CTR Adaptation

Each language uses different psychology:

- 🇩🇪 German → precise, factual, performance-driven
- 🇫🇷 French → editorial, slightly softer tone
- 🇯🇵 Japanese → neutral, trust-based
- 🇨🇳 Chinese → authority + performance focus

Adapt:
- tone
- power words
- CTA style

---

## 11. Internal Linking Hooks (Hidden SEO Boost)

Generate 2–3 contextual internal links:

Examples:
- "VRAM Calculator"
- "Best Local LLMs 2026"
- "Ollama Setup Guide"

Purpose:
- increase dwell time
- strengthen clusters
- improve rankings

---

## 12. Body-Title-Query Coherence Check (EXPANDED — was Expectation Alignment Validator)

**This is the section that catches the systemic drift problem.**

The original validator only checked "does title promise match content?" — too thin. Replace with full three-way coherence diagnosis.

### Step 12.1 — Body coverage scoring

For each of the top 10 GSC queries (from Step 4) and the highest-impression zero-click queries, check whether the article body covers the query topic.

Compare query key terms against the article body extracted in Step 2.

Score per query:

| Score | Meaning |
|---|---|
| `full` | All key terms present in a dedicated H2/H3 section with >100 words of relevant content |
| `partial` | Key terms present across body but no dedicated section, or one section with <100 words |
| `mentioned-only` | Some key terms appear briefly (e.g., one sentence) without depth |
| `absent` | Most key terms not found in body |

### Step 12.2 — Title alignment scoring

For each top query, compare query key terms and query intent against the current title and meta description.

Score per query:

| Score | Meaning |
|---|---|
| `aligned` | Title contains query key terms + matches query intent (informational/decision/comparison/how-to) |
| `partial` | Title contains some terms or matches intent partially |
| `misaligned` | Title misses key terms OR mismatches intent (e.g., user wants "how to choose", title says "explained") |

### Step 12.3 — Diagnosis

Combine coverage + alignment into one of these diagnosis types:

| Body Coverage | Title Alignment | Diagnosis | Action recommended |
|---|---|---|---|
| Full | Aligned | **D. In sync** | No change needed |
| Full | Misaligned | **A. Body ahead of title** | Title/meta rewrite only |
| Partial | Aligned | **B1. Title ahead of body (close)** | Expand body section + minor title tune |
| Partial | Misaligned | **C. Both drifted** | Full coherence rewrite |
| Absent | Aligned | **B2. Title ahead of body (large)** | Add new body section OR remove title promise |
| Absent | Misaligned | **E. Wrong page ranking** | Suggest dedicated new page OR demote query expectations |
| Mentioned-only | Any | **B3. Light coverage gap** | Decide: expand body or remove from title scope |

### Step 12.4 — Model-version drift sub-check

This is a special case of Diagnosis C. Run this check on every page during audit:

For each model name found in body (Qwen, Llama, Mistral, DeepSeek, Phi, Gemma):
- Extract version numbers mentioned in body (e.g., "Qwen 3.6", "Llama 4 Scout")
- Extract version numbers mentioned in title and meta
- Extract version numbers in top GSC queries

Flag drift when:
- Body mentions version X but title shows version Y (where Y > X by major version) → **body is behind, queries probably hit the new version**
- Body mentions version X but title shows version Y (where Y < X by major version) → **title is behind, queries may still hit the old version**
- Top queries mention version Z that's missing from both body and title → **page is ranking for a version it doesn't cover**

### Step 12.5 — Apply GEO_WRITING_GUIDELINES.md rules

Before outputting any suggestion, validate against the rules in `GEO_WRITING_GUIDELINES.md` at the repo root.

Specifically validate:
- Rule 2d (title includes year)
- Rule 4 (entity naming standards — exact model names, not paraphrased)
- Rule 22 (answer-first opener)
- Rule 33 (CTR-first opening block)
- Rule 34 (multilingual title calibration)
- Rule 35 (SERP differentiation)
- Rule 36 (first screen must answer + decide)

If a suggested change would violate a GEO rule, the skill must either fix the violation or flag it for manual review.

### Step 12.6 — Output coherence report (in any mode)

For optimization mode: include the diagnosis in the change set so writes happen coherently (body + title together, not separately).

For audit mode: this is the final output. No writes happen.

Per page, produce:

```
🔍 Coherence Diagnosis — /[slug]

Diagnosis: [type letter + name]
Confidence: [high / medium / low]

Current state:
  H1:        "[current H1]"
  Title:     "[current seoTitle]"
  Meta desc: "[current metaDescription]"
  Body covers (in depth): [list of topics with full coverage]
  Body mentions (lightly): [list of topics with partial/mentioned-only coverage]
  Body missing: [list of topics absent that queries indicate users want]

Top GSC queries vs coverage:
  1. "[query]" — [impressions] imps, pos [X], [Y] clicks
     Body coverage: [full/partial/mentioned-only/absent]
     Title alignment: [aligned/partial/misaligned]
  2. ...

Recommended changes:
  
  [If optimization mode and diagnosis is A]: 
  → Title rewrite only (body already covers)
  
  [If optimization mode and diagnosis is B/C]:
  → Title change: "[old]" → "[new]"
  → Body change: Add new section "[heading]" after "[existing section]" with content:
    ```markdown
    [full markdown of new section]
    ```
  
  [If diagnosis is E]:
  → No automatic fix. Manual decision needed:
    Option 1: Create dedicated page at /[suggested-slug]
    Option 2: Adjust title to reduce ranking for misaligned queries

GEO rule compliance check:
  ✅ Rule 2d (year in title)
  ✅ Rule 4 (entity naming)
  ⚠️ Rule 36 (first screen) — new section is below fold (acceptable if secondary)
  ...

Estimated traffic impact:
  Query "[query name]": [imps] × [target CTR]% = [estimated clicks/month]
  Total: [sum] clicks/month
```

---

## 13. Output Format

### Show:
- Current vs Proposed
- 3–5 title variants
- Final recommended version
- Meta description
- FAQ schema
- Language variants
- **Coherence diagnosis** (from Step 12)
- **Body changes if needed** (from Step 12)

### Include:
- CTR rationale
- Intent alignment explanation
- **Body coverage analysis**
- **GEO rule compliance results**

**Audit mode: STOP here. Output the report. Do NOT proceed to Step 14.**

---

## 14. Implementation (Optimization mode only)

- Apply changes across all languages
- Ensure consistency
- **If diagnosis was B/C/E from Step 12: apply body changes alongside title changes in the same commit**

### Step 14.5 — Auto-Log to Changelog (MANDATORY after implementing)

After successfully writing changes to the article file, run `npm run seo:log` for each changed field.

**Build the command from the actual old/new values you just wrote:**

```bash
npm run seo:log -- \
  --slug "/[content-type]/[url-slug]" \
  --field seoTitle \
  --old "[exact previous seoTitle from Step 2 audit]" \
  --new "[exact new seoTitle you just wrote]" \
  --field metaDescription \
  --old "[exact previous metaDescription]" \
  --new "[exact new metaDescription]" \
  --reason "geo-meta-optimizer: [brief reason, e.g. CTR optimization, entity injection, intent alignment, coherence-fix-diagnosis-C]"
```

**Rules:**
- `--slug` is the canonical URL path WITHOUT `?lang=XX` — the same slug used in the changelog (e.g. `/prompt-engineering/prompt-version-control-workflows`)
- Only include `--field/--old/--new` for fields that actually changed (skip unchanged fields)
- `--reason` should be a one-line summary of why the change was made. **NEW:** if Step 12 diagnosis triggered the change, include the diagnosis code (e.g., "coherence-C-fix").
- If GSC baseline data is available, add those flags too:
  ```bash
  --position [X] --impressions [N] --clicks [M] --period "[date range]"
  ```
- Run `node scripts/generate-seo-registry.mjs` after logging to update the registry snapshot
- Confirm with: `✓ Change logged to src/data/seo-changelog.json`

### Generate clean git commit:
`feat(seo): optimize meta titles & descriptions for [slug] with intent-based CTR strategy (2026 update)`

**For coherence-fix commits:**
`feat(seo+content): coherence fix [diagnosis-code] for [slug] — body section added + title rewrite`

---

# BATCH MODE (NEW)

`/geo-meta-optimizer --batch <pattern> [--audit]`

Runs the pipeline on multiple pages and identifies systematic issues.

## Batch mode inputs

- `--batch /local-llms/` → all pages under /local-llms/
- `--batch /local-llms/best-` → all pages starting with /local-llms/best-
- `--batch all` → all pages in content directory
- `--top-impressions 50` → only run on top 50 pages by total impressions
- `--top-zero-click 30` → only run on top 30 pages with high impressions but zero clicks
- `--audit` → no writes, output report only

## Batch mode execution

For each page in the batch:
1. Run Step 0 (change history) silently
2. Run Steps 1, 2 (URL parsing + current state, including body extraction)
3. Skip Step 3 (SERP analysis takes too long for batch — only run in single-page mode)
4. Run Step 3.5 (intent classification)
5. Run Step 4 (GSC data — must be from cached file in batch mode, no user prompts)
6. **Run Step 12 (coherence check) — this is the core of batch mode**
7. Skip Steps 5-11 (generation steps) in audit mode
8. Output per-page diagnosis + aggregated report

## Batch mode output

```
🔍 Batch Coherence Audit — [pattern]
Run date: 2026-05-17
Pages analyzed: 47

Diagnosis distribution:
  D. In sync:                    12 pages (26%)
  A. Body ahead of title:         8 pages (17%) — title rewrites recommended
  B1. Title ahead of body (close): 6 pages (13%) — body expansion recommended
  B2. Title ahead of body (large): 4 pages (9%)  — body section addition recommended
  B3. Light coverage gap:         5 pages (11%) — review needed
  C. Both drifted:                7 pages (15%) — full rewrite recommended
  E. Wrong page ranking:          5 pages (11%) — manual decision needed

Highest-impact pages (sorted by estimated traffic lift):

  #1 /local-llms/qwen-vs-llama-vs-mistral
     Diagnosis: C. Both drifted
     Top query: "mistral small 24b vs qwen 2.5 14b vs llama 3.1 8b benchmarks"
     9,351 imps × est 3% CTR = ~280 clicks/month potential

  #2 /local-llms/llm-quantization-explained
     Diagnosis: A. Body ahead of title
     Top query: "how to choose quantization level llm vram requirements 6gb"
     6,736 imps × est 5% CTR = ~340 clicks/month potential

  ...

Systemic patterns detected:
  - 7 pages have model version drift (body updated to current models, titles still on legacy)
    → Run: /geo-meta-optimizer --model-update --before "Qwen 2.5" --after "Qwen 3" --audit
  
  - 4 pages have title intent mismatch (body answers "how to choose", title says "explained")
    → Pattern: explanatory titles on decision content
  
  - 3 pages rank for hardware queries (RTX 3060, 4090) but title is generic
    → Entity injection needed in titles

Recommended action order:
  1. Fix Diagnosis A pages first (title rewrite only, lowest risk, immediate impact)
  2. Fix Diagnosis C pages second (highest impact but require body + title together)
  3. Review Diagnosis E pages with Hans (manual decisions)
  4. Defer Diagnosis B1/B3 to monthly refresh

Report saved to: /reports/coherence-audit-2026-05-17.md
```

## Batch mode constraints

- **Batch + non-audit mode requires explicit confirmation per page.** Even in batch optimization mode, the skill asks for confirmation before writing each page's changes. Never blast 47 pages without review.
- **Batch audit mode is safe to run any time.** No writes, no API calls beyond reading files.
- **Estimated runtime:** ~30 seconds per page in audit mode. A 50-page batch = ~25 minutes.

---

# MODEL-VERSION-UPDATE MODE (NEW)

`/geo-meta-optimizer --model-update --before "X" --after "Y" [--audit]`

Detects drift caused by model version updates. The scenario Hans described: body gets updated to new model versions, but titles, meta, og tags don't follow.

## What it does

1. Scan all article body content for mentions of model version `X` (old) and `Y` (new)
2. Scan all titles, meta descriptions, og titles for the same
3. Classify each page:

| Body mentions | Title mentions | Status |
|---|---|---|
| X only | X only | **Not updated yet** (consistent on old version) |
| X only | Y only | **Title ahead** (rare — usually means typo in title or body is stale) |
| Y only | Y only | **Fully updated** |
| Y only | X only | **Body updated, title stale** ← the common drift |
| Both X and Y | X only | **Mixed body, title stale** ← needs decision: legacy bridge or full migration |
| Both X and Y | Y only | **Mixed body, title current** ← may be intentional (transition page) |

## Output

```
🔄 Model Version Update Scan: Qwen 2.5 → Qwen 3

Scanned: 47 pages with model mentions

Status distribution:
  Fully updated (Y only):           21 pages
  Body updated, title stale:         8 pages ← FIX THESE
  Mixed body (X+Y), title stale:    11 pages ← FIX THESE or bridge
  Not updated yet (X only):          4 pages ← UPDATE BODY FIRST
  Title ahead (rare):                1 page  ← INVESTIGATE
  Other:                             2 pages

Pages needing immediate title update:

  /local-llms/best-local-llms-for-coding
    Body: mentions "Qwen 3.6 27B"
    Title: "Best Local LLMs for Coding 2026 — Qwen 2.5 vs DeepSeek vs Phi"
    → Suggested new title: "Best Local LLMs for Coding 2026 — Qwen 3.6 vs DeepSeek vs Phi"

  /local-llms/best-budget-gpus-local-llm  
    Body: mentions "Llama 4 Scout"
    Title: "Best Budget GPU for Llama 3.1 8B (2026)"
    → Suggested new title: "Best Budget GPU for Llama 4 Scout & 8B Models (2026)"

  ... [8 pages total]

Pages with mixed body (legacy bridge decision needed):

  /local-llms/qwen-vs-llama-vs-mistral
    Body: covers Qwen 3.6 in depth, mentions Qwen 2.5 briefly
    Title: "Qwen 3 vs Llama 4 vs Mistral 2026"
    Top GSC query: "mistral small 24b vs qwen 2.5 14b vs llama 3.1 8b benchmarks" (9,351 imps, 0 clicks)
    → Decision needed:
      Option A: Drop legacy from body (lose 9K monthly imps but cleaner page)
      Option B: Expand legacy section + add bridge to title (recommended)
      Option C: Split into two pages (legacy + current)
    → If Option B: title becomes "Qwen 3 vs Llama 4 vs Mistral Small 24B: 2026 Benchmarks"

  ... [11 pages total]
```

## Model-version-update mode constraints

- Audit mode by default unless `--apply` is passed
- Even with `--apply`, asks per-page confirmation
- Logs reason as "model-version-update: X → Y" in seo-changelog.json

---

# AUDIT MODE — KEY RULES

**Audit mode is the safety net.** Use it freely. It changes nothing.

When `--audit` or `--check-coherence` is set:
- ❌ NEVER write to any content.ts file
- ❌ NEVER call `npm run seo:log`
- ❌ NEVER modify `src/data/seo-changelog.json`
- ❌ NEVER make a git commit
- ✅ Save reports to `/reports/` directory (read-only data, OK to create)
- ✅ Output diagnoses, suggestions, and impact estimates
- ✅ Show what WOULD change without doing it

The skill must self-enforce this. If audit mode is set and any write attempt is made, abort and warn.

---

# CORE PRINCIPLES

- CTR > rankings alone
- Intent matching beats keyword stuffing
- Specificity beats generalization
- Real data beats assumptions
- Multi-variant testing beats single guesses
- Entities drive modern SEO + GEO
- AI Overviews reward structured, test-based content
- **NEW: Body, title, and queries must stay coherent — drift is the silent killer**
- **NEW: When in doubt, audit before changing. Audit mode is free; bad rewrites cost rankings.**
- **NEW: Body updates and title updates must happen together when model versions change**

---

# WHEN TO USE WHICH MODE

| Situation | Mode to run |
|---|---|
| One page is underperforming, want to fix it | `/geo-meta-optimizer <URL>` (optimization mode) |
| Suspect a page has issues but not sure | `/geo-meta-optimizer <URL> --audit` |
| Monthly health check across the site | `/geo-meta-optimizer --batch all --audit --top-impressions 100` |
| After updating articles to new model versions | `/geo-meta-optimizer --model-update --before "X" --after "Y" --audit` |
| Want to find systematic patterns | `/geo-meta-optimizer --batch <category> --audit` |
| Onboarding new pages to optimization | `/geo-meta-optimizer <URL>` (optimization mode) |
| Pre-commit check after content edits | `/geo-meta-optimizer <URL> --audit` (warn-only) |

---

# RESULT

A fully adaptive GEO/SEO system that:
- Maximizes CTR
- Aligns with real user intent
- Competes with AI Overviews
- Scales across 5 languages
- Continuously improves via feedback loops
- **Catches body-title-query drift before it costs traffic**
- **Runs safely in audit mode for systematic site checks**
- **Detects model-version drift across the whole site**
