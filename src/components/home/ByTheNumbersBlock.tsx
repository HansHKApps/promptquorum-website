import type { Language } from '@/lib/blog/blogContent'
import { getHomeStats } from '@/lib/home/stats'
import { t } from './home-i18n'

export function ByTheNumbersBlock({ lang = 'en' }: { lang?: Language }) {
  const stats = getHomeStats(lang)

  const items = [
    { label: t('statAppsTracked', lang), value: stats.totalApps.toLocaleString() },
    { label: t('statLanguages', lang), value: stats.locales.toString() },
    { label: t('statFounderVerified', lang), value: stats.founderVerified.toString() },
    { label: t('statArticlesPublished', lang), value: stats.totalArticles.toLocaleString() },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full">
      <h3 className="text-sm font-bold text-text-primary mb-3">{t('statsTitle', lang)}</h3>
      <dl className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-xs text-text-secondary">{item.label}</dt>
            <dd className="text-2xl font-black text-primary">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
