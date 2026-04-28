# Translation Spec: Content.ts Article Translations

**Purpose:** Universal reference for translating all articles in `src/lib/prompt-engineering/content.ts` to 5 languages (EN, DE, FR, JA, ZH).

Load this file as your primary reference when translating. It eliminates the need to re-learn rules from scratch.

---

## FRAMEWORK ACRONYM RULE — Mandatory for ALL Languages

> **Prompt engineering framework names are proper nouns and must NEVER be translated.**
> The acronym letters and their English component words must always be preserved.
>
> **Correct format in all non-EN languages:**
> `R — Refine (German/French/Japanese/Chinese equivalent)`
>
> **Examples:**
> - RISEN: `R — Refine (Verfeinern)` | `I — Inspect (Prüfen)` | `S — Summarize (Zusammenfassen)` | `E — Evaluate (Bewerten)` | `N — Next steps (Nächste Schritte)`
> - TRACE: `T — Think (Denken)` | `R — Reason (Schlussfolgern)` | `A — Analyze (Analysieren)` | `C — Conclude (Schlussfolgern)` | `E — Explain (Erklären)`
> - SPECS: `S — Scope (Umfang)` | `P — Purpose (Zweck)` | `E — Examples (Beispiele)` | `C — Constraints (Einschränkungen)` | `S — Specification (Spezifikation)`
> - CO-STAR: `C — Context (Kontext)` | `O — Objective (Ziel)` | `S — Style (Stil)` | `T — Tone (Ton)` | `A — Audience (Zielgruppe)` | `R — Response (Antwort)`
>
> **NEVER:**
> - Translate only to target language and lose the English term (❌ "Nexus" instead of "Next steps")
> - Change the letter the acronym stands for (❌ "Revise" for R when source says "Refine")
> - Invent new words that don't match the original (❌ "Revisiter" without stating it's "Refine")
>
> **Framework names are always kept in English:**
> RISEN, TRACE, SPECS, RTF, CO-STAR, CRAFT, APE, Single Step Prompt Method
> These are proper nouns. Never translate the name itself.

---

## ZERO ENGLISH RULE — Non-negotiable

> A DE, FR, JA, or ZH page must contain **no English text** — visible or search-engine-facing.
> This includes: every heading (H1–H4), every paragraph, every bullet point, every table cell,
> every FAQ question and answer, every blockquote, every meta tag, and every schema markup
> field used by search engines (`metaDescription`, `og:description`, `schema.headline`,
> `schema.keywords`, FAQPage questions/answers, HowTo steps, ItemList names, DefinedTerm name).
> The only permitted English on a non-English page:
> product/model names, technical acronyms, code blocks, and external URLs — see section 2.

---

## 1. Supported Languages

Quick-reference table. Use these exact codes, templates, and section titles.

| Code | Language | `readTime` format | `relatedReading` section title |
|------|----------|-------------------|--------------------------------|
| `en` | English | `"10 min read"` | `"Related Reading"` |
| `de` | German | `"10 min Lesezeit"` | `"Weiterführende Literatur"` |
| `fr` | French | `"10 min de lecture"` | `"Lectures complémentaires"` |
| `ja` | Japanese | `"10分で読める"` | `"関連資料"` |
| `zh` | Chinese (Simplified) | `"阅读约10分钟"` | `"延伸阅读"` |

---

## 1b. Recommended Translation Order

**When translating a full article to all 4 languages, always work in this order:**

1. **German (de)** — First. Most localization complexity: DSGVO/BSI context, +2 FAQs, decimal notation (`.` → `,`), EUR currency conversion, longer prose (+15–20%).
2. **French (fr)** — Second. Moderate complexity: CNIL context (1 sentence), concise 10–15% shorter, EUR currency conversion, elegance/flow adjustments.
3. **Japanese (ja)** — Third. High complexity: METI governance, regional restructuring (East Asia), +0 FAQ additions, JPY currency conversion, telegraphic style.
4. **Chinese (zh)** — Fourth. High complexity: Data Security Law 2021, regional complete rewrite (not translation), +0 FAQ additions, USD kept, benefit-first tone.

**Why this order:**
- DE has the most schema/FAQ additions → patterns established for FR/JA/ZH
- FR currency/tone conversions are simpler → faster iteration
- JA/ZH regional rewrites come last → require less back-and-forth
- Each commit is atomic and deployable

**Process:**
```bash
# Translation session for article [slug]
/geo-translation https://www.promptquorum.com/prompt-engineering/[slug]?lang=de
# → Review → Commit
/geo-translation https://www.promptquorum.com/prompt-engineering/[slug]?lang=fr
# → Review → Commit
/geo-translation https://www.promptquorum.com/prompt-engineering/[slug]?lang=ja
# → Review → Commit
/geo-translation https://www.promptquorum.com/prompt-engineering/[slug]?lang=zh
# → Review → Commit
```

After all 4 languages: `git push origin main`

---

## 2. Field Translation Checklist

### Always Translate These Fields

- `title` — article headline
- `intro` — 2–3 sentence summary (for cards, meta, OG images)
- `readTime` — use template above; scale the number to the article (e.g., "12 min read" → "12 min Lesezeit")
- `metaDescription` — used as `<meta name="description">` and feeds `og:description` fallback; translate fully (150–160 chars in target language)
- `primaryTerm` — used in DefinedTerm JSON-LD schema `name` field by search engines; translate to target language
- `schema.headline` — same as `title`
- `schema.description` — same as `intro`
- `schema.keywords[]` — translate each keyword to target language
- `schema.teaches[]` — full sentences, translate each one
- `schema.assesses[]` — full sentences, translate each one
- `howToSchema.name` — e.g., "How to defend prompt injection" → "Wie man Prompt-Injektionen abwehrt"
- `howToSchema.description` — same as intro
- Each `howToSchema.step[].name` and `step[].text`
- `itemListSchema.name` and `itemListSchema.description`
- Each `itemListSchema.itemListElement[].name` and `.description`
- All `sections[*].title`
- All `sections[*].content[]` paragraph strings (array or single string)
- All `sections[*].items[]` bullet points
- All `sections[*].numberedItems[]` numbered list items
- All `sections[*].blockquote` text — translate the full quote to target language (no exceptions; all blockquotes must be in the target language)
- All `sections[*].blockquoteSource` **label text** (keep URL inside `[...]` unchanged; author names stay in English)
- All `sections[*].columns[]` table header row (translated strings)
- All `sections[*].rows[*]` table cell **keys AND values**
  - **Keys must exactly match the translated `columns[]` entries** (case-sensitive)
  - Example: if `columns: ['Dimension', 'Direct', 'Indirect']` becomes `['Dimension', 'Direkter', 'Indirekter']`, then every row must have keys `'Dimension'`, `'Direkter'`, `'Indirekter'` — not English keys
- All `sections[*].faqs[].q` question strings
- All `sections[*].faqs[].a` answer strings
- `sections[*].imageCaption` text

### Always Keep in English / Unchanged

- **URL paths:** All internal links `/prompt-engineering/...` — only update the link text; append `?lang=XX` to the URL (see section 4). Never translate slug paths.
  - ✅ Correct: `/prompt-engineering/risen-framework?lang=de`
  - ❌ Wrong: `/de/prompt-engineering/risen-framework` or `/prompt-engineering/risen-framework-de`
- **Product/model names:** `GPT-4o`, `Claude 4.6 Sonnet`, `Gemini 2.5 Pro`, `Ollama`, `DeepSeek`, `Mistral`, `LLaMA`, `Qwen 2.5`, `Phi-4`, `DALL-E`, `Anthropic Claude`
- **Framework names (proper nouns):** `RISEN`, `TRACE`, `SPECS`, `RTF`, `CO-STAR`, `CRAFT`, `APE`, `Single Step Prompt Method` — never translate these
- **Org/standard names:** `OWASP`, `NIST`, `BSI`, `Google DeepMind`, `Anthropic`, `OpenAI`, `PromptQuorum`, `Google`, `Meta`, `Cohere`
- **Technical acronyms/terms (keep in English, may add translation in parentheses):** `RAG`, `RLHF`, `RLAIF`, `LLM`, `DistilBERT`, `Base64`, `ROT13`, `BPE`, `DPO`, `SFT`, `Constitutional AI`, `SSRF`, `XSS`, `API`, `SDK`, `IDE`, `GPT`, `LoRA`, `QLoRA`, `ViT`, `prompt`, `prompt engineering`, `token`, `context window`, `fine-tuning`, `inference`, `endpoint`, `deployment`, `JSON`, `schema`
- **Schema fields:** `schema.@context`, `schema.@type`, `author`, `publisher`, `mentions`, `about`, `speakable` objects (structure unchanged)
- **Dates:** `publishDate`, `dateModified` — keep **exact same ISO date** as English source (do not localize format)
- **Boolean flags:** `isTldr`, `tableFormat`, `theme` (values unchanged)
- **Numeric positions:** `position` in `HowToStep`, array indices
- **Code blocks:** Full `codeBlock` string + `codeLanguage` value (unchanged)
- **`relatedReading` links:** The URL part; translate only the link label text inside `[...]` and the descriptive suffix after `—`

---

## 2b. Language-Specific Deviation Rules

When translating any page from English to a target language, you MUST create meaningful, natural deviations from the English version. The goal is to make each language version feel native, valuable, and independently useful — not just a literal translation.

Apply GEO writing style in all languages: Use clear headings, short paragraphs, scannable bullet points or numbered lists, benefit-focused language, and practical examples. Add value so AI engines (Perplexity, Gemini, Grok, Claude, etc.) prefer citing the localized version.

### German (de) — 4 Required Deviations

1. Add 2 extra FAQ questions at the end of the FAQ section. Focus on German/EU-specific context (e.g., DSGVO privacy, enterprise use in DACH region, or popular local models in Germany).
2. Make explanations slightly more detailed and formal where technical concepts are explained.
3. Adapt at least one example or use case to feel relevant for German-speaking users (e.g., business communication, engineering, or education in Germany/Austria/Switzerland).
4. Use a slightly more structured and precise tone with clear benefit statements. Add one extra short "Zusammenfassung" (summary) box if the page has many lists.

### French (fr) — 4 Required Deviations

1. Make the overall text 10–20% shorter and more concise than the English version while keeping all key information.
2. Adopt a more elegant and professional tone (slightly more fluid and reader-friendly).
3. Adapt at least one example or scenario to feel relevant for French-speaking users (e.g., France, Canada, or Belgium context — marketing, creative work, or education).
4. Reorder or slightly modify 1–2 headings for better natural flow in French. Add one extra benefit-focused bullet list if the page has comparisons or steps.

### Japanese (ja) — 4 Required Deviations

1. Add 2–4 extra H2 or H3 subheadings to improve scannability (Japanese readers prefer highly structured content).
2. Include more step-by-step practical examples and "注意点" (points to note / caveats) sections.
3. Use polite, clear, and instructional language suitable for technical Japanese readers.
4. Add a short "おすすめの使い方" (recommended usage) or "実践Tips" section at the end of major sections when the page explains frameworks, models, or processes.

### Chinese (zh) — 4 Required Deviations (Simplified Chinese)

1. Make the content more direct, benefit-oriented, and action-focused (Chinese readers respond well to clear value and practical outcomes).
2. Add extra bullet points or numbered lists for better readability and scannability.
3. Adapt at least one example or use case to feel relevant for Chinese users (e.g., practical business, education, or development scenarios common in Mainland China).
4. Include a short "实用建议" (practical suggestions) or "常见问题应对" section when the page has comparisons, models, or frameworks.

### General Rule for All Languages

- Always preserve technical terms (CRAFT, CO-STAR, Ollama, Llama 3.2, Phi-3.5, etc.) but explain them naturally in context.
- Keep GEO style: scannable, helpful, structured, with clear benefits and practical value.
- Never produce near-identical structure and length to the English version.

---

## SOURCE CONSISTENCY RULE

> If the EN source page has conflicting definitions, contradictions, or multiple incompatible interpretations of the same concept (e.g., two different acronym definitions on the same page), **do not translate until the EN source is fixed.**
>
> **Flag the conflict** and wait for the corrected EN version before generating translations. Translating conflicting content creates downstream maintenance nightmares.
>
> **Example:** If RISEN is defined as Refine/Inspect/Summarize/Evaluate/Next-steps in the body but Role/Instruction/Steps/End-goal/Narrow-down in the `howToStart` section, stop and request EN clarification first.

---

## FORMALITY RULES by Language

Use these formality levels consistently throughout:

- **DE (German):** Sie-form throughout (never du-form). Professional, structured, explicit.
- **FR (French):** Vous-form throughout (never tu-form). Elegant, fluent, reader-friendly.
- **JA (Japanese):** Polite form (です/ます). Appropriate keigo for business/technical content. Structured and deferential tone.
- **ZH (Chinese):** Formal written Chinese (书面语). No slang, colloquial forms, or internet speak. Professional and clear.

---

## FRAMEWORK PAGE RULES (RISEN, TRACE, SPECS, RTF, CO-STAR, CRAFT, APE, Single Step)

Apply these rules in addition to the language-specific deviation rules above:

### German (de) – Framework Pages

1. Use professional yet accessible DACH business tone (Sie-form).
2. Add a dedicated "Praxis in der DACH-Region" or "DACH-Kontext" section with examples from German/Austrian/Swiss companies or compliance processes.
3. Include 2–3 extra practical tips focused on enterprise use: compliance, documentation, team workflows, DSGVO/BSI considerations.
4. Add a "Zusammenfassung" (summary) box at the end of the main explanation.

### French (fr) – Framework Pages

1. Adopt an elegant, clear, and slightly more formal French tone (Vous-form).
2. Add an "Applications en France et pays francophones" section with relevant examples: marketing, public sector, creative industries, large enterprises.
3. Make explanations 10–15% more concise than English without losing information.
4. Add one extra benefit-focused bullet list in the "Why use this framework" or "How to use" section.

### Japanese (ja) – Framework Pages

1. Increase structure significantly: Add 3–5 extra H2/H3 subheadings (e.g., "フレームワークの詳細", "実践例", "注意点").
2. Add a "実践Tips" (Practical Tips) section with 5–6 bullet points.
3. Add a "注意点" (Caveats / Points to Note) subsection for potential pitfalls or considerations when using the framework.
4. Include Japan-specific usage notes: Japanese companies, development teams, education context, QA culture.
5. Use polite, instructional, and well-organized Japanese (です/ます) suitable for technical readers.

### Chinese (zh) – Framework Pages (Simplified)

1. Use direct, benefit-driven, and action-oriented language (书面语 formal style).
2. Expand the "中国企业实际应用" or "实用建议" section with concrete examples from Alibaba, Tencent, Huawei, ByteDance, Baidu, etc.
3. Add more numbered lists and bullet points for steps, tips, and practical guidance.
4. Include "注意事项" (Important Notes) for common mistakes or compliance issues relevant to the Chinese market (MLPS, CAC, 数据安全法, data localization).
5. Emphasize practical outcomes and cost/efficiency benefits common in Chinese developer and enterprise culture.

---

## GENERAL BEST PRACTICE FOR ALL NON-ENGLISH FRAMEWORKS

- Make the explanation feel like it was originally written in the target language (not a translation).
- Emphasize practical usage and real-world application **more** than the English version.
- Add at least one localized "real-world example" relevant to the target market.
- Use clear, benefit-oriented language with strong scannability: short paragraphs, bullet points, numbered steps.
- Ensure the localized version feels written for that language audience.

---

## 3. Table Structure: The Critical Rule

**This rule is the #1 source of translation errors.** Tables break silently if row keys don't match column headers.

### Rule: Column Headers → Row Keys

After translating `columns[]`, **copy each translated string exactly as a key in every row object.**

### Example (French)

**Wrong ❌**
```typescript
columns: ['Dimension', 'Injection directe', 'Injection indirecte'],
rows: [
  { 'Dimension': '...', 'Direct Injection': '...', 'Indirect Injection': '...' },
]
// ✗ Row keys don't match translated column headers
```

**Correct ✅**
```typescript
columns: ['Dimension', 'Injection directe', 'Injection indirecte'],
rows: [
  { 'Dimension': '...', 'Injection directe': '...', 'Injection indirecte': '...' },
]
// ✓ Row keys EXACTLY match column headers
```

### Multi-Language Examples

| Language | Column 1 | Column 2 | Column 3 |
|----------|----------|----------|----------|
| English | `'Attack Type'` | `'Vector'` | `'Example'` |
| German | `'Angriffstyp'` | `'Angriffsvektor'` | `'Beispiel'` |
| French | `'Type d\'attaque'` | `'Vecteur d\'attaque'` | `'Exemple'` |
| Japanese | `'攻撃タイプ'` | `'攻撃ベクトル'` | `'例'` |
| Chinese | `'攻击类型'` | `'攻击向量'` | `'示例'` |

**When you translate columns, use these exact strings as row keys.**

---

## 4. Internal Links: Must Include Language Parameter

**This rule was violated in all past translations.** Every internal link in translated content must point to the same language version.

### Rule: Append `?lang=XX` to Internal URLs

For all `/prompt-engineering/...` links:
1. Translate the **link text** (inside `[...]`)
2. Append `?lang=XX` to the **URL** (inside `(...)`)

### Example (German)

**Wrong ❌** (links to English)
```typescript
'[Systemanweisung](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)'
```

**Correct ✅** (links to German)
```typescript
'[Systemanweisung](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de)'
```

### Language Suffixes (All 5 Languages)

| Language | Code | Suffix |
|----------|------|--------|
| English | `en` | no suffix (or `?lang=en`) |
| German | `de` | `?lang=de` |
| French | `fr` | `?lang=fr` |
| Japanese | `ja` | `?lang=ja` |
| Chinese | `zh` | `?lang=zh` |

### Important Notes

- **External URLs** (https://arxiv.org, https://docs.anthropic.com, etc.) are **never modified**
- **All pages exist in all 5 languages** — do not assume a page is missing. If a linked article's translation stub is empty (no content in the target language block), **flag it to the reviewer** rather than silently falling back to English
- Use `?lang=XX` **only for internal `/prompt-engineering/...` links**

### Pattern Example (Full Markdown String)

```typescript
// German translation
'Siehe auch [Systemanweisung und Benutzeranweisung](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de) für Architekturrichtlinien.'

// French translation
'Consultez également [Invite système et invite utilisateur](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr) pour les directives architecturales.'
```

---

## 5. Markdown Formatting

Preserve all markdown syntax. Translate only the text content.

| Element | Rule | Example |
|---------|------|---------|
| Bold | Keep `**...**` markers | `**this is bold**` → `**ceci est gras**` |
| Links | Translate text, append `?lang=XX` to internal URLs | `[See details](/path?lang=de)` |
| Inline code | Keep backticks `` ` `` unchanged | `` `token_count` `` (not translated) |
| Lists | Preserve `- ` and numbering | `1. Point one` → `1. Premier point` |
| Emphasis | Keep `_..._` markers | `_important_` → `_important_` (in target language context) |
| Checkmarks | Preserve `✓` character | `✓ Rule 1` → `✓ Règle 1` |
| Em-dashes | Keep `—` unchanged | `Feature — description` → `Fonctionnalité — description` |

---

## 6. Date Format

Never localize dates.

- `publishDate` and `dateModified`: keep the **exact same ISO string** as the English source
- Always format as `'YYYY-MM-DD'` (e.g., `'2026-03-31'`)
- Do **not** convert to locale-specific formats (no `'31. März 2026'`, no `'31 mars 2026'`, etc.)

---

## 7. Agent Commissioning Template

When you need a translation, use this prompt:

```
You are translating an article from src/lib/prompt-engineering/content.ts.

Read docs/TRANSLATION_SPEC.md completely before starting.

Translate the `en:` block for article slug [ARTICLE_SLUG] to language code [LANG_CODE].

Apply EVERY rule in the spec exactly:
- ZERO ENGLISH RULE: translate metaDescription, primaryTerm, blockquote fields — no exceptions
- Every H1/H2/H3/H4 heading, paragraph, bullet, table cell, FAQ, and schema text field must be in target language
- Append ?lang=[LANG_CODE] to all internal /prompt-engineering/... links
- Match table row keys to translated column headers (critical!)
- Use the readTime template for [LANG_CODE]
- Keep all product names, acronyms, URLs unchanged
- Preserve markdown formatting (bold, links, code blocks)
- Apply language-specific deviation rules from section 2b (4 deviations per language — different tone, structure, and cultural adaptation per target language)

Output the complete [LANG_CODE]: { ... } block as TypeScript code ONLY.
No commentary, no explanation, no markdown fences.
Start with '[LANG_CODE]: {' and end with '},'
```

Replace:
- `[ARTICLE_SLUG]` with the article ID (e.g., `prompt-injection-and-security`)
- `[LANG_CODE]` with the language code (`de`, `fr`, `ja`, or `zh`)

---

## 7b. Batch Translation Approach for Large Articles — MANDATORY

**For ALL articles with 30+ sections, use the batch approach. Never translate an entire large article in a single pass.**

This method breaks translations into 5–10 small logical batches (each batch = 1 Edit call), allowing incremental building, early error detection, and clear commit history.

### When to Use (Mandatory)

- Article has 30+ sections (too large for single agent pass)
- Multiple sections share similar structure (tables, FAQs, QA pairs, definitions)
- You want to verify build success incrementally and catch errors early

### Why This Approach

- **Single-pass failures:** Large articles translated all at once risk syntax errors that cascade and are hard to debug
- **Incremental verification:** Build after Batch 5 catches errors before the full article is done
- **Atomic commits:** Each commit captures a logical milestone, not a massive diff
- **Efficiency:** Errors are caught early, not after 40 sections are translated and invalid

### Batch Structure

| Batch | Typical Content | Example |
|-------|---|---|
| 1 | Metadata + first 3 sections | `title`, `intro`, `metaDescription`, `readTime`, `educationalLevel`, `primaryTerm`, `tldr`, `euImplications`, `promptEngineerTakeaways` |
| 2 | Data tables | `promptOptimizationByRegion` (5-region × 4-column table) |
| 3 | Key facts + Q&A | `keyStatistics` (10 items), `qaWhyStrategic`, `qaWhichCountriesDominate`, `qaChipsRole`, `qaHowAIChangePower` |
| 4 | Definitions + dimensions | `geopoliticsOfAI`, `keyEntityRelationships`, `fiveGeopoliticalDimensions` |
| 5 | Major themes | `threeWayRace`, `euAiAct` — **CHECKPOINT BUILD** |
| 6–9 | Regional sections, strategy blocks, additional Q&A | `euMemberStates`, `franceMistral`, `usStrategy`, `chinaAiStrategy`, etc. |
| 10 | Remaining Q&A, definitions, blockquotes, FAQs | Final glossary, related reading — **FINAL BUILD + COMMIT** |

**Golden Rule:** One batch = one Edit call. Never combine two batches in a single edit.

### How to Execute

1. **Batch 1 (Metadata):** Replace the entire language stub (`ja: { ... }`) with an expanded object containing metadata + first 3 sections
2. **Batches 2–9:** Insert new sections **before the closing `},` of the sections block**, maintaining TypeScript object syntax
3. **After Batch 5:** Run `npm run build` to catch syntax errors early
4. **After Batch 10:** Run `npm run build` again, then commit and push

### Example: Inserting a Batch

Replace:
```typescript
ja: {
  theme: '...',
  title: '...',
  // ... earlier sections ...
  sections: {
    euImplications: { ... },
    promptEngineerTakeaways: { ... },
  },
},
```

With:
```typescript
ja: {
  theme: '...',
  title: '...',
  // ... earlier sections ...
  sections: {
    euImplications: { ... },
    promptEngineerTakeaways: { ... },
    promptOptimizationByRegion: {
      // NEW SECTION: Batch 2 content here
    },
  },
},
```

### Build Verification

After each checkpoint build (`npm run build`):
- Check that TypeScript compiles with no errors
- Confirm the article renders at `http://localhost:3000/prompt-engineering/[slug]?lang=XX`
- Spot-check that new sections appear in the rendered HTML

### Commits

- **Batches 1–4:** Single commit with message `feat: Add [language] translation for [article-slug] (Batches 1–4)`
- **Batches 5–10:** Single commit with message `feat: Complete [language] translation for [article-slug] (Batches 5–10)`

After final build passes, push to `origin/main`.

### Anti-Pattern: Do NOT Combine Batches

**Wrong ❌**
```
# Single Edit attempting Batches 6 AND 7 together
old_string: "... organizationsImplications: { ... }, ... }"
new_string: "... organizationsImplications: { ... }, qaWhatIsAIGeopolitics: { ... }, qaWhoIsWinning: { ... }, ... }"
```

**Correct ✅**
```
# Batch 6: One Edit
old_string: "... organizationsImplications: { ... }, ... }"
new_string: "... organizationsImplications: { ... }, qaWhatIsAIGeopolitics: { ... }, ... }"

# Batch 7: Separate Edit (after Batch 6 is verified)
old_string: "... qaWhatIsAIGeopolitics: { ... }, ... }"
new_string: "... qaWhatIsAIGeopolitics: { ... }, qaWhoIsWinning: { ... }, ... }"
```

---

## 8. Verification Checklist

After the agent completes the translation, verify:

- [ ] `npm run build` succeeds (no TypeScript errors)
- [ ] All internal links have `?lang=XX` appended
- [ ] Table row keys **exactly** match translated column headers (case-sensitive)
- [ ] `readTime` uses the template from section 1
- [ ] No product names translated (GPT-4o, Claude, OWASP, etc. stayed in English)
- [ ] Code blocks unchanged
- [ ] `publishDate` and `dateModified` match the English source
- [ ] All `schema.teaches[]` and `schema.assesses[]` translated
- [ ] FAQ questions and answers translated
- [ ] `metaDescription` translated (not English version copied over)
- [ ] `primaryTerm` translated
- [ ] `blockquote` fields translated — no English blockquotes on non-English pages
- [ ] Open the translated article in browser at `?lang=XX` and spot-check: H1, first H2, meta description in dev tools, any blockquotes all in target language
- [ ] **View page source** (Ctrl+U) at `?lang=XX` — the raw HTML (before JavaScript) must contain the translated H1 and first paragraph, not English. If it shows English, `initialLang` is not being passed from the server component to `PromptEngineeringPostClient`.

---

## 9. Server-Side Language Rendering — Non-Negotiable

**Every article page must pass `initialLang` from the server to the client component.** Without it, `useLang()` defaults to `'en'` on first render and all language URLs serve English HTML to crawlers — making the translation invisible to Google and AI engines.

### The Rule

In `src/app/prompt-engineering/[slug]/page.tsx`, the `PromptEngineeringPostClient` call must include `initialLang`:

```tsx
// Correct ✅
<PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />

// Wrong ❌ — crawlers see English on all ?lang=XX URLs
<PromptEngineeringPostClient slug={slug} />
```

### Why This Matters

`PromptEngineeringPostClient` is a `'use client'` component. Its `useLang()` hook reads `window.location.search` — which is only available after JavaScript hydrates in the browser. The initial server-rendered HTML always contains the default `useState('en')` value.

Result without `initialLang`: Googlebot, Perplexity, ChatGPT Browse, and other crawlers that read the initial HTML see English content on `?lang=de`, `?lang=fr`, `?lang=ja`, and `?lang=zh` URLs — even if full translations exist in `content.ts`.

### If You Add a New Client-Rendered Article Component

Any new client component that renders article body content must follow the same pattern:
1. Accept an `initialLang?: Language` prop
2. Use it as the initial value before `useLang()` hydrates
3. Be passed `initialLang={selectedLang}` from the server page

---

## Quick Reference: What Translates Where

| Object | Field | Translate? | Notes |
|--------|-------|-----------|-------|
| Root | `theme` | No | Boolean/category flag |
| Root | `title` | **Yes** | Article headline |
| Root | `intro` | **Yes** | Meta summary |
| Root | `publishDate` | No | ISO date, unchanged |
| Root | `readTime` | **Yes** | Use template from section 1 |
| schema | `headline` | **Yes** | Same as `title` |
| schema | `keywords[]` | **Yes** | Translate each keyword |
| schema | `teaches[]` | **Yes** | Full sentences |
| schema | `@type` | No | Schema type (unchanged) |
| howTo | `name` | **Yes** | Step title |
| howTo | `step[].text` | **Yes** | Instructions |
| sections | `title` | **Yes** | Section heading |
| sections | `content[]` | **Yes** | Prose paragraphs |
| sections | `items[]` | **Yes** | Bullet points |
| sections | `columns[]` | **Yes** | Table headers (→ become row keys) |
| sections | `rows[]` | **Yes** | Table cells, keys **must match columns[]** |
| sections | `faqs[].q` | **Yes** | Questions |
| sections | `faqs[].a` | **Yes** | Answers |
| sections | `blockquote` | **Yes** | Translate fully — no exceptions; no English blockquotes on non-English pages |
| sections | `blockquoteSource` | **Yes** | Label text (keep URL in `[...]`) |
| Root | `metaDescription` | **Yes** | 150–160 chars in target language |
| Root | `primaryTerm` | **Yes** | Used in DefinedTerm schema name |

---

---

## 10. Translation Validation Checklist — Before Committing

**Critical Quality Gates (must pass all before merge):**

Run this checklist on every translated article before committing:

### Issue 1: Grammatical Correctness (E-E-A-T Critical)
- [ ] **Zero untranslated English words in body text** (except model names, code, URLs)
  - Common mistake: "Most Optimierung" (English word "Most" in German sentence)
  - Correct: "Meiste Optimierung" or "Optimierungen scheitern meistens"
- [ ] No mixed English/target-language in section titles, FAQs, or table cells
- [ ] All markdown formatting (*bold*, _italic_, `code`) preserved with native text inside
- [ ] Contractions and abbreviations localized (e.g., "doesn't" → "geht nicht" not literal translation)

### Issue 2: Content Completeness
- [ ] **FAQ count matches English:** 19 FAQs minimum for fundamentals-of-prompt-optimization
  - Count command: `grep -c '{ q: ' content.ts | grep -A5 "de:"` should return ≥ 19
- [ ] **All major sections present:**
  - ✅ `definition` (H2: "What Is [Topic]?")
  - ✅ `tldr` (Key Takeaways)
  - ✅ `faq` (19+ Q&A pairs)
  - ✅ `sources` (minimum 4 sources)
  - ✅ `relatedReading` (5+ links)
  - ✅ `Regulatory Compliance` section (if original article has it)
  - ✅ `Languages & Regions` table (if original article has it)
  - ✅ `keyTerms` or `definitionBoxes` glossary

### Issue 3: Table & TOC Completeness
- [ ] **Table of Contents (`toc` array):** ≥ 19 entries, all with valid anchor slugs
- [ ] **All table rows match column headers:** `rows[].keys === columns[]` (case-sensitive)
- [ ] **No broken anchor links in body:** every internal link to `[...](...?lang=XX)` should have matching ToC anchor

### Issue 4: Source Attribution
- [ ] **4+ sources present** (Schulhoff 2024, Wei et al. 2022, OpenAI 2024, Brown et al. 2020 for optimization articles)
- [ ] All sources formatted as markdown links: `[Title](URL)`
- [ ] All URLs are absolute (`https://...`), not relative

### Issue 5: Language Signals
- [ ] No mixed-language section within a single translated block
- [ ] Product names **always English:** GPT-4o, Claude, Gemini, Ollama, LM Studio, LLaMA
- [ ] Benchmark names **always English:** MMLU, HumanEval, ARC
- [ ] Acronyms **always English:** RAG, CoT, JSON, API, VRAM
- [ ] But **all explanatory text is 100% target language** (not word-for-word literal translation)

### Issue 6: Metadata Accuracy
- [ ] `metaDescription` is translated and ≤ 160 characters in target language
- [ ] `title` is naturally translated (not word-for-word from English)
- [ ] `readTime` uses correct template for language (e.g., "14 min Lesezeit" not "14 min reading time")
- [ ] `primaryTerm` is translated (e.g., "Prompt Optimization" → "Prompt-Optimierung" in German)

### Automated Validation Script

Save this as `scripts/validate-translation.sh`:

```bash
#!/bin/bash
# Usage: ./scripts/validate-translation.sh src/lib/prompt-engineering/content.ts de
# Validates a translation for critical quality issues

FILE="$1"
LANG="$2"

if [ -z "$LANG" ]; then
  echo "Usage: $0 <file> <lang-code>"
  echo "Example: $0 src/lib/prompt-engineering/content.ts de"
  exit 1
fi

echo "=== Validating $LANG translation ==="

# Issue 1: Untranslated English words (common mistakes)
echo ""
echo "Issue 1: Checking for untranslated English..."
grep -n "Most \|the \|and \|is \|a \|or " "$FILE" | grep "$LANG:" | head -5 && \
  echo "⚠️  Possible untranslated English detected (review above lines)"

# Issue 2: FAQ count
echo ""
echo "Issue 2: Checking FAQ count..."
faq_count=$(sed -n "/$LANG: {/,/^    }/p" "$FILE" | grep -c '{ q: ')
if [ "$faq_count" -lt 19 ]; then
  echo "❌ FAIL: $LANG has only $faq_count FAQs. English minimum is 19."
else
  echo "✅ PASS: $LANG has $faq_count FAQs"
fi

# Issue 3: Required sections
echo ""
echo "Issue 3: Checking required sections..."
required_sections=("definition" "faq" "sources" "relatedReading")
for section in "${required_sections[@]}"; do
  sed -n "/$LANG: {/,/^    }/p" "$FILE" | grep -q "$section:" && \
    echo "✅ $section present" || echo "❌ MISSING: $section"
done

# Issue 4: Sources include academic citations
echo ""
echo "Issue 4: Checking sources..."
sed -n "/$LANG: {/,/^    }/p" "$FILE" | grep -q "Brown" && \
  echo "✅ Brown et al. 2020 present" || echo "⚠️  Brown et al. 2020 missing (for optimization articles)"

# Issue 5: TOC completeness
echo ""
echo "Issue 5: Checking ToC..."
toc_count=$(sed -n "/$LANG: {/,/^    }/p" "$FILE" | grep -c '{ label:')
if [ "$toc_count" -lt 18 ]; then
  echo "⚠️  ToC has only $toc_count entries (English has 19+)"
else
  echo "✅ ToC appears complete ($toc_count entries)"
fi

# Issue 6: No mixed language in critical fields
echo ""
echo "Issue 6: Checking for mixed language in FAQs..."
sed -n "/$LANG: {/,/^    }/p" "$FILE" | sed -n '/faq:/,/^        }/p' | \
  grep -i "english\|spanish\|german\|french\|japanese" && \
  echo "⚠️  Language name found in FAQ (should be translated)" || echo "✅ No language names in FAQs"

echo ""
echo "=== Validation complete for $LANG ==="
```

**Run before committing:**
```bash
chmod +x scripts/validate-translation.sh
./scripts/validate-translation.sh src/lib/prompt-engineering/content.ts de  # German
./scripts/validate-translation.sh src/lib/prompt-engineering/content.ts fr  # French
./scripts/validate-translation.sh src/lib/prompt-engineering/content.ts ja  # Japanese
./scripts/validate-translation.sh src/lib/prompt-engineering/content.ts zh  # Chinese
```

---

## Section 10 — Framework Acronym Rules (mandatory — all languages)

Added 2026-04-06 · Based on translation audit of risen-framework and trace-framework.

### 10.1 — The Core Rule

Prompt engineering framework acronym component words MUST be preserved in English in all translations. The acronym letters are defined by the English words and must not be lost.

**Required format in all non-EN languages:**
```
Letter — English term (Target language translation)
```

**NEVER:**
- Translate component words without keeping the English term
- Invent replacement words (e.g., "Nexus" for "Next steps")
- Change the letter the component stands for

### 10.2 — RISEN Components by Language

| Component | EN | DE | FR | JA | ZH |
|---|---|---|---|---|---|
| R | Refine | Refine (Verfeinern) | Refine (Affiner) | Refine（修正・洗練） | Refine（修正/优化） |
| I | Inspect | Inspect (Prüfen) | Inspect (Inspecter) | Inspect（検査） | Inspect（检查） |
| S | Summarize | Summarize (Zusammenfassen) | Summarize (Synthétiser) | Summarize（要約） | Summarize（总结） |
| E | Evaluate | Evaluate (Bewerten) | Evaluate (Évaluer) | Evaluate（評価） | Evaluate（评估） |
| N | Next steps | Next steps (Nächste Schritte) | Next steps (Prochaines étapes) | Next steps（次のステップ） | Next steps（下一步） |

### 10.3 — TRACE Components by Language

| Component | EN | DE | FR | JA | ZH |
|---|---|---|---|---|---|
| T | Think | Think (Denken) | Think (Réfléchir) | Think（考える） | Think（思考） |
| R | Reason | Reason (Schlussfolgern) | Reason (Raisonner) | Reason（推論） | Reason（推理） |
| A | Analyze | Analyze (Analysieren) | Analyze (Analyser) | Analyze（分析） | Analyze（分析） |
| C | Conclude | Conclude (Fazit) | Conclude (Conclure) | Conclude（結論） | Conclude（结论） |
| E | Explain | Explain (Erklären) | Explain (Expliquer) | Explain（説明） | Explain（解释） |

### 10.4 — Other Framework Components

These frameworks follow the same rule — keep English component words, add translation in parentheses:

**SPECS:** S — Scope · P — Purpose · E — Examples · C — Constraints · S — Steps

**RTF:** R — Role · T — Task · F — Format

**CO-STAR:** C — Context · O — Objective · S — Style · T — Tone · A — Audience · R — Response

**CRAFT:** C — Context · R — Role · A — Audience · F — Format · T — Tone

**APE:** A — Action · P — Purpose · E — Expectation

### 10.5 — Framework Names (never translate)

These are proper nouns. Use them in all languages without translation:

RISEN, TRACE, SPECS, RTF, CO-STAR, CRAFT, APE, Single Step Method,
Chain-of-Thought (CoT), Tree of Thought (ToT), ReAct, RAG

### 10.6 — Model Names (never translate)

GPT-4o, GPT-4o Mini, Claude 4.6 Sonnet, Claude 4.6 Opus, Claude 4.6 Haiku,
Gemini 2.5 Pro, Gemini 2.5 Flash, LLaMA 3.1, LLaMA 3.3, Mistral Large,
Mistral Small, Qwen 2.5, DeepSeek V3, DeepSeek-R1, Phi-4, Phi-4 Mini,
Gemma 3, Ollama, LM Studio, llama.cpp

### 10.7 — Technical Terms (keep in English)

These terms are industry-standard in all languages. Do not translate:

prompt, prompt engineering, token, context window, fine-tuning, inference,
embedding, quantization, VRAM, API, JSON, schema, RAG, LoRA, QLoRA, GGUF,
safetensors, vector database, hallucination (may add translation in parentheses on first use)

---

## Section 11 — Source Consistency Rule

**Before generating or updating any translation, confirm:**

1. The EN source page has ONE consistent acronym definition
2. The How-to steps match the body text acronym definition
3. No conflicting definitions exist on the same page

**If conflicting definitions exist in the EN source, DO NOT translate. Fix the EN source first, then generate translations from the corrected version.**

---

## Section 12 — Localization Section Rule

Every non-EN page MUST contain ONE section with market-specific context, placed BEFORE the FAQ section. Do not add if it already exists.

| Language | Section title | Required references |
|---|---|---|
| DE | "Im DACH-Kontext" or similar | Germany, Austria, Switzerland, DSGVO, BSI guidelines, German Mittelstand |
| FR | "Considérations pour les utilisateurs francophones" or similar | France, Belgium, Switzerland (FR), CNIL, RGPD |
| JA | "日本ユーザーのための活用ポイント" or similar | Japan, METI AI Governance, keigo requirements, Japanese enterprise workflow |
| ZH | "中国企业的应用方案" or similar | China, CAC, 数据安全法, 网络安全法, major Chinese tech companies |

---

## Section 13 — Internal Link and Hreflang Rules

**Internal links in translated pages must use the base English slug with lang param:**
```
CORRECT: /prompt-engineering/risen-framework?lang=de
WRONG:   /de/prompt-engineering/risen-framework
WRONG:   /prompt-engineering/risen-framework (without lang param)
```

**Hreflang — every translated page must include all 6 tags:**
```
hreflang="en"        → https://www.promptquorum.com/[slug]
hreflang="de"        → https://www.promptquorum.com/[slug]?lang=de
hreflang="fr"        → https://www.promptquorum.com/[slug]?lang=fr
hreflang="ja"        → https://www.promptquorum.com/[slug]?lang=ja
hreflang="zh"        → https://www.promptquorum.com/[slug]?lang=zh
hreflang="x-default" → https://www.promptquorum.com/[slug]
```
All URLs must be absolute. Relative URLs in hreflang are invalid.

---

---

## Section 14 — Translation Style Instructions: Decision Framework

**Purpose:** Formalize the per-language style rules, regional context requirements, and technical implementation patterns so that **every translation decision is guided by explicit criteria**, not aesthetic preference.

### 14.1 — When to Use Which Approach

| Scenario | Approach | Why | Tool/Location |
|----------|----------|-----|----------------|
| **Single article, <15 sections** | Direct Edit | Fast, minimal file churn | Read file → Edit tool → build → commit |
| **Single article, 15–30 sections** | Single-Pass Agent | Balanced speed/safety, one coherent pass | Agent prompt (section 7) → Edit tool → build → commit |
| **Single article, 30+ sections** | Batch Approach | Incremental safety, early error detection, clear commits | Batch 1–5 (Edit) → Build → Batch 6–10 (Edit) → Build → commit |
| **Multiple simultaneous articles** | Worktree per Language | Isolation from file formatter conflicts, parallel work | `git worktree add` → feature branch → batch edits → merge to main |
| **Large insertion (500+ lines) hitting auto-formatter** | Worktree + Smaller Edits | Reduces formatter interference window, smaller diffs | Worktree + 2–3 edits instead of 1 giant edit |
| **All 4 languages for 1 article (Full Localization)** | Sequential per-Language Worktrees | Avoids cross-language confusion, clear commit history | `/geo-translation` slash command (GEO_Translation workflow) |

### 14.2 — Per-Language Style Rules (Decision Matrix)

| Attribute | DE (German) | FR (French) | JA (Japanese) | ZH (Chinese) |
|-----------|------------|-----------|-------------|------------|
| **Formality** | Sie-form (formal, all audience) | Vous-form (formal address) | です/ます (polite, professional) | Direct benefit-first, professional |
| **Length vs EN** | +15–20% (longer, structured) | –10–15% (concise, elegant) | –20% (telegraphic, short sentences) | ≈ EN length (benefit-driven, comprehensive) |
| **Code-Switching** | VRAM, Q4_K_M, API stay EN | VRAM, Q4_K_M, API stay EN | VRAM, Q4_K_M, Ollama stay EN | VRAM, Ollama, API stay EN |
| **readTime Format** | `"10 Min. Lesezeit"` | `"10 min de lecture"` | `"10分で読める"` | `"阅读约10分钟"` |
| **Decimal Notation** | Keep `.` (tech standard) | Keep `.` (tech standard) | No change (code blocks only) | No change (code blocks only) |
| **Extra FAQs** | +2 (DSGVO + Mittelstand) | +0 (match EN count) | +2 (METI + Enterprise) | +2 (Data Security + Compliance) |
| **Regional Context** | DSGVO + BSI-Grundschutz + DACH | CNIL + RGPD (1 sentence) | METI 2024 + East Asia data sovereignty | Data Security Law 2021 + PIPL + CAC |
| **Schema author** | Person (Hans Kuepper) | Person (Hans Kuepper) | Organization (PromptQuorum) | Organization (PromptQuorum) |
| **regionalContext section** | Expand before FAQs | Add before FAQs | Restructure existing + add METI | Completely rewrite |

### 14.3 — Regional Context Requirements (Detail by Language)

#### 🇩🇪 GERMAN (DE)

**Style principle:** Formal, depth-first. German readers expect comprehensive explanations and structured argument flow.

**Regional context:**
- **DSGVO Article 28:** Cover Auftragsverarbeiter requirements, local inference as compliant architecture
- **BSI-Grundschutz-Kataloge:** Reference German Federal Office for Information Security guidelines
- **DACH context:** Germany, Austria, Switzerland enterprise standards
- **Regulatory mention:** Local inference reduces data export risk under DSGVO Article 28

**Extra FAQs (2, always):**
1. **"Muss ich bei der Verwendung von [Product] die DSGVO beachten?"** — DSGVO Article 28, Auftragsverarbeiter, local inference compliance
2. **"Ist [Product] für den deutschen Mittelstand geeignet?"** — SME use cases, German IT security standards, BSI recommendations

**Decimal notation rule:** Keep `.` in prose (4.5 GB → 4,5 GB is WRONG for tech content; 4.5 GB stays 4.5 GB)

#### 🇫🇷 FRENCH (FR)

**Style principle:** Formal, concise. French style favors elegance and brevity over encyclopedic detail.

**Regional context:**
- **CNIL:** Single sentence about CNIL recommending local AI for sensitive professional data
- **RGPD:** General reference (not article-specific)
- **Benefit-first:** Emphasize data sovereignty for finance/legal/healthcare

**Extra FAQs:** None (FR always matches EN count exactly)

**Decimal notation rule:** Keep `.` unchanged (standard for French tech writing)

**Length target:** 10–15% shorter than EN (not by deleting, but by restructuring for elegance)

#### 🇯🇵 JAPANESE (JA)

**Style principle:** Polite, telegraphic. Short sentences, です/ます form throughout, intentional code-switching for technical terms.

**Regional context:**
- **METI AI Governance 2024:** Reference Ministry of Economy, Trade and Industry AI governance guidelines
- **Data sovereignty:** East Asia data residency requirements (Japan, Malaysia, Singapore, Korea)
- **Enterprise security:** Japanese enterprise security standards (not just US/EU)
- Replace EU/China discussion with **East Asia combined section** (regional data frameworks)

**Extra FAQs (2, always):**
1. **"ローカル LLM デプロイメントで METI AI ガバナンスをどう適用するか？"** — METI guidelines, local inference compliance, Japanese enterprise workflow
2. **"ローカル推論でエンタープライズセキュリティをどう確保するか？"** — Japanese security standards, data residency, enterprise data flows

**Code-switching rule:** VRAM, Q4_K_M, Ollama, Python, API, GGUF stay English (standard in JA technical writing)

**Schema author:** Organization (PromptQuorum) — JA convention

**Fix: itemListSchema.itemListElement** names/descriptions — translate from EN (known inconsistency)

#### 🇨🇳 CHINESE (ZH)

**Style principle:** Benefit-focused, direct. Enterprise-oriented, simplified Chinese (not Traditional).

**Regional context (COMPLETELY REWRITE, do not translate EN):**
- **中国（数据安全法）:** Data Security Law 2021, CAC regulations, local inference as compliant architecture
- **亚太地区（数据跨境）:** Cross-border data frameworks, MLAI compliance (PIPL)
- **企业部署:** Finance/medical/legal regulatory compliance, major Chinese tech companies (Alibaba, Tencent, Baidu context)

**Extra FAQs (2, always):**
1. **"使用 [Product] 需要遵守数据安全法吗？"** — Data Security Law, CAC requirements, local inference for sensitive data
2. **"本地推理如何满足企业合规要求？"** — Enterprise compliance frameworks, financial/medical/legal use cases

**Schema author:** Organization (PromptQuorum) — ZH convention

**Fix: itemListSchema.itemListElement** names/descriptions — translate from EN (known inconsistency)

**Fix: schema.about[]** and **schema.speakable** — include (known omission)

### 14.4 — FAQ Management Rules

| Rule | DE | FR | JA | ZH | Notes |
|------|----|----|----|----|-------|
| Base FAQs (from EN) | 3 | 3 | 3 | 3 | Always translate the EN FAQs |
| Locale-specific FAQs | +2 | 0 | +2 | +2 | Added AFTER base FAQs, before closing |
| DSGVO-focused | 1 | — | — | — | German SME/compliance focus |
| METI-focused | — | — | 1 | — | Japanese government AI governance |
| Data law-focused | — | — | — | 1 | Chinese data security law |
| Enterprise security | 1 | — | 1 | 1 | All except FR emphasize enterprise use |
| Total FAQ count | 5 | 3 | 5 | 5 | FR matches EN; others add locale-specific |

**Implementation:**
1. Translate base FAQs from EN (all languages)
2. Generate 2 locale-specific FAQs ONLY for DE, JA, ZH
3. Add faqSchema entries for all locale-specific FAQs (inLanguage: XX)
4. Verify count: `grep -c '{ q: ' translated_block` matches table above

### 14.5 — Schema Markup Requirements (All Languages)

Every translated article MUST include:

#### Required Schemas
- **TechArticle** (or LearningResource if educationalLevel set): 
  - `url: "https://www.promptquorum.com/[path]?lang=XX"` (append ?lang parameter)
  - `inLanguage: 'XX'` (e.g., 'de', 'fr', 'ja', 'zh')
  - `author: { '@type': 'Person', 'name': 'Hans Kuepper' }` (normalize: DE/ZH use Organization convention)
  - `datePublished` and `dateModified`: match EN source (ISO format, unchanged)

- **HowToSchema** (if present in EN):
  - `inLanguage: 'XX'`
  - All `step[].name` and `step[].text` translated
  - `url` with `?lang=XX`

- **FAQSchema** (if present in EN or new for locale-specific FAQs):
  - `inLanguage: 'XX'`
  - All questions/answers in target language
  - Include locale-specific FAQ entries
  - `mainEntity[].name` translated

- **ItemListSchema** (if present in EN):
  - `inLanguage: 'XX'`
  - `itemListElement[].name` and `.description` translated
  - `url` with `?lang=XX`

#### Schema Fixes by Language

| Schema | DE | FR | JA | ZH | Fix |
|--------|----|----|----|----|-----|
| author | ✓ Normalize | ✓ Normalize | Organization | Organization | Ensure Person (EN/DE/FR) or Organization (JA/ZH) |
| inLanguage | ✅ Add | ✅ Add | ✅ Add | ✅ Add | Always present |
| url params | ✅ Add ?lang= | ✅ Add ?lang= | ✅ Add ?lang= | ✅ Add ?lang= | Internal links only |
| about[] | ✓ Exist | ✓ Exist | **Add if missing** | **Add if missing** | Structured { '@type': 'Thing', 'name' } objects |
| speakable | ✓ Exist | ✓ Exist | **Add if missing** | **Add if missing** | For voice search |

### 14.6 — Internal Link Convention (All Languages)

**Rule:** Every `/local-llms/`, `/prompt-engineering/`, `/blog/` markdown link in translated content must include `?lang=XX`.

**Pattern:**
```typescript
// EN (no lang param needed)
'[Link text](/prompt-engineering/example)'

// DE (append ?lang=de)
'[Link text](/prompt-engineering/example?lang=de)'

// FR (append ?lang=fr)
'[Link text](/prompt-engineering/example?lang=fr)'

// JA (append ?lang=ja)
'[Link text](/prompt-engineering/example?lang=ja)'

// ZH (append ?lang=zh)
'[Link text](/prompt-engineering/example?lang=zh)'
```

**Validation:**
- Search translated block for `[` to find all markdown links
- Each link should have `?lang=XX` appended
- External URLs (https://) are unchanged

### 14.7 — File Insertion Strategy (Size-Based Decision)

| Translation Size | Insertion Strategy | Tool | Notes |
|-----------------|-------------------|------|-------|
| <100 lines | Single Edit | Edit tool | One insertion point, one old_string/new_string |
| 100–400 lines | Single Edit with extended context | Edit tool | Larger old_string to ensure uniqueness |
| 400–700 lines | Worktree + Single Edit | Worktree | Isolates from file formatter, one Edit call in worktree |
| 700+ lines | Batch approach (section 7b) | Edit tool | Break into 2–3 logical batches |
| **File auto-formatter error recurs** | Worktree + Smaller Edits | Worktree | 2–3 smaller edits instead of 1 giant edit |

**Auto-Formatter Conflict Resolution:**
- **Symptom:** "File has been modified since read" error during Edit on large translations
- **Root cause:** Formatter runs as file system watch, invalidates string match between read and edit
- **Solution:** Use worktree to isolate from auto-formatter, OR break into smaller 200–300 line edits

### 14.8 — Verification Checklist Before Committing

Run this checklist for every translated language:

```
## [ Language Code ] Translation Verification

### Meta & Structure
- [ ] `title` translated naturally (not word-for-word)
- [ ] `seoTitle` 50–58 characters in target language
- [ ] `metaDescription` 140–160 characters in target language
- [ ] `intro` 45–50 words, bolded
- [ ] `readTime` uses correct format (section 14.2 table)
- [ ] `primaryTerm` translated and matches schema.teaches[] topic

### Content Completeness
- [ ] All section titles translated
- [ ] All prose paragraphs translated (no EN prose visible)
- [ ] All bullet points translated
- [ ] All numbered lists translated
- [ ] All table cells translated (keys AND values)
- [ ] All blockquotes fully translated — no English blockquotes on non-EN pages

### Regional Context
- [ ] regionalContext section present BEFORE FAQ
- [ ] Includes required regulatory references (DSGVO/CNIL/METI/Data Security Law)
- [ ] Structured in 2–3 subsections per language requirement
- [ ] No generic boilerplate (specific regulatory detail, not template)

### FAQ & Schemas
- [ ] FAQ count matches section 14.4 table
- [ ] Base FAQs translated
- [ ] Locale-specific FAQs present (DE, JA, ZH)
- [ ] faqSchema updated with all FAQ entries + inLanguage: XX
- [ ] howToSchema present if EN has it, all steps translated, inLanguage: XX
- [ ] itemListSchema present if EN has it, all items translated, inLanguage: XX
- [ ] All schema URLs include ?lang=XX (internal links only)

### Links & References
- [ ] All internal links have ?lang=XX appended
- [ ] All external links unchanged (https://...)
- [ ] All markdown formatting preserved (**bold**, `code`, etc.)
- [ ] Product names kept in English (GPT-4o, Claude, Ollama, etc.)
- [ ] Framework names kept in English (RISEN, TRACE, RTF, etc.)
- [ ] Technical acronyms kept in English (VRAM, API, JSON, etc.)

### Language Signals (E-E-A-T)
- [ ] Zero untranslated English words in body text (except product names, code)
- [ ] No mixed-language sentences
- [ ] Grammar and vocabulary native to target language (not literal translation)
- [ ] Tone matches language profile (formal for DE/FR, polite for JA, benefit-first for ZH)

### Build & Browser Check
- [ ] `npm run build` returns 0 errors
- [ ] Article renders at `[slug]?lang=XX` URL
- [ ] Page title (H1) shows in target language in browser
- [ ] Meta description in DevTools shows target language
- [ ] Internal links click through to `?lang=XX` versions
```

**Before committing:**
```bash
npm run build                    # Must pass with 0 errors
npm run dev                      # Start server
# Visit: http://localhost:3000/[article-path]?lang=XX
# Check: H1, first paragraph, meta tags all in target language
# Check: Click internal link → URL includes ?lang=XX
```

### 14.9 — Commit Message Convention (All Languages)

```
feat: Add [LANGUAGE] ([Full Language Name]) translation for [article-slug]
```

**Examples:**
```
feat: Add German (Deutsch) translation for lm-studio-advanced-features
feat: Add French (Français) translation for lm-studio-advanced-features
feat: Add Japanese (日本語) translation for lm-studio-advanced-features
feat: Add Chinese (中文) translation for lm-studio-advanced-features
```

**For batch translations (30+ sections):**
```
feat: Add [LANGUAGE] translation for [slug] (Batches 1–5)
feat: Complete [LANGUAGE] translation for [slug] (Batches 6–10)
```

---

**Last updated:** 2026-04-08
**Sections added:** 14 (Translation Style Instructions — Decision Framework)
**Next review:** After JA/ZH translations for lm-studio-advanced-features complete
