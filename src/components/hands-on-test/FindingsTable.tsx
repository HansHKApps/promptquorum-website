'use client'

import { useState } from 'react'
import type { EvidenceKey, HandsOnTest } from '@/lib/hands-on-tests'
import { EvidenceChip } from './EvidenceChip'

const SEV: Record<string, string> = {
  High: 'border-red-400 text-red-700',
  Medium: 'border-slate-500 text-text-primary',
  Low: 'border-slate-300 text-text-muted',
  Positive: 'border-emerald-500 text-emerald-700',
}

export function FindingsTable({
  findings,
  labels,
  figureNumbers,
}: {
  findings: HandsOnTest['findings']
  labels: HandsOnTest['evidence_labels']
  figureNumbers: Record<string, number>
}) {
  const [filter, setFilter] = useState<'all' | EvidenceKey>('all')
  const keys = Object.keys(labels) as EvidenceKey[]
  const rows = findings.filter((f) => filter === 'all' || f[3] === filter)
  return (
    <div>
      <div role="group" aria-label="Filter findings by label" className="mb-3 flex flex-wrap gap-2">
        {(['all', ...keys] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(k)}
            aria-pressed={filter === k}
            className={`rounded border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide ${
              filter === k ? 'border-text-primary bg-text-primary text-white' : 'border-border bg-white text-text-primary'
            }`}
          >
            {k === 'all' ? 'All' : labels[k].label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-md border border-border bg-white">
        <table className="min-w-[640px] w-full text-sm">
          <thead>
            <tr className="border-b-2 border-text-primary text-left text-xs uppercase tracking-wide text-text-muted">
              {['ID', 'Finding', 'Category', 'Label', 'Severity', 'Figures'].map((h) => (
                <th key={h} className="px-3 py-2.5 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([id, text, cat, ev, sev, figs]) => (
              <tr key={id} className="border-b border-border align-top last:border-0">
                <td className="whitespace-nowrap px-3 py-2.5 font-mono text-xs">{id}</td>
                <td className="px-3 py-2.5">{text}</td>
                <td className="px-3 py-2.5">{cat}</td>
                <td className="px-3 py-2.5"><EvidenceChip kind={ev} label={labels[ev].label} /></td>
                <td className="px-3 py-2.5">
                  <span className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${SEV[sev] ?? ''}`}>{sev}</span>
                </td>
                <td className="px-3 py-2.5">
                  {figs.length === 0
                    ? '-'
                    : figs.map((f, i) => (
                        <span key={f}>
                          {i > 0 && ', '}
                          <a href={`#fig-${f}`} className="text-primary underline">Fig. {figureNumbers[f]}</a>
                        </span>
                      ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
