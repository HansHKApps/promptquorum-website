import type { Language } from '@/lib/blog/blogContent'
import { getHomeStats } from '@/lib/home/stats'
import { getFounderVerifiedApps, getHandsOnTestedApps } from '@/lib/home/statDetails'
import { getMcpUsageSnapshotCached } from '@/lib/mcp/usage'
import { getAskHansTotals } from '@/lib/askhans/totals'
import { academyEnabled } from '@/lib/academy/config'
import { getAcademyTotalsLive } from '@/lib/academy/usage'
import { getUmamiStat } from '@/lib/partners/umami'
import { getGscStat } from '@/lib/partners/gsc'
import { partnersContent } from '@/lib/partners/content'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { StatTilesClient, type StatTileItem } from './StatTilesClient'
import { t } from './home-i18n'

/** Static class names (Tailwind cannot build them dynamically): columns from the lg breakpoint up, by half the tile count. */
const BAR_COLS: Record<number, string> = { 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' }

/**
 * `card` = the original tall 2-column tile card; `bar` = one slim horizontal row of the same five
 * stats, used near the top of the homepage where a tall box would push the tools below the fold.
 */
export async function ByTheNumbersBlock({ lang = 'en', layout = 'card' }: { lang?: Language; layout?: 'card' | 'bar' }) {
  const stats = getHomeStats(lang)
  const mcpUsage = await getMcpUsageSnapshotCached()
  const umami = await getUmamiStat()
  const gsc = await getGscStat()
  const askHansOn = process.env.ASK_HANS_ENABLED === 'true'
  const askHansTotals = askHansOn ? await getAskHansTotals() : null
  const academyTotal = academyEnabled() ? (await getAcademyTotalsLive()).programmes : null
  const founderVerifiedApps = getFounderVerifiedApps(lang)
  const handsOnTestedApps = getHandsOnTestedApps(lang)
  const mcpStatsHref = lang === 'en' ? '/mcp-stats' : `/${lang}/mcp-stats`
  const askHansHref = lang === 'en' ? '/askhans' : `/${lang}/askhans`
  const academyHref = lang === 'en' ? '/academy' : `/${lang}/academy`
  const directoryHref = lang === 'en' ? '/directory' : `/${lang}/directory`

  const items: StatTileItem[] = [
    {
      label: t('statAppsTracked', lang),
      value: stats.totalApps.toLocaleString(),
      icon: 'apps',
      href: directoryHref,
      hint: t('statAppsTrackedHint', lang),
    },
    { label: t('statLanguages', lang), value: stats.locales.toString(), icon: 'globe' },
    {
      label: t('statFounderVerified', lang),
      value: stats.founderVerified.toString(),
      icon: 'verified',
      desc: t('statFounderVerifiedDesc', lang),
      drawer: 'founder',
    },
    { label: t('statArticlesPublished', lang), value: stats.totalArticles.toLocaleString(), icon: 'posts' },
    {
      label: t('statHandsOnTests', lang),
      value: stats.handsOnTests.toLocaleString(),
      icon: 'test',
      desc: t('statHandsOnTestsDesc', lang),
      drawer: 'handsOn',
    },
    {
      label: t('statMcpCalls', lang),
      value: mcpUsage.total.toLocaleString(),
      icon: 'mcp',
      href: mcpStatsHref,
      hint: t('statMcpCallsHint', lang),
    },
    ...(askHansTotals
      ? [{
          label: t('statAskHansCalls', lang),
          value: askHansTotals.answers.toLocaleString(),
          liveCounter: 'askHansAnswers' as const,
          icon: 'mcp' as const,
          href: askHansHref,
          hint: t('statAskHansCallsHint', lang),
        }]
      : []),
    ...(umami
      ? [{
          label: t('statPageViews', lang),
          value: umami.pageviews.toLocaleString(),
          icon: 'stats' as const,
        }]
      : []),
    ...(gsc
      ? [{
          label: partnersContent[lang].stats.gscLabel.replace('{date}', formatDisplayDate(gsc.date, lang)),
          value: gsc.clicks.toLocaleString(),
          icon: 'stats' as const,
        }]
      : []),
    // Last tile: sits after the page-view and Google-search tiles (owner request 2026-11-19).
    ...(academyTotal !== null
      ? [{
          label: t('statAcademyProgrammes', lang),
          value: academyTotal.toLocaleString(),
          icon: 'posts' as const,
          href: academyHref,
          hint: t('statAcademyProgrammesHint', lang),
          liveCounter: 'academyProgrammes' as const,
        }]
      : []),
  ]

  if (layout === 'bar') {
    return (
      <section aria-label={t('statsTitle', lang)} className={`mb-8 rounded-xl border ${SURFACE_CLASS.stat} p-3`}>
        {/* Even rows: 10 tiles = 2 rows of 5 (7 columns left a half-empty second row, and the one tall tile with a long label stretched it). */}
        <dl className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${items.length <= 6 ? 'lg:grid-cols-6' : BAR_COLS[Math.min(6, Math.ceil(items.length / 2))]}`}>
          <StatTilesClient
            items={items}
            layout="bar"
            lang={lang}
            founderItems={founderVerifiedApps}
            handsOnItems={handsOnTestedApps}
            mcpStatsHref={mcpStatsHref}
            askHansHref={askHansHref}
          />
        </dl>
      </section>
    )
  }

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.stat} p-4 h-full`}>
      <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
        <HomeIcon name="stats" />
        {t('statsTitle', lang)}
      </h3>
      <dl className="grid grid-cols-2 gap-3">
        <StatTilesClient
          items={items}
          layout="card"
          lang={lang}
          founderItems={founderVerifiedApps}
          handsOnItems={handsOnTestedApps}
          mcpStatsHref={mcpStatsHref}
          askHansHref={askHansHref}
        />
      </dl>
    </div>
  )
}
