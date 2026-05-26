'use client'

import { useEffect } from 'react'
import { useWaitlist } from '@/context/WaitlistContext'

/**
 * Auto-opens the waitlist modal on mount.
 * Used by /waitlist — direct links, QR codes, social bios, etc.
 * Renders nothing; the modal overlays whatever the layout renders.
 */
export function WaitlistModalOpener() {
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    openWaitlist()
  }, [openWaitlist])

  return null
}
