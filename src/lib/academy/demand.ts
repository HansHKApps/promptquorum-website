// PromptQuorum Academy — topic demand: what people look for and what they train, without any personal data.
// Pure logic (no Redis, no server imports) so it is unit-testable. The Redis side is demand-store.ts.
//
// Privacy contract: only the subject text (normalised, filtered, never linked to a person, IP, session or
// timestamp finer than the ISO week) plus language, level, minutes bucket and test mode are counted. A subject
// is shown publicly only once at least ACADEMY_DEMAND_MIN_PUBLIC visitors asked for exactly the same thing.

import type { AffiliateCategory } from '@/lib/affiliate-links'

/** A normalised subject is public (top-10 suggestions, reports) only at or above this many requests. */
export const ACADEMY_DEMAND_MIN_PUBLIC = 5
export const ACADEMY_DEMAND_TOP_N = 10

const MAX_CHARS = 60
const MAX_WORDS = 8

/**
 * Lower-case, Unicode-normalised, punctuation-trimmed, single-spaced. Returns null when the text must not be
 * stored: too long to be a topic, or it looks like contact data / an identifier (e-mail, URL, long number).
 */
export function normalizeSubject(raw: string): string | null {
  const s = raw
    .normalize('NFKC')
    .toLocaleLowerCase('en')
    .replace(/\s+/g, ' ')
    .replace(/^[\s"'`.,;:!?()[\]{}<>*_~-]+|[\s"'`.,;:!?()[\]{}<>*_~-]+$/gu, '')
  if (s.length < 2 || s.length > MAX_CHARS) return null
  if (s.split(' ').length > MAX_WORDS) return null
  if (/@|https?:|www\.|\.(com|net|org|io|de|ai)\b/.test(s)) return null
  if ((s.match(/\d/g) ?? []).length > 6) return null
  if (/[\p{Cc}\p{Cf}]/u.test(s)) return null
  return s
}

/** ISO week key like 2026-W47 (UTC), for the weekly trend sets. */
export function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = Date.UTC(t.getUTCFullYear(), 0, 1)
  const week = Math.ceil(((t.getTime() - yearStart) / 86_400_000 + 1) / 7)
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

export interface DemandTheme {
  key: string
  /** English label for the owner report. */
  label: string
  /** Substrings of the normalised subject (several languages). First matching theme wins. */
  keywords: string[]
  /** Product category in src/lib/affiliate-links.ts that could serve this theme, if any. */
  affiliate: AffiliateCategory | null
  /** Plain-language note for marketing: what a reader of this topic might buy or look for. */
  marketingNote: string
}

export const DEMAND_THEMES: readonly DemandTheme[] = [
  { key: 'gpu-hardware', label: 'GPUs and hardware', keywords: ['gpu', 'vram', 'rtx', 'radeon', 'nvidia', 'grafikkarte', 'carte graphique', 'tarjeta gráfica', 'hardware', 'cuda'], affiliate: 'gpu', marketingNote: 'GPU, RAM, cooling, eGPU enclosures' },
  { key: 'cloud-gpu', label: 'Cloud GPU and hosting', keywords: ['cloud gpu', 'runpod', 'vast.ai', 'hosting', 'vps', 'server', 'deploy'], affiliate: 'cloud-gpu', marketingNote: 'Cloud GPU rental, hosting' },
  { key: 'local-llm', label: 'Local LLMs and running models', keywords: ['local llm', 'ollama', 'lm studio', 'llama', 'quantiz', 'gguf', 'mistral', 'qwen', 'gemma', 'run llm', 'self-host', 'selfhost', 'lokal', 'local ai', 'open source ai', 'open-source ai'], affiliate: 'gpu', marketingNote: 'Hardware to run models locally' },
  { key: 'prompt-engineering', label: 'Prompt engineering', keywords: ['prompt', 'chatgpt', 'claude', 'gemini', 'copilot', 'chain of thought', 'few-shot', 'system prompt'], affiliate: null, marketingNote: 'Courses, books, prompt tools' },
  { key: 'agents-rag', label: 'Agents, RAG and automation', keywords: ['agent', 'rag', 'mcp', 'langchain', 'embedding', 'vector', 'n8n', 'automation', 'workflow', 'fine-tun', 'finetun'], affiliate: 'cloud-gpu', marketingNote: 'Automation tools, hosting, GPU for fine-tuning' },
  { key: 'coding', label: 'AI coding', keywords: ['coding', 'programming', 'python', 'javascript', 'typescript', 'cursor', 'code review', 'developer', 'programmier'], affiliate: null, marketingNote: 'IDE tools, courses, laptops' },
  { key: 'image-video', label: 'Image and video generation', keywords: ['image', 'stable diffusion', 'comfyui', 'flux', 'midjourney', 'video', 'bild'], affiliate: 'gpu', marketingNote: 'GPU with lots of VRAM, creative tools' },
  { key: 'voice-audio', label: 'Voice, speech and audio', keywords: ['voice', 'speech', 'tts', 'whisper', 'transcri', 'audio', 'dictation', 'sprach'], affiliate: null, marketingNote: 'Microphones, dictation apps' },
  { key: 'privacy-compliance', label: 'Privacy, GDPR and AI compliance', keywords: ['gdpr', 'dsgvo', 'privacy', 'datenschutz', 'ai act', 'compliance', 'security', 'sicherheit'], affiliate: 'compliance-saas', marketingNote: 'Compliance software, privacy tools' },
  { key: 'smart-home', label: 'Smart home', keywords: ['smart home', 'home assistant', 'zigbee', 'matter', 'iot', 'knx', 'homekit'], affiliate: null, marketingNote: 'Hubs, sensors, mini PCs' },
  { key: 'solar-energy', label: 'Balcony solar and energy', keywords: ['solar', 'balkonkraftwerk', 'photovoltaik', 'battery', 'speicher', 'wechselrichter', 'inverter'], affiliate: null, marketingNote: 'Panels, inverters, storage' },
  { key: 'laptops-pcs', label: 'Laptops and PCs', keywords: ['laptop', 'macbook', 'mini pc', 'apple silicon', 'raspberry'], affiliate: 'laptop', marketingNote: 'Laptops, mini PCs' },
]

export const DEMAND_OTHER_THEME = 'other'

export function classifySubject(normalized: string): string {
  for (const t of DEMAND_THEMES) if (t.keywords.some((k) => normalized.includes(k))) return t.key
  return DEMAND_OTHER_THEME
}

/** Only site languages get their own popular list; a custom language is counted under "other". */
export function demandLanguage(programmeLanguage: string): string {
  return /^[a-z]{2}$/.test(programmeLanguage) ? programmeLanguage : 'other'
}

export type DemandStage = 'programme' | 'lesson' | 'test'

export interface DemandInput {
  subject: string
  language: string
  level?: string
  minutes?: number
  testMode?: string
}
