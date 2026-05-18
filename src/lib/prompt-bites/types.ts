import type { LLMArticle } from '@/lib/local-llms/types'

export interface PromptBiteArticle extends LLMArticle {
  parentArticle?: string
  siblingBites?: string[]
  is_living_page?: boolean
}
