// Local AI App Directory — BoBe (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bobe',
  name: 'BoBe',
  layer: 'desktop',
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Free (open source)',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'www.bobebot.com',
  tagline: {
    en: 'Free local AI desktop assistant for Mac, on-device',
    de: 'Kostenloser lokaler KI-Desktop-Assistent für Mac, On-Device',
    fr: "Assistant IA local gratuit pour Mac, sur l'appareil",
    ja: '無料のMac向けローカルAIデスクトップアシスタント、オンデバイス',
    zh: '免费的 Mac 本地 AI 桌面助手，设备端运行',
    es: 'Asistente de IA local gratuito para Mac, en el dispositivo',
    pt: 'Assistente de IA local gratuito para Mac, no dispositivo',
    ar: 'مساعد ذكاء اصطناعي محلي مجاني لـMac، يعمل على الجهاز',
    ko: '무료 Mac 로컬 AI 데스크톱 어시스턴트, 온디바이스',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
