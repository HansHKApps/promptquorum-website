// Slug: qwen-local-deployment-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen Local Deployment Guide 2026: Qwen 3.6 27B, Coder & VL Hardware Tiers',
    seoTitle: 'Qwen 3.6 27B Local Setup Guide 2026: Coder, VL & Hardware Tiers',
    intro: 'Qwen 3.6 27B is the new flagship pick for local deployment — a dense, Apache 2.0 model with a 256K context window that runs in ~17 GB of VRAM at Q4_K_M via `ollama run qwen3.6:27b`. Qwen3 8B runs in 5.5 GB of VRAM via Ollama — one command, no configuration — while Qwen3-Coder 32B reaches 92.7% on HumanEval and Qwen2-VL 7B leads local vision models for Chinese and Japanese document OCR. This guide covers which Qwen sub-family to run at each hardware tier, with Ollama and LM Studio setup, Q4_K_M quantization picks, and benchmark data from 7B through 72B. Hardware tiers range from an RTX 3060 at 5.5 GB VRAM for Qwen3 8B to dual RTX 3090s or Apple M2 Ultra for Qwen2.5-72B.',
    metaDescription: 'Run Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen3-Coder and Qwen2-VL locally in 2026. VRAM requirements, Ollama + LM Studio setup, Q4_K_M benchmarks, and hardware tier guide.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-en.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers, researchers, and privacy-focused users who want to run the full Qwen model family locally — including Chinese-language users who prefer Alibaba\'s models over US alternatives',
    primaryTerm: 'Qwen local deployment',
    targetKeywords: [
      'qwen local deployment 2026',
      'run qwen locally',
      'qwen ollama setup',
      'qwen2.5 vram requirements',
      'qwen coder local',
      'qwen2-vl local',
      'qwen本地部署',
    ],
    current_models_mentioned: [
      'Qwen 3.6 27B',
      'Qwen3 0.6B',
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen2.5-72B',
      'Qwen3-Coder 7B',
      'Qwen3-Coder 14B',
      'Qwen3-Coder 32B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'DeepSeek-V2.5',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'RTX 3060 12 GB',
      'RTX 4070 12 GB',
      'RTX 4070 Ti 16 GB',
      'RTX 3090 24 GB',
      'RTX 4090 24 GB',
      'Apple M3 Max',
      'Apple M2 Ultra',
      'Mac mini M4',
    ],
    affiliateDisclosure: true,
    ctaText: 'Dispatch across Qwen3, DeepSeek, and Llama from one interface →',
    ctaButton: 'Try PromptQuorum Free',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**The new flagship pick is Qwen 3.6 27B — a dense, Apache 2.0 model with a 256K context window that runs in ~17 GB of VRAM at Q4_K_M via `ollama run qwen3.6:27b`.** For a lighter setup, Qwen3 8B installs with Ollama and `ollama pull qwen2.5:7b` — 5.5 GB of VRAM, 57 tokens/sec on an RTX 3060. For coding tasks use Qwen2.5-Coder; for Chinese/Japanese document OCR use Qwen2-VL. Already know your VRAM budget? Jump straight to [which GPU or Mac to buy for each Qwen tier](#affiliate-picks).',
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Qwen3 Model Family Overview', anchor: '#model-family' },
      { label: 'Hardware Requirements by Model Size', anchor: '#hardware-tiers' },
      { label: 'Setting Up with Ollama', anchor: '#ollama-setup' },
      { label: 'Setting Up with LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Quantization: Which Format to Choose', anchor: '#quantization-guide' },
      { label: 'Benchmark Performance on Consumer Hardware', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: 'Chinese Users: Data Sovereignty', anchor: '#regional-context' },
      { label: 'Hardware Picks by Budget', anchor: '#affiliate-picks' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'The slide deck below covers: the new Qwen 3.6 27B flagship (256K context, ~17 GB at Q4_K_M), the complete Qwen model family at a glance (Qwen3 0.6B–32B, Qwen2.5 7B–72B), VRAM requirements per hardware tier, benchmark data for Qwen3-Coder 32B, and a Qwen vs DeepSeek vs Llama decision chart. Download as a Qwen deployment reference card.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Local Deployment Guide 2026: Run Qwen 3.6 27B, Qwen3, Coder & VL at Every Hardware Tier',
      description: 'Complete guide to deploying the Qwen model family locally — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder, and VL VRAM requirements, Ollama and LM Studio setup, quantization, benchmarks, and hardware recommendations.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'en',
      url: 'https://www.promptquorum.com/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/', url: 'https://www.promptquorum.com' },
      audience: { '@type': 'Audience', audienceType: 'Developers and researchers running Qwen3 models locally' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much VRAM do I need to run Qwen3 8B locally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M requires 5.5 GB of VRAM. An NVIDIA RTX 3060 6 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it comfortably. At 8 GB of VRAM you have headroom for context and system RAM.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best Qwen model for coding locally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B is the best locally runnable coding model — it scores 92.7% on HumanEval and needs a 24 GB GPU (RTX 3090 or RTX 4090). If your VRAM is 12 GB or less, use Qwen3-Coder 14B (HumanEval 85.2%, 9.5 GB VRAM).' },
        },
        {
          '@type': 'Question',
          name: 'How does Qwen compare to DeepSeek for local deployment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-72B and DeepSeek-V2.5 236B (MoE) are competitive on general tasks, but Qwen uses a dense architecture that fits on consumer hardware. DeepSeek-V2.5 requires ~130 GB RAM at Q4 — unreachable without a server GPU. For VRAM under 24 GB, Qwen3 wins on practicality.' },
        },
        {
          '@type': 'Question',
          name: 'Can I run Qwen on a Mac?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Apple Silicon uses unified memory — an M2 Pro 32 GB runs Qwen3 14B smoothly at ~32 tokens/sec. An M3 Max 64 GB handles Qwen3 32B at ~22 tokens/sec. Use the Ollama macOS app or LM Studio for the simplest setup.' },
        },
        {
          '@type': 'Question',
          name: 'What Ollama command do I use for Qwen?',
          acceptedAnswer: { '@type': 'Answer', text: 'For the new flagship, run `ollama run qwen3.6:27b` (~17 GB VRAM). For Qwen3, use `ollama pull qwen3:8b` or `qwen3:14b`. For Qwen2.5, run `ollama pull qwen2.5:7b` for 7B, `ollama pull qwen2.5:14b` for 14B, `ollama pull qwen2.5:32b` for 32B, or `ollama pull qwen2.5-coder:32b` for the coding-optimised 32B variant. Always use an explicit size tag — the untagged `qwen2.5` may resolve to a different version.' },
        },
        {
          '@type': 'Question',
          name: 'Is Qwen good for Chinese-language tasks?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 was pretrained on a large Chinese corpus and natively handles Simplified and Traditional Chinese, Japanese, Korean, and 26 other languages. It consistently outperforms Llama 3.3 and Mistral on Chinese reading comprehension and generation — making it the preferred choice for Chinese-language local AI.' },
        },
        {
          '@type': 'Question',
          name: 'What quantization should I use for Qwen3?',
          acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M is the recommended default — it cuts VRAM by roughly 55–60% versus full precision with minimal quality loss (less than 1% on most benchmarks). Use Q8_0 if you have spare VRAM and want near-fp16 quality. Avoid Q2_K — it degrades Chinese-language output noticeably.' },
        },
        {
          '@type': 'Question',
          name: 'Does Qwen2-VL work for Chinese document OCR?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — Qwen2-VL 7B is the strongest local vision model for CJK document OCR. It runs in ~6 GB of VRAM via Ollama (`ollama pull qwen2-vl:7b`) and reads Chinese, Japanese, and Korean text at up to 4096×4096 resolution without downsampling. See the full guide at /local-llms/run-qwen-vl-locally-2026.' },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B is the new flagship pick**: dense, Apache 2.0, 256K context, ~17 GB VRAM at Q4_K_M via `ollama run qwen3.6:27b` (released April 2026).',
          '**Qwen3 8B runs in 5.5 GB of VRAM** — one `ollama pull qwen2.5:7b` command and you\'re running at 57 tokens/sec on an RTX 3060.',
          '**Four practical sub-families**: Qwen3 (general, thinking-mode), Qwen2.5 (general, widest tested), Qwen2.5-Coder (coding, 92.7% HumanEval at 32B), Qwen2-VL (vision, best CJK OCR locally).',
          '**Dense architecture = consumer-friendly**: unlike DeepSeek\'s 236B MoE model (needs ~130 GB RAM), Qwen2.5-72B fits in 46 GB VRAM on two RTX 3090s.',
          '**Native multilingual**: pretrained on Chinese, Japanese, Korean, Arabic, German, French, and 23 more — Qwen3 consistently beats Llama 3.3 on CJK tasks.',
          '**Q4_K_M is the right quantization** for most users: ~55% VRAM reduction, less than 1% quality loss on benchmarks.',
          '**Hardware decision**: 12 GB VRAM → 14B model; 24 GB VRAM → 32B; 48 GB+ (two GPUs or Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 8B runs in 5.5 GB VRAM via Ollama; Qwen3-Coder 32B needs 24 GB and scores 92.7% on HumanEval.' },
          { type: 'plain-terms', text: 'Qwen3 is a family of open-weight AI models from Alibaba that run on consumer GPUs — from a laptop GPU to a desktop RTX 4090 — without sending data to any cloud.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Which Qwen Sub-Family Should You Run?',
        content: [
          '**The Qwen line-up now spans five practical picks: the Qwen 3.6 27B flagship, the newer Qwen3 family, Qwen2.5 general reasoning, Qwen2.5-Coder, and Qwen2-VL for vision** — each with multiple size options. All are open-weight models published by Alibaba\'s Qwen team on Hugging Face under the Apache 2.0 licence.',
          'Choose the sub-family first, then the size that fits your VRAM. Mixing sub-families is common: run Qwen2.5-Coder 14B for code completion and Qwen3 8B or Qwen 3.6 27B for document summarisation.',
        ],
        rows: [
          { 'Sub-family': 'Qwen3', 'Sizes available': '0.6B, 1.7B, 4B, 8B, 14B, 32B', 'Primary use': 'General reasoning, thinking-mode, multilingual, agentic tasks', 'Ollama tag prefix': 'qwen3:' },
          { 'Sub-family': 'Qwen2.5', 'Sizes available': '7B, 14B, 32B, 72B', 'Primary use': 'General reasoning, Chinese/multilingual tasks, RAG', 'Ollama tag prefix': 'qwen2.5:' },
          { 'Sub-family': 'Qwen2.5-Coder', 'Sizes available': '7B, 14B, 32B', 'Primary use': 'Code generation, debugging, HumanEval, SWE-bench', 'Ollama tag prefix': 'qwen2.5-coder:' },
          { 'Sub-family': 'Qwen2-VL', 'Sizes available': '2B, 7B, 72B', 'Primary use': 'Document OCR, image Q&A, CJK text extraction', 'Ollama tag prefix': 'qwen2-vl:' },
        ],
        columns: ['Sub-family', 'Sizes available', 'Primary use', 'Ollama tag prefix'],
        tableFormat: true,
        note: 'Qwen 3.6 27B (released April 2026) is the new flagship pick — a dense model with a 256K context window that runs in ~17 GB of VRAM at Q4_K_M via `ollama run qwen3.6:27b`. Qwen2.5 remains the widest-tested family with the broadest Ollama and GGUF coverage as of mid-2026. See [best local LLMs 2026](/local-llms/best-local-llms-2026) for a broader model comparison.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'How Much VRAM Does Each Qwen3 Model Require?',
        content: [
          '**Pick your VRAM tier first, then select the largest Qwen3 model that fits.** Q4_K_M is the standard quantisation used in all figures below — it gives the best size-to-quality ratio for Ollama and LM Studio.',
        ],
        rows: [
          { 'Model': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (RTX 3060)': '~57 tok/s' },
          { 'Model': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (RTX 3060)': '~55 tok/s' },
          { 'Model': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2 GB', 'Minimum GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Speed (RTX 4060)': '~38 tok/s' },
          { 'Model': 'Qwen3 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (RTX 4070)': '~38 tok/s' },
          { 'Model': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (RTX 4070)': '~36 tok/s' },
          { 'Model': 'Qwen3 32B Q4_K_M', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (RTX 4090)': '~28 tok/s' },
          { 'Model': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (RTX 4090)': '~27 tok/s' },
          { 'Model': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'Minimum GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Speed (RTX 4090)': '~24 tok/s' },
          { 'Model': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'Minimum GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Speed (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Model', 'VRAM', 'Minimum GPU', 'Apple Silicon', 'Speed (RTX 3060)'],
        tableFormat: true,
        note: 'VRAM figures are for Q4_K_M GGUF files from the Ollama library. Add 1–2 GB for the KV cache at 4K context. If your GPU has less VRAM than the model needs, Ollama automatically offloads layers to system RAM — this works but reduces speed significantly.',
        callouts: [
          { type: 'tip', text: 'Found your VRAM tier? See [exactly which GPU or Mac to buy for that tier](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M4 Pro or dual GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-en.webp',
        imageCaption: 'Qwen3 VRAM requirements by model size (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'How Do You Run Qwen3 with Ollama?',
        content: [
          '**Ollama is the fastest path to running any Qwen3 model locally** — it handles model download, GGUF quantisation, and the local API at `localhost:11434` without any configuration. Install from [ollama.com](https://ollama.com/download). If you have not used Ollama before, read [how to install Ollama](/local-llms/how-to-install-ollama) first.',
        ],
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Available for macOS, Linux (one-line install), and Windows. No GPU drivers to configure — Ollama detects CUDA, ROCm, and Metal automatically.' },
          { title: 'Pull the model with an explicit size tag', whyItMatters: 'Always specify the size: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`, or `qwen3.6:27b` for the flagship. The untagged `qwen2.5` resolves to the 7B model but may change between Ollama releases.' },
          { title: 'Run the model', whyItMatters: '`ollama run qwen2.5:7b` opens an interactive chat. Type your prompt and press Enter. Close with `/bye`.' },
          { title: 'Set context window if needed', whyItMatters: 'Qwen3 supports 32K context by default in Ollama. To use 128K context on a 7B model, run `ollama run qwen2.5:7b --num-ctx 131072`. This requires more VRAM — add 2–4 GB for long contexts.' },
          { title: 'Test the API endpoint', whyItMatters: 'Ollama exposes an OpenAI-compatible API. Applications like PromptQuorum, Continue.dev, and Open WebUI connect directly to `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Install Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: download the .dmg from ollama.com or:
brew install ollama

# Pull models — use explicit tags
ollama pull qwen3.6:27b          # flagship, 256K context (~17 GB)
ollama pull qwen3:8b             # Qwen3 general 8B (~5.5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 general 7B (~5.5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 general 14B (~9.5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 general 32B (~20.5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20.5 GB)
ollama pull qwen2-vl:7b          # vision 7B (~6.2 GB)

# Run interactively
ollama run qwen2.5:7b

# Test the OpenAI-compatible API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Hello"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'How Do You Run Qwen3 with LM Studio?',
        content: [
          '**LM Studio provides a GUI interface for Qwen3 with no terminal commands.** Download from [lmstudio.ai](https://lmstudio.ai), or see [how to install LM Studio](/local-llms/how-to-install-lm-studio). It runs on macOS, Windows, and Linux.',
        ],
        numberedItems: [
          { title: 'Open the model browser', whyItMatters: 'Search "Qwen3" or "Qwen Coder" to browse all available GGUF builds. Filter by Q4_K_M for the recommended quality/size ratio.' },
          { title: 'Download a GGUF build', whyItMatters: 'Select the Q4_K_M variant. LM Studio shows file size before download — confirm it matches the VRAM you have available.' },
          { title: 'Load the model and start chatting', whyItMatters: 'Click the model in the left sidebar to load it into memory. GPU layer allocation is automatic based on detected VRAM.' },
          { title: 'Start the local server', whyItMatters: '"Start Server" exposes an OpenAI-compatible endpoint at `localhost:1234`. Your apps and scripts connect to it as if it were the OpenAI API.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantization: Which Format to Choose',
        content: [
          '**Q4_K_M is the right default for Qwen3 on consumer hardware.** It reduces VRAM by ~55–60% versus FP16 with less than 1% benchmark degradation on MMLU and HumanEval. Other formats have specific use cases:',
        ],
        items: [
          '**Q4_K_M** (recommended): ~5.5 GB for 7B. Best quality-per-GB ratio. Use this first.',
          '**Q8_0**: ~8.5 GB for 7B. Near-FP16 quality; use if you have spare VRAM and want maximum accuracy.',
          '**Q5_K_M**: ~6.5 GB for 7B. Marginal improvement over Q4_K_M — only choose it if Q4_K_M output quality is visibly poor for your task.',
          '**Q2_K**: ~3 GB for 7B. Smallest file, but Chinese-language output quality degrades noticeably — avoid for Qwen3 if Chinese text is part of your use case.',
          '**IQ4_XS**: ~4.8 GB for 7B. A newer imatrix quantisation that beats Q4_K_M quality at slightly smaller size — available in recent llama.cpp releases and LM Studio 0.3+.',
        ],
        note: 'For a full quantisation explainer, see [LLM quantization explained](/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M is the recommended default for Qwen3: 55% less VRAM than FP16, under 1% quality loss.' },
          { type: 'plain-terms', text: 'Quantization is a compression technique — like reducing image quality to save file size. Q4_K_M keeps 99% of Qwen3\'s accuracy while cutting memory use in half.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'How Does Qwen3 Perform on Consumer Hardware?',
        content: [
          '**Qwen3 32B Q4_K_M on an RTX 4090 delivers 28 tokens/sec — fast enough for real-time coding assistance.** Scores below are for Q4_K_M GGUF builds tested on Ollama. Full-precision FP16 scores are 1–2% higher.',
        ],
        rows: [
          { 'Model (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', 'Speed (RTX 3060 12 GB)': '57 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', 'Speed (RTX 4070 12 GB)': '38 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', 'Speed (RTX 4090 24 GB)': '28 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', 'Speed (2×RTX 3090)': '12 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', 'Speed (RTX 3060 12 GB)': '55 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', 'Speed (RTX 4070 12 GB)': '36 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', 'Speed (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Model (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Speed (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Want that 92.7% HumanEval score at 27 tok/s? See the [24 GB GPU that runs Qwen3-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-en.webp',
        imageCaption: 'Qwen3 benchmark scores (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: Which to Run Locally',
        content: [
          '**Qwen3 wins on Chinese-language tasks and VRAM efficiency; DeepSeek-V2.5 wins on reasoning at large scale but is impractical on consumer hardware; Llama 3.3 70B is the best single-GPU option if you prefer Meta\'s open model.** The table below compares the practical options at each VRAM tier.',
        ],
        rows: [
          { 'VRAM Tier': '6 GB', 'Best Qwen': 'Qwen3 8B', 'Best Competitor': 'Llama 3.2 3B (fits, but 3B)', 'Verdict': 'Qwen3 8B wins — same VRAM, much larger model' },
          { 'VRAM Tier': '12 GB', 'Best Qwen': 'Qwen3-Coder 14B', 'Best Competitor': 'Llama 3.3 8B Instruct', 'Verdict': 'Qwen3-Coder 14B for coding; Llama 3.3 8B for general chat' },
          { 'VRAM Tier': '24 GB', 'Best Qwen': 'Qwen3-Coder 32B', 'Best Competitor': 'Llama 3.3 70B (offloaded)', 'Verdict': 'Qwen3-Coder 32B for code; Llama 3.3 70B if quality > speed' },
          { 'VRAM Tier': '48 GB+', 'Best Qwen': 'Qwen2.5-72B', 'Best Competitor': 'DeepSeek-V2.5 236B MoE', 'Verdict': 'DeepSeek needs ~130 GB RAM; Qwen2.5-72B is the practical 48 GB choice' },
        ],
        columns: ['VRAM Tier', 'Best Qwen', 'Best Competitor', 'Verdict'],
        tableFormat: true,
        content2: 'For a deeper head-to-head between DeepSeek and Qwen across coding, reasoning, and multilingual tasks, see [DeepSeek vs Qwen local comparison 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Chinese Users: Data Sovereignty and Local Deployment',
        content: [
          '**Running Qwen3 locally means zero data transfer outside your machine — no compliance exposure under China\'s Data Security Law (DSL) or the Cybersecurity Law.** Cloud-based LLM APIs require sending prompts to foreign servers, which creates cross-border data transfer risk under DSL Article 31.',
          'Qwen3 is trained by Alibaba\'s Qwen team on a predominantly Chinese and multilingual corpus. This makes it the strongest locally-deployable model for Simplified Chinese, Traditional Chinese, Classical Chinese, and mixed-language (Chinese/English) documents.',
          '**For enterprise deployments in China**: air-gapped Qwen3 setups (no internet at inference time) are fully compliant with CAC regulations on generative AI. The model runs entirely on local compute — the regulator\'s concern is training data and output moderation, not inference on offline hardware. See [running AI fully offline](/power-local-llm/local-ai-behind-firewall-offline-2026) for a complete air-gapped setup guide.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 runs completely offline after download — no data leaves your machine, eliminating cross-border data transfer risk under China\'s Data Security Law.' },
          { type: 'plain-terms', text: 'When you run Qwen3 locally, your prompts and documents never leave your computer. There is no cloud API call, no foreign server, and no data that regulators can intercept or audit.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Which Hardware Should You Buy for Qwen3 Deployment?',
        content: [
          '**Match your target Qwen tier to VRAM first, then buy the cheapest card that clears it — paying for more VRAM than your model needs is the most common overspend on this list.** The picks below map directly to the hardware table above: budget → RTX 4060, mid-range → RTX 4070 Super, high-end → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, always-on → a mini PC. Prices below reflect the 2026 GPU market — memory-chip shortages and AI-datacenter demand have pushed both new GPU and Apple memory pricing well above 2024 launch prices, so check the current listing before buying.',
        ],
        callouts: [
          { type: 'tip', text: 'Skip this section if you already own a GPU with 8 GB+ VRAM — run Qwen3 8B on what you have first. Only buy new hardware once you have hit that ceiling and want a bigger model.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Budget pick — Qwen3 8B, Qwen3-Coder 7B (5.5 GB VRAM)',
            verdict: 'The cheapest card on this list that clears the 5.5 GB Qwen3 8B requirement with headroom for context. Runs Qwen3-Coder 7B at ~55 tok/s — fast enough for interactive coding assist.',
            pros: [
              '5.5 GB VRAM requirement fits with room to spare for long-context KV cache',
              'Lowest price on this list — the right first GPU if you have never run a local LLM',
              '50–57 tok/s on 7B/8B models, on par with the pricier cards at this model size',
            ],
            cons: [
              'Caps out at Qwen3 8B / Qwen3-Coder 7B — no headroom to grow into 14B without a KV-cache squeeze',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: 'Check current price →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Mid-range pick — Qwen3 14B, Qwen3-Coder 14B (9.5 GB VRAM)',
            verdict: 'Runs Qwen3-Coder 14B (85.2% HumanEval) at 36–38 tok/s with 2–3 GB of VRAM left over for context — the tier where coding quality jumps noticeably over the 7B/8B models.',
            pros: [
              '9.5 GB model fits with 2–3 GB VRAM to spare — room for longer context windows',
              'HumanEval jumps from 75.6% (7B) to 85.2% (14B) — the clearest quality-per-dollar step up in the lineup',
              '~38 tok/s keeps interactive chat and code completion responsive',
            ],
            cons: [
              'Not enough VRAM for the 32B tier — plan to sell or repurpose it if you outgrow 14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '$650–735', label: 'Check current price →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (or used RTX 3090 24 GB)',
            tagline: 'High-end pick — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20.5 GB VRAM)',
            verdict: 'The 4090 delivers 27–28 tok/s on Qwen3-Coder 32B — real-time coding speed at 92.7% HumanEval. A used RTX 3090 has the same 24 GB VRAM and lands within ~15% of the 4090\'s inference speed for meaningfully less money if you can find a trusted used listing.',
            pros: [
              '24 GB VRAM covers every Qwen3 32B variant and Qwen 3.6 27B with room to spare',
              '27–28 tok/s on Qwen3-Coder 32B (92.7% HumanEval) — fast enough for real-time pair programming',
              'Used RTX 3090 is the value alternative: same VRAM ceiling, ~15% slower, meaningfully cheaper second-hand',
            ],
            cons: [
              'Highest upfront cost on this list — only justified once you actually need 32B-class quality',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '$2,300–2,800', label: 'Check current price →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (used)', productCategory: 'GPU', priceRange: '$1,050–1,300', label: 'See used listings →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Apple Silicon pick — Qwen3 32B (~22 tok/s, quiet and low-power)',
            verdict: 'Best value for running Qwen3 32B on unified memory — quiet, low power draw, no separate GPU to install. For Qwen2.5-72B you need the M2 Ultra 192 GB instead.',
            pros: [
              '48 GB unified memory clears the 20.5 GB Qwen3 32B requirement with room for other apps',
              'Silent operation and desktop-friendly power draw — no dedicated GPU cooling to manage',
              'One purchase covers OS, storage, and inference — no separate GPU/PSU/case build',
            ],
            cons: [
              '~22 tok/s on Qwen3 32B is noticeably slower than an RTX 4090\'s 27–28 tok/s',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CQSL8N8F', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: 'ca. $1,799–1,999', label: 'Check current price →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (or similar AMD Ryzen AI mini PC)',
            tagline: 'Always-on pick — Qwen3 8B on CPU + iGPU (~8–12 tok/s, under 35W)',
            verdict: 'Not for interactive use — this is for a Qwen3 8B instance you leave running 24/7 for background tasks, home automation, or a low-traffic API endpoint where power cost matters more than speed.',
            pros: [
              'Under 35W power draw — cheap to run continuously, unlike a desktop GPU rig',
              'Small form factor fits anywhere; no separate GPU to source or cool',
              'Handles Qwen3 8B without a discrete GPU at all',
            ],
            cons: [
              '8–12 tok/s is too slow for interactive chat — this is a background/API-only pick',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '$479–649', label: 'Check current price →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'What Are the Common Mistakes Running Qwen3 Locally?',
        items: [
          '**Using an untagged `ollama pull qwen2.5` command.** Without an explicit size tag (`:7b`, `:14b`, etc.), Ollama may resolve to a default size that changes between library updates. Always use explicit tags: `ollama pull qwen2.5:14b`.',
          '**Ignoring the context window size.** Qwen3 supports 128K context. Ollama\'s Modelfile spec defaults `num_ctx` to 2048, but the runtime actually picks a VRAM-tiered default instead — 4K under 24 GiB, 32K from 24–48 GiB, 256K above 48 GiB. Don\'t rely on either default: set `num_ctx` explicitly, e.g. add `--num-ctx 8192` (or higher) to the run command — otherwise the model silently truncates input.',
          '**Choosing Q2_K quantization for Chinese-language use.** At 2-bit precision, Qwen3\'s Chinese output becomes noticeably degraded — character substitutions increase. Use Q4_K_M as the minimum for any Chinese-language work.',
          '**Running the 32B model with too little VRAM.** If your GPU has 16 GB and the model needs 20.5 GB, Ollama offloads layers to system RAM. The model runs but at 3–5 tok/s — unusable for interactive use. Check the hardware table above and pick a model that fits your VRAM.',
          '**Using the wrong sub-family for coding.** Qwen3 8B (general) scores 57.3% on HumanEval. Qwen3-Coder 7B scores 75.6% on the same benchmark — a 32% relative improvement. If your use case is code, always use the Coder variant of the same size.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'Next steps',
        items: [
          '[Best CPU-Only LLMs](/local-llms/best-cpu-only-llm) — No GPU? See which Qwen3 sizes run on CPU only →',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — Confused by Q4_K_M vs Q8? Quantization explained →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How much VRAM do I need to run Qwen3 8B locally?', a: 'Qwen3 8B Q4_K_M requires 5.5 GB of VRAM. An RTX 3060 6 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it. At 8 GB VRAM you have headroom for context and system RAM.' },
          { q: 'What is the best Qwen model for coding locally?', a: 'Qwen3-Coder 32B is the best locally runnable coding model — it scores 92.7% on HumanEval and needs a 24 GB GPU (RTX 3090 or RTX 4090). If your VRAM is 12 GB or less, use Qwen3-Coder 14B (HumanEval 85.2%, 9.5 GB VRAM).' },
          { q: 'How does Qwen compare to DeepSeek for local deployment?', a: 'Qwen2.5-72B and DeepSeek-V2.5 are competitive on general tasks, but Qwen uses a dense architecture that fits on consumer hardware. DeepSeek-V2.5 is a 236B MoE model — it requires ~130 GB RAM at Q4, unreachable without server-grade hardware. For VRAM under 48 GB, Qwen3 is the practical choice.' },
          { q: 'Can I run Qwen on a Mac?', a: 'Yes. Apple Silicon uses unified memory — an M2 Pro 32 GB runs Qwen3 14B at ~32 tok/s. An M3 Max 64 GB handles Qwen3 32B at ~22 tok/s. Use the Ollama macOS app or LM Studio for the simplest setup.' },
          { q: 'What Ollama command do I use for Qwen?', a: 'For the flagship, run `ollama run qwen3.6:27b` (~17 GB VRAM). For Qwen3, use `ollama pull qwen3:8b`. For Qwen2.5, use `ollama pull qwen2.5:7b` for 7B, `ollama pull qwen2.5:14b` for 14B, `ollama pull qwen2.5:32b` for 32B, or `ollama pull qwen2.5-coder:32b` for the coding variant. Always use explicit size tags.' },
          { q: 'Is Qwen good for Chinese-language tasks?', a: 'Qwen3 was pretrained on a large Chinese corpus and natively supports Simplified Chinese, Traditional Chinese, Japanese, Korean, Arabic, and 24 more languages. It consistently outperforms Llama 3.3 and Mistral on Chinese reading comprehension and generation.' },
          { q: 'What quantization should I use for Qwen3?', a: 'Q4_K_M is the recommended default — it cuts VRAM by ~55% versus FP16 with less than 1% quality loss on benchmarks. Use Q8_0 if you have spare VRAM and want near-FP16 quality. Avoid Q2_K for Chinese-language use.' },
          { q: 'Does Qwen2-VL work for Chinese document OCR?', a: 'Yes — Qwen2-VL 7B is the strongest local vision model for CJK document OCR. It runs in ~6 GB VRAM via `ollama pull qwen2-vl:7b` and reads Chinese, Japanese, and Korean text at up to 4096×4096 resolution. See the full guide at /local-llms/run-qwen-vl-locally-2026.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        links: [
          { url: '/local-llms/run-qwen-locally-guide-2026', title: 'How to Run Qwen 3 Locally in 2026', description: 'Single-model setup guide for Qwen 3.6 27B with Ollama and LM Studio — the fastest path to a working Qwen instance.' },
          { url: '/local-llms/run-qwen-vl-locally-2026', title: 'Run Qwen2-VL Locally 2026', description: 'Full guide to Qwen2-VL — CJK document OCR, image Q&A, and multilingual screenshot reading on consumer hardware.' },
          { url: '/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Head-to-head benchmark comparison of Qwen 3.6 27B, Llama 4 Scout, and Mistral Small 3.1 on MMLU, SWE-bench, and MATH.' },
          { url: '/local-llms/llm-quantization-explained', title: 'LLM Quantization Explained', description: 'What Q4_K_M, Q8_0, and IQ4_XS mean — how they affect VRAM, speed, and output quality.' },
          { url: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen Local Comparison 2026', description: 'Full head-to-head: DeepSeek-V2.5 vs Qwen3 on coding, reasoning, Chinese, and creative writing — with Mac vs NVIDIA breakdowns.' },
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Guía de despliegue local de Qwen 2026: Qwen 3.6 27B, Coder y VL en cada nivel de hardware',
    seoTitle: 'Qwen 3.6 27B en local 2026: Coder, VL y niveles de hardware',
    intro: 'Qwen 3.6 27B es la nueva recomendación insignia para despliegue local — un modelo denso con licencia Apache 2.0 y ventana de contexto de 256K que funciona con ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b`. Qwen3 8B funciona con solo 5,5 GB de VRAM mediante Ollama — un único comando, sin configuración. Qwen3-Coder 32B alcanza el 92,7 % en HumanEval. Qwen2-VL 7B es el modelo de visión local líder para OCR de documentos en chino y japonés. Esta guía cubre la familia completa de modelos Qwen: qué modelo ejecutar en cada nivel de hardware, configuración con Ollama y LM Studio, recomendaciones de cuantización, datos de benchmarks y cómo se compara Qwen con DeepSeek y Llama en hardware de consumo en 2026.',
    metaDescription: 'Ejecuta Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen3-Coder y Qwen2-VL en local en 2026. Requisitos de VRAM, configuración Ollama y LM Studio y guía por nivel de hardware.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-es.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores, investigadores y usuarios con enfoque en privacidad que quieren ejecutar la familia completa de modelos Qwen en local',
    primaryTerm: 'despliegue local de Qwen',
    affiliateDisclosure: true,
    ctaText: 'Despacha entre Qwen3, DeepSeek y Llama desde una sola interfaz →',
    ctaButton: 'Prueba PromptQuorum gratis',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**La nueva recomendación insignia es Qwen 3.6 27B — un modelo denso con licencia Apache 2.0 y ventana de contexto de 256K que funciona con ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b`.** Para una opción más ligera, Qwen3 8B se instala con Ollama y `ollama pull qwen2.5:7b` — 5,5 GB de VRAM, 57 tokens/seg en una RTX 3060. Para tareas de código usa Qwen2.5-Coder; para OCR de documentos en chino/japonés usa Qwen2-VL. ¿Ya conoces tu presupuesto de VRAM? Ve directamente a [qué GPU o Mac comprar para cada nivel de Qwen](#affiliate-picks).',
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Descripción general de la familia Qwen3', anchor: '#model-family' },
      { label: 'Requisitos de hardware por tamaño de modelo', anchor: '#hardware-tiers' },
      { label: 'Configuración con Ollama', anchor: '#ollama-setup' },
      { label: 'Configuración con LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Cuantización: qué formato elegir', anchor: '#quantization-guide' },
      { label: 'Rendimiento en benchmarks en hardware de consumo', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: 'Usuarios hispanohablantes: soberanía de datos', anchor: '#regional-context' },
      { label: 'Recomendaciones de hardware por presupuesto', anchor: '#affiliate-picks' },
      { label: 'Errores frecuentes', anchor: '#common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'La presentación a continuación cubre: la nueva recomendación insignia Qwen 3.6 27B (contexto 256K, ~17 GB en Q4_K_M), la familia completa de modelos Qwen (Qwen3 0.6B–32B, Qwen2.5 7B–72B), los requisitos de VRAM por nivel de hardware, los datos de benchmark de Qwen3-Coder 32B y un cuadro de decisión Qwen vs DeepSeek vs Llama. Descárgala como tarjeta de referencia de despliegue de Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guía de despliegue local de Qwen 2026: Qwen 3.6 27B, Coder y VL en cada nivel de hardware',
      description: 'Guía completa para desplegar la familia de modelos Qwen en local — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder y VL, requisitos de VRAM, configuración con Ollama y LM Studio, cuantización, benchmarks y recomendaciones de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'es',
      url: 'https://www.promptquorum.com/es/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuánta VRAM necesito para ejecutar Qwen3 8B en local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M requiere 5,5 GB de VRAM. Una NVIDIA RTX 3060 6 GB, RTX 4060 o un chip Apple M con 8 GB de memoria unificada son suficientes.' } },
        { '@type': 'Question', name: '¿Cuál es el mejor modelo Qwen para programación en local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B es el mejor modelo de programación ejecutable en local — alcanza el 92,7 % en HumanEval y necesita una GPU de 24 GB (RTX 3090 o RTX 4090). Con 12 GB de VRAM o menos, usa Qwen3-Coder 14B (HumanEval 85,2 %, 9,5 GB de VRAM).' } },
        { '@type': 'Question', name: '¿Cómo se compara Qwen con DeepSeek para el despliegue local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 utiliza una arquitectura densa que cabe en hardware de consumo. DeepSeek-V2.5 es un modelo MoE de 236B — necesita aproximadamente 130 GB de RAM en Q4, inasequible sin GPU de servidor. Con menos de 48 GB de VRAM, Qwen3 es la opción práctica.' } },
        { '@type': 'Question', name: '¿Puedo ejecutar Qwen en un Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Apple Silicon usa memoria unificada — un M2 Pro 32 GB ejecuta Qwen3 14B a ~32 tokens/seg. Un M3 Max 64 GB maneja Qwen3 32B a ~22 tokens/seg.' } },
        { '@type': 'Question', name: '¿Qué comando de Ollama uso para Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Para la nueva insignia, ejecuta `ollama run qwen3.6:27b` (~17 GB de VRAM). Para Qwen3, usa `ollama pull qwen3:8b`. Para Qwen2.5, usa `ollama pull qwen2.5:7b` para 7B, `ollama pull qwen2.5:14b` para 14B, `ollama pull qwen2.5:32b` para 32B, o `ollama pull qwen2.5-coder:32b` para la variante de programación. Siempre usa etiquetas de tamaño explícitas.' } },
        { '@type': 'Question', name: '¿Qwen es adecuado para tareas en idioma chino?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano, árabe y 24 idiomas más. Supera sistemáticamente a Llama 3.3 y Mistral en comprensión y generación en chino.' } },
        { '@type': 'Question', name: '¿Qué cuantización debo usar para Qwen3?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M es el valor por defecto recomendado — reduce la VRAM aproximadamente un 55 % respecto a FP16 con menos del 1 % de pérdida de calidad en los benchmarks. Usa Q8_0 si tienes VRAM de sobra y quieres calidad cercana a FP16. Evita Q2_K para uso en chino.' } },
        { '@type': 'Question', name: '¿Funciona Qwen2-VL para OCR de documentos en chino?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — Qwen2-VL 7B es el modelo de visión local más potente para OCR de documentos CJK. Funciona con ~6 GB de VRAM mediante `ollama pull qwen2-vl:7b` y lee texto en chino, japonés y coreano a resoluciones de hasta 4096×4096.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B es la nueva recomendación insignia**: denso, Apache 2.0, contexto 256K, ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b` (lanzado en abril de 2026).',
          '**Qwen3 8B funciona con 5,5 GB de VRAM** — un solo comando `ollama pull qwen2.5:7b` y ya está en marcha a 57 tokens/seg en una RTX 3060.',
          '**Cuatro subfamilias prácticas**: Qwen3 (general, modo de razonamiento), Qwen2.5 (general, la más probada), Qwen2.5-Coder (programación, 92,7 % en HumanEval en 32B), Qwen2-VL (visión, mejor OCR CJK local).',
          '**Arquitectura densa = compatible con hardware de consumo**: a diferencia del modelo MoE de 236B de DeepSeek (~130 GB de RAM), Qwen2.5-72B cabe en 46 GB de VRAM en dos RTX 3090.',
          '**Multilingüe nativo**: preentrenado en chino, japonés, coreano, árabe, alemán, francés y 23 idiomas más — Qwen3 supera sistemáticamente a Llama 3.3 en tareas CJK.',
          '**Q4_K_M es la cuantización correcta** para la mayoría de usuarios: ~55 % de reducción de VRAM, menos del 1 % de pérdida de calidad en los benchmarks.',
          '**Decisión de hardware**: 12 GB de VRAM → modelo 14B; 24 GB → 32B; 48 GB+ (dos GPUs o Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 cubre tres subfamilias de despliegue local — uso general (7B–72B), programación (Coder 7B–32B) y visión (VL 7B–72B) — todas ejecutables mediante Ollama o LM Studio.' },
          { type: 'plain-terms', text: 'Ejecutar un modelo en local significa que la IA corre en tu propio ordenador en lugar de en un servidor en la nube. Ningún dato sale de tu máquina y no hay coste por token después de adquirir el hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Descripción general de la familia de modelos Qwen',
        content: [
          '**La gama Qwen abarca ahora cinco opciones prácticas: la insignia Qwen 3.6 27B, la familia Qwen3 más reciente, Qwen2.5 de razonamiento general, Qwen2.5-Coder y Qwen2-VL para visión** — cada una con múltiples opciones de tamaño. Todos son modelos de pesos abiertos publicados por el equipo Qwen de Alibaba en Hugging Face bajo la licencia Apache 2.0.',
          'Elige primero la subfamilia y luego el tamaño que se ajuste a tu VRAM. Es habitual combinar subfamilias: Qwen2.5-Coder 14B para autocompletar código y Qwen3 8B o Qwen 3.6 27B para resumir documentos.',
        ],
        rows: [
          { 'Subfamilia': 'Qwen3', 'Tamaños disponibles': '0.6B, 1.7B, 4B, 8B, 14B, 32B', 'Uso principal': 'Razonamiento general, modo de razonamiento, multilingüe, tareas agénticas', 'Prefijo de etiqueta Ollama': 'qwen3:' },
          { 'Subfamilia': 'Qwen2.5', 'Tamaños disponibles': '7B, 14B, 32B, 72B', 'Uso principal': 'Razonamiento general, tareas en chino/multilingüe, RAG', 'Prefijo de etiqueta Ollama': 'qwen2.5:' },
          { 'Subfamilia': 'Qwen2.5-Coder', 'Tamaños disponibles': '7B, 14B, 32B', 'Uso principal': 'Generación de código, depuración, HumanEval, SWE-bench', 'Prefijo de etiqueta Ollama': 'qwen2.5-coder:' },
          { 'Subfamilia': 'Qwen2-VL', 'Tamaños disponibles': '2B, 7B, 72B', 'Uso principal': 'OCR de documentos, preguntas sobre imágenes, extracción de texto CJK', 'Prefijo de etiqueta Ollama': 'qwen2-vl:' },
        ],
        columns: ['Subfamilia', 'Tamaños disponibles', 'Uso principal', 'Prefijo de etiqueta Ollama'],
        tableFormat: true,
        note: 'Qwen 3.6 27B (lanzado en abril de 2026) es la nueva recomendación insignia — un modelo denso con ventana de contexto de 256K que funciona con ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b`. Qwen2.5 sigue siendo la familia más probada, con la cobertura más amplia en Ollama y GGUF a mediados de 2026. Consulta [los mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) para una comparación más amplia.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Requisitos de hardware por tamaño de modelo',
        content: [
          '**Elige primero tu nivel de VRAM y luego el modelo Qwen3 más grande que quepa.** Q4_K_M es la cuantización estándar usada en todas las cifras a continuación — ofrece la mejor relación tamaño/calidad para Ollama y LM Studio.',
        ],
        rows: [
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~57 tok/s' },
          { 'Modelo': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~55 tok/s' },
          { 'Modelo': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 GB', 'GPU mínima': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidad (RTX 4060)': '~38 tok/s' },
          { 'Modelo': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~38 tok/s' },
          { 'Modelo': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~36 tok/s' },
          { 'Modelo': 'Qwen3 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~28 tok/s' },
          { 'Modelo': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~27 tok/s' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'GPU mínima': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Velocidad (RTX 4090)': '~24 tok/s' },
          { 'Modelo': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidad (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidad (RTX 3060)'],
        tableFormat: true,
        note: 'Las cifras de VRAM corresponden a archivos GGUF Q4_K_M de la biblioteca de Ollama. Añade 1–2 GB para la caché KV con un contexto de 4K. Si la GPU tiene menos VRAM de la que necesita el modelo, Ollama descarga capas automáticamente a la RAM del sistema — funciona, pero reduce la velocidad significativamente.',
        callouts: [
          { type: 'tip', text: '¿Ya identificaste tu nivel de VRAM? Consulta [exactamente qué GPU o Mac comprar para ese nivel](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M4 Pro o doble GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-es.webp',
        imageCaption: 'Requisitos de VRAM de Qwen3 por tamaño de modelo (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración con Ollama',
        content: [
          '**Ollama es la forma más rápida de ejecutar cualquier modelo Qwen3 en local** — gestiona la descarga del modelo, la cuantización GGUF y la API local en `localhost:11434` sin ninguna configuración. Instálalo desde [ollama.com](https://ollama.com/download). Si no has usado Ollama antes, lee primero [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar Ollama', whyItMatters: 'Disponible para macOS, Linux (instalación en una línea) y Windows. No hay que configurar drivers de GPU — Ollama detecta CUDA, ROCm y Metal automáticamente.' },
          { title: 'Descargar el modelo con una etiqueta de tamaño explícita', whyItMatters: 'Especifica siempre el tamaño: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. El `qwen2.5` sin etiquetar se resuelve al modelo 7B, pero puede cambiar entre versiones de Ollama.' },
          { title: 'Ejecutar el modelo', whyItMatters: '`ollama run qwen2.5:7b` abre un chat interactivo. Escribe tu prompt y pulsa Enter. Cierra con `/bye`.' },
          { title: 'Ajustar la ventana de contexto si es necesario', whyItMatters: 'Qwen3 soporta por defecto un contexto de 32K en Ollama. Para usar un contexto de 128K en un modelo 7B, ejecuta `ollama run qwen2.5:7b --num-ctx 131072`. Esto requiere más VRAM.' },
          { title: 'Probar el endpoint de la API', whyItMatters: 'Ollama expone una API compatible con OpenAI. Aplicaciones como PromptQuorum, Continue.dev y Open WebUI se conectan directamente a `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Instalar Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: descarga el .dmg desde ollama.com o:
brew install ollama

# Descargar modelos — usa etiquetas explícitas
ollama pull qwen3.6:27b          # insignia, contexto 256K (~17 GB)
ollama pull qwen3:8b             # Qwen3 uso general 8B (~5,5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 uso general 7B (~5,5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 uso general 14B (~9,5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 uso general 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20,5 GB)
ollama pull qwen2-vl:7b          # visión 7B (~6,2 GB)

# Ejecutar en modo interactivo
ollama run qwen2.5:7b

# Probar la API compatible con OpenAI
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Hola"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuración con LM Studio',
        content: [
          '**LM Studio ofrece una interfaz gráfica para Qwen3 sin necesidad de comandos en terminal.** Descárgalo desde [lmstudio.ai](https://lmstudio.ai) o consulta [cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio). Funciona en macOS, Windows y Linux.',
        ],
        numberedItems: [
          { title: 'Abrir el navegador de modelos', whyItMatters: 'Busca "Qwen3" o "Qwen Coder" para explorar todos los builds GGUF disponibles. Filtra por Q4_K_M para la relación calidad/tamaño recomendada.' },
          { title: 'Descargar un build GGUF', whyItMatters: 'Selecciona la variante Q4_K_M. LM Studio muestra el tamaño del archivo antes de la descarga — confirma que se ajusta a la VRAM disponible.' },
          { title: 'Cargar el modelo y empezar a chatear', whyItMatters: 'Haz clic en el modelo en la barra lateral izquierda para cargarlo en memoria. La asignación de capas a la GPU es automática en función de la VRAM detectada.' },
          { title: 'Iniciar el servidor local', whyItMatters: '"Iniciar servidor" expone un endpoint compatible con OpenAI en `localhost:1234`. Tus aplicaciones y scripts se conectan a él como si fuera la API de OpenAI.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Cuantización: qué formato elegir',
        content: [
          '**Q4_K_M es el valor por defecto correcto para Qwen3 en hardware de consumo.** Reduce la VRAM entre un 55–60 % respecto a FP16 con menos del 1 % de degradación en MMLU y HumanEval. Otros formatos tienen casos de uso específicos:',
        ],
        items: [
          '**Q4_K_M** (recomendado): ~5,5 GB para 7B. La mejor relación calidad por GB. Empieza por este.',
          '**Q8_0**: ~8,5 GB para 7B. Calidad cercana a FP16; úsalo si tienes VRAM de sobra y quieres la máxima precisión.',
          '**Q5_K_M**: ~6,5 GB para 7B. Mejora marginal sobre Q4_K_M — elígelo solo si la calidad de salida de Q4_K_M es visiblemente deficiente para tu tarea.',
          '**Q2_K**: ~3 GB para 7B. El archivo más pequeño, pero la calidad de salida en chino se degrada notablemente — evítalo con Qwen3 si el chino es parte de tu caso de uso.',
          '**IQ4_XS**: ~4,8 GB para 7B. Una cuantización imatrix más reciente que supera la calidad de Q4_K_M con un tamaño ligeramente menor — disponible en versiones recientes de llama.cpp y LM Studio 0.3+.',
        ],
        note: 'Para una explicación completa sobre cuantización, consulta [cuantización de LLM explicada](/es/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M es la mejor cuantización de Qwen3 para la mayoría de usuarios: reduce la VRAM un 55 % con menos del 1 % de pérdida de calidad respecto a FP16.' },
          { type: 'plain-terms', text: 'La cuantización comprime los números del modelo de 16 bits a 4 bits, reduciendo aproximadamente a la mitad el tamaño del archivo y la VRAM necesaria. Es como pasar de TIFF a JPEG de alta calidad — archivo más pequeño, resultado casi idéntico para la mayoría de usos.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Rendimiento en benchmarks en hardware de consumo',
        content: [
          '**Qwen3 32B Q4_K_M en una RTX 4090 entrega 28 tokens/seg — velocidad suficiente para asistencia de código en tiempo real.** Las puntuaciones a continuación corresponden a builds GGUF Q4_K_M probados en Ollama. Las puntuaciones FP16 son un 1–2 % mayores.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Velocidad (RTX 3060 12 GB)': '57 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Velocidad (RTX 4070 12 GB)': '38 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Velocidad (RTX 4090 24 GB)': '28 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Velocidad (2×RTX 3090)': '12 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Velocidad (RTX 3060 12 GB)': '55 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Velocidad (RTX 4070 12 GB)': '36 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Velocidad (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidad (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '¿Quieres esa puntuación del 92,7 % en HumanEval a 27 tok/s? Consulta la [GPU de 24 GB que ejecuta Qwen3-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-es.webp',
        imageCaption: 'Puntuaciones de benchmark de Qwen3 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: qué ejecutar en local',
        content: [
          '**Qwen3 gana en tareas en chino y eficiencia de VRAM; DeepSeek-V2.5 gana en razonamiento a gran escala pero es impráctico en hardware de consumo; Llama 3.3 70B es la mejor opción en una sola GPU si prefieres el modelo abierto de Meta.** La tabla a continuación compara las opciones prácticas en cada nivel de VRAM.',
        ],
        rows: [
          { 'Nivel de VRAM': '6 GB', 'Mejor Qwen': 'Qwen3 8B', 'Mejor competidor': 'Llama 3.2 3B (cabe, pero solo 3B)', 'Veredicto': 'Qwen3 8B gana — misma VRAM, modelo mucho mayor' },
          { 'Nivel de VRAM': '12 GB', 'Mejor Qwen': 'Qwen3-Coder 14B', 'Mejor competidor': 'Llama 3.3 8B Instruct', 'Veredicto': 'Qwen3-Coder 14B para código; Llama 3.3 8B para chat general' },
          { 'Nivel de VRAM': '24 GB', 'Mejor Qwen': 'Qwen3-Coder 32B', 'Mejor competidor': 'Llama 3.3 70B (con descarga)', 'Veredicto': 'Qwen3-Coder 32B para código; Llama 3.3 70B si calidad > velocidad' },
          { 'Nivel de VRAM': '48 GB+', 'Mejor Qwen': 'Qwen2.5-72B', 'Mejor competidor': 'DeepSeek-V2.5 236B MoE', 'Veredicto': 'DeepSeek necesita ~130 GB de RAM; Qwen2.5-72B es la opción práctica para 48 GB' },
        ],
        columns: ['Nivel de VRAM', 'Mejor Qwen', 'Mejor competidor', 'Veredicto'],
        tableFormat: true,
        content2: 'Para una comparación más detallada entre DeepSeek y Qwen en programación, razonamiento y tareas multilingüe, consulta [comparación local DeepSeek vs Qwen 2026](/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Usuarios hispanohablantes: soberanía de datos y despliegue local',
        content: [
          '**Ejecutar Qwen3 en local significa que ningún dato sale de tu máquina — sin transferencia a servidores en la nube, sin exposición bajo el RGPD o leyes de protección de datos latinoamericanas.** Las API de LLM en la nube exigen enviar prompts a servidores externos, lo que activa los requisitos de tratamiento de datos y posibles transferencias internacionales.',
          'Qwen3 fue entrenado por el equipo Qwen de Alibaba sobre un corpus predominantemente chino y multilingüe. Es el modelo con despliegue local más potente para documentos en chino simplificado, chino tradicional y textos mixtos (chino/español/inglés).',
          '**Para despliegues en empresas hispanohablantes**: una configuración de Qwen3 sin conexión a internet durante la inferencia es plenamente compatible con los marcos regulatorios de España (RGPD/AEPD), México (LFPDPPP), Argentina (Ley 25.326) y otros países hispanohablantes. El modelo corre íntegramente en hardware local — ningún tercero accede a los datos de entrada o salida. Consulta [ejecutar IA completamente sin conexión](/es/power-local-llm/local-ai-behind-firewall-offline-2026) para una guía completa de configuración aislada.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 funciona completamente sin conexión después de la descarga — ningún dato sale de tu máquina, eliminando el riesgo de transferencia transfronteriza de datos bajo el RGPD y las leyes latinoamericanas.' },
          { type: 'plain-terms', text: 'Cuando ejecutas Qwen3 en local, tus prompts y documentos nunca abandonan tu ordenador. No hay llamadas a una API en la nube, no hay servidor externo y no hay datos a los que reguladores o terceros puedan acceder.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '¿Qué hardware deberías comprar para desplegar Qwen3?',
        content: [
          '**Primero haz coincidir tu nivel de Qwen objetivo con la VRAM necesaria y luego compra la tarjeta más barata que la cubra — pagar por más VRAM de la que tu modelo necesita es el sobregasto más habitual de esta lista.** Las recomendaciones siguientes corresponden directamente a la tabla de hardware anterior: económico → RTX 4060, gama media → RTX 4070 Super, gama alta → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, uso continuo → un mini PC. Los precios siguientes reflejan el mercado de GPU de 2026 — la escasez de chips de memoria y la demanda de los centros de datos de IA han encarecido tanto las GPU nuevas como las configuraciones de memoria de Apple; comprueba el precio actual antes de comprar.',
        ],
        callouts: [
          { type: 'tip', text: 'Sáltate esta sección si ya tienes una GPU con 8 GB o más de VRAM — ejecuta primero Qwen3 8B en lo que ya tienes. Compra hardware nuevo solo cuando llegues a ese límite y quieras un modelo más grande.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Opción económica — Qwen3 8B, Qwen3-Coder 7B (5,5 GB de VRAM)',
            verdict: 'La tarjeta más barata de esta lista que cubre el requisito de 5,5 GB de Qwen3 8B con margen para el contexto. Ejecuta Qwen3-Coder 7B a ~55 tok/s — suficientemente rápido para asistencia de código interactiva.',
            pros: [
              'El requisito de 5,5 GB de VRAM se cubre con margen para caché KV de contexto largo',
              'El precio más bajo de esta lista — la GPU adecuada para empezar si nunca has ejecutado un LLM local',
              '50–57 tok/s en modelos 7B/8B, a la par con tarjetas más caras en este tamaño de modelo',
            ],
            cons: [
              'Se queda en Qwen3 8B / Qwen3-Coder 7B — sin margen para crecer a 14B sin apretar la caché KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.es/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '470–600 €', label: 'Consultar precio actual →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Opción de gama media — Qwen3 14B, Qwen3-Coder 14B (9,5 GB de VRAM)',
            verdict: 'Ejecuta Qwen3-Coder 14B (85,2 % en HumanEval) a 36–38 tok/s con 2–3 GB de VRAM libres para el contexto — el nivel donde la calidad de código da un salto notable respecto a los modelos 7B/8B.',
            pros: [
              'El modelo de 9,5 GB cabe con 2–3 GB de VRAM de margen — espacio para ventanas de contexto más largas',
              'HumanEval sube del 75,6 % (7B) al 85,2 % (14B) — el salto de calidad por precio más claro de la gama',
              '~38 tok/s mantienen ágil el chat interactivo y el autocompletado de código',
            ],
            cons: [
              'No hay VRAM suficiente para el nivel 32B — plantea vender o reutilizar la tarjeta si superas el 14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.es/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '1.090–1.235 €', label: 'Consultar precio actual →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (o RTX 3090 24 GB de segunda mano)',
            tagline: 'Opción de gama alta — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20,5 GB de VRAM)',
            verdict: 'La 4090 entrega 27–28 tok/s en Qwen3-Coder 32B — velocidad de código en tiempo real con un 92,7 % en HumanEval. Una RTX 3090 de segunda mano tiene la misma VRAM de 24 GB y se queda a un ~15 % de la velocidad de inferencia de la 4090, por bastante menos dinero si encuentras un anuncio de confianza.',
            pros: [
              '24 GB de VRAM cubren todas las variantes de Qwen3 32B y Qwen 3.6 27B con margen',
              '27–28 tok/s en Qwen3-Coder 32B (92,7 % en HumanEval) — suficientemente rápido para programación en pareja en tiempo real',
              'La RTX 3090 de segunda mano es la alternativa económica: mismo límite de VRAM, ~15 % más lenta, bastante más barata de segunda mano',
            ],
            cons: [
              'El coste inicial más alto de esta lista — solo se justifica cuando realmente necesitas calidad de nivel 32B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.es/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '3.390–3.490 €', label: 'Consultar precio actual →' },
              { url: 'https://www.ebay.es/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (segunda mano)', productCategory: 'GPU', priceRange: '1.400–1.750 €', label: 'Ver anuncios de segunda mano →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Opción Apple Silicon — Qwen3 32B (~22 tok/s, silencioso y de bajo consumo)',
            verdict: 'La mejor relación calidad/precio para ejecutar Qwen3 32B con memoria unificada — silencioso, bajo consumo eléctrico, sin GPU separada que instalar. Para Qwen2.5-72B necesitas en su lugar el M2 Ultra 192 GB.',
            pros: [
              '48 GB de memoria unificada cubren el requisito de 20,5 GB de Qwen3 32B con espacio para otras aplicaciones',
              'Funcionamiento silencioso y consumo adecuado para escritorio — sin gestión de refrigeración dedicada de GPU',
              'Una sola compra cubre sistema operativo, almacenamiento e inferencia — sin montaje aparte de GPU/fuente/caja',
            ],
            cons: [
              '~22 tok/s en Qwen3 32B es notablemente más lento que los 27–28 tok/s de una RTX 4090',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/es/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '1.850–1.950 €', label: 'Consultar precio actual →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (o mini PC AMD Ryzen AI similar)',
            tagline: 'Opción para uso continuo — Qwen3 8B en CPU + iGPU (~8–12 tok/s, menos de 35 W)',
            verdict: 'No pensado para uso interactivo — sirve para una instancia de Qwen3 8B que dejas encendida 24/7 para tareas en segundo plano, domótica o un endpoint de API de bajo tráfico donde el coste eléctrico importa más que la velocidad.',
            pros: [
              'Consumo por debajo de 35 W — barato de mantener encendido de forma continua, a diferencia de una torre de escritorio con GPU',
              'Formato compacto que cabe en cualquier sitio; sin GPU separada que conseguir ni refrigerar',
              'Ejecuta Qwen3 8B sin ninguna GPU dedicada',
            ],
            cons: [
              '8–12 tok/s es demasiado lento para chat interactivo — una opción solo para segundo plano/API',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.es/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '650–880 €', label: 'Consultar precio actual →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes al ejecutar Qwen3 en local',
        items: [
          '**Usar el comando `ollama pull qwen2.5` sin etiqueta de tamaño.** Sin una etiqueta de tamaño explícita (`:7b`, `:14b`, etc.), Ollama puede resolver al tamaño predeterminado, que puede cambiar entre actualizaciones de la biblioteca. Usa siempre etiquetas explícitas: `ollama pull qwen2.5:14b`.',
          '**Ignorar el tamaño de la ventana de contexto.** Qwen3 soporta un contexto de 128K. La especificación del Modelfile de Ollama establece `num_ctx` en 2048 por defecto, pero en tiempo de ejecución se aplica un valor predeterminado escalonado según la VRAM: 4K por debajo de 24 GiB, 32K entre 24 y 48 GiB, y 256K por encima de 48 GiB. No confíes en ninguno de los dos valores predeterminados: configura `num_ctx` explícitamente, por ejemplo añadiendo `--num-ctx 8192` (o más) al comando de ejecución — de lo contrario el modelo trunca la entrada en silencio.',
          '**Elegir cuantización Q2_K para uso en chino.** A 2 bits de precisión, la salida en chino de Qwen3 se degrada notablemente. Usa Q4_K_M como mínimo para cualquier trabajo en chino.',
          '**Ejecutar el modelo 32B con poca VRAM.** Si la GPU tiene 16 GB y el modelo necesita 20,5 GB, Ollama descarga capas a la RAM del sistema. El modelo funciona pero a 3–5 tok/s — inutilizable para uso interactivo. Consulta la tabla de hardware y elige un modelo que quepa en tu VRAM.',
          '**Usar la subfamilia incorrecta para programación.** Qwen3 8B (uso general) puntúa 57,3 % en HumanEval. Qwen3-Coder 7B puntúa 75,6 % en el mismo benchmark — una mejora relativa del 32 %. Si tu caso de uso es código, usa siempre la variante Coder del mismo tamaño.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'Próximos pasos',
        items: [
          '[Mejores LLM solo CPU](/es/local-llms/best-cpu-only-llm) — ¿Sin GPU? Descubre qué tamaños de Qwen3 funcionan en CPU →',
          '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) — ¿Confundido con Q4_K_M vs Q8? Cuantización explicada →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuánta VRAM necesito para ejecutar Qwen3 8B en local?', a: 'Qwen3 8B Q4_K_M requiere 5,5 GB de VRAM. Una RTX 3060 6 GB, RTX 4060 o chip Apple M con 8 GB de memoria unificada son suficientes.' },
          { q: '¿Cuál es el mejor modelo Qwen para programación en local?', a: 'Qwen3-Coder 32B — 92,7 % en HumanEval, necesita GPU de 24 GB. Con 12 GB de VRAM o menos: Qwen3-Coder 14B (85,2 %, 9,5 GB de VRAM).' },
          { q: '¿Cómo se compara Qwen con DeepSeek para el despliegue local?', a: 'Qwen3 usa arquitectura densa compatible con hardware de consumo. DeepSeek-V2.5 es un modelo MoE de 236B que necesita ~130 GB de RAM — inviable sin GPU de servidor.' },
          { q: '¿Puedo ejecutar Qwen en un Mac?', a: 'Sí. M2 Pro 32 GB ejecuta Qwen3 14B a ~32 tok/s. M3 Max 64 GB maneja Qwen3 32B a ~22 tok/s.' },
          { q: '¿Qué comando de Ollama uso para Qwen?', a: 'Para la insignia, `ollama run qwen3.6:27b` (~17 GB de VRAM). Para Qwen3, `ollama pull qwen3:8b`. Para Qwen2.5, `ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, o `qwen2.5-coder:32b` para la variante de programación. Usa siempre etiquetas de tamaño explícitas.' },
          { q: '¿Qwen es adecuado para tareas en chino?', a: 'Sí. Qwen3 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano y 24 idiomas más.' },
          { q: '¿Qué cuantización debo usar para Qwen3?', a: 'Q4_K_M por defecto — reduce la VRAM ~55 % respecto a FP16 con menos del 1 % de pérdida de calidad. Evita Q2_K para uso en chino.' },
          { q: '¿Funciona Qwen2-VL para OCR de documentos en chino?', a: 'Sí — `ollama pull qwen2-vl:7b`, ~6 GB de VRAM, lee texto CJK a resoluciones de hasta 4096×4096 píxeles.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        links: [
          { url: '/es/local-llms/run-qwen-locally-guide-2026', title: 'Cómo ejecutar Qwen 3 en local en 2026', description: 'Guía de configuración de un solo modelo para Qwen 3.6 27B con Ollama y LM Studio — la forma más rápida de tener una instancia de Qwen funcionando.' },
          { url: '/es/local-llms/run-qwen-vl-locally-2026', title: 'Ejecutar Qwen2-VL en local en 2026', description: 'Guía completa de Qwen2-VL — OCR de documentos CJK, preguntas sobre imágenes y lectura multilingüe de capturas de pantalla en hardware de consumo.' },
          { url: '/es/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Comparación de benchmarks de Qwen 3.6 27B, Llama 4 Scout y Mistral Small 3.1 en MMLU, SWE-bench y MATH.' },
          { url: '/es/local-llms/llm-quantization-explained', title: 'Cuantización de LLM explicada', description: 'Qué significan Q4_K_M, Q8_0 e IQ4_XS — cómo afectan a la VRAM, la velocidad y la calidad de salida.' },
          { url: '/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'Comparación local DeepSeek vs Qwen 2026', description: 'Comparación completa: DeepSeek-V2.5 vs Qwen3 en programación, razonamiento, chino y escritura creativa — con desglose Mac vs NVIDIA.' },
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'دليل النشر المحلي لـ Qwen 2026: Qwen 3.6 27B وCoder وVL على كل مستوى أجهزة',
    seoTitle: 'Qwen 3.6 27B محليًا 2026: دليل Coder وVL ومستويات الأجهزة',
    intro: 'Qwen 3.6 27B هو الاختيار الرئيسي الجديد للنشر المحلي — نموذج كثيف بترخيص Apache 2.0 وسياق 256K، يعمل بـ ~17 GB VRAM عبر `ollama run qwen3.6:27b`. يعمل Qwen3 8B بـ 5.5 GB فقط من VRAM عبر Ollama — أمر واحد، بلا إعداد. يحقق Qwen2.5-Coder 32B نسبة 92.7% في HumanEval. وQwen2-VL 7B هو نموذج الرؤية المحلي الرائد لـ OCR للمستندات الصينية واليابانية. يغطي هذا الدليل عائلة نماذج Qwen الكاملة: أي نموذج تشغّل على كل مستوى أجهزة، والإعداد عبر Ollama وLM Studio، وتوصيات التكميم، وبيانات المعايير، وكيف يقارن Qwen بـ DeepSeek وLlama على الأجهزة الاستهلاكية في 2026.',
    metaDescription: 'شغّل Qwen 3.6 27B وQwen3 وQwen2.5 (7B–72B) وQwen2.5-Coder وQwen2-VL محليًا في 2026. متطلبات VRAM وإعداد Ollama وLM Studio وبنشمارك Q4_K_M ودليل مستويات الأجهزة.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ar.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون والباحثون والمستخدمون المهتمون بالخصوصية الذين يريدون تشغيل عائلة نماذج Qwen الكاملة محليًا',
    primaryTerm: 'النشر المحلي لـ Qwen',
    affiliateDisclosure: true,
    ctaText: 'وزّع بين Qwen3 وDeepSeek وLlama من واجهة واحدة ←',
    ctaButton: 'جرّب PromptQuorum مجانًا',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**الاختيار الرائد الجديد هو Qwen 3.6 27B — نموذج كثيف برخصة Apache 2.0 ونافذة سياق 256K يعمل بـ ~17 GB من VRAM عند Q4_K_M عبر `ollama run qwen3.6:27b`.** لإعداد أخف، ثبّت Ollama ونفّذ `ollama pull qwen2.5:7b` لتشغيل Qwen3 8B — يتطلب 5.5 GB من VRAM ويقدّم 57 token/ثانية على RTX 3060. لمهام الكود استخدم Qwen2.5-Coder؛ ولـ OCR للمستندات الصينية/اليابانية استخدم Qwen2-VL. هل تعرف بالفعل ميزانية VRAM لديك؟ انتقل مباشرة إلى [بطاقة الرسوم أو جهاز Mac المناسب لكل مستوى من Qwen](#affiliate-picks).',
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'نظرة عامة على عائلة Qwen3', anchor: '#model-family' },
      { label: 'متطلبات الأجهزة حسب حجم النموذج', anchor: '#hardware-tiers' },
      { label: 'الإعداد عبر Ollama', anchor: '#ollama-setup' },
      { label: 'الإعداد عبر LM Studio', anchor: '#lm-studio-setup' },
      { label: 'التكميم: أي تنسيق تختار', anchor: '#quantization-guide' },
      { label: 'أداء المعايير على الأجهزة الاستهلاكية', anchor: '#benchmarks' },
      { label: 'Qwen مقابل DeepSeek مقابل Llama', anchor: '#vs-comparison' },
      { label: 'المستخدمون الناطقون بالعربية: سيادة البيانات', anchor: '#regional-context' },
      { label: 'توصيات الأجهزة حسب الميزانية', anchor: '#affiliate-picks' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'يغطي العرض التقديمي أدناه: الاختيار الرائد الجديد Qwen 3.6 27B (سياق 256K، ~17 GB عند Q4_K_M)، وعائلة نماذج Qwen الكاملة (Qwen3 من 0.6B إلى 32B، وQwen2.5 من 7B إلى 72B)، ومتطلبات VRAM حسب مستوى الأجهزة، وبيانات معيار Qwen3-Coder 32B، وجدول قرار Qwen مقابل DeepSeek مقابل Llama. نزّله كبطاقة مرجعية لنشر Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'دليل النشر المحلي لـ Qwen 2026: شغّل Qwen 3.6 27B وQwen3 وCoder وVL على كل مستوى أجهزة',
      description: 'دليل كامل لنشر عائلة نماذج Qwen محليًا — Qwen 3.6 27B وQwen3 وQwen2.5 وCoder وVL، ومتطلبات VRAM، والإعداد عبر Ollama وLM Studio، والتكميم، والمعايير، وتوصيات الأجهزة.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'ar',
      url: 'https://www.promptquorum.com/ar/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'كم من VRAM أحتاج لتشغيل Qwen3 8B محليًا؟', acceptedAnswer: { '@type': 'Answer', text: 'يتطلب Qwen3 8B Q4_K_M 5.5 GB من VRAM. تكفي NVIDIA RTX 3060 6 GB أو RTX 4060 أو شريحة Apple M بذاكرة موحدة 8 GB.' } },
        { '@type': 'Question', name: 'ما أفضل نموذج Qwen للبرمجة محليًا؟', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B هو أفضل نموذج برمجة قابل للتشغيل محليًا — يحقق 92.7% في HumanEval ويحتاج إلى بطاقة رسوم بسعة 24 GB (RTX 3090 أو RTX 4090). بـ 12 GB من VRAM أو أقل، استخدم Qwen3-Coder 14B (HumanEval 85.2%، 9.5 GB من VRAM).' } },
        { '@type': 'Question', name: 'كيف يقارن Qwen بـ DeepSeek للنشر المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'يستخدم Qwen3 بنية كثيفة تتسع في الأجهزة الاستهلاكية. DeepSeek-V2.5 نموذج MoE بحجم 236B — يحتاج إلى نحو 130 GB من RAM في Q4، غير ميسور دون بطاقة رسوم خوادم. بأقل من 48 GB من VRAM، Qwen3 هو الخيار العملي.' } },
        { '@type': 'Question', name: 'هل يمكنني تشغيل Qwen على جهاز Mac؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يستخدم Apple Silicon ذاكرة موحدة — يشغّل M2 Pro 32 GB نموذج Qwen3 14B بـ ~32 token/ثانية. ويتعامل M3 Max 64 GB مع Qwen3 32B بـ ~22 token/ثانية.' } },
        { '@type': 'Question', name: 'ما أمر Ollama الذي أستخدمه لـ Qwen؟', acceptedAnswer: { '@type': 'Answer', text: 'للنموذج الرائد، نفّذ `ollama run qwen3.6:27b` (~17 GB من VRAM). لـ Qwen3، استخدم `ollama pull qwen3:8b`. لـ Qwen2.5، استخدم `ollama pull qwen2.5:7b` لـ 7B، و`ollama pull qwen2.5:14b` لـ 14B، و`ollama pull qwen2.5:32b` لـ 32B، أو `ollama pull qwen2.5-coder:32b` لمتغير البرمجة. استخدم دائمًا وسوم حجم صريحة.' } },
        { '@type': 'Question', name: 'هل Qwen مناسب للمهام باللغة الصينية؟', acceptedAnswer: { '@type': 'Answer', text: 'دُرّب Qwen3 مسبقًا على مجموعة نصية صينية ضخمة ويدعم أصليًا الصينية المبسّطة والتقليدية واليابانية والكورية والعربية و24 لغة أخرى. يتفوق باستمرار على Llama 3.3 وMistral في الفهم والتوليد بالصينية.' } },
        { '@type': 'Question', name: 'أي تكميم ينبغي أن أستخدم لـ Qwen3؟', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M هو القيمة الافتراضية الموصى بها — يقلّل VRAM بنحو 55% مقارنةً بـ FP16 مع أقل من 1% فقدان جودة في المعايير. استخدم Q8_0 إذا كان لديك فائض من VRAM وتريد جودة قريبة من FP16. تجنّب Q2_K للاستخدام بالصينية.' } },
        { '@type': 'Question', name: 'هل يعمل Qwen2-VL لـ OCR للمستندات الصينية؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — Qwen2-VL 7B هو أقوى نموذج رؤية محلي لـ OCR للمستندات CJK. يعمل بـ ~6 GB من VRAM عبر `ollama pull qwen2-vl:7b` ويقرأ النصوص الصينية واليابانية والكورية بدقات تصل إلى 4096×4096.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B هو الاختيار الرائد الجديد**: كثيف، Apache 2.0، سياق 256K، ~17 GB من VRAM عند Q4_K_M عبر `ollama run qwen3.6:27b` (صدر في أبريل 2026).',
          '**يعمل Qwen3 8B بـ 5.5 GB من VRAM** — أمر واحد `ollama pull qwen2.5:7b` وينطلق بـ 57 token/ثانية على RTX 3060.',
          '**أربع عائلات فرعية عملية**: Qwen3 (استخدام عام، وضع استدلال)، Qwen2.5 (استخدام عام، الأكثر اختبارًا)، Qwen2.5-Coder (برمجة، 92.7% في HumanEval على 32B)، Qwen2-VL (رؤية، أفضل OCR محلي لـ CJK).',
          '**بنية كثيفة = متوافقة مع الأجهزة الاستهلاكية**: على عكس نموذج MoE بحجم 236B لـ DeepSeek (~130 GB من RAM)، يتسع Qwen2.5-72B في 46 GB من VRAM على بطاقتي RTX 3090.',
          '**متعدد اللغات أصليًا**: مدرَّب مسبقًا على الصينية واليابانية والكورية والعربية والألمانية والفرنسية و23 لغة أخرى — يتفوق Qwen3 باستمرار على Llama 3.3 في مهام CJK.',
          '**Q4_K_M هو التكميم الصحيح** لمعظم المستخدمين: تقليل VRAM بنحو 55%، أقل من 1% فقدان جودة في المعايير.',
          '**قرار الأجهزة**: 12 GB من VRAM ← نموذج 14B؛ 24 GB ← 32B؛ 48 GB+ (بطاقتا رسوم أو Apple Silicon 64 GB) ← 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يغطي Qwen3 ثلاث عائلات فرعية للنشر المحلي — استخدام عام (7B–72B) وبرمجة (Coder 7B–32B) ورؤية (VL 7B–72B) — جميعها قابلة للتشغيل عبر Ollama أو LM Studio.' },
          { type: 'plain-terms', text: 'تشغيل نموذج محليًا يعني أن الذكاء الاصطناعي يعمل على حاسوبك بدلًا من خادم سحابي. لا تغادر أي بيانات جهازك ولا توجد تكلفة لكل token بعد اقتناء الأجهزة.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'نظرة عامة على عائلة نماذج Qwen',
        content: [
          '**تضم تشكيلة Qwen الآن خمسة خيارات عملية: الرائد Qwen 3.6 27B، وعائلة Qwen3 الأحدث، وQwen2.5 للاستدلال العام، وQwen2.5-Coder، وQwen2-VL للرؤية** — لكل منها خيارات أحجام متعددة. جميعها نماذج ذات أوزان مفتوحة نشرها فريق Qwen التابع لـ Alibaba على Hugging Face بموجب ترخيص Apache 2.0.',
          'اختر العائلة الفرعية أولًا ثم الحجم الذي يلائم VRAM لديك. من المعتاد دمج العائلات الفرعية: Qwen2.5-Coder 14B لإكمال الكود وQwen3 8B أو Qwen 3.6 27B لتلخيص المستندات.',
        ],
        rows: [
          { 'Subfamilia': 'Qwen3', 'Tamaños disponibles': '0.6B، 1.7B، 4B، 8B، 14B، 32B', 'Uso principal': 'الاستدلال العام، وضع الاستدلال، متعدد اللغات، المهام الوكيلية', 'Prefijo de etiqueta Ollama': 'qwen3:' },
          { 'Subfamilia': 'Qwen2.5', 'Tamaños disponibles': '7B، 14B، 32B، 72B', 'Uso principal': 'الاستدلال العام، المهام بالصينية/متعددة اللغات، RAG', 'Prefijo de etiqueta Ollama': 'qwen2.5:' },
          { 'Subfamilia': 'Qwen2.5-Coder', 'Tamaños disponibles': '7B، 14B، 32B', 'Uso principal': 'توليد الكود، التصحيح، HumanEval، SWE-bench', 'Prefijo de etiqueta Ollama': 'qwen2.5-coder:' },
          { 'Subfamilia': 'Qwen2-VL', 'Tamaños disponibles': '2B، 7B، 72B', 'Uso principal': 'OCR للمستندات، الأسئلة عن الصور، استخراج نص CJK', 'Prefijo de etiqueta Ollama': 'qwen2-vl:' },
        ],
        columns: ['Subfamilia', 'Tamaños disponibles', 'Uso principal', 'Prefijo de etiqueta Ollama'],
        tableFormat: true,
        note: 'Qwen 3.6 27B (صدر في أبريل 2026) هو الاختيار الرائد الجديد — نموذج كثيف بنافذة سياق 256K يعمل بـ ~17 GB من VRAM عند Q4_K_M عبر `ollama run qwen3.6:27b`. تظل Qwen2.5 العائلة الأكثر اختبارًا، بأوسع تغطية في Ollama وGGUF حتى منتصف 2026. راجع [أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) لمقارنة أوسع.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'متطلبات الأجهزة حسب حجم النموذج',
        content: [
          '**اختر مستوى VRAM لديك أولًا ثم أكبر نموذج Qwen3 يتسع.** Q4_K_M هو التكميم القياسي المستخدم في جميع الأرقام أدناه — يقدّم أفضل نسبة حجم/جودة لـ Ollama وLM Studio.',
        ],
        rows: [
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', 'GPU mínima': 'RTX 3060 6 GB، RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~57 tok/s' },
          { 'Modelo': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', 'GPU mínima': 'RTX 3060 6 GB، RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~55 tok/s' },
          { 'Modelo': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2 GB', 'GPU mínima': 'RTX 3060 8 GB، RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidad (RTX 4060)': '~38 tok/s' },
          { 'Modelo': 'Qwen3 14B Q4_K_M', 'VRAM': '9.5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~38 tok/s' },
          { 'Modelo': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~36 tok/s' },
          { 'Modelo': 'Qwen3 32B Q4_K_M', 'VRAM': '20.5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~28 tok/s' },
          { 'Modelo': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~27 tok/s' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'GPU mínima': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Velocidad (RTX 4090)': '~24 tok/s' },
          { 'Modelo': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidad (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidad (RTX 3060)'],
        tableFormat: true,
        note: 'أرقام VRAM تخصّ ملفات GGUF Q4_K_M من مكتبة Ollama. أضف 1–2 GB لذاكرة KV المؤقتة بسياق 4K. إذا كانت بطاقة الرسوم تملك VRAM أقل مما يحتاج النموذج، يفرّغ Ollama الطبقات تلقائيًا إلى RAM النظام — يعمل، لكنه يقلّل السرعة بشكل كبير.',
        callouts: [
          { type: 'tip', text: 'هل حددت مستوى VRAM الخاص بك؟ اطّلع على [بطاقة الرسوم أو جهاز Mac المناسب تمامًا لهذا المستوى](#affiliate-picks) — 6 GB ← RTX 4060، 12 GB ← RTX 4070 Super، 24 GB ← RTX 3090/4090، 48 GB فأكثر ← Mac mini M4 Pro أو بطاقتا رسوم.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ar.webp',
        imageCaption: 'متطلبات VRAM لـ Qwen3 حسب حجم النموذج (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'الإعداد عبر Ollama',
        content: [
          '**Ollama هو أسرع طريقة لتشغيل أي نموذج Qwen3 محليًا** — يدير تنزيل النموذج وتكميم GGUF وواجهة API المحلية على `localhost:11434` دون أي إعداد. ثبّته من [ollama.com](https://ollama.com/download). إذا لم تستخدم Ollama من قبل، اقرأ أولًا [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'ثبّت Ollama', whyItMatters: 'متاح لـ macOS وLinux (تثبيت بسطر واحد) وWindows. لا حاجة لإعداد تعريفات بطاقة الرسوم — يكتشف Ollama CUDA وROCm وMetal تلقائيًا.' },
          { title: 'نزّل النموذج بوسم حجم صريح', whyItMatters: 'حدّد الحجم دائمًا: `qwen2.5:7b`، `qwen2.5:14b`، `qwen2.5:32b`. يُحل `qwen2.5` غير الموسوم إلى نموذج 7B، لكنه قد يتغير بين إصدارات Ollama.' },
          { title: 'شغّل النموذج', whyItMatters: '`ollama run qwen2.5:7b` يفتح دردشة تفاعلية. اكتب أمرك واضغط Enter. أغلق بـ `/bye`.' },
          { title: 'اضبط نافذة السياق عند الحاجة', whyItMatters: 'يدعم Qwen3 افتراضيًا سياق 32K في Ollama. لاستخدام سياق 128K على نموذج 7B، نفّذ `ollama run qwen2.5:7b --num-ctx 131072`. يتطلب هذا مزيدًا من VRAM.' },
          { title: 'اختبر نقطة نهاية API', whyItMatters: 'يكشف Ollama واجهة API متوافقة مع OpenAI. تتصل تطبيقات مثل PromptQuorum وContinue.dev وOpen WebUI مباشرة بـ `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Instalar Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: descarga el .dmg desde ollama.com o:
brew install ollama

# Descargar modelos — usa etiquetas explícitas
ollama pull qwen3.6:27b          # insignia, contexto 256K (~17 GB)
ollama pull qwen3:8b             # Qwen3 uso general 8B (~5,5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 uso general 7B (~5,5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 uso general 14B (~9,5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 uso general 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20,5 GB)
ollama pull qwen2-vl:7b          # visión 7B (~6,2 GB)

# Ejecutar en modo interactivo
ollama run qwen2.5:7b

# Probar la API compatible con OpenAI
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Hola"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'الإعداد عبر LM Studio',
        content: [
          '**يقدّم LM Studio واجهة رسومية لـ Qwen3 دون الحاجة إلى أوامر طرفية.** نزّله من [lmstudio.ai](https://lmstudio.ai) أو راجع [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio). يعمل على macOS وWindows وLinux.',
        ],
        numberedItems: [
          { title: 'افتح متصفح النماذج', whyItMatters: 'ابحث عن "Qwen3" أو "Qwen Coder" لاستكشاف جميع بناءات GGUF المتاحة. رشّح حسب Q4_K_M للحصول على نسبة الجودة/الحجم الموصى بها.' },
          { title: 'نزّل بناء GGUF', whyItMatters: 'اختر متغير Q4_K_M. يعرض LM Studio حجم الملف قبل التنزيل — تأكد من أنه يتسع في VRAM المتاح.' },
          { title: 'حمّل النموذج وابدأ الدردشة', whyItMatters: 'انقر على النموذج في الشريط الجانبي الأيسر لتحميله في الذاكرة. توزيع الطبقات على بطاقة الرسوم تلقائي حسب VRAM المكتشف.' },
          { title: 'ابدأ الخادم المحلي', whyItMatters: '"بدء الخادم" يكشف نقطة نهاية متوافقة مع OpenAI على `localhost:1234`. تتصل به تطبيقاتك ونصوصك كما لو كان API الخاص بـ OpenAI.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'التكميم: أي تنسيق تختار',
        content: [
          '**Q4_K_M هو القيمة الافتراضية الصحيحة لـ Qwen3 على الأجهزة الاستهلاكية.** يقلّل VRAM بين 55–60% مقارنةً بـ FP16 مع أقل من 1% تدهور في MMLU وHumanEval. للتنسيقات الأخرى حالات استخدام محددة:',
        ],
        items: [
          '**Q4_K_M** (موصى به): ~5.5 GB لـ 7B. أفضل نسبة جودة لكل GB. ابدأ بهذا.',
          '**Q8_0**: ~8.5 GB لـ 7B. جودة قريبة من FP16؛ استخدمه إذا كان لديك فائض VRAM وتريد أقصى دقة.',
          '**Q5_K_M**: ~6.5 GB لـ 7B. تحسّن هامشي على Q4_K_M — اخترْه فقط إذا كانت جودة مخرجات Q4_K_M ضعيفة بوضوح لمهمتك.',
          '**Q2_K**: ~3 GB لـ 7B. أصغر ملف، لكن جودة المخرجات بالصينية تتدهور بشكل ملحوظ — تجنّبه مع Qwen3 إذا كانت الصينية جزءًا من حالة استخدامك.',
          '**IQ4_XS**: ~4.8 GB لـ 7B. تكميم imatrix أحدث يتفوق على جودة Q4_K_M بحجم أصغر قليلًا — متاح في إصدارات حديثة من llama.cpp وLM Studio 0.3+.',
        ],
        note: 'لشرح كامل عن التكميم، راجع [تكميم نماذج LLM موضّحًا](/ar/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M هو أفضل تكميم لـ Qwen3 لمعظم المستخدمين: يقلّل VRAM بنسبة 55% مع أقل من 1% فقدان جودة مقارنةً بـ FP16.' },
          { type: 'plain-terms', text: 'يضغط التكميم أرقام النموذج من 16 بت إلى 4 بت، فيقلّل حجم الملف وVRAM المطلوب إلى النصف تقريبًا. الأمر أشبه بالانتقال من TIFF إلى JPEG عالي الجودة — ملف أصغر، ونتيجة شبه متطابقة لمعظم الاستخدامات.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'أداء المعايير على الأجهزة الاستهلاكية',
        content: [
          '**يقدّم Qwen3 32B Q4_K_M على RTX 4090 سرعة 28 token/ثانية — سرعة كافية للمساعدة البرمجية في الوقت الفعلي.** الدرجات أدناه تخصّ بناءات GGUF Q4_K_M المختبرة في Ollama. درجات FP16 أعلى بـ 1–2%.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', 'Velocidad (RTX 3060 12 GB)': '57 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', 'Velocidad (RTX 4070 12 GB)': '38 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', 'Velocidad (RTX 4090 24 GB)': '28 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', 'Velocidad (2×RTX 3090)': '12 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', 'Velocidad (RTX 3060 12 GB)': '55 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', 'Velocidad (RTX 4070 12 GB)': '36 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', 'Velocidad (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidad (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'هل تريد تحقيق درجة 92.7% في HumanEval بسرعة 27 token/ثانية؟ اطّلع على [بطاقة الرسوم بسعة 24 GB التي تشغّل Qwen3-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ar.webp',
        imageCaption: 'درجات معيار Qwen3 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen مقابل DeepSeek مقابل Llama: ماذا تشغّل محليًا',
        content: [
          '**يفوز Qwen3 في المهام بالصينية وكفاءة VRAM؛ ويفوز DeepSeek-V2.5 في الاستدلال واسع النطاق لكنه غير عملي على الأجهزة الاستهلاكية؛ وLlama 3.3 70B هو الخيار الأفضل على بطاقة رسوم واحدة إذا كنت تفضّل النموذج المفتوح من Meta.** يقارن الجدول أدناه الخيارات العملية في كل مستوى VRAM.',
        ],
        rows: [
          { 'Nivel de VRAM': '6 GB', 'Mejor Qwen': 'Qwen3 8B', 'Mejor competidor': 'Llama 3.2 3B (يتسع، لكنه 3B فقط)', 'Veredicto': 'يفوز Qwen3 8B — نفس VRAM، نموذج أكبر بكثير' },
          { 'Nivel de VRAM': '12 GB', 'Mejor Qwen': 'Qwen3-Coder 14B', 'Mejor competidor': 'Llama 3.3 8B Instruct', 'Veredicto': 'Qwen3-Coder 14B للكود؛ Llama 3.3 8B للدردشة العامة' },
          { 'Nivel de VRAM': '24 GB', 'Mejor Qwen': 'Qwen3-Coder 32B', 'Mejor competidor': 'Llama 3.3 70B (مع تفريغ)', 'Veredicto': 'Qwen3-Coder 32B للكود؛ Llama 3.3 70B إذا كانت الجودة > السرعة' },
          { 'Nivel de VRAM': '48 GB+', 'Mejor Qwen': 'Qwen2.5-72B', 'Mejor competidor': 'DeepSeek-V2.5 236B MoE', 'Veredicto': 'يحتاج DeepSeek إلى ~130 GB من RAM؛ Qwen2.5-72B هو الخيار العملي لـ 48 GB' },
        ],
        columns: ['Nivel de VRAM', 'Mejor Qwen', 'Mejor competidor', 'Veredicto'],
        tableFormat: true,
        content2: 'لمقارنة أكثر تفصيلًا بين DeepSeek وQwen في البرمجة والاستدلال والمهام متعددة اللغات، راجع [مقارنة محلية DeepSeek مقابل Qwen 2026](/ar/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'المستخدمون الناطقون بالعربية: سيادة البيانات والنشر المحلي',
        content: [
          '**تشغيل Qwen3 محليًا يعني أن أي بيانات لا تغادر جهازك — لا نقل إلى خوادم سحابية، ولا تعرّض بموجب GDPR أو قوانين حماية البيانات في الخليج.** تتطلب واجهات API لنماذج LLM السحابية إرسال الأوامر إلى خوادم خارجية، مما يُفعّل متطلبات معالجة البيانات وعمليات النقل الدولية المحتملة.',
          'دُرّب Qwen3 على يد فريق Qwen التابع لـ Alibaba على مجموعة نصية صينية ومتعددة اللغات في الغالب. وهو أقوى نموذج بنشر محلي للمستندات بالصينية المبسّطة والتقليدية والنصوص المختلطة (صينية/عربية/إنجليزية).',
          '**لعمليات النشر في الشركات الناطقة بالعربية**: إعداد Qwen3 دون اتصال بالإنترنت أثناء الاستدلال متوافق تمامًا مع الأطر التنظيمية في السعودية (PDPL) والإمارات (قانون حماية البيانات) ودول الخليج الأخرى. يعمل النموذج بالكامل على أجهزة محلية — لا يصل أي طرف ثالث إلى بيانات الإدخال أو الإخراج. كما تتوفر بدائل عربية سيادية مثل Jais وALLaM للمؤسسات التي تفضّل نماذج عربية المنشأ. راجع [تشغيل الذكاء الاصطناعي دون اتصال بالكامل](/ar/power-local-llm/local-ai-behind-firewall-offline-2026) للحصول على دليل كامل للإعداد المعزول.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يعمل Qwen3 دون اتصال بالكامل بعد التنزيل — لا تغادر أي بيانات جهازك، مما يلغي مخاطر نقل البيانات عبر الحدود بموجب GDPR وقوانين الخليج.' },
          { type: 'plain-terms', text: 'عندما تشغّل Qwen3 محليًا، لا تغادر أوامرك ومستنداتك حاسوبك أبدًا. لا استدعاءات إلى API سحابي، ولا خادم خارجي، ولا بيانات يمكن للجهات التنظيمية أو الأطراف الثالثة الوصول إليها.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'ما الجهاز الذي ينبغي شراؤه لنشر Qwen3؟',
        content: [
          '**طابِق مستوى Qwen المستهدف مع VRAM المطلوب أولًا، ثم اشترِ أرخص بطاقة تحقّق هذا الحد — دفع ثمن VRAM أكثر مما يحتاجه نموذجك هو أكثر أخطاء الإنفاق شيوعًا في هذه القائمة.** تتوافق الاختيارات أدناه مباشرة مع جدول الأجهزة أعلاه: اقتصادي ← RTX 4060، متوسط ← RTX 4070 Super، فئة عليا ← RTX 3090/4090، Apple Silicon ← Mac mini M4 Pro، تشغيل متواصل ← حاسوب صغير. تعكس الأسعار أدناه سوق بطاقات الرسوم في 2026 — أدى نقص رقائق الذاكرة والطلب من مراكز بيانات الذكاء الاصطناعي إلى ارتفاع أسعار بطاقات الرسوم الجديدة وتشكيلات ذاكرة Apple؛ تحقّق من السعر الفعلي قبل الشراء.',
        ],
        callouts: [
          { type: 'tip', text: 'تخطَّ هذا القسم إذا كنت تملك بالفعل بطاقة رسوم بسعة 8 GB من VRAM أو أكثر — شغّل Qwen3 8B أولًا على ما تملكه. اشترِ جهازًا جديدًا فقط بعد بلوغ هذا الحد ورغبتك في نموذج أكبر.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'اختيار اقتصادي — Qwen3 8B وQwen3-Coder 7B (5.5 GB VRAM)',
            verdict: 'أرخص بطاقة في هذه القائمة تحقّق متطلب 5.5 GB لـ Qwen3 8B مع هامش للسياق. تشغّل Qwen3-Coder 7B بسرعة ~55 token/ثانية — سرعة كافية للمساعدة البرمجية التفاعلية.',
            pros: [
              'يتحقق متطلب 5.5 GB من VRAM مع هامش لذاكرة KV المؤقتة للسياق الطويل',
              'أقل سعر في هذه القائمة — بطاقة الرسوم الأولى المناسبة إذا لم تشغّل نموذج LLM محليًا من قبل',
              '50–57 token/ثانية على نماذج 7B/8B، بأداء مماثل للبطاقات الأغلى عند هذا الحجم من النماذج',
            ],
            cons: [
              'يقتصر على Qwen3 8B / Qwen3-Coder 7B — لا هامش للانتقال إلى 14B دون ضغط ذاكرة KV المؤقتة',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.sa/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '1,600–2,000 ريال', label: 'تحقّق من السعر الحالي ←' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'اختيار متوسط — Qwen3 14B وQwen3-Coder 14B (9.5 GB VRAM)',
            verdict: 'تشغّل Qwen3-Coder 14B (85.2% في HumanEval) بسرعة 36–38 token/ثانية مع بقاء 2–3 GB من VRAM للسياق — المستوى الذي تقفز فيه جودة البرمجة بشكل ملحوظ مقارنةً بنماذج 7B/8B.',
            pros: [
              'يتسع النموذج بحجم 9.5 GB مع بقاء 2–3 GB من VRAM — مساحة لنوافذ سياق أطول',
              'ترتفع نتيجة HumanEval من 75.6% (7B) إلى 85.2% (14B) — أوضح قفزة في الجودة مقابل السعر ضمن هذه المجموعة',
              'تحافظ سرعة ~38 token/ثانية على استجابة الدردشة التفاعلية وإكمال الكود',
            ],
            cons: [
              'لا يكفي VRAM لمستوى 32B — خطّط للبيع أو إعادة الاستخدام إذا تجاوزت 14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.sa/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '3,000–3,400 ريال', label: 'تحقّق من السعر الحالي ←' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (أو RTX 3090 24 GB مستعملة)',
            tagline: 'اختيار فئة عليا — Qwen3-Coder 32B وQwen 3.6 27B (~17–20.5 GB VRAM)',
            verdict: 'تقدّم 4090 سرعة 27–28 token/ثانية على Qwen3-Coder 32B — سرعة برمجة في الوقت الفعلي بدرجة 92.7% في HumanEval. تملك RTX 3090 المستعملة نفس سعة 24 GB من VRAM، وتقترب من سرعة استدلال 4090 بفارق نحو 15% فقط، بسعر أقل بكثير إذا وجدت عرضًا مستعملًا موثوقًا.',
            pros: [
              'تغطي سعة 24 GB من VRAM جميع إصدارات Qwen3 32B وQwen 3.6 27B مع هامش إضافي',
              '27–28 token/ثانية على Qwen3-Coder 32B (92.7% في HumanEval) — سريعة بما يكفي للبرمجة الزوجية في الوقت الفعلي',
              'RTX 3090 المستعملة هي البديل الاقتصادي: سقف VRAM نفسه، أبطأ بنحو 15%، وأرخص بشكل ملحوظ مستعملة',
            ],
            cons: [
              'أعلى تكلفة مبدئية في هذه القائمة — لا تُبرَّر إلا عند الحاجة الفعلية لجودة فئة 32B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.sa/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '11,000–12,500 ريال', label: 'تحقّق من السعر الحالي ←' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (مستعملة)', productCategory: 'GPU', priceRange: '4,850–6,000 ريال', label: 'اطّلع على العروض المستعملة ←' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'اختيار Apple Silicon — Qwen3 32B (~22 token/ثانية، هادئ ومنخفض الاستهلاك)',
            verdict: 'أفضل قيمة لتشغيل Qwen3 32B عبر الذاكرة الموحّدة — هادئ، استهلاك طاقة منخفض، ولا حاجة لتركيب بطاقة رسوم منفصلة. أما Qwen2.5-72B فيتطلب M2 Ultra 192 GB بدلًا من ذلك.',
            pros: [
              'تلبّي ذاكرة موحّدة بسعة 48 GB متطلب 20.5 GB لـ Qwen3 32B مع مساحة لتطبيقات أخرى',
              'تشغيل صامت واستهلاك طاقة مناسب لمكتب العمل — دون إدارة تبريد مخصص لبطاقة رسوم',
              'عملية شراء واحدة تغطي نظام التشغيل والتخزين والاستدلال — دون تجميع منفصل لبطاقة رسوم/مزود طاقة/هيكل',
            ],
            cons: [
              'سرعة ~22 token/ثانية على Qwen3 32B أبطأ بوضوح من 27–28 token/ثانية لبطاقة RTX 4090',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/sa/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '7,300–7,700 ريال', label: 'تحقّق من السعر الحالي ←' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (أو حاسوب صغير مماثل بمعالج AMD Ryzen AI)',
            tagline: 'اختيار للتشغيل المتواصل — Qwen3 8B على CPU + iGPU (~8–12 token/ثانية، أقل من 35 واط)',
            verdict: 'غير مخصص للاستخدام التفاعلي — بل لتشغيل نسخة من Qwen3 8B على مدار الساعة طوال أيام الأسبوع لمهام خلفية، أو أتمتة المنزل، أو نقطة نهاية API منخفضة الحركة حيث تهم تكلفة الطاقة أكثر من السرعة.',
            pros: [
              'استهلاك أقل من 35 واط — رخيص التشغيل المستمر، على عكس تجميعة سطح مكتب ببطاقة رسوم',
              'حجم صغير يناسب أي مكان؛ دون حاجة لبطاقة رسوم منفصلة أو تبريدها',
              'يشغّل Qwen3 8B دون أي بطاقة رسوم مخصصة على الإطلاق',
            ],
            cons: [
              'سرعة 8–12 token/ثانية بطيئة جدًا للدردشة التفاعلية — اختيار مخصص للاستخدام الخلفي/API فقط',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.sa/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '2,200–3,000 ريال', label: 'تحقّق من السعر الحالي ←' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة عند تشغيل Qwen3 محليًا',
        items: [
          '**استخدام الأمر `ollama pull qwen2.5` دون وسم حجم.** بدون وسم حجم صريح (`:7b`، `:14b`، إلخ)، قد يُحل Ollama إلى الحجم الافتراضي، الذي قد يتغير بين تحديثات المكتبة. استخدم دائمًا وسومًا صريحة: `ollama pull qwen2.5:14b`.',
          '**تجاهل حجم نافذة السياق.** يدعم Qwen3 سياق 128K. تحدد مواصفات Modelfile في Ollama القيمة الافتراضية لـ `num_ctx` بـ 2048، لكن وقت التشغيل الفعلي يختار قيمة افتراضية متدرجة حسب VRAM: 4K أقل من 24 GiB، و32K بين 24 و48 GiB، و256K فوق 48 GiB. لا تعتمد على أي من القيمتين الافتراضيتين: اضبط `num_ctx` صراحةً، مثلاً بإضافة `--num-ctx 8192` (أو أكثر) إلى أمر التشغيل — وإلا يقتطع النموذج الإدخال بصمت.',
          '**اختيار تكميم Q2_K للاستخدام بالصينية.** بدقة 2 بت، تتدهور مخرجات Qwen3 بالصينية بشكل ملحوظ. استخدم Q4_K_M كحد أدنى لأي عمل بالصينية.',
          '**تشغيل نموذج 32B بـ VRAM قليل.** إذا كانت بطاقة الرسوم تملك 16 GB والنموذج يحتاج إلى 20.5 GB، يفرّغ Ollama الطبقات إلى RAM النظام. يعمل النموذج لكن بـ 3–5 token/ثانية — غير قابل للاستخدام التفاعلي. راجع جدول الأجهزة واختر نموذجًا يتسع في VRAM لديك.',
          '**استخدام العائلة الفرعية الخاطئة للبرمجة.** يسجّل Qwen3 8B (استخدام عام) 57.3% في HumanEval. ويسجّل Qwen3-Coder 7B نسبة 75.6% في المعيار نفسه — تحسّن نسبي بنسبة 32%. إذا كانت حالة استخدامك هي الكود، استخدم دائمًا متغير Coder بالحجم نفسه.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'الخطوات التالية',
        items: [
          '[أفضل نماذج LLM للمعالج فقط](/ar/local-llms/best-cpu-only-llm) — ليس لديك GPU؟ اكتشف أحجام Qwen3 التي تعمل على المعالج فقط →',
          '[شرح تحديد دقة LLM](/ar/local-llms/llm-quantization-explained) — تبحث عن الفرق بين Q4_K_M وQ8؟ شرح التحديد الدقي →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'كم من VRAM أحتاج لتشغيل Qwen3 8B محليًا؟', a: 'يتطلب Qwen3 8B Q4_K_M 5.5 GB من VRAM. تكفي RTX 3060 6 GB أو RTX 4060 أو شريحة Apple M بذاكرة موحدة 8 GB.' },
          { q: 'ما أفضل نموذج Qwen للبرمجة محليًا؟', a: 'Qwen3-Coder 32B — 92.7% في HumanEval، يحتاج إلى بطاقة رسوم بسعة 24 GB. بـ 12 GB من VRAM أو أقل: Qwen3-Coder 14B (85.2%، 9.5 GB من VRAM).' },
          { q: 'كيف يقارن Qwen بـ DeepSeek للنشر المحلي؟', a: 'يستخدم Qwen3 بنية كثيفة متوافقة مع الأجهزة الاستهلاكية. DeepSeek-V2.5 نموذج MoE بحجم 236B يحتاج إلى ~130 GB من RAM — غير عملي دون بطاقة رسوم خوادم.' },
          { q: 'هل يمكنني تشغيل Qwen على جهاز Mac؟', a: 'نعم. يشغّل M2 Pro 32 GB نموذج Qwen3 14B بـ ~32 token/ثانية. ويتعامل M3 Max 64 GB مع Qwen3 32B بـ ~22 token/ثانية.' },
          { q: 'ما أمر Ollama الذي أستخدمه لـ Qwen؟', a: 'للنموذج الرائد، `ollama run qwen3.6:27b` (~17 GB من VRAM). لـ Qwen3، `ollama pull qwen3:8b`. لـ Qwen2.5، `ollama pull qwen2.5:7b` لـ 7B، و`:14b` لـ 14B، و`:32b` لـ 32B، أو `qwen2.5-coder:32b` لمتغير البرمجة. استخدم دائمًا وسوم حجم صريحة.' },
          { q: 'هل Qwen مناسب للمهام باللغة الصينية؟', a: 'نعم. دُرّب Qwen3 مسبقًا على مجموعة نصية صينية ضخمة ويدعم أصليًا الصينية المبسّطة والتقليدية واليابانية والكورية و24 لغة أخرى.' },
          { q: 'أي تكميم ينبغي أن أستخدم لـ Qwen3؟', a: 'Q4_K_M افتراضيًا — يقلّل VRAM بنحو 55% مقارنةً بـ FP16 مع أقل من 1% فقدان جودة. تجنّب Q2_K للاستخدام بالصينية.' },
          { q: 'هل يعمل Qwen2-VL لـ OCR للمستندات الصينية؟', a: 'نعم — `ollama pull qwen2-vl:7b`، ~6 GB من VRAM، يقرأ نص CJK بدقات تصل إلى 4096×4096 بكسل.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        links: [
          { url: '/ar/local-llms/run-qwen-locally-guide-2026', title: 'كيفية تشغيل Qwen 3 محليًا في 2026', description: 'دليل إعداد نموذج واحد لـ Qwen 3.6 27B مع Ollama وLM Studio — أسرع طريقة لتشغيل نسخة Qwen.' },
          { url: '/ar/local-llms/run-qwen-vl-locally-2026', title: 'تشغيل Qwen2-VL محليًا في 2026', description: 'دليل كامل لـ Qwen2-VL — OCR للمستندات CJK، والأسئلة عن الصور، وقراءة لقطات الشاشة متعددة اللغات على الأجهزة الاستهلاكية.' },
          { url: '/ar/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen مقابل Llama مقابل Mistral 2026', description: 'مقارنة معايير Qwen 3.6 27B وLlama 4 Scout وMistral Small 3.1 في MMLU وSWE-bench وMATH.' },
          { url: '/ar/local-llms/llm-quantization-explained', title: 'تكميم نماذج LLM موضّحًا', description: 'ماذا يعني Q4_K_M وQ8_0 وIQ4_XS — كيف تؤثر في VRAM والسرعة وجودة المخرجات.' },
          { url: '/ar/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'مقارنة محلية DeepSeek مقابل Qwen 2026', description: 'مقارنة كاملة: DeepSeek-V2.5 مقابل Qwen3 في البرمجة والاستدلال والصينية والكتابة الإبداعية — مع تفصيل Mac مقابل NVIDIA.' },
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Guia de implantação local do Qwen 2026: Qwen 3.6 27B, Coder e VL por nível de hardware',
    seoTitle: 'Qwen 3.6 27B local 2026: Coder, VL e níveis de hardware',
    intro: 'O Qwen 3.6 27B é a nova escolha principal para implantação local — um modelo denso, sob licença Apache 2.0, com janela de contexto de 256K, que funciona com ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b`. O Qwen3 8B funciona com apenas 5,5 GB de VRAM via Ollama — um único comando, sem configuração. O Qwen2.5-Coder 32B atinge 92,7% no HumanEval. O Qwen2-VL 7B é o modelo de visão local líder para OCR de documentos em chinês e japonês. Este guia cobre a família completa de modelos Qwen: qual modelo executar em cada nível de hardware, configuração com Ollama e LM Studio, recomendações de quantização, dados de benchmarks e como o Qwen se compara ao DeepSeek e Llama em hardware de consumo em 2026.',
    metaDescription: 'Execute Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder e Qwen2-VL localmente em 2026. Requisitos de VRAM, configuração Ollama e LM Studio e guia por nível de hardware.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-pt.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores, pesquisadores e usuários com foco em privacidade que querem executar a família completa de modelos Qwen localmente',
    primaryTerm: 'implantação local do Qwen',
    affiliateDisclosure: true,
    ctaText: 'Despache entre Qwen3, DeepSeek e Llama a partir de uma única interface →',
    ctaButton: 'Experimente o PromptQuorum gratuitamente',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**A nova escolha principal é o Qwen 3.6 27B — um modelo denso, sob licença Apache 2.0, com janela de contexto de 256K, que funciona com ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b`.** Para uma configuração mais leve, instale o Ollama e execute `ollama pull qwen2.5:7b` — requer 5,5 GB de VRAM e entrega 57 tokens/seg em uma RTX 3060. Para tarefas de código use o Qwen2.5-Coder; para OCR de documentos em chinês/japonês use o Qwen2-VL. Já sabe qual é o seu orçamento de VRAM? Vá direto para [qual GPU ou Mac comprar para cada nível do Qwen](#affiliate-picks).',
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Visão geral da família Qwen3', anchor: '#model-family' },
      { label: 'Requisitos de hardware por tamanho de modelo', anchor: '#hardware-tiers' },
      { label: 'Configuração com Ollama', anchor: '#ollama-setup' },
      { label: 'Configuração com LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Quantização: qual formato escolher', anchor: '#quantization-guide' },
      { label: 'Desempenho em benchmarks em hardware de consumo', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: 'Usuários brasileiros: soberania de dados', anchor: '#regional-context' },
      { label: 'Recomendações de hardware por orçamento', anchor: '#affiliate-picks' },
      { label: 'Erros frequentes', anchor: '#common-mistakes' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'A apresentação abaixo cobre: o novo flagship Qwen 3.6 27B (contexto de 256K, ~17 GB em Q4_K_M), a família completa de modelos Qwen (Qwen3 0,6B–32B, Qwen2.5 7B a 72B), os requisitos de VRAM por nível de hardware, os dados de benchmark do Qwen2.5-Coder 32B e um quadro de decisão Qwen vs DeepSeek vs Llama. Baixe como cartão de referência de implantação do Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guia de implantação local do Qwen 2026: execute Qwen 3.6 27B, Qwen3, Coder e VL em cada nível de hardware',
      description: 'Guia completo para implantar a família de modelos Qwen localmente — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder e VL, requisitos de VRAM, configuração com Ollama e LM Studio, quantização, benchmarks e recomendações de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'pt-BR',
      url: 'https://www.promptquorum.com/pt/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Quanta VRAM preciso para executar o Qwen3 8B localmente?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen3 8B Q4_K_M requer 5,5 GB de VRAM. Uma NVIDIA RTX 3060 6 GB, RTX 4060 ou chip Apple M com 8 GB de memória unificada são suficientes.' } },
        { '@type': 'Question', name: 'Qual é o melhor modelo Qwen para programação localmente?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen3-Coder 32B é o melhor modelo de programação executável localmente — atinge 92,7% no HumanEval e precisa de uma GPU de 24 GB (RTX 3090 ou RTX 4090). Com 12 GB de VRAM ou menos, use o Qwen3-Coder 14B (HumanEval 85,2%, 9,5 GB de VRAM).' } },
        { '@type': 'Question', name: 'Como o Qwen se compara ao DeepSeek para implantação local?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen3 usa uma arquitetura densa que cabe em hardware de consumo. O DeepSeek-V2.5 é um modelo MoE de 236B — precisa de aproximadamente 130 GB de RAM em Q4, inviável sem GPU de servidor. Com menos de 48 GB de VRAM, o Qwen3 é a opção prática.' } },
        { '@type': 'Question', name: 'Posso executar o Qwen em um Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Apple Silicon usa memória unificada — um M2 Pro 32 GB executa o Qwen3 14B a ~32 tokens/seg. Um M3 Max 64 GB gerencia o Qwen3 32B a ~22 tokens/seg.' } },
        { '@type': 'Question', name: 'Qual comando do Ollama uso para o Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Para o novo flagship, execute `ollama run qwen3.6:27b` (~17 GB de VRAM). Para o Qwen3, use `ollama pull qwen3:8b`. Para o Qwen2.5, use `ollama pull qwen2.5:7b` para 7B, `ollama pull qwen2.5:14b` para 14B, `ollama pull qwen2.5:32b` para 32B, ou `ollama pull qwen2.5-coder:32b` para a variante de programação. Sempre use tags de tamanho explícitas.' } },
        { '@type': 'Question', name: 'O Qwen é adequado para tarefas em chinês?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Qwen3 foi pré-treinado em um grande corpus chinês e suporta nativamente chinês simplificado, chinês tradicional, japonês, coreano, árabe e mais 24 idiomas. Supera sistematicamente o Llama 3.3 e Mistral em compreensão e geração em chinês.' } },
        { '@type': 'Question', name: 'Qual quantização devo usar para o Qwen3?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M é o padrão recomendado — reduz a VRAM em aproximadamente 55% em relação ao FP16 com menos de 1% de perda de qualidade nos benchmarks. Use Q8_0 se tiver VRAM sobrando e quiser qualidade próxima ao FP16. Evite Q2_K para uso em chinês.' } },
        { '@type': 'Question', name: 'O Qwen2-VL funciona para OCR de documentos em chinês?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — o Qwen2-VL 7B é o modelo de visão local mais poderoso para OCR de documentos CJK. Funciona com ~6 GB de VRAM via `ollama pull qwen2-vl:7b` e lê texto em chinês, japonês e coreano em resoluções de até 4096×4096.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Qwen 3.6 27B é a nova escolha principal**: denso, Apache 2.0, contexto de 256K, ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b` (lançado em abril de 2026).',
          '**Qwen3 8B funciona com 5,5 GB de VRAM** — um único comando `ollama pull qwen2.5:7b` e já está em execução a 57 tokens/seg em uma RTX 3060.',
          '**Quatro subfamílias práticas**: Qwen3 (geral, modo de raciocínio), Qwen2.5 (geral, mais testada), Qwen2.5-Coder (programação, 92,7% no HumanEval em 32B), Qwen2-VL (visão, melhor OCR CJK local).',
          '**Arquitetura densa = compatível com hardware de consumo**: ao contrário do modelo MoE de 236B do DeepSeek (~130 GB de RAM), o Qwen2.5-72B cabe em 46 GB de VRAM em duas RTX 3090.',
          '**Multilíngue nativo**: pré-treinado em chinês, japonês, coreano, árabe, alemão, francês e mais 23 idiomas — o Qwen3 supera sistematicamente o Llama 3.3 em tarefas CJK.',
          '**Q4_K_M é a quantização correta** para a maioria dos usuários: ~55% de redução de VRAM, menos de 1% de perda de qualidade nos benchmarks.',
          '**Decisão de hardware**: 12 GB de VRAM → modelo 14B; 24 GB → 32B; 48 GB+ (duas GPUs ou Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen3 cobre três subfamílias de implantação local — uso geral (7B–72B), programação (Coder 7B–32B) e visão (VL 7B–72B) — todas executáveis via Ollama ou LM Studio.' },
          { type: 'plain-terms', text: 'Executar um modelo localmente significa que a IA roda no seu próprio computador em vez de em um servidor na nuvem. Nenhum dado sai da sua máquina e não há custo por token após adquirir o hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Visão geral da família de modelos Qwen',
        content: [
          '**A linha Qwen agora abrange cinco opções práticas: o flagship Qwen 3.6 27B, a família Qwen3 mais recente, o Qwen2.5 de raciocínio geral, o Qwen2.5-Coder e o Qwen2-VL para visão** — cada uma com múltiplas opções de tamanho. Todos são modelos de pesos abertos publicados pela equipe Qwen da Alibaba no Hugging Face sob a licença Apache 2.0.',
          'Escolha primeiro a subfamília e depois o tamanho que se encaixa na sua VRAM. É comum combinar subfamílias: Qwen2.5-Coder 14B para autocompletar código e Qwen3 8B ou Qwen 3.6 27B para resumir documentos.',
        ],
        rows: [
          { 'Subfamília': 'Qwen3', 'Tamanhos disponíveis': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Uso principal': 'Raciocínio geral, modo de raciocínio, multilíngue, tarefas agênticas', 'Prefixo de tag Ollama': 'qwen3:' },
          { 'Subfamília': 'Qwen2.5', 'Tamanhos disponíveis': '7B, 14B, 32B, 72B', 'Uso principal': 'Raciocínio geral, tarefas em chinês/multilíngue, RAG', 'Prefixo de tag Ollama': 'qwen2.5:' },
          { 'Subfamília': 'Qwen2.5-Coder', 'Tamanhos disponíveis': '7B, 14B, 32B', 'Uso principal': 'Geração de código, depuração, HumanEval, SWE-bench', 'Prefixo de tag Ollama': 'qwen2.5-coder:' },
          { 'Subfamília': 'Qwen2-VL', 'Tamanhos disponíveis': '2B, 7B, 72B', 'Uso principal': 'OCR de documentos, perguntas sobre imagens, extração de texto CJK', 'Prefixo de tag Ollama': 'qwen2-vl:' },
        ],
        columns: ['Subfamília', 'Tamanhos disponíveis', 'Uso principal', 'Prefixo de tag Ollama'],
        tableFormat: true,
        note: 'O Qwen 3.6 27B (lançado em abril de 2026) é a nova escolha principal — um modelo denso com janela de contexto de 256K que funciona com ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b`. O Qwen2.5 continua sendo a família mais testada, com a cobertura mais ampla no Ollama e GGUF em meados de 2026.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Requisitos de hardware por tamanho de modelo',
        content: [
          '**Escolha primeiro seu nível de VRAM e depois o maior modelo Qwen3 que caiba.** Q4_K_M é a quantização padrão usada em todos os números abaixo — oferece a melhor relação tamanho/qualidade para Ollama e LM Studio.',
        ],
        rows: [
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidade (RTX 3060)': '~57 tok/s' },
          { 'Modelo': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidade (RTX 3060)': '~55 tok/s' },
          { 'Modelo': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 GB', 'GPU mínima': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidade (RTX 4060)': '~38 tok/s' },
          { 'Modelo': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidade (RTX 4070)': '~38 tok/s' },
          { 'Modelo': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidade (RTX 4070)': '~36 tok/s' },
          { 'Modelo': 'Qwen3 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidade (RTX 4090)': '~28 tok/s' },
          { 'Modelo': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidade (RTX 4090)': '~27 tok/s' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'GPU mínima': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Velocidade (RTX 4090)': '~24 tok/s' },
          { 'Modelo': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidade (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidade (RTX 3060)'],
        tableFormat: true,
        note: 'Os números de VRAM correspondem a arquivos GGUF Q4_K_M da biblioteca do Ollama. Adicione 1–2 GB para o cache KV com um contexto de 4K. Se a GPU tiver menos VRAM do que o modelo precisa, o Ollama descarrega camadas automaticamente para a RAM do sistema — funciona, mas reduz a velocidade significativamente.',
        callouts: [
          { type: 'tip', text: 'Já identificou o seu nível de VRAM? Veja [exatamente qual GPU ou Mac comprar para esse nível](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M4 Pro ou GPU dupla.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-pt.webp',
        imageCaption: 'Requisitos de VRAM do Qwen3 por tamanho de modelo (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuração com Ollama',
        content: [
          '**O Ollama é a forma mais rápida de executar qualquer modelo Qwen3 localmente** — gerencia o download do modelo, a quantização GGUF e a API local em `localhost:11434` sem nenhuma configuração. Instale a partir de [ollama.com](https://ollama.com/download). Se você nunca usou o Ollama antes, leia primeiro [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar o Ollama', whyItMatters: 'Disponível para macOS, Linux (instalação em uma linha) e Windows. Não é necessário configurar drivers de GPU — o Ollama detecta CUDA, ROCm e Metal automaticamente.' },
          { title: 'Baixar o modelo com uma tag de tamanho explícita', whyItMatters: 'Sempre especifique o tamanho: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. O `qwen2.5` sem tag resolve para o modelo 7B, mas pode mudar entre versões do Ollama.' },
          { title: 'Executar o modelo', whyItMatters: '`ollama run qwen2.5:7b` abre um chat interativo. Digite seu prompt e pressione Enter. Feche com `/bye`.' },
          { title: 'Ajustar a janela de contexto se necessário', whyItMatters: 'O Qwen3 suporta por padrão um contexto de 32K no Ollama. Para usar um contexto de 128K em um modelo 7B, execute `ollama run qwen2.5:7b --num-ctx 131072`. Isso requer mais VRAM.' },
          { title: 'Testar o endpoint da API', whyItMatters: 'O Ollama expõe uma API compatível com OpenAI. Aplicativos como PromptQuorum, Continue.dev e Open WebUI se conectam diretamente a `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Instalar o Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: baixe o .dmg em ollama.com ou:
brew install ollama

# Baixar modelos — use tags explícitas
ollama pull qwen3.6:27b          # flagship, contexto 256K (~17 GB)
ollama pull qwen3:8b             # Qwen3 uso geral 8B (~5,5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 uso geral 7B (~5,5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 uso geral 14B (~9,5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 uso geral 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20,5 GB)
ollama pull qwen2-vl:7b          # visão 7B (~6,2 GB)

# Executar em modo interativo
ollama run qwen2.5:7b

# Testar a API compatível com OpenAI
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Olá"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuração com LM Studio',
        content: [
          '**O LM Studio oferece uma interface gráfica para o Qwen3 sem precisar de comandos no terminal.** Baixe em [lmstudio.ai](https://lmstudio.ai) ou consulte [como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio). Funciona no macOS, Windows e Linux.',
        ],
        numberedItems: [
          { title: 'Abrir o navegador de modelos', whyItMatters: 'Pesquise "Qwen3" ou "Qwen Coder" para explorar todos os builds GGUF disponíveis. Filtre por Q4_K_M para a relação qualidade/tamanho recomendada.' },
          { title: 'Baixar um build GGUF', whyItMatters: 'Selecione a variante Q4_K_M. O LM Studio mostra o tamanho do arquivo antes do download — confirme que se encaixa na VRAM disponível.' },
          { title: 'Carregar o modelo e começar a conversar', whyItMatters: 'Clique no modelo na barra lateral esquerda para carregá-lo na memória. A alocação de camadas para a GPU é automática com base na VRAM detectada.' },
          { title: 'Iniciar o servidor local', whyItMatters: '"Iniciar servidor" expõe um endpoint compatível com OpenAI em `localhost:1234`. Seus aplicativos e scripts se conectam a ele como se fosse a API da OpenAI.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantização: qual formato escolher',
        content: [
          '**Q4_K_M é o padrão correto para o Qwen3 em hardware de consumo.** Reduz a VRAM em 55–60% em relação ao FP16 com menos de 1% de degradação no MMLU e HumanEval. Outros formatos têm casos de uso específicos:',
        ],
        items: [
          '**Q4_K_M** (recomendado): ~5,5 GB para 7B. A melhor relação qualidade por GB. Comece por este.',
          '**Q8_0**: ~8,5 GB para 7B. Qualidade próxima ao FP16; use se tiver VRAM sobrando e quiser máxima precisão.',
          '**Q5_K_M**: ~6,5 GB para 7B. Melhoria marginal sobre Q4_K_M — escolha apenas se a qualidade de saída do Q4_K_M for visivelmente deficiente para sua tarefa.',
          '**Q2_K**: ~3 GB para 7B. O arquivo menor, mas a qualidade de saída em chinês se degrada notavelmente — evite com Qwen3 se o chinês faz parte do seu caso de uso.',
          '**IQ4_XS**: ~4,8 GB para 7B. Uma quantização imatrix mais recente que supera a qualidade do Q4_K_M com um tamanho ligeiramente menor — disponível em versões recentes do llama.cpp e LM Studio 0.3+.',
        ],
        note: 'Para uma explicação completa sobre quantização, consulte [quantização de LLM explicada](/pt/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M é a melhor quantização do Qwen3 para a maioria dos usuários: reduz a VRAM em 55% com menos de 1% de perda de qualidade em relação ao FP16.' },
          { type: 'plain-terms', text: 'A quantização comprime os números do modelo de 16 bits para 4 bits, reduzindo aproximadamente pela metade o tamanho do arquivo e a VRAM necessária. É como passar de TIFF para JPEG de alta qualidade — arquivo menor, resultado quase idêntico para a maioria dos usos.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Desempenho em benchmarks em hardware de consumo',
        content: [
          '**O Qwen3 32B Q4_K_M em uma RTX 4090 entrega 28 tokens/seg — velocidade suficiente para assistência de código em tempo real.** As pontuações abaixo correspondem a builds GGUF Q4_K_M testados no Ollama.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2%', 'Math': '58,8%', 'HumanEval': '57,3%', 'Velocidade (RTX 3060 12 GB)': '57 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9%', 'Math': '69,8%', 'HumanEval': '64,6%', 'Velocidade (RTX 4070 12 GB)': '38 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3%', 'Math': '79,5%', 'HumanEval': '71,3%', 'Velocidade (RTX 4090 24 GB)': '28 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1%', 'Math': '83,1%', 'HumanEval': '73,2%', 'Velocidade (2×RTX 3090)': '12 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6%', 'Velocidade (RTX 3060 12 GB)': '55 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2%', 'Velocidade (RTX 4070 12 GB)': '36 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7%', 'Velocidade (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidade (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Quer essa pontuação de 92,7% no HumanEval a 27 tok/s? Veja a [GPU de 24 GB que executa o Qwen3-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-pt.webp',
        imageCaption: 'Pontuações de benchmark do Qwen3 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: o que executar localmente',
        content: [
          '**O Qwen3 vence em tarefas em chinês e eficiência de VRAM; o DeepSeek-V2.5 vence em raciocínio em grande escala mas é impraticável em hardware de consumo; o Llama 3.3 70B é a melhor opção em uma única GPU se você preferir o modelo aberto da Meta.**',
        ],
        rows: [
          { 'Nível de VRAM': '6 GB', 'Melhor Qwen': 'Qwen3 8B', 'Melhor concorrente': 'Llama 3.2 3B (cabe, mas apenas 3B)', 'Veredicto': 'Qwen3 8B vence — mesma VRAM, modelo muito maior' },
          { 'Nível de VRAM': '12 GB', 'Melhor Qwen': 'Qwen3-Coder 14B', 'Melhor concorrente': 'Llama 3.3 8B Instruct', 'Veredicto': 'Qwen3-Coder 14B para código; Llama 3.3 8B para chat geral' },
          { 'Nível de VRAM': '24 GB', 'Melhor Qwen': 'Qwen3-Coder 32B', 'Melhor concorrente': 'Llama 3.3 70B (com descarregamento)', 'Veredicto': 'Qwen3-Coder 32B para código; Llama 3.3 70B se qualidade > velocidade' },
          { 'Nível de VRAM': '48 GB+', 'Melhor Qwen': 'Qwen2.5-72B', 'Melhor concorrente': 'DeepSeek-V2.5 236B MoE', 'Veredicto': 'DeepSeek precisa de ~130 GB de RAM; Qwen2.5-72B é a opção prática para 48 GB' },
        ],
        columns: ['Nível de VRAM', 'Melhor Qwen', 'Melhor concorrente', 'Veredicto'],
        tableFormat: true,
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Usuários brasileiros: soberania de dados e implantação local',
        content: [
          '**Executar o Qwen3 localmente significa que nenhum dado sai da sua máquina — sem transferência para servidores na nuvem, sem exposição sob a LGPD ou outras leis de proteção de dados brasileiras.** APIs de LLM na nuvem exigem enviar prompts para servidores externos, o que aciona os requisitos de tratamento de dados e possíveis transferências internacionais.',
          'O Qwen3 foi treinado pela equipe Qwen da Alibaba em um corpus predominantemente chinês e multilíngue. É o modelo com implantação local mais poderoso para documentos em chinês simplificado, chinês tradicional e textos mistos.',
          '**Para implantações em empresas brasileiras**: uma configuração do Qwen3 sem conexão à internet durante a inferência é totalmente compatível com a Lei Geral de Proteção de Dados (LGPD) e as diretrizes da ANPD. O modelo roda inteiramente em hardware local — nenhum terceiro acessa os dados de entrada ou saída.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen3 funciona completamente offline após o download — nenhum dado sai da sua máquina, eliminando o risco de transferência transfronteiriça de dados sob a LGPD e as regulamentações da ANPD.' },
          { type: 'plain-terms', text: 'Quando você executa o Qwen3 localmente, seus prompts e documentos nunca saem do seu computador. Não há chamadas para uma API na nuvem, não há servidor externo e não há dados acessíveis por reguladores ou terceiros.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qual hardware comprar para implantar o Qwen3?',
        content: [
          '**Primeiro, ajuste o nível de Qwen desejado à VRAM necessária e depois compre a placa mais barata que atenda esse requisito — pagar por mais VRAM do que o modelo precisa é o gasto excessivo mais comum nesta lista.** As recomendações abaixo correspondem diretamente à tabela de hardware acima: econômico → RTX 4060, médio porte → RTX 4070 Super, alto desempenho → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, uso contínuo → um mini PC. Os preços abaixo refletem o mercado de GPUs em 2026 — a escassez de chips de memória e a demanda de data centers de IA encareceram tanto as GPUs novas quanto as configurações de memória da Apple, e no Brasil o imposto de importação amplia ainda mais essa diferença; confirme o preço atual antes de comprar.',
        ],
        callouts: [
          { type: 'tip', text: 'Pule esta seção se você já tem uma GPU com 8 GB de VRAM ou mais — primeiro execute o Qwen3 8B no que você já possui. Só compre hardware novo quando atingir esse limite e quiser um modelo maior.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Opção econômica — Qwen3 8B, Qwen3-Coder 7B (5,5 GB de VRAM)',
            verdict: 'A placa mais barata desta lista que atende ao requisito de 5,5 GB do Qwen3 8B com folga para o contexto. Executa o Qwen3-Coder 7B a ~55 tok/s — velocidade suficiente para assistência de código interativa.',
            pros: [
              'O requisito de 5,5 GB de VRAM é atendido com folga para o cache KV de contexto longo',
              'Preço mais baixo desta lista — a primeira GPU certa se você nunca executou um LLM local',
              '50–57 tok/s em modelos 7B/8B, no mesmo nível de placas mais caras nesse tamanho de modelo',
            ],
            cons: [
              'Limita-se ao Qwen3 8B / Qwen3-Coder 7B — sem margem para crescer para 14B sem comprimir o cache KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com.br/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: 'R$ 3.600–4.600', label: 'Ver preço atual →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Opção intermediária — Qwen3 14B, Qwen3-Coder 14B (9,5 GB de VRAM)',
            verdict: 'Executa o Qwen3-Coder 14B (85,2% no HumanEval) a 36–38 tok/s, com 2–3 GB de VRAM sobrando para contexto — o nível em que a qualidade de código dá um salto perceptível em relação aos modelos 7B/8B.',
            pros: [
              'O modelo de 9,5 GB cabe com 2–3 GB de VRAM sobrando — espaço para janelas de contexto maiores',
              'O HumanEval sobe de 75,6% (7B) para 85,2% (14B) — o salto de custo-benefício mais claro da linha',
              '~38 tok/s mantêm o chat interativo e a conclusão de código responsivos',
            ],
            cons: [
              'VRAM insuficiente para o nível 32B — considere revender ou reaproveitar se precisar ir além do 14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com.br/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: 'R$ 6.900–7.800', label: 'Ver preço atual →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (ou RTX 3090 24 GB usada)',
            tagline: 'Opção de alto desempenho — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20,5 GB de VRAM)',
            verdict: 'A 4090 entrega 27–28 tok/s no Qwen3-Coder 32B — velocidade de codificação em tempo real com 92,7% no HumanEval. Uma RTX 3090 usada tem a mesma VRAM de 24 GB e fica cerca de 15% atrás da velocidade de inferência da 4090, por um preço bem menor se você encontrar um anúncio de segunda mão confiável.',
            pros: [
              '24 GB de VRAM cobrem todas as variantes do Qwen3 32B e o Qwen 3.6 27B com folga',
              '27–28 tok/s no Qwen3-Coder 32B (92,7% no HumanEval) — rápido o suficiente para pair programming em tempo real',
              'A RTX 3090 usada é a alternativa econômica: mesmo limite de VRAM, cerca de 15% mais lenta, bem mais barata de segunda mão',
            ],
            cons: [
              'Custo inicial mais alto desta lista — só se justifica quando você realmente precisa da qualidade de nível 32B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com.br/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: 'R$ 24.500–29.800', label: 'Ver preço atual →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (usada)', productCategory: 'GPU', priceRange: 'R$ 11.200–13.800', label: 'Ver anúncios usados →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Opção Apple Silicon — Qwen3 32B (~22 tok/s, silencioso e de baixo consumo)',
            verdict: 'A melhor relação custo-benefício para executar o Qwen3 32B com memória unificada — silencioso, baixo consumo de energia, sem GPU separada para instalar. Para o Qwen2.5-72B, é necessário o M2 Ultra 192 GB.',
            pros: [
              '48 GB de memória unificada atendem ao requisito de 20,5 GB do Qwen3 32B com espaço para outros aplicativos',
              'Operação silenciosa e consumo adequado para uso de mesa — sem necessidade de gerenciar refrigeração dedicada de GPU',
              'Uma única compra cobre sistema operacional, armazenamento e inferência — sem montagem separada de GPU/fonte/gabinete',
            ],
            cons: [
              '~22 tok/s no Qwen3 32B é visivelmente mais lento que os 27–28 tok/s de uma RTX 4090',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/br/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: 'R$ 21.000–23.000', label: 'Ver preço atual →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (ou mini PC AMD Ryzen AI similar)',
            tagline: 'Opção para uso contínuo — Qwen3 8B em CPU + iGPU (~8–12 tok/s, menos de 35 W)',
            verdict: 'Não indicado para uso interativo — serve para manter uma instância do Qwen3 8B em execução 24 horas por dia, 7 dias por semana para tarefas em segundo plano, automação residencial ou um endpoint de API de baixo tráfego, em que o custo de energia importa mais que a velocidade.',
            pros: [
              'Consumo abaixo de 35 W — barato para rodar continuamente, ao contrário de uma configuração de desktop com GPU',
              'Formato compacto cabe em qualquer lugar; sem GPU separada para adquirir ou refrigerar',
              'Executa o Qwen3 8B sem nenhuma GPU dedicada',
            ],
            cons: [
              '8–12 tok/s é lento demais para chat interativo — opção voltada apenas para uso em segundo plano/API',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com.br/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: 'R$ 5.100–6.900', label: 'Ver preço atual →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros frequentes ao executar o Qwen3 localmente',
        items: [
          '**Usar o comando `ollama pull qwen2.5` sem tag de tamanho.** Sem uma tag de tamanho explícita (`:7b`, `:14b`, etc.), o Ollama pode resolver para o tamanho padrão, que pode mudar entre atualizações da biblioteca. Sempre use tags explícitas: `ollama pull qwen2.5:14b`.',
          '**Ignorar o tamanho da janela de contexto.** O Qwen3 suporta um contexto de 128K. A especificação do Modelfile do Ollama define `num_ctx` como 2048 por padrão, mas o runtime na verdade aplica um padrão escalonado por VRAM: 4K abaixo de 24 GiB, 32K entre 24 e 48 GiB, 256K acima de 48 GiB. Não confie em nenhum dos dois padrões: defina `num_ctx` explicitamente, por exemplo adicionando `--num-ctx 8192` (ou mais) ao comando de execução — caso contrário o modelo trunca a entrada silenciosamente.',
          '**Escolher quantização Q2_K para uso em chinês.** A 2 bits de precisão, a saída em chinês do Qwen3 se degrada notavelmente. Use Q4_K_M no mínimo para qualquer trabalho em chinês.',
          '**Executar o modelo 32B com pouca VRAM.** Se a GPU tiver 16 GB e o modelo precisar de 20,5 GB, o Ollama descarrega camadas para a RAM do sistema. O modelo funciona mas a 3–5 tok/s — inutilizável para uso interativo.',
          '**Usar a subfamília errada para programação.** O Qwen3 8B (uso geral) pontua 57,3% no HumanEval. O Qwen3-Coder 7B pontua 75,6% — uma melhoria relativa de 32%. Para código, sempre use a variante Coder do mesmo tamanho.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'Próximos passos',
        items: [
          '[Melhores LLMs apenas CPU](/pt/local-llms/best-cpu-only-llm) — Sem GPU? Veja quais tamanhos do Qwen3 rodam só no CPU →',
          '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained) — Confuso com Q4_K_M vs Q8? Quantização explicada →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Quanta VRAM preciso para executar o Qwen3 8B localmente?', a: 'O Qwen3 8B Q4_K_M requer 5,5 GB de VRAM. Uma RTX 3060 6 GB, RTX 4060 ou chip Apple M com 8 GB de memória unificada são suficientes.' },
          { q: 'Qual é o melhor modelo Qwen para programação localmente?', a: 'Qwen3-Coder 32B — 92,7% no HumanEval, precisa de GPU de 24 GB. Com 12 GB de VRAM ou menos: Qwen3-Coder 14B (85,2%, 9,5 GB de VRAM).' },
          { q: 'Como o Qwen se compara ao DeepSeek para implantação local?', a: 'O Qwen3 usa arquitetura densa compatível com hardware de consumo. O DeepSeek-V2.5 é um modelo MoE de 236B que precisa de ~130 GB de RAM — inviável sem GPU de servidor.' },
          { q: 'Posso executar o Qwen em um Mac?', a: 'Sim. M2 Pro 32 GB executa o Qwen3 14B a ~32 tok/s. M3 Max 64 GB gerencia o Qwen3 32B a ~22 tok/s.' },
          { q: 'Qual comando do Ollama uso para o Qwen?', a: 'Para o flagship, `ollama run qwen3.6:27b` (~17 GB de VRAM). Para o Qwen3, `ollama pull qwen3:8b`. Para o Qwen2.5, `ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, ou `qwen2.5-coder:32b` para a variante de programação. Sempre use tags de tamanho explícitas.' },
          { q: 'O Qwen é adequado para tarefas em chinês?', a: 'Sim. O Qwen3 foi pré-treinado em um grande corpus chinês e suporta nativamente chinês simplificado, chinês tradicional, japonês, coreano e mais 24 idiomas.' },
          { q: 'Qual quantização devo usar para o Qwen3?', a: 'Q4_K_M por padrão — reduz a VRAM ~55% em relação ao FP16 com menos de 1% de perda de qualidade. Evite Q2_K para uso em chinês.' },
          { q: 'O Qwen2-VL funciona para OCR de documentos em chinês?', a: 'Sim — `ollama pull qwen2-vl:7b`, ~6 GB de VRAM, lê texto CJK em resoluções de até 4096×4096 pixels.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        links: [
          { url: '/pt/local-llms/run-qwen-locally-guide-2026', title: 'Como executar o Qwen 3 localmente em 2026', description: 'Guia de configuração de modelo único para o Qwen 3.6 27B com Ollama e LM Studio.' },
          { url: '/pt/local-llms/run-qwen-vl-locally-2026', title: 'Executar o Qwen2-VL localmente em 2026', description: 'Guia completo do Qwen2-VL — OCR de documentos CJK e leitura multilíngue de capturas de tela.' },
          { url: '/pt/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Comparação de benchmarks do Qwen 3.6 27B, Llama 4 Scout e Mistral Small 3.1.' },
          { url: '/pt/local-llms/llm-quantization-explained', title: 'Quantização de LLM explicada', description: 'O que significam Q4_K_M, Q8_0 e IQ4_XS — como afetam a VRAM, velocidade e qualidade de saída.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Guide de déploiement local Qwen 2026 : Qwen 3.6 27B, Coder et VL par niveau matériel',
    seoTitle: 'Qwen 3.6 27B local 2026 : Qwen3, Coder & VL par niveau matériel',
    intro: 'Qwen 3.6 27B est le nouveau modèle phare pour le déploiement local — un modèle dense sous licence Apache 2.0 avec une fenêtre de contexte de 256 K, qui tourne avec ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b`. Qwen3 8B fonctionne avec 5,5 Go de VRAM via Ollama — une seule commande, aucune configuration. Qwen2.5-Coder 32B atteint 92,7 % sur HumanEval. Qwen2-VL 7B est le meilleur modèle de vision local pour l\'OCR de documents chinois et japonais. Ce guide couvre l\'ensemble de la famille Qwen : quel modèle utiliser selon votre niveau matériel, la configuration Ollama et LM Studio, les recommandations de quantification, les données de benchmark et la comparaison avec DeepSeek et Llama sur matériel grand public en 2026.',
    metaDescription: 'Déployer Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder et Qwen2-VL en local en 2026. VRAM requis, Ollama + LM Studio, benchmarks Q4_K_M et guide par niveau matériel.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-fr.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs, chercheurs et utilisateurs soucieux de leur vie privée souhaitant déployer la famille de modèles Qwen en local',
    primaryTerm: 'déploiement local Qwen',
    affiliateDisclosure: true,
    ctaText: 'Dispatcher entre Qwen3, DeepSeek et Llama depuis une interface →',
    ctaButton: 'Essayer PromptQuorum gratuitement',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Le nouveau modèle phare est Qwen 3.6 27B — un modèle dense sous licence Apache 2.0 avec une fenêtre de contexte de 256 K, qui tourne avec ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b`.** Pour une configuration plus légère, installez Ollama et exécutez `ollama pull qwen2.5:7b` pour Qwen3 8B — 5,5 Go de VRAM suffisent, 57 tokens/s sur une RTX 3060. Pour le code, utilisez Qwen2.5-Coder ; pour l\'OCR de documents CJK, Qwen2-VL. Vous connaissez déjà votre budget VRAM ? Accédez directement au [GPU ou Mac à acheter pour chaque niveau Qwen](#affiliate-picks).',
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Famille de modèles Qwen3', anchor: '#model-family' },
      { label: 'Exigences matérielles par taille', anchor: '#hardware-tiers' },
      { label: 'Configuration avec Ollama', anchor: '#ollama-setup' },
      { label: 'Configuration avec LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Quantification : quel format choisir ?', anchor: '#quantization-guide' },
      { label: 'Performances benchmark sur matériel grand public', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: 'Contexte réglementaire', anchor: '#regional-context' },
      { label: 'Recommandations matérielles par budget', anchor: '#affiliate-picks' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Questions fréquentes', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'La présentation ci-dessous couvre : le nouveau modèle phare Qwen 3.6 27B (contexte 256 K, ~17 Go en Q4_K_M), la famille complète Qwen (Qwen3 0,6B–32B, Qwen2.5 7B–72B), les exigences VRAM par niveau matériel, les données de benchmark pour Qwen3-Coder 32B et un tableau de décision Qwen vs DeepSeek vs Llama. Télécharger comme fiche de référence.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guide de déploiement local Qwen 2026 : Qwen 3.6 27B, Qwen3, Coder et VL pour chaque niveau matériel',
      description: 'Guide complet du déploiement local de la famille Qwen — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder et VL, exigences VRAM, configuration Ollama et LM Studio, quantification, benchmarks et recommandations matérielles.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'fr',
      url: 'https://www.promptquorum.com/fr/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quelle quantité de VRAM est nécessaire pour Qwen3 8B en local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 6 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.' } },
        { '@type': 'Question', name: 'Quel est le meilleur modèle Qwen pour le code en local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B est le meilleur modèle de code déployable localement — 92,7 % sur HumanEval, nécessite un GPU 24 Go (RTX 3090 ou RTX 4090). Avec 12 Go de VRAM ou moins : Qwen3-Coder 14B (85,2 %, 9,5 Go VRAM).' } },
        { '@type': 'Question', name: 'Comment Qwen se compare-t-il à DeepSeek pour le déploiement local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 utilise une architecture dense qui tient sur du matériel grand public. DeepSeek-V2.5 est un modèle MoE de 236B — il nécessite ~130 Go de RAM, inaccessible sans GPU serveur.' } },
        { '@type': 'Question', name: 'Puis-je utiliser Qwen sur un Mac ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Apple Silicon utilise la mémoire unifiée — un M2 Pro 32 Go exécute Qwen3 14B à ~32 tokens/s. Un M3 Max 64 Go gère Qwen3 32B à ~22 tokens/s.' } },
        { '@type': 'Question', name: 'Quelle commande Ollama utiliser pour Qwen ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour le nouveau modèle phare, exécutez `ollama run qwen3.6:27b` (~17 Go de VRAM). Pour Qwen3, utilisez `ollama pull qwen3:8b`. Pour Qwen2.5, utilisez `ollama pull qwen2.5:7b` pour 7B, `ollama pull qwen2.5:14b` pour 14B, `ollama pull qwen2.5:32b` pour 32B, ou `ollama pull qwen2.5-coder:32b` pour la variante code. Toujours utiliser des tags de taille explicites.' } },
        { '@type': 'Question', name: 'Qwen est-il adapté aux tâches en langue chinoise ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 a été pré-entraîné sur un large corpus chinois et supporte nativement le chinois simplifié, le chinois traditionnel, le japonais, le coréen et 24 autres langues.' } },
        { '@type': 'Question', name: 'Quelle quantification utiliser pour Qwen3 ?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M est la valeur par défaut recommandée — réduction du VRAM de ~55 % par rapport au FP16 avec moins de 1 % de perte de qualité. Q8_0 pour une qualité quasi-FP16 si le VRAM le permet. Éviter Q2_K pour les usages en langue chinoise.' } },
        { '@type': 'Question', name: 'Qwen2-VL fonctionne-t-il pour l\'OCR de documents chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — Qwen2-VL 7B est le meilleur modèle de vision local pour l\'OCR de documents CJK. Il fonctionne avec ~6 Go de VRAM via `ollama pull qwen2-vl:7b` et lit jusqu\'à 4096×4096 pixels.' } },
        { '@type': 'Question', name: 'Qwen3 est-il compatible avec le RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'En déploiement local, Qwen3 utilise une architecture compatible avec le RGPD (aucune donnée d\'inférence envoyée à des tiers) — aucun DPA (accord de traitement des données) selon l\'article 28 du RGPD n\'est requis pour la couche IA. La CNIL recommande le traitement local pour les données sensibles dans les secteurs réglementés (médical, juridique, financier). La conformité complète dépend de vos mesures organisationnelles.' } },
        { '@type': 'Question', name: 'Qwen3 peut-il traiter des documents mixtes français-chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Qwen3 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2-VL 7B est plus adapté — il extrait le texte depuis les images sans confusion de script.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B est le nouveau modèle phare** : dense, Apache 2.0, contexte 256 K, ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b` (sorti en avril 2026).',
          '**Qwen3 8B tourne avec 5,5 Go de VRAM** — une commande `ollama pull qwen2.5:7b` suffit ; 57 tokens/s sur RTX 3060.',
          '**Quatre sous-familles pratiques** : Qwen3 (général, mode réflexion), Qwen2.5 (général, le plus testé), Qwen2.5-Coder (code, 92,7 % HumanEval en 32B), Qwen2-VL (vision, meilleur OCR CJK local).',
          '**Architecture dense = compatible matériel grand public** : contrairement au modèle MoE 236B de DeepSeek (~130 Go RAM), Qwen2.5-72B tient en 46 Go VRAM sur deux RTX 3090.',
          '**Multilinguisme natif** : pré-entraîné sur le chinois, le japonais, le coréen, l\'arabe, le français et 24 autres langues.',
          '**Q4_K_M est la bonne quantification** pour la plupart des utilisateurs : ~55 % de réduction VRAM, moins de 1 % de perte de qualité.',
          '**Décision matérielle** : 12 Go VRAM → modèle 14B ; 24 Go → 32B ; 48 Go+ → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 couvre trois sous-familles de déploiement local — usage général (7B–72B), code (Coder 7B–32B) et vision (VL 7B–72B) — toutes exécutables via Ollama ou LM Studio.' },
          { type: 'plain-terms', text: 'Faire tourner un modèle en local signifie que l\'IA s\'exécute sur votre propre ordinateur, sans serveur cloud. Aucune donnée ne quitte votre machine, et il n\'y a aucun coût par token après l\'achat du matériel.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Famille de modèles Qwen',
        content: [
          '**La gamme Qwen compte désormais cinq choix pratiques : le modèle phare Qwen 3.6 27B, la famille Qwen3 plus récente, Qwen2.5 pour le raisonnement général, Qwen2.5-Coder et Qwen2-VL pour la vision** — chacun disponible en plusieurs tailles. Tous sont des modèles open-weight publiés par l\'équipe Qwen d\'Alibaba sous licence Apache 2.0.',
        ],
        rows: [
          { 'Sous-famille': 'Qwen3', 'Tailles disponibles': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Usage principal': 'Raisonnement général, mode réflexion, multilingue, tâches agentiques', 'Préfixe tag Ollama': 'qwen3:' },
          { 'Sous-famille': 'Qwen2.5', 'Tailles disponibles': '7B, 14B, 32B, 72B', 'Usage principal': 'Raisonnement général, tâches chinoises/multilingues, RAG', 'Préfixe tag Ollama': 'qwen2.5:' },
          { 'Sous-famille': 'Qwen2.5-Coder', 'Tailles disponibles': '7B, 14B, 32B', 'Usage principal': 'Génération de code, débogage, HumanEval, SWE-bench', 'Préfixe tag Ollama': 'qwen2.5-coder:' },
          { 'Sous-famille': 'Qwen2-VL', 'Tailles disponibles': '2B, 7B, 72B', 'Usage principal': 'OCR de documents, Q&A sur images, extraction de texte CJK', 'Préfixe tag Ollama': 'qwen2-vl:' },
        ],
        columns: ['Sous-famille', 'Tailles disponibles', 'Usage principal', 'Préfixe tag Ollama'],
        tableFormat: true,
        note: 'Qwen 3.6 27B (sorti en avril 2026) est le nouveau modèle phare — un modèle dense avec une fenêtre de contexte de 256 K qui tourne avec ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b`. Qwen2.5 reste la famille la plus testée, avec la couverture Ollama et GGUF la plus large mi-2026.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Exigences matérielles par taille de modèle',
        content: [
          '**Choisissez d\'abord votre niveau VRAM, puis le plus grand modèle Qwen3 qui y tient.** Q4_K_M est la quantification standard pour toutes les valeurs ci-dessous.',
        ],
        rows: [
          { 'Modèle': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 6 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (RTX 3060)': '~57 tokens/s' },
          { 'Modèle': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 6 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (RTX 3060)': '~55 tokens/s' },
          { 'Modèle': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 Go', 'GPU minimum': 'RTX 3060 8 Go, RTX 4060', 'Apple Silicon': 'M1/M2 16 Go', 'Vitesse (RTX 4060)': '~38 tokens/s' },
          { 'Modèle': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (RTX 4070)': '~38 tokens/s' },
          { 'Modèle': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (RTX 4070)': '~36 tokens/s' },
          { 'Modèle': 'Qwen3 32B Q4_K_M', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (RTX 4090)': '~28 tokens/s' },
          { 'Modèle': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (RTX 4090)': '~27 tokens/s' },
          { 'Modèle': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 Go', 'GPU minimum': 'RTX 4090 24 Go', 'Apple Silicon': 'M3 Max 36 Go', 'Vitesse (RTX 4090)': '~24 tokens/s' },
          { 'Modèle': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 Go', 'GPU minimum': '2× RTX 3090 (48 Go)', 'Apple Silicon': 'M2 Ultra 64 Go', 'Vitesse (2×RTX 4090)': '~12 tokens/s' },
        ],
        columns: ['Modèle', 'VRAM', 'GPU minimum', 'Apple Silicon', 'Vitesse (RTX 3060)'],
        tableFormat: true,
        note: 'Les valeurs VRAM concernent les fichiers GGUF Q4_K_M de la bibliothèque Ollama. Ajoutez 1–2 Go pour le cache KV à 4K de contexte. Si le GPU a moins de VRAM que nécessaire, Ollama décharge automatiquement des couches en RAM système — fonctionnel mais beaucoup plus lent.',
        callouts: [
          { type: 'tip', text: 'Vous avez identifié votre niveau VRAM ? Consultez [exactement quel GPU ou Mac acheter pour ce niveau](#affiliate-picks) — 6 Go → RTX 4060, 12 Go → RTX 4070 Super, 24 Go → RTX 3090/4090, 48 Go et plus → Mac mini M4 Pro ou double GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-fr.webp',
        imageCaption: 'Exigences VRAM Qwen3 par taille de modèle (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuration avec Ollama',
        content: [
          '**Ollama est la solution la plus rapide pour déployer localement n\'importe quel modèle Qwen3.** Il gère le téléchargement, la quantification GGUF et expose une API à `localhost:11434`. Installez-le depuis [ollama.com](https://ollama.com/download). Si vous débutez avec Ollama : [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'Disponible pour macOS, Linux (installation en une ligne) et Windows. Ollama détecte automatiquement CUDA, ROCm et Metal.' },
          { title: 'Télécharger le modèle avec un tag de taille explicite', whyItMatters: 'Toujours préciser la taille : `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. Le tag non spécifié `qwen2.5` peut changer entre les versions d\'Ollama.' },
          { title: 'Exécuter le modèle', whyItMatters: '`ollama run qwen2.5:7b` ouvre un chat interactif. Saisir la commande et appuyer sur Entrée. Quitter avec `/bye`.' },
          { title: 'Ajuster la fenêtre de contexte si nécessaire', whyItMatters: 'Qwen3 supporte 32K de contexte par défaut dans Ollama. Pour 128K : `ollama run qwen2.5:7b --num-ctx 131072`. Cela nécessite davantage de VRAM.' },
          { title: 'Tester le point de terminaison API', whyItMatters: 'Ollama expose une API compatible OpenAI. Les applications comme PromptQuorum et Continue.dev se connectent directement à `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Installer Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS : télécharger le .dmg ou :
brew install ollama

# Télécharger les modèles — tags explicites requis
ollama pull qwen3.6:27b          # modèle phare, contexte 256 K (~17 Go)
ollama pull qwen3:8b             # Qwen3 usage général 8B (~5,5 Go)
ollama pull qwen2.5:7b           # Qwen2.5 usage général 7B (~5,5 Go)
ollama pull qwen2.5:14b          # Qwen2.5 14B (~9,5 Go)
ollama pull qwen2.5:32b          # Qwen2.5 32B (~20,5 Go)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20,5 Go)
ollama pull qwen2-vl:7b          # vision 7B (~6,2 Go)

# Exécuter en mode interactif
ollama run qwen2.5:7b

# Tester l'API compatible OpenAI
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Bonjour"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuration avec LM Studio',
        content: [
          '**LM Studio offre une interface graphique pour Qwen3 sans commandes terminal.** Téléchargement sur [lmstudio.ai](https://lmstudio.ai) ou voir [comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio). Disponible sur macOS, Windows et Linux.',
        ],
        numberedItems: [
          { title: 'Ouvrir le navigateur de modèles', whyItMatters: 'Rechercher « Qwen3 » ou « Qwen Coder ». Filtrer sur Q4_K_M pour le meilleur rapport qualité/taille.' },
          { title: 'Télécharger un build GGUF', whyItMatters: 'Sélectionner la variante Q4_K_M. LM Studio affiche la taille du fichier avant le téléchargement.' },
          { title: 'Charger le modèle et démarrer le chat', whyItMatters: 'Cliquer sur le modèle dans la barre latérale gauche. L\'allocation des couches GPU est automatique.' },
          { title: 'Démarrer le serveur local', whyItMatters: '« Démarrer le serveur » expose une API compatible OpenAI sur `localhost:1234`.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantification : quel format choisir ?',
        content: [
          '**Q4_K_M est le bon choix par défaut pour Qwen3 sur matériel grand public.** Il réduit le VRAM de ~55–60 % par rapport au FP16 avec moins de 1 % de dégradation sur MMLU et HumanEval.',
        ],
        items: [
          '**Q4_K_M** (recommandé) : ~5,5 Go pour 7B. Meilleur rapport qualité par Go.',
          '**Q8_0** : ~8,5 Go pour 7B. Qualité quasi-FP16 ; utiliser si vous avez du VRAM disponible.',
          '**Q5_K_M** : ~6,5 Go pour 7B. Amélioration marginale par rapport à Q4_K_M.',
          '**Q2_K** : ~3 Go pour 7B. La qualité en langue chinoise se dégrade notablement — à éviter pour les usages CJK.',
          '**IQ4_XS** : ~4,8 Go pour 7B. Meilleure qualité que Q4_K_M à taille légèrement inférieure — disponible dans les versions récentes de llama.cpp et LM Studio 0.3+.',
        ],
        note: 'Pour une explication complète de la quantification : [quantification LLM expliquée](/fr/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M est la meilleure quantification Qwen3 pour la plupart des utilisateurs : 55 % de réduction VRAM avec moins de 1 % de perte de qualité vs FP16.' },
          { type: 'plain-terms', text: 'La quantification compresse les nombres du modèle de 16 bits à 4 bits, réduisant environ de moitié la taille du fichier et le VRAM nécessaire — comme passer d\'un TIFF à un JPEG haute qualité.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Performances benchmark sur matériel grand public',
        content: [
          '**Qwen3 32B Q4_K_M sur RTX 4090 : 28 tokens/s** — assez rapide pour l\'assistance au code en temps réel. Scores ci-dessous pour les builds GGUF Q4_K_M testés sur Ollama.',
        ],
        rows: [
          { 'Modèle (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Vitesse (RTX 3060 12 Go)': '57 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Vitesse (RTX 4070 12 Go)': '38 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Vitesse (RTX 4090 24 Go)': '28 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Vitesse (2×RTX 3090)': '12 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Vitesse (RTX 3060 12 Go)': '55 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Vitesse (RTX 4070 12 Go)': '36 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Vitesse (RTX 4090 24 Go)': '27 tokens/s' },
        ],
        columns: ['Modèle (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Vitesse (RTX 3060 12 Go)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Vous voulez ce score HumanEval de 92,7 % à 27 tokens/s ? Consultez le [GPU 24 Go qui exécute Qwen3-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-fr.webp',
        imageCaption: 'Scores benchmark Qwen3 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama : que déployer localement ?',
        content: [
          '**Qwen3 gagne sur les tâches en langue chinoise et l\'efficacité VRAM ; DeepSeek-V2.5 gagne sur le raisonnement à grande échelle mais est impraticable sur matériel grand public ; Llama 3.3 70B est la meilleure option monoGPU si vous préférez le modèle ouvert de Meta.**',
        ],
        rows: [
          { 'Niveau VRAM': '6 Go', 'Meilleur Qwen': 'Qwen3 8B', 'Meilleur concurrent': 'Llama 3.2 3B', 'Recommandation': 'Qwen3 8B — même VRAM, modèle beaucoup plus grand' },
          { 'Niveau VRAM': '12 Go', 'Meilleur Qwen': 'Qwen3-Coder 14B', 'Meilleur concurrent': 'Llama 3.3 8B Instruct', 'Recommandation': 'Qwen3-Coder 14B pour le code ; Llama 3.3 8B pour le chat' },
          { 'Niveau VRAM': '24 Go', 'Meilleur Qwen': 'Qwen3-Coder 32B', 'Meilleur concurrent': 'Llama 3.3 70B (déchargé)', 'Recommandation': 'Qwen3-Coder 32B pour le code ; Llama 3.3 70B si qualité > vitesse' },
          { 'Niveau VRAM': '48 Go+', 'Meilleur Qwen': 'Qwen2.5-72B', 'Meilleur concurrent': 'DeepSeek-V2.5 236B MoE', 'Recommandation': 'DeepSeek nécessite ~130 Go RAM ; Qwen2.5-72B est le choix pratique' },
        ],
        columns: ['Niveau VRAM', 'Meilleur Qwen', 'Meilleur concurrent', 'Recommandation'],
        tableFormat: true,
        content2: 'Pour une comparaison approfondie entre DeepSeek et Qwen sur le code, le raisonnement et le multilingue : [Comparaison locale DeepSeek vs Qwen 2026](/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Contexte réglementaire : RGPD et CNIL',
        content: [
          '**Déployer Qwen3 en local signifie qu\'aucune donnée ne quitte votre machine — aucun transfert vers un serveur cloud étranger.** Les API LLM cloud exigent l\'envoi de prompts vers des serveurs étrangers, ce qui déclenche l\'article 28 du RGPD (sous-traitant) et potentiellement les articles 44 et suivants (transferts hors UE).',
          'Qwen3 a été entraîné par l\'équipe Qwen d\'Alibaba sur un corpus principalement chinois et multilingue. C\'est le modèle localement déployable le plus performant pour le chinois simplifié, le traditionnel et les documents mixtes chinois/anglais/français.',
          '**Pour les déploiements professionnels** : la CNIL recommande le traitement local des données personnelles sensibles dans les secteurs réglementés (médical, juridique, financier) lorsque cela est techniquement possible. Un déploiement Qwen3 sans connexion internet pendant l\'inférence utilise une architecture compatible avec le RGPD (aucune donnée d\'inférence envoyée à des tiers). Guide complet pour les setups hors ligne : [IA locale entièrement hors ligne](/fr/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 fonctionne entièrement hors ligne après téléchargement — aucune donnée ne quitte votre appareil, éliminant les risques de transfert transfrontalier sous le RGPD.' },
          { type: 'plain-terms', text: 'En mode local, vos prompts et documents ne quittent jamais votre ordinateur. Aucun appel API cloud, aucun serveur externe, aucune donnée accessible à des tiers ou régulateurs.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Quel matériel acheter pour déployer Qwen3 ?',
        content: [
          '**Faites d\'abord correspondre votre niveau Qwen cible à la VRAM nécessaire, puis achetez la carte la moins chère qui atteint ce seuil — payer pour plus de VRAM que ce dont votre modèle a besoin est la dépense excessive la plus fréquente de cette liste.** Les choix ci-dessous correspondent directement au tableau matériel ci-dessus : entrée de gamme → RTX 4060, milieu de gamme → RTX 4070 Super, haut de gamme → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, usage permanent → un mini-PC. Les prix ci-dessous reflètent le marché GPU de 2026 — la pénurie de puces mémoire et la demande des datacenters IA ont fait grimper le prix des GPU neufs et des configurations mémoire Apple ; vérifiez le prix actuel avant d\'acheter.',
        ],
        callouts: [
          { type: 'tip', text: 'Passez cette section si vous possédez déjà un GPU avec 8 Go de VRAM ou plus — exécutez d\'abord Qwen3 8B sur ce que vous avez. N\'achetez du nouveau matériel qu\'une fois ce plafond atteint et si vous voulez un modèle plus grand.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 Go',
            tagline: 'Choix entrée de gamme — Qwen3 8B, Qwen3-Coder 7B (5,5 Go de VRAM)',
            verdict: 'La carte la moins chère de cette liste qui atteint le seuil de 5,5 Go requis par Qwen3 8B tout en laissant de la marge pour le contexte. Exécute Qwen3-Coder 7B à ~55 tokens/s — assez rapide pour une assistance au code interactive.',
            pros: [
              'Le besoin de 5,5 Go de VRAM est couvert avec de la marge pour un cache KV à contexte long',
              'Prix le plus bas de cette liste — le bon premier GPU si vous n\'avez jamais exécuté de LLM local',
              '50–57 tokens/s sur les modèles 7B/8B, au niveau des cartes plus chères à cette taille de modèle',
            ],
            cons: [
              'Plafonne à Qwen3 8B / Qwen3-Coder 7B — aucune marge pour passer à 14B sans compresser le cache KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.fr/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 Go', productCategory: 'GPU', priceRange: 'env. 470–600 €', label: 'Vérifier le prix actuel →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 Go',
            tagline: 'Choix milieu de gamme — Qwen3 14B, Qwen3-Coder 14B (9,5 Go de VRAM)',
            verdict: 'Exécute Qwen3-Coder 14B (85,2 % HumanEval) à 36–38 tokens/s avec 2–3 Go de VRAM restants pour le contexte — le niveau où la qualité du code progresse nettement par rapport aux modèles 7B/8B.',
            pros: [
              'Le modèle de 9,5 Go tient avec 2–3 Go de VRAM en réserve — de la place pour des fenêtres de contexte plus longues',
              'HumanEval passe de 75,6 % (7B) à 85,2 % (14B) — le saut qualité/prix le plus clair de la gamme',
              '~38 tokens/s garantissent une réactivité fluide pour le chat interactif et la complétion de code',
            ],
            cons: [
              'Pas assez de VRAM pour le niveau 32B — prévoyez de la revendre ou de la réaffecter si vous dépassez le 14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.fr/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 Go', productCategory: 'GPU', priceRange: 'env. 1 090–1 235 €', label: 'Vérifier le prix actuel →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 Go (ou RTX 3090 24 Go d\'occasion)',
            tagline: 'Choix haut de gamme — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20,5 Go de VRAM)',
            verdict: 'La 4090 délivre 27–28 tokens/s sur Qwen3-Coder 32B — une vitesse de code en temps réel à 92,7 % de HumanEval. Une RTX 3090 d\'occasion offre la même VRAM de 24 Go et se situe à environ 15 % de la vitesse d\'inférence de la 4090, pour un prix nettement plus bas si vous trouvez une annonce d\'occasion fiable.',
            pros: [
              '24 Go de VRAM couvrent toutes les variantes de Qwen3 32B et Qwen 3.6 27B avec de la marge',
              '27–28 tokens/s sur Qwen3-Coder 32B (92,7 % HumanEval) — assez rapide pour du pair programming en temps réel',
              'La RTX 3090 d\'occasion est l\'alternative économique : même plafond de VRAM, environ 15 % plus lente, nettement moins chère d\'occasion',
            ],
            cons: [
              'Coût initial le plus élevé de cette liste — justifié seulement si vous avez réellement besoin d\'une qualité de niveau 32B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.fr/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 Go', productCategory: 'GPU', priceRange: 'env. 3 390–3 490 €', label: 'Vérifier le prix actuel →' },
              { url: 'https://www.ebay.fr/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 Go (occasion)', productCategory: 'GPU', priceRange: 'env. 1 400–1 750 €', label: 'Voir les annonces d\'occasion →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 Go',
            tagline: 'Choix Apple Silicon — Qwen3 32B (~22 tokens/s, silencieux et basse consommation)',
            verdict: 'Le meilleur rapport qualité/prix pour exécuter Qwen3 32B avec de la mémoire unifiée — silencieux, faible consommation électrique, aucun GPU séparé à installer. Pour Qwen2.5-72B, il faut plutôt le M2 Ultra 192 Go.',
            pros: [
              '48 Go de mémoire unifiée couvrent les 20,5 Go requis par Qwen3 32B avec de la place pour d\'autres applications',
              'Fonctionnement silencieux et consommation adaptée à un bureau — aucune gestion de refroidissement de GPU dédié',
              'Un seul achat couvre le système, le stockage et l\'inférence — pas de montage GPU/alimentation/boîtier séparé',
            ],
            cons: [
              '~22 tokens/s sur Qwen3 32B est nettement plus lent que les 27–28 tokens/s d\'une RTX 4090',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/fr/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 Go', productCategory: 'Mini PC', priceRange: 'env. 1 850–1 950 €', label: 'Vérifier le prix actuel →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (ou mini-PC AMD Ryzen AI similaire)',
            tagline: 'Choix usage permanent — Qwen3 8B sur CPU + iGPU (~8–12 tokens/s, moins de 35 W)',
            verdict: 'Pas conçu pour un usage interactif — il s\'agit d\'une instance Qwen3 8B laissée en fonctionnement 24 h/24 et 7 j/7 pour des tâches en arrière-plan, la domotique, ou un point de terminaison API à faible trafic où le coût énergétique compte plus que la vitesse.',
            pros: [
              'Consommation inférieure à 35 W — peu coûteux à faire tourner en continu, contrairement à une configuration de bureau avec GPU',
              'Format compact qui se glisse partout ; aucun GPU séparé à trouver ou refroidir',
              'Fait tourner Qwen3 8B sans aucun GPU dédié',
            ],
            cons: [
              '8–12 tokens/s est trop lent pour un chat interactif — un choix réservé à l\'arrière-plan/API',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.fr/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: 'env. 650–880 €', label: 'Vérifier le prix actuel →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes avec Qwen3 en local',
        items: [
          '**Utiliser `ollama pull qwen2.5` sans tag de taille.** Sans tag explicite (`:7b`, `:14b`, etc.), Ollama peut résoudre vers une taille par défaut qui change entre les mises à jour. Toujours utiliser des tags explicites.',
          '**Ignorer la taille de la fenêtre de contexte.** Qwen3 supporte 128K de contexte. La spécification du Modelfile d\'Ollama fixe `num_ctx` à 2048 par défaut, mais le runtime applique en réalité une valeur par défaut échelonnée selon la VRAM : 4K en dessous de 24 Gio, 32K entre 24 et 48 Gio, 256K au-delà de 48 Gio. Ne comptez sur aucun des deux réglages par défaut : définissez `num_ctx` explicitement, par exemple en ajoutant `--num-ctx 8192` (ou plus) à la commande d\'exécution — sinon le modèle tronque silencieusement l\'entrée.',
          '**Choisir la quantification Q2_K pour du chinois.** À 2 bits, la sortie en langue chinoise de Qwen3 se dégrade notablement. Utiliser au minimum Q4_K_M pour tout travail en CJK.',
          '**Exécuter le modèle 32B avec trop peu de VRAM.** Si votre GPU a 16 Go et que le modèle en nécessite 20,5 Go, Ollama décharge des couches en RAM — le modèle tourne à 3–5 tokens/s, inutilisable en interactif.',
          '**Utiliser la mauvaise sous-famille pour le code.** Qwen3 8B (usage général) : 57,3 % sur HumanEval. Qwen3-Coder 7B : 75,6 % — soit +32 % de performance relative. Toujours utiliser la variante Coder pour le code.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'Étapes suivantes',
        items: [
          '[Meilleurs LLM CPU uniquement](/fr/local-llms/best-cpu-only-llm) — Pas de GPU ? Découvrez quelles tailles Qwen3 tournent sur CPU →',
          '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) — Q4_K_M vs Q8 vous perturbe ? La quantification expliquée →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Quelle quantité de VRAM est nécessaire pour Qwen3 8B en local ?', a: 'Qwen3 8B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 6 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.' },
          { q: 'Quel est le meilleur modèle Qwen pour le code en local ?', a: 'Qwen3-Coder 32B — 92,7 % sur HumanEval, GPU 24 Go requis. Avec 12 Go de VRAM : Qwen3-Coder 14B (85,2 %, 9,5 Go VRAM).' },
          { q: 'Comment Qwen se compare-t-il à DeepSeek ?', a: 'Qwen3 utilise une architecture dense compatible matériel grand public. DeepSeek-V2.5 nécessite ~130 Go RAM — inaccessible sans GPU serveur.' },
          { q: 'Puis-je utiliser Qwen sur un Mac ?', a: 'Oui. M2 Pro 32 Go : Qwen3 14B à ~32 tokens/s. M3 Max 64 Go : Qwen3 32B à ~22 tokens/s.' },
          { q: 'Quelle commande Ollama utiliser pour Qwen ?', a: 'Pour le modèle phare, `ollama run qwen3.6:27b` (~17 Go de VRAM). Pour Qwen3, `ollama pull qwen3:8b`. Pour Qwen2.5, `ollama pull qwen2.5:7b` pour 7B, `:14b` pour 14B, `:32b` pour 32B, ou `qwen2.5-coder:32b` pour la variante code. Toujours des tags explicites.' },
          { q: 'Qwen est-il adapté aux tâches en langue chinoise ?', a: 'Oui. Qwen3 supporte nativement le chinois simplifié, traditionnel, le japonais, le coréen et 24 autres langues.' },
          { q: 'Quelle quantification utiliser pour Qwen3 ?', a: 'Q4_K_M par défaut — ~55 % de réduction VRAM, moins de 1 % de perte de qualité vs FP16. Éviter Q2_K pour les usages en langue chinoise.' },
          { q: 'Qwen2-VL fonctionne-t-il pour l\'OCR de documents chinois ?', a: 'Oui — `ollama pull qwen2-vl:7b`, ~6 Go VRAM, lectures jusqu\'à 4096×4096 pixels en CJK.' },
          { q: 'Qwen3 est-il compatible avec le RGPD ?', a: 'En déploiement local, Qwen3 utilise une architecture compatible avec le RGPD (aucune donnée d\'inférence envoyée à des tiers) — pas de DPA requis pour la couche IA selon l\'article 28 du RGPD. La CNIL recommande le traitement local pour les données sensibles.' },
          { q: 'Qwen3 peut-il traiter des documents mixtes français-chinois ?', a: 'Oui. Qwen3 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2-VL 7B est plus adapté.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Articles associés',
        links: [
          { url: '/fr/local-llms/run-qwen-locally-guide-2026', title: 'Exécuter Qwen 3 en local 2026', description: 'Guide setup pour un seul modèle : Qwen 3.6 27B avec Ollama et LM Studio.' },
          { url: '/fr/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2-VL en local 2026', description: 'Guide complet Qwen2-VL — OCR de documents CJK, Q&A sur images sur matériel grand public.' },
          { url: '/fr/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Comparaison benchmark : Qwen 3.6 27B, Llama 4 Scout et Mistral Small 3.1.' },
          { url: '/fr/local-llms/llm-quantization-explained', title: 'Quantification LLM expliquée', description: 'Q4_K_M, Q8_0 et IQ4_XS — impact sur le VRAM, la vitesse et la qualité.' },
          { url: '/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen local 2026', description: 'Comparaison complète : DeepSeek-V2.5 vs Qwen3 sur le code, le raisonnement et les langues.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen Lokal-Deployment-Guide 2026: Qwen 3.6 27B, Coder & VL je Hardware-Stufe',
    seoTitle: 'Qwen 3.6 27B lokal 2026: Qwen3, Coder & VL je Hardware-Stufe',
    intro: 'Qwen 3.6 27B ist das neue Flagship-Modell für lokales Deployment — ein dichtes Modell unter Apache 2.0 mit 256K-Kontextfenster, das mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` läuft. Qwen3 8B läuft mit 5,5 GB VRAM über Ollama — ein einziger Befehl, keine Konfiguration erforderlich. Qwen2.5-Coder 32B erreicht 92,7 % auf HumanEval. Qwen2-VL 7B ist das führende lokale Vision-Modell für chinesisches und japanisches Dokument-OCR. Dieser Guide deckt die gesamte Qwen-Modellfamilie ab: welches Modell für welche Hardware-Stufe geeignet ist, Ollama- und LM-Studio-Setup, Quantisierungsempfehlungen, Benchmark-Daten und ein Vergleich mit DeepSeek und Llama auf Consumer-Hardware 2026.',
    metaDescription: 'Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder und Qwen2-VL lokal betreiben 2026. VRAM-Anforderungen, Ollama + LM Studio Setup, Q4_K_M-Benchmarks und Hardware-Tier-Guide.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-de.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, Forscher und datenschutzbewusste Nutzer, die die vollständige Qwen-Modellfamilie lokal betreiben möchten — inklusive chinesischsprachiger Nutzer, die Alibabas Modelle gegenüber US-Alternativen bevorzugen',
    primaryTerm: 'Qwen lokal betreiben',
    affiliateDisclosure: true,
    ctaText: 'Qwen3, DeepSeek und Llama über eine Oberfläche dispatchen →',
    ctaButton: 'PromptQuorum kostenlos testen',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Das neue Flagship-Modell ist Qwen 3.6 27B — ein dichtes Modell unter Apache 2.0 mit 256K-Kontextfenster, das mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` läuft.** Für ein schlankeres Setup installieren Sie Ollama und führen Sie `ollama pull qwen2.5:7b` für Qwen3 8B aus — das Modell benötigt 5,5 GB VRAM und liefert 57 Tokens/Sek. auf einer RTX 3060. Für Coding-Aufgaben verwenden Sie Qwen2.5-Coder; für chinesisches/japanisches Dokument-OCR Qwen2-VL. Kennen Sie Ihr VRAM-Budget bereits? Springen Sie direkt zu [welche GPU oder welchen Mac Sie für welche Qwen-Stufe kaufen sollten](#affiliate-picks).',
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Qwen3-Modellfamilie im Überblick', anchor: '#model-family' },
      { label: 'Hardware-Anforderungen nach Modellgröße', anchor: '#hardware-tiers' },
      { label: 'Setup mit Ollama', anchor: '#ollama-setup' },
      { label: 'Setup mit LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Quantisierung: Welches Format wählen?', anchor: '#quantization-guide' },
      { label: 'Benchmark-Performance auf Consumer-Hardware', anchor: '#benchmarks' },
      { label: 'Qwen vs. DeepSeek vs. Llama', anchor: '#vs-comparison' },
      { label: 'Datensouveränität für deutsche Nutzer', anchor: '#regional-context' },
      { label: 'Hardware-Empfehlungen nach Budget', anchor: '#affiliate-picks' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'Die Präsentation unten enthält: das neue Flagship-Modell Qwen 3.6 27B (256K-Kontext, ~17 GB in Q4_K_M), die gesamte Qwen-Modellfamilie auf einen Blick (Qwen3 0,6B–32B, Qwen2.5 7B–72B), VRAM-Anforderungen je Hardware-Tier, Benchmark-Daten für Qwen3-Coder 32B und ein Entscheidungsdiagramm Qwen vs. DeepSeek vs. Llama. Als Qwen-Deployment-Referenzkarte herunterladen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Lokal-Deployment-Guide 2026: Qwen 3.6 27B, Qwen3, Coder & VL für jede Hardware-Stufe',
      description: 'Vollständiger Guide zur lokalen Bereitstellung der Qwen-Modellfamilie — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder und VL, VRAM-Anforderungen, Ollama- und LM-Studio-Setup, Quantisierung, Benchmarks und Hardware-Empfehlungen.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'de',
      url: 'https://www.promptquorum.com/de/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Wie viel VRAM benötige ich für Qwen3 8B lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M benötigt 5,5 GB VRAM. Eine NVIDIA RTX 3060 6 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' } },
        { '@type': 'Question', name: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B ist das beste lokal ausführbare Coding-Modell — es erreicht 92,7 % auf HumanEval und benötigt eine 24-GB-GPU (RTX 3090 oder RTX 4090). Bei 12 GB VRAM oder weniger: Qwen3-Coder 14B (HumanEval 85,2 %, 9,5 GB VRAM).' } },
        { '@type': 'Question', name: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-72B und DeepSeek-V2.5 sind bei allgemeinen Aufgaben vergleichbar, aber Qwen verwendet eine Dense-Architektur, die auf Consumer-Hardware passt. DeepSeek-V2.5 ist ein 236B-MoE-Modell und benötigt ~130 GB RAM — ohne Server-GPU nicht realisierbar.' } },
        { '@type': 'Question', name: 'Kann ich Qwen auf einem Mac betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Apple Silicon nutzt Unified Memory — ein M2 Pro 32 GB führt Qwen3 14B flüssig mit ~32 Tokens/Sek. aus. Ein M3 Max 64 GB bewältigt Qwen3 32B mit ~22 Tokens/Sek.' } },
        { '@type': 'Question', name: 'Welchen Ollama-Befehl verwende ich für Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Für das neue Flagship-Modell: `ollama run qwen3.6:27b` (~17 GB VRAM). Für Qwen3: `ollama pull qwen3:8b`. Für Qwen2.5: `ollama pull qwen2.5:7b` für 7B, `ollama pull qwen2.5:14b` für 14B, `ollama pull qwen2.5:32b` für 32B oder `ollama pull qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' } },
        { '@type': 'Question', name: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch, Arabisch und 24 weitere Sprachen.' } },
        { '@type': 'Question', name: 'Welche Quantisierung sollte ich für Qwen3 verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M ist die empfohlene Standardauswahl — es reduziert den VRAM um ~55 % gegenüber FP16 bei weniger als 1 % Qualitätsverlust. Q8_0 für nahezu FP16-Qualität bei ausreichend VRAM. Q2_K bei chinesischsprachigen Anwendungsfällen vermeiden.' } },
        { '@type': 'Question', name: 'Funktioniert Qwen2-VL für chinesisches Dokument-OCR?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Qwen2-VL 7B ist das stärkste lokale Vision-Modell für CJK-Dokument-OCR. Es läuft mit ~6 GB VRAM via `ollama pull qwen2-vl:7b` und liest chinesischen, japanischen und koreanischen Text bei bis zu 4096×4096 Pixel.' } },
        { '@type': 'Question', name: 'Muss ich bei der Verwendung von Qwen3 die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Beim lokalen Betrieb von Qwen3 verlassen keine Daten Ihren Server — das Modell verarbeitet Anfragen vollständig auf Ihrer Hardware. Damit entfällt die Notwendigkeit eines Auftragsverarbeitungsvertrags (AVV) gemäß DSGVO Art. 28, da kein Drittanbieter Zugriff auf die Daten erhält. Für Unternehmen, die das BSI-Grundschutz-Kompendium anwenden, ist die lokale Inferenz zudem mit IT-Grundschutz-Baustein OPS.2.2 kompatibel.' } },
        { '@type': 'Question', name: 'Ist Qwen3 für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, insbesondere für mittelständische Unternehmen in DACH, die Datenschutz und Compliance priorisieren. Qwen3 14B oder 32B lässt sich auf einem lokalen Server betreiben, ohne Daten an externe Anbieter zu übermitteln. Damit erfüllt es die Anforderungen des BSI-Grundschutzes und eignet sich für Branchen mit erhöhtem Datenschutzbedarf wie Recht, Medizin und Finanzen.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B ist das neue Flagship-Modell**: dicht, Apache 2.0, 256K-Kontext, ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` (veröffentlicht im April 2026).',
          '**Qwen3 8B läuft mit 5,5 GB VRAM** — ein einziger `ollama pull qwen2.5:7b`-Befehl genügt; auf einer RTX 3060 erreicht es 57 Tokens/Sek.',
          '**Vier praktische Teilfamilien**: Qwen3 (allgemein, Thinking-Mode), Qwen2.5 (allgemein, am besten getestet), Qwen2.5-Coder (Coding, 92,7 % HumanEval bei 32B), Qwen2-VL (Vision, bestes lokales CJK-OCR).',
          '**Dense-Architektur = Consumer-freundlich**: Anders als DeepSeeks 236B-MoE-Modell (~130 GB RAM) passt Qwen2.5-72B mit 46 GB VRAM auf zwei RTX 3090.',
          '**Natives Mehrsprachigkeit**: Vortrainiert auf Chinesisch, Japanisch, Koreanisch, Arabisch, Deutsch, Französisch und 23 weiteren Sprachen — Qwen3 übertrifft Llama 3.3 bei CJK-Aufgaben.',
          '**Q4_K_M ist die richtige Quantisierung** für die meisten Nutzer: ~55 % VRAM-Reduktion, weniger als 1 % Qualitätsverlust.',
          '**Hardware-Entscheidung**: 12 GB VRAM → 14B-Modell; 24 GB → 32B; 48 GB+ (zwei GPUs oder Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 umfasst drei lokale Deployment-Teilfamilien — Allgemein (7B–72B), Coding (Coder 7B–32B) und Vision (VL 7B–72B) — alle über Ollama oder LM Studio ausführbar.' },
          { type: 'plain-terms', text: 'Ein Modell lokal betreiben bedeutet, dass die KI auf dem eigenen Computer statt auf einem Cloud-Server läuft. Keine Daten verlassen die eigene Hardware, und nach der Anschaffung fallen keine Kosten pro Token an.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen-Modellfamilie im Überblick',
        content: [
          '**Die Qwen-Reihe umfasst inzwischen fünf praktische Optionen: das Flagship Qwen 3.6 27B, die neuere Qwen3-Familie, Qwen2.5 für allgemeines Reasoning, Qwen2.5-Coder und Qwen2-VL für Vision** — jeweils in mehreren Größen. Alle sind Open-Weight-Modelle, die vom Qwen-Team bei Alibaba unter der Apache-2.0-Lizenz auf Hugging Face veröffentlicht wurden.',
          'Wählen Sie zunächst die Teilfamilie, dann die Größe, die zum verfügbaren VRAM passt. Die Kombination von Teilfamilien ist üblich: Qwen2.5-Coder 14B für Code-Vervollständigung und Qwen3 8B oder Qwen 3.6 27B für Dokumentenzusammenfassung.',
        ],
        rows: [
          { 'Teilfamilie': 'Qwen3', 'Verfügbare Größen': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Hauptanwendung': 'Allgemeines Reasoning, Thinking-Mode, mehrsprachig, agentische Aufgaben', 'Ollama-Tag-Präfix': 'qwen3:' },
          { 'Teilfamilie': 'Qwen2.5', 'Verfügbare Größen': '7B, 14B, 32B, 72B', 'Hauptanwendung': 'Allgemeines Reasoning, chinesisch/mehrsprachige Aufgaben, RAG', 'Ollama-Tag-Präfix': 'qwen2.5:' },
          { 'Teilfamilie': 'Qwen2.5-Coder', 'Verfügbare Größen': '7B, 14B, 32B', 'Hauptanwendung': 'Code-Generierung, Debugging, HumanEval, SWE-bench', 'Ollama-Tag-Präfix': 'qwen2.5-coder:' },
          { 'Teilfamilie': 'Qwen2-VL', 'Verfügbare Größen': '2B, 7B, 72B', 'Hauptanwendung': 'Dokument-OCR, Bild-Q&A, CJK-Textextraktion', 'Ollama-Tag-Präfix': 'qwen2-vl:' },
        ],
        columns: ['Teilfamilie', 'Verfügbare Größen', 'Hauptanwendung', 'Ollama-Tag-Präfix'],
        tableFormat: true,
        note: 'Qwen 3.6 27B (veröffentlicht im April 2026) ist das neue Flagship-Modell — ein dichtes Modell mit 256K-Kontextfenster, das mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` läuft. Qwen2.5 bleibt die am besten getestete Familie mit der breitesten Ollama- und GGUF-Abdeckung Mitte 2026. Siehe [Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) für einen umfassenderen Modellvergleich.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Hardware-Anforderungen nach Modellgröße',
        content: [
          '**Wählen Sie zunächst Ihre VRAM-Stufe, dann das größte Qwen3-Modell, das hineinpasst.** Q4_K_M ist die Standardquantisierung für alle unten aufgeführten Werte — sie bietet das beste Verhältnis von Größe zu Qualität für Ollama und LM Studio.',
        ],
        rows: [
          { 'Modell': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (RTX 3060)': '~57 Tokens/Sek.' },
          { 'Modell': 'Qwen3-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (RTX 3060)': '~55 Tokens/Sek.' },
          { 'Modell': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 GB', 'Mindest-GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Geschwindigkeit (RTX 4060)': '~38 Tokens/Sek.' },
          { 'Modell': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (RTX 4070)': '~38 Tokens/Sek.' },
          { 'Modell': 'Qwen3-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (RTX 4070)': '~36 Tokens/Sek.' },
          { 'Modell': 'Qwen3 32B Q4_K_M', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (RTX 4090)': '~28 Tokens/Sek.' },
          { 'Modell': 'Qwen3-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (RTX 4090)': '~27 Tokens/Sek.' },
          { 'Modell': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'Mindest-GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Geschwindigkeit (RTX 4090)': '~24 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'Mindest-GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Geschwindigkeit (2×RTX 4090)': '~12 Tokens/Sek.' },
        ],
        columns: ['Modell', 'VRAM', 'Mindest-GPU', 'Apple Silicon', 'Geschwindigkeit (RTX 3060)'],
        tableFormat: true,
        note: 'VRAM-Angaben gelten für Q4_K_M-GGUF-Dateien aus der Ollama-Bibliothek. Für den KV-Cache bei 4K-Kontext kommen 1–2 GB hinzu. Wenn die GPU weniger VRAM hat als das Modell benötigt, lagert Ollama automatisch Layer in den System-RAM aus — das funktioniert, reduziert aber die Geschwindigkeit erheblich.',
        callouts: [
          { type: 'tip', text: 'Ihre VRAM-Stufe steht fest? Sehen Sie sich an, [welche GPU oder welchen Mac Sie für diese Stufe genau kaufen sollten](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M4 Pro oder Dual-GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-de.webp',
        imageCaption: 'Qwen3 VRAM-Anforderungen nach Modellgröße (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup mit Ollama',
        content: [
          '**Ollama ist der schnellste Weg, um ein beliebiges Qwen3-Modell lokal zu betreiben** — es übernimmt den Modell-Download, die GGUF-Quantisierung und stellt eine lokale API unter `localhost:11434` bereit, ohne jegliche Konfiguration. Installation unter [ollama.com](https://ollama.com/download). Falls Sie Ollama noch nicht kennen, lesen Sie zunächst [Ollama installieren](/de/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Verfügbar für macOS, Linux (Ein-Zeilen-Installation) und Windows. Keine GPU-Treiber-Konfiguration erforderlich — Ollama erkennt CUDA, ROCm und Metal automatisch.' },
          { title: 'Modell mit explizitem Größen-Tag herunterladen', whyItMatters: 'Immer die Größe angeben: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. Das ungetaggte `qwen2.5` löst standardmäßig das 7B-Modell auf, kann sich aber zwischen Ollama-Releases ändern.' },
          { title: 'Modell ausführen', whyItMatters: '`ollama run qwen2.5:7b` öffnet einen interaktiven Chat. Eingabe tippen und Enter drücken. Beenden mit `/bye`.' },
          { title: 'Kontextfenster bei Bedarf anpassen', whyItMatters: 'Qwen3 unterstützt standardmäßig 32K-Kontext in Ollama. Für 128K-Kontext bei einem 7B-Modell: `ollama run qwen2.5:7b --num-ctx 131072`. Dies benötigt mehr VRAM.' },
          { title: 'API-Endpunkt testen', whyItMatters: 'Ollama stellt eine OpenAI-kompatible API bereit. Anwendungen wie PromptQuorum, Continue.dev und Open WebUI verbinden sich direkt mit `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Ollama installieren (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: .dmg von ollama.com herunterladen oder:
brew install ollama

# Modelle herunterladen — explizite Tags verwenden
ollama pull qwen3.6:27b          # Flagship, 256K-Kontext (~17 GB)
ollama pull qwen3:8b             # Qwen3 allgemein 8B (~5,5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 allgemein 7B (~5,5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 allgemein 14B (~9,5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 allgemein 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20,5 GB)
ollama pull qwen2-vl:7b          # Vision 7B (~6,2 GB)

# Interaktiv ausführen
ollama run qwen2.5:7b

# OpenAI-kompatible API testen
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Hallo"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setup mit LM Studio',
        content: [
          '**LM Studio bietet eine grafische Oberfläche für Qwen3 ohne Terminal-Befehle.** Download unter [lmstudio.ai](https://lmstudio.ai) oder siehe [LM Studio installieren](/de/local-llms/how-to-install-lm-studio). Verfügbar für macOS, Windows und Linux.',
        ],
        numberedItems: [
          { title: 'Modell-Browser öffnen', whyItMatters: 'Nach „Qwen3" oder „Qwen Coder" suchen. Nach Q4_K_M filtern für das empfohlene Qualitäts/Größen-Verhältnis.' },
          { title: 'GGUF-Build herunterladen', whyItMatters: 'Q4_K_M-Variante auswählen. LM Studio zeigt die Dateigröße vor dem Download an — bestätigen, dass sie zum verfügbaren VRAM passt.' },
          { title: 'Modell laden und Chat starten', whyItMatters: 'Modell in der linken Sidebar anklicken, um es in den Speicher zu laden. GPU-Layer-Zuweisung erfolgt automatisch.' },
          { title: 'Lokalen Server starten', whyItMatters: '"Server starten" öffnet einen OpenAI-kompatiblen Endpunkt unter `localhost:1234`. Anwendungen und Skripte verbinden sich damit wie mit der OpenAI-API.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantisierung: Welches Format wählen?',
        content: [
          '**Q4_K_M ist die richtige Standardwahl für Qwen3 auf Consumer-Hardware.** Es reduziert den VRAM um ~55–60 % gegenüber FP16 bei weniger als 1 % Benchmark-Verlust auf MMLU und HumanEval. Andere Formate haben spezifische Anwendungsfälle:',
        ],
        items: [
          '**Q4_K_M** (empfohlen): ~5,5 GB für 7B. Bestes Qualitäts-pro-GB-Verhältnis. Dieser Format sollte zuerst ausprobiert werden.',
          '**Q8_0**: ~8,5 GB für 7B. Nahezu FP16-Qualität; verwenden, wenn VRAM vorhanden ist und maximale Genauigkeit gewünscht wird.',
          '**Q5_K_M**: ~6,5 GB für 7B. Marginale Verbesserung gegenüber Q4_K_M — nur wählen, wenn Q4_K_M-Ausgabequalität für die Aufgabe sichtbar unzureichend ist.',
          '**Q2_K**: ~3 GB für 7B. Kleinste Datei, aber die chinesischsprachige Ausgabequalität verschlechtert sich spürbar — bei Qwen3 für chinesische Anwendungen vermeiden.',
          '**IQ4_XS**: ~4,8 GB für 7B. Neuere imatrix-Quantisierung mit besserer Qualität als Q4_K_M bei etwas kleinerer Größe — verfügbar in neueren llama.cpp-Versionen und LM Studio 0.3+.',
        ],
        note: 'Vollständige Erklärung der Quantisierung: [LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M ist die beste Qwen3-Quantisierung für die meisten Nutzer: 55 % VRAM-Reduktion bei weniger als 1 % Qualitätsverlust gegenüber FP16.' },
          { type: 'plain-terms', text: 'Quantisierung komprimiert die Zahlen des Modells von 16-Bit auf 4-Bit, was die Dateigröße und den VRAM-Bedarf etwa halbiert. Vorstellbar wie TIFF-zu-JPEG: kleinere Datei, nahezu identisches Ergebnis für die meisten Anwendungsfälle.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmark-Performance auf Consumer-Hardware',
        content: [
          '**Qwen3 32B Q4_K_M auf einer RTX 4090 liefert 28 Tokens/Sek. — schnell genug für Echtzeit-Coding-Assistenz.** Die unten aufgeführten Werte gelten für Q4_K_M-GGUF-Builds, getestet unter Ollama. Full-Precision-FP16-Werte sind um 1–2 % höher.',
        ],
        rows: [
          { 'Modell (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Geschwindigkeit (RTX 3060 12 GB)': '57 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Geschwindigkeit (RTX 4070 12 GB)': '38 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Geschwindigkeit (RTX 4090 24 GB)': '28 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Geschwindigkeit (2×RTX 3090)': '12 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Geschwindigkeit (RTX 3060 12 GB)': '55 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Geschwindigkeit (RTX 4070 12 GB)': '36 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Geschwindigkeit (RTX 4090 24 GB)': '27 Tokens/Sek.' },
        ],
        columns: ['Modell (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Geschwindigkeit (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Sie möchten diesen HumanEval-Score von 92,7 % bei 27 Tokens/Sek.? Sehen Sie sich die [24-GB-GPU an, die Qwen3-Coder 32B ausführt](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-de.webp',
        imageCaption: 'Qwen3 Benchmark-Ergebnisse (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs. DeepSeek vs. Llama: Was lokal betreiben?',
        content: [
          '**Qwen3 gewinnt bei chinesischsprachigen Aufgaben und VRAM-Effizienz; DeepSeek-V2.5 gewinnt beim Reasoning im großen Maßstab, ist aber auf Consumer-Hardware kaum praktikabel; Llama 3.3 70B ist die beste Einzel-GPU-Option, wenn Meta\'s offenes Modell bevorzugt wird.** Die folgende Tabelle vergleicht die praktischen Optionen je VRAM-Stufe.',
        ],
        rows: [
          { 'VRAM-Stufe': '6 GB', 'Bestes Qwen': 'Qwen3 8B', 'Bester Konkurrent': 'Llama 3.2 3B (passt, aber nur 3B)', 'Empfehlung': 'Qwen3 8B gewinnt — gleiches VRAM, viel größeres Modell' },
          { 'VRAM-Stufe': '12 GB', 'Bestes Qwen': 'Qwen3-Coder 14B', 'Bester Konkurrent': 'Llama 3.3 8B Instruct', 'Empfehlung': 'Qwen3-Coder 14B für Coding; Llama 3.3 8B für allgemeinen Chat' },
          { 'VRAM-Stufe': '24 GB', 'Bestes Qwen': 'Qwen3-Coder 32B', 'Bester Konkurrent': 'Llama 3.3 70B (ausgelagert)', 'Empfehlung': 'Qwen3-Coder 32B für Code; Llama 3.3 70B wenn Qualität > Geschwindigkeit' },
          { 'VRAM-Stufe': '48 GB+', 'Bestes Qwen': 'Qwen2.5-72B', 'Bester Konkurrent': 'DeepSeek-V2.5 236B MoE', 'Empfehlung': 'DeepSeek benötigt ~130 GB RAM; Qwen2.5-72B ist die praktische 48-GB-Wahl' },
        ],
        columns: ['VRAM-Stufe', 'Bestes Qwen', 'Bester Konkurrent', 'Empfehlung'],
        tableFormat: true,
        content2: 'Für einen ausführlichen Vergleich zwischen DeepSeek und Qwen in den Bereichen Coding, Reasoning und Mehrsprachigkeit, siehe [DeepSeek vs. Qwen Lokal-Vergleich 2026](/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Datensouveränität für deutsche und europäische Nutzer',
        content: [
          '**Der lokale Betrieb von Qwen3 bedeutet, dass keine Daten das eigene Gerät verlassen — kein Cloud-API-Aufruf, kein Risiko unter der DSGVO oder dem deutschen IT-Sicherheitsrecht.** Cloud-basierte LLM-APIs erfordern die Übermittlung von Prompts an externe Server im Ausland, was DSGVO Art. 28 (Auftragsverarbeitung) und ggf. Art. 44 ff. (Drittlandübermittlung) auslöst.',
          'Qwen3 wurde vom Qwen-Team bei Alibaba auf einem überwiegend chinesisch- und mehrsprachigen Korpus trainiert. Es ist das stärkste lokal einsetzbare Modell für Vereinfachtes Chinesisch, Traditionelles Chinesisch und gemischtsprachige Dokumente (Chinesisch/Englisch/Deutsch).',
          '**Für Unternehmensdeployments im DACH-Raum**: Ein luftgespaltenes Qwen3-Setup (keine Internetverbindung während der Inferenz) nutzt eine DSGVO-kompatible Architektur (keine Inferenzdaten an externe Anbieter). Das Modell läuft ausschließlich auf lokaler Hardware — kein Drittanbieter erhält Zugriff auf Eingabe- oder Ausgabedaten. Für BSI-Grundschutz-konforme Setups empfiehlt sich Baustein OPS.2.2 (Fremdsoftware). Vollständige Anleitung für luftgespaltene Setups: [KI vollständig offline betreiben](/de/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 läuft nach dem Download vollständig offline — keine Daten verlassen Ihr Gerät, wodurch DSGVO-Risiken durch Drittlandübermittlung entfallen.' },
          { type: 'plain-terms', text: 'Beim lokalen Betrieb von Qwen3 verlassen Ihre Prompts und Dokumente niemals den eigenen Computer. Es gibt keinen Cloud-API-Aufruf, keinen externen Server und keine Daten, auf die Behörden oder Dritte zugreifen könnten.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Welche Hardware sollten Sie für Qwen3-Deployment kaufen?',
        content: [
          '**Ordnen Sie zuerst Ihre Ziel-Qwen-Stufe dem passenden VRAM zu und kaufen Sie dann die günstigste Karte, die diese Anforderung erfüllt — mehr VRAM zu bezahlen, als Ihr Modell benötigt, ist der häufigste Fehlkauf auf dieser Liste.** Die folgenden Empfehlungen entsprechen direkt der obigen Hardware-Tabelle: Einsteiger → RTX 4060, Mittelklasse → RTX 4070 Super, High-End → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, Dauerbetrieb → ein Mini-PC. Die Preise unten spiegeln den GPU-Markt 2026 wider — Speicherchip-Engpässe und die KI-Rechenzentrums-Nachfrage haben sowohl neue GPUs als auch Apple-Speicherkonfigurationen deutlich verteuert; prüfen Sie den aktuellen Preis vor dem Kauf.',
        ],
        callouts: [
          { type: 'tip', text: 'Überspringen Sie diesen Abschnitt, wenn Sie bereits eine GPU mit 8 GB+ VRAM besitzen — betreiben Sie zunächst Qwen3 8B auf vorhandener Hardware. Kaufen Sie erst neue Hardware, wenn Sie diese Grenze erreicht haben und ein größeres Modell möchten.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Einsteiger-Empfehlung — Qwen3 8B, Qwen3-Coder 7B (5,5 GB VRAM)',
            verdict: 'Die günstigste Karte auf dieser Liste, die die 5,5-GB-Anforderung von Qwen3 8B mit Spielraum für Kontext erfüllt. Führt Qwen3-Coder 7B mit ~55 Tokens/Sek. aus — schnell genug für interaktive Coding-Unterstützung.',
            pros: [
              'Erfüllt die 5,5-GB-VRAM-Anforderung mit Puffer für langen Kontext-KV-Cache',
              'Niedrigster Preis auf dieser Liste — die richtige erste GPU, wenn Sie noch nie ein lokales LLM betrieben haben',
              '50–57 Tokens/Sek. bei 7B/8B-Modellen, gleichauf mit teureren Karten bei dieser Modellgröße',
            ],
            cons: [
              'Deckelt bei Qwen3 8B / Qwen3-Coder 7B — kein Spielraum für 14B ohne KV-Cache-Engpass',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.de/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: 'ca. 470–600 €', label: 'Aktuellen Preis prüfen →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Mittelklasse-Empfehlung — Qwen3 14B, Qwen3-Coder 14B (9,5 GB VRAM)',
            verdict: 'Führt Qwen3-Coder 14B (85,2 % HumanEval) mit 36–38 Tokens/Sek. aus und lässt dabei noch 2–3 GB VRAM für Kontext übrig — die Stufe, auf der die Coding-Qualität spürbar über die 7B/8B-Modelle hinaus zunimmt.',
            pros: [
              'Das 9,5-GB-Modell passt mit 2–3 GB VRAM-Puffer — Raum für längere Kontextfenster',
              'HumanEval springt von 75,6 % (7B) auf 85,2 % (14B) — der klarste Preis-Leistungs-Sprung in der Reihe',
              '~38 Tokens/Sek. halten interaktiven Chat und Code-Vervollständigung reaktionsschnell',
            ],
            cons: [
              'Nicht genug VRAM für die 32B-Stufe — planen Sie den Verkauf oder eine Zweitnutzung, falls Sie über 14B hinauswachsen',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.de/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: 'ca. 1.090–1.235 €', label: 'Aktuellen Preis prüfen →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (oder gebrauchte RTX 3090 24 GB)',
            tagline: 'High-End-Empfehlung — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20,5 GB VRAM)',
            verdict: 'Die 4090 liefert 27–28 Tokens/Sek. bei Qwen3-Coder 32B — Echtzeit-Coding-Geschwindigkeit bei 92,7 % HumanEval. Eine gebrauchte RTX 3090 hat dasselbe 24-GB-VRAM und liegt bei der Inferenzgeschwindigkeit rund 15 % hinter der 4090 — bei deutlich geringeren Kosten, sofern Sie ein vertrauenswürdiges Gebrauchtangebot finden.',
            pros: [
              '24 GB VRAM deckt jede Qwen3-32B-Variante und Qwen 3.6 27B mit Spielraum ab',
              '27–28 Tokens/Sek. bei Qwen3-Coder 32B (92,7 % HumanEval) — schnell genug für Echtzeit-Pair-Programming',
              'Gebrauchte RTX 3090 ist die preiswerte Alternative: gleiche VRAM-Grenze, ~15 % langsamer, gebraucht deutlich günstiger',
            ],
            cons: [
              'Höchste Anschaffungskosten auf dieser Liste — nur gerechtfertigt, wenn tatsächlich 32B-Qualität benötigt wird',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.de/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: 'ca. 3.390–3.490 €', label: 'Aktuellen Preis prüfen →' },
              { url: 'https://www.ebay.de/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (gebraucht)', productCategory: 'GPU', priceRange: 'ca. 1.400–1.750 €', label: 'Gebrauchtangebote ansehen →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Apple-Silicon-Empfehlung — Qwen3 32B (~22 Tokens/Sek., leise und stromsparend)',
            verdict: 'Bester Wert für den Betrieb von Qwen3 32B mit Unified Memory — leise, geringer Stromverbrauch, keine separate GPU zu verbauen. Für Qwen2.5-72B benötigen Sie stattdessen den M2 Ultra 192 GB.',
            pros: [
              '48 GB Unified Memory erfüllt die 20,5-GB-Anforderung von Qwen3 32B mit Raum für weitere Anwendungen',
              'Lautloser Betrieb und schreibtischfreundlicher Stromverbrauch — kein separates GPU-Kühlmanagement nötig',
              'Ein Kauf deckt Betriebssystem, Speicher und Inferenz ab — kein separater GPU/PSU/Gehäuse-Aufbau',
            ],
            cons: [
              '~22 Tokens/Sek. bei Qwen3 32B ist spürbar langsamer als die 27–28 Tokens/Sek. einer RTX 4090',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/de/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: 'ca. 1.850–1.950 €', label: 'Aktuellen Preis prüfen →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (oder ähnlicher AMD-Ryzen-AI-Mini-PC)',
            tagline: 'Dauerbetrieb-Empfehlung — Qwen3 8B auf CPU + iGPU (~8–12 Tokens/Sek., unter 35 W)',
            verdict: 'Nicht für interaktive Nutzung gedacht — geeignet für eine Qwen3-8B-Instanz, die Sie rund um die Uhr für Hintergrundaufgaben, Hausautomation oder einen wenig frequentierten API-Endpunkt laufen lassen, bei dem Stromkosten wichtiger sind als Geschwindigkeit.',
            pros: [
              'Stromverbrauch unter 35 W — günstig im Dauerbetrieb, anders als ein Desktop-GPU-Aufbau',
              'Kleiner Formfaktor passt überallhin; keine separate GPU zu beschaffen oder zu kühlen',
              'Bewältigt Qwen3 8B ganz ohne dedizierte GPU',
            ],
            cons: [
              '8–12 Tokens/Sek. sind für interaktiven Chat zu langsam — geeignet nur für Hintergrund-/API-Nutzung',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.de/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: 'ca. 650–880 €', label: 'Aktuellen Preis prüfen →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim lokalen Betrieb von Qwen3',
        items: [
          '**Ungetaggter `ollama pull qwen2.5`-Befehl verwenden.** Ohne expliziten Größen-Tag (`:7b`, `:14b` usw.) kann Ollama eine Standardgröße auflösen, die sich zwischen Library-Updates ändert. Immer explizite Tags verwenden: `ollama pull qwen2.5:14b`.',
          '**Kontextfenstergröße ignorieren.** Qwen3 unterstützt 128K-Kontext. Die Modelfile-Spezifikation von Ollama setzt `num_ctx` standardmäßig auf 2048, doch die Laufzeitumgebung wählt tatsächlich einen VRAM-gestaffelten Standardwert: 4K unter 24 GiB, 32K zwischen 24 und 48 GiB, 256K über 48 GiB. Verlassen Sie sich auf keinen der beiden Standardwerte: Legen Sie `num_ctx` explizit fest, zum Beispiel mit `--num-ctx 8192` (oder höher) im Run-Befehl — andernfalls kürzt das Modell die Eingabe stillschweigend.',
          '**Q2_K-Quantisierung für chinesischsprachige Nutzung wählen.** Bei 2-Bit-Präzision verschlechtert sich Qwen3\'s chinesische Ausgabe spürbar. Q4_K_M als Minimum für jede chinesischsprachige Arbeit verwenden.',
          '**32B-Modell mit zu wenig VRAM ausführen.** Wenn die GPU 16 GB hat und das Modell 20,5 GB benötigt, lagert Ollama Layer in den System-RAM aus. Das Modell läuft, aber mit 3–5 Tokens/Sek. — für interaktive Nutzung unbrauchbar.',
          '**Falsche Teilfamilie für Coding verwenden.** Qwen3 8B (allgemein) erreicht 57,3 % auf HumanEval. Qwen3-Coder 7B erreicht 75,6 % auf demselben Benchmark — eine 32 %ige relative Verbesserung. Für Coding immer die Coder-Variante gleicher Größe verwenden.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: 'Nächste Schritte',
        items: [
          '[Beste CPU-Only-LLMs](/de/local-llms/best-cpu-only-llm) — Keine GPU? Welche Qwen3-Größen laufen rein auf CPU →',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) — Q4_K_M vs. Q8 unklar? Quantisierung erklärt →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie viel VRAM benötige ich für Qwen3 8B lokal?', a: 'Qwen3 8B Q4_K_M benötigt 5,5 GB VRAM. Eine RTX 3060 6 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' },
          { q: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', a: 'Qwen3-Coder 32B ist das beste lokal ausführbare Coding-Modell — 92,7 % auf HumanEval, benötigt 24 GB GPU. Bei 12 GB VRAM: Qwen3-Coder 14B (85,2 %, 9,5 GB VRAM).' },
          { q: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', a: 'Qwen3 nutzt Dense-Architektur, die auf Consumer-Hardware passt. DeepSeek-V2.5 ist ein 236B-MoE-Modell und benötigt ~130 GB RAM — ohne Server-GPU nicht praktikabel.' },
          { q: 'Kann ich Qwen auf einem Mac betreiben?', a: 'Ja. M2 Pro 32 GB führt Qwen3 14B mit ~32 Tokens/Sek. aus. M3 Max 64 GB bewältigt Qwen3 32B mit ~22 Tokens/Sek.' },
          { q: 'Welchen Ollama-Befehl verwende ich für Qwen?', a: 'Für das Flagship-Modell: `ollama run qwen3.6:27b` (~17 GB VRAM). Für Qwen3: `ollama pull qwen3:8b`. Für Qwen2.5: `ollama pull qwen2.5:7b` für 7B, `:14b` für 14B, `:32b` für 32B oder `qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' },
          { q: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', a: 'Ja. Qwen3 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch und 24 weitere Sprachen.' },
          { q: 'Welche Quantisierung sollte ich für Qwen3 verwenden?', a: 'Q4_K_M ist die empfohlene Standardwahl — ~55 % VRAM-Reduktion bei weniger als 1 % Qualitätsverlust. Q8_0 für nahezu FP16-Qualität. Q2_K bei chinesischsprachigen Anwendungen vermeiden.' },
          { q: 'Funktioniert Qwen2-VL für chinesisches Dokument-OCR?', a: 'Ja — Qwen2-VL 7B ist das stärkste lokale Vision-Modell für CJK-OCR. Es läuft mit ~6 GB VRAM via `ollama pull qwen2-vl:7b` und liest bis zu 4096×4096 Pixel.' },
          { q: 'Muss ich bei der Verwendung von Qwen3 die DSGVO beachten?', a: 'Beim lokalen Betrieb verlassen keine Daten den eigenen Server — kein AVV nach DSGVO Art. 28 erforderlich, da kein Drittanbieter Datenzugriff hat. BSI-Grundschutz-konform mit Baustein OPS.2.2.' },
          { q: 'Ist Qwen3 für den deutschen Mittelstand geeignet?', a: 'Ja. Qwen3 14B oder 32B lässt sich auf einem lokalen Server betreiben ohne externe Datenübermittlung — geeignet für datenschutzkritische Branchen wie Recht, Medizin und Finanzen im DACH-Raum.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        links: [
          { url: '/de/local-llms/run-qwen-locally-guide-2026', title: 'Qwen 3 lokal betreiben 2026', description: 'Einzelmodell-Setup-Guide für Qwen 3.6 27B mit Ollama und LM Studio — der schnellste Weg zu einer funktionierenden Qwen-Instanz.' },
          { url: '/de/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2-VL lokal betreiben 2026', description: 'Vollständiger Guide zu Qwen2-VL — CJK-Dokument-OCR, Bild-Q&A und mehrsprachige Screenshot-Analyse auf Consumer-Hardware.' },
          { url: '/de/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs. Llama vs. Mistral 2026', description: 'Benchmark-Vergleich von Qwen 3.6 27B, Llama 4 Scout und Mistral Small 3.1 auf MMLU, SWE-bench und MATH.' },
          { url: '/de/local-llms/llm-quantization-explained', title: 'LLM-Quantisierung erklärt', description: 'Was Q4_K_M, Q8_0 und IQ4_XS bedeuten — wie sie VRAM, Geschwindigkeit und Ausgabequalität beeinflussen.' },
          { url: '/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs. Qwen Lokal-Vergleich 2026', description: 'Vollständiger Vergleich: DeepSeek-V2.5 vs. Qwen3 bei Coding, Reasoning, Chinesisch und kreativem Schreiben — mit Mac-vs.-NVIDIA-Aufschlüsselung.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwenローカルデプロイガイド2026：Qwen 3.6 27B・Coder・VLを全ハードウェア階層で動かす',
    seoTitle: 'Qwen 3.6 27Bローカルデプロイ2026：Qwen3・Coder・VLを全ハードウェア階層で',
    intro: 'Qwen 3.6 27Bはローカルデプロイの新フラッグシップです。Apache 2.0ライセンスの密なモデルで、256Kコンテキストウィンドウを持ち、`ollama run qwen3.6:27b`でQ4_K_M約17GBのVRAMで動作します。Qwen3 8BはOllamaを使えばVRAM 5.5GBで動作します。コマンドは1つだけ、設定不要です。Qwen2.5-Coder 32BはHumanEvalで92.7%を達成し、Qwen2-VL 7Bは中国語・日本語のドキュメントOCRで最も優れたローカルビジョンモデルです。このガイドでは、Qwenモデルファミリー全体を解説します。各ハードウェア階層に最適なモデルの選び方、OllamaとLM Studioのセットアップ、量子化の推奨設定、ベンチマークデータ、そしてコンシューマーハードウェアでのDeepSeek・Llamaとの比較を網羅しています。',
    metaDescription: 'Qwen 3.6 27B・Qwen3・Qwen2.5（7B〜72B）・Qwen2.5-Coder・Qwen2-VLを2026年にローカルで動かす完全実践ガイド。VRAM要件、OllamaとLM StudioのセットアップガイドQ4_K_Mベンチマーク、ハードウェア階層別の選び方を解説します。',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ja.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Qwenモデルファミリーをローカルで実行したい開発者・研究者・プライバシー重視のユーザー',
    primaryTerm: 'Qwen ローカルデプロイ',
    affiliateDisclosure: true,
    ctaText: 'Qwen3・DeepSeek・Llamaを1つのインターフェースからディスパッチ →',
    ctaButton: 'PromptQuorumを無料で試す',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**新しいフラッグシップはQwen 3.6 27Bです。Apache 2.0ライセンスの密なモデルで、256Kコンテキストウィンドウを持ち、`ollama run qwen3.6:27b`でQ4_K_M約17GBのVRAMで動作します。** より軽量な構成なら、Ollamaをインストールして`ollama pull qwen2.5:7b`を実行すればQwen3 8BがVRAM 5.5GB、RTX 3060で57トークン/秒で動作します。コーディング用途にはQwen2.5-Coderを、中国語・日本語ドキュメントOCRにはQwen2-VLを使用してください。VRAM予算がすでに決まっている方は、[各Qwen階層に最適なGPUまたはMacの選び方](#affiliate-picks)へ直接お進みください。',
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'Qwen3モデルファミリー概要', anchor: '#model-family' },
      { label: 'モデルサイズ別ハードウェア要件', anchor: '#hardware-tiers' },
      { label: 'Ollamaでのセットアップ', anchor: '#ollama-setup' },
      { label: 'LM Studioでのセットアップ', anchor: '#lm-studio-setup' },
      { label: '量子化：どのフォーマットを選ぶか', anchor: '#quantization-guide' },
      { label: 'コンシューマーハードウェアでのベンチマーク性能', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: '日本企業でのデータ主権と規制対応', anchor: '#regional-context' },
      { label: '予算別ハードウェア推奨', anchor: '#affiliate-picks' },
      { label: 'よくあるミス', anchor: '#common-mistakes' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '下記スライドデッキの内容：新フラッグシップQwen 3.6 27B（256Kコンテキスト、Q4_K_M約17GB）、Qwenモデルファミリー全体像（Qwen3 0.6B〜32B、Qwen2.5 7B〜72B）、ハードウェア階層別VRAM要件、Qwen3-Coder 32Bのベンチマークデータ、Qwen vs DeepSeek vs Llamaの意思決定チャート。Qwenデプロイ参照カードとしてダウンロード可能。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwenローカルデプロイガイド2026：Qwen 3.6 27B・Qwen3・Coder・VLを全ハードウェア階層で動かす',
      description: 'Qwenモデルファミリーのローカルデプロイ完全ガイド — Qwen 3.6 27B・Qwen3・Qwen2.5・Coder・VL、VRAM要件、OllamaとLM Studioのセットアップ、量子化、ベンチマーク、ハードウェア推奨。',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'ja',
      url: 'https://www.promptquorum.com/ja/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Qwen3 8Bをローカルで動かすのに必要なVRAMは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_MにはVRAM 5.5GBが必要です。NVIDIA RTX 3060 6GB、RTX 4060、またはApple M系チップ8GBユニファイドメモリで動作します。' } },
        { '@type': 'Question', name: 'コーディング用途に最適なQwenモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32BはHumanEvalで92.7%を達成し、ローカルで動く最強のコーディングモデルです。GPU 24GB（RTX 3090またはRTX 4090）が必要です。VRAM 12GB以下の場合はQwen3-Coder 14B（HumanEval 85.2%、VRAM 9.5GB）を使用してください。' } },
        { '@type': 'Question', name: 'QwenとDeepSeekのローカルデプロイ比較は？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3はコンシューマーハードウェアに収まるDenseアーキテクチャを採用しています。DeepSeek-V2.5は236B MoEモデルで、Q4では約130GBのRAMが必要です。コンシューマーGPUでは実用的ではありません。' } },
        { '@type': 'Question', name: 'MacでQwenを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Apple SiliconはUnified Memoryを使用します。M2 Pro 32GBはQwen3 14Bを約32トークン/秒で実行できます。M3 Max 64GBはQwen3 32Bを約22トークン/秒で処理します。' } },
        { '@type': 'Question', name: 'QwenのOllamaコマンドは？', acceptedAnswer: { '@type': 'Answer', text: '新フラッグシップは`ollama run qwen3.6:27b`（VRAM約17GB）。Qwen3は`ollama pull qwen3:8b`。Qwen2.5は7Bなら`ollama pull qwen2.5:7b`、14Bは`ollama pull qwen2.5:14b`、32Bは`ollama pull qwen2.5:32b`、コーディング特化版は`ollama pull qwen2.5-coder:32b`です。必ず明示的なサイズタグを使用してください。' } },
        { '@type': 'Question', name: '中国語タスクにQwenは適していますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Qwen3は大規模な中国語コーパスで事前学習されており、簡体字・繁体字・日本語・韓国語・アラビア語など29言語をネイティブサポートしています。' } },
        { '@type': 'Question', name: 'Qwen3に推奨する量子化フォーマットは？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_Mがデフォルト推奨です。FP16比でVRAMを約55%削減し、ベンチマークの品質低下は1%未満です。Q8_0は品質重視でVRAMに余裕がある場合に。Q2_Kは中国語出力品質が著しく低下するため避けてください。' } },
        { '@type': 'Question', name: 'Qwen2-VLは日本語・中国語ドキュメントOCRに使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Qwen2-VL 7BはCJKドキュメントOCRで最も優れたローカルビジョンモデルです。`ollama pull qwen2-vl:7b`でVRAM約6GBで動作し、最大4096×4096ピクセルの解像度でCJKテキストを読み取れます。' } },
        { '@type': 'Question', name: '日本の企業でQwen3を使う場合のMETIガイドラインへの対応は？', acceptedAnswer: { '@type': 'Answer', text: 'ローカルデプロイ時はデータが社外に出ないため、経済産業省の「AI事業者ガイドライン（2024年）」が求めるデータガバナンスの観点でも有利です。特に個人情報・秘密情報を扱う業務では、オフライン推論がリスク管理として有効です。' } },
        { '@type': 'Question', name: 'AppleのM系チップでQwen2.5-72Bを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'M2 Ultra 192GBまたはM3 Ultra 192GBで動作します。Q4_K_Mで約46GBのメモリが必要です。M3 Max 128GBでは一部レイヤーのオフロードが発生し速度が低下します。' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27Bが新フラッグシップ**：密なモデル、Apache 2.0、256Kコンテキスト、Q4_K_M約17GBのVRAM、`ollama run qwen3.6:27b`（2026年4月リリース）。',
          '**Qwen3 8BはVRAM 5.5GBで動作** — `ollama pull qwen2.5:7b`の1コマンドで起動。RTX 3060で57トークン/秒。',
          '**4つの実用的なサブファミリー**：Qwen3（汎用、思考モード）、Qwen2.5（汎用、最も検証済み）、Qwen2.5-Coder（コーディング、32BでHumanEval 92.7%）、Qwen2-VL（ビジョン、ローカルCJK OCR最強）。',
          '**Denseアーキテクチャ = コンシューマー向け**：DeepSeekの236B MoE（約130GB RAM必要）と違い、Qwen2.5-72BはVRAM 46GBで2枚のRTX 3090に収まります。',
          '**ネイティブ多言語対応**：中国語・日本語・韓国語・アラビア語・ドイツ語・フランス語など29言語でLlama 3.3を上回る性能。',
          '**Q4_K_Mが最適な量子化**：FP16比でVRAMを約55%削減し、品質低下は1%未満。',
          '**ハードウェア判断基準**：VRAM 12GB → 14Bモデル；24GB → 32B；48GB+（デュアルGPUまたはApple Silicon 64GB）→ 72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B（256Kコンテキスト、Q4_K_M約17GB）が新フラッグシップ。Qwenには4つのローカルデプロイ用サブファミリーがあります：汎用（7B〜72B）、コーディング（Coder 7B〜32B）、ビジョン（VL 7B〜72B）。すべてOllamaまたはLM Studioで実行可能。' },
          { type: 'plain-terms', text: 'モデルをローカルで動かすとは、AIがクラウドサーバーではなく自分のコンピュータ上で動作することを意味します。データが外部に出ず、ハードウェア購入後はトークンごとのコストもかかりません。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwenモデルファミリー概要',
        content: [
          '**Qwenのラインアップは現在、フラッグシップのQwen 3.6 27B、より新しいQwen3ファミリー、汎用推論のQwen2.5、Qwen2.5-Coder、ビジョン用のQwen2-VLの5つの実用的な選択肢をカバーしています**。すべてAlibaba QwenチームがHugging FaceにApache 2.0ライセンスで公開しているオープンウェイトモデルです。',
          'まずサブファミリーを選び、次にVRAMに合ったサイズを選択します。複数サブファミリーの組み合わせも一般的です：コード補完にQwen2.5-Coder 14B、文書要約にQwen3 8BまたはQwen 3.6 27B、という使い方が典型例です。',
        ],
        rows: [
          { 'サブファミリー': 'Qwen3', '利用可能なサイズ': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '主な用途': '汎用推論、思考モード、多言語、エージェントタスク', 'Ollamaタグプレフィックス': 'qwen3:' },
          { 'サブファミリー': 'Qwen2.5', '利用可能なサイズ': '7B, 14B, 32B, 72B', '主な用途': '汎用推論、中国語/多言語タスク、RAG', 'Ollamaタグプレフィックス': 'qwen2.5:' },
          { 'サブファミリー': 'Qwen2.5-Coder', '利用可能なサイズ': '7B, 14B, 32B', '主な用途': 'コード生成、デバッグ、HumanEval、SWE-bench', 'Ollamaタグプレフィックス': 'qwen2.5-coder:' },
          { 'サブファミリー': 'Qwen2-VL', '利用可能なサイズ': '2B, 7B, 72B', '主な用途': 'ドキュメントOCR、画像Q&A、CJKテキスト抽出', 'Ollamaタグプレフィックス': 'qwen2-vl:' },
        ],
        columns: ['サブファミリー', '利用可能なサイズ', '主な用途', 'Ollamaタグプレフィックス'],
        tableFormat: true,
        note: 'Qwen 3.6 27B（2026年4月リリース）は新フラッグシップです。256Kコンテキストウィンドウを持つ密なモデルで、`ollama run qwen3.6:27b`でQ4_K_M約17GBのVRAMで動作します。Qwen2.5は2026年中頃時点で最も検証済みのファミリーで、OllamaとGGUFのカバレッジが最も広いです。',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'モデルサイズ別ハードウェア要件',
        content: [
          '**まずVRAM階層を選び、次にそこに収まる最大のQwen3モデルを選択します。** 以下の数値はすべてQ4_K_M量子化を基準としています。',
        ],
        rows: [
          { 'モデル': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '約57トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '約55トークン/秒' },
          { 'モデル': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（RTX 4060）': '約38トークン/秒' },
          { 'モデル': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '約38トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '約36トークン/秒' },
          { 'モデル': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '約28トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '約27トークン/秒' },
          { 'モデル': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '約17GB', '最低GPU': 'RTX 4090 24GB', 'Apple Silicon': 'M3 Max 36GB', '速度（RTX 4090）': '約24トークン/秒' },
          { 'モデル': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46GB', '最低GPU': '2× RTX 3090（48GB）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（2×RTX 4090）': '約12トークン/秒' },
        ],
        columns: ['モデル', 'VRAM', '最低GPU', 'Apple Silicon', '速度（RTX 3060）'],
        tableFormat: true,
        note: 'VRAMの数値はOllamaライブラリのQ4_K_M GGUFファイルを基準としています。4KコンテキストのKVキャッシュとして1〜2GB追加が必要です。GPUのVRAMがモデルに必要な量より少ない場合、Ollamaは自動的にシステムRAMにレイヤーをオフロードしますが、速度が大幅に低下します。',
        callouts: [
          { type: 'tip', text: 'ご自身のVRAM階層が決まったら、[その階層に最適なGPUまたはMacの選び方](#affiliate-picks)をご覧ください — 6GB → RTX 4060、12GB → RTX 4070 Super、24GB → RTX 3090/4090、48GB以上 → Mac mini M4 Proまたはデュアル GPU。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ja.webp',
        imageCaption: 'Qwen3 モデルサイズ別VRAM要件（Q4_K_M）— PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaでのセットアップ',
        content: [
          '**Ollamaは任意のQwen3モデルをローカルで実行する最速の方法です。** モデルのダウンロード、GGUF量子化の管理、`localhost:11434`へのローカルAPI提供をすべて自動で行います。[ollama.com](https://ollama.com/download)からインストールしてください。Ollamaを初めて使う場合は、まず[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama)をご覧ください。',
        ],
        numberedItems: [
          { title: 'Ollamaをインストール', whyItMatters: 'macOS、Linux（ワンライナーインストール）、Windowsで利用可能。GPUドライバーの設定は不要 — OllamaはCUDA、ROCm、Metalを自動検出します。' },
          { title: '明示的なサイズタグでモデルを取得', whyItMatters: '必ずサイズを指定してください：`qwen2.5:7b`、`qwen2.5:14b`、`qwen2.5:32b`。タグなしの`qwen2.5`はデフォルトで7Bに解決されますが、Ollamaのバージョン間で変わる可能性があります。' },
          { title: 'モデルを実行', whyItMatters: '`ollama run qwen2.5:7b`でインタラクティブチャットが開きます。プロンプトを入力してEnterキーを押します。終了は`/bye`。' },
          { title: '必要に応じてコンテキストウィンドウを設定', whyItMatters: 'Qwen3はOllamaでデフォルト32Kコンテキストをサポートします。128Kコンテキストを使う場合：`ollama run qwen2.5:7b --num-ctx 131072`。追加VRAMが必要になります。' },
          { title: 'APIエンドポイントをテスト', whyItMatters: 'OllamaはOpenAI互換APIを提供します。PromptQuorum、Continue.dev、Open WebUIなどのアプリが`http://localhost:11434/v1`に直接接続できます。' },
        ],
        codeBlock: `# Ollamaのインストール（Linux）
curl -fsSL https://ollama.com/install.sh | sh

# macOS: ollama.comから.dmgをダウンロード、または:
brew install ollama

# モデルの取得 — 明示的なタグを使用
ollama pull qwen3.6:27b          # フラッグシップ、256Kコンテキスト（約17GB）
ollama pull qwen3:8b             # Qwen3汎用8B（約5.5GB）
ollama pull qwen2.5:7b           # Qwen2.5汎用7B（約5.5GB）
ollama pull qwen2.5:14b          # Qwen2.5汎用14B（約9.5GB）
ollama pull qwen2.5:32b          # Qwen2.5汎用32B（約20.5GB）
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B（約20.5GB）
ollama pull qwen2-vl:7b          # ビジョン7B（約6.2GB）

# インタラクティブ実行
ollama run qwen2.5:7b

# OpenAI互換APIのテスト
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"こんにちは"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studioでのセットアップ',
        content: [
          '**LM StudioはターミナルコマンドなしでQwen3を利用できるGUIです。** [lmstudio.ai](https://lmstudio.ai)からダウンロード、または[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)を参照。macOS・Windows・Linuxで動作します。',
        ],
        numberedItems: [
          { title: 'モデルブラウザを開く', whyItMatters: '「Qwen3」または「Qwen Coder」で検索。Q4_K_Mでフィルタリングすると推奨品質/サイズ比のビルドが表示されます。' },
          { title: 'GGUFビルドをダウンロード', whyItMatters: 'Q4_K_Mバリアントを選択。LM Studioはダウンロード前にファイルサイズを表示します。' },
          { title: 'モデルをロードしてチャット開始', whyItMatters: '左サイドバーでモデルをクリックしてメモリにロード。GPUレイヤーの割り当ては自動です。' },
          { title: 'ローカルサーバーを起動', whyItMatters: '「サーバー起動」で`localhost:1234`にOpenAI互換エンドポイントが公開されます。' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: '量子化：どのフォーマットを選ぶか',
        content: [
          '**Q4_K_MはコンシューマーハードウェアでのQwen3に最適なデフォルトです。** FP16比でVRAMを約55〜60%削減し、MMLUとHumanEvalのベンチマーク劣化は1%未満です。',
        ],
        items: [
          '**Q4_K_M**（推奨）：7Bで約5.5GB。最良の品質/GB比。まずこれを試してください。',
          '**Q8_0**：7Bで約8.5GB。ほぼFP16品質。VRAMに余裕があり最大精度が必要な場合に使用。',
          '**Q5_K_M**：7Bで約6.5GB。Q4_K_Mからのわずかな改善 — タスクでQ4_K_Mの品質が明らかに不足している場合のみ選択。',
          '**Q2_K**：7Bで約3GB。最小ファイルサイズだが、中国語出力品質が著しく低下 — Qwen3で中国語を使う場合は避けること。',
          '**IQ4_XS**：7Bで約4.8GB。Q4_K_Mより品質が高くやや小さい新しいimatrix量子化 — 最近のllama.cppリリースとLM Studio 0.3+で利用可能。',
        ],
        note: '量子化の詳細な解説は[LLM量子化の解説](/ja/local-llms/llm-quantization-explained)をご覧ください。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_MはほとんどのユーザーにとってQwen3に最適な量子化です：FP16比でVRAMを55%削減し、品質低下は1%未満。' },
          { type: 'plain-terms', text: '量子化とはモデルの数値を16ビットから4ビットに圧縮することで、ファイルサイズとVRAM使用量を約半分にします。TIFFから高品質JPEGへの変換のようなもの — ファイルは小さくなりますが、ほとんどの用途では同じ結果が得られます。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'コンシューマーハードウェアでのベンチマーク性能',
        content: [
          '**RTX 4090でのQwen3 32B Q4_K_Mは28トークン/秒** — リアルタイムのコーディング支援に十分な速度です。以下のスコアはOllamaでテストしたQ4_K_M GGUFビルドの値です。',
        ],
        rows: [
          { 'モデル（Q4_K_M）': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（RTX 3060 12GB）': '57トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（RTX 4070 12GB）': '38トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（RTX 4090 24GB）': '28トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（2×RTX 3090）': '12トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', '速度（RTX 3060 12GB）': '55トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', '速度（RTX 4070 12GB）': '36トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（RTX 4090 24GB）': '27トークン/秒' },
        ],
        columns: ['モデル（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（RTX 3060 12GB）'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '27トークン/秒でHumanEval 92.7%を狙いたいですか？[Qwen3-Coder 32Bを動かせる24GB GPU](#affiliate-picks)をご覧ください。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ja.webp',
        imageCaption: 'Qwen3ベンチマークスコア（Q4_K_M）— PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：何をローカルで動かすか',
        content: [
          '**Qwen3は中国語タスクとVRAM効率で優位。DeepSeek-V2.5は大規模推論で強いがコンシューマーハードウェアでは非現実的。Llama 3.3 70BはMetaのオープンモデルを好む場合のシングルGPU最良選択肢です。**',
        ],
        rows: [
          { 'VRAM階層': '6GB', '最良Qwen': 'Qwen3 8B', '最良競合': 'Llama 3.2 3B（収まるが3Bのみ）', '判定': 'Qwen3 8Bが優位 — 同VRAM、より大きなモデル' },
          { 'VRAM階層': '12GB', '最良Qwen': 'Qwen3-Coder 14B', '最良競合': 'Llama 3.3 8B Instruct', '判定': 'コーディングにはQwen3-Coder 14B；汎用チャットにはLlama 3.3 8B' },
          { 'VRAM階層': '24GB', '最良Qwen': 'Qwen3-Coder 32B', '最良競合': 'Llama 3.3 70B（オフロード）', '判定': 'コードにはQwen3-Coder 32B；品質>速度ならLlama 3.3 70B' },
          { 'VRAM階層': '48GB+', '最良Qwen': 'Qwen2.5-72B', '最良競合': 'DeepSeek-V2.5 236B MoE', '判定': 'DeepSeekは約130GB RAM必要；Qwen2.5-72Bが48GBの現実的な選択' },
        ],
        columns: ['VRAM階層', '最良Qwen', '最良競合', '判定'],
        tableFormat: true,
        content2: 'コーディング・推論・多言語対応でのDeepSeekとQwenの詳細な比較は[DeepSeek vs Qwenローカル比較2026](/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026)をご覧ください。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '日本企業でのデータ主権と規制対応',
        content: [
          '**Qwen3をローカルで運用すると、データが社外のサーバーに送信されません** — クラウドAPIと異なり、推論時に外部ネットワーク通信が発生しないためです。これは経済産業省（METI）の「AI事業者ガイドライン（2024年）」が求めるデータガバナンスの観点で有利な構成です。',
          '日本語はQwen3の29言語ネイティブサポートに含まれており、医療・法律・金融などの日本語専門文書でも高精度なテキスト処理が可能です。Qwen2-VL 7Bは日本語ドキュメントのOCRにおいて、LLaVAやLlama 3.2 Visionを上回る精度を示しています。',
          '**アジア太平洋地域の規制環境** — 日本の個人情報保護法（PIPA改正版）では、個人データの安全管理措置として「技術的安全管理措置」が義務付けられています。ローカルLLMは、個人データをオンプレミスで処理することで、この要件に対応しやすい構成です。中国・韓国・シンガポール・オーストラリアでも同様に、機密データのローカル処理がクロスボーダーデータ転送リスクを排除します。完全オフライン構成のガイドは[完全オフラインでAIを動かす](/ja/power-local-llm/local-ai-behind-firewall-offline-2026)をご覧ください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3はダウンロード後に完全オフラインで動作し、データが社外に出ないためMETIのAIガバナンスガイドラインへの対応が容易です。' },
          { type: 'plain-terms', text: 'ローカルで動かすと、プロンプトや文書がコンピュータから出ません。クラウドAPIコールもなく、外部サーバーもなく、第三者がアクセスできるデータもありません。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qwen3デプロイにはどのハードウェアを買うべきか？',
        content: [
          '**まず目標とするQwenの階層に必要なVRAMを確認し、それをクリアする最も安いカードを選びましょう。モデルに必要な量以上のVRAMに支払うのが、このリストで最もよくある無駄遣いです。** 以下のおすすめは上記のハードウェア表に直接対応しています：エントリー → RTX 4060、ミドルレンジ → RTX 4070 Super、ハイエンド → RTX 3090/4090、Apple Silicon → Mac mini M4 Pro、常時稼働 → mini PC。以下の価格は2026年のGPU市場を反映しています — メモリチップ不足とAIデータセンター需要により、新品GPUとApple製品のメモリ構成の価格がいずれも大きく上昇しています。購入前に最新価格をご確認ください。',
        ],
        callouts: [
          { type: 'tip', text: 'すでにVRAM 8GB以上のGPUをお持ちの場合は、このセクションは読み飛ばして構いません — まずは手持ちのハードウェアでQwen3 8Bを動かしてみてください。その上限に達し、より大きなモデルが必要になってから新しいハードウェアを検討してください。' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'エントリー向け — Qwen3 8B、Qwen3-Coder 7B（5.5GB VRAM）',
            verdict: 'このリストの中で、5.5GBのQwen3 8B要件をコンテキスト用の余裕を残しつつクリアできる最も安いカードです。Qwen3-Coder 7Bは約55トークン/秒で動作し、インタラクティブなコーディング支援に十分な速度です。',
            pros: [
              '5.5GBのVRAM要件を、長いコンテキストのKVキャッシュ分の余裕を残してクリア',
              'このリストで最も低価格 — ローカルLLMを初めて使うなら最適な最初の1枚',
              '7B/8Bモデルで50〜57トークン/秒、より高価なカードと同等の性能をこのモデルサイズで発揮',
            ],
            cons: [
              'Qwen3 8B / Qwen3-Coder 7Bが上限 — KVキャッシュを圧迫せずに14Bへ拡張する余地はない',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.co.jp/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8GB', productCategory: 'GPU', priceRange: '約¥42,000〜53,000', label: '現在の価格を確認 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'ミドルレンジ向け — Qwen3 14B、Qwen3-Coder 14B（9.5GB VRAM）',
            verdict: 'Qwen3-Coder 14B（HumanEval 85.2%）を36〜38トークン/秒で動作させ、コンテキスト用に2〜3GBのVRAM余裕が残ります — 7B/8Bモデルからコーディング品質が明確に向上する階層です。',
            pros: [
              '9.5GBのモデルが2〜3GBのVRAM余裕を残して動作 — より長いコンテキストウィンドウの余地',
              'HumanEvalが75.6%（7B）から85.2%（14B）へ上昇 — ラインアップの中で最も分かりやすいコストパフォーマンスの向上',
              '約38トークン/秒でインタラクティブなチャットやコード補完の応答性を維持',
            ],
            cons: [
              '32B階層には十分なVRAMがない — 14Bを超えたくなったら売却や転用を検討する必要がある',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.co.jp/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12GB', productCategory: 'GPU', priceRange: '約¥80,000〜91,000', label: '現在の価格を確認 →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB（または中古のRTX 3090 24 GB）',
            tagline: 'ハイエンド向け — Qwen3-Coder 32B、Qwen 3.6 27B（約17〜20.5GB VRAM）',
            verdict: '4090はQwen3-Coder 32Bで27〜28トークン/秒を発揮します — HumanEval 92.7%でリアルタイムのコーディング速度です。中古のRTX 3090は同じ24GB VRAMを備え、信頼できる中古品を見つけられれば4090の推論速度の約15%以内で、大幅に安く入手できます。',
            pros: [
              '24GBのVRAMですべてのQwen3 32BバリアントとQwen 3.6 27Bを余裕でカバー',
              'Qwen3-Coder 32B（HumanEval 92.7%）で27〜28トークン/秒 — リアルタイムのペアプログラミングに十分な速度',
              '中古のRTX 3090はコスパの高い代替案：VRAMの上限は同じで、速度は約15%遅いが中古価格は大幅に安い',
            ],
            cons: [
              'このリストで最も初期費用が高い — 実際に32Bクラスの品質が必要な場合にのみ正当化される',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.co.jp/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24GB', productCategory: 'GPU', priceRange: '約¥280,000〜350,000', label: '現在の価格を確認 →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB（中古）', productCategory: 'GPU', priceRange: '約¥130,000〜160,000', label: '中古の出品を見る →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Apple Silicon向け — Qwen3 32B（約22トークン/秒、静音・低消費電力）',
            verdict: '統合メモリでQwen3 32Bを動かす上で最もコストパフォーマンスに優れた選択肢です — 静音で消費電力も低く、別途GPUを組み込む必要がありません。Qwen2.5-72Bを動かす場合はM2 Ultra 192GBが代わりに必要です。',
            pros: [
              '48GBの統合メモリで、Qwen3 32Bの20.5GB要件を他アプリ用の余裕を残してクリア',
              '静音動作とデスクトップに適した消費電力 — 専用のGPU冷却管理が不要',
              'OS、ストレージ、推論を一度の購入でまかなえる — 別途GPU/電源/ケースの組み立て不要',
            ],
            cons: [
              'Qwen3 32Bで約22トークン/秒は、RTX 4090の27〜28トークン/秒より明らかに遅い',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/jp/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48GB', productCategory: 'Mini PC', priceRange: '約¥350,000〜400,000', label: '現在の価格を確認 →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro（または同等のAMD Ryzen AI mini PC）',
            tagline: '常時稼働向け — CPU + iGPUでQwen3 8B（約8〜12トークン/秒、35W未満）',
            verdict: 'インタラクティブな用途には向きません — バックグラウンドタスク、ホームオートメーション、あるいは速度より電力コストが重要な低トラフィックのAPIエンドポイントのために、Qwen3 8Bのインスタンスを24時間365日稼働させ続ける用途に適しています。',
            pros: [
              '消費電力35W未満 — デスクトップGPU構成と違い、常時稼働させても安価',
              '小型フォームファクターでどこにでも設置可能。別途GPUを調達・冷却する必要もない',
              'ディスクリートGPUなしでもQwen3 8Bを処理できる',
            ],
            cons: [
              '8〜12トークン/秒はインタラクティブなチャットには遅すぎる — バックグラウンド／API専用の選択肢',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.co.jp/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '約¥59,000〜80,000', label: '現在の価格を確認 →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくあるミス',
        items: [
          '**タグなしで`ollama pull qwen2.5`を実行する。** 明示的なサイズタグ（`:7b`、`:14b`など）なしでは、OllamaはOllamaのアップデートで変わりうるデフォルトサイズに解決します。常に明示的なタグを使用：`ollama pull qwen2.5:14b`。',
          '**コンテキストウィンドウサイズを無視する。** Qwen3は128Kコンテキストをサポートします。OllamaのModelfile仕様では`num_ctx`のデフォルトは2048ですが、実際のランタイムはVRAM容量に応じた段階的なデフォルト値を採用します（24GiB未満は4K、24〜48GiBは32K、48GiB超は256K）。どちらのデフォルトにも依存せず、`num_ctx`を明示的に設定してください。例えば実行コマンドに`--num-ctx 8192`（またはそれ以上）を追加します。設定しないと、モデルは入力を黙って切り詰めます。',
          '**中国語用途にQ2_K量子化を選ぶ。** 2ビット精度では、Qwen3の中国語出力品質が著しく低下します。中国語作業には最低でもQ4_K_Mを使用してください。',
          '**VRAMが不足した状態で32Bモデルを実行する。** GPUが16GBでモデルが20.5GB必要な場合、Ollamaはシステムメモリにレイヤーをオフロードします。3〜5トークン/秒でインタラクティブ使用には不向きです。',
          '**コーディングに間違ったサブファミリーを使う。** Qwen3 8B（汎用）はHumanEvalで57.3%。Qwen3-Coder 7Bは同ベンチマークで75.6% — 相対的に32%の改善。コーディングには必ず同サイズのCoder バリアントを使用してください。',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: '次のステップ',
        items: [
          '[CPUのみで動くベストLLM](/ja/local-llms/best-cpu-only-llm) — GPUなし？Qwen3のどのサイズがCPUだけで動くか →',
          '[LLM量子化を解説](/ja/local-llms/llm-quantization-explained) — Q4_K_MとQ8の違いが分からない？量子化を解説 →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Qwen3 8Bをローカルで動かすのに必要なVRAMは？', a: 'Qwen3 8B Q4_K_MにはVRAM 5.5GBが必要です。RTX 3060 6GB、RTX 4060、またはApple M系8GBユニファイドメモリで動作します。' },
          { q: 'コーディング用途に最適なQwenモデルは？', a: 'Qwen3-Coder 32B — HumanEval 92.7%、GPU 24GB必要。VRAM 12GB以下ならQwen3-Coder 14B（85.2%、9.5GB VRAM）。' },
          { q: 'QwenとDeepSeekのローカルデプロイ比較は？', a: 'Qwen3はコンシューマーハードウェアに収まるDenseアーキテクチャ。DeepSeek-V2.5は236B MoEで約130GB RAM必要 — コンシューマーGPUでは非現実的。' },
          { q: 'MacでQwenを動かせますか？', a: 'はい。M2 Pro 32GBはQwen3 14Bを約32トークン/秒で実行。M3 Max 64GBはQwen3 32Bを約22トークン/秒で処理。' },
          { q: 'QwenのOllamaコマンドは？', a: 'フラッグシップは`ollama run qwen3.6:27b`（VRAM約17GB）。Qwen3は`ollama pull qwen3:8b`。Qwen2.5は`ollama pull qwen2.5:7b`（7B）、`:14b`（14B）、`:32b`（32B）、`qwen2.5-coder:32b`（コーディング版）。常に明示的なサイズタグを使用。' },
          { q: '中国語タスクにQwenは適していますか？', a: 'はい。Qwen3は大規模な中国語コーパスで学習され、簡体字・繁体字・日本語・韓国語を含む29言語をネイティブサポートしています。' },
          { q: 'Qwen3に推奨する量子化は？', a: 'Q4_K_Mがデフォルト推奨 — FP16比でVRAM約55%削減、品質低下1%未満。Q8_0は品質重視、Q2_Kは中国語には不適。' },
          { q: 'Qwen2-VLは日本語・中国語OCRに使えますか？', a: 'はい。Qwen2-VL 7BはCJK OCRで最強のローカルビジョンモデル。`ollama pull qwen2-vl:7b`でVRAM約6GBで動作、最大4096×4096ピクセルに対応。' },
          { q: 'METI AIガイドラインへの対応は？', a: 'ローカルデプロイでデータが社外に出ないため、METI「AI事業者ガイドライン2024」のデータガバナンス要件に対応しやすい構成です。' },
          { q: 'Apple M系チップでQwen2.5-72Bを動かせますか？', a: 'M2 Ultra 192GBまたはM3 Ultra 192GBで動作します。Q4_K_Mで約46GBのメモリが必要です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        links: [
          { url: '/ja/local-llms/run-qwen-locally-guide-2026', title: 'Qwen 3をローカルで動かす2026年版ガイド', description: 'OllamaとLM StudioでQwen 3.6 27Bをセットアップする単一モデルガイド。' },
          { url: '/ja/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2-VLをローカルで動かす2026年版', description: 'Qwen2-VL完全ガイド — CJKドキュメントOCR、画像Q&A、コンシューマーハードウェアでの多言語スクリーンショット解析。' },
          { url: '/ja/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Qwen 3.6 27B、Llama 4 Scout、Mistral Small 3.1のMMLU・SWE-bench・MATH比較。' },
          { url: '/ja/local-llms/llm-quantization-explained', title: 'LLM量子化の解説', description: 'Q4_K_M・Q8_0・IQ4_XSの意味 — VRAMと速度と品質への影響。' },
          { url: '/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwenローカル比較2026', description: 'DeepSeek-V2.5 vs Qwen3の全面比較：コーディング・推論・中国語・クリエイティブライティング。Mac vs NVIDIAの詳細付き。' },
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen本地部署指南2026：Qwen 3.6 27B、Coder和VL各硬件层级完整指南',
    seoTitle: 'Qwen 3.6 27B本地部署2026：Qwen3、Coder、VL各硬件层级Ollama+LM Studio指南',
    intro: 'Qwen 3.6 27B是本地部署的新旗舰——Apache 2.0授权的密集模型，256K上下文窗口，通过`ollama run qwen3.6:27b`在Q4_K_M量化下约17GB显存即可运行。Qwen3 8B通过Ollama仅需5.5GB显存即可运行——只需一条命令，无需任何配置。Qwen2.5-Coder 32B在HumanEval上达到92.7%。Qwen2-VL 7B是中日文档OCR领域最强的本地视觉模型。本指南涵盖完整的Qwen模型家族：各硬件层级的最优模型选择、Ollama和LM Studio部署方法、量化方案推荐、基准测试数据，以及与DeepSeek和Llama在2026年消费级硬件上的对比。',
    metaDescription: '2026年本地运行Qwen 3.6 27B、Qwen3、Qwen2.5全系列（7B–72B）、Qwen2.5-Coder与Qwen2-VL的完整实战部署指南：显存需求对照表、Ollama与LM Studio配置步骤、Q4_K_M量化基准数据，以及各硬件预算档位的配置建议。',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-zh.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    audience: '希望在本地运行完整Qwen模型家族的开发者、研究人员和注重数据隐私的用户，尤其是偏好阿里巴巴模型的中文用户',
    primaryTerm: 'Qwen本地部署',
    affiliateDisclosure: true,
    ctaText: '通过一个界面调度Qwen3、DeepSeek和Llama →',
    ctaButton: '免费试用PromptQuorum',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**新旗舰是Qwen 3.6 27B——Apache 2.0授权的密集模型，256K上下文窗口，通过`ollama run qwen3.6:27b`在Q4_K_M量化下约17GB显存即可运行。** 更轻量的方案：安装Ollama并执行`ollama pull qwen2.5:7b`即可运行Qwen3 8B，仅需5.5GB显存，RTX 3060上可达57个token/秒。代码任务使用Qwen2.5-Coder；中日文档OCR使用Qwen2-VL。已经知道自己的显存预算了？直接跳转查看[各Qwen档位应该买哪款GPU或Mac](#affiliate-picks)。',
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'Qwen3模型家族概览', anchor: '#model-family' },
      { label: '各模型尺寸的硬件要求', anchor: '#hardware-tiers' },
      { label: 'Ollama部署方法', anchor: '#ollama-setup' },
      { label: 'LM Studio部署方法', anchor: '#lm-studio-setup' },
      { label: '量化：如何选择格式', anchor: '#quantization-guide' },
      { label: '消费级硬件基准测试性能', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama对比', anchor: '#vs-comparison' },
      { label: '中国用户：数据安全合规', anchor: '#regional-context' },
      { label: '各预算档位硬件推荐', anchor: '#affiliate-picks' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '常见问题', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '下方幻灯片涵盖：新旗舰Qwen 3.6 27B（256K上下文，Q4_K_M约17GB）、Qwen模型家族全览（Qwen3 0.6B至32B，Qwen2.5 7B至72B）、各硬件层级显存要求、Qwen3-Coder 32B基准数据，以及Qwen vs DeepSeek vs Llama决策图表。可下载作为Qwen部署参考卡片。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen本地部署指南2026：在各硬件层级运行Qwen 3.6 27B、Qwen3、Coder和VL',
      description: 'Qwen模型家族本地部署完整指南——Qwen 3.6 27B、Qwen3、Qwen2.5、Coder和VL，显存要求、Ollama和LM Studio设置、量化方案、基准测试及硬件推荐。',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'zh',
      url: 'https://www.promptquorum.com/zh/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '本地运行Qwen3 8B需要多少显存？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M需要5.5GB显存。NVIDIA RTX 3060 6GB、RTX 4060或Apple M系列芯片8GB统一内存均可运行。' } },
        { '@type': 'Question', name: '本地运行最适合代码任务的Qwen模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B是最强的本地代码模型——HumanEval 92.7%，需要24GB GPU（RTX 3090或RTX 4090）。显存12GB或以下时，使用Qwen3-Coder 14B（HumanEval 85.2%，显存9.5GB）。' } },
        { '@type': 'Question', name: 'Qwen与DeepSeek本地部署对比如何？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3采用适合消费级硬件的Dense架构。DeepSeek-V2.5是236B MoE模型，Q4量化需约130GB内存，在没有服务器级GPU的情况下不可行。VRAM在48GB以下时，Qwen3是实际可行的选择。' } },
        { '@type': 'Question', name: '可以在Mac上运行Qwen吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。Apple Silicon使用统一内存——M2 Pro 32GB可流畅运行Qwen3 14B，约32 token/秒。M3 Max 64GB可处理Qwen3 32B，约22 token/秒。' } },
        { '@type': 'Question', name: 'Qwen的Ollama命令是什么？', acceptedAnswer: { '@type': 'Answer', text: '新旗舰使用`ollama run qwen3.6:27b`（约17GB显存）。Qwen3使用`ollama pull qwen3:8b`。Qwen2.5的7B使用`ollama pull qwen2.5:7b`，14B使用`ollama pull qwen2.5:14b`，32B使用`ollama pull qwen2.5:32b`，代码版本使用`ollama pull qwen2.5-coder:32b`。始终使用明确的尺寸标签。' } },
        { '@type': 'Question', name: 'Qwen适合中文任务吗？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语、阿拉伯语等29种语言，在中文理解和生成任务上持续超越Llama 3.3和Mistral。' } },
        { '@type': 'Question', name: 'Qwen3应该使用哪种量化格式？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M是推荐的默认格式——相比FP16减少约55%显存，基准测试质量损失不足1%。显存充足时使用Q8_0获得接近FP16的质量。中文任务避免使用Q2_K，该格式会明显降低中文输出质量。' } },
        { '@type': 'Question', name: 'Qwen2-VL适合中文文档OCR吗？', acceptedAnswer: { '@type': 'Answer', text: '是的——Qwen2-VL 7B是CJK文档OCR领域最强的本地视觉模型。通过`ollama pull qwen2-vl:7b`在约6GB显存下运行，支持最高4096×4096像素分辨率读取中日韩文字。' } },
        { '@type': 'Question', name: '本地部署Qwen3是否符合中国数据安全法要求？', acceptedAnswer: { '@type': 'Answer', text: '本地运行时数据不离开本地服务器，无需向境外传输数据，符合《数据安全法》第31条关于跨境数据流动的规定。对于受监管行业（金融、医疗、法律），本地推论是最稳健的合规选择。' } },
        { '@type': 'Question', name: 'Qwen2.5-72B需要什么硬件？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M量化需要约46GB显存。可使用两块RTX 3090（48GB合计）或带64GB+统一内存的Apple Silicon（M2 Ultra 192GB可流畅运行）。服务器端可考虑单卡A100 80GB。' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B是新旗舰**：密集模型，Apache 2.0，256K上下文，Q4_K_M约17GB显存，`ollama run qwen3.6:27b`（2026年4月发布）。',
          '**Qwen3 8B仅需5.5GB显存**——执行`ollama pull qwen2.5:7b`即可启动，RTX 3060上达到57 token/秒。',
          '**四个实用子系列**：Qwen3（通用，思考模式）、Qwen2.5（通用，验证最充分）、Qwen2.5-Coder（代码，32B达HumanEval 92.7%）、Qwen2-VL（视觉，本地CJK OCR最强）。',
          '**Dense架构=消费级友好**：与DeepSeek 236B MoE（需约130GB内存）不同，Qwen2.5-72B仅需46GB显存，两块RTX 3090即可运行。',
          '**原生多语言**：在中文、日语、韩语、阿拉伯语、德语、法语等29种语言上预训练，CJK任务持续超越Llama 3.3。',
          '**Q4_K_M是正确的量化选择**：对大多数用户而言减少约55%显存，质量损失不足1%。',
          '**硬件决策**：12GB显存→14B模型；24GB→32B；48GB+（双卡或Apple Silicon 64GB）→72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B（256K上下文，Q4_K_M约17GB）是新旗舰。Qwen覆盖四个本地部署子系列——通用（7B–72B）、代码（Coder 7B–32B）和视觉（VL 7B–72B），均可通过Ollama或LM Studio运行。' },
          { type: 'plain-terms', text: '本地运行模型意味着AI在你自己的电脑上运行，而非云端服务器。数据不离开本机，购买硬件后也无需按token付费。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen模型家族概览',
        content: [
          '**Qwen产品线现在涵盖五个实用选择：旗舰Qwen 3.6 27B、更新的Qwen3家族、通用推理的Qwen2.5、Qwen2.5-Coder，以及视觉领域的Qwen2-VL**——每类均有多种规格。所有模型均为阿里巴巴Qwen团队以Apache 2.0许可证发布的开放权重模型。',
          '先选择子系列，再选择适合显存的规格。混合使用子系列很常见：代码补全用Qwen2.5-Coder 14B，文档摘要用Qwen3 8B或Qwen 3.6 27B。',
        ],
        rows: [
          { '子系列': 'Qwen3', '可用规格': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '主要用途': '通用推理、思考模式、多语言、智能体任务', 'Ollama标签前缀': 'qwen3:' },
          { '子系列': 'Qwen2.5', '可用规格': '7B, 14B, 32B, 72B', '主要用途': '通用推理、中文/多语言任务、RAG', 'Ollama标签前缀': 'qwen2.5:' },
          { '子系列': 'Qwen2.5-Coder', '可用规格': '7B, 14B, 32B', '主要用途': '代码生成、调试、HumanEval、SWE-bench', 'Ollama标签前缀': 'qwen2.5-coder:' },
          { '子系列': 'Qwen2-VL', '可用规格': '2B, 7B, 72B', '主要用途': '文档OCR、图像问答、CJK文字提取', 'Ollama标签前缀': 'qwen2-vl:' },
        ],
        columns: ['子系列', '可用规格', '主要用途', 'Ollama标签前缀'],
        tableFormat: true,
        note: 'Qwen 3.6 27B（2026年4月发布）是新旗舰——拥有256K上下文窗口的密集模型，通过`ollama run qwen3.6:27b`在Q4_K_M量化下约17GB显存即可运行。截至2026年中，Qwen2.5仍是验证最充分的家族，拥有最广泛的Ollama和GGUF支持。',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '各模型尺寸的硬件要求',
        content: [
          '**先确定显存档位，再选择可以装入的最大Qwen3模型。** 以下所有数值均基于Q4_K_M量化——这是Ollama和LM Studio的最佳尺寸/质量比格式。',
        ],
        rows: [
          { '模型': 'Qwen3 8B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '约57 token/秒' },
          { '模型': 'Qwen2.5-Coder 7B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '约55 token/秒' },
          { '模型': 'Qwen2-VL 7B Q4_K_M', '显存': '6.2GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（RTX 4060）': '约38 token/秒' },
          { '模型': 'Qwen2.5 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '约38 token/秒' },
          { '模型': 'Qwen2.5-Coder 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '约36 token/秒' },
          { '模型': 'Qwen2.5 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '约28 token/秒' },
          { '模型': 'Qwen2.5-Coder 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '约27 token/秒' },
          { '模型': 'Qwen 3.6 27B Q4_K_M', '显存': '约17GB', '最低GPU': 'RTX 4090 24GB', 'Apple Silicon': 'M3 Max 36GB', '速度（RTX 4090）': '约24 token/秒' },
          { '模型': 'Qwen2.5-72B Q4_K_M', '显存': '46GB', '最低GPU': '2× RTX 3090（48GB合计）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（2×RTX 4090）': '约12 token/秒' },
        ],
        columns: ['模型', '显存', '最低GPU', 'Apple Silicon', '速度（RTX 3060）'],
        tableFormat: true,
        note: '显存数值适用于Ollama库中的Q4_K_M GGUF文件。4K上下文的KV缓存需额外增加1–2GB。若GPU显存不足，Ollama会自动将层卸载到系统内存——可以运行但速度会大幅降低。',
        callouts: [
          { type: 'tip', text: '已经确定自己的显存档位了？查看[该档位对应的确切GPU或Mac购买建议](#affiliate-picks)——6GB → RTX 4060，12GB → RTX 4070 Super，24GB → RTX 3090/4090，48GB以上 → Mac mini M4 Pro或双卡方案。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-zh.webp',
        imageCaption: 'Qwen3各模型尺寸显存要求（Q4_K_M）— PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama部署方法',
        content: [
          '**Ollama是本地运行任何Qwen3模型的最快方式**——自动处理模型下载、GGUF量化，并在`localhost:11434`提供本地API，无需任何配置。从[ollama.com](https://ollama.com/download)安装。Ollama新手请先阅读[如何安装Ollama](/zh/local-llms/how-to-install-ollama)。',
        ],
        numberedItems: [
          { title: '安装Ollama', whyItMatters: '支持macOS、Linux（一行安装命令）和Windows。无需配置GPU驱动——Ollama自动检测CUDA、ROCm和Metal。' },
          { title: '使用明确的尺寸标签拉取模型', whyItMatters: '始终指定尺寸：`qwen2.5:7b`、`qwen2.5:14b`、`qwen2.5:32b`。无标签的`qwen2.5`默认解析为7B，但可能随Ollama版本变化。' },
          { title: '运行模型', whyItMatters: '`ollama run qwen2.5:7b`打开交互式对话。输入提示词后按Enter。输入`/bye`退出。' },
          { title: '按需设置上下文窗口', whyItMatters: 'Qwen3在Ollama中默认支持32K上下文。使用128K上下文：`ollama run qwen2.5:7b --num-ctx 131072`，但需要更多显存。' },
          { title: '测试API端点', whyItMatters: 'Ollama提供OpenAI兼容API。PromptQuorum、Continue.dev和Open WebUI等应用可直接连接`http://localhost:11434/v1`。' },
        ],
        codeBlock: `# 安装Ollama（Linux）
curl -fsSL https://ollama.com/install.sh | sh

# macOS：从ollama.com下载.dmg，或：
brew install ollama

# 拉取模型 — 使用明确的标签
ollama pull qwen3.6:27b          # 旗舰模型，256K上下文（约17GB）
ollama pull qwen3:8b             # Qwen3通用8B（约5.5GB）
ollama pull qwen2.5:7b           # Qwen2.5通用7B（约5.5GB）
ollama pull qwen2.5:14b          # Qwen2.5通用14B（约9.5GB）
ollama pull qwen2.5:32b          # Qwen2.5通用32B（约20.5GB）
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B（约20.5GB）
ollama pull qwen2-vl:7b          # 视觉7B（约6.2GB）

# 交互式运行
ollama run qwen2.5:7b

# 测试OpenAI兼容API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"你好"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio部署方法',
        content: [
          '**LM Studio提供无需命令行的图形界面运行Qwen3。** 从[lmstudio.ai](https://lmstudio.ai)下载，或参阅[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio)。支持macOS、Windows和Linux。',
        ],
        numberedItems: [
          { title: '打开模型浏览器', whyItMatters: '搜索"Qwen3"或"Qwen Coder"。按Q4_K_M筛选以获得推荐的质量/尺寸比例。' },
          { title: '下载GGUF构建版本', whyItMatters: '选择Q4_K_M变体。LM Studio在下载前显示文件大小——确认与可用显存匹配。' },
          { title: '加载模型并开始对话', whyItMatters: '点击左侧边栏中的模型将其加载到内存。GPU层分配自动完成。' },
          { title: '启动本地服务器', whyItMatters: '"启动服务器"在`localhost:1234`开放OpenAI兼容端点。应用和脚本可像使用OpenAI API一样连接。' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: '量化：如何选择格式',
        content: [
          '**Q4_K_M是Qwen3在消费级硬件上的最佳默认选择。** 相比FP16减少约55–60%显存，MMLU和HumanEval的性能损失不足1%。',
        ],
        items: [
          '**Q4_K_M**（推荐）：7B约5.5GB。最佳质量/GB比。优先选择此格式。',
          '**Q8_0**：7B约8.5GB。接近FP16质量；显存充足且需要最高精度时使用。',
          '**Q5_K_M**：7B约6.5GB。相比Q4_K_M质量略有提升——仅在Q4_K_M输出质量明显不足时选用。',
          '**Q2_K**：7B约3GB。文件最小，但中文输出质量明显下降——中文用途请避免使用Qwen3的Q2_K。',
          '**IQ4_XS**：7B约4.8GB。比Q4_K_M质量更高且体积略小的新型imatrix量化——在最新llama.cpp版本和LM Studio 0.3+中可用。',
        ],
        note: '量化详细说明请参阅[LLM量化解析](/zh/local-llms/llm-quantization-explained)。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M是大多数用户的最佳Qwen3量化选择：相比FP16减少55%显存，质量损失不足1%。' },
          { type: 'plain-terms', text: '量化将模型的数值从16位压缩到4位，大约将文件大小和显存需求减半。就像从TIFF转换为高质量JPEG——文件更小，但大多数用途的效果几乎相同。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '消费级硬件基准测试性能',
        content: [
          '**RTX 4090上的Qwen3 32B Q4_K_M达到28 token/秒**——完全满足实时代码辅助需求。以下评分适用于Ollama测试的Q4_K_M GGUF构建版本。',
        ],
        rows: [
          { '模型（Q4_K_M）': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（RTX 3060 12GB）': '57 token/秒' },
          { '模型（Q4_K_M）': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（RTX 4070 12GB）': '38 token/秒' },
          { '模型（Q4_K_M）': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（RTX 4090 24GB）': '28 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（2×RTX 3090）': '12 token/秒' },
          { '模型（Q4_K_M）': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', '速度（RTX 3060 12GB）': '55 token/秒' },
          { '模型（Q4_K_M）': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', '速度（RTX 4070 12GB）': '36 token/秒' },
          { '模型（Q4_K_M）': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（RTX 4090 24GB）': '27 token/秒' },
        ],
        columns: ['模型（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（RTX 3060 12GB）'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '想要以27 token/秒的速度获得92.7%的HumanEval评分？查看[运行Qwen3-Coder 32B所需的24GB显存GPU](#affiliate-picks)。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-zh.webp',
        imageCaption: 'Qwen3基准测试评分（Q4_K_M）— PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：本地应该运行哪个',
        content: [
          '**Qwen3在中文任务和显存效率上胜出；DeepSeek-V2.5在大规模推理上胜出但在消费级硬件上不实用；Llama 3.3 70B是偏好Meta开放模型时的最佳单卡选择。**',
        ],
        rows: [
          { '显存档位': '6GB', '最佳Qwen': 'Qwen3 8B', '最佳竞品': 'Llama 3.2 3B（可装入但仅3B）', '建议': 'Qwen3 8B胜出——相同显存，更大模型' },
          { '显存档位': '12GB', '最佳Qwen': 'Qwen3-Coder 14B', '最佳竞品': 'Llama 3.3 8B Instruct', '建议': '代码用Qwen3-Coder 14B；通用对话用Llama 3.3 8B' },
          { '显存档位': '24GB', '最佳Qwen': 'Qwen3-Coder 32B', '最佳竞品': 'Llama 3.3 70B（卸载）', '建议': '代码用Qwen3-Coder 32B；质量优先于速度则选Llama 3.3 70B' },
          { '显存档位': '48GB+', '最佳Qwen': 'Qwen2.5-72B', '最佳竞品': 'DeepSeek-V2.5 236B MoE', '建议': 'DeepSeek需约130GB内存；Qwen2.5-72B是48GB的实际可行选择' },
        ],
        columns: ['显存档位', '最佳Qwen', '最佳竞品', '建议'],
        tableFormat: true,
        content2: '代码、推理和多语言任务上DeepSeek与Qwen的深度对比，请参阅[DeepSeek vs Qwen本地对比2026](/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026)。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '中国用户：数据安全合规与本地部署',
        content: [
          '**本地运行Qwen3意味着数据完全不离开本地服务器——无需跨境传输，符合《数据安全法》（DSL）第31条和《网络安全法》的相关规定。** 基于云端的LLM API需要将提示词发送至境外服务器，可能触发DSL的数据出境安全评估要求。',
          'Qwen3由阿里巴巴Qwen团队在大规模中文及多语言语料库上训练，是简体中文、繁体中文及中英混合文档本地部署的最强选择。在中文阅读理解和文本生成任务上，持续优于Llama 3.3和Mistral。',
          '**受监管行业（金融、医疗、法律）的企业部署方案**：完全离线的Qwen3部署（推理时无互联网连接）是最稳健的合规选择，符合国家互联网信息办公室（CAC）关于生成式AI服务的管理规定。模型完全在本地算力上运行——监管关注点在于训练数据和输出内容审核，而非在离线硬件上进行的推理过程。**亚太地区数据跨境**：中国、韩国、新加坡、澳大利亚均已建立数据本地化框架，本地LLM推理可消除跨境传输风险。**金融/医疗/法律企业方案**：大型银行、医院、律所如需在内网处理敏感数据，搭配防火墙内Qwen3即可满足内部AI合规要求。完整的离线部署指南请参阅[完全离线运行AI](/zh/power-local-llm/local-ai-behind-firewall-offline-2026)。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3下载后可完全离线运行——数据不离开本机，消除了《数据安全法》下的跨境数据传输风险。' },
          { type: 'plain-terms', text: '本地运行Qwen3时，您的提示词和文档永远不会离开您的电脑。没有云API调用，没有境外服务器，也没有监管机构或第三方可以访问的数据。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '部署Qwen3应该买哪款硬件？',
        content: [
          '**先根据目标Qwen档位确定所需显存，再购买能满足该需求的最便宜显卡——为超出模型实际需求的显存多花钱，是这份清单里最常见的超支。** 以下推荐与上方硬件表格一一对应：入门级 → RTX 4060，中端 → RTX 4070 Super，高端 → RTX 3090/4090，Apple Silicon → Mac mini M4 Pro，全天候方案 → mini PC。以下价格反映2026年显卡市场行情——显存芯片短缺和AI数据中心需求推高了新显卡及Apple内存配置的价格，购买前请核实当前实际报价。',
        ],
        callouts: [
          { type: 'tip', text: '如果你已经拥有一块显存8GB以上的显卡，可以跳过这一节——先在现有硬件上运行Qwen3 8B。只有触及这一上限、需要更大模型时，再考虑购买新硬件。' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8GB',
            tagline: '入门级选择——Qwen3 8B、Qwen3-Coder 7B（5.5GB显存）',
            verdict: '这是清单中能满足Qwen3 8B 5.5GB显存需求、同时仍留有上下文余量的最便宜显卡。运行Qwen3-Coder 7B可达约55 token/秒——足以支持交互式编码辅助。',
            pros: [
              '5.5GB显存需求可轻松满足，还留有长上下文KV缓存的余量',
              '清单中价格最低——如果你从未运行过本地LLM，这是合适的第一块显卡',
              '在7B/8B模型上达到50–57 token/秒，与该模型规模下更贵的显卡表现相当',
            ],
            cons: [
              '上限为Qwen3 8B/Qwen3-Coder 7B——若不压缩KV缓存，无法升级到14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: '查看当前价格 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12GB',
            tagline: '中端选择——Qwen3 14B、Qwen3-Coder 14B（9.5GB显存）',
            verdict: '以36–38 token/秒运行Qwen3-Coder 14B（HumanEval 85.2%），还留有2–3GB显存用于上下文——这是编码质量相比7B/8B模型明显跃升的档位。',
            pros: [
              '9.5GB模型可运行，还留有2–3GB显存余量——可支持更长的上下文窗口',
              'HumanEval从75.6%（7B）跃升至85.2%（14B）——整条产品线中性价比提升最明显的一档',
              '约38 token/秒的速度保证交互式对话和代码补全的流畅响应',
            ],
            cons: [
              '显存不足以支撑32B档位——若需求超出14B，需考虑转售或另作他用',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '$650–735', label: '查看当前价格 →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24GB（或二手RTX 3090 24GB）',
            tagline: '高端选择——Qwen3-Coder 32B、Qwen 3.6 27B（约17–20.5GB显存）',
            verdict: '4090在Qwen3-Coder 32B上可达27–28 token/秒——以92.7%的HumanEval评分实现实时编码速度。二手RTX 3090同样拥有24GB显存，推理速度约为4090的85%左右，如果能找到可信赖的二手卖家，价格会明显更低。',
            pros: [
              '24GB显存可覆盖所有Qwen3 32B变体和Qwen 3.6 27B，还留有余量',
              '在Qwen3-Coder 32B（HumanEval 92.7%）上达到27–28 token/秒——足以支持实时结对编程',
              '二手RTX 3090是高性价比替代方案：显存上限相同，速度约慢15%，但二手价格明显更低',
            ],
            cons: [
              '清单中前期成本最高——只有在确实需要32B级别的质量时才值得',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '$2,300–2,800', label: '查看当前价格 →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (used)', productCategory: 'GPU', priceRange: '$1,050–1,300', label: '查看二手市场 →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48GB',
            tagline: 'Apple Silicon选择——Qwen3 32B（约22 token/秒，安静低功耗）',
            verdict: '在统一内存架构上运行Qwen3 32B性价比最高的选择——安静、低功耗、无需另装显卡。若要运行Qwen2.5-72B，则需要改用M2 Ultra 192GB。',
            pros: [
              '48GB统一内存可满足Qwen3 32B的20.5GB显存需求，还留有运行其他应用的空间',
              '静音运行，功耗适合日常桌面使用——无需额外的显卡散热管理',
              '一次性购买即可涵盖系统、存储和推理——无需单独组装GPU/电源/机箱',
            ],
            cons: [
              '在Qwen3 32B上约22 token/秒，明显慢于RTX 4090的27–28 token/秒',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CQSL8N8F', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '约 $1,799–1,999', label: '查看当前价格 →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro（或同类AMD Ryzen AI mini PC）',
            tagline: '全天候选择——CPU+核显运行Qwen3 8B（约8–12 token/秒，功耗低于35W）',
            verdict: '不适合交互式使用——适合用于7×24小时挂机运行Qwen3 8B实例，处理后台任务、家庭自动化，或对功耗成本比速度更敏感的低流量API端点。',
            pros: [
              '功耗低于35W——相比桌面显卡装机，长时间运行成本更低',
              '体积小巧，几乎能放在任何地方；无需单独配置或散热的独立显卡',
              '无需独立显卡即可运行Qwen3 8B',
            ],
            cons: [
              '8–12 token/秒的速度太慢，不适合交互式对话——仅适合后台/API场景',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '$479–649', label: '查看当前价格 →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**使用无标签的`ollama pull qwen2.5`命令。** 没有明确的尺寸标签（`:7b`、`:14b`等），Ollama可能解析到随版本更新变化的默认尺寸。始终使用明确标签：`ollama pull qwen2.5:14b`。',
          '**忽略上下文窗口大小。** Qwen3支持128K上下文。Ollama的Modelfile规范将`num_ctx`默认设为2048，但实际运行时会根据显存大小分级采用不同默认值：低于24 GiB为4K，24-48 GiB为32K，超过48 GiB为256K。不要依赖这两种默认值中的任何一个，应显式设置`num_ctx`，例如在运行命令中添加`--num-ctx 8192`（或更高）——否则模型会静默截断输入。',
          '**中文用途选择Q2_K量化。** 2位精度下，Qwen3的中文输出质量明显下降——出现字符替换问题。中文任务至少使用Q4_K_M。',
          '**显存不足时运行32B模型。** 若GPU只有16GB而模型需要20.5GB，Ollama会将层卸载到系统内存。模型可运行但速度仅3–5 token/秒，不适合交互使用。',
          '**代码任务使用错误的子系列。** Qwen3 8B（通用版）在HumanEval上得57.3%。Qwen3-Coder 7B得75.6%——相对提升32%。代码任务始终使用同等规格的Coder版本。',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: '下一步',
        items: [
          '[仅用CPU运行LLM指南](/zh/local-llms/best-cpu-only-llm) — 没有GPU？了解哪些Qwen3规格可纯CPU运行 →',
          '[LLM量化详解](/zh/local-llms/llm-quantization-explained) — Q4_K_M和Q8搞不清楚？量化原理详解 →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地运行Qwen3 8B需要多少显存？', a: 'Qwen3 8B Q4_K_M需要5.5GB显存。RTX 3060 6GB、RTX 4060或Apple M系列芯片8GB统一内存均可。' },
          { q: '本地运行最适合代码任务的Qwen模型？', a: 'Qwen3-Coder 32B——HumanEval 92.7%，需24GB GPU。显存12GB或以下：Qwen3-Coder 14B（85.2%，9.5GB显存）。' },
          { q: 'Qwen与DeepSeek本地部署对比？', a: 'Qwen3使用适合消费级硬件的Dense架构。DeepSeek-V2.5是236B MoE，需约130GB内存，没有服务器级GPU无法实现。' },
          { q: '可以在Mac上运行Qwen吗？', a: '可以。M2 Pro 32GB可流畅运行Qwen3 14B，约32 token/秒。M3 Max 64GB可处理Qwen3 32B，约22 token/秒。' },
          { q: 'Qwen的Ollama命令是什么？', a: '旗舰模型使用`ollama run qwen3.6:27b`（约17GB显存）。Qwen3使用`ollama pull qwen3:8b`。Qwen2.5的7B用`ollama pull qwen2.5:7b`，14B用`:14b`，32B用`:32b`，代码版用`qwen2.5-coder:32b`。始终使用明确的尺寸标签。' },
          { q: 'Qwen适合中文任务吗？', a: '是的。Qwen3在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语等29种语言，中文任务持续超越Llama 3.3和Mistral。' },
          { q: 'Qwen3应该使用哪种量化格式？', a: 'Q4_K_M是推荐默认格式——相比FP16减少约55%显存，质量损失不足1%。显存充足时用Q8_0。中文任务避免Q2_K。' },
          { q: 'Qwen2-VL适合中文文档OCR吗？', a: '是的——`ollama pull qwen2-vl:7b`，约6GB显存，支持最高4096×4096像素中日韩文字识别。' },
          { q: '本地部署Qwen3是否符合数据安全法要求？', a: '本地运行时数据不离开本地服务器，无需跨境传输，符合《数据安全法》第31条规定。金融、医疗、法律等受监管行业的最佳合规选择。' },
          { q: 'Qwen2.5-72B需要什么硬件？', a: 'Q4_K_M量化需约46GB显存。两块RTX 3090（合计48GB）或带64GB+统一内存的Apple Silicon（M2 Ultra 192GB可流畅运行）。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        links: [
          { url: '/zh/local-llms/run-qwen-locally-guide-2026', title: '2026年本地运行Qwen 3指南', description: 'Qwen 3.6 27B单模型设置指南，使用Ollama和LM Studio——最快速的Qwen实例启动方法。' },
          { url: '/zh/local-llms/run-qwen-vl-locally-2026', title: '2026年本地运行Qwen2-VL', description: 'Qwen2-VL完整指南——消费级硬件上的CJK文档OCR、图像问答和多语言截图分析。' },
          { url: '/zh/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Qwen 3.6 27B、Llama 4 Scout和Mistral Small 3.1在MMLU、SWE-bench和MATH上的基准对比。' },
          { url: '/zh/local-llms/llm-quantization-explained', title: 'LLM量化解析', description: 'Q4_K_M、Q8_0和IQ4_XS的含义——对显存、速度和输出质量的影响。' },
          { url: '/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen本地对比2026', description: '完整对比：DeepSeek-V2.5 vs Qwen3在代码、推理、中文和创意写作上的表现——含Mac vs NVIDIA详细分析。' },
          { url: '/zh/prompt-bites/best-qwen-model-for-coding', title: '最佳Qwen编码模型', description: 'Qwen3-Coder 7B vs 32B：本地自动补全与代码审查的选择指南。' },
          { url: '/zh/power-local-llm/deepseek-offline-china-self-hosted-2026', title: '本地离线部署 DeepSeek：完全断网运行指南', description: '想用推理模型？了解如何在完全离线环境中本地部署 DeepSeek-R1 Distill，数据零出境，满足《数据安全法》合规要求。' },
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen 로컬 배포 가이드 2026: Qwen 3.6 27B, Coder & VL 하드웨어 티어별 실행 방법',
    seoTitle: 'Qwen 3.6 27B 로컬 설정 2026: Qwen3, Coder, VL & 하드웨어 티어',
    intro: 'Qwen 3.6 27B는 로컬 배포의 새로운 플래그십 모델입니다 — Apache 2.0 라이선스의 밀집 모델로, 256K 컨텍스트 창을 갖추고 있으며 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. Qwen3 8B는 Ollama를 통해 명령어 하나만으로 5.5 GB의 VRAM에서 실행됩니다. Qwen2.5-Coder 32B는 HumanEval에서 92.7%를 달성합니다. Qwen2-VL 7B는 중국어 및 일본어 문서 OCR에서 로컬 비전 모델 중 최고 성능을 보입니다. 이 가이드는 Qwen 전체 패밀리를 다룹니다 — 각 하드웨어 티어에서 실행할 모델, Ollama와 LM Studio 설정 방법, 양자화 선택, 벤치마크 데이터, 그리고 2026년 소비자 하드웨어에서 Qwen이 DeepSeek 및 Llama와 어떻게 비교되는지를 설명합니다.',
    metaDescription: '2026년에 Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder, Qwen2-VL을 로컬에서 실행하십시오. VRAM 요구사항, Ollama + LM Studio 설정, Q4_K_M 벤치마크, 하드웨어 티어 가이드를 제공합니다.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ko.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-08-25',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    audience: 'Qwen 전체 모델 패밀리를 로컬에서 실행하고자 하는 개발자, 연구자, 프라이버시 중심 사용자 — 미국 대안보다 Alibaba 모델을 선호하는 중국어 사용자 포함',
    primaryTerm: 'Qwen 로컬 배포',
    targetKeywords: [
      'qwen 로컬 배포 2026',
      'qwen 로컬 실행',
      'qwen ollama 설정',
      'qwen2.5 vram 요구사항',
      'qwen coder 로컬',
      'qwen2-vl 로컬',
      'qwen본지부서',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen2.5-72B',
      'Qwen3-Coder 7B',
      'Qwen3-Coder 14B',
      'Qwen3-Coder 32B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'DeepSeek-V2.5',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'RTX 3060 12 GB',
      'RTX 4070 12 GB',
      'RTX 4070 Ti 16 GB',
      'RTX 3090 24 GB',
      'RTX 4090 24 GB',
      'Apple M3 Max',
      'Apple M2 Ultra',
      'Mac mini M4',
    ],
    affiliateDisclosure: true,
    ctaText: 'Qwen3, DeepSeek, Llama를 하나의 인터페이스에서 실행하십시오 →',
    ctaButton: 'PromptQuorum 무료로 사용해보기',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**새로운 플래그십 모델은 Qwen 3.6 27B입니다** — Apache 2.0 라이선스의 밀집 모델로, 256K 컨텍스트 창을 갖추고 있으며 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. 더 가벼운 설정을 원하면 Ollama를 설치하고 `ollama pull qwen2.5:7b`를 실행해 Qwen3 8B를 사용하십시오 — 5.5 GB의 VRAM이 필요하며 RTX 3060에서 초당 57 토큰을 처리합니다. 코딩 작업에는 Qwen2.5-Coder를, 중국어/일본어 문서 OCR에는 Qwen2-VL을 사용하십시오. 이미 원하는 VRAM 예산을 알고 계신가요? [각 Qwen 티어에 맞는 GPU 또는 Mac 구매 가이드](#affiliate-picks)로 바로 이동하십시오.',
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: 'Qwen3 모델 패밀리 개요', anchor: '#model-family' },
      { label: '모델 크기별 하드웨어 요구사항', anchor: '#hardware-tiers' },
      { label: 'Ollama로 설정하기', anchor: '#ollama-setup' },
      { label: 'LM Studio로 설정하기', anchor: '#lm-studio-setup' },
      { label: '양자화: 어떤 형식을 선택할까', anchor: '#quantization-guide' },
      { label: '소비자 하드웨어에서의 벤치마크 성능', anchor: '#benchmarks' },
      { label: 'Qwen vs DeepSeek vs Llama', anchor: '#vs-comparison' },
      { label: '중국 사용자: 데이터 주권', anchor: '#regional-context' },
      { label: '예산별 하드웨어 추천', anchor: '#affiliate-picks' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '아래 슬라이드 덱은 다음 내용을 다룹니다: 새로운 플래그십 Qwen 3.6 27B(256K 컨텍스트, Q4_K_M 기준 약 17GB), Qwen 모델 패밀리 전체 개요(Qwen3 0.6B–32B, Qwen2.5 7B–72B), 하드웨어 티어별 VRAM 요구사항, Qwen3-Coder 32B 벤치마크 데이터, Qwen vs DeepSeek vs Llama 의사결정 차트. Qwen 배포 참고 카드로 다운로드하십시오.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen 로컬 배포 가이드 2026: 모든 하드웨어 티어에서 Qwen 3.6 27B, Qwen3, Coder & VL 실행하기',
      description: 'Qwen 모델 패밀리를 로컬에서 배포하는 완전한 가이드 — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder, VL, VRAM 요구사항, Ollama 및 LM Studio 설정, 양자화, 벤치마크, 하드웨어 권장 사항.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-25',
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qwen3 8B를 로컬에서 실행하려면 VRAM이 얼마나 필요합니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M는 5.5 GB의 VRAM이 필요합니다. NVIDIA RTX 3060 6 GB, RTX 4060, 또는 통합 메모리 8 GB의 Apple M 시리즈 칩에서 모두 원활하게 실행됩니다. VRAM이 8 GB이면 컨텍스트 및 시스템 RAM을 위한 여유 공간이 생깁니다.' },
        },
        {
          '@type': 'Question',
          name: '로컬에서 코딩에 가장 적합한 Qwen 모델은 무엇입니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3-Coder 32B는 로컬에서 실행 가능한 최고의 코딩 모델입니다 — HumanEval에서 92.7%를 기록하며 24 GB GPU(RTX 3090 또는 RTX 4090)가 필요합니다. VRAM이 12 GB 이하인 경우 Qwen3-Coder 14B(HumanEval 85.2%, 9.5 GB VRAM)를 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: '로컬 배포에서 Qwen은 DeepSeek와 어떻게 비교됩니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-72B와 DeepSeek-V2.5 236B(MoE)는 일반 작업에서 경쟁력이 있지만, Qwen은 소비자 하드웨어에 맞는 밀집 아키텍처를 사용합니다. DeepSeek-V2.5는 Q4에서 약 130 GB RAM이 필요하며 서버 GPU 없이는 도달하기 어렵습니다. VRAM이 24 GB 미만인 경우 Qwen3가 실용성에서 우세합니다.' },
        },
        {
          '@type': 'Question',
          name: 'Mac에서 Qwen을 실행할 수 있습니까?',
          acceptedAnswer: { '@type': 'Answer', text: '가능합니다. Apple Silicon은 통합 메모리를 사용합니다 — M2 Pro 32 GB는 Qwen3 14B를 초당 약 32 토큰으로 원활하게 실행합니다. M3 Max 64 GB는 Qwen3 32B를 초당 약 22 토큰으로 처리합니다. 가장 간단한 설정을 위해 Ollama macOS 앱 또는 LM Studio를 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen에 사용할 Ollama 명령어는 무엇입니까?',
          acceptedAnswer: { '@type': 'Answer', text: '새로운 플래그십은 `ollama run qwen3.6:27b`(약 17GB VRAM)를 실행하십시오. Qwen3는 `ollama pull qwen3:8b`를 사용하십시오. Qwen2.5는 7B 모델의 경우 `ollama pull qwen2.5:7b`, 14B는 `ollama pull qwen2.5:14b`, 32B는 `ollama pull qwen2.5:32b`, 코딩 최적화 32B 변형은 `ollama pull qwen2.5-coder:32b`를 실행하십시오. 태그 없는 `qwen2.5`는 다른 버전으로 해석될 수 있으므로 항상 명시적인 크기 태그를 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen은 중국어 작업에 적합합니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3는 대규모 중국어 코퍼스로 사전 학습되었으며 간체 중국어, 번체 중국어, 일본어, 한국어 및 26개 언어를 기본 지원합니다. 중국어 읽기 이해 및 생성에서 Llama 3.3과 Mistral을 지속적으로 능가하여 중국어 로컬 AI의 선호 모델입니다.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen3에 어떤 양자화를 사용해야 합니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M이 권장 기본값입니다 — 대부분의 벤치마크에서 1% 미만의 품질 손실로 전체 정밀도 대비 VRAM을 약 55–60% 절감합니다. 여유 VRAM이 있고 FP16에 가까운 품질을 원한다면 Q8_0을 사용하십시오. Q2_K는 피하십시오 — 중국어 출력 품질이 눈에 띄게 저하됩니다.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen2-VL이 중국어 문서 OCR에 효과적입니까?',
          acceptedAnswer: { '@type': 'Answer', text: '그렇습니다 — Qwen2-VL 7B는 CJK 문서 OCR에서 가장 강력한 로컬 비전 모델입니다. Ollama를 통해 약 6 GB VRAM으로 실행(`ollama pull qwen2-vl:7b`)되며, 다운샘플링 없이 4096×4096 해상도에서 중국어, 일본어, 한국어 텍스트를 읽습니다. 전체 가이드는 /local-llms/run-qwen-vl-locally-2026에서 확인하십시오.' },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B가 새로운 플래그십 모델입니다**: 밀집 모델, Apache 2.0, 256K 컨텍스트, Q4_K_M 기준 약 17GB VRAM, `ollama run qwen3.6:27b`(2026년 4월 출시).',
          '**Qwen3 8B는 5.5 GB VRAM에서 실행됩니다** — `ollama pull qwen2.5:7b` 명령어 하나로 RTX 3060에서 초당 57 토큰 속도로 실행할 수 있습니다.',
          '**네 가지 실용적인 하위 패밀리**: Qwen3(범용, 사고 모드), Qwen2.5(범용, 가장 폭넓게 검증됨), Qwen2.5-Coder(코딩, 32B에서 HumanEval 92.7%), Qwen2-VL(비전, 로컬에서 최고의 CJK OCR).',
          '**밀집 아키텍처 = 소비자 친화적**: DeepSeek의 236B MoE 모델(약 130 GB RAM 필요)과 달리, Qwen2.5-72B는 두 개의 RTX 3090에서 46 GB VRAM으로 실행됩니다.',
          '**네이티브 다국어**: 중국어, 일본어, 한국어, 아랍어, 독일어, 프랑스어 및 23개 언어로 사전 학습 — Qwen3는 CJK 작업에서 Llama 3.3을 지속적으로 능가합니다.',
          '**Q4_K_M이 적합한 양자화**: 대부분의 사용자에게 최적 — VRAM 약 55% 절감, 벤치마크 품질 손실 1% 미만.',
          '**하드웨어 결정**: VRAM 12 GB → 14B 모델; 24 GB → 32B; 48 GB 이상(GPU 두 개 또는 Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B(256K 컨텍스트, Q4_K_M 기준 약 17GB)가 새로운 플래그십입니다. Qwen은 범용(7B–72B), 코딩(Coder 7B–32B), 비전(VL 7B–72B) 네 가지 로컬 배포 하위 패밀리를 제공하며, 모두 Ollama 또는 LM Studio를 통해 실행 가능합니다.' },
          { type: 'plain-terms', text: '모델을 로컬에서 실행한다는 것은 AI가 클라우드 서버가 아닌 여러분의 컴퓨터에서 실행된다는 의미입니다. 데이터가 외부로 전송되지 않으며, 하드웨어 구입 후에는 토큰당 비용이 발생하지 않습니다.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen 모델 패밀리 개요',
        content: [
          '**Qwen 라인업은 이제 다섯 가지 실용적인 선택지를 제공합니다: 플래그십 Qwen 3.6 27B, 더 새로운 Qwen3 패밀리, 범용 추론용 Qwen2.5, Qwen2.5-Coder, 비전용 Qwen2-VL** — 각각 다양한 크기 옵션을 제공합니다. 모두 Alibaba의 Qwen 팀이 Apache 2.0 라이선스로 Hugging Face에 공개한 오픈 웨이트 모델입니다.',
          '먼저 하위 패밀리를 선택한 다음 VRAM에 맞는 크기를 고르십시오. 하위 패밀리를 혼합해 사용하는 것도 일반적입니다: 코드 완성에는 Qwen2.5-Coder 14B를, 문서 요약에는 Qwen3 8B 또는 Qwen 3.6 27B를 사용하십시오.',
        ],
        rows: [
          { '하위 패밀리': 'Qwen3', '제공 크기': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '주요 용도': '범용 추론, 사고 모드, 다국어, 에이전트 작업', 'Ollama 태그 접두사': 'qwen3:' },
          { '하위 패밀리': 'Qwen2.5', '제공 크기': '7B, 14B, 32B, 72B', '주요 용도': '범용 추론, 중국어/다국어 작업, RAG', 'Ollama 태그 접두사': 'qwen2.5:' },
          { '하위 패밀리': 'Qwen2.5-Coder', '제공 크기': '7B, 14B, 32B', '주요 용도': '코드 생성, 디버깅, HumanEval, SWE-bench', 'Ollama 태그 접두사': 'qwen2.5-coder:' },
          { '하위 패밀리': 'Qwen2-VL', '제공 크기': '2B, 7B, 72B', '주요 용도': '문서 OCR, 이미지 Q&A, CJK 텍스트 추출', 'Ollama 태그 접두사': 'qwen2-vl:' },
        ],
        columns: ['하위 패밀리', '제공 크기', '주요 용도', 'Ollama 태그 접두사'],
        tableFormat: true,
        note: 'Qwen 3.6 27B(2026년 4월 출시)는 새로운 플래그십 모델입니다 — 256K 컨텍스트 창을 갖춘 밀집 모델로 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. Qwen2.5는 2026년 중반 기준 가장 폭넓게 검증된 패밀리로, Ollama와 GGUF 지원 범위가 가장 넓습니다. 더 넓은 모델 비교는 [2026년 최고의 로컬 LLM](/local-llms/best-local-llms-2026)을 참조하십시오.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '모델 크기별 하드웨어 요구사항',
        content: [
          '**먼저 VRAM 티어를 결정한 다음, 적합한 최대 크기의 Qwen 모델을 선택하십시오.** 아래 수치는 모두 표준 양자화인 Q4_K_M을 기준으로 하며, Ollama와 LM Studio에서 최고의 크기 대비 품질 비율을 제공합니다.',
        ],
        rows: [
          { '모델': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', '최소 GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', '속도 (RTX 3060)': '~57 tok/s' },
          { '모델': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', '최소 GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', '속도 (RTX 3060)': '~55 tok/s' },
          { '모델': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2 GB', '최소 GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', '속도 (RTX 4060)': '~38 tok/s' },
          { '모델': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5 GB', '최소 GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', '속도 (RTX 4070)': '~38 tok/s' },
          { '모델': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', '최소 GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', '속도 (RTX 4070)': '~36 tok/s' },
          { '모델': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5 GB', '최소 GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', '속도 (RTX 4090)': '~28 tok/s' },
          { '모델': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', '최소 GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', '속도 (RTX 4090)': '~27 tok/s' },
          { '모델': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', '최소 GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', '속도 (RTX 4090)': '~24 tok/s' },
          { '모델': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', '최소 GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', '속도 (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['모델', 'VRAM', '최소 GPU', 'Apple Silicon', '속도 (RTX 3060)'],
        tableFormat: true,
        note: 'VRAM 수치는 Ollama 라이브러리의 Q4_K_M GGUF 파일 기준입니다. 4K 컨텍스트에서 KV 캐시를 위해 1–2 GB를 추가하십시오. GPU VRAM이 모델 요구량보다 부족한 경우 Ollama가 자동으로 레이어를 시스템 RAM으로 오프로드합니다 — 동작하지만 속도가 크게 저하됩니다.',
        callouts: [
          { type: 'tip', text: 'VRAM 티어를 확인하셨나요? [해당 티어에 맞는 정확한 GPU 또는 Mac 구매 가이드](#affiliate-picks)를 확인하십시오 — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB 이상 → Mac mini M4 Pro 또는 듀얼 GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ko.webp',
        imageCaption: 'Qwen 모델 크기별 VRAM 요구사항 (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama로 설정하기',
        content: [
          '**Ollama는 Qwen3 모델을 로컬에서 실행하는 가장 빠른 방법입니다** — 별도 설정 없이 모델 다운로드, GGUF 양자화 처리, `localhost:11434`의 로컬 API를 자동으로 관리합니다. [ollama.com](https://ollama.com/download)에서 설치하십시오. Ollama를 처음 사용하신다면 먼저 [Ollama 설치 방법](/local-llms/how-to-install-ollama)을 읽어보십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치', whyItMatters: 'macOS, Linux(한 줄 설치), Windows에서 사용 가능합니다. GPU 드라이버를 별도로 설정할 필요가 없습니다 — Ollama가 CUDA, ROCm, Metal을 자동으로 감지합니다.' },
          { title: '명시적 크기 태그로 모델 Pull', whyItMatters: '항상 크기를 명시하십시오: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. 태그 없는 `qwen2.5`는 7B 모델로 해석되지만 Ollama 릴리즈 간에 변경될 수 있습니다.' },
          { title: '모델 실행', whyItMatters: '`ollama run qwen2.5:7b`를 실행하면 대화형 채팅이 시작됩니다. 프롬프트를 입력하고 Enter를 누르십시오. `/bye`로 종료합니다.' },
          { title: '필요 시 컨텍스트 창 설정', whyItMatters: 'Qwen3는 Ollama에서 기본적으로 32K 컨텍스트를 지원합니다. 7B 모델에서 128K 컨텍스트를 사용하려면 `ollama run qwen2.5:7b --num-ctx 131072`를 실행하십시오. 긴 컨텍스트에는 VRAM이 추가로 2–4 GB 필요합니다.' },
          { title: 'API 엔드포인트 테스트', whyItMatters: 'Ollama는 OpenAI 호환 API를 제공합니다. PromptQuorum, Continue.dev, Open WebUI 같은 애플리케이션이 `http://localhost:11434/v1`에 직접 연결됩니다.' },
        ],
        codeBlock: `# Install Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: download the .dmg from ollama.com or:
brew install ollama

# Pull models — use explicit tags
ollama pull qwen3.6:27b          # flagship, 256K context (~17 GB)
ollama pull qwen3:8b             # Qwen3 general 8B (~5.5 GB)
ollama pull qwen2.5:7b           # Qwen2.5 general 7B (~5.5 GB)
ollama pull qwen2.5:14b          # Qwen2.5 general 14B (~9.5 GB)
ollama pull qwen2.5:32b          # Qwen2.5 general 32B (~20.5 GB)
ollama pull qwen2.5-coder:32b    # Qwen2.5-Coder 32B (~20.5 GB)
ollama pull qwen2-vl:7b          # vision 7B (~6.2 GB)

# Run interactively
ollama run qwen2.5:7b

# Test the OpenAI-compatible API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model":"qwen2.5:7b","messages":[{"role":"user","content":"Hello"}]}'`,
        codeLanguage: 'bash',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio로 설정하기',
        content: [
          '**LM Studio는 터미널 명령어 없이 Qwen3를 위한 GUI 인터페이스를 제공합니다.** [lmstudio.ai](https://lmstudio.ai)에서 다운로드하거나 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)을 참조하십시오. macOS, Windows, Linux에서 실행됩니다.',
        ],
        numberedItems: [
          { title: '모델 브라우저 열기', whyItMatters: '"Qwen3" 또는 "Qwen Coder"를 검색하여 사용 가능한 모든 GGUF 빌드를 탐색하십시오. 권장 품질/크기 비율을 위해 Q4_K_M으로 필터링하십시오.' },
          { title: 'GGUF 빌드 다운로드', whyItMatters: 'Q4_K_M 변형을 선택하십시오. LM Studio는 다운로드 전에 파일 크기를 표시합니다 — 보유한 VRAM과 일치하는지 확인하십시오.' },
          { title: '모델 로드 후 채팅 시작', whyItMatters: '왼쪽 사이드바에서 모델을 클릭하여 메모리에 로드하십시오. GPU 레이어 할당은 감지된 VRAM을 기준으로 자동으로 처리됩니다.' },
          { title: '로컬 서버 시작', whyItMatters: '"Start Server"를 클릭하면 `localhost:1234`에 OpenAI 호환 엔드포인트가 열립니다. 앱과 스크립트가 OpenAI API처럼 연결됩니다.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: '양자화: 어떤 형식을 선택할까',
        content: [
          '**Q4_K_M이 소비자 하드웨어에서 Qwen3를 위한 올바른 기본값입니다.** MMLU와 HumanEval에서 1% 미만의 벤치마크 저하로 FP16 대비 VRAM을 약 55–60% 줄입니다. 다른 형식에는 특정 사용 사례가 있습니다:',
        ],
        items: [
          '**Q4_K_M** (권장): 7B 기준 약 5.5 GB. 최고의 GB당 품질 비율. 이것을 먼저 사용하십시오.',
          '**Q8_0**: 7B 기준 약 8.5 GB. FP16에 가까운 품질. 여유 VRAM이 있고 최대 정확도를 원할 때 사용하십시오.',
          '**Q5_K_M**: 7B 기준 약 6.5 GB. Q4_K_M 대비 미미한 개선 — Q4_K_M 출력 품질이 특정 작업에서 눈에 띄게 저하될 때만 선택하십시오.',
          '**Q2_K**: 7B 기준 약 3 GB. 가장 작은 파일이지만 중국어 출력 품질이 눈에 띄게 저하됩니다 — 중국어 텍스트가 포함된 경우 Qwen3에서 피하십시오.',
          '**IQ4_XS**: 7B 기준 약 4.8 GB. 최신 imatrix 양자화로 Q4_K_M보다 약간 작은 크기에서 더 높은 품질을 제공합니다 — 최신 llama.cpp 릴리즈 및 LM Studio 0.3+에서 사용 가능합니다.',
        ],
        note: '전체 양자화 설명은 [LLM 양자화 설명](/local-llms/llm-quantization-explained)을 참조하십시오.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M은 대부분의 사용자에게 최고의 Qwen3 양자화입니다: FP16 대비 VRAM을 55% 절감하면서 품질 손실이 1% 미만입니다.' },
          { type: 'plain-terms', text: '양자화는 모델 수치를 16비트에서 4비트로 압축하여 파일 크기와 필요한 VRAM을 대략 절반으로 줄입니다. TIFF 이미지를 고품질 JPEG로 저장하는 것과 같습니다 — 파일이 작아지지만 대부분의 용도에서 결과는 거의 동일합니다.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '소비자 하드웨어에서의 벤치마크 성능',
        content: [
          '**RTX 4090에서 Qwen3 32B Q4_K_M은 초당 28 토큰을 처리합니다 — 실시간 코딩 지원에 충분한 속도입니다.** 아래 점수는 Ollama에서 테스트된 Q4_K_M GGUF 빌드 기준입니다. 전체 정밀도 FP16 점수는 1–2% 높습니다.',
        ],
        rows: [
          { '모델 (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '속도 (RTX 3060 12 GB)': '57 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '속도 (RTX 4070 12 GB)': '38 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '속도 (RTX 4090 24 GB)': '28 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '속도 (2×RTX 3090)': '12 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen3-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', '속도 (RTX 3060 12 GB)': '55 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen3-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', '속도 (RTX 4070 12 GB)': '36 tok/s' },
          { '모델 (Q4_K_M)': 'Qwen3-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '속도 (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['모델 (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', '속도 (RTX 3060 12 GB)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '초당 27 토큰으로 HumanEval 92.7% 점수를 원하십니까? [Qwen3-Coder 32B를 실행하는 24 GB GPU](#affiliate-picks)를 확인하십시오.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ko.webp',
        imageCaption: 'Qwen3 벤치마크 점수 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: 로컬 실행 시 어떤 것을 선택할까',
        content: [
          '**Qwen3는 중국어 작업과 VRAM 효율성에서 우수합니다. DeepSeek-V2.5는 대규모 추론에서 우수하지만 소비자 하드웨어에서는 비실용적입니다. Llama 3.3 70B는 Meta의 오픈 모델을 선호한다면 단일 GPU에 가장 적합한 옵션입니다.** 아래 표는 각 VRAM 티어에서의 실용적인 옵션을 비교합니다.',
        ],
        rows: [
          { 'VRAM 티어': '6 GB', '최고 Qwen': 'Qwen3 8B', '최고 경쟁자': 'Llama 3.2 3B (맞지만 3B)', '결론': 'Qwen3 8B 우위 — 같은 VRAM, 훨씬 큰 모델' },
          { 'VRAM 티어': '12 GB', '최고 Qwen': 'Qwen3-Coder 14B', '최고 경쟁자': 'Llama 3.3 8B Instruct', '결론': '코딩은 Qwen3-Coder 14B; 일반 채팅은 Llama 3.3 8B' },
          { 'VRAM 티어': '24 GB', '최고 Qwen': 'Qwen3-Coder 32B', '최고 경쟁자': 'Llama 3.3 70B (오프로드)', '결론': '코드는 Qwen3-Coder 32B; 품질 > 속도면 Llama 3.3 70B' },
          { 'VRAM 티어': '48 GB+', '최고 Qwen': 'Qwen2.5-72B', '최고 경쟁자': 'DeepSeek-V2.5 236B MoE', '결론': 'DeepSeek는 ~130 GB RAM 필요; Qwen2.5-72B가 48 GB에서 실용적 선택' },
        ],
        columns: ['VRAM 티어', '최고 Qwen', '최고 경쟁자', '결론'],
        tableFormat: true,
        content2: '코딩, 추론, 다국어 작업에서 DeepSeek와 Qwen의 심층 비교는 [DeepSeek vs Qwen 로컬 비교 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026)을 참조하십시오.',
      },
      regionalContext: {
        id: 'regional-context',
        title: '중국 사용자: 데이터 주권과 로컬 배포',
        content: [
          '**Qwen3를 로컬에서 실행하면 데이터가 외부 기기로 전혀 전송되지 않습니다 — 중국의 데이터 보안법(DSL) 또는 사이버보안법에 따른 컴플라이언스 위험이 없습니다.** 클라우드 기반 LLM API는 프롬프트를 해외 서버로 전송해야 하며, 이는 DSL 제31조에 따른 국경 간 데이터 전송 위험을 초래합니다.',
          'Qwen3는 Alibaba의 Qwen 팀이 주로 중국어 및 다국어 코퍼스로 학습시킨 모델입니다. 이로 인해 간체 중국어, 번체 중국어, 고전 중국어, 혼합 언어(중국어/영어) 문서에서 로컬로 배포 가능한 가장 강력한 모델이 됩니다.',
          '**중국 내 엔터프라이즈 배포의 경우**: 에어갭(인터넷 차단) Qwen3 설정은 생성형 AI에 관한 CAC 규정을 완전히 준수합니다. 모델은 전적으로 로컬 컴퓨팅에서 실행됩니다 — 규제 기관의 관심사는 학습 데이터와 출력 모더레이션이지, 오프라인 하드웨어에서의 추론이 아닙니다. 완전한 에어갭 설정 가이드는 [완전 오프라인 AI 실행](/power-local-llm/local-ai-behind-firewall-offline-2026)을 참조하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3는 다운로드 후 완전히 오프라인으로 실행됩니다 — 데이터가 기기를 떠나지 않아 중국의 데이터 보안법에 따른 국경 간 데이터 전송 위험을 없앱니다.' },
          { type: 'plain-terms', text: 'Qwen3를 로컬에서 실행하면 프롬프트와 문서가 절대 컴퓨터 밖으로 나가지 않습니다. 클라우드 API 호출, 해외 서버, 규제 기관이 가로채거나 감사할 수 있는 데이터가 없습니다.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qwen3 배포를 위해 어떤 하드웨어를 구매해야 합니까?',
        content: [
          '**먼저 목표로 하는 Qwen 티어를 VRAM에 맞추고, 그 기준을 충족하는 가장 저렴한 카드를 구매하십시오 — 모델에 필요한 것보다 많은 VRAM에 비용을 지불하는 것이 이 목록에서 가장 흔한 과소비입니다.** 아래 추천 목록은 위 하드웨어 표와 그대로 대응됩니다: 보급형 → RTX 4060, 중급 → RTX 4070 Super, 고급 → RTX 3090/4090, Apple Silicon → Mac mini M4 Pro, 상시 가동용 → 미니 PC. 아래 가격은 2026년 GPU 시장 상황을 반영합니다 — 메모리 칩 부족과 AI 데이터센터 수요로 신품 GPU와 Apple 메모리 가격이 모두 크게 상승했으므로, 구매 전 실제 판매 가격을 확인하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '이미 8 GB 이상 VRAM의 GPU를 보유하고 계신다면 이 섹션을 건너뛰십시오 — 먼저 보유한 하드웨어에서 Qwen3 8B를 실행해 보십시오. 그 한계에 도달하고 더 큰 모델을 원할 때만 새 하드웨어를 구매하십시오.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: '보급형 선택 — Qwen3 8B, Qwen3-Coder 7B (5.5 GB VRAM)',
            verdict: '5.5 GB의 Qwen3 8B 요구사항을 컨텍스트 여유 공간까지 확보하면서 충족하는 이 목록에서 가장 저렴한 카드입니다. Qwen3-Coder 7B를 초당 약 55 토큰으로 실행합니다 — 인터랙티브 코딩 지원에 충분한 속도입니다.',
            pros: [
              '5.5 GB VRAM 요구사항을 긴 컨텍스트 KV 캐시를 위한 여유 공간까지 확보하며 충족',
              '이 목록에서 가장 저렴한 가격 — 로컬 LLM을 처음 실행한다면 적합한 첫 GPU',
              '7B/8B 모델에서 초당 50–57 토큰 — 이 모델 크기에서는 더 비싼 카드와 대등한 수준',
            ],
            cons: [
              'Qwen3 8B / Qwen3-Coder 7B에서 상한선 — KV 캐시 압박 없이 14B로 확장할 여유가 없음',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: '현재 가격 확인 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: '중급 선택 — Qwen3 14B, Qwen3-Coder 14B (9.5 GB VRAM)',
            verdict: 'Qwen3-Coder 14B(HumanEval 85.2%)를 초당 36–38 토큰으로 실행하며 컨텍스트를 위한 2–3 GB의 VRAM 여유가 남습니다 — 7B/8B 모델 대비 코딩 품질이 눈에 띄게 도약하는 티어입니다.',
            pros: [
              '9.5 GB 모델이 2–3 GB의 VRAM 여유와 함께 실행 — 더 긴 컨텍스트 창을 위한 공간',
              'HumanEval이 75.6%(7B)에서 85.2%(14B)로 상승 — 라인업에서 가격 대비 품질이 가장 명확하게 도약하는 구간',
              '초당 약 38 토큰으로 인터랙티브 채팅과 코드 자동완성이 원활하게 유지',
            ],
            cons: [
              '32B 티어를 위한 VRAM은 부족 — 14B를 넘어서려면 매각 또는 재활용을 고려해야 함',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '$650–735', label: '현재 가격 확인 →' },
            ],
          },
          {
            rank: 3,
            name: 'NVIDIA RTX 4090 24 GB (또는 중고 RTX 3090 24 GB)',
            tagline: '고급 선택 — Qwen3-Coder 32B, Qwen 3.6 27B (~17–20.5 GB VRAM)',
            verdict: '4090은 Qwen3-Coder 32B에서 초당 27–28 토큰을 제공합니다 — HumanEval 92.7%의 실시간 코딩 속도입니다. 중고 RTX 3090은 동일한 24 GB VRAM을 갖추고 있으며, 신뢰할 수 있는 중고 매물을 찾을 수 있다면 4090 추론 속도의 약 85% 수준으로 훨씬 저렴하게 구매할 수 있습니다.',
            pros: [
              '24 GB VRAM으로 모든 Qwen3 32B 변형과 Qwen 3.6 27B를 여유 있게 커버',
              'Qwen3-Coder 32B(HumanEval 92.7%)에서 초당 27–28 토큰 — 실시간 페어 프로그래밍에 충분한 속도',
              '중고 RTX 3090은 가성비 대안: VRAM 한계는 동일, 속도는 약 15% 느리지만 중고가는 훨씬 저렴',
            ],
            cons: [
              '이 목록에서 가장 높은 초기 비용 — 실제로 32B급 품질이 필요할 때만 정당화됨',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '$2,300–2,800', label: '현재 가격 확인 →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (중고)', productCategory: 'GPU', priceRange: '$1,050–1,300', label: '중고 매물 보기 →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M4 Pro 48 GB',
            tagline: 'Apple Silicon 선택 — Qwen3 32B (~초당 22 토큰, 저소음·저전력)',
            verdict: '통합 메모리에서 Qwen3 32B를 실행하는 데 가성비가 가장 좋은 선택입니다 — 조용하고 전력 소비가 낮으며 별도 GPU를 설치할 필요가 없습니다. Qwen2.5-72B의 경우 대신 M2 Ultra 192 GB가 필요합니다.',
            pros: [
              '48 GB 통합 메모리로 Qwen3 32B의 20.5 GB 요구사항을 다른 앱을 위한 여유와 함께 충족',
              '무소음 작동과 데스크톱에 적합한 전력 소비 — 별도의 GPU 쿨링 관리 불필요',
              '한 번의 구매로 OS, 스토리지, 추론을 모두 해결 — 별도의 GPU/PSU/케이스 조립 불필요',
            ],
            cons: [
              'Qwen3 32B에서 초당 약 22 토큰은 RTX 4090의 초당 27–28 토큰보다 눈에 띄게 느림',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CQSL8N8F', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '약 $1,799–1,999', label: '현재 가격 확인 →' },
            ],
          },
          {
            rank: 5,
            name: 'MINISFORUM UM890 Pro (또는 유사한 AMD Ryzen AI 미니 PC)',
            tagline: '상시 가동 선택 — CPU + iGPU에서 Qwen3 8B (~초당 8–12 토큰, 35W 미만)',
            verdict: '인터랙티브 용도에는 적합하지 않습니다 — 백그라운드 작업, 홈 자동화, 또는 속도보다 전력 비용이 중요한 저트래픽 API 엔드포인트를 위해 24시간 365일 가동하는 Qwen3 8B 인스턴스에 적합합니다.',
            pros: [
              '35W 미만의 전력 소비 — 데스크톱 GPU 구성과 달리 계속 가동해도 저렴',
              '작은 폼팩터로 어디에나 설치 가능; 별도의 GPU를 구하거나 냉각할 필요 없음',
              '별도의 디스크리트 GPU 없이도 Qwen3 8B를 처리',
            ],
            cons: [
              '초당 8–12 토큰은 인터랙티브 채팅에는 너무 느림 — 백그라운드/API 전용 선택',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/s?k=minisforum+um890+pro', productName: 'MINISFORUM UM890 Pro', productCategory: 'mini-pc', priceRange: '$479–649', label: '현재 가격 확인 →' },
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Qwen3 로컬 실행 시 흔한 실수',
        items: [
          '**태그 없는 `ollama pull qwen2.5` 명령어 사용.** 명시적 크기 태그(`:7b`, `:14b` 등) 없이는 Ollama가 라이브러리 업데이트 사이에 변경될 수 있는 기본 크기로 해석할 수 있습니다. 항상 명시적 태그를 사용하십시오: `ollama pull qwen2.5:14b`.',
          '**컨텍스트 창 크기 무시.** Qwen3는 128K 컨텍스트를 지원합니다. Ollama의 Modelfile 사양은 `num_ctx` 기본값을 2048로 지정하지만, 실제 런타임은 VRAM 용량에 따라 단계별 기본값을 적용합니다(24 GiB 미만은 4K, 24~48 GiB는 32K, 48 GiB 초과는 256K). 두 기본값 중 어느 것에도 의존하지 말고 `num_ctx`를 명시적으로 설정하십시오. 예를 들어 실행 명령어에 `--num-ctx 8192`(또는 더 높은 값)를 추가합니다 — 그렇지 않으면 모델이 자동으로 입력을 잘라냅니다.',
          '**중국어 용도에 Q2_K 양자화 선택.** 2비트 정밀도에서 Qwen3의 중국어 출력이 눈에 띄게 저하됩니다 — 문자 대체가 증가합니다. 중국어 작업에는 Q4_K_M을 최소값으로 사용하십시오.',
          '**VRAM이 부족한 상태에서 32B 모델 실행.** GPU에 16 GB가 있고 모델에 20.5 GB가 필요한 경우 Ollama가 레이어를 시스템 RAM으로 오프로드합니다. 모델은 실행되지만 초당 3–5 토큰으로 — 대화형 사용에는 적합하지 않습니다. 위의 하드웨어 표를 확인하고 VRAM에 맞는 모델을 선택하십시오.',
          '**코딩에 잘못된 하위 패밀리 사용.** Qwen3 8B(범용)는 HumanEval에서 57.3%를 기록합니다. Qwen3-Coder 7B는 같은 벤치마크에서 75.6%를 기록합니다 — 상대적으로 32% 향상입니다. 코딩이 목적이라면 항상 같은 크기의 Coder 변형을 사용하십시오.',
        ],
      },
      nextSteps: {
        id: 'next-steps',
        title: '다음 단계',
        items: [
          '[CPU 전용 최고 LLM](/ko/local-llms/best-cpu-only-llm) — GPU 없나요? CPU만으로 실행 가능한 Qwen3 크기 →',
          '[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) — Q4_K_M과 Q8이 헷갈리세요? 양자화 설명 →',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Qwen3 8B를 로컬에서 실행하려면 VRAM이 얼마나 필요합니까?', a: 'Qwen3 8B Q4_K_M는 5.5 GB의 VRAM이 필요합니다. RTX 3060 6 GB, RTX 4060, 또는 통합 메모리 8 GB의 Apple M 시리즈 칩에서 모두 실행됩니다. VRAM이 8 GB이면 컨텍스트 및 시스템 RAM을 위한 여유 공간이 생깁니다.' },
          { q: '로컬에서 코딩에 가장 적합한 Qwen 모델은 무엇입니까?', a: 'Qwen3-Coder 32B는 로컬에서 실행 가능한 최고의 코딩 모델입니다 — HumanEval에서 92.7%를 기록하며 24 GB GPU(RTX 3090 또는 RTX 4090)가 필요합니다. VRAM이 12 GB 이하인 경우 Qwen3-Coder 14B(HumanEval 85.2%, 9.5 GB VRAM)를 사용하십시오.' },
          { q: '로컬 배포에서 Qwen은 DeepSeek와 어떻게 비교됩니까?', a: 'Qwen2.5-72B와 DeepSeek-V2.5는 일반 작업에서 경쟁력이 있지만, Qwen은 소비자 하드웨어에 맞는 밀집 아키텍처를 사용합니다. DeepSeek-V2.5는 236B MoE 모델로 Q4에서 약 130 GB RAM이 필요하며 서버급 하드웨어 없이는 도달하기 어렵습니다. VRAM이 48 GB 미만인 경우 Qwen3가 실용적인 선택입니다.' },
          { q: 'Mac에서 Qwen을 실행할 수 있습니까?', a: '가능합니다. Apple Silicon은 통합 메모리를 사용합니다 — M2 Pro 32 GB는 Qwen3 14B를 초당 약 32 토큰으로 실행합니다. M3 Max 64 GB는 Qwen3 32B를 초당 약 22 토큰으로 처리합니다. 가장 간단한 설정을 위해 Ollama macOS 앱 또는 LM Studio를 사용하십시오.' },
          { q: 'Qwen에 사용할 Ollama 명령어는 무엇입니까?', a: '플래그십 모델은 `ollama run qwen3.6:27b`(약 17GB VRAM)를 사용하십시오. Qwen3는 `ollama pull qwen3:8b`를 사용하십시오. Qwen2.5는 7B는 `ollama pull qwen2.5:7b`, 14B는 `ollama pull qwen2.5:14b`, 32B는 `ollama pull qwen2.5:32b`, 코딩 변형은 `ollama pull qwen2.5-coder:32b`를 사용하십시오. 항상 명시적 크기 태그를 사용하십시오.' },
          { q: 'Qwen은 중국어 작업에 적합합니까?', a: 'Qwen3는 대규모 중국어 코퍼스로 사전 학습되었으며 간체 중국어, 번체 중국어, 일본어, 한국어, 아랍어 및 24개 언어를 기본 지원합니다. 중국어 읽기 이해 및 생성에서 Llama 3.3과 Mistral을 지속적으로 능가합니다.' },
          { q: 'Qwen3에 어떤 양자화를 사용해야 합니까?', a: 'Q4_K_M이 권장 기본값입니다 — FP16 대비 VRAM을 약 55% 줄이면서 벤치마크 품질 손실이 1% 미만입니다. 여유 VRAM이 있고 FP16에 가까운 품질을 원한다면 Q8_0을 사용하십시오. 중국어 용도에는 Q2_K를 피하십시오.' },
          { q: 'Qwen2-VL이 중국어 문서 OCR에 효과적입니까?', a: '그렇습니다 — Qwen2-VL 7B는 CJK 문서 OCR에서 가장 강력한 로컬 비전 모델입니다. `ollama pull qwen2-vl:7b`를 통해 약 6 GB VRAM으로 실행되며 4096×4096 해상도에서 중국어, 일본어, 한국어 텍스트를 읽습니다. 전체 가이드는 /local-llms/run-qwen-vl-locally-2026에서 확인하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        links: [
          { url: '/local-llms/run-qwen-locally-guide-2026', title: '2026년 Qwen 3를 로컬에서 실행하는 방법', description: 'Ollama와 LM Studio를 사용한 Qwen 3.6 27B 단일 모델 설정 가이드 — 작동하는 Qwen 인스턴스를 가장 빠르게 구축하는 방법.' },
          { url: '/local-llms/run-qwen-vl-locally-2026', title: '2026년 Qwen2-VL 로컬 실행', description: 'Qwen2-VL 전체 가이드 — 소비자 하드웨어에서의 CJK 문서 OCR, 이미지 Q&A, 다국어 스크린샷 읽기.' },
          { url: '/local-llms/qwen-vs-llama-vs-mistral', title: '2026년 Qwen vs Llama vs Mistral', description: 'MMLU, SWE-bench, MATH에서 Qwen 3.6 27B, Llama 4 Scout, Mistral Small 3.1의 헤드투헤드 벤치마크 비교.' },
          { url: '/local-llms/llm-quantization-explained', title: 'LLM 양자화 설명', description: 'Q4_K_M, Q8_0, IQ4_XS의 의미 — VRAM, 속도, 출력 품질에 미치는 영향.' },
          { url: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: '2026년 DeepSeek vs Qwen 로컬 비교', description: '코딩, 추론, 중국어, 창의적 글쓰기에서 DeepSeek-V2.5 vs Qwen3 전체 비교 — Mac vs NVIDIA 세부 분석 포함.' },
        ],
      },
    },
  },
};
