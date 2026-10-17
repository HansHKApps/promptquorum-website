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
  categories: ['sdks-libraries'],
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
    en: 'Open-source web data API that turns websites into clean, LLM-ready markdown or JSON, available hosted or self-hosted with Docker',
    de: 'Open-Source-Web-Daten-API, die Websites in saubere, LLM-taugliche Markdown- oder JSON-Daten umwandelt, gehostet oder per Docker selbst betreibbar',
    fr: "API de données web open source qui transforme des sites web en Markdown ou JSON propres, prêts pour les LLM, en version hébergée ou auto-hébergée avec Docker",
    ja: 'WebサイトをクリーンなマークダウンやJSONに変換してLLMにそのまま渡せるオープンソースのWebデータAPI。ホスト版もDockerによるセルフホストも可能',
    zh: '开源网页数据API，可将网站转换为干净、适合LLM使用的Markdown或JSON，支持托管使用或通过Docker自托管',
    es: 'API de datos web de código abierto que convierte sitios web en Markdown o JSON limpios y listos para LLM, disponible alojada o autoalojada con Docker',
    pt: 'API de dados da web de código aberto que transforma sites em Markdown ou JSON limpos e prontos para LLMs, disponível hospedada ou auto-hospedada com Docker',
    ar: 'واجهة بيانات ويب مفتوحة المصدر تحوّل المواقع إلى Markdown أو JSON نظيف جاهز لنماذج اللغة، متاحة كخدمة مستضافة أو مستضافة ذاتيًا عبر Docker',
    ko: '웹사이트를 깔끔한 LLM용 마크다운 또는 JSON으로 변환하는 오픈소스 웹 데이터 API로, 호스팅 버전과 Docker 셀프호스팅을 모두 지원',
  },
  reviewSlug: 'firecrawl-review', // dedicated PromptQuorum review - added 2026-10-17
  pqReview: { date: '2026-10-17', version: 'v2.11.0', versionSourceUrl: 'https://github.com/firecrawl/firecrawl/releases/tag/v2.11.0' },
  mcpSupport: true, // official firecrawl-mcp-server (MIT) at github.com/firecrawl/firecrawl-mcp-server, verified 2026-10-17
  compare: { localLlm: true, ollama: true, mcp: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-17', // GitHub API (latest release v2.11.0 on 2026-06-19; last push 2026-10-17, whichever is newer), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/firecrawl/firecrawl',
}
