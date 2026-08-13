import { peContent } from '@/lib/prompt-engineering/content'
import type { Language } from '@/translations'

export interface PEHubData {
  /** contentKey → title, resolved for the requested language (falls back to English) */
  titlesMap: Record<string, string>
  /** contentKey → lowercased educational level (English-only, used for hub personalization) */
  articleLevels: Record<string, string>
  /** contentKey → publish/modified dates (English-only) */
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
}

/**
 * Builds the data the PromptEngineeringHub client component needs, for one
 * resolved language. Called on the server so that peContent (every article,
 * all 9 languages) never ships to the browser — only the single title per
 * article that this page will actually render.
 */
export function buildPEHubData(lang: Language): PEHubData {
  const titlesMap: Record<string, string> = {}
  const articleLevels: Record<string, string> = {}
  const datesMap: Record<string, { publishDate?: string; dateModified?: string }> = {}

  for (const [key, langMap] of Object.entries(peContent)) {
    const title = langMap[lang]?.title ?? langMap.en?.title
    if (title) titlesMap[key] = title

    articleLevels[key] = (langMap.en?.educationalLevel ?? '').toLowerCase()
    datesMap[key] = { publishDate: langMap.en?.publishDate, dateModified: langMap.en?.dateModified }
  }

  return { titlesMap, articleLevels, datesMap }
}
