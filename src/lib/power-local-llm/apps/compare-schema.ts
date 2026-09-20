// Comparison schema for the category comparison articles and the homepage comparison tool.
//
// The tool record (./types.ts) is the single source of truth: the category article's table and
// the homepage tool both render columns from here, filling cells from the tool's own fields
// (COMMON_COLUMNS) and from `ToolRecord.compare` (category-specific attributes below). Never
// hand-write a comparison value into article prose that the record could supply.
//
// Groups with an empty attribute list have no category-specific columns yet — they render only
// the common columns until their pilot defines the attributes.

import type { CategoryGroupKey } from './categories'

export type CompareAttributeKind = 'boolean' | 'text' | 'number' | 'list'

export interface CompareAttribute {
  key: string
  label: string
  kind: CompareAttributeKind
  /** Optional short hint shown as a tooltip / footnote in the table. */
  hint?: string
}

/** Columns every category shares, read straight from ToolRecord fields (no `compare` entry needed). */
export const COMMON_COLUMNS = [
  { key: 'price', label: 'Price' },
  { key: 'license', label: 'License' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'locality', label: 'Runs' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'version', label: 'Version' },
] as const

export const COMPARE_ATTRIBUTES: Record<CategoryGroupKey, CompareAttribute[]> = {
  // Pilot category — attributes to confirm against the real tools before any data is filled in.
  'voice-audio': [
    { key: 'languages', label: 'Languages', kind: 'number', hint: 'Count of supported languages' },
    { key: 'voiceCloning', label: 'Voice cloning', kind: 'boolean' },
    { key: 'realtime', label: 'Real-time streaming', kind: 'boolean' },
    { key: 'cpuUsable', label: 'Usable on CPU only', kind: 'boolean' },
    { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
  ],
  'run-serve': [],
  'chat-assistants': [],
  'code-development': [],
  'knowledge-retrieval': [],
  'images-video': [],
  'train-operate': [],
}
