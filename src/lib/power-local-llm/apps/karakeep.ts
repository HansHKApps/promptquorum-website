// Local AI App Directory — Karakeep (layer: notes / bookmarks)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Formerly named Hoarder; renamed Karakeep — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'karakeep',
  name: 'Karakeep',
  categories: ['notes-integrations', 'local-search'],
  interfaces: ['web', 'mobile', 'plugin'], // self-hosted web app plus iOS/Android apps and Chrome/Firefox extensions, verified 2026-09-18
  locality: 'hybrid', // fully self-hosted data store, but AI auto-tagging/summarization defaults to a configured LLM provider (OpenAI API or a local Ollama endpoint), verified 2026-09-18
  platforms: null, // self-hosted Docker web app; see interfaces/worksWith for the native mobile/browser clients
  worksWith: ['OpenAI API', 'Ollama'],
  engine: 'external',
  license: 'AGPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 29118, // github.com/karakeep-app/karakeep, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs'],
  url: 'karakeep.app',
  tagline: {
    en: 'Self-hostable bookmark-and-notes app with AI-based automatic tagging, summarization, and full-text search',
    de: 'Selbst hostbare Lesezeichen- und Notiz-App mit KI-basierter automatischer Verschlagwortung, Zusammenfassung und Volltextsuche',
    fr: "Application de signets et de notes auto-hébergeable avec étiquetage automatique par IA, résumé et recherche plein texte",
    ja: 'AIによる自動タグ付け・要約・全文検索を備えたセルフホスト可能なブックマーク＆メモアプリ',
    zh: '可自托管的书签与笔记应用，具备AI自动标签、摘要生成和全文搜索功能',
    es: 'Aplicación de marcadores y notas autoalojable con etiquetado automático por IA, resúmenes y búsqueda de texto completo',
    pt: 'Aplicativo de favoritos e notas auto-hospedável com marcação automática por IA, resumos e busca de texto completo',
    ar: 'تطبيق إشارات مرجعية وملاحظات قابل للاستضافة الذاتية، مزوّد بوسم تلقائي بالذكاء الاصطناعي وتلخيص وبحث نصي كامل',
    ko: 'AI 기반 자동 태깅, 요약, 전문 검색을 지원하는 셀프호스팅 가능한 북마크·메모 앱',
  },
  reviewSlug: 'karakeep-review', // dedicated PromptQuorum review — added 2026-09-18
  lastVerifiedDate: '2026-09-18',
}
