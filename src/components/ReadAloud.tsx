'use client'

// "Read aloud" with the browser's built-in speech synthesis (Web Speech API): no server, no key, no cost. The text is
// spoken by the voice installed on the learner's device; quality therefore depends on the device. The button is not
// shown when the browser has no voice for the language. Text is read sentence by sentence (long utterances are cut
// off by Chrome otherwise). Only one reader is active at a time; leaving the page or unmounting stops it.

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/i18n/constants'

const BCP47: Record<Lang, string> = { en: 'en-US', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', pt: 'pt-BR', ja: 'ja-JP', zh: 'zh-CN', ar: 'ar-SA', ko: 'ko-KR' }
export const READ_ALOUD_RATES = [0.8, 1, 1.25, 1.5] as const
const RATE_KEY = 'pq_read_aloud_rate'

const LABELS: Record<Lang, { read: string; pause: string; resume: string; stop: string; speed: string }> = {
  en: { read: 'Read aloud', pause: 'Pause', resume: 'Resume', stop: 'Stop', speed: 'Speed' },
  de: { read: 'Vorlesen', pause: 'Pause', resume: 'Fortsetzen', stop: 'Stopp', speed: 'Tempo' },
  fr: { read: 'Lire à voix haute', pause: 'Pause', resume: 'Reprendre', stop: 'Arrêter', speed: 'Vitesse' },
  es: { read: 'Leer en voz alta', pause: 'Pausa', resume: 'Reanudar', stop: 'Detener', speed: 'Velocidad' },
  pt: { read: 'Ler em voz alta', pause: 'Pausar', resume: 'Retomar', stop: 'Parar', speed: 'Velocidade' },
  ja: { read: '読み上げ', pause: '一時停止', resume: '再開', stop: '停止', speed: '速度' },
  zh: { read: '朗读', pause: '暂停', resume: '继续', stop: '停止', speed: '语速' },
  ar: { read: 'قراءة بصوت عالٍ', pause: 'إيقاف مؤقت', resume: 'متابعة', stop: 'إيقاف', speed: 'السرعة' },
  ko: { read: '소리 내어 읽기', pause: '일시정지', resume: '계속', stop: '정지', speed: '속도' },
}

/** Plain speakable text: markdown marks and list bullets removed. */
export function speakable(md: string): string {
  return md
    .replace(/[*_`#>]+/g, '')
    .replace(/^\s*[-•]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Splits into sentence-sized chunks (CJK/Arabic punctuation included), each at most ~220 characters. */
export function chunkText(text: string): string[] {
  const parts = text.match(/[^.!?。！？؟\n]+[.!?。！？؟]*\s*/g) ?? [text]
  const out: string[] = []
  for (const p of parts) {
    let s = p.trim()
    while (s.length > 220) {
      const cut = s.lastIndexOf(' ', 220)
      const at = cut > 60 ? cut : 220
      out.push(s.slice(0, at).trim())
      s = s.slice(at).trim()
    }
    if (s) out.push(s)
  }
  return out
}

function pickVoice(lang: Lang): SpeechSynthesisVoice | null {
  const want = BCP47[lang].toLowerCase()
  const voices = window.speechSynthesis.getVoices()
  const same = voices.filter((v) => v.lang.toLowerCase().replace('_', '-') === want)
  const base = voices.filter((v) => v.lang.toLowerCase().startsWith(lang))
  const pool = same.length ? same : base
  return pool.find((v) => v.localService) ?? pool[0] ?? null
}

export function ReadAloud({ lang: language, getText, className }: { lang: string; getText: () => string; className?: string }) {
  const lang: Lang = language in BCP47 ? (language as Lang) : 'en'
  const l = LABELS[lang] ?? LABELS.en
  const [supported, setSupported] = useState(false)
  const [state, setState] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [rate, setRate] = useState<number>(1)
  const run = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const check = () => setSupported(!!pickVoice(lang))
    check()
    window.speechSynthesis.addEventListener?.('voiceschanged', check)
    try {
      const r = Number(localStorage.getItem(RATE_KEY))
      if ((READ_ALOUD_RATES as readonly number[]).includes(r)) setRate(r)
    } catch {}
    return () => window.speechSynthesis.removeEventListener?.('voiceschanged', check)
  }, [lang])

  const stop = useCallback(() => {
    run.current++
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setState('idle')
  }, [])
  useEffect(() => () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
  }, [])

  const speak = (r: number, chunks: string[]) => {
    const id = ++run.current
    window.speechSynthesis.cancel()
    const voice = pickVoice(lang)
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c)
      u.lang = BCP47[lang]
      if (voice) u.voice = voice
      u.rate = r
      if (i === chunks.length - 1) u.onend = () => run.current === id && setState('idle')
      u.onerror = (e) => {
        if (run.current === id && e.error !== 'canceled' && e.error !== 'interrupted') setState('idle')
      }
      window.speechSynthesis.speak(u)
    })
    setState('playing')
  }
  const start = () => {
    const chunks = chunkText(speakable(getText()))
    if (chunks.length) speak(rate, chunks)
  }
  const changeRate = (r: number) => {
    setRate(r)
    try {
      localStorage.setItem(RATE_KEY, String(r))
    } catch {}
    if (state !== 'idle') stop()
  }

  if (!supported) return null
  const btn = 'rounded-lg border border-purple-200 bg-white px-3 py-1 text-sm font-medium text-purple-800 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600'
  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className ?? ''}`}>
      {state === 'idle' ? (
        <button type="button" onClick={start} className={btn}>
          <span aria-hidden="true">🔊 </span>
          {l.read}
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              if (state === 'playing') {
                window.speechSynthesis.pause()
                setState('paused')
              } else {
                window.speechSynthesis.resume()
                setState('playing')
              }
            }}
            className={btn}
          >
            {state === 'playing' ? l.pause : l.resume}
          </button>
          <button type="button" onClick={stop} className={btn}>
            {l.stop}
          </button>
        </>
      )}
      <label className="inline-flex items-center gap-1 text-xs text-gray-600">
        {l.speed}
        <select value={rate} onChange={(e) => changeRate(Number(e.target.value))} className="rounded border border-gray-300 bg-white px-1 py-0.5 text-xs">
          {READ_ALOUD_RATES.map((r) => (
            <option key={r} value={r}>
              {r}x
            </option>
          ))}
        </select>
      </label>
    </span>
  )
}
