'use client'

import type { FuseResult } from 'fuse.js'
import type { SearchEntry } from './search-utils'
import { HUB_DOT_COLOR, LEVEL_PILL, HUB_LABELS, applyHighlight } from './search-utils'

interface Props {
  result: FuseResult<SearchEntry>
  isActive: boolean
  onMouseEnter: () => void
  onClick: () => void
}

export function SearchResultItem({ result, isActive, onMouseEnter, onClick }: Props) {
  const { item, matches } = result
  const titleParts = applyHighlight(item.title, matches, 'title')

  return (
    <button
      role="option"
      aria-selected={isActive}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`w-full text-left px-3 py-2.5 flex items-start gap-3 rounded-lg transition-colors min-h-[48px] ${
        isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
      }`}
    >
      {/* Hub color dot */}
      <span
        className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${HUB_DOT_COLOR[item.hub] ?? 'bg-gray-400'}`}
        aria-hidden="true"
      />

      <div className="flex-1 min-w-0">
        {/* Title with highlight */}
        <p className="text-sm font-medium text-gray-900 truncate">
          {titleParts.map((part, i) =>
            part.highlight ? (
              <mark key={i} className="bg-yellow-100 text-gray-900 rounded-sm">
                {part.text}
              </mark>
            ) : (
              <span key={i}>{part.text}</span>
            ),
          )}
        </p>

        {/* Breadcrumb + level */}
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          <span className="text-xs text-gray-400 truncate">
            {HUB_LABELS[item.hub] ?? item.hub}
            {item.section ? ` → ${item.section}` : ''}
          </span>
          {item.level && item.level !== 'all' && (
            <span
              className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                LEVEL_PILL[item.level] ?? LEVEL_PILL.all
              }`}
            >
              {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}
