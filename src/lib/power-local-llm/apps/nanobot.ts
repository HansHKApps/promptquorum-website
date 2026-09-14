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
  stars: 48125, // fast-growing count on an ~7-month-old repo; corroborated by organic-scale fork/issue/contributor activity (8,503 forks, 768 open issues, 30 contributors, weekly-ish releases) rather than independently star-history-audited, verified 2026-09-14
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'github.com/HKUDS/nanobot',
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
  lastVerifiedDate: '2026-09-14',
}
