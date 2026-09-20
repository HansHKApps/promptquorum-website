import { TOTAL_TOOL_COUNT, localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { getTotalArticleCount } from '@/lib/home/content-feed'
import type { Language } from '@/lib/blog/blogContent'

export interface HomeStats {
  totalApps: number
  locales: number
  founderVerified: number
  totalArticles: number
}

export function getHomeStats(lang: Language = 'en'): HomeStats {
  return {
    totalApps: TOTAL_TOOL_COUNT,
    locales: ALL_LANGS.length,
    founderVerified: localAiApps.filter((tool) => tool.founder != null || tool.founderReviewedDate != null).length,
    totalArticles: getTotalArticleCount(lang),
  }
}
