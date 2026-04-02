# Translation Spec: Content.ts Article Translations

**Purpose:** Universal reference for translating all articles in `src/lib/prompt-engineering/content.ts` to 5 languages (EN, DE, FR, JA, ZH).

Load this file as your primary reference when translating. It eliminates the need to re-learn rules from scratch.

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

- **URL paths:** All internal links `/prompt-engineering/...` — only update the link text (before the parentheses); append `?lang=XX` to the URL (see section 4)
- **Product/model names:** `GPT-4o`, `Claude 4.6 Sonnet`, `Gemini 2.5 Pro`, `Ollama`, `DeepSeek`, `Mistral`, `LLaMA`, `DALL-E`, `Anthropic Claude`
- **Org/standard names:** `OWASP`, `NIST`, `BSI`, `Anthropic`, `OpenAI`, `PromptQuorum`, `Google`, `Meta`, `Cohere`
- **Technical acronyms:** `RAG`, `RLHF`, `RLAIF`, `LLM`, `DistilBERT`, `Base64`, `ROT13`, `BPE`, `DPO`, `SFT`, `Constitutional AI`, `SSRF`, `XSS`, `API`, `SDK`, `IDE`, `GPT`, `LoRA`, `QLoRA`, `ViT`
- **Schema fields:** `schema.@context`, `schema.@type`, `author`, `publisher`, `mentions`, `about`, `speakable` objects (structure unchanged)
- **Dates:** `publishDate`, `dateModified` — keep **exact same ISO date** as English source (do not localize format)
- **Boolean flags:** `isTldr`, `tableFormat`, `theme` (values unchanged)
- **Numeric positions:** `position` in `HowToStep`, array indices
- **Code blocks:** Full `codeBlock` string + `codeLanguage` value (unchanged)
- **`relatedReading` links:** The URL part; translate only the link label text inside `[...]` and the descriptive suffix after `—`

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

Output the complete [LANG_CODE]: { ... } block as TypeScript code ONLY.
No commentary, no explanation, no markdown fences.
Start with '[LANG_CODE]: {' and end with '},'
```

Replace:
- `[ARTICLE_SLUG]` with the article ID (e.g., `prompt-injection-and-security`)
- `[LANG_CODE]` with the language code (`de`, `fr`, `ja`, or `zh`)

---

## 7b. Batch Translation Approach for Large Articles

For articles with 40+ sections (e.g., `geopolitics-and-ai`), use the **batch approach** instead of translating the entire article at once. This method breaks the translation into 10 logical batches, allowing incremental building and early error detection.

### When to Use

- Article has 40+ sections (too large for single agent pass)
- Multiple sections share similar structure (tables, FAQs, QA pairs)
- You want to verify build success incrementally rather than waiting for full completion

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

- **Batches 1–4:** Single commit with message `feat: Add [language] translation batches 1–4 for [article-slug]`
- **Batches 5–9:** Second commit with message `feat: Add [language] translation batches 5–9 for [article-slug]`
- **Batch 10:** Final commit with message `feat: Complete [language] translation for [article-slug]`

After final build passes, push to `origin/main`.

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

**Last updated:** 2026-04-02
**Next review:** After completion of geopolitics-and-ai translations (all 5 languages)
