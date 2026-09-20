// Local AI App Directory — Maid (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'maid',
  name: 'Maid',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android', 'ios'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: 6, vramGb: null, cpuOnly: true }, // per Mobile Artificial Intelligence's own llama.cpp guide (mobile-artificial-intelligence.com/maid/guides/llama-cpp): Q4_K_M-quantized 1-3B GGUF models "load comfortably on devices with 6 GB of RAM" via llama.cpp on-device inference — no GPU required; this figure is for the recommended starting model tier, not an absolute floor for every model Maid can load, verified 2026-09-13
  stars: 2700,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/Mobile-Artificial-Intelligence/maid',
  tagline: {
    en: 'Open-source Flutter mobile LLM app',
    de: 'Open-Source-Flutter-App für mobile LLMs',
    fr: 'Application Flutter mobile open source pour LLM',
    ja: 'オープンソースFlutterモバイルLLMアプリ',
    zh: '开源Flutter移动端LLM应用',
    es: 'App Flutter móvil open-source para LLM',
    pt: 'App Flutter móvel open-source para LLM',
    ar: 'تطبيق Flutter محمول مفتوح المصدر للنماذج اللغوية',
    ko: 'LLM용 오픈소스 Flutter 모바일 앱',
  },
  reviewSlug: 'maid-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v3.0.0', versionSourceUrl: 'https://github.com/Mobile-Artificial-Intelligence/maid/releases/tag/v3.0.0' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
