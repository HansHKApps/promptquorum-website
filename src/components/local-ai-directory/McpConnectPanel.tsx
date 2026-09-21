'use client'

// "Connect your AI" entry point above the directory. English only for v1.
// Data lives in src/lib/mcp/clients.ts.

import { useState } from 'react'
import { MCP_CLIENTS, type McpClientOnboarding } from '@/lib/mcp/clients'
import { cn } from '@/lib/utils'

const DIFFICULTY_LABEL = { easy: 'Easy setup', medium: 'Medium setup', hard: 'Hard setup' } as const

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-text-primary">{children}</span>
}

function Panel({ client }: { client: McpClientOnboarding }) {
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
          <pre className="mt-2 overflow-x-auto rounded bg-slate-900 p-3 text-xs text-slate-100">{client.configSnippet}</pre>
        )}
      </section>
      <section>
        <h3 className="font-semibold">How to start it</h3>
        <p className="mt-1 text-text-secondary">Paste this into your chat:</p>
        <blockquote className="mt-1 rounded border-l-4 border-primary/40 bg-primary/5 px-3 py-2">{client.launchPrompt}</blockquote>
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
  const open = MCP_CLIENTS.find((c) => c.id === openId)

  return (
    <section aria-labelledby="mcp-connect-heading" className="mb-6 rounded-xl border border-primary/15 bg-primary/5 p-4">
      <h2 id="mcp-connect-heading" className="text-base font-semibold text-text-primary">
        Ask your own AI to pick the app
      </h2>
      <p className="mt-1 text-sm text-text-secondary">
        Connect your AI client to this directory. It asks what you need and what hardware you have, then recommends apps, all inside your own chat.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {MCP_CLIENTS.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-expanded={openId === c.id}
            onClick={() => setOpenId(openId === c.id ? null : c.id)}
            className={cn(
              'flex flex-col items-start gap-1 rounded-lg border px-3 py-2 text-left text-sm font-medium',
              openId === c.id ? 'border-primary bg-primary text-white' : 'border-primary/20 bg-white text-text-primary hover:bg-primary/5'
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
