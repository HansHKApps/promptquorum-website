import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for 4 GB VRAM?',
    seoTitle: 'Best Ollama Models for 4 GB VRAM? | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB VRAM is tight. Phi-4 Mini Q4 (3.2 GB), Gemma 2 2B (1.5 GB), SmolLM 1.7B (1.0 GB). Llama 3 8B will not fit. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 2 2B', 'SmolLM 1.7B'],
    current_hardware_mentioned: ['RTX 3050 4 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 4 GB VRAM GPUs running local LLMs',
    parentArticle: '/local-llms/fastest-local-llms-low-end-pcs',
    siblingBites: ['best-local-llm-6gb-vram', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for 4 GB VRAM?',
        answer: '4 GB VRAM is tight but usable. Best options: Phi-4 Mini at Q4 (~3.2 GB), Gemma 2 2B (~1.5 GB), and SmolLM 1.7B (~1.0 GB). Llama 3 8B will not fit.',
        bullets: [
          'Phi-4 Mini Q4: best quality in 4 GB (3.2 GB VRAM)',
          'Gemma 2 2B: fast and lightweight (1.5 GB)',
          'SmolLM 1.7B: smallest option, 1.0 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: { question: '[DE translation pending]', answer: '[DE translation pending]', bullets: [], updatedDate: '2026-05' },
      fr: { question: '[FR translation pending]', answer: '[FR translation pending]', bullets: [], updatedDate: '2026-05' },
      ja: { question: '[JA translation pending]', answer: '[JA translation pending]', bullets: [], updatedDate: '2026-05' },
      zh: { question: '[ZH translation pending]', answer: '[ZH translation pending]', bullets: [], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best for 4 GB VRAM: Phi-4 Mini Q4 at ~3.2 GB — highest quality at this tier',
          'Gemma 2 2B (1.5 GB) is the fastest option; SmolLM 1.7B (1.0 GB) is the smallest',
          'Llama 3 8B will not fit at any quantization — it needs 5.5 GB minimum',
        ],
      },
      body1: {
        title: 'What Fits in 4 GB VRAM',
        content: [
          'As of May 2026, 4 GB VRAM is a real constraint. <strong>Three models run well: Phi-4 Mini at Q4 (~3.2 GB), Gemma 2 2B (~1.5 GB), and SmolLM 1.7B (~1.0 GB). Llama 3 8B and Mistral 7B do not fit at any quantization.</strong>',
          'Phi-4 Mini is the top pick at this tier. Despite its small size, it handles general Q&A, light coding, and document summarization at ~25 tokens per second. Gemma 2 2B is faster for single-turn chat. SmolLM 1.7B is the fallback if even Phi-4 Mini pushes your VRAM too close to the limit.',
        ],
        columns: ['Model', 'VRAM', 'Best For'],
        rows: [
          { 'Model': 'Phi-4 Mini Q4', 'VRAM': '3.2 GB', 'Best For': 'Best quality at 4 GB' },
          { 'Model': 'Gemma 2 2B Q4', 'VRAM': '1.5 GB', 'Best For': 'Fast single-turn chat' },
          { 'Model': 'SmolLM 1.7B Q4', 'VRAM': '1.0 GB', 'Best For': 'Minimal VRAM footprint' },
        ],
      },
      body2: {
        title: 'Models That Will Not Run at 4 GB VRAM',
        content: [
          'These models are commonly requested but require more than 4 GB VRAM at every quantization level:',
          'Upgrading to 6 GB unlocks Llama 3 8B and Mistral 7B — the two most popular local models. See the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>. For a full hardware comparison, see <a href="/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">fastest local LLMs for low-end PCs</a>.',
        ],
        items: [
          'Llama 3 8B — needs ~5.5 GB at Q4_K_M (minimum)',
          'Mistral 7B — needs ~4.5 GB at Q4_K_M (marginal; risky at 4 GB with context overhead)',
          'Phi-4 (full 14B) — needs ~9.8 GB',
          'Qwen 14B — needs ~9.5 GB at Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 4 GB VRAM Models',
        faqs: [
          {
            q: 'Is 4 GB VRAM enough for a useful LLM?',
            a: 'Yes, for basic tasks. Phi-4 Mini handles general Q&A and light coding at ~25 tok/s. For longer context, multi-step coding agents, or document analysis, 4 GB is a bottleneck — upgrade to 6 GB or more.',
          },
          {
            q: 'Can I run Llama 3 on 4 GB VRAM?',
            a: 'No. Llama 3 8B needs ~5.5 GB at Q4_K_M minimum. Llama 3.2 3B fits in ~2.5 GB if you specifically want a Llama variant. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the full VRAM requirements guide</a>.',
          },
          {
            q: 'What GPU has 4 GB VRAM?',
            a: 'RTX 3050 Ti (4 GB), GTX 1650 Super (4 GB), and AMD RX 6500 XT (4 GB) are the most common. All three work with Ollama — NVIDIA via CUDA, AMD via ROCm or Vulkan.',
          },
          {
            q: 'Can CPU-only mode bypass the 4 GB VRAM limit?',
            a: 'Yes. Running without GPU, Llama 3 8B Q4 uses ~6 GB of system RAM and runs at 3–6 tok/s on a modern 8-core CPU. Slower but works if you have enough RAM.',
          },
        ],
      },
    },
  },
  de: { theme: 'Quantization & VRAM', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Quantization & VRAM', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Quantization & VRAM', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Quantization & VRAM', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
