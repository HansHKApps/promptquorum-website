import { getMentions } from '@/lib/home/mentions'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { BatchedList, type Batch } from './BatchedList'

function monthKey(iso: string): string {
  return iso.slice(0, 7) // YYYY-MM
}

function monthLabel(iso: string): string {
  return new Date(`${iso}-01`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export function RecentMentionsBlock() {
  const mentions = getMentions()

  if (mentions.length === 0) {
    return <HomeCard size="sm" variant="stat" icon="mentions" title="Recent Mentions" emptyState emptyMessage="Mentions coming soon." />
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
      label: 'Most Recent',
      items: current.map((m) => ({
        key: m.id,
        title: `${m.title} — ${m.outlet}`,
        url: m.url,
        meta: `${formatDisplayDate(m.date, 'en')} · DR ${m.domainRating}`,
      })),
    },
    ...[...olderByMonth.entries()]
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([key, items]) => ({
        batchDate: `${key}-01`,
        label: monthLabel(key),
        items: items.map((m) => ({
          key: m.id,
          title: `${m.title} — ${m.outlet}`,
          url: m.url,
          meta: `${formatDisplayDate(m.date, 'en')} · DR ${m.domainRating}`,
        })),
      })),
  ]

  return (
    <HomeCard size="sm" variant="stat" icon="mentions" title="Recent Mentions">
      <BatchedList batches={batches} />
    </HomeCard>
  )
}
