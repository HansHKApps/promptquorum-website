'use client'

// PromptQuorum Academy — mounted once in the root layout, exactly like Ask Hans (AskHansRoot): the tool lives in a
// movable, resizable window (AcademyWindow) that survives page navigation; closing it leaves a floating pill; any
// button on the site can open it with the ACADEMY_OPEN_EVENT. The window state (open / maximized / position and
// size) is kept in sessionStorage, never localStorage (learner progress follows its own opt-in, see useAcademyState).

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Rect, UiState } from '@/components/askhans/types'
import { useLang } from '@/hooks/useLang'
import { ACADEMY_OPEN_EVENT, ACADEMY_UI_KEY, ACADEMY_USED_KEY } from '@/lib/academy/config'
import type { TopicSuggestion } from '@/lib/academy/types'
import { AcademyApp } from './AcademyApp'
import { AcademyLauncher } from './AcademyLauncher'
import { AcademyWindow } from './AcademyWindow'

const CLOSED: UiState = { open: false, maximized: false, everClosed: false }

function loadUi(): UiState {
  try {
    const raw = sessionStorage.getItem(ACADEMY_UI_KEY)
    return raw ? { ...CLOSED, ...(JSON.parse(raw) as UiState) } : CLOSED
  } catch {
    return CLOSED
  }
}

function saveUi(ui: UiState): void {
  try {
    sessionStorage.setItem(ACADEMY_UI_KEY, JSON.stringify(ui))
  } catch {
    /* blocked: the window still works in memory */
  }
}

export function AcademyRoot() {
  const lang = useLang()
  const [ready, setReady] = useState(false)
  const [ui, setUi] = useState<UiState>(CLOSED)
  const [topics, setTopics] = useState<TopicSuggestion[]>([])
  const topicsLang = useRef<string | null>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setUi(loadUi())
    setReady(true)
  }, [])
  useEffect(() => {
    if (ready) saveUi(ui)
  }, [ui, ready])

  const open = useCallback(() => {
    setUi((u) => ({ ...u, open: true }))
    try {
      localStorage.setItem(ACADEMY_USED_KEY, '1')
    } catch {
      /* blocked: only the functional "has used Academy" flag is lost */
    }
  }, [])
  const close = useCallback(() => {
    setUi((u) => ({ ...u, open: false, everClosed: true }))
    setTimeout(() => launcherRef.current?.focus(), 30)
  }, [])

  useEffect(() => {
    window.addEventListener(ACADEMY_OPEN_EVENT, open)
    return () => window.removeEventListener(ACADEMY_OPEN_EVENT, open)
  }, [open])

  // Subject suggestions are built on the server; fetch them once per language, when the window is first opened.
  useEffect(() => {
    if (!ui.open || topicsLang.current === lang) return
    topicsLang.current = lang
    fetch(`/api/academy/topics?lang=${lang}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { topics?: TopicSuggestion[] } | null) => setTopics(j?.topics ?? []))
      .catch(() => setTopics([]))
  }, [ui.open, lang])

  if (!ready) return null
  return (
    <>
      {!ui.open && <AcademyLauncher ref={launcherRef} lang={lang} onOpen={open} />}
      {ui.open && (
        <AcademyWindow
          lang={lang}
          maximized={ui.maximized}
          rect={ui.rect}
          onRectChange={(rect: Rect) => setUi((u) => ({ ...u, rect }))}
          onClose={close}
          onToggleMaximize={() => setUi((u) => ({ ...u, maximized: !u.maximized }))}
        >
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <AcademyApp lang={lang} topics={topics} />
          </div>
        </AcademyWindow>
      )}
    </>
  )
}
