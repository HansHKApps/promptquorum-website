// Local AI App Directory — Dify (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dify',
  name: 'Dify',
  layer: 'rag',
  locality: 'hybrid',
  platforms: ['web', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'OpenAI API'],
  engine: 'external',
  license: 'Modified Apache 2.0',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 154429,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'agent', 'docs'],
  url: 'dify.ai',
  tagline: {
    en: 'AI workflow builder with RAG and agent support',
    de: 'KI-Workflow-Builder mit RAG- und Agenten-Unterstützung',
    fr: 'Constructeur de workflows IA avec support RAG et agents',
    ja: 'RAGとエージェントサポート付きAIワークフロービルダー',
    zh: '支持RAG和智能体的AI工作流构建工具',
    es: 'Constructor de flujos de trabajo IA con soporte RAG y agentes',
    pt: 'Construtor de fluxos de trabalho IA com suporte RAG e agentes',
    ar: 'منشئ سير عمل ذكاء اصطناعي مع دعم RAG والعملاء الذكيين',
    ko: 'RAG 및 에이전트 지원을 갖춘 AI 워크플로 빌더',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
