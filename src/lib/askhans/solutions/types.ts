// Ask Hans Power Mode — shared types (browser + server, so keep this file free of server-only imports).

export const PROCESS_IDS = ['max', 'hardware', 'solution', 'mobile'] as const
export type ProcessId = (typeof PROCESS_IDS)[number]

export const isProcessId = (v: unknown): v is ProcessId => typeof v === 'string' && (PROCESS_IDS as readonly string[]).includes(v)

/** What the visitor has (hardware step). `none` = nothing yet / buying new (Hardware Selector only). */
export const DEVICE_KINDS = ['desktop', 'laptop', 'minipc', 'mac', 'workstation', 'none'] as const
export type DeviceKind = (typeof DEVICE_KINDS)[number]

export const OS_KINDS = ['win', 'mac', 'linux', 'unknown'] as const
export type OsKind = (typeof OS_KINDS)[number]

export const GPU_KINDS = ['nvidia', 'amd', 'apple', 'integrated', 'none', 'unknown'] as const
export type GpuKind = (typeof GPU_KINDS)[number]

export interface HardwareAnswers {
  device: DeviceKind
  os: OsKind
  gpu: GpuKind
  /** System RAM, or unified memory on Apple Silicon. null = "I don't know". */
  ramGb: number | null
  /** Dedicated GPU memory. null = not applicable or unknown. */
  vramGb: number | null
  /** Free disk space. null = unknown. */
  storageGb: number | null
}

export interface MobileAnswers {
  platform: 'ios' | 'android'
  /** Free-text phone model, optional (max 60 chars). */
  model: string
  ramGb: number | null
  storageGb: number | null
}

/** Everything the visitor entered for one run. Choices are keyed by step id; values are option ids. */
export interface SolutionAnswers {
  hardware?: HardwareAnswers
  mobile?: MobileAnswers
  choices: Record<string, string[]>
  note?: string
}

export type StepKind = 'hardware' | 'mobile' | 'single' | 'multi' | 'note'

export interface StepDef {
  /** Globally unique step id; also the key in SolutionAnswers.choices. */
  id: string
  kind: StepKind
  /** Option ids for single/multi steps (labels live in the copy dictionaries). */
  options?: readonly string[]
  /** Step is skipped unless the earlier step `step` has one of `includes` selected. */
  showIf?: { step: string; includes: readonly string[] }
  /** Hardware step only: offer "I have nothing yet". */
  allowNone?: boolean
  /** Multi step: at least one option required. Single steps are always required. */
  optional?: boolean
}

export interface ProcessDef {
  id: ProcessId
  /** lucide icon name, must exist in askhans/icons.tsx */
  icon: string
  steps: readonly StepDef[]
}

/** Request body of POST /api/ask/solution. */
export interface SolutionRequest {
  visitId: string
  lang: string
  process: ProcessId
  answers: SolutionAnswers
}
