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
| Prompt Engineering article | `Article`, `FAQPage` (if contains FAQs), `HowTo` (if contains numbered steps), `BreadcrumbList` |

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

## Rule 9: Pillar-Cluster Internal Linking Architecture

Every prompt engineering article must follow a three-direction linking pattern to signal a clear content hierarchy and topical clusters to AI systems.

**Upward link (to the pillar page):**
Every PE article must link once to the main pillar: `/prompt-engineering/what-is-prompt-engineering`
- Use semantic anchor text: "see the full definition of prompt engineering" or "for the fundamentals of prompt engineering"
- Place this link early (first or second section) or in the Key Takeaways

**Sideways links (within the same theme/column):**
Every PE article must link to at least 2 sibling articles in the same theme column:
- Example: A Fundamentals article (e.g. "Context Windows Explained") links to 2+ other Fundamentals articles (e.g. "AI Hallucinations", "Tokens & Costs")
- Anchor text example: "learn how few-shot prompting works with GPT-3 patterns"

**Downward links (to articles in other theme columns):**
Every PE article must link to at least 1 article from a different theme column:
- Example: A Fundamentals article links to one Frameworks article and/or one Techniques article
- Anchor text example: "the CO-STAR framework is a structured way to apply these principles"

**Mandatory Related Reading block:**
At the end of every PE article (before the FAQ section), add a "## Related Reading" section:
```markdown
## Related Reading
- [What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the pillar definition
- [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — step-by-step reasoning for logic tasks
- [CO-STAR Framework](/prompt-engineering/co-star-framework) — a structured template for complex prompts
```

**Rules for Related Reading:**
- Exactly 3 internal links as a bullet list
- Must include at least 1 link from a different theme column (to signal cross-cluster navigation)
- Brief 1–3 word description after each link, preceded by `—`

---

## Rule 10: External Sources and Further Reading

Every PE article must cite 2–3 high-authority external sources to ground claims in peer-reviewed research or official documentation. This increases credibility and citation frequency in AI overviews.

**Authority tiers (use in order of preference):**
1. **Peer-reviewed academic papers** — arXiv, ACL Anthology, NeurIPS, ICML proceedings
2. **Official documentation** — OpenAI, Anthropic, Google DeepMind, Hugging Face official blogs
3. **Authoritative news outlets** — Reuters, Bloomberg, The Guardian, Financial Times, Nikkei, Handelsblatt

**Do NOT link to:** personal blogs, Medium posts by unknown authors, unvetted sources, paywalled content.

**Format:**
- Cite using author/org and year in-text: `[Brown et al., 2020]` or `[OpenAI, 2023]`
- Provide the full link in a "Sources" section at the bottom or inline (your choice)
- Keep the sources section short — 2–3 sentences max, not a formal bibliography

**Example:**
```markdown
### Sources
- Brown et al., 2020. "Language Models are Few-Shot Learners" (arXiv:2005.14165) — the foundational GPT-3 paper demonstrating few-shot learning
- Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (arXiv:2201.11903) — the paper that proved step-by-step reasoning improves output quality
```

---

## Rule 11: Visible Last-Updated Date

Every PE article must display a visible publication or last-modified date near the top of the page. AI crawlers increasingly weight recency when selecting sources for citations.

**Format:** "Last updated: [Month Year]" (e.g. "Last updated: March 2026")

**When to update the date:**
- Update after substantive content changes: new stats, new FAQ entry, rewritten section, added examples
- Do NOT update for cosmetic edits: punctuation fixes, minor rephrasing, typo corrections

**Placement:** Display at the top of the article (below the title, above the intro) or in the Key Takeaways section.

**In content.ts:** The `publishDate` field displays this. Use the format "Last updated: March 2026" once an article has been revised; initial publication can use "Published March 2026".

---

## Rule 12: LLM Snippet Blocks

Each PE article must include 2–3 "snippet blocks" — short, standalone passages that an LLM can extract and quote verbatim. Snippet blocks must be clearly demarcated and self-contained.

**Format A — One-sentence definition box:**
```
In one sentence: Prompt engineering is the practice of designing text inputs to get reliable, accurate outputs from large language models.
```

Or use "In plain terms:" for a slightly longer explanation:
```
In plain terms: A prompt is not just a question — it is a structured instruction that tells an AI model exactly what to produce, in what format, and under what constraints.
```

**Format B — Compare/contrast bullets (max 3 items, one line each):**
```
Prompt engineering vs. fine-tuning:
- Prompt engineering changes the input; fine-tuning changes the model
- Prompt engineering requires no training; fine-tuning requires a labelled dataset
- Prompt engineering is reversible in seconds; fine-tuning takes hours and compute budget
```

**Format C — Compact definitive list:**
```
The seven building blocks of a prompt are: objective, context, instructions, examples, constraints, output format, and role.
```
- Each item gets exactly one line — no additional prose around it
- Use a bold heading or H3 to signal this is a reference block

**Placement within articles:**
- Near the top (in or before the Key Takeaways box)
- As the opening sentence of major sections
- Within FAQ entries (each answer should be a self-contained snippet)
- In the Related Reading section

**Why:** Snippet blocks make your content easier for AI systems to quote, extract, and reuse. They also improve readability for human readers.

---

## Rule 13: Global and Regional Perspective

Where an article addresses regulation, market adoption, model availability, or technical best practices, include at least one non-US perspective. This ensures global coverage and signals to AI systems that your content is internationally aware.

**Priority regions: EU, China, Japan**

**When to include regional perspective:**

- **Regulation:** Mention EU AI Act, China's Interim Measures for Generative AI (2023), or Japan's AI governance (METI)
- **Market leaders:** EU — Mistral AI (France); China — Baidu ERNIE, Alibaba Qwen, DeepSeek; Japan — Preferred Networks, SoftBank AI
- **Local model ecosystems:** "Chinese enterprises widely use Qwen 2.5 and DeepSeek V3 as open-source alternatives to GPT-series models"
- **Language-specific prompting:** "Japanese and Chinese prompt engineering differs from English — kanji/kana token ratios affect context window efficiency"
- **Infrastructure:** "Japanese enterprises often prefer on-premise model deployment under METI data residency guidelines"

**Guideline:** A single factual sentence per region is sufficient. Do not add padding or forced perspectives. Only include regional details where they are genuinely relevant to the topic.

**Examples:**
- ✅ "Mistral AI, developed by a French team, is widely used in Europe due to strong regulatory alignment with the EU AI Act"
- ✅ "Chinese models like Qwen 2.5 have faster token processing for CJK languages, making them preferable for multi-language prompts"
- ✅ "Japanese enterprises must consider METI's data governance guidelines when storing model outputs"
- ❌ "Prompt engineering is used around the world, including in Japan." (generic, adds no information)

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

**Additional for Prompt Engineering articles:**
- [ ] Article links up to `/prompt-engineering/what-is-prompt-engineering` (pillar link)
- [ ] Article links sideways to 2+ sibling articles in same theme column
- [ ] Article links down to 1+ article in a different theme column
- [ ] "Related reading" block present at end of article (exactly 3 internal links)
- [ ] 2–3 external source links included (peer-reviewed papers or official docs preferred)
- [ ] Visible last-updated date present near top of article
- [ ] 2–3 LLM snippet blocks present (definition box, compare/contrast, or compact list)
- [ ] Non-US perspective included where topic applies (EU/China/Japan)

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
| Missing pillar link | Fundamentals article with no link to "What Is Prompt Engineering?" | Add one upward semantic link to the pillar |
| Generic related reading | "See also: our other articles" | Use named, descriptive links with brief descriptions |
| Unsourced claims | "Chain-of-Thought improved accuracy by 40%" (no citation) | Add link to Wei et al. 2022 paper or official docs |
| US-only framing | "All major AI providers" (lists only OpenAI, Anthropic, Google) | Add Mistral, Qwen, DeepSeek, or regional context |
| Snippet-free prose | Long paragraph with no extractable definition or list | Add "In one sentence:", compare/contrast bullets, or compact list |
