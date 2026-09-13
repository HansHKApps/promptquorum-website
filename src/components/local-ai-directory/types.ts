// Local AI App Directory — shared UI-only types.
// Phase 3 of the plan at /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md
//
// These are presentation-layer types for DirectoryClient and its
// sub-components. They do not touch src/lib/power-local-llm/apps/types.ts —
// that file (ToolRecord and friends) stays the single source of truth for
// the data shape; this file only adds vocabulary for filter/sort/view state.

import type { ToolRecord } from '@/lib/power-local-llm/apps/types'

/** The three "what hardware am I on" choices from the machine selector. */
export type MachineType = 'dgpu' | 'apple' | 'cpu'

/**
 * The viewer's opt-in, precise hardware numbers — layered on top of the
 * coarse `MachineType` choice above, never persisted without an explicit
 * "Save my setup" action (see hardware.ts's writeStoredProfile). Shape
 * matches the field set the machine type actually needs: a dGPU owner
 * reports RAM + VRAM, a CPU-only owner just RAM, and an Apple Silicon owner
 * a single unified-memory number. The `machine` discriminant lets
 * computeCompatibilityVerdict detect a stale profile (saved for a machine
 * type the viewer has since switched away from in the selector).
 */
export type HardwareProfile =
  | { machine: 'dgpu'; ramGb: number; vramGb: number }
  | { machine: 'cpu'; ramGb: number }
  | { machine: 'apple'; unifiedGb: number }

export type ViewMode = 'cards' | 'table'

export type SortKey = 'category' | 'stars' | 'name' | 'added' | 'ram' | 'status'

export type SortDir = 'asc' | 'desc'

/** Filter groups shown in the left sidebar, one checkbox group per key. */
export interface FilterState {
  locality: Set<string>
  engine: Set<string>
  worksWith: Set<string>
  platforms: Set<string>
  category: Set<string>
  interface: Set<string>
  price: Set<string>
}

export function emptyFilterState(): FilterState {
  return {
    locality: new Set(),
    engine: new Set(),
    worksWith: new Set(),
    platforms: new Set(),
    category: new Set(),
    interface: new Set(),
    price: new Set(),
  }
}

/** A single filterable option plus how many currently-matching tools have it. */
export interface FilterOptionCount {
  value: string
  count: number
}

export type { ToolRecord }
