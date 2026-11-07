// Ask Hans Power Mode — deterministic grounding. Everything here is computed from the repo's own data
// (src/lib/vram.ts, STACK_RECIPES) BEFORE the AI writes the report, and handed over as facts. The AI
// may explain and arrange them but must not contradict or extend them with invented numbers.
// Rule-of-thumb estimates, not measurements: the prompt tells the AI to say so.

import { CONTEXT_OVERHEAD, MODEL_SIZES, QUANT_BITS, estimateVram, macUsableGb } from '@/lib/vram'
import { STACK_RECIPES } from '@/lib/power-local-llm/stacks'
import type { HardwareAnswers, MobileAnswers, SolutionAnswers } from './types'

export type Fit = 'comfortable' | 'at-the-limit' | 'partial-offload' | 'no'

export interface MemoryBudget {
  /** What the model weights compete for. */
  kind: 'unified' | 'vram' | 'ram' | 'unknown'
  /** GB available for a model + context, after reserving memory for the OS. null = unknown. */
  budgetGb: number | null
  /** GB of system RAM a GPU setup could spill into (slow). */
  offloadGb: number
  assumptions: string[]
}

/** Flat reserve for Windows/Linux system RAM when the model runs from RAM. Heuristic, stated as such in the report. */
const PC_OS_RESERVE_GB = 6
/** A phone keeps most of its RAM for the OS and other apps; roughly half is usable for a model. Heuristic. */
const MOBILE_USABLE_SHARE = 0.5
/** Short context on a phone (long contexts cost memory the phone does not have). */
const MOBILE_CONTEXT = '2K'

/** Several spend classes may be ticked: the highest known one drives the savings estimate. */
function highestSpend(picked: readonly string[]): string {
  const order = ['m-4', 'm-3', 'm-2', 'm-1', 'm-none']
  return order.find((m) => picked.includes(m)) ?? picked[0] ?? ''
}

export function memoryBudget(hw: HardwareAnswers): MemoryBudget {
  const assumptions: string[] = []
  if (hw.device === 'none') return { kind: 'unknown', budgetGb: null, offloadGb: 0, assumptions: ['No machine yet: sizes below describe what each hardware class could run.'] }
  if (hw.gpu === 'apple' || hw.device === 'mac') {
    if (hw.ramGb === null) return { kind: 'unknown', budgetGb: null, offloadGb: 0, assumptions: ['Unified memory unknown.'] }
    assumptions.push('Apple Silicon: a flat 8 GB is reserved for macOS (PromptQuorum rule).')
    return { kind: 'unified', budgetGb: macUsableGb(hw.ramGb), offloadGb: 0, assumptions }
  }
  if ((hw.gpu === 'nvidia' || hw.gpu === 'amd') && hw.vramGb !== null && hw.vramGb > 0) {
    const offload = hw.ramGb === null ? 0 : Math.max(hw.ramGb - PC_OS_RESERVE_GB, 0)
    assumptions.push('Dedicated GPU: the model should fit in VRAM; spilling into system RAM works but is much slower.')
    return { kind: 'vram', budgetGb: hw.vramGb, offloadGb: offload, assumptions }
  }
  if (hw.ramGb === null) return { kind: 'unknown', budgetGb: null, offloadGb: 0, assumptions: ['System RAM unknown.'] }
  assumptions.push(`No dedicated GPU memory: models run from system RAM (about ${PC_OS_RESERVE_GB} GB kept for the OS), which is slower than a GPU.`)
  return { kind: 'ram', budgetGb: Math.max(hw.ramGb - PC_OS_RESERVE_GB, 0), offloadGb: 0, assumptions }
}

const SIZES = ['4B', '8B', '13B', '24B', '32B', '70B'] as const
const QUANTS = ['Q4', 'Q8'] as const
const CONTEXT = '8K'

function classify(neededGb: number, mem: MemoryBudget): Fit {
  if (mem.budgetGb === null) return 'no'
  if (neededGb <= mem.budgetGb * 0.85) return 'comfortable'
  if (neededGb <= mem.budgetGb) return 'at-the-limit'
  if (mem.kind === 'vram' && neededGb <= mem.budgetGb + mem.offloadGb) return 'partial-offload'
  return 'no'
}

export interface ModelFitRow {
  size: string
  quant: string
  needsGb: number
  fit: Fit
}

/** Rule-of-thumb fit of common model sizes (8K context, single user) against the memory budget. */
export function modelFitTable(mem: MemoryBudget): ModelFitRow[] {
  const rows: ModelFitRow[] = []
  for (const size of SIZES) {
    for (const q of QUANTS) {
      const est = estimateVram({ modelBillions: MODEL_SIZES[size], quantBits: QUANT_BITS[q], contextGb: CONTEXT_OVERHEAD[CONTEXT], batchGb: 0 })
      rows.push({ size, quant: q, needsGb: est.recommendedGb, fit: classify(est.recommendedGb, mem) })
    }
  }
  return rows
}

export interface DeviceUpgradeFacts {
  canAddGpu: 'yes' | 'limited' | 'no' | 'n/a'
  canAddRam: 'yes' | 'sometimes' | 'no' | 'n/a'
  note: string
}

/** What the visitor can still change on the machine they have. General hardware knowledge, not product claims. */
export function upgradeFacts(hw: HardwareAnswers): DeviceUpgradeFacts {
  switch (hw.device) {
    case 'desktop':
    case 'workstation':
      return { canAddGpu: 'yes', canAddRam: 'yes', note: 'A tower can usually take a graphics card (check power supply wattage, case clearance and a free PCIe slot) and more RAM.' }
    case 'laptop':
      return { canAddGpu: 'no', canAddRam: 'sometimes', note: 'The GPU in a laptop cannot be swapped. RAM is upgradeable only on some models (many are soldered). An external GPU depends on the laptop having a suitable port.' }
    case 'minipc':
      return { canAddGpu: 'limited', canAddRam: 'sometimes', note: 'Most mini PCs have no PCIe slot; an external GPU needs a compatible port (for example OCuLink or Thunderbolt). RAM is often upgradeable, sometimes soldered.' }
    case 'mac':
      return { canAddGpu: 'no', canAddRam: 'no', note: 'On Apple Silicon, memory is part of the chip and cannot be upgraded later; the configuration bought is the limit.' }
    default:
      return { canAddGpu: 'n/a', canAddRam: 'n/a', note: 'No machine yet.' }
  }
}

const GOAL_TAGS: Record<string, string[]> = {
  chat: ['chat'],
  code: ['code'],
  docs: ['docs'],
  image: ['image'],
  video: ['image'],
  audio: ['voice'],
  voice: ['voice'],
  music: ['voice'],
  agents: ['agent'],
  translate: ['chat'],
  coding: ['code'],
  // Audit My AI Setup activities
  'u-write': ['chat'],
  'u-code': ['code'],
  'u-image': ['image'],
  'u-video': ['image'],
  'u-audio': ['voice'],
  'u-office': ['docs'],
  'u-data': ['docs'],
  'u-pkm': ['docs'],
  'u-auto': ['agent'],
}

function wantedGoals(a: SolutionAnswers): string[] {
  return [...(a.choices.goals ?? []), ...(a.choices.goal ?? []), ...(a.choices.auditUses ?? [])]
}

/** Directory stack recipes whose published hardware floor the machine meets, for the visitor's goals. */
export function stackCandidates(a: SolutionAnswers, mem: MemoryBudget) {
  const tags = new Set(wantedGoals(a).flatMap((g) => GOAL_TAGS[g] ?? []))
  const ram = a.hardware?.ramGb ?? null
  const vram = a.hardware?.vramGb ?? null
  const os = a.hardware?.os
  const platformOk = (p?: readonly string[]) => !p || !os || os === 'unknown' || p.includes(os === 'win' ? 'win' : os)
  return STACK_RECIPES.filter((r) => r.id !== 'mobile' && (tags.size === 0 || r.tags.some((t) => tags.has(t)) || tags.has(r.goal.toLowerCase())))
    .filter((r) => platformOk(r.platforms))
    .map((r) => {
      const needRam = r.floor.ramGb
      const needVram = r.floor.vramGb
      const effectiveMem = Math.max(mem.budgetGb ?? 0, vram ?? 0)
      const ramOk = needRam === null || ram === null || (a.hardware?.gpu === 'apple' ? (mem.budgetGb ?? 0) + 8 >= needRam : ram >= needRam)
      const vramOk = needVram === null || r.floor.cpuOnly || vram === null || effectiveMem >= needVram
      const status = ram === null && vram === null ? 'unknown' : ramOk && vramOk ? 'meets-floor' : 'below-floor'
      return { id: r.id, goal: r.goal, stack: r.stack, hardwareFloor: r.hardwareFloorText, appSlugs: r.appSlugs, status }
    })
}

export function mobileFacts(m: MobileAnswers) {
  const usable = m.ramGb === null ? null : Math.round(m.ramGb * MOBILE_USABLE_SHARE * 10) / 10
  const rows = (['1B', '3B', '4B', '7B', '8B'] as const).map((size) => {
    const est = estimateVram({ modelBillions: MODEL_SIZES[size], quantBits: QUANT_BITS.Q4, contextGb: CONTEXT_OVERHEAD[MOBILE_CONTEXT], batchGb: 0 })
    const fit: Fit = usable === null ? 'no' : est.recommendedGb <= usable * 0.85 ? 'comfortable' : est.recommendedGb <= usable ? 'at-the-limit' : 'no'
    return { size, quant: 'Q4', needsGb: est.recommendedGb, fit }
  })
  return {
    platform: m.platform,
    model: m.model || null,
    ramGb: m.ramGb,
    freeStorageGb: m.storageGb,
    usableForModelGb: usable,
    context: MOBILE_CONTEXT,
    assumption: `A phone keeps most RAM for the OS and other apps; about ${MOBILE_USABLE_SHARE * 100}% is assumed usable for a model (heuristic). Model files also need free storage of about their size.`,
    modelFit: rows,
  }
}

const DIFFUSION_GOALS = ['image', 'video', 'voice', 'music', 'audio']

/**
 * Image/video/audio generation is NOT covered by the language-model fit table. The AI must not present
 * modelFit as a verdict for these goals; verdicts there are judgment, and the report must say so.
 */
export function generationFacts(a: SolutionAnswers) {
  const goals = wantedGoals(a).filter((g) => DIFFUSION_GOALS.includes(g))
  if (!goals.length || !a.hardware) return null
  const storage = a.hardware.storageGb
  return {
    goals,
    modelFitApplies: false,
    dataQuality:
      'modelFit is computed for language models only. PromptQuorum has NO measured memory, speed or size data for image, video or audio models on this machine. Any verdict for these goals is a judgment from the directory hardware fields, not a measurement. Say this in a "Data quality" banner at the top of the report and in the verdict labels ("judgment, not measured").',
    memoryKind: a.hardware.gpu === 'apple' || a.hardware.device === 'mac' ? 'Apple Silicon unified memory (shared by CPU and GPU, not upgradeable, no separate VRAM). A VRAM figure in the directory is written for discrete GPUs and is unverified on Apple Silicon unless a tool says otherwise.' : 'See memoryBudget.',
    storageGuidance: {
      freeStorageGb: storage,
      rule: 'Rule-of-thumb order of magnitude (estimate, not measured): one image or video model is roughly 2-15 GB on disk, a visitor usually wants several, plus working space for outputs (video clips add up quickly). About 30 GB free is a practical minimum for a first image or video setup.',
      ifUnknown: storage === null ? 'Free storage was not given: state the 30 GB practical minimum as the default and tell the visitor to check their free space before downloading models.' : null,
      ifTight: storage !== null && storage < 30 ? 'Free storage is below the 30 GB practical minimum: warn plainly and suggest an external drive for models.' : null,
    },
    stitchingNote: goals.includes('video') ? 'A video longer than a few seconds is built from many short clips. Stitched clips almost always show style and character drift unless consistency techniques are used (same seed, same style and character description, reference images, IP-Adapter-style conditioning). Say this.' : null,
    languageNote: 'Prompt fields accept any language, but most image/video models follow English prompts best. Say so when the visitor mentions a non-English language, and say plainly when the directory has no data on the app\'s interface language.',
  }
}

const CLOUD_SERVICES: Record<string, string> = { 's-chatgpt': 'ChatGPT', 's-claude': 'Claude', 's-gemini': 'Gemini', 's-othercloud': 'other cloud AI services' }
const SPEND_CLASSES: Record<string, string> = {
  'm-none': 'nothing (free plans only)',
  'm-1': 'up to 20 per month (visitor\'s own currency)',
  'm-2': '20 to 50 per month (visitor\'s own currency)',
  'm-3': '50 to 100 per month (visitor\'s own currency)',
  'm-4': 'more than 100 per month (visitor\'s own currency)',
  'm-unknown': 'unknown',
}
/** Activities for which the PromptQuorum data holds no hardware floor, so the report must say so instead of guessing. */
const NO_FLOOR_DATA = new Set(['u-video', 'u-data', 'u-other'])

/** Audit My AI Setup: what the visitor's own answers imply, computed before the AI writes. Heuristics, labelled as such. */
export function auditFacts(a: SolutionAnswers) {
  const setup = a.choices.auditSetup ?? []
  const uses = a.choices.auditUses ?? []
  const cloud = setup.filter((s) => CLOUD_SERVICES[s]).map((s) => CLOUD_SERVICES[s])
  const mem = a.hardware ? memoryBudget(a.hardware) : null
  const fit = mem ? modelFitTable(mem) : []
  const biggest = (want: Fit) => [...fit].reverse().find((r) => r.fit === want && r.quant === 'Q4')
  const stacks = a.hardware && mem ? stackCandidates(a, mem) : []
  const stackTags = (use: string) => new Set(GOAL_TAGS[use] ?? [])
  return {
    note: 'Heuristics from the visitor\'s own answers. Estimates, not measurements.',
    cloudServices: cloud,
    cloudServiceCount: cloud.length,
    alreadyUsesLocalApps: setup.includes('s-local'),
    usesNoAiYet: setup.includes('s-none'),
    monthlySpendClass: cloud.length ? (SPEND_CLASSES[highestSpend(a.choices.auditSpend ?? [])] ?? 'not asked') : 'not applicable (no cloud service chosen)',
    hardwareProcessor: a.hardware?.cpu ?? null,
    largestModelThatRunsComfortably: biggest('comfortable') ? `${biggest('comfortable')!.size} ${biggest('comfortable')!.quant}` : null,
    largestModelAtTheLimit: biggest('at-the-limit') ? `${biggest('at-the-limit')!.size} ${biggest('at-the-limit')!.quant}` : null,
    hardwareLikelyUnderused: !!mem && mem.budgetGb !== null && mem.budgetGb >= 10 && !setup.includes('s-local'),
    activities: uses.map((u) => {
      const tags = stackTags(u)
      return {
        activity: u,
        directoryStacks: stacks.filter((s) => s.id !== 'mobile' && STACK_RECIPES.find((r) => r.id === s.id)?.tags.some((t) => tags.has(t))).map((s) => ({ id: s.id, stack: s.stack, hardwareFloor: s.hardwareFloor, status: s.status })),
        dataGap: NO_FLOOR_DATA.has(u) ? 'PromptQuorum holds no hardware floor for this activity: use the hardware data each app lists and say where it is missing.' : null,
      }
    }),
  }
}

/** The facts block handed to the AI. Plain JSON text. */
export function buildFacts(a: SolutionAnswers): string {
  const facts: Record<string, unknown> = {
    note: 'These numbers are rule-of-thumb estimates computed by PromptQuorum (8K context for computers, 2K for phones, one user), not measurements. Use them as given; do not invent other sizes, speeds or benchmarks.',
  }
  if (a.hardware) {
    const mem = memoryBudget(a.hardware)
    facts.hardware = a.hardware
    facts.memoryBudget = mem
    facts.upgradePath = upgradeFacts(a.hardware)
    facts.modelFit = modelFitTable(mem)
    facts.stackCandidates = stackCandidates(a, mem)
    const gen = generationFacts(a)
    if (gen) facts.generation = gen
  }
  if (a.mobile) facts.mobile = mobileFacts(a.mobile)
  if (a.choices.auditSetup) facts.audit = auditFacts(a)
  return JSON.stringify(facts)
}
