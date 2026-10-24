// Local AI App Directory — Arynwood MCP (layer: chat-assistants — desktop chat client on Ollama with document search and MCP tools)
// Added 2026-10-24 on the owner's request. All facts below read from arynwood.com/mcp, arynwood.com/mcp-security and
// github.com/Arynwood-Technology/ArynwoodMCP (README, LICENSE, docs/windows.md, docs/supported-platforms.md, docs/installation.md,
// the v0.5.3 release and its asset list) on 2026-10-24 — no hands-on testing, no maker contact.
// The product has an official website (arynwood.com/mcp), so `url` is the website and the repo sits in storeLinks.github.
// Name check 2026-10-24: no other product named Arynwood MCP found (a web search returned only unrelated Aryn / Arryn AI companies).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'arynwood-mcp',
  name: 'Arynwood MCP',
  categories: ['general-chat-clients', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local', // default chat, memory and document search stay on the machine; optional features (web search, publishing, remote servers) send data out — see the review
  platforms: ['linux', 'win'], // Linux x86_64 AppImage + .deb; Windows x64 unsigned alpha installer; docs/supported-platforms.md: "macOS remains unsupported"
  worksWith: ['Ollama', 'Qdrant', 'OpenAI-compatible servers', 'Kdenlive (via Cutroom)', 'Stable Diffusion (A1111)'],
  engine: 'external', // chat runs through a separately installed Ollama (or a registered OpenAI-compatible endpoint)
  license: 'Source-available (Arynwood MCP Source-Available License)', // LICENSE file: personal or internal evaluation/use only, no redistribution or hosted service; website: "not an open-source license"; GitHub API reports NOASSERTION. Read 2026-10-24
  price: 'free', // no price is listed anywhere; packages are public downloads. Setup services are quoted on request. Licence limits use to personal/internal.
  hardware: { ramGb: 16, vramGb: null, cpuOnly: true, variesByModel: true }, // docs/supported-platforms.md: 16 GB RAM minimum, 20 GB disk; GPU optional for chat (CPU mode, slow), NVIDIA 12 GB VRAM recommended for the GPU tools — read 2026-10-24
  stars: 0, // github.com/Arynwood-Technology/ArynwoodMCP via GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'docs', 'agent'],
  url: 'arynwood.com/mcp',
  storeLinks: {
    github: 'https://github.com/Arynwood-Technology/ArynwoodMCP',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'GitHub Releases v0.5.3 ships arynwood-mcp_0.5.3_amd64.AppImage, arynwood-mcp_0.5.3_amd64.deb and arynwood-mcp_0.5.3_x64-setup.exe plus SHA256SUMS.txt / SHA256SUMS-windows.txt; the same files are linked from arynwood.com/mcp. docs/windows.md: the Windows installer is unsigned (SmartScreen may warn) and a clean-machine install is not yet manually validated; Ollama (and Qdrant for knowledge search) must be installed separately. Alpha software. checked 2026-10-24',
  tagline: {
    en: 'Alpha desktop AI workspace on Ollama with document search, memory and MCP tools, for Linux and Windows',
    de: 'Desktop-KI-Arbeitsbereich in der Alpha auf Ollama-Basis mit Dokumentensuche, Gedächtnis und MCP-Werkzeugen für Linux und Windows',
    fr: 'Espace de travail IA de bureau en alpha sur Ollama, avec recherche de documents, mémoire et outils MCP, pour Linux et Windows',
    ja: 'Ollama上で動くデスクトップAIワークスペース（アルファ版）。文書検索、メモリ、MCPツール対応、Linux・Windows向け',
    zh: '基于 Ollama 的桌面 AI 工作区（Alpha），含文档搜索、记忆和 MCP 工具，面向 Linux 和 Windows',
    es: 'Espacio de trabajo de IA de escritorio en alfa sobre Ollama, con búsqueda en documentos, memoria y herramientas MCP, para Linux y Windows',
    pt: 'Espaço de trabalho de IA para desktop em alfa sobre o Ollama, com busca em documentos, memória e ferramentas MCP, para Linux e Windows',
    ar: 'مساحة عمل ذكاء اصطناعي لسطح المكتب في مرحلة ألفا على Ollama، مع بحث في المستندات وذاكرة وأدوات MCP، لنظامي Linux وWindows',
    ko: 'Ollama 기반 데스크톱 AI 워크스페이스(알파). 문서 검색, 메모리, MCP 도구 지원, Linux·Windows용',
  },
  mcpSupport: true, // README/website: MCP tool integrations (Kdenlive editing through Cutroom's MCP server); security brief describes per-call tool approval
  reviewSlug: 'arynwood-mcp-review',
  // Comparison attributes (desktop chat segment), each verified against the website/README on 2026-10-24; voice is not stated for the chat, so it stays unset (not stated, never false).
  compare: { builtInEngine: false, ollama: true, customEndpoint: true, mcp: true, fileChat: true },
  pqReview: {
    date: '2026-10-24',
    version: '0.5.3',
    versionSourceUrl: 'https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3',
  },
  verdict: 'Best for Linux or Windows users with 16 GB of RAM who want an Ollama-based chat, document-search and MCP workspace in one app and accept an unsigned alpha under a source-available licence limited to personal or internal use; limited by no macOS build, no enforced offline mode or sandbox and a project about six weeks old.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // GitHub: release v0.5.3 published 2026-10-23T23:33:36Z (latest push 2026-10-23T23:33:38Z), read via the GitHub API 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/Arynwood-Technology/ArynwoodMCP/releases/tag/v0.5.3',
}
