// Local AI App Directory — RAPR AI (layer: agent)
// New ToolRecord — RAPR AI already had a table row in
// local-llm-software-directory-2026.ts (all 9 locales, "specialized" section)
// and a dedicated review article (rapr-ai-review.ts), but no ToolRecord file
// existed, so it was invisible to TOTAL_TOOL_COUNT and the hub page's filters.
// Facts below are taken directly from the article's own existing row text and
// url field — not independently re-verified against raprai.com in this pass.
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rapr-ai',
  name: 'RAPR AI',
  categories: ['agent-frameworks'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['win'],
  worksWith: ['Ollama'],
  engine: 'external',
  license: 'Free (early access)',
  price: 'free',
  hardware: null, // not documented in the source article row or otherwise researched
  stars: null, // no public repo referenced in the source article
  addedDate: null, // not derivable from the source article
  status: 'listed',
  uses: ['agent'],
  url: 'raprai.com',
  tagline: {
    en: 'Desktop multi-AI agent workspace and orchestrator, Ollama plus cloud models, Windows only',
    de: 'Desktop-Workspace und Orchestrator für mehrere KI-Agenten, Ollama plus Cloud-Modelle, bisher nur Windows',
    fr: 'Espace de travail et orchestrateur multi-agents IA sur bureau, Ollama plus modèles cloud, Windows uniquement pour l\'instant',
    ja: 'デスクトップ向けマルチAIエージェントワークスペース兼オーケストレーター。Ollamaとクラウドモデル対応、現状Windowsのみ',
    zh: '桌面端多AI智能体工作区与编排器，Ollama加云端模型，目前仅支持Windows',
    es: 'Espacio de trabajo y orquestador de múltiples agentes de IA en escritorio, Ollama más modelos en la nube, solo Windows por ahora',
    pt: 'Workspace e orquestrador de múltiplos agentes de IA no desktop, Ollama mais modelos em nuvem, apenas Windows por enquanto',
    ar: 'مساحة عمل ومنسّق وكلاء ذكاء اصطناعي متعددين لسطح المكتب، Ollama بالإضافة إلى نماذج سحابية، يدعم Windows فقط حالياً',
    ko: '데스크톱용 다중 AI 에이전트 워크스페이스 겸 오케스트레이터, Ollama와 클라우드 모델, 현재 Windows만 지원',
  },
  reviewSlug: 'rapr-ai-review', // dedicated PromptQuorum review
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, ollama: true, mcp: true, memory: true, multiAgent: true },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
