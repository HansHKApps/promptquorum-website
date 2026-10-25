'use client'

import { useEffect, useState } from 'react'
import { hasConsent, onConsentChange, type ConsentCategory } from '@/lib/consent'

/** Live consent for one category. False on the server and before hydration. */
export function useConsent(category: ConsentCategory): boolean {
  const [allowed, setAllowed] = useState(false)
  useEffect(() => onConsentChange(() => setAllowed(hasConsent(category))), [category])
  return allowed
}
