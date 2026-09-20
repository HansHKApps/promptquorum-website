import { getHomeStats } from '@/lib/home/stats'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'

export function ByTheNumbersBlock() {
  const stats = getHomeStats()

  const items: { label: string; value: string; icon: HomeIconName }[] = [
    { label: 'Apps tracked', value: stats.totalApps.toLocaleString(), icon: 'apps' },
    { label: 'Languages', value: stats.locales.toString(), icon: 'globe' },
    { label: 'Founder-verified', value: stats.founderVerified.toString(), icon: 'verified' },
    { label: 'Articles published', value: stats.totalArticles.toLocaleString(), icon: 'posts' },
  ]

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.stat} p-4 h-full`}>
      <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
        <HomeIcon name="stats" />
        By the Numbers
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
