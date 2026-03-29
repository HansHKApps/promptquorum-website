# Translation Guide: GPT-Claude-Gemini Article

**Article slug:** `gpt-claude-gemini-which-model`
**Status:** English (en) complete; German (de), French (fr), Japanese (ja), Chinese (zh) need full translation
**File:** `/src/lib/prompt-engineering/content.ts` (lines 7571–7980)

---

## What Needs Translation

The `sections` object contains 28 separate sections with titles, content, bullet points, FAQ questions/answers, table data, and related reading items.

### Section Structure (TypeScript types)

```typescript
sections: {
  [sectionKey: string]: {
    title: string;                    // Section heading
    content?: string | string[];      // Main text (string or array)
    items?: string[];                 // Bullet points
    faqs?: Array<{q: string, a: string}>; // FAQ pairs
    blockquote?: string;              // For recipe examples
    columns?: string[];               // Table headers
    rows?: Array<Record<string, string>>; // Table data
    tableFormat?: boolean;            // True if table should be rendered
    isTldr?: boolean;                 // True for TLDR section
    image?: string;                   // Image path
    imageCaption?: string;            // Caption text
    imagePlaceholder?: boolean;       // True if placeholder image
    numberedItems?: string[];         // Numbered list items
  }
}
```

---

## Translation Checklist by Language

### de (German)

Currently line 7967 shows:
```javascript
de: {
  theme: 'Fundamentals',
  title: 'GPT, Claude oder Gemini: Welches KI-Modell sollten Sie wählen?',
  intro: 'Es gibt kein einzelnes "bestes" KI-Modell für jede Aufgabe...',
  publishDate: '2026-03-23',
  readTime: '12 min Lesezeit',
  sections: {} // ← NEEDS ALL 28 SECTIONS
}
```

**Status:** German title and intro exist, but sections object is empty. All 28 sections must be translated to German.

### fr (French)

Currently line 7968 shows:
```javascript
fr: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-22', readTime: '', sections: {} }
```

**Status:** Title, intro, and readTime are empty. All 28 sections must be translated to French. Provide proper title and intro (refer to English for reference).

### ja (Japanese)

Currently line 7969 shows:
```javascript
ja: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-22', readTime: '', sections: {} }
```

**Status:** Title, intro, and readTime are empty. All 28 sections must be translated to Japanese.

### zh (Chinese Simplified)

Currently line 7970 shows:
```javascript
zh: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-22', readTime: '', sections: {} }
```

**Status:** Title, intro, and readTime are empty. All 28 sections must be translated to Chinese Simplified.

---

## Key Content to Translate

### 1. Title & Intro (required for all languages)

**English Title:**
"GPT, Claude or Gemini: How to Pick the Right AI Model"

**English Intro:**
"No single AI model is best for every task. GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, DeepSeek, and Baidu ERNIE each win on different tasks, geographies, and budgets. This guide gives you a practical decision framework — not another benchmark list."

**Read Time** (varies by language):
- German: "12 min Lesezeit" (already provided)
- French: Provide French translation of "12 min read"
- Japanese: Provide Japanese translation of "12 min read"
- Chinese: Provide Chinese translation of "12 min read"

### 2. All 28 Sections (complete list)

1. **definition** — "No Single 'Best' AI Model — Choose by Task"
2. **decisionMatrix** — "Quick Decision Matrix — Pick Your Starting Model"
3. **tldr** — "Key Takeaways" (marked with isTldr: true)
4. **whatMatters** — "What Matters When Choosing an AI Model?"
5. **gptSection** — "When Should You Use GPT-4o?"
6. **claudeSection** — "When Should You Use Claude 4.6 Sonnet?"
7. **geminiSection** — "When Should You Use Gemini 2.5 Pro?"
8. **coding** — "Which AI model is best for coding in 2026?"
9. **longContext** — "Best LLM for long context or large documents 2026?"
10. **chineseModels** — "How to choose an AI model if you're in China or need low latency?"
11. **comparison** — "GPT-4o vs Claude 4.6 Sonnet vs Gemini 2.5 Pro: Quick comparison"
12. **decisionFramework** — "How Do You Pick the Right AI Model?"
13. **costAndLimits** — "How Do Costs and Token Limits Compare?"
14. **whyMultipleModels** — "Why use multiple AI models instead of one in 2026?"
15. **promptquorumSection** — "How Does PromptQuorum Help You Compare and Route Models?"
16. **promptquorumVisual** — "PromptQuorum Dashboard: See All Models at Once"
17. **practicalRecipes** — "Practical Recipes: 4 Ways to Use PromptQuorum for Model Comparison"
18. **recipe1** — "Recipe 1: Decide Which Model Writes Best for Your Brand Voice"
19. **recipe2** — "Recipe 2: Compare Coding Quality and Cost for Your Backend Stack"
20. **recipe3** — "Recipe 3: Set Up a Global + China Stack (GPT / Claude / Gemini + DeepSeek / ERNIE)"
21. **recipe4** — "Recipe 4: Use Local LLMs for Private Data, Frontier Models for Final Polish"
22. **faq** — "Frequently Asked Questions" (contains 8 Q&A pairs)
23. **relatedReading** — "Related Reading" (7 internal links)
24. **sources** — "Sources & Further Reading" (7 external links)

### 3. Special Translation Notes

**Product/Model Names:** Do NOT translate these (keep as-is in all languages):
- PromptQuorum
- GPT-4o
- GPT-4o mini
- Claude 4.6 Sonnet
- Gemini 2.5 Pro / Flash
- DeepSeek
- Baidu ERNIE
- Ollama
- LM Studio
- LLaMA 3.1
- ChatGPT
- OpenAI
- Anthropic
- Google DeepMind
- Qwen
- Mistral

**Internal Links:** Keep paths as-is but translate surrounding text. Examples:
- EN: `[See token economics in detail.](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)`
- Should become (DE): `[Siehe ausführliche Token-Ökonomie.](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)`

**Key Metrics:** Keep values and units as-is (tokens, costs, percentages):
- "128k tokens" → "128k tokens"
- "$5 input / $15 output per million tokens" → keep same
- "2M tokens", "200k tokens", etc. → keep same

**Currency:** Keep USD notation as-is:
- "$3 input / $15 output per million tokens" → same in all languages

**Tone & Style:**
- Keep answer-first structure (bold opening statement, then explanation)
- Preserve all bold formatting (**text**)
- Keep all internal cross-references intact
- Translate "mainland China" consistently across all sections

---

## File Location & Format

**Source file:** `/Users/hanskuepper/promptquorum-website/src/lib/prompt-engineering/content.ts`

**Article object starts:** Line 7571
```typescript
'gpt-claude-gemini-which-model': {
  en: { ... },
  de: { ... },
  fr: { ... },
  ja: { ... },
  zh: { ... },
},
```

**Sections template reference:** `/Users/hanskuepper/promptquorum-website/gpt-claude-gemini-sections-TEMPLATE.md`

---

## Validation Checklist

After translation for each language, verify:

- [ ] `title` field is populated and matches article topic
- [ ] `intro` field is populated (2-3 sentences describing the article)
- [ ] `readTime` field is translated (e.g., "12 min Lesezeit" for German)
- [ ] All 28 sections in `sections: {}` object are populated
- [ ] No section has empty `title` string
- [ ] All `content` fields (string or array) are translated
- [ ] All `items` arrays have translations
- [ ] All table `columns` and `rows` have translations
- [ ] FAQ `faqs` array: all `q` (question) and `a` (answer) fields are translated
- [ ] All `blockquote` fields in recipes are translated
- [ ] `relatedReading` items text is translated (keep links as-is)
- [ ] `sources` items text is translated (keep links as-is)
- [ ] Product/model names are NOT translated (PromptQuorum, GPT-4o, etc.)
- [ ] Internal links retain their URL paths unchanged
- [ ] No TypeScript syntax errors (trailing commas, brackets, quotes)

---

## Example: One Translated Section (German)

Here's what a translated section should look like:

**English (original):**
```javascript
tldr: {
  title: 'Key Takeaways',
  content: '**Different models excel at different tasks — GPT-4o dominates tool integration, Claude excels at writing, Gemini handles long documents best, and DeepSeek/ERNIE are required for China.**',
  isTldr: true,
  items: [
    '**GPT-4o:** tools + ecosystem. Best for multi-agent workflows, tool calling, and the most extensive third-party integrations.',
    '**Claude 4.6 Sonnet:** careful reasoning + writing. Best for reports, analyses, code reviews, and enterprise safety requirements.',
    // ... (6 more items)
  ],
}
```

**German translation (example):**
```javascript
tldr: {
  title: 'Wichtigste Erkenntnisse',
  content: '**Unterschiedliche Modelle glänzen bei verschiedenen Aufgaben — GPT-4o dominiert bei Tool-Integration, Claude bei Schreiben, Gemini bei langen Dokumenten und DeepSeek/ERNIE sind für China erforderlich.**',
  isTldr: true,
  items: [
    '**GPT-4o:** Tools + Ökosystem. Am besten für Multi-Agent-Workflows, Tool-Aufrufe und die umfassendsten Drittanbieter-Integrationen.',
    '**Claude 4.6 Sonnet:** sorgfältiges Reasoning + Schreiben. Am besten für Berichte, Analysen, Code-Reviews und unternehmensweite Sicherheitsanforderungen.',
    // ... (6 more items in German)
  ],
}
```

---

## Next Steps

1. Translate all sections for **de** (German) — template provided
2. Translate all sections for **fr** (French) — template provided
3. Translate all sections for **ja** (Japanese) — template provided
4. Translate all sections for **zh** (Chinese Simplified) — template provided
5. Validate all 4 language variants against checklist above
6. Test on dev server (`npm run dev`) to ensure no syntax errors
7. Verify OG image generation works for all 5 languages: `/?lang=de`, `/?lang=fr`, `/?lang=ja`, `/?lang=zh`

---

## Reference Links

- **GEO Writing Guidelines:** `/docs/GEO_WRITING_GUIDELINES.md` — apply to all translations
- **Article in code:** `/src/lib/prompt-engineering/content.ts` (lines 7571–7980)
- **Template reference:** `/gpt-claude-gemini-sections-TEMPLATE.md` (this project)
- **Translation status:** All other articles follow same pattern in content.ts

