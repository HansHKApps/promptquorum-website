import { getTrendingBatches } from '@/lib/home/trending'
import { HomeCard } from './HomeCard'
import { BatchedList } from './BatchedList'

export function TrendingBlock() {
  const batches = getTrendingBatches()

  if (batches.length === 0) {
    return <HomeCard size="md" title="Trending / Most-Read" emptyState emptyMessage="Trending pages coming soon." />
  }

  return (
    <HomeCard size="md" title="Trending / Most-Read">
      <BatchedList
        batches={batches.map((b) => ({
          batchDate: b.batchDate,
          label: b.label,
          items: b.pages.slice(0, 10).map((p) => ({
            key: p.url,
            title: p.title,
            url: p.url,
            meta: `${p.clicks.toLocaleString()} clicks`,
          })),
        }))}
      />
    </HomeCard>
  )
}
