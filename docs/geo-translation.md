# /geo-translation — Full Article Localization Slash Command

Generate production-ready translations for one language at a time with full localization: region-appropriate context, locale-specific FAQ additions, local formatting conventions, and complete schema markup.

## Usage

```
/geo-translation https://www.promptquorum.com/fr/local-llms/local-llms-with-vscode-cursor
/geo-translation https://www.promptquorum.com/de/local-llms/how-to-install-ollama
/geo-translation https://www.promptquorum.com/ja/prompt-engineering/rtf-framework
```

**Exactly one language in the path prefix (`/de/`, `/fr/`, `/ja/`, etc.)** Supported: `ar`, `de`, `es`, `fr`, `ja`, `pt`, `zh`.
  - `es`, `de`, `fr`, `ja`, `zh` are ACTIVE. `pt` (Brazilian Portuguese) and `ar` (Arabic) are RESERVED — full rules below; only generate them when authoring real `pt`/`ar` content. `pt` outputs hreflang `pt-BR`; `ar` is RTL.

---

## Global Principles

These apply to every language and every step below.

- **Preserve factual meaning.** Numbers, specs, constraints, dates, benchmarks, and key conclusions must remain correct. Localization changes wording — never facts.
- **Google international SEO.** Each language version must be fully readable and complete in that language. Don't mix languages within a version (technical terms excepted). Localize titles, meta descriptions, headings, and internal anchor text — not just body copy.
- **People-first content.** Focus on solving the reader's problem in that market. Avoid keyword-stuffing, mechanical repetition, or "translated English" phrasing.
- **Helpful over literal.** When a literal translation would sound unnatural, prefer how a native expert would actually phrase it.

---

## ⚠️ FIELDS TO NEVER TRANSLATE (CODE-SIDE IDENTIFIERS)

**These fields are lookup keys or internal identifiers — translating them breaks the code.** Every translated locale block MUST preserve these fields identically to the EN block.

| Field | Type | Reason | Example |
|-------|------|--------|---------|
| `theme` | string | Maps to THEME_COLORS enum | `'Getting Started'` — not translated |
| `slug` | string | URL path identifier | `'local-llm-with-cursor-2026'` — unchanged |
| `canonicalSlug` | string | SEO canonical identifier | Unchanged across all locales |
| `type` | string | Article type enum | `'local-llms'`, `'prompt-engineering'`, `'blog'` — not translated |
| `id` | string | Unique article ID | Unchanged |
| `anchor` | string (in toc) | CSS selector for smooth-scroll | `'key-takeaways'`, `'how-does-ollama-work'` — must remain unchanged |
| `position` | number | List ordering | Unchanged |
| Any Record<> or Map<> keys | string | Lookup table keys | Unchanged |

**Golden rule:** If a field is used as a dictionary/object key in the codebase, DO NOT TRANSLATE IT.

---

## SCHEMA FIDELITY (MANDATORY)

**Every translated locale block MUST have identical field structure to the EN block.** Structure drift causes TypeScript errors and schema validation failures.

### Pre-Commit Validation Checklist

Before implementing any translation (Step 6), verify:

1. **Field count:** `Object.keys(en).length === Object.keys(de).length` (same number of fields in both blocks)
2. **Field names:** All field names match exactly (same casing, spelling, nesting depth)
3. **Array structure:** If EN has `faqs[3]`, DE must have `faqs[3]` (same count, same order)
4. **Nested objects:** If EN has `schema.about[0]`, DE must have `schema.about[0]` (same structure)
5. **Code identifiers:** Fields in "FIELDS TO NEVER TRANSLATE" section above are byte-for-byte identical to EN
6. **No extra fields:** Do NOT add fields that don't exist in EN (e.g., no inventing `tldr`, `whatIsLocalRag`, `regionalContext` if EN doesn't have them)
7. **No missing fields:** If EN has `relatedReading`, DE must have `relatedReading` (even if content differs)

### What Breaks If You Skip This

| Violation | Error | Fix |
|-----------|-------|-----|
| Adding `tldr: {...}` when EN has none | TypeScript `Argument of type ... is not assignable to parameter` | Remove the field; put content in existing field |
| Removing `relatedReading` | Field becomes `undefined`; page renders broken links | Keep field, translate content only |
| Changing `theme: 'Getting Started'` to `theme: 'Bien démarrer'` | THEME_COLORS lookup fails; page renders with fallback style | Preserve EN value exactly |
| Renaming `faqSection` to `faqs` | TypeScript error; schema mismatch | Use exact field name from EN |
| Changing array length in `sections[]` | Content sections render out of sync; missing translations | Keep array length identical to EN |

### Debug: Comparing Structures

If you get a schema validation error during build, use this to compare:

```bash
# Extract just the field names from EN and DE blocks
grep -E '^\s+[a-zA-Z_]+:' src/lib/[cluster]/[file].ts | grep -A 100 'en: {' | head -20
grep -E '^\s+[a-zA-Z_]+:' src/lib/[cluster]/[file].ts | grep -A 100 'de: {' | head -20
# Fields should match in both lists
```

---

## Language-Neutral Localization Rules

Apply these to every localized version, regardless of target language.

1. **Adapt tone and style.** Match local expectations for serious tech / informational content (formality, directness, depth). Remove or adapt idioms, jokes, or culture-specific references that don't transfer.

2. **Localize examples and context.** Keep globally relevant core examples. Optionally swap or add 1–2 examples that make sense for the target market (local usage scenarios, local terminology). Never fabricate facts.

3. **Preserve and adapt structure.** Keep the overall information architecture (sections, headings, anchors). You may merge or split paragraphs for readability, or reorder subsections when it makes the logic clearer locally.

4. **Keyword and terminology adaptation.** Use natural, commonly used technical terms in the target language — not literal word-for-word translations. Prefer widely accepted local terms even if they don't map 1:1 to the English keyword.

5. **Metadata and UX elements.** Localize page title, meta description, H1, all headings, button labels, CTAs, and navigation labels. Keep them compelling and truthful.

6. **Consistency and accuracy.** Keep all numbers identical (prices, specs, dates, benchmarks) unless explicitly told to convert. If converting (e.g., USD → EUR), state which currency and don't pretend to have real-time FX data.

7. **Compliance and safety.** Don't add local legal, medical, or regulatory claims that aren't in the original. If the source has borderline claims, keep them conservative or flag them — don't exaggerate.

---

## Workflow — 7 Steps

### ✅ Step 1 — Parse & Pre-Audit

Extract:
- Content type: `local-llms` | `prompt-engineering` | `blog`
- Slug (article key)
- Target language from path prefix (e.g. `/de/`, `/fr/`, `/ja/`)

Map to file:
- `local-llms` → `src/lib/local-llms/content.ts`
- `prompt-engineering` → `src/lib/prompt-engineering/content.ts`
- `blog` → `src/lib/blog/blogContent.ts`

Read EN article completely. Report:
```
📖 Article: [slug] ([type])
🇬🇧 EN: [N] sections, [M] FAQs, [K] schema types
🇱🇦 [Lang Code]: [none / partial / complete]
```

---

### ✅ Step 2 — Localization Plan (approval gate)

Before generating, show the plan for user approval:

```
📋 Localization Plan — [LANG]

Outline:      [Translated section headings, H1–H3 only — one per line]
Adaptations:  [1–3 bullets on notable structural or tone decisions]
Style:        [specific voice/register for language]
TOC:          Translated labels, anchors unchanged
FAQs:         [count] EN → [count] [LANG] (+ locale-specific additions if any)
Regional:     [DECISION: Include regional regulatory context? YES/NO]
              IF YES: [DE: DSGVO + Mittelstand | FR: CNIL | JA: METI-first | ZH: China Data Law | PT: LGPD (Brazil ANPD) | AR: Gulf data-sovereignty / PDPL]
              IF NO: Pure technical translation, no regional customizations added
Schemas:      All types with /[lang]/path, inLanguage: '[xx]'
Meta tags:    seoTitle 48–58 chars, metaDescription 140–155 chars

Proceed? → yes / adjust [field] "instruction"
```

**Regional Rule Decision:** Before proceeding, verify whether regional customizations (compliance, regulatory context) apply:
- Is the article fundamentally ABOUT data governance, compliance, or regional regulation? → Include regional rules
- Is it a pure technical/hardware guide? → Skip regional rules

Wait for **`yes`** before proceeding.

---

### ✅ Step 3 — Generate Full Translation

Generate the complete target-language content block. Apply all field rules below.

#### ❌ NEVER (during generation)
- **Never invent** new technical features, benchmarks, or specs that aren't in the EN source.
- **Never strengthen claims** — promotional language must not exceed the original.
- **Never translate literally** when the result would sound unnatural; prioritize natural local usage and how a native expert would phrase it.
- **Never add fields** that don't exist in the EN block (e.g., no inventing `tldr`, `whatIsLocalRag`, `regionalContext` if EN doesn't have them). Translate existing content only.
- **Never translate code identifiers** (see "FIELDS TO NEVER TRANSLATE" section). `theme`, `slug`, `type`, `id`, `canonicalSlug`, `anchor` values must be identical to EN.

Show progress:
```
🔄 Translating sections...
  ✓ theme (UNCHANGED — code identifier), slug, type, id (UNCHANGED)
  ✓ title, seoTitle, intro, metaDescription, readTime
  ✓ toc (labels + anchors UNCHANGED)
  ✓ [tldr] ✓ [whatIs/overview/aboutProduct]
  ✓ [sections.1-N] — [count] sections
  ✓ [commonMistakes / faqSection / relatedReading / sources]
  ✓ Schema: TechArticle, HowToSchema, FAQSchema, ItemListSchema
  ✓ Verified: no extra fields added, all EN fields present
```

---

### ✅ Step 4 — Interactive Quality Review

Display self-evaluated checklist:

```
🔍 Quality Review — [LANG] Translation

### Meta Tags
- seoTitle ([N] chars): "[text]" ✅ / ⚠️ / 🔴
- metaDescription ([M] chars): "[text]" ✅ / ⚠️ / 🔴

### Content Completeness
- ✅ All [N] sections translated
- ✅ No English prose remaining (code blocks excluded)
- ✅ Technical terms preserved: Ollama, VRAM, Q4_K_M, GGUF, etc.
- ✅ Internal links use /[lang]/path format
- ⚠️ [if any] sources description shortened — verify
- ✅ toc anchors unchanged
- ✅ Code blocks untouched

### Schema Markup
- ✅ TechArticle: url with /[lang]/path, inLanguage: '[xx]'
- ✅ HowToSchema: inLanguage: '[xx]' (+ name translated, steps translated)
- ✅ FAQSchema: inLanguage: '[xx]' (+ Q&As translated)
- ✅ ItemListSchema: inLanguage: '[xx]' (+ item names/descriptions translated)
- ✅ author: { '@type': 'Person', 'name': 'Hans Kuepper' } (normalized)
- ✅ about[]/mentions[]: structured typed objects (normalized)

### Localization Quality
- ✅ [Language-specific rules applied]
- ⚠️ [if applicable] [specific item] — needs verification

### Issues to Resolve (if any)
1. ⚠️ [section.item] — [description]
2. ⚠️ [section.item] — [description]

Approve translation?
→ yes (implement)
→ fix [issue#] (regenerate that item)
→ edit [section] "instruction" (apply specific text)
```

---

### ✅ Step 5 — Fix Loop

User can respond:

| Response | Action |
|----------|--------|
| `yes` | Proceed to **Step 6** (implement) |
| `fix 1` | Re-generate Issue #1, show result, ask again |
| `edit faqSection.faqs[3].a "longer answer"` | Apply text to that field, re-validate FAQ #4, ask again |
| `edit de regionalContext "add BSI-Grundschutz context"` | Regenerate that section per instruction, show result, ask again |

**Loop until:** User responds `yes`.

---

### ✅ Step 6 — Implement

Insert the complete target-language block into the content.ts file.

**Insertion point:** Immediately after EN block, OR after the last existing language block (preserve order: en, then alphabetical — en, ar, de, es, fr, ja, pt, zh).

Use the **Edit tool** with enough context to uniquely locate insertion. Example:

```typescript
en: {
  // ... EN content ...
},
fr: {          ← INSERT HERE (after en block)
  // ... FR content ...
},
```

**BEFORE running build**, verify schema fidelity:

```typescript
// Pseudo-check: Visually verify these match between EN and [LANG] blocks:
// ✅ Same field names (theme, title, slug, sections, faqs, schema, etc.)
// ✅ Same array lengths (sections[0..N], faqs[0..M])
// ✅ theme, slug, type, id are IDENTICAL between EN and [LANG]
// ✅ No new fields added (no inventing 'tldr' if EN doesn't have it)
// ✅ No fields removed (all EN fields present in [LANG])
```

After insertion:

```bash
npm run build 2>&1 | tail -20
```

Verify: **0 TypeScript errors required.** If errors exist:
1. Check for schema fidelity violations (extra/missing fields)
2. Verify code identifiers (theme, slug, type, id) match EN exactly
3. Fix the structure, do NOT add `@ts-ignore` or workarounds
4. Re-run build

---

### ✅ Step 7 — Commit

```bash
feat: Add [LANG] ([Language Name]) translation for [slug] article
```

Example:
```
feat: Add FR (French) translation for how-to-install-lm-studio article
feat: Add DE (German) translation for local-llm-hardware-guide-2026 article
```

---

## Field Translation Rules

### ❌ NEVER Translate
- **Code-side identifiers:** `theme`, `slug`, `canonicalSlug`, `type`, `id`, `anchor` (in toc) — these are lookup keys or enum values; changing them breaks routing and component rendering
- `publishDate`, `dateModified` — ISO dates
- `educationalLevel`, `primaryTerm` — metadata
- `codeBlock`, `codeLanguage` — code is never translated
- `isTldr` — boolean flag
- Schema `'@context'`, `'@type'` — schema type identifiers
- `totalTime`, `position`, `numberOfItems` — counts/identifiers
- Base URL paths — `/local-llms/how-to-install-ollama` (use `/{lang}/local-llms/how-to-install-ollama`)
- ISO 8601 dates, timezones
- Any field that is a key in a Record<>, Map<>, or enum

### ✅ ALWAYS Translate
- `title`, `seoTitle`, `intro`, `metaDescription` — user-facing text
- `readTime` unit label only: `'7 min read'` → `'7 Min. Lesezeit'` (DE). Keep the number.
- `toc[].label` — section names (keep `anchor` unchanged)
- All `sections.*.title` — section headings
- All prose: `content` (string/string[]), `items[]`, `numberedItems[]` — bullet lists, steps
- `faqs[].q`, `faqs[].a` — questions and answers
- Schema `headline`, `description` — match title/intro
- `howToSchema.name`, `howToSchema.step[].name`, `howToSchema.step[].text` (if present)
- `faqSchema.mainEntity[].name`, `.acceptedAnswer.text`
- `itemListSchema.name`, `itemListSchema.itemListElement[].name`, `...description`
- Table column headers & row cell text (except technical specs like `'8 GB'`, `'VRAM'`, `'Q4_K_M'` which stay as-is)
- `relatedReading.items[]` link text (inside `[...]`) and captions (after ` — `); URL changes to `/{lang}/path` format
- `sources.items[]` titles and descriptions; URLs & publisher names stay unchanged

### 🔧 ALWAYS Set / Compute
- `schema.url` → prepend language path prefix (e.g., `https://www.promptquorum.com/de/local-llms/slug`). EN: no prefix (default).
- `schema.inLanguage` → `'de'` / `'es'` / `'fr'` / `'ja'` / `'zh'` / `'pt-BR'` (Portuguese — Brazilian; NOT `'pt'`) / `'ar'`
- `howToSchema.inLanguage`, `faqSchema.inLanguage`, `itemListSchema.inLanguage` → same as `schema.inLanguage` (add to all schema types)
- `schema.author` → ALWAYS normalize to `{ '@type': 'Person', 'name': 'Hans Kuepper' }`
- `schema.publisher` → ALWAYS normalize to `{ '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }`
- `schema.about[]` → ALWAYS use structured objects: `{ '@type': 'Thing', 'name': '...' }` (normalize from any flat string inconsistencies)
- `schema.mentions[]` → ALWAYS use structured objects: `{ '@type': 'SoftwareApplication', 'name': '...' }`
- `schema.speakable` → Always include: `{ '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] }`

### Table Rows
When `columns[]` are translated, **row object keys must be rekeyed** to match. Example:

**EN columns & rows:**
```typescript
columns: ['Factor', 'LM Studio', 'Ollama']
rows: [
  { 'Factor': 'Interface', 'LM Studio': 'GUI', 'Ollama': 'CLI' }
]
```

**FR columns & rows (keys changed!):**
```typescript
columns: ['Facteur', 'LM Studio', 'Ollama']
rows: [
  { 'Facteur': 'Interface', 'LM Studio': 'GUI', 'Ollama': 'Interface de ligne de commande' }
]
```

### Internal Links
Prepend language prefix to all markdown links:
- `/local-llms/path` → `/fr/local-llms/path`
- `/prompt-engineering/path` → `/de/prompt-engineering/path`
- `/blog/path` → `/ja/blog/path`

Example: `'[How to Install Ollama](/fr/local-llms/how-to-install-ollama)'`

---

## Conditional Regional Customizations

**Not every article needs regional regulatory/compliance context.** Skip language-specific regional customizations (DSGVO, CNIL, METI, Data Security Law, LGPD, Gulf PDPL) when they don't apply to the article's scope.

### When to SKIP Regional Rules

| Article Type | Example | Skip? | Reason |
|---|---|---|---|
| Pure hardware/setup guide | "How to Install LM Studio", "Setting up RTX 5090" | ✅ YES | Technical specs don't involve compliance, data handling, or regulations |
| Hardware comparison table | "Open-Source Models by VRAM" | ✅ YES | Specs are factual; no regulatory context needed |
| Technical tutorial | "Fine-tuning with Ollama" | ✅ YES | Process is identical across regions; no data residency concerns |
| Architectural pattern | "Prompt engineering best practices" | ✅ YES | Timeless guidance; no regional variation |

### When to APPLY Regional Rules

| Article Type | Example | Apply? | Reason |
|---|---|---|---|
| Data governance topic | "Running LLMs in regulated industries" | ✅ YES | Explicitly about compliance, data residency, HIPAA, PCI-DSS |
| Enterprise deployment | "Local LLMs for financial services" | ✅ YES | Different regulatory requirements per region |
| Privacy-focused article | "Keeping data on-device with local inference" | ✅ YES | GDPR, DSGVO, CNIL, Chinese Data Security Law are core topics |
| Local AI governance | "METI guidelines for Japan's AI adoption" | ✅ YES | Regulatory framework is the topic |

### Decision Rule

**Ask: "Is the article fundamentally ABOUT compliance, data governance, or regional regulation?"**
- **YES** → Apply regional customizations (DSGVO, CNIL, METI, LGPD, Gulf PDPL, etc.)
- **NO** → Skip them; translate content as-is without adding regulatory context

**Example:**

✅ **Hardware guide (skip regional rules):**
```
en: {
  sections: [
    { title: 'System Requirements', content: 'Need 8GB VRAM...' },
    { title: 'Installation Steps', content: '1. Download... 2. Install...' },
  ]
}

de: {
  sections: [
    { title: 'Systemanforderungen', content: 'Benötigen 8GB VRAM...' },  // Pure translation
    { title: 'Installationsschritte', content: '1. Herunterladen... 2. Installieren...' },  // No DSGVO section added
  ]
}
```

❌ **Enterprise data governance (apply regional rules):**
```
en: {
  regionalContext: 'Financial institutions must ensure...'
}

de: {
  regionalContext: 'Finanzinstitute in Deutschland müssen DSGVO-Artikel 28 erfüllen und BSI-Grundschutz-Kataloge beachten...'  // ✅ Regional context is core
}
```

---

## Per-Language Localization Rules

### 🇩🇪 DE — German

| Aspect | Rule |
|--------|------|
| **Style** | Formal Sie-form throughout. Long-form explanations (DE readers expect depth). Structured, formal headings. Where structurally appropriate, prefer clear benefit/drawback subheadings like "Vorteile", "Nachteile", "Für wen geeignet". Neutral, factual tone. |
| **toc tldr** | Title: `'Zusammenfassung'` |
| **Decimal** | Replace `.` with `,` in all prose numbers: `4.5 GB` → `4,5 GB`, `0.8` → `0,8`. Keep `.` in code blocks. |
| **Currency** | Convert USD ($) → EUR (€) using **researched Apple.com/de, Amazon.de, Geizhals.de retail prices** — NOT mechanical rate conversion. Format: `€` AFTER number with space, `.` as thousands separator (e.g., `2.499 €`, `900 €`, `1.000–1.400 €`). For products not formally sold in DACH, prefix `ca.` (`ca. 1.999 €`). NEVER fabricate — if unverifiable, keep USD with note. See the **Currency Localization (MANDATORY)** section below for full sources. |
| **Extra FAQs** | Add 2 DE-specific Q&A pairs at end of `faqSection.faqs[]` AND `faqSchema.mainEntity[]`: |
| | 1. **DSGVO Q**: "Muss ich bei der Verwendung von [Product] die DSGVO beachten?" |
| | Answer: Covers DSGVO Article 28, BSI-Grundschutz-Kataloge compliance, how local inference satisfies data residency + processing obligations |
| | 2. **Mittelstand Q**: "Ist [Product] für den deutschen Mittelstand geeignet?" |
| | Answer: German SME use cases, IT security standards (BSI), recommendations for Mittelstand enterprises |
| **regionalContext** | Expand EN regionalContext. Add explicit mention of BSI-Grundschutz-Kataloge and DACH (Germany/Austria/Switzerland) enterprise IT standards. |
| **schema.author** | `{ '@type': 'Person', 'name': 'Hans Kuepper' }` (normalize if present as Organization) |
| **readTime** | `'[N] Min. Lesezeit'` (e.g., `'7 Min. Lesezeit'`) |
| **Total FAQs** | 12 (10 base EN + 2 DE-specific) |

---

### 🇪🇸 ES — Spanish

| Aspect | Rule |
|--------|------|
| **Style** | Neutral Spanish (Español Neutro) — works across Spain and all Latin American markets. **tú** form (informal you) throughout — NOT vosotros (Spain-only), NOT usted (too formal), NOT vos (Argentina/Uruguay only). Smart-colleague tone, same register as English original. Professional but accessible. |
| **toc tldr** | Title: `'Puntos clave'` |
| **Decimal** | Keep dots: `4.5 GB` stays `4.5 GB` |
| **Tech terminology** | Keep established tech terms in English: GPU, VRAM, LLM, API, framework, prompt engineering, token, fine-tuning, RAG, etc. Do NOT force-translate universally understood tech terms. |
| **Currency** | PE articles: no hardware prices — N/A. For hardware articles: Spain/EU → EUR (Amazon.es, PcComponentes); LatAm → keep USD with note `"Los precios en tu país pueden variar según impuestos locales."` Format: `€299` (Spain) or `~€350 (España) / ~$400 USD (Latinoamérica)`. |
| **Extra FAQs** | None. ES matches EN count exactly: 10 FAQs. |
| **regionalContext** | Skip for pure technical/PE articles (same rule as hardware guides). Only add if article is fundamentally ABOUT compliance or data governance — then reference both EU (RGPD/GDPR + AEPD) AND LatAm (LFPDPPP Mexico, Ley 25.326 Argentina, Ley 1581 Colombia). |
| **schema.author** | `{ '@type': 'Person', 'name': 'Hans Kuepper' }` |
| **readTime** | `'[N] min de lectura'` (e.g., `'7 min de lectura'`) |
| **Total FAQs** | 10 (same as EN) |
| **Vocabulary** | Prefer neutral vocabulary: "equipo" or "PC" over "computadora/ordenador". Brand names (PromptQuorum, Ollama, LM Studio) unchanged. "Prompt engineering" stays as-is — universally understood in Spanish tech community. |

---

### 🇫🇷 FR — French

| Aspect | Rule |
|--------|------|
| **Style** | Formal Vous-form throughout. 10–15% shorter than EN (concise French style). Elegant restructuring of headings where appropriate. |
| **toc tldr** | Title: `'Points clés'` |
| **Decimal** | Keep dots: `4.5 GB` stays `4.5 GB` (French tech writing convention uses dots). |
| **Currency** | Convert USD ($) → EUR (€) using **researched Apple.com/fr, LDLC.com, Amazon.fr retail prices** — NOT mechanical rate conversion. Format: `€` AFTER number with thin space, thin space as thousands separator (e.g., `2 499 €`, `900 €`, `1 000–1 400 €`). For US-only products, prefix `env.` (environ): `env. 1 999 €`. NEVER fabricate — if unverifiable, keep USD with note. See the **Currency Localization (MANDATORY)** section below. |
| **Extra FAQs** | None. FR matches EN count exactly: 10 FAQs. |
| **regionalContext** | Expand EN section. Add one CNIL sentence about CNIL's recommendation for local AI when handling sensitive professional data (financial, medical, legal). Do not add a separate CNIL FAQ question. |
| **schema.author** | `{ '@type': 'Person', 'name': 'Hans Kuepper' }` |
| **readTime** | `'[N] min de lecture'` (e.g., `'7 min de lecture'`) |
| **Total FAQs** | 10 (same as EN) |

---

### 🇯🇵 JA — Japanese

| Aspect | Rule |
|--------|------|
| **Style** | Polite です/ます form throughout. Telegraphic, abbreviated style (shorter sentences than EN). Mixed Japanese/English for technical terms (intentional code-switching for VRAM, Q4_K_M, Ollama, llama.cpp, GPU, CUDA, etc.). Use short signposting intros like `「このセクションでは…」` to orient the reader where helpful. Explain decisions step by step. |
| **toc tldr** | Title: `'重要ポイント'` |
| **Decimal** | Keep dots for tech content: `4.5 GB` stays `4.5 GB` |
| **Currency** | Convert USD ($) → JPY (¥) using **researched Apple.com/jp, Kakaku.com, Yodobashi.com, Bic Camera prices** — NOT mechanical rate conversion. Format: `¥` BEFORE number, comma thousands separator (e.g., `¥358,800`, `¥94,800`). For products not sold in JP, prefix `約` (approximately): `約¥330,000`. NEVER fabricate — if unverifiable, keep USD with note. See the **Currency Localization (MANDATORY)** section below. |
| **Extra FAQs** | None. JA matches EN count: 10 FAQs. |
| **regionalContext** | RESTRUCTURE (do not translate EN). Reorder as: METI-first (Japan), then East Asia combined (Asia-Pacific), then global. Remove EU/China paragraphs. Add explicit METI AI Governance 2024 reference for enterprise deployments. |
| **schema.author** | `{ '@type': 'Organization', 'name': 'PromptQuorum' }` (JA convention; override if present as Person) |
| **schema.about[]** | Include (fix known JA omission) — e.g., `[{ '@type': 'Thing', 'name': 'LM Studio' }, ...]` translated to Japanese |
| **schema.speakable** | Include (fix known JA omission) — `{ '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] }` |
| **itemListSchema** | Translate `itemListElement[].name` and `.description` to Japanese (fix known EN-left-in inconsistency) |
| **readTime** | `'[N]分で読める'` (e.g., `'7分で読める'`) |
| **Total FAQs** | 10 (same as EN) |

---

### 🇨🇳 ZH — Chinese (Simplified)

| Aspect | Rule |
|--------|------|
| **Style** | Benefit-focused, direct, practical. Enterprise-oriented where appropriate. Simplified Chinese only (not Traditional). Lead with concrete benefit/limit and who the advice is for — avoid long abstract introductions. |
| **toc tldr** | Title: `'核心要点'` |
| **Decimal** | Keep dots: `4.5 GB` stays `4.5 GB` |
| **Currency** | **Keep USD ($)** — article targets global Chinese audience, not mainland. Format: `$2,299` (Western thousands separator). If a specific article explicitly targets mainland China, convert to CNY (¥) using JD.com / Taobao retail prices with format `¥16,499` (RMB). Default: USD. |
| **Extra FAQs** | None. ZH matches EN count: 10 FAQs. |
| **regionalContext** | COMPLETELY REWRITE (do not translate EN). Three new sections (do not translate from EN): |
| | 1. **中国（数据安全法）**: References China's 2021 Data Security Law, local inference compliance, Qwen2.5 suitability for Chinese enterprises |
| | 2. **亚太地区（数据跨境）**: Data residency frameworks, MLAI (Multi-ASEAN/APAC) compliance patterns |
| | 3. **企业部署**: Finance/medical/legal regulatory compliance for large enterprises (Banks, hospitals, law firms) |
| **schema.author** | `{ '@type': 'Organization', 'name': 'PromptQuorum' }` (ZH convention; override if present as Person) |
| **schema.about[]** | Include (fix known ZH omission) — translate to Chinese |
| **schema.speakable** | Include (fix known ZH omission) |
| **itemListSchema** | Translate `itemListElement[].name` and `.description` to Chinese (fix known EN-left-in inconsistency) |
| **readTime** | `'阅读约[N]分钟'` (e.g., `'阅读约7分钟'`) |
| **Total FAQs** | 10 (same as EN) |

---

### 🇧🇷 PT — Portuguese (Brazilian / pt-BR)

> **RESERVED language.** Only generate when authoring real Brazilian Portuguese content. Target **Brazil (pt-BR)**, NEVER European Portuguese (pt-PT). hreflang and schema.inLanguage MUST output `pt-BR`.

| Aspect | Rule |
|--------|------|
| **Style** | Brazilian Portuguese only. **você** form (never *tu* as subject pronoun, never Portugal's *tu* conjugations). Smart-colleague tone, same register as English original. Professional but accessible. |
| **toc tldr** | Title: `'Pontos principais'` |
| **Decimal** | Keep dots in tech specs: `4.5 GB` stays `4.5 GB`. (Brazilian prose uses comma decimals, but keep tech/spec numbers as dots for consistency with the source.) |
| **Tech terminology** | Keep established tech terms in English: GPU, VRAM, LLM, API, framework, prompt engineering, token, fine-tuning, RAG, etc. Do NOT force-translate universally understood tech terms. |
| **Vocabulary** | Brazilian spelling/vocabulary, NEVER European: `arquivo` (not *ficheiro*), `tela` (not *ecrã*), `gerenciar` (not *gerir*), `baixar` (not *transferir/descarregar*), `placa de vídeo` (not *placa gráfica*), `usuário` (not *utilizador*), `computador`/`PC`. Brand names (PromptQuorum, Ollama, LM Studio) unchanged. |
| **Currency** | Hardware articles: Brazil → BRL (`R$`) with locally researched retail prices (the BR market has heavy import tax, so prices are NOT USD conversions — research real BR retail, e.g. Kabum, Pichau, Mercado Livre). Format: `R$ 2.499` (Brazilian thousands = dot, decimal = comma). If BR retail price unavailable, keep USD with note `"Os preços no Brasil podem variar bastante devido a impostos de importação."` |
| **Extra FAQs** | None by default. PT matches EN count: 10 FAQs. |
| **regionalContext** | Skip for pure technical/PE articles (same rule as hardware guides). Only add if the article is fundamentally ABOUT compliance or data governance — then reference Brazil's **LGPD** (Lei Geral de Proteção de Dados) and the **ANPD** (Autoridade Nacional de Proteção de Dados), explaining how local inference satisfies data-residency/processing obligations. Do NOT reference GDPR/EU as primary (that's the DE/FR frame). |
| **schema.author** | `{ '@type': 'Person', 'name': 'Hans Kuepper' }` |
| **schema.inLanguage** | `'pt-BR'` (NOT `'pt'`) — across all schema types. |
| **readTime** | `'[N] min de leitura'` (e.g., `'7 min de leitura'`) |
| **Total FAQs** | 10 (same as EN) |

---

### 🇸🇦 AR — Arabic (Modern Standard Arabic / RTL)

> **RESERVED language.** Only generate when authoring real Arabic content. Arabic is **right-to-left (RTL)** — handle bidirectional text carefully (see RTL rule below).

| Aspect | Rule |
|--------|------|
| **Style** | Modern Standard Arabic (MSA / الفصحى) — formal-neutral, understood across all Arabic markets (Gulf, Levant, North Africa). Smart-colleague tone, same register as English original. Avoid dialect (no Egyptian/Gulf colloquialisms). |
| **Direction (RTL)** | Arabic text is RTL. **Keep Latin technical terms, model names, CLI commands, and numbers LTR within the RTL flow** (GPU, VRAM, LLM, Ollama, `Q4_K_M`, `ollama run`, version numbers stay left-to-right). Do not reverse or transliterate them. Ensure the rendering layer applies `dir="rtl"` to AR content and isolates LTR runs (e.g. `&lrm;`/bidi isolation) so commands don't visually scramble. |
| **toc tldr** | Title: `'النقاط الرئيسية'` |
| **Decimal** | Keep dots in tech specs: `4.5 GB` stays `4.5 GB`. Use Western Arabic numerals (0-9), not Eastern Arabic (٠-٩), for tech specs and consistency with source. |
| **Tech terminology** | Keep established tech terms in Latin script: GPU, VRAM, LLM, API, framework, token, fine-tuning, RAG, prompt engineering. Do NOT transliterate universally understood tech terms into Arabic script. |
| **Glyph width / length** | Arabic glyphs are visually wider — meta tags and TOC labels run long. Favor concise phrasing; see geo-meta-optimizer length targets for AR. |
| **Currency** | Hardware articles: Gulf markets → USD by default (widely used in Gulf tech retail), OR local currency where an article targets a specific market (SAR `ر.س`, AED `د.إ`). Format with Western numerals. If unsure, keep USD with a note that local prices vary by market and import duties. |
| **Extra FAQs** | None by default. AR matches EN count: 10 FAQs. |
| **regionalContext** | Skip for pure technical/PE articles. Only add if the article is fundamentally ABOUT compliance or data governance — then reference **Gulf data-sovereignty** drivers and regional data-protection laws (e.g. Saudi **PDPL**, UAE data-protection law), and the regional push toward sovereign/Arabic-first AI (Jais, ALLaM, Falcon) where relevant. Frame local inference as keeping data within national/regional borders. |
| **schema.author** | `{ '@type': 'Organization', 'name': 'PromptQuorum' }` (AR convention; override if present as Person) |
| **schema.inLanguage** | `'ar'` — across all schema types. |
| **readTime** | `'[N] دقائق للقراءة'` (e.g., `'7 دقائق للقراءة'`) |
| **Total FAQs** | 10 (same as EN) |

---

## Currency Localization (MANDATORY)

**Why this exists:** USD prices in hardware/software articles (Mac mini, Framework Desktop, RTX 5060 Ti, etc.) are meaningless to DE/FR/JA readers. EU/JP retail prices are NOT simple rate conversions of USD — Apple, AMD, NVIDIA each price independently per region including local VAT and import costs. Example: Mac mini M4 Pro 64 GB is $2,299 in the US, but 2.499 € on Apple DE and ¥358,800 on Apple JP. A "rate-converted" 2.138 € would be wrong.

### Rule (applies to every hardware/software article)

For all `local-llms/*` articles that mention prices (GPUs, mini PCs, laptops, full builds, RAM, SSDs, fans, etc.), **prices in DE/FR blocks MUST be in EUR with locally researched values**, and **JA block prices MUST be in JPY with locally researched values**. ES → EUR (Spain) / USD (LatAm). **PT block prices MUST be in BRL (R$) with locally researched Brazilian retail values** (heavy import tax — never a USD conversion). AR → USD default (or SAR/AED for market-specific articles). ZH stays in USD (global Chinese audience). EN stays in USD.

### Research Sources (by language)

**DE — German (Euro):**
- Apple products: [apple.com/de](https://www.apple.com/de/shop/buy-mac) or [themacindex.com/de](https://themacindex.com/de/)
- NVIDIA GPUs: [geizhals.de](https://geizhals.de), [amazon.de](https://www.amazon.de), [mindfactory.de](https://www.mindfactory.de)
- AMD/Intel CPUs, RAM, SSDs: [geizhals.de](https://geizhals.de)
- Framework Desktop: [frame.work](https://frame.work) (EU shipping; they list EUR prices at checkout for EU addresses)
- Used hardware: [ebay.de](https://www.ebay.de)

**FR — French (Euro):**
- Apple: [apple.com/fr](https://www.apple.com/fr/shop/buy-mac)
- GPUs/components: [ldlc.com](https://www.ldlc.com), [amazon.fr](https://www.amazon.fr), [rueducommerce.fr](https://www.rueducommerce.fr)
- Framework Desktop: [frame.work](https://frame.work) (EU)
- Used hardware: [ebay.fr](https://www.ebay.fr)

**JA — Japanese (Yen):**
- Apple: [apple.com/jp](https://www.apple.com/jp/shop/buy-mac) or [themacindex.com/jp](https://themacindex.com/jp/)
- GPUs/components: [kakaku.com](https://kakaku.com), [amazon.co.jp](https://www.amazon.co.jp), [yodobashi.com](https://www.yodobashi.com), [biccamera.com](https://www.biccamera.com)
- Framework Desktop: [frame.work](https://frame.work) (verify JP shipping — may not be formally available)

**ZH — Simplified Chinese (USD default):**
- Keep USD since audience is global Chinese, not mainland. Mainland-only articles would use [jd.com](https://www.jd.com) (CNY).

### Format Reference

| Language | Currency | Symbol placement | Thousands | Example |
|---|---|---|---|---|
| EN | USD | `$` before | `,` | `$2,299` |
| DE | EUR | `€` after with space | `.` | `2.499 €` |
| ES | EUR/USD | dual market — see ES rules | `,` | `€299` or `~€350 (España) / ~$400 USD` |
| FR | EUR | `€` after with thin space | thin space | `2 499 €` |
| JA | JPY | `¥` before | `,` | `¥358,800` |
| ZH | USD | `$` before | `,` | `$2,299` |

### Fallback (when local price cannot be verified)

If a product is not sold in the target region (e.g., some US-only enterprise hardware, or Framework Desktop shipping not yet available to Japan), prefix the converted-estimate with a hedging word:
- DE: `ca. 1.999 €` (circa)
- FR: `env. 1 999 €` (environ)
- JA: `約¥330,000` (yaku)

Never fabricate precise prices. If even an estimate is unreliable, keep USD with a note: `$1,999 (nicht in EU erhältlich)` / `$1,999 (non disponible en EU)` / `$1,999（日本非対応）`.

### Enforcement During /geo-translation

When running `/geo-translation` on any hardware/software article:
1. In Step 1 (Pre-Audit), explicitly report the number of `$` price occurrences in the EN source.
2. In Step 2 (Localization Plan), list each USD price with its researched target-currency equivalent and source URL. Require user approval before proceeding.
3. In Step 4 (Quality Review), confirm: "✅ 0 USD prices remain in [LANG] block (X prices converted, Y sourced from [retailer])".
4. In Step 6 (Implement), verify via `grep -c '\$[0-9]'` in the language block = 0.

---

## Interaction Loop Example

```
📖 Article: how-to-install-ollama (local-llms)
🇬🇧 EN: 9 sections, 10 FAQs, 4 schema types
🇫🇷 FR: none

📋 Localization Plan — FR

Style:        Formal Vous-form, 10–15% shorter
TOC:          [...]
FAQs:         10 EN → 10 FR (no additions)
Regional:     CNIL sentence added
Schemas:      All with /fr/path, inLanguage: 'fr'
Meta:         seoTitle 48–58, metaDescription 140–155

Proceed? → yes

🔄 Translating...
  ✓ Meta tags
  ✓ TOC (9 entries)
  ✓ [tldr][what-is][requirements]...[relatedReading][sources]
  ✓ Schemas ×4

✅ Generation complete. 2,847 words. Next: Quality review.

🔍 Quality Review — FR

Meta Tags: seoTitle (52) "Installer Ollama : Guide complet..." ✅
           metaDescription (151) "Installez Ollama..." ✅

Content:   ✅ All 9 sections
           ✅ No English prose
           ✅ Technical terms preserved
           ✅ /fr/path on all internal links
           ⚠️ sources.item[1] description — shortened 3 words

Schemas:   ✅ All 4 types with inLanguage: 'fr'
           ✅ Normalized author/publisher

Localization: ✅ Vous-form, CNIL context added
              ⚠️ sources.item[1] — verify translation matches URL

Issues:
1. ⚠️ sources.item[1] — shortened translation, verify semantics

Approve translation?
→ fix 1 (re-translate sources item)
→ yes (implement)

--- User inputs: fix 1 ---

🔄 Re-translating sources.item[1]...

sources.item[1] (OLD):
'Documentation officielle de Ollama — Commandes, configuration, support'

sources.item[1] (NEW):
'Documentation officielle d'Ollama — Commandes de gestion, fichiers de configuration, support technique et options avancées'

Quality check: ✅ Semantically complete, 161 chars

Issues:
1. ✅ FIXED

Approve translation?
→ yes (implement)

--- User inputs: yes ---

✅ Implementing...
  → Inserting FR block into content.ts after EN
  → Running build...

Build complete. 0 TypeScript errors. ✅

✅ Commit: "feat: Add FR (French) translation for how-to-install-ollama article"

Ready to push? (git push / no)
```

---

## Verification Checklist

After **Step 6 (Implement)** succeeds, verify:

- [ ] `npm run build` shows 0 TypeScript errors
- [ ] Target language renders at `/[lang]/path` URL (e.g., `/fr/local-llms/article`)
- [ ] All text in sections is in target language (no English)
- [ ] All schema types include `inLanguage: 'XX'` and `url: '.../{lang}/path'`
- [ ] Code blocks remain untouched (English OK inside code)
- [ ] Technical terms preserved: `Ollama`, `VRAM`, `Q4_K_M`, `GPU`, etc.
- [ ] Internal links use `/[lang]/path` format
- [ ] Commit message follows: `feat: Add [LANG] ([Language Name]) translation for [slug]`
