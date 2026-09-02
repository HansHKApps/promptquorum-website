import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// STUB — full content pending. See edge-ai-3-article-briefs.md, Article E2.
export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Robots & Machines',
    sections: {},
  },
}
