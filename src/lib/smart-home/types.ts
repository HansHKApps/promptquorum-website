// Smart Home types — re-exports from local-llms/types since the article shape is identical
// across all four content clusters. Keeping the import path stable here means future
// divergence (e.g., new section types specific to smart-home) is local to this cluster.
export type { LLMSection as SmartHomeSection, LLMArticle as SmartHomeArticle } from '@/lib/local-llms/types'
