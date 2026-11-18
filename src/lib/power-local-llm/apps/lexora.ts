// Local AI App Directory — Lexora (layer: open-source personal desktop AI agent)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: uselexora.app (home page: "开源的个人 AI Agent" / open-source personal AI agent for the
// desktop that chats and carries out tasks like writing, researching, and building projects on your own computer;
// platforms Windows/macOS/Linux; no account needed; no bundled remote-model credits — bring your own model
// service or run local models), uselexora.app/guide/quick-start (per-OS install steps and commands),
// uselexora.app/guide/data-and-backup (local-first data storage claims, no company/HQ/legal info found),
// uselexora.app/guide/local-models (local-model plugin system; remote models via a generic "custom API" field,
// no specific provider named), uselexora.app/guide/skills-and-mcp (MCP server connections, a Skills system, and a
// separate plugin system), and the GitHub API for github.com/useLexora/Lexora (description "A self-evolved,
// sovereign desktop AI agent built for real-world action"; license AGPL-3.0; 763 stars; created_at 2026-03-30;
// pushed_at 2026-11-18T08:34:45Z — same day as this check, so the 3-month stale warning is OFF; latest release
// 0.22.0, 2026-11-13, per github.com/useLexora/Lexora/releases).
// Notes:
// - License: AGPL-3.0-only, confirmed via the GitHub API license field.
// - Maintainer: the GitHub organization "useLexora". No company name, registered address, or HQ is stated on
//   uselexora.app or the GitHub repository — hqCountry left unset per the owner rule.
// - No formal privacy policy was found. The closest pages are the data-and-backup and permissions guides, which
//   state tasks/companions/settings/credentials stay on-device, local models run on-device, and remote-model
//   requests go directly from the device to the configured provider (no Lexora cloud relay) — but the site also
//   notes local inference is not fully offline, since model downloads, web tools, remote MCP, and backups can
//   use the network.
// - locality 'hybrid': on-device storage and optional fully-local inference (via a local model plugin), but
//   remote model use (the user's own API key) and several optional features (backups, web tools, remote MCP)
//   reach the network.
// - engine 'both': Lexora can run local models itself through its model-plugin system, and also connects to any
//   external "custom API" model service the user configures — not a bring-your-own-key-only tool.
// - worksWith left unset (null): the local-models guide describes a generic local-model plugin system and a
//   generic "custom API" field for remote services, without naming specific providers (no OpenAI/Anthropic/
//   Google/Ollama stated by name on any page checked).
// - Install: installer tier confirmed from uselexora.app/guide/quick-start — Windows .exe/.zip (portable),
//   macOS .dmg (Apple Silicon, macOS 15+, requires one `xattr` unquarantine command), and Linux .deb/.rpm/
//   .pkg.tar.zst packages, all distributed via GitHub Releases (github.com/useLexora/Lexora/releases). No
//   one-command or terminal-setup path is offered as the primary route on any platform.
// Last upstream update: 2026-11-18 (GitHub API pushed_at 2026-11-18T08:34:45Z; latest release 0.22.0,
// 2026-11-13, per the Releases page) → NOT stale (3-month rule), checked 2026-11-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lexora',
  name: 'Lexora',
  categories: ['personal-assistants', 'autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid', // on-device data and optional fully-local inference, but remote models and optional network features (backups, web tools, remote MCP) reach outside the device
  platforms: ['mac', 'win', 'linux'],
  worksWith: null, // local-models guide describes a generic local-model plugin system and a generic "custom API" field, naming no specific provider
  engine: 'both', // runs local models itself via a model plugin, and connects to any external model service the user configures
  license: 'AGPL-3.0',
  price: 'free', // no account needed; no bundled remote-model credits — the user's own model service/API usage is billed separately by that provider
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends entirely on whether the user runs a local model plugin or an external API
  stars: 763, // GitHub API, github.com/useLexora/Lexora, read 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'chat', 'build'],
  url: 'uselexora.app',
  storeLinks: {
    web: 'https://uselexora.app',
    github: 'https://github.com/useLexora/Lexora',
  },
  mcpSupport: true, // uselexora.app/guide/skills-and-mcp: MCP connections (local Stdio or remote HTTP) under Settings → MCP, checked 2026-11-18
  installEffort: 'installer',
  installOn: ['mac', 'win', 'linux'],
  installEvidence: 'uselexora.app/guide/quick-start, checked 2026-11-18: Windows .exe installer or portable .zip (x64/ARM64); macOS .dmg (Apple Silicon, macOS 15+, with one documented `xattr -r -d com.apple.quarantine` unquarantine step since the build is ad-hoc signed and not notarized); Linux .deb (Ubuntu/Debian), .rpm (Fedora, `sudo dnf install`), and .pkg.tar.zst (Arch), all from github.com/useLexora/Lexora/releases.',
  tagline: {
    en: 'Open-source desktop AI agent (AGPL-3.0) for Windows, macOS, and Linux that chats and carries out tasks like writing, researching, and building projects, with your own model service or local models',
    de: 'Quelloffener Desktop-KI-Agent (AGPL-3.0) für Windows, macOS und Linux, der chattet und Aufgaben wie Schreiben, Recherchieren und den Aufbau von Projekten übernimmt — mit eigenem Modelldienst oder lokalen Modellen',
    fr: 'Agent IA de bureau open source (AGPL-3.0) pour Windows, macOS et Linux qui discute et réalise des tâches comme écrire, rechercher et construire des projets, avec votre propre service de modèle ou des modèles locaux',
    ja: 'Windows・macOS・Linux向けのオープンソース デスクトップAIエージェント（AGPL-3.0）。チャットのほか、文章作成・調査・プロジェクト構築などのタスクを実行し、自分のモデルサービスまたはローカルモデルを使用可能',
    zh: '面向 Windows、macOS 和 Linux 的开源桌面 AI 智能体（AGPL-3.0），可以聊天并完成写作、调研、搭建项目等任务，使用你自己的模型服务或本地模型',
    es: 'Agente de IA de escritorio de código abierto (AGPL-3.0) para Windows, macOS y Linux que conversa y realiza tareas como escribir, investigar y construir proyectos, con tu propio servicio de modelo o modelos locales',
    pt: 'Agente de IA de desktop de código aberto (AGPL-3.0) para Windows, macOS e Linux que conversa e realiza tarefas como escrever, pesquisar e construir projetos, com seu próprio serviço de modelo ou modelos locais',
    ar: 'وكيل ذكاء اصطناعي مكتبي مفتوح المصدر (AGPL-3.0) لأنظمة Windows و macOS و Linux يتحدث معك وينفذ مهامًا مثل الكتابة والبحث وبناء المشاريع، باستخدام خدمة النموذج الخاصة بك أو نماذج محلية',
    ko: 'Windows, macOS, Linux용 오픈소스 데스크톱 AI 에이전트(AGPL-3.0)로, 대화는 물론 글쓰기·조사·프로젝트 구축 같은 작업을 수행하며, 자신의 모델 서비스나 로컬 모델을 사용할 수 있습니다',
  },
  // Comparison attributes (personal assistants segment), read from uselexora.app and github.com/useLexora/Lexora on 2026-11-18:
  // localLlm (local-model plugin system) and toolUse (MCP, Skills, and plugins all let the agent act on tools) are stated;
  // voice and memory are not explicitly claimed anywhere checked — unset, never false.
  compare: { localLlm: true, toolUse: true },
  reviewSlug: 'lexora-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.22.0',
    versionSourceUrl: 'https://github.com/useLexora/Lexora/releases',
  },
  verdict: 'Best for people who want a free, open-source (AGPL-3.0), cross-platform desktop AI agent that keeps tasks and settings on-device and are willing to bring their own model service or run a local model; limited by no stated company or HQ, no formal privacy policy, no named supported model providers, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // GitHub API: repo pushed_at 2026-11-18T08:34:45Z; latest release 0.22.0 (2026-11-13); read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/useLexora/Lexora',
}
