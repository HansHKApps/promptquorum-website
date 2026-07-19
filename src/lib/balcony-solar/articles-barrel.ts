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

// TIER 5 — 2027 Trends expansion (BSOL-26..29) — EN scaffolded, noindex (see published.ts)
// BSOL-25 (us-balcony-solar-legalization-2027) dropped — see slugs.ts
import { article as a_balcony_solar_battery_storage_standard_2027 } from './articles/balcony-solar-battery-storage-standard-2027'
import { article as a_eu_800w_balcony_solar_standard_2027 } from './articles/eu-800w-balcony-solar-standard-2027'
import { article as a_balcony_solar_housing_associations_b2b_2027 } from './articles/balcony-solar-housing-associations-b2b-2027'
import { article as a_net_metering_rollback_balcony_solar_2027 } from './articles/net-metering-rollback-balcony-solar-2027'

// TIER 5 — Country expansion (BSOL-30..33) — EN scaffolded, noindex (see published.ts)
import { article as a_balcony_solar_japan_status_2027 } from './articles/balcony-solar-japan-status-2027'
import { article as a_balcony_solar_china_2027 } from './articles/balcony-solar-china-2027'
import { article as a_balcony_solar_brazil_status_2027 } from './articles/balcony-solar-brazil-status-2027'
import { article as a_where_balcony_solar_doesnt_exist_yet_2027 } from './articles/where-balcony-solar-doesnt-exist-yet-2027'
import { article as a_balcony_solar_greece_status_2027 } from './articles/balcony-solar-greece-status-2027'

// TIER 6 — Company profiles + market pillars (BSOL-35..50) — Phase 1 scaffold
// (2026-07-19), structure/frontmatter only, no body content. EN-only, noindex
// (see PENDING_SLUGS in published.ts) until content, translation, and
// internal-linking phases land.
import { article as a_balcony_solar_industry_overview } from './articles/balcony-solar-industry-overview'
import { article as a_balcony_solar_global_market_overview } from './articles/balcony-solar-global-market-overview'
import { article as a_anker_solix_balcony_solar } from './articles/anker-solix-balcony-solar'
import { article as a_ecoflow_balcony_solar } from './articles/ecoflow-balcony-solar'
import { article as a_zendure_balcony_solar } from './articles/zendure-balcony-solar'
import { article as a_growatt_balcony_solar } from './articles/growatt-balcony-solar'
import { article as a_hoymiles_microinverter_balcony_solar } from './articles/hoymiles-microinverter-balcony-solar'
import { article as a_deye_microinverter_balcony_solar } from './articles/deye-microinverter-balcony-solar'
import { article as a_apsystems_microinverter_balcony_solar } from './articles/apsystems-microinverter-balcony-solar'
import { article as a_goodwe_balcony_solar } from './articles/goodwe-balcony-solar'
import { article as a_enphase_microinverter_balcony_solar } from './articles/enphase-microinverter-balcony-solar'
import { article as a_yuma_balcony_solar } from './articles/yuma-balcony-solar'
import { article as a_priwatt_balcony_solar } from './articles/priwatt-balcony-solar'
import { article as a_kleines_kraftwerk_balcony_solar } from './articles/kleines-kraftwerk-balcony-solar'
import { article as a_balkonstrom_balcony_solar } from './articles/balkonstrom-balcony-solar'
import { article as a_green_solar_pluginenergy_balcony_solar } from './articles/green-solar-pluginenergy-balcony-solar'
import { article as a_meyer_burger_solarwatt_heckert_balcony_solar } from './articles/meyer-burger-solarwatt-heckert-balcony-solar'

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

  // TIER 5 — 2027 Trends expansion (EN scaffolded, noindex — see published.ts)
  // BSOL-25 (us-balcony-solar-legalization-2027) dropped — see slugs.ts
  'balcony-solar-battery-storage-standard-2027':     a_balcony_solar_battery_storage_standard_2027,
  'eu-800w-balcony-solar-standard-2027':              a_eu_800w_balcony_solar_standard_2027,
  'balcony-solar-housing-associations-b2b-2027':      a_balcony_solar_housing_associations_b2b_2027,
  'net-metering-rollback-balcony-solar-2027':         a_net_metering_rollback_balcony_solar_2027,

  // TIER 5 — Country expansion (EN scaffolded, noindex — see published.ts)
  'balcony-solar-japan-status-2027':                  a_balcony_solar_japan_status_2027,
  'balcony-solar-china-2027':                         a_balcony_solar_china_2027,
  'balcony-solar-brazil-status-2027':                 a_balcony_solar_brazil_status_2027,
  'where-balcony-solar-doesnt-exist-yet-2027':        a_where_balcony_solar_doesnt_exist_yet_2027,
  'balcony-solar-greece-status-2027':                 a_balcony_solar_greece_status_2027,

  // TIER 6 — Company profiles + market pillars (Phase 1 scaffold, noindex — see published.ts)
  'balcony-solar-industry-overview':                  a_balcony_solar_industry_overview,
  'balcony-solar-global-market-overview':             a_balcony_solar_global_market_overview,
  'anker-solix-balcony-solar':                        a_anker_solix_balcony_solar,
  'ecoflow-balcony-solar':                             a_ecoflow_balcony_solar,
  'zendure-balcony-solar':                             a_zendure_balcony_solar,
  'growatt-balcony-solar':                             a_growatt_balcony_solar,
  'hoymiles-microinverter-balcony-solar':              a_hoymiles_microinverter_balcony_solar,
  'deye-microinverter-balcony-solar':                  a_deye_microinverter_balcony_solar,
  'apsystems-microinverter-balcony-solar':             a_apsystems_microinverter_balcony_solar,
  'goodwe-balcony-solar':                              a_goodwe_balcony_solar,
  'enphase-microinverter-balcony-solar':               a_enphase_microinverter_balcony_solar,
  'yuma-balcony-solar':                                a_yuma_balcony_solar,
  'priwatt-balcony-solar':                             a_priwatt_balcony_solar,
  'kleines-kraftwerk-balcony-solar':                   a_kleines_kraftwerk_balcony_solar,
  'balkonstrom-balcony-solar':                         a_balkonstrom_balcony_solar,
  'green-solar-pluginenergy-balcony-solar':            a_green_solar_pluginenergy_balcony_solar,
  'meyer-burger-solarwatt-heckert-balcony-solar':      a_meyer_burger_solarwatt_heckert_balcony_solar,
}
