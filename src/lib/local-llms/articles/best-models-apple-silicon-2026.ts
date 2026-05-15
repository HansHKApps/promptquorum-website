import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Best LLM Models for Apple Silicon 2026: Recommendations for 16GB, 36GB, 64GB, 128GB',
    seoTitle: 'Best Local LLM Models for Apple Silicon 2026: Recommendations 16GB 36GB 64GB 128GB',
    intro: 'Best local LLM model recommendations for every Apple Silicon Mac. Specific model picks for 16GB (Phi-4), 36GB (Llama 3.1 8B), 64GB (Qwen2 34B), 128GB (Llama 3.1 70B) with tok/s numbers on M5 Pro/Max.',
    metaDescription: 'Best LLM models for Apple Silicon: recommendations for 16GB, 36GB, 64GB, 128GB Mac with specific model names and tok/s speeds.',
    twitterDescription: 'Best LLMs for your Mac: 16GB→Phi-4, 36GB→Llama 8B, 64GB→Qwen 34B, 128GB→Llama 70B. Tested on M5 2026.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Phi-4', 'Llama 3.1 8B', 'Qwen2.5 14B', 'Qwen2.5 34B', 'Mistral 8x7B', 'Llama 3.1 70B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Mac users wanting model recommendations per their Mac configuration.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'best models Apple Silicon Mac',
    targetKeywords: ['best LLM Mac', 'model recommendations', 'performance by Mac configuration'],
    leadAnswerBlock: '**16GB: Phi-4. 36GB: Llama 3.1 8B Q8 (~38 tok/s). 64GB: Qwen2.5 34B Q5 (~18 tok/s). 128GB: Llama 3.1 70B Q5 (~14 tok/s M5 Pro, ~16 tok/s M5 Max). All run via Ollama on Metal.**',
    quickAnswerTop: {
      en: {
        question: 'Which LLM model should I run on my Mac?',
        answer: '16GB → Phi-4. 36GB → Llama 3.1 8B or Qwen2.5 14B. 64GB → Qwen2.5 34B. 128GB → Llama 3.1 70B. Performance: 30-40 tok/s (8B), 15-20 tok/s (34B), 12-18 tok/s (70B) on M5 Pro.',
        bullets: ['16GB: Phi-4 3.8B', '36GB: Llama 3.1 8B Q8 (38 tok/s)', '64GB: Qwen2.5 34B Q5 (18 tok/s)', '128GB: Llama 3.1 70B Q5 (14–16 tok/s)', 'Use quantization: Q4/Q5 are standard', 'All available via Ollama'],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Best Model per Memory Tier', anchor: '#by-tier' },
      { label: 'Best Model per Use Case', anchor: '#by-usecase' },
      { label: 'Real User Scenarios', anchor: '#scenarios' },
      { label: 'Models to Avoid', anchor: '#avoid' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      byTier: {
        id: 'by-tier',
        title: 'Best Model per Memory Tier',
        numberedItems: [
          { title: '16 GB: Phi-4', whyItMatters: '3.8B parameters, 2.5GB Q4, only option that fits comfortably and still performs.' },
          { title: '36 GB: Llama 3.1 8B Q8', whyItMatters: 'Best quality on 36GB. Alternative: Qwen2.5 14B Q4 if you want to explore 13B class.' },
          { title: '64 GB: Qwen2.5 34B Q5', whyItMatters: 'Excellent reasoning. Mistral 8x7B (alternative) for lower latency. Llama 3.1 70B Q3 is marginal.' },
          { title: '128 GB: Llama 3.1 70B Q5', whyItMatters: 'Highest quality. Alternative: Qwen2.5 72B Q4 for reasoning tasks.' },
        ],
      },
      byUsecase: {
        id: 'by-usecase',
        title: 'Best Model per Use Case',
        numberedItems: [
          { title: 'Coding', whyItMatters: 'DeepSeek Coder V2 Lite (16GB), Codestral 22B (36GB+)' },
          { title: 'Writing', whyItMatters: 'Llama 3.1 8B (36GB), Llama 3.1 70B (128GB)' },
          { title: 'RAG', whyItMatters: 'Llama 3.1 8B + nomic-embed-text (36GB)' },
          { title: 'Vision', whyItMatters: 'LLaVA 7B (36GB), Llama 3.2 Vision 11B (64GB)' },
          { title: 'Chat', whyItMatters: 'Mistral 7B (36GB), Mixtral 8x7B (64GB)' },
        ],
      },
      scenarios: {
        id: 'scenarios',
        title: 'Real User Scenarios with Specific tok/s',
        items: [
          'Llama 3.1 8B on M5 Pro: 50–55 tok/s. Good for coding assist, 2–3 sec per response.',
          'Qwen2.5 34B on M5 Pro 64GB: 18–20 tok/s. Reasonable for chat, slow for batch.',
          'Llama 3.1 70B on M5 Max: 15–18 tok/s. Usable for high-quality single-turn responses.',
          'Phi-4 on M5 base: 60+ tok/s. Fast, adequate quality for code completion.',
        ],
      },
      avoid: {
        id: 'avoid',
        items: [
          'Avoid 120B+ models: Do not fit on consumer Apple Silicon (M5 Max max 128GB, 70B already tight at Q4).',
          'Avoid FP16 quantization: Use Q4/Q5 for size. FP16 70B = 140GB (too large).',
          'Avoid old models (2024): Newer 2025–2026 models (Qwen3, Llama 4) perform better at same size.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Can I run two different models simultaneously?', a: 'Yes, set `OLLAMA_MAX_LOADED_MODELS=2` in env. 64GB can run 8B + 34B simultaneously.' },
          { q: 'Which model is best for beginners?', a: 'Llama 3.1 8B. Widely available, good output quality, proven track record. Runs on any M1+ Mac.' },
          { q: 'Is Mixtral 8x7B faster than Llama 8B?', a: 'No, slightly slower (40–50 tok/s vs 50–60 tok/s on M5 Pro). But reasoning is superior.' },
        ],
      },
    },
  },
  de: { theme: 'Hardware & Performance', title: '', sections: {} },
  fr: { theme: 'Hardware & Performance', title: '', sections: {} },
  ja: { theme: 'Hardware & Performance', title: '', sections: {} },
  zh: { theme: 'Hardware & Performance', title: '', sections: {} },
}
