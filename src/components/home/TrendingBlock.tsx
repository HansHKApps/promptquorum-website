import type { Language } from '@/lib/blog/blogContent'
import { getTrendingBatches } from '@/lib/home/trending'
import { HomeCard } from './HomeCard'
import { BatchedList } from './BatchedList'
import { t } from './home-i18n'

export function TrendingBlock({ lang = 'en' }: { lang?: Language }) {
  const batches = getTrendingBatches(lang)

  if (batches.length === 0) {
    return <HomeCard size="md" icon="trending" title={t('trendingTitle', lang)} emptyState emptyMessage={t('trendingEmpty', lang)} />
  }

  return (
    <HomeCard size="md" icon="trending" title={t('trendingTitle', lang)}>
      <BatchedList
        lang={lang}
        batches={batches.map((b) => ({
          batchDate: b.batchDate,
          label: b.label,
          items: b.pages.slice(0, 10).map((p) => ({
            key: p.url,
            title: p.title,
            url: p.url,
            meta: t('clicksLabel', lang, { n: p.clicks.toLocaleString() }),
          })),
        }))}
      />
    </HomeCard>
  )
}
