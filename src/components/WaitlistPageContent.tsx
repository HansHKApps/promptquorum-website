'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { WAITLIST_INVITE_COPY, waitlistDownloadHref, waitlistGuideHref } from '@/lib/waitlistInviteCopy'

// Real page content behind the auto-opening waitlist modal (see
// WaitlistModalOpener). Without this, a visitor who dismisses the modal —
// or has JS disabled — lands on a blank page. Shows the same beta-invite
// message as the modal, from the shared @/lib/waitlistInviteCopy copy.
export function WaitlistPageContent({ initialLang }: { initialLang?: Lang }) {
  const lang = useLang(initialLang)
  const t = WAITLIST_INVITE_COPY[lang as Lang] ?? WAITLIST_INVITE_COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined
  const homeHref = lang === 'en' ? '/' : `/${lang}`

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" dir={dir}>
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground mb-4">
          {t.eyebrow}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{t.title}</h1>
        <p className="text-lg text-text-secondary mb-8">{t.desc}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waitlistDownloadHref(lang)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.downloadCta}
          </a>
          <a
            href={waitlistGuideHref(lang)}
            className="inline-flex items-center justify-center rounded-md border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            {t.guideCta}
          </a>
        </div>

        <p className="mt-14">
          <a href={homeHref} className="text-primary hover:text-primary/80">
            {t.backHome}
          </a>
        </p>
      </div>
    </div>
  )
}
