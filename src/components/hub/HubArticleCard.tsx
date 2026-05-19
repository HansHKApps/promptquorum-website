'use client'

import type { ReactNode } from 'react'
import type { ArticleHighlight } from './hub-utils'

interface Props {
  highlight: ArticleHighlight
  children: ReactNode
}

export function HubArticleCard({ highlight, children }: Props) {
  const { isHighlighted, isDimmed, reason } = highlight

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
      {children}
    </div>
  )
}
