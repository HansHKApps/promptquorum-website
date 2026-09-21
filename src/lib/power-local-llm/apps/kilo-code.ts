// Local AI App Directory — Kilo Code (layer: ide)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// GitHub org is Kilo-Org/kilocode (27,181 stars) — usage figure below (3M+ developers) is
// from Anaconda's July 2026 acquisition announcement, a more reliable primary source than
// the "5M+ users" figure in the source doc.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kilo-code',
  name: 'Kilo Code',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['plugin', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API', 'OpenRouter'],
  engine: 'external',
  license: 'MIT',
  price: 'freemium', // free for individuals (BYOK, zero markup); Kilo Pass, Teams, Enterprise are paid
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // VS Code/CLI extension calling user-configured API backends (OpenRouter, Ollama, etc.), no local inference of its own; checked kilo.ai/docs and github.com/Kilo-Org/kilocode — no published minimum RAM/VRAM, only unofficial reports of high VS Code extension-host memory use, verified 2026-09-13
  stars: 27181, // github.com/Kilo-Org/kilocode, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'kilo.ai',
  tagline: {
    en: 'Open-source, model-agnostic coding agent for VS Code, JetBrains, and CLI with local model support',
    de: 'Open-Source-Coding-Agent für VS Code, JetBrains und CLI, modellunabhängig, mit Unterstützung für lokale Modelle',
    fr: 'Agent de codage open source et indépendant du modèle pour VS Code, JetBrains et CLI, avec prise en charge des modèles locaux',
    ja: 'VS Code、JetBrains、CLI向けのモデル非依存なオープンソースコーディングエージェント。ローカルモデルに対応',
    zh: '面向VS Code、JetBrains和CLI的开源、模型无关的编码代理，支持本地模型',
    es: 'Agente de codificación de código abierto y agnóstico de modelo para VS Code, JetBrains y CLI, con soporte para modelos locales',
    pt: 'Agente de codificação open source e agnóstico de modelo para VS Code, JetBrains e CLI, com suporte a modelos locais',
    ar: 'وكيل برمجة مفتوح المصدر ومستقل عن النموذج لـVS Code وJetBrains وسطر الأوامر، مع دعم النماذج المحلية',
    ko: 'VS Code, JetBrains, CLI용 모델 독립적 오픈소스 코딩 에이전트, 로컬 모델 지원',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, mcp: true, vscode: true, jetbrains: true, agentMode: true, autocomplete: true },
  lastVerifiedDate: null, // TODO: not yet founder-verified
  reviewSlug: 'kilo-code-review', // dedicated PromptQuorum review — pinned to #1 in the article index
}
