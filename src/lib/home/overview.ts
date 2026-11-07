// One source for the "what PromptQuorum is + real size" block shown at the end of Ask Hans answers and reports
// (and by the MCP get_site_stats tool). Same numbers and labels as the homepage "By the Numbers" strip.
// Server only. Text is plain (no markup) so it can go into chat, PDF, Word and Markdown unchanged.

import { getHomeStats } from '@/lib/home/stats'
import { getMcpUsageSnapshotCached } from '@/lib/mcp/usage'
import { getAskHansTotals } from '@/lib/askhans/totals'
import { t } from '@/components/home/home-i18n'
import { ALL_LANGS } from '@/lib/i18n/constants'
import type { Language } from '@/lib/blog/blogContent'

const SITE = 'https://www.promptquorum.com'

export interface SiteOverview {
  title: string
  blurb: string
  tiles: { label: string; value: string }[]
  /** Absolute URLs; label is the localized call to action from the homepage tiles. */
  links: { label: string; href: string }[]
}

const prefix = (lang: Language) => (lang === 'en' ? '' : `/${lang}`)

/** Accepts the request's raw language string; unknown values fall back to English. */
export async function getSiteOverview(rawLang: string): Promise<SiteOverview> {
  const lang = ((ALL_LANGS as readonly string[]).includes(rawLang) ? rawLang : 'en') as Language
  const stats = getHomeStats(lang)
  const tiles: SiteOverview['tiles'] = [
    { label: t('statAppsTracked', lang), value: stats.totalApps.toLocaleString('en-US') },
    { label: t('statLanguages', lang), value: String(stats.locales) },
    { label: t('statFounderVerified', lang), value: String(stats.founderVerified) },
    { label: t('statArticlesPublished', lang), value: stats.totalArticles.toLocaleString('en-US') },
    { label: t('statHandsOnTests', lang), value: String(stats.handsOnTests) },
  ]
  const links: SiteOverview['links'] = [{ label: t('statAppsTrackedHint', lang), href: `${SITE}${prefix(lang)}/directory` }]

  // The usage counters live in Redis: a failure must never break an answer, the tiles are just left out.
  try {
    const mcp = await getMcpUsageSnapshotCached()
    // A zero means the counter is unreachable or brand new: leave the tile out rather than show "0".
    if (mcp.total > 0) tiles.push({ label: t('statMcpCalls', lang), value: mcp.total.toLocaleString('en-US') })
    links.push({ label: t('statMcpCallsHint', lang), href: `${SITE}${prefix(lang)}/mcp-stats` })
  } catch {
    /* omit */
  }
  if (process.env.ASK_HANS_ENABLED === 'true') {
    try {
      const ask = await getAskHansTotals()
      if (ask.answers > 0) tiles.push({ label: t('statAskHansCalls', lang), value: ask.answers.toLocaleString('en-US') })
      links.push({ label: t('statAskHansCallsHint', lang), href: `${SITE}${prefix(lang)}/askhans` })
    } catch {
      /* omit */
    }
  }
  return { title: t('overviewTitle', lang), blurb: t('overviewBlurb', lang), tiles, links }
}
