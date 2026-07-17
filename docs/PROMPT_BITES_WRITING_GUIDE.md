# PROMPT_BITES_WRITING_GUIDE.md
# PromptQuorum — Claude Code Instruction Set for /prompt-bites/
# Version: 1.1 · Created: 2026-05-18 · Mobile-first edition
#
# ═══════════════════════════════════════════════════════
# LOADING ORDER (Claude Code must follow this sequence):
# ═══════════════════════════════════════════════════════
#
# 1. Load GEO_WRITING_GUIDELINES.md first (all base rules apply)
# 2. Load THIS file second (overrides + additions for /prompt-bites/ only)
# 3. If a rule here conflicts with the base guide → THIS FILE WINS
# 4. If a base rule is NOT mentioned here → it still applies unchanged
#
# LAUNCH STRATEGY:
# ────────────────
# All Prompt Bites pages ship with <meta name="robots" content="noindex, nofollow">
# The full section (hub + all 30 articles) launches together.
# Switch to index ONLY after all articles pass the LAUNCH_CHECKLIST (end of this file).
# Rationale: Google rewards complete topical clusters. Drip-feeding half-finished
# pages dilutes authority. One atomic launch = one authority signal.
#
# ═══════════════════════════════════════════════════════

---

## WHAT IS A PROMPT BITE

A Prompt Bite is a short, mobile-first article that answers ONE specific question.

It is NOT a guide, tutorial, explainer, or opinion piece.
It is a direct answer to a search query, formatted for phone screens.

Mental model: someone on a train, phone in one hand, asks Google
"how much VRAM for Llama 3 8B?" — they want the number in 3 seconds,
not a 3,000-word essay on quantization theory.

Every Prompt Bite has a **parent** long-form article in /local-llms/,
/power-local-llm/, or /prompt-engineering/. The Prompt Bite is the
satellite; the parent is the authority. Always link UP to the parent.

---

## WHY MOBILE — THE DATA BEHIND THIS SECTION

This is not a general "make it responsive" initiative. This section exists
because of a specific, measured asymmetry in PromptQuorum's traffic data:

| Metric | Desktop | Mobile |
|---|---|---|
| Share of impressions | ~87% | ~13% |
| Share of clicks | ~39% | ~61% |
| CTR | 0.07–0.54% | 4.4–6.3% |

Mobile delivers 11× higher CTR than desktop. Desktop impressions are
being consumed by AI Overviews and featured snippets — users get the
answer without clicking. Mobile users still click through because
mobile SERPs show fewer AI features and smaller previews.

**The strategy:** Do NOT try to fix desktop CTR (it may be structurally
broken by AI Overviews). Instead, grow mobile impressions to multiply
the already-strong mobile CTR. Every additional 1,000 mobile impressions
at 5% CTR = 50 clicks. The same 1,000 desktop impressions = 1–5 clicks.

**Every rule in this guide serves that strategy.** If a formatting choice
works on desktop but breaks on mobile, the mobile-friendly option wins.
No exceptions.

---

## MOBILE-FIRST CONTENT PHILOSOPHY

### Write for a 360px screen. Desktop gets a bonus, not the target.

The default PromptQuorum reader for Prompt Bites is holding a phone
vertically with one thumb. Every content decision must pass this test:

**"Can I read this, understand it, and act on it in under 90 seconds
on a 5.8-inch phone screen while standing on public transport?"**

If no → rewrite, shorten, restructure, or split into two articles.

### What mobile users do differently

| Behavior | Desktop user | Mobile user |
|---|---|---|
| Reading pattern | F-pattern scan, reads some body text | Scroll-and-stop at first bold/number |
| Scroll depth | 60–70% of page | 40–50% of page |
| Time on page | 2–4 minutes | 45–90 seconds |
| Action after reading | Opens tabs, bookmarks, continues browsing | Gets answer, leaves or taps one link |
| Table tolerance | 5–7 columns fine | 3 columns max, then frustration |
| Code block tolerance | Full-width code is expected | Horizontal scroll = instant leave |
| Decision speed | Reads comparison, considers options | Wants the verdict NOW |

### What this means for writing

1. **Front-load everything.** The answer is in the first sentence, not the
   third paragraph. Mobile users who scroll past the fold are gone.

2. **One decision per article.** Desktop users explore. Mobile users
   want: "Which model, which quantization, how much VRAM, done."

3. **Visual scanpoints every ~100 words.** A bold statement, a number,
   a table, or a callout. Mobile screens show ~40 words at a time —
   a wall of grey text looks the same every swipe and users leave.

4. **Links in thumb zone.** The bottom half of a phone screen is the
   thumb-reachable zone. Place the most important internal link
   (parent article) in the second H2 section or FAQ — not at the
   very top where the user hasn't decided to explore yet.

5. **The FAQ is your engagement anchor.** Mobile users who reach the
   FAQ section have committed to the page. This is where you cross-link
   to sibling Prompt Bites. FAQ items are naturally tap-friendly
   (expandable Q&A) and Google renders FAQPage schema as expandable
   dropdowns directly in mobile SERPs — giving you more SERP real estate.

---

## MOBILE SERP OPTIMIZATION

How a Prompt Bite appears in mobile search results matters as much
as the content itself.

### Mobile SERP anatomy (what the user sees)

```
┌─────────────────────────────────┐
│ How Much VRAM for Llama 3 8B?   │  ← Title (50 chars max visible)
│ promptquorum.com > prompt-bites │  ← Breadcrumb
│ Llama 3 8B Q4_K_M needs ~6 GB  │  ← Meta description (120 chars
│ VRAM. RTX 3060 12 GB runs it…  │     visible on mobile, less than
│                                 │     desktop's 155)
│ ▼ Quick Answers About VRAM      │  ← FAQPage rich result (expandable)
│ ▼ Is 4 GB VRAM Enough?          │
│ ▼ Q4_K_M vs Q8_0?              │
└─────────────────────────────────┘
```

### Rules for mobile SERP appearance

**PB-SERP-01: Title visible length = 50 characters on mobile**

Desktop shows ~60 chars. Mobile shows ~50. The title tag formula
`[Question ≤50 chars] | Prompt Bites | PromptQuorum` is designed
so the question is ALWAYS fully visible on mobile. The "| Prompt Bites
| PromptQuorum" part may be truncated — that's fine. The question
is what drives the click.

**PB-SERP-02: Meta description visible length = 120 characters on mobile**

Desktop shows ~155 chars. Mobile shows ~120. Put the answer in the
FIRST 120 characters. The "Quick answer from PromptQuorum." tagline
at the end may be cut off — that's acceptable because the answer
(the click driver) is already visible.

**PB-SERP-03: FAQPage schema = bonus SERP real estate on mobile**

When FAQPage schema renders, mobile SERPs show expandable FAQ items
directly under your result. This makes your listing 2–3× taller than
competitors without FAQ schema. More visual space = higher CTR.

**This is why the FAQ section is mandatory, not optional.**

**PB-SERP-04: Breadcrumb display**

Mobile SERPs show breadcrumbs as `promptquorum.com > prompt-bites`.
The `/prompt-bites/` slug is visible to the user and signals
"quick answer" format before they click. This is another reason
the category name matters.

---

## MOBILE VOICE SEARCH OPTIMIZATION

17% of mobile searches are voice queries (Google 2025 data).
Voice queries are longer, more conversational, and phrased as questions.

This is why every Prompt Bite H1 is a question — it matches voice
query format directly.

### Speakable schema

Speakable schema tells voice assistants (Google Assistant, Siri)
which text to read aloud. For Prompt Bites, mark:

1. The H1 (the question)
2. The first paragraph (the answer)

```json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".prompt-bite-h1", ".prompt-bite-answer"]
  }
}
```

### Voice-friendly writing rules

- **Use speakable numbers.** "Six gigabytes" not "6 GB" — but write
  "6 GB" in text and let schema handle voice. The speakable text
  can differ from display text via a hidden `<span>` with spoken variant.
- **Avoid abbreviation chains.** "Q4_K_M" is unpronounceable by voice.
  In the speakable answer, expand it: "Q4 K M quantization."
- **First sentence must sound natural when read aloud.** Test by reading
  it to yourself. If it sounds like a robot wrote it, rewrite.

---

## MOBILE-SPECIFIC CONTENT PATTERNS THAT CONVERT

### Pattern 1: The "One Number" Answer

Most successful mobile content gives ONE number in the first sentence.

"You need **6 GB** of VRAM."
"It costs **$0.15** per million tokens."
"It runs at **25 tokens per second**."

The number is the answer. Everything after it is context for users
who want more detail. Most mobile users stop at the number.

### Pattern 2: The "Yes/No + Because" Answer

For binary questions, answer yes or no FIRST, then explain.

"**Yes** — Ollama supports vision models since version 0.5.
Load any LLaVA variant with `ollama run llava`."

"**No** — 4 GB VRAM is not enough for Llama 3 8B at any quantization.
The smallest usable quantization (Q4_K_S) still needs 5.5 GB."

### Pattern 3: The "Use X, Not Y" Verdict

For comparison questions, declare the winner immediately.

"**Use Q4_K_M, not Q4_0.** Q4_K_M uses K-Quant compression which
delivers 5–8% better quality at the same file size."

### Pattern 4: The "3-Row Mobile Table"

The ideal mobile table has 3 columns and 3–5 rows.
It fits on one screen without scrolling.

| Model | VRAM | Speed |
|---|---|---|
| Llama 3 8B Q4 | 6 GB | 25 tok/s |
| Mistral 7B Q4 | 5 GB | 30 tok/s |
| Phi-4 Q4 | 4 GB | 35 tok/s |

One glance, one decision, done. This is peak mobile content.

### Pattern 5: The "Living Page" Monthly Update

For queries like "latest Ollama version" — the answer changes monthly.
The page structure stays identical; only the data updates.

```
H1: What Is the Latest Ollama Version?

As of May 2026, the latest Ollama version is X.Y.Z, released on [date].
[Top 3 changes in 1 sentence each.]

H2: What Changed in This Release?
[3-5 bullet points]

H2: Quick Answers About Ollama Updates
[FAQ: "How do I update?" / "Is it safe to update?" / "What models were added?"]
```

Same template, new data each month. Google rewards freshly updated
pages with a bump in mobile rankings for 7–14 days after each update.

---

## OVERRIDE MAP — BASE GUIDE RULES CHANGED FOR PROMPT BITES

This table shows exactly which GEO_WRITING_GUIDELINES.md rules are
overridden, reduced, or skipped for /prompt-bites/ articles.
Any rule NOT listed here applies unchanged from the base guide.

| Base Rule | Base Requirement | Prompt Bites Override | Why |
|---|---|---|---|
| Step 0 (Audience Level) | 4 levels, default Intermediate | **Always Intermediate** — no exceptions | Prompt Bites target searchers, not researchers |
| Rule 8c (Top-of-Page Sequence) | 10-element sequence incl. Key Takeaways, CTR hook, ToC | **Simplified to 5 elements** — see PB-STRUCTURE below | Short articles don't need ToC or Key Takeaways |
| Rule 12 (LLM Snippet Blocks) | "In One Sentence" + "In Plain Terms" blocks, min 2 per article | **SKIP entirely** | Article IS the snippet — no meta-snippets needed |
| Rule 15 (Prompt Examples) | Bad → Good prompt pair required | **SKIP** unless article is about prompting | Most Prompt Bites are hardware/model Q&A |
| Rule 16 (Tables) | No column limit stated | **Max 3 columns, max 8 rows** | Mobile viewport constraint |
| Rule 17 (Callout Boxes) | 5 minimum for 501–1,500 words | **Max 2 callout boxes** | Over-decorating a 700-word article hurts scannability |
| Rule 20 (Math Notation) | LaTeX for formulas | **Inline only** — no display-mode LaTeX | Mobile renders LaTeX poorly |
| Rule 22 (H2 Format) | H2 as questions | **Unchanged** — but max 3 H2s total | Hard limit for mobile scroll depth |
| Rule 22a (H2 Section Body) | 4-part hierarchy per section | **Reduced to 2 parts**: answer + supporting detail | No room for examples subsection in 200-word sections |
| Rule 22b (7-Layer Decision Framework) | Full 9-layer framework | **Use layers 1, 2, 6 only** (Direct Answer, Best Choice, Final Verdict) | Prompt Bites compress the decision into one screen |
| Rule 25 (Common Mistakes) | 3–5 mistakes, bullet format | **SKIP** — move 1 mistake into FAQ instead | Not enough word budget for a full mistakes section |
| Rule 27 (Quick Facts Block) | Required if 4+ numerical facts | **SKIP** — facts go into the answer paragraph directly | The whole article is Quick Facts |
| Rule 31 (Lead Answer Block) | Separate 25–50 word bold block | **Merged with first paragraph** — see PB-FIRST-PARA below | No room for separate lead + body on mobile |
| Rule 33 (CTR-First Opening Block) | 30-word tension hook between lead and Key Takeaways | **SKIP** | The direct answer IS the hook; tension isn't needed when you deliver the answer instantly |
| Rule 38 (AI Citation Blocks) | 1 per major section (definition/decision/comparison) | **1 total per article** — the first paragraph IS the citation block | Entire article is extractable; no need for separate blocks |
| Rule 40 (Explanation Compression) | Decision-only prose | **Applies at maximum intensity** — zero filler tolerance | Every word counts in 700 words |
| Rule 41 (Scroll Pattern) | Visual rhythm rules | **Simplified** — see PB-MOBILE-UX below | Different scroll behavior on mobile |
| Rule 43 (quickAnswerTop) | Mandatory for power-local-llm, recommended for local-llms | **MANDATORY for all Prompt Bites** | This is the primary AI extraction target |
| Freshness Tier | 3 tiers | **Always semi_annual** — see PB-FRESHNESS below | All Prompt Bites name specific models/hardware |

---

## PB-STRUCTURE: Top-of-Page Sequence (Replaces Rule 8c)

Prompt Bites use a simplified 5-element top-of-page sequence:

```
1. H1 title (question format, ends with ?)
2. Byline + credential signal (Rule 30.1 — unchanged)
3. quickAnswerTop block (Rule 43 — mandatory, all 5 languages)
4. Direct answer paragraph (40–60 words, bold, with freshness marker)
5. First H2 heading
```

**Removed from base Rule 8c:**
- ~~Key Takeaways block~~ (article IS the takeaway)
- ~~CTR-First Opening Block~~ (answer replaces tension hook)
- ~~Quick Facts Block~~ (facts are in the answer)
- ~~Table of Contents~~ (max 3 H2s = no TOC needed)
- ~~Intro paragraph~~ (merged into direct answer)

---

## PB-FIRST-PARA: First Paragraph Rules (Replaces Rule 31)

The first paragraph after quickAnswerTop merges Rule 31 (Lead Answer Block) and Rule 33 (CTR hook) into one unit.

### Requirements

1. **First sentence = the answer.** Not context, not preamble, THE ANSWER.
2. **Bold the entire first paragraph** (inherits from Rule 31).
3. **40–60 words** — this is the featured snippet extraction zone.
4. **Freshness marker** in first or second sentence: "As of [Month Year]"
5. **Standalone readable** — if someone reads ONLY this paragraph, they have a complete, useful answer.
6. **Entity-dense** — name the specific model, quantization, hardware, tool. No vague references.

### Good example

> **As of May 2026, Llama 3 8B at Q4_K_M quantization needs about 6 GB of VRAM. An RTX 3060 12 GB or any MacBook with 16 GB unified memory handles it comfortably at 25 tokens per second with Ollama.**

✓ First sentence = the answer (6 GB)
✓ Bold
✓ 43 words
✓ "As of May 2026" freshness marker
✓ Standalone (makes sense without the rest of the article)
✓ Entities: Llama 3 8B, Q4_K_M, RTX 3060, MacBook, 16 GB, Ollama

### Bad example

> When running large language models locally, one of the most important considerations is how much GPU memory — also known as VRAM — you'll need for your specific model. This depends on several factors including the model size, quantization level, and your context window settings.

✗ Doesn't answer the question until paragraph 3
✗ No freshness marker
✗ No specific numbers
✗ Reads like an essay introduction

---

## PB-QUICKANSWERTOP: quickAnswerTop Block (Extends Rule 43)

Rule 43 is MANDATORY for all Prompt Bites. This block is the single most
important element for AI citation — Perplexity, ChatGPT, Gemini, and
Claude all extract structured Q&A blocks preferentially.

### Template

```ts
quickAnswerTop: {
  en: {
    question: 'How much VRAM do I need for Llama 3 8B?',
    // ≤ 12 words — exact search query, not a heading rephrasing
    answer: 'Llama 3 8B at Q4_K_M needs about 6 GB of VRAM. An RTX 3060 12 GB or MacBook with 16 GB unified memory runs it at 25 tokens per second.',
    // 25–60 words — direct answer, standalone, no preamble
    bullets: [
      'Q4_K_M is the recommended quantization (best quality-to-size ratio)',
      'Minimum 6 GB VRAM or 16 GB unified memory',
      'Ollama and LM Studio both support this model out of the box',
    ],
    // 3–5 bullets, each ≤ 15 words, all contain specific numbers or named tools
    updatedDate: '2026-05',
    // YYYY-MM — update when core recommendation changes
  },
  de: { /* ... */ },
  fr: { /* ... */ },
  ja: { /* ... */ },
  zh: { /* ... */ },
}
```

### Prompt Bites–specific additions to Rule 43

- **question field** must match the H1 exactly (or near-exactly). In the base guide, question can differ from H1. In Prompt Bites, they must align because the H1 IS the search query.
- **answer field** must match the bold first paragraph (PB-FIRST-PARA). Same answer, same wording. No contradictions between quickAnswerTop and body.
- **All 5 languages required before page goes live.** No partial launches.

---

## PB-H1: Headline Rules

### PB-H1-01: H1 = The Exact Search Query

Source the H1 from GSC queries, Google autocomplete, or People Also Ask.
If you cannot find the query being searched, the article should not exist.

✅ "How Much VRAM Do I Need for Llama 3 8B?"
✅ "Best Ollama Models for RTX 3060 12 GB in 2026?"
✅ "What Is Q4_K_M Quantization?"
❌ "VRAM Requirements for Local LLMs — A Comprehensive Guide"
❌ "Understanding Quantization Levels in Modern AI"

### PB-H1-02: Question Mark Required

Every H1 ends with `?` — no exceptions. Signals Q&A format to crawlers.

### PB-H1-03: No Brand in H1

Brand goes in the title tag only. H1 is the user's question, not marketing.

### PB-H1-04: Max 70 Characters

Mobile SERPs truncate long H1s. Keep H1 under 70 characters including the question mark.

---

## PB-BODY: Article Body Constraints

### PB-BODY-01: Word Count 600–900

Hard minimum: 400. Hard maximum: 1,200.
If the answer genuinely requires 2,000+ words, it belongs in a long-form section.

### PB-BODY-02: Max 3 H2 Sections

```
H2: [Supporting detail #1]
H2: [Supporting detail #2]
H2: Quick Answers About [Topic]   ← FAQ section (mandatory)
```

If you need a 4th H2, split the content into two Prompt Bites and interlink.

### PB-BODY-03: No H3 Tags — Ever

H3 adds a navigation layer that mobile users don't use. If the content
requires subheadings, it's too complex for a Prompt Bite.

### PB-BODY-04: Max 3 Sentences Per Paragraph

Mobile reading is vertical scrolling. Wall-of-text paragraphs = instant bounce.
One-sentence paragraphs are fine and encouraged.

### PB-BODY-05: No Hedging

Prompt Bites give direct answers. Hedging kills mobile engagement.

✅ "You need 6 GB of VRAM."
❌ "It depends on many factors, but generally speaking, you might need around 6 GB."

If the answer genuinely varies, give the most common case first:
"Most users need 6 GB. With extended context (16K+ tokens), budget 8 GB."

### PB-BODY-06: Numbers Over Adjectives

Mobile users scan for numbers, not prose.

✅ "25 tokens/second on RTX 3060"
❌ "Runs at a reasonable speed on mid-range hardware"

### PB-BODY-07: No Marketing Language

Zero CTAs, zero waitlist mentions, zero product pitches in Prompt Bites.
The waitlist CTA lives on the hub page and homepage, not in articles.

---

## PB-TABLE: Table Rules (Overrides Rule 16)

### PB-TABLE-01: Max 3 Columns

Mobile screens are 360–414px. 4+ columns = broken layout or horizontal scroll.

| Columns | Verdict |
|---|---|
| 2 | Perfect |
| 3 | Good — keep headers to 1–2 words |
| 4+ | REJECTED — reformat as stacked cards |

### PB-TABLE-02: Max 8 Rows

Show the top 5–8 options. Link to the parent article for the full list.

### PB-TABLE-03: Stacked Cards for Complex Comparisons

When the data needs 4+ attributes per item, use vertical cards:

```
**Llama 3 8B Q4_K_M**
- VRAM: ~6 GB
- Speed: 25 tok/s on RTX 3060
- Best for: General chat, coding assistance

**Mistral 7B Q5_K_M**
- VRAM: ~5.5 GB
- Speed: 30 tok/s on RTX 3060
- Best for: Fast inference, instruction following
```

---

## PB-CODE: Code Block Rules

### PB-CODE-01: Max 60 Characters Per Line

Mobile viewport = ~42–48 chars at default font. Break long commands:

```bash
ollama run llama3:8b-instruct-q4_K_M \
  --num-ctx 8192
```

### PB-CODE-02: Max 1 Code Block Per Article

Prompt Bites are not tutorials. Exception: FAQ section may include
one additional short snippet (max 3 lines).

---

## PB-FAQ: FAQ Section Rules (Adjusts Rules 19, 25)

### PB-FAQ-01: Mandatory — Every Article Ends with FAQ

Last H2 is always: `## Quick Answers About [Topic]`

### PB-FAQ-02: 3–5 Questions

Source from GSC related queries, PAA boxes, or Reddit questions.

### PB-FAQ-03: Answers = 1–2 Sentences Max

Shorter than main content. One sentence ideal. Never a full paragraph.

### PB-FAQ-04: No Duplicate Content

If an FAQ answer repeats the main body verbatim, reword or remove it.

### PB-FAQ-05: One FAQ Answer Must Cross-Link

At least one FAQ answer includes an internal link to a sibling
Prompt Bite or the parent article.

### PB-FAQ-06: Absorb One "Common Mistake"

Instead of a separate Common Mistakes section (skipped per override map),
phrase one FAQ item as a common mistake:

"**Does Q4_0 work the same as Q4_K_M?**
No — Q4_0 is an older format without K-Quant improvements. Q4_K_M
delivers 5–8% better quality at the same file size. Always choose Q4_K_M."

---

## PB-CALLOUT: Callout Box Rules (Overrides Rule 17)

### PB-CALLOUT-01: Max 2 Callout Boxes Total

Base guide requires 5 for 501–1,500 words. Prompt Bites override this to max 2.
Zero callout boxes is acceptable for short Prompt Bites (under 700 words).

### PB-CALLOUT-02: Use Only These Two Types

- **⚠️ Warning** — One common pitfall (e.g., "Don't confuse Q4_0 with Q4_K_M")
- **💡 Pro Tip** — One optimization (e.g., "Set --num-ctx 4096 to save 2 GB VRAM")

Skip 🔍 Did You Know?, 📌 Key Point, 🛠️ Best Practice for Prompt Bites.

---

## PB-META: Metadata Rules (Overrides Rules 2d, 8a)

### PB-META-01: Title Tag Formula

```
[Question — max 50 chars] | Prompt Bites | PromptQuorum
```

Total ≤ 60 characters. The "Prompt Bites" segment brands the series
and differentiates from long-form title tags in SERPs.

Example: `How Much VRAM for Llama 3 8B? | Prompt Bites | PromptQuorum`

### PB-META-02: Meta Description Formula

```
[Direct answer — 1 sentence]. [One supporting fact]. Quick answer from PromptQuorum.
```

Length: 130–155 characters.

Example: `Llama 3 8B Q4_K_M needs ~6 GB VRAM. RTX 3060 12 GB runs it at 25 tok/s. Quick answer from PromptQuorum.`

### PB-META-03: OG Image Requirement

`og:image` must be min 1200px wide — REQUIRED even if the article body
has no image. Google Discover needs this for card display.

Create a branded template: "Prompt Bites" logo + H1 question text overlaid
on the standard PromptQuorum blue/gold background. Reusable per article
by changing the question text.

### PB-META-04: Robots Tag (Launch Gating)

**Phase 1 — Build (all articles noindex):**
```html
<meta name="robots" content="noindex, nofollow">
```

**Phase 2 — Launch (after LAUNCH_CHECKLIST passes):**
```html
<meta name="robots" content="max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```

### PB-META-05: Canonical

Self-referencing canonical. No cross-canonical to parent article.

```html
<link rel="canonical" href="https://www.promptquorum.com/prompt-bites/[slug]" />
```

---

## PB-SCHEMA: Schema Requirements (Extends Rule 5)

Every Prompt Bite emits these JSON-LD schemas:

### 1. Article (not BlogPosting)

```json
{
  "@type": "Article",
  "headline": "[H1]",
  "author": { "@type": "Person", "name": "Hans Kuepper" },
  "publisher": { "@type": "Organization", "name": "PromptQuorum" },
  "datePublished": "2026-05-XX",
  "dateModified": "2026-05-XX",
  "description": "[meta description]",
  "isPartOf": { "@type": "WebSite", "name": "PromptQuorum", "url": "https://www.promptquorum.com" }
}
```

### 2. FAQPage

One `mainEntity` per FAQ question. Required for all Prompt Bites.

### 3. Speakable (NEW — not in base guide)

```json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".prompt-bite-h1", ".prompt-bite-answer"]
  }
}
```

Mark the H1 and first answer paragraph as speakable. Enables Google
Assistant and voice search results. Mobile users increasingly trigger
voice queries — Speakable gets you into those answers.

### 4. BreadcrumbList

```
Home > Prompt Bites > [Article Title]
```

---

## PB-LINKING: Internal Link Rules (Extends Rules 2c, 6a, 39)

### PB-LINK-01: Mandatory Link to Parent (1 per article)

Every Prompt Bite links to exactly one parent long-form article.
This is the #1 cannibalization prevention signal.

Place the parent link:
- In the second H2 section (natural context)
- In the Related Reading footer (always)

### PB-LINK-02: Mandatory Sibling Links (1–2 per article)

Link to 1–2 other Prompt Bites in the same cluster:

| Cluster | Articles that interlink |
|---|---|
| Quantization/VRAM | A1 ↔ A2 ↔ A3 ↔ A6 ↔ A7 ↔ A8 |
| Ollama | B1 ↔ B2 ↔ B3 ↔ B4 ↔ B5 ↔ B6 |
| LM Studio | C1 ↔ C2 ↔ C3 ↔ C4 ↔ C5 |
| Model Comparisons | D1 ↔ D2 ↔ D3 ↔ D4 |
| Hardware | E1 ↔ E2 ↔ E3 |
| Cross-cluster | Optional, when naturally relevant |

### PB-LINK-03: Link Direction Rules

- **Prompt Bite → Parent long-form:** ALWAYS (mandatory, inline + footer)
- **Parent long-form → Prompt Bite:** ONLY via a "Quick Answers" callout box or sidebar widget at the bottom. NEVER as inline body links competing with the parent's own content.
- **Prompt Bite → Sibling Prompt Bite:** Bidirectional (both articles link to each other)

### PB-LINK-04: Anchor Text (per Rule 39)

Base Rule 39 applies unchanged. Use descriptive anchor text matching target H1:

✅ "See our quick answer on [Q4_K_M vs Q8_0 quantization](/prompt-bites/q4-k-m-vs-q8-0-which-is-better)"
❌ "Click here" / "Read more" / "Learn more"

### PB-LINK-05: Verify Product-Destination Links Before Reporting Complete

Any article with a stated product-destination purpose — a "where to buy" section, an affiliate CTA, a pillar/buying-guide link — must have that link verified present in the actual article file via grep, for every language block, before being reported as complete.

A completion report claiming a link exists is not sufficient. The link must be confirmed in the file content itself, not assumed from the writing brief, the outline, or an agent's self-report.

This applies retroactively to any future audit: if a report says a conversion link "is" present, verify it — don't take the report at its word.

---

## PB-FRESHNESS: Freshness Tier (Overrides Freshness Classification)

### All Prompt Bites = semi_annual

Every Prompt Bite names specific models, hardware, or tool versions.
No Prompt Bite is evergreen. No Prompt Bite is annual (no year in slug).

Required fields:
```ts
freshness_tier: 'semi_annual',
next_refresh_due: '2026-11-18',  // 6 months from publish
current_models_mentioned: ['Llama 3 8B', 'Mistral 7B', 'Qwen 2.5 14B'],
current_hardware_mentioned: ['RTX 3060', 'M5 Max'],
```

### Living Pages Exception

Articles B1, B2, B3, C5, G2 are "living pages" updated monthly.
For these, set:
```ts
freshness_tier: 'semi_annual',
next_refresh_due: '2026-06-18',  // 1 month from publish (not 6)
is_living_page: true,
```

---

## PB-MOBILE-UX: Mobile-Specific UX Rules

### PB-UX-01: Touch Targets ≥ 44×44px

Every tappable element: buttons, FAQ expanders, CTA links.
Apple HIG + Google mobile-friendly requirement.

Inline text links exempt but use line-height ≥ 1.6 to prevent misfire taps.

### PB-UX-02: No JavaScript-Dependent Content Above the Fold

The answer must render without JavaScript. Server-side render (SSR) or
static generation only for the H1 + first paragraph + quickAnswerTop block.

If JS fails to load, the user must still see:
- The H1 question
- The direct answer paragraph
- The first table (if present)

Everything below the fold can hydrate later.

### PB-UX-03: Page Speed ≥ 90 Mobile

Prompt Bites must hit 90+ on Google PageSpeed Insights (mobile).

- No lazy-loaded hero images (page too short for lazy loading to help)
- First Contentful Paint < 1.5s on mobile
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Total Blocking Time < 200ms

**Test on a real phone, not just Chrome DevTools.** DevTools throttling
does not accurately simulate real mobile CPU/network constraints.

### PB-UX-04: max-image-preview:large Robot Tag

Required for Google Discover eligibility (Phase 2, after launch):
```html
<meta name="robots" content="max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```

### PB-UX-05: No Clickbait

Google Discover penalizes inflated language.
✅ "How Much VRAM for Llama 3 8B?"
❌ "You Won't BELIEVE How Little VRAM Llama 3 Needs!"

### PB-UX-06: Font Size Minimum 16px

Body text must be ≥ 16px on mobile. Smaller text triggers Google's
"text too small to read" mobile usability flag. Tables can go to 14px
minimum, but body paragraphs stay at 16px.

### PB-UX-07: Line Height ≥ 1.6 for Body Text

Tight line-height is harder to read on small screens and causes
mis-taps on inline links. Body text line-height: 1.6–1.8.
Tables and code blocks can use 1.4.

### PB-UX-08: No Horizontal Scroll — Zero Tolerance

This is the #1 mobile UX killer. Check every element:
- Tables: max 3 columns (PB-TABLE-01)
- Code blocks: max 60 chars per line (PB-CODE-01)
- Images: max-width 100%, no fixed pixel widths
- Embedded content: must be responsive

If any element causes horizontal scroll on a 360px viewport, the
page fails mobile review. Fix before publishing.

### PB-UX-09: Sticky Header Must Not Consume > 60px

If the site has a sticky navigation header, it must be ≤ 60px tall
on mobile. A 100px sticky header eats 25% of a phone screen, leaving
the user reading through a letterbox.

### PB-UX-10: Thumb Zone Link Placement

The natural thumb reach on a phone covers the bottom 60% of the screen.
Place the most important interaction points (parent article link,
FAQ expanders, sibling links) in content that renders in the middle
and bottom of the page — not in a top-of-page navigation bar that
requires stretching.

```
┌──────────────────────┐
│   Hard to reach       │  ← Don't put key links here
│                       │
│   Easy to reach       │  ← Internal links to parent/siblings
│                       │
│   Natural thumb zone  │  ← FAQ section, Related Reading
└──────────────────────┘
```

### PB-UX-11: Scroll Depth Budget

Mobile users scroll 40–50% of page depth on average.
For a 700-word Prompt Bite, that means they see ~350 words.

**Content priority by scroll position:**
```
0–20% (always seen):   H1 + quickAnswerTop + direct answer
20–40% (usually seen): First H2 + key table/comparison
40–60% (50/50):        Second H2 + supporting detail
60–80% (often missed): FAQ section (but engaged users who get here are high-value)
80–100% (rarely seen): Sources, Related Reading, breadcrumb footer
```

**Implication:** Put the verdict, the number, and the recommendation
in the first 40% of the page. Don't bury the answer below a
comparison table — put the answer FIRST, then the table for users
who want proof.

### PB-UX-12: Tap-Friendly FAQ Expanders

FAQ items must be expandable/collapsible on mobile. Showing all
FAQ answers expanded consumes 40%+ of page length. Collapsed FAQs
with tap-to-expand:
- Save scroll depth
- Let users pick only the question they care about
- Signal interactivity (mobile users expect tappable elements)

Technical: use `<details>` / `<summary>` HTML elements or an
accordion component. Both are accessible and work without JavaScript.

---

## PB-DISCOVER: Google Discover Compliance

Google Discover is the #1 mobile traffic source for short-form content.

| Requirement | Status | Notes |
|---|---|---|
| Unique og:image ≥ 1200px wide | Required | Use branded template |
| No clickbait titles | Required | Direct questions only |
| Substantial content (≥ 600 words) | Required | PB-BODY-01 enforces this |
| max-image-preview:large | Required | PB-UX-04 |
| No paywall or interstitials | Required | No gating on Prompt Bites |

---

## PB-CANNIBAL: Cannibalization Prevention Checklist

Run this checklist BEFORE publishing any Prompt Bite.

```
PRE-PUBLISH CANNIBALIZATION AUDIT
═══════════════════════════════════

- [ ] The exact H1 question is NOT answered as an H2 in any existing article
      (Search all content.ts files for the H1 keywords)

- [ ] The target query does NOT already rank in positions 1–5 for an existing page
      (Check GSC for the target query — if existing page ranks top 5, add a
       Quick Answer box to THAT page instead of creating a new Prompt Bite)

- [ ] The Prompt Bite links TO the relevant long-form parent (PB-LINK-01)

- [ ] The parent article does NOT link inline TO this Prompt Bite
      (Only via sidebar/footer widget — never inline body links)

- [ ] The title tag includes "Prompt Bites" (PB-META-01)
      (This differentiates in SERPs from long-form title tags)

- [ ] The meta description is structurally different from any existing page's meta
      (Check: does it end with "Quick answer from PromptQuorum."?)

- [ ] quickAnswerTop.question matches a real GSC query or PAA question

- [ ] If this article has a stated product-destination purpose (where-to-buy
      section, affiliate CTA, pillar/buying-guide link), that link is
      confirmed present via grep in the article file — for every language
      block — not just claimed in a completion report (PB-LINK-05)

PASS: All 8 boxes checked → proceed to publish (noindex during build phase)
FAIL: Any box unchecked → fix before creating the page
```

---

## PB-SOURCES: Sources Section (Adjusts Rule 10)

Base Rule 10 requires 3+ sources per page. Prompt Bites adjust to:

**Minimum 2 sources.** Maximum 4.

Prompt Bites are short — 3+ source links at the bottom of a 700-word article
looks disproportionate. Two well-chosen primary sources are sufficient.

**Priority sources for Prompt Bites:**
1. Official model card / GitHub repo (e.g., llama.cpp quantize README)
2. Official tool documentation (e.g., Ollama docs, LM Studio docs)
3. Benchmark source (e.g., HuggingFace Open LLM Leaderboard)

---

## PB-REGIONAL: Regional Context (Adjusts Rule 13)

Base Rule 13 requires EU/China/Japan perspectives on relevant articles.

For Prompt Bites:
- **EU/GDPR angle:** Include if the article involves data processing, cloud GPUs, or API usage. Skip for pure hardware/model questions.
- **China/Japan angle:** Skip unless the article specifically discusses Qwen (China) or model availability.
- **One sentence max** per region. Example: "EU teams requiring GDPR compliance should run this model locally via Ollama — no data leaves your hardware."

---

## PB-I18N: Multilingual Requirements

URL structure: `/[lang]/prompt-bites/[slug]`

| Language | URL example | Display name |
|---|---|---|
| EN | `/prompt-bites/how-much-vram-llama-8b` | Prompt Bites |
| DE | `/de/prompt-bites/how-much-vram-llama-8b` | Prompt Bites |
| FR | `/fr/prompt-bites/how-much-vram-llama-8b` | Prompt Bites |
| JA | `/ja/prompt-bites/how-much-vram-llama-8b` | プロンプトバイツ |
| ZH | `/zh/prompt-bites/how-much-vram-llama-8b` | Prompt Bites 速答 |

Slug stays English across all languages (consistent with /power-local-llm/).
All 5 language versions required before any single article goes live.

---

## CONTENT.TS FIELD TEMPLATE

```ts
// /prompt-bites/[slug] — content.ts entry template
{
  slug: 'how-much-vram-llama-8b',
  section: 'prompt-bites',
  seoTitle: 'How Much VRAM for Llama 3 8B? | Prompt Bites | PromptQuorum',
  title: 'How Much VRAM Do I Need for Llama 3 8B?',
  metaDescription: 'Llama 3 8B Q4_K_M needs ~6 GB VRAM. RTX 3060 12 GB runs it at 25 tok/s. Quick answer from PromptQuorum.',
  publishDate: '2026-05-20',
  lastUpdated: '2026-05-20',
  author: 'Hans Kuepper',
  educationalLevel: 'Intermediate',
  audience: 'Developers running local LLMs, hardware buyers',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-11-20',
  current_models_mentioned: ['Llama 3 8B'],
  current_hardware_mentioned: ['RTX 3060 12 GB'],
  is_living_page: false,
  parentArticle: '/local-llms/how-much-vram-local-llm',   // ← cannibalization anchor
  siblingBites: [                                           // ← cluster links
    '/prompt-bites/what-is-q4-k-m-quantization',
    '/prompt-bites/how-to-choose-quantization-level-vram',
  ],
  quickAnswerTop: {
    en: {
      question: 'How much VRAM do I need for Llama 3 8B?',
      answer: 'Llama 3 8B at Q4_K_M needs about 6 GB of VRAM. An RTX 3060 12 GB or MacBook with 16 GB unified memory runs it at 25 tokens per second.',
      bullets: [
        'Q4_K_M is the recommended quantization for this model',
        'Minimum 6 GB VRAM or 16 GB unified memory',
        'Ollama and LM Studio both support Llama 3 8B out of the box',
      ],
      updatedDate: '2026-05',
    },
    de: { /* ... */ },
    fr: { /* ... */ },
    ja: { /* ... */ },
    zh: { /* ... */ },
  },
  // content sections follow...
}
```

---

## LAUNCH_CHECKLIST

Do NOT switch any Prompt Bite from noindex to index until ALL of these pass:

```
PROMPT BITES LAUNCH CHECKLIST
══════════════════════════════

SECTION COMPLETENESS
- [ ] Hub page (/prompt-bites/) is live with all 30 article cards
- [ ] All 30 articles have content in all 5 languages
- [ ] All 30 articles have quickAnswerTop in all 5 languages
- [ ] All 30 articles have FAQ sections with 3–5 items each
- [ ] All 5 language versions of hub page are live

SCHEMA VALIDATION
- [ ] Every article emits Article + FAQPage + Speakable + BreadcrumbList schema
- [ ] Hub page emits CollectionPage + BreadcrumbList schema
- [ ] Schema tested via Google Rich Results Test (no errors on any page)

LINKING INTEGRITY
- [ ] Every article links to its parent long-form article
- [ ] Every article links to 1–2 sibling Prompt Bites
- [ ] Hub page links to all 30 articles
- [ ] Breadcrumbs render correctly (Home > Prompt Bites > [Title])
- [ ] No orphan Prompt Bites (every article reachable from hub)

CANNIBALIZATION AUDIT (run PB-CANNIBAL for each article)
- [ ] All 30 articles pass the 8-point cannibalization checklist

MOBILE UX
- [ ] All 30 articles score ≥ 90 on PageSpeed Insights (mobile)
- [ ] All tables render within viewport (no horizontal scroll)
- [ ] All touch targets ≥ 44×44px
- [ ] og:image present and ≥ 1200px wide on every page

BUILD
- [ ] npm run build — 0 errors
- [ ] Sitemap includes all 150 new URLs (30 × 5 languages)
- [ ] hreflang tags correct on all 150 URLs

LAUNCH STEPS (in order)
1. Remove noindex from all 150 URLs in one deploy
2. Submit updated sitemap to Google Search Console
3. Trigger IndexNow for all 150 URLs
4. Submit updated sitemap to Bing Webmaster Tools
5. Post announcement on X, Bluesky, Discord, LinkedIn
6. Monitor GSC for indexing (expect 48–72 hours for full crawl)

POST-LAUNCH (first 14 days)
- [ ] Day 1: Verify all 150 URLs appear in sitemap in GSC
- [ ] Day 3: Check coverage report for any indexing errors
- [ ] Day 7: First impression/click data in GSC
- [ ] Day 14: First meaningful CTR data — compare mobile vs desktop
```

---

*Last updated: May 18, 2026*
*Companion to: GEO_WRITING_GUIDELINES.md (v2026-04-20)*
*Section: /prompt-bites/ (30 articles + hub page)*
