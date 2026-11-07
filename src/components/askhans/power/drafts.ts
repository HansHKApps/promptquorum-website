// Power Mode — form drafts for the hardware and phone steps, and their conversion to validated answers.
// Kept apart from the components so the component files only export components.

import type { DeviceKind, GpuKind, HardwareAnswers, MobileAnswers, OsKind } from '@/lib/askhans/solutions/types'

/** "12,5" / "12.5" → 12.5; empty or invalid → NaN. */
export const parseNum = (s: string): number => (s.trim() ? Number(s.replace(',', '.')) : NaN)

const inRange = (n: number, max: number) => Number.isFinite(n) && n > 0 && n <= max

export interface HardwareDraft {
  device?: DeviceKind
  os?: OsKind
  gpu?: GpuKind
  ram: string
  ramUnknown: boolean
  vram: string
  vramUnknown: boolean
  storage: string
  storageUnknown: boolean
  /** processor / Apple chip, free text (audit only) */
  cpu: string
}

export const emptyHardwareDraft: HardwareDraft = { ram: '', ramUnknown: false, vram: '', vramUnknown: false, storage: '', storageUnknown: false, cpu: '' }


/** Draft → validated answers, or null while the form is incomplete. */
export function hardwareFromDraft(d: HardwareDraft, allowNone: boolean, askCpu = false): HardwareAnswers | null {
  if (!d.device) return null
  if (d.device === 'none') return allowNone ? { device: 'none', os: 'unknown', gpu: 'unknown', ramGb: null, vramGb: null, storageGb: null } : null
  const mac = d.device === 'mac'
  const os = mac ? 'mac' : d.os
  const gpu = mac ? 'apple' : d.gpu
  if (!os || !gpu) return null
  let ramGb: number | null = null
  if (!d.ramUnknown) {
    const n = parseNum(d.ram)
    if (!inRange(n, 4096)) return null
    ramGb = n
  }
  let vramGb: number | null = null
  if (gpu === 'nvidia' || gpu === 'amd') {
    if (!d.vramUnknown) {
      const n = parseNum(d.vram)
      if (!inRange(n, 1024)) return null
      vramGb = n
    }
  }
  let storageGb: number | null = null
  if (!d.storageUnknown && d.storage.trim()) {
    const n = parseNum(d.storage)
    if (!inRange(n, 100_000)) return null
    storageGb = n
  }
  const cpu = askCpu ? d.cpu.replace(/[\r\n]+/g, ' ').trim().slice(0, 60) : ''
  return { device: d.device, os, gpu, ramGb, vramGb, storageGb, ...(cpu ? { cpu } : {}) }
}

const numText = (n: number | null) => (n === null ? '' : String(n))

/** Validated answers → form draft (loading a saved audit so the visitor can update it). */
export function draftFromHardware(h: HardwareAnswers): HardwareDraft {
  return {
    device: h.device,
    os: h.device === 'mac' ? undefined : h.os,
    gpu: h.device === 'mac' ? undefined : h.gpu,
    ram: numText(h.ramGb),
    ramUnknown: h.ramGb === null,
    vram: numText(h.vramGb),
    vramUnknown: (h.gpu === 'nvidia' || h.gpu === 'amd') && h.vramGb === null,
    storage: numText(h.storageGb),
    storageUnknown: false,
    cpu: h.cpu ?? '',
  }
}

export interface MobileDraft {
  platform?: 'ios' | 'android'
  model: string
  ram: string
  ramUnknown: boolean
  storage: string
  storageUnknown: boolean
}

export const emptyMobileDraft: MobileDraft = { model: '', ram: '', ramUnknown: false, storage: '', storageUnknown: false }


export function mobileFromDraft(d: MobileDraft): MobileAnswers | null {
  if (!d.platform) return null
  let ramGb: number | null = null
  if (!d.ramUnknown) {
    const n = parseNum(d.ram)
    if (!inRange(n, 64)) return null
    ramGb = n
  }
  let storageGb: number | null = null
  if (!d.storageUnknown) {
    const n = parseNum(d.storage)
    if (!inRange(n, 4096)) return null
    storageGb = n
  }
  return { platform: d.platform, model: d.model.trim().slice(0, 60), ramGb, storageGb }
}

