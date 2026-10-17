import { TOTAL_TOOL_COUNT, localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { getTotalArticleCount } from '@/lib/home/content-feed'
import { HANDS_ON_TEST_SLUGS } from '@/lib/hands-on-tests/links'
import type { Language } from '@/lib/blog/blogContent'

export interface HomeStats {
  totalApps: number
  locales: number
  founderVerified: number
  totalArticles: number
  handsOnTests: number
}

export function getHomeStats(lang: Language = 'en'): HomeStats {
  return {
    totalApps: TOTAL_TOOL_COUNT,
    locales: ALL_LANGS.length,
    founderVerified: localAiApps.filter((tool) => tool.founder != null || tool.founderReviewedDate != null).length,
    totalArticles: getTotalArticleCount(lang),
    // Every slug in HANDS_ON_TEST_SLUGS is published (always indexed), so adding a test there updates the counter.
    handsOnTests: HANDS_ON_TEST_SLUGS.length,
  }
}
