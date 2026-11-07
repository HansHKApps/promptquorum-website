// Ask Hans Power Mode — the shape of one language's UI texts. en.ts is the source; the other eight files
// are translations with the same keys (geo-translation rules: DE Sie, FR vous, ES tú, PT você, JA です/ます,
// KO 합쇼체, AR MSA; technical terms such as GPU, VRAM, RAM, LLM stay in Latin script).
// Step ids and option ids are code-side identifiers (see src/lib/askhans/solutions/processes.ts): never translated.

import type { DeviceKind, GpuKind, OsKind, ProcessId } from '@/lib/askhans/solutions/types'

export interface PowerStepCopy {
  /** the question */
  q: string
  /** short noun used in the "Your inputs" list of the report */
  label: string
  hint?: string
}

export interface PowerCopy {
  menu: { title: string; intro: string; escHint: string; back: string }
  processes: Record<ProcessId, { name: string; tagline: string; time: string }>
  wizard: {
    back: string
    next: string
    generate: string
    step: (n: number, total: number) => string
    optional: string
    required: string
    notePlaceholder: string
    privacy: string
  }
  steps: Record<string, PowerStepCopy>
  /** option id → label (ids are shared across steps; the same id always has the same label) */
  opt: Record<string, string>
  hw: {
    help: string
    device: string
    os: string
    gpu: string
    ram: string
    ramApple: string
    vram: string
    storage: string
    unknown: string
    /** shown under the memory field when the device is a Mac (unified memory) */
    macNote: string
    gb: string
    useSaved: string
    saveLabel: string
    saveHint: string
    devices: Record<DeviceKind, string>
    oses: Record<OsKind, string>
    gpus: Record<GpuKind, string>
  }
  mobile: {
    help: string
    platform: string
    ios: string
    android: string
    model: string
    modelPlaceholder: string
    ram: string
    storage: string
  }
  run: { writing: string; tool: string; cancel: string; limit: string; retry: string }
  report: {
    title: (processName: string) => string
    copy: string
    download: string
    asMd: string
    asDocx: string
    asPdf: string
    preparing: string
    changeAnswers: string
    allProcesses: string
  }
  doc: {
    generatedBy: string
    dateLabel: string
    inputsHeading: string
    howHeading: string
    howText: string
    referencesHeading: string
    disclaimerHeading: string
    disclaimerText: string
    refDirectory: string
    refHardwareTool: string
    refAskHans: string
  }
}
