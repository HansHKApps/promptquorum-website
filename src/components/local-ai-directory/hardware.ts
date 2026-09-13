// Local AI App Directory — hardware requirement math + machine-type persistence.
// Ported from the validated vanilla-JS prototype's logic (not its markup), per
// Phase 3 of /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md.

import type { HardwareProfile, MachineType } from './types'
import type { EngineKey, OSKey, ToolRecordHardware } from '@/lib/power-local-llm/apps/types'
import type { InterfaceKey } from '@/lib/power-local-llm/apps/categories'
import type { Language } from '@/lib/blog/blogContent'
import { t } from './directory-i18n'

/**
 * The two facts needed to tell whether a tool is available on the viewer's
 * phone at all — a more fundamental question than "does it have enough RAM",
 * and one RAM math alone can't answer (a Linux-only GPU server has no iPhone
 * build no matter how much RAM the phone has). Optional on every function
 * below: omit it and mobile machines fall back to pure RAM math, same as
 * before this existed — only pass it once a caller actually has app.interfaces
 * /app.platforms in scope, which every current call site does.
 */
export interface MobilePlatformContext {
  interfaces: InterfaceKey[]
  platforms: OSKey[] | null
}

function hasMobilePlatformSupport(ctx: MobilePlatformContext, machine: 'ios' | 'android'): boolean {
  if (!ctx.interfaces.includes('mobile')) return false
  // `platforms: null` means "not yet researched" — interfaces already
  // confirmed a mobile build exists, so don't penalize a tool for a
  // still-open platforms field by claiming the wrong OS specifically.
  if (!ctx.platforms) return true
  return ctx.platforms.includes(machine)
}

const STORAGE_KEY = 'pq-directory-machine'

// Separate key from the coarse machine-type choice above — this one holds
// the viewer's actual numbers and is written ONLY on an explicit "Save my
// setup" click (see HardwareProfileWidget.tsx). Never written from a passive
// signal (navigator.deviceMemory, page load, etc.) — that's a TTDSG/privacy
// requirement, not a style choice.
const PROFILE_STORAGE_KEY = 'pq-hw-profile'

/**
 * Detects a sensible default machine type from navigator.platform/userAgent.
 * iPhone/iPad -> ios (a phone/tablet, not a laptop — see MachineType's doc
 * comment); Mac -> apple (desktop unified memory); Android -> android;
 * everything else -> dgpu. Matches the prototype's Mac/iPhone/iPad-> apple
 * logic except it now separates the phone/tablet case out of "apple", which
 * previously lumped a Mac and an iPhone into the same desktop-oriented
 * compatibility math. Best-effort default, not a hardware probe — only ever
 * used until the viewer picks (and we persist) an explicit choice.
 */
export function detectDefaultMachine(): MachineType {
  if (typeof navigator === 'undefined') return 'dgpu'
  const platform = navigator.platform || ''
  const ua = navigator.userAgent || ''
  if (/iPhone|iPad/i.test(platform) || /iPhone|iPad/i.test(ua)) return 'ios'
  if (/Mac/i.test(platform)) return 'apple'
  if (/Android/i.test(ua)) return 'android'
  return 'dgpu'
}

const MACHINE_TYPES: readonly MachineType[] = ['dgpu', 'apple', 'cpu', 'ios', 'android']

/** Reads the persisted machine choice, if any. Never throws. */
export function readStoredMachine(): MachineType | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return (MACHINE_TYPES as string[]).includes(raw ?? '') ? (raw as MachineType) : null
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

/** Reads the persisted precise hardware profile, if any. Never throws. */
export function readStoredProfile(): HardwareProfile | null {
  try {
    const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    const p = parsed as Record<string, unknown>
    if (p.machine === 'dgpu' && typeof p.ramGb === 'number' && typeof p.vramGb === 'number') {
      return { machine: 'dgpu', ramGb: p.ramGb, vramGb: p.vramGb }
    }
    if (p.machine === 'cpu' && typeof p.ramGb === 'number') {
      return { machine: 'cpu', ramGb: p.ramGb }
    }
    if (p.machine === 'apple' && typeof p.unifiedGb === 'number') {
      return { machine: 'apple', unifiedGb: p.unifiedGb }
    }
    if (p.machine === 'ios' && typeof p.ramGb === 'number') {
      return { machine: 'ios', ramGb: p.ramGb }
    }
    if (p.machine === 'android' && typeof p.ramGb === 'number') {
      return { machine: 'android', ramGb: p.ramGb }
    }
    return null
  } catch {
    return null
  }
}

/**
 * Persists the viewer's precise hardware profile. Never throws — this is a
 * convenience only. Callers MUST only invoke this from an explicit user
 * action (a "Save my setup" click) — never automatically, per the TTDSG/
 * privacy discipline documented on HardwareProfileWidget.tsx.
 */
export function writeStoredProfile(profile: HardwareProfile): void {
  try {
    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
  } catch {
    // localStorage unavailable (private window, blocked site data, etc.) — ignore.
  }
}

/** Clears the persisted hardware profile ("Forget my hardware"). Never throws. */
export function clearStoredProfile(): void {
  try {
    window.localStorage.removeItem(PROFILE_STORAGE_KEY)
  } catch {
    // localStorage unavailable — ignore.
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
function derivedFromEngine(engine: EngineKey | 'TODO' | undefined, lang: Language): HardwareDisplay | null {
  switch (engine) {
    case 'external':
      return {
        known: true,
        headline: t('hwSetByEngine', lang),
        detail: t('hwSetByEngineDetail', lang),
        cpuFriendly: true,
      }
    case 'library':
      return {
        known: true,
        headline: t('hwSetByModel', lang),
        detail: t('hwSetByModelDetail', lang),
        cpuFriendly: true,
      }
    case 'builtin':
    case 'both':
      return {
        known: true,
        headline: t('hwApproxRamHeadline', lang),
        detail: t('hwApproxRamDetail', lang),
        cpuFriendly: true,
      }
    default:
      return null
  }
}

/**
 * Apple Silicon uses unified memory, so a VRAM requirement is converted to an
 * approximate unified-memory floor: unifiedMin = max(ramGb, ceil(vramGb / 0.7))
 * — the 0.7 accounts for macOS + other apps reserving ~30% of unified memory,
 * per the plan's HardwareBlock spec. Shared by computeHardwareDisplay,
 * hardwareSortValue and computeCompatibilityVerdict so the conversion math
 * only lives in one place.
 */
export function unifiedMemoryFloor(ramGb: number | null | undefined, vramGb: number | null | undefined): number {
  const vramFloor = vramGb != null ? Math.ceil(vramGb / 0.7) : 0
  return Math.max(ramGb ?? 0, vramFloor)
}

/**
 * Computes what to show for a tool's hardware requirement given the viewer's
 * selected machine type. When a tool has no measured `hardware` record, falls
 * back to what its `engine` implies (see derivedFromEngine) rather than
 * rendering a blank row or a fabricated number.
 */
export function computeHardwareDisplay(
  hardware: ToolRecordHardware | null,
  machine: MachineType,
  lang: Language,
  engine?: EngineKey | 'TODO',
  mobile?: MobilePlatformContext
): HardwareDisplay {
  if ((machine === 'ios' || machine === 'android') && mobile && !hasMobilePlatformSupport(mobile, machine)) {
    return {
      known: true,
      headline: t(machine === 'ios' ? 'hwNoIosApp' : 'hwNoAndroidApp', lang),
      detail: null,
      cpuFriendly: false,
    }
  }

  if (!hardware) {
    return derivedFromEngine(engine, lang) ?? { known: false, headline: null, detail: null, cpuFriendly: false }
  }

  if (hardware.variesByModel) {
    return {
      known: true,
      headline: t('hwVariesByModel', lang),
      detail: t('hwVariesByModelDetail', lang),
      cpuFriendly: hardware.cpuOnly === true,
    }
  }

  // A `hardware` object with no numbers in it at all carries the same meaning
  // as `hardware === null` (see that field's doc comment: "not yet researched
  // — hardware floor depends on the model loaded, not a fixed tool attribute")
  // — some records were entered as the former instead of the latter. Route
  // both spellings through the same derivedFromEngine fallback rather than
  // falling through to the number-shaped branches below and rendering a blank
  // "known: false" for what should read as "set by your engine"/"set by the
  // model you load" (client/library tools especially — this previously left
  // dozens of them with no hardware text at all under the apple/dgpu machine
  // types). Only external/library engines get this fallback: builtin/both
  // tools with genuinely no number and no `variesByModel` flag are a real,
  // still-open research gap, not something safe to describe generically
  // (a compact TTS or upscaler model has nothing in common with "~8GB for a
  // 7B LLM").
  if (hardware.ramGb == null && hardware.vramGb == null && (engine === 'external' || engine === 'library')) {
    const derived = derivedFromEngine(engine, lang)
    if (derived) return derived
  }

  const { ramGb, vramGb, cpuOnly } = hardware
  const cpuFriendly = cpuOnly === true

  if (machine === 'apple') {
    const unifiedMin = unifiedMemoryFloor(ramGb, vramGb)
    if (unifiedMin <= 0) {
      return { known: false, headline: null, detail: null, cpuFriendly }
    }
    return {
      known: true,
      headline: t('hwUnifiedMemoryTemplate', lang, { n: unifiedMin }),
      detail: cpuFriendly ? t('hwRunsCpuOnlySlower', lang) : null,
      cpuFriendly,
    }
  }

  if (machine === 'cpu') {
    if (!cpuFriendly) {
      return {
        known: true,
        headline: t('hwGpuRecommended', lang),
        detail: ramGb != null ? t('hwRamMinimumCpuSlowTemplate', lang, { n: ramGb }) : t('hwCpuOnlySlowGeneric', lang),
        cpuFriendly: false,
      }
    }
    return {
      known: ramGb != null,
      headline: ramGb != null ? t('hwRamTemplate', lang, { n: ramGb }) : null,
      detail: t('hwCpuOnlySupported', lang),
      cpuFriendly: true,
    }
  }

  // Phone/tablet: same single-RAM-number shape as 'cpu' above, but never
  // suggests "add a GPU" — that's not a thing you can do to a phone.
  if (machine === 'ios' || machine === 'android') {
    return {
      known: ramGb != null,
      headline: ramGb != null ? t('hwRamTemplate', lang, { n: ramGb }) : null,
      detail: null,
      cpuFriendly: true,
    }
  }

  // Discrete GPU (default).
  if (vramGb != null) {
    return {
      known: true,
      headline: t('hwVramTemplate', lang, { n: vramGb }),
      detail: ramGb != null ? t('hwPlusSystemRamTemplate', lang, { n: ramGb }) : null,
      cpuFriendly,
    }
  }
  if (ramGb != null) {
    return {
      known: true,
      headline: t('hwRamTemplate', lang, { n: ramGb }),
      detail: cpuFriendly ? t('hwNoDedicatedGpu', lang) : null,
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
  // `display.known` (used below) is language-independent, so the display
  // text itself is never surfaced here — any lang works as the throwaway arg.
  const display = computeHardwareDisplay(hardware, machine, 'en', engine)
  if (!hardware) {
    // Clients and libraries add no memory cost of their own; bundled engines
    // carry the ~8 GB floor of the model they load.
    if (engine === 'external' || engine === 'library') return 0
    if (engine === 'builtin' || engine === 'both') return 8
    return null
  }
  if (machine === 'apple') {
    const unifiedMin = unifiedMemoryFloor(hardware.ramGb, hardware.vramGb)
    return unifiedMin > 0 ? unifiedMin : null
  }
  if (machine === 'cpu' || machine === 'ios' || machine === 'android') {
    return hardware.ramGb ?? null
  }
  return hardware.vramGb ?? hardware.ramGb ?? (display.known ? 0 : null)
}

/**
 * Whether the viewer's saved profile suggests the tool will run comfortably,
 * marginally, or not at all on their machine.
 *
 * `unknown` covers two distinct upstream causes — no profile saved yet, or
 * the tool has no measured `hardware` record and no derivable-from-engine
 * floor (see derivedFromEngine) — callers that need to tell those apart for
 * display purposes (CompatibilityBadge does: "Set your hardware" vs. "Not
 * yet reviewed for hardware fit") should check `profile == null` themselves
 * alongside this return value, rather than the function inventing a third
 * synthetic verdict string here.
 *
 * A profile saved for a different `machine` than the one currently selected
 * (e.g. saved while on "Graphics Card", viewer since switched to "Apple
 * Silicon") is treated as not applicable — its numbers don't answer the
 * question for the new machine type — so this also resolves to `unknown`.
 */
export type CompatibilityVerdict = 'comfortable' | 'marginal' | 'wont-run' | 'unknown'

/**
 * Headroom multiplier for a "comfortable" verdict: the viewer's number must
 * beat the requirement by at least this much, not just meet it. Named so the
 * threshold is easy to retune later without hunting for a magic number.
 */
const COMFORTABLE_HEADROOM_MULTIPLIER = 1.3

function verdictFromRatio(have: number, need: number): 'comfortable' | 'marginal' | 'wont-run' {
  if (need <= 0) return 'comfortable'
  if (have >= need * COMFORTABLE_HEADROOM_MULTIPLIER) return 'comfortable'
  if (have >= need) return 'marginal'
  return 'wont-run'
}

export function computeCompatibilityVerdict(
  hardware: ToolRecordHardware | null,
  profile: HardwareProfile | null,
  machine: MachineType,
  engine?: EngineKey | 'TODO',
  mobile?: MobilePlatformContext
): CompatibilityVerdict {
  if (!profile || profile.machine !== machine) return 'unknown'

  // A tool with no mobile build at all won't run on a phone no matter how
  // much RAM the phone has — check this before any RAM math, since it's the
  // more fundamental (and more common) reason a desktop-only tool "won't
  // run" on an iPhone/Android machine selection.
  if ((machine === 'ios' || machine === 'android') && mobile && !hasMobilePlatformSupport(mobile, machine)) {
    return 'wont-run'
  }

  // Clients and libraries add no local inference cost of their own — the
  // engine/server they talk to pays it, same treatment as cpuFriendly above.
  if (engine === 'external' || engine === 'library') return 'comfortable'

  // No measured record: fall back to the same ~8 GB RAM / CPU-friendly floor
  // derivedFromEngine uses for builtin/both engines, otherwise there is
  // nothing to compare against.
  const effective: ToolRecordHardware | null =
    hardware ?? (engine === 'builtin' || engine === 'both' ? { ramGb: 8, vramGb: null, cpuOnly: true } : null)
  if (!effective) return 'unknown'

  const { ramGb, vramGb, cpuOnly } = effective
  const cpuFallback = cpuOnly === true

  // Switching on `profile.machine` (not the `machine` param) lets TypeScript
  // narrow `profile` to the matching shape — the two are already known equal
  // from the guard above.
  if (profile.machine === 'apple') {
    const need = unifiedMemoryFloor(ramGb, vramGb)
    if (need <= 0) return 'unknown'
    return verdictFromRatio(profile.unifiedGb, need)
  }

  if (profile.machine === 'cpu' || profile.machine === 'ios' || profile.machine === 'android') {
    if (ramGb == null) return cpuFallback ? 'marginal' : 'unknown'
    const verdict = verdictFromRatio(profile.ramGb, ramGb)
    return cpuFallback && verdict === 'wont-run' ? 'marginal' : verdict
  }

  // Discrete GPU (default). A cpuOnly-capable tool can fall back to CPU, so
  // it never fully "won't run" even when VRAM is short — floor it at marginal.
  if (vramGb != null) {
    const verdict = verdictFromRatio(profile.vramGb, vramGb)
    return cpuFallback && verdict === 'wont-run' ? 'marginal' : verdict
  }
  if (ramGb != null) {
    const verdict = verdictFromRatio(profile.ramGb, ramGb)
    return cpuFallback && verdict === 'wont-run' ? 'marginal' : verdict
  }
  return 'unknown'
}
