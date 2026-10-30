'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/translations'
import { SearchModal } from './SearchModal'
import { CompanionSearchModal } from './CompanionSearchModal'
import { ASK_HANS_FALLBACK_SEARCH_EVENT, ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'

export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  const lang = useLang()
  const t = translations[lang as keyof typeof translations] || translations.en
  const askHansOn = lang === 'de' && process.env.NEXT_PUBLIC_ASK_HANS_ENABLED === 'true'
  const [fallbackQuery, setFallbackQuery] = useState<string | null>(null)

  useEffect(() => {
    if (!askHansOn) return
    const on = (e: Event) => setFallbackQuery((e as CustomEvent<{ query?: string }>).detail?.query ?? '')
    window.addEventListener(ASK_HANS_FALLBACK_SEARCH_EVENT, on)
    return () => window.removeEventListener(ASK_HANS_FALLBACK_SEARCH_EVENT, on)
  }, [askHansOn])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Mobile: icon-only, 44×44px tap target */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden w-11 h-11 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Search"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      {/* Desktop: compact button with text + keyboard hint */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300 transition-colors"
        aria-label={t.searchAriaLabel}
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span>{t.searchPlaceholder}</span>
        <kbd className="text-[11px] text-gray-400 border border-gray-200 rounded px-1 py-0.5 font-mono leading-none">⌘K</kbd>
      </button>

      {/* German locale gets Roland's companion Q&A tool; every other locale
          keeps the classic Fuse.js search unchanged.
          With ASK_HANS_ENABLED=true the German search hands the typed question to Ask Hans on Enter
          (Cmd/Ctrl+K still just opens this search); ASK_HANS_ENABLED unset/false = exactly as before. */}
      {lang === 'de'
        ? <CompanionSearchModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            lang={lang}
            onAskHans={askHansOn ? (question) => window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: { question } })) : undefined}
          />
        : <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} lang={lang} />}
      {/* Ask Hans failure fallback: "use the normal search for my text". */}
      {askHansOn && (
        <SearchModal isOpen={fallbackQuery !== null} onClose={() => setFallbackQuery(null)} lang={lang} initialQuery={fallbackQuery ?? undefined} />
      )}
    </>
  )
}
