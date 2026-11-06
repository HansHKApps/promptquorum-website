// Power Mode ↔ the website's hardware tool. The tool keeps the visitor's numbers in this browser's
// localStorage ("pq-hw-profile", written only on an explicit click). Power Mode reads it to pre-fill the
// hardware step and writes it only when the visitor ticks "also save this" and continues.

import { readStoredProfile, writeStoredMachine, writeStoredProfile } from '@/components/local-ai-directory/hardware'
import type { HardwareProfile, MachineType } from '@/components/local-ai-directory/types'
import type { HardwareAnswers, MobileAnswers } from '@/lib/askhans/solutions/types'

export function profileFromHardware(h: HardwareAnswers): HardwareProfile | null {
  if (h.device === 'none' || h.ramGb === null) return null
  if (h.gpu === 'apple' || h.device === 'mac') return { machine: 'apple', unifiedGb: h.ramGb }
  if ((h.gpu === 'nvidia' || h.gpu === 'amd') && h.vramGb !== null && h.vramGb > 0) return { machine: 'dgpu', ramGb: h.ramGb, vramGb: h.vramGb }
  return { machine: 'cpu', ramGb: h.ramGb }
}

export function profileFromMobile(m: MobileAnswers): HardwareProfile | null {
  if (m.ramGb === null) return null
  return { machine: m.platform, ramGb: m.ramGb }
}

/** Explicit opt-in save (call only from the visitor's click). */
export function saveProfile(profile: HardwareProfile): void {
  writeStoredProfile(profile)
  writeStoredMachine(profile.machine as MachineType)
}

export interface SavedHardware {
  gpu: HardwareAnswers['gpu']
  os: HardwareAnswers['os']
  ramGb: number
  vramGb: number | null
  device?: HardwareAnswers['device']
}

/** What the saved profile tells us. The device type is not stored by the tool, so it stays for the visitor to pick. */
export function savedHardware(): SavedHardware | null {
  const p = readStoredProfile()
  if (!p) return null
  if (p.machine === 'apple') return { gpu: 'apple', os: 'mac', ramGb: p.unifiedGb, vramGb: null, device: 'mac' }
  if (p.machine === 'dgpu') return { gpu: 'nvidia', os: 'unknown', ramGb: p.ramGb, vramGb: p.vramGb }
  if (p.machine === 'cpu') return { gpu: 'integrated', os: 'unknown', ramGb: p.ramGb, vramGb: null }
  return null
}

export function savedMobileRam(platform: 'ios' | 'android'): number | null {
  const p = readStoredProfile()
  return p && p.machine === platform ? p.ramGb : null
}
