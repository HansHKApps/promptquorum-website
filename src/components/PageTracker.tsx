'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { hasConsent } from '@/lib/consent'

export function PageTracker() {
  const pathname = usePathname()
  useEffect(() => {
    // Reading-behaviour signal: only with Analytics consent.
    if (!hasConsent('analytics')) return
    try {
      sessionStorage.setItem('pq_previous_page', pathname)
    } catch { /* ignore */ }
  }, [pathname])
  return null
}
