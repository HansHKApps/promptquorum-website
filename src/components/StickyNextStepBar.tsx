'use client'

import { useState, useEffect, useRef } from 'react'
import type { Language } from '@/lib/blog/blogContent'

interface Props {
  label: string
  href: string
  lang: Language
  /** ID of the element whose visibility triggers the bar (e.g. last section id or 'facts-disclaimer') */
  triggerElementId?: string
}

export function StickyNextStepBar({ label, href, lang, triggerElementId = 'facts-disclaimer' }: Props) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const observed = useRef(false)

  const destination = lang === 'en' ? href : `/${lang}${href}`

  useEffect(() => {
    if (observed.current) return
    const el = document.getElementById(triggerElementId)
    if (!el) {
      // Fall back to scroll depth (70%)
      const onScroll = () => {
        const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        if (scrolled > 0.6) {
          setVisible(true)
          window.removeEventListener('scroll', onScroll)
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    observed.current = true
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerElementId])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <a
          href={destination}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {label}
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="flex-none text-text-muted hover:text-text-secondary transition-colors p-1"
          aria-label="Dismiss"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
