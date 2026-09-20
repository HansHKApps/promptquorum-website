import type { Language } from '@/lib/blog/blogContent'
import { getHomeStats } from '@/lib/home/stats'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { t } from './home-i18n'

export function ByTheNumbersBlock({ lang = 'en' }: { lang?: Language }) {
  const stats = getHomeStats(lang)

  const items: { label: string; value: string; icon: HomeIconName }[] = [
    { label: t('statAppsTracked', lang), value: stats.totalApps.toLocaleString(), icon: 'apps' },
    { label: t('statLanguages', lang), value: stats.locales.toString(), icon: 'globe' },
    { label: t('statFounderVerified', lang), value: stats.founderVerified.toString(), icon: 'verified' },
    { label: t('statArticlesPublished', lang), value: stats.totalArticles.toLocaleString(), icon: 'posts' },
  ]

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.stat} p-4 h-full`}>
      <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
        <HomeIcon name="stats" />
        {t('statsTitle', lang)}
      </h3>
      <dl className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border border-tone-list-edge bg-tone-list p-3">
            <dt className="flex items-center gap-1.5 text-xs text-text-secondary">
              <HomeIcon name={item.icon} size={14} />
              {item.label}
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-none text-text-primary">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
