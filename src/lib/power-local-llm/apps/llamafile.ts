// Local AI App Directory — Llamafile (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llamafile',
  name: 'Llamafile',
  categories: ['inference-engines'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/Mozilla-Ocho/llamafile README: "runs locally on most operating systems and CPU architectures," explicitly including 64-bit Raspberry Pis, "provided your weights fit into memory"; GPU is optional for acceleration. No fixed RAM/VRAM minimum stated — floor depends entirely on the embedded model, verified 2026-09-13
  stars: 25900,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
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
  reviewSlug: 'llamafile-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
