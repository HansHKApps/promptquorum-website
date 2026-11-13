'use client'

// Ask Hans Power Mode — the three Local AI Tools (VRAM Calculator, What Can I Run?, Can I Run This?)
// as cards on the Power Mode menu and as the live tool inside the chat window.
// The tools are the same components as on /tools/*; heavy ones load on demand.

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { t } from '@/components/tools/tools-i18n'
import type { AppPickerEntry } from '@/components/tools/CanIRunThisClient'
import { AskIcon } from '../icons'

export type ToolId = 'vram' | 'what' | 'can'
export const TOOL_ORDER: ToolId[] = ['vram', 'what', 'can']

const VramCalculator = dynamic(() => import('@/components/VramCalculator').then((m) => m.VramCalculator), { ssr: false })
const WhatCanIRunClient = dynamic(() => import('@/components/tools/WhatCanIRunClient').then((m) => m.WhatCanIRunClient), { ssr: false })
const CanIRunThisClient = dynamic(() => import('@/components/tools/CanIRunThisClient').then((m) => m.CanIRunThisClient), { ssr: false })

const KEYS = {
  vram: { title: 'vramCalcCardTitle', desc: 'vramCalcCardDesc', cta: 'vramCalcCardCta' },
  what: { title: 'whatCanIRunCardTitle', desc: 'whatCanIRunCardDesc', cta: 'whatCanIRunCardCta' },
  can: { title: 'canIRunThisCardTitle', desc: 'canIRunThisCardDesc', cta: 'canIRunThisCardCta' },
} as const
const ICON: Record<ToolId, 'BarChart3' | 'Search' | 'ShieldCheck'> = { vram: 'BarChart3', what: 'Search', can: 'ShieldCheck' }

export function toolTitle(id: ToolId, lang: Language): string {
  return t(KEYS[id].title, lang)
}

export function ToolCards({ lang, onOpen }: { lang: Language; onOpen: (id: ToolId) => void }) {
  return (
    <section className="mt-5" aria-labelledby="pm-tools-title">
      <h3 id="pm-tools-title" className="text-[14px] font-bold text-foreground">{t('toolsSectionHeading', lang)}</h3>
      <p className="mt-0.5 text-[12px] text-muted-foreground">{t('toolsSectionSub', lang)}</p>
      <ul className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
        {TOOL_ORDER.map((id) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onOpen(id)}
              className="flex h-full w-full flex-col items-start gap-1.5 rounded-xl border border-border bg-white p-3.5 text-start shadow-sm transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span className="flex items-center gap-2 text-[14px] font-bold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                  <AskIcon name={ICON[id]} className="h-4 w-4" />
                </span>
                {t(KEYS[id].title, lang)}
              </span>
              <span className="text-[13px] leading-snug text-foreground">{t(KEYS[id].desc, lang)}</span>
              <span className="text-[12px] font-semibold text-primary">{t(KEYS[id].cta, lang)} →</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CanTool({ lang }: { lang: Language }) {
  const [index, setIndex] = useState<AppPickerEntry[] | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let cancelled = false
    fetch('/api/tools/app-index')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('index'))))
      .then((d: { apps: AppPickerEntry[] }) => { if (!cancelled) setIndex(d.apps) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [])
  if (failed) return <p role="alert" className="text-[13px] text-muted-foreground">Could not load the app list. Please try again.</p>
  if (!index) return <p className="text-[13px] text-muted-foreground">…</p>
  return <CanIRunThisClient lang={lang} appIndex={index} />
}

export function ToolView({ id, lang }: { id: ToolId; lang: Language }) {
  return (
    <section className="rounded-xl border border-border bg-white p-4 shadow-sm" aria-label={toolTitle(id, lang)}>
      <h2 tabIndex={-1} className="mb-3 text-[16px] font-bold leading-snug text-foreground outline-none">{toolTitle(id, lang)}</h2>
      {id === 'vram' && <VramCalculator />}
      {id === 'what' && <WhatCanIRunClient lang={lang} />}
      {id === 'can' && <CanTool lang={lang} />}
    </section>
  )
}
