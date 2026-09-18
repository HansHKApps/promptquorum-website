// Local AI App Directory — Blinko (layer: notes)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Canonical repo is github.com/blinkospace/blinko (org renamed from
// blinko-space) — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'blinko',
  name: 'Blinko',
  categories: ['notes-integrations'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid', // self-hosted notes store with local LibSQL vector storage, but RAG search calls a configured external LLM/embedding provider by default, verified 2026-09-18
  platforms: null, // self-hosted web app runnable via Docker on mac/win/linux, accessible from mobile browsers — no dedicated native mobile build
  worksWith: ['OpenAI API'],
  engine: 'external',
  license: 'GPL-3.0',
  price: 'free', // self-hosted edition is fully free; Blinko Cloud is a separate paid managed offering, verified 2026-09-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 11023, // github.com/blinkospace/blinko, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs'],
  url: 'blinko.space',
  tagline: {
    en: 'Open-source, self-hosted note-taking app with RAG-powered natural-language search over your own notes',
    de: 'Open-Source-, selbst gehostete Notiz-App mit RAG-gestützter Suche in natürlicher Sprache über die eigenen Notizen',
    fr: "Application de prise de notes open source et auto-hébergée avec recherche en langage naturel propulsée par le RAG sur vos propres notes",
    ja: 'RAGによる自然言語検索を備えた、オープンソースのセルフホスト型メモアプリ',
    zh: '开源自托管笔记应用，支持基于RAG的自然语言笔记搜索',
    es: 'Aplicación de notas de código abierto y autoalojada con búsqueda en lenguaje natural potenciada por RAG sobre tus propias notas',
    pt: 'Aplicativo de notas de código aberto e auto-hospedado com busca em linguagem natural com tecnologia RAG sobre suas próprias notas',
    ar: 'تطبيق ملاحظات مفتوح المصدر ومستضاف ذاتيًا، يوفر بحثًا باللغة الطبيعية مدعومًا بتقنية RAG عبر ملاحظاتك الخاصة',
    ko: 'RAG 기반 자연어 검색으로 자신의 메모를 탐색할 수 있는 오픈소스 셀프호스팅 메모 앱',
  },
  lastVerifiedDate: '2026-09-18',
}
