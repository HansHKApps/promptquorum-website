'use client'

import { AppLink as Link } from '@/components/AppLink'
import { isFreshAge, localAgeDays } from '@/lib/home/fresh-age'
import { useLocalToday } from '@/lib/home/useLocalToday'

export interface FreshStripItem {
  key: string
  url: string
  title: string
  description: string
  kindLabel: string
  /** ISO date the item went live — the visitor's clock decides how old that is. */
  isoDate: string
  /** Already-localized display date, e.g. "October 2, 2026". Always true, so it is what the server HTML shows. */
  dateDisplay: string
}

export interface FreshStripLabels {
  title: string
  subtitle: string
  newPill: string
  today: string
  yesterday: string
  /** Contains an {n} token. */
  daysAgoTemplate: string
}

/**
 * The homepage is statically generated and then served for days, so anything computed at build time
 * ("Today", "last 3 days") goes stale at midnight. The server HTML therefore shows only the real date;
 * once mounted, the visitor's own clock adds the relative age and drops items that have aged out of the
 * window (hiding the whole strip if none are left). A new article still needs a deploy to appear.
 */
export function FreshStripClient({ items, labels }: { items: FreshStripItem[]; labels: FreshStripLabels }) {
  const now = useLocalToday()

  const visible = now ? items.filter((i) => isFreshAge(localAgeDays(i.isoDate, now))) : items
  if (visible.length === 0) return null

  const ageLabel = (isoDate: string): string | null => {
    if (!now) return null
    const days = localAgeDays(isoDate, now)
    if (days === 0) return labels.today
    if (days === 1) return labels.yesterday
    return labels.daysAgoTemplate.split('{n}').join(String(days))
  }

  return (
    <section
      aria-labelledby="home-fresh-title"
      className="mb-8 rounded-xl border-2 border-primary bg-primary/10 p-4 sm:p-5 shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 id="home-fresh-title" className="text-lg sm:text-xl font-extrabold text-text-primary">
          {labels.title}
        </h2>
        <p className="text-xs font-semibold text-text-secondary">{labels.subtitle}</p>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const age = ageLabel(item.isoDate)
          return (
            <li key={item.key}>
              <Link
                href={item.url}
                className="block h-full rounded-lg border border-primary/30 bg-card p-3 transition hover:border-primary hover:shadow-md"
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-white">
                    {labels.newPill}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{item.kindLabel}</span>
                </div>
                <p className="text-sm font-extrabold text-text-primary line-clamp-2">{item.title}</p>
                {item.description && <p className="mt-0.5 text-xs text-text-secondary line-clamp-2">{item.description}</p>}
                <p className="mt-2 text-xs font-semibold text-text-muted">
                  {age ? `${age} · ${item.dateDisplay}` : item.dateDisplay}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
