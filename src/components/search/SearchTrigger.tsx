'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/translations'
import { SearchModal } from './SearchModal'
import { AskHansSearchModal } from './AskHansSearchModal'
import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'

export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  const lang = useLang()
  const t = translations[lang as keyof typeof translations] || translations.en
  const askHansOn = process.env.NEXT_PUBLIC_ASK_HANS_ENABLED === 'true'
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
        className={askHansOn
          ? 'askhans-cta md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(265_55%_42%)] via-[hsl(280_60%_48%)] to-[hsl(310_65%_52%)] text-white ring-1 ring-white/30'
          : 'md:hidden w-11 h-11 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors'}
        aria-label={askHansOn ? 'Ask Hans' : 'Search'}
      >
        {askHansOn ? (
          <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zM19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        )}
      </button>

      {/* Desktop: compact button with text + keyboard hint */}
      <button
        onClick={() => setIsOpen(true)}
        className={askHansOn
          ? 'askhans-cta hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(265_55%_42%)] via-[hsl(280_60%_48%)] to-[hsl(310_65%_52%)] px-4 py-2 text-base font-bold text-white ring-1 ring-white/30 transition-[filter] hover:brightness-110'
          : 'hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300 transition-colors'}
        aria-label={askHansOn ? 'Ask Hans' : t.searchAriaLabel}
      >
        {askHansOn ? (
          <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zM19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" /></svg>
        ) : (
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        )}
        <span className={askHansOn ? 'whitespace-nowrap' : 'whitespace-nowrap font-medium text-gray-700'}>{askHansOn ? 'Ask Hans' : t.searchPlaceholder}</span>
        <kbd className={askHansOn ? 'rounded border border-white/40 bg-white/20 px-1 py-0.5 font-mono text-[11px] leading-none text-white' : 'text-[11px] text-gray-400 border border-gray-200 rounded px-1 py-0.5 font-mono leading-none'}>⌘K</kbd>
      </button>

      {/* With ASK_HANS_ENABLED=true the header search box of every language hands the typed question to Ask Hans on
          Enter (Cmd/Ctrl+K opens the same box). The classic Fuse.js search stays only as the kill-switch fallback. */}
      {askHansOn
        ? <AskHansSearchModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSubmit={(question) => window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: { question } }))}
            onPower={() => window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: { power: true } }))}
          />
        : <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} lang={lang} />}
    </>
  )
}
