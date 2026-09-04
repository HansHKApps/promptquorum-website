// Local AI App Directory — Ollama (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ollama',
  name: 'Ollama',
  categories: ['inference-engines', 'runtimes-managers'],
  interfaces: ['cli', 'desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 180124,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'serve', 'build'],
  url: 'ollama.com',
  tagline: {
    en: 'Easiest overall — one-command install, OpenAI-compatible API, huge model library',
    de: 'Einfachster Einstieg — Ein-Befehl-Installation, OpenAI-kompatible API, umfangreiche Modellbibliothek',
    fr: 'Le plus simple — installation en une commande, API compatible OpenAI, vaste bibliothèque de modèles',
    ja: '最も簡単 — ワンコマンドインストール、OpenAI互換API、豊富なモデルライブラリ',
    zh: '整体最易上手——一条命令安装，OpenAI兼容API，庞大的模型库',
    es: 'El más fácil en general — instalación de un comando, API compatible con OpenAI, enorme biblioteca de modelos',
    pt: 'O mais fácil em geral — instalação de um comando, API compatível com OpenAI, enorme biblioteca de modelos',
    ar: 'الأسهل بشكل عام — تثبيت بأمر واحد، API متوافقة مع OpenAI، مكتبة نماذج ضخمة',
    ko: '전반적으로 가장 쉬운 — 단일 명령 설치, OpenAI 호환 API, 대형 모델 라이브러리',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
