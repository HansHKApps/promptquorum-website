'use client'

// Shared "Updated <date>" chip for the directory tile grid and the detail
// drawer. Hovering or tapping it shows a small popup explaining that the
// date is the tool's latest verified/update date — both surfaces use the
// same component so the behavior and copy never drift apart.

import { useEffect, useRef, useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { ClockIcon } from './icons'
import { t } from './directory-i18n'

export function LastUpdatedBadge({
  lang,
  date,
  className = '',
  variant = 'chip',
}: {
  lang: Language
  date: string
  className?: string
  /** 'chip': pill with icon + "Updated <date>" (tile grid). 'plain': bare date text (drawer row, which already has its own "Last verified" label). */
  variant?: 'chip' | 'plain'
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDocPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDocPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onDocPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className={`relative inline-flex w-fit ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        aria-label={t('cardLastUpdatedAriaLabel', lang)}
        aria-expanded={open}
        className={
          variant === 'chip'
            ? 'inline-flex w-fit items-center gap-1 rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[11px] text-text-secondary hover:border-primary/40 hover:bg-primary/5 hover:text-primary'
            : 'inline-flex w-fit items-center gap-1 text-text-secondary underline decoration-dotted decoration-text-secondary/50 underline-offset-2 hover:text-primary'
        }
      >
        {variant === 'chip' && <ClockIcon className="h-3 w-3 text-text-secondary/60" />}
        {variant === 'chip' ? t('cardLastUpdatedTemplate', lang, { date }) : date}
      </button>
      {open && (
        <div
          role="tooltip"
          className="absolute bottom-full left-0 z-20 mb-1.5 w-56 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] leading-snug text-text-secondary shadow-lg"
        >
          {t('lastUpdatedTooltip', lang)}
        </div>
      )}
    </div>
  )
}
