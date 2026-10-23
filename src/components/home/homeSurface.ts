/** The three homepage card kinds: interactive/action, content-list, stat/meta. */
export type HomeCardVariant = 'action' | 'list' | 'stat'

/** Static class strings (Tailwind can't see dynamically built names). Fill + edge come from the shared --hub-* tokens. */
export const SURFACE_CLASS: Record<HomeCardVariant, string> = {
  action: 'bg-hub-violet-tint border-hub-violet-edge',
  list: 'bg-white border-hub-violet-edge',
  stat: 'bg-hub-azure-tint border-hub-azure-edge',
}

/** Solid-fill CTA in the hub look (white ring, inset bevel, coloured drop shadow). */
export const HUB_BUTTON_CLASS =
  'bg-hub-violet text-white font-extrabold ring-2 ring-white ring-offset-2 ring-offset-hub-violet-tint transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.35),inset_0_-2.5px_0_0_rgba(0,0,0,0.16),0_10px_22px_-6px_var(--hub-violet)]'
