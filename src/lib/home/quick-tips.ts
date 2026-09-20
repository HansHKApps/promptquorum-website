import tipsData from '@/data/home/quick-tips.json'

export interface QuickTip {
  id: string
  text: string
  sourceTitle: string
  sourceUrl: string
}

/** One random tip per page load (simplest option — this is a `revalidate: 86400` static page, so a real per-week rotation would need ISO-week-based selection instead; not needed for this pass). */
export function getRotatingTip(): QuickTip {
  const tips = tipsData.tips as QuickTip[]
  return tips[Math.floor(Math.random() * tips.length)]
}
