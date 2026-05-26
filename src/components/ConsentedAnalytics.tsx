'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const STORAGE_KEY = 'analytics_consent'
const RECORD_VERSION = 1
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

function readAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return false
  if (raw === 'granted') return true
  if (raw === 'denied') return false
  try {
    const r = JSON.parse(raw) as { analytics?: boolean; ts?: number; version?: number }
    if (!r.ts || r.version !== RECORD_VERSION) return false
    if (Date.now() - r.ts > MAX_AGE_MS) return false
    return !!r.analytics
  } catch {
    return false
  }
}

export function ConsentedAnalytics() {
  const [enabled, setEnabled] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    setEnabled(readAnalyticsConsent())
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics?: boolean }>).detail
      setEnabled(!!detail?.analytics)
    }
    window.addEventListener('consent-changed', handler)
    return () => window.removeEventListener('consent-changed', handler)
  }, [])

  if (!hydrated || !enabled) return null

  return (
    <>
      <Script
        id="umami-script"
        strategy="afterInteractive"
        src="/api/stats/script.js"
        data-website-id="1a0d1160-11ea-4882-a110-90fd9e5ebb75"
        data-host-url="/api/stats"
      />
      <Analytics endpoint="/api/data" scriptSrc="/api/data/script.js" />
      <SpeedInsights />
    </>
  )
}
