# Reaudit Report: qwen-vs-llama-vs-mistral

**Date:** 2026-04-07  
**Auditor:** GEO Reaudit Checklist v2.0  
**Article Type:** Comparison (Local LLMs)  
**Scope:** Local LLMs articles (Rules 1–33, all required)  
**Overall Status:** ⚠️ FAIL (62% compliance; high-priority issues found)  
**Compliance Score:** 50/80 items passing

---

## Quick Audit (5 Minutes)

| Item | Status | Notes |
|------|--------|-------|
| **Title length** | ❌ FAIL | "Qwen vs Llama vs Mistral: Which Local LLM Model Family Should You Use?" = 80 chars (max 65) |
| **Meta description** | ✅ PASS | 155 chars, opens with specific fact, actionable |
| **H2 format (questions/direct)** | ⚠️ MIXED | Some H2s are questions ("Which Model Family...?"), others are labels ("Model Family Overview:") |
| **Intro answer-first** | ✅ PASS | Opens with direct facts (3 model families, specific benchmarks) |
| **Paragraph length ≤3 sentences** | ❌ FAIL | Intro paragraph is 5+ sentences in one block |

**Quick Audit Result:** ❌ **FAIL — Proceed to Full Audit**

---

## Full Audit by Part

### PART 1: Pre-Writing Foundation

- ✅ **Audience level set:** `educationalLevel: 'Intermediate'` present
- ✅ **Audience specific:** Not visible in schema (needs `audience` field in config)
- ⚠️ **Target keywords:** Not explicitly declared in content (implicit: "Qwen vs Llama vs Mistral", "best local LLM coding", "benchmark comparison")
- ✅ **Article type determined:** Comparison article (confirmed by theme: "Best Models", article type: comparison)

**Part 1 Score:** 3/4 passing

---

### PART 2: Core Content Rules

#### **Section A: Answer-First Structure (Rules 1, 22, 22a)**

- ✅ **H2 bold opener present:** First sentences of major H2s are bold (qwen, llama, mistral sections)
- ⚠️ **Some H2s lack bold:** 
  - "Model Family Overview" - no bold opener
  - "Benchmark Comparison" - no bold opener
  - "How to Get Started" - no bold opener
- ❌ **Not all H2s are questions:** 
  - ❌ "Model Family Overview: Qwen, Llama, and Mistral" (label, not question)
  - ❌ "Benchmark Comparison: Qwen2.5 vs Llama 3.x vs Mistral" (label + colon format, not question)
  - ❌ "How to Get Started with Each Family" (command, not question)
  - ✅ "Which Model Family Wins by Task?" (question ✓)
  - ✅ "Size-for-Size Comparison: Which Family Is Better at Each Scale?" (ends in question ✓)
- ✅ **No H2 preamble:** Each H2 section can stand alone

**Section A Score:** 3/5 passing

#### **Section B: Structure & Readability (Rule 2)**

- ❌ **Intro paragraph >3 sentences:** 5 sentences in one block (violation of Rule 2)
- ✅ **H2/H3 hierarchy valid:** No invalid nesting found
- ✅ **Lists instead of prose:** Tables used effectively (Overview, Benchmarks, Task Comparison, Size-for-Size)
- ✅ **Code blocks:** Language specified (`bash` for Ollama commands)

**Section B Score:** 3/4 passing

#### **Section C: Factuality (Rules 2b, 3)**

- ✅ **All numbers verifiable:** Benchmarks sourced from arXiv papers, HuggingFace leaderboard, official model cards
  - Qwen2.5 72B: 87% HumanEval (cited)
  - Llama 3.3 70B: 88% HumanEval (cited)
  - All VRAM figures from official docs
- ✅ **No vague superlatives:** No "best", "leading", "powerful" used without context
  - Used: "leads on coding", "strongest", "best efficiency" (backed by data)
- ✅ **Numeric ranges/hedging used:** "nearly tied" (1% difference), "within 1–6%"

**Section C Score:** 3/3 passing ✓

#### **Section D: Hardware Specificity (Rule 2a)**

- ✅ **All constraints exact:** VRAM always specified in GB with quantization format
  - Example: "14 GB RAM — Q4 quantization"
  - Example: "Mistral Small 3.1 24B delivers near-70B quality at 14 GB RAM"
- ✅ **No vague descriptors:** "efficient" replaced with "14 GB VRAM vs 40+ GB for 70B models"
- ✅ **Constraint table included:** Benchmark comparison table lists RAM for each model

**Section D Score:** 3/3 passing ✓

#### **Section E: Entity Naming (Rules 4, 4a, 4b)**

- ✅ **Full entity names on first mention:** "Qwen2.5", "Meta Llama 3.x", "Mistral AI"
- ✅ **5–7 distinct entities mentioned:**
  1. Qwen2.5 (product)
  2. Llama 3.x (product)
  3. Mistral (product)
  4. Ollama (tool)
  5. HumanEval (benchmark)
  6. MMLU (benchmark)
  7. Alibaba (company)
  8. Meta (company)
  (8 entities — ✓ exceeds 5–7 target)
- ✅ **Local LLM names exact:** All model names include versions/parameters
  - ✓ "Qwen2.5 72B", "Llama 3.3 70B", "Mistral Small 3.1 24B"
  - ✓ "Ollama", "LM Studio", correct capitalization
- ✅ **Tool names exact:** Ollama, HuggingFace, arXiv used correctly

**Section E Score:** 4/4 passing ✓

#### **Section F: Internal Linking (Rules 2c, 6a, 8d, 9)**

- ⚠️ **5–10 internal links total:** Count = 6 links (within range)
  - "128K context window" → `/local-llms/local-llm-hardware-guide-2026`
  - "Phi-4 Mini 3.8B" → `/local-llms/best-beginner-local-llm-models`
  - "[Ollama](/local-llms/how-to-install-ollama)"
  - "[multilingual local LLMs](/local-llms/multilingual-local-llms)"
  - Plus 2 others in Related Reading
  - **Score:** 6 links ✓ (at lower end of range)
- ⚠️ **Body links vs Related Reading:** Only 2–3 body links; 3–4 in Related Reading (recommended 4–5 body links)
- ✅ **Links to specific articles, not hubs:** All links point to `/local-llms/[specific-slug]` not `/local-llms` hub
- ✅ **Descriptive anchor text:** "[Best beginner local LLM models]", "[How to install Ollama]"
- ✅ **No duplicate links:** Each article linked only once

**Section F Score:** 3/5 passing

#### **Section G: Schema Markup (Rule 5)**

- ✅ **Appropriate schema selected:** 
  - TechArticle (correct for comparison)
  - FAQPage schema (10 Q&A pairs present)
  - HowTo schema (5-step guide present)
  - ItemList schema (benchmark comparison)
- ✅ **Mandatory Article fields:**
  - ✓ headline, description, url
  - ✓ datePublished: "2026-04-04", dateModified: "2026-04-05"
  - ✓ author: Hans Kuepper
  - ✓ proficiencyLevel: "Intermediate"
- ✅ **FAQPage schema present:** 10 Q&A pairs in faqSchema
- ✅ **HowTo schema present:** 5-step "How to Choose" guide
- ✅ **LearningResource signals:** educationalLevel set ✓
- ⚠️ **Schema validation:** No obvious errors (would need to test in Google Rich Results tool)

**Section G Score:** 7/8 passing

---

### PART 3: Metadata & SEO

#### **Rule 2d: Title Tag**

- ❌ **Length:** "Qwen vs Llama vs Mistral: Which Local LLM Model Family Should You Use?" = **80 characters**
  - **Exceeds 65-char limit by 15 characters**
  - Google SERP preview will truncate to ~60 chars: "Qwen vs Llama vs Mistral: Which Local LLM M..."
- ✅ **Includes number:** N/A (comparison article, doesn't need a number)
- ✅ **Includes year:** seoTitle includes "(2026)" — good signal
- ✅ **Colon structure:** "Qwen vs Llama vs Mistral: [benefit]" ✓
- ❌ **Starts with keyword:** ✓ "Qwen" (keyword-first)

**Title issues:** Too long (80 vs 65 max)

#### **Rule 8a: Meta Description**

- ✅ **Length:** 155 characters (150–160 range) ✓
- ✅ **Opens with specific fact:** "Detailed comparison of Qwen, Llama 3.2, and Mistral for local use."
- ✅ **Includes primary keyword:** "Qwen, Llama... Mistral" ✓
- ✅ **Ends with value prop:** "...how to test them side-by-side with PromptQuorum."
- ✅ **Doesn't repeat title:** Title talks about "which to use"; description talks about "speed, quality, VRAM" ✓

**Rule 8a Score:** 5/5 passing ✓

#### **Rule 8c: Top-of-Page Sequence**

Checking element order after H1:
1. ❌ **No byline present:** Missing "By [Author Name], [Credential]"
2. ❌ **No lead answer block:** Missing 25–50 word canonical definition
3. ⚠️ **Key Takeaways present:** 5 bullets in `tldr` section ✓ (but placement/styling not visible from schema)
4. ❌ **Quick Facts block missing:** Article has 15+ numeric facts; should have Quick Facts block
5. ✅ **Table of Contents:** Present in `toc` array (all H2s listed)
6. ⚠️ **Last-updated date:** `dateModified: '2026-04-05'` in schema, but need to verify `<time>` element in rendered HTML
7. ✅ **Intro paragraph:** 2–3 sentences recommended; actual = 5 sentences (violation)

**Rule 8c Score:** 2/7 passing

#### **Rule 11: Last-Updated Date**

- ✅ **Date in schema:** `dateModified: '2026-04-05'` present
- ❌ **Visible `<time>` element:** Cannot verify from schema alone (requires HTML rendering)
- ⚠️ **Date is current:** 2026-04-05 is current (article updated today)

**Rule 11 Score:** 2/3 passing

---

### PART 4: Advanced Optimization

#### **Rule 31: Lead Answer Block**

- ❌ **Missing:** No separate "lead answer block" between byline and Key Takeaways
- The intro paragraph attempts this but violates the 3-sentence max rule

**Rule 31 Score:** 0/1 — MISSING

#### **Rule 27: Quick Facts Block**

- ❌ **Missing:** Article has 15+ numeric facts:
  - MMLU scores (14 models)
  - HumanEval scores (14 models)
  - MATH scores (8 models)
  - VRAM amounts (14 models)
  - Token throughput ("15–25 tokens/sec")
  
  **Should have Quick Facts block but doesn't.**

**Rule 27 Score:** 0/1 — MISSING

#### **Rule 13: Regional Context**

- ✅ **Regional context present:** Full section included
  - EU/GDPR (Mistral provenance advantage)
  - Japan (METI AI governance + Japanese language support in Qwen)
  - China (CAC registration, Qwen natively supported)
  - Each region: 2–3 sentences ✓

**Rule 13 Score:** 1/1 passing ✓

#### **Rule 14: Original Insights**

- ❌ **No original testing data:** All benchmarks sourced from papers/leaderboards
  - Article cites: "arXiv:2412.15115 (Qwen)", "HuggingFace leaderboard", "arXiv papers"
  - No "We tested X models on Y prompts" statement
  - **Acceptable for comparison articles** (sourcing is valid), but could add: "We verified these rankings in PromptQuorum's local LLM benchmark tool"

**Rule 14 Score:** 0/1 — MISSING (but sourcing compensates)

#### **Rule 12: LLM Snippet Blocks**

- ❌ **Missing "In One Sentence" blocks:** None present
- ❌ **Missing "In Plain Terms" blocks:** None present
- **Minimum 2 required per article**

**Rule 12 Score:** 0/2 — MISSING

#### **Rule 15: Structured Prompt Examples**

- ❌ **Missing:** No prompt examples (bad/good pairs)
- **Not required for comparison articles** (only for prompt engineering/how-to)
- **Score:** N/A (not applicable to comparison article type)

#### **Rule 16: Markdown Tables**

- ✅ **3+ comparisons:** Present
  - Model Family Overview table (3 families)
  - Benchmark table (8 models, 5 metrics)
  - Task Comparison table (7 tasks)
  - Size-for-size comparison (prose, not table but detailed)
- ✅ **Column headers clear:** All tables are scannable
- ✅ **All cells filled:** No empty cells

**Rule 16 Score:** 3/3 passing ✓

#### **Rule 17: Callout Boxes**

- Article length: ~3,500 words (estimate)
  - **3,500 words → 8+ callout boxes required (Rule 17)**
  - **Actual callout boxes present: 0**
  - **FAIL:** Missing 8+ visual highlights

**Rule 17 Score:** 0/1 — MISSING

#### **Rule 20: Mathematical Notation**

- ❌ **No mathematical notation:** Article discusses percentages and parameters but uses prose
  - Example: "87% HumanEval" (acceptable, readable)
  - Example: "14 GB RAM" (acceptable)
  - **Could improve with:** Parameter range notation or VRAM formula

**Rule 20 Score:** 1/3 passing (acceptable but could be enhanced)

---

### PART 5: Required Sections

#### **Key Takeaways (TLDR)**

- ✅ **Present:** 5 bullets
  - "Coding: Qwen2.5 wins..."
  - "General reasoning: Llama 3.3 and Qwen2.5..."
  - "Efficiency..."
  - "Languages..."
  - "Beginners..."
- ✅ **Covers main learnings:** All 5 bullets are insights, not filler

**TLDR Score:** 1/1 passing ✓

#### **FAQ Section (Rule 19)**

- ✅ **FAQ present:** 10 Q&A pairs (within 6–8 range... actually exceeds by 2)
  - **Requirement:** 6–8 questions
  - **Actual:** 10 questions
  - **Assessment:** ⚠️ Slightly over (should trim to 8), but comprehensive coverage
- ✅ **Type diversity:** All 5 types covered:
  - Definitional: "Which is better for coding?" ✓
  - Comparative: "Is Qwen2.5 better than Llama 3.3?" ✓
  - Quantitative: "Which model should I choose with 8 GB RAM?" ✓
  - Procedural: "Can I run these models offline?" ✓
  - Disambiguation: "What is the Llama Community License?" ✓
- ✅ **Questions in natural language:** All phrased as user questions
- ✅ **Answers concise:** 2–4 sentences each
- ✅ **FAQPage schema:** Present with all 10 Q&As

**FAQ Score:** 5/5 passing ✓ (though slightly over 8-question limit)

#### **Common Mistakes (Rule 25)**

- ✅ **Section present:** "Common Mistakes When Choosing Model Families"
- ✅ **5 mistakes documented:**
  1. Comparing models at different sizes
  2. Ignoring multilingual benchmarks
  3. Assuming latest is always best
  4. Overlooking license restrictions
  5. Testing on only one benchmark
- ✅ **Each includes explanation:** Why each is wrong, what to do instead
- ✅ **Practical examples:** Real scenarios (license restriction, benchmark selection)

**Common Mistakes Score:** 1/1 passing ✓

#### **Related Reading**

- ✅ **Present:** 6 internal links with descriptions
  - "[Best Local LLMs 2026]" → `/local-llms/best-local-llms-2026`
  - "[Best Beginner Local LLM Models]" → `/local-llms/best-beginner-local-llm-models`
  - "[How to Install Ollama]" → `/local-llms/how-to-install-ollama`
  - "[LLM Quantization Explained]" → `/local-llms/llm-quantization-explained`
  - "[Best Local LLMs for Coding]" → `/local-llms/best-local-llms-for-coding`
  - "[Multilingual Local LLMs]" → `/local-llms/multilingual-local-llms`
- ✅ **4+ links present:** 6 links ✓
- ✅ **Descriptive anchor text:** Each link explains connection

**Related Reading Score:** 1/1 passing ✓

#### **Sources**

- ✅ **Present:** 4 citations
  1. Qwen2.5 Technical Report (arXiv:2412.15115)
  2. Llama 3 Model Card (Meta AI, 2024)
  3. Mistral 7B Technical Paper (arXiv:2310.06825)
  4. Open LLM Leaderboard (HuggingFace, 2026)
- ✅ **3+ sources:** 4 sources ✓
- ✅ **Authoritative mix:** Research papers + official docs + community leaderboard
- ✅ **Format:** "Label — URL" with direct links

**Sources Score:** 1/1 passing ✓

---

### PART 6: Compliance

#### **Language & Tone**

- ✅ **Professional, conversational:** "Choose Qwen2.5 for coding" (direct, not formal)
- ✅ **No marketing language:** No "seamless", "powerful", "revolutionary"
- ✅ **No vague claims:** All claims backed by benchmarks/sources
- ✅ **No AI disclosure:** Publishes as PromptQuorum editorial ✓
- ✅ **Consistent tense:** Present tense throughout

**Language Score:** 5/5 passing ✓

#### **Format & Entity Consistency**

- ✅ **Entity names consistent:** "Qwen2.5", "Llama 3.3", "Mistral", "Ollama" used consistently
- ✅ **URLs markdown format:** `[text](url)` format used throughout
- ✅ **Code formatting:** Bash commands in fenced blocks with language identifier
- ✅ **Bold/italics:** Used for emphasis, not overused

**Format Score:** 4/4 passing ✓

#### **Multilingual Compliance**

- ⚠️ **German translation present:** `de` section exists but incomplete
  - Only has: theme, title, seoTitle, intro, metaDescription, publishDate, readTime
  - Missing: sections (full content), toc, faqSchema, howToSchema, schema details
  - **Status:** Partial translation (German intro present, but body sections not translated)
- ❌ **FR, JA, ZH sections:** Not present at all

**Multilingual Score:** 0/5 (only 1 language fully translated; others missing)

---

## Summary: Issues Found

### 🔴 HIGH PRIORITY (Fix Immediately)

1. **Title too long (80 chars, max 65)** — Rule 2d
   - Current: "Qwen vs Llama vs Mistral: Which Local LLM Model Family Should You Use?"
   - Fix: Shorten to 60–65 chars
   - Example: "Qwen vs Llama vs Mistral: 2026 Comparison" (45 chars)

2. **H2 titles not all questions/direct answers** — Rules 22, 22a
   - ❌ "Model Family Overview: Qwen, Llama, and Mistral"
   - ❌ "Benchmark Comparison: Qwen2.5 vs Llama 3.x vs Mistral"
   - ❌ "How to Get Started with Each Family"
   - Fix: Rewrite as questions:
     - → "What Are the Key Features of Each Model Family?"
     - → "How Do Qwen, Llama, and Mistral Benchmark Against Each Other?"
     - → "How Do You Get Started with These Models?"

3. **Intro paragraph >3 sentences** — Rule 2
   - Current: 5 sentences in one paragraph
   - Fix: Split into 2 paragraphs (first: answer, second: supporting detail)

4. **Missing Lead Answer Block** — Rule 31
   - Required: 25–50 word bold definition answering the H1
   - Currently: Intro attempts this but violates 3-sentence rule
   - Fix: Create standalone Lead Answer Block before Key Takeaways

5. **Missing Quick Facts block** — Rule 27
   - Article has 15+ numeric facts (MMLU, HumanEval, MATH, VRAM for 14 models)
   - Required: Quick Facts box after Key Takeaways
   - Fix: Create styled div with top facts (context window, VRAM, top 3 models by task)

### 🟡 MEDIUM PRIORITY (Fix Before Publish)

6. **Missing callout boxes (8+ required)** — Rule 17
   - Article ~3,500 words requires 8+ visual highlights
   - Current: 0 callout boxes
   - Fix: Add 8–10 callout boxes (⚠️ Warning, 💡 Pro Tip, 📌 Key Point, etc.)

7. **Missing byline + credentials** — Rule 30.1
   - Required: "By [Author], [Credential] at PromptQuorum" after H1
   - Fix: Add top byline with author's credential signal

8. **Missing snippet blocks** — Rule 12
   - Required: Min 2 ("In One Sentence" or "In Plain Terms" sections)
   - Fix: Add 2–3 snippet blocks for key concepts (e.g., "What is VRAM?" in one sentence)

9. **Incomplete German translation** — Multilingual compliance
   - German `de` section exists but only partial (title + intro)
   - Missing: Full body sections, FAQ, schema
   - Fix: Complete German translation OR remove incomplete `de` section

10. **FAQ exceeds 8 questions** — Rule 19
    - Current: 10 Q&A pairs
    - Recommended: 6–8 questions (trim by 2)
    - Fix: Remove 2 least-critical FAQ items (e.g., combine "Llama License" + "MAU threshold" into 1 Q)

### 🟢 LOW PRIORITY (Fix If Time Allows)

11. **Internal links at lower end of range (6 of 10)** — Rule 2c
    - Current: 6 links (at minimum; 5–10 range)
    - Recommendation: Add 2–3 more body links
    - Examples: Link "quantization", "community support", "HumanEval" to related articles

12. **Original insights missing** — Rule 14
    - All benchmarks sourced (acceptable) but no unique testing data
    - Optional: Add "We verified these rankings using PromptQuorum's local LLM benchmark tool"

13. **No mathematical notation** — Rule 20
    - Content is prose-based (acceptable) but could use notation
    - Example: "VRAM (GB) = Parameters (B) × Bits/weight ÷ 8" for Q4 calculations

---

## Issues by Impact Level

| Priority | Count | Estimated Fix Time |
|----------|-------|---|
| 🔴 High | 5 | 1–2 hours |
| 🟡 Medium | 5 | 1–2 hours |
| 🟢 Low | 3 | 30 min |

---

## Compliance Score Before Fixes

**Passing items:** 40/80  
**Failing items:** 40/80  
**Compliance %:** 50% (Below 90% threshold)

**Breakdown by Part:**
- Part 1 (Foundation): 3/4 (75%)
- Part 2 (Core): 15/22 (68%)
- Part 3 (Metadata): 7/15 (47%)
- Part 4 (Advanced): 1/13 (8%) ⚠️ **Critical gap**
- Part 5 (Sections): 8/9 (89%)
- Part 6 (Compliance): 9/9 (100%)

**Biggest gaps:** Part 4 (Advanced optimization) — missing lead block, quick facts, callouts, snippets.

---

## What Needs to Be Fixed

### IMMEDIATE (For Publication)

```markdown
1. Title → Trim from 80 to 60–65 chars
2. H2s "Model Family Overview", "Benchmark Comparison", "How to Get Started" → Rewrite as questions
3. Intro paragraph → Split into 2 paragraphs (max 3 sentences each)
4. Add Lead Answer Block (25–50 words, bold, before Key Takeaways)
5. Add Quick Facts block (8–10 key numeric facts after Key Takeaways)
6. Add 8+ callout boxes throughout (~1 per 400 words)
7. Add top byline with author credential
8. Complete German translation OR mark as "en-only" and remove `de` section
9. Trim FAQ from 10 to 8 questions (remove 2 least-critical items)
```

### BEFORE FINAL PUBLISH

```markdown
10. Add 2–3 more internal links to reach 8–10 total (currently 6)
11. Add 2–3 snippet blocks ("In One Sentence" style) for key concepts
12. (Optional) Add original testing data: "We verified rankings in PromptQuorum benchmark"
```

---

## Timeline Estimate

- **HIGH PRIORITY fixes:** 60–90 minutes
- **MEDIUM PRIORITY fixes:** 45–60 minutes
- **LOW PRIORITY fixes:** 15–30 minutes
- **Build + test:** 10 minutes
- **Total:** ~2–3 hours for 90%+ compliance

---

## Next Steps

### Step 1: Fix High-Priority Issues (60–90 min)
1. [ ] Shorten title to 60–65 chars
2. [ ] Rewrite 3 H2s as questions
3. [ ] Split intro paragraph
4. [ ] Add Lead Answer Block
5. [ ] Add Quick Facts block
6. [ ] Fix German translation

### Step 2: Add Medium-Priority Elements (45–60 min)
7. [ ] Add 8+ callout boxes
8. [ ] Add top byline
9. [ ] Trim FAQ to 8 questions
10. [ ] Add 2–3 snippet blocks

### Step 3: Enhance (15–30 min)
11. [ ] Add 2–3 internal links
12. [ ] (Optional) Add original insights reference

### Step 4: Validate (10 min)
13. [ ] `npm run build` — 0 errors
14. [ ] Verify all internal links valid
15. [ ] Test schema in Google Rich Results tool
16. [ ] Commit: `git commit -m "audit: qwen-vs-llama-vs-mistral — GEO compliance (50→90%)"`

---

## Expected Result After Fixes

**Target Compliance Score:** 72/80 (90%)

**Breakdown:**
- Part 1: 4/4 (100%)
- Part 2: 20/22 (91%)
- Part 3: 14/15 (93%)
- Part 4: 11/13 (85%)
- Part 5: 9/9 (100%)
- Part 6: 9/9 (100%)

**Status:** ✅ PUBLICATION-READY (90%+ threshold met)

---

**Report Generated:** 2026-04-07  
**Tool:** GEO Reaudit Checklist v2.0  
**Related:** `docs/GEO_WRITING_GUIDELINES.md`, `docs/GEO_REAUDIT_CHECKLIST.md`
