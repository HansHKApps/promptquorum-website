// Local AI App Directory — OpenMausBot (also MausBot, formerly OpenGrokBot): open-source desktop chat app that runs a team of AI bots on agent CLIs (layer: desktop app, multi-agent orchestration)
// Added 2026-11-14. Facts verified 2026-11-14 against github.com/milind-soni/OpenMausBot (README, LICENSE line, docs/custom-engines.md, apps/docs providers/model-providers.mdx,
// server/drivers/local-inject.ts, GitHub Releases API) and mausbot.com (openmausbot.com redirects there: home, /download, /pricing, /privacy, /terms).
// Latest release v0.1.155, published 2026-11-13 (repo pushed 2026-11-14), so the 3-month stale warning is OFF. Repo: 22.4k stars, 3.1k forks, created 2026-08-11.
// LOCAL CLAIM (not "local AI" by itself): OpenMausBot is the chat/orchestration layer. Bots run on the claude, codex and grok CLIs the user has installed and signed in to (README "Bring your own agents"),
// which are cloud models. Harness server on 127.0.0.1, transcripts/keys/events in ~/.openmausbot. Local models ARE possible: the source probes oMLX, Ollama, EXO, LM Studio and Unsloth on 127.0.0.1
// (server/drivers/local-inject.ts) and the docs describe a built-in "OpenAI-compatible" chat engine plus OpenCode for any OpenAI-compatible address. PromptQuorum did NOT run a local model through it.
// Prices: app free (Apache 2.0, no account); optional paid MausBot Cloud Starter $15 / Pro $49 / Max $99 per month (always-on cloud machine; AI usage not included). Model fees are the user's own.
// Maker: Supamaus Software Private Limited, "a company incorporated in India" (mausbot.com/terms) -> hqCountry IN. Not affiliated with xAI, Meta, OpenAI or Manus (README). No token/crypto: README warns about unrelated coins.
// Not checked: install or run of the app, accuracy, local-model behaviour, the YouTube video's claims. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openmausbot',
  name: 'OpenMausBot',
  categories: ['multi-agent-orchestration', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid', // chat app, transcripts and keys stay on the computer; the default agents (Claude, Codex, Grok CLIs) are cloud models; local models are possible through an OpenAI-compatible endpoint (untested by PromptQuorum)
  platforms: ['mac', 'win', 'linux'], // macOS Apple silicon + Intel, Windows x64, Ubuntu 24.04 x64 (beta); Android/iOS companions are shared in Discord, not in the stores
  worksWith: ['Claude Code', 'Codex', 'Ollama', 'LM Studio', 'Composio'], // agent CLIs (README); Ollama/LM Studio/oMLX/EXO/Unsloth hosts (server/drivers/local-inject.ts); Composio connected apps (README)
  engine: 'external', // drives agent CLIs and OpenAI-compatible endpoints; ships no model of its own
  license: 'Apache 2.0 (the enterprise/ folder is source-available under its own licence)', // README License section
  price: 'free', // free app; optional paid Cloud plans $15/$49/$99 per month; model usage on the user's own plan or key
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no figure stated; depends on which engine or local model the user connects
  stars: 22375, // GitHub API 2026-11-14
  addedDate: '2026-11-14',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'mausbot.com', // official site (openmausbot.com redirects here); repo in storeLinks.github
  storeLinks: {
    web: 'https://mausbot.com',
    github: 'https://github.com/milind-soni/OpenMausBot',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.1.155 (2026-11-13) lists OpenMausBot.dmg, OpenMausBot-intel.dmg, OpenMausBot-setup.exe, OpenMausBot-amd64.deb and OpenMausBot.AppImage; mausbot.com/download offers the same; Windows installer unsigned (SmartScreen warning), Ubuntu beta; checked 2026-11-14, installers not run',
  hqCountry: 'IN',
  hqCountrySource: 'https://mausbot.com/terms', // "Supamaus Software Private Limited, a company incorporated in India"
  tagline: {
    en: 'Open-source desktop chat app that runs a team of AI bots on the Claude, Codex or Grok agents you already have, with an option for local models',
    de: 'Open-Source-Desktop-Chat-App, die ein Team aus KI-Bots auf Ihren vorhandenen Claude-, Codex- oder Grok-Agenten betreibt, mit Option für lokale Modelle',
    fr: "Application de chat de bureau open source qui fait tourner une équipe de bots IA sur les agents Claude, Codex ou Grok que vous avez déjà, avec une option pour les modèles locaux",
    ja: 'お手持ちのClaude・Codex・Grokエージェント上でAIボットのチームを動かすオープンソースのデスクトップチャットアプリ。ローカルモデルも選択可能',
    zh: '开源桌面聊天应用，在你已有的 Claude、Codex 或 Grok 智能体上运行一支 AI 机器人团队，也可选用本地模型',
    es: 'App de chat de escritorio de código abierto que ejecuta un equipo de bots de IA sobre los agentes Claude, Codex o Grok que ya tienes, con opción de modelos locales',
    pt: 'App de chat para desktop de código aberto que executa uma equipe de bots de IA nos agentes Claude, Codex ou Grok que você já tem, com opção de modelos locais',
    ar: 'تطبيق دردشة مفتوح المصدر لسطح المكتب يشغّل فريقًا من روبوتات الذكاء الاصطناعي على وكلاء Claude أو Codex أو Grok الموجودين لديك، مع خيار النماذج المحلية',
    ko: '이미 가지고 있는 Claude, Codex, Grok 에이전트 위에서 AI 봇 팀을 운영하는 오픈소스 데스크톱 채팅 앱으로, 로컬 모델 옵션도 제공합니다',
  },
  reviewSlug: 'openmausbot-review',
  pqReview: {
    date: '2026-11-14',
    version: '0.1.155',
    versionSourceUrl: 'https://github.com/milind-soni/OpenMausBot/releases/tag/v0.1.155',
  },
  verdict: 'Best for people who already pay for Claude, Codex or Grok and want a chat-style team of agents with approval prompts on their own computer, under an open Apache 2.0 licence; not a local AI by default (the default agents are cloud models), although the source and docs show local models can be connected through Ollama, LM Studio or any OpenAI-compatible address, which PromptQuorum did not test; limited by a young 0.1.x project, an unsigned Windows installer, and a beta Ubuntu build.',
  lastVerifiedDate: '2026-11-14',
  lastUpstreamUpdate: '2026-11-14', // GitHub API: newer of latest release v0.1.155 (2026-11-13) and last push (2026-11-14), read 2026-11-14
  lastUpstreamUpdateSource: 'https://github.com/milind-soni/OpenMausBot',
}
