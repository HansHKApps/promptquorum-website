// Power Local LLM — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map will fall through to the
// "Coming Soon" template at the article page level.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_anythingllm_vs_privategpt_vs_openwebui_rag } from './articles/anythingllm-vs-privategpt-vs-openwebui-rag'
import { article as a_best_local_ai_app_low_end_pc } from './articles/best-local-ai-app-low-end-pc'
import { article as a_lm_studio_vs_jan_vs_gpt4all_2026 } from './articles/lm-studio-vs-jan-vs-gpt4all-2026'
import { article as a_local_ai_app_non_technical_users } from './articles/local-ai-app-non-technical-users'
import { article as a_local_ai_app_with_built_in_rag } from './articles/local-ai-app-with-built-in-rag'
import { article as a_local_rag_on_your_pdfs_step_by_step } from './articles/local-rag-on-your-pdfs-step-by-step'
import { article as a_replace_github_copilot_with_local_llm } from './articles/replace-github-copilot-with-local-llm'

export const powerLLMContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'anythingllm-vs-privategpt-vs-openwebui-rag': a_anythingllm_vs_privategpt_vs_openwebui_rag,
  'best-local-ai-app-low-end-pc':           a_best_local_ai_app_low_end_pc,
  'lm-studio-vs-jan-vs-gpt4all-2026':       a_lm_studio_vs_jan_vs_gpt4all_2026,
  'local-ai-app-non-technical-users':       a_local_ai_app_non_technical_users,
  'local-ai-app-with-built-in-rag':         a_local_ai_app_with_built_in_rag,
  'local-rag-on-your-pdfs-step-by-step':    a_local_rag_on_your_pdfs_step_by_step,
  'replace-github-copilot-with-local-llm':  a_replace_github_copilot_with_local_llm,
}
