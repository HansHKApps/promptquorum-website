'use client'

/**
 * The single confirm step for the "set PromptQuorum as a Google preferred
 * source" action. Rendered by all three entry points (popup card, footer
 * button, beta FAB link) so the dialog UI, copy, destination URL, and
 * tracking only exist in one place — see src/lib/preferredSource.ts.
 */

import { useEffect } from 'react'
import type { Language } from '@/lib/geo-schema'
import { PREFERRED_SOURCE_URL, PREFERRED_SOURCE_CONFIRM_COPY, trackPrefSource, type PrefSourceSurface } from '@/lib/preferredSource'

export function PreferredSourceConfirmDialog({
  surface,
  lang,
  sourcePage,
  dir,
  onClose,
}: {
  surface: PrefSourceSurface
  lang: Language
  sourcePage: string | null
  dir?: 'rtl'
  onClose: () => void
}) {
  const c = PREFERRED_SOURCE_CONFIRM_COPY[lang] ?? PREFERRED_SOURCE_CONFIRM_COPY.en

  useEffect(() => {
    trackPrefSource('confirm_shown', { surface, lang, source_page: sourcePage })
    // Fire once, when the dialog mounts — not on every re-render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cancel = (via: 'cancel_button' | 'backdrop') => {
    trackPrefSource('cancelled', { surface, lang, source_page: sourcePage, via })
    onClose()
  }

  const confirm = () => {
    trackPrefSource('confirmed', { surface, lang, source_page: sourcePage })
    window.open(PREFERRED_SOURCE_URL, 'GooglePreferredSources', 'width=600,height=700,resizable=yes,scrollbars=yes')
    onClose()
  }

  return (
    <div
      dir={dir}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => cancel('backdrop')}
    >
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 mb-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <text x="2" y="20" fontSize="16" fontWeight="bold" fill="#4285F4">G</text>
          </svg>
          <h2 className="text-lg font-semibold text-text-primary">{c.confirmTitle}</h2>
        </div>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">{c.confirmBody}</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => cancel('cancel_button')}
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-gray-50"
          >
            {c.confirmDismiss}
          </button>
          <button
            onClick={confirm}
            className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {c.confirmCta}
          </button>
        </div>
      </div>
    </div>
  )
}
