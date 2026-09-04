// Local AI App Directory — OpenHands (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openhands',
  name: 'OpenHands',
  layer: 'ide',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['LM Studio', 'Ollama', 'vLLM', 'SGLang'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 86000,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'github.com/All-Hands-AI/OpenHands',
  tagline: {
    en: 'AI software engineer agent (formerly OpenDevin)',
    de: 'KI-Software-Entwickler-Agent (ehemals OpenDevin)',
    fr: 'Agent développeur logiciel IA (anciennement OpenDevin)',
    ja: 'AIソフトウェアエンジニアエージェント（旧OpenDevin）',
    zh: 'AI软件工程智能体（原OpenDevin）',
    es: 'Agente desarrollador de software IA (antes OpenDevin)',
    pt: 'Agente desenvolvedor de software IA (anteriormente OpenDevin)',
    ar: 'عميل مطور برمجيات ذكاء اصطناعي (OpenDevin سابقاً)',
    ko: 'AI 소프트웨어 개발 에이전트 (이전 이름: OpenDevin)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
