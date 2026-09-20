// Local AI App Directory — Private LLM (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'private-llm',
  name: 'Private LLM',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'paid',
  hardware: { ramGb: 4, vramGb: null, cpuOnly: true }, // per private-llm-review.ts citing the developer's own FAQ: 4GB RAM minimum recommended (iPad); requires iOS 17.0+/A12 Bionic or macOS 14.0+; runs on-device via Apple's Neural Engine/GPU, no discrete VRAM requirement. Verified 2026-09-13
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'privatellm.app',
  tagline: {
    en: 'Polished iOS and macOS local LLM app',
    de: 'Ausgereifte iOS- und macOS-App für lokale LLMs',
    fr: 'Application iOS et macOS soignée pour LLM locaux',
    ja: '洗練されたiOS・macOSローカルLLMアプリ',
    zh: '精良的iOS和macOS本地LLM应用',
    es: 'App LLM local pulida para iOS y macOS',
    pt: 'App LLM local polida para iOS e macOS',
    ar: 'تطبيق نماذج لغوية محلية مصقول لـiOS وmacOS',
    ko: 'iOS 및 macOS용 세련된 로컬 LLM 앱',
  },
  reviewSlug: 'private-llm-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { offline: true, modelDownloads: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
