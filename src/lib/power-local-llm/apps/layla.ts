// Local AI App Directory — Layla (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'layla',
  name: 'Layla',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android', 'ios'], // Android (Google Play, direct APK) + iPhone/iPad (App Store, iOS 16.4+); verified 2026-10-30
  worksWith: ['LM Studio', 'Ollama', 'vLLM', 'OpenAI API'],
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null }, // layla-network.ai (2026-10-30): small local models run on phones with "around 4 GB of RAM", larger models "best with 8 GB or more"; App Store description targets "flagship phones (8GB+ RAM)"; mobile SoC uses on-device NPU/GPU rather than discrete VRAM, so cpuOnly doesn't cleanly apply
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'layla-network.ai',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.layla',
    appStore: 'https://apps.apple.com/us/app/layla/id6456886656',
  },
  installEffort: 'installer',
  installEvidence: 'App Store and Google Play listings plus layla-network.ai/download checked 2026-10-30: paid store installs (US App Store $19.99, iOS 16.4+) and a direct APK with a free, feature-limited version from the developer\'s site; v7.6.0 on both stores',
  tagline: {
    en: 'Android-first local LLM app',
    de: 'Android-first App für lokale LLMs',
    fr: 'Application LLM local d\'abord Android',
    ja: 'Android優先のローカルLLMアプリ',
    zh: 'Android优先的本地LLM应用',
    es: 'App LLM local orientada a Android',
    pt: 'App LLM local orientada a Android',
    ar: 'تطبيق نماذج لغوية محلية موجَّه لـAndroid',
    ko: 'Android 중심 로컬 LLM 앱',
  },
  pqReview: { date: '2026-10-30', version: '7.6.0', versionSourceUrl: 'https://apps.apple.com/us/app/layla/id6456886656' },
  reviewSlug: 'layla-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { offline: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
  lastUpstreamUpdate: '2026-10-19', // Google Play "Updated on Oct 19, 2026" (v7.6.0), read 2026-10-30; App Store lists 7.6.0 too
  lastUpstreamUpdateSource: 'https://play.google.com/store/apps/details?id=com.layla',
}
