// Local AI App Directory — dograh (layer: voice)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// url set to dograh.com (primary marketing/docs domain) rather than app.dograh.com
// (the logged-in app subdomain), matching the convention used across this directory.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dograh',
  name: 'dograh',
  categories: ['realtime-voice-agents'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: null,
  engine: 'external',
  license: 'BSD-2-Clause',
  price: 'freemium', // self-hosted OSS is free forever; managed cloud is $0.01/min + provider usage
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 5588, // github.com/dograh-hq/dograh, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'dograh.com',
  tagline: {
    en: 'Open-source, self-hosted voice AI platform — a Vapi and Retell alternative with bring-your-own model',
    de: 'Open-Source-Voice-KI-Plattform zum Selbsthosten – eine Alternative zu Vapi und Retell mit eigenem Modell (Bring-your-own-Model)',
    fr: 'Plateforme IA vocale open source et auto-hébergée — une alternative à Vapi et Retell avec votre propre modèle',
    ja: 'オープンソースのセルフホスト型音声AIプラットフォーム — 独自モデル持ち込み対応のVapi・Retell代替',
    zh: '开源自托管语音AI平台——支持自带模型的Vapi和Retell替代方案',
    es: 'Plataforma de IA de voz de código abierto y autoalojada, una alternativa a Vapi y Retell con modelo propio',
    pt: 'Plataforma de IA de voz open source e auto-hospedada — uma alternativa ao Vapi e Retell com modelo próprio',
    ar: 'منصة ذكاء اصطناعي صوتي مفتوحة المصدر وذاتية الاستضافة — بديل لـVapi وRetell مع إمكانية إحضار نموذجك الخاص',
    ko: '오픈소스 자체 호스팅 음성 AI 플랫폼 — 자체 모델을 사용할 수 있는 Vapi 및 Retell 대안',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
