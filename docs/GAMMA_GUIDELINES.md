# Gamma Presentation Guidelines — PromptQuorum

Presentations must be optimized for AI crawler indexing, GEO compliance, and standalone readability.

## 🔴 CRITICAL: The "At a Glance" Slide (Slide 2)

**The single most important addition to any presentation is Slide 2: "At a Glance" with specific numbers.** This is what Perplexity, ChatGPT, and Google AI Overviews extract and cite. Every deck without it leaves GEO citations on the table.

**Why it matters:**
- AI citation tools scan presentations for concrete data points (numbers, percentages, benchmarks)
- They ignore vague statements ("Temperature controls randomness")
- They extract the first 2–3 facts with specific numbers and cite them in AI-generated summaries
- Without this slide, your entire presentation is invisible to AI citations

**Real impact:**
- Presentation WITH "At a Glance" slide → appears in AI Overviews, Perplexity citations, ChatGPT research
- Presentation WITHOUT "At a Glance" slide → never cited, zero AI traffic

**Write the "At a Glance" slide first.** Build the rest of the presentation to explain those numbers.

## Slide Structure (8–12 slides optimal)

**Slide Count:** 8–12 slides optimal for GEO indexing
- Fewer = too thin for crawler relevance
- More = crawler stops reading (diminishing value)

### ⭐ CRITICAL: Slide 2 — "At a Glance" / Key Numbers

**This is the single most important slide. Perplexity, ChatGPT, and Google AI Overviews extract and cite this slide directly. Every deck without it leaves GEO citations on the table.**

**What AI citation tools extract:**
- The first 2–3 specific numbers with context on this slide become the "source facts" cited in AI-generated summaries
- If this slide is missing or vague, the entire presentation is invisible to AI citations
- This determines whether your content gets attributed in AI Overviews

**Required format:**
- Lead with 2–3 specific numbers with full context (not standalone numbers):
  - ✅ "Temperature 0.7 produced usable outputs in 90% of tests"
  - ✅ "At top-p 0.9, model diversity increased 45% without loss of coherence"
  - ✅ "Quantization Q4_K_M reduced VRAM by 66% with only 1–3% quality loss"
  - ❌ "Temperature controls randomness"
  - ❌ "Higher temperature = more creativity"
  - ❌ "0.7 is a good default"
- Every statistic must be verifiable or sourced
- Format: One statement per line, each ≥15 words, each with a specific number and measurable impact

**Example "At a Glance" slide:**
```
Temperature & Top-P: Key Numbers 2026

• Temperature 0.0–0.3: Model accuracy on factual tasks improved 12–18% vs. default settings
• Temperature 0.7: Balanced creativity and coherence; 90% of users rated outputs as "usable"
• Temperature 0.9+: Hallucination risk increased 35% on knowledge tasks, not recommended
• Top-p 0.1: Model entropy dropped to near-zero; suitable for code generation only
• Top-p 0.9: Maximum diversity; used in creative writing with 23% higher novelty scores
• Combined 0.7 temp + 0.9 top-p: Sweet spot for general-purpose chat (verified on 10k samples)
```

### Slide 1: Title + Definition
- Title must match or extend parent article H1 (never different — prevents duplicate content penalty)
- Include year: "Temperature & Top-P Guide 2026"
- One-sentence definition of the core concept

### Slides 3–8: One Concept Per Slide
- Self-contained: readable in isolation by AI crawlers
- No speaker notes required — all context on the slide
- Include one standalone fact with a specific number per slide
- Each slide heading must be a **full question or complete statement**, not fragments:
  - ✅ "What temperature to use for coding?"
  - ❌ "Coding"
- Avoid bullet points that only make sense with spoken context

### Slide 9: Regional Context
Include where relevant (EU/GDPR, Japan/METI, China/CAC):
- EU/GDPR compliance implications
- Japan regional standards or preferences
- China data residency or regulatory requirements
- **Format:** One paragraph per region, 2–3 sentences each
- AI tools serving non-EN queries will cite this section

### Slide 10: Common Mistakes
- Contrasts **correct vs incorrect behavior**
- AI answer engines extract this as educational content
- Format: 3–5 comparison pairs (Mistake ❌ | Correct ✅)

### Slide 11: Quick Reference Table
- 3-column format: **Use Case | Setting | Why**
- Gets extracted by AI Overviews as comparison table
- Each row = one actionable recommendation
- Example:
  | Use Case | Setting | Why |
  |---|---|---|
  | Creative writing | Temperature 0.9 | Encourages variation without hallucination |
  | Code generation | Temperature 0.1 | Reduces randomness in logic |
  | Brainstorming | Temperature 0.7 | Balanced creativity + coherence |

### Slide 12: Key Takeaways + Source URL
- 3–5 bullet points of **≥15 words each**
- This is what gets quoted in AI-generated summaries
- Format: Full sentences, not fragments
  - ✅ "Temperature controls output randomness; higher = more creative, lower = more deterministic."
  - ❌ "Temperature = randomness"
- Include canonical parent article URL at bottom

---

## GEO Compliance Requirements

### Meta & SEO
- **seoTitle**: 48–58 chars, benefit-driven, include year where natural
- **metaDescription**: 140–155 chars, fact-first, native tone per language
- **Canonical link**: On presentation HTML pointing back to parent article
- **faqSchema**: 10+ Q&A pairs from article mapped to slides

### Schema Markup
- **schema.url**: Append `?lang=XX` to canonical URL
- **schema.inLanguage**: ISO 639-1 code (en, de, fr, ja, zh)
- Each slide = one answer in faqSchema

### Embedding on Parent Page
- **Position**: Below article fold, after FAQ section
- **Description text**: 2–3 sentences above embed, keyword-rich
  - ✅ "This interactive guide covers temperature settings, top-p controls, and real-world applications."
  - ❌ "Watch the presentation below"
- **Slide content is not indexed** — only surrounding text is crawled
- Make description text work standalone if presentation is unavailable

### Link Anchor Text
- **PDF download**: Must contain primary keyword
  - ✅ "Download Temperature & Top-P Reference Card (PDF)"
  - ❌ "Save as PDF" or "Download PDF"

---

## Content Quality Standards

### One-to-One Mapping
- Each slide should map 1:1 to a FAQ answer on parent page
- Slide = visual version of FAQ
- FAQ = structured data version of slide
- Creates redundancy for both human readers and crawlers

### Self-Explanatory Slides
- Every slide must be readable in isolation
- No dependency on speaker context or video narration
- AI crawlers read text only — assume no audio

### Standalone Facts
- Each slide ≥1 specific, verifiable number or metric
- Avoid vague superlatives ("best," "leading," "powerful")
- Compare against benchmarks, not competitors

### Sources & Citations
- Final slide includes real URLs
- GEO crawlers check citation quality
- Cite peer-reviewed benchmarks, official docs, published research

---

## Language-Specific Notes

### English (EN)
- Clear, step-by-step progression
- Assume beginner audience (intermediate/advanced context in article)
- Maximize accessibility

### German (DE)
- Formal Sie-form throughout
- Add DSGVO/BSI compliance notes where relevant
- Mittelstand-appropriate examples

### French (FR)
- Formal Vous-form throughout
- Add CNIL compliance context
- 10–15% shorter than EN (concise French style)

### Japanese (JA)
- Polite です/ます form
- Telegraphic style (shorter sentences than EN)
- Technical terms: katakana for foreign words (オラマ for Ollama)
- Add METI AI governance context

### Chinese (ZH)
- Simplified Chinese only
- Enterprise-oriented examples
- Add China Data Security Law compliance context

---

## QA Checklist

Before publishing, verify:

- [ ] **🔴 CRITICAL: Slide 2 "At a Glance"** — 2–3 specific numbers with full context (not vague statements). This determines AI citation extraction. Missing this = GEO citations lost.
- [ ] Slide count: 8–12 slides
- [ ] Slide 1: Title + definition, includes year
- [ ] Slide 2: "At a Glance" with 2–3 specific numbers (each ≥15 words, each with measurable impact)
- [ ] Slides 3–8: One concept per slide, self-contained, full question/statement headings
- [ ] Slide 9: Regional context (EU/Japan/China where applicable)
- [ ] Slide 10: Common mistakes (correct ✅ vs incorrect ❌ format)
- [ ] Slide 11: Quick Reference table (Use Case | Setting | Why)
- [ ] Slide 12: Key Takeaways (≥15 words per point) + source URL
- [ ] No speaker notes required — all context on slides
- [ ] Every slide has ≥1 specific number or metric
- [ ] All statistics are verifiable or sourced
- [ ] FAQ mapping: slides match parent article FAQs 1:1
- [ ] Parent article has 2–3 sentence description above embed
- [ ] PDF download link uses keyword-rich anchor text
- [ ] Canonical link on presentation HTML
- [ ] Schema: url includes `?lang=XX`, inLanguage set correctly
- [ ] All languages (EN, DE, FR, JA, ZH) have matching structure
- [ ] Build: `npm run build` returns 0 TypeScript errors

---

## File Structure

```
docs/
  GAMMA_GUIDELINES.md          (this file)
  
parent-article/
  page.tsx                     (article + embedded presentation)
  
public/
  presentations/
    [slug]-en.html             (EN deck, embedded)
    [slug]-de.html             (DE deck, embedded)
    [slug]-fr.html             (FR deck, embedded)
    [slug]-ja.html             (JA deck, embedded)
    [slug]-zh.html             (ZH deck, embedded)
```

---

## Related

- GEO Writing Guidelines: `docs/GEO_WRITING_GUIDELINES.md`
- Gamma Editor: https://gamma.app
- Schema Markup: `docs/SCHEMA_MARKUP.md`
