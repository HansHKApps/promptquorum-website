import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'

export interface LatestAppEntry {
  slug: string
  name: string
  tagline: string
  category: string
  addedDate: string
  url: string
}

function toolUrl(tool: ToolRecord): string {
  return tool.reviewSlug ? `/power-local-llm/${tool.reviewSlug}` : `/power-local-llm/local-llm-software-directory#${tool.slug}`
}

/**
 * Directory tools sorted by addedDate descending. Tools with no addedDate are
 * excluded (never "recently added" if we don't know when). Default limit is
 * higher than the 10 visible by default — LatestAppsBlock shows 10 and
 * expands into the rest, per the site's date-visibility rule (every item,
 * including ones revealed by expansion, must carry a date).
 */
export function getLatestApps(limit = 30): LatestAppEntry[] {
  return localAiApps
    .filter((tool): tool is ToolRecord & { addedDate: string } => tool.addedDate != null)
    .sort((a, b) => b.addedDate.localeCompare(a.addedDate))
    .slice(0, limit)
    .map((tool) => ({
      slug: tool.slug,
      name: tool.name,
      tagline: tool.tagline.en ?? '',
      category: tool.categories[0] ?? '',
      addedDate: tool.addedDate,
      url: toolUrl(tool),
    }))
}
