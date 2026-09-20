import { getHomeStats } from '@/lib/home/stats'
import { HomeIcon } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'

export function ByTheNumbersBlock() {
  const stats = getHomeStats()

  const items = [
    { label: 'Apps tracked', value: stats.totalApps.toLocaleString() },
    { label: 'Languages', value: stats.locales.toString() },
    { label: 'Founder-verified', value: stats.founderVerified.toString() },
    { label: 'Articles published', value: stats.totalArticles.toLocaleString() },
  ]

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.stat} p-4 h-full`}>
      <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
        <HomeIcon name="stats" />
        By the Numbers
      </h3>
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
