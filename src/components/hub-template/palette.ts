// Tailwind class names per hub tone. Every class is written out in full (no string building)
// so Tailwind can see it at build time. Tokens: src/app/globals.css (--hub-*).

export type HubTone = 'violet' | 'azure' | 'indigo' | 'orchid' | 'rose' | 'orange' | 'blue' | 'olive' | 'amber' | 'cyan'

/** The five tones tiles and cards cycle through, in order. Orange, blue, olive, amber and cyan are hub accents. */
export const HUB_CYCLE: readonly HubTone[] = ['violet', 'azure', 'indigo', 'orchid', 'rose']

export interface HubToneClasses {
  /** Solid fill (tiles, number badges, primary buttons). White text passes WCAG AA on every solid. */
  solid: string
  /** Light fill for cards. */
  tint: string
  /** Text on a tint fill (and on white). */
  ink: string
  /** Border on a tint fill. */
  edge: string
  /** Border in the solid color (open panel, outline buttons). */
  solidBorder: string
  /** Text in the solid color (links on white). */
  solidText: string
  /** Bottom border color for the pointer under an open tile. */
  caret: string
}

export const HUB_TONES: Record<HubTone, HubToneClasses> = {
  violet: {
    solid: 'bg-hub-violet',
    tint: 'bg-hub-violet-tint',
    ink: 'text-hub-violet-ink',
    edge: 'border-hub-violet-edge',
    solidBorder: 'border-hub-violet',
    solidText: 'text-hub-violet',
    caret: 'border-b-hub-violet',
  },
  azure: {
    solid: 'bg-hub-azure',
    tint: 'bg-hub-azure-tint',
    ink: 'text-hub-azure-ink',
    edge: 'border-hub-azure-edge',
    solidBorder: 'border-hub-azure',
    solidText: 'text-hub-azure',
    caret: 'border-b-hub-azure',
  },
  indigo: {
    solid: 'bg-hub-indigo',
    tint: 'bg-hub-indigo-tint',
    ink: 'text-hub-indigo-ink',
    edge: 'border-hub-indigo-edge',
    solidBorder: 'border-hub-indigo',
    solidText: 'text-hub-indigo',
    caret: 'border-b-hub-indigo',
  },
  orchid: {
    solid: 'bg-hub-orchid',
    tint: 'bg-hub-orchid-tint',
    ink: 'text-hub-orchid-ink',
    edge: 'border-hub-orchid-edge',
    solidBorder: 'border-hub-orchid',
    solidText: 'text-hub-orchid',
    caret: 'border-b-hub-orchid',
  },
  rose: {
    solid: 'bg-hub-rose',
    tint: 'bg-hub-rose-tint',
    ink: 'text-hub-rose-ink',
    edge: 'border-hub-rose-edge',
    solidBorder: 'border-hub-rose',
    solidText: 'text-hub-rose',
    caret: 'border-b-hub-rose',
  },
  orange: {
    solid: 'bg-hub-orange',
    tint: 'bg-hub-orange-tint',
    ink: 'text-hub-orange-ink',
    edge: 'border-hub-orange-edge',
    solidBorder: 'border-hub-orange',
    solidText: 'text-hub-orange',
    caret: 'border-b-hub-orange',
  },
  blue: {
    solid: 'bg-hub-blue',
    tint: 'bg-hub-blue-tint',
    ink: 'text-hub-blue-ink',
    edge: 'border-hub-blue-edge',
    solidBorder: 'border-hub-blue',
    solidText: 'text-hub-blue',
    caret: 'border-b-hub-blue',
  },
  olive: {
    solid: 'bg-hub-olive',
    tint: 'bg-hub-olive-tint',
    ink: 'text-hub-olive-ink',
    edge: 'border-hub-olive-edge',
    solidBorder: 'border-hub-olive',
    solidText: 'text-hub-olive',
    caret: 'border-b-hub-olive',
  },
  amber: {
    solid: 'bg-hub-amber',
    tint: 'bg-hub-amber-tint',
    ink: 'text-hub-amber-ink',
    edge: 'border-hub-amber-edge',
    solidBorder: 'border-hub-amber',
    solidText: 'text-hub-amber',
    caret: 'border-b-hub-amber',
  },
  cyan: {
    solid: 'bg-hub-cyan',
    tint: 'bg-hub-cyan-tint',
    ink: 'text-hub-cyan-ink',
    edge: 'border-hub-cyan-edge',
    solidBorder: 'border-hub-cyan',
    solidText: 'text-hub-cyan',
    caret: 'border-b-hub-cyan',
  },
}

export function cycleTone(index: number): HubTone {
  return HUB_CYCLE[index % HUB_CYCLE.length]
}
