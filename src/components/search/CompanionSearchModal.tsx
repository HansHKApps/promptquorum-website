'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SearchModal } from './SearchModal'
import { useCompanionAnswer, type CompanionSource } from './useCompanionAnswer'
import { translations } from '@/translations'

interface Props {
  isOpen: boolean
  onClose: () => void
  lang: string
}

// German-only Q&A companion (see src/components/search/SearchTrigger.tsx).
// Deliberately NOT sharing a rendering shell with SearchModal.tsx — copied the
// portal/backdrop/Escape/scroll-lock chrome instead of extracting it, so the
// other 8 locales' SearchModal stays byte-for-byte untouched by this change.
export function CompanionSearchModal({ isOpen, onClose, lang }: Props) {
  // lang is always 'de' here (see SearchTrigger.tsx's branch), so this reads
  // the de block directly rather than the translations[lang]||en union lookup
  // SearchModal.tsx uses — the companion* keys only exist on the de block.
  const t = translations.de
  const { ask, isLoading } = useCompanionAnswer()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [sources, setSources] = useState<CompanionSource[]>([])
  const [fellBack, setFellBack] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuestion('')
      setAnswer(null)
      setSources([])
      setFellBack(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleSubmit = async () => {
    const q = question.trim()
    if (!q || isLoading) return
    const result = await ask(q)
    if (!result.ok) {
      // Silent fallback: mount the classic search in place, same open state,
      // no error message shown to the visitor (per project decision).
      setFellBack(true)
      return
    }
    setAnswer(result.answer)
    setSources(result.sources)
  }

  if (!isOpen || !mounted) return null

  if (fellBack) {
    return <SearchModal isOpen={isOpen} onClose={onClose} lang={lang} />
  }

  return createPortal(
    <>
      <div
        className="hidden md:block fixed inset-0 z-50 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.companionModalAriaLabel}
        className={`
          fixed z-50 bg-white
          inset-0
          md:inset-auto md:top-[15vh] md:left-1/2 md:-translate-x-1/2
          md:w-full md:max-w-[560px] md:rounded-xl md:shadow-2xl md:border md:border-gray-200
          md:max-h-[70vh]
          flex flex-col overflow-hidden
        `}
      >
        <div className="flex items-center gap-2 px-3 py-3 border-b border-gray-200 flex-shrink-0">
          <svg
            className="w-4 h-4 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            inputMode="text"
            enterKeyHint="send"
            aria-label={t.companionAriaLabel}
            placeholder={t.companionPlaceholder}
            value={question}
            disabled={isLoading}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSubmit()
              }
            }}
            className="flex-1 text-sm bg-transparent outline-none text-gray-900 placeholder-gray-400 disabled:opacity-60"
          />
          <button
            onClick={onClose}
            className="md:hidden w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0 -mr-1"
            aria-label="Schließen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <kbd className="hidden md:inline text-[11px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">
            esc
          </kbd>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {isLoading && (
            <div className="flex items-center justify-center py-10 text-sm text-gray-400 text-center">
              <svg className="animate-spin w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t.companionLoading}
            </div>
          )}

          {!isLoading && !answer && (
            <p className="py-10 text-center text-sm text-gray-400">{t.companionAskHint}</p>
          )}

          {!isLoading && answer && (
            <div className="space-y-4">
              <p className="text-sm text-gray-900 whitespace-pre-wrap leading-relaxed">{answer}</p>
              {sources.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <p className="px-0 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400 select-none">
                    {t.companionSourcesLabel}
                  </p>
                  <ul className="space-y-1">
                    {sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          className="text-xs text-blue-600 hover:underline break-all"
                        >
                          {s.title || s.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body,
  )
}
