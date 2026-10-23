// Single source of truth for volatile app numbers used in article prose (GEO_WRITING_GUIDELINES.md Rule 49).
//
// Never type a GitHub star count into an article. Articles call `starsFor(lang)('open-webui')` and the
// number comes from the directory tile (`stars` in src/lib/power-local-llm/apps/<slug>.ts), which
// `npm run refresh-app-stars` keeps current. Same pattern as TOTAL_APP_COUNT: resolved at build time,
// so all nine locale blocks, JSON-LD and meta descriptions always agree.
import type { Language } from '@/lib/blog/blogContent'
import { localAiApps } from './apps-barrel'

/** plus = "150,000+" · bare = "150,000" (when the sentence already says "more than") · k = "150k+" */
export type StarsForm = 'plus' | 'bare' | 'k'

// Locale thousands separators: DE/ES/PT use ".", FR uses a no-break space, the rest ",".
const THOUSANDS: Record<Language, string> = {
  en: ',', de: '.', fr: ' ', ja: ',', zh: ',', es: '.', pt: '.', ar: ',', ko: ',',
}

/** Round DOWN so "N+" is always true: 1k steps below 100k, 10k steps above. */
export function floorStars(stars: number): number {
  return stars >= 100_000 ? Math.floor(stars / 10_000) * 10_000 : Math.floor(stars / 1_000) * 1_000
}

export function formatStars(stars: number, lang: Language, form: StarsForm = 'plus'): string {
  const floored = floorStars(stars)
  if (form === 'k') {
    const k = floored / 1_000
    return lang === 'pt' ? `${k} mil+` : `${k}k+`
  }
  const grouped = String(floored).replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS[lang])
  return form === 'plus' ? `${grouped}+` : grouped
}

/** Star count label for a directory tile slug. Throws at build time if the tile has no tracked count. */
export function appStars(slug: string, lang: Language, form: StarsForm = 'plus'): string {
  const app = localAiApps.find((a) => a.slug === slug)
  if (!app) throw new Error(`appStars: no directory tile with slug "${slug}"`)
  if (app.stars == null) throw new Error(`appStars: tile "${slug}" has no star count (stars: null)`)
  return formatStars(app.stars, lang, form)
}

/** Bind a locale once per block: `const st = starsFor('de')` then `${st('open-webui')}` in the strings. */
export function starsFor(lang: Language) {
  return (slug: string, form: StarsForm = 'plus') => appStars(slug, lang, form)
}
