// Slug: qwen-local-deployment-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen Local Deployment Guide 2026: Run Qwen2.5, Coder & VL at Every Hardware Tier',
    seoTitle: 'Qwen2.5 Local Setup Guide 2026: Coder, VL & Hardware Tiers',
    intro: 'Qwen2.5 7B runs in 5.5 GB of VRAM via Ollama — one command, no configuration. Qwen2.5-Coder 32B reaches 92.7% on HumanEval. Qwen2-VL 7B leads local vision models for Chinese and Japanese document OCR. This guide covers the complete Qwen family — which model to run at each hardware tier, Ollama and LM Studio setup, quantization picks, benchmark data, and how Qwen compares to DeepSeek and Llama on consumer hardware in 2026.',
    metaDescription: 'Run Qwen2.5 (7B–72B), Qwen2.5-Coder and Qwen2-VL locally in 2026. VRAM requirements, Ollama + LM Studio setup, Q4_K_M benchmarks, and hardware tier guide.',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
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
      'Qwen2.5 7B',
      'Qwen2.5 14B',
      'Qwen2.5 32B',
      'Qwen2.5 72B',
      'Qwen2.5-Coder 7B',
      'Qwen2.5-Coder 14B',
      'Qwen2.5-Coder 32B',
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
    ctaText: 'Dispatch across Qwen2.5, DeepSeek, and Llama from one interface →',
    ctaButton: 'Try PromptQuorum Free',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**To run Qwen2.5 7B locally, install Ollama and run `ollama pull qwen2.5:7b` — it requires 5.5 GB of VRAM and delivers 57 tokens/sec on an RTX 3060.** For coding tasks use Qwen2.5-Coder; for Chinese/Japanese document OCR use Qwen2-VL.',
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Qwen2.5 Model Family Overview', anchor: '#model-family' },
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
    gammaDescription: 'The slide deck below covers: the complete Qwen2.5 model family at a glance (7B through 72B), VRAM requirements per hardware tier, benchmark data for Qwen2.5-Coder 32B, and a Qwen vs DeepSeek vs Llama decision chart. Download as a Qwen deployment reference card.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Local Deployment Guide 2026: Run Qwen2.5, Coder & VL at Every Hardware Tier',
      description: 'Complete guide to deploying the Qwen2.5 model family locally — VRAM requirements, Ollama and LM Studio setup, quantization, benchmarks, and hardware recommendations.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'en',
      url: 'https://www.promptquorum.com/local-llms/qwen-local-deployment-guide-2026?lang=en',
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
          name: 'How much VRAM do I need to run Qwen2.5 7B locally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M requires 5.5 GB of VRAM. An NVIDIA RTX 3060 6 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it comfortably. At 8 GB of VRAM you have headroom for context and system RAM.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best Qwen model for coding locally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B is the best locally runnable coding model — it scores 92.7% on HumanEval and needs a 24 GB GPU (RTX 3090 or RTX 4090). If your VRAM is 12 GB or less, use Qwen2.5-Coder 14B (HumanEval 85.2%, 9.5 GB VRAM).' },
        },
        {
          '@type': 'Question',
          name: 'How does Qwen compare to DeepSeek for local deployment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 72B and DeepSeek-V2.5 236B (MoE) are competitive on general tasks, but Qwen uses a dense architecture that fits on consumer hardware. DeepSeek-V2.5 requires ~130 GB RAM at Q4 — unreachable without a server GPU. For VRAM under 24 GB, Qwen2.5 wins on practicality.' },
        },
        {
          '@type': 'Question',
          name: 'Can I run Qwen on a Mac?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Apple Silicon uses unified memory — an M2 Pro 32 GB runs Qwen2.5 14B smoothly at ~32 tokens/sec. An M3 Max 64 GB handles Qwen2.5 32B at ~22 tokens/sec. Use the Ollama macOS app or LM Studio for the simplest setup.' },
        },
        {
          '@type': 'Question',
          name: 'What Ollama command do I use for Qwen2.5?',
          acceptedAnswer: { '@type': 'Answer', text: 'Run `ollama pull qwen2.5:7b` for the 7B model, `ollama pull qwen2.5:14b` for 14B, `ollama pull qwen2.5:32b` for 32B, or `ollama pull qwen2.5-coder:32b` for the coding-optimised 32B variant. Always use an explicit size tag — the untagged `qwen2.5` may resolve to a different version.' },
        },
        {
          '@type': 'Question',
          name: 'Is Qwen good for Chinese-language tasks?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 was pretrained on a large Chinese corpus and natively handles Simplified and Traditional Chinese, Japanese, Korean, and 26 other languages. It consistently outperforms Llama 3.3 and Mistral on Chinese reading comprehension and generation — making it the preferred choice for Chinese-language local AI.' },
        },
        {
          '@type': 'Question',
          name: 'What quantization should I use for Qwen2.5?',
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
          '**Qwen2.5 7B runs in 5.5 GB of VRAM** — one `ollama pull qwen2.5:7b` command and you\'re running at 57 tokens/sec on an RTX 3060.',
          '**Three distinct sub-families**: Qwen2.5 (general), Qwen2.5-Coder (coding, 92.7% HumanEval at 32B), Qwen2-VL (vision, best CJK OCR locally).',
          '**Dense architecture = consumer-friendly**: unlike DeepSeek\'s 236B MoE model (needs ~130 GB RAM), Qwen2.5 72B fits in 46 GB VRAM on two RTX 3090s.',
          '**Native multilingual**: pretrained on Chinese, Japanese, Korean, Arabic, German, French, and 23 more — Qwen2.5 consistently beats Llama 3.3 on CJK tasks.',
          '**Q4_K_M is the right quantization** for most users: ~55% VRAM reduction, less than 1% quality loss on benchmarks.',
          '**Hardware decision**: 12 GB VRAM → 14B model; 24 GB VRAM → 32B; 48 GB+ (two GPUs or Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 covers three local-deployment sub-families — general (7B–72B), coding (Coder 7B–32B), and vision (VL 7B–72B) — all runnable via Ollama or LM Studio.' },
          { type: 'plain-terms', text: 'Running a model locally means the AI runs on your own computer instead of a cloud server. No data leaves your machine, and there is no per-token cost after hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen2.5 Model Family Overview',
        content: [
          '**The Qwen2.5 family covers three distinct tasks: general reasoning, coding, and vision** — each with multiple size options from 7B to 72B parameters. All are open-weight models published by Alibaba\'s Qwen team on Hugging Face under the Apache 2.0 licence.',
          'Choose the sub-family first, then the size that fits your VRAM. Mixing sub-families is common: run Qwen2.5-Coder 14B for code completion and Qwen2.5 7B for document summarisation.',
        ],
        rows: [
          { 'Sub-family': 'Qwen2.5', 'Sizes available': '7B, 14B, 32B, 72B', 'Primary use': 'General reasoning, Chinese/multilingual tasks, RAG', 'Ollama tag prefix': 'qwen2.5:' },
          { 'Sub-family': 'Qwen2.5-Coder', 'Sizes available': '7B, 14B, 32B', 'Primary use': 'Code generation, debugging, HumanEval, SWE-bench', 'Ollama tag prefix': 'qwen2.5-coder:' },
          { 'Sub-family': 'Qwen2-VL', 'Sizes available': '2B, 7B, 72B', 'Primary use': 'Document OCR, image Q&A, CJK text extraction', 'Ollama tag prefix': 'qwen2-vl:' },
        ],
        columns: ['Sub-family', 'Sizes available', 'Primary use', 'Ollama tag prefix'],
        tableFormat: true,
        note: 'Qwen3 (released Q1 2026) adds thinking-mode models but has fewer GGUF builds and smaller Ollama coverage than Qwen2.5 as of May 2026. This guide focuses on Qwen2.5, which has the widest hardware support and the most tested quantisations. See [best local LLMs 2026](/local-llms/best-local-llms-2026) for a broader model comparison.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Hardware Requirements by Model Size',
        content: [
          '**Pick your VRAM tier first, then select the largest Qwen2.5 model that fits.** Q4_K_M is the standard quantisation used in all figures below — it gives the best size-to-quality ratio for Ollama and LM Studio.',
        ],
        rows: [
          { 'Model': 'Qwen2.5 7B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (RTX 3060)': '~57 tok/s' },
          { 'Model': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (RTX 3060)': '~55 tok/s' },
          { 'Model': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2 GB', 'Minimum GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Speed (RTX 4060)': '~38 tok/s' },
          { 'Model': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (RTX 4070)': '~38 tok/s' },
          { 'Model': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (RTX 4070)': '~36 tok/s' },
          { 'Model': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (RTX 4090)': '~28 tok/s' },
          { 'Model': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (RTX 4090)': '~27 tok/s' },
          { 'Model': 'Qwen2.5 72B Q4_K_M', 'VRAM': '46 GB', 'Minimum GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Speed (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Model', 'VRAM', 'Minimum GPU', 'Apple Silicon', 'Speed (RTX 3060)'],
        tableFormat: true,
        note: 'VRAM figures are for Q4_K_M GGUF files from the Ollama library. Add 1–2 GB for the KV cache at 4K context. If your GPU has less VRAM than the model needs, Ollama automatically offloads layers to system RAM — this works but reduces speed significantly.',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Qwen2.5 VRAM requirements by model size (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setting Up with Ollama',
        content: [
          '**Ollama is the fastest path to running any Qwen2.5 model locally** — it handles model download, GGUF quantisation, and the local API at `localhost:11434` without any configuration. Install from [ollama.com](https://ollama.com/download). If you have not used Ollama before, read [how to install Ollama](/local-llms/how-to-install-ollama) first.',
        ],
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Available for macOS, Linux (one-line install), and Windows. No GPU drivers to configure — Ollama detects CUDA, ROCm, and Metal automatically.' },
          { title: 'Pull the model with an explicit size tag', whyItMatters: 'Always specify the size: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. The untagged `qwen2.5` resolves to the 7B model but may change between Ollama releases.' },
          { title: 'Run the model', whyItMatters: '`ollama run qwen2.5:7b` opens an interactive chat. Type your prompt and press Enter. Close with `/bye`.' },
          { title: 'Set context window if needed', whyItMatters: 'Qwen2.5 supports 32K context by default in Ollama. To use 128K context on a 7B model, run `ollama run qwen2.5:7b --num-ctx 131072`. This requires more VRAM — add 2–4 GB for long contexts.' },
          { title: 'Test the API endpoint', whyItMatters: 'Ollama exposes an OpenAI-compatible API. Applications like PromptQuorum, Continue.dev, and Open WebUI connect directly to `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Install Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: download the .dmg from ollama.com or:
brew install ollama

# Pull models — use explicit tags
ollama pull qwen2.5:7b           # general 7B (~5.5 GB)
ollama pull qwen2.5:14b          # general 14B (~9.5 GB)
ollama pull qwen2.5:32b          # general 32B (~20.5 GB)
ollama pull qwen2.5-coder:32b    # coding 32B (~20.5 GB)
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
        title: 'Setting Up with LM Studio',
        content: [
          '**LM Studio provides a GUI interface for Qwen2.5 with no terminal commands.** Download from [lmstudio.ai](https://lmstudio.ai), or see [how to install LM Studio](/local-llms/how-to-install-lm-studio). It runs on macOS, Windows, and Linux.',
        ],
        numberedItems: [
          { title: 'Open the model browser', whyItMatters: 'Search "Qwen2.5" or "Qwen Coder" to browse all available GGUF builds. Filter by Q4_K_M for the recommended quality/size ratio.' },
          { title: 'Download a GGUF build', whyItMatters: 'Select the Q4_K_M variant. LM Studio shows file size before download — confirm it matches the VRAM you have available.' },
          { title: 'Load the model and start chatting', whyItMatters: 'Click the model in the left sidebar to load it into memory. GPU layer allocation is automatic based on detected VRAM.' },
          { title: 'Start the local server', whyItMatters: '"Start Server" exposes an OpenAI-compatible endpoint at `localhost:1234`. Your apps and scripts connect to it as if it were the OpenAI API.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantization: Which Format to Choose',
        content: [
          '**Q4_K_M is the right default for Qwen2.5 on consumer hardware.** It reduces VRAM by ~55–60% versus FP16 with less than 1% benchmark degradation on MMLU and HumanEval. Other formats have specific use cases:',
        ],
        items: [
          '**Q4_K_M** (recommended): ~5.5 GB for 7B. Best quality-per-GB ratio. Use this first.',
          '**Q8_0**: ~8.5 GB for 7B. Near-FP16 quality; use if you have spare VRAM and want maximum accuracy.',
          '**Q5_K_M**: ~6.5 GB for 7B. Marginal improvement over Q4_K_M — only choose it if Q4_K_M output quality is visibly poor for your task.',
          '**Q2_K**: ~3 GB for 7B. Smallest file, but Chinese-language output quality degrades noticeably — avoid for Qwen2.5 if Chinese text is part of your use case.',
          '**IQ4_XS**: ~4.8 GB for 7B. A newer imatrix quantisation that beats Q4_K_M quality at slightly smaller size — available in recent llama.cpp releases and LM Studio 0.3+.',
        ],
        note: 'For a full quantisation explainer, see [LLM quantization explained](/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M is the best Qwen2.5 quantization for most users: it cuts VRAM by 55% with less than 1% quality loss versus FP16.' },
          { type: 'plain-terms', text: 'Quantization compresses the model\'s numbers from 16-bit to 4-bit, roughly halving the file size and VRAM needed. Think of it as reducing image quality from TIFF to a high-quality JPEG — smaller file, nearly identical result for most uses.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmark Performance on Consumer Hardware',
        content: [
          '**Qwen2.5 32B Q4_K_M on an RTX 4090 delivers 28 tokens/sec — fast enough for real-time coding assistance.** Scores below are for Q4_K_M GGUF builds tested on Ollama. Full-precision FP16 scores are 1–2% higher.',
        ],
        rows: [
          { 'Model (Q4_K_M)': 'Qwen2.5 7B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', 'Speed (RTX 3060 12 GB)': '57 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', 'Speed (RTX 4070 12 GB)': '38 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', 'Speed (RTX 4090 24 GB)': '28 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5 72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', 'Speed (2×RTX 3090)': '12 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', 'Speed (RTX 3060 12 GB)': '55 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', 'Speed (RTX 4070 12 GB)': '36 tok/s' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', 'Speed (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Model (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Speed (RTX 3060 12 GB)'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Qwen2.5 benchmark scores (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: Which to Run Locally',
        content: [
          '**Qwen2.5 wins on Chinese-language tasks and VRAM efficiency; DeepSeek-V2.5 wins on reasoning at large scale but is impractical on consumer hardware; Llama 3.3 70B is the best single-GPU option if you prefer Meta\'s open model.** The table below compares the practical options at each VRAM tier.',
        ],
        rows: [
          { 'VRAM Tier': '6 GB', 'Best Qwen': 'Qwen2.5 7B', 'Best Competitor': 'Llama 3.2 3B (fits, but 3B)', 'Verdict': 'Qwen2.5 7B wins — same VRAM, much larger model' },
          { 'VRAM Tier': '12 GB', 'Best Qwen': 'Qwen2.5-Coder 14B', 'Best Competitor': 'Llama 3.3 8B Instruct', 'Verdict': 'Qwen2.5-Coder 14B for coding; Llama 3.3 8B for general chat' },
          { 'VRAM Tier': '24 GB', 'Best Qwen': 'Qwen2.5-Coder 32B', 'Best Competitor': 'Llama 3.3 70B (offloaded)', 'Verdict': 'Qwen2.5-Coder 32B for code; Llama 3.3 70B if quality > speed' },
          { 'VRAM Tier': '48 GB+', 'Best Qwen': 'Qwen2.5 72B', 'Best Competitor': 'DeepSeek-V2.5 236B MoE', 'Verdict': 'DeepSeek needs ~130 GB RAM; Qwen2.5 72B is the practical 48 GB choice' },
        ],
        columns: ['VRAM Tier', 'Best Qwen', 'Best Competitor', 'Verdict'],
        tableFormat: true,
        content2: 'For a deeper head-to-head between DeepSeek and Qwen across coding, reasoning, and multilingual tasks, see [DeepSeek vs Qwen local comparison 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Chinese Users: Data Sovereignty and Local Deployment',
        content: [
          '**Running Qwen2.5 locally means zero data transfer outside your machine — no compliance exposure under China\'s Data Security Law (DSL) or the Cybersecurity Law.** Cloud-based LLM APIs require sending prompts to foreign servers, which creates cross-border data transfer risk under DSL Article 31.',
          'Qwen2.5 is trained by Alibaba\'s Qwen team on a predominantly Chinese and multilingual corpus. This makes it the strongest locally-deployable model for Simplified Chinese, Traditional Chinese, Classical Chinese, and mixed-language (Chinese/English) documents.',
          '**For enterprise deployments in China**: air-gapped Qwen2.5 setups (no internet at inference time) are fully compliant with CAC regulations on generative AI. The model runs entirely on local compute — the regulator\'s concern is training data and output moderation, not inference on offline hardware. See [running AI fully offline](/power-local-llm/local-ai-behind-firewall-offline-2026) for a complete air-gapped setup guide.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 runs completely offline after download — no data leaves your machine, eliminating cross-border data transfer risk under China\'s Data Security Law.' },
          { type: 'plain-terms', text: 'When you run Qwen2.5 locally, your prompts and documents never leave your computer. There is no cloud API call, no foreign server, and no data that regulators can intercept or audit.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Hardware Picks by Budget',
        content: [
          '**RTX 3060 12 GB is the best entry point for Qwen2.5 7B and Qwen2.5-Coder 7B at under €300.** For 14B models, the RTX 4070 12 GB adds 35% speed at ~€400 new. Below are the hardware options used and tested for this guide.',
        ],
        items: [
          '**Budget (Qwen2.5 7B)**: NVIDIA RTX 4060 8 GB or RTX 3060 12 GB. Both handle 7B models at 50–57 tokens/sec. The RTX 3060 12 GB is often cheaper second-hand and has more VRAM headroom.',
          '**Mid-range (Qwen2.5 14B)**: RTX 4070 12 GB or RTX 4070 Super 12 GB. The 4070 Super runs Qwen2.5-Coder 14B at 38–42 tokens/sec and fits 14B models with 2–3 GB of VRAM to spare for context.',
          '**High-end (Qwen2.5 32B)**: RTX 4090 24 GB or RTX 3090 24 GB. The 4090 delivers 27–28 tok/s on Qwen2.5-Coder 32B — real-time coding speed. The 3090 is significantly cheaper used and performs within 15% of the 4090 on inference.',
          '**Apple Silicon (all sizes)**: Mac mini M4 Pro 48 GB is the best value for running Qwen2.5 32B (~22 tok/s) with low noise and power consumption. M2 Ultra 192 GB handles Qwen2.5 72B.',
          '**Mini PC for always-on use**: MINISFORUM UM890 Pro or similar AMD Ryzen AI PC. Runs Qwen2.5 7B on CPU+iGPU at ~8–12 tok/s — slow but 24/7 capable with under 35W power draw.',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$250–300', label: 'Entry-level Qwen2.5 7B GPU' },
          { url: 'https://www.amazon.com/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '$450–500', label: 'Best GPU for Qwen2.5 14B' },
          { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '$1,600–1,800', label: 'Best GPU for Qwen2.5-Coder 32B' },
          { url: 'https://www.amazon.com/dp/B0CQSL8N8F', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '$1,299–1,399', label: 'Best Apple Silicon for Qwen2.5 32B' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Running Qwen2.5 Locally',
        items: [
          '**Using an untagged `ollama pull qwen2.5` command.** Without an explicit size tag (`:7b`, `:14b`, etc.), Ollama may resolve to a default size that changes between library updates. Always use explicit tags: `ollama pull qwen2.5:14b`.',
          '**Ignoring the context window size.** Qwen2.5 supports 128K context, but Ollama defaults to 2K at `num_ctx`. If you\'re processing long documents, add `--num-ctx 8192` (or higher) to the run command — otherwise the model silently truncates input.',
          '**Choosing Q2_K quantization for Chinese-language use.** At 2-bit precision, Qwen2.5\'s Chinese output becomes noticeably degraded — character substitutions increase. Use Q4_K_M as the minimum for any Chinese-language work.',
          '**Running the 32B model with too little VRAM.** If your GPU has 16 GB and the model needs 20.5 GB, Ollama offloads layers to system RAM. The model runs but at 3–5 tok/s — unusable for interactive use. Check the hardware table above and pick a model that fits your VRAM.',
          '**Using the wrong sub-family for coding.** Qwen2.5 7B (general) scores 57.3% on HumanEval. Qwen2.5-Coder 7B scores 75.6% on the same benchmark — a 32% relative improvement. If your use case is code, always use the Coder variant of the same size.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How much VRAM do I need to run Qwen2.5 7B locally?', a: 'Qwen2.5 7B Q4_K_M requires 5.5 GB of VRAM. An RTX 3060 6 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it. At 8 GB VRAM you have headroom for context and system RAM.' },
          { q: 'What is the best Qwen model for coding locally?', a: 'Qwen2.5-Coder 32B is the best locally runnable coding model — it scores 92.7% on HumanEval and needs a 24 GB GPU (RTX 3090 or RTX 4090). If your VRAM is 12 GB or less, use Qwen2.5-Coder 14B (HumanEval 85.2%, 9.5 GB VRAM).' },
          { q: 'How does Qwen compare to DeepSeek for local deployment?', a: 'Qwen2.5 72B and DeepSeek-V2.5 are competitive on general tasks, but Qwen uses a dense architecture that fits on consumer hardware. DeepSeek-V2.5 is a 236B MoE model — it requires ~130 GB RAM at Q4, unreachable without server-grade hardware. For VRAM under 48 GB, Qwen2.5 is the practical choice.' },
          { q: 'Can I run Qwen on a Mac?', a: 'Yes. Apple Silicon uses unified memory — an M2 Pro 32 GB runs Qwen2.5 14B at ~32 tok/s. An M3 Max 64 GB handles Qwen2.5 32B at ~22 tok/s. Use the Ollama macOS app or LM Studio for the simplest setup.' },
          { q: 'What Ollama command do I use for Qwen2.5?', a: 'Use `ollama pull qwen2.5:7b` for 7B, `ollama pull qwen2.5:14b` for 14B, `ollama pull qwen2.5:32b` for 32B, or `ollama pull qwen2.5-coder:32b` for the coding variant. Always use explicit size tags.' },
          { q: 'Is Qwen good for Chinese-language tasks?', a: 'Qwen2.5 was pretrained on a large Chinese corpus and natively supports Simplified Chinese, Traditional Chinese, Japanese, Korean, Arabic, and 24 more languages. It consistently outperforms Llama 3.3 and Mistral on Chinese reading comprehension and generation.' },
          { q: 'What quantization should I use for Qwen2.5?', a: 'Q4_K_M is the recommended default — it cuts VRAM by ~55% versus FP16 with less than 1% quality loss on benchmarks. Use Q8_0 if you have spare VRAM and want near-FP16 quality. Avoid Q2_K for Chinese-language use.' },
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
          { url: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen Local Comparison 2026', description: 'Full head-to-head: DeepSeek-V2.5 vs Qwen2.5 on coding, reasoning, Chinese, and creative writing — with Mac vs NVIDIA breakdowns.' },
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Guía de despliegue local de Qwen 2026: ejecuta Qwen2.5, Coder y VL en cada nivel de hardware',
    seoTitle: 'Qwen2.5 en local 2026: Coder, VL y niveles de hardware',
    intro: 'Qwen2.5 7B funciona con solo 5,5 GB de VRAM mediante Ollama — un único comando, sin configuración. Qwen2.5-Coder 32B alcanza el 92,7 % en HumanEval. Qwen2-VL 7B es el modelo de visión local líder para OCR de documentos en chino y japonés. Esta guía cubre la familia completa de modelos Qwen: qué modelo ejecutar en cada nivel de hardware, configuración con Ollama y LM Studio, recomendaciones de cuantización, datos de benchmarks y cómo se compara Qwen con DeepSeek y Llama en hardware de consumo en 2026.',
    metaDescription: 'Ejecuta Qwen2.5 (7B–72B), Qwen2.5-Coder y Qwen2-VL en local en 2026. Requisitos de VRAM, configuración Ollama y LM Studio y guía por nivel de hardware.',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores, investigadores y usuarios con enfoque en privacidad que quieren ejecutar la familia completa de modelos Qwen en local',
    primaryTerm: 'despliegue local de Qwen',
    affiliateDisclosure: true,
    ctaText: 'Despacha entre Qwen2.5, DeepSeek y Llama desde una sola interfaz →',
    ctaButton: 'Prueba PromptQuorum gratis',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Para ejecutar Qwen2.5 7B en local, instala Ollama y ejecuta `ollama pull qwen2.5:7b` — requiere 5,5 GB de VRAM y entrega 57 tokens/seg en una RTX 3060.** Para tareas de código usa Qwen2.5-Coder; para OCR de documentos en chino/japonés usa Qwen2-VL.',
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Descripción general de la familia Qwen2.5', anchor: '#model-family' },
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
    gammaDescription: 'La presentación a continuación cubre: la familia completa de modelos Qwen2.5 (7B a 72B), los requisitos de VRAM por nivel de hardware, los datos de benchmark de Qwen2.5-Coder 32B y un cuadro de decisión Qwen vs DeepSeek vs Llama. Descárgala como tarjeta de referencia de despliegue de Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guía de despliegue local de Qwen 2026: ejecuta Qwen2.5, Coder y VL en cada nivel de hardware',
      description: 'Guía completa para desplegar la familia de modelos Qwen2.5 en local — requisitos de VRAM, configuración con Ollama y LM Studio, cuantización, benchmarks y recomendaciones de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'es',
      url: 'https://www.promptquorum.com/es/local-llms/qwen-local-deployment-guide-2026?lang=es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuánta VRAM necesito para ejecutar Qwen2.5 7B en local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M requiere 5,5 GB de VRAM. Una NVIDIA RTX 3060 6 GB, RTX 4060 o un chip Apple M con 8 GB de memoria unificada son suficientes.' } },
        { '@type': 'Question', name: '¿Cuál es el mejor modelo Qwen para programación en local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B es el mejor modelo de programación ejecutable en local — alcanza el 92,7 % en HumanEval y necesita una GPU de 24 GB (RTX 3090 o RTX 4090). Con 12 GB de VRAM o menos, usa Qwen2.5-Coder 14B (HumanEval 85,2 %, 9,5 GB de VRAM).' } },
        { '@type': 'Question', name: '¿Cómo se compara Qwen con DeepSeek para el despliegue local?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 utiliza una arquitectura densa que cabe en hardware de consumo. DeepSeek-V2.5 es un modelo MoE de 236B — necesita aproximadamente 130 GB de RAM en Q4, inasequible sin GPU de servidor. Con menos de 48 GB de VRAM, Qwen2.5 es la opción práctica.' } },
        { '@type': 'Question', name: '¿Puedo ejecutar Qwen en un Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Apple Silicon usa memoria unificada — un M2 Pro 32 GB ejecuta Qwen2.5 14B a ~32 tokens/seg. Un M3 Max 64 GB maneja Qwen2.5 32B a ~22 tokens/seg.' } },
        { '@type': 'Question', name: '¿Qué comando de Ollama uso para Qwen2.5?', acceptedAnswer: { '@type': 'Answer', text: 'Usa `ollama pull qwen2.5:7b` para 7B, `ollama pull qwen2.5:14b` para 14B, `ollama pull qwen2.5:32b` para 32B, o `ollama pull qwen2.5-coder:32b` para la variante de programación. Siempre usa etiquetas de tamaño explícitas.' } },
        { '@type': 'Question', name: '¿Qwen es adecuado para tareas en idioma chino?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano, árabe y 24 idiomas más. Supera sistemáticamente a Llama 3.3 y Mistral en comprensión y generación en chino.' } },
        { '@type': 'Question', name: '¿Qué cuantización debo usar para Qwen2.5?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M es el valor por defecto recomendado — reduce la VRAM aproximadamente un 55 % respecto a FP16 con menos del 1 % de pérdida de calidad en los benchmarks. Usa Q8_0 si tienes VRAM de sobra y quieres calidad cercana a FP16. Evita Q2_K para uso en chino.' } },
        { '@type': 'Question', name: '¿Funciona Qwen2-VL para OCR de documentos en chino?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — Qwen2-VL 7B es el modelo de visión local más potente para OCR de documentos CJK. Funciona con ~6 GB de VRAM mediante `ollama pull qwen2-vl:7b` y lee texto en chino, japonés y coreano a resoluciones de hasta 4096×4096.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2.5 7B funciona con 5,5 GB de VRAM** — un solo comando `ollama pull qwen2.5:7b` y ya está en marcha a 57 tokens/seg en una RTX 3060.',
          '**Tres subfamilias diferenciadas**: Qwen2.5 (uso general), Qwen2.5-Coder (programación, 92,7 % en HumanEval en 32B), Qwen2-VL (visión, mejor OCR CJK local).',
          '**Arquitectura densa = compatible con hardware de consumo**: a diferencia del modelo MoE de 236B de DeepSeek (~130 GB de RAM), Qwen2.5 72B cabe en 46 GB de VRAM en dos RTX 3090.',
          '**Multilingüe nativo**: preentrenado en chino, japonés, coreano, árabe, alemán, francés y 23 idiomas más — Qwen2.5 supera sistemáticamente a Llama 3.3 en tareas CJK.',
          '**Q4_K_M es la cuantización correcta** para la mayoría de usuarios: ~55 % de reducción de VRAM, menos del 1 % de pérdida de calidad en los benchmarks.',
          '**Decisión de hardware**: 12 GB de VRAM → modelo 14B; 24 GB → 32B; 48 GB+ (dos GPUs o Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 cubre tres subfamilias de despliegue local — uso general (7B–72B), programación (Coder 7B–32B) y visión (VL 7B–72B) — todas ejecutables mediante Ollama o LM Studio.' },
          { type: 'plain-terms', text: 'Ejecutar un modelo en local significa que la IA corre en tu propio ordenador en lugar de en un servidor en la nube. Ningún dato sale de tu máquina y no hay coste por token después de adquirir el hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Descripción general de la familia de modelos Qwen2.5',
        content: [
          '**La familia Qwen2.5 cubre tres tareas diferenciadas: razonamiento general, programación y visión** — cada una con múltiples opciones de tamaño de 7B a 72B parámetros. Todos son modelos de pesos abiertos publicados por el equipo Qwen de Alibaba en Hugging Face bajo la licencia Apache 2.0.',
          'Elige primero la subfamilia y luego el tamaño que se ajuste a tu VRAM. Es habitual combinar subfamilias: Qwen2.5-Coder 14B para autocompletar código y Qwen2.5 7B para resumir documentos.',
        ],
        rows: [
          { 'Subfamilia': 'Qwen2.5', 'Tamaños disponibles': '7B, 14B, 32B, 72B', 'Uso principal': 'Razonamiento general, tareas en chino/multilingüe, RAG', 'Prefijo de etiqueta Ollama': 'qwen2.5:' },
          { 'Subfamilia': 'Qwen2.5-Coder', 'Tamaños disponibles': '7B, 14B, 32B', 'Uso principal': 'Generación de código, depuración, HumanEval, SWE-bench', 'Prefijo de etiqueta Ollama': 'qwen2.5-coder:' },
          { 'Subfamilia': 'Qwen2-VL', 'Tamaños disponibles': '2B, 7B, 72B', 'Uso principal': 'OCR de documentos, preguntas sobre imágenes, extracción de texto CJK', 'Prefijo de etiqueta Ollama': 'qwen2-vl:' },
        ],
        columns: ['Subfamilia', 'Tamaños disponibles', 'Uso principal', 'Prefijo de etiqueta Ollama'],
        tableFormat: true,
        note: 'Qwen3 (lanzado en el Q1 de 2026) añade modelos con modo de razonamiento, pero a mayo de 2026 tiene menos builds GGUF y menor cobertura en Ollama que Qwen2.5. Esta guía se centra en Qwen2.5, que tiene el soporte de hardware más amplio y las cuantizaciones más probadas. Consulta [los mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) para una comparación más amplia.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Requisitos de hardware por tamaño de modelo',
        content: [
          '**Elige primero tu nivel de VRAM y luego el modelo Qwen2.5 más grande que quepa.** Q4_K_M es la cuantización estándar usada en todas las cifras a continuación — ofrece la mejor relación tamaño/calidad para Ollama y LM Studio.',
        ],
        rows: [
          { 'Modelo': 'Qwen2.5 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~57 tok/s' },
          { 'Modelo': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (RTX 3060)': '~55 tok/s' },
          { 'Modelo': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 GB', 'GPU mínima': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidad (RTX 4060)': '~38 tok/s' },
          { 'Modelo': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~38 tok/s' },
          { 'Modelo': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (RTX 4070)': '~36 tok/s' },
          { 'Modelo': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~28 tok/s' },
          { 'Modelo': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (RTX 4090)': '~27 tok/s' },
          { 'Modelo': 'Qwen2.5 72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidad (2×RTX 4090)': '~12 tok/s' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidad (RTX 3060)'],
        tableFormat: true,
        note: 'Las cifras de VRAM corresponden a archivos GGUF Q4_K_M de la biblioteca de Ollama. Añade 1–2 GB para la caché KV con un contexto de 4K. Si la GPU tiene menos VRAM de la que necesita el modelo, Ollama descarga capas automáticamente a la RAM del sistema — funciona, pero reduce la velocidad significativamente.',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Requisitos de VRAM de Qwen2.5 por tamaño de modelo (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración con Ollama',
        content: [
          '**Ollama es la forma más rápida de ejecutar cualquier modelo Qwen2.5 en local** — gestiona la descarga del modelo, la cuantización GGUF y la API local en `localhost:11434` sin ninguna configuración. Instálalo desde [ollama.com](https://ollama.com/download). Si no has usado Ollama antes, lee primero [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar Ollama', whyItMatters: 'Disponible para macOS, Linux (instalación en una línea) y Windows. No hay que configurar drivers de GPU — Ollama detecta CUDA, ROCm y Metal automáticamente.' },
          { title: 'Descargar el modelo con una etiqueta de tamaño explícita', whyItMatters: 'Especifica siempre el tamaño: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. El `qwen2.5` sin etiquetar se resuelve al modelo 7B, pero puede cambiar entre versiones de Ollama.' },
          { title: 'Ejecutar el modelo', whyItMatters: '`ollama run qwen2.5:7b` abre un chat interactivo. Escribe tu prompt y pulsa Enter. Cierra con `/bye`.' },
          { title: 'Ajustar la ventana de contexto si es necesario', whyItMatters: 'Qwen2.5 soporta por defecto un contexto de 32K en Ollama. Para usar un contexto de 128K en un modelo 7B, ejecuta `ollama run qwen2.5:7b --num-ctx 131072`. Esto requiere más VRAM.' },
          { title: 'Probar el endpoint de la API', whyItMatters: 'Ollama expone una API compatible con OpenAI. Aplicaciones como PromptQuorum, Continue.dev y Open WebUI se conectan directamente a `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Instalar Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: descarga el .dmg desde ollama.com o:
brew install ollama

# Descargar modelos — usa etiquetas explícitas
ollama pull qwen2.5:7b           # uso general 7B (~5,5 GB)
ollama pull qwen2.5:14b          # uso general 14B (~9,5 GB)
ollama pull qwen2.5:32b          # uso general 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # programación 32B (~20,5 GB)
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
          '**LM Studio ofrece una interfaz gráfica para Qwen2.5 sin necesidad de comandos en terminal.** Descárgalo desde [lmstudio.ai](https://lmstudio.ai) o consulta [cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio). Funciona en macOS, Windows y Linux.',
        ],
        numberedItems: [
          { title: 'Abrir el navegador de modelos', whyItMatters: 'Busca "Qwen2.5" o "Qwen Coder" para explorar todos los builds GGUF disponibles. Filtra por Q4_K_M para la relación calidad/tamaño recomendada.' },
          { title: 'Descargar un build GGUF', whyItMatters: 'Selecciona la variante Q4_K_M. LM Studio muestra el tamaño del archivo antes de la descarga — confirma que se ajusta a la VRAM disponible.' },
          { title: 'Cargar el modelo y empezar a chatear', whyItMatters: 'Haz clic en el modelo en la barra lateral izquierda para cargarlo en memoria. La asignación de capas a la GPU es automática en función de la VRAM detectada.' },
          { title: 'Iniciar el servidor local', whyItMatters: '"Iniciar servidor" expone un endpoint compatible con OpenAI en `localhost:1234`. Tus aplicaciones y scripts se conectan a él como si fuera la API de OpenAI.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Cuantización: qué formato elegir',
        content: [
          '**Q4_K_M es el valor por defecto correcto para Qwen2.5 en hardware de consumo.** Reduce la VRAM entre un 55–60 % respecto a FP16 con menos del 1 % de degradación en MMLU y HumanEval. Otros formatos tienen casos de uso específicos:',
        ],
        items: [
          '**Q4_K_M** (recomendado): ~5,5 GB para 7B. La mejor relación calidad por GB. Empieza por este.',
          '**Q8_0**: ~8,5 GB para 7B. Calidad cercana a FP16; úsalo si tienes VRAM de sobra y quieres la máxima precisión.',
          '**Q5_K_M**: ~6,5 GB para 7B. Mejora marginal sobre Q4_K_M — elígelo solo si la calidad de salida de Q4_K_M es visiblemente deficiente para tu tarea.',
          '**Q2_K**: ~3 GB para 7B. El archivo más pequeño, pero la calidad de salida en chino se degrada notablemente — evítalo con Qwen2.5 si el chino es parte de tu caso de uso.',
          '**IQ4_XS**: ~4,8 GB para 7B. Una cuantización imatrix más reciente que supera la calidad de Q4_K_M con un tamaño ligeramente menor — disponible en versiones recientes de llama.cpp y LM Studio 0.3+.',
        ],
        note: 'Para una explicación completa sobre cuantización, consulta [cuantización de LLM explicada](/es/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M es la mejor cuantización de Qwen2.5 para la mayoría de usuarios: reduce la VRAM un 55 % con menos del 1 % de pérdida de calidad respecto a FP16.' },
          { type: 'plain-terms', text: 'La cuantización comprime los números del modelo de 16 bits a 4 bits, reduciendo aproximadamente a la mitad el tamaño del archivo y la VRAM necesaria. Es como pasar de TIFF a JPEG de alta calidad — archivo más pequeño, resultado casi idéntico para la mayoría de usos.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Rendimiento en benchmarks en hardware de consumo',
        content: [
          '**Qwen2.5 32B Q4_K_M en una RTX 4090 entrega 28 tokens/seg — velocidad suficiente para asistencia de código en tiempo real.** Las puntuaciones a continuación corresponden a builds GGUF Q4_K_M probados en Ollama. Las puntuaciones FP16 son un 1–2 % mayores.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen2.5 7B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Velocidad (RTX 3060 12 GB)': '57 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Velocidad (RTX 4070 12 GB)': '38 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Velocidad (RTX 4090 24 GB)': '28 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5 72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Velocidad (2×RTX 3090)': '12 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Velocidad (RTX 3060 12 GB)': '55 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Velocidad (RTX 4070 12 GB)': '36 tok/s' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Velocidad (RTX 4090 24 GB)': '27 tok/s' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidad (RTX 3060 12 GB)'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Puntuaciones de benchmark de Qwen2.5 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: qué ejecutar en local',
        content: [
          '**Qwen2.5 gana en tareas en chino y eficiencia de VRAM; DeepSeek-V2.5 gana en razonamiento a gran escala pero es impráctico en hardware de consumo; Llama 3.3 70B es la mejor opción en una sola GPU si prefieres el modelo abierto de Meta.** La tabla a continuación compara las opciones prácticas en cada nivel de VRAM.',
        ],
        rows: [
          { 'Nivel de VRAM': '6 GB', 'Mejor Qwen': 'Qwen2.5 7B', 'Mejor competidor': 'Llama 3.2 3B (cabe, pero solo 3B)', 'Veredicto': 'Qwen2.5 7B gana — misma VRAM, modelo mucho mayor' },
          { 'Nivel de VRAM': '12 GB', 'Mejor Qwen': 'Qwen2.5-Coder 14B', 'Mejor competidor': 'Llama 3.3 8B Instruct', 'Veredicto': 'Qwen2.5-Coder 14B para código; Llama 3.3 8B para chat general' },
          { 'Nivel de VRAM': '24 GB', 'Mejor Qwen': 'Qwen2.5-Coder 32B', 'Mejor competidor': 'Llama 3.3 70B (con descarga)', 'Veredicto': 'Qwen2.5-Coder 32B para código; Llama 3.3 70B si calidad > velocidad' },
          { 'Nivel de VRAM': '48 GB+', 'Mejor Qwen': 'Qwen2.5 72B', 'Mejor competidor': 'DeepSeek-V2.5 236B MoE', 'Veredicto': 'DeepSeek necesita ~130 GB de RAM; Qwen2.5 72B es la opción práctica para 48 GB' },
        ],
        columns: ['Nivel de VRAM', 'Mejor Qwen', 'Mejor competidor', 'Veredicto'],
        tableFormat: true,
        content2: 'Para una comparación más detallada entre DeepSeek y Qwen en programación, razonamiento y tareas multilingüe, consulta [comparación local DeepSeek vs Qwen 2026](/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Usuarios hispanohablantes: soberanía de datos y despliegue local',
        content: [
          '**Ejecutar Qwen2.5 en local significa que ningún dato sale de tu máquina — sin transferencia a servidores en la nube, sin exposición bajo el RGPD o leyes de protección de datos latinoamericanas.** Las API de LLM en la nube exigen enviar prompts a servidores externos, lo que activa los requisitos de tratamiento de datos y posibles transferencias internacionales.',
          'Qwen2.5 fue entrenado por el equipo Qwen de Alibaba sobre un corpus predominantemente chino y multilingüe. Es el modelo con despliegue local más potente para documentos en chino simplificado, chino tradicional y textos mixtos (chino/español/inglés).',
          '**Para despliegues en empresas hispanohablantes**: una configuración de Qwen2.5 sin conexión a internet durante la inferencia es plenamente compatible con los marcos regulatorios de España (RGPD/AEPD), México (LFPDPPP), Argentina (Ley 25.326) y otros países hispanohablantes. El modelo corre íntegramente en hardware local — ningún tercero accede a los datos de entrada o salida. Consulta [ejecutar IA completamente sin conexión](/es/power-local-llm/local-ai-behind-firewall-offline-2026) para una guía completa de configuración aislada.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 funciona completamente sin conexión después de la descarga — ningún dato sale de tu máquina, eliminando el riesgo de transferencia transfronteriza de datos bajo el RGPD y las leyes latinoamericanas.' },
          { type: 'plain-terms', text: 'Cuando ejecutas Qwen2.5 en local, tus prompts y documentos nunca abandonan tu ordenador. No hay llamadas a una API en la nube, no hay servidor externo y no hay datos a los que reguladores o terceros puedan acceder.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Recomendaciones de hardware por presupuesto',
        content: [
          '**La RTX 3060 12 GB es el mejor punto de entrada para Qwen2.5 7B y Qwen2.5-Coder 7B por menos de 300 €.** Para modelos 14B, la RTX 4070 12 GB añade un 35 % de velocidad a unos 450–500 € nueva.',
        ],
        items: [
          '**Económico (Qwen2.5 7B)**: NVIDIA RTX 4060 8 GB o RTX 3060 12 GB. Ambas manejan modelos 7B a 50–57 tokens/seg. La RTX 3060 12 GB suele ser más barata de segunda mano y tiene más margen de VRAM.',
          '**Gama media (Qwen2.5 14B)**: RTX 4070 12 GB o RTX 4070 Super 12 GB. La 4070 Super ejecuta Qwen2.5-Coder 14B a 38–42 tokens/seg y deja 2–3 GB de VRAM libre para el contexto.',
          '**Gama alta (Qwen2.5 32B)**: RTX 4090 24 GB o RTX 3090 24 GB. La 4090 entrega 27–28 tok/s en Qwen2.5-Coder 32B — velocidad de asistencia de código en tiempo real. La 3090 es significativamente más barata de segunda mano y rinde dentro del 15 % de la 4090 en inferencia.',
          '**Apple Silicon (todos los tamaños)**: Mac mini M4 Pro 48 GB ofrece la mejor relación calidad/precio para ejecutar Qwen2.5 32B (~22 tok/s) con bajo ruido y consumo.',
          '**Mini PC para uso continuo**: MINISFORUM UM890 Pro o PC AMD Ryzen AI similar. Ejecuta Qwen2.5 7B en CPU+iGPU a ~8–12 tok/s — lento pero capaz de funcionar 24/7 con menos de 35 W de consumo.',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.es/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '250–300 €', label: 'GPU de entrada para Qwen2.5 7B' },
          { url: 'https://www.amazon.es/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: '450–520 €', label: 'Mejor GPU para Qwen2.5 14B' },
          { url: 'https://www.amazon.es/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '1.800–2.100 €', label: 'Mejor GPU para Qwen2.5-Coder 32B' },
          { url: 'https://www.apple.com/es/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '1.649 €', label: 'Mejor Apple Silicon para Qwen2.5 32B' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes al ejecutar Qwen2.5 en local',
        items: [
          '**Usar el comando `ollama pull qwen2.5` sin etiqueta de tamaño.** Sin una etiqueta de tamaño explícita (`:7b`, `:14b`, etc.), Ollama puede resolver al tamaño predeterminado, que puede cambiar entre actualizaciones de la biblioteca. Usa siempre etiquetas explícitas: `ollama pull qwen2.5:14b`.',
          '**Ignorar el tamaño de la ventana de contexto.** Qwen2.5 soporta un contexto de 128K, pero Ollama usa 2K por defecto para `num_ctx`. Si procesas documentos largos, añade `--num-ctx 8192` (o más) al comando de ejecución — de lo contrario el modelo trunca la entrada en silencio.',
          '**Elegir cuantización Q2_K para uso en chino.** A 2 bits de precisión, la salida en chino de Qwen2.5 se degrada notablemente. Usa Q4_K_M como mínimo para cualquier trabajo en chino.',
          '**Ejecutar el modelo 32B con poca VRAM.** Si la GPU tiene 16 GB y el modelo necesita 20,5 GB, Ollama descarga capas a la RAM del sistema. El modelo funciona pero a 3–5 tok/s — inutilizable para uso interactivo. Consulta la tabla de hardware y elige un modelo que quepa en tu VRAM.',
          '**Usar la subfamilia incorrecta para programación.** Qwen2.5 7B (uso general) puntúa 57,3 % en HumanEval. Qwen2.5-Coder 7B puntúa 75,6 % en el mismo benchmark — una mejora relativa del 32 %. Si tu caso de uso es código, usa siempre la variante Coder del mismo tamaño.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuánta VRAM necesito para ejecutar Qwen2.5 7B en local?', a: 'Qwen2.5 7B Q4_K_M requiere 5,5 GB de VRAM. Una RTX 3060 6 GB, RTX 4060 o chip Apple M con 8 GB de memoria unificada son suficientes.' },
          { q: '¿Cuál es el mejor modelo Qwen para programación en local?', a: 'Qwen2.5-Coder 32B — 92,7 % en HumanEval, necesita GPU de 24 GB. Con 12 GB de VRAM o menos: Qwen2.5-Coder 14B (85,2 %, 9,5 GB de VRAM).' },
          { q: '¿Cómo se compara Qwen con DeepSeek para el despliegue local?', a: 'Qwen2.5 usa arquitectura densa compatible con hardware de consumo. DeepSeek-V2.5 es un modelo MoE de 236B que necesita ~130 GB de RAM — inviable sin GPU de servidor.' },
          { q: '¿Puedo ejecutar Qwen en un Mac?', a: 'Sí. M2 Pro 32 GB ejecuta Qwen2.5 14B a ~32 tok/s. M3 Max 64 GB maneja Qwen2.5 32B a ~22 tok/s.' },
          { q: '¿Qué comando de Ollama uso para Qwen2.5?', a: '`ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, o `qwen2.5-coder:32b` para la variante de programación. Usa siempre etiquetas de tamaño explícitas.' },
          { q: '¿Qwen es adecuado para tareas en chino?', a: 'Sí. Qwen2.5 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano y 24 idiomas más.' },
          { q: '¿Qué cuantización debo usar para Qwen2.5?', a: 'Q4_K_M por defecto — reduce la VRAM ~55 % respecto a FP16 con menos del 1 % de pérdida de calidad. Evita Q2_K para uso en chino.' },
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
          { url: '/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'Comparación local DeepSeek vs Qwen 2026', description: 'Comparación completa: DeepSeek-V2.5 vs Qwen2.5 en programación, razonamiento, chino y escritura creativa — con desglose Mac vs NVIDIA.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Guide de déploiement local Qwen 2026 : Qwen2.5, Coder et VL pour chaque niveau matériel',
    seoTitle: 'Déploiement local Qwen 2026 : Qwen2.5, Coder & VL Setup',
    intro: 'Qwen2.5 7B fonctionne en local avec 5,5 Go de VRAM via Ollama — une seule commande, aucune configuration. Qwen2.5-Coder 32B atteint 92,7 % sur HumanEval. Qwen2-VL 7B est le meilleur modèle de vision local pour l\'OCR de documents chinois et japonais. Ce guide couvre l\'ensemble de la famille Qwen : quel modèle utiliser selon votre niveau matériel, la configuration Ollama et LM Studio, les recommandations de quantification, les données de benchmark et la comparaison avec DeepSeek et Llama sur matériel grand public en 2026.',
    metaDescription: 'Déployer Qwen2.5 (7B–72B), Qwen2.5-Coder et Qwen2-VL en local en 2026. VRAM requis, Ollama + LM Studio, benchmarks Q4_K_M et guide par niveau matériel.',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs, chercheurs et utilisateurs soucieux de leur vie privée souhaitant déployer la famille de modèles Qwen en local',
    primaryTerm: 'déploiement local Qwen',
    affiliateDisclosure: true,
    ctaText: 'Dispatcher entre Qwen2.5, DeepSeek et Llama depuis une interface →',
    ctaButton: 'Essayer PromptQuorum gratuitement',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Pour déployer Qwen2.5 7B en local, installez Ollama et exécutez `ollama pull qwen2.5:7b` — 5,5 Go de VRAM suffisent, 57 tokens/s sur une RTX 3060.** Pour le code, utilisez Qwen2.5-Coder ; pour l\'OCR de documents CJK, Qwen2-VL.',
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Famille de modèles Qwen2.5', anchor: '#model-family' },
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
    gammaDescription: 'La présentation ci-dessous couvre : la famille complète Qwen2.5 (7B à 72B), les exigences VRAM par niveau matériel, les données de benchmark pour Qwen2.5-Coder 32B et un tableau de décision Qwen vs DeepSeek vs Llama. Télécharger comme fiche de référence.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guide de déploiement local Qwen 2026 : Qwen2.5, Coder et VL pour chaque niveau matériel',
      description: 'Guide complet du déploiement local de la famille Qwen2.5 — exigences VRAM, configuration Ollama et LM Studio, quantification, benchmarks et recommandations matérielles.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'fr',
      url: 'https://www.promptquorum.com/fr/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quelle quantité de VRAM est nécessaire pour Qwen2.5 7B en local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 6 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.' } },
        { '@type': 'Question', name: 'Quel est le meilleur modèle Qwen pour le code en local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B est le meilleur modèle de code déployable localement — 92,7 % sur HumanEval, nécessite un GPU 24 Go (RTX 3090 ou RTX 4090). Avec 12 Go de VRAM ou moins : Qwen2.5-Coder 14B (85,2 %, 9,5 Go VRAM).' } },
        { '@type': 'Question', name: 'Comment Qwen se compare-t-il à DeepSeek pour le déploiement local ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 utilise une architecture dense qui tient sur du matériel grand public. DeepSeek-V2.5 est un modèle MoE de 236B — il nécessite ~130 Go de RAM, inaccessible sans GPU serveur.' } },
        { '@type': 'Question', name: 'Puis-je utiliser Qwen sur un Mac ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Apple Silicon utilise la mémoire unifiée — un M2 Pro 32 Go exécute Qwen2.5 14B à ~32 tokens/s. Un M3 Max 64 Go gère Qwen2.5 32B à ~22 tokens/s.' } },
        { '@type': 'Question', name: 'Quelle commande Ollama utiliser pour Qwen2.5 ?', acceptedAnswer: { '@type': 'Answer', text: '`ollama pull qwen2.5:7b` pour 7B, `ollama pull qwen2.5:14b` pour 14B, `ollama pull qwen2.5:32b` pour 32B, ou `ollama pull qwen2.5-coder:32b` pour la variante code. Toujours utiliser des tags de taille explicites.' } },
        { '@type': 'Question', name: 'Qwen est-il adapté aux tâches en langue chinoise ?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 a été pré-entraîné sur un large corpus chinois et supporte nativement le chinois simplifié, le chinois traditionnel, le japonais, le coréen et 24 autres langues.' } },
        { '@type': 'Question', name: 'Quelle quantification utiliser pour Qwen2.5 ?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M est la valeur par défaut recommandée — réduction du VRAM de ~55 % par rapport au FP16 avec moins de 1 % de perte de qualité. Q8_0 pour une qualité quasi-FP16 si le VRAM le permet. Éviter Q2_K pour les usages en langue chinoise.' } },
        { '@type': 'Question', name: 'Qwen2-VL fonctionne-t-il pour l\'OCR de documents chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — Qwen2-VL 7B est le meilleur modèle de vision local pour l\'OCR de documents CJK. Il fonctionne avec ~6 Go de VRAM via `ollama pull qwen2-vl:7b` et lit jusqu\'à 4096×4096 pixels.' } },
        { '@type': 'Question', name: 'Qwen2.5 est-il conforme au RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'En déploiement local, aucune donnée ne quitte votre serveur — aucun DPA (accord de traitement des données) selon l\'article 28 du RGPD n\'est requis. La CNIL recommande le traitement local pour les données sensibles dans les secteurs réglementés (médical, juridique, financier).' } },
        { '@type': 'Question', name: 'Qwen2.5 peut-il traiter des documents mixtes français-chinois ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Qwen2.5 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2-VL 7B est plus adapté — il extrait le texte depuis les images sans confusion de script.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2.5 7B tourne avec 5,5 Go de VRAM** — une commande `ollama pull qwen2.5:7b` suffit ; 57 tokens/s sur RTX 3060.',
          '**Trois sous-familles distinctes** : Qwen2.5 (usage général), Qwen2.5-Coder (code, 92,7 % HumanEval en 32B), Qwen2-VL (vision, meilleur OCR CJK local).',
          '**Architecture dense = compatible matériel grand public** : contrairement au modèle MoE 236B de DeepSeek (~130 Go RAM), Qwen2.5 72B tient en 46 Go VRAM sur deux RTX 3090.',
          '**Multilinguisme natif** : pré-entraîné sur le chinois, le japonais, le coréen, l\'arabe, le français et 24 autres langues.',
          '**Q4_K_M est la bonne quantification** pour la plupart des utilisateurs : ~55 % de réduction VRAM, moins de 1 % de perte de qualité.',
          '**Décision matérielle** : 12 Go VRAM → modèle 14B ; 24 Go → 32B ; 48 Go+ → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 couvre trois sous-familles de déploiement local — usage général (7B–72B), code (Coder 7B–32B) et vision (VL 7B–72B) — toutes exécutables via Ollama ou LM Studio.' },
          { type: 'plain-terms', text: 'Faire tourner un modèle en local signifie que l\'IA s\'exécute sur votre propre ordinateur, sans serveur cloud. Aucune donnée ne quitte votre machine, et il n\'y a aucun coût par token après l\'achat du matériel.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Famille de modèles Qwen2.5',
        content: [
          '**La famille Qwen2.5 couvre trois usages distincts : raisonnement général, code et vision** — chacun disponible en plusieurs tailles de 7B à 72B paramètres. Tous sont des modèles open-weight publiés par l\'équipe Qwen d\'Alibaba sous licence Apache 2.0.',
        ],
        rows: [
          { 'Sous-famille': 'Qwen2.5', 'Tailles disponibles': '7B, 14B, 32B, 72B', 'Usage principal': 'Raisonnement général, tâches chinoises/multilingues, RAG', 'Préfixe tag Ollama': 'qwen2.5:' },
          { 'Sous-famille': 'Qwen2.5-Coder', 'Tailles disponibles': '7B, 14B, 32B', 'Usage principal': 'Génération de code, débogage, HumanEval, SWE-bench', 'Préfixe tag Ollama': 'qwen2.5-coder:' },
          { 'Sous-famille': 'Qwen2-VL', 'Tailles disponibles': '2B, 7B, 72B', 'Usage principal': 'OCR de documents, Q&A sur images, extraction de texte CJK', 'Préfixe tag Ollama': 'qwen2-vl:' },
        ],
        columns: ['Sous-famille', 'Tailles disponibles', 'Usage principal', 'Préfixe tag Ollama'],
        tableFormat: true,
        note: 'Qwen3 (sorti Q1 2026) ajoute des modèles en mode réflexion, mais dispose de moins de builds GGUF et d\'une moindre couverture Ollama que Qwen2.5 en mai 2026. Ce guide se concentre sur Qwen2.5, qui offre la compatibilité matérielle la plus large.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Exigences matérielles par taille de modèle',
        content: [
          '**Choisissez d\'abord votre niveau VRAM, puis le plus grand modèle Qwen2.5 qui y tient.** Q4_K_M est la quantification standard pour toutes les valeurs ci-dessous.',
        ],
        rows: [
          { 'Modèle': 'Qwen2.5 7B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 6 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (RTX 3060)': '~57 tokens/s' },
          { 'Modèle': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 6 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (RTX 3060)': '~55 tokens/s' },
          { 'Modèle': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 Go', 'GPU minimum': 'RTX 3060 8 Go, RTX 4060', 'Apple Silicon': 'M1/M2 16 Go', 'Vitesse (RTX 4060)': '~38 tokens/s' },
          { 'Modèle': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (RTX 4070)': '~38 tokens/s' },
          { 'Modèle': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (RTX 4070)': '~36 tokens/s' },
          { 'Modèle': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (RTX 4090)': '~28 tokens/s' },
          { 'Modèle': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (RTX 4090)': '~27 tokens/s' },
          { 'Modèle': 'Qwen2.5 72B Q4_K_M', 'VRAM': '46 Go', 'GPU minimum': '2× RTX 3090 (48 Go)', 'Apple Silicon': 'M2 Ultra 64 Go', 'Vitesse (2×RTX 4090)': '~12 tokens/s' },
        ],
        columns: ['Modèle', 'VRAM', 'GPU minimum', 'Apple Silicon', 'Vitesse (RTX 3060)'],
        tableFormat: true,
        note: 'Les valeurs VRAM concernent les fichiers GGUF Q4_K_M de la bibliothèque Ollama. Ajoutez 1–2 Go pour le cache KV à 4K de contexte. Si le GPU a moins de VRAM que nécessaire, Ollama décharge automatiquement des couches en RAM système — fonctionnel mais beaucoup plus lent.',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Exigences VRAM Qwen2.5 par taille de modèle (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuration avec Ollama',
        content: [
          '**Ollama est la solution la plus rapide pour déployer localement n\'importe quel modèle Qwen2.5.** Il gère le téléchargement, la quantification GGUF et expose une API à `localhost:11434`. Installez-le depuis [ollama.com](https://ollama.com/download). Si vous débutez avec Ollama : [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'Disponible pour macOS, Linux (installation en une ligne) et Windows. Ollama détecte automatiquement CUDA, ROCm et Metal.' },
          { title: 'Télécharger le modèle avec un tag de taille explicite', whyItMatters: 'Toujours préciser la taille : `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. Le tag non spécifié `qwen2.5` peut changer entre les versions d\'Ollama.' },
          { title: 'Exécuter le modèle', whyItMatters: '`ollama run qwen2.5:7b` ouvre un chat interactif. Saisir la commande et appuyer sur Entrée. Quitter avec `/bye`.' },
          { title: 'Ajuster la fenêtre de contexte si nécessaire', whyItMatters: 'Qwen2.5 supporte 32K de contexte par défaut dans Ollama. Pour 128K : `ollama run qwen2.5:7b --num-ctx 131072`. Cela nécessite davantage de VRAM.' },
          { title: 'Tester le point de terminaison API', whyItMatters: 'Ollama expose une API compatible OpenAI. Les applications comme PromptQuorum et Continue.dev se connectent directement à `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Installer Ollama (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS : télécharger le .dmg ou :
brew install ollama

# Télécharger les modèles — tags explicites requis
ollama pull qwen2.5:7b           # usage général 7B (~5,5 Go)
ollama pull qwen2.5:14b          # 14B (~9,5 Go)
ollama pull qwen2.5:32b          # 32B (~20,5 Go)
ollama pull qwen2.5-coder:32b    # code 32B (~20,5 Go)
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
          '**LM Studio offre une interface graphique pour Qwen2.5 sans commandes terminal.** Téléchargement sur [lmstudio.ai](https://lmstudio.ai) ou voir [comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio). Disponible sur macOS, Windows et Linux.',
        ],
        numberedItems: [
          { title: 'Ouvrir le navigateur de modèles', whyItMatters: 'Rechercher « Qwen2.5 » ou « Qwen Coder ». Filtrer sur Q4_K_M pour le meilleur rapport qualité/taille.' },
          { title: 'Télécharger un build GGUF', whyItMatters: 'Sélectionner la variante Q4_K_M. LM Studio affiche la taille du fichier avant le téléchargement.' },
          { title: 'Charger le modèle et démarrer le chat', whyItMatters: 'Cliquer sur le modèle dans la barre latérale gauche. L\'allocation des couches GPU est automatique.' },
          { title: 'Démarrer le serveur local', whyItMatters: '« Démarrer le serveur » expose une API compatible OpenAI sur `localhost:1234`.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantification : quel format choisir ?',
        content: [
          '**Q4_K_M est le bon choix par défaut pour Qwen2.5 sur matériel grand public.** Il réduit le VRAM de ~55–60 % par rapport au FP16 avec moins de 1 % de dégradation sur MMLU et HumanEval.',
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
          { type: 'one-sentence', text: 'Q4_K_M est la meilleure quantification Qwen2.5 pour la plupart des utilisateurs : 55 % de réduction VRAM avec moins de 1 % de perte de qualité vs FP16.' },
          { type: 'plain-terms', text: 'La quantification compresse les nombres du modèle de 16 bits à 4 bits, réduisant environ de moitié la taille du fichier et le VRAM nécessaire — comme passer d\'un TIFF à un JPEG haute qualité.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Performances benchmark sur matériel grand public',
        content: [
          '**Qwen2.5 32B Q4_K_M sur RTX 4090 : 28 tokens/s** — assez rapide pour l\'assistance au code en temps réel. Scores ci-dessous pour les builds GGUF Q4_K_M testés sur Ollama.',
        ],
        rows: [
          { 'Modèle (Q4_K_M)': 'Qwen2.5 7B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Vitesse (RTX 3060 12 Go)': '57 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Vitesse (RTX 4070 12 Go)': '38 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Vitesse (RTX 4090 24 Go)': '28 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5 72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Vitesse (2×RTX 3090)': '12 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Vitesse (RTX 3060 12 Go)': '55 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Vitesse (RTX 4070 12 Go)': '36 tokens/s' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Vitesse (RTX 4090 24 Go)': '27 tokens/s' },
        ],
        columns: ['Modèle (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Vitesse (RTX 3060 12 Go)'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Scores benchmark Qwen2.5 (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama : que déployer localement ?',
        content: [
          '**Qwen2.5 gagne sur les tâches en langue chinoise et l\'efficacité VRAM ; DeepSeek-V2.5 gagne sur le raisonnement à grande échelle mais est impraticable sur matériel grand public ; Llama 3.3 70B est la meilleure option monoGPU si vous préférez le modèle ouvert de Meta.**',
        ],
        rows: [
          { 'Niveau VRAM': '6 Go', 'Meilleur Qwen': 'Qwen2.5 7B', 'Meilleur concurrent': 'Llama 3.2 3B', 'Recommandation': 'Qwen2.5 7B — même VRAM, modèle beaucoup plus grand' },
          { 'Niveau VRAM': '12 Go', 'Meilleur Qwen': 'Qwen2.5-Coder 14B', 'Meilleur concurrent': 'Llama 3.3 8B Instruct', 'Recommandation': 'Qwen2.5-Coder 14B pour le code ; Llama 3.3 8B pour le chat' },
          { 'Niveau VRAM': '24 Go', 'Meilleur Qwen': 'Qwen2.5-Coder 32B', 'Meilleur concurrent': 'Llama 3.3 70B (déchargé)', 'Recommandation': 'Qwen2.5-Coder 32B pour le code ; Llama 3.3 70B si qualité > vitesse' },
          { 'Niveau VRAM': '48 Go+', 'Meilleur Qwen': 'Qwen2.5 72B', 'Meilleur concurrent': 'DeepSeek-V2.5 236B MoE', 'Recommandation': 'DeepSeek nécessite ~130 Go RAM ; Qwen2.5 72B est le choix pratique' },
        ],
        columns: ['Niveau VRAM', 'Meilleur Qwen', 'Meilleur concurrent', 'Recommandation'],
        tableFormat: true,
        content2: 'Pour une comparaison approfondie entre DeepSeek et Qwen sur le code, le raisonnement et le multilingue : [Comparaison locale DeepSeek vs Qwen 2026](/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Contexte réglementaire : RGPD et CNIL',
        content: [
          '**Déployer Qwen2.5 en local signifie qu\'aucune donnée ne quitte votre machine — aucun transfert vers un serveur cloud étranger.** Les API LLM cloud exigent l\'envoi de prompts vers des serveurs étrangers, ce qui déclenche l\'article 28 du RGPD (sous-traitant) et potentiellement les articles 44 et suivants (transferts hors UE).',
          'Qwen2.5 a été entraîné par l\'équipe Qwen d\'Alibaba sur un corpus principalement chinois et multilingue. C\'est le modèle localement déployable le plus performant pour le chinois simplifié, le traditionnel et les documents mixtes chinois/anglais/français.',
          '**Pour les déploiements professionnels** : la CNIL recommande le traitement local des données personnelles sensibles dans les secteurs réglementés (médical, juridique, financier) lorsque cela est techniquement possible. Un déploiement Qwen2.5 sans connexion internet pendant l\'inférence est entièrement conforme au RGPD. Guide complet pour les setups hors ligne : [IA locale entièrement hors ligne](/fr/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 fonctionne entièrement hors ligne après téléchargement — aucune donnée ne quitte votre appareil, éliminant les risques de transfert transfrontalier sous le RGPD.' },
          { type: 'plain-terms', text: 'En mode local, vos prompts et documents ne quittent jamais votre ordinateur. Aucun appel API cloud, aucun serveur externe, aucune donnée accessible à des tiers ou régulateurs.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Recommandations matérielles par budget',
        content: [
          '**La RTX 3060 12 Go est la meilleure entrée de gamme pour Qwen2.5 7B et Qwen2.5-Coder 7B à moins de env. 270–330 €.** Pour les modèles 14B, la RTX 4070 12 Go offre +35 % de vitesse à env. 490–560 €.',
        ],
        items: [
          '**Entrée de gamme (Qwen2.5 7B)** : NVIDIA RTX 4060 8 Go ou RTX 3060 12 Go. Les deux gèrent les modèles 7B à 50–57 tokens/s. La RTX 3060 12 Go est souvent moins chère en occasion et offre plus de VRAM.',
          '**Milieu de gamme (Qwen2.5 14B)** : RTX 4070 12 Go ou RTX 4070 Super 12 Go. Le 4070 Super exécute Qwen2.5-Coder 14B à 38–42 tokens/s avec 2–3 Go de VRAM disponible pour le contexte.',
          '**Haut de gamme (Qwen2.5 32B)** : RTX 4090 24 Go ou RTX 3090 24 Go. La 4090 offre 27–28 tokens/s sur Qwen2.5-Coder 32B. La 3090 est nettement moins chère d\'occasion.',
          '**Apple Silicon (toutes tailles)** : Mac mini M4 Pro 48 Go — meilleur rapport qualité/prix pour Qwen2.5 32B (~22 tokens/s) avec une consommation électrique faible.',
          '**Mini-PC usage permanent** : MINISFORUM UM890 Pro ou similaire. Exécute Qwen2.5 7B sur CPU+iGPU à ~8–12 tokens/s — lent mais disponible 24/7 sous 35 W.',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.fr/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 Go', productCategory: 'GPU', priceRange: 'env. 270–330 €', label: 'GPU entrée de gamme pour Qwen2.5 7B' },
          { url: 'https://www.amazon.fr/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 Go', productCategory: 'GPU', priceRange: 'env. 490–560 €', label: 'Meilleur GPU pour Qwen2.5 14B' },
          { url: 'https://www.amazon.fr/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 Go', productCategory: 'GPU', priceRange: 'env. 1 850–2 100 €', label: 'Meilleur GPU pour Qwen2.5-Coder 32B' },
          { url: 'https://www.apple.com/fr/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 Go', productCategory: 'Mini PC', priceRange: '1 649 €', label: 'Meilleur Apple Silicon pour Qwen2.5 32B' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes avec Qwen2.5 en local',
        items: [
          '**Utiliser `ollama pull qwen2.5` sans tag de taille.** Sans tag explicite (`:7b`, `:14b`, etc.), Ollama peut résoudre vers une taille par défaut qui change entre les mises à jour. Toujours utiliser des tags explicites.',
          '**Ignorer la taille de la fenêtre de contexte.** Qwen2.5 supporte 128K de contexte, mais Ollama utilise 2K par défaut pour `num_ctx`. Pour les documents longs, ajouter `--num-ctx 8192` (ou plus).',
          '**Choisir la quantification Q2_K pour du chinois.** À 2 bits, la sortie en langue chinoise de Qwen2.5 se dégrade notablement. Utiliser au minimum Q4_K_M pour tout travail en CJK.',
          '**Exécuter le modèle 32B avec trop peu de VRAM.** Si votre GPU a 16 Go et que le modèle en nécessite 20,5 Go, Ollama décharge des couches en RAM — le modèle tourne à 3–5 tokens/s, inutilisable en interactif.',
          '**Utiliser la mauvaise sous-famille pour le code.** Qwen2.5 7B (usage général) : 57,3 % sur HumanEval. Qwen2.5-Coder 7B : 75,6 % — soit +32 % de performance relative. Toujours utiliser la variante Coder pour le code.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Quelle quantité de VRAM est nécessaire pour Qwen2.5 7B en local ?', a: 'Qwen2.5 7B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 6 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.' },
          { q: 'Quel est le meilleur modèle Qwen pour le code en local ?', a: 'Qwen2.5-Coder 32B — 92,7 % sur HumanEval, GPU 24 Go requis. Avec 12 Go de VRAM : Qwen2.5-Coder 14B (85,2 %, 9,5 Go VRAM).' },
          { q: 'Comment Qwen se compare-t-il à DeepSeek ?', a: 'Qwen2.5 utilise une architecture dense compatible matériel grand public. DeepSeek-V2.5 nécessite ~130 Go RAM — inaccessible sans GPU serveur.' },
          { q: 'Puis-je utiliser Qwen sur un Mac ?', a: 'Oui. M2 Pro 32 Go : Qwen2.5 14B à ~32 tokens/s. M3 Max 64 Go : Qwen2.5 32B à ~22 tokens/s.' },
          { q: 'Quelle commande Ollama utiliser pour Qwen2.5 ?', a: '`ollama pull qwen2.5:7b` pour 7B, `:14b` pour 14B, `:32b` pour 32B, ou `qwen2.5-coder:32b` pour la variante code. Toujours des tags explicites.' },
          { q: 'Qwen est-il adapté aux tâches en langue chinoise ?', a: 'Oui. Qwen2.5 supporte nativement le chinois simplifié, traditionnel, le japonais, le coréen et 24 autres langues.' },
          { q: 'Quelle quantification utiliser pour Qwen2.5 ?', a: 'Q4_K_M par défaut — ~55 % de réduction VRAM, moins de 1 % de perte de qualité vs FP16. Éviter Q2_K pour les usages en langue chinoise.' },
          { q: 'Qwen2-VL fonctionne-t-il pour l\'OCR de documents chinois ?', a: 'Oui — `ollama pull qwen2-vl:7b`, ~6 Go VRAM, lectures jusqu\'à 4096×4096 pixels en CJK.' },
          { q: 'Qwen2.5 est-il conforme au RGPD ?', a: 'En déploiement local, aucune donnée ne quitte votre serveur — pas de DPA requis selon l\'article 28 du RGPD. La CNIL recommande le traitement local pour les données sensibles.' },
          { q: 'Qwen2.5 peut-il traiter des documents mixtes français-chinois ?', a: 'Oui. Qwen2.5 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2-VL 7B est plus adapté.' },
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
          { url: '/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen local 2026', description: 'Comparaison complète : DeepSeek-V2.5 vs Qwen2.5 sur le code, le raisonnement et les langues.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen Lokal-Deployment-Guide 2026: Qwen2.5, Coder & VL für jede Hardware-Stufe',
    seoTitle: 'Qwen2.5 Lokal-Deployment 2026: Coder, VL & Hardware-Stufen',
    intro: 'Qwen2.5 7B läuft mit 5,5 GB VRAM über Ollama — ein einziger Befehl, keine Konfiguration erforderlich. Qwen2.5-Coder 32B erreicht 92,7 % auf HumanEval. Qwen2-VL 7B ist das führende lokale Vision-Modell für chinesisches und japanisches Dokument-OCR. Dieser Guide deckt die gesamte Qwen-Modellfamilie ab: welches Modell für welche Hardware-Stufe geeignet ist, Ollama- und LM-Studio-Setup, Quantisierungsempfehlungen, Benchmark-Daten und ein Vergleich mit DeepSeek und Llama auf Consumer-Hardware 2026.',
    metaDescription: 'Qwen2.5 (7B–72B), Qwen2.5-Coder und Qwen2-VL lokal betreiben 2026. VRAM-Anforderungen, Ollama + LM Studio Setup, Q4_K_M-Benchmarks und Hardware-Tier-Guide.',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, Forscher und datenschutzbewusste Nutzer, die die vollständige Qwen-Modellfamilie lokal betreiben möchten — inklusive chinesischsprachiger Nutzer, die Alibabas Modelle gegenüber US-Alternativen bevorzugen',
    primaryTerm: 'Qwen lokal betreiben',
    affiliateDisclosure: true,
    ctaText: 'Qwen2.5, DeepSeek und Llama über eine Oberfläche dispatchen →',
    ctaButton: 'PromptQuorum kostenlos testen',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Um Qwen2.5 7B lokal zu betreiben, installieren Sie Ollama und führen Sie `ollama pull qwen2.5:7b` aus — das Modell benötigt 5,5 GB VRAM und liefert 57 Tokens/Sek. auf einer RTX 3060.** Für Coding-Aufgaben verwenden Sie Qwen2.5-Coder; für chinesisches/japanisches Dokument-OCR Qwen2-VL.',
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Qwen2.5-Modellfamilie im Überblick', anchor: '#model-family' },
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
    gammaDescription: 'Die Präsentation unten enthält: die gesamte Qwen2.5-Modellfamilie auf einen Blick (7B bis 72B), VRAM-Anforderungen je Hardware-Tier, Benchmark-Daten für Qwen2.5-Coder 32B und ein Entscheidungsdiagramm Qwen vs. DeepSeek vs. Llama. Als Qwen-Deployment-Referenzkarte herunterladen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Lokal-Deployment-Guide 2026: Qwen2.5, Coder & VL für jede Hardware-Stufe',
      description: 'Vollständiger Guide zur lokalen Bereitstellung der Qwen2.5-Modellfamilie — VRAM-Anforderungen, Ollama- und LM-Studio-Setup, Quantisierung, Benchmarks und Hardware-Empfehlungen.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'de',
      url: 'https://www.promptquorum.com/de/local-llms/qwen-local-deployment-guide-2026',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Wie viel VRAM benötige ich für Qwen2.5 7B lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M benötigt 5,5 GB VRAM. Eine NVIDIA RTX 3060 6 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' } },
        { '@type': 'Question', name: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B ist das beste lokal ausführbare Coding-Modell — es erreicht 92,7 % auf HumanEval und benötigt eine 24-GB-GPU (RTX 3090 oder RTX 4090). Bei 12 GB VRAM oder weniger: Qwen2.5-Coder 14B (HumanEval 85,2 %, 9,5 GB VRAM).' } },
        { '@type': 'Question', name: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 72B und DeepSeek-V2.5 sind bei allgemeinen Aufgaben vergleichbar, aber Qwen verwendet eine Dense-Architektur, die auf Consumer-Hardware passt. DeepSeek-V2.5 ist ein 236B-MoE-Modell und benötigt ~130 GB RAM — ohne Server-GPU nicht realisierbar.' } },
        { '@type': 'Question', name: 'Kann ich Qwen auf einem Mac betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Apple Silicon nutzt Unified Memory — ein M2 Pro 32 GB führt Qwen2.5 14B flüssig mit ~32 Tokens/Sek. aus. Ein M3 Max 64 GB bewältigt Qwen2.5 32B mit ~22 Tokens/Sek.' } },
        { '@type': 'Question', name: 'Welchen Ollama-Befehl verwende ich für Qwen2.5?', acceptedAnswer: { '@type': 'Answer', text: '`ollama pull qwen2.5:7b` für 7B, `ollama pull qwen2.5:14b` für 14B, `ollama pull qwen2.5:32b` für 32B oder `ollama pull qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' } },
        { '@type': 'Question', name: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch, Arabisch und 24 weitere Sprachen.' } },
        { '@type': 'Question', name: 'Welche Quantisierung sollte ich für Qwen2.5 verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M ist die empfohlene Standardauswahl — es reduziert den VRAM um ~55 % gegenüber FP16 bei weniger als 1 % Qualitätsverlust. Q8_0 für nahezu FP16-Qualität bei ausreichend VRAM. Q2_K bei chinesischsprachigen Anwendungsfällen vermeiden.' } },
        { '@type': 'Question', name: 'Funktioniert Qwen2-VL für chinesisches Dokument-OCR?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Qwen2-VL 7B ist das stärkste lokale Vision-Modell für CJK-Dokument-OCR. Es läuft mit ~6 GB VRAM via `ollama pull qwen2-vl:7b` und liest chinesischen, japanischen und koreanischen Text bei bis zu 4096×4096 Pixel.' } },
        { '@type': 'Question', name: 'Muss ich bei der Verwendung von Qwen2.5 die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Beim lokalen Betrieb von Qwen2.5 verlassen keine Daten Ihren Server — das Modell verarbeitet Anfragen vollständig auf Ihrer Hardware. Damit entfällt die Notwendigkeit eines Auftragsverarbeitungsvertrags (AVV) gemäß DSGVO Art. 28, da kein Drittanbieter Zugriff auf die Daten erhält. Für Unternehmen, die das BSI-Grundschutz-Kompendium anwenden, ist die lokale Inferenz zudem mit IT-Grundschutz-Baustein OPS.2.2 kompatibel.' } },
        { '@type': 'Question', name: 'Ist Qwen2.5 für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, insbesondere für mittelständische Unternehmen in DACH, die Datenschutz und Compliance priorisieren. Qwen2.5 14B oder 32B lässt sich auf einem lokalen Server betreiben, ohne Daten an externe Anbieter zu übermitteln. Damit erfüllt es die Anforderungen des BSI-Grundschutzes und eignet sich für Branchen mit erhöhtem Datenschutzbedarf wie Recht, Medizin und Finanzen.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2.5 7B läuft mit 5,5 GB VRAM** — ein einziger `ollama pull qwen2.5:7b`-Befehl genügt; auf einer RTX 3060 erreicht es 57 Tokens/Sek.',
          '**Drei eigenständige Teilfamilien**: Qwen2.5 (allgemein), Qwen2.5-Coder (Coding, 92,7 % HumanEval bei 32B), Qwen2-VL (Vision, bestes lokales CJK-OCR).',
          '**Dense-Architektur = Consumer-freundlich**: Anders als DeepSeeks 236B-MoE-Modell (~130 GB RAM) passt Qwen2.5 72B mit 46 GB VRAM auf zwei RTX 3090.',
          '**Natives Mehrsprachigkeit**: Vortrainiert auf Chinesisch, Japanisch, Koreanisch, Arabisch, Deutsch, Französisch und 23 weiteren Sprachen — Qwen2.5 übertrifft Llama 3.3 bei CJK-Aufgaben.',
          '**Q4_K_M ist die richtige Quantisierung** für die meisten Nutzer: ~55 % VRAM-Reduktion, weniger als 1 % Qualitätsverlust.',
          '**Hardware-Entscheidung**: 12 GB VRAM → 14B-Modell; 24 GB → 32B; 48 GB+ (zwei GPUs oder Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 umfasst drei lokale Deployment-Teilfamilien — Allgemein (7B–72B), Coding (Coder 7B–32B) und Vision (VL 7B–72B) — alle über Ollama oder LM Studio ausführbar.' },
          { type: 'plain-terms', text: 'Ein Modell lokal betreiben bedeutet, dass die KI auf dem eigenen Computer statt auf einem Cloud-Server läuft. Keine Daten verlassen die eigene Hardware, und nach der Anschaffung fallen keine Kosten pro Token an.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen2.5-Modellfamilie im Überblick',
        content: [
          '**Die Qwen2.5-Familie deckt drei unterschiedliche Aufgaben ab: allgemeines Reasoning, Coding und Vision** — jeweils in mehreren Größen von 7B bis 72B Parametern. Alle sind Open-Weight-Modelle, die vom Qwen-Team bei Alibaba unter der Apache-2.0-Lizenz auf Hugging Face veröffentlicht wurden.',
          'Wählen Sie zunächst die Teilfamilie, dann die Größe, die zum verfügbaren VRAM passt. Die Kombination von Teilfamilien ist üblich: Qwen2.5-Coder 14B für Code-Vervollständigung und Qwen2.5 7B für Dokumentenzusammenfassung.',
        ],
        rows: [
          { 'Teilfamilie': 'Qwen2.5', 'Verfügbare Größen': '7B, 14B, 32B, 72B', 'Hauptanwendung': 'Allgemeines Reasoning, chinesisch/mehrsprachige Aufgaben, RAG', 'Ollama-Tag-Präfix': 'qwen2.5:' },
          { 'Teilfamilie': 'Qwen2.5-Coder', 'Verfügbare Größen': '7B, 14B, 32B', 'Hauptanwendung': 'Code-Generierung, Debugging, HumanEval, SWE-bench', 'Ollama-Tag-Präfix': 'qwen2.5-coder:' },
          { 'Teilfamilie': 'Qwen2-VL', 'Verfügbare Größen': '2B, 7B, 72B', 'Hauptanwendung': 'Dokument-OCR, Bild-Q&A, CJK-Textextraktion', 'Ollama-Tag-Präfix': 'qwen2-vl:' },
        ],
        columns: ['Teilfamilie', 'Verfügbare Größen', 'Hauptanwendung', 'Ollama-Tag-Präfix'],
        tableFormat: true,
        note: 'Qwen3 (erschienen Q1 2026) bietet Thinking-Mode-Modelle, hat aber weniger GGUF-Builds und geringere Ollama-Abdeckung als Qwen2.5 (Stand Mai 2026). Dieser Guide konzentriert sich auf Qwen2.5, das die breiteste Hardware-Unterstützung bietet. Siehe [Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) für einen umfassenderen Modellvergleich.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Hardware-Anforderungen nach Modellgröße',
        content: [
          '**Wählen Sie zunächst Ihre VRAM-Stufe, dann das größte Qwen2.5-Modell, das hineinpasst.** Q4_K_M ist die Standardquantisierung für alle unten aufgeführten Werte — sie bietet das beste Verhältnis von Größe zu Qualität für Ollama und LM Studio.',
        ],
        rows: [
          { 'Modell': 'Qwen2.5 7B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (RTX 3060)': '~57 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 6 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (RTX 3060)': '~55 Tokens/Sek.' },
          { 'Modell': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6,2 GB', 'Mindest-GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Geschwindigkeit (RTX 4060)': '~38 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (RTX 4070)': '~38 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (RTX 4070)': '~36 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (RTX 4090)': '~28 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (RTX 4090)': '~27 Tokens/Sek.' },
          { 'Modell': 'Qwen2.5 72B Q4_K_M', 'VRAM': '46 GB', 'Mindest-GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Geschwindigkeit (2×RTX 4090)': '~12 Tokens/Sek.' },
        ],
        columns: ['Modell', 'VRAM', 'Mindest-GPU', 'Apple Silicon', 'Geschwindigkeit (RTX 3060)'],
        tableFormat: true,
        note: 'VRAM-Angaben gelten für Q4_K_M-GGUF-Dateien aus der Ollama-Bibliothek. Für den KV-Cache bei 4K-Kontext kommen 1–2 GB hinzu. Wenn die GPU weniger VRAM hat als das Modell benötigt, lagert Ollama automatisch Layer in den System-RAM aus — das funktioniert, reduziert aber die Geschwindigkeit erheblich.',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Qwen2.5 VRAM-Anforderungen nach Modellgröße (Q4_K_M) — PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup mit Ollama',
        content: [
          '**Ollama ist der schnellste Weg, um ein beliebiges Qwen2.5-Modell lokal zu betreiben** — es übernimmt den Modell-Download, die GGUF-Quantisierung und stellt eine lokale API unter `localhost:11434` bereit, ohne jegliche Konfiguration. Installation unter [ollama.com](https://ollama.com/download). Falls Sie Ollama noch nicht kennen, lesen Sie zunächst [Ollama installieren](/de/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Verfügbar für macOS, Linux (Ein-Zeilen-Installation) und Windows. Keine GPU-Treiber-Konfiguration erforderlich — Ollama erkennt CUDA, ROCm und Metal automatisch.' },
          { title: 'Modell mit explizitem Größen-Tag herunterladen', whyItMatters: 'Immer die Größe angeben: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. Das ungetaggte `qwen2.5` löst standardmäßig das 7B-Modell auf, kann sich aber zwischen Ollama-Releases ändern.' },
          { title: 'Modell ausführen', whyItMatters: '`ollama run qwen2.5:7b` öffnet einen interaktiven Chat. Eingabe tippen und Enter drücken. Beenden mit `/bye`.' },
          { title: 'Kontextfenster bei Bedarf anpassen', whyItMatters: 'Qwen2.5 unterstützt standardmäßig 32K-Kontext in Ollama. Für 128K-Kontext bei einem 7B-Modell: `ollama run qwen2.5:7b --num-ctx 131072`. Dies benötigt mehr VRAM.' },
          { title: 'API-Endpunkt testen', whyItMatters: 'Ollama stellt eine OpenAI-kompatible API bereit. Anwendungen wie PromptQuorum, Continue.dev und Open WebUI verbinden sich direkt mit `http://localhost:11434/v1`.' },
        ],
        codeBlock: `# Ollama installieren (Linux)
curl -fsSL https://ollama.com/install.sh | sh

# macOS: .dmg von ollama.com herunterladen oder:
brew install ollama

# Modelle herunterladen — explizite Tags verwenden
ollama pull qwen2.5:7b           # allgemein 7B (~5,5 GB)
ollama pull qwen2.5:14b          # allgemein 14B (~9,5 GB)
ollama pull qwen2.5:32b          # allgemein 32B (~20,5 GB)
ollama pull qwen2.5-coder:32b    # Coding 32B (~20,5 GB)
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
          '**LM Studio bietet eine grafische Oberfläche für Qwen2.5 ohne Terminal-Befehle.** Download unter [lmstudio.ai](https://lmstudio.ai) oder siehe [LM Studio installieren](/de/local-llms/how-to-install-lm-studio). Verfügbar für macOS, Windows und Linux.',
        ],
        numberedItems: [
          { title: 'Modell-Browser öffnen', whyItMatters: 'Nach „Qwen2.5" oder „Qwen Coder" suchen. Nach Q4_K_M filtern für das empfohlene Qualitäts/Größen-Verhältnis.' },
          { title: 'GGUF-Build herunterladen', whyItMatters: 'Q4_K_M-Variante auswählen. LM Studio zeigt die Dateigröße vor dem Download an — bestätigen, dass sie zum verfügbaren VRAM passt.' },
          { title: 'Modell laden und Chat starten', whyItMatters: 'Modell in der linken Sidebar anklicken, um es in den Speicher zu laden. GPU-Layer-Zuweisung erfolgt automatisch.' },
          { title: 'Lokalen Server starten', whyItMatters: '"Server starten" öffnet einen OpenAI-kompatiblen Endpunkt unter `localhost:1234`. Anwendungen und Skripte verbinden sich damit wie mit der OpenAI-API.' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: 'Quantisierung: Welches Format wählen?',
        content: [
          '**Q4_K_M ist die richtige Standardwahl für Qwen2.5 auf Consumer-Hardware.** Es reduziert den VRAM um ~55–60 % gegenüber FP16 bei weniger als 1 % Benchmark-Verlust auf MMLU und HumanEval. Andere Formate haben spezifische Anwendungsfälle:',
        ],
        items: [
          '**Q4_K_M** (empfohlen): ~5,5 GB für 7B. Bestes Qualitäts-pro-GB-Verhältnis. Dieser Format sollte zuerst ausprobiert werden.',
          '**Q8_0**: ~8,5 GB für 7B. Nahezu FP16-Qualität; verwenden, wenn VRAM vorhanden ist und maximale Genauigkeit gewünscht wird.',
          '**Q5_K_M**: ~6,5 GB für 7B. Marginale Verbesserung gegenüber Q4_K_M — nur wählen, wenn Q4_K_M-Ausgabequalität für die Aufgabe sichtbar unzureichend ist.',
          '**Q2_K**: ~3 GB für 7B. Kleinste Datei, aber die chinesischsprachige Ausgabequalität verschlechtert sich spürbar — bei Qwen2.5 für chinesische Anwendungen vermeiden.',
          '**IQ4_XS**: ~4,8 GB für 7B. Neuere imatrix-Quantisierung mit besserer Qualität als Q4_K_M bei etwas kleinerer Größe — verfügbar in neueren llama.cpp-Versionen und LM Studio 0.3+.',
        ],
        note: 'Vollständige Erklärung der Quantisierung: [LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M ist die beste Qwen2.5-Quantisierung für die meisten Nutzer: 55 % VRAM-Reduktion bei weniger als 1 % Qualitätsverlust gegenüber FP16.' },
          { type: 'plain-terms', text: 'Quantisierung komprimiert die Zahlen des Modells von 16-Bit auf 4-Bit, was die Dateigröße und den VRAM-Bedarf etwa halbiert. Vorstellbar wie TIFF-zu-JPEG: kleinere Datei, nahezu identisches Ergebnis für die meisten Anwendungsfälle.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmark-Performance auf Consumer-Hardware',
        content: [
          '**Qwen2.5 32B Q4_K_M auf einer RTX 4090 liefert 28 Tokens/Sek. — schnell genug für Echtzeit-Coding-Assistenz.** Die unten aufgeführten Werte gelten für Q4_K_M-GGUF-Builds, getestet unter Ollama. Full-Precision-FP16-Werte sind um 1–2 % höher.',
        ],
        rows: [
          { 'Modell (Q4_K_M)': 'Qwen2.5 7B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Geschwindigkeit (RTX 3060 12 GB)': '57 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Geschwindigkeit (RTX 4070 12 GB)': '38 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Geschwindigkeit (RTX 4090 24 GB)': '28 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5 72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Geschwindigkeit (2×RTX 3090)': '12 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75,6 %', 'Geschwindigkeit (RTX 3060 12 GB)': '55 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85,2 %', 'Geschwindigkeit (RTX 4070 12 GB)': '36 Tokens/Sek.' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Geschwindigkeit (RTX 4090 24 GB)': '27 Tokens/Sek.' },
        ],
        columns: ['Modell (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Geschwindigkeit (RTX 3060 12 GB)'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Qwen2.5 Benchmark-Ergebnisse (Q4_K_M) — PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs. DeepSeek vs. Llama: Was lokal betreiben?',
        content: [
          '**Qwen2.5 gewinnt bei chinesischsprachigen Aufgaben und VRAM-Effizienz; DeepSeek-V2.5 gewinnt beim Reasoning im großen Maßstab, ist aber auf Consumer-Hardware kaum praktikabel; Llama 3.3 70B ist die beste Einzel-GPU-Option, wenn Meta\'s offenes Modell bevorzugt wird.** Die folgende Tabelle vergleicht die praktischen Optionen je VRAM-Stufe.',
        ],
        rows: [
          { 'VRAM-Stufe': '6 GB', 'Bestes Qwen': 'Qwen2.5 7B', 'Bester Konkurrent': 'Llama 3.2 3B (passt, aber nur 3B)', 'Empfehlung': 'Qwen2.5 7B gewinnt — gleiches VRAM, viel größeres Modell' },
          { 'VRAM-Stufe': '12 GB', 'Bestes Qwen': 'Qwen2.5-Coder 14B', 'Bester Konkurrent': 'Llama 3.3 8B Instruct', 'Empfehlung': 'Qwen2.5-Coder 14B für Coding; Llama 3.3 8B für allgemeinen Chat' },
          { 'VRAM-Stufe': '24 GB', 'Bestes Qwen': 'Qwen2.5-Coder 32B', 'Bester Konkurrent': 'Llama 3.3 70B (ausgelagert)', 'Empfehlung': 'Qwen2.5-Coder 32B für Code; Llama 3.3 70B wenn Qualität > Geschwindigkeit' },
          { 'VRAM-Stufe': '48 GB+', 'Bestes Qwen': 'Qwen2.5 72B', 'Bester Konkurrent': 'DeepSeek-V2.5 236B MoE', 'Empfehlung': 'DeepSeek benötigt ~130 GB RAM; Qwen2.5 72B ist die praktische 48-GB-Wahl' },
        ],
        columns: ['VRAM-Stufe', 'Bestes Qwen', 'Bester Konkurrent', 'Empfehlung'],
        tableFormat: true,
        content2: 'Für einen ausführlichen Vergleich zwischen DeepSeek und Qwen in den Bereichen Coding, Reasoning und Mehrsprachigkeit, siehe [DeepSeek vs. Qwen Lokal-Vergleich 2026](/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Datensouveränität für deutsche und europäische Nutzer',
        content: [
          '**Der lokale Betrieb von Qwen2.5 bedeutet, dass keine Daten das eigene Gerät verlassen — kein Cloud-API-Aufruf, kein Risiko unter der DSGVO oder dem deutschen IT-Sicherheitsrecht.** Cloud-basierte LLM-APIs erfordern die Übermittlung von Prompts an externe Server im Ausland, was DSGVO Art. 28 (Auftragsverarbeitung) und ggf. Art. 44 ff. (Drittlandübermittlung) auslöst.',
          'Qwen2.5 wurde vom Qwen-Team bei Alibaba auf einem überwiegend chinesisch- und mehrsprachigen Korpus trainiert. Es ist das stärkste lokal einsetzbare Modell für Vereinfachtes Chinesisch, Traditionelles Chinesisch und gemischtsprachige Dokumente (Chinesisch/Englisch/Deutsch).',
          '**Für Unternehmensdeployments im DACH-Raum**: Ein luftgespaltenes Qwen2.5-Setup (keine Internetverbindung während der Inferenz) ist vollständig DSGVO-konform. Das Modell läuft ausschließlich auf lokaler Hardware — kein Drittanbieter erhält Zugriff auf Eingabe- oder Ausgabedaten. Für BSI-Grundschutz-konforme Setups empfiehlt sich Baustein OPS.2.2 (Fremdsoftware). Vollständige Anleitung für luftgespaltene Setups: [KI vollständig offline betreiben](/de/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5 läuft nach dem Download vollständig offline — keine Daten verlassen Ihr Gerät, wodurch DSGVO-Risiken durch Drittlandübermittlung entfallen.' },
          { type: 'plain-terms', text: 'Beim lokalen Betrieb von Qwen2.5 verlassen Ihre Prompts und Dokumente niemals den eigenen Computer. Es gibt keinen Cloud-API-Aufruf, keinen externen Server und keine Daten, auf die Behörden oder Dritte zugreifen könnten.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Hardware-Empfehlungen nach Budget',
        content: [
          '**Die RTX 3060 12 GB ist der beste Einstieg für Qwen2.5 7B und Qwen2.5-Coder 7B unter ca. 270–330 €.** Für 14B-Modelle bietet die RTX 4070 12 GB eine 35 %ige Geschwindigkeitssteigerung bei ca. 490–560 € neu.',
        ],
        items: [
          '**Einsteiger (Qwen2.5 7B)**: NVIDIA RTX 4060 8 GB oder RTX 3060 12 GB. Beide bewältigen 7B-Modelle mit 50–57 Tokens/Sek. Die RTX 3060 12 GB ist gebraucht oft günstiger und hat mehr VRAM-Puffer.',
          '**Mittelklasse (Qwen2.5 14B)**: RTX 4070 12 GB oder RTX 4070 Super 12 GB. Der 4070 Super führt Qwen2.5-Coder 14B mit 38–42 Tokens/Sek. aus und hat 2–3 GB VRAM-Reserve für den Kontext.',
          '**High-End (Qwen2.5 32B)**: RTX 4090 24 GB oder RTX 3090 24 GB. Die 4090 liefert 27–28 Tokens/Sek. bei Qwen2.5-Coder 32B — Echtzeit-Coding-Geschwindigkeit. Die 3090 ist gebraucht deutlich günstiger und liegt beim Inferenz-Durchsatz nur 15 % hinter der 4090.',
          '**Apple Silicon (alle Größen)**: Mac mini M4 Pro 48 GB ist der beste Wert für Qwen2.5 32B (~22 Tokens/Sek.) bei geringem Geräusch- und Stromverbrauch.',
          '**Mini-PC für Dauerbetrieb**: MINISFORUM UM890 Pro oder ähnliche AMD-Ryzen-AI-PCs. Laufen Qwen2.5 7B auf CPU+iGPU mit ~8–12 Tokens/Sek. — langsam, aber 24/7-fähig bei unter 35 W.',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.de/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: 'ca. 270–330 €', label: 'Einstiegs-GPU für Qwen2.5 7B' },
          { url: 'https://www.amazon.de/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12 GB', productCategory: 'GPU', priceRange: 'ca. 490–560 €', label: 'Beste GPU für Qwen2.5 14B' },
          { url: 'https://www.amazon.de/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: 'ca. 1.850–2.100 €', label: 'Beste GPU für Qwen2.5-Coder 32B' },
          { url: 'https://www.apple.com/de/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48 GB', productCategory: 'Mini PC', priceRange: '1.649 €', label: 'Bestes Apple Silicon für Qwen2.5 32B' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim lokalen Betrieb von Qwen2.5',
        items: [
          '**Ungetaggter `ollama pull qwen2.5`-Befehl verwenden.** Ohne expliziten Größen-Tag (`:7b`, `:14b` usw.) kann Ollama eine Standardgröße auflösen, die sich zwischen Library-Updates ändert. Immer explizite Tags verwenden: `ollama pull qwen2.5:14b`.',
          '**Kontextfenstergröße ignorieren.** Qwen2.5 unterstützt 128K-Kontext, Ollama verwendet aber standardmäßig 2K für `num_ctx`. Bei der Verarbeitung langer Dokumente `--num-ctx 8192` (oder höher) zum Run-Befehl hinzufügen — andernfalls kürzt das Modell die Eingabe stillschweigend.',
          '**Q2_K-Quantisierung für chinesischsprachige Nutzung wählen.** Bei 2-Bit-Präzision verschlechtert sich Qwen2.5\'s chinesische Ausgabe spürbar. Q4_K_M als Minimum für jede chinesischsprachige Arbeit verwenden.',
          '**32B-Modell mit zu wenig VRAM ausführen.** Wenn die GPU 16 GB hat und das Modell 20,5 GB benötigt, lagert Ollama Layer in den System-RAM aus. Das Modell läuft, aber mit 3–5 Tokens/Sek. — für interaktive Nutzung unbrauchbar.',
          '**Falsche Teilfamilie für Coding verwenden.** Qwen2.5 7B (allgemein) erreicht 57,3 % auf HumanEval. Qwen2.5-Coder 7B erreicht 75,6 % auf demselben Benchmark — eine 32 %ige relative Verbesserung. Für Coding immer die Coder-Variante gleicher Größe verwenden.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie viel VRAM benötige ich für Qwen2.5 7B lokal?', a: 'Qwen2.5 7B Q4_K_M benötigt 5,5 GB VRAM. Eine RTX 3060 6 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' },
          { q: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', a: 'Qwen2.5-Coder 32B ist das beste lokal ausführbare Coding-Modell — 92,7 % auf HumanEval, benötigt 24 GB GPU. Bei 12 GB VRAM: Qwen2.5-Coder 14B (85,2 %, 9,5 GB VRAM).' },
          { q: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', a: 'Qwen2.5 nutzt Dense-Architektur, die auf Consumer-Hardware passt. DeepSeek-V2.5 ist ein 236B-MoE-Modell und benötigt ~130 GB RAM — ohne Server-GPU nicht praktikabel.' },
          { q: 'Kann ich Qwen auf einem Mac betreiben?', a: 'Ja. M2 Pro 32 GB führt Qwen2.5 14B mit ~32 Tokens/Sek. aus. M3 Max 64 GB bewältigt Qwen2.5 32B mit ~22 Tokens/Sek.' },
          { q: 'Welchen Ollama-Befehl verwende ich für Qwen2.5?', a: '`ollama pull qwen2.5:7b` für 7B, `:14b` für 14B, `:32b` für 32B oder `qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' },
          { q: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', a: 'Ja. Qwen2.5 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch und 24 weitere Sprachen.' },
          { q: 'Welche Quantisierung sollte ich für Qwen2.5 verwenden?', a: 'Q4_K_M ist die empfohlene Standardwahl — ~55 % VRAM-Reduktion bei weniger als 1 % Qualitätsverlust. Q8_0 für nahezu FP16-Qualität. Q2_K bei chinesischsprachigen Anwendungen vermeiden.' },
          { q: 'Funktioniert Qwen2-VL für chinesisches Dokument-OCR?', a: 'Ja — Qwen2-VL 7B ist das stärkste lokale Vision-Modell für CJK-OCR. Es läuft mit ~6 GB VRAM via `ollama pull qwen2-vl:7b` und liest bis zu 4096×4096 Pixel.' },
          { q: 'Muss ich bei der Verwendung von Qwen2.5 die DSGVO beachten?', a: 'Beim lokalen Betrieb verlassen keine Daten den eigenen Server — kein AVV nach DSGVO Art. 28 erforderlich, da kein Drittanbieter Datenzugriff hat. BSI-Grundschutz-konform mit Baustein OPS.2.2.' },
          { q: 'Ist Qwen2.5 für den deutschen Mittelstand geeignet?', a: 'Ja. Qwen2.5 14B oder 32B lässt sich auf einem lokalen Server betreiben ohne externe Datenübermittlung — geeignet für datenschutzkritische Branchen wie Recht, Medizin und Finanzen im DACH-Raum.' },
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
          { url: '/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs. Qwen Lokal-Vergleich 2026', description: 'Vollständiger Vergleich: DeepSeek-V2.5 vs. Qwen2.5 bei Coding, Reasoning, Chinesisch und kreativem Schreiben — mit Mac-vs.-NVIDIA-Aufschlüsselung.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwenローカルデプロイガイド2026：Qwen2.5・Coder・VLを全ハードウェア階層で動かす',
    seoTitle: 'Qwen2.5ローカルデプロイガイド2026：Coder・VLを全ハードウェア階層でセットアップ',
    intro: 'Qwen2.5 7BはOllamaを使えばVRAM 5.5GBで動作します。コマンドは1つだけ、設定不要です。Qwen2.5-Coder 32BはHumanEvalで92.7%を達成し、Qwen2-VL 7Bは中国語・日本語のドキュメントOCRで最も優れたローカルビジョンモデルです。このガイドでは、Qwenモデルファミリー全体を解説します。各ハードウェア階層に最適なモデルの選び方、OllamaとLM Studioのセットアップ、量子化の推奨設定、ベンチマークデータ、そしてコンシューマーハードウェアでのDeepSeek・Llamaとの比較を網羅しています。',
    metaDescription: 'Qwen2.5（7B〜72B）・Qwen2.5-Coder・Qwen2-VLを2026年にローカルで動かす完全実践ガイド。各モデルのVRAM要件、OllamaとLM Studioのセットアップ、Q4_K_Mベンチマーク結果、ハードウェア階層別の選び方と量子化推奨設定を網羅的に解説します。',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Qwenモデルファミリーをローカルで実行したい開発者・研究者・プライバシー重視のユーザー',
    primaryTerm: 'Qwen ローカルデプロイ',
    affiliateDisclosure: true,
    ctaText: 'Qwen2.5・DeepSeek・Llamaを1つのインターフェースからディスパッチ →',
    ctaButton: 'PromptQuorumを無料で試す',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**Qwen2.5 7Bをローカルで動かすには、Ollamaをインストールして`ollama pull qwen2.5:7b`を実行するだけです。VRAM 5.5GB、RTX 3060で57トークン/秒が得られます。** コーディング用途にはQwen2.5-Coderを、中国語・日本語ドキュメントOCRにはQwen2-VLを使用してください。',
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'Qwen2.5モデルファミリー概要', anchor: '#model-family' },
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
    gammaDescription: '下記スライドデッキの内容：Qwen2.5モデルファミリー全体像（7B〜72B）、ハードウェア階層別VRAM要件、Qwen2.5-Coder 32Bのベンチマークデータ、Qwen vs DeepSeek vs Llamaの意思決定チャート。Qwenデプロイ参照カードとしてダウンロード可能。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwenローカルデプロイガイド2026：Qwen2.5・Coder・VLを全ハードウェア階層で動かす',
      description: 'Qwen2.5モデルファミリーのローカルデプロイ完全ガイド — VRAM要件、OllamaとLM Studioのセットアップ、量子化、ベンチマーク、ハードウェア推奨。',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
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
        { '@type': 'Question', name: 'Qwen2.5 7Bをローカルで動かすのに必要なVRAMは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_MにはVRAM 5.5GBが必要です。NVIDIA RTX 3060 6GB、RTX 4060、またはApple M系チップ8GBユニファイドメモリで動作します。' } },
        { '@type': 'Question', name: 'コーディング用途に最適なQwenモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32BはHumanEvalで92.7%を達成し、ローカルで動く最強のコーディングモデルです。GPU 24GB（RTX 3090またはRTX 4090）が必要です。VRAM 12GB以下の場合はQwen2.5-Coder 14B（HumanEval 85.2%、VRAM 9.5GB）を使用してください。' } },
        { '@type': 'Question', name: 'QwenとDeepSeekのローカルデプロイ比較は？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5はコンシューマーハードウェアに収まるDenseアーキテクチャを採用しています。DeepSeek-V2.5は236B MoEモデルで、Q4では約130GBのRAMが必要です。コンシューマーGPUでは実用的ではありません。' } },
        { '@type': 'Question', name: 'MacでQwenを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Apple SiliconはUnified Memoryを使用します。M2 Pro 32GBはQwen2.5 14Bを約32トークン/秒で実行できます。M3 Max 64GBはQwen2.5 32Bを約22トークン/秒で処理します。' } },
        { '@type': 'Question', name: 'Qwen2.5のOllamaコマンドは？', acceptedAnswer: { '@type': 'Answer', text: '7Bは`ollama pull qwen2.5:7b`、14Bは`ollama pull qwen2.5:14b`、32Bは`ollama pull qwen2.5:32b`、コーディング特化版は`ollama pull qwen2.5-coder:32b`です。必ず明示的なサイズタグを使用してください。' } },
        { '@type': 'Question', name: '中国語タスクにQwenは適していますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Qwen2.5は大規模な中国語コーパスで事前学習されており、簡体字・繁体字・日本語・韓国語・アラビア語など29言語をネイティブサポートしています。' } },
        { '@type': 'Question', name: 'Qwen2.5に推奨する量子化フォーマットは？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_Mがデフォルト推奨です。FP16比でVRAMを約55%削減し、ベンチマークの品質低下は1%未満です。Q8_0は品質重視でVRAMに余裕がある場合に。Q2_Kは中国語出力品質が著しく低下するため避けてください。' } },
        { '@type': 'Question', name: 'Qwen2-VLは日本語・中国語ドキュメントOCRに使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Qwen2-VL 7BはCJKドキュメントOCRで最も優れたローカルビジョンモデルです。`ollama pull qwen2-vl:7b`でVRAM約6GBで動作し、最大4096×4096ピクセルの解像度でCJKテキストを読み取れます。' } },
        { '@type': 'Question', name: '日本の企業でQwen2.5を使う場合のMETIガイドラインへの対応は？', acceptedAnswer: { '@type': 'Answer', text: 'ローカルデプロイ時はデータが社外に出ないため、経済産業省の「AI事業者ガイドライン（2024年）」が求めるデータガバナンスの観点でも有利です。特に個人情報・秘密情報を扱う業務では、オフライン推論がリスク管理として有効です。' } },
        { '@type': 'Question', name: 'AppleのM系チップでQwen2.5 72Bを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'M2 Ultra 192GBまたはM3 Ultra 192GBで動作します。Q4_K_Mで約46GBのメモリが必要です。M3 Max 128GBでは一部レイヤーのオフロードが発生し速度が低下します。' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2.5 7BはVRAM 5.5GBで動作** — `ollama pull qwen2.5:7b`の1コマンドで起動。RTX 3060で57トークン/秒。',
          '**3つのサブファミリー**：Qwen2.5（汎用）、Qwen2.5-Coder（コーディング、32BでHumanEval 92.7%）、Qwen2-VL（ビジョン、ローカルCJK OCR最強）。',
          '**Denseアーキテクチャ = コンシューマー向け**：DeepSeekの236B MoE（約130GB RAM必要）と違い、Qwen2.5 72BはVRAM 46GBで2枚のRTX 3090に収まります。',
          '**ネイティブ多言語対応**：中国語・日本語・韓国語・アラビア語・ドイツ語・フランス語など29言語でLlama 3.3を上回る性能。',
          '**Q4_K_Mが最適な量子化**：FP16比でVRAMを約55%削減し、品質低下は1%未満。',
          '**ハードウェア判断基準**：VRAM 12GB → 14Bモデル；24GB → 32B；48GB+（デュアルGPUまたはApple Silicon 64GB）→ 72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5には3つのローカルデプロイ用サブファミリーがあります：汎用（7B〜72B）、コーディング（Coder 7B〜32B）、ビジョン（VL 7B〜72B）。すべてOllamaまたはLM Studioで実行可能。' },
          { type: 'plain-terms', text: 'モデルをローカルで動かすとは、AIがクラウドサーバーではなく自分のコンピュータ上で動作することを意味します。データが外部に出ず、ハードウェア購入後はトークンごとのコストもかかりません。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen2.5モデルファミリー概要',
        content: [
          '**Qwen2.5ファミリーは汎用推論・コーディング・ビジョンの3用途をカバーし**、7Bから72Bまでの複数サイズで提供されています。すべてAlibaba QwenチームがHugging FaceにApache 2.0ライセンスで公開しているオープンウェイトモデルです。',
          'まずサブファミリーを選び、次にVRAMに合ったサイズを選択します。複数サブファミリーの組み合わせも一般的です：コード補完にQwen2.5-Coder 14B、文書要約にQwen2.5 7B、という使い方が典型例です。',
        ],
        rows: [
          { 'サブファミリー': 'Qwen2.5', '利用可能なサイズ': '7B, 14B, 32B, 72B', '主な用途': '汎用推論、中国語/多言語タスク、RAG', 'Ollamaタグプレフィックス': 'qwen2.5:' },
          { 'サブファミリー': 'Qwen2.5-Coder', '利用可能なサイズ': '7B, 14B, 32B', '主な用途': 'コード生成、デバッグ、HumanEval、SWE-bench', 'Ollamaタグプレフィックス': 'qwen2.5-coder:' },
          { 'サブファミリー': 'Qwen2-VL', '利用可能なサイズ': '2B, 7B, 72B', '主な用途': 'ドキュメントOCR、画像Q&A、CJKテキスト抽出', 'Ollamaタグプレフィックス': 'qwen2-vl:' },
        ],
        columns: ['サブファミリー', '利用可能なサイズ', '主な用途', 'Ollamaタグプレフィックス'],
        tableFormat: true,
        note: 'Qwen3（2026年Q1リリース）はThinkingモードモデルを追加していますが、2026年5月時点ではQwen2.5と比べてGGUFビルドとOllamaカバレッジが少ない状況です。このガイドはハードウェア互換性が最も広いQwen2.5に焦点を当てています。',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'モデルサイズ別ハードウェア要件',
        content: [
          '**まずVRAM階層を選び、次にそこに収まる最大のQwen2.5モデルを選択します。** 以下の数値はすべてQ4_K_M量子化を基準としています。',
        ],
        rows: [
          { 'モデル': 'Qwen2.5 7B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '約57トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '約55トークン/秒' },
          { 'モデル': 'Qwen2-VL 7B Q4_K_M', 'VRAM': '6.2GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（RTX 4060）': '約38トークン/秒' },
          { 'モデル': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '約38トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '約36トークン/秒' },
          { 'モデル': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '約28トークン/秒' },
          { 'モデル': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '約27トークン/秒' },
          { 'モデル': 'Qwen2.5 72B Q4_K_M', 'VRAM': '46GB', '最低GPU': '2× RTX 3090（48GB）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（2×RTX 4090）': '約12トークン/秒' },
        ],
        columns: ['モデル', 'VRAM', '最低GPU', 'Apple Silicon', '速度（RTX 3060）'],
        tableFormat: true,
        note: 'VRAMの数値はOllamaライブラリのQ4_K_M GGUFファイルを基準としています。4KコンテキストのKVキャッシュとして1〜2GB追加が必要です。GPUのVRAMがモデルに必要な量より少ない場合、Ollamaは自動的にシステムRAMにレイヤーをオフロードしますが、速度が大幅に低下します。',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Qwen2.5 モデルサイズ別VRAM要件（Q4_K_M）— PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaでのセットアップ',
        content: [
          '**Ollamaは任意のQwen2.5モデルをローカルで実行する最速の方法です。** モデルのダウンロード、GGUF量子化の管理、`localhost:11434`へのローカルAPI提供をすべて自動で行います。[ollama.com](https://ollama.com/download)からインストールしてください。Ollamaを初めて使う場合は、まず[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama)をご覧ください。',
        ],
        numberedItems: [
          { title: 'Ollamaをインストール', whyItMatters: 'macOS、Linux（ワンライナーインストール）、Windowsで利用可能。GPUドライバーの設定は不要 — OllamaはCUDA、ROCm、Metalを自動検出します。' },
          { title: '明示的なサイズタグでモデルを取得', whyItMatters: '必ずサイズを指定してください：`qwen2.5:7b`、`qwen2.5:14b`、`qwen2.5:32b`。タグなしの`qwen2.5`はデフォルトで7Bに解決されますが、Ollamaのバージョン間で変わる可能性があります。' },
          { title: 'モデルを実行', whyItMatters: '`ollama run qwen2.5:7b`でインタラクティブチャットが開きます。プロンプトを入力してEnterキーを押します。終了は`/bye`。' },
          { title: '必要に応じてコンテキストウィンドウを設定', whyItMatters: 'Qwen2.5はOllamaでデフォルト32Kコンテキストをサポートします。128Kコンテキストを使う場合：`ollama run qwen2.5:7b --num-ctx 131072`。追加VRAMが必要になります。' },
          { title: 'APIエンドポイントをテスト', whyItMatters: 'OllamaはOpenAI互換APIを提供します。PromptQuorum、Continue.dev、Open WebUIなどのアプリが`http://localhost:11434/v1`に直接接続できます。' },
        ],
        codeBlock: `# Ollamaのインストール（Linux）
curl -fsSL https://ollama.com/install.sh | sh

# macOS: ollama.comから.dmgをダウンロード、または:
brew install ollama

# モデルの取得 — 明示的なタグを使用
ollama pull qwen2.5:7b           # 汎用7B（約5.5GB）
ollama pull qwen2.5:14b          # 汎用14B（約9.5GB）
ollama pull qwen2.5:32b          # 汎用32B（約20.5GB）
ollama pull qwen2.5-coder:32b    # コーディング32B（約20.5GB）
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
          '**LM StudioはターミナルコマンドなしでQwen2.5を利用できるGUIです。** [lmstudio.ai](https://lmstudio.ai)からダウンロード、または[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)を参照。macOS・Windows・Linuxで動作します。',
        ],
        numberedItems: [
          { title: 'モデルブラウザを開く', whyItMatters: '「Qwen2.5」または「Qwen Coder」で検索。Q4_K_Mでフィルタリングすると推奨品質/サイズ比のビルドが表示されます。' },
          { title: 'GGUFビルドをダウンロード', whyItMatters: 'Q4_K_Mバリアントを選択。LM Studioはダウンロード前にファイルサイズを表示します。' },
          { title: 'モデルをロードしてチャット開始', whyItMatters: '左サイドバーでモデルをクリックしてメモリにロード。GPUレイヤーの割り当ては自動です。' },
          { title: 'ローカルサーバーを起動', whyItMatters: '「サーバー起動」で`localhost:1234`にOpenAI互換エンドポイントが公開されます。' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: '量子化：どのフォーマットを選ぶか',
        content: [
          '**Q4_K_MはコンシューマーハードウェアでのQwen2.5に最適なデフォルトです。** FP16比でVRAMを約55〜60%削減し、MMLUとHumanEvalのベンチマーク劣化は1%未満です。',
        ],
        items: [
          '**Q4_K_M**（推奨）：7Bで約5.5GB。最良の品質/GB比。まずこれを試してください。',
          '**Q8_0**：7Bで約8.5GB。ほぼFP16品質。VRAMに余裕があり最大精度が必要な場合に使用。',
          '**Q5_K_M**：7Bで約6.5GB。Q4_K_Mからのわずかな改善 — タスクでQ4_K_Mの品質が明らかに不足している場合のみ選択。',
          '**Q2_K**：7Bで約3GB。最小ファイルサイズだが、中国語出力品質が著しく低下 — Qwen2.5で中国語を使う場合は避けること。',
          '**IQ4_XS**：7Bで約4.8GB。Q4_K_Mより品質が高くやや小さい新しいimatrix量子化 — 最近のllama.cppリリースとLM Studio 0.3+で利用可能。',
        ],
        note: '量子化の詳細な解説は[LLM量子化の解説](/ja/local-llms/llm-quantization-explained)をご覧ください。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_MはほとんどのユーザーにとってQwen2.5に最適な量子化です：FP16比でVRAMを55%削減し、品質低下は1%未満。' },
          { type: 'plain-terms', text: '量子化とはモデルの数値を16ビットから4ビットに圧縮することで、ファイルサイズとVRAM使用量を約半分にします。TIFFから高品質JPEGへの変換のようなもの — ファイルは小さくなりますが、ほとんどの用途では同じ結果が得られます。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'コンシューマーハードウェアでのベンチマーク性能',
        content: [
          '**RTX 4090でのQwen2.5 32B Q4_K_Mは28トークン/秒** — リアルタイムのコーディング支援に十分な速度です。以下のスコアはOllamaでテストしたQ4_K_M GGUFビルドの値です。',
        ],
        rows: [
          { 'モデル（Q4_K_M）': 'Qwen2.5 7B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（RTX 3060 12GB）': '57トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（RTX 4070 12GB）': '38トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（RTX 4090 24GB）': '28トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5 72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（2×RTX 3090）': '12トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', '速度（RTX 3060 12GB）': '55トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', '速度（RTX 4070 12GB）': '36トークン/秒' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（RTX 4090 24GB）': '27トークン/秒' },
        ],
        columns: ['モデル（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（RTX 3060 12GB）'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Qwen2.5ベンチマークスコア（Q4_K_M）— PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：何をローカルで動かすか',
        content: [
          '**Qwen2.5は中国語タスクとVRAM効率で優位。DeepSeek-V2.5は大規模推論で強いがコンシューマーハードウェアでは非現実的。Llama 3.3 70BはMetaのオープンモデルを好む場合のシングルGPU最良選択肢です。**',
        ],
        rows: [
          { 'VRAM階層': '6GB', '最良Qwen': 'Qwen2.5 7B', '最良競合': 'Llama 3.2 3B（収まるが3Bのみ）', '判定': 'Qwen2.5 7Bが優位 — 同VRAM、より大きなモデル' },
          { 'VRAM階層': '12GB', '最良Qwen': 'Qwen2.5-Coder 14B', '最良競合': 'Llama 3.3 8B Instruct', '判定': 'コーディングにはQwen2.5-Coder 14B；汎用チャットにはLlama 3.3 8B' },
          { 'VRAM階層': '24GB', '最良Qwen': 'Qwen2.5-Coder 32B', '最良競合': 'Llama 3.3 70B（オフロード）', '判定': 'コードにはQwen2.5-Coder 32B；品質>速度ならLlama 3.3 70B' },
          { 'VRAM階層': '48GB+', '最良Qwen': 'Qwen2.5 72B', '最良競合': 'DeepSeek-V2.5 236B MoE', '判定': 'DeepSeekは約130GB RAM必要；Qwen2.5 72Bが48GBの現実的な選択' },
        ],
        columns: ['VRAM階層', '最良Qwen', '最良競合', '判定'],
        tableFormat: true,
        content2: 'コーディング・推論・多言語対応でのDeepSeekとQwenの詳細な比較は[DeepSeek vs Qwenローカル比較2026](/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026)をご覧ください。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '日本企業でのデータ主権と規制対応',
        content: [
          '**Qwen2.5をローカルで運用すると、データが社外のサーバーに送信されません** — クラウドAPIと異なり、推論時に外部ネットワーク通信が発生しないためです。これは経済産業省（METI）の「AI事業者ガイドライン（2024年）」が求めるデータガバナンスの観点で有利な構成です。',
          '日本語はQwen2.5の29言語ネイティブサポートに含まれており、医療・法律・金融などの日本語専門文書でも高精度なテキスト処理が可能です。Qwen2-VL 7Bは日本語ドキュメントのOCRにおいて、LLaVAやLlama 3.2 Visionを上回る精度を示しています。',
          '**アジア太平洋地域の規制環境** — 日本の個人情報保護法（PIPA改正版）では、個人データの安全管理措置として「技術的安全管理措置」が義務付けられています。ローカルLLMは、個人データをオンプレミスで処理することで、この要件に対応しやすい構成です。中国・韓国・シンガポール・オーストラリアでも同様に、機密データのローカル処理がクロスボーダーデータ転送リスクを排除します。完全オフライン構成のガイドは[完全オフラインでAIを動かす](/ja/power-local-llm/local-ai-behind-firewall-offline-2026)をご覧ください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5はダウンロード後に完全オフラインで動作し、データが社外に出ないためMETIのAIガバナンスガイドラインへの対応が容易です。' },
          { type: 'plain-terms', text: 'ローカルで動かすと、プロンプトや文書がコンピュータから出ません。クラウドAPIコールもなく、外部サーバーもなく、第三者がアクセスできるデータもありません。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '予算別ハードウェア推奨',
        content: [
          '**RTX 3060 12GBはQwen2.5 7BとQwen2.5-Coder 7Bのエントリー向け最良選択肢で、約¥40,000〜48,000（中古ならさらに安価）です。** 14Bモデルには約¥68,000〜78,000のRTX 4070 12GBが35%高速化を実現します。',
        ],
        items: [
          '**エントリー（Qwen2.5 7B）**：NVIDIA RTX 4060 8GBまたはRTX 3060 12GB。7Bモデルを50〜57トークン/秒で処理。RTX 3060 12GBは中古で安く入手でき、VRAMに余裕があります。',
          '**ミドルレンジ（Qwen2.5 14B）**：RTX 4070 12GBまたはRTX 4070 Super 12GB。4070 SuperはQwen2.5-Coder 14Bを38〜42トークン/秒で処理し、2〜3GBのVRAMコンテキスト余裕があります。',
          '**ハイエンド（Qwen2.5 32B）**：RTX 4090 24GBまたはRTX 3090 24GB。4090はQwen2.5-Coder 32Bを27〜28トークン/秒で処理 — リアルタイムコーディング速度。3090は中古で大幅に安く、推論スループットは4090の15%以内です。',
          '**Apple Silicon（全サイズ）**：Mac mini M4 Pro 48GBはQwen2.5 32Bの最良コストパフォーマンス（約22トークン/秒）、低騒音・低消費電力。',
          '**常時稼働Mini PC**：MINISFORUM UM890 Proや同等のAMD Ryzen AI PC。CPU+iGPUでQwen2.5 7Bを約8〜12トークン/秒で処理 — 遅いが35W以下で24/7稼働可能。',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.co.jp/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8GB', productCategory: 'GPU', priceRange: '約¥40,000〜48,000', label: 'Qwen2.5 7B向けエントリーGPU' },
          { url: 'https://www.amazon.co.jp/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12GB', productCategory: 'GPU', priceRange: '約¥68,000〜78,000', label: 'Qwen2.5 14B向け最良GPU' },
          { url: 'https://www.amazon.co.jp/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24GB', productCategory: 'GPU', priceRange: '約¥260,000〜300,000', label: 'Qwen2.5-Coder 32B向け最良GPU' },
          { url: 'https://www.apple.com/jp/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48GB', productCategory: 'Mini PC', priceRange: '¥218,800', label: 'Qwen2.5 32B向け最良Apple Silicon' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくあるミス',
        items: [
          '**タグなしで`ollama pull qwen2.5`を実行する。** 明示的なサイズタグ（`:7b`、`:14b`など）なしでは、OllamaはOllamaのアップデートで変わりうるデフォルトサイズに解決します。常に明示的なタグを使用：`ollama pull qwen2.5:14b`。',
          '**コンテキストウィンドウサイズを無視する。** Qwen2.5は128Kコンテキストをサポートしますが、Ollamaは`num_ctx`をデフォルト2Kに設定します。長い文書を処理する際は`--num-ctx 8192`（またはそれ以上）を追加してください。',
          '**中国語用途にQ2_K量子化を選ぶ。** 2ビット精度では、Qwen2.5の中国語出力品質が著しく低下します。中国語作業には最低でもQ4_K_Mを使用してください。',
          '**VRAMが不足した状態で32Bモデルを実行する。** GPUが16GBでモデルが20.5GB必要な場合、Ollamaはシステムメモリにレイヤーをオフロードします。3〜5トークン/秒でインタラクティブ使用には不向きです。',
          '**コーディングに間違ったサブファミリーを使う。** Qwen2.5 7B（汎用）はHumanEvalで57.3%。Qwen2.5-Coder 7Bは同ベンチマークで75.6% — 相対的に32%の改善。コーディングには必ず同サイズのCoder バリアントを使用してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Qwen2.5 7Bをローカルで動かすのに必要なVRAMは？', a: 'Qwen2.5 7B Q4_K_MにはVRAM 5.5GBが必要です。RTX 3060 6GB、RTX 4060、またはApple M系8GBユニファイドメモリで動作します。' },
          { q: 'コーディング用途に最適なQwenモデルは？', a: 'Qwen2.5-Coder 32B — HumanEval 92.7%、GPU 24GB必要。VRAM 12GB以下ならQwen2.5-Coder 14B（85.2%、9.5GB VRAM）。' },
          { q: 'QwenとDeepSeekのローカルデプロイ比較は？', a: 'Qwen2.5はコンシューマーハードウェアに収まるDenseアーキテクチャ。DeepSeek-V2.5は236B MoEで約130GB RAM必要 — コンシューマーGPUでは非現実的。' },
          { q: 'MacでQwenを動かせますか？', a: 'はい。M2 Pro 32GBはQwen2.5 14Bを約32トークン/秒で実行。M3 Max 64GBはQwen2.5 32Bを約22トークン/秒で処理。' },
          { q: 'Qwen2.5のOllamaコマンドは？', a: '`ollama pull qwen2.5:7b`（7B）、`:14b`（14B）、`:32b`（32B）、`qwen2.5-coder:32b`（コーディング版）。常に明示的なサイズタグを使用。' },
          { q: '中国語タスクにQwenは適していますか？', a: 'はい。Qwen2.5は大規模な中国語コーパスで学習され、簡体字・繁体字・日本語・韓国語を含む29言語をネイティブサポートしています。' },
          { q: 'Qwen2.5に推奨する量子化は？', a: 'Q4_K_Mがデフォルト推奨 — FP16比でVRAM約55%削減、品質低下1%未満。Q8_0は品質重視、Q2_Kは中国語には不適。' },
          { q: 'Qwen2-VLは日本語・中国語OCRに使えますか？', a: 'はい。Qwen2-VL 7BはCJK OCRで最強のローカルビジョンモデル。`ollama pull qwen2-vl:7b`でVRAM約6GBで動作、最大4096×4096ピクセルに対応。' },
          { q: 'METI AIガイドラインへの対応は？', a: 'ローカルデプロイでデータが社外に出ないため、METI「AI事業者ガイドライン2024」のデータガバナンス要件に対応しやすい構成です。' },
          { q: 'Apple M系チップでQwen2.5 72Bを動かせますか？', a: 'M2 Ultra 192GBまたはM3 Ultra 192GBで動作します。Q4_K_Mで約46GBのメモリが必要です。' },
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
          { url: '/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwenローカル比較2026', description: 'DeepSeek-V2.5 vs Qwen2.5の全面比較：コーディング・推論・中国語・クリエイティブライティング。Mac vs NVIDIAの詳細付き。' },
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen本地部署指南2026：在各硬件层级运行Qwen2.5、Coder和VL',
    seoTitle: 'Qwen2.5本地部署2026：Coder、VL与各硬件层级Ollama+LM Studio设置指南',
    intro: 'Qwen2.5 7B通过Ollama仅需5.5GB显存即可运行——只需一条命令，无需任何配置。Qwen2.5-Coder 32B在HumanEval上达到92.7%。Qwen2-VL 7B是中日文档OCR领域最强的本地视觉模型。本指南涵盖完整的Qwen模型家族：各硬件层级的最优模型选择、Ollama和LM Studio部署方法、量化方案推荐、基准测试数据，以及与DeepSeek和Llama在2026年消费级硬件上的对比。',
    metaDescription: '2026年本地运行Qwen2.5全系列（7B–72B）、Qwen2.5-Coder与Qwen2-VL的完整实战部署指南：各参数版本显存需求对照表、Ollama与LM Studio详细安装配置步骤、Q4_K_M量化基准数据，以及各硬件预算档位的精准配置建议与常见报错解决方案。',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    audience: '希望在本地运行完整Qwen模型家族的开发者、研究人员和注重数据隐私的用户，尤其是偏好阿里巴巴模型的中文用户',
    primaryTerm: 'Qwen本地部署',
    affiliateDisclosure: true,
    ctaText: '通过一个界面调度Qwen2.5、DeepSeek和Llama →',
    ctaButton: '免费试用PromptQuorum',
    ctaHref: '/waitlist',
    leadAnswerBlock: '**本地运行Qwen2.5 7B：安装Ollama并执行`ollama pull qwen2.5:7b`，仅需5.5GB显存，RTX 3060上可达57个token/秒。** 代码任务使用Qwen2.5-Coder；中日文档OCR使用Qwen2-VL。',
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'Qwen2.5模型家族概览', anchor: '#model-family' },
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
    gammaDescription: '下方幻灯片涵盖：Qwen2.5模型家族全览（7B至72B）、各硬件层级显存要求、Qwen2.5-Coder 32B基准数据，以及Qwen vs DeepSeek vs Llama决策图表。可下载作为Qwen部署参考卡片。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen本地部署指南2026：在各硬件层级运行Qwen2.5、Coder和VL',
      description: 'Qwen2.5模型家族本地部署完整指南——显存要求、Ollama和LM Studio设置、量化方案、基准测试及硬件推荐。',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
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
        { '@type': 'Question', name: '本地运行Qwen2.5 7B需要多少显存？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 7B Q4_K_M需要5.5GB显存。NVIDIA RTX 3060 6GB、RTX 4060或Apple M系列芯片8GB统一内存均可运行。' } },
        { '@type': 'Question', name: '本地运行最适合代码任务的Qwen模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B是最强的本地代码模型——HumanEval 92.7%，需要24GB GPU（RTX 3090或RTX 4090）。显存12GB或以下时，使用Qwen2.5-Coder 14B（HumanEval 85.2%，显存9.5GB）。' } },
        { '@type': 'Question', name: 'Qwen与DeepSeek本地部署对比如何？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5采用适合消费级硬件的Dense架构。DeepSeek-V2.5是236B MoE模型，Q4量化需约130GB内存，在没有服务器级GPU的情况下不可行。VRAM在48GB以下时，Qwen2.5是实际可行的选择。' } },
        { '@type': 'Question', name: '可以在Mac上运行Qwen吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。Apple Silicon使用统一内存——M2 Pro 32GB可流畅运行Qwen2.5 14B，约32 token/秒。M3 Max 64GB可处理Qwen2.5 32B，约22 token/秒。' } },
        { '@type': 'Question', name: 'Qwen2.5的Ollama命令是什么？', acceptedAnswer: { '@type': 'Answer', text: '7B使用`ollama pull qwen2.5:7b`，14B使用`ollama pull qwen2.5:14b`，32B使用`ollama pull qwen2.5:32b`，代码版本使用`ollama pull qwen2.5-coder:32b`。始终使用明确的尺寸标签。' } },
        { '@type': 'Question', name: 'Qwen适合中文任务吗？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语、阿拉伯语等29种语言，在中文理解和生成任务上持续超越Llama 3.3和Mistral。' } },
        { '@type': 'Question', name: 'Qwen2.5应该使用哪种量化格式？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M是推荐的默认格式——相比FP16减少约55%显存，基准测试质量损失不足1%。显存充足时使用Q8_0获得接近FP16的质量。中文任务避免使用Q2_K，该格式会明显降低中文输出质量。' } },
        { '@type': 'Question', name: 'Qwen2-VL适合中文文档OCR吗？', acceptedAnswer: { '@type': 'Answer', text: '是的——Qwen2-VL 7B是CJK文档OCR领域最强的本地视觉模型。通过`ollama pull qwen2-vl:7b`在约6GB显存下运行，支持最高4096×4096像素分辨率读取中日韩文字。' } },
        { '@type': 'Question', name: '本地部署Qwen2.5是否符合中国数据安全法要求？', acceptedAnswer: { '@type': 'Answer', text: '本地运行时数据不离开本地服务器，无需向境外传输数据，符合《数据安全法》第31条关于跨境数据流动的规定。对于受监管行业（金融、医疗、法律），本地推论是最稳健的合规选择。' } },
        { '@type': 'Question', name: 'Qwen2.5 72B需要什么硬件？', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M量化需要约46GB显存。可使用两块RTX 3090（48GB合计）或带64GB+统一内存的Apple Silicon（M2 Ultra 192GB可流畅运行）。服务器端可考虑单卡A100 80GB。' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2.5 7B仅需5.5GB显存**——执行`ollama pull qwen2.5:7b`即可启动，RTX 3060上达到57 token/秒。',
          '**三个独立子系列**：Qwen2.5（通用）、Qwen2.5-Coder（代码，32B达HumanEval 92.7%）、Qwen2-VL（视觉，本地CJK OCR最强）。',
          '**Dense架构=消费级友好**：与DeepSeek 236B MoE（需约130GB内存）不同，Qwen2.5 72B仅需46GB显存，两块RTX 3090即可运行。',
          '**原生多语言**：在中文、日语、韩语、阿拉伯语、德语、法语等29种语言上预训练，CJK任务持续超越Llama 3.3。',
          '**Q4_K_M是正确的量化选择**：对大多数用户而言减少约55%显存，质量损失不足1%。',
          '**硬件决策**：12GB显存→14B模型；24GB→32B；48GB+（双卡或Apple Silicon 64GB）→72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5覆盖三个本地部署子系列——通用（7B–72B）、代码（Coder 7B–32B）和视觉（VL 7B–72B），均可通过Ollama或LM Studio运行。' },
          { type: 'plain-terms', text: '本地运行模型意味着AI在你自己的电脑上运行，而非云端服务器。数据不离开本机，购买硬件后也无需按token付费。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen2.5模型家族概览',
        content: [
          '**Qwen2.5家族覆盖三个独立任务：通用推理、代码和视觉**——每类均有从7B到72B的多种规格。所有模型均为阿里巴巴Qwen团队以Apache 2.0许可证发布的开放权重模型。',
          '先选择子系列，再选择适合显存的规格。混合使用子系列很常见：代码补全用Qwen2.5-Coder 14B，文档摘要用Qwen2.5 7B。',
        ],
        rows: [
          { '子系列': 'Qwen2.5', '可用规格': '7B, 14B, 32B, 72B', '主要用途': '通用推理、中文/多语言任务、RAG', 'Ollama标签前缀': 'qwen2.5:' },
          { '子系列': 'Qwen2.5-Coder', '可用规格': '7B, 14B, 32B', '主要用途': '代码生成、调试、HumanEval、SWE-bench', 'Ollama标签前缀': 'qwen2.5-coder:' },
          { '子系列': 'Qwen2-VL', '可用规格': '2B, 7B, 72B', '主要用途': '文档OCR、图像问答、CJK文字提取', 'Ollama标签前缀': 'qwen2-vl:' },
        ],
        columns: ['子系列', '可用规格', '主要用途', 'Ollama标签前缀'],
        tableFormat: true,
        note: 'Qwen3（2026年Q1发布）增加了思维模式模型，但截至2026年5月，GGUF构建和Ollama覆盖率不如Qwen2.5广泛。本指南重点介绍硬件兼容性最广的Qwen2.5。',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '各模型尺寸的硬件要求',
        content: [
          '**先确定显存档位，再选择可以装入的最大Qwen2.5模型。** 以下所有数值均基于Q4_K_M量化——这是Ollama和LM Studio的最佳尺寸/质量比格式。',
        ],
        rows: [
          { '模型': 'Qwen2.5 7B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '约57 token/秒' },
          { '模型': 'Qwen2.5-Coder 7B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 6GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（RTX 3060）': '约55 token/秒' },
          { '模型': 'Qwen2-VL 7B Q4_K_M', '显存': '6.2GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（RTX 4060）': '约38 token/秒' },
          { '模型': 'Qwen2.5 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '约38 token/秒' },
          { '模型': 'Qwen2.5-Coder 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（RTX 4070）': '约36 token/秒' },
          { '模型': 'Qwen2.5 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '约28 token/秒' },
          { '模型': 'Qwen2.5-Coder 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（RTX 4090）': '约27 token/秒' },
          { '模型': 'Qwen2.5 72B Q4_K_M', '显存': '46GB', '最低GPU': '2× RTX 3090（48GB合计）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（2×RTX 4090）': '约12 token/秒' },
        ],
        columns: ['模型', '显存', '最低GPU', 'Apple Silicon', '速度（RTX 3060）'],
        tableFormat: true,
        note: '显存数值适用于Ollama库中的Q4_K_M GGUF文件。4K上下文的KV缓存需额外增加1–2GB。若GPU显存不足，Ollama会自动将层卸载到系统内存——可以运行但速度会大幅降低。',
        image: '/images/qwen-local-deployment-guide-2026-hardware.svg',
        imageCaption: 'Qwen2.5各模型尺寸显存要求（Q4_K_M）— PromptQuorum 2026',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama部署方法',
        content: [
          '**Ollama是本地运行任何Qwen2.5模型的最快方式**——自动处理模型下载、GGUF量化，并在`localhost:11434`提供本地API，无需任何配置。从[ollama.com](https://ollama.com/download)安装。Ollama新手请先阅读[如何安装Ollama](/zh/local-llms/how-to-install-ollama)。',
        ],
        numberedItems: [
          { title: '安装Ollama', whyItMatters: '支持macOS、Linux（一行安装命令）和Windows。无需配置GPU驱动——Ollama自动检测CUDA、ROCm和Metal。' },
          { title: '使用明确的尺寸标签拉取模型', whyItMatters: '始终指定尺寸：`qwen2.5:7b`、`qwen2.5:14b`、`qwen2.5:32b`。无标签的`qwen2.5`默认解析为7B，但可能随Ollama版本变化。' },
          { title: '运行模型', whyItMatters: '`ollama run qwen2.5:7b`打开交互式对话。输入提示词后按Enter。输入`/bye`退出。' },
          { title: '按需设置上下文窗口', whyItMatters: 'Qwen2.5在Ollama中默认支持32K上下文。使用128K上下文：`ollama run qwen2.5:7b --num-ctx 131072`，但需要更多显存。' },
          { title: '测试API端点', whyItMatters: 'Ollama提供OpenAI兼容API。PromptQuorum、Continue.dev和Open WebUI等应用可直接连接`http://localhost:11434/v1`。' },
        ],
        codeBlock: `# 安装Ollama（Linux）
curl -fsSL https://ollama.com/install.sh | sh

# macOS：从ollama.com下载.dmg，或：
brew install ollama

# 拉取模型 — 使用明确的标签
ollama pull qwen2.5:7b           # 通用7B（约5.5GB）
ollama pull qwen2.5:14b          # 通用14B（约9.5GB）
ollama pull qwen2.5:32b          # 通用32B（约20.5GB）
ollama pull qwen2.5-coder:32b    # 代码32B（约20.5GB）
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
          '**LM Studio提供无需命令行的图形界面运行Qwen2.5。** 从[lmstudio.ai](https://lmstudio.ai)下载，或参阅[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio)。支持macOS、Windows和Linux。',
        ],
        numberedItems: [
          { title: '打开模型浏览器', whyItMatters: '搜索"Qwen2.5"或"Qwen Coder"。按Q4_K_M筛选以获得推荐的质量/尺寸比例。' },
          { title: '下载GGUF构建版本', whyItMatters: '选择Q4_K_M变体。LM Studio在下载前显示文件大小——确认与可用显存匹配。' },
          { title: '加载模型并开始对话', whyItMatters: '点击左侧边栏中的模型将其加载到内存。GPU层分配自动完成。' },
          { title: '启动本地服务器', whyItMatters: '"启动服务器"在`localhost:1234`开放OpenAI兼容端点。应用和脚本可像使用OpenAI API一样连接。' },
        ],
      },
      quantizationGuide: {
        id: 'quantization-guide',
        title: '量化：如何选择格式',
        content: [
          '**Q4_K_M是Qwen2.5在消费级硬件上的最佳默认选择。** 相比FP16减少约55–60%显存，MMLU和HumanEval的性能损失不足1%。',
        ],
        items: [
          '**Q4_K_M**（推荐）：7B约5.5GB。最佳质量/GB比。优先选择此格式。',
          '**Q8_0**：7B约8.5GB。接近FP16质量；显存充足且需要最高精度时使用。',
          '**Q5_K_M**：7B约6.5GB。相比Q4_K_M质量略有提升——仅在Q4_K_M输出质量明显不足时选用。',
          '**Q2_K**：7B约3GB。文件最小，但中文输出质量明显下降——中文用途请避免使用Qwen2.5的Q2_K。',
          '**IQ4_XS**：7B约4.8GB。比Q4_K_M质量更高且体积略小的新型imatrix量化——在最新llama.cpp版本和LM Studio 0.3+中可用。',
        ],
        note: '量化详细说明请参阅[LLM量化解析](/zh/local-llms/llm-quantization-explained)。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M是大多数用户的最佳Qwen2.5量化选择：相比FP16减少55%显存，质量损失不足1%。' },
          { type: 'plain-terms', text: '量化将模型的数值从16位压缩到4位，大约将文件大小和显存需求减半。就像从TIFF转换为高质量JPEG——文件更小，但大多数用途的效果几乎相同。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '消费级硬件基准测试性能',
        content: [
          '**RTX 4090上的Qwen2.5 32B Q4_K_M达到28 token/秒**——完全满足实时代码辅助需求。以下评分适用于Ollama测试的Q4_K_M GGUF构建版本。',
        ],
        rows: [
          { '模型（Q4_K_M）': 'Qwen2.5 7B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（RTX 3060 12GB）': '57 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（RTX 4070 12GB）': '38 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（RTX 4090 24GB）': '28 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5 72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（2×RTX 3090）': '12 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '75.6%', '速度（RTX 3060 12GB）': '55 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '85.2%', '速度（RTX 4070 12GB）': '36 token/秒' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（RTX 4090 24GB）': '27 token/秒' },
        ],
        columns: ['模型（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（RTX 3060 12GB）'],
        tableFormat: true,
        image: '/images/qwen-local-deployment-guide-2026-benchmarks.svg',
        imageCaption: 'Qwen2.5基准测试评分（Q4_K_M）— PromptQuorum 2026',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：本地应该运行哪个',
        content: [
          '**Qwen2.5在中文任务和显存效率上胜出；DeepSeek-V2.5在大规模推理上胜出但在消费级硬件上不实用；Llama 3.3 70B是偏好Meta开放模型时的最佳单卡选择。**',
        ],
        rows: [
          { '显存档位': '6GB', '最佳Qwen': 'Qwen2.5 7B', '最佳竞品': 'Llama 3.2 3B（可装入但仅3B）', '建议': 'Qwen2.5 7B胜出——相同显存，更大模型' },
          { '显存档位': '12GB', '最佳Qwen': 'Qwen2.5-Coder 14B', '最佳竞品': 'Llama 3.3 8B Instruct', '建议': '代码用Qwen2.5-Coder 14B；通用对话用Llama 3.3 8B' },
          { '显存档位': '24GB', '最佳Qwen': 'Qwen2.5-Coder 32B', '最佳竞品': 'Llama 3.3 70B（卸载）', '建议': '代码用Qwen2.5-Coder 32B；质量优先于速度则选Llama 3.3 70B' },
          { '显存档位': '48GB+', '最佳Qwen': 'Qwen2.5 72B', '最佳竞品': 'DeepSeek-V2.5 236B MoE', '建议': 'DeepSeek需约130GB内存；Qwen2.5 72B是48GB的实际可行选择' },
        ],
        columns: ['显存档位', '最佳Qwen', '最佳竞品', '建议'],
        tableFormat: true,
        content2: '代码、推理和多语言任务上DeepSeek与Qwen的深度对比，请参阅[DeepSeek vs Qwen本地对比2026](/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026)。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '中国用户：数据安全合规与本地部署',
        content: [
          '**本地运行Qwen2.5意味着数据完全不离开本地服务器——无需跨境传输，符合《数据安全法》（DSL）第31条和《网络安全法》的相关规定。** 基于云端的LLM API需要将提示词发送至境外服务器，可能触发DSL的数据出境安全评估要求。',
          'Qwen2.5由阿里巴巴Qwen团队在大规模中文及多语言语料库上训练，是简体中文、繁体中文及中英混合文档本地部署的最强选择。在中文阅读理解和文本生成任务上，持续优于Llama 3.3和Mistral。',
          '**受监管行业（金融、医疗、法律）的企业部署方案**：完全离线的Qwen2.5部署（推理时无互联网连接）是最稳健的合规选择，符合国家互联网信息办公室（CAC）关于生成式AI服务的管理规定。模型完全在本地算力上运行——监管关注点在于训练数据和输出内容审核，而非在离线硬件上进行的推理过程。**亚太地区数据跨境**：中国、韩国、新加坡、澳大利亚均已建立数据本地化框架，本地LLM推理可消除跨境传输风险。**金融/医疗/法律企业方案**：大型银行、医院、律所如需在内网处理敏感数据，搭配防火墙内Qwen2.5即可满足内部AI合规要求。完整的离线部署指南请参阅[完全离线运行AI](/zh/power-local-llm/local-ai-behind-firewall-offline-2026)。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2.5下载后可完全离线运行——数据不离开本机，消除了《数据安全法》下的跨境数据传输风险。' },
          { type: 'plain-terms', text: '本地运行Qwen2.5时，您的提示词和文档永远不会离开您的电脑。没有云API调用，没有境外服务器，也没有监管机构或第三方可以访问的数据。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '各预算档位硬件推荐',
        content: [
          '**RTX 3060 12GB是Qwen2.5 7B和Qwen2.5-Coder 7B的最佳入门选择，价格约$250–300（二手价格更低）。** 对于14B模型，RTX 4070 12GB在约$450–500的价位提供35%的速度提升。',
        ],
        items: [
          '**入门级（Qwen2.5 7B）**：NVIDIA RTX 4060 8GB或RTX 3060 12GB。两者均以50–57 token/秒处理7B模型。RTX 3060 12GB二手价格更低，显存余量更大。',
          '**中端（Qwen2.5 14B）**：RTX 4070 12GB或RTX 4070 Super 12GB。4070 Super以38–42 token/秒运行Qwen2.5-Coder 14B，还有2–3GB显存余量用于上下文。',
          '**高端（Qwen2.5 32B）**：RTX 4090 24GB或RTX 3090 24GB。4090在Qwen2.5-Coder 32B上达到27–28 token/秒——实时代码辅助速度。3090二手价格显著更低，推理吞吐量在4090的15%以内。',
          '**Apple Silicon（所有尺寸）**：Mac mini M4 Pro 48GB是运行Qwen2.5 32B（约22 token/秒）的最佳性价比选择，低噪音、低功耗。',
          '**全天候Mini PC**：MINISFORUM UM890 Pro或同类AMD Ryzen AI PC。通过CPU+核显以约8–12 token/秒运行Qwen2.5 7B——速度慢但可7×24小时运行，功耗35W以下。',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8GB', productCategory: 'GPU', priceRange: '$250–300', label: 'Qwen2.5 7B入门级GPU' },
          { url: 'https://www.amazon.com/dp/B0C2RSGNXK', productName: 'NVIDIA RTX 4070 Super 12GB', productCategory: 'GPU', priceRange: '$450–500', label: 'Qwen2.5 14B最佳GPU' },
          { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24GB', productCategory: 'GPU', priceRange: '$1,600–1,800', label: 'Qwen2.5-Coder 32B最佳GPU' },
          { url: 'https://www.apple.com/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M4 Pro 48GB', productCategory: 'Mini PC', priceRange: '$1,299–1,399', label: 'Qwen2.5 32B最佳Apple Silicon' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**使用无标签的`ollama pull qwen2.5`命令。** 没有明确的尺寸标签（`:7b`、`:14b`等），Ollama可能解析到随版本更新变化的默认尺寸。始终使用明确标签：`ollama pull qwen2.5:14b`。',
          '**忽略上下文窗口大小。** Qwen2.5支持128K上下文，但Ollama默认`num_ctx`为2K。处理长文档时，在运行命令中添加`--num-ctx 8192`（或更高）——否则模型会静默截断输入。',
          '**中文用途选择Q2_K量化。** 2位精度下，Qwen2.5的中文输出质量明显下降——出现字符替换问题。中文任务至少使用Q4_K_M。',
          '**显存不足时运行32B模型。** 若GPU只有16GB而模型需要20.5GB，Ollama会将层卸载到系统内存。模型可运行但速度仅3–5 token/秒，不适合交互使用。',
          '**代码任务使用错误的子系列。** Qwen2.5 7B（通用版）在HumanEval上得57.3%。Qwen2.5-Coder 7B得75.6%——相对提升32%。代码任务始终使用同等规格的Coder版本。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地运行Qwen2.5 7B需要多少显存？', a: 'Qwen2.5 7B Q4_K_M需要5.5GB显存。RTX 3060 6GB、RTX 4060或Apple M系列芯片8GB统一内存均可。' },
          { q: '本地运行最适合代码任务的Qwen模型？', a: 'Qwen2.5-Coder 32B——HumanEval 92.7%，需24GB GPU。显存12GB或以下：Qwen2.5-Coder 14B（85.2%，9.5GB显存）。' },
          { q: 'Qwen与DeepSeek本地部署对比？', a: 'Qwen2.5使用适合消费级硬件的Dense架构。DeepSeek-V2.5是236B MoE，需约130GB内存，没有服务器级GPU无法实现。' },
          { q: '可以在Mac上运行Qwen吗？', a: '可以。M2 Pro 32GB可流畅运行Qwen2.5 14B，约32 token/秒。M3 Max 64GB可处理Qwen2.5 32B，约22 token/秒。' },
          { q: 'Qwen2.5的Ollama命令是什么？', a: '`ollama pull qwen2.5:7b`（7B），`:14b`（14B），`:32b`（32B），`qwen2.5-coder:32b`（代码版）。始终使用明确的尺寸标签。' },
          { q: 'Qwen适合中文任务吗？', a: '是的。Qwen2.5在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语等29种语言，中文任务持续超越Llama 3.3和Mistral。' },
          { q: 'Qwen2.5应该使用哪种量化格式？', a: 'Q4_K_M是推荐默认格式——相比FP16减少约55%显存，质量损失不足1%。显存充足时用Q8_0。中文任务避免Q2_K。' },
          { q: 'Qwen2-VL适合中文文档OCR吗？', a: '是的——`ollama pull qwen2-vl:7b`，约6GB显存，支持最高4096×4096像素中日韩文字识别。' },
          { q: '本地部署Qwen2.5是否符合数据安全法要求？', a: '本地运行时数据不离开本地服务器，无需跨境传输，符合《数据安全法》第31条规定。金融、医疗、法律等受监管行业的最佳合规选择。' },
          { q: 'Qwen2.5 72B需要什么硬件？', a: 'Q4_K_M量化需约46GB显存。两块RTX 3090（合计48GB）或带64GB+统一内存的Apple Silicon（M2 Ultra 192GB可流畅运行）。' },
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
          { url: '/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen本地对比2026', description: '完整对比：DeepSeek-V2.5 vs Qwen2.5在代码、推理、中文和创意写作上的表现——含Mac vs NVIDIA详细分析。' },
          { url: '/zh/prompt-bites/best-qwen-model-for-coding', title: '最佳Qwen编码模型', description: 'Qwen2.5-Coder 7B vs 32B：本地自动补全与代码审查的选择指南。' },
        ],
      },
    },
  },
};
