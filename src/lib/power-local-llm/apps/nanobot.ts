// Local AI App Directory — nanobot (layer: agent)
// Added per directory-add-5-apps sweep — one of the top standalone tools
// missing from a user-supplied app list cross-check (2026-09-14).
// Disambiguation: this is github.com/HKUDS/nanobot (personal-agent
// framework), NOT the unrelated, smaller nanobot-ai/nanobot MCP-host
// project of the same name — verified 2026-09-14.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nanobot',
  name: 'nanobot',
  categories: ['personal-assistants', 'autonomous-agents'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'OpenAI API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // an agent loop that calls out to an OpenAI-compatible, local Ollama, or local vLLM backend rather than running inference in-process — GPU need (if any) depends entirely on the chosen backend, verified 2026-09-14
  stars: 49657, // fast-growing count on an ~9-month-old repo; corroborated by organic-scale fork/issue/contributor activity (8,700 forks, 868 open issues, 100+ contributors, regular releases) rather than independently star-history-audited, GitHub API read 2026-10-30
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'nanobot.wiki', // official site/docs (GitHub repo homepage field) — repo moved to storeLinks.github per feature-app-post check 5, verified 2026-10-30
  storeLinks: { github: 'https://github.com/HKUDS/nanobot' },
  installEffort: 'one-command', // see InstallEffortKey in ./types.ts
  installEvidence: 'README Install section: official installer `curl -fsSL .../scripts/install.sh | sh` (macOS/Linux) and `irm .../install.ps1 | iex` (Windows PowerShell), or `uv tool install nanobot-ai` / pip; GitHub Releases v0.4.0 lists Python packages only, no .dmg/.exe/.AppImage. checked 2026-10-30',
  tagline: {
    en: 'Self-hosted personal AI agent with persistent memory, MCP tools, and chat-app integrations',
    de: 'Selbst gehosteter persönlicher KI-Agent mit dauerhaftem Gedächtnis, MCP-Tools und Chat-App-Integrationen',
    fr: 'Agent IA personnel auto-hébergé avec mémoire persistante, outils MCP et intégrations d’applications de chat',
    ja: '永続メモリ、MCPツール、チャットアプリ連携を備えたセルフホスト型パーソナルAIエージェント',
    zh: '具备持久记忆、MCP工具和聊天应用集成的自托管个人AI智能体',
    es: 'Agente de IA personal autoalojado con memoria persistente, herramientas MCP e integraciones con apps de chat',
    pt: 'Agente de IA pessoal auto-hospedado com memória persistente, ferramentas MCP e integrações com apps de chat',
    ar: 'وكيل ذكاء اصطناعي شخصي مستضاف ذاتيًا بذاكرة دائمة وأدوات MCP وتكامل مع تطبيقات الدردشة',
    ko: '영구 메모리, MCP 도구, 채팅 앱 연동을 갖춘 셀프호스팅 개인 AI 에이전트',
  },
  reviewSlug: 'nanobot-review', // dedicated PromptQuorum review — added 2026-09-14
  mcpSupport: true, // tagline claims "MCP tools" as a first-class feature — verified 2026-09-14
  pqReview: { date: '2026-10-30', version: 'v0.4.0', versionSourceUrl: 'https://github.com/HKUDS/nanobot/releases/tag/v0.4.0' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, ollama: true, memory: true, toolUse: true },
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-30', // GitHub API pushed_at 2026-10-30 (latest release v0.4.0 on 2026-10-28), read 2026-10-30
  lastUpstreamUpdateSource: 'https://github.com/HKUDS/nanobot',
}
