// Local AI App Directory — OpenCode (layer: ide)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// License was flagged "not confirmed" in the source doc — verified: MIT. Note the
// canonical repo is now anomalyco/opencode (renamed from sst/opencode), NOT the
// similarly-named opencode-ai/opencode, which is an unrelated smaller project.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'opencode',
  name: 'OpenCode',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['cli', 'desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'],
  engine: 'external',
  license: 'MIT',
  price: 'freemium', // core agent is free/open source; OpenCode Zen is a paid hosted model marketplace
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 204337, // github.com/anomalyco/opencode, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'opencode.ai',
  tagline: {
    en: 'Terminal-first open-source coding agent supporting 75+ model providers, including local models',
    de: 'Terminal-first Open-Source-Coding-Agent mit Unterstützung für über 75 Modellanbieter, einschließlich lokaler Modelle',
    fr: 'Agent de codage open source axé sur le terminal, prenant en charge plus de 75 fournisseurs de modèles, y compris les modèles locaux',
    ja: '75以上のモデルプロバイダー（ローカルモデルを含む）に対応するターミナル中心のオープンソースコーディングエージェント',
    zh: '以终端为核心的开源编码代理，支持75个以上的模型提供方，包括本地模型',
    es: 'Agente de codificación open source centrado en terminal, compatible con más de 75 proveedores de modelos, incluidos los locales',
    pt: 'Agente de codificação open source focado em terminal, com suporte a mais de 75 provedores de modelo, incluindo locais',
    ar: 'وكيل برمجة مفتوح المصدر يعتمد على الطرفية أولاً، يدعم أكثر من 75 مزود نماذج، بما في ذلك النماذج المحلية',
    ko: '75개 이상의 모델 제공업체(로컬 모델 포함)를 지원하는 터미널 우선 오픈소스 코딩 에이전트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
