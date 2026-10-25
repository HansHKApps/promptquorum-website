'use client'

import { useCallback, useEffect, useRef, useState, Suspense } from 'react'
import { useLang, type Lang } from '@/hooks/useLang'
import { COOKIE_COPY } from '@/lib/cookie-consent-copy'
import {
  OPEN_CONSENT_EVENT,
  getConsent,
  setConsent,
  type ConsentCategory,
} from '@/lib/consent'

export type { ConsentRecord } from '@/lib/consent'

const VALID_LANGS: Lang[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

// The middleware auto-detects the visitor's language (Accept-Language) and stores it
// in the `pq_lang` cookie. On URLs without a path locale (/de/…) or ?lang= param —
// e.g. a returning visitor landing on bare "/" — useLang() reports 'en', so the
// consent prompt would show in English even though the site knows the user's language.
// Read the cookie as a fallback so the prompt appears in the language of the user.
function readLangCookie(): Lang | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)pq_lang=([a-z]{2})(?:;|$)/)
  const value = match?.[1] as Lang | undefined
  return value && VALID_LANGS.includes(value) ? value : null
}

type Choices = Record<ConsentCategory, boolean>
const NONE: Choices = { analytics: false, recordings: false, marketing: false }
const ALL: Choices = { analytics: true, recordings: true, marketing: true }

const FOCUSABLE = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'

function CookieBannerInner() {
  const urlLang = useLang()
  const [cookieLang, setCookieLang] = useState<Lang | null>(null)
  // Prefer the language explicit in the URL (matches the page the visitor is on);
  // otherwise fall back to the pq_lang cookie set by the middleware; else English.
  const lang: Lang = urlLang !== 'en' ? urlLang : (cookieLang ?? 'en')
  const c = COOKIE_COPY[lang] ?? COOKIE_COPY.en
  const isRtl = lang === 'ar'

  const [visible, setVisible] = useState(false)
  // True when the visitor has already answered, so the dialog may be dismissed
  // without a choice (Escape, backdrop). On the first visit it may not.
  const [hasAnswered, setHasAnswered] = useState(false)
  const [choices, setChoices] = useState<Choices>(NONE)
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setCookieLang(readLangCookie())
  }, [])

  useEffect(() => {
    const stored = getConsent()
    if (!stored) setVisible(true)

    // Reopened from the footer: show what is currently saved, not a blank form.
    const openHandler = () => {
      const current = getConsent()
      setHasAnswered(!!current)
      setChoices(
        current
          ? { analytics: current.analytics, recordings: current.recordings, marketing: current.marketing }
          : NONE,
      )
      returnFocusRef.current = document.activeElement as HTMLElement | null
      setVisible(true)
    }
    window.addEventListener(OPEN_CONSENT_EVENT, openHandler)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openHandler)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    returnFocusRef.current?.focus?.()
    returnFocusRef.current = null
  }, [])

  const commit = useCallback(
    (next: Choices) => {
      setConsent(next, lang)
      setHasAnswered(true)
      close()
    },
    [lang, close],
  )

  // Focus the dialog on open, lock page scroll behind it, trap Tab, close on Escape
  // only when closing is allowed.
  useEffect(() => {
    if (!visible) return
    const dialog = dialogRef.current
    dialog?.querySelector<HTMLElement>('button')?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && hasAnswered) {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab' || !dialog) return
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [visible, hasAnswered, close])

  if (!visible) return null

  const toggle = (k: ConsentCategory) => (v: boolean) => setChoices((p) => ({ ...p, [k]: v }))

  const btnBase: React.CSSProperties = {
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    whiteSpace: 'nowrap',
  }
  const btnPrimary: React.CSSProperties = { ...btnBase, background: '#D0BCFF', color: '#1C1B1F', border: '1px solid #D0BCFF' }
  const btnSecondary: React.CSSProperties = { ...btnBase, background: 'transparent', color: '#E6E1E5', border: '1px solid #CAC4D0' }

  return (
    <div
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && hasAnswered) close()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-dialog-title"
        dir={isRtl ? 'rtl' : 'ltr'}
        style={{
          background: '#1C1B1F',
          border: '1px solid #49454F',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '520px',
          maxHeight: 'calc(100vh - 32px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#E6E1E5',
        }}
      >
        <div style={{ padding: '20px 24px 8px' }}>
          <h2 id="cookie-dialog-title" style={{ margin: 0, fontSize: '17px', fontWeight: 700 }}>
            {c.title}
          </h2>
          <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#CAC4D0', lineHeight: 1.5 }}>
            {c.intro}{' '}
            <a href="/privacy" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
              {c.policy}
            </a>
            {' · '}
            <a href="/impressum" style={{ color: '#D0BCFF', textDecoration: 'underline' }}>
              Impressum
            </a>
          </p>
        </div>

        <div style={{ overflowY: 'auto', padding: '0 24px' }}>
          <CategoryRow title={c.necessary} desc={c.necessaryDesc} checked locked badge={c.alwaysOn} />
          <CategoryRow
            title={c.analytics}
            desc={c.analyticsDesc}
            checked={choices.analytics}
            onChange={toggle('analytics')}
          />
          <CategoryRow
            title={c.recordings}
            desc={c.recordingsDesc}
            checked={choices.recordings}
            onChange={toggle('recordings')}
          />
          <CategoryRow
            title={c.marketing}
            desc={c.marketingDesc}
            checked={choices.marketing}
            onChange={toggle('marketing')}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '16px 24px 20px',
            borderTop: '1px solid #49454F',
          }}
        >
          <button type="button" onClick={() => commit(ALL)} style={btnPrimary}>
            {c.acceptAll}
          </button>
          <button type="button" onClick={() => commit(choices)} style={btnSecondary}>
            {c.save}
          </button>
          <button type="button" onClick={() => commit(NONE)} style={btnSecondary}>
            {c.rejectAll}
          </button>
        </div>
      </div>
    </div>
  )
}

function CategoryRow({
  title,
  desc,
  checked,
  locked,
  badge,
  onChange,
}: {
  title: string
  desc: string
  checked: boolean
  locked?: boolean
  badge?: string
  onChange?: (v: boolean) => void
}) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 0', borderTop: '1px solid #49454F' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '14px', fontWeight: 600 }}>{title}</div>
        <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#CAC4D0', lineHeight: 1.55 }}>{desc}</p>
      </div>
      {locked ? (
        <span style={{ fontSize: '12.5px', color: '#938F99', whiteSpace: 'nowrap', paddingTop: '2px' }}>{badge}</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          onClick={() => onChange?.(!checked)}
          style={{
            flex: '0 0 auto',
            width: '40px',
            height: '24px',
            borderRadius: '12px',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            position: 'relative',
            background: checked ? '#D0BCFF' : '#49454F',
            transition: 'background 0.15s',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '3px',
              insetInlineStart: checked ? '19px' : '3px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: checked ? '#1C1B1F' : '#E6E1E5',
              transition: 'inset-inline-start 0.15s',
            }}
          />
        </button>
      )}
    </div>
  )
}

export function CookieBanner() {
  return (
    <Suspense>
      <CookieBannerInner />
    </Suspense>
  )
}
