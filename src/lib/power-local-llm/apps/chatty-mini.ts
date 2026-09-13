// Local AI App Directory — Chatty-mini (layer: mobile)
// New ToolRecord — Chatty-mini already had a table row in
// local-llm-software-directory-2026.ts (all 9 locales, mobile-edge section)
// and a dedicated review article (chatty-mini-review.ts), but no ToolRecord
// file existed, so it was invisible to TOTAL_TOOL_COUNT and the hub page's
// filters. Facts below are taken directly from the article's own existing row
// text and storeLinks URL — not independently re-verified in this pass.
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'chatty-mini',
  name: 'Chatty-mini',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Free (unconfirmed)',
  price: 'free',
  hardware: null, // not documented in the source article row or otherwise researched
  stars: null, // no public repo referenced in the source article
  addedDate: null, // not derivable from the source article
  status: 'listed',
  uses: ['phone', 'chat'],
  url: null,
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=io.instance001.chatmini',
  },
  tagline: {
    en: 'Runs GGUF models offline on Android, portrait-first, from indie developer Fractal Media Infrastructure',
    de: 'Führt GGUF-Modelle offline auf Android aus, hochformatorientiert, vom unabhängigen Entwickler Fractal Media Infrastructure',
    fr: 'Exécute des modèles GGUF hors ligne sur Android, orientée portrait, par le développeur indépendant Fractal Media Infrastructure',
    ja: 'AndroidでGGUFモデルをオフライン実行、縦向き設計、独立開発元Fractal Media Infrastructureによる',
    zh: '在 Android 上离线运行 GGUF 模型，竖屏设计，由独立开发者 Fractal Media Infrastructure 打造',
    es: 'Ejecuta modelos GGUF offline en Android, orientada a modo vertical, del desarrollador independiente Fractal Media Infrastructure',
    pt: 'Executa modelos GGUF offline no Android, voltado para modo retrato, do desenvolvedor independente Fractal Media Infrastructure',
    ar: 'يشغّل نماذج GGUF دون اتصال على Android، مصمم للعرض العمودي، من المطوّر المستقل Fractal Media Infrastructure',
    ko: 'Android에서 GGUF 모델을 오프라인으로 실행, 세로 화면 중심 설계, 독립 개발사 Fractal Media Infrastructure 제작',
  },
  reviewSlug: 'chatty-mini-review', // dedicated PromptQuorum review
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
