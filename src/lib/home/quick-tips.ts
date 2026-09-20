import tipsData from '@/data/home/quick-tips.json'
import type { Language } from '@/lib/blog/blogContent'

export interface QuickTip {
  id: string
  text: string
  sourceTitle: string
  sourceUrl: string
}

interface RawQuickTip {
  id: string
  text: Partial<Record<Language, string>>
  sourceTitle: string
  sourceUrl: string
}

/** One random tip per page load (simplest option — this is a `revalidate: 86400` static page, so a real per-week rotation would need ISO-week-based selection instead; not needed for this pass). */
export function getRotatingTip(lang: Language = 'en'): QuickTip {
  const tips = tipsData.tips as RawQuickTip[]
  const raw = tips[Math.floor(Math.random() * tips.length)]
  return {
    id: raw.id,
    text: raw.text[lang] ?? raw.text.en ?? '',
    sourceTitle: raw.sourceTitle,
    sourceUrl: lang === 'en' ? raw.sourceUrl : `/${lang}${raw.sourceUrl}`,
  }
}
