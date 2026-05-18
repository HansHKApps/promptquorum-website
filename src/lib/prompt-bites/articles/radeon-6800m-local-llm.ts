import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Can You Run Local LLMs on a Radeon RX 6800M?',
    seoTitle: 'Radeon 6800M Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — Radeon RX 6800M (12 GB VRAM) runs local LLMs via ROCm on Linux or llama.cpp on all platforms. Llama 3 8B Q4 runs at ~12 tok/s. Windows ROCm support is limited. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B'],
    current_hardware_mentioned: ['Radeon RX 6800M 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Laptop users with an AMD Radeon RX 6800M wanting to run local LLMs',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'best-models-amd-5700x-3070ti'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run local LLMs on a Radeon RX 6800M?',
        answer: 'Yes. The Radeon RX 6800M has 12 GB GDDR6 VRAM and can run local LLMs. On Linux, use ROCm for GPU acceleration. On Windows, use llama.cpp with Vulkan or CPU fallback. Llama 3 8B Q4_K_M runs at ~12 tok/s on Linux with ROCm.',
        bullets: [
          'Linux + ROCm: full GPU acceleration, ~12 tok/s on Llama 3 8B Q4',
          'Windows: use llama.cpp with Vulkan backend for partial GPU offload',
          '12 GB VRAM supports models up to 14B at Q4_K_M',
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
      faq: { id: 'faq', title: 'Quick Answers About Radeon 6800M and Local LLMs', faqs: [] },
    },
  },
  de: { theme: 'Hardware-Specific', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Hardware-Specific', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Hardware-Specific', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Hardware-Specific', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
