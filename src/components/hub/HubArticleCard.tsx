'use client'

import type { ReactNode } from 'react'
import type { ArticleHighlight } from './hub-utils'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'

interface Props {
  highlight: ArticleHighlight
  children: ReactNode
  publishDate?: string
  dateModified?: string
}

export function HubArticleCard({ highlight, children, publishDate, dateModified }: Props) {
  const { isHighlighted, isDimmed, reason } = highlight
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div
      className={`
        relative transition-all duration-300 rounded-lg
        ${isDimmed ? 'opacity-[0.45]' : 'opacity-100'}
        ${isHighlighted ? 'ring-2 ring-blue-200 bg-blue-50/30' : ''}
      `}
    >
      {isHighlighted && reason && (
        <span className="absolute -top-2.5 left-3 text-[10px] font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 z-10">
          {reason}
        </span>
      )}
      {showNew && (
        <span className="absolute -top-2.5 right-3 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 z-10">
          New
        </span>
      )}
      {showUpdated && (
        <span className="absolute -top-2.5 right-3 text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2 py-0.5 z-10">
          Updated
        </span>
      )}
      {children}
    </div>
  )
}
