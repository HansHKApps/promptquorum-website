'use client'

import { Suspense } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

export function LanguageSwitcherWrapper() {
  return (
    <Suspense fallback={<div className="w-24 h-10 bg-gray-200 rounded" />}>
      <LanguageSwitcher />
    </Suspense>
  )
}
