'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPromoLanding } from '@/lib/tracking/promo'

// Mounted once in the root layout. On /directory and /mcp-stats (all 9 locales, also sub-pages of /directory) it fires
// directory_promo_landing / mcp_promo_landing once per page view when the URL has `via=promo_<target>_<placement>`.
// Reads window.location.search directly (no useSearchParams, so no Suspense boundary is forced on the layout).
const LANDING_PATH = /^(?:\/(?:de|fr|ja|zh|es|pt|ar|ko))?\/(?:directory|mcp-stats)(?:\/|$)/

export function PromoLanding() {
  const pathname = usePathname() ?? ''
  useEffect(() => {
    if (LANDING_PATH.test(pathname)) trackPromoLanding()
  }, [pathname])
  return null
}
