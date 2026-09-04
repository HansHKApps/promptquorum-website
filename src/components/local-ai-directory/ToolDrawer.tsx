'use client'

// Tool detail drawer — built on Radix Dialog (already a repo dependency,
// unused elsewhere in src/components) rather than hand-rolling a modal.
// Radix has no separate "Sheet" primitive in this repo, so the slide-in-from
// -right panel is Dialog.Content with directional Tailwind transitions.

import * as Dialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { HardwareBlock } from './HardwareBlock'
import { computeHardwareDisplay } from './hardware'
import { ArticlesBlock } from './ArticlesBlock'
import { CloseIcon, StarIcon } from './icons'
import { DataDisclaimer } from '@/components/DataDisclaimer'
import type { MachineType } from './types'

const STATUS_LABEL: Record<ToolRecord['status'], string> = {
  listed: 'Listed',
  verified: 'Verified',
  tested: 'PromptQuorum-tested',
}

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  if (value == null || value === '') return null
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 text-sm">
      <dt className="font-semibold text-text-primary shrink-0 sm:w-32">{label}:</dt>
      <dd className="text-text-secondary">{value}</dd>
    </div>
  )
}

function joinOrUnknown(values: string[] | null): ReactNode {
  if (!values || values.length === 0) return null
  return values.join(', ')
}

export function ToolDrawer({
  app,
  allApps,
  lang,
  machine,
  onClose,
  onOpenSlug,
}: {
  app: ToolRecord | null
  allApps: ToolRecord[]
  lang: Language
  machine: MachineType
  onClose: () => void
  onOpenSlug: (slug: string) => void
}) {
  const open = app != null

  const alternatives = app
    ? allApps.filter((a) => a.slug !== app.slug && a.layer === app.layer).slice(0, 6)
    : []

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-lg bg-white shadow-xl overflow-y-auto focus:outline-none
            data-[state=open]:animate-in data-[state=open]:slide-in-from-right
            data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right"
        >
          {app && (
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-1">
                <Dialog.Title className="text-xl font-bold text-text-primary">{app.name}</Dialog.Title>
                <Dialog.Close asChild>
                  <button type="button" aria-label="Close" className="shrink-0 rounded-full p-1.5 text-text-secondary hover:bg-gray-100">
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className="text-sm text-text-secondary mb-4">
                {app.tagline[lang] ?? app.tagline.en ?? ''}
              </Dialog.Description>

              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border bg-slate-50 text-slate-600 border-slate-200">
                  {STATUS_LABEL[app.status]}
                </span>
                {app.stars != null && (
                  <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                    <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                    {app.stars.toLocaleString()}
                  </span>
                )}
                {app.url && (
                  <a
                    href={app.url.startsWith('http') ? app.url : `https://${app.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {app.url} ↗
                  </a>
                )}
              </div>

              {/* Full details */}
              <section className="border border-primary/10 rounded-xl p-4 mb-5">
                <dl className="space-y-2">
                  <DetailRow label="Runs" value={app.locality === 'TODO' ? null : app.locality} />
                  <DetailRow label="Engine" value={app.engine === 'TODO' ? null : app.engine} />
                  <DetailRow label="Price" value={app.price === 'TODO' ? null : app.price} />
                  <DetailRow label="License" value={app.license} />
                  <DetailRow label="Platforms" value={joinOrUnknown(app.platforms)} />
                  <DetailRow label="Works with" value={joinOrUnknown(app.worksWith)} />
                  <DetailRow label="Layer" value={app.layer} />
                  <DetailRow
                    label="Hardware"
                    value={computeHardwareDisplay(app.hardware, machine).known ? <HardwareBlock hardware={app.hardware} machine={machine} compact /> : null}
                  />
                  <DetailRow label="Added" value={app.addedDate ? formatDisplayDate(app.addedDate, lang) : null} />
                  <DetailRow label="Last verified" value={app.lastVerifiedDate ? formatDisplayDate(app.lastVerifiedDate, lang) : null} />
                </dl>
              </section>

              {/* From the founder */}
              <section className="mb-5">
                <h3 className="text-sm font-bold text-text-primary mb-2">From the founder</h3>
                {app.founder ? (
                  <div className="text-sm text-text-secondary space-y-1.5">
                    <p>{app.founder.why}</p>
                    <p><span className="font-semibold text-text-primary">Best for:</span> {app.founder.best}</p>
                    <p><span className="font-semibold text-text-primary">Limits:</span> {app.founder.limits}</p>
                  </div>
                ) : (
                  <p className="text-sm text-text-secondary italic">
                    Claim this entry — if you build or maintain {app.name}, email hello@promptquorum.com to add a founder statement.
                  </p>
                )}
              </section>

              {/* PromptQuorum review */}
              {app.pqReview && (
                <section className="mb-5">
                  <h3 className="text-sm font-bold text-text-primary mb-2">PromptQuorum review</h3>
                  <div className="text-sm text-text-secondary space-y-1.5">
                    <p>{app.pqReview.text[lang] ?? app.pqReview.text.en ?? ''}</p>
                    <p className="text-xs text-text-secondary/80">Tested {formatDisplayDate(app.pqReview.date, lang)} on {app.pqReview.hw}</p>
                  </div>
                </section>
              )}

              {/* PromptQuorum articles */}
              <section className="mb-5">
                <h3 className="text-sm font-bold text-text-primary mb-2">PromptQuorum articles</h3>
                <ArticlesBlock toolName={app.name} lang={lang} />
              </section>

              {/* Alternatives */}
              {alternatives.length > 0 && (
                <section className="mb-5">
                  <h3 className="text-sm font-bold text-text-primary mb-2">Alternatives</h3>
                  <div className="flex flex-wrap gap-2">
                    {alternatives.map((alt) => (
                      <button
                        key={alt.slug}
                        type="button"
                        onClick={() => onOpenSlug(alt.slug)}
                        className="rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-text-primary hover:border-primary/50 hover:bg-primary/5"
                      >
                        {alt.name}
                      </button>
                    ))}
                  </div>
                </section>
              )}

              <DataDisclaimer lang={lang} />
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
