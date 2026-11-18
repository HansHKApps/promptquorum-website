// Local AI App Directory — MyAgents (layer: free, open-source, local-first desktop "Agent workbench and
// task system" — runs coding-agent runtimes under one roof, schedules recurring agent tasks, and links a
// user's own computers into a peer-to-peer "AgentNet"; all actual model inference is cloud-based)
// Added 2026-11-18 at the owner's request (last of a 10-app batch). No maker outreach — independent
// PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18:
// - myagents.io (a client-rendered single-page site; raw HTML served to crawlers carries only a <title>,
//   meta description, Open Graph tags, and a SoftwareApplication JSON-LD block — fetched via `curl` since
//   the WebFetch tool could not render the JS shell. JSON-LD states: license =
//   github.com/hAcKlyc/MyAgents/blob/main/LICENSE, isAccessibleForFree: true, operatingSystem "macOS,
//   Windows", applicationCategory "DeveloperApplication", offers price "0" USD. Meta description (translated
//   from Chinese): "A free, open-source, local-first Agent workbench and task system. Create personal and
//   business Agents, keep working via Task, connect your own computers with AgentNet, and multiply your
//   intent a hundredfold." The site's own <html lang> is "zh-CN"; no separate English site was found);
// - github.com/hAcKlyc/MyAgents (About: "MyAgents - 优雅、易用的 Agent 桌面端，一站式 Agent 工作台与任务中心"
//   ["MyAgents — an elegant, easy-to-use Agent desktop app, an all-in-one Agent workbench and task center"];
//   homepage field = https://myagents.io; license field AGPL-3.0; 594 stars, 93 forks, 49 open issues,
//   created 2026-01-23, pushed_at 2026-11-07T10:38:20Z; topics: ai, ai-agents, claude-code, code-agent,
//   desktop, manus, skills; TypeScript as the primary language);
// - github.com/hAcKlyc/MyAgents README.en.md (official English translation of the README, used in place of
//   translating the Chinese README from memory, per this repo's translation rules: "MyAgents is a free,
//   open-source, local-first Agent workbench and task system... It is both a workbench for working directly
//   with Agents and a way to turn your computers into execution nodes that Agents can call on." Named
//   features: multiple Agent runtimes — Claude Agent SDK, DeepSeek Harness, and Codex, with supported AI
//   subscription sign-ins (Anthropic, Codex, Grok/xAI, Google Antigravity) and model-API configuration; a
//   Task system (scheduled/cron tasks, condition-triggered agent wake-ups); Channel IM connections (Feishu,
//   DingTalk, Telegram built in, plugins for more); AgentNet (same-account devices hand off work to each
//   other over end-to-end encryption); Space collaboration (Issue-based goal tracking for people and
//   Agents). States "No server of your own is needed" and that data/environments/execution stay on the
//   user's own computers. Covers v0.5.0; current downloads/release notes pointed to the website and GitHub
//   Releases instead of the README);
// - github.com/hAcKlyc/MyAgents/releases/tag/v0.5.13 (latest release, published 2026-11-07T10:38:23Z, same
//   day as the repo's `pushed_at`; assets: MyAgents_0.5.13_aarch64.dmg, MyAgents_0.5.13_x64.dmg [macOS],
//   MyAgents_0.5.13_x64-setup.exe [Windows] — no Linux build artifact, despite a `build_linux.sh` script
//   existing in the repo root; Linux is not advertised as a supported platform anywhere checked);
// - github.com/hAcKlyc/MyAgents LICENSE (full AGPL-3.0 text, confirmed) and LICENSING.md/COMMERCIAL-LICENSING.md
//   (MyAgents-owned components are dual-licensed: free use under AGPL-3.0-only, or a separately negotiated
//   commercial license for proprietary modification, OEM/white-label distribution, or a proprietary hosted
//   SaaS built on it — contact listed as myagents.io@gmail.com. This is a licensing alternative for
//   downstream redistributors, not a priced tier of the app itself, so `price: 'free'` still reflects what an
//   ordinary end user pays to use MyAgents);
// - github.com/hAcKlyc/MyAgents TRADEMARKS.md (brand-usage policy; names no company entity or address — only
//   the "MyAgents" product/brand name and a contact email);
// - github.com/hAcKlyc/MyAgents/blob/main/bundled-skills/myagents-docs/references/models-providers-runtimes.md
//   (the shipped in-app documentation on providers, models, and runtimes: "API Key Provider" lets a user
//   supply their own key and service address for Anthropic-, OpenAI Responses-, or Chat Completions-style
//   endpoints; named subscription providers are Anthropic [Claude Code credentials], Grok/xAI OAuth, a
//   managed Codex subscription, and Google Antigravity OAuth; named runtimes are the built-in Claude Agent
//   SDK, the built-in "DeepSeek Harness" — despite the name, the doc states it "is not only for DeepSeek
//   models" and uses whatever model the active provider offers — and system-installed Claude Code CLI /
//   Codex CLI. Ollama, LM Studio, llama.cpp, vLLM, or any other self-hosted/local-model backend is NOT named
//   anywhere in this document);
// - api.github.com/repos/hAcKlyc/MyAgents (machine-readable confirmation of the above: stargazers_count 594,
//   forks_count 93, open_issues_count 49, license.spdx_id "AGPL-3.0", pushed_at 2026-11-07T10:38:20Z).
// Notes:
// - License: AGPL-3.0, confirmed via the GitHub repository's license field and the LICENSE file text.
// - locality 'cloud': MyAgents itself needs no server and keeps a user's files, task state, and device-to-
//   device traffic under their own control ("local-first," per the README), but no document checked names
//   Ollama, LM Studio, or any other self-hosted/local-model backend — every named Agent runtime and provider
//   (Claude Agent SDK, DeepSeek Harness, Codex, Anthropic, Grok/xAI, Google Antigravity, plus a generic
//   Anthropic/OpenAI-protocol API-key provider) calls a cloud subscription or API. 'cloud' reflects where
//   model inference actually happens, consistent with how this directory classifies other orchestration
//   tools with no documented local-inference path (e.g. open-paper.ts).
// - engine 'external': MyAgents runs no model weights of its own; every runtime it ships drives a cloud
//   subscription or API-key provider.
// - hardware: null — no local model inference ever happens on the user's device through MyAgents, so there
//   is no VRAM/RAM floor tied to a model; the app's own system requirement is only the OS versions in
//   `platforms` (macOS 13+, Windows 10+ per the README and GitHub topic badges).
// - worksWith: the Agent runtimes and providers named in the bundled models-providers-runtimes.md doc, plus
//   the three IM channels the README names as built in.
// - price 'free': the JSON-LD `offers` block states price "0" USD and `isAccessibleForFree: true`; no paid
//   tier of the app itself was found. A separate commercial *license* (see LICENSING.md above) exists for
//   organizations that cannot comply with the AGPL when redistributing MyAgents-owned components — that is
//   not a price an ordinary end user pays to use the app, so it is documented here rather than in `price`.
// - installEffort 'installer': the v0.5.13 GitHub release ships a signed-flow DMG for both Apple Silicon and
//   Intel Macs and an EXE installer for Windows — a double-click install on every officially supported OS,
//   per the Releases page, checked 2026-11-18.
// - hqCountry/hqCountrySource intentionally UNSET per the Company HQ flag rule: no privacy policy, terms,
//   imprint, about, or contact page was found stating a company name, registered address, or jurisdiction —
//   only the individual GitHub account "hAcKlyc" and a myagents.io@gmail.com contact address in the
//   licensing docs. This is an unattended run, so no owner question was asked; recorded here as unset.
// Last upstream update: 2026-11-07 (v0.5.13 published, same day as the repo's `pushed_at`) → NOT stale
// (11 days before this 2026-11-18 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'myagents',
  name: 'MyAgents',
  categories: ['agent-frameworks', 'multi-agent-orchestration'],
  interfaces: ['desktop', 'cli'],
  locality: 'cloud', // local-first app/data/execution, but every named Agent runtime and provider calls a cloud subscription or API — no Ollama/LM Studio/local-model path documented
  platforms: ['mac', 'win'],
  worksWith: ['Claude Agent SDK', 'Codex', 'Anthropic API', 'OpenAI API', 'Grok (xAI)', 'Google Antigravity', 'Feishu', 'DingTalk', 'Telegram'],
  engine: 'external',
  license: 'AGPL-3.0', // github.com/hAcKlyc/MyAgents license field and LICENSE file, checked 2026-11-18
  price: 'free', // myagents.io JSON-LD: offers price "0" USD, isAccessibleForFree true; checked 2026-11-18
  hardware: null, // no local model inference happens through MyAgents; every runtime calls a cloud subscription or API
  stars: 594, // github.com/hAcKlyc/MyAgents, checked 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent'],
  url: 'myagents.io',
  storeLinks: {
    web: 'https://myagents.io',
    github: 'https://github.com/hAcKlyc/MyAgents',
  },
  installEffort: 'installer',
  installEvidence: 'github.com/hAcKlyc/MyAgents/releases/tag/v0.5.13, checked 2026-11-18: assets include MyAgents_0.5.13_aarch64.dmg and MyAgents_0.5.13_x64.dmg for macOS (Apple Silicon and Intel) and MyAgents_0.5.13_x64-setup.exe for Windows — a double-click installer on every officially supported OS. No Linux build artifact is published, despite a build_linux.sh script existing in the repository.',
  tagline: {
    en: 'Free, open-source (AGPL-3.0), local-first desktop "Agent workbench and task system" for macOS and Windows — runs Claude Agent SDK, Codex, and other agent runtimes, schedules recurring agent tasks, and links your own computers into a peer-to-peer AgentNet; no local model inference',
    de: 'Kostenloser, quelloffener (AGPL-3.0), local-first Desktop-„Agent-Arbeitsbereich und Aufgabensystem" für macOS und Windows — führt Claude Agent SDK, Codex und andere Agenten-Runtimes aus, plant wiederkehrende Agenten-Aufgaben und verbindet die eigenen Computer zu einem Peer-to-Peer-AgentNet; keine lokale Modell-Inferenz',
    fr: 'Espace de travail et système de tâches pour agents IA, gratuit, open source (AGPL-3.0) et local-first, pour macOS et Windows — exécute Claude Agent SDK, Codex et d\'autres runtimes d\'agents, planifie des tâches d\'agent récurrentes et relie vos propres ordinateurs en un AgentNet pair à pair ; aucune inférence de modèle locale',
    ja: '無料・オープンソース（AGPL-3.0）のローカルファースト型デスクトップ「エージェント作業台＆タスクシステム」（macOS・Windows対応）— Claude Agent SDK、Codexなどのエージェントランタイムを実行し、定期的なエージェントタスクをスケジュールし、自分のパソコンをピアツーピアのAgentNetで接続。ローカルでのモデル推論は行わない',
    zh: '免费开源（AGPL-3.0）、本地优先的桌面"Agent 工作台与任务系统"，支持 macOS 和 Windows —— 运行 Claude Agent SDK、Codex 等多种 Agent Runtime，调度周期性的 Agent 任务，并通过 AgentNet 将你自己的多台电脑连成点对点网络；不进行本地模型推理',
    es: 'Espacio de trabajo y sistema de tareas para agentes de IA, gratuito, de código abierto (AGPL-3.0) y local-first, para macOS y Windows — ejecuta Claude Agent SDK, Codex y otros runtimes de agentes, programa tareas de agente recurrentes y conecta tus propios ordenadores en una AgentNet de igual a igual; sin inferencia de modelo local',
    pt: 'Espaço de trabalho e sistema de tarefas para agentes de IA, gratuito, de código aberto (AGPL-3.0) e local-first, para macOS e Windows — executa Claude Agent SDK, Codex e outros runtimes de agentes, agenda tarefas de agente recorrentes e conecta seus próprios computadores em uma AgentNet ponto a ponto; sem inferência de modelo local',
    ar: 'مساحة عمل ونظام مهام للوكلاء الذكيين، مجاني ومفتوح المصدر (AGPL-3.0) ومحلي أولاً، لنظامي macOS وWindows — يشغّل Claude Agent SDK وCodex وبيئات تشغيل وكلاء أخرى، ويجدول مهام وكلاء متكررة، ويربط أجهزة الكمبيوتر الخاصة بك في شبكة AgentNet من نظير إلى نظير؛ دون أي استدلال نموذج محلي',
    ko: '무료 오픈소스(AGPL-3.0), 로컬 퍼스트 데스크톱 "에이전트 워크벤치 및 태스크 시스템" — macOS와 Windows 지원. Claude Agent SDK, Codex 등 여러 에이전트 런타임을 실행하고, 반복되는 에이전트 작업을 예약하며, 자신의 컴퓨터들을 피어투피어 AgentNet으로 연결함. 로컬 모델 추론은 지원하지 않음',
  },
  reviewSlug: 'myagents-review',
  // Comparison attributes (agents-automation group, no segment table defined yet — see compare-schema.ts):
  // verified against myagents.io, the bundled models-providers-runtimes.md doc, and github.com/hAcKlyc/MyAgents
  // on 2026-11-18; a missing key means not stated there, never false.
  compare: { multiAgent: true, memory: true, toolCalling: true },
  pqReview: {
    date: '2026-11-18',
    version: '0.5.13',
    versionSourceUrl: 'https://github.com/hAcKlyc/MyAgents/releases',
  },
  verdict: 'Best for someone who already uses Claude Code, Codex, or another cloud-subscription coding agent and wants one free desktop app to schedule recurring agent tasks, message agents through Feishu/DingTalk/Telegram, and hand work between their own computers over AgentNet — weaker fit for anyone who wants local model inference (Ollama, LM Studio, or any self-hosted backend is not supported) or who needs a stated company or jurisdiction behind the product.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-07', // github.com/hAcKlyc/MyAgents/releases/tag/v0.5.13, published 2026-11-07, same day as the repo's `pushed_at`; checked 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/hAcKlyc/MyAgents/releases/tag/v0.5.13',
}
