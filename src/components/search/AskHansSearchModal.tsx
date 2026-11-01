'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAskCopy } from '@/components/askhans/copy'

interface Props {
  isOpen: boolean
  onClose: () => void
  /** Enter: the typed text is handed to Ask Hans (see SearchTrigger). */
  onSubmit: (question: string) => void
}

// Header search box in every language while Ask Hans is switched on (ASK_HANS_ENABLED=true): the visitor types a
// question, presses Enter, and the Ask Hans window takes over. Nothing is sent from here. With the flag off,
// the header falls back to the classic SearchModal (kill switch).
export function AskHansSearchModal({ isOpen, onClose, onSubmit }: Props) {
  const tx = useAskCopy()
  const t = tx.search
  const [question, setQuestion] = useState('')
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuestion('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  const submit = () => {
    const q = question.trim()
    if (!q) return
    onClose()
    onSubmit(q)
  }

  return createPortal(
    <>
      <div className="hidden md:block fixed inset-0 z-50 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        dir={tx.dir}
        aria-modal="true"
        aria-label={t.modalAriaLabel}
        className="fixed z-50 bg-white inset-0 md:inset-auto md:top-[15vh] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-[560px] md:rounded-xl md:shadow-2xl md:border md:border-gray-200 md:max-h-[70vh] flex flex-col overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3 py-3 border-b border-gray-200 flex-shrink-0">
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            inputMode="text"
            enterKeyHint="send"
            aria-label={t.ariaLabel}
            placeholder={t.placeholder}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                submit()
              }
            }}
            className="flex-1 text-sm bg-transparent outline-none text-gray-900 placeholder-gray-400"
          />
          <button onClick={onClose} className="md:hidden w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0 -mr-1" aria-label={t.close}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <kbd className="hidden md:inline text-[11px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">esc</kbd>
        </div>
        <p className="py-10 text-center text-sm text-gray-400">{t.hint}</p>
      </div>
    </>,
    document.body,
  )
}
