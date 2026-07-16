// Maps URL slugs to article keys for the Smart Home cluster.
// All 30 slugs from the build plan are registered here; only those with content in
// articles-barrel.ts will render real content — the rest fall through to the
// "Coming Soon" template at the article page level.
//
// Sitemap picks up published slugs automatically via published.ts; published paths are
// whitelisted back in past the general cluster exclusion (see EXCLUDED_PATH_PREFIXES in
// sitemap.xml/route.ts).

export const SMART_HOME_SLUG_TO_KEY: Record<string, string> = {
  // Category 1 — Smart Home Foundations (general traffic doors)
  'what-is-a-smart-home':                          'what-is-a-smart-home',
  'history-of-smart-home-technology':              'history-of-smart-home-technology',
  'smart-home-ecosystems-compared':                'smart-home-ecosystems-compared',
  'smart-home-protocols-explained':                'smart-home-protocols-explained',
  'best-smart-home-devices-2026':                  'best-smart-home-devices-2026',
  'smart-home-for-beginners-where-to-start':       'smart-home-for-beginners-where-to-start',
  'smart-home-privacy-risks':                      'smart-home-privacy-risks',

  // Category 2 — Local-First Smart Home (the core moat)
  'local-smart-home-complete-guide':               'local-smart-home-complete-guide',
  'home-assistant-getting-started':                'home-assistant-getting-started',
  'why-local-smart-home-beats-cloud':              'why-local-smart-home-beats-cloud',
  'best-hardware-for-local-smart-home':            'best-hardware-for-local-smart-home',
  'private-smart-home-gdpr':                       'private-smart-home-gdpr',
  'matter-local-control-guide':                    'matter-local-control-guide',
  'migrating-from-cloud-to-local-smart-home':      'migrating-from-cloud-to-local-smart-home',

  // Category 3 — Local AI & LLMs in the Smart Home (the explosive intersection)
  'local-llm-smart-home-complete-guide':           'local-llm-smart-home-complete-guide',
  'home-assistant-ollama-integration':             'home-assistant-ollama-integration',
  'local-voice-assistant-smart-home':              'local-voice-assistant-smart-home',
  'local-whisper-home-assistant':                  'local-whisper-home-assistant',
  'ai-automations-local-llm':                      'ai-automations-local-llm',
  'local-ai-security-camera':                      'local-ai-security-camera',
  'best-local-llm-models-smart-home':              'best-local-llm-models-smart-home',

  // Category 4 — Decision & Comparison Pages (conversion + CTR)
  'home-assistant-vs-alexa-vs-google':             'home-assistant-vs-alexa-vs-google',
  'best-mini-pc-home-assistant-local-ai':          'best-mini-pc-home-assistant-local-ai',
  'local-vs-cloud-voice-assistant':                'local-vs-cloud-voice-assistant',
  'smart-home-without-subscriptions':              'smart-home-without-subscriptions',

  // Category 4 — Mini-PC single-product reviews (spokes of the roundup above)
  'geekom-a9-max-local-ai-review':                 'geekom-a9-max-local-ai-review',
  'beelink-ser8-local-ai-review':                  'beelink-ser8-local-ai-review',
  'beelink-eq14-local-ai-review':                  'beelink-eq14-local-ai-review',
  'gmktec-g3-plus-local-ai-review':                'gmktec-g3-plus-local-ai-review',
  'minisforum-um890-pro-local-ai-review':          'minisforum-um890-pro-local-ai-review',

  // Category 5 — Energy & Solar Integration (SH-26–29) — SPEC LOCKED, not yet authored
  'local-smart-home-energy-management-2027':       'local-smart-home-energy-management-2027',
  'matter-solar-inverter-heat-pump-integration':   'matter-solar-inverter-heat-pump-integration',
  'home-assistant-energy-dashboard-guide':         'home-assistant-energy-dashboard-guide',
  'home-as-energy-microgrid-2027':                 'home-as-energy-microgrid-2027',

  // Category 6 — 2027 Protocols & Regulation (SH-30–33) — SPEC LOCKED, not yet authored
  'matter-2-0-explained':                          'matter-2-0-explained',
  'thread-14-wifi-7-routers-guide':                'thread-14-wifi-7-routers-guide',
  'eu-data-act-smart-home-2027':                   'eu-data-act-smart-home-2027',
  'ikea-matter-ecosystem-guide-2027':              'ikea-matter-ecosystem-guide-2027',

  // Category 7 — Advanced Local AI (SH-34–38) — SPEC LOCKED, not yet authored
  'local-small-language-models-smart-home':        'local-small-language-models-smart-home',
  'radar-presence-sensing-no-camera':              'radar-presence-sensing-no-camera',
  'reducing-llm-hallucinations-home-automation':   'reducing-llm-hallucinations-home-automation',
  'sensor-fusion-smart-home-2027':                 'sensor-fusion-smart-home-2027',
  'home-digital-twin-explained':                   'home-digital-twin-explained',

  // Category 8 — Buyer's Guides (SH-39–45) — SPEC LOCKED, not yet authored
  'best-local-security-cameras-2027':              'best-local-security-cameras-2027',
  'best-smart-locks-local-control-2027':           'best-smart-locks-local-control-2027',
  'best-smart-thermostats-local-ai-2027':          'best-smart-thermostats-local-ai-2027',
  'best-zigbee-thread-dongles-2027':               'best-zigbee-thread-dongles-2027',
  'best-smart-home-hubs-2027':                     'best-smart-home-hubs-2027',
  'nvidia-jetson-orin-nano-smart-home-review':     'nvidia-jetson-orin-nano-smart-home-review',
  'best-energy-monitoring-smart-plugs-2027':       'best-energy-monitoring-smart-plugs-2027',
}
