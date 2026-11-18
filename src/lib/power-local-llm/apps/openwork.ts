// Local AI App Directory — OpenWork by Different AI, Inc. (layer: desktop AI agent app for your own files, built on OpenCode)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: official website (home, pricing, download, contact), privacy policy and terms (openworklabs.com/privacy, /terms,
// /terms/subscription), GitHub repository, README, LICENSE and releases (gh api), and third-party reviews (UC Strategies, andrew.ooo).
// Notes:
// - License: README says everything outside ee/ is MIT (desktop app and core platform); ee/ (OpenWork Den) is under the OpenWork EE License
//   (source-available; free for up to 5 users, 30-day evaluation, dev/test; each ee/ release converts to MIT after two years). Versions released
//   before the EE license remain under FSL-1.1-MIT. GitHub's detector shows NOASSERTION. The tile license names the desktop-app license first.
// - Stars: GitHub API 24555 on 2026-11-18 (the package carried 24531 from the localhosted listing).
// - engine = 'external': models come from the user's own cloud keys or local models via Ollama / OpenAI-compatible servers (README); no built-in engine.
// - hardware: no RAM/GPU requirement is stated anywhere; requirement depends on the model the user connects, so variesByModel is true.
// - Install: GitHub release v0.18.68 (2026-11-18) ships openwork-mac-{arm64,x64}.dmg, openwork-win-{x64,arm64}.exe, openwork-linux-{x64,arm64}.AppImage and tar.gz.
//   The release also carries separate openwork-cloud-* and openwork-enterprise-* builds (not the public app).
// - HQ country US: privacy policy names Different AI, Inc. d/b/a OpenWork at 28 Geary St, San Francisco, CA; the policy is governed by US law; the terms
//   (Delaware governing law/arbitration) and subscription terms repeat the San Francisco address.
// - Name collisions: an unrelated npm package called "openwork" (per a pull request in the maker's repo) and a different "Openwork" app from accomplish.ai
//   (third-party blog); neither is this tile.
// Last upstream update: 2026-11-18 (latest release v0.18.68 and last commit both 2026-11-18) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openwork',
  name: 'OpenWork',
  categories: ['computer-browser-agents', 'general-chat-clients', 'mcp-servers-skills'],
  interfaces: ['desktop'],
  locality: 'hybrid', // files stay on the machine; prompts go to the model provider the user picks (cloud) or to a local model (Ollama); cloud/MCP features are optional
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI', 'Anthropic', 'Google', 'Claude Code', 'Codex', 'Cursor'],
  engine: 'external', // models come from the user's own keys or a local server; no built-in engine (README)
  license: 'MIT (desktop app); OpenWork EE License (ee/ folder)', // README directory-split license; source-available EE part
  price: 'freemium', // desktop app free; Cloud Free (up to 5 users), Team $10/user/month, Enterprise custom (pricing page, 2026-11-18)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; depends on the connected model
  stars: 24555,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'agent', 'docs'],
  url: 'openworklabs.com',
  storeLinks: {
    github: 'https://github.com/different-ai/openwork',
    web: 'https://openworklabs.com',
  },
  mcpSupport: true, // README: skills and MCP servers shared with teams; OpenWork MCP for Codex, Claude Code, Cursor, OpenCode
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the download page offered v0.18.68 installers for macOS (Apple Silicon, Intel), Windows (x64, ARM64) and Linux (AppImage, tar.gz; x64, ARM64). The GitHub release v0.18.68 lists openwork-mac-arm64-0.18.68.dmg, openwork-mac-x64-0.18.68.dmg, openwork-win-x64-0.18.68.exe, openwork-win-arm64-0.18.68.exe and openwork-linux-*-0.18.68.AppImage; its release note says the Windows installers are signed with Microsoft Artifact Signing.',
  tagline: {
    en: 'Free desktop app in which AI agents work on your own files, built on OpenCode, with your own model keys or local models through Ollama.',
    de: 'Kostenlose Desktop-App, in der KI-Agenten mit Ihren eigenen Dateien arbeiten, auf OpenCode aufgebaut, mit eigenen Modell-Schlüsseln oder lokalen Modellen über Ollama.',
    fr: 'Application de bureau gratuite où des agents IA travaillent sur vos propres fichiers, construite sur OpenCode, avec vos clés de modèles ou des modèles locaux via Ollama.',
    ja: 'AIエージェントが手元のファイルを扱う無料のデスクトップアプリ。OpenCodeをベースに、自分のモデルキーまたはOllama経由のローカルモデルで使えます。',
    zh: '免费桌面应用，让 AI 智能体处理您自己的文件，基于 OpenCode 构建，可使用您自己的模型密钥或通过 Ollama 使用本地模型。',
    es: 'App de escritorio gratuita en la que agentes de IA trabajan con tus propios archivos, creada sobre OpenCode, con tus propias claves de modelos o modelos locales mediante Ollama.',
    pt: 'App de desktop gratuito em que agentes de IA trabalham com seus próprios arquivos, criado sobre o OpenCode, com suas próprias chaves de modelos ou modelos locais via Ollama.',
    ar: 'تطبيق سطح مكتب مجاني تعمل فيه وكلاء الذكاء الاصطناعي على ملفاتك الخاصة، مبني على OpenCode، بمفاتيح النماذج الخاصة بك أو بنماذج محلية عبر Ollama.',
    ko: '내 파일에서 AI 에이전트가 작업하는 무료 데스크톱 앱으로, OpenCode 기반이며 직접 마련한 모델 키 또는 Ollama를 통한 로컬 모델을 사용할 수 있습니다.',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-11-18; a missing key = not stated there, never false.
  // localLlm/ollama/customEndpoint: README "run local models through Ollama or any OpenAI-compatible server"; webBrowsing: site comparison table "Browser automation: Included";
  // mcp: README (shared MCP servers, OpenWork MCP); fileChat: site "Chat, Library and Automations, on your own files".
  compare: { localLlm: true, ollama: true, webBrowsing: true, customEndpoint: true, mcp: true, fileChat: true },
  verdict: 'Best for people who want an open-source desktop agent for their own files and will bring their own model access. Limits: several features are alpha or announced, the team control plane uses a separate source-available license, and system requirements are not stated.',
  reviewSlug: 'openwork-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.18.68',
    versionSourceUrl: 'https://github.com/different-ai/openwork/releases/tag/v0.18.68',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://openworklabs.com/privacy',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // latest release v0.18.68 published 2026-11-18T00:55Z; GitHub pushed_at 2026-11-18T10:19Z (API, 2026-11-18)
  lastUpstreamUpdateSource: 'https://github.com/different-ai/openwork (latest release v0.18.68 and last commit, both 2026-11-18)',
}
