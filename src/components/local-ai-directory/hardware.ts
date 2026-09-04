// Local AI App Directory — hardware requirement math + machine-type persistence.
// Ported from the validated vanilla-JS prototype's logic (not its markup), per
// Phase 3 of /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md.

import type { MachineType } from './types'
import type { EngineKey, ToolRecordHardware } from '@/lib/power-local-llm/apps/types'

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
 * What a tool demands when it carries no measured `hardware` record.
 *
 * A tool's memory cost is not a property of the tool — it is a property of
 * whatever holds the model weights. So the answer is derivable from `engine`
 * without inventing a per-tool number:
 *   external -> a client only; the engine it connects to pays the cost
 *   library  -> an SDK; the model the developer loads pays the cost
 *   builtin  -> the tool itself loads weights, so a real floor exists, set by
 *               model size (~8 GB system RAM for the common 7-8B 4-bit case)
 */
function derivedFromEngine(engine: EngineKey | 'TODO' | undefined): HardwareDisplay | null {
  switch (engine) {
    case 'external':
      return {
        known: true,
        headline: 'Set by your engine',
        detail: 'This is a client — Ollama, LM Studio or your server holds the model',
        cpuFriendly: true,
      }
    case 'library':
      return {
        known: true,
        headline: 'Set by the model you load',
        detail: 'The library itself is lightweight',
        cpuFriendly: true,
      }
    case 'builtin':
    case 'both':
      return {
        known: true,
        headline: '≈8 GB RAM for a 7B model',
        detail: 'Loads models itself — scales with model size and quantisation',
        cpuFriendly: true,
      }
    default:
      return null
  }
}

/**
 * Computes what to show for a tool's hardware requirement given the viewer's
 * selected machine type. When a tool has no measured `hardware` record, falls
 * back to what its `engine` implies (see derivedFromEngine) rather than
 * rendering a blank row or a fabricated number.
 *
 * Apple Silicon uses unified memory, so a VRAM requirement is converted to an
 * approximate unified-memory floor: unifiedMin = max(ramGb, ceil(vramGb / 0.7))
 * — the 0.7 accounts for macOS + other apps reserving ~30% of unified memory,
 * per the plan's HardwareBlock spec.
 */
export function computeHardwareDisplay(
  hardware: ToolRecordHardware | null,
  machine: MachineType,
  engine?: EngineKey | 'TODO'
): HardwareDisplay {
  if (!hardware) {
    return derivedFromEngine(engine) ?? { known: false, headline: null, detail: null, cpuFriendly: false }
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
export function hardwareSortValue(
  hardware: ToolRecordHardware | null,
  machine: MachineType,
  engine?: EngineKey | 'TODO'
): number | null {
  const display = computeHardwareDisplay(hardware, machine, engine)
  if (!hardware) {
    // Clients and libraries add no memory cost of their own; bundled engines
    // carry the ~8 GB floor of the model they load.
    if (engine === 'external' || engine === 'library') return 0
    if (engine === 'builtin' || engine === 'both') return 8
    return null
  }
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
