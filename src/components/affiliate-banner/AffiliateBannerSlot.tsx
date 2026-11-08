'use client'

// Renders the affiliate banner of the current page at one insertion point of a post template. Looks the page up in
// lib/affiliate-banners/assignment.ts (all locales share the English entry). Returns nothing when the kill switch is off,
// on control pages, on pages outside the pilot, and when the page's placement is a different spot.
//   at = 'AP1' after the intro | 'AP2' after ~40% of the sections (fallback for "after the first compare table") | 'AP3' before related links

import { usePathname } from 'next/navigation'
import { bannerPlanFor } from '@/lib/affiliate-banners/lookup'
import type { BannerLocale, BannerPlacement } from '@/lib/affiliate-banners/types'
import { localeFromPath } from '@/lib/tracking/promo'
import { AffiliateBanner } from './AffiliateBanner'

export function AffiliateBannerSlot({ at }: { at: BannerPlacement }) {
  const pathname = usePathname() ?? ''
  const plan = bannerPlanFor(pathname)
  if (!plan || plan.placement !== at) return null
  return <AffiliateBanner plan={plan} locale={localeFromPath(pathname) as BannerLocale} />
}
