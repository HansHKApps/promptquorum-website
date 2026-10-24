// Local AI App Directory — Kruvo (categories: autonomous-agents; layer: desktop AI coworker for Windows and macOS)
// Added 2026-10-24 on the owner's request. No maker outreach — independent PromptQuorum entry, no hands-on testing.
// Verified on 2026-10-24 against: kruvo.ai (home, /download, /changelog, /pricing, /privacy, /terms, /docs, /security, /extension,
// /evolution, /use-cases; maker line "Part of BexoCORP"), the official release repository github.com/pvaz/kruvo-releases (GitHub
// API: releases, tags, README, license field) and its latest.json updater manifest.
// VERSION RESOLUTION: kruvo.ai/download and the changelog list 0.3.6 (published 2026-10-07) and GitHub's "Latest" badge and
// latest.json also say 0.3.6. GitHub additionally holds a newer, non-"Latest" release v0.3.13 published 2026-10-11 (remote
// multi-computer chats and projects, iPhone/iPad TestFlight compatibility) that the site download page does not yet list.
// The "0.3.67" / "0.3.318" strings seen on the site are artefacts of text extraction: the changelog prints "0.3.6" directly
// above "7 October 2026" and "0.3.3" above "18 September 2026". "0.3.4" on the site is the app version the interface screenshots
// and the computer-use docs refer to ("compatible Kruvo 0.3.4 app"), not a download. We record 0.3.6 as the version the
// official site offers and 2026-10-11 as the latest upstream update (v0.3.13).
// LOCALITY = hybrid: local-first (conversations, audit records, credentials and deliverables stay in the user profile; no Kruvo
// account needed) but there is no bundled model — it needs a provider API key (OpenAI, Anthropic, Gemini, Mistral, DeepSeek,
// Kimi, Qwen, xAI) or Ollama, and hosted models and connected services receive the data needed for their requests.
// The product source is in a private repository (release repo README), so the licence is closed source.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kruvo',
  name: 'Kruvo',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid', // local-first app, but the model is your own provider API key or Ollama; hosted models and connectors receive request data
  platforms: ['win', 'mac'], // Windows 10 22H2 / 11 (64-bit), macOS 13.5+ for full functionality (Apple Silicon and Intel builds)
  worksWith: ['Ollama', 'OpenAI', 'Anthropic', 'Gemini', 'Mistral', 'DeepSeek', 'Kimi', 'Qwen', 'xAI', 'MCP', 'Telegram', 'Slack', 'GitHub', 'Gmail'],
  engine: 'external', // no bundled model: your provider API key or Ollama
  license: 'Closed source', // source kept in a private repository per the release repo README; terms say the software is provided as is
  price: 'freemium', // Free plan EUR 0 "forever" with the full local app; Pro EUR 15/month, Team EUR 29/user/month, Enterprise custom — service tiers, model costs separate
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no figure stated; depends on the Ollama model, none for provider APIs
  stars: null, // release repository only (no source repo), no star count used
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['agent', 'chat', 'code'],
  url: 'kruvo.ai',
  storeLinks: {
    web: 'https://kruvo.ai',
    github: 'https://github.com/pvaz/kruvo-releases',
  },
  installEffort: 'installer',
  installEvidence:
    'kruvo.ai/download and GitHub Releases checked 2026-10-24: Kruvo-windows-setup.exe (96.1 MB) and Kruvo-windows.msi, Kruvo-macos-arm64.dmg and Kruvo-macos-x64.dmg, v0.3.6; not code-signed (Windows) and not notarised (macOS), SHA-256 checksums published; a model needs a separate API key or Ollama.',
  tagline: {
    en: 'Local-first desktop AI coworker for Windows and macOS that works in a chosen folder with your own API key or Ollama and asks before it acts',
    de: 'Local-first-KI-Kollege für Windows und macOS, der in einem gewählten Ordner mit Ihrem eigenen API-Schlüssel oder Ollama arbeitet und vor dem Handeln nachfragt',
    fr: 'Collègue IA de bureau local-first pour Windows et macOS, qui travaille dans un dossier choisi avec votre propre clé API ou Ollama et demande avant d’agir',
    ja: 'Windows・macOS向けのローカルファーストなデスクトップAIコワーカー。選んだフォルダで自分のAPIキーまたはOllamaを使って作業し、実行前に確認を求める',
    zh: '适用于 Windows 和 macOS 的本地优先桌面 AI 同事，使用自己的 API 密钥或 Ollama 在选定文件夹中工作，行动前先征求同意',
    es: 'Compañero de IA de escritorio local-first para Windows y macOS que trabaja en una carpeta elegida con tu propia clave de API u Ollama y pregunta antes de actuar',
    pt: 'Colega de IA de desktop local-first para Windows e macOS que trabalha em uma pasta escolhida com sua própria chave de API ou Ollama e pergunta antes de agir',
    ar: 'زميل ذكاء اصطناعي مكتبي يضع العمل المحلي أولاً لنظامي Windows وmacOS، يعمل في مجلد تختاره بمفتاح API الخاص بك أو Ollama ويستأذن قبل التنفيذ',
    ko: 'Windows·macOS용 로컬 우선 데스크톱 AI 동료. 선택한 폴더에서 직접 마련한 API 키 또는 Ollama로 작업하며, 실행 전에 먼저 확인을 요청',
  },
  // Each value read from kruvo.ai (home, pricing, docs, use cases, security) on 2026-10-24; a missing key = not stated, never false.
  // localLlm/ollama: Ollama is a documented model option. webBrowsing: supervised Chrome/Edge work (compatible app and setup, off by default).
  // memory: "Projects and local memory". codeExecution and sandbox stay unset: terminal access follows the permission policy, no sandbox is claimed.
  compare: { localLlm: true, ollama: true, webBrowsing: true, memory: true },
  mcpSupport: true, // "Manual connectors and MCP" on the pricing page; MCP permissions with per-tool trust since 0.3.0
  reviewSlug: 'kruvo-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.3.6',
    versionSourceUrl: 'https://kruvo.ai/download',
  },
  verdict:
    'Worth a look for Windows and macOS users who want an approval-first desktop agent on their own API key or Ollama and accept unsigned installers, a closed-source app and a young release history (GitHub releases start on 18 September 2026).',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-11', // GitHub release v0.3.13 published_at 2026-10-11T12:56:52Z; site lists 0.3.6 of 2026-10-07
  lastUpstreamUpdateSource: 'https://github.com/pvaz/kruvo-releases/releases',
}
