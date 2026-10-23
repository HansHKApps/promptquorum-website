/**
 * Article skin — colour/decoration classes only, never structure.
 *
 * `default` reproduces today's classes byte-for-byte. `hub` swaps them for the
 * hub-template tokens (--hub-* in globals.css) so an article reached from a
 * cluster hub reads as the same design. Markup, tags, heading order and the
 * speakable hooks (.article-intro, .key-takeaways, h1, h2) are identical in
 * both skins; a same-DOM test enforces this.
 *
 * The skin is switched on per article by `designSkin: 'hub'`, which only the
 * page-updater sets (docs/PAGE_UPDATER.md step 4.9).
 */

export type ArticleSkin = 'default' | 'hub'

export interface DotBadge {
  dot: string
  badge: string
}

export interface SkinClasses {
  h2: string
  tldrBox: string
  tldrLabel: string
  leadBlock: string
  tocNav: string
  tocLabel: string
  tocLink: string
  updatedBadge: string
}

const DEFAULT_CLASSES: SkinClasses = {
  h2: 'text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4',
  tldrBox: 'bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways',
  tldrLabel: 'text-xs font-bold text-primary uppercase tracking-widest mb-3',
  leadBlock: 'bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4 mb-6',
  tocNav: 'mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5',
  tocLabel: 'text-xs font-bold text-primary uppercase tracking-widest mb-3',
  tocLink: 'text-sm text-primary hover:text-primary/80 transition-colors',
  updatedBadge:
    'inline-flex items-center gap-1.5 border px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 border-emerald-300 text-emerald-700',
}

// Same layout utilities, hub colour tokens. The H2 gains a left accent rule;
// padding-left is the only geometry change and keeps the heading in the flow.
const HUB_CLASSES: SkinClasses = {
  h2: 'text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4 border-l-4 border-hub-violet pl-3',
  tldrBox: 'bg-hub-violet-tint border border-hub-violet-edge rounded-xl p-5 my-4 key-takeaways',
  tldrLabel: 'text-xs font-bold text-hub-violet-ink uppercase tracking-widest mb-3',
  leadBlock: 'bg-hub-violet-tint border-l-4 border-hub-violet rounded-r-xl px-5 py-4 mb-6',
  tocNav: 'mb-8 bg-hub-violet-tint border border-hub-violet-edge rounded-lg p-5',
  tocLabel: 'text-xs font-bold text-hub-violet-ink uppercase tracking-widest mb-3',
  tocLink: 'text-sm text-hub-violet-ink hover:text-hub-violet transition-colors',
  updatedBadge:
    'inline-flex items-center gap-1.5 border px-2.5 py-0.5 rounded-full text-xs font-semibold bg-hub-indigo-tint border-hub-indigo-edge text-hub-indigo-ink',
}

// Theme → hub tone. Full literal class strings so Tailwind can see them.
const HUB_THEME_COLORS: Record<string, DotBadge> = {
  violet: { dot: 'bg-hub-violet', badge: 'bg-hub-violet-tint text-hub-violet-ink border border-hub-violet-edge' },
  azure: { dot: 'bg-hub-azure', badge: 'bg-hub-azure-tint text-hub-azure-ink border border-hub-azure-edge' },
  indigo: { dot: 'bg-hub-indigo', badge: 'bg-hub-indigo-tint text-hub-indigo-ink border border-hub-indigo-edge' },
  orchid: { dot: 'bg-hub-orchid', badge: 'bg-hub-orchid-tint text-hub-orchid-ink border border-hub-orchid-edge' },
  rose: { dot: 'bg-hub-rose', badge: 'bg-hub-rose-tint text-hub-rose-ink border border-hub-rose-edge' },
}

const HUB_TONES = Object.keys(HUB_THEME_COLORS)

/** Stable string → tone, so one theme always gets the same colour. */
function toneFor(theme: string): DotBadge {
  let h = 0
  for (let i = 0; i < theme.length; i++) h = (h * 31 + theme.charCodeAt(i)) >>> 0
  return HUB_THEME_COLORS[HUB_TONES[h % HUB_TONES.length]!]!
}

export function resolveSkin(value: unknown): ArticleSkin {
  return value === 'hub' ? 'hub' : 'default'
}

export function getSkinClasses(skin: ArticleSkin): SkinClasses {
  return skin === 'hub' ? HUB_CLASSES : DEFAULT_CLASSES
}

/** Default skin returns `current` untouched, so existing output is unchanged. */
export function getSkinThemeColors(skin: ArticleSkin, theme: string, current: DotBadge): DotBadge {
  return skin === 'hub' ? toneFor(theme) : current
}
