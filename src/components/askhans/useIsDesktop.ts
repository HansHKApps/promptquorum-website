'use client'

import { useEffect, useState } from 'react'
import { ASK_HANS_WINDOW } from '@/lib/askhans/config'

/** true from the mobile breakpoint upward (matches Tailwind `md`). Client-only: the widget mounts after hydration. */
export function useIsDesktop(): boolean {
  const query = `(min-width: ${ASK_HANS_WINDOW.mobileBreakpointPx}px)`
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setIsDesktop(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return isDesktop
}
