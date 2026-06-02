'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'

/**
 * Defers rendering children until the element nears the viewport.
 * Pass eager=true for the first 1-2 sections that must paint immediately (above fold).
 * rootMargin='600px' starts loading well before the user scrolls to that section.
 */
export function LazySection({
  children,
  eager = false,
  minHeight = '240px',
}: {
  children: ReactNode
  eager?: boolean
  minHeight?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(eager)

  useEffect(() => {
    if (eager || visible) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '600px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [eager, visible])

  if (!visible) {
    return <div ref={ref} style={{ minHeight }} aria-hidden="true" />
  }

  return <>{children}</>
}
