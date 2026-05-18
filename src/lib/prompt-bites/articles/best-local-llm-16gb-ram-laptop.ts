import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    title: 'Best Local LLM for a 16 GB RAM Laptop?',
    seoTitle: 'Best LLM for 16 GB RAM Laptop? | Prompt Bites | PromptQuorum',
    metaDescription: 'With 16 GB RAM and no GPU, Llama 3 8B Q4_K_M is the best local LLM for a laptop. Runs at ~3–5 tok/s on CPU. Mistral 7B is a fast alternative. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Mistral 7B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Laptop users with 16 GB RAM wanting to run a local LLM on CPU',
    parentArticle: '/local-llms/local-llm-on-laptop',
    siblingBites: ['can-you-run-rag-on-2gb-ram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for a 16 GB RAM laptop?',
        answer: 'Llama 3 8B Q4_K_M is the best local LLM for a 16 GB RAM laptop without a dedicated GPU. It uses ~5 GB RAM and runs at ~3–5 tok/s on a modern CPU. Mistral 7B Q4_K_M is a slightly faster alternative. Both work on all major laptop CPUs.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~5 GB RAM, ~3–5 tok/s on CPU, strong reasoning',
          'Mistral 7B Q4_K_M: ~5 GB RAM, ~4–6 tok/s on CPU, fast and capable',
          'Apple Silicon laptops (M-series): much faster — 15–20 tok/s via Metal',
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
      faq: { id: 'faq', title: 'Quick Answers About LLMs for 16 GB RAM Laptops', faqs: [] },
    },
  },
  de: { theme: 'Quick Answers', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Quick Answers', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Quick Answers', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Quick Answers', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
