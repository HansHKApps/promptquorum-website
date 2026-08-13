import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import type { Language } from '@/lib/blog/blogContent'

export interface LLMHubData {
  /** slug → title, resolved for the requested language (falls back to English) */
  titlesMap: Record<string, string>
  /** slug → publish/modified dates (only slugs that have en dates) */
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  /** slugs that have content and are NOT in COMING_SOON_SLUGS */
  liveSlugs: string[]
}

/**
 * Builds the data the LocalLLMsHub client component needs, for one resolved
 * language. Called on the server so that llmContent (all 129 articles, all
 * 9 languages) never ships to the browser — only the single title per slug
 * that this page will actually render.
 */
export function buildLLMHubData(lang: Language): LLMHubData {
  const titlesMap: Record<string, string> = {}
  const datesMap: Record<string, { publishDate?: string; dateModified?: string }> = {}
  const liveSlugs: string[] = []

  for (const [slug, contentKey] of Object.entries(LLM_SLUG_TO_KEY)) {
    const content = llmContent[contentKey]
    if (!content) continue

    // Title in the requested language, falling back to English — matches the
    // fallback getArticleTitle() previously did client-side.
    const title = content[lang]?.title ?? content.en?.title
    if (title) titlesMap[slug] = title

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
