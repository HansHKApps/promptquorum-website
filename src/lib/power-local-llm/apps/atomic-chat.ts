// Local AI App Directory — Atomic Chat (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'atomic-chat',
  name: 'Atomic Chat',
  layer: 'desktop',
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'paid',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'agent'],
  url: 'atomic.chat',
  tagline: {
    en: 'Offline desktop and mobile chat app with one-click local agents',
    de: 'Offline-Chat-App für Desktop und Mobilgeräte mit lokalen Ein-Klick-Agenten',
    fr: 'Application de chat hors ligne pour ordinateur et mobile avec agents locaux en un clic',
    ja: 'デスクトップ・モバイル対応のオフラインチャットアプリ、ワンクリックでローカルエージェントを実行',
    zh: '支持桌面和移动端的离线聊天应用，一键运行本地智能体',
    es: 'App de chat sin conexión para escritorio y móvil con agentes locales en un clic',
    pt: 'App de chat offline para desktop e celular com agentes locais em um clique',
    ar: 'تطبيق دردشة يعمل دون اتصال للحاسوب والهاتف مع تشغيل وكلاء محليين بنقرة واحدة',
    ko: '데스크톱과 모바일용 오프라인 채팅 앱, 원클릭으로 로컬 에이전트 실행',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
