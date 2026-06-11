'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

export function ClarityRouteTracker() {
  const pathname = usePathname()
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      // Update page tag so Clarity segments sessions by path in the dashboard
      window.clarity('set', 'page', window.location.href)
      // Fire a named event as a secondary signal for route changes
      window.clarity('event', 'routeChange')
    }
  }, [pathname])

  return null
}
