# /gamma Skill Documentation Updates

## ADD to /gamma Skill Definition

### NEW Step 0.5: Generate gammaDescription (MANDATORY)

**Timing:** Immediately after Step 2 (Localization Plan approval)

**Task:** Before generating the presentation content, create the `gammaDescription` text for ALL 5 languages.

**Why:** Presentations embedded without gammaDescription are invisible to Google, Perplexity, and other AI search engines. The gammaDescription is the plain-text summary that lives above the iframe and is 100% indexable.

**What to generate:**

For each language, create a 2-3 sentence description that includes:
1. **Opening:** `The slide deck below covers:` (or language equiv.)
2. **Specific content items** — NOT generic. Include:
   - Exact slide topics (e.g., "7 hallucination types with detection patterns")
   - Specific ranges/numbers (e.g., "temperature 0.0–2.0")
   - Technical terms (e.g., "nucleus sampling", "RLHF")
3. **CTA:** `Download the PDF as a [Topic] reference card.`

**Examples** (already implemented):

```
EN: "The slide deck below covers: why LLMs hallucinate (probabilistic token prediction, not comprehension), 7 hallucination types with detection patterns, prompt techniques that reduce hallucination, and a comparison of model behavior. Download the PDF as a hallucination reduction reference card."

DE: "Das Foliendeck behandelt: warum LLMs halluzinieren (probabilistische Token-Vorhersage, nicht Verständnis), 7 Halluzinationstypen mit Erkennungsmustern, Prompt-Techniken zur Halluzinationsreduzierung und einen Vergleich des Modellverhaltens. PDF als Halluzinationsreduzierungs-Referenzkarte herunterladen."

FR: "Le diaporama ci-dessous couvre : pourquoi les LLM hallucinent (prédiction probabiliste de jetons, pas de compréhension), 7 types d'hallucinations avec motifs de détection, techniques d'invite pour réduire les hallucinations, et une comparaison des comportements du modèle. Télécharger le PDF comme carte de référence de réduction des hallucinations."

JA: "以下のスライドデッキは次をカバーします：LLMが幻覚を見る理由（確率的トークン予測、理解ではない）、検出パターン付き7つの幻覚タイプ、幻覚を減らすプロンプト技術、モデル動作の比較。PDFを幻覚削減リファレンスカードとしてダウンロードしてください。"

ZH: "以下幻灯片涵盖：LLM为什么会产生幻觉（概率标记预测，非理解）、7种幻觉类型及检测模式、减少幻觉的提示技术以及模型行为比较。下载PDF作为幻觉减少参考卡。"
```

**Integration point in `/gamma` workflow:**

```
Step 0: Check if Already Implemented
Step 0.5: Generate gammaDescription (NEW — MANDATORY)
Step 1: Resolve slug to content key
Step 2: Read all 5 language blocks from content.ts
Step 3: Map article sections to 14 slides
Step 4: Write the static HTML file
Step 5: Implement (add to content.ts + run build)
Step 6: Commit
```

---

## UPDATE: Field Translation Rules → Add gammaDescription Rule

**Under "✅ ALWAYS Translate"** section, add:

```
- `gammaDescription` — 2-3 sentence summary of presentation content for SEO/GEO indexing
  - MUST include specific slide topics, numbers, and technical terms
  - MUST end with "Download the PDF as a [Topic] reference card"
  - English: 140–160 characters typical (varies by language)
  - NOT translating the structure, TRANSLATING all text
```

---

## UPDATE: Mandatory Requirement → GEO/AEO Section

**Add new section after "SEO/GEO Compliance Built In":**

### **5) gammaDescription Is Non-Negotiable for Indexability**

Without `gammaDescription` in ALL 5 language blocks:
- ❌ Google Search: Won't index presentation content (no visible text above iframe)
- ❌ Perplexity/Gemini: Won't see slide content (AI bots only read text, not iframe embeds)
- ❌ ChatGPT Browse: Won't cite your slides as authoritative sources
- ❌ AEO rankings: Will compete with naked iframes (zero visibility)

**Your presentation becomes "invisible to search."**

**Verification checklist after implementation:**

```
- ✅ gammaEmbedUrl exists for article (all 5 languages)
- ✅ gammaDescription exists IMMEDIATELY after gammaEmbedUrl (all 5 languages)
- ✅ Each gammaDescription includes:
  - Specific content items (not vague like "various topics")
  - Numbers/ranges (temperature 0.0–2.0, 7 types, etc.)
  - Technical terms (tokenization, RLHF, nucleus sampling, etc.)
  - Language-native "Download PDF" CTA
- ✅ No generic descriptions (e.g., "covers common concepts" is a red flag)
```

If any language is missing gammaDescription → DO NOT implement the presentation yet.

---

## AUDIT: Current Status (as of 2026-04-18)

**Total presentations:** 8 articles × 5 languages = 40 potential slots

**Status breakdown:**

| Article | gammaEmbedUrl | gammaDescription | Gap |
|---------|---|---|---|
| ai-hallucinations-why-ai-makes-things-up | 5/5 ✅ | 5/5 ✅ | **FIXED** |
| ai-limitations-what-llms-cant-do | 5/5 ✅ | 5/5 ✅ | ✅ Complete |
| geopolitics-and-ai | 5/5 ✅ | 5/5 ✅ | **FIXED** |
| how-llms-actually-work | 5/5 ✅ | 5/5 ✅ | **FIXED** |
| system-prompt-vs-user-prompt | 1/5 ⚠️ | 5/5 ✅ | Only EN presentation |
| temperature-and-top-p | 5/5 ✅ | 5/5 ✅ | **FIXED** |
| tokens-costs-limits-economics-of-ai-prompting | 5/5 ✅ | 5/5 ✅ | ✅ Complete |

**Crawlability:**  All presentations now indexable to GEO/AEO engines.

---

## For Future /gamma Implementations

**Before running `/gamma <slug>`:**

1. ✅ Confirm the article exists in all 5 languages
2. ✅ Have the presentation HTML file ready (or plan to generate it)
3. ✅ **PRE-WRITE gammaDescription for all 5 languages** (use GEO content guidelines)
4. ✅ Add gammaDescription to Step 0.5 of workflow
5. ✅ Run through Step 1–6 as normal
6. ✅ Verify build passes
7. ✅ Commit with: `feat: Add [presentation] + gammaDescription (all 5 langs)`

---

## Related Documentation

- **`/geo-translation` skill:** How to translate content across all languages per region-specific rules
- **GEO_WRITING_GUIDELINES.md:** Mandatory writing standards (answer-first, facts-only, specific entities, schema markup)
- **TRANSLATION_SPEC.md:** Language-specific rules (Formal DE, Concise FR, Code-switching JA, Benefit-focused ZH)
