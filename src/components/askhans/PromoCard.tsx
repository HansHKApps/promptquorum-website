'use client'

// The card that appears once per visit after ASK_HANS_PROMO_AFTER_S seconds with Ask Hans open: the topic picture
// is replaced by the promo picture, and the visitor is asked to share Ask Hans. Share links only carry a fixed
// text plus the /askhans address, never anything from the visitor's conversation.

import { useEffect, useRef, useState } from 'react'
import { useAskCopy, useAskLang, type AskLang } from './copy'
import { reportShare, type ShareKind } from './CopyButton'
import { AskIcon } from './icons'
import { SITE_URL, shareHref, writePlain, type ShareChannel } from './share'

export const promoImage = (lang: AskLang) => `/askhans/promo-${lang}.svg`
const promoUrl = (lang: AskLang) => `${SITE_URL}${lang === 'en' ? '' : `/${lang}`}/askhans`

const BTN = 'flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-primary hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'

export function PromoShare() {
  const tx = useAskCopy()
  const lang = useAskLang()
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const canNative = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )

  const url = promoUrl(lang)
  const text = `${tx.promo.shareText}\n${url}`
  const channels: { channel: ShareChannel; label: string; icon: string }[] = [
    { channel: 'whatsapp', label: tx.copyUi.shareWhatsApp, icon: 'MessageCircle' },
    { channel: 'telegram', label: tx.copyUi.shareTelegram, icon: 'Send' },
    { channel: 'email', label: tx.copyUi.shareEmail, icon: 'Mail' },
  ]
  const done = (kind: ShareKind) => reportShare('promo', kind)

  return (
    <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={tx.promo.share}>
      {channels.map((c) => (
        <a key={c.channel} href={shareHref(c.channel, text, tx.copyUi.emailSubject)} target={c.channel === 'email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={c.label} title={c.label} onClick={() => done(c.channel)} className={BTN}>
          <AskIcon name={c.icon} className="h-4 w-4" />
        </a>
      ))}
      {canNative && (
        <button
          type="button"
          aria-label={tx.copyUi.shareMore}
          title={tx.copyUi.shareMore}
          className={BTN}
          onClick={async () => {
            try {
              await navigator.share({ title: tx.name, text: tx.promo.shareText, url })
              done('native')
            } catch {
              // dismissed
            }
          }}
        >
          <AskIcon name="Share2" className="h-4 w-4" />
        </button>
      )}
      <button
        type="button"
        onClick={async () => {
          if (!(await writePlain(url))) return
          done('link')
          setCopied(true)
          if (timer.current) clearTimeout(timer.current)
          timer.current = setTimeout(() => setCopied(false), 2000)
        }}
        className="flex h-8 items-center gap-1 rounded-lg border border-border bg-white px-2 text-[12px] font-semibold text-primary hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name={copied ? 'Check' : 'Link2'} className="h-3.5 w-3.5" />
        <span role="status">{copied ? tx.promo.linkCopied : tx.promo.copyLink}</span>
      </button>
    </div>
  )
}

/** Text + share buttons under the promo picture (desktop side panel). */
export function PromoCard({ onClose }: { onClose: () => void }) {
  const tx = useAskCopy()
  return (
    <section aria-label={tx.promo.title} className="rounded-lg border border-primary/40 bg-white p-2.5 shadow-sm">
      <div className="flex items-start gap-2">
        <h3 className="flex-1 text-[13px] font-bold text-foreground">{tx.promo.title}</h3>
        <button type="button" onClick={onClose} aria-label={tx.promo.close} title={tx.promo.close} className="-me-1 -mt-1 flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <AskIcon name="X" className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="mt-1 text-[12px] leading-snug text-foreground">{tx.promo.body}</p>
      <p className="mb-1.5 mt-2 text-[11px] font-semibold uppercase tracking-wide text-primary">{tx.promo.share}</p>
      <PromoShare />
    </section>
  )
}
