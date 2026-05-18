import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B vs Llama 3 8B: Which Runs Better Locally?',
    seoTitle: 'Qwen 14B vs Llama 3 8B Locally? | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B fits 6 GB VRAM and runs faster. Qwen 2.5 14B needs 10+ GB but scores higher on benchmarks. With 12 GB VRAM, Qwen 14B wins on quality. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 2.5 14B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between Llama 8B and Qwen 14B locally',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['best-14b-models-coding', 'best-moe-models-local-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Qwen 14B vs Llama 3 8B: which runs better locally?',
        answer: 'Llama 3 8B fits in 6 GB VRAM and runs faster. Qwen 2.5 14B needs 10+ GB but scores higher on benchmarks. If you have 12 GB VRAM, Qwen 14B wins on quality.',
        bullets: [
          'Llama 3 8B Q4_K_M: 6 GB VRAM, ~25 tok/s on RTX 3060',
          'Qwen 2.5 14B Q4_K_M: 10 GB VRAM, ~15 tok/s on RTX 3060',
          'Qwen 14B is better quality; Llama 8B is faster',
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
      faq: { id: 'faq', title: 'Quick Answers About Qwen 14B vs Llama 8B', faqs: [] },
    },
  },
  de: { theme: 'Model Comparisons', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Model Comparisons', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Model Comparisons', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Model Comparisons', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
