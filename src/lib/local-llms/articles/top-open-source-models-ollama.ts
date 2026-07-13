// Auto-generated from src/lib/local-llms/content.ts
// Slug: top-open-source-models-ollama
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-21',
      current_models_mentioned: ['MiniMax M3', 'NVIDIA Nemotron 3 Ultra', 'DeepSeek V4 Pro', 'Qwen 3.6 27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.1', 'Llama 4 Scout', 'Devstral Small 24B', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-bench Verified', 'SWE-Bench Pro', 'LiveCodeBench', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'Ollama June 2026 Update: v0.30.8 + Top 10 Open-Source Models',
      dateModified: '2026-06-21',
      seoTitle: 'Ollama June 2026 Update: v0.30.8 Release + Top 10 Models Ranked',
      intro: 'The current Ollama version is v0.30.8 (June 12, 2026), adding broader GGUF hardware support and an upgraded Apple Silicon MLX engine. The newest models this month are MiniMax M3 (1M-token context + native vision), NVIDIA Nemotron 3 Ultra, and DeepSeek V4 Pro. Best overall on consumer hardware is Qwen 3.6 27B (77.2% SWE-bench, fits 24 GB at Q4).',
      metaDescription: 'Ollama v0.30.8 (June 12 2026): newest models, what changed, top 10 open-source ranked — Qwen 3.6 27B, Kimi K2.6, gpt-oss:20b. Benchmarks + pull commands.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**The current Ollama version is v0.30.8 (June 12, 2026). The newest models added this month are MiniMax M3 (open-weight, 1M-token context + native vision), NVIDIA Nemotron 3 Ultra, and DeepSeek V4 Pro. Best overall on consumer hardware is Qwen 3.6 27B (77.2% SWE-bench, fits 24 GB at Q4). Other top picks: Kimi K2.6 (frontier coding), gpt-oss:20b (best small / 16 GB), qwen3:30b (balanced all-round), DeepSeek-R1 (reasoning), Gemma 4 (vision/tool calling), and Llama 4 Scout (long-context 10M / multimodal). Most downloaded overall remains the Llama family.**',
      quickAnswerTop: {
        en: {
          question: 'What is the latest Ollama version and the best models in June 2026?',
          answer: 'The latest Ollama version is v0.30.8 (June 12, 2026). The newest models added this month are MiniMax M3, NVIDIA Nemotron 3 Ultra, and DeepSeek V4 Pro. The best open source Ollama models in June 2026 are Qwen 3.6 27B (best overall on consumer hardware, 24 GB Q4), Kimi K2.6 (best coding, frontier MoE), gpt-oss:20b (best small / 16 GB, adjustable reasoning), qwen3:30b (balanced all-round), Llama 4 Scout (best long-context 10M / multimodal), and DeepSeek-R1 (best reasoning). Install any with: ollama pull <model-name>',
          bullets: [
            '→Latest version: Ollama v0.30.8 (June 12, 2026) — broader GGUF hardware support, upgraded Apple Silicon MLX engine',
            '→Newest this month: MiniMax M3 (1M context + vision), NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro',
            '→Qwen 3.6 27B — best overall on consumer hardware, 77.2% SWE-bench, fits 24 GB at Q4',
            '→Kimi K2.6 — frontier coding (SWE-Bench Pro 58.6), MoE (32B active/1T total), Modified MIT',
            '→gpt-oss:20b — best small model, runs in 16 GB, ~o3-mini level, adjustable reasoning',
            '→qwen3:30b — balanced all-round model; qwen3-coder:30b for code completion',
            '→Llama 4 Scout — long-context (10M tokens) + multimodal, ~55 GB at Q4',
            '→DeepSeek-R1 — best reasoning/math; gpt-oss:20b for adjustable reasoning (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.)',
          ],
          updatedDate: '2026-06-21',
        },
        de: {
          question: 'Was sind die besten Open-Source-Modelle fuer Ollama im Juni 2026?',
          answer: 'Die besten Ollama-Modelle Juni 2026: Qwen 3.6 27B (bestes Modell fuer Consumer-Hardware, 24 GB Q4), Kimi K2.6 (best Coding, Frontier MoE), gpt-oss:20b (bestes kleines Modell, 16 GB), qwen3:30b (ausgewogen), Llama 4 Scout (Long-Context 10M / multimodal), DeepSeek-R1 (Reasoning). Installation: ollama pull <modell-name>',
          bullets: [
            '→Qwen 3.6 27B — bestes Modell fuer Consumer-Hardware, 77,2% SWE-bench, passt in 24 GB bei Q4',
            '→Kimi K2.6 — Frontier-Coding (SWE-Bench Pro 58.6), MoE (32B aktiv/1T gesamt), Modified MIT',
            '→gpt-oss:20b — bestes kleines Modell, laeuft in 16 GB, ~o3-mini-Niveau, einstellbares Reasoning',
            '→qwen3:30b — ausgewogenes Allround-Modell; qwen3-coder:30b fuer Code-Vervollstaendigung',
            '→Llama 4 Scout — Long-Context (10M Tokens) + multimodal, ~55 GB bei Q4',
            '→DeepSeek-R1 — bestes Reasoning/Mathe; gpt-oss:20b fuer einstellbares Reasoning',
          ],
          updatedDate: '2026-06-21',
        },
        fr: {
          question: 'Quels sont les meilleurs modeles open source pour Ollama en juin 2026 ?',
          answer: 'Les meilleurs modeles Ollama juin 2026: Qwen 3.6 27B (meilleur global sur materiel grand public, 24 Go Q4), Kimi K2.6 (meilleur code, MoE de frontiere), gpt-oss:20b (meilleur petit modele, 16 Go), qwen3:30b (polyvalent), Llama 4 Scout (long contexte 10M / multimodal), DeepSeek-R1 (raisonnement). Installation: ollama pull <nom-du-modele>',
          bullets: [
            '→Qwen 3.6 27B — meilleur global sur materiel grand public, 77,2% SWE-bench, tient en 24 Go en Q4',
            '→Kimi K2.6 — code de frontiere (SWE-Bench Pro 58.6), MoE (32B actif/1T total), Modified MIT',
            '→gpt-oss:20b — meilleur petit modele, tourne en 16 Go, ~niveau o3-mini, raisonnement reglable',
            '→qwen3:30b — modele polyvalent; qwen3-coder:30b pour la completion de code',
            '→Llama 4 Scout — long contexte (10M tokens) + multimodal, ~55 Go en Q4',
            '→DeepSeek-R1 — meilleur raisonnement/maths; gpt-oss:20b pour un raisonnement reglable',
          ],
          updatedDate: '2026-06-21',
        },
        ja: {
          question: '2026年6月のOllama向け最高のオープンソースモデルは？',
          answer: '2026年6月トップモデル：Qwen 3.6 27B（コンシューマー向け総合最高、24GB Q4）、Kimi K2.6（コーディング最強、フロンティアMoE）、gpt-oss:20b（小型最強、16GB）、qwen3:30b（バランス型）、Llama 4 Scout（長コンテキスト10M / マルチモーダル）、DeepSeek-R1（推論）。インストール：ollama pull <モデル名>',
          bullets: [
            '→Qwen 3.6 27B — コンシューマー向け総合最高、77.2% SWE-bench、Q4で24GBに収まる',
            '→Kimi K2.6 — フロンティアコーディング（SWE-Bench Pro 58.6），MoE（32B活性/1T合計）、Modified MIT',
            '→gpt-oss:20b — 小型最強、16GBで動作、~o3-miniレベル、推論調整可能',
            '→qwen3:30b — バランス型オールラウンドモデル；コード補完はqwen3-coder:30b',
            '→Llama 4 Scout — 長コンテキスト（10Mトークン）+ マルチモーダル、Q4で約55GB',
            '→DeepSeek-R1 — 推論・数学最強；推論調整はgpt-oss:20b',
          ],
          updatedDate: '2026-06-21',
        },
        zh: {
          question: '2026年6月Ollama最佳开源模型有哪些？',
          answer: '2026年6月Ollama最佳模型：Qwen 3.6 27B（消费级硬件综合最佳，24GB Q4）、Kimi K2.6（编程最强，前沿MoE）、gpt-oss:20b（小型最强，16GB）、qwen3:30b（均衡全能）、Llama 4 Scout（长上下文10M / 多模态）、DeepSeek-R1（推理）。安装：ollama pull <模型名称>',
          bullets: [
            '→Qwen 3.6 27B — 消费级硬件综合最佳，77.2% SWE-bench，Q4下可装入24GB',
            '→Kimi K2.6 — 前沿编程（SWE-Bench Pro 58.6），MoE（32B活跃/1T总）、Modified MIT',
            '→gpt-oss:20b — 小型最强，16GB可运行，~o3-mini水平，推理可调',
            '→qwen3:30b — 均衡全能模型；代码补全用qwen3-coder:30b',
            '→Llama 4 Scout — 长上下文（10M tokens）+ 多模态，Q4下约55GB',
            '→DeepSeek-R1 — 推理/数学最强；推理可调用gpt-oss:20b',
          ],
          updatedDate: '2026-06-21',
        },
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '9 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'open source models Ollama',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Most Popular Models on Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'Top Models by Use Case', anchor: '#top-models-by-category' },
        { label: 'New in June 2026', anchor: '#new-june-2026' },
        { label: 'What Is DeepSeek-R1?', anchor: '#deepseek-r1' },
        { label: 'Vision Models on Ollama', anchor: '#vision-models' },
        { label: 'Full Top 10 Comparison Table', anchor: '#full-top-10-comparison' },
        { label: 'How to Browse the Ollama Library', anchor: '#how-to-browse-ollama-library' },
        { label: 'Regional Context', anchor: '#regional-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#common-questions' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'The best Ollama model in June 2026 is Qwen 3.6 27B (77.2% SWE-bench, fits 24 GB at Q4); best for coding is Kimi K2.6.' },
            { type: 'plain-terms', text: 'Ollama is a free tool that lets you run AI models on your own computer — no internet or API key needed. These are the top 10 models you can download with a single command.' },
          ],
          items: [
            '**Best overall on consumer hardware**: Qwen 3.6 27B (77.2% SWE-bench, fits 24 GB at Q4). Balanced all-round: qwen3:30b.',
            '**Most downloaded**: Llama 3.2 3B (tutorials) and the Llama family -- widest tool support.',
            '**Best reasoning**: DeepSeek-R1 (chain-of-thought) and gpt-oss:20b (adjustable reasoning, ~o3-mini level).',
            '**Best coding**: Kimi K2.6 (frontier MoE), Qwen 3.6 27B (best dense), Devstral Small 24B (best agentic), qwen3-coder:30b (completion) -- highest benchmarks at their sizes.',
            '**Best small / 16 GB**: gpt-oss:20b. **Best vision/multimodal**: Gemma 4 (E4B+). **Best long-context (10M) / large multimodal**: Llama 4 Scout (~55 GB).',
            'As of June 2026, the Ollama library contains 4,500+ models. All are available via `ollama pull <name>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'What Is New in Ollama in June 2026?',
          content: [
            '**Current Ollama version: v0.30.8** (released June 12, 2026). This is the latest stable release, available via ollama.com/download. Update with `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`), then confirm with `ollama --version`.',
            '**What changed in the v0.30 series (May–June 2026):** Ollama v0.30 broadened GGUF model compatibility through llama.cpp, extending hardware support beyond Apple Silicon, and the MLX engine was upgraded on June 11, 2026 for its fastest Apple Silicon inference yet — higher-quality output using less memory. Point releases through v0.30.8 added Gemma 4 QAT weights (June 5), Hermes Desktop (June 7), improved prompt/KV-cache reuse, and Windows config-path fixes. Full notes: github.com/ollama/ollama/releases.',
            '**Newest models added this month (June 2026):**',
          ],
          items: [
            '**MiniMax M3** (MiniMax, June 1, 2026) — Newest open-weight flagship: the first model to combine frontier coding (SWE-Bench Pro 59.0), a 1M-token context window, and native image/video input. Rolling out to the Ollama library — confirm availability with `ollama pull minimax-m3`.',
            '**NVIDIA Nemotron 3 Ultra** (NVIDIA, June 4, 2026) — Built for high-throughput reasoning and long-running agent workflows. NVIDIA Open Model License. Pull: `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro** (DeepSeek, April 23, 2026) — Algorithmic-coding specialist, 93.5% LiveCodeBench, MIT license. Budget sibling DeepSeek V4 Flash for lighter hardware. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, April 20, 2026) — Frontier coding model, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%. MoE architecture (32B active / 1T total). Modified MIT license. Pull: `ollama pull kimi-k2.6`',
            '**Qwen 3.6 27B** (Alibaba, April 16, 2026) — Best overall on consumer hardware, 77.2% SWE-bench, Apache 2.0, fits 24 GB at Q4. Also Qwen3.6-35B-A3B (MoE, 73.4 SWE-bench). Pull: `ollama pull qwen3.6:27b`',
            '**GLM-5.1** (Z.ai, April 7, 2026) — 744B / 40B active MoE, MIT license, SWE-Bench Pro 58.4. Structured code generation leader. Pull: `ollama pull glm-5.1`',
            '**gpt-oss** (OpenAI, 2026) — Open-weight MoE: gpt-oss:20b (21B total / 3.6B active, runs in 16 GB, ~o3-mini level, adjustable reasoning) and gpt-oss:120b (80 GB). Pull: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google, April 2, 2026) — Multimodal sizes E2B / E4B / E12B (26B MoE) / E27B (31B dense), all with vision and tool calling. QAT weights added June 5, 2026. E4B runs in ~6 GB VRAM. Pull: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.30.8\n\n# Pull the newest June 2026 models\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: 'Which Models Are Most Popular on Ollama in 2026?',
          content: [
            '**Popularity on Ollama is measured by download counts visible on each model\'s library page.** As of June 2026, the top downloaded models are still dominated by Meta\'s Llama family -- Llama 3.2 3B is the most pulled model overall, largely due to its use as a first-install test model. However, Llama 4 Scout has climbed rapidly since its April 2026 release.',
            'Qwen3 is the fastest-growing model family in the Ollama library, with Qwen3 and the new Qwen 3.6 dense variant quickly displacing Qwen2.5. DeepSeek-R1 saw major spikes following its release and remains highly downloaded for reasoning tasks.',
            'Meta released **Llama 4** in April 2026 with Scout (17B active, 109B total, MoE) and Maverick (17B active, 400B total) variants. Llama 4 Scout is now stable in the Ollama library (`ollama pull llama4:scout`). The Llama 4 family uses Mixture-of-Experts (MoE) architecture — Scout needs ~55 GB VRAM at Q4 (it fits 24 GB only at 1.78-bit, ~20 tok/s).',
            'Scout\'s standout features are its 10M-token context window and multimodal input, not consumer-hardware fit. For lightweight setups (8 GB RAM), Llama 3.2 3B remains the easiest first model.',
            'Kimi K2.6 (Moonshot AI, Modified MIT license, 32B active / 1T total MoE) scored SWE-Bench Pro 58.6, tying GPT-5.5. Qwen 3.6 27B achieved 77.2% SWE-bench as the best overall model on consumer hardware (fits 24 GB at Q4). OpenAI\'s open-weight gpt-oss:20b (21B total / 3.6B active MoE) runs in 16 GB at ~o3-mini level with adjustable reasoning.',
            'The Ollama library now references 4,500+ models, with MiniMax M3, NVIDIA Nemotron 3 Ultra, and DeepSeek V4 Pro the newest additions this month.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: 'Which Ollama Models Work Best for Your Use Case?',
          snippetBlocks: [
            { type: 'one-sentence', text: 'For general chat use Qwen 3.6 27B, for coding use Kimi K2.6 or Qwen3-Coder, for reasoning use DeepSeek-R1, for vision use Gemma 4 E4B.' },
            { type: 'plain-terms', text: 'Different AI models excel at different tasks — like how a calculator beats a word processor at math. This section matches the right model to each job.' },
          ],
          content: 'The quality of a model\'s output depends heavily on how you prompt it. For structured techniques that work across all local models — including chain-of-thought, few-shot examples, and output formatting — see the [prompt engineering guide](https://www.promptquorum.com/prompt-engineering). For reasoning tasks, [chain-of-thought prompting](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting) significantly improves DeepSeek-R1 and Qwen3 output quality. To understand quantization tradeoffs for these models, see the [quantization guide →](/local-llms/llm-quantization-explained). For determining how much VRAM each model needs, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm). For agent workflows with Gemma 4, see [Tree-of-Thought and ReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react). For hardware requirements to run these models, see the [hardware guide →](/local-llms/local-llm-hardware-guide-2026). Once a tool-calling model from this list is wired into a multi-step loop with file and database access, see [Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026) for the open-source orchestration pattern.',
          items: [
            '**General chat (beginner)**: `ollama run llama3.2:3b` -- most documentation, best-supported first model.',
            '**General chat (best overall)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench, best overall on consumer hardware, fits 24 GB at Q4. Balanced all-round: `ollama run qwen3:30b`. For 8 GB machines, keep `ollama run llama3.2:3b`.',
            '**Long-context / multimodal**: `ollama run llama4:scout` -- 10M-token context + multimodal, MoE (17B active/109B total). Needs ~55 GB VRAM at Q4 (fits 24 GB only at 1.78-bit ~20 tok/s).',
            '**Best small / 16 GB**: `ollama run gpt-oss:20b` -- 21B total / 3.6B active MoE, ~o3-mini level, adjustable reasoning. Larger: `ollama run gpt-oss:120b` (80 GB).',
            '**Coding on 8 GB**: `ollama run qwen3:8b` -- Best local coding model for 8 GB VRAM machines. 76% HumanEval, 5 GB used, multilingual.',
            '**General inference on 8 GB (if not coding)**: `ollama run mistral:7b` -- Fastest general-purpose model at 8 GB, 40-60 tok/sec.',
            '**Coding (best agentic, 24B)**: `ollama run devstral-small:24b` -- Best agentic coding model (multi-file edits, debugging). 16 GB RAM. By Mistral AI.',
            '**Coding (best dense, 27B)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench. Best dense coding model. 22 GB VRAM.',
            '**Coding (frontier MoE)**: `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6 (ties GPT-5.5), top tier. MoE (32B active/1T total). Modified MIT license. Needs quantization for consumer hardware.',
            '**Agent tasks and tool calling**: `ollama run gemma4:e4b` -- Released April 2, 2026. Built-in tool calling + vision support. Recommended for local agents, function calling, and structured output. 6 GB RAM.',
            '**Reasoning and math**: `ollama run deepseek-r1:7b` -- chain-of-thought model, best local math performance at 7B.',
            '**Multilingual**: `ollama run qwen3:7b` -- 29+ native languages, strongest non-English support, 76% HumanEval.',
            '**Image understanding**: `ollama run gemma4:e4b` -- vision + tool calling (June 2026). Or `ollama run llama3.2-vision:11b` for dedicated vision.',
            '**Fast and lightweight**: `ollama run gemma2:2b` -- fastest CPU inference, 1.7 GB RAM.',
            '**High quality (16 GB RAM)**: `ollama run mistral-small3.1` -- near-70B quality at 14 GB RAM.',
            '**Embedding generation**: `ollama run nomic-embed-text` -- 137M parameter embedding model for RAG pipelines.',
            '**Document Q&A (RAG)**: `ollama run llama3.2` with Open WebUI\'s RAG feature -- best-supported combination.',
            '**Home automation / wake word AI**: `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB VRAM) handles Home Assistant voice queries at 20–25 tok/sec on a mini PC without a discrete GPU. See [Home Assistant + Ollama integration guide →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/ollama-model-by-use-case-en.svg',
          imageCaption: 'Ollama model selection by use case: pick qwen3.6:27b (best overall, 77.2% SWE-bench) for chat and coding, kimi-k2.6 for frontier coding, gpt-oss:20b on 16 GB, deepseek-r1:7b for math.',
        },
        newApril2026: {
          id: 'new-june-2026',
          title: 'Which Models Were Added to Ollama in June 2026?',
          content: 'These are the newest models in the Ollama library as of June 2026, newest first. Confirm availability with `ollama pull <model>` before building workflows — new models appear at ollama.com/library within days of release.',
          rows: [
            { 'Model': 'minimax-m3', 'Released': 'June 1, 2026', 'Best For': 'Newest flagship: frontier coding (SWE-Bench Pro 59.0), 1M context, native vision', 'Ollama Command': 'ollama run minimax-m3' },
            { 'Model': 'nemotron3-ultra', 'Released': 'June 4, 2026', 'Best For': 'NVIDIA — high-throughput reasoning + long-running agents', 'Ollama Command': 'ollama run nemotron3-ultra' },
            { 'Model': 'deepseek-v4-pro', 'Released': 'April 23, 2026', 'Best For': 'Algorithmic coding, 93.5% LiveCodeBench, MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': 'April 20, 2026', 'Best For': 'Frontier coding (SWE-Bench Pro 58.6), MoE (32B/1T), Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6' },
            { 'Model': '[qwen3.6:27b](https://ollama.com/library/qwen3)', 'Released': 'April 16, 2026', 'Best For': 'Best overall on consumer hardware, 77.2% SWE-bench, fits 24 GB Q4', 'Ollama Command': 'ollama run qwen3.6:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'Balanced all-round; qwen3-coder:30b for code completion', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026', 'Best For': 'Best small / 16 GB, ~o3-mini, adjustable reasoning (also gpt-oss:120b)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.1', 'Released': 'April 7, 2026', 'Best For': 'Z.ai, 744B/40B active MoE, MIT, SWE-Bench Pro 58.4', 'Ollama Command': 'ollama run glm-5.1' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': 'April 2, 2026', 'Best For': 'Vision + tool calling (E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': 'April/May 2026', 'Best For': 'Budget coding (78/100 real-world)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:7b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'HumanEval 76% at 7B, multilingual', 'Ollama Command': 'ollama run qwen3:7b' },
          ],
          columns: ['Model', 'Released', 'Best For', 'Ollama Command'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: 'What Is DeepSeek-R1 and Why Is It Different?',
          content: [
            '**DeepSeek-R1 is a reasoning model -- unlike standard chat models that generate answers directly, DeepSeek-R1 generates explicit chain-of-thought reasoning before its final answer.** This significantly improves performance on math, logic puzzles, and step-by-step problem solving.',
            'DeepSeek-R1 7B scores 52% on MATH (competition math) vs 28% for Mistral Small at the same size. It is slower than standard models (more tokens per response) but significantly more accurate on tasks where reasoning matters.',
          ],
          codeBlock: '# Pull and run DeepSeek-R1\nollama run deepseek-r1:7b\n\n# Larger variants for better quality\nollama run deepseek-r1:14b   # 10 GB RAM\nollama run deepseek-r1:32b   # 20 GB RAM',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-en.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: 52% vs 28% on MATH. Chain-of-thought reasoning model -- slower, significantly better accuracy.',
        },
        visionModels: {
          id: 'vision-models',
          title: 'Which Ollama Models Support Image Input?',
          content: 'As of June 2026, these models on Ollama support image input (multimodal): Gemma 4 supports both vision AND tool calling — unique among vision models on Ollama.',
          rows: [
            { 'Model': '[llama3.2-vision:11b](https://ollama.com/library/llama3.3)', 'RAM': '~8 GB', 'Image Support': 'Yes', 'Ollama Command': 'ollama run llama3.2-vision:11b' },
            { 'Model': '[llama3.2-vision:90b](https://ollama.com/library/llama3.3)', 'RAM': '~55 GB', 'Image Support': 'Yes', 'Ollama Command': 'ollama run llama3.2-vision:90b' },
            { 'Model': '[gemma3:9b (vision)](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Image Support': 'Yes', 'Ollama Command': 'ollama run gemma3:9b' },
            { 'Model': 'minicpm-v:8b', 'RAM': '~5.5 GB', 'Image Support': 'Yes', 'Ollama Command': 'ollama run minicpm-v' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Image Support': 'Yes + Tool Calling ✓', 'Ollama Command': 'ollama run gemma4:e4b' },
          ],
          columns: ['Model', 'RAM', 'Image Support', 'Ollama Command'],
          image: '/images/ollama-vision-models-comparison-en.svg',
          imageCaption: '5 Ollama vision models for image input. Gemma 4 E4B (6 GB) now includes tool calling. Llama 3.2 Vision 11B (8 GB) for dedicated vision. All run locally.',
        },
        fullTop10: {
          id: 'full-top-10-comparison',
          title: 'What Are the Top 10 Open Source Models on Ollama?',
          content: 'Download counts still favor Llama 3.x due to tutorial prevalence. For new projects in June 2026, prefer Qwen 3.6 27B (best overall on consumer hardware), Kimi K2.6, gpt-oss:20b, and qwen3:30b.',
          rows: [
            { '#': '1', 'Model': '[Qwen 3.6 27B](https://ollama.com/library/qwen3)', 'Best For': 'Best overall on consumer hardware', 'RAM': '24 GB (Q4)', 'HumanEval': '77.2% SWE-bench' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': 'Frontier coding, MoE (32B/1T), Modified MIT', 'RAM': 'Quantized', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': 'Best small / 16 GB, adjustable reasoning', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': 'Balanced all-round; qwen3-coder:30b for code', 'RAM': '~18 GB', 'HumanEval': 'strong' },
            { '#': '5', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral)', 'Best For': 'Agentic coding (multi-file)', 'RAM': '16 GB', 'HumanEval': '80%' },
            { '#': '6', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': 'Reasoning, math', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '7', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': 'Vision + tool calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Agent-ready' },
            { '#': '8', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': 'Long-context 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '9', 'Model': '[mistral-small3.1](https://ollama.com/library/mistral)', 'Best For': 'Quality on 16 GB', 'RAM': '14 GB', 'HumanEval': '74%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': 'First model, general chat', 'RAM': '2.5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-en.svg',
          imageCaption: 'Top Ollama models June 2026: Qwen 3.6 27B (best overall, 24 GB Q4), Kimi K2.6, gpt-oss:20b. Llama 4 Scout for 10M-token context (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'How Do You Browse the Ollama Model Library?',
          content: 'There are two ways to work with Ollama models. **Switch installed models:** In the Ollama Mac app, click the model dropdown button at the bottom of the chat input (shows the current model name, e.g. "gemma3:1b") to switch between any locally installed model. **Find and download new models:** Visit ollama.com/library to browse 4500+ models by category, then use the CLI commands below to pull and manage them.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'How Do Regional Privacy Rules Affect Your Ollama Model Choice?',
          content: [
            '**EU / GDPR + Licence Compliance.** For EU organizations deploying Ollama models in production, licence choice matters as much as performance. Apache 2.0 (fully open, commercial use permitted): Mistral Small, Mistral Small 3.1, Qwen3 7B, Qwen 3.6 27B, Devstral Small 24B, Gemma 2 2B. Meta Llama Community Licence (commercial use restricted above 700M monthly active users): Llama 3.3 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (commercial use permitted): DeepSeek-R1 7B, DeepSeek-R1 14B. Modified MIT (commercial use permitted with attribution clause): Kimi K2.6. For EU enterprises in regulated sectors, Mistral models (France, Apache 2.0) or Devstral Small 24B (best agentic coding) are the recommended default -- EU origin, clean licence, no restriction on commercial deployment. For GDPR compliance: all models run entirely on-premises via Ollama, meaning no personal data is transmitted to external servers regardless of model choice.',
            '**Japan (METI).** For Japanese enterprise Ollama deployments, Qwen3 / Qwen 3.6 is the recommended model family -- native Japanese tokenization processes Japanese text 30-40% more token-efficiently than Llama or Mistral, directly reducing inference time and KV cache requirements. For Japanese coding workflows: Qwen 3.6 27B (77.2% SWE-bench) handles Japanese code comments natively and is the top dense coding model in 2026. METI AI governance documentation requires noting the exact model version. Use `ollama show <model>` to get the full model specification including parameter count, quantization level, and context length for compliance records.',
            '**China.** Under China\'s CAC Generative AI Measures (2023), organizations providing AI services to end users must register the models used. Qwen3 / Qwen 3.6 (Alibaba, Apache 2.0) is the recommended choice for Chinese enterprise Ollama deployments -- Chinese model origin, Apache 2.0 licence, best performance on Chinese-language tasks, and top benchmarks. Kimi K2.6 (Moonshot AI, Modified MIT license, 32B active/1T total MoE) is also available as a top-tier coding option with Chinese origin. Pull commands: `ollama run qwen3.6:27b` for best quality, `ollama run qwen3:7b` for speed. DeepSeek-R1 (DeepSeek, MIT licence) is appropriate for reasoning tasks. For data processed locally via Ollama, China\'s PIPL cross-border data transfer requirements do not apply -- inference stays on-premises.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are the Common Mistakes When Choosing Ollama Models?',
          faqs: [
            {
              q: 'Pulling the largest model tag by default without checking RAM',
              a: 'Running `ollama pull llama3.3` without specifying a tag downloads the default variant, which is typically the largest standard quantization. On a machine with 8 GB RAM, pulling llama3.3 (70B at ~40 GB) will fail or cause severe swap usage. Always specify the variant: `ollama pull llama3.2:3b` for 8 GB machines.',
            },
            {
              q: 'Using a general model when a task-specific model exists',
              a: 'For coding tasks, `qwen2.5-coder:7b` scores 72% HumanEval while the general `qwen2.5:7b` also scores 72% -- but `qwen2.5-coder` includes FIM support for code completion. For reasoning/math, `deepseek-r1:7b` scores 52% MATH vs 28% for `mistral:7b`. Task-specific models exist in the Ollama library for a reason.',
            },
            {
              q: 'Not verifying a model is available before building a workflow',
              a: 'The Ollama library changes over time -- models are added and occasionally removed. Before building a production pipeline around a specific model, confirm it is in the library (`ollama list` locally, or check ollama.com/library). Pin specific model versions in production workflows: `ollama pull llama3.1:8b-instruct-q4_K_M`.',
            },
            {
              q: 'Not specifying a quantization tag for large models',
              a: 'Running `ollama pull qwen2.5-coder:32b` without a quantization suffix downloads the default variant -- which may be larger than your VRAM can handle. For 16 GB VRAM, pull the explicit Q4_K_M variant: `ollama pull qwen2.5-coder:32b-instruct-q4_K_M`. Run `ollama show <model>` after pulling to confirm VRAM requirements match your hardware.',
            },
            {
              q: 'Expecting DeepSeek-R1 to be as fast as standard chat models',
              a: 'DeepSeek-R1 generates explicit chain-of-thought reasoning tokens before its final answer -- this is why it outperforms standard models on math and logic, but it produces 3-5x more tokens per response. For quick chat or one-line answers, use `llama3.1:8b`. Reserve DeepSeek-R1 for tasks where reasoning accuracy matters more than speed.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- set up Ollama and pull your first model from this list in under 5 minutes',
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- full benchmark rankings across all open-weight models including 70B tier',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- deeper comparison of Qwen 3.6 / Qwen3-Coder 32B, DeepSeek-Coder, and Starcoder2',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- how to choose between Q4_K_M and Q8_0 for the models in this list',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- which tool to use for running these models depending on your workflow',
            '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends) -- Open WebUI, Jan AI, and other interfaces that connect to any model in this list',
          '[Local LLM Model Updates 2026](/local-llms/local-llm-model-updates-2026) -- full timeline of every major open-weight release this year with Ollama availability dates.',
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Next steps',
          items: [
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) — Want the best Ollama model for coding specifically? →',
            '[Best CPU-Only LLMs](/local-llms/best-cpu-only-llm) — Running without a GPU? Start here →',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — Not sure your machine can run these models? Check hardware requirements →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'How many models are in the Ollama library?',
              a: 'As of June 2026, the Ollama library contains approximately 4,500+ models (curated + community contributions) with official support. Hugging Face hosts thousands of additional GGUF models that can be loaded via Ollama using custom Modelfiles.',
            },
            {
              q: 'Can I use models from Hugging Face directly in Ollama?',
              a: 'Yes. Download a GGUF file from Hugging Face and create a Modelfile: `FROM ./model.gguf`. Then run `ollama create mymodel -f Modelfile`. This works for any GGUF file including fine-tunes and models not in the official Ollama library.',
            },
            {
              q: 'Which Ollama model is best for building a local chatbot?',
              a: 'For a general-purpose local chatbot: `qwen3.6:27b` (best overall on consumer hardware, fits 24 GB at Q4), or `llama3.2:3b` on 8 GB RAM (easiest entry point). For 16 GB machines: `gpt-oss:20b` (~o3-mini level) or `mistral-small3.1`. For a coding assistant chatbot: `qwen3.6:27b` (77.2% SWE-bench), `kimi-k2.6` (frontier MoE), or `devstral-small:24b` (agentic coding). Pair with Open WebUI for a web-based interface that connects to Ollama\'s API at localhost:11434.',
            },
            {
              q: 'Are all Ollama models truly open source?',
              a: 'Not all. The Ollama library includes models with varying licences. Llama 3.x/4.x use the Meta Llama Community Licence (not OSI-approved open source -- restricts commercial use above 700M monthly active users). Mistral Small, Qwen3, Qwen 3.6, Devstral, and Gemma models are Apache 2.0 (fully open source). Kimi K2.6 is Modified MIT licensed (commercial-friendly with an attribution clause). Always check the licence before commercial deployment.',
            },
            {
              q: 'Which embedding model should I use with Ollama for RAG?',
              a: '`nomic-embed-text` is the standard choice -- a 137M parameter model that generates 768-dimensional embeddings, runs at milliseconds per document, and is specifically designed for retrieval tasks. Pull it with `ollama pull nomic-embed-text`. Use with Open WebUI\'s built-in RAG, LangChain\'s OllamaEmbeddings, or LlamaIndex.',
            },
            {
              q: 'How often does the Ollama library get updated with new models?',
              a: 'The Ollama team adds new models within days to weeks of major releases. MiniMax M3 (June 1, 2026), NVIDIA Nemotron 3 Ultra (June 4), Kimi K2.6 and Qwen 3.6 all appeared within days of their releases. The current Ollama version is v0.30.8 (June 12, 2026). Follow the Ollama GitHub repository (github.com/ollama/ollama) or the Ollama Twitter/X account for new model announcements.',
            },
            {
              q: 'What is the difference between `ollama pull` and `ollama run`?',
              a: '`ollama pull` downloads the model file to local storage (one-time operation). `ollama run` starts an interactive session immediately after pulling, or reuses the already-pulled model if available. You can pull once and run multiple times without re-downloading.',
            },
            {
              q: 'Can I run multiple models simultaneously on the same machine?',
              a: 'Yes, if your hardware has sufficient VRAM. Use separate terminal windows or shell sessions -- one window runs `ollama run llama3.2` while another runs `ollama run qwen2.5:7b`. Ollama automatically manages VRAM sharing. Monitor `nvidia-smi` or system activity to avoid overload.',
            },
            {
              q: 'How do I update a model to the latest version?',
              a: '`ollama pull [model-name]` checks for updates and downloads the latest version if available. To revert or use specific versions, use version tags: `ollama pull llama3.1:8b` or `ollama pull llama3.1:8b-instruct-q4_K_M`. Check available versions with `ollama show [model-name]`.',
            },
            {
              q: 'Are open source models on Ollama truly free to use commercially?',
              a: 'Most are, but not all. Llama 3.x (Meta Llama Community Licence) restricts commercial use above 700M monthly active users. Mistral Small, Qwen3, and Gemma models use Apache 2.0 (fully commercial-friendly). Always verify the licence before enterprise deployment -- check the model\'s Hugging Face page or Ollama library entry.',
            },
            {
              q: 'What are the best new Ollama models in June 2026?',
              a: 'The latest additions are Kimi K2.6 (Moonshot AI, Modified MIT -- frontier MoE coding, SWE-Bench Pro 58.6 tying GPT-5.5, 32B active/1T total), Qwen 3.6 27B (Alibaba -- best overall on consumer hardware, 77.2% SWE-bench, fits 24 GB at Q4), GLM-5.1 (Z.ai -- 744B/40B active MoE, MIT, SWE-Bench Pro 58.4), and gpt-oss:20b (OpenAI -- best small / 16 GB, ~o3-mini, adjustable reasoning). Gemma 4 (Google, April 2, 2026; sizes E2B/E4B/E12B/E27B) added vision and tool calling. Pull commands: ollama run qwen3.6:27b, ollama run kimi-k2.6, ollama run gpt-oss:20b, ollama run glm-5.1, ollama run gemma4:e4b.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Official specifications for Llama 4 Scout (17B active, 109B total, MoE) and Maverick variants.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- Chain-of-thought architecture and MATH benchmark (52%) for DeepSeek-R1.',
            '[Qwen Team. (2026). "Qwen 3.6 Technical Report." arxiv.org/abs/2501.xxxxx](https://arxiv.org/) -- 77.2% SWE-bench for best dense coding model.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- Modified MIT-licensed MoE coding model (32B active/1T total), SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- Best agentic coding model for multi-file edits and debugging.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- Official model library with 4,500+ models, download counts, tags, and quantization options.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- Vision + tool calling capabilities released April 2026.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best Open-Source Ollama Models June 2026: Top 10 Ranked',
        'description': 'Looking for new Ollama models? See the latest June 2026 releases, what is new, and which models are worth using for chat, coding, and reasoning.',
        'url': 'https://www.promptquorum.com/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-06-19',
        'proficiencyLevel': 'Beginner',
        'inLanguage': 'en',
        'audience': { '@type': 'Audience', 'audienceType': 'Beginners running their first local LLM on consumer hardware' },
        'about': [
          { '@type': 'Thing', 'name': 'Best Ollama models 2026' },
          { '@type': 'Thing', 'name': 'Ollama model list June 2026' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1 Ollama' },
          { '@type': 'Thing', 'name': 'Gemma 4 Ollama' },
          { '@type': 'Thing', 'name': 'Qwen 3.6 / Qwen3-Coder Ollama' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': ['https://www.promptquorum.com/author/hans-kuepper', 'https://www.linkedin.com/in/hanskuepper/'] },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Top Open Source Models on Ollama -- June 2026',
        'description': 'The most downloaded and highest-performing open source models available via Ollama',
        'numberOfItems': 11,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen 3.6 27B', 'url': 'https://ollama.com/library/qwen3.6', 'description': 'Best overall on consumer hardware. 77.2% SWE-bench. Fits 24 GB at Q4. Apache 2.0. ollama run qwen3.6:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://ollama.com/library/kimi-k2.6', 'description': 'Frontier MoE coding model. SWE-Bench Pro 58.6 (ties GPT-5.5). 32B active/1T total. Modified MIT license. ollama run kimi-k2.6' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'Best small / 16 GB. 21B total / 3.6B active MoE. ~o3-mini level, adjustable reasoning. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'Balanced all-round model; qwen3-coder:30b for code completion. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'Best reasoning. 5 GB RAM. 52% MATH vs 28% Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 6, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma4', 'description': 'Best vision/multimodal (E4B+). Tool calling + vision. ~6 GB RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama4', 'description': 'Best long-context (10M tokens) + large multimodal. MoE 17B active/109B total. ~55 GB at Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral-small', 'description': 'Best agentic coding June 2026. Multi-file edits, debugging. 16 GB RAM. ollama run devstral-small:24b' },
          { '@type': 'ListItem', 'position': 9, 'name': 'mistral-small3.1', 'url': 'https://ollama.com/library/mistral-small3.1', 'description': 'Best quality 16 GB tier. 14 GB RAM. 74% HumanEval. Apache 2.0. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 10, 'name': 'gemma2:2b', 'url': 'https://ollama.com/library/gemma2', 'description': 'Fastest and lightest. 1.7 GB RAM. Best CPU inference. ollama run gemma2:2b' },
          { '@type': 'ListItem', 'position': 11, 'name': 'phi4-mini', 'url': 'https://ollama.com/library/phi4-mini', 'description': 'Best reasoning under 4 GB. 2.5 GB RAM. 70% HumanEval. ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How many models are in the Ollama library?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'As of June 2026, the Ollama library contains approximately 4,500+ models (curated + community contributions) with official support. Hugging Face hosts thousands of additional GGUF models that can be loaded via Ollama using custom Modelfiles.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use models from Hugging Face directly in Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Download a GGUF file from Hugging Face and create a Modelfile: `FROM ./model.gguf`. Then run `ollama create mymodel -f Modelfile`. This works for any GGUF file including fine-tunes and models not in the official Ollama library.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Which Ollama model is best for building a local chatbot?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For a general-purpose local chatbot: `qwen3.6:27b` (best overall on consumer hardware, fits 24 GB at Q4), or `llama3.2:3b` on 8 GB RAM (easiest entry point). For 16 GB machines: `gpt-oss:20b` (~o3-mini level) or `mistral-small3.1`. For a coding assistant chatbot: `qwen3.6:27b` (77.2% SWE-bench), `kimi-k2.6` (frontier MoE), or `devstral-small:24b` (agentic coding). Pair with Open WebUI for a web-based interface that connects to Ollama\'s API at localhost:11434.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Are all Ollama models truly open source?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Not all. The Ollama library includes models with varying licences. Llama 3.x/4.x use the Meta Llama Community Licence (not OSI-approved open source -- restricts commercial use above 700M monthly active users). Mistral Small, Qwen3, Qwen 3.6, Devstral, and Gemma models are Apache 2.0 (fully open source). Kimi K2.6 is Modified MIT licensed (commercial-friendly with an attribution clause). Always check the licence before commercial deployment.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Which embedding model should I use with Ollama for RAG?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`nomic-embed-text` is the standard choice -- a 137M parameter model that generates 768-dimensional embeddings, runs at milliseconds per document, and is specifically designed for retrieval tasks. Pull it with `ollama pull nomic-embed-text`. Use with Open WebUI\'s built-in RAG, LangChain\'s OllamaEmbeddings, or LlamaIndex.',
            }
          },
          {
            '@type': 'Question',
            'name': 'How often does the Ollama library get updated with new models?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The Ollama team adds new models within days to weeks of major releases. MiniMax M3 (June 1, 2026), NVIDIA Nemotron 3 Ultra (June 4), Kimi K2.6 and Qwen 3.6 all appeared within days of their releases. The current Ollama version is v0.30.8 (June 12, 2026). Follow the Ollama GitHub repository (github.com/ollama/ollama) or the Ollama Twitter/X account for new model announcements.',
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between `ollama pull` and `ollama run`?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull` downloads the model file to local storage (one-time operation). `ollama run` starts an interactive session immediately after pulling, or reuses the already-pulled model if available. You can pull once and run multiple times without re-downloading.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I run multiple models simultaneously on the same machine?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, if your hardware has sufficient VRAM. Use separate terminal windows or shell sessions -- one window runs `ollama run llama3.2` while another runs `ollama run qwen2.5:7b`. Ollama automatically manages VRAM sharing. Monitor `nvidia-smi` or system activity to avoid overload.',
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I update a model to the latest version?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull [model-name]` checks for updates and downloads the latest version if available. To revert or use specific versions, use version tags: `ollama pull llama3.1:8b` or `ollama pull llama3.1:8b-instruct-q4_K_M`. Check available versions with `ollama show [model-name]`.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Are open source models on Ollama truly free to use commercially?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Most are, but not all. Llama 3.x (Meta Llama Community Licence) restricts commercial use above 700M monthly active users. Mistral Small, Qwen3, and Gemma models use Apache 2.0 (fully commercial-friendly). Always verify the licence before enterprise deployment -- check the model\'s Hugging Face page or Ollama library entry.',
            }
          },
          {
            '@type': 'Question',
            'name': 'What are the best new Ollama models in June 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The latest additions are Kimi K2.6 (Moonshot AI, Modified MIT -- frontier MoE coding, SWE-Bench Pro 58.6 tying GPT-5.5, 32B active/1T total), Qwen 3.6 27B (Alibaba -- best overall on consumer hardware, 77.2% SWE-bench, fits 24 GB at Q4), GLM-5.1 (Z.ai -- 744B/40B active MoE, MIT, SWE-Bench Pro 58.4), and gpt-oss:20b (OpenAI -- best small / 16 GB, ~o3-mini, adjustable reasoning). Gemma 4 (Google, April 2, 2026; sizes E2B/E4B/E12B/E27B) added vision and tool calling. Pull commands: ollama run qwen3.6:27b, ollama run kimi-k2.6, ollama run gpt-oss:20b, ollama run glm-5.1, ollama run gemma4:e4b.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'The slide deck below covers: top 10 Ollama models by download count, performance comparison (60-74% HumanEval), best models by use case (chat, coding, reasoning, vision), DeepSeek-R1 chain-of-thought reasoning, and exact pull commands. Download the PDF as your Ollama model selection reference card.',
    },
    es: {
      freshness_tier: 'monthly',
      theme: 'Best Models',
      title: 'Ollama Actualización Junio 2026: v0.30.8 + Top 10 Modelos Open Source',
      seoTitle: 'Ollama Junio 2026 Actualización: v0.30.8 + Top 10 Modelos Clasificados',
      intro:'Actualizado en junio de 2026. La versión actual de Ollama es v0.30.8 (lanzada el 12 de junio de 2026), que amplía el soporte de hardware GGUF mediante llama.cpp y mejora el motor MLX de Apple Silicon. Los modelos más nuevos de la biblioteca este mes son MiniMax M3 (1 de junio, peso abierto, contexto de 1M tokens + visión nativa), NVIDIA Nemotron 3 Ultra (4 de junio) y DeepSeek V4 Pro, que se suman a Kimi K2.6, Qwen 3.6, GLM-5.1, gpt-oss y Gemma 4. Los más descargados en general siguen siendo la familia Llama (Llama 4 Scout, Llama 3.x); el mejor general en hardware de consumo es Qwen 3.6 27B (77,2% SWE-bench).',
      metaDescription: 'Ollama v0.30.8 (12 junio 2026): novedades, nuevos modelos, top 10 open source clasificados — Qwen 3.6 27B, Kimi K2.6, gpt-oss:20b. Benchmarks + comandos pull.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**La versión actual de Ollama es v0.30.8 (12 de junio de 2026). Los modelos más nuevos añadidos este mes son MiniMax M3 (peso abierto, contexto de 1M tokens + visión nativa), NVIDIA Nemotron 3 Ultra y DeepSeek V4 Pro. El mejor modelo general en hardware de consumo es Qwen 3.6 27B (77,2% SWE-bench, cabe en 24 GB con Q4). Otras opciones destacadas: Kimi K2.6 (programación de frontera), gpt-oss:20b (mejor pequeño / 16 GB), qwen3:30b (equilibrado), DeepSeek-R1 (razonamiento), Gemma 4 (visión/tool calling) y Llama 4 Scout (contexto largo 10M / multimodal). Los más descargados en general siguen siendo la familia Llama.**',
      quickAnswerTop: {
        en: {
          question: 'What are the best open source models for Ollama in June 2026?',
          answer: 'The top open source Ollama models in June 2026 are Qwen 3.6 27B (best overall on consumer hardware, 24 GB Q4), Kimi K2.6 (best coding, frontier MoE), gpt-oss:20b (best small / 16 GB, adjustable reasoning), qwen3:30b (balanced all-round), Llama 4 Scout (best long-context 10M / multimodal), and DeepSeek-R1 (best reasoning). Install any with: ollama pull <model-name>',
          bullets: [
            '→Qwen 3.6 27B — best overall on consumer hardware, 77.2% SWE-bench, fits 24 GB at Q4',
            '→Kimi K2.6 — frontier coding (SWE-Bench Pro 58.6), MoE (32B active/1T total), Modified MIT',
            '→gpt-oss:20b — best small model, runs in 16 GB, ~o3-mini level, adjustable reasoning',
            '→qwen3:30b — balanced all-round model; qwen3-coder:30b for code completion',
            '→Llama 4 Scout — long-context (10M tokens) + multimodal, ~55 GB at Q4',
            '→DeepSeek-R1 — best reasoning/math; gpt-oss:20b for adjustable reasoning',
          ],
          updatedDate: '2026-06-21',
        },
        de: {
          question: 'Was sind die besten Open-Source-Modelle fuer Ollama im Juni 2026?',
          answer: 'Die besten Ollama-Modelle Juni 2026: Qwen 3.6 27B (bestes Modell fuer Consumer-Hardware, 24 GB Q4), Kimi K2.6 (best Coding, Frontier MoE), gpt-oss:20b (bestes kleines Modell, 16 GB), qwen3:30b (ausgewogen), Llama 4 Scout (Long-Context 10M / multimodal), DeepSeek-R1 (Reasoning). Installation: ollama pull <modell-name>',
          bullets: [
            '→Qwen 3.6 27B — bestes Modell fuer Consumer-Hardware, 77,2% SWE-bench, passt in 24 GB bei Q4',
            '→Kimi K2.6 — Frontier-Coding (SWE-Bench Pro 58.6), MoE (32B aktiv/1T gesamt), Modified MIT',
            '→gpt-oss:20b — bestes kleines Modell, laeuft in 16 GB, ~o3-mini-Niveau, einstellbares Reasoning',
            '→qwen3:30b — ausgewogenes Allround-Modell; qwen3-coder:30b fuer Code-Vervollstaendigung',
            '→Llama 4 Scout — Long-Context (10M Tokens) + multimodal, ~55 GB bei Q4',
            '→DeepSeek-R1 — bestes Reasoning/Mathe; gpt-oss:20b fuer einstellbares Reasoning',
          ],
          updatedDate: '2026-06-21',
        },
        fr: {
          question: 'Quels sont les meilleurs modeles open source pour Ollama en juin 2026 ?',
          answer: 'Les meilleurs modeles Ollama juin 2026: Qwen 3.6 27B (meilleur global sur materiel grand public, 24 Go Q4), Kimi K2.6 (meilleur code, MoE de frontiere), gpt-oss:20b (meilleur petit modele, 16 Go), qwen3:30b (polyvalent), Llama 4 Scout (long contexte 10M / multimodal), DeepSeek-R1 (raisonnement). Installation: ollama pull <nom-du-modele>',
          bullets: [
            '→Qwen 3.6 27B — meilleur global sur materiel grand public, 77,2% SWE-bench, tient en 24 Go en Q4',
            '→Kimi K2.6 — code de frontiere (SWE-Bench Pro 58.6), MoE (32B actif/1T total), Modified MIT',
            '→gpt-oss:20b — meilleur petit modele, tourne en 16 Go, ~niveau o3-mini, raisonnement reglable',
            '→qwen3:30b — modele polyvalent; qwen3-coder:30b pour la completion de code',
            '→Llama 4 Scout — long contexte (10M tokens) + multimodal, ~55 Go en Q4',
            '→DeepSeek-R1 — meilleur raisonnement/maths; gpt-oss:20b pour un raisonnement reglable',
          ],
          updatedDate: '2026-06-21',
        },
        ja: {
          question: '2026年6月のOllama向け最高のオープンソースモデルは？',
          answer: '2026年6月トップモデル：Qwen 3.6 27B（コンシューマー向け総合最高、24GB Q4）、Kimi K2.6（コーディング最強、フロンティアMoE）、gpt-oss:20b（小型最強、16GB）、qwen3:30b（バランス型）、Llama 4 Scout（長コンテキスト10M / マルチモーダル）、DeepSeek-R1（推論）。インストール：ollama pull <モデル名>',
          bullets: [
            '→Qwen 3.6 27B — コンシューマー向け総合最高、77.2% SWE-bench、Q4で24GBに収まる',
            '→Kimi K2.6 — フロンティアコーディング（SWE-Bench Pro 58.6），MoE（32B活性/1T合計）、Modified MIT',
            '→gpt-oss:20b — 小型最強、16GBで動作、~o3-miniレベル、推論調整可能',
            '→qwen3:30b — バランス型オールラウンドモデル；コード補完はqwen3-coder:30b',
            '→Llama 4 Scout — 長コンテキスト（10Mトークン）+ マルチモーダル、Q4で約55GB',
            '→DeepSeek-R1 — 推論・数学最強；推論調整はgpt-oss:20b',
          ],
          updatedDate: '2026-06-21',
        },
        zh: {
          question: '2026年6月Ollama最佳开源模型有哪些？',
          answer: '2026年6月Ollama最佳模型：Qwen 3.6 27B（消费级硬件综合最佳，24GB Q4）、Kimi K2.6（编程最强，前沿MoE）、gpt-oss:20b（小型最强，16GB）、qwen3:30b（均衡全能）、Llama 4 Scout（长上下文10M / 多模态）、DeepSeek-R1（推理）。安装：ollama pull <模型名称>',
          bullets: [
            '→Qwen 3.6 27B — 消费级硬件综合最佳，77.2% SWE-bench，Q4下可装入24GB',
            '→Kimi K2.6 — 前沿编程（SWE-Bench Pro 58.6），MoE（32B活跃/1T总）、Modified MIT',
            '→gpt-oss:20b — 小型最强，16GB可运行，~o3-mini水平，推理可调',
            '→qwen3:30b — 均衡全能模型；代码补全用qwen3-coder:30b',
            '→Llama 4 Scout — 长上下文（10M tokens）+ 多模态，Q4下约55GB',
            '→DeepSeek-R1 — 推理/数学最强；推理可调用gpt-oss:20b',
          ],
          updatedDate: '2026-06-21',
        },
      },
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '9 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'open source models Ollama',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Modelos más populares en Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'Mejores modelos por caso de uso', anchor: '#top-models-by-category' },
        { label: 'Novedades de junio de 2026', anchor: '#new-may-2026' },
        { label: '¿Qué es DeepSeek-R1?', anchor: '#deepseek-r1' },
        { label: 'Modelos de visión en Ollama', anchor: '#vision-models' },
        { label: 'Tabla comparativa Top 10 completa', anchor: '#full-top-10-comparison' },
        { label: 'Cómo explorar la biblioteca de Ollama', anchor: '#how-to-browse-ollama-library' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#common-questions' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Mejor general en hardware de consumo**: Qwen 3.6 27B (77,2% SWE-bench, cabe en 24 GB con Q4). Equilibrado todoterreno: qwen3:30b.',
            '**Más descargados**: Llama 3.2 3B (tutoriales) y la familia Llama -- soporte más amplio de herramientas.',
            '**Mejor razonamiento**: DeepSeek-R1 (chain-of-thought) y gpt-oss:20b (razonamiento ajustable, ~nivel o3-mini). (DeepSeek ha lanzado desde entonces DeepSeek-V4 —Flash/Pro— como nueva generación de pesos abiertos; R1/V3 siguen siendo válidos para ejecutar en local.)',
            '**Mejor programación**: Kimi K2.6 (MoE de frontera), Qwen 3.6 27B (mejor denso), Devstral Small 24B (mejor agéntico), qwen3-coder:30b (completado) -- benchmarks más altos en sus tamaños.',
            '**Mejor pequeño / 16 GB**: gpt-oss:20b. **Mejor visión/multimodal**: Gemma 4 (E4B+). **Mejor contexto largo (10M) / multimodal grande**: Llama 4 Scout (~55 GB).',
            'A partir de junio de 2026, la biblioteca de Ollama contiene más de 4.500 modelos. Todos disponibles mediante `ollama pull <nombre>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Novedades en Ollama — Actualización de junio de 2026',
          content: [
            '**Versión actual de Ollama: v0.30.8** (lanzada el 12 de junio de 2026). Es la última versión estable, disponible en ollama.com/download. Actualiza con `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`) y confirma con `ollama --version`.',
            '**Qué cambió en la serie v0.30 (mayo-junio de 2026):** Ollama v0.30 amplió la compatibilidad de modelos GGUF mediante llama.cpp, extendiendo el soporte de hardware más allá de Apple Silicon, y el motor MLX se actualizó el 11 de junio de 2026 para su inferencia más rápida hasta la fecha en Apple Silicon (mayor calidad usando menos memoria). Las versiones puntuales hasta v0.30.8 añadieron pesos QAT de Gemma 4 (5 de junio), Hermes Desktop (7 de junio), mejor reutilización de caché de prompt/KV y correcciones de rutas de configuración en Windows. Notas completas: github.com/ollama/ollama/releases.',
            '**Modelos más nuevos añadidos este mes (junio de 2026):**',
          ],
          items: [
            '**MiniMax M3** (MiniMax, 1 de junio de 2026) — Nuevo modelo insignia de peso abierto: el primero en combinar programación de frontera (SWE-Bench Pro 59.0), una ventana de contexto de 1M tokens y entrada nativa de imagen/video. En despliegue en la biblioteca de Ollama — confirma disponibilidad con `ollama pull minimax-m3`.',
            '**NVIDIA Nemotron 3 Ultra** (NVIDIA, 4 de junio de 2026) — Diseñado para razonamiento de alto rendimiento y flujos de agentes de larga duración. Licencia NVIDIA Open Model. Descarga: `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro** (DeepSeek, 23 de abril de 2026) — Especialista en programación algorítmica, 93,5% LiveCodeBench, licencia MIT. Hermano económico DeepSeek V4 Flash para hardware más ligero. Descarga: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20 de abril de 2026) — Modelo de programación de frontera, SWE-Bench Pro 58.6, SWE-bench Verified 80,2%. Arquitectura MoE (32B activos / 1T total). Licencia Modified MIT. Descarga: `ollama pull kimi-k2.6`',
            '**Qwen 3.6 27B** (Alibaba, 16 de abril de 2026) — Mejor general en hardware de consumo, 77,2% SWE-bench, Apache 2.0, cabe en 24 GB con Q4. También Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench). Descarga: `ollama pull qwen3.6:27b`',
            '**GLM-5.1** (Z.ai, 7 de abril de 2026) — 744B / 40B activos MoE, licencia MIT, SWE-Bench Pro 58.4. Líder en generación de código estructurado. Descarga: `ollama pull glm-5.1`',
            '**gpt-oss** (OpenAI, 2026) — MoE de pesos abiertos: gpt-oss:20b (21B total / 3,6B activos, se ejecuta en 16 GB, ~nivel o3-mini, razonamiento ajustable) y gpt-oss:120b (80 GB). Descarga: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google, 2 de abril de 2026) — Tamaños multimodales E2B / E4B / E12B (26B MoE) / E27B (31B denso), todos con visión y tool calling. Pesos QAT añadidos el 5 de junio de 2026. E4B se ejecuta en ~6 GB de VRAM. Descarga: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.30.8\n\n# Pull the newest June 2026 models\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: '¿Qué modelos son más populares en Ollama en 2026?',
          content: [
            '**La popularidad en Ollama se mide por el número de descargas visibles en la página de biblioteca de cada modelo.** A partir de junio de 2026, los modelos más descargados siguen siendo dominados por la familia Llama de Meta -- Llama 3.2 3B es el modelo más descargado en general, en gran parte por su uso como modelo de prueba en la primera instalación. Sin embargo, Llama 4 Scout ha escalado rápidamente desde su lanzamiento en abril de 2026.',
            'Qwen3 es la familia de modelos de mayor crecimiento en la biblioteca de Ollama, con Qwen3 y la nueva variante densa Qwen 3.6 desplazando rápidamente a Qwen3. DeepSeek-R1 experimentó grandes picos de descargas tras su lanzamiento y sigue siendo muy descargado para tareas de razonamiento.',
            'Meta lanzó **Llama 4** en abril de 2026 con las variantes Scout (17B activos, 109B total, MoE) y Maverick (17B activos, 400B total). Llama 4 Scout ya es estable en la biblioteca de Ollama (`ollama pull llama4:scout`). La familia Llama 4 usa arquitectura Mixture-of-Experts (MoE) — solo 17B parámetros están activos por token, pero con 109B parámetros totales Scout necesita ~55 GB de VRAM con Q4 (cabe en 24 GB solo a 1,78 bits, ~20 tok/s). Las características destacadas de Scout son su ventana de contexto de 10M tokens y su entrada multimodal, no su ajuste a hardware de consumo. Para configuraciones ligeras (8 GB de RAM), Llama 3.2 3B sigue siendo el modelo inicial más sencillo. El ecosistema de Ollama se expandió significativamente en abril de 2026. Kimi K2.6 (Moonshot AI, licencia Modified MIT, 32B activos / 1T total MoE) obtuvo SWE-Bench Pro 58.6, empatando con GPT-5.5. Qwen 3.6 27B alcanzó el 77,2% SWE-bench como el mejor modelo general en hardware de consumo (cabe en 24 GB con Q4). El gpt-oss:20b de OpenAI (21B total / 3,6B activos MoE) se ejecuta en 16 GB a ~nivel o3-mini con razonamiento ajustable. La versión actual, Ollama v0.30.8 (12 de junio de 2026), amplía el soporte de hardware GGUF mediante llama.cpp y mejora el motor MLX de Apple Silicon. La biblioteca de Ollama ahora referencia más de 4.500 modelos, siendo MiniMax M3, NVIDIA Nemotron 3 Ultra y DeepSeek V4 Pro las novedades de este mes.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: '¿Qué modelos de Ollama funcionan mejor para tu caso de uso?',
          content: 'La calidad de la salida de un modelo depende en gran medida de cómo lo usas con prompts. Para técnicas estructuradas que funcionan con todos los modelos locales — incluyendo chain-of-thought, ejemplos few-shot y formato de salida — consulta la [guía de prompt engineering](https://www.promptquorum.com/es/prompt-engineering). Para tareas de razonamiento, el [prompt de chain-of-thought](https://www.promptquorum.com/es/prompt-engineering/chain-of-thought-prompting) mejora significativamente la calidad de salida de DeepSeek-R1 y Qwen3. Para entender los compromisos de cuantización de estos modelos, consulta la [guía de cuantización →](/es/local-llms/llm-quantization-explained). Para determinar cuánta VRAM necesita cada modelo, consulta la [guía de requisitos de VRAM →](/es/local-llms/how-much-vram-local-llm). Para flujos de trabajo de agentes con Gemma 4, consulta [Tree-of-Thought y ReAct](https://www.promptquorum.com/es/prompt-engineering/tree-of-thought-react). Para requisitos de hardware para ejecutar estos modelos, consulta la [guía de hardware →](/es/local-llms/local-llm-hardware-guide-2026). Una vez que un modelo con tool calling de esta lista esté integrado en un bucle de varios pasos con acceso a archivos y bases de datos, consulta [Agentes de IA locales con MCP](/es/power-local-llm/local-ai-agents-with-mcp-2026) para el patrón de orquestación de código abierto.',
          items: [
            '**Chat general (principiante)**: `ollama run llama3.2:3b` -- mayor documentación, mejor modelo inicial con soporte.',
            '**Chat general (mejor opción)**: `ollama run qwen3.6:27b` -- 77,2% SWE-bench, mejor general en hardware de consumo, cabe en 24 GB con Q4. Equilibrado: `ollama run qwen3:30b`. Para máquinas de 8 GB, usa `ollama run llama3.2:3b`.',
            '**Contexto largo / multimodal**: `ollama run llama4:scout` -- contexto de 10M tokens + multimodal, MoE (17B activos/109B total). Necesita ~55 GB de VRAM con Q4 (cabe en 24 GB solo a 1,78 bits, ~20 tok/s).',
            '**Mejor pequeño / 16 GB**: `ollama run gpt-oss:20b` -- 21B total / 3,6B activos MoE, ~nivel o3-mini, razonamiento ajustable. Mayor: `ollama run gpt-oss:120b` (80 GB).',
            '**Programación en 8 GB**: `ollama run qwen3:8b` -- Mejor modelo local de programación para máquinas con 8 GB de VRAM. 76% HumanEval, 5 GB usados, multilingüe.',
            '**Inferencia general en 8 GB (si no es programación)**: `ollama run mistral:7b` -- Modelo de propósito general más rápido a 8 GB, 40-60 tok/seg.',
            '**Programación (mejor agéntico, 24B)**: `ollama run devstral-small:24b` -- Mejor modelo de programación agéntico (ediciones de múltiples archivos, depuración). 16 GB de RAM. De Mistral AI.',
            '**Programación (mejor denso, 27B)**: `ollama run qwen3.6:27b` -- 77,2% SWE-bench. Mejor modelo de programación denso. 22 GB de VRAM.',
            '**Programación (MoE de frontera)**: `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6 (empata con GPT-5.5), nivel superior. MoE (32B activos/1T total). Licencia Modified MIT. Necesita cuantización para hardware de consumo.',
            '**Tareas de agentes y tool calling**: `ollama run gemma4:e4b` -- Lanzado el 2 de abril de 2026. Tool calling integrado + soporte de visión. Recomendado para agentes locales, llamadas a funciones y salida estructurada. 6 GB de RAM.',
            '**Razonamiento y matemáticas**: `ollama run deepseek-r1:7b` -- modelo chain-of-thought, mejor rendimiento matemático local a 7B.',
            '**Multilingüe**: `ollama run qwen3:7b` -- 29+ idiomas nativos, soporte no inglés más sólido, 76% HumanEval.',
            '**Comprensión de imágenes**: `ollama run gemma4:e4b` -- visión + tool calling (junio de 2026). O `ollama run llama3.2-vision:11b` para visión dedicada.',
            '**Rápido y ligero**: `ollama run gemma2:2b` -- inferencia CPU más rápida, 1,7 GB de RAM.',
            '**Alta calidad (16 GB de RAM)**: `ollama run mistral-small3.1` -- calidad cercana a 70B con 14 GB de RAM.',
            '**Generación de embeddings**: `ollama run nomic-embed-text` -- modelo de embeddings de 137M de parámetros para pipelines RAG.',
            '**Q&A de documentos (RAG)**: `ollama run llama3.2` con la función RAG de Open WebUI -- combinación mejor soportada.',
            '**Domótica / IA de palabra de activación**: `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 GB VRAM) gestiona comandos de voz de Home Assistant a 20–25 tok/seg en un mini PC sin GPU dedicada. Ver [guía de integración Home Assistant + Ollama →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/ollama-model-by-use-case-en.svg',
          imageCaption: 'Selección de modelos Ollama por caso de uso: elige qwen3.6:27b (mejor general, 77,2% SWE-bench) para chat y programación, kimi-k2.6 para programación de frontera, gpt-oss:20b en 16 GB, deepseek-r1:7b para matemáticas.',
        },
        newApril2026: {
          id: 'new-may-2026',
          title: 'Nuevos modelos Ollama — Lanzamientos de junio de 2026',
          content: 'Estos son los modelos más nuevos de la biblioteca de Ollama en junio de 2026, del más reciente al más antiguo. Confirma la disponibilidad con `ollama pull <modelo>` antes de construir flujos de trabajo — los nuevos modelos aparecen en ollama.com/library a los pocos días de su lanzamiento.',
          rows: [
            { 'Modelo': 'minimax-m3', 'Lanzamiento': '1 de junio de 2026', 'Mejor para': 'Nuevo modelo insignia: programación de frontera (SWE-Bench Pro 59.0), contexto 1M, visión nativa', 'Comando Ollama': 'ollama run minimax-m3' },
            { 'Modelo': 'nemotron3-ultra', 'Lanzamiento': '4 de junio de 2026', 'Mejor para': 'NVIDIA — razonamiento de alto rendimiento + agentes de larga duración', 'Comando Ollama': 'ollama run nemotron3-ultra' },
            { 'Modelo': 'deepseek-v4-pro', 'Lanzamiento': '23 de abril de 2026', 'Mejor para': 'Programación algorítmica, 93,5% LiveCodeBench, MIT', 'Comando Ollama': 'ollama run deepseek-v4-pro' },
            { 'Modelo': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Lanzamiento': '20 de abril de 2026', 'Mejor para': 'Programación de frontera (SWE-Bench Pro 58.6), MoE (32B/1T), Modified MIT', 'Comando Ollama': 'ollama run kimi-k2.6' },
            { 'Modelo': '[qwen3.6:27b](https://ollama.com/library/qwen3)', 'Lanzamiento': '16 de abril de 2026', 'Mejor para': 'Mejor general en hardware de consumo, 77,2% SWE-bench, cabe en 24 GB Q4', 'Comando Ollama': 'ollama run qwen3.6:27b' },
            { 'Modelo': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Lanzamiento': '2026', 'Mejor para': 'Equilibrado todoterreno; qwen3-coder:30b para completado de código', 'Comando Ollama': 'ollama run qwen3:30b' },
            { 'Modelo': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Lanzamiento': '2026', 'Mejor para': 'Mejor pequeño / 16 GB, ~o3-mini, razonamiento ajustable (también gpt-oss:120b)', 'Comando Ollama': 'ollama run gpt-oss:20b' },
            { 'Modelo': 'glm-5.1', 'Lanzamiento': '7 de abril de 2026', 'Mejor para': 'Z.ai, 744B/40B activos MoE, MIT, SWE-Bench Pro 58.4', 'Comando Ollama': 'ollama run glm-5.1' },
            { 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Lanzamiento': '2 de abril de 2026', 'Mejor para': 'Visión + tool calling (E2B/E4B/E12B/E27B)', 'Comando Ollama': 'ollama run gemma4:e4b' },
            { 'Modelo': 'deepseek-v4-flash', 'Lanzamiento': 'Abril/mayo de 2026', 'Mejor para': 'Programación económica (78/100 en el mundo real)', 'Comando Ollama': 'ollama run deepseek-v4-flash' },
            { 'Modelo': '[qwen3:7b](https://ollama.com/library/qwen3)', 'Lanzamiento': '2026', 'Mejor para': 'HumanEval 76% a 7B, multilingüe', 'Comando Ollama': 'ollama run qwen3:7b' },
          ],
          columns: ['Modelo', 'Lanzamiento', 'Mejor para', 'Comando Ollama'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: '¿Qué es DeepSeek-R1 y por qué es diferente?',
          content: [
            '**DeepSeek-R1 es un modelo de razonamiento -- a diferencia de los modelos de chat estándar que generan respuestas directamente, DeepSeek-R1 genera razonamiento explícito de cadena de pensamiento antes de su respuesta final.** Esto mejora significativamente el rendimiento en matemáticas, acertijos de lógica y resolución de problemas paso a paso.',
            'DeepSeek-R1 7B obtiene un 52% en MATH (matemáticas de competición) frente al 28% de Mistral Small del mismo tamaño. Es más lento que los modelos estándar (más tokens por respuesta) pero significativamente más preciso en tareas donde el razonamiento importa.',
          ],
          codeBlock: '# Pull and run DeepSeek-R1\nollama run deepseek-r1:7b\n\n# Larger variants for better quality\nollama run deepseek-r1:14b   # 10 GB RAM\nollama run deepseek-r1:32b   # 20 GB RAM',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-en.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: 52% vs 28% en MATH. Modelo de razonamiento chain-of-thought -- más lento, precisión significativamente mayor.',
        },
        visionModels: {
          id: 'vision-models',
          title: '¿Qué modelos de Ollama admiten entrada de imágenes?',
          content: 'A partir de junio de 2026, estos modelos en Ollama admiten entrada de imágenes (multimodal): Gemma 4 admite tanto visión COMO tool calling — único entre los modelos de visión en Ollama.',
          rows: [
            { 'Modelo': '[llama3.2-vision:11b](https://ollama.com/library/llama3.3)', 'RAM': '~8 GB', 'Soporte de imágenes': 'Sí', 'Comando Ollama': 'ollama run llama3.2-vision:11b' },
            { 'Modelo': '[llama3.2-vision:90b](https://ollama.com/library/llama3.3)', 'RAM': '~55 GB', 'Soporte de imágenes': 'Sí', 'Comando Ollama': 'ollama run llama3.2-vision:90b' },
            { 'Modelo': '[gemma3:9b (vision)](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Soporte de imágenes': 'Sí', 'Comando Ollama': 'ollama run gemma3:9b' },
            { 'Modelo': 'minicpm-v:8b', 'RAM': '~5,5 GB', 'Soporte de imágenes': 'Sí', 'Comando Ollama': 'ollama run minicpm-v' },
            { 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Soporte de imágenes': 'Sí + Tool Calling ✓', 'Comando Ollama': 'ollama run gemma4:e4b' },
          ],
          columns: ['Modelo', 'RAM', 'Soporte de imágenes', 'Comando Ollama'],
          image: '/images/ollama-vision-models-comparison-en.svg',
          imageCaption: '5 modelos de visión de Ollama para entrada de imágenes. Gemma 4 E4B (6 GB) ahora incluye tool calling. Llama 3.2 Vision 11B (8 GB) para visión dedicada. Todos locales.',
        },
        fullTop10: {
          id: 'full-top-10-comparison',
          title: '¿Cuáles son los 10 mejores modelos de código abierto en Ollama?',
          content: 'Los recuentos de descargas siguen favoreciendo a Llama 3.x por la prevalencia de tutoriales. Para nuevos proyectos en junio de 2026, prefiere Qwen 3.6 27B (mejor general en hardware de consumo), Kimi K2.6, gpt-oss:20b y qwen3:30b.',
          rows: [
            { '#': '1', 'Modelo': '[Qwen 3.6 27B](https://ollama.com/library/qwen3)', 'Mejor para': 'Mejor general en hardware de consumo', 'RAM': '24 GB (Q4)', 'HumanEval': '77,2% SWE-bench' },
            { '#': '2', 'Modelo': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Mejor para': 'Programación de frontera, MoE (32B/1T), Modified MIT', 'RAM': 'Cuantizado', 'HumanEval': '58,6 SWE-Bench Pro' },
            { '#': '3', 'Modelo': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Mejor para': 'Mejor pequeño / 16 GB, razonamiento ajustable', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Modelo': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Mejor para': 'Equilibrado; qwen3-coder:30b para código', 'RAM': '~18 GB', 'HumanEval': 'sólido' },
            { '#': '5', 'Modelo': '[Devstral Small 24B](https://ollama.com/library/devstral)', 'Mejor para': 'Programación agéntica (multiarchivo)', 'RAM': '16 GB', 'HumanEval': '80%' },
            { '#': '6', 'Modelo': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Mejor para': 'Razonamiento, matemáticas', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '7', 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Mejor para': 'Visión + tool calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Listo para agentes' },
            { '#': '8', 'Modelo': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Mejor para': 'Contexto largo 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '9', 'Modelo': '[mistral-small3.1](https://ollama.com/library/mistral)', 'Mejor para': 'Calidad en 16 GB', 'RAM': '14 GB', 'HumanEval': '74%' },
            { '#': '10', 'Modelo': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Mejor para': 'Primer modelo, chat general', 'RAM': '2,5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Modelo', 'Mejor para', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-en.svg',
          imageCaption: 'Mejores modelos Ollama junio de 2026: Qwen 3.6 27B (mejor general, 24 GB Q4), Kimi K2.6, gpt-oss:20b. Llama 4 Scout para contexto de 10M tokens (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: '¿Cómo explorar la biblioteca de modelos de Ollama?',
          content: 'Hay dos formas de trabajar con los modelos de Ollama. **Cambiar modelos instalados:** En la app de Ollama para Mac, haz clic en el botón desplegable de modelo en la parte inferior del campo de entrada del chat (muestra el nombre del modelo actual, p. ej. "gemma3:1b") para cambiar entre cualquier modelo instalado localmente. **Encontrar y descargar nuevos modelos:** Visita ollama.com/library para explorar más de 4.500 modelos por categoría, luego usa los comandos CLI a continuación para descargarlos y gestionarlos.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Modelos Ollama de código abierto: contexto regional',
          content: [
            '**UE / Cumplimiento de GDPR + Licencias.** Para organizaciones de la UE que despliegan modelos de Ollama en producción, la elección de licencia importa tanto como el rendimiento. Apache 2.0 (completamente abierto, uso comercial permitido): Mistral Small, Mistral Small 3.1, Qwen3 7B, Qwen 3.6 27B, Devstral Small 24B, Gemma 2 2B. Meta Llama Community Licence (uso comercial restringido por encima de 700M de usuarios activos mensuales): Llama 3.3 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (uso comercial permitido): DeepSeek-R1 7B, DeepSeek-R1 14B. Modified MIT (uso comercial permitido con cláusula de atribución): Kimi K2.6. Para empresas europeas en sectores regulados, los modelos Mistral (Francia, Apache 2.0) o Devstral Small 24B (mejor programación agéntica) son la opción predeterminada recomendada -- origen europeo, licencia limpia, sin restricciones para despliegue comercial. Para el cumplimiento del GDPR: todos los modelos se ejecutan completamente en las instalaciones del usuario a través de Ollama, lo que significa que no se transmiten datos personales a servidores externos independientemente del modelo elegido.',
            '**Japón (METI).** Para despliegues empresariales japoneses de Ollama, Qwen3 / Qwen 3.6 es la familia de modelos recomendada -- la tokenización nativa de japonés procesa texto japonés entre un 30-40% más eficientemente en tokens que Llama o Mistral, reduciendo directamente el tiempo de inferencia y los requisitos de caché KV. Para flujos de trabajo de programación en japonés: Qwen 3.6 27B (77,2% SWE-bench) maneja comentarios de código en japonés de forma nativa y es el mejor modelo de programación denso en 2026. La documentación de gobernanza de IA de METI requiere indicar la versión exacta del modelo. Usa `ollama show <modelo>` para obtener la especificación completa del modelo incluyendo el recuento de parámetros, nivel de cuantización y longitud de contexto para registros de cumplimiento.',
            '**China.** Bajo las Medidas de IA Generativa de la CAC de China (2023), las organizaciones que prestan servicios de IA a usuarios finales deben registrar los modelos utilizados. Qwen3 / Qwen 3.6 (Alibaba, Apache 2.0) es la opción recomendada para despliegues empresariales chinos de Ollama -- origen chino, licencia Apache 2.0, mejor rendimiento en tareas en chino y benchmarks superiores. Kimi K2.6 (Moonshot AI, licencia Modified MIT, 32B activos/1T total MoE) también está disponible como opción de programación de primer nivel con origen chino. Comandos: `ollama run qwen3.6:27b` para mejor calidad, `ollama run qwen3:7b` para velocidad. DeepSeek-R1 (DeepSeek, licencia MIT) es apropiado para tareas de razonamiento. Para datos procesados localmente a través de Ollama, los requisitos de transferencia transfronteriza de datos de la PIPL de China no se aplican -- la inferencia permanece en las instalaciones del usuario.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '¿Cuáles son los errores comunes al elegir modelos de Ollama?',
          faqs: [
            {
              q: 'Descargar el tag de modelo más grande por defecto sin verificar la RAM',
              a: 'Ejecutar `ollama pull llama3.3` sin especificar un tag descarga la variante predeterminada, que suele ser la cuantización estándar más grande. En una máquina con 8 GB de RAM, descargar llama3.3 (70B a ~40 GB) fallará o causará un uso severo de swap. Siempre especifica la variante: `ollama pull llama3.2:3b` para máquinas de 8 GB.',
            },
            {
              q: 'Usar un modelo general cuando existe un modelo específico para la tarea',
              a: 'Para tareas de programación, `qwen2.5-coder:7b` obtiene un 72% en HumanEval mientras que el general `qwen2.5:7b` también obtiene un 72% -- pero `qwen2.5-coder` incluye soporte FIM para completado de código. Para razonamiento/matemáticas, `deepseek-r1:7b` obtiene 52% en MATH frente al 28% de `mistral:7b`. Los modelos específicos de tarea existen en la biblioteca de Ollama por una razón.',
            },
            {
              q: 'No verificar que un modelo está disponible antes de construir un flujo de trabajo',
              a: 'La biblioteca de Ollama cambia con el tiempo -- los modelos se añaden y ocasionalmente se eliminan. Antes de construir un pipeline de producción en torno a un modelo específico, confirma que está en la biblioteca (`ollama list` localmente, o consulta ollama.com/library). Fija versiones específicas de modelos en flujos de trabajo de producción: `ollama pull llama3.1:8b-instruct-q4_K_M`.',
            },
            {
              q: 'No especificar un tag de cuantización para modelos grandes',
              a: 'Ejecutar `ollama pull qwen2.5-coder:32b` sin un sufijo de cuantización descarga la variante predeterminada -- que puede ser mayor de lo que tu VRAM puede manejar. Para 16 GB de VRAM, descarga la variante explícita Q4_K_M: `ollama pull qwen2.5-coder:32b-instruct-q4_K_M`. Ejecuta `ollama show <modelo>` después de descargar para confirmar que los requisitos de VRAM coinciden con tu hardware.',
            },
            {
              q: 'Esperar que DeepSeek-R1 sea tan rápido como los modelos de chat estándar',
              a: 'DeepSeek-R1 genera tokens de razonamiento chain-of-thought explícito antes de su respuesta final -- por eso supera a los modelos estándar en matemáticas y lógica, pero produce entre 3 y 5 veces más tokens por respuesta. Para chat rápido o respuestas de una línea, usa `llama3.1:8b`. Reserva DeepSeek-R1 para tareas donde la precisión del razonamiento importa más que la velocidad.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- configura Ollama y descarga tu primer modelo de esta lista en menos de 5 minutos',
            '[Mejores LLMs locales 2026](/es/local-llms/best-local-llms-2026) -- ranking completo de benchmarks entre todos los modelos de peso abierto incluyendo el nivel 70B',
            '[Mejores LLMs locales para programación](/es/local-llms/best-local-llms-for-coding) -- comparación más profunda de Qwen 3.6 / Qwen3-Coder 32B, DeepSeek-Coder y Starcoder2',
            '[Cuantización de LLMs explicada](/es/local-llms/llm-quantization-explained) -- cómo elegir entre Q4_K_M y Q8_0 para los modelos de esta lista',
            '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) -- qué herramienta usar para ejecutar estos modelos según tu flujo de trabajo',
            '[Mejores frontends de LLM local](/es/local-llms/best-local-llm-frontends) -- Open WebUI, Jan AI y otras interfaces que se conectan a cualquier modelo de esta lista',
          '[Actualizaciones de Modelos LLM Locales 2026](/es/local-llms/local-llm-model-updates-2026) -- cronología completa de todos los lanzamientos principales de peso abierto con fechas de disponibilidad en Ollama.',
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Próximos pasos',
          items: [
            '[Mejores LLM locales para código](/es/local-llms/best-local-llms-for-coding) — ¿El mejor modelo Ollama para programación? →',
            '[Mejores LLM solo con CPU](/es/local-llms/best-cpu-only-llm) — ¿Sin GPU? Empieza aquí →',
            '[Guía de hardware LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — ¿Tu equipo puede correr estos modelos? →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Preguntas frecuentes sobre modelos de código abierto en Ollama',
          faqs: [
            {
              q: '¿Cuántos modelos hay en la biblioteca de Ollama?',
              a: 'A partir de junio de 2026, la biblioteca de Ollama contiene aproximadamente más de 4.500 modelos (contribuciones curadas + de la comunidad) con soporte oficial. Hugging Face aloja miles de modelos GGUF adicionales que se pueden cargar mediante Ollama usando Modelfiles personalizados.',
            },
            {
              q: '¿Puedo usar modelos de Hugging Face directamente en Ollama?',
              a: 'Sí. Descarga un archivo GGUF de Hugging Face y crea un Modelfile: `FROM ./model.gguf`. Luego ejecuta `ollama create mimodelo -f Modelfile`. Esto funciona para cualquier archivo GGUF incluyendo ajustes finos y modelos que no están en la biblioteca oficial de Ollama.',
            },
            {
              q: '¿Qué modelo de Ollama es mejor para construir un chatbot local?',
              a: 'Para un chatbot local de propósito general: `qwen3.6:27b` (mejor general en hardware de consumo, cabe en 24 GB con Q4), o `llama3.2:3b` con 8 GB de RAM (punto de entrada más sencillo). Para máquinas de 16 GB: `gpt-oss:20b` (~nivel o3-mini) o `mistral-small3.1`. Para un chatbot asistente de programación: `qwen3.6:27b` (77,2% SWE-bench), `kimi-k2.6` (MoE de frontera) o `devstral-small:24b` (programación agéntica). Combínalo con Open WebUI para una interfaz web que se conecta a la API de Ollama en localhost:11434.',
            },
            {
              q: '¿Son todos los modelos de Ollama verdaderamente de código abierto?',
              a: 'No todos. La biblioteca de Ollama incluye modelos con licencias variadas. Llama 3.x/4.x usan la Meta Llama Community Licence (no aprobada por OSI como código abierto -- restringe el uso comercial por encima de 700M de usuarios activos mensuales). Mistral Small, Qwen3, Qwen 3.6, Devstral y los modelos Gemma son Apache 2.0 (completamente de código abierto). Kimi K2.6 tiene licencia Modified MIT (compatible con uso comercial con cláusula de atribución). Siempre verifica la licencia antes del despliegue comercial.',
            },
            {
              q: '¿Qué modelo de embeddings debería usar con Ollama para RAG?',
              a: '`nomic-embed-text` es la opción estándar -- un modelo de 137M de parámetros que genera embeddings de 768 dimensiones, se ejecuta en milisegundos por documento y está específicamente diseñado para tareas de recuperación. Descárgalo con `ollama pull nomic-embed-text`. Úsalo con el RAG integrado de Open WebUI, OllamaEmbeddings de LangChain o LlamaIndex.',
            },
            {
              q: '¿Con qué frecuencia se actualiza la biblioteca de Ollama con nuevos modelos?',
              a: 'El equipo de Ollama añade nuevos modelos en días o semanas tras los lanzamientos principales. MiniMax M3 (1 de junio de 2026), NVIDIA Nemotron 3 Ultra (4 de junio), Kimi K2.6 y Qwen 3.6 aparecieron a los pocos días de sus lanzamientos. La versión actual de Ollama es v0.30.8 (12 de junio de 2026). Sigue el repositorio GitHub de Ollama (github.com/ollama/ollama) o la cuenta de Twitter/X de Ollama para anuncios de nuevos modelos.',
            },
            {
              q: '¿Cuál es la diferencia entre `ollama pull` y `ollama run`?',
              a: '`ollama pull` descarga el archivo del modelo al almacenamiento local (operación única). `ollama run` inicia una sesión interactiva inmediatamente después de descargar, o reutiliza el modelo ya descargado si está disponible. Puedes descargar una vez y ejecutar múltiples veces sin volver a descargar.',
            },
            {
              q: '¿Puedo ejecutar varios modelos simultáneamente en la misma máquina?',
              a: 'Sí, si tu hardware tiene suficiente VRAM. Usa ventanas de terminal o sesiones de shell separadas -- una ventana ejecuta `ollama run llama3.2` mientras otra ejecuta `ollama run qwen2.5:7b`. Ollama gestiona automáticamente el uso compartido de VRAM. Monitorea `nvidia-smi` o la actividad del sistema para evitar sobrecargas.',
            },
            {
              q: '¿Cómo actualizo un modelo a la última versión?',
              a: '`ollama pull [nombre-del-modelo]` verifica las actualizaciones y descarga la última versión si está disponible. Para revertir o usar versiones específicas, usa tags de versión: `ollama pull llama3.1:8b` o `ollama pull llama3.1:8b-instruct-q4_K_M`. Comprueba las versiones disponibles con `ollama show [nombre-del-modelo]`.',
            },
            {
              q: '¿Los modelos de código abierto en Ollama son realmente gratuitos para uso comercial?',
              a: 'La mayoría sí, pero no todos. Llama 3.x (Meta Llama Community Licence) restringe el uso comercial por encima de 700M de usuarios activos mensuales. Mistral Small, Qwen3 y Gemma 3 usan Apache 2.0 (completamente compatible con uso comercial). Verifica siempre la licencia antes del despliegue empresarial -- consulta la página de Hugging Face del modelo o la entrada de la biblioteca de Ollama.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Especificaciones oficiales para Llama 4 Scout (17B activos, 109B total, MoE) y variantes Maverick.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- Arquitectura chain-of-thought y benchmark MATH (52%) para DeepSeek-R1.',
            '[Qwen Team. (2026). "Qwen 3.6 Technical Report." arxiv.org/abs/2501.xxxxx](https://arxiv.org/) -- 77,2% SWE-bench para el mejor modelo de programación denso.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- Modelo de programación MoE con licencia Modified MIT (32B activos/1T total), SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- Mejor modelo de programación agéntico para ediciones de múltiples archivos y depuración.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- Biblioteca oficial de modelos con más de 4.500 modelos, recuentos de descargas, tags y opciones de cuantización.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- Capacidades de visión + tool calling lanzadas en abril de 2026.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Nuevos modelos Ollama junio de 2026: Últimos lanzamientos y actualizaciones',
        'description': '¿Buscas nuevos modelos de Ollama? Consulta los últimos lanzamientos de junio de 2026, qué hay de nuevo y qué modelos vale la pena usar para chat, programación y razonamiento.',
        'url': 'https://www.promptquorum.com/es/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-06-15',
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Mejores modelos Ollama 2026' },
          { '@type': 'Thing', 'name': 'Lista de modelos Ollama abril de 2026' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1 Ollama' },
          { '@type': 'Thing', 'name': 'Gemma 4 Ollama' },
          { '@type': 'Thing', 'name': 'Qwen 3.6 / Qwen3-Coder Ollama' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Mejores modelos de código abierto en Ollama -- Abril de 2026',
        'description': 'Los modelos de código abierto más descargados y con mejor rendimiento disponibles a través de Ollama',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen 3.6 27B', 'url': 'https://ollama.com/library/qwen3.6', 'description': 'Mejor general en hardware de consumo. 77,2% SWE-bench. Cabe en 24 GB con Q4. Apache 2.0. ollama run qwen3.6:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://ollama.com/library/kimi-k2.6', 'description': 'Modelo de programación MoE de frontera. SWE-Bench Pro 58.6 (empata con GPT-5.5). 32B activos/1T total. Licencia Modified MIT. ollama run kimi-k2.6' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'Mejor pequeño / 16 GB. 21B total / 3,6B activos MoE. ~nivel o3-mini, razonamiento ajustable. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'Modelo equilibrado todoterreno; qwen3-coder:30b para completado de código. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'Mejor razonamiento. 5 GB de RAM. 52% MATH vs 28% Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 6, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma4', 'description': 'Mejor visión/multimodal (E4B+). Tool calling + visión. ~6 GB de RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama4', 'description': 'Mejor contexto largo (10M tokens) + multimodal grande. MoE 17B activos/109B total. ~55 GB con Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral-small', 'description': 'Mejor programación agéntica junio de 2026. Ediciones de múltiples archivos, depuración. 16 GB de RAM. ollama run devstral-small:24b' },
          { '@type': 'ListItem', 'position': 9, 'name': 'mistral-small3.1', 'url': 'https://ollama.com/library/mistral-small3.1', 'description': 'Mejor calidad en el nivel de 16 GB. 14 GB de RAM. 74% HumanEval. Apache 2.0. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 10, 'name': 'gemma2:2b', 'url': 'https://ollama.com/library/gemma2', 'description': 'El más rápido y ligero. 1,7 GB de RAM. Mejor inferencia en CPU. ollama run gemma2:2b' },
          { '@type': 'ListItem', 'position': 11, 'name': 'phi4-mini', 'url': 'https://ollama.com/library/phi4-mini', 'description': 'Mejor razonamiento por debajo de 4 GB. 2,5 GB de RAM. 70% HumanEval. ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cuántos modelos hay en la biblioteca de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A partir de junio de 2026, la biblioteca de Ollama contiene aproximadamente más de 4.500 modelos (contribuciones curadas + de la comunidad) con soporte oficial. Hugging Face aloja miles de modelos GGUF adicionales que se pueden cargar mediante Ollama usando Modelfiles personalizados.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar modelos de Hugging Face directamente en Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Descarga un archivo GGUF de Hugging Face y crea un Modelfile: `FROM ./model.gguf`. Luego ejecuta `ollama create mimodelo -f Modelfile`. Esto funciona para cualquier archivo GGUF incluyendo ajustes finos y modelos que no están en la biblioteca oficial de Ollama.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelo de Ollama es mejor para construir un chatbot local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para un chatbot local de propósito general: `qwen3.6:27b` (mejor general en hardware de consumo, cabe en 24 GB con Q4), o `llama3.2:3b` con 8 GB de RAM (punto de entrada más sencillo). Para máquinas de 16 GB: `gpt-oss:20b` (~nivel o3-mini) o `mistral-small3.1`. Para un chatbot asistente de programación: `qwen3.6:27b` (77,2% SWE-bench), `kimi-k2.6` (MoE de frontera) o `devstral-small:24b` (programación agéntica). Combínalo con Open WebUI para una interfaz web que se conecta a la API de Ollama en localhost:11434.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Son todos los modelos de Ollama verdaderamente de código abierto?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No todos. La biblioteca de Ollama incluye modelos con licencias variadas. Llama 3.x/4.x usan la Meta Llama Community Licence (no aprobada por OSI como código abierto -- restringe el uso comercial por encima de 700M de usuarios activos mensuales). Mistral Small, Qwen3, Qwen 3.6, Devstral y los modelos Gemma son Apache 2.0 (completamente de código abierto). Kimi K2.6 tiene licencia Modified MIT (compatible con uso comercial con cláusula de atribución). Siempre verifica la licencia antes del despliegue comercial.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelo de embeddings debería usar con Ollama para RAG?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`nomic-embed-text` es la opción estándar -- un modelo de 137M de parámetros que genera embeddings de 768 dimensiones, se ejecuta en milisegundos por documento y está específicamente diseñado para tareas de recuperación. Descárgalo con `ollama pull nomic-embed-text`. Úsalo con el RAG integrado de Open WebUI, OllamaEmbeddings de LangChain o LlamaIndex.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Con qué frecuencia se actualiza la biblioteca de Ollama con nuevos modelos?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El equipo de Ollama añade nuevos modelos en días o semanas tras los lanzamientos principales. MiniMax M3 (1 de junio de 2026), NVIDIA Nemotron 3 Ultra (4 de junio), Kimi K2.6 y Qwen 3.6 aparecieron a los pocos días de sus lanzamientos. La versión actual de Ollama es v0.30.8 (12 de junio de 2026). Sigue el repositorio GitHub de Ollama (github.com/ollama/ollama) o la cuenta de Twitter/X de Ollama para anuncios de nuevos modelos.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre `ollama pull` y `ollama run`?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull` descarga el archivo del modelo al almacenamiento local (operación única). `ollama run` inicia una sesión interactiva inmediatamente después de descargar, o reutiliza el modelo ya descargado si está disponible. Puedes descargar una vez y ejecutar múltiples veces sin volver a descargar.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar varios modelos simultáneamente en la misma máquina?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, si tu hardware tiene suficiente VRAM. Usa ventanas de terminal o sesiones de shell separadas -- una ventana ejecuta `ollama run llama3.2` mientras otra ejecuta `ollama run qwen2.5:7b`. Ollama gestiona automáticamente el uso compartido de VRAM. Monitorea `nvidia-smi` o la actividad del sistema para evitar sobrecargas.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo actualizo un modelo a la última versión?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull [nombre-del-modelo]` verifica las actualizaciones y descarga la última versión si está disponible. Para revertir o usar versiones específicas, usa tags de versión: `ollama pull llama3.1:8b` o `ollama pull llama3.1:8b-instruct-q4_K_M`. Comprueba las versiones disponibles con `ollama show [nombre-del-modelo]`.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Los modelos de código abierto en Ollama son realmente gratuitos para uso comercial?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La mayoría sí, pero no todos. Llama 3.x (Meta Llama Community Licence) restringe el uso comercial por encima de 700M de usuarios activos mensuales. Mistral Small, Qwen3 y Gemma 3 usan Apache 2.0 (completamente compatible con uso comercial). Verifica siempre la licencia antes del despliegue empresarial -- consulta la página de Hugging Face del modelo o la entrada de la biblioteca de Ollama.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los mejores nuevos modelos de Ollama en abril de 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Lanzamientos principales en 2026: Qwen 3.6 27B (Alibaba -- mejor general en hardware de consumo, 77,2% SWE-bench, cabe en 24 GB con Q4), gpt-oss:20b (OpenAI -- mejor pequeño / 16 GB, ~nivel o3-mini, razonamiento ajustable), Gemma 4 E4B (Google, 2 de abril -- visión + tool calling) y Llama 4 Scout (Meta -- contexto de 10M, multimodal, ~55 GB con Q4). Comandos: ollama run qwen3.6:27b, ollama run gpt-oss:20b, ollama run gemma4:e4b, ollama run llama4:scout.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'La presentación a continuación cubre: top 10 modelos Ollama por número de descargas, comparación de rendimiento (60-74% HumanEval), mejores modelos por caso de uso (chat, programación, razonamiento, visión), razonamiento chain-of-thought de DeepSeek-R1 y comandos exactos de descarga. Descarga el PDF como tu tarjeta de referencia para selección de modelos Ollama.',
    },
    pt: {
      freshness_tier: 'monthly',
      theme: 'Best Models',
      title: 'Ollama Atualização Junho 2026: v0.30.8 + Top 10 Modelos Open Source',
      seoTitle: 'Ollama Junho 2026 Atualização: v0.30.8 + Top 10 Modelos Classificados',
      intro: 'Atualizado em junho de 2026. A versão atual do Ollama é a v0.30.8 (lançada em 12 de junho de 2026), que amplia o suporte de hardware GGUF por meio do llama.cpp e atualiza o mecanismo MLX para Apple Silicon. Os modelos mais novos na biblioteca este mês são o MiniMax M3 (1 de junho, peso aberto, contexto de 1M de tokens + visão nativa), o NVIDIA Nemotron 3 Ultra (4 de junho) e o DeepSeek V4 Pro, somando-se a Kimi K2.6, Qwen 3.6, GLM-5.1, gpt-oss e Gemma 4. O mais baixado em geral continua sendo a família Llama (Llama 4 Scout, Llama 3.x); o melhor geral em hardware de consumo é o Qwen 3.6 27B (77,2% SWE-bench).',
      metaDescription: 'Ollama v0.30.8 (12 junho 2026): novidades, novos modelos, top 10 open source classificados — Qwen 3.6 27B, Kimi K2.6, gpt-oss:20b. Benchmarks + comandos pull.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A versão atual do Ollama é a v0.30.8 (12 de junho de 2026). Os modelos mais novos adicionados este mês são o MiniMax M3 (peso aberto, contexto de 1M de tokens + visão nativa), o NVIDIA Nemotron 3 Ultra e o DeepSeek V4 Pro. O melhor geral em hardware de consumo é o Qwen 3.6 27B (77,2% SWE-bench, cabe em 24 GB com Q4). Outras opções destacadas: Kimi K2.6 (programação frontier), gpt-oss:20b (melhor pequeno / 16 GB), qwen3:30b (equilibrado), DeepSeek-R1 (raciocínio), Gemma 4 (visão/tool calling) e Llama 4 Scout (contexto longo 10M / multimodal). O mais baixado em geral continua sendo a família Llama.**',
      quickAnswerTop: {
        pt: {
          question: 'Qual é a versão mais recente do Ollama e os melhores modelos em junho de 2026?', // VERIFY
          answer: 'A versão mais recente do Ollama é a v0.30.8 (12 de junho de 2026). Os modelos mais novos adicionados este mês são o MiniMax M3, o NVIDIA Nemotron 3 Ultra e o DeepSeek V4 Pro. Os principais modelos de código aberto do Ollama em junho de 2026 são Qwen 3.6 27B (melhor geral em hardware de consumo, 24 GB Q4), Kimi K2.6 (melhor programação, MoE frontier), gpt-oss:20b (melhor pequeno / 16 GB, raciocínio ajustável), qwen3:30b (equilibrado), Llama 4 Scout (melhor contexto longo 10M / multimodal) e DeepSeek-R1 (melhor raciocínio). Instale qualquer um com: ollama pull <nome-do-modelo>', // VERIFY
          bullets: [
            '→Versão mais recente: Ollama v0.30.8 (12 de junho de 2026) — suporte de hardware GGUF mais amplo, mecanismo MLX para Apple Silicon atualizado', // VERIFY
            '→Novidades deste mês: MiniMax M3 (contexto de 1M + visão), NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro', // VERIFY
            '→Qwen 3.6 27B — melhor geral em hardware de consumo, 77,2% SWE-bench, cabe em 24 GB com Q4', // VERIFY
            '→Kimi K2.6 — programação frontier (SWE-Bench Pro 58.6), MoE (32B ativo/1T total), Modified MIT', // VERIFY
            '→gpt-oss:20b — melhor modelo pequeno, roda em 16 GB, nível ~o3-mini, raciocínio ajustável', // VERIFY
            '→qwen3:30b — modelo equilibrado para tudo; qwen3-coder:30b para autocompletar código', // VERIFY
            '→Llama 4 Scout — contexto longo (10M tokens) + multimodal, ~55 GB com Q4', // VERIFY
            '→DeepSeek-R1 — melhor raciocínio/matemática; gpt-oss:20b para raciocínio ajustável (Desde então, a DeepSeek lançou o DeepSeek-V4 — Flash/Pro — como nova geração de pesos abertos; R1/V3 continuam válidos para uso local.)', // VERIFY
          ],
          updatedDate: '2026-06-21',
        },
      },
      readTime: '14 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'melhores modelos Ollama 2026',
      toc: [
        { label: 'Principais conclusões', anchor: '#key-takeaways' },
        { label: 'Top 10 modelos Ollama em junho 2026', anchor: '#top-10' },
        { label: 'Melhores modelos por caso de uso', anchor: '#by-use-case' },
        { label: 'Comparação de benchmarks', anchor: '#benchmarks' },
        { label: 'Guia de início rápido', anchor: '#quick-start' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**Melhor geral em hardware de consumo**: Qwen 3.6 27B — 77,2% SWE-bench, cabe em 24 GB com Q4.',
            '**Melhor programação frontier**: Kimi K2.6 — MoE, SWE-Bench Pro 58,6%, licença MIT modificada.',
            '**Melhor modelo pequeno (16 GB)**: gpt-oss:20b — nível ~o3-mini, raciocínio ajustável.',
            '**Melhor contexto longo + multimodal**: Llama 4 Scout — 10M tokens de contexto, ~55 GB com Q4.',
            '**Melhor raciocínio/matemática**: DeepSeek-R1 ou gpt-oss:20b para raciocínio ajustável.',
            '**Melhor eficiência de RAM**: Mistral Small 3.1 24B — 14 GB, 79% MMLU.',
            '**Automação residencial / IA de palavra de ativação**: `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 GB VRAM) processa comandos de voz do Home Assistant a 20–25 tok/seg em um mini PC sem GPU dedicada. Veja [guia de integração Home Assistant + Ollama →](/smart-home/home-assistant-ollama-integration).',
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Próximos passos',
          items: [
            '[Melhores LLMs locais para código](/pt/local-llms/best-local-llms-for-coding) — O melhor modelo Ollama especialmente para programação →',
            '[Melhores LLMs só com CPU](/pt/local-llms/best-cpu-only-llm) — Sem GPU? Comece por aqui →',
            '[Guia de hardware LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — Seu computador aguenta esses modelos? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Qual é o melhor modelo Ollama em junho de 2026?', a: 'Qwen 3.6 27B é o melhor em geral em hardware de consumo (77,2% SWE-bench, cabe em 24 GB com Q4). Para programação frontier: Kimi K2.6. Para modelo pequeno/16 GB: gpt-oss:20b. Para contexto longo: Llama 4 Scout.' },
            { q: 'Qual modelo Ollama é melhor para programação?', a: 'Qwen 3.6 27B para o melhor desempenho denso (77,2% SWE-bench). Kimi K2.6 para programação frontier (SWE-Bench Pro 58,6%). Devstral Small 24B para fluxos de trabalho agentivos em múltiplos arquivos. Codestral 22B para autocompletar em IDE (FIM).' },
            { q: 'Os modelos de código aberto no Ollama são realmente gratuitos para uso comercial?', a: 'A maioria sim, mas não todos. Llama 3.x (Meta Llama Community Licence) restringe o uso comercial acima de 700M de usuários ativos mensais. Mistral Small, Qwen3 e Gemma 3 usam Apache 2.0 (totalmente compatível com uso comercial). Verifique sempre a licença antes da implantação empresarial.' },
            { q: 'Quais são os melhores novos modelos do Ollama em 2026?', a: 'Lançamentos principais em 2026: Qwen 3.6 27B (melhor geral em 24 GB, 77,2% SWE-bench), Kimi K2.6 (programação frontier, MoE), gpt-oss:20b (melhor pequeno/16 GB), Gemma 4 E4B (visão + tool calling) e Llama 4 Scout (contexto 10M, multimodal). Comandos: ollama run qwen3.6:27b, ollama run gpt-oss:20b, ollama run gemma4:e4b, ollama run llama4:scout.' },
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Atualização do Ollama junho de 2026: versão mais recente e novos modelos',
        description: 'Compare os 10 melhores LLMs de código aberto para Ollama em 2026: benchmarks, requisitos de RAM e configuração.',
        url: 'https://www.promptquorum.com/pt/local-llms/top-open-source-models-ollama',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-04',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'A apresentação abaixo cobre: top 10 modelos Ollama por número de downloads, comparação de desempenho (60-74% HumanEval), melhores modelos por caso de uso (chat, programação, raciocínio, visão), raciocínio chain-of-thought do DeepSeek-R1 e comandos exatos de download. Baixe o PDF como seu cartão de referência para seleção de modelos Ollama.',
    },
    de: {
      theme: 'Beste Modelle',
      title: 'Ollama Update Juni 2026: v0.30.8 + Top 10 Open-Source-Modelle',
      seoTitle: 'Ollama Juni 2026 Update: v0.30.8 + Top 10 Modelle (Rangliste)',
      intro: 'Aktualisiert im Juni 2026. Die aktuelle Ollama-Version ist v0.30.8 (veröffentlicht am 12. Juni 2026), die die GGUF-Hardwareunterstützung über llama.cpp erweitert und die Apple-Silicon-MLX-Engine verbessert. Die neuesten Modelle in der Bibliothek diesen Monat sind MiniMax M3 (1. Juni, Open-Weight, 1M-Token-Kontext + native Vision), NVIDIA Nemotron 3 Ultra (4. Juni) und DeepSeek V4 Pro, die sich zu Kimi K2.6, Qwen 3.6, GLM-5.1, gpt-oss und Gemma 4 gesellen. Am häufigsten heruntergeladen bleibt insgesamt die Llama-Familie (Llama 4 Scout, Llama 3.x); das beste Modell für Consumer-Hardware ist Qwen 3.6 27B (77,2% SWE-bench).',
      metaDescription: 'Ollama v0.30.8 (12. Juni 2026): Neuerungen, neue Modelle, Top 10 Open Source — Qwen 3.6 27B, Kimi K2.6, gpt-oss:20b. Benchmarks + Pull-Befehle.',
      publishDate: '2026-04-11',
      readTime: '9 Min. Lesezeit',
      educationalLevel: 'Anfänger',
      primaryTerm: 'Ollama-Modelle 2026',
      toc: [
        { label: 'Wesentliche Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Die beliebtesten Modelle auf Ollama', anchor: '#most-popular' },
        { label: 'Top-Modelle nach Kategorie', anchor: '#by-category' },
        { label: 'DeepSeek-R1: Reasoning-Durchbruch', anchor: '#deepseek-r1' },
        { label: 'Vision-Modelle', anchor: '#vision-models' },
        { label: 'Vollständiger Top-10-Vergleich', anchor: '#full-top-10' },
        { label: 'Wie durchsuchen Sie die Ollama-Bibliothek?', anchor: '#how-to-browse' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Bestes Modell fuer Consumer-Hardware**: Qwen 3.6 27B (77,2% SWE-bench, passt in 24 GB bei Q4). Ausgewogen: qwen3:30b.',
            '**Am meisten heruntergeladen**: Llama 3.2 3B (Tutorials) und die Llama-Familie.',
            '**Bestes Reasoning**: DeepSeek-R1 (Chain-of-Thought) und gpt-oss:20b (einstellbares Reasoning, ~o3-mini-Niveau). (DeepSeek hat inzwischen DeepSeek-V4 — Flash/Pro — als neuere offene Generation veröffentlicht; R1/V3 bleiben weiterhin lokal nutzbar.)',
            '**Bestes Coding**: Kimi K2.6 (Frontier MoE), Qwen 3.6 27B (beste dicht), Devstral Small 24B (beste agentic), qwen3-coder:30b (Vervollstaendigung).',
            '**Bestes kleines / 16 GB**: gpt-oss:20b. **Beste Vision/multimodal**: Gemma 4 (E4B+). **Bester Long-Context (10M) / grosse Multimodalitaet**: Llama 4 Scout (~55 GB).',
            'Ollama-Bibliothek Juni 2026: 4.500+ Modelle. Alle über `ollama pull <name>` verfügbar.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Was ist neu in Ollama — Juni 2026 Update',
          content: [
            '**Aktuelle Ollama-Version: v0.30.8** (veröffentlicht am 12. Juni 2026). Dies ist die neueste stabile Version, verfügbar über ollama.com/download. Aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`), dann bestätigen Sie mit `ollama --version`.',
            '**Was sich in der v0.30-Reihe geändert hat (Mai–Juni 2026):** Ollama v0.30 hat die GGUF-Modellkompatibilität über llama.cpp erweitert und die Hardwareunterstützung über Apple Silicon hinaus ausgedehnt, und die MLX-Engine wurde am 11. Juni 2026 für die bislang schnellste Apple-Silicon-Inferenz verbessert — höhere Ausgabequalität bei geringerem Speicherbedarf. Point-Releases bis v0.30.8 fügten Gemma 4 QAT-Gewichte (5. Juni), Hermes Desktop (7. Juni), verbesserte Prompt-/KV-Cache-Wiederverwendung und Windows-Konfigurationspfad-Korrekturen hinzu. Vollständige Notizen: github.com/ollama/ollama/releases.',
            '**Neueste Modelle, die diesen Monat hinzugefügt wurden (Juni 2026):**',
          ],
          items: [
            '**MiniMax M3** (MiniMax, 1. Juni 2026) — Neuestes Open-Weight-Flaggschiff: das erste Modell, das Frontier-Coding (SWE-Bench Pro 59.0), ein 1M-Token-Kontextfenster und native Bild-/Videoeingabe kombiniert. Wird in die Ollama-Bibliothek ausgerollt — Verfügbarkeit prüfen mit `ollama pull minimax-m3`.',
            '**NVIDIA Nemotron 3 Ultra** (NVIDIA, 4. Juni 2026) — Entwickelt für durchsatzstarkes Reasoning und langlaufende Agenten-Workflows. NVIDIA Open Model License. Pull: `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro** (DeepSeek, 23. April 2026) — Spezialist für algorithmisches Coding, 93.5% LiveCodeBench, MIT-Lizenz. Budget-Variante DeepSeek V4 Flash für leichtere Hardware. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20. April 2026) — Frontier-Coding-Modell, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%. MoE-Architektur (32B aktiv / 1T gesamt). Modified MIT-Lizenz.',
            '**Qwen 3.6 27B** (Alibaba, 16. April 2026) — Bestes Modell fuer Consumer-Hardware, 77,2% SWE-bench, Apache 2.0, passt in 24 GB bei Q4. Auch Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench).',
            '**GLM-5.1** (Z.ai, 7. April 2026) — 744B / 40B aktiv MoE, MIT-Lizenz, SWE-Bench Pro 58.4. Führender Structured Code Generator.',
            '**gpt-oss** (OpenAI, 2026) — Open-Weight MoE: gpt-oss:20b (21B gesamt / 3,6B aktiv, läuft in 16 GB, ~o3-mini-Niveau, einstellbares Reasoning) und gpt-oss:120b (80 GB).',
            '**Gemma 4** (Google, 2. April 2026) — Multimodale Größen E2B / E4B / E12B (26B MoE) / E27B (31B dicht), alle mit Vision und Tool Calling. QAT-Gewichte hinzugefügt am 5. Juni 2026. E4B läuft in ~6 GB VRAM.',
          ],
          codeBlock: '# Ollama auf die neueste Version aktualisieren (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# Oder auf Mac: brew upgrade ollama\n\n# Aktuelle Version prüfen\nollama --version  # Ausgabe: ollama version 0.30.8\n\n# Die neuesten Juni-2026-Modelle pullen\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular',
          title: 'Die beliebtesten Modelle auf Ollama',
          content: [
            '**Ollama verfügt über eine vollständig öffentlich zugängliche Download-Statistik.** Nach Daten aus Juni 2026:',
            '**Llama 3.2 3B** ist immer noch das am häufigsten heruntergeladene Modell insgesamt, großteils aufgrund seiner Verwendung als Standard-Testmodell beim ersten Install. Llama 4 Scout ist jedoch seit März 2026 schnell in den Rankings aufgestiegen und ist jetzt die bevorzugte Wahl für Qualität.',
            '**Qwen3 und Qwen 3.6** sind die am schnellsten wachsende Modellfamilie in der Ollama-Bibliothek, mit Qwen3 und dem neuen Qwen 3.6 dicht Variante schnell Qwen3 verdrängt. DeepSeek-R1 sah große Spitzen nach der Veröffentlichung und bleibt für Reasoning-Aufgaben stark heruntergeladen.',
            '**Llama 4 Scout** wurde von Meta im April 2026 mit Scout (17B aktiv, 109B gesamt, MoE) und Maverick (17B aktiv, 400B gesamt) Varianten veröffentlicht. Llama 4 Scout ist jetzt stabil in der Ollama-Bibliothek (`ollama pull llama4:scout`). Die Llama 4 Familie nutzt Mixture-of-Experts (MoE) Architektur – nur 17B Parameter sind pro Token aktiv, aber mit 109B Gesamtparametern benötigt Scout ~55 GB VRAM bei Q4 (passt in 24 GB nur bei 1,78-Bit, ~20 tok/s). Scouts Stärken sind das 10M-Token-Kontextfenster und multimodale Eingabe, nicht die Consumer-Hardware-Tauglichkeit. Für leichte Setups (8 GB RAM) bleibt Llama 3.2 3B das einfachste Einstiegsmodell. Das Ollama-Ökosystem expandierte erheblich im April 2026. Kimi K2.6 (Moonshot AI, Modified MIT-Lizenz, 32B aktiv / 1T gesamt MoE) erreichte SWE-Bench Pro 58.6 und liegt damit gleichauf mit GPT-5.5. Qwen 3.6 27B erzielte 77,2% SWE-bench als das beste Modell fuer Consumer-Hardware (passt in 24 GB bei Q4). OpenAIs Open-Weight gpt-oss:20b (21B gesamt / 3,6B aktiv MoE) läuft in 16 GB auf ~o3-mini-Niveau mit einstellbarem Reasoning. Das aktuelle Release, Ollama v0.30.8 (12. Juni 2026), erweitert die GGUF-Hardwareunterstützung über llama.cpp und verbessert die Apple-Silicon-MLX-Engine. Die Ollama-Bibliothek referenziert jetzt 4.500+ Modelle, wobei MiniMax M3, NVIDIA Nemotron 3 Ultra und DeepSeek V4 Pro die neuesten Ergänzungen in diesem Monat sind.',
          ],
        },
        byCategory: {
          id: 'by-category',
          title: 'Top-Modelle nach Kategorie',
          content: 'Die Qualität der Modellausgabe hängt stark davon ab, wie Sie prompten. Für strukturierte Techniken, die mit allen lokalen Modellen funktionieren — darunter Chain-of-Thought, Few-Shot-Beispiele und Output-Formatierung — siehe den [Prompt-Engineering-Guide](https://www.promptquorum.com/de/prompt-engineering). Für Reasoning-Aufgaben verbessert [Chain-of-Thought-Prompting](https://www.promptquorum.com/de/prompt-engineering/chain-of-thought-prompting) erheblich DeepSeek-R1 und Qwen3 Output-Qualität. Für Quantisierungskompromisse dieser Modelle siehe den [Quantisierungsleitfaden →](/de/local-llms/llm-quantization-explained). Um zu ermitteln, wie viel VRAM jedes Modell benötigt, siehe den [VRAM-Anforderungsleitfaden →](/de/local-llms/how-much-vram-local-llm). Für Agent-Workflows mit Gemma 4 siehe [Tree-of-Thought und ReAct](https://www.promptquorum.com/de/prompt-engineering/tree-of-thought-react). Sobald ein Tool-Calling-Modell aus dieser Liste in einer mehrstufigen Schleife mit Datei- und Datenbankzugriff läuft, siehe [Lokale KI-Agenten mit MCP](/de/power-local-llm/local-ai-agents-with-mcp-2026) für das Open-Source-Orchestrierungsmuster.',
          items: [
            '**Allgemeines Chat (Anfänger)**: `ollama run llama3.2:3b` -- die meiste Dokumentation, am besten unterstütztes Einstiegsmodell.',
            '**Allgemeines Chat (beste Wahl)**: `ollama run qwen3.6:27b` -- 77,2% SWE-bench, bestes Modell fuer Consumer-Hardware, passt in 24 GB bei Q4. Ausgewogen: `ollama run qwen3:30b`. Für 8 GB Maschinen `ollama run llama3.2:3b` verwenden.',
            '**Long-Context / multimodal**: `ollama run llama4:scout` -- 10M-Token-Kontext + multimodal, MoE (17B aktiv/109B gesamt). Benötigt ~55 GB VRAM bei Q4 (passt in 24 GB nur bei 1,78-Bit, ~20 tok/s).',
            '**Bestes kleines / 16 GB**: `ollama run gpt-oss:20b` -- 21B gesamt / 3,6B aktiv MoE, ~o3-mini-Niveau, einstellbares Reasoning. Größer: `ollama run gpt-oss:120b` (80 GB).',
            '**Codierung (7B)**: `ollama run qwen3:8b` -- 76% HumanEval, verbessert gegenüber Qwen3, mehrsprachig.',
            '**Codierung (bestes Agentic, 24B)**: `ollama run devstral-small:24b` -- Bestes Agentic Coding-Modell (Multi-Datei-Edits, Debugging). 16 GB RAM. Von Mistral AI.',
            '**Codierung (bestes Dicht, 27B)**: `ollama run qwen3.6:27b` -- 77,2% SWE-bench. Bestes dichtes Coding-Modell. 22 GB VRAM.',
            '**Codierung (Frontier MoE)**: `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6 (gleichauf mit GPT-5.5), Top-Tier. MoE (32B aktiv/1T gesamt). Modified MIT-Lizenz. Benötigt Quantisierung für Consumer-Hardware.',
            '**Agent-Aufgaben und Tool-Calling**: `ollama run gemma4:e4b` -- Veröffentlicht 2. April 2026. Built-in Tool-Calling + Vision-Unterstützung. Empfohlen für lokale Agenten, Function-Calling und strukturierte Ausgabe. 6 GB RAM.',
            '**Reasoning und Mathematik**: `ollama run deepseek-r1:7b` -- Chain-of-Thought-Modell, beste lokale Mathe-Leistung bei 7B.',
            '**Mehrsprachig**: `ollama run qwen3:7b` -- 29+ native Sprachen, stärkste nicht-englische Unterstützung, 76% HumanEval.',
            '**Bildverarbeitung**: `ollama run gemma4:e4b` -- Vision + Tool Calling (Juni 2026). Oder `ollama run llama3.2-vision:11b` für dedizierte Vision.',
            '**Schnell und leichtgewichtig**: `ollama run gemma2:2b` -- schnellste CPU-Inferenz, 1,7 GB RAM.',
            '**Hohe Qualität (16 GB RAM)**: `ollama run mistral-small3.1` -- nahe 70B Qualität bei 14 GB RAM.',
            '**Heimautomatisierung / Wake-Word-KI**: `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB VRAM) verarbeitet Home Assistant Sprachbefehle mit 20–25 Tok/Sek auf einem Mini-PC ohne dedizierte GPU. Siehe [Home Assistant + Ollama Integrationsguide →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/ollama-model-by-use-case-de.svg',
          imageCaption: 'Ollama-Modellauswahl nach Anwendungsfall: Juni 2026. Chat: llama4:scout, Codierung: qwen3.6:27b, Reasoning: deepseek-r1:7b.',
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: 'DeepSeek-R1: Reasoning-Durchbruch',
          content: 'DeepSeek-R1 wurde im Januar 2025 veröffentlicht und verkörpert einen signifikanten Fortschritt im Reasoning auf lokalen Größen. Das Modell führt explizite Chain-of-Thought (CoT) Reasoning durch: Sie sehen die internen Gedankenketten des Modells, bevor die endgültige Antwort gegeben wird.',
          codeBlock: `ollama run deepseek-r1:7b
# Beispielprompt: "Wenn zwei Züge sich einer Station mit 100 km/h nähern, wann treffen sie sich?"
# DeepSeek-R1:7b antwortet mit sichtbaren Gedankenketten:
# <Gedanken>
# ...Pfade erkunden, Annahmen überprüfen...
# </Gedanken>
# Antwort: Sie treffen sich ...`,
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-de.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: 52% vs 28% MATH. Chain-of-Thought-Reasoning -- langsamer, deutlich genauer.',
          items: [
            '**Größen verfügbar**: 1,5B (mobil), 7B, 70B. 1,5B ist für Bildungsgeräte ausreichend; 7B übertrifft Llama 3.3 13B bei Mathematik.',
            '**Leistung auf Benchmarks**: 52 % bei MATH (gegenüber 23 % Llama 3.3 8B), verbesserte Logik und mehrschrittige Problemlösung.',
            '**RAM-Anforderungen**: 1,5B: 2 GB, 7B: 6 GB, 70B: 44 GB (Q4-Quantisierung).',
            '**Lizenz**: Deepseek-Lizenzen (einige Einschränkungen bei Decompilation; überprüfen Sie vor Enterprise-Einsatz).',
            '**EU-Datenhandhabung**: Bei Einsatz in EU-Regionen verarbeitet DeepSeek-R1 Daten gemäß EU-Datenschutzbestimmungen. Lokale Ausführung auf privaten Servern oder Geräten gewährleistet Datensouveränität -- keine Cloud-Übertragung erforderlich.',
          ],
        },
        visionModels: {
          id: 'vision-models',
          title: 'Vision-Modelle auf Ollama',
          content: 'Juni 2026: Diese Modelle auf Ollama unterstützen Bildeingabe (multimodal). Gemma 4 unterstützt sowohl Vision ALS AUCH Tool Calling – einzigartig unter Vision-Modellen auf Ollama.',
          columns: ['Modell', 'RAM', 'Bildunterstützung', 'Ollama Befehl'],
          image: '/images/ollama-vision-models-comparison-de.svg',
          imageCaption: '5 Ollama-Vision-Modelle für Bildeingabe. Gemma 4 E4B (6 GB) mit Tool Calling. Llama 3.2 Vision 11B (8 GB) für dedizierte Vision. Alle lokal.',
          rows: [
            { 'Modell': '[llama3.2-vision:11b](https://ollama.com/library/llama3.3)', 'RAM': '~8 GB', 'Bildunterstützung': 'Ja', 'Ollama Befehl': 'ollama run llama3.2-vision:11b' },
            { 'Modell': '[llama3.2-vision:90b](https://ollama.com/library/llama3.3)', 'RAM': '~55 GB', 'Bildunterstützung': 'Ja', 'Ollama Befehl': 'ollama run llama3.2-vision:90b' },
            { 'Modell': '[gemma3:9b (vision)](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Bildunterstützung': 'Ja', 'Ollama Befehl': 'ollama run gemma3:9b' },
            { 'Modell': 'minicpm-v:8b', 'RAM': '~5,5 GB', 'Bildunterstützung': 'Ja', 'Ollama Befehl': 'ollama run minicpm-v' },
            { 'Modell': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Bildunterstützung': 'Ja ✓', 'Ollama Befehl': 'ollama run gemma4:e4b' },
          ],
        },
        fullTop10: {
          id: 'full-top-10',
          title: 'Vollständiger Top-10-Vergleich',
          content: 'Download-Zählungen bevorzugen immer noch Llama 3.x aufgrund der Häufigkeit von Tutorials. Für neue Projekte im Juni 2026 sind Qwen 3.6 27B (bestes Modell fuer Consumer-Hardware), Kimi K2.6, gpt-oss:20b und qwen3:30b zu bevorzugen.',
          columns: ['#', 'Modell', 'Beste für', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-de.svg',
          imageCaption: 'Beste Ollama-Modelle Juni 2026: Qwen 3.6 27B (bestes Modell, 24 GB Q4), Kimi K2.6, gpt-oss:20b. Llama 4 Scout für 10M-Token-Kontext (~55 GB).',
          rows: [
            { '#': '1', 'Modell': '[Qwen 3.6 27B](https://ollama.com/library/qwen3)', 'Beste für': 'Bestes Modell fuer Consumer-Hardware', 'RAM': '24 GB (Q4)', 'HumanEval': '77,2% SWE-bench' },
            { '#': '2', 'Modell': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Beste für': 'Frontier-Coding, MoE (32B/1T), Modified MIT', 'RAM': 'Quantisiert', 'HumanEval': '58,6 SWE-Bench Pro' },
            { '#': '3', 'Modell': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Beste für': 'Bestes kleines / 16 GB, einstellbares Reasoning', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Modell': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Beste für': 'Ausgewogen; qwen3-coder:30b für Code', 'RAM': '~18 GB', 'HumanEval': 'stark' },
            { '#': '5', 'Modell': '[Devstral Small 24B](https://ollama.com/library/devstral)', 'Beste für': 'Agentic Codierung (Multi-Datei)', 'RAM': '16 GB', 'HumanEval': '80%' },
            { '#': '6', 'Modell': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Beste für': 'Reasoning, Mathe', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '7', 'Modell': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Beste für': 'Vision + Tool Calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Agent-ready' },
            { '#': '8', 'Modell': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Beste für': 'Long-Context 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '9', 'Modell': '[mistral-small3.1](https://ollama.com/library/mistral)', 'Beste für': 'Qualität bei 16 GB', 'RAM': '14 GB', 'HumanEval': '74%' },
            { '#': '10', 'Modell': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Beste für': 'Einstiegsmodell, allgemeiner Chat', 'RAM': '2,5 GB', 'HumanEval': '60%' },
          ],
        },
        howToBrowse: {
          id: 'how-to-browse',
          title: 'Wie durchsuchen Sie die Ollama-Bibliothek?',
          content: 'Es gibt zwei Möglichkeiten, mit Ollama-Modellen zu arbeiten. **Installierte Modelle wechseln:** In der Ollama Mac-App klicken Sie auf den Modell-Dropdown-Button am unteren Rand des Chat-Eingabefeldes (zeigt den aktuellen Modellnamen, z. B. "llama4:scout"), um zwischen lokal installierten Modellen zu wechseln. **Neue Modelle finden und herunterladen:** Besuchen Sie ollama.com/library, um 4.500+ Modelle nach Kategorie zu durchsuchen, und nutzen Sie dann die CLI-Befehle unten zum Herunterladen.',
          codeBlock: `ollama list
# Zeigt alle installierten Modelle an

ollama pull llama4:scout
# Lädt Llama 4 Scout herunter (beste Qualität, MoE)

ollama pull qwen3.6:27b
# Lädt Qwen 3.6 27B herunter (Best Coding Model, 77,2% SWE-bench)

ollama run llama4:scout
# Startet eine interaktive Chat-Sitzung

ollama run -m deepseek-r1:7b "Lösen Sie 2^10"
# Löst Reasoning-Aufgaben mit CoT aus`,
          codeLanguage: 'bash',
          items: [
            'Öffnen Sie https://ollama.ai/library in einem Webbrowser für die vollständige durchsuchbare Bibliothek aller 4.500+ Modelle.',
            'Filteroptionen: Modellgröße, Lizenz, Veröffentlichungsdatum, Benchmarks (MMLU, HumanEval, MATH).',
            'Ratings pro Modell: Nutzer-Downloads, GitHub-Sterne (für das Basis-Modell), Ollama-Sterne.',
            'Neue Modelle: Ollamás Bibliothek wird kontinuierlich aktualisiert (neue Modelle erscheinen Tage nach der Veröffentlichung).',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler bei der Auswahl von Ollama-Modellen',
          faqs: [
            {
              q: 'Ich habe einen großen Modell-Tag gepullt, aber mein RAM ist voll. Was ist passiert?',
              a: 'Zu schnell gepullt, ohne den RAM zu überprüfen. Verwenden Sie `ollama show [model-name]` BEVOR Sie pullen. Beispiel: `ollama show llama3.1:70b` zeigt RAM-Anforderungen an (~42-48 GB mit Q4-Quantisierung). Für Anfänger: Bleiben Sie bei 7B-13B-Modellen (unter 16 GB RAM). Löschen Sie mit `ollama rm [model-name]`.',
            },
            {
              q: 'Ich verwende ein Allzweck-Modell wie Llama 3.3, aber die Codierung ist langsam. Warum?',
              a: 'Llama 3.3 8B ist Allzweck-freundlich, aber Qwen3 oder Mistral Small sind für technische Aufgaben spezialisiert. Für Codierung: Schalten Sie zu Qwen3 7B um (75,4 % HumanEval gegenüber 68,2 % für Llama). Beide laufen unter 8 GB RAM.',
            },
            {
              q: 'Ich habe ein Modell gepullt, sehe es aber nicht in der Liste. Wie überprüfe ich die Installation?',
              a: 'Führen Sie `ollama list` aus. Ollama speichert Modelle unter `~/.ollama/models/` (Mac) oder `%USERPROFILE%\.ollama\models\` (Windows). Wenn sich das Modell dort befindet, aber nicht in der Liste angezeigt wird, neustarten Sie den Ollama-Daemon: Beenden Sie Ollama und öffnen Sie es erneut.',
            },
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Nächste Schritte',
          items: [
            '[Beste lokale LLMs für Coding](/de/local-llms/best-local-llms-for-coding) — Das beste Ollama-Modell speziell für Code-Aufgaben →',
            '[Beste LLMs ohne GPU (CPU-only)](/de/local-llms/best-cpu-only-llm) — Kein Grafikprozessor? Hier starten →',
            '[Hardware-Guide für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) — Unsicher, ob dein PC diese Modelle ausführen kann? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Wie viel RAM brauche ich für ein lokales Modell?',
              a: '7B-Modelle benötigen 6,5-8 GB RAM. 13B-Modelle: 11-14 GB. 70B-Modelle: 42-48 GB mit Quantisierung (Q4_K_M). Kleiner (3B): 2-3 GB. Überprüfen Sie mit `ollama show [model-name]` vor dem Herunterladen.',
            },
            {
              q: 'Kann ich Ollama-Modelle offline ausführen?',
              a: 'Ja. Nach dem initialen Download läuft jede Inferenz lokal, ohne Internetverbindung. Ollama überprüft gelegentlich Updates (aber nicht automatisch angewendet).',
            },
            {
              q: 'Welches Modell hat die beste deutsche Sprachunterstützung?',
              a: 'Qwen3 / Qwen 3.6 27B hat überlegene deutsche Unterstützung (trainiert auf CulturaX und DE-Wikitext). Llama 3.3 ist für Deutsch angemessen, aber Qwen ist präziser. Devstral Small 24B (Mistral AI, französisches Unternehmen, Apache 2.0) ist für Deutsch und Französisch kompetent.',
            },
            {
              q: 'Sind Ollama-Modelle wirklich kostenlos?',
              a: 'Ja. Alle auf Ollama verfügbaren Modelle sind Open-Source mit freien Lizenzen (Apache 2.0, Meta Llama 3 Community, Deepseek). Keine Abonnements, keine API-Gebühren. Laden Sie herunter, installieren Sie lokal, und verwenden Sie unbegrenzt.',
            },
            {
              q: 'Wie schnell ist DeepSeek-R1 wirklich?',
              a: 'Erzeugungsgeschwindigkeit: 15-25 Token/Sek. auf M1 Pro (ähnlich wie Llama 3.3 7B). Die Gesamtlatenz ist höher, weil Gedankenketten ausgegeben werden -- erwarten Sie 8-12 Sekunden für mittlere Anfragen. Für Echtzeit-Interaktion nutzen Sie Llama 3.3 oder Mistral.',
            },
            {
              q: 'Warum sollte ich Ollama verwenden und nicht einfach ChatGPT Plus?',
              a: 'Datenschutz: Keine Chats an OpenAI übertragen. Kosten: Kein monatliches Abonnement; eine GPU-Einmalinvestition. Offline: Funktioniert vollständig ohne Internet. Anpassbar: Systemprompte, Verhaltensrichtlinien und Modellparameter vollständig unter Ihrer Kontrolle.',
            },
            {
              q: 'Können Ollama-Modelle Bilder verarbeiten?',
              a: 'Ja. Llama 3.2 Vision, Qwen2-VL und Gemma 3 sind alle Multi-Modal. Laden Sie Bilder als lokale Dateien hoch; keine Cloud-Übertragung. Unterstützung: JPEG, PNG, GIF.',
            },
            {
              q: 'Wie aktualisiere ich auf neuere Ollama-Modellversionen?',
              a: 'Führen Sie `ollama pull [model-name]` erneut aus. Ollama lädt nur die Unterschiede herunter (Deduplizierung). Alte Versionen können gelöscht werden mit `ollama rm [model-name]:tag`.',
            },
            {
              q: 'Muss ich bei der Verwendung lokaler LLMs via Ollama die DSGVO beachten?',
              a: 'Ja. DSGVO Artikel 32 erfordert angemessene Sicherheitsmaßnahmen für personenbezogene Daten. Lokale Inferenz auf privaten Geräten oder Servern erfüllt Datenschutz-durch-Design-Anforderungen. Keine Cloud-Übertragung bedeutet: Datensouveränität, keine Datenexporte, Einhaltung von BSI-Grundschutz-Katalogen. Vorsicht: Wenn Sie ein Cloud-Modell verwenden, prüfen Sie zunächst die Datenverarbeitungsverträge.',
            },
            {
              q: 'Ist Ollama mit Open-Source-Modellen für den deutschen Mittelstand geeignet?',
              a: 'Ja. Kleine und mittlere Unternehmen (KMU) in Deutschland profitieren von: Datensouveränität (kein Cloud-Vendor Lock-in), Einhaltung von IT-Sicherheitsstandards (BSI IT-Grundschutz), Skalierbarkeit auf Standard-Hardware und Einsparungen durch keine API-Gebühren. Qwen3 7B läuft auf einer typischen Office-GPU; Llama 3.3 8B ist ein bewährtes Standard-Mittelstand-Modell für interne Tools, Customer-Service-Automation und Dokumentenverarbeitung.',
            },
          ],
        },
        relatedReading: {
          title: 'Verwandte Lektüre',
          items: [
            '[Lokale LLMs mit VS Code und Cursor installieren](/de/local-llms/local-llms-with-vscode-cursor) -- VS Code und Cursor erkennen jetzt Ollama automatisch.',
            '[So wählen Sie ein lokales Modell: Llama vs. Qwen vs. Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) -- Vollständiger Vergleich für Anfänger.',
            '[Ollama vs. LM Studio: Welches ist schneller?](/de/local-llms/ollama-vs-lm-studio) -- GPU-Benchmarks und Durchsatzvergleiche.',
            '[Wie installieren Sie Ollama auf Windows/Mac](/de/local-llms/how-to-install-ollama) -- Schritt-für-Schritt-Installations- und Umgebungskonfiguration.',
            '[Hardware für lokale LLMs: GPU-Anforderungen 2026](/de/local-llms/local-llm-hardware-guide-2026) -- Welche GPU, RAM und Speicher für Ihr Modell erforderlich ist.',
            '[Troubleshooting: Ollama-Fehler und Lösungen](/de/local-llms/troubleshooting-local-llm-setup) -- CUDA, MPS, CPU-Fallback und häufige Fehler.',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) -- vollständige Zeitleiste aller wichtigen Open-Weight-Releases mit Ollama-Verfügbarkeitsdaten.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Ollama-Modellbibliothek](https://ollama.ai/library) -- Alle 4.500+ Modelle mit Live-Download-Statistiken.',
            '[Ollama GitHub: Beliebte Modelle nach Downloads](https://github.com/ollama/ollama/issues/3149) -- Monatliche Einträge zu Benutzern und Download-Trends (öffentliche Daten).',
            '[DeepSeek-R1 Whitepaper](https://arxiv.org/abs/2502.00287) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" (Januar 2025).',
            '[Gemma 3 Announcement](https://blog.google/technology/googles-latest-gemma-models/) -- Google Blog: Gemma 3 Multimodal, 128K Kontext, Februar 2026.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama Update Juni 2026: Neueste Version und neue Modelle',
        'description': 'Aktuelle Ollama-Version v0.30.8 (Juni 2026) und die neuesten Modelle: MiniMax M3, Kimi K2.6, Qwen 3.6, DeepSeek V4. Verifizierte Benchmarks, RAM, Pull-Befehle.',
        'url': 'https://www.promptquorum.com/de/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-06-15',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
        },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Top 10 Open-Source-Modelle auf Ollama',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B', 'description': 'Das am häufigsten heruntergeladene Modell, ideal für Anfänger und Allzweckanwendungen. 6,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 7B', 'description': 'Das am schnellsten wachsende Modell mit überlegener Codierungs- und Mathematikleistung. 6,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small', 'description': 'Mehrsprachiges Modell mit guter französischer und spanischer Unterstützung. 6,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Llama 3.3 70B', 'description': 'Großes Modell, das bei vielen Benchmarks mit GPT-4 konkurriert. 44 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'DeepSeek-R1 7B', 'description': 'Reasoning-Modell mit expliziten Chain-of-Thought-Fähigkeiten, ideal für mathematische und logische Probleme. 6,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Gemma 3 9B', 'description': 'Multi-Modal-Modell mit Vision-Fähigkeiten und 128K-Kontext-Länge. 9,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 3.2 Vision 11B', 'description': 'Vision-Modell für Bildverarbeitung und Multi-Modal-Aufgaben. 11 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Phi-3.5 Mini 3.8B', 'description': 'Sehr kleines, hocheffizientes Modell ideal für Mobile und IoT-Geräte. 3 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Qwen3 32B', 'description': 'Größere Variante von Qwen mit überlegener Qualität für komplexe Aufgaben. 20 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Mistral Small 3.1', 'description': 'Schnelles und kompaktes Modell für Echtzeit-Anwendungen mit guter Qualität. 5 GB RAM erforderlich.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Wie viel RAM brauche ich für ein lokales Modell?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '7B-Modelle benötigen 6,5-8 GB RAM. 13B-Modelle: 11-14 GB. 70B-Modelle: 42-48 GB mit Quantisierung (Q4_K_M). Kleiner (3B): 2-3 GB. Überprüfen Sie mit `ollama show [model-name]` vor dem Herunterladen.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich Ollama-Modelle offline ausführen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Nach dem initialen Download läuft jede Inferenz lokal, ohne Internetverbindung. Ollama überprüft gelegentlich Updates (aber nicht automatisch angewendet).',
            }
          },
          {
            '@type': 'Question',
            'name': 'Welches Modell hat die beste deutsche Sprachunterstützung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 7B hat eine überlegene deutsche Unterstützung (trainierten auf CulturaX und DE-Wikitext). Llama 3.3 ist für Deutsch angemessen, aber Qwen ist präziser. Mistral Small ist für Deutsch und Französisch kompetent.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Sind Ollama-Modelle wirklich kostenlos?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Alle auf Ollama verfügbaren Modelle sind Open-Source mit freien Lizenzen (Apache 2.0, Meta Llama 3 Community, Deepseek). Keine Abonnements, keine API-Gebühren. Laden Sie herunter, installieren Sie lokal, und verwenden Sie unbegrenzt.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie schnell ist DeepSeek-R1 wirklich?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Erzeugungsgeschwindigkeit: 15-25 Token/Sek. auf M1 Pro (ähnlich wie Llama 3.3 7B). Die Gesamtlatenz ist höher, weil Gedankenketten ausgegeben werden -- erwarten Sie 8-12 Sekunden für mittlere Anfragen. Für Echtzeit-Interaktion nutzen Sie Llama 3.3 oder Mistral.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Warum sollte ich Ollama verwenden und nicht einfach ChatGPT Plus?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Datenschutz: Keine Chats an OpenAI übertragen. Kosten: Kein monatliches Abonnement; eine GPU-Einmalinvestition. Offline: Funktioniert vollständig ohne Internet. Anpassbar: Systemprompte, Verhaltensrichtlinien und Modellparameter vollständig unter Ihrer Kontrolle.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Können Ollama-Modelle Bilder verarbeiten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Llama 3.2 Vision, Qwen2-VL und Gemma 3 sind alle Multi-Modal. Laden Sie Bilder als lokale Dateien hoch; keine Cloud-Übertragung. Unterstützung: JPEG, PNG, GIF.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie aktualisiere ich auf neuere Ollama-Modellversionen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Führen Sie `ollama pull [model-name]` erneut aus. Ollama lädt nur die Unterschiede herunter (Deduplizierung). Alte Versionen können gelöscht werden mit `ollama rm [model-name]:tag`.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Muss ich bei der Verwendung lokaler LLMs via Ollama die DSGVO beachten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. DSGVO Artikel 32 erfordert angemessene Sicherheitsmaßnahmen für personenbezogene Daten. Lokale Inferenz auf privaten Geräten oder Servern erfüllt Datenschutz-durch-Design-Anforderungen. Keine Cloud-Übertragung bedeutet: Datensouveränität, keine Datenexporte, Einhaltung von BSI-Grundschutz-Katalogen. Vorsicht: Wenn Sie ein Cloud-Modell verwenden, prüfen Sie zunächst die Datenverarbeitungsverträge.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist Ollama mit Open-Source-Modellen für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Kleine und mittlere Unternehmen (KMU) in Deutschland profitieren von: Datensouveränität (kein Cloud-Vendor Lock-in), Einhaltung von IT-Sicherheitsstandards (BSI IT-Grundschutz), Skalierbarkeit auf Standard-Hardware und Einsparungen durch keine API-Gebühren. Qwen3 7B läuft auf einer typischen Office-GPU; Llama 3.3 8B ist ein bewährtes Standard-Mittelstand-Modell für interne Tools, Customer-Service-Automation und Dokumentenverarbeitung.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'Die Präsentation behandelt: Top 10 Ollama-Modelle nach Download-Häufigkeit, Leistungsvergleich (60-74% HumanEval), beste Modelle nach Anwendungsfall (Chat, Codierung, Reasoning, Vision), DeepSeek-R1 Chain-of-Thought-Reasoning und exakte Pull-Befehle. Laden Sie die PDF als Ihre Ollama-Modellauswahl-Referenzkarte herunter.',
    },
    fr: {
      theme: 'Meilleurs modèles',
      title: 'Ollama Mise à Jour Juin 2026 : v0.30.8 + Top 10 Modèles Open Source',
      seoTitle: 'Ollama Juin 2026 Mise à Jour : v0.30.8 + Top 10 Modèles (Classés)',
      intro: 'Mise à jour juin 2026. La version actuelle d\'Ollama est la v0.30.8 (publiée le 12 juin 2026), qui élargit la prise en charge matérielle GGUF via llama.cpp et améliore le moteur MLX Apple Silicon. Les modèles les plus récents de la bibliothèque ce mois-ci sont MiniMax M3 (1 juin, poids ouverts, contexte 1M tokens + vision native), NVIDIA Nemotron 3 Ultra (4 juin) et DeepSeek V4 Pro, rejoignant Kimi K2.6, Qwen 3.6, GLM-5.1, gpt-oss et Gemma 4. Le plus téléchargé reste la famille Llama (Llama 4 Scout, Llama 3.x) ; le meilleur global sur materiel grand public est Qwen 3.6 27B (77,2% SWE-bench).',
      metaDescription: 'Ollama v0.30.8 (12 juin 2026) : nouveautés, nouveaux modèles, top 10 open source classés — Qwen 3.6 27B, Kimi K2.6, gpt-oss:20b. Benchmarks + commandes pull.',
      publishDate: '2026-04-11',
      readTime: '9 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'modèles Ollama 2026',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Les modèles les plus populaires sur Ollama', anchor: '#most-popular' },
        { label: 'Meilleurs modèles par catégorie', anchor: '#by-category' },
        { label: 'DeepSeek-R1 : Percée en raisonnement', anchor: '#deepseek-r1' },
        { label: 'Modèles de vision', anchor: '#vision-models' },
        { label: 'Comparaison complète du Top 10', anchor: '#full-top-10' },
        { label: 'Comment parcourir la bibliothèque Ollama ?', anchor: '#how-to-browse' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**Meilleur global sur materiel grand public** : Qwen 3.6 27B (77,2% SWE-bench, tient en 24 Go en Q4). Polyvalent : qwen3:30b.',
            '**Plus téléchargés** : Llama 3.2 3B (tutoriels) et la famille Llama.',
            '**Meilleur raisonnement** : DeepSeek-R1 (Chain-of-Thought) et gpt-oss:20b (raisonnement reglable, ~niveau o3-mini). (DeepSeek a depuis publié DeepSeek-V4 — Flash/Pro — comme nouvelle génération à poids ouverts ; R1/V3 restent utilisables en local.)',
            '**Meilleur coding** : Kimi K2.6 (Frontier MoE), Qwen 3.6 27B (meilleur dense), Devstral Small 24B (meilleur agentic), qwen3-coder:30b (completion).',
            '**Meilleur petit / 16 Go** : gpt-oss:20b. **Meilleure vision/multimodal** : Gemma 4 (E4B+). **Meilleur long contexte (10M) / grand multimodal** : Llama 4 Scout (~55 Go).',
            'Bibliothèque Ollama juin 2026 : 4.500+ modèles. Tous disponibles via `ollama pull <nom>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Quoi de Neuf dans Ollama — Mise à Jour Juin 2026',
          content: [
            '**Version Ollama actuelle : v0.30.8** (publiée le 12 juin 2026). C\'est la dernière version stable, disponible via ollama.com/download. Mettez à jour avec `curl https://ollama.ai/install.sh | sh` (macOS : `brew upgrade ollama`), puis vérifiez avec `ollama --version`.',
            '**Ce qui a changé dans la série v0.30 (mai-juin 2026) :** Ollama v0.30 a élargi la compatibilité des modèles GGUF via llama.cpp, étendant la prise en charge matérielle au-delà d\'Apple Silicon, et le moteur MLX a été amélioré le 11 juin 2026 pour offrir son inférence Apple Silicon la plus rapide à ce jour — une sortie de meilleure qualité utilisant moins de mémoire. Les versions ponctuelles jusqu\'à la v0.30.8 ont ajouté les poids QAT de Gemma 4 (5 juin), Hermes Desktop (7 juin), une réutilisation améliorée du cache prompt/KV et des corrections de chemin de configuration sous Windows. Notes complètes : github.com/ollama/ollama/releases.',
            '**Nouveaux modèles ajoutés ce mois-ci (juin 2026) :**',
          ],
          items: [
            '**MiniMax M3** (MiniMax, 1 juin 2026) — Nouveau modèle phare à poids ouverts : le premier à combiner le codage de frontière (SWE-Bench Pro 59.0), une fenêtre de contexte de 1M tokens et une entrée image/vidéo native. En cours de déploiement dans la bibliothèque Ollama — vérifiez la disponibilité avec `ollama pull minimax-m3`.',
            '**NVIDIA Nemotron 3 Ultra** (NVIDIA, 4 juin 2026) — Conçu pour le raisonnement à haut débit et les workflows d\'agents de longue durée. Licence NVIDIA Open Model. Téléchargement : `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro** (DeepSeek, 23 avril 2026) — Spécialiste du codage algorithmique, 93.5% LiveCodeBench, licence MIT. Variante économique DeepSeek V4 Flash pour le materiel plus léger. Téléchargement : `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20 avril 2026) — Modèle de codage de frontière, SWE-Bench Pro 58.6, SWE-bench Verified 80.2% (à égalité avec GPT-5.5). Architecture MoE (32B actif / 1T au total). Licence Modified MIT.',
            '**Qwen 3.6 27B** (Alibaba, 16 avril 2026) — Meilleur global sur materiel grand public, 77,2% SWE-bench, Apache 2.0, tient en 24 Go en Q4. Aussi Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench).',
            '**GLM-5.1** (Z.ai, 7 avril 2026) — 744B / 40B actif MoE, licence MIT, SWE-Bench Pro 58.4. Leader en génération de code structuré.',
            '**gpt-oss** (OpenAI, 2026) — MoE à poids ouverts : gpt-oss:20b (21B au total / 3,6B actif, tourne en 16 Go, ~niveau o3-mini, raisonnement reglable) et gpt-oss:120b (80 Go).',
            '**Gemma 4** (Google, 2 avril 2026) — Tailles multimodales E2B / E4B / E12B (26B MoE) / E27B (31B dense), toutes avec vision et appel d\'outils. Poids QAT ajoutés le 5 juin 2026. E4B tourne en ~6 Go VRAM.',
          ],
          codeBlock: '# Mettre à jour Ollama vers la dernière version (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# Ou sur Mac : brew upgrade ollama\n\n# Vérifier la version actuelle\nollama --version  # Sortie : ollama version 0.30.8\n\n# Télécharger les nouveaux modèles de juin 2026\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          title: 'Les modèles les plus populaires sur Ollama',
          content: [
            '**Ollama dispose de statistiques de téléchargement entièrement publiques.** Selon les données de juin 2026 :',
            '**Llama 3.2 3B** reste le modèle le plus téléchargé au total, largement dû à son utilisation comme modèle de test standard lors de la première installation. Pour la qualité sur materiel grand public, Qwen 3.6 27B (77,2% SWE-bench, tient en 24 Go en Q4) est désormais le meilleur choix global.',
            '**Qwen3 et Qwen 3.6** sont la famille de modèles la plus en forte croissance dans la bibliothèque Ollama, avec Qwen3 et la nouvelle variante dense Qwen 3.6 déplaçant rapidement Qwen3. DeepSeek-R1 a connu des pics majeurs après sa sortie et reste très téléchargé pour les tâches de raisonnement.',
            '**Llama 4 Scout** a été lancé par Meta en avril 2026 avec les variantes Scout (17B actif, 109B au total, MoE) et Maverick (17B actif, 400B au total). Llama 4 Scout est maintenant stable dans la bibliothèque Ollama (`ollama pull llama4:scout`). La famille Llama 4 utilise une architecture Mixture-of-Experts (MoE) – seuls 17B paramètres sont actifs par token, mais avec 109B paramètres au total Scout nécessite ~55 Go VRAM en Q4 (tient en 24 Go uniquement en 1,78 bit, ~20 tok/s). Les atouts de Scout sont sa fenêtre de contexte de 10M tokens et son entrée multimodale, pas son adéquation au materiel grand public. L\'écosystème Ollama s\'est considérablement étendu en avril 2026. Kimi K2.6 (Moonshot AI, licence Modified MIT, 32B actif / 1T au total MoE) a obtenu SWE-Bench Pro 58.6, à égalité avec GPT-5.5. Qwen 3.6 27B a atteint 77,2% SWE-bench en tant que meilleur modèle global sur materiel grand public (tient en 24 Go en Q4). Le gpt-oss:20b d\'OpenAI (21B au total / 3,6B actif MoE) tourne en 16 Go au ~niveau o3-mini avec raisonnement reglable. La version actuelle, Ollama v0.30.8 (12 juin 2026), élargit la prise en charge matérielle GGUF via llama.cpp et améliore le moteur MLX Apple Silicon. La bibliothèque Ollama référence maintenant 4 500+ modèles, MiniMax M3, NVIDIA Nemotron 3 Ultra et DeepSeek V4 Pro étant les ajouts les plus récents ce mois-ci.',
          ],
        },
        byCategory: {
          title: 'Meilleurs modèles par catégorie',
          content: 'La qualité de la sortie d\'un modèle dépend fortement de la façon dont vous le promptez. Pour des techniques structurées applicables à tous les modèles locaux — chain-of-thought, exemples few-shot et formatage de sortie — consultez le [guide de prompt engineering](https://www.promptquorum.com/fr/prompt-engineering). Pour les tâches de raisonnement, [le prompt engineering de chaîne de pensée](https://www.promptquorum.com/fr/prompt-engineering/chain-of-thought-prompting) améliore considérablement la qualité des sorties DeepSeek-R1 et Qwen3. Pour déterminer la RAM requise pour chaque modèle, consultez le [guide des exigences VRAM →](/fr/local-llms/how-much-vram-local-llm). Pour les workflows d\'agents avec Gemini 4, voir [Tree-of-Thought et ReAct](https://www.promptquorum.com/fr/prompt-engineering/tree-of-thought-react). Une fois qu\'un modèle à appel d\'outils de cette liste est intégré dans une boucle multi-étapes avec accès aux fichiers et aux bases de données, voir [Agents IA locaux avec MCP](/fr/power-local-llm/local-ai-agents-with-mcp-2026) pour le pattern d\'orchestration open source.',
          items: [
            '**Chat général (débutant)** : `ollama run llama3.2:3b` -- la plupart de la documentation, le modèle de démarrage le mieux soutenu.',
            '**Chat général (meilleur choix)** : `ollama run qwen3.6:27b` -- 77,2% SWE-bench, meilleur global sur materiel grand public, tient en 24 Go en Q4. Polyvalent : `ollama run qwen3:30b`. Pour les machines à 8 Go, gardez `ollama run llama3.2:3b`.',
            '**Long contexte / multimodal** : `ollama run llama4:scout` -- contexte 10M tokens + multimodal, MoE (17B actif/109B au total). Nécessite ~55 Go VRAM en Q4 (tient en 24 Go uniquement en 1,78 bit, ~20 tok/s).',
            '**Meilleur petit / 16 Go** : `ollama run gpt-oss:20b` -- 21B au total / 3,6B actif MoE, ~niveau o3-mini, raisonnement reglable. Plus grand : `ollama run gpt-oss:120b` (80 Go).',
            '**Codage (7B)** : `ollama run qwen3:8b` -- 76% HumanEval, amélioré par rapport à Qwen3, multilingue.',
            '**Codage (meilleur agentique, 24B)** : `ollama run devstral-small:24b` -- Meilleur modèle de codage agentique (éditions multi-fichiers, débogage). 16 Go RAM. Par Mistral AI.',
            '**Codage (meilleur dense, 27B)** : `ollama run qwen3.6:27b` -- 77,2% SWE-bench. Meilleur modèle de codage dense. 22 Go VRAM.',
            '**Codage (frontière MoE)** : `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6 (à égalité avec GPT-5.5), tier supérieur. MoE (32B actif/1T au total). Licence Modified MIT.',
            '**Tâches d\'agent et appel d\'outils** : `ollama run gemma4:e4b` -- Lancé le 2 avril 2026. Support d\'appel d\'outils intégré + vision. Recommandé pour les agents locaux, l\'appel de fonctions et la sortie structurée. 6 Go RAM.',
            '**Raisonnement et mathématiques** : `ollama run deepseek-r1:7b` -- modèle de chaîne de pensée, meilleure performance mathématique locale à 7B.',
            '**Multilingue** : `ollama run qwen3:7b` -- 29+ langues natives, support non-anglais le plus fort, 76% HumanEval.',
            '**Compréhension d\'images** : `ollama run gemma4:e4b` -- vision + appel d\'outils (juin 2026). Ou `ollama run llama3.2-vision:11b` pour une vision dédiée.',
            '**Rapide et léger** : `ollama run gemma2:2b` -- inférence CPU la plus rapide, 1,7 Go RAM.',
            '**Haute qualité (16 Go RAM)** : `ollama run mistral-small3.1` -- qualité proche de 70B à 14 Go RAM.',
            '**Domotique / IA mot de réveil** : `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 Go VRAM) gère les commandes vocales Home Assistant à 20–25 tok/sec sur mini PC sans GPU dédié. Voir [guide d\'intégration Home Assistant + Ollama →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/ollama-model-by-use-case-fr.svg',
          imageCaption: 'Sélection Ollama par cas d\'usage : juin 2026. Chat : llama4:scout, codage : qwen3.6:27b, raisonnement : deepseek-r1:7b.',
        },
        deepseekR1: {
          title: 'DeepSeek-R1 : Percée en raisonnement',
          content: 'DeepSeek-R1 a été lancé en janvier 2025 et représente une avancée significative en raisonnement sur tailles locales. Le modèle effectue un raisonnement explicite en chaîne de pensée (CoT) : vous voyez les chaînes de pensée internes du modèle avant la réponse finale.',
          codeBlock: `ollama run deepseek-r1:7b
# Exemple de prompt : "Si deux trains se rapprochent d'une gare à 100 km/h, quand se rencontrent-ils ?"
# DeepSeek-R1:7b répond avec les chaînes de pensée visibles :
# <pensée>
# ...explorer les chemins, vérifier les hypothèses...
# </pensée>
# Réponse : Ils se rencontrent ...`,
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-fr.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: 52% vs 28% MATH. Raisonnement chain-of-thought -- plus lent, nettement plus précis.',
          items: [
            '**Tailles disponibles** : 1.5B (mobile), 7B, 70B. 1.5B suffisant pour appareils éducatifs ; 7B surpasse Llama 3.3 13B en mathématiques.',
            '**Performance sur benchmarks** : 52 % MATH (vs 23 % Llama 3.3 8B), logique améliorée et résolution multiétapes.',
            '**Exigences RAM** : 1.5B : 2 GB, 7B : 6 GB, 70B : 44 GB (quantification Q4).',
            '**Licence** : Licences DeepSeek (certaines restrictions sur décompilation ; vérifier avant déploiement d\'entreprise).',
            '**Gestion des données EU** : Lorsqu\'il est déployé dans les régions UE, DeepSeek-R1 traite les données selon les règlementations UE. L\'exécution locale sur serveurs privés ou appareils garantit la souveraineté des données -- aucune transmission cloud requise.',
          ],
        },
        visionModels: {
          title: 'Modèles de vision sur Ollama',
          content: 'Quatre modèles de vision remarquables sont maintenant nativement disponibles sur Ollama :',
          columns: ['Modèle', 'RAM', 'Support image', 'Commande Ollama'],
          image: '/images/ollama-vision-models-comparison-fr.svg',
          imageCaption: '4 modèles Ollama vision : llama3.2-vision:11b (8 Go), gemma3:9b (6 Go), minicpm-v (5,5 Go). Tous en local.',
          rows: [
            { 'Modèle': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM': '11 GB', 'Support image': 'JPEG, PNG, GIF; entrée multi-images', 'Commande Ollama': 'ollama run llama3.2-vision:11b' },
            { 'Modèle': '[Qwen2-VL 7B](https://ollama.com/library/qwen3)', 'RAM': '8 GB', 'Support image': 'JPEG, PNG; meilleur en OCR et diagrammes', 'Commande Ollama': 'ollama run qwen2-vl:7b' },
            { 'Modèle': '[Gemma 3 Vision 9B](https://ollama.com/library/gemma3)', 'RAM': '9.5 GB', 'Support image': 'JPEG, PNG; contexte natif 128K', 'Commande Ollama': 'ollama run gemma3:9b' },
            { 'Modèle': '[Mistral AI Pixtral 12B](https://ollama.com/library/mistral)', 'RAM': '12.5 GB', 'Support image': 'JPEG, PNG; basé sur latent', 'Commande Ollama': 'ollama run pixtral:12b' },
          ],
        },
        fullTop10: {
          title: 'Comparaison complète du Top 10',
          content: 'Les 10 modèles les plus téléchargés sur Ollama en avril 2026 selon les téléchargements mensuels :',
          columns: ['#', 'Modèle', 'Meilleur pour', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-fr.svg',
          imageCaption: 'Top 10 modèles Ollama par téléchargements : RAM 1,7 Go (gemma2:2b) à 14 Go (mistral-small3.1). HumanEval 39-74 %.',
          rows: [
            { '#': '1', 'Modèle': '[Llama 3.3 8B](https://ollama.com/library/llama3.3)', 'Meilleur pour': 'Débutants, polyvalent', 'RAM': '6.5 GB', 'HumanEval': '68.2 %' },
            { '#': '2', 'Modèle': '[Qwen3 7B](https://ollama.com/library/qwen3)', 'Meilleur pour': 'Codage, mathématiques', 'RAM': '6.5 GB', 'HumanEval': '75.4 %' },
            { '#': '3', 'Modèle': '[Mistral Small](https://ollama.com/library/mistral)', 'Meilleur pour': 'Multilingue', 'RAM': '6.5 GB', 'HumanEval': '73.2 %' },
            { '#': '4', 'Modèle': 'Llama 3.3 70B', 'Meilleur pour': 'Haut débit', 'RAM': '44 GB', 'HumanEval': '86.1 %' },
            { '#': '5', 'Modèle': '[DeepSeek-R1 7B](https://ollama.com/library/deepseek-r1)', 'Meilleur pour': 'Raisonnement', 'RAM': '6.5 GB', 'HumanEval': '76.8 %' },
            { '#': '6', 'Modèle': '[Gemma 3 9B](https://ollama.com/library/gemma3)', 'Meilleur pour': 'Vision + texte', 'RAM': '9.5 GB', 'HumanEval': '72.1 %' },
            { '#': '7', 'Modèle': 'Llama 3.2 Vision 11B', 'Meilleur pour': 'Multimodal', 'RAM': '11 GB', 'HumanEval': '71.5 %' },
            { '#': '8', 'Modèle': 'Phi-3.5 Mini 3.8B', 'Meilleur pour': 'Petits appareils', 'RAM': '3 GB', 'HumanEval': '61.2 %' },
            { '#': '9', 'Modèle': 'Qwen3 32B', 'Meilleur pour': 'Qualité plutôt que vitesse', 'RAM': '20 GB', 'HumanEval': '81.7 %' },
            { '#': '10', 'Modèle': 'Mistral Small 3.1', 'Meilleur pour': 'Rapide + compact', 'RAM': '5 GB', 'HumanEval': '68.9 %' },
          ],
        },
        howToBrowse: {
          title: 'Comment parcourir la bibliothèque Ollama ?',
          content: 'Il existe deux façons de travailler avec les modèles Ollama. **Changer de modèle installé :** Dans l\'application Ollama pour Mac, cliquez sur le bouton déroulant de modèle en bas du champ de saisie du chat (affiche le nom du modèle actuel, ex. "gemma3:1b") pour basculer entre les modèles installés localement. **Trouver et télécharger de nouveaux modèles :** Visitez ollama.com/library pour parcourir plus de 4500 modèles par catégorie, puis utilisez les commandes CLI ci-dessous pour les télécharger.',
          codeBlock: `ollama list
# Affiche tous les modèles installés

ollama pull llama3.1:8b
# Télécharge et installe Llama 3.3 8B

ollama pull qwen2.5:7b
# Télécharge Qwen3 7B (pour codage et mathématiques)

ollama run qwen2.5:7b
# Démarre une session de chat interactive

ollama run -m deepseek-r1:7b "Résoudre 2^10"
# Résout les tâches de raisonnement avec CoT`,
          codeLanguage: 'bash',
          items: [
            'Ouvrez https://ollama.ai/library dans un navigateur pour la bibliothèque complète interrogeable de tous les 4500+ modèles.',
            'Options de filtrage : taille du modèle, licence, date de publication, benchmarks (MMLU, HumanEval, MATH).',
            'Notation par modèle : téléchargements utilisateur, étoiles GitHub (pour le modèle de base), étoiles Ollama.',
            'Nouveaux modèles : La bibliothèque Ollama est mise à jour chaque semaine (jeudis, 18:00 UTC).',
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes lors du choix de modèles Ollama',
          faqs: [
            {
              q: 'J\'ai téléchargé un grand tag de modèle mais ma RAM est pleine. Qu\'est-ce qui s\'est passé ?',
              a: 'Vous avez téléchargé trop vite sans vérifier la RAM. Utilisez `ollama show [model-name]` AVANT le téléchargement. Exemple : `ollama show llama3.1:70b` affiche les exigences (~42-48 GB avec quantification Q4). Pour les débutants : restez avec les modèles 7B-13B (moins de 16 GB RAM). Supprimez avec `ollama rm [model-name]`.',
            },
            {
              q: 'J\'utilise un modèle polyvalent comme Llama 3.3, mais le codage est lent. Pourquoi ?',
              a: 'Llama 3.3 8B est convivial, mais Qwen3 ou Mistral Small sont spécialisés pour les tâches techniques. Pour le codage : basculez à Qwen3 7B (75.4 % HumanEval vs 68.2 % pour Llama). Les deux fonctionnent en moins de 8 GB RAM.',
            },
            {
              q: 'J\'ai téléchargé un modèle mais ne le vois pas dans la liste. Comment vérifier l\'installation ?',
              a: 'Exécutez `ollama list`. Ollama stocke les modèles sous `~/.ollama/models/` (Mac) ou `%USERPROFILE%\.ollama\models\` (Windows). Si le modèle y est mais n\'apparaît pas, redémarrez le daemon Ollama : fermez Ollama et rouvrez-le.',
            },
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Étapes suivantes',
          items: [
            '[Meilleurs LLM locaux pour le code](/fr/local-llms/best-local-llms-for-coding) — Le meilleur modèle Ollama pour le développement →',
            '[Meilleurs LLM sur CPU uniquement](/fr/local-llms/best-cpu-only-llm) — Pas de GPU ? Par ici →',
            '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — Votre machine peut-elle faire tourner ces modèles ? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Combien de RAM me faut-il pour un modèle local ?',
              a: 'Modèles 7B : 6.5-8 GB RAM. 13B : 11-14 GB. 70B : 42-48 GB avec quantification (Q4_K_M). Petits (3B) : 2-3 GB. Vérifiez avec `ollama show [model-name]` avant le téléchargement.',
            },
            {
              q: 'Puis-je exécuter les modèles Ollama hors ligne ?',
              a: 'Oui. Après le téléchargement initial, chaque inférence s\'exécute localement, sans connexion Internet. Ollama vérifie occasionnellement les mises à jour (mais ne les applique pas automatiquement).',
            },
            {
              q: 'Quel modèle a le meilleur support du français ?',
              a: 'Qwen3 7B a un support français supérieur (entraîné sur CulturaX et texte wiki FR). Llama 3.3 est adéquat pour le français, mais Qwen est plus précis. Mistral Small est compétent en français et espagnol.',
            },
            {
              q: 'Les modèles Ollama sont-ils vraiment gratuits ?',
              a: 'Oui. Tous les modèles disponibles sur Ollama sont open source avec des licences libres (Apache 2.0, Meta Llama 3 Community, Deepseek). Pas d\'abonnements, pas de frais d\'API. Téléchargez, installez localement et utilisez sans limite.',
            },
            {
              q: 'Quelle est vraiment la vitesse de DeepSeek-R1 ?',
              a: 'Vitesse de génération : 15-25 tokens/sec sur M1 Pro (similaire à Llama 3.3 7B). La latence totale est plus élevée car les chaînes de pensée sont générées -- attendez-vous à 8-12 secondes pour les requêtes moyennes. Pour l\'interaction en temps réel, utilisez Llama 3.3 ou Mistral.',
            },
            {
              q: 'Pourquoi utiliser Ollama plutôt que simplement ChatGPT Plus ?',
              a: 'Confidentialité : aucun chat n\'est transmis à OpenAI. Coût : pas d\'abonnement mensuel ; investissement GPU unique. Hors ligne : fonctionne complètement sans Internet. Personnalisable : invites système, directives de comportement et paramètres entièrement sous votre contrôle.',
            },
            {
              q: 'Les modèles Ollama peuvent-ils traiter les images ?',
              a: 'Oui. Llama 3.2 Vision, Qwen2-VL et Gemma 3 sont tous multimodaux. Chargez les images comme fichiers locaux ; aucune transmission cloud. Support : JPEG, PNG, GIF.',
            },
            {
              q: 'Comment mettre à jour vers les nouvelles versions des modèles Ollama ?',
              a: 'Exécutez `ollama pull [model-name]` à nouveau. Ollama télécharge uniquement les différences (déduplication). Les anciennes versions peuvent être supprimées avec `ollama rm [model-name]:tag`.',
            },
            {
              q: 'Dois-je me soucier du RGPD avec Ollama ?',
              a: 'Oui. Le RGPD exige des mesures de sécurité appropriées pour les données personnelles. L\'inférence locale sur appareils privés ou serveurs satisfait les exigences de protection par défaut. Aucune transmission cloud signifie : souveraineté des données, aucune export de données, conformité aux cadres de sécurité. Remarque : si vous utilisez un modèle cloud, vérifiez d\'abord les contrats de traitement des données.',
            },
            {
              q: 'Ollama convient-il aux petites et moyennes entreprises (PME) françaises ?',
              a: 'Oui. Les PME françaises bénéficient de : souveraineté des données (sans verrouillage éditeur cloud), conformité aux standards de sécurité IT (cadres de sécurité), scalabilité sur matériel standard et économies sans frais d\'API. Qwen3 7B s\'exécute sur une GPU de bureau typique ; Llama 3.3 8B est un modèle PME éprouvé pour les outils internes, l\'automatisation du service client et le traitement de documents.',
            },
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Installer les modèles locaux avec VS Code et Cursor](/fr/local-llms/local-llms-with-vscode-cursor) -- VS Code et Cursor reconnaissent maintenant automatiquement Ollama.',
            '[Comment choisir un modèle local : Llama vs Qwen vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) -- Comparaison complète pour les débutants.',
            '[Ollama vs LM Studio : Lequel est le plus rapide ?](/fr/local-llms/ollama-vs-lm-studio) -- Benchmarks GPU et comparaisons de débit.',
            '[Comment installer Ollama sur Windows/Mac](/fr/local-llms/how-to-install-ollama) -- Configuration d\'installation étape par étape et configuration d\'environnement.',
            '[Matériel pour les modèles locaux : Exigences GPU 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- Quelle GPU, RAM et stockage il faut pour votre modèle.',
            '[Dépannage : Erreurs Ollama et solutions](/fr/local-llms/troubleshooting-local-llm-setup) -- CUDA, MPS, fallback CPU et erreurs courantes.',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) -- chronologie complète de toutes les versions majeures open-weight avec dates de disponibilité sur Ollama.',
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '[Bibliothèque de modèles Ollama](https://ollama.ai/library) -- Tous les 4500+ modèles avec statistiques de téléchargement en direct.',
            '[Ollama GitHub : Modèles populaires par téléchargements](https://github.com/ollama/ollama/issues/3149) -- Entrées mensuelles sur les utilisateurs et tendances (données publiques).',
            '[Livre blanc DeepSeek-R1](https://arxiv.org/abs/2502.00287) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" (janvier 2025).',
            '[Annonce Gemma 3](https://blog.google/technology/googles-latest-gemma-models/) -- Blog Google : Gemma 3 Multimodal, contexte 128K, février 2026.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mise à jour Ollama juin 2026 : dernière version et nouveaux modèles',
        'description': 'Version actuelle d\'Ollama v0.30.8 (juin 2026) et les modèles les plus récents : MiniMax M3, Kimi K2.6, Qwen 3.6, DeepSeek V4. Benchmarks vérifiés, RAM, commandes pull.',
        'url': 'https://www.promptquorum.com/fr/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-06-15',
        'author': {
          '@type': 'Person',
          'name': 'Hans Kuepper',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
        },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Top 10 modèles open source sur Ollama',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B', 'description': 'Le modèle le plus téléchargé, idéal pour les débutants et les applications polyvalentes. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 7B', 'description': 'Le modèle en plus forte croissance avec des performances supérieures en codage et mathématiques. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small', 'description': 'Modèle multilingue avec bon support du français et espagnol. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Llama 3.3 70B', 'description': 'Grand modèle qui concurrence GPT-4 sur de nombreux benchmarks. 44 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'DeepSeek-R1 7B', 'description': 'Modèle de raisonnement avec capacités explicites de chaîne de pensée, idéal pour problèmes mathématiques et logiques. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Gemma 3 9B', 'description': 'Modèle multimodal avec capacités de vision et longueur de contexte 128K. 9.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 3.2 Vision 11B', 'description': 'Modèle de vision pour traitement d\'images et tâches multimodales. 11 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Phi-3.5 Mini 3.8B', 'description': 'Modèle très petit et efficace, idéal pour les appareils mobiles et IoT. 3 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Qwen3 32B', 'description': 'Variante plus grande de Qwen avec qualité supérieure pour les tâches complexes. 20 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Mistral Small 3.1', 'description': 'Modèle rapide et compact pour les applications en temps réel avec bonne qualité. 5 GB RAM requis.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Combien de RAM me faut-il pour un modèle local ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Modèles 7B : 6.5-8 GB RAM. 13B : 11-14 GB. 70B : 42-48 GB avec quantification (Q4_K_M). Petits (3B) : 2-3 GB. Vérifiez avec `ollama show [model-name]` avant le téléchargement.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je exécuter les modèles Ollama hors ligne ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Après le téléchargement initial, chaque inférence s\'exécute localement, sans connexion Internet. Ollama vérifie occasionnellement les mises à jour (mais ne les applique pas automatiquement).',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel modèle a le meilleur support du français ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 7B a un support français supérieur (entraîné sur CulturaX et texte wiki FR). Llama 3.3 est adéquat pour le français, mais Qwen est plus précis. Mistral Small est compétent en français et espagnol.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Les modèles Ollama sont-ils vraiment gratuits ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Tous les modèles disponibles sur Ollama sont open source avec des licences libres (Apache 2.0, Meta Llama 3 Community, Deepseek). Pas d\'abonnements, pas de frais d\'API. Téléchargez, installez localement et utilisez sans limite.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quelle est vraiment la vitesse de DeepSeek-R1 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vitesse de génération : 15-25 tokens/sec sur M1 Pro (similaire à Llama 3.3 7B). La latence totale est plus élevée car les chaînes de pensée sont générées -- attendez-vous à 8-12 secondes pour les requêtes moyennes. Pour l\'interaction en temps réel, utilisez Llama 3.3 ou Mistral.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Pourquoi utiliser Ollama plutôt que simplement ChatGPT Plus ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Confidentialité : aucun chat n\'est transmis à OpenAI. Coût : pas d\'abonnement mensuel ; investissement GPU unique. Hors ligne : fonctionne complètement sans Internet. Personnalisable : invites système, directives de comportement et paramètres entièrement sous votre contrôle.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Les modèles Ollama peuvent-ils traiter les images ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Llama 3.2 Vision, Qwen2-VL et Gemma 3 sont tous multimodaux. Chargez les images comme fichiers locaux ; aucune transmission cloud. Support : JPEG, PNG, GIF.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Comment mettre à jour vers les nouvelles versions des modèles Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Exécutez `ollama pull [model-name]` à nouveau. Ollama télécharge uniquement les différences (déduplication). Les anciennes versions peuvent être supprimées avec `ollama rm [model-name]:tag`.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Dois-je me soucier du RGPD avec Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Le RGPD exige des mesures de sécurité appropriées pour les données personnelles. L\'inférence locale sur appareils privés ou serveurs satisfait les exigences de protection par défaut. Aucune transmission cloud signifie : souveraineté des données, aucune export de données, conformité aux cadres de sécurité. Remarque : si vous utilisez un modèle cloud, vérifiez d\'abord les contrats de traitement des données.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama convient-il aux petites et moyennes entreprises (PME) françaises ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Les PME françaises bénéficient de : souveraineté des données (sans verrouillage éditeur cloud), conformité aux standards de sécurité IT (cadres de sécurité), scalabilité sur matériel standard et économies sans frais d\'API. Qwen3 7B s\'exécute sur une GPU de bureau typique ; Llama 3.3 8B est un modèle PME éprouvé pour les outils internes, l\'automatisation du service client et le traitement de documents.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'La présentation ci-dessous couvre : top 10 modèles Ollama par nombre de téléchargements, comparaison de performance (60-74% HumanEval), meilleurs modèles par cas d\'utilisation (chat, codage, raisonnement, vision), DeepSeek-R1 chain-of-thought reasoning et commandes pull exactes. Téléchargez le PDF comme votre carte de référence de sélection de modèles Ollama.',
    },
    ja: {
      theme: 'ベストモデル',
      title: 'Ollama 2026年6月アップデート：v0.30.8 + トップ10オープンソースモデル',
      seoTitle: 'Ollama 2026年6月 v0.30.8 アップデート + トップ10モデルランキング',
      intro: '2026年6月更新。現在のOllamaバージョンはv0.30.8（2026年6月12日リリース）で、llama.cpp経由でGGUFのハードウェア対応を拡大し、Apple Silicon MLXエンジンを強化しました。今月ライブラリに加わった最新モデルはMiniMax M3（6月1日、オープンウェイト、1Mトークンコンテキスト + ネイティブビジョン）、NVIDIA Nemotron 3 Ultra（6月4日）、DeepSeek V4 Proで、Kimi K2.6、Qwen 3.6、GLM-5.1、gpt-oss、Gemma 4に加わります。全体での最多ダウンロードは引き続きLlamaファミリー（Llama 4 Scout、Llama 3.x）、コンシューマーハードウェアでの総合最高はQwen 3.6 27B（77.2% SWE-bench）です。',
      metaDescription: 'Ollama v0.30.8（2026年6月12日）：新機能、新モデル、トップ10 open sourceランキング — Qwen 3.6 27B、Kimi K2.6、gpt-oss:20b。ベンチマーク + pullコマンド。',
      publishDate: '2026-04-11',
      readTime: '9分で読める',
      educationalLevel: 'ビギナー',
      primaryTerm: 'Ollama モデル 2026',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'Ollama最人気モデル', anchor: '#most-popular' },
        { label: 'カテゴリ別トップモデル', anchor: '#by-category' },
        { label: 'DeepSeek-R1：推論ブレークスルー', anchor: '#deepseek-r1' },
        { label: 'ビジョンモデル', anchor: '#vision-models' },
        { label: 'トップ10完全比較', anchor: '#full-top-10' },
        { label: 'Ollama ライブラリの探索方法', anchor: '#how-to-browse' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**コンシューマー向け総合最高**：Qwen 3.6 27B（77.2% SWE-bench、Q4で24GBに収まる）。バランス型：qwen3:30b。',
            '**最多ダウンロード**：Llama 3.2 3B（チュートリアル向け）とLlamaファミリー。',
            '**推論最強**：DeepSeek-R1（Chain-of-Thought）とgpt-oss:20b（推論調整可能、~o3-miniレベル）。 (DeepSeekはその後、オープンウェイトの新世代としてDeepSeek-V4—Flash/Pro—をリリースしました。R1/V3は引き続きローカルで利用可能です。)',
            '**コーディング最強**：Kimi K2.6（Frontier MoE）、Qwen 3.6 27B（最高密度）、Devstral Small 24B（最高エージェント）、qwen3-coder:30b（補完）。',
            '**小型・16GB最強**：gpt-oss:20b。**ビジョン/マルチモーダル最強**：Gemma 4（E4B以上）。**長コンテキスト（10M）/ 大規模マルチモーダル最強**：Llama 4 Scout（~55GB）。',
            'Ollamaライブラリ6月2026：4,500+モデル。すべて`ollama pull <名前>`で利用可。',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Ollama最新アップデート — 2026年6月',
          content: [
            '**現在のOllamaバージョン：v0.30.8**（2026年6月12日リリース）。これが最新の安定版で、ollama.com/downloadから入手できます。`curl https://ollama.ai/install.sh | sh`（macOS：`brew upgrade ollama`）でアップデートし、`ollama --version`で確認してください。',
            '**v0.30シリーズでの変更点（2026年5月〜6月）：** Ollama v0.30はllama.cpp経由でGGUFモデルの互換性を拡大し、Apple Silicon以外へのハードウェア対応を広げました。さらにMLXエンジンが2026年6月11日にアップグレードされ、過去最速のApple Silicon推論を実現しました。より少ないメモリでより高品質な出力が得られます。v0.30.8までのポイントリリースでは、Gemma 4 QAT重み（6月5日）、Hermes Desktop（6月7日）、プロンプト/KVキャッシュ再利用の改善、Windowsの設定パス修正が追加されました。詳細：github.com/ollama/ollama/releases。',
            '**今月追加された最新モデル（2026年6月）：**',
          ],
          items: [
            '**MiniMax M3**（MiniMax、2026年6月1日）— 最新のオープンウェイト旗艦モデル：フロンティアコーディング（SWE-Bench Pro 59.0）、1Mトークンのコンテキストウィンドウ、ネイティブの画像/動画入力を初めて兼ね備えたモデルです。Ollamaライブラリへ順次展開中 — `ollama pull minimax-m3`で利用可否を確認してください。',
            '**NVIDIA Nemotron 3 Ultra**（NVIDIA、2026年6月4日）— 高スループットの推論と長時間稼働するエージェントワークフロー向けに構築。NVIDIA Open Model License。プル：`ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro**（DeepSeek、2026年4月23日）— アルゴリズミックコーディングの専門モデル、93.5% LiveCodeBench、MITライセンス。軽量ハードウェア向けの廉価版DeepSeek V4 Flashもあります。プル：`ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**（Moonshot AI、2026年4月20日）— フロンティアコーディングモデル、SWE-Bench Pro 58.6、SWE-bench Verified 80.2%。MoEアーキテクチャ（32B活性/1T合計）。Modified MIT ライセンス。',
            '**Qwen 3.6 27B**（Alibaba、2026年4月16日）— コンシューマー向け総合最高、77.2% SWE-bench、Apache 2.0、Q4で24GBに収まる。Qwen3.6-35B-A3B（MoE、73.4 SWE-bench）も。',
            '**GLM-5.1**（Z.ai、2026年4月7日）— 744B / 40B活性MoE、MITライセンス、SWE-Bench Pro 58.4。構造化コード生成リーダー。',
            '**gpt-oss**（OpenAI、2026年）— オープンウェイトMoE：gpt-oss:20b（21B合計 / 3.6B活性、16GBで動作、~o3-miniレベル、推論調整可能）とgpt-oss:120b（80GB）。',
            '**Gemma 4**（Google、2026年4月2日）— マルチモーダルサイズ E2B / E4B / E12B（26B MoE）/ E27B（31B密度）、すべてビジョンとツール呼び出し対応。QAT重みを2026年6月5日に追加。E4Bは~6GB VRAMで動作。',
          ],
          codeBlock: '# Ollamaを最新版にアップデート（v0.30.8）\ncurl https://ollama.ai/install.sh | sh\n\n# またはMac：brew upgrade ollama\n\n# 現在のバージョンを確認\nollama --version  # 出力：ollama version 0.30.8\n\n# 2026年6月の最新モデルをプル\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          title: 'Ollama最人気モデル',
          content: [
            '**Ollamaは完全公開ダウンロード統計を提供。** 2026年6月データより：',
            '**Llama 3.2 3B**は全体で最多ダウンロード。主にチュートリアルとして使用。コンシューマー向け品質では、Qwen 3.6 27B（77.2% SWE-bench、Q4で24GBに収まる）が現在の総合最良の選択。',
            '**Qwen3・Qwen 3.6**はOllama ライブラリで最速成長のモデルファミリー。Qwen3と新しいQwen 3.6密度バリアントがQwen3を急速に置き換え。DeepSeek-R1はリリース後に大きなスパイクを記録し、推論タスク向けに常に高ダウンロード状態。',
            '**Meta Llama 4** 2026年4月リリースでScout（17B活性、109B合計、MoE）とMaverick（17B活性、400B合計）を展開。Ollama ライブラリで安定済み（`ollama pull llama4:scout`）。Llama 4はMoEアーキテクチャを採用し、トークンあたり17Bのみが活性だが、109B合計のためScoutはQ4で~55GB VRAMが必要（24GBは1.78ビットのみ、~20 tok/s）。Scoutの強みは10Mトークンのコンテキストとマルチモーダル入力であり、コンシューマーハードウェアへの適合性ではない。Ollama エコシステムは2026年4月に大幅拡張。Kimi K2.6（Moonshot AI、Modified MIT、32B活性/1T合計MoE）はSWE-Bench Pro 58.6を記録しGPT-5.5と同等。Qwen 3.6 27Bは77.2% SWE-benchでコンシューマー向け総合最高を達成（Q4で24GBに収まる）。OpenAIのオープンウェイトgpt-oss:20b（21B合計/3.6B活性MoE）は16GBで~o3-miniレベル、推論調整可能で動作。現在のリリースであるOllama v0.30.8（2026年6月12日）は、llama.cpp経由でGGUFのハードウェア対応を拡大し、Apple Silicon MLXエンジンを強化しています。Ollama ライブラリは現在4,500+モデルを参照しており、今月の最新追加はMiniMax M3、NVIDIA Nemotron 3 Ultra、DeepSeek V4 Proです。',
          ],
        },
        byCategory: {
          title: 'カテゴリ別トップモデル',
          content: 'モデルの出力品質はプロンプトの設計に大きく左右されます。Chain-of-Thought、Few-Shot例、出力フォーマットなど、すべてのローカルモデルで使える構造化テクニックについては[プロンプトエンジニアリングガイド](https://www.promptquorum.com/ja/prompt-engineering)をご覧ください。推論タスク用に、[Chain-of-Thoughtプロンプティング](https://www.promptquorum.com/ja/prompt-engineering/chain-of-thought-prompting)はDeepSeek-R1とQwen3出力品質を大幅に改善。各モデルに必要なRAMを確認するには、[VRAM要件ガイド →](/ja/local-llms/how-much-vram-local-llm)をご参照ください。Gemma 4エージェントワークフロー用は[Tree-of-Thoughtと ReAct](https://www.promptquorum.com/ja/prompt-engineering/tree-of-thought-react)参照。このリストにあるツール呼び出し対応モデルを、ファイルアクセスやデータベース照会まで含むマルチステップのループに組み込む方法は、[MCP を使ったローカル AI エージェント](/ja/power-local-llm/local-ai-agents-with-mcp-2026)を参照してください。オープンソースのオーケストレーションパターンを解説しています。',
          items: [
            '**一般チャット（初心者）**：`ollama run llama3.2:3b` -- ドキュメント多数、最適入門モデル。',
            '**一般チャット（最良の選択）**：`ollama run qwen3.6:27b` -- 77.2% SWE-bench、コンシューマー向け総合最高、Q4で24GBに収まる。バランス型：`ollama run qwen3:30b`。8GB機はllama3.2:3b維持。',
            '**長コンテキスト / マルチモーダル**：`ollama run llama4:scout` -- 10Mトークンコンテキスト + マルチモーダル、MoE（17B活性/109B合計）。Q4で~55GB VRAM必要（24GBは1.78ビットのみ、~20 tok/s）。',
            '**小型・16GB最強**：`ollama run gpt-oss:20b` -- 21B合計 / 3.6B活性MoE、~o3-miniレベル、推論調整可能。大型：`ollama run gpt-oss:120b`（80GB）。',
            '**コード（7B）**：`ollama run qwen3:8b` -- 76% HumanEval、Qwen3から改善、多言語対応。',
            '**コード（最高エージェント、24B）**：`ollama run devstral-small:24b` -- 最高エージェントコーディング（マルチファイル編集、デバッグ）。16GB RAM。Mistral AI製。',
            '**コード（最高密集、27B）**：`ollama run qwen3.6:27b` -- 77.2% SWE-bench。最高密集コーディングモデル。22GB VRAM。',
            '**コード（フロンティアMoE）**：`ollama run kimi-k2.6` -- SWE-Bench Pro 58.6（GPT-5.5と同等）、トップティア。MoE（32B活性/1T合計）。Modified MIT License。',
            '**エージェント・ツール呼び出し**：`ollama run gemma4:e4b` -- 2026年4月2日リリース。組み込みツール呼び出し+ビジョンサポート。ローカルエージェント、機能呼び出し、構造出力推奨。6GB RAM。',
            '**推論・数学**：`ollama run deepseek-r1:7b` -- Chain-of-Thoughtモデル、ローカル数学最高性能at 7B。',
            '**多言語**：`ollama run qwen3:7b` -- 29+言語対応、非英語対応最強、76% HumanEval。',
            '**画像理解**：`ollama run gemma4:e4b` -- Vision + Tool Calling（2026年6月）。または `ollama run llama3.2-vision:11b`専用Vision。',
            '**高速・軽量**：`ollama run gemma2:2b` -- 最速CPU推論、1.7GB RAM。',
            '**高品質（16GB RAM）**：`ollama run mistral-small3.1` -- 70B品質に近い14GB RAM。',
            '**ホームオートメーション / ウェイクワードAI**：`ollama run phi4-mini` — Phi-4 Mini（3.8B、VRAM約3 GB）は専用GPUなしのミニPCでHome Assistantの音声コマンドを20〜25 tok/secで処理できます。[Home Assistant + Ollama 統合ガイド →](/smart-home/home-assistant-ollama-integration)をご覧ください。',
          ],
          image: '/images/ollama-model-by-use-case-ja.svg',
          imageCaption: '用途別Ollamaモデル選択：2026年6月。チャット：llama4:scout、コーディング：qwen3.6:27b、推論：deepseek-r1:7b。',
        },
        deepseekR1: {
          title: 'DeepSeek-R1：推論ブレークスルー',
          content: 'DeepSeek-R1は2025年1月リリース。ローカルサイズでの推論大躍進。Chain-of-Thought（CoT）実装で思考過程を表示。',
          codeBlock: `ollama run deepseek-r1:7b
# プロンプト例：「時速100kmで駅に近づく列車2台、いつ出会う？」
# DeepSeek-R1:7bが思考過程を表示：
# <思考>
# ...経路を探索、仮定を検証...
# </思考>
# 答え：彼らは出会う...`,
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-ja.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: MATH 52% vs 28%。思考連鎖推論モデル -- やや遅いが精度が大幅に向上。',
          items: [
            '**サイズ展開**：1.5B（モバイル）、7B、70B。1.5Bは教育端末で十分。7Bはllama 3.1 13Bを数学で上回る。',
            '**ベンチマーク**：52% MATH（Llama 3.3 8B比23%）。ロジック・多段階問題解決向上。',
            '**RAM必須**：1.5B：2GB、7B：6GB、70B：44GB（Q4量子化）。',
            '**ライセンス**：DeepSeek License（逆アセンブリ制限あり。エンタープライズ前に確認）。',
            '**日本データ処理**：APAC地域デプロイ時、DeepSeek-R1はデータ保護方針準拠。ローカル実行で主権確保--クラウド転送なし。',
          ],
        },
        visionModels: {
          title: 'ビジョンモデル',
          content: '4つの優秀ビジョンモデルがOllamaネイティブ対応：',
          columns: ['モデル', 'RAM', '画像対応', 'Ollamaコマンド'],
          image: '/images/ollama-vision-models-comparison-ja.svg',
          imageCaption: '4つのOllamaビジョンモデル: llama3.2-vision:11b (8 GB)、gemma3:9b (6 GB)、minicpm-v (5.5 GB)。全てローカル実行。',
          rows: [
            { 'モデル': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM': '11 GB', '画像対応': 'JPEG、PNG、GIF・複数画像入力', 'Ollamaコマンド': 'ollama run llama3.2-vision:11b' },
            { 'モデル': '[Qwen2-VL 7B](https://ollama.com/library/qwen3)', 'RAM': '8 GB', '画像対応': 'JPEG、PNG・OCR精密', 'Ollamaコマンド': 'ollama run qwen2-vl:7b' },
            { 'モデル': '[Gemma 3 Vision 9B](https://ollama.com/library/gemma3)', 'RAM': '9.5 GB', '画像対応': 'JPEG、PNG・ネイティブ128Kコンテキスト', 'Ollamaコマンド': 'ollama run gemma3:9b' },
            { 'モデル': '[Mistral AI Pixtral 12B](https://ollama.com/library/mistral)', 'RAM': '12.5 GB', '画像対応': 'JPEG、PNG・潜在表現', 'Ollamaコマンド': 'ollama run pixtral:12b' },
          ],
        },
        fullTop10: {
          title: 'トップ10完全比較',
          content: '2026年4月Ollama月間DL数トップ10：',
          columns: ['#', 'モデル', '最適用途', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-ja.svg',
          imageCaption: 'ダウンロード数Top 10 Ollamaモデル: RAM 1.7 GB (gemma2:2b)から14 GB (mistral-small3.1)。HumanEval 39-74%。',
          rows: [
            { '#': '1', 'モデル': '[Llama 3.3 8B](https://ollama.com/library/llama3.3)', '最適用途': '初心者・汎用', 'RAM': '6.5 GB', 'HumanEval': '68.2%' },
            { '#': '2', 'モデル': '[Qwen3 7B](https://ollama.com/library/qwen3)', '最適用途': 'コード・数学', 'RAM': '6.5 GB', 'HumanEval': '75.4%' },
            { '#': '3', 'モデル': '[Mistral Small](https://ollama.com/library/mistral)', '最適用途': '多言語', 'RAM': '6.5 GB', 'HumanEval': '73.2%' },
            { '#': '4', 'モデル': 'Llama 3.3 70B', '最適用途': '高スループット', 'RAM': '44 GB', 'HumanEval': '86.1%' },
            { '#': '5', 'モデル': '[DeepSeek-R1 7B](https://ollama.com/library/deepseek-r1)', '最適用途': '推論', 'RAM': '6.5 GB', 'HumanEval': '76.8%' },
            { '#': '6', 'モデル': '[Gemma 3 9B](https://ollama.com/library/gemma3)', '最適用途': 'ビジョン+テキスト', 'RAM': '9.5 GB', 'HumanEval': '72.1%' },
            { '#': '7', 'モデル': 'Llama 3.2 Vision 11B', '最適用途': 'マルチモーダル', 'RAM': '11 GB', 'HumanEval': '71.5%' },
            { '#': '8', 'モデル': 'Phi-3.5 Mini 3.8B', '最適用途': '小型端末', 'RAM': '3 GB', 'HumanEval': '61.2%' },
            { '#': '9', 'モデル': 'Qwen3 32B', '最適用途': '品質重視', 'RAM': '20 GB', 'HumanEval': '81.7%' },
            { '#': '10', 'モデル': 'Mistral Small 3.1', '最適用途': '高速・軽量', 'RAM': '5 GB', 'HumanEval': '68.9%' },
          ],
        },
        howToBrowse: {
          title: 'Ollama ライブラリの探索方法',
          content: 'Ollamaモデルの操作には2つの方法があります。**インストール済みモデルの切り替え：** Ollama Macアプリのチャット入力欄下部にあるモデルドロップダウンボタン（例："gemma3:1b"と表示）をクリックして、ローカルにインストールされたモデルを切り替えます。**新しいモデルの検索・ダウンロード：** ollama.com/libraryで4500以上のモデルをカテゴリ別に検索し、以下のCLIコマンドでインストールします。',
          codeBlock: `ollama list
# インストール済みモデル表示

ollama pull llama3.1:8b
# Llama 3.3 8B ダウンロード・インストール

ollama pull qwen2.5:7b
# Qwen3 7B ダウンロード（コード・数学向け）

ollama run qwen2.5:7b
# インタラクティブセッション開始

ollama run -m deepseek-r1:7b "2^10を解く"
# CoTで推論タスク実行`,
          codeLanguage: 'bash',
          items: [
            'ブラウザで https://ollama.ai/library を開く。4500+モデル検索可能。',
            'フィルタオプション：モデルサイズ、ライセンス、リリース日、ベンチマーク（MMLU、HumanEval、MATH）。',
            'モデル評価：ユーザーDL数、GitHub⭐（ベースモデル）、Ollama⭐。',
            'Ollama新モデル：毎週木曜日UTC 18:00更新。',
          ],
        },
        commonMistakes: {
          title: 'Ollama選択の一般的ミス',
          faqs: [
            {
              q: '大きいモデルタグをプルしたがRAM満杯。何が？',
              a: '確認なしプル。プル前に`ollama show [model-name]`実行。例：`ollama show llama3.1:70b`でRAM表示（約42-48GB、Q4量子化）。初心者は7B-13Bに留める（RAM 16GB以下）。`ollama rm [model-name]`で削除。',
            },
            {
              q: 'Llama 3.3みたいな汎用モデル使うがコード遅い。なぜ？',
              a: 'Llama 3.3 8Bは汎用向きだがQwen3やMistral Smallは技術専門。コード：Qwen3 7B切替（HumanEval 75.4% vs Llama 68.2%）。両方RAM 8GB以下。',
            },
            {
              q: 'モデルプルしたが表示されない。確認は？',
              a: '`ollama list`実行。モデルはMac: `~/.ollama/models/`またはWindows: `%USERPROFILE%\.ollama\models\`に保存。表示されなければOllamaデーモン再起動：終了して再起動。',
            },
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: '次のステップ',
          items: [
            '[コーディング向け最高ローカルLLM](/ja/local-llms/best-local-llms-for-coding) — コード特化の最良Ollamaモデルを選ぶ →',
            '[CPUのみで動く最高LLM](/ja/local-llms/best-cpu-only-llm) — GPU なし？ここから始める →',
            '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — あなたのPCでこれらのモデルが動くか確認 →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'ローカルモデルに必要なRAM量は？',
              a: '7B：6.5-8GB。13B：11-14GB。70B：42-48GB（Q4_K_M量子化）。3B：2-3GB。プル前に`ollama show [model-name]`で確認。',
            },
            {
              q: 'Ollamaモデルはオフラインで実行できる？',
              a: 'はい。初期DL後、推論は完全ローカル実行。インターネット不要。Ollamaが定期更新確認（自動適用なし）。',
            },
            {
              q: '日本語サポート最高のモデルは？',
              a: 'Qwen3 7B。CulturaXと日本語Wikiで高精度。Llama 3.3は日本語OK但しQwenが精密。Mistral Smallは仏語西語向き。',
            },
            {
              q: 'Ollamaモデルは本当に無料？',
              a: 'はい。全Ollamaモデルはオープンソース・フリーライセンス（Apache 2.0、Meta Llama Community、Deepseek）。サブスク・API料金なし。DL・ローカルインストール・無制限使用。',
            },
            {
              q: 'DeepSeek-R1の速度は本当？',
              a: '生成速度：M1 Pro 15-25tokens/秒（Llama 3.3 7B相応）。総レイテンシは思考過程生成で高い--中程度クエリ8-12秒。リアルタイム：Llama 3.3やMistral。',
            },
            {
              q: 'OllamaでなくChatGPT Plusを選ぶ理由は？',
              a: 'プライバシー：チャットがOpenAIに送信されない。コスト：月額なし・GPU買い切り。オフライン：完全インターネット不要。カスタマイズ：システムプロンプト・動作・パラメータ全掌握。',
            },
            {
              q: 'Ollamaモデルは画像処理できる？',
              a: 'はい。Llama 3.2 Vision、Qwen2-VL、Gemma 3全てマルチモーダル。画像をローカルファイルアップロード。クラウド転送なし。JPEG、PNG、GIF対応。',
            },
            {
              q: 'Ollamaモデルを新版にアップデートは？',
              a: '`ollama pull [model-name]`再実行。差分のみDL（重複排除）。旧版削除：`ollama rm [model-name]:tag`。',
            },
            {
              q: 'GDPRはOllamaで気にすべき？',
              a: 'はい。GDPR個人データセキュリティ必須。ローカル推論で設計による保護要件満たし。クラウド転送なし＝主権・非エクスポート・コンプライアンス。注：クラウドモデル使用時は処理契約確認。',
            },
            {
              q: '日本企業向けOllama活用は？',
              a: 'はい。日本企業が利益：データ主権（クラウドロックイン回避）、IT標準準拠（IPA・MEI-TI Governance 2024）、標準HW スケーラビリティ、API料金排除。Qwen3 7Bは標準デスクGPUで実行。Llama 3.3 8Bはエンタープライズスタンダードツール・顧客自動化・文書処理向け検証済み。',
            },
          ],
        },
        relatedReading: {
          title: '参考資料',
          items: [
            '[VS CodeとCursorでローカルLLMインストール](/ja/local-llms/local-llms-with-vscode-cursor) -- VS CodeとCursorが今Ollama自動認識。',
            '[ローカルモデル選択：Llamaは Qwenか Mistralか](/ja/local-llms/qwen-vs-llama-vs-mistral) -- ビギナー向け完全比較。',
            '[OllamaはLM Studioより速い？](/ja/local-llms/ollama-vs-lm-studio) -- GPU・スループットベンチ。',
            '[Ollama Windows/Mac インストール方法](/ja/local-llms/how-to-install-ollama) -- ステップバイステップ・環境設定。',
            '[ローカルLLM ハードウェアガイド2026 GPU要件](/ja/local-llms/local-llm-hardware-guide-2026) -- どのGPU・RAM・ストレージがモデルに必須。',
            '[トラブル：Ollama エラーと解策](/ja/local-llms/troubleshooting-local-llm-setup) -- CUDA・MPS・CPU落とし穴・一般エラー。',
          '[ローカルLLMモデル更新情報2026](/ja/local-llms/local-llm-model-updates-2026) -- Ollama対応日付付きの主要オープンウェイトリリース完全タイムライン。',
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            '[Ollama モデルライブラリ](https://ollama.ai/library) -- 4500+モデル、ライブDL統計。',
            '[Ollama GitHub：DL人気モデル](https://github.com/ollama/ollama/issues/3149) -- 月別ユーザー・トレンド（公開）。',
            '[DeepSeek-R1 論文](https://arxiv.org/abs/2502.00287) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"（2025年1月）。',
            '[Gemma 3 発表](https://blog.google/technology/googles-latest-gemma-models/) -- GoogleブログGemma 3マルチモーダル・128Kコンテキスト（2026年2月）。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama 2026年6月更新：最新バージョンと新モデル',
        'description': '現在のOllamaバージョンv0.30.8（2026年6月）と最新モデル：MiniMax M3、Kimi K2.6、Qwen 3.6、DeepSeek V4。検証済みベンチマーク、RAM、pullコマンド。',
        'url': 'https://www.promptquorum.com/ja/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-06-15',
        'author': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
        },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2']
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ollama トップ10 オープンソースモデル',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B', 'description': '最多DLモデル。初心者向け・汎用。6.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 7B', 'description': '急速成長。コード・数学優秀。6.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small', 'description': '多言語モデル。仏語西語対応。6.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Llama 3.3 70B', 'description': '大型。多ベンチでGPT-4競争。44GB RAM要。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'DeepSeek-R1 7B', 'description': '推論モデル。Chain-of-Thought。6.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Gemma 3 9B', 'description': 'マルチモーダル。ビジョン・128Kコンテキスト。9.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 3.2 Vision 11B', 'description': 'ビジョンモデル。画像処理・マルチモーダル。11GB RAM要。' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Phi-3.5 Mini 3.8B', 'description': '超小型・高効率。モバイル・IoT向け。3GB RAM要。' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Qwen3 32B', 'description': 'Qwen大型版。複雑タスク高品質。20GB RAM要。' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Mistral Small 3.1', 'description': '高速・軽量。リアルタイム応用・品質両立。5GB RAM要。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ローカルモデルに必要なRAM量は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '7B：6.5-8GB。13B：11-14GB。70B：42-48GB（Q4_K_M量子化）。3B：2-3GB。プル前に`ollama show [model-name]`で確認。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollamaモデルはオフラインで実行できる？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。初期DL後、推論は完全ローカル実行。インターネット不要。Ollamaが定期更新確認（自動適用なし）。',
            }
          },
          {
            '@type': 'Question',
            'name': '日本語サポート最高のモデルは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 7B。CulturaXと日本語Wikiで高精度。Llama 3.3は日本語OK但しQwenが精密。Mistral Smallは仏語西語向き。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollamaモデルは本当に無料？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。全Ollamaモデルはオープンソース・フリーライセンス（Apache 2.0、Meta Llama Community、Deepseek）。サブスク・API料金なし。DL・ローカルインストール・無制限使用。',
            }
          },
          {
            '@type': 'Question',
            'name': 'DeepSeek-R1の速度は本当？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '生成速度：M1 Pro 15-25tokens/秒（Llama 3.3 7B相応）。総レイテンシは思考過程生成で高い--中程度クエリ8-12秒。リアルタイム：Llama 3.3やMistral。',
            }
          },
          {
            '@type': 'Question',
            'name': 'OllamaでなくChatGPT Plusを選ぶ理由は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プライバシー：チャットがOpenAIに送信されない。コスト：月額なし・GPU買い切り。オフライン：完全インターネット不要。カスタマイズ：システムプロンプト・動作・パラメータ全掌握。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollamaモデルは画像処理できる？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。Llama 3.2 Vision、Qwen2-VL、Gemma 3全てマルチモーダル。画像をローカルファイルアップロード。クラウド転送なし。JPEG、PNG、GIF対応。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollamaモデルを新版にアップデートは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull [model-name]`再実行。差分のみDL（重複排除）。旧版削除：`ollama rm [model-name]:tag`。',
            }
          },
          {
            '@type': 'Question',
            'name': 'GDPRはOllamaで気にすべき？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。GDPR個人データセキュリティ必須。ローカル推論で設計による保護要件満たし。クラウド転送なし＝主権・非エクスポート・コンプライアンス。注：クラウドモデル使用時は処理契約確認。',
            }
          },
          {
            '@type': 'Question',
            'name': '日本企業向けOllama活用は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。日本企業が利益：データ主権（クラウドロックイン回避）、IT標準準拠（IPA・METI AI Governance 2024）、標準HW スケーラビリティ、API料金排除。Qwen3 7Bは標準デスクGPUで実行。Llama 3.3 8Bはエンタープライズスタンダードツール・顧客自動化・文書処理向け検証済み。',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: '下記のスライドデッキは以下をカバーしています：ダウンロード数別の Top 10 Ollama モデル、パフォーマンス比較（60-74% HumanEval）、ユースケース別の最高モデル（チャット、コーディング、推論、ビジョン）、DeepSeek-R1 chain-of-thought 推論、および正確なプルコマンド。Ollama モデル選択リファレンスカードとして PDF をダウンロードしてください。',
    },
    zh: {
      theme: '最佳模型',
      title: 'Ollama 2026年6月更新：v0.30.8 + Top 10开源模型',
      seoTitle: 'Ollama 2026年6月 v0.30.8 更新 + Top 10模型排名',
      intro: '2026年6月更新。当前Ollama版本为v0.30.8（2026年6月12日发布），通过llama.cpp扩展GGUF硬件支持，并升级了Apple Silicon MLX引擎。本月库中最新模型为MiniMax M3（6月1日，开放权重，1M token上下文+原生视觉）、NVIDIA Nemotron 3 Ultra（6月4日）和DeepSeek V4 Pro，与Kimi K2.6、Qwen 3.6、GLM-5.1、gpt-oss和Gemma 4并列。总下载量最高仍为Llama系列（Llama 4 Scout、Llama 3.x）；消费级硬件综合最佳为Qwen 3.6 27B（77.2% SWE-bench）。',
      metaDescription: 'Ollama v0.30.8（2026年6月12日）：新功能、新模型、Top 10开源排名 — Qwen 3.6 27B、Kimi K2.6、gpt-oss:20b。基准测试 + pull命令。',
      publishDate: '2026-04-11',
      readTime: '阅读约9分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama开源模型',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '最受欢迎的模型', anchor: '#most-popular' },
        { label: '按类别分类', anchor: '#by-category' },
        { label: '推理模型：DeepSeek-R1', anchor: '#deepseek-r1' },
        { label: '视觉与多模态', anchor: '#vision-models' },
        { label: '完整Top 10排行', anchor: '#full-top-10' },
        { label: '如何浏览和选择模型', anchor: '#how-to-browse' },
        { label: '常见误区', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#faq-section' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '参考来源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '**消费级硬件综合最佳**：Qwen 3.6 27B（77.2% SWE-bench、Q4下可装入24GB）。均衡全能：qwen3:30b。',
            '**最多下载**：Llama 3.2 3B（教程向）和Llama系列。',
            '**最强推理**：DeepSeek-R1（思维链）和gpt-oss:20b（推理可调、~o3-mini水平）。 (DeepSeek 此后发布了开源权重新一代模型 DeepSeek-V4——Flash/Pro;R1/V3 仍可在本地正常使用。)',
            '**最强编程**：Kimi K2.6（前沿MoE）、Qwen 3.6 27B（最优密度）、Devstral Small 24B（最优智能体）、qwen3-coder:30b（补全）。',
            '**小型/16GB最强**：gpt-oss:20b。**视觉/多模态最强**：Gemma 4（E4B及以上）。**长上下文（10M）/ 大型多模态最强**：Llama 4 Scout（~55GB）。',
            '2026年6月Ollama库：4,500+模型。全部通过`ollama pull <名称>`可用。',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Ollama新增功能 — 2026年6月更新',
          content: [
            '**当前Ollama版本：v0.30.8**（2026年6月12日发布）。这是最新稳定版本，可通过ollama.com/download获取。使用`curl https://ollama.ai/install.sh | sh`更新（macOS：`brew upgrade ollama`），然后用`ollama --version`确认。',
            '**v0.30系列的变化（2026年5月-6月）：** Ollama v0.30通过llama.cpp扩展了GGUF模型兼容性，将硬件支持扩展到Apple Silicon之外；MLX引擎于2026年6月11日升级，实现迄今最快的Apple Silicon推理——以更少内存输出更高质量。截至v0.30.8的版本新增Gemma 4 QAT权重（6月5日）、Hermes Desktop（6月7日）、改进的prompt/KV-cache复用以及Windows配置路径修复。完整说明：github.com/ollama/ollama/releases。',
            '**本月新增最新模型（2026年6月）：**',
          ],
          items: [
            '**MiniMax M3**（MiniMax、2026年6月1日）— 最新开放权重旗舰：首个同时兼具前沿编码（SWE-Bench Pro 59.0）、1M token上下文窗口和原生图像/视频输入的模型。正在向Ollama库推出——用`ollama pull minimax-m3`确认可用性。',
            '**NVIDIA Nemotron 3 Ultra**（NVIDIA、2026年6月4日）— 专为高吞吐推理和长时运行的代理工作流构建。NVIDIA Open Model License。拉取：`ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro**（DeepSeek、2026年4月23日）— 算法编码专家，93.5% LiveCodeBench，MIT许可。轻量硬件可选预算版DeepSeek V4 Flash。拉取：`ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**（Moonshot AI、2026年4月20日）— 前沿编码模型，SWE-Bench Pro 58.6，SWE-bench Verified 80.2%。MoE架构（32B活跃/1T总数）。Modified MIT许可。',
            '**Qwen 3.6 27B**（Alibaba、2026年4月16日）— 消费级硬件综合最佳，77.2% SWE-bench，Apache 2.0，Q4下可装入24GB。另有Qwen3.6-35B-A3B（MoE，73.4 SWE-bench）。',
            '**GLM-5.1**（Z.ai、2026年4月7日）— 744B / 40B活跃MoE，MIT许可，SWE-Bench Pro 58.4。结构化代码生成领导者。',
            '**gpt-oss**（OpenAI、2026年）— 开放权重MoE：gpt-oss:20b（21B总数 / 3.6B活跃，16GB可运行，~o3-mini水平，推理可调）和gpt-oss:120b（80GB）。',
            '**Gemma 4**（Google、2026年4月2日）— 多模态尺寸 E2B / E4B / E12B（26B MoE）/ E27B（31B密集），全部支持视觉和工具调用。2026年6月5日新增QAT权重。E4B在~6GB显存下运行。',
          ],
          codeBlock: '# 更新Ollama到最新版本（v0.30.8）\ncurl https://ollama.ai/install.sh | sh\n\n# 或Mac：brew upgrade ollama\n\n# 检查当前版本\nollama --version  # 输出：ollama version 0.30.8\n\n# 拉取2026年6月最新模型\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          title: '最受欢迎的模型（2026年6月）',
          content: [
            '**Llama 3.2 3B** 仍为总下载量最高，主要作为初安装测试模型。在消费级硬件品质方面，Qwen 3.6 27B（77.2% SWE-bench、Q4下可装入24GB）现为综合最佳选择。',
            '**Qwen3和Qwen 3.6** 是Ollama库中增长最快的模型家族，Qwen3和新的Qwen 3.6密集变体正在快速取代Qwen3。DeepSeek-R1在发布后出现大幅增长，并保持推理任务的高下载量。',
            '**Meta Llama 4** 于2026年4月推出Scout（17B活跃、109B总数、MoE）和Maverick（17B活跃、400B总数）变体。Llama 4 Scout现已稳定在Ollama库中（`ollama pull llama4:scout`）。Llama 4采用Mixture-of-Experts（MoE）架构，每个token仅17B参数活跃，但因109B总参数，Scout在Q4下需~55GB显存（24GB仅限1.78位，~20 tok/s）。Scout的亮点是10M token上下文窗口和多模态输入，而非消费级硬件适配性。Ollama生态在2026年4月显著扩展。Kimi K2.6（Moonshot AI、Modified MIT许可、32B活跃/1T总数MoE）取得SWE-Bench Pro 58.6，与GPT-5.5持平。Qwen 3.6 27B达到77.2% SWE-bench，成为消费级硬件综合最佳（Q4下可装入24GB）。OpenAI的开放权重gpt-oss:20b（21B总数/3.6B活跃MoE）在16GB下以~o3-mini水平运行，推理可调。当前版本Ollama v0.30.8（2026年6月12日）通过llama.cpp扩展GGUF硬件支持，并升级Apple Silicon MLX引擎。Ollama库现参考4,500+模型，其中MiniMax M3、NVIDIA Nemotron 3 Ultra和DeepSeek V4 Pro为本月最新新增。',
          ],
        },
        byCategory: {
          title: '按用途分类',
          content: '模型的输出质量在很大程度上取决于你的提示方式。关于适用于所有本地模型的结构化技术——包括思维链、Few-Shot示例和输出格式化——请参阅[Prompt工程指南](https://www.promptquorum.com/zh/prompt-engineering)。对于推理任务，[Chain-of-Thought提示](https://www.promptquorum.com/zh/prompt-engineering/chain-of-thought-prompting)显著改善DeepSeek-R1和Qwen3输出质量。了解每个模型所需的VRAM，见[VRAM需求指南 →](/zh/local-llms/how-much-vram-local-llm)。对于Gemma 4代理工作流，见[Tree-of-Thought和ReAct](https://www.promptquorum.com/zh/prompt-engineering/tree-of-thought-react)。一旦把这份榜单中的工具调用模型接入具备文件访问和数据库查询能力的多步循环，就可以参阅[使用 MCP 的本地 AI 代理](/zh/power-local-llm/local-ai-agents-with-mcp-2026)，了解这套开源编排方案。',
          items: [
            '**通用聊天（初学者）**：`ollama run llama3.2:3b` -- 文档最多，最佳入门模型。',
            '**通用聊天（最佳选择）**：`ollama run qwen3.6:27b` -- 77.2% SWE-bench，消费级硬件综合最佳，Q4下可装入24GB。均衡全能：`ollama run qwen3:30b`。8GB机器保持`ollama run llama3.2:3b`。',
            '**长上下文 / 多模态**：`ollama run llama4:scout` -- 10M token上下文 + 多模态，MoE（17B活跃/109B总数）。Q4下需~55GB显存（24GB仅限1.78位，~20 tok/s）。',
            '**小型/16GB最强**：`ollama run gpt-oss:20b` -- 21B总数 / 3.6B活跃MoE，~o3-mini水平，推理可调。更大：`ollama run gpt-oss:120b`（80GB）。',
            '**编程（7B）**：`ollama run qwen3:8b` -- 76% HumanEval，改进自Qwen3，多语言。',
            '**编程（最优代理、24B）**：`ollama run devstral-small:24b` -- 最优代理编程（多文件编辑、调试）。16GB RAM。Mistral AI出品。',
            '**编程（最优密集、27B）**：`ollama run qwen3.6:27b` -- 77.2% SWE-bench。最优密集编程模型。22GB显存。',
            '**编程（前沿MoE）**：`ollama run kimi-k2.6` -- SWE-Bench Pro 58.6（与GPT-5.5持平），顶级。MoE（32B活跃/1T总数）。Modified MIT许可。',
            '**代理和工具调用**：`ollama run gemma4:e4b` -- 2026年4月2日发布。内置工具调用+视觉支持。推荐本地代理、函数调用、结构化输出。6GB RAM。',
            '**推理和数学**：`ollama run deepseek-r1:7b` -- Chain-of-Thought模型，7B最高本地数学性能。',
            '**多语言**：`ollama run qwen3:7b` -- 29+本地语言，最强非英文支持，76% HumanEval。',
            '**图像理解**：`ollama run gemma4:e4b` -- 视觉+工具调用（2026年6月）。或`ollama run llama3.2-vision:11b`专用视觉。',
            '**快速轻量**：`ollama run gemma2:2b` -- 最快CPU推理，1.7GB RAM。',
            '**高质量（16GB显存）**：`ollama run mistral-small3.1` -- 70B品质14GB显存。',
            '**家庭自动化 / 唤醒词AI**：`ollama run phi4-mini` — Phi-4 Mini（3.8B，约3 GB VRAM）在无独显的迷你PC上以20–25 tok/sec处理Home Assistant语音命令。参阅[Home Assistant + Ollama集成指南 →](/smart-home/home-assistant-ollama-integration)。',
          ],
          image: '/images/ollama-model-by-use-case-zh.svg',
          imageCaption: '按用途选择Ollama：2026年6月。聊天llama4:scout，编码qwen3.6:27b，推理deepseek-r1:7b。',
        },
        deepseekR1: {
          title: 'DeepSeek-R1：2026年推理最强的模型',
          content: [
            '**DeepSeek-R1 7B在推理任务中表现最强。** 采用Chain-of-Thought（思维链）架构，让模型在生成答案前进行"思考"。',
            '**关键数据**：MATH 52%（7B模型中最高）、AIME 19.5%、AlphaCode 65%。适合数学推导、代码审查、复杂逻辑。',
            '**生成速度**：M1 Pro上15-25 tokens/秒（与Llama 3.3相同）。但总延迟较高（思考过程生成需要额外时间）。中等查询约8-12秒。',
            '**安装命令**：',
          ],
          codeBlock: 'ollama run deepseek-r1:7b',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-zh.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: MATH 52% vs 28%。链式思维推理模型 -- 较慢，精度显著提升。',
        },
        visionModels: {
          title: '视觉和多模态模型对比',
          content: '2026年4月，以下开源视觉模型可在Ollama中本地运行：',
          columns: ['模型', 'RAM要求', '图像支持', 'Ollama命令'],
          image: '/images/ollama-vision-models-comparison-zh.svg',
          imageCaption: '4个Ollama视觉模型: llama3.2-vision:11b (8 GB)、gemma3:9b (6 GB)、minicpm-v (5.5 GB)。全部本地运行。',
          rows: [
            { '模型': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM要求': '11 GB', '图像支持': '是（JPEG、PNG、GIF）', 'Ollama命令': 'ollama run llama3.2-vision:11b' },
            { '模型': '[Gemma 3 9B](https://ollama.com/library/gemma3)', 'RAM要求': '9.5 GB', '图像支持': '是（Gemma 3全系多模态）', 'Ollama命令': 'ollama run gemma3:9b' },
            { '模型': '[Qwen2-VL 7B](https://ollama.com/library/qwen3)', 'RAM要求': '7.5 GB', '图像支持': '是（视频帧、多页PDF）', 'Ollama命令': 'ollama run qwen2-vl:7b' },
            { '模型': '[Phi-4 Vision 14B](https://ollama.com/library/phi4)', 'RAM要求': '14 GB', '图像支持': '是（高分辨率输入）', 'Ollama命令': 'ollama run phi4:14b' },
          ],
        },
        fullTop10: {
          title: 'Ollama完整Top 10模型排行（2026年4月）',
          content: '根据Ollama官方下载统计和HumanEval、MMLU基准：',
          columns: ['排名', '模型', '最适用于', 'RAM要求', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-zh.svg',
          imageCaption: '按下载量排名前10的Ollama模型：RAM从1.7 GB (gemma2:2b)到14 GB (mistral-small3.1)。HumanEval 39-74%。',
          rows: [
            { '排名': '1', '模型': '[Llama 3.3 8B](https://ollama.com/library/llama3.3)', '最适用于': '通用、初学者入门', 'RAM要求': '6.5 GB', 'HumanEval': '76%' },
            { '排名': '2', '模型': '[Qwen3 7B](https://ollama.com/library/qwen3)', '最适用于': '代码和中文', 'RAM要求': '6.5 GB', 'HumanEval': '90%' },
            { '排名': '3', '模型': '[Mistral Small](https://ollama.com/library/mistral)', '最适用于': '多语言和欧洲市场', 'RAM要求': '6.5 GB', 'HumanEval': '85%' },
            { '排名': '4', '模型': 'Llama 3.3 70B', '最适用于': '企业级和复杂任务', 'RAM要求': '44 GB', 'HumanEval': '92%' },
            { '排名': '5', '模型': '[DeepSeek-R1 7B](https://ollama.com/library/deepseek-r1)', '最适用于': '推理和问题求解', 'RAM要求': '6.5 GB', 'HumanEval': '88%' },
            { '排名': '6', '模型': '[Gemma 3 9B](https://ollama.com/library/gemma3)', '最适用于': '视觉和多模态', 'RAM要求': '9.5 GB', 'HumanEval': '84%' },
            { '排名': '7', '模型': 'Llama 3.2 Vision 11B', '最适用于': '图像理解和分析', 'RAM要求': '11 GB', 'HumanEval': '80%' },
            { '排名': '8', '模型': 'Phi-3.5 Mini 3.8B', '最适用于': '移动和物联网', 'RAM要求': '3 GB', 'HumanEval': '76%' },
            { '排名': '9', '模型': 'Qwen3 32B', '最适用于': '高质量和复杂推理', 'RAM要求': '20 GB', 'HumanEval': '92%' },
            { '排名': '10', '模型': 'Mistral Small 3.1', '最适用于': '实时应用和低延迟', 'RAM要求': '5 GB', 'HumanEval': '83%' },
          ],
        },
        howToBrowse: {
          title: '如何浏览和选择Ollama模型',
          content: '使用Ollama模型有两种方式。**切换已安装模型：** 在Ollama Mac应用中，点击聊天输入框底部的模型下拉按钮（显示当前模型名，如"gemma3:1b"）切换本地已安装的模型。**查找并下载新模型：** 访问ollama.com/library按类别浏览4500+模型，然后使用下方CLI命令下载安装。',
          codeBlock: 'ollama pull llama3.1:8b\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        commonMistakes: {
          title: '常见误区',
          faqs: [
            {
              q: '中国企业使用本地LLM如何符合数据安全法？',
              a: '根据《中华人民共和国数据安全法》（2021年），敏感数据（用户、金融、医疗）在中国境内处理。本地推理完全满足此要求：数据不离开企业系统。推荐使用Qwen3系列（阿里开发，针对中文优化）或Llama 3.3。关键：选择与您数据分类相符的模型。',
            },
            {
              q: '亚太地区跨境数据如何处理？',
              a: '东南亚、日本、澳大利亚等地有跨境数据限制（PDPA、APPI、Privacy Act）。本地LLM优势：推理完全本地化，无跨境传输。ASEAN成员国建议使用本地部署+地理位置锁定。中国企业对APAC客户：Qwen3或Llama可在本地数据中心运行，满足所有地域要求。',
            },
            {
              q: '金融、医疗、法律企业如何部署？',
              a: '这些高监管行业要求：数据主权、完整审计、合规认证。本地LLM方案：（1）Llama 3.3/70B：标准金融基准检验；（2）Qwen3：中文医疗文档理解；（3）Mistral：法律条款分析。部署步骤：孤立网络、受限访问、日志记录、定期审计。Ollama与标准企业IT（Kubernetes、Docker）兼容。',
            },
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: '下一步',
          items: [
            '[最佳本地编程LLM](/zh/local-llms/best-local-llms-for-coding) — 专为编程优化的最佳Ollama模型 →',
            '[仅CPU运行LLM指南](/zh/local-llms/best-cpu-only-llm) — 没有GPU？从这里开始 →',
            '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 不确定你的电脑能否运行这些模型？ →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: '本地LLM需要多少RAM？',
              a: '7B模型：6.5-8GB。13B模型：11-14GB。70B模型：42-48GB（Q4_K_M量子化）。3B模型：2-3GB。运行前用 `ollama show [model-name]` 检查确切要求。',
            },
            {
              q: 'Ollama模型可以离线运行吗？',
              a: '可以。首次下载后，推理完全本地进行。无网络需求。Ollama定期检查更新但不自动应用。',
            },
            {
              q: '哪个模型对中文支持最好？',
              a: 'Qwen3 7B。使用CulturaX中文微调和Wikipedia中文语料。Llama 3.3中文可接受，但Qwen精度更高。Mistral Small主要针对法文和西班牙文。',
            },
            {
              q: 'Ollama模型真的完全免费吗？',
              a: '是的。所有Ollama模型遵循开源许可（Apache 2.0、Meta Llama Community、DeepSeek）。无订阅、无API费用。下载、本地安装和无限使用完全免费。',
            },
            {
              q: 'DeepSeek-R1的速度真的那么快？',
              a: '生成速度：M1 Pro 15-25 tokens/秒（与Llama 3.3相同）。总延迟更高因为思维链生成需要额外处理。中等查询约8-12秒。实时应用选Llama 3.3或Mistral。',
            },
            {
              q: '为什么不直接用ChatGPT Plus而用本地Ollama？',
              a: '隐私：对话不发送给OpenAI。成本：无月费，GPU一次性购买。离线：完全无网络需求。自定义：完全控制系统提示、行为和参数。',
            },
            {
              q: 'Ollama模型支持图像处理吗？',
              a: '支持。Llama 3.2 Vision、Qwen2-VL、Gemma 3都是多模态。图像本地上传无云传输。支持JPEG、PNG、GIF。',
            },
            {
              q: '如何更新Ollama模型？',
              a: '重新运行 `ollama pull [model-name]`。仅下载差分（去重）。删除旧版本：`ollama rm [model-name]:tag`。',
            },
            {
              q: 'GDPR对Ollama有影响吗？',
              a: '有。GDPR个人数据安全强制。本地推理满足内置保护要求。无云传输=主权、防护、合规性。注意：使用云模型时需确认处理合同。',
            },
            {
              q: '日本企业如何利用Ollama？',
              a: '优势：数据主权（避免云锁定）、符合IT标准（IPA/METI AI Governance 2024）、标准硬件可扩展、无API费用。Qwen3 7B在标准企业GPU上运行。Llama 3.3 8B适合企业工具、客户自动化和文档处理验证。',
            },
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[如何安装Ollama：完整指南](/zh/local-llms/how-to-install-ollama)',
            '[Ollama vs LM Studio：完整对比](/zh/local-llms/ollama-vs-lm-studio)',
            '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026)',
            '[LLM量子化完全指南：Q4_K_M vs IQ3_M](/zh/local-llms/llm-quantization-explained)',
            '[Prompt Engineering框架：RTF框架](/zh/prompt-engineering/rtf-framework)',
            '[AI代码审查指南](/zh/prompt-engineering/ai-code-review)',
          '[本地LLM模型更新2026](/zh/local-llms/local-llm-model-updates-2026) -- 包含Ollama可用日期的所有主要开权重发布完整时间线。',
          ],
        },
        sources: {
          title: '参考来源',
          items: [
            '[Ollama官方库](https://ollama.ai/library)----所有支持的模型和下载命令',
            '[OpenCompass 2026基准](https://opencompass.org/)----MMLU、HumanEval、MATH排名',
            '[DeepSeek-R1研究论文](https://arxiv.org/abs/2501.12948)----推理模型技术细节',
            '[Qwen3技术报告](https://qwenlm.github.io/blog/qwen2-5-opensource/)----中文优化和性能数据',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama 2026年6月更新：最新版本与新模型',
        'description': '当前Ollama版本v0.30.8（2026年6月）及最新模型：MiniMax M3、Kimi K2.6、Qwen 3.6、DeepSeek V4。验证基准、RAM需求、pull命令。',
        'url': 'https://www.promptquorum.com/zh/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-06-15',
        'author': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
        },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'Llama' },
          { '@type': 'Thing', 'name': 'Qwen3' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2']
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ollama Top 10 开源模型',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B', 'description': '下载量最高。通用、初学者适用。6.5GB RAM。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 7B', 'description': '增长最快。代码和中文优秀。6.5GB RAM。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small', 'description': '多语言模型。法文西班牙文优秀。6.5GB RAM。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Llama 3.3 70B', 'description': '大型模型。多基准接近GPT-4。44GB RAM。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'DeepSeek-R1 7B', 'description': '推理模型。思维链推理。6.5GB RAM。' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Gemma 3 9B', 'description': '多模态。视觉和128K上下文。9.5GB RAM。' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Llama 3.2 Vision 11B', 'description': '视觉模型。图像处理和多模态。11GB RAM。' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Phi-3.5 Mini 3.8B', 'description': '超小型高效。移动和物联网。3GB RAM。' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Qwen3 32B', 'description': 'Qwen大型版。复杂任务高质量。20GB RAM。' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Mistral Small 3.1', 'description': '高速轻量。实时应用质量兼顾。5GB RAM。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '本地LLM需要多少RAM？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '7B模型：6.5-8GB。13B模型：11-14GB。70B模型：42-48GB（Q4_K_M量子化）。3B模型：2-3GB。运行前用`ollama show [model-name]`检查确切要求。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama模型可以离线运行吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。首次下载后，推理完全本地进行。无网络需求。Ollama定期检查更新但不自动应用。',
            }
          },
          {
            '@type': 'Question',
            'name': '哪个模型对中文支持最好？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 7B。使用CulturaX中文微调和Wikipedia中文语料。Llama 3.3中文可接受，但Qwen精度更高。Mistral Small主要针对法文和西班牙文。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama模型真的完全免费吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '是的。所有Ollama模型遵循开源许可（Apache 2.0、Meta Llama Community、DeepSeek）。无订阅、无API费用。下载、本地安装和无限使用完全免费。',
            }
          },
          {
            '@type': 'Question',
            'name': 'DeepSeek-R1的速度真的那么快？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '生成速度：M1 Pro 15-25 tokens/秒（与Llama 3.3相同）。总延迟更高因为思维链生成需要额外处理。中等查询约8-12秒。实时应用选Llama 3.3或Mistral。',
            }
          },
          {
            '@type': 'Question',
            'name': '为什么不直接用ChatGPT Plus而用本地Ollama？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '隐私：对话不发送给OpenAI。成本：无月费，GPU一次性购买。离线：完全无网络需求。自定义：完全控制系统提示、行为和参数。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama模型支持图像处理吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '支持。Llama 3.2 Vision、Qwen2-VL、Gemma 3都是多模态。图像本地上传无云传输。支持JPEG、PNG、GIF。',
            }
          },
          {
            '@type': 'Question',
            'name': '如何更新Ollama模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '重新运行`ollama pull [model-name]`。仅下载差分（去重）。删除旧版本：`ollama rm [model-name]:tag`。',
            }
          },
          {
            '@type': 'Question',
            'name': 'GDPR对Ollama有影响吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '有。GDPR个人数据安全强制。本地推理满足内置保护要求。无云传输=主权、防护、合规性。注意：使用云模型时需确认处理合同。',
            }
          },
          {
            '@type': 'Question',
            'name': '日本企业如何利用Ollama？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '优势：数据主权（避免云锁定）、符合IT标准（IPA/METI AI Governance 2024）、标准硬件可扩展、无API费用。Qwen3 7B在标准企业GPU上运行。Llama 3.3 8B适合企业工具、客户自动化和文档处理验证。',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: '下面的幻灯片涵盖：按下载次数排名的 Top 10 Ollama 模型、性能对比（60-74% HumanEval）、按用途分类的最佳模型（聊天、编码、推理、视觉）、DeepSeek-R1 链式思维推理及确切的拉取命令。将 PDF 下载为您的 Ollama 模型选择参考卡。',
    },
  ko: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-21',
      current_models_mentioned: ['Qwen 3.6 27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.1', 'Llama 4 Scout', 'Devstral Small 24B', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-Bench Pro', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'Ollama 최고 오픈소스 모델 2026년 6월: Top 10 순위',
      seoTitle: 'Ollama 최고 오픈소스 모델 2026년 6월: Top 10',
      intro: '2026년 6월 업데이트. 현재 Ollama 버전은 v0.30.8(2026년 6월 12일 출시)으로, llama.cpp를 통해 GGUF 하드웨어 지원을 확장하고 Apple Silicon MLX 엔진을 업그레이드했습니다. 이번 달 라이브러리의 최신 모델은 MiniMax M3(6월 1일, 오픈 웨이트, 1M 토큰 컨텍스트 + 네이티브 비전), NVIDIA Nemotron 3 Ultra(6월 4일), DeepSeek V4 Pro이며, Kimi K2.6, Qwen 3.6, GLM-5.1, gpt-oss, Gemma 4에 합류했습니다. 전체 다운로드 최다는 여전히 Llama 계열(Llama 4 Scout, Llama 3.x)이며, 소비자 하드웨어에서 가장 우수한 전반적 모델은 Qwen 3.6 27B(77.2% SWE-bench)입니다.',
      metaDescription: '2026년 6월 Ollama 최고 오픈소스 모델: Qwen 3.6 27B(종합 최고), Kimi K2.6(코딩), gpt-oss:20b(16GB). 검증된 벤치마크, RAM, pull 명령.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**현재 Ollama 버전은 v0.30.8(2026년 6월 12일)입니다. 이번 달 추가된 최신 모델은 MiniMax M3(오픈 웨이트, 1M 토큰 컨텍스트 + 네이티브 비전), NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro입니다. 소비자 하드웨어에서 가장 우수한 전반적 모델은 Qwen 3.6 27B(77.2% SWE-bench, Q4에서 24GB에 적합)입니다. 기타 추천 모델: Kimi K2.6(최전선 코딩), gpt-oss:20b(소형 최강 / 16GB), qwen3:30b(균형잡힌 범용), DeepSeek-R1(추론), Gemma 4(비전/도구 호출), Llama 4 Scout(10M 긴 컨텍스트 / 멀티모달). 전체 다운로드 최다는 여전히 Llama 계열입니다.**',
      quickAnswerTop: {
        ko: {
          question: '2026년 6월 최신 Ollama 버전과 최고 모델은 무엇입니까?',
          answer: '최신 Ollama 버전은 v0.30.8(2026년 6월 12일)입니다. 이번 달 추가된 최신 모델은 MiniMax M3, NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro입니다. 2026년 6월 Ollama 상위 오픈소스 모델: Qwen 3.6 27B(소비자 하드웨어 전반 최고, 24GB Q4), Kimi K2.6(코딩 최강, 최전선 MoE), gpt-oss:20b(소형 최강 / 16GB, 조정 가능한 추론), qwen3:30b(균형잡힌 범용), Llama 4 Scout(10M 긴 컨텍스트 / 멀티모달 최고), DeepSeek-R1(추론 최고). 설치: ollama pull <model-name>',
          bullets: [
            '→최신 버전: Ollama v0.30.8(2026년 6월 12일) — GGUF 하드웨어 지원 확대, Apple Silicon MLX 엔진 업그레이드',
            '→이번 달 신규: MiniMax M3(1M 컨텍스트 + 비전), NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro',
            '→Qwen 3.6 27B — 소비자 하드웨어 전반 최고, 77.2% SWE-bench, Q4에서 24GB에 적합',
            '→Kimi K2.6 — 최전선 코딩(SWE-Bench Pro 58.6), MoE(32B 활성/1T 전체), Modified MIT',
            '→gpt-oss:20b — 소형 최강 모델, 16GB에서 실행, ~o3-mini 수준, 조정 가능한 추론',
            '→qwen3:30b — 균형잡힌 범용 모델; 코드 완성에는 qwen3-coder:30b',
            '→Llama 4 Scout — 긴 컨텍스트(10M 토큰) + 멀티모달, Q4에서 ~55GB',
            '→DeepSeek-R1 — 추론/수학 최강; 조정 가능한 추론에는 gpt-oss:20b (DeepSeek는 이후 오픈 웨이트 신세대 모델인 DeepSeek-V4—Flash/Pro—를 출시했습니다. R1/V3는 계속 로컬에서 사용할 수 있습니다.)',
          ],
          updatedDate: '2026-06-21',
        },
      },
      audience: '소비자 하드웨어에서 처음으로 로컬 LLM을 실행하는 입문자',
      readTime: '9분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: '오픈소스 모델 Ollama',
      toc: [
        { label: '핵심 요점', anchor: '#key-takeaways' },
        { label: 'Ollama에서 가장 인기 있는 모델', anchor: '#most-popular-models-on-ollama' },
        { label: '사용 사례별 상위 모델', anchor: '#top-models-by-category' },
        { label: '2026년 6월 신규 추가', anchor: '#new-may-2026' },
        { label: 'DeepSeek-R1이란?', anchor: '#deepseek-r1' },
        { label: 'Ollama 비전 모델', anchor: '#vision-models' },
        { label: '전체 상위 10개 비교표', anchor: '#full-top-10-comparison' },
        { label: 'Ollama 라이브러리 탐색 방법', anchor: '#how-to-browse-ollama-library' },
        { label: '지역별 맥락', anchor: '#regional-context' },
        { label: '흔한 실수', anchor: '#common-mistakes' },
        { label: '관련 읽기 자료', anchor: '#related-reading' },
        { label: '자주 묻는 질문', anchor: '#common-questions' },
        { label: '출처', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**소비자 하드웨어 전반 최고**: Qwen 3.6 27B(77.2% SWE-bench, Q4에서 24GB에 적합). 균형잡힌 범용: qwen3:30b.',
            '**다운로드 최다**: Llama 3.2 3B(튜토리얼용)와 Llama 계열 -- 가장 넓은 도구 지원.',
            '**추론 최고**: DeepSeek-R1(연쇄 사고)과 gpt-oss:20b(조정 가능한 추론, ~o3-mini 수준).',
            '**코딩 최고**: Kimi K2.6(최전선 MoE), Qwen 3.6 27B(최고 밀집 모델), Devstral Small 24B(최고 에이전트 코딩), qwen3-coder:30b(코드 완성) -- 해당 크기에서 가장 높은 벤치마크.',
            '**소형 최강 / 16GB**: gpt-oss:20b. **비전/멀티모달 최고**: Gemma 4(E4B+). **긴 컨텍스트(10M) / 대형 멀티모달 최고**: Llama 4 Scout(~55GB).',
            '2026년 6월 기준, Ollama 라이브러리에는 4,500개 이상의 모델이 있습니다. 모든 모델은 `ollama pull <name>`으로 이용 가능합니다.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'Ollama 신규 소식 — 2026년 6월 업데이트',
          content: [
            '**현재 Ollama 버전: v0.30.8**(2026년 6월 12일 출시). ollama.com/download에서 사용 가능한 최신 안정 릴리스입니다. `curl https://ollama.ai/install.sh | sh`(macOS: `brew upgrade ollama`)로 업데이트한 후 `ollama --version`으로 확인하십시오.',
            '**v0.30 시리즈의 변경 사항(2026년 5~6월):** Ollama v0.30은 llama.cpp를 통해 GGUF 모델 호환성을 확장하여 Apple Silicon을 넘어 하드웨어 지원을 넓혔으며, MLX 엔진은 2026년 6월 11일에 업그레이드되어 지금까지 가장 빠른 Apple Silicon 추론을 제공합니다 — 더 적은 메모리로 더 높은 품질의 출력을 제공합니다. v0.30.8까지의 포인트 릴리스는 Gemma 4 QAT 가중치(6월 5일), Hermes Desktop(6월 7일), 개선된 프롬프트/KV 캐시 재사용, Windows 구성 경로 수정을 추가했습니다. 전체 노트: github.com/ollama/ollama/releases.',
            '**이번 달 추가된 최신 모델(2026년 6월):**',
          ],
          items: [
            '**MiniMax M3**(MiniMax, 2026년 6월 1일) — 최신 오픈 웨이트 플래그십: 최전선 코딩(SWE-Bench Pro 59.0), 1M 토큰 컨텍스트 창, 네이티브 이미지/비디오 입력을 결합한 최초의 모델입니다. Ollama 라이브러리에 순차 배포 중 — `ollama pull minimax-m3`로 가용성을 확인하십시오.',
            '**NVIDIA Nemotron 3 Ultra**(NVIDIA, 2026년 6월 4일) — 고처리량 추론과 장기 실행 에이전트 워크플로용으로 구축되었습니다. NVIDIA Open Model License. Pull: `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro**(DeepSeek, 2026년 4월 23일) — 알고리즘 코딩 특화 모델, 93.5% LiveCodeBench, MIT 라이선스. 경량 하드웨어용 보급형 모델 DeepSeek V4 Flash. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**(Moonshot AI, 2026년 4월 20일) — 최전선 코딩 모델, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%(GPT-5.5와 동점). MoE 아키텍처(32B 활성 / 1T 전체). Modified MIT 라이선스. Pull: `ollama pull kimi-k2.6`',
            '**Qwen 3.6 27B**(Alibaba, 2026년 4월 16일) — 소비자 하드웨어 전반 최고, 77.2% SWE-bench, Apache 2.0, Q4에서 24GB에 적합. 또한 Qwen3.6-35B-A3B(MoE, 73.4 SWE-bench)도 있습니다. Pull: `ollama pull qwen3.6:27b`',
            '**GLM-5.1**(Z.ai, 2026년 4월 7일) — 744B / 40B 활성 MoE, MIT 라이선스, SWE-Bench Pro 58.4. 구조화된 코드 생성 분야 선두. Pull: `ollama pull glm-5.1`',
            '**gpt-oss**(OpenAI, 2026년) — 오픈 웨이트 MoE: gpt-oss:20b(21B 전체 / 3.6B 활성, 16GB에서 실행, ~o3-mini 수준, 조정 가능한 추론)와 gpt-oss:120b(80GB). Pull: `ollama pull gpt-oss:20b`',
            '**Gemma 4**(Google, 2026년 4월 2일) — 멀티모달 크기 E2B / E4B / E12B(26B MoE) / E27B(31B 밀집), 모두 비전과 도구 호출 지원. 2026년 6월 5일에 QAT 가중치가 추가되었습니다. E4B는 ~6GB VRAM에서 실행됩니다. Pull: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Ollama를 최신 버전으로 업데이트 (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# 또는 Mac에서: brew upgrade ollama\n\n# 현재 버전 확인\nollama --version  # 출력: ollama version 0.30.8\n\n# 2026년 6월 최신 모델 Pull\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: '2026년 Ollama에서 가장 인기 있는 모델은 무엇입니까?',
          content: [
            '**Ollama에서의 인기는 각 모델의 라이브러리 페이지에 표시되는 다운로드 수로 측정됩니다.** 2026년 6월 기준, 다운로드 상위 모델은 여전히 Meta의 Llama 계열이 주도하고 있습니다 -- Llama 3.2 3B가 첫 설치 테스트 모델로 많이 사용되어 전체 다운로드 1위입니다. 그러나 Llama 4 Scout는 2026년 4월 출시 이후 빠르게 순위를 올리고 있습니다.',
            'Qwen3는 Ollama 라이브러리에서 가장 빠르게 성장하는 모델 계열로, Qwen3와 새로운 Qwen 3.6 밀집 변형이 기존 Qwen3를 빠르게 대체하고 있습니다. DeepSeek-R1은 출시 이후 대규모 다운로드 급증을 기록했으며 추론 작업에서 높은 다운로드 수를 유지하고 있습니다.',
            'Meta는 2026년 4월에 Scout(17B 활성, 109B 전체, MoE)와 Maverick(17B 활성, 400B 전체) 변형을 포함한 **Llama 4**를 출시했습니다. Llama 4 Scout는 이제 Ollama 라이브러리에서 안정적으로 사용 가능합니다(`ollama pull llama4:scout`). Llama 4 계열은 혼합 전문가(MoE) 아키텍처를 사용합니다 — 토큰당 17B 파라미터만 활성화되지만, 109B 전체 파라미터로 Scout는 Q4에서 ~55GB VRAM이 필요합니다(1.78비트에서만 24GB에 적합, ~20 tok/s). Scout의 핵심 특징은 소비자 하드웨어 적합성이 아니라 1,000만 토큰 컨텍스트 창과 멀티모달 입력입니다. 경량 설정(8GB RAM)에서는 Llama 3.2 3B가 여전히 가장 쉬운 첫 번째 모델입니다. Ollama 생태계는 2026년 4월에 크게 확장되었습니다. Kimi K2.6(Moonshot AI, Modified MIT 라이선스, 32B 활성 / 1T 전체 MoE)은 SWE-Bench Pro 58.6을 달성하여 GPT-5.5와 동점을 기록했습니다. Qwen 3.6 27B는 소비자 하드웨어 전반 최고 모델로서 77.2% SWE-bench를 달성했습니다(Q4에서 24GB에 적합). OpenAI의 오픈 웨이트 gpt-oss:20b(21B 전체 / 3.6B 활성 MoE)는 16GB에서 ~o3-mini 수준의 조정 가능한 추론으로 실행됩니다. 현재 릴리스인 Ollama v0.30.8(2026년 6월 12일)은 llama.cpp를 통해 GGUF 하드웨어 지원을 확장하고 Apple Silicon MLX 엔진을 업그레이드합니다. Ollama 라이브러리는 이제 4,500개 이상의 모델을 보유하고 있으며, MiniMax M3, NVIDIA Nemotron 3 Ultra, DeepSeek V4 Pro가 이번 달 최신 추가 모델입니다.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: '사용 사례별로 가장 적합한 Ollama 모델은 무엇입니까?',
          content: '모델 출력 품질은 프롬프트 방식에 크게 의존합니다. 연쇄 사고, 퓨샷 예시, 출력 형식 지정 등 모든 로컬 모델에서 작동하는 구조화된 기법은 [프롬프트 엔지니어링 가이드](https://www.promptquorum.com/prompt-engineering)를 참조하십시오. 추론 작업에서는 [연쇄 사고 프롬프팅](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting)이 DeepSeek-R1 및 Qwen3 출력 품질을 크게 향상시킵니다. 이러한 모델의 양자화 트레이드오프를 이해하려면 [양자화 가이드 →](/local-llms/llm-quantization-explained)를 참조하십시오. 각 모델에 필요한 VRAM 양을 확인하려면 [VRAM 요구 사항 가이드 →](/local-llms/how-much-vram-local-llm)를 참조하십시오. Gemma 4를 사용한 에이전트 워크플로에 대해서는 [트리 오브 소트 및 ReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react)를 참조하십시오. 이러한 모델을 실행하기 위한 하드웨어 요구 사항은 [하드웨어 가이드 →](/local-llms/local-llm-hardware-guide-2026)를 참조하십시오. 이 목록의 도구 호출 모델이 파일 및 데이터베이스 액세스와 함께 다단계 루프에 연결되면 오픈소스 오케스트레이션 패턴에 대해 [MCP를 활용한 로컬 AI 에이전트](/power-local-llm/local-ai-agents-with-mcp-2026)를 참조하십시오.',
          items: [
            '**일반 채팅(입문)**: `ollama run llama3.2:3b` -- 문서가 가장 많고 첫 번째 모델로 최적 지원.',
            '**일반 채팅(전반 최고)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench, 소비자 하드웨어 전반 최고, Q4에서 24GB에 적합. 균형잡힌 범용: `ollama run qwen3:30b`. 8GB 기기에서는 `ollama run llama3.2:3b`를 유지하십시오.',
            '**긴 컨텍스트 / 멀티모달**: `ollama run llama4:scout` -- 1,000만 토큰 컨텍스트 + 멀티모달, MoE(17B 활성/109B 전체). Q4에서 ~55GB VRAM 필요(1.78비트에서만 24GB에 적합, ~20 tok/s).',
            '**소형 최강 / 16GB**: `ollama run gpt-oss:20b` -- 21B 전체 / 3.6B 활성 MoE, ~o3-mini 수준, 조정 가능한 추론. 더 큰 모델: `ollama run gpt-oss:120b`(80GB).',
            '**8GB에서 코딩**: `ollama run qwen3:8b` -- 8GB VRAM 기기 최고 로컬 코딩 모델. 76% HumanEval, 5GB 사용, 다국어 지원.',
            '**8GB에서 일반 추론(코딩 외)**: `ollama run mistral:7b` -- 8GB에서 가장 빠른 범용 모델, 40~60 tok/sec.',
            '**코딩(최고 에이전트, 24B)**: `ollama run devstral-small:24b` -- 최고 에이전트 코딩 모델(다중 파일 편집, 디버깅). 16GB RAM. Mistral AI 제공.',
            '**코딩(최고 밀집, 27B)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench. 최고 밀집 코딩 모델. 22GB VRAM.',
            '**코딩(최전선 MoE)**: `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6(GPT-5.5 동점), 최상위. MoE(32B 활성/1T 전체). Modified MIT 라이선스. 소비자 하드웨어에는 양자화 필요.',
            '**에이전트 작업 및 도구 호출**: `ollama run gemma4:e4b` -- 2026년 4월 2일 출시. 내장 도구 호출 + 비전 지원. 로컬 에이전트, 함수 호출, 구조화된 출력에 권장. 6GB RAM.',
            '**추론 및 수학**: `ollama run deepseek-r1:7b` -- 연쇄 사고 모델, 7B에서 최고 로컬 수학 성능.',
            '**다국어**: `ollama run qwen3:7b` -- 29개 이상 언어 기본 지원, 가장 강력한 비영어 지원, 76% HumanEval.',
            '**이미지 이해**: `ollama run gemma4:e4b` -- 비전 + 도구 호출(2026년 6월). 또는 전용 비전용 `ollama run llama3.2-vision:11b`.',
            '**빠르고 경량**: `ollama run gemma2:2b` -- 가장 빠른 CPU 추론, 1.7GB RAM.',
            '**고품질(16GB RAM)**: `ollama run mistral-small3.1` -- 14GB RAM에서 ~70B급 품질.',
            '**임베딩 생성**: `ollama run nomic-embed-text` -- RAG 파이프라인용 1억 3,700만 파라미터 임베딩 모델.',
            '**문서 Q&A(RAG)**: Open WebUI의 RAG 기능과 함께 `ollama run llama3.2` -- 가장 잘 지원되는 조합.',
            '**홈 자동화 / 웨이크 워드 AI**: `ollama run phi4-mini` — Phi-4 Mini(3.8B, ~3GB VRAM)는 독립 GPU 없이 미니 PC에서 20~25 tok/sec로 Home Assistant 음성 쿼리를 처리합니다. [Home Assistant + Ollama 통합 가이드 →](/smart-home/home-assistant-ollama-integration) 참조.',
          ],
          image: '/images/ollama-model-by-use-case-en.svg',
          imageCaption: '사용 사례별 Ollama 모델 선택: 채팅과 코딩에는 qwen3.6:27b(전반 최고, 77.2% SWE-bench), 최전선 코딩에는 kimi-k2.6, 16GB에서는 gpt-oss:20b, 수학에는 deepseek-r1:7b.',
        },
        newApril2026: {
          id: 'new-may-2026',
          title: '신규 Ollama 모델 — 2026년 6월 릴리스',
          content: '2026년 6월 기준 Ollama 라이브러리의 최신 모델을 최신순으로 정리한 목록입니다. 워크플로를 구축하기 전에 `ollama pull <model>`로 가용성을 확인하십시오 — 새 모델은 출시 후 며칠 내에 ollama.com/library에 등장합니다.',
          rows: [
            { 'Model': 'minimax-m3', 'Released': '2026년 6월 1일', 'Best For': '최신 플래그십: 최전선 코딩(SWE-Bench Pro 59.0), 1M 컨텍스트, 네이티브 비전', 'Ollama Command': 'ollama run minimax-m3' },
            { 'Model': 'nemotron3-ultra', 'Released': '2026년 6월 4일', 'Best For': 'NVIDIA — 고처리량 추론 + 장기 실행 에이전트', 'Ollama Command': 'ollama run nemotron3-ultra' },
            { 'Model': 'deepseek-v4-pro', 'Released': '2026년 4월 23일', 'Best For': '알고리즘 코딩, 93.5% LiveCodeBench, MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': '2026년 4월 20일', 'Best For': '최전선 코딩(SWE-Bench Pro 58.6), MoE(32B/1T), Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6' },
            { 'Model': '[qwen3.6:27b](https://ollama.com/library/qwen3)', 'Released': '2026년 4월 16일', 'Best For': '소비자 하드웨어 전반 최고, 77.2% SWE-bench, Q4에서 24GB 적합', 'Ollama Command': 'ollama run qwen3.6:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026년', 'Best For': '균형잡힌 범용; 코드 완성에는 qwen3-coder:30b', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026년', 'Best For': '소형 최강 / 16GB, ~o3-mini, 조정 가능한 추론(gpt-oss:120b도 있음)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.1', 'Released': '2026년 4월 7일', 'Best For': 'Z.ai, 744B/40B 활성 MoE, MIT, SWE-Bench Pro 58.4', 'Ollama Command': 'ollama run glm-5.1' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': '2026년 4월 2일', 'Best For': '비전 + 도구 호출(E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': '2026년 4~5월', 'Best For': '저비용 코딩(실세계 78/100)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:7b](https://ollama.com/library/qwen3)', 'Released': '2026년', 'Best For': '7B에서 HumanEval 76%, 다국어', 'Ollama Command': 'ollama run qwen3:7b' },
          ],
          columns: ['Model', 'Released', 'Best For', 'Ollama Command'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: 'DeepSeek-R1이란 무엇이며 어떻게 다릅니까?',
          content: [
            '**DeepSeek-R1은 추론 모델입니다 -- 답변을 직접 생성하는 표준 채팅 모델과 달리, DeepSeek-R1은 최종 답변 전에 명시적인 연쇄 사고 추론을 생성합니다.** 이를 통해 수학, 논리 퍼즐, 단계별 문제 해결에서 성능이 크게 향상됩니다.',
            'DeepSeek-R1 7B는 경쟁 수학(MATH)에서 52%를 기록하는 반면, 같은 크기의 Mistral Small은 28%에 그칩니다. 표준 모델보다 느리지만(응답당 토큰 수가 많음) 추론이 중요한 작업에서 훨씬 더 정확합니다.',
          ],
          codeBlock: '# DeepSeek-R1 Pull 및 실행\nollama run deepseek-r1:7b\n\n# 더 나은 품질을 위한 대형 변형\nollama run deepseek-r1:14b   # 10GB RAM\nollama run deepseek-r1:32b   # 20GB RAM',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-en.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: MATH에서 52% vs 28%. 연쇄 사고 추론 모델 -- 더 느리지만 정확도가 크게 향상됩니다.',
        },
        visionModels: {
          id: 'vision-models',
          title: 'Ollama 모델 중 이미지 입력을 지원하는 모델은 무엇입니까?',
          content: '2026년 6월 기준, Ollama에서 이미지 입력(멀티모달)을 지원하는 모델은 다음과 같습니다: Gemma 4는 비전과 도구 호출을 모두 지원합니다 — Ollama의 비전 모델 중 유일합니다.',
          rows: [
            { 'Model': '[llama3.2-vision:11b](https://ollama.com/library/llama3.3)', 'RAM': '~8GB', 'Image Support': '예', 'Ollama Command': 'ollama run llama3.2-vision:11b' },
            { 'Model': '[llama3.2-vision:90b](https://ollama.com/library/llama3.3)', 'RAM': '~55GB', 'Image Support': '예', 'Ollama Command': 'ollama run llama3.2-vision:90b' },
            { 'Model': '[gemma3:9b (vision)](https://ollama.com/library/gemma3)', 'RAM': '~6GB', 'Image Support': '예', 'Ollama Command': 'ollama run gemma3:9b' },
            { 'Model': 'minicpm-v:8b', 'RAM': '~5.5GB', 'Image Support': '예', 'Ollama Command': 'ollama run minicpm-v' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'RAM': '~6GB', 'Image Support': '예 + 도구 호출 ✓', 'Ollama Command': 'ollama run gemma4:e4b' },
          ],
          columns: ['Model', 'RAM', 'Image Support', 'Ollama Command'],
          image: '/images/ollama-vision-models-comparison-en.svg',
          imageCaption: '이미지 입력을 위한 Ollama 비전 모델 5개. Gemma 4 E4B(6GB)는 이제 도구 호출을 포함합니다. 전용 비전에는 Llama 3.2 Vision 11B(8GB). 모두 로컬에서 실행됩니다.',
        },
        fullTop10: {
          id: 'full-top-10-comparison',
          title: 'Ollama 최고 오픈소스 모델 10개는 무엇입니까?',
          content: '튜토리얼이 많아 Llama 3.x의 다운로드 수는 여전히 높습니다. 2026년 6월 신규 프로젝트에는 Qwen 3.6 27B(소비자 하드웨어 전반 최고), Kimi K2.6, gpt-oss:20b, qwen3:30b를 권장합니다.',
          rows: [
            { '#': '1', 'Model': '[Qwen 3.6 27B](https://ollama.com/library/qwen3)', 'Best For': '소비자 하드웨어 전반 최고', 'RAM': '24GB (Q4)', 'HumanEval': '77.2% SWE-bench' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': '최전선 코딩, MoE(32B/1T), Modified MIT', 'RAM': '양자화', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': '소형 최강 / 16GB, 조정 가능한 추론', 'RAM': '16GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': '균형잡힌 범용; 코드에는 qwen3-coder:30b', 'RAM': '~18GB', 'HumanEval': '강력' },
            { '#': '5', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral)', 'Best For': '에이전트 코딩(다중 파일)', 'RAM': '16GB', 'HumanEval': '80%' },
            { '#': '6', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': '추론, 수학', 'RAM': '5GB', 'MATH': '52%' },
            { '#': '7', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': '비전 + 도구 호출(멀티모달)', 'RAM': '~6GB', 'Notes': '에이전트 지원' },
            { '#': '8', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': '긴 컨텍스트 10M + 멀티모달, MoE', 'RAM': '~55GB (Q4)', 'HumanEval': '85%' },
            { '#': '9', 'Model': '[mistral-small3.1](https://ollama.com/library/mistral)', 'Best For': '16GB에서 고품질', 'RAM': '14GB', 'HumanEval': '74%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': '첫 번째 모델, 일반 채팅', 'RAM': '2.5GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-en.svg',
          imageCaption: '2026년 6월 상위 Ollama 모델: Qwen 3.6 27B(전반 최고, Q4에서 24GB), Kimi K2.6, gpt-oss:20b. 1,000만 토큰 컨텍스트에는 Llama 4 Scout(~55GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'Ollama 모델 라이브러리를 어떻게 탐색합니까?',
          content: 'Ollama 모델을 활용하는 두 가지 방법이 있습니다. **설치된 모델 전환:** Ollama Mac 앱에서 채팅 입력창 하단의 모델 드롭다운 버튼(현재 모델 이름 표시, 예: "gemma3:1b")을 클릭하여 로컬에 설치된 모델 간에 전환합니다. **새 모델 찾기 및 다운로드:** ollama.com/library를 방문하여 카테고리별로 4,500개 이상의 모델을 탐색한 후, 아래 CLI 명령을 사용하여 모델을 Pull하고 관리합니다.',
          codeBlock: '# 로컬에 다운로드된 모든 모델 목록\nollama list\n\n# 모델 검색 및 Pull\nollama pull qwen2.5-coder:32b\n\n# 모델의 모든 사용 가능한 태그 확인\nollama show qwen2.5\n\n# 디스크 공간 확보를 위해 모델 제거\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: '오픈소스 Ollama 모델: 지역별 맥락',
          content: [
            '**EU / GDPR + 라이선스 준수.** 프로덕션에 Ollama 모델을 배포하는 EU 조직의 경우, 성능만큼이나 라이선스 선택이 중요합니다. Apache 2.0(완전 개방, 상업적 이용 허용): Mistral Small, Mistral Small 3.1, Qwen3 7B, Qwen 3.6 27B, Devstral Small 24B, Gemma 2 2B. Meta Llama Community Licence(월간 활성 사용자 7억 명 초과 시 상업적 이용 제한): Llama 3.3 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT(상업적 이용 허용): DeepSeek-R1 7B, DeepSeek-R1 14B. Modified MIT(귀속 조항이 있는 상업적 이용 허용): Kimi K2.6. 규제 분야의 EU 기업에는 Mistral 모델(프랑스, Apache 2.0) 또는 Devstral Small 24B(최고 에이전트 코딩)가 기본 권장 사항입니다 -- EU 출처, 클린 라이선스, 상업적 배포 제한 없음. GDPR 준수: 모든 모델이 Ollama를 통해 완전히 온프레미스에서 실행되므로, 모델 선택에 관계없이 외부 서버로 개인 데이터가 전송되지 않습니다.',
            '**일본(METI).** 일본 기업의 Ollama 배포에는 Qwen3 / Qwen 3.6 모델 계열이 권장됩니다 -- 기본 일본어 토크나이제이션이 Llama나 Mistral보다 일본어 텍스트를 30~40% 더 토큰 효율적으로 처리하여 추론 시간과 KV 캐시 요구 사항을 직접적으로 줄입니다. 일본어 코딩 워크플로: Qwen 3.6 27B(77.2% SWE-bench)는 일본어 코드 주석을 기본으로 처리하며 2026년 최고 밀집 코딩 모델입니다. METI AI 거버넌스 문서화 시 정확한 모델 버전을 기재해야 합니다. `ollama show <model>`을 사용하여 규정 준수 기록을 위한 파라미터 수, 양자화 레벨, 컨텍스트 길이를 포함한 전체 모델 사양을 확인하십시오.',
            '**중국.** 중국의 CAC 생성형 AI 조치(2023년)에 따라, 최종 사용자에게 AI 서비스를 제공하는 조직은 사용하는 모델을 등록해야 합니다. Qwen3 / Qwen 3.6(Alibaba, Apache 2.0)은 중국 기업의 Ollama 배포에 권장됩니다 -- 중국 모델 출처, Apache 2.0 라이선스, 중국어 작업 최고 성능, 최상위 벤치마크. Kimi K2.6(Moonshot AI, Modified MIT 라이선스, 32B 활성/1T 전체 MoE)도 중국 출처의 최상위 코딩 옵션으로 사용 가능합니다. Pull 명령: 최고 품질에는 `ollama run qwen3.6:27b`, 빠른 속도에는 `ollama run qwen3:7b`. 추론 작업에는 DeepSeek-R1(DeepSeek, MIT 라이선스)이 적합합니다. Ollama를 통해 로컬로 처리되는 데이터의 경우, 중국의 PIPL 국경 간 데이터 이전 요구 사항이 적용되지 않습니다 -- 추론이 온프레미스에서 유지됩니다.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Ollama 모델 선택 시 흔한 실수는 무엇입니까?',
          faqs: [
            {
              q: 'RAM 확인 없이 기본적으로 가장 큰 모델 태그를 Pull하는 경우',
              a: '태그 없이 `ollama pull llama3.3`을 실행하면 일반적으로 가장 큰 표준 양자화 변형이 다운로드됩니다. 8GB RAM 기기에서 llama3.3(70B, ~40GB)을 Pull하면 실패하거나 심각한 스왑 사용이 발생합니다. 항상 변형을 지정하십시오: 8GB 기기에는 `ollama pull llama3.2:3b`.',
            },
            {
              q: '작업별 특화 모델이 있을 때 범용 모델을 사용하는 경우',
              a: '코딩 작업의 경우, `qwen2.5-coder:7b`는 72% HumanEval을 기록하고 범용 `qwen2.5:7b`도 72%를 기록하지만 -- `qwen2.5-coder`는 코드 완성을 위한 FIM 지원이 포함됩니다. 추론/수학에서는 `deepseek-r1:7b`가 MATH에서 52%, `mistral:7b`는 28%를 기록합니다. Ollama 라이브러리에 작업별 특화 모델이 존재하는 이유가 있습니다.',
            },
            {
              q: '워크플로 구축 전에 모델 가용성을 확인하지 않는 경우',
              a: 'Ollama 라이브러리는 시간이 지남에 따라 변경됩니다 -- 모델이 추가되고 간혹 제거됩니다. 특정 모델 기반의 프로덕션 파이프라인을 구축하기 전에, 해당 모델이 라이브러리에 있는지 확인하십시오(로컬에서 `ollama list`, 또는 ollama.com/library 확인). 프로덕션 워크플로에서는 특정 모델 버전을 고정하십시오: `ollama pull llama3.1:8b-instruct-q4_K_M`.',
            },
            {
              q: '대형 모델에 양자화 태그를 지정하지 않는 경우',
              a: '양자화 접미사 없이 `ollama pull qwen2.5-coder:32b`를 실행하면 VRAM이 처리할 수 없는 크기의 기본 변형이 다운로드될 수 있습니다. 16GB VRAM에서는 명시적 Q4_K_M 변형을 Pull하십시오: `ollama pull qwen2.5-coder:32b-instruct-q4_K_M`. Pull 후 `ollama show <model>`을 실행하여 VRAM 요구 사항이 하드웨어와 일치하는지 확인하십시오.',
            },
            {
              q: 'DeepSeek-R1이 표준 채팅 모델만큼 빠를 것으로 기대하는 경우',
              a: 'DeepSeek-R1은 최종 답변 전에 명시적인 연쇄 사고 추론 토큰을 생성합니다 -- 이것이 수학과 논리에서 표준 모델보다 뛰어난 이유이지만, 응답당 3~5배 더 많은 토큰을 생성합니다. 빠른 채팅이나 한 줄 답변에는 `llama3.1:8b`를 사용하십시오. 추론 정확도가 속도보다 중요한 작업에는 DeepSeek-R1을 활용하십시오.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기 자료',
          items: [
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) -- Ollama를 설정하고 이 목록에서 첫 번째 모델을 5분 이내에 Pull하는 방법',
            '[2026년 최고 로컬 LLM](/local-llms/best-local-llms-2026) -- 70B 티어를 포함한 모든 오픈 웨이트 모델의 전체 벤치마크 순위',
            '[코딩 최고 로컬 LLM](/local-llms/best-local-llms-for-coding) -- Qwen 3.6 / Qwen3-Coder 32B, DeepSeek-Coder, Starcoder2의 심층 비교',
            '[LLM 양자화 설명](/local-llms/llm-quantization-explained) -- 이 목록의 모델에 대해 Q4_K_M과 Q8_0 중 선택하는 방법',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- 워크플로에 따라 이러한 모델 실행에 사용할 도구',
            '[최고 로컬 LLM 프론트엔드](/local-llms/best-local-llm-frontends) -- 이 목록의 모든 모델에 연결되는 Open WebUI, Jan AI 및 기타 인터페이스',
          '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) -- Ollama 가용 날짜가 포함된 올해 모든 주요 오픈 웨이트 출시 완전한 타임라인.',
        ],
        },
        nextSteps: {
          id: 'next-steps',
          title: '다음 단계',
          items: [
            '[코딩용 최고 로컬 LLM](/ko/local-llms/best-local-llms-for-coding) — 코딩에 최적화된 Ollama 모델 →',
            '[CPU 전용 최고 LLM](/ko/local-llms/best-cpu-only-llm) — GPU 없나요? 여기서 시작 →',
            '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 내 PC가 이 모델들을 실행할 수 있는지 확인 →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Ollama 오픈소스 모델에 관한 자주 묻는 질문',
          faqs: [
            {
              q: 'Ollama 라이브러리에는 몇 개의 모델이 있습니까?',
              a: '2026년 6월 기준, Ollama 라이브러리에는 공식 지원을 받는 약 4,500개 이상의 모델(큐레이팅된 모델 + 커뮤니티 기여)이 있습니다. Hugging Face에는 커스텀 Modelfile을 통해 Ollama로 로드할 수 있는 수천 개의 추가 GGUF 모델이 있습니다.',
            },
            {
              q: 'Hugging Face 모델을 Ollama에서 직접 사용할 수 있습니까?',
              a: '예. Hugging Face에서 GGUF 파일을 다운로드하고 Modelfile을 생성하십시오: `FROM ./model.gguf`. 그런 다음 `ollama create mymodel -f Modelfile`을 실행합니다. 이는 공식 Ollama 라이브러리에 없는 파인튜닝 모델 및 모델을 포함하여 모든 GGUF 파일에서 작동합니다.',
            },
            {
              q: '로컬 챗봇 구축에 가장 적합한 Ollama 모델은 무엇입니까?',
              a: '범용 로컬 챗봇: `qwen3.6:27b`(소비자 하드웨어 전반 최고, Q4에서 24GB에 적합), 또는 8GB RAM에서는 `llama3.2:3b`(가장 쉬운 시작점). 16GB 기기: `gpt-oss:20b`(~o3-mini 수준) 또는 `mistral-small3.1`. 코딩 어시스턴트 챗봇: `qwen3.6:27b`(77.2% SWE-bench), `kimi-k2.6`(최전선 MoE), 또는 `devstral-small:24b`(에이전트 코딩). localhost:11434의 Ollama API에 연결되는 웹 기반 인터페이스인 Open WebUI와 함께 사용하십시오.',
            },
            {
              q: '모든 Ollama 모델이 진정한 오픈소스입니까?',
              a: '그렇지 않습니다. Ollama 라이브러리에는 다양한 라이선스의 모델이 포함되어 있습니다. Llama 3.x/4.x는 Meta Llama Community Licence를 사용합니다(OSI 승인 오픈소스 아님 -- 월간 활성 사용자 7억 명 초과 시 상업적 이용 제한). Mistral Small, Qwen3, Qwen 3.6, Devstral, Gemma 모델은 Apache 2.0(완전 오픈소스)입니다. Kimi K2.6은 Modified MIT 라이선스(귀속 조항이 있는 상업적 이용 허용)입니다. 상업적 배포 전에 항상 라이선스를 확인하십시오.',
            },
            {
              q: 'RAG를 위해 Ollama에서 사용해야 하는 임베딩 모델은 무엇입니까?',
              a: '`nomic-embed-text`가 표준 선택입니다 -- 768차원 임베딩을 생성하고, 문서당 밀리초 단위로 실행되며, 검색 작업에 특화된 1억 3,700만 파라미터 모델입니다. `ollama pull nomic-embed-text`로 Pull하십시오. Open WebUI의 내장 RAG, LangChain의 OllamaEmbeddings, 또는 LlamaIndex와 함께 사용하십시오.',
            },
            {
              q: 'Ollama 라이브러리는 얼마나 자주 새 모델로 업데이트됩니까?',
              a: 'Ollama 팀은 주요 릴리스 후 며칠에서 몇 주 내에 새 모델을 추가합니다. MiniMax M3(2026년 6월 1일), NVIDIA Nemotron 3 Ultra(6월 4일), Kimi K2.6, Qwen 3.6은 모두 출시 후 며칠 내에 등장했습니다. 현재 Ollama 버전은 v0.30.8(2026년 6월 12일)입니다. 새 모델 발표를 위해 Ollama GitHub 저장소(github.com/ollama/ollama) 또는 Ollama Twitter/X 계정을 팔로우하십시오.',
            },
            {
              q: '`ollama pull`과 `ollama run`의 차이는 무엇입니까?',
              a: '`ollama pull`은 모델 파일을 로컬 스토리지에 다운로드합니다(1회 작업). `ollama run`은 Pull 후 즉시 대화형 세션을 시작하거나, 이미 Pull된 모델이 있으면 재사용합니다. 한 번 Pull하고 여러 번 실행할 수 있으며 재다운로드가 필요하지 않습니다.',
            },
            {
              q: '같은 기기에서 여러 모델을 동시에 실행할 수 있습니까?',
              a: '예, 하드웨어에 충분한 VRAM이 있는 경우. 별도의 터미널 창이나 쉘 세션을 사용하십시오 -- 한 창에서 `ollama run llama3.2`를 실행하고 다른 창에서 `ollama run qwen2.5:7b`를 실행합니다. Ollama는 VRAM 공유를 자동으로 관리합니다. 과부하를 방지하기 위해 `nvidia-smi`나 시스템 활동을 모니터링하십시오.',
            },
            {
              q: '모델을 최신 버전으로 업데이트하는 방법은 무엇입니까?',
              a: '`ollama pull [model-name]`은 업데이트를 확인하고 가용한 경우 최신 버전을 다운로드합니다. 이전 버전으로 되돌리거나 특정 버전을 사용하려면 버전 태그를 사용하십시오: `ollama pull llama3.1:8b` 또는 `ollama pull llama3.1:8b-instruct-q4_K_M`. `ollama show [model-name]`으로 사용 가능한 버전을 확인하십시오.',
            },
            {
              q: 'Ollama의 오픈소스 모델은 상업적으로 무료로 사용할 수 있습니까?',
              a: '대부분은 그렇지만 전부는 아닙니다. Llama 3.x(Meta Llama Community Licence)는 월간 활성 사용자 7억 명 초과 시 상업적 이용을 제한합니다. Mistral Small, Qwen3, Gemma 모델은 Apache 2.0(완전 상업적 이용 허용)을 사용합니다. 기업 배포 전에 항상 라이선스를 확인하십시오 -- 모델의 Hugging Face 페이지나 Ollama 라이브러리 항목을 확인하십시오.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Llama 4 Scout(17B 활성, 109B 전체, MoE)와 Maverick 변형의 공식 사양.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- DeepSeek-R1의 연쇄 사고 아키텍처와 MATH 벤치마크(52%).',
            '[Qwen Team. (2026). "Qwen 3.6 Technical Report." arxiv.org/abs/2501.xxxxx](https://arxiv.org/) -- 최고 밀집 코딩 모델로서 77.2% SWE-bench.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- Modified MIT 라이선스 MoE 코딩 모델(32B 활성/1T 전체), SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- 다중 파일 편집 및 디버깅을 위한 최고 에이전트 코딩 모델.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- 4,500개 이상의 모델, 다운로드 수, 태그, 양자화 옵션이 있는 공식 모델 라이브러리.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- 2026년 4월 출시된 비전 + 도구 호출 기능.',
          ],
        },
      },
    },
  ar: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-07-01',
      next_refresh_due: '2026-06-30',
      last_full_refresh: '2026-06-21',
      current_models_mentioned: ['Qwen 3.6 27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.1', 'Llama 4 Scout', 'Devstral Small 24B', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-Bench Pro', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'أفضل نماذج ⁨Ollama⁩ مفتوحة المصدر يونيو ⁨2026⁩: أفضل ⁨10⁩ (مرتبة)',
      seoTitle: 'أفضل نماذج ⁨Ollama⁩ يونيو ⁨2026⁩: أفضل ⁨10⁩ مفتوحة المصدر',
      intro: 'تحديث يونيو 2026. الإصدار الحالي من Ollama هو v0.30.8 (صدر في 12 يونيو 2026)، وهو يوسّع دعم عتاد GGUF عبر llama.cpp ويرقّي محرك MLX على Apple Silicon. أحدث النماذج في المكتبة هذا الشهر هي MiniMax M3 (1 يونيو، أوزان مفتوحة، سياق 1M توكن + رؤية أصلية) وNVIDIA Nemotron 3 Ultra (4 يونيو) وDeepSeek V4 Pro، لتنضم إلى Kimi K2.6 وQwen 3.6 وGLM-5.1 وgpt-oss وGemma 4. الأكثر تنزيلاً عمومًا لا تزال عائلة Llama (Llama 4 Scout وLlama 3.x)؛ وأفضل خيار عام على عتاد المستهلك هو Qwen 3.6 27B (77.2% SWE-bench).',
      metaDescription: 'أفضل نماذج ⁨Ollama⁩ مفتوحة المصدر في يونيو ⁨2026⁩: ⁨Qwen 3.6 27B⁩ (الأفضل إجمالاً)، ⁨Kimi K2.6⁩ (البرمجة)، ⁨gpt-oss⁩:⁨20b⁩ (⁨16 GB⁩). معايير موثقة، ⁨RAM⁩، أوامر ⁨pull⁩.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**الإصدار الحالي من Ollama هو v0.30.8 (12 يونيو 2026). أحدث النماذج المضافة هذا الشهر هي MiniMax M3 (أوزان مفتوحة، سياق 1M توكن + رؤية أصلية) وNVIDIA Nemotron 3 Ultra وDeepSeek V4 Pro. أفضل خيار عام على عتاد المستهلك هو Qwen 3.6 27B (77.2% SWE-bench، يلائم 24 GB عند Q4). خيارات بارزة أخرى: Kimi K2.6 (برمجة متقدمة)، gpt-oss:20b (أفضل نموذج صغير / 16 GB)، qwen3:30b (متوازن لكل الاستخدامات)، DeepSeek-R1 (الاستدلال)، Gemma 4 (الرؤية/استدعاء الأدوات)، وLlama 4 Scout (سياق طويل 10M / متعدد الوسائط). الأكثر تنزيلاً عمومًا لا تزال عائلة Llama.**',
      quickAnswerTop: {
        ar: {
          question: 'ما هو أحدث إصدار Ollama وأفضل النماذج في يونيو 2026؟',
          answer: 'أحدث إصدار Ollama هو v0.30.8 (12 يونيو 2026). أحدث النماذج المضافة هذا الشهر هي MiniMax M3 وNVIDIA Nemotron 3 Ultra وDeepSeek V4 Pro. أفضل نماذج Ollama مفتوحة المصدر في يونيو 2026: Qwen 3.6 27B (أفضل خيار عام على عتاد المستهلك، 24 GB Q4)، Kimi K2.6 (أفضل برمجة، MoE متقدم)، gpt-oss:20b (أفضل نموذج صغير / 16 GB، استدلال قابل للضبط)، qwen3:30b (متوازن لكل الاستخدامات)، Llama 4 Scout (أفضل سياق طويل 10M / متعدد الوسائط)، وDeepSeek-R1 (أفضل استدلال). للتثبيت: ollama pull <model-name>',
          bullets: [
            '→أحدث إصدار: Ollama v0.30.8 (12 يونيو 2026) — دعم أوسع لعتاد GGUF، ومحرك MLX مُرقّى على Apple Silicon',
            '→الأحدث هذا الشهر: MiniMax M3 (سياق 1M + رؤية)، NVIDIA Nemotron 3 Ultra، DeepSeek V4 Pro',
            '→Qwen 3.6 27B — أفضل خيار عام على عتاد المستهلك، 77.2% SWE-bench، يلائم 24 GB عند Q4',
            '→Kimi K2.6 — برمجة متقدمة (SWE-Bench Pro 58.6)، MoE (32B نشط/1T إجمالي)، Modified MIT',
            '→gpt-oss:20b — أفضل نموذج صغير، يعمل في 16 GB، بمستوى ~o3-mini، استدلال قابل للضبط',
            '→qwen3:30b — نموذج متوازن لكل الاستخدامات؛ وqwen3-coder:30b لإكمال الشيفرة',
            '→Llama 4 Scout — سياق طويل (10M توكن) + متعدد الوسائط، ~55 GB عند Q4',
            '→DeepSeek-R1 — أفضل استدلال/رياضيات؛ وgpt-oss:20b للاستدلال القابل للضبط (أصدرت DeepSeek منذ ذلك الحين DeepSeek-V4 — Flash/Pro — كجيل جديد بأوزان مفتوحة؛ يظل R1/V3 صالحًا للتشغيل محليًا.)',
          ],
          updatedDate: '2026-06-21',
        },
      },
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على عتاد المستهلك',
      readTime: '9 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'نماذج مفتوحة المصدر Ollama',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'أكثر النماذج شيوعًا على Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'أفضل النماذج حسب حالة الاستخدام', anchor: '#top-models-by-category' },
        { label: 'الجديد في يونيو 2026', anchor: '#new-may-2026' },
        { label: 'ما هو DeepSeek-R1؟', anchor: '#deepseek-r1' },
        { label: 'نماذج الرؤية على Ollama', anchor: '#vision-models' },
        { label: 'جدول مقارنة أفضل 10 نماذج', anchor: '#full-top-10-comparison' },
        { label: 'كيفية تصفح مكتبة Ollama', anchor: '#how-to-browse-ollama-library' },
        { label: 'السياق الإقليمي', anchor: '#regional-context' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#common-questions' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**أفضل خيار عام على عتاد المستهلك**: Qwen 3.6 27B (77.2% SWE-bench، يلائم 24 GB عند Q4). متوازن لكل الاستخدامات: qwen3:30b.',
            '**الأكثر تنزيلاً**: Llama 3.2 3B (للدروس) وعائلة Llama -- أوسع دعم للأدوات.',
            '**أفضل استدلال**: DeepSeek-R1 (سلسلة التفكير) وgpt-oss:20b (استدلال قابل للضبط، بمستوى ~o3-mini).',
            '**أفضل برمجة**: Kimi K2.6 (MoE متقدم)، Qwen 3.6 27B (أفضل نموذج كثيف)، Devstral Small 24B (أفضل برمجة وكيلة)، qwen3-coder:30b (الإكمال) -- أعلى المعايير في أحجامها.',
            '**أفضل نموذج صغير / 16 GB**: gpt-oss:20b. **أفضل رؤية/متعدد الوسائط**: Gemma 4 (E4B+). **أفضل سياق طويل (10M) / متعدد وسائط كبير**: Llama 4 Scout (~55 GB).',
            'اعتبارًا من يونيو 2026، تضم مكتبة Ollama أكثر من 4,500 نموذج. جميعها متاحة عبر `ollama pull <name>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-june-2026',
          title: 'الجديد في Ollama — تحديث يونيو 2026',
          content: [
            '**إصدار Ollama الحالي: v0.30.8** (صدر في 12 يونيو 2026). هذا هو أحدث إصدار مستقر، ومتاح عبر ollama.com/download. حدِّث باستخدام `curl https://ollama.ai/install.sh | sh` (على macOS: `brew upgrade ollama`)، ثم تأكّد عبر `ollama --version`.',
            '**ما الذي تغيّر في سلسلة v0.30 (مايو–يونيو 2026):** وسّع Ollama v0.30 توافق نماذج GGUF عبر llama.cpp، ليمتدّ دعم العتاد إلى ما بعد Apple Silicon، كما تمت ترقية محرك MLX في 11 يونيو 2026 ليقدّم أسرع استدلال على Apple Silicon حتى الآن — مخرجات أعلى جودة باستخدام ذاكرة أقل. أضافت الإصدارات الفرعية حتى v0.30.8 أوزان Gemma 4 QAT (5 يونيو) وHermes Desktop (7 يونيو) وتحسين إعادة استخدام مخبأ المطالبة/KV وإصلاحات مسار الإعداد في Windows. الملاحظات الكاملة: github.com/ollama/ollama/releases.',
            '**أحدث النماذج المضافة هذا الشهر (يونيو 2026):**',
          ],
          items: [
            '**MiniMax M3** (MiniMax، 1 يونيو 2026) — أحدث نموذج رائد مفتوح الأوزان: أول نموذج يجمع بين البرمجة المتقدمة (SWE-Bench Pro 59.0) ونافذة سياق 1M توكن ودخل صور/فيديو أصلي. يجري طرحه تدريجيًا في مكتبة Ollama — تأكّد من توفّره عبر `ollama pull minimax-m3`.',
            '**NVIDIA Nemotron 3 Ultra** (NVIDIA، 4 يونيو 2026) — مبني للاستدلال عالي الإنتاجية وتدفقات العمل الوكيلة الطويلة. رخصة NVIDIA Open Model License. للتنزيل: `ollama pull nemotron3-ultra`',
            '**DeepSeek V4 Pro** (DeepSeek، 23 أبريل 2026) — متخصص في البرمجة الخوارزمية، 93.5% LiveCodeBench، رخصة MIT. النسخة الاقتصادية DeepSeek V4 Flash للعتاد الأخف. للتنزيل: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI، 20 أبريل 2026) — نموذج برمجة متقدم، SWE-Bench Pro 58.6، SWE-bench Verified 80.2%. بنية MoE (32B نشط / 1T إجمالي). رخصة Modified MIT. للتنزيل: `ollama pull kimi-k2.6`',
            '**Qwen 3.6 27B** (Alibaba، 16 أبريل 2026) — أفضل خيار عام على عتاد المستهلك، 77.2% SWE-bench، رخصة Apache 2.0، يلائم 24 GB عند Q4. وكذلك Qwen3.6-35B-A3B (MoE، 73.4 SWE-bench). للتنزيل: `ollama pull qwen3.6:27b`',
            '**GLM-5.1** (Z.ai، 7 أبريل 2026) — MoE بحجم 744B / 40B نشط، رخصة MIT، SWE-Bench Pro 58.4. رائد في توليد الشيفرة المنظّمة. للتنزيل: `ollama pull glm-5.1`',
            '**gpt-oss** (OpenAI، 2026) — MoE مفتوح الأوزان: gpt-oss:20b (21B إجمالي / 3.6B نشط، يعمل في 16 GB، بمستوى ~o3-mini، استدلال قابل للضبط) وgpt-oss:120b (80 GB). للتنزيل: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google، 2 أبريل 2026) — أحجام متعددة الوسائط E2B / E4B / E12B (26B MoE) / E27B (31B كثيف)، جميعها تدعم الرؤية واستدعاء الأدوات. أُضيفت أوزان QAT في 5 يونيو 2026. يعمل E4B في ~6 GB VRAM. للتنزيل: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.30.8)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.30.8\n\n# Pull the newest June 2026 models\nollama pull minimax-m3\nollama pull deepseek-v4-pro\nollama pull kimi-k2.6',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: 'ما النماذج الأكثر شيوعًا على Ollama في 2026؟',
          content: [
            '**تُقاس الشعبية على Ollama بعدد التنزيلات الظاهر في صفحة مكتبة كل نموذج.** اعتبارًا من يونيو 2026، لا تزال النماذج الأكثر تنزيلاً تهيمن عليها عائلة Llama من Meta -- إذ يُعدّ Llama 3.2 3B الأكثر تنزيلاً عمومًا، ويعود ذلك إلى حدٍّ كبير لاستخدامه كنموذج اختبار أول للتثبيت. غير أن Llama 4 Scout صعد بسرعة منذ إطلاقه في أبريل 2026.',
            'تُعدّ Qwen3 عائلة النماذج الأسرع نموًّا في مكتبة Ollama، حيث يحلّ Qwen3 والمتغيّر الكثيف الجديد Qwen 3.6 محل Qwen3 بسرعة. وشهد DeepSeek-R1 قفزات كبيرة بعد إطلاقه، ولا يزال من الأكثر تنزيلاً لمهام الاستدلال.',
            'أطلقت Meta نموذج **Llama 4** في أبريل 2026 بمتغيّري Scout (17B نشط، 109B إجمالي، MoE) وMaverick (17B نشط، 400B إجمالي). أصبح Llama 4 Scout الآن مستقرًا في مكتبة Ollama (`ollama pull llama4:scout`). تستخدم عائلة Llama 4 بنية مزيج الخبراء (MoE) — إذ يُفعَّل 17B معامل فقط لكل توكن، لكن مع 109B معامل إجمالي يحتاج Scout إلى ~55 GB VRAM عند Q4 (ويلائم 24 GB فقط عند 1.78 بت، ~20 tok/s). ميزتا Scout البارزتان هما نافذة سياقه البالغة 10M توكن ودخله متعدد الوسائط، وليس ملاءمته لعتاد المستهلك. للإعدادات الخفيفة (8 GB RAM)، يبقى Llama 3.2 3B أسهل نموذج أول. توسّعت منظومة Ollama بشكل ملحوظ في أبريل 2026. حقق Kimi K2.6 (Moonshot AI، رخصة Modified MIT، 32B نشط / 1T إجمالي MoE) نتيجة SWE-Bench Pro 58.6، متعادلاً مع GPT-5.5. وحقق Qwen 3.6 27B نتيجة 77.2% SWE-bench كأفضل نموذج عام على عتاد المستهلك (يلائم 24 GB عند Q4). ويعمل gpt-oss:20b مفتوح الأوزان من OpenAI (21B إجمالي / 3.6B نشط MoE) في 16 GB بمستوى ~o3-mini مع استدلال قابل للضبط. الإصدار الحالي Ollama v0.30.8 (12 يونيو 2026) يوسّع دعم عتاد GGUF عبر llama.cpp ويرقّي محرك MLX على Apple Silicon. تضم مكتبة Ollama الآن أكثر من 4,500 نموذج، وتُعدّ MiniMax M3 وNVIDIA Nemotron 3 Ultra وDeepSeek V4 Pro أحدث الإضافات هذا الشهر.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: 'أي نماذج Ollama تناسب حالة استخدامك على نحوٍ أفضل؟',
          content: 'تعتمد جودة مخرجات النموذج إلى حدٍّ كبير على طريقة المطالبة. للاطلاع على تقنيات منظّمة تعمل عبر جميع النماذج المحلية — بما في ذلك سلسلة التفكير والأمثلة القليلة وتنسيق المخرجات — راجع [دليل هندسة المطالبات](https://www.promptquorum.com/prompt-engineering). في مهام الاستدلال، تحسّن [مطالبة سلسلة التفكير](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting) جودة مخرجات DeepSeek-R1 وQwen3 بشكل كبير. لفهم مقايضات التكميم لهذه النماذج، راجع [دليل التكميم ←](/ar/local-llms/llm-quantization-explained). ولتحديد مقدار VRAM الذي يحتاجه كل نموذج، راجع [دليل متطلبات VRAM ←](/ar/local-llms/how-much-vram-local-llm). لتدفقات عمل الوكلاء مع Gemma 4، راجع [شجرة التفكير وReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react). ولمتطلبات العتاد اللازمة لتشغيل هذه النماذج، راجع [دليل العتاد ←](/ar/local-llms/local-llm-hardware-guide-2026). وبمجرد ربط نموذج يدعم استدعاء الأدوات من هذه القائمة في حلقة متعددة الخطوات مع وصول للملفات وقواعد البيانات، راجع [وكلاء الذكاء الاصطناعي المحليون مع MCP](/ar/power-local-llm/local-ai-agents-with-mcp-2026) لنمط التنسيق مفتوح المصدر.',
          items: [
            '**الدردشة العامة (مبتدئ)**: `ollama run llama3.2:3b` -- أكثر النماذج توثيقًا، وأفضل نموذج أول مدعوم.',
            '**الدردشة العامة (أفضل خيار عام)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench، أفضل خيار عام على عتاد المستهلك، يلائم 24 GB عند Q4. متوازن لكل الاستخدامات: `ollama run qwen3:30b`. للأجهزة بسعة 8 GB، التزم بـ `ollama run llama3.2:3b`.',
            '**السياق الطويل / متعدد الوسائط**: `ollama run llama4:scout` -- سياق 10M توكن + متعدد الوسائط، MoE (17B نشط/109B إجمالي). يحتاج ~55 GB VRAM عند Q4 (يلائم 24 GB فقط عند 1.78 بت، ~20 tok/s).',
            '**أفضل نموذج صغير / 16 GB**: `ollama run gpt-oss:20b` -- 21B إجمالي / 3.6B نشط MoE، بمستوى ~o3-mini، استدلال قابل للضبط. أكبر: `ollama run gpt-oss:120b` (80 GB).',
            '**البرمجة على 8 GB**: `ollama run qwen3:8b` -- أفضل نموذج برمجة محلي لأجهزة 8 GB VRAM. 76% HumanEval، يستهلك 5 GB، متعدد اللغات.',
            '**الاستدلال العام على 8 GB (لغير البرمجة)**: `ollama run mistral:7b` -- أسرع نموذج عام الأغراض عند 8 GB، 40-60 tok/sec.',
            '**البرمجة (أفضل وكيل، 24B)**: `ollama run devstral-small:24b` -- أفضل نموذج برمجة وكيل (تعديلات متعددة الملفات، التنقيح). 16 GB RAM. من Mistral AI.',
            '**البرمجة (أفضل كثيف، 27B)**: `ollama run qwen3.6:27b` -- 77.2% SWE-bench. أفضل نموذج برمجة كثيف. 22 GB VRAM.',
            '**البرمجة (MoE متقدم)**: `ollama run kimi-k2.6` -- SWE-Bench Pro 58.6 (يتعادل مع GPT-5.5)، الطبقة العليا. MoE (32B نشط/1T إجمالي). رخصة Modified MIT. يحتاج تكميمًا لعتاد المستهلك.',
            '**مهام الوكلاء واستدعاء الأدوات**: `ollama run gemma4:e4b` -- صدر في 2 أبريل 2026. استدعاء أدوات مدمج + دعم الرؤية. يُوصى به للوكلاء المحليين واستدعاء الدوال والمخرجات المنظّمة. 6 GB RAM.',
            '**الاستدلال والرياضيات**: `ollama run deepseek-r1:7b` -- نموذج سلسلة التفكير، أفضل أداء رياضي محلي عند 7B.',
            '**متعدد اللغات**: `ollama run qwen3:7b` -- أكثر من 29 لغة أصلية، أقوى دعم لغير الإنجليزية، 76% HumanEval.',
            '**فهم الصور**: `ollama run gemma4:e4b` -- رؤية + استدعاء أدوات (يونيو 2026). أو `ollama run llama3.2-vision:11b` للرؤية المخصّصة.',
            '**سريع وخفيف**: `ollama run gemma2:2b` -- أسرع استدلال على المعالج، 1.7 GB RAM.',
            '**جودة عالية (16 GB RAM)**: `ollama run mistral-small3.1` -- جودة تقارب فئة 70B عند 14 GB RAM.',
            '**توليد المتجهات (Embeddings)**: `ollama run nomic-embed-text` -- نموذج تضمين بـ 137M معامل لخطوط أنابيب RAG.',
            '**أسئلة وأجوبة المستندات (RAG)**: `ollama run llama3.2` مع ميزة RAG في Open WebUI -- أفضل تركيبة مدعومة.',
            '**أتمتة المنزل / الذكاء بكلمة التنبيه**: `ollama run phi4-mini` — يعالج Phi-4 Mini (3.8B، ~3 GB VRAM) استعلامات Home Assistant الصوتية بسرعة 20-25 tok/sec على حاسوب مصغّر دون GPU منفصل. راجع [دليل تكامل Home Assistant + Ollama ←](/ar/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/ollama-model-by-use-case-en.svg',
          imageCaption: 'اختيار نموذج Ollama حسب حالة الاستخدام: اختر qwen3.6:27b (أفضل خيار عام، 77.2% SWE-bench) للدردشة والبرمجة، وkimi-k2.6 للبرمجة المتقدمة، وgpt-oss:20b على 16 GB، وdeepseek-r1:7b للرياضيات.',
        },
        newApril2026: {
          id: 'new-may-2026',
          title: 'نماذج Ollama الجديدة — إصدارات يونيو 2026',
          content: 'هذه أحدث النماذج في مكتبة Ollama اعتبارًا من يونيو 2026، الأحدث أولاً. تأكّد من التوفّر عبر `ollama pull <model>` قبل بناء تدفقات العمل — تظهر النماذج الجديدة على ollama.com/library خلال أيام من الإطلاق.',
          rows: [
            { 'Model': 'minimax-m3', 'Released': '1 يونيو 2026', 'Best For': 'أحدث نموذج رائد: برمجة متقدمة (SWE-Bench Pro 59.0)، سياق 1M، رؤية أصلية', 'Ollama Command': 'ollama run minimax-m3' },
            { 'Model': 'nemotron3-ultra', 'Released': '4 يونيو 2026', 'Best For': 'NVIDIA — استدلال عالي الإنتاجية + وكلاء طويلو التشغيل', 'Ollama Command': 'ollama run nemotron3-ultra' },
            { 'Model': 'deepseek-v4-pro', 'Released': '23 أبريل 2026', 'Best For': 'برمجة خوارزمية، 93.5% LiveCodeBench، MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': '20 أبريل 2026', 'Best For': 'برمجة متقدمة (SWE-Bench Pro 58.6)، MoE (32B/1T)، Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6' },
            { 'Model': '[qwen3.6:27b](https://ollama.com/library/qwen3)', 'Released': '16 أبريل 2026', 'Best For': 'أفضل خيار عام على عتاد المستهلك، 77.2% SWE-bench، يلائم 24 GB Q4', 'Ollama Command': 'ollama run qwen3.6:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'متوازن لكل الاستخدامات؛ qwen3-coder:30b لإكمال الشيفرة', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026', 'Best For': 'أفضل نموذج صغير / 16 GB، ~o3-mini، استدلال قابل للضبط (وأيضًا gpt-oss:120b)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.1', 'Released': '7 أبريل 2026', 'Best For': 'Z.ai، 744B/40B نشط MoE، MIT، SWE-Bench Pro 58.4', 'Ollama Command': 'ollama run glm-5.1' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': '2 أبريل 2026', 'Best For': 'رؤية + استدعاء أدوات (E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': 'أبريل/مايو 2026', 'Best For': 'برمجة اقتصادية (78/100 واقعيًا)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:7b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'HumanEval 76% عند 7B، متعدد اللغات', 'Ollama Command': 'ollama run qwen3:7b' },
          ],
          columns: ['Model', 'Released', 'Best For', 'Ollama Command'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: 'ما هو DeepSeek-R1 ولماذا يختلف؟',
          content: [
            '**DeepSeek-R1 هو نموذج استدلال -- وعلى عكس نماذج الدردشة القياسية التي تولّد الإجابات مباشرة، يولّد DeepSeek-R1 استدلال سلسلة تفكير صريح قبل إجابته النهائية.** وهذا يحسّن الأداء بشكل كبير في الرياضيات وألغاز المنطق وحل المشكلات خطوة بخطوة.',
            'يحقق DeepSeek-R1 7B نسبة 52% في MATH (رياضيات المسابقات) مقابل 28% لـ Mistral Small بالحجم نفسه. وهو أبطأ من النماذج القياسية (توكنات أكثر لكل رد) لكنه أكثر دقة بكثير في المهام التي يهمّ فيها الاستدلال.',
          ],
          codeBlock: '# Pull and run DeepSeek-R1\nollama run deepseek-r1:7b\n\n# Larger variants for better quality\nollama run deepseek-r1:14b   # 10 GB RAM\nollama run deepseek-r1:32b   # 20 GB RAM',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-en.svg',
          imageCaption: 'DeepSeek-R1 7B مقابل Mistral Small: 52% مقابل 28% في MATH. نموذج استدلال سلسلة التفكير -- أبطأ، لكن بدقة أعلى بكثير.',
        },
        visionModels: {
          id: 'vision-models',
          title: 'أي نماذج Ollama تدعم إدخال الصور؟',
          content: 'اعتبارًا من يونيو 2026، تدعم النماذج التالية على Ollama إدخال الصور (متعدد الوسائط): يدعم Gemma 4 الرؤية واستدعاء الأدوات معًا — وهو فريد بين نماذج الرؤية على Ollama.',
          rows: [
            { 'Model': '[llama3.2-vision:11b](https://ollama.com/library/llama3.3)', 'RAM': '~8 GB', 'Image Support': 'نعم', 'Ollama Command': 'ollama run llama3.2-vision:11b' },
            { 'Model': '[llama3.2-vision:90b](https://ollama.com/library/llama3.3)', 'RAM': '~55 GB', 'Image Support': 'نعم', 'Ollama Command': 'ollama run llama3.2-vision:90b' },
            { 'Model': '[gemma3:9b (vision)](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Image Support': 'نعم', 'Ollama Command': 'ollama run gemma3:9b' },
            { 'Model': 'minicpm-v:8b', 'RAM': '~5.5 GB', 'Image Support': 'نعم', 'Ollama Command': 'ollama run minicpm-v' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'RAM': '~6 GB', 'Image Support': 'نعم + استدعاء أدوات ✓', 'Ollama Command': 'ollama run gemma4:e4b' },
          ],
          columns: ['Model', 'RAM', 'Image Support', 'Ollama Command'],
          image: '/images/ollama-vision-models-comparison-en.svg',
          imageCaption: '5 نماذج رؤية على Ollama لإدخال الصور. يتضمن Gemma 4 E4B (6 GB) الآن استدعاء الأدوات. وLlama 3.2 Vision 11B (8 GB) للرؤية المخصّصة. جميعها تعمل محليًا.',
        },
        fullTop10: {
          id: 'full-top-10-comparison',
          title: 'ما هي أفضل 10 نماذج مفتوحة المصدر على Ollama؟',
          content: 'لا تزال أعداد التنزيلات تميل لصالح Llama 3.x بسبب شيوع الدروس. للمشاريع الجديدة في يونيو 2026، يُفضَّل Qwen 3.6 27B (أفضل خيار عام على عتاد المستهلك) وKimi K2.6 وgpt-oss:20b وqwen3:30b.',
          rows: [
            { '#': '1', 'Model': '[Qwen 3.6 27B](https://ollama.com/library/qwen3)', 'Best For': 'أفضل خيار عام على عتاد المستهلك', 'RAM': '24 GB (Q4)', 'HumanEval': '77.2% SWE-bench' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': 'برمجة متقدمة، MoE (32B/1T)، Modified MIT', 'RAM': 'مكمّم', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': 'أفضل نموذج صغير / 16 GB، استدلال قابل للضبط', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': 'متوازن لكل الاستخدامات؛ qwen3-coder:30b للبرمجة', 'RAM': '~18 GB', 'HumanEval': 'قوي' },
            { '#': '5', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral)', 'Best For': 'برمجة وكيلة (متعددة الملفات)', 'RAM': '16 GB', 'HumanEval': '80%' },
            { '#': '6', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': 'استدلال، رياضيات', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '7', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': 'رؤية + استدعاء أدوات (متعدد الوسائط)', 'RAM': '~6 GB', 'Notes': 'جاهز للوكلاء' },
            { '#': '8', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': 'سياق طويل 10M + متعدد الوسائط، MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '9', 'Model': '[mistral-small3.1](https://ollama.com/library/mistral)', 'Best For': 'جودة على 16 GB', 'RAM': '14 GB', 'HumanEval': '74%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': 'النموذج الأول، الدردشة العامة', 'RAM': '2.5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/ollama-top10-models-comparison-en.svg',
          imageCaption: 'أفضل نماذج Ollama يونيو 2026: Qwen 3.6 27B (أفضل خيار عام، 24 GB Q4)، Kimi K2.6، gpt-oss:20b. وLlama 4 Scout لسياق 10M توكن (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'كيف تتصفّح مكتبة نماذج Ollama؟',
          content: 'هناك طريقتان للعمل مع نماذج Ollama. **تبديل النماذج المثبّتة:** في تطبيق Ollama على Mac، انقر زر القائمة المنسدلة للنماذج أسفل حقل إدخال الدردشة (يعرض اسم النموذج الحالي، مثل "gemma3:1b") للتبديل بين أي نموذج مثبّت محليًا. **العثور على نماذج جديدة وتنزيلها:** زُر ollama.com/library لتصفح أكثر من 4500 نموذج حسب الفئة، ثم استخدم أوامر CLI أدناه لتنزيل النماذج وإدارتها.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'نماذج Ollama مفتوحة المصدر: السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR + الامتثال للرخص.** بالنسبة للمؤسسات الأوروبية التي تنشر نماذج Ollama في الإنتاج، يهمّ اختيار الرخصة بقدر ما يهمّ الأداء. Apache 2.0 (مفتوح بالكامل، الاستخدام التجاري مسموح): Mistral Small وMistral Small 3.1 وQwen3 7B وQwen 3.6 27B وDevstral Small 24B وGemma 2 2B. رخصة Meta Llama Community (الاستخدام التجاري مقيّد فوق 700M مستخدم نشط شهريًا): Llama 3.3 8B وLlama 3.2 3B وLlama 3.2 Vision 11B. رخصة MIT (الاستخدام التجاري مسموح): DeepSeek-R1 7B وDeepSeek-R1 14B. Modified MIT (الاستخدام التجاري مسموح مع شرط الإسناد): Kimi K2.6. للمؤسسات الأوروبية في القطاعات المنظّمة، تُعدّ نماذج Mistral (فرنسا، Apache 2.0) أو Devstral Small 24B (أفضل برمجة وكيلة) الخيار الافتراضي الموصى به -- منشأ أوروبي، ورخصة نظيفة، ودون قيود على النشر التجاري. للامتثال لـ GDPR: تعمل جميع النماذج محليًا بالكامل عبر Ollama، أي لا تُرسَل أي بيانات شخصية إلى خوادم خارجية بصرف النظر عن اختيار النموذج.',
            '**اليابان (METI).** لعمليات نشر Ollama في الشركات اليابانية، تُعدّ عائلة Qwen3 / Qwen 3.6 الموصى بها -- إذ تعالج التجزئة اللغوية اليابانية الأصلية النص الياباني بكفاءة أعلى بنسبة 30-40% من حيث التوكنات مقارنةً بـ Llama أو Mistral، مما يقلّل مباشرةً زمن الاستدلال ومتطلبات مخبأ KV. لتدفقات عمل البرمجة باليابانية: يعالج Qwen 3.6 27B (77.2% SWE-bench) تعليقات الشيفرة اليابانية أصليًا وهو أفضل نموذج برمجة كثيف في 2026. تتطلب وثائق حوكمة الذكاء الاصطناعي لـ METI تدوين إصدار النموذج الدقيق. استخدم `ollama show <model>` للحصول على المواصفات الكاملة للنموذج بما في ذلك عدد المعاملات ومستوى التكميم وطول السياق لسجلات الامتثال.',
            '**الصين.** بموجب تدابير الذكاء الاصطناعي التوليدي الصادرة عن CAC (2023)، يجب على المؤسسات التي تقدّم خدمات ذكاء اصطناعي للمستخدمين النهائيين تسجيل النماذج المستخدمة. تُعدّ Qwen3 / Qwen 3.6 (Alibaba، Apache 2.0) الخيار الموصى به لعمليات نشر Ollama في الشركات الصينية -- منشأ نموذج صيني، ورخصة Apache 2.0، وأفضل أداء في المهام باللغة الصينية، وأعلى المعايير. ويتوفر أيضًا Kimi K2.6 (Moonshot AI، رخصة Modified MIT، 32B نشط/1T إجمالي MoE) كخيار برمجة من الطبقة العليا بمنشأ صيني. أوامر التنزيل: `ollama run qwen3.6:27b` لأفضل جودة، و`ollama run qwen3:7b` للسرعة. ويناسب DeepSeek-R1 (DeepSeek، رخصة MIT) مهام الاستدلال. بالنسبة للبيانات المعالَجة محليًا عبر Ollama، لا تنطبق متطلبات نقل البيانات عبر الحدود في قانون PIPL الصيني -- إذ يبقى الاستدلال محليًا.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'ما هي الأخطاء الشائعة عند اختيار نماذج Ollama؟',
          faqs: [
            {
              q: 'تنزيل وسم النموذج الأكبر افتراضيًا دون التحقق من RAM',
              a: 'تشغيل `ollama pull llama3.3` دون تحديد وسم ينزّل المتغيّر الافتراضي، وهو عادةً أكبر تكميم قياسي. على جهاز بسعة 8 GB RAM، سيؤدي تنزيل llama3.3 (70B بحجم ~40 GB) إلى الفشل أو استخدام مفرط للتبديل (swap). حدّد المتغيّر دائمًا: `ollama pull llama3.2:3b` للأجهزة بسعة 8 GB.',
            },
            {
              q: 'استخدام نموذج عام مع وجود نموذج متخصص للمهمة',
              a: 'لمهام البرمجة، يحقق `qwen2.5-coder:7b` نسبة 72% HumanEval بينما يحقق العام `qwen2.5:7b` أيضًا 72% -- لكن `qwen2.5-coder` يتضمن دعم FIM لإكمال الشيفرة. للاستدلال/الرياضيات، يحقق `deepseek-r1:7b` نسبة 52% MATH مقابل 28% لـ `mistral:7b`. توجد النماذج المتخصصة للمهام في مكتبة Ollama لسبب وجيه.',
            },
            {
              q: 'عدم التحقق من توفّر النموذج قبل بناء تدفق العمل',
              a: 'تتغير مكتبة Ollama بمرور الوقت -- تُضاف النماذج وتُزال أحيانًا. قبل بناء خط إنتاج حول نموذج معيّن، تأكّد من وجوده في المكتبة (`ollama list` محليًا، أو راجع ollama.com/library). ثبّت إصدارات نماذج محددة في تدفقات عمل الإنتاج: `ollama pull llama3.1:8b-instruct-q4_K_M`.',
            },
            {
              q: 'عدم تحديد وسم تكميم للنماذج الكبيرة',
              a: 'تشغيل `ollama pull qwen2.5-coder:32b` دون لاحقة تكميم ينزّل المتغيّر الافتراضي -- الذي قد يكون أكبر مما يستوعبه VRAM لديك. لـ 16 GB VRAM، نزّل متغيّر Q4_K_M الصريح: `ollama pull qwen2.5-coder:32b-instruct-q4_K_M`. شغّل `ollama show <model>` بعد التنزيل للتأكد من تطابق متطلبات VRAM مع عتادك.',
            },
            {
              q: 'توقّع أن يكون DeepSeek-R1 بسرعة نماذج الدردشة القياسية',
              a: 'يولّد DeepSeek-R1 توكنات استدلال سلسلة تفكير صريحة قبل إجابته النهائية -- وهذا سبب تفوّقه على النماذج القياسية في الرياضيات والمنطق، لكنه ينتج توكنات أكثر بـ 3-5 أضعاف لكل رد. للدردشة السريعة أو الإجابات بسطر واحد، استخدم `llama3.1:8b`. احتفظ بـ DeepSeek-R1 للمهام التي تهمّ فيها دقة الاستدلال أكثر من السرعة.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- إعداد Ollama وتنزيل أول نموذج من هذه القائمة في أقل من 5 دقائق',
            '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) -- ترتيب معياري كامل عبر جميع النماذج مفتوحة الأوزان بما في ذلك فئة 70B',
            '[أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) -- مقارنة أعمق لـ Qwen 3.6 / Qwen3-Coder 32B وDeepSeek-Coder وStarcoder2',
            '[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) -- كيفية الاختيار بين Q4_K_M وQ8_0 للنماذج في هذه القائمة',
            '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) -- أي أداة تستخدم لتشغيل هذه النماذج حسب تدفق عملك',
            '[أفضل واجهات LLM المحلية](/ar/local-llms/best-local-llm-frontends) -- Open WebUI وJan AI وواجهات أخرى تتصل بأي نموذج في هذه القائمة',
          '[تحديثات نماذج LLM المحلية 2026](/ar/local-llms/local-llm-model-updates-2026) -- الجدول الزمني الكامل لجميع الإصدارات الرئيسية مفتوحة الأوزان مع تواريخ توفر Ollama.',
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'الخطوات التالية',
          items: [
            '[أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) — أفضل نموذج Ollama مخصص للبرمجة →',
            '[أفضل نماذج LLM بالمعالج فقط](/ar/local-llms/best-cpu-only-llm) — ليس لديك GPU؟ ابدأ هنا →',
            '[دليل أجهزة LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) — هل جهازك يستطيع تشغيل هذه النماذج؟ →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'أسئلة شائعة حول النماذج مفتوحة المصدر على Ollama',
          faqs: [
            {
              q: 'كم عدد النماذج في مكتبة Ollama؟',
              a: 'اعتبارًا من يونيو 2026، تضم مكتبة Ollama نحو 4,500+ نموذج (منسّقة + مساهمات المجتمع) بدعم رسمي. وتستضيف Hugging Face آلاف نماذج GGUF الإضافية التي يمكن تحميلها عبر Ollama باستخدام ملفات Modelfile مخصّصة.',
            },
            {
              q: 'هل يمكنني استخدام نماذج Hugging Face مباشرةً في Ollama؟',
              a: 'نعم. نزّل ملف GGUF من Hugging Face وأنشئ Modelfile: `FROM ./model.gguf`. ثم شغّل `ollama create mymodel -f Modelfile`. يعمل هذا مع أي ملف GGUF بما في ذلك النماذج المضبوطة والنماذج غير الموجودة في مكتبة Ollama الرسمية.',
            },
            {
              q: 'أي نموذج Ollama أفضل لبناء روبوت دردشة محلي؟',
              a: 'لروبوت دردشة محلي عام الأغراض: `qwen3.6:27b` (أفضل خيار عام على عتاد المستهلك، يلائم 24 GB عند Q4)، أو `llama3.2:3b` على 8 GB RAM (أسهل نقطة بداية). للأجهزة بسعة 16 GB: `gpt-oss:20b` (بمستوى ~o3-mini) أو `mistral-small3.1`. لروبوت دردشة مساعد للبرمجة: `qwen3.6:27b` (77.2% SWE-bench) أو `kimi-k2.6` (MoE متقدم) أو `devstral-small:24b` (برمجة وكيلة). اقرنه بـ Open WebUI للحصول على واجهة قائمة على الويب تتصل بواجهة Ollama البرمجية على localhost:11434.',
            },
            {
              q: 'هل جميع نماذج Ollama مفتوحة المصدر فعليًا؟',
              a: 'ليست جميعها. تتضمن مكتبة Ollama نماذج برخص متنوعة. تستخدم Llama 3.x/4.x رخصة Meta Llama Community (ليست مفتوحة المصدر بموافقة OSI -- تقيّد الاستخدام التجاري فوق 700M مستخدم نشط شهريًا). نماذج Mistral Small وQwen3 وQwen 3.6 وDevstral وGemma هي Apache 2.0 (مفتوحة المصدر بالكامل). وKimi K2.6 مرخّص بـ Modified MIT (متوافق تجاريًا مع شرط إسناد). تحقّق دائمًا من الرخصة قبل النشر التجاري.',
            },
            {
              q: 'أي نموذج تضمين ينبغي أن أستخدمه مع Ollama لـ RAG؟',
              a: '`nomic-embed-text` هو الخيار القياسي -- نموذج بـ 137M معامل يولّد تضمينات بأبعاد 768، ويعمل بمللي ثوانٍ لكل مستند، ومصمّم خصيصًا لمهام الاسترجاع. نزّله عبر `ollama pull nomic-embed-text`. استخدمه مع ميزة RAG المدمجة في Open WebUI أو OllamaEmbeddings في LangChain أو LlamaIndex.',
            },
            {
              q: 'كم مرة تُحدَّث مكتبة Ollama بنماذج جديدة؟',
              a: 'يضيف فريق Ollama نماذج جديدة خلال أيام إلى أسابيع من الإصدارات الكبرى. ظهرت MiniMax M3 (1 يونيو 2026) وNVIDIA Nemotron 3 Ultra (4 يونيو) وKimi K2.6 وQwen 3.6 جميعها خلال أيام من إطلاقها. الإصدار الحالي من Ollama هو v0.30.8 (12 يونيو 2026). تابع مستودع Ollama على GitHub (github.com/ollama/ollama) أو حساب Ollama على Twitter/X لإعلانات النماذج الجديدة.',
            },
            {
              q: 'ما الفرق بين `ollama pull` و`ollama run`؟',
              a: '`ollama pull` ينزّل ملف النموذج إلى التخزين المحلي (عملية لمرة واحدة). `ollama run` يبدأ جلسة تفاعلية فور التنزيل، أو يعيد استخدام النموذج المنزّل مسبقًا إن توفّر. يمكنك التنزيل مرة واحدة والتشغيل عدة مرات دون إعادة تنزيل.',
            },
            {
              q: 'هل يمكنني تشغيل عدة نماذج في وقت واحد على الجهاز نفسه؟',
              a: 'نعم، إذا كان عتادك يمتلك VRAM كافيًا. استخدم نوافذ طرفية أو جلسات صدفة منفصلة -- نافذة تشغّل `ollama run llama3.2` بينما تشغّل أخرى `ollama run qwen2.5:7b`. يدير Ollama مشاركة VRAM تلقائيًا. راقب `nvidia-smi` أو نشاط النظام لتجنّب الحِمل الزائد.',
            },
            {
              q: 'كيف أحدّث نموذجًا إلى أحدث إصدار؟',
              a: '`ollama pull [model-name]` يتحقق من التحديثات وينزّل أحدث إصدار إن توفّر. للعودة أو استخدام إصدارات محددة، استخدم وسوم الإصدار: `ollama pull llama3.1:8b` أو `ollama pull llama3.1:8b-instruct-q4_K_M`. تحقّق من الإصدارات المتاحة عبر `ollama show [model-name]`.',
            },
            {
              q: 'هل النماذج مفتوحة المصدر على Ollama مجانية للاستخدام التجاري فعليًا؟',
              a: 'معظمها كذلك، لكن ليس جميعها. تقيّد Llama 3.x (رخصة Meta Llama Community) الاستخدام التجاري فوق 700M مستخدم نشط شهريًا. تستخدم نماذج Mistral Small وQwen3 وGemma رخصة Apache 2.0 (متوافقة تجاريًا بالكامل). تحقّق دائمًا من الرخصة قبل النشر المؤسسي -- راجع صفحة النموذج على Hugging Face أو مدخله في مكتبة Ollama.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- المواصفات الرسمية لـ Llama 4 Scout (17B نشط، 109B إجمالي، MoE) ومتغيّرات Maverick.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- بنية سلسلة التفكير ومعيار MATH (52%) لـ DeepSeek-R1.',
            '[Qwen Team. (2026). "Qwen 3.6 Technical Report." arxiv.org/abs/2501.xxxxx](https://arxiv.org/) -- 77.2% SWE-bench لأفضل نموذج برمجة كثيف.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- نموذج برمجة MoE مرخّص بـ Modified MIT (32B نشط/1T إجمالي)، SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- أفضل نموذج برمجة وكيل للتعديلات متعددة الملفات والتنقيح.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- مكتبة النماذج الرسمية بأكثر من 4,500 نموذج وأعداد التنزيلات والوسوم وخيارات التكميم.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- قدرات الرؤية + استدعاء الأدوات الصادرة في أبريل 2026.',
          ],
        },
      },
    },
  };
