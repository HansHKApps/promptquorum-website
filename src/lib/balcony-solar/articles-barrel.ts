// Balcony Solar — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map fall through to the
// "Coming Soon" template at the article page level.
//
// SCAFFOLD STATE (Phase 1 complete for Tier 1): all 5 Tier 1 articles (BSOL-01
// through BSOL-05 — hub + core money pages) are authored EN-only and wired in below.
// Tiers 2-4 (BSOL-06 through BSOL-20) are not yet authored; their slugs render
// Coming Soon until content lands. As remaining articles land, add:
//   1. src/lib/balcony-solar/articles/{slug}.ts
//   2. an `import { article as a_{slug} } from './articles/{slug}'` line
//   3. a `'{slug}': a_{slug},` entry to balconySolarContent
// The `theme` field on each article must be one of the four canonical Balcony Solar
// themes (see THEME_COLORS in src/components/BalconySolarPostClient.tsx).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// TIER 1 — Hub + core money pages (BSOL-01..05) — all 5 authored (EN-only so far)
import { article as a_what_is_balcony_solar } from './articles/what-is-balcony-solar'
import { article as a_best_balcony_solar_kits_2026 } from './articles/best-balcony-solar-kits-2026'
import { article as a_best_balcony_solar_batteries_2026 } from './articles/best-balcony-solar-batteries-2026'
import { article as a_best_balcony_solar_microinverters } from './articles/best-balcony-solar-microinverters'
import { article as a_home_assistant_balcony_solar_no_cloud } from './articles/home-assistant-balcony-solar-no-cloud'

// TIER 2 — Decision & how-to (BSOL-06..10) — all 5 authored (EN-only so far)
import { article as a_balcony_vs_rooftop_solar } from './articles/balcony-vs-rooftop-solar'
import { article as a_how_to_install_balcony_solar } from './articles/how-to-install-balcony-solar'
import { article as a_how_to_register_balcony_solar } from './articles/how-to-register-balcony-solar'
import { article as a_balcony_solar_sizing_yield_payback } from './articles/balcony-solar-sizing-yield-payback'
import { article as a_balcony_solar_mounting_guide } from './articles/balcony-solar-mounting-guide'

// TIER 3 — Legislation moat (BSOL-11..16) — all 6 authored (EN-only so far)
import { article as a_is_balcony_solar_legal_country_guide } from './articles/is-balcony-solar-legal-country-guide'
import { article as a_balcony_solar_legal_us_states } from './articles/balcony-solar-legal-us-states'
import { article as a_balkonkraftwerk_germany_rules } from './articles/balkonkraftwerk-germany-rules'
import { article as a_balcony_solar_spain_latam } from './articles/balcony-solar-spain-latam'
import { article as a_balcony_solar_portugal_brazil } from './articles/balcony-solar-portugal-brazil'
import { article as a_balcony_solar_gulf_mena } from './articles/balcony-solar-gulf-mena'

// TIER 4 — Long-tail / conversion support (BSOL-17..20) — all 4 authored (EN-only so far)
import { article as a_ecoflow_vs_anker_vs_zendure_balcony_solar } from './articles/ecoflow-vs-anker-vs-zendure-balcony-solar'
import { article as a_do_you_need_a_battery_balcony_solar } from './articles/do-you-need-a-battery-balcony-solar'
import { article as a_balcony_solar_payback_worth_it_2026 } from './articles/balcony-solar-payback-worth-it-2026'
import { article as a_balcony_solar_not_producing_power_fixes } from './articles/balcony-solar-not-producing-power-fixes'

// TIER 4 — US-specific commercial pages (BSOL-21)
import { article as a_best_balcony_solar_home_battery_us_2026 } from './articles/best-balcony-solar-home-battery-us-2026'
import { article as a_local_platforms_balcony_solar_home_assistant_alternatives } from './articles/local-platforms-balcony-solar-home-assistant-alternatives'

// TIER 1 extension — Protocol-level integration guide (BSOL-23)
import { article as a_connect_balcony_solar_home_assistant_local } from './articles/connect-balcony-solar-home-assistant-local'

// TIER 3 extension — Legislation moat narrative companion to BSOL-12 (BSOL-24)
import { article as a_how_balcony_solar_became_legal_in_the_us } from './articles/how-balcony-solar-became-legal-in-the-us'

export const balconySolarContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  // TIER 1 — Hub + core money pages (all 5 authored, EN-only)
  'what-is-balcony-solar':                    a_what_is_balcony_solar,
  'best-balcony-solar-kits-2026':              a_best_balcony_solar_kits_2026,
  'best-balcony-solar-batteries-2026':         a_best_balcony_solar_batteries_2026,
  'best-balcony-solar-microinverters':         a_best_balcony_solar_microinverters,
  'home-assistant-balcony-solar-no-cloud':     a_home_assistant_balcony_solar_no_cloud,

  // TIER 2 — Decision & how-to (all 5 authored, EN-only)
  'balcony-vs-rooftop-solar':                  a_balcony_vs_rooftop_solar,
  'how-to-install-balcony-solar':              a_how_to_install_balcony_solar,
  'how-to-register-balcony-solar':             a_how_to_register_balcony_solar,
  'balcony-solar-sizing-yield-payback':        a_balcony_solar_sizing_yield_payback,
  'balcony-solar-mounting-guide':              a_balcony_solar_mounting_guide,

  // TIER 3 — Legislation moat (all 6 authored, EN-only)
  'is-balcony-solar-legal-country-guide':      a_is_balcony_solar_legal_country_guide,
  'balcony-solar-legal-us-states':             a_balcony_solar_legal_us_states,
  'balkonkraftwerk-germany-rules':             a_balkonkraftwerk_germany_rules,
  'balcony-solar-spain-latam':                 a_balcony_solar_spain_latam,
  'balcony-solar-portugal-brazil':             a_balcony_solar_portugal_brazil,
  'balcony-solar-gulf-mena':                   a_balcony_solar_gulf_mena,

  // TIER 4 — Long-tail / conversion support (all 4 authored, EN-only)
  'ecoflow-vs-anker-vs-zendure-balcony-solar': a_ecoflow_vs_anker_vs_zendure_balcony_solar,
  'do-you-need-a-battery-balcony-solar':       a_do_you_need_a_battery_balcony_solar,
  'balcony-solar-payback-worth-it-2026':       a_balcony_solar_payback_worth_it_2026,
  'balcony-solar-not-producing-power-fixes':   a_balcony_solar_not_producing_power_fixes,

  // TIER 4 — US-specific commercial pages
  'best-balcony-solar-home-battery-us-2026':   a_best_balcony_solar_home_battery_us_2026,

  // TIER 1 extension — Technical hub pair (platform-comparison companion to BSOL-05)
  'local-platforms-balcony-solar-home-assistant-alternatives': a_local_platforms_balcony_solar_home_assistant_alternatives,

  // TIER 1 extension — Protocol-level integration guide (BSOL-23)
  'connect-balcony-solar-home-assistant-local':   a_connect_balcony_solar_home_assistant_local,

  // TIER 3 extension — Legislation moat narrative companion to BSOL-12 (BSOL-24)
  'how-balcony-solar-became-legal-in-the-us':     a_how_balcony_solar_became_legal_in_the_us,
}
