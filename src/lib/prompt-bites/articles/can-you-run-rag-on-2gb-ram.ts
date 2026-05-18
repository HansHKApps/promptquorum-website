import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    title: 'Can You Run RAG on 2 GB RAM?',
    seoTitle: 'Can You Run RAG on 2 GB RAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Full RAG requires 8+ GB RAM. With 2 GB RAM, only tiny models (Phi-2, TinyLlama) work for the LLM part. The embedding model adds another 0.5–1 GB. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-2', 'TinyLlama'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers asking whether RAG is feasible on very low-memory systems',
    parentArticle: '/local-llms/local-rag-2026',
    siblingBites: ['best-local-llm-16gb-ram-laptop'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run RAG on 2 GB RAM?',
        answer: 'A full RAG pipeline requires at least 8 GB RAM. With only 2 GB, you can run a tiny LLM like TinyLlama or Phi-2 (both need ~1.5 GB), but the embedding model adds another 0.5–1 GB, leaving almost no room for the vector store or context. Results will be limited.',
        bullets: [
          '2 GB RAM: only tiny models (TinyLlama, Phi-2) — poor RAG quality',
          'Minimum for decent RAG: 8 GB RAM (7B LLM + embeddings + vector store)',
          'Alternative: run embeddings remotely, only the LLM locally',
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
      faq: { id: 'faq', title: 'Quick Answers About RAG on Low RAM', faqs: [] },
    },
  },
  de: { theme: 'Quick Answers', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Quick Answers', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Quick Answers', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Quick Answers', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
