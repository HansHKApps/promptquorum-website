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
 * Microsoft Clarity always loads, in cookieless mode (consentv2 storage denied): it
 * counts visits without cookies or persistent IDs, as before the cookie dialog.
 * Allowing "Session recordings" upgrades it to full mode (cookies + replay);
 * withdrawing drops back to cookieless and deletes Clarity's cookies.
 */
export function ClarityLoader() {
  useEffect(() => {
    injectClarity()
    window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
    let upgraded = false
    return onConsentChange(() => {
      if (hasConsent('recordings')) {
        upgraded = true
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
      } else if (upgraded) {
        upgraded = false
        window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
        clearClarityCookies()
      }
    })
  }, [])

  return null
}
