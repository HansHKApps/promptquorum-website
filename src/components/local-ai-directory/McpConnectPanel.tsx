'use client'

// "Connect your AI" entry point above the directory. English only for v1.
// Data lives in src/lib/mcp/clients.ts.

import { useEffect, useState } from 'react'
import { MCP_CLIENTS, MCP_SERVER_URL, GOAL_GROUPS, OS_OPTIONS, RAM_OPTIONS, buildLaunchPrompt, type McpClientOnboarding, type SetupProfile } from '@/lib/mcp/clients'
import { cn } from '@/lib/utils'

const DIFFICULTY_LABEL = { easy: 'Easy setup', medium: 'Medium setup', hard: 'Hard setup' } as const

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-text-primary">{children}</span>
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="shrink-0 rounded border border-primary/30 bg-white px-2 py-1 text-xs font-medium text-text-primary hover:bg-primary/5"
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  )
}

function detectOs(): SetupProfile['os'] {
  const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent
  if (/Windows/i.test(ua)) return 'win'
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return 'linux'
  return 'mac'
}

const SELECT = 'w-full rounded border border-primary/20 bg-white px-2 py-1.5 text-sm text-text-primary'

function Panel({ client }: { client: McpClientOnboarding }) {
  const [profile, setProfile] = useState<SetupProfile>({ groupId: 'chat-assistants', subId: '', os: 'mac', ramGb: 16 })
  useEffect(() => setProfile((p) => ({ ...p, os: detectOs() })), [])
  const launchPrompt = buildLaunchPrompt(client, profile)
  return (
    <div className="mt-3 rounded-lg border border-primary/15 bg-white p-4 text-sm text-text-primary space-y-4">
      <section>
        <h3 className="font-semibold">What it is</h3>
        <p className="mt-1 text-text-secondary">{client.description}</p>
      </section>
      <section>
        <h3 className="font-semibold">How to connect</h3>
        <ol className="mt-1 list-decimal pl-5 space-y-1 text-text-secondary">
          {client.connectSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        {client.configSnippet && (
          <div className="mt-2 flex items-start gap-2">
            <pre className="min-w-0 flex-1 overflow-x-auto rounded bg-slate-900 p-3 text-xs text-slate-100">{client.configSnippet}</pre>
            <CopyButton text={client.configSnippet} label="config" />
          </div>
        )}
        {!client.configSnippet && (
          <div className="mt-2 flex items-center gap-2">
            <code className="min-w-0 flex-1 overflow-x-auto rounded bg-slate-900 px-3 py-2 text-xs text-slate-100">{MCP_SERVER_URL}</code>
            <CopyButton text={MCP_SERVER_URL} label="server URL" />
          </div>
        )}
      </section>
      <section>
        <h3 className="font-semibold">Tell it what you need, then start</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <label className="text-xs text-text-secondary">
            Category
            <select className={SELECT} value={profile.groupId} onChange={(e) => setProfile({ ...profile, groupId: e.target.value, subId: '' })}>
              {GOAL_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>
          </label>
          <label className="text-xs text-text-secondary">
            Subcategory
            <select className={SELECT} value={profile.subId} onChange={(e) => setProfile({ ...profile, subId: e.target.value })}>
              <option value="">Any</option>
              {GOAL_GROUPS.find((g) => g.id === profile.groupId)?.subs.map((x) => (
                <option key={x.id} value={x.id}>{x.label}</option>
              ))}
            </select>
          </label>
          <label className="text-xs text-text-secondary">
            My system
            <select className={SELECT} value={profile.os} onChange={(e) => setProfile({ ...profile, os: e.target.value as SetupProfile['os'] })}>
              {OS_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </label>
          <label className="text-xs text-text-secondary">
            Memory (RAM)
            <select className={SELECT} value={profile.ramGb} onChange={(e) => setProfile({ ...profile, ramGb: Number(e.target.value) })}>
              {RAM_OPTIONS.map((r) => (
                <option key={r} value={r}>{r} GB</option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-2 text-text-secondary">This ready-made prompt goes to your AI in one go:</p>
        <div className="mt-1 flex items-start gap-2">
          <blockquote className="min-w-0 flex-1 whitespace-pre-line rounded border-l-4 border-primary/40 bg-primary/5 px-3 py-2 text-xs">{launchPrompt}</blockquote>
          <CopyButton text={launchPrompt} label="prompt" />
        </div>
        {client.openWithPrompt && (
          <a
            href={client.openWithPrompt(launchPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded border border-primary bg-primary px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
          >
            Open in {client.displayName} with this prompt ↗
          </a>
        )}
      </section>
      <p className="text-xs text-text-secondary">
        {client.lastVerified ? `Steps last tested ${client.lastVerified}.` : 'These steps follow the vendor’s documentation and have not been hand-tested yet.'}{' '}
        Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.
      </p>
    </div>
  )
}

export function McpConnectPanel() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [arrivedViaLink, setArrivedViaLink] = useState(false)
  const open = MCP_CLIENTS.find((c) => c.id === openId)

  useEffect(() => {
    if (window.location.hash !== '#mcp-connect-heading') return
    setArrivedViaLink(true)
    const timer = setTimeout(() => setArrivedViaLink(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const highlighted = arrivedViaLink && !openId

  return (
    <section
      aria-labelledby="mcp-connect-heading"
      className={cn(
        'mb-6 scroll-mt-24 rounded-xl border border-primary/15 bg-primary/5 p-4 transition-shadow',
        highlighted && 'animate-pulse ring-4 ring-primary ring-offset-2'
      )}
    >
      <h2 id="mcp-connect-heading" className="text-base font-semibold text-text-primary">
        Ask your own AI to pick the app
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Connect your AI client to this directory. It asks what you need and what hardware you have, then recommends apps, all inside your own chat.
      </p>
      {highlighted && (
        <p className="mt-2 text-sm font-semibold text-primary">
          👇 Start here — click the AI assistant you use below.
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {MCP_CLIENTS.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-expanded={openId === c.id}
            onClick={() => {
              setArrivedViaLink(false)
              setOpenId(openId === c.id ? null : c.id)
            }}
            className={cn(
              'flex flex-col items-start gap-1 rounded-lg border px-3 py-2 text-left text-sm font-medium',
              openId === c.id ? 'border-primary bg-primary text-white' : 'border-primary/20 bg-white text-text-primary hover:bg-primary/5',
              highlighted && 'ring-2 ring-primary/60'
            )}
          >
            <span>{c.displayName}</span>
            <span className="flex gap-1 text-text-primary">
              <Badge>{c.tier === 'free' ? 'Free' : 'Paid plan'}</Badge>
              <Badge>{DIFFICULTY_LABEL[c.difficulty]}</Badge>
            </span>
          </button>
        ))}
      </div>
      {open?.tierNote && <p className="mt-2 text-xs text-text-secondary">{open.tierNote}</p>}
      {open && <Panel client={open} />}
    </section>
  )
}
