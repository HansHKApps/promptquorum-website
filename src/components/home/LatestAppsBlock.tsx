import { getLatestApps } from '@/lib/home/apps-feed'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'

export function LatestAppsBlock() {
  const apps = getLatestApps()

  if (apps.length === 0) {
    return <HomeCard size="md" title="Latest Apps Added" emptyState emptyMessage="New apps coming soon." />
  }

  return (
    <HomeCard size="md" title="Latest Apps Added">
      <ExpandableList
        items={apps.map((a) => ({
          key: a.slug,
          title: a.name,
          url: a.url,
          description: `${a.tagline} — ${CATEGORY_SUB_LABEL[a.category as CategorySubKey]?.en ?? a.category}`,
          date: formatDisplayDate(a.addedDate, 'en'),
        }))}
      />
    </HomeCard>
  )
}
