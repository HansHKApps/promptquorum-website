// Local AI App Directory — Open Interpreter (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-interpreter',
  name: 'Open Interpreter',
  layer: 'desktop',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 68200,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/OpenInterpreter/open-interpreter',
  tagline: {
    en: 'Lets local LLM control your computer and execute code',
    de: 'Erlaubt einem lokalen LLM, Ihren Computer zu steuern und Code auszuführen',
    fr: 'Permet à un LLM local de contrôler votre ordinateur et d\'exécuter du code',
    ja: 'ローカルLLMがコンピュータを操作しコードを実行できる',
    zh: '允许本地LLM操控电脑并执行代码',
    es: 'Permite que un LLM local controle tu computadora y ejecute código',
    pt: 'Permite que um LLM local controle seu computador e execute código',
    ar: 'يتيح لنموذج لغوي محلي التحكم في جهازك وتنفيذ الكود',
    ko: '로컬 LLM이 컴퓨터를 제어하고 코드를 실행하도록 허용',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
