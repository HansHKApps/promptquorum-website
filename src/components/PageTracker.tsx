'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PageTracker() {
  const pathname = usePathname()
  useEffect(() => {
    try {
      sessionStorage.setItem('pq_previous_page', pathname)
    } catch { /* ignore */ }
  }, [pathname])
  return null
}
