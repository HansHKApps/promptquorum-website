// Local AI App Directory — On Device AI (layer: mobile)
// New tile — distinct product from the existing `ai-on-device` entry (single-fixed-
// model paid app by Eduardo Dominguez Menendez). This is ondevice-ai.app: free with
// optional Pro features, 200+ downloadable local models (GGUF + MLX) rather than one
// bundled model. Verified via the developer's own site.
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'on-device-ai',
  name: 'On Device AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-13',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'ondevice-ai.app',
  tagline: {
    en: 'On-device chat app for iPhone, iPad, and Apple Silicon Mac with 200+ downloadable local models (GGUF and MLX)',
    de: 'On-Device-Chat-App für iPhone, iPad und Apple-Silicon-Mac mit über 200 herunterladbaren lokalen Modellen (GGUF und MLX)',
    fr: 'Application de chat sur l\'appareil pour iPhone, iPad et Mac Apple Silicon avec plus de 200 modèles locaux téléchargeables (GGUF et MLX)',
    ja: 'iPhone、iPad、Apple SiliconMac向けオンデバイスチャットアプリ。200以上のダウンロード可能なローカルモデル(GGUF・MLX)に対応',
    zh: '适用于iPhone、iPad和Apple芯片Mac的设备端聊天应用，支持200多种可下载的本地模型(GGUF和MLX)',
    es: 'Aplicación de chat en el dispositivo para iPhone, iPad y Mac con Apple Silicon, con más de 200 modelos locales descargables (GGUF y MLX)',
    pt: 'Aplicativo de chat no dispositivo para iPhone, iPad e Mac com Apple Silicon, com mais de 200 modelos locais para download (GGUF e MLX)',
    ar: 'تطبيق دردشة على الجهاز لأجهزة آيفون وآيباد وماك Apple Silicon مع أكثر من 200 نموذج محلي قابل للتنزيل (GGUF وMLX)',
    ko: 'iPhone, iPad, Apple 실리콘 Mac용 온디바이스 채팅 앱, 다운로드 가능한 200개 이상의 로컬 모델(GGUF, MLX) 지원',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
