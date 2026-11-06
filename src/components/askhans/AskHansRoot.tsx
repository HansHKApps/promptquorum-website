'use client'

// Ask Hans — orchestration. Mounted once in the root layout (only when ASK_HANS_ENABLED), so the chat
// survives internal page navigation. The German search opens it with a CustomEvent (ASK_HANS_OPEN_EVENT).
// Conversations are kept in sessionStorage only; nothing is stored on the server.

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ASK_HANS_LIMITS, ASK_HANS_OPEN_EVENT, ASK_HANS_SPLIT, ASK_HANS_CONSENT_TEXT_VERSION } from '@/lib/askhans/config'
import { DEFAULT_CATEGORY_KEY, type AskHansLink } from '@/lib/askhans/categories'
import { AskHansLogo } from './AskHansLogo'
import { AskHansWindow } from './AskHansWindow'
import { ConsentNotice } from './ConsentNotice'
import { useAskCopy, useAskLang } from './copy'
import { FeedbackBar } from './FeedbackBar'
import { AskIcon } from './icons'
import { Markdown } from './markdown'
import { CopyButton, plainText } from './CopyButton'
import { clickSection, relatedLinks } from './links'
import { MarketingPanel } from './MarketingPanel'
import { clearConsent, clearSavedConversations, getVisitId, loadConsent, loadConversations, loadUi, saveConsent, saveConversations, saveUi, uid } from './storage'
import type { AskErrorCode, ChatMsg, ConsentRecord, Conversation, Rect, UiState } from './types'
import { logEvent, streamAnswer } from './useAskStream'
import { useIsDesktop } from './useIsDesktop'
import { WelcomeBox } from './WelcomeBox'

const newConversation = (): Conversation => ({ id: uid(), messages: [], category: DEFAULT_CATEGORY_KEY, startedAt: Date.now() })

/** Messages the AI may see: errored answers and the question they belong to are left out. */
function toApiMessages(messages: ChatMsg[]): { role: 'user' | 'assistant'; content: string }[] {
  const out: { role: 'user' | 'assistant'; content: string }[] = []
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i]
    const next = messages[i + 1]
    if (m.role === 'user' && next?.role === 'assistant' && (next.error || next.pending || !next.content.trim())) {
      i++
      continue
    }
    if (m.role === 'assistant' && (m.error || !m.content.trim())) continue
    out.push({ role: m.role, content: m.content })
  }
  return out
}

const userCount = (cs: Conversation[]) => cs.reduce((n, c) => n + c.messages.filter((m) => m.role === 'user').length, 0)

export function AskHansRoot() {
  const tx = useAskCopy()
  const lang = useAskLang()
  const isDesktop = useIsDesktop()
  const [ready, setReady] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [ui, setUi] = useState<UiState>({ open: false, maximized: false, everClosed: false })
  const [consent, setConsent] = useState<ConsentRecord | null>(null)
  const [consentOpen, setConsentOpen] = useState(false)
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null)
  const [streaming, setStreaming] = useState(false)
  const [draft, setDraft] = useState('')
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [showPanel, setShowPanel] = useState(true)
  const [showHistory, setShowHistory] = useState(true)
  const visitId = useRef('')
  /** answers that already produced a counted click (each answer counts once in the click-through rate) */
  const clickedAnswers = useRef(new Set<string>())
  const wasOpen = useRef<boolean | null>(null)
  const logoRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const stick = useRef(true)
  const expandedRef = useRef<HTMLDivElement>(null)

  // ---- load / persist -------------------------------------------------------------------------
  // Browser storage only exists after hydration, so the initial load has to happen in an effect.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    visitId.current = getVisitId()
    const c = loadConsent()
    // Conversations are only restored if the visitor chose "save for 7 days" in the consent step.
    const cs = c?.saveHistory ? loadConversations() : []
    setConversations(cs)
    setActiveId(cs.length ? cs[cs.length - 1].id : null)
    setUi(loadUi())
    setConsent(c)
    setReady(true)
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (ready) saveUi(ui)
  }, [ui, ready])

  useEffect(() => {
    // The first run after loading only records the restored state; later closed→open changes are real opens
    // (anonymous counter, no visitor ID).
    if (!ready) return
    if (wasOpen.current === false && ui.open) logEvent({ type: 'open' })
    wasOpen.current = ui.open
  }, [ui.open, ready])

  useEffect(() => {
    if (!ready || streaming) return
    if (consent?.saveHistory) saveConversations(conversations)
    else clearSavedConversations()
  }, [conversations, streaming, ready, consent?.saveHistory])

  // Opening an earlier conversation renders it below the cards: bring it into view.
  useEffect(() => {
    if (expanded.size > 0) expandedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [expanded])

  const active = conversations.find((c) => c.id === activeId) ?? null
  const previous = conversations.filter((c) => c.id !== active?.id && c.messages.length > 0).reverse()

  // ---- window actions -------------------------------------------------------------------------
  const closeWindow = useCallback((focusLogo = true) => {
    setUi((u) => ({ ...u, open: false, everClosed: true }))
    if (focusLogo) setTimeout(() => logoRef.current?.focus(), 30)
  }, [])

  const openWindow = useCallback(() => {
    setUi((u) => ({ ...u, open: true }))
    setTimeout(() => inputRef.current?.focus(), 60)
  }, [])

  const setRect = useCallback((rect: Rect) => setUi((u) => ({ ...u, rect })), [])

  // ---- sending --------------------------------------------------------------------------------
  const patchConv = useCallback((id: string, fn: (c: Conversation) => Conversation) => {
    setConversations((cs) => cs.map((c) => (c.id === id ? fn(c) : c)))
  }, [])

  const patchMsg = useCallback(
    (convId: string, msgId: string, fn: (m: ChatMsg) => ChatMsg) => patchConv(convId, (c) => ({ ...c, messages: c.messages.map((m) => (m.id === msgId ? fn(m) : m)) })),
    [patchConv],
  )

  const send = useCallback(
    async (text: string, consentValue: ConsentRecord | null) => {
      const conv = active ?? newConversation()
      const history = toApiMessages(conv.messages)
      const userMsg: ChatMsg = { id: uid(), role: 'user', content: text }
      const asstMsg: ChatMsg = { id: uid(), role: 'assistant', content: '', pending: true, status: tx.thinking }
      if (active) patchConv(conv.id, (c) => ({ ...c, messages: [...c.messages, userMsg, asstMsg] }))
      else {
        setConversations((cs) => [...cs, { ...conv, messages: [userMsg, asstMsg] }])
        setActiveId(conv.id)
      }
      stick.current = true
      setStreaming(true)

      let acc = ''
      let category = conv.category
      await streamAnswer({ visitId: visitId.current, lang, messages: [...history, { role: 'user', content: text }] }, (ev) => {
        if (ev.t === 'text') {
          acc += ev.v
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, content: acc, status: undefined }))
        } else if (ev.t === 'tool') {
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, status: tx.searching }))
        } else if (ev.t === 'titles') {
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, linkTitles: ev.v }))
        } else if (ev.t === 'followups') {
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, followups: ev.v }))
        } else if (ev.t === 'category') {
          category = ev.v
          patchConv(conv.id, (c) => ({ ...c, category: ev.v }))
        } else if (ev.t === 'done') {
          const empty = !acc.trim()
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, pending: false, status: undefined, ...(empty ? { error: 'failed' as AskErrorCode } : {}) }))
          if (!empty && consentValue?.value === 'yes') {
            logEvent({ type: 'question', visitId: visitId.current, category: ev.category || category, tools: ev.tools, topics: ev.topics, lang })
          }
        } else if (ev.t === 'error') {
          patchMsg(conv.id, asstMsg.id, (m) => ({ ...m, pending: false, status: undefined, error: ev.code }))
        }
      })
      setStreaming(false)
    },
    [active, patchConv, patchMsg],
  )

  const submit = useCallback(
    (raw: string, carriedFromSearch = false) => {
      const text = raw.trim()
      if (!text || streaming) return
      setUi((u) => ({ ...u, open: true }))
      if (text.length > ASK_HANS_LIMITS.maxMessageChars) {
        // keep what the visitor typed so they can shorten it
        setDraft(text)
        if (carriedFromSearch) setTimeout(() => inputRef.current?.focus(), 80)
        return
      }
      if (userCount(conversations) >= ASK_HANS_LIMITS.maxMessagesPerVisit) {
        const conv = active ?? newConversation()
        const note: ChatMsg = { id: uid(), role: 'assistant', content: '', error: 'limit' }
        const q: ChatMsg = { id: uid(), role: 'user', content: text }
        if (active) patchConv(conv.id, (c) => ({ ...c, messages: [...c.messages, q, note] }))
        else {
          setConversations((cs) => [...cs, { ...conv, messages: [q, note] }])
          setActiveId(conv.id)
        }
        return
      }
      if (!consent) {
        setPendingQuestion(text)
        setConsentOpen(true)
        return
      }
      setDraft('')
      void send(text, consent)
    },
    [active, consent, conversations, patchConv, send, streaming],
  )

  // Always call the freshest submit from the global open event.
  const submitRef = useRef(submit)
  useEffect(() => {
    submitRef.current = submit
  })
  useEffect(() => {
    if (!ready) return
    const on = (e: Event) => {
      const q = (e as CustomEvent<{ question?: string }>).detail?.question
      if (q && q.trim()) submitRef.current(q, true)
      else openWindow()
    }
    window.addEventListener(ASK_HANS_OPEN_EVENT, on)
    return () => window.removeEventListener(ASK_HANS_OPEN_EVENT, on)
  }, [ready, openWindow])

  // ---- consent --------------------------------------------------------------------------------
  const chooseConsent = (value: 'yes' | 'no', saveHistory: boolean) => {
    const rec = saveConsent(value, saveHistory)
    setConsent(rec)
    setConsentOpen(false)
    if (value === 'yes') logEvent({ type: 'consent_yes', visitId: visitId.current, textVersion: ASK_HANS_CONSENT_TEXT_VERSION })
    else logEvent({ type: 'consent_no' })
    const q = pendingQuestion
    setPendingQuestion(null)
    if (q) {
      setDraft('')
      void send(q, rec)
    }
  }

  const withdrawConsent = () => {
    if (consent?.value === 'yes') logEvent({ type: 'consent_withdrawn', visitId: visitId.current, textVersion: ASK_HANS_CONSENT_TEXT_VERSION })
    clearConsent()
    clearSavedConversations() // withdrawing also deletes anything saved on this device
    setConsent(null)
    setConsentOpen(true)
  }

  // ---- other actions --------------------------------------------------------------------------
  const clearHistory = () => {
    if (streaming) return
    clearSavedConversations()
    const conv = newConversation()
    setConversations([conv])
    setActiveId(conv.id)
    setExpanded(new Set())
  }

  const startNew = () => {
    if (streaming || !active || active.messages.length === 0) return
    const conv = newConversation()
    setConversations((cs) => [...cs, conv])
    setActiveId(conv.id)
    setDraft('')
    if (consent?.value === 'yes') logEvent({ type: 'new_chat', visitId: visitId.current })
    setTimeout(() => inputRef.current?.focus(), 30)
  }

  const onLinkClick = (categoryKey: string, link: AskHansLink) => {
    if (consent?.value === 'yes') logEvent({ type: 'link_click', visitId: visitId.current, category: categoryKey, linkId: link.id })
    closeWindow(false) // chat state is already saved; the visitor reopens it with the logo
  }

  // Click-through metric: anonymous counters only (source + coarse site section + "first click on this answer").
  const trackAnswerClick = (answerId: string | undefined, href: string, source: 'text' | 'panel') => {
    if (consent?.value !== 'yes') return
    const section = clickSection(href)
    const first = section !== 'external' && !!answerId && !clickedAnswers.current.has(answerId)
    if (first && answerId) clickedAnswers.current.add(answerId)
    logEvent({ type: 'answer_click', visitId: visitId.current, source, section, firstForAnswer: first })
  }

  const onRelatedClick = (href: string) => {
    const answer = [...(active?.messages ?? [])].reverse().find((m) => m.role === 'assistant' && !m.error && m.content.includes(href))
    trackAnswerClick(answer?.id, href, 'panel')
    closeWindow(false)
  }

  const retry = (convId: string, msgId: string) => {
    const conv = conversations.find((c) => c.id === convId)
    if (!conv || streaming) return
    const i = conv.messages.findIndex((m) => m.id === msgId)
    const q = conv.messages[i - 1]
    if (i < 1 || q?.role !== 'user') return
    patchConv(convId, (c) => ({ ...c, messages: c.messages.filter((m) => m.id !== msgId && m.id !== q.id) }))
    setTimeout(() => submitRef.current(q.content), 0)
  }

  // ---- scrolling ------------------------------------------------------------------------------
  const lastLen = active?.messages.reduce((n, m) => n + m.content.length, 0) ?? 0
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (el && stick.current) el.scrollTop = el.scrollHeight
  }, [lastLen, active?.messages.length, ui.open, consentOpen])

  if (!ready) return null

  const showLogo = !ui.open && (ui.everClosed || conversations.some((c) => c.messages.length > 0))
  const categoryKey = active?.category ?? DEFAULT_CATEGORY_KEY
  const related = relatedLinks(active?.messages ?? [])
  const dateFmt = new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : lang, { dateStyle: 'medium', timeStyle: 'short' })
  const atLimit = userCount(conversations) >= ASK_HANS_LIMITS.maxMessagesPerVisit

  const lastMessageId = active?.messages[active.messages.length - 1]?.id

  const renderMessage = (convId: string, m: ChatMsg, readOnly = false) => {
    const mine = m.role === 'user'
    const question = !mine ? undefined : m.content
    return (
      <li key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[92%] rounded-2xl px-3.5 py-2 text-[14px] leading-relaxed ${mine ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md border border-border bg-white text-foreground shadow-sm'}`}>
          {mine ? (
            <p className="whitespace-pre-wrap break-words">{question}</p>
          ) : (
            <>
              {m.content && (
                <div
                  onClick={(e) => {
                    const a = (e.target as HTMLElement).closest('a')
                    if (a) trackAnswerClick(m.id, a.getAttribute('href') ?? '', 'text')
                  }}
                >
                  <Markdown text={m.content} />
                </div>
              )}
              {!readOnly && !m.pending && !m.error && !streaming && m.followups && m.followups.length > 0 && m.id === lastMessageId && (
                <div role="group" aria-label={tx.followupsLabel} className="mt-2 flex flex-wrap gap-1.5 border-t border-border pt-2">
                  {m.followups.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        if (consent?.value === 'yes') logEvent({ type: 'followup_click', visitId: visitId.current })
                        submit(q)
                      }}
                      className="rounded-full border border-primary/40 bg-secondary px-3 py-1 text-start text-[13px] font-medium leading-snug text-primary hover:border-primary hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {m.content && !m.pending && (
                <div className="mt-1 flex justify-end">
                  <CopyButton text={plainText(m.content)} />
                </div>
              )}
              {m.pending && m.status && <p className="text-[13px] italic text-muted-foreground" role="status">{m.status}</p>}
              {m.error && (
                <div className={m.content ? 'mt-2 border-t border-border pt-2' : ''}>
                  <p className="text-[13px]">{m.error === 'limit' ? tx.errors.limit(ASK_HANS_LIMITS.maxMessagesPerVisit) : tx.errors[m.error]}</p>
                  {!readOnly && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.error !== 'refused' && m.error !== 'limit' && m.error !== 'rephrase' && (
                        <button type="button" onClick={() => retry(convId, m.id)} className="rounded-md border border-primary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-secondary">
                          {tx.retry}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </li>
    )
  }

  return (
    <>
      {showLogo && <AskHansLogo ref={logoRef} onOpen={openWindow} />}
      {ui.open && (
        <AskHansWindow
          maximized={ui.maximized}
          rect={ui.rect}
          onRectChange={setRect}
          onClose={() => closeWindow()}
          onToggleMaximize={() => setUi((u) => ({ ...u, maximized: !u.maximized }))}
          onNew={startNew}
          newDisabled={streaming || !active || active.messages.length === 0}
        >
          <div className="grid min-h-0 flex-1" style={isDesktop && showPanel ? { gridTemplateColumns: `${ASK_HANS_SPLIT.chatFr}fr ${ASK_HANS_SPLIT.panelFr}fr` } : undefined}>
            <div className="flex min-h-0 min-w-0 flex-col">
              {(previous.length > 0 || !showPanel) && !consentOpen && (
                <div className="flex flex-shrink-0 items-center justify-between gap-2 border-b border-border bg-white px-3 py-1">
                  {previous.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setShowHistory((v) => !v)}
                      aria-expanded={showHistory}
                      className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <AskIcon name="History" className="h-3.5 w-3.5" />
                      {showHistory ? tx.panel.historyHide : tx.panel.historyShow(previous.length)}
                    </button>
                  ) : (
                    <span />
                  )}
                  {previous.length > 0 && consent?.saveHistory && (
                    <button
                      type="button"
                      disabled={streaming}
                      onClick={clearHistory}
                      className="rounded-md px-1.5 py-1 text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {tx.panel.historyClear}
                    </button>
                  )}
                  {!showPanel && (
                    <button
                      type="button"
                      onClick={() => setShowPanel(true)}
                      className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <AskIcon name="PanelRightOpen" className="h-3.5 w-3.5 rtl:-scale-x-100" />
                      {tx.panel.panelShow}
                    </button>
                  )}
                </div>
              )}
              <div
                ref={scrollRef}
                onScroll={(e) => {
                  const el = e.currentTarget
                  stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 120
                }}
                className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-muted/20 p-3"
              >
                {consentOpen ? (
                  <ConsentNotice pendingQuestion={pendingQuestion} onChoose={chooseConsent} />
                ) : (
                  <>
                    <WelcomeBox onPick={(q) => submit(q)} disabled={streaming || atLimit} />

                    {previous.length > 0 && showHistory && (
                      <section aria-label={tx.panel.historyHeading} className="space-y-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{tx.panel.historyHeading}</p>
                        <ul className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1">
                          {previous.map((c) => {
                            const open = expanded.has(c.id)
                            const firstQ = c.messages.find((m) => m.role === 'user')?.content ?? ''
                            const topic = tx.categories[c.category]?.label ?? ''
                            return (
                              <li key={c.id} className="w-56 flex-shrink-0 snap-start">
                                <button
                                  type="button"
                                  aria-expanded={open}
                                  onClick={() => setExpanded(open ? new Set() : new Set([c.id]))}
                                  className={`flex h-full w-full flex-col items-start gap-0.5 rounded-xl border bg-white px-3 py-2 text-start shadow-sm transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${open ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
                                >
                                  <span className="text-[11px] font-semibold text-muted-foreground">{dateFmt.format(c.startedAt)}</span>
                                  {topic && <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{topic}</span>}
                                  <span className="line-clamp-2 text-[13px] leading-snug text-foreground">{firstQ}</span>
                                  <span className="text-[11px] text-muted-foreground">{tx.previousChat(c.messages.length)}</span>
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                        {previous.filter((c) => expanded.has(c.id)).map((c) => (
                          <div key={c.id} ref={expandedRef} className="rounded-xl border border-border bg-white p-3">
                            <ul className="space-y-3">{c.messages.map((m) => renderMessage(c.id, m, true))}</ul>
                            <button
                              type="button"
                              disabled={streaming}
                              onClick={() => {
                                setActiveId(c.id)
                                setExpanded(new Set())
                              }}
                              className="mt-3 rounded-md border border-primary px-2.5 py-1 text-xs font-semibold text-primary hover:bg-secondary disabled:opacity-50"
                            >
                              {tx.continueChat}
                            </button>
                          </div>
                        ))}
                      </section>
                    )}

                    {active && active.messages.length > 0 && (
                      <ul role="log" aria-live="polite" aria-busy={streaming} className="space-y-3">
                        {active.messages.map((m) => renderMessage(active.id, m))}
                      </ul>
                    )}
                  </>
                )}
              </div>

              {active && active.messages.some((m) => m.role === 'assistant' && m.content && !m.pending && !m.error) && <FeedbackBar key={active.id} />}

              {!isDesktop && showPanel && <MarketingPanel variant="strip" categoryKey={categoryKey} related={related} onLinkClick={onLinkClick} onRelatedClick={onRelatedClick} onHide={() => setShowPanel(false)} />}

              <form
                className="flex-shrink-0 border-t border-border bg-white p-2.5"
                onSubmit={(e) => {
                  e.preventDefault()
                  submit(draft)
                }}
              >
                <div className="flex items-end gap-2">
                  <label htmlFor="askhans-input" className="sr-only">{tx.inputLabel}</label>
                  <textarea
                    id="askhans-input"
                    ref={inputRef}
                    value={draft}
                    rows={1}
                    maxLength={ASK_HANS_LIMITS.maxMessageChars + 200}
                    disabled={consentOpen || streaming || atLimit}
                    placeholder={tx.inputPlaceholder}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        submit(draft)
                      }
                    }}
                    className="max-h-28 min-h-[40px] flex-1 resize-none rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-muted"
                  />
                  <button
                    type="submit"
                    disabled={consentOpen || streaming || atLimit || !draft.trim()}
                    aria-label={tx.send}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40"
                  >
                    <AskIcon name="SendHorizontal" className="h-4 w-4" />
                  </button>
                </div>
                {draft.length > ASK_HANS_LIMITS.maxMessageChars && (
                  <p className="mt-1 text-xs font-medium text-destructive" role="alert">{tx.errors.tooLong(ASK_HANS_LIMITS.maxMessageChars)} ({tx.charCount(draft.length, ASK_HANS_LIMITS.maxMessageChars)})</p>
                )}
                <p className="mt-1.5 flex flex-wrap items-center justify-between gap-x-3 text-[11px] leading-snug text-muted-foreground">
                  <span>{tx.aiNotice}</span>
                  {consent && !consentOpen && (
                    <button type="button" onClick={withdrawConsent} className="underline underline-offset-2 hover:text-foreground">
                      {tx.withdraw}
                    </button>
                  )}
                </p>
              </form>
            </div>

            {isDesktop && showPanel && <MarketingPanel variant="side" categoryKey={categoryKey} related={related} onLinkClick={onLinkClick} onRelatedClick={onRelatedClick} onHide={() => setShowPanel(false)} />}
          </div>
        </AskHansWindow>
      )}
    </>
  )
}
