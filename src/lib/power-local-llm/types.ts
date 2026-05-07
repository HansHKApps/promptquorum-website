// Power Local LLM types — re-exports from local-llms/types since the article shape is identical.
// Keeping the import path stable here means future divergence (e.g., new section types) is local to this cluster.
export type { LLMSection as PowerLLMSection, LLMArticle as PowerLLMArticle } from '@/lib/local-llms/types'
