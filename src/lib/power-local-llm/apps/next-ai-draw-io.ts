// Local AI App Directory — Next AI Draw.io by Dayuan Jiang (layer: AI chat editor for draw.io diagrams, web + desktop + MCP server)
// Added 2026-11-18 from the research package (localhosted rank 12; not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: official site (home, /en/about, /en/docs), GitHub repository, README, LICENSE (Apache-2.0), Releases (v0.5.1 and assets), docs/en/docker.md,
// docs/en/offline-deployment.md, docs/en/FAQ.md, env.example, package.json, GitHub profile of the maintainer.
// Notes:
// - Individual maintainer (GitHub user DayuanJiang), not a company. No privacy policy, terms or imprint exist on the site or in the repo (checked 2026-11-18).
//   The only contact is an email at jiang.jp. The maintainer's GitHub profile gives the location "Tokyo", but that is a profile field, not a company HQ,
//   and no policy/imprint names a country => HQ flag deliberately UNSET (owner rule: hobby/individual project, ask the owner; unattended run). Listed in the report.
// - Stars: GitHub API 37050 on 2026-11-18.
// - locality = 'hybrid': the app sends the request and the current diagram to the AI model the user picks (docs); 25 providers incl. Ollama/SGLang/OpenAI-compatible
//   for local models, plus cloud providers. The default provider in the README is AWS Bedrock. API keys stay in the browser (maker statement).
// - engine = 'external': no built-in model; provider and model are chosen in Settings.
// - price = 'free': Apache-2.0 app, no paid plan found; the demo site has a daily usage limit that your own API key lifts (docs). Provider API costs are separate.
// - hardware: depends on the model the user connects (variesByModel); README says small models tend to produce broken diagrams; FAQ suggests 32B+ for self-hosted models.
// - Install: Releases v0.5.1 ships .dmg (Apple Silicon and Intel), .exe (Setup and portable), .AppImage, .deb, .rpm; web demo needs no install; Docker one-liner exists.
// - No app store listings found.
// - Category: no diagram category exists in the taxonomy; mcp-servers-skills (it ships @next-ai-drawio/mcp-server) + dev-tools-testing-docs. Neither category has a comparison
//   segment in compare-schema.ts, so `compare` stays empty (nothing to compare like for like).
// Last upstream update: 2026-11-14 (last commit on the default branch; latest release v0.5.1 2026-10-31) => NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'next-ai-draw-io',
  name: 'Next AI Draw.io',
  categories: ['mcp-servers-skills', 'dev-tools-testing-docs'],
  interfaces: ['web', 'desktop', 'cli'],
  locality: 'hybrid', // diagram + request go to the AI provider the user selects; local models via Ollama/SGLang/OpenAI-compatible URL are supported (README)
  platforms: ['web', 'mac', 'win', 'linux', 'selfhosted'],
  worksWith: ['Claude Code', 'Cursor', 'Codex', 'VS Code', 'Ollama'],
  engine: 'external', // no built-in model; 25 providers selectable in Settings (README)
  license: 'Apache-2.0',
  price: 'free', // Apache-2.0 app; hosted demo has a daily limit lifted with your own API key (docs); provider costs are separate
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the model the user connects
  stars: 37050,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'agent'],
  mcpSupport: true, // README + site: @next-ai-drawio/mcp-server for Claude Code, Cursor, Codex, VS Code — verified 2026-11-18
  url: 'next-ai-drawio.jiang.jp',
  storeLinks: {
    github: 'https://github.com/DayuanJiang/next-ai-draw-io',
    web: 'https://next-ai-drawio.jiang.jp/en',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub Releases page for v0.5.1 listed Next-AI-Draw.io-0.5.1.dmg and -arm64.dmg (macOS), Next.AI.Draw.io.Setup.0.5.1.exe and a portable .exe (Windows), Next-AI-Draw.io-0.5.1.AppImage, .deb and .rpm (Linux). The README says to download the installer from the Releases page. A browser demo needs no install, and a docker run one-liner is documented.',
  tagline: {
    en: 'Open-source web, desktop and MCP app where you describe a diagram in chat and an AI draws it on an editable draw.io canvas, using the AI provider and model you choose.',
    de: 'Open-Source-App für Web, Desktop und MCP: Sie beschreiben ein Diagramm im Chat, und eine KI zeichnet es auf einer bearbeitbaren draw.io-Fläche, mit dem KI-Anbieter und Modell Ihrer Wahl.',
    fr: 'Application open source (web, bureau et MCP) où vous décrivez un diagramme dans un chat et où une IA le dessine sur un canevas draw.io modifiable, avec le fournisseur d\'IA et le modèle de votre choix.',
    ja: 'チャットで図を説明すると、AIが編集可能なdraw.ioキャンバスに描いてくれる、Web・デスクトップ・MCP対応のオープンソースアプリ。AIプロバイダーとモデルは自分で選べます。',
    zh: '开源的网页、桌面和 MCP 应用：在聊天中描述图表，AI 就会在可编辑的 draw.io 画布上绘制，AI 提供商和模型由您自己选择。',
    es: 'App de código abierto (web, escritorio y MCP) en la que describes un diagrama en un chat y una IA lo dibuja en un lienzo editable de draw.io, con el proveedor de IA y el modelo que elijas.',
    pt: 'App de código aberto (web, desktop e MCP) em que você descreve um diagrama no chat e uma IA o desenha em uma tela editável do draw.io, com o provedor de IA e o modelo que você escolher.',
    ar: 'تطبيق مفتوح المصدر (ويب وسطح مكتب وMCP) تصف فيه مخططًا في محادثة فيرسمه الذكاء الاصطناعي على لوحة draw.io قابلة للتعديل، باستخدام مزوّد الذكاء الاصطناعي والنموذج الذي تختاره.',
    ko: '채팅으로 다이어그램을 설명하면 AI가 편집 가능한 draw.io 캔버스에 그려 주는 오픈소스 웹·데스크톱·MCP 앱으로, AI 제공업체와 모델은 직접 고릅니다.',
  },
  reviewSlug: 'next-ai-draw-io-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.5.1',
    versionSourceUrl: 'https://github.com/DayuanJiang/next-ai-draw-io/releases/tag/v0.5.1',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-14', // last commit on the default branch 2026-11-14T00:13Z (GitHub API, 2026-11-18); latest release v0.5.1 published 2026-10-31
  lastUpstreamUpdateSource: 'https://github.com/DayuanJiang/next-ai-draw-io (last commit 2026-11-14; latest release v0.5.1 2026-10-31)',
}
