// Comparison schema for the category comparison articles and the homepage comparison tool.
//
// The tool record (./types.ts) is the single source of truth: the category article's table and
// the homepage tool both render columns from here, filling cells from the tool's own fields
// (COMMON_COLUMNS) and from `ToolRecord.compare` (category-specific attributes below). Never
// hand-write a comparison value into article prose that the record could supply.
//
// A category group can mix tools that are not comparable on the same attributes (voice-audio holds
// text-to-speech, speech-to-text and real-time voice agents), so each group is split into SEGMENTS,
// each with its own attributes; the article and the tool compare within a segment only. Groups
// with no segments yet render only the common columns until their pilot defines them.

import type { CategoryGroupKey, CategorySubKey } from './categories'

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

export interface CompareSegment {
  key: string
  label: string
  /** A tool belongs to the segment when any of its `categories` is in this list. */
  subs: CategorySubKey[]
  attributes: CompareAttribute[]
}

export const COMPARE_SEGMENTS: Record<CategoryGroupKey, CompareSegment[]> = {
  // Pilot category — attributes are proposals until each is confirmed against the tools' reviews.
  'voice-audio': [
    {
      key: 'text-to-speech',
      label: 'Text-to-speech',
      subs: ['text-to-speech', 'voice-cloning'],
      attributes: [
        { key: 'languages', label: 'Languages', kind: 'number', hint: 'Count of supported languages' },
        { key: 'voiceCloning', label: 'Voice cloning', kind: 'boolean' },
        { key: 'streaming', label: 'Streaming output', kind: 'boolean' },
        { key: 'cpuUsable', label: 'Usable on CPU only', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'speech-to-text',
      label: 'Speech-to-text',
      subs: ['speech-to-text'],
      attributes: [
        { key: 'languages', label: 'Languages', kind: 'number', hint: 'Count of supported languages' },
        { key: 'realtime', label: 'Real-time transcription', kind: 'boolean' },
        { key: 'speakerLabels', label: 'Speaker labels', kind: 'boolean' },
        { key: 'cpuUsable', label: 'Usable on CPU only', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'voice-agents',
      label: 'Real-time voice agents',
      subs: ['realtime-voice-agents'],
      attributes: [
        { key: 'fullyLocal', label: 'Fully local pipeline', kind: 'boolean' },
        { key: 'bargeIn', label: 'Interruption (barge-in)', kind: 'boolean' },
        { key: 'customLlm', label: 'Bring your own LLM', kind: 'boolean' },
        { key: 'telephony', label: 'Phone / telephony', kind: 'boolean' },
      ],
    },
  ],
  'run-serve': [],
  'chat-assistants': [],
  'code-development': [],
  'knowledge-retrieval': [],
  'images-video': [],
  'train-operate': [],
}
