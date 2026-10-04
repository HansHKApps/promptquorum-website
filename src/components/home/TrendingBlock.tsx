import type { Language } from '@/lib/blog/blogContent'
import { getTrendingBatches } from '@/lib/home/trending'
import { HomeCard } from './HomeCard'
import { BatchedList } from './BatchedList'
import { t } from './home-i18n'
import { LANG_COUNTRY, type Lang } from '@/lib/i18n/constants'

export function TrendingBlock({ lang = 'en' }: { lang?: Language }) {
  const batches = getTrendingBatches(lang)
  const languageNames = new Intl.DisplayNames([lang], { type: 'language' })

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
          items: b.pages.slice(0, 20).map((p) => ({
            key: p.url,
            title: p.title,
            url: p.url,
            meta: t('clicksLabel', lang, { n: p.clicks.toLocaleString() }),
            flag: {
              country: LANG_COUNTRY[(p.lang ?? 'en') as Lang],
              label: languageNames.of(p.lang ?? 'en') ?? (p.lang ?? 'en'),
            },
          })),
        }))}
      />
    </HomeCard>
  )
}
