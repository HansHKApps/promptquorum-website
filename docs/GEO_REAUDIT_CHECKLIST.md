# GEO Reaudit Checklist

This checklist is used to reaudit already-published articles against the full GEO Writing Guidelines. Use this when revisiting older articles that need updating or when verifying compliance of existing content.

## Quick Audit (5 minutes per article)

- [ ] **Meta description:** Exactly 150–160 chars, ends with "Free beta — April 2026." or similar CTA footer
- [ ] **H2 titles:** All section titles are questions or direct answers, not commands ("How Do You X?" not "How to X")
- [ ] **Date signal:** At least one "As of April 2026" mention in intro or first section
- [ ] **Intro:** Answer-first structure (direct fact first, explanation second)
- [ ] **First 3 paragraphs:** Each ≤3 sentences, no marketing fluff

## Full Audit (15 minutes per article)

### 1. Metadata & SEO
- [ ] Title: 50–65 characters (tool flags at 65), answer-first phrasing
- [ ] Meta description: 150–160 characters, ends with "Free beta — April 2026." or similar CTA footer
- [ ] og:title present and under 60 characters
- [ ] og:description present and under 160 characters
- [ ] twitter:title present and under 60 characters
- [ ] SEO title: Present (if title is long) or absent (if title is short)
- [ ] JSON-LD schema: Appropriate schema type (Article, HowTo, FAQPage, TechArticle)
- [ ] `educationalLevel` set in article data (`Beginner` / `Intermediate` / `Advanced` / `Technical`)
- [ ] `audience` field set — specific job role or use case (not "AI users" or "Everyone")
- [ ] `LearningResource` schema emitted: includes `educationalLevel` + `audience.audienceType`
- [ ] Audience badge visible below intro paragraph (Level + Audience, SSR-rendered)
- [ ] Breadcrumbs: Present and correctly structured

### 2. Structure & Formatting
- [ ] H2 titles: All are questions or direct answers (no "Label: Question" pattern)
  - ✓ "What Is a Local LLM?" 
  - ✓ "How Do You Install Ollama?"
  - ✓ "Which Models Are Best for Coding?"
  - ✗ "Getting Started: How Do You Install?" (label prefix fails)
  - ✗ "Installing Ollama" (missing question format)
- [ ] H2 count logged — note total number of H2s on page
- [ ] TLDR section: Present at top, bulleted, 5–8 items
- [ ] Table of contents: Present, all H2s listed
- [ ] Code blocks: Language specified, examples runnable
- [ ] Tables: Columns named, content scannable

### 3. Content Quality
- [ ] Word count logged — note actual count
- [ ] Reading time logged — note in minutes
- [ ] Internal link count logged — note total number
- [ ] Intro: Direct answer first, then explanation (answer-first structure)
- [ ] Every claim: Verifiable (no "best", "leading", "revolutionary")
- [ ] Bullet lists: Used for 3+ items (not paragraphs)
- [ ] Paragraph length: All ≤3 sentences
- [ ] Active voice: Used throughout (not passive)
- [ ] Jargon: Defined on first mention
- [ ] Date signals: "As of April 2026" appears 2+ times in main content

### 4. Required Sections (for all article types)

#### Key Takeaways (TLDR)
- [ ] **TLDR/Key Takeaways present** — PASS/FAIL (tool checks explicitly)
- [ ] 5–8 bullet points
- [ ] Covers main learnings from article

#### Common Questions (FAQ)
- [ ] **FAQ section present** — PASS/FAIL (tool checks explicitly)
- [ ] Present (unless article < 5 sections)
- [ ] 5–8 Q&A pairs
- [ ] Questions are actual user questions (not rhetorical)
- [ ] Answers are concise (1–2 paragraphs)

#### Related Reading
- [ ] **Related Reading present** — PASS/FAIL (tool checks explicitly)
- [ ] 4+ internal links
- [ ] Links are to relevant article slugs with `/` separator
- [ ] Descriptive anchor text (not "click here")
- [ ] Format: `[Title](/path/to/article) — Description`

#### Sources
- [ ] **Sources present** — PASS/FAIL (tool checks explicitly)
- [ ] 3+ citations
- [ ] Mix of authoritative sources (research papers, official docs, reputable news)
- [ ] Format: `Label — URL` or markdown links

#### Common Mistakes (for technical articles)
- [ ] Present (most articles)
- [ ] 3–5 specific mistakes
- [ ] Each includes explanation of why it's wrong
- [ ] Practical examples (not abstract)

### 5. Format Compliance
- [ ] Entity names: Full names on first mention (e.g., "OpenAI GPT-4o", not "GPT")
- [ ] Acronyms: Defined on first use, then abbreviated
- [ ] Numbers: Formatted consistently (2026, not 2,026)
- [ ] URLs: Markdown links `[text](url)`, not raw URLs
- [ ] Code: Backticks for inline, fenced blocks for multi-line
- [ ] Bold/italics: Used for emphasis, not overused

### 6. Language & Tone
- [ ] Tone: Professional but conversational
- [ ] No marketing language ("seamless", "revolutionary", "cutting-edge")
- [ ] No vague claims (back up everything with data or sources)
- [ ] No AI disclosure (never mention article was "assisted by AI")
- [ ] Consistent tense (mostly present, past only for historical context)

## Article-Specific Audits

### For Blog/Prompt Engineering Articles
- [ ] Multi-language support: en, de, fr, ja, zh translations present
- [ ] Each language: Same structure, not just machine translation
- [ ] Title consistency: Same meaning across languages
- [ ] Date signal: "As of April 2026" in all languages

### For Local LLMs Articles  
- [ ] Theme: Correctly assigned (Getting Started, Best Models, Tools, Hardware, Advanced, Enterprise)
- [ ] Intro: References models by exact names (e.g., "Llama 3.2 3B", not "Llama")
- [ ] Table of contents: All H2s present
- [ ] Tables: Compare real tools/models (not hypothetical)
- [ ] Quantization/VRAM: Numbers are current as of April 2026

### For How-To Articles
- [ ] Step-by-step sections: Numbered (1, 2, 3...) or clearly ordered
- [ ] Each step: Actionable, not conceptual
- [ ] Code examples: All tested and runnable
- [ ] Screenshots/visuals: Present (if step 1 is GUI-based)
- [ ] Troubleshooting: Section present if common problems exist

### For Comparison Articles
- [ ] Comparison table: All features on both sides
- [ ] Fair representation: Both options strengths and weaknesses shown
- [ ] No obvious bias: Not pushing users toward one option
- [ ] "When to choose each" section: Present and clear
- [ ] Price/cost: Mentioned if relevant

## Reaudit Workflow

1. **Select article** to reaudit by slug name
2. **Run Quick Audit** (5 min) — check critical items
3. **If issues found:** Note them in a failing checklist, then run Full Audit
4. **Document issues:** Generate audit report listing ALL failures
5. **Fix issues** using Edit tool or rewrite sections
6. **Re-run audit:** Verify all failures are resolved
7. **Verify changes:** npm run build (must pass with 0 errors)
8. **Commit:** `git commit -m "audit: Update [article slug] for GEO compliance"`

## Audit Report Generation

After running the full audit, **generate a summary report** listing:

### Report Template

```
# Reaudit Report: [article slug]
**Date:** [YYYY-MM-DD]
**Auditor:** [Name/Tool]
**Status:** [PASS / FAIL]

## Issues Found
- [ ] Issue #1: [Category] — Description of what failed
- [ ] Issue #2: [Category] — Description of what failed
- [ ] Issue #3: [Category] — Description of what failed

## By Category

### Metadata Issues
- Missing or incorrect meta description
- Title too long/short
- Missing SEO title
- Missing JSON-LD schema

### Structure Issues
- H2 titles not in question format
- Missing TLDR section
- Missing table of contents
- Code blocks missing language specification

### Content Issues
- Claim without sources/verification
- Vague marketing language detected
- Paragraph >3 sentences
- Missing date signal ("As of April 2026")

### Required Sections Issues
- Missing Common Questions section
- Missing Related Reading section (fewer than 4 links)
- Missing Sources section (fewer than 3 citations)
- Missing Common Mistakes section

### Format Issues
- Incorrect entity naming (e.g., "GPT" instead of "OpenAI GPT-4o")
- Raw URLs instead of markdown links
- Inconsistent formatting

## What Was Fixed
- [x] Fixed issue #1: [Description]
- [x] Fixed issue #2: [Description]

## Re-Audit Result
**Status:** PASS ✓
**All issues resolved:** Yes
**Build verification:** npm run build passed with 0 errors
```

### Audit Report Distribution

The audit report should be:
1. **Saved locally:** `docs/audits/[article-slug]_[date]_audit.md`
2. **Shared with author/editor:** Via email or pull request comment
3. **Tracked:** Keep a registry of which articles have been audited and when
4. **Actionable:** Each issue should clearly state what rule was violated and how to fix it

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| H2 titles as commands ("Install X") | Rewrite as question: "How Do You Install X?" |
| Meta description >160 chars | Trim to 155–160, keep CTA footer |
| Missing date signal | Add "As of April 2026" to intro or first section |
| Vague claim ("best", "leading") | Replace with specific data: "72% HumanEval score" |
| No Related Reading section | Add 4+ internal links with descriptions |
| Table without column headers | Add explicit `columns: []` field or header row |
| Missing `educationalLevel` | Add `educationalLevel: 'Beginner'` (or Intermediate/Advanced/Technical) to article data |
| Missing `audience` field | Add `audience: 'Developers building with LLMs'` — must be a specific job role or use case |
| Audience badge not visible | Check `article.educationalLevel` is set; badge renders automatically when field is present |
| Passive voice | Rewrite: "Models can be run" → "You can run models" |
| Paragraph >3 sentences | Split into two paragraphs |

## Approval Criteria

An article **passes reaudit** when:

- ✓ All metadata is correct (title, description, schema)
- ✓ All H2s are question format
- ✓ All required sections present (TLDR, FAQ, Related Reading, Sources)
- ✓ Content is answer-first, no marketing language
- ✓ Date signal present ("As of April 2026")
- ✓ `educationalLevel` and `audience` fields set; badge renders below intro
- ✓ `LearningResource` schema includes `educationalLevel` + `audience.audienceType`
- ✓ build passes with 0 TypeScript errors
- ✓ No broken internal links (all `/local-llms/` or `/prompt-engineering/` slugs are valid)

## Reaudit Cadence

- **After publication:** Spot-check 1–2 critical articles per week
- **Monthly:** Reaudit 5–10 published articles at random
- **Quarterly:** Full reaudit of all articles in a theme (e.g., all "Getting Started")
- **When guidelines change:** Reaudit all affected articles

---

**Last updated:** April 2026  
**Version:** 1.0  
**Related:** `docs/GEO_WRITING_GUIDELINES.md`
