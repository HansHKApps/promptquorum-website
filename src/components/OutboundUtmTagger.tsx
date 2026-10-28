'use client'

import { useEffect } from 'react'
import { campaignForPath, isAmazonHost, withUtm } from '@/lib/outbound-utm'

// Adds our source tag (src/lib/outbound-utm.ts) to an outbound link the moment a visitor reaches
// for it: hover, keyboard focus, touch, or right/middle click. That is before the click is
// resolved, so normal, new-tab and "copy link" all carry the tag and the browser status bar shows
// it. Crawlers never interact, so server HTML and structured data keep the clean URL.
// Amazon is the exception: it ignores utm_*, so its links keep the plain URL and instead lose
// rel="noreferrer" and send our origin (https://www.promptquorum.com/, never the page path) as the
// Referer, which is what Amazon's own logs show. No affiliate tag or parameter is ever added.
// Opt out for a single link with data-no-utm.

const EVENTS = ['mouseover', 'focusin', 'touchstart', 'pointerdown', 'contextmenu', 'auxclick'] as const

function tag(e: Event) {
  const target = e.target
  if (!(target instanceof Element)) return
  const a = target.closest('a[href]')
  if (!(a instanceof HTMLAnchorElement) || a.hasAttribute('data-no-utm')) return
  const href = a.getAttribute('href') ?? ''
  if (!/^https?:\/\//i.test(href)) return
  let host = ''
  try {
    host = new URL(href).hostname.toLowerCase().replace(/^www\./, '')
  } catch {
    return
  }
  if (isAmazonHost(host)) {
    if (/\bnoreferrer\b/.test(a.rel)) a.rel = a.rel.replace(/\bnoreferrer\b/g, '').replace(/\s+/g, ' ').trim()
    if (a.referrerPolicy !== 'origin') a.referrerPolicy = 'origin'
    return
  }
  const tagged = withUtm(href, { campaign: campaignForPath(window.location.pathname) })
  if (tagged !== href) a.setAttribute('href', tagged)
}

export function OutboundUtmTagger() {
  useEffect(() => {
    for (const ev of EVENTS) document.addEventListener(ev, tag, { capture: true, passive: true })
    return () => {
      for (const ev of EVENTS) document.removeEventListener(ev, tag, { capture: true })
    }
  }, [])
  return null
}
