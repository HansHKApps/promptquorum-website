// Local AI App Directory — Enchanted (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'enchanted',
  name: 'Enchanted',
  categories: ['general-chat-clients'],
  interfaces: ['desktop', 'mobile'],
  locality: 'local',
  platforms: ['mac', 'ios'],
  worksWith: ['Ollama'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // pure Ollama client (github.com/AugustDev/enchanted), ships no inference engine of its own — hardware floor is entirely the connected Ollama server's, checked 2026-09-13
  stars: 6000,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'github.com/AugustDev/enchanted',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/enchanted-developers-only/id6474268307',
    github: 'https://github.com/AugustDev/enchanted',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'README "Download Enchanted app from the App Store"; the live listing (iTunes lookup id6474268307) is currently titled "Enchanted Developers Only", v1.9.0 updated 2025-08-19; requires a separate Ollama server. Re-check the listing on refresh. checked 2026-10-09',
  tagline: {
    en: 'Native macOS/iOS minimal Ollama client',
    de: 'Nativer macOS/iOS-Minimal-Client für Ollama',
    fr: 'Client Ollama minimal natif macOS/iOS',
    ja: 'ネイティブmacOS/iOS向け最小限のOllamaクライアント',
    zh: 'macOS/iOS原生的极简Ollama客户端',
    es: 'Cliente Ollama mínimo nativo de macOS/iOS',
    pt: 'Cliente Ollama mínimo nativo de macOS/iOS',
    ar: 'عميل Ollama أدنى حجماً أصلي لـmacOS/iOS',
    ko: '최소한의 macOS/iOS 네이티브 Ollama 클라이언트',
  },
  reviewSlug: 'enchanted-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v1.8.2', versionSourceUrl: 'https://github.com/gluonfield/enchanted/releases/tag/v1.8.2' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { builtInEngine: false, ollama: true, voice: true, visionInput: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
