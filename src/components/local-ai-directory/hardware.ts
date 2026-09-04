// Local AI App Directory — hardware requirement math + machine-type persistence.
// Ported from the validated vanilla-JS prototype's logic (not its markup), per
// Phase 3 of /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md.

import type { MachineType } from './types'
import type { ToolRecordHardware } from '@/lib/power-local-llm/apps/types'

const STORAGE_KEY = 'pq-directory-machine'

/**
 * Detects a sensible default machine type from navigator.platform.
 * Mac / iPhone / iPad -> apple; everything else -> dgpu.
 * Matches the prototype's logic exactly (already validated there) — this is
 * a best-effort default, not a hardware probe, and is only ever used until
 * the viewer picks (and we persist) an explicit choice.
 */
export function detectDefaultMachine(): MachineType {
  if (typeof navigator === 'undefined') return 'dgpu'
  const platform = navigator.platform || ''
  if (/Mac|iPhone|iPad/i.test(platform)) return 'apple'
  return 'dgpu'
}

/** Reads the persisted machine choice, if any. Never throws. */
export function readStoredMachine(): MachineType | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === 'dgpu' || raw === 'apple' || raw === 'cpu') return raw
    return null
  } catch {
    return null
  }
}

/** Persists the viewer's machine choice. Never throws — this is a convenience only. */
export function writeStoredMachine(machine: MachineType): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, machine)
  } catch {
    // localStorage unavailable (private window, blocked site data, etc.) — ignore.
  }
}

export interface HardwareDisplay {
  /** Whether this tool has any hardware data at all for the given hardware record. */
  known: boolean
  /** Headline requirement string, e.g. "16 GB unified memory" or "8 GB VRAM". */
  headline: string | null
  /** Secondary detail line, e.g. "or 12 GB system RAM (CPU-only)". */
  detail: string | null
  /** True when the tool is known to run CPU-only with no GPU/VRAM need. */
  cpuFriendly: boolean
}

/**
 * Computes what to show for a tool's hardware requirement given the viewer's
 * selected machine type. `hardware` is null for the ~129 tools not yet
 * researched — callers must handle `known: false` (e.g. render "Not yet
 * researched" rather than a fabricated number).
 *
 * Apple Silicon uses unified memory, so a VRAM requirement is converted to an
 * approximate unified-memory floor: unifiedMin = max(ramGb, ceil(vramGb / 0.7))
 * — the 0.7 accounts for macOS + other apps reserving ~30% of unified memory,
 * per the plan's HardwareBlock spec.
 */
export function computeHardwareDisplay(
  hardware: ToolRecordHardware | null,
  machine: MachineType
): HardwareDisplay {
  if (!hardware) {
    return { known: false, headline: null, detail: null, cpuFriendly: false }
  }

  const { ramGb, vramGb, cpuOnly } = hardware
  const cpuFriendly = cpuOnly === true

  if (machine === 'apple') {
    const vramFloor = vramGb != null ? Math.ceil(vramGb / 0.7) : 0
    const unifiedMin = Math.max(ramGb ?? 0, vramFloor)
    if (unifiedMin <= 0) {
      return { known: false, headline: null, detail: null, cpuFriendly }
    }
    return {
      known: true,
      headline: `${unifiedMin} GB unified memory`,
      detail: cpuFriendly ? 'Runs CPU-only if needed (slower)' : null,
      cpuFriendly,
    }
  }

  if (machine === 'cpu') {
    if (!cpuFriendly) {
      return {
        known: true,
        headline: 'GPU recommended',
        detail: ramGb != null ? `${ramGb} GB RAM minimum — CPU-only will be slow` : 'CPU-only will be slow for this tool',
        cpuFriendly: false,
      }
    }
    return {
      known: ramGb != null,
      headline: ramGb != null ? `${ramGb} GB RAM` : null,
      detail: 'CPU-only supported',
      cpuFriendly: true,
    }
  }

  // Discrete GPU (default).
  if (vramGb != null) {
    return {
      known: true,
      headline: `${vramGb} GB VRAM`,
      detail: ramGb != null ? `+ ${ramGb} GB system RAM` : null,
      cpuFriendly,
    }
  }
  if (ramGb != null) {
    return {
      known: true,
      headline: `${ramGb} GB RAM`,
      detail: cpuFriendly ? 'No dedicated GPU required' : null,
      cpuFriendly,
    }
  }
  return { known: false, headline: null, detail: null, cpuFriendly }
}

/** Numeric sort key for the hardware column: lower is "runs on less". Nulls sort last. */
export function hardwareSortValue(hardware: ToolRecordHardware | null, machine: MachineType): number | null {
  const display = computeHardwareDisplay(hardware, machine)
  if (!hardware) return null
  if (machine === 'apple') {
    const vramFloor = hardware.vramGb != null ? Math.ceil(hardware.vramGb / 0.7) : 0
    const unifiedMin = Math.max(hardware.ramGb ?? 0, vramFloor)
    return unifiedMin > 0 ? unifiedMin : null
  }
  if (machine === 'cpu') {
    return hardware.ramGb ?? null
  }
  return hardware.vramGb ?? hardware.ramGb ?? (display.known ? 0 : null)
}
