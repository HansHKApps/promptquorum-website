import type { Language } from '@/lib/blog/blogContent'
import { getHomeStats } from '@/lib/home/stats'
import { getFounderVerifiedApps, getHandsOnTestedApps } from '@/lib/home/statDetails'
import { getMcpUsageSnapshotCached } from '@/lib/mcp/usage'
import { getAskHansTotals } from '@/lib/askhans/totals'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { StatTilesClient, type StatTileItem } from './StatTilesClient'
import { t } from './home-i18n'

/**
 * `card` = the original tall 2-column tile card; `bar` = one slim horizontal row of the same five
 * stats, used near the top of the homepage where a tall box would push the tools below the fold.
 */
export async function ByTheNumbersBlock({ lang = 'en', layout = 'card' }: { lang?: Language; layout?: 'card' | 'bar' }) {
  const stats = getHomeStats(lang)
  const mcpUsage = await getMcpUsageSnapshotCached()
  const askHansOn = process.env.ASK_HANS_ENABLED === 'true'
  const askHansTotals = askHansOn ? await getAskHansTotals() : null
  const founderVerifiedApps = getFounderVerifiedApps(lang)
  const handsOnTestedApps = getHandsOnTestedApps(lang)
  const mcpStatsHref = lang === 'en' ? '/mcp-stats' : `/${lang}/mcp-stats`
  const askHansHref = lang === 'en' ? '/askhans' : `/${lang}/askhans`
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
          icon: 'mcp' as const,
          href: askHansHref,
          hint: t('statAskHansCallsHint', lang),
        }]
      : []),
  ]

  if (layout === 'bar') {
    return (
      <section aria-label={t('statsTitle', lang)} className={`mb-8 rounded-xl border ${SURFACE_CLASS.stat} p-3`}>
        <dl className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 ${items.length > 6 ? 'xl:grid-cols-7' : ''}`}>
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
