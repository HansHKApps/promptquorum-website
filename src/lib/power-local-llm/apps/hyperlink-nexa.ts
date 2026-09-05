// Local AI App Directory — Hyperlink (Nexa AI) (layer: assistant)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "parent company status ambiguous after Qualcomm absorption" —
// confirmed: Nexa AI became a Qualcomm company in March 2026; Hyperlink itself is still
// live and listed on Product Hunt. No public version number or exact release date found —
// left as TODO/'TODO' rather than guessed. price and stars unconfirmed — left as TODO/null.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hyperlink-nexa',
  name: 'Hyperlink (Nexa AI)',
  categories: ['local-search'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win'],
  worksWith: null,
  engine: 'builtin',
  license: 'Proprietary',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null, // closed source, no public repo
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'hyperlink.nexa.ai',
  tagline: {
    en: 'On-device AI assistant that searches and answers questions across your local files — acquired by Qualcomm in 2026',
    de: 'On-Device-KI-Assistent, der lokale Dateien durchsucht und Fragen dazu beantwortet – 2026 von Qualcomm übernommen',
    fr: 'Assistant IA sur l\'appareil qui recherche et répond à des questions sur vos fichiers locaux — racheté par Qualcomm en 2026',
    ja: 'ローカルファイルを検索して質問に回答するオンデバイスAIアシスタント — 2026年にQualcommが買収',
    zh: '在设备端搜索并回答本地文件相关问题的AI助手——2026年被高通收购',
    es: 'Asistente de IA en el dispositivo que busca y responde preguntas sobre tus archivos locales, adquirido por Qualcomm en 2026',
    pt: 'Assistente de IA no dispositivo que pesquisa e responde perguntas sobre seus arquivos locais — adquirida pela Qualcomm em 2026',
    ar: 'مساعد ذكاء اصطناعي على الجهاز يبحث في ملفاتك المحلية ويجيب عن الأسئلة المتعلقة بها — استحوذت عليه Qualcomm عام 2026',
    ko: '로컬 파일을 검색하고 질문에 답하는 온디바이스 AI 어시스턴트 — 2026년 Qualcomm에 인수됨',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
