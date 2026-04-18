# GEO Writing Guidelines — Optimized for AI Citation & SEO

**GEO = Generative Engine Optimization**

These rules are mandatory for all content written for this site. GEO ensures that AI systems (ChatGPT, Perplexity, Claude, Gemini, Bing Copilot) can accurately cite, quote, and recommend site content when users ask relevant questions.

---

## Who This Is For

### Content writers & editors at PromptQuorum

- **Prompt Engineering articles:** All writers must follow Rules 1–33 before publishing
- **Hub pages (Local LLMs, Compare Models):** Follow Rules 1–26 + schema requirements (Rule 5)
- **Blog posts & announcements:** Follow Rules 1–14, 21, 26 (core SEO/GEO only; Rules 19–25 are optional)
- **Glossary entries:** Follow Rules 1, 3, 4–4b, 8a, 11 (compact format; skip Rules 17, 19, 25)

### Who This Is NOT For

- **Marketing pages** (pricing, features, product descriptions): Use Rule 26 metadata; skip Rules 15–20
- **Chat bot documentation** or internal wikis: Reference Rules 1, 4, 8, but don't enforce Rules 12–19
- **Case studies or testimonials:** Focus on Rule 14 (original insights); Rules 17–25 are optional

**Quick decision:** If your content teaches *how to do something* or *explains what something is*, follow all rules. If it's product marketing or internal docs, follow metadata rules only (Rules 1, 8, 26) and skip the deeper SEO optimization.

---

## Why GEO Matters

AI search engines do not rank pages by backlinks — they cite sources that are:

1. **Structured** — answers are easy to extract programmatically
2. **Factual** — claims are specific and verifiable, not vague
3. **Entity-rich** — product names, company names, and technical terms are precise
4. **Semantically complete** — a section answers the full question without needing context from elsewhere

When our pages follow these rules, AI systems cite and quote the site when users ask relevant questions — turning content into free, persistent distribution across AI search engines.

---

## PART 1: PRE-WRITING FOUNDATION

### Step 0: Choose Your Audience Level Before Writing

**Before writing a single sentence, decide which audience level the article targets.** This decision determines search volume, conversion rate, and PromptQuorum revenue.

PromptQuorum's paying users are people who actively use LLM APIs and build with prompts. Casual ChatGPT users are traffic but not buyers. The four levels have fundamentally different revenue profiles:

| Level | Who is searching | Search volume | PromptQuorum conversion | Use for |
|-------|-----------------|---------------|------------------------|---------|
| **Beginner** | No prior AI tool knowledge. Searching: "what is prompt engineering", "what is an LLM" | Highest | Low — they use free chat UIs, not APIs | Glossary entries, foundational definitions |
| **Intermediate** | Uses ChatGPT or Claude actively. Searching: "how to write better prompts", "few-shot examples", "prompt templates" | High | **High** — actively experimenting, likely to try tools | **Default for most articles** |
| **Advanced** | Uses LLM APIs, building workflows. Searching: "RAG vs fine-tuning", "structured output production", "multi-model comparison" | Medium | **Highest** — direct PromptQuorum buyers | Power-user topics, production workflows |
| **Technical** | Researchers, ML engineers. Searching: "attention mechanism explained", "token probability math" | Low | Low — researchers, not typical tool buyers | Only when subject genuinely requires it |

#### Decision Tree

**Answer these three questions:**

1. **What is the reader's current LLM workflow?**
   - No LLM usage yet → Beginner
   - Uses ChatGPT/Claude daily but no API → Intermediate
   - Calls APIs, builds prompts programmatically → Advanced
   - Writes model architecture code / reads papers → Technical

2. **What does the primary keyword signal?**
   - `what-is-*`, `*-explained`, `*-glossary`, `*-basics` → Beginner
   - `how-to-*`, `*-prompting`, `*-examples`, `*-templates`, `*-mode` → Intermediate
   - `*-vs-*` (production tradeoffs), `*-workflow`, `*-optimization`, `*-injection` → Advanced
   - `how-*-actually-work`, `*-architecture`, `*-token-math` → Technical

3. **Does this reader benefit from PromptQuorum today?**
   - No (not using tools yet) → Beginner — write for funnel entry, link aggressively to Intermediate
   - Yes, likely to try it → Intermediate or Advanced — this is the revenue-generating audience

#### Default: Write Intermediate

When in doubt, write Intermediate. It covers the largest audience that converts. Intermediate articles explain *how to do something*, not just *what something is*.

Only go Beginner if the topic is genuinely a definition or concept with no hands-on angle. Only go Advanced if the topic assumes the reader already implements prompts in production. Only go Technical if the content genuinely requires code, math, or model architecture knowledge — most "technical-sounding" topics can and should be written as Advanced.

**Set these fields in content.ts before publishing:**

```ts
educationalLevel: 'Intermediate',   // Beginner | Intermediate | Advanced | Technical
audience: 'Developers building with LLMs, prompt engineers',  // specific job role
```

The `audience` string must name a **specific job role or use case**, not a broad group:
- ❌ "AI users", "Everyone", "People interested in AI"
- ✅ "Developers building with LLMs", "Marketers using ChatGPT daily", "Data scientists optimizing LLM pipelines"

---

### Rule 32: Mandatory Keyword Identification (Pre-Writing)

**Before you write a single word, declare 3–5 target keywords.** This prevents scope creep and ensures the article stays focused on what users actually search for.

**TARGET KEYWORDS block (add to content.ts before title):**
```ts
targetKeywords: [
  'prompt engineering basics',           // Primary (SERP rank target)
  'how to write effective prompts',      // Long-tail (Google People Also Ask)
  'prompt optimization techniques',      // Synonyms (AI search engines)
  'best practices for LLM prompts',      // Variations
  'prompt examples for ChatGPT'          // Related intent
]
```

**When to use:** Always. Before writing, after choosing audience level. These keywords inform heading structure, entity selection, and internal linking strategy.

**Why this matters:** AI systems use keywords to match query intent to content. Declaring keywords upfront keeps your article from wandering into off-topic tangents.

---

### Known Pitfalls (Move to Early Section, Not End)

These are the most common mistakes — flag them before writing:

| Pitfall | Why It Breaks GEO | Fix |
|---------|---|---|
| **Preamble before the answer** | "In this guide, we'll explore..." — AI crawlers sample first sentence only. If it's setup, the section is skipped. | Replace with direct statement: "Chain-of-Thought prompting forces language models to show reasoning step-by-step..." |
| **Vague descriptors instead of numbers** | "Large context window" → AI can't match "large" to user needs; must be "128k tokens" | Always use exact numbers (parameters, token counts, VRAM, latency in ms) |
| **All H2s labeled, not questioned** | "Overview", "Key Benefits", "How It Works" → Don't match Google People Also Ask patterns | Every H2 must end in "?" or be a direct answer phrase: "What is...?", "How does...?" |
| **Invented metrics** | "92% accuracy" with no source → AI fact-checkers deprioritize fabricated claims | Only use measured data. If unsure, use ranges ("50–75%") or skip entirely |
| **Weak internal links** | "Click here to learn more" → No semantic signal; link destination unclear | Use descriptive anchor text: "Learn how RAG systems expand attack surface" |
| **FAQ without schema** | FAQ questions listed but not wrapped in FAQPage schema → AI crawlers ignore them | Add `faqSchema` field to content.ts with Q&A pairs |
| **No visible date** | Article appears current but has no `<time datetime="">` element → Trust signals missing | Add `<time datetime="2026-04-07">Last updated: April 2026</time>` |
| **Inconsistent entity names** | "GPT-4o" in intro, "GPT4O" in body, "gpt-4o" in code → Knowledge graphs break | Use exact, consistent names: GPT-4o, Claude 4.6 Sonnet, Ollama (always capitalized) |

---

## PART 2: CORE CONTENT RULES (Consolidated by Topic)

### SECTION A: Answer-First Structure (Rules 1, 22, 22a — Consolidated)

**Every paragraph and section must answer its question in the first 1–3 sentences.**

AI systems extract the first substantive sentence. If the answer is buried in paragraph 3, it gets ignored.

#### Rule 1: H2 Bold Opener (Mandatory)

The first sentence of every H2 section must be wrapped in `**bold**` and state the direct answer or key fact. Preamble phrases like "In this section we'll look at..." are not compliant.

**Wrong:**
> "When working with multiple AI models, things can get complicated. Each model has strengths and weaknesses."

**Right:**
> "**Dispatching one prompt to multiple AI models simultaneously returns independent results.** This reduces hallucination risk because independent models rarely fabricate the same specific incorrect detail."

**Also compliant:**
> "**The best AI model depends on your task — different models excel at different jobs.** GPT-4o excels at reasoning. Claude 4.6 Sonnet dominates code generation."

#### Rule 22: Featured Snippet Targeting (H2 Query Format)

H2 tags trigger Google "People Also Ask" boxes and AI engine section citations. Every H2 must be either:
- **A)** A complete question ending in "?" (preferred)
- **B)** A direct answer phrase starting with a bold factual statement

**Banned H2 formats (never use):**
- Labels: "Core Features", "Overview", "Key Benefits"
- Navigation: "Blog & Educational Resources", "Resources"
- CTAs: "Join the Waitlist", "Get Started", "Sign Up Now"
- Vague: "How It Works" (missing subject)

**Right H2 formats:**
- "Which AI Model Gives the Best Answer for Your Task?"
- "How Do You Compare AI Models Side-by-Side?"
- "What Is Chain-of-Thought Prompting?"

#### Rule 22a: H2 Section Body Structure

Every H2 section must follow a strict 3-part hierarchy:

1. **H2 heading** — phrased as the exact user search query
2. **Direct answer** — 2–3 sentences, definition style. No preamble. Answer the H2 question completely in this block alone.
3. **Explanation** — supporting detail, context, trade-offs, caveats
4. **Examples / steps** — concrete commands, code blocks, numbered steps, or a table

**Wrong (explanation before answer):**
> ## How Does Quantization Reduce VRAM?
> Quantization is a technique used in machine learning that has been applied to large language models...

**Right (answer first):**
> ## How Does Quantization Reduce VRAM?
> **Q4 quantization stores each model weight in 4 bits instead of 16 (FP16), reducing VRAM by 75% with under 1% quality loss.** A 7B model drops from ~14 GB (FP16) to ~3.5 GB (Q4).
>
> Quantization works by rounding floating-point weights to the nearest value in a smaller number space...
>
> Example: `ollama run llama3.1:8b-instruct-q4_K_M`

**Compliance checklist:**
- `[ ]` First 2–3 sentences after H2 answer the question directly (no preamble)
- `[ ]` Direct answer block can stand alone — readable without the rest of the section
- `[ ]` Explanation follows the answer, never precedes it
- `[ ]` At least one example, command, table, or step list per H2 section

#### Rule 22b: Decision-Driven Content Framework (For Guides, Comparisons, How-To Articles)

Pages involving tools, models, setups, or comparisons must be structured **specifically for decisions**, not just explanations. Convert every article from "What is this?" into "What should I do?"

**The 7-Layer Decision Framework:**

##### 1. Direct Answer Block (First 100–150 words)

Within the first 150 words, provide a standalone answer that fully responds to the core query and makes sense if extracted without surrounding context.

**Example (Correct):**
> "**Use LM Studio if you want a free, no-terminal interface for running local models on consumer hardware.** LM Studio bundles popular models (Llama, Qwen, Mistral) with one-click installation, built-in quantization presets, and an OpenAI-compatible API. Best for: beginners, testing, lightweight inference. Not for: production systems requiring LoRA fine-tuning or batch inference optimization."

**Example (Wrong):**
> "LM Studio is a software application that allows you to run local language models. Local language models are models that run on your computer rather than on remote servers. There are many benefits to running models locally..."

##### 2. Best Choice / Recommendation Block (If Multiple Options Exist)

For any comparison or decision point, explicitly state the best choice per use case.

**Format:**
```
🏆 Best Choice
- Best overall: [Option A] — [reason]
- Best for [specific use case]: [Option B] — [reason]
- Best for [specific use case]: [Option C] — [reason]
- Budget option: [Option D] — [reason]
```

**Rules:**
- Be explicit — no hedging ("it depends" → explain instead)
- Cover 3–4 options minimum (if fewer exist, that's fine)
- Include reasoning tied to real trade-offs, not opinions

##### 3. Use Case Segmentation: "Who Should Use This?"

Clarify exactly who should use what. Convert vague audiences into specific personas.

**Format:**
```
🧭 Who Should Use This?
- Beginners (learning LLMs) → [Recommendation]
- Intermediate developers → [Recommendation]
- Advanced users (production) → [Recommendation]
- Budget-conscious teams → [Recommendation]

❌ Who Should NOT Use This?
- If [situation], use [alternative] instead
- If [constraint], avoid [this option]
```

**Rules:**
- Be specific about constraints (budget, hardware, skill level, use case)
- Always include at least one "NOT" case
- Link recommendations to earlier "Best Choice" section

##### 4. When to Use / When NOT to Use (Decision Boundary)

Convert explanations into explicit decision boundaries.

**Format:**
```
✅ When to Use [Topic]
- [Specific situation] → recommended
- [Constraint] is acceptable → yes
- [Outcome] is your goal → use this

❌ When NOT to Use [Topic]
- If [situation], use [alternative] instead
- If [constraint] is critical, avoid this
- If [outcome] is required, skip this
```

**Rules:**
- Avoid generic statements ("depends on your use case")
- Focus on real trade-offs and constraints
- Make it actionable — readers should decide in <30 seconds

##### 5. Comparison Layer (If Applicable)

If the page discusses multiple options, include a structured comparison.

**Option A:**
- Use a side-by-side table (Option A vs B vs C)
- Format: `| Option | Best For | Key Strength | Key Weakness | Price/Cost |`
- Focus on decision criteria, not similarity

**Option B:**
- Bulleted pros/cons for each option
- Organize by decision-relevant categories (not by "pros" then "cons")

**Example (Table):**
| Feature | LM Studio | Ollama | vLLM |
|---------|-----------|--------|------|
| Best for | Beginners, GUI users | Terminal users, scripts | Production API servers |
| Ease of setup | 5 min GUI | 2 min CLI | 20 min + Docker |
| Quantization support | All presets | 4 major formats | Q4, Q5 only |
| OpenAI API | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| Price | Free | Free | Free |

##### 6. Final Verdict (One Clear Conclusion)

End decision-heavy sections with a **single, actionable recommendation**, not a restatement.

**Format:**
```
**Final Verdict**
- Use [Option A] if [situation] — [concrete next step]
- Use [Option B] if [situation] — [concrete next step]
- If unsure, start with [safest option] and move up
```

**Rules:**
- No repetition of earlier sections
- Must help the reader decide *immediately* and take action
- Include a "if unsure" path

##### 7. Extractability: Make Content AI-Friendly

Ensure key decision sections can be quoted by AI systems without context.

**Rules:**
- Keep bold answer blocks to 1–3 sentences
- Use bullet points for decision criteria (not prose paragraphs)
- Avoid long paragraphs in critical recommendation sections
- Every comparison should fit in one screen (~15 lines max)
- Avoid forward references ("as discussed earlier") — each section should be self-contained

##### 8. Decision Density Over Length

Prioritize decisiveness. Do NOT add more explanation without adding new decisions.

**Wrong approach:**
> "There are many ways to use LM Studio. You can use it for development, testing, research, prototyping, and more. Each of these has benefits and drawbacks..."

**Right approach:**
> "Use LM Studio for: development (3–5x faster iteration), testing (no API costs), research (reproducibility). Do NOT use for: production serving (use vLLM), fine-tuning at scale (use RunwayML)."

##### 9. Self-Check Before Publishing (Mandatory)

Before finalizing any decision-heavy page, verify:

```
✅ Checklist
- Does the page answer the main question in the first 100 words?
- Can a reader decide within 30 seconds without scrolling?
- Are all recommendations explicit and verifiable?
- Are "best choice" sections tied to real use cases, not opinions?
- Can key sections (recommendations, comparisons) be quoted by AI systems?
- Is there at least one "when NOT to use" section?
- If multiple options exist, are they in a table or clear bullets?

⚠️ If ANY of these is unchecked:
👉 Revise before publishing
```

**Core Principle:** Every page must answer **"What should I do?"** — not just "What is this?"

---

#### Rule 22c: Content Ratio — Shift from Explanation-Heavy to Decision-Dense

**Current problem:** Most pages are 70–80% explanation, 20–30% decision. This hurts AI citation and conversion.

**Target ratio:** 50–60% explanation, 40–50% decision.

**What counts as explanation:**
- Context, background, history
- How something works
- Features and capabilities
- Definitions and concepts
- Why something matters

**What counts as decision content:**
- Explicit recommendations ("Use X if...")
- "Best choice" blocks with reasoning
- Use case segmentation ("For beginners: Y", "For production: Z")
- "When to use / when NOT to use" sections
- Comparison tables tied to decisions
- Final verdict blocks
- "If unsure, do this" guidance
- Trade-off analysis with clear picks

**How to shift the balance:**

| Type | Too Much Explanation | Better Balance |
|------|-----|-----|
| Feature explanation | "Temperature controls the randomness of output by scaling logits, and logits are..." | "Temperature controls output randomness: 0 = predictable, 2 = creative. Use 0.5–1.0 for most tasks. Avoid >1.5 for factual work." |
| Product capability | "LM Studio is a desktop application that provides a graphical interface for running models locally..." | "Use LM Studio if: you want a GUI, need one-click installation, or prefer no terminal. Don't use if: you need API scalability (use vLLM), require fine-tuning (use RunwayML), or need multi-user serving." |
| Technical context | "Quantization is the process of reducing the precision of weights in neural networks..." | "Quantization reduces file size & memory by 75% (4x faster inference) with <2% quality loss. Use Q4 for most tasks. Use Q5 if you need higher accuracy. Use Q8 only for final-answer generation." |

**Enforcement checklist:**

Before publishing, count:
- [ ] Number of "Use X if..." statements: **Min 5+ explicit recommendations per 1000 words**
- [ ] Number of decision-heavy sections (headers with "Use", "When", "Best", "Choose"): **Min 3+ per 2000 words**
- [ ] Ratio of decision bullets to explanation paragraphs: **Should be 1:1 or higher** (not 1:5)
- [ ] Any section >200 words without a decision statement: **Trim or add recommendation**
- [ ] Final section includes "If unsure, use X": **Required**

**Red flags (revise before publishing):**
- ❌ More than 2 consecutive paragraphs without a recommendation
- ❌ Comparison section without a "pick this" statement for each option
- ❌ Feature list without "when you'd use this feature"
- ❌ Example section that doesn't end with "when to apply this"
- ❌ Title says "How to" or "Best" but content is pure explanation

**Green flags (you're on track):**
- ✅ Bolded decision blocks every 200–300 words
- ✅ At least 1 "When NOT to use" per major section
- ✅ Comparison table with a "pick this" row or summary
- ✅ Final 10% of page is pure decision (verdict, next steps)
- ✅ Reader can answer "what should I do?" after reading H2 sections only

---

### SECTION B: Structure & Readability (Rule 2)

Use H2 (`##`) for major sections, H3 (`###`) for subsections. Use bullet lists for enumerations of 3 or more items. **Never write a wall of prose when a list is clearer.**

**Paragraph length: max 3 sentences.** If a paragraph runs longer, split it or convert to a list.

**Wrong:**
> "The site supports many providers including OpenAI, Anthropic, Google, Mistral, Ollama, and others."

**Right:**
> Available AI providers:
> - OpenAI (GPT-4o, GPT-4o mini)
> - Anthropic (Claude 4.6 Sonnet, Claude 4.6 Opus, Claude 4.5 Haiku)
> - Google (Gemini 2.5 Pro, Gemini 2.5 Flash)
> - Mistral AI (Mistral Large, Mistral Small)
> - Local models via Ollama, LM Studio, Jan AI, GPT4All, vLLM

---

### SECTION C: Factuality (Rules 2b, 3 — Consolidated)

#### Rule 2b: Facts Only — Every Number Must Be Verifiable

**Every numeric claim must be factual, measured, or verifiable. Never invent numbers for GEO optimization or to satisfy schema requirements.**

| Type | ❌ Don't Invent | ✅ Do This Instead |
|------|---|---|
| Test results | "Our testing shows 73% detection rate" (if untested) | "Expected detection rates: ~60–75%" OR skip entirely |
| Performance metrics | "50% faster than competitors" (unverified) | "200ms average latency" (measured) OR cite source |
| Usage statistics | "Used by 10,000 companies" (guessed) | "Used by [Company A], [Company B], [Company C]" (verifiable) |
| Academic results | "Studies show 92% accuracy" (misquoted) | "[Author Name, Year]. Study Title." with direct link |
| Model performance | "Achieves state-of-the-art results" (vague) | "OpenAI GPT-4o: 90.2% on MMLU benchmark (2024)" |

**When you need specificity but don't have real data:**
1. Use ranges and qualifiers: "Typically 50–75% detection rates" (hedged, not invented)
2. Reference expectations: "Based on model architecture, we'd expect..." (frames as analysis)
3. Cite the source: "[Paper Author, Year] found 65–85%" (verifiable)
4. Omit numbers entirely: Describe behavior qualitatively

**When to use:** Every article with numeric claims (percentages, latency, costs, parameters). **When NOT to use:** Skip for purely conceptual content without data.

#### Rule 3: Delete Vague Superlatives

Every claim must be specific and verifiable. **Delete words that add no information.**

**Banned words:**
- "leading", "best-in-class", "industry-leading"
- "powerful", "robust", "seamless", "cutting-edge", "state-of-the-art"
- "revolutionary", "game-changing", "transformative"
- "easy to use", "simple" (unless you explain why)
- "unique" (unless it's actually unique — then say what makes it unique)
- "comprehensive", "complete", "all-in-one"

**Rule of thumb:** If a competitor could use the same sentence without changing a word, delete it and rewrite.

---

### SECTION D: Hardware & Constraint Specificity (Rule 2a)

When discussing technical constraints, system requirements, or model capabilities, always use **exact numbers** instead of vague descriptors. AI systems use specific constraints to match user queries to appropriate solutions.

#### When to Use (Decision Framework)

**Use Rule 2a when:**
- Discussing VRAM requirements, context windows, token limits
- Explaining latency expectations or API costs
- Comparing model sizes or hardware recommendations
- Listing batch processing limits or throughput

**Skip when:**
- Content is purely conceptual (no constraints mentioned)
- Discussing theory or research (not practical implementation)
- Writing for Beginner audience (exact specs can overwhelm)

#### Constraint Categories Requiring Specificity

| Constraint | Vague ❌ | Specific ✅ |
|-----------|---------|-----------|
| Context window | "Large context support" | "GPT-4o supports 128k token context window" |
| VRAM requirement | "Requires good GPU memory" | "7B parameter models require 8GB+ VRAM; 13B models need 16GB+" |
| Token limits | "Reasonable token counts" | "Claude 4.6 Sonnet: 200k input tokens; 4k output tokens" |
| Latency | "Fast responses" | "Average response latency: 500-800ms for GPT-4o" |
| API costs | "Affordable pricing" | "GPT-4o: $5/1M input tokens, $15/1M output tokens" |
| Model size | "Smaller models available" | "Mistral 7B: 7 billion parameters; uses ~14GB VRAM" |
| Batch limits | "Bulk processing supported" | "Batch API accepts up to 100k requests per file" |

**Examples in context:**

**Wrong:**
> "Local models are available for privacy-conscious users."

**Right:**
> "Ollama supports running models locally — LLaMA 3.1 7B requires 8GB RAM for inference, 13B requires 16GB. No data leaves your machine."

---

### SECTION E: Entity Naming (Rules 4, 4a, 4b — Consolidated)

Use full, consistent entity names. AI systems build knowledge graphs — vague references break citations.

#### Rule 4: Product & Organization Names (Exact Format)

**Product names (always use exactly):**
- GPT-4o (not "GPT-4" unless referring to the original GPT-4)
- Claude 4.6 Sonnet (not "Claude" without version when specificity matters)
- Ollama (not "local LLM runner")
- LM Studio (not "LM studio" or "lmstudio")

**First mention rule:** On first mention per page, use the full name + one-line description:
> "Ollama is a tool that enables running large language models locally on your machine."

Subsequent mentions: use the short form (e.g., "Ollama").

#### Rule 4a: Entity Density (5–7 Distinct Entities Per Article)

Every PE article must mention and define 5–7 "high-value entities" (proper nouns, technical terms, product names). These signal topical authority to AI crawlers and enable knowledge graph building.

**Entity Categories:**
1. **Product/Tool names** — GPT-4o, Claude, Gemini, Ollama, LM Studio, Mistral
2. **Company/Organization names** — OpenAI, Anthropic, Google DeepMind, Mistral AI
3. **Researcher/Author names** — "Wei et al." (for cited papers), "Brown et al." (for GPT-3)
4. **Technical terms** — Temperature, Top-P, Chain-of-Thought, Nucleus Sampling, Hallucination, RAG, Token
5. **Industry/Standard terms** — Context Window, Token Limit, Latency, Throughput, API

**Requirement:** Every PE article must mention **5–7 distinct entities**, defined clearly on first mention.

**When to use:** Always, for all Intermediate+ articles. **When NOT:** Skip for Beginner glossary entries (too many entities confuse new readers).

#### Rule 4b: Local LLMs Entity Standards (Exact Naming)

Local LLMs articles must use exact product names, model identifiers, and version numbers. AI crawlers use these to disambiguate models and build knowledge graphs.

**Model names (always use exactly):**
- Llama 3.2 3B (not "Llama 3" or "Meta's model")
- Mistral 7B v0.3 (not "Mistral" without version)
- Qwen2.5 7B (not "Qwen" alone)
- Phi-3.5 Mini 3.8B (not "Phi" without version)
- Gemma 2 2B (not "Google's small model")
- DeepSeek-R1 32B (not "DeepSeek" without model identifier)

**Tool names:**
- Ollama (always capitalize)
- LM Studio (two words, both capitalized)
- llama.cpp (all lowercase, with period)
- Jan AI (not "Jan" or "jan.ai")
- GPT4All (one word, specific capitalization)

**Format names:**
- GGUF (all caps, no periods)
- safetensors (all lowercase, one word)
- Q4_K_M, Q5_K_M (exact quantization format identifiers)

**Hardware names:**
- NVIDIA RTX 4070 Ti (full product name on first mention)
- Apple Silicon M4 (not "Apple chip" or "M-series")
- Use exact VRAM amounts: "12 GB VRAM" (not "about 12 GB")

**First mention rule for Local LLMs:** Include parameter count and primary use case:
> "Llama 3.2 3B is a 3-billion-parameter model from Meta that runs on any laptop with 4 GB of RAM."

---

### SECTION F: Internal Linking (Rules 2c, 6a, 8d, 9 — Consolidated)

Deep internal linking signals topical authority and increases dwell time. **Every article should include 5–10 internal links woven into body text.**

#### Rule 2c: Body Linking Strategy (5–10 Total Links)

Links should be embedded in article body where relevant concepts are discussed, not just listed in a "Related Reading" section at the end.

**Linking strategy:**

1. **Body links (4–7):** As you write each section, link to related concepts when first mentioned:
   - Link glossary terms on first mention (e.g., "[RAG](/glossary#rag)")
   - Link to prerequisite articles when introducing dependencies (e.g., "[LLMs](/fundamentals-of-llms) work by...")
   - Link to technique guides when discussing approaches (e.g., "[Constrained prompting](/constrained-prompting) restricts...")
   - Link to comparison articles when discussing tradeoffs (e.g., "Unlike [zero-shot prompting](/zero-shot-vs-few-shot)...")

2. **Related Reading section (3–5):** Curate deeper cross-links at the end:
   - Include pillar articles (upward: foundational concepts)
   - Include sibling articles (sideways: same theme, different angles)
   - Include downstream articles (downward: advanced applications)
   - Use descriptive anchor text explaining why the link is relevant

3. **Link quality over quantity:**
   - Only link when the connection is semantic and valuable
   - Use specific anchor text (not "click here" or "learn more")
   - Don't duplicate links to the same page in the same article
   - Prefer linking to live articles over stubs

#### Rule 6a: Link Destination Quality (Content, Not Hubs)

**Always link to specific article pages, not hub/category pages.**

**Wrong:**
> "Learn more about [LLM architectures](/local-llms)" → Points to hub, not specific article

**Right:**
> "Learn about [transformer architecture in LLMs](/how-transformers-work)" → Points to specific, citable article

#### Rule 9: Pillar-Cluster Architecture

**Upward links (to foundational articles):**
- Link from technique articles to fundamentals
- E.g., "Temperature adjustment (technique)" links to "Sampling methods (pillar)"

**Sideways links (to sibling articles):**
- Link between articles covering the same technique from different angles
- E.g., "RAG for legal docs" links to "RAG for customer support"

**Downward links (to specialized applications):**
- Link from general techniques to domain-specific implementations
- E.g., "Structured output" links to "JSON mode for API integration"

**Checklist for linking compliance:**
- [ ] Article has 5–10 total internal links
- [ ] At least 4–5 links are embedded in body text (not just Related Reading)
- [ ] All links use descriptive anchor text
- [ ] No more than 1 link to the same page per article
- [ ] Links point to live articles, not stubs
- [ ] Related Reading section includes 3–5 curated links with brief context

---

### SECTION G: Schema Markup (Rule 5)

**JSON-LD schema enables AI systems to extract and cite your content programmatically.**

#### When to Use Each Schema Type

| Page Type | Schema | When to Use | Example |
|---|---|---|---|
| PE Article | Article + TechArticle | Always, every article | how-to-use-few-shot-prompting |
| Hub Page | WebPage + BreadcrumbList + FAQPage + ItemList | Hub/category pages | /prompt-engineering |
| How-to Article | HowTo (step-by-step) | Numbered steps or ordered process | how-to-build-rag |
| FAQ Section | FAQPage (with mainEntity array) | Articles with Q&A sections | Most PE articles include |
| Glossary Entry | DefinedTerm + Definition | Glossary pages only | term-definition pages |
| Learning Path | LearningResource + hasPart | Multi-article learning sequences | (future) |

**Mandatory fields for Article schema:**
- `headline` (H1 title)
- `description` (meta description)
- `author` (person name + sameAs URL)
- `datePublished` (ISO 8601 format)
- `dateModified` (ISO 8601, updated on revision)
- `image` (og:image URL)
- `articleBody` (auto-populated)

**Optional but recommended:**
- `educationalLevel` (Beginner/Intermediate/Advanced/Technical)
- `speakable` (CSS selectors for text-to-speech extraction)
- `hasPart` (reference FAQ section)

**Checklist:**
- [ ] Every article has `Article` schema with headline, description, author, dates
- [ ] FAQPage schema present if article has FAQ section
- [ ] HowTo schema present if article has numbered steps
- [ ] No schema validation errors (test via Google Rich Results Test)

---

## PART 3: METADATA & SEO OPTIMIZATION

### Rule 8a: Meta Description Format (Mandatory)

The meta description is the 2–3 line preview snippet under your title in search results. **It must make someone click.**

**Format requirements:**
- Length: 150–160 characters (test in Google Preview)
- Structure: `[Keyword opening] [concrete result/fact] [implicit tension/gap]`

**Formula:**
```
[Specific data point or result] [Context/how it works] [What makes this valuable]
```

#### Examples by Category

**Prompt Engineering articles:**
> ❌ "In this article we will explore how prompt injection works and how to defend against it."
> ✅ "Prompt injection exploits the fact that LLMs can't distinguish instructions from user data. Here's how to defend your system."

**Technique articles:**
> ❌ "Learn effective techniques for writing better prompts using AI."
> ✅ "12 prompt techniques tested across GPT-4o, Claude, and Gemini. See which ones reduce hallucination by 40%+."

**Comparison articles:**
> ❌ "This guide covers how to use different AI models together."
> ✅ "Compare AI models side-by-side: see which excels at reasoning, coding, long contexts, and cost. One tool, five models."

**Local LLMs articles:**
> ✅ "Run 7B models locally with 8GB VRAM. Install Ollama, download a model, integrate via API. Zero data leaves your machine."

**Checklist:**
- [ ] Description is 140–155 characters (not longer)
- [ ] Opens with specific result, metric, or fact (not "Learn how", "Discover")
- [ ] Includes primary keyword naturally (not forced)
- [ ] Ends with tension or gap ("here's what most miss", "the fix is one line")
- [ ] Does NOT repeat title word-for-word
- [ ] Does NOT start with "In this article we will..."

---

### Rule 2d: Title Tag Optimization (60 Chars Max)

Title tags appear in Google search results, browser tabs, and AI engine citations. Google truncates titles longer than 60 characters.

| Rule | Guideline | Why It Matters |
|------|-----------|---|
| **Include a number** | "8 Structural Limits of LLMs" beats "Structural Limits of LLMs" | Numbers get 15–30% higher CTR. Signal concrete content. |
| **Add the year** | "Chain-of-Thought Prompting (2026)" | Year signals freshness; +15–30% CTR on informational queries |
| **Use a colon** | "Chain-of-Thought: Make AI Show Its Reasoning" (not "How to Use...") | Colon splits keyword from benefit; both scannable in SERP |
| **Max 60 characters** | Count every character including spaces. Test in Google Preview. | Longer = truncation = unclickable |
| **Never start with "The" or "A"** | "Multi-Model Comparison (2026)" (not "The Guide to...") | Articles waste prime characters |
| **Use statement format** | "8 Ways to Reduce Hallucinations" (not "How do you...?") | Statements work for informational intent; questions for FAQs |

**Examples:**

| ❌ Wrong | ✅ Right | Issue |
|---|---|---|
| How to Use Prompt Injection | Prompt Injection: Attack Vectors & Defenses | Buries technique; unclear benefit |
| Limit Context Windows | 5 Ways to Optimize Context Windows (2026) | Missing number & year; vague scope |
| Tips for Writing Prompts | Effective Prompting: 12 Techniques (2026) | Weak verb; no number/year |

---

### Rule 2e: Avoid Generic Title Patterns Across Related Articles (CTR Prevention) ⭐

**Problem:** When multiple articles in the same topic area use identical title patterns (e.g., "Complete Guide", "Full Comparison", "Everything You Need"), SERPs show repetitive snippets → lower CTR across the entire topic cluster.

**Solution:** Ensure each article has a **unique angle** in the title. For related articles on the same topic, use different strategic angles.

#### Four Unique Title Angles

Use ONE of these frameworks per article in a topic area:

| Angle | Pattern | Examples |
|-------|---------|----------|
| **Question** | "... Which One?", "... Which Wins?", "... How to Choose?" | "Qwen vs Llama vs Mistral: Which Model Wins?", "RAG vs Fine-tuning: Which Is Better?" |
| **Comparison** | "... vs ...", "... Side-by-Side Comparison" | "GPT-4o vs Claude 3.5: Comparison", "Ollama vs llama.cpp: Feature Comparison" |
| **Outcome/Best** | "Best for...", "Top 10...", "Ranked by..." | "Best Local LLMs for Coding", "Top 5 Prompt Techniques by Effectiveness" |
| **Use-case** | "For [audience/task]", "[Task] in [timeframe]" | "Prompt Engineering for Beginners", "Fine-tuning in 30 Minutes", "RAG for Enterprise Applications" |

**Generic patterns to AVOID:**
- ❌ "Complete Guide to..." (not unique)
- ❌ "Full Comparison of..." (not unique)
- ❌ "Everything You Need to Know About..." (too long + generic)
- ❌ "Ultimate Guide..." (too broad)
- ❌ "How to..." (overused, no differentiation)

#### Enforcement Checklist

Before finalizing a title for an article in a dense topic area (e.g., model comparisons, prompting techniques), ask:

1. **Do I have 3+ similar articles on this topic?** 
   - If YES → Check their titles. Do they use the same pattern as mine?
   - If NO → Proceed.

2. **If YES, what angle do the others use?**
   - Article A uses Question angle ("Which wins?")
   - Article B uses Outcome angle ("Best for coding")
   - Article C should use Comparison or Use-case angle → Avoid repeating A or B

3. **Is my title's angle visibly different in the SERP?**
   - Paste your title + related titles into [Google Preview](https://www.seroundtable.com/google-serp-snippets-test.html)
   - Do they look repetitive or distinct?
   - If repetitive, revise.

**Impact:** Unique angles increase CTR diversity across topic clusters by 15–25% by preventing SERP fatigue.

---

### Rule 8c: Top-of-Page Structure (Exact Sequence)

The order of elements after your H1 title determines what AI crawlers extract first. **Follow this exact sequence:**

```
1. H1 title
2. [Optional] Byline + credential signal (Rule 30.1)
3. Lead Answer Block (Rule 31) — 25–50 words, bold, answers H1 in first 10 words
4. CTR-First Opening Block (Rule 33) — 1–2 lines, tension or contradiction, max 30 words
5. Key Takeaways block (5–7 bullets, in a styled div with class="key-takeaways")
6. [Optional] Quick Facts Block (Rule 27) — if 4+ numerical facts present
7. Table of Contents (with anchor links)
8. Last Updated date with <time datetime=""> element (Rule 11)
9. Intro paragraph (2–3 sentences)
10. First H2 heading (your first section)
```

**Why this order matters:**
- Lead Answer Block answers the H1 immediately → featured snippet extraction
- Key Takeaways shown before body → AI summaries cite these bullets
- Updated date visible early → trust signals for recency
- ToC helps crawlers understand section hierarchy

**Checklist:**
- [ ] Lead Answer Block is bold, 25–50 words, answers H1 in first 10 words
- [ ] CTR-First Opening Block is present (max 30 words, contains tension)
- [ ] Key Takeaways block has 5–7 bullets and class="key-takeaways"
- [ ] Quick Facts block present only if 4+ numerical facts
- [ ] ToC includes all H2 anchors (use single `#` not `##` for markdown)
- [ ] `<time datetime="">` element present with ISO 8601 date
- [ ] Intro paragraph is max 3 sentences

---

### Rule 11: Visible Last-Updated Date

Every PE article must display a visible publication or last-modified date near the top of the page. AI crawlers increasingly weight recency when selecting sources for citations.

**Format:** "Last updated: [Month Year]" (e.g. "Last updated: April 2026")

**HTML requirement:** Render using semantic `<time>` element with `datetime` attribute:
```html
<time datetime="2026-04-07">Last updated: April 2026</time>
```

Plain text dates alone are insufficient — the `<time>` element with valid ISO 8601 `datetime` attribute is required for schema validation.

**When to update the date:**
- After substantive content changes (new stats, new FAQ entry, rewritten section, added examples)
- NOT for minor typo fixes or formatting changes
- Update `dateModified` in schema to match

---

### Rule 33: CTR-First Opening Block (Mandatory)

**Between the Lead Answer Block and Key Takeaways, include a 1–2 line SERP hook that creates tension.**

This block is not a definition — it is a curiosity gap designed to make the reader continue past the fold. CTR is driven by tension and contradiction, not relevance alone.

**Format:**
```
[Specific outcome] + [unexpected insight OR tradeoff]
```

**Example:**
> "Most local LLM setups fail because of VRAM limits — not model quality. A 7B model can outperform a 13B model if quantized correctly."

**Rules:**
- Max 30 words
- Must contain a tension, contradiction, or surprising fact
- Must NOT repeat title wording
- Must make the user think: "wait, what?"
- Not bold (distinct from Lead Answer Block which is always bold)

**When to use:** Every article except glossary entries and coming-soon stubs.

**Why:** AI search snippets preview the first 2–3 sentences below the title. A tension hook in that position lifts CTR by surfacing the unexpected angle before readers click.

**Checklist:**
- [ ] Block is present between Lead Answer Block and Key Takeaways
- [ ] Max 30 words
- [ ] Contains tension, contradiction, or surprising stat
- [ ] Does not repeat title wording

---

### Rule 34: Multilingual CTR Calibration (Language-Specific Titles)

**CTR varies by language due to fundamental differences in search behavior and user intent patterns.** A title optimized for English CTR may underperform in German, French, Japanese, or Chinese. Each language requires a distinct title strategy — do NOT reuse the English title structure directly.

#### Language-Specific Title Strategies

**🇩🇪 German (DE) — Formal, Specific, Data-Driven**

German users prioritize **precision and completeness** over emotional language. They search for exact specifications and want to know upfront what they're getting.

**Characteristics:**
- Longer titles (up to 70 characters acceptable)
- Include numeric specs early (RAM, latency, cost)
- Avoid hyperbole and marketing language
- Use Sie-form, formal register
- Lead with concrete value

**Examples:**
- ❌ "Local LLMs on Laptop: What Actually Works"
- ✅ "Lokale LLMs auf Laptop: 8GB vs 16GB RAM Vergleich & Benchmarks"

---

**🇬🇧 English (EN) — Emotional Contrast, Comparative, Curiosity-Driven**

English-speaking users (especially US/UK) respond to **emotional contrast** and competitive positioning. Superlatives, "vs" comparisons, and "which/what works" phrasing drive higher CTR.

**Characteristics:**
- Shorter titles (50–60 characters ideal)
- Use comparative language: "vs", "Best", "Which", "What Works"
- Create contrast or tension (underdog angle, myth-busting)
- Conversational tone, less formal
- Lead with curiosity or benefit

**Examples:**
- ❌ "Running Local LLMs on Laptops: Technical Guide"
- ✅ "Local LLMs on Laptop: What Actually Works (8GB vs 16GB)"

---

**🇫🇷 French (FR) — Descriptive, Clarity-First, Practical**

French users prefer **clear, descriptive titles that promise practical utility** over aggressive positioning. They are skeptical of superlatives and respond better to "how to" and "guide" framing.

**Characteristics:**
- Balanced length (55–65 characters)
- Descriptive phrasing over comparative ("Guide" over "Best")
- Practical, utility-focused language
- Avoid hype and aggression
- Lead with the task or topic

**Examples:**
- ❌ "Le meilleur guide pour les LLM locaux"
- ✅ "Exécuter des LLM locaux sur un ordinateur portable (guide pratique)"

---

**🇯🇵 Japanese (JA) — Keyword-Dense, Functional, Model-Name-First**

Japanese search behavior is **highly structured and keyword-oriented**. Users include specific model names and parameter counts in searches. Titles benefit from being more keyword-dense and less narrative.

**Characteristics:**
- Shorter, more compact (50–58 characters due to kanji/character width)
- Include model names and specs early (e.g., "Llama 3.2 3B")
- Direct utility language, minimal narrative
- Less emotive, more factual
- Use です/ます polite form

**Examples:**
- ❌ "ノートパソコンで実行できるLLMについて"
- ✅ "ノートパソコンでLlama 3.2を実行：8GB RAMガイド"

---

**🇨🇳 Chinese (ZH) — Direct Utility, Spec-Focused, Brand Names**

Chinese search engines (Baidu, WeChat) prioritize **direct utility and specific models/brands**. Users search with model names, parameter counts, and hardware specs combined. Titles are expected to be comprehensive and informative.

**Characteristics:**
- Keyword-dense, comprehensive (can be longer in Chinese characters)
- Include specific model names and specs
- Direct value proposition, no narrative
- Practical, no marketing language
- Lead with the task + model

**Examples:**
- ❌ "笔记本电脑上的本地LLM"
- ✅ "笔记本电脑上运行Qwen2.5 7B：8GB RAM完整指南"

---

#### Decision Framework: Choosing Your Title Per Language

For a single topic (e.g., "running local LLMs on 8GB laptops"), apply this framework:

| Language | Primary Hook | Structure | Example |
|---|---|---|---|
| **EN** | Emotional contrast / "which" | `[Benefit]: What Works vs [Alternative]` | "Local LLMs: What Works (8GB vs 16GB)" |
| **DE** | Specificity / specs | `[Topic]: [Spec1] vs [Spec2] + Benchmarks` | "Lokale LLMs: 8GB vs 16GB RAM Vergleich" |
| **FR** | Practical utility | `[Action] [Topic]: [Guide/Pratique]` | "Exécuter des LLMs: guide pratique" |
| **JA** | Model + spec | `[Model] を [Device] で実行：[Spec] ガイド` | "Llama 3.2を笔记本で実行：8GB RAMガイド" |
| **ZH** | Model + task | `[Task] [Model]：[Spec] 完整指南` | "笔记本电脑上运行Qwen：8GB完整指南" |

---

#### Enforcement Rules

**Before translating a title to another language, ask yourself:**

1. **Did I use the English title as a template?** — If yes, this is wrong. Re-think from scratch per language.
2. **Does the title reflect language-specific search behavior?** — German: specs? English: contrast? French: clarity?
3. **Are translated titles in the same emotional register?** — EN aggressive ("What Works"), DE neutral ("Vergleich"), FR practical ("Guide")?
4. **Does each language version drive CTR in that market?** — Test in Google Search Console per language after 2+ weeks.

**Red flags (revise before publishing):**
- ❌ All language titles are identical (only language changed)
- ❌ German title uses "Best" or superlatives (wrong for DE audience)
- ❌ French title includes aggressive "vs" phrasing (wrong for FR audience)
- ❌ Japanese/Chinese title is a word-for-word translation (loses keyword density)
- ❌ No model names in Japanese/Chinese titles (critical for search matching)

**Green flags (you're on track):**
- ✅ Each language title reflects native search patterns
- ✅ German title includes specs; English includes emotion; French includes clarity
- ✅ Model names appear early in JA/ZH; later/optional in EN/DE/FR
- ✅ Titles read naturally in each language (not translated, adapted)

---

#### Post-Publication Monitoring

After publishing all 5 language versions, monitor CTR differences in **Google Search Console**:

1. **Compare CTR by language** after 2+ weeks of impressions
2. **If one language underperforms by >15%**, revisit the title using this rule
3. **Document what worked** in PromptQuorum's internal style guide for future articles

**Example learning curve:**
> "DE audience responds 8% better to titles with specific RAM numbers (8GB, 16GB) vs. rounded (8–16GB). FIX: always use exact numbers in DE titles."

---

## PART 4: ADVANCED CONTENT OPTIMIZATION

### Rule 31: Lead Answer Block (Canonical Definition)

Every article needs a **lead answer block** immediately after the byline and before Key Takeaways. This is the 25–50 word definition that answers your H1 title completely.

**Format:**
```
[Topic] is [definition of what it is and primary use]. [One benefit or consequence].
```

**Requirements:**
- Wrap entire definition in `**bold**`
- Max 50 words (count every word)
- Answer the H1 in the first 10 words
- Standalone (readable without the rest of the article)
- Use present tense

**Example:**

> **Prompt engineering is the practice of designing and refining instructions (prompts) given to language models to achieve specific outputs.** Effective prompt engineering reduces hallucinations, improves accuracy, and enables non-technical users to build AI applications without coding.

**Why:** Featured snippet extractors pull the first 25–50 word definition from an article to use in AI summaries and search previews. A weak definition means your content gets skipped for competitors' definitions.

---

### Rule 27: Quick Facts Block (If 4+ Numerical Facts)

**Triggered by:** Articles with 4 or more numerical facts (token counts, costs, latency, parameter counts, percentages, VRAM requirements).

**What counts as a "fact":**
- Token count (e.g., "128k tokens", "4k output limit")
- Pricing (e.g., "$5/1M tokens", "free tier")
- Latency (e.g., "500ms average", "2 tokens/sec")
- Parameter count (e.g., "7B parameters", "70B model")
- VRAM requirement (e.g., "8GB VRAM", "16GB+")
- Accuracy percentage (e.g., "92% on MMLU")

**Does NOT count:**
- Adjectives ("fast", "efficient", "large")
- Comparisons without numbers ("faster than competitors")
- Relative statements ("most powerful")

**Format:** Styled box after Key Takeaways, before ToC

```
## Quick Facts

- **Context window:** GPT-4o: 128k tokens (16× larger than GPT-4o mini)
- **API costs:** $5/1M input tokens; $15/1M output tokens
- **Latency:** 500–800ms average response time
- **VRAM requirement:** 8GB for 7B models; 16GB for 13B
```

**When to skip:** If article has fewer than 4 numeric facts, omit this section entirely.

---

### Rule 13: Global and Regional Perspective

**When to use:** Articles discussing regulations, model availability, data residency, or deployment constraints. **When to skip:** Purely conceptual topics (no geographic variation).

**Minimum for Global/Regional articles:**
- 1–2 sentences per relevant region (EU, China, Japan, others)
- Focus on differences that affect the reader (regulation, availability, cost, data residency)

**Examples:**

**EU perspective (if applicable):**
> "EU users must comply with GDPR data residency requirements — data cannot be processed in US-based APIs without Privacy Shield equivalence. Ollama and LM Studio enable local processing to meet GDPR Article 5 requirements."

**China perspective (if applicable):**
> "Model availability in mainland China is restricted; users must register with CAC (Cyberspace Administration of China) for public APIs. Alibaba Qwen and ByteDance models are available domestically without restrictions."

**Japan perspective (if applicable):**
> "Japan's APPI (Act on Protection of Personal Information) requires user consent for data processing. Many Japanese companies use on-premises deployment or local LLMs to avoid API data transfers."

---

### Rule 14: Original Insights and Testing

Every article should include at least **one original data point with a numeric figure** based on actual testing or measurement.

**What counts as "original":**
- Your own testing across 2+ models (e.g., "We tested prompt injection defenses on 5 prompts across GPT-4o, Claude, and Gemini")
- Your own benchmarks (e.g., "Measured latency: 640ms for GPT-4o mini vs. 520ms for Claude 3.5 Haiku")
- Your own survey or observation (e.g., "Of 100 developers surveyed, 65% reported hallucination issues in production")

**What does NOT count:**
- Anecdotal observations ("seems like this works")
- Vague claims ("testing shows improvement")
- Sourced benchmarks from papers or vendor docs (cite these, don't claim as original)

**Format:** Include in article body with clear sourcing:
> "We tested 20 prompts across GPT-4o and Claude 4.6 Sonnet using the PromptQuorum benchmark suite. Chain-of-Thought prompting reduced factual errors by 35% on coding tasks but showed no improvement on summarization."

**When to skip:** Glossary entries and conceptual articles with no testing angle.

---

### Rule 12: LLM Snippet Blocks (In One Sentence / In Plain Terms)

These are short, standalone explanations placed strategically throughout the article to help AI text-to-speech and summary systems extract clear definitions.

#### Rule 12a: "In One Sentence" Block (Technical Precision)

**Use for:** Technical or precise definitions where accuracy matters

```
### In One Sentence
Temperature controls the softmax distribution sharpness: lower T produces deterministic output; higher T increases randomness.
```

#### Rule 12b: "In Plain Terms" Block (Accessibility)

**Use for:** Analogies or non-technical explanations for general audiences

```
### In Plain Terms
Temperature is like the creativity dial on a model. Turn it down to 0 for consistent, predictable answers. Turn it up to 2 for wild, creative responses.
```

**Minimum per article:** At least 2 snippet blocks (1 per major section or 1 per 800 words)

**When to use:** Always, for Intermediate articles. **When to skip:** Technical articles for researchers (pure code/math doesn't need "plain terms").

---

### Rule 15: Structured Prompt Examples

Show both bad and good prompts with clear labels. This helps users understand the improvement.

**Format:**

```markdown
### Bad Prompt
> "Write me a prompt about prompt engineering."

### Good Prompt
> "Write a 150-word article outline for someone new to prompt engineering. Include: what it is, why it matters, and 3 techniques. Assume zero AI experience."
```

**Why:** Comparison helps readers understand what makes a prompt effective. AI systems cite these examples as concrete use cases.

**Minimum:** Every how-to or technique article needs at least 1 bad → good example pair.

---

### Rule 17: Mandatory Callout Boxes (Visual Highlights)

Callout boxes break up text and highlight key concepts. They're required for articles > 500 words.

| Article Length | Minimum Callout Boxes |
|---|---|
| ≤ 500 words | 0 (optional) |
| 501–1,500 words | 5 minimum |
| 1,501–3,000 words | 8 minimum |
| 3,000+ words | 10+ minimum |

**Types of callout boxes:**

1. **⚠️ Warning** — Common mistakes or pitfalls
2. **💡 Pro Tip** — Advanced technique or optimization
3. **🔍 Did You Know?** — Interesting fact or trivia
4. **📌 Key Point** — Critical concept to remember
5. **🛠️ Best Practice** — Recommended approach

**Format (Markdown):**
```markdown
> ⚠️ **Common Mistake:** Increasing temperature without also setting `top_p`. This can produce nonsensical output.
>
> **Fix:** Use temperature + top_p together for controlled randomness.
```

**Checklist:**
- [ ] Article has minimum callout boxes per length
- [ ] Each callout adds new information (not repetition)
- [ ] Icons/emoji used consistently
- [ ] No more than 1 callout per 150 words (avoid cluttering)

---

### Rule 16: Markdown Tables for Data

Use tables for 3+ comparisons, dated events, or complex data. Tables are highly extractable by AI systems.

**When to use:**
- Comparing 3+ models or tools (columns: tool, cost, context window, VRAM)
- Historical timeline of releases or versions
- Parameter ranges for different settings (temperature, top_p, etc.)
- Feature comparison matrix

**Example (model comparison):**

| Model | Parameter Count | Context Window | API Cost (1M tokens) | Best For |
|---|---|---|---|---|
| GPT-4o | 100B+ (estimated) | 128k tokens | $5 input / $15 output | Reasoning + long documents |
| Claude 4.6 Sonnet | 100B+ (estimated) | 200k tokens | $3 input / $15 output | Code generation + long context |
| Gemini 2.5 Pro | 100B+ (estimated) | 1M tokens | $1.25 input / $5 output | Longest context |
| Mistral Large | 123B | 32k tokens | $2 input / $6 output | Cost-effective reasoning |

---

### Rule 20: Mathematical Notation

When explaining math, parameter ranges, or formulas, use clear notation or LaTeX.

**When to use:**
- Temperature scaling: "Temperature (T) scales logits: `logits / T`"
- Probability thresholds: "Top-p = 0.9 means cumulative probability ≥ 90%"
- Parameter ranges: "Temperature ∈ [0.0, 2.0]; recommended [0.1, 1.0]"
- Formulas: "Softmax(logits) = exp(logit_i) / Σ(exp(logit_j))"

**Formats allowed:**
1. Inline code: "`temperature` controls sharpness"
2. LaTeX: "softmax with temperature = exp(logit/T) / Σ exp(logit_j/T)"
3. Variable notation: "If T = 0, always pick highest token. If T = 1.0, use natural distribution."
4. Parameter tables with ranges

**Why:** AI systems extract mathematical notation for technical citations. Clear notation enables precise quotes in academic contexts.

---

## PART 5: COMPLIANCE & ENFORCEMENT

### Rule 25: Mandatory Common Mistakes Section

**Required for:** Framework articles, techniques, security content
**Optional for:** Conceptual/historical/glossary content

**Minimum:** 3–5 mistakes with fixes

**Structure:**

```markdown
## Common Mistakes

### Mistake 1: [Specific incorrect approach]
**Problem:** [What goes wrong]
**Fix:** [Correct approach with example]

### Mistake 2: [Another common error]
**Problem:** [Consequence]
**Fix:** [Correct practice]
```

**Example:**

```markdown
## Common Mistakes

### Mistake 1: Using Temperature Without Top-P
**Problem:** High temperature alone produces incoherent output because all low-probability tokens are still possible.
**Fix:** Pair temperature with `top_p=0.9` to restrict sampling to high-probability tokens, maintaining quality.
```

---

### Rule 19: FAQ Type Diversity (Min 6–8 Questions)

**Required for:** PE articles, how-to guides, tools, frameworks
**Optional for:** Glossary entries, brief guides

FAQ sections must cover **at least 3 of these 5 types:**

1. **Definitional:** "What is X?" — clarifies concepts
2. **Comparative:** "When should I use X vs Y?" — addresses decision-making
3. **Quantitative:** "How much does X cost / take / require?" — answers specific numbers
4. **Procedural:** "How do I do X?" — step-by-step guidance
5. **Disambiguation:** "Is X the same as Y?" — clarifies confusion

**Recommended mix for typical article:**
- 2 definitional (concepts readers might misunderstand)
- 1 comparative (when to use this vs. alternatives)
- 1 quantitative (cost, time, resources)
- 1 procedural (how to implement)
- 1 disambiguation (common confusions)

**Total:** 6–8 Q&A pairs per article

**Checklist:**
- [ ] FAQ section has 6–8 questions
- [ ] At least 3 of the 5 types are covered
- [ ] Each Q&A is 2–4 sentences (concise)
- [ ] Questions phrased in natural user language (not academic)
- [ ] FAQPage schema present in content.ts

---

### Rule 30.1: Top Byline with Credential Signal

**Place immediately after intro paragraph, before Key Takeaways**

**Format:**
```
By [Author Name], [Credential/Role] at PromptQuorum | [Link to author profile or sameAs URL]
```

**Example:**
```
By Sarah Chen, Machine Learning Researcher at PromptQuorum | [LinkedIn](https://linkedin.com/in/sarahchen)
```

**Purpose:** 
- Establishes author authority early (before reader dives into content)
- Signals to AI crawlers that content is written by a credible person, not generated
- Improves E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) score

**Optional additions:**
- Publication date badge: "Published April 7, 2026"
- Reading time: "7 min read"

---

### Rule 29: Audience & Difficulty Level Signal

**Required fields in content.ts:**
```ts
educationalLevel: 'Intermediate',  // Beginner | Intermediate | Advanced | Technical
audience: 'Developers building with LLMs'  // specific job role, not broad group
```

**Visible display:** Shows as a badge below article title
```
🎓 Intermediate | For: Developers building with LLMs
```

**Why:** 
- Helps readers self-select appropriate difficulty level
- Powers `LearningResource` schema for Google
- Signals content specificity to AI crawlers

---

### Rule 28: Inline Date References (Time-Sensitive Content)

**Required for:** Articles about model releases, pricing, availability, current events

**Format:** "As of [Month Year]" placed in context:

```markdown
As of April 2026, GPT-4o supports 128k token context window, compared to GPT-4 Turbo's 128k limit.
```

**Minimum:** At least 2 "As of" references per article discussing current information

**Why:** Dates signal to AI crawlers which facts are current and which may be stale. Critical for citations.

---

### Master Pre-Publish Checklist

Use this checklist before committing any new or edited article:

#### Content & Structure
- [ ] H1 title is 50–65 characters (SERP-safe)
- [ ] First H2 after ToC is not a repetition of H1
- [ ] Every H2 ends in "?" or is a direct answer phrase (not a label)
- [ ] Every H2's first sentence is bold and answers the question
- [ ] All paragraphs are max 3 sentences
- [ ] Article includes 5–10 internal links (4–7 in body, 3–5 in Related Reading)
- [ ] All internal links use descriptive anchor text
- [ ] No more than 1 link per page to the same destination

#### Metadata
- [ ] Meta description is 140–160 characters
- [ ] Meta description opens with specific fact/result (not "Learn how")
- [ ] Meta description does NOT repeat the title
- [ ] Meta description includes primary keyword
- [ ] All entity names are exact and consistent (GPT-4o, Claude 4.6 Sonnet, etc.)
- [ ] Article mentions 5–7 distinct high-value entities
- [ ] Title strategies adapted per language (not direct translations) — DE/EN/FR/JA/ZH each use language-native hooks (Rule 34)

#### Top-of-Page Sequence
- [ ] Lead Answer Block is bold, 25–50 words, answers H1 in first 10 words
- [ ] CTR-First Opening Block present (max 30 words, tension/contradiction, no title repetition)
- [ ] Key Takeaways block has 5–7 bullets and class="key-takeaways"
- [ ] Quick Facts block present (if 4+ numerical facts)
- [ ] Table of Contents with all H2 anchors (single `#` not `##`)
- [ ] Visible last-updated date with `<time datetime="">` element

#### Content Quality
- [ ] Every numeric claim is factual, measured, or sourced (never invented)
- [ ] No vague superlatives (powerful, seamless, revolutionary, etc.)
- [ ] Article includes at least 1 original insight with numeric data
- [ ] Regional context included (if applicable: EU, China, Japan)
- [ ] At least 2 "In One Sentence" or "In Plain Terms" snippet blocks
- [ ] Minimum callout boxes present (5 for 500–1500 words, 8 for 1500–3000 words)
- [ ] Prompt examples include both "Bad Prompt" and "Good Prompt" labels (if applicable)
- [ ] All data presented in tables (if 3+ comparisons)

#### FAQ & Common Mistakes
- [ ] FAQ section has 6–8 questions covering 3+ of 5 types
- [ ] Common Mistakes section present (min 3–5 for how-to/techniques)
- [ ] FAQ questions phrased in natural user language
- [ ] Each FAQ answer is 2–4 sentences

#### Schema & Technical
- [ ] Article schema includes: headline, description, author, datePublished, dateModified
- [ ] FAQPage schema present with mainEntity array (if FAQ section exists)
- [ ] HowTo schema present (if numbered steps exist)
- [ ] All URLs are valid and live (no "Coming Soon" links)
- [ ] No schema validation errors (test via Google Rich Results Test)

#### Audience & Credentials
- [ ] Audience level set (Beginner/Intermediate/Advanced/Technical)
- [ ] Audience role is specific job title (not "AI users")
- [ ] Top byline present with credential signal
- [ ] Bottom author bio present with sameAs URL

#### Final Review
- [ ] `npm run build` passes with 0 errors
- [ ] Headings follow H2 > H3 > H4 hierarchy (no skips, single H1)
- [ ] All markdown formatting valid (no unclosed backticks, mismatched quotes)
- [ ] No hardcoded text (all strings use translations)
- [ ] No broken internal links (test by visiting each)
- [ ] At least 2 "As of [Month Year]" date references (if current content)

---

## MANDATORY RULES: Schema, Links, Regional Context & Format

### RULE: SCHEMA REQUIREMENTS (Rule 5 — Expanded)

**Every page published MUST include all applicable JSON-LD schema types in the `<head>` before `npm run build`.**

**Missing schema = automatic AEO/SEO failure regardless of content quality.**

#### Required on ALL Pages: TechArticle Schema

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "[exact H1 text]",
  "description": "[meta description]",
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "author": {
    "@type": "Person",
    "name": "Hans Kuepper",
    "url": "https://www.promptquorum.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PromptQuorum",
    "url": "https://www.promptquorum.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.promptquorum.com/logo.svg"
    }
  },
  "proficiencyLevel": "Beginner OR Intermediate OR Advanced",
  "about": [
    {"@type": "Thing", "name": "[primary topic]"},
    {"@type": "Thing", "name": "[secondary topic]"},
    {"@type": "Thing", "name": "[tool or model name]"}
  ]
}
```

#### Required on ALL Pages: Speakable Specification

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-intro"]
  }
}
```

**Add `className="article-intro"` to the first paragraph after H1 on every page.** This is the element speakable targets and the element Google/Perplexity/ChatGPT use as the canonical page summary.

**Add `<time dateTime="YYYY-MM-DD">` wrapping the date string on every page:**
```html
<time dateTime="2026-04-07">Last updated: April 2026</time>
```

#### Required on ALL Pages: FAQPage Schema (Minimum 8 Questions)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[question text — match H3 exactly]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[answer text — minimum 40 words]"
      }
    },
    // repeat for all FAQ questions (minimum 8)
  ]
}
```

#### Required on Pages WITH Comparison Tables: ItemList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "[descriptive table name]",
  "numberOfItems": [integer matching table rows],
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "[item name]",
      "description": "[2–3 sentences: key specs, use case, command if applicable]"
    }
    // one entry per table row
  ]
}
```

#### Required on Pages WITH Step-by-Step Instructions: HowTo Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[How to ... title]",
  "totalTime": "PT[N]M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[step title — imperative verb]",
      "text": "[step description]"
    }
    // 4–7 steps minimum
  ]
}
```

**Validation:**
- After deployment, test at: https://search.google.com/test/rich-results
- Page MUST show: FAQ, Article, BreadcrumbList (if applicable)
- ❌ FAIL if rich results test returns **0 detected items**

---

### RULE: INTERNAL LINKS (Mandatory on Every Page)

**Every page MUST have:**

- Minimum **3 internal links in body text** (not counting Related Reading)
- **Related Reading section with 5–6 links** (minimum 5)
- **All slugs verified as live** before publish (no 404s, no "Coming Soon" placeholders)
- **Zero broken links** to under-construction pages

#### Anchor Text Rules (Critical)

| ❌ WRONG | ✅ RIGHT |
|---|---|
| "click here" | "Learn how RAG systems expand attack surface" |
| "here" | "See the full VRAM formula in the hardware guide" |
| "read more" | "Read the official Ollama installation docs" |
| "learn more" | "Understand how imatrix quantization improves quality" |
| "related" | "[Model comparison: GPT-4o vs Claude 4.6](/compare)" |

**Rule:** Anchor text MUST contain the target page's primary keyword or a clear description of what the user will find.

#### Forbidden Link Targets

Never link to these pages (they are "soon" / under construction):
- `/local-llms/multilingual-local-llms`
- `/local-llms/local-llm-gpu-buying-guide`
- `/local-llms/best-local-llm-frontends`

---

### RULE: REGIONAL CONTEXT (Mandatory on /local-llms/* Pages)

**Every page in `/local-llms/*` MUST include a regional context section** covering EU, Japan, and China.

**Section requirements:**

- **Placement:** After main content sections, before Common Mistakes
- **Title:** `## [Topic]: Regional Context` OR `## [Topic] in EU, Japan, and China`
- **Minimum coverage:** All 3 regions required (EU, Japan, China)
- **Content per region:** Minimum 2–3 sentences with legal/regulatory reference

#### EU Section (Mandatory)

Include:
- **GDPR article reference** (Articles 5, 44, or Data Processing Agreement)
- **Germany-specific note** (German BSI/BfDI data protection authority where applicable)
- **Compliance posture:** How local inference addresses GDPR data minimization principles
- Example: "EU organizations prefer local inference to avoid cross-border data transfers under GDPR Articles 5 and 44."

#### Japan Section (Mandatory)

Include:
- **METI AI governance reference** (Ministry of Economy, Trade and Industry AI sovereignty program)
- **On-premises deployment note** for enterprise infrastructure
- **Model availability:** Qwen2.5, Llama models available on domestic servers
- Example: "Japan's METI promotes domestic AI sovereignty. Q4_K_M quantization enables 13B+ models on 16GB corporate servers."

#### China Section (Mandatory)

Include:
- **Data Security Law reference** (数据安全法 — Data Security Law, or CAC regulations if relevant)
- **Qwen2.5 / Baichuan recommendation** (Chinese-native models required for compliance)
- **On-premises compliance:** Legal requirement for local operation under CAC rules
- Example: "Local operation is legally required under CAC regulations. Quantization supports running Qwen2.5 on domestic hardware."

**FAIL condition:**
→ Section missing entirely  
→ Fewer than 2 of 3 regions present  
→ No legal/regulatory reference in any region  

---

### RULE: COMMON MISTAKES FORMAT (Rule 25 — Mandatory on How-To & Technique Articles)

**Common Mistakes section MUST use bullet format, NOT H3 subheadings.**

#### ✅ CORRECT FORMAT

```markdown
## Common Mistakes When Using Quantization

- **Downloading Q4_0 instead of Q4_K_M:** Q4_0 is an older format without K-Quant improvements. Q4_K_M is 5–8% better quality at the same RAM footprint. When both are available, always choose Q4_K_M.

- **Assuming higher quantization always means worse quality:** Higher Q number = more bits = better quality. Q8_0 is better than Q4_K_M. A Q4_K_M 70B model will outperform a Q8_0 7B model.

- **Not checking RAM headroom:** Model file size isn't the only RAM consumer. Rule: model file size + 2 GB OS overhead + 1 GB headroom = minimum required RAM.
```

#### ❌ WRONG FORMAT

```markdown
## Common Mistakes When Using Quantization

### Mistake 1: Wrong Quantization Format
Explanation text...

### Mistake 2: Quality Expectations
Explanation text...
```

**Requirements:**
- Minimum **3 mistakes** (recommended 5)
- **Bold mistake title** as first element
- **2+ sentence explanation** including correct behavior
- **Bullet format** (no H3 subheadings — breaks AEO parsing)

---

### RULE: SOURCES & FURTHER READING FORMAT (Rule 10 — Mandatory on Every Page)

**Every page MUST have a Sources section with real, clickable URLs.**

#### ✅ CORRECT FORMAT

```markdown
## Sources

- **llama.cpp Quantization Documentation**
  https://github.com/ggerganov/llama.cpp/blob/master/examples/quantize/README.md
  — Explains GGUF format, K-Quant variants, quantize binary tool.

- **Open LLM Leaderboard**
  https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
  — Real benchmarks (MMLU, HumanEval, MATH) for ranked models. Updated quarterly.

- **Ollama Model Library**
  https://ollama.com/library
  — Official list of 500+ quantized GGUF models. Shows available quantization variants per model.
```

#### ❌ WRONG FORMAT

```markdown
## Sources

- "Title only (no URL)"
- "Generic description with no source URL"
- Raw URL without context
```

**Requirements:**
- Minimum **3 sources** per page
- **Clickable URLs** (Markdown link format or full URL)
- **Description:** 1 sentence explaining what the source provides
- **Prefer:** Official documentation, GitHub repos, arXiv papers, official model cards, Hugging Face
- **Avoid:** Blog posts, forums, aggregator sites (acceptable as supplementary only)

---

## FINAL VERDICT: Decision Framework

### Use This Guide When...

| Situation | Do This |
|---|---|
| Writing a new PE article | Follow ALL rules (1–33). Pre-publish checklist is your sign-off. |
| Editing an existing article | Follow rules 1–14, 21, 26 (core SEO). Update Rule 11 (date) and Rule 8a (meta). Rules 15–25 are optional unless specifically broken. |
| Writing a hub page (Local LLMs, Compare Models) | Follow rules 1–26 + Rule 5 (schema). Rules 15–25 are optional. |
| Writing glossary entries | Follow rules 1, 3, 4–4b, 8a, 11 only. Skip rules 15–25. |
| Writing blog posts or announcements | Follow rules 1–14, 21, 26 (metadata). Skip rules 15–19 (schema is optional). |
| Rapid content or short-form | Apply at minimum: Rule 1 (answer first), Rule 3 (no vague language), Rule 8a (meta), Rule 26 (schema). |

### Quick Audit (1 minute)

Ask yourself:
1. Does the intro paragraph answer the H1 title in 10 words? (Rule 31)
2. Does every H2 end in "?" or start with bold answer? (Rules 1, 22)
3. Are all numbers factual or sourced? (Rule 2b)
4. Are internal links descriptive and valuable? (Rules 2c, 6a)
5. Does the meta description make you click? (Rule 8a)
6. Is the last-updated date visible and current? (Rule 11)

If you answered YES to all 6, your article is GEO-compliant. If NO to any, fix before publishing.

---

## Consolidated Cross-Reference Index

| Topic | Primary Rule | See Also |
|---|---|---|
| H2/H3 structure | Rules 1, 22, 22a | Rule 2e (hierarchy) |
| Entity naming | Rules 4, 4a, 4b | Rule 21.3 (density scoring) |
| Internal linking | Rules 2c, 6a, 8d, 9 | Rule 10a (visibility) |
| Metadata | Rules 8a, 8d | Rule 2d (title), Rule 26 (technical) |
| Schema markup | Rule 5 | Rule 26.3 (technical signals) |
| Callout boxes | Rule 17 | Rule 26.8 (visual signals) |
| Dates | Rule 11, 28 | Rule 8c (top-of-page sequence) |
| Lead answer block | Rule 31 | Rules 1, 22a (answer-first) |
| CTR hook / SERP tension | Rule 33 | Rule 8c (top-of-page sequence) |
| Multilingual titles | Rule 34 | Rule 2d (title tag optimization) |
| FAQ & common mistakes | Rules 19, 25 | Rule 5 (FAQPage schema) |
| Numbers & facts | Rules 2a, 2b, 14, 27 | Rule 26.1 (specificity) |

---

**Last updated: April 7, 2026** | [Submit feedback](https://github.com/anthropics/promptquorum/issues)
