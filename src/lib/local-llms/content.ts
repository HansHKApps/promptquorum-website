// TEMPORARY STUB: local-llms content is disabled due to syntax errors
// The original file has unclosed braces and incomplete language blocks

import type { Language } from '@/lib/blog/blogContent'

export interface LLMSection {
  [key: string]: any
}

export interface LLMArticle {
  theme: string
  title?: string
  intro?: string
  sections: Record<string, LLMSection>
}

// STUB: Empty content record
export const llmContent: Record<string, Partial<Record<Language, LLMArticle>>> = {}
