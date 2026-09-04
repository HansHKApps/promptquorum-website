// Local AI App Directory — Voxa (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'voxa',
  name: 'Voxa',
  categories: ['realtime-voice-agents', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win'],
  worksWith: null,
  engine: 'both',
  license: 'MIT',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['audio', 'chat'],
  url: 'askvoxa.dev',
  tagline: {
    en: 'Local-first desktop voice assistant, optional cloud voice',
    de: 'Lokaler Desktop-Sprachassistent, optional Cloud-Stimme',
    fr: 'Assistant vocal desktop local, voix cloud en option',
    ja: 'ローカル優先のデスクトップ音声アシスタント、クラウド音声もオプション',
    zh: '本地优先的桌面语音助手，可选云端语音',
    es: 'Asistente de voz de escritorio local, voz en la nube opcional',
    pt: 'Assistente de voz de desktop local, voz em nuvem opcional',
    ar: 'مساعد صوتي لسطح المكتب محلي أولاً، مع صوت سحابي اختياري',
    ko: '로컬 우선 데스크톱 음성 어시스턴트, 클라우드 음성 선택 가능',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
