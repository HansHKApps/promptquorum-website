'use client'

/**
 * BetaFloatingCta
 * ----------------
 * Small, low-opacity floating button (bottom-right) that expands on
 * hover/tap into a short info card + CTA linking to the site's own
 * /download page. Matches this repo's existing conventions:
 *
 *  - Design tokens: bg-primary / text-primary-foreground / text-text-* /
 *    surface-elevated / border-primary/15 — same classes used in
 *    DownloadClient.tsx's PlatformCard.
 *  - Dismiss-and-remember pattern copied from PushPromptBanner.tsx
 *    (localStorage timestamp, not a session flag).
 *  - Scroll/delay trigger pattern copied from StickyNextStepBar.tsx.
 *  - i18n via the existing useLang() hook + a COPY record, same shape as
 *    DownloadClient.tsx / PushPromptBanner.tsx. This widget is mounted
 *    once in the root layout (like PushPromptBanner), so it resolves its
 *    own language from the URL client-side rather than receiving
 *    initialLang as a prop — the initialLang requirement in CLAUDE.md
 *    applies to page-level components rendering server-resolved article
 *    content, not global chrome mounted in layout.tsx.
 *
 * WHY IT LINKS TO /download AND NOT THE RAW GOOGLE DRIVE URL:
 * /download (src/components/DownloadClient.tsx) already has the per-OS
 * picker, the "unsigned build" Gatekeeper/SmartScreen explainer, and pulls
 * from the same GOOGLE_DRIVE_URL constant. Pointing here instead of
 * hardcoding the Drive link a second time keeps there being exactly one
 * place to update if/when installers move off Drive (see the TODO(Hans)
 * in DownloadClient.tsx).
 *
 * Closing the card is easy on purpose: hover-out (desktop), tapping the X,
 * tapping/clicking anywhere outside the widget, or Escape all collapse it
 * back to the small pill — only the X counts as a full 14-day dismissal.
 *
 * This is an open beta — copy explicitly invites sharing, unlike the
 * earlier draft's "private beta" framing.
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import { cn } from '@/lib/utils'

const DISMISS_KEY = 'pq_beta_fab_dismissed_until'
const DISMISS_DURATION_MS = 14 * 24 * 60 * 60 * 1000 // 14 days
const SHOW_DELAY_MS = 3000 // fallback timer
const SCROLL_DEPTH_TRIGGER = 0.2 // 20% down the page

// Don't show on pages that already carry this exact CTA in-context.
const HIDDEN_PATH_PATTERNS = [/\/download(\/|$)/, /\/waitlist(\/|$)/]

// High-intent clusters: visitors here are already evaluating local/AI-model
// tooling, so the widget goes bigger, brighter, and pulses to earn the extra
// attention. Everywhere else (balcony-solar, smart-home, blog, homepage, etc.)
// it stays at the calmer default so it doesn't feel like it's chasing people
// who landed for an unrelated topic.
const LOCALE_PREFIX = '(?:de|fr|ja|zh|es|pt|ar|ko)'
const HIGH_INTENT_RE = new RegExp(`^/(?:${LOCALE_PREFIX}/)?(?:local-llms|power-local-llm)(?:/|$)`)

function getIntensity(pathname: string | null): 'high' | 'default' {
  if (!pathname) return 'default'
  return HIGH_INTENT_RE.test(pathname) ? 'high' : 'default'
}

type Copy = {
  pillLabel: string
  title: string
  body: string
  ctaWithOs: string // use {os} as the placeholder
  ctaFallback: string
  dismissAria: string
  toggleAria: string
}

const COPY: Record<string, Copy> = {
  en: {
    pillLabel: 'Beta',
    title: 'Try the beta',
    body: 'Send one prompt to 25+ AI models and compare answers — free, open beta. Share it with anyone.',
    ctaWithOs: 'Download for {os}',
    ctaFallback: 'Get the beta',
    dismissAria: 'Dismiss',
    toggleAria: 'Try the PromptQuorum beta',
  },
  de: {
    pillLabel: 'Beta',
    title: 'Beta testen',
    body: 'Senden Sie einen Prompt an über 25 KI-Modelle und vergleichen Sie die Antworten — kostenlose, offene Beta. Teilen Sie sie gerne weiter.',
    ctaWithOs: 'Für {os} herunterladen',
    ctaFallback: 'Beta holen',
    dismissAria: 'Schließen',
    toggleAria: 'PromptQuorum-Beta testen',
  },
  fr: {
    pillLabel: 'Bêta',
    title: 'Essayer la bêta',
    body: "Envoyez un même prompt à plus de 25 modèles d'IA et comparez les réponses — bêta gratuite et ouverte. Partagez-la librement.",
    ctaWithOs: 'Télécharger pour {os}',
    ctaFallback: 'Obtenir la bêta',
    dismissAria: 'Fermer',
    toggleAria: 'Essayer la bêta PromptQuorum',
  },
  es: {
    pillLabel: 'Beta',
    title: 'Probar la beta',
    body: 'Envía un mismo prompt a más de 25 modelos de IA y compara las respuestas — beta gratuita y abierta. Compártela con quien quieras.',
    ctaWithOs: 'Descargar para {os}',
    ctaFallback: 'Obtener la beta',
    dismissAria: 'Cerrar',
    toggleAria: 'Probar la beta de PromptQuorum',
  },
  pt: {
    pillLabel: 'Beta',
    title: 'Experimentar a beta',
    body: 'Envie um único prompt para mais de 25 modelos de IA e compare as respostas — beta gratuita e aberta. Compartilhe à vontade.',
    ctaWithOs: 'Baixar para {os}',
    ctaFallback: 'Obter a beta',
    dismissAria: 'Fechar',
    toggleAria: 'Experimentar a beta do PromptQuorum',
  },
  ja: {
    pillLabel: 'ベータ',
    title: 'ベータ版を試す',
    body: '1つのプロンプトを25以上のAIモデルに送信し、回答を比較できます — 無料のオープンベータ。共有も自由です。',
    ctaWithOs: '{os}版をダウンロード',
    ctaFallback: 'ベータ版を入手',
    dismissAria: '閉じる',
    toggleAria: 'PromptQuorumベータ版を試す',
  },
  zh: {
    pillLabel: '测试版',
    title: '试用测试版',
    body: '将同一条提示词发送给 25+ 个 AI 模型并比较回答——免费公开测试版，欢迎分享。',
    ctaWithOs: '下载 {os} 版',
    ctaFallback: '获取测试版',
    dismissAria: '关闭',
    toggleAria: '试用 PromptQuorum 测试版',
  },
  ko: {
    pillLabel: '베타',
    title: '베타 체험하기',
    body: '하나의 프롬프트를 25개 이상의 AI 모델에 보내고 답변을 비교하세요 — 무료 오픈 베타. 자유롭게 공유하세요.',
    ctaWithOs: '{os}용 다운로드',
    ctaFallback: '베타 받기',
    dismissAria: '닫기',
    toggleAria: 'PromptQuorum 베타 체험하기',
  },
  ar: {
    pillLabel: 'تجريبي',
    title: 'جرّب النسخة التجريبية',
    body: 'أرسل أمرًا واحدًا إلى أكثر من 25 نموذج ذكاء اصطناعي وقارن الإجابات — نسخة تجريبية مجانية ومفتوحة. شاركها مع من تشاء.',
    ctaWithOs: 'تنزيل لـ {os}',
    ctaFallback: 'احصل على النسخة التجريبية',
    dismissAria: 'إغلاق',
    toggleAria: 'جرّب النسخة التجريبية من PromptQuorum',
  },
}

function detectOS(): string | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent
  if (/Mac/i.test(ua)) return 'Mac'
  if (/Win/i.test(ua)) return 'Windows'
  if (/Linux/i.test(ua)) return 'Linux'
  return null
}

function isHiddenPath(pathname: string | null): boolean {
  if (!pathname) return false
  return HIDDEN_PATH_PATTERNS.some((re) => re.test(pathname))
}

export function BetaFloatingCta() {
  const pathname = usePathname()
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const dir = lang === 'ar' ? 'rtl' : undefined
  const intensity = getIntensity(pathname)
  const isHigh = intensity === 'high'

  const [mountedVisible, setMountedVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [os, setOs] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Click/tap anywhere outside the widget, or Escape, collapses the card
  // back to the small pill — without fully dismissing it (that's the X
  // button / dismiss()). Matters most on touch devices, which have no
  // onMouseLeave to fall back on.
  useEffect(() => {
    if (!expanded) return

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [expanded])

  // Respect prior dismissal, then arm the delay/scroll triggers.
  useEffect(() => {
    try {
      const until = localStorage.getItem(DISMISS_KEY)
      if (until && Date.now() < parseInt(until, 10)) {
        setDismissed(true)
        return
      }
    } catch {
      /* ignore — fall through to showing it */
    }

    setOs(detectOS())

    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      setMountedVisible(true)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max > SCROLL_DEPTH_TRIGGER) show()
    }

    const timer = setTimeout(show, SHOW_DELAY_MS)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_DURATION_MS))
    } catch {
      /* ignore */
    }
    setDismissed(true)
  }, [])

  if (dismissed || !mountedVisible || isHiddenPath(pathname)) return null

  const downloadHref = lang === 'en' ? '/download' : `/${lang}/download`
  const ctaLabel = os ? c.ctaWithOs.replace('{os}', os) : c.ctaFallback

  return (
    <div
      ref={containerRef}
      dir={dir}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="fixed z-[80] bottom-20 right-4 md:bottom-6 md:right-6"
    >
      {!expanded && (
        <div className="relative">
          {isHigh && (
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60"
            />
          )}
          <button
            onClick={() => setExpanded(true)}
            aria-label={c.toggleAria}
            aria-expanded={expanded}
            className={cn(
              'relative flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity',
              isHigh
                ? 'px-4 py-2.5 text-sm font-semibold opacity-90 hover:opacity-100'
                : 'px-3 py-2 text-xs font-medium opacity-65 hover:opacity-100'
            )}
          >
            <svg
              width={isHigh ? 18 : 16}
              height={isHigh ? 18 : 16}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="flex-none"
            >
              <path
                d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0M5.52 16h12.96"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{c.pillLabel}</span>
          </button>
        </div>
      )}

      {expanded && (
        <div className="w-72 rounded-xl border border-primary/15 bg-surface-elevated p-4 shadow-xl">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-text-primary">{c.title}</h3>
            <button
              onClick={dismiss}
              aria-label={c.dismissAria}
              className="flex-none text-text-muted hover:text-text-secondary transition-colors p-1 -m-1"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{c.body}</p>
          <a
            href={downloadHref}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  )
}
