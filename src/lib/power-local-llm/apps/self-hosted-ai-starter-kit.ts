// Local AI App Directory — Self-hosted AI Starter Kit (layer: workflow/orchestration template)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Curated by n8n; bundles n8n, Ollama, Qdrant, and PostgreSQL as a docker-compose
// template rather than a single standalone app — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'self-hosted-ai-starter-kit',
  name: 'Self-hosted AI Starter Kit',
  categories: ['one-click-installers', 'workflow-node-builders', 'rag-frameworks'],
  interfaces: ['web', 'cli'], // n8n's own web UI plus docker-compose CLI setup, verified 2026-09-18
  locality: 'local', // docker-compose template bundling local Ollama, Qdrant, and PostgreSQL — no cloud dependency required, verified 2026-09-18
  platforms: ['selfhosted'], // researched 2026-11-01 — github.com/n8n-io/self-hosted-ai-starter-kit: Docker Compose profiles; no native OS apps
  worksWith: ['Ollama', 'Qdrant', 'n8n'],
  engine: 'both', // ships Ollama as a bundled local inference engine, while n8n workflows can also call external providers, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 15323, // github.com/n8n-io/self-hosted-ai-starter-kit, verified 2026-11-02
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
  reviewSlug: 'self-hosted-ai-starter-kit-review', // dedicated PromptQuorum review — added 2026-09-19
  // No GitHub Releases or tags are published for this repo (checked 2026-09-25, re-checked 2026-11-02 via the GitHub API) — pqReview intentionally omitted rather than inventing a version.
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-25; a missing key = not stated there, never false.
  // multiVector false — the kit bundles Qdrant as its one fixed vector store; no alternative is documented as swappable within the template itself.
  // apiServer confirmed via n8n's own REST API, exposed on every self-hosted n8n instance the kit bundles: https://docs.n8n.io/connect/n8n-api/
  compare: { visualBuilder: true, localLlm: true, agents: true, multiVector: false, dockerDeploy: true, apiServer: true, ollama: true },
  lastVerifiedDate: '2026-11-02',
  // 2026-07-23 = latest commit on the default branch (README link fix only; the compose file last changed 2026-01-06). Read 2026-11-02 via the GitHub API.
  // The earlier value 2026-10-12 was the repo-level push date of an unmerged side branch (mlupton/add-updated-starter-kit), not an update to the kit on main. No releases or tags exist.
  lastUpstreamUpdate: '2026-07-23',
  lastUpstreamUpdateSource: 'https://github.com/n8n-io/self-hosted-ai-starter-kit/commits/main',
  installEffort: 'terminal-setup',
  installEvidence: 'github.com/n8n-io/self-hosted-ai-starter-kit checked 2026-11-02: no GitHub Releases or tags and no binary installer; the README install is git clone, cp .env.example .env, then docker compose --profile cpu|gpu-nvidia|gpu-amd up (Docker and Docker Compose required); n8n docs label the kit for testing only',
}
