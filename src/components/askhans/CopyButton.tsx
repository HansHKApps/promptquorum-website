'use client'

// "Copy" button for answer bubbles and tables. One click copies the answer with its formatting (HTML plus a
// plain-text twin, always ending with a link to www.promptquorum.com). Hovering the button, focusing it, or
// tapping the arrow opens a small menu: copy as plain text, send by email, WhatsApp, Telegram, or the device's
// share sheet. Shares are counted anonymously (only with the visitor's consent) through ASK_HANS_SHARE_EVENT.

import { useEffect, useId, useRef, useState } from 'react'
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

const ITEM = 'flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-start text-[12px] font-medium text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'

export function CopyButton({ md, className = '' }: { md: string; className?: string }) {
  const tx = useAskCopy()
  const [done, setDone] = useState(false)
  const [menu, setMenu] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuId = useId()
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
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={open}
      onMouseLeave={closeSoon}
      onFocus={open}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeSoon()
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
        onClick={() => setMenu((v) => !v)}
        className="inline-flex items-center rounded-e-md px-1 py-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name="ChevronDown" className="h-3.5 w-3.5" />
      </button>
      {menu && (
        <div id={menuId} role="menu" className="absolute bottom-full end-0 z-30 mb-1 w-52 rounded-lg border border-border bg-white p-1 shadow-xl">
          <button type="button" role="menuitem" onClick={() => { void copyRich(); setMenu(false) }} className={ITEM}>
            <AskIcon name="Copy" className="h-3.5 w-3.5 text-muted-foreground" />
            {tx.copyUi.copyFormatted}
          </button>
          <button type="button" role="menuitem" onClick={copyPlain} className={ITEM}>
            <AskIcon name="FileText" className="h-3.5 w-3.5 text-muted-foreground" />
            {tx.copyUi.copyPlain}
          </button>
          {links.map((l) => (
            <a key={l.channel} role="menuitem" href={shareHref(l.channel, text, subject)} target={l.channel === 'email' ? undefined : '_blank'} rel="noopener noreferrer" onClick={() => share(l.channel)} className={ITEM}>
              <AskIcon name={l.icon} className="h-3.5 w-3.5 text-muted-foreground" />
              {l.label}
            </a>
          ))}
          {canNativeShare && (
            <button type="button" role="menuitem" onClick={nativeShare} className={ITEM}>
              <AskIcon name="Share2" className="h-3.5 w-3.5 text-muted-foreground" />
              {tx.copyUi.shareMore}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
