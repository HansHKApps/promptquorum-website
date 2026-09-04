// Card-view tile for one tool. Tone/spacing mirrors the itemHeadings card
// branch in PowerLocalLLMPostClient.tsx's SectionBlock (border-primary/10
// rounded-xl card, h3 name, dl-style meta rows) so the directory reads as
// the same design system as the rest of the article, not a bolted-on widget.

import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { HardwareBlock } from './HardwareBlock'
import { StarIcon } from './icons'
import type { MachineType } from './types'

const STATUS_LABEL: Record<ToolRecord['status'], string> = {
  listed: 'Listed',
  verified: 'Verified',
  tested: 'PromptQuorum-tested',
}

const STATUS_BADGE: Record<ToolRecord['status'], string> = {
  listed: 'bg-slate-50 text-slate-600 border-slate-200',
  verified: 'bg-blue-50 text-blue-700 border-blue-200',
  tested: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export function ToolCard({
  app,
  lang,
  machine,
  onOpen,
}: {
  app: ToolRecord
  lang: Language
  machine: MachineType
  onOpen: (slug: string) => void
}) {
  const tagline = app.tagline[lang] ?? app.tagline.en ?? ''

  return (
    <button
      type="button"
      onClick={() => onOpen(app.slug)}
      className="flex flex-col text-left border border-primary/10 rounded-xl p-4 h-full hover:border-primary/40 hover:shadow-sm transition-all bg-white"
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h3 className="text-base font-bold text-text-primary leading-snug">{app.name}</h3>
        {app.stars != null && (
          <span className="flex items-center gap-1 shrink-0 text-xs font-medium text-text-secondary">
            <StarIcon className="h-3.5 w-3.5 text-amber-400" />
            {app.stars.toLocaleString()}
          </span>
        )}
      </div>

      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{tagline}</p>

      <div className="mt-auto space-y-2.5">
        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${STATUS_BADGE[app.status]}`}>
          {STATUS_LABEL[app.status]}
        </span>

        <div className="text-xs">
          <HardwareBlock hardware={app.hardware} machine={machine} compact />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-text-secondary">
          {app.license && <span className="rounded bg-gray-50 border border-gray-200 px-1.5 py-0.5">{app.license}</span>}
          {app.addedDate && <span>Added {formatDisplayDate(app.addedDate, lang)}</span>}
        </div>
      </div>
    </button>
  )
}
