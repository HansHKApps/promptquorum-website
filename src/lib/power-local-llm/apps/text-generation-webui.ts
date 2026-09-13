// Local AI App Directory — text-generation-webui (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'text-generation-webui',
  name: 'text-generation-webui',
  categories: ['inference-engines'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/oobabooga/text-generation-webui README — ships an explicit CPU-only install path (`requirements_cpu_only.txt`, a "CPU only" PyTorch wheel row for Linux/WSL and Windows, and a CPU-only Docker Compose file) alongside NVIDIA/AMD/Intel/Apple GPU options; no fixed VRAM/RAM floor since it's model-dependent, verified 2026-09-13
  stars: 47600,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/oobabooga/text-generation-webui',
  tagline: {
    en: 'Power-user UI with extensive plugin ecosystem',
    de: 'Power-User-UI mit umfangreichem Plugin-Ökosystem',
    fr: 'Interface power-user avec écosystème de plugins étendu',
    ja: '豊富なプラグインエコシステムを持つパワーユーザー向けUI',
    zh: '面向高级用户的UI，拥有丰富的插件生态',
    es: 'Interfaz para usuarios avanzados con extenso ecosistema de plugins',
    pt: 'Interface para usuários avançados com extenso ecossistema de plugins',
    ar: 'واجهة للمستخدمين المتقدمين مع منظومة إضافات واسعة',
    ko: '방대한 플러그인 생태계를 갖춘 파워유저용 인터페이스',
  },
  reviewSlug: 'text-generation-webui-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
