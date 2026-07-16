// Smart Home — public-launch allowlist.
// Slugs in this set are publicly indexable (robots: index,follow) and included
// in sitemap.xml across all 9 locales (en + de/fr/ja/zh/es/pt/ar/ko). All other
// slugs in the cluster remain noindex + sitemap-excluded until they pass audit
// and are added here.
//
// LAUNCHED 2026-06-05 (Phase 3): all 30 cluster articles (25 hub-listed guides +
// 5 mini-PC review spokes) are live, translated into all 9 locales. Slugs are
// listed explicitly (not derived) so the postbuild noindex contract test can
// statically parse them, matching power-local-llm.
// (Pending separate pre-launch task: real product picks for the SH-05/SH-11/SH-23
// buyer's guides; not blocking launch.)

export const SMART_HOME_PUBLISHED_SLUGS: ReadonlySet<string> = new Set([
  // Category 1 — Smart Home Foundations
  'what-is-a-smart-home',
  'history-of-smart-home-technology',
  'smart-home-ecosystems-compared',
  'smart-home-protocols-explained',
  'best-smart-home-devices-2026',
  'smart-home-for-beginners-where-to-start',
  'smart-home-privacy-risks',
  // Category 2 — Local-First Smart Home
  'local-smart-home-complete-guide',
  'home-assistant-getting-started',
  'why-local-smart-home-beats-cloud',
  'best-hardware-for-local-smart-home',
  'private-smart-home-gdpr',
  'matter-local-control-guide',
  'migrating-from-cloud-to-local-smart-home',
  // Category 3 — Local AI & LLMs in the Smart Home
  'local-llm-smart-home-complete-guide',
  'home-assistant-ollama-integration',
  'local-voice-assistant-smart-home',
  'local-whisper-home-assistant',
  'ai-automations-local-llm',
  'local-ai-security-camera',
  'best-local-llm-models-smart-home',
  // Category 4 — Decision & Comparison
  'home-assistant-vs-alexa-vs-google',
  'best-mini-pc-home-assistant-local-ai',
  'local-vs-cloud-voice-assistant',
  'smart-home-without-subscriptions',
  // Category 4 — Mini-PC single-product reviews (spokes of the roundup)
  'geekom-a9-max-local-ai-review',
  'beelink-ser8-local-ai-review',
  'beelink-eq14-local-ai-review',
  'gmktec-g3-plus-local-ai-review',
  'minisforum-um890-pro-local-ai-review',
])

export const SMART_HOME_HUB_PUBLISHED = true

export function isSmartHomeArticlePublished(slug: string, _lang: string): boolean {
  return SMART_HOME_PUBLISHED_SLUGS.has(slug)
}

export function isSmartHomeHubPublished(_lang: string): boolean {
  return SMART_HOME_HUB_PUBLISHED
}
