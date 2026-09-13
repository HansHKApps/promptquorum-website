'use client'

// "Your setup" panel — the opt-in, precise layer on top of the existing
// coarse "My machine:" selector (MachineType, persisted separately in
// hardware.ts's readStoredMachine/writeStoredMachine). This widget owns the
// HardwareProfile draft state and is the ONLY place that ever calls
// writeStoredProfile/clearStoredProfile — always from a direct user click,
// never a passive effect.
//
// TTDSG/privacy discipline (hard requirement, see the task spec this shipped
// against): nothing is written to localStorage until the viewer clicks
// "Save my setup". `navigator.deviceMemory` may pre-fill the RAM input as a
// labelled, honestly-worded HINT ("≈8GB detected — confirm or adjust") but
// that value sits in the input, unsaved, until the click. The exact profile
// itself is never transmitted anywhere — the only network call this can ever
// trigger is trackHardwareProfileSaved(), which (a) only fires on this same
// explicit Save click, never passively, (b) only fires at all if the viewer
// already granted the site's existing general "Analytics" cookie-consent
// category, and (c) sends coarse buckets (e.g. "16-32") only, never the raw
// numbers — see src/lib/tracking/hardwareProfile.ts for the full contract.

import { useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import type { HardwareProfile, MachineType } from './types'
import { writeStoredProfile, clearStoredProfile } from './hardware'
import { getMachineLabels, t } from './directory-i18n'
import { trackHardwareProfileSaved } from '@/lib/tracking/hardwareProfile'

/**
 * navigator.deviceMemory is a Chromium-only, coarse (power-of-two, capped at
 * 8) API not in the standard DOM lib types — hence the local cast. Used only
 * to pre-fill an input the viewer must still confirm and explicitly save;
 * never read into localStorage directly (see file header).
 */
function deviceMemoryHint(): number | null {
  try {
    const nav = navigator as Navigator & { deviceMemory?: number }
    return typeof nav.deviceMemory === 'number' ? nav.deviceMemory : null
  } catch {
    return null
  }
}

function NumberField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string
  value: number
  onChange: (n: number) => void
  hint?: string | null
}) {
  return (
    <label className="flex flex-col gap-1 text-xs">
      <span className="font-medium text-text-secondary">{label}</span>
      <input
        type="number"
        min={0}
        step={1}
        value={Number.isFinite(value) ? value : ''}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className="w-24 rounded-md border border-primary/20 bg-white px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      {hint && <span className="text-[11px] text-text-secondary/70">{hint}</span>}
    </label>
  )
}

export function HardwareProfileWidget({
  machine,
  profile,
  onProfileChange,
  lang,
  expanded,
  onExpandedChange,
}: {
  machine: MachineType
  profile: HardwareProfile | null
  onProfileChange: (profile: HardwareProfile | null) => void
  lang: Language
  expanded: boolean
  onExpandedChange: (next: boolean) => void
}) {
  const memoryHint = deviceMemoryHint()
  const matchesMachine = profile != null && profile.machine === machine

  const [ramGb, setRamGb] = useState<number>(() =>
    profile && 'ramGb' in profile ? profile.ramGb : memoryHint ?? 16
  )
  const [vramGb, setVramGb] = useState<number>(() => (profile && 'vramGb' in profile ? profile.vramGb : 8))
  const [unifiedGb, setUnifiedGb] = useState<number>(() =>
    profile && 'unifiedGb' in profile ? profile.unifiedGb : memoryHint ?? 16
  )

  const handleSave = () => {
    let next: HardwareProfile
    if (machine === 'dgpu') next = { machine: 'dgpu', ramGb, vramGb }
    else if (machine === 'cpu') next = { machine: 'cpu', ramGb }
    else next = { machine: 'apple', unifiedGb }
    writeStoredProfile(next)
    onProfileChange(next)
    onExpandedChange(false)
    trackHardwareProfileSaved(next)
  }

  const handleForget = () => {
    clearStoredProfile()
    onProfileChange(null)
    onExpandedChange(false)
  }

  if (!expanded) {
    let summary = t('hwProfileSetLink', lang)
    if (matchesMachine && profile) {
      if (profile.machine === 'dgpu') summary = t('hwProfileSummaryDgpuTemplate', lang, { ram: profile.ramGb, vram: profile.vramGb })
      else if (profile.machine === 'cpu') summary = t('hwProfileSummaryCpuTemplate', lang, { ram: profile.ramGb })
      else summary = t('hwProfileSummaryAppleTemplate', lang, { unified: profile.unifiedGb })
    } else if (profile) {
      // Saved, but for a machine type the viewer has since switched away
      // from in the selector above — the numbers don't apply anymore.
      summary = t('hwProfileStaleForMachineTemplate', lang, { machine: getMachineLabels(lang)[machine] })
    }
    return (
      <button
        type="button"
        id="hw-profile-widget"
        onClick={() => onExpandedChange(true)}
        className="text-sm font-medium text-primary hover:underline text-left"
      >
        {summary}
      </button>
    )
  }

  return (
    <div id="hw-profile-widget" className="rounded-lg border border-primary/20 bg-white p-3 space-y-3 text-sm shadow-sm">
      <div className="flex flex-wrap items-end gap-3">
        {(machine === 'dgpu' || machine === 'cpu') && (
          <NumberField
            label={t('hwProfileRamLabel', lang)}
            value={ramGb}
            onChange={setRamGb}
            hint={memoryHint != null && !(profile && 'ramGb' in profile) ? t('hwProfileDetectedHintTemplate', lang, { n: memoryHint }) : null}
          />
        )}
        {machine === 'dgpu' && (
          <NumberField label={t('hwProfileVramLabel', lang)} value={vramGb} onChange={setVramGb} />
        )}
        {machine === 'apple' && (
          <NumberField
            label={t('hwProfileUnifiedLabel', lang)}
            value={unifiedGb}
            onChange={setUnifiedGb}
            hint={memoryHint != null && !(profile && 'unifiedGb' in profile) ? t('hwProfileDetectedHintTemplate', lang, { n: memoryHint }) : null}
          />
        )}
      </div>

      <p className="text-[11px] text-text-secondary/70">{t('hwProfilePrivacyNote', lang)}</p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-lg border border-primary bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary/90"
        >
          {t('hwProfileSaveButton', lang)}
        </button>
        <button
          type="button"
          onClick={() => onExpandedChange(false)}
          className="rounded-lg border border-primary/20 px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-primary/5"
        >
          {t('hwProfileCancelButton', lang)}
        </button>
        {profile && (
          <button
            type="button"
            onClick={handleForget}
            className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-100"
          >
            {t('hwProfileForgetButton', lang)}
          </button>
        )}
      </div>
    </div>
  )
}
