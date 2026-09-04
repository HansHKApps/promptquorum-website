// Local AI App Directory — Llamafile (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llamafile',
  name: 'Llamafile',
  layer: 'runtime',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 25900,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/Mozilla-Ocho/llamafile',
  tagline: {
    en: 'Single-file portable LLM execution by Mozilla',
    de: 'Portable Ein-Datei-LLM-Ausführung von Mozilla',
    fr: 'Exécution LLM portable en fichier unique par Mozilla',
    ja: 'Mozilla製の単一ファイルポータブルLLM実行',
    zh: 'Mozilla出品的单文件可移植LLM运行方案',
    es: 'Ejecución LLM portable en un solo archivo por Mozilla',
    pt: 'Execução LLM portátil em um único arquivo pela Mozilla',
    ar: 'تشغيل نماذج لغوية محمولة في ملف واحد من Mozilla',
    ko: 'Mozilla의 단일 파일 포터블 LLM 실행',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
