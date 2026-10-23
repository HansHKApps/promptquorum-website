// Local AI App Directory — LibreDB Studio (layer: code-development — browser-based SQL IDE with an optional AI agent that can run on a local Ollama model)
// Added 2026-10-23 on the owner's request (found via localhosted.com). All facts below read from libredb.org (home, security model, privacy policy,
// platform page) and github.com/libredb/libredb-studio (README, package.json, Releases, GitHub API) on 2026-10-23 — no hands-on testing.
// LibreDB Studio is primarily a database editor; it qualifies for the directory on its AI features (Plan/Agent mode, query explainer, data profiler),
// which accept Gemini, OpenAI, a local Ollama model or any OpenAI-compatible endpoint (LM Studio, LiteLLM, vLLM). With no LLM_* setting the AI is off.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'libredb-studio',
  name: 'LibreDB Studio',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'], // README: "browser, phone, Windows, MacOS, Linux desktop"; self-hosted via Docker, npx, Helm, Homebrew, winget, deb/rpm/snap; native desktop app only as Linux AppImage/deb in the 1.0.0 release assets — read 2026-10-23
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'LiteLLM', 'OpenAI API', 'Gemini API'],
  engine: 'external',
  license: 'MIT', // README + GitHub API license field (spdx MIT), read 2026-10-23; libredb.org: "MIT license. All of it, nothing held back." The separate LibreDB Platform governance layer is paid beyond 4 seats
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // the editor is a Node.js web app; any local AI model runs on the user's own Ollama or OpenAI-compatible server — read 2026-10-23
  stars: 1267, // github.com/libredb/libredb-studio via GitHub API, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['code', 'agent', 'docs'],
  url: 'libredb.org',
  storeLinks: {
    web: 'https://libredb.org',
    github: 'https://github.com/libredb/libredb-studio',
  },
  installEffort: 'one-command', // see InstallEffortKey in ./types.ts
  installEvidence: 'README Quick Start: docker run -p 3000:3000 ghcr.io/libredb/libredb-studio:latest or npx @libredb/studio (Node.js 24+); also brew install libredb/tap/libredb-studio and winget install LibreDB.Studio. GitHub Releases 1.0.0 additionally ships libredb-studio-desktop-1.0.0-linux-x64.AppImage / -arm64.AppImage and libredb-studio-desktop_1.0.0_amd64.deb / _arm64.deb (a double-click desktop app on Linux only; no macOS or Windows desktop installer asset was listed). checked 2026-10-23',
  tagline: {
    en: 'Open-source, browser-based SQL editor for 41 database engines whose AI agent can run on a local Ollama model',
    de: 'Quelloffener, browserbasierter SQL-Editor für 41 Datenbank-Engines, dessen KI-Agent auf einem lokalen Ollama-Modell laufen kann',
    fr: "Éditeur SQL open source dans le navigateur pour 41 moteurs de bases de données, dont l'agent IA peut tourner sur un modèle Ollama local",
    ja: '41種類のデータベースエンジンに対応するオープンソースのブラウザ型SQLエディタ。AIエージェントはローカルのOllamaモデルでも動かせます',
    zh: '开源的浏览器端SQL编辑器，支持41种数据库引擎，其AI智能体可运行在本地Ollama模型上',
    es: 'Editor SQL de código abierto en el navegador para 41 motores de bases de datos, cuyo agente de IA puede ejecutarse en un modelo Ollama local',
    pt: 'Editor SQL de código aberto no navegador para 41 mecanismos de banco de dados, cujo agente de IA pode rodar em um modelo Ollama local',
    ar: 'محرّر SQL مفتوح المصدر يعمل في المتصفح ويدعم 41 محرك قواعد بيانات، ويمكن لوكيل الذكاء الاصطناعي فيه العمل على نموذج Ollama محلي',
    ko: '41개 데이터베이스 엔진을 지원하는 오픈소스 브라우저 기반 SQL 편집기로, AI 에이전트를 로컬 Ollama 모델에서 실행할 수 있습니다',
  },
  mcpSupport: true, // README: audit trail records "agent and MCP operations"; integration tests cover "the MCP server" and an MCP run_read_query tool — read 2026-10-23
  reviewSlug: 'libredb-studio-review',
  // Comparison attributes (coding-assistants segment), each from the README on 2026-10-23. vscode/jetbrains are false (a standalone browser/desktop app, not a plugin);
  // autocomplete is left unset: the schema-aware Monaco completion is not stated to be AI inline completion.
  compare: { localLlm: true, ollama: true, vscode: false, jetbrains: false, agentMode: true, mcp: true },
  pqReview: {
    date: '2026-10-23',
    version: '1.0.0',
    versionSourceUrl: 'https://github.com/libredb/libredb-studio/releases/tag/1.0.0',
  },
  verdict: 'Best for teams that want one self-hosted, MIT-licensed SQL editor across many database engines and are happy to point its optional AI at a local Ollama model; limited by Agent mode reading only seven engines, a Node.js/Docker setup instead of a plain installer on macOS and Windows, and AI claims that were not tested.',
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-23', // GitHub: newest release libredb-studio-0.1.102 published 2026-10-23T18:41:20Z, latest push 2026-10-23T20:27:33Z (feature release 1.0.0 on 2026-10-17), read via the GitHub API 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/libredb/libredb-studio/releases',
}
