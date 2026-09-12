// Local AI App Directory — Noema (layer: mobile)
// Multi-format on-device chat client for iPhone/iPad/Mac/Vision Pro by independent
// developer Alexandru Stamate (NoemaAI LLC). Has a full PromptQuorum review
// (noema-review), so tagline/url/license/platforms are sourced from that article
// and from direct verification against the App Store listing and noemaai.com.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'noema',
  name: 'Noema',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model format/size is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat', 'docs'],
  url: 'noemaai.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/noema-local-ai-offline-llm/id6751169935',
    web: 'https://noemaai.com/',
  },
  tagline: {
    en: 'Free multi-format local AI for iPhone, iPad, and Mac — GGUF, MLX, ExecuTorch, Core ML, and Apple Foundation Models, plus on-device document chat',
    de: 'Kostenlose Multi-Format-KI für iPhone, iPad und Mac — GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models, plus Dokument-Chat auf dem Gerät',
    fr: 'IA locale multi-format gratuite pour iPhone, iPad et Mac — GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models, plus chat de documents sur l\'appareil',
    ja: 'iPhone・iPad・Mac向け無料マルチフォーマットローカルAI — GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models対応、オンデバイス文書チャット付き',
    zh: '面向iPhone、iPad和Mac的免费多格式本地AI — 支持GGUF、MLX、ExecuTorch、Core ML和Apple Foundation Models,附带设备端文档聊天',
    es: 'IA local multiformato gratuita para iPhone, iPad y Mac — GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models, más chat de documentos en el dispositivo',
    pt: 'IA local multiformato gratuita para iPhone, iPad e Mac — GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models, além de chat de documentos no dispositivo',
    ar: 'ذكاء اصطناعي محلي متعدد الصيغ مجاني لـ iPhone وiPad وMac — يدعم GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation، بالإضافة إلى محادثة مستندات على الجهاز',
    ko: 'iPhone, iPad, Mac용 무료 멀티 포맷 로컬 AI — GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models 지원, 온디바이스 문서 채팅 포함',
  },
  reviewSlug: 'noema-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-12',
}
