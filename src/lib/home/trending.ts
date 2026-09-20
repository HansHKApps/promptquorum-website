import trendingData from '@/data/home/trending.json'

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
 * export shape). The block shows the newest batch's pages by default and
 * reveals older batches, each still labeled with its own date, on expand.
 */
export function getTrendingBatches(): TrendingBatch[] {
  return (trendingData.batches as TrendingBatch[])
    .slice()
    .sort((a, b) => b.batchDate.localeCompare(a.batchDate))
}
