// Local AI App Directory — LobeHub, formerly LobeChat (layer: webui). Slug kept as 'lobechat' so existing links keep working.
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lobechat',
  name: 'LobeHub',
  categories: ['general-chat-clients'],
  interfaces: ['desktop', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Ollama'], // Ollama provider documented in docs/usage/providers/ollama.mdx (checked 2026-10-24); LM Studio not re-verified
  engine: 'external',
  license: 'MIT',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // LobeHub is an agent workspace (desktop app / cloud / self-hosted server) that calls external model providers or a local Ollama; no minimum RAM figure is published in the README (checked 2026-10-24)
  stars: 83456, // GitHub API 2026-10-24 (repo lobehub/lobehub)
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'lobehub.com',
  tagline: {
    en: 'Open-source agent workspace with desktop apps and self-hosting',
    de: 'Open-Source-Agenten-Workspace mit Desktop-Apps und Self-Hosting',
    fr: 'Espace d\'agents open source avec applications de bureau et auto-hébergement',
    ja: 'デスクトップアプリとセルフホストに対応したオープンソースのエージェント基盤',
    zh: '支持桌面应用和自托管的开源智能体工作区',
    es: 'Espacio de agentes de código abierto con apps de escritorio y autoalojamiento',
    pt: 'Espaço de agentes de código aberto com apps de desktop e hospedagem própria',
    ar: 'مساحة عمل مفتوحة المصدر للوكلاء مع تطبيقات سطح المكتب والاستضافة الذاتية',
    ko: '데스크톱 앱과 셀프 호스팅을 지원하는 오픈 소스 에이전트 워크스페이스',
  },

  storeLinks: {
    web: 'https://lobehub.com',
    github: 'https://github.com/lobehub/lobehub',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win', 'linux'],
  installEvidence: 'GitHub Releases v2.2.20 (2026-10-18) ships LobeHub-2.2.20-arm64.dmg, -x64.dmg, -setup.exe, .AppImage, .deb, .rpm and .snap; self-hosting (setup script + docker compose) is the multi-step path — GitHub API checked 2026-10-24',
  reviewSlug: 'lobechat-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { dockerDeploy: true, mcp: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
  lastUpstreamUpdate: '2026-10-24', // GitHub API pushed_at (newer than release v2.2.20, 2026-10-18), read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/lobehub/lobehub',
  pqReview: { date: '2026-10-24', version: '2.2.20', versionSourceUrl: 'https://github.com/lobehub/lobehub/releases/tag/v2.2.20' },
}
