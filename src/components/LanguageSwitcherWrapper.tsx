'use client'

import { Suspense } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

export function LanguageSwitcherWrapper() {
  return (
    <Suspense fallback={<div className="w-20 h-8 bg-gray-100 rounded-lg" />}>
      <LanguageSwitcher />
    </Suspense>
  )
}
