'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { SearchModal } from './SearchModal'

export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  const lang = useLang()

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
        aria-label="Search guides"
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span>Search guides...</span>
        <kbd className="text-[11px] text-gray-400 border border-gray-200 rounded px-1 py-0.5 font-mono leading-none">⌘K</kbd>
      </button>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} lang={lang} />
    </>
  )
}
