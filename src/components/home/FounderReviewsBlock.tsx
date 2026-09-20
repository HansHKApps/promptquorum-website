import { getFounderReviews } from '@/lib/home/founder-reviews'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'

export function FounderReviewsBlock() {
  const reviews = getFounderReviews()

  if (reviews.length === 0) {
    return (
      <HomeCard
        size="md" icon="review"
        title="Latest Founder/Maker Reviews"
        emptyState
        emptyMessage="Founder reviews are being added — check back soon."
      />
    )
  }

  return (
    <HomeCard size="md" icon="review" title="Latest Founder/Maker Reviews">
      <ExpandableList
        items={reviews.map((r) => ({
          key: r.slug,
          title: r.appName,
          url: r.url,
          description: r.founderWho ? `${r.founderWho} — ${r.excerpt}` : r.excerpt,
          date: formatDisplayDate(r.date, 'en'),
        }))}
      />
    </HomeCard>
  )
}
