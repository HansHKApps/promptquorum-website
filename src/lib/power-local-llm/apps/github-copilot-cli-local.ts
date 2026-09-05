// Local AI App Directory — GitHub Copilot CLI (local models/BYOK) (layer: ide)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc flagged this as "a feature of Copilot CLI, not a standalone app — may not fit
// a per-tool directory shape." Listed as the CLI product itself (which has its own docs
// page and changelog) rather than the BYOK feature in isolation. Local-model support
// confirmed via github.blog changelog 2026-04-07 (Ollama, vLLM, Foundry Local) and
// 2026-08-11 (Ollama BYOK in JetBrains) — well within the 6-month recency window.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'github-copilot-cli-local',
  name: 'GitHub Copilot CLI',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'Foundry Local', 'Azure OpenAI'],
  engine: 'external',
  license: 'Proprietary',
  price: 'freemium', // GitHub Copilot Free tier exists; full CLI features require a paid Copilot plan
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null, // closed source, no public repo
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models',
  tagline: {
    en: 'GitHub\'s terminal coding agent with BYOK and fully local/offline model support via Ollama and vLLM',
    de: 'GitHubs Terminal-Coding-Agent mit BYOK und vollständiger Unterstützung für lokale/Offline-Modelle über Ollama und vLLM',
    fr: 'L\'agent de codage en terminal de GitHub avec BYOK et prise en charge complète des modèles locaux/hors ligne via Ollama et vLLM',
    ja: 'BYOKに対応し、OllamaやvLLM経由で完全にローカル・オフラインのモデルをサポートするGitHubのターミナルコーディングエージェント',
    zh: 'GitHub的终端编码代理，支持BYOK，并通过Ollama和vLLM完全支持本地/离线模型',
    es: 'Agente de codificación en terminal de GitHub con BYOK y soporte completo para modelos locales/sin conexión mediante Ollama y vLLM',
    pt: 'Agente de codificação em terminal do GitHub com BYOK e suporte total a modelos locais/offline via Ollama e vLLM',
    ar: 'وكيل برمجة الطرفية من GitHub مع دعم BYOK ودعم كامل للنماذج المحلية/دون اتصال عبر Ollama وvLLM',
    ko: 'BYOK를 지원하고 Ollama 및 vLLM을 통해 완전한 로컬/오프라인 모델을 지원하는 GitHub의 터미널 코딩 에이전트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
