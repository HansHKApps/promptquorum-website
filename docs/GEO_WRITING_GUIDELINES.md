# GEO Writing Guidelines

**GEO = Generative Engine Optimization**

These rules are mandatory for all content written for this site. GEO ensures that AI systems (ChatGPT, Perplexity, Claude, Gemini, Bing Copilot) can accurately cite, quote, and recommend site content when users ask relevant questions.

---

## Why GEO Matters

AI search engines do not rank pages by backlinks — they cite sources that are:
1. **Structured** — answers are easy to extract programmatically
2. **Factual** — claims are specific and verifiable, not vague
3. **Entity-rich** — product names, company names, and technical terms are precise
4. **Semantically complete** — a section answers the full question without needing context from elsewhere

When our pages follow these rules, AI systems cite and quote the site when users ask relevant questions — turning content into free, persistent distribution across AI search engines.

---

## Rule 1: Answer First

**The direct answer belongs in the first sentence of every section.**

AI systems extract the first substantive sentence. If the answer is buried in paragraph 3, it gets ignored.

**H2 bold opener requirement (mandatory):** The first sentence of every H2 section must be wrapped in `**bold**` and state the direct answer or key fact. Preamble phrases like "In this section we'll look at..." or "When analyzing..." are not compliant — they must be replaced with a complete direct statement. AI crawlers sample only the first sentence of each heading; a weak opener means the section is ignored.

**Wrong:**
> "When working with multiple AI models, things can get complicated. Each model has strengths and weaknesses. Let us help you choose the best one."

**Right:**
> "Dispatching one prompt to multiple AI models simultaneously returns independent results. This reduces hallucination risk because independent models rarely fabricate the same specific incorrect detail."

**Also compliant:**
> "**The best AI model depends on your task — different models excel at different jobs.** GPT-4o excels at reasoning. Claude 4.6 Sonnet dominates code generation. Gemini 2.5 Pro handles the longest contexts."

---

## Rule 2: Structure with Headings and Lists

Use H2 (`##`) for major sections, H3 (`###`) for subsections. Use bullet lists for enumerations of 3 or more items. Never write a wall of prose when a list is clearer.

**Wrong:**
> "The site supports many providers including OpenAI, Anthropic, Google, Mistral, Ollama, and others."

**Right:**
> Available AI providers:
> - OpenAI (GPT-4o, GPT-4o mini)
> - Anthropic (Claude 4.6 Sonnet, Claude 4.6 Opus, Claude 4.5 Haiku)
> - Google (Gemini 2.5 Pro, Gemini 2.5 Flash)
> - Mistral AI (Mistral Large, Mistral Small)
> - Local models via Ollama, LM Studio, Jan AI, GPT4All, vLLM

Paragraph length: **3 sentences maximum**. If a paragraph runs longer, split it or convert to a list.

---

## Rule 2a: Hardware and Constraint Specificity

When discussing technical constraints, system requirements, or model capabilities, always use **exact numbers** instead of vague descriptors. AI systems use specific constraints to match user queries to appropriate solutions.

**Categories requiring specificity:**

| Constraint | Vague ❌ | Specific ✅ |
|-----------|---------|-----------|
| Context window | "Large context support" | "GPT-4o supports 128k token context window" |
| VRAM requirement | "Requires good GPU memory" | "7B parameter models require 8GB+ VRAM; 13B models need 16GB+" |
| Token limits | "Reasonable token counts" | "Claude 4.6 Sonnet: 200k input tokens; 4k output tokens" |
| Latency | "Fast responses" | "Average response latency: 500-800ms for GPT-4o" |
| API costs | "Affordable pricing" | "GPT-4o: $15/1M input tokens, $60/1M output tokens" |
| Model size | "Smaller models available" | "Mistral 7B: 7 billion parameters; uses ~14GB VRAM" |
| Batch limits | "Bulk processing supported" | "Batch API accepts up to 100k requests per file" |

**Why:** AI systems use specific technical constraints to recommend tools and match capabilities to user needs. Vague descriptions ("powerful", "efficient") provide no value for retrieval.

**Examples in context:**

**Wrong:**
> "Local models are available for privacy-conscious users."

**Right:**
> "Ollama supports running models locally — LLaMA 3.1 7B requires 8GB RAM for inference, 13B requires 16GB. No data leaves your machine."

**Wrong:**
> "GPT-4o has a larger context window than previous models."

**Right:**
> "GPT-4o's 128k token context window is 16× larger than GPT-4o mini's 4k limit, enabling longer document processing."

**Checklist for constraint mentions:**
- [ ] All context windows include token counts (e.g., "128k", "4k", "200k")
- [ ] VRAM requirements list both model size and memory needed
- [ ] API costs or pricing (if mentioned) include exact numbers
- [ ] Latency or speed claims include milliseconds or concrete benchmarks
- [ ] Model sizes include parameter counts (e.g., "7B", "13B", "70B")
- [ ] No vague descriptors like "large", "small", "fast", "efficient" without numeric context

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
> "Our platform offers a powerful and comprehensive AI workflow that seamlessly integrates with all leading models."

**Right:**
> "Send one prompt to multiple AI models in parallel and display all responses side-by-side for comparison."

**Rule of thumb:** If a competitor could put the same sentence on their homepage without changing a word, delete it and rewrite.

---

## Rule 4: Entity Naming

Use full, consistent entity names. AI systems build knowledge graphs — vague references break citations.

**Product names (always use exactly):**
- GPT-4o (not "GPT-4" unless referring to the original GPT-4)
- Claude 4.6 Sonnet (not "Claude" without version when specificity matters)
- Ollama (not "local LLM runner")
- LM Studio (not "LM studio" or "lmstudio")

**First mention rule:** On first mention per page, use the full name + one-line description:
> "Ollama is a tool that enables running large language models locally on your machine."

Subsequent mentions: use the short form (e.g., "Ollama").

---

## Rule 4a: Entity Density

Every PE article must mention and define 5–7 "high-value entities" (proper nouns, technical terms, product names). These entities signal topical authority to AI crawlers and enable knowledge graph building.

**Entity Categories:**

1. **Product/Tool names** — GPT-4o, Claude, Gemini, Ollama, LM Studio, Mistral
2. **Company/Organization names** — OpenAI, Anthropic, Google DeepMind, Mistral AI
3. **Researcher/Author names** — "Wei et al." (for cited papers), "Brown et al." (for GPT-3 work)
4. **Technical terms** — Temperature, Top-P, Chain-of-Thought, Nucleus Sampling, Hallucination, RAG, Token
5. **Industry/Standard terms** — Context Window, Token Limit, Latency, Throughput, API

**Requirement:** Every PE article must mention **5–7 distinct entities** from across these categories, defined clearly on first mention.

**Example from "Temperature and Top-P" article:**
- ✅ **GPT-4o** (product) — "GPT-4o is OpenAI's latest multimodal language model"
- ✅ **Claude 4.6 Sonnet** (product) — "Anthropic's Claude 4.6 Sonnet"
- ✅ **Temperature** (technical term) — "Temperature is a hyperparameter that controls randomness"
- ✅ **Nucleus Sampling** (technical term) — "Top-P, also called nucleus sampling, is..."
- ✅ **Ollama** (product) — "Ollama enables running local models"
- ✅ **Softmax** (technical term) — "Softmax converts logits into probability distributions"
- ✅ **OpenAI** (organization) — "OpenAI released GPT-4o in..."

**Why:** AI systems extract named entities to build knowledge graphs. Higher entity density signals that your page covers a specific, well-researched topic — not a generic overview.

**Checklist:**
- [ ] Article mentions at least 5 distinct entities
- [ ] Each entity is defined or explained on first mention
- [ ] Entity names are spelled consistently throughout

---

## Rule 20: Mathematical Notation and LaTeX

When explaining mathematical concepts, parameter ranges, probability calculations, or algorithmic formulas, use clear mathematical notation or LaTeX. This enables AI systems to cite and extract technical content with precision.

**When to use mathematical notation:**

- **Temperature scaling:** "Temperature (T) scales logits: `logits / T`"
- **Probability thresholds:** "Top-p = 0.9 means cumulative probability ≥ 90%"
- **Context window calculations:** "Max tokens = context window size - output buffer. E.g., 128k - 4k = 124k usable tokens"
- **Parameter ranges:** "Temperature ∈ [0.0, 2.0]; recommended range [0.1, 1.0]"
- **Formulas:** "Softmax(logits) = exp(logit_i) / Σ(exp(logit_j))"

**Formats allowed:**

1. **Inline code** for simple expressions:
   > "`temperature` controls the sharpness of the softmax distribution"

2. **LaTeX for mathematical equations:**
   > "Nucleus sampling selects from top tokens where cumulative probability P(token) ≤ p"
   > Or: "softmax with temperature = exp(logit/T) / Σ exp(logit_j/T)"

3. **Clear variable notation** in prose:
   > "If T = 0.0, the model always picks the highest-probability token. If T = 1.0, probabilities follow the natural distribution."

4. **Parameter tables** (see Rule 16):
   | Parameter | Range | Meaning |
   |-----------|-------|---------|
   | temperature (T) | 0.0–2.0 | Controls randomness; higher = more random |
   | top-p | 0.0–1.0 | Cumulative probability threshold |

**Why:** AI systems extract mathematical notation for citations in technical and academic contexts. Clear notation enables direct quotes and precise recommendation in AI summaries.

**Checklist:**
- [ ] Mathematical concepts use notation (not just prose)
- [ ] Parameter ranges include both min and max (e.g., "0.0–2.0", not just "0 or higher")
- [ ] LaTeX or code formatting used for formulas
- [ ] No purely prose math explanations where notation would be clearer

**Example violations to avoid:**

**Wrong:**
> "Temperature is a setting that makes the model more or less creative depending on the value you choose."

**Right:**
> "Temperature (T) scales the softmax output: higher T (e.g., T = 1.5) increases randomness; lower T (e.g., T = 0.2) makes output deterministic."

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
| Prompt Engineering article | `Article` or `TechArticle`, `FAQPage` (if contains FAQs), `HowTo` (if contains numbered steps), `BreadcrumbList` |
| List-structured articles (e.g. "5 Building Blocks") | `Article` or `TechArticle`, `ItemList`, `BreadcrumbList` |

**Schema type choice for PE articles:**
- Use `TechArticle` for instructional articles (technique how-tos, framework guides, step-by-step implementations)
- Use `Article` for context/opinion/history articles
- Example: "Chain-of-Thought Prompting" (instructional) → `TechArticle`; "How Prompt Engineering Evolved" (history) → `Article`

**Template — FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is prompt engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prompt engineering is the practice of designing text inputs to get reliable outputs from large language models..."
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
  "description": "Dispatching one prompt to multiple AI models reduces hallucination risk because independent models rarely fabricate the same specific detail.",
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "author": {
    "@type": "Person",
    "name": "Hans Kuepper",
    "@id": "https://www.yoursite.com/about#founder"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Site Name",
    "url": "https://www.yoursite.com"
  },
  "keywords": ["multi-model AI", "hallucinations", "LLM comparison", "prompt optimization"],
  "about": [
    { "@type": "Thing", "name": "Prompt Engineering" },
    { "@type": "Thing", "name": "Large Language Models" },
    { "@type": "Thing", "name": "AI Hallucinations" }
  ],
  "mentions": [
    { "@type": "SoftwareApplication", "name": "GPT-4o", "url": "https://openai.com" },
    { "@type": "SoftwareApplication", "name": "Claude 4.6 Sonnet", "url": "https://anthropic.com" }
  ],
  "image": {
    "@type": "ImageObject",
    "url": "https://www.yoursite.com/images/articles/article-title.png",
    "width": 1200,
    "height": 630
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-intro", ".key-takeaways", "h2"]
  }
}
```

**Template — ItemList (for list-structured articles like "5 Building Blocks"):**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "5 Building Blocks Every Prompt Needs",
  "description": "The core components required in every effective prompt to get reliable AI outputs.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Objective",
      "description": "What you want the AI to accomplish — a single, specific goal"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Context",
      "description": "Background information the AI needs to understand your request"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Instructions",
      "description": "Step-by-step commands telling the AI what to do and how to do it"
    }
  ]
}
```

---

## Rule 6a: Internal Links Point to Content, Not Hubs

**Every internal link must point to a page with substantive content, NOT a hub or gateway page with only further links.**

**Wrong:**
> "For more information, see [our resources](/prompt-engineering)." — points to hub page with only navigation links

**Right:**
> "Learn how to compare AI model performance with [our model comparison guide](/articles/gpt-claude-gemini-comparison)." — points to actual article with detailed content

**Rule of thumb:**
- ✅ Link to articles, guides, how-tos, tutorials, case studies
- ❌ Don't link to listing pages, hubs, or disambiguation pages
- ✅ Use descriptive anchor text that tells the reader what content they'll find
- ❌ Don't use generic anchors like "Learn more" or "See our guide"
- ✅ Can link to pages outside /prompt-engineering (e.g., /blog/, /features/, /how-it-works/)
- ❌ Don't link to nav/landing pages without substantive content

**If there's no single article to link to:**
- Remove the link entirely, OR
- Mention the topic by name without a link (e.g., "See our guides on prompt optimization" instead of "[prompt optimization](/hub)")

---

## Rule 7: Semantic Completeness

Each section must answer its question completely without requiring the reader to have read previous sections.

**Wrong** (assumes context):
> "As mentioned above, this approach reduces errors significantly."

**Right:**
> "Dispatching to multiple AI models reduces hallucination errors because independent models rarely fabricate the same specific incorrect fact."

FAQ entries in particular must be self-contained — AI systems extract individual Q&A pairs in isolation.

---

## Rule 8: Meta Tags and Page Titles

Every page needs:
- `<title>`: Format: `[Specific Topic] | [Benefit]`
  - Good: `"How Multi-Model AI Reduces Hallucinations | Complete Guide"`
  - Bad: `"Blog Post | Our Site"`
- `<meta name="description">`: 140–160 characters. Answer-first. Include the primary keyword.
- `<link rel="canonical">`: Always set to the canonical URL.
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`

**Meta description format:**
> "[Primary keyword]: [one-sentence answer to the implied question]. [One differentiator]."

**Example:**
> "Learn how to compare AI models, reduce hallucination risk, and choose the best LLM for your task. Complete guide to multi-model prompting."

---

## Rule 8: Internal Linking with Anchor Text

Link anchor text must describe the destination, not be generic.

**Wrong:** "Click here to learn more" / "read this article" / "see our features"

**Right:** "how multi-model comparison reduces AI hallucinations" / "compare GPT-4o vs Claude 4.6 Sonnet" / "set up and use Ollama locally"

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

**Do NOT link to:**
- Personal blogs, Medium posts by unknown authors, unvetted sources, paywalled content
- Competing AI products or services (OpenAI blog, Anthropic blog, Google AI blog — link to their arXiv papers or neutral third-party coverage instead)
- Any URL that resolves to another /prompt-engineering article on this site — external citations must be genuinely external

**Format:**
- Every source citation MUST be a hyperlinked URL, not plain text.
- Use Markdown link format: `[Author, Year. "Title"](URL)` — description
- Cite using author/org and year: `[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165)` or `[OpenAI, 2023. "..."]`
- Verify every external URL resolves to the correct page before publishing — dead links lose all citation value
- Keep the sources section short — 2–3 sources max, not a formal bibliography

**Example (CORRECT — with working links):**
```markdown
### Sources
- [Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — the paper that proved step-by-step reasoning improves output quality
- [Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — catalogues 58+ discrete prompting techniques
- [OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — official guidance on prompt optimization
```

**What NOT to do (plain text, no links):**
```markdown
### Sources
❌ Wei et al., 2022. "Chain-of-Thought Prompting..." (arXiv:2201.11903)
❌ Brown et al., 2020 demonstrated...
```

---

## Rule 10a: All Internal Links Must Be Visible and Clickable

Every internal link in PE article content must be rendered as clickable, underlined hyperlinks in the final published page. Links must not be:
- Hidden or removed from display
- Converted to plain text
- Excluded from rendering
- Disabled or non-functional

**Technical requirement:** Links in Related Reading, Sources, and other article sections must appear as interactive `<a>` elements (or Next.js `<Link>` components) with proper href attributes. Tests must verify that all markdown-formatted links `[text](url)` render as visible hyperlinks.

**Why this matters:** AI crawlers extract links to understand content relationships and cite referenced articles. Broken, missing, or hidden links prevent AI systems from discovering related content and reduce citation distribution.

**Format:** Use standard Markdown link syntax in content:
```markdown
[Article Title](/prompt-engineering/slug) — brief description
[External Source](https://example.com) — description
```

**Before publishing, verify:**
- [ ] All internal links (to other PE articles) render as clickable hyperlinks
- [ ] All external links (to sources, references) render as clickable hyperlinks
- [ ] No links appear as plain text with brackets
- [ ] Related Reading section lists are fully visible
- [ ] Sources section links are fully visible

---

## Rule 21: GEO + SEO Rules for New PromptQuorum Pages

These rules apply to all new PromptQuorum pages (Prompt Engineering articles, blog posts, feature pages). They are designed to maximize both Generative Engine Optimization (GEO) and classic SEO.

### 21.1 Answer-First Intros With Clear Outcome

- The first paragraph must:
  - Clearly state what the page is about in one sentence.
  - Name the primary audience (for example "AI engineers", "solo developers", "enterprise teams").
  - State what the reader will walk away with (for example "a checklist", "a framework", "ready-to-use prompt templates", "comparison tables").
- Recommended intro pattern:
  - "This guide explains [topic] for [audience] and gives you [output] you can copy into GPT-4o, Claude, Gemini, or local LLMs."

### 21.2 Query-Mirroring in Titles, Headings, and Intros

- Every new page must be written around 1–2 realistic user queries in natural language (for example "what is prompt optimization", "ai code review", "what is a context window", "prompt optimization techniques").
- At least one target query must appear:
  - In the `<title>` tag.
  - In the H1 or first H2.
  - Once in the first paragraph.
- When a section targets a specific question, its first sentence must contain that question phrasing and immediately answer it.

### 21.3 SERP- and LLM-Facing Snippet Blocks

- Each new article must include at least one snippet block designed to be quoted directly by search and LLMs.
- Formats:
  - "In one sentence: [single-sentence, self-contained definition/answer]."
  - Or "In plain terms: [2–3 sentence explanation that works on its own]."
- Place the snippet block near the top (intro or first H2).
- The snippet must be understandable without reading any other part of the page.

### 21.4 PromptQuorum-Specific Findings (Proprietary Data)

- Every Prompt Engineering article must include at least one PromptQuorum-specific finding or insight with numeric data.
- Use one of these lead-ins:
  - "**Tested in PromptQuorum —** …"
  - "**PromptQuorum multi-model test:** …"
- Requirements:
  - Include at least one number (for example "22 of 30 tests", "70% of prompts", "3 of 4 models").
  - Describe behaviour across at least two models (for example GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, local LLaMA/Qwen via Ollama or LM Studio).
  - Keep tone factual and neutral (no marketing adjectives).

### 21.5 Long-Tail Question Sections

- For broad topics (for example "prompt optimization", "context windows", "AI hallucinations", "AI code review", "what is prompt engineering"), each new page must include at least one dedicated section that answers a specific long-tail question in full.
- Use the long-tail as the section heading where possible:
  - Examples: "What is a context window?", "Prompt optimization techniques", "AI prompts for code review".
- In that section:
  - Answer the question directly in the first sentence.
  - Keep the answer self-contained (no "as mentioned above").
  - Use at most 2–3 short paragraphs and lists where helpful.

### 21.6 Regional Notes (Russia, Germany/EU, US, China, Japan)

- Where a topic touches regulation, model availability, or deployment choices, include a short "Regional note" that:
  - Mentions Germany/EU where EU AI Act or data residency is relevant.
  - Mentions Russia or CIS where local model use or access differs.
  - Optionally mentions US, China, or Japan if they have distinct models (for example Mistral in EU, Qwen/DeepSeek in China) or deployment norms (on-prem vs cloud).
- Keep these notes factual and concise (one or two sentences).

### 21.7 Brand vs Non-Brand Positioning

- Brand-intent pages (for example homepage, /compare, /download, /faq):
  - Must mention "PromptQuorum" in the first sentence.
  - Must connect PromptQuorum directly to the main user problem and outcome (for example "PromptQuorum is a multi-model AI dispatch tool for prompt optimization and AI code review.").
- Non-brand informational pages (Prompt Engineering articles, general blog posts):
  - Must first provide a neutral, tool-agnostic explanation of the concept.
  - Then include at least one short "PromptQuorum bridge" that connects the concept to PromptQuorum capabilities (multi-model dispatch, consensus scoring, local LLM privacy, built-in frameworks).

### 21.8 FAQ Requirements for Broad Topics

- Any new page that covers a broad concept must include an FAQ with 4–6 questions.
- The FAQ must cover at least 3 of these 5 types:
  - Definitional ("What is X?").
  - Comparative ("X vs Y", "Is X better than Y?").
  - Quantitative ("How many…?", "How long…?", "How much does it cost?").
  - Procedural ("How do I…?", "What steps…?").
  - Disambiguation ("Is X the same as Y?", "Does X still apply when…?").
- Each FAQ answer:
  - Starts with a direct answer in the first sentence.
  - Is 2–3 sentences maximum.
  - Is fully self-contained.

### 21.9 Comparison ("X vs Y") Handling

- When a new page includes or targets "X vs Y" queries (for example "poe.com vs lmarena.ai", "CRAFT vs CO-STAR", "GPT-4o vs Claude 4.6 Sonnet"):
  - Use the exact "X vs Y" phrase once near the top in a clear sentence.
  - Add a small Markdown comparison table (2–5 rows, 3–4 columns) as per Rule 16.
- The first sentence of the comparison section must state:
  - What is being compared.
  - The main axis of comparison (for example cost, latency, accuracy, use case fit).

### 21.10 Classic SEO Items (Titles, Meta, Internal Links, Schema)

For every new page, the content must be written so that these standard SEO elements can be set correctly:

- Title tag:
  - Answer-first.
  - Includes at least one natural-language query phrase.
  - Stays under ~60 characters where possible.
- Meta description:
  - 140–160 characters.
  - States the main question and the main benefit of the article in one or two sentences.
- Internal links:
  - One "upward" link to the main "What Is Prompt Engineering?" pillar where relevant.
  - At least two "sideways" links to sibling articles within the same theme.
  - At least one "downward" link to a framework or technique page.
  - Anchor text must describe the destination (no "click here").
- Structured data and dates:
  - Article/TechArticle schema with `keywords`, `about`, `mentions`, and `image`.
  - FAQPage schema where FAQs exist.
  - Visible "Last updated: [Month Year]" in a `<time datetime="YYYY-MM-DD">` element near the top.

All other existing GEO rules (answer-first H2s, short paragraphs, entity density, numeric specificity, snippet blocks, PromptQuorum bridges) continue to apply.
- [ ] Build passes with no TypeScript errors in content structure

---

## Rule 11: Visible Last-Updated Date

Every PE article must display a visible publication or last-modified date near the top of the page. AI crawlers increasingly weight recency when selecting sources for citations.

**Format:** "Last updated: [Month Year]" (e.g. "Last updated: March 2026")

**HTML requirement:** Render the date using a semantic `<time>` element with a machine-readable `datetime` attribute. This corroborates the schema `dateModified` and improves citation reliability:

```html
<time datetime="2026-03-15">Last updated: March 2026</time>
```

Plain text dates alone are insufficient — the `<time>` element with a valid ISO 8601 `datetime` attribute is required for schema validation.

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

## Rule 14: Original Insights and Testing

Every PE article should contain at least one piece of original data, finding, or insight not available from external sources. This helps establish the site as a primary source, not just an explainer of existing research.

**Options for every article:**
- Site-specific testing results (e.g., "We tested this prompt across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro — all three models agreed that chain-of-thought prompting outperformed zero-shot on this reasoning task")
- Original insight about technique performance (based on running real tests across models)
- A benchmark comparison unique to the site's testing methodology

**Numeric data required:** Any testing finding must include at least one numeric figure — sample size, count, or percentage. "GPT-4o was best" is insufficient. "GPT-4o returned the most structured output in 22 of 30 tests" is compliant.

**Optional callout label:** You may include a label like `**Testing results — 50 coding prompts across three models:**` to help indexers attribute the finding.

**Placement:** Inside a dedicated section or as a callout box within body text. Label it clearly if included.

**Example:**
> Testing across 50 coding prompts on three models: GPT-4o produced the most readable code in 42 of 50 cases. Claude 4.6 Sonnet achieved highest code efficiency (smallest token count) in 38 of 50. Gemini 2.5 Pro handled complex multi-file projects best in 31 of 50.

**Why:** Original testing results establish credibility and position the site as an authoritative source. This is higher-leverage than merely citing external research.

---

## Rule 15: Structured Prompt Examples

Every prompt example in any article must use explicit `[Bad Prompt]` / `[Good Prompt]` (or equivalent) labelling with Markdown blockquotes or code blocks.

**Required format:**

```
**[Bad Prompt]**
> "Write me something about marketing."

**[Good Prompt]**
> "You are a B2B SaaS copywriter. Write a 150-word LinkedIn post for a fintech startup announcing a new API integration. Tone: professional but conversational. Do not use the word 'revolutionary'."
```

**Rules:**
- Always use blockquotes (`>`) or fenced code blocks (` ``` `) — never embed prompt text in regular paragraph prose
- Always label explicitly: `[Bad Prompt]`, `[Good Prompt]`, `[Improved]`, `[With Context]`, etc.
- Include at least one before/after pair per article where a technique is demonstrated
- Labels must be bolded and placed on the line immediately above the blockquote

**Why:** RAG systems extract structured content preferentially. Explicit labels make it unambiguous what a snippet is, reducing the risk of misquotation.

---

## Rule 16: Markdown Tables for Data

Use Markdown tables — not prose or bullet lists — for chronologies, feature comparisons, model comparisons, and technique comparisons.

**Use a table when:**
- 3+ items are compared on 2+ attributes
- A timeline contains 3+ dated events
- Listing frameworks/techniques with their use cases
- Comparing two approaches (e.g. prompting vs fine-tuning)

**Required table format:**
```markdown
| Framework | Best for | Example use case |
|-----------|----------|-----------------|
| CRAFT | Creative writing | Brand voice copy for a fintech startup |
| CO-STAR | Complex instructions | Multi-step research summaries with citations |
| SPECS | Factual analysis | Structured reports from raw data |
```

**Rules:**
- Header row required always
- Column names: Title case, 1–3 words each
- Cell content: sentence fragment or short phrase — no full paragraphs
- Add 1 framing sentence before the table in prose

**Why:** RAG models prioritise table content for structured information extraction. Tables are machine-readable; prose is not.

---

---

## Rule 18: No H1/H2 Duplication

Every article's first H2 (or main section heading) must NOT repeat the H1 title verbatim or near-verbatim.

**Wrong:**
```
# What Is Prompt Engineering?

## What Is Prompt Engineering?   ← duplicate
```

**Right:**
```
# What Is Prompt Engineering?

## The Direct Answer   ← or any non-duplicate heading
```

**Rules:**
- The H1 is the article title (set in content.ts as `title`)
- The first H2 section is its own heading — use a descriptive label that adds information, not repeats the title
- Allowed: H2 that references a keyword from H1 but in a different grammatical form (e.g. H1: "What Is Prompt Engineering?" → H2: "Prompt Engineering: The Core Definition")
- Never use the exact title as both H1 and the opening H2

**Why:** AI crawlers treat H1 as the article entity name and H2 as section topics. Duplicating them produces redundant signals and can suppress the H2 from being extracted as a standalone answer. This impacts AI citation frequency.

---

## Rule 19: FAQ Type Diversity

Every FAQ section must include questions from at least 3 of the following 5 question types. Do not write all FAQs as basic definitional questions.

**The 5 FAQ types:**

1. **Definitional** — "What is X?" / "What does X mean?"
   - Example: "What is chain-of-thought prompting?"

2. **Comparative** — "X vs Y", "What's the difference between X and Y?"
   - Example: "Is chain-of-thought prompting better than zero-shot prompting?"

3. **Quantitative** — "How many...", "How long...", "How much does it cost?"
   - Example: "How much does prompt engineering improve output quality?"

4. **Procedural** — "How do I...", "What steps..."
   - Example: "How do I apply chain-of-thought prompting in practice?"

5. **Disambiguation** — "Is X the same as Y?", "Does X still apply when...?"
   - Example: "Is prompt engineering still relevant with GPT-4o?"

**Rules:**
- Minimum: 4 FAQ entries per article, covering at least 3 of the 5 types above
- Maximum: 8 FAQ entries — beyond this, the FAQ becomes noise
- Never write 4+ FAQs that are all definitional — vary the types
- Comparative and disambiguation questions are especially high-value for AI citation (they answer follow-up questions AI systems are likely to be asked)

**Why:** AI systems generate diverse follow-up questions. If your FAQ only covers basic definitions, it answers only one query type. Comparative and quantitative questions trigger direct citation in AI summaries far more often than "What is X?" questions.

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
- [ ] 2–3 external source links included (peer-reviewed papers or official docs preferred) — MUST be hyperlinked URLs in Markdown format, not plain text — no competitor product links (Rule 10)
- [ ] Visible last-updated date present near top of article with `<time datetime="">` HTML element (Rule 11)
- [ ] 2–3 LLM snippet blocks present (definition box, compare/contrast, or compact list)
- [ ] Non-US perspective included where topic applies (EU/China/Japan)
- [ ] Article contains at least 1 original insight or testing data point (Rule 14)
- [ ] Prompt examples use [Bad Prompt]/[Good Prompt] labelling with blockquotes or code blocks (Rule 15)
- [ ] Chronologies, comparisons, and feature lists use Markdown tables (Rule 16)
- [ ] Article schema includes keywords, about, mentions, image, and speakable fields (Rule 5)
- [ ] Instructional articles use TechArticle schema; context/history articles use Article (Rule 5)
- [ ] List-structured articles include ItemList schema (Rule 5)
- [ ] First H2 does not duplicate the H1 title verbatim or near-verbatim (Rule 18)
- [ ] FAQ section covers at least 3 of 5 question types: definitional, comparative, quantitative, procedural, disambiguation (Rule 19)
- [ ] Mathematical concepts use notation or LaTeX, not just prose (Rule 20)
- [ ] Article mentions and defines 5–7 high-value entities (products, companies, technical terms) (Rule 4a/Rule 21)
- [ ] All technical constraints use exact numbers: context window in tokens, VRAM in GB, costs in $/1M tokens, latency in ms (Rule 2a/Rule 22)
- [ ] **OG image is auto-generated** — No manual work needed. System creates language-specific social sharing images (all 5 languages) with article title, intro, and site branding for each language variant (Rule 23)

---

## Rule 23: Social Sharing Images (OG Images)

**All articles automatically generate language-specific Open Graph images for social sharing. No writer action needed.**

When an article is published:
- A unique og:image is automatically created with the article title, intro, and site branding
- The og:image is generated for all 5 languages (`en`, `de`, `fr`, `ja`, `zh`)
- When a reader shares the article on Twitter, LinkedIn, Facebook, etc., their language variant shows the appropriate language version
- Images are cached for 24 hours to ensure performance

Writers do not need to create, upload, or manage images — the system handles this automatically. Just write the article content, and social sharing previews are generated in all languages.

---

## Rule 24: Current LLM Model Versions

**Always reference the latest released version of AI models. Update all model references across the website when new versions become available.**

LLM model versions change frequently. Using outdated model names (e.g., Claude 4.6 Sonnet instead of Claude 4.6 Sonnet) reduces credibility and confuses readers about current capabilities.

**Current model names as of March 2026:**

| Vendor | Current Version | Do NOT Use |
|--------|-----------------|-----------|
| Anthropic | Claude 4.6 Sonnet, Claude 4.6 Opus, Claude 4.5 Haiku | Claude 4.6 Sonnet, Claude 4.6 Opus, Claude 4.5 Haiku |
| OpenAI | GPT-4o | GPT-4o, GPT-4o mini (in most contexts) |
| Google | Gemini 2.5 Pro, Gemini 2.5 Flash | Gemini 1.0 (if used) |
| Open source | LLaMA 3.1, Mistral Large | LLaMA 3.1, Mistral 7B (in most contexts) |

**When to update model names across the site:**
- When a major new model version is released (e.g., Claude 4.6 → Claude 5.0)
- When comparing models: use the **latest version** of each vendor's model for fair comparison
- In **pricing examples:** always reference the current model's pricing
- In **capability claims:** always reference the current version so claims remain accurate

**Exception — Historical or Educational Context:**
If an article discusses **how prompt engineering has evolved**, it is acceptable to reference older models as examples of "older models" — but make the version explicitly clear: "Claude 4.6 Sonnet (released 2024, now superseded)" or "GPT-4o (predecessor to GPT-4o)."

**Implementation:**
- Use search/replace to update model names site-wide when versions change
- Update in all languages (en, de, fr, ja, zh) simultaneously
- Add a note to the article's `dateModified` field when model versions are updated
- Update pricing tables to reflect current pricing

**Why this matters for GEO:**
AI readers cite articles that reflect the current state of the technology. Articles citing outdated models are less likely to be cited as authoritative sources. Keeping model versions current ensures the site is cited as a current, reliable reference.

---

## Common Violations to Avoid

| Violation | Example | Fix |
|-----------|---------|-----|
| Buried lede | "AI is complex. Here's how we help." | Lead with the specific benefit |
| Vague claim | "Our tool is powerful" | "Send prompts to multiple models for comparison" |
| Generic CTA | "Learn more" | "Compare GPT-4o vs Claude 4.6 Sonnet" |
| Missing schema | Page with no JSON-LD | Add FAQPage, Article, or HowTo schema |
| Inconsistent naming | "GPT4", "gpt-4", "GPT 4" | Always: "GPT-4o" (or the exact model name) |
| Context-dependent | "As we explained above…" | Restate the relevant fact |
| Paragraph walls | 6-sentence paragraph | Split at 3 sentences or convert to list |
| AI disclosure | "This article was written by AI" / "Co-Authored-By: Claude" | Never disclose. All content publishes as site editorial. |
| Missing pillar link | Fundamentals article with no link to "What Is Prompt Engineering?" | Add one upward semantic link to the pillar |
| Generic related reading | "See also: our other articles" | Use named, descriptive links with brief descriptions |
| Unsourced claims | "Chain-of-Thought improved accuracy by 40%" (no citation) | Add link to Wei et al. 2022 paper or official docs |
| US-only framing | "All major AI providers" (lists only OpenAI, Anthropic, Google) | Add Mistral, Qwen, DeepSeek, or regional context |
| Snippet-free prose | Long paragraph with no extractable definition or list | Add "In one sentence:", compare/contrast bullets, or compact list |
| No original data | Article explains chain-of-thought with only academic citations | Add original testing comparing chain-of-thought vs zero-shot across 3 models |
| Unstructured prompt examples | Prompt written inline in a paragraph without labels | Use `[Bad Prompt]` / `[Good Prompt]` blockquote format |
| Prose instead of table | "CRAFT is good for creative writing, CO-STAR is better for complex tasks…" | Convert to a 3-column Markdown table with frameworks, use cases, and examples |
| Competitor links | Citing "OpenAI's best practices" with a link to openai.com/blog | Link to academic papers or neutral third-party coverage instead |
| Competitor link in citations | Citing "OpenAI's blog post" with a link to openai.com/blog | Link to the arXiv paper or neutral third-party coverage instead (Rule 10) |
| Internal link as external citation | "Source: [Our guide to chain-of-thought prompting](/prompt-engineering/...)" | External citations must be genuinely external, not internal links (Rule 10) |
| H1/H2 duplication | H1: "What Is Prompt Engineering?" → first H2: "What Is Prompt Engineering?" | Change H2 to a descriptive, non-duplicate heading (Rule 18) |
| FAQ type uniformity | All 5 FAQs are "What is X?" definitional questions | Add at least 1 comparative and 1 disambiguation question (Rule 19) |
| Plain text date only | "Last updated: March 2026" in plain paragraph text | Wrap in `<time datetime="2026-03-01">Last updated: March 2026</time>` (Rule 11) |
| Vague mathematical language | "Temperature controls how creative the model is" | Use notation: "Temperature (T) scales softmax; T ∈ [0.0, 2.0]" (Rule 20) |
| Prose-only math formulas | Long paragraph explaining softmax calculation | Use LaTeX or notation: "softmax(logit_i) = exp(logit_i) / Σ exp(logit_j)" (Rule 20) |
| Low entity density | Article mentions only 2–3 entities (GPT-4o, Claude, temperature) | Expand to 5–7: add Ollama, OpenAI, Anthropic, Top-P, Nucleus Sampling (Rule 21/Rule 4a) |
| Entity inconsistency | "GPT 4", "gpt-4o", "GPT-4" all used in same article | Always use exact: "GPT-4o" (Rule 4/Rule 21) |
| Vague constraint language | "Large context window support" / "Significant memory requirements" | Specify: "128k token context" / "16GB VRAM for 13B models" (Rule 22/Rule 2a) |
| Missing constraint details | "GPT-4o has better performance" (no metrics) | "GPT-4o with 128k context processes longer documents; 15× more tokens than GPT-4o mini's 4k" (Rule 22/Rule 2a) |
| Unspecified technical limits | "Supports batch processing" | "Batch API accepts up to 100k requests per file; completes in 24 hours" (Rule 22/Rule 2a) |

---

## Post-Writing Compliance Check (Mandatory)

**CRITICAL: Before publishing any article, run a GEO compliance audit against these checklist items.**

After you finish writing content, always:

### 1. Verify Bold Openers (Rule 1)
- [ ] Every H2 section starts with a **bold** direct answer or key fact
- [ ] No preamble phrases like "In this section we'll look at..." or "When analyzing..."
- [ ] Bold opener is a complete statement, not a fragment

### 2. Search for Banned Words (Rule 3)
Run grep/search for these words in your article:
- [ ] "powerful" / "powerfully"
- [ ] "seamless" / "seamlessly"
- [ ] "leading" / "leadership"
- [ ] "revolutionary" / "game-changing" / "transformative"
- [ ] "cutting-edge" / "state-of-the-art"
- [ ] "unique" (unless explained: "unique because...")
- [ ] "comprehensive" / "complete" / "all-in-one"
- [ ] "best-in-class" / "industry-leading"
- [ ] "easy to use" / "simple" (unless explained why)

**Replace with:** Specific, verifiable claims. Examples:
- Instead of "powerful reasoning" → "excels at step-by-step problem-solving"
- Instead of "seamless integration" → "native integration with Google Workspace"
- Instead of "leading multimodal" → "strongest multimodal capabilities"

### 3. Entity Density Check (Rule 4a)
- [ ] Article mentions 5–7 distinct high-value entities
- [ ] Each entity is named consistently (use exact product names)
- [ ] First mention includes a one-line description
- [ ] All entity names match official product names exactly

### 4. Section Self-Containment (Rule 6)
- [ ] Search for "as mentioned above" or "as we discussed" — delete and restate the fact instead
- [ ] Each section answers its question completely without requiring prior context
- [ ] FAQ entries are especially critical: each Q&A pair must stand alone

### 5. Schema & Metadata Check (Rule 5)
- [ ] TechArticle schema present (datePublished, author, keywords, mentions)
- [ ] If list-structured, ItemList supplementalSchema included
- [ ] If has FAQs, FAQPage schema auto-generated from faq.faqs array
- [ ] All mentions include valid "@type" (Thing, SoftwareApplication, etc.)

### How to Run the Audit

**Automated checks (recommended):**
```bash
# Search for banned words
grep -i "powerful\|seamless\|leading\|revolutionary\|cutting-edge" article.md

# Check for context-dependent language
grep -i "as mentioned\|as discussed\|above\|earlier" article.md

# Verify bold openers in each section
grep "^## " article.md | while read line; do
  section=$(echo $line | sed 's/## //')
  echo "Checking: $section"
done
```

**Manual review:**
1. Read the first sentence of every H2 section — is it bold and complete?
2. Search the full article for banned words
3. Count distinct entity mentions (minimum 5)
4. Check each FAQ entry works standalone (copy it to a fresh document, does it make sense?)

**If audit fails:**
- DO NOT publish
- Fix the violations
- Re-run the audit
- Only publish after 100% compliance

---
