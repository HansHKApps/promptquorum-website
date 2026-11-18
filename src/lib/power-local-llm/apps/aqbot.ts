// Local AI App Directory — AQBot (layer: free, open-source AGPL-3.0 desktop AI client; multi-provider chat, chat Agent mode, ACP agent workbench, MCP client, sqlite-vec knowledge base, local API gateway for coding tools)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: app.aqbot.top (home page, /download, /faq, /guide/getting-started, /guide/providers; /privacy, /terms, /about, /imprint, /contact, /legal and /privacy-policy return 404),
// GitHub repository AQBot-Desktop/AQBot (API metadata, README (Chinese original), releases v0.0.163 to v0.0.165 with asset lists, commits, organization profile: type Organization, no location, no email).
// Notes:
// - Stars: GitHub API 927 on 2026-11-18 (owner's list said 923). Repo created 2026-03-24, owner is the organization AQBot-Desktop.
// - License: AGPL-3.0 (GitHub API; README; website FAQ).
// - Version: v0.0.165, published 2026-10-26 (non-prerelease); v0.0.164 on 2026-10-19, v0.0.163 on 2026-10-09. Last commit on main 2026-10-31T14:11Z (repository pushed_at 2026-10-31T14:59Z).
// - Install: v0.0.165 ships AQBot_0.0.165_aarch64.dmg and _x64.dmg (macOS), _x64-setup.exe, _arm64-setup.exe, _x64_en-US.msi, _arm64_en-US.msi and windows-x64/arm64-portable.zip (Windows),
//   AQBot_0.0.165_amd64.AppImage, _amd64.deb, _arm64.deb, AQBot-0.0.165-1.x86_64.rpm and .aarch64.rpm (Linux); the download page links the same files. Maker statement (website FAQ and download page, README):
//   the macOS build is signed with the project's own certificate, not an Apple Developer ID, so macOS may report it as damaged or from an unverified developer; workaround Control-click Open or System Settings → Privacy & Security.
//   How the Windows and Linux packages are signed was NOT checked (the .sig files in the release are updater signatures).
// - engine = 'external': AQBot is described as a client; it connects to cloud providers and to OpenAI-compatible local servers such as Ollama (website FAQ); no built-in model runner found in the sources read.
// - locality 'hybrid': cloud providers (OpenAI, Claude, Gemini, DeepSeek, Qwen, Zhipu AI, xAI, AWS Bedrock, OpenAI-compatible endpoints) or local servers such as Ollama. Maker statement: app data lives in ~/.aqbot and
//   ~/Documents/aqbot, API keys are AES-256 encrypted with a local master key. No privacy policy exists on the site; whether usage statistics or error reports are sent is not stated. PromptQuorum did not inspect network traffic.
// - Price: free app (website FAQ); model providers are billed by the provider, local servers cost nothing.
// - HQ country: NOT set. The website has no privacy, terms, about, imprint or contact page (all 404), the README, FAQ and download page name no company, address, governing law or country, and the GitHub organization
//   profile has no location. Owner decision 2026-11-18: no flag when the country is not clear from a primary source.
// - Categories: general-chat-clients first (desktop-chat compare segment), then document-pdf-chat (sqlite-vec knowledge base), code-assistants-ide-plugins (chat Agent mode edits files and runs commands; ACP workbench drives coding agents)
//   and routers-gateways (local API gateway for Claude Code, Codex, OpenCode, Gemini CLI, Cursor). Owner's list: coding agents, desktop chat, document chat.
// - Compare (desktop-chat segment): ollama, customEndpoint, mcp and fileChat are set from the website FAQ and README. builtInEngine and voice are not set: no built-in model runner and no voice feature are documented.
// - Mobile: README and website list macOS, Windows and Linux only; no iPhone or Android build, so no platform-roundup entry.
// Last upstream update: 2026-10-31 (last commit on main, GitHub API 2026-11-18; latest release v0.0.165 on 2026-10-26) → NOT stale (3-month rule; 18 days).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aqbot',
  name: 'AQBot',
  categories: ['general-chat-clients', 'document-pdf-chat', 'code-assistants-ide-plugins', 'routers-gateways'],
  interfaces: ['desktop'],
  locality: 'hybrid', // cloud providers or local servers such as Ollama; app data and files stay in ~/.aqbot and ~/Documents/aqbot according to the maker
  platforms: ['mac', 'win', 'linux'], // README + website: macOS (Apple silicon, Intel), Windows 10/11 (x64, ARM64), Linux (x64, ARM64)
  worksWith: ['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Ollama', 'AWS Bedrock', 'Claude Code', 'Codex CLI', 'Gemini CLI', 'OpenCode', 'Cursor', 'Cherry Studio', 'Kelivo'], // website + README
  engine: 'external', // client for providers and local servers; no built-in model runner documented
  license: 'AGPL-3.0', // GitHub API, README and website FAQ
  price: 'free', // website FAQ: free to download and use; providers billed separately
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // no memory or GPU floor published; depends on the provider or local server
  stars: 927,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'docs', 'agent', 'code', 'serve'],
  url: 'app.aqbot.top',
  storeLinks: {
    github: 'https://github.com/AQBot-Desktop/AQBot',
    web: 'https://app.aqbot.top',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v0.0.165 listed AQBot_0.0.165_aarch64.dmg and AQBot_0.0.165_x64.dmg (macOS), AQBot_0.0.165_x64-setup.exe, AQBot_0.0.165_arm64-setup.exe, two MSI installers and two portable ZIP files (Windows), plus AQBot_0.0.165_amd64.AppImage, DEB and RPM packages (Linux); the website download page links the same files. The macOS build is signed with the project\'s own certificate, not an Apple Developer ID (maker statement), so macOS may show a warning on first launch.',
  tagline: {
    en: 'Free, open-source desktop AI client for macOS, Windows and Linux with multi-provider chat, agents, MCP tools, a document knowledge base and a local API gateway for coding tools. According to the maker, the app is free (AGPL-3.0); model providers are billed separately',
    de: 'Kostenloser, quelloffener Desktop-KI-Client für macOS, Windows und Linux mit Chat für mehrere Anbieter, Agenten, MCP-Werkzeugen, Dokumenten-Wissensbasis und lokalem API-Gateway für Coding-Tools. Laut Hersteller ist die App kostenlos (AGPL-3.0); Modellanbieter werden separat abgerechnet',
    fr: 'Client IA de bureau gratuit et open source pour macOS, Windows et Linux, avec discussion multi-fournisseurs, agents, outils MCP, base de connaissances documentaire et passerelle API locale pour les outils de programmation. Selon l’éditeur, l’application est gratuite (AGPL-3.0) ; les fournisseurs de modèles sont facturés séparément',
    ja: 'macOS・Windows・Linux対応の無料オープンソースのデスクトップAIクライアント。複数プロバイダーのチャット、エージェント、MCPツール、ドキュメント用ナレッジベース、コーディングツール向けのローカルAPIゲートウェイを備えています。開発元によれば、アプリは無料（AGPL-3.0）で、モデルプロバイダーの利用料は別途かかります',
    zh: '免费开源的桌面 AI 客户端，支持 macOS、Windows 和 Linux，提供多服务商对话、智能体、MCP 工具、文档知识库，以及面向编程工具的本地 API 网关。据开发者称，应用免费（AGPL-3.0），模型服务商另行计费',
    es: 'Cliente de IA de escritorio gratuito y de código abierto para macOS, Windows y Linux, con chat multiproveedor, agentes, herramientas MCP, base de conocimiento de documentos y pasarela API local para herramientas de programación. Según el desarrollador, la app es gratuita (AGPL-3.0); los proveedores de modelos se facturan aparte',
    pt: 'Cliente de IA para desktop gratuito e de código aberto para macOS, Windows e Linux, com chat multiprovedor, agentes, ferramentas MCP, base de conhecimento de documentos e gateway de API local para ferramentas de programação. Segundo o desenvolvedor, o app é gratuito (AGPL-3.0); os provedores de modelos são cobrados à parte',
    ar: 'عميل ذكاء اصطناعي مجاني ومفتوح المصدر لسطح المكتب على macOS وWindows وLinux، مع دردشة متعددة المزوّدين ووكلاء وأدوات MCP وقاعدة معرفة للمستندات وبوابة API محلية لأدوات البرمجة. بحسب المطوّر، التطبيق مجاني (AGPL-3.0)، ويُحاسَب مزوّدو النماذج بشكل منفصل',
    ko: 'macOS, Windows, Linux용 무료 오픈소스 데스크톱 AI 클라이언트로, 여러 제공업체 채팅, 에이전트, MCP 도구, 문서 지식 베이스, 코딩 도구용 로컬 API 게이트웨이를 갖추고 있습니다. 개발사에 따르면 앱은 무료(AGPL-3.0)이며 모델 제공업체 비용은 별도로 청구됩니다',
  },
  reviewSlug: 'aqbot-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.0.165',
    versionSourceUrl: 'https://github.com/AQBot-Desktop/AQBot/releases/tag/v0.0.165',
  },
  // Comparison attributes: each value verified against the project's website FAQ and README on 2026-11-18; a missing key = not stated there, never false.
  compare: { ollama: true, customEndpoint: true, mcp: true, fileChat: true }, // FAQ: local servers such as Ollama and any OpenAI-compatible endpoint; MCP client over stdio/SSE/StreamableHTTP; README: sqlite-vec knowledge base
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-10-31', // last commit on main 2026-10-31T14:11:20Z (GitHub API 2026-11-18); latest release v0.0.165 published 2026-10-26
  lastUpstreamUpdateSource: 'https://github.com/AQBot-Desktop/AQBot (last commit 2026-10-31; latest release v0.0.165, 2026-10-26)',
}
