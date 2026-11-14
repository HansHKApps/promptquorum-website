'use client'

import { useEffect } from 'react'
import { installAdblockCheck } from '@/lib/tracking/umami-events'

// Mounted once in the root layout. Runs the sampled adblock_check on a session's first pageview.
// See src/lib/tracking/umami-events.ts.
export function AdblockCheck() {
  useEffect(() => installAdblockCheck(), [])
  return null
}
