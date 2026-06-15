'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

function getAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem('analytics_consent')
    if (!raw) return false
    if (raw === 'granted') return true
    if (raw === 'denied') return false
    const parsed = JSON.parse(raw) as { analytics?: boolean }
    return !!parsed.analytics
  } catch {
    return false
  }
}

// Called on mount and on every consent-changed event.
// The inline snippet in layout.tsx queues consentv2({analytics_Storage:"denied"}) as the
// privacy-first default. Here we override to "granted" for visitors who accepted analytics,
// which enables Clarity's session cookie (_clsk) and fixes the Pages:1 issue caused by
// cookieless mode creating a new session on every SPA navigation.
function applyClarityConsent() {
  if (typeof window === 'undefined' || typeof window.clarity !== 'function') return
  window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: getAnalyticsConsent() ? 'granted' : 'denied',
  })
}

export function ClarityRouteTracker() {
  const pathname = usePathname()
  const isFirstRun = useRef(true)

  // Apply consent on mount and whenever the user changes their cookie preference
  useEffect(() => {
    applyClarityConsent()
    const handler = () => applyClarityConsent()
    window.addEventListener('consent-changed', handler)
    return () => window.removeEventListener('consent-changed', handler)
  }, [])

  // Tag each SPA navigation with the current URL for Clarity's custom dimensions
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
