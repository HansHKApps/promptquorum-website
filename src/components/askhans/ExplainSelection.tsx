'use client'

// "Explain this" pill for selected text (copied from the Academy lesson screen). Works on every website page (inside
// <main>) and inside Ask Hans answers and reports (elements marked data-explain). The Academy keeps its own pill and
// its quiz lock, so the Academy page and window are left out here.

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { EXPLAIN_MAX_CONTEXT, EXPLAIN_MAX_PASSAGE, EXPLAIN_MIN_CHARS, type ExplainPayload } from '@/lib/askhans/explain'

const SKIP = 'input,textarea,select,button,nav,[contenteditable]:not([contenteditable="false"]),[data-academy-window],[data-no-explain]'
const BLOCK = 'p,li,h1,h2,h3,h4,h5,h6,tr,blockquote,pre,figcaption,dt,dd'
const ACADEMY_PATH = /^(?:\/(?:de|fr|ja|zh|es|pt|ar|ko))?\/academy(?:\/|$)/

const textOf = (el: Element) => (el.textContent ?? '').replace(/\s+/g, ' ').trim()

/**
 * The text around the selection: the heading above it, the blocks before and after it, and, for a short term, the
 * place earlier on the page where it first appears ("go back and look up what is meant").
 */
function surroundingText(root: Element, node: Node, passage: string): string {
  const el = node instanceof Element ? node : node.parentElement
  if (!el) return ''
  const blocks = Array.from(root.querySelectorAll(BLOCK)).filter((b) => !b.closest('nav,footer,[data-no-explain]'))
  const own = el.closest(BLOCK)
  let at = own ? blocks.indexOf(own) : -1
  if (at < 0) at = blocks.findIndex((b) => !!(el.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) || el.contains(b))
  if (at < 0) return textOf(el).slice(0, EXPLAIN_MAX_CONTEXT)
  const parts: string[] = []
  const heading = blocks.slice(0, at).reverse().find((b) => /^H[1-6]$/.test(b.tagName))
  const from = Math.max(0, at - 4)
  const needle = passage.toLowerCase()
  if (needle.length <= 60) {
    const first = blocks.slice(0, from).find((b) => textOf(b).toLowerCase().includes(needle))
    if (first) parts.push(`Earlier on the page: ${textOf(first).slice(0, 600)}`)
  }
  if (heading && blocks.indexOf(heading) < from) parts.push(`Section: ${textOf(heading).slice(0, 200)}`)
  for (const b of blocks.slice(from, at + 3)) {
    const t = textOf(b)
    if (t) parts.push(t.slice(0, 900))
  }
  return parts.join('\n').slice(0, EXPLAIN_MAX_CONTEXT)
}

interface Selected {
  payload: ExplainPayload
  range: Range
  x: number
  y: number
}

function readSelection(): Selected | null {
  const sel = window.getSelection()
  const text = sel?.toString().trim() ?? ''
  if (!sel || sel.isCollapsed || sel.rangeCount === 0 || text.length < EXPLAIN_MIN_CHARS || !sel.anchorNode) return null
  const el = sel.anchorNode instanceof Element ? sel.anchorNode : sel.anchorNode.parentElement
  if (!el || el.closest(SKIP)) return null
  const chat = el.closest('[data-explain]')
  const main = chat ? null : el.closest('main')
  if (!chat && (!main || ACADEMY_PATH.test(window.location.pathname))) return null
  const range = sel.getRangeAt(0)
  const rect = range.getBoundingClientRect()
  const passage = text.slice(0, EXPLAIN_MAX_PASSAGE)
  return {
    payload: {
      source: chat ? 'chat' : 'page',
      passage,
      title: document.title.slice(0, 200),
      path: window.location.pathname.slice(0, 300),
      context: surroundingText((chat ?? main) as Element, range.startContainer, passage.replace(/\s+/g, ' ')),
    },
    range: range.cloneRange(),
    x: rect.left + rect.width / 2,
    y: rect.top,
  }
}

export function ExplainSelection({ label, disabled, onExplain }: { label: string; disabled?: boolean; onExplain: (p: ExplainPayload) => void }) {
  const [selection, setSelection] = useState<Selected | null>(null)
  useEffect(() => {
    // Reading the surrounding text walks the page, so wait until the selection stops changing (dragging).
    let timer: ReturnType<typeof setTimeout> | undefined
    const onChange = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setSelection(readSelection()), 150)
    }
    // The pill is fixed on screen: keep it above the marked text while scrolling.
    const onMove = () =>
      setSelection((s) => {
        if (!s) return s
        const rect = s.range.getBoundingClientRect()
        return { ...s, x: rect.left + rect.width / 2, y: rect.top }
      })
    document.addEventListener('selectionchange', onChange)
    window.addEventListener('scroll', onMove, true)
    window.addEventListener('resize', onMove)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('selectionchange', onChange)
      window.removeEventListener('scroll', onMove, true)
      window.removeEventListener('resize', onMove)
    }
  }, [])

  if (!selection || disabled || selection.y < 0 || selection.y > window.innerHeight) return null
  return createPortal(
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => {
        onExplain(selection.payload)
        setSelection(null)
        window.getSelection()?.removeAllRanges()
      }}
      style={{ position: 'fixed', top: Math.max(8, selection.y - 44), left: Math.min(Math.max(selection.x, 70), window.innerWidth - 70), transform: 'translateX(-50%)', zIndex: 110 }}
      className="whitespace-nowrap rounded-full bg-purple-700 px-3 py-1.5 text-sm font-medium text-white shadow-lg hover:bg-purple-800"
    >
      {label}
    </button>,
    document.body,
  )
}
