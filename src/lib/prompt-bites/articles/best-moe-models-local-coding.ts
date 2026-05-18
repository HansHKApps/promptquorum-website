import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best MoE Models for Local Coding?',
    seoTitle: 'Best MoE Models for Local Coding? | Prompt Bites | PromptQuorum',
    metaDescription: 'Best MoE models for local coding: Mixtral 8x7B (needs 26 GB VRAM) and DeepSeek V2 (needs 16 GB at Q4). MoE models activate only a subset of parameters for speed. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mixtral 8x7B', 'DeepSeek V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers evaluating MoE models for local coding tasks',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best MoE models for local coding?',
        answer: 'Mixtral 8x7B and DeepSeek V2 are the top MoE coding models for local use. MoE models activate only a fraction of parameters per token, giving better quality-per-VRAM than dense models of similar total size. Both require at least 16 GB VRAM at Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M: ~26 GB VRAM, strong coding, available on Ollama',
          'DeepSeek V2 Q4: ~16 GB VRAM, top coding benchmark scores',
          'MoE advantage: faster inference than comparable dense models',
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
      faq: { id: 'faq', title: 'Quick Answers About MoE Models for Coding', faqs: [] },
    },
  },
  de: { theme: 'Model Comparisons', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Model Comparisons', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Model Comparisons', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Model Comparisons', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
