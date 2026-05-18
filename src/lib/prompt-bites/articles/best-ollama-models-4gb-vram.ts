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
      tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] },
      faq: { id: 'faq', title: 'Quick Answers About 4 GB VRAM Models', faqs: [] },
    },
  },
  de: { theme: 'Quantization & VRAM', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Quantization & VRAM', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Quantization & VRAM', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Quantization & VRAM', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
