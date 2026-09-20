// Local AI App Directory — DSPy (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dspy',
  name: 'DSPy',
  categories: ['prompt-tooling-evals', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'SGLang'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // Python prompting/programming framework, no inference engine of its own — hardware floor is entirely the connected LLM backend's, no fixed minimum in github.com/stanfordnlp/dspy docs, checked 2026-09-13
  stars: 37700,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'github.com/stanfordnlp/dspy',
  tagline: {
    en: 'Declarative self-improving programs with language models',
    de: 'Deklarative, sich selbst verbessernde Programme mit Sprachmodellen',
    fr: 'Programmes déclaratifs auto-améliorants avec des modèles de langage',
    ja: '言語モデルを用いた宣言的で自己改善するプログラム',
    zh: '基于语言模型的声明式自我改进程序',
    es: 'Programas declarativos que se autoperfeccionan con modelos de lenguaje',
    pt: 'Programas declarativos que se autoaperfeiçoam com modelos de linguagem',
    ar: 'برامج تصريحية تحسّن نفسها ذاتيًا باستخدام نماذج اللغة',
    ko: '언어 모델을 활용한 선언적 자기개선 프로그램',
  },
  reviewSlug: 'dspy-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: '3.3.1', versionSourceUrl: 'https://github.com/stanfordnlp/dspy/releases/tag/3.3.1' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
