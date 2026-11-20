'use client'

// "Back" link for legal and explanation pages (Terms, Privacy, Impressum, Security, Image license). When the visitor
// came from another page of this site (e.g. the Academy window or a footer link) it goes back in history, so they land
// exactly where they were; for a direct visit or a new tab it links to the home page of the page's language.

import { useRouter } from 'next/navigation'
import { useLang, type Lang } from '@/hooks/useLang'

const LABEL: Record<Lang, string> = {
  en: 'Back',
  de: 'Zurück',
  fr: 'Retour',
  es: 'Volver',
  pt: 'Voltar',
  ja: '戻る',
  zh: '返回',
  ar: 'رجوع',
  ko: '뒤로',
}

export function BackLink({ lang }: { lang?: Lang }) {
  const router = useRouter()
  const current = useLang()
  const l = lang ?? current
  const home = l === 'en' ? '/' : `/${l}`
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    // Was the previous history entry a page of this site? document.referrer is not enough: it never changes for
    // in-app (soft) navigation, so it is empty after e.g. Academy page -> Terms. The Navigation API sees the real
    // previous entry; where it is missing (older browsers) the referrer is the fallback.
    let sameSite = false
    try {
      const nav = (window as unknown as { navigation?: { canGoBack?: boolean; currentEntry?: { index: number }; entries: () => { url?: string }[] } }).navigation
      if (nav?.currentEntry && nav.canGoBack) {
        const prev = nav.entries()[nav.currentEntry.index - 1]?.url
        sameSite = !!prev && new URL(prev).origin === window.location.origin
      } else {
        sameSite = !!document.referrer && new URL(document.referrer).origin === window.location.origin
      }
    } catch {
      sameSite = false
    }
    if (sameSite && window.history.length > 1) {
      e.preventDefault()
      router.back()
    }
  }
  return (
    <a
      href={home}
      onClick={onClick}
      dir={l === 'ar' ? 'rtl' : 'ltr'}
      className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 hover:text-purple-900 hover:underline underline-offset-2"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={l === 'ar' ? 'rotate-180' : undefined}>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
      {LABEL[l]}
    </a>
  )
}
