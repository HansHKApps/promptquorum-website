import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// STUB — full content pending. See edge-ai-3-article-briefs.md, Article E1.
export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    theme: 'Edge Silicon',
    sections: {},
  },
}
