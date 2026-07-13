'use client'

import { useLang } from '@/hooks/useLang'
import type { Lang } from '@/hooks/useLang'
import { useWaitlist } from '@/context/WaitlistContext'
import { WAITLIST_INVITE_COPY, waitlistDownloadHref, waitlistGuideHref } from '@/lib/waitlistInviteCopy'

// The "Waitlist" label stays as-is across the site (nav, buttons). What
// changes here is the destination: PromptQuorum desktop is in public beta
// now, so this invites the visitor straight into the beta instead of
// collecting an email for a later invite. Copy lives in
// @/lib/waitlistInviteCopy so the static /waitlist page (WaitlistPageContent)
// can show the same message if this modal gets dismissed.
function WaitlistModalInner() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const lang = useLang()
  const t = WAITLIST_INVITE_COPY[lang as Lang] ?? WAITLIST_INVITE_COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={closeWaitlist}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl" dir={dir}>
          {/* Close Button */}
          <button
            onClick={closeWaitlist}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground mb-3">
              {t.eyebrow}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-gray-600 text-sm mb-6">{t.desc}</p>

            <div className="flex flex-col gap-3">
              <a
                href={waitlistDownloadHref(lang)}
                onClick={closeWaitlist}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.downloadCta}
              </a>
              <a
                href={waitlistGuideHref(lang)}
                onClick={closeWaitlist}
                className="inline-flex items-center justify-center rounded-md border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                {t.guideCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WaitlistModal() {
  return <WaitlistModalInner />
}
