// Local AI App Directory — Aider (layer: cli)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aider',
  name: 'Aider',
  layer: 'cli',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['code'],
  url: 'aider.chat',
  tagline: {
    en: 'Terminal pair programmer with multi-file git-native diffs',
    de: 'Terminal-Pair-Programmer mit Multi-Datei-git-nativen Diffs',
    fr: 'Pair-programmeur en terminal avec diffs multi-fichiers natifs git',
    ja: 'マルチファイルのgitネイティブなdiff編集対応のターミナルペアプログラマー',
    zh: '支持多文件git原生diff的终端结对编程工具',
    es: 'Pair programmer en terminal con diffs multifichero nativos de git',
    pt: 'Pair programmer de terminal com diffs multi-arquivo nativos de git',
    ar: 'مبرمج مزدوج في الطرفية مع فروقات متعددة الملفات متوافقة أصلياً مع git',
    ko: '멀티파일 git 네이티브 diff를 갖춘 터미널 페어 프로그래머',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
