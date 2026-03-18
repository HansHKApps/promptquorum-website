'use client'

import { useEffect } from 'react'
import { useWaitlist } from '@/context/WaitlistContext'

/**
 * /waitlist — Auto-opens the waitlist modal on arrival.
 * Works for direct links, QR codes, social bios, etc.
 * The page itself is transparent — users see the homepage with the modal on top.
 */
export default function WaitlistPage() {
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    openWaitlist()
  }, [openWaitlist])

  // Render nothing — the modal sits on top of whatever is in the layout
  return null
}
