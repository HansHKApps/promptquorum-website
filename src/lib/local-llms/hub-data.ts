import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import type { Language } from '@/lib/blog/blogContent'

export interface LLMHubData {
  /** slug → lang → title */
  titlesMap: Record<string, Partial<Record<Language, string>>>
  /** slug → publish/modified dates (only slugs that have en dates) */
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  /** slugs that have content and are NOT in COMING_SOON_SLUGS */
  liveSlugs: string[]
}

/**
 * Builds the data the LocalLLMsHub client component needs.
 * Called on the server so that llmContent (all 113 articles) never ships
 * to the browser.
 */
export function buildLLMHubData(): LLMHubData {
  const titlesMap: Record<string, Partial<Record<Language, string>>> = {}
  const datesMap: Record<string, { publishDate?: string; dateModified?: string }> = {}
  const liveSlugs: string[] = []

  for (const [slug, contentKey] of Object.entries(LLM_SLUG_TO_KEY)) {
    const content = llmContent[contentKey]
    if (!content) continue

    // Collect titles for each language
    const titles: Partial<Record<Language, string>> = {}
    for (const [lang, article] of Object.entries(content)) {
      if (article?.title) titles[lang as Language] = article.title
    }
    titlesMap[slug] = titles

    // Dates from the English version (used for new/updated badges)
    const en = content.en
    if (en?.publishDate || en?.dateModified) {
      datesMap[slug] = {
        publishDate: en.publishDate,
        dateModified: en.dateModified,
      }
    }

    // Live = has content + not coming soon
    if (!COMING_SOON_SLUGS.has(slug)) {
      liveSlugs.push(slug)
    }
  }

  return { titlesMap, datesMap, liveSlugs }
}
