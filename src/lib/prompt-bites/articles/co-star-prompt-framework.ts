import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    title: 'What Is the CO-STAR Prompt Framework?',
    seoTitle: 'CO-STAR Prompt Framework Explained | Prompt Bites | PromptQuorum',
    metaDescription: 'CO-STAR is a prompt framework: Context, Objective, Style, Tone, Audience, Response. It structures prompts for consistent, targeted LLM output. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers and writers learning structured prompting frameworks',
    parentArticle: '/prompt-engineering/co-star-framework',
    siblingBites: ['best-llm-right-now'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What is the CO-STAR prompt framework?',
        answer: 'CO-STAR is a six-part prompt structure: Context (background), Objective (task), Style (writing style), Tone (emotional register), Audience (who reads it), Response (output format). It helps produce consistent, targeted LLM output by making every constraint explicit.',
        bullets: [
          'C = Context: background information the LLM needs',
          'O = Objective: the specific task to complete',
          'S/T/A = Style, Tone, Audience: how and for whom to write',
          'R = Response: format (list, paragraph, JSON, etc.)',
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
      faq: { id: 'faq', title: 'Quick Answers About the CO-STAR Framework', faqs: [] },
    },
  },
  de: { theme: 'Prompt Engineering', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Prompt Engineering', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Prompt Engineering', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Prompt Engineering', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
