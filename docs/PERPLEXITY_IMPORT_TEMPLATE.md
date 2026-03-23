# Perplexity Import Template — PromptQuorum Articles

**This document defines the output format rules for articles generated in Perplexity that will be imported into the PromptQuorum website.**

Unlike the GEO Writing Guidelines (which control *content quality*), this template controls *output structure and format* — so generated markdown can be cleanly converted to `content.ts` with minimal manual editing.

---

## Before Generating in Perplexity

1. **Read the GEO Writing Guidelines** (`docs/GEO_WRITING_GUIDELINES.md`) — all rules apply
2. **Use these 10 format rules below** — they are **mandatory** and supersede any default Perplexity behavior
3. **Provide the Perplexity prompt** with both the GEO guidelines AND these format rules

---

## The 10 Mandatory Output Format Rules

### Rule 1: No Footnote Markers
**Do not use `[^1]`, `[^2]`, `[^n]` inline citation markers anywhere in the document.**

All sources must be cited inline as Markdown links or listed in a `Sources & Further Reading` section.

**Format for inline links:**
```
[Author, Year. "Title"](URL)
```

**Format for Sources section:**
```
## Sources & Further Reading

- [Author, Year. "Title"](URL) — one-sentence description
- [Author, Year. "Title"](URL) — one-sentence description
```

Maximum 3–5 sources per article.

---

### Rule 2: No LaTeX or Complex Mathematical Notation
**Do not use `\(`, `\)`, `$$`, or any LaTeX formatting.**

Express all mathematical formulas, probability calculations, and technical parameters in **plain text** using ASCII symbols only.

**Examples:**

| Wrong | Right |
|-------|-------|
| `\(\text{softmax}(logit_i / T)\)` | `softmax(logit / T)` or `Temperature × softmax(logits)` |
| `P(x) = \frac{1}{2}` | `P(x) = 1/2` or `Probability = 0.5` |
| `T ∈ [0.0, 2.0]` | `Temperature ranges from 0.0 to 2.0` or `T: 0.0–2.0` |

---

### Rule 3: No Encoding Artifacts
**Use standard UTF-8 characters only. Specifically:**
- Use the actual em dash character `—` (not `â`, `–`, or `&mdash;`)
- Use straight quotes `"` (not curly quotes `"` or `"`)
- Avoid special Unicode characters unless absolutely necessary
- No mojibake or character encoding issues

**Test:** The document must render identically in a plain text editor and in Markdown.

---

### Rule 4: Section Names Must Match Exact Keys
**Use these exact section heading names (H2 only) — they map directly to `content.ts` section keys.**

Choose from this list only. Do not invent new section names.

| H2 Heading | Maps to section key | Format |
|-----------|---------|--------|
| The Direct Answer | `directAnswer` | content[] or prose |
| Which AI Model to Use | `modelComparison` | tableFormat or content[] |
| How to Write Prompts | `promptStructure` | content[] |
| Chain-of-Thought Prompting | `chainOfThought` | content[] |
| Inject Coding Rules | `rules` | items[] (bullet list) |
| AI Coding Tools | `codingTools` | tableFormat |
| The Security Problem | `security` | content[] |
| The Multi-Model Cross-Check | `multiModelCheck` | content[] |
| Temperature and Context Window | `parameters` | content[] + tableFormat |
| Global and Regional Context | `globalContext` | content[] |
| Key Takeaways | `tldr` | items[] |
| Related Reading | `relatedReading` | items[] |
| Frequently Asked Questions | `faq` | faqs[] (Q/A pairs) |
| Sources & Further Reading | `sources` | items[] |

If your article needs different sections, add them with a new descriptive name and convert manually during import.

---

### Rule 5: Table Format Requirements
**Every comparison or feature table must follow this structure:**

1. Header row with column names in **Title Case** (max 4 columns)
2. At least 3 rows of data
3. No merged cells
4. Column names: 1–3 words each
5. Cell content: sentence fragment or short phrase (not full sentences)

**Example (good):**
```markdown
| Vendor | Current Version | Context Window | Best For |
|--------|-----------------|----------------|----------|
| Anthropic | Claude 4.6 Sonnet | 200k tokens | Code, writing |
| OpenAI | GPT-4o | 128k tokens | Reasoning, multimodal |
| Google | Gemini 2.5 Pro | 2M tokens | Long documents |
```

**Example (bad):**
```markdown
| Vendor | Current Version |
|--------|-----------------|
| Anthropic | Claude 4.6 Sonnet. This is Anthropic's latest model and it performs well on coding tasks. |
```

---

### Rule 6: FAQ Format Requirements
**Every FAQ entry must be a standalone Q&A pair with these rules:**

1. **Question:** Must start with one of: "What", "How", "Why", "Which", "Is", "Does", "Should"
2. **Answer:** Must start with the **direct answer** (no preamble like "That's a great question...")
3. **Length:** Q is 1 sentence. A is 2–3 sentences maximum.
4. **Self-contained:** A reader who sees only this Q/A pair must understand the answer fully.

**Example (good):**
```
Q: "What is the difference between GPT-4o and Claude 4.6 Sonnet?"
A: "GPT-4o excels at reasoning and tool integration; Claude 4.6 Sonnet excels at writing and code review.
   Neither is universally better — the right choice depends on your task.
   Use PromptQuorum to test both on your actual prompts."
```

**Example (bad):**
```
Q: "Different models for different tasks?"
A: "Well, as we've been discussing, each model has strengths and weaknesses.
   There are several factors to consider when choosing..."
```

---

### Rule 7: Current Model Versions (March 2026)
**Always use these exact model names. Do NOT use outdated versions.**

| Vendor | Use This | NOT This |
|--------|----------|----------|
| Anthropic | Claude 4.6 Sonnet, Claude 4.6 Opus | Claude 4.5 Haiku (only if specifically needed) |
| OpenAI | GPT-4o | GPT-4, GPT-4 Turbo, GPT-3.5 |
| Google | Gemini 2.5 Pro, Gemini 2.5 Flash | Gemini 1.0, Gemini 1.5 |
| Alibaba | Qwen 2.5 | Qwen 2.0 |
| Open Source | LLaMA 3.1, Mistral Large | LLaMA 3.0, Mistral 7B (unless specifically contrasting) |
| China models | DeepSeek V3, Baidu ERNIE 4 | DeepSeek V2 |

---

### Rule 8: No Numbered Bibliography Section
**Do NOT add a numbered `[1]`, `[2]`, ... `[99]` references list at the end of the document.**

All citations must appear either:
1. **Inline as Markdown links** within the text: `[Author, Year. "Title"](URL)`
2. **Or in a sources section** at the end using the format from Rule 1 above

Remove any auto-generated numbered bibliography when exported from Perplexity.

---

### Rule 9: Date Format
**Use only these date formats. No relative dates.**

**Good:**
- "March 2026"
- "2026-03-22" (ISO format)
- "March 22, 2026"

**Bad:**
- "Recently" (relative date — do not use)
- "Last year" (relative date — do not use)
- "As of late 2024" (outdated — use current year)
- "2024-09-15" (when the article is from March 2026)

---

### Rule 10: PromptQuorum Proprietary Data Block (Required)
**Every article must include exactly ONE block of original PromptQuorum data or testing.**

This block must start with exactly this phrase:
```
**PromptQuorum multi-model test:**
```

And include numeric results (e.g., percentages, counts, comparisons).

**Example:**
```
**PromptQuorum multi-model test — 50 coding prompts across three models:**
GPT-4o produced the most readable code in 42 of 50 cases.
Claude 4.6 Sonnet achieved highest code efficiency in 38 of 50.
Gemini 2.5 Pro handled complex multi-file projects best in 31 of 50.
```

This block signals to AI crawlers and readers that the content includes original research, not just compiled external sources.

---

## Starter Perplexity Prompt Template

When generating an article in Perplexity, use this prompt structure:

```
You are a technical writer for PromptQuorum, a platform for comparing AI models.

Generate a comprehensive article about [TOPIC] following these guidelines:

1. APPLY THE GEO WRITING GUIDELINES (mandatory — read docs/GEO_WRITING_GUIDELINES.md)
   - Answer-first structure with bold openers for every H2
   - No vague superlatives ("powerful", "best", "seamless", "leading")
   - Specific numbers and facts only
   - Include 5–7 distinct entities (models, frameworks, companies)
   - Two-to-three internal links to other PE articles

2. APPLY THE PERPLEXITY IMPORT FORMAT RULES (mandatory — read docs/PERPLEXITY_IMPORT_TEMPLATE.md)
   - No [^n] footnote markers
   - No LaTeX
   - No encoding artifacts — use standard UTF-8 only
   - Use exact section names from the template
   - Tables with max 4 columns, header row required
   - FAQ questions start with What/How/Why/Which/Is/Does
   - Model versions: Gemini 2.5 Pro, Claude 4.6 Sonnet, GPT-4o, DeepSeek V3, LLaMA 3.1
   - No numbered [1], [2], [3]... bibliography — use inline markdown links
   - Dates in "Month Year" or ISO format only
   - Include exactly ONE "**PromptQuorum multi-model test:**" block with numeric results

3. STRUCTURE
   - H1 title: [TOPIC]
   - 1-paragraph intro: answer-first summary
   - H2 sections: choose from the approved list in the template
   - End with Key Takeaways, Related Reading, FAQ, and Sources sections

4. CONTENT REQUIREMENTS
   - Minimum 2,000 words
   - Minimum 3 external sources (arXiv, official documentation, or authoritative news)
   - Minimum 1 PromptQuorum proprietary data point
   - Include at least 1 non-US perspective (EU, China, Japan)
   - [Bad Prompt]/[Good Prompt] examples if applicable

Output the markdown directly — no preamble, no explanation.
```

---

## Checklist Before Import

After generating in Perplexity, before importing to `content.ts`, verify:

- [ ] No `[^1]`, `[^2]`, etc. markers in the text
- [ ] No `\(`, `\)`, `$$` LaTeX notation
- [ ] No `â` or other encoding artifacts (test in plain text editor)
- [ ] Section names match the approved list exactly
- [ ] Tables have header rows, max 4 columns
- [ ] FAQ questions start with What/How/Why/Which/Is/Does
- [ ] All model names are current (Gemini 2.5, Claude 4.6, etc.)
- [ ] No numbered `[1]...[N]` bibliography at the end
- [ ] All dates are in "Month Year" or ISO format
- [ ] Exactly one `**PromptQuorum multi-model test:**` block present
- [ ] All external links are inline Markdown: `[Author, Year. "Title"](URL)`
- [ ] Article is roughly 2,000+ words
- [ ] 3+ external sources present
- [ ] Non-US perspective included (if topic-relevant)

If all checks pass, the article is ready for import to `content.ts` with minimal manual cleanup.

---

*This template is part of the PromptQuorum content workflow and should be provided to Perplexity along with the GEO Writing Guidelines for every article generation session.*
