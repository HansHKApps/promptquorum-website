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
 * Microsoft Clarity records sessions (replay + heatmaps), so it is its own consent
 * category. The tag is not downloaded until the visitor allows "Session recordings";
 * withdrawing stops recording and deletes Clarity's cookies.
 */
export function ClarityLoader() {
  useEffect(() => {
    let loaded = false
    return onConsentChange(() => {
      if (hasConsent('recordings')) {
        if (!loaded) {
          injectClarity()
          loaded = true
        }
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
        window.clarity?.('start')
      } else if (loaded) {
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
        window.clarity?.('stop')
        clearClarityCookies()
      }
    })
  }, [])

  return null
}
