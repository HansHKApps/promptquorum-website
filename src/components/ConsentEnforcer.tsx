'use client'

import { useEffect } from 'react'
import { clearCategoryStorage, hasConsent, onConsentChange } from '@/lib/consent'

/**
 * Deletes the non-essential `pq_*` storage of every category the visitor has not
 * allowed (on load, and again whenever the choice changes), so withdrawing consent
 * actually removes what was stored, not just stops new writes.
 */
export function ConsentEnforcer() {
  useEffect(
    () =>
      onConsentChange(() => {
        if (!hasConsent('analytics')) clearCategoryStorage('analytics')
        if (!hasConsent('marketing')) clearCategoryStorage('marketing')
      }),
    [],
  )
  return null
}
