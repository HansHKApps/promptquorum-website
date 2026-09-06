'use client'

/**
 * Floating "page structure" button. Scans the rendered article for h2 headings
 * (no per-cluster wiring needed — reads whatever SectionBlock/BodySection variant
 * happened to render) and lets the reader jump to a section. Stays open as a mini
 * sidebar with scrollspy highlighting while scrolling, per product choice.
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'

const HEADER_OFFSET = 80
const MIN_HEADINGS = 3

interface Heading {
  text: string
  el: HTMLElement
}

type Copy = {
  navLabel: string
  showAria: string
  hideAria: string
}

const COPY: Record<string, Copy> = {
  en: { navLabel: 'Page sections', showAria: 'Show page sections', hideAria: 'Close page sections' },
  de: { navLabel: 'Seitenabschnitte', showAria: 'Seitenabschnitte anzeigen', hideAria: 'Seitenabschnitte schließen' },
  fr: { navLabel: 'Sections de la page', showAria: 'Afficher les sections de la page', hideAria: 'Fermer les sections de la page' },
  es: { navLabel: 'Secciones de la página', showAria: 'Mostrar secciones de la página', hideAria: 'Cerrar secciones de la página' },
  pt: { navLabel: 'Seções da página', showAria: 'Mostrar seções da página', hideAria: 'Fechar seções da página' },
  ja: { navLabel: 'ページの構成', showAria: 'ページの構成を表示', hideAria: 'ページの構成を閉じる' },
  zh: { navLabel: '页面结构', showAria: '显示页面结构', hideAria: '关闭页面结构' },
  ko: { navLabel: '페이지 구성', showAria: '페이지 구성 표시', hideAria: '페이지 구성 닫기' },
  ar: { navLabel: 'أقسام الصفحة', showAria: 'إظهار أقسام الصفحة', hideAria: 'إغلاق أقسام الصفحة' },
}

export function TableOfContentsButton() {
  const pathname = usePathname()
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const isRtl = lang === 'ar'
  const [headings, setHeadings] = useState<Heading[]>([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)

    const scan = () => {
      const main = document.getElementById('main')
      if (!main) return
      const nodes = Array.from(main.querySelectorAll<HTMLElement>('h2')).filter(
        (el) => el.textContent && el.textContent.trim().length > 0
      )
      setHeadings(nodes.map((el) => ({ text: el.textContent!.trim(), el })))
    }

    const raf = requestAnimationFrame(() => setTimeout(scan, 150))
    return () => {
      cancelAnimationFrame(raf)
      setHeadings([])
    }
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const idx = headings.findIndex((h) => h.el === visible[0].target)
          if (idx !== -1) setActiveIndex(idx)
        }
      },
      { rootMargin: `-${HEADER_OFFSET}px 0px -70% 0px`, threshold: 0 }
    )
    headings.forEach((h) => observer.observe(h.el))
    return () => observer.disconnect()
  }, [headings])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const jumpTo = useCallback((el: HTMLElement) => {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  if (headings.length < MIN_HEADINGS) return null

  return (
    <div
      ref={panelRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed z-[70] bottom-40 md:bottom-24 ${isRtl ? 'left-4 md:left-6' : 'right-4 md:right-6'}`}
    >
      {open && (
        <div
          role="navigation"
          aria-label={c.navLabel}
          className="mb-3 w-64 max-h-[60vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          <ul className="py-2">
            {headings.map((h, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => jumpTo(h.el)}
                  className={`w-full px-4 py-2 text-sm leading-snug transition-colors ${
                    i === activeIndex
                      ? 'bg-purple-50 text-purple-700 font-semibold border-l-2 border-purple-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? c.hideAria : c.showAria}
        className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="18" x2="17" y2="18" />
        </svg>
      </button>
    </div>
  )
}
