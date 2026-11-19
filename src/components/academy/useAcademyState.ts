'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ACADEMY_STATE_EVENT } from '@/lib/academy/config'
import { clearAcademyState, emptyAcademyState, loadAcademyState, saveAcademyState } from '@/lib/academy/store'
import type { AcademyState } from '@/lib/academy/types'

/**
 * Academy state. It lives in memory; it is written to localStorage ONLY while the learner has ticked
 * "Save my progress in this browser" (draft.saveProgress). Without the tick a reload starts fresh.
 *
 * Progress saved earlier is never restored silently: it is offered as `pending` ("Continue" / "Start new").
 * `ready` stays false during server render and the first client render, so the page never flashes an empty form.
 * `saved` is false when the browser refused to store.
 */
export function useAcademyState() {
  const [state, setState] = useState<AcademyState>(emptyAcademyState)
  const [ready, setReady] = useState(false)
  const [saved, setSaved] = useState(true)
  const [pending, setPending] = useState<AcademyState | null>(null)
  // Latest state for update(), so the storage write happens once, outside React's updater function.
  const current = useRef(state)
  current.current = state
  // True once this tab wrote to storage, so untick / "Start new" knows there is something to remove.
  const wrote = useRef(false)

  useEffect(() => {
    const found = loadAcademyState()
    if (found.draft) setPending(found)
    setReady(true)
    // "Delete my data" cleared storage: drop the in-memory copy too.
    const reset = () => {
      current.current = emptyAcademyState()
      wrote.current = false
      setState(current.current)
      setPending(null)
    }
    window.addEventListener(ACADEMY_STATE_EVENT, reset)
    return () => window.removeEventListener(ACADEMY_STATE_EVENT, reset)
  }, [])

  /** persist=false keeps the change in memory only (an untouched default form is never written to storage). */
  const update = useCallback((fn: (s: AcademyState) => AcademyState, persist = true) => {
    const next = fn(current.current)
    current.current = next
    setState(next)
    if (!persist) return
    if (next.draft?.saveProgress) {
      wrote.current = true
      setPending(null)
      setSaved(saveAcademyState(next))
    } else if (wrote.current) {
      // The learner unticked the box: remove what this tab stored.
      wrote.current = false
      clearAcademyState()
    }
  }, [])

  /** "Continue": load the saved progress into the tool. */
  const continueSaved = useCallback(() => {
    if (!pending) return
    current.current = pending
    wrote.current = true
    setState(pending)
    setPending(null)
  }, [pending])

  /** "Start new": delete the saved progress and begin with an empty form. */
  const discardSaved = useCallback(() => {
    clearAcademyState()
    wrote.current = false
    setPending(null)
  }, [])

  return { state, ready, saved, pending, continueSaved, discardSaved, update }
}
