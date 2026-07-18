// Maps URL slugs to article keys for the Balcony Solar cluster.
// All 20 slugs from the build plan (balcony-solar-article-briefs.md, BSOL-01..BSOL-20)
// are registered here; only those with content in articles-barrel.ts will render real
// content — the rest fall through to the "Coming Soon" template at the article page level.
//
// Sitemap picks up published slugs automatically via published.ts; the whole cluster
// is sitemap-excluded until launch (see EXCLUDED_PATH_PREFIXES in sitemap.xml/route.ts).

export const BALCONY_SOLAR_SLUG_TO_KEY: Record<string, string> = {
  // TIER 1 — Hub + core money pages (author + spot-check first)
  'what-is-balcony-solar':                       'what-is-balcony-solar',                       // BSOL-01
  'best-balcony-solar-kits-2026':                 'best-balcony-solar-kits-2026',                 // BSOL-02
  'best-balcony-solar-batteries-2026':            'best-balcony-solar-batteries-2026',            // BSOL-03
  'best-balcony-solar-microinverters':            'best-balcony-solar-microinverters',            // BSOL-04
  'home-assistant-balcony-solar-no-cloud':        'home-assistant-balcony-solar-no-cloud',        // BSOL-05

  // TIER 2 — Decision & how-to (mid-funnel)
  'balcony-vs-rooftop-solar':                     'balcony-vs-rooftop-solar',                     // BSOL-06
  'how-to-install-balcony-solar':                 'how-to-install-balcony-solar',                 // BSOL-07
  'how-to-register-balcony-solar':                'how-to-register-balcony-solar',                // BSOL-08
  'balcony-solar-sizing-yield-payback':           'balcony-solar-sizing-yield-payback',           // BSOL-09
  'balcony-solar-mounting-guide':                 'balcony-solar-mounting-guide',                 // BSOL-10

  // TIER 3 — Legislation moat (per-country)
  'is-balcony-solar-legal-country-guide':         'is-balcony-solar-legal-country-guide',         // BSOL-11
  'balcony-solar-legal-us-states':                'balcony-solar-legal-us-states',                // BSOL-12
  'balkonkraftwerk-germany-rules':                'balkonkraftwerk-germany-rules',                // BSOL-13
  'balcony-solar-spain-latam':                    'balcony-solar-spain-latam',                    // BSOL-14
  'balcony-solar-portugal-brazil':                'balcony-solar-portugal-brazil',                // BSOL-15
  'balcony-solar-gulf-mena':                      'balcony-solar-gulf-mena',                      // BSOL-16

  // TIER 4 — Long-tail / conversion support
  'ecoflow-vs-anker-vs-zendure-balcony-solar':    'ecoflow-vs-anker-vs-zendure-balcony-solar',    // BSOL-17
  'do-you-need-a-battery-balcony-solar':          'do-you-need-a-battery-balcony-solar',          // BSOL-18
  'balcony-solar-payback-worth-it-2026':          'balcony-solar-payback-worth-it-2026',          // BSOL-19
  'balcony-solar-not-producing-power-fixes':      'balcony-solar-not-producing-power-fixes',      // BSOL-20

  // TIER 4 — US-specific commercial pages
  'best-balcony-solar-home-battery-us-2026':      'best-balcony-solar-home-battery-us-2026',      // BSOL-21

  // TIER 1 extension — Technical hub pair (platform-comparison companion to BSOL-05)
  'local-platforms-balcony-solar-home-assistant-alternatives': 'local-platforms-balcony-solar-home-assistant-alternatives', // BSOL-22

  // TIER 1 extension — Protocol-level integration guide (per-brand Modbus/MQTT/API matrix)
  'connect-balcony-solar-home-assistant-local':   'connect-balcony-solar-home-assistant-local',   // BSOL-23

  // TIER 3 extension — Legislation moat: narrative companion to BSOL-12
  'how-balcony-solar-became-legal-in-the-us':     'how-balcony-solar-became-legal-in-the-us',      // BSOL-24

  // TIER 5 — 2027 Trends expansion (noindex until Phase 7 authorization — see published.ts)
  // BSOL-25 (us-balcony-solar-legalization-2027) dropped — collision with
  // how-balcony-solar-became-legal-in-the-us.ts and balcony-solar-legal-us-states.ts
  'balcony-solar-battery-storage-standard-2027':  'balcony-solar-battery-storage-standard-2027',   // BSOL-26
  'eu-800w-balcony-solar-standard-2027':          'eu-800w-balcony-solar-standard-2027',           // BSOL-27
  'balcony-solar-housing-associations-b2b-2027':  'balcony-solar-housing-associations-b2b-2027',   // BSOL-28
  'net-metering-rollback-balcony-solar-2027':     'net-metering-rollback-balcony-solar-2027',      // BSOL-29
}
