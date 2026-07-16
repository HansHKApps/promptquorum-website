'use client'

import { useWaitlist } from '@/context/WaitlistContext'

export function SmartHomeWaitlistCTA({ label }: { label: string }) {
  const { openWaitlist } = useWaitlist()

  return (
    <button
      onClick={openWaitlist}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
    >
      {label}
    </button>
  )
}
