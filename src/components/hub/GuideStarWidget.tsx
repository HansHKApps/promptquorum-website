'use client'

import { useState, useRef, useEffect } from 'react'
import { useLang } from '@/hooks/useLang'
import type { HubSignal } from './hub-utils'

export interface RecommendedArticle {
  title: string
  url: string
  theme: string
  level: string
}

interface Props {
  signal: HubSignal
  recommendations: RecommendedArticle[]
}

const WIDGET_LABELS: Record<string, Record<string, string>> = {
  en: { title: 'Recommended for you', empty: 'Select a level above to get personalized recommendations' },
  de: { title: 'Für Sie empfohlen', empty: 'Wählen Sie oben ein Niveau für persönliche Empfehlungen' },
  fr: { title: 'Recommandé pour vous', empty: 'Sélectionnez un niveau ci-dessus pour des recommandations personnalisées' },
  ja: { title: 'おすすめ', empty: 'レベルを選択してパーソナライズされたおすすめを表示' },
  zh: { title: '为您推荐', empty: '选择上方的级别以获取个性化推荐' },
  es: { title: 'Recomendado para ti', empty: 'Selecciona un nivel arriba para obtener recomendaciones personalizadas' },
}

export function GuideStarWidget({ signal, recommendations }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const lang = useLang()
  const t = WIDGET_LABELS[lang] ?? WIDGET_LABELS.en

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick, { passive: true })
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  const hasRecs = recommendations.length > 0

  // Only show the widget once a signal is active
  if (signal.type === 'none') return null

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-40">
      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-3 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {t.title}
          </p>
          {hasRecs ? (
            <div className="space-y-1">
              {recommendations.slice(0, 5).map((rec, i) => (
                <a
                  key={i}
                  href={rec.url}
                  className="block px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-900 leading-snug">{rec.title}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{rec.theme}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 py-3">{t.empty}</p>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200
          ${isOpen
            ? 'bg-blue-600 text-white shadow-blue-200'
            : 'bg-white text-gray-500 hover:text-blue-600 hover:shadow-xl border border-gray-200'
          }
        `}
        aria-label="Guide recommendations"
      >
        <svg className="w-5 h-5" fill={isOpen ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>
    </div>
  )
}
