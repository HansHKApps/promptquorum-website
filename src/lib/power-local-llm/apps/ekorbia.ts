// Local AI App Directory — Ekorbia (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ekorbia',
  name: 'Ekorbia',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 1,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'ekorbia.com',
  tagline: {
    en: 'Rust/Tauri privacy chat workspace, free, on-device engine on Mac',
    de: 'Rust/Tauri-Privacy-Chat-Workspace, kostenlos, On-Device-Engine auf Mac',
    fr: 'Espace de chat privé Rust/Tauri, gratuit, moteur local sur Mac',
    ja: 'Rust/Tauri製の無料プライバシーチャットワークスペース、Mac版はオンデバイスエンジン',
    zh: '基于 Rust/Tauri 的免费隐私聊天工作区，Mac 版内置本地推理引擎',
    es: 'Espacio de chat privado Rust/Tauri, gratuito, motor local en Mac',
    pt: 'Espaço de chat privado Rust/Tauri, gratuito, motor local no Mac',
    ar: 'مساحة دردشة خاصة مبنية بـRust/Tauri، مجانية، محرك يعمل على الجهاز على Mac',
    ko: 'Rust/Tauri 기반 무료 프라이버시 채팅 워크스페이스, Mac에서 온디바이스 엔진',
  },
  lastVerifiedDate: '2026-09-07',
}
