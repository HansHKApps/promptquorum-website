import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Best LLM for AMD 5700X + RTX 3070 Ti? | Prompt Bites | PromptQuorum',
    metaDescription: 'With an RTX 3070 Ti (8 GB VRAM), best LLMs are Llama 3 8B and Mistral 7B at Q4_K_M. Both fit in 6 GB VRAM. The 5700X CPU handles fast tokenization. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Mistral 7B'],
    current_hardware_mentioned: ['AMD Ryzen 7 5700X', 'RTX 3070 Ti 8 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Users with an AMD 5700X and RTX 3070 Ti choosing a local LLM',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
        answer: 'With an RTX 3070 Ti (8 GB VRAM), Llama 3 8B and Mistral 7B at Q4_K_M are the best local LLMs. Both use ~6 GB VRAM and run at ~25 tok/s. The AMD Ryzen 7 5700X handles fast tokenization as a CPU fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s on RTX 3070 Ti',
          'Mistral 7B Q4_K_M: ~6 GB VRAM, strong reasoning per VRAM used',
          'RTX 3070 Ti has 8 GB VRAM — 13B models at Q4 may be too large',
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
      faq: { id: 'faq', title: 'Quick Answers About LLMs for AMD 5700X + RTX 3070 Ti', faqs: [] },
    },
  },
  de: { theme: 'Hardware-Specific', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Hardware-Specific', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Hardware-Specific', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Hardware-Specific', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
