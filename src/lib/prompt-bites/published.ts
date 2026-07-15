// Prompt Bites — publish allowlist.
// Phase 1: All articles start as noindex, nofollow.
// Switch individual slugs to index only after the full LAUNCH_CHECKLIST passes.
// Rationale: atomic launch — Google rewards complete topical clusters over drip-fed pages.

export const PROMPT_BITES_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Cluster A — Quantization & VRAM
  'how-much-vram-for-local-llm',
  'what-is-q4-k-m-quantization',
  'q4-k-m-vs-q8-0',
  'best-ollama-models-rtx-3060-12gb',
  'best-ollama-models-4gb-vram',
  'how-much-ram-for-7b-model',
  'vram-for-70b-model',
  'best-local-llm-6gb-vram',
  // Cluster B — Ollama
  'ollama-latest-version',
  'best-ollama-models-right-now',
  'best-ollama-models-cpu-only',
  'can-you-run-qwen3-on-ollama',
  'which-ollama-models-support-vision',
  'ollama-128k-context-models',
  // Cluster C — Tool Comparisons
  'qwen-coder-vs-deepseek-coder',
  'ollama-vs-lm-studio',
  'jan-vs-lm-studio',
  'best-local-llm-apps-android',
  'best-frontend-for-ollama',
  'cursor-pro-vs-continue-dev',
  'mlx-vs-ollama-vs-llamacpp',
  'convert-ollama-model-to-mlx',
  'ollama-mlx-apple-silicon',
  // Cluster D — Model Comparisons
  'qwen-14b-vs-llama-8b',
  'best-14b-models-coding',
  'best-mini-pc-for-local-llm',
  'best-moe-models-local-coding',
  // Cluster E — Hardware-Specific
  'best-local-llm-coding-12gb-vram',
  'best-models-amd-5700x-3070ti',
  'radeon-6800m-local-llm',
  'best-gpu-under-300-local-llm',
  'best-gpu-under-600-local-llm',
  'best-ssd-fast-model-loading',
  'mac-mini-m4-local-llm',
  'runpod-vs-vastai-pricing',
  'cloud-gpu-cost-per-hour',
  'best-egpu-ollama-macbook',
  // Cluster F — Quick Answers
  'can-you-run-rag-on-2gb-ram',
  'best-local-llm-16gb-ram-laptop',
  'best-budget-ai-laptop-under-1000',
  // Cluster G — Prompt Engineering & General
  'co-star-prompt-framework',
  'best-llm-right-now',
  // Cluster H — Privacy & Compliance
  'best-vpn-downloading-ai-models',
  'is-deepseek-gdpr-safe',
  'is-qwen-gdpr-compliant',
  'can-local-llm-help-gdpr',
  // New bites — zero-click gap coverage
  'best-quantization-6gb-vram',
  'mistral-small-24b-vs-qwen-14b-vs-llama-8b',
  'strix-halo-ollama-vulkan',
  // China Sprint 2026-05-26
  'best-qwen-model-for-coding',
  'deepseek-v3-local-hardware-requirements',
  'chinese-prompting-vs-english-prompting',
  'sillytavern-chinese-roleplay-setup',
  // Commercial Sprint 2026-05-26
  'best-vpn-for-ai-development-china-2026',
  'best-mini-pc-for-ollama-server-always-on',
  'best-egpu-setup-for-macbook-local-llm-2026',
  'best-cloud-gpu-for-fine-tuning-under-1-per-hour',
  'best-ai-text-to-speech-for-content-creators',
  'best-open-source-alternatives-to-chatgpt-plus',
  'cheapest-way-to-run-70b-model-locally',
  // Japan Sprint 2026-05-27
  'best-local-llm-apps-japan-android',
  'best-japanese-language-models-local',
  'run-local-llm-on-xperia-japan',
  'best-mini-pc-local-llm-japan',
  'best-gpu-local-llm-japan-price',

  // DeepSeek Series 2026-06-19
  'deepseek-r1-distill-vram-cheatsheet',
  'best-deepseek-distill-for-your-gpu',

  // 2026-07 batch — published (was SCAFFOLD ONLY)
  'best-gpu-under-1000-local-llm',
  'rtx-4060-vs-rtx-3060-12gb',
  'best-intel-arc-gpu-local-llm',
  'best-rtx-4090-setup-70b-models',
  'best-npu-copilot-pc-local-llm',
  'best-local-llm-macbook-air-no-egpu',
  'best-local-llm-32gb-unified-memory-mac',
  'best-windows-laptop-local-llm-under-1500',
  'fine-tuning-7b-model-locally-hardware',
  'm4-max-vs-m4-pro-local-llm',
  'best-local-llm-under-8b-realtime-chat',
  'gguf-vs-gptq-vs-awq',
  'ollama-vs-vllm-vs-tgi',
  'best-embedding-model-local-rag',
  'best-local-llm-document-summarization',
  'local-llm-raspberry-pi-5',
  'best-korean-language-models-local',
  'best-china-compliant-local-llm',
  'best-local-llm-legal-medical-privacy',

  // 2026-07 round-2 batch — published
  'best-local-llm-benchmarking-tool',
  'best-local-llm-for-sql-data-analysis',
  'best-local-llm-for-translation',
  'speculative-decoding-explained',
  'lora-vs-full-fine-tuning',
  'best-local-llm-license-comparison',
  'best-structured-json-output-local-llm',
  'best-model-merging-tool-mergekit',
  'wsl2-vs-native-windows-ollama',
  'best-gpu-local-llm-uae-price',

  // 2026-07 batch, Round 2 — gap-fill (survivor of content-comparison audit)
  'hybrid-local-cloud-llm-strategy',

  // 2026-07 batch, Round 3
  'sglang-vs-vllm-local-serving',
  'llama-cpp-gguf-conversion-guide',
  'prompt-caching-for-local-llm-explained',
  'best-pii-redaction-tool-local-llm',
  'best-local-llm-obsidian-integration',
  'best-local-llm-reasoning-ui',
  'best-local-llm-customer-support-chatbot',
])

export const PROMPT_BITES_HUB_PUBLISHED = true

export function isPromptBitePublished(slug: string, _lang: string): boolean {
  return PROMPT_BITES_PUBLISHED_SLUGS.has(slug)
}

export function isPromptBitesHubPublished(_lang: string): boolean {
  return PROMPT_BITES_HUB_PUBLISHED
}
