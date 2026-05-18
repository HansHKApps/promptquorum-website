import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best Mini PC for Local LLM?',
    seoTitle: 'Best Mini PC for Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Best mini PCs for local LLMs: Minisforum UM790 Pro (AMD iGPU, 32 GB RAM) and Mac Mini M4 (fast, power-efficient). Both run 7–13B models without a discrete GPU. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Minisforum UM790 Pro', 'Mac Mini M4'],
    educationalLevel: 'Intermediate',
    audience: 'Users buying a mini PC to run LLMs locally',
    parentArticle: '/local-llms/best-mini-pcs-local-llm',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best mini PC for local LLM?',
        answer: 'The Minisforum UM790 Pro and Mac Mini M4 are the top mini PCs for running LLMs locally. The UM790 Pro uses an AMD iGPU with unified memory. The Mac Mini M4 is faster and more power-efficient. Both run 7–13B models without a discrete GPU.',
        bullets: [
          'Mac Mini M4: fastest for LLMs, ~18 tok/s on Llama 3 8B, power-efficient',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, up to 64 GB unified RAM',
          'Both run 7B–13B models at Q4 without a dedicated GPU',
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
      faq: { id: 'faq', title: 'Quick Answers About Mini PCs for Local LLMs', faqs: [] },
    },
  },
  de: { theme: 'Model Comparisons', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Model Comparisons', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Model Comparisons', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Model Comparisons', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
