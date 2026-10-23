// Slug: qwen-local-deployment-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Qwen Models',
    title: 'Qwen Local Deployment Guide 2026: Qwen 3.6 27B, Coder & VL Hardware Tiers',
    seoTitle: 'Qwen 3.6 27B Local Setup 2026: Coder, VL & Hardware Tiers',
    intro: 'Qwen 3.6 27B is the new flagship pick for local deployment — a dense, Apache 2.0 model with a 256K context window that runs in ~17 GB of VRAM at Q4_K_M via `ollama run qwen3.6:27b`. Qwen3 8B runs in 5.5 GB of VRAM via Ollama — one command, no configuration — while Qwen2.5-Coder 32B reaches 92.7% on HumanEval and Qwen2.5-VL 7B (a 6.0 GB Ollama download) reads Chinese and Japanese documents locally. Qwen3 (2025) is the previous generation — still widely deployed through Ollama and LM Studio, but no longer the newest Qwen. This guide covers which Qwen sub-family to run at each hardware tier, with Ollama and LM Studio setup, Q4_K_M quantization picks, and benchmark data from 7B through 72B. Hardware tiers range from an RTX 3060 at 5.5 GB VRAM for Qwen3 8B to dual RTX 3090s or Apple M2 Ultra for Qwen2.5-72B.',
    metaDescription: 'Run Qwen 3.6 27B, Qwen3, Qwen2.5, Coder and VL locally. VRAM needs, Ollama and LM Studio setup, Q4_K_M speeds and hardware tiers for every budget.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-en.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-08-27',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-27',
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
      'qwen2.5-vl local',
      'qwen本地部署',
    ],
    current_models_mentioned: [
      'Qwen 3.6 27B',
      'Qwen3 0.6B',
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 7B',
      'Qwen2.5-Coder 14B',
      'Qwen2.5-Coder 32B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 72B',
      'DeepSeek V4-Flash',
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
      'Mac mini M5 Pro',
      'Mac mini M6',
    ],
    affiliateDisclosure: true,
    ctaText: 'Dispatch across Qwen3, DeepSeek, and Llama from one interface →',
    ctaButton: 'Try PromptQuorum Free',
    leadAnswerBlock: '**The new flagship pick is Qwen 3.6 27B — a dense, Apache 2.0 model with a 256K context window that runs in ~17 GB of VRAM at Q4_K_M via `ollama run qwen3.6:27b`.** For a lighter setup, Qwen3 8B (previous generation, still widely deployed) installs with `ollama pull qwen3:8b` — 5.5 GB of VRAM, 57 tokens/sec on an RTX 3060. For coding tasks use Qwen2.5-Coder; for Chinese/Japanese document OCR use Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) or the newer Qwen3-VL (`qwen3-vl:8b`). Already know your VRAM budget? Jump straight to [which GPU or Mac to buy for each Qwen tier](#affiliate-picks).',
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
      { label: 'Sources', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'The slide deck below covers: the new Qwen 3.6 27B flagship (256K context, ~17 GB at Q4_K_M), the complete Qwen model family at a glance (Qwen3 0.6B–32B, Qwen2.5 7B–72B), VRAM requirements per hardware tier, benchmark data for Qwen2.5-Coder 32B, and a Qwen vs DeepSeek vs Llama decision chart. Download as a Qwen deployment reference card.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Local Deployment Guide 2026: Run Qwen 3.6 27B, Qwen3, Coder & VL at Every Hardware Tier',
      description: 'Complete guide to deploying the Qwen model family locally — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder, and VL VRAM requirements, Ollama and LM Studio setup, quantization, benchmarks, and hardware recommendations.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M requires 5.5 GB of VRAM. An NVIDIA RTX 3060 12 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it comfortably. At 8 GB of VRAM you have headroom for context and system RAM.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best Qwen model for coding locally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B is the largest dedicated Qwen2.5 coding model that fits a 24 GB GPU (RTX 3090 or RTX 4090); Qwen reports 92.7% on HumanEval for the full-precision Instruct version. Qwen 3.6 27B also ships a coding variant (`qwen3.6:27b-coding`). If your VRAM is 12 GB or less, use Qwen2.5-Coder 14B (HumanEval 89.6%, 9.5 GB VRAM).' },
        },
        {
          '@type': 'Question',
          name: 'How does Qwen compare to DeepSeek for local deployment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen uses a dense architecture that fits on consumer hardware. DeepSeek\'s current open-weight line is V4 (V4-Flash: 284B total parameters, mixture-of-experts), which is far beyond a single consumer GPU; the older DeepSeek-V2.5 (236B MoE, 2024) has been superseded by V3 and then V4. For limited VRAM, a Qwen model is the practical choice.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 was pretrained on a large Chinese corpus and natively handles Simplified and Traditional Chinese, Japanese, Korean, and many more languages (see the model card). It is a strong candidate for Chinese-language local AI; test it on your own documents.' },
        },
        {
          '@type': 'Question',
          name: 'What quantization should I use for Qwen3?',
          acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M is the recommended default — it cuts VRAM by roughly 55–60% versus full precision with minimal quality loss (small on most benchmarks, varying by model and task). Use Q8_0 if you have spare VRAM and want near-fp16 quality. Avoid Q2_K — it degrades Chinese-language output noticeably.' },
        },
        {
          '@type': 'Question',
          name: 'Does Qwen2.5-VL work for Chinese document OCR?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — Qwen2.5-VL 7B runs through Ollama (`ollama pull qwen2.5vl:7b`, a 6.0 GB download), accepts text and image input, and can read Chinese, Japanese, and Korean text in scanned documents; test it on your own scans, since accuracy depends on scan quality. The newer Qwen3-VL is available as `qwen3-vl:8b` (6.1 GB). See the full guide at /local-llms/run-qwen-vl-locally-2026.' },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B is the new flagship pick**: dense, Apache 2.0, 256K context, ~17 GB VRAM at Q4_K_M via `ollama run qwen3.6:27b` (released April 2026).',
          '**Qwen3 8B runs in 5.5 GB of VRAM** — one `ollama pull qwen3:8b` command and you\'re running at 57 tokens/sec on an RTX 3060.',
          '**Four practical sub-families besides the flagship**: Qwen3 (general, thinking-mode; previous generation, still widely deployed), Qwen2.5 (general, widest tested), Qwen2.5-Coder (coding, 92.7% HumanEval at 32B), Qwen2.5-VL (vision, CJK document OCR; Qwen3-VL is the newer vision generation).',
          '**Dense architecture = consumer-friendly**: unlike DeepSeek V4-Flash (a 284B-parameter MoE model), Qwen2.5-72B fits in 46 GB VRAM on two RTX 3090s.',
          '**Native multilingual**: pretrained on Chinese, Japanese, Korean, Arabic, German, French, and many more languages (see the model card for the exact list).',
          '**Q4_K_M is the right quantization** for most users: ~55% VRAM reduction, small quality loss on benchmarks.',
          '**Hardware decision**: 12 GB VRAM → 14B model; 24 GB VRAM → 32B; 48 GB+ (two GPUs or Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 8B runs in 5.5 GB VRAM via Ollama; Qwen2.5-Coder 32B needs 24 GB and is reported at 92.7% on HumanEval.' },
          { type: 'plain-terms', text: 'Qwen is a family of open-weight AI models from Alibaba that run on consumer GPUs — from a laptop GPU to a desktop RTX 4090 — without sending data to any cloud.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Which Qwen Sub-Family Should You Run?',
        content: [
          '**The Qwen line-up now spans five practical picks: the Qwen 3.6 27B flagship, Qwen3 (previous generation, still widely deployed), Qwen2.5 general reasoning, Qwen2.5-Coder, and Qwen2.5-VL for vision** — each with multiple size options. All are open-weight models published by Alibaba\'s Qwen team on Hugging Face. Qwen 3.6 ships as a 27B dense model and a 35B-A3B mixture-of-experts model (`qwen3.6:35b`); for small hardware, the newer Qwen3.5 generation (`qwen3.5:4b`, `qwen3.5:9b`) follows Qwen3, and Qwen3-VL (`qwen3-vl:8b`) is the newer vision generation. Check each model card for its licence.',
          'Choose the sub-family first, then the size that fits your VRAM. Mixing sub-families is common: run Qwen2.5-Coder 14B for code completion and Qwen3 8B or Qwen 3.6 27B for document summarisation.',
        ],
        rows: [
          { 'Sub-family': 'Qwen 3.6 (flagship)', 'Sizes available': '27B dense, 35B-A3B MoE', 'Primary use': 'General reasoning and coding (`qwen3.6:27b-coding`), 256K context', 'Ollama tag prefix': 'qwen3.6:' },
          { 'Sub-family': 'Qwen3 (previous generation)', 'Sizes available': '0.6B, 1.7B, 4B, 8B, 14B, 32B', 'Primary use': 'General reasoning, thinking-mode, multilingual, agentic tasks', 'Ollama tag prefix': 'qwen3:' },
          { 'Sub-family': 'Qwen2.5', 'Sizes available': '7B, 14B, 32B, 72B', 'Primary use': 'General reasoning, Chinese/multilingual tasks, RAG', 'Ollama tag prefix': 'qwen2.5:' },
          { 'Sub-family': 'Qwen2.5-Coder', 'Sizes available': '7B, 14B, 32B', 'Primary use': 'Code generation, debugging, HumanEval, SWE-bench', 'Ollama tag prefix': 'qwen2.5-coder:' },
          { 'Sub-family': 'Qwen2.5-VL', 'Sizes available': '3B, 7B, 32B, 72B', 'Primary use': 'Document OCR, image Q&A, CJK text extraction', 'Ollama tag prefix': 'qwen2.5vl:' },
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
          { 'Model': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (GPU)': '~57 tok/s (RTX 3060 12 GB)' },
          { 'Model': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', 'Minimum GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Speed (GPU)': '~55 tok/s (RTX 3060 12 GB)' },
          { 'Model': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6.0 GB', 'Minimum GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Speed (GPU)': '—' },
          { 'Model': 'Qwen3 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (GPU)': '~38 tok/s (RTX 4070)' },
          { 'Model': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', 'Minimum GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Speed (GPU)': '~36 tok/s (RTX 4070)' },
          { 'Model': 'Qwen3 32B Q4_K_M (previous generation)', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (GPU)': '~28 tok/s (RTX 4090)' },
          { 'Model': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', 'Minimum GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Speed (GPU)': '~27 tok/s (RTX 4090)' },
          { 'Model': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'Minimum GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Speed (GPU)': '~24 tok/s (RTX 4090)' },
          { 'Model': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'Minimum GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Speed (GPU)': '~12 tok/s (2×RTX 4090)' },
        ],
        columns: ['Model', 'VRAM', 'Minimum GPU', 'Apple Silicon', 'Speed (GPU)'],
        tableFormat: true,
        note: 'VRAM figures are approximate for Q4_K_M. The Ollama library lists download sizes of 5.2 GB (qwen3:8b), 9.3 GB (qwen3:14b), 20 GB (qwen3:32b, qwen2.5:32b), 47 GB (qwen2.5:72b) and 17 GB (qwen3.6:27b-q4_K_M; the default 27b tag is 18–19 GB), checked on 23 October 2026. Add 1–2 GB for the KV cache at 4K context. If your GPU has less VRAM than the model needs, Ollama automatically offloads layers to system RAM — this works but reduces speed significantly.',
        callouts: [
          { type: 'tip', text: 'Found your VRAM tier? See [exactly which GPU or Mac to buy for that tier](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M5 Pro or dual GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-en.webp',
        imageCaption: 'Qwen3 VRAM requirements by model size (Q4_K_M) — approximate values',
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
          { title: 'Set context window if needed', whyItMatters: 'The Ollama library lists a 40K context window for Qwen3, 32K for Qwen2.5 and 256K for Qwen 3.6. To use 128K context on a 7B model, start `ollama run qwen2.5:7b`, then type `/set parameter num_ctx 131072` in the session. This requires more VRAM — add 2–4 GB for long contexts.' },
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
ollama pull qwen2.5vl:7b          # vision 7B (~6.0 GB)

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
          '**Q4_K_M is the right default for Qwen3 on consumer hardware.** It reduces VRAM by ~55–60% versus FP16 with small benchmark degradation on MMLU and HumanEval. Other formats have specific use cases:',
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
          { type: 'one-sentence', text: 'Q4_K_M is the recommended default for Qwen3: 55% less VRAM than FP16, small quality loss.' },
          { type: 'plain-terms', text: 'Quantization is a compression technique — like reducing image quality to save file size. Q4_K_M keeps most of Qwen3\'s accuracy while cutting memory use roughly in half.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'How Does Qwen3 Perform on Consumer Hardware?',
        content: [
          '**Qwen3 32B Q4_K_M on an RTX 4090 delivers 28 tokens/sec — fast enough for real-time coding assistance.** Qwen3 32B is the previous Qwen generation; the newer Qwen 3.6 27B fits the same 24 GB tier (see the hardware table above). The figures below are indicative values, not PromptQuorum measurements: speeds vary with GPU, driver, context length and Ollama version, accuracy scores have not been re-run by us, the Coder HumanEval scores are the published full-precision Instruct results (Qwen2.5-Coder technical report, arXiv:2409.12186, Table 16) while the Qwen3 and Qwen2.5-72B scores are indicative and not checked against model cards, and Q4_K_M builds typically score slightly below full precision. Check each model card and test on your own hardware.',
        ],
        rows: [
          { 'Model (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', 'Speed (GPU)': '57 tok/s (RTX 3060 12 GB)' },
          { 'Model (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', 'Speed (GPU)': '38 tok/s (RTX 4070 12 GB)' },
          { 'Model (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', 'Speed (GPU)': '28 tok/s (RTX 4090 24 GB)' },
          { 'Model (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', 'Speed (GPU)': '12 tok/s (2×RTX 3090)' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88.4%', 'Speed (GPU)': '55 tok/s (RTX 3060 12 GB)' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89.6%', 'Speed (GPU)': '36 tok/s (RTX 4070 12 GB)' },
          { 'Model (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', 'Speed (GPU)': '27 tok/s (RTX 4090 24 GB)' },
        ],
        columns: ['Model (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Speed (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Want that 92.7% HumanEval score at 27 tok/s? See the [24 GB GPU that runs Qwen2.5-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-en.webp',
        imageCaption: 'Qwen3 benchmark scores (Q4_K_M) — approximate values',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: Which to Run Locally',
        content: [
          '**In our assessment Qwen is the more VRAM-efficient family on consumer hardware; DeepSeek\'s current V4 line is large-scale (V4-Flash: 284B total parameters) and impractical on a single consumer GPU; Llama 3.3 70B is an alternative if you prefer Meta\'s open model and accept offloading part of the layers to system RAM on a single GPU.** The table below compares the practical options at each VRAM tier.',
        ],
        rows: [
          { 'VRAM Tier': '6 GB', 'Best Qwen': 'Qwen3 8B', 'Best Competitor': 'Llama 3.2 3B (fits, but 3B)', 'Verdict': 'Qwen3 8B wins — same VRAM, much larger model' },
          { 'VRAM Tier': '12 GB', 'Best Qwen': 'Qwen2.5-Coder 14B', 'Best Competitor': 'Llama 3.1 8B Instruct', 'Verdict': 'Qwen2.5-Coder 14B for coding; Llama 3.1 8B for general chat' },
          { 'VRAM Tier': '24 GB', 'Best Qwen': 'Qwen2.5-Coder 32B', 'Best Competitor': 'Llama 3.3 70B (offloaded)', 'Verdict': 'Qwen2.5-Coder 32B for code; Llama 3.3 70B if quality > speed' },
          { 'VRAM Tier': '48 GB+', 'Best Qwen': 'Qwen2.5-72B', 'Best Competitor': 'DeepSeek V4-Flash 284B MoE', 'Verdict': 'Weights alone ~140 GB at 4-bit; Qwen2.5-72B fits 48 GB' },
        ],
        columns: ['VRAM Tier', 'Best Qwen', 'Best Competitor', 'Verdict'],
        tableFormat: true,
        content2: 'For a deeper head-to-head between DeepSeek and Qwen across coding, reasoning, and multilingual tasks, see [DeepSeek vs Qwen local comparison 2026](/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Chinese Users: Data Sovereignty and Local Deployment',
        content: [
          '**Running Qwen3 locally keeps inference prompts on your own hardware, so no inference data is sent to a cloud API — which avoids that cross-border transfer for the inference layer.** Cloud-based LLM APIs require sending prompts to servers abroad, which can raise cross-border data transfer questions under China\'s Data Security Law (DSL) and related rules. Whether your overall setup complies depends on your data, your purposes and your own legal assessment; this is not legal advice.',
          'Qwen3 is trained by Alibaba\'s Qwen team on a predominantly Chinese and multilingual corpus. This makes it a strong candidate for Simplified Chinese, Traditional Chinese, Classical Chinese, and mixed-language (Chinese/English) documents; test it on your own material.',
          '**For enterprise deployments in China**: Qwen3 setups with no internet connection at inference time are generally easier to align with CAC regulations on generative AI, but compliance depends on your use case and should be confirmed with legal counsel. The model runs entirely on local compute, and the regulator\'s focus, as we read it, is training data and output moderation rather than inference on offline hardware. See [running AI fully offline](/power-local-llm/local-ai-behind-firewall-offline-2026) for a complete offline setup guide.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 can run without an internet connection after download, so inference data need not leave your machine, which can reduce cross-border transfer of inference data (compliance under China\'s Data Security Law still depends on your use case).' },
          { type: 'plain-terms', text: 'When you run Qwen3 locally, your prompts and documents stay on your computer unless you connect it to a cloud service. Inference needs no cloud API call; how the rest of your setup handles data is your responsibility.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Which Hardware Should You Buy for Qwen3 Deployment?',
        content: [
          '**Match your target Qwen tier to VRAM first, then buy the cheapest card that clears it — paying for more VRAM than your model needs is the most common overspend on this list.** The picks below map directly to the hardware table above: budget → RTX 4060, mid-range → RTX 4070 Super, high-end → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, always-on → a mini PC. Prices below reflect the 2026 GPU market — memory-chip shortages and AI-datacenter demand have pushed both new GPU and Apple memory pricing well above 2024 launch prices, so check the current listing before buying.',
        ],
        callouts: [
          { type: 'tip', text: 'Skip this section if you already own a GPU with 8 GB+ VRAM — run Qwen3 8B on what you have first. Only buy new hardware once you have hit that ceiling and want a bigger model.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Budget pick — Qwen3 8B, Qwen2.5-Coder 7B (5.5 GB VRAM)',
            verdict: 'The cheapest card on this list that clears the 5.5 GB Qwen3 8B requirement with headroom for context. Runs Qwen2.5-Coder 7B at ~55 tok/s — fast enough for interactive coding assist.',
            pros: [
              '5.5 GB VRAM requirement fits with room to spare for long-context KV cache',
              'Lowest price on this list — the right first GPU if you have never run a local LLM',
              '50–57 tok/s on 7B/8B models, on par with the pricier cards at this model size',
            ],
            cons: [
              'Caps out at Qwen3 8B / Qwen2.5-Coder 7B — no headroom to grow into 14B without a KV-cache squeeze',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: 'Check current price →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Mid-range pick — Qwen3 14B, Qwen2.5-Coder 14B (9.5 GB VRAM)',
            verdict: 'Runs Qwen2.5-Coder 14B (89.6% HumanEval) at 36–38 tok/s with 2–3 GB of VRAM left over for context — a good fit for the 12 GB tier.',
            pros: [
              '9.5 GB model fits with 2–3 GB VRAM to spare — room for longer context windows',
              'HumanEval 89.6% (14B) vs 88.4% (7B), published full-precision Instruct scores — a small gain on this benchmark, so pick the 14B for headroom on harder tasks, not for a big score jump',
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
            tagline: 'High-end pick — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20.5 / ~17 GB VRAM)',
            verdict: 'The 4090 delivers ~27 tok/s on Qwen2.5-Coder 32B — real-time coding speed at 92.7% HumanEval. A used RTX 3090 has the same 24 GB VRAM and lands within ~15% of the 4090\'s inference speed for meaningfully less money if you can find a trusted used listing.',
            pros: [
              '24 GB VRAM covers every Qwen3 32B variant and Qwen 3.6 27B with room to spare',
              '~27 tok/s on Qwen2.5-Coder 32B (92.7% HumanEval) — fast enough for real-time pair programming',
              'Used RTX 3090 is the value alternative: same VRAM ceiling, ~15% slower, meaningfully cheaper second-hand',
            ],
            cons: [
              'Highest upfront cost on this list — only justified once you actually need 32B-class quality',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0B5W8WD7H', productName: 'NVIDIA RTX 4090 24 GB', productCategory: 'GPU', priceRange: '$2,300–2,800', label: 'Check current price →' },
              { url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24 GB (used)', productCategory: 'GPU', priceRange: '$850–1,050', label: 'See used listings →' },
            ],
          },
          {
            rank: 4,
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Apple Silicon pick — Qwen 3.6 27B or Qwen3 32B, quiet and low-power',
            verdict: 'Best value for running Qwen3 32B on unified memory — quiet, low power draw, no separate GPU to install. For Qwen2.5-72B a 64 GB M2 Ultra is the tight minimum and 128 GB or more leaves room for context.',
            pros: [
              'M5 Pro configurations scale up to 64 GB unified memory — well above the 20.5 GB Qwen3 32B requirement, with room to spare for other apps',
              'Silent operation and desktop-friendly power draw — no dedicated GPU cooling to manage',
              'One purchase covers OS, storage, and inference — no separate GPU/PSU/case build',
            ],
            cons: [
              'No independent Qwen3 32B benchmarks for the M5 Pro chip are published yet — expect noticeably slower inference than a dedicated GPU like the RTX 4090, consistent with prior Apple Silicon Mac mini generations',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: 'from $1,699 (64 GB config costs more)', label: 'Check current price →' },
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
          '**Ignoring the context window size.** Per its model card, Qwen3 natively supports 32K tokens and about 131K with YaRN. Ollama\'s Modelfile spec defaults `num_ctx` to 2048, but the runtime actually picks a VRAM-tiered default instead — 4K under 24 GiB, 32K from 24–48 GiB, 256K above 48 GiB. Don\'t rely on either default: set `num_ctx` explicitly, e.g. type `/set parameter num_ctx 8192` (or higher) in the `ollama run` session — otherwise the model silently truncates input.',
          '**Choosing Q2_K quantization for Chinese-language use.** At 2-bit precision, Qwen3\'s Chinese output becomes noticeably degraded — character substitutions increase. Use Q4_K_M as the minimum for any Chinese-language work.',
          '**Running the 32B model with too little VRAM.** If your GPU has 16 GB and the model needs 20.5 GB, Ollama offloads layers to system RAM. The model runs but at 3–5 tok/s — unusable for interactive use. Check the hardware table above and pick a model that fits your VRAM.',
          '**Using the wrong sub-family for coding.** Qwen2.5-Coder 7B is trained for code and scores 88.4% on HumanEval (published full-precision Instruct score), while general-purpose models are not tuned for it. If your use case is code, always use the Coder variant of the same size.',
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
          { q: 'How much VRAM do I need to run Qwen3 8B locally?', a: 'Qwen3 8B Q4_K_M requires 5.5 GB of VRAM. An RTX 3060 12 GB, RTX 4060, or Apple M-series chip with 8 GB of unified memory all run it. At 8 GB VRAM you have headroom for context and system RAM.' },
          { q: 'What is the best Qwen model for coding locally?', a: 'Qwen2.5-Coder 32B is the largest dedicated Qwen2.5 coding model that fits a 24 GB GPU (RTX 3090 or RTX 4090); Qwen reports 92.7% on HumanEval for the full-precision Instruct version. Qwen 3.6 27B also ships a coding variant (`qwen3.6:27b-coding`). If your VRAM is 12 GB or less, use Qwen2.5-Coder 14B (HumanEval 89.6%, 9.5 GB VRAM).' },
          { q: 'How does Qwen compare to DeepSeek for local deployment?', a: 'Qwen uses a dense architecture that fits on consumer hardware. DeepSeek\'s current open-weight line is V4 (V4-Flash: 284B total parameters, mixture-of-experts), which is far beyond a single consumer GPU; the older DeepSeek-V2.5 (236B MoE, 2024) has been superseded by V3 and then V4. For limited VRAM, a Qwen model is the practical choice.' },
          { q: 'Can I run Qwen on a Mac?', a: 'Yes. Apple Silicon uses unified memory — an M2 Pro 32 GB runs Qwen3 14B at ~32 tok/s. An M3 Max 64 GB handles Qwen3 32B at ~22 tok/s. Use the Ollama macOS app or LM Studio for the simplest setup.' },
          { q: 'What Ollama command do I use for Qwen?', a: 'For the flagship, run `ollama run qwen3.6:27b` (~17 GB VRAM). For Qwen3, use `ollama pull qwen3:8b`. For Qwen2.5, use `ollama pull qwen2.5:7b` for 7B, `ollama pull qwen2.5:14b` for 14B, `ollama pull qwen2.5:32b` for 32B, or `ollama pull qwen2.5-coder:32b` for the coding variant. Always use explicit size tags.' },
          { q: 'Is Qwen good for Chinese-language tasks?', a: 'Qwen3 was pretrained on a large Chinese corpus and natively supports Simplified Chinese, Traditional Chinese, Japanese, Korean, Arabic, and many more languages (see the model card). It is a strong candidate for Chinese-language local AI; test it on your own documents.' },
          { q: 'What quantization should I use for Qwen3?', a: 'Q4_K_M is the recommended default — it cuts VRAM by ~55% versus FP16 with small quality loss on benchmarks. Use Q8_0 if you have spare VRAM and want near-FP16 quality. Avoid Q2_K for Chinese-language use.' },
          { q: 'Does Qwen2.5-VL work for Chinese document OCR?', a: 'Yes — Qwen2.5-VL 7B runs through Ollama (`ollama pull qwen2.5vl:7b`, a 6.0 GB download), accepts text and image input, and can read Chinese, Japanese, and Korean text in scanned documents; test it on your own scans. The newer Qwen3-VL is `qwen3-vl:8b`. See the full guide at /local-llms/run-qwen-vl-locally-2026.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 GB, default 27b tag 18–19 GB, 256K context, 27b-coding tag; checked 23 October 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5.2 GB, 14b 9.3 GB, 32b 20 GB, 40K context; checked 23 October 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4.7 GB, 14b 9.0 GB, 32b 20 GB, 72b 47 GB, 32K context; checked 23 October 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4.7 GB, 14b 9.0 GB, 32b 20 GB, 32K context; checked 23 October 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- 32,768 native context, 131,072 with YaRN, 100+ languages',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- 131,072 context with YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- Table 16: HumanEval 88.4 (7B), 89.6 (14B), 92.7 (32B), Instruct models at full precision',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        links: [
          { url: '/local-llms/run-qwen-locally-guide-2026', title: 'How to Run Qwen 3 Locally in 2026', description: 'Single-model setup guide for Qwen 3.6 27B with Ollama and LM Studio — the fastest path to a working Qwen instance.' },
          { url: '/local-llms/run-qwen-vl-locally-2026', title: 'Run Qwen2.5-VL and Qwen3-VL Locally 2026', description: 'Full guide to Qwen2.5-VL and Qwen3-VL — Ollama tags, sizes, licences, CJK document OCR and image Q&A on consumer hardware.' },
          { url: '/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Head-to-head benchmark comparison of Qwen 3.6 27B, Llama 4 Scout, and Mistral Small 3.1 on MMLU, SWE-bench, and MATH.' },
          { url: '/local-llms/llm-quantization-explained', title: 'LLM Quantization Explained', description: 'What Q4_K_M, Q8_0, and IQ4_XS mean — how they affect VRAM, speed, and output quality.' },
          { url: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen Local Comparison 2026', description: 'Full head-to-head: DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32B on coding, reasoning, Chinese, and creative writing — with Mac vs NVIDIA breakdowns.' },
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
    intro: 'Qwen 3.6 27B es la nueva recomendación insignia para despliegue local — un modelo denso con licencia Apache 2.0 y ventana de contexto de 256K que funciona con ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b`. Qwen3 8B funciona con solo 5,5 GB de VRAM mediante Ollama — un único comando, sin configuración. Qwen2.5-Coder 32B alcanza el 92,7 % en HumanEval. Qwen2.5-VL 7B (una descarga de 6,0 GB en Ollama) lee documentos en chino y japonés en local. Qwen3 (2025) es la generación anterior: sigue muy desplegada con Ollama y LM Studio, pero ya no es el Qwen más reciente. Esta guía cubre la familia completa de modelos Qwen: qué modelo ejecutar en cada nivel de hardware, configuración con Ollama y LM Studio, recomendaciones de cuantización, datos de benchmarks y cómo se compara Qwen con DeepSeek y Llama en hardware de consumo en 2026.',
    metaDescription: 'Ejecuta Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen3-Coder y Qwen2.5-VL en local en 2026. Requisitos de VRAM, configuración Ollama y LM Studio y guía por nivel de hardware.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-es.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores, investigadores y usuarios con enfoque en privacidad que quieren ejecutar la familia completa de modelos Qwen en local',
    primaryTerm: 'despliegue local de Qwen',
    affiliateDisclosure: true,
    ctaText: 'Despacha entre Qwen3, DeepSeek y Llama desde una sola interfaz →',
    ctaButton: 'Prueba PromptQuorum gratis',
    leadAnswerBlock: '**La nueva recomendación insignia es Qwen 3.6 27B — un modelo denso con licencia Apache 2.0 y ventana de contexto de 256K que funciona con ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b`.** Para una opción más ligera, Qwen3 8B (generación anterior, aún muy desplegada) se instala con `ollama pull qwen3:8b` — 5,5 GB de VRAM, 57 tokens/seg en una RTX 3060. Para tareas de código usa Qwen2.5-Coder; para OCR de documentos en chino/japonés usa Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) o el más reciente Qwen3-VL (`qwen3-vl:8b`). ¿Ya conoces tu presupuesto de VRAM? Ve directamente a [qué GPU o Mac comprar para cada nivel de Qwen](#affiliate-picks).',
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
      { label: 'Fuentes', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'La presentación a continuación cubre: la nueva recomendación insignia Qwen 3.6 27B (contexto 256K, ~17 GB en Q4_K_M), la familia completa de modelos Qwen (Qwen3 0.6B–32B, Qwen2.5 7B–72B), los requisitos de VRAM por nivel de hardware, los datos de benchmark de Qwen2.5-Coder 32B y un cuadro de decisión Qwen vs DeepSeek vs Llama. Descárgala como tarjeta de referencia de despliegue de Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guía de despliegue local de Qwen 2026: Qwen 3.6 27B, Coder y VL en cada nivel de hardware',
      description: 'Guía completa para desplegar la familia de modelos Qwen en local — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder y VL, requisitos de VRAM, configuración con Ollama y LM Studio, cuantización, benchmarks y recomendaciones de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          {
            '@type': 'Question',
            'name': '¿Cuánta VRAM necesito para ejecutar Qwen3 8B en local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 8B Q4_K_M requiere 5,5 GB de VRAM. Una RTX 3060 12 GB, RTX 4060 o chip Apple M con 8 GB de memoria unificada son suficientes.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el mejor modelo Qwen para programación en local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5-Coder 32B es el modelo de código dedicado más grande de Qwen2.5 que cabe en una GPU de 24 GB; Qwen indica un 92,7 % en HumanEval para la versión Instruct en precisión completa. Qwen 3.6 27B también tiene una variante de código (`qwen3.6:27b-coding`). Con 12 GB de VRAM o menos: Qwen2.5-Coder 14B (89,6 %, 9,5 GB de VRAM).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo se compara Qwen con DeepSeek para el despliegue local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen usa arquitectura densa compatible con hardware de consumo. La línea abierta actual de DeepSeek es V4 (V4-Flash: 284B de parámetros totales, MoE), muy por encima de una sola GPU de consumo; DeepSeek-V2.5 (236B MoE, 2024) quedó superado por V3 y luego por V4.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar Qwen en un Mac?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. M2 Pro 32 GB ejecuta Qwen3 14B a ~32 tok/s. M3 Max 64 GB maneja Qwen3 32B a ~22 tok/s.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué comando de Ollama uso para Qwen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para la insignia, `ollama run qwen3.6:27b` (~17 GB de VRAM). Para Qwen3, `ollama pull qwen3:8b`. Para Qwen2.5, `ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, o `qwen2.5-coder:32b` para la variante de programación. Usa siempre etiquetas de tamaño explícitas.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qwen es adecuado para tareas en chino?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Qwen3 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano y muchos idiomas más (consulta la ficha del modelo). Es un candidato sólido para IA local en chino; pruébalo con tus propios documentos.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué cuantización debo usar para Qwen3?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M por defecto — reduce la VRAM ~55 % respecto a FP16 con poca pérdida de calidad. Evita Q2_K para uso en chino.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Funciona Qwen2.5-VL para OCR de documentos en chino?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí — `ollama pull qwen2.5vl:7b` (descarga de 6,0 GB), acepta texto e imagen y lee texto CJK en documentos escaneados; prueba con tus propios escaneos. El más reciente Qwen3-VL es `qwen3-vl:8b`.',
            },
          },
        ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B es la nueva recomendación insignia**: denso, Apache 2.0, contexto 256K, ~17 GB de VRAM en Q4_K_M mediante `ollama run qwen3.6:27b` (lanzado en abril de 2026).',
          '**Qwen3 8B funciona con 5,5 GB de VRAM** — un solo comando `ollama pull qwen3:8b` y ya está en marcha a 57 tokens/seg en una RTX 3060.',
          '**Cuatro subfamilias prácticas además del modelo insignia**: Qwen3 (general, modo de razonamiento; generación anterior, aún muy desplegada), Qwen2.5 (general, la más probada), Qwen2.5-Coder (programación, 92,7 % en HumanEval en 32B), Qwen2.5-VL (visión, OCR de documentos CJK; Qwen3-VL es la generación de visión más reciente).',
          '**Arquitectura densa = compatible con hardware de consumo**: a diferencia de DeepSeek V4-Flash (modelo MoE de 284B parámetros), Qwen2.5-72B cabe en 46 GB de VRAM en dos RTX 3090.',
          '**Multilingüe nativo**: preentrenado en chino, japonés, coreano, árabe, alemán, francés y muchos idiomas más (consulta la ficha del modelo para la lista exacta).',
          '**Q4_K_M es la cuantización correcta** para la mayoría de usuarios: ~55 % de reducción de VRAM, poca pérdida de calidad en los benchmarks.',
          '**Decisión de hardware**: 12 GB de VRAM → modelo 14B; 24 GB → 32B; 48 GB+ (dos GPUs o Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen cubre tres subfamilias de despliegue local — uso general (7B–72B), programación (Coder 7B–32B) y visión (VL 3B–72B) — todas ejecutables mediante Ollama o LM Studio.' },
          { type: 'plain-terms', text: 'Ejecutar un modelo en local significa que la IA corre en tu propio ordenador en lugar de en un servidor en la nube. Los datos de inferencia no salen de tu máquina (salvo que actives servicios en la nube) y no hay coste por token después de adquirir el hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Descripción general de la familia de modelos Qwen',
        content: [
          '**La gama Qwen abarca ahora cinco opciones prácticas: la insignia Qwen 3.6 27B, Qwen3 (generación anterior, aún muy desplegada), Qwen2.5 de razonamiento general, Qwen2.5-Coder y Qwen2.5-VL para visión** — cada una con múltiples opciones de tamaño. Todos son modelos de pesos abiertos publicados por el equipo Qwen de Alibaba en Hugging Face. Qwen 3.6 se publica como modelo denso de 27B y como modelo de mezcla de expertos 35B-A3B (`qwen3.6:35b`); para hardware modesto, la generación Qwen3.5 (`qwen3.5:4b`, `qwen3.5:9b`) es posterior a Qwen3, y Qwen3-VL (`qwen3-vl:8b`) es la generación de visión más reciente. Consulta la ficha de cada modelo para conocer su licencia.',
          'Elige primero la subfamilia y luego el tamaño que se ajuste a tu VRAM. Es habitual combinar subfamilias: Qwen2.5-Coder 14B para autocompletar código y Qwen3 8B o Qwen 3.6 27B para resumir documentos.',
        ],
        rows: [
          { 'Subfamilia': 'Qwen 3.6 (modelo insignia)', 'Tamaños disponibles': '27B denso, 35B-A3B MoE', 'Uso principal': 'Razonamiento general y programación (`qwen3.6:27b-coding`), contexto de 256K', 'Prefijo de etiqueta Ollama': 'qwen3.6:' },
          { 'Subfamilia': 'Qwen3 (generación anterior)', 'Tamaños disponibles': '0.6B, 1.7B, 4B, 8B, 14B, 32B', 'Uso principal': 'Razonamiento general, modo de razonamiento, multilingüe, tareas agénticas', 'Prefijo de etiqueta Ollama': 'qwen3:' },
          { 'Subfamilia': 'Qwen2.5', 'Tamaños disponibles': '7B, 14B, 32B, 72B', 'Uso principal': 'Razonamiento general, tareas en chino/multilingüe, RAG', 'Prefijo de etiqueta Ollama': 'qwen2.5:' },
          { 'Subfamilia': 'Qwen2.5-Coder', 'Tamaños disponibles': '7B, 14B, 32B', 'Uso principal': 'Generación de código, depuración, HumanEval, SWE-bench', 'Prefijo de etiqueta Ollama': 'qwen2.5-coder:' },
          { 'Subfamilia': 'Qwen2.5-VL', 'Tamaños disponibles': '3B, 7B, 32B, 72B', 'Uso principal': 'OCR de documentos, preguntas sobre imágenes, extracción de texto CJK', 'Prefijo de etiqueta Ollama': 'qwen2.5vl:' },
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
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (GPU)': '~57 tok/s (RTX 3060 12 GB)' },
          { 'Modelo': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidad (GPU)': '~55 tok/s (RTX 3060 12 GB)' },
          { 'Modelo': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6,0 GB', 'GPU mínima': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidad (GPU)': '—' },
          { 'Modelo': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (GPU)': '~38 tok/s (RTX 4070)' },
          { 'Modelo': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidad (GPU)': '~36 tok/s (RTX 4070)' },
          { 'Modelo': 'Qwen3 32B Q4_K_M (generación anterior)', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (GPU)': '~28 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidad (GPU)': '~27 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'GPU mínima': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Velocidad (GPU)': '~24 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidad (GPU)': '~12 tok/s (2×RTX 4090)' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidad (GPU)'],
        tableFormat: true,
        note: 'Las cifras de VRAM son aproximadas para Q4_K_M. La biblioteca de Ollama indica tamaños de descarga de 5,2 GB (qwen3:8b), 9,3 GB (qwen3:14b), 20 GB (qwen3:32b, qwen2.5:32b), 47 GB (qwen2.5:72b) y 17 GB (qwen3.6:27b-q4_K_M; la etiqueta 27b predeterminada pesa 18–19 GB), consultado el 23 de octubre de 2026. Añade 1–2 GB para la caché KV con un contexto de 4K. Si la GPU tiene menos VRAM de la que necesita el modelo, Ollama descarga capas automáticamente a la RAM del sistema — funciona, pero reduce la velocidad significativamente.',
        callouts: [
          { type: 'tip', text: '¿Ya identificaste tu nivel de VRAM? Consulta [exactamente qué GPU o Mac comprar para ese nivel](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M5 Pro o doble GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-es.webp',
        imageCaption: 'Requisitos de VRAM de Qwen3 por tamaño de modelo (Q4_K_M) — valores aproximados',
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
          { title: 'Ajustar la ventana de contexto si es necesario', whyItMatters: 'La biblioteca de Ollama indica una ventana de contexto de 40K para Qwen3, 32K para Qwen2.5 y 256K para Qwen 3.6. Para usar un contexto de 128K en un modelo 7B, inicia `ollama run qwen2.5:7b` y escribe `/set parameter num_ctx 131072` en la sesión. Esto requiere más VRAM.' },
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
ollama pull qwen2.5vl:7b          # visión 7B (~6,0 GB)

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
          '**Q4_K_M es el valor por defecto correcto para Qwen3 en hardware de consumo.** Reduce la VRAM entre un 55–60 % respecto a FP16 con poca degradación en MMLU y HumanEval. Otros formatos tienen casos de uso específicos:',
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
          { type: 'one-sentence', text: 'Q4_K_M es la mejor cuantización de Qwen3 para la mayoría de usuarios: reduce la VRAM un 55 % con poca pérdida de calidad respecto a FP16.' },
          { type: 'plain-terms', text: 'La cuantización comprime los números del modelo de 16 bits a 4 bits, reduciendo aproximadamente a la mitad el tamaño del archivo y la VRAM necesaria. Es como pasar de TIFF a JPEG de alta calidad — archivo más pequeño, resultado casi idéntico para la mayoría de usos.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Rendimiento en benchmarks en hardware de consumo',
        content: [
          '**Qwen3 32B Q4_K_M en una RTX 4090 entrega 28 tokens/seg — velocidad suficiente para asistencia de código en tiempo real.** Qwen3 32B es la generación anterior de Qwen; el más reciente Qwen 3.6 27B cabe en el mismo nivel de 24 GB (consulta la tabla de hardware anterior). Las cifras siguientes son valores orientativos, no mediciones de PromptQuorum: la velocidad varía según la GPU, el controlador, la longitud de contexto y la versión de Ollama, no hemos vuelto a ejecutar las puntuaciones de precisión; las puntuaciones HumanEval de Coder son los resultados publicados de los modelos Instruct en precisión completa (informe técnico de Qwen2.5-Coder, arXiv:2409.12186, tabla 16), mientras que las de Qwen3 y Qwen2.5-72B son orientativas y no se han contrastado con las fichas de modelo, y las versiones Q4_K_M suelen puntuar algo por debajo de la precisión completa. Consulta la ficha de cada modelo y prueba en tu propio hardware.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Velocidad (GPU)': '57 tok/s (RTX 3060 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Velocidad (GPU)': '38 tok/s (RTX 4070 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Velocidad (GPU)': '28 tok/s (RTX 4090 24 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Velocidad (GPU)': '12 tok/s (2×RTX 3090)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88,4 %', 'Velocidad (GPU)': '55 tok/s (RTX 3060 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89,6 %', 'Velocidad (GPU)': '36 tok/s (RTX 4070 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Velocidad (GPU)': '27 tok/s (RTX 4090 24 GB)' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidad (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '¿Quieres esa puntuación del 92,7 % en HumanEval a 27 tok/s? Consulta la [GPU de 24 GB que ejecuta Qwen2.5-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-es.webp',
        imageCaption: 'Puntuaciones de benchmark de Qwen3 (Q4_K_M) — valores aproximados',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: qué ejecutar en local',
        content: [
          '**En nuestra valoración, Qwen es la familia más eficiente en VRAM en hardware de consumo; la línea actual V4 de DeepSeek es de gran escala (V4-Flash: 284B de parámetros totales) y poco práctica en una sola GPU de consumo; Llama 3.3 70B es una alternativa si prefieres el modelo abierto de Meta y aceptas descargar parte de las capas a la RAM del sistema en una sola GPU.** La tabla a continuación compara las opciones prácticas en cada nivel de VRAM.',
        ],
        rows: [
          { 'Nivel de VRAM': '6 GB', 'Mejor Qwen': 'Qwen3 8B', 'Mejor competidor': 'Llama 3.2 3B (cabe, pero solo 3B)', 'Veredicto': 'Qwen3 8B gana — misma VRAM, modelo mucho mayor' },
          { 'Nivel de VRAM': '12 GB', 'Mejor Qwen': 'Qwen2.5-Coder 14B', 'Mejor competidor': 'Llama 3.1 8B Instruct', 'Veredicto': 'Qwen2.5-Coder 14B para código; Llama 3.1 8B para chat general' },
          { 'Nivel de VRAM': '24 GB', 'Mejor Qwen': 'Qwen2.5-Coder 32B', 'Mejor competidor': 'Llama 3.3 70B (con descarga)', 'Veredicto': 'Qwen2.5-Coder 32B para código; Llama 3.3 70B si calidad > velocidad' },
          { 'Nivel de VRAM': '48 GB+', 'Mejor Qwen': 'Qwen2.5-72B', 'Mejor competidor': 'DeepSeek V4-Flash 284B MoE', 'Veredicto': 'Solo los pesos: ~140 GB a 4 bits; Qwen2.5-72B cabe en 48 GB' },
        ],
        columns: ['Nivel de VRAM', 'Mejor Qwen', 'Mejor competidor', 'Veredicto'],
        tableFormat: true,
        content2: 'Para una comparación más detallada entre DeepSeek y Qwen en programación, razonamiento y tareas multilingüe, consulta [comparación local DeepSeek vs Qwen 2026](/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Usuarios hispanohablantes: soberanía de datos y despliegue local',
        content: [
          '**Ejecutar Qwen3 en local mantiene los prompts de inferencia en tu propio hardware, de modo que no se envían datos de inferencia a una API en la nube y se evita esa transferencia internacional en la capa de inferencia.** Las API de LLM en la nube exigen enviar prompts a servidores externos, lo que puede activar los requisitos del RGPD y de las leyes latinoamericanas sobre tratamiento de datos y transferencias internacionales. Que tu configuración en conjunto cumpla la normativa depende de tus datos, tus finalidades y tu propia valoración jurídica; esto no es asesoramiento legal.',
          'Qwen3 fue entrenado por el equipo Qwen de Alibaba sobre un corpus predominantemente chino y multilingüe. Es un candidato sólido para documentos en chino simplificado, chino tradicional y textos mixtos (chino/español/inglés); pruébalo con tu propio material.',
          '**Para despliegues en empresas hispanohablantes**: una configuración de Qwen3 sin conexión a internet durante la inferencia puede facilitar el cumplimiento de los marcos regulatorios de España (RGPD/AEPD), México (LFPDPPP), Argentina (Ley 25.326) y otros países hispanohablantes, pero el cumplimiento depende de tu caso de uso y conviene confirmarlo con asesoría jurídica. El modelo corre íntegramente en hardware local, por lo que, salvo que actives servicios en la nube u otras herramientas conectadas, ningún proveedor externo recibe los datos de entrada o salida de la inferencia. Consulta [ejecutar IA completamente sin conexión](/es/power-local-llm/local-ai-behind-firewall-offline-2026) para una guía completa de configuración aislada.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 puede funcionar sin conexión a internet después de la descarga, por lo que los datos de inferencia no tienen que salir de tu máquina, lo que reduce el riesgo de transferencia transfronteriza de datos bajo el RGPD y las leyes latinoamericanas (el cumplimiento sigue dependiendo de tu caso de uso).' },
          { type: 'plain-terms', text: 'Cuando ejecutas Qwen3 en local, tus prompts y documentos permanecen en tu ordenador salvo que lo conectes a un servicio en la nube. La inferencia no necesita llamar a ninguna API en la nube; cómo trate los datos el resto de tu configuración es responsabilidad tuya.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '¿Qué hardware deberías comprar para desplegar Qwen3?',
        content: [
          '**Primero haz coincidir tu nivel de Qwen objetivo con la VRAM necesaria y luego compra la tarjeta más barata que la cubra — pagar por más VRAM de la que tu modelo necesita es el sobregasto más habitual de esta lista.** Las recomendaciones siguientes corresponden directamente a la tabla de hardware anterior: económico → RTX 4060, gama media → RTX 4070 Super, gama alta → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, uso continuo → un mini PC. Los precios siguientes reflejan el mercado de GPU de 2026 — la escasez de chips de memoria y la demanda de los centros de datos de IA han encarecido tanto las GPU nuevas como las configuraciones de memoria de Apple; comprueba el precio actual antes de comprar.',
        ],
        callouts: [
          { type: 'tip', text: 'Sáltate esta sección si ya tienes una GPU con 8 GB o más de VRAM — ejecuta primero Qwen3 8B en lo que ya tienes. Compra hardware nuevo solo cuando llegues a ese límite y quieras un modelo más grande.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Opción económica — Qwen3 8B, Qwen2.5-Coder 7B (5,5 GB de VRAM)',
            verdict: 'La tarjeta más barata de esta lista que cubre el requisito de 5,5 GB de Qwen3 8B con margen para el contexto. Ejecuta Qwen2.5-Coder 7B a ~55 tok/s — suficientemente rápido para asistencia de código interactiva.',
            pros: [
              'El requisito de 5,5 GB de VRAM se cubre con margen para caché KV de contexto largo',
              'El precio más bajo de esta lista — la GPU adecuada para empezar si nunca has ejecutado un LLM local',
              '50–57 tok/s en modelos 7B/8B, a la par con tarjetas más caras en este tamaño de modelo',
            ],
            cons: [
              'Se queda en Qwen3 8B / Qwen2.5-Coder 7B — sin margen para crecer a 14B sin apretar la caché KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.es/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '470–600 €', label: 'Consultar precio actual →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Opción de gama media — Qwen3 14B, Qwen2.5-Coder 14B (9,5 GB de VRAM)',
            verdict: 'Ejecuta Qwen2.5-Coder 14B (89,6 % en HumanEval) a 36–38 tok/s con 2–3 GB de VRAM libres para el contexto — una buena opción para el nivel de 12 GB.',
            pros: [
              'El modelo de 9,5 GB cabe con 2–3 GB de VRAM de margen — espacio para ventanas de contexto más largas',
              'HumanEval 89,6 % (14B) frente a 88,4 % (7B), puntuaciones Instruct publicadas en precisión completa — una mejora pequeña en este benchmark, así que elige el 14B por el margen en tareas más difíciles, no por un gran salto de puntuación',
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
            tagline: 'Opción de gama alta — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20,5 / ~17 GB de VRAM)',
            verdict: 'La 4090 entrega ~27 tok/s en Qwen2.5-Coder 32B — velocidad de código en tiempo real con un 92,7 % en HumanEval. Una RTX 3090 de segunda mano tiene la misma VRAM de 24 GB y se queda a un ~15 % de la velocidad de inferencia de la 4090, por bastante menos dinero si encuentras un anuncio de confianza.',
            pros: [
              '24 GB de VRAM cubren todas las variantes de Qwen3 32B y Qwen 3.6 27B con margen',
              '~27 tok/s en Qwen2.5-Coder 32B (92,7 % en HumanEval) — suficientemente rápido para programación en pareja en tiempo real',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Opción Apple Silicon — Qwen 3.6 27B o Qwen3 32B, silencioso y de bajo consumo',
            verdict: 'La mejor relación calidad/precio para ejecutar Qwen3 32B con memoria unificada — silencioso, bajo consumo eléctrico, sin GPU separada que instalar. Para Qwen2.5-72B un M2 Ultra de 64 GB es el mínimo justo y con 128 GB o más queda margen para el contexto.',
            pros: [
              'Las configuraciones M5 Pro escalan hasta 64 GB de memoria unificada — muy por encima del requisito de 20,5 GB de Qwen3 32B, con margen para otras aplicaciones',
              'Funcionamiento silencioso y consumo adecuado para escritorio — sin gestión de refrigeración dedicada de GPU',
              'Una sola compra cubre sistema operativo, almacenamiento e inferencia — sin montaje aparte de GPU/fuente/caja',
            ],
            cons: [
              'Aún no hay benchmarks independientes de Qwen3 32B en el chip M5 Pro — espera un rendimiento notablemente más lento que una GPU dedicada como la RTX 4090, en línea con generaciones anteriores de Apple Silicon en el Mac mini',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/es/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: 'desde 1.700 € (la configuración de 64 GB cuesta más)', label: 'Consultar precio actual →' },
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
          '**Ignorar el tamaño de la ventana de contexto.** Según su ficha de modelo, Qwen3 admite de forma nativa 32K tokens y unos 131K con YaRN. La especificación del Modelfile de Ollama establece `num_ctx` en 2048 por defecto, pero en tiempo de ejecución se aplica un valor predeterminado escalonado según la VRAM: 4K por debajo de 24 GiB, 32K entre 24 y 48 GiB, y 256K por encima de 48 GiB. No confíes en ninguno de los dos valores predeterminados: configura `num_ctx` explícitamente, por ejemplo escribiendo `/set parameter num_ctx 8192` (o más) en la sesión de `ollama run` — de lo contrario el modelo trunca la entrada en silencio.',
          '**Elegir cuantización Q2_K para uso en chino.** A 2 bits de precisión, la salida en chino de Qwen3 se degrada notablemente. Usa Q4_K_M como mínimo para cualquier trabajo en chino.',
          '**Ejecutar el modelo 32B con poca VRAM.** Si la GPU tiene 16 GB y el modelo necesita 20,5 GB, Ollama descarga capas a la RAM del sistema. El modelo funciona pero a 3–5 tok/s — inutilizable para uso interactivo. Consulta la tabla de hardware y elige un modelo que quepa en tu VRAM.',
          '**Usar la subfamilia incorrecta para programación.** Qwen2.5-Coder 7B está entrenado para código y puntúa 88,4 % en HumanEval (puntuación Instruct publicada en precisión completa), mientras que los modelos de uso general no están ajustados para ello. Si tu caso de uso es código, usa siempre la variante Coder del mismo tamaño.',
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
            { q: '¿Cuánta VRAM necesito para ejecutar Qwen3 8B en local?', a: 'Qwen3 8B Q4_K_M requiere 5,5 GB de VRAM. Una RTX 3060 12 GB, RTX 4060 o chip Apple M con 8 GB de memoria unificada son suficientes.' },
            { q: '¿Cuál es el mejor modelo Qwen para programación en local?', a: 'Qwen2.5-Coder 32B es el modelo de código dedicado más grande de Qwen2.5 que cabe en una GPU de 24 GB; Qwen indica un 92,7 % en HumanEval para la versión Instruct en precisión completa. Qwen 3.6 27B también tiene una variante de código (`qwen3.6:27b-coding`). Con 12 GB de VRAM o menos: Qwen2.5-Coder 14B (89,6 %, 9,5 GB de VRAM).' },
            { q: '¿Cómo se compara Qwen con DeepSeek para el despliegue local?', a: 'Qwen usa arquitectura densa compatible con hardware de consumo. La línea abierta actual de DeepSeek es V4 (V4-Flash: 284B de parámetros totales, MoE), muy por encima de una sola GPU de consumo; DeepSeek-V2.5 (236B MoE, 2024) quedó superado por V3 y luego por V4.' },
            { q: '¿Puedo ejecutar Qwen en un Mac?', a: 'Sí. M2 Pro 32 GB ejecuta Qwen3 14B a ~32 tok/s. M3 Max 64 GB maneja Qwen3 32B a ~22 tok/s.' },
            { q: '¿Qué comando de Ollama uso para Qwen?', a: 'Para la insignia, `ollama run qwen3.6:27b` (~17 GB de VRAM). Para Qwen3, `ollama pull qwen3:8b`. Para Qwen2.5, `ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, o `qwen2.5-coder:32b` para la variante de programación. Usa siempre etiquetas de tamaño explícitas.' },
            { q: '¿Qwen es adecuado para tareas en chino?', a: 'Sí. Qwen3 fue preentrenado sobre un gran corpus chino y soporta de forma nativa chino simplificado, chino tradicional, japonés, coreano y muchos idiomas más (consulta la ficha del modelo). Es un candidato sólido para IA local en chino; pruébalo con tus propios documentos.' },
            { q: '¿Qué cuantización debo usar para Qwen3?', a: 'Q4_K_M por defecto — reduce la VRAM ~55 % respecto a FP16 con poca pérdida de calidad. Evita Q2_K para uso en chino.' },
            { q: '¿Funciona Qwen2.5-VL para OCR de documentos en chino?', a: 'Sí — `ollama pull qwen2.5vl:7b` (descarga de 6,0 GB), acepta texto e imagen y lee texto CJK en documentos escaneados; prueba con tus propios escaneos. El más reciente Qwen3-VL es `qwen3-vl:8b`.' },
          ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 GB, etiqueta 27b predeterminada 18–19 GB, contexto de 256K, etiqueta 27b-coding; consultado el 23 de octubre de 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5,2 GB, 14b 9,3 GB, 32b 20 GB, contexto de 40K; consultado el 23 de octubre de 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, 72b 47 GB, contexto de 32K; consultado el 23 de octubre de 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, contexto de 32K; consultado el 23 de octubre de 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- contexto nativo de 32.768, 131.072 con YaRN, más de 100 idiomas',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- contexto de 131.072 con YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- Tabla 16: HumanEval 88,4 (7B), 89,6 (14B), 92,7 (32B), modelos Instruct en precisión completa',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        links: [
          { url: '/es/local-llms/run-qwen-locally-guide-2026', title: 'Cómo ejecutar Qwen 3 en local en 2026', description: 'Guía de configuración de un solo modelo para Qwen 3.6 27B con Ollama y LM Studio — la forma más rápida de tener una instancia de Qwen funcionando.' },
          { url: '/es/local-llms/run-qwen-vl-locally-2026', title: 'Ejecutar Qwen2.5-VL y Qwen3-VL en local en 2026', description: 'Guía completa de Qwen2.5-VL y Qwen3-VL — etiquetas de Ollama, tamaños, licencias, OCR de documentos CJK y preguntas sobre imágenes en hardware de consumo.' },
          { url: '/es/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Comparación de benchmarks de Qwen 3.6 27B, Llama 4 Scout y Mistral Small 3.1 en MMLU, SWE-bench y MATH.' },
          { url: '/es/local-llms/llm-quantization-explained', title: 'Cuantización de LLM explicada', description: 'Qué significan Q4_K_M, Q8_0 e IQ4_XS — cómo afectan a la VRAM, la velocidad y la calidad de salida.' },
          { url: '/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'Comparación local DeepSeek vs Qwen 2026', description: 'Comparación completa: DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32B en programación, razonamiento, chino y escritura creativa — con desglose Mac vs NVIDIA.' },
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
    intro: 'Qwen 3.6 27B هو الاختيار الرئيسي الجديد للنشر المحلي — نموذج كثيف بترخيص Apache 2.0 وسياق 256K، يعمل بـ ~17 GB VRAM عبر `ollama run qwen3.6:27b`. يعمل Qwen3 8B بـ 5.5 GB فقط من VRAM عبر Ollama — أمر واحد، بلا إعداد. يحقق Qwen2.5-Coder 32B نسبة 92.7% في HumanEval. ويقرأ Qwen2.5-VL 7B (تنزيل 6.0 GB عبر Ollama) المستندات الصينية واليابانية محليًا. أما Qwen3 (2025) فهو الجيل السابق: لا يزال منتشرًا على نطاق واسع عبر Ollama وLM Studio، لكنه لم يعد أحدث Qwen. يغطي هذا الدليل عائلة نماذج Qwen الكاملة: أي نموذج تشغّل على كل مستوى أجهزة، والإعداد عبر Ollama وLM Studio، وتوصيات التكميم، وبيانات المعايير، وكيف يقارن Qwen بـ DeepSeek وLlama على الأجهزة الاستهلاكية في 2026.',
    metaDescription: 'شغّل Qwen 3.6 27B وQwen3 وQwen2.5 (7B–72B) وQwen2.5-Coder وQwen2.5-VL محليًا في 2026. متطلبات VRAM وإعداد Ollama وLM Studio وبنشمارك Q4_K_M ودليل مستويات الأجهزة.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ar.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون والباحثون والمستخدمون المهتمون بالخصوصية الذين يريدون تشغيل عائلة نماذج Qwen الكاملة محليًا',
    primaryTerm: 'النشر المحلي لـ Qwen',
    affiliateDisclosure: true,
    ctaText: 'وزّع بين Qwen3 وDeepSeek وLlama من واجهة واحدة ←',
    ctaButton: 'جرّب PromptQuorum مجانًا',
    leadAnswerBlock: '**الاختيار الرائد الجديد هو Qwen 3.6 27B — نموذج كثيف برخصة Apache 2.0 ونافذة سياق 256K يعمل بـ ~17 GB من VRAM عند Q4_K_M عبر `ollama run qwen3.6:27b`.** لإعداد أخف، نفّذ `ollama pull qwen3:8b` لتشغيل Qwen3 8B (الجيل السابق، ولا يزال منتشرًا على نطاق واسع) — يتطلب 5.5 GB من VRAM ويقدّم 57 token/ثانية على RTX 3060. لمهام الكود استخدم Qwen2.5-Coder؛ ولـ OCR للمستندات الصينية/اليابانية استخدم Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) أو Qwen3-VL الأحدث (`qwen3-vl:8b`). هل تعرف بالفعل ميزانية VRAM لديك؟ انتقل مباشرة إلى [بطاقة الرسوم أو جهاز Mac المناسب لكل مستوى من Qwen](#affiliate-picks).',
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
      { label: 'المصادر', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'يغطي العرض التقديمي أدناه: الاختيار الرائد الجديد Qwen 3.6 27B (سياق 256K، ~17 GB عند Q4_K_M)، وعائلة نماذج Qwen الكاملة (Qwen3 من 0.6B إلى 32B، وQwen2.5 من 7B إلى 72B)، ومتطلبات VRAM حسب مستوى الأجهزة، وبيانات معيار Qwen2.5-Coder 32B، وجدول قرار Qwen مقابل DeepSeek مقابل Llama. نزّله كبطاقة مرجعية لنشر Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'دليل النشر المحلي لـ Qwen 2026: شغّل Qwen 3.6 27B وQwen3 وCoder وVL على كل مستوى أجهزة',
      description: 'دليل كامل لنشر عائلة نماذج Qwen محليًا — Qwen 3.6 27B وQwen3 وQwen2.5 وCoder وVL، ومتطلبات VRAM، والإعداد عبر Ollama وLM Studio، والتكميم، والمعايير، وتوصيات الأجهزة.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
        { '@type': 'Question', name: 'كم من VRAM أحتاج لتشغيل Qwen3 8B محليًا؟', acceptedAnswer: { '@type': 'Answer', text: 'يتطلب Qwen3 8B Q4_K_M 5.5 GB من VRAM. تكفي NVIDIA RTX 3060 12 GB أو RTX 4060 أو شريحة Apple M بذاكرة موحدة 8 GB.' } },
        { '@type': 'Question', name: 'ما أفضل نموذج Qwen للبرمجة محليًا؟', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B أكبر نموذج برمجة مخصص من Qwen2.5 يتسع في بطاقة رسوم بسعة 24 GB (RTX 3090 أو RTX 4090)؛ وتذكر Qwen نتيجة 92.7% في HumanEval لنسخة Instruct بدقة كاملة. بـ 12 GB من VRAM أو أقل، استخدم Qwen2.5-Coder 14B (HumanEval 89.6%، 9.5 GB من VRAM).' } },
        { '@type': 'Question', name: 'كيف يقارن Qwen بـ DeepSeek للنشر المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'يستخدم Qwen بنية كثيفة تتسع في الأجهزة الاستهلاكية. خط DeepSeek المفتوح الحالي هو V4 (V4-Flash: 284B معامل إجمالي، MoE)، وهو أكبر بكثير من بطاقة رسوم استهلاكية واحدة؛ أما DeepSeek-V2.5 (236B MoE، 2024) فقد حلّ محله V3 ثم V4. عند محدودية VRAM يبقى نموذج Qwen هو الخيار العملي.' } },
        { '@type': 'Question', name: 'هل يمكنني تشغيل Qwen على جهاز Mac؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يستخدم Apple Silicon ذاكرة موحدة — يشغّل M2 Pro 32 GB نموذج Qwen3 14B بـ ~32 token/ثانية. ويتعامل M3 Max 64 GB مع Qwen3 32B بـ ~22 token/ثانية.' } },
        { '@type': 'Question', name: 'ما أمر Ollama الذي أستخدمه لـ Qwen؟', acceptedAnswer: { '@type': 'Answer', text: 'للنموذج الرائد، نفّذ `ollama run qwen3.6:27b` (~17 GB من VRAM). لـ Qwen3، استخدم `ollama pull qwen3:8b`. لـ Qwen2.5، استخدم `ollama pull qwen2.5:7b` لـ 7B، و`ollama pull qwen2.5:14b` لـ 14B، و`ollama pull qwen2.5:32b` لـ 32B، أو `ollama pull qwen2.5-coder:32b` لمتغير البرمجة. استخدم دائمًا وسوم حجم صريحة.' } },
        { '@type': 'Question', name: 'هل Qwen مناسب للمهام باللغة الصينية؟', acceptedAnswer: { '@type': 'Answer', text: 'دُرّب Qwen3 مسبقًا على مجموعة نصية صينية ضخمة ويدعم أصليًا الصينية المبسّطة والتقليدية واليابانية والكورية والعربية ولغات كثيرة أخرى (راجع بطاقة النموذج). وهو مرشح قوي للذكاء الاصطناعي المحلي بالصينية؛ جرّبه على مستنداتك.' } },
        { '@type': 'Question', name: 'أي تكميم ينبغي أن أستخدم لـ Qwen3؟', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M هو القيمة الافتراضية الموصى بها — يقلّل VRAM بنحو 55% مقارنةً بـ FP16 مع فقدان جودة طفيف في المعايير. استخدم Q8_0 إذا كان لديك فائض من VRAM وتريد جودة قريبة من FP16. تجنّب Q2_K للاستخدام بالصينية.' } },
        { '@type': 'Question', name: 'هل يعمل Qwen2.5-VL لـ OCR للمستندات الصينية؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — يعمل Qwen2.5-VL 7B عبر Ollama (`ollama pull qwen2.5vl:7b`، تنزيل 6.0 GB) ويقبل النص والصور، ويمكنه قراءة النصوص الصينية واليابانية والكورية في المستندات الممسوحة؛ جرّبه على مستنداتك لأن الدقة تعتمد على جودة المسح. وQwen3-VL الأحدث متاح عبر `qwen3-vl:8b` (6.1 GB).' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B هو الاختيار الرائد الجديد**: كثيف، Apache 2.0، سياق 256K، ~17 GB من VRAM عند Q4_K_M عبر `ollama run qwen3.6:27b` (صدر في أبريل 2026).',
          '**يعمل Qwen3 8B بـ 5.5 GB من VRAM** — أمر واحد `ollama pull qwen3:8b` وينطلق بـ 57 token/ثانية على RTX 3060.',
          '**أربع عائلات فرعية عملية إضافة إلى النموذج الرائد**: Qwen3 (استخدام عام، وضع استدلال؛ الجيل السابق ولا يزال منتشرًا)، Qwen2.5 (استخدام عام، الأكثر اختبارًا)، Qwen2.5-Coder (برمجة، 92.7% في HumanEval على 32B)، Qwen2.5-VL (رؤية، OCR لمستندات CJK؛ وQwen3-VL هو جيل الرؤية الأحدث).',
          '**بنية كثيفة = متوافقة مع الأجهزة الاستهلاكية**: على عكس DeepSeek V4-Flash (نموذج MoE بحجم 284B معامل)، يتسع Qwen2.5-72B في 46 GB من VRAM على بطاقتي RTX 3090.',
          '**متعدد اللغات أصليًا**: مدرَّب مسبقًا على الصينية واليابانية والكورية والعربية والألمانية والفرنسية ولغات كثيرة أخرى (راجع بطاقة النموذج للقائمة الدقيقة).',
          '**Q4_K_M هو التكميم الصحيح** لمعظم المستخدمين: تقليل VRAM بنحو 55%، فقدان جودة طفيف في المعايير.',
          '**قرار الأجهزة**: 12 GB من VRAM ← نموذج 14B؛ 24 GB ← 32B؛ 48 GB+ (بطاقتا رسوم أو Apple Silicon 64 GB) ← 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يغطي Qwen ثلاث عائلات فرعية للنشر المحلي — استخدام عام (7B–72B) وبرمجة (Coder 7B–32B) ورؤية (VL 3B–72B) — جميعها قابلة للتشغيل عبر Ollama أو LM Studio.' },
          { type: 'plain-terms', text: 'تشغيل نموذج محليًا يعني أن الذكاء الاصطناعي يعمل على حاسوبك بدلًا من خادم سحابي. لا تغادر بيانات الاستدلال جهازك (ما لم تفعّل خدمات سحابية) ولا توجد تكلفة لكل token بعد اقتناء الأجهزة.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'نظرة عامة على عائلة نماذج Qwen',
        content: [
          '**تضم تشكيلة Qwen الآن خمسة خيارات عملية: الرائد Qwen 3.6 27B، وQwen3 (الجيل السابق، ولا يزال منتشرًا على نطاق واسع)، وQwen2.5 للاستدلال العام، وQwen2.5-Coder، وQwen2.5-VL للرؤية** — لكل منها خيارات أحجام متعددة. جميعها نماذج ذات أوزان مفتوحة نشرها فريق Qwen التابع لـ Alibaba على Hugging Face. يصدر Qwen 3.6 كنموذج كثيف بحجم 27B وكنموذج مزيج خبراء 35B-A3B (`qwen3.6:35b`)؛ وللأجهزة المتواضعة يأتي جيل Qwen3.5 (`qwen3.5:4b` و`qwen3.5:9b`) بعد Qwen3، ويمثل Qwen3-VL (`qwen3-vl:8b`) جيل الرؤية الأحدث. راجع بطاقة كل نموذج لمعرفة ترخيصه.',
          'اختر العائلة الفرعية أولًا ثم الحجم الذي يلائم VRAM لديك. من المعتاد دمج العائلات الفرعية: Qwen2.5-Coder 14B لإكمال الكود وQwen3 8B أو Qwen 3.6 27B لتلخيص المستندات.',
        ],
        rows: [
          { 'العائلة الفرعية': 'Qwen 3.6 (النموذج الرائد)', 'الأحجام المتاحة': '27B كثيف، 35B-A3B MoE', 'الاستخدام الرئيسي': 'الاستدلال العام والبرمجة (`qwen3.6:27b-coding`)، سياق 256K', 'بادئة وسم Ollama': 'qwen3.6:' },
          { 'العائلة الفرعية': 'Qwen3 (الجيل السابق)', 'الأحجام المتاحة': '0.6B، 1.7B، 4B، 8B، 14B، 32B', 'الاستخدام الرئيسي': 'الاستدلال العام، وضع الاستدلال، متعدد اللغات، المهام الوكيلية', 'بادئة وسم Ollama': 'qwen3:' },
          { 'العائلة الفرعية': 'Qwen2.5', 'الأحجام المتاحة': '7B، 14B، 32B، 72B', 'الاستخدام الرئيسي': 'الاستدلال العام، المهام بالصينية/متعددة اللغات، RAG', 'بادئة وسم Ollama': 'qwen2.5:' },
          { 'العائلة الفرعية': 'Qwen2.5-Coder', 'الأحجام المتاحة': '7B، 14B، 32B', 'الاستخدام الرئيسي': 'توليد الكود، التصحيح، HumanEval، SWE-bench', 'بادئة وسم Ollama': 'qwen2.5-coder:' },
          { 'العائلة الفرعية': 'Qwen2.5-VL', 'الأحجام المتاحة': '3B، 7B، 32B، 72B', 'الاستخدام الرئيسي': 'OCR للمستندات، الأسئلة عن الصور، استخراج نص CJK', 'بادئة وسم Ollama': 'qwen2.5vl:' },
        ],
        columns: ['العائلة الفرعية', 'الأحجام المتاحة', 'الاستخدام الرئيسي', 'بادئة وسم Ollama'],
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
          { 'النموذج': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 3060 12 GB، RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'السرعة (GPU)': '~57 tok/s (RTX 3060 12 GB)' },
          { 'النموذج': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 3060 12 GB، RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'السرعة (GPU)': '~55 tok/s (RTX 3060 12 GB)' },
          { 'النموذج': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6.0 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 3060 8 GB، RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'السرعة (GPU)': '—' },
          { 'النموذج': 'Qwen3 14B Q4_K_M', 'VRAM': '9.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'السرعة (GPU)': '~38 tok/s (RTX 4070)' },
          { 'النموذج': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'السرعة (GPU)': '~36 tok/s (RTX 4070)' },
          { 'النموذج': 'Qwen3 32B Q4_K_M (الجيل السابق)', 'VRAM': '20.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'السرعة (GPU)': '~28 tok/s (RTX 4090)' },
          { 'النموذج': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'السرعة (GPU)': '~27 tok/s (RTX 4090)' },
          { 'النموذج': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'الحد الأدنى لبطاقة الرسوم': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'السرعة (GPU)': '~24 tok/s (RTX 4090)' },
          { 'النموذج': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'الحد الأدنى لبطاقة الرسوم': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'السرعة (GPU)': '~12 tok/s (2×RTX 4090)' },
        ],
        columns: ['النموذج', 'VRAM', 'الحد الأدنى لبطاقة الرسوم', 'Apple Silicon', 'السرعة (GPU)'],
        tableFormat: true,
        note: 'أرقام VRAM تقريبية لصيغة Q4_K_M. تذكر مكتبة Ollama أحجام تنزيل: 5.2 GB (qwen3:8b) و9.3 GB (qwen3:14b) و20 GB (qwen3:32b وqwen2.5:32b) و47 GB (qwen2.5:72b) و17 GB (qwen3.6:27b-q4_K_M؛ الوسم الافتراضي 27b بحجم 18–19 GB)، جرى التحقق في 23 أكتوبر 2026. أضف 1–2 GB لذاكرة KV المؤقتة بسياق 4K. إذا كانت بطاقة الرسوم تملك VRAM أقل مما يحتاج النموذج، يفرّغ Ollama الطبقات تلقائيًا إلى RAM النظام — يعمل، لكنه يقلّل السرعة بشكل كبير.',
        callouts: [
          { type: 'tip', text: 'هل حددت مستوى VRAM الخاص بك؟ اطّلع على [بطاقة الرسوم أو جهاز Mac المناسب تمامًا لهذا المستوى](#affiliate-picks) — 6 GB ← RTX 4060، 12 GB ← RTX 4070 Super، 24 GB ← RTX 3090/4090، 48 GB فأكثر ← Mac mini M5 Pro أو بطاقتا رسوم.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ar.webp',
        imageCaption: 'متطلبات VRAM لـ Qwen3 حسب حجم النموذج (Q4_K_M) — قيم تقريبية',
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
          { title: 'اضبط نافذة السياق عند الحاجة', whyItMatters: 'تذكر مكتبة Ollama نافذة سياق بطول 40K لـ Qwen3 و32K لـ Qwen2.5 و256K لـ Qwen 3.6. لاستخدام سياق 128K على نموذج 7B، شغّل `ollama run qwen2.5:7b` ثم اكتب `/set parameter num_ctx 131072` داخل الجلسة. يتطلب هذا مزيدًا من VRAM.' },
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
ollama pull qwen2.5vl:7b          # visión 7B (~6,0 GB)

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
          '**Q4_K_M هو القيمة الافتراضية الصحيحة لـ Qwen3 على الأجهزة الاستهلاكية.** يقلّل VRAM بين 55–60% مقارنةً بـ FP16 مع تدهور طفيف في MMLU وHumanEval. للتنسيقات الأخرى حالات استخدام محددة:',
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
          { type: 'one-sentence', text: 'Q4_K_M هو أفضل تكميم لـ Qwen3 لمعظم المستخدمين: يقلّل VRAM بنسبة 55% مع فقدان جودة طفيف مقارنةً بـ FP16.' },
          { type: 'plain-terms', text: 'يضغط التكميم أرقام النموذج من 16 بت إلى 4 بت، فيقلّل حجم الملف وVRAM المطلوب إلى النصف تقريبًا. الأمر أشبه بالانتقال من TIFF إلى JPEG عالي الجودة — ملف أصغر، ونتيجة شبه متطابقة لمعظم الاستخدامات.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'أداء المعايير على الأجهزة الاستهلاكية',
        content: [
          '**يقدّم Qwen3 32B Q4_K_M على RTX 4090 سرعة 28 token/ثانية — سرعة كافية للمساعدة البرمجية في الوقت الفعلي.** Qwen3 32B هو الجيل السابق من Qwen؛ ويتسع Qwen 3.6 27B الأحدث في مستوى 24 GB نفسه (راجع جدول الأجهزة أعلاه). الأرقام أدناه قيم تقريبية وليست قياسات أجرتها PromptQuorum: تختلف السرعة بحسب بطاقة الرسوم وبرنامج التشغيل وطول السياق وإصدار Ollama، ولم نُعد تشغيل درجات الدقة، ودرجات HumanEval الخاصة بـ Coder هي النتائج المنشورة لنماذج Instruct بدقة كاملة (التقرير التقني لـ Qwen2.5-Coder، arXiv:2409.12186، الجدول 16)، أما درجات Qwen3 وQwen2.5-72B فتقريبية ولم تُقارَن ببطاقات النماذج، وتسجّل نسخ Q4_K_M عادةً درجة أقل قليلًا من الدقة الكاملة. راجع بطاقة كل نموذج واختبر على جهازك قبل الاعتماد عليها.',
        ],
        rows: [
          { 'النموذج (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', 'السرعة (GPU)': '57 tok/s (RTX 3060 12 GB)' },
          { 'النموذج (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', 'السرعة (GPU)': '38 tok/s (RTX 4070 12 GB)' },
          { 'النموذج (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', 'السرعة (GPU)': '28 tok/s (RTX 4090 24 GB)' },
          { 'النموذج (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', 'السرعة (GPU)': '12 tok/s (2×RTX 3090)' },
          { 'النموذج (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88.4%', 'السرعة (GPU)': '55 tok/s (RTX 3060 12 GB)' },
          { 'النموذج (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89.6%', 'السرعة (GPU)': '36 tok/s (RTX 4070 12 GB)' },
          { 'النموذج (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', 'السرعة (GPU)': '27 tok/s (RTX 4090 24 GB)' },
        ],
        columns: ['النموذج (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'السرعة (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'هل تريد تحقيق درجة 92.7% في HumanEval بسرعة 27 token/ثانية؟ اطّلع على [بطاقة الرسوم بسعة 24 GB التي تشغّل Qwen2.5-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ar.webp',
        imageCaption: 'درجات معيار Qwen3 (Q4_K_M) — قيم تقريبية',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen مقابل DeepSeek مقابل Llama: ماذا تشغّل محليًا',
        content: [
          '**في تقديرنا، تُعد عائلة Qwen الأكثر كفاءة في استخدام VRAM على الأجهزة الاستهلاكية؛ وخط DeepSeek V4 الحالي واسع النطاق (V4-Flash: 284B معامل إجمالي) وغير عملي على بطاقة رسوم استهلاكية واحدة؛ وLlama 3.3 70B بديل إذا كنت تفضّل النموذج المفتوح من Meta وتقبل نقل جزء من الطبقات إلى ذاكرة النظام على بطاقة رسوم واحدة.** يقارن الجدول أدناه الخيارات العملية في كل مستوى VRAM.',
        ],
        rows: [
          { 'مستوى VRAM': '6 GB', 'أفضل Qwen': 'Qwen3 8B', 'أفضل منافس': 'Llama 3.2 3B (يتسع، لكنه 3B فقط)', 'الحكم': 'يفوز Qwen3 8B — نفس VRAM، نموذج أكبر بكثير' },
          { 'مستوى VRAM': '12 GB', 'أفضل Qwen': 'Qwen2.5-Coder 14B', 'أفضل منافس': 'Llama 3.1 8B Instruct', 'الحكم': 'Qwen2.5-Coder 14B للكود؛ Llama 3.1 8B للدردشة العامة' },
          { 'مستوى VRAM': '24 GB', 'أفضل Qwen': 'Qwen2.5-Coder 32B', 'أفضل منافس': 'Llama 3.3 70B (مع تفريغ)', 'الحكم': 'Qwen2.5-Coder 32B للكود؛ Llama 3.3 70B إذا كانت الجودة > السرعة' },
          { 'مستوى VRAM': '48 GB+', 'أفضل Qwen': 'Qwen2.5-72B', 'أفضل منافس': 'DeepSeek V4-Flash 284B MoE', 'الحكم': 'الأوزان وحدها ~140 GB بتكميم 4 بت؛ Qwen2.5-72B يناسب 48 GB' },
        ],
        columns: ['مستوى VRAM', 'أفضل Qwen', 'أفضل منافس', 'الحكم'],
        tableFormat: true,
        content2: 'لمقارنة أكثر تفصيلًا بين DeepSeek وQwen في البرمجة والاستدلال والمهام متعددة اللغات، راجع [مقارنة محلية DeepSeek مقابل Qwen 2026](/ar/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'المستخدمون الناطقون بالعربية: سيادة البيانات والنشر المحلي',
        content: [
          '**تشغيل Qwen3 محليًا يُبقي أوامر الاستدلال على جهازك، فلا تُرسل بيانات الاستدلال إلى واجهة API سحابية، وبذلك يُتجنَّب هذا النقل الدولي في طبقة الاستدلال.** تتطلب واجهات API لنماذج LLM السحابية إرسال الأوامر إلى خوادم خارجية، مما قد يُفعّل متطلبات GDPR وقوانين حماية البيانات في الخليج بشأن معالجة البيانات والنقل الدولي. ويعتمد امتثال إعدادك ككل على بياناتك وأغراضك وتقييمك القانوني؛ وهذا ليس استشارة قانونية.',
          'دُرّب Qwen3 على يد فريق Qwen التابع لـ Alibaba على مجموعة نصية صينية ومتعددة اللغات في الغالب. وهو مرشح قوي للمستندات بالصينية المبسّطة والتقليدية والنصوص المختلطة (صينية/عربية/إنجليزية)؛ جرّبه على موادك الخاصة.',
          '**لعمليات النشر في الشركات الناطقة بالعربية**: إعداد Qwen3 دون اتصال بالإنترنت أثناء الاستدلال يسهّل الالتزام بالأطر التنظيمية في السعودية (PDPL) والإمارات (قانون حماية البيانات) ودول الخليج الأخرى، لكن الامتثال يعتمد على حالة الاستخدام ويُنصح بتأكيده مع مستشار قانوني. يعمل النموذج بالكامل على أجهزة محلية — ولا يصل أي طرف ثالث إلى بيانات الإدخال أو الإخراج ما لم تفعّل خدمات سحابية أو أدوات متصلة. كما تتوفر بدائل عربية سيادية مثل Jais وALLaM للمؤسسات التي تفضّل نماذج عربية المنشأ. راجع [تشغيل الذكاء الاصطناعي دون اتصال بالكامل](/ar/power-local-llm/local-ai-behind-firewall-offline-2026) للحصول على دليل كامل للإعداد المعزول.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يمكن تشغيل Qwen3 دون اتصال بالإنترنت بعد التنزيل، فلا حاجة لأن تغادر بيانات الاستدلال جهازك، مما يقلّل مخاطر نقل البيانات عبر الحدود بموجب GDPR وقوانين الخليج (ويظل الامتثال معتمدًا على حالة استخدامك).' },
          { type: 'plain-terms', text: 'عندما تشغّل Qwen3 محليًا، تبقى أوامرك ومستنداتك على حاسوبك ما لم تربطه بخدمة سحابية. لا يحتاج الاستدلال إلى استدعاء API سحابي؛ أما كيفية تعامل بقية إعدادك مع البيانات فمسؤوليتك.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'ما الجهاز الذي ينبغي شراؤه لنشر Qwen3؟',
        content: [
          '**طابِق مستوى Qwen المستهدف مع VRAM المطلوب أولًا، ثم اشترِ أرخص بطاقة تحقّق هذا الحد — دفع ثمن VRAM أكثر مما يحتاجه نموذجك هو أكثر أخطاء الإنفاق شيوعًا في هذه القائمة.** تتوافق الاختيارات أدناه مباشرة مع جدول الأجهزة أعلاه: اقتصادي ← RTX 4060، متوسط ← RTX 4070 Super، فئة عليا ← RTX 3090/4090، Apple Silicon ← Mac mini M5 Pro، تشغيل متواصل ← حاسوب صغير. تعكس الأسعار أدناه سوق بطاقات الرسوم في 2026 — أدى نقص رقائق الذاكرة والطلب من مراكز بيانات الذكاء الاصطناعي إلى ارتفاع أسعار بطاقات الرسوم الجديدة وتشكيلات ذاكرة Apple؛ تحقّق من السعر الفعلي قبل الشراء.',
        ],
        callouts: [
          { type: 'tip', text: 'تخطَّ هذا القسم إذا كنت تملك بالفعل بطاقة رسوم بسعة 8 GB من VRAM أو أكثر — شغّل Qwen3 8B أولًا على ما تملكه. اشترِ جهازًا جديدًا فقط بعد بلوغ هذا الحد ورغبتك في نموذج أكبر.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'اختيار اقتصادي — Qwen3 8B وQwen2.5-Coder 7B (5.5 GB VRAM)',
            verdict: 'أرخص بطاقة في هذه القائمة تحقّق متطلب 5.5 GB لـ Qwen3 8B مع هامش للسياق. تشغّل Qwen2.5-Coder 7B بسرعة ~55 token/ثانية — سرعة كافية للمساعدة البرمجية التفاعلية.',
            pros: [
              'يتحقق متطلب 5.5 GB من VRAM مع هامش لذاكرة KV المؤقتة للسياق الطويل',
              'أقل سعر في هذه القائمة — بطاقة الرسوم الأولى المناسبة إذا لم تشغّل نموذج LLM محليًا من قبل',
              '50–57 token/ثانية على نماذج 7B/8B، بأداء مماثل للبطاقات الأغلى عند هذا الحجم من النماذج',
            ],
            cons: [
              'يقتصر على Qwen3 8B / Qwen2.5-Coder 7B — لا هامش للانتقال إلى 14B دون ضغط ذاكرة KV المؤقتة',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.sa/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '1,600–2,000 ريال', label: 'تحقّق من السعر الحالي ←' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'اختيار متوسط — Qwen3 14B وQwen2.5-Coder 14B (9.5 GB VRAM)',
            verdict: 'تشغّل Qwen2.5-Coder 14B (89.6% في HumanEval) بسرعة 36–38 token/ثانية مع بقاء 2–3 GB من VRAM للسياق — خيار مناسب لمستوى 12 GB.',
            pros: [
              'يتسع النموذج بحجم 9.5 GB مع بقاء 2–3 GB من VRAM — مساحة لنوافذ سياق أطول',
              'HumanEval 89.6% (14B) مقابل 88.4% (7B)، وهي درجات Instruct المنشورة بدقة كاملة — تحسّن صغير في هذا المعيار، فاختر 14B لهامش الأداء في المهام الأصعب لا لقفزة كبيرة في الدرجة',
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
            tagline: 'اختيار فئة عليا — Qwen2.5-Coder 32B وQwen 3.6 27B (~20.5 / ~17 GB VRAM)',
            verdict: 'تقدّم 4090 سرعة ~27 token/ثانية على Qwen2.5-Coder 32B — سرعة برمجة في الوقت الفعلي بدرجة 92.7% في HumanEval. تملك RTX 3090 المستعملة نفس سعة 24 GB من VRAM، وتقترب من سرعة استدلال 4090 بفارق نحو 15% فقط، بسعر أقل بكثير إذا وجدت عرضًا مستعملًا موثوقًا.',
            pros: [
              'تغطي سعة 24 GB من VRAM جميع إصدارات Qwen3 32B وQwen 3.6 27B مع هامش إضافي',
              '~27 token/ثانية على Qwen2.5-Coder 32B (92.7% في HumanEval) — سريعة بما يكفي للبرمجة الزوجية في الوقت الفعلي',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'اختيار Apple Silicon — Qwen 3.6 27B أو Qwen3 32B، هادئ ومنخفض الاستهلاك',
            verdict: 'أفضل قيمة لتشغيل Qwen3 32B عبر الذاكرة الموحّدة — هادئ، استهلاك طاقة منخفض، ولا حاجة لتركيب بطاقة رسوم منفصلة. أما Qwen2.5-72B فإن M2 Ultra بذاكرة 64 GB هو الحد الأدنى الضيق، وتمنح ذاكرة 128 GB أو أكثر هامشًا للسياق.',
            pros: [
              'تتوفر تكوينات M5 Pro بذاكرة موحّدة تصل حتى 64 GB — أعلى بكثير من متطلب 20.5 GB لـ Qwen3 32B، مع مساحة إضافية لتطبيقات أخرى',
              'تشغيل صامت واستهلاك طاقة مناسب لمكتب العمل — دون إدارة تبريد مخصص لبطاقة رسوم',
              'عملية شراء واحدة تغطي نظام التشغيل والتخزين والاستدلال — دون تجميع منفصل لبطاقة رسوم/مزود طاقة/هيكل',
            ],
            cons: [
              'لا تتوفر بعد اختبارات أداء مستقلة لـ Qwen3 32B على شريحة M5 Pro — توقّع أداءً أبطأ بوضوح من بطاقة رسوم مخصصة مثل RTX 4090، بما يتسق مع أجيال Apple Silicon السابقة في Mac mini',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/sa/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: 'من نحو 6,700 ريال (تكوين 64 GB أغلى)', label: 'تحقّق من السعر الحالي ←' },
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
          '**تجاهل حجم نافذة السياق.** بحسب بطاقة النموذج، يدعم Qwen3 أصلًا سياقًا بطول 32K رمز ونحو 131K مع YaRN. تحدد مواصفات Modelfile في Ollama القيمة الافتراضية لـ `num_ctx` بـ 2048، لكن وقت التشغيل الفعلي يختار قيمة افتراضية متدرجة حسب VRAM: 4K أقل من 24 GiB، و32K بين 24 و48 GiB، و256K فوق 48 GiB. لا تعتمد على أي من القيمتين الافتراضيتين: اضبط `num_ctx` صراحةً، مثلاً بكتابة `/set parameter num_ctx 8192` (أو أكثر) داخل جلسة `ollama run` — وإلا يقتطع النموذج الإدخال بصمت.',
          '**اختيار تكميم Q2_K للاستخدام بالصينية.** بدقة 2 بت، تتدهور مخرجات Qwen3 بالصينية بشكل ملحوظ. استخدم Q4_K_M كحد أدنى لأي عمل بالصينية.',
          '**تشغيل نموذج 32B بـ VRAM قليل.** إذا كانت بطاقة الرسوم تملك 16 GB والنموذج يحتاج إلى 20.5 GB، يفرّغ Ollama الطبقات إلى RAM النظام. يعمل النموذج لكن بـ 3–5 token/ثانية — غير قابل للاستخدام التفاعلي. راجع جدول الأجهزة واختر نموذجًا يتسع في VRAM لديك.',
          '**استخدام العائلة الفرعية الخاطئة للبرمجة.** تم تدريب Qwen2.5-Coder 7B للبرمجة ويسجّل 88.4% في HumanEval (درجة Instruct المنشورة بدقة كاملة)، بينما لا تُضبط النماذج العامة لذلك. إذا كانت حالة استخدامك هي الكود، استخدم دائمًا متغير Coder بالحجم نفسه.',
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
          { q: 'كم من VRAM أحتاج لتشغيل Qwen3 8B محليًا؟', a: 'يتطلب Qwen3 8B Q4_K_M 5.5 GB من VRAM. تكفي RTX 3060 12 GB أو RTX 4060 أو شريحة Apple M بذاكرة موحدة 8 GB.' },
          { q: 'ما أفضل نموذج Qwen للبرمجة محليًا؟', a: 'Qwen2.5-Coder 32B أكبر نموذج برمجة مخصص من Qwen2.5 يتسع في بطاقة رسوم بسعة 24 GB؛ وتذكر Qwen نتيجة 92.7% في HumanEval لنسخة Instruct بدقة كاملة. كما يتوفر لـ Qwen 3.6 27B متغير برمجة (`qwen3.6:27b-coding`). بـ 12 GB من VRAM أو أقل: Qwen2.5-Coder 14B (89.6%، 9.5 GB من VRAM).' },
          { q: 'كيف يقارن Qwen بـ DeepSeek للنشر المحلي؟', a: 'يستخدم Qwen بنية كثيفة متوافقة مع الأجهزة الاستهلاكية. خط DeepSeek المفتوح الحالي هو V4 (V4-Flash: 284B معامل إجمالي، MoE)، وهو أكبر بكثير من بطاقة رسوم استهلاكية واحدة؛ أما DeepSeek-V2.5 (236B MoE، 2024) فقد حلّ محله V3 ثم V4.' },
          { q: 'هل يمكنني تشغيل Qwen على جهاز Mac؟', a: 'نعم. يشغّل M2 Pro 32 GB نموذج Qwen3 14B بـ ~32 token/ثانية. ويتعامل M3 Max 64 GB مع Qwen3 32B بـ ~22 token/ثانية.' },
          { q: 'ما أمر Ollama الذي أستخدمه لـ Qwen؟', a: 'للنموذج الرائد، `ollama run qwen3.6:27b` (~17 GB من VRAM). لـ Qwen3، `ollama pull qwen3:8b`. لـ Qwen2.5، `ollama pull qwen2.5:7b` لـ 7B، و`:14b` لـ 14B، و`:32b` لـ 32B، أو `qwen2.5-coder:32b` لمتغير البرمجة. استخدم دائمًا وسوم حجم صريحة.' },
          { q: 'هل Qwen مناسب للمهام باللغة الصينية؟', a: 'نعم. دُرّب Qwen3 مسبقًا على مجموعة نصية صينية ضخمة ويدعم أصليًا الصينية المبسّطة والتقليدية واليابانية والكورية ولغات كثيرة أخرى (راجع بطاقة النموذج). وهو مرشح قوي للذكاء الاصطناعي المحلي بالصينية؛ جرّبه على مستنداتك.' },
          { q: 'أي تكميم ينبغي أن أستخدم لـ Qwen3؟', a: 'Q4_K_M افتراضيًا — يقلّل VRAM بنحو 55% مقارنةً بـ FP16 مع فقدان جودة طفيف. تجنّب Q2_K للاستخدام بالصينية.' },
          { q: 'هل يعمل Qwen2.5-VL لـ OCR للمستندات الصينية؟', a: 'نعم — `ollama pull qwen2.5vl:7b` (تنزيل 6.0 GB)، يقبل النص والصور ويقرأ نص CJK في المستندات الممسوحة؛ جرّبه على مستنداتك. وQwen3-VL الأحدث هو `qwen3-vl:8b`.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M بحجم 17 GB، والوسم الافتراضي 27b بحجم 18–19 GB، وسياق 256K، ووسم 27b-coding؛ جرى التحقق في 23 أكتوبر 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b بحجم 5.2 GB، و14b بحجم 9.3 GB، و32b بحجم 20 GB، وسياق 40K؛ جرى التحقق في 23 أكتوبر 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b بحجم 4.7 GB، و14b بحجم 9.0 GB، و32b بحجم 20 GB، و72b بحجم 47 GB، وسياق 32K؛ جرى التحقق في 23 أكتوبر 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b بحجم 4.7 GB، و14b بحجم 9.0 GB، و32b بحجم 20 GB، وسياق 32K؛ جرى التحقق في 23 أكتوبر 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- سياق أصلي 32,768 و131,072 مع YaRN، ودعم أكثر من 100 لغة',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- سياق 131,072 مع YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- الجدول 16: HumanEval ‏88.4 (7B) و89.6 (14B) و92.7 (32B)، لنماذج Instruct بدقة كاملة',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        links: [
          { url: '/ar/local-llms/run-qwen-locally-guide-2026', title: 'كيفية تشغيل Qwen 3 محليًا في 2026', description: 'دليل إعداد نموذج واحد لـ Qwen 3.6 27B مع Ollama وLM Studio — أسرع طريقة لتشغيل نسخة Qwen.' },
          { url: '/ar/local-llms/run-qwen-vl-locally-2026', title: 'تشغيل Qwen2.5-VL وQwen3-VL محليًا في 2026', description: 'دليل كامل لـ Qwen2.5-VL وQwen3-VL — وسوم Ollama والأحجام والتراخيص وOCR للمستندات CJK والأسئلة عن الصور على الأجهزة الاستهلاكية.' },
          { url: '/ar/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen مقابل Llama مقابل Mistral 2026', description: 'مقارنة معايير Qwen 3.6 27B وLlama 4 Scout وMistral Small 3.1 في MMLU وSWE-bench وMATH.' },
          { url: '/ar/local-llms/llm-quantization-explained', title: 'تكميم نماذج LLM موضّحًا', description: 'ماذا يعني Q4_K_M وQ8_0 وIQ4_XS — كيف تؤثر في VRAM والسرعة وجودة المخرجات.' },
          { url: '/ar/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'مقارنة محلية DeepSeek مقابل Qwen 2026', description: 'مقارنة كاملة: DeepSeek-R1-Distill-Qwen-32B مقابل Qwen3 32B في البرمجة والاستدلال والصينية والكتابة الإبداعية — مع تفصيل Mac مقابل NVIDIA.' },
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
    intro: 'O Qwen 3.6 27B é a nova escolha principal para implantação local — um modelo denso, sob licença Apache 2.0, com janela de contexto de 256K, que funciona com ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b`. O Qwen3 8B funciona com apenas 5,5 GB de VRAM via Ollama — um único comando, sem configuração. O Qwen2.5-Coder 32B atinge 92,7% no HumanEval. O Qwen2.5-VL 7B (download de 6,0 GB no Ollama) lê documentos em chinês e japonês localmente. O Qwen3 (2025) é a geração anterior: ainda muito usado com Ollama e LM Studio, mas não é mais o Qwen mais recente. Este guia cobre a família completa de modelos Qwen: qual modelo executar em cada nível de hardware, configuração com Ollama e LM Studio, recomendações de quantização, dados de benchmarks e como o Qwen se compara ao DeepSeek e Llama em hardware de consumo em 2026.',
    metaDescription: 'Execute Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder e Qwen2.5-VL localmente em 2026. Requisitos de VRAM, configuração Ollama e LM Studio e guia por nível de hardware.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-pt.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores, pesquisadores e usuários com foco em privacidade que querem executar a família completa de modelos Qwen localmente',
    primaryTerm: 'implantação local do Qwen',
    affiliateDisclosure: true,
    ctaText: 'Despache entre Qwen3, DeepSeek e Llama a partir de uma única interface →',
    ctaButton: 'Experimente o PromptQuorum gratuitamente',
    leadAnswerBlock: '**A nova escolha principal é o Qwen 3.6 27B — um modelo denso, sob licença Apache 2.0, com janela de contexto de 256K, que funciona com ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b`.** Para uma configuração mais leve, execute `ollama pull qwen3:8b` (Qwen3 8B, geração anterior ainda muito usada) — requer 5,5 GB de VRAM e entrega 57 tokens/seg em uma RTX 3060. Para tarefas de código use o Qwen2.5-Coder; para OCR de documentos em chinês/japonês use o Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) ou o Qwen3-VL, mais recente (`qwen3-vl:8b`). Já sabe qual é o seu orçamento de VRAM? Vá direto para [qual GPU ou Mac comprar para cada nível do Qwen](#affiliate-picks).',
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
      { label: 'Fontes', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'A apresentação abaixo cobre: o novo flagship Qwen 3.6 27B (contexto de 256K, ~17 GB em Q4_K_M), a família completa de modelos Qwen (Qwen3 0,6B–32B, Qwen2.5 7B a 72B), os requisitos de VRAM por nível de hardware, os dados de benchmark do Qwen2.5-Coder 32B e um quadro de decisão Qwen vs DeepSeek vs Llama. Baixe como cartão de referência de implantação do Qwen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guia de implantação local do Qwen 2026: execute Qwen 3.6 27B, Qwen3, Coder e VL em cada nível de hardware',
      description: 'Guia completo para implantar a família de modelos Qwen localmente — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder e VL, requisitos de VRAM, configuração com Ollama e LM Studio, quantização, benchmarks e recomendações de hardware.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
        { '@type': 'Question', name: 'Quanta VRAM preciso para executar o Qwen3 8B localmente?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen3 8B Q4_K_M requer 5,5 GB de VRAM. Uma NVIDIA RTX 3060 12 GB, RTX 4060 ou chip Apple M com 8 GB de memória unificada são suficientes.' } },
        { '@type': 'Question', name: 'Qual é o melhor modelo Qwen para programação localmente?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen2.5-Coder 32B é o maior modelo de programação dedicado do Qwen2.5 que cabe em uma GPU de 24 GB (RTX 3090 ou RTX 4090); a Qwen informa 92,7% no HumanEval para a versão Instruct em precisão total. Com 12 GB de VRAM ou menos, use o Qwen2.5-Coder 14B (HumanEval 89,6%, 9,5 GB de VRAM).' } },
        { '@type': 'Question', name: 'Como o Qwen se compara ao DeepSeek para implantação local?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen usa uma arquitetura densa que cabe em hardware de consumo. A linha aberta atual do DeepSeek é a V4 (V4-Flash: 284B de parâmetros totais, MoE), muito além de uma única GPU de consumo; o DeepSeek-V2.5 (236B MoE, 2024) foi superado pela V3 e depois pela V4. Com VRAM limitada, um modelo Qwen é a opção prática.' } },
        { '@type': 'Question', name: 'Posso executar o Qwen em um Mac?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Apple Silicon usa memória unificada — um M2 Pro 32 GB executa o Qwen3 14B a ~32 tokens/seg. Um M3 Max 64 GB gerencia o Qwen3 32B a ~22 tokens/seg.' } },
        { '@type': 'Question', name: 'Qual comando do Ollama uso para o Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Para o novo flagship, execute `ollama run qwen3.6:27b` (~17 GB de VRAM). Para o Qwen3, use `ollama pull qwen3:8b`. Para o Qwen2.5, use `ollama pull qwen2.5:7b` para 7B, `ollama pull qwen2.5:14b` para 14B, `ollama pull qwen2.5:32b` para 32B, ou `ollama pull qwen2.5-coder:32b` para a variante de programação. Sempre use tags de tamanho explícitas.' } },
        { '@type': 'Question', name: 'O Qwen é adequado para tarefas em chinês?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Qwen3 foi pré-treinado em um grande corpus chinês e suporta nativamente chinês simplificado, chinês tradicional, japonês, coreano, árabe e muitos outros idiomas (veja a ficha do modelo). É um candidato sólido para IA local em chinês; teste com seus próprios documentos.' } },
        { '@type': 'Question', name: 'Qual quantização devo usar para o Qwen3?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M é o padrão recomendado — reduz a VRAM em aproximadamente 55% em relação ao FP16 com pouca perda de qualidade nos benchmarks. Use Q8_0 se tiver VRAM sobrando e quiser qualidade próxima ao FP16. Evite Q2_K para uso em chinês.' } },
        { '@type': 'Question', name: 'O Qwen2.5-VL funciona para OCR de documentos em chinês?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — o Qwen2.5-VL 7B roda pelo Ollama (`ollama pull qwen2.5vl:7b`, download de 6,0 GB), aceita texto e imagem e consegue ler texto em chinês, japonês e coreano em documentos digitalizados; teste com os seus próprios scans, pois a precisão depende da qualidade da digitalização. O Qwen3-VL, mais recente, está em `qwen3-vl:8b` (6,1 GB).' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Qwen 3.6 27B é a nova escolha principal**: denso, Apache 2.0, contexto de 256K, ~17 GB de VRAM em Q4_K_M via `ollama run qwen3.6:27b` (lançado em abril de 2026).',
          '**Qwen3 8B funciona com 5,5 GB de VRAM** — um único comando `ollama pull qwen3:8b` e já está em execução a 57 tokens/seg em uma RTX 3060.',
          '**Quatro subfamílias práticas além do modelo principal**: Qwen3 (geral, modo de raciocínio; geração anterior, ainda muito usada), Qwen2.5 (geral, mais testada), Qwen2.5-Coder (programação, 92,7% no HumanEval em 32B), Qwen2.5-VL (visão, OCR de documentos CJK; o Qwen3-VL é a geração de visão mais recente).',
          '**Arquitetura densa = compatível com hardware de consumo**: ao contrário do DeepSeek V4-Flash (modelo MoE de 284B parâmetros), o Qwen2.5-72B cabe em 46 GB de VRAM em duas RTX 3090.',
          '**Multilíngue nativo**: pré-treinado em chinês, japonês, coreano, árabe, alemão, francês e muitos outros idiomas (veja a ficha do modelo para a lista exata).',
          '**Q4_K_M é a quantização correta** para a maioria dos usuários: ~55% de redução de VRAM, pouca perda de qualidade nos benchmarks.',
          '**Decisão de hardware**: 12 GB de VRAM → modelo 14B; 24 GB → 32B; 48 GB+ (duas GPUs ou Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen cobre três subfamílias de implantação local — uso geral (7B–72B), programação (Coder 7B–32B) e visão (VL 3B–72B) — todas executáveis via Ollama ou LM Studio.' },
          { type: 'plain-terms', text: 'Executar um modelo localmente significa que a IA roda no seu próprio computador em vez de em um servidor na nuvem. Os dados de inferência não saem da sua máquina (a menos que você ative serviços na nuvem) e não há custo por token após adquirir o hardware.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Visão geral da família de modelos Qwen',
        content: [
          '**A linha Qwen agora abrange cinco opções práticas: o flagship Qwen 3.6 27B, o Qwen3 (geração anterior, ainda muito usada), o Qwen2.5 de raciocínio geral, o Qwen2.5-Coder e o Qwen2.5-VL para visão** — cada uma com múltiplas opções de tamanho. Todos são modelos de pesos abertos publicados pela equipe Qwen da Alibaba no Hugging Face. O Qwen 3.6 é lançado como modelo denso de 27B e como modelo de mistura de especialistas 35B-A3B (`qwen3.6:35b`); para hardware modesto, a geração Qwen3.5 (`qwen3.5:4b`, `qwen3.5:9b`) vem depois do Qwen3, e o Qwen3-VL (`qwen3-vl:8b`) é a geração de visão mais recente. Consulte o cartão de cada modelo para saber a licença.',
          'Escolha primeiro a subfamília e depois o tamanho que se encaixa na sua VRAM. É comum combinar subfamílias: Qwen2.5-Coder 14B para autocompletar código e Qwen3 8B ou Qwen 3.6 27B para resumir documentos.',
        ],
        rows: [
          { 'Subfamília': 'Qwen 3.6 (modelo principal)', 'Tamanhos disponíveis': '27B denso, 35B-A3B MoE', 'Uso principal': 'Raciocínio geral e programação (`qwen3.6:27b-coding`), contexto de 256K', 'Prefixo de tag Ollama': 'qwen3.6:' },
          { 'Subfamília': 'Qwen3 (geração anterior)', 'Tamanhos disponíveis': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Uso principal': 'Raciocínio geral, modo de raciocínio, multilíngue, tarefas agênticas', 'Prefixo de tag Ollama': 'qwen3:' },
          { 'Subfamília': 'Qwen2.5', 'Tamanhos disponíveis': '7B, 14B, 32B, 72B', 'Uso principal': 'Raciocínio geral, tarefas em chinês/multilíngue, RAG', 'Prefixo de tag Ollama': 'qwen2.5:' },
          { 'Subfamília': 'Qwen2.5-Coder', 'Tamanhos disponíveis': '7B, 14B, 32B', 'Uso principal': 'Geração de código, depuração, HumanEval, SWE-bench', 'Prefixo de tag Ollama': 'qwen2.5-coder:' },
          { 'Subfamília': 'Qwen2.5-VL', 'Tamanhos disponíveis': '3B, 7B, 32B, 72B', 'Uso principal': 'OCR de documentos, perguntas sobre imagens, extração de texto CJK', 'Prefixo de tag Ollama': 'qwen2.5vl:' },
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
          { 'Modelo': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidade (GPU)': '~57 tok/s (RTX 3060 12 GB)' },
          { 'Modelo': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'GPU mínima': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Velocidade (GPU)': '~55 tok/s (RTX 3060 12 GB)' },
          { 'Modelo': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6,0 GB', 'GPU mínima': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Velocidade (GPU)': '—' },
          { 'Modelo': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidade (GPU)': '~38 tok/s (RTX 4070)' },
          { 'Modelo': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'GPU mínima': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Velocidade (GPU)': '~36 tok/s (RTX 4070)' },
          { 'Modelo': 'Qwen3 32B Q4_K_M (geração anterior)', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidade (GPU)': '~28 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'GPU mínima': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Velocidade (GPU)': '~27 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'GPU mínima': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Velocidade (GPU)': '~24 tok/s (RTX 4090)' },
          { 'Modelo': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'GPU mínima': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Velocidade (GPU)': '~12 tok/s (2×RTX 4090)' },
        ],
        columns: ['Modelo', 'VRAM', 'GPU mínima', 'Apple Silicon', 'Velocidade (GPU)'],
        tableFormat: true,
        note: 'Os números de VRAM são aproximados para Q4_K_M. A biblioteca do Ollama lista tamanhos de download de 5,2 GB (qwen3:8b), 9,3 GB (qwen3:14b), 20 GB (qwen3:32b, qwen2.5:32b), 47 GB (qwen2.5:72b) e 17 GB (qwen3.6:27b-q4_K_M; a tag 27b padrão tem 18–19 GB), consultados em 23 de outubro de 2026. Adicione 1–2 GB para o cache KV com um contexto de 4K. Se a GPU tiver menos VRAM do que o modelo precisa, o Ollama descarrega camadas automaticamente para a RAM do sistema — funciona, mas reduz a velocidade significativamente.',
        callouts: [
          { type: 'tip', text: 'Já identificou o seu nível de VRAM? Veja [exatamente qual GPU ou Mac comprar para esse nível](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M5 Pro ou GPU dupla.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-pt.webp',
        imageCaption: 'Requisitos de VRAM do Qwen3 por tamanho de modelo (Q4_K_M) — valores aproximados',
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
          { title: 'Ajustar a janela de contexto se necessário', whyItMatters: 'A biblioteca do Ollama indica uma janela de contexto de 40K para o Qwen3, 32K para o Qwen2.5 e 256K para o Qwen 3.6. Para usar um contexto de 128K em um modelo 7B, inicie `ollama run qwen2.5:7b` e digite `/set parameter num_ctx 131072` na sessão. Isso requer mais VRAM.' },
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
ollama pull qwen2.5vl:7b          # visão 7B (~6,0 GB)

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
          '**Q4_K_M é o padrão correto para o Qwen3 em hardware de consumo.** Reduz a VRAM em 55–60% em relação ao FP16 com pouca degradação no MMLU e HumanEval. Outros formatos têm casos de uso específicos:',
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
          { type: 'one-sentence', text: 'Q4_K_M é a melhor quantização do Qwen3 para a maioria dos usuários: reduz a VRAM em 55% com pouca perda de qualidade em relação ao FP16.' },
          { type: 'plain-terms', text: 'A quantização comprime os números do modelo de 16 bits para 4 bits, reduzindo aproximadamente pela metade o tamanho do arquivo e a VRAM necessária. É como passar de TIFF para JPEG de alta qualidade — arquivo menor, resultado quase idêntico para a maioria dos usos.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Desempenho em benchmarks em hardware de consumo',
        content: [
          '**O Qwen3 32B Q4_K_M em uma RTX 4090 entrega 28 tokens/seg — velocidade suficiente para assistência de código em tempo real.** O Qwen3 32B é a geração anterior do Qwen; o Qwen 3.6 27B, mais recente, cabe na mesma faixa de 24 GB (veja a tabela de hardware acima). Os números abaixo são valores indicativos, não medições do PromptQuorum: a velocidade varia conforme GPU, driver, tamanho do contexto e versão do Ollama, não reexecutamos as pontuações de precisão; as pontuações HumanEval do Coder são os resultados publicados dos modelos Instruct em precisão total (relatório técnico do Qwen2.5-Coder, arXiv:2409.12186, tabela 16), enquanto as do Qwen3 e do Qwen2.5-72B são indicativas e não foram conferidas com as fichas dos modelos, e builds Q4_K_M costumam pontuar um pouco abaixo da precisão total. Consulte a ficha de cada modelo e teste no seu próprio hardware.',
        ],
        rows: [
          { 'Modelo (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2%', 'Math': '58,8%', 'HumanEval': '57,3%', 'Velocidade (GPU)': '57 tok/s (RTX 3060 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9%', 'Math': '69,8%', 'HumanEval': '64,6%', 'Velocidade (GPU)': '38 tok/s (RTX 4070 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3%', 'Math': '79,5%', 'HumanEval': '71,3%', 'Velocidade (GPU)': '28 tok/s (RTX 4090 24 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1%', 'Math': '83,1%', 'HumanEval': '73,2%', 'Velocidade (GPU)': '12 tok/s (2×RTX 3090)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88,4%', 'Velocidade (GPU)': '55 tok/s (RTX 3060 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89,6%', 'Velocidade (GPU)': '36 tok/s (RTX 4070 12 GB)' },
          { 'Modelo (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7%', 'Velocidade (GPU)': '27 tok/s (RTX 4090 24 GB)' },
        ],
        columns: ['Modelo (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Velocidade (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Quer essa pontuação de 92,7% no HumanEval a 27 tok/s? Veja a [GPU de 24 GB que executa o Qwen2.5-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-pt.webp',
        imageCaption: 'Pontuações de benchmark do Qwen3 (Q4_K_M) — valores aproximados',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: o que executar localmente',
        content: [
          '**Em nossa avaliação, o Qwen é a família mais eficiente em VRAM em hardware de consumo; a linha atual V4 do DeepSeek é de grande escala (V4-Flash: 284B de parâmetros totais) e impraticável em uma única GPU de consumo; o Llama 3.3 70B é uma alternativa se você preferir o modelo aberto da Meta e aceitar mover parte das camadas para a RAM do sistema em uma única GPU.**',
        ],
        rows: [
          { 'Nível de VRAM': '6 GB', 'Melhor Qwen': 'Qwen3 8B', 'Melhor concorrente': 'Llama 3.2 3B (cabe, mas apenas 3B)', 'Veredicto': 'Qwen3 8B vence — mesma VRAM, modelo muito maior' },
          { 'Nível de VRAM': '12 GB', 'Melhor Qwen': 'Qwen2.5-Coder 14B', 'Melhor concorrente': 'Llama 3.1 8B Instruct', 'Veredicto': 'Qwen2.5-Coder 14B para código; Llama 3.1 8B para chat geral' },
          { 'Nível de VRAM': '24 GB', 'Melhor Qwen': 'Qwen2.5-Coder 32B', 'Melhor concorrente': 'Llama 3.3 70B (com descarregamento)', 'Veredicto': 'Qwen2.5-Coder 32B para código; Llama 3.3 70B se qualidade > velocidade' },
          { 'Nível de VRAM': '48 GB+', 'Melhor Qwen': 'Qwen2.5-72B', 'Melhor concorrente': 'DeepSeek V4-Flash 284B MoE', 'Veredicto': 'Só os pesos: ~140 GB em 4 bits; Qwen2.5-72B cabe em 48 GB' },
        ],
        columns: ['Nível de VRAM', 'Melhor Qwen', 'Melhor concorrente', 'Veredicto'],
        tableFormat: true,
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Usuários brasileiros: soberania de dados e implantação local',
        content: [
          '**Executar o Qwen3 localmente mantém os prompts de inferência no seu próprio hardware, de modo que nenhum dado de inferência é enviado a uma API na nuvem e essa transferência internacional é evitada na camada de inferência.** APIs de LLM na nuvem exigem enviar prompts para servidores externos, o que pode acionar os requisitos da LGPD e de outras leis de proteção de dados sobre tratamento e transferências internacionais. Se a sua configuração como um todo está em conformidade depende dos seus dados, das suas finalidades e da sua própria avaliação jurídica; isto não é aconselhamento jurídico.',
          'O Qwen3 foi treinado pela equipe Qwen da Alibaba em um corpus predominantemente chinês e multilíngue. É um candidato sólido para documentos em chinês simplificado, chinês tradicional e textos mistos; teste com o seu próprio material.',
          '**Para implantações em empresas brasileiras**: uma configuração do Qwen3 sem conexão à internet durante a inferência pode facilitar a conformidade com a Lei Geral de Proteção de Dados (LGPD) e as diretrizes da ANPD, mas a conformidade depende do seu caso de uso e deve ser confirmada com assessoria jurídica. O modelo roda inteiramente em hardware local, de modo que, a menos que você ative serviços em nuvem ou outras ferramentas conectadas, nenhum fornecedor externo recebe os dados de entrada ou saída da inferência.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Qwen3 pode funcionar sem conexão à internet após o download, de modo que os dados de inferência não precisam sair da sua máquina, o que reduz o risco de transferência transfronteiriça de dados sob a LGPD e as regulamentações da ANPD (a conformidade continua dependendo do seu caso de uso).' },
          { type: 'plain-terms', text: 'Quando você executa o Qwen3 localmente, seus prompts e documentos permanecem no seu computador, a menos que você o conecte a um serviço na nuvem. A inferência não precisa chamar nenhuma API na nuvem; como o restante da sua configuração trata os dados é responsabilidade sua.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qual hardware comprar para implantar o Qwen3?',
        content: [
          '**Primeiro, ajuste o nível de Qwen desejado à VRAM necessária e depois compre a placa mais barata que atenda esse requisito — pagar por mais VRAM do que o modelo precisa é o gasto excessivo mais comum nesta lista.** As recomendações abaixo correspondem diretamente à tabela de hardware acima: econômico → RTX 4060, médio porte → RTX 4070 Super, alto desempenho → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, uso contínuo → um mini PC. Os preços abaixo refletem o mercado de GPUs em 2026 — a escassez de chips de memória e a demanda de data centers de IA encareceram tanto as GPUs novas quanto as configurações de memória da Apple, e no Brasil o imposto de importação amplia ainda mais essa diferença; confirme o preço atual antes de comprar.',
        ],
        callouts: [
          { type: 'tip', text: 'Pule esta seção se você já tem uma GPU com 8 GB de VRAM ou mais — primeiro execute o Qwen3 8B no que você já possui. Só compre hardware novo quando atingir esse limite e quiser um modelo maior.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Opção econômica — Qwen3 8B, Qwen2.5-Coder 7B (5,5 GB de VRAM)',
            verdict: 'A placa mais barata desta lista que atende ao requisito de 5,5 GB do Qwen3 8B com folga para o contexto. Executa o Qwen2.5-Coder 7B a ~55 tok/s — velocidade suficiente para assistência de código interativa.',
            pros: [
              'O requisito de 5,5 GB de VRAM é atendido com folga para o cache KV de contexto longo',
              'Preço mais baixo desta lista — a primeira GPU certa se você nunca executou um LLM local',
              '50–57 tok/s em modelos 7B/8B, no mesmo nível de placas mais caras nesse tamanho de modelo',
            ],
            cons: [
              'Limita-se ao Qwen3 8B / Qwen2.5-Coder 7B — sem margem para crescer para 14B sem comprimir o cache KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com.br/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: 'R$ 3.600–4.600', label: 'Ver preço atual →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Opção intermediária — Qwen3 14B, Qwen2.5-Coder 14B (9,5 GB de VRAM)',
            verdict: 'Executa o Qwen2.5-Coder 14B (89,6% no HumanEval) a 36–38 tok/s, com 2–3 GB de VRAM sobrando para contexto — uma boa opção para a faixa de 12 GB.',
            pros: [
              'O modelo de 9,5 GB cabe com 2–3 GB de VRAM sobrando — espaço para janelas de contexto maiores',
              'HumanEval 89,6% (14B) contra 88,4% (7B), pontuações Instruct publicadas em precisão total — um ganho pequeno neste benchmark, então escolha o 14B pela folga em tarefas mais difíceis, não por um grande salto de pontuação',
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
            tagline: 'Opção de alto desempenho — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20,5 / ~17 GB de VRAM)',
            verdict: 'A 4090 entrega ~27 tok/s no Qwen2.5-Coder 32B — velocidade de codificação em tempo real com 92,7% no HumanEval. Uma RTX 3090 usada tem a mesma VRAM de 24 GB e fica cerca de 15% atrás da velocidade de inferência da 4090, por um preço bem menor se você encontrar um anúncio de segunda mão confiável.',
            pros: [
              '24 GB de VRAM cobrem todas as variantes do Qwen3 32B e o Qwen 3.6 27B com folga',
              '~27 tok/s no Qwen2.5-Coder 32B (92,7% no HumanEval) — rápido o suficiente para pair programming em tempo real',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Opção Apple Silicon — Qwen 3.6 27B ou Qwen3 32B, silencioso e de baixo consumo',
            verdict: 'A melhor relação custo-benefício para executar o Qwen3 32B com memória unificada — silencioso, baixo consumo de energia, sem GPU separada para instalar. Para o Qwen2.5-72B, um M2 Ultra de 64 GB é o mínimo apertado e 128 GB ou mais deixa folga para o contexto.',
            pros: [
              'As configurações do M5 Pro chegam a 64 GB de memória unificada — bem acima do requisito de 20,5 GB do Qwen3 32B, com espaço de sobra para outros aplicativos',
              'Operação silenciosa e consumo adequado para uso de mesa — sem necessidade de gerenciar refrigeração dedicada de GPU',
              'Uma única compra cobre sistema operacional, armazenamento e inferência — sem montagem separada de GPU/fonte/gabinete',
            ],
            cons: [
              'Ainda não há benchmarks independentes do Qwen3 32B no chip M5 Pro — espere desempenho visivelmente mais lento que uma GPU dedicada como a RTX 4090, em linha com gerações anteriores de Apple Silicon no Mac mini',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/br/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: 'a partir de R$ 19.700 (a configuração de 64 GB custa mais)', label: 'Ver preço atual →' },
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
          '**Ignorar o tamanho da janela de contexto.** Segundo o model card, o Qwen3 suporta nativamente 32K tokens e cerca de 131K com YaRN. A especificação do Modelfile do Ollama define `num_ctx` como 2048 por padrão, mas o runtime na verdade aplica um padrão escalonado por VRAM: 4K abaixo de 24 GiB, 32K entre 24 e 48 GiB, 256K acima de 48 GiB. Não confie em nenhum dos dois padrões: defina `num_ctx` explicitamente, por exemplo digitando `/set parameter num_ctx 8192` (ou mais) na sessão `ollama run` — caso contrário o modelo trunca a entrada silenciosamente.',
          '**Escolher quantização Q2_K para uso em chinês.** A 2 bits de precisão, a saída em chinês do Qwen3 se degrada notavelmente. Use Q4_K_M no mínimo para qualquer trabalho em chinês.',
          '**Executar o modelo 32B com pouca VRAM.** Se a GPU tiver 16 GB e o modelo precisar de 20,5 GB, o Ollama descarrega camadas para a RAM do sistema. O modelo funciona mas a 3–5 tok/s — inutilizável para uso interativo.',
          '**Usar a subfamília errada para programação.** O Qwen2.5-Coder 7B é treinado para código e pontua 88,4% no HumanEval (pontuação Instruct publicada em precisão total), enquanto os modelos de uso geral não são ajustados para isso. Para código, sempre use a variante Coder do mesmo tamanho.',
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
          { q: 'Quanta VRAM preciso para executar o Qwen3 8B localmente?', a: 'O Qwen3 8B Q4_K_M requer 5,5 GB de VRAM. Uma RTX 3060 12 GB, RTX 4060 ou chip Apple M com 8 GB de memória unificada são suficientes.' },
          { q: 'Qual é o melhor modelo Qwen para programação localmente?', a: 'O Qwen2.5-Coder 32B é o maior modelo de programação dedicado do Qwen2.5 que cabe em uma GPU de 24 GB; a Qwen informa 92,7% no HumanEval para a versão Instruct em precisão total. O Qwen 3.6 27B também tem uma variante de programação (`qwen3.6:27b-coding`). Com 12 GB de VRAM ou menos: Qwen2.5-Coder 14B (89,6%, 9,5 GB de VRAM).' },
          { q: 'Como o Qwen se compara ao DeepSeek para implantação local?', a: 'O Qwen usa arquitetura densa compatível com hardware de consumo. A linha aberta atual do DeepSeek é a V4 (V4-Flash: 284B de parâmetros totais, MoE), muito além de uma única GPU de consumo; o DeepSeek-V2.5 (236B MoE, 2024) foi superado pela V3 e depois pela V4.' },
          { q: 'Posso executar o Qwen em um Mac?', a: 'Sim. M2 Pro 32 GB executa o Qwen3 14B a ~32 tok/s. M3 Max 64 GB gerencia o Qwen3 32B a ~22 tok/s.' },
          { q: 'Qual comando do Ollama uso para o Qwen?', a: 'Para o flagship, `ollama run qwen3.6:27b` (~17 GB de VRAM). Para o Qwen3, `ollama pull qwen3:8b`. Para o Qwen2.5, `ollama pull qwen2.5:7b` para 7B, `:14b` para 14B, `:32b` para 32B, ou `qwen2.5-coder:32b` para a variante de programação. Sempre use tags de tamanho explícitas.' },
          { q: 'O Qwen é adequado para tarefas em chinês?', a: 'Sim. O Qwen3 foi pré-treinado em um grande corpus chinês e suporta nativamente chinês simplificado, chinês tradicional, japonês, coreano e muitos outros idiomas (veja a ficha do modelo). É um candidato sólido para IA local em chinês; teste com seus próprios documentos.' },
          { q: 'Qual quantização devo usar para o Qwen3?', a: 'Q4_K_M por padrão — reduz a VRAM ~55% em relação ao FP16 com pouca perda de qualidade. Evite Q2_K para uso em chinês.' },
          { q: 'O Qwen2.5-VL funciona para OCR de documentos em chinês?', a: 'Sim — `ollama pull qwen2.5vl:7b` (download de 6,0 GB), aceita texto e imagem e lê texto CJK em documentos digitalizados; teste com seus próprios scans. O Qwen3-VL, mais recente, é `qwen3-vl:8b`.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 GB, tag 27b padrão 18–19 GB, contexto de 256K, tag 27b-coding; consultado em 23 de outubro de 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5,2 GB, 14b 9,3 GB, 32b 20 GB, contexto de 40K; consultado em 23 de outubro de 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, 72b 47 GB, contexto de 32K; consultado em 23 de outubro de 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, contexto de 32K; consultado em 23 de outubro de 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- contexto nativo de 32.768, 131.072 com YaRN, mais de 100 idiomas',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- contexto de 131.072 com YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- Tabela 16: HumanEval 88,4 (7B), 89,6 (14B), 92,7 (32B), modelos Instruct em precisão total',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        links: [
          { url: '/pt/local-llms/run-qwen-locally-guide-2026', title: 'Como executar o Qwen 3 localmente em 2026', description: 'Guia de configuração de modelo único para o Qwen 3.6 27B com Ollama e LM Studio.' },
          { url: '/pt/local-llms/run-qwen-vl-locally-2026', title: 'Executar o Qwen2.5-VL e o Qwen3-VL localmente em 2026', description: 'Guia completo do Qwen2.5-VL e do Qwen3-VL — tags do Ollama, tamanhos, licenças, OCR de documentos CJK e perguntas sobre imagens em hardware de consumo.' },
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
    intro: 'Qwen 3.6 27B est le nouveau modèle phare pour le déploiement local — un modèle dense sous licence Apache 2.0 avec une fenêtre de contexte de 256 K, qui tourne avec ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b`. Qwen3 8B fonctionne avec 5,5 Go de VRAM via Ollama — une seule commande, aucune configuration. Qwen2.5-Coder 32B atteint 92,7 % sur HumanEval. Qwen2.5-VL 7B (téléchargement de 6,0 Go sur Ollama) lit en local des documents chinois et japonais. Qwen3 (2025) est la génération précédente : encore très déployée avec Ollama et LM Studio, mais plus le Qwen le plus récent. Ce guide couvre l\'ensemble de la famille Qwen : quel modèle utiliser selon votre niveau matériel, la configuration Ollama et LM Studio, les recommandations de quantification, les données de benchmark et la comparaison avec DeepSeek et Llama sur matériel grand public en 2026.',
    metaDescription: 'Déployer Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder et Qwen2.5-VL en local en 2026. VRAM requis, Ollama + LM Studio, benchmarks Q4_K_M et guide par niveau matériel.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-fr.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs, chercheurs et utilisateurs soucieux de leur vie privée souhaitant déployer la famille de modèles Qwen en local',
    primaryTerm: 'déploiement local Qwen',
    affiliateDisclosure: true,
    ctaText: 'Dispatcher entre Qwen3, DeepSeek et Llama depuis une interface →',
    ctaButton: 'Essayer PromptQuorum gratuitement',
    leadAnswerBlock: '**Le nouveau modèle phare est Qwen 3.6 27B — un modèle dense sous licence Apache 2.0 avec une fenêtre de contexte de 256 K, qui tourne avec ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b`.** Pour une configuration plus légère, exécutez `ollama pull qwen3:8b` (Qwen3 8B, génération précédente encore très déployée) — 5,5 Go de VRAM suffisent, 57 tokens/s sur une RTX 3060. Pour le code, utilisez Qwen2.5-Coder ; pour l\'OCR de documents CJK, Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) ou le plus récent Qwen3-VL (`qwen3-vl:8b`). Vous connaissez déjà votre budget VRAM ? Accédez directement au [GPU ou Mac à acheter pour chaque niveau Qwen](#affiliate-picks).',
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
      { label: 'Sources', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'La présentation ci-dessous couvre : le nouveau modèle phare Qwen 3.6 27B (contexte 256 K, ~17 Go en Q4_K_M), la famille complète Qwen (Qwen3 0,6B–32B, Qwen2.5 7B–72B), les exigences VRAM par niveau matériel, les données de benchmark pour Qwen2.5-Coder 32B et un tableau de décision Qwen vs DeepSeek vs Llama. Télécharger comme fiche de référence.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guide de déploiement local Qwen 2026 : Qwen 3.6 27B, Qwen3, Coder et VL pour chaque niveau matériel',
      description: 'Guide complet du déploiement local de la famille Qwen — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder et VL, exigences VRAM, configuration Ollama et LM Studio, quantification, benchmarks et recommandations matérielles.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          {
            '@type': 'Question',
            'name': 'Quelle quantité de VRAM est nécessaire pour Qwen3 8B en local ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 8B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 12 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quel est le meilleur modèle Qwen pour le code en local ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5-Coder 32B est le plus grand modèle de code dédié de Qwen2.5 qui tient sur un GPU de 24 Go ; Qwen annonce 92,7 % sur HumanEval pour la version Instruct en pleine précision. Qwen 3.6 27B propose aussi une variante code (`qwen3.6:27b-coding`). Avec 12 Go de VRAM : Qwen2.5-Coder 14B (89,6 %, 9,5 Go VRAM).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment Qwen se compare-t-il à DeepSeek ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen utilise une architecture dense compatible matériel grand public. La gamme ouverte actuelle de DeepSeek est la V4 (V4-Flash : 284 Md de paramètres au total, MoE), bien au-delà d\'un seul GPU grand public ; DeepSeek-V2.5 (MoE 236B, 2024) a été remplacé par la V3, puis la V4.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Puis-je utiliser Qwen sur un Mac ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. M2 Pro 32 Go : Qwen3 14B à ~32 tokens/s. M3 Max 64 Go : Qwen3 32B à ~22 tokens/s.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle commande Ollama utiliser pour Qwen ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pour le modèle phare, `ollama run qwen3.6:27b` (~17 Go de VRAM). Pour Qwen3, `ollama pull qwen3:8b`. Pour Qwen2.5, `ollama pull qwen2.5:7b` pour 7B, `:14b` pour 14B, `:32b` pour 32B, ou `qwen2.5-coder:32b` pour la variante code. Toujours des tags explicites.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen est-il adapté aux tâches en langue chinoise ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Qwen3 supporte nativement le chinois simplifié, traditionnel, le japonais, le coréen et de nombreuses autres langues (voir la fiche du modèle). C\'est un candidat solide pour l\'IA locale en chinois ; testez-le sur vos propres documents.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle quantification utiliser pour Qwen3 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M par défaut — ~55 % de réduction VRAM, une faible perte de qualité vs FP16. Éviter Q2_K pour les usages en langue chinoise.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen2.5-VL fonctionne-t-il pour l\'OCR de documents chinois ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui — `ollama pull qwen2.5vl:7b` (téléchargement de 6,0 Go), accepte texte et image et lit le texte CJK de documents numérisés ; testez sur vos propres scans. Le plus récent Qwen3-VL est `qwen3-vl:8b`.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen3 est-il compatible avec le RGPD ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En déploiement local, aucune donnée d\'inférence n\'est envoyée à des tiers — en principe pas de contrat de sous-traitance requis pour la couche IA selon l\'article 28 du RGPD tant qu\'aucun tiers n\'accède aux données (le RGPD continue de s\'appliquer à votre traitement ; ceci ne constitue pas un conseil juridique).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen3 peut-il traiter des documents mixtes français-chinois ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Qwen3 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2.5-VL 7B est plus adapté.',
            },
          },
        ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B est le nouveau modèle phare** : dense, Apache 2.0, contexte 256 K, ~17 Go de VRAM en Q4_K_M via `ollama run qwen3.6:27b` (sorti en avril 2026).',
          '**Qwen3 8B tourne avec 5,5 Go de VRAM** — une commande `ollama pull qwen3:8b` suffit ; 57 tokens/s sur RTX 3060.',
          '**Quatre sous-familles pratiques en plus du modèle phare** : Qwen3 (général, mode réflexion ; génération précédente, encore très déployée), Qwen2.5 (général, le plus testé), Qwen2.5-Coder (code, 92,7 % HumanEval en 32B), Qwen2.5-VL (vision, OCR de documents CJK ; Qwen3-VL est la génération vision plus récente).',
          '**Architecture dense = compatible matériel grand public** : contrairement à DeepSeek V4-Flash (MoE de 284 Md de paramètres), Qwen2.5-72B tient en 46 Go VRAM sur deux RTX 3090.',
          '**Multilinguisme natif** : pré-entraîné sur le chinois, le japonais, le coréen, l\'arabe, l\'allemand, le français et de nombreuses autres langues (voir la fiche du modèle pour la liste exacte).',
          '**Q4_K_M est la bonne quantification** pour la plupart des utilisateurs : ~55 % de réduction VRAM, une faible perte de qualité.',
          '**Décision matérielle** : 12 Go VRAM → modèle 14B ; 24 Go → 32B ; 48 Go+ → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen couvre trois sous-familles de déploiement local — usage général (7B–72B), code (Coder 7B–32B) et vision (VL 3B–72B) — toutes exécutables via Ollama ou LM Studio.' },
          { type: 'plain-terms', text: 'Faire tourner un modèle en local signifie que l\'IA s\'exécute sur votre propre ordinateur, sans serveur cloud. Les données d\'inférence ne quittent pas votre machine (sauf si vous activez des services cloud), et il n\'y a aucun coût par token après l\'achat du matériel.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Famille de modèles Qwen',
        content: [
          '**La gamme Qwen compte désormais cinq choix pratiques : le modèle phare Qwen 3.6 27B, Qwen3 (génération précédente, encore très déployée), Qwen2.5 pour le raisonnement général, Qwen2.5-Coder et Qwen2.5-VL pour la vision** — chacun disponible en plusieurs tailles. Tous sont des modèles open-weight publiés par l\'équipe Qwen d\'Alibaba. Qwen 3.6 existe en modèle dense 27B et en modèle à mélange d\'experts 35B-A3B (`qwen3.6:35b`) ; pour le matériel modeste, la génération Qwen3.5 (`qwen3.5:4b`, `qwen3.5:9b`) succède à Qwen3, et Qwen3-VL (`qwen3-vl:8b`) est la génération vision plus récente. Consultez la fiche de chaque modèle pour sa licence.',
        ],
        rows: [
          { 'Sous-famille': 'Qwen 3.6 (modèle phare)', 'Tailles disponibles': '27B dense, 35B-A3B MoE', 'Usage principal': 'Raisonnement général et code (`qwen3.6:27b-coding`), contexte de 256K', 'Préfixe tag Ollama': 'qwen3.6:' },
          { 'Sous-famille': 'Qwen3 (génération précédente)', 'Tailles disponibles': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Usage principal': 'Raisonnement général, mode réflexion, multilingue, tâches agentiques', 'Préfixe tag Ollama': 'qwen3:' },
          { 'Sous-famille': 'Qwen2.5', 'Tailles disponibles': '7B, 14B, 32B, 72B', 'Usage principal': 'Raisonnement général, tâches chinoises/multilingues, RAG', 'Préfixe tag Ollama': 'qwen2.5:' },
          { 'Sous-famille': 'Qwen2.5-Coder', 'Tailles disponibles': '7B, 14B, 32B', 'Usage principal': 'Génération de code, débogage, HumanEval, SWE-bench', 'Préfixe tag Ollama': 'qwen2.5-coder:' },
          { 'Sous-famille': 'Qwen2.5-VL', 'Tailles disponibles': '3B, 7B, 32B, 72B', 'Usage principal': 'OCR de documents, Q&A sur images, extraction de texte CJK', 'Préfixe tag Ollama': 'qwen2.5vl:' },
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
          { 'Modèle': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 12 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (GPU)': '~57 tokens/s (RTX 3060 12 GB)' },
          { 'Modèle': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 Go', 'GPU minimum': 'RTX 3060 12 Go, RTX 4060', 'Apple Silicon': 'M1/M2 8 Go', 'Vitesse (GPU)': '~55 tokens/s (RTX 3060 12 GB)' },
          { 'Modèle': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6,0 Go', 'GPU minimum': 'RTX 3060 8 Go, RTX 4060', 'Apple Silicon': 'M1/M2 16 Go', 'Vitesse (GPU)': '—' },
          { 'Modèle': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (GPU)': '~38 tokens/s (RTX 4070)' },
          { 'Modèle': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 Go', 'GPU minimum': 'RTX 4070 12 Go', 'Apple Silicon': 'M2 Pro 16 Go', 'Vitesse (GPU)': '~36 tokens/s (RTX 4070)' },
          { 'Modèle': 'Qwen3 32B Q4_K_M (génération précédente)', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (GPU)': '~28 tokens/s (RTX 4090)' },
          { 'Modèle': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 Go', 'GPU minimum': 'RTX 3090 24 Go', 'Apple Silicon': 'M3 Max 48 Go', 'Vitesse (GPU)': '~27 tokens/s (RTX 4090)' },
          { 'Modèle': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 Go', 'GPU minimum': 'RTX 4090 24 Go', 'Apple Silicon': 'M3 Max 36 Go', 'Vitesse (GPU)': '~24 tokens/s (RTX 4090)' },
          { 'Modèle': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 Go', 'GPU minimum': '2× RTX 3090 (48 Go)', 'Apple Silicon': 'M2 Ultra 64 Go', 'Vitesse (GPU)': '~12 tokens/s (2×RTX 4090)' },
        ],
        columns: ['Modèle', 'VRAM', 'GPU minimum', 'Apple Silicon', 'Vitesse (GPU)'],
        tableFormat: true,
        note: 'Les valeurs VRAM sont approximatives pour Q4_K_M. La bibliothèque Ollama indique des tailles de téléchargement de 5,2 Go (qwen3:8b), 9,3 Go (qwen3:14b), 20 Go (qwen3:32b, qwen2.5:32b), 47 Go (qwen2.5:72b) et 17 Go (qwen3.6:27b-q4_K_M ; le tag 27b par défaut fait 18–19 Go), consultées le 23 octobre 2026. Ajoutez 1–2 Go pour le cache KV à 4K de contexte. Si le GPU a moins de VRAM que nécessaire, Ollama décharge automatiquement des couches en RAM système — fonctionnel mais beaucoup plus lent.',
        callouts: [
          { type: 'tip', text: 'Vous avez identifié votre niveau VRAM ? Consultez [exactement quel GPU ou Mac acheter pour ce niveau](#affiliate-picks) — 6 Go → RTX 4060, 12 Go → RTX 4070 Super, 24 Go → RTX 3090/4090, 48 Go et plus → Mac mini M5 Pro ou double GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-fr.webp',
        imageCaption: 'Exigences VRAM Qwen3 par taille de modèle (Q4_K_M) — valeurs approximatives',
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
          { title: 'Ajuster la fenêtre de contexte si nécessaire', whyItMatters: 'La bibliothèque Ollama indique une fenêtre de contexte de 40K pour Qwen3, 32K pour Qwen2.5 et 256K pour Qwen 3.6. Pour 128K : lancez `ollama run qwen2.5:7b`, puis saisissez `/set parameter num_ctx 131072` dans la session. Cela nécessite davantage de VRAM.' },
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
ollama pull qwen2.5vl:7b          # vision 7B (~6,0 Go)

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
          '**Q4_K_M est le bon choix par défaut pour Qwen3 sur matériel grand public.** Il réduit le VRAM de ~55–60 % par rapport au FP16 avec une faible dégradation sur MMLU et HumanEval.',
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
          { type: 'one-sentence', text: 'Q4_K_M est la meilleure quantification Qwen3 pour la plupart des utilisateurs : 55 % de réduction VRAM avec une faible perte de qualité vs FP16.' },
          { type: 'plain-terms', text: 'La quantification compresse les nombres du modèle de 16 bits à 4 bits, réduisant environ de moitié la taille du fichier et le VRAM nécessaire — comme passer d\'un TIFF à un JPEG haute qualité.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Performances benchmark sur matériel grand public',
        content: [
          '**Qwen3 32B Q4_K_M sur RTX 4090 : 28 tokens/s** — assez rapide pour l\'assistance au code en temps réel. Qwen3 32B est la génération précédente de Qwen ; le plus récent Qwen 3.6 27B tient dans le même palier de 24 Go (voir le tableau matériel ci-dessus). Les chiffres ci-dessous sont indicatifs et ne sont pas des mesures de PromptQuorum : la vitesse varie selon le GPU, le pilote, la longueur de contexte et la version d\'Ollama, nous n\'avons pas réexécuté les scores de précision ; les scores HumanEval de Coder sont les résultats publiés des modèles Instruct en pleine précision (rapport technique Qwen2.5-Coder, arXiv:2409.12186, tableau 16), tandis que ceux de Qwen3 et Qwen2.5-72B sont indicatifs et non vérifiés auprès des fiches de modèle, et les builds Q4_K_M obtiennent généralement un peu moins que la pleine précision. Consultez la fiche de chaque modèle et testez sur votre matériel.',
        ],
        rows: [
          { 'Modèle (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Vitesse (GPU)': '57 tokens/s (RTX 3060 12 Go)' },
          { 'Modèle (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Vitesse (GPU)': '38 tokens/s (RTX 4070 12 Go)' },
          { 'Modèle (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Vitesse (GPU)': '28 tokens/s (RTX 4090 24 Go)' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Vitesse (GPU)': '12 tokens/s (2×RTX 3090)' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88,4 %', 'Vitesse (GPU)': '55 tokens/s (RTX 3060 12 Go)' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89,6 %', 'Vitesse (GPU)': '36 tokens/s (RTX 4070 12 Go)' },
          { 'Modèle (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Vitesse (GPU)': '27 tokens/s (RTX 4090 24 Go)' },
        ],
        columns: ['Modèle (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Vitesse (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Vous voulez ce score HumanEval de 92,7 % à 27 tokens/s ? Consultez le [GPU 24 Go qui exécute Qwen2.5-Coder 32B](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-fr.webp',
        imageCaption: 'Scores benchmark Qwen3 (Q4_K_M) — valeurs approximatives',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama : que déployer localement ?',
        content: [
          '**Selon notre évaluation, Qwen est la famille la plus économe en VRAM sur matériel grand public ; la gamme actuelle V4 de DeepSeek est de grande échelle (V4-Flash : 284 Md de paramètres au total) et impraticable sur un seul GPU grand public ; Llama 3.3 70B est une alternative si vous préférez le modèle ouvert de Meta et acceptez de déporter une partie des couches vers la RAM sur un seul GPU.**',
        ],
        rows: [
          { 'Niveau VRAM': '6 Go', 'Meilleur Qwen': 'Qwen3 8B', 'Meilleur concurrent': 'Llama 3.2 3B', 'Recommandation': 'Qwen3 8B — même VRAM, modèle beaucoup plus grand' },
          { 'Niveau VRAM': '12 Go', 'Meilleur Qwen': 'Qwen2.5-Coder 14B', 'Meilleur concurrent': 'Llama 3.1 8B Instruct', 'Recommandation': 'Qwen2.5-Coder 14B pour le code ; Llama 3.1 8B pour le chat' },
          { 'Niveau VRAM': '24 Go', 'Meilleur Qwen': 'Qwen2.5-Coder 32B', 'Meilleur concurrent': 'Llama 3.3 70B (déchargé)', 'Recommandation': 'Qwen2.5-Coder 32B pour le code ; Llama 3.3 70B si qualité > vitesse' },
          { 'Niveau VRAM': '48 Go+', 'Meilleur Qwen': 'Qwen2.5-72B', 'Meilleur concurrent': 'DeepSeek V4-Flash 284B MoE', 'Recommandation': 'Poids seuls ~140 Go en 4 bits ; Qwen2.5-72B est le choix pratique' },
        ],
        columns: ['Niveau VRAM', 'Meilleur Qwen', 'Meilleur concurrent', 'Recommandation'],
        tableFormat: true,
        content2: 'Pour une comparaison approfondie entre DeepSeek et Qwen sur le code, le raisonnement et le multilingue : [Comparaison locale DeepSeek vs Qwen 2026](/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Contexte réglementaire : RGPD et CNIL',
        content: [
          '**Déployer Qwen3 en local garde les prompts d\'inférence sur votre propre matériel : aucune donnée d\'inférence n\'est envoyée à une API cloud, ce qui évite ce transfert pour la couche d\'inférence.** Les API LLM cloud exigent l\'envoi de prompts vers des serveurs externes, ce qui peut déclencher l\'article 28 du RGPD (sous-traitant) et potentiellement les articles 44 et suivants (transferts hors UE). La conformité de l\'ensemble de votre dispositif dépend de vos données, de vos finalités et de votre propre analyse juridique ; ceci ne constitue pas un conseil juridique.',
          'Qwen3 a été entraîné par l\'équipe Qwen d\'Alibaba sur un corpus principalement chinois et multilingue. C\'est un candidat solide pour le chinois simplifié, le traditionnel et les documents mixtes chinois/anglais/français ; testez-le sur vos propres documents.',
          '**Pour les déploiements professionnels** : pour les données personnelles sensibles dans les secteurs réglementés (médical, juridique, financier), le traitement local peut réduire l\'exposition aux transferts de données, mais la conformité dépend de votre cas d\'usage et doit être confirmée avec un conseil juridique. Un déploiement Qwen3 sans connexion internet pendant l\'inférence n\'envoie en principe aucune donnée d\'inférence à des tiers, tant que vous n\'activez pas de services cloud ou d\'outils connectés. Guide complet pour les setups hors ligne : [IA locale entièrement hors ligne](/fr/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 peut fonctionner sans connexion internet après téléchargement : les données d\'inférence n\'ont pas à quitter votre appareil, ce qui réduit les risques de transfert transfrontalier sous le RGPD (la conformité dépend de votre cas d\'usage).' },
          { type: 'plain-terms', text: 'En mode local, vos prompts et documents restent sur votre ordinateur tant que vous ne le connectez pas à un service cloud. L\'inférence n\'exige aucun appel API cloud ; la façon dont le reste de votre dispositif traite les données relève de votre responsabilité.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Quel matériel acheter pour déployer Qwen3 ?',
        content: [
          '**Faites d\'abord correspondre votre niveau Qwen cible à la VRAM nécessaire, puis achetez la carte la moins chère qui atteint ce seuil — payer pour plus de VRAM que ce dont votre modèle a besoin est la dépense excessive la plus fréquente de cette liste.** Les choix ci-dessous correspondent directement au tableau matériel ci-dessus : entrée de gamme → RTX 4060, milieu de gamme → RTX 4070 Super, haut de gamme → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, usage permanent → un mini-PC. Les prix ci-dessous reflètent le marché GPU de 2026 — la pénurie de puces mémoire et la demande des datacenters IA ont fait grimper le prix des GPU neufs et des configurations mémoire Apple ; vérifiez le prix actuel avant d\'acheter.',
        ],
        callouts: [
          { type: 'tip', text: 'Passez cette section si vous possédez déjà un GPU avec 8 Go de VRAM ou plus — exécutez d\'abord Qwen3 8B sur ce que vous avez. N\'achetez du nouveau matériel qu\'une fois ce plafond atteint et si vous voulez un modèle plus grand.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 Go',
            tagline: 'Choix entrée de gamme — Qwen3 8B, Qwen2.5-Coder 7B (5,5 Go de VRAM)',
            verdict: 'La carte la moins chère de cette liste qui atteint le seuil de 5,5 Go requis par Qwen3 8B tout en laissant de la marge pour le contexte. Exécute Qwen2.5-Coder 7B à ~55 tokens/s — assez rapide pour une assistance au code interactive.',
            pros: [
              'Le besoin de 5,5 Go de VRAM est couvert avec de la marge pour un cache KV à contexte long',
              'Prix le plus bas de cette liste — le bon premier GPU si vous n\'avez jamais exécuté de LLM local',
              '50–57 tokens/s sur les modèles 7B/8B, au niveau des cartes plus chères à cette taille de modèle',
            ],
            cons: [
              'Plafonne à Qwen3 8B / Qwen2.5-Coder 7B — aucune marge pour passer à 14B sans compresser le cache KV',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.fr/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 Go', productCategory: 'GPU', priceRange: 'env. 470–600 €', label: 'Vérifier le prix actuel →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 Go',
            tagline: 'Choix milieu de gamme — Qwen3 14B, Qwen2.5-Coder 14B (9,5 Go de VRAM)',
            verdict: 'Exécute Qwen2.5-Coder 14B (89,6 % HumanEval) à 36–38 tokens/s avec 2–3 Go de VRAM restants pour le contexte — un bon choix pour le palier de 12 Go.',
            pros: [
              'Le modèle de 9,5 Go tient avec 2–3 Go de VRAM en réserve — de la place pour des fenêtres de contexte plus longues',
              'HumanEval 89,6 % (14B) contre 88,4 % (7B), scores Instruct publiés en pleine précision — un gain modeste sur ce benchmark ; choisissez le 14B pour la marge sur les tâches plus difficiles, pas pour un grand bond de score',
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
            tagline: 'Choix haut de gamme — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20,5 / ~17 Go de VRAM)',
            verdict: 'La 4090 délivre ~27 tokens/s sur Qwen2.5-Coder 32B — une vitesse de code en temps réel à 92,7 % de HumanEval. Une RTX 3090 d\'occasion offre la même VRAM de 24 Go et se situe à environ 15 % de la vitesse d\'inférence de la 4090, pour un prix nettement plus bas si vous trouvez une annonce d\'occasion fiable.',
            pros: [
              '24 Go de VRAM couvrent toutes les variantes de Qwen3 32B et Qwen 3.6 27B avec de la marge',
              '~27 tokens/s sur Qwen2.5-Coder 32B (92,7 % HumanEval) — assez rapide pour du pair programming en temps réel',
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
            name: 'Apple Mac mini M5 Pro 64 Go',
            tagline: 'Choix Apple Silicon — Qwen 3.6 27B ou Qwen3 32B, silencieux et basse consommation',
            verdict: 'Le meilleur rapport qualité/prix pour exécuter Qwen3 32B avec de la mémoire unifiée — silencieux, faible consommation électrique, aucun GPU séparé à installer. Pour Qwen2.5-72B, un M2 Ultra de 64 Go est le minimum juste et 128 Go ou plus laisse de la marge pour le contexte.',
            pros: [
              'Les configurations M5 Pro montent jusqu\'à 64 Go de mémoire unifiée — bien au-delà des 20,5 Go requis par Qwen3 32B, avec de la marge pour d\'autres applications',
              'Fonctionnement silencieux et consommation adaptée à un bureau — aucune gestion de refroidissement de GPU dédié',
              'Un seul achat couvre le système, le stockage et l\'inférence — pas de montage GPU/alimentation/boîtier séparé',
            ],
            cons: [
              'Aucun benchmark indépendant de Qwen3 32B sur la puce M5 Pro n\'est encore publié — attendez-vous à des performances nettement plus lentes qu\'un GPU dédié comme la RTX 4090, dans la continuité des générations précédentes d\'Apple Silicon sur Mac mini',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/fr/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 Go', productCategory: 'Mini PC', priceRange: 'à partir de 1 700 € (la configuration 64 Go coûte plus cher)', label: 'Vérifier le prix actuel →' },
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
          '**Ignorer la taille de la fenêtre de contexte.** Selon sa fiche de modèle, Qwen3 prend en charge nativement 32K tokens et environ 131K avec YaRN. La spécification du Modelfile d\'Ollama fixe `num_ctx` à 2048 par défaut, mais le runtime applique en réalité une valeur par défaut échelonnée selon la VRAM : 4K en dessous de 24 Gio, 32K entre 24 et 48 Gio, 256K au-delà de 48 Gio. Ne comptez sur aucun des deux réglages par défaut : définissez `num_ctx` explicitement, par exemple en saisissant `/set parameter num_ctx 8192` (ou plus) dans la session `ollama run` — sinon le modèle tronque silencieusement l\'entrée.',
          '**Choisir la quantification Q2_K pour du chinois.** À 2 bits, la sortie en langue chinoise de Qwen3 se dégrade notablement. Utiliser au minimum Q4_K_M pour tout travail en CJK.',
          '**Exécuter le modèle 32B avec trop peu de VRAM.** Si votre GPU a 16 Go et que le modèle en nécessite 20,5 Go, Ollama décharge des couches en RAM — le modèle tourne à 3–5 tokens/s, inutilisable en interactif.',
          '**Utiliser la mauvaise sous-famille pour le code.** Qwen2.5-Coder 7B est entraîné pour le code et obtient 88,4 % sur HumanEval (score Instruct publié en pleine précision), alors que les modèles généralistes ne sont pas réglés pour cela. Toujours utiliser la variante Coder pour le code.',
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
            { q: 'Quelle quantité de VRAM est nécessaire pour Qwen3 8B en local ?', a: 'Qwen3 8B Q4_K_M nécessite 5,5 Go de VRAM. Une RTX 3060 12 Go, RTX 4060 ou puce Apple M avec 8 Go de mémoire unifiée suffisent.' },
            { q: 'Quel est le meilleur modèle Qwen pour le code en local ?', a: 'Qwen2.5-Coder 32B est le plus grand modèle de code dédié de Qwen2.5 qui tient sur un GPU de 24 Go ; Qwen annonce 92,7 % sur HumanEval pour la version Instruct en pleine précision. Qwen 3.6 27B propose aussi une variante code (`qwen3.6:27b-coding`). Avec 12 Go de VRAM : Qwen2.5-Coder 14B (89,6 %, 9,5 Go VRAM).' },
            { q: 'Comment Qwen se compare-t-il à DeepSeek ?', a: 'Qwen utilise une architecture dense compatible matériel grand public. La gamme ouverte actuelle de DeepSeek est la V4 (V4-Flash : 284 Md de paramètres au total, MoE), bien au-delà d\'un seul GPU grand public ; DeepSeek-V2.5 (MoE 236B, 2024) a été remplacé par la V3, puis la V4.' },
            { q: 'Puis-je utiliser Qwen sur un Mac ?', a: 'Oui. M2 Pro 32 Go : Qwen3 14B à ~32 tokens/s. M3 Max 64 Go : Qwen3 32B à ~22 tokens/s.' },
            { q: 'Quelle commande Ollama utiliser pour Qwen ?', a: 'Pour le modèle phare, `ollama run qwen3.6:27b` (~17 Go de VRAM). Pour Qwen3, `ollama pull qwen3:8b`. Pour Qwen2.5, `ollama pull qwen2.5:7b` pour 7B, `:14b` pour 14B, `:32b` pour 32B, ou `qwen2.5-coder:32b` pour la variante code. Toujours des tags explicites.' },
            { q: 'Qwen est-il adapté aux tâches en langue chinoise ?', a: 'Oui. Qwen3 supporte nativement le chinois simplifié, traditionnel, le japonais, le coréen et de nombreuses autres langues (voir la fiche du modèle). C\'est un candidat solide pour l\'IA locale en chinois ; testez-le sur vos propres documents.' },
            { q: 'Quelle quantification utiliser pour Qwen3 ?', a: 'Q4_K_M par défaut — ~55 % de réduction VRAM, une faible perte de qualité vs FP16. Éviter Q2_K pour les usages en langue chinoise.' },
            { q: 'Qwen2.5-VL fonctionne-t-il pour l\'OCR de documents chinois ?', a: 'Oui — `ollama pull qwen2.5vl:7b` (téléchargement de 6,0 Go), accepte texte et image et lit le texte CJK de documents numérisés ; testez sur vos propres scans. Le plus récent Qwen3-VL est `qwen3-vl:8b`.' },
            { q: 'Qwen3 est-il compatible avec le RGPD ?', a: 'En déploiement local, aucune donnée d\'inférence n\'est envoyée à des tiers — en principe pas de contrat de sous-traitance requis pour la couche IA selon l\'article 28 du RGPD tant qu\'aucun tiers n\'accède aux données (le RGPD continue de s\'appliquer à votre traitement ; ceci ne constitue pas un conseil juridique).' },
            { q: 'Qwen3 peut-il traiter des documents mixtes français-chinois ?', a: 'Oui. Qwen3 gère nativement le français et le chinois dans le même contexte. Pour l\'OCR de documents mixtes, Qwen2.5-VL 7B est plus adapté.' },
          ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 Go, tag 27b par défaut 18–19 Go, contexte de 256K, tag 27b-coding ; consulté le 23 octobre 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5,2 Go, 14b 9,3 Go, 32b 20 Go, contexte de 40K ; consulté le 23 octobre 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4,7 Go, 14b 9,0 Go, 32b 20 Go, 72b 47 Go, contexte de 32K ; consulté le 23 octobre 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4,7 Go, 14b 9,0 Go, 32b 20 Go, contexte de 32K ; consulté le 23 octobre 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- contexte natif de 32 768, 131 072 avec YaRN, plus de 100 langues',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- contexte de 131 072 avec YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- Tableau 16 : HumanEval 88,4 (7B), 89,6 (14B), 92,7 (32B), modèles Instruct en pleine précision',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Articles associés',
        links: [
          { url: '/fr/local-llms/run-qwen-locally-guide-2026', title: 'Exécuter Qwen 3 en local 2026', description: 'Guide setup pour un seul modèle : Qwen 3.6 27B avec Ollama et LM Studio.' },
          { url: '/fr/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2.5-VL et Qwen3-VL en local 2026', description: 'Guide complet Qwen2.5-VL et Qwen3-VL — tags Ollama, tailles, licences, OCR de documents CJK et questions sur images sur matériel grand public.' },
          { url: '/fr/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Comparaison benchmark : Qwen 3.6 27B, Llama 4 Scout et Mistral Small 3.1.' },
          { url: '/fr/local-llms/llm-quantization-explained', title: 'Quantification LLM expliquée', description: 'Q4_K_M, Q8_0 et IQ4_XS — impact sur le VRAM, la vitesse et la qualité.' },
          { url: '/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen local 2026', description: 'Comparaison complète : DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32B sur le code, le raisonnement et les langues.' },
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
    intro: 'Qwen 3.6 27B ist das neue Flagship-Modell für lokales Deployment — ein dichtes Modell unter Apache 2.0 mit 256K-Kontextfenster, das mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` läuft. Qwen3 8B läuft mit 5,5 GB VRAM über Ollama — ein einziger Befehl, keine Konfiguration erforderlich. Qwen2.5-Coder 32B erreicht 92,7 % auf HumanEval. Qwen2.5-VL 7B (6,0 GB Download in Ollama) liest chinesische und japanische Dokumente lokal. Qwen3 (2025) ist die Vorgängergeneration: weiterhin stark verbreitet über Ollama und LM Studio, aber nicht mehr das neueste Qwen. Dieser Guide deckt die gesamte Qwen-Modellfamilie ab: welches Modell für welche Hardware-Stufe geeignet ist, Ollama- und LM-Studio-Setup, Quantisierungsempfehlungen, Benchmark-Daten und ein Vergleich mit DeepSeek und Llama auf Consumer-Hardware 2026.',
    metaDescription: 'Qwen 3.6 27B läuft lokal mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b`. VRAM-Bedarf je Modellgröße, Coder- und VL-Varianten, Hardware-Tiers.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-de.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, Forscher und datenschutzbewusste Nutzer, die die vollständige Qwen-Modellfamilie lokal betreiben möchten — inklusive chinesischsprachiger Nutzer, die Alibabas Modelle gegenüber US-Alternativen bevorzugen',
    primaryTerm: 'Qwen lokal betreiben',
    affiliateDisclosure: true,
    ctaText: 'Qwen3, DeepSeek und Llama über eine Oberfläche dispatchen →',
    ctaButton: 'PromptQuorum kostenlos testen',
    leadAnswerBlock: '**Das neue Flagship-Modell ist Qwen 3.6 27B — ein dichtes Modell unter Apache 2.0 mit 256K-Kontextfenster, das mit ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` läuft.** Für ein schlankeres Setup führen Sie `ollama pull qwen3:8b` aus (Qwen3 8B, Vorgängergeneration, weiterhin stark verbreitet) — das Modell benötigt 5,5 GB VRAM und liefert 57 Tokens/Sek. auf einer RTX 3060. Für Coding-Aufgaben verwenden Sie Qwen2.5-Coder; für chinesisches/japanisches Dokument-OCR Qwen2.5-VL (`ollama pull qwen2.5vl:7b`) oder das neuere Qwen3-VL (`qwen3-vl:8b`). Kennen Sie Ihr VRAM-Budget bereits? Springen Sie direkt zu [welche GPU oder welchen Mac Sie für welche Qwen-Stufe kaufen sollten](#affiliate-picks).',
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
      { label: 'Quellen', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: 'Die Präsentation unten enthält: das neue Flagship-Modell Qwen 3.6 27B (256K-Kontext, ~17 GB in Q4_K_M), die gesamte Qwen-Modellfamilie auf einen Blick (Qwen3 0,6B–32B, Qwen2.5 7B–72B), VRAM-Anforderungen je Hardware-Tier, Benchmark-Daten für Qwen2.5-Coder 32B und ein Entscheidungsdiagramm Qwen vs. DeepSeek vs. Llama. Als Qwen-Deployment-Referenzkarte herunterladen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Lokal-Deployment-Guide 2026: Qwen 3.6 27B, Qwen3, Coder & VL für jede Hardware-Stufe',
      description: 'Vollständiger Guide zur lokalen Bereitstellung der Qwen-Modellfamilie — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder und VL, VRAM-Anforderungen, Ollama- und LM-Studio-Setup, Quantisierung, Benchmarks und Hardware-Empfehlungen.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
        { '@type': 'Question', name: 'Wie viel VRAM benötige ich für Qwen3 8B lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M benötigt 5,5 GB VRAM. Eine NVIDIA RTX 3060 12 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' } },
        { '@type': 'Question', name: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B ist das größte dedizierte Coding-Modell der Qwen2.5-Reihe, das auf eine 24-GB-GPU (RTX 3090 oder RTX 4090) passt; Qwen nennt 92,7 % auf HumanEval für die Instruct-Version in voller Präzision. Bei 12 GB VRAM oder weniger: Qwen2.5-Coder 14B (HumanEval 89,6 %, 9,5 GB VRAM).' } },
        { '@type': 'Question', name: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen verwendet eine Dense-Architektur, die auf Consumer-Hardware passt. DeepSeeks aktuelle offene Linie ist V4 (V4-Flash: 284B Parameter insgesamt, MoE) und liegt weit jenseits einer einzelnen Consumer-GPU; DeepSeek-V2.5 (236B-MoE, 2024) wurde durch V3 und dann V4 abgelöst. Bei begrenztem VRAM ist ein Qwen-Modell die praktische Wahl.' } },
        { '@type': 'Question', name: 'Kann ich Qwen auf einem Mac betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Apple Silicon nutzt Unified Memory — ein M2 Pro 32 GB führt Qwen3 14B flüssig mit ~32 Tokens/Sek. aus. Ein M3 Max 64 GB bewältigt Qwen3 32B mit ~22 Tokens/Sek.' } },
        { '@type': 'Question', name: 'Welchen Ollama-Befehl verwende ich für Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Für das neue Flagship-Modell: `ollama run qwen3.6:27b` (~17 GB VRAM). Für Qwen3: `ollama pull qwen3:8b`. Für Qwen2.5: `ollama pull qwen2.5:7b` für 7B, `ollama pull qwen2.5:14b` für 14B, `ollama pull qwen2.5:32b` für 32B oder `ollama pull qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' } },
        { '@type': 'Question', name: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch, Arabisch und viele weitere Sprachen (siehe Modellkarte). Es ist ein starker Kandidat für lokale KI auf Chinesisch; testen Sie es mit Ihren eigenen Dokumenten.' } },
        { '@type': 'Question', name: 'Welche Quantisierung sollte ich für Qwen3 verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M ist die empfohlene Standardauswahl — es reduziert den VRAM um ~55 % gegenüber FP16 bei geringem Qualitätsverlust. Q8_0 für nahezu FP16-Qualität bei ausreichend VRAM. Q2_K bei chinesischsprachigen Anwendungsfällen vermeiden.' } },
        { '@type': 'Question', name: 'Funktioniert Qwen2.5-VL für chinesisches Dokument-OCR?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Qwen2.5-VL 7B läuft über Ollama (`ollama pull qwen2.5vl:7b`, 6,0 GB Download), nimmt Text und Bilder entgegen und kann chinesischen, japanischen und koreanischen Text in gescannten Dokumenten lesen; testen Sie mit eigenen Scans, da die Genauigkeit von der Scanqualität abhängt. Das neuere Qwen3-VL gibt es als `qwen3-vl:8b` (6,1 GB).' } },
        { '@type': 'Question', name: 'Muss ich bei der Verwendung von Qwen3 die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Beim lokalen Betrieb von Qwen3 müssen Anfragedaten Ihren Server nicht verlassen — das Modell verarbeitet Anfragen auf Ihrer Hardware, solange Sie keine vernetzten Dienste aktivieren. Damit ist für die Inferenz in der Regel kein Auftragsverarbeitungsvertrag (AVV) nach DSGVO Art. 28 nötig, sofern kein Drittanbieter Zugriff auf die Daten erhält; die DSGVO gilt für Ihre Verarbeitung aber weiterhin. Für Unternehmen, die das BSI-Grundschutz-Kompendium anwenden, kann die lokale Inferenz den IT-Grundschutz-Baustein OPS.2.2 unterstützen. Dies ist keine Rechtsberatung.' } },
        { '@type': 'Question', name: 'Ist Qwen3 für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, insbesondere für mittelständische Unternehmen in DACH, die Datenschutz und Compliance priorisieren. Qwen3 14B oder 32B lässt sich auf einem lokalen Server betreiben, ohne Daten an externe Anbieter zu übermitteln. Damit erfüllt es die Anforderungen des BSI-Grundschutzes und eignet sich für Branchen mit erhöhtem Datenschutzbedarf wie Recht, Medizin und Finanzen.' } },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B ist das neue Flagship-Modell**: dicht, Apache 2.0, 256K-Kontext, ~17 GB VRAM in Q4_K_M über `ollama run qwen3.6:27b` (veröffentlicht im April 2026).',
          '**Qwen3 8B läuft mit 5,5 GB VRAM** — ein einziger `ollama pull qwen3:8b`-Befehl genügt; auf einer RTX 3060 erreicht es 57 Tokens/Sek.',
          '**Vier praktische Teilfamilien neben dem Flaggschiff**: Qwen3 (allgemein, Thinking-Mode; Vorgängergeneration, weiterhin stark verbreitet), Qwen2.5 (allgemein, am besten getestet), Qwen2.5-Coder (Coding, 92,7 % HumanEval bei 32B), Qwen2.5-VL (Vision, CJK-Dokument-OCR; Qwen3-VL ist die neuere Vision-Generation).',
          '**Dense-Architektur = Consumer-freundlich**: Anders als DeepSeek V4-Flash (MoE-Modell mit 284B Parametern) passt Qwen2.5-72B mit 46 GB VRAM auf zwei RTX 3090.',
          '**Native Mehrsprachigkeit**: Vortrainiert auf Chinesisch, Japanisch, Koreanisch, Arabisch, Deutsch, Französisch und vielen weiteren Sprachen (die genaue Liste steht auf der Modellkarte).',
          '**Q4_K_M ist die richtige Quantisierung** für die meisten Nutzer: ~55 % VRAM-Reduktion, geringer Qualitätsverlust.',
          '**Hardware-Entscheidung**: 12 GB VRAM → 14B-Modell; 24 GB → 32B; 48 GB+ (zwei GPUs oder Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen umfasst drei lokale Deployment-Teilfamilien — Allgemein (7B–72B), Coding (Coder 7B–32B) und Vision (VL 3B–72B) — alle über Ollama oder LM Studio ausführbar.' },
          { type: 'plain-terms', text: 'Ein Modell lokal betreiben bedeutet, dass die KI auf dem eigenen Computer statt auf einem Cloud-Server läuft. Inferenzdaten verlassen die eigene Hardware nicht (sofern Sie keine Cloud-Dienste aktivieren), und nach der Anschaffung fallen keine Kosten pro Token an.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen-Modellfamilie im Überblick',
        content: [
          '**Die Qwen-Reihe umfasst inzwischen fünf praktische Optionen: das Flagship Qwen 3.6 27B, Qwen3 (Vorgängergeneration, weiterhin stark verbreitet), Qwen2.5 für allgemeines Reasoning, Qwen2.5-Coder und Qwen2.5-VL für Vision** — jeweils in mehreren Größen. Alle sind Open-Weight-Modelle, die vom Qwen-Team bei Alibaba auf Hugging Face veröffentlicht wurden. Qwen 3.6 erscheint als dichtes 27B-Modell und als Mixture-of-Experts-Modell 35B-A3B (`qwen3.6:35b`); für kleinere Hardware folgt die Qwen3.5-Generation (`qwen3.5:4b`, `qwen3.5:9b`) auf Qwen3, und Qwen3-VL (`qwen3-vl:8b`) ist die neuere Vision-Generation. Die Lizenz steht jeweils auf der Modellkarte.',
          'Wählen Sie zunächst die Teilfamilie, dann die Größe, die zum verfügbaren VRAM passt. Die Kombination von Teilfamilien ist üblich: Qwen2.5-Coder 14B für Code-Vervollständigung und Qwen3 8B oder Qwen 3.6 27B für Dokumentenzusammenfassung.',
        ],
        rows: [
          { 'Teilfamilie': 'Qwen 3.6 (Flaggschiff)', 'Verfügbare Größen': '27B dicht, 35B-A3B MoE', 'Hauptanwendung': 'Allgemeines Reasoning und Coding (`qwen3.6:27b-coding`), 256K-Kontext', 'Ollama-Tag-Präfix': 'qwen3.6:' },
          { 'Teilfamilie': 'Qwen3 (Vorgängergeneration)', 'Verfügbare Größen': '0,6B, 1,7B, 4B, 8B, 14B, 32B', 'Hauptanwendung': 'Allgemeines Reasoning, Thinking-Mode, mehrsprachig, agentische Aufgaben', 'Ollama-Tag-Präfix': 'qwen3:' },
          { 'Teilfamilie': 'Qwen2.5', 'Verfügbare Größen': '7B, 14B, 32B, 72B', 'Hauptanwendung': 'Allgemeines Reasoning, chinesisch/mehrsprachige Aufgaben, RAG', 'Ollama-Tag-Präfix': 'qwen2.5:' },
          { 'Teilfamilie': 'Qwen2.5-Coder', 'Verfügbare Größen': '7B, 14B, 32B', 'Hauptanwendung': 'Code-Generierung, Debugging, HumanEval, SWE-bench', 'Ollama-Tag-Präfix': 'qwen2.5-coder:' },
          { 'Teilfamilie': 'Qwen2.5-VL', 'Verfügbare Größen': '3B, 7B, 32B, 72B', 'Hauptanwendung': 'Dokument-OCR, Bild-Q&A, CJK-Textextraktion', 'Ollama-Tag-Präfix': 'qwen2.5vl:' },
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
          { 'Modell': 'Qwen3 8B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (GPU)': '~57 Tokens/Sek. (RTX 3060 12 GB)' },
          { 'Modell': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5,5 GB', 'Mindest-GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', 'Geschwindigkeit (GPU)': '~55 Tokens/Sek. (RTX 3060 12 GB)' },
          { 'Modell': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6,0 GB', 'Mindest-GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', 'Geschwindigkeit (GPU)': '—' },
          { 'Modell': 'Qwen3 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (GPU)': '~38 Tokens/Sek. (RTX 4070)' },
          { 'Modell': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9,5 GB', 'Mindest-GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', 'Geschwindigkeit (GPU)': '~36 Tokens/Sek. (RTX 4070)' },
          { 'Modell': 'Qwen3 32B Q4_K_M (Vorgängergeneration)', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (GPU)': '~28 Tokens/Sek. (RTX 4090)' },
          { 'Modell': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20,5 GB', 'Mindest-GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', 'Geschwindigkeit (GPU)': '~27 Tokens/Sek. (RTX 4090)' },
          { 'Modell': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', 'Mindest-GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', 'Geschwindigkeit (GPU)': '~24 Tokens/Sek. (RTX 4090)' },
          { 'Modell': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', 'Mindest-GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', 'Geschwindigkeit (GPU)': '~12 Tokens/Sek. (2×RTX 4090)' },
        ],
        columns: ['Modell', 'VRAM', 'Mindest-GPU', 'Apple Silicon', 'Geschwindigkeit (GPU)'],
        tableFormat: true,
        note: 'Die VRAM-Angaben sind Näherungswerte für Q4_K_M. Die Ollama-Bibliothek nennt Download-Größen von 5,2 GB (qwen3:8b), 9,3 GB (qwen3:14b), 20 GB (qwen3:32b, qwen2.5:32b), 47 GB (qwen2.5:72b) und 17 GB (qwen3.6:27b-q4_K_M; der Standard-Tag 27b hat 18–19 GB), geprüft am 23. Oktober 2026. Für den KV-Cache bei 4K-Kontext kommen 1–2 GB hinzu. Wenn die GPU weniger VRAM hat als das Modell benötigt, lagert Ollama automatisch Layer in den System-RAM aus — das funktioniert, reduziert aber die Geschwindigkeit erheblich.',
        callouts: [
          { type: 'tip', text: 'Ihre VRAM-Stufe steht fest? Sehen Sie sich an, [welche GPU oder welchen Mac Sie für diese Stufe genau kaufen sollten](#affiliate-picks) — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB+ → Mac mini M5 Pro oder Dual-GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-de.webp',
        imageCaption: 'Qwen3 VRAM-Anforderungen nach Modellgröße (Q4_K_M) — Näherungswerte',
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
          { title: 'Kontextfenster bei Bedarf anpassen', whyItMatters: 'Die Ollama-Bibliothek nennt ein Kontextfenster von 40K für Qwen3, 32K für Qwen2.5 und 256K für Qwen 3.6. Für 128K-Kontext bei einem 7B-Modell: Starten Sie `ollama run qwen2.5:7b` und geben Sie in der Sitzung `/set parameter num_ctx 131072` ein. Dies benötigt mehr VRAM.' },
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
ollama pull qwen2.5vl:7b          # Vision 7B (~6,0 GB)

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
          '**Q4_K_M ist die richtige Standardwahl für Qwen3 auf Consumer-Hardware.** Es reduziert den VRAM um ~55–60 % gegenüber FP16 bei geringem Benchmark-Verlust auf MMLU und HumanEval. Andere Formate haben spezifische Anwendungsfälle:',
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
          { type: 'one-sentence', text: 'Q4_K_M ist die beste Qwen3-Quantisierung für die meisten Nutzer: 55 % VRAM-Reduktion bei geringem Qualitätsverlust gegenüber FP16.' },
          { type: 'plain-terms', text: 'Quantisierung komprimiert die Zahlen des Modells von 16-Bit auf 4-Bit, was die Dateigröße und den VRAM-Bedarf etwa halbiert. Vorstellbar wie TIFF-zu-JPEG: kleinere Datei, nahezu identisches Ergebnis für die meisten Anwendungsfälle.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmark-Performance auf Consumer-Hardware',
        content: [
          '**Qwen3 32B Q4_K_M auf einer RTX 4090 liefert 28 Tokens/Sek. — schnell genug für Echtzeit-Coding-Assistenz.** Qwen3 32B ist die Vorgängergeneration von Qwen; das neuere Qwen 3.6 27B passt in dieselbe 24-GB-Stufe (siehe Hardware-Tabelle oben). Die unten aufgeführten Werte sind Richtwerte und keine Messungen von PromptQuorum: Die Geschwindigkeit hängt von GPU, Treiber, Kontextlänge und Ollama-Version ab, die Genauigkeitswerte haben wir nicht selbst erneut ermittelt, die HumanEval-Werte von Coder sind die veröffentlichten Ergebnisse der Instruct-Modelle in voller Präzision (technischer Bericht zu Qwen2.5-Coder, arXiv:2409.12186, Tabelle 16), die Werte für Qwen3 und Qwen2.5-72B sind Richtwerte und nicht mit den Modellkarten abgeglichen, und Q4_K_M-Builds liegen meist etwas unter voller Präzision. Prüfen Sie die jeweilige Modellkarte und testen Sie auf Ihrer eigenen Hardware.',
        ],
        rows: [
          { 'Modell (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74,2 %', 'Math': '58,8 %', 'HumanEval': '57,3 %', 'Geschwindigkeit (GPU)': '57 Tokens/Sek. (RTX 3060 12 GB)' },
          { 'Modell (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79,9 %', 'Math': '69,8 %', 'HumanEval': '64,6 %', 'Geschwindigkeit (GPU)': '38 Tokens/Sek. (RTX 4070 12 GB)' },
          { 'Modell (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83,3 %', 'Math': '79,5 %', 'HumanEval': '71,3 %', 'Geschwindigkeit (GPU)': '28 Tokens/Sek. (RTX 4090 24 GB)' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86,1 %', 'Math': '83,1 %', 'HumanEval': '73,2 %', 'Geschwindigkeit (GPU)': '12 Tokens/Sek. (2×RTX 3090)' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88,4 %', 'Geschwindigkeit (GPU)': '55 Tokens/Sek. (RTX 3060 12 GB)' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89,6 %', 'Geschwindigkeit (GPU)': '36 Tokens/Sek. (RTX 4070 12 GB)' },
          { 'Modell (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92,7 %', 'Geschwindigkeit (GPU)': '27 Tokens/Sek. (RTX 4090 24 GB)' },
        ],
        columns: ['Modell (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', 'Geschwindigkeit (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: 'Sie möchten diesen HumanEval-Score von 92,7 % bei 27 Tokens/Sek.? Sehen Sie sich die [24-GB-GPU an, die Qwen2.5-Coder 32B ausführt](#affiliate-picks).' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-de.webp',
        imageCaption: 'Qwen3 Benchmark-Ergebnisse (Q4_K_M) — Näherungswerte',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs. DeepSeek vs. Llama: Was lokal betreiben?',
        content: [
          '**Nach unserer Einschätzung ist Qwen auf Consumer-Hardware die VRAM-effizientere Familie; DeepSeeks aktuelle V4-Linie ist groß angelegt (V4-Flash: 284B Parameter insgesamt) und auf einer einzelnen Consumer-GPU kaum praktikabel; Llama 3.3 70B ist eine Alternative, wenn Sie Metas offenes Modell bevorzugen und auf einer einzelnen GPU einen Teil der Schichten in den System-RAM auslagern.** Die folgende Tabelle vergleicht die praktischen Optionen je VRAM-Stufe.',
        ],
        rows: [
          { 'VRAM-Stufe': '6 GB', 'Bestes Qwen': 'Qwen3 8B', 'Bester Konkurrent': 'Llama 3.2 3B (passt, aber nur 3B)', 'Empfehlung': 'Qwen3 8B gewinnt — gleiches VRAM, viel größeres Modell' },
          { 'VRAM-Stufe': '12 GB', 'Bestes Qwen': 'Qwen2.5-Coder 14B', 'Bester Konkurrent': 'Llama 3.1 8B Instruct', 'Empfehlung': 'Qwen2.5-Coder 14B für Coding; Llama 3.1 8B für allgemeinen Chat' },
          { 'VRAM-Stufe': '24 GB', 'Bestes Qwen': 'Qwen2.5-Coder 32B', 'Bester Konkurrent': 'Llama 3.3 70B (ausgelagert)', 'Empfehlung': 'Qwen2.5-Coder 32B für Code; Llama 3.3 70B wenn Qualität > Geschwindigkeit' },
          { 'VRAM-Stufe': '48 GB+', 'Bestes Qwen': 'Qwen2.5-72B', 'Bester Konkurrent': 'DeepSeek V4-Flash 284B MoE', 'Empfehlung': 'Gewichte allein ~140 GB bei 4 Bit; Qwen2.5-72B passt in 48 GB' },
        ],
        columns: ['VRAM-Stufe', 'Bestes Qwen', 'Bester Konkurrent', 'Empfehlung'],
        tableFormat: true,
        content2: 'Für einen ausführlichen Vergleich zwischen DeepSeek und Qwen in den Bereichen Coding, Reasoning und Mehrsprachigkeit, siehe [DeepSeek vs. Qwen Lokal-Vergleich 2026](/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Datensouveränität für deutsche und europäische Nutzer',
        content: [
          '**Der lokale Betrieb von Qwen3 bedeutet, dass die Prompts auf der eigenen Hardware bleiben — es gehen keine Inferenzdaten an eine Cloud-API, es entsteht kein Drittlandtransfer über eine Cloud-API; die DSGVO und das IT-Sicherheitsrecht gelten für Ihre Verarbeitung aber weiterhin.** Cloud-basierte LLM-APIs erfordern die Übermittlung von Prompts an externe Server im Ausland, was DSGVO Art. 28 (Auftragsverarbeitung) und ggf. Art. 44 ff. (Drittlandübermittlung) auslösen kann.',
          'Qwen3 wurde vom Qwen-Team bei Alibaba auf einem überwiegend chinesisch- und mehrsprachigen Korpus trainiert. Es ist ein starker Kandidat für Vereinfachtes Chinesisch, Traditionelles Chinesisch und gemischtsprachige Dokumente (Chinesisch/Englisch/Deutsch); testen Sie es mit Ihrem eigenen Material.',
          '**Für Unternehmensdeployments im DACH-Raum**: Ein Qwen3-Setup ohne Internetverbindung während der Inferenz vermeidet in der Regel die Übermittlung von Inferenzdaten an externe Anbieter, was die DSGVO-Umsetzung erleichtert (keine Rechtsberatung). Das Modell läuft ausschließlich auf lokaler Hardware — kein Drittanbieter erhält Zugriff auf Eingabe- oder Ausgabedaten, solange Sie keine vernetzten Dienste aktivieren. Für Setups nach BSI-Grundschutz kann Baustein OPS.2.2 (Fremdsoftware) herangezogen werden; die Konformität ist stets im Einzelfall zu prüfen. Vollständige Anleitung für Setups ohne Internetverbindung: [KI vollständig offline betreiben](/de/power-local-llm/local-ai-behind-firewall-offline-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3 kann nach dem Download ohne Internetverbindung laufen — Inferenzdaten müssen Ihr Gerät nicht verlassen, wodurch das Risiko einer Drittlandübermittlung von Inferenzdaten sinkt (die Einhaltung der DSGVO hängt weiterhin von Ihrem Anwendungsfall ab).' },
          { type: 'plain-terms', text: 'Beim lokalen Betrieb von Qwen3 bleiben Ihre Prompts und Dokumente auf Ihrem Computer, solange Sie ihn nicht mit einem Cloud-Dienst verbinden. Die Inferenz braucht keinen Cloud-API-Aufruf; wie der Rest Ihres Setups mit Daten umgeht, liegt in Ihrer Verantwortung.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Welche Hardware sollten Sie für Qwen3-Deployment kaufen?',
        content: [
          '**Ordnen Sie zuerst Ihre Ziel-Qwen-Stufe dem passenden VRAM zu und kaufen Sie dann die günstigste Karte, die diese Anforderung erfüllt — mehr VRAM zu bezahlen, als Ihr Modell benötigt, ist der häufigste Fehlkauf auf dieser Liste.** Die folgenden Empfehlungen entsprechen direkt der obigen Hardware-Tabelle: Einsteiger → RTX 4060, Mittelklasse → RTX 4070 Super, High-End → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, Dauerbetrieb → ein Mini-PC. Die Preise unten spiegeln den GPU-Markt 2026 wider — Speicherchip-Engpässe und die KI-Rechenzentrums-Nachfrage haben sowohl neue GPUs als auch Apple-Speicherkonfigurationen deutlich verteuert; prüfen Sie den aktuellen Preis vor dem Kauf.',
        ],
        callouts: [
          { type: 'tip', text: 'Überspringen Sie diesen Abschnitt, wenn Sie bereits eine GPU mit 8 GB+ VRAM besitzen — betreiben Sie zunächst Qwen3 8B auf vorhandener Hardware. Kaufen Sie erst neue Hardware, wenn Sie diese Grenze erreicht haben und ein größeres Modell möchten.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'Einsteiger-Empfehlung — Qwen3 8B, Qwen2.5-Coder 7B (5,5 GB VRAM)',
            verdict: 'Die günstigste Karte auf dieser Liste, die die 5,5-GB-Anforderung von Qwen3 8B mit Spielraum für Kontext erfüllt. Führt Qwen2.5-Coder 7B mit ~55 Tokens/Sek. aus — schnell genug für interaktive Coding-Unterstützung.',
            pros: [
              'Erfüllt die 5,5-GB-VRAM-Anforderung mit Puffer für langen Kontext-KV-Cache',
              'Niedrigster Preis auf dieser Liste — die richtige erste GPU, wenn Sie noch nie ein lokales LLM betrieben haben',
              '50–57 Tokens/Sek. bei 7B/8B-Modellen, gleichauf mit teureren Karten bei dieser Modellgröße',
            ],
            cons: [
              'Deckelt bei Qwen3 8B / Qwen2.5-Coder 7B — kein Spielraum für 14B ohne KV-Cache-Engpass',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.de/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: 'ca. 470–600 €', label: 'Aktuellen Preis prüfen →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'Mittelklasse-Empfehlung — Qwen3 14B, Qwen2.5-Coder 14B (9,5 GB VRAM)',
            verdict: 'Führt Qwen2.5-Coder 14B (89,6 % HumanEval) mit 36–38 Tokens/Sek. aus und lässt dabei noch 2–3 GB VRAM für Kontext übrig — eine gute Wahl für die 12-GB-Stufe.',
            pros: [
              'Das 9,5-GB-Modell passt mit 2–3 GB VRAM-Puffer — Raum für längere Kontextfenster',
              'HumanEval 89,6 % (14B) gegenüber 88,4 % (7B), veröffentlichte Instruct-Werte in voller Präzision — ein kleiner Zuwachs in diesem Benchmark; wählen Sie die 14B-Variante für Reserven bei anspruchsvolleren Aufgaben, nicht wegen eines großen Punktesprungs',
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
            tagline: 'High-End-Empfehlung — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20,5 / ~17 GB VRAM)',
            verdict: 'Die 4090 liefert ~27 Tokens/Sek. bei Qwen2.5-Coder 32B — Echtzeit-Coding-Geschwindigkeit bei 92,7 % HumanEval. Eine gebrauchte RTX 3090 hat dasselbe 24-GB-VRAM und liegt bei der Inferenzgeschwindigkeit rund 15 % hinter der 4090 — bei deutlich geringeren Kosten, sofern Sie ein vertrauenswürdiges Gebrauchtangebot finden.',
            pros: [
              '24 GB VRAM deckt jede Qwen3-32B-Variante und Qwen 3.6 27B mit Spielraum ab',
              '~27 Tokens/Sek. bei Qwen2.5-Coder 32B (92,7 % HumanEval) — schnell genug für Echtzeit-Pair-Programming',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Apple-Silicon-Empfehlung — Qwen 3.6 27B oder Qwen3 32B, leise und stromsparend',
            verdict: 'Bester Wert für den Betrieb von Qwen3 32B mit Unified Memory — leise, geringer Stromverbrauch, keine separate GPU zu verbauen. Für Qwen2.5-72B ist ein M2 Ultra mit 64 GB das knappe Minimum, ab 128 GB bleibt Spielraum für den Kontext.',
            pros: [
              'M5-Pro-Konfigurationen reichen bis zu 64 GB Unified Memory — deutlich über der 20,5-GB-Anforderung von Qwen3 32B, mit Spielraum für weitere Anwendungen',
              'Lautloser Betrieb und schreibtischfreundlicher Stromverbrauch — kein separates GPU-Kühlmanagement nötig',
              'Ein Kauf deckt Betriebssystem, Speicher und Inferenz ab — kein separater GPU/PSU/Gehäuse-Aufbau',
            ],
            cons: [
              'Für den M5-Pro-Chip liegen noch keine unabhängigen Qwen3-32B-Benchmarks vor — rechnen Sie mit spürbar langsamerer Inferenz als bei einer dedizierten GPU wie der RTX 4090, vergleichbar mit früheren Apple-Silicon-Generationen im Mac mini',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/de/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: 'ab ca. 1.700 € (64-GB-Konfiguration kostet mehr)', label: 'Aktuellen Preis prüfen →' },
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
          '**Kontextfenstergröße ignorieren.** Laut Modellkarte unterstützt Qwen3 nativ 32K Token und mit YaRN rund 131K. Die Modelfile-Spezifikation von Ollama setzt `num_ctx` standardmäßig auf 2048, doch die Laufzeitumgebung wählt tatsächlich einen VRAM-gestaffelten Standardwert: 4K unter 24 GiB, 32K zwischen 24 und 48 GiB, 256K über 48 GiB. Verlassen Sie sich auf keinen der beiden Standardwerte: Legen Sie `num_ctx` explizit fest, zum Beispiel mit `/set parameter num_ctx 8192` (oder höher) in der `ollama run`-Sitzung — andernfalls kürzt das Modell die Eingabe stillschweigend.',
          '**Q2_K-Quantisierung für chinesischsprachige Nutzung wählen.** Bei 2-Bit-Präzision verschlechtert sich Qwen3\'s chinesische Ausgabe spürbar. Q4_K_M als Minimum für jede chinesischsprachige Arbeit verwenden.',
          '**32B-Modell mit zu wenig VRAM ausführen.** Wenn die GPU 16 GB hat und das Modell 20,5 GB benötigt, lagert Ollama Layer in den System-RAM aus. Das Modell läuft, aber mit 3–5 Tokens/Sek. — für interaktive Nutzung unbrauchbar.',
          '**Falsche Teilfamilie für Coding verwenden.** Qwen2.5-Coder 7B ist für Code trainiert und erreicht 88,4 % auf HumanEval (veröffentlichter Instruct-Wert in voller Präzision), während allgemeine Modelle darauf nicht abgestimmt sind. Für Coding immer die Coder-Variante gleicher Größe verwenden.',
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
          { q: 'Was ist mit Qwen 3.7 oder Qwen 3.8?', a: 'Neue Qwen-Versionen erscheinen in kurzen Abständen, und die Tags in der Ollama-Bibliothek ändern sich entsprechend. Dieser Leitfaden beschreibt die Varianten, die zum Redaktionsschluss stabile Ollama-Tags hatten — allen voran Qwen 3.6 27B. Suchen Sie nach einer höheren Versionsnummer, prüfen Sie die aktuelle Tag-Liste auf ollama.com/library oder mit `ollama list`, statt sich auf eine Nummer aus einem Artikel zu verlassen. Wichtig für die Planung: Der Hardware-Bedarf hängt an der Parameterzahl, nicht an der Versionsnummer — was hier für ein 27B-Modell in Q4_K_M steht (~17 GB VRAM), gilt ebenso für ein neueres Modell derselben Größenklasse.' },
          { q: 'Wie viel VRAM braucht Qwen 3.6 27B?', a: 'Rund 17 GB in Q4_K_M-Quantisierung. Damit passt das Modell auf eine Karte mit 24 GB VRAM wie die RTX 4090 oder RTX 3090, mit Spielraum für den 256K-Kontext. Auf 16 GB wird es sehr eng, sobald der Kontext wächst. Wer nur 12 GB hat, greift besser zu einer kleineren Variante der Qwen-Familie statt zum 27B-Modell.' },
          { q: 'Welcher Ollama-Befehl lädt Qwen 3.6 27B?', a: '`ollama run qwen3.6:27b` lädt das Modell beim ersten Aufruf herunter und startet es direkt. Ollama verwendet standardmäßig eine Q4_K_M-Quantisierung, was hier den ~17 GB VRAM entspricht. Soll das Modell nur geladen, aber noch nicht gestartet werden, nutzen Sie `ollama pull qwen3.6:27b`.' },
          { q: 'Läuft Qwen 3.6 27B auf 12 GB VRAM?', a: 'Nicht sinnvoll. Mit ~17 GB Bedarf in Q4_K_M passt das Modell nicht vollständig auf eine 12-GB-Karte; ein Teil müsste in den System-RAM ausgelagert werden, was die Geschwindigkeit stark einbrechen lässt. Auf 12 GB VRAM fahren Sie mit einem kleineren Qwen-Modell deutlich besser — dort bleibt auch Platz für einen längeren Kontext.' },
          { q: 'Wie viel VRAM benötige ich für Qwen3 8B lokal?', a: 'Qwen3 8B Q4_K_M benötigt 5,5 GB VRAM. Eine RTX 3060 12 GB, RTX 4060 oder ein Apple-M-Chip mit 8 GB Unified Memory reichen aus.' },
          { q: 'Welches Qwen-Modell eignet sich am besten für Coding lokal?', a: 'Qwen2.5-Coder 32B ist das größte dedizierte Coding-Modell der Qwen2.5-Reihe, das auf eine 24-GB-GPU passt; Qwen nennt 92,7 % auf HumanEval für die Instruct-Version in voller Präzision. Qwen 3.6 27B bietet zudem eine Coding-Variante (`qwen3.6:27b-coding`). Bei 12 GB VRAM: Qwen2.5-Coder 14B (89,6 %, 9,5 GB VRAM).' },
          { q: 'Wie schneidet Qwen im Vergleich zu DeepSeek ab?', a: 'Qwen nutzt eine Dense-Architektur, die auf Consumer-Hardware passt. DeepSeeks aktuelle offene Linie ist V4 (V4-Flash: 284B Parameter insgesamt, MoE) und liegt weit jenseits einer einzelnen Consumer-GPU; DeepSeek-V2.5 (236B-MoE, 2024) wurde durch V3 und dann V4 abgelöst.' },
          { q: 'Kann ich Qwen auf einem Mac betreiben?', a: 'Ja. M2 Pro 32 GB führt Qwen3 14B mit ~32 Tokens/Sek. aus. M3 Max 64 GB bewältigt Qwen3 32B mit ~22 Tokens/Sek.' },
          { q: 'Welchen Ollama-Befehl verwende ich für Qwen?', a: 'Für das Flagship-Modell: `ollama run qwen3.6:27b` (~17 GB VRAM). Für Qwen3: `ollama pull qwen3:8b`. Für Qwen2.5: `ollama pull qwen2.5:7b` für 7B, `:14b` für 14B, `:32b` für 32B oder `qwen2.5-coder:32b` für die Coding-Variante. Immer explizite Größen-Tags verwenden.' },
          { q: 'Ist Qwen für chinesischsprachige Aufgaben geeignet?', a: 'Ja. Qwen3 wurde auf einem umfangreichen chinesischen Korpus vortrainiert und unterstützt nativ Vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Koreanisch und viele weitere Sprachen (siehe Modellkarte). Es ist ein starker Kandidat für lokale KI auf Chinesisch; testen Sie es mit Ihren eigenen Dokumenten.' },
          { q: 'Welche Quantisierung sollte ich für Qwen3 verwenden?', a: 'Q4_K_M ist die empfohlene Standardwahl — ~55 % VRAM-Reduktion bei geringem Qualitätsverlust. Q8_0 für nahezu FP16-Qualität. Q2_K bei chinesischsprachigen Anwendungen vermeiden.' },
          { q: 'Funktioniert Qwen2.5-VL für chinesisches Dokument-OCR?', a: 'Ja — Qwen2.5-VL 7B läuft über Ollama (`ollama pull qwen2.5vl:7b`, 6,0 GB Download), nimmt Text und Bilder entgegen und liest CJK-Text in gescannten Dokumenten; testen Sie mit eigenen Scans. Das neuere Qwen3-VL ist `qwen3-vl:8b`.' },
          { q: 'Muss ich bei der Verwendung von Qwen3 die DSGVO beachten?', a: 'Beim lokalen Betrieb müssen Daten den eigenen Server nicht verlassen — in der Regel kein AVV nach DSGVO Art. 28 nötig, sofern kein Drittanbieter Datenzugriff hat; die DSGVO gilt weiterhin. Kann den BSI-Baustein OPS.2.2 unterstützen.' },
          { q: 'Ist Qwen3 für den deutschen Mittelstand geeignet?', a: 'Ja. Qwen3 14B oder 32B lässt sich auf einem lokalen Server betreiben ohne externe Datenübermittlung — geeignet für datenschutzkritische Branchen wie Recht, Medizin und Finanzen im DACH-Raum.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 GB, Standard-Tag 27b 18–19 GB, 256K-Kontext, Tag 27b-coding; geprüft am 23. Oktober 2026',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5,2 GB, 14b 9,3 GB, 32b 20 GB, 40K-Kontext; geprüft am 23. Oktober 2026',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, 72b 47 GB, 32K-Kontext; geprüft am 23. Oktober 2026',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4,7 GB, 14b 9,0 GB, 32b 20 GB, 32K-Kontext; geprüft am 23. Oktober 2026',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- 32.768 nativer Kontext, 131.072 mit YaRN, über 100 Sprachen',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- 131.072 Kontext mit YaRN',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- Tabelle 16: HumanEval 88,4 (7B), 89,6 (14B), 92,7 (32B), Instruct-Modelle in voller Präzision',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        links: [
          { url: '/de/local-llms/run-qwen-locally-guide-2026', title: 'Qwen 3 lokal betreiben 2026', description: 'Einzelmodell-Setup-Guide für Qwen 3.6 27B mit Ollama und LM Studio — der schnellste Weg zu einer funktionierenden Qwen-Instanz.' },
          { url: '/de/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2.5-VL und Qwen3-VL lokal betreiben 2026', description: 'Vollständiger Guide zu Qwen2.5-VL und Qwen3-VL — Ollama-Tags, Größen, Lizenzen, CJK-Dokument-OCR und Bild-Q&A auf Consumer-Hardware.' },
          { url: '/de/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs. Llama vs. Mistral 2026', description: 'Benchmark-Vergleich von Qwen 3.6 27B, Llama 4 Scout und Mistral Small 3.1 auf MMLU, SWE-bench und MATH.' },
          { url: '/de/local-llms/llm-quantization-explained', title: 'LLM-Quantisierung erklärt', description: 'Was Q4_K_M, Q8_0 und IQ4_XS bedeuten — wie sie VRAM, Geschwindigkeit und Ausgabequalität beeinflussen.' },
          { url: '/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs. Qwen Lokal-Vergleich 2026', description: 'Vollständiger Vergleich: DeepSeek-R1-Distill-Qwen-32B vs. Qwen3 32B bei Coding, Reasoning, Chinesisch und kreativem Schreiben — mit Mac-vs.-NVIDIA-Aufschlüsselung.' },
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
    intro: 'Qwen 3.6 27Bはローカルデプロイの新フラッグシップです。Apache 2.0ライセンスの密なモデルで、256Kコンテキストウィンドウを持ち、`ollama run qwen3.6:27b`でQ4_K_M約17GBのVRAMで動作します。Qwen3 8BはOllamaを使えばVRAM 5.5GBで動作します。コマンドは1つだけ、設定不要です。Qwen2.5-Coder 32BはHumanEvalで92.7%を達成し、Qwen2.5-VL 7B（Ollamaで6.0GBのダウンロード）は中国語・日本語のドキュメントをローカルで読み取れます。Qwen3（2025年）は前世代で、OllamaやLM Studioで今も広く使われていますが、最新のQwenではありません。このガイドでは、Qwenモデルファミリー全体を解説します。各ハードウェア階層に最適なモデルの選び方、OllamaとLM Studioのセットアップ、量子化の推奨設定、ベンチマークデータ、そしてコンシューマーハードウェアでのDeepSeek・Llamaとの比較を網羅しています。',
    metaDescription: 'Qwen 3.6 27B・Qwen3・Qwen2.5（7B〜72B）・Qwen2.5-Coder・Qwen2.5-VLを2026年にローカルで動かす完全実践ガイド。VRAM要件、OllamaとLM StudioのセットアップガイドQ4_K_Mベンチマーク、ハードウェア階層別の選び方を解説します。',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ja.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Qwenモデルファミリーをローカルで実行したい開発者・研究者・プライバシー重視のユーザー',
    primaryTerm: 'Qwen ローカルデプロイ',
    affiliateDisclosure: true,
    ctaText: 'Qwen3・DeepSeek・Llamaを1つのインターフェースからディスパッチ →',
    ctaButton: 'PromptQuorumを無料で試す',
    leadAnswerBlock: '**新しいフラッグシップはQwen 3.6 27Bです。Apache 2.0ライセンスの密なモデルで、256Kコンテキストウィンドウを持ち、`ollama run qwen3.6:27b`でQ4_K_M約17GBのVRAMで動作します。** より軽量な構成なら、`ollama pull qwen3:8b`を実行すればQwen3 8B（前世代ですが今も広く使われています）がVRAM 5.5GB、RTX 3060で57トークン/秒で動作します。コーディング用途にはQwen2.5-Coderを、中国語・日本語ドキュメントOCRにはQwen2.5-VL（`ollama pull qwen2.5vl:7b`）またはより新しいQwen3-VL（`qwen3-vl:8b`）を使用してください。VRAM予算がすでに決まっている方は、[各Qwen階層に最適なGPUまたはMacの選び方](#affiliate-picks)へ直接お進みください。',
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
      { label: '情報源', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '下記スライドデッキの内容：新フラッグシップQwen 3.6 27B（256Kコンテキスト、Q4_K_M約17GB）、Qwenモデルファミリー全体像（Qwen3 0.6B〜32B、Qwen2.5 7B〜72B）、ハードウェア階層別VRAM要件、Qwen2.5-Coder 32Bのベンチマークデータ、Qwen vs DeepSeek vs Llamaの意思決定チャート。Qwenデプロイ参照カードとしてダウンロード可能。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwenローカルデプロイガイド2026：Qwen 3.6 27B・Qwen3・Coder・VLを全ハードウェア階層で動かす',
      description: 'Qwenモデルファミリーのローカルデプロイ完全ガイド — Qwen 3.6 27B・Qwen3・Qwen2.5・Coder・VL、VRAM要件、OllamaとLM Studioのセットアップ、量子化、ベンチマーク、ハードウェア推奨。',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          {
            '@type': 'Question',
            'name': 'Qwen3 8Bをローカルで動かすのに必要なVRAMは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 8B Q4_K_MにはVRAM 5.5GBが必要です。RTX 3060 12 GB、RTX 4060、またはApple M系8GBユニファイドメモリで動作します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'コーディング用途に最適なQwenモデルは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5-Coder 32Bは、24GB GPUに収まるQwen2.5系の最大の専用コーディングモデルで、Qwenはフル精度のInstruct版でHumanEval 92.7%と報告しています。Qwen 3.6 27Bにもコーディング版（`qwen3.6:27b-coding`）があります。VRAM 12GB以下ならQwen2.5-Coder 14B（89.6%、9.5GB VRAM）。',
            },
          },
          {
            '@type': 'Question',
            'name': 'QwenとDeepSeekのローカルデプロイ比較は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwenはコンシューマーハードウェアに収まるDenseアーキテクチャです。DeepSeekの現行オープン系列はV4（V4-Flash：総パラメータ284B、MoE）で、単一のコンシューマーGPUをはるかに超えます。DeepSeek-V2.5（236B MoE、2024年）はV3、次いでV4に置き換えられました。',
            },
          },
          {
            '@type': 'Question',
            'name': 'MacでQwenを動かせますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。M2 Pro 32GBはQwen3 14Bを約32トークン/秒で実行。M3 Max 64GBはQwen3 32Bを約22トークン/秒で処理。',
            },
          },
          {
            '@type': 'Question',
            'name': 'QwenのOllamaコマンドは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'フラッグシップは`ollama run qwen3.6:27b`（VRAM約17GB）。Qwen3は`ollama pull qwen3:8b`。Qwen2.5は`ollama pull qwen2.5:7b`（7B）、`:14b`（14B）、`:32b`（32B）、`qwen2.5-coder:32b`（コーディング版）。常に明示的なサイズタグを使用。',
            },
          },
          {
            '@type': 'Question',
            'name': '中国語タスクにQwenは適していますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。Qwen3は大規模な中国語コーパスで学習され、簡体字・繁体字・日本語・韓国語を含む多数の言語をネイティブサポートしています（詳細はモデルカード参照）。中国語のローカルAIの有力な選択肢ですが、ご自身の文書で検証してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen3に推奨する量子化は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_Mがデフォルト推奨 — FP16比でVRAM約55%削減、品質低下は小さい。Q8_0は品質重視、Q2_Kは中国語には不適。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen2.5-VLは日本語・中国語OCRに使えますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。Qwen2.5-VL 7Bは`ollama pull qwen2.5vl:7b`（6.0GBのダウンロード）で動作し、テキストと画像を入力でき、スキャン文書のCJKテキストを読み取れます。ご自身のスキャンで試してください。より新しいQwen3-VLは`qwen3-vl:8b`です。',
            },
          },
          {
            '@type': 'Question',
            'name': 'METI AIガイドラインへの対応は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ローカルデプロイでは推論データを社外に出さずに済むため、METI「AI事業者ガイドライン」のデータガバナンスの観点で検討しやすい構成ですが、適合性は用途によります（法的助言ではありません）。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Apple M系チップでQwen2.5-72Bを動かせますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '64GB以上のユニファイドメモリのMacで動作します（M2 Ultra 64GBは余裕が小さく、128GB以上なら余裕があります）。Q4_K_Mで約46GBのメモリが必要です。',
            },
          },
          {
            '@type': 'Question',
            'name': '日本の企業でQwen3を使う場合のMETIガイドラインへの対応は？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ローカルデプロイでは推論データを社外に出さずに済むため、経済産業省の「AI事業者ガイドライン」が扱うデータガバナンスの観点でも検討しやすくなります。個人情報・秘密情報を扱う業務では、オフライン推論がリスク管理の一手段になり得ますが、適合性は用途によります（法的助言ではありません）。',
            },
          },
        ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27Bが新フラッグシップ**：密なモデル、Apache 2.0、256Kコンテキスト、Q4_K_M約17GBのVRAM、`ollama run qwen3.6:27b`（2026年4月リリース）。',
          '**Qwen3 8BはVRAM 5.5GBで動作** — `ollama pull qwen3:8b`の1コマンドで起動。RTX 3060で57トークン/秒。',
          '**フラッグシップ以外の4つの実用的なサブファミリー**：Qwen3（汎用、思考モード。前世代で今も広く使われている）、Qwen2.5（汎用、最も検証済み）、Qwen2.5-Coder（コーディング、32BでHumanEval 92.7%）、Qwen2.5-VL（ビジョン、CJKドキュメントOCR。Qwen3-VLがより新しいビジョン世代）。',
          '**Denseアーキテクチャ = コンシューマー向け**：DeepSeek V4-Flash（284BパラメータのMoE）と違い、Qwen2.5-72BはVRAM 46GBで2枚のRTX 3090に収まります。',
          '**ネイティブ多言語対応**：中国語・日本語・韓国語・アラビア語・ドイツ語・フランス語など多数の言語で事前学習（対応言語の一覧はモデルカードを参照）。',
          '**Q4_K_Mが最適な量子化**：FP16比でVRAMを約55%削減し、品質低下は小さい。',
          '**ハードウェア判断基準**：VRAM 12GB → 14Bモデル；24GB → 32B；48GB+（デュアルGPUまたはApple Silicon 64GB）→ 72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B（256Kコンテキスト、Q4_K_M約17GB）が新フラッグシップ。Qwenには4つのローカルデプロイ用サブファミリーがあります：汎用（7B〜72B）、コーディング（Coder 7B〜32B）、ビジョン（VL 3B〜72B）。すべてOllamaまたはLM Studioで実行可能。' },
          { type: 'plain-terms', text: 'モデルをローカルで動かすとは、AIがクラウドサーバーではなく自分のコンピュータ上で動作することを意味します。推論データは外部に出ず（クラウド機能を有効にしない限り）、ハードウェア購入後はトークンごとのコストもかかりません。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwenモデルファミリー概要',
        content: [
          '**Qwenのラインアップは現在、フラッグシップのQwen 3.6 27B、Qwen3（前世代で今も広く使われている）、汎用推論のQwen2.5、Qwen2.5-Coder、ビジョン用のQwen2.5-VLの5つの実用的な選択肢をカバーしています**。すべてAlibaba QwenチームがHugging Faceで公開しているオープンウェイトモデルです。Qwen 3.6は27Bの密なモデルと35B-A3BのMoEモデル（`qwen3.6:35b`）として提供されています。小型ハードウェア向けにはQwen3の後継としてQwen3.5世代（`qwen3.5:4b`、`qwen3.5:9b`）があり、ビジョンではQwen3-VL（`qwen3-vl:8b`）が新世代です。ライセンスは各モデルカードで確認してください。',
          'まずサブファミリーを選び、次にVRAMに合ったサイズを選択します。複数サブファミリーの組み合わせも一般的です：コード補完にQwen2.5-Coder 14B、文書要約にQwen3 8BまたはQwen 3.6 27B、という使い方が典型例です。',
        ],
        rows: [
          { 'サブファミリー': 'Qwen 3.6（フラッグシップ）', '利用可能なサイズ': '27B Dense、35B-A3B MoE', '主な用途': '汎用推論とコーディング（`qwen3.6:27b-coding`）、256Kコンテキスト', 'Ollamaタグプレフィックス': 'qwen3.6:' },
          { 'サブファミリー': 'Qwen3 (前世代)', '利用可能なサイズ': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '主な用途': '汎用推論、思考モード、多言語、エージェントタスク', 'Ollamaタグプレフィックス': 'qwen3:' },
          { 'サブファミリー': 'Qwen2.5', '利用可能なサイズ': '7B, 14B, 32B, 72B', '主な用途': '汎用推論、中国語/多言語タスク、RAG', 'Ollamaタグプレフィックス': 'qwen2.5:' },
          { 'サブファミリー': 'Qwen2.5-Coder', '利用可能なサイズ': '7B, 14B, 32B', '主な用途': 'コード生成、デバッグ、HumanEval、SWE-bench', 'Ollamaタグプレフィックス': 'qwen2.5-coder:' },
          { 'サブファミリー': 'Qwen2.5-VL', '利用可能なサイズ': '3B, 7B, 32B, 72B', '主な用途': 'ドキュメントOCR、画像Q&A、CJKテキスト抽出', 'Ollamaタグプレフィックス': 'qwen2.5vl:' },
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
          { 'モデル': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 12 GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（GPU）': '約57トークン/秒（RTX 3060 12 GB）' },
          { 'モデル': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5GB', '最低GPU': 'RTX 3060 12 GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（GPU）': '約55トークン/秒（RTX 3060 12 GB）' },
          { 'モデル': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6.0GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（GPU）': '—' },
          { 'モデル': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（GPU）': '約38トークン/秒（RTX 4070）' },
          { 'モデル': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（GPU）': '約36トークン/秒（RTX 4070）' },
          { 'モデル': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（GPU）': '約28トークン/秒（RTX 4090）' },
          { 'モデル': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（GPU）': '約27トークン/秒（RTX 4090）' },
          { 'モデル': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '約17GB', '最低GPU': 'RTX 4090 24GB', 'Apple Silicon': 'M3 Max 36GB', '速度（GPU）': '約24トークン/秒（RTX 4090）' },
          { 'モデル': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46GB', '最低GPU': '2× RTX 3090（48GB）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（GPU）': '約12トークン/秒（2×RTX 4090）' },
        ],
        columns: ['モデル', 'VRAM', '最低GPU', 'Apple Silicon', '速度（GPU）'],
        tableFormat: true,
        note: 'VRAMの数値はQ4_K_Mの概算です。Ollamaライブラリのダウンロードサイズは、qwen3:8bが5.2GB、qwen3:14bが9.3GB、qwen3:32bとqwen2.5:32bが20GB、qwen2.5:72bが47GB、qwen3.6:27b-q4_K_Mが17GB（既定の27bタグは18〜19GB）です（2026年10月23日確認）。4KコンテキストのKVキャッシュとして1〜2GB追加が必要です。GPUのVRAMがモデルに必要な量より少ない場合、Ollamaは自動的にシステムRAMにレイヤーをオフロードしますが、速度が大幅に低下します。',
        callouts: [
          { type: 'tip', text: 'ご自身のVRAM階層が決まったら、[その階層に最適なGPUまたはMacの選び方](#affiliate-picks)をご覧ください — 6GB → RTX 4060、12GB → RTX 4070 Super、24GB → RTX 3090/4090、48GB以上 → Mac mini M5 Proまたはデュアル GPU。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ja.webp',
        imageCaption: 'Qwen3 モデルサイズ別VRAM要件（Q4_K_M）— 目安の値',
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
          { title: '必要に応じてコンテキストウィンドウを設定', whyItMatters: 'Ollamaライブラリでは、コンテキストウィンドウはQwen3が40K、Qwen2.5が32K、Qwen 3.6が256Kと記載されています。128Kコンテキストを使う場合：`ollama run qwen2.5:7b`を起動し、セッション内で`/set parameter num_ctx 131072`と入力します。追加VRAMが必要になります。' },
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
ollama pull qwen2.5vl:7b          # ビジョン7B（約6.0GB）

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
          '**Q4_K_MはコンシューマーハードウェアでのQwen3に最適なデフォルトです。** FP16比でVRAMを約55〜60%削減し、MMLUとHumanEvalのベンチマーク劣化は小さい水準です。',
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
          { type: 'one-sentence', text: 'Q4_K_MはほとんどのユーザーにとってQwen3に最適な量子化です：FP16比でVRAMを55%削減し、品質低下は小さい。' },
          { type: 'plain-terms', text: '量子化とはモデルの数値を16ビットから4ビットに圧縮することで、ファイルサイズとVRAM使用量を約半分にします。TIFFから高品質JPEGへの変換のようなもの — ファイルは小さくなりますが、ほとんどの用途では同じ結果が得られます。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'コンシューマーハードウェアでのベンチマーク性能',
        content: [
          '**RTX 4090でのQwen3 32B Q4_K_Mは28トークン/秒** — リアルタイムのコーディング支援に十分な速度です。Qwen3 32BはQwenの前世代で、より新しいQwen 3.6 27Bが同じ24GB階層に収まります（上のハードウェア表を参照）。以下の数値は目安であり、PromptQuorumによる実測値ではありません。速度はGPU、ドライバ、コンテキスト長、Ollamaのバージョンによって変わり、精度スコアは当社で再実行したものではなく、CoderのHumanEvalスコアはInstructモデルのフル精度での公表値（Qwen2.5-Coder技術レポート、arXiv:2409.12186、表16）で、Qwen3とQwen2.5-72Bのスコアは目安でありモデルカードとの照合は行っていません。Q4_K_Mビルドは通常、フル精度よりわずかに低いスコアになります。各モデルカードを確認し、お使いのハードウェアでお試しください。',
        ],
        rows: [
          { 'モデル（Q4_K_M）': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（GPU）': '57トークン/秒（RTX 3060 12GB）' },
          { 'モデル（Q4_K_M）': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（GPU）': '38トークン/秒（RTX 4070 12GB）' },
          { 'モデル（Q4_K_M）': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（GPU）': '28トークン/秒（RTX 4090 24GB）' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（GPU）': '12トークン/秒（2×RTX 3090）' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88.4%', '速度（GPU）': '55トークン/秒（RTX 3060 12GB）' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89.6%', '速度（GPU）': '36トークン/秒（RTX 4070 12GB）' },
          { 'モデル（Q4_K_M）': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（GPU）': '27トークン/秒（RTX 4090 24GB）' },
        ],
        columns: ['モデル（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（GPU）'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '27トークン/秒でHumanEval 92.7%を狙いたいですか？[Qwen2.5-Coder 32Bを動かせる24GB GPU](#affiliate-picks)をご覧ください。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ja.webp',
        imageCaption: 'Qwen3ベンチマークスコア（Q4_K_M）— 目安の値',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：何をローカルで動かすか',
        content: [
          '**当社の見方では、QwenはコンシューマーハードウェアでのVRAM効率に優れるファミリーです。DeepSeekの現行V4系列は大規模（V4-Flash：総パラメータ284B）で、単一のコンシューマーGPUでは非現実的。Llama 3.3 70Bは、Metaのオープンモデルを好み、単一GPUで一部のレイヤーをシステムRAMにオフロードしても構わない場合の代替案です。**',
        ],
        rows: [
          { 'VRAM階層': '6GB', '最良Qwen': 'Qwen3 8B', '最良競合': 'Llama 3.2 3B（収まるが3Bのみ）', '判定': 'Qwen3 8Bが優位 — 同VRAM、より大きなモデル' },
          { 'VRAM階層': '12GB', '最良Qwen': 'Qwen2.5-Coder 14B', '最良競合': 'Llama 3.1 8B Instruct', '判定': 'コーディングにはQwen2.5-Coder 14B；汎用チャットにはLlama 3.1 8B' },
          { 'VRAM階層': '24GB', '最良Qwen': 'Qwen2.5-Coder 32B', '最良競合': 'Llama 3.3 70B（オフロード）', '判定': 'コードにはQwen2.5-Coder 32B；品質>速度ならLlama 3.3 70B' },
          { 'VRAM階層': '48GB+', '最良Qwen': 'Qwen2.5-72B', '最良競合': 'DeepSeek V4-Flash 284B MoE', '判定': '重みだけで4ビット約140GB；Qwen2.5-72Bが48GBに収まる' },
        ],
        columns: ['VRAM階層', '最良Qwen', '最良競合', '判定'],
        tableFormat: true,
        content2: 'コーディング・推論・多言語対応でのDeepSeekとQwenの詳細な比較は[DeepSeek vs Qwenローカル比較2026](/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026)をご覧ください。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '日本企業でのデータ主権と規制対応',
        content: [
          '**Qwen3をローカルで運用すると、推論データをクラウドAPIに送信せずに済みます** — クラウドAPIと異なり、推論時に外部ネットワーク通信が不要なためです。経済産業省（METI）の「AI事業者ガイドライン」が扱うデータガバナンスの観点で検討しやすい構成ですが、適合するかどうかは用途や運用体制によります。法的助言ではありませんので、専門家にご確認ください。',
          '日本語はQwen3のネイティブ対応言語に含まれています。医療・法律・金融などの日本語専門文書での精度は文書によって異なるため、ご自身の資料で検証してください。Qwen2.5-VL 7Bは日本語ドキュメントのOCRにも使えるローカルビジョンモデルです。',
          '**アジア太平洋地域の規制環境** — 日本の個人情報保護法（改正法）では、個人データの安全管理措置として「技術的安全管理措置」が義務付けられています。ローカルLLMは、個人データをオンプレミスで処理することで、この要件に対応しやすい構成です。中国・韓国・シンガポール・オーストラリアでも同様に、機密データのローカル処理はクロスボーダーデータ転送リスクを低減します（適合性は用途によるため、専門家にご確認ください）。完全オフライン構成のガイドは[完全オフラインでAIを動かす](/ja/power-local-llm/local-ai-behind-firewall-offline-2026)をご覧ください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3はダウンロード後にインターネット接続なしで動作させることができ、推論データを社外に出さずに済むため、METIのAIガバナンスガイドラインへの対応を検討しやすくなります（適合性は用途によります）。' },
          { type: 'plain-terms', text: 'ローカルで動かすと、クラウドサービスに接続しない限り、プロンプトや文書はコンピュータ上にとどまります。推論にクラウドAPI呼び出しは不要ですが、それ以外の構成がデータをどう扱うかは利用者の責任です。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qwen3デプロイにはどのハードウェアを買うべきか？',
        content: [
          '**まず目標とするQwenの階層に必要なVRAMを確認し、それをクリアする最も安いカードを選びましょう。モデルに必要な量以上のVRAMに支払うのが、このリストで最もよくある無駄遣いです。** 以下のおすすめは上記のハードウェア表に直接対応しています：エントリー → RTX 4060、ミドルレンジ → RTX 4070 Super、ハイエンド → RTX 3090/4090、Apple Silicon → Mac mini M5 Pro、常時稼働 → mini PC。以下の価格は2026年のGPU市場を反映しています — メモリチップ不足とAIデータセンター需要により、新品GPUとApple製品のメモリ構成の価格がいずれも大きく上昇しています。購入前に最新価格をご確認ください。',
        ],
        callouts: [
          { type: 'tip', text: 'すでにVRAM 8GB以上のGPUをお持ちの場合は、このセクションは読み飛ばして構いません — まずは手持ちのハードウェアでQwen3 8Bを動かしてみてください。その上限に達し、より大きなモデルが必要になってから新しいハードウェアを検討してください。' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: 'エントリー向け — Qwen3 8B、Qwen2.5-Coder 7B（5.5GB VRAM）',
            verdict: 'このリストの中で、5.5GBのQwen3 8B要件をコンテキスト用の余裕を残しつつクリアできる最も安いカードです。Qwen2.5-Coder 7Bは約55トークン/秒で動作し、インタラクティブなコーディング支援に十分な速度です。',
            pros: [
              '5.5GBのVRAM要件を、長いコンテキストのKVキャッシュ分の余裕を残してクリア',
              'このリストで最も低価格 — ローカルLLMを初めて使うなら最適な最初の1枚',
              '7B/8Bモデルで50〜57トークン/秒、より高価なカードと同等の性能をこのモデルサイズで発揮',
            ],
            cons: [
              'Qwen3 8B / Qwen2.5-Coder 7Bが上限 — KVキャッシュを圧迫せずに14Bへ拡張する余地はない',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.co.jp/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8GB', productCategory: 'GPU', priceRange: '約¥42,000〜53,000', label: '現在の価格を確認 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: 'ミドルレンジ向け — Qwen3 14B、Qwen2.5-Coder 14B（9.5GB VRAM）',
            verdict: 'Qwen2.5-Coder 14B（HumanEval 89.6%）を36〜38トークン/秒で動作させ、コンテキスト用に2〜3GBのVRAM余裕が残ります — 12GB階層に適した選択肢です。',
            pros: [
              '9.5GBのモデルが2〜3GBのVRAM余裕を残して動作 — より長いコンテキストウィンドウの余地',
              'HumanEvalは14Bが89.6%、7Bが88.4%（Instructモデルのフル精度での公表値）— このベンチマークでは差は小さいため、14Bは大きなスコア向上ではなく、難しいタスクでの余裕を目的に選んでください',
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
            tagline: 'ハイエンド向け — Qwen2.5-Coder 32B、Qwen 3.6 27B（約17〜20.5GB VRAM）',
            verdict: '4090はQwen2.5-Coder 32Bで27〜28トークン/秒を発揮します — HumanEval 92.7%でリアルタイムのコーディング速度です。中古のRTX 3090は同じ24GB VRAMを備え、信頼できる中古品を見つけられれば4090の推論速度の約15%以内で、大幅に安く入手できます。',
            pros: [
              '24GBのVRAMですべてのQwen3 32BバリアントとQwen 3.6 27Bを余裕でカバー',
              'Qwen2.5-Coder 32B（HumanEval 92.7%）で27〜28トークン/秒 — リアルタイムのペアプログラミングに十分な速度',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Apple Silicon向け — Qwen 3.6 27BまたはQwen3 32B、静音・低消費電力',
            verdict: '統合メモリでQwen3 32Bを動かす上で最もコストパフォーマンスに優れた選択肢です — 静音で消費電力も低く、別途GPUを組み込む必要がありません。Qwen2.5-72Bを動かす場合はM2 Ultra 64GBがぎりぎりの最小構成で、128GB以上ならコンテキストに余裕があります。',
            pros: [
              'M5 Pro構成は最大64GBの統合メモリまで選択可能 — Qwen3 32Bの20.5GB要件を大きく上回り、他アプリ用の余裕も確保',
              '静音動作とデスクトップに適した消費電力 — 専用のGPU冷却管理が不要',
              'OS、ストレージ、推論を一度の購入でまかなえる — 別途GPU/電源/ケースの組み立て不要',
            ],
            cons: [
              'M5 Proチップでの独立したQwen3 32Bベンチマークはまだ公開されていない — RTX 4090のような専用GPUより明らかに遅い性能が予想され、これは従来のMac mini向けApple Siliconの世代と同様の傾向',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/jp/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64GB', productCategory: 'Mini PC', priceRange: '約¥335,000から（64GB構成はさらに高額）', label: '現在の価格を確認 →' },
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
          '**コンテキストウィンドウサイズを無視する。** モデルカードによると、Qwen3はネイティブで32Kトークン、YaRNを使えば約131Kまで対応します。OllamaのModelfile仕様では`num_ctx`のデフォルトは2048ですが、実際のランタイムはVRAM容量に応じた段階的なデフォルト値を採用します（24GiB未満は4K、24〜48GiBは32K、48GiB超は256K）。どちらのデフォルトにも依存せず、`num_ctx`を明示的に設定してください。例えば`ollama run`のセッション内で`/set parameter num_ctx 8192`（またはそれ以上）と入力します。設定しないと、モデルは入力を黙って切り詰めます。',
          '**中国語用途にQ2_K量子化を選ぶ。** 2ビット精度では、Qwen3の中国語出力品質が著しく低下します。中国語作業には最低でもQ4_K_Mを使用してください。',
          '**VRAMが不足した状態で32Bモデルを実行する。** GPUが16GBでモデルが20.5GB必要な場合、Ollamaはシステムメモリにレイヤーをオフロードします。3〜5トークン/秒でインタラクティブ使用には不向きです。',
          '**コーディングに間違ったサブファミリーを使う。** Qwen2.5-Coder 7Bはコード向けに学習されており、HumanEvalで88.4%（Instructモデルのフル精度での公表値）を記録しますが、汎用モデルはそのための調整がされていません。コーディングには必ず同サイズのCoder バリアントを使用してください。',
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
            { q: 'Qwen3 8Bをローカルで動かすのに必要なVRAMは？', a: 'Qwen3 8B Q4_K_MにはVRAM 5.5GBが必要です。RTX 3060 12 GB、RTX 4060、またはApple M系8GBユニファイドメモリで動作します。' },
            { q: 'コーディング用途に最適なQwenモデルは？', a: 'Qwen2.5-Coder 32Bは、24GB GPUに収まるQwen2.5系の最大の専用コーディングモデルで、Qwenはフル精度のInstruct版でHumanEval 92.7%と報告しています。Qwen 3.6 27Bにもコーディング版（`qwen3.6:27b-coding`）があります。VRAM 12GB以下ならQwen2.5-Coder 14B（89.6%、9.5GB VRAM）。' },
            { q: 'QwenとDeepSeekのローカルデプロイ比較は？', a: 'Qwenはコンシューマーハードウェアに収まるDenseアーキテクチャです。DeepSeekの現行オープン系列はV4（V4-Flash：総パラメータ284B、MoE）で、単一のコンシューマーGPUをはるかに超えます。DeepSeek-V2.5（236B MoE、2024年）はV3、次いでV4に置き換えられました。' },
            { q: 'MacでQwenを動かせますか？', a: 'はい。M2 Pro 32GBはQwen3 14Bを約32トークン/秒で実行。M3 Max 64GBはQwen3 32Bを約22トークン/秒で処理。' },
            { q: 'QwenのOllamaコマンドは？', a: 'フラッグシップは`ollama run qwen3.6:27b`（VRAM約17GB）。Qwen3は`ollama pull qwen3:8b`。Qwen2.5は`ollama pull qwen2.5:7b`（7B）、`:14b`（14B）、`:32b`（32B）、`qwen2.5-coder:32b`（コーディング版）。常に明示的なサイズタグを使用。' },
            { q: '中国語タスクにQwenは適していますか？', a: 'はい。Qwen3は大規模な中国語コーパスで学習され、簡体字・繁体字・日本語・韓国語を含む多数の言語をネイティブサポートしています（詳細はモデルカード参照）。中国語のローカルAIの有力な選択肢ですが、ご自身の文書で検証してください。' },
            { q: 'Qwen3に推奨する量子化は？', a: 'Q4_K_Mがデフォルト推奨 — FP16比でVRAM約55%削減、品質低下は小さい。Q8_0は品質重視、Q2_Kは中国語には不適。' },
            { q: 'Qwen2.5-VLは日本語・中国語OCRに使えますか？', a: 'はい。Qwen2.5-VL 7Bは`ollama pull qwen2.5vl:7b`（6.0GBのダウンロード）で動作し、テキストと画像を入力でき、スキャン文書のCJKテキストを読み取れます。ご自身のスキャンで試してください。より新しいQwen3-VLは`qwen3-vl:8b`です。' },
            { q: 'METI AIガイドラインへの対応は？', a: 'ローカルデプロイでは推論データを社外に出さずに済むため、METI「AI事業者ガイドライン」のデータガバナンスの観点で検討しやすい構成ですが、適合性は用途によります（法的助言ではありません）。' },
            { q: 'Apple M系チップでQwen2.5-72Bを動かせますか？', a: '64GB以上のユニファイドメモリのMacで動作します（M2 Ultra 64GBは余裕が小さく、128GB以上なら余裕があります）。Q4_K_Mで約46GBのメモリが必要です。' },
            { q: '日本の企業でQwen3を使う場合のMETIガイドラインへの対応は？', a: 'ローカルデプロイでは推論データを社外に出さずに済むため、経済産業省の「AI事業者ガイドライン」が扱うデータガバナンスの観点でも検討しやすくなります。個人情報・秘密情報を扱う業務では、オフライン推論がリスク管理の一手段になり得ますが、適合性は用途によります（法的助言ではありません）。' },
          ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_Mは17GB、既定の27bタグは18〜19GB、256Kコンテキスト、27b-codingタグあり（2026年10月23日確認）',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8bは5.2GB、14bは9.3GB、32bは20GB、40Kコンテキスト（2026年10月23日確認）',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7bは4.7GB、14bは9.0GB、32bは20GB、72bは47GB、32Kコンテキスト（2026年10月23日確認）',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7bは4.7GB、14bは9.0GB、32bは20GB、32Kコンテキスト（2026年10月23日確認）',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- ネイティブ32,768、YaRNで131,072のコンテキスト、100以上の言語',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- YaRNで131,072のコンテキスト',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- 表16：HumanEvalは88.4（7B）、89.6（14B）、92.7（32B）、Instructモデルのフル精度',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        links: [
          { url: '/ja/local-llms/run-qwen-locally-guide-2026', title: 'Qwen 3をローカルで動かす2026年版ガイド', description: 'OllamaとLM StudioでQwen 3.6 27Bをセットアップする単一モデルガイド。' },
          { url: '/ja/local-llms/run-qwen-vl-locally-2026', title: 'Qwen2.5-VLとQwen3-VLをローカルで動かす2026年版', description: 'Qwen2.5-VLとQwen3-VLの完全ガイド — Ollamaタグ、サイズ、ライセンス、CJKドキュメントOCR、画像Q&A。' },
          { url: '/ja/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Qwen 3.6 27B、Llama 4 Scout、Mistral Small 3.1のMMLU・SWE-bench・MATH比較。' },
          { url: '/ja/local-llms/llm-quantization-explained', title: 'LLM量子化の解説', description: 'Q4_K_M・Q8_0・IQ4_XSの意味 — VRAMと速度と品質への影響。' },
          { url: '/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwenローカル比較2026', description: 'DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32Bの全面比較：コーディング・推論・中国語・クリエイティブライティング。Mac vs NVIDIAの詳細付き。' },
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
    intro: 'Qwen 3.6 27B是本地部署的新旗舰——Apache 2.0授权的密集模型，256K上下文窗口，通过`ollama run qwen3.6:27b`在Q4_K_M量化下约17GB显存即可运行。Qwen3 8B通过Ollama仅需5.5GB显存即可运行——只需一条命令，无需任何配置。Qwen2.5-Coder 32B在HumanEval上达到92.7%。Qwen2.5-VL 7B（Ollama下载约6.0GB）可在本地读取中日文文档。Qwen3（2025年）是上一代：仍通过Ollama和LM Studio被广泛部署，但已不是最新的Qwen。本指南涵盖完整的Qwen模型家族：各硬件层级的最优模型选择、Ollama和LM Studio部署方法、量化方案推荐、基准测试数据，以及与DeepSeek和Llama在2026年消费级硬件上的对比。',
    metaDescription: '2026年本地运行Qwen 3.6 27B、Qwen3、Qwen2.5全系列（7B–72B）、Qwen2.5-Coder与Qwen2.5-VL的完整实战部署指南：显存需求对照表、Ollama与LM Studio配置步骤、Q4_K_M量化基准数据，以及各硬件预算档位的配置建议。',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-zh.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    audience: '希望在本地运行完整Qwen模型家族的开发者、研究人员和注重数据隐私的用户，尤其是偏好阿里巴巴模型的中文用户',
    primaryTerm: 'Qwen本地部署',
    affiliateDisclosure: true,
    ctaText: '通过一个界面调度Qwen3、DeepSeek和Llama →',
    ctaButton: '免费试用PromptQuorum',
    leadAnswerBlock: '**新旗舰是Qwen 3.6 27B——Apache 2.0授权的密集模型，256K上下文窗口，通过`ollama run qwen3.6:27b`在Q4_K_M量化下约17GB显存即可运行。** 更轻量的方案：执行`ollama pull qwen3:8b`即可运行Qwen3 8B（上一代，仍被广泛部署），仅需5.5GB显存，RTX 3060上可达57个token/秒。代码任务使用Qwen2.5-Coder；中日文档OCR使用Qwen2.5-VL（`ollama pull qwen2.5vl:7b`）或更新的Qwen3-VL（`qwen3-vl:8b`）。已经知道自己的显存预算了？直接跳转查看[各Qwen档位应该买哪款GPU或Mac](#affiliate-picks)。',
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
      { label: '来源', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '下方幻灯片涵盖：新旗舰Qwen 3.6 27B（256K上下文，Q4_K_M约17GB）、Qwen模型家族全览（Qwen3 0.6B至32B，Qwen2.5 7B至72B）、各硬件层级显存要求、Qwen2.5-Coder 32B基准数据，以及Qwen vs DeepSeek vs Llama决策图表。可下载作为Qwen部署参考卡片。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen本地部署指南2026：在各硬件层级运行Qwen 3.6 27B、Qwen3、Coder和VL',
      description: 'Qwen模型家族本地部署完整指南——Qwen 3.6 27B、Qwen3、Qwen2.5、Coder和VL，显存要求、Ollama和LM Studio设置、量化方案、基准测试及硬件推荐。',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          {
            '@type': 'Question',
            'name': '本地运行Qwen3 8B需要多少显存？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 8B Q4_K_M需要5.5GB显存。RTX 3060 12 GB、RTX 4060或Apple M系列芯片8GB统一内存均可。',
            },
          },
          {
            '@type': 'Question',
            'name': '本地运行最适合代码任务的Qwen模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen2.5-Coder 32B是Qwen2.5系列中可装入24GB GPU的最大专用代码模型，Qwen报告其Instruct版全精度HumanEval为92.7%。Qwen 3.6 27B也有代码版（`qwen3.6:27b-coding`）。显存12GB或以下：Qwen2.5-Coder 14B（89.6%，9.5GB显存）。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen与DeepSeek本地部署对比？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen使用适合消费级硬件的Dense架构。DeepSeek当前的开源系列是V4（V4-Flash：总参数284B，MoE），远超单块消费级GPU；DeepSeek-V2.5（236B MoE，2024年）已被V3及随后的V4取代。',
            },
          },
          {
            '@type': 'Question',
            'name': '可以在Mac上运行Qwen吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。M2 Pro 32GB可流畅运行Qwen3 14B，约32 token/秒。M3 Max 64GB可处理Qwen3 32B，约22 token/秒。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen的Ollama命令是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '旗舰模型使用`ollama run qwen3.6:27b`（约17GB显存）。Qwen3使用`ollama pull qwen3:8b`。Qwen2.5的7B用`ollama pull qwen2.5:7b`，14B用`:14b`，32B用`:32b`，代码版用`qwen2.5-coder:32b`。始终使用明确的尺寸标签。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen适合中文任务吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '是的。Qwen3在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语等众多语言（详见模型卡），是中文本地AI的有力候选；请用自己的文档测试。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen3应该使用哪种量化格式？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M是推荐默认格式——相比FP16减少约55%显存，质量损失较小。显存充足时用Q8_0。中文任务避免Q2_K。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen2.5-VL适合中文文档OCR吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '是的——`ollama pull qwen2.5vl:7b`（下载约6.0GB），支持文本和图像输入，可读取扫描文档中的中日韩文字；请用自己的扫描件测试。更新的Qwen3-VL为`qwen3-vl:8b`。',
            },
          },
          {
            '@type': 'Question',
            'name': '本地部署Qwen3是否符合数据安全法要求？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '本地运行时推理数据无需离开本地服务器，可降低跨境传输方面的风险；但是否符合《数据安全法》取决于具体用途，受监管行业（金融、医疗、法律）应咨询法律专业人士。本文不构成法律建议。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qwen2.5-72B需要什么硬件？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M量化需约46GB显存。两块RTX 3090（合计48GB）或带64GB+统一内存的Apple Silicon（M2 Ultra 64GB刚好够用，128GB更从容）。',
            },
          },
        ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B是新旗舰**：密集模型，Apache 2.0，256K上下文，Q4_K_M约17GB显存，`ollama run qwen3.6:27b`（2026年4月发布）。',
          '**Qwen3 8B仅需5.5GB显存**——执行`ollama pull qwen3:8b`即可启动，RTX 3060上达到57 token/秒。',
          '**旗舰模型之外的四个实用子系列**：Qwen3（通用，思考模式；上一代，仍被广泛部署）、Qwen2.5（通用，验证最充分）、Qwen2.5-Coder（代码，32B达HumanEval 92.7%）、Qwen2.5-VL（视觉，CJK文档OCR；Qwen3-VL是更新的视觉世代）。',
          '**Dense架构=消费级友好**：与DeepSeek V4-Flash（284B参数的MoE）不同，Qwen2.5-72B仅需46GB显存，两块RTX 3090即可运行。',
          '**原生多语言**：在中文、日语、韩语、阿拉伯语、德语、法语等众多语言上预训练（具体语言列表见模型卡）。',
          '**Q4_K_M是正确的量化选择**：对大多数用户而言减少约55%显存，质量损失较小。',
          '**硬件决策**：12GB显存→14B模型；24GB→32B；48GB+（双卡或Apple Silicon 64GB）→72B。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B（256K上下文，Q4_K_M约17GB）是新旗舰。Qwen覆盖四个本地部署子系列——通用（7B–72B）、代码（Coder 7B–32B）和视觉（VL 3B–72B），均可通过Ollama或LM Studio运行。' },
          { type: 'plain-terms', text: '本地运行模型意味着AI在你自己的电脑上运行，而非云端服务器。推理数据不离开本机（除非您启用云服务），购买硬件后也无需按token付费。' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen模型家族概览',
        content: [
          '**Qwen产品线现在涵盖五个实用选择：旗舰Qwen 3.6 27B、Qwen3（上一代，仍被广泛部署）、通用推理的Qwen2.5、Qwen2.5-Coder，以及视觉领域的Qwen2.5-VL**——每类均有多种规格。所有模型均为阿里巴巴Qwen团队发布的开放权重模型。Qwen 3.6提供27B密集模型和35B-A3B混合专家模型（`qwen3.6:35b`）；小型硬件方面，Qwen3.5世代（`qwen3.5:4b`、`qwen3.5:9b`）晚于Qwen3，而Qwen3-VL（`qwen3-vl:8b`）是更新的视觉世代。许可证请查看各模型卡。',
          '先选择子系列，再选择适合显存的规格。混合使用子系列很常见：代码补全用Qwen2.5-Coder 14B，文档摘要用Qwen3 8B或Qwen 3.6 27B。',
        ],
        rows: [
          { '子系列': 'Qwen 3.6（旗舰）', '可用规格': '27B稠密、35B-A3B MoE', '主要用途': '通用推理与代码（`qwen3.6:27b-coding`），256K上下文', 'Ollama标签前缀': 'qwen3.6:' },
          { '子系列': 'Qwen3 (上一代)', '可用规格': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '主要用途': '通用推理、思考模式、多语言、智能体任务', 'Ollama标签前缀': 'qwen3:' },
          { '子系列': 'Qwen2.5', '可用规格': '7B, 14B, 32B, 72B', '主要用途': '通用推理、中文/多语言任务、RAG', 'Ollama标签前缀': 'qwen2.5:' },
          { '子系列': 'Qwen2.5-Coder', '可用规格': '7B, 14B, 32B', '主要用途': '代码生成、调试、HumanEval、SWE-bench', 'Ollama标签前缀': 'qwen2.5-coder:' },
          { '子系列': 'Qwen2.5-VL', '可用规格': '3B, 7B, 32B, 72B', '主要用途': '文档OCR、图像问答、CJK文字提取', 'Ollama标签前缀': 'qwen2.5vl:' },
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
          { '模型': 'Qwen3 8B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 12 GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（GPU）': '约57 token/秒（RTX 3060 12 GB）' },
          { '模型': 'Qwen2.5-Coder 7B Q4_K_M', '显存': '5.5GB', '最低GPU': 'RTX 3060 12 GB、RTX 4060', 'Apple Silicon': 'M1/M2 8GB', '速度（GPU）': '约55 token/秒（RTX 3060 12 GB）' },
          { '模型': 'Qwen2.5-VL 7B (Ollama)', '显存': '6.0GB', '最低GPU': 'RTX 3060 8GB、RTX 4060', 'Apple Silicon': 'M1/M2 16GB', '速度（GPU）': '—' },
          { '模型': 'Qwen2.5 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（GPU）': '约38 token/秒（RTX 4070）' },
          { '模型': 'Qwen2.5-Coder 14B Q4_K_M', '显存': '9.5GB', '最低GPU': 'RTX 4070 12GB', 'Apple Silicon': 'M2 Pro 16GB', '速度（GPU）': '约36 token/秒（RTX 4070）' },
          { '模型': 'Qwen2.5 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（GPU）': '约28 token/秒（RTX 4090）' },
          { '模型': 'Qwen2.5-Coder 32B Q4_K_M', '显存': '20.5GB', '最低GPU': 'RTX 3090 24GB', 'Apple Silicon': 'M3 Max 48GB', '速度（GPU）': '约27 token/秒（RTX 4090）' },
          { '模型': 'Qwen 3.6 27B Q4_K_M', '显存': '约17GB', '最低GPU': 'RTX 4090 24GB', 'Apple Silicon': 'M3 Max 36GB', '速度（GPU）': '约24 token/秒（RTX 4090）' },
          { '模型': 'Qwen2.5-72B Q4_K_M', '显存': '46GB', '最低GPU': '2× RTX 3090（48GB合计）', 'Apple Silicon': 'M2 Ultra 64GB', '速度（GPU）': '约12 token/秒（2×RTX 4090）' },
        ],
        columns: ['模型', '显存', '最低GPU', 'Apple Silicon', '速度（GPU）'],
        tableFormat: true,
        note: '显存数值为Q4_K_M的近似值。Ollama库列出的下载大小为：qwen3:8b 5.2GB、qwen3:14b 9.3GB、qwen3:32b与qwen2.5:32b 20GB、qwen2.5:72b 47GB、qwen3.6:27b-q4_K_M 17GB（默认27b标签为18–19GB），核实于2026年10月23日。4K上下文的KV缓存需额外增加1–2GB。若GPU显存不足，Ollama会自动将层卸载到系统内存——可以运行但速度会大幅降低。',
        callouts: [
          { type: 'tip', text: '已经确定自己的显存档位了？查看[该档位对应的确切GPU或Mac购买建议](#affiliate-picks)——6GB → RTX 4060，12GB → RTX 4070 Super，24GB → RTX 3090/4090，48GB以上 → Mac mini M5 Pro或双卡方案。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-zh.webp',
        imageCaption: 'Qwen3各模型尺寸显存要求（Q4_K_M）— 近似值',
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
          { title: '按需设置上下文窗口', whyItMatters: 'Ollama库标注的上下文窗口为：Qwen3 40K、Qwen2.5 32K、Qwen 3.6 256K。使用128K上下文：先运行`ollama run qwen2.5:7b`，再在会话中输入`/set parameter num_ctx 131072`，但需要更多显存。' },
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
ollama pull qwen2.5vl:7b          # 视觉7B（约6.0GB）

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
          '**Q4_K_M是Qwen3在消费级硬件上的最佳默认选择。** 相比FP16减少约55–60%显存，MMLU和HumanEval的性能损失较小。',
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
          { type: 'one-sentence', text: 'Q4_K_M是大多数用户的最佳Qwen3量化选择：相比FP16减少55%显存，质量损失较小。' },
          { type: 'plain-terms', text: '量化将模型的数值从16位压缩到4位，大约将文件大小和显存需求减半。就像从TIFF转换为高质量JPEG——文件更小，但大多数用途的效果几乎相同。' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '消费级硬件基准测试性能',
        content: [
          '**RTX 4090上的Qwen3 32B Q4_K_M达到28 token/秒**——完全满足实时代码辅助需求。Qwen3 32B是Qwen的上一代；更新的Qwen 3.6 27B适配同一24GB档位（见上方硬件表）。以下数值仅为参考值，并非PromptQuorum的实测结果：速度因GPU、驱动、上下文长度和Ollama版本而异，精度评分并非我们重新运行所得，Coder的HumanEval得分为Instruct模型全精度下的公布结果（Qwen2.5-Coder技术报告，arXiv:2409.12186，表16），Qwen3和Qwen2.5-72B的得分仅供参考，未与模型卡逐一核对；Q4_K_M构建的得分通常略低于全精度。请查看各模型卡，并在自己的硬件上测试。',
        ],
        rows: [
          { '模型（Q4_K_M）': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '速度（GPU）': '57 token/秒（RTX 3060 12GB）' },
          { '模型（Q4_K_M）': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '速度（GPU）': '38 token/秒（RTX 4070 12GB）' },
          { '模型（Q4_K_M）': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '速度（GPU）': '28 token/秒（RTX 4090 24GB）' },
          { '模型（Q4_K_M）': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '速度（GPU）': '12 token/秒（2×RTX 3090）' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88.4%', '速度（GPU）': '55 token/秒（RTX 3060 12GB）' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89.6%', '速度（GPU）': '36 token/秒（RTX 4070 12GB）' },
          { '模型（Q4_K_M）': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '速度（GPU）': '27 token/秒（RTX 4090 24GB）' },
        ],
        columns: ['模型（Q4_K_M）', 'MMLU', 'Math', 'HumanEval', '速度（GPU）'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '想要以27 token/秒的速度获得92.7%的HumanEval评分？查看[运行Qwen2.5-Coder 32B所需的24GB显存GPU](#affiliate-picks)。' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-zh.webp',
        imageCaption: 'Qwen3基准测试评分（Q4_K_M）— 近似值',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama：本地应该运行哪个',
        content: [
          '**在我们看来，Qwen在消费级硬件上的显存效率更高；DeepSeek当前的V4系列规模庞大（V4-Flash：总参数284B），在单块消费级GPU上不实用；Llama 3.3 70B是偏好Meta开放模型、并接受在单卡上将部分层卸载到系统内存时的替代方案。**',
        ],
        rows: [
          { '显存档位': '6GB', '最佳Qwen': 'Qwen3 8B', '最佳竞品': 'Llama 3.2 3B（可装入但仅3B）', '建议': 'Qwen3 8B胜出——相同显存，更大模型' },
          { '显存档位': '12GB', '最佳Qwen': 'Qwen2.5-Coder 14B', '最佳竞品': 'Llama 3.1 8B Instruct', '建议': '代码用Qwen2.5-Coder 14B；通用对话用Llama 3.1 8B' },
          { '显存档位': '24GB', '最佳Qwen': 'Qwen2.5-Coder 32B', '最佳竞品': 'Llama 3.3 70B（卸载）', '建议': '代码用Qwen2.5-Coder 32B；质量优先于速度则选Llama 3.3 70B' },
          { '显存档位': '48GB+', '最佳Qwen': 'Qwen2.5-72B', '最佳竞品': 'DeepSeek V4-Flash 284B MoE', '建议': '仅权重4位约140GB；Qwen2.5-72B可放入48GB' },
        ],
        columns: ['显存档位', '最佳Qwen', '最佳竞品', '建议'],
        tableFormat: true,
        content2: '代码、推理和多语言任务上DeepSeek与Qwen的深度对比，请参阅[DeepSeek vs Qwen本地对比2026](/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026)。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '中国用户：数据安全合规与本地部署',
        content: [
          '**本地运行Qwen3可将推理提示词保留在自己的硬件上，不向云端API发送推理数据，从而在推理环节避免跨境传输。** 基于云端的LLM API需要将提示词发送至境外服务器，可能引发《数据安全法》（DSL）等规定下的数据出境问题。整体方案是否合规取决于您的数据、处理目的和自身的法律评估；本文不构成法律建议。',
          'Qwen3由阿里巴巴Qwen团队在大规模中文及多语言语料库上训练，是简体中文、繁体中文及中英混合文档本地部署的有力候选；请用您自己的资料测试。',
          '**受监管行业（金融、医疗、法律）的企业部署方案**：推理时无互联网连接的Qwen3部署可为合规评估提供支持，但是否符合国家互联网信息办公室（CAC）关于生成式AI服务的管理规定取决于具体用途，建议咨询法律专业人士。模型完全在本地算力上运行——在我们看来，监管关注点在于训练数据和输出内容审核，而非在离线硬件上进行的推理过程。**亚太地区数据跨境**：中国、韩国、新加坡、澳大利亚均已建立数据本地化框架，本地LLM推理可降低跨境传输风险。**金融/医疗/法律企业方案**：大型银行、医院、律所如需在内网处理敏感数据，搭配防火墙内Qwen3有助于满足内部AI合规要求。完整的离线部署指南请参阅[完全离线运行AI](/zh/power-local-llm/local-ai-behind-firewall-offline-2026)。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3下载后可在无互联网连接的情况下运行，推理数据无需离开本机，从而降低《数据安全法》下的跨境数据传输风险（是否合规仍取决于具体用途）。' },
          { type: 'plain-terms', text: '本地运行Qwen3时，只要不接入云服务，您的提示词和文档就留在自己的电脑上。推理不需要调用云API；其余环节如何处理数据，由您自行负责。' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: '部署Qwen3应该买哪款硬件？',
        content: [
          '**先根据目标Qwen档位确定所需显存，再购买能满足该需求的最便宜显卡——为超出模型实际需求的显存多花钱，是这份清单里最常见的超支。** 以下推荐与上方硬件表格一一对应：入门级 → RTX 4060，中端 → RTX 4070 Super，高端 → RTX 3090/4090，Apple Silicon → Mac mini M5 Pro，全天候方案 → mini PC。以下价格反映2026年显卡市场行情——显存芯片短缺和AI数据中心需求推高了新显卡及Apple内存配置的价格，购买前请核实当前实际报价。',
        ],
        callouts: [
          { type: 'tip', text: '如果你已经拥有一块显存8GB以上的显卡，可以跳过这一节——先在现有硬件上运行Qwen3 8B。只有触及这一上限、需要更大模型时，再考虑购买新硬件。' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8GB',
            tagline: '入门级选择——Qwen3 8B、Qwen2.5-Coder 7B（5.5GB显存）',
            verdict: '这是清单中能满足Qwen3 8B 5.5GB显存需求、同时仍留有上下文余量的最便宜显卡。运行Qwen2.5-Coder 7B可达约55 token/秒——足以支持交互式编码辅助。',
            pros: [
              '5.5GB显存需求可轻松满足，还留有长上下文KV缓存的余量',
              '清单中价格最低——如果你从未运行过本地LLM，这是合适的第一块显卡',
              '在7B/8B模型上达到50–57 token/秒，与该模型规模下更贵的显卡表现相当',
            ],
            cons: [
              '上限为Qwen3 8B/Qwen2.5-Coder 7B——若不压缩KV缓存，无法升级到14B',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: '查看当前价格 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12GB',
            tagline: '中端选择——Qwen3 14B、Qwen2.5-Coder 14B（9.5GB显存）',
            verdict: '以36–38 token/秒运行Qwen2.5-Coder 14B（HumanEval 89.6%），还留有2–3GB显存用于上下文——适合12GB档位的选择。',
            pros: [
              '9.5GB模型可运行，还留有2–3GB显存余量——可支持更长的上下文窗口',
              'HumanEval：14B为89.6%，7B为88.4%（Instruct模型全精度公布值）——该基准上提升不大，选14B是为了在更难任务上留有余量，而不是为了分数大幅跃升',
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
            tagline: '高端选择——Qwen2.5-Coder 32B、Qwen 3.6 27B（约~20.5 / ~17GB显存）',
            verdict: '4090在Qwen2.5-Coder 32B上可达~27 token/秒——以92.7%的HumanEval评分实现实时编码速度。二手RTX 3090同样拥有24GB显存，推理速度约为4090的85%左右，如果能找到可信赖的二手卖家，价格会明显更低。',
            pros: [
              '24GB显存可覆盖所有Qwen3 32B变体和Qwen 3.6 27B，还留有余量',
              '在Qwen2.5-Coder 32B（HumanEval 92.7%）上达到~27 token/秒——足以支持实时结对编程',
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
            name: 'Apple Mac mini M5 Pro 64GB',
            tagline: 'Apple Silicon选择——Qwen 3.6 27B或Qwen3 32B，安静低功耗',
            verdict: '在统一内存架构上运行Qwen3 32B性价比最高的选择——安静、低功耗、无需另装显卡。若要运行Qwen2.5-72B，M2 Ultra 64GB是勉强够用的最低配置，128GB或更高则为上下文留出余量。',
            pros: [
              'M5 Pro配置最高可达64GB统一内存——远超Qwen3 32B所需的20.5GB显存，还能为其他应用留出空间',
              '静音运行，功耗适合日常桌面使用——无需额外的显卡散热管理',
              '一次性购买即可涵盖系统、存储和推理——无需单独组装GPU/电源/机箱',
            ],
            cons: [
              'M5 Pro芯片上运行Qwen3 32B目前尚无独立基准测试数据——预计性能会明显慢于RTX 4090等独立显卡，这与此前几代Mac mini上的Apple Silicon表现一致',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com.cn/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: '约 $1,699起（64GB配置价格更高）', label: '查看当前价格 →' },
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
          '**忽略上下文窗口大小。** 据模型卡，Qwen3原生支持32K tokens，使用YaRN可达约131K。Ollama的Modelfile规范将`num_ctx`默认设为2048，但实际运行时会根据显存大小分级采用不同默认值：低于24 GiB为4K，24-48 GiB为32K，超过48 GiB为256K。不要依赖这两种默认值中的任何一个，应显式设置`num_ctx`，例如在`ollama run`会话中输入`/set parameter num_ctx 8192`（或更高）——否则模型会静默截断输入。',
          '**中文用途选择Q2_K量化。** 2位精度下，Qwen3的中文输出质量明显下降——出现字符替换问题。中文任务至少使用Q4_K_M。',
          '**显存不足时运行32B模型。** 若GPU只有16GB而模型需要20.5GB，Ollama会将层卸载到系统内存。模型可运行但速度仅3–5 token/秒，不适合交互使用。',
          '**代码任务使用错误的子系列。** Qwen2.5-Coder 7B专为代码训练，在HumanEval上得88.4%（Instruct模型全精度公布值），而通用模型并未针对代码调优。代码任务始终使用同等规格的Coder版本。',
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
            { q: '本地运行Qwen3 8B需要多少显存？', a: 'Qwen3 8B Q4_K_M需要5.5GB显存。RTX 3060 12 GB、RTX 4060或Apple M系列芯片8GB统一内存均可。' },
            { q: '本地运行最适合代码任务的Qwen模型？', a: 'Qwen2.5-Coder 32B是Qwen2.5系列中可装入24GB GPU的最大专用代码模型，Qwen报告其Instruct版全精度HumanEval为92.7%。Qwen 3.6 27B也有代码版（`qwen3.6:27b-coding`）。显存12GB或以下：Qwen2.5-Coder 14B（89.6%，9.5GB显存）。' },
            { q: 'Qwen与DeepSeek本地部署对比？', a: 'Qwen使用适合消费级硬件的Dense架构。DeepSeek当前的开源系列是V4（V4-Flash：总参数284B，MoE），远超单块消费级GPU；DeepSeek-V2.5（236B MoE，2024年）已被V3及随后的V4取代。' },
            { q: '可以在Mac上运行Qwen吗？', a: '可以。M2 Pro 32GB可流畅运行Qwen3 14B，约32 token/秒。M3 Max 64GB可处理Qwen3 32B，约22 token/秒。' },
            { q: 'Qwen的Ollama命令是什么？', a: '旗舰模型使用`ollama run qwen3.6:27b`（约17GB显存）。Qwen3使用`ollama pull qwen3:8b`。Qwen2.5的7B用`ollama pull qwen2.5:7b`，14B用`:14b`，32B用`:32b`，代码版用`qwen2.5-coder:32b`。始终使用明确的尺寸标签。' },
            { q: 'Qwen适合中文任务吗？', a: '是的。Qwen3在大规模中文语料库上预训练，原生支持简体中文、繁体中文、日语、韩语等众多语言（详见模型卡），是中文本地AI的有力候选；请用自己的文档测试。' },
            { q: 'Qwen3应该使用哪种量化格式？', a: 'Q4_K_M是推荐默认格式——相比FP16减少约55%显存，质量损失较小。显存充足时用Q8_0。中文任务避免Q2_K。' },
            { q: 'Qwen2.5-VL适合中文文档OCR吗？', a: '是的——`ollama pull qwen2.5vl:7b`（下载约6.0GB），支持文本和图像输入，可读取扫描文档中的中日韩文字；请用自己的扫描件测试。更新的Qwen3-VL为`qwen3-vl:8b`。' },
            { q: '本地部署Qwen3是否符合数据安全法要求？', a: '本地运行时推理数据无需离开本地服务器，可降低跨境传输方面的风险；但是否符合《数据安全法》取决于具体用途，受监管行业（金融、医疗、法律）应咨询法律专业人士。本文不构成法律建议。' },
            { q: 'Qwen2.5-72B需要什么硬件？', a: 'Q4_K_M量化需约46GB显存。两块RTX 3090（合计48GB）或带64GB+统一内存的Apple Silicon（M2 Ultra 64GB刚好够用，128GB更从容）。' },
          ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M为17GB，默认27b标签为18–19GB，256K上下文，含27b-coding标签（核实于2026年10月23日）',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b为5.2GB，14b为9.3GB，32b为20GB，40K上下文（核实于2026年10月23日）',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b为4.7GB，14b为9.0GB，32b为20GB，72b为47GB，32K上下文（核实于2026年10月23日）',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b为4.7GB，14b为9.0GB，32b为20GB，32K上下文（核实于2026年10月23日）',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- 原生上下文32,768，使用YaRN可达131,072，支持100多种语言',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- 使用YaRN可达131,072上下文',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- 表16：HumanEval为88.4（7B）、89.6（14B）、92.7（32B），均为Instruct模型全精度',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        links: [
          { url: '/zh/local-llms/run-qwen-locally-guide-2026', title: '2026年本地运行Qwen 3指南', description: 'Qwen 3.6 27B单模型设置指南，使用Ollama和LM Studio——最快速的Qwen实例启动方法。' },
          { url: '/zh/local-llms/run-qwen-vl-locally-2026', title: '2026年本地运行Qwen2.5-VL与Qwen3-VL', description: 'Qwen2.5-VL与Qwen3-VL完整指南——Ollama标签、尺寸、许可证、CJK文档OCR和图像问答。' },
          { url: '/zh/local-llms/qwen-vs-llama-vs-mistral', title: 'Qwen vs Llama vs Mistral 2026', description: 'Qwen 3.6 27B、Llama 4 Scout和Mistral Small 3.1在MMLU、SWE-bench和MATH上的基准对比。' },
          { url: '/zh/local-llms/llm-quantization-explained', title: 'LLM量化解析', description: 'Q4_K_M、Q8_0和IQ4_XS的含义——对显存、速度和输出质量的影响。' },
          { url: '/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: 'DeepSeek vs Qwen本地对比2026', description: '完整对比：DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32B在代码、推理、中文和创意写作上的表现——含Mac vs NVIDIA详细分析。' },
          { url: '/zh/prompt-bites/best-qwen-model-for-coding', title: '最佳Qwen编码模型', description: 'Qwen2.5-Coder 7B vs 32B：本地自动补全与代码审查的选择指南。' },
          { url: '/zh/power-local-llm/deepseek-offline-china-self-hosted-2026', title: '本地离线部署 DeepSeek：完全断网运行指南', description: '想用推理模型？了解如何在离线环境中本地部署 DeepSeek-R1 Distill，推理数据可不出境，可作为《数据安全法》合规评估的一部分（是否合规取决于具体用途）。' },
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
    intro: 'Qwen 3.6 27B는 로컬 배포의 새로운 플래그십 모델입니다 — Apache 2.0 라이선스의 밀집 모델로, 256K 컨텍스트 창을 갖추고 있으며 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. Qwen3 8B는 Ollama를 통해 명령어 하나만으로 5.5 GB의 VRAM에서 실행됩니다. Qwen2.5-Coder 32B는 HumanEval에서 92.7%를 달성합니다. Qwen2.5-VL 7B(Ollama 다운로드 6.0 GB)는 중국어 및 일본어 문서를 로컬에서 읽을 수 있습니다. Qwen3(2025년)는 이전 세대로, Ollama와 LM Studio에서 여전히 널리 배포되지만 더 이상 최신 Qwen은 아닙니다. 이 가이드는 Qwen 전체 패밀리를 다룹니다 — 각 하드웨어 티어에서 실행할 모델, Ollama와 LM Studio 설정 방법, 양자화 선택, 벤치마크 데이터, 그리고 2026년 소비자 하드웨어에서 Qwen이 DeepSeek 및 Llama와 어떻게 비교되는지를 설명합니다.',
    metaDescription: '2026년에 Qwen 3.6 27B, Qwen3, Qwen2.5 (7B–72B), Qwen2.5-Coder, Qwen2.5-VL을 로컬에서 실행하십시오. VRAM 요구사항, Ollama + LM Studio 설정, Q4_K_M 벤치마크, 하드웨어 티어 가이드를 제공합니다.',
    heroImage: '/images/qwen-local-deployment-guide-2026-hardware-hero-ko.webp',
    publishDate: '2026-05-26',
    dateModified: '2026-10-23',
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
      'qwen2.5-vl 로컬',
      'qwen본지부서',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 7B',
      'Qwen2.5-Coder 14B',
      'Qwen2.5-Coder 32B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 72B',
      'DeepSeek V4-Flash',
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
      'Mac mini M5 Pro',
      'Mac mini M6',
    ],
    affiliateDisclosure: true,
    ctaText: 'Qwen3, DeepSeek, Llama를 하나의 인터페이스에서 실행하십시오 →',
    ctaButton: 'PromptQuorum 무료로 사용해보기',
    leadAnswerBlock: '**새로운 플래그십 모델은 Qwen 3.6 27B입니다** — Apache 2.0 라이선스의 밀집 모델로, 256K 컨텍스트 창을 갖추고 있으며 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. 더 가벼운 설정을 원하면 `ollama pull qwen3:8b`를 실행해 Qwen3 8B(이전 세대이지만 여전히 널리 배포됨)를 사용하십시오 — 5.5 GB의 VRAM이 필요하며 RTX 3060에서 초당 57 토큰을 처리합니다. 코딩 작업에는 Qwen2.5-Coder를, 중국어/일본어 문서 OCR에는 Qwen2.5-VL(`ollama pull qwen2.5vl:7b`) 또는 더 새로운 Qwen3-VL(`qwen3-vl:8b`)을 사용하십시오. 이미 원하는 VRAM 예산을 알고 계신가요? [각 Qwen 티어에 맞는 GPU 또는 Mac 구매 가이드](#affiliate-picks)로 바로 이동하십시오.',
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
      { label: '출처', anchor: '#sources' },
    ],
    gammaEmbedUrl: '/presentations/qwen-local-deployment-guide-2026-static.html',
    gammaDescription: '아래 슬라이드 덱은 다음 내용을 다룹니다: 새로운 플래그십 Qwen 3.6 27B(256K 컨텍스트, Q4_K_M 기준 약 17GB), Qwen 모델 패밀리 전체 개요(Qwen3 0.6B–32B, Qwen2.5 7B–72B), 하드웨어 티어별 VRAM 요구사항, Qwen2.5-Coder 32B 벤치마크 데이터, Qwen vs DeepSeek vs Llama 의사결정 차트. Qwen 배포 참고 카드로 다운로드하십시오.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen 로컬 배포 가이드 2026: 모든 하드웨어 티어에서 Qwen 3.6 27B, Qwen3, Coder & VL 실행하기',
      description: 'Qwen 모델 패밀리를 로컬에서 배포하는 완전한 가이드 — Qwen 3.6 27B, Qwen3, Qwen2.5, Coder, VL, VRAM 요구사항, Ollama 및 LM Studio 설정, 양자화, 벤치마크, 하드웨어 권장 사항.',
      datePublished: '2026-05-26',
      dateModified: '2026-10-23',
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
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 8B Q4_K_M는 5.5 GB의 VRAM이 필요합니다. NVIDIA RTX 3060 12 GB, RTX 4060, 또는 통합 메모리 8 GB의 Apple M 시리즈 칩에서 모두 원활하게 실행됩니다. VRAM이 8 GB이면 컨텍스트 및 시스템 RAM을 위한 여유 공간이 생깁니다.' },
        },
        {
          '@type': 'Question',
          name: '로컬에서 코딩에 가장 적합한 Qwen 모델은 무엇입니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B는 24 GB GPU(RTX 3090 또는 RTX 4090)에 들어가는 Qwen2.5 계열 최대 코딩 전용 모델이며, Qwen은 전체 정밀도 Instruct 버전의 HumanEval 점수를 92.7%로 보고했습니다. Qwen 3.6 27B에도 코딩 변형(`qwen3.6:27b-coding`)이 있습니다. VRAM이 12 GB 이하인 경우 Qwen2.5-Coder 14B(HumanEval 89.6%, 9.5 GB VRAM)를 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: '로컬 배포에서 Qwen은 DeepSeek와 어떻게 비교됩니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen은 소비자 하드웨어에 맞는 밀집 아키텍처를 사용합니다. DeepSeek의 현재 오픈 웨이트 계열은 V4(V4-Flash: 총 284B 파라미터, MoE)로 단일 소비자 GPU를 훨씬 넘어서며, DeepSeek-V2.5(236B MoE, 2024년)는 V3를 거쳐 V4로 대체되었습니다. VRAM이 제한된 환경에서는 Qwen 모델이 실용적인 선택입니다.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen3는 대규모 중국어 코퍼스로 사전 학습되었으며 간체 중국어, 번체 중국어, 일본어, 한국어 등 다양한 언어를 기본 지원합니다(자세한 목록은 모델 카드 참조). 중국어 로컬 AI에 유력한 후보이므로 직접 보유한 문서로 테스트하십시오.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen3에 어떤 양자화를 사용해야 합니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M이 권장 기본값입니다 — 대부분의 벤치마크에서 작은 품질 손실로 전체 정밀도 대비 VRAM을 약 55–60% 절감합니다. 여유 VRAM이 있고 FP16에 가까운 품질을 원한다면 Q8_0을 사용하십시오. Q2_K는 피하십시오 — 중국어 출력 품질이 눈에 띄게 저하됩니다.' },
        },
        {
          '@type': 'Question',
          name: 'Qwen2.5-VL이 중국어 문서 OCR에 효과적입니까?',
          acceptedAnswer: { '@type': 'Answer', text: '그렇습니다 — Qwen2.5-VL 7B는 Ollama(`ollama pull qwen2.5vl:7b`, 다운로드 6.0 GB)로 실행되며 텍스트와 이미지를 입력받아 스캔 문서의 중국어, 일본어, 한국어 텍스트를 읽을 수 있습니다. 정확도는 스캔 품질에 따라 달라지므로 직접 가진 스캔본으로 테스트하십시오. 더 새로운 Qwen3-VL은 `qwen3-vl:8b`(6.1 GB)입니다. 전체 가이드는 /local-llms/run-qwen-vl-locally-2026에서 확인하십시오.' },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen 3.6 27B가 새로운 플래그십 모델입니다**: 밀집 모델, Apache 2.0, 256K 컨텍스트, Q4_K_M 기준 약 17GB VRAM, `ollama run qwen3.6:27b`(2026년 4월 출시).',
          '**Qwen3 8B는 5.5 GB VRAM에서 실행됩니다** — `ollama pull qwen3:8b` 명령어 하나로 RTX 3060에서 초당 57 토큰 속도로 실행할 수 있습니다.',
          '**플래그십 외의 네 가지 실용적인 하위 패밀리**: Qwen3(범용, 사고 모드; 이전 세대이지만 여전히 널리 배포됨), Qwen2.5(범용, 가장 폭넓게 검증됨), Qwen2.5-Coder(코딩, 32B에서 HumanEval 92.7%), Qwen2.5-VL(비전, CJK 문서 OCR; Qwen3-VL이 더 새로운 비전 세대).',
          '**밀집 아키텍처 = 소비자 친화적**: DeepSeek V4-Flash(284B 파라미터 MoE)와 달리, Qwen2.5-72B는 두 개의 RTX 3090에서 46 GB VRAM으로 실행됩니다.',
          '**네이티브 다국어**: 중국어, 일본어, 한국어, 아랍어, 독일어, 프랑스어 등 다양한 언어로 사전 학습되었습니다(정확한 목록은 모델 카드 참조).',
          '**Q4_K_M이 적합한 양자화**: 대부분의 사용자에게 최적 — VRAM 약 55% 절감, 벤치마크 품질 손실 작음.',
          '**하드웨어 결정**: VRAM 12 GB → 14B 모델; 24 GB → 32B; 48 GB 이상(GPU 두 개 또는 Apple Silicon 64 GB) → 72B.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B(256K 컨텍스트, Q4_K_M 기준 약 17GB)가 새로운 플래그십입니다. Qwen은 범용(7B–72B), 코딩(Coder 7B–32B), 비전(VL 3B–72B) 네 가지 로컬 배포 하위 패밀리를 제공하며, 모두 Ollama 또는 LM Studio를 통해 실행 가능합니다.' },
          { type: 'plain-terms', text: '모델을 로컬에서 실행한다는 것은 AI가 클라우드 서버가 아닌 여러분의 컴퓨터에서 실행된다는 의미입니다. 추론 데이터가 외부로 전송되지 않으며(클라우드 기능을 켜지 않는 한), 하드웨어 구입 후에는 토큰당 비용이 발생하지 않습니다.' },
        ],
      },
      modelFamily: {
        id: 'model-family',
        title: 'Qwen 모델 패밀리 개요',
        content: [
          '**Qwen 라인업은 이제 다섯 가지 실용적인 선택지를 제공합니다: 플래그십 Qwen 3.6 27B, Qwen3(이전 세대, 여전히 널리 배포됨), 범용 추론용 Qwen2.5, Qwen2.5-Coder, 비전용 Qwen2.5-VL** — 각각 다양한 크기 옵션을 제공합니다. 모두 Alibaba의 Qwen 팀이 Hugging Face에 공개한 오픈 웨이트 모델입니다. Qwen 3.6은 27B 밀집 모델과 35B-A3B 전문가 혼합 모델(`qwen3.6:35b`)로 제공되며, 소형 하드웨어에서는 Qwen3.5 세대(`qwen3.5:4b`, `qwen3.5:9b`)가 Qwen3 뒤를 잇고, Qwen3-VL(`qwen3-vl:8b`)이 더 새로운 비전 세대입니다. 라이선스는 각 모델 카드에서 확인하십시오.',
          '먼저 하위 패밀리를 선택한 다음 VRAM에 맞는 크기를 고르십시오. 하위 패밀리를 혼합해 사용하는 것도 일반적입니다: 코드 완성에는 Qwen2.5-Coder 14B를, 문서 요약에는 Qwen3 8B 또는 Qwen 3.6 27B를 사용하십시오.',
        ],
        rows: [
          { '하위 패밀리': 'Qwen 3.6(플래그십)', '제공 크기': '27B 덴스, 35B-A3B MoE', '주요 용도': '범용 추론 및 코딩(`qwen3.6:27b-coding`), 256K 컨텍스트', 'Ollama 태그 접두사': 'qwen3.6:' },
          { '하위 패밀리': 'Qwen3 (이전 세대)', '제공 크기': '0.6B, 1.7B, 4B, 8B, 14B, 32B', '주요 용도': '범용 추론, 사고 모드, 다국어, 에이전트 작업', 'Ollama 태그 접두사': 'qwen3:' },
          { '하위 패밀리': 'Qwen2.5', '제공 크기': '7B, 14B, 32B, 72B', '주요 용도': '범용 추론, 중국어/다국어 작업, RAG', 'Ollama 태그 접두사': 'qwen2.5:' },
          { '하위 패밀리': 'Qwen2.5-Coder', '제공 크기': '7B, 14B, 32B', '주요 용도': '코드 생성, 디버깅, HumanEval, SWE-bench', 'Ollama 태그 접두사': 'qwen2.5-coder:' },
          { '하위 패밀리': 'Qwen2.5-VL', '제공 크기': '3B, 7B, 32B, 72B', '주요 용도': '문서 OCR, 이미지 Q&A, CJK 텍스트 추출', 'Ollama 태그 접두사': 'qwen2.5vl:' },
        ],
        columns: ['하위 패밀리', '제공 크기', '주요 용도', 'Ollama 태그 접두사'],
        tableFormat: true,
        note: 'Qwen 3.6 27B(2026년 4월 출시)는 새로운 플래그십 모델입니다 — 256K 컨텍스트 창을 갖춘 밀집 모델로 `ollama run qwen3.6:27b`를 통해 Q4_K_M 기준 약 17GB의 VRAM으로 실행됩니다. Qwen2.5는 2026년 중반 기준 가장 폭넓게 검증된 패밀리로, Ollama와 GGUF 지원 범위가 가장 넓습니다. 더 넓은 모델 비교는 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '모델 크기별 하드웨어 요구사항',
        content: [
          '**먼저 VRAM 티어를 결정한 다음, 적합한 최대 크기의 Qwen 모델을 선택하십시오.** 아래 수치는 모두 표준 양자화인 Q4_K_M을 기준으로 하며, Ollama와 LM Studio에서 최고의 크기 대비 품질 비율을 제공합니다.',
        ],
        rows: [
          { '모델': 'Qwen3 8B Q4_K_M', 'VRAM': '5.5 GB', '최소 GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', '속도 (GPU)': '~57 tok/s (RTX 3060 12 GB)' },
          { '모델': 'Qwen2.5-Coder 7B Q4_K_M', 'VRAM': '5.5 GB', '최소 GPU': 'RTX 3060 12 GB, RTX 4060', 'Apple Silicon': 'M1/M2 8 GB', '속도 (GPU)': '~55 tok/s (RTX 3060 12 GB)' },
          { '모델': 'Qwen2.5-VL 7B (Ollama)', 'VRAM': '6.0 GB', '최소 GPU': 'RTX 3060 8 GB, RTX 4060', 'Apple Silicon': 'M1/M2 16 GB', '속도 (GPU)': '—' },
          { '모델': 'Qwen2.5 14B Q4_K_M', 'VRAM': '9.5 GB', '최소 GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', '속도 (GPU)': '~38 tok/s (RTX 4070)' },
          { '모델': 'Qwen2.5-Coder 14B Q4_K_M', 'VRAM': '9.5 GB', '최소 GPU': 'RTX 4070 12 GB', 'Apple Silicon': 'M2 Pro 16 GB', '속도 (GPU)': '~36 tok/s (RTX 4070)' },
          { '모델': 'Qwen2.5 32B Q4_K_M', 'VRAM': '20.5 GB', '최소 GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', '속도 (GPU)': '~28 tok/s (RTX 4090)' },
          { '모델': 'Qwen2.5-Coder 32B Q4_K_M', 'VRAM': '20.5 GB', '최소 GPU': 'RTX 3090 24 GB', 'Apple Silicon': 'M3 Max 48 GB', '속도 (GPU)': '~27 tok/s (RTX 4090)' },
          { '모델': 'Qwen 3.6 27B Q4_K_M', 'VRAM': '~17 GB', '최소 GPU': 'RTX 4090 24 GB', 'Apple Silicon': 'M3 Max 36 GB', '속도 (GPU)': '~24 tok/s (RTX 4090)' },
          { '모델': 'Qwen2.5-72B Q4_K_M', 'VRAM': '46 GB', '최소 GPU': '2× RTX 3090 (48 GB)', 'Apple Silicon': 'M2 Ultra 64 GB', '속도 (GPU)': '~12 tok/s (2×RTX 4090)' },
        ],
        columns: ['모델', 'VRAM', '최소 GPU', 'Apple Silicon', '속도 (GPU)'],
        tableFormat: true,
        note: 'VRAM 수치는 Q4_K_M 기준의 근사치입니다. Ollama 라이브러리의 다운로드 크기는 qwen3:8b 5.2 GB, qwen3:14b 9.3 GB, qwen3:32b·qwen2.5:32b 20 GB, qwen2.5:72b 47 GB, qwen3.6:27b-q4_K_M 17 GB(기본 27b 태그는 18–19 GB)입니다(2026년 10월 23일 확인). 4K 컨텍스트에서 KV 캐시를 위해 1–2 GB를 추가하십시오. GPU VRAM이 모델 요구량보다 부족한 경우 Ollama가 자동으로 레이어를 시스템 RAM으로 오프로드합니다 — 동작하지만 속도가 크게 저하됩니다.',
        callouts: [
          { type: 'tip', text: 'VRAM 티어를 확인하셨나요? [해당 티어에 맞는 정확한 GPU 또는 Mac 구매 가이드](#affiliate-picks)를 확인하십시오 — 6 GB → RTX 4060, 12 GB → RTX 4070 Super, 24 GB → RTX 3090/4090, 48 GB 이상 → Mac mini M5 Pro 또는 듀얼 GPU.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-hardware-hero-ko.webp',
        imageCaption: 'Qwen 모델 크기별 VRAM 요구사항 (Q4_K_M) — 근삿값',
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama로 설정하기',
        content: [
          '**Ollama는 Qwen3 모델을 로컬에서 실행하는 가장 빠른 방법입니다** — 별도 설정 없이 모델 다운로드, GGUF 양자화 처리, `localhost:11434`의 로컬 API를 자동으로 관리합니다. [ollama.com](https://ollama.com/download)에서 설치하십시오. Ollama를 처음 사용하신다면 먼저 [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)을 읽어보십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치', whyItMatters: 'macOS, Linux(한 줄 설치), Windows에서 사용 가능합니다. GPU 드라이버를 별도로 설정할 필요가 없습니다 — Ollama가 CUDA, ROCm, Metal을 자동으로 감지합니다.' },
          { title: '명시적 크기 태그로 모델 Pull', whyItMatters: '항상 크기를 명시하십시오: `qwen2.5:7b`, `qwen2.5:14b`, `qwen2.5:32b`. 태그 없는 `qwen2.5`는 7B 모델로 해석되지만 Ollama 릴리즈 간에 변경될 수 있습니다.' },
          { title: '모델 실행', whyItMatters: '`ollama run qwen2.5:7b`를 실행하면 대화형 채팅이 시작됩니다. 프롬프트를 입력하고 Enter를 누르십시오. `/bye`로 종료합니다.' },
          { title: '필요 시 컨텍스트 창 설정', whyItMatters: 'Ollama 라이브러리는 컨텍스트 창을 Qwen3 40K, Qwen2.5 32K, Qwen 3.6 256K로 표기합니다. 7B 모델에서 128K 컨텍스트를 사용하려면 `ollama run qwen2.5:7b`를 실행한 뒤 세션에서 `/set parameter num_ctx 131072`를 입력하십시오. 긴 컨텍스트에는 VRAM이 추가로 2–4 GB 필요합니다.' },
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
ollama pull qwen2.5vl:7b          # vision 7B (~6.0 GB)

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
          '**LM Studio는 터미널 명령어 없이 Qwen3를 위한 GUI 인터페이스를 제공합니다.** [lmstudio.ai](https://lmstudio.ai)에서 다운로드하거나 [LM Studio 설치 방법](/ko/local-llms/how-to-install-lm-studio)을 참조하십시오. macOS, Windows, Linux에서 실행됩니다.',
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
          '**Q4_K_M이 소비자 하드웨어에서 Qwen3를 위한 올바른 기본값입니다.** MMLU와 HumanEval에서 작은 벤치마크 저하로 FP16 대비 VRAM을 약 55–60% 줄입니다. 다른 형식에는 특정 사용 사례가 있습니다:',
        ],
        items: [
          '**Q4_K_M** (권장): 7B 기준 약 5.5 GB. 최고의 GB당 품질 비율. 이것을 먼저 사용하십시오.',
          '**Q8_0**: 7B 기준 약 8.5 GB. FP16에 가까운 품질. 여유 VRAM이 있고 최대 정확도를 원할 때 사용하십시오.',
          '**Q5_K_M**: 7B 기준 약 6.5 GB. Q4_K_M 대비 미미한 개선 — Q4_K_M 출력 품질이 특정 작업에서 눈에 띄게 저하될 때만 선택하십시오.',
          '**Q2_K**: 7B 기준 약 3 GB. 가장 작은 파일이지만 중국어 출력 품질이 눈에 띄게 저하됩니다 — 중국어 텍스트가 포함된 경우 Qwen3에서 피하십시오.',
          '**IQ4_XS**: 7B 기준 약 4.8 GB. 최신 imatrix 양자화로 Q4_K_M보다 약간 작은 크기에서 더 높은 품질을 제공합니다 — 최신 llama.cpp 릴리즈 및 LM Studio 0.3+에서 사용 가능합니다.',
        ],
        note: '전체 양자화 설명은 [LLM 양자화 설명](/ko/local-llms/llm-quantization-explained)을 참조하십시오.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M은 대부분의 사용자에게 최고의 Qwen3 양자화입니다: FP16 대비 VRAM을 55% 절감하면서 품질 손실이 작습니다.' },
          { type: 'plain-terms', text: '양자화는 모델 수치를 16비트에서 4비트로 압축하여 파일 크기와 필요한 VRAM을 대략 절반으로 줄입니다. TIFF 이미지를 고품질 JPEG로 저장하는 것과 같습니다 — 파일이 작아지지만 대부분의 용도에서 결과는 거의 동일합니다.' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '소비자 하드웨어에서의 벤치마크 성능',
        content: [
          '**RTX 4090에서 Qwen3 32B Q4_K_M은 초당 28 토큰을 처리합니다 — 실시간 코딩 지원에 충분한 속도입니다.** Qwen3 32B는 Qwen의 이전 세대이며, 더 새로운 Qwen 3.6 27B가 같은 24 GB 티어에 들어갑니다(위 하드웨어 표 참조). 아래 수치는 참고용 값이며 PromptQuorum의 실측 결과가 아닙니다. 속도는 GPU, 드라이버, 컨텍스트 길이, Ollama 버전에 따라 달라지고, 정확도 점수는 저희가 다시 측정한 것이 아니며, Coder의 HumanEval 점수는 Instruct 모델의 전체 정밀도 공개 결과(Qwen2.5-Coder 기술 보고서, arXiv:2409.12186, 표 16)이고 Qwen3와 Qwen2.5-72B 점수는 참고용이며 모델 카드와 대조하지 않았습니다. Q4_K_M 빌드는 보통 전체 정밀도보다 약간 낮은 점수를 보입니다. 각 모델 카드를 확인하고 직접 하드웨어에서 테스트하십시오.',
        ],
        rows: [
          { '모델 (Q4_K_M)': 'Qwen3 8B', 'MMLU': '74.2%', 'Math': '58.8%', 'HumanEval': '57.3%', '속도 (GPU)': '57 tok/s (RTX 3060 12 GB)' },
          { '모델 (Q4_K_M)': 'Qwen3 14B', 'MMLU': '79.9%', 'Math': '69.8%', 'HumanEval': '64.6%', '속도 (GPU)': '38 tok/s (RTX 4070 12 GB)' },
          { '모델 (Q4_K_M)': 'Qwen3 32B', 'MMLU': '83.3%', 'Math': '79.5%', 'HumanEval': '71.3%', '속도 (GPU)': '28 tok/s (RTX 4090 24 GB)' },
          { '모델 (Q4_K_M)': 'Qwen2.5-72B', 'MMLU': '86.1%', 'Math': '83.1%', 'HumanEval': '73.2%', '속도 (GPU)': '12 tok/s (2×RTX 3090)' },
          { '모델 (Q4_K_M)': 'Qwen2.5-Coder 7B', 'MMLU': '—', 'Math': '—', 'HumanEval': '88.4%', '속도 (GPU)': '55 tok/s (RTX 3060 12 GB)' },
          { '모델 (Q4_K_M)': 'Qwen2.5-Coder 14B', 'MMLU': '—', 'Math': '—', 'HumanEval': '89.6%', '속도 (GPU)': '36 tok/s (RTX 4070 12 GB)' },
          { '모델 (Q4_K_M)': 'Qwen2.5-Coder 32B', 'MMLU': '—', 'Math': '—', 'HumanEval': '92.7%', '속도 (GPU)': '27 tok/s (RTX 4090 24 GB)' },
        ],
        columns: ['모델 (Q4_K_M)', 'MMLU', 'Math', 'HumanEval', '속도 (GPU)'],
        tableFormat: true,
        callouts: [
          { type: 'tip', text: '초당 27 토큰으로 HumanEval 92.7% 점수를 원하십니까? [Qwen2.5-Coder 32B를 실행하는 24 GB GPU](#affiliate-picks)를 확인하십시오.' },
        ],
        image: '/images/qwen-local-deployment-guide-2026-benchmarks-hero-ko.webp',
        imageCaption: 'Qwen3 벤치마크 점수 (Q4_K_M) — 근삿값',
      },
      vsComparison: {
        id: 'vs-comparison',
        title: 'Qwen vs DeepSeek vs Llama: 로컬 실행 시 어떤 것을 선택할까',
        content: [
          '**저희 평가로는 Qwen이 소비자 하드웨어에서 VRAM 효율성이 더 높은 계열입니다. DeepSeek의 현재 V4 계열은 대규모(V4-Flash: 총 284B 파라미터)여서 단일 소비자 GPU에서는 비실용적입니다. Llama 3.3 70B는 Meta의 오픈 모델을 선호하고 단일 GPU에서 일부 레이어를 시스템 RAM으로 오프로드해도 괜찮다면 고려할 수 있는 대안입니다.** 아래 표는 각 VRAM 티어에서의 실용적인 옵션을 비교합니다.',
        ],
        rows: [
          { 'VRAM 티어': '6 GB', '최고 Qwen': 'Qwen3 8B', '최고 경쟁자': 'Llama 3.2 3B (맞지만 3B)', '결론': 'Qwen3 8B 우위 — 같은 VRAM, 훨씬 큰 모델' },
          { 'VRAM 티어': '12 GB', '최고 Qwen': 'Qwen2.5-Coder 14B', '최고 경쟁자': 'Llama 3.1 8B Instruct', '결론': '코딩은 Qwen2.5-Coder 14B; 일반 채팅은 Llama 3.1 8B' },
          { 'VRAM 티어': '24 GB', '최고 Qwen': 'Qwen2.5-Coder 32B', '최고 경쟁자': 'Llama 3.3 70B (오프로드)', '결론': '코드는 Qwen2.5-Coder 32B; 품질 > 속도면 Llama 3.3 70B' },
          { 'VRAM 티어': '48 GB+', '최고 Qwen': 'Qwen2.5-72B', '최고 경쟁자': 'DeepSeek V4-Flash 284B MoE', '결론': '가중치만 4비트로 ~140 GB; Qwen2.5-72B는 48 GB에 적합' },
        ],
        columns: ['VRAM 티어', '최고 Qwen', '최고 경쟁자', '결론'],
        tableFormat: true,
        content2: '코딩, 추론, 다국어 작업에서 DeepSeek와 Qwen의 심층 비교는 [DeepSeek vs Qwen 로컬 비교 2026](/ko/power-local-llm/deepseek-vs-qwen-local-comparison-2026)을 참조하십시오.',
      },
      regionalContext: {
        id: 'regional-context',
        title: '중국 사용자: 데이터 주권과 로컬 배포',
        content: [
          '**Qwen3를 로컬에서 실행하면 추론용 프롬프트가 자신의 하드웨어에 머물러 클라우드 API로 추론 데이터가 전송되지 않으므로, 추론 단계에서는 해당 국경 간 전송을 피할 수 있습니다.** 클라우드 기반 LLM API는 프롬프트를 해외 서버로 전송해야 하며, 이는 중국 데이터 보안법(DSL) 등에 따른 국경 간 데이터 전송 문제를 일으킬 수 있습니다. 전체 구성이 규정을 준수하는지는 데이터, 목적, 그리고 자체 법률 검토에 달려 있으며, 이는 법률 자문이 아닙니다.',
          'Qwen3는 Alibaba의 Qwen 팀이 주로 중국어 및 다국어 코퍼스로 학습시킨 모델입니다. 이로 인해 간체 중국어, 번체 중국어, 고전 중국어, 혼합 언어(중국어/영어) 문서에 유력한 후보가 되지만, 직접 보유한 자료로 테스트하십시오.',
          '**중국 내 엔터프라이즈 배포의 경우**: 추론 시 인터넷 연결이 없는 Qwen3 설정은 생성형 AI에 관한 CAC 규정을 충족하기 쉬운 구성일 수 있지만, 준수 여부는 사용 사례에 따라 다르므로 법률 전문가와 확인하십시오. 모델은 전적으로 로컬 컴퓨팅에서 실행됩니다 — 저희 판단으로는 규제 기관의 관심사는 학습 데이터와 출력 모더레이션이지, 오프라인 하드웨어에서의 추론이 아닙니다. 인터넷 차단 환경의 전체 설정 가이드는 [완전 오프라인 AI 실행](/ko/power-local-llm/local-ai-behind-firewall-offline-2026)을 참조하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3는 다운로드 후 인터넷 연결 없이 실행할 수 있어 추론 데이터가 기기를 떠날 필요가 없으며, 중국 데이터 보안법에 따른 국경 간 데이터 전송 위험을 줄여 줍니다(준수 여부는 여전히 사용 사례에 달려 있습니다).' },
          { type: 'plain-terms', text: 'Qwen3를 로컬에서 실행하면 클라우드 서비스에 연결하지 않는 한 프롬프트와 문서가 컴퓨터에 머뭅니다. 추론에는 클라우드 API 호출이 필요 없으며, 나머지 구성이 데이터를 어떻게 다루는지는 사용자의 책임입니다.' },
        ],
      },
      affiliatePicks: {
        id: 'affiliate-picks',
        title: 'Qwen3 배포를 위해 어떤 하드웨어를 구매해야 합니까?',
        content: [
          '**먼저 목표로 하는 Qwen 티어를 VRAM에 맞추고, 그 기준을 충족하는 가장 저렴한 카드를 구매하십시오 — 모델에 필요한 것보다 많은 VRAM에 비용을 지불하는 것이 이 목록에서 가장 흔한 과소비입니다.** 아래 추천 목록은 위 하드웨어 표와 그대로 대응됩니다: 보급형 → RTX 4060, 중급 → RTX 4070 Super, 고급 → RTX 3090/4090, Apple Silicon → Mac mini M5 Pro, 상시 가동용 → 미니 PC. 아래 가격은 2026년 GPU 시장 상황을 반영합니다 — 메모리 칩 부족과 AI 데이터센터 수요로 신품 GPU와 Apple 메모리 가격이 모두 크게 상승했으므로, 구매 전 실제 판매 가격을 확인하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '이미 8 GB 이상 VRAM의 GPU를 보유하고 계신다면 이 섹션을 건너뛰십시오 — 먼저 보유한 하드웨어에서 Qwen3 8B를 실행해 보십시오. 그 한계에 도달하고 더 큰 모델을 원할 때만 새 하드웨어를 구매하십시오.' },
        ],
        rankedItems: [
          {
            rank: 1,
            name: 'NVIDIA RTX 4060 8 GB',
            tagline: '보급형 선택 — Qwen3 8B, Qwen2.5-Coder 7B (5.5 GB VRAM)',
            verdict: '5.5 GB의 Qwen3 8B 요구사항을 컨텍스트 여유 공간까지 확보하면서 충족하는 이 목록에서 가장 저렴한 카드입니다. Qwen2.5-Coder 7B를 초당 약 55 토큰으로 실행합니다 — 인터랙티브 코딩 지원에 충분한 속도입니다.',
            pros: [
              '5.5 GB VRAM 요구사항을 긴 컨텍스트 KV 캐시를 위한 여유 공간까지 확보하며 충족',
              '이 목록에서 가장 저렴한 가격 — 로컬 LLM을 처음 실행한다면 적합한 첫 GPU',
              '7B/8B 모델에서 초당 50–57 토큰 — 이 모델 크기에서는 더 비싼 카드와 대등한 수준',
            ],
            cons: [
              'Qwen3 8B / Qwen2.5-Coder 7B에서 상한선 — KV 캐시 압박 없이 14B로 확장할 여유가 없음',
            ],
            affiliateLinks: [
              { url: 'https://www.amazon.com/dp/B0CJWMKN3D', productName: 'NVIDIA RTX 4060 8 GB', productCategory: 'GPU', priceRange: '$340–430', label: '현재 가격 확인 →' },
            ],
          },
          {
            rank: 2,
            name: 'NVIDIA RTX 4070 Super 12 GB',
            tagline: '중급 선택 — Qwen3 14B, Qwen2.5-Coder 14B (9.5 GB VRAM)',
            verdict: 'Qwen2.5-Coder 14B(HumanEval 89.6%)를 초당 36–38 토큰으로 실행하며 컨텍스트를 위한 2–3 GB의 VRAM 여유가 남습니다 — 12 GB 티어에 잘 맞는 선택입니다.',
            pros: [
              '9.5 GB 모델이 2–3 GB의 VRAM 여유와 함께 실행 — 더 긴 컨텍스트 창을 위한 공간',
              'HumanEval은 14B가 89.6%, 7B가 88.4%(Instruct 모델 전체 정밀도 공개 값) — 이 벤치마크에서는 차이가 작으므로 14B는 큰 점수 향상이 아니라 어려운 작업의 여유를 위해 선택하십시오',
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
            tagline: '고급 선택 — Qwen2.5-Coder 32B, Qwen 3.6 27B (~20.5 / ~17 GB VRAM)',
            verdict: '4090은 Qwen2.5-Coder 32B에서 초당 ~27 토큰을 제공합니다 — HumanEval 92.7%의 실시간 코딩 속도입니다. 중고 RTX 3090은 동일한 24 GB VRAM을 갖추고 있으며, 신뢰할 수 있는 중고 매물을 찾을 수 있다면 4090 추론 속도의 약 85% 수준으로 훨씬 저렴하게 구매할 수 있습니다.',
            pros: [
              '24 GB VRAM으로 모든 Qwen3 32B 변형과 Qwen 3.6 27B를 여유 있게 커버',
              'Qwen2.5-Coder 32B(HumanEval 92.7%)에서 초당 ~27 토큰 — 실시간 페어 프로그래밍에 충분한 속도',
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
            name: 'Apple Mac mini M5 Pro 64 GB',
            tagline: 'Apple Silicon 선택 — Qwen 3.6 27B 또는 Qwen3 32B, 저소음·저전력',
            verdict: '통합 메모리에서 Qwen3 32B를 실행하는 데 가성비가 가장 좋은 선택입니다 — 조용하고 전력 소비가 낮으며 별도 GPU를 설치할 필요가 없습니다. Qwen2.5-72B의 경우 M2 Ultra 64 GB가 빠듯한 최소 사양이며 128 GB 이상이면 컨텍스트 여유가 생깁니다.',
            pros: [
              'M5 Pro 구성은 최대 64 GB 통합 메모리까지 제공 — Qwen3 32B의 20.5 GB 요구사항을 크게 상회하며 다른 앱을 위한 여유 공간도 확보',
              '무소음 작동과 데스크톱에 적합한 전력 소비 — 별도의 GPU 쿨링 관리 불필요',
              '한 번의 구매로 OS, 스토리지, 추론을 모두 해결 — 별도의 GPU/PSU/케이스 조립 불필요',
            ],
            cons: [
              'M5 Pro 칩에서의 Qwen3 32B 독립 벤치마크는 아직 공개되지 않았습니다 — RTX 4090과 같은 전용 GPU보다 눈에 띄게 느린 성능이 예상되며, 이는 이전 세대 Mac mini용 Apple Silicon과 일관된 경향입니다',
            ],
            affiliateLinks: [
              { url: 'https://www.apple.com/kr/shop/buy-mac/mac-mini', productName: 'Apple Mac mini M5 Pro 64 GB', productCategory: 'Mini PC', priceRange: '약 $1,699부터 (64 GB 구성은 더 비쌈)', label: '현재 가격 확인 →' },
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
          '**컨텍스트 창 크기 무시.** 모델 카드에 따르면 Qwen3는 기본 32K 토큰을 지원하며 YaRN을 쓰면 약 131K까지 지원합니다. Ollama의 Modelfile 사양은 `num_ctx` 기본값을 2048로 지정하지만, 실제 런타임은 VRAM 용량에 따라 단계별 기본값을 적용합니다(24 GiB 미만은 4K, 24~48 GiB는 32K, 48 GiB 초과는 256K). 두 기본값 중 어느 것에도 의존하지 말고 `num_ctx`를 명시적으로 설정하십시오. 예를 들어 `ollama run` 세션에서 `/set parameter num_ctx 8192`(또는 더 높은 값)를 입력합니다 — 그렇지 않으면 모델이 자동으로 입력을 잘라냅니다.',
          '**중국어 용도에 Q2_K 양자화 선택.** 2비트 정밀도에서 Qwen3의 중국어 출력이 눈에 띄게 저하됩니다 — 문자 대체가 증가합니다. 중국어 작업에는 Q4_K_M을 최소값으로 사용하십시오.',
          '**VRAM이 부족한 상태에서 32B 모델 실행.** GPU에 16 GB가 있고 모델에 20.5 GB가 필요한 경우 Ollama가 레이어를 시스템 RAM으로 오프로드합니다. 모델은 실행되지만 초당 3–5 토큰으로 — 대화형 사용에는 적합하지 않습니다. 위의 하드웨어 표를 확인하고 VRAM에 맞는 모델을 선택하십시오.',
          '**코딩에 잘못된 하위 패밀리 사용.** Qwen2.5-Coder 7B는 코드용으로 학습되어 HumanEval에서 88.4%(Instruct 모델 전체 정밀도 공개 값)를 기록하지만, 범용 모델은 이를 위해 조정되어 있지 않습니다. 코딩이 목적이라면 항상 같은 크기의 Coder 변형을 사용하십시오.',
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
          { q: 'Qwen3 8B를 로컬에서 실행하려면 VRAM이 얼마나 필요합니까?', a: 'Qwen3 8B Q4_K_M는 5.5 GB의 VRAM이 필요합니다. RTX 3060 12 GB, RTX 4060, 또는 통합 메모리 8 GB의 Apple M 시리즈 칩에서 모두 실행됩니다. VRAM이 8 GB이면 컨텍스트 및 시스템 RAM을 위한 여유 공간이 생깁니다.' },
          { q: '로컬에서 코딩에 가장 적합한 Qwen 모델은 무엇입니까?', a: 'Qwen2.5-Coder 32B는 24 GB GPU(RTX 3090 또는 RTX 4090)에 들어가는 Qwen2.5 계열 최대 코딩 전용 모델이며, Qwen은 전체 정밀도 Instruct 버전의 HumanEval 점수를 92.7%로 보고했습니다. Qwen 3.6 27B에도 코딩 변형(`qwen3.6:27b-coding`)이 있습니다. VRAM이 12 GB 이하인 경우 Qwen2.5-Coder 14B(HumanEval 89.6%, 9.5 GB VRAM)를 사용하십시오.' },
          { q: '로컬 배포에서 Qwen은 DeepSeek와 어떻게 비교됩니까?', a: 'Qwen은 소비자 하드웨어에 맞는 밀집 아키텍처를 사용합니다. DeepSeek의 현재 오픈 웨이트 계열은 V4(V4-Flash: 총 284B 파라미터, MoE)로 단일 소비자 GPU를 훨씬 넘어서며, DeepSeek-V2.5(236B MoE, 2024년)는 V3를 거쳐 V4로 대체되었습니다. VRAM이 제한된 환경에서는 Qwen 모델이 실용적인 선택입니다.' },
          { q: 'Mac에서 Qwen을 실행할 수 있습니까?', a: '가능합니다. Apple Silicon은 통합 메모리를 사용합니다 — M2 Pro 32 GB는 Qwen3 14B를 초당 약 32 토큰으로 실행합니다. M3 Max 64 GB는 Qwen3 32B를 초당 약 22 토큰으로 처리합니다. 가장 간단한 설정을 위해 Ollama macOS 앱 또는 LM Studio를 사용하십시오.' },
          { q: 'Qwen에 사용할 Ollama 명령어는 무엇입니까?', a: '플래그십 모델은 `ollama run qwen3.6:27b`(약 17GB VRAM)를 사용하십시오. Qwen3는 `ollama pull qwen3:8b`를 사용하십시오. Qwen2.5는 7B는 `ollama pull qwen2.5:7b`, 14B는 `ollama pull qwen2.5:14b`, 32B는 `ollama pull qwen2.5:32b`, 코딩 변형은 `ollama pull qwen2.5-coder:32b`를 사용하십시오. 항상 명시적 크기 태그를 사용하십시오.' },
          { q: 'Qwen은 중국어 작업에 적합합니까?', a: 'Qwen3는 대규모 중국어 코퍼스로 사전 학습되었으며 간체 중국어, 번체 중국어, 일본어, 한국어, 아랍어 등 다양한 언어를 기본 지원합니다(자세한 목록은 모델 카드 참조). 중국어 로컬 AI에 유력한 후보이므로 직접 보유한 문서로 테스트하십시오.' },
          { q: 'Qwen3에 어떤 양자화를 사용해야 합니까?', a: 'Q4_K_M이 권장 기본값입니다 — FP16 대비 VRAM을 약 55% 줄이면서 벤치마크 품질 손실이 작습니다. 여유 VRAM이 있고 FP16에 가까운 품질을 원한다면 Q8_0을 사용하십시오. 중국어 용도에는 Q2_K를 피하십시오.' },
          { q: 'Qwen2.5-VL이 중국어 문서 OCR에 효과적입니까?', a: '그렇습니다 — Qwen2.5-VL 7B는 Ollama(`ollama pull qwen2.5vl:7b`, 다운로드 6.0 GB)로 실행되며 텍스트와 이미지를 입력받아 스캔 문서의 중국어, 일본어, 한국어 텍스트를 읽을 수 있습니다. 직접 가진 스캔본으로 테스트하십시오. 더 새로운 Qwen3-VL은 `qwen3-vl:8b`입니다. 전체 가이드는 /local-llms/run-qwen-vl-locally-2026에서 확인하십시오.' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
            '[Ollama library: qwen3.6 tags](https://ollama.com/library/qwen3.6/tags) -- 27b-q4_K_M 17 GB, 기본 27b 태그 18–19 GB, 256K 컨텍스트, 27b-coding 태그(2026년 10월 23일 확인)',
            '[Ollama library: qwen3 tags](https://ollama.com/library/qwen3/tags) -- 8b 5.2 GB, 14b 9.3 GB, 32b 20 GB, 40K 컨텍스트(2026년 10월 23일 확인)',
            '[Ollama library: qwen2.5 tags](https://ollama.com/library/qwen2.5/tags) -- 7b 4.7 GB, 14b 9.0 GB, 32b 20 GB, 72b 47 GB, 32K 컨텍스트(2026년 10월 23일 확인)',
            '[Ollama library: qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags) -- 7b 4.7 GB, 14b 9.0 GB, 32b 20 GB, 32K 컨텍스트(2026년 10월 23일 확인)',
            '[Qwen3-8B model card](https://huggingface.co/Qwen/Qwen3-8B) -- 기본 32,768 컨텍스트, YaRN 사용 시 131,072, 100개 이상의 언어',
            '[Qwen2.5-Coder-32B-Instruct model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct) -- YaRN 사용 시 131,072 컨텍스트',
            '[Qwen2.5-Coder Technical Report (arXiv:2409.12186)](https://arxiv.org/abs/2409.12186) -- 표 16: HumanEval 88.4(7B), 89.6(14B), 92.7(32B), Instruct 모델 전체 정밀도',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        links: [
          { url: '/local-llms/run-qwen-locally-guide-2026', title: '2026년 Qwen 3를 로컬에서 실행하는 방법', description: 'Ollama와 LM Studio를 사용한 Qwen 3.6 27B 단일 모델 설정 가이드 — 작동하는 Qwen 인스턴스를 가장 빠르게 구축하는 방법.' },
          { url: '/ko/local-llms/run-qwen-vl-locally-2026', title: '2026년 Qwen2.5-VL·Qwen3-VL 로컬 실행', description: 'Qwen2.5-VL·Qwen3-VL 전체 가이드 — Ollama 태그, 크기, 라이선스, CJK 문서 OCR, 이미지 Q&A.' },
          { url: '/local-llms/qwen-vs-llama-vs-mistral', title: '2026년 Qwen vs Llama vs Mistral', description: 'MMLU, SWE-bench, MATH에서 Qwen 3.6 27B, Llama 4 Scout, Mistral Small 3.1의 헤드투헤드 벤치마크 비교.' },
          { url: '/local-llms/llm-quantization-explained', title: 'LLM 양자화 설명', description: 'Q4_K_M, Q8_0, IQ4_XS의 의미 — VRAM, 속도, 출력 품질에 미치는 영향.' },
          { url: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026', title: '2026년 DeepSeek vs Qwen 로컬 비교', description: '코딩, 추론, 중국어, 창의적 글쓰기에서 DeepSeek-R1-Distill-Qwen-32B vs Qwen3 32B 전체 비교 — Mac vs NVIDIA 세부 분석 포함.' },
        ],
      },
    },
  },
};
