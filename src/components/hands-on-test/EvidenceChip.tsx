import type { EvidenceKey } from '@/lib/hands-on-tests'

const TONE: Record<EvidenceKey, string> = {
  observed: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  measured: 'bg-blue-50 text-blue-800 border-blue-200',
  'tester-estimate': 'bg-cyan-50 text-cyan-800 border-cyan-200',
  'vendor-claim': 'bg-violet-50 text-violet-800 border-violet-200',
  'third-party': 'bg-slate-100 text-slate-700 border-slate-300',
  assumption: 'bg-amber-50 text-amber-800 border-amber-200',
  'tester-view': 'bg-pink-50 text-pink-800 border-pink-200',
  'tester-error': 'bg-red-50 text-red-800 border-red-200',
}

export function EvidenceChip({ kind, label }: { kind: EvidenceKey; label: string }) {
  return (
    <span
      data-evidence={kind}
      className={`inline-block w-fit whitespace-nowrap rounded border px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide align-middle ${TONE[kind]}`}
    >
      {label}
    </span>
  )
}
