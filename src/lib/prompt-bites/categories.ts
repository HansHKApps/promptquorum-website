// Prompt Bites — 7 cluster definitions used by the hub page.

export interface PromptBiteCategory {
  id: string
  label: string
  titleEn: string
  descriptionEn: string
  articleSlugs: string[]
}

export const PROMPT_BITES_CATEGORIES: PromptBiteCategory[] = [
  {
    id: 'quantization-vram',
    label: 'A',
    titleEn: 'Quantization & VRAM',
    descriptionEn: 'How much memory you need, which quantization format to pick, and VRAM decision trees.',
    articleSlugs: [
      'how-much-vram-for-local-llm',
      'what-is-q4-k-m-quantization',
      'q4-k-m-vs-q8-0',
      'best-ollama-models-rtx-3060-12gb',
      'best-ollama-models-4gb-vram',
      'how-much-ram-for-7b-model',
      'vram-for-70b-model',
      'best-local-llm-6gb-vram',
      'best-quantization-6gb-vram',
    ],
  },
  {
    id: 'ollama',
    label: 'B',
    titleEn: 'Ollama',
    descriptionEn: 'Latest versions, best models, context windows, vision, and CPU-only use.',
    articleSlugs: [
      'ollama-latest-version',
      'best-ollama-models-right-now',
      'best-ollama-models-cpu-only',
      'can-you-run-qwen3-on-ollama',
      'which-ollama-models-support-vision',
      'ollama-128k-context-models',
    ],
  },
  {
    id: 'tool-comparisons',
    label: 'C',
    titleEn: 'Tool Comparisons',
    descriptionEn: 'Two-way comparisons: Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek.',
    articleSlugs: [
      'qwen-coder-vs-deepseek-coder',
      'ollama-vs-lm-studio',
      'jan-vs-lm-studio',
      'best-local-llm-apps-android',
      'best-frontend-for-ollama',
      'cursor-pro-vs-continue-dev',
      'mlx-vs-ollama-vs-llamacpp',
      'convert-ollama-model-to-mlx',
      'ollama-mlx-apple-silicon',
    ],
  },
  {
    id: 'model-comparisons',
    label: 'D',
    titleEn: 'Model Comparisons',
    descriptionEn: 'Best 14B models, MoE models, mini PCs, and head-to-head model matchups.',
    articleSlugs: [
      'qwen-14b-vs-llama-8b',
      'best-14b-models-coding',
      'best-mini-pc-for-local-llm',
      'best-moe-models-local-coding',
      'mistral-small-24b-vs-qwen-14b-vs-llama-8b',
    ],
  },
  {
    id: 'hardware-specific',
    label: 'E',
    titleEn: 'Hardware-Specific',
    descriptionEn: 'Hardware picks and buying-guide bites: GPU recommendations by budget, mini-PCs, SSDs, cloud GPUs, and eGPUs.',
    articleSlugs: [
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
      'strix-halo-ollama-vulkan',
    ],
  },
  {
    id: 'quick-answers',
    label: 'F',
    titleEn: 'Quick Answers',
    descriptionEn: 'Yes/no and one-number answers: RAM limits, laptop recommendations.',
    articleSlugs: [
      'can-you-run-rag-on-2gb-ram',
      'best-local-llm-16gb-ram-laptop',
      'best-budget-ai-laptop-under-1000',
    ],
  },
  {
    id: 'prompt-engineering',
    label: 'G',
    titleEn: 'Prompt Engineering',
    descriptionEn: 'Quick definitions and best-of lists for prompt engineering concepts.',
    articleSlugs: [
      'co-star-prompt-framework',
      'best-llm-right-now',
    ],
  },
  {
    id: 'privacy-compliance',
    label: 'H',
    titleEn: 'Privacy & Compliance',
    descriptionEn: 'GDPR compliance, data sovereignty, and privacy-safe local AI deployment.',
    articleSlugs: [
      'is-qwen-gdpr-compliant',
      'is-deepseek-gdpr-safe',
      'can-local-llm-help-gdpr',
      'best-vpn-downloading-ai-models',
    ],
  },
]
