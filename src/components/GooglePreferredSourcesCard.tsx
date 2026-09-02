'use client'

/**
 * GooglePreferredSourcesCard
 * -------------------------
 * Subtle, non-intrusive card that appears after 30 seconds on article pages.
 * Educates users about Google preferred sources and provides a CTA.
 * Minimal visual footprint — no dark overlay, small card positioned discreetly.
 *
 * Trigger: 30 seconds on page OR return visit in same session
 * Dismissal: 14 days (localStorage)
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import { claimPromptSlot, releasePromptSlot } from '@/lib/promptSlot'
import { trackPrefSource } from '@/lib/preferredSource'
import { PreferredSourceConfirmDialog } from './PreferredSourceConfirmDialog'

const DISMISS_KEY = 'pq_google_ps_dismissed_until'
const DISMISS_DURATION_MS = 14 * 24 * 60 * 60 * 1000
const SHOWN_KEY = 'pq_google_ps_shown_until'
const SHOWN_DURATION_MS = 14 * 24 * 60 * 60 * 1000
const SHOW_DELAY_MS = 30 * 1000
const SLOT_ID = 'google_preferred_sources'

const HIDDEN_PATH_PATTERNS = [/\/download(\/|$)/, /\/waitlist(\/|$)/, /\/settings(\/|$)/, /\/preferences(\/|$)/]

type Copy = {
  title: string
  description: string
  cta: string
  dismiss: string
}

const COPY: Record<string, Copy> = {
  en: {
    title: 'Improve your PromptQuorum results in Google',
    description: 'Add PromptQuorum to your Google preferred sources. Your searches will prioritize our guides and tools in Google results.',
    cta: 'Set as Preferred Source',
    dismiss: 'Not now',
  },
  de: {
    title: 'Verbessern Sie Ihre PromptQuorum-Ergebnisse in Google',
    description: 'Fügen Sie PromptQuorum zu Ihren bevorzugten Google-Quellen hinzu. Ihre Suchergebnisse werden unsere Leitfäden und Tools priorisieren.',
    cta: 'Als bevorzugte Quelle festlegen',
    dismiss: 'Jetzt nicht',
  },
  fr: {
    title: 'Améliorez vos résultats PromptQuorum dans Google',
    description: 'Ajoutez PromptQuorum à vos sources préférées dans Google. Vos recherches prioriseront nos guides et outils dans les résultats.',
    cta: 'Définir comme source préférée',
    dismiss: 'Pas maintenant',
  },
  es: {
    title: 'Mejora tus resultados de PromptQuorum en Google',
    description: 'Añade PromptQuorum a tus fuentes preferidas de Google. Tus búsquedas priorizarán nuestras guías y herramientas en los resultados.',
    cta: 'Establecer como fuente preferida',
    dismiss: 'Ahora no',
  },
  pt: {
    title: 'Melhore seus resultados do PromptQuorum no Google',
    description: 'Adicione PromptQuorum às suas fontes preferidas do Google. Suas buscas priorizarão nossos guias e ferramentas nos resultados.',
    cta: 'Definir como fonte preferida',
    dismiss: 'Agora não',
  },
  ja: {
    title: 'Google での PromptQuorum 結果を改善',
    description: 'PromptQuorum を Google の優先ソースに追加してください。検索結果で当社のガイドとツールが優先されます。',
    cta: 'Google で優先ソースに設定',
    dismiss: 'あとで',
  },
  zh: {
    title: '改进您在 Google 中的 PromptQuorum 结果',
    description: '将 PromptQuorum 添加到您的 Google 优先来源。您的搜索将在结果中优先显示我们的指南和工具。',
    cta: '在 Google 中设为优先来源',
    dismiss: '暂不设置',
  },
  ko: {
    title: 'Google에서 PromptQuorum 결과 개선',
    description: 'PromptQuorum을 Google의 선호 소스에 추가하세요. 검색 결과에서 당사의 가이드와 도구를 우선으로 표시합니다.',
    cta: 'Google에서 선호 소스로 설정',
    dismiss: '나중에',
  },
  ar: {
    title: 'حسّن نتائج PromptQuorum في Google',
    description: 'أضف PromptQuorum إلى مصادرك المفضلة في Google. ستعطي عمليات البحث الأولوية لأدلتنا وأدواتنا في النتائج.',
    cta: 'تعيين كمصدر مفضل في Google',
    dismiss: 'ليس الآن',
  },
}

function isHiddenPath(pathname: string | null): boolean {
  if (!pathname) return false
  return HIDDEN_PATH_PATTERNS.some((re) => re.test(pathname))
}

export function GooglePreferredSourcesCard() {
  const pathname = usePathname()
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined

  const [mountedVisible, setMountedVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Respect prior dismissal or a recent passive "shown" impression, then arm the 30-second timer
  useEffect(() => {
    try {
      const until = localStorage.getItem(DISMISS_KEY)
      if (until && Date.now() < parseInt(until, 10)) {
        setDismissed(true)
        return
      }
      const shownUntil = localStorage.getItem(SHOWN_KEY)
      if (shownUntil && Date.now() < parseInt(shownUntil, 10)) {
        setDismissed(true)
        return
      }
    } catch {
      /* ignore — fall through to showing it */
    }

    timerRef.current = setTimeout(() => {
      // Never stack on the push opt-in banner — one interruptive prompt at a time.
      if (!claimPromptSlot(SLOT_ID)) return
      setMountedVisible(true)
      try {
        localStorage.setItem(SHOWN_KEY, String(Date.now() + SHOWN_DURATION_MS))
      } catch {
        /* ignore */
      }
      trackPrefSource('shown', { surface: 'popup_card', source_page: pathname, lang })
    }, SHOW_DELAY_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      releasePromptSlot(SLOT_ID)
    }
  }, [pathname, lang])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setDismissed(true)
    setMountedVisible(false)
    releasePromptSlot(SLOT_ID)
  }, [])

  if (dismissed || !mountedVisible || isHiddenPath(pathname)) return null

  return (
    <div
      dir={dir}
      className="fixed z-50 bottom-6 left-6 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-text-primary">{c.title}</h3>
          <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{c.description}</p>
          <div className="mt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setShowConfirm(true)
                trackPrefSource('cta_clicked', { surface: 'popup_card', source_page: pathname, lang })
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {c.cta}
            </button>
            <button
              onClick={() => {
                dismiss()
                trackPrefSource('dismissed', { surface: 'popup_card', source_page: pathname, lang })
              }}
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              {c.dismiss}
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            dismiss()
            trackPrefSource('dismissed', { surface: 'popup_card', via: 'close_button', source_page: pathname, lang })
          }}
          aria-label="Close"
          className="flex-none text-text-muted hover:text-text-secondary transition-colors p-1 -m-1"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {showConfirm && (
        <PreferredSourceConfirmDialog
          surface="popup_card"
          lang={lang}
          sourcePage={pathname}
          dir={dir}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </div>
  )
}
