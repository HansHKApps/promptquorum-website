'use client'

import { useEffect } from 'react'
import { clearClarityCookies, hasConsent, onConsentChange } from '@/lib/consent'

const CLARITY_PROJECT_ID = 'wtwpeavhum'

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

function injectClarity() {
  if (document.getElementById('clarity-sdk')) return
  // Standard Clarity bootstrap: queue calls until the tag has loaded.
  window.clarity =
    window.clarity ||
    function (...args: unknown[]) {
      const q = ((window.clarity as unknown as { q?: unknown[] }).q ??= [])
      q.push(args)
    }
  const script = document.createElement('script')
  script.id = 'clarity-sdk'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
  document.head.appendChild(script)
}

/**
 * Microsoft Clarity loads ONLY after the visitor allowed "Analytics" or "Session recordings" (QA audit F2,
 * owner decision 2026-11-19). Before that, and after "Reject all", no request goes to clarity.ms and nothing is
 * stored. "Analytics" alone runs it cookieless (consentv2 storage denied); "Session recordings" upgrades it to
 * full mode (cookies + replay). Withdrawing consent switches it back to denied and deletes its cookies and
 * session key; the already-loaded script cannot be unloaded, so it stays idle until the next page load.
 */
export function ClarityLoader() {
  useEffect(() => {
    let loaded = false
    return onConsentChange(() => {
      const recordings = hasConsent('recordings')
      const analytics = hasConsent('analytics')
      if (recordings || analytics) {
        if (!loaded) {
          loaded = true
          injectClarity()
        }
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: recordings ? 'granted' : 'denied' })
      } else if (loaded) {
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
        clearClarityCookies()
        try {
          window.sessionStorage.removeItem('_cltk')
        } catch {
          /* ignore */
        }
      }
    })
  }, [])

  return null
}
