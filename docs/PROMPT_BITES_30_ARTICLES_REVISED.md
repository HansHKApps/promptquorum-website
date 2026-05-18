# PROMPT BITES — REVISED 30 ARTICLES (Mobile-First Scored)
## PromptQuorum · May 2026

---

## MOBILE FITNESS SUMMARY

Original 30 articles scored 3.2/5 average mobile fitness.
After 10 swaps: **4.1/5 average** — every article now matches a proven mobile query pattern.

| Mobile pattern | Articles using it | Why it works on mobile |
|---|---|---|
| "Best X for Y constraint" | 14 articles | Short query, one recommendation, done |
| "2-way comparison (X vs Y)" | 6 articles | Simple choice, fits one screen |
| "Definition lookup (what is X)" | 3 articles | Quick reference, < 30 seconds |
| "Yes/No + Because" | 3 articles | Binary answer, voice-searchable |
| "One-number answer" | 4 articles | The number IS the answer |

**Target:** Position 5, Mobile CTR 8–10%

**What proven data tells us works:**
- "best local llm for 12gb vram" → 21% CTR at position 6.6
- "rtx 3060 12gb llm" → 21% CTR at position 8.6
- "best cpu-only llm" → 25% CTR at position 4.8
- "rx6800 llm" → 12.5% CTR at position 8.6
- "best moe model for coding" → 11% CTR (3 clicks from 27 impressions)

All proven converters share: short query, specific constraint, "best for" pattern.
All 30 articles below follow these patterns.

---

## THE REVISED 30 ARTICLES

### Cluster A: Quantization & VRAM (7 articles)

**A1** `/prompt-bites/how-much-vram-for-local-llm`
- **H1:** How Much VRAM Do You Need for a Local LLM?
- **Mobile pattern:** One-number answer
- **Target queries:** "how much vram for local llm" (6 imp), absorbs the 6,736-imp long query by answering it better and shorter
- **Parent:** `/local-llms/how-much-vram-local-llm`
- **Mobile score:** 4/5 (reframed from 9-word query to 8-word mobile H1)
- **Brief:** Decision tree: 4 GB → Phi-4/Gemma 2B. 6 GB → Llama 3 8B Q4. 8 GB → Mistral 7B Q5. 12 GB → Qwen 14B Q4. 16+ GB → 70B Q4 partial. One 3-column table, done.

**A2** `/prompt-bites/what-is-q4-k-m-quantization`
- **H1:** What Is Q4_K_M Quantization?
- **Mobile pattern:** Definition lookup
- **Target queries:** "q4_k_m" (481 imp, 1 click), "what is q4_k_m" (40 imp), "q4_k_m quantization" (103 imp)
- **Parent:** `/local-llms/quantization-levels-comparison`
- **Mobile score:** 5/5
- **Brief:** Q=quantized, 4=4-bit, K=k-quant, M=medium. One sentence definition. One table: Q4_K_S vs Q4_K_M vs Q5_K_M — size, quality, speed. "Use Q4_K_M as your default."

**A3** `/prompt-bites/q4-k-m-vs-q8-0`
- **H1:** Q4_K_M vs Q8_0: Which Should You Pick?
- **Mobile pattern:** 2-way comparison
- **Target queries:** "q4_k_m vs q8_0" (47 imp), "q8_0 vs q4_k_m" (27 imp)
- **Parent:** `/local-llms/quantization-levels-comparison`
- **Mobile score:** 5/5
- **Brief:** Q4_K_M if ≤8 GB VRAM. Q8_0 if 12+ GB. One comparison table. Verdict in 2 sentences.

**A4** `/prompt-bites/best-ollama-models-rtx-3060-12gb`
- **H1:** Best Ollama Models for RTX 3060 12 GB?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best ollama models for rtx 3060 12gb 2026" (72 imp), "rtx 3060 12gb llm" (14 imp, 3 clicks, 21% CTR)
- **Parent:** `/local-llms/best-gpus-for-local-llms`
- **Mobile score:** 5/5 — PROVEN converter
- **Brief:** Top 5 models that fit 12 GB. Table: model, quantization, VRAM used, speed. Verdict: Llama 3 8B Q5_K_M for general, Qwen-Coder 14B Q4 for code.

**A5** `/prompt-bites/best-ollama-models-4gb-vram`
- **H1:** Best Ollama Models for 4 GB VRAM?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best ollama models for 4gb vram 2026" (49 imp), "best ollama models for 4gb ram 2026" (20 imp)
- **Parent:** `/local-llms/fastest-local-llms-low-end-pcs`
- **Mobile score:** 5/5
- **Brief:** Honest: 4 GB is tight. Phi-4 Mini Q4, Gemma 2B, SmolLM 1.7B. What fits vs what barely loads. Table: model, actual VRAM, speed, verdict.

**A6** `/prompt-bites/how-much-ram-for-7b-model`
- **H1:** How Much RAM Does a 7B Model Need?
- **Mobile pattern:** One-number answer
- **Target queries:** "small 7b model q4 memory 4-5gb rule of thumb" (802 imp — reframed to mobile H1)
- **Parent:** `/local-llms/how-much-vram-local-llm`
- **Mobile score:** 4/5 (reframed)
- **Brief:** Rule: 7B × Q4 ≈ 5–6 GB total (model + overhead). First sentence: "A 7B model at Q4 needs 5–6 GB of VRAM." Formula for quick math.

**A7** `/prompt-bites/vram-for-70b-model`
- **H1:** How Much VRAM for a 70B Model?
- **Mobile pattern:** One-number answer
- **Target queries:** "vram requirements for 70b llm q4 quantization" (76 imp), "hardware requirements for running 70b llm locally" (40 imp)
- **Parent:** `/local-llms/run-70b-models-24gb-vram`
- **Mobile score:** 4/5
- **Brief:** ~40 GB at Q4_K_M. Options: dual 3090, M5 Max 128 GB, cloud. Table: hardware, cost, speed.

---

### ★ NEW — A8 `/prompt-bites/best-local-llm-6gb-vram`
- **H1:** Best Local LLM for 6 GB VRAM?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best local llm for 6gb vram 2026" (36 imp), "best ollama models for 6gb vram 2026" (29 imp)
- **Parent:** `/local-llms/how-much-vram-local-llm`
- **Mobile score:** 5/5
- **Brief:** 6 GB = RTX 3050/4050 or 16 GB MacBook territory. Top 3: Llama 3 8B Q4_K_M, Phi-4 Q4_K_M, Mistral 7B Q4_K_S. Table: model, VRAM used, speed, best for.
- **Replaces:** Old A8 (llama.cpp VRAM table — desktop reference)

---

### Cluster B: Ollama (5 articles)

**B1** `/prompt-bites/ollama-latest-version`
- **H1:** What Is the Latest Ollama Version?
- **Mobile pattern:** Definition lookup / one-number answer
- **Target queries:** "what is the latest version of ollama" (105 imp), "ollama latest version may 2026" (465 imp)
- **Parent:** `/local-llms/local-llm-model-updates-2026`
- **Mobile score:** 4/5
- **Brief:** Living page. "As of May 2026, Ollama version X.Y.Z." Updated monthly. Top 3 changes. How to update command.

**B2** `/prompt-bites/best-ollama-models-right-now`
- **H1:** Best Ollama Models Right Now?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best ollama models may 2026" (277 imp), "current best ollama models" (110 imp)
- **Parent:** `/local-llms/top-open-source-models-ollama`
- **Mobile score:** 4/5
- **Brief:** Living page. Top 5 overall + top 3 coding. Table: model, size, best for. Updated monthly.

**★ NEW — B3** `/prompt-bites/best-ollama-models-cpu-only`
- **H1:** Best Ollama Models for CPU Only?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best ollama models for cpu only 2026" (26 imp), "best cpu-only llm" (8 imp, 2 clicks, 25% CTR)
- **Parent:** `/local-llms/best-cpu-only-llm`
- **Mobile score:** 5/5 — targets PROVEN converter pattern
- **Brief:** CPU means no GPU. Best: Phi-4 Mini (fast), Llama 3 8B Q4 (quality), Gemma 2B (tiny). Table: model, RAM needed, speed on CPU, verdict.
- **Replaces:** Old B3 (new Ollama models monthly — desktop changelog)

**B4** `/prompt-bites/can-you-run-qwen3-on-ollama`
- **H1:** Can You Run Qwen 3 on Ollama?
- **Mobile pattern:** Yes/No + Because
- **Target queries:** "ollama library qwen3 models 2026" (71 imp), "ollama library qwen3 model sizes" (69 imp)
- **Parent:** `/local-llms/run-qwen-locally-guide-2026`
- **Mobile score:** 4/5 (reframed from reference to yes/no)
- **Brief:** "Yes — Ollama supports all Qwen 3 sizes from 0.6B to 72B." Table: size, VRAM at Q4, recommended hardware.

**B5** `/prompt-bites/which-ollama-models-support-vision`
- **H1:** Which Ollama Models Support Vision?
- **Mobile pattern:** Feature check
- **Target queries:** "ollama vision models list 2026" (110 imp)
- **Parent:** `/local-llms/multimodal-local-llms`
- **Mobile score:** 4/5
- **Brief:** Complete list: LLaVA, Gemma 3, Qwen-VL, etc. Table: model, size, image types, quality. One sentence per model.

---

### Cluster C: Tool Comparisons — ALL 2-WAY (5 articles)

Every 3-way comparison has been swapped for a 2-way comparison.
2-way fits one mobile screen. 3-way requires scrolling and mental juggling.

**★ NEW — C1** `/prompt-bites/qwen-coder-vs-deepseek-coder`
- **H1:** Qwen Coder vs DeepSeek Coder: Which Is Better?
- **Mobile pattern:** 2-way comparison
- **Target queries:** "qwen2.5-coder vs deepseek-coder 2026" (34 imp), "qwen2.5-coder vs deepseek-coder-v2" (33 imp)
- **Parent:** `/local-llms/qwen-coder-vs-deepseek-mistral-local-2026`
- **Mobile score:** 5/5
- **Brief:** Head-to-head: coding benchmark, VRAM, speed, tool-calling support. Verdict: Qwen for Python/TS, DeepSeek for broader language coverage.
- **Replaces:** Old C1 (LM Studio API guide — desktop)

**★ NEW — C2** `/prompt-bites/ollama-vs-lm-studio`
- **H1:** Ollama vs LM Studio: Which Should You Pick?
- **Mobile pattern:** 2-way comparison
- **Target queries:** "ollama vs lm studio comparison 2026" (47 imp), combined 2-way queries ~200+ imp
- **Parent:** `/local-llms/ollama-vs-lm-studio`
- **Mobile score:** 5/5
- **Brief:** Ollama = CLI/developer. LM Studio = GUI/beginner. One table: feature, Ollama, LM Studio. "If you use terminal, Ollama. If you want a GUI, LM Studio."
- **Replaces:** Old C2 (3-way comparison — desktop)

**C3** `/prompt-bites/jan-vs-lm-studio`
- **H1:** Jan vs LM Studio: Which Is Better?
- **Mobile pattern:** 2-way comparison
- **Target queries:** "jan vs lm studio" (110 imp, 1 click), "jan.ai vs lm studio 2026" (97 imp)
- **Parent:** `/local-llms/lm-studio-vs-jan-ai`
- **Mobile score:** 5/5
- **Brief:** Head-to-head table. Jan = open source, extensible. LM Studio = polished GUI, bigger model library.

**★ NEW — C4** `/prompt-bites/best-local-llm-apps-android`
- **H1:** Best Local LLM Apps for Android?
- **Mobile pattern:** Best-for-constraint (on a MOBILE device!)
- **Target queries:** "best local llm apps for android 2026" (63 imp, pos 2.5), "best llm for android" (1 imp, 1 click, 100% CTR)
- **Parent:** `/power-local-llm/best-local-llm-apps-android-2026`
- **Mobile score:** 5/5 — literally a mobile query about mobile
- **Brief:** Top 3 Android apps for running LLMs. Table: app, models supported, RAM needed, offline?, verdict.
- **Replaces:** Old C4 (LM Studio system requirements — desktop)

**★ NEW — C5** `/prompt-bites/best-frontend-for-ollama`
- **H1:** Best Frontend for Ollama?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best frontend for ollama 2026" (25 imp, pos 3.0), "llm frontend" (9 imp, 1 click)
- **Parent:** `/local-llms/best-local-llm-frontends`
- **Mobile score:** 5/5
- **Brief:** Top 3: Open WebUI, SillyTavern, Jan. Table: frontend, features, best for. "Start with Open WebUI."
- **Replaces:** Old C5 (LM Studio monthly update — desktop)

---

### Cluster D: Model Comparisons — ALL 2-WAY (4 articles)

**★ NEW — D1** `/prompt-bites/qwen-14b-vs-llama-8b`
- **H1:** Qwen 14B vs Llama 3 8B: Which Runs Better Locally?
- **Mobile pattern:** 2-way comparison
- **Target queries:** Absorbs part of the 9,335-imp 3-way query by answering the most common 2-way matchup
- **Parent:** `/local-llms/qwen-vs-llama-vs-mistral`
- **Mobile score:** 5/5
- **Brief:** Qwen 14B = better quality but needs 10+ GB. Llama 8B = fits 6 GB, faster. Table: model, VRAM, benchmark, speed, verdict.
- **Replaces:** Old D1 (3-way benchmark — desktop)

**D2** `/prompt-bites/best-14b-models-coding`
- **H1:** Best 14B Model for Coding?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best 14b local models 2025 coding general use" (1,909 imp)
- **Parent:** `/local-llms/best-local-llms-for-coding`
- **Mobile score:** 4/5
- **Brief:** Qwen 2.5 14B leads. Table: model, VRAM at Q4, coding benchmark, verdict.

**★ NEW — D3** `/prompt-bites/best-mini-pc-for-local-llm`
- **H1:** Best Mini PC for Running Local LLMs?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best mini pc for running local llms 2026" (30 imp, pos 7.6)
- **Parent:** `/local-llms/best-mini-pcs-local-llm`
- **Mobile score:** 5/5
- **Brief:** Top 3: Mac Mini M4 Pro, Beelink with RTX, Intel NUC. Table: PC, GPU/APU, max model size, price. Quick verdict.
- **Replaces:** Old D3 (DeepSeek GGUF sizes — desktop)

**D4** `/prompt-bites/best-moe-models-local-coding`
- **H1:** Best MoE Model for Local Coding?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "best moe model for coding" (19 imp, 1 click), "best moe llm models" (3 imp, 1 click)
- **Parent:** `/local-llms/best-local-llms-for-coding`
- **Mobile score:** 5/5 — PROVEN 11% CTR
- **Brief:** What MoE means (1 sentence). Top MoE: DeepSeek-V2, Mixtral 8x7B. Table: model, VRAM, speed, coding score.

---

### Cluster E: Hardware-Specific (3 articles)

**★ NEW — E1** `/prompt-bites/best-local-llm-coding-12gb-vram`
- **H1:** Best Local LLM for Coding with 12 GB VRAM?
- **Mobile pattern:** Best-for-constraint (double constraint: coding + VRAM)
- **Target queries:** "best local llm for coding 12gb vram 2026" (25 imp), "best llm for 3060 12gb" (7 imp, 1 click)
- **Parent:** `/local-llms/best-local-llms-for-coding`
- **Mobile score:** 5/5
- **Brief:** Qwen-Coder 14B Q4_K_M (#1), DeepSeek-Coder-V2-Lite Q4 (#2), Llama 3 8B Q5 (#3). Table: model, VRAM, HumanEval score, speed.
- **Replaces:** Old E1 (Strix Halo Vulkan — desktop debugging)

**E2** `/prompt-bites/best-models-amd-5700x-3070ti`
- **H1:** Best Local LLM for RTX 3070 Ti 8 GB?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "llm models for coders local amd 5700x 3070ti" (84 imp)
- **Parent:** `/local-llms/best-gpus-for-local-llms`
- **Mobile score:** 4/5 (reframed to shorter H1)
- **Brief:** 8 GB VRAM tier. Top 3: Llama 3 8B Q4, Mistral 7B Q5, Phi-4 Q4. Table + recommended Ollama settings.

**E3** `/prompt-bites/radeon-6800m-local-llm`
- **H1:** Can You Run LLMs on a Radeon RX 6800M?
- **Mobile pattern:** Yes/No + Because
- **Target queries:** "radeon 6800m llm" (109 imp), "rx6800 llm" (16 imp, 2 clicks, 12.5% CTR)
- **Parent:** `/local-llms/best-amd-gpus-local-llm`
- **Mobile score:** 5/5 — PROVEN converter
- **Brief:** "Yes — 12 GB VRAM, use Vulkan backend with Ollama." Performance vs RTX 3060. Known issues. One table.

---

### Cluster F: Quick Answers (2 articles)

**F1** `/prompt-bites/can-you-run-rag-on-2gb-ram`
- **H1:** Can You Run RAG on a Laptop with 2 GB RAM?
- **Mobile pattern:** Yes/No + Because
- **Target queries:** "local rag on laptop 2gb ram 2026" (4,838 imp — reframed to mobile yes/no)
- **Parent:** `/local-llms/local-rag-2026`
- **Mobile score:** 4/5 (reframed)
- **Brief:** "No — 2 GB is not enough for useful RAG. Minimum: 8 GB RAM + SSD." What you CAN do: tiny embedding models for search-only. Honest redirect to alternatives.

**★ NEW — F2** `/prompt-bites/best-local-llm-16gb-ram-laptop`
- **H1:** Best Local LLM for a 16 GB RAM Laptop?
- **Mobile pattern:** Best-for-constraint
- **Target queries:** "local llm laptop" (23 imp, 3 clicks, 13% CTR), "laptop for local llm" (22 imp, 2 clicks), "ollama model for 16gb ram" (1 click)
- **Parent:** `/local-llms/local-llm-on-laptop`
- **Mobile score:** 5/5 — PROVEN clicks across multiple queries
- **Brief:** 16 GB unified (MacBook) = Llama 3 8B Q5 or Mistral 7B Q5. 16 GB + discrete GPU = Qwen 14B Q4. Table: laptop type, best model, speed.
- **Replaces:** Old F2 (LLM limitations — desktop conceptual)

---

### Cluster G: Prompt Engineering & General (2 articles)

**G1** `/prompt-bites/co-star-prompt-framework`
- **H1:** What Does CO-STAR Stand For?
- **Mobile pattern:** Definition lookup
- **Target queries:** "co-star prompt framework" (83 imp)
- **Parent:** `/prompt-engineering/co-star-framework`
- **Mobile score:** 4/5
- **Brief:** C=Context, O=Objective, S=Style, T=Tone, A=Audience, R=Response. One sentence per letter. One example.

**G2** `/prompt-bites/best-llm-right-now`
- **H1:** What Is the Best LLM Right Now?
- **Mobile pattern:** Best-for-constraint / one-answer
- **Target queries:** "chatbot arena leaderboard" (65 imp), "best local llm" (66 imp), "most advanced local llm" (2 imp, 1 click)
- **Parent:** `/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model`
- **Mobile score:** 4/5 (reframed from leaderboard to "best right now")
- **Brief:** Living page. #1 overall: [model]. #1 for coding: [model]. #1 local: [model]. Updated monthly. 3-row table. "If you want one answer: [model]."

---

## REVISED SCORECARD

| Score | Count | Articles |
|---|---|---|
| 5/5 (perfect mobile) | 16 | A2, A3, A4, A5, A8★, B3★, C1★, C2★, C3, C4★, C5★, D1★, D3★, D4, E1★, E3 |
| 4/5 (strong mobile) | 12 | A1, A6, A7, B1, B2, B4, B5, D2, E2, F1, G1, G2 |
| 3/5 (borderline) | 2 | F2★, B6 |
| 2/5 or below | 0 | — |

**New average: 4.5/5** (up from 3.2/5)

★ = new replacement article

---

## QUERY PATTERN COVERAGE

| Pattern | Articles | Combined target impressions |
|---|---|---|
| "Best X for Y constraint" | A1, A4, A5, A7, A8, B2, B3, C4, C5, D2, D3, D4, E1, E2, F2 | ~3,500+ |
| "X vs Y" (2-way) | A3, C1, C2, C3, D1 | ~600+ |
| "What is X" (definition) | A2, G1 | ~600+ |
| "Can I / Does X" (yes/no) | B4, E3, F1 | ~5,100+ |
| "What is the best/latest" (one answer) | B1, B5, G2 | ~500+ |
| "How much X" (one number) | A6 | ~800+ |

**Total target impressions across all 30 articles: ~11,100+**
(Excluding the desktop-heavy mega-queries we intentionally dropped)

At position 5 with 8% mobile CTR → **~890 mobile clicks/month** from these pages alone.
At position 5 with 10% mobile CTR → **~1,110 mobile clicks/month**.

---

## PRIORITY ORDER (write these first)

| # | Article | Why first |
|---|---|---|
| 1 | A4 (RTX 3060 12GB) | Proven 21% CTR, highest-confidence converter |
| 2 | E3 (Radeon 6800M) | Proven 12.5% CTR |
| 3 | D4 (MoE models) | Proven 11% CTR |
| 4 | F2★ (16GB laptop) | Proven 13% CTR across laptop queries |
| 5 | B3★ (CPU-only) | Proven 25% CTR |
| 6 | A2 (Q4_K_M) | 481 imp, perfect definition lookup |
| 7 | A5 (4GB VRAM) | Pure mobile constraint query |
| 8 | A8★ (6GB VRAM) | High-density mobile pattern |
| 9 | C3 (Jan vs LM Studio) | 110 imp, clean 2-way comparison |
| 10 | C2★ (Ollama vs LM Studio) | Absorbed from 3-way, clean 2-way |

**Write proven converters first.** They validate the format before you invest in the full 30.
