// Smart Home — 4 category definitions used by the hub page.
// Each category lists its constituent article slugs (resolved against SMART_HOME_SLUG_TO_KEY).
// Localized copy lives in the hub page itself; this file only defines structure + slug membership.
//
// Positioning: broad /smart-home URL, narrow (~70% local-AI) content. Category 1 articles are
// general "traffic doors" that link inward to the local-AI moat in Categories 2–4.

export interface SmartHomeCategory {
  id: string
  slug: string
  titleEn: string
  descriptionEn: string
  articleSlugs: string[]
}

export const SMART_HOME_CATEGORIES: SmartHomeCategory[] = [
  {
    id: 'foundations',
    slug: 'foundations',
    titleEn: 'Smart Home Foundations',
    descriptionEn: 'High-volume entry guides: what a smart home is, the ecosystems, the protocols, and the privacy risks that make local control matter.',
    articleSlugs: [
      'what-is-a-smart-home',
      'history-of-smart-home-technology',
      'smart-home-ecosystems-compared',
      'smart-home-protocols-explained',
      'best-smart-home-devices-2026',
      'smart-home-for-beginners-where-to-start',
      'smart-home-privacy-risks',
    ],
  },
  {
    id: 'local-first',
    slug: 'local-first',
    titleEn: 'Local-First Smart Home',
    descriptionEn: 'The core moat: everything runs on your hardware. Home Assistant, Matter local control, GDPR-friendly setups, and migrating off the cloud.',
    articleSlugs: [
      'local-smart-home-complete-guide',
      'home-assistant-getting-started',
      'why-local-smart-home-beats-cloud',
      'best-hardware-for-local-smart-home',
      'private-smart-home-gdpr',
      'matter-local-control-guide',
      'migrating-from-cloud-to-local-smart-home',
    ],
  },
  {
    id: 'local-ai',
    slug: 'local-ai',
    titleEn: 'Local AI & LLMs in the Smart Home',
    descriptionEn: 'The intersection: run your smart home on a local LLM. Ollama + Home Assistant, fully local voice assistants, AI automations, and private AI cameras.',
    articleSlugs: [
      'local-llm-smart-home-complete-guide',
      'home-assistant-ollama-integration',
      'local-voice-assistant-smart-home',
      'local-whisper-home-assistant',
      'ai-automations-local-llm',
      'local-ai-security-camera',
      'best-local-llm-models-smart-home',
    ],
  },
  {
    id: 'decision-comparison',
    slug: 'decision-comparison',
    titleEn: 'Decision & Comparison',
    descriptionEn: 'Buyer-intent comparison pages: Home Assistant vs Alexa vs Google, best mini PCs for HA + local AI, local vs cloud voice, and zero-subscription builds.',
    articleSlugs: [
      'home-assistant-vs-alexa-vs-google',
      'best-mini-pc-home-assistant-local-ai',
      'local-vs-cloud-voice-assistant',
      'smart-home-without-subscriptions',
    ],
  },
  {
    id: 'energy-solar-integration',
    slug: 'energy-solar-integration',
    titleEn: 'Energy & Solar Integration',
    descriptionEn: 'Connecting solar, batteries, and heat pumps into a local-first smart home: Matter device integration, Home Assistant energy dashboards, and microgrid setups.',
    articleSlugs: [],
  },
  {
    id: 'protocols-regulation-2027',
    slug: 'protocols-regulation-2027',
    titleEn: '2027 Protocols & Regulation',
    descriptionEn: 'What changed in 2027: Matter 2.0, Thread 1.4 and Wi-Fi 7 networking, the EU Data Act, and the IKEA Matter ecosystem.',
    articleSlugs: [],
  },
  {
    id: 'advanced-local-ai',
    slug: 'advanced-local-ai',
    titleEn: 'Advanced Local AI',
    descriptionEn: 'Beyond the basics: small language models for device control, camera-free presence sensing, reducing automation hallucinations, sensor fusion, and digital twins.',
    articleSlugs: [],
  },
  {
    id: 'affiliate-buyers-guides',
    slug: 'affiliate-buyers-guides',
    titleEn: "Buyer's Guides",
    descriptionEn: 'Product roundups for local-first smart home hardware: cameras, locks, thermostats, Zigbee/Thread dongles, hubs, edge-AI boards, and energy-monitoring plugs.',
    articleSlugs: [],
  },
]
