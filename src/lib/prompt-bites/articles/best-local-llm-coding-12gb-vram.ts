import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for Coding with 12 GB VRAM?',
    seoTitle: 'Best Coding LLM for 12 GB VRAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'With 12 GB VRAM, Qwen 2.5 Coder 14B Q4_K_M is the best coding model (10 GB). DeepSeek Coder 14B is a strong alternative. Both fit on RTX 3060 12 GB. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 2.5 Coder 14B', 'DeepSeek Coder 14B'],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RTX 3080 Ti 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 12 GB VRAM GPUs choosing a coding model',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-models-amd-5700x-3070ti', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for coding with 12 GB VRAM?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M is the best coding model for 12 GB VRAM GPUs like the RTX 3060. It uses ~10 GB VRAM and scores highest on HumanEval among models that fit this constraint. DeepSeek Coder 14B is a strong alternative.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, top coding benchmark for this size',
          'DeepSeek Coder 14B Q4_K_M: similar VRAM, competitive on code completion',
          'Both fit RTX 3060 12 GB and RTX 3080 Ti 12 GB',
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
      faq: { id: 'faq', title: 'Quick Answers About Coding LLMs for 12 GB VRAM', faqs: [] },
    },
  },
  de: { theme: 'Hardware-Specific', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Hardware-Specific', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Hardware-Specific', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Hardware-Specific', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
