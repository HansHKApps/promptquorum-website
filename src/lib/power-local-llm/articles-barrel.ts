// Power Local LLM — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map will fall through to the
// "Coming Soon" template at the article page level.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_anythingllm_vs_privategpt_vs_openwebui_rag } from './articles/anythingllm-vs-privategpt-vs-openwebui-rag'
import { article as a_best_embedding_models_local_rag_2026 } from './articles/best-embedding-models-local-rag-2026'
import { article as a_best_local_ai_app_low_end_pc } from './articles/best-local-ai-app-low-end-pc'
import { article as a_best_local_coding_models_2026 } from './articles/best-local-coding-models-2026'
import { article as a_chat_with_1000_pdfs_locally } from './articles/chat-with-1000-pdfs-locally'
import { article as a_continue_dev_vs_cline_vs_aider_local } from './articles/continue-dev-vs-cline-vs-aider-local'
import { article as a_local_ai_agents_with_mcp_2026 } from './articles/local-ai-agents-with-mcp-2026'
import { article as a_lm_studio_vs_jan_vs_gpt4all_2026 } from './articles/lm-studio-vs-jan-vs-gpt4all-2026'
import { article as a_local_ai_app_non_technical_users } from './articles/local-ai-app-non-technical-users'
import { article as a_local_ai_app_with_built_in_rag } from './articles/local-ai-app-with-built-in-rag'
import { article as a_local_coding_llm_without_internet } from './articles/local-coding-llm-without-internet'
import { article as a_local_rag_for_private_business_data } from './articles/local-rag-for-private-business-data'
import { article as a_local_rag_on_your_pdfs_step_by_step } from './articles/local-rag-on-your-pdfs-step-by-step'
import { article as a_replace_github_copilot_with_local_llm } from './articles/replace-github-copilot-with-local-llm'

export const powerLLMContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'anythingllm-vs-privategpt-vs-openwebui-rag': a_anythingllm_vs_privategpt_vs_openwebui_rag,
  'best-embedding-models-local-rag-2026':   a_best_embedding_models_local_rag_2026,
  'best-local-ai-app-low-end-pc':           a_best_local_ai_app_low_end_pc,
  'best-local-coding-models-2026':          a_best_local_coding_models_2026,
  'chat-with-1000-pdfs-locally':            a_chat_with_1000_pdfs_locally,
  'continue-dev-vs-cline-vs-aider-local':   a_continue_dev_vs_cline_vs_aider_local,
  'local-ai-agents-with-mcp-2026':          a_local_ai_agents_with_mcp_2026,
  'lm-studio-vs-jan-vs-gpt4all-2026':       a_lm_studio_vs_jan_vs_gpt4all_2026,
  'local-ai-app-non-technical-users':       a_local_ai_app_non_technical_users,
  'local-ai-app-with-built-in-rag':         a_local_ai_app_with_built_in_rag,
  'local-coding-llm-without-internet':      a_local_coding_llm_without_internet,
  'local-rag-for-private-business-data':    a_local_rag_for_private_business_data,
  'local-rag-on-your-pdfs-step-by-step':    a_local_rag_on_your_pdfs_step_by_step,
  'replace-github-copilot-with-local-llm':  a_replace_github_copilot_with_local_llm,
}
