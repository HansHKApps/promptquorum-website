'use client'

import { useEffect, useState } from 'react'
import { readHubSignals, type HubSignal } from './hub-utils'

export function useHubSignals(slugToThemeId?: Record<string, string>) {
  const [signal, setSignal] = useState<HubSignal>({ type: 'none' })

  useEffect(() => {
    let s = readHubSignals()

    // Resolve referrer theme from slug using the slug→themeId map
    if (s.type === 'referrer' && slugToThemeId) {
      try {
        const prevPage = sessionStorage.getItem('pq_previous_page') ?? ''
        const slug = prevPage.split('/prompt-engineering/').pop()?.split('?')[0] ?? ''
        const themeId = slug ? slugToThemeId[slug] : undefined
        if (themeId) {
          s = { ...s, relatedThemes: [themeId] }
        }
      } catch { /* ignore */ }
    }

    setSignal(s)
  }, []) // slugToThemeId is a module-level constant — stable across renders

  const setLevel = (level: string) => {
    const newSignal: HubSignal = { type: 'level', level }
    setSignal(newSignal)
    try {
      sessionStorage.setItem('pq_level_selection', JSON.stringify({
        hub: 'prompt-engineering',
        value: level,
        timestamp: Date.now(),
      }))
    } catch { /* ignore */ }
  }

  const clearLevel = () => {
    setSignal({ type: 'none' })
    try {
      sessionStorage.removeItem('pq_level_selection')
    } catch { /* ignore */ }
  }

  return { signal, setLevel, clearLevel }
}
