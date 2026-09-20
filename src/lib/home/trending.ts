import trendingData from '@/data/home/trending.json'
import type { Language } from '@/lib/blog/blogContent'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { t } from '@/components/home/home-i18n'

export interface TrendingPage {
  url: string
  title: string
  clicks: number
  impressions: number
}

export interface TrendingBatch {
  batchDate: string
  label: string
  pages: TrendingPage[]
}

/**
 * Dated GSC snapshots, newest first. Each batch is one manual export Hans
 * hands off (a trailing-28-day window, not a calendar week — GSC's own
 * export shape, English pages only). The block shows the newest batch's
 * pages by default and reveals older batches, each still labeled with its
 * own date, on expand.
 *
 * Titles stay in English (this is raw GSC data, not per-locale content) —
 * only the URL is locale-prefixed, so a non-English visitor still lands on
 * that locale's version of the article. The batch `label` in the data file
 * is a hand-authored English fallback; it's rebuilt here from `batchDate`
 * via the localized "Snapshot as of {date}" template so the label itself
 * (unlike the page titles) is genuinely per-locale.
 */
export function getTrendingBatches(lang: Language = 'en'): TrendingBatch[] {
  return (trendingData.batches as TrendingBatch[])
    .slice()
    .sort((a, b) => b.batchDate.localeCompare(a.batchDate))
    .map((batch) => ({
      ...batch,
      label: t('snapshotAsOfTemplate', lang, { date: formatDisplayDate(batch.batchDate, lang) }),
      pages: batch.pages.map((page) => ({
        ...page,
        url: lang === 'en' ? page.url : `/${lang}${page.url}`,
      })),
    }))
}
