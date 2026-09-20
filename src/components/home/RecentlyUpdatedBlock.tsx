import { getRecentlyUpdated } from '@/lib/home/content-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'

export function RecentlyUpdatedBlock() {
  const updated = getRecentlyUpdated()

  if (updated.length === 0) {
    return <HomeCard size="md" title="Recently Updated Content" emptyState emptyMessage="Updated content tracking coming soon." />
  }

  return (
    <HomeCard size="md" title="Recently Updated Content">
      <ExpandableList
        items={updated.map((u) => ({
          key: u.url,
          title: u.title,
          url: u.url,
          date: `Updated ${formatDisplayDate(u.dateModified, 'en')}`,
        }))}
      />
    </HomeCard>
  )
}
