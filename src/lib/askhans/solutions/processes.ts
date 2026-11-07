// Ask Hans Power Mode — the four guided processes as plain data. Adding a process = adding an entry here,
// its labels to the copy dictionaries and its report brief to prompt.ts. The questions are deterministic
// forms (no AI involved); the AI only writes the final report.

import { isProcessId, type ProcessDef, type ProcessId, type SolutionAnswers, type StepDef } from './types'

export const MAX_NOTE_CHARS = 300

const GOALS = ['chat', 'code', 'docs', 'image', 'video', 'audio', 'agents', 'translate'] as const

export const MAX_TEXT_CHARS = 300

/** Audit My AI Setup: what the visitor uses, has, does, struggles with and wants. Option ids are shared with the copy files. */
const AUDIT_STEPS: readonly StepDef[] = [
  { id: 'auditSetup', kind: 'multi', textField: true, options: ['s-chatgpt', 's-claude', 's-gemini', 's-othercloud', 's-local', 's-embedded', 's-none'] },
  // Only asked when a paid-looking cloud service is in the setup; needed for an honest savings estimate.
  { id: 'auditSpend', kind: 'single', options: ['m-none', 'm-1', 'm-2', 'm-3', 'm-4', 'm-unknown'], showIf: { step: 'auditSetup', includes: ['s-chatgpt', 's-claude', 's-gemini', 's-othercloud'] } },
  { id: 'hardware', kind: 'hardware', askCpu: true },
  { id: 'auditUses', kind: 'multi', options: ['u-write', 'u-code', 'u-image', 'u-video', 'u-audio', 'u-office', 'u-data', 'u-pkm', 'u-auto', 'u-other'] },
  { id: 'auditProblems', kind: 'multi', textField: true, options: ['p-cost', 'p-toomany', 'p-which', 'p-privacy', 'p-slow', 'p-offline', 'p-automate', 'p-control', 'p-satisfied'] },
  { id: 'auditGoals', kind: 'multi', options: ['g-save', 'g-productive', 'g-privacy', 'g-lesscloud', 'g-power', 'g-simplify', 'g-automate', 'g-complete'] },
]

export const PROCESSES: Record<ProcessId, ProcessDef> = {
  audit: { id: 'audit', icon: 'ClipboardCheck', steps: AUDIT_STEPS },
  // Started from an audit report, never from the list: the same answers plus the recommendation the visitor picked.
  implement: { id: 'implement', icon: 'Workflow', hidden: true, steps: [...AUDIT_STEPS, { id: 'recommendation', kind: 'text' }] },
  max: {
    id: 'max',
    icon: 'Compass',
    steps: [
      { id: 'hardware', kind: 'hardware', allowNone: true },
      { id: 'goals', kind: 'multi', options: GOALS },
      { id: 'connectivity', kind: 'single', options: ['offline', 'online-ok'] },
      { id: 'price', kind: 'single', options: ['free-only', 'paid-ok'] },
      { id: 'experience', kind: 'single', options: ['beginner', 'intermediate', 'advanced'] },
      { id: 'priority', kind: 'single', options: ['speed', 'balanced', 'quality'] },
      { id: 'note', kind: 'note' },
    ],
  },
  hardware: {
    id: 'hardware',
    icon: 'Cpu',
    steps: [
      { id: 'hardware', kind: 'hardware', allowNone: true },
      { id: 'goals', kind: 'multi', options: GOALS },
      { id: 'budget', kind: 'single', options: ['b1', 'b2', 'b3', 'b4'] },
      { id: 'usage', kind: 'single', options: ['dedicated', 'shared'] },
      { id: 'parallel', kind: 'single', options: ['one', 'few', 'many'] },
      { id: 'note', kind: 'note' },
    ],
  },
  solution: {
    id: 'solution',
    icon: 'Workflow',
    steps: [
      { id: 'goal', kind: 'single', options: ['video', 'image', 'voice', 'music', 'coding', 'docs', 'chat', 'translate'] },
      { id: 'videoType', kind: 'single', options: ['text-to-video', 'image-to-video', 'video-edit', 'video-upscale'], showIf: { step: 'goal', includes: ['video'] } },
      { id: 'videoLength', kind: 'single', options: ['clips', 'minute', 'long'], showIf: { step: 'goal', includes: ['video'] } },
      { id: 'imageType', kind: 'single', options: ['text-to-image', 'edit', 'upscale', 'characters'], showIf: { step: 'goal', includes: ['image'] } },
      { id: 'imageStyle', kind: 'single', options: ['realistic', 'illustration', 'anime', 'style-any'], showIf: { step: 'goal', includes: ['image'] } },
      { id: 'imageSize', kind: 'single', options: ['res-web', 'res-print', 'res-any'], showIf: { step: 'goal', includes: ['image'] } },
      { id: 'voiceType', kind: 'single', options: ['speak', 'clone', 'transcribe', 'assistant'], showIf: { step: 'goal', includes: ['voice'] } },
      { id: 'codingType', kind: 'single', options: ['autocomplete', 'agent', 'review'], showIf: { step: 'goal', includes: ['coding'] } },
      { id: 'docsType', kind: 'single', options: ['docs-few', 'docs-many', 'docs-team'], showIf: { step: 'goal', includes: ['docs'] } },
      { id: 'hardware', kind: 'hardware' },
      { id: 'quality', kind: 'single', options: ['fast', 'balanced', 'best'] },
      { id: 'tradeoff', kind: 'single', options: ['tradeoff-accept', 'tradeoff-cloud'], showIf: { step: 'quality', includes: ['best'] } },
      { id: 'usage-rights', kind: 'single', options: ['personal', 'commercial'] },
      { id: 'note', kind: 'note' },
    ],
  },
  mobile: {
    id: 'mobile',
    icon: 'Monitor',
    steps: [
      { id: 'mobile', kind: 'mobile' },
      { id: 'mobileGoals', kind: 'multi', options: ['chat', 'voice', 'camera', 'translate', 'notes', 'image', 'transcribe'] },
      { id: 'connectivity', kind: 'single', options: ['offline', 'online-ok'] },
      { id: 'price', kind: 'single', options: ['free-only', 'paid-ok'] },
      { id: 'note', kind: 'note' },
    ],
  },
}

export const PROCESS_ORDER: readonly ProcessId[] = ['max', 'audit', 'hardware', 'solution', 'mobile']

/** The steps that apply for the answers so far (conditional steps are dropped). */
export function visibleSteps(process: ProcessId, answers: SolutionAnswers): StepDef[] {
  return PROCESSES[process].steps.filter((s) => !s.showIf || (answers.choices[s.showIf.step] ?? []).some((v) => s.showIf!.includes.includes(v)))
}

const num = (v: unknown, max: number): v is number | null => v === null || (typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= max)

/**
 * Server-side validation of an untrusted request body: only known ids, bounded numbers, short free text.
 * Returns the cleaned answers or null. Unknown keys are dropped, so nothing unexpected reaches the prompt.
 */
export function parseAnswers(process: unknown, raw: unknown): SolutionAnswers | null {
  if (!isProcessId(process) || !raw || typeof raw !== 'object') return null
  const r = raw as { hardware?: unknown; mobile?: unknown; choices?: unknown; note?: unknown; texts?: unknown }
  const def = PROCESSES[process]
  const out: SolutionAnswers = { choices: {} }

  const choices = r.choices && typeof r.choices === 'object' ? (r.choices as Record<string, unknown>) : {}
  for (const step of def.steps) {
    if (step.kind !== 'single' && step.kind !== 'multi') continue
    const v = choices[step.id]
    if (v === undefined) continue
    if (!Array.isArray(v) || v.length > 12) return null
    const ids = v.filter((x): x is string => typeof x === 'string' && !!step.options?.includes(x))
    if (ids.length !== v.length) return null
    if (step.kind === 'single' && ids.length > 1) return null
    if (ids.length) out.choices[step.id] = ids
  }

  for (const step of visibleSteps(process, out)) {
    if (step.kind === 'single' && !out.choices[step.id]) return null
    if (step.kind === 'multi' && !step.optional && !out.choices[step.id]) return null
  }

  // Free text per step (audit descriptions, the chosen recommendation): short, one line, never trusted as instructions.
  const texts = r.texts && typeof r.texts === 'object' ? (r.texts as Record<string, unknown>) : {}
  for (const step of visibleSteps(process, out)) {
    if (step.kind !== 'text' && !step.textField) continue
    const raw = texts[step.id]
    const clean = typeof raw === 'string' ? raw.replace(/[\r\n]+/g, ' ').trim().slice(0, MAX_TEXT_CHARS) : ''
    if (step.kind === 'text' && !step.optional && !clean) return null
    if (clean) (out.texts ??= {})[step.id] = clean
  }

  if (def.steps.some((s) => s.kind === 'hardware')) {
    const h = r.hardware as Record<string, unknown> | undefined
    if (!h || typeof h !== 'object') return null
    const device = h.device
    const os = h.os
    const gpu = h.gpu
    if (typeof device !== 'string' || !['desktop', 'laptop', 'minipc', 'mac', 'workstation', 'none'].includes(device)) return null
    if (device === 'none' && !def.steps.some((s) => s.kind === 'hardware' && s.allowNone)) return null
    if (typeof os !== 'string' || !['win', 'mac', 'linux', 'unknown'].includes(os)) return null
    if (typeof gpu !== 'string' || !['nvidia', 'amd', 'apple', 'integrated', 'none', 'unknown'].includes(gpu)) return null
    if (!num(h.ramGb, 4096) || !num(h.vramGb, 1024) || !num(h.storageGb, 100_000)) return null
    out.hardware = { device, os, gpu, ramGb: h.ramGb, vramGb: h.vramGb, storageGb: h.storageGb } as SolutionAnswers['hardware']
    if (def.steps.some((s) => s.kind === 'hardware' && s.askCpu) && typeof h.cpu === 'string') {
      const cpu = h.cpu.replace(/[\r\n]+/g, ' ').trim().slice(0, 60)
      if (cpu) out.hardware!.cpu = cpu
    }
  }

  if (def.steps.some((s) => s.kind === 'mobile')) {
    const m = r.mobile as Record<string, unknown> | undefined
    if (!m || typeof m !== 'object') return null
    if (m.platform !== 'ios' && m.platform !== 'android') return null
    if (!num(m.ramGb, 64) || !num(m.storageGb, 4096)) return null
    const model = typeof m.model === 'string' ? m.model.replace(/[\r\n]+/g, ' ').trim().slice(0, 60) : ''
    out.mobile = { platform: m.platform, model, ramGb: m.ramGb, storageGb: m.storageGb }
  }

  if (typeof r.note === 'string' && r.note.trim()) out.note = r.note.replace(/[\r\n]+/g, ' ').trim().slice(0, MAX_NOTE_CHARS)
  return out
}
