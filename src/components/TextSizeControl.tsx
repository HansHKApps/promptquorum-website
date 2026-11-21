'use client'

// Two small buttons (A- / A+) for the Academy and Ask Hans windows: the reader makes the text, and with it the
// buttons, smaller or larger to fit their reading habits. The choice is a plain display preference (one number in
// localStorage, shared by both windows, no personal data) and is applied with CSS zoom to the window content.

import { useCallback, useEffect, useState } from 'react'
import type { Lang } from '@/lib/i18n/constants'

export const TEXT_SCALE_KEY = 'pq_window_text_scale'
export const TEXT_SCALE_STEPS = [0.85, 1, 1.15, 1.3, 1.5, 1.75] as const
const DEFAULT_STEP = 1
const EVENT = 'pq:text-scale'

const LABELS: Record<Lang, { smaller: string; larger: string }> = {
  en: { smaller: 'Smaller text', larger: 'Larger text' },
  de: { smaller: 'Text verkleinern', larger: 'Text vergrößern' },
  fr: { smaller: 'Réduire le texte', larger: 'Agrandir le texte' },
  es: { smaller: 'Texto más pequeño', larger: 'Texto más grande' },
  pt: { smaller: 'Texto menor', larger: 'Texto maior' },
  ja: { smaller: '文字を小さく', larger: '文字を大きく' },
  zh: { smaller: '缩小文字', larger: '放大文字' },
  ar: { smaller: 'تصغير النص', larger: 'تكبير النص' },
  ko: { smaller: '글자 작게', larger: '글자 크게' },
}

function readStep(): number {
  try {
    const n = Number(localStorage.getItem(TEXT_SCALE_KEY))
    return TEXT_SCALE_STEPS.includes(n as (typeof TEXT_SCALE_STEPS)[number]) ? n : DEFAULT_STEP
  } catch {
    return DEFAULT_STEP
  }
}

/** Current text scale (1 = normal). Read after mount; changes in one window reach the other one. */
export function useTextScale() {
  const [scale, setScaleState] = useState<number>(DEFAULT_STEP)
  useEffect(() => {
    setScaleState(readStep())
    const on = () => setScaleState(readStep())
    window.addEventListener(EVENT, on)
    return () => window.removeEventListener(EVENT, on)
  }, [])
  const setScale = useCallback((n: number) => {
    setScaleState(n)
    try {
      localStorage.setItem(TEXT_SCALE_KEY, String(n))
    } catch {}
    window.dispatchEvent(new Event(EVENT))
  }, [])
  return { scale, setScale }
}

const BTN = 'flex h-8 min-w-8 items-center justify-center rounded-lg px-1 font-semibold text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40'

export function TextSizeControl({ lang, scale, setScale }: { lang: Lang; scale: number; setScale: (n: number) => void }) {
  const l = LABELS[lang] ?? LABELS.en
  const i = TEXT_SCALE_STEPS.indexOf(scale as (typeof TEXT_SCALE_STEPS)[number])
  const step = (d: number) => setScale(TEXT_SCALE_STEPS[Math.min(Math.max(i + d, 0), TEXT_SCALE_STEPS.length - 1)])
  return (
    <span className="flex items-center" role="group" aria-label={`${l.smaller} / ${l.larger}`}>
      <button type="button" onClick={() => step(-1)} disabled={i <= 0} aria-label={l.smaller} title={l.smaller} className={`${BTN} text-xs`}>
        A<span aria-hidden="true">−</span>
      </button>
      <button type="button" onClick={() => step(1)} disabled={i >= TEXT_SCALE_STEPS.length - 1} aria-label={l.larger} title={l.larger} className={`${BTN} text-base`}>
        A<span aria-hidden="true">+</span>
      </button>
    </span>
  )
}
