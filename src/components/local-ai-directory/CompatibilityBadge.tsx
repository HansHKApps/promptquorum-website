// Small inline "can I run it" pill — complementary to HardwareBlock (which
// answers "what does this need"), this answers "given the profile the
// viewer saved, will THEIR machine run it". Logic lives in
// computeCompatibilityVerdict (./hardware.ts); this file is presentation only.
//
// Visual vocabulary matches the existing pill badges in this component set
// (see ToolCard.tsx's "Feature Article" badge and locality/engine/price
// pills): rounded-full border, text-[10px] font-bold uppercase tracking-wide.

import type { Language } from '@/lib/blog/blogContent'
import type { CompatibilityVerdict } from './hardware'
import { CheckIcon, WarningIcon, StopIcon, QuestionIcon } from './icons'
import { t } from './directory-i18n'

const VERDICT_STYLE: Record<CompatibilityVerdict, string> = {
  comfortable: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  marginal: 'bg-amber-50 text-amber-700 border-amber-200',
  'wont-run': 'bg-rose-50 text-rose-700 border-rose-200',
  unknown: 'bg-slate-50 text-slate-500 border-slate-200',
}

const BASE_CLASSES =
  'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide'

export function CompatibilityBadge({
  verdict,
  hasProfile,
  lang,
  onRequestProfile,
  variesByModel,
}: {
  verdict: CompatibilityVerdict
  /** Whether the viewer has saved a hardware profile at all — distinguishes
   *  the two upstream causes computeCompatibilityVerdict collapses into
   *  `unknown` (see that function's doc comment): no profile saved yet vs.
   *  the tool itself has no hardware data to compare against. */
  hasProfile: boolean
  lang: Language
  /** Called when the viewer clicks the "no profile saved" state — should
   *  open/scroll to the HardwareProfileWidget. Ignored for every other verdict. */
  onRequestProfile?: () => void
  /** From `tool.hardware?.variesByModel` — true when this tool's requirement is
   *  inherently variable (depends on whichever model/backend the viewer loads),
   *  not simply unresearched. Only changes wording for the `unknown` verdict;
   *  ignored otherwise. See ToolRecordHardware.variesByModel for the full story. */
  variesByModel?: boolean
}) {
  if (verdict === 'unknown' && !hasProfile) {
    return (
      <button
        type="button"
        onClick={onRequestProfile}
        className={`${BASE_CLASSES} ${VERDICT_STYLE.unknown} hover:bg-slate-100 hover:text-slate-700 cursor-pointer`}
      >
        <QuestionIcon className="h-2.5 w-2.5" />
        {t('compatSetHardware', lang)}
      </button>
    )
  }

  if (verdict === 'unknown' && variesByModel) {
    // Profile exists, and this tool HAS been researched — the research just
    // concluded there is no single fixed number, because the requirement is
    // set by whichever model/backend the viewer loads, not the tool itself.
    // Distinct from compatNotReviewed below, which means "nobody has looked
    // into this tool's hardware footprint yet."
    return (
      <span className={`${BASE_CLASSES} ${VERDICT_STYLE.unknown}`}>
        <QuestionIcon className="h-2.5 w-2.5" />
        {t('compatVariesByModel', lang)}
      </span>
    )
  }

  if (verdict === 'unknown') {
    // Profile exists, but this tool has no hardware data (and no
    // derivable-from-engine floor) to compare it against — a distinct state
    // from "no profile saved", not a decoration for a missing badge.
    return (
      <span className={`${BASE_CLASSES} ${VERDICT_STYLE.unknown}`}>
        <QuestionIcon className="h-2.5 w-2.5" />
        {t('compatNotReviewed', lang)}
      </span>
    )
  }

  const ICON = { comfortable: CheckIcon, marginal: WarningIcon, 'wont-run': StopIcon }[verdict]
  const LABEL_KEY = { comfortable: 'compatRunsWell', marginal: 'compatMarginal', 'wont-run': 'compatWontRun' } as const

  return (
    <span className={`${BASE_CLASSES} ${VERDICT_STYLE[verdict]}`}>
      <ICON className="h-2.5 w-2.5" />
      {t(LABEL_KEY[verdict], lang)}
    </span>
  )
}
