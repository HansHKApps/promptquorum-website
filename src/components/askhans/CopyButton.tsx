'use client'

// "Copy" button for answer bubbles and tables. One click copies the answer with its formatting (HTML plus a
// plain-text twin, always ending with a link to www.promptquorum.com). Hovering the button, focusing it, or
// tapping the arrow opens a small menu: copy as plain text, send by email, WhatsApp, Telegram, or the device's
// share sheet. Shares are counted anonymously (only with the visitor's consent) through ASK_HANS_SHARE_EVENT.

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAskCopy } from './copy'
import { AskIcon } from './icons'
import { richPayload, sharePlain, shareHref, writePlain, writeRich, SITE_URL, type ShareChannel } from './share'

/** window CustomEvent the root listens to for the anonymous share counter; detail: { source, channel } */
export const ASK_HANS_SHARE_EVENT = 'askhans:share'
export type ShareSource = 'answer' | 'promo'
export type ShareKind = ShareChannel | 'copy' | 'copy_plain' | 'native' | 'link'

export function reportShare(source: ShareSource, channel: ShareKind): void {
  window.dispatchEvent(new CustomEvent(ASK_HANS_SHARE_EVENT, { detail: { source, channel } }))
}

/** Markdown → plain text (kept for callers that only need text). */
export { mdToPlain as plainText } from './share'

const ITEM = 'flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-start text-[13px] font-medium text-foreground hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'
const MENU_W = 232

/** Small rounded tile that carries a brand colour and a white logo glyph. */
function Tile({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <span aria-hidden="true" className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-sm" style={{ background: bg }}>
      {children}
    </span>
  )
}

const GLYPH = { className: 'h-4 w-4', fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true } as const

// Brand glyphs (simplified single-path marks), shown white on the brand colour.
function WhatsAppLogo() {
  return (
    <svg {...GLYPH}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.97 3.85Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  )
}
function TelegramLogo() {
  return (
    <svg {...GLYPH}>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.06-.87 1.32-1.76.82l-4.86-3.58-2.34 2.26c-.26.26-.48.48-.98.48l.35-4.95 9-8.13c.39-.35-.09-.54-.6-.19L6.4 13.1l-4.8-1.5c-1.04-.33-1.06-1.04.22-1.54L20.5 2.82c.87-.32 1.63.2 1.4 1.48Z" />
    </svg>
  )
}
function MailLogo() {
  return (
    <svg {...GLYPH}>
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.3 2 7.7 5.6L19.7 7H4.3ZM4 17h16V9.3l-8 5.8-8-5.8V17Z" />
    </svg>
  )
}

const BRAND = {
  email: { bg: 'linear-gradient(135deg,#ea4335,#c5221f)', logo: <MailLogo /> },
  whatsapp: { bg: 'linear-gradient(135deg,#2fe074,#128c7e)', logo: <WhatsAppLogo /> },
  telegram: { bg: 'linear-gradient(135deg,#37aee2,#1e96c8)', logo: <TelegramLogo /> },
} as const

export function CopyButton({ md, className = '' }: { md: string; className?: string }) {
  const tx = useAskCopy()
  const [done, setDone] = useState(false)
  const [menu, setMenu] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  const flash = () => {
    setDone(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setDone(false), 2000)
  }
  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenu(true)
  }
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMenu(false), 200)
  }

  // The menu is drawn in a portal with fixed coordinates, so no scrolling or clipped parent can cut it off.
  // It opens above the button when there is room, otherwise below, and is kept inside the viewport.
  const place = useCallback(() => {
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const mh = menuRef.current?.offsetHeight ?? 260
    const rtl = getComputedStyle(el).direction === 'rtl'
    const above = r.top - mh - 6 >= 8
    const top = above ? r.top - mh - 6 : Math.min(r.bottom + 6, Math.max(8, window.innerHeight - mh - 8))
    const raw = rtl ? r.left : r.right - MENU_W
    const left = Math.min(Math.max(8, raw), Math.max(8, window.innerWidth - MENU_W - 8))
    setPos({ top, left })
  }, [])
  useLayoutEffect(() => {
    if (!menu) return
    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [menu, place])

  const copyRich = async () => {
    if (await writeRich(richPayload(md))) {
      flash()
      reportShare('answer', 'copy')
    }
  }
  const copyPlain = async () => {
    if (await writePlain(richPayload(md).plain)) {
      flash()
      reportShare('answer', 'copy_plain')
    }
    setMenu(false)
  }
  const share = (channel: ShareChannel) => {
    reportShare('answer', channel)
    setMenu(false)
  }
  const nativeShare = async () => {
    setMenu(false)
    try {
      await navigator.share({ title: tx.copyUi.emailSubject, text: sharePlain(md), url: SITE_URL })
      reportShare('answer', 'native')
    } catch {
      // dismissed by the visitor
    }
  }

  const text = sharePlain(md)
  const subject = tx.copyUi.emailSubject
  const links: { channel: ShareChannel; label: string; icon: string }[] = [
    { channel: 'email', label: tx.copyUi.shareEmail, icon: 'Mail' },
    { channel: 'whatsapp', label: tx.copyUi.shareWhatsApp, icon: 'MessageCircle' },
    { channel: 'telegram', label: tx.copyUi.shareTelegram, icon: 'Send' },
  ]

  return (
    <div
      ref={wrapRef}
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={open}
      onMouseLeave={closeSoon}
      onFocus={open}
      onBlur={(e) => {
        const t = e.relatedTarget as Node | null
        if (!e.currentTarget.contains(t) && !menuRef.current?.contains(t)) closeSoon()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && menu) {
          e.stopPropagation()
          setMenu(false)
        }
      }}
    >
      <button
        type="button"
        aria-label={tx.copyUi.copyAnswer}
        title={tx.copyUi.copyAnswer}
        onClick={copyRich}
        className="inline-flex items-center gap-1 rounded-s-md px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name={done ? 'Check' : 'Copy'} className="h-3.5 w-3.5" />
        <span role="status">{done ? tx.copyUi.copied : tx.copyUi.copy}</span>
      </button>
      <button
        type="button"
        aria-label={tx.copyUi.moreOptions}
        title={tx.copyUi.moreOptions}
        aria-haspopup="menu"
        aria-expanded={menu}
        aria-controls={menuId}
        onClick={open}
        className="inline-flex items-center rounded-e-md px-1 py-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name="ChevronDown" className="h-3.5 w-3.5" />
      </button>
      {menu &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            dir={tx.dir}
            onMouseEnter={open}
            onMouseLeave={closeSoon}
            style={{ position: 'fixed', top: pos?.top ?? -9999, left: pos?.left ?? -9999, width: MENU_W, visibility: pos ? 'visible' : 'hidden' }}
            className="z-[200] overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-2xl ring-1 ring-black/5"
          >
            <button type="button" role="menuitem" onClick={() => { void copyRich(); setMenu(false) }} className={ITEM}>
              <Tile bg="linear-gradient(135deg,#7c4dcc,#4c1d95)"><AskIcon name="Copy" className="h-4 w-4" /></Tile>
              {tx.copyUi.copyFormatted}
            </button>
            <button type="button" role="menuitem" onClick={copyPlain} className={ITEM}>
              <Tile bg="linear-gradient(135deg,#6b7280,#374151)"><AskIcon name="FileText" className="h-4 w-4" /></Tile>
              {tx.copyUi.copyPlain}
            </button>
            <div className="mx-2 my-1 h-px bg-border" role="separator" />
            {links.map((l) => (
              <a key={l.channel} role="menuitem" href={shareHref(l.channel, text, subject)} target={l.channel === 'email' ? undefined : '_blank'} rel="noopener noreferrer" onClick={() => share(l.channel)} className={ITEM}>
                <Tile bg={BRAND[l.channel].bg}>{BRAND[l.channel].logo}</Tile>
                {l.label}
              </a>
            ))}
            {canNativeShare && (
              <button type="button" role="menuitem" onClick={nativeShare} className={ITEM}>
                <Tile bg="linear-gradient(135deg,#a855f7,#ec4899)"><AskIcon name="Share2" className="h-4 w-4" /></Tile>
                {tx.copyUi.shareMore}
              </button>
            )}
          </div>,
          document.body,
        )}
    </div>
  )
}
