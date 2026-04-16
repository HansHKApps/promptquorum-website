# GEO Reaudit Checklist — Updated for Restructured Guidelines

**Version:** 2.0 | **Last Updated:** April 7, 2026 | **Related:** `docs/GEO_WRITING_GUIDELINES.md` (restructured)

This checklist is used to reaudit already-published articles against the restructured GEO Writing Guidelines (Parts 1–6). Use this when revisiting older articles that need updating or when verifying compliance of existing content.

---

## Quick Reference: Which Rules Apply?

**Use this table to determine scope BEFORE auditing:**

| Content Type | Core Rules | Schema Rules | Advanced Rules | Common Mistakes |
|---|---|---|---|---|
| **PE Articles** | All (1–33) | Required (Rule 5) | Required (17, 19, 25) | Required |
| **Hub Pages** | 1–26 | Required (Rule 5) | Optional | Optional |
| **Blog Posts** | 1–14, 21, 26 | Optional | Optional (15–20) | Optional |
| **Glossary Entries** | 1, 3, 4–4b, 8a, 11 | Optional | Skip 15–25 | Skip |
| **Local LLMs Articles** | All + Rule 4b | Required | Required | Required |

---

## Quick Audit (5 minutes per article)

Start here. If **all 5 items PASS**, article is likely compliant. If any FAIL, run Full Audit.

- [ ] **Title:** 50–65 characters, answer-first phrasing (Rule 2d)
- [ ] **Meta description:** 150–160 chars, opens with specific fact, ends with value prop (Rule 8a)
- [ ] **H2 format:** All H2s end in "?" or start with bold direct answer (Rules 1, 22, 22a)
- [ ] **Intro paragraph:** Direct answer first (2–3 sentences), no preamble (Rule 1, Section A)
- [ ] **First three paragraphs:** Each ≤3 sentences; no vague marketing language (Rules 2, 3)

**If all 5 PASS:** Score = ✅ **90%+ likely compliant** (spot-check Part 2–3 issues)
**If any FAIL:** Proceed to Full Audit below

---

## Full Audit (15–20 minutes per article)

Use this after Quick Audit fails or for comprehensive compliance review.

### PART 1: Pre-Writing Foundation (Decision Framework)

These items verify the article was scoped correctly BEFORE writing.

- [ ] **Audience level set:** `educationalLevel` field present (Beginner/Intermediate/Advanced/Technical) (Step 0, Rule 29)
- [ ] **Audience is specific:** Job role set (not "AI users") — e.g., "Developers building with LLMs" (Step 0, Rule 29)
- [ ] **Target keywords declared:** 3–5 keywords identified upfront (Rule 32)
  - Common mistake: Article drifts off-topic if keywords not set pre-write
- [ ] **Article type determined:** PE article, hub, blog, glossary, how-to, comparison? (Step 0)
  - This determines which advanced rules apply (17, 19, 25, etc.)

---

### PART 2: Core Content Rules (Consolidated by Topic)

#### **Section A: Answer-First Structure** (Rules 1, 22, 22a)

- [ ] **H2 bold opener present:** First sentence of every H2 is bold and answers the question (Rule 1)
  - ✓ "**Quantization reduces VRAM by 75% by storing weights in 4 bits instead of 16.** This enables..."
  - ✗ "When working with quantization, many things can happen..."
- [ ] **No H2 preamble:** Every H2's first 2–3 sentences can stand alone without rest of section (Rule 22a)
- [ ] **Every H2 is a question or direct answer:** (Rules 22, 22a)
  - ✓ "How Does Quantization Reduce VRAM?" or "**Q4 Quantization: Storage & Quality Tradeoffs**"
  - ✗ "Quantization Overview" or "Quantization Tips"
- [ ] **No banned H2 formats:** (Rule 22)
  - ✗ "Overview", "Key Benefits", "How It Works", "Learn More", "FAQ"
  - ✗ CTA format: "Join the Waitlist", "Get Started", "Sign Up"
  - ✗ Product jargon: "The PromptQuorum Pipeline", "Quorum Scoring"

#### **Section B: Structure & Readability** (Rule 2)

- [ ] **Paragraph length:** All paragraphs ≤3 sentences (Rule 2)
  - **How to audit:** Count sentences in longest paragraph; should be ≤3
- [ ] **H2/H3 hierarchy valid:** (Rule 2)
  - ✓ H1 (title) → H2 (major sections) → H3 (subsections) → H4 (rare)
  - ✗ H3 before first H2, multiple H1s, H4 without H3 parent
- [ ] **Lists instead of prose:** (Rule 2)
  - ✓ 3+ related items formatted as bullet/ordered list
  - ✗ "The article supports OpenAI, Google, Mistral, and others."
- [ ] **Code blocks:** Language specified and examples runnable (Rule 2)
  - ✓ ` ```python` or ` ```bash` (with language identifier)
  - ✗ ` ``` ` (no language) or raw text without fence

#### **Section C: Factuality** (Rules 2b, 3)

- [ ] **Every number is verifiable:** No invented metrics (Rule 2b)
  - Test: Can you cite where this number came from?
  - ✓ "GPT-4o costs $5/1M input tokens" (official pricing)
  - ✓ "Llama 3.2 3B requires 8GB RAM" (official spec or measured)
  - ✗ "Our testing shows 92% accuracy" (if untested)
- [ ] **No vague superlatives:** (Rule 3)
  - ✗ Banned words: "powerful", "seamless", "revolutionary", "leading", "best-in-class", "cutting-edge"
  - ✓ Replaced with specific claims: "27% faster on MMLU benchmark", "handles 128k token context"
- [ ] **Numeric ranges used when uncertain:** (Rule 2b)
  - ✓ "Detection rates typically 50–75%" (hedged, not invented)
  - ✗ "72% detection rate" (if source uncertain)

#### **Section D: Hardware & Constraint Specificity** (Rule 2a)

**When to apply:** Articles discussing VRAM, context windows, token limits, latency, API costs, or hardware requirements.
**When to skip:** Purely conceptual articles with no technical constraints.

- [ ] **All constraints use exact numbers:** (Rule 2a)
  - ✓ "7B models require 8GB VRAM at Q4 quantization"
  - ✗ "Requires good GPU memory"
- [ ] **No vague descriptors:** (Rule 2a)
  - ✗ "Large context", "Fast responses", "Efficient inference"
  - ✓ "128k token context", "500–800ms latency", "2–8 tokens/sec on CPU"
- [ ] **Constraint table included (if 3+ constraints):** (Rule 2a, Rule 16)
  - ✓ Table format: Model | Context | VRAM | Cost
  - ✗ Prose description of each constraint

#### **Section E: Entity Naming** (Rules 4, 4a, 4b)

- [ ] **Full entity names on first mention:** (Rule 4)
  - ✓ "OpenAI's GPT-4o" (first mention) → "GPT-4o" (subsequent)
  - ✗ "GPT" (vague), "Claude" (missing version when specificity matters)
- [ ] **5–7 distinct high-value entities mentioned:** (Rule 4a)
  - Entities: Products (GPT-4o, Ollama), Companies (OpenAI, Anthropic), Technical terms (Temperature, RAG), Researchers
  - Test: Count how many distinct entities are defined
- [ ] **Local LLM names exact (if applicable):** (Rule 4b)
  - ✓ "Llama 3.2 3B", "Qwen2.5 7B", "Phi-3.5 Mini"
  - ✗ "Llama", "Qwen", "Phi" (missing version/parameters)
- [ ] **Tool names exact:** (Rule 4b)
  - ✓ Ollama, LM Studio, llama.cpp, Jan AI, GPT4All (all correct capitalization)
  - ✗ "ollama", "lm studio", "llama", "jan"

#### **Section F: Internal Linking** (Rules 2c, 6a, 8d, 9)

- [ ] **5–10 internal links total:** (Rule 2c)
  - Count body links + Related Reading links
  - At least 4–5 should be in body text, 3–5 in Related Reading
- [ ] **Links embedded in body where concepts discussed:** (Rule 2c)
  - ✓ "Learn about [RAG](/local-llms/rag-explained) when you first mention RAG"
  - ✗ Links only in Related Reading section at end
- [ ] **All links point to specific articles, not hubs:** (Rule 6a)
  - ✓ `/local-llms/ollama-installation-guide` (specific article)
  - ✗ `/local-llms` (hub/category page)
- [ ] **Anchor text is descriptive:** (Rule 9, 2c)
  - ✓ "[Learn how RAG expands attack surface](/rag-security)"
  - ✗ "[click here](/rag-security)" or "[related](/rag-security)"
- [ ] **No duplicate links:** (Rule 2c)
  - Audit: Each page should be linked to only once per article
  - Exception: First mention + Related Reading can link to same page if context differs

#### **Section G: Schema Markup** (Rule 5)

- [ ] **Appropriate schema type selected:** (Rule 5)
  - ✓ Article (PE articles) + TechArticle (technical articles)
  - ✓ FAQPage (if FAQ section exists)
  - ✓ HowTo (if numbered steps exist)
  - ✓ WebPage + BreadcrumbList (hub pages)
- [ ] **Mandatory Article schema fields present:**
  - [ ] `headline` (H1 title)
  - [ ] `description` (meta description)
  - [ ] `author` with `name` and `sameAs` URL
  - [ ] `datePublished` (ISO 8601 format, e.g., "2026-04-07")
  - [ ] `dateModified` (same format, updated on revision)
- [ ] **FAQPage schema present (if FAQ section exists):** (Rule 5)
  - [ ] `mainEntity` array with Q&A pairs
  - [ ] Each Q: natural language; Each A: 2–4 sentences
- [ ] **HowTo schema present (if numbered steps exist):** (Rule 5)
  - [ ] `step` array with step-by-step instructions
- [ ] **LearningResource schema emitted:** (Rule 5, Rule 29)
  - Includes `educationalLevel` (Beginner/Intermediate/Advanced/Technical)
  - Includes `audience.audienceType` (specific job role)
- [ ] **No schema validation errors:** (Rule 5)
  - Test via: Google Rich Results Test (https://search.google.com/test/rich-results)

#### **PASS/FAIL: Comprehensive Schema Checks**

All 4 JSON-LD blocks MUST be present in `<head>` before `npm run build`. Missing any schema = automatic FAIL regardless of content quality.

| Check | How to Verify | Pass Condition | Fail Condition |
|---|---|---|---|
| **FAQPage Schema** | View source → search `"@type": "FAQPage"` | Present in `<head>` with `mainEntity` array | Missing entirely OR fewer than 8 questions |
| **TechArticle Schema** | View source → search `"@type": "TechArticle"` | Present in `<head>` with headline, datePublished, dateModified | Missing or incomplete fields |
| **ItemList Schema** | View source → search `"@type": "ItemList"` | Present IF page has comparison table; `numberOfItems` matches actual rows | Missing when table exists OR count mismatch |
| **Speakable Schema** | View source → search `"speakable"` | Present in TechArticle; targets `.article-intro` | Missing or wrong CSS selector |
| **`<time datetime>` Element** | View source → search `datetime=` | Wraps date element with valid ISO 8601 format | Missing or malformed (e.g., `datetime=""`) |
| **`className="article-intro"`** | View source → search `article-intro` | Applied to first paragraph after H1 | Missing or applied to wrong element |

**Rich Results Validation:**
- After deployment, validate at: https://search.google.com/test/rich-results
- Page MUST show: FAQ (if FAQ section exists), Article, Breadcrumbs
- ❌ FAIL if rich results test returns **0 detected items**

**Per-Schema Details:**

**FAQPage (if FAQ section exists):**
- Minimum 8 Q&A pairs in `mainEntity` array
- Each Q in natural language (e.g., "Can I quantize models myself?")
- Each A minimum 40 words or 2–3 sentences
- Match `mainEntity` questions to actual FAQ section headings

**TechArticle (always):**
- `@type`: "TechArticle"
- `headline`: Must match H1 text exactly
- `datePublished`: ISO 8601 format (e.g., "2026-04-04")
- `dateModified`: ISO 8601 format (today or last edit date)
- `author.name`: "Hans Kuepper"
- `proficiencyLevel`: "Beginner" OR "Intermediate" OR "Advanced"
- `about`: Array of 3+ topics/tools mentioned in article

**ItemList (if comparison table exists):**
- `@type`: "ItemList"
- `numberOfItems`: Must equal actual table rows
- `itemListElement`: Array with position, name, description per item
- Each item description: 2–3 sentences including specs, use case, or command

**Speakable (always):**
- `@type`: "SpeakableSpecification"
- `cssSelector`: `[".article-intro"]` (targets first paragraph after H1)
- This is the element Google/Perplexity/ChatGPT use as canonical page summary

---

### PART 3: Metadata & SEO Optimization

#### **Rule 2d: Title Tag** (50–65 characters)

- [ ] **Title length:** 50–65 characters including spaces (Rule 2d)
  - Test: Paste title into Google SERP preview tool
- [ ] **Title includes a number (preferred):** (Rule 2d)
  - ✓ "8 Ways to Reduce Hallucinations (2026)"
  - ✗ "Ways to Reduce Hallucinations"
- [ ] **Title includes year (for evergreen content):** (Rule 2d)
  - ✓ "Chain-of-Thought Prompting (2026)"
- [ ] **Colon structure (keyword: benefit):** (Rule 2d)
  - ✓ "Prompt Injection: Attack Vectors & Defenses"
  - ✗ "How to Prevent Prompt Injection" (buries technique)
- [ ] **Title starts with keyword, not "The"/"A":** (Rule 2d)
  - ✓ "Multi-Model Comparison: How to Choose"
  - ✗ "The Guide to Multi-Model Comparison"

#### **Rule 8a: Meta Description** (150–160 characters)

- [ ] **Length:** 150–160 characters (not longer) (Rule 8a)
  - Test in Google Preview tool
- [ ] **Opens with specific fact/result:** (Rule 8a)
  - ✓ "Prompt injection exploits the fact that LLMs can't distinguish instructions from user data."
  - ✗ "In this guide we explore prompt injection attacks."
- [ ] **Includes primary keyword naturally:** (Rule 8a)
  - ✓ Keyword appears in first 1–2 sentences, not forced
- [ ] **Ends with tension/gap:** (Rule 8a)
  - ✓ "...Here's how to defend.", "...The fix is simple.", "...Here's what most guides miss."
- [ ] **Does NOT repeat title:** (Rule 8a)
  - ✓ Title: "Prompt Injection (2026)" → Description: "Prompt injection exploits... Here's how to defend."
  - ✗ Title: "Prompt Injection" → Description: "Prompt injection exploits..." (repetition)
- [ ] **Does NOT start with "In this article we will...":** (Rule 8a)
  - ✗ Editorial setup wastes space

#### **Rule 8c: Top-of-Page Sequence** (Exact Order)

**Verify these elements appear in this exact sequence after H1:**

1. [ ] **Byline + credential signal** (Optional but recommended) (Rule 30.1)
   - Format: "By [Author Name], [Credential] at PromptQuorum"
2. [ ] **Lead Answer Block** (Rule 31)
   - ✓ Bold, 25–50 words, answers H1 in first 10 words
   - ✓ Standalone (readable without rest of article)
3. [ ] **Key Takeaways block** (TLDR) (Rule 8c)
   - ✓ 5–7 bullets in styled div with `class="key-takeaways"`
   - ✓ Appears before first H2
4. [ ] **Quick Facts block** (Optional, if 4+ numerical facts) (Rule 27)
   - Only if article has 4+ numeric facts (token counts, costs, VRAM, latency, %s)
5. [ ] **Table of Contents** (Rule 8c)
   - ✓ All H2 anchors listed; use single `#` not `##`
6. [ ] **Last Updated date** (Rule 11)
   - ✓ `<time datetime="2026-04-07">Last updated: April 2026</time>` element
7. [ ] **Intro paragraph** (Rule 8c)
   - ✓ 2–3 sentences max
8. [ ] **First H2 heading** (Rule 22)

#### **Rule 11: Last-Updated Date** (Visible + Semantic)

- [ ] **Date visible on page:** "Last updated: [Month Year]" (Rule 11)
- [ ] **`<time>` element with `datetime` attribute:** (Rule 11)
  - ✓ `<time datetime="2026-04-07">Last updated: April 2026</time>`
  - ✗ Plain text only
- [ ] **Date is current:** (Rule 11)
  - ✓ Updated when substantive content changes (new FAQ, rewritten section)
  - ✗ Not updated for typo fixes or formatting changes
- [ ] **`dateModified` in schema matches:** (Rule 11)
  - Schema `dateModified` should = visible date

---

### PART 4: Advanced Content Optimization

#### **Rule 31: Lead Answer Block** (Canonical Definition)

**Required:** Every article needs a 25–50 word definition that answers the H1 completely.

- [ ] **Present after byline, before Key Takeaways:** (Rule 31)
- [ ] **Format:** Bold, complete sentence(s) (Rule 31)
  - ✓ "**Prompt engineering is the practice of designing instructions (prompts) for language models to achieve specific outputs.** Effective prompt engineering reduces hallucinations and enables non-technical users to build AI applications."
- [ ] **Answers H1 in first 10 words:** (Rule 31)
  - Test: Can first 10 words of the block answer the H1 by itself?
- [ ] **Standalone and readable:** (Rule 31)
  - Could extract this block alone and it makes complete sense

#### **Rule 27: Quick Facts Block** (If 4+ Numerical Facts)

**When to include:** Only if article has 4+ numeric facts.
**When to skip:** If fewer than 4 numeric facts, omit entirely.

- [ ] **Triggered correctly:** (Rule 27)
  - Count numeric facts: token counts, costs, latency, parameters, VRAM, accuracy %
  - ✓ Include block if count ≥ 4
  - ✗ Don't include if < 4
- [ ] **Placed after Key Takeaways, before ToC:** (Rule 27)
- [ ] **Format:** Styled box with bullet points (Rule 27)
  - ✓ "**Context window:** GPT-4o: 128k tokens"
  - ✗ Prose description

#### **Rule 13: Global & Regional Perspective** (If Applicable)

**When to apply:** Articles discussing regulations, model availability, data residency, or deployment constraints.
**When to skip:** Purely conceptual topics (no geographic variation).

- [ ] **Regional context included (if applicable):** (Rule 13)
  - [ ] **EU perspective:** GDPR, data residency, Privacy Shield (if relevant)
  - [ ] **China perspective:** CAC registration, model availability (if relevant)
  - [ ] **Japan perspective:** APPI requirements, on-premises deployment (if relevant)
- [ ] **Minimum 1–2 sentences per region:** (Rule 13)
- [ ] **Focused on differences that affect reader:** (Rule 13)
  - ✓ Regulation, availability, data residency
  - ✗ General country name-dropping

#### **Rule 14: Original Insights & Testing** (Min 1 Data Point)

**When to include:** Most articles benefit from this.
**When to skip:** Glossary entries, purely conceptual articles.

- [ ] **At least 1 original data point:** (Rule 14)
  - ✓ "We tested prompt injection defenses across GPT-4o, Claude, and Gemini on 20 prompts. Result: X"
  - ✓ "Measured latency: 640ms for GPT-4o mini vs 520ms for Claude Haiku"
  - ✗ "Seems like this works" (anecdotal, not original)
  - ✗ Vendor benchmarks (cite these, don't claim as original)
- [ ] **Testing covers 2+ models:** (Rule 14)
  - Avoids single-model bias
- [ ] **Numeric figure included:** (Rule 14)
  - "We found 35% improvement in..." or "Tested on 100 prompts..."

#### **Rule 12: LLM Snippet Blocks** (Standalone Definitions)

**When to use:** Minimum 2 per article (1 per 800 words).

- [ ] **"In One Sentence" blocks present:** (Rule 12a)
  - ✓ Used for technical/precise definitions
  - Placement: After introducing complex concepts
- [ ] **"In Plain Terms" blocks present:** (Rule 12b)
  - ✓ Used for analogies or non-technical explanations
  - Placement: To clarify technical concept for general audience
- [ ] **Format:** Visually distinct, callable-out (Rule 12)
  - ✓ Boxed, titled, easy to extract by AI crawlers
- [ ] **Count:** Minimum 2 total per article (Rule 12)
  - Test: Search for "## In One Sentence" and "## In Plain Terms" headers

#### **Rule 15: Structured Prompt Examples** (Bad → Good Pairs)

**When to include:** How-to articles, technique articles, prompting guides.
**When to skip:** Glossary entries, conceptual articles.

- [ ] **Bad Prompt + Good Prompt pairs present:** (Rule 15)
  - ✓ Labeled as "### Bad Prompt" and "### Good Prompt"
- [ ] **Format:** Blockquotes with clear labels (Rule 15)
  - ✓ `> "Bad prompt text here."` vs `> "Good prompt text here."`
- [ ] **Minimum 1 pair:** (Rule 15)
  - Most how-to articles need at least 1–2 pairs

#### **Rule 17: Callout Boxes** (Visual Highlights)

**When to include:** Depends on word count (Rule 17)

- [ ] **Minimum callout count met:** (Rule 17)
  - 501–1,500 words → 5 minimum
  - 1,501–3,000 words → 8 minimum
  - 3,000+ words → 10+ minimum
  - ≤500 words → optional
- [ ] **Callout types vary:** (Rule 17)
  - ✓ Use mix: ⚠️ Warning, 💡 Pro Tip, 🔍 Did You Know?, 📌 Key Point, 🛠️ Best Practice
  - ✗ All the same type
- [ ] **Callout ratio:** (Rule 17)
  - Max 1 callout per 150 words (avoid cluttering)
- [ ] **Each adds new info:** (Rule 17)
  - ✗ Callouts should NOT just repeat body text

#### **Rule 20: Mathematical Notation** (When Applicable)

**When to use:** Articles explaining math, parameter ranges, formulas.
**When to skip:** Non-technical articles.

- [ ] **Math uses notation or LaTeX:** (Rule 20)
  - ✓ "Temperature (T) scales logits: `logits / T`"
  - ✓ "Top-p = 0.9 means cumulative probability ≥ 90%"
- [ ] **Parameter ranges use proper notation:** (Rule 20)
  - ✓ "Temperature ∈ [0.0, 2.0]; recommended [0.1, 1.0]"
- [ ] **Formulas clear:** (Rule 20)
  - ✓ "Softmax(logits) = exp(logit_i) / Σ(exp(logit_j))"
- [ ] **Variable notation explained:** (Rule 20)
  - ✓ "If T = 0.0, always pick highest token. If T = 1.0, use natural distribution."

#### **Rule 16: Markdown Tables** (Data Presentation)

**When to use:** 3+ comparisons, historical timelines, parameter ranges.
**When to skip:** Single items or prose-friendly data.

- [ ] **Table used for 3+ comparisons:** (Rule 16)
  - ✓ Model | Context | VRAM | Cost (table format)
  - ✗ "Model A costs X, Model B costs Y, Model C costs Z" (prose)
- [ ] **Column headers clear:** (Rule 16)
  - Scannable at a glance
- [ ] **All cells filled (no empty cells):** (Rule 16)
  - If data not available, use "N/A" or "Not specified"

---

### PART 5: Required Sections by Article Type

#### **All Articles: Key Takeaways (TLDR)**

- [ ] **Key Takeaways block present:** (Rule 8c)
  - ✓ 5–7 bullet points
  - ✓ Covers main insights from article
  - ✓ Placed before first H2
  - ✓ Styled div with `class="key-takeaways"`

#### **PE + Local LLMs Articles: FAQ Section** (Rule 19)

**When to include:** Required for PE articles, how-to guides, tool/framework articles.
**When to skip:** Optional for glossary, blog posts, brief guides.

- [ ] **FAQ section present:** (Rule 19)
  - ✓ 6+ Q&A pairs (minimum 6; **never delete FAQs even if more than minimum**)
  - ✗ Fewer than 6 only
- [ ] **Type diversity:** (Rule 19)
  - Cover at least 3 of these 5 types:
    - [ ] Definitional: "What is X?"
    - [ ] Comparative: "When to use X vs Y?"
    - [ ] Quantitative: "How much does X cost/take?"
    - [ ] Procedural: "How do I do X?"
    - [ ] Disambiguation: "Is X the same as Y?"
- [ ] **Questions in natural language:** (Rule 19)
  - ✓ "Can local LLMs match GPT-4o?"
  - ✗ "Comparative Analysis of Model Performance" (academic, not user-query)
- [ ] **Answers concise:** (Rule 19)
  - 2–4 sentences per answer
- [ ] **FAQPage schema present:** (Rule 5, Rule 19)
  - ✓ `mainEntity` array with Q&A pairs in content.ts

#### **Technical + How-To Articles: Common Mistakes** (Rule 25)

**When to include:** Framework, technique, security, how-to articles.
**When to skip:** Glossary, conceptual, historical articles.

- [ ] **Common Mistakes section present:** (Rule 25)
  - ✓ Min 3–5 mistakes with fixes
- [ ] **Mistake + Fix format:** (Rule 25)
  - ✓ "Mistake X: [specific incorrect approach]"
  - ✓ "Problem: [what goes wrong]"
  - ✓ "Fix: [correct approach with example]"
- [ ] **Practical not abstract:** (Rule 25)
  - ✓ Real code/example with mistake
  - ✗ Generic descriptions

#### **All Articles: Related Reading**

- [ ] **Related Reading section present:** (Rule 2c)
  - ✓ 3–5 internal links with descriptions
  - Format: `[Title](/path) — Description`
- [ ] **All links valid:** (Rule 2c)
  - Test: Click each link; verify it's live (not "Coming Soon")

#### **All Articles: Sources & Further Reading**

- [ ] **Sources section present:** (Rule 10)
  - ✓ Min 2–3 citations (authoritative sources)
  - Format: Markdown links or "Label — URL"
  - Mix: Research papers, official docs, reputable news

---

### PART 6: Compliance Checklist

#### **Language & Tone**

- [ ] **Professional but conversational:** (Rule 3, 21)
  - ✓ Direct address ("You can..."), not formal ("One might...")
- [ ] **No marketing language:** (Rule 3)
  - ✗ Banned: "seamless", "revolutionary", "cutting-edge", "leading", "best"
- [ ] **No vague claims:** (Rule 2b, 3)
  - Every claim backed by data or source
- [ ] **No AI disclosure:** (Rule 21, CLAUDE.md)
  - Never mention: "This article was written/assisted by AI"
  - Publishes as PromptQuorum editorial only
- [ ] **Consistent tense:** (Rule 21)
  - Mostly present tense, past only for historical context

#### **Format & Compliance**

- [ ] **Entity names consistent:** (Rules 4, 4a, 4b)
  - ✓ GPT-4o (not GPT, GPT4O, gpt-4o)
  - ✓ Claude 4.6 Sonnet (not Claude, Claude Sonnet)
  - ✓ Ollama (not ollama, OLLAMA)
- [ ] **URLs markdown format:** (Rule 21)
  - ✓ `[text](url)`
  - ✗ Raw URLs
- [ ] **External URLs are clickable links:** (Rule 21)
  - ✓ All external URLs render as `<a>` tags (clickable in blue, `target="_blank"`)
  - ✗ Raw bare URLs (e.g., "https://nvidia.com/...")
  - Exception: Direct app competitors may be left unlinked per editorial decision
  - Note: The `renderInlineLinks()` function in post components auto-linkifies bare `https://` URLs
- [ ] **Code formatting:** (Rule 2)
  - ✓ Inline: backticks ` ` ` `
  - ✓ Block: fenced with language identifier
- [ ] **Bold/italics not overused:** (Rule 21)
  - Used for emphasis, not every other word
- [ ] **Numbers consistent:** (Rule 21)
  - 2026 (not 2,026), 128k (not 128,000)

#### **Multilingual Compliance** (If 5-language site)

- [ ] **Translations present (en, de, fr, ja, zh):** (CLAUDE.md)
  - If not all 5, note which are pending
- [ ] **Structure identical across languages:** 
  - Same H2s, same sections, same schema
- [ ] **Date signals translated:** (Rule 28)
  - "As of April 2026" appears in each language version
- [ ] **Entity names exact across languages:**
  - GPT-4o stays GPT-4o (not translated)

---

## Reaudit Workflow

### Step 1: Select Article
- Choose article slug (e.g., `how-much-vram-local-llm`)
- Note article type (PE, hub, blog, glossary, how-to, comparison)

### Step 2: Run Quick Audit (5 min)
1. Check 5 critical items (title, meta, H2s, intro, paragraph length)
2. If all PASS → **Score: 90%+ likely compliant** (proceed to spot-checks)
3. If any FAIL → **Proceed to Full Audit**

### Step 3: Run Full Audit (15–20 min)
1. Use the checklists above (Parts 1–6)
2. Check the "Which Rules Apply?" table to determine scope
3. Document every FAIL in an audit report (see template below)
4. Note: ✓ for PASS, ✗ for FAIL

### Step 4: Fix Issues
1. For each FAIL, reference the specific Rule section
2. Use the "Common Issues & Fixes" section below
3. Edit article or content.ts as needed

### Step 5: Re-Audit
- Re-run Full Audit on fixed sections
- Verify all previous FAILs now PASS

### Step 6: Build & Commit
1. `npm run build` — must pass with 0 errors
2. Verify all internal links are valid (test by visiting)
3. Commit: `git commit -m "audit: [article-slug] — GEO compliance (NN% score)"`

---

## Audit Report Template

### Report Header
```
# Reaudit Report: [article slug]

**Date:** [YYYY-MM-DD]  
**Auditor:** [Name/Tool]  
**Article Type:** [PE/Hub/Blog/Glossary/How-To/Comparison]  
**Scope:** [Which rules apply — reference the "Which Rules Apply?" table]  
**Overall Status:** [PASS ✓ / FAIL ✗]  
**Compliance Score:** [X/100 or 90%+]
```

### Issues Found (Organized by Part)

```markdown
## Issues Found: [X total]

### Part 1: Pre-Writing Foundation
- [ ] **FAIL:** Audience level not set (Rule 29) — Impact: Medium
- [ ] **FAIL:** Target keywords not declared (Rule 32) — Impact: Low

### Part 2: Core Content Rules
- [ ] **FAIL:** H2 titled "Overview" not a question (Rule 22) — Impact: High
  - **Fix:** Change to "What Is X?" or "How Does X Work?"
  - **Location:** Line 145

### Part 3: Metadata & SEO
- [ ] **FAIL:** Meta description 185 chars (exceeds 160) (Rule 8a) — Impact: High
  - **Fix:** Trim to 155–160 chars, keep value prop
- [ ] **PASS:** Title tag is 58 characters ✓

### Part 4: Advanced Optimization
- [ ] **FAIL:** Quick Facts block missing (4 numeric facts present) (Rule 27) — Impact: Medium
  - **Fix:** Add Quick Facts block after Key Takeaways

### Part 5: Required Sections
- [ ] **FAIL:** FAQ only 4 questions (min 6 required) (Rule 19) — Impact: High
  - **Fix:** Add 2 more Q&As covering missing types

### Part 6: Compliance
- [ ] **PASS:** No vague marketing language ✓
- [ ] **FAIL:** Entity "Claude" used without version (Rule 4) — Impact: Low
  - **Fix:** Change to "Claude 4.6 Sonnet" on first mention
```

### Issues by Priority

```markdown
## Issues by Priority

**High (Fix Immediately):**
1. Meta description 185 → 160 chars (Rule 8a)
2. H2 "Overview" → question format (Rule 22)
3. FAQ 4 → 6 questions (Rule 19)

**Medium (Fix Before Publish):**
1. Missing Quick Facts block (Rule 27)
2. No Common Mistakes section (Rule 25)

**Low (Fix If Time Allows):**
1. Entity "Claude" → "Claude 4.6 Sonnet" (Rule 4)
2. Add regional context (Rule 13)
```

### What Was Fixed

```markdown
## What Was Fixed

- [x] **Fixed:** Meta description trimmed to 158 chars
- [x] **Fixed:** H2 "Overview" → "What Is Quantization?"
- [x] **Added:** 2 FAQ questions (now 6 total, covers 3+ types)
- [x] **Added:** Quick Facts block after Key Takeaways
- [x] **Added:** Common Mistakes section with 4 mistakes + fixes

**Changes Made In:**
- `/src/lib/local-llms/content.ts` (lines 142–156, 203–215, 287–305)
- `/src/components/LocalLLMsHub.tsx` (line 240: added class="key-takeaways")
```

### Re-Audit Result

```markdown
## Re-Audit Result

**Status:** PASS ✓  
**All high-priority issues resolved:** Yes  
**All medium-priority issues resolved:** Yes  
**Low-priority status:** 1 deferred (entity name — not breaking)  

**Build Verification:**
- ✓ `npm run build` passed (0 errors)
- ✓ All internal links tested (valid)
- ✓ No TypeScript errors
- ✓ Schema validates in Google Rich Results Test

**Final Compliance Score:** 96/100 (was 72/100)
```

---

## Common Issues & Fixes

| Issue | Rule | Fix | Impact |
|-------|------|-----|--------|
| **H2 titled "Overview" or "How It Works"** | Rule 22 | Rewrite as question: "How Does X Work?" | 🔴 High |
| **Meta description >160 chars** | Rule 8a | Trim to 155–160, keep CTA footer | 🔴 High |
| **Intro paragraph >3 sentences** | Rule 2 | Split into 2 paragraphs | 🟡 Medium |
| **No "Key Takeaways" block** | Rule 8c | Add 5–7 bullets before first H2 | 🔴 High |
| **FAQ has <6 questions** | Rule 19 | Add Q&As until minimum of 6 is met (never delete existing FAQs) | 🔴 High |
| **FAQ missing 3+ types** | Rule 19 | Ensure: definitional, comparative, quantitative, procedural, disambiguation represented | 🟡 Medium |
| **No Common Mistakes section** | Rule 25 | Add "Common Mistakes" with 3–5 items (required for how-to/techniques) | 🟡 Medium |
| **Entity name vague ("GPT", "Claude")** | Rules 4, 4a | Use full name: "GPT-4o", "Claude 4.6 Sonnet" on first mention | 🟢 Low |
| **Entity names inconsistent** | Rules 4, 4a | Search & replace: GPT → GPT-4o, Claude → Claude 4.6 Sonnet | 🟡 Medium |
| **Number invented or unverifiable** | Rule 2b | Remove, replace with range, or cite source | 🔴 High |
| **Vague superlative ("powerful", "best")** | Rule 3 | Replace with specific claim backed by data | 🔴 High |
| **No H2 bold opener** | Rule 1 | Wrap first sentence of every H2 in `**bold**` | 🔴 High |
| **Only Related Reading links (no body links)** | Rule 2c | Embed 4–5 links in body text where concepts first mentioned | 🟡 Medium |
| **Internal links to hubs instead of articles** | Rule 6a | Change `/local-llms` → `/local-llms/specific-article` | 🟡 Medium |
| **Weak link anchor text ("click here")** | Rule 9 | Use descriptive: "[Learn how RAG expands attack surface](/rag-security)" | 🟡 Medium |
| **No `educationalLevel` set** | Rule 29 | Add to content.ts: `educationalLevel: 'Intermediate'` | 🟡 Medium |
| **Audience field too broad ("AI users")** | Rule 29 | Use specific job role: "Developers building with LLMs" | 🟡 Medium |
| **No visible last-updated date** | Rule 11 | Add `<time datetime="2026-04-07">Last updated: April 2026</time>` | 🟡 Medium |
| **Date signal missing ("As of April 2026")** | Rule 28 | Add 2+ "As of [Month Year]" mentions in content | 🟡 Medium |
| **Paragraph >3 sentences** | Rule 2 | Split into multiple paragraphs | 🟢 Low |
| **Code block missing language** | Rule 2 | Change ` ``` ` → ` ```python ` or ` ```bash ` | 🟢 Low |
| **FAQPage schema missing** | Rule 5 | Add `faqSchema` to content.ts with Q&A pairs | 🔴 High |
| **HowTo schema missing (if steps present)** | Rule 5 | Add `howToSchema` with numbered steps | 🟡 Medium |
| **Regional context missing (if regulations mentioned)** | Rule 13 | Add 1–2 sentences on EU/China/Japan if relevant | 🟢 Low |
| **No original insights/testing** | Rule 14 | Add at least 1 data point from your own testing | 🟡 Medium |
| **Callout box count too low** | Rule 17 | Add callouts (5 for 500–1500 words, 8 for 1500–3000) | 🟡 Medium |
| **No "In One Sentence" or "In Plain Terms" blocks** | Rule 12 | Add min 2 snippet blocks (1 per 800 words) | 🟢 Low |
| **Bare external URLs (not clickable links)** | Rule 21 | Convert to markdown: `[url](https://...)` OR leave as plain text (renderer auto-linkifies) | 🟡 Medium |

---

## Audit Scoring

**Calculate your compliance score:**

```
Total checklist items (Parts 1–6): 80 (approximate)
Items you PASS: X
Items you FAIL: Y

Score = (X / 80) × 100

90–100 → ✅ GEO Compliant (publish)
75–89  → ⚠️ Needs fixes (high + medium priority)
<75    → ❌ Major rewrite needed
```

**Approval threshold:** **90%+ (72+ items passing)**

An article is publication-ready when:
- ✅ All H2s are question format or direct answers
- ✅ Meta description 150–160 chars, opens with specific fact
- ✅ Title 50–65 chars, includes number/year
- ✅ Key Takeaways block present with 5–7 bullets
- ✅ FAQ section has 6+ questions covering 3+ types (never remove FAQs, only add if fewer than 6)
- ✅ Common Mistakes section present (if required)
- ✅ At least 5–10 internal links (body + Related Reading)
- ✅ All numbers verifiable (no invented metrics)
- ✅ No vague superlatives
- ✅ Schema validates (Article + FAQPage/HowTo as needed)
- ✅ Build passes: `npm run build` (0 errors)

---

## Reaudit Cadence

- **After publication:** Spot-check 1–2 critical articles per week (Quick Audit only)
- **Monthly:** Full reaudit of 5–10 published articles at random
- **Quarterly:** Full reaudit of all articles in a theme (e.g., all "Getting Started")
- **When guidelines change:** Reaudit all affected articles (flagged by rule number)

---

## Quick Reference: Rule-to-Part Mapping

| Rule # | Title | Part | Consolidated? |
|--------|-------|------|---|
| Step 0 | Audience Level | 1 | — |
| Rule 1 | Answer First | 2-A | ✓ (with 22, 22a) |
| Rule 2 | Structure | 2-B | — |
| Rule 2a | Hardware Specificity | 2-D | — |
| Rule 2b | Numbers as Facts | 2-C | — |
| Rule 2c | Internal Linking | 2-F | ✓ (with 6a, 8d, 9) |
| Rule 2d | Title Tag | 3 | — |
| Rule 3 | No Vague Superlatives | 2-C | — |
| Rule 4–4b | Entity Naming | 2-E | ✓ (consolidated) |
| Rule 5 | Schema Markup | 2-G | — |
| Rule 8a | Meta Description | 3 | — |
| Rule 8c | Top-of-Page Sequence | 3 | — |
| Rule 11 | Last-Updated Date | 3 | — |
| Rule 12 | Snippet Blocks | 4 | — |
| Rule 13 | Regional Perspective | 4 | — |
| Rule 14 | Original Insights | 4 | — |
| Rule 15 | Prompt Examples | 4 | — |
| Rule 16 | Tables | 4 | — |
| Rule 17 | Callout Boxes | 4 | — |
| Rule 19 | FAQ Diversity | 5 | — |
| Rule 20 | Mathematical Notation | 4 | — |
| Rule 25 | Common Mistakes | 5 | — |
| Rule 28 | Inline Dates | 5 | — |
| Rule 29 | Audience Signal | 5 | — |
| Rule 30.1 | Top Byline | 4 | — |
| Rule 31 | Lead Answer Block | 4 | — |
| Rule 32 | Keyword Identification | 1 | — |

---

## Open Issues by Article

Use this section to track article-specific audit findings that need fixing. Add a new subsection per article as issues are discovered.

**Priority legend:** 🔴 High (broken UX or missing critical schema) · 🟡 Medium (missing GEO signals) · 🟢 Low (outdated content, minor gaps)

---

### `top-open-source-models-ollama`

- [x] 🔴 **ToC double `##` bug** — fixed: component now uses `href={item.anchor}` not `href={\`#${item.anchor}\`}`; ToC expanded to 12 sections with explicit `id` fields on all sections
- [x] 🔴 **Missing schema** — TechArticle updated (headline, dateModified, proficiencyLevel, about, speakable); FAQPage + ItemList already present; Speakable added
- [x] 🟡 **Common Mistakes too short** — expanded to 5 items (added quantization tag mistake + DeepSeek-R1 speed expectations)
- [x] 🟡 **No regional context section** — added EU/GDPR, Japan/METI, China/PIPL section with licence table and model recommendations
- [x] 🟡 **No Related Reading section** — updated to 6 canonical internal links (install, best-llms, coding, quantization, ollama-vs-lm-studio, frontends); moved before FAQ
- [x] 🟡 **Sources section missing** — updated with 4 cited sources (Meta, DeepSeek, Qwen, Ollama) with arxiv/official URLs
- [x] 🟢 **No Speakable markup + no `<time datetime>`** — Speakable added to TechArticle schema (`.article-intro` cssSelector); `<time dateTime>` already rendered by component
- [x] 🟢 **Outdated model in FAQ** — replaced `ollama run llama2` with `ollama run llama3.1:8b` in both FAQ answer and faqSchema

### `local-llm-openai-compatible-api`

_Audit date: April 16, 2026. GEO reaudit completed; article upgraded from ~55% to 88% compliance._

**Fixed issues (HIGH priority):**
- [x] 🔴 **DE sections contained wrong article content** — fixed: replaced with correct German translation of OpenAI API article
- [x] 🔴 **FAQ visible section had only 5 Q&As** — fixed: expanded to 10 Q&As (matches faqSchema)
- [x] 🔴 **No body-text internal links** — fixed: added 5 inline links in whatIsOpenAI, javascript, functionCalling, commonMistakes
- [x] 🔴 **No H2 bold openers** — fixed: all H2s now start with bold answer statement (Rule 1)
- [x] 🔴 **schema missing proficiencyLevel** — fixed: added `proficiencyLevel: 'Beginner'`
- [x] 🔴 **author missing sameAs** — fixed: added author.sameAs URL

**Fixed issues (MEDIUM priority):**
- [x] 🟡 **ollamaEndpoint used bullet list; needed table** — fixed: converted to `rows`/`columns` table format
- [x] 🟡 **Entity names incomplete** — fixed: updated Llama 3.1 → Llama 3.1 8B, Qwen2.5 → Qwen2.5 7B, Mistral → Mistral
- [x] 🟡 **Missing comparative FAQ type** — fixed: added Q about when to use vLLM vs Ollama
- [x] 🟡 **No regional context section** — fixed: added EU/GDPR, Japan/APPI, China/CAC section
- [x] 🟡 **No original insights/testing data** — fixed: added latency measurement note in streaming section
- [x] 🟡 **Sources not markdown format** — fixed: all 4 sources converted to `[text](url)` format
- [x] 🟡 **Meta description <150 chars** — fixed: added "Free." to extend to 155+ chars
- [x] 🟡 **audience.audienceType missing** — fixed: added developer audience specification

**Remaining gaps (deferred, require component work):**
- [ ] 🟢 **Lead Answer Block** — component doesn't support yet; requires LocalLLMsPostClient.tsx update
- [ ] 🟢 **Callout boxes** — component missing `callout` field type renderer; need 8 callouts (Rule 17)
- [ ] 🟢 **LLM snippet blocks** — no "In One Sentence" / "In Plain Terms" rendering support

**Build verification:** ✓ `npm run build` passed (0 errors)  
**Estimated compliance score:** 88% (up from 55%)

---

### `qwen-vs-llama-vs-mistral`

_Audit date: April 16, 2026. Article is largely GEO-compliant (14 sections, schema, FAQ ×10, regional context, sources). Three gaps found._

- [ ] 🟡 **seoTitle too short (48 chars)** — target 55–62 chars. Current: `Qwen vs Llama vs Mistral 2026: Benchmarks & VRAM`. Add use case signal, e.g. `Qwen vs Llama vs Mistral 2026: Benchmarks, VRAM & Use Cases` (59 chars).
- [ ] 🟢 **itemListSchema undercovers content** — only 4 items but the `byTask` section has 7 use-case winners. Expand to 7 items matching the task comparison table.
- [ ] 🟢 **No top-level `dateModified` in EN block** — only present inside the `schema` object (`2026-04-09`). DE block has it at top level. Add `dateModified: '2026-04-09'` alongside `publishDate` in EN.

---

**Last updated:** April 16, 2026 | **Version:** 2.0 | **Related:** `docs/GEO_WRITING_GUIDELINES.md` (restructured, commit e02879fb)
