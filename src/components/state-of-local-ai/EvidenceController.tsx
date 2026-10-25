'use client'

import { useEffect } from 'react'

/**
 * Behaviour for the inline evidence section (<details id="evidence">): opens it for
 * #evidence / #S12 / #s9 deep links, turns citation links such as [S12] into
 * "open here and jump to the source", and opens it for printing. The links keep their
 * real href (the separate evidence page), so everything still works without JavaScript.
 */
export function EvidenceController({ evidencePathname }: { evidencePathname: string }) {
  useEffect(() => {
    const box = document.getElementById('evidence') as HTMLDetailsElement | null
    if (!box) return

    const jump = (id: string) => {
      box.open = true
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }))
    }
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1))
      if (!id) return
      if (id === 'evidence') { box.open = true; return }
      if (box.querySelector(`[id="${CSS.escape(id)}"]`)) jump(id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!a || !a.hash || a.pathname !== evidencePathname) return
      const id = decodeURIComponent(a.hash.slice(1))
      if (!box.querySelector(`[id="${CSS.escape(id)}"]`)) return
      e.preventDefault()
      history.replaceState(null, '', `#${id}`)
      jump(id)
    }
    document.addEventListener('click', onClick)

    const open = () => { box.open = true }
    window.addEventListener('beforeprint', open)
    return () => {
      window.removeEventListener('hashchange', fromHash)
      document.removeEventListener('click', onClick)
      window.removeEventListener('beforeprint', open)
    }
  }, [evidencePathname])

  return null
}
