'use client'

// PromptQuorum Academy — the short result after a quiz or the final test. Positive tone: congratulations when passed,
// fireworks (a canvas animation, no library) for a perfect score, and a clear next step so the learner finds the
// certificate. Fireworks are skipped for people who asked their system for reduced motion.

import { useEffect, useRef, type ReactNode } from 'react'
import { PASS_MARK } from '@/lib/academy/scoring'
import type { AcademyCopy } from './copy'

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  hue: number
}

function Fireworks() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const fit = () => {
      const r = canvas.getBoundingClientRect()
      canvas.width = r.width
      canvas.height = r.height
    }
    fit()
    let sparks: Spark[] = []
    const burst = () => {
      const x = canvas.width * (0.15 + Math.random() * 0.7)
      const y = canvas.height * (0.1 + Math.random() * 0.4)
      const hue = Math.floor(Math.random() * 360)
      for (let i = 0; i < 46; i++) {
        const a = (Math.PI * 2 * i) / 46
        const v = 1.5 + Math.random() * 3
        sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, hue })
      }
    }
    const start = performance.now()
    let nextBurst = 0
    let raf = 0
    const frame = (t: number) => {
      const elapsed = t - start
      if (elapsed >= nextBurst && elapsed < 3200) {
        burst()
        nextBurst += 450
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparks = sparks.filter((s) => s.life > 0)
      for (const s of sparks) {
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.04
        s.life -= 0.014
        ctx.globalAlpha = Math.max(s.life, 0)
        ctx.fillStyle = `hsl(${s.hue} 90% 60%)`
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2.4, 0, Math.PI * 2)
        ctx.fill()
      }
      if (elapsed < 3200 || sparks.length) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
}

export function FinishedCard({
  tx,
  title,
  scoreLine,
  correct,
  total,
  isFinal,
  buttonLabel,
  onContinue,
  share,
  children,
}: {
  tx: AcademyCopy
  title: string
  scoreLine: string
  correct: number
  total: number
  isFinal: boolean
  buttonLabel: string
  onContinue: () => void
  /** shown only when the result is a pass: the share buttons (see SuccessShare) */
  share?: ReactNode
  children?: ReactNode
}) {
  const pct = total > 0 ? (correct / total) * 100 : 0
  const perfect = total > 0 && correct >= total
  const passed = pct >= PASS_MARK
  return (
    <section className={`relative space-y-4 overflow-hidden rounded-2xl border p-5 sm:p-6 ${passed ? 'border-green-200 bg-green-50/40' : 'border-purple-100 bg-white'}`} aria-live="polite">
      {perfect && <Fireworks />}
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {passed && (
        <p className="text-2xl font-bold text-green-800">
          <span aria-hidden="true">🎉 </span>
          {perfect ? tx.congratsPerfect : tx.congratsPassed}
        </p>
      )}
      <p className="text-lg text-gray-800">{scoreLine}</p>
      {isFinal ? <p className="text-gray-800">{passed ? tx.finalNextSteps : tx.notPassedYet}</p> : passed && <p className="text-gray-800">{tx.wellDone}</p>}
      {children}
      {passed && share}
      <button type="button" onClick={onContinue} className="relative rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
        {isFinal && passed ? tx.seeResultsCertificate : buttonLabel}
      </button>
    </section>
  )
}
