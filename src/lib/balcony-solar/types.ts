// Balcony Solar types — re-exports from local-llms/types since the article shape is identical
// across all content clusters. Keeping the import path stable here means future
// divergence (e.g., new section types specific to balcony-solar) is local to this cluster.
export type { LLMSection as BalconySolarSection, LLMArticle as BalconySolarArticle } from '@/lib/local-llms/types'
