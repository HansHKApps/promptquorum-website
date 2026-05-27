# Country-Specific Article Localization Plan
**Generated:** 2026-05-27  
**Data source:** GSC export, last 28 days (2026-04-28 → 2026-05-25)  
**Strategy:** Enhance existing article translations with country-specific app/hardware/regulation
content. No new article files — all changes happen inside existing `.ts` article files in the
translated language blocks (`de:`, `ja:`, `zh:`, `fr:`).

---

## Device Context

Mobile has 30× higher CTR than desktop (3.57% vs 0.12%). All country-specific localization
work targets mobile search intent first.

---

## Target Countries (28-day GSC, real data)

| # | Country | Clicks | CTR | Key signal |
|---|---|---|---|---|
| 1 | Japan (JA) | 142 | 0.70% | 4.98% CTR on `/ja/` Android article; Apple Silicon + developer tools = high-value |
| 2 | Germany (DE) | 127 | 0.57% | 0.57% overall; DSGVO/TTS articles spike to 7–9% CTR on localized paths |
| 3 | France (FR) | 125 | 0.86% | Highest overall CTR of named EU countries; Mistral home market |
| 4 | Taiwan (ZH-TW) | 47 | 0.81% | Apple Silicon 7.35% CTR on ZH path; distinct from mainland preferences |
| 5 | Hong Kong (ZH-HK) | 47 | 1.19% | 1.19% CTR; same ZH translations serve this market |

> **Note on mainland China:** Only 22 clicks at 0.18% CTR — the ZH translation opportunity is
> primarily Taiwan + HK, not mainland. Adjust content emphasis accordingly
> (Apple ecosystem > Huawei; App Store > AppGallery).

---

## GSC-Confirmed High-CTR Localized Paths (28 days)

These paths already exist and prove demand — they need better country-specific content:

| URL | Clicks | Impressions | CTR |
|---|---|---|---|
| `/ja/power-local-llm/best-local-llm-apps-android-2026` | 13 | 261 | **4.98%** |
| `/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac` | 4 | 39 | **10.26%** |
| `/ja/local-llms/local-llms-with-vscode-cursor` | 8 | 114 | **7.02%** |
| `/ja/power-local-llm/run-ai-on-tablet-ipad-android` | 2 | 27 | **7.41%** |
| `/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics` | 5 | 133 | **3.76%** |
| `/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts` | 3 | 33 | **9.09%** |
| `/de/power-local-llm/best-local-llm-apps-android-2026` | 7 | 265 | **2.64%** |
| `/de/local-llms/run-qwen-locally-guide-2026` | 4 | 52 | **7.69%** |
| `/zh/local-llms/apple-silicon-vs-nvidia-gpu-local-llm` | 5 | 68 | **7.35%** |
| `/zh/local-llms/apple-silicon-local-llm-guide-2026` | 5 | 150 | **3.33%** |
| `/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay` | 3 | 58 | **5.17%** |
| `/zh/local-llms/best-budget-gpus-local-llm` | 3 | 58 | **5.17%** |

---

## How to Apply a Country Version

In the existing `.ts` article file, inside the translated language block (e.g. `ja:`):
1. Update `seoTitle` and `metaDescription` to name the country.
   - Before (EN): `"Best Local LLM Apps for Android 2026"`
   - After (JA): `"日本向けAndroidローカルLLMアプリ 2026 — Play Store対応・日本語UI完全ガイド"`
2. Add a country-specific H2 section at the end of the `sections` array.
3. Run `npm run validate-translations` after every article edit.

---

## Tier 1 — Adapt Immediately

### 1. `power-local-llm/best-local-llm-apps-android-2026`
- **Current state:** EN only (DE/FR/JA/ZH marked "Coming Soon")
- **GSC signal:** JA path 4.98% CTR; DE path 2.64%; ZH path 2.17% — highest multi-locale
  signals on any single article. EN path only 0.28% on 28K impressions.
- **JA:** PocketPal AI Japanese support; kanji rendering; Japan Play Store region differences
- **ZH (TW/HK):** App Store availability; Qwen-optimized setups; no Huawei angle needed
- **DE:** DSGVO offline network isolation; German-language Ollama setup resources
- **Effort:** High (full translations needed + country section each)

### 2. `local-llms/mlx-vs-ollama-vs-llama-cpp-mac`
- **Current state:** Exists with localized paths (JA 10.26% CTR, ZH 2.86%, FR 5% CTR)
- **GSC signal:** JA is the #1 highest-CTR localized path across the entire site (10.26%)
- **JA:** Apple Silicon dominance in Japan; MLX native advantage on M-series; Japanese Mac
  community benchmarks; Homebrew install for JA users
- **ZH (TW):** Apple Silicon very popular in Taiwan; TSMC/Apple supply chain context; ZH
  benchmark sources
- **FR:** Apple popularity in France; Homebrew vs nix for FR developers
- **Effort:** Low-Medium (paths exist; add country-specific benchmark/setup sections)

### 3. `local-llms/local-llms-with-vscode-cursor`
- **Current state:** JA path has 7.02% CTR (8 clicks, 114 impressions)
- **GSC signal:** JA developer community actively searches this; query "cursor ローカルllm"
  has 8.7% CTR (23 impressions)
- **JA:** VS Code JA localisation + Cursor JA keybindings; popular JA developer communities
  (Zenn, Qiita) as reference; JA-specific Continue.dev config
- **DE:** German developer privacy concerns using Cursor Pro vs local; DSGVO data residency
- **Effort:** Low (add JA country section; DE section)

### 4. `power-local-llm/best-local-llm-apps-android-2026` *(already #1 above)*

### 4. `power-local-llm/local-tts-voice-cloning-piper-coqui-xtts`
- **Current state:** DE path 9.09% CTR (3 clicks, 33 impressions); ZH 1.45%, JA 1.67%
- **GSC signal:** DE is highest CTR of any article path on the site (9.09%)
- **DE:** Piper DE voice models; German TTS quality comparison; DSGVO offline TTS emphasis
- **JA:** VOICEVOX TTS as local alternative; Japanese voice cloning privacy concerns; NHK
  speech synthesis mention
- **ZH (TW):** Mandarin TTS with XTTS v2; Traditional Chinese character pronunciation accuracy
- **Effort:** Low (all langs exist; add country TTS model recommendations per block)

### 5. `power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay`
- **Current state:** EN + DE only; ZH path already has 5.17% CTR (3 clicks, 58 impressions)
- **JA:** Visual Novel crossover; SillyTavern JA character card community; NovelAI comparison
- **ZH (TW/HK):** RisuAI Traditional Chinese support; TW roleplay communities; JA VN imports
- **Effort:** Medium (add JA + ZH translations + country sections)

### 6. `local-llms/multilingual-local-llms`
- **Current state:** All 5 langs; article IS about multilingual use — country sections natural
- **JA:** Japanese tokenization quirks; best JA-trained models; Zenn/Qiita benchmark sources
- **ZH:** Simplified vs Traditional handling; Qwen vs GLM for ZH; TW vs mainland differences
- **DE:** Swiss German / Austrian dialect handling; German grammatical complexity
- **FR:** Québec vs European French; Mistral FR benchmarks
- **Effort:** Low (add one H2 per language block)

---

## Tier 2 — Next Sprint

| Slug | Cluster | Target | Key Content to Add |
|---|---|---|---|
| `local-llms/apple-silicon-vs-nvidia-gpu-local-llm` | local-llms | ZH-TW, JA | ZH: 7.35% CTR already; TW has high Apple adoption; JA: M-series dominates laptop market |
| `local-llms/apple-silicon-local-llm-guide-2026` | local-llms | ZH-TW, JA | ZH: 3.33% CTR; JA: Apple popularity; add JA/ZH local benchmark sources |
| `power-local-llm/run-ai-on-tablet-ipad-android` | power-local-llm | JA | JA path 7.41% CTR; iPad very popular in JA; add JA App Store app availability |
| `power-local-llm/uncensored-local-llm-creative-writing-ethics` | power-local-llm | JA, ZH | JA: 3.76% CTR; query "ローカルllm 探偵なし 小説" = 28.57% CTR; JA fiction writing culture |
| `local-llms/run-qwen-locally-guide-2026` | local-llms | DE | DE path 7.69% CTR; add DSGVO-compliant Qwen setup; offline isolation steps |
| `local-llms/best-local-llm-frontends` | local-llms | JA, ZH | GDPR/METI already mentioned; deepen METI for JA; TW/HK app availability |
| `power-local-llm/voice-assistant-local-mobile-offline` | power-local-llm | JA, ZH | All 5 langs; JA: VOICEVOX pairing; ZH-TW: Mandarin TTS options |
| `local-llms/best-budget-gpus-local-llm` | local-llms | ZH | ZH path 5.17% CTR already; add TW/HK GPU pricing context; AMD export note |
| `local-llms/best-cpu-only-llm` | local-llms | DE, JA | All 5 langs; budget CPUs resonate in DE (Ryzen pricing); JA: CPU inference on MacBook |
| `eu-cloud-gpu-gdpr-2026` | local-llms | DE, FR | DE: Hetzner/Ionos + BSI Grundschutz; FR: OVHcloud as national provider |
| `can-local-llm-help-gdpr` | prompt-bites | DE, FR | DE: DSGVO Article 25 mapping; FR: RGPD equivalent guidance |
| `is-deepseek-gdpr-safe` | prompt-bites | DE, FR | DE: BfDI opinion; FR: CNIL position |
| `gdpr-llm-risk-comparison-2026` | local-llms | DE, FR | Add country-specific risk column per lang block |
| `prompting-across-languages` | prompt-engineering | JA, ZH, DE | JA: keigo prompting; ZH: simplified/traditional consistency |

---

## Tier 3 — Skip For Now

| Slug | Reason |
|---|---|
| `chain-of-thought-prompting` | Pure technique, country-neutral |
| `rtf-framework` | Universal concept |
| `how-much-vram-for-local-llm` | Technical spec, globally consistent |
| `best-cloud-gpu-for-fine-tuning-under-1-per-hour` | USD pricing, global cloud |
| `q4-k-m-vs-q8-0` | No country angle |
| `what-is-prompt-engineering` | Definitional, universal |
| `wechat-local-llm-integration-2026` | Mainland China CTR 0.18%; ZH opportunity is TW/HK |
| All other `prompt-engineering/` technique articles | CoT, tree-of-thought, personas = region-neutral |

---

## Implementation Order (Highest ROI First)

1. **`best-local-llm-apps-android-2026`** — translate DE/JA/ZH + add country section each
   (highest potential, EN-only, proven CTR on existing localized paths)
2. **`mlx-vs-ollama-vs-llama-cpp-mac`** — add JA + ZH country sections (10.26% CTR in JA)
3. **`local-tts-voice-cloning-piper-coqui-xtts`** — add DE + JA + ZH-TW sections (9.09% CTR DE)
4. **`local-llms-with-vscode-cursor`** — add JA + DE sections (7.02% JA CTR, developer audience)
5. **`multilingual-local-llms`** — add one H2 per lang block (~1h each, all langs exist)
6. **`sillytavern-vs-agnai-vs-risuai-roleplay`** — add JA + ZH translations + sections

---

## Validation After Each Article

```bash
npm run validate-translations
```
