/** The three homepage card kinds: interactive/action, content-list, stat/meta. */
export type HomeCardVariant = 'action' | 'list' | 'stat'

/** Static class strings (Tailwind can't see dynamically built names). Fill + edge come from CSS variables. */
export const SURFACE_CLASS: Record<HomeCardVariant, string> = {
  action: 'bg-tone-action border-tone-action-edge',
  list: 'bg-tone-list border-tone-list-edge',
  stat: 'bg-tone-stat border-tone-stat-edge',
}
