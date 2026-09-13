// Renders a tool's hardware requirement for the viewer's selected machine type.
// Logic lives in ./hardware.ts (computeHardwareDisplay) — this is presentation only.

import { computeHardwareDisplay, type MobilePlatformContext } from './hardware'
import type { HardwareProfile, MachineType } from './types'
import type { EngineKey, ToolRecordHardware } from '@/lib/power-local-llm/apps/types'
import type { Language } from '@/lib/blog/blogContent'
import { t } from './directory-i18n'

/**
 * Reuses the exact wording HardwareProfileWidget's own collapsed summary uses
 * ("{n} GB unified · Edit" etc.) so the number a viewer sees next to a tool's
 * requirement always matches what they'd see if they opened "Your setup" —
 * one source of truth for how a saved profile is worded, not a second copy
 * that could drift. Returns null when there is no profile for this machine
 * type (nothing to echo).
 */
function profileEchoText(profile: HardwareProfile | null | undefined, machine: MachineType, lang: Language): string | null {
  if (!profile || profile.machine !== machine) return null
  if (profile.machine === 'dgpu') return t('hwProfileSummaryDgpuTemplate', lang, { ram: profile.ramGb, vram: profile.vramGb })
  if (profile.machine === 'cpu' || profile.machine === 'ios' || profile.machine === 'android') {
    return t('hwProfileSummaryCpuTemplate', lang, { ram: profile.ramGb })
  }
  return t('hwProfileSummaryAppleTemplate', lang, { unified: profile.unifiedGb })
}

export function HardwareBlock({
  hardware,
  machine,
  engine,
  lang,
  compact = false,
  profile,
  onRequestHardware,
  mobile,
}: {
  hardware: ToolRecordHardware | null
  machine: MachineType
  engine?: EngineKey | 'TODO'
  lang: Language
  compact?: boolean
  /** The viewer's saved hardware profile, if any — shown alongside the
   *  requirement so a viewer can immediately spot "that doesn't match my
   *  machine" and fix it, instead of having to scroll back up to the "Your
   *  setup" panel to even see what they last saved. */
  profile?: HardwareProfile | null
  /** Opens/scrolls to the "Your setup" panel — same callback CompatibilityBadge
   *  uses for its "Set your hardware" button. Required for the echoed profile
   *  number to be clickable; the number still renders (as plain text) without it. */
  onRequestHardware?: () => void
  /** `{ interfaces: app.interfaces, platforms: app.platforms }` — lets the
   *  ios/android machine types show "No iPhone/Android app" instead of a RAM
   *  number for a tool that has no mobile build at all. Ignored for desktop
   *  machine types. */
  mobile?: MobilePlatformContext
}) {
  const display = computeHardwareDisplay(hardware, machine, lang, engine, mobile)

  if (!display.known) {
    return null
  }

  const echoText = profileEchoText(profile, machine, lang)
  const echo = echoText ? (
    onRequestHardware ? (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRequestHardware()
        }}
        className="text-primary hover:underline"
      >
        {echoText}
      </button>
    ) : (
      <span>{echoText}</span>
    )
  ) : null

  if (compact) {
    return (
      <span className="font-medium text-text-primary">
        {display.headline}
        {echo && <span className="ml-1 font-normal text-[11px] text-text-secondary/70">({echo})</span>}
      </span>
    )
  }

  return (
    <div>
      <p className="font-semibold text-text-primary">{display.headline}</p>
      {display.detail && <p className="text-xs text-text-secondary mt-0.5">{display.detail}</p>}
      {echo && <p className="text-xs text-text-secondary/70 mt-0.5">{echo}</p>}
    </div>
  )
}
