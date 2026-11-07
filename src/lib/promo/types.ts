export type PromoTarget = 'directory' | 'ask-hans' | 'power-mode' | 'mcp'
/** P1 after intro · P2 ~40% of body · P3 end before related links · P4 desktop sticky rail (mobile: P2) · P5 hub/index pages */
export type PromoPlacement = 'P1' | 'P2' | 'P3' | 'P4' | 'P5'
export type PromoVariant = 'card' | 'strip' | 'callout'

/** Targets that open Ask Hans in place instead of navigating. */
export type PromoOpenTarget = Extract<PromoTarget, 'ask-hans' | 'power-mode'>
