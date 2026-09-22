'use client'

import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'

interface AboutLanguagePillProps {
  href: string
  lang: Language
  children: string
}

export function AboutLanguagePill({ href, lang, children }: AboutLanguagePillProps) {
  const handleClick = () => {
    try {
      document.cookie = `pq_lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
      window.umami?.track('about_cta_click', { via: `language_pill_${lang}`, source_page: window.location.pathname })
    } catch {
      // analytics/cookie must never block navigation
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="px-3 py-1.5 rounded-full bg-primary/10 text-text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
    >
      {children}
    </Link>
  )
}
