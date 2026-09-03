import { enterpriseAiContent } from '@/lib/enterprise-ai/articles-barrel'
import { ENTERPRISE_AI_SLUG_TO_KEY } from '@/lib/enterprise-ai/slugs'
import type { Language } from '@/lib/blog/blogContent'

export interface EnterpriseAiHubData {
  titlesMap: Record<string, string>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSlugs: string[]
}

/** Builds the data the EnterpriseAiHub client component needs, for one resolved language. */
export function buildEnterpriseAiHubData(lang: Language): EnterpriseAiHubData {
  const titlesMap: Record<string, string> = {}
  const datesMap: Record<string, { publishDate?: string; dateModified?: string }> = {}
  const liveSlugs: string[] = []

  for (const [slug, contentKey] of Object.entries(ENTERPRISE_AI_SLUG_TO_KEY)) {
    const content = enterpriseAiContent[contentKey]
    if (!content) continue

    const title = content[lang]?.title ?? content.en?.title
    if (title) titlesMap[slug] = title

    const en = content.en
    if (en?.publishDate || en?.dateModified) {
      datesMap[slug] = { publishDate: en.publishDate, dateModified: en.dateModified }
    }

    liveSlugs.push(slug)
  }

  return { titlesMap, datesMap, liveSlugs }
}
