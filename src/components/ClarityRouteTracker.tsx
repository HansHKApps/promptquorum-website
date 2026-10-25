'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Tags each SPA navigation with the current URL for Clarity's custom dimensions.
// window.clarity only exists once ClarityLoader has loaded the tag, which happens
// only with "Session recordings" consent, so this is a no-op otherwise.
export function ClarityRouteTracker() {
  const pathname = usePathname()
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('set', 'page', window.location.href)
    }
  }, [pathname])

  return null
}
