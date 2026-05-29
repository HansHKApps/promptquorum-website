'use client'

import type { ReactNode } from 'react'
import type { ArticleHighlight } from './hub-utils'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新' }

interface Props {
  highlight: ArticleHighlight
  children: ReactNode
  publishDate?: string
  dateModified?: string
  lang?: string
}

export function HubArticleCard({ highlight, children, publishDate, dateModified, lang = 'en' }: Props) {
  const { isHighlighted, isDimmed, reason } = highlight
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div
      className={`
        relative h-full transition-all duration-300 rounded-xl
        ${isDimmed ? 'opacity-[0.45]' : 'opacity-100'}
        ${isHighlighted ? 'ring-2 ring-blue-200 bg-blue-50/30' : ''}
        ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : ''}
        ${showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}
      `}
    >
      {isHighlighted && reason && (
        <span className="absolute -top-3 left-3 text-[10px] font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 z-10">
          {reason}
        </span>
      )}
      {showNew && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {NEW_LABEL[lang] ?? NEW_LABEL['en']}
        </span>
      )}
      {showUpdated && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-amber-500 border-2 border-amber-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {UPDATED_LABEL[lang] ?? UPDATED_LABEL['en']}
        </span>
      )}
      {children}
    </div>
  )
}
