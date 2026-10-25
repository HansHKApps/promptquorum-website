'use client'

import { COOKIE_COPY } from '@/lib/cookie-consent-copy'
import { OPEN_CONSENT_EVENT } from '@/lib/consent'
import type { Lang } from '@/hooks/useLang'

export function CookieSettingsLink({ lang = 'en', className }: { lang?: string; className?: string }) {
  const label = (COOKIE_COPY[lang as Lang] ?? COOKIE_COPY.en).title
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))}
      className={className ?? 'hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer text-inherit font-inherit'}
    >
      {label}
    </button>
  )
}
