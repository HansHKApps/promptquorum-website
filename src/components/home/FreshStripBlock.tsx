import type { Language } from '@/lib/blog/blogContent'
import { FRESH_DAYS } from '@/lib/home/fresh-age'
import { getFreshItems, type FreshItem } from '@/lib/home/fresh-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { FreshStripClient } from './FreshStripClient'
import { t, type HomeUiKey } from './home-i18n'

const KIND_LABEL_KEY: Record<FreshItem['kind'], HomeUiKey> = {
  review: 'freshKindReview',
  test: 'freshKindTest',
  app: 'freshKindApp',
  guide: 'freshKindGuide',
}

/**
 * "Just published" band above the homepage tiers: everything that went live in the last
 * FRESH_DAYS days (new articles + new directory apps), loudest element on the page by design.
 * Candidates are picked at build time; FreshStripClient then re-checks them against the visitor's
 * clock so the relative age and the 3-day window never go stale between deploys. Renders nothing
 * when there is no such item — an always-visible "nothing new" band would train readers to ignore it.
 */
export function FreshStripBlock({ lang = 'en' }: { lang?: Language }) {
  const items = getFreshItems(lang)
  if (items.length === 0) return null

  return (
    <FreshStripClient
      items={items.map((item) => ({
        key: item.key,
        url: item.url,
        title: item.title,
        description: item.description,
        kindLabel: t(KIND_LABEL_KEY[item.kind], lang),
        isoDate: item.date,
        dateDisplay: formatDisplayDate(item.date, lang),
      }))}
      labels={{
        title: t('freshTitle', lang),
        subtitle: t('freshSubtitleTemplate', lang, { n: FRESH_DAYS }),
        newPill: t('freshNew', lang),
        today: t('freshToday', lang),
        yesterday: t('freshYesterday', lang),
        daysAgoTemplate: t('freshDaysAgoTemplate', lang),
      }}
    />
  )
}
