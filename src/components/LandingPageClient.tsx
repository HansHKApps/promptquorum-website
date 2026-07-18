'use client'

import { WAITLIST_INVITE_COPY, waitlistDownloadHref, waitlistGuideHref } from '@/lib/waitlistInviteCopy'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

// PromptQuorum desktop is in public beta — this is a direct download CTA, not
// an email-collecting waitlist form. Copy is shared with the "Waitlist" modal
// and /waitlist page (see @/lib/waitlistInviteCopy) so it stays consistent
// across the site. The waitlist_signup event name is kept as-is so it
// continues counting into the same analytics series as the old form.
function BetaDownloadCTA({ lang }: { lang: Lang }) {
  const t = WAITLIST_INVITE_COPY[lang] ?? WAITLIST_INVITE_COPY.en

  const trackDownloadClick = () => {
    window.umami?.track('waitlist_signup', { source_page: window.location.pathname })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href={waitlistDownloadHref(lang)}
        onClick={trackDownloadClick}
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
  )
}

export function LandingPageClient({ lang = 'en' }: { lang?: Lang } = {}) {
  return <BetaDownloadCTA lang={lang} />
}
