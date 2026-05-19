// src/components/hub/hub-utils.ts

export interface HubSignal {
  type: 'search' | 'referrer' | 'level' | 'none'
  level?: string           // 'beginner' | 'intermediate' | 'advanced'
  relatedThemes?: string[] // theme IDs from the referrer article or search section
  relatedTags?: string[]   // tags from search result
  query?: string           // original search query
}

export interface ArticleHighlight {
  isHighlighted: boolean
  isDimmed: boolean
  reason?: string  // "Matches your search" | "Related to what you just read" | "For your level"
}

/**
 * Read all available signals from sessionStorage.
 * Returns the highest-priority signal found.
 */
export function readHubSignals(): HubSignal {
  if (typeof window === 'undefined') return { type: 'none' }

  // Signal 1: Search query (highest priority)
  try {
    const searchRaw = sessionStorage.getItem('pq_last_search')
    if (searchRaw) {
      const search = JSON.parse(searchRaw)
      // Only use if < 5 minutes old
      if (Date.now() - search.timestamp < 5 * 60 * 1000) {
        return {
          type: 'search',
          level: search.resultLevel || undefined,
          relatedThemes: search.resultSection ? [search.resultSection] : [],
          relatedTags: search.resultTags || [],
          query: search.query,
        }
      }
    }
  } catch { /* ignore parse errors */ }

  // Signal 2: Internal referrer
  try {
    const prevPage = sessionStorage.getItem('pq_previous_page')
    if (prevPage && prevPage.includes('/prompt-engineering/')) {
      return {
        type: 'referrer',
        relatedThemes: [], // resolved by useHubSignals using slugToThemeId map
        relatedTags: [],
      }
    }
  } catch { /* ignore */ }

  // Signal 3: Level selection (persists in sessionStorage)
  try {
    const levelRaw = sessionStorage.getItem('pq_level_selection')
    if (levelRaw) {
      const level = JSON.parse(levelRaw)
      if (level.hub === 'prompt-engineering') {
        return { type: 'level', level: level.value }
      }
    }
  } catch { /* ignore */ }

  return { type: 'none' }
}

/**
 * Map level button labels to educationalLevel values in article metadata
 */
export const LEVEL_MAP: Record<string, string[]> = {
  beginner:     ['beginner'],
  intermediate: ['intermediate'],
  advanced:     ['advanced', 'technical'],
}

/**
 * Determine highlight state for a single article based on active signal
 */
export function getArticleHighlight(
  signal: HubSignal,
  articleLevel: string,
  articleTheme: string,
  articleTags: string[],
): ArticleHighlight {
  if (signal.type === 'none') {
    return { isHighlighted: false, isDimmed: false }
  }

  if (signal.type === 'level' && signal.level) {
    const matchLevels = LEVEL_MAP[signal.level] || []
    const matches = matchLevels.some(l => l === articleLevel.toLowerCase())
    return {
      isHighlighted: matches,
      isDimmed: !matches,
    }
  }

  if (signal.type === 'search') {
    const themeMatch = signal.relatedThemes?.some(
      t => t.toLowerCase() === articleTheme.toLowerCase()
    )
    const tagMatch = signal.relatedTags?.some(
      t => articleTags.some(at => at.toLowerCase().includes(t.toLowerCase()))
    )
    const matches = themeMatch || tagMatch
    return {
      isHighlighted: !!matches,
      isDimmed: false, // don't dim for search — just highlight matches
      reason: matches ? 'Matches your search' : undefined,
    }
  }

  if (signal.type === 'referrer') {
    const themeMatch = signal.relatedThemes?.some(
      t => t.toLowerCase() === articleTheme.toLowerCase()
    )
    return {
      isHighlighted: !!themeMatch,
      isDimmed: false,
      reason: themeMatch ? 'Related to what you just read' : undefined,
    }
  }

  return { isHighlighted: false, isDimmed: false }
}
