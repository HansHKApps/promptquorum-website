import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best 14B Model for Coding?',
    seoTitle: 'Best 14B Model for Coding? | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 14B leads 14B coding models locally. Fits 10 GB VRAM at Q4_K_M and scores highest on HumanEval. DeepSeek Coder 14B is a strong alternative. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 2.5 Coder 14B', 'DeepSeek Coder 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a 14B coding model for local use',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['qwen-14b-vs-llama-8b', 'best-moe-models-local-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best 14B model for coding?',
        answer: 'Qwen 2.5 Coder 14B is the top 14B coding model for local use. It fits in 10 GB VRAM at Q4_K_M and scores highest on HumanEval among 14B models. DeepSeek Coder 14B is a strong alternative with similar VRAM requirements.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, top HumanEval score',
          'DeepSeek Coder 14B: strong alternative, similar VRAM footprint',
          'Both beat generic 14B models on code completion and debugging',
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
      faq: { id: 'faq', title: 'Quick Answers About 14B Coding Models', faqs: [] },
    },
  },
  de: { theme: 'Model Comparisons', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Model Comparisons', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Model Comparisons', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Model Comparisons', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
