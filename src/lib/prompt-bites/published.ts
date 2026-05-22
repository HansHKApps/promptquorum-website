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
])

export const PROMPT_BITES_HUB_PUBLISHED = true

export function isPromptBitePublished(slug: string, _lang: string): boolean {
  return PROMPT_BITES_PUBLISHED_SLUGS.has(slug)
}

export function isPromptBitesHubPublished(_lang: string): boolean {
  return PROMPT_BITES_HUB_PUBLISHED
}
