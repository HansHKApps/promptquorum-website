'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ACADEMY_STATE_EVENT } from '@/lib/academy/config'
import { emptyAcademyState, loadAcademyState, saveAcademyState } from '@/lib/academy/store'
import type { AcademyState } from '@/lib/academy/types'

/**
 * Academy state from localStorage. `ready` stays false during server render and the first client render, so the
 * page never flashes an empty form over a restored one. `saved` is false when the browser refused to store.
 */
export function useAcademyState() {
  const [state, setState] = useState<AcademyState>(emptyAcademyState)
  const [ready, setReady] = useState(false)
  const [saved, setSaved] = useState(true)
  // Latest state for update(), so the storage write happens once, outside React's updater function.
  const current = useRef(state)
  current.current = state

  useEffect(() => {
    const reload = () => setState(loadAcademyState())
    reload()
    setReady(true)
    window.addEventListener(ACADEMY_STATE_EVENT, reload)
    // Another tab changed the state.
    window.addEventListener('storage', reload)
    return () => {
      window.removeEventListener(ACADEMY_STATE_EVENT, reload)
      window.removeEventListener('storage', reload)
    }
  }, [])

  /** persist=false keeps the change in memory only (an untouched default form is never written to storage). */
  const update = useCallback((fn: (s: AcademyState) => AcademyState, persist = true) => {
    const next = fn(current.current)
    current.current = next
    setState(next)
    if (persist) setSaved(saveAcademyState(next))
  }, [])

  return { state, ready, saved, update }
}
