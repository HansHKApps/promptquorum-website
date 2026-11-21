// Local AI App Directory — Firecrawl (layer: web scraping / crawling API for LLM pipelines)
// Added 2026-10-17 on Hans's request (found via localhosted.com). Facts verified 2026-10-17 from
// firecrawl.dev, github.com/firecrawl/firecrawl (LICENSE, SELF_HOST.md, docker-compose.yaml) and
// github.com/firecrawl/firecrawl-mcp-server. Qualifies as a hybrid tool: the AGPL-3.0 core is self-hostable
// via Docker Compose, and its AI-backed features can use Ollama or an OpenAI-compatible endpoint instead of
// a cloud provider; the hosted API (with proprietary Fire-engine) is the easiest path.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'firecrawl',
  name: 'Firecrawl',
  categories: ['web-scraping-for-ai', 'sdks-libraries'],
  interfaces: ['library', 'cli', 'web'], // REST API + Python/Node.js/Go/Rust/Java/Elixir SDKs + CLI + hosted dashboard, verified 2026-10-17
  locality: 'hybrid', // self-hostable core, but the hosted API and its Fire-engine proxy/rendering layer are cloud, verified 2026-10-17
  platforms: ['web', 'linux', 'mac', 'win'], // hosted API on any OS; self-hosting via Docker Compose, verified 2026-10-17
  worksWith: ['Ollama', 'OpenAI API', 'MCP'], // SELF_HOST.md: "Connect OpenAI, an OpenAI-compatible endpoint, or Ollama when a feature needs it", verified 2026-10-17
  engine: 'external',
  license: 'AGPL-3.0', // verified via GitHub API 2026-10-17; the Fire-engine used by the hosted service is proprietary and not part of the open-source repo
  price: 'freemium', // 1,000 free credits/month, paid Hobby/Standard/Growth/Scale plans, verified on firecrawl.dev 2026-10-17
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // scraping/crawling server; any LLM-backed extraction runs on whichever provider (incl. local Ollama) is configured, verified 2026-10-17
  stars: 192265, // github.com/firecrawl/firecrawl, verified via GitHub API 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['build', 'agent', 'docs'],
  url: 'firecrawl.dev',
  storeLinks: {
    web: 'https://www.firecrawl.dev',
    github: 'https://github.com/firecrawl/firecrawl',
  },
  installEffort: 'hosted', // see InstallEffortKey in ./types.ts
  installEvidence: 'firecrawl.dev: sign up for the hosted API (1,000 free credits/month, no card); self-hosting is the multi-step Docker Compose path in SELF_HOST.md. checked 2026-10-17',
  tagline: {
    en: 'Knowledge infrastructure for AI agents: web data plus the Alexandria library of 550+ data providers through one API, MCP or CLI, hosted or self-hosted with Docker',
    de: 'Wissensinfrastruktur für KI-Agenten: Web-Daten plus die Alexandria-Bibliothek mit über 550 Datenanbietern über eine API, MCP oder CLI, gehostet oder per Docker selbst betreibbar',
    fr: 'Infrastructure de connaissances pour agents IA : données web et bibliothèque Alexandria de plus de 550 fournisseurs via une API, MCP ou CLI, en version hébergée ou auto-hébergée avec Docker',
    ja: 'AIエージェント向けのナレッジ基盤。Webデータと550以上のデータプロバイダーを備えたAlexandriaライブラリを、1つのAPI・MCP・CLIで提供。ホスト版もDockerによるセルフホストも可能',
    zh: '面向AI智能体的知识基础设施：网页数据加上汇集550多家数据提供方的Alexandria资料库，通过一个API、MCP或CLI使用，支持托管使用或通过Docker自托管',
    es: 'Infraestructura de conocimiento para agentes de IA: datos web y la biblioteca Alexandria con más de 550 proveedores mediante una API, MCP o CLI, alojada o autoalojada con Docker',
    pt: 'Infraestrutura de conhecimento para agentes de IA: dados da web e a biblioteca Alexandria com mais de 550 provedores por meio de uma API, MCP ou CLI, hospedada ou auto-hospedada com Docker',
    ar: 'بنية تحتية للمعرفة لوكلاء الذكاء الاصطناعي: بيانات الويب إضافةً إلى مكتبة Alexandria التي تضم أكثر من 550 مزوّد بيانات عبر API أو MCP أو CLI واحدة، كخدمة مستضافة أو مستضافة ذاتيًا عبر Docker',
    ko: 'AI 에이전트를 위한 지식 인프라: 웹 데이터와 550개 이상의 데이터 제공자를 갖춘 Alexandria 라이브러리를 하나의 API, MCP 또는 CLI로 제공하며, 호스팅 버전과 Docker 셀프호스팅을 모두 지원',
  },
  reviewSlug: 'firecrawl-review', // dedicated PromptQuorum review - added 2026-10-17
  pqReview: { date: '2026-10-17', version: 'v2.11.0', versionSourceUrl: 'https://github.com/firecrawl/firecrawl/releases/tag/v2.11.0' },
  mcpSupport: true, // official firecrawl-mcp-server (MIT) at github.com/firecrawl/firecrawl-mcp-server, verified 2026-10-17
  compare: { localLlm: true, ollama: true, mcp: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-17', // GitHub API (latest release v2.11.0 on 2026-06-19; last push 2026-10-17, whichever is newer), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/firecrawl/firecrawl',
}
