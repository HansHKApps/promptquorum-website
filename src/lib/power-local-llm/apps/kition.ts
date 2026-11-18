// Local AI App Directory — Kition (layer: MCP-driven desktop workspace of professional editors for AI agents)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Verified this is the real, currently-operating product at kition.ai (not the ancient city of Kition in Cyprus, and
// not a different "Kiti"/"KSITEN"/"Aition" product that surfaced in search noise) — the GitHub org, npm packages,
// and privacy policy all cross-reference the same project and domain.
// Sources read 2026-11-18:
// - kition.ai (homepage: "The open pro suite for AI" — a free desktop app and open SDK giving AI agents, such as
//   Claude, ChatGPT or Cursor, or any MCP agent, access to 16 professional editor "kits" — motion, film, photo,
//   slide, vector, layout, design, scene, board, cad, sheet, table, pdf, doc, note, html. States "Your files stay
//   on your computer" and that no account is needed to start. Links to kition.ai/kits, kition.ai/download,
//   kition.ai/pricing, one.kition.ai (Kition One team workspace), developer.kition.ai (SDK docs), and
//   github.com/KitionAI/kition. No GitHub Releases entries yet — README states "Kition 0.2.0 is in beta" and that
//   the app runs from source until release builds are published);
// - kition.ai/download and kition.ai/docs/install-kition describe FUTURE install filenames (macOS .dmg,
//   Windows .exe, Linux .AppImage, with a literal "<version>" placeholder) and say downloads come from
//   kition.ai/download or "the latest Release in the KitionAI/kition repository" — but
//   github.com/KitionAI/kition/releases has zero releases (checked 2026-11-18: "There aren't any releases
//   here"), and the README's own Install section says plainly: "Desktop builds of Kition 0.2.0 for macOS,
//   Windows and Linux will be published on GitHub Releases. Until then, Kition runs from source: see
//   CONTRIBUTING.md." So no installer exists yet on any platform — the website's install page documents a
//   planned future state, not what a user can actually download today;
// - developer.kition.ai (SDK docs: open-source SDK, `npm i @kition/embed` as the main install, plus
//   @kition/script, @kition/embed-server, @kition/sync, @kition/kdm, @kition/kits-mcp; only the Note and Table
//   kits have published packages, the rest are previews hosted as static folders on the integrator's own CDN;
//   SDK and Note kit are Apache-2.0, free, no API key required; real-time co-editing is paid via Kition Server
//   (free up to 8 people) or Kition Cloud; links to github.com/KitionAI/kition-sdk, github.com/KitionAI/kition-note,
//   github.com/KitionAI/kition-table);
// - github.com/KitionAI/kition (About: "the open pro suite for AI" for notes, tables, boards and professional
//   editors in one desktop workspace; 671 stars at time of check; LICENSE file present, Apache-2.0; README confirms
//   this repo is "everything that makes up the Kition desktop app" — React renderer, Tauri desktop shell, Rust
//   runtime; single commit shown, authored by "yoeren" on 2026-11-18 (today), tagged "Kition 0.2.0");
// - kition.ai/privacy (privacy policy, last updated 2026-10-31: no company name, HQ, or mailing address stated
//   anywhere on the page — only contact is support@kition.ai — so hqCountry/hqCountrySource are left unset per the
//   owner rule; "Kition keeps workspace content local by default," leaves the device only for networked features
//   the user opts into (Kition Cloud, a bring-your-own AI provider, web search/fetch tools, updates, billing,
//   feedback, optional analytics); desktop analytics is off by default; website analytics is consent-gated GA4).
// Notes:
// - License: Apache-2.0, confirmed via the GitHub repo's LICENSE file and restated on developer.kition.ai for the
//   SDK and the Note kit specifically.
// - locality 'hybrid': the desktop app and its local kits/files run entirely on-device with no account required,
//   but using it with AI agents means connecting either a local AI provider or a cloud one (Kition Cloud, or any
//   configured OpenAI-/MCP-compatible agent) — the AI compute itself is not guaranteed local, only the file
//   storage is, per kition.ai/privacy ("Kition keeps workspace content local by default").
// - engine 'external': Kition ships no inference engine of its own — it is a workspace/SDK that an already-running
//   AI agent (Claude, ChatGPT, Cursor, or any MCP client) drives; paid AI compute (Kition Cloud) is a separate
//   hosted add-on, not a bundled local engine.
// - price 'freemium': the desktop app and SDK are free with no account needed; AI compute is billed only when used
//   (Kition Cloud credits, per kition.ai/pricing); Kition One team workspace is free for up to 8 people, with paid
//   real-time collaboration via Kition Server beyond that.
// - worksWith: ['MCP', 'Claude', 'ChatGPT', 'Cursor'] — kition.ai homepage names these explicitly as example AI
//   agents/clients that can connect; the underlying mechanism is the Model Context Protocol (MCP) per
//   developer.kition.ai's @kition/kits-mcp package and kition.ai/khp ("the protocol").
// - Install: terminal-setup tier, NOT installer — despite kition.ai's install-kition page describing future
//   .dmg/.exe/.AppImage filenames, github.com/KitionAI/kition/releases has no releases (checked 2026-11-18) and
//   the README says plainly that builds "will be published" and until then "Kition runs from source." The
//   repository's .github/CONTRIBUTING.md "Run From Source" section gives the actual, currently-working path:
//   requires Node.js 22.19.0, pnpm 10.33.0, Rust (stable), and the Tauri system prerequisites for the user's
//   platform, then `pnpm install --frozen-lockfile`, `make kit-fetch` (downloads pinned kit packages via the
//   GitHub CLI), and `pnpm dev` (runs `tauri dev`, compiling the Rust runtime and starting the desktop client).
//   This is a multi-step developer build, not a double-click install, on every platform Kition lists.
// - mcpSupport: true — the entire product is built around giving MCP-capable AI agents access to its editor kits
//   (homepage, developer.kition.ai, kition.ai/khp).
// Last upstream update: 2026-11-18 (GitHub repo's single commit, authored by "yoeren," tagged "Kition 0.2.0" — the
// same day as this check) → NOT stale (3-month rule), checked 2026-11-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kition',
  name: 'Kition',
  categories: ['mcp-servers-skills', 'sdks-libraries', 'creative-app-plugins'],
  interfaces: ['desktop', 'library'],
  locality: 'hybrid', // files stay local by default (kition.ai/privacy); AI compute depends on a connected local or cloud provider/agent
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['MCP', 'Claude', 'ChatGPT', 'Cursor'], // kition.ai homepage names these as example AI agents/clients; mechanism is MCP
  engine: 'external', // workspace/SDK driven by an already-running AI agent; no bundled inference engine
  license: 'Apache-2.0', // GitHub repo LICENSE file; restated on developer.kition.ai for the SDK and Note kit
  price: 'freemium', // desktop app + SDK free; AI compute (Kition Cloud) billed when used; Kition One free up to 8 people, Kition Server paid beyond that
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // hardware floor depends on whichever AI provider/agent is connected, not a fixed Kition requirement
  stars: 671, // github.com/KitionAI/kition, read 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'docs', 'image'],
  url: 'kition.ai',
  storeLinks: {
    web: 'https://kition.ai',
    github: 'https://github.com/KitionAI/kition',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'github.com/KitionAI/kition/releases has no releases ("There aren\'t any releases here", checked 2026-11-18); the README\'s Install section states desktop builds "will be published on GitHub Releases. Until then, Kition runs from source: see CONTRIBUTING.md." The repo\'s .github/CONTRIBUTING.md "Run From Source" section requires Node.js 22.19.0, pnpm 10.33.0, Rust (stable), and the Tauri system prerequisites, then `pnpm install --frozen-lockfile`, `make kit-fetch`, `pnpm dev` — a multi-step developer build on every platform, not the double-click installer kition.ai/download describes for a future release.',
  mcpSupport: true,
  tagline: {
    en: 'Free, open-source (Apache-2.0) desktop app and SDK giving AI agents like Claude, ChatGPT, and Cursor access to 16 professional editors for video, documents, slides, and more, via MCP',
    de: 'Kostenlose, quelloffene (Apache-2.0) Desktop-App und SDK, die KI-Agenten wie Claude, ChatGPT und Cursor über MCP Zugriff auf 16 professionelle Editoren für Video, Dokumente, Folien und mehr gibt',
    fr: 'Application de bureau et SDK gratuits et open source (Apache-2.0) donnant aux agents IA comme Claude, ChatGPT et Cursor, via MCP, l\'accès à 16 éditeurs professionnels pour la vidéo, les documents, les diapositives et plus',
    ja: '無料・オープンソース（Apache-2.0）のデスクトップアプリ兼SDK。MCP経由でClaude、ChatGPT、Cursorなどのエージェントに動画・文書・スライドなど16種のプロ向けエディタへのアクセスを提供',
    zh: '免费开源（Apache-2.0）的桌面应用与 SDK，通过 MCP 让 Claude、ChatGPT、Cursor 等 AI 智能体访问 16 款专业编辑器，涵盖视频、文档、幻灯片等',
    es: 'Aplicación de escritorio y SDK gratuitos y de código abierto (Apache-2.0) que dan a agentes de IA como Claude, ChatGPT y Cursor acceso, vía MCP, a 16 editores profesionales para vídeo, documentos, diapositivas y más',
    pt: 'Aplicativo de desktop e SDK gratuitos e de código aberto (Apache-2.0) que dão a agentes de IA como Claude, ChatGPT e Cursor acesso, via MCP, a 16 editores profissionais para vídeo, documentos, slides e mais',
    ar: 'تطبيق سطح مكتب ومجموعة أدوات تطوير (SDK) مجانية ومفتوحة المصدر (Apache-2.0) تمنح وكلاء الذكاء الاصطناعي مثل Claude وChatGPT وCursor، عبر MCP، إمكانية الوصول إلى 16 محررًا مهنيًا للفيديو والمستندات والشرائح وغيرها',
    ko: '무료 오픈소스(Apache-2.0) 데스크톱 앱 및 SDK로, MCP를 통해 Claude, ChatGPT, Cursor 같은 AI 에이전트에게 동영상·문서·슬라이드 등 16종의 전문 편집기 접근 권한을 제공합니다',
  },
  reviewSlug: 'kition-review',
  // Comparison attributes: 'agents-automation' has no defined comparison segment yet (compare-schema.ts COMPARE_SEGMENTS), so left empty rather than guessed.
  compare: {},
  pqReview: {
    date: '2026-11-18',
    version: '0.2.0',
    versionSourceUrl: 'https://github.com/KitionAI/kition',
  },
  verdict: 'Best for developers and AI power users who want their AI agent (Claude, ChatGPT, Cursor, or any MCP client) to directly edit real files — video, documents, slides, PDFs, notes — through a free, open-source desktop app and SDK; still in beta with release builds not yet published, no stated company or HQ, and only 2 of 16 editor kits have a published SDK package.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // github.com/KitionAI/kition: single commit by "yoeren," tagged "Kition 0.2.0," read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/KitionAI/kition',
}
