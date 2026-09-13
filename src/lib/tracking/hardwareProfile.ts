import { track } from '@vercel/analytics'
import type { HardwareProfile } from '@/components/local-ai-directory/types'

// Fires one anonymous, bucketed event when a viewer explicitly saves their
// directory hardware profile — never the exact numbers, never anything
// identifying. Reuses the site's existing general "Analytics" consent
// category (see CookieBanner.tsx's ConsentRecord.analytics) rather than
// adding a new consent checkbox: that category is already described to
// visitors as "anonymous usage stats" from Vercel Analytics/Umami/etc.,
// which is exactly what this is. If analytics consent was never granted,
// this is a silent no-op — the profile itself already never leaves the
// browser regardless of this function.

const CONSENT_STORAGE_KEY = 'analytics_consent'

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return false
    if (raw === 'granted') return true // legacy string form, pre-categories
    if (raw === 'denied') return false
    const parsed = JSON.parse(raw) as { analytics?: boolean }
    return !!parsed.analytics
  } catch {
    return false
  }
}

/** Coarse, non-identifying buckets — never the raw number. */
function bucket(n: number, edges: number[]): string {
  for (let i = 0; i < edges.length; i++) {
    if (n < edges[i]) return i === 0 ? `<${edges[i]}` : `${edges[i - 1]}-${edges[i]}`
  }
  return `${edges[edges.length - 1]}+`
}

const RAM_EDGES = [8, 16, 32, 64]
const VRAM_EDGES = [4, 8, 16, 24]

/**
 * Called right after a viewer clicks "Save my setup" in HardwareProfileWidget
 * — never on page load, never on the navigator.deviceMemory pre-fill, only
 * on the explicit save action, matching the same click-only discipline the
 * profile's own localStorage write already follows.
 */
export function trackHardwareProfileSaved(profile: HardwareProfile): void {
  if (!hasAnalyticsConsent()) return

  const payload: Record<string, string> =
    profile.machine === 'dgpu'
      ? { machine: 'dgpu', ram_bucket: bucket(profile.ramGb, RAM_EDGES), vram_bucket: bucket(profile.vramGb, VRAM_EDGES) }
      : profile.machine === 'cpu' || profile.machine === 'ios' || profile.machine === 'android'
        ? { machine: profile.machine, ram_bucket: bucket(profile.ramGb, RAM_EDGES) }
        : { machine: 'apple', unified_bucket: bucket(profile.unifiedGb, RAM_EDGES) }

  try {
    window.umami?.track('hardware_profile_saved', payload)
  } catch {
    // silent — umami might be blocked
  }
  try {
    track('hardware_profile_saved', payload)
  } catch {
    // silent
  }
}
