'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const STORAGE_KEY = 'analytics_consent'
const RECORD_VERSION = 1
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000
const CLARITY_PROJECT_ID = 'wtwpeavhum'

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

// Microsoft Clarity loader — same IIFE as the original head snippet, but storage is
// GRANTED because this script only renders after the visitor accepts Analytics consent.
// next/script dedupes by `id`, so it never injects twice across consent changes / re-renders.
const CLARITY_SNIPPET = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="/api/clarity/tag/${CLARITY_PROJECT_ID}";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");window.clarity('consentv2',{ad_Storage:'granted',analytics_Storage:'granted'});`

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

  // Gate: nothing loads during SSR/first paint or before Analytics consent is granted.
  if (!hydrated || !enabled) return null

  return (
    <>
      <Script
        id="umami-script"
        strategy="afterInteractive"
        src="/lib/s/script.js"
        data-website-id="1a0d1160-11ea-4882-a110-90fd9e5ebb75"
        data-host-url="/lib/s"
      />
      <Script
        id="ms-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: CLARITY_SNIPPET }}
      />
      <Analytics endpoint="/api/data" scriptSrc="/api/data/script.js" />
      <SpeedInsights />
    </>
  )
}
