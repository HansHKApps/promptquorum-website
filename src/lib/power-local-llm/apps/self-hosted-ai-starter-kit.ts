// Local AI App Directory — Self-hosted AI Starter Kit (layer: workflow/orchestration template)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Curated by n8n; bundles n8n, Ollama, Qdrant, and PostgreSQL as a docker-compose
// template rather than a single standalone app — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'self-hosted-ai-starter-kit',
  name: 'Self-hosted AI Starter Kit',
  categories: ['workflow-node-builders', 'rag-frameworks'],
  interfaces: ['web', 'cli'], // n8n's own web UI plus docker-compose CLI setup, verified 2026-09-18
  locality: 'local', // docker-compose template bundling local Ollama, Qdrant, and PostgreSQL — no cloud dependency required, verified 2026-09-18
  platforms: null, // docker-compose template, deployable on any host OS
  worksWith: ['Ollama', 'Qdrant', 'n8n'],
  engine: 'both', // ships Ollama as a bundled local inference engine, while n8n workflows can also call external providers, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 15258, // github.com/n8n-io/self-hosted-ai-starter-kit, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/n8n-io/self-hosted-ai-starter-kit',
  tagline: {
    en: 'Docker-compose template from n8n that bundles n8n, Ollama, Qdrant, and PostgreSQL into a ready-to-run local AI stack',
    de: 'Docker-Compose-Vorlage von n8n, die n8n, Ollama, Qdrant und PostgreSQL zu einem einsatzbereiten lokalen KI-Stack bündelt',
    fr: "Modèle docker-compose de n8n regroupant n8n, Ollama, Qdrant et PostgreSQL en une pile IA locale prête à l'emploi",
    ja: 'n8n、Ollama、Qdrant、PostgreSQLをひとまとめにした、n8n提供のすぐ使えるローカルAIスタック用docker-composeテンプレート',
    zh: 'n8n官方打造的docker-compose模板，将n8n、Ollama、Qdrant和PostgreSQL整合为一套开箱即用的本地AI技术栈',
    es: 'Plantilla docker-compose de n8n que combina n8n, Ollama, Qdrant y PostgreSQL en una pila de IA local lista para usar',
    pt: 'Modelo docker-compose da n8n que reúne n8n, Ollama, Qdrant e PostgreSQL em uma stack de IA local pronta para uso',
    ar: 'قالب docker-compose من n8n يجمع بين n8n وOllama وQdrant وPostgreSQL في حزمة ذكاء اصطناعي محلية جاهزة للتشغيل',
    ko: 'n8n, Ollama, Qdrant, PostgreSQL을 하나로 묶은 n8n 제공의 바로 실행 가능한 로컬 AI 스택 docker-compose 템플릿',
  },
  lastVerifiedDate: '2026-09-18',
}
