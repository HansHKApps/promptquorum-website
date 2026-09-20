import type { Language } from '@/lib/blog/blogContent'
import { getFounderReviews } from '@/lib/home/founder-reviews'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'
import { t } from './home-i18n'

export function FounderReviewsBlock({ lang = 'en' }: { lang?: Language }) {
  const reviews = getFounderReviews(lang)

  if (reviews.length === 0) {
    return (
      <HomeCard
        size="md"
        title={t('founderReviewsTitle', lang)}
        emptyState
        emptyMessage={t('founderReviewsEmpty', lang)}
      />
    )
  }

  return (
    <HomeCard size="md" title={t('founderReviewsTitle', lang)}>
      <ExpandableList
        lang={lang}
        items={reviews.map((r) => ({
          key: r.slug,
          title: r.appName,
          url: r.url,
          description: r.founderWho ? `${r.founderWho} — ${r.excerpt}` : r.excerpt,
          date: formatDisplayDate(r.date, lang),
        }))}
      />
    </HomeCard>
  )
}
