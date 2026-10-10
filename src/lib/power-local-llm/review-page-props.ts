// Single server-side entry point the article routes use to turn the narrowed
// article data of a page into review-funnel props:
//   * `directoryFunnel`  — data for the two DirectoryBlocks (undefined on non-reviews)
//   * `articleData`      — competitor/comparison sections linked to the directory
//
// On a page that is not a feature app post it returns the input untouched, so
// no other page type can be affected.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { linkCompetitorsInArticleData } from './competitor-links'
import { buildDirectoryFunnel, getReviewedTool, type DirectoryFunnelData, type ReviewCluster } from './directory-funnel'

export function reviewPageProps<T extends Partial<Record<Language, LLMArticle>>>(
  cluster: ReviewCluster,
  urlSlug: string,
  lang: Language,
  narrowed: { articleData: T; availableLangs: string[] },
): { articleData: T; availableLangs: string[]; directoryFunnel: DirectoryFunnelData | undefined } {
  const directoryFunnel = buildDirectoryFunnel(cluster, urlSlug, lang)
  if (!directoryFunnel) return { ...narrowed, directoryFunnel: undefined }
  const selfSlug = getReviewedTool(cluster, urlSlug)?.slug ?? null
  return {
    articleData: linkCompetitorsInArticleData(narrowed.articleData, lang, selfSlug),
    availableLangs: narrowed.availableLangs,
    directoryFunnel,
  }
}
