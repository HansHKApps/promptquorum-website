'use client'

// PromptQuorum Academy — one activity tracker for the whole tool (lessons and tests). It counts active seconds while the
// page is visible and the learner did something (click, key, scroll, touch) within the last minute (SPEC 6.1). After a
// minute without an action nothing is counted until the next action, which also starts a new session.
// The seconds are booked on the stored programme and stay in this browser.

import { useEffect, useRef } from 'react'
import { ACADEMY_IDLE_AFTER_MS, ACADEMY_TICK_SECONDS } from '@/lib/academy/config'

export type ActivityTarget = { kind: 'lesson' | 'test'; id: string } | null

export function ActivityTracker({ target, onTick }: { target: ActivityTarget; onTick: (target: NonNullable<ActivityTarget>, seconds: number, newSession: boolean) => void }) {
  const lastAction = useRef(0)
  // Opening the window (or reloading) starts a session; so does the first action after a pause.
  const newSession = useRef(true)
  const live = useRef({ target, onTick })
  useEffect(() => {
    live.current = { target, onTick }
  })
  useEffect(() => {
    // The window just opened: the learner is present now.
    lastAction.current = Date.now()
    const mark = () => {
      const now = Date.now()
      if (now - lastAction.current >= ACADEMY_IDLE_AFTER_MS) newSession.current = true
      lastAction.current = now
    }
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel'] as const
    events.forEach((e) => window.addEventListener(e, mark, { passive: true }))
    const id = window.setInterval(() => {
      const { target: t, onTick: tick } = live.current
      if (!t || document.visibilityState !== 'visible' || Date.now() - lastAction.current >= ACADEMY_IDLE_AFTER_MS) return
      tick(t, ACADEMY_TICK_SECONDS, newSession.current)
      newSession.current = false
    }, ACADEMY_TICK_SECONDS * 1000)
    return () => {
      events.forEach((e) => window.removeEventListener(e, mark))
      window.clearInterval(id)
    }
  }, [])
  return null
}
