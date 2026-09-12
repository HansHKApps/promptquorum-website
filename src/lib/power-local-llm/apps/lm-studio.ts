// Local AI App Directory — LM Studio (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lm-studio',
  name: 'LM Studio',
  categories: ['general-chat-clients', 'runtimes-managers', 'api-servers'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary (free for personal and business use)', // verified via lmstudio.ai/app-terms on 2026-09-12 — closed source, not OSI-approved; was "Closed source"
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null, // the LM Studio desktop app itself has no public GitHub repo; companion tools (lms CLI, mlx-engine) do but are not the app
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'lmstudio.ai',
  tagline: {
    en: 'Most polished GUI, built-in HuggingFace model browser, server mode',
    de: 'Ausgereifteste GUI, integrierter HuggingFace-Modell-Browser, Server-Modus',
    fr: 'Interface la plus aboutie, navigateur HuggingFace intégré, mode serveur',
    ja: '最も洗練されたGUI。HuggingFaceモデルブラウザ内蔵、サーバーモード対応',
    zh: '最精良的GUI，内置HuggingFace模型浏览器，支持服务器模式',
    es: 'La GUI más pulida, explorador de modelos de HuggingFace integrado, modo servidor',
    pt: 'A GUI mais polida, explorador de modelos do HuggingFace integrado, modo servidor',
    ar: 'أكثر واجهة رسومية مصقولة، مستعرض نماذج HuggingFace مدمج، وضع خادم',
    ko: '가장 세련된 GUI, HuggingFace 모델 탐색기 내장, 서버 모드',
  },
  reviewSlug: 'lm-studio-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-12',
}
