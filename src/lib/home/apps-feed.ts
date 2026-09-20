import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import type { Language } from '@/lib/blog/blogContent'

export interface LatestAppEntry {
  slug: string
  name: string
  tagline: string
  category: string
  addedDate: string
  url: string
}

function toolUrl(tool: ToolRecord, lang: Language): string {
  const base = tool.reviewSlug ? `/power-local-llm/${tool.reviewSlug}` : `/directory#${tool.slug}`
  return lang === 'en' ? base : `/${lang}${base}`
}

/**
 * Directory tools sorted by addedDate descending. Tools with no addedDate are
 * excluded (never "recently added" if we don't know when). Default limit is
 * higher than the 10 visible by default — LatestAppsBlock shows 10 and
 * expands into the rest, per the site's date-visibility rule (every item,
 * including ones revealed by expansion, must carry a date).
 */
export function getLatestApps(lang: Language = 'en', limit = 30): LatestAppEntry[] {
  return localAiApps
    .filter((tool): tool is ToolRecord & { addedDate: string } => tool.addedDate != null)
    .sort((a, b) => b.addedDate.localeCompare(a.addedDate))
    .slice(0, limit)
    .map((tool) => ({
      slug: tool.slug,
      name: tool.name,
      tagline: tool.tagline[lang] ?? tool.tagline.en ?? '',
      category: tool.categories[0] ?? '',
      addedDate: tool.addedDate,
      url: toolUrl(tool, lang),
    }))
}
