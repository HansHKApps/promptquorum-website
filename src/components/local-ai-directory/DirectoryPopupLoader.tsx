'use client'

// Mounts the engagement popup lazily: nothing is imported or executed until the
// browser is idle after load, so it has no effect on LCP/CLS/INP. Renders
// nothing itself (the card is position: fixed and appears only on its own
// trigger), so there is no layout to reserve.

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { DirectoryFunnelData } from '@/lib/power-local-llm/directory-funnel'

// Not crawler-relevant (appears only after 30 s of human activity), so ssr:false
// keeps it out of the server HTML and the initial bundle.
const DirectoryPopup = dynamic(() => import('./DirectoryPopup'), { ssr: false })

interface Props {
  popup: DirectoryFunnelData['popup']
  dir: 'ltr' | 'rtl'
}

export function DirectoryPopupLoader({ popup, dir }: Props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void }
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 4000 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(() => setReady(true), 2000)
    return () => window.clearTimeout(t)
  }, [])

  return ready ? <DirectoryPopup popup={popup} dir={dir} /> : null
}
