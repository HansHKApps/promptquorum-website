// Power Local LLM — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map will fall through to the
// "Coming Soon" template at the article page level.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_lm_studio_vs_jan_vs_gpt4all_2026 } from './articles/lm-studio-vs-jan-vs-gpt4all-2026'
import { article as a_replace_github_copilot_with_local_llm } from './articles/replace-github-copilot-with-local-llm'

export const powerLLMContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'lm-studio-vs-jan-vs-gpt4all-2026':       a_lm_studio_vs_jan_vs_gpt4all_2026,
  'replace-github-copilot-with-local-llm':  a_replace_github_copilot_with_local_llm,
}
