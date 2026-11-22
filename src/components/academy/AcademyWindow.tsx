'use client'

// The Academy window: the same window as Ask Hans (see AskHansWindow.tsx) — full screen on phones; on desktop a
// movable, resizable window (default 50% x 80% of the viewport, sizes from ASK_HANS_WINDOW), maximize/restore,
// close (= minimize to the floating pill). Floating = non-modal; full screen = modal with focus trap, Esc closes.

import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { TextSizeControl, useTextScale } from '@/components/TextSizeControl'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { Logo } from '@/components/Logo'
import { ASK_HANS_WINDOW } from '@/lib/askhans/config'
import { getLangDir } from '@/lib/i18n/constants'
import type { AcademyLang } from '@/lib/academy/types'
import { AskIcon } from '@/components/askhans/icons'
import type { Rect } from '@/components/askhans/types'
import { useIsDesktop } from '@/components/askhans/useIsDesktop'
import { ACADEMY_COPY } from './copy'
import { durationBucket } from '@/lib/askhans/engagement'

type Edge = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

const EDGE_CURSOR: Record<Edge, string> = { n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', ne: 'nesw-resize', sw: 'nesw-resize', nw: 'nwse-resize', se: 'nwse-resize' }
const EDGE_STYLE: Record<Edge, string> = {
  n: 'top-0 left-3 right-3 h-2',
  s: 'bottom-0 left-3 right-3 h-2',
  e: 'right-0 top-3 bottom-3 w-2',
  w: 'left-0 top-3 bottom-3 w-2',
  ne: 'top-0 right-0 h-3 w-3',
  nw: 'top-0 left-0 h-3 w-3',
  se: 'bottom-0 right-0 h-3 w-3',
  sw: 'bottom-0 left-0 h-3 w-3',
}

function limits(vw: number, vh: number) {
  return {
    minW: Math.min(vw, Math.max(ASK_HANS_WINDOW.minWidthPx, (vw * ASK_HANS_WINDOW.minWidthPct) / 100)),
    minH: Math.min(vh, Math.max(ASK_HANS_WINDOW.minHeightPx, (vh * ASK_HANS_WINDOW.minHeightPct) / 100)),
  }
}

function defaultRect(vw: number, vh: number): Rect {
  const w = (vw * ASK_HANS_WINDOW.defaultWidthPct) / 100
  const h = (vh * ASK_HANS_WINDOW.defaultHeightPct) / 100
  return { x: (vw - w) / 2, y: (vh - h) / 2, w, h }
}

function clampRect(r: Rect, vw: number, vh: number): Rect {
  const { minW, minH } = limits(vw, vh)
  const w = Math.min(Math.max(r.w, minW), vw)
  const h = Math.min(Math.max(r.h, minH), vh)
  return { w, h, x: Math.min(Math.max(r.x, 0), vw - w), y: Math.min(Math.max(r.y, 0), vh - h) }
}

const FOCUSABLE = 'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'

/**
 * Active time with the Academy window open and the tab visible. When the window is closed (or the page is left) one
 * anonymous event with a coarse time bucket is sent; exact seconds, dates and identifiers never leave the browser.
 */
function useActiveTimeReport(): void {
  useEffect(() => {
    let seconds = 0
    let sent = false
    const tick = window.setInterval(() => {
      if (document.visibilityState === 'visible') seconds += 1
    }, 1000)
    const send = () => {
      if (sent || seconds < 1) return
      sent = true
      const body = JSON.stringify({ type: 'session', dur: durationBucket(seconds) })
      try {
        if (!navigator.sendBeacon?.('/api/academy/event', new Blob([body], { type: 'application/json' }))) {
          void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
        }
      } catch {
        // a lost counter must never affect the learner
      }
    }
    window.addEventListener('pagehide', send)
    return () => {
      window.clearInterval(tick)
      window.removeEventListener('pagehide', send)
      send()
    }
  }, [])
}

interface Props {
  lang: AcademyLang
  maximized: boolean
  rect?: Rect
  onRectChange: (r: Rect) => void
  onClose: () => void
  onToggleMaximize: () => void
  children: ReactNode
}

export function AcademyWindow({ lang, maximized, rect, onRectChange, onClose, onToggleMaximize, children }: Props) {
  const tx = ACADEMY_COPY[lang]
  const isDesktop = useIsDesktop()
  const { scale, setScale } = useTextScale()
  const titleId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight })
  useActiveTimeReport()

  useEffect(() => {
    const on = () => setVp({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])

  const floating = isDesktop && !maximized

  // Full screen (phone / maximized) blocks the page behind it; the floating desktop window leaves the page usable.
  useEffect(() => {
    if (floating) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [floating])
  const effective: Rect = floating ? clampRect(rect ?? defaultRect(vp.w, vp.h), vp.w, vp.h) : { x: 0, y: 0, w: vp.w, h: vp.h }

  // Document-level so Esc and the Tab trap also work when a click on plain text left focus on <body>.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Floating window = non-modal: Esc and the Tab trap only apply while focus is inside it.
      if (floating && !ref.current?.contains(document.activeElement)) return
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (floating) return
      if (e.key !== 'Tab' || !ref.current) return
      const items = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (!ref.current.contains(active)) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      } else if (e.shiftKey && (active === first || active === ref.current)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [floating])

  const startResize = (edge: Edge) => (e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    const target = e.currentTarget
    target.setPointerCapture(e.pointerId)
    const startX = e.clientX
    const startY = e.clientY
    const start = effective
    const { minW, minH } = limits(vp.w, vp.h)
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - startX
      const dy = ev.clientY - startY
      let { x, y, w, h } = start
      if (edge.includes('e')) w = Math.min(Math.max(start.w + dx, minW), vp.w - start.x)
      if (edge.includes('s')) h = Math.min(Math.max(start.h + dy, minH), vp.h - start.y)
      if (edge.includes('w')) {
        w = Math.min(Math.max(start.w - dx, minW), start.x + start.w)
        x = start.x + start.w - w
      }
      if (edge.includes('n')) {
        h = Math.min(Math.max(start.h - dy, minH), start.y + start.h)
        y = start.y + start.h - h
      }
      onRectChange({ x, y, w, h })
    }
    const up = () => {
      target.removeEventListener('pointermove', move)
      target.removeEventListener('pointerup', up)
      target.removeEventListener('pointercancel', up)
    }
    target.addEventListener('pointermove', move)
    target.addEventListener('pointerup', up)
    target.addEventListener('pointercancel', up)
  }

  // Drag by the header (not by its buttons). The window stays fully inside the viewport.
  const startDrag = (e: ReactPointerEvent<HTMLElement>) => {
    if (!floating || e.button !== 0 || (e.target as HTMLElement).closest('button,a,input,textarea')) return
    e.preventDefault()
    const target = e.currentTarget
    target.setPointerCapture(e.pointerId)
    const startX = e.clientX
    const startY = e.clientY
    const start = effective
    const move = (ev: PointerEvent) => {
      onRectChange(clampRect({ ...start, x: start.x + ev.clientX - startX, y: start.y + ev.clientY - startY }, vp.w, vp.h))
    }
    const up = () => {
      target.removeEventListener('pointermove', move)
      target.removeEventListener('pointerup', up)
      target.removeEventListener('pointercancel', up)
    }
    target.addEventListener('pointermove', move)
    target.addEventListener('pointerup', up)
    target.addEventListener('pointercancel', up)
  }

  return createPortal(
    <>
      {!floating && <div className="fixed inset-0 z-[99] bg-black/30" aria-hidden="true" />}
      <div
        ref={ref}
        role="dialog"
        aria-modal={!floating}
        aria-labelledby={titleId}
        dir={getLangDir(lang)}
        lang={lang}
        tabIndex={-1}
        data-academy-window=""
        className={`fixed z-[100] flex flex-col overflow-hidden bg-white text-foreground shadow-2xl outline-none ${floating ? 'rounded-xl border border-border' : ''}`}
        style={floating ? { left: effective.x, top: effective.y, width: effective.w, height: effective.h } : { left: 0, top: 0, width: '100vw', height: '100dvh' }}
      >
        <header
          onPointerDown={startDrag}
          className={`flex flex-shrink-0 items-center gap-2 border-b border-border bg-white px-3 py-2 ${floating ? 'cursor-move touch-none select-none' : ''}`}
        >
          {/* Logo and title lead back to the PromptQuorum home page (own language). The window closes to the floating button; everything typed or
              learned so far stays in memory (and in the browser if "Save my progress" is ticked), so reopening continues where the learner left off. */}
          <Link
            href={lang === 'en' ? '/' : `/${lang}`}
            onClick={onClose}
            onPointerDown={(e) => e.stopPropagation()}
            title="PromptQuorum"
            className="flex min-w-0 flex-1 items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
              <Logo size={22} role="presentation" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 text-start">
              <span id={titleId} role="heading" aria-level={1} className="block truncate text-sm font-bold leading-tight">{tx.h1}</span>
              <span className="block truncate text-[11px] leading-tight text-muted-foreground">{tx.tagline}</span>
            </span>
          </Link>
          <TextSizeControl lang={lang} scale={scale} setScale={setScale} />
          {isDesktop && (
            <button
              type="button"
              onClick={onToggleMaximize}
              aria-label={maximized ? tx.windowRestore : tx.windowMaximize}
              title={maximized ? tx.windowRestore : tx.windowMaximize}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <AskIcon name={maximized ? 'Minimize2' : 'Maximize2'} className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={tx.windowClose}
            title={tx.windowClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <AskIcon name="X" className="h-4 w-4" />
          </button>
        </header>

        <p className="flex flex-shrink-0 flex-wrap items-center justify-center gap-x-2 border-b border-border bg-secondary px-3 py-1 text-center text-[11px] leading-snug text-foreground">
          {tx.disclaimer}
        </p>

        <div className="flex min-h-0 flex-1 flex-col" style={scale === 1 ? undefined : { zoom: scale }}>{children}</div>

        {isDesktop && (
          <p className="flex-shrink-0 border-t border-border bg-white px-3 py-1 text-center text-[10px] leading-snug text-muted-foreground">
            © {new Date().getFullYear()} PromptQuorum
          </p>
        )}

        {floating &&
          (Object.keys(EDGE_STYLE) as Edge[]).map((edge) => (
            <div key={edge} aria-hidden="true" onPointerDown={startResize(edge)} className={`absolute z-10 touch-none ${EDGE_STYLE[edge]}`} style={{ cursor: EDGE_CURSOR[edge] }} />
          ))}
      </div>
    </>,
    document.body,
  )
}
