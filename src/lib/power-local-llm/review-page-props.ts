// Single server-side entry point the article routes use to turn the narrowed
// article data of a page into review-funnel props:
//   * `directoryFunnel`  — data for the two DirectoryBlocks (undefined on non-reviews)
//   * `articleData`      — competitor/comparison sections linked to the directory
//
// On a page that is not a feature app post it returns the input untouched, so
// no other page type can be affected.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { competitorToolSlugs, linkCompetitorsInArticleData } from './competitor-links'
import { buildDirectoryFunnel, getReviewedTool, type DirectoryFunnelData, type ReviewCluster } from './directory-funnel'

export function reviewPageProps<T extends Partial<Record<Language, LLMArticle>>>(
  cluster: ReviewCluster,
  urlSlug: string,
  lang: Language,
  narrowed: { articleData: T; availableLangs: string[] },
): { articleData: T; availableLangs: string[]; directoryFunnel: DirectoryFunnelData | undefined } {
  const selfSlug = getReviewedTool(cluster, urlSlug)?.slug ?? null
  // The block's "similar tools" come from the page's own competitor table (rendered locale block,
  // `en` as the fallback the renderers also use), so block and table cannot disagree.
  const block = narrowed.articleData[lang] ?? narrowed.articleData.en
  const directoryFunnel = buildDirectoryFunnel(cluster, urlSlug, lang, competitorToolSlugs(block, selfSlug))
  if (!directoryFunnel) return { ...narrowed, directoryFunnel: undefined }
  return {
    articleData: linkCompetitorsInArticleData(narrowed.articleData, lang, selfSlug),
    availableLangs: narrowed.availableLangs,
    directoryFunnel,
  }
}
