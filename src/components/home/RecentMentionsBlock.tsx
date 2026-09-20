import type { Language } from '@/lib/blog/blogContent'
import { getMentions } from '@/lib/home/mentions'
import { formatDisplayDate, formatDisplayMonthYear } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { BatchedList, type Batch } from './BatchedList'
import { t } from './home-i18n'

function monthKey(iso: string): string {
  return iso.slice(0, 7) // YYYY-MM
}

export function RecentMentionsBlock({ lang = 'en' }: { lang?: Language }) {
  const mentions = getMentions()

  if (mentions.length === 0) {
    return <HomeCard size="sm" variant="stat" icon="mentions" title={t('mentionsTitle', lang)} emptyState emptyMessage={t('mentionsEmpty', lang)} />
  }

  const current = mentions.slice(0, 10)
  const older = mentions.slice(10)

  const olderByMonth = new Map<string, typeof mentions>()
  for (const m of older) {
    const key = monthKey(m.date)
    if (!olderByMonth.has(key)) olderByMonth.set(key, [])
    olderByMonth.get(key)!.push(m)
  }

  const batches: Batch[] = [
    {
      batchDate: current[0].date,
      label: t('trendingMostRecent', lang),
      items: current.map((m) => ({
        key: m.id,
        title: `${m.title} — ${m.outlet}`,
        url: m.url,
        meta: `${formatDisplayDate(m.date, lang)} · DR ${m.domainRating}`,
      })),
    },
    ...[...olderByMonth.entries()]
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([key, items]) => ({
        batchDate: `${key}-01`,
        label: formatDisplayMonthYear(`${key}-01`, lang),
        items: items.map((m) => ({
          key: m.id,
          title: `${m.title} — ${m.outlet}`,
          url: m.url,
          meta: `${formatDisplayDate(m.date, lang)} · DR ${m.domainRating}`,
        })),
      })),
  ]

  return (
    <HomeCard size="sm" variant="stat" icon="mentions" title={t('mentionsTitle', lang)}>
      <BatchedList lang={lang} batches={batches} />
    </HomeCard>
  )
}
