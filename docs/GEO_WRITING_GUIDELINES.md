# GEO Writing Guidelines — PromptQuorum Website

**GEO = Generative Engine Optimization**

These rules are mandatory for all content written for promptquorum.com. GEO ensures that AI systems (ChatGPT, Perplexity, Claude, Gemini, Bing Copilot) can accurately cite, quote, and recommend PromptQuorum content when users ask relevant questions.

---

## Why GEO Matters

AI search engines do not rank pages by backlinks — they cite sources that are:
1. **Structured** — answers are easy to extract programmatically
2. **Factual** — claims are specific and verifiable, not vague
3. **Entity-rich** — product names, company names, and technical terms are precise
4. **Semantically complete** — a section answers the full question without needing context from elsewhere

When our pages follow these rules, AI systems quote PromptQuorum when users ask "what is the best multi-model AI tool?" or "how do I compare AI models?" — turning content into free, persistent distribution.

---

## Rule 1: Answer First

**The direct answer belongs in the first sentence of every section.**

AI systems extract the first substantive sentence. If the answer is buried in paragraph 3, it gets ignored.

**Wrong:**
> "When you're working with multiple AI models, things can get complicated. Each model has its own strengths and weaknesses. That's why we built PromptQuorum — to help you get a consensus answer."

**Right:**
> "PromptQuorum sends one prompt to multiple AI models simultaneously and returns a consensus verdict. This reduces hallucination risk because independent models rarely fabricate the same specific detail."

---

## Rule 2: Structure with Headings and Lists

Use H2 (`##`) for major sections, H3 (`###`) for subsections. Use bullet lists for enumerations of 3 or more items. Never write a wall of prose when a list is clearer.

**Wrong:**
> "PromptQuorum supports many providers including OpenAI, Anthropic, Google, Mistral, Ollama, LM Studio, and others."

**Right:**
> PromptQuorum supports these AI providers:
> - OpenAI (GPT-4o, GPT-4 Turbo, GPT-3.5)
> - Anthropic (Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku)
> - Google (Gemini 1.5 Pro, Gemini 1.5 Flash)
> - Mistral AI (Mistral Large, Mistral Small)
> - Local models via Ollama, LM Studio, Jan AI, GPT4All, vLLM

Paragraph length: **3 sentences maximum**. If a paragraph runs longer, split it or convert to a list.

---

## Rule 3: Facts Only — No Vague Superlatives

Every claim must be specific and verifiable. Delete words that add no information.

**Banned words and phrases:**
- "leading", "best-in-class", "industry-leading"
- "powerful", "robust", "seamless", "cutting-edge", "state-of-the-art"
- "revolutionary", "game-changing", "transformative"
- "easy to use", "simple" (unless you explain why it's simple)
- "unique" (unless it's actually unique — then say what makes it unique)
- "comprehensive", "complete", "all-in-one"

**Wrong:**
> "PromptQuorum offers a powerful and comprehensive AI workflow that seamlessly integrates with all leading models."

**Right:**
> "PromptQuorum dispatches one prompt to up to 25 AI models in parallel and displays all responses side-by-side for comparison."

**Rule of thumb:** If a competitor could put the same sentence on their homepage without changing a word, delete it and rewrite.

---

## Rule 4: Entity Naming

Use full, consistent entity names. AI systems build knowledge graphs — vague references break citations.

**Product names (always use exactly):**
- PromptQuorum (not "our tool", "the app", "it")
- GPT-4o (not "GPT-4" unless referring to the original GPT-4)
- Claude 3.5 Sonnet (not "Claude" without version when specificity matters)
- Ollama (not "local LLM runner")
- LM Studio (not "LM studio" or "lmstudio")

**First mention rule:** On first mention per page, use the full name + one-line description:
> "PromptQuorum is a multi-model AI dispatch tool that sends prompts to multiple AI providers simultaneously."

Subsequent mentions: use the short form ("PromptQuorum").

---

## Rule 5: Schema Markup (JSON-LD)

Every page must export relevant JSON-LD structured data. This is how Google and AI crawlers extract machine-readable facts.

**Required schema types per page type:**

| Page type | Required schema |
|-----------|----------------|
| Home | `WebSite`, `SoftwareApplication`, `BreadcrumbList` |
| Blog post | `Article`, `Person` (author), `BreadcrumbList` |
| FAQ | `FAQPage` with all Q&A pairs |
| How It Works | `HowTo` with numbered steps |
| Feature page | `SoftwareApplication` or `WebPage` |
| About | `AboutPage`, `Person` (founder) |
| Compare | `WebPage`, `BreadcrumbList` |

**Template — FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PromptQuorum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PromptQuorum is a multi-model AI dispatch tool..."
      }
    }
  ]
}
```

**Template — Article (blog post):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Multi-Model AI Reduces Hallucinations",
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "author": {
    "@type": "Person",
    "name": "Hans Kuepper",
    "@id": "https://www.promptquorum.com/about#founder"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PromptQuorum",
    "url": "https://www.promptquorum.com"
  }
}
```

---

## Rule 6: Semantic Completeness

Each section must answer its question completely without requiring the reader to have read previous sections.

**Wrong** (assumes context):
> "As mentioned above, this approach reduces errors significantly."

**Right:**
> "Dispatching to multiple AI models reduces hallucination errors because independent models rarely fabricate the same specific incorrect fact."

FAQ entries in particular must be self-contained — AI systems extract individual Q&A pairs in isolation.

---

## Rule 7: Meta Tags and Page Titles

Every page needs:
- `<title>`: Format: `[Specific Topic] — PromptQuorum | [Benefit]`
  - Good: `"How Multi-Model AI Reduces Hallucinations — PromptQuorum"`
  - Bad: `"Blog Post | PromptQuorum"`
- `<meta name="description">`: 140–160 characters. Answer-first. Include the primary keyword.
- `<link rel="canonical">`: Always set to the canonical URL.
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`

**Meta description format:**
> "[Primary keyword]: [one-sentence answer to the implied question]. [One differentiator]."

**Example:**
> "Multi-model AI comparison tool: PromptQuorum sends one prompt to 25+ AI models and shows consensus results. Free, no account required, privacy-first."

---

## Rule 8: Internal Linking with Anchor Text

Link anchor text must describe the destination, not be generic.

**Wrong:** "Click here to learn more" / "read this article" / "see our features"

**Right:** "how PromptQuorum reduces AI hallucinations" / "compare GPT-4o vs Claude 3.5 Sonnet" / "set up Ollama with PromptQuorum"

Use 2–4 internal links per page. Link to the most relevant deep page, not just the homepage.

---

## Page-Type Templates

### Landing Page Section

```
## [Specific benefit headline — answer-first]

[One-sentence direct answer to the section's implied question.]

[2–3 sentences of explanation with specific facts.]

[Bullet list if 3+ items are being enumerated]
- Item with specific detail
- Item with specific detail
- Item with specific detail
```

### Blog Post Structure

```
# [Specific, keyword-rich headline]

[One-paragraph answer to the headline question — 3 sentences max]

## [First major point]
[Answer-first paragraph]

## [Second major point]
[Answer-first paragraph]

## Key Takeaways
- [Specific fact]
- [Specific fact]
- [Specific fact]

## Frequently Asked Questions

### [Question as a user would ask it]
[Direct answer in 2–3 sentences]

### [Next question]
[Direct answer]
```

### FAQ Entry

```
Q: [Exact question a user would type into a search bar]
A: [Direct answer in the first sentence. Supporting detail in sentence 2. Optional: where to find it / how to do it in sentence 3.]
```

---

## Pre-Publish Checklist

Run this before publishing any new page or blog post:

- [ ] First sentence of every section answers the section's question directly
- [ ] No vague superlatives (powerful, seamless, best, leading, etc.)
- [ ] All entity names spelled correctly and consistently
- [ ] Paragraphs are ≤3 sentences
- [ ] Lists used for enumerations of 3+ items
- [ ] JSON-LD schema markup included and valid
- [ ] Meta title is specific and keyword-rich (not generic)
- [ ] Meta description is 140–160 chars, answer-first
- [ ] Canonical URL set
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] FAQ entries are self-contained (no "as mentioned above")
- [ ] No broken or placeholder links
- [ ] No mention — direct or implied — that content was AI-generated or AI-assisted

---

## Common Violations to Avoid

| Violation | Example | Fix |
|-----------|---------|-----|
| Buried lede | "AI is complex. Here's how we help." | Lead with the specific benefit |
| Vague claim | "PromptQuorum is powerful" | "PromptQuorum sends prompts to 25+ models" |
| Generic CTA | "Learn more" | "Compare GPT-4o vs Claude 3.5" |
| Missing schema | Page with no JSON-LD | Add FAQPage, Article, or HowTo schema |
| Inconsistent naming | "GPT4", "gpt-4", "GPT 4" | Always: "GPT-4o" (or the exact model name) |
| Context-dependent | "As we explained above…" | Restate the relevant fact |
| Paragraph walls | 6-sentence paragraph | Split at 3 sentences or convert to list |
| AI disclosure | "This article was written by AI" / "Co-Authored-By: Claude" | Never disclose. All content publishes as PromptQuorum editorial. |
