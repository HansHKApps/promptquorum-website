'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Logo } from '@/components/Logo'
import { useAskCopy } from '@/components/askhans/copy'
import { ASK_HANS_LIMITS } from '@/lib/askhans/config'

interface Props {
  isOpen: boolean
  onClose: () => void
  /** Enter: the typed text is handed to Ask Hans (see SearchTrigger). */
  onSubmit: (question: string) => void
  /** The Power Mode card: opens the Ask Hans window straight on the guided setups. */
  onPower?: () => void
}

// Header search box in every language while Ask Hans is switched on (ASK_HANS_ENABLED=true): the visitor types a
// question, presses Enter, and the Ask Hans window takes over. Nothing is sent from here. With the flag off,
// the header falls back to the classic SearchModal (kill switch).
export function AskHansSearchModal({ isOpen, onClose, onSubmit, onPower }: Props) {
  const tx = useAskCopy()
  const t = tx.search
  const [question, setQuestion] = useState('')
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

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

  // The question box grows with the text (up to about eight lines, then it scrolls).
  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`
  }, [question, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  const submit = (text?: string) => {
    const q = (text ?? question).trim()
    if (!q) return
    onClose()
    onSubmit(q)
  }

  return createPortal(
    <>
      <div className="fixed inset-0 z-50 bg-[hsl(265_40%_12%/0.55)] backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        dir={tx.dir}
        aria-modal="true"
        aria-label={t.modalAriaLabel}
        className="fixed z-50 flex flex-col overflow-hidden bg-white inset-0 md:inset-auto md:top-[12vh] md:left-1/2 md:max-h-[76vh] md:w-full md:max-w-[760px] md:-translate-x-1/2 md:rounded-2xl md:border md:border-[hsl(var(--hero-edge))] md:shadow-[0_24px_80px_-12px_rgba(76,29,149,0.45)]"
      >
        {/* Brand header */}
        <div
          className="relative flex-shrink-0 overflow-hidden px-5 pb-4 pt-5"
          style={{ background: 'linear-gradient(135deg, hsl(var(--hero-from)) 0%, hsl(265 70% 90%) 55%, hsl(290 70% 93%) 100%)' }}
        >
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[hsl(265_70%_70%/0.25)] blur-2xl" aria-hidden="true" />
          <button
            onClick={onClose}
            className="absolute end-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full text-[hsl(var(--primary))] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--primary))] md:end-3 md:top-3 md:h-9 md:w-9"
            aria-label={t.close}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="relative flex items-center gap-3 pe-10">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-[hsl(var(--hero-edge))]" aria-hidden="true">
              <Logo size={32} role="presentation" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lg font-extrabold leading-none tracking-tight text-[hsl(265_55%_25%)]">{tx.name}</span>
                <span className="rounded-full bg-gradient-to-r from-[hsl(265_60%_48%)] to-[hsl(300_60%_52%)] px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide text-white shadow-sm">
                  {t.badge}
                </span>
              </div>
              <p className="mt-1 text-[15px] font-semibold leading-snug text-[hsl(265_45%_20%)]">{t.headline}</p>
            </div>
          </div>
          <p className="relative mt-3 text-[13px] leading-relaxed text-[hsl(265_25%_30%)]">{t.pitch}</p>
        </div>

        {/* Input */}
        <div className="flex-shrink-0 px-5 pt-4">
          <div className="flex items-start gap-2 rounded-xl border-2 border-[hsl(var(--hero-edge))] bg-white px-3 py-2 shadow-sm transition-colors focus-within:border-[hsl(var(--primary))] focus-within:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]">
            <svg className="mt-2 h-5 w-5 flex-shrink-0 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <textarea
              ref={inputRef}
              rows={1}
              maxLength={ASK_HANS_LIMITS.maxMessageChars + 200}
              enterKeyHint="send"
              aria-label={t.ariaLabel}
              placeholder={t.placeholder}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                // Enter sends, Shift+Enter starts a new line; Enter that confirms an IME composition (ja/zh/ko) is not a send.
                if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault()
                  submit()
                }
              }}
              className="max-h-[200px] min-h-[40px] min-w-0 flex-1 resize-none bg-transparent py-2 text-base leading-snug text-gray-900 outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => submit()}
              disabled={!question.trim()}
              aria-label={tx.send}
              className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-white shadow-sm transition-opacity hover:opacity-90 disabled:opacity-35"
            >
              <svg className="h-4 w-4 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <kbd className="mt-2 hidden rounded border border-gray-200 px-1.5 py-0.5 font-mono text-[11px] text-gray-400 md:inline">esc</kbd>
          </div>
        </div>

        {/* Example questions */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 pt-3">
          {onPower && (
            <button
              type="button"
              onClick={() => {
                onClose()
                onPower()
              }}
              className="mb-3 flex w-full items-center gap-3 rounded-xl border border-[hsl(var(--hero-edge))] bg-gradient-to-r from-[hsl(265_60%_48%)] to-[hsl(300_60%_52%)] px-4 py-3 text-start text-white shadow-sm transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--primary))]"
            >
              <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="min-w-0">
                <span className="block text-[14px] font-bold leading-snug">{tx.powerSwitch}</span>
                <span className="block text-[12px] leading-snug text-white/90">{tx.powerSwitchTitle}</span>
              </span>
            </button>
          )}
          <ul className="flex flex-wrap gap-2">
            {t.examples.map((ex) => (
              <li key={ex}>
                <button
                  type="button"
                  onClick={() => submit(ex)}
                  className="rounded-full border border-[hsl(var(--hero-edge))] bg-[hsl(var(--secondary))] px-3 py-1.5 text-start text-[13px] font-medium text-[hsl(265_45%_28%)] transition-colors hover:border-[hsl(var(--primary))] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--primary))]"
                >
                  {ex}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-400">{t.hint}</p>
        </div>
      </div>
    </>,
    document.body,
  )
}
