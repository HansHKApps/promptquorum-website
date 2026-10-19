// Auto-generated from src/lib/local-llms/content.ts
// Slug: top-open-source-models-ollama
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-11-17',
      next_refresh_due: '2026-11-17',
      last_full_refresh: '2026-10-17',
      last_seo_review: '2026-10-17',
      current_models_mentioned: ['Nemotron 3.5 Lightning', 'Nemotron 3.5 Super', 'Nemotron 3.5 Bolt', 'Laguna XS 2.1', 'Kimi K2.7 Code', 'Qwen3.8-27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.3', 'Llama 4 Scout', 'Devstral Small 24B', 'Dolphin 3.0', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-bench Verified', 'SWE-Bench Pro', 'SWE-bench Multilingual', 'LiveCodeBench', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'Ollama Latest Version 2026: v0.40.5 + Best Models by Use Case',
      dateModified: '2026-10-17',
      seoTitle: 'Ollama Latest Version 2026: v0.40.5 + 10 Best Models',
      intro: 'The current stable Ollama version is v0.40.5 (October 14, 2026), which adds NVIDIA Nemotron 3.5 Super and Bolt, decision-model support and updated llama.cpp and MLX engines; v0.40.6 is a pre-release. Since v0.33.1 in August, Ollama made MLX the default engine on Apple Silicon (v0.40.0) and added ChatGPT Desktop integration (v0.34.0). Best overall on consumer hardware is still Qwen3.8-27B (61.7 SWE-bench Pro as reported by Qwen, 18 GB download, fits a 24 GB card or 32 GB Mac); best for coding depends on your setup — see the use-case breakdown below.',
      metaDescription: 'Ollama\'s latest version is v0.40.5. See what changed since v0.33, the newest models (Nemotron 3.5, GLM-5.3, Granite 4.2) and which model is best for chat, coding and vision.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-en.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**The current stable Ollama version is v0.40.5 (October 14, 2026); v0.40.6 (October 16) is a pre-release. The newest models added recently are NVIDIA Nemotron 3.5 Super (120B, vision-language) and Bolt (74B total / 9B active MoE, 25 GB) in v0.40.5, with Nemotron 3.5 Lightning (30B MoE, 3B active) for always-on agents. Best overall on consumer hardware is Qwen3.8-27B (61.7 SWE-bench Pro as reported by Qwen, 18 GB, fits a 24 GB card). Other top picks: Devstral Small 2 and Laguna XS 2.1 (local agentic coding; Kimi K2.6 is frontier-scale but cloud-only on Ollama), gpt-oss:20b (best small / 16 GB), qwen3:30b (balanced all-round), DeepSeek-R1 (reasoning), Gemma 4 (vision/tool calling, now also 12B and 31B), Granite 4.2 (IBM, Apache 2.0, 3B/8B/30B), Dolphin 3.0 (uncensored general-purpose), and Llama 4 Scout (long-context 10M / multimodal). Most downloaded overall remains the Llama family.**',
      quickAnswerTop: {
        en: {
          question: 'What is the latest Ollama version and the best models in 2026?',
          answer: 'The latest stable Ollama version is v0.40.5 (October 14, 2026); v0.40.6 is a pre-release. The newest models added recently are NVIDIA Nemotron 3.5 Super and Bolt, with Nemotron 3.5 Lightning for always-on agents. The best open source Ollama models in 2026 are Qwen3.8-27B (best overall on consumer hardware, 18 GB), Devstral Small 2 and Laguna XS 2.1 (best local agentic coding; Kimi K2.6 is cloud-only on Ollama), gpt-oss:20b (best small / 16 GB, adjustable reasoning), qwen3:30b (balanced all-round), Gemma 4 (vision + tool calling), Llama 4 Scout (best long-context 10M / multimodal), Dolphin 3.0 (best uncensored general-purpose), and DeepSeek-R1 (best reasoning). Install any with: ollama pull <model-name>',
          bullets: [
            '→Latest version: Ollama v0.40.5 (October 14, 2026) — Nemotron 3.5 Super and Bolt, decision-model support, updated llama.cpp and MLX. v0.40.6 is a pre-release',
            '→Since v0.33: MLX is the default engine on Apple Silicon (v0.40.0), Ollama models in ChatGPT Desktop (v0.34.0), background model upgrades (v0.40.2)',
            '→Qwen3.8-27B — best overall on consumer hardware, 61.7 SWE-bench Pro (Qwen-reported), 18 GB download',
            '→Devstral Small 2 (15 GB) and Laguna XS 2.1 (20 GB) — local agentic coding; Kimi K2.6 and K2.7 Code are cloud-only tags',
            '→gpt-oss:20b — best small model, runs in 16 GB, ~o3-mini level, adjustable reasoning',
            '→Nemotron 3.5 Lightning — 30B MoE with 3B active, 1M context, for always-on agents',
            '→qwen3:30b — balanced all-round model; qwen3-coder:30b for code completion',
            '→Llama 4 Scout — long-context (10M tokens) + multimodal, ~55 GB at Q4',
            '→DeepSeek-R1 — best reasoning/math; gpt-oss:20b for adjustable reasoning (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.)',
          ],
          updatedDate: '2026-10-17',
        },
        de: {
          question: 'Was ist die neueste Ollama-Version und was sind 2026 die besten Modelle?',
          answer: 'Die neueste stabile Ollama-Version ist v0.40.5 (14. Oktober 2026); v0.40.6 ist eine Vorabversion. Die neuesten Modelle sind NVIDIA Nemotron 3.5 Super und Bolt sowie Nemotron 3.5 Lightning für dauerhaft laufende Agenten. Die besten Open-Source-Modelle für Ollama 2026 sind Qwen3.8-27B (bestes Gesamtmodell auf Consumer-Hardware, 18 GB), Devstral Small 2 und Laguna XS 2.1 (bestes lokales agentisches Coding; Kimi K2.6 gibt es bei Ollama nur in der Cloud), gpt-oss:20b (bestes kleines Modell / 16 GB, einstellbares Reasoning), qwen3:30b (ausgewogen), Gemma 4 (Vision + Tool-Aufrufe), Llama 4 Scout (bester Langkontext 10M / multimodal), Dolphin 3.0 (bestes unzensiertes Allzweckmodell) und DeepSeek-R1 (bestes Reasoning). Installation: ollama pull <modell-name>',
          bullets: [
            '→Neueste Version: Ollama v0.40.5 (14. Oktober 2026) — Nemotron 3.5 Super und Bolt, Entscheidungsmodelle, aktualisierte llama.cpp- und MLX-Engines. v0.40.6 ist eine Vorabversion',
            '→Seit v0.33: MLX ist Standard-Engine auf Apple Silicon (v0.40.0), Ollama-Modelle in ChatGPT Desktop (v0.34.0), Modell-Upgrades im Hintergrund (v0.40.2)',
            '→Qwen3.8-27B — bestes Gesamtmodell auf Consumer-Hardware, 61,7 SWE-bench Pro (laut Qwen), 18 GB Download',
            '→Devstral Small 2 (15 GB) und Laguna XS 2.1 (20 GB) — lokales agentisches Coding; Kimi K2.6 und K2.7 Code sind nur Cloud-Tags',
            '→gpt-oss:20b — bestes kleines Modell, läuft in 16 GB, ~o3-mini-Niveau, einstellbares Reasoning',
            '→Nemotron 3.5 Lightning — 30B-MoE mit 3B aktiv, 1M Kontext, für dauerhaft laufende Agenten',
            '→qwen3:30b — ausgewogenes Allround-Modell; qwen3-coder:30b für Code-Vervollständigung',
            '→Llama 4 Scout — Langkontext (10M Tokens) + multimodal, ~55 GB bei Q4',
            '→DeepSeek-R1 — bestes Reasoning/Mathe; gpt-oss:20b für einstellbares Reasoning (DeepSeek hat inzwischen DeepSeek-V4 — Flash/Pro — als neuere offene Generation veröffentlicht; R1/V3 bleiben lokal nutzbar.)',
          ],
          updatedDate: '2026-10-17',
        },
        fr: {
          question: 'Quelle est la dernière version d\'Ollama et les meilleurs modèles en 2026 ?',
          answer: 'La dernière version stable d\'Ollama est la v0.40.5 (14 octobre 2026) ; la v0.40.6 est une préversion. Les modèles les plus récents sont NVIDIA Nemotron 3.5 Super et Bolt, avec Nemotron 3.5 Lightning pour les agents toujours actifs. Les meilleurs modèles open source pour Ollama en 2026 sont Qwen3.8-27B (meilleur global sur matériel grand public, 18 Go), Devstral Small 2 et Laguna XS 2.1 (meilleur codage agentique local ; Kimi K2.6 est uniquement dans le cloud sur Ollama), gpt-oss:20b (meilleur petit modèle / 16 Go, raisonnement réglable), qwen3:30b (polyvalent), Gemma 4 (vision + appel d\'outils), Llama 4 Scout (meilleur contexte long 10M / multimodal), Dolphin 3.0 (meilleur usage général sans censure) et DeepSeek-R1 (meilleur raisonnement). Installation : ollama pull <nom-du-modele>',
          bullets: [
            '→Dernière version : Ollama v0.40.5 (14 octobre 2026) — Nemotron 3.5 Super et Bolt, modèles de décision, llama.cpp et MLX mis à jour. La v0.40.6 est une préversion',
            '→Depuis la v0.33 : MLX est le moteur par défaut sur Apple Silicon (v0.40.0), modèles Ollama dans ChatGPT Desktop (v0.34.0), mises à jour de modèles en arrière-plan (v0.40.2)',
            '→Qwen3.8-27B — meilleur global sur matériel grand public, 61,7 SWE-bench Pro (selon Qwen), téléchargement de 18 Go',
            '→Devstral Small 2 (15 Go) et Laguna XS 2.1 (20 Go) — codage agentique local ; Kimi K2.6 et K2.7 Code ne sont que des tags cloud',
            '→gpt-oss:20b — meilleur petit modèle, tourne en 16 Go, niveau ~o3-mini, raisonnement réglable',
            '→Nemotron 3.5 Lightning — MoE de 30B avec 3B actifs, contexte 1M, pour agents toujours actifs',
            '→qwen3:30b — modèle polyvalent ; qwen3-coder:30b pour la complétion de code',
            '→Llama 4 Scout — contexte long (10M tokens) + multimodal, ~55 Go en Q4',
            '→DeepSeek-R1 — meilleur raisonnement/maths ; gpt-oss:20b pour un raisonnement réglable (DeepSeek a depuis publié DeepSeek-V4 — Flash/Pro — comme génération ouverte plus récente ; R1/V3 restent utilisables en local.)',
          ],
          updatedDate: '2026-10-17',
        },
        ja: {
          question: 'Ollamaの最新バージョンと2026年の最高のモデルは？',
          answer: 'Ollamaの最新安定版はv0.40.5（2026年10月14日）で、v0.40.6はプレリリースです。最近追加された最新モデルはNVIDIA Nemotron 3.5 SuperとBolt、常時稼働エージェント向けのNemotron 3.5 Lightningです。2026年のOllama向け最高のオープンソースモデルは、Qwen3.8-27B（コンシューマー向け総合最高、18GB）、Devstral Small 2とLaguna XS 2.1（ローカルのエージェントコーディング最強。Kimi K2.6はOllamaではクラウド専用）、gpt-oss:20b（小型最強/16GB、推論調整可能）、qwen3:30b（バランス型）、Gemma 4（ビジョン＋ツール呼び出し）、Llama 4 Scout（長コンテキスト10M/マルチモーダル最強）、Dolphin 3.0（無検閲の汎用最強）、DeepSeek-R1（推論最強）です。インストール：ollama pull <モデル名>',
          bullets: [
            '→最新バージョン：Ollama v0.40.5（2026年10月14日）— Nemotron 3.5 SuperとBolt、判断モデル、更新されたllama.cppとMLX。v0.40.6はプレリリース',
            '→v0.33以降：Apple SiliconでMLXが標準エンジン（v0.40.0）、ChatGPT DesktopでOllamaモデルが利用可能（v0.34.0）、バックグラウンドでのモデル更新（v0.40.2）',
            '→Qwen3.8-27B — コンシューマー向け総合最高、SWE-bench Pro 61.7（Qwen公表値）、ダウンロード18GB',
            '→Devstral Small 2（15GB）とLaguna XS 2.1（20GB）— ローカルのエージェントコーディング。Kimi K2.6とK2.7 Codeはクラウドタグのみ',
            '→gpt-oss:20b — 小型最強、16GBで動作、~o3-miniレベル、推論調整可能',
            '→Nemotron 3.5 Lightning — アクティブ3Bの30B MoE、1Mコンテキスト、常時稼働エージェント向け',
            '→qwen3:30b — バランス型オールラウンドモデル；コード補完はqwen3-coder:30b',
            '→Llama 4 Scout — 長コンテキスト（10Mトークン）＋マルチモーダル、Q4で約55GB',
            '→DeepSeek-R1 — 推論・数学最強；推論調整はgpt-oss:20b（DeepSeekはその後DeepSeek-V4（Flash/Pro）を新世代のオープンウェイトとして公開。R1/V3もローカルで引き続き利用可能）',
          ],
          updatedDate: '2026-10-17',
        },
        zh: {
          question: 'Ollama最新版本是什么？2026年最佳模型有哪些？',
          answer: 'Ollama最新稳定版是v0.40.5（2026年10月14日）；v0.40.6为预发布版。近期新增的最新模型是NVIDIA Nemotron 3.5 Super和Bolt，以及面向常驻代理的Nemotron 3.5 Lightning。2026年Ollama最佳开源模型：Qwen3.8-27B（消费级硬件综合最佳，18GB）、Devstral Small 2和Laguna XS 2.1（本地代理编码最佳；Kimi K2.6在Ollama上仅提供云端版本）、gpt-oss:20b（小型最佳/16GB，推理可调）、qwen3:30b（均衡全能）、Gemma 4（视觉+工具调用）、Llama 4 Scout（长上下文10M/多模态最佳）、Dolphin 3.0（无审查通用最佳）和DeepSeek-R1（推理最佳）。安装：ollama pull <模型名称>',
          bullets: [
            '→最新版本：Ollama v0.40.5（2026年10月14日）— Nemotron 3.5 Super和Bolt、决策模型、更新的llama.cpp和MLX。v0.40.6为预发布版',
            '→v0.33以来：MLX成为Apple Silicon默认引擎（v0.40.0）、Ollama模型可用于ChatGPT Desktop（v0.34.0）、后台模型升级（v0.40.2）',
            '→Qwen3.8-27B — 消费级硬件综合最佳，SWE-bench Pro 61.7（Qwen公布），下载18GB',
            '→Devstral Small 2（15GB）和Laguna XS 2.1（20GB）— 本地代理编码；Kimi K2.6和K2.7 Code仅有云端标签',
            '→gpt-oss:20b — 小型最佳，16GB可运行，~o3-mini水平，推理可调',
            '→Nemotron 3.5 Lightning — 激活3B的30B MoE，1M上下文，面向常驻代理',
            '→qwen3:30b — 均衡全能模型；代码补全用qwen3-coder:30b',
            '→Llama 4 Scout — 长上下文（10M tokens）+多模态，Q4下约55GB',
            '→DeepSeek-R1 — 推理/数学最佳；推理可调用gpt-oss:20b（DeepSeek此后发布了DeepSeek-V4（Flash/Pro）作为较新一代开放权重模型；R1/V3仍可在本地运行。）',
          ],
          updatedDate: '2026-10-17',
        },
      },
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '9 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'open source models Ollama',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Ollama Version History', anchor: '#ollama-version-history' },
        { label: 'Most Popular Models on Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'Top Models by Use Case', anchor: '#top-models-by-category' },
        { label: 'Newest Models Added', anchor: '#new-july-2026' },
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
            { type: 'one-sentence', text: 'The best Ollama model in 2026 is Qwen3.8-27B (61.7 SWE-bench Pro as reported by Qwen, 18 GB); best local coding picks are Qwen3.8-27B, Devstral Small 2 and Laguna XS 2.1 (Kimi K2.6 is cloud-only on Ollama).' },
            { type: 'plain-terms', text: 'Ollama is a free tool that lets you run AI models on your own computer — no internet or API key needed. These are the top models you can download with a single command, organized by what you actually need them for.' },
          ],
          items: [
            '**Best overall on consumer hardware**: Qwen3.8-27B (61.7 SWE-bench Pro as reported by Qwen, 18 GB download, fits a 24 GB card). Balanced all-round: qwen3:30b.',
            '**Most downloaded**: Llama 3.2 3B (tutorials) and the Llama family -- widest tool support.',
            '**Best reasoning**: DeepSeek-R1 (chain-of-thought) and gpt-oss:20b (adjustable reasoning, ~o3-mini level).',
            '**Best coding**: Qwen3.8-27B (best dense), Laguna XS 2.1 (agentic, long-horizon), Devstral Small 2 (best agentic 24B), qwen3-coder:30b (completion); Kimi K2.6 is frontier-scale but cloud-only on Ollama -- highest reported benchmarks at their sizes.',
            '**Best small / 16 GB**: gpt-oss:20b. **Best vision/multimodal**: Gemma 4 (E4B+). **Best long-context (10M) / large multimodal**: Llama 4 Scout (~55 GB). **Best uncensored/general-purpose**: Dolphin 3.0. **Always-on agents**: Nemotron 3.5 Lightning.',
            'The Ollama library holds several hundred curated models (thousands more via custom GGUF Modelfiles). All are available via `ollama pull <name>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'What Is the Latest Ollama Version and What Changed?',
          content: [
            '**Current Ollama version: v0.40.5** (released October 14, 2026). This is the latest stable release, available via ollama.com/download. A v0.40.6 pre-release landed October 16 but is not yet marked stable. Update with `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`), then confirm with `ollama --version`.',
            '**What changed in the v0.33–v0.40 series (August–October 2026):** v0.33.0 (August 21) enabled Claude Desktop as a third-party gateway provider and made KV-cache prefill restore points more reliable. v0.34.0 (September 5) let ChatGPT Desktop use Ollama models and sped up structured output on Apple Silicon; v0.34.1 (September 14) made MLX safetensors `ollama create` non-experimental. v0.40.0 (September 25) runs supported architectures such as qwen3.8, gemma4 and qwen3.6 on MLX by default on Apple Silicon. v0.35.0 (September 28) added decision models through `/v1/systemone` — models that return choices, probabilities and scores instead of text, starting with Nimble and Tev1 — and v0.35.1 (September 29) added the multimodal Clef models. v0.40.2 (October 8) keeps backups while upgrading older models in the background, v0.40.4 (October 12) added `ollama run <decision-model> --ask`, and v0.40.5 (October 14) added NVIDIA Nemotron 3.5 Super support plus cloud access for Clef decision models. Full notes: github.com/ollama/ollama/releases.',
            '**Newest models in the library (2026):**',
          ],
          items: [
            '**Nemotron 3.5 Lightning, Super and Bolt** (NVIDIA, August–October 2026) — Lightning (August 11) is a 30B MoE with 3B active parameters for always-on agents on a single GPU; Super is a 120B vision-language MoE (12B active, up to 1M-token context, tools and thinking mode); Bolt distills Super to 74B (9B active) to fit a 24 GB NVIDIA GPU. Pull: `ollama pull nemotron-3.5-lightning`, `ollama run nemotron-3.5-super`, `ollama run nemotron-3.5-bolt`',
            '**Laguna XS 2.1** (Poolside, July 2, 2026) — 33B total / 3B active MoE built for agentic coding and long-horizon local work: plan, write code, run tests, iterate. 256K context, OpenMDW-1.1 license. SWE-bench Verified 70.9%, SWE-bench Multilingual 63.1%. Pull: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** (Moonshot AI, June 2026) — Coding-focused agentic model built on Kimi K2.6, aimed specifically at long-horizon coding sessions. Pull: `ollama pull kimi-k2.7-code:cloud` (cloud tag; local GGUF builds need 300+ GB)',
            '**DeepSeek V4 Pro** (DeepSeek, April 23, 2026) — Algorithmic-coding specialist, 93.5% LiveCodeBench, MIT license. Budget sibling DeepSeek V4 Flash for lighter hardware. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, April 20, 2026) — Frontier coding model, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%. MoE architecture (32B active / 1T total). Modified MIT license. Pull: `ollama pull kimi-k2.6:cloud` (cloud tag; local GGUF builds need 300+ GB)',
            '**Qwen3.8-27B** (Alibaba, April 16, 2026) — Best overall on consumer hardware, 61.7 SWE-bench Pro, Apache 2.0, fits 24 GB at Q4. Also Qwen3.6-35B-A3B (MoE, 73.4 SWE-bench). Pull: `ollama pull qwen3.8:27b`',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — 744B / 40B active MoE, MIT license. Structured code generation leader. Pull: `ollama pull glm-5.3`',
            '**gpt-oss** (OpenAI, 2026) — Open-weight MoE: gpt-oss:20b (21B total / 3.6B active, runs in 16 GB, ~o3-mini level, adjustable reasoning) and gpt-oss:120b (80 GB). Pull: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google, April 2, 2026) — Multimodal sizes E2B / E4B / E12B (26B MoE) / E27B (31B dense), all with vision and tool calling. Now ~90% faster on Apple Silicon (July 2026 MLX update). E4B runs in ~6 GB VRAM. Pull: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.40.5\n\n# Pull the newest 2026 models\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'What Is the Ollama Version History and Release Timeline?',
          content: '**Ollama published its first release, v0.0.1, on July 8, 2023, and reached v0.40.5 on October 14, 2026.** The table lists the releases that changed what you can do with Ollama; every tag, with full notes, is at github.com/ollama/ollama/releases. Version numbers jumped from v0.35 to v0.40 in late September 2026, so v0.40.0 (September 25) sits next to the v0.35 releases (September 28-29) on GitHub.',
          rows: [
            { 'Version': 'v0.40.5', 'Released': 'Oct 14, 2026', 'Key change': 'Nemotron 3.5 Super; cloud decision models' },
            { 'Version': 'v0.40.0', 'Released': 'Sep 25, 2026', 'Key change': 'MLX by default on Apple Silicon' },
            { 'Version': 'v0.35.0', 'Released': 'Sep 28, 2026', 'Key change': 'Decision models via /v1/systemone' },
            { 'Version': 'v0.34.0', 'Released': 'Sep 5, 2026', 'Key change': 'Ollama models in ChatGPT Desktop' },
            { 'Version': 'v0.33.0', 'Released': 'Aug 21, 2026', 'Key change': 'Claude Desktop gateway; KV-cache restore' },
            { 'Version': 'v0.32.0', 'Released': 'Jul 11, 2026', 'Key change': '"Chat, Code & Work" agent experience' },
            { 'Version': 'v0.0.1', 'Released': 'Jul 8, 2023', 'Key change': 'First public release' },
          ],
          columns: ['Version', 'Released', 'Key change'],
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: 'Which Models Are Most Popular on Ollama in 2026?',
          content: [
            '**Popularity on Ollama is measured by download counts visible on each model\'s library page.** The top downloaded models are still dominated by Meta\'s Llama family -- Llama 3.2 3B is the most pulled model overall, largely due to its use as a first-install test model. However, Llama 4 Scout has climbed rapidly since its April 2026 release.',
            'Qwen3 is the fastest-growing model family in the Ollama library, with Qwen3 and the new Qwen3.8 dense variant quickly displacing Qwen2.5. DeepSeek-R1 saw major spikes following its release and remains highly downloaded for reasoning tasks. Dolphin 3.0 (Cognitive Computations, built on Llama 3.1) remains the most-pulled uncensored general-purpose model for users who want an unfiltered local assistant.',
            'Meta released **Llama 4** in April 2026 with Scout (17B active, 109B total, MoE) and Maverick (17B active, 400B total) variants. Llama 4 Scout is now stable in the Ollama library (`ollama pull llama4:scout`). The Llama 4 family uses Mixture-of-Experts (MoE) architecture — Scout needs ~55 GB VRAM at Q4 (it fits 24 GB only at 1.78-bit, ~20 tok/s).',
            'Scout\'s standout features are its 10M-token context window and multimodal input, not consumer-hardware fit. For lightweight setups (8 GB RAM), Llama 3.2 3B remains the easiest first model.',
            'Kimi K2.6 (Moonshot AI, Modified MIT license, 32B active / 1T total MoE) scored SWE-Bench Pro 58.6, tying GPT-5.5. Laguna XS 2.1 (Poolside) is the newest agentic-coding challenger, purpose-built for long-horizon local coding sessions. Qwen3.8-27B achieved 61.7 SWE-bench Pro as the best overall model on consumer hardware (fits 24 GB at Q4). OpenAI\'s open-weight gpt-oss:20b (21B total / 3.6B active MoE) runs in 16 GB at ~o3-mini level with adjustable reasoning.',
            'The Ollama library holds several hundred curated models, with Laguna XS 2.1 and Kimi K2.7 Code the newest additions since the June refresh.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: 'Which Ollama Models Work Best for Your Use Case?',
          snippetBlocks: [
            { type: 'one-sentence', text: 'For general chat use Qwen3.8-27B, for coding use Qwen3.8-27B, Devstral Small 2 or Laguna XS 2.1, for reasoning use DeepSeek-R1, for vision use Gemma 4 E4B, for uncensored chat use Dolphin 3.0.' },
            { type: 'plain-terms', text: 'Different AI models excel at different tasks — like how a calculator beats a word processor at math. This section matches the right model to each job.' },
          ],
          content: 'The quality of a model\'s output depends heavily on how you prompt it. For structured techniques that work across all local models — including chain-of-thought, few-shot examples, and output formatting — see the [prompt engineering guide](https://www.promptquorum.com/prompt-engineering). For reasoning tasks, [chain-of-thought prompting](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting) significantly improves DeepSeek-R1 and Qwen3 output quality. To understand quantization tradeoffs for these models, see the [quantization guide →](/local-llms/llm-quantization-explained). For determining how much VRAM each model needs, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm). For agent workflows with Gemma 4, see [Tree-of-Thought and ReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react). For hardware requirements to run these models, see the [hardware guide →](/local-llms/local-llm-hardware-guide). Once a tool-calling model from this list is wired into a multi-step loop with file and database access, see [Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026) for the open-source orchestration pattern.',
          items: [
            '**General chat (beginner)**: `ollama run llama3.2:3b` -- most documentation, best-supported first model.',
            '**General chat (best overall)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro, best overall on consumer hardware, fits 24 GB at Q4. Balanced all-round: `ollama run qwen3:30b`. For 8 GB machines, keep `ollama run llama3.2:3b`.',
            '**Long-context / multimodal**: `ollama run llama4:scout` -- 10M-token context + multimodal, MoE (17B active/109B total). Needs ~55 GB VRAM at Q4 (fits 24 GB only at 1.78-bit ~20 tok/s).',
            '**Best small / 16 GB**: `ollama run gpt-oss:20b` -- 21B total / 3.6B active MoE, ~o3-mini level, adjustable reasoning. Larger: `ollama run gpt-oss:120b` (80 GB).',
            '**Coding on 8 GB**: `ollama run qwen3:8b` -- Best local coding model for 8 GB VRAM machines. 76% HumanEval, 5 GB used, multilingual.',
            '**General inference on 8 GB (if not coding)**: `ollama run mistral:7b` -- Fastest general-purpose model at 8 GB, 40-60 tok/sec.',
            '**Coding (best agentic, 24B)**: `ollama run devstral-small-2` -- Best agentic coding model (multi-file edits, debugging). 16 GB RAM. By Mistral AI.',
            '**Coding (best dense, 27B)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro (Qwen-reported). Best dense coding model. 18 GB download.',
            '**Coding (frontier MoE)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6 (ties GPT-5.5), top tier. MoE (32B active/1T total). Modified MIT license. Ollama lists only a cloud tag; local GGUF builds need 300+ GB.',
            '**Coding (agentic, long-horizon)**: `ollama run laguna-xs-2.1` -- Poolside\'s 33B/3B-active MoE, SWE-bench Verified 70.9%, 256K context. Built for multi-step plan → code → test → iterate loops. OpenMDW-1.1 license.',
            '**Agent tasks and tool calling**: `ollama run gemma4:e4b` -- Released April 2, 2026. Built-in tool calling + vision support. Recommended for local agents, function calling, and structured output. 6 GB RAM.',
            '**Reasoning and math**: `ollama run deepseek-r1:7b` -- chain-of-thought model, best local math performance at 7B.',
            '**Multilingual (general)**: `ollama run qwen3:8b` -- 29+ native languages, strongest non-English support, 76% HumanEval.',
            '**Chinese-language tasks**: `ollama run qwen3.8:27b` -- native Chinese tokenization, Alibaba origin. See [Regional Context](#regional-context) for CAC compliance notes.',
            '**Japanese-language tasks**: `ollama run qwen3.8:27b` -- processes Japanese text 30-40% more token-efficiently than Llama or Mistral.',
            '**Russian-language tasks**: `ollama run qwen3:8b` or `ollama run mistral-small3.1` -- both include Russian in their native multilingual training data; Qwen3 scores higher on non-English HumanEval, Mistral Small has stronger conversational Russian fluency.',
            '**Uncensored / general-purpose**: `ollama run dolphin3` -- Dolphin 3.0 (Cognitive Computations, built on Llama 3.1), no built-in content filtering, general chat/coding/agentic use.',
            '**Image understanding**: `ollama run gemma4:e4b` -- vision + tool calling. Or `ollama run llama3.2-vision:11b` for dedicated vision.',
            '**Fast and lightweight**: `ollama run gemma2:2b` -- fastest CPU inference, 1.7 GB RAM.',
            '**High quality (16 GB RAM)**: `ollama run mistral-small3.1` -- near-70B quality at 14 GB RAM.',
            '**Embedding generation**: `ollama run nomic-embed-text` -- 137M parameter embedding model for RAG pipelines.',
            '**Document Q&A (RAG)**: `ollama run llama3.2` with Open WebUI\'s RAG feature -- best-supported combination.',
            '**Home automation / wake word AI**: `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB VRAM) handles Home Assistant voice queries at 20–25 tok/sec on a mini PC without a discrete GPU. See [Home Assistant + Ollama integration guide →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-en.webp',
          imageCaption: 'Ollama model selection by use case: pick qwen3.8:27b (best overall, 61.7 SWE-bench Pro) for chat and coding, kimi-k2.6 for frontier coding, gpt-oss:20b on 16 GB, deepseek-r1:7b for math.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'Which Models Were Added to Ollama Most Recently?',
          content: 'These are the newest models in the Ollama library, newest first. Confirm availability with `ollama pull <model>` before building workflows — new models appear at ollama.com/library within days of release.',
          rows: [
            { 'Model': '[nemotron-3.5-super](https://ollama.com/library/nemotron-3.5-super)', 'Released': 'October 2026', 'Best For': 'NVIDIA — vision-language MoE, 120B/12B active, 1M context, tools', 'Ollama Command': 'ollama run nemotron-3.5-super' },
            { 'Model': '[nemotron-3.5-bolt](https://ollama.com/library/nemotron-3.5-bolt)', 'Released': 'October 2026', 'Best For': 'NVIDIA — 74B/9B active MoE sized for a 24 GB GPU', 'Ollama Command': 'ollama run nemotron-3.5-bolt' },
            { 'Model': '[nemotron-3.5-lightning](https://ollama.com/library/nemotron-3.5-lightning)', 'Released': 'August 11, 2026', 'Best For': 'NVIDIA — 30B/3B active MoE for always-on agents', 'Ollama Command': 'ollama run nemotron-3.5-lightning' },
            { 'Model': '[laguna-xs-2.1](https://ollama.com/library/laguna-xs-2.1)', 'Released': 'July 2, 2026', 'Best For': 'Poolside — agentic coding, 33B/3B active MoE, SWE-bench Verified 70.9%, 256K context', 'Ollama Command': 'ollama run laguna-xs-2.1' },
            { 'Model': 'kimi-k2.7-code', 'Released': 'June 2026', 'Best For': 'Moonshot AI — coding-focused agentic model built on Kimi K2.6', 'Ollama Command': 'ollama run kimi-k2.7-code:cloud' },
            { 'Model': 'deepseek-v4-pro', 'Released': 'April 23, 2026', 'Best For': 'Algorithmic coding, 93.5% LiveCodeBench, MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': 'April 20, 2026', 'Best For': 'Frontier coding (SWE-Bench Pro 58.6), MoE (32B/1T), Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6:cloud' },
            { 'Model': '[qwen3.8:27b](https://ollama.com/library/qwen3)', 'Released': 'April 16, 2026', 'Best For': 'Best overall on consumer hardware, 61.7 SWE-bench Pro, fits 24 GB Q4', 'Ollama Command': 'ollama run qwen3.8:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'Balanced all-round; qwen3-coder:30b for code completion', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026', 'Best For': 'Best small / 16 GB, ~o3-mini, adjustable reasoning (also gpt-oss:120b)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.3', 'Released': 'Z.ai', 'Best For': '744B/40B active MoE, MIT license', 'Ollama Command': 'ollama run glm-5.3' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': 'April 2, 2026', 'Best For': 'Vision + tool calling (E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': 'April/May 2026', 'Best For': 'Budget coding (78/100 real-world)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:8b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'HumanEval 76% at 7B, multilingual', 'Ollama Command': 'ollama run qwen3:8b' },
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
          content: 'These models on Ollama support image input (multimodal): Gemma 4 supports both vision AND tool calling — unique among vision models on Ollama, and now runs nearly 90% faster on Apple Silicon after the July MLX update.',
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
          content: 'Download counts still favor Llama 3.x due to tutorial prevalence. For new projects in 2026, prefer Qwen3.8-27B (best overall on consumer hardware), Laguna XS 2.1 or Devstral Small 2 (coding), gpt-oss:20b, and qwen3:30b.',
          rows: [
            { '#': '1', 'Model': '[Qwen3.8-27B](https://ollama.com/library/qwen3)', 'Best For': 'Best overall on consumer hardware', 'RAM': '24 GB (Q4)', 'HumanEval': '61.7 SWE-bench Pro' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': 'Frontier coding, MoE (32B/1T), Modified MIT', 'RAM': 'Quantized', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': 'Best small / 16 GB, adjustable reasoning', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': 'Balanced all-round; qwen3-coder:30b for code', 'RAM': '~18 GB', 'HumanEval': 'strong' },
            { '#': '5', 'Model': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Best For': 'Agentic coding, long-horizon (plan/code/test/iterate)', 'RAM': 'Quantized', 'HumanEval': '70.9% SWE-bench Verified' },
            { '#': '6', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral-small-2)', 'Best For': 'Agentic coding (multi-file)', 'RAM': '15 GB', 'HumanEval': '65.8% (Verified)' },
            { '#': '7', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': 'Reasoning, math', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '8', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': 'Vision + tool calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Agent-ready' },
            { '#': '9', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': 'Long-context 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': 'First model, general chat', 'RAM': '2.5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-en.webp',
          imageCaption: 'Top Ollama models 2026: Qwen3.8-27B (best overall, 24 GB Q4), Kimi K2.6, Laguna XS 2.1 (agentic coding), gpt-oss:20b. Llama 4 Scout for 10M-token context (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'How Do You Browse the Ollama Model Library?',
          content: 'There are two ways to work with Ollama models. **Switch installed models:** In the Ollama Mac app, click the model dropdown button at the bottom of the chat input (shows the current model name, e.g. "gemma3:1b") to switch between any locally installed model. **Find and download new models:** Visit ollama.com/library to browse several hundred curated models by category, then use the CLI commands below to pull and manage them.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'How Do Regional Privacy Rules Affect Your Ollama Model Choice?',
          content: [
            '**EU / GDPR + Licence Compliance.** For EU organizations deploying Ollama models in production, licence choice matters as much as performance. Apache 2.0 (fully open, commercial use permitted): Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Meta Llama Community Licence (commercial use restricted above 700M monthly active users): Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (commercial use permitted): DeepSeek-R1 7B, DeepSeek-R1 14B. Modified MIT (commercial use permitted with attribution clause): Kimi K2.6. OpenMDW-1.1 (permissive, commercial use permitted): Laguna XS 2.1. Always check the licence terms before commercial deployment. For EU enterprises in regulated sectors, Mistral models (France, Apache 2.0) such as Devstral Small 2 are a sensible default -- EU origin and a permissive licence. Running models entirely on-premises via Ollama means prompts are not sent to external servers; this supports, but does not by itself satisfy, GDPR obligations (a `:cloud` tag does send data to Ollama\'s hosted service).',
            '**Japan (METI).** For Japanese enterprise Ollama deployments, Qwen3 / Qwen3.8 is a recommended model family -- it handles Japanese text natively, which helps inference time and KV cache requirements. For Japanese coding workflows: Qwen3.8-27B (61.7 SWE-bench Pro as reported by Qwen) handles Japanese code comments natively. METI AI governance documentation typically asks for the exact model version. Use `ollama show <model>` to get the full model specification including parameter count, quantization level, and context length for compliance records.',
            '**China.** Under China\'s CAC Generative AI Measures (2023), organizations providing AI services to end users must register the models used. Qwen3 / Qwen3.8 (Alibaba, Apache 2.0) is a natural choice for Chinese enterprise Ollama deployments -- Chinese model origin, Apache 2.0 licence, strong Chinese-language performance. Kimi K2.6 (Moonshot AI, Modified MIT) is also Chinese-origin, but Ollama lists it only as a cloud tag and local runs need server-class hardware. Pull commands: `ollama run qwen3.8:27b` for best quality, `ollama run qwen3:8b` for speed. DeepSeek-R1 (MIT licence) is appropriate for reasoning tasks. For data processed locally via Ollama, China\'s PIPL cross-border transfer requirements are not triggered by the inference itself -- check your own compliance obligations.',
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
            '[Ollama Vision Models (2026)](/power-local-llm/ollama-vision-models-review) -- a dedicated, practical guide to running image-capable models through Ollama, including real CLI/API syntax.',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- set up Ollama and pull your first model from this list in under 5 minutes',
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- full benchmark rankings across all open-weight models including 70B tier',
            '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- deeper comparison of Qwen3.8 / Qwen2.5-Coder 32B, DeepSeek-Coder, and Starcoder2',
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
            '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) — Not sure your machine can run these models? Check hardware requirements →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'How many models are in the Ollama library?',
              a: 'The Ollama library holds several hundred curated models (official support), growing weekly as new open-weight releases land. Hugging Face hosts thousands of additional GGUF models that can be loaded via Ollama using custom Modelfiles.',
            },
            {
              q: 'What is the official name of the company behind Ollama?',
              a: 'The company is Ollama Inc., a Series B-funded startup based in Palo Alto, California, founded in 2023 by Jeffrey Morgan and Michael Chiang. "Ollama" refers to both the company and the CLI tool/model runtime it publishes.',
            },
            {
              q: 'Can I use models from Hugging Face directly in Ollama?',
              a: 'Yes. Download a GGUF file from Hugging Face and create a Modelfile: `FROM ./model.gguf`. Then run `ollama create mymodel -f Modelfile`. This works for any GGUF file including fine-tunes and models not in the official Ollama library.',
            },
            {
              q: 'Which Ollama model is best for building a local chatbot?',
              a: 'For a general-purpose local chatbot: `qwen3.8:27b` (best overall on consumer hardware, fits 24 GB at Q4), or `llama3.2:3b` on 8 GB RAM (easiest entry point). For 16 GB machines: `gpt-oss:20b` (~o3-mini level) or `mistral-small3.1`. For a coding assistant chatbot: `qwen3.8:27b` (61.7 SWE-bench Pro), `devstral-small-2` (15 GB, agentic), or `laguna-xs-2.1` (agentic, long-horizon). Pair with Open WebUI for a web-based interface that connects to Ollama\'s API at localhost:11434.',
            },
            {
              q: 'Are all Ollama models truly open source?',
              a: 'Not all. The Ollama library includes models with varying licences. Llama 3.x/4.x use the Meta Llama Community Licence (not OSI-approved open source -- restricts commercial use above 700M monthly active users). Mistral Small, Qwen3, Qwen3.8, Devstral, and Gemma models are Apache 2.0 (fully open source). Kimi K2.6 is Modified MIT licensed (commercial-friendly with an attribution clause). Laguna XS 2.1 uses OpenMDW-1.1 (permissive, commercial use permitted, not OSI-approved). Always check the licence before commercial deployment.',
            },
            {
              q: 'Which Dolphin model should I use with Ollama?',
              a: 'Use Dolphin 3.0 (`ollama pull dolphin3`), not the older `dolphin-mistral` (last updated 2024, built on Mistral 0.2). Dolphin 3.0, maintained by Cognitive Computations (Eric Hartford), is built on Llama 3.1, has no built-in content filtering, and is designed as a general-purpose local model for coding, math, agentic tasks, and unrestricted chat.',
            },
            {
              q: 'Which embedding model should I use with Ollama for RAG?',
              a: '`nomic-embed-text` is the standard choice -- a 137M parameter model that generates 768-dimensional embeddings, runs at milliseconds per document, and is specifically designed for retrieval tasks. Pull it with `ollama pull nomic-embed-text`. Use with Open WebUI\'s built-in RAG, LangChain\'s OllamaEmbeddings, or LlamaIndex.',
            },
            {
              q: 'How often does the Ollama library get updated with new models?',
              a: 'The Ollama team adds new models within days to weeks of major releases. Laguna XS 2.1 (July 2, 2026), Kimi K2.7 Code, Kimi K2.6 and Qwen3.8 all appeared within days of their releases. The current Ollama version is v0.40.5 (October 14, 2026). Follow the Ollama GitHub repository ([github.com/ollama/ollama](https://github.com/ollama/ollama)) or the Ollama Twitter/X account for new model announcements.',
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
              q: 'What is the latest version of Ollama?',
              a: 'The latest stable Ollama version is v0.40.5, released October 14, 2026. A v0.40.6 pre-release followed on October 16 but is not yet marked stable. Download it from ollama.com/download, or update in place with `curl https://ollama.ai/install.sh | sh` on Linux and `brew upgrade ollama` on macOS.',
            },
            {
              q: 'Where can I find the Ollama changelog and release notes?',
              a: 'Full release notes for every version live at github.com/ollama/ollama/releases, which lists each tag with its date and changelog. The most recent stable entries are v0.40.5 (October 14, 2026 -- NVIDIA Nemotron 3.5 Super support, cloud access for decision models), v0.40.4 (October 12 -- decision models in `ollama run --ask`, faster loading) and v0.40.0 (September 25 -- MLX by default on Apple Silicon).',
            },
            {
              q: 'How do I check which Ollama version I have installed?',
              a: 'Run `ollama --version` in your terminal. It prints a line such as `ollama version 0.40.5`. If the number is lower than the current release, update with `curl https://ollama.ai/install.sh | sh` (Linux) or `brew upgrade ollama` (macOS), then run `ollama --version` again to confirm.',
            },
            {
              q: 'When was Ollama first released?',
              a: 'Ollama\'s first release, v0.0.1, was published on GitHub on July 8, 2023, shortly after the repository was created on June 26, 2023. By October 2026 the project had reached v0.40.5. The full release list is at github.com/ollama/ollama/releases.',
            },
            {
              q: 'What are the newest Ollama models in 2026?',
              a: 'The latest additions are NVIDIA\'s Nemotron 3.5 family (Lightning: 30B MoE, 3B active; Super: 120B vision-language MoE, 12B active, up to 1M-token context; Bolt: 74B, 9B active, sized for a 24 GB GPU), alongside Laguna XS 2.1 (Poolside, OpenMDW-1.1 -- agentic long-horizon coding, SWE-bench Verified 70.9%, 33B/3B active MoE) and Kimi K2.7 Code (Moonshot AI -- coding-focused agentic model built on Kimi K2.6). They join the established 2026 lineup: Kimi K2.6 (Modified MIT, frontier MoE coding, SWE-Bench Pro 58.6), Qwen3.8-27B (best overall on consumer hardware, 61.7 SWE-bench Pro), GLM-5.3 (744B/40B active MoE, MIT, SWE-Bench Pro 58.4), and gpt-oss:20b (best small / 16 GB, ~o3-mini). Some newly listed models, such as mistral-large-4 and beam, are cloud-only (`:cloud` tag) and do not run locally. Pull commands: ollama run nemotron-3.5-lightning, ollama run nemotron-3.5-super, ollama run laguna-xs-2.1, ollama run kimi-k2.7-code:cloud, ollama run qwen3.8:27b.',
            },
            {
              q: 'Which Ollama models work best for Russian-language tasks?',
              a: 'Qwen3 / Qwen3.8 (`ollama run qwen3:8b` or `ollama run qwen3.8:27b`) and Mistral Small 3.1 (`ollama run mistral-small3.1`) both include Russian in their native multilingual training. Qwen3 scores higher on non-English benchmark tasks; Mistral Small 3.1 has stronger conversational Russian fluency in informal testing. Neither is Russian-origin -- for regulatory data-residency requirements specific to Russia, check the model licence and your organization\'s compliance requirements separately, as this article does not cover Russian data-localization law.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Official specifications for Llama 4 Scout (17B active, 109B total, MoE) and Maverick variants.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- Chain-of-thought architecture and MATH benchmark (52%) for DeepSeek-R1.',
            '[Ollama. (2026). "qwen3.8." ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8) -- 61.7 SWE-bench Pro for best dense coding model.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- Modified MIT-licensed MoE coding model (32B active/1T total), SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- Best agentic coding model for multi-file edits and debugging.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- Official model library, download counts, tags, and quantization options.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- Vision + tool calling capabilities released April 2026.',
            '[Poolside. (2026). "Introducing Laguna XS 2.1." poolside.ai](https://poolside.ai/blog/introducing-laguna-xs-2-1) -- 33B/3B active MoE agentic coding model, SWE-bench Verified 70.9%, OpenMDW-1.1 license.',
            '[Ollama. (2026). "Ollama Releases." github.com/ollama/ollama/releases](https://github.com/ollama/ollama/releases) -- Official release notes, v0.40.5 (October 14, 2026).',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama Latest Version 2026: v0.40.5 + Best Models by Use Case',
        'description': 'Looking for the latest Ollama version and models? See v0.40.5, the full changelog, what is new, and which models are worth using for chat, coding, and reasoning.',
        'url': 'https://www.promptquorum.com/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-10-17',
        'proficiencyLevel': 'Beginner',
        'inLanguage': 'en',
        'audience': { '@type': 'Audience', 'audienceType': 'Beginners running their first local LLM on consumer hardware' },
        'about': [
          { '@type': 'Thing', 'name': 'Best Ollama models 2026' },
          { '@type': 'Thing', 'name': 'Ollama model list 2026' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1 Ollama' },
          { '@type': 'Thing', 'name': 'Gemma 4 Ollama' },
          { '@type': 'Thing', 'name': 'Qwen3.8 / Qwen3-Coder Ollama' },
          { '@type': 'Thing', 'name': 'Laguna XS 2.1 Ollama' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': ['https://www.promptquorum.com/author/hans-kuepper', 'https://www.linkedin.com/in/hanskuepper/'] },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Top Open Source Models on Ollama -- 2026',
        'description': 'The most downloaded and highest-performing open source models available via Ollama',
        'numberOfItems': 12,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen3.8-27B', 'url': 'https://ollama.com/library/qwen3.8', 'description': 'Best overall on consumer hardware. 61.7 SWE-bench Pro. Fits 24 GB at Q4. Apache 2.0. ollama run qwen3.8:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://ollama.com/library/kimi-k2.6', 'description': 'Frontier MoE coding model. SWE-Bench Pro 58.6 (ties GPT-5.5). 32B active/1T total. Modified MIT license. ollama run kimi-k2.6:cloud' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'Best small / 16 GB. 21B total / 3.6B active MoE. ~o3-mini level, adjustable reasoning. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'Balanced all-round model; qwen3-coder:30b for code completion. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'url': 'https://ollama.com/library/laguna-xs-2.1', 'description': 'Agentic, long-horizon coding. 33B/3B active MoE. SWE-bench Verified 70.9%. OpenMDW-1.1 license. ollama run laguna-xs-2.1' },
          { '@type': 'ListItem', 'position': 6, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'Best reasoning. 5 GB RAM. 52% MATH vs 28% Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 7, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma4', 'description': 'Best vision/multimodal (E4B+). Tool calling + vision, ~90% faster on Apple Silicon (July 2026). ~6 GB RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama4', 'description': 'Best long-context (10M tokens) + large multimodal. MoE 17B active/109B total. ~55 GB at Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral-small', 'description': 'Best agentic coding (multi-file). Multi-file edits, debugging. 16 GB RAM. ollama run devstral-small-2' },
          { '@type': 'ListItem', 'position': 10, 'name': 'mistral-small3.1', 'url': 'https://ollama.com/library/mistral-small3.1', 'description': 'Best quality 16 GB tier. 14 GB RAM. 74% HumanEval. Apache 2.0. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 11, 'name': 'gemma2:2b', 'url': 'https://ollama.com/library/gemma2', 'description': 'Fastest and lightest. 1.7 GB RAM. Best CPU inference. ollama run gemma2:2b' },
          { '@type': 'ListItem', 'position': 12, 'name': 'phi4-mini', 'url': 'https://ollama.com/library/phi4-mini', 'description': 'Best reasoning under 4 GB. 2.5 GB RAM. 70% HumanEval. ollama run phi4-mini' },
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
              'text': 'The Ollama library holds several hundred curated models (official support), growing weekly as new open-weight releases land. Hugging Face hosts thousands of additional GGUF models that can be loaded via Ollama using custom Modelfiles.',
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the official name of the company behind Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The company is Ollama Inc., a Series B-funded startup based in Palo Alto, California, founded in 2023 by Jeffrey Morgan and Michael Chiang. "Ollama" refers to both the company and the CLI tool/model runtime it publishes.',
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
              'text': 'For a general-purpose local chatbot: `qwen3.8:27b` (best overall on consumer hardware, fits 24 GB at Q4), or `llama3.2:3b` on 8 GB RAM (easiest entry point). For 16 GB machines: `gpt-oss:20b` (~o3-mini level) or `mistral-small3.1`. For a coding assistant chatbot: `qwen3.8:27b` (61.7 SWE-bench Pro), `devstral-small-2` (15 GB, agentic), or `laguna-xs-2.1` (agentic, long-horizon). Pair with Open WebUI for a web-based interface that connects to Ollama\'s API at localhost:11434.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Are all Ollama models truly open source?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Not all. The Ollama library includes models with varying licences. Llama 3.x/4.x use the Meta Llama Community Licence (not OSI-approved open source -- restricts commercial use above 700M monthly active users). Mistral Small, Qwen3, Qwen3.8, Devstral, and Gemma models are Apache 2.0 (fully open source). Kimi K2.6 is Modified MIT licensed (commercial-friendly with an attribution clause). Laguna XS 2.1 uses OpenMDW-1.1 (permissive, commercial use permitted, not OSI-approved). Always check the licence before commercial deployment.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Which Dolphin model should I use with Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use Dolphin 3.0 (`ollama pull dolphin3`), not the older `dolphin-mistral` (last updated 2024, built on Mistral 0.2). Dolphin 3.0, maintained by Cognitive Computations (Eric Hartford), is built on Llama 3.1, has no built-in content filtering, and is designed as a general-purpose local model for coding, math, agentic tasks, and unrestricted chat.',
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
              'text': 'The Ollama team adds new models within days to weeks of major releases. Laguna XS 2.1 (July 2, 2026), Kimi K2.7 Code, Kimi K2.6 and Qwen3.8 all appeared within days of their releases. The current Ollama version is v0.40.5 (October 14, 2026). Follow the Ollama GitHub repository ([github.com/ollama/ollama](https://github.com/ollama/ollama)) or the Ollama Twitter/X account for new model announcements.',
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
            'name': 'What is the latest version of Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The latest stable Ollama version is v0.40.5, released October 14, 2026. A v0.40.6 pre-release followed on October 16 but is not yet marked stable. Download it from ollama.com/download, or update in place with `curl https://ollama.ai/install.sh | sh` on Linux and `brew upgrade ollama` on macOS.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Where can I find the Ollama changelog and release notes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Full release notes for every version live at github.com/ollama/ollama/releases, which lists each tag with its date and changelog. The most recent stable entries are v0.40.5 (October 14, 2026 -- NVIDIA Nemotron 3.5 Super support, cloud access for decision models), v0.40.4 (October 12 -- decision models in `ollama run --ask`, faster loading) and v0.40.0 (September 25 -- MLX by default on Apple Silicon).',
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I check which Ollama version I have installed?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Run `ollama --version` in your terminal. It prints a line such as `ollama version 0.40.5`. If the number is lower than the current release, update with `curl https://ollama.ai/install.sh | sh` (Linux) or `brew upgrade ollama` (macOS), then run `ollama --version` again to confirm.',
            }
          },
          {
            '@type': 'Question',
            'name': 'When was Ollama first released?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ollama\'s first release, v0.0.1, was published on GitHub on July 8, 2023, shortly after the repository was created on June 26, 2023. By October 2026 the project had reached v0.40.5. The full release list is at github.com/ollama/ollama/releases.',
            }
          },
          {
            '@type': 'Question',
            'name': 'What are the newest Ollama models in 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The latest additions are NVIDIA\'s Nemotron 3.5 family (Lightning: 30B MoE, 3B active; Super: 120B vision-language MoE, 12B active, up to 1M-token context; Bolt: 74B, 9B active, sized for a 24 GB GPU), alongside Laguna XS 2.1 (Poolside, OpenMDW-1.1 -- agentic long-horizon coding, SWE-bench Verified 70.9%, 33B/3B active MoE) and Kimi K2.7 Code (Moonshot AI -- coding-focused agentic model built on Kimi K2.6). They join the established 2026 lineup: Kimi K2.6 (Modified MIT, frontier MoE coding, SWE-Bench Pro 58.6), Qwen3.8-27B (best overall on consumer hardware, 61.7 SWE-bench Pro), GLM-5.3 (744B/40B active MoE, MIT, SWE-Bench Pro 58.4), and gpt-oss:20b (best small / 16 GB, ~o3-mini). Some newly listed models, such as mistral-large-4 and beam, are cloud-only (`:cloud` tag) and do not run locally. Pull commands: ollama run nemotron-3.5-lightning, ollama run nemotron-3.5-super, ollama run laguna-xs-2.1, ollama run kimi-k2.7-code:cloud, ollama run qwen3.8:27b.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Which Ollama models work best for Russian-language tasks?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 / Qwen3.8 (`ollama run qwen3:8b` or `ollama run qwen3.8:27b`) and Mistral Small 3.1 (`ollama run mistral-small3.1`) both include Russian in their native multilingual training. Qwen3 scores higher on non-English benchmark tasks; Mistral Small 3.1 has stronger conversational Russian fluency in informal testing. Neither is Russian-origin -- for regulatory data-residency requirements specific to Russia, check the model licence and your organization\'s compliance requirements separately.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'The slide deck below covers: top Ollama models by download count, performance comparison, best models by use case (chat, coding, agentic coding, reasoning, vision), DeepSeek-R1 chain-of-thought reasoning, and exact pull commands. Download the PDF as your Ollama model selection reference card.',
    },
    es: {
      freshness_tier: 'monthly',
      theme: 'Best Models',
      title: 'Ollama Última Versión 2026: v0.40.5 + Mejores Modelos por Caso de Uso',
      seoTitle: 'Ollama Última Versión 2026: v0.40.5 + 10 Mejores Modelos',
      intro: 'La versión estable actual de Ollama es la v0.40.5 (14 de octubre de 2026), que añade NVIDIA Nemotron 3.5 Super y Bolt, compatibilidad con modelos de decisión y motores llama.cpp y MLX actualizados; la v0.40.6 es una versión preliminar. Desde la v0.33.1 de agosto, Ollama convirtió MLX en el motor por defecto en Apple Silicon (v0.40.0) y añadió la integración con ChatGPT Desktop (v0.34.0). El mejor modelo general en hardware doméstico sigue siendo Qwen3.8-27B (61,7 en SWE-bench Pro según Qwen, descarga de 18 GB, cabe en una tarjeta de 24 GB o un Mac de 32 GB); el mejor para programar depende de tu equipo: consulta el desglose por caso de uso más abajo.',
      metaDescription: 'La última versión de Ollama es la v0.40.5. Consulta qué cambió desde la v0.33, los modelos más nuevos (Nemotron 3.5, GLM-5.3, Granite 4.2) y cuál es el mejor para chat, código y visión.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-es.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**La versión estable actual de Ollama es la v0.40.5 (14 de octubre de 2026); la v0.40.6 (16 de octubre) es una versión preliminar. Los modelos más nuevos son NVIDIA Nemotron 3.5 Super (120B, visión-lenguaje) y Bolt (MoE de 74B totales / 9B activos, 25 GB) en la v0.40.5, junto con Nemotron 3.5 Lightning (MoE de 30B, 3B activos) para agentes siempre activos. El mejor modelo general en hardware doméstico es Qwen3.8-27B (61,7 en SWE-bench Pro según Qwen, 18 GB, cabe en una tarjeta de 24 GB). Otras opciones destacadas: Devstral Small 2 y Laguna XS 2.1 (programación agéntica local; Kimi K2.6 es de escala frontera pero solo en la nube en Ollama), gpt-oss:20b (mejor modelo pequeño / 16 GB), qwen3:30b (equilibrado), DeepSeek-R1 (razonamiento), Gemma 4 (visión/herramientas, ahora también 12B y 31B), Granite 4.2 (IBM, Apache 2.0, 3B/8B/30B), Dolphin 3.0 (uso general sin censura) y Llama 4 Scout (contexto largo de 10M / multimodal). La familia Llama sigue siendo la más descargada.**',
      quickAnswerTop: {
        es: {
          question: '¿Cuál es la última versión de Ollama y los mejores modelos en 2026?',
          answer: 'La última versión estable de Ollama es la v0.40.5 (14 de octubre de 2026); la v0.40.6 es preliminar. Los modelos más nuevos son NVIDIA Nemotron 3.5 Super y Bolt, junto con Nemotron 3.5 Lightning para agentes siempre activos. Los mejores modelos de código abierto para Ollama en 2026 son Qwen3.8-27B (mejor general en hardware doméstico, 18 GB), Devstral Small 2 y Laguna XS 2.1 (mejor programación agéntica local; Kimi K2.6 es solo en la nube en Ollama), gpt-oss:20b (mejor pequeño / 16 GB, razonamiento ajustable), qwen3:30b (equilibrado), Gemma 4 (visión + herramientas), Llama 4 Scout (mejor contexto largo de 10M / multimodal), Dolphin 3.0 (mejor uso general sin censura) y DeepSeek-R1 (mejor razonamiento). Instala cualquiera con: ollama pull <nombre-del-modelo>',
          bullets: [
            '→Última versión: Ollama v0.40.5 (14 de octubre de 2026) — Nemotron 3.5 Super y Bolt, modelos de decisión, llama.cpp y MLX actualizados. La v0.40.6 es preliminar',
            '→Desde la v0.33: MLX es el motor por defecto en Apple Silicon (v0.40.0), modelos de Ollama en ChatGPT Desktop (v0.34.0), actualizaciones de modelos en segundo plano (v0.40.2)',
            '→Qwen3.8-27B — mejor general en hardware doméstico, 61,7 SWE-bench Pro (según Qwen), descarga de 18 GB',
            '→Devstral Small 2 (15 GB) y Laguna XS 2.1 (20 GB) — programación agéntica local; Kimi K2.6 y K2.7 Code son solo etiquetas en la nube',
            '→gpt-oss:20b — mejor modelo pequeño, funciona en 16 GB, nivel ~o3-mini, razonamiento ajustable',
            '→Nemotron 3.5 Lightning — MoE de 30B con 3B activos, contexto 1M, para agentes siempre activos',
            '→qwen3:30b — modelo equilibrado; qwen3-coder:30b para completar código',
            '→Llama 4 Scout — contexto largo (10M tokens) + multimodal, ~55 GB en Q4',
            '→DeepSeek-R1 — mejor razonamiento/matemáticas; gpt-oss:20b para razonamiento ajustable (DeepSeek lanzó después DeepSeek-V4 — Flash/Pro — como generación abierta más reciente; R1/V3 siguen siendo válidos en local)',
          ],
          updatedDate: '2026-10-17',
        },
      },
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '9 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'open source models Ollama',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Historial de versiones', anchor: '#ollama-version-history' },
        { label: 'Modelos más populares en Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'Mejores modelos por caso de uso', anchor: '#top-models-by-category' },
        { label: 'Modelos añadidos recientemente', anchor: '#new-july-2026' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: 'El mejor modelo de Ollama en 2026 es Qwen3.8-27B (61,7 en SWE-bench Pro según Qwen, 18 GB); las mejores opciones locales para programar son Qwen3.8-27B, Devstral Small 2 y Laguna XS 2.1 (Kimi K2.6 es solo en la nube en Ollama).' },
            { type: 'plain-terms', text: 'Ollama es una herramienta gratuita que te permite ejecutar modelos de IA en tu propio ordenador, sin necesitar internet ni una clave de API. Estos son los mejores modelos que puedes descargar con un solo comando, organizados según lo que realmente necesitas.' },
          ],
          items: [
            '**Mejor general en hardware doméstico**: Qwen3.8-27B (61,7 en SWE-bench Pro según Qwen, descarga de 18 GB, cabe en una tarjeta de 24 GB). Equilibrado: qwen3:30b.',
            '**Más descargado**: Llama 3.2 3B (tutoriales) y la familia Llama -- el mayor soporte de herramientas.',
            '**Mejor razonamiento**: DeepSeek-R1 (cadena de pensamiento) y gpt-oss:20b (razonamiento ajustable, nivel ~o3-mini).',
            '**Mejor para código**: Qwen3.8-27B (mejor denso), Laguna XS 2.1 (agéntico, largo plazo), Devstral Small 2 (mejor agéntico de 24B), qwen3-coder:30b (completado); Kimi K2.6 es de escala frontera pero solo en la nube en Ollama -- las puntuaciones informadas más altas para su tamaño.',
            '**Mejor pequeño / 16 GB**: gpt-oss:20b. **Mejor visión/multimodal**: Gemma 4 (E4B+). **Mejor contexto largo (10M) / multimodal grande**: Llama 4 Scout (~55 GB). **Mejor sin censura / uso general**: Dolphin 3.0. **Agentes siempre activos**: Nemotron 3.5 Lightning.',
            'La biblioteca de Ollama contiene varios cientos de modelos seleccionados (miles más mediante Modelfiles GGUF personalizados). Todos están disponibles con `ollama pull <nombre>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: '¿Cuál es la última versión de Ollama y qué ha cambiado?',
          content: [
            '**Versión actual de Ollama: v0.40.5** (lanzada el 14 de octubre de 2026). Es la última versión estable, disponible en ollama.com/download. El 16 de octubre apareció una versión preliminar v0.40.6, todavía no marcada como estable. Actualiza con `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`) y confirma con `ollama --version`.',
            '**Qué cambió en la serie v0.33–v0.40 (agosto–octubre de 2026):** v0.33.0 (21 de agosto) habilitó Claude Desktop como gateway de terceros y volvió más fiables los puntos de restauración de la caché KV. v0.34.0 (5 de septiembre) permitió usar modelos de Ollama en ChatGPT Desktop y aceleró la salida estructurada en Apple Silicon; v0.34.1 (14 de septiembre) dejó de marcar como experimental `ollama create` con safetensors en MLX. v0.40.0 (25 de septiembre) ejecuta por defecto con MLX en Apple Silicon las arquitecturas compatibles, como qwen3.8, gemma4 y qwen3.6. v0.35.0 (28 de septiembre) añadió los modelos de decisión mediante `/v1/systemone` —modelos que devuelven opciones, probabilidades y puntuaciones en lugar de texto, empezando por Nimble y Tev1— y v0.35.1 (29 de septiembre) incorporó los modelos multimodales Clef. v0.40.2 (8 de octubre) conserva copias de seguridad al actualizar modelos antiguos en segundo plano, v0.40.4 (12 de octubre) añadió `ollama run <modelo-de-decisión> --ask` y v0.40.5 (14 de octubre) sumó soporte para NVIDIA Nemotron 3.5 Super y acceso en la nube a los modelos de decisión Clef. Notas completas: github.com/ollama/ollama/releases.',
            '**Modelos más nuevos de la biblioteca (2026):**',
          ],
          items: [
            '**Nemotron 3.5 Lightning, Super y Bolt** (NVIDIA, agosto–octubre de 2026) — Lightning (11 de agosto) es un MoE de 30B con 3B de parámetros activos para agentes siempre activos en una sola GPU; Super es un MoE visión-lenguaje de 120B (12B activos, hasta 1M de tokens de contexto, herramientas y modo de razonamiento); Bolt destila Super a 74B (9B activos) para caber en una GPU NVIDIA de 24 GB. Descarga: `ollama pull nemotron-3.5-lightning`, `ollama run nemotron-3.5-super`, `ollama run nemotron-3.5-bolt`',
            '**Laguna XS 2.1** (Poolside, 2 de julio de 2026) — 33B total / 3B activos MoE diseñado para programación agéntica y trabajo local de largo alcance: planifica, escribe código, ejecuta pruebas, itera. Contexto de 256K, licencia OpenMDW-1.1. SWE-bench Verified 70,9%, SWE-bench Multilingual 63,1%. Descarga: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** (Moonshot AI, junio de 2026) — Modelo agéntico enfocado en programación, basado en Kimi K2.6, dirigido específicamente a sesiones de programación de largo alcance. Descarga: `ollama pull kimi-k2.7-code:cloud`',
            '**DeepSeek V4 Pro** (DeepSeek, 23 de abril de 2026) — Especialista en programación algorítmica, 93,5% LiveCodeBench, licencia MIT. Hermano económico DeepSeek V4 Flash para hardware más ligero. Descarga: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20 de abril de 2026) — Modelo de programación de frontera, SWE-Bench Pro 58.6, SWE-bench Verified 80,2%. Arquitectura MoE (32B activos / 1T total). Licencia Modified MIT. Descarga: `ollama pull kimi-k2.6:cloud`',
            '**Qwen3.8-27B** (Alibaba, 16 de abril de 2026) — Mejor general en hardware de consumo, 61,7 SWE-bench Pro, Apache 2.0, cabe en 24 GB con Q4. También Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench). Descarga: `ollama pull qwen3.8:27b`',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — 744B / 40B activos MoE, licencia MIT. Líder en generación de código estructurado. Descarga: `ollama pull glm-5.3`',
            '**gpt-oss** (OpenAI, 2026) — MoE de pesos abiertos: gpt-oss:20b (21B total / 3,6B activos, se ejecuta en 16 GB, ~nivel o3-mini, razonamiento ajustable) y gpt-oss:120b (80 GB). Descarga: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google, 2 de abril de 2026) — Tamaños multimodales E2B / E4B / E12B (26B MoE) / E27B (31B denso), todos con visión y tool calling. Ahora ~90% más rápido en Apple Silicon (actualización MLX de julio de 2026). E4B se ejecuta en ~6 GB de VRAM. Descarga: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.40.5\n\n# Pull the newest 2026 models\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: '¿Cuál es el historial de versiones de Ollama?',
          content: '**Ollama publicó su primera versión, v0.0.1, el 8 de julio de 2023 y llegó a v0.40.5 el 14 de octubre de 2026.** La tabla recoge las versiones que cambiaron lo que se puede hacer con Ollama; todas las etiquetas, con sus notas completas, están en github.com/ollama/ollama/releases. La numeración saltó de v0.35 a v0.40 a finales de septiembre de 2026, por lo que v0.40.0 (25 de septiembre) aparece junto a las versiones v0.35 (28-29 de septiembre) en GitHub.',
          rows: [
            { 'Versión': 'v0.40.5', 'Fecha': '14 oct 2026', 'Cambio clave': 'Nemotron 3.5 Super; modelos de decisión en la nube' },
            { 'Versión': 'v0.40.0', 'Fecha': '25 sep 2026', 'Cambio clave': 'MLX por defecto en Apple Silicon' },
            { 'Versión': 'v0.35.0', 'Fecha': '28 sep 2026', 'Cambio clave': 'Modelos de decisión vía /v1/systemone' },
            { 'Versión': 'v0.34.0', 'Fecha': '5 sep 2026', 'Cambio clave': 'Modelos de Ollama en ChatGPT Desktop' },
            { 'Versión': 'v0.33.0', 'Fecha': '21 ago 2026', 'Cambio clave': 'Gateway de Claude Desktop; caché KV' },
            { 'Versión': 'v0.32.0', 'Fecha': '11 jul 2026', 'Cambio clave': 'Agente "Chat, Code & Work"' },
            { 'Versión': 'v0.0.1', 'Fecha': '8 jul 2023', 'Cambio clave': 'Primera versión pública' },
          ],
          columns: ['Versión', 'Fecha', 'Cambio clave'],
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: '¿Qué modelos son más populares en Ollama en 2026?',
          content: [
            '**La popularidad en Ollama se mide por el número de descargas visibles en la página de biblioteca de cada modelo.** A partir de julio de 2026, los modelos más descargados siguen siendo dominados por la familia Llama de Meta -- Llama 3.2 3B es el modelo más descargado en general, en gran parte por su uso como modelo de prueba en la primera instalación. Sin embargo, Llama 4 Scout ha escalado rápidamente desde su lanzamiento en abril de 2026.',
            'Qwen3 es la familia de modelos de mayor crecimiento en la biblioteca de Ollama, con Qwen3 y la nueva variante densa Qwen3.8 desplazando rápidamente a Qwen2.5. DeepSeek-R1 experimentó grandes picos de descargas tras su lanzamiento y sigue siendo muy descargado para tareas de razonamiento. Dolphin 3.0 (Cognitive Computations, basado en Llama 3.1) sigue siendo el modelo de propósito general sin censura más descargado para usuarios que quieren un asistente local sin filtros.',
            'Meta lanzó **Llama 4** en abril de 2026 con las variantes Scout (17B activos, 109B total, MoE) y Maverick (17B activos, 400B total). Llama 4 Scout ya es estable en la biblioteca de Ollama (`ollama pull llama4:scout`). La familia Llama 4 usa arquitectura Mixture-of-Experts (MoE) — solo 17B parámetros están activos por token, pero con 109B parámetros totales Scout necesita ~55 GB de VRAM con Q4 (cabe en 24 GB solo a 1,78 bits, ~20 tok/s). Las características destacadas de Scout son su ventana de contexto de 10M tokens y su entrada multimodal, no su ajuste a hardware de consumo. Para configuraciones ligeras (8 GB de RAM), Llama 3.2 3B sigue siendo el modelo inicial más sencillo. Kimi K2.6 (Moonshot AI, licencia Modified MIT, 32B activos / 1T total MoE) obtuvo SWE-Bench Pro 58.6, empatando con GPT-5.5. Laguna XS 2.1 (Poolside) es el nuevo aspirante a programación agéntica, diseñado específicamente para sesiones de programación local de largo alcance. Qwen3.8-27B alcanzó el 61,7 SWE-bench Pro como el mejor modelo general en hardware de consumo (cabe en 24 GB con Q4). El gpt-oss:20b de OpenAI (21B total / 3,6B activos MoE) se ejecuta en 16 GB a ~nivel o3-mini con razonamiento ajustable.',
            'La biblioteca de Ollama contiene varios cientos de modelos seleccionados, siendo Laguna XS 2.1 y Kimi K2.7 Code las incorporaciones más nuevas desde la actualización de junio.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: '¿Qué modelos de Ollama funcionan mejor para tu caso de uso?',
          content: 'La calidad de la salida de un modelo depende en gran medida de cómo lo usas con prompts. Para técnicas estructuradas que funcionan con todos los modelos locales — incluyendo chain-of-thought, ejemplos few-shot y formato de salida — consulta la [guía de prompt engineering](https://www.promptquorum.com/es/prompt-engineering). Para tareas de razonamiento, el [prompt de chain-of-thought](https://www.promptquorum.com/es/prompt-engineering/chain-of-thought-prompting) mejora significativamente la calidad de salida de DeepSeek-R1 y Qwen3. Para entender los compromisos de cuantización de estos modelos, consulta la [guía de cuantización →](/es/local-llms/llm-quantization-explained). Para determinar cuánta VRAM necesita cada modelo, consulta la [guía de requisitos de VRAM →](/es/local-llms/how-much-vram-local-llm). Para flujos de trabajo de agentes con Gemma 4, consulta [Tree-of-Thought y ReAct](https://www.promptquorum.com/es/prompt-engineering/tree-of-thought-react). Para requisitos de hardware para ejecutar estos modelos, consulta la [guía de hardware →](/es/local-llms/local-llm-hardware-guide). Una vez que un modelo con tool calling de esta lista esté integrado en un bucle de varios pasos con acceso a archivos y bases de datos, consulta [Agentes de IA locales con MCP](/es/power-local-llm/local-ai-agents-with-mcp-2026) para el patrón de orquestación de código abierto.',
          items: [
            '**Chat general (principiante)**: `ollama run llama3.2:3b` -- mayor documentación, mejor modelo inicial con soporte.',
            '**Chat general (mejor opción)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro, mejor general en hardware de consumo, cabe en 24 GB con Q4. Equilibrado: `ollama run qwen3:30b`. Para máquinas de 8 GB, usa `ollama run llama3.2:3b`.',
            '**Contexto largo / multimodal**: `ollama run llama4:scout` -- contexto de 10M tokens + multimodal, MoE (17B activos/109B total). Necesita ~55 GB de VRAM con Q4 (cabe en 24 GB solo a 1,78 bits, ~20 tok/s).',
            '**Mejor pequeño / 16 GB**: `ollama run gpt-oss:20b` -- 21B total / 3,6B activos MoE, ~nivel o3-mini, razonamiento ajustable. Mayor: `ollama run gpt-oss:120b` (80 GB).',
            '**Programación en 8 GB**: `ollama run qwen3:8b` -- Mejor modelo local de programación para máquinas con 8 GB de VRAM. 76% HumanEval, 5 GB usados, multilingüe.',
            '**Inferencia general en 8 GB (si no es programación)**: `ollama run mistral:7b` -- Modelo de propósito general más rápido a 8 GB, 40-60 tok/seg.',
            '**Programación (mejor agéntico, 24B)**: `ollama run devstral-small-2` -- Mejor modelo de programación agéntico (ediciones de múltiples archivos, depuración). 16 GB de RAM. De Mistral AI.',
            '**Programación (mejor denso, 27B)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro. Mejor modelo de programación denso. 18 GB de VRAM.',
            '**Programación (MoE de frontera)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6 (empata con GPT-5.5), nivel superior. MoE (32B activos/1T total). Licencia Modified MIT. Necesita cuantización para hardware de consumo.',
            '**Programación (agéntica, largo alcance)**: `ollama run laguna-xs-2.1` -- MoE de Poolside con 33B/3B activos, SWE-bench Verified 70,9%, contexto de 256K. Diseñado para bucles de varios pasos de planificar → programar → probar → iterar. Licencia OpenMDW-1.1.',
            '**Tareas de agentes y tool calling**: `ollama run gemma4:e4b` -- Lanzado el 2 de abril de 2026. Tool calling integrado + soporte de visión. Recomendado para agentes locales, llamadas a funciones y salida estructurada. 6 GB de RAM.',
            '**Razonamiento y matemáticas**: `ollama run deepseek-r1:7b` -- modelo chain-of-thought, mejor rendimiento matemático local a 7B.',
            '**Multilingüe**: `ollama run qwen3:8b` -- 29+ idiomas nativos, soporte no inglés más sólido, 76% HumanEval.',
            '**Tareas en ruso**: `ollama run qwen3:8b` o `ollama run mistral-small3.1` -- ambos incluyen el ruso en sus datos de entrenamiento multilingüe nativo; Qwen3 obtiene mejores resultados en benchmarks no ingleses, Mistral Small tiene fluidez conversacional en ruso más sólida en pruebas informales.',
            '**Sin censura / propósito general**: `ollama run dolphin3` -- Dolphin 3.0 (Cognitive Computations, basado en Llama 3.1), sin filtrado de contenido integrado, uso general en chat/programación/agentes.',
            '**Comprensión de imágenes**: `ollama run gemma4:e4b` -- visión + tool calling. O `ollama run llama3.2-vision:11b` para visión dedicada.',
            '**Rápido y ligero**: `ollama run gemma2:2b` -- inferencia CPU más rápida, 1,7 GB de RAM.',
            '**Alta calidad (16 GB de RAM)**: `ollama run mistral-small3.1` -- calidad cercana a 70B con 14 GB de RAM.',
            '**Generación de embeddings**: `ollama run nomic-embed-text` -- modelo de embeddings de 137M de parámetros para pipelines RAG.',
            '**Q&A de documentos (RAG)**: `ollama run llama3.2` con la función RAG de Open WebUI -- combinación mejor soportada.',
            '**Domótica / IA de palabra de activación**: `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 GB VRAM) gestiona comandos de voz de Home Assistant a 20–25 tok/seg en un mini PC sin GPU dedicada. Ver [guía de integración Home Assistant + Ollama →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-es.webp',
          imageCaption: 'Selección de modelos Ollama por caso de uso: elige qwen3.8:27b (mejor general, 61,7 SWE-bench Pro) para chat y programación, kimi-k2.6 para programación de frontera, gpt-oss:20b en 16 GB, deepseek-r1:7b para matemáticas.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: '¿Qué modelos se añadieron a Ollama más recientemente?',
          content: 'Estos son los modelos más nuevos de la biblioteca de Ollama en julio de 2026, del más reciente al más antiguo. Confirma la disponibilidad con `ollama pull <modelo>` antes de construir flujos de trabajo — los nuevos modelos aparecen en ollama.com/library a los pocos días de su lanzamiento.',
          rows: [
            { 'Modelo': '[nemotron-3.5-super](https://ollama.com/library/nemotron-3.5-super)', 'Lanzamiento': 'Octubre de 2026', 'Mejor para': 'NVIDIA — MoE visión-lenguaje, 120B/12B activos, contexto 1M, herramientas', 'Comando Ollama': 'ollama run nemotron-3.5-super' },
            { 'Modelo': '[nemotron-3.5-bolt](https://ollama.com/library/nemotron-3.5-bolt)', 'Lanzamiento': 'Octubre de 2026', 'Mejor para': 'NVIDIA — MoE 74B/9B activos para una GPU de 24 GB', 'Comando Ollama': 'ollama run nemotron-3.5-bolt' },
            { 'Modelo': '[nemotron-3.5-lightning](https://ollama.com/library/nemotron-3.5-lightning)', 'Lanzamiento': '11 de agosto de 2026', 'Mejor para': 'NVIDIA — MoE 30B/3B activos para agentes siempre activos', 'Comando Ollama': 'ollama run nemotron-3.5-lightning' },
            { 'Modelo': '[laguna-xs-2.1](https://ollama.com/library/laguna-xs-2.1)', 'Lanzamiento': '2 de julio de 2026', 'Mejor para': 'Poolside — programación agéntica, 33B/3B activos MoE, SWE-bench Verified 70,9%, contexto 256K', 'Comando Ollama': 'ollama run laguna-xs-2.1' },
            { 'Modelo': 'kimi-k2.7-code', 'Lanzamiento': 'Junio de 2026', 'Mejor para': 'Moonshot AI — modelo agéntico enfocado en programación, basado en Kimi K2.6', 'Comando Ollama': 'ollama run kimi-k2.7-code:cloud' },
            { 'Modelo': 'deepseek-v4-pro', 'Lanzamiento': '23 de abril de 2026', 'Mejor para': 'Programación algorítmica, 93,5% LiveCodeBench, MIT', 'Comando Ollama': 'ollama run deepseek-v4-pro' },
            { 'Modelo': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Lanzamiento': '20 de abril de 2026', 'Mejor para': 'Programación de frontera (SWE-Bench Pro 58.6), MoE (32B/1T), Modified MIT', 'Comando Ollama': 'ollama run kimi-k2.6:cloud' },
            { 'Modelo': '[qwen3.8:27b](https://ollama.com/library/qwen3)', 'Lanzamiento': '16 de abril de 2026', 'Mejor para': 'Mejor general en hardware de consumo, 61,7 SWE-bench Pro, cabe en 24 GB Q4', 'Comando Ollama': 'ollama run qwen3.8:27b' },
            { 'Modelo': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Lanzamiento': '2026', 'Mejor para': 'Equilibrado todoterreno; qwen3-coder:30b para completado de código', 'Comando Ollama': 'ollama run qwen3:30b' },
            { 'Modelo': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Lanzamiento': '2026', 'Mejor para': 'Mejor pequeño / 16 GB, ~o3-mini, razonamiento ajustable (también gpt-oss:120b)', 'Comando Ollama': 'ollama run gpt-oss:20b' },
            { 'Modelo': 'glm-5.3', 'Lanzamiento': 'Z.ai', 'Mejor para': '744B/40B activos MoE, licencia MIT', 'Comando Ollama': 'ollama run glm-5.3' },
            { 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Lanzamiento': '2 de abril de 2026', 'Mejor para': 'Visión + tool calling (E2B/E4B/E12B/E27B)', 'Comando Ollama': 'ollama run gemma4:e4b' },
            { 'Modelo': 'deepseek-v4-flash', 'Lanzamiento': 'Abril/mayo de 2026', 'Mejor para': 'Programación económica (78/100 en el mundo real)', 'Comando Ollama': 'ollama run deepseek-v4-flash' },
            { 'Modelo': '[qwen3:8b](https://ollama.com/library/qwen3)', 'Lanzamiento': '2026', 'Mejor para': 'HumanEval 76% a 7B, multilingüe', 'Comando Ollama': 'ollama run qwen3:8b' },
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
          content: 'A partir de julio de 2026, estos modelos en Ollama admiten entrada de imágenes (multimodal): Gemma 4 admite tanto visión COMO tool calling — único entre los modelos de visión en Ollama, y ahora se ejecuta casi un 90% más rápido en Apple Silicon tras la actualización MLX de julio.',
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
          content: 'Los recuentos de descargas siguen favoreciendo a Llama 3.x por la prevalencia de tutoriales. Para nuevos proyectos en julio de 2026, prefiere Qwen3.8-27B (mejor general en hardware de consumo), Kimi K2.6 o Laguna XS 2.1 (programación), gpt-oss:20b y qwen3:30b.',
          rows: [
            { '#': '1', 'Modelo': '[Qwen3.8-27B](https://ollama.com/library/qwen3)', 'Mejor para': 'Mejor general en hardware de consumo', 'RAM': '24 GB (Q4)', 'HumanEval': '61,7 SWE-bench Pro' },
            { '#': '2', 'Modelo': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Mejor para': 'Programación de frontera, MoE (32B/1T), Modified MIT', 'RAM': 'Cuantizado', 'HumanEval': '58,6 SWE-Bench Pro' },
            { '#': '3', 'Modelo': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Mejor para': 'Mejor pequeño / 16 GB, razonamiento ajustable', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Modelo': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Mejor para': 'Equilibrado; qwen3-coder:30b para código', 'RAM': '~18 GB', 'HumanEval': 'sólido' },
            { '#': '5', 'Modelo': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Mejor para': 'Programación agéntica, largo alcance (planificar/programar/probar/iterar)', 'RAM': 'Cuantizado', 'HumanEval': '70,9% SWE-bench Verified' },
            { '#': '6', 'Modelo': '[Devstral Small 24B](https://ollama.com/library/devstral-small-2)', 'Mejor para': 'Programación agéntica (multiarchivo)', 'RAM': '15 GB', 'HumanEval': '65.8% (Verified)' },
            { '#': '7', 'Modelo': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Mejor para': 'Razonamiento, matemáticas', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '8', 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Mejor para': 'Visión + tool calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Listo para agentes' },
            { '#': '9', 'Modelo': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Mejor para': 'Contexto largo 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '10', 'Modelo': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Mejor para': 'Primer modelo, chat general', 'RAM': '2,5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Modelo', 'Mejor para', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-es.webp',
          imageCaption: 'Mejores modelos Ollama julio de 2026: Qwen3.8-27B (mejor general, 24 GB Q4), Kimi K2.6, Laguna XS 2.1 (programación agéntica), gpt-oss:20b. Llama 4 Scout para contexto de 10M tokens (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: '¿Cómo explorar la biblioteca de modelos de Ollama?',
          content: 'Hay dos formas de trabajar con los modelos de Ollama. **Cambiar modelos instalados:** En la app de Ollama para Mac, haz clic en el botón desplegable de modelo en la parte inferior del campo de entrada del chat (muestra el nombre del modelo actual, p. ej. "gemma3:1b") para cambiar entre cualquier modelo instalado localmente. **Encontrar y descargar nuevos modelos:** Visita ollama.com/library para explorar varios cientos de modelos seleccionados por categoría, luego usa los comandos CLI a continuación para descargarlos y gestionarlos.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Modelos Ollama de código abierto: contexto regional',
          content: [
            '**UE / RGPD + cumplimiento de licencias.** Para las organizaciones de la UE que despliegan modelos de Ollama en producción, la licencia importa tanto como el rendimiento. Apache 2.0 (totalmente abierta, uso comercial permitido): Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Licencia Comunitaria de Meta Llama (uso comercial restringido por encima de 700M de usuarios activos mensuales): Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (uso comercial permitido): DeepSeek-R1 7B y 14B. MIT modificada (uso comercial permitido con cláusula de atribución): Kimi K2.6. OpenMDW-1.1 (permisiva, uso comercial permitido): Laguna XS 2.1. Comprueba siempre los términos de licencia antes del despliegue comercial. Para empresas de la UE en sectores regulados, los modelos de Mistral (Francia, Apache 2.0) como Devstral Small 2 son una opción por defecto sensata: origen europeo y licencia permisiva. Ejecutar los modelos íntegramente en local con Ollama significa que los prompts no se envían a servidores externos; esto ayuda, pero por sí solo no basta, para cumplir el RGPD (una etiqueta `:cloud` sí envía datos al servicio alojado de Ollama).',
            '**Japón (METI).** Para despliegues empresariales japoneses con Ollama, Qwen3 / Qwen3.8 es una familia recomendable: maneja el texto japonés de forma nativa, lo que ayuda al tiempo de inferencia y a la caché KV. Para flujos de programación en japonés: Qwen3.8-27B (61,7 en SWE-bench Pro según Qwen) gestiona de forma nativa los comentarios de código en japonés. La documentación de gobernanza de IA del METI suele pedir la versión exacta del modelo. Usa `ollama show <modelo>` para obtener la especificación completa (parámetros, cuantización y longitud de contexto) para los registros de cumplimiento.',
            '**China.** Según las Medidas de IA Generativa de la CAC (2023), las organizaciones que prestan servicios de IA a usuarios finales deben registrar los modelos empleados. Qwen3 / Qwen3.8 (Alibaba, Apache 2.0) es una opción natural para despliegues empresariales chinos con Ollama: origen chino, licencia Apache 2.0 y buen rendimiento en chino. Kimi K2.6 (Moonshot AI, MIT modificada) también es de origen chino, pero Ollama solo lo lista como etiqueta en la nube y la ejecución local exige hardware de clase servidor. Comandos: `ollama run qwen3.8:27b` para la mejor calidad, `ollama run qwen3:8b` para velocidad. DeepSeek-R1 (licencia MIT) es adecuado para razonamiento. Para datos procesados en local con Ollama, la inferencia en sí no activa los requisitos de transferencia transfronteriza de la PIPL; revisa tus propias obligaciones de cumplimiento.',
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
            '[Modelos de visión de Ollama (2026)](/es/power-local-llm/ollama-vision-models-review) -- una guía práctica y dedicada para ejecutar modelos con capacidad de imagen mediante Ollama, con sintaxis real de CLI/API.',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- configura Ollama y descarga tu primer modelo de esta lista en menos de 5 minutos',
            '[Mejores LLMs locales 2026](/es/local-llms/best-local-llms-2026) -- ranking completo de benchmarks entre todos los modelos de peso abierto incluyendo el nivel 70B',
            '[Mejores LLMs locales para programación](/es/local-llms/best-local-llms-for-coding) -- comparación más profunda de Qwen3.8 / Qwen2.5-Coder 32B, DeepSeek-Coder y Starcoder2',
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
            '[Guía de hardware LLM local](/es/local-llms/local-llm-hardware-guide) — ¿Tu equipo puede correr estos modelos? →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Preguntas frecuentes sobre modelos de código abierto en Ollama',
          faqs: [
            { q: '¿Cuál es el mejor modelo de Ollama para programar?', a: 'Para programación de frontera y flujos agénticos, Kimi K2.6 y Laguna XS 2.1 son las opciones más capaces de la biblioteca; Kimi K2.7 Code, derivado de K2.6, está directamente enfocado en programación. Si trabajas con 16 GB de RAM, gpt-oss:20b es la mejor opción pequeña, y qwen3:30b ofrece el equilibrio más razonable entre calidad y tamaño. Elige según la RAM disponible antes que por el ranking: un modelo que no cabe en memoria no te sirve por muy bueno que sea.' },
            { q: '¿Qué es Laguna XS 2.1 y para qué sirve?', a: 'Laguna XS 2.1 es un modelo de Poolside disponible en la biblioteca de Ollama. Usa una arquitectura MoE de 33B parámetros con 3B activos, lo que le permite rendir por encima de su coste de memoria, y está orientado a programación agéntica de largo alcance: tareas en las que el modelo encadena varios pasos sobre un repositorio en lugar de completar una sola función. Es uno de los añadidos más recientes a la biblioteca, junto con Kimi K2.7 Code.' },
            { q: '¿Cuántos modelos hay en la biblioteca de Ollama?', a: 'La biblioteca de Ollama contiene varios cientos de modelos seleccionados (con soporte oficial), y crece cada semana con nuevos lanzamientos de peso abierto. Hugging Face aloja miles de modelos GGUF adicionales que se pueden cargar mediante Ollama usando Modelfiles personalizados.' },
            { q: '¿Cuál es el nombre oficial de la empresa detrás de Ollama?', a: 'La empresa es Ollama Inc., una startup con financiación Serie B con sede en Palo Alto, California, fundada en 2023 por Jeffrey Morgan y Michael Chiang. "Ollama" se refiere tanto a la empresa como a la herramienta CLI/runtime de modelos que publica.' },
            { q: '¿Puedo usar modelos de Hugging Face directamente en Ollama?', a: 'Sí. Descarga un archivo GGUF de Hugging Face y crea un Modelfile: `FROM ./model.gguf`. Luego ejecuta `ollama create mimodelo -f Modelfile`. Esto funciona para cualquier archivo GGUF incluyendo ajustes finos y modelos que no están en la biblioteca oficial de Ollama.' },
            { q: '¿Qué modelo de Ollama es mejor para construir un chatbot local?', a: 'Para un chatbot local de propósito general: `qwen3.8:27b` (mejor general en hardware de consumo, cabe en 24 GB con Q4), o `llama3.2:3b` con 8 GB de RAM (punto de entrada más sencillo). Para máquinas de 16 GB: `gpt-oss:20b` (~nivel o3-mini) o `mistral-small3.1`. Para un chatbot asistente de programación: `qwen3.8:27b` (61,7 SWE-bench Pro), `devstral-small-2` (15 GB, agéntico) o `laguna-xs-2.1` (agéntico, largo alcance). Combínalo con Open WebUI para una interfaz web que se conecta a la API de Ollama en localhost:11434.' },
            { q: '¿Son todos los modelos de Ollama verdaderamente de código abierto?', a: 'No todos. La biblioteca de Ollama incluye modelos con licencias variadas. Llama 3.x/4.x usan la Meta Llama Community Licence (no aprobada por OSI como código abierto -- restringe el uso comercial por encima de 700M de usuarios activos mensuales). Mistral Small, Qwen3, Qwen3.8, Devstral y los modelos Gemma son Apache 2.0 (completamente de código abierto). Kimi K2.6 tiene licencia Modified MIT (compatible con uso comercial con cláusula de atribución). Laguna XS 2.1 usa OpenMDW-1.1 (permisiva, uso comercial permitido, no aprobada por OSI). Siempre verifica la licencia antes del despliegue comercial.' },
            { q: '¿Qué modelo Dolphin debería usar con Ollama?', a: 'Usa Dolphin 3.0 (`ollama pull dolphin3`), no el más antiguo `dolphin-mistral` (última actualización en 2024, basado en Mistral 0.2). Dolphin 3.0, mantenido por Cognitive Computations (Eric Hartford), está basado en Llama 3.1, no tiene filtrado de contenido integrado y está diseñado como modelo local de propósito general para programación, matemáticas, tareas agénticas y chat sin restricciones.' },
            { q: '¿Qué modelo de embeddings debería usar con Ollama para RAG?', a: '`nomic-embed-text` es la opción estándar -- un modelo de 137M de parámetros que genera embeddings de 768 dimensiones, se ejecuta en milisegundos por documento y está específicamente diseñado para tareas de recuperación. Descárgalo con `ollama pull nomic-embed-text`. Úsalo con el RAG integrado de Open WebUI, OllamaEmbeddings de LangChain o LlamaIndex.' },
            { q: '¿Cuál es la última versión de Ollama?', a: 'La última versión estable de Ollama es la v0.40.5, publicada el 14 de octubre de 2026. El 16 de octubre apareció una versión preliminar v0.40.6 que todavía no está marcada como estable. Descárgala en ollama.com/download o actualiza con `curl https://ollama.ai/install.sh | sh` en Linux y `brew upgrade ollama` en macOS.' },
            { q: '¿Dónde puedo ver el changelog y las notas de versión de Ollama?', a: 'Las notas de cada versión están en github.com/ollama/ollama/releases, con la fecha y el changelog de cada tag. Las entradas estables más recientes son v0.40.5 (14 de octubre de 2026 -- soporte de NVIDIA Nemotron 3.5 Super, acceso en la nube a los modelos de decisión), v0.40.4 (12 de octubre -- modelos de decisión en `ollama run --ask`, carga más rápida) y v0.40.0 (25 de septiembre -- MLX por defecto en Apple Silicon).' },
            { q: '¿Cómo compruebo qué versión de Ollama tengo instalada?', a: 'Ejecuta `ollama --version` en la terminal. Devuelve una línea como `ollama version 0.40.5`. Si el número es inferior al de la versión actual, actualiza con `curl https://ollama.ai/install.sh | sh` (Linux) o `brew upgrade ollama` (macOS) y vuelve a ejecutar `ollama --version` para confirmarlo.' },
            { q: '¿Cuándo se lanzó Ollama por primera vez?', a: 'La primera versión de Ollama, v0.0.1, se publicó en GitHub el 8 de julio de 2023, poco después de crearse el repositorio el 26 de junio de 2023. En octubre de 2026 el proyecto había llegado a v0.40.5. La lista completa está en github.com/ollama/ollama/releases.' },
            { q: '¿Con qué frecuencia se actualiza la biblioteca de Ollama con nuevos modelos?', a: 'El equipo de Ollama añade nuevos modelos en días o semanas tras los lanzamientos principales. Laguna XS 2.1 (2 de julio de 2026), Kimi K2.7 Code, Kimi K2.6 y Qwen3.8 aparecieron a los pocos días de sus lanzamientos. La versión actual de Ollama es v0.40.5 (14 de octubre de 2026). Sigue el repositorio GitHub de Ollama ([github.com/ollama/ollama](https://github.com/ollama/ollama)) o la cuenta de Twitter/X de Ollama para anuncios de nuevos modelos.' },
            { q: '¿Cuál es la diferencia entre `ollama pull` y `ollama run`?', a: '`ollama pull` descarga el archivo del modelo al almacenamiento local (operación única). `ollama run` inicia una sesión interactiva inmediatamente después de descargar, o reutiliza el modelo ya descargado si está disponible. Puedes descargar una vez y ejecutar múltiples veces sin volver a descargar.' },
            { q: '¿Puedo ejecutar varios modelos simultáneamente en la misma máquina?', a: 'Sí, si tu hardware tiene suficiente VRAM. Usa ventanas de terminal o sesiones de shell separadas -- una ventana ejecuta `ollama run llama3.2` mientras otra ejecuta `ollama run qwen2.5:7b`. Ollama gestiona automáticamente el uso compartido de VRAM. Monitorea `nvidia-smi` o la actividad del sistema para evitar sobrecargas.' },
            { q: '¿Cómo actualizo un modelo a la última versión?', a: '`ollama pull [nombre-del-modelo]` verifica las actualizaciones y descarga la última versión si está disponible. Para revertir o usar versiones específicas, usa tags de versión: `ollama pull llama3.1:8b` o `ollama pull llama3.1:8b-instruct-q4_K_M`. Comprueba las versiones disponibles con `ollama show [nombre-del-modelo]`.' },
            { q: '¿Los modelos de código abierto en Ollama son realmente gratuitos para uso comercial?', a: 'La mayoría sí, pero no todos. Llama 3.x (Meta Llama Community Licence) restringe el uso comercial por encima de 700M de usuarios activos mensuales. Mistral Small, Qwen3 y Gemma 3 usan Apache 2.0 (completamente compatible con uso comercial). Verifica siempre la licencia antes del despliegue empresarial -- consulta la página de Hugging Face del modelo o la entrada de la biblioteca de Ollama.' },
            { q: '¿Qué modelos de Ollama funcionan mejor para tareas en ruso?', a: 'Qwen3 / Qwen3.8 (`ollama run qwen3:8b` o `ollama run qwen3.8:27b`) y Mistral Small 3.1 (`ollama run mistral-small3.1`) incluyen ambos el ruso en su entrenamiento multilingüe nativo. Qwen3 obtiene mejores resultados en tareas de benchmark no inglesas; Mistral Small 3.1 tiene una fluidez conversacional en ruso más sólida en pruebas informales. Ninguno es de origen ruso.' },
            { q: '¿Cuáles son los mejores nuevos modelos de Ollama en julio de 2026?', a: 'Las últimas incorporaciones son la familia Nemotron 3.5 de NVIDIA (Lightning: MoE de 30B con 3B activos; Super: MoE visión-lenguaje de 120B con 12B activos y hasta 1M de tokens de contexto; Bolt: 74B con 9B activos para una GPU de 24 GB), junto con Laguna XS 2.1 (Poolside, OpenMDW-1.1 -- programación agéntica de largo alcance, SWE-bench Verified 70,9%, 33B/3B activos MoE) y Kimi K2.7 Code (Moonshot AI -- modelo agéntico enfocado en programación basado en Kimi K2.6). Se suman a la alineación establecida de 2026: Kimi K2.6 (Modified MIT, MoE de frontera para programación, SWE-Bench Pro 58.6), Qwen3.8-27B (mejor general en hardware de consumo, 61,7 SWE-bench Pro), GLM-5.3 (744B/40B activos MoE, MIT, SWE-Bench Pro 58.4) y gpt-oss:20b (mejor pequeño / 16 GB, ~o3-mini). Algunos modelos recién listados, como mistral-large-4 y beam, son solo en la nube (etiqueta `:cloud`) y no se ejecutan en local. Comandos: ollama run nemotron-3.5-lightning, ollama run nemotron-3.5-super, ollama run laguna-xs-2.1, ollama run kimi-k2.7-code:cloud, ollama run qwen3.8:27b.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Especificaciones oficiales para Llama 4 Scout (17B activos, 109B total, MoE) y variantes Maverick.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- Arquitectura chain-of-thought y benchmark MATH (52%) para DeepSeek-R1.',
            '[Ollama. (2026). "qwen3.8." ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8) -- 61,7 SWE-bench Pro para el mejor modelo de programación denso.',
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
        'headline': 'Ollama última versión 2026: v0.40.5 + mejores modelos por caso de uso',
        'description': '¿Buscas la última versión de Ollama y sus modelos? Consulta v0.40.5, el changelog completo, qué hay de nuevo y qué modelos vale la pena usar para chat, programación y razonamiento.',
        'url': 'https://www.promptquorum.com/es/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-10-17',
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Mejores modelos Ollama 2026' },
          { '@type': 'Thing', 'name': 'Lista de modelos Ollama julio de 2026' },
          { '@type': 'Thing', 'name': 'DeepSeek-R1 Ollama' },
          { '@type': 'Thing', 'name': 'Gemma 4 Ollama' },
          { '@type': 'Thing', 'name': 'Qwen3.8 / Qwen3-Coder Ollama' },
          { '@type': 'Thing', 'name': 'Laguna XS 2.1 Ollama' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Mejores modelos de código abierto en Ollama -- Julio de 2026',
        'description': 'Los modelos de código abierto más descargados y con mejor rendimiento disponibles a través de Ollama',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen3.8-27B', 'url': 'https://ollama.com/library/qwen3.8', 'description': 'Mejor general en hardware de consumo. 61,7 SWE-bench Pro. Cabe en 24 GB con Q4. Apache 2.0. ollama run qwen3.8:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://ollama.com/library/kimi-k2.6', 'description': 'Modelo de programación MoE de frontera. SWE-Bench Pro 58.6 (empata con GPT-5.5). 32B activos/1T total. Licencia Modified MIT. ollama run kimi-k2.6:cloud' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'Mejor pequeño / 16 GB. 21B total / 3,6B activos MoE. ~nivel o3-mini, razonamiento ajustable. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'Modelo equilibrado todoterreno; qwen3-coder:30b para completado de código. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'url': 'https://ollama.com/library/laguna-xs-2.1', 'description': 'Programación agéntica, largo alcance. 33B/3B activos MoE. SWE-bench Verified 70,9%. Licencia OpenMDW-1.1. ollama run laguna-xs-2.1' },
          { '@type': 'ListItem', 'position': 6, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'Mejor razonamiento. 5 GB de RAM. 52% MATH vs 28% Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 7, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma4', 'description': 'Mejor visión/multimodal (E4B+). Tool calling + visión, ~90% más rápido en Apple Silicon (julio de 2026). ~6 GB de RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama4', 'description': 'Mejor contexto largo (10M tokens) + multimodal grande. MoE 17B activos/109B total. ~55 GB con Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral-small', 'description': 'Mejor programación agéntica (multiarchivo). Ediciones de múltiples archivos, depuración. 16 GB de RAM. ollama run devstral-small-2' },
          { '@type': 'ListItem', 'position': 10, 'name': 'mistral-small3.1', 'url': 'https://ollama.com/library/mistral-small3.1', 'description': 'Mejor calidad en el nivel de 16 GB. 14 GB de RAM. 74% HumanEval. Apache 2.0. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 11, 'name': 'gemma2:2b', 'url': 'https://ollama.com/library/gemma2', 'description': 'El más rápido y ligero. 1,7 GB de RAM. Mejor inferencia en CPU. ollama run gemma2:2b' },
          { '@type': 'ListItem', 'position': 12, 'name': 'phi4-mini', 'url': 'https://ollama.com/library/phi4-mini', 'description': 'Mejor razonamiento por debajo de 4 GB. 2,5 GB de RAM. 70% HumanEval. ollama run phi4-mini' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Descargar el tag de modelo más grande por defecto sin verificar la RAM',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ejecutar `ollama pull llama3.3` sin especificar un tag descarga la variante predeterminada, que suele ser la cuantización estándar más grande. En una máquina con 8 GB de RAM, descargar llama3.3 (70B a ~40 GB) fallará o causará un uso severo de swap. Siempre especifica la variante: `ollama pull llama3.2:3b` para máquinas de 8 GB.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Usar un modelo general cuando existe un modelo específico para la tarea',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para tareas de programación, `qwen2.5-coder:7b` obtiene un 72% en HumanEval mientras que el general `qwen2.5:7b` también obtiene un 72% -- pero `qwen2.5-coder` incluye soporte FIM para completado de código. Para razonamiento/matemáticas, `deepseek-r1:7b` obtiene 52% en MATH frente al 28% de `mistral:7b`. Los modelos específicos de tarea existen en la biblioteca de Ollama por una razón.',
            },
          },
          {
            '@type': 'Question',
            'name': 'No verificar que un modelo está disponible antes de construir un flujo de trabajo',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La biblioteca de Ollama cambia con el tiempo -- los modelos se añaden y ocasionalmente se eliminan. Antes de construir un pipeline de producción en torno a un modelo específico, confirma que está en la biblioteca (`ollama list` localmente, o consulta ollama.com/library). Fija versiones específicas de modelos en flujos de trabajo de producción: `ollama pull llama3.1:8b-instruct-q4_K_M`.',
            },
          },
          {
            '@type': 'Question',
            'name': 'No especificar un tag de cuantización para modelos grandes',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ejecutar `ollama pull qwen2.5-coder:32b` sin un sufijo de cuantización descarga la variante predeterminada -- que puede ser mayor de lo que tu VRAM puede manejar. Para 16 GB de VRAM, descarga la variante explícita Q4_K_M: `ollama pull qwen2.5-coder:32b-instruct-q4_K_M`. Ejecuta `ollama show <modelo>` después de descargar para confirmar que los requisitos de VRAM coinciden con tu hardware.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Esperar que DeepSeek-R1 sea tan rápido como los modelos de chat estándar',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DeepSeek-R1 genera tokens de razonamiento chain-of-thought explícito antes de su respuesta final -- por eso supera a los modelos estándar en matemáticas y lógica, pero produce entre 3 y 5 veces más tokens por respuesta. Para chat rápido o respuestas de una línea, usa `llama3.1:8b`. Reserva DeepSeek-R1 para tareas donde la precisión del razonamiento importa más que la velocidad.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el mejor modelo de Ollama para programar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para programación de frontera y flujos agénticos, Kimi K2.6 y Laguna XS 2.1 son las opciones más capaces de la biblioteca; Kimi K2.7 Code, derivado de K2.6, está directamente enfocado en programación. Si trabajas con 16 GB de RAM, gpt-oss:20b es la mejor opción pequeña, y qwen3:30b ofrece el equilibrio más razonable entre calidad y tamaño. Elige según la RAM disponible antes que por el ranking: un modelo que no cabe en memoria no te sirve por muy bueno que sea.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué es Laguna XS 2.1 y para qué sirve?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Laguna XS 2.1 es un modelo de Poolside disponible en la biblioteca de Ollama. Usa una arquitectura MoE de 33B parámetros con 3B activos, lo que le permite rendir por encima de su coste de memoria, y está orientado a programación agéntica de largo alcance: tareas en las que el modelo encadena varios pasos sobre un repositorio en lugar de completar una sola función. Es uno de los añadidos más recientes a la biblioteca, junto con Kimi K2.7 Code.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuántos modelos hay en la biblioteca de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La biblioteca de Ollama contiene varios cientos de modelos seleccionados (con soporte oficial), y crece cada semana con nuevos lanzamientos de peso abierto. Hugging Face aloja miles de modelos GGUF adicionales que se pueden cargar mediante Ollama usando Modelfiles personalizados.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el nombre oficial de la empresa detrás de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La empresa es Ollama Inc., una startup con financiación Serie B con sede en Palo Alto, California, fundada en 2023 por Jeffrey Morgan y Michael Chiang. "Ollama" se refiere tanto a la empresa como a la herramienta CLI/runtime de modelos que publica.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar modelos de Hugging Face directamente en Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Descarga un archivo GGUF de Hugging Face y crea un Modelfile: `FROM ./model.gguf`. Luego ejecuta `ollama create mimodelo -f Modelfile`. Esto funciona para cualquier archivo GGUF incluyendo ajustes finos y modelos que no están en la biblioteca oficial de Ollama.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelo de Ollama es mejor para construir un chatbot local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para un chatbot local de propósito general: `qwen3.8:27b` (mejor general en hardware de consumo, cabe en 24 GB con Q4), o `llama3.2:3b` con 8 GB de RAM (punto de entrada más sencillo). Para máquinas de 16 GB: `gpt-oss:20b` (~nivel o3-mini) o `mistral-small3.1`. Para un chatbot asistente de programación: `qwen3.8:27b` (61,7 SWE-bench Pro), `devstral-small-2` (15 GB, agéntico) o `laguna-xs-2.1` (agéntico, largo alcance). Combínalo con Open WebUI para una interfaz web que se conecta a la API de Ollama en localhost:11434.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Son todos los modelos de Ollama verdaderamente de código abierto?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No todos. La biblioteca de Ollama incluye modelos con licencias variadas. Llama 3.x/4.x usan la Meta Llama Community Licence (no aprobada por OSI como código abierto -- restringe el uso comercial por encima de 700M de usuarios activos mensuales). Mistral Small, Qwen3, Qwen3.8, Devstral y los modelos Gemma son Apache 2.0 (completamente de código abierto). Kimi K2.6 tiene licencia Modified MIT (compatible con uso comercial con cláusula de atribución). Laguna XS 2.1 usa OpenMDW-1.1 (permisiva, uso comercial permitido, no aprobada por OSI). Siempre verifica la licencia antes del despliegue comercial.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelo Dolphin debería usar con Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Usa Dolphin 3.0 (`ollama pull dolphin3`), no el más antiguo `dolphin-mistral` (última actualización en 2024, basado en Mistral 0.2). Dolphin 3.0, mantenido por Cognitive Computations (Eric Hartford), está basado en Llama 3.1, no tiene filtrado de contenido integrado y está diseñado como modelo local de propósito general para programación, matemáticas, tareas agénticas y chat sin restricciones.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelo de embeddings debería usar con Ollama para RAG?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`nomic-embed-text` es la opción estándar -- un modelo de 137M de parámetros que genera embeddings de 768 dimensiones, se ejecuta en milisegundos por documento y está específicamente diseñado para tareas de recuperación. Descárgalo con `ollama pull nomic-embed-text`. Úsalo con el RAG integrado de Open WebUI, OllamaEmbeddings de LangChain o LlamaIndex.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la última versión de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La última versión estable de Ollama es la v0.40.5, publicada el 14 de octubre de 2026. El 16 de octubre apareció una versión preliminar v0.40.6 que todavía no está marcada como estable. Descárgala en ollama.com/download o actualiza con `curl https://ollama.ai/install.sh | sh` en Linux y `brew upgrade ollama` en macOS.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Dónde puedo ver el changelog y las notas de versión de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Las notas de cada versión están en github.com/ollama/ollama/releases, con la fecha y el changelog de cada tag. Las entradas estables más recientes son v0.40.5 (14 de octubre de 2026 -- soporte de NVIDIA Nemotron 3.5 Super, acceso en la nube a los modelos de decisión), v0.40.4 (12 de octubre -- modelos de decisión en `ollama run --ask`, carga más rápida) y v0.40.0 (25 de septiembre -- MLX por defecto en Apple Silicon).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo compruebo qué versión de Ollama tengo instalada?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ejecuta `ollama --version` en la terminal. Devuelve una línea como `ollama version 0.40.5`. Si el número es inferior al de la versión actual, actualiza con `curl https://ollama.ai/install.sh | sh` (Linux) o `brew upgrade ollama` (macOS) y vuelve a ejecutar `ollama --version` para confirmarlo.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuándo se lanzó Ollama por primera vez?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La primera versión de Ollama, v0.0.1, se publicó en GitHub el 8 de julio de 2023, poco después de crearse el repositorio el 26 de junio de 2023. En octubre de 2026 el proyecto había llegado a v0.40.5. La lista completa está en github.com/ollama/ollama/releases.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Con qué frecuencia se actualiza la biblioteca de Ollama con nuevos modelos?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El equipo de Ollama añade nuevos modelos en días o semanas tras los lanzamientos principales. Laguna XS 2.1 (2 de julio de 2026), Kimi K2.7 Code, Kimi K2.6 y Qwen3.8 aparecieron a los pocos días de sus lanzamientos. La versión actual de Ollama es v0.40.5 (14 de octubre de 2026). Sigue el repositorio GitHub de Ollama ([github.com/ollama/ollama](https://github.com/ollama/ollama)) o la cuenta de Twitter/X de Ollama para anuncios de nuevos modelos.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre `ollama pull` y `ollama run`?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull` descarga el archivo del modelo al almacenamiento local (operación única). `ollama run` inicia una sesión interactiva inmediatamente después de descargar, o reutiliza el modelo ya descargado si está disponible. Puedes descargar una vez y ejecutar múltiples veces sin volver a descargar.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar varios modelos simultáneamente en la misma máquina?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, si tu hardware tiene suficiente VRAM. Usa ventanas de terminal o sesiones de shell separadas -- una ventana ejecuta `ollama run llama3.2` mientras otra ejecuta `ollama run qwen2.5:7b`. Ollama gestiona automáticamente el uso compartido de VRAM. Monitorea `nvidia-smi` o la actividad del sistema para evitar sobrecargas.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo actualizo un modelo a la última versión?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull [nombre-del-modelo]` verifica las actualizaciones y descarga la última versión si está disponible. Para revertir o usar versiones específicas, usa tags de versión: `ollama pull llama3.1:8b` o `ollama pull llama3.1:8b-instruct-q4_K_M`. Comprueba las versiones disponibles con `ollama show [nombre-del-modelo]`.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Los modelos de código abierto en Ollama son realmente gratuitos para uso comercial?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La mayoría sí, pero no todos. Llama 3.x (Meta Llama Community Licence) restringe el uso comercial por encima de 700M de usuarios activos mensuales. Mistral Small, Qwen3 y Gemma 3 usan Apache 2.0 (completamente compatible con uso comercial). Verifica siempre la licencia antes del despliegue empresarial -- consulta la página de Hugging Face del modelo o la entrada de la biblioteca de Ollama.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué modelos de Ollama funcionan mejor para tareas en ruso?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 / Qwen3.8 (`ollama run qwen3:8b` o `ollama run qwen3.8:27b`) y Mistral Small 3.1 (`ollama run mistral-small3.1`) incluyen ambos el ruso en su entrenamiento multilingüe nativo. Qwen3 obtiene mejores resultados en tareas de benchmark no inglesas; Mistral Small 3.1 tiene una fluidez conversacional en ruso más sólida en pruebas informales. Ninguno es de origen ruso.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los mejores nuevos modelos de Ollama en julio de 2026?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Las últimas incorporaciones son la familia Nemotron 3.5 de NVIDIA (Lightning: MoE de 30B con 3B activos; Super: MoE visión-lenguaje de 120B con 12B activos y hasta 1M de tokens de contexto; Bolt: 74B con 9B activos para una GPU de 24 GB), junto con Laguna XS 2.1 (Poolside, OpenMDW-1.1 -- programación agéntica de largo alcance, SWE-bench Verified 70,9%, 33B/3B activos MoE) y Kimi K2.7 Code (Moonshot AI -- modelo agéntico enfocado en programación basado en Kimi K2.6). Se suman a la alineación establecida de 2026: Kimi K2.6 (Modified MIT, MoE de frontera para programación, SWE-Bench Pro 58.6), Qwen3.8-27B (mejor general en hardware de consumo, 61,7 SWE-bench Pro), GLM-5.3 (744B/40B activos MoE, MIT, SWE-Bench Pro 58.4) y gpt-oss:20b (mejor pequeño / 16 GB, ~o3-mini). Algunos modelos recién listados, como mistral-large-4 y beam, son solo en la nube (etiqueta `:cloud`) y no se ejecutan en local. Comandos: ollama run nemotron-3.5-lightning, ollama run nemotron-3.5-super, ollama run laguna-xs-2.1, ollama run kimi-k2.7-code:cloud, ollama run qwen3.8:27b.',
            },
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'La presentación a continuación cubre: top 10 modelos Ollama por número de descargas, comparación de rendimiento (60-74% HumanEval), mejores modelos por caso de uso (chat, programación, razonamiento, visión), razonamiento chain-of-thought de DeepSeek-R1 y comandos exactos de descarga. Descarga el PDF como tu tarjeta de referencia para selección de modelos Ollama.',
    },
    pt: {
      freshness_tier: 'monthly',
      theme: 'Best Models',
      title: 'Ollama Versão Mais Recente 2026: v0.40.5 + Melhores Modelos por Caso de Uso',
      seoTitle: 'Ollama Versão Mais Recente 2026: v0.40.5 + 10 Melhores Modelos',
      intro: 'A versão estável atual do Ollama é a v0.40.5 (14 de outubro de 2026), que adiciona o NVIDIA Nemotron 3.5 Super e Bolt, suporte a modelos de decisão e os motores llama.cpp e MLX atualizados; a v0.40.6 é uma pré-versão. Desde a v0.33.1 de agosto, o Ollama tornou o MLX o motor padrão no Apple Silicon (v0.40.0) e adicionou a integração com o ChatGPT Desktop (v0.34.0). O melhor modelo geral em hardware de consumo continua sendo o Qwen3.8-27B (61,7 no SWE-bench Pro segundo a Qwen, download de 18 GB, cabe em uma placa de 24 GB ou em um Mac de 32 GB); o melhor para programação depende da sua configuração — veja o detalhamento por caso de uso abaixo.',
      metaDescription: 'A versão mais recente do Ollama é a v0.40.5. Veja o que mudou desde a v0.33, os modelos mais novos (Nemotron 3.5, GLM-5.3, Granite 4.2) e qual é o melhor para chat, código e visão.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-pt.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A versão estável atual do Ollama é a v0.40.5 (14 de outubro de 2026); a v0.40.6 (16 de outubro) é uma pré-versão. Os modelos mais novos são o NVIDIA Nemotron 3.5 Super (120B, visão-linguagem) e o Bolt (MoE de 74B no total / 9B ativos, 25 GB) na v0.40.5, com o Nemotron 3.5 Lightning (MoE de 30B, 3B ativos) para agentes sempre ativos. O melhor modelo geral em hardware de consumo é o Qwen3.8-27B (61,7 no SWE-bench Pro segundo a Qwen, 18 GB, cabe em uma placa de 24 GB). Outras escolhas: Devstral Small 2 e Laguna XS 2.1 (programação agêntica local; o Kimi K2.6 é de escala de fronteira, mas só na nuvem no Ollama), gpt-oss:20b (melhor pequeno / 16 GB), qwen3:30b (equilibrado), DeepSeek-R1 (raciocínio), Gemma 4 (visão/chamada de ferramentas, agora também 12B e 31B), Granite 4.2 (IBM, Apache 2.0, 3B/8B/30B), Dolphin 3.0 (uso geral sem censura) e Llama 4 Scout (contexto longo de 10M / multimodal). A família Llama continua sendo a mais baixada.**',
      quickAnswerTop: {
        pt: {
          question: 'Qual é a versão mais recente do Ollama e os melhores modelos em 2026?',
          answer: 'A versão estável mais recente do Ollama é a v0.40.5 (14 de outubro de 2026); a v0.40.6 é uma pré-versão. Os modelos mais novos são o NVIDIA Nemotron 3.5 Super e Bolt, com o Nemotron 3.5 Lightning para agentes sempre ativos. Os melhores modelos open source para Ollama em 2026 são Qwen3.8-27B (melhor geral em hardware de consumo, 18 GB), Devstral Small 2 e Laguna XS 2.1 (melhor programação agêntica local; o Kimi K2.6 só existe na nuvem no Ollama), gpt-oss:20b (melhor pequeno / 16 GB, raciocínio ajustável), qwen3:30b (equilibrado), Gemma 4 (visão + chamada de ferramentas), Llama 4 Scout (melhor contexto longo de 10M / multimodal), Dolphin 3.0 (melhor uso geral sem censura) e DeepSeek-R1 (melhor raciocínio). Instale qualquer um com: ollama pull <nome-do-modelo>',
          bullets: [
            '→Versão mais recente: Ollama v0.40.5 (14 de outubro de 2026) — Nemotron 3.5 Super e Bolt, modelos de decisão, llama.cpp e MLX atualizados. A v0.40.6 é uma pré-versão',
            '→Desde a v0.33: MLX é o motor padrão no Apple Silicon (v0.40.0), modelos do Ollama no ChatGPT Desktop (v0.34.0), upgrades de modelos em segundo plano (v0.40.2)',
            '→Qwen3.8-27B — melhor geral em hardware de consumo, 61,7 SWE-bench Pro (segundo a Qwen), download de 18 GB',
            '→Devstral Small 2 (15 GB) e Laguna XS 2.1 (20 GB) — programação agêntica local; Kimi K2.6 e K2.7 Code são apenas tags na nuvem',
            '→gpt-oss:20b — melhor modelo pequeno, roda em 16 GB, nível ~o3-mini, raciocínio ajustável',
            '→Nemotron 3.5 Lightning — MoE de 30B com 3B ativos, contexto de 1M, para agentes sempre ativos',
            '→qwen3:30b — modelo equilibrado para tudo; qwen3-coder:30b para autocompletar código',
            '→Llama 4 Scout — contexto longo (10M tokens) + multimodal, ~55 GB com Q4',
            '→DeepSeek-R1 — melhor raciocínio/matemática; gpt-oss:20b para raciocínio ajustável (a DeepSeek lançou depois o DeepSeek-V4 — Flash/Pro — como geração aberta mais nova; R1/V3 continuam válidos para rodar localmente.)',
          ],
          updatedDate: '2026-10-17',
        },
      },
      readTime: '14 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'melhores modelos Ollama 2026',
      toc: [
        { label: 'Principais conclusões', anchor: '#key-takeaways' },
        { label: 'Modelos mais populares no Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'Melhores modelos por caso de uso', anchor: '#top-models-by-category' },
        { label: 'Modelos adicionados recentemente', anchor: '#new-july-2026' },
        { label: 'O que é o DeepSeek-R1?', anchor: '#deepseek-r1' },
        { label: 'Modelos de visão no Ollama', anchor: '#vision-models' },
        { label: 'Tabela comparativa dos 10 principais', anchor: '#full-top-10-comparison' },
        { label: 'Como navegar pela biblioteca do Ollama', anchor: '#how-to-browse-ollama-library' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'O melhor modelo do Ollama em 2026 é o Qwen3.8-27B (61,7 no SWE-bench Pro segundo a Qwen, 18 GB); as melhores escolhas locais para programar são Qwen3.8-27B, Devstral Small 2 e Laguna XS 2.1 (o Kimi K2.6 só existe na nuvem no Ollama).' },
            { type: 'plain-terms', text: 'O Ollama é uma ferramenta gratuita que permite rodar modelos de IA no seu próprio computador — sem precisar de internet ou chave de API. Estes são os melhores modelos disponíveis para download com um único comando, organizados pelo que você realmente precisa.' },
          ],
          items: [
            '**Melhor geral em hardware de consumo**: Qwen3.8-27B (61,7 no SWE-bench Pro segundo a Qwen, download de 18 GB, cabe em uma placa de 24 GB). Equilibrado: qwen3:30b.',
            '**Mais baixado**: Llama 3.2 3B (tutoriais) e a família Llama -- maior suporte de ferramentas.',
            '**Melhor raciocínio**: DeepSeek-R1 (cadeia de pensamento) e gpt-oss:20b (raciocínio ajustável, nível ~o3-mini).',
            '**Melhor para programar**: Qwen3.8-27B (melhor denso), Laguna XS 2.1 (agêntico, longa duração), Devstral Small 2 (melhor agêntico de 24B), qwen3-coder:30b (autocompletar); o Kimi K2.6 é de escala de fronteira, mas só existe na nuvem no Ollama -- maiores benchmarks divulgados para o tamanho.',
            '**Melhor pequeno / 16 GB**: gpt-oss:20b. **Melhor visão/multimodal**: Gemma 4 (E4B+). **Melhor contexto longo (10M) / multimodal grande**: Llama 4 Scout (~55 GB). **Melhor uso geral sem censura**: Dolphin 3.0. **Agentes sempre ativos**: Nemotron 3.5 Lightning.',
            'A biblioteca do Ollama tem centenas de modelos selecionados (milhares a mais via Modelfiles GGUF personalizados). Todos estão disponíveis com `ollama pull <nome>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'Qual é a versão mais recente do Ollama e o que mudou?',
          content: [
            '**Versão atual do Ollama: v0.40.5** (lançada em 14 de outubro de 2026). É a versão estável mais recente, disponível em ollama.com/download; a v0.40.6 (16 de outubro) está marcada como pré-versão. Atualize com `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`) e confirme com `ollama --version`.',
            '**O que mudou da v0.33.1 (26 de agosto) à v0.40.5 (14 de outubro):** a v0.34.0 (5 de setembro) tornou os modelos do Ollama utilizáveis no ChatGPT Desktop e acelerou a saída estruturada no Apple Silicon. A v0.34.1 (14 de setembro) tirou o `ollama create` com safetensors do MLX do estado experimental e acelerou `/api/tags`. A v0.34.2 (15 de setembro) adicionou um fluxo de configuração na primeira execução. A v0.34.4 (23 de setembro) adicionou saídas estruturadas em uma única passagem para modelos de raciocínio e processamento de prompts mais rápido do Qwen 3.8 no Apple Silicon. As v0.35.0 e v0.35.1 (28–29 de setembro) introduziram modelos de decisão via `/v1/systemone` e elevaram a busca na web para dez buscas por resposta. A v0.40.0 (25 de setembro) tornou o MLX o motor padrão no Apple Silicon para arquiteturas compatíveis como gemma4, qwen3.5 e qwen3.6. A v0.40.2 (8 de outubro) atualiza modelos em segundo plano na primeira execução e mantém backups. A v0.40.4 (12 de outubro) adicionou `ollama run --ask` para modelos de decisão e embeddings multimodais via llama-server. A v0.40.5 (14 de outubro) adicionou Nemotron 3.5 Super e Bolt e atualizou llama.cpp e MLX. Notas completas: github.com/ollama/ollama/releases.',
            '**Modelos mais novos da biblioteca (2026):**',
          ],
          items: [
            '**Nemotron 3.5 Super, Bolt e Lightning** (NVIDIA) — o Super é um modelo visão-linguagem de 120B (até 1M de contexto) adicionado na v0.40.5; o Bolt é um MoE visão-linguagem de 74B no total / 9B ativos para programação local e uso de ferramentas (25 GB, contexto de 256K); o Lightning é um MoE de 30B com 3B ativos para agentes sempre ativos (19–25 GB, contexto de 1M). Download: `ollama pull nemotron-3.5-lightning`',
            '**Mistral Large 4** (Mistral AI) — MoE multimodal de pesos abertos com 1,05T de parâmetros no total / 52B ativos segundo sua página no Ollama: escala de datacenter, não uma escolha para hardware de consumo.',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — modelo principal de pesos abertos para programação e tarefas agênticas de longa duração; o GLM-5.3 Flash é o primeiro modelo nativamente multimodal. Download: `ollama pull glm-5.3`',
            '**Granite 4.2** (IBM, Apache 2.0) — 3B (2,2 GB), 8B (5,3 GB) e 30B (18 GB), contexto de 128K, multilíngue, código, RAG e uso de ferramentas. Download: `ollama pull granite4.2`',
            '**Qwen3.8-27B** (Alibaba, agosto de 2026) — melhor geral em hardware de consumo, 61,7 no SWE-bench Pro (segundo a Qwen), Apache 2.0, download de 18 GB com contexto de 256K. Também o Qwen3.8-Flash-Next, prévia experimental da arquitetura que deve sustentar o Qwen4. Download: `ollama pull qwen3.8:27b`',
            '**Laguna XS 2.1** (Poolside, 2 de julho de 2026) — MoE de 33B no total / 3B ativos para programação agêntica e trabalho local de longa duração: planejar, escrever código, rodar testes e iterar. 20 GB, contexto de 256K, licença OpenMDW-1.1. SWE-bench Verified 70,9%, SWE-bench Multilingual 63,1%. Download: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** e **Kimi K2.6** (Moonshot AI) — modelos de programação MoE de escala de fronteira (1T de parâmetros); no Ollama só existem como tags na nuvem (`ollama pull kimi-k2.7-code:cloud`, `ollama pull kimi-k2.6:cloud`), e builds GGUF locais exigem 300+ GB.',
            '**gpt-oss** (OpenAI) — MoE de pesos abertos: gpt-oss:20b (21B no total / 3,6B ativos, 14 GB, nível ~o3-mini, raciocínio ajustável) e gpt-oss:120b (65 GB). Download: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google) — E2B, E4B, 12B (contexto de 256K), MoE de 26B (4B ativos) e denso de 31B, todos com visão e chamada de ferramentas; o E4B roda com cerca de 6 GB. Download: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Atualizar o Ollama para a versão mais recente (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Ou no Mac: brew upgrade ollama\n\n# Ver a versão atual\nollama --version  # exibe: ollama version 0.40.5\n\n# Baixar os modelos mais novos de 2026\nollama pull nemotron-3.5-lightning\nollama pull granite4.2\nollama pull laguna-xs-2.1',
          codeLanguage: 'bash',
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: 'Quais modelos são mais populares no Ollama em 2026?',
          content: [
            '**A popularidade no Ollama é medida pelo número de downloads exibido na página de cada modelo.** Os mais baixados ainda são dominados pela família Llama da Meta -- o Llama 3.2 3B é o mais puxado no geral, em grande parte por ser o primeiro modelo de teste de quem instala. Já o Llama 4 Scout subiu rápido desde o lançamento em abril de 2026.',
            'O Qwen3 é a família que mais cresce na biblioteca do Ollama, e o Qwen3 e a nova variante densa Qwen3.8 estão substituindo rapidamente o Qwen2.5. O DeepSeek-R1 teve grandes picos após o lançamento e segue muito baixado para raciocínio. O Dolphin 3.0 (Cognitive Computations, baseado no Llama 3.1) continua sendo o modelo sem censura de uso geral mais puxado para quem quer um assistente local sem filtros.',
            'A Meta lançou o **Llama 4** em abril de 2026 com as variantes Scout (17B ativos, 109B no total, MoE) e Maverick (17B ativos, 400B no total). O Llama 4 Scout está estável na biblioteca do Ollama (`ollama pull llama4:scout`). A família usa arquitetura Mixture-of-Experts (MoE) — o Scout precisa de ~55 GB de VRAM em Q4 (só cabe em 24 GB a 1,78 bit, ~20 tok/s).',
            'Os destaques do Scout são a janela de contexto de 10M tokens e a entrada multimodal, não a adequação ao hardware de consumo. Para configurações leves (8 GB de RAM), o Llama 3.2 3B continua sendo o primeiro modelo mais fácil.',
            'O Kimi K2.6 (Moonshot AI, licença MIT modificada, MoE de 32B ativos / 1T no total) obteve 58,6 no SWE-Bench Pro, segundo a Moonshot, mas no Ollama só existe como tag na nuvem. O Laguna XS 2.1 (Poolside) é o desafiante agêntico mais novo, feito para sessões longas de programação local. O Qwen3.8-27B atingiu 61,7 no SWE-bench Pro (segundo a Qwen) como melhor modelo geral em hardware de consumo (download de 18 GB). O gpt-oss:20b da OpenAI (MoE de 21B no total / 3,6B ativos) roda em 16 GB em nível ~o3-mini com raciocínio ajustável.',
            'A biblioteca do Ollama tem centenas de modelos selecionados, com a família NVIDIA Nemotron 3.5, o Granite 4.2 e o GLM-5.3 entre as adições mais recentes desde a atualização anterior.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: 'Quais modelos do Ollama funcionam melhor para cada caso de uso?',
          snippetBlocks: [
            { type: 'one-sentence', text: 'Para chat geral use Qwen3.8-27B; para programar, Qwen3.8-27B, Devstral Small 2 ou Laguna XS 2.1; para raciocínio, DeepSeek-R1; para visão, Gemma 4 E4B; para chat sem censura, Dolphin 3.0.' },
            { type: 'plain-terms', text: 'Modelos de IA diferentes se destacam em tarefas diferentes — como uma calculadora que vence um processador de texto em matemática. Esta seção associa o modelo certo a cada trabalho.' },
          ],
          content: 'A qualidade da saída de um modelo depende muito de como você o instrui. Para técnicas estruturadas que funcionam em todos os modelos locais — incluindo cadeia de pensamento, exemplos few-shot e formatação de saída — veja o [guia de engenharia de prompts](https://www.promptquorum.com/pt/prompt-engineering). Para entender os trade-offs de quantização, veja o [guia de quantização →](/pt/local-llms/llm-quantization-explained). Para saber quanta VRAM cada modelo exige, veja o [guia de requisitos de VRAM →](/pt/local-llms/how-much-vram-local-llm). Para os requisitos de hardware, veja o [guia de hardware →](/pt/local-llms/local-llm-hardware-guide-2026).',
          items: [
            '**Chat geral (iniciante)**: `ollama run llama3.2:3b` -- mais documentação, primeiro modelo mais bem suportado.',
            '**Chat geral (melhor no geral)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro (segundo a Qwen), melhor geral em hardware de consumo, download de 18 GB. Equilibrado: `ollama run qwen3:30b`. Para máquinas de 8 GB, fique com `ollama run llama3.2:3b`.',
            '**Contexto longo / multimodal**: `ollama run llama4:scout` -- contexto de 10M tokens + multimodal, MoE (17B ativos/109B no total). Precisa de ~55 GB de VRAM em Q4.',
            '**Melhor pequeno / 16 GB**: `ollama run gpt-oss:20b` -- MoE de 21B no total / 3,6B ativos, ~o3-mini, raciocínio ajustável. Maior: `ollama run gpt-oss:120b` (65 GB).',
            '**Programação com 8 GB**: `ollama run qwen3:8b` -- melhor modelo local de código para máquinas de 8 GB de VRAM, 5 GB usados, multilíngue.',
            '**Programação (melhor agêntico, 24B)**: `ollama run devstral-small-2` -- edições em vários arquivos e depuração, 15 GB. Da Mistral AI.',
            '**Programação (melhor denso, 27B)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro (segundo a Qwen), 18 GB.',
            '**Programação (agêntico, longa duração)**: `ollama run laguna-xs-2.1` -- MoE de 33B/3B ativos da Poolside, SWE-bench Verified 70,9%, contexto de 256K, 20 GB. Licença OpenMDW-1.1.',
            '**Programação (escala de fronteira)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58,6 (segundo a Moonshot). O Ollama lista apenas uma tag na nuvem; builds GGUF locais exigem 300+ GB.',
            '**Agentes sempre ativos**: `ollama run nemotron-3.5-lightning` -- MoE de 30B com 3B ativos, contexto de 1M, 19–25 GB.',
            '**Agentes e chamada de ferramentas**: `ollama run gemma4:e4b` -- chamada de ferramentas + visão nativas, ~6 GB de RAM. Recomendado para agentes locais e saída estruturada.',
            '**Raciocínio e matemática**: `ollama run deepseek-r1:7b` -- modelo de cadeia de pensamento, melhor matemática local em 7B.',
            '**Multilíngue (geral)**: `ollama run qwen3:8b` -- 29+ idiomas nativos, melhor suporte a idiomas não ingleses.',
            '**Tarefas em chinês e japonês**: `ollama run qwen3.8:27b` -- tokenização nativa de chinês/japonês, origem Alibaba. Veja o [Contexto regional](#regional-context).',
            '**Sem censura / uso geral**: `ollama run dolphin3` -- Dolphin 3.0 (Cognitive Computations, baseado no Llama 3.1), sem filtragem de conteúdo embutida.',
            '**Compreensão de imagens**: `ollama run gemma4:e4b` -- visão + chamada de ferramentas. Ou `ollama run llama3.2-vision:11b` para visão dedicada.',
            '**Modelos empresariais pequenos**: `ollama run granite4.2:8b` -- IBM, Apache 2.0, 5,3 GB, contexto de 128K, multilíngue, código, RAG e ferramentas.',
            '**Rápido e leve**: `ollama run gemma2:2b` -- inferência em CPU mais rápida, 1,7 GB de RAM.',
            '**Alta qualidade (16 GB de RAM)**: `ollama run mistral-small3.1` -- qualidade próxima a 70B com 14 GB de RAM.',
            '**Embeddings**: `ollama run nomic-embed-text` -- modelo de embedding de 137M de parâmetros para pipelines de RAG.',
            '**Perguntas e respostas sobre documentos (RAG)**: `ollama run llama3.2` com o recurso de RAG do Open WebUI -- combinação mais bem suportada.',
            '**Automação residencial**: `ollama run phi4-mini` — o Phi-4 Mini (3,8B, ~3 GB de VRAM) atende consultas de voz do Home Assistant em um mini PC sem GPU dedicada. Veja o [guia de integração Home Assistant + Ollama →](/pt/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-pt.webp',
          imageCaption: 'Seleção de modelos do Ollama por caso de uso: qwen3.8:27b (melhor geral, 61,7 SWE-bench Pro segundo a Qwen) para chat e programação, devstral-small-2 para programação agêntica (o kimi-k2.6 só existe na nuvem), gpt-oss:20b em 16 GB, deepseek-r1:7b para matemática.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'Quais modelos foram adicionados ao Ollama mais recentemente?',
          content: 'Estes são os modelos mais novos da biblioteca do Ollama, do mais recente ao mais antigo. Confirme a disponibilidade com `ollama pull <modelo>` antes de montar fluxos de trabalho — modelos novos aparecem em ollama.com/library poucos dias após o lançamento.',
          rows: [
            { 'Modelo': 'nemotron-3.5-super', 'Lançamento': '14 de outubro de 2026', 'Ideal para': 'NVIDIA — visão-linguagem de 120B, código, raciocínio, ferramentas, até 1M de contexto', 'Comando do Ollama': 'ollama run nemotron-3.5-super' },
            { 'Modelo': 'nemotron-3.5-bolt', 'Lançamento': '14 de outubro de 2026', 'Ideal para': 'NVIDIA — MoE de 74B no total / 9B ativos, código local e ferramentas, 25 GB', 'Comando do Ollama': 'ollama run nemotron-3.5-bolt' },
            { 'Modelo': 'nemotron-3.5-lightning', 'Lançamento': '2026', 'Ideal para': 'NVIDIA — MoE de 30B, 3B ativos, agentes sempre ativos, contexto de 1M', 'Comando do Ollama': 'ollama run nemotron-3.5-lightning' },
            { 'Modelo': 'glm-5.3', 'Lançamento': '2026', 'Ideal para': 'Z.ai — pesos abertos principais para código e agentes de longa duração', 'Comando do Ollama': 'ollama run glm-5.3' },
            { 'Modelo': 'granite4.2', 'Lançamento': '2026', 'Ideal para': 'IBM — Apache 2.0, 3B / 8B / 30B, contexto de 128K', 'Comando do Ollama': 'ollama run granite4.2' },
            { 'Modelo': 'qwen3.8:27b', 'Lançamento': 'agosto de 2026', 'Ideal para': 'Melhor geral em hardware de consumo, 61,7 SWE-bench Pro (segundo a Qwen), 18 GB', 'Comando do Ollama': 'ollama run qwen3.8:27b' },
            { 'Modelo': 'laguna-xs-2.1', 'Lançamento': '2 de julho de 2026', 'Ideal para': 'Poolside — código agêntico, MoE 33B/3B ativos, 20 GB, contexto de 256K', 'Comando do Ollama': 'ollama run laguna-xs-2.1' },
            { 'Modelo': 'kimi-k2.7-code', 'Lançamento': '2026', 'Ideal para': 'Moonshot AI — focado em código, só tag na nuvem no Ollama', 'Comando do Ollama': 'ollama run kimi-k2.7-code:cloud' },
            { 'Modelo': 'kimi-k2.6', 'Lançamento': '20 de abril de 2026', 'Ideal para': 'Código de escala de fronteira (SWE-Bench Pro 58,6), só tag na nuvem no Ollama', 'Comando do Ollama': 'ollama run kimi-k2.6:cloud' },
            { 'Modelo': 'gpt-oss:20b', 'Lançamento': '2026', 'Ideal para': 'Melhor pequeno / 16 GB, ~o3-mini, raciocínio ajustável', 'Comando do Ollama': 'ollama run gpt-oss:20b' },
            { 'Modelo': 'gemma4:e4b', 'Lançamento': '2 de abril de 2026', 'Ideal para': 'Visão + chamada de ferramentas (E2B/E4B/12B/26B/31B)', 'Comando do Ollama': 'ollama run gemma4:e4b' },
            { 'Modelo': 'qwen3:30b', 'Lançamento': '2026', 'Ideal para': 'Equilibrado; qwen3-coder:30b para autocompletar código', 'Comando do Ollama': 'ollama run qwen3:30b' },
          ],
          columns: ['Modelo', 'Lançamento', 'Ideal para', 'Comando do Ollama'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
          title: 'O que é o DeepSeek-R1 e por que ele é diferente?',
          content: [
            '**O DeepSeek-R1 é um modelo de raciocínio -- ao contrário dos modelos de chat comuns, que geram a resposta diretamente, ele gera uma cadeia de pensamento explícita antes da resposta final.** Isso melhora bastante o desempenho em matemática, quebra-cabeças lógicos e resolução passo a passo.',
            'O DeepSeek-R1 7B marca 52% no MATH (matemática de competição) contra 28% do Mistral Small no mesmo tamanho. É mais lento que os modelos comuns (mais tokens por resposta), mas bem mais preciso quando o raciocínio importa.',
          ],
          codeBlock: '# Baixar e rodar o DeepSeek-R1\nollama run deepseek-r1:7b\n\n# Variantes maiores para mais qualidade\nollama run deepseek-r1:14b   # 10 GB de RAM\nollama run deepseek-r1:32b   # 20 GB de RAM',
          codeLanguage: 'bash',
          image: '/images/ollama-deepseek-r1-reasoning-comparison-en.svg',
          imageCaption: 'DeepSeek-R1 7B vs Mistral Small: 52% vs 28% no MATH. Modelo de raciocínio em cadeia de pensamento -- mais lento, bem mais preciso.',
        },
        visionModels: {
          id: 'vision-models',
          title: 'Quais modelos do Ollama aceitam imagens como entrada?',
          content: 'Estes modelos do Ollama aceitam imagens (multimodais): o Gemma 4 suporta visão E chamada de ferramentas — único entre os modelos de visão do Ollama — e roda quase 90% mais rápido no Apple Silicon após a atualização do MLX.',
          rows: [
            { 'Modelo': '[llama3.2-vision:11b](https://ollama.com/library/llama3.2-vision)', 'RAM': '~8 GB', 'Suporte a imagem': 'Sim', 'Comando do Ollama': 'ollama run llama3.2-vision:11b' },
            { 'Modelo': '[llama3.2-vision:90b](https://ollama.com/library/llama3.2-vision)', 'RAM': '~55 GB', 'Suporte a imagem': 'Sim', 'Comando do Ollama': 'ollama run llama3.2-vision:90b' },
            { 'Modelo': 'minicpm-v:8b', 'RAM': '~5,5 GB', 'Suporte a imagem': 'Sim', 'Comando do Ollama': 'ollama run minicpm-v' },
            { 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma4)', 'RAM': '~6 GB', 'Suporte a imagem': 'Sim + chamada de ferramentas ✓', 'Comando do Ollama': 'ollama run gemma4:e4b' },
            { 'Modelo': '[qwen3.8:27b](https://ollama.com/library/qwen3.8)', 'RAM': '18 GB', 'Suporte a imagem': 'Sim (texto + imagem)', 'Comando do Ollama': 'ollama run qwen3.8:27b' },
          ],
          columns: ['Modelo', 'RAM', 'Suporte a imagem', 'Comando do Ollama'],
          image: '/images/ollama-vision-models-comparison-en.svg',
          imageCaption: 'Modelos de visão do Ollama para entrada de imagens. O Gemma 4 E4B (6 GB) inclui chamada de ferramentas. O Llama 3.2 Vision 11B (8 GB) é a opção de visão dedicada. Todos rodam localmente.',
        },
        fullTop10: {
          id: 'full-top-10-comparison',
          title: 'Quais são os 10 principais modelos open source do Ollama?',
          content: 'As contagens de download ainda favorecem o Llama 3.x pela prevalência em tutoriais. Em projetos novos de 2026, prefira Qwen3.8-27B (melhor geral em hardware de consumo), Laguna XS 2.1 ou Devstral Small 2 (programação), gpt-oss:20b e qwen3:30b.',
          rows: [
            { '#': '1', 'Modelo': '[Qwen3.8-27B](https://ollama.com/library/qwen3.8)', 'Ideal para': 'Melhor geral em hardware de consumo', 'RAM': '18 GB (Q4)', 'Benchmark': '61,7 SWE-bench Pro' },
            { '#': '2', 'Modelo': '[Devstral Small 2](https://ollama.com/library/devstral-small-2)', 'Ideal para': 'Programação agêntica (vários arquivos)', 'RAM': '15 GB', 'Benchmark': '65,8% SWE-bench Verified' },
            { '#': '3', 'Modelo': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Ideal para': 'Melhor pequeno / 16 GB, raciocínio ajustável', 'RAM': '14 GB', 'Benchmark': '~o3-mini' },
            { '#': '4', 'Modelo': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Ideal para': 'Equilibrado; qwen3-coder:30b para código', 'RAM': '~18 GB', 'Benchmark': 'forte' },
            { '#': '5', 'Modelo': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Ideal para': 'Código agêntico de longa duração', 'RAM': '20 GB', 'Benchmark': '70,9% SWE-bench Verified' },
            { '#': '6', 'Modelo': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Ideal para': 'Raciocínio, matemática', 'RAM': '5 GB', 'Benchmark': '52% MATH' },
            { '#': '7', 'Modelo': '[gemma4:e4b](https://ollama.com/library/gemma4)', 'Ideal para': 'Visão + chamada de ferramentas (multimodal)', 'RAM': '~6 GB', 'Benchmark': 'Pronto para agentes' },
            { '#': '8', 'Modelo': '[Llama 4 Scout](https://ollama.com/library/llama4)', 'Ideal para': 'Contexto longo de 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'Benchmark': 'contexto de 10M' },
            { '#': '9', 'Modelo': '[Granite 4.2](https://ollama.com/library/granite4.2)', 'Ideal para': 'Modelos empresariais pequenos, Apache 2.0', 'RAM': '2,2–18 GB', 'Benchmark': 'contexto de 128K' },
            { '#': '10', 'Modelo': '[Llama 3.2 3B](https://ollama.com/library/llama3.2)', 'Ideal para': 'Primeiro modelo, chat geral', 'RAM': '2,5 GB', 'Benchmark': 'mais documentado' },
          ],
          columns: ['#', 'Modelo', 'Ideal para', 'RAM', 'Benchmark'],
          image: '/images/top-open-source-models-ollama-top-models-hero-pt.webp',
          imageCaption: 'Principais modelos do Ollama em 2026: Qwen3.8-27B (melhor geral, 18 GB), Devstral Small 2, Laguna XS 2.1 (programação agêntica), gpt-oss:20b. Llama 4 Scout para contexto de 10M tokens (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'Como navegar pela biblioteca de modelos do Ollama?',
          content: 'Há duas formas de trabalhar com modelos do Ollama. **Trocar modelos instalados:** no app do Ollama para Mac, clique no botão de seleção de modelo na parte inferior do campo de chat para alternar entre qualquer modelo instalado localmente. **Encontrar e baixar novos modelos:** acesse ollama.com/library para navegar por centenas de modelos selecionados por categoria e use os comandos abaixo para baixar e gerenciar.',
          codeBlock: '# Listar todos os modelos baixados localmente\nollama list\n\n# Buscar um modelo e baixá-lo\nollama pull qwen3.8:27b\n\n# Ver as tags e a especificação de um modelo\nollama show qwen3.8\n\n# Remover um modelo para liberar disco\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Como as regras regionais de privacidade afetam a escolha do seu modelo Ollama?',
          content: [
            '**UE / RGPD + conformidade de licenças.** Para organizações da UE que implantam modelos Ollama em produção, a licença importa tanto quanto o desempenho. Apache 2.0 (totalmente aberta, uso comercial permitido): Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Licença Comunitária Meta Llama (uso comercial restrito acima de 700 milhões de usuários ativos mensais): Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (uso comercial permitido): DeepSeek-R1 7B e 14B. MIT modificada (uso comercial permitido com cláusula de atribuição): Kimi K2.6. OpenMDW-1.1 (permissiva, uso comercial permitido): Laguna XS 2.1. Sempre confira os termos de licença antes da implantação comercial. Para empresas da UE em setores regulados, modelos da Mistral (França, Apache 2.0) como o Devstral Small 2 são um padrão sensato: origem europeia e licença permissiva. Rodar os modelos totalmente local com o Ollama significa que os prompts não são enviados a servidores externos; isso apoia, mas por si só não cumpre, as obrigações do RGPD (uma tag `:cloud` envia dados ao serviço hospedado do Ollama).',
            '**Japão (METI).** Para implantações corporativas japonesas com o Ollama, Qwen3 / Qwen3.8 é uma família recomendada: processa texto japonês nativamente, o que ajuda no tempo de inferência e no cache KV. Para fluxos de programação em japonês: o Qwen3.8-27B (61,7 no SWE-bench Pro segundo a Qwen) trata comentários de código em japonês de forma nativa. A documentação de governança de IA do METI costuma pedir a versão exata do modelo. Use `ollama show <modelo>` para obter a especificação completa (parâmetros, quantização e tamanho de contexto) para registros de conformidade.',
            '**China.** Pelas Medidas da CAC para IA generativa (2023), organizações que oferecem serviços de IA a usuários finais devem registrar os modelos usados. Qwen3 / Qwen3.8 (Alibaba, Apache 2.0) é uma escolha natural para implantações corporativas chinesas com o Ollama: origem chinesa, licença Apache 2.0 e bom desempenho em chinês. O Kimi K2.6 (Moonshot AI, MIT modificada) também é de origem chinesa, mas o Ollama o lista apenas como tag na nuvem e a execução local exige hardware de servidor. Comandos: `ollama run qwen3.8:27b` para a melhor qualidade, `ollama run qwen3:8b` para velocidade. O DeepSeek-R1 (licença MIT) é adequado para raciocínio. Para dados processados localmente com o Ollama, a inferência em si não aciona os requisitos de transferência internacional da PIPL; confira suas próprias obrigações de conformidade.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quais são os erros comuns ao escolher modelos do Ollama?',
          faqs: [
            { q: 'Baixar a maior tag do modelo por padrão sem checar a RAM', a: 'Rodar `ollama pull llama3.3` sem especificar a tag baixa a variante padrão, normalmente a maior quantização-padrão. Em uma máquina de 8 GB de RAM, baixar o llama3.3 (70B, ~40 GB) falha ou causa uso intenso de swap. Sempre especifique a variante: `ollama pull llama3.2:3b` para máquinas de 8 GB.' },
            { q: 'Usar um modelo geral quando existe um específico para a tarefa', a: 'Para programação, modelos de código incluem suporte a FIM para completar código, o que modelos gerais não têm. Para raciocínio/matemática, `deepseek-r1:7b` marca 52% no MATH contra 28% do `mistral:7b`. Modelos específicos existem na biblioteca por um motivo.' },
            { q: 'Não verificar se um modelo está disponível antes de montar um fluxo', a: 'A biblioteca do Ollama muda com o tempo -- modelos são adicionados e, ocasionalmente, removidos. Antes de montar um pipeline de produção em torno de um modelo, confirme que ele está na biblioteca (`ollama list` localmente ou ollama.com/library). Fixe versões específicas em produção: `ollama pull llama3.1:8b-instruct-q4_K_M`.' },
            { q: 'Não especificar a quantização em modelos grandes', a: 'Rodar `ollama pull` sem sufixo de quantização baixa a variante padrão -- que pode ser maior do que sua VRAM comporta. Para 16 GB de VRAM, baixe a variante Q4_K_M explícita e rode `ollama show <modelo>` depois para confirmar que os requisitos batem com o seu hardware.' },
            { q: 'Esperar que o DeepSeek-R1 seja tão rápido quanto os modelos de chat comuns', a: 'O DeepSeek-R1 gera tokens de raciocínio em cadeia de pensamento antes da resposta final -- por isso supera os modelos comuns em matemática e lógica, mas produz 3-5x mais tokens por resposta. Para chat rápido ou respostas de uma linha, use `llama3.1:8b`. Reserve o DeepSeek-R1 para tarefas em que a precisão importa mais que a velocidade.' },
            { q: 'Tratar uma tag :cloud como se fosse inferência local', a: 'Tags como `kimi-k2.6:cloud` e `kimi-k2.7-code:cloud` enviam seus prompts ao serviço hospedado do Ollama. Se a privacidade é o motivo de usar o Ollama, escolha modelos com tag local (por exemplo, `qwen3.8:27b` ou `devstral-small-2`).' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Modelos de visão do Ollama (2026)](/pt/power-local-llm/ollama-vision-models-review) -- guia prático para rodar modelos com imagens no Ollama, com sintaxe real de CLI/API.',
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- instale o Ollama e baixe seu primeiro modelo desta lista em menos de 5 minutos',
            '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) -- ranking completo de benchmarks de todos os modelos de pesos abertos',
            '[Melhores LLMs locais para programação](/pt/local-llms/best-local-llms-for-coding) -- comparação mais profunda de Qwen3.8, Devstral Small 2 e Laguna XS 2.1',
            '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained) -- como escolher entre Q4_K_M e Q8_0 para os modelos desta lista',
            '[Ollama vs LM Studio](/pt/local-llms/ollama-vs-lm-studio) -- qual ferramenta usar conforme o seu fluxo de trabalho',
            '[Melhores interfaces para LLM local](/pt/local-llms/best-local-llm-frontends) -- Open WebUI, Jan AI e outras interfaces que se conectam a qualquer modelo desta lista',
            '[Atualizações de modelos de LLM local em 2026](/pt/local-llms/local-llm-model-updates-2026) -- linha do tempo de todos os grandes lançamentos de pesos abertos do ano.',
          ],
        },
        nextSteps: {
          id: 'next-steps',
          title: 'Próximos passos',
          items: [
            '[Melhores LLMs locais para código](/pt/local-llms/best-local-llms-for-coding) — O melhor modelo Ollama especialmente para programação →',
            '[Melhores LLMs só com CPU](/pt/local-llms/best-cpu-only-llm) — Sem GPU? Comece por aqui →',
            '[Guia de hardware LLM local](/pt/local-llms/local-llm-hardware-guide) — Seu computador aguenta esses modelos? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Qual é a versão mais recente do Ollama?', a: 'A versão estável mais recente do Ollama é a v0.40.5, lançada em 14 de outubro de 2026. Em 16 de outubro surgiu uma pré-versão v0.40.6, ainda não marcada como estável. Baixe em ollama.com/download ou atualize com `curl https://ollama.ai/install.sh | sh` no Linux e `brew upgrade ollama` no macOS.' },
            { q: 'Onde encontro o changelog e as notas de versão do Ollama?', a: 'As notas de cada versão ficam em github.com/ollama/ollama/releases, com a data e o changelog de cada tag. As entradas estáveis mais recentes são v0.40.5 (14 de outubro de 2026 -- suporte ao NVIDIA Nemotron 3.5 Super, acesso na nuvem aos modelos de decisão), v0.40.4 (12 de outubro -- modelos de decisão em `ollama run --ask`, carregamento mais rápido) e v0.40.0 (25 de setembro -- MLX por padrão no Apple Silicon).' },
            { q: 'Como verifico qual versão do Ollama tenho instalada?', a: 'Rode `ollama --version` no terminal. Ele imprime uma linha como `ollama version 0.40.5`. Se o número for menor que o da versão atual, atualize com `curl https://ollama.ai/install.sh | sh` (Linux) ou `brew upgrade ollama` (macOS) e rode `ollama --version` de novo para confirmar.' },
            { q: 'Quando o Ollama foi lançado pela primeira vez?', a: 'A primeira versão do Ollama, v0.0.1, foi publicada no GitHub em 8 de julho de 2023, pouco depois da criação do repositório em 26 de junho de 2023. Em outubro de 2026 o projeto havia chegado à v0.40.5. A lista completa está em github.com/ollama/ollama/releases.' },
            { q: 'Qual é o melhor modelo Ollama em 2026?', a: 'Qwen3.8-27B é o melhor em geral em hardware de consumo (61,7 SWE-bench Pro, cabe em 24 GB com Q4). Para programação frontier: Kimi K2.6. Para modelo pequeno/16 GB: gpt-oss:20b. Para contexto longo: Llama 4 Scout.' },
            { q: 'Qual modelo Ollama é melhor para programação?', a: 'Qwen3.8-27B para o melhor desempenho denso (61,7 SWE-bench Pro). Kimi K2.6 para programação frontier (SWE-Bench Pro 58,6%). Devstral Small 24B para fluxos de trabalho agentivos em múltiplos arquivos. Codestral 22B para autocompletar em IDE (FIM).' },
            { q: 'Os modelos de código aberto no Ollama são realmente gratuitos para uso comercial?', a: 'A maioria sim, mas não todos. Llama 3.x (Meta Llama Community Licence) restringe o uso comercial acima de 700M de usuários ativos mensais. Mistral Small, Qwen3 e Gemma 3 usam Apache 2.0 (totalmente compatível com uso comercial). Verifique sempre a licença antes da implantação empresarial.' },
            { q: 'Quais são os melhores novos modelos do Ollama em 2026?', a: 'Lançamentos principais em 2026: Qwen3.8-27B (melhor geral em 24 GB, 61,7 SWE-bench Pro), Kimi K2.6 (programação frontier, MoE), gpt-oss:20b (melhor pequeno/16 GB), Gemma 4 E4B (visão + tool calling) e Llama 4 Scout (contexto 10M, multimodal). Comandos: ollama run qwen3.8:27b, ollama run gpt-oss:20b, ollama run gemma4:e4b, ollama run llama4:scout.' },
            { q: 'Qual modelo Dolphin devo usar com o Ollama?', a: 'Use Dolphin 3.0 (`ollama pull dolphin3`), não o `dolphin-mistral` desatualizado de 2024. Dolphin 3.0 é mantido pela Cognitive Computations, construído sobre a base Llama 3.1, e não aplica filtragem de conteúdo — é o melhor modelo sem censura / uso geral disponível no Ollama.' },
            { q: 'Qual é o nome oficial da empresa por trás do Ollama?', a: 'A empresa é a Ollama Inc., uma startup com financiamento Series B sediada em Palo Alto, Califórnia, fundada em 2023 por Jeffrey Morgan e Michael Chiang.' },
            { q: 'Quais modelos do Ollama funcionam melhor para tarefas em russo?', a: 'Qwen3/Qwen3.8 e Mistral Small 3.1 incluem russo em seu treinamento multilíngue nativo. Qwen3 pontua mais alto em benchmarks não ingleses; Mistral Small 3.1 tem fluência conversacional em russo informalmente mais forte. Nenhum dos dois é de origem russa.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Especificações oficiais do Llama 4 Scout (17B ativos, 109B no total, MoE) e Maverick.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- Arquitetura de cadeia de pensamento e benchmark MATH (52%) do DeepSeek-R1.',
            '[Equipe Qwen. (2026). Ficha do modelo "Qwen3.8-27B". huggingface.co](https://huggingface.co/Qwen/Qwen3.8-27B) -- 61,7 no SWE-bench Pro segundo a Qwen, Apache 2.0, contexto de 256K.',
            '[Ollama. (2026). "kimi-k2.6" na biblioteca do Ollama. ollama.com](https://ollama.com/library/kimi-k2.6) -- apenas uma tag `:cloud` listada.',
            '[Ollama. (2026). "devstral-small-2" na biblioteca do Ollama. ollama.com](https://ollama.com/library/devstral-small-2) -- 15 GB, SWE-bench Verified 65,8%, requer Ollama 0.13.3 ou superior.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- Biblioteca oficial de modelos, contagem de downloads, tags e opções de quantização.',
            '[Poolside. (2026). "Introducing Laguna XS 2.1." poolside.ai](https://poolside.ai/blog/introducing-laguna-xs-2-1) -- Modelo MoE agêntico de 33B/3B ativos, SWE-bench Verified 70,9%, licença OpenMDW-1.1.',
            '[Ollama. (2026). "Ollama Releases." github.com/ollama/ollama/releases](https://github.com/ollama/ollama/releases) -- Notas de versão oficiais, v0.40.5 (14 de outubro de 2026).',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Atualização do Ollama julho de 2026: versão mais recente e novos modelos',
        description: 'Compare os 10 melhores LLMs de código aberto para Ollama em 2026: benchmarks, requisitos de RAM e configuração.',
        url: 'https://www.promptquorum.com/pt/local-llms/top-open-source-models-ollama',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-04',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Melhores Modelos de Código Aberto no Ollama -- Julho de 2026',
        'description': 'Os modelos de código aberto mais baixados e com melhor desempenho disponíveis via Ollama',
        'numberOfItems': 12,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen3.8-27B', 'url': 'https://ollama.com/library/qwen3.8', 'description': 'Melhor opção geral em hardware de consumo. 61,7% no SWE-bench. Cabe em 24 GB com Q4. Apache 2.0. ollama run qwen3.8:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://ollama.com/library/kimi-k2.6', 'description': 'Modelo de programação MoE de ponta. SWE-Bench Pro 58,6 (empata com GPT-5.5). 32B ativos/1T total. Licença MIT modificada. ollama run kimi-k2.6:cloud' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'Melhor modelo pequeno / 16 GB. 21B total / 3,6B ativos MoE. Nível ~o3-mini, raciocínio ajustável. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'Modelo equilibrado para uso geral; qwen3-coder:30b para completar código. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'url': 'https://ollama.com/library/laguna-xs-2.1', 'description': 'Programação agentiva de longo horizonte. 33B/3B ativos MoE. SWE-bench Verified 70,9%. Licença OpenMDW-1.1. ollama run laguna-xs-2.1' },
          { '@type': 'ListItem', 'position': 6, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'Melhor raciocínio. 5 GB de RAM. 52% no MATH vs 28% do Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 7, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma4', 'description': 'Melhor visão/multimodal (E4B+). Tool calling + visão, ~90% mais rápido em Apple Silicon (julho de 2026). ~6 GB de RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama4', 'description': 'Melhor contexto longo (10M de tokens) + multimodal grande. MoE 17B ativos/109B total. ~55 GB com Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral-small', 'description': 'Melhor programação agentiva (múltiplos arquivos). Edições em múltiplos arquivos, depuração. 16 GB de RAM. ollama run devstral-small-2' },
          { '@type': 'ListItem', 'position': 10, 'name': 'mistral-small3.1', 'url': 'https://ollama.com/library/mistral-small3.1', 'description': 'Melhor qualidade na faixa de 16 GB. 14 GB de RAM. 74% no HumanEval. Apache 2.0. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 11, 'name': 'gemma2:2b', 'url': 'https://ollama.com/library/gemma2', 'description': 'Mais rápido e leve. 1,7 GB de RAM. Melhor inferência em CPU. ollama run gemma2:2b' },
          { '@type': 'ListItem', 'position': 12, 'name': 'phi4-mini', 'url': 'https://ollama.com/library/phi4-mini', 'description': 'Melhor raciocínio abaixo de 4 GB. 2,5 GB de RAM. 70% no HumanEval. ollama run phi4-mini' },
        ],
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'A apresentação abaixo cobre: top 10 modelos Ollama por número de downloads, comparação de desempenho (60-74% HumanEval), melhores modelos por caso de uso (chat, programação, raciocínio, visão), raciocínio chain-of-thought do DeepSeek-R1 e comandos exatos de download. Baixe o PDF como seu cartão de referência para seleção de modelos Ollama.',
    },
    de: {
      theme: 'Best Models',
      title: 'Ollama Aktuelle Version 2026: v0.40.5 + Beste Modelle nach Anwendungsfall',
      seoTitle: 'Ollama Aktuelle Version 2026: v0.40.5 + 10 beste Modelle',
      intro: 'Die aktuelle stabile Ollama-Version ist v0.40.5 (14. Oktober 2026). Sie bringt NVIDIA Nemotron 3.5 Super und Bolt, Unterstützung für Entscheidungsmodelle sowie aktualisierte llama.cpp- und MLX-Engines; v0.40.6 ist eine Vorabversion. Seit v0.33.1 im August hat Ollama MLX auf Apple Silicon zur Standard-Engine gemacht (v0.40.0) und die ChatGPT-Desktop-Integration ergänzt (v0.34.0). Das beste Gesamtmodell auf Consumer-Hardware bleibt Qwen3.8-27B (61,7 SWE-bench Pro laut Qwen, 18 GB Download, passt auf eine 24-GB-Karte oder einen Mac mit 32 GB); das beste Coding-Modell hängt von deinem Setup ab — siehe die Aufschlüsselung nach Anwendungsfall unten.',
      metaDescription: 'Die neueste Ollama-Version ist v0.40.5. Änderungen seit v0.33, die neuesten Modelle (Nemotron 3.5, GLM-5.3, Granite 4.2) und das beste Modell für Chat, Code und Vision.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-de.webp',
      publishDate: '2026-04-11',
      readTime: '9 Min. Lesezeit',
      educationalLevel: 'Anfänger',
      primaryTerm: 'Ollama-Modelle 2026',
      toc: [
        { label: 'Wesentliche Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Versionshistorie', anchor: '#ollama-version-history' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: 'Das beste Ollama-Modell 2026 ist Qwen3.8-27B (61,7 SWE-bench Pro laut Qwen, 18 GB); die besten lokalen Coding-Modelle sind Qwen3.8-27B, Devstral Small 2 und Laguna XS 2.1 (Kimi K2.6 gibt es bei Ollama nur in der Cloud).' },
            { type: 'plain-terms', text: 'Ollama ist ein kostenloses Tool, mit dem Sie KI-Modelle auf Ihrem eigenen Computer ausführen können — ohne Internet oder API-Schlüssel. Dies sind die besten Modelle, die Sie mit einem einzigen Befehl herunterladen können, geordnet danach, wofür Sie sie tatsächlich brauchen.' },
          ],
          items: [
            '**Bestes Gesamtmodell auf Consumer-Hardware**: Qwen3.8-27B (61,7 SWE-bench Pro laut Qwen, 18 GB Download, passt auf eine 24-GB-Karte). Ausgewogen: qwen3:30b.',
            '**Am häufigsten heruntergeladen**: Llama 3.2 3B (Tutorials) und die Llama-Familie -- breiteste Tool-Unterstützung.',
            '**Bestes Reasoning**: DeepSeek-R1 (Chain-of-Thought) und gpt-oss:20b (einstellbares Reasoning, ~o3-mini-Niveau).',
            '**Bestes Coding**: Qwen3.8-27B (bestes dichtes Modell), Laguna XS 2.1 (agentisch, langfristig), Devstral Small 2 (bestes agentisches 24B-Modell), qwen3-coder:30b (Vervollständigung); Kimi K2.6 ist Frontier-Größe, bei Ollama aber nur in der Cloud -- höchste gemeldete Benchmarks ihrer Größe.',
            '**Bestes kleines Modell / 16 GB**: gpt-oss:20b. **Beste Vision/Multimodal**: Gemma 4 (E4B+). **Bester Langkontext (10M) / großes Multimodal**: Llama 4 Scout (~55 GB). **Bestes unzensiertes Allzweckmodell**: Dolphin 3.0. **Dauerhaft laufende Agenten**: Nemotron 3.5 Lightning.',
            'Die Ollama-Bibliothek enthält mehrere hundert kuratierte Modelle (tausende weitere über eigene GGUF-Modelfiles). Alle sind über `ollama pull <name>` verfügbar.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'Was ist die aktuelle Ollama-Version und was hat sich geändert?',
          content: [
            '**Aktuelle Ollama-Version: v0.40.5** (veröffentlicht am 14. Oktober 2026). Das ist die neueste stabile Version, erhältlich über ollama.com/download. Am 16. Oktober erschien eine Vorabversion v0.40.6, die noch nicht als stabil markiert ist. Aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` (macOS: `brew upgrade ollama`) und bestätigen Sie mit `ollama --version`.',
            '**Was sich in der v0.33–v0.40-Reihe geändert hat (August–Oktober 2026):** v0.33.0 (21. August) aktivierte Claude Desktop als Drittanbieter-Gateway und machte die Wiederherstellungspunkte des KV-Cache-Prefills zuverlässiger. v0.34.0 (5. September) erlaubte die Nutzung von Ollama-Modellen in ChatGPT Desktop und beschleunigte strukturierte Ausgaben auf Apple Silicon; v0.34.1 (14. September) stufte `ollama create` mit MLX-Safetensors nicht mehr als experimentell ein. v0.40.0 (25. September) führt unterstützte Architekturen wie qwen3.8, gemma4 und qwen3.6 auf Apple Silicon standardmäßig mit MLX aus. v0.35.0 (28. September) brachte Entscheidungsmodelle über `/v1/systemone` — Modelle, die statt Text Auswahlen, Wahrscheinlichkeiten und Scores liefern, zunächst Nimble und Tev1 — und v0.35.1 (29. September) die multimodalen Clef-Modelle. v0.40.2 (8. Oktober) behält beim Hintergrund-Upgrade älterer Modelle Sicherungen, v0.40.4 (12. Oktober) ergänzte `ollama run <Entscheidungsmodell> --ask`, und v0.40.5 (14. Oktober) fügte Unterstützung für NVIDIA Nemotron 3.5 Super sowie Cloud-Zugriff auf die Clef-Entscheidungsmodelle hinzu. Vollständige Notizen: github.com/ollama/ollama/releases.',
            '**Neueste Modelle in der Bibliothek (2026):**',
          ],
          items: [
            '**Laguna XS 2.1** (Poolside, 2. Juli 2026) — 33B gesamt / 3B aktiv MoE für agentisches Coding und langfristige lokale Arbeit: planen, Code schreiben, Tests ausführen, iterieren. 256K Kontext, OpenMDW-1.1-Lizenz. SWE-bench Verified 70,9%, SWE-bench Multilingual 63,1%. Pull: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** (Moonshot AI, Juni 2026) — Coding-fokussiertes agentisches Modell, aufbauend auf Kimi K2.6, speziell für langfristige Coding-Sitzungen. Pull: `ollama pull kimi-k2.7-code:cloud` (cloud tag; local GGUF builds need 300+ GB)',
            '**DeepSeek V4 Pro** (DeepSeek, 23. April 2026) — Spezialist für algorithmisches Coding, 93.5% LiveCodeBench, MIT-Lizenz. Budget-Variante DeepSeek V4 Flash für leichtere Hardware. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20. April 2026) — Frontier-Coding-Modell, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%. MoE-Architektur (32B aktiv / 1T gesamt). Modified MIT-Lizenz.',
            '**Qwen3.8-27B** (Alibaba, 16. April 2026) — Bestes Modell fuer Consumer-Hardware, 61,7 SWE-bench Pro, Apache 2.0, passt in 24 GB bei Q4. Auch Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench).',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — 744B / 40B aktiv MoE, MIT-Lizenz. Führender Structured Code Generator.',
            '**gpt-oss** (OpenAI, 2026) — Open-Weight MoE: gpt-oss:20b (21B gesamt / 3,6B aktiv, läuft in 16 GB, ~o3-mini-Niveau, einstellbares Reasoning) und gpt-oss:120b (80 GB).',
            '**Gemma 4** (Google, 2. April 2026) — Multimodale Größen E2B / E4B / E12B (26B MoE) / E27B (31B dicht), alle mit Vision und Tool Calling. Jetzt ~90% schneller auf Apple Silicon (MLX-Update Juli 2026). E4B läuft in ~6 GB VRAM.',
          ],
          codeBlock: '# Ollama auf die neueste Version aktualisieren (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Oder auf Mac: brew upgrade ollama\n\n# Aktuelle Version prüfen\nollama --version  # Ausgabe: ollama version 0.40.5\n\n# Die neuesten 2026-Modelle pullen\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'Wie sieht die Versionshistorie von Ollama aus?',
          content: '**Ollama veröffentlichte seine erste Version v0.0.1 am 8. Juli 2023 und erreichte v0.40.5 am 14. Oktober 2026.** Die Tabelle nennt die Versionen, die verändert haben, was sich mit Ollama tun lässt; alle Tags samt Release Notes stehen unter github.com/ollama/ollama/releases. Die Nummerierung sprang Ende September 2026 von v0.35 auf v0.40, deshalb steht v0.40.0 (25. September) auf GitHub neben den v0.35-Versionen (28.–29. September).',
          rows: [
            { 'Version': 'v0.40.5', 'Datum': '14.10.2026', 'Kernänderung': 'Nemotron 3.5 Super; Cloud-Entscheidungsmodelle' },
            { 'Version': 'v0.40.0', 'Datum': '25.09.2026', 'Kernänderung': 'MLX standardmäßig auf Apple Silicon' },
            { 'Version': 'v0.35.0', 'Datum': '28.09.2026', 'Kernänderung': 'Entscheidungsmodelle über /v1/systemone' },
            { 'Version': 'v0.34.0', 'Datum': '05.09.2026', 'Kernänderung': 'Ollama-Modelle in ChatGPT Desktop' },
            { 'Version': 'v0.33.0', 'Datum': '21.08.2026', 'Kernänderung': 'Claude-Desktop-Gateway; KV-Cache' },
            { 'Version': 'v0.32.0', 'Datum': '11.07.2026', 'Kernänderung': 'Agent-Erlebnis „Chat, Code & Work“' },
            { 'Version': 'v0.0.1', 'Datum': '08.07.2023', 'Kernänderung': 'Erste öffentliche Version' },
          ],
          columns: ['Version', 'Datum', 'Kernänderung'],
        },
        mostPopular: {
          id: 'most-popular',
          title: 'Die beliebtesten Modelle auf Ollama',
          content: [
            '**Ollama verfügt über eine vollständig öffentlich zugängliche Download-Statistik.** Nach Daten aus Juli 2026:',
            '**Llama 3.2 3B** ist immer noch das am häufigsten heruntergeladene Modell insgesamt, großteils aufgrund seiner Verwendung als Standard-Testmodell beim ersten Install. Llama 4 Scout ist jedoch seit März 2026 schnell in den Rankings aufgestiegen und ist jetzt die bevorzugte Wahl für Qualität.',
            '**Qwen3 und Qwen3.8** sind die am schnellsten wachsende Modellfamilie in der Ollama-Bibliothek, mit Qwen3 und dem neuen Qwen3.8 dicht Variante schnell Qwen3 verdrängt. DeepSeek-R1 sah große Spitzen nach der Veröffentlichung und bleibt für Reasoning-Aufgaben stark heruntergeladen. Dolphin 3.0 (Cognitive Computations, aufbauend auf Llama 3.1) bleibt das meistgepullte unzensierte Allzweck-Modell für Nutzer, die einen ungefilterten lokalen Assistenten wollen.',
            '**Llama 4 Scout** wurde von Meta im April 2026 mit Scout (17B aktiv, 109B gesamt, MoE) und Maverick (17B aktiv, 400B gesamt) Varianten veröffentlicht. Llama 4 Scout ist jetzt stabil in der Ollama-Bibliothek (`ollama pull llama4:scout`). Die Llama 4 Familie nutzt Mixture-of-Experts (MoE) Architektur – nur 17B Parameter sind pro Token aktiv, aber mit 109B Gesamtparametern benötigt Scout ~55 GB VRAM bei Q4 (passt in 24 GB nur bei 1,78-Bit, ~20 tok/s). Scouts Stärken sind das 10M-Token-Kontextfenster und multimodale Eingabe, nicht die Consumer-Hardware-Tauglichkeit. Für leichte Setups (8 GB RAM) bleibt Llama 3.2 3B das einfachste Einstiegsmodell. Kimi K2.6 (Moonshot AI, Modified MIT-Lizenz, 32B aktiv / 1T gesamt MoE) erreichte SWE-Bench Pro 58.6 und liegt damit gleichauf mit GPT-5.5. Laguna XS 2.1 (Poolside) ist der neueste Herausforderer im agentischen Coding, speziell für langfristige lokale Coding-Sitzungen gebaut. Qwen3.8-27B erzielte 61,7 SWE-bench Pro als das beste Modell fuer Consumer-Hardware (passt in 24 GB bei Q4). OpenAIs Open-Weight gpt-oss:20b (21B gesamt / 3,6B aktiv MoE) läuft in 16 GB auf ~o3-mini-Niveau mit einstellbarem Reasoning. Die aktuelle Ollama-Version v0.40.5 (14. Oktober 2026) ergänzt Unterstützung für NVIDIA Nemotron 3.5 Super.Die Ollama-Bibliothek umfasst mehrere hundert Modelle, wobei Laguna XS 2.1 und Kimi K2.7 Code die neuesten Ergänzungen sind.',
          ],
        },
        byCategory: {
          id: 'by-category',
          title: 'Top-Modelle nach Kategorie',
          content: 'Die Qualität der Modellausgabe hängt stark davon ab, wie Sie prompten. Für strukturierte Techniken, die mit allen lokalen Modellen funktionieren — darunter Chain-of-Thought, Few-Shot-Beispiele und Output-Formatierung — siehe den [Prompt-Engineering-Guide](https://www.promptquorum.com/de/prompt-engineering). Für Reasoning-Aufgaben verbessert [Chain-of-Thought-Prompting](https://www.promptquorum.com/de/prompt-engineering/chain-of-thought-prompting) erheblich DeepSeek-R1 und Qwen3 Output-Qualität. Für Quantisierungskompromisse dieser Modelle siehe den [Quantisierungsleitfaden →](/de/local-llms/llm-quantization-explained). Um zu ermitteln, wie viel VRAM jedes Modell benötigt, siehe den [VRAM-Anforderungsleitfaden →](/de/local-llms/how-much-vram-local-llm). Für Agent-Workflows mit Gemma 4 siehe [Tree-of-Thought und ReAct](https://www.promptquorum.com/de/prompt-engineering/tree-of-thought-react). Sobald ein Tool-Calling-Modell aus dieser Liste in einer mehrstufigen Schleife mit Datei- und Datenbankzugriff läuft, siehe [Lokale KI-Agenten mit MCP](/de/power-local-llm/local-ai-agents-with-mcp-2026) für das Open-Source-Orchestrierungsmuster.',
          items: [
            '**Allgemeines Chat (Anfänger)**: `ollama run llama3.2:3b` -- die meiste Dokumentation, am besten unterstütztes Einstiegsmodell.',
            '**Allgemeines Chat (beste Wahl)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro, bestes Modell fuer Consumer-Hardware, passt in 24 GB bei Q4. Ausgewogen: `ollama run qwen3:30b`. Für 8 GB Maschinen `ollama run llama3.2:3b` verwenden.',
            '**Long-Context / multimodal**: `ollama run llama4:scout` -- 10M-Token-Kontext + multimodal, MoE (17B aktiv/109B gesamt). Benötigt ~55 GB VRAM bei Q4 (passt in 24 GB nur bei 1,78-Bit, ~20 tok/s).',
            '**Bestes kleines / 16 GB**: `ollama run gpt-oss:20b` -- 21B gesamt / 3,6B aktiv MoE, ~o3-mini-Niveau, einstellbares Reasoning. Größer: `ollama run gpt-oss:120b` (80 GB).',
            '**Codierung (7B)**: `ollama run qwen3:8b` -- 76% HumanEval, verbessert gegenüber Qwen3, mehrsprachig.',
            '**Codierung (bestes Agentic, 24B)**: `ollama run devstral-small-2` -- Bestes Agentic Coding-Modell (Multi-Datei-Edits, Debugging). 16 GB RAM. Von Mistral AI.',
            '**Codierung (bestes Dicht, 27B)**: `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro. Bestes dichtes Coding-Modell. 18 GB VRAM.',
            '**Codierung (Frontier MoE)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6 (gleichauf mit GPT-5.5), Top-Tier. MoE (32B aktiv/1T gesamt). Modified MIT-Lizenz. Benötigt Quantisierung für Consumer-Hardware.',
            '**Codierung (agentisch, langfristig)**: `ollama run laguna-xs-2.1` -- Poolsides 33B/3B-aktiv MoE, SWE-bench Verified 70,9%, 256K Kontext. Gebaut für mehrstufige Plan → Code → Test → Iterations-Schleifen. OpenMDW-1.1-Lizenz.',
            '**Agent-Aufgaben und Tool-Calling**: `ollama run gemma4:e4b` -- Veröffentlicht 2. April 2026. Built-in Tool-Calling + Vision-Unterstützung. Empfohlen für lokale Agenten, Function-Calling und strukturierte Ausgabe. 6 GB RAM.',
            '**Reasoning und Mathematik**: `ollama run deepseek-r1:7b` -- Chain-of-Thought-Modell, beste lokale Mathe-Leistung bei 7B.',
            '**Mehrsprachig**: `ollama run qwen3:8b` -- 29+ native Sprachen, stärkste nicht-englische Unterstützung, 76% HumanEval.',
            '**Russischsprachige Aufgaben**: `ollama run qwen3:8b` oder `ollama run mistral-small3.1` -- beide enthalten Russisch im nativen mehrsprachigen Training; Qwen3 erzielt höhere Werte bei nicht-englischen Benchmarks, Mistral Small 3.1 hat informell eine stärkere konversationelle russische Sprachgewandtheit. Keines der beiden Modelle hat russischen Ursprung.',
            '**Unzensiert / Allzweck**: `ollama run dolphin3` -- Dolphin 3.0 (Cognitive Computations, aufbauend auf Llama 3.1), keine eingebaute Inhaltsfilterung, für allgemeinen Chat, Codierung und agentische Aufgaben.',
            '**Bildverarbeitung**: `ollama run gemma4:e4b` -- Vision + Tool Calling, jetzt ~90% schneller auf Apple Silicon. Oder `ollama run llama3.2-vision:11b` für dedizierte Vision.',
            '**Schnell und leichtgewichtig**: `ollama run gemma2:2b` -- schnellste CPU-Inferenz, 1,7 GB RAM.',
            '**Hohe Qualität (16 GB RAM)**: `ollama run mistral-small3.1` -- nahe 70B Qualität bei 14 GB RAM.',
            '**Heimautomatisierung / Wake-Word-KI**: `ollama run phi4-mini` — Phi-4 Mini (3.8B, ~3 GB VRAM) verarbeitet Home Assistant Sprachbefehle mit 20–25 Tok/Sek auf einem Mini-PC ohne dedizierte GPU. Siehe [Home Assistant + Ollama Integrationsguide →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-de.webp',
          imageCaption: 'Ollama-Modellauswahl nach Anwendungsfall: Juli 2026. Chat: qwen3.8:27b, Codierung: kimi-k2.6 / laguna-xs-2.1, Reasoning: deepseek-r1:7b.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'Welche Modelle wurden zuletzt zu Ollama hinzugefügt?',
          content: 'Dies sind die neuesten Modelle der Ollama-Bibliothek, das neueste zuerst. Prüfe die Verfügbarkeit mit `ollama pull <modell>`, bevor du Workflows darauf aufbaust — neue Modelle erscheinen innerhalb weniger Tage nach Veröffentlichung auf ollama.com/library.',
          rows: [
            { 'Modell': 'nemotron-3.5-super', 'Veröffentlicht': '14. Oktober 2026', 'Ideal für': 'NVIDIA — 120B Vision-Language, Coding, Reasoning, Tool-Nutzung, bis 1M Kontext', 'Ollama-Befehl': 'ollama run nemotron-3.5-super' },
            { 'Modell': 'nemotron-3.5-bolt', 'Veröffentlicht': '14. Oktober 2026', 'Ideal für': 'NVIDIA — MoE 74B gesamt / 9B aktiv, lokales Coding und Tools, 25 GB', 'Ollama-Befehl': 'ollama run nemotron-3.5-bolt' },
            { 'Modell': 'nemotron-3.5-lightning', 'Veröffentlicht': '2026', 'Ideal für': 'NVIDIA — 30B-MoE, 3B aktiv, dauerhaft laufende Agenten, 1M Kontext', 'Ollama-Befehl': 'ollama run nemotron-3.5-lightning' },
            { 'Modell': 'glm-5.3', 'Veröffentlicht': '2026', 'Ideal für': 'Z.ai — Flaggschiff mit offenen Gewichten für Coding und langfristige Agenten', 'Ollama-Befehl': 'ollama run glm-5.3' },
            { 'Modell': 'granite4.2', 'Veröffentlicht': '2026', 'Ideal für': 'IBM — Apache 2.0, 3B / 8B / 30B, 128K Kontext', 'Ollama-Befehl': 'ollama run granite4.2' },
            { 'Modell': 'qwen3.8:27b', 'Veröffentlicht': 'August 2026', 'Ideal für': 'Bestes Gesamtmodell auf Consumer-Hardware, 61,7 SWE-bench Pro (laut Qwen), 18 GB', 'Ollama-Befehl': 'ollama run qwen3.8:27b' },
            { 'Modell': 'laguna-xs-2.1', 'Veröffentlicht': '2. Juli 2026', 'Ideal für': 'Poolside — agentisches Coding, MoE 33B/3B aktiv, 20 GB, 256K Kontext', 'Ollama-Befehl': 'ollama run laguna-xs-2.1' },
            { 'Modell': 'kimi-k2.7-code', 'Veröffentlicht': '2026', 'Ideal für': 'Moonshot AI — Coding-fokussiert, bei Ollama nur Cloud-Tag', 'Ollama-Befehl': 'ollama run kimi-k2.7-code:cloud' },
            { 'Modell': 'kimi-k2.6', 'Veröffentlicht': '20. April 2026', 'Ideal für': 'Frontier-Coding (SWE-Bench Pro 58,6), bei Ollama nur Cloud-Tag', 'Ollama-Befehl': 'ollama run kimi-k2.6:cloud' },
            { 'Modell': 'gpt-oss:20b', 'Veröffentlicht': '2026', 'Ideal für': 'Bestes kleines Modell / 16 GB, ~o3-mini, einstellbares Reasoning', 'Ollama-Befehl': 'ollama run gpt-oss:20b' },
            { 'Modell': 'gemma4:e4b', 'Veröffentlicht': '2. April 2026', 'Ideal für': 'Vision + Tool-Aufrufe (E2B/E4B/12B/26B/31B)', 'Ollama-Befehl': 'ollama run gemma4:e4b' },
            { 'Modell': 'qwen3:30b', 'Veröffentlicht': '2026', 'Ideal für': 'Ausgewogen; qwen3-coder:30b für Code-Vervollständigung', 'Ollama-Befehl': 'ollama run qwen3:30b' },
          ],
          columns: ['Modell', 'Veröffentlicht', 'Ideal für', 'Ollama-Befehl'],
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
            '**Leistung auf Benchmarks**: 52 % bei MATH (gegenüber 23 % Llama 3.1 8B), verbesserte Logik und mehrschrittige Problemlösung.',
            '**RAM-Anforderungen**: 1,5B: 2 GB, 7B: 6 GB, 70B: 44 GB (Q4-Quantisierung).',
            '**Lizenz**: Deepseek-Lizenzen (einige Einschränkungen bei Decompilation; überprüfen Sie vor Enterprise-Einsatz).',
            '**EU-Datenhandhabung**: Bei Einsatz in EU-Regionen verarbeitet DeepSeek-R1 Daten gemäß EU-Datenschutzbestimmungen. Lokale Ausführung auf privaten Servern oder Geräten gewährleistet Datensouveränität -- keine Cloud-Übertragung erforderlich.',
          ],
        },
        visionModels: {
          id: 'vision-models',
          title: 'Vision-Modelle auf Ollama',
          content: 'Juli 2026: Diese Modelle auf Ollama unterstützen Bildeingabe (multimodal). Gemma 4 unterstützt sowohl Vision ALS AUCH Tool Calling – einzigartig unter Vision-Modellen auf Ollama – und läuft nach dem Juli-MLX-Update jetzt fast 90% schneller auf Apple Silicon.',
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
          content: 'Download-Zählungen bevorzugen immer noch Llama 3.x aufgrund der Häufigkeit von Tutorials. Für neue Projekte im Juli 2026 sind Qwen3.8-27B (bestes Modell fuer Consumer-Hardware), Kimi K2.6 oder Laguna XS 2.1 (Codierung), gpt-oss:20b und qwen3:30b zu bevorzugen.',
          columns: ['#', 'Modell', 'Beste für', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-de.webp',
          imageCaption: 'Beste Ollama-Modelle Juli 2026: Qwen3.8-27B (bestes Modell, 24 GB Q4), Kimi K2.6, Laguna XS 2.1 (agentische Codierung), gpt-oss:20b. Llama 4 Scout für 10M-Token-Kontext (~55 GB).',
          rows: [
            { '#': '1', 'Modell': '[Qwen3.8-27B](https://ollama.com/library/qwen3)', 'Beste für': 'Bestes Modell fuer Consumer-Hardware', 'RAM': '24 GB (Q4)', 'HumanEval': '61,7 SWE-bench Pro' },
            { '#': '2', 'Modell': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Beste für': 'Frontier-Coding, MoE (32B/1T), Modified MIT', 'RAM': 'Quantisiert', 'HumanEval': '58,6 SWE-Bench Pro' },
            { '#': '3', 'Modell': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Beste für': 'Bestes kleines / 16 GB, einstellbares Reasoning', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Modell': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Beste für': 'Ausgewogen; qwen3-coder:30b für Code', 'RAM': '~18 GB', 'HumanEval': 'stark' },
            { '#': '5', 'Modell': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Beste für': 'Agentische Codierung, langfristig (planen/coden/testen/iterieren)', 'RAM': 'Quantisiert', 'HumanEval': '70,9% SWE-bench Verified' },
            { '#': '6', 'Modell': '[Devstral Small 24B](https://ollama.com/library/devstral-small-2)', 'Beste für': 'Agentic Codierung (Multi-Datei)', 'RAM': '15 GB', 'HumanEval': '65.8% (Verified)' },
            { '#': '7', 'Modell': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Beste für': 'Reasoning, Mathe', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '8', 'Modell': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Beste für': 'Vision + Tool Calling (multimodal)', 'RAM': '~6 GB', 'Notes': 'Agent-ready' },
            { '#': '9', 'Modell': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Beste für': 'Long-Context 10M + multimodal, MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '10', 'Modell': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Beste für': 'Einstiegsmodell, allgemeiner Chat', 'RAM': '2,5 GB', 'HumanEval': '60%' },
          ],
        },
        howToBrowse: {
          id: 'how-to-browse',
          title: 'Wie durchsuchen Sie die Ollama-Bibliothek?',
          content: 'Es gibt zwei Möglichkeiten, mit Ollama-Modellen zu arbeiten. **Installierte Modelle wechseln:** In der Ollama Mac-App klicken Sie auf den Modell-Dropdown-Button am unteren Rand des Chat-Eingabefeldes (zeigt den aktuellen Modellnamen, z. B. "llama4:scout"), um zwischen lokal installierten Modellen zu wechseln. **Neue Modelle finden und herunterladen:** Besuchen Sie ollama.com/library, um mehrere hundert Modelle nach Kategorie zu durchsuchen, und nutzen Sie dann die CLI-Befehle unten zum Herunterladen.',
          codeBlock: `ollama list
# Zeigt alle installierten Modelle an

ollama pull llama4:scout
# Lädt Llama 4 Scout herunter (beste Qualität, MoE)

ollama pull qwen3.8:27b
# Lädt Qwen3.8-27B herunter (Best Coding Model, 61,7 SWE-bench Pro)

ollama run llama4:scout
# Startet eine interaktive Chat-Sitzung

ollama run -m deepseek-r1:7b "Lösen Sie 2^10"
# Löst Reasoning-Aufgaben mit CoT aus`,
          codeLanguage: 'bash',
          items: [
            'Öffnen Sie [ollama.ai/library](https://ollama.ai/library) in einem Webbrowser für die vollständige durchsuchbare Bibliothek mit mehreren hundert Modellen.',
            'Filteroptionen: Modellgröße, Lizenz, Veröffentlichungsdatum, Benchmarks (MMLU, HumanEval, MATH).',
            'Ratings pro Modell: Nutzer-Downloads, GitHub-Sterne (für das Basis-Modell), Ollama-Sterne.',
            'Neue Modelle: Ollamás Bibliothek wird kontinuierlich aktualisiert (neue Modelle erscheinen Tage nach der Veröffentlichung).',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Wie beeinflussen regionale Datenschutzregeln deine Ollama-Modellwahl?',
          content: [
            '**EU / DSGVO + Lizenz-Compliance.** Für EU-Organisationen, die Ollama-Modelle produktiv einsetzen, zählt die Lizenz so viel wie die Leistung. Apache 2.0 (vollständig offen, kommerzielle Nutzung erlaubt): Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Meta Llama Community Licence (kommerzielle Nutzung ab 700 Mio. monatlich aktiven Nutzern eingeschränkt): Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (kommerzielle Nutzung erlaubt): DeepSeek-R1 7B und 14B. Modifizierte MIT (kommerzielle Nutzung mit Namensnennungsklausel erlaubt): Kimi K2.6. OpenMDW-1.1 (permissiv, kommerzielle Nutzung erlaubt): Laguna XS 2.1. Prüfe die Lizenzbedingungen vor dem kommerziellen Einsatz immer. Für EU-Unternehmen in regulierten Branchen sind Mistral-Modelle (Frankreich, Apache 2.0) wie Devstral Small 2 ein sinnvoller Standard -- EU-Herkunft und permissive Lizenz. Läuft ein Modell vollständig on-premises über Ollama, werden Prompts nicht an externe Server gesendet; das unterstützt die DSGVO-Pflichten, erfüllt sie aber nicht allein (ein `:cloud`-Tag sendet Daten an den gehosteten Dienst von Ollama).',
            '**Japan (METI).** Für japanische Unternehmens-Deployments mit Ollama ist Qwen3 / Qwen3.8 eine empfehlenswerte Modellfamilie -- sie verarbeitet japanischen Text nativ, was Inferenzzeit und KV-Cache zugutekommt. Für japanische Coding-Workflows: Qwen3.8-27B (61,7 SWE-bench Pro laut Qwen) verarbeitet japanische Code-Kommentare nativ. Die METI-KI-Governance-Dokumentation verlangt in der Regel die exakte Modellversion. Mit `ollama show <modell>` erhältst du die vollständige Spezifikation (Parameterzahl, Quantisierung, Kontextlänge) für Compliance-Aufzeichnungen.',
            '**China.** Nach den CAC-Maßnahmen für generative KI (2023) müssen Organisationen, die Endnutzern KI-Dienste anbieten, die verwendeten Modelle registrieren. Qwen3 / Qwen3.8 (Alibaba, Apache 2.0) ist eine naheliegende Wahl für chinesische Unternehmens-Deployments mit Ollama -- chinesische Herkunft, Apache-2.0-Lizenz, starke Leistung auf Chinesisch. Kimi K2.6 (Moonshot AI, modifizierte MIT) stammt ebenfalls aus China, wird bei Ollama aber nur als Cloud-Tag geführt, und lokale Läufe brauchen Server-Hardware. Befehle: `ollama run qwen3.8:27b` für beste Qualität, `ollama run qwen3:8b` für Geschwindigkeit. DeepSeek-R1 (MIT-Lizenz) eignet sich für Reasoning. Bei lokal mit Ollama verarbeiteten Daten löst die Inferenz selbst die PIPL-Anforderungen an grenzüberschreitende Übermittlung nicht aus -- prüfe deine eigenen Compliance-Pflichten.',
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
              a: 'Llama 3.1 8B ist Allzweck-freundlich, aber Qwen3 oder Mistral Small sind für technische Aufgaben spezialisiert. Für Codierung: Schalten Sie zu Qwen3 8B um (75,4 % HumanEval gegenüber 68,2 % für Llama). Beide laufen unter 8 GB RAM.',
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
            '[Hardware-Guide für lokale LLMs](/de/local-llms/local-llm-hardware-guide) — Unsicher, ob dein PC diese Modelle ausführen kann? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist die neueste Ollama-Version?',
              a: 'Die neueste stabile Ollama-Version ist v0.40.5, veröffentlicht am 14. Oktober 2026. Am 16. Oktober folgte eine Vorabversion v0.40.6, die noch nicht als stabil markiert ist. Laden Sie sie von ollama.com/download herunter oder aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` unter Linux und `brew upgrade ollama` unter macOS.',
            },
            {
              q: 'Wo finde ich das Ollama-Changelog und die Release Notes?',
              a: 'Die Release Notes aller Versionen stehen unter github.com/ollama/ollama/releases, mit Datum und Changelog je Tag. Die neuesten stabilen Einträge sind v0.40.5 (14. Oktober 2026 -- Unterstützung für NVIDIA Nemotron 3.5 Super, Cloud-Zugriff auf Entscheidungsmodelle), v0.40.4 (12. Oktober -- Entscheidungsmodelle über `ollama run --ask`, schnelleres Laden) und v0.40.0 (25. September -- MLX standardmäßig auf Apple Silicon).',
            },
            {
              q: 'Wie prüfe ich, welche Ollama-Version installiert ist?',
              a: 'Führen Sie `ollama --version` im Terminal aus. Die Ausgabe lautet etwa `ollama version 0.40.5`. Liegt die Nummer unter der aktuellen Version, aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` (Linux) oder `brew upgrade ollama` (macOS) und prüfen Sie danach erneut mit `ollama --version`.',
            },
            {
              q: 'Wann wurde Ollama erstmals veröffentlicht?',
              a: 'Die erste Ollama-Version v0.0.1 wurde am 8. Juli 2023 auf GitHub veröffentlicht, kurz nach der Anlage des Repositorys am 26. Juni 2023. Im Oktober 2026 war das Projekt bei v0.40.5 angekommen. Die vollständige Liste steht unter github.com/ollama/ollama/releases.',
            },
            {
              q: 'Wie viel RAM brauche ich für ein lokales Modell?',
              a: '7B-Modelle benötigen 6,5-8 GB RAM. 13B-Modelle: 11-14 GB. 70B-Modelle: 42-48 GB mit Quantisierung (Q4_K_M). Kleiner (3B): 2-3 GB. Überprüfen Sie mit `ollama show [model-name]` vor dem Herunterladen.',
            },
            {
              q: 'Kann ich Ollama-Modelle offline ausführen?',
              a: 'Ja. Nach dem initialen Download läuft jede Inferenz lokal, ohne Internetverbindung. Ollama überprüft gelegentlich Updates (aber nicht automatisch angewendet).',
            },
            {
              q: 'Wie lautet der offizielle Name des Unternehmens hinter Ollama?',
              a: 'Das Unternehmen ist Ollama Inc., ein Series-B-finanziertes Startup mit Sitz in Palo Alto, Kalifornien, gegründet 2023 von Jeffrey Morgan und Michael Chiang.',
            },
            {
              q: 'Welches Modell hat die beste deutsche Sprachunterstützung?',
              a: 'Qwen3 / Qwen3.8-27B hat überlegene deutsche Unterstützung (trainiert auf CulturaX und DE-Wikitext). Llama 3.3 ist für Deutsch angemessen, aber Qwen ist präziser. Devstral Small 24B (Mistral AI, französisches Unternehmen, Apache 2.0) ist für Deutsch und Französisch kompetent.',
            },
            {
              q: 'Welche Ollama-Modelle eignen sich am besten für russischsprachige Aufgaben?',
              a: 'Qwen3 / Qwen3.8 und Mistral Small 3.1 enthalten beide Russisch im nativen mehrsprachigen Training. Qwen3 erzielt höhere Werte bei nicht-englischen Benchmarks, Mistral Small 3.1 hat informell eine stärkere konversationelle russische Sprachgewandtheit. Keines der beiden Modelle hat russischen Ursprung.',
            },
            {
              q: 'Welches Dolphin-Modell sollte ich mit Ollama verwenden?',
              a: 'Verwenden Sie Dolphin 3.0 (`ollama pull dolphin3`), nicht das veraltete `dolphin-mistral` (zuletzt 2024 aktualisiert, basierend auf Mistral 0.2). Dolphin 3.0, gepflegt von Cognitive Computations, basiert auf Llama 3.1, hat keine eingebaute Inhaltsfilterung und ist als Allzweck-Modell für Coding, Mathematik, agentische Aufgaben und uneingeschränkten Chat konzipiert.',
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
              a: 'Ja. Llama 3.2 Vision, Qwen2.5-VL und Gemma 3 sind alle Multi-Modal. Laden Sie Bilder als lokale Dateien hoch; keine Cloud-Übertragung. Unterstützung: JPEG, PNG, GIF.',
            },
            {
              q: 'Wie aktualisiere ich auf neuere Ollama-Modellversionen?',
              a: 'Führen Sie `ollama pull [model-name]` erneut aus. Ollama lädt nur die Unterschiede herunter (Deduplizierung). Alte Versionen können gelöscht werden mit `ollama rm [model-name]:tag`.',
            },
            {
              q: 'Muss ich bei der Verwendung lokaler LLMs via Ollama die DSGVO beachten?',
              a: 'Ja. DSGVO Artikel 32 erfordert angemessene Sicherheitsmaßnahmen für personenbezogene Daten. Lokale Inferenz auf privaten Geräten oder Servern kann helfen, Datenschutz-durch-Design-Anforderungen zu erfüllen. Ohne Cloud-Übertragung verlassen die Daten Ihr System nicht, was Datensouveränität und die Umsetzung von Schutzmaßnahmen erleichtert; ob z. B. BSI-Grundschutz-Anforderungen erfüllt sind, hängt von Ihrer Gesamtkonfiguration ab (keine Rechtsberatung). Vorsicht: Wenn Sie ein Cloud-Modell verwenden, prüfen Sie zunächst die Datenverarbeitungsverträge.',
            },
            {
              q: 'Ist Ollama mit Open-Source-Modellen für den deutschen Mittelstand geeignet?',
              a: 'Ja. Kleine und mittlere Unternehmen (KMU) in Deutschland profitieren von: Datensouveränität (kein Cloud-Vendor Lock-in), Einhaltung von IT-Sicherheitsstandards (BSI IT-Grundschutz), Skalierbarkeit auf Standard-Hardware und Einsparungen durch keine API-Gebühren. Qwen3 8B läuft auf einer typischen Office-GPU; Llama 3.1 8B ist ein bewährtes Standard-Mittelstand-Modell für interne Tools, Customer-Service-Automation und Dokumentenverarbeitung.',
            },
          ],
        },
        relatedReading: {
          title: 'Verwandte Lektüre',
          items: [
            '[Ollama-Vision-Modelle (2026)](/de/power-local-llm/ollama-vision-models-review) -- ein dedizierter, praktischer Leitfaden zum Ausführen bildfähiger Modelle über Ollama, mit echter CLI-/API-Syntax.',
            '[Lokale LLMs mit VS Code und Cursor installieren](/de/local-llms/local-llms-with-vscode-cursor) -- VS Code und Cursor erkennen jetzt Ollama automatisch.',
            '[So wählen Sie ein lokales Modell: Llama vs. Qwen vs. Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) -- Vollständiger Vergleich für Anfänger.',
            '[Ollama vs. LM Studio: Welches ist schneller?](/de/local-llms/ollama-vs-lm-studio) -- GPU-Benchmarks und Durchsatzvergleiche.',
            '[Wie installieren Sie Ollama auf Windows/Mac](/de/local-llms/how-to-install-ollama) -- Schritt-für-Schritt-Installations- und Umgebungskonfiguration.',
            '[Hardware für lokale LLMs: GPU-Anforderungen](/de/local-llms/local-llm-hardware-guide) -- Welche GPU, RAM und Speicher für Ihr Modell erforderlich ist.',
            '[Troubleshooting: Ollama-Fehler und Lösungen](/de/local-llms/troubleshooting-local-llm-setup) -- CUDA, MPS, CPU-Fallback und häufige Fehler.',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) -- vollständige Zeitleiste aller wichtigen Open-Weight-Releases mit Ollama-Verfügbarkeitsdaten.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Ollama-Modellbibliothek](https://ollama.ai/library) -- Mehrere hundert Modelle mit Live-Download-Statistiken.',
            '[Ollama GitHub: Beliebte Modelle nach Downloads](https://github.com/ollama/ollama/issues/3149) -- Monatliche Einträge zu Benutzern und Download-Trends (öffentliche Daten).',
            '[DeepSeek-R1 Whitepaper](https://arxiv.org/abs/2501.12948) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" (Januar 2025).',
            '[Gemma 3 Announcement](https://blog.google/technology/googles-latest-gemma-models/) -- Google Blog: Gemma 3 Multimodal, 128K Kontext, Februar 2026.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama aktuelle Version 2026: v0.40.5 und die besten Modelle',
        'description': 'Aktuelle Ollama-Version v0.40.5 (Oktober 2026), vollstaendiges Changelog und die neuesten Modelle: Laguna XS 2.1, Kimi K2.7 Code, Kimi K2.6, Qwen3.8. Verifizierte Benchmarks, RAM, Pull-Befehle.',
        'url': 'https://www.promptquorum.com/de/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-10-17',
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.1 8B', 'description': 'Das am häufigsten heruntergeladene Modell, ideal für Anfänger und Allzweckanwendungen. 6,5 GB RAM erforderlich.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 8B', 'description': 'Das am schnellsten wachsende Modell mit überlegener Codierungs- und Mathematikleistung. 6,5 GB RAM erforderlich.' },
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
            'name': 'Was ist die neueste Ollama-Version?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die neueste stabile Ollama-Version ist v0.40.5, veröffentlicht am 14. Oktober 2026. Am 16. Oktober folgte eine Vorabversion v0.40.6, die noch nicht als stabil markiert ist. Laden Sie sie von ollama.com/download herunter oder aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` unter Linux und `brew upgrade ollama` unter macOS.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Wo finde ich das Ollama-Changelog und die Release Notes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Release Notes aller Versionen stehen unter github.com/ollama/ollama/releases, mit Datum und Changelog je Tag. Die neuesten stabilen Einträge sind v0.40.5 (14. Oktober 2026 -- Unterstützung für NVIDIA Nemotron 3.5 Super, Cloud-Zugriff auf Entscheidungsmodelle), v0.40.4 (12. Oktober -- Entscheidungsmodelle über `ollama run --ask`, schnelleres Laden) und v0.40.0 (25. September -- MLX standardmäßig auf Apple Silicon).',
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie prüfe ich, welche Ollama-Version installiert ist?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Führen Sie `ollama --version` im Terminal aus. Die Ausgabe lautet etwa `ollama version 0.40.5`. Liegt die Nummer unter der aktuellen Version, aktualisieren Sie mit `curl https://ollama.ai/install.sh | sh` (Linux) oder `brew upgrade ollama` (macOS) und prüfen Sie danach erneut mit `ollama --version`.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Wann wurde Ollama erstmals veröffentlicht?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die erste Ollama-Version v0.0.1 wurde am 8. Juli 2023 auf GitHub veröffentlicht, kurz nach der Anlage des Repositorys am 26. Juni 2023. Im Oktober 2026 war das Projekt bei v0.40.5 angekommen. Die vollständige Liste steht unter github.com/ollama/ollama/releases.',
            }
          },
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
            'name': 'Wie lautet der offizielle Name des Unternehmens hinter Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Das Unternehmen ist Ollama Inc., ein Series-B-finanziertes Startup mit Sitz in Palo Alto, Kalifornien, gegründet 2023 von Jeffrey Morgan und Michael Chiang.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Welches Modell hat die beste deutsche Sprachunterstützung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 8B hat eine überlegene deutsche Unterstützung (trainierten auf CulturaX und DE-Wikitext). Llama 3.3 ist für Deutsch angemessen, aber Qwen ist präziser. Mistral Small ist für Deutsch und Französisch kompetent.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Welche Ollama-Modelle eignen sich am besten für russischsprachige Aufgaben?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 / Qwen3.8 und Mistral Small 3.1 enthalten beide Russisch im nativen mehrsprachigen Training. Qwen3 erzielt höhere Werte bei nicht-englischen Benchmarks, Mistral Small 3.1 hat informell eine stärkere konversationelle russische Sprachgewandtheit. Keines der beiden Modelle hat russischen Ursprung.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Welches Dolphin-Modell sollte ich mit Ollama verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Verwenden Sie Dolphin 3.0 (`ollama pull dolphin3`), nicht das veraltete `dolphin-mistral` (zuletzt 2024 aktualisiert, basierend auf Mistral 0.2). Dolphin 3.0, gepflegt von Cognitive Computations, basiert auf Llama 3.1, hat keine eingebaute Inhaltsfilterung und ist als Allzweck-Modell für Coding, Mathematik, agentische Aufgaben und uneingeschränkten Chat konzipiert.',
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
              'text': 'Ja. Llama 3.2 Vision, Qwen2.5-VL und Gemma 3 sind alle Multi-Modal. Laden Sie Bilder als lokale Dateien hoch; keine Cloud-Übertragung. Unterstützung: JPEG, PNG, GIF.',
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
              'text': 'Ja. DSGVO Artikel 32 erfordert angemessene Sicherheitsmaßnahmen für personenbezogene Daten. Lokale Inferenz auf privaten Geräten oder Servern kann helfen, Datenschutz-durch-Design-Anforderungen zu erfüllen. Ohne Cloud-Übertragung verlassen die Daten Ihr System nicht, was Datensouveränität und die Umsetzung von Schutzmaßnahmen erleichtert; ob z. B. BSI-Grundschutz-Anforderungen erfüllt sind, hängt von Ihrer Gesamtkonfiguration ab (keine Rechtsberatung). Vorsicht: Wenn Sie ein Cloud-Modell verwenden, prüfen Sie zunächst die Datenverarbeitungsverträge.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ist Ollama mit Open-Source-Modellen für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Kleine und mittlere Unternehmen (KMU) in Deutschland profitieren von: Datensouveränität (kein Cloud-Vendor Lock-in), Einhaltung von IT-Sicherheitsstandards (BSI IT-Grundschutz), Skalierbarkeit auf Standard-Hardware und Einsparungen durch keine API-Gebühren. Qwen3 8B läuft auf einer typischen Office-GPU; Llama 3.1 8B ist ein bewährtes Standard-Mittelstand-Modell für interne Tools, Customer-Service-Automation und Dokumentenverarbeitung.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'Die Präsentation behandelt: Top 10 Ollama-Modelle nach Download-Häufigkeit, Leistungsvergleich (60-74% HumanEval), beste Modelle nach Anwendungsfall (Chat, Codierung, Reasoning, Vision), DeepSeek-R1 Chain-of-Thought-Reasoning und exakte Pull-Befehle. Laden Sie die PDF als Ihre Ollama-Modellauswahl-Referenzkarte herunter.',
    },
    fr: {
      theme: 'Best Models',
      title: 'Ollama Dernière Version 2026 : v0.40.5 + Meilleurs Modèles par Cas d\'Usage',
      seoTitle: 'Ollama Dernière Version 2026 : v0.40.5 + 10 Meilleurs Modèles',
      intro: 'La version stable actuelle d\'Ollama est la v0.40.5 (14 octobre 2026), qui ajoute NVIDIA Nemotron 3.5 Super et Bolt, la prise en charge des modèles de décision et des moteurs llama.cpp et MLX mis à jour ; la v0.40.6 est une préversion. Depuis la v0.33.1 d\'août, Ollama a fait de MLX le moteur par défaut sur Apple Silicon (v0.40.0) et ajouté l\'intégration à ChatGPT Desktop (v0.34.0). Le meilleur modèle global sur matériel grand public reste Qwen3.8-27B (61,7 SWE-bench Pro selon Qwen, téléchargement de 18 Go, tient sur une carte de 24 Go ou un Mac de 32 Go) ; le meilleur pour coder dépend de votre configuration — voir le détail par cas d\'usage ci-dessous.',
      metaDescription: 'La dernière version d\'Ollama est la v0.40.5. Découvrez ce qui a changé depuis la v0.33, les nouveaux modèles (Nemotron 3.5, GLM-5.3, Granite 4.2) et le meilleur pour le chat, le code et la vision.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-fr.webp',
      publishDate: '2026-04-11',
      readTime: '9 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'modèles Ollama 2026',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Historique des versions', anchor: '#ollama-version-history' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: 'Le meilleur modèle Ollama en 2026 est Qwen3.8-27B (61,7 SWE-bench Pro selon Qwen, 18 Go) ; les meilleurs choix locaux pour coder sont Qwen3.8-27B, Devstral Small 2 et Laguna XS 2.1 (Kimi K2.6 n\'existe que dans le cloud sur Ollama).' },
            { type: 'plain-terms', text: "Ollama est un outil gratuit qui permet d'exécuter des modèles d'IA sur votre propre ordinateur, sans internet ni clé API. Voici les meilleurs modèles téléchargeables en une seule commande, classés selon vos besoins réels." },
          ],
          items: [
            '**Meilleur global sur matériel grand public** : Qwen3.8-27B (61,7 SWE-bench Pro selon Qwen, téléchargement de 18 Go, tient sur une carte de 24 Go). Polyvalent : qwen3:30b.',
            '**Le plus téléchargé** : Llama 3.2 3B (tutoriels) et la famille Llama -- le plus large support d\'outils.',
            '**Meilleur raisonnement** : DeepSeek-R1 (chaîne de pensée) et gpt-oss:20b (raisonnement réglable, niveau ~o3-mini).',
            '**Meilleur pour coder** : Qwen3.8-27B (meilleur dense), Laguna XS 2.1 (agentique, long terme), Devstral Small 2 (meilleur agentique 24B), qwen3-coder:30b (complétion) ; Kimi K2.6 est de taille frontière mais uniquement dans le cloud sur Ollama -- meilleurs scores annoncés pour leur taille.',
            '**Meilleur petit modèle / 16 Go** : gpt-oss:20b. **Meilleur vision/multimodal** : Gemma 4 (E4B+). **Meilleur contexte long (10M) / grand multimodal** : Llama 4 Scout (~55 Go). **Meilleur usage général sans censure** : Dolphin 3.0. **Agents toujours actifs** : Nemotron 3.5 Lightning.',
            'La bibliothèque Ollama compte plusieurs centaines de modèles sélectionnés (des milliers d\'autres via des Modelfiles GGUF personnalisés). Tous sont disponibles avec `ollama pull <nom>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'Quelle Est la Dernière Version d\'Ollama et Qu\'est-ce Qui a Changé ?',
          content: [
            '**Version Ollama actuelle : v0.40.5** (publiée le 14 octobre 2026). C\'est la dernière version stable, disponible sur ollama.com/download. Une préversion v0.40.6 est apparue le 16 octobre mais n\'est pas encore marquée comme stable. Mettez à jour avec `curl https://ollama.ai/install.sh | sh` (macOS : `brew upgrade ollama`), puis vérifiez avec `ollama --version`.',
            '**Ce qui a changé dans la série v0.33–v0.40 (août–octobre 2026) :** la v0.33.0 (21 août) a activé Claude Desktop comme passerelle tierce et fiabilisé les points de restauration du préremplissage du cache KV. La v0.34.0 (5 septembre) a permis d\'utiliser les modèles Ollama dans ChatGPT Desktop et accéléré la sortie structurée sur Apple Silicon ; la v0.34.1 (14 septembre) a retiré le statut expérimental de `ollama create` avec safetensors MLX. La v0.40.0 (25 septembre) exécute par défaut sur MLX, sous Apple Silicon, les architectures compatibles comme qwen3.8, gemma4 et qwen3.6. La v0.35.0 (28 septembre) a ajouté les modèles de décision via `/v1/systemone` — des modèles qui renvoient des choix, des probabilités et des scores plutôt que du texte, à commencer par Nimble et Tev1 — et la v0.35.1 (29 septembre) les modèles multimodaux Clef. La v0.40.2 (8 octobre) conserve des sauvegardes lors de la mise à niveau en arrière-plan des anciens modèles, la v0.40.4 (12 octobre) a ajouté `ollama run <modèle-de-décision> --ask`, et la v0.40.5 (14 octobre) a apporté la prise en charge de NVIDIA Nemotron 3.5 Super et l\'accès cloud aux modèles de décision Clef. Notes complètes : github.com/ollama/ollama/releases.',
            '**Nouveaux modèles ajoutés depuis la dernière mise à jour (fin juin–juillet 2026) :**',
          ],
          items: [
            '**Laguna XS 2.1** (Poolside, 2 juillet 2026) — 33B au total / 3B actif MoE conçu pour le codage agentique et le travail local de longue durée : planifier, écrire du code, exécuter des tests, itérer. Contexte 256K, licence OpenMDW-1.1. SWE-bench Verified 70,9%, SWE-bench Multilingual 63,1%. Téléchargement : `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** (Moonshot AI, juin 2026) — Modèle agentique axé sur le codage, construit sur Kimi K2.6, visant spécifiquement les sessions de codage de longue durée. Téléchargement : `ollama pull kimi-k2.7-code:cloud`',
            '**DeepSeek V4 Pro** (DeepSeek, 23 avril 2026) — Spécialiste du codage algorithmique, 93.5% LiveCodeBench, licence MIT. Variante économique DeepSeek V4 Flash pour le materiel plus léger. Téléchargement : `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI, 20 avril 2026) — Modèle de codage de frontière, SWE-Bench Pro 58.6, SWE-bench Verified 80.2% (à égalité avec GPT-5.5). Architecture MoE (32B actif / 1T au total). Licence Modified MIT.',
            '**Qwen3.8-27B** (Alibaba, 16 avril 2026) — Meilleur global sur materiel grand public, 61,7 SWE-bench Pro, Apache 2.0, tient en 24 Go en Q4. Aussi Qwen3.6-35B-A3B (MoE, 73,4 SWE-bench).',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — 744B / 40B actif MoE, licence MIT. Leader en génération de code structuré.',
            '**gpt-oss** (OpenAI, 2026) — MoE à poids ouverts : gpt-oss:20b (21B au total / 3,6B actif, tourne en 16 Go, ~niveau o3-mini, raisonnement reglable) et gpt-oss:120b (80 Go).',
            '**Gemma 4** (Google, 2 avril 2026) — Tailles multimodales E2B / E4B / E12B (26B MoE) / E27B (31B dense), toutes avec vision et appel d\'outils. Désormais ~90 % plus rapide sur Apple Silicon (mise à jour MLX de juillet 2026). E4B tourne en ~6 Go VRAM.',
          ],
          codeBlock: '# Mettre à jour Ollama vers la dernière version (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Ou sur Mac : brew upgrade ollama\n\n# Vérifier la version actuelle\nollama --version  # Sortie : ollama version 0.40.5\n\n# Télécharger les nouveaux modèles de juillet 2026\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'Quel est l\'historique des versions d\'Ollama ?',
          content: '**Ollama a publié sa première version, la v0.0.1, le 8 juillet 2023 et a atteint la v0.40.5 le 14 octobre 2026.** Le tableau liste les versions qui ont changé ce que l\'on peut faire avec Ollama ; tous les tags, avec leurs notes complètes, sont sur github.com/ollama/ollama/releases. La numérotation est passée de v0.35 à v0.40 fin septembre 2026 : la v0.40.0 (25 septembre) figure donc à côté des versions v0.35 (28-29 septembre) sur GitHub.',
          rows: [
            { 'Version': 'v0.40.5', 'Date': '14 oct. 2026', 'Changement clé': 'Nemotron 3.5 Super ; modèles de décision cloud' },
            { 'Version': 'v0.40.0', 'Date': '25 sept. 2026', 'Changement clé': 'MLX par défaut sur Apple Silicon' },
            { 'Version': 'v0.35.0', 'Date': '28 sept. 2026', 'Changement clé': 'Modèles de décision via /v1/systemone' },
            { 'Version': 'v0.34.0', 'Date': '5 sept. 2026', 'Changement clé': 'Modèles Ollama dans ChatGPT Desktop' },
            { 'Version': 'v0.33.0', 'Date': '21 août 2026', 'Changement clé': 'Passerelle Claude Desktop ; cache KV' },
            { 'Version': 'v0.32.0', 'Date': '11 juil. 2026', 'Changement clé': 'Agent « Chat, Code & Work »' },
            { 'Version': 'v0.0.1', 'Date': '8 juil. 2023', 'Changement clé': 'Première version publique' },
          ],
          columns: ['Version', 'Date', 'Changement clé'],
        },
        mostPopular: {
          id: 'most-popular',
          title: 'Les modèles les plus populaires sur Ollama',
          content: [
            '**Ollama dispose de statistiques de téléchargement entièrement publiques.** Selon les données de juillet 2026 :',
            '**Llama 3.2 3B** reste le modèle le plus téléchargé au total, largement dû à son utilisation comme modèle de test standard lors de la première installation. Pour la qualité sur materiel grand public, Qwen3.8-27B (61,7 SWE-bench Pro, tient en 24 Go en Q4) est désormais le meilleur choix global.',
            '**Qwen3 et Qwen3.8** sont la famille de modèles la plus en forte croissance dans la bibliothèque Ollama, avec Qwen3 et la nouvelle variante dense Qwen3.8 déplaçant rapidement Qwen3. DeepSeek-R1 a connu des pics majeurs après sa sortie et reste très téléchargé pour les tâches de raisonnement. Dolphin 3.0 (Cognitive Computations, construit sur Llama 3.1) reste le modèle non censuré polyvalent le plus téléchargé pour les utilisateurs souhaitant un assistant local sans filtrage.',
            '**Llama 4 Scout** a été lancé par Meta en avril 2026 avec les variantes Scout (17B actif, 109B au total, MoE) et Maverick (17B actif, 400B au total). Llama 4 Scout est maintenant stable dans la bibliothèque Ollama (`ollama pull llama4:scout`). La famille Llama 4 utilise une architecture Mixture-of-Experts (MoE) – seuls 17B paramètres sont actifs par token, mais avec 109B paramètres au total Scout nécessite ~55 Go VRAM en Q4 (tient en 24 Go uniquement en 1,78 bit, ~20 tok/s). Les atouts de Scout sont sa fenêtre de contexte de 10M tokens et son entrée multimodale, pas son adéquation au materiel grand public. L\'écosystème Ollama s\'est considérablement étendu depuis avril 2026. Kimi K2.6 (Moonshot AI, licence Modified MIT, 32B actif / 1T au total MoE) a obtenu SWE-Bench Pro 58.6, à égalité avec GPT-5.5. Laguna XS 2.1 (Poolside) est le nouveau challenger en codage agentique, conçu spécifiquement pour les sessions de codage local de longue durée. Qwen3.8-27B a atteint 61,7 SWE-bench Pro en tant que meilleur modèle global sur materiel grand public (tient en 24 Go en Q4). Le gpt-oss:20b d\'OpenAI (21B au total / 3,6B actif MoE) tourne en 16 Go au ~niveau o3-mini avec raisonnement reglable. La version actuelle d\'Ollama, la v0.40.5 (14 octobre 2026), ajoute la prise en charge de NVIDIA Nemotron 3.5 Super.La bibliothèque Ollama référence maintenant plusieurs centaines de modèles, Laguna XS 2.1 et Kimi K2.7 Code étant les ajouts les plus récents depuis la mise à jour de juin.',
          ],
        },
        byCategory: {
          id: 'by-category',
          title: 'Meilleurs modèles par catégorie',
          content: 'La qualité de la sortie d\'un modèle dépend fortement de la façon dont vous le promptez. Pour des techniques structurées applicables à tous les modèles locaux — chain-of-thought, exemples few-shot et formatage de sortie — consultez le [guide de prompt engineering](https://www.promptquorum.com/fr/prompt-engineering). Pour les tâches de raisonnement, [le prompt engineering de chaîne de pensée](https://www.promptquorum.com/fr/prompt-engineering/chain-of-thought-prompting) améliore considérablement la qualité des sorties DeepSeek-R1 et Qwen3. Pour déterminer la RAM requise pour chaque modèle, consultez le [guide des exigences VRAM →](/fr/local-llms/how-much-vram-local-llm). Pour les workflows d\'agents avec Gemini 4, voir [Tree-of-Thought et ReAct](https://www.promptquorum.com/fr/prompt-engineering/tree-of-thought-react). Une fois qu\'un modèle à appel d\'outils de cette liste est intégré dans une boucle multi-étapes avec accès aux fichiers et aux bases de données, voir [Agents IA locaux avec MCP](/fr/power-local-llm/local-ai-agents-with-mcp-2026) pour le pattern d\'orchestration open source.',
          items: [
            '**Chat général (débutant)** : `ollama run llama3.2:3b` -- la plupart de la documentation, le modèle de démarrage le mieux soutenu.',
            '**Chat général (meilleur choix)** : `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro, meilleur global sur materiel grand public, tient en 24 Go en Q4. Polyvalent : `ollama run qwen3:30b`. Pour les machines à 8 Go, gardez `ollama run llama3.2:3b`.',
            '**Long contexte / multimodal** : `ollama run llama4:scout` -- contexte 10M tokens + multimodal, MoE (17B actif/109B au total). Nécessite ~55 Go VRAM en Q4 (tient en 24 Go uniquement en 1,78 bit, ~20 tok/s).',
            '**Meilleur petit / 16 Go** : `ollama run gpt-oss:20b` -- 21B au total / 3,6B actif MoE, ~niveau o3-mini, raisonnement reglable. Plus grand : `ollama run gpt-oss:120b` (80 Go).',
            '**Codage (7B)** : `ollama run qwen3:8b` -- 76% HumanEval, amélioré par rapport à Qwen3, multilingue.',
            '**Codage (meilleur agentique, 24B)** : `ollama run devstral-small-2` -- Meilleur modèle de codage agentique (éditions multi-fichiers, débogage). 16 Go RAM. Par Mistral AI.',
            '**Codage (meilleur dense, 27B)** : `ollama run qwen3.8:27b` -- 61,7 SWE-bench Pro. Meilleur modèle de codage dense. 18 Go VRAM.',
            '**Codage (frontière MoE)** : `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6 (à égalité avec GPT-5.5), tier supérieur. MoE (32B actif/1T au total). Licence Modified MIT.',
            '**Codage (agentique, longue durée)** : `ollama run laguna-xs-2.1` -- MoE 33B/3B actif de Poolside, SWE-bench Verified 70,9%, contexte 256K. Conçu pour les boucles multi-étapes planifier → coder → tester → itérer. Licence OpenMDW-1.1.',
            '**Tâches d\'agent et appel d\'outils** : `ollama run gemma4:e4b` -- Lancé le 2 avril 2026. Support d\'appel d\'outils intégré + vision. Recommandé pour les agents locaux, l\'appel de fonctions et la sortie structurée. 6 Go RAM.',
            '**Raisonnement et mathématiques** : `ollama run deepseek-r1:7b` -- modèle de chaîne de pensée, meilleure performance mathématique locale à 7B.',
            '**Multilingue** : `ollama run qwen3:8b` -- 29+ langues natives, support non-anglais le plus fort, 76% HumanEval.',
            '**Non censuré / polyvalent** : `ollama run dolphin3` -- Dolphin 3.0 (Cognitive Computations, construit sur Llama 3.1), sans filtrage de contenu intégré, pour le chat, le codage et les tâches agentiques.',
            '**Compréhension d\'images** : `ollama run gemma4:e4b` -- vision + appel d\'outils (juillet 2026). Ou `ollama run llama3.2-vision:11b` pour une vision dédiée.',
            '**Rapide et léger** : `ollama run gemma2:2b` -- inférence CPU la plus rapide, 1,7 Go RAM.',
            '**Haute qualité (16 Go RAM)** : `ollama run mistral-small3.1` -- qualité proche de 70B à 14 Go RAM.',
            '**Domotique / IA mot de réveil** : `ollama run phi4-mini` — Phi-4 Mini (3,8B, ~3 Go VRAM) gère les commandes vocales Home Assistant à 20–25 tok/sec sur mini PC sans GPU dédié. Voir [guide d\'intégration Home Assistant + Ollama →](/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-fr.webp',
          imageCaption: 'Sélection Ollama par cas d\'usage : juillet 2026. Chat : llama4:scout, codage : qwen3.8:27b ou laguna-xs-2.1, raisonnement : deepseek-r1:7b.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'Quels modèles ont été ajoutés le plus récemment à Ollama ?',
          content: 'Voici les modèles les plus récents de la bibliothèque Ollama, du plus récent au plus ancien. Confirmez leur disponibilité avec `ollama pull <modèle>` avant de bâtir des workflows : les nouveaux modèles apparaissent sur ollama.com/library quelques jours après leur sortie.',
          rows: [
            { 'Modèle': 'nemotron-3.5-super', 'Publié': '14 octobre 2026', 'Idéal pour': 'NVIDIA — vision-langage 120B, code, raisonnement, outils, jusqu\'à 1M de contexte', 'Commande Ollama': 'ollama run nemotron-3.5-super' },
            { 'Modèle': 'nemotron-3.5-bolt', 'Publié': '14 octobre 2026', 'Idéal pour': 'NVIDIA — MoE 74B au total / 9B actifs, code local et outils, 25 Go', 'Commande Ollama': 'ollama run nemotron-3.5-bolt' },
            { 'Modèle': 'nemotron-3.5-lightning', 'Publié': '2026', 'Idéal pour': 'NVIDIA — MoE 30B, 3B actifs, agents toujours actifs, contexte 1M', 'Commande Ollama': 'ollama run nemotron-3.5-lightning' },
            { 'Modèle': 'glm-5.3', 'Publié': '2026', 'Idéal pour': 'Z.ai — poids ouverts phares pour le code et les agents longs', 'Commande Ollama': 'ollama run glm-5.3' },
            { 'Modèle': 'granite4.2', 'Publié': '2026', 'Idéal pour': 'IBM — Apache 2.0, 3B / 8B / 30B, contexte 128K', 'Commande Ollama': 'ollama run granite4.2' },
            { 'Modèle': 'qwen3.8:27b', 'Publié': 'août 2026', 'Idéal pour': 'Meilleur global sur matériel grand public, 61,7 SWE-bench Pro (selon Qwen), 18 Go', 'Commande Ollama': 'ollama run qwen3.8:27b' },
            { 'Modèle': 'laguna-xs-2.1', 'Publié': '2 juillet 2026', 'Idéal pour': 'Poolside — code agentique, MoE 33B/3B actifs, 20 Go, contexte 256K', 'Commande Ollama': 'ollama run laguna-xs-2.1' },
            { 'Modèle': 'kimi-k2.7-code', 'Publié': '2026', 'Idéal pour': 'Moonshot AI — orienté code, tag cloud uniquement sur Ollama', 'Commande Ollama': 'ollama run kimi-k2.7-code:cloud' },
            { 'Modèle': 'kimi-k2.6', 'Publié': '20 avril 2026', 'Idéal pour': 'Code de taille frontière (SWE-Bench Pro 58,6), tag cloud uniquement sur Ollama', 'Commande Ollama': 'ollama run kimi-k2.6:cloud' },
            { 'Modèle': 'gpt-oss:20b', 'Publié': '2026', 'Idéal pour': 'Meilleur petit modèle / 16 Go, ~o3-mini, raisonnement réglable', 'Commande Ollama': 'ollama run gpt-oss:20b' },
            { 'Modèle': 'gemma4:e4b', 'Publié': '2 avril 2026', 'Idéal pour': 'Vision + appel d\'outils (E2B/E4B/12B/26B/31B)', 'Commande Ollama': 'ollama run gemma4:e4b' },
            { 'Modèle': 'qwen3:30b', 'Publié': '2026', 'Idéal pour': 'Polyvalent ; qwen3-coder:30b pour la complétion de code', 'Commande Ollama': 'ollama run qwen3:30b' },
          ],
          columns: ['Modèle', 'Publié', 'Idéal pour', 'Commande Ollama'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
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
            '**Performance sur benchmarks** : 52 % MATH (vs 23 % Llama 3.1 8B), logique améliorée et résolution multiétapes.',
            '**Exigences RAM** : 1.5B : 2 GB, 7B : 6 GB, 70B : 44 GB (quantification Q4).',
            '**Licence** : Licences DeepSeek (certaines restrictions sur décompilation ; vérifier avant déploiement d\'entreprise).',
            '**Gestion des données EU** : Lorsqu\'il est déployé dans les régions UE, DeepSeek-R1 traite les données selon les règlementations UE. L\'exécution locale sur serveurs privés ou appareils garantit la souveraineté des données -- aucune transmission cloud requise.',
          ],
        },
        visionModels: {
          id: 'vision-models',
          title: 'Modèles de vision sur Ollama',
          content: 'Quatre modèles de vision remarquables sont maintenant nativement disponibles sur Ollama :',
          columns: ['Modèle', 'RAM', 'Support image', 'Commande Ollama'],
          image: '/images/ollama-vision-models-comparison-fr.svg',
          imageCaption: '4 modèles Ollama vision : llama3.2-vision:11b (8 Go), gemma3:9b (6 Go), minicpm-v (5,5 Go). Tous en local.',
          rows: [
            { 'Modèle': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM': '11 GB', 'Support image': 'JPEG, PNG, GIF; entrée multi-images', 'Commande Ollama': 'ollama run llama3.2-vision:11b' },
            { 'Modèle': '[Qwen2.5-VL 7B](https://ollama.com/library/qwen2.5vl)', 'RAM': '8 GB', 'Support image': 'JPEG, PNG; meilleur en OCR et diagrammes', 'Commande Ollama': 'ollama run qwen2.5vl:7b' },
            { 'Modèle': '[Gemma 3 Vision 9B](https://ollama.com/library/gemma3)', 'RAM': '9.5 GB', 'Support image': 'JPEG, PNG; contexte natif 128K', 'Commande Ollama': 'ollama run gemma3:9b' },
            { 'Modèle': '[Mistral AI Pixtral 12B](https://ollama.com/library/mistral)', 'RAM': '12.5 GB', 'Support image': 'JPEG, PNG; basé sur latent', 'Commande Ollama': 'ollama run pixtral:12b' },
          ],
        },
        fullTop10: {
          id: 'full-top-10',
          title: 'Comparaison complète du Top 10',
          content: 'Les 10 modèles les plus téléchargés sur Ollama en avril 2026 selon les téléchargements mensuels :',
          columns: ['#', 'Modèle', 'Meilleur pour', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-fr.webp',
          imageCaption: 'Top 10 modèles Ollama par téléchargements : RAM 1,7 Go (gemma2:2b) à 14 Go (mistral-small3.1). HumanEval 39-74 %.',
          rows: [
            { '#': '1', 'Modèle': '[Llama 3.1 8B](https://ollama.com/library/llama3.3)', 'Meilleur pour': 'Débutants, polyvalent', 'RAM': '6.5 GB', 'HumanEval': '68.2 %' },
            { '#': '2', 'Modèle': '[Qwen3 8B](https://ollama.com/library/qwen3)', 'Meilleur pour': 'Codage, mathématiques', 'RAM': '6.5 GB', 'HumanEval': '75.4 %' },
            { '#': '3', 'Modèle': '[Mistral Small](https://ollama.com/library/mistral)', 'Meilleur pour': 'Multilingue', 'RAM': '6.5 GB', 'HumanEval': '73.2 %' },
            { '#': '4', 'Modèle': 'Llama 3.3 70B', 'Meilleur pour': 'Haut débit', 'RAM': '44 GB', 'HumanEval': '86.1 %' },
            { '#': '5', 'Modèle': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Meilleur pour': 'Codage agentique, longue durée', 'RAM': 'Quantifié', 'HumanEval': '70.9 % SWE-bench Verified' },
            { '#': '6', 'Modèle': '[DeepSeek-R1 7B](https://ollama.com/library/deepseek-r1)', 'Meilleur pour': 'Raisonnement', 'RAM': '6.5 GB', 'HumanEval': '76.8 %' },
            { '#': '7', 'Modèle': '[Gemma 3 9B](https://ollama.com/library/gemma3)', 'Meilleur pour': 'Vision + texte', 'RAM': '9.5 GB', 'HumanEval': '72.1 %' },
            { '#': '8', 'Modèle': 'Llama 3.2 Vision 11B', 'Meilleur pour': 'Multimodal', 'RAM': '11 GB', 'HumanEval': '71.5 %' },
            { '#': '9', 'Modèle': 'Phi-3.5 Mini 3.8B', 'Meilleur pour': 'Petits appareils', 'RAM': '3 GB', 'HumanEval': '61.2 %' },
            { '#': '10', 'Modèle': 'Qwen3 32B', 'Meilleur pour': 'Qualité plutôt que vitesse', 'RAM': '20 GB', 'HumanEval': '81.7 %' },
          ],
        },
        howToBrowse: {
          id: 'how-to-browse',
          title: 'Comment parcourir la bibliothèque Ollama ?',
          content: 'Il existe deux façons de travailler avec les modèles Ollama. **Changer de modèle installé :** Dans l\'application Ollama pour Mac, cliquez sur le bouton déroulant de modèle en bas du champ de saisie du chat (affiche le nom du modèle actuel, ex. "gemma3:1b") pour basculer entre les modèles installés localement. **Trouver et télécharger de nouveaux modèles :** Visitez ollama.com/library pour parcourir plusieurs centaines de modèles par catégorie, puis utilisez les commandes CLI ci-dessous pour les télécharger.',
          codeBlock: `ollama list
# Affiche tous les modèles installés

ollama pull llama3.1:8b
# Télécharge et installe Llama 3.1 8B

ollama pull qwen2.5:7b
# Télécharge Qwen3 8B (pour codage et mathématiques)

ollama run qwen2.5:7b
# Démarre une session de chat interactive

ollama run -m deepseek-r1:7b "Résoudre 2^10"
# Résout les tâches de raisonnement avec CoT`,
          codeLanguage: 'bash',
          items: [
            'Ouvrez [ollama.ai/library](https://ollama.ai/library) dans un navigateur pour la bibliothèque complète interrogeable de plusieurs centaines de modèles.',
            'Options de filtrage : taille du modèle, licence, date de publication, benchmarks (MMLU, HumanEval, MATH).',
            'Notation par modèle : téléchargements utilisateur, étoiles GitHub (pour le modèle de base), étoiles Ollama.',
            'Nouveaux modèles : La bibliothèque Ollama est mise à jour chaque semaine (jeudis, 18:00 UTC).',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Comment les règles régionales de confidentialité influencent-elles votre choix de modèle Ollama ?',
          content: [
            '**UE / RGPD + conformité des licences.** Pour les organisations de l\'UE qui déploient des modèles Ollama en production, la licence compte autant que la performance. Apache 2.0 (entièrement ouverte, usage commercial autorisé) : Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Licence communautaire Meta Llama (usage commercial restreint au-delà de 700 M d\'utilisateurs actifs mensuels) : Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT (usage commercial autorisé) : DeepSeek-R1 7B et 14B. MIT modifiée (usage commercial autorisé avec clause d\'attribution) : Kimi K2.6. OpenMDW-1.1 (permissive, usage commercial autorisé) : Laguna XS 2.1. Vérifiez toujours les termes de licence avant un déploiement commercial. Pour les entreprises de l\'UE dans des secteurs réglementés, les modèles Mistral (France, Apache 2.0) comme Devstral Small 2 sont un choix par défaut raisonnable : origine européenne et licence permissive. Exécuter les modèles entièrement sur site avec Ollama signifie que les prompts ne sont pas envoyés à des serveurs externes ; cela soutient, sans suffire à lui seul, le respect du RGPD (un tag `:cloud` envoie bien des données au service hébergé d\'Ollama).',
            '**Japon (METI).** Pour les déploiements d\'entreprise japonais avec Ollama, Qwen3 / Qwen3.8 est une famille recommandée : elle traite nativement le texte japonais, ce qui aide le temps d\'inférence et le cache KV. Pour le codage en japonais : Qwen3.8-27B (61,7 SWE-bench Pro selon Qwen) gère nativement les commentaires de code en japonais. La documentation de gouvernance de l\'IA du METI demande généralement la version exacte du modèle. Utilisez `ollama show <modèle>` pour obtenir la spécification complète (paramètres, quantification, longueur de contexte) pour vos dossiers de conformité.',
            '**Chine.** Selon les Mesures de la CAC sur l\'IA générative (2023), les organisations fournissant des services d\'IA aux utilisateurs finaux doivent enregistrer les modèles utilisés. Qwen3 / Qwen3.8 (Alibaba, Apache 2.0) est un choix naturel pour les déploiements d\'entreprise chinois avec Ollama : origine chinoise, licence Apache 2.0, bonnes performances en chinois. Kimi K2.6 (Moonshot AI, MIT modifiée) est aussi d\'origine chinoise, mais Ollama ne le liste qu\'en tag cloud et l\'exécution locale exige du matériel de classe serveur. Commandes : `ollama run qwen3.8:27b` pour la meilleure qualité, `ollama run qwen3:8b` pour la vitesse. DeepSeek-R1 (licence MIT) convient au raisonnement. Pour les données traitées localement avec Ollama, l\'inférence elle-même ne déclenche pas les exigences de transfert transfrontalier de la PIPL ; vérifiez vos propres obligations de conformité.',
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
              a: 'Llama 3.1 8B est convivial, mais Qwen3 ou Mistral Small sont spécialisés pour les tâches techniques. Pour le codage : basculez à Qwen3 8B (75.4 % HumanEval vs 68.2 % pour Llama). Les deux fonctionnent en moins de 8 GB RAM.',
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
            '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide) — Votre machine peut-elle faire tourner ces modèles ? →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Quelle est la dernière version d\'Ollama ?',
              a: 'La dernière version stable d\'Ollama est la v0.40.5, publiée le 14 octobre 2026. Une préversion v0.40.6 a suivi le 16 octobre mais n\'est pas encore marquée comme stable. Téléchargez-la sur ollama.com/download ou mettez à jour avec `curl https://ollama.ai/install.sh | sh` sous Linux et `brew upgrade ollama` sous macOS.',
            },
            {
              q: 'Où trouver le changelog et les notes de version d\'Ollama ?',
              a: 'Les notes de version de chaque tag figurent sur github.com/ollama/ollama/releases, avec la date et le changelog. Les entrées stables les plus récentes sont la v0.40.5 (14 octobre 2026 -- prise en charge de NVIDIA Nemotron 3.5 Super, accès cloud aux modèles de décision), la v0.40.4 (12 octobre -- modèles de décision avec `ollama run --ask`, chargement plus rapide) et la v0.40.0 (25 septembre -- MLX par défaut sur Apple Silicon).',
            },
            {
              q: 'Comment vérifier quelle version d\'Ollama est installée ?',
              a: 'Exécutez `ollama --version` dans le terminal. La sortie ressemble à `ollama version 0.40.5`. Si le numéro est inférieur à la version actuelle, mettez à jour avec `curl https://ollama.ai/install.sh | sh` (Linux) ou `brew upgrade ollama` (macOS), puis relancez `ollama --version` pour confirmer.',
            },
            {
              q: 'Quand Ollama a-t-il été publié pour la première fois ?',
              a: 'La première version d\'Ollama, la v0.0.1, a été publiée sur GitHub le 8 juillet 2023, peu après la création du dépôt le 26 juin 2023. En octobre 2026, le projet en était à la v0.40.5. La liste complète se trouve sur github.com/ollama/ollama/releases.',
            },
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
              a: 'Qwen3 8B a un support français supérieur (entraîné sur CulturaX et texte wiki FR). Llama 3.3 est adéquat pour le français, mais Qwen est plus précis. Mistral Small est compétent en français et espagnol.',
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
              a: 'Oui. Llama 3.2 Vision, Qwen2.5-VL et Gemma 3 sont tous multimodaux. Chargez les images comme fichiers locaux ; aucune transmission cloud. Support : JPEG, PNG, GIF.',
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
              a: 'Oui. Les PME françaises bénéficient de : souveraineté des données (sans verrouillage éditeur cloud), conformité aux standards de sécurité IT (cadres de sécurité), scalabilité sur matériel standard et économies sans frais d\'API. Qwen3 8B s\'exécute sur une GPU de bureau typique ; Llama 3.1 8B est un modèle PME éprouvé pour les outils internes, l\'automatisation du service client et le traitement de documents.',
            },
            {
              q: 'Quel est le nom officiel de l\'entreprise derrière Ollama ?',
              a: 'L\'entreprise est Ollama Inc., une startup financée en Série B basée à Palo Alto, en Californie, fondée en 2023 par Jeffrey Morgan et Michael Chiang.',
            },
            {
              q: 'Quel modèle Dolphin dois-je utiliser avec Ollama ?',
              a: 'Utilisez Dolphin 3.0 (`ollama pull dolphin3`), pas l\'ancien `dolphin-mistral` (dernière mise à jour en 2024, basé sur Mistral 0.2). Dolphin 3.0, maintenu par Cognitive Computations, est construit sur Llama 3.1, ne comporte aucun filtrage de contenu intégré et est conçu comme un modèle local polyvalent pour le codage, les mathématiques, les tâches agentiques et le chat sans restriction.',
            },
            {
              q: 'Quels modèles Ollama fonctionnent le mieux pour les tâches en russe ?',
              a: 'Qwen3 / Qwen3.8 et Mistral Small 3.1 incluent tous deux le russe dans leurs données d\'entraînement multilingues natives. Qwen3 obtient de meilleurs scores sur les benchmarks non anglophones, tandis que Mistral Small 3.1 offre une fluidité conversationnelle en russe légèrement supérieure de façon informelle. Aucun des deux n\'est d\'origine russe.',
            },
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Modèles de vision Ollama (2026)](/fr/power-local-llm/ollama-vision-models-review) -- un guide pratique et dédié pour exécuter des modèles capables d\'images via Ollama, avec une syntaxe CLI/API réelle.',
            '[Installer les modèles locaux avec VS Code et Cursor](/fr/local-llms/local-llms-with-vscode-cursor) -- VS Code et Cursor reconnaissent maintenant automatiquement Ollama.',
            '[Comment choisir un modèle local : Llama vs Qwen vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) -- Comparaison complète pour les débutants.',
            '[Ollama vs LM Studio : Lequel est le plus rapide ?](/fr/local-llms/ollama-vs-lm-studio) -- Benchmarks GPU et comparaisons de débit.',
            '[Comment installer Ollama sur Windows/Mac](/fr/local-llms/how-to-install-ollama) -- Configuration d\'installation étape par étape et configuration d\'environnement.',
            '[Matériel pour les modèles locaux: Exigences GPU](/fr/local-llms/local-llm-hardware-guide) -- Quelle GPU, RAM et stockage il faut pour votre modèle.',
            '[Dépannage : Erreurs Ollama et solutions](/fr/local-llms/troubleshooting-local-llm-setup) -- CUDA, MPS, fallback CPU et erreurs courantes.',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) -- chronologie complète de toutes les versions majeures open-weight avec dates de disponibilité sur Ollama.',
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '[Bibliothèque de modèles Ollama](https://ollama.ai/library) -- Plusieurs centaines de modèles avec statistiques de téléchargement en direct.',
            '[Ollama GitHub : Modèles populaires par téléchargements](https://github.com/ollama/ollama/issues/3149) -- Entrées mensuelles sur les utilisateurs et tendances (données publiques).',
            '[Livre blanc DeepSeek-R1](https://arxiv.org/abs/2501.12948) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" (janvier 2025).',
            '[Annonce Gemma 3](https://blog.google/technology/googles-latest-gemma-models/) -- Blog Google : Gemma 3 Multimodal, contexte 128K, février 2026.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama dernière version 2026 : v0.40.5 et les meilleurs modèles',
        'description': 'Version actuelle d\'Ollama v0.40.5 (octobre 2026), changelog complet et modèles les plus récents : Nemotron 3.5, Laguna XS 2.1, Kimi K2.7 Code, Kimi K2.6, Qwen3.8, DeepSeek V4. Benchmarks vérifiés, RAM, commandes pull.',
        'url': 'https://www.promptquorum.com/fr/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-10-17',
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.1 8B', 'description': 'Le modèle le plus téléchargé, idéal pour les débutants et les applications polyvalentes. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 8B', 'description': 'Le modèle en plus forte croissance avec des performances supérieures en codage et mathématiques. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mistral Small', 'description': 'Modèle multilingue avec bon support du français et espagnol. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Llama 3.3 70B', 'description': 'Grand modèle qui concurrence GPT-4 sur de nombreux benchmarks. 44 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'description': 'Modèle de codage agentique de Poolside pour sessions de longue durée, 70.9% SWE-bench Verified, contexte 256K. Licence OpenMDW-1.1.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'DeepSeek-R1 7B', 'description': 'Modèle de raisonnement avec capacités explicites de chaîne de pensée, idéal pour problèmes mathématiques et logiques. 6.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Gemma 3 9B', 'description': 'Modèle multimodal avec capacités de vision et longueur de contexte 128K. 9.5 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 8, 'name': 'Llama 3.2 Vision 11B', 'description': 'Modèle de vision pour traitement d\'images et tâches multimodales. 11 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Phi-3.5 Mini 3.8B', 'description': 'Modèle très petit et efficace, idéal pour les appareils mobiles et IoT. 3 GB RAM requis.' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Qwen3 32B', 'description': 'Variante plus grande de Qwen avec qualité supérieure pour les tâches complexes. 20 GB RAM requis.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Quelle est la dernière version d\'Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La dernière version stable d\'Ollama est la v0.40.5, publiée le 14 octobre 2026. Une préversion v0.40.6 a suivi le 16 octobre mais n\'est pas encore marquée comme stable. Téléchargez-la sur ollama.com/download ou mettez à jour avec `curl https://ollama.ai/install.sh | sh` sous Linux et `brew upgrade ollama` sous macOS.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Où trouver le changelog et les notes de version d\'Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les notes de version de chaque tag figurent sur github.com/ollama/ollama/releases, avec la date et le changelog. Les entrées stables les plus récentes sont la v0.40.5 (14 octobre 2026 -- prise en charge de NVIDIA Nemotron 3.5 Super, accès cloud aux modèles de décision), la v0.40.4 (12 octobre -- modèles de décision avec `ollama run --ask`, chargement plus rapide) et la v0.40.0 (25 septembre -- MLX par défaut sur Apple Silicon).',
            }
          },
          {
            '@type': 'Question',
            'name': 'Comment vérifier quelle version d\'Ollama est installée ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Exécutez `ollama --version` dans le terminal. La sortie ressemble à `ollama version 0.40.5`. Si le numéro est inférieur à la version actuelle, mettez à jour avec `curl https://ollama.ai/install.sh | sh` (Linux) ou `brew upgrade ollama` (macOS), puis relancez `ollama --version` pour confirmer.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quand Ollama a-t-il été publié pour la première fois ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La première version d\'Ollama, la v0.0.1, a été publiée sur GitHub le 8 juillet 2023, peu après la création du dépôt le 26 juin 2023. En octobre 2026, le projet en était à la v0.40.5. La liste complète se trouve sur github.com/ollama/ollama/releases.',
            }
          },
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
              'text': 'Qwen3 8B a un support français supérieur (entraîné sur CulturaX et texte wiki FR). Llama 3.3 est adéquat pour le français, mais Qwen est plus précis. Mistral Small est compétent en français et espagnol.',
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
              'text': 'Oui. Llama 3.2 Vision, Qwen2.5-VL et Gemma 3 sont tous multimodaux. Chargez les images comme fichiers locaux ; aucune transmission cloud. Support : JPEG, PNG, GIF.',
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
              'text': 'Oui. Les PME françaises bénéficient de : souveraineté des données (sans verrouillage éditeur cloud), conformité aux standards de sécurité IT (cadres de sécurité), scalabilité sur matériel standard et économies sans frais d\'API. Qwen3 8B s\'exécute sur une GPU de bureau typique ; Llama 3.1 8B est un modèle PME éprouvé pour les outils internes, l\'automatisation du service client et le traitement de documents.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel est le nom officiel de l\'entreprise derrière Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'entreprise est Ollama Inc., une startup financée en Série B basée à Palo Alto, en Californie, fondée en 2023 par Jeffrey Morgan et Michael Chiang.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quel modèle Dolphin dois-je utiliser avec Ollama ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Utilisez Dolphin 3.0 (`ollama pull dolphin3`), pas l\'ancien `dolphin-mistral` (dernière mise à jour en 2024, basé sur Mistral 0.2). Dolphin 3.0, maintenu par Cognitive Computations, est construit sur Llama 3.1, ne comporte aucun filtrage de contenu intégré et est conçu comme un modèle local polyvalent pour le codage, les mathématiques, les tâches agentiques et le chat sans restriction.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Quels modèles Ollama fonctionnent le mieux pour les tâches en russe ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 / Qwen3.8 et Mistral Small 3.1 incluent tous deux le russe dans leurs données d\'entraînement multilingues natives. Qwen3 obtient de meilleurs scores sur les benchmarks non anglophones, tandis que Mistral Small 3.1 offre une fluidité conversationnelle en russe légèrement supérieure de façon informelle. Aucun des deux n\'est d\'origine russe.',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: 'La présentation ci-dessous couvre : top 10 modèles Ollama par nombre de téléchargements, comparaison de performance (60-74% HumanEval), meilleurs modèles par cas d\'utilisation (chat, codage, raisonnement, vision), DeepSeek-R1 chain-of-thought reasoning et commandes pull exactes. Téléchargez le PDF comme votre carte de référence de sélection de modèles Ollama.',
    },
    ja: {
      theme: 'Best Models',
      title: 'Ollama最新バージョン2026：v0.40.5＋用途別おすすめモデル',
      seoTitle: 'Ollama最新バージョン2026：v0.40.5＋おすすめ10モデル',
      intro: '現在のOllama安定版はv0.40.5（2026年10月14日）で、NVIDIA Nemotron 3.5 SuperとBolt、判断モデルのサポート、更新されたllama.cppとMLXエンジンが加わりました。v0.40.6はプレリリースです。8月のv0.33.1以降、OllamaはApple SiliconでMLXを標準エンジンにし（v0.40.0）、ChatGPT Desktop連携を追加しました（v0.34.0）。コンシューマー向けハードウェアでの総合最高は引き続きQwen3.8-27B（Qwen公表のSWE-bench Pro 61.7、ダウンロード18GB、24GBカードまたは32GB Macに収まる）です。コーディング向けは環境次第です。以下の用途別の内訳を参照してください。',
      metaDescription: 'Ollamaの最新バージョンはv0.40.5。v0.33以降の変更点、最新モデル（Nemotron 3.5、GLM-5.3、Granite 4.2）、チャット・コード・ビジョン向けの最適モデルを紹介します。',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-ja.webp',
      publishDate: '2026-04-11',
      readTime: '9分で読める',
      educationalLevel: 'ビギナー',
      primaryTerm: 'Ollama モデル 2026',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'バージョン履歴', anchor: '#ollama-version-history' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: '2026年のOllama最高のモデルはQwen3.8-27B（Qwen公表のSWE-bench Pro 61.7、18GB）で、ローカルのコーディング向けはQwen3.8-27B、Devstral Small 2、Laguna XS 2.1がおすすめです（Kimi K2.6はOllamaではクラウド専用）。' },
            { type: 'plain-terms', text: 'Ollamaは、インターネットやAPIキーなしで自分のコンピューター上でAIモデルを実行できる無料のツールです。ここでは、用途別に整理された、1つのコマンドでダウンロードできる主要モデルを紹介します。' },
          ],
          items: [
            '**コンシューマー向け総合最高**：Qwen3.8-27B（Qwen公表のSWE-bench Pro 61.7、ダウンロード18GB、24GBカードに収まる）。バランス型：qwen3:30b。',
            '**最もダウンロードされている**：Llama 3.2 3B（チュートリアル向け）とLlamaファミリー -- ツール対応が最も広い。',
            '**推論最強**：DeepSeek-R1（思考の連鎖）とgpt-oss:20b（推論調整可能、~o3-miniレベル）。',
            '**コーディング最強**：Qwen3.8-27B（密集モデル最強）、Laguna XS 2.1（エージェント型、長時間）、Devstral Small 2（24B級エージェント最強）、qwen3-coder:30b（補完）。Kimi K2.6はフロンティア規模ですがOllamaではクラウド専用 -- それぞれのサイズで公表ベンチマークが最高水準。',
            '**小型最強/16GB**：gpt-oss:20b。**ビジョン/マルチモーダル最強**：Gemma 4（E4B以上）。**長コンテキスト（10M）/大型マルチモーダル最強**：Llama 4 Scout（約55GB）。**無検閲の汎用最強**：Dolphin 3.0。**常時稼働エージェント**：Nemotron 3.5 Lightning。',
            'Ollamaライブラリには厳選された数百のモデルがあります（カスタムGGUF Modelfileで数千のモデルを追加可能）。すべて`ollama pull <名前>`で利用できます。',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'Ollamaの最新バージョンと変更点は？',
          content: [
            '**現在のOllamaバージョン：v0.40.5**（2026年10月14日リリース）。これが最新の安定版で、ollama.com/downloadから入手できます。10月16日にv0.40.6のプレリリースが公開されましたが、まだ安定版ではありません。`curl https://ollama.ai/install.sh | sh`（macOS：`brew upgrade ollama`）で更新し、`ollama --version`で確認してください。',
            '**v0.33〜v0.40系列の変更点（2026年8月〜10月）：** v0.33.0（8月21日）はClaude Desktopをサードパーティゲートウェイとして有効化し、KVキャッシュのプリフィル復元ポイントの信頼性を高めました。v0.34.0（9月5日）はChatGPT DesktopでOllamaモデルを使えるようにし、Apple Siliconでの構造化出力を高速化。v0.34.1（9月14日）はMLX safetensorsでの`ollama create`の実験扱いを解除しました。v0.40.0（9月25日）はApple Siliconでqwen3.8、gemma4、qwen3.6などの対応アーキテクチャを標準でMLXで実行します。v0.35.0（9月28日）は`/v1/systemone`経由の判断モデル（テキストではなく選択肢・確率・スコアを返すモデルで、最初はNimbleとTev1）を追加し、v0.35.1（9月29日）はマルチモーダルのClefモデルを追加しました。v0.40.2（10月8日）は旧モデルのバックグラウンド更新時にバックアップを保持し、v0.40.4（10月12日）は`ollama run <判断モデル> --ask`を追加、v0.40.5（10月14日）はNVIDIA Nemotron 3.5 Superのサポートと、Clef判断モデルのクラウド利用を追加しました。詳細なリリースノート：github.com/ollama/ollama/releases。',
            '**今月追加された最新モデル（2026年7月）：**',
          ],
          items: [
            '**Laguna XS 2.1**（Poolside、2026年7月2日）— エージェント型・長期タスクコーディング向けモデル：33B総パラメータ / 3B活性MoE、256Kトークンのコンテキストウィンドウ、SWE-bench Verified 70.9%、SWE-bench Multilingual 63.1%。OpenMDW-1.1ライセンス。プル：`ollama pull laguna-xs-2.1`、実行：`ollama run laguna-xs-2.1`',
            '**Kimi K2.7 Code**（Moonshot AI、2026年6月頃）— Kimi K2.6をベースに構築されたコーディング特化のエージェントモデル。プル：`ollama pull kimi-k2.7-code:cloud`',
            '**DeepSeek V4 Pro**（DeepSeek、2026年4月23日）— アルゴリズミックコーディングの専門モデル、93.5% LiveCodeBench、MITライセンス。軽量ハードウェア向けの廉価版DeepSeek V4 Flashもあります。プル：`ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**（Moonshot AI、2026年4月20日）— フロンティアコーディングモデル、SWE-Bench Pro 58.6、SWE-bench Verified 80.2%。MoEアーキテクチャ（32B活性/1T合計）。Modified MIT ライセンス。',
            '**Qwen3.8-27B**（Alibaba、2026年4月16日）— コンシューマー向け総合最高、61.7 SWE-bench Pro、Apache 2.0、Q4で24GBに収まる。Qwen3.6-35B-A3B（MoE、73.4 SWE-bench）も。',
            '**GLM-5.3**（Z.ai）— 744B / 40B活性MoE、MITライセンス。構造化コード生成リーダー。',
            '**gpt-oss**（OpenAI、2026年）— オープンウェイトMoE：gpt-oss:20b（21B合計 / 3.6B活性、16GBで動作、~o3-miniレベル、推論調整可能）とgpt-oss:120b（80GB）。',
            '**Gemma 4**（Google、2026年4月2日）— マルチモーダルサイズ E2B / E4B / E12B（26B MoE）/ E27B（31B密度）、すべてビジョンとツール呼び出し対応。QAT重みを2026年6月5日に追加。v0.31.1のMLXバッチ行列積カーネル刷新でApple Silicon推論が約90%高速化。E4Bは~6GB VRAMで動作。',
            '**Dolphin 3.0**（Cognitive Computations、継続保守）— 検閲なし・汎用チャットモデル、Llama 3.1ベース、コンテンツフィルタリングなし。プル：`ollama pull dolphin3`（旧`dolphin-mistral`は2024年の古いモデルのため非推奨）。',
          ],
          codeBlock: '# Ollamaを最新版にアップデート（v0.40.5）\ncurl https://ollama.ai/install.sh | sh\n\n# またはMac：brew upgrade ollama\n\n# 現在のバージョンを確認\nollama --version  # 出力：ollama version 0.40.5\n\n# 2026年7月の最新モデルをプル\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull dolphin3',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'Ollamaのバージョン履歴とリリースタイムラインは？',
          content: '**Ollamaは2023年7月8日に最初のリリースv0.0.1を公開し、2026年10月14日にv0.40.5に到達しました。** 表はOllamaでできることを変えたリリースをまとめたものです。全タグとリリースノートはgithub.com/ollama/ollama/releasesにあります。2026年9月下旬にバージョン番号がv0.35からv0.40へ飛んだため、GitHub上ではv0.40.0（9月25日）がv0.35系（9月28〜29日）と並んでいます。',
          rows: [
            { 'バージョン': 'v0.40.5', '公開日': '2026年10月14日', '主な変更': 'Nemotron 3.5 Super、クラウド判断モデル' },
            { 'バージョン': 'v0.40.0', '公開日': '2026年9月25日', '主な変更': 'Apple Siliconで標準MLX' },
            { 'バージョン': 'v0.35.0', '公開日': '2026年9月28日', '主な変更': '/v1/systemone経由の判断モデル' },
            { 'バージョン': 'v0.34.0', '公開日': '2026年9月5日', '主な変更': 'ChatGPT DesktopでOllamaモデル' },
            { 'バージョン': 'v0.33.0', '公開日': '2026年8月21日', '主な変更': 'Claude Desktopゲートウェイ、KV復元' },
            { 'バージョン': 'v0.32.0', '公開日': '2026年7月11日', '主な変更': '「Chat, Code & Work」エージェント' },
            { 'バージョン': 'v0.0.1', '公開日': '2023年7月8日', '主な変更': '初の公開リリース' },
          ],
          columns: ['バージョン', '公開日', '主な変更'],
        },
        mostPopular: {
          id: 'most-popular',
          title: 'Ollama最人気モデル',
          content: [
            '**Ollamaは完全公開ダウンロード統計を提供。** 2026年7月データより：',
            '**Llama 3.2 3B**は全体で最多ダウンロード。主にチュートリアルとして使用。コンシューマー向け品質では、Qwen3.8-27B（61.7 SWE-bench Pro、Q4で24GBに収まる）が現在の総合最良の選択。',
            '**Qwen3・Qwen3.8**はOllama ライブラリで最速成長のモデルファミリー。Qwen3と新しいQwen 3.6密度バリアントがQwen3を急速に置き換え。DeepSeek-R1はリリース後に大きなスパイクを記録し、推論タスク向けに常に高ダウンロード状態。',
            '**Meta Llama 4** 2026年4月リリースでScout（17B活性、109B合計、MoE）とMaverick（17B活性、400B合計）を展開。Ollama ライブラリで安定済み（`ollama pull llama4:scout`）。Llama 4はMoEアーキテクチャを採用し、トークンあたり17Bのみが活性だが、109B合計のためScoutはQ4で~55GB VRAMが必要（24GBは1.78ビットのみ、~20 tok/s）。Scoutの強みは10Mトークンのコンテキストとマルチモーダル入力であり、コンシューマーハードウェアへの適合性ではない。Ollama エコシステムは2026年4月に大幅拡張。Kimi K2.6（Moonshot AI、Modified MIT、32B活性/1T合計MoE）はSWE-Bench Pro 58.6を記録しGPT-5.5と同等。Qwen3.8-27Bは61.7 SWE-bench Proでコンシューマー向け総合最高を達成（Q4で24GBに収まる）。OpenAIのオープンウェイトgpt-oss:20b（21B合計/3.6B活性MoE）は16GBで~o3-miniレベル、推論調整可能で動作。現在のリリースであるOllama v0.40.5（2026年10月14日）はNVIDIA Nemotron 3.5 Superのサポートを追加しました。Ollama ライブラリは現在数百のモデルを参照しており、最新追加はLaguna XS 2.1（Poolside、エージェント型コーディング）とKimi K2.7 Code（Moonshot AI）です。',
          ],
        },
        byCategory: {
          id: 'by-category',
          title: 'カテゴリ別トップモデル',
          content: 'モデルの出力品質はプロンプトの設計に大きく左右されます。Chain-of-Thought、Few-Shot例、出力フォーマットなど、すべてのローカルモデルで使える構造化テクニックについては[プロンプトエンジニアリングガイド](https://www.promptquorum.com/ja/prompt-engineering)をご覧ください。推論タスク用に、[Chain-of-Thoughtプロンプティング](https://www.promptquorum.com/ja/prompt-engineering/chain-of-thought-prompting)はDeepSeek-R1とQwen3出力品質を大幅に改善。各モデルに必要なRAMを確認するには、[VRAM要件ガイド →](/ja/local-llms/how-much-vram-local-llm)をご参照ください。Gemma 4エージェントワークフロー用は[Tree-of-Thoughtと ReAct](https://www.promptquorum.com/ja/prompt-engineering/tree-of-thought-react)参照。このリストにあるツール呼び出し対応モデルを、ファイルアクセスやデータベース照会まで含むマルチステップのループに組み込む方法は、[MCP を使ったローカル AI エージェント](/ja/power-local-llm/local-ai-agents-with-mcp-2026)を参照してください。オープンソースのオーケストレーションパターンを解説しています。',
          items: [
            '**一般チャット（初心者）**：`ollama run llama3.2:3b` -- ドキュメント多数、最適入門モデル。',
            '**一般チャット（最良の選択）**：`ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro、コンシューマー向け総合最高、Q4で24GBに収まる。バランス型：`ollama run qwen3:30b`。8GB機はllama3.2:3b維持。',
            '**長コンテキスト / マルチモーダル**：`ollama run llama4:scout` -- 10Mトークンコンテキスト + マルチモーダル、MoE（17B活性/109B合計）。Q4で~55GB VRAM必要（24GBは1.78ビットのみ、~20 tok/s）。',
            '**小型・16GB最強**：`ollama run gpt-oss:20b` -- 21B合計 / 3.6B活性MoE、~o3-miniレベル、推論調整可能。大型：`ollama run gpt-oss:120b`（80GB）。',
            '**コード（7B）**：`ollama run qwen3:8b` -- 76% HumanEval、Qwen3から改善、多言語対応。',
            '**コード（最高エージェント、24B）**：`ollama run devstral-small-2` -- 最高エージェントコーディング（マルチファイル編集、デバッグ）。16GB RAM。Mistral AI製。',
            '**コード（最高密集、27B）**：`ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro。最高密集コーディングモデル。18 GB VRAM。',
            '**コード（フロンティアMoE）**：`ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6（GPT-5.5と同等）、トップティア。MoE（32B活性/1T合計）。Modified MIT License。',
            '**コード（エージェント型・長期タスク）**：`ollama run laguna-xs-2.1` -- SWE-bench Verified 70.9%、SWE-bench Multilingual 63.1%、256Kコンテキスト。33B総パラメータ/3B活性MoE。OpenMDW-1.1ライセンス。',
            '**エージェント・ツール呼び出し**：`ollama run gemma4:e4b` -- 2026年4月2日リリース。組み込みツール呼び出し+ビジョンサポート。ローカルエージェント、機能呼び出し、構造出力推奨。6GB RAM。',
            '**推論・数学**：`ollama run deepseek-r1:7b` -- Chain-of-Thoughtモデル、ローカル数学最高性能at 7B。',
            '**多言語**：`ollama run qwen3:8b` -- 29+言語対応、非英語対応最強、76% HumanEval。',
            '**画像理解**：`ollama run gemma4:e4b` -- Vision + Tool Calling。v0.31.1のMLXカーネル刷新でApple Silicon推論が約90%高速化。または `ollama run llama3.2-vision:11b`専用Vision。',
            '**うんちく系/検閲なし**：`ollama run dolphin3` -- Dolphin 3.0、Llama 3.1ベース、コンテンツフィルタリングなし。Cognitive Computations製。',
            '**高速・軽量**：`ollama run gemma2:2b` -- 最速CPU推論、1.7GB RAM。',
            '**高品質（16GB RAM）**：`ollama run mistral-small3.1` -- 70B品質に近い14GB RAM。',
            '**ホームオートメーション / ウェイクワードAI**：`ollama run phi4-mini` — Phi-4 Mini（3.8B、VRAM約3 GB）は専用GPUなしのミニPCでHome Assistantの音声コマンドを20〜25 tok/secで処理できます。[Home Assistant + Ollama 統合ガイド →](/smart-home/home-assistant-ollama-integration)をご覧ください。',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-ja.webp',
          imageCaption: '用途別Ollamaモデル選択：2026年7月。チャット：llama4:scout、コーディング：qwen3.8:27b、推論：deepseek-r1:7b。',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'Ollamaに最近追加されたモデルは？',
          content: 'Ollamaライブラリの最新モデルを新しい順に示します。ワークフローを組む前に`ollama pull <モデル>`で利用可否を確認してください。新モデルはリリースから数日でollama.com/libraryに掲載されます。',
          rows: [
            { 'モデル': 'nemotron-3.5-super', 'リリース': '2026年10月14日', '最適な用途': 'NVIDIA — 120Bビジョン言語、コーディング、推論、ツール利用、最大1Mコンテキスト', 'Ollamaコマンド': 'ollama run nemotron-3.5-super' },
            { 'モデル': 'nemotron-3.5-bolt', 'リリース': '2026年10月14日', '最適な用途': 'NVIDIA — 総計74B/アクティブ9BのMoE、ローカルのコーディングとツール、25GB', 'Ollamaコマンド': 'ollama run nemotron-3.5-bolt' },
            { 'モデル': 'nemotron-3.5-lightning', 'リリース': '2026年', '最適な用途': 'NVIDIA — 30B MoE、アクティブ3B、常時稼働エージェント、1Mコンテキスト', 'Ollamaコマンド': 'ollama run nemotron-3.5-lightning' },
            { 'モデル': 'glm-5.3', 'リリース': '2026年', '最適な用途': 'Z.ai — コーディングと長時間エージェント向けのフラッグシップ', 'Ollamaコマンド': 'ollama run glm-5.3' },
            { 'モデル': 'granite4.2', 'リリース': '2026年', '最適な用途': 'IBM — Apache 2.0、3B / 8B / 30B、128Kコンテキスト', 'Ollamaコマンド': 'ollama run granite4.2' },
            { 'モデル': 'qwen3.8:27b', 'リリース': '2026年8月', '最適な用途': 'コンシューマー向け総合最高、SWE-bench Pro 61.7（Qwen公表値）、18GB', 'Ollamaコマンド': 'ollama run qwen3.8:27b' },
            { 'モデル': 'laguna-xs-2.1', 'リリース': '2026年7月2日', '最適な用途': 'Poolside — エージェントコーディング、33B/アクティブ3B MoE、20GB、256K', 'Ollamaコマンド': 'ollama run laguna-xs-2.1' },
            { 'モデル': 'kimi-k2.7-code', 'リリース': '2026年', '最適な用途': 'Moonshot AI — コーディング特化、Ollamaではクラウドタグのみ', 'Ollamaコマンド': 'ollama run kimi-k2.7-code:cloud' },
            { 'モデル': 'kimi-k2.6', 'リリース': '2026年4月20日', '最適な用途': 'フロンティアコーディング（SWE-Bench Pro 58.6）、Ollamaではクラウドタグのみ', 'Ollamaコマンド': 'ollama run kimi-k2.6:cloud' },
            { 'モデル': 'gpt-oss:20b', 'リリース': '2026年', '最適な用途': '小型最強/16GB、~o3-mini、推論調整可能', 'Ollamaコマンド': 'ollama run gpt-oss:20b' },
            { 'モデル': 'gemma4:e4b', 'リリース': '2026年4月2日', '最適な用途': 'ビジョン＋ツール呼び出し（E2B/E4B/12B/26B/31B）', 'Ollamaコマンド': 'ollama run gemma4:e4b' },
            { 'モデル': 'qwen3:30b', 'リリース': '2026年', '最適な用途': 'バランス型；コード補完はqwen3-coder:30b', 'Ollamaコマンド': 'ollama run qwen3:30b' },
          ],
          columns: ['モデル', 'リリース', '最適な用途', 'Ollamaコマンド'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
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
            '**ベンチマーク**：52% MATH（Llama 3.1 8B比23%）。ロジック・多段階問題解決向上。',
            '**RAM必須**：1.5B：2GB、7B：6GB、70B：44GB（Q4量子化）。',
            '**ライセンス**：DeepSeek License（逆アセンブリ制限あり。エンタープライズ前に確認）。',
            '**日本データ処理**：APAC地域デプロイ時、DeepSeek-R1はデータ保護方針準拠。ローカル実行で主権確保--クラウド転送なし。',
          ],
        },
        visionModels: {
          id: 'vision-models',
          title: 'ビジョンモデル',
          content: '4つの優秀ビジョンモデルがOllamaネイティブ対応：',
          columns: ['モデル', 'RAM', '画像対応', 'Ollamaコマンド'],
          image: '/images/ollama-vision-models-comparison-ja.svg',
          imageCaption: '4つのOllamaビジョンモデル: llama3.2-vision:11b (8 GB)、gemma3:9b (6 GB)、minicpm-v (5.5 GB)。全てローカル実行。',
          rows: [
            { 'モデル': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM': '11 GB', '画像対応': 'JPEG、PNG、GIF・複数画像入力', 'Ollamaコマンド': 'ollama run llama3.2-vision:11b' },
            { 'モデル': '[Qwen2.5-VL 7B](https://ollama.com/library/qwen2.5vl)', 'RAM': '8 GB', '画像対応': 'JPEG、PNG・OCR精密', 'Ollamaコマンド': 'ollama run qwen2.5vl:7b' },
            { 'モデル': '[Gemma 3 Vision 9B](https://ollama.com/library/gemma3)', 'RAM': '9.5 GB', '画像対応': 'JPEG、PNG・ネイティブ128Kコンテキスト', 'Ollamaコマンド': 'ollama run gemma3:9b' },
            { 'モデル': '[Mistral AI Pixtral 12B](https://ollama.com/library/mistral)', 'RAM': '12.5 GB', '画像対応': 'JPEG、PNG・潜在表現', 'Ollamaコマンド': 'ollama run pixtral:12b' },
          ],
        },
        fullTop10: {
          id: 'full-top-10',
          title: 'トップ10完全比較',
          content: '2026年4月Ollama月間DL数トップ10：',
          columns: ['#', 'モデル', '最適用途', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-ja.webp',
          imageCaption: 'ダウンロード数Top 10 Ollamaモデル: RAM 1.7 GB (gemma2:2b)から14 GB (mistral-small3.1)。HumanEval 39-74%。',
          rows: [
            { '#': '1', 'モデル': '[Llama 3.1 8B](https://ollama.com/library/llama3.3)', '最適用途': '初心者・汎用', 'RAM': '6.5 GB', 'HumanEval': '68.2%' },
            { '#': '2', 'モデル': '[Qwen3 8B](https://ollama.com/library/qwen3)', '最適用途': 'コード・数学', 'RAM': '6.5 GB', 'HumanEval': '75.4%' },
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
          id: 'how-to-browse',
          title: 'Ollama ライブラリの探索方法',
          content: 'Ollamaモデルの操作には2つの方法があります。**インストール済みモデルの切り替え：** Ollama Macアプリのチャット入力欄下部にあるモデルドロップダウンボタン（例："gemma3:1b"と表示）をクリックして、ローカルにインストールされたモデルを切り替えます。**新しいモデルの検索・ダウンロード：** ollama.com/libraryで数百のモデルをカテゴリ別に検索し、以下のCLIコマンドでインストールします。',
          codeBlock: `ollama list
# インストール済みモデル表示

ollama pull llama3.1:8b
# Llama 3.1 8B ダウンロード・インストール

ollama pull qwen2.5:7b
# Qwen3 8B ダウンロード（コード・数学向け）

ollama run qwen2.5:7b
# インタラクティブセッション開始

ollama run -m deepseek-r1:7b "2^10を解く"
# CoTで推論タスク実行`,
          codeLanguage: 'bash',
          items: [
            'ブラウザで [ollama.ai/library](https://ollama.ai/library) を開く。数百のモデル検索可能。',
            'フィルタオプション：モデルサイズ、ライセンス、リリース日、ベンチマーク（MMLU、HumanEval、MATH）。',
            'モデル評価：ユーザーDL数、GitHub⭐（ベースモデル）、Ollama⭐。',
            'Ollama新モデル：毎週木曜日UTC 18:00更新。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '地域のプライバシー規則はOllamaのモデル選択にどう影響しますか？',
          content: [
            '**EU / GDPR＋ライセンス遵守。** 本番環境でOllamaモデルを展開するEU組織にとって、ライセンスの選択は性能と同じくらい重要です。Apache 2.0（完全オープン、商用利用可）：Mistral Small、Mistral Small 3.1、Qwen3 8B、Qwen3.8-27B、Devstral Small 2、Granite 4.2。Meta Llama Community Licence（月間アクティブユーザー7億人超で商用利用制限）：Llama 3.1 8B、Llama 3.2 3B、Llama 3.2 Vision 11B。MIT（商用利用可）：DeepSeek-R1 7B・14B。修正MIT（帰属表示条項つきで商用利用可）：Kimi K2.6。OpenMDW-1.1（寛容、商用利用可）：Laguna XS 2.1。商用展開の前に必ずライセンス条件を確認してください。規制業種のEU企業には、Devstral Small 2などのMistralモデル（フランス、Apache 2.0）が妥当な既定の選択です。EU発で寛容なライセンスだからです。Ollamaでモデルを完全オンプレミスで動かせばプロンプトは外部サーバーに送信されません。これはGDPR対応を支えますが、それだけで満たすわけではありません（`:cloud`タグはOllamaのホスト型サービスにデータを送信します）。',
            '**日本（METI）。** 日本企業のOllama展開では、Qwen3 / Qwen3.8が推奨できるモデルファミリーです。日本語テキストをネイティブに扱えるため、推論時間とKVキャッシュの面で有利です。日本語のコーディングワークフローでは、Qwen3.8-27B（Qwen公表のSWE-bench Pro 61.7）が日本語のコードコメントをネイティブに扱います。METIのAIガバナンス文書では通常、正確なモデルバージョンの記載が求められます。`ollama show <モデル>`で、パラメータ数、量子化レベル、コンテキスト長を含む完全な仕様をコンプライアンス記録用に取得できます。',
            '**中国。** 中国のCAC生成AI管理弁法（2023年）では、エンドユーザーにAIサービスを提供する組織は使用するモデルを登録する必要があります。Qwen3 / Qwen3.8（Alibaba、Apache 2.0）は、中国企業のOllama展開に自然な選択肢です。中国発のモデルで、Apache 2.0ライセンス、中国語性能も高いためです。Kimi K2.6（Moonshot AI、修正MIT）も中国発ですが、Ollamaではクラウドタグのみで、ローカル実行にはサーバー級ハードウェアが必要です。コマンド：最高品質なら`ollama run qwen3.8:27b`、速度重視なら`ollama run qwen3:8b`。推論にはDeepSeek-R1（MITライセンス）が適しています。Ollamaでローカル処理するデータについては、推論そのものがPIPLの越境移転要件を発生させるわけではありませんが、ご自身のコンプライアンス義務は確認してください。',
          ],
        },
        commonMistakes: {
          title: 'Ollama選択の一般的ミス',
          faqs: [
            {
              q: 'Ollamaの最新バージョンは？',
              a: 'Ollamaの最新安定版はv0.40.5（2026年10月14日リリース）です。10月16日にv0.40.6のプレリリースが続きましたが、まだ安定版ではありません。ollama.com/downloadからダウンロードするか、Linuxでは`curl https://ollama.ai/install.sh | sh`、macOSでは`brew upgrade ollama`で更新できます。',
            },
            {
              q: 'Ollamaの変更履歴とリリースノートはどこで見られますか？',
              a: '各バージョンのリリースノートはgithub.com/ollama/ollama/releasesにあり、タグごとに日付と変更履歴が記載されています。直近の安定版はv0.40.5（2026年10月14日 -- NVIDIA Nemotron 3.5 Superのサポート、判断モデルのクラウド利用）、v0.40.4（10月12日 -- `ollama run --ask`での判断モデル、読み込み高速化）、v0.40.0（9月25日 -- Apple Siliconで標準MLX）です。',
            },
            {
              q: 'インストール済みのOllamaバージョンを確認するには？',
              a: 'ターミナルで`ollama --version`を実行します。`ollama version 0.40.5`のような行が出力されます。番号が最新版より低い場合は、`curl https://ollama.ai/install.sh | sh`（Linux）または`brew upgrade ollama`（macOS）で更新し、再度`ollama --version`で確認してください。',
            },
            {
              q: 'Ollamaが最初にリリースされたのはいつですか？',
              a: 'Ollamaの最初のリリースv0.0.1は、リポジトリ作成（2023年6月26日）の直後の2023年7月8日にGitHubで公開されました。2026年10月時点ではv0.40.5に到達しています。全リリース一覧はgithub.com/ollama/ollama/releasesで確認できます。',
            },
            {
              q: '大きいモデルタグをプルしたがRAM満杯。何が？',
              a: '確認なしプル。プル前に`ollama show [model-name]`実行。例：`ollama show llama3.1:70b`でRAM表示（約42-48GB、Q4量子化）。初心者は7B-13Bに留める（RAM 16GB以下）。`ollama rm [model-name]`で削除。',
            },
            {
              q: 'Llama 3.3みたいな汎用モデル使うがコード遅い。なぜ？',
              a: 'Llama 3.1 8Bは汎用向きだがQwen3やMistral Smallは技術専門。コード：Qwen3 8B切替（HumanEval 75.4% vs Llama 68.2%）。両方RAM 8GB以下。',
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
            '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) — あなたのPCでこれらのモデルが動くか確認 →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'Ollamaの最新バージョンは？',
              a: 'Ollamaの最新安定版はv0.40.5（2026年10月14日リリース）です。10月16日にv0.40.6のプレリリースが続きましたが、まだ安定版ではありません。ollama.com/downloadからダウンロードするか、Linuxでは`curl https://ollama.ai/install.sh | sh`、macOSでは`brew upgrade ollama`で更新できます。',
            },
            {
              q: 'Ollamaの変更履歴とリリースノートはどこで見られますか？',
              a: '各バージョンのリリースノートはgithub.com/ollama/ollama/releasesにあり、タグごとに日付と変更履歴が記載されています。直近の安定版はv0.40.5（2026年10月14日 -- NVIDIA Nemotron 3.5 Superのサポート、判断モデルのクラウド利用）、v0.40.4（10月12日 -- `ollama run --ask`での判断モデル、読み込み高速化）、v0.40.0（9月25日 -- Apple Siliconで標準MLX）です。',
            },
            {
              q: 'インストール済みのOllamaバージョンを確認するには？',
              a: 'ターミナルで`ollama --version`を実行します。`ollama version 0.40.5`のような行が出力されます。番号が最新版より低い場合は、`curl https://ollama.ai/install.sh | sh`（Linux）または`brew upgrade ollama`（macOS）で更新し、再度`ollama --version`で確認してください。',
            },
            {
              q: 'Ollamaが最初にリリースされたのはいつですか？',
              a: 'Ollamaの最初のリリースv0.0.1は、リポジトリ作成（2023年6月26日）の直後の2023年7月8日にGitHubで公開されました。2026年10月時点ではv0.40.5に到達しています。全リリース一覧はgithub.com/ollama/ollama/releasesで確認できます。',
            },
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
              a: 'Qwen3 8B。CulturaXと日本語Wikiで高精度。Llama 3.3は日本語OK但しQwenが精密。Mistral Smallは仏語西語向き。',
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
              a: 'はい。Llama 3.2 Vision、Qwen2.5-VL、Gemma 3全てマルチモーダル。画像をローカルファイルアップロード。クラウド転送なし。JPEG、PNG、GIF対応。',
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
              a: 'はい。日本企業が利益：データ主権（クラウドロックイン回避）、IT標準準拠（IPA・MEI-TI Governance 2024）、標準HW スケーラビリティ、API料金排除。Qwen3 8Bは標準デスクGPUで実行。Llama 3.1 8Bはエンタープライズスタンダードツール・顧客自動化・文書処理向け検証済み。',
            },
            {
              q: 'Ollamaを開発している会社の正式名称は何ですか？',
              a: '同社はOllama Inc.で、カリフォルニア州パロアルトを拠点とするシリーズB資金調達済みのスタートアップです。2023年にJeffrey MorganとMichael Chiangによって設立されました。',
            },
            {
              q: 'ロシア語タスクに最適なOllamaモデルはどれですか？',
              a: 'Qwen3/Qwen 3.6とMistral Small 3.1はどちらもロシア語をネイティブの多言語トレーニングデータに含みます。非英語ベンチマークではQwen3が高いスコアを示す一方、Mistral Small 3.1は非公式な会話的ロシア語の流暢さで評価されることが多いです。どちらもロシア発のモデルではありません。',
            },
            {
              q: 'OllamaでどのDolphinモデルを使うべきですか？',
              a: '`ollama pull dolphin3`（Dolphin 3.0）を使用してください。Cognitive Computationsが保守する現行版で、Llama 3.1をベースにコンテンツフィルタリングなしで構築されています。旧版の`dolphin-mistral`は2024年リリースで更新が止まっています。',
            },
          ],
        },
        relatedReading: {
          title: '参考資料',
          items: [
            '[Ollamaビジョンモデル(2026)](/ja/power-local-llm/ollama-vision-models-review) -- Ollamaで画像対応モデルを実行するための実践ガイド。実際のCLI/API構文を解説。',
            '[VS CodeとCursorでローカルLLMインストール](/ja/local-llms/local-llms-with-vscode-cursor) -- VS CodeとCursorが今Ollama自動認識。',
            '[ローカルモデル選択：Llamaは Qwenか Mistralか](/ja/local-llms/qwen-vs-llama-vs-mistral) -- ビギナー向け完全比較。',
            '[OllamaはLM Studioより速い？](/ja/local-llms/ollama-vs-lm-studio) -- GPU・スループットベンチ。',
            '[Ollama Windows/Mac インストール方法](/ja/local-llms/how-to-install-ollama) -- ステップバイステップ・環境設定。',
            '[ローカルLLM ハードウェアガイド GPU要件](/ja/local-llms/local-llm-hardware-guide) -- どのGPU・RAM・ストレージがモデルに必須。',
            '[トラブル：Ollama エラーと解策](/ja/local-llms/troubleshooting-local-llm-setup) -- CUDA・MPS・CPU落とし穴・一般エラー。',
          '[ローカルLLMモデル更新情報2026](/ja/local-llms/local-llm-model-updates-2026) -- Ollama対応日付付きの主要オープンウェイトリリース完全タイムライン。',
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            '[Ollama モデルライブラリ](https://ollama.ai/library) -- 数百のモデル、ライブDL統計。',
            '[Ollama GitHub：DL人気モデル](https://github.com/ollama/ollama/issues/3149) -- 月別ユーザー・トレンド（公開）。',
            '[DeepSeek-R1 論文](https://arxiv.org/abs/2501.12948) -- "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"（2025年1月）。',
            '[Gemma 3 発表](https://blog.google/technology/googles-latest-gemma-models/) -- GoogleブログGemma 3マルチモーダル・128Kコンテキスト（2026年2月）。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama最新バージョン2026：v0.40.5と用途別ベストモデル',
        'description': '現在のOllamaバージョンv0.40.5（2026年10月）、完全な変更履歴と最新モデル：Laguna XS 2.1、Kimi K2.7 Code、Qwen3.8、DeepSeek V4。検証済みベンチマーク、RAM、pullコマンド。',
        'url': 'https://www.promptquorum.com/ja/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-10-17',
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.1 8B', 'description': '最多DLモデル。初心者向け・汎用。6.5GB RAM要。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 8B', 'description': '急速成長。コード・数学優秀。6.5GB RAM要。' },
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
              'text': 'Qwen3 8B。CulturaXと日本語Wikiで高精度。Llama 3.3は日本語OK但しQwenが精密。Mistral Smallは仏語西語向き。',
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
              'text': 'はい。Llama 3.2 Vision、Qwen2.5-VL、Gemma 3全てマルチモーダル。画像をローカルファイルアップロード。クラウド転送なし。JPEG、PNG、GIF対応。',
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
              'text': 'はい。日本企業が利益：データ主権（クラウドロックイン回避）、IT標準準拠（IPA・METI AI Governance 2024）、標準HW スケーラビリティ、API料金排除。Qwen3 8Bは標準デスクGPUで実行。Llama 3.1 8Bはエンタープライズスタンダードツール・顧客自動化・文書処理向け検証済み。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollamaを開発している会社の正式名称は何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '同社はOllama Inc.で、カリフォルニア州パロアルトを拠点とするシリーズB資金調達済みのスタートアップです。2023年にJeffrey MorganとMichael Chiangによって設立されました。',
            }
          },
          {
            '@type': 'Question',
            'name': 'ロシア語タスクに最適なOllamaモデルはどれですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3/Qwen 3.6とMistral Small 3.1はどちらもロシア語をネイティブの多言語トレーニングデータに含みます。非英語ベンチマークではQwen3が高いスコアを示す一方、Mistral Small 3.1は非公式な会話的ロシア語の流暢さで評価されることが多いです。どちらもロシア発のモデルではありません。',
            }
          },
          {
            '@type': 'Question',
            'name': 'OllamaでどのDolphinモデルを使うべきですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '`ollama pull dolphin3`（Dolphin 3.0）を使用してください。Cognitive Computationsが保守する現行版で、Llama 3.1をベースにコンテンツフィルタリングなしで構築されています。旧版の`dolphin-mistral`は2024年リリースで更新が止まっています。',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: '下記のスライドデッキは以下をカバーしています：ダウンロード数別の Top 10 Ollama モデル、パフォーマンス比較（60-74% HumanEval）、ユースケース別の最高モデル（チャット、コーディング、推論、ビジョン）、DeepSeek-R1 chain-of-thought 推論、および正確なプルコマンド。Ollama モデル選択リファレンスカードとして PDF をダウンロードしてください。',
    },
    zh: {
      theme: 'Best Models',
      title: 'Ollama最新版本2026：v0.40.5＋按用途选择最佳模型',
      seoTitle: 'Ollama最新版本2026：v0.40.5＋10大最佳模型',
      intro: '当前Ollama稳定版是v0.40.5（2026年10月14日），新增NVIDIA Nemotron 3.5 Super和Bolt、决策模型支持，并更新了llama.cpp和MLX引擎；v0.40.6为预发布版。自8月的v0.33.1以来，Ollama已让MLX成为Apple Silicon上的默认引擎（v0.40.0），并加入ChatGPT Desktop集成（v0.34.0）。消费级硬件上综合最佳仍是Qwen3.8-27B（Qwen公布的SWE-bench Pro为61.7，下载18GB，可放入24GB显卡或32GB Mac）；编程最佳取决于你的配置——见下方按用途划分的说明。',
      metaDescription: 'Ollama最新版本为v0.40.5。了解v0.33以来的变化、最新模型（Nemotron 3.5、GLM-5.3、Granite 4.2），以及聊天、编程和视觉的最佳模型。',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-zh.webp',
      publishDate: '2026-04-11',
      readTime: '阅读约9分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama开源模型',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '版本历史', anchor: '#ollama-version-history' },
        { label: '最受欢迎的模型', anchor: '#most-popular' },
        { label: '按类别分类', anchor: '#by-category' },
        { label: '推理模型：DeepSeek-R1', anchor: '#deepseek-r1' },
        { label: '视觉与多模态', anchor: '#vision-models' },
        { label: '完整Top 10排行', anchor: '#full-top-10' },
        { label: '如何浏览和选择模型', anchor: '#how-to-browse' },
        { label: '常见误区', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '参考来源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: '2026年Ollama最佳模型是Qwen3.8-27B（Qwen公布的SWE-bench Pro为61.7，18GB）；本地编程首选Qwen3.8-27B、Devstral Small 2和Laguna XS 2.1（Kimi K2.6在Ollama上仅提供云端版本）。' },
            { type: 'plain-terms', text: 'Ollama是一款免费工具，让您无需联网或API密钥即可在自己的电脑上运行AI模型。以下是您可以用一条命令下载的顶级模型，按实际用途分类整理。' },
          ],
          items: [
            '**消费级硬件综合最佳**：Qwen3.8-27B（Qwen公布的SWE-bench Pro为61.7，下载18GB，可放入24GB显卡）。均衡全能：qwen3:30b。',
            '**下载量最大**：Llama 3.2 3B（教程常用）和Llama系列 -- 工具支持最广。',
            '**推理最佳**：DeepSeek-R1（思维链）和gpt-oss:20b（推理可调，~o3-mini水平）。',
            '**编程最佳**：Qwen3.8-27B（最佳密集模型）、Laguna XS 2.1（代理式、长时间）、Devstral Small 2（24B级最佳代理）、qwen3-coder:30b（补全）；Kimi K2.6属前沿规模，但在Ollama上仅提供云端版本 -- 同等规模下公布的基准分数最高。',
            '**小型最佳/16GB**：gpt-oss:20b。**视觉/多模态最佳**：Gemma 4（E4B及以上）。**长上下文（10M）/大型多模态最佳**：Llama 4 Scout（约55GB）。**无审查通用最佳**：Dolphin 3.0。**常驻代理**：Nemotron 3.5 Lightning。',
            'Ollama库收录数百个精选模型（通过自定义GGUF Modelfile可使用数千个其他模型）。均可通过`ollama pull <名称>`获取。',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'Ollama最新版本是什么？有哪些变化？',
          content: [
            '**当前Ollama版本：v0.40.5**（2026年10月14日发布）。这是最新稳定版本，可通过ollama.com/download获取。v0.40.6预发布版于10月16日发布，但尚未标记为稳定版。使用`curl https://ollama.ai/install.sh | sh`（macOS：`brew upgrade ollama`）更新，然后用`ollama --version`确认。',
            '**v0.33–v0.40系列的变化（2026年8月–10月）：** v0.33.0（8月21日）启用Claude Desktop作为第三方网关，并提升了KV缓存预填充恢复点的可靠性。v0.34.0（9月5日）允许在ChatGPT Desktop中使用Ollama模型，并加快了Apple Silicon上的结构化输出；v0.34.1（9月14日）不再将MLX safetensors的`ollama create`标记为实验性。v0.40.0（9月25日）在Apple Silicon上默认用MLX运行qwen3.8、gemma4、qwen3.6等受支持架构。v0.35.0（9月28日）通过`/v1/systemone`加入决策模型——返回选项、概率和分数而非文本的模型，首批为Nimble和Tev1——v0.35.1（9月29日）加入多模态Clef模型。v0.40.2（10月8日）在后台升级旧模型时保留备份，v0.40.4（10月12日）新增`ollama run <决策模型> --ask`，v0.40.5（10月14日）新增NVIDIA Nemotron 3.5 Super支持以及Clef决策模型的云端访问。完整说明：github.com/ollama/ollama/releases。',
            '**自上次更新以来新增的最新模型（6月下旬-7月）：**',
          ],
          items: [
            '**Laguna XS 2.1**（Poolside、2026年7月2日）— 33B总数/3B活跃MoE，专为智能体编程和长周期本地任务构建：规划、编写代码、运行测试、迭代。256K上下文，OpenMDW-1.1许可。SWE-bench Verified 70.9%，SWE-bench Multilingual 63.1%。拉取：`ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code**（Moonshot AI、2026年6月）— 专注编程的智能体模型，基于Kimi K2.6构建，专为长周期编程会话设计。拉取：`ollama pull kimi-k2.7-code:cloud`',
            '**DeepSeek V4 Pro**（DeepSeek、2026年4月23日）— 算法编码专家，93.5% LiveCodeBench，MIT许可。轻量硬件可选预算版DeepSeek V4 Flash。拉取：`ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**（Moonshot AI、2026年4月20日）— 前沿编码模型，SWE-Bench Pro 58.6，SWE-bench Verified 80.2%。MoE架构（32B活跃/1T总数）。Modified MIT许可。',
            '**Qwen3.8-27B**（Alibaba、2026年4月16日）— 消费级硬件综合最佳，61.7 SWE-bench Pro，Apache 2.0，Q4下可装入24GB。另有Qwen3.6-35B-A3B（MoE，73.4 SWE-bench）。',
            '**GLM-5.3**（Z.ai）— 744B / 40B活跃MoE，MIT许可。结构化代码生成领导者。',
            '**gpt-oss**（OpenAI、2026年）— 开放权重MoE：gpt-oss:20b（21B总数 / 3.6B活跃，16GB可运行，~o3-mini水平，推理可调）和gpt-oss:120b（80GB）。',
            '**Gemma 4**（Google、2026年4月2日）— 多模态尺寸 E2B / E4B / E12B（26B MoE）/ E27B（31B密集），全部支持视觉和工具调用。现在Apple Silicon上快约90%（2026年7月MLX更新）。E4B在~6GB显存下运行。',
          ],
          codeBlock: '# 更新Ollama到最新版本（v0.40.5）\ncurl https://ollama.ai/install.sh | sh\n\n# 或Mac：brew upgrade ollama\n\n# 检查当前版本\nollama --version  # 输出：ollama version 0.40.5\n\n# 拉取2026年最新模型\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'Ollama的版本历史和发布时间线是什么？',
          content: '**Ollama于2023年7月8日发布首个版本v0.0.1，并在2026年10月14日达到v0.40.5。** 下表列出了改变Ollama使用方式的版本；所有标签及完整发布说明见github.com/ollama/ollama/releases。2026年9月下旬版本号从v0.35跳到v0.40，因此GitHub上v0.40.0（9月25日）与v0.35系列（9月28-29日）并列。',
          rows: [
            { '版本': 'v0.40.5', '发布日期': '2026年10月14日', '主要变化': 'Nemotron 3.5 Super；云端决策模型' },
            { '版本': 'v0.40.0', '发布日期': '2026年9月25日', '主要变化': 'Apple Silicon默认使用MLX' },
            { '版本': 'v0.35.0', '发布日期': '2026年9月28日', '主要变化': '通过/v1/systemone使用决策模型' },
            { '版本': 'v0.34.0', '发布日期': '2026年9月5日', '主要变化': 'ChatGPT Desktop可用Ollama模型' },
            { '版本': 'v0.33.0', '发布日期': '2026年8月21日', '主要变化': 'Claude Desktop网关；KV缓存恢复' },
            { '版本': 'v0.32.0', '发布日期': '2026年7月11日', '主要变化': '“Chat, Code & Work”智能体' },
            { '版本': 'v0.0.1', '发布日期': '2023年7月8日', '主要变化': '首个公开版本' },
          ],
          columns: ['版本', '发布日期', '主要变化'],
        },
        mostPopular: {
          id: 'most-popular',
          title: '最受欢迎的模型（2026年7月）',
          content: [
            '**Llama 3.2 3B** 仍为总下载量最高，主要作为初安装测试模型。在消费级硬件品质方面，Qwen3.8-27B（61.7 SWE-bench Pro、Q4下可装入24GB）仍为综合最佳选择。',
            '**Qwen3和Qwen3.8** 是Ollama库中增长最快的模型家族，Qwen3和新的Qwen 3.6密集变体正在快速取代Qwen3。DeepSeek-R1在发布后出现大幅增长，并保持推理任务的高下载量。**Dolphin 3.0**（Cognitive Computations、基于Llama 3.1构建）是希望获得无内容过滤本地助手的用户中下载量最高的无审查通用模型，拉取命令为`ollama pull dolphin3`（不是已过时的`dolphin-mistral`）。',
            '**Meta Llama 4** 于2026年4月推出Scout（17B活跃、109B总数、MoE）和Maverick（17B活跃、400B总数）变体。Llama 4 Scout现已稳定在Ollama库中（`ollama pull llama4:scout`）。Llama 4采用Mixture-of-Experts（MoE）架构，每个token仅17B参数活跃，但因109B总参数，Scout在Q4下需~55GB显存（24GB仅限1.78位，~20 tok/s）。Scout的亮点是10M token上下文窗口和多模态输入，而非消费级硬件适配性。Ollama生态在2026年4月显著扩展。Kimi K2.6（Moonshot AI、Modified MIT许可、32B活跃/1T总数MoE）取得SWE-Bench Pro 58.6，与GPT-5.5持平。Laguna XS 2.1（Poolside）是智能体编程领域的最新挑战者，专为长周期本地编程会话构建。Qwen3.8-27B达到61.7 SWE-bench Pro，成为消费级硬件综合最佳（Q4下可装入24GB）。OpenAI的开放权重gpt-oss:20b（21B总数/3.6B活跃MoE）在16GB下以~o3-mini水平运行，推理可调。当前版本Ollama v0.40.5（2026年10月14日）新增NVIDIA Nemotron 3.5 Super支持。Ollama库现涵盖数百个精选模型，其中Laguna XS 2.1和Kimi K2.7 Code为最新新增。',
          ],
        },
        byCategory: {
          id: 'by-category',
          title: '按用途分类',
          content: '模型的输出质量在很大程度上取决于你的提示方式。关于适用于所有本地模型的结构化技术——包括思维链、Few-Shot示例和输出格式化——请参阅[Prompt工程指南](https://www.promptquorum.com/zh/prompt-engineering)。对于推理任务，[Chain-of-Thought提示](https://www.promptquorum.com/zh/prompt-engineering/chain-of-thought-prompting)显著改善DeepSeek-R1和Qwen3输出质量。了解每个模型所需的VRAM，见[VRAM需求指南 →](/zh/local-llms/how-much-vram-local-llm)。对于Gemma 4代理工作流，见[Tree-of-Thought和ReAct](https://www.promptquorum.com/zh/prompt-engineering/tree-of-thought-react)。一旦把这份榜单中的工具调用模型接入具备文件访问和数据库查询能力的多步循环，就可以参阅[使用 MCP 的本地 AI 代理](/zh/power-local-llm/local-ai-agents-with-mcp-2026)，了解这套开源编排方案。',
          items: [
            '**通用聊天（初学者）**：`ollama run llama3.2:3b` -- 文档最多，最佳入门模型。',
            '**通用聊天（最佳选择）**：`ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro，消费级硬件综合最佳，Q4下可装入24GB。均衡全能：`ollama run qwen3:30b`。8GB机器保持`ollama run llama3.2:3b`。',
            '**长上下文 / 多模态**：`ollama run llama4:scout` -- 10M token上下文 + 多模态，MoE（17B活跃/109B总数）。Q4下需~55GB显存（24GB仅限1.78位，~20 tok/s）。',
            '**小型/16GB最强**：`ollama run gpt-oss:20b` -- 21B总数 / 3.6B活跃MoE，~o3-mini水平，推理可调。更大：`ollama run gpt-oss:120b`（80GB）。',
            '**编程（7B）**：`ollama run qwen3:8b` -- 76% HumanEval，改进自Qwen3，多语言。',
            '**编程（最优代理、24B）**：`ollama run devstral-small-2` -- 最优代理编程（多文件编辑、调试）。16GB RAM。Mistral AI出品。',
            '**编程（最优密集、27B）**：`ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro。最优密集编程模型。18 GB显存。',
            '**编程（前沿MoE）**：`ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6（与GPT-5.5持平），顶级。MoE（32B活跃/1T总数）。Modified MIT许可。',
            '**代理和工具调用**：`ollama run gemma4:e4b` -- 2026年4月2日发布。内置工具调用+视觉支持。推荐本地代理、函数调用、结构化输出。6GB RAM。',
            '**推理和数学**：`ollama run deepseek-r1:7b` -- Chain-of-Thought模型，7B最高本地数学性能。',
            '**多语言**：`ollama run qwen3:8b` -- 29+本地语言，最强非英文支持，76% HumanEval。',
            '**俄语任务**：`ollama run qwen3:8b` 或 `ollama run mistral-small3.1` -- 两者的原生多语言训练均包含俄语；Qwen3在非英语基准上得分更高，Mistral Small 3.1在非正式对话俄语流利度上更强。',
            '**无审查/通用**：`ollama run dolphin3` -- Dolphin 3.0（Cognitive Computations，基于Llama 3.1构建），无内置内容过滤，适用于通用聊天、编程和智能体任务。',
            '**图像理解**：`ollama run gemma4:e4b` -- 视觉+工具调用。或`ollama run llama3.2-vision:11b`专用视觉。',
            '**快速轻量**：`ollama run gemma2:2b` -- 最快CPU推理，1.7GB RAM。',
            '**高质量（16GB显存）**：`ollama run mistral-small3.1` -- 70B品质14GB显存。',
            '**家庭自动化 / 唤醒词AI**：`ollama run phi4-mini` — Phi-4 Mini（3.8B，约3 GB VRAM）在无独显的迷你PC上以20–25 tok/sec处理Home Assistant语音命令。参阅[Home Assistant + Ollama集成指南 →](/smart-home/home-assistant-ollama-integration)。',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-zh.webp',
          imageCaption: '按用途选择Ollama：2026年7月。聊天llama4:scout，编码kimi-k2.6 / laguna-xs-2.1，推理deepseek-r1:7b。',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: '最近有哪些模型加入了Ollama？',
          content: '以下是Ollama库中最新的模型，按从新到旧排列。在构建工作流前，请用`ollama pull <模型>`确认可用性——新模型通常在发布后数天内出现在ollama.com/library。',
          rows: [
            { '模型': 'nemotron-3.5-super', '发布时间': '2026年10月14日', '最适合': 'NVIDIA — 120B视觉-语言，编程、推理、工具使用，最高1M上下文', 'Ollama命令': 'ollama run nemotron-3.5-super' },
            { '模型': 'nemotron-3.5-bolt', '发布时间': '2026年10月14日', '最适合': 'NVIDIA — 总计74B/激活9B的MoE，本地编程和工具，25GB', 'Ollama命令': 'ollama run nemotron-3.5-bolt' },
            { '模型': 'nemotron-3.5-lightning', '发布时间': '2026年', '最适合': 'NVIDIA — 30B MoE，激活3B，常驻代理，1M上下文', 'Ollama命令': 'ollama run nemotron-3.5-lightning' },
            { '模型': 'glm-5.3', '发布时间': '2026年', '最适合': 'Z.ai — 面向编程和长时间代理的旗舰开放权重', 'Ollama命令': 'ollama run glm-5.3' },
            { '模型': 'granite4.2', '发布时间': '2026年', '最适合': 'IBM — Apache 2.0，3B / 8B / 30B，128K上下文', 'Ollama命令': 'ollama run granite4.2' },
            { '模型': 'qwen3.8:27b', '发布时间': '2026年8月', '最适合': '消费级硬件综合最佳，SWE-bench Pro 61.7（Qwen公布），18GB', 'Ollama命令': 'ollama run qwen3.8:27b' },
            { '模型': 'laguna-xs-2.1', '发布时间': '2026年7月2日', '最适合': 'Poolside — 代理编码，33B/激活3B MoE，20GB，256K上下文', 'Ollama命令': 'ollama run laguna-xs-2.1' },
            { '模型': 'kimi-k2.7-code', '发布时间': '2026年', '最适合': 'Moonshot AI — 面向编程，Ollama上仅有云端标签', 'Ollama命令': 'ollama run kimi-k2.7-code:cloud' },
            { '模型': 'kimi-k2.6', '发布时间': '2026年4月20日', '最适合': '前沿编程（SWE-Bench Pro 58.6），Ollama上仅有云端标签', 'Ollama命令': 'ollama run kimi-k2.6:cloud' },
            { '模型': 'gpt-oss:20b', '发布时间': '2026年', '最适合': '小型最佳/16GB，~o3-mini，推理可调', 'Ollama命令': 'ollama run gpt-oss:20b' },
            { '模型': 'gemma4:e4b', '发布时间': '2026年4月2日', '最适合': '视觉+工具调用（E2B/E4B/12B/26B/31B）', 'Ollama命令': 'ollama run gemma4:e4b' },
            { '模型': 'qwen3:30b', '发布时间': '2026年', '最适合': '均衡全能；代码补全用qwen3-coder:30b', 'Ollama命令': 'ollama run qwen3:30b' },
          ],
          columns: ['模型', '发布时间', '最适合', 'Ollama命令'],
        },
        deepseekR1: {
          id: 'deepseek-r1',
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
          id: 'vision-models',
          title: '视觉和多模态模型对比',
          content: '2026年4月，以下开源视觉模型可在Ollama中本地运行：',
          columns: ['模型', 'RAM要求', '图像支持', 'Ollama命令'],
          image: '/images/ollama-vision-models-comparison-zh.svg',
          imageCaption: '4个Ollama视觉模型: llama3.2-vision:11b (8 GB)、gemma3:9b (6 GB)、minicpm-v (5.5 GB)。全部本地运行。',
          rows: [
            { '模型': '[Llama 3.2 Vision 11B](https://ollama.com/library/llama3.3)', 'RAM要求': '11 GB', '图像支持': '是（JPEG、PNG、GIF）', 'Ollama命令': 'ollama run llama3.2-vision:11b' },
            { '模型': '[Gemma 3 9B](https://ollama.com/library/gemma3)', 'RAM要求': '9.5 GB', '图像支持': '是（Gemma 3全系多模态）', 'Ollama命令': 'ollama run gemma3:9b' },
            { '模型': '[Qwen2.5-VL 7B](https://ollama.com/library/qwen2.5vl)', 'RAM要求': '7.5 GB', '图像支持': '是（JPEG、PNG）', 'Ollama命令': 'ollama run qwen2.5vl:7b' },
            { '模型': '[Phi-4 Vision 14B](https://ollama.com/library/phi4)', 'RAM要求': '14 GB', '图像支持': '是（高分辨率输入）', 'Ollama命令': 'ollama run phi4:14b' },
          ],
        },
        fullTop10: {
          id: 'full-top-10',
          title: 'Ollama完整Top 10模型排行（2026年4月）',
          content: '根据Ollama官方下载统计和HumanEval、MMLU基准：',
          columns: ['排名', '模型', '最适用于', 'RAM要求', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-zh.webp',
          imageCaption: '按下载量排名前10的Ollama模型：RAM从1.7 GB (gemma2:2b)到14 GB (mistral-small3.1)。HumanEval 39-74%。',
          rows: [
            { '排名': '1', '模型': '[Llama 3.1 8B](https://ollama.com/library/llama3.3)', '最适用于': '通用、初学者入门', 'RAM要求': '6.5 GB', 'HumanEval': '76%' },
            { '排名': '2', '模型': '[Qwen3 8B](https://ollama.com/library/qwen3)', '最适用于': '代码和中文', 'RAM要求': '6.5 GB', 'HumanEval': '90%' },
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
          id: 'how-to-browse',
          title: '如何浏览和选择Ollama模型',
          content: '使用Ollama模型有两种方式。**切换已安装模型：** 在Ollama Mac应用中，点击聊天输入框底部的模型下拉按钮（显示当前模型名，如"gemma3:1b"）切换本地已安装的模型。**查找并下载新模型：** 访问ollama.com/library按类别浏览数百个精选模型，然后使用下方CLI命令下载安装。',
          codeBlock: 'ollama pull llama3.1:8b\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: '地区隐私规则如何影响你的Ollama模型选择？',
          content: [
            '**欧盟 / GDPR + 许可证合规。** 对于在生产中部署Ollama模型的欧盟组织，许可证的选择与性能同样重要。Apache 2.0（完全开放，允许商用）：Mistral Small、Mistral Small 3.1、Qwen3 8B、Qwen3.8-27B、Devstral Small 2、Granite 4.2。Meta Llama社区许可证（月活用户超过7亿时限制商用）：Llama 3.1 8B、Llama 3.2 3B、Llama 3.2 Vision 11B。MIT（允许商用）：DeepSeek-R1 7B和14B。修改版MIT（允许商用，含署名条款）：Kimi K2.6。OpenMDW-1.1（宽松，允许商用）：Laguna XS 2.1。商用部署前务必核对许可证条款。对于受监管行业的欧盟企业，Devstral Small 2等Mistral模型（法国，Apache 2.0）是合理的默认选择：欧盟来源且许可证宽松。通过Ollama完全在本地运行模型意味着提示词不会发送到外部服务器；这有助于满足GDPR义务，但本身并不足以满足（`:cloud`标签会把数据发送到Ollama的托管服务）。',
            '**日本（METI）。** 对于日本企业的Ollama部署，Qwen3 / Qwen3.8是值得推荐的模型家族：它原生处理日文文本，有利于推理时间和KV缓存。对于日语编程工作流：Qwen3.8-27B（Qwen公布的SWE-bench Pro为61.7）原生处理日文代码注释。METI的AI治理文档通常要求注明确切的模型版本。使用`ollama show <模型>`可获取包含参数量、量化级别和上下文长度的完整规格，用于合规记录。',
            '**中国。** 根据CAC《生成式人工智能服务管理暂行办法》（2023年），向终端用户提供AI服务的组织必须登记所用模型。Qwen3 / Qwen3.8（Alibaba，Apache 2.0）是中国企业Ollama部署的自然选择：中国来源、Apache 2.0许可证、中文表现出色。Kimi K2.6（Moonshot AI，修改版MIT）同样来自中国，但Ollama仅提供云端标签，本地运行需要服务器级硬件。命令：追求最佳质量用`ollama run qwen3.8:27b`，追求速度用`ollama run qwen3:8b`。DeepSeek-R1（MIT许可证）适合推理任务。对于通过Ollama在本地处理的数据，推理本身不会触发PIPL的跨境传输要求；请核对你自身的合规义务。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '常见误区',
          faqs: [
            {
              q: 'Ollama最新版本是什么？',
              a: 'Ollama最新稳定版本为v0.40.5，发布于2026年10月14日。v0.40.6预发布版于10月16日发布，但尚未标记为稳定版。可从ollama.com/download下载，或在Linux上用`curl https://ollama.ai/install.sh | sh`、在macOS上用`brew upgrade ollama`原地更新。',
            },
            {
              q: '在哪里可以查看Ollama更新日志和发布说明？',
              a: '每个版本的发布说明都在github.com/ollama/ollama/releases，按标签列出日期和更新日志。最新的稳定版条目为v0.40.5（2026年10月14日 -- NVIDIA Nemotron 3.5 Super支持、决策模型云端访问）、v0.40.4（10月12日 -- `ollama run --ask`决策模型、加载更快）和v0.40.0（9月25日 -- Apple Silicon默认使用MLX）。',
            },
            {
              q: '如何查看已安装的Ollama版本？',
              a: '在终端运行`ollama --version`，会输出类似`ollama version 0.40.5`的一行。如果版本号低于当前版本，请用`curl https://ollama.ai/install.sh | sh`（Linux）或`brew upgrade ollama`（macOS）更新，然后再次运行`ollama --version`确认。',
            },
            {
              q: 'Ollama最早是什么时候发布的？',
              a: 'Ollama的首个版本v0.0.1于2023年7月8日在GitHub发布，仓库创建于2023年6月26日。到2026年10月，项目已发展到v0.40.5。完整版本列表见github.com/ollama/ollama/releases。',
            },
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
            '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide) — 不确定你的电脑能否运行这些模型？ →',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'Ollama最新版本是什么？',
              a: 'Ollama最新稳定版本为v0.40.5，发布于2026年10月14日。v0.40.6预发布版于10月16日发布，但尚未标记为稳定版。可从ollama.com/download下载，或在Linux上用`curl https://ollama.ai/install.sh | sh`、在macOS上用`brew upgrade ollama`原地更新。',
            },
            {
              q: '在哪里可以查看Ollama更新日志和发布说明？',
              a: '每个版本的发布说明都在github.com/ollama/ollama/releases，按标签列出日期和更新日志。最新的稳定版条目为v0.40.5（2026年10月14日 -- NVIDIA Nemotron 3.5 Super支持、决策模型云端访问）、v0.40.4（10月12日 -- `ollama run --ask`决策模型、加载更快）和v0.40.0（9月25日 -- Apple Silicon默认使用MLX）。',
            },
            {
              q: '如何查看已安装的Ollama版本？',
              a: '在终端运行`ollama --version`，会输出类似`ollama version 0.40.5`的一行。如果版本号低于当前版本，请用`curl https://ollama.ai/install.sh | sh`（Linux）或`brew upgrade ollama`（macOS）更新，然后再次运行`ollama --version`确认。',
            },
            {
              q: 'Ollama最早是什么时候发布的？',
              a: 'Ollama的首个版本v0.0.1于2023年7月8日在GitHub发布，仓库创建于2023年6月26日。到2026年10月，项目已发展到v0.40.5。完整版本列表见github.com/ollama/ollama/releases。',
            },
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
              a: 'Qwen3 8B。使用CulturaX中文微调和Wikipedia中文语料。Llama 3.3中文可接受，但Qwen精度更高。Mistral Small主要针对法文和西班牙文。',
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
              a: '支持。Llama 3.2 Vision、Qwen2.5-VL、Gemma 3都是多模态。图像本地上传无云传输。支持JPEG、PNG、GIF。',
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
              a: '优势：数据主权（避免云锁定）、符合IT标准（IPA/METI AI Governance 2024）、标准硬件可扩展、无API费用。Qwen3 8B在标准企业GPU上运行。Llama 3.1 8B适合企业工具、客户自动化和文档处理验证。',
            },
            {
              q: '在Ollama中应该使用哪个Dolphin模型？',
              a: '应使用Dolphin 3.0（`ollama pull dolphin3`），而非已过时的`dolphin-mistral`（2024年模型，已停止维护）。Dolphin 3.0由Cognitive Computations开发，基于Llama 3.1构建，无内置内容过滤，适用于通用聊天、编程和智能体任务。',
            },
            {
              q: 'Ollama背后公司的官方名称是什么？',
              a: '该公司是Ollama Inc.，一家总部位于加利福尼亚州帕洛阿尔托的B轮融资初创公司，由Jeffrey Morgan和Michael Chiang于2023年创立。',
            },
            {
              q: '哪些Ollama模型最适合俄语任务？',
              a: 'Qwen3/Qwen 3.6和Mistral Small 3.1的原生多语言训练均包含俄语；Qwen3在非英语基准上得分更高，Mistral Small 3.1在非正式对话中俄语流利度更强。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[Ollama视觉模型(2026)](/zh/power-local-llm/ollama-vision-models-review) -- 通过Ollama运行图像模型的实用专项指南,含真实CLI/API语法。',
            '[如何安装Ollama：完整指南](/zh/local-llms/how-to-install-ollama)',
            '[Ollama vs LM Studio：完整对比](/zh/local-llms/ollama-vs-lm-studio)',
            '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide)',
            '[LLM量子化完全指南：Q4_K_M vs IQ3_M](/zh/local-llms/llm-quantization-explained)',
            '[Prompt Engineering框架：RTF框架](/zh/prompt-engineering/rtf-framework)',
            '[AI代码审查指南](/zh/prompt-engineering/ai-code-review)',
          '[本地LLM模型更新2026](/zh/local-llms/local-llm-model-updates-2026) -- 包含Ollama可用日期的所有主要开权重发布完整时间线。',
          ],
        },
        sources: {
          id: 'sources',
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
        'headline': 'Ollama最新版本2026：v0.40.5与最佳模型',
        'description': '当前Ollama版本v0.40.5（2026年10月）、完整更新日志及最新模型：Laguna XS 2.1、Kimi K2.7 Code、Qwen3.8、Kimi K2.6。验证基准、RAM需求、pull命令。',
        'url': 'https://www.promptquorum.com/zh/local-llms/top-open-source-models-ollama',
        'datePublished': '2026-04-11',
        'dateModified': '2026-10-17',
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.1 8B', 'description': '下载量最高。通用、初学者适用。6.5GB RAM。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Qwen3 8B', 'description': '增长最快。代码和中文优秀。6.5GB RAM。' },
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
              'text': 'Qwen3 8B。使用CulturaX中文微调和Wikipedia中文语料。Llama 3.3中文可接受，但Qwen精度更高。Mistral Small主要针对法文和西班牙文。',
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
              'text': '支持。Llama 3.2 Vision、Qwen2.5-VL、Gemma 3都是多模态。图像本地上传无云传输。支持JPEG、PNG、GIF。',
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
              'text': '优势：数据主权（避免云锁定）、符合IT标准（IPA/METI AI Governance 2024）、标准硬件可扩展、无API费用。Qwen3 8B在标准企业GPU上运行。Llama 3.1 8B适合企业工具、客户自动化和文档处理验证。',
            }
          },
          {
            '@type': 'Question',
            'name': '在Ollama中应该使用哪个Dolphin模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '应使用Dolphin 3.0（`ollama pull dolphin3`），而非已过时的`dolphin-mistral`（2024年模型，已停止维护）。Dolphin 3.0由Cognitive Computations开发，基于Llama 3.1构建，无内置内容过滤，适用于通用聊天、编程和智能体任务。',
            }
          },
          {
            '@type': 'Question',
            'name': 'Ollama背后公司的官方名称是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '该公司是Ollama Inc.，一家总部位于加利福尼亚州帕洛阿尔托的B轮融资初创公司，由Jeffrey Morgan和Michael Chiang于2023年创立。',
            }
          },
          {
            '@type': 'Question',
            'name': '哪些Ollama模型最适合俄语任务？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3/Qwen 3.6和Mistral Small 3.1的原生多语言训练均包含俄语；Qwen3在非英语基准上得分更高，Mistral Small 3.1在非正式对话中俄语流利度更强。',
            }
          },
        ]
      },
      gammaEmbedUrl: '/presentations/top-open-source-models-ollama-static.html',
      gammaDescription: '下面的幻灯片涵盖：按下载次数排名的 Top 10 Ollama 模型、性能对比（60-74% HumanEval）、按用途分类的最佳模型（聊天、编码、推理、视觉）、DeepSeek-R1 链式思维推理及确切的拉取命令。将 PDF 下载为您的 Ollama 模型选择参考卡。',
    },
  ko: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-11-17',
      next_refresh_due: '2026-11-17',
      last_full_refresh: '2026-10-17',
      current_models_mentioned: ['Nemotron 3.5 Lightning', 'Nemotron 3.5 Super', 'Nemotron 3.5 Bolt', 'Laguna XS 2.1', 'Kimi K2.7 Code', 'Dolphin 3.0', 'Qwen3.8-27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.3', 'Llama 4 Scout', 'Devstral Small 24B', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-bench Verified', 'SWE-bench Multilingual', 'SWE-Bench Pro', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'Ollama 최신 버전 2026: v0.40.5 + 용도별 최고 모델',
      seoTitle: 'Ollama 최신 버전 2026: v0.40.5 + 최고 모델 10선',
      intro: '현재 Ollama 안정 버전은 v0.40.5(2026년 10월 14일)로, NVIDIA Nemotron 3.5 Super와 Bolt, 의사결정 모델 지원, 업데이트된 llama.cpp 및 MLX 엔진이 추가되었습니다. v0.40.6은 프리릴리스입니다. 8월의 v0.33.1 이후 Ollama는 Apple Silicon에서 MLX를 기본 엔진으로 만들었고(v0.40.0) ChatGPT Desktop 연동을 추가했습니다(v0.34.0). 소비자용 하드웨어에서 종합 최고는 여전히 Qwen3.8-27B(Qwen 발표 SWE-bench Pro 61.7, 다운로드 18GB, 24GB 카드 또는 32GB Mac에 탑재 가능)이며, 코딩에 가장 좋은 모델은 환경에 따라 다릅니다. 아래 용도별 내용을 참고하세요.',
      metaDescription: 'Ollama 최신 버전은 v0.40.5입니다. v0.33 이후 변경 사항, 최신 모델(Nemotron 3.5, GLM-5.3, Granite 4.2), 채팅·코딩·비전에 가장 좋은 모델을 확인하세요.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-ko.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**현재 Ollama 안정 버전은 v0.40.5(2026년 10월 14일)이며, v0.40.6(10월 16일)은 프리릴리스입니다. 최근 추가된 최신 모델은 v0.40.5의 NVIDIA Nemotron 3.5 Super(120B, 비전-언어)와 Bolt(총 74B/활성 9B MoE, 25GB), 그리고 상시 실행 에이전트용 Nemotron 3.5 Lightning(30B MoE, 활성 3B)입니다. 소비자용 하드웨어에서 종합 최고는 Qwen3.8-27B(Qwen 발표 SWE-bench Pro 61.7, 18GB, 24GB 카드에 탑재 가능)입니다. 그 밖의 추천: Devstral Small 2와 Laguna XS 2.1(로컬 에이전트 코딩; Kimi K2.6은 프런티어급이지만 Ollama에서는 클라우드 전용), gpt-oss:20b(소형 최고/16GB), qwen3:30b(균형형), DeepSeek-R1(추론), Gemma 4(비전/도구 호출, 이제 12B와 31B도 제공), Granite 4.2(IBM, Apache 2.0, 3B/8B/30B), Dolphin 3.0(무검열 범용), Llama 4 Scout(장문 컨텍스트 10M/멀티모달). 가장 많이 다운로드된 것은 여전히 Llama 계열입니다.**',
      quickAnswerTop: {
        ko: {
          question: 'Ollama 최신 버전과 2026년 최고의 모델은 무엇인가요?',
          answer: 'Ollama 최신 안정 버전은 v0.40.5(2026년 10월 14일)이며 v0.40.6은 프리릴리스입니다. 최근 추가된 최신 모델은 NVIDIA Nemotron 3.5 Super와 Bolt, 그리고 상시 실행 에이전트용 Nemotron 3.5 Lightning입니다. 2026년 Ollama용 최고의 오픈소스 모델은 Qwen3.8-27B(소비자용 하드웨어 종합 최고, 18GB), Devstral Small 2와 Laguna XS 2.1(로컬 에이전트 코딩 최고; Kimi K2.6은 Ollama에서 클라우드 전용), gpt-oss:20b(소형 최고/16GB, 추론 조절 가능), qwen3:30b(균형형), Gemma 4(비전 + 도구 호출), Llama 4 Scout(장문 컨텍스트 10M/멀티모달 최고), Dolphin 3.0(무검열 범용 최고), DeepSeek-R1(추론 최고)입니다. 설치: ollama pull <모델 이름>',
          bullets: [
            '→최신 버전: Ollama v0.40.5(2026년 10월 14일) — Nemotron 3.5 Super와 Bolt, 의사결정 모델, 업데이트된 llama.cpp 및 MLX. v0.40.6은 프리릴리스',
            '→v0.33 이후: Apple Silicon에서 MLX가 기본 엔진(v0.40.0), ChatGPT Desktop에서 Ollama 모델 사용(v0.34.0), 백그라운드 모델 업그레이드(v0.40.2)',
            '→Qwen3.8-27B — 소비자용 하드웨어 종합 최고, SWE-bench Pro 61.7(Qwen 발표), 다운로드 18GB',
            '→Devstral Small 2(15GB)와 Laguna XS 2.1(20GB) — 로컬 에이전트 코딩; Kimi K2.6과 K2.7 Code는 클라우드 태그만 제공',
            '→gpt-oss:20b — 소형 최고, 16GB에서 실행, ~o3-mini 수준, 추론 조절 가능',
            '→Nemotron 3.5 Lightning — 활성 3B의 30B MoE, 1M 컨텍스트, 상시 실행 에이전트용',
            '→qwen3:30b — 균형형 올라운드 모델; 코드 완성은 qwen3-coder:30b',
            '→Llama 4 Scout — 장문 컨텍스트(10M 토큰) + 멀티모달, Q4 기준 약 55GB',
            '→DeepSeek-R1 — 추론/수학 최고; 추론 조절은 gpt-oss:20b (DeepSeek은 이후 DeepSeek-V4(Flash/Pro)를 더 새로운 오픈 웨이트 세대로 공개했으며, R1/V3는 로컬에서 계속 사용할 수 있습니다.)',
          ],
          updatedDate: '2026-10-17',
        },
      },
      audience: '소비자 하드웨어에서 처음으로 로컬 LLM을 실행하는 입문자',
      readTime: '9분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: '오픈소스 모델 Ollama',
      toc: [
        { label: '핵심 요점', anchor: '#key-takeaways' },
        { label: '버전 이력', anchor: '#ollama-version-history' },
        { label: 'Ollama에서 가장 인기 있는 모델', anchor: '#most-popular-models-on-ollama' },
        { label: '사용 사례별 상위 모델', anchor: '#top-models-by-category' },
        { label: '2026년 7월 신규 추가', anchor: '#new-may-2026' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: '2026년 Ollama 최고의 모델은 Qwen3.8-27B(Qwen 발표 SWE-bench Pro 61.7, 18GB)이며, 로컬 코딩에는 Qwen3.8-27B, Devstral Small 2, Laguna XS 2.1을 추천합니다(Kimi K2.6은 Ollama에서 클라우드 전용).' },
            { type: 'plain-terms', text: 'Ollama는 인터넷 연결이나 API 키 없이 자신의 컴퓨터에서 AI 모델을 실행할 수 있게 해주는 무료 도구입니다. 여기서는 실제로 필요한 용도별로 정리된, 명령어 하나로 다운로드할 수 있는 최고의 모델들을 소개합니다.' },
          ],
          items: [
            '**소비자용 하드웨어 종합 최고**: Qwen3.8-27B(Qwen 발표 SWE-bench Pro 61.7, 다운로드 18GB, 24GB 카드에 탑재 가능). 균형형: qwen3:30b.',
            '**가장 많이 다운로드됨**: Llama 3.2 3B(튜토리얼용)와 Llama 계열 -- 도구 지원이 가장 넓음.',
            '**추론 최고**: DeepSeek-R1(사고의 연쇄)과 gpt-oss:20b(추론 조절 가능, ~o3-mini 수준).',
            '**코딩 최고**: Qwen3.8-27B(밀집 모델 최고), Laguna XS 2.1(에이전트형, 장시간), Devstral Small 2(24B급 에이전트 최고), qwen3-coder:30b(코드 완성); Kimi K2.6은 프런티어급이지만 Ollama에서는 클라우드 전용 -- 각 크기에서 발표된 벤치마크가 가장 높은 수준.',
            '**소형 최고/16GB**: gpt-oss:20b. **비전/멀티모달 최고**: Gemma 4(E4B 이상). **장문 컨텍스트(10M)/대형 멀티모달 최고**: Llama 4 Scout(약 55GB). **무검열 범용 최고**: Dolphin 3.0. **상시 실행 에이전트**: Nemotron 3.5 Lightning.',
            'Ollama 라이브러리에는 엄선된 수백 개의 모델이 있습니다(사용자 지정 GGUF Modelfile로 수천 개를 추가 가능). 모두 `ollama pull <이름>`으로 받을 수 있습니다.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: '최신 Ollama 버전은 무엇이며 무엇이 바뀌었습니까?',
          content: [
            '**현재 Ollama 버전: v0.40.5**(2026년 10월 14일 출시). ollama.com/download에서 받을 수 있는 최신 안정 버전입니다. 10월 16일에 v0.40.6 프리릴리스가 공개되었지만 아직 안정 버전으로 표시되지 않았습니다. `curl https://ollama.ai/install.sh | sh`(macOS: `brew upgrade ollama`)로 업데이트한 뒤 `ollama --version`으로 확인하세요.',
            '**v0.33~v0.40 시리즈의 변경 사항(2026년 8~10월):** v0.33.0(8월 21일)은 Claude Desktop을 서드파티 게이트웨이로 사용할 수 있게 했고 KV 캐시 프리필 복원 지점의 안정성을 높였습니다. v0.34.0(9월 5일)은 ChatGPT Desktop에서 Ollama 모델을 쓸 수 있게 했고 Apple Silicon의 구조화 출력을 빠르게 했으며, v0.34.1(9월 14일)은 MLX safetensors 기반 `ollama create`의 실험 표시를 없앴습니다. v0.40.0(9월 25일)은 Apple Silicon에서 qwen3.8, gemma4, qwen3.6 같은 지원 아키텍처를 기본적으로 MLX로 실행합니다. v0.35.0(9월 28일)은 `/v1/systemone`을 통한 결정 모델(텍스트 대신 선택지·확률·점수를 반환하는 모델, 첫 모델은 Nimble과 Tev1)을 추가했고, v0.35.1(9월 29일)은 멀티모달 Clef 모델을 추가했습니다. v0.40.2(10월 8일)는 이전 모델을 백그라운드에서 업그레이드할 때 백업을 유지하고, v0.40.4(10월 12일)는 `ollama run <결정-모델> --ask`를 추가했으며, v0.40.5(10월 14일)는 NVIDIA Nemotron 3.5 Super 지원과 Clef 결정 모델의 클라우드 액세스를 추가했습니다. 전체 노트: github.com/ollama/ollama/releases.',
            '**지난 업데이트 이후 추가된 최신 모델(2026년 6월 말~7월):**',
          ],
          items: [
            '**Nemotron 3.5 Lightning, Super, Bolt**(NVIDIA, 2026년 8~10월) — Lightning(8월 11일)은 활성 파라미터 3B의 30B MoE로 단일 GPU에서 상시 실행되는 에이전트용이며, Super는 120B 비전-언어 MoE(활성 12B, 최대 100만 토큰 컨텍스트, 도구·사고 모드), Bolt는 Super를 74B(활성 9B)로 줄여 24GB NVIDIA GPU에 맞춘 모델입니다. 설치: `ollama pull nemotron-3.5-lightning`, `ollama run nemotron-3.5-super`, `ollama run nemotron-3.5-bolt`',
            '**Laguna XS 2.1**(Poolside, 2026년 7월 2일) — 33B 전체/3B 활성 MoE로, 에이전틱 코딩과 장시간 로컬 작업(계획, 코드 작성, 테스트 실행, 반복)을 위해 구축되었습니다. 256K 컨텍스트, OpenMDW-1.1 라이선스. SWE-bench Verified 70.9%, SWE-bench Multilingual 63.1%. Pull: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code**(Moonshot AI, 2026년 6월) — Kimi K2.6을 기반으로 한 코딩 특화 에이전틱 모델로, 장시간 코딩 세션을 특별히 겨냥합니다. Pull: `ollama pull kimi-k2.7-code:cloud` (cloud tag; local GGUF builds need 300+ GB)',
            '**DeepSeek V4 Pro**(DeepSeek, 2026년 4월 23일) — 알고리즘 코딩 특화 모델, 93.5% LiveCodeBench, MIT 라이선스. 경량 하드웨어용 보급형 모델 DeepSeek V4 Flash. Pull: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6**(Moonshot AI, 2026년 4월 20일) — 최전선 코딩 모델, SWE-Bench Pro 58.6, SWE-bench Verified 80.2%(GPT-5.5와 동점). MoE 아키텍처(32B 활성 / 1T 전체). Modified MIT 라이선스. Pull: `ollama pull kimi-k2.6:cloud` (cloud tag; local GGUF builds need 300+ GB)',
            '**Qwen3.8-27B**(Alibaba, 2026년 4월 16일) — 소비자 하드웨어 전반 최고, 61.7 SWE-bench Pro, Apache 2.0, Q4에서 24GB에 적합. 또한 Qwen3.6-35B-A3B(MoE, 73.4 SWE-bench)도 있습니다. Pull: `ollama pull qwen3.8:27b`',
            '**GLM-5.3**([Z.ai](https://Z.ai)) — 744B / 40B 활성 MoE, MIT 라이선스. 구조화된 코드 생성 분야 선두. Pull: `ollama pull glm-5.3`',
            '**gpt-oss**(OpenAI, 2026년) — 오픈 웨이트 MoE: gpt-oss:20b(21B 전체 / 3.6B 활성, 16GB에서 실행, ~o3-mini 수준, 조정 가능한 추론)와 gpt-oss:120b(80GB). Pull: `ollama pull gpt-oss:20b`',
            '**Gemma 4**(Google, 2026년 4월 2일) — 멀티모달 크기 E2B / E4B / E12B(26B MoE) / E27B(31B 밀집), 모두 비전과 도구 호출 지원. Apple Silicon에서 이제 약 90% 빨라졌습니다(2026년 7월 MLX 업데이트). E4B는 ~6GB VRAM에서 실행됩니다. Pull: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Ollama를 최신 버전으로 업데이트 (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# 또는 Mac에서: brew upgrade ollama\n\n# 현재 버전 확인\nollama --version  # 출력: ollama version 0.40.5\n\n# 2026년 7월 최신 모델 Pull\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'Ollama 버전 이력과 릴리스 타임라인은 어떻게 되나요?',
          content: '**Ollama는 2023년 7월 8일 첫 릴리스 v0.0.1을 공개했고 2026년 10월 14일 v0.40.5에 도달했습니다.** 표는 Ollama로 할 수 있는 일을 바꾼 릴리스를 정리한 것이며, 모든 태그와 전체 노트는 github.com/ollama/ollama/releases에 있습니다. 2026년 9월 하순에 버전 번호가 v0.35에서 v0.40으로 건너뛰어, GitHub에서는 v0.40.0(9월 25일)이 v0.35 릴리스(9월 28~29일)와 나란히 표시됩니다.',
          rows: [
            { '버전': 'v0.40.5', '출시일': '2026년 10월 14일', '주요 변경': 'Nemotron 3.5 Super, 클라우드 결정 모델' },
            { '버전': 'v0.40.0', '출시일': '2026년 9월 25일', '주요 변경': 'Apple Silicon 기본 MLX' },
            { '버전': 'v0.35.0', '출시일': '2026년 9월 28일', '주요 변경': '/v1/systemone 결정 모델' },
            { '버전': 'v0.34.0', '출시일': '2026년 9월 5일', '주요 변경': 'ChatGPT Desktop에서 Ollama 모델' },
            { '버전': 'v0.33.0', '출시일': '2026년 8월 21일', '주요 변경': 'Claude Desktop 게이트웨이, KV 복원' },
            { '버전': 'v0.32.0', '출시일': '2026년 7월 11일', '주요 변경': '"Chat, Code & Work" 에이전트' },
            { '버전': 'v0.0.1', '출시일': '2023년 7월 8일', '주요 변경': '첫 공개 릴리스' },
          ],
          columns: ['버전', '출시일', '주요 변경'],
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: '2026년 Ollama에서 가장 인기 있는 모델은 무엇입니까?',
          content: [
            '**Ollama에서의 인기는 각 모델의 라이브러리 페이지에 표시되는 다운로드 수로 측정됩니다.** 2026년 7월 기준, 다운로드 상위 모델은 여전히 Meta의 Llama 계열이 주도하고 있습니다 -- Llama 3.2 3B가 첫 설치 테스트 모델로 많이 사용되어 전체 다운로드 1위입니다. 그러나 Llama 4 Scout는 2026년 4월 출시 이후 빠르게 순위를 올리고 있습니다.',
            'Qwen3는 Ollama 라이브러리에서 가장 빠르게 성장하는 모델 계열로, Qwen3와 새로운 Qwen3.8 밀집 변형이 기존 Qwen3를 빠르게 대체하고 있습니다. DeepSeek-R1은 출시 이후 대규모 다운로드 급증을 기록했으며 추론 작업에서 높은 다운로드 수를 유지하고 있습니다. Dolphin 3.0(Cognitive Computations, Llama 3.1 기반)은 무필터 로컬 어시스턴트를 원하는 사용자를 위한 무검열 범용 모델 중 가장 많이 Pull된 모델로 남아 있습니다.',
            'Meta는 2026년 4월에 Scout(17B 활성, 109B 전체, MoE)와 Maverick(17B 활성, 400B 전체) 변형을 포함한 **Llama 4**를 출시했습니다. Llama 4 Scout는 이제 Ollama 라이브러리에서 안정적으로 사용 가능합니다(`ollama pull llama4:scout`). Llama 4 계열은 혼합 전문가(MoE) 아키텍처를 사용합니다 — 토큰당 17B 파라미터만 활성화되지만, 109B 전체 파라미터로 Scout는 Q4에서 ~55GB VRAM이 필요합니다(1.78비트에서만 24GB에 적합, ~20 tok/s). Scout의 핵심 특징은 소비자 하드웨어 적합성이 아니라 1,000만 토큰 컨텍스트 창과 멀티모달 입력입니다. 경량 설정(8GB RAM)에서는 Llama 3.2 3B가 여전히 가장 쉬운 첫 번째 모델입니다.',
            'Kimi K2.6(Moonshot AI, Modified MIT 라이선스, 32B 활성 / 1T 전체 MoE)은 SWE-Bench Pro 58.6을 달성하여 GPT-5.5와 동점을 기록했습니다. Laguna XS 2.1(Poolside)은 장시간 로컬 코딩 세션을 위해 구축된 가장 새로운 에이전틱 코딩 도전자입니다. Qwen3.8-27B는 소비자 하드웨어 전반 최고 모델로서 61.7 SWE-bench Pro를 달성했습니다(Q4에서 24GB에 적합). OpenAI의 오픈 웨이트 gpt-oss:20b(21B 전체 / 3.6B 활성 MoE)는 16GB에서 ~o3-mini 수준의 조정 가능한 추론으로 실행됩니다.',
            'Ollama 라이브러리는 수백 개의 큐레이팅된 모델을 보유하고 있으며, Laguna XS 2.1과 Kimi K2.7 Code가 6월 업데이트 이후 최신 추가 모델입니다.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: '사용 사례별로 가장 적합한 Ollama 모델은 무엇입니까?',
          content: '모델 출력 품질은 프롬프트 방식에 크게 의존합니다. 연쇄 사고, 퓨샷 예시, 출력 형식 지정 등 모든 로컬 모델에서 작동하는 구조화된 기법은 [프롬프트 엔지니어링 가이드](https://www.promptquorum.com/prompt-engineering)를 참조하십시오. 추론 작업에서는 [연쇄 사고 프롬프팅](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting)이 DeepSeek-R1 및 Qwen3 출력 품질을 크게 향상시킵니다. 이러한 모델의 양자화 트레이드오프를 이해하려면 [양자화 가이드 →](/ko/local-llms/llm-quantization-explained)를 참조하십시오. 각 모델에 필요한 VRAM 양을 확인하려면 [VRAM 요구 사항 가이드 →](/ko/local-llms/how-much-vram-local-llm)를 참조하십시오. Gemma 4를 사용한 에이전트 워크플로에 대해서는 [트리 오브 소트 및 ReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react)를 참조하십시오. 이러한 모델을 실행하기 위한 하드웨어 요구 사항은 [하드웨어 가이드 →](/ko/local-llms/local-llm-hardware-guide)를 참조하십시오. 이 목록의 도구 호출 모델이 파일 및 데이터베이스 액세스와 함께 다단계 루프에 연결되면 오픈소스 오케스트레이션 패턴에 대해 [MCP를 활용한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026)를 참조하십시오.',
          items: [
            '**일반 채팅(입문)**: `ollama run llama3.2:3b` -- 문서가 가장 많고 첫 번째 모델로 최적 지원.',
            '**일반 채팅(전반 최고)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro, 소비자 하드웨어 전반 최고, Q4에서 24GB에 적합. 균형잡힌 범용: `ollama run qwen3:30b`. 8GB 기기에서는 `ollama run llama3.2:3b`를 유지하십시오.',
            '**긴 컨텍스트 / 멀티모달**: `ollama run llama4:scout` -- 1,000만 토큰 컨텍스트 + 멀티모달, MoE(17B 활성/109B 전체). Q4에서 ~55GB VRAM 필요(1.78비트에서만 24GB에 적합, ~20 tok/s).',
            '**소형 최강 / 16GB**: `ollama run gpt-oss:20b` -- 21B 전체 / 3.6B 활성 MoE, ~o3-mini 수준, 조정 가능한 추론. 더 큰 모델: `ollama run gpt-oss:120b`(80GB).',
            '**8GB에서 코딩**: `ollama run qwen3:8b` -- 8GB VRAM 기기 최고 로컬 코딩 모델. 76% HumanEval, 5GB 사용, 다국어 지원.',
            '**8GB에서 일반 추론(코딩 외)**: `ollama run mistral:7b` -- 8GB에서 가장 빠른 범용 모델, 40~60 tok/sec.',
            '**코딩(최고 에이전트, 24B)**: `ollama run devstral-small-2` -- 최고 에이전트 코딩 모델(다중 파일 편집, 디버깅). 16GB RAM. Mistral AI 제공.',
            '**코딩(최고 밀집, 27B)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro. 최고 밀집 코딩 모델. 18 GB VRAM.',
            '**코딩(최전선 MoE)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6(GPT-5.5 동점), 최상위. MoE(32B 활성/1T 전체). Modified MIT 라이선스. 소비자 하드웨어에는 양자화 필요.',
            '**코딩(에이전틱, 장시간 작업)**: `ollama run laguna-xs-2.1` -- Poolside의 33B/3B 활성 MoE, SWE-bench Verified 70.9%, 256K 컨텍스트. 계획 → 코드 작성 → 테스트 → 반복의 다단계 루프용으로 구축. OpenMDW-1.1 라이선스.',
            '**에이전트 작업 및 도구 호출**: `ollama run gemma4:e4b` -- 2026년 4월 2일 출시. 내장 도구 호출 + 비전 지원. 로컬 에이전트, 함수 호출, 구조화된 출력에 권장. 6GB RAM.',
            '**추론 및 수학**: `ollama run deepseek-r1:7b` -- 연쇄 사고 모델, 7B에서 최고 로컬 수학 성능.',
            '**다국어**: `ollama run qwen3:8b` -- 29개 이상 언어 기본 지원, 가장 강력한 비영어 지원, 76% HumanEval.',
            '**러시아어 작업**: `ollama run qwen3:8b` 또는 `ollama run mistral-small3.1` -- 두 모델 모두 네이티브 다국어 학습 데이터에 러시아어를 포함합니다. Qwen3는 비영어 벤치마크에서 더 높은 점수를 기록하며, Mistral Small 3.1은 비공식 테스트에서 더 자연스러운 러시아어 대화 유창성을 보입니다.',
            '**무검열 / 범용**: `ollama run dolphin3` -- Dolphin 3.0(Cognitive Computations, Llama 3.1 기반), 내장 콘텐츠 필터링 없음, 일반 채팅/코딩/에이전틱 작업에 사용.',
            '**이미지 이해**: `ollama run gemma4:e4b` -- 비전 + 도구 호출(2026년 7월 기준 Apple Silicon에서 약 90% 빨라짐). 또는 전용 비전용 `ollama run llama3.2-vision:11b`.',
            '**빠르고 경량**: `ollama run gemma2:2b` -- 가장 빠른 CPU 추론, 1.7GB RAM.',
            '**고품질(16GB RAM)**: `ollama run mistral-small3.1` -- 14GB RAM에서 ~70B급 품질.',
            '**임베딩 생성**: `ollama run nomic-embed-text` -- RAG 파이프라인용 1억 3,700만 파라미터 임베딩 모델.',
            '**문서 Q&A(RAG)**: Open WebUI의 RAG 기능과 함께 `ollama run llama3.2` -- 가장 잘 지원되는 조합.',
            '**홈 자동화 / 웨이크 워드 AI**: `ollama run phi4-mini` — Phi-4 Mini(3.8B, ~3GB VRAM)는 독립 GPU 없이 미니 PC에서 20~25 tok/sec로 Home Assistant 음성 쿼리를 처리합니다. [Home Assistant + Ollama 통합 가이드 →](/ko/smart-home/home-assistant-ollama-integration) 참조.',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-ko.webp',
          imageCaption: '사용 사례별 Ollama 모델 선택: 채팅과 코딩에는 qwen3.8:27b(전반 최고, 61.7 SWE-bench Pro), 최전선 코딩에는 kimi-k2.6, 16GB에서는 gpt-oss:20b, 수학에는 deepseek-r1:7b.',
        },
        newApril2026: {
          id: 'new-may-2026',
          title: '신규 Ollama 모델 — 2026년 7월 릴리스',
          content: '2026년 7월 기준 Ollama 라이브러리의 최신 모델을 최신순으로 정리한 목록입니다. 워크플로를 구축하기 전에 `ollama pull <model>`로 가용성을 확인하십시오 — 새 모델은 출시 후 며칠 내에 ollama.com/library에 등장합니다.',
          rows: [
            { 'Model': '[nemotron-3.5-super](https://ollama.com/library/nemotron-3.5-super)', 'Released': '2026년 10월', 'Best For': 'NVIDIA — 비전-언어 MoE, 120B/활성 12B, 1M 컨텍스트, 도구', 'Ollama Command': 'ollama run nemotron-3.5-super' },
            { 'Model': '[nemotron-3.5-bolt](https://ollama.com/library/nemotron-3.5-bolt)', 'Released': '2026년 10월', 'Best For': 'NVIDIA — 24GB GPU용 74B/활성 9B MoE', 'Ollama Command': 'ollama run nemotron-3.5-bolt' },
            { 'Model': '[nemotron-3.5-lightning](https://ollama.com/library/nemotron-3.5-lightning)', 'Released': '2026년 8월 11일', 'Best For': 'NVIDIA — 상시 실행 에이전트용 30B/활성 3B MoE', 'Ollama Command': 'ollama run nemotron-3.5-lightning' },
            { 'Model': 'laguna-xs-2.1', 'Released': '2026년 7월 2일', 'Best For': 'Poolside — 에이전틱 코딩, 33B/3B 활성 MoE, SWE-bench Verified 70.9%, 256K 컨텍스트', 'Ollama Command': 'ollama run laguna-xs-2.1' },
            { 'Model': 'kimi-k2.7-code', 'Released': '2026년 6월', 'Best For': 'Moonshot AI — Kimi K2.6 기반 코딩 특화 에이전틱 모델', 'Ollama Command': 'ollama run kimi-k2.7-code:cloud' },
            { 'Model': 'deepseek-v4-pro', 'Released': '2026년 4월 23일', 'Best For': '알고리즘 코딩, 93.5% LiveCodeBench, MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': '2026년 4월 20일', 'Best For': '최전선 코딩(SWE-Bench Pro 58.6), MoE(32B/1T), Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6:cloud' },
            { 'Model': '[qwen3.8:27b](https://ollama.com/library/qwen3)', 'Released': '2026년 4월 16일', 'Best For': '소비자 하드웨어 전반 최고, 61.7 SWE-bench Pro, Q4에서 24GB 적합', 'Ollama Command': 'ollama run qwen3.8:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026년', 'Best For': '균형잡힌 범용; 코드 완성에는 qwen3-coder:30b', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026년', 'Best For': '소형 최강 / 16GB, ~o3-mini, 조정 가능한 추론(gpt-oss:120b도 있음)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.3', 'Released': 'Z.ai', 'Best For': '744B/40B 활성 MoE, MIT 라이선스', 'Ollama Command': 'ollama run glm-5.3' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': '2026년 4월 2일', 'Best For': '비전 + 도구 호출(E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': '2026년 4~5월', 'Best For': '저비용 코딩(실세계 78/100)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:8b](https://ollama.com/library/qwen3)', 'Released': '2026년', 'Best For': '7B에서 HumanEval 76%, 다국어', 'Ollama Command': 'ollama run qwen3:8b' },
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
          content: '2026년 7월 기준, Ollama에서 이미지 입력(멀티모달)을 지원하는 모델은 다음과 같습니다: Gemma 4는 비전과 도구 호출을 모두 지원합니다 — Ollama의 비전 모델 중 유일하며, 7월 MLX 업데이트 이후 Apple Silicon에서 거의 90% 더 빠르게 실행됩니다.',
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
          content: '튜토리얼이 많아 Llama 3.x의 다운로드 수는 여전히 높습니다. 2026년 7월 신규 프로젝트에는 Qwen3.8-27B(소비자 하드웨어 전반 최고), Kimi K2.6 또는 Laguna XS 2.1(코딩), gpt-oss:20b, qwen3:30b를 권장합니다.',
          rows: [
            { '#': '1', 'Model': '[Qwen3.8-27B](https://ollama.com/library/qwen3)', 'Best For': '소비자 하드웨어 전반 최고', 'RAM': '24GB (Q4)', 'HumanEval': '61.7 SWE-bench Pro' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': '최전선 코딩, MoE(32B/1T), Modified MIT', 'RAM': '양자화', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': '소형 최강 / 16GB, 조정 가능한 추론', 'RAM': '16GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': '균형잡힌 범용; 코드에는 qwen3-coder:30b', 'RAM': '~18GB', 'HumanEval': '강력' },
            { '#': '5', 'Model': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Best For': '에이전틱 코딩, 장시간 작업(계획/코드/테스트/반복)', 'RAM': '양자화', 'HumanEval': '70.9% SWE-bench Verified' },
            { '#': '6', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral-small-2)', 'Best For': '에이전트 코딩(다중 파일)', 'RAM': '16GB', 'HumanEval': '65.8% (Verified)' },
            { '#': '7', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': '추론, 수학', 'RAM': '5GB', 'MATH': '52%' },
            { '#': '8', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': '비전 + 도구 호출(멀티모달)', 'RAM': '~6GB', 'Notes': '에이전트 지원' },
            { '#': '9', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': '긴 컨텍스트 10M + 멀티모달, MoE', 'RAM': '~55GB (Q4)', 'HumanEval': '85%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': '첫 번째 모델, 일반 채팅', 'RAM': '2.5GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-ko.webp',
          imageCaption: '2026년 7월 상위 Ollama 모델: Qwen3.8-27B(전반 최고, Q4에서 24GB), Kimi K2.6, Laguna XS 2.1(에이전틱 코딩), gpt-oss:20b. 1,000만 토큰 컨텍스트에는 Llama 4 Scout(~55GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'Ollama 모델 라이브러리를 어떻게 탐색합니까?',
          content: 'Ollama 모델을 활용하는 두 가지 방법이 있습니다. **설치된 모델 전환:** Ollama Mac 앱에서 채팅 입력창 하단의 모델 드롭다운 버튼(현재 모델 이름 표시, 예: "gemma3:1b")을 클릭하여 로컬에 설치된 모델 간에 전환합니다. **새 모델 찾기 및 다운로드:** ollama.com/library를 방문하여 카테고리별로 수백 개의 큐레이팅된 모델을 탐색한 후, 아래 CLI 명령을 사용하여 모델을 Pull하고 관리합니다.',
          codeBlock: '# 로컬에 다운로드된 모든 모델 목록\nollama list\n\n# 모델 검색 및 Pull\nollama pull qwen2.5-coder:32b\n\n# 모델의 모든 사용 가능한 태그 확인\nollama show qwen2.5\n\n# 디스크 공간 확보를 위해 모델 제거\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: '오픈소스 Ollama 모델: 지역별 맥락',
          content: [
            '**EU / GDPR + 라이선스 준수.** 프로덕션에서 Ollama 모델을 배포하는 EU 조직에게는 라이선스 선택이 성능만큼 중요합니다. Apache 2.0(완전 개방, 상업적 사용 가능): Mistral Small, Mistral Small 3.1, Qwen3 8B, Qwen3.8-27B, Devstral Small 2, Granite 4.2. Meta Llama 커뮤니티 라이선스(월간 활성 사용자 7억 명 초과 시 상업적 사용 제한): Llama 3.1 8B, Llama 3.2 3B, Llama 3.2 Vision 11B. MIT(상업적 사용 가능): DeepSeek-R1 7B·14B. 수정 MIT(저작자 표시 조항과 함께 상업적 사용 가능): Kimi K2.6. OpenMDW-1.1(허용적, 상업적 사용 가능): Laguna XS 2.1. 상업 배포 전에는 항상 라이선스 조건을 확인하세요. 규제 산업의 EU 기업에는 Devstral Small 2 같은 Mistral 모델(프랑스, Apache 2.0)이 합리적인 기본 선택입니다. EU 출신이며 허용적인 라이선스이기 때문입니다. Ollama로 모델을 완전히 온프레미스에서 실행하면 프롬프트가 외부 서버로 전송되지 않습니다. 이는 GDPR 의무 이행을 돕지만 그것만으로 충족되지는 않습니다(`:cloud` 태그는 Ollama의 호스팅 서비스로 데이터를 보냅니다).',
            '**일본(METI).** 일본 기업의 Ollama 배포에는 Qwen3 / Qwen3.8이 권장할 만한 모델 계열입니다. 일본어 텍스트를 네이티브로 처리해 추론 시간과 KV 캐시에 도움이 됩니다. 일본어 코딩 워크플로에서는 Qwen3.8-27B(Qwen 발표 SWE-bench Pro 61.7)가 일본어 코드 주석을 네이티브로 처리합니다. METI AI 거버넌스 문서는 보통 정확한 모델 버전을 요구합니다. `ollama show <모델>`로 파라미터 수, 양자화 수준, 컨텍스트 길이를 포함한 전체 사양을 규정 준수 기록용으로 얻을 수 있습니다.',
            '**중국.** 중국 CAC 생성형 AI 관리 조치(2023)에 따라 최종 사용자에게 AI 서비스를 제공하는 조직은 사용하는 모델을 등록해야 합니다. Qwen3 / Qwen3.8(Alibaba, Apache 2.0)은 중국 기업의 Ollama 배포에 자연스러운 선택입니다. 중국 출신 모델, Apache 2.0 라이선스, 뛰어난 중국어 성능 때문입니다. Kimi K2.6(Moonshot AI, 수정 MIT)도 중국 출신이지만 Ollama에서는 클라우드 태그로만 제공되며 로컬 실행에는 서버급 하드웨어가 필요합니다. 명령: 최고 품질은 `ollama run qwen3.8:27b`, 속도는 `ollama run qwen3:8b`. 추론에는 DeepSeek-R1(MIT 라이선스)이 적합합니다. Ollama로 로컬에서 처리하는 데이터의 경우 추론 자체가 PIPL의 국외 이전 요건을 발생시키지는 않지만, 자체 규정 준수 의무는 확인하세요.',
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
            '[Ollama 비전 모델(2026)](/ko/power-local-llm/ollama-vision-models-review) -- Ollama로 이미지 지원 모델을 실행하는 실용 가이드, 실제 CLI/API 문법 포함.',
            '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) -- Ollama를 설정하고 이 목록에서 첫 번째 모델을 5분 이내에 Pull하는 방법',
            '[2026년 최고 로컬 LLM](/ko/local-llms/best-local-llms-2026) -- 70B 티어를 포함한 모든 오픈 웨이트 모델의 전체 벤치마크 순위',
            '[코딩 최고 로컬 LLM](/ko/local-llms/best-local-llms-for-coding) -- Qwen3.8 / Qwen2.5-Coder 32B, DeepSeek-Coder, Starcoder2의 심층 비교',
            '[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) -- 이 목록의 모델에 대해 Q4_K_M과 Q8_0 중 선택하는 방법',
            '[Ollama vs LM Studio](/ko/local-llms/ollama-vs-lm-studio) -- 워크플로에 따라 이러한 모델 실행에 사용할 도구',
            '[최고 로컬 LLM 프론트엔드](/ko/local-llms/best-local-llm-frontends) -- 이 목록의 모든 모델에 연결되는 Open WebUI, Jan AI 및 기타 인터페이스',
          '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) -- Ollama 가용 날짜가 포함된 올해 모든 주요 오픈 웨이트 출시 완전한 타임라인.',
        ],
        },
        nextSteps: {
          id: 'next-steps',
          title: '다음 단계',
          items: [
            '[코딩용 최고 로컬 LLM](/ko/local-llms/best-local-llms-for-coding) — 코딩에 최적화된 Ollama 모델 →',
            '[CPU 전용 최고 LLM](/ko/local-llms/best-cpu-only-llm) — GPU 없나요? 여기서 시작 →',
            '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 내 PC가 이 모델들을 실행할 수 있는지 확인 →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'Ollama 오픈소스 모델에 관한 자주 묻는 질문',
          faqs: [
            {
              q: '최신 Ollama 버전은 무엇입니까?',
              a: '최신 안정 버전은 v0.40.5이며 2026년 10월 14일에 출시되었습니다. 10월 16일에 v0.40.6 프리릴리스가 뒤이어 나왔지만 아직 안정 버전으로 표시되지 않았습니다. ollama.com/download에서 내려받거나 Linux에서는 `curl https://ollama.ai/install.sh | sh`, macOS에서는 `brew upgrade ollama`로 업데이트하세요.',
            },
            {
              q: 'Ollama 변경 이력과 릴리스 노트는 어디에서 볼 수 있습니까?',
              a: '모든 버전의 릴리스 노트는 github.com/ollama/ollama/releases에 있으며 태그별 날짜와 변경 이력이 정리되어 있습니다. 가장 최근 안정 버전 항목은 v0.40.5(2026년 10월 14일 -- NVIDIA Nemotron 3.5 Super 지원, 결정 모델 클라우드 액세스), v0.40.4(10월 12일 -- `ollama run --ask`로 결정 모델 사용, 더 빠른 로딩), v0.40.0(9월 25일 -- Apple Silicon에서 기본 MLX)입니다.',
            },
            {
              q: '설치된 Ollama 버전은 어떻게 확인합니까?',
              a: '터미널에서 `ollama --version`을 실행하십시오. `ollama version 0.40.5`과 같은 줄이 출력됩니다. 번호가 현재 릴리스보다 낮으면 `curl https://ollama.ai/install.sh | sh`(Linux) 또는 `brew upgrade ollama`(macOS)로 업데이트한 뒤 `ollama --version`을 다시 실행해 확인하십시오.',
            },
            {
              q: 'Ollama는 언제 처음 출시되었나요?',
              a: 'Ollama의 첫 릴리스 v0.0.1은 저장소가 만들어진 2023년 6월 26일 직후인 2023년 7월 8일 GitHub에 공개되었습니다. 2026년 10월 현재 v0.40.5까지 왔습니다. 전체 릴리스 목록은 github.com/ollama/ollama/releases에서 볼 수 있습니다.',
            },
            {
              q: 'Ollama 라이브러리에는 몇 개의 모델이 있습니까?',
              a: 'Ollama 라이브러리에는 공식 지원을 받는 수백 개의 큐레이팅된 모델이 있으며, 새로운 오픈 웨이트 릴리스가 나올 때마다 매주 늘어나고 있습니다. Hugging Face에는 커스텀 Modelfile을 통해 Ollama로 로드할 수 있는 수천 개의 추가 GGUF 모델이 있습니다.',
            },
            {
              q: 'Ollama를 개발한 회사의 공식 명칭은 무엇입니까?',
              a: '이 회사는 Ollama Inc.로, 캘리포니아주 팔로알토에 본사를 둔 시리즈 B 투자 유치 스타트업이며, 2023년 Jeffrey Morgan과 Michael Chiang이 설립했습니다. "Ollama"는 이 회사와 회사가 배포하는 CLI 도구/모델 런타임을 모두 가리킵니다.',
            },
            {
              q: 'Hugging Face 모델을 Ollama에서 직접 사용할 수 있습니까?',
              a: '예. Hugging Face에서 GGUF 파일을 다운로드하고 Modelfile을 생성하십시오: `FROM ./model.gguf`. 그런 다음 `ollama create mymodel -f Modelfile`을 실행합니다. 이는 공식 Ollama 라이브러리에 없는 파인튜닝 모델 및 모델을 포함하여 모든 GGUF 파일에서 작동합니다.',
            },
            {
              q: '로컬 챗봇 구축에 가장 적합한 Ollama 모델은 무엇입니까?',
              a: '범용 로컬 챗봇: `qwen3.8:27b`(소비자 하드웨어 전반 최고, Q4에서 24GB에 적합), 또는 8GB RAM에서는 `llama3.2:3b`(가장 쉬운 시작점). 16GB 기기: `gpt-oss:20b`(~o3-mini 수준) 또는 `mistral-small3.1`. 코딩 어시스턴트 챗봇: `qwen3.8:27b`(61.7 SWE-bench Pro), `devstral-small-2`(최전선 MoE), 또는 `laguna-xs-2.1`(에이전틱, 장시간 작업). localhost:11434의 Ollama API에 연결되는 웹 기반 인터페이스인 Open WebUI와 함께 사용하십시오.',
            },
            {
              q: '모든 Ollama 모델이 진정한 오픈소스입니까?',
              a: '그렇지 않습니다. Ollama 라이브러리에는 다양한 라이선스의 모델이 포함되어 있습니다. Llama 3.x/4.x는 Meta Llama Community Licence를 사용합니다(OSI 승인 오픈소스 아님 -- 월간 활성 사용자 7억 명 초과 시 상업적 이용 제한). Mistral Small, Qwen3, Qwen3.8, Devstral, Gemma 모델은 Apache 2.0(완전 오픈소스)입니다. Kimi K2.6은 Modified MIT 라이선스(귀속 조항이 있는 상업적 이용 허용)입니다. Laguna XS 2.1은 OpenMDW-1.1을 사용합니다(관대한 라이선스, 상업적 이용 허용, OSI 승인 아님). 상업적 배포 전에 항상 라이선스를 확인하십시오.',
            },
            {
              q: 'Ollama에서 어떤 Dolphin 모델을 사용해야 하나요?',
              a: '오래된 `dolphin-mistral`(2024년 마지막 업데이트, Mistral 0.2 기반) 대신 Dolphin 3.0(`ollama pull dolphin3`)을 사용하십시오. Cognitive Computations(Eric Hartford)가 유지 관리하는 Dolphin 3.0은 Llama 3.1을 기반으로 하며, 내장 콘텐츠 필터링이 없고, 코딩·수학·에이전틱 작업·무제한 채팅용 범용 로컬 모델로 설계되었습니다.',
            },
            {
              q: 'RAG를 위해 Ollama에서 사용해야 하는 임베딩 모델은 무엇입니까?',
              a: '`nomic-embed-text`가 표준 선택입니다 -- 768차원 임베딩을 생성하고, 문서당 밀리초 단위로 실행되며, 검색 작업에 특화된 1억 3,700만 파라미터 모델입니다. `ollama pull nomic-embed-text`로 Pull하십시오. Open WebUI의 내장 RAG, LangChain의 OllamaEmbeddings, 또는 LlamaIndex와 함께 사용하십시오.',
            },
            {
              q: 'Ollama 라이브러리는 얼마나 자주 새 모델로 업데이트됩니까?',
              a: 'Ollama 팀은 주요 릴리스 후 며칠에서 몇 주 내에 새 모델을 추가합니다. Laguna XS 2.1(2026년 7월 2일), Kimi K2.7 Code, Kimi K2.6, Qwen 3.6은 모두 출시 후 며칠 내에 등장했습니다. 현재 Ollama 버전은 v0.40.5 (2026년 10월 14일)입니다. 새 모델 발표를 위해 Ollama GitHub 저장소([github.com/ollama/ollama](https://github.com/ollama/ollama)) 또는 Ollama Twitter/X 계정을 팔로우하십시오.',
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
            {
              q: '2026년 7월 Ollama의 최신 신규 모델은 무엇입니까?',
              a: '최신 추가 모델은 Laguna XS 2.1(Poolside, OpenMDW-1.1 -- 에이전틱 장시간 코딩, SWE-bench Verified 70.9%, 33B/3B 활성 MoE)과 Kimi K2.7 Code(Moonshot AI -- Kimi K2.6 기반 코딩 특화 에이전틱 모델)입니다. 두 모델 모두 기존 7월 라인업에 합류합니다: Kimi K2.6(Modified MIT, 최전선 MoE 코딩, SWE-Bench Pro 58.6), Qwen3.8-27B(소비자 하드웨어 전반 최고, 61.7 SWE-bench Pro), GLM-5.3(744B/40B 활성 MoE, MIT, SWE-Bench Pro 58.4), gpt-oss:20b(소형 최강 / 16GB, ~o3-mini). Pull 명령: ollama run laguna-xs-2.1, ollama run kimi-k2.7-code:cloud, ollama run qwen3.8:27b, ollama run kimi-k2.6:cloud.',
            },
            {
              q: '러시아어 작업에 가장 적합한 Ollama 모델은 무엇입니까?',
              a: 'Qwen3 / Qwen3.8(`ollama run qwen3:8b` 또는 `ollama run qwen3.8:27b`)과 Mistral Small 3.1(`ollama run mistral-small3.1`) 모두 네이티브 다국어 학습 데이터에 러시아어를 포함합니다. Qwen3는 비영어 벤치마크 작업에서 더 높은 점수를 기록하며, Mistral Small 3.1은 비공식 테스트에서 더 자연스러운 러시아어 대화 유창성을 보입니다. 두 모델 모두 러시아 출신은 아닙니다 -- 러시아에 특화된 규제상 데이터 거주 요건이 있는 경우, 모델 라이선스와 조직의 컴플라이언스 요구 사항을 별도로 확인하십시오. 이 문서는 러시아 데이터 현지화 법률을 다루지 않습니다.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- Llama 4 Scout(17B 활성, 109B 전체, MoE)와 Maverick 변형의 공식 사양.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- DeepSeek-R1의 연쇄 사고 아키텍처와 MATH 벤치마크(52%).',
            '[Ollama. (2026). "qwen3.8." ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8) -- 최고 밀집 코딩 모델로서 61.7 SWE-bench Pro.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- Modified MIT 라이선스 MoE 코딩 모델(32B 활성/1T 전체), SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- 다중 파일 편집 및 디버깅을 위한 최고 에이전트 코딩 모델.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- 수백 개의 큐레이팅된 모델, 다운로드 수, 태그, 양자화 옵션이 있는 공식 모델 라이브러리.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- 2026년 4월 출시된 비전 + 도구 호출 기능.',
            '[Poolside. (2026). "Introducing Laguna XS 2.1." poolside.ai](https://poolside.ai/blog/introducing-laguna-xs-2-1) -- 33B/3B 활성 MoE 에이전틱 코딩 모델, SWE-bench Verified 70.9%, OpenMDW-1.1 라이선스.',
            '[Ollama. (2026). "Ollama Releases." github.com/ollama/ollama/releases](https://github.com/ollama/ollama/releases) -- 공식 릴리스 노트, v0.40.5 (2026년 10월 14일).',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ollama 최고 오픈소스 모델 2026년 7월: Top 10 순위',
        'description': 'Ollama를 통해 이용 가능한 다운로드 수 및 성능 기준 상위 오픈소스 모델',
        'numberOfItems': 10,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen3.8-27B', 'url': 'https://ollama.com/library/qwen3', 'description': '소비자 하드웨어 전반 최고. 61.7 SWE-bench Pro. Q4에서 24GB에 적합. ollama run qwen3.8:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://huggingface.co/moonshotai', 'description': '최전선 MoE 코딩 모델. SWE-Bench Pro 58.6(GPT-5.5와 동점). 32B 활성/1T 전체. Modified MIT 라이선스. ollama run kimi-k2.6:cloud' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': '소형 최강 / 16GB. 21B 전체/3.6B 활성 MoE. ~o3-mini 수준, 조정 가능한 추론. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': '균형잡힌 범용 모델; 코드 완성에는 qwen3-coder:30b. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'url': 'https://ollama.com/library/laguna-xs-2.1', 'description': '에이전틱, 장시간 코딩. 33B/3B 활성 MoE. SWE-bench Verified 70.9%. OpenMDW-1.1 라이선스. ollama run laguna-xs-2.1' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral', 'description': '최고 에이전트 코딩(다중 파일). 다중 파일 편집, 디버깅. 16GB RAM. ollama run devstral-small-2' },
          { '@type': 'ListItem', 'position': 7, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': '추론 최고. 5GB RAM. MATH 52% (Mistral Small은 28%). ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 8, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma3', 'description': '비전/멀티모달 최고(E4B+). 도구 호출 + 비전, Apple Silicon에서 약 90% 더 빠름(2026년 7월). ~6GB RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama3.3', 'description': '긴 컨텍스트(1,000만 토큰) + 대형 멀티모달 최고. MoE 17B 활성/109B 전체. Q4에서 ~55GB. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Llama 3.2 3B', 'url': 'https://ollama.com/library/llama3.3', 'description': '첫 번째 모델로 최적. 2.5GB RAM. 일반 채팅. ollama run llama3.2:3b' },
        ],
      },
    },
  ar: {
      freshness_tier: 'monthly',
      next_seo_review_due: '2026-11-17',
      next_refresh_due: '2026-11-17',
      last_full_refresh: '2026-10-17',
      current_models_mentioned: ['Nemotron 3.5 Lightning', 'Nemotron 3.5 Super', 'Nemotron 3.5 Bolt', 'Laguna XS 2.1', 'Kimi K2.7 Code', 'Qwen3.8-27B', 'qwen3:30b', 'qwen3-coder:30b', 'Kimi K2.6', 'gpt-oss:20b', 'gpt-oss:120b', 'DeepSeek-R1', 'Gemma 4', 'GLM-5.3', 'Llama 4 Scout', 'Devstral Small 24B', 'Dolphin 3.0', 'Mistral Small', 'Phi-4 Mini'],
      current_benchmarks_used: ['SWE-bench', 'SWE-bench Verified', 'SWE-Bench Pro', 'SWE-bench Multilingual', 'HumanEval', 'MATH'],
      theme: 'Best Models',
      title: 'أحدث إصدار من Ollama 2026: v0.40.5 + أفضل النماذج حسب حالة الاستخدام',
      seoTitle: 'أحدث إصدار من Ollama 2026: v0.40.5 + أفضل 10 نماذج',
      intro: 'الإصدار المستقر الحالي من Ollama هو v0.40.5 (14 أكتوبر 2026)، ويضيف NVIDIA Nemotron 3.5 Super وBolt ودعم نماذج القرار ومحركَي llama.cpp وMLX المحدَّثين؛ أما v0.40.6 فهو إصدار تمهيدي. منذ v0.33.1 في أغسطس، جعلت Ollama محرك MLX هو الافتراضي على Apple Silicon (v0.40.0) وأضافت تكامل ChatGPT Desktop (v0.34.0). يبقى الأفضل عموماً على العتاد الاستهلاكي هو Qwen3.8-27B (61.7 في SWE-bench Pro بحسب Qwen، تنزيل 18 GB، يتسع في بطاقة 24 GB أو جهاز Mac بذاكرة 32 GB)؛ أما الأفضل للبرمجة فيعتمد على إعدادك — راجع التفصيل حسب حالة الاستخدام أدناه.',
      metaDescription: 'أحدث إصدار من Ollama هو v0.40.5. اطّلع على ما تغيّر منذ v0.33 وأحدث النماذج (Nemotron 3.5 وGLM-5.3 وGranite 4.2) وأفضل نموذج للمحادثة والبرمجة والرؤية.',
      heroImage: '/images/top-open-source-models-ollama-use-case-picks-hero-ar.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**الإصدار المستقر الحالي من Ollama هو v0.40.5 (14 أكتوبر 2026)؛ وv0.40.6 (16 أكتوبر) إصدار تمهيدي. أحدث النماذج المضافة هي NVIDIA Nemotron 3.5 Super (بحجم 120B، رؤية-لغة) وBolt (MoE بإجمالي 74B ونشط 9B، 25 GB) في v0.40.5، إضافة إلى Nemotron 3.5 Lightning (MoE بحجم 30B ونشط 3B) للوكلاء العاملين دائماً. الأفضل عموماً على العتاد الاستهلاكي هو Qwen3.8-27B (61.7 في SWE-bench Pro بحسب Qwen، 18 GB، يتسع في بطاقة 24 GB). اختيارات أخرى: Devstral Small 2 وLaguna XS 2.1 (برمجة وكيلية محلية؛ Kimi K2.6 بحجم النماذج الرائدة لكنه سحابي فقط في Ollama)، وgpt-oss:20b (الأفضل صغيراً / 16 GB)، وqwen3:30b (متوازن)، وDeepSeek-R1 (استدلال)، وGemma 4 (رؤية/استدعاء أدوات، وصار متوفراً أيضاً بحجمي 12B و31B)، وGranite 4.2 (من IBM، Apache 2.0، بأحجام 3B/8B/30B)، وDolphin 3.0 (عام بلا رقابة)، وLlama 4 Scout (سياق طويل 10M / متعدد الوسائط). ويبقى الأكثر تنزيلاً هو عائلة Llama.**',
      quickAnswerTop: {
        ar: {
          question: 'ما أحدث إصدار من Ollama وأفضل النماذج في 2026؟',
          answer: 'أحدث إصدار مستقر من Ollama هو v0.40.5 (14 أكتوبر 2026)؛ وv0.40.6 إصدار تمهيدي. أحدث النماذج المضافة هي NVIDIA Nemotron 3.5 Super وBolt، إضافة إلى Nemotron 3.5 Lightning للوكلاء العاملين دائماً. أفضل نماذج المصدر المفتوح لـ Ollama في 2026 هي Qwen3.8-27B (الأفضل عموماً على العتاد الاستهلاكي، 18 GB)، وDevstral Small 2 وLaguna XS 2.1 (أفضل برمجة وكيلية محلية؛ Kimi K2.6 سحابي فقط في Ollama)، وgpt-oss:20b (الأفضل صغيراً / 16 GB، استدلال قابل للضبط)، وqwen3:30b (متوازن)، وGemma 4 (رؤية + استدعاء أدوات)، وLlama 4 Scout (الأفضل للسياق الطويل 10M / متعدد الوسائط)، وDolphin 3.0 (الأفضل للاستخدام العام بلا رقابة)، وDeepSeek-R1 (الأفضل للاستدلال). ثبّت أيّاً منها بالأمر: ollama pull <اسم-النموذج>',
          bullets: [
            '→أحدث إصدار: Ollama v0.40.5 (14 أكتوبر 2026) — Nemotron 3.5 Super وBolt، ونماذج القرار، وllama.cpp وMLX المحدَّثان. v0.40.6 إصدار تمهيدي',
            '→منذ v0.33: MLX هو المحرك الافتراضي على Apple Silicon (v0.40.0)، ونماذج Ollama في ChatGPT Desktop (v0.34.0)، وترقية النماذج في الخلفية (v0.40.2)',
            '→Qwen3.8-27B — الأفضل عموماً على العتاد الاستهلاكي، 61.7 في SWE-bench Pro (بحسب Qwen)، تنزيل 18 GB',
            '→Devstral Small 2 (15 GB) وLaguna XS 2.1 (20 GB) — برمجة وكيلية محلية؛ أما Kimi K2.6 وK2.7 Code فوسمان سحابيان فقط',
            '→gpt-oss:20b — الأفضل صغيراً، يعمل في 16 GB، بمستوى ~o3-mini، استدلال قابل للضبط',
            '→Nemotron 3.5 Lightning — MoE بحجم 30B ونشط 3B، سياق 1M، للوكلاء العاملين دائماً',
            '→qwen3:30b — نموذج متوازن شامل؛ وqwen3-coder:30b لإكمال الكود',
            '→Llama 4 Scout — سياق طويل (10M رمز) + متعدد الوسائط، نحو 55 GB بتكميم Q4',
            '→DeepSeek-R1 — الأفضل للاستدلال والرياضيات؛ وgpt-oss:20b لاستدلال قابل للضبط (أصدرت DeepSeek لاحقاً DeepSeek-V4 — Flash/Pro — كجيل مفتوح الأوزان أحدث؛ ويبقى R1/V3 صالحَين للتشغيل محلياً.)',
          ],
          updatedDate: '2026-10-17',
        },
      },
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على عتاد المستهلك',
      readTime: '9 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'نماذج مفتوحة المصدر Ollama',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'سجل الإصدارات', anchor: '#ollama-version-history' },
        { label: 'أكثر النماذج شيوعًا على Ollama', anchor: '#most-popular-models-on-ollama' },
        { label: 'أفضل النماذج حسب حالة الاستخدام', anchor: '#top-models-by-category' },
        { label: 'الجديد في يوليو 2026', anchor: '#new-july-2026' },
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
          snippetBlocks: [
            { type: 'one-sentence', text: 'أفضل نموذج Ollama في 2026 هو Qwen3.8-27B (61.7 في SWE-bench Pro بحسب Qwen، 18 GB)؛ وأفضل الخيارات المحلية للبرمجة هي Qwen3.8-27B وDevstral Small 2 وLaguna XS 2.1 (Kimi K2.6 سحابي فقط في Ollama).' },
            { type: 'plain-terms', text: 'Ollama أداة مجانية تتيح لك تشغيل نماذج الذكاء الاصطناعي على حاسوبك الخاص -- دون الحاجة إلى إنترنت أو مفتاح API. هذه أفضل النماذج التي يمكنك تنزيلها بأمر واحد، منظّمة حسب ما تحتاجه فعليًا.' },
          ],
          items: [
            '**الأفضل عموماً على العتاد الاستهلاكي**: Qwen3.8-27B (61.7 في SWE-bench Pro بحسب Qwen، تنزيل 18 GB، يتسع في بطاقة 24 GB). المتوازن الشامل: qwen3:30b.',
            '**الأكثر تنزيلاً**: Llama 3.2 3B (للدروس التعليمية) وعائلة Llama -- أوسع دعم للأدوات.',
            '**الأفضل للاستدلال**: DeepSeek-R1 (سلسلة التفكير) وgpt-oss:20b (استدلال قابل للضبط، بمستوى ~o3-mini).',
            '**الأفضل للبرمجة**: Qwen3.8-27B (الأفضل بين النماذج الكثيفة)، وLaguna XS 2.1 (وكيلي، طويل الأمد)، وDevstral Small 2 (أفضل وكيلي بحجم 24B)، وqwen3-coder:30b (للإكمال)؛ أما Kimi K2.6 فبحجم النماذج الرائدة لكنه سحابي فقط في Ollama -- أعلى نتائج معلنة لأحجامها.',
            '**الأفضل صغيراً / 16 GB**: gpt-oss:20b. **الأفضل للرؤية/متعدد الوسائط**: Gemma 4 (E4B فأعلى). **الأفضل للسياق الطويل (10M) / متعدد الوسائط الكبير**: Llama 4 Scout (نحو 55 GB). **الأفضل للاستخدام العام بلا رقابة**: Dolphin 3.0. **الوكلاء العاملون دائماً**: Nemotron 3.5 Lightning.',
            'تضم مكتبة Ollama مئات النماذج المنتقاة (وآلاف أخرى عبر ملفات GGUF Modelfile مخصصة). جميعها متاحة عبر `ollama pull <الاسم>`.',
          ],
        },
        whatsNew: {
          id: 'whats-new-ollama-july-2026',
          title: 'الجديد في Ollama — تحديث يوليو 2026',
          content: [
            '**إصدار Ollama الحالي: v0.40.5** (صدر في 14 أكتوبر 2026). هذا هو أحدث إصدار مستقر ويتوفر عبر ollama.com/download. ظهر إصدار تجريبي v0.40.6 في 16 أكتوبر لكنه لم يُصنَّف مستقرًا بعد. حدّث باستخدام `curl https://ollama.ai/install.sh | sh` (على macOS: `brew upgrade ollama`) ثم تحقق عبر `ollama --version`.',
            '**ما الذي تغيّر في سلسلة v0.33–v0.40 (أغسطس–أكتوبر 2026):** فعّل v0.33.0 (21 أغسطس) استخدام Claude Desktop كبوابة طرف ثالث وجعل نقاط استعادة التعبئة المسبقة لذاكرة KV أكثر موثوقية. وسمح v0.34.0 (5 سبتمبر) باستخدام نماذج Ollama في ChatGPT Desktop وسرّع المخرجات المنظَّمة على Apple Silicon؛ وأزال v0.34.1 (14 سبتمبر) صفة التجريبي عن `ollama create` مع MLX safetensors. ويشغّل v0.40.0 (25 سبتمبر) البنى المدعومة مثل qwen3.8 وgemma4 وqwen3.6 افتراضيًا عبر MLX على Apple Silicon. وأضاف v0.35.0 (28 سبتمبر) نماذج القرار عبر `/v1/systemone` — نماذج تعيد خيارات واحتمالات ودرجات بدل النص، بدءًا بـ Nimble وTev1 — وأضاف v0.35.1 (29 سبتمبر) نماذج Clef متعددة الوسائط. ويحتفظ v0.40.2 (8 أكتوبر) بنسخ احتياطية عند ترقية النماذج القديمة في الخلفية، وأضاف v0.40.4 (12 أكتوبر) الأمر `ollama run <نموذج-قرار> --ask`، وأضاف v0.40.5 (14 أكتوبر) دعم NVIDIA Nemotron 3.5 Super والوصول السحابي إلى نماذج القرار Clef. الملاحظات الكاملة: github.com/ollama/ollama/releases.',
            '**أحدث النماذج المضافة منذ آخر تحديث (أواخر يونيو–يوليو 2026):**',
          ],
          items: [
            '**Nemotron 3.5 Lightning وSuper وBolt** (NVIDIA، أغسطس–أكتوبر 2026) — Lightning (11 أغسطس) نموذج MoE بحجم 30B وبنشاط 3B للوكلاء العاملين دائمًا على وحدة GPU واحدة؛ وSuper نموذج MoE للرؤية واللغة بحجم 120B (نشاط 12B، سياق حتى مليون رمز، أدوات ووضع تفكير)؛ وBolt يختزل Super إلى 74B (نشاط 9B) ليناسب وحدة NVIDIA بسعة 24 جيجابايت. التنزيل: `ollama pull nemotron-3.5-lightning` و`ollama run nemotron-3.5-super` و`ollama run nemotron-3.5-bolt`',
            '**Laguna XS 2.1** (من Poolside، 2 يوليو 2026) — MoE بحجم 33B إجمالي/3B نشط، مصمّم للبرمجة الوكيلة والعمل المحلي طويل الأفق: التخطيط وكتابة الشيفرة وتشغيل الاختبارات والتكرار. سياق 256K، رخصة OpenMDW-1.1. SWE-bench Verified 70.9%، SWE-bench Multilingual 63.1%. للتنزيل: `ollama pull laguna-xs-2.1`',
            '**Kimi K2.7 Code** (Moonshot AI، يونيو 2026) — نموذج وكيلي مخصص للبرمجة مبني على Kimi K2.6، موجّه تحديدًا لجلسات البرمجة طويلة الأفق. للتنزيل: `ollama pull kimi-k2.7-code:cloud`',
            '**DeepSeek V4 Pro** (DeepSeek، 23 أبريل 2026) — متخصص في البرمجة الخوارزمية، 93.5% LiveCodeBench، رخصة MIT. النسخة الاقتصادية DeepSeek V4 Flash للعتاد الأخف. للتنزيل: `ollama pull deepseek-v4-pro`',
            '**Kimi K2.6** (Moonshot AI، 20 أبريل 2026) — نموذج برمجة متقدم، SWE-Bench Pro 58.6، SWE-bench Verified 80.2%. بنية MoE (32B نشط / 1T إجمالي). رخصة Modified MIT. للتنزيل: `ollama pull kimi-k2.6:cloud`',
            '**Qwen3.8-27B** (Alibaba، 16 أبريل 2026) — أفضل خيار عام على عتاد المستهلك، 61.7 SWE-bench Pro، رخصة Apache 2.0، يلائم 24 GB عند Q4. وكذلك Qwen3.6-35B-A3B (MoE، 73.4 SWE-bench). للتنزيل: `ollama pull qwen3.8:27b`',
            '**GLM-5.3** ([Z.ai](https://Z.ai)) — MoE بحجم 744B / 40B نشط، رخصة MIT. رائد في توليد الشيفرة المنظّمة. للتنزيل: `ollama pull glm-5.3`',
            '**gpt-oss** (OpenAI، 2026) — MoE مفتوح الأوزان: gpt-oss:20b (21B إجمالي / 3.6B نشط، يعمل في 16 GB، بمستوى ~o3-mini، استدلال قابل للضبط) وgpt-oss:120b (80 GB). للتنزيل: `ollama pull gpt-oss:20b`',
            '**Gemma 4** (Google، 2 أبريل 2026) — أحجام متعددة الوسائط E2B / E4B / E12B (26B MoE) / E27B (31B كثيف)، جميعها تدعم الرؤية واستدعاء الأدوات. أصبح الآن أسرع بنحو 90% على Apple Silicon (تحديث MLX يوليو 2026). يعمل E4B في ~6 GB VRAM. للتنزيل: `ollama pull gemma4:e4b`',
          ],
          codeBlock: '# Update Ollama to the latest version (v0.40.5)\ncurl https://ollama.ai/install.sh | sh\n\n# Or on Mac: brew upgrade ollama\n\n# Check your current version\nollama --version  # outputs: ollama version 0.40.5\n\n# Pull the newest July 2026 models\nollama pull laguna-xs-2.1\nollama pull kimi-k2.7-code:cloud\nollama pull nemotron-3.5-lightning\nollama pull kimi-k2.6:cloud',
          codeLanguage: 'bash',
        },
        versionHistory: {
          id: 'ollama-version-history',
          title: 'ما هو سجل إصدارات Ollama والجدول الزمني لها؟',
          content: '**نشرت Ollama أول إصدار لها، v0.0.1، في 8 يوليو 2023، ووصلت إلى v0.40.5 في 14 أكتوبر 2026.** يسرد الجدول الإصدارات التي غيّرت ما يمكنك فعله مع Ollama؛ وكل الوسوم مع ملاحظاتها الكاملة على github.com/ollama/ollama/releases. قفز ترقيم الإصدارات من v0.35 إلى v0.40 في أواخر سبتمبر 2026، لذا يظهر v0.40.0 (25 سبتمبر) بجوار إصدارات v0.35 (28-29 سبتمبر) على GitHub.',
          rows: [
            { 'الإصدار': 'v0.40.5', 'التاريخ': '14 أكتوبر 2026', 'التغيير الرئيسي': 'Nemotron 3.5 Super؛ نماذج قرار سحابية' },
            { 'الإصدار': 'v0.40.0', 'التاريخ': '25 سبتمبر 2026', 'التغيير الرئيسي': 'MLX افتراضيًا على Apple Silicon' },
            { 'الإصدار': 'v0.35.0', 'التاريخ': '28 سبتمبر 2026', 'التغيير الرئيسي': 'نماذج القرار عبر /v1/systemone' },
            { 'الإصدار': 'v0.34.0', 'التاريخ': '5 سبتمبر 2026', 'التغيير الرئيسي': 'نماذج Ollama في ChatGPT Desktop' },
            { 'الإصدار': 'v0.33.0', 'التاريخ': '21 أغسطس 2026', 'التغيير الرئيسي': 'بوابة Claude Desktop؛ استعادة KV' },
            { 'الإصدار': 'v0.32.0', 'التاريخ': '11 يوليو 2026', 'التغيير الرئيسي': 'وكيل "Chat, Code & Work"' },
            { 'الإصدار': 'v0.0.1', 'التاريخ': '8 يوليو 2023', 'التغيير الرئيسي': 'أول إصدار عام' },
          ],
          columns: ['الإصدار', 'التاريخ', 'التغيير الرئيسي'],
        },
        mostPopular: {
          id: 'most-popular-models-on-ollama',
          title: 'ما النماذج الأكثر شيوعًا على Ollama في 2026؟',
          content: [
            '**تُقاس الشعبية على Ollama بعدد التنزيلات الظاهر في صفحة مكتبة كل نموذج.** اعتبارًا من يوليو 2026، لا تزال النماذج الأكثر تنزيلاً تهيمن عليها عائلة Llama من Meta -- إذ يُعدّ Llama 3.2 3B الأكثر تنزيلاً عمومًا، ويعود ذلك إلى حدٍّ كبير لاستخدامه كنموذج اختبار أول للتثبيت. غير أن Llama 4 Scout صعد بسرعة منذ إطلاقه في أبريل 2026.',
            'تُعدّ Qwen3 عائلة النماذج الأسرع نموًّا في مكتبة Ollama، حيث يحلّ Qwen3 والمتغيّر الكثيف الجديد Qwen3.8 محل Qwen3 بسرعة. وشهد DeepSeek-R1 قفزات كبيرة بعد إطلاقه، ولا يزال من الأكثر تنزيلاً لمهام الاستدلال.',
            'أطلقت Meta نموذج **Llama 4** في أبريل 2026 بمتغيّري Scout (17B نشط، 109B إجمالي، MoE) وMaverick (17B نشط، 400B إجمالي). أصبح Llama 4 Scout الآن مستقرًا في مكتبة Ollama (`ollama pull llama4:scout`). تستخدم عائلة Llama 4 بنية مزيج الخبراء (MoE) — إذ يُفعَّل 17B معامل فقط لكل توكن، لكن مع 109B معامل إجمالي يحتاج Scout إلى ~55 GB VRAM عند Q4 (ويلائم 24 GB فقط عند 1.78 بت، ~20 tok/s). ميزتا Scout البارزتان هما نافذة سياقه البالغة 10M توكن ودخله متعدد الوسائط، وليس ملاءمته لعتاد المستهلك. للإعدادات الخفيفة (8 GB RAM)، يبقى Llama 3.2 3B أسهل نموذج أول. توسّعت منظومة Ollama بشكل ملحوظ في أبريل 2026. حقق Kimi K2.6 (Moonshot AI، رخصة Modified MIT، 32B نشط / 1T إجمالي MoE) نتيجة SWE-Bench Pro 58.6، متعادلاً مع GPT-5.5. وLaguna XS 2.1 (من Poolside) هو أحدث منافس للبرمجة الوكيلة، مصمّم خصيصًا لجلسات البرمجة المحلية طويلة الأفق. وحقق Qwen3.8-27B نتيجة 61.7 SWE-bench Pro كأفضل نموذج عام على عتاد المستهلك (يلائم 24 GB عند Q4). ويعمل gpt-oss:20b مفتوح الأوزان من OpenAI (21B إجمالي / 3.6B نشط MoE) في 16 GB بمستوى ~o3-mini مع استدلال قابل للضبط. تضم مكتبة Ollama الآن مئات النماذج المنسّقة، وتُعدّ Laguna XS 2.1 وKimi K2.7 Code أحدث الإضافات منذ تحديث يونيو.',
          ],
        },
        byCategory: {
          id: 'top-models-by-category',
          title: 'أي نماذج Ollama تناسب حالة استخدامك على نحوٍ أفضل؟',
          content: 'تعتمد جودة مخرجات النموذج إلى حدٍّ كبير على طريقة المطالبة. للاطلاع على تقنيات منظّمة تعمل عبر جميع النماذج المحلية — بما في ذلك سلسلة التفكير والأمثلة القليلة وتنسيق المخرجات — راجع [دليل هندسة المطالبات](https://www.promptquorum.com/prompt-engineering). في مهام الاستدلال، تحسّن [مطالبة سلسلة التفكير](https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting) جودة مخرجات DeepSeek-R1 وQwen3 بشكل كبير. لفهم مقايضات التكميم لهذه النماذج، راجع [دليل التكميم ←](/ar/local-llms/llm-quantization-explained). ولتحديد مقدار VRAM الذي يحتاجه كل نموذج، راجع [دليل متطلبات VRAM ←](/ar/local-llms/how-much-vram-local-llm). لتدفقات عمل الوكلاء مع Gemma 4، راجع [شجرة التفكير وReAct](https://www.promptquorum.com/prompt-engineering/tree-of-thought-react). ولمتطلبات العتاد اللازمة لتشغيل هذه النماذج، راجع [دليل العتاد ←](/ar/local-llms/local-llm-hardware-guide). وبمجرد ربط نموذج يدعم استدعاء الأدوات من هذه القائمة في حلقة متعددة الخطوات مع وصول للملفات وقواعد البيانات، راجع [وكلاء الذكاء الاصطناعي المحليون مع MCP](/ar/power-local-llm/local-ai-agents-with-mcp-2026) لنمط التنسيق مفتوح المصدر.',
          items: [
            '**الدردشة العامة (مبتدئ)**: `ollama run llama3.2:3b` -- أكثر النماذج توثيقًا، وأفضل نموذج أول مدعوم.',
            '**الدردشة العامة (أفضل خيار عام)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro، أفضل خيار عام على عتاد المستهلك، يلائم 24 GB عند Q4. متوازن لكل الاستخدامات: `ollama run qwen3:30b`. للأجهزة بسعة 8 GB، التزم بـ `ollama run llama3.2:3b`.',
            '**السياق الطويل / متعدد الوسائط**: `ollama run llama4:scout` -- سياق 10M توكن + متعدد الوسائط، MoE (17B نشط/109B إجمالي). يحتاج ~55 GB VRAM عند Q4 (يلائم 24 GB فقط عند 1.78 بت، ~20 tok/s).',
            '**أفضل نموذج صغير / 16 GB**: `ollama run gpt-oss:20b` -- 21B إجمالي / 3.6B نشط MoE، بمستوى ~o3-mini، استدلال قابل للضبط. أكبر: `ollama run gpt-oss:120b` (80 GB).',
            '**البرمجة على 8 GB**: `ollama run qwen3:8b` -- أفضل نموذج برمجة محلي لأجهزة 8 GB VRAM. 76% HumanEval، يستهلك 5 GB، متعدد اللغات.',
            '**الاستدلال العام على 8 GB (لغير البرمجة)**: `ollama run mistral:7b` -- أسرع نموذج عام الأغراض عند 8 GB، 40-60 tok/sec.',
            '**البرمجة (أفضل وكيل، 24B)**: `ollama run devstral-small-2` -- أفضل نموذج برمجة وكيل (تعديلات متعددة الملفات، التنقيح). 16 GB RAM. من Mistral AI.',
            '**البرمجة (أفضل كثيف، 27B)**: `ollama run qwen3.8:27b` -- 61.7 SWE-bench Pro. أفضل نموذج برمجة كثيف. 18 GB VRAM.',
            '**البرمجة (MoE متقدم)**: `ollama run kimi-k2.6:cloud` -- SWE-Bench Pro 58.6 (يتعادل مع GPT-5.5)، الطبقة العليا. MoE (32B نشط/1T إجمالي). رخصة Modified MIT. يحتاج تكميمًا لعتاد المستهلك.',
            '**البرمجة (وكيلة، طويلة الأفق)**: `ollama run laguna-xs-2.1` -- من Poolside، MoE بحجم 33B إجمالي/3B نشط، SWE-bench Verified 70.9%، سياق 256K. مصمّم لحلقات تخطيط → برمجة → اختبار → تكرار متعددة الخطوات. رخصة OpenMDW-1.1.',
            '**مهام الوكلاء واستدعاء الأدوات**: `ollama run gemma4:e4b` -- صدر في 2 أبريل 2026. استدعاء أدوات مدمج + دعم الرؤية. يُوصى به للوكلاء المحليين واستدعاء الدوال والمخرجات المنظّمة. 6 GB RAM.',
            '**الاستدلال والرياضيات**: `ollama run deepseek-r1:7b` -- نموذج سلسلة التفكير، أفضل أداء رياضي محلي عند 7B.',
            '**متعدد اللغات**: `ollama run qwen3:8b` -- أكثر من 29 لغة أصلية، أقوى دعم لغير الإنجليزية، 76% HumanEval.',
            '**غير خاضع للرقابة / عام الأغراض**: `ollama run dolphin3` -- Dolphin 3.0 (من Cognitive Computations، مبني على Llama 3.1)، بلا تصفية محتوى مدمجة، للدردشة العامة والبرمجة والمهام الوكيلة.',
            '**فهم الصور**: `ollama run gemma4:e4b` -- رؤية + استدعاء أدوات. أو `ollama run llama3.2-vision:11b` للرؤية المخصّصة.',
            '**سريع وخفيف**: `ollama run gemma2:2b` -- أسرع استدلال على المعالج، 1.7 GB RAM.',
            '**جودة عالية (16 GB RAM)**: `ollama run mistral-small3.1` -- جودة تقارب فئة 70B عند 14 GB RAM.',
            '**توليد المتجهات (Embeddings)**: `ollama run nomic-embed-text` -- نموذج تضمين بـ 137M معامل لخطوط أنابيب RAG.',
            '**أسئلة وأجوبة المستندات (RAG)**: `ollama run llama3.2` مع ميزة RAG في Open WebUI -- أفضل تركيبة مدعومة.',
            '**أتمتة المنزل / الذكاء بكلمة التنبيه**: `ollama run phi4-mini` — يعالج Phi-4 Mini (3.8B، ~3 GB VRAM) استعلامات Home Assistant الصوتية بسرعة 20-25 tok/sec على حاسوب مصغّر دون GPU منفصل. راجع [دليل تكامل Home Assistant + Ollama ←](/ar/smart-home/home-assistant-ollama-integration).',
          ],
          image: '/images/top-open-source-models-ollama-use-case-picks-hero-ar.webp',
          imageCaption: 'اختيار نموذج Ollama حسب حالة الاستخدام: اختر qwen3.8:27b (أفضل خيار عام، 61.7 SWE-bench Pro) للدردشة والبرمجة، وkimi-k2.6 للبرمجة المتقدمة، وgpt-oss:20b على 16 GB، وdeepseek-r1:7b للرياضيات.',
        },
        newApril2026: {
          id: 'new-july-2026',
          title: 'نماذج Ollama الجديدة — إصدارات يوليو 2026',
          content: 'هذه أحدث النماذج في مكتبة Ollama اعتبارًا من يوليو 2026، الأحدث أولاً. تأكّد من التوفّر عبر `ollama pull <model>` قبل بناء تدفقات العمل — تظهر النماذج الجديدة على ollama.com/library خلال أيام من الإطلاق.',
          rows: [
            { 'Model': '[nemotron-3.5-super](https://ollama.com/library/nemotron-3.5-super)', 'Released': 'أكتوبر 2026', 'Best For': 'NVIDIA — MoE للرؤية واللغة، 120B/نشاط 12B، سياق 1M، أدوات', 'Ollama Command': 'ollama run nemotron-3.5-super' },
            { 'Model': '[nemotron-3.5-bolt](https://ollama.com/library/nemotron-3.5-bolt)', 'Released': 'أكتوبر 2026', 'Best For': 'NVIDIA — MoE بحجم 74B/نشاط 9B لوحدة GPU بسعة 24 جيجابايت', 'Ollama Command': 'ollama run nemotron-3.5-bolt' },
            { 'Model': '[nemotron-3.5-lightning](https://ollama.com/library/nemotron-3.5-lightning)', 'Released': '11 أغسطس 2026', 'Best For': 'NVIDIA — MoE بحجم 30B/نشاط 3B لوكلاء يعملون دائمًا', 'Ollama Command': 'ollama run nemotron-3.5-lightning' },
            { 'Model': '[laguna-xs-2.1](https://ollama.com/library/laguna-xs-2.1)', 'Released': '2 يوليو 2026', 'Best For': 'Poolside — برمجة وكيلة، MoE بحجم 33B/3B نشط، SWE-bench Verified 70.9%، سياق 256K', 'Ollama Command': 'ollama run laguna-xs-2.1' },
            { 'Model': 'kimi-k2.7-code', 'Released': 'يونيو 2026', 'Best For': 'Moonshot AI — نموذج وكيلي مخصص للبرمجة مبني على Kimi K2.6', 'Ollama Command': 'ollama run kimi-k2.7-code:cloud' },
            { 'Model': 'deepseek-v4-pro', 'Released': '23 أبريل 2026', 'Best For': 'برمجة خوارزمية، 93.5% LiveCodeBench، MIT', 'Ollama Command': 'ollama run deepseek-v4-pro' },
            { 'Model': '[kimi-k2.6](https://huggingface.co/moonshotai)', 'Released': '20 أبريل 2026', 'Best For': 'برمجة متقدمة (SWE-Bench Pro 58.6)، MoE (32B/1T)، Modified MIT', 'Ollama Command': 'ollama run kimi-k2.6:cloud' },
            { 'Model': '[qwen3.8:27b](https://ollama.com/library/qwen3)', 'Released': '16 أبريل 2026', 'Best For': 'أفضل خيار عام على عتاد المستهلك، 61.7 SWE-bench Pro، يلائم 24 GB Q4', 'Ollama Command': 'ollama run qwen3.8:27b' },
            { 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'متوازن لكل الاستخدامات؛ qwen3-coder:30b لإكمال الشيفرة', 'Ollama Command': 'ollama run qwen3:30b' },
            { 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Released': '2026', 'Best For': 'أفضل نموذج صغير / 16 GB، ~o3-mini، استدلال قابل للضبط (وأيضًا gpt-oss:120b)', 'Ollama Command': 'ollama run gpt-oss:20b' },
            { 'Model': 'glm-5.3', 'Released': 'Z.ai', 'Best For': '744B/40B نشط MoE، رخصة MIT', 'Ollama Command': 'ollama run glm-5.3' },
            { 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Released': '2 أبريل 2026', 'Best For': 'رؤية + استدعاء أدوات (E2B/E4B/E12B/E27B)', 'Ollama Command': 'ollama run gemma4:e4b' },
            { 'Model': 'deepseek-v4-flash', 'Released': 'أبريل/مايو 2026', 'Best For': 'برمجة اقتصادية (78/100 واقعيًا)', 'Ollama Command': 'ollama run deepseek-v4-flash' },
            { 'Model': '[qwen3:8b](https://ollama.com/library/qwen3)', 'Released': '2026', 'Best For': 'HumanEval 76% عند 7B، متعدد اللغات', 'Ollama Command': 'ollama run qwen3:8b' },
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
          content: 'اعتبارًا من يوليو 2026، تدعم النماذج التالية على Ollama إدخال الصور (متعدد الوسائط): يدعم Gemma 4 الرؤية واستدعاء الأدوات معًا — وهو فريد بين نماذج الرؤية على Ollama، وأصبح الآن يعمل أسرع بنحو 90% على Apple Silicon بعد تحديث MLX في يوليو.',
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
          content: 'لا تزال أعداد التنزيلات تميل لصالح Llama 3.x بسبب شيوع الدروس. للمشاريع الجديدة في يوليو 2026، يُفضَّل Qwen3.8-27B (أفضل خيار عام على عتاد المستهلك) وKimi K2.6 أو Laguna XS 2.1 (البرمجة) وgpt-oss:20b وqwen3:30b.',
          rows: [
            { '#': '1', 'Model': '[Qwen3.8-27B](https://ollama.com/library/qwen3)', 'Best For': 'أفضل خيار عام على عتاد المستهلك', 'RAM': '24 GB (Q4)', 'HumanEval': '61.7 SWE-bench Pro' },
            { '#': '2', 'Model': '[Kimi K2.6](https://huggingface.co/moonshotai)', 'Best For': 'برمجة متقدمة، MoE (32B/1T)، Modified MIT', 'RAM': 'مكمّم', 'HumanEval': '58.6 SWE-Bench Pro' },
            { '#': '3', 'Model': '[gpt-oss:20b](https://ollama.com/library/gpt-oss)', 'Best For': 'أفضل نموذج صغير / 16 GB، استدلال قابل للضبط', 'RAM': '16 GB', 'HumanEval': '~o3-mini' },
            { '#': '4', 'Model': '[qwen3:30b](https://ollama.com/library/qwen3)', 'Best For': 'متوازن لكل الاستخدامات؛ qwen3-coder:30b للبرمجة', 'RAM': '~18 GB', 'HumanEval': 'قوي' },
            { '#': '5', 'Model': '[Laguna XS 2.1](https://ollama.com/library/laguna-xs-2.1)', 'Best For': 'برمجة وكيلة، طويلة الأفق (تخطيط/برمجة/اختبار/تكرار)', 'RAM': 'مكمّم', 'HumanEval': '70.9% SWE-bench Verified' },
            { '#': '6', 'Model': '[Devstral Small 24B](https://ollama.com/library/devstral-small-2)', 'Best For': 'برمجة وكيلة (متعددة الملفات)', 'RAM': '15 GB', 'HumanEval': '65.8% (Verified)' },
            { '#': '7', 'Model': '[deepseek-r1:7b](https://ollama.com/library/deepseek-r1)', 'Best For': 'استدلال، رياضيات', 'RAM': '5 GB', 'MATH': '52%' },
            { '#': '8', 'Model': '[gemma4:e4b](https://ollama.com/library/gemma3)', 'Best For': 'رؤية + استدعاء أدوات (متعدد الوسائط)', 'RAM': '~6 GB', 'Notes': 'جاهز للوكلاء' },
            { '#': '9', 'Model': '[Llama 4 Scout](https://ollama.com/library/llama3.3)', 'Best For': 'سياق طويل 10M + متعدد الوسائط، MoE', 'RAM': '~55 GB (Q4)', 'HumanEval': '85%' },
            { '#': '10', 'Model': '[Llama 3.2 3B](https://ollama.com/library/llama3.3)', 'Best For': 'النموذج الأول، الدردشة العامة', 'RAM': '2.5 GB', 'HumanEval': '60%' },
          ],
          columns: ['#', 'Model', 'Best For', 'RAM', 'HumanEval'],
          image: '/images/top-open-source-models-ollama-top-models-hero-ar.webp',
          imageCaption: 'أفضل نماذج Ollama يوليو 2026: Qwen3.8-27B (أفضل خيار عام، 24 GB Q4)، Kimi K2.6، Laguna XS 2.1 (برمجة وكيلة)، gpt-oss:20b. وLlama 4 Scout لسياق 10M توكن (~55 GB).',
        },
        howToBrowse: {
          id: 'how-to-browse-ollama-library',
          title: 'كيف تتصفّح مكتبة نماذج Ollama؟',
          content: 'هناك طريقتان للعمل مع نماذج Ollama. **تبديل النماذج المثبّتة:** في تطبيق Ollama على Mac، انقر زر القائمة المنسدلة للنماذج أسفل حقل إدخال الدردشة (يعرض اسم النموذج الحالي، مثل "gemma3:1b") للتبديل بين أي نموذج مثبّت محليًا. **العثور على نماذج جديدة وتنزيلها:** زُر ollama.com/library لتصفح مئات النماذج المنسّقة حسب الفئة، ثم استخدم أوامر CLI أدناه لتنزيل النماذج وإدارتها.',
          codeBlock: '# List all locally downloaded models\nollama list\n\n# Search for a model and pull it\nollama pull qwen2.5-coder:32b\n\n# See all available tags for a model\nollama show qwen2.5\n\n# Remove a model to free disk space\nollama rm llama3.2:3b',
          codeLanguage: 'bash',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'نماذج Ollama مفتوحة المصدر: السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR + الامتثال للتراخيص.** بالنسبة للمؤسسات الأوروبية التي تنشر نماذج Ollama في الإنتاج، لا يقل اختيار الترخيص أهمية عن الأداء. Apache 2.0 (مفتوح بالكامل، الاستخدام التجاري مسموح): Mistral Small وMistral Small 3.1 وQwen3 8B وQwen3.8-27B وDevstral Small 2 وGranite 4.2. ترخيص Meta Llama المجتمعي (يُقيَّد الاستخدام التجاري فوق 700 مليون مستخدم نشط شهرياً): Llama 3.1 8B وLlama 3.2 3B وLlama 3.2 Vision 11B. MIT (الاستخدام التجاري مسموح): DeepSeek-R1 7B و14B. MIT المعدّل (الاستخدام التجاري مسموح مع بند الإسناد): Kimi K2.6. OpenMDW-1.1 (متساهل، الاستخدام التجاري مسموح): Laguna XS 2.1. تحقق دائماً من شروط الترخيص قبل النشر التجاري. وللشركات الأوروبية في القطاعات المنظَّمة، تُعدّ نماذج Mistral (فرنسا، Apache 2.0) مثل Devstral Small 2 خياراً افتراضياً معقولاً: منشأ أوروبي وترخيص متساهل. وتشغيل النماذج بالكامل داخل المنشأة عبر Ollama يعني ألا تُرسل الأوامر إلى خوادم خارجية؛ وهذا يدعم التزامات GDPR لكنه لا يحققها وحده (فالوسم `:cloud` يرسل البيانات إلى خدمة Ollama المستضافة).',
            '**اليابان (METI).** لعمليات النشر المؤسسية اليابانية مع Ollama، تُعدّ عائلة Qwen3 / Qwen3.8 خياراً موصى به: فهي تعالج النص الياباني أصلاً، مما يفيد زمن الاستدلال وذاكرة KV المؤقتة. وفي سير عمل البرمجة باليابانية: يتعامل Qwen3.8-27B (61.7 في SWE-bench Pro بحسب Qwen) مع تعليقات الكود اليابانية أصلاً. وتطلب وثائق حوكمة الذكاء الاصطناعي لدى METI عادةً الإصدار الدقيق للنموذج. استخدم `ollama show <النموذج>` للحصول على المواصفات الكاملة (عدد المعاملات ومستوى التكميم وطول السياق) لسجلات الامتثال.',
            '**الصين.** بموجب تدابير CAC للذكاء الاصطناعي التوليدي (2023)، يجب على المؤسسات التي تقدّم خدمات ذكاء اصطناعي للمستخدمين النهائيين تسجيل النماذج المستخدمة. يُعدّ Qwen3 / Qwen3.8 (من Alibaba، Apache 2.0) خياراً طبيعياً لعمليات النشر المؤسسية الصينية مع Ollama: منشأ صيني وترخيص Apache 2.0 وأداء قوي بالصينية. وKimi K2.6 (من Moonshot AI، MIT المعدّل) صيني المنشأ أيضاً، لكن Ollama تدرجه كوسم سحابي فقط ويحتاج التشغيل المحلي إلى عتاد بمستوى الخوادم. الأوامر: `ollama run qwen3.8:27b` لأفضل جودة، و`ollama run qwen3:8b` للسرعة. ويناسب DeepSeek-R1 (ترخيص MIT) مهام الاستدلال. وبالنسبة للبيانات المعالجة محلياً عبر Ollama، لا يُفعّل الاستدلال نفسه متطلبات PIPL لنقل البيانات عبر الحدود؛ لكن راجع التزامات الامتثال الخاصة بك.',
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
            '[نماذج رؤية Ollama (2026)](/ar/power-local-llm/ollama-vision-models-review) -- دليل عملي مخصص لتشغيل نماذج قادرة على معالجة الصور عبر Ollama، مع صيغة CLI/API فعلية.',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- إعداد Ollama وتنزيل أول نموذج من هذه القائمة في أقل من 5 دقائق',
            '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) -- ترتيب معياري كامل عبر جميع النماذج مفتوحة الأوزان بما في ذلك فئة 70B',
            '[أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) -- مقارنة أعمق لـ Qwen3.8 / Qwen2.5-Coder 32B وDeepSeek-Coder وStarcoder2',
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
            '[دليل أجهزة LLM المحلي](/ar/local-llms/local-llm-hardware-guide) — هل جهازك يستطيع تشغيل هذه النماذج؟ →',
          ],
        },
        faqSection: {
          id: 'common-questions',
          title: 'أسئلة شائعة حول النماذج مفتوحة المصدر على Ollama',
          faqs: [
            {
              q: 'ما هو أحدث إصدار من Ollama؟',
              a: 'أحدث إصدار مستقر من Ollama هو v0.40.5، وقد صدر في 14 أكتوبر 2026. وتبعه إصدار تجريبي v0.40.6 في 16 أكتوبر لم يُصنَّف مستقرًا بعد. نزّله من ollama.com/download أو حدّث في مكانه باستخدام `curl https://ollama.ai/install.sh | sh` على Linux و`brew upgrade ollama` على macOS.',
            },
            {
              q: 'أين أجد سجل تغييرات Ollama وملاحظات الإصدارات؟',
              a: 'تتوفّر ملاحظات كل إصدار على github.com/ollama/ollama/releases، مع تاريخ كل وسم وسجل تغييراته. أحدث الإدخالات المستقرة هي v0.40.5 (14 أكتوبر 2026 -- دعم NVIDIA Nemotron 3.5 Super والوصول السحابي إلى نماذج القرار)، وv0.40.4 (12 أكتوبر -- نماذج القرار عبر `ollama run --ask` وتحميل أسرع)، وv0.40.0 (25 سبتمبر -- MLX افتراضيًا على Apple Silicon).',
            },
            {
              q: 'كيف أتحقق من إصدار Ollama المثبّت لديّ؟',
              a: 'نفّذ `ollama --version` في الطرفية. سيطبع سطرًا مثل `ollama version 0.40.5`. وإذا كان الرقم أقل من الإصدار الحالي، فحدّث عبر `curl https://ollama.ai/install.sh | sh` على Linux أو `brew upgrade ollama` على macOS، ثم نفّذ `ollama --version` مجددًا للتأكيد.',
            },
            {
              q: 'متى صدر Ollama لأول مرة؟',
              a: 'نُشر أول إصدار من Ollama، وهو v0.0.1، على GitHub في 8 يوليو 2023، بعد إنشاء المستودع في 26 يونيو 2023 بوقت قصير. وبحلول أكتوبر 2026 وصل المشروع إلى v0.40.5. القائمة الكاملة على github.com/ollama/ollama/releases.',
            },
            {
              q: 'كم عدد النماذج في مكتبة Ollama؟',
              a: 'تضم مكتبة Ollama مئات النماذج المنسّقة بدعم رسمي، وينمو العدد أسبوعيًا مع صدور إصدارات جديدة مفتوحة الأوزان. وتستضيف Hugging Face آلاف نماذج GGUF الإضافية التي يمكن تحميلها عبر Ollama باستخدام ملفات Modelfile مخصّصة.',
            },
            {
              q: 'ما هو الاسم الرسمي للشركة التي تقف وراء Ollama؟',
              a: 'الشركة هي Ollama Inc.، وهي شركة ناشئة ممولة بجولة تمويل من فئة Series B ومقرها Palo Alto، كاليفورنيا، أسسها عام 2023 كل من Jeffrey Morgan وMichael Chiang. يشير اسم "Ollama" إلى كل من الشركة وأداة CLI/محرك تشغيل النماذج الذي تصدره.',
            },
            {
              q: 'هل يمكنني استخدام نماذج Hugging Face مباشرةً في Ollama؟',
              a: 'نعم. نزّل ملف GGUF من Hugging Face وأنشئ Modelfile: `FROM ./model.gguf`. ثم شغّل `ollama create mymodel -f Modelfile`. يعمل هذا مع أي ملف GGUF بما في ذلك النماذج المضبوطة والنماذج غير الموجودة في مكتبة Ollama الرسمية.',
            },
            {
              q: 'أي نموذج Ollama أفضل لبناء روبوت دردشة محلي؟',
              a: 'لروبوت دردشة محلي عام الأغراض: `qwen3.8:27b` (أفضل خيار عام على عتاد المستهلك، يلائم 24 GB عند Q4)، أو `llama3.2:3b` على 8 GB RAM (أسهل نقطة بداية). للأجهزة بسعة 16 GB: `gpt-oss:20b` (بمستوى ~o3-mini) أو `mistral-small3.1`. لروبوت دردشة مساعد للبرمجة: `qwen3.8:27b` (61.7 SWE-bench Pro)، `devstral-small-2` (MoE متقدم)، أو `laguna-xs-2.1` (وكيلة، طويلة الأفق). اقرنه بـ Open WebUI للحصول على واجهة قائمة على الويب تتصل بواجهة Ollama البرمجية على localhost:11434.',
            },
            {
              q: 'هل جميع نماذج Ollama مفتوحة المصدر فعليًا؟',
              a: 'ليست جميعها. تتضمن مكتبة Ollama نماذج برخص متنوعة. تستخدم Llama 3.x/4.x رخصة Meta Llama Community (ليست مفتوحة المصدر بموافقة OSI -- تقيّد الاستخدام التجاري فوق 700M مستخدم نشط شهريًا). نماذج Mistral Small وQwen3 وQwen3.8 وDevstral وGemma هي Apache 2.0 (مفتوحة المصدر بالكامل). وKimi K2.6 مرخّص بـ Modified MIT (متوافق تجاريًا مع شرط إسناد). ويستخدم Laguna XS 2.1 رخصة OpenMDW-1.1 (متساهلة، الاستخدام التجاري مسموح، لكنها غير معتمدة من OSI). تحقّق دائمًا من الرخصة قبل النشر التجاري.',
            },
            {
              q: 'أي نموذج من عائلة Dolphin ينبغي أن أستخدمه مع Ollama؟',
              a: 'استخدم Dolphin 3.0 (`ollama pull dolphin3`)، وليس `dolphin-mistral` الأقدم (آخر تحديث له كان في 2024، ومبني على Mistral 0.2). Dolphin 3.0، الذي تصونه Cognitive Computations (Eric Hartford)، مبني على Llama 3.1، ولا يتضمن أي تصفية محتوى مدمجة، وهو مصمّم كنموذج محلي عام الأغراض للبرمجة والرياضيات والمهام الوكيلة والدردشة غير المقيدة.',
            },
            {
              q: 'أي نموذج تضمين ينبغي أن أستخدمه مع Ollama لـ RAG؟',
              a: '`nomic-embed-text` هو الخيار القياسي -- نموذج بـ 137M معامل يولّد تضمينات بأبعاد 768، ويعمل بمللي ثوانٍ لكل مستند، ومصمّم خصيصًا لمهام الاسترجاع. نزّله عبر `ollama pull nomic-embed-text`. استخدمه مع ميزة RAG المدمجة في Open WebUI أو OllamaEmbeddings في LangChain أو LlamaIndex.',
            },
            {
              q: 'كم مرة تُحدَّث مكتبة Ollama بنماذج جديدة؟',
              a: 'يضيف فريق Ollama نماذج جديدة خلال أيام إلى أسابيع من الإصدارات الكبرى. ظهرت Laguna XS 2.1 (2 يوليو 2026) وKimi K2.7 Code وKimi K2.6 وQwen3.8 جميعها خلال أيام من إطلاقها. الإصدار الحالي من Ollama هو v0.32.0 (11 يوليو 2026). تابع مستودع Ollama على GitHub ([github.com/ollama/ollama](https://github.com/ollama/ollama)) أو حساب Ollama على Twitter/X لإعلانات النماذج الجديدة.',
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
            {
              q: 'ما هي أفضل نماذج Ollama لمهام اللغة الروسية؟',
              a: 'يتضمن كل من Qwen3 / Qwen3.8 (`ollama run qwen3:8b` أو `ollama run qwen3.8:27b`) وMistral Small 3.1 (`ollama run mistral-small3.1`) اللغة الروسية ضمن بيانات التدريب متعددة اللغات الأصلية لكل منهما. يحقق Qwen3 نتائج أعلى في معايير غير الإنجليزية، بينما يتميّز Mistral Small 3.1 بطلاقة محادثة روسية أقوى بحسب اختبارات غير رسمية. لا ينتمي أي منهما لأصل روسي -- بالنسبة لمتطلبات إقامة البيانات التنظيمية الخاصة بروسيا، تحقّق من رخصة النموذج ومتطلبات الامتثال الخاصة بمؤسستك بشكل منفصل، إذ لا يتناول هذا المقال قانون توطين البيانات الروسي.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[Meta AI. (2025). "Llama 4 Model Card." llama.meta.com](https://llama.meta.com/) -- المواصفات الرسمية لـ Llama 4 Scout (17B نشط، 109B إجمالي، MoE) ومتغيّرات Maverick.',
            '[DeepSeek AI. (2025). "DeepSeek-R1 Technical Report." arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) -- بنية سلسلة التفكير ومعيار MATH (52%) لـ DeepSeek-R1.',
            '[Ollama. (2026). "qwen3.8." ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8) -- 61.7 SWE-bench Pro لأفضل نموذج برمجة كثيف.',
            '[Moonshot AI. (2026). "Kimi K2.6 Model Card." moonshot.ai](https://moonshot.ai/) -- نموذج برمجة MoE مرخّص بـ Modified MIT (32B نشط/1T إجمالي)، SWE-Bench Pro 58.6.',
            '[Mistral AI. (2026). "Devstral Small 24B." mistral.ai](https://mistral.ai/) -- أفضل نموذج برمجة وكيل للتعديلات متعددة الملفات والتنقيح.',
            '[Ollama. (2026). "Ollama Model Library." ollama.com/library](https://ollama.com/library) -- مكتبة النماذج الرسمية بمئات النماذج المنسّقة وأعداد التنزيلات والوسوم وخيارات التكميم.',
            '[Google DeepMind. (2026). "Gemma 4 Technical Report."](https://ai.google.dev/) -- قدرات الرؤية + استدعاء الأدوات الصادرة في أبريل 2026.',
            '[Poolside. (2026). "Introducing Laguna XS 2.1." poolside.ai](https://poolside.ai/blog/introducing-laguna-xs-2-1) -- نموذج برمجة وكيلة MoE بحجم 33B/3B نشط، SWE-bench Verified 70.9%، رخصة OpenMDW-1.1.',
            '[Ollama. (2026). "Ollama Releases." github.com/ollama/ollama/releases](https://github.com/ollama/ollama/releases) -- ملاحظات الإصدارات الرسمية، v0.40.5 (14 أكتوبر 2026).',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'أفضل نماذج Ollama مفتوحة المصدر -- يوليو 2026: أفضل 10 نماذج',
        'description': 'أكثر النماذج مفتوحة المصدر تنزيلًا وأفضلها أداءً المتاحة عبر Ollama',
        'numberOfItems': 10,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Qwen3.8-27B', 'url': 'https://ollama.com/library/qwen3', 'description': 'أفضل خيار عام على عتاد المستهلك. 61.7 SWE-bench Pro. يتّسع في 24 GB بتكميم Q4. ollama run qwen3.8:27b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kimi K2.6', 'url': 'https://huggingface.co/moonshotai', 'description': 'نموذج برمجة MoE متقدم. SWE-Bench Pro 58.6 (يتعادل مع GPT-5.5). 32B نشط/1T إجمالي. رخصة Modified MIT. ollama run kimi-k2.6:cloud' },
          { '@type': 'ListItem', 'position': 3, 'name': 'gpt-oss:20b', 'url': 'https://ollama.com/library/gpt-oss', 'description': 'أفضل نموذج صغير / 16 GB. 21B إجمالي / 3.6B نشط MoE. بمستوى ~o3-mini، استدلال قابل للضبط. ollama run gpt-oss:20b' },
          { '@type': 'ListItem', 'position': 4, 'name': 'qwen3:30b', 'url': 'https://ollama.com/library/qwen3', 'description': 'نموذج متوازن لكل الاستخدامات؛ استخدم qwen3-coder:30b لإكمال الكود. ollama run qwen3:30b' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Laguna XS 2.1', 'url': 'https://ollama.com/library/laguna-xs-2.1', 'description': 'برمجة وكيلة طويلة الأفق. 33B/3B نشط MoE. SWE-bench Verified 70.9%. رخصة OpenMDW-1.1. ollama run laguna-xs-2.1' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Devstral Small 24B', 'url': 'https://ollama.com/library/devstral', 'description': 'أفضل نموذج برمجة وكيلة (متعددة الملفات). تعديلات متعددة الملفات، تنقيح. 16 GB RAM. ollama run devstral-small-2' },
          { '@type': 'ListItem', 'position': 7, 'name': 'deepseek-r1:7b', 'url': 'https://ollama.com/library/deepseek-r1', 'description': 'أفضل استدلال. 5 GB RAM. 52% في MATH مقابل 28% لـ Mistral Small. ollama run deepseek-r1:7b' },
          { '@type': 'ListItem', 'position': 8, 'name': 'gemma4:e4b', 'url': 'https://ollama.com/library/gemma3', 'description': 'أفضل رؤية/تعدد وسائط (E4B+). استدعاء أدوات + رؤية، أسرع بنحو 90% على Apple Silicon (يوليو 2026). ~6 GB RAM. ollama run gemma4:e4b' },
          { '@type': 'ListItem', 'position': 9, 'name': 'Llama 4 Scout', 'url': 'https://ollama.com/library/llama3.3', 'description': 'أفضل سياق طويل (10 ملايين توكن) + تعدد وسائط كبير. MoE بـ17B نشط/109B إجمالي. ~55 GB بتكميم Q4. ollama run llama4:scout' },
          { '@type': 'ListItem', 'position': 10, 'name': 'Llama 3.2 3B', 'url': 'https://ollama.com/library/llama3.3', 'description': 'الأفضل كنموذج أول. 2.5 GB RAM. دردشة عامة. ollama run llama3.2:3b' },
        ],
      },
    },
  };
