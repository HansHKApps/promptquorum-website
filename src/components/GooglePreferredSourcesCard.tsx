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
import { cn } from '@/lib/utils'

const DISMISS_KEY = 'pq_google_ps_dismissed_until'
const DISMISS_DURATION_MS = 14 * 24 * 60 * 60 * 1000
const SHOW_DELAY_MS = 30 * 1000

const HIDDEN_PATH_PATTERNS = [/\/download(\/|$)/, /\/waitlist(\/|$)/, /\/settings(\/|$)/, /\/preferences(\/|$)/]

type Copy = {
  title: string
  description: string
  cta: string
  dismiss: string
  confirmTitle: string
  confirmBody: string
  confirmCta: string
  confirmDismiss: string
}

const COPY: Record<string, Copy> = {
  en: {
    title: 'Improve your PromptQuorum results in Google',
    description: 'Add PromptQuorum to your Google preferred sources. Your searches will prioritize our guides and tools in Google results.',
    cta: 'Set as Preferred Source',
    dismiss: 'Not now',
    confirmTitle: 'Set PromptQuorum as a preferred source?',
    confirmBody: 'This will open Google\'s settings page where you can confirm adding PromptQuorum to your preferred sources. Your future searches will prioritize our content.',
    confirmCta: 'Continue to Google',
    confirmDismiss: 'Cancel',
  },
  de: {
    title: 'Verbessern Sie Ihre PromptQuorum-Ergebnisse in Google',
    description: 'Fügen Sie PromptQuorum zu Ihren bevorzugten Google-Quellen hinzu. Ihre Suchergebnisse werden unsere Leitfäden und Tools priorisieren.',
    cta: 'Als bevorzugte Quelle festlegen',
    dismiss: 'Jetzt nicht',
    confirmTitle: 'PromptQuorum als bevorzugte Quelle festlegen?',
    confirmBody: 'Dies öffnet Googles Einstellungsseite, auf der Sie PromptQuorum zu Ihren bevorzugten Quellen hinzufügen können. Zukünftige Suchen werden unsere Inhalte priorisieren.',
    confirmCta: 'Zu Google weiterleiten',
    confirmDismiss: 'Abbrechen',
  },
  fr: {
    title: 'Améliorez vos résultats PromptQuorum dans Google',
    description: 'Ajoutez PromptQuorum à vos sources préférées dans Google. Vos recherches prioriseront nos guides et outils dans les résultats.',
    cta: 'Définir comme source préférée',
    dismiss: 'Pas maintenant',
    confirmTitle: 'Définir PromptQuorum comme source préférée?',
    confirmBody: 'Ceci ouvrira la page de paramètres de Google où vous pourrez confirmer l\'ajout de PromptQuorum à vos sources préférées. Vos futures recherches prioriseront notre contenu.',
    confirmCta: 'Continuer vers Google',
    confirmDismiss: 'Annuler',
  },
  es: {
    title: 'Mejora tus resultados de PromptQuorum en Google',
    description: 'Añade PromptQuorum a tus fuentes preferidas de Google. Tus búsquedas priorizarán nuestras guías y herramientas en los resultados.',
    cta: 'Establecer como fuente preferida',
    dismiss: 'Ahora no',
    confirmTitle: '¿Establecer PromptQuorum como fuente preferida?',
    confirmBody: 'Esto abrirá la página de configuración de Google donde puedes confirmar agregar PromptQuorum a tus fuentes preferidas. Tus futuras búsquedas priorizarán nuestro contenido.',
    confirmCta: 'Continuar a Google',
    confirmDismiss: 'Cancelar',
  },
  pt: {
    title: 'Melhore seus resultados do PromptQuorum no Google',
    description: 'Adicione PromptQuorum às suas fontes preferidas do Google. Suas buscas priorizarão nossos guias e ferramentas nos resultados.',
    cta: 'Definir como fonte preferida',
    dismiss: 'Agora não',
    confirmTitle: 'Definir PromptQuorum como fonte preferida?',
    confirmBody: 'Isso abrirá a página de configurações do Google onde você pode confirmar adicionar PromptQuorum às suas fontes preferidas. Suas futuras buscas priorizarão nosso conteúdo.',
    confirmCta: 'Continuar para Google',
    confirmDismiss: 'Cancelar',
  },
  ja: {
    title: 'Google での PromptQuorum 結果を改善',
    description: 'PromptQuorum を Google の優先ソースに追加してください。検索結果で当社のガイドとツールが優先されます。',
    cta: 'Google で優先ソースに設定',
    dismiss: 'あとで',
    confirmTitle: 'PromptQuorum を優先ソースに設定しますか?',
    confirmBody: 'Google の設定ページが開きます。ここで PromptQuorum を優先ソースに追加することを確認できます。今後の検索では当社のコンテンツが優先されます。',
    confirmCta: 'Google に進む',
    confirmDismiss: 'キャンセル',
  },
  zh: {
    title: '改进您在 Google 中的 PromptQuorum 结果',
    description: '将 PromptQuorum 添加到您的 Google 优先来源。您的搜索将在结果中优先显示我们的指南和工具。',
    cta: '在 Google 中设为优先来源',
    dismiss: '暂不设置',
    confirmTitle: '将 PromptQuorum 设为优先来源?',
    confirmBody: '这将打开 Google 设置页面，您可以在其中确认将 PromptQuorum 添加到您的优先来源。您的未来搜索将优先显示我们的内容。',
    confirmCta: '继续前往 Google',
    confirmDismiss: '取消',
  },
  ko: {
    title: 'Google에서 PromptQuorum 결과 개선',
    description: 'PromptQuorum을 Google의 선호 소스에 추가하세요. 검색 결과에서 당사의 가이드와 도구를 우선으로 표시합니다.',
    cta: 'Google에서 선호 소스로 설정',
    dismiss: '나중에',
    confirmTitle: 'PromptQuorum을 선호 소스로 설정하시겠습니까?',
    confirmBody: 'Google 설정 페이지가 열리며, 여기서 PromptQuorum을 선호 소스에 추가하는 것을 확인할 수 있습니다. 향후 검색 결과에서 당사의 콘텐츠가 우선 표시됩니다.',
    confirmCta: 'Google로 계속',
    confirmDismiss: '취소',
  },
  ar: {
    title: 'حسّن نتائج PromptQuorum في Google',
    description: 'أضف PromptQuorum إلى مصادرك المفضلة في Google. ستعطي عمليات البحث الأولوية لأدلتنا وأدواتنا في النتائج.',
    cta: 'تعيين كمصدر مفضل في Google',
    dismiss: 'ليس الآن',
    confirmTitle: 'تعيين PromptQuorum كمصدر مفضل؟',
    confirmBody: 'سيؤدي هذا إلى فتح صفحة إعدادات Google حيث يمكنك تأكيد إضافة PromptQuorum إلى مصادرك المفضلة. ستعطي عمليات البحث المستقبلية الأولوية لمحتوانا.',
    confirmCta: 'المتابعة إلى Google',
    confirmDismiss: 'إلغاء',
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

  // Respect prior dismissal, then arm the 30-second timer
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

    timerRef.current = setTimeout(() => {
      setMountedVisible(true)
      try {
        window.umami?.track('google_preferred_sources_shown', {
          source_page: pathname,
          lang,
        })
      } catch {
        // silent
      }
    }, SHOW_DELAY_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
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
              onClick={() => setShowConfirm(true)}
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {c.cta}
            </button>
            <button
              onClick={() => {
                dismiss()
                try {
                  window.umami?.track('google_preferred_sources_dismiss', {
                    source_page: pathname,
                    lang,
                  })
                } catch {
                  // silent
                }
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
            try {
              window.umami?.track('google_preferred_sources_dismiss', {
                via: 'close_button',
                source_page: pathname,
                lang,
              })
            } catch {
              // silent
            }
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
        <div
          dir={dir}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-text-primary">{c.confirmTitle}</h2>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">{c.confirmBody}</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-gray-50"
              >
                {c.confirmDismiss}
              </button>
              <button
                onClick={() => {
                  try {
                    window.umami?.track('google_preferred_sources_click', {
                      via: 'card_confirm',
                      source_page: pathname,
                      lang,
                    })
                  } catch {
                    // silent
                  }
                  window.open(
                    'https://google.com/preferences/source?q=promptquorum.com',
                    'GooglePreferredSources',
                    'width=600,height=700,resizable=yes,scrollbars=yes'
                  )
                  setShowConfirm(false)
                }}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {c.confirmCta}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
