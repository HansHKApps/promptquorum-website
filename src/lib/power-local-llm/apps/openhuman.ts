// Local AI App Directory — OpenHuman by Tiny Human Intelligence Inc (TinyHumans) (layer: personal AI agent harness with built-in memory)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: maker website (tinyhumans.ai/openhuman), GitHub repository + README + Releases (gh api), docs on tinyhumans.gitbook.io
// (getting started, Privacy Mode, local and BYOK models), privacy policy and terms (tinyhumans.ai/privacy, /terms), tinyhumans.ai/pricing.
// Notes:
// - License GPL-3.0 (GitHub API spdx_id + README + site FAQ).
// - Stars: GitHub API 42742 on 2026-11-18 (the research package carried 42709).
// - engine = 'external': the app does not install a runtime or weights; local models run through Ollama / LM Studio / MLX / OpenAI-compatible endpoints the user installs,
//   cloud models through managed TinyHumans routing or the user's own keys (docs, local-and-byok-models page).
// - locality = 'hybrid': default setup uses OpenHuman-hosted services for sign-in, model routing, OAuth, tool calls and web search; Privacy Mode `local_only` restricts
//   inference and network tools to local, but speech-to-text is not covered by it (docs, Privacy Mode page).
// - hardware.ramGb 4 = the docs' recommended RAM ("plan for 16 GB or more" for very large mailboxes/repos or a local model). No GPU requirement is stated.
// - price = 'free': app is GPL-3.0 and free. Pricing of the managed TinyHumans services for OpenHuman was NOT found (tinyhumans.ai/pricing covers OpenCompany/Medulla plans and
//   does not mention OpenHuman), so it is not claimed. Sign-in screen exists on first run; whether it can be skipped is unverified.
// - Install: GitHub release v0.64.15 ships .dmg (Apple Silicon + Intel), .exe, .msi, .AppImage, .deb; the README names them and a curl/PowerShell install script.
// - HQ country US: the privacy policy (last updated 2026-10-14) and the terms name Tiny Human Intelligence Inc, 131 Continental Dr, Suite 305, Newark, Delaware 19713, United States.
//   No governing-law clause or separate imprint page found.
// - Project is labelled "early beta" by its own README.
// Last upstream update: 2026-11-18 (last commit; latest release v0.64.15 on 2026-10-09) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openhuman',
  name: 'OpenHuman',
  categories: ['personal-assistants', 'autonomous-agents', 'agent-memory', 'mcp-servers-skills'],
  interfaces: ['desktop', 'cli', 'library'],
  locality: 'hybrid', // managed TinyHumans services by default; Privacy Mode local_only restricts inference and network tools but not speech-to-text (docs)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'MLX'],
  engine: 'external', // local runtimes or BYOK/managed cloud models; the app installs no runtime or weights
  license: 'GPL-3.0',
  price: 'free', // app is GPL-3.0; pricing of the managed TinyHumans services for OpenHuman not found
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // docs recommend 4 GB RAM, 16 GB+ for large ingests or a local model; no GPU requirement stated
  stars: 42742,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'tinyhumans.ai/openhuman',
  storeLinks: {
    github: 'https://github.com/tinyhumansai/openhuman',
    web: 'https://tinyhumans.ai/openhuman',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v0.64.15 listed OpenHuman_0.64.15_aarch64.dmg, _x64.dmg, _x64-setup.exe, _x64_en-US.msi, .AppImage (amd64, aarch64) and .deb (amd64, arm64). The README says "download the desktop app from tinyhumans.ai/openhuman or the latest release" and also offers a curl / PowerShell install script. The project labels itself early beta.',
  tagline: {
    en: 'Open-source desktop AI agent with built-in memory, 100+ app integrations, MCP and skills, and support for local models through Ollama, LM Studio or MLX.',
    de: 'Quelloffener KI-Agent für den Desktop mit eingebautem Gedächtnis, mehr als 100 App-Integrationen, MCP und Skills sowie Unterstützung für lokale Modelle über Ollama, LM Studio oder MLX.',
    fr: 'Agent IA de bureau open source avec mémoire intégrée, plus de 100 intégrations d\'applications, MCP et skills, et prise en charge de modèles locaux via Ollama, LM Studio ou MLX.',
    ja: 'メモリを内蔵し、100以上のアプリ連携、MCP、スキルに対応し、Ollama、LM Studio、MLX経由でローカルモデルも使えるオープンソースのデスクトップAIエージェントです。',
    zh: '开源桌面 AI 智能体，内置记忆，支持 100 多个应用集成、MCP 和技能，并可通过 Ollama、LM Studio 或 MLX 使用本地模型。',
    es: 'Agente de IA de escritorio de código abierto con memoria integrada, más de 100 integraciones de apps, MCP y skills, y compatibilidad con modelos locales mediante Ollama, LM Studio o MLX.',
    pt: 'Agente de IA de desktop de código aberto com memória integrada, mais de 100 integrações de apps, MCP e skills, e suporte a modelos locais via Ollama, LM Studio ou MLX.',
    ar: 'وكيل ذكاء اصطناعي مفتوح المصدر لسطح المكتب بذاكرة مدمجة وأكثر من 100 تكامل مع التطبيقات ودعم MCP والمهارات، ويدعم النماذج المحلية عبر Ollama أو LM Studio أو MLX.',
    ko: '메모리를 내장하고 100개 이상의 앱 연동, MCP, 스킬을 지원하며 Ollama, LM Studio, MLX를 통해 로컬 모델도 쓸 수 있는 오픈소스 데스크톱 AI 에이전트입니다.',
  },
  reviewSlug: 'openhuman-review',
  // Comparison attributes (autonomous-agents segment): each value from the project's README and docs, read 2026-11-18; a missing key = not stated there, never false.
  // localLlm/ollama: README "Local models (Ollama, LM Studio, MLX)"; codeExecution: README "shell and coder" native tools; webBrowsing: README "drives a real Chrome browser";
  // memory: README built-in memory recalled every turn; sandbox: README "sandboxed execution (OS jail or Docker)".
  compare: { localLlm: true, ollama: true, codeExecution: true, webBrowsing: true, memory: true, sandbox: true },
  pqReview: {
    date: '2026-11-18',
    version: '0.64.15',
    versionSourceUrl: 'https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.15',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://tinyhumans.ai/privacy',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // GitHub last commit 2026-11-18T09:59Z (API, 2026-11-18); latest release v0.64.15 published 2026-10-09
  lastUpstreamUpdateSource: 'https://github.com/tinyhumansai/openhuman (last commit 2026-11-18; latest release 2026-10-09)',
}
