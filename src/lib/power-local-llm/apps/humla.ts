// Local AI App Directory — Humla: free, open-source (MIT) bot-free AI meeting notepad for Apple Silicon Macs (layer: desktop meeting notetaker, speech-to-text)
// Added 2026-11-19. Facts verified 2026-11-19 against humla.team (home, docs/privacy/your-data), the GitHub repo
// michaelwilhelmsen/humla (README, MIT licence; API: 353 stars, pushed 2026-11-19, homepage humla.team) and its Releases
// (API: v0.81.0 published 2026-11-19, v0.80.0 and v0.79.0 on 2026-11-18) and localhosted.com/humla (third-party listing).
// Release assets on v0.81.0: Humla_0.81.0_aarch64.dmg, Humla.app.tar.gz (+ .sig), latest.json. humla.team/download 307-redirects to the newest DMG.
// Website: macOS 13+, Apple Silicon only; Windows, web and Intel "not available yet". Personal plan free (no account); Humla Cloud $5/user/month,
// 14-day trial, syncs notes and team workspaces only (EU-hosted per docs); sync can also be self-hosted with PocketBase (README, Localhosted).
// Transcription: local Whisper (whisper.cpp, Metal), OpenAI, Deepgram or Groq; recaps via OpenAI, any OpenAI-compatible local server (Ollama) or
// GitHub Copilot plan models; speaker labels offline (Nemotron 3 default, Community-1). Optional read-only MCP server.
// HQ: the website footer and docs say "Made in Norway" (humla.team/docs/privacy/your-data); no company name, address, privacy-policy or imprint
// page exists (humla.team/privacy, /terms, /about, /imprint return 404), so this is the maintainer's own statement, not a registered-office address.
// No hands-on testing by PromptQuorum. No `compare` block: the meeting-notes sub-category has no comparison segment defined for it.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'humla',
  name: 'Humla',
  categories: ['meeting-notes', 'speech-to-text', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid', // fully local with on-device Whisper + a local Ollama-style server; cloud transcription (OpenAI/Deepgram/Groq) and OpenAI/Copilot recaps are optional with the user's own keys (README, website, 2026-11-19)
  platforms: ['mac'], // Apple Silicon only, macOS 13+; Windows, Intel and web "not available yet" per the website
  worksWith: ['Ollama', 'LM Studio', 'Whisper', 'OpenAI', 'Deepgram', 'Groq', 'GitHub Copilot', 'Claude Code', 'Codex'], // local servers per Localhosted and README; MCP clients per the website
  engine: 'both', // ships local Whisper and offline speaker labelling and also connects to external local servers and cloud providers
  license: 'MIT',
  price: 'freemium', // Personal plan free; Humla Cloud $5/user/month (sync only), per humla.team 2026-11-19
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; Apple Silicon required
  stars: 353, // GitHub API read 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'humla.team',
  storeLinks: {
    github: 'https://github.com/michaelwilhelmsen/humla',
    web: 'https://humla.team',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.81.0 (2026-11-19) checked 2026-11-19: Humla_0.81.0_aarch64.dmg (signed, notarised per README), Humla.app.tar.gz, latest.json; humla.team/download redirects to that DMG; drag to Applications and grant Microphone and Screen Recording permission',
  hqCountry: 'NO',
  hqCountrySource: 'https://humla.team/docs/privacy/your-data', // "Made in Norway" (site footer/docs); owner decision pending - no imprint or privacy-policy page names a company or address
  tagline: {
    en: 'Free, open-source AI meeting notepad for Apple Silicon Macs that records both sides of a call without a bot and can run fully offline with local Whisper and Ollama',
    de: 'Kostenloses, quelloffenes KI-Notizbuch für Meetings auf Macs mit Apple Silicon, das beide Seiten eines Calls ohne Bot aufzeichnet und mit lokalem Whisper und Ollama komplett offline laufen kann',
    fr: 'Bloc-notes IA gratuit et open source pour Mac Apple Silicon, qui enregistre les deux côtés d’un appel sans robot et peut fonctionner entièrement hors ligne avec Whisper et Ollama en local',
    ja: 'Apple Silicon搭載Mac向けの無料オープンソースAI議事メモ。ボットなしで通話の両側を録音し、ローカルのWhisperとOllamaで完全オフライン動作も可能',
    zh: '适用于 Apple Silicon Mac 的免费开源 AI 会议笔记，无需机器人即可录制通话双方，并可配合本地 Whisper 和 Ollama 完全离线运行',
    es: 'Bloc de notas con IA gratuito y de código abierto para Mac con Apple Silicon, que graba ambos lados de una llamada sin bot y puede funcionar totalmente sin conexión con Whisper y Ollama locales',
    pt: 'Bloco de notas com IA gratuito e de código aberto para Macs com Apple Silicon, que grava os dois lados de uma chamada sem bot e pode funcionar totalmente offline com Whisper e Ollama locais',
    ar: 'دفتر ملاحظات اجتماعات مجاني ومفتوح المصدر بالذكاء الاصطناعي لأجهزة Mac بمعالج Apple Silicon، يسجّل طرفي المكالمة دون بوت ويمكنه العمل دون اتصال بالكامل مع Whisper وOllama محليًا',
    ko: 'Apple Silicon Mac용 무료 오픈소스 AI 회의 노트로, 봇 없이 통화 양쪽을 녹음하며 로컬 Whisper와 Ollama로 완전한 오프라인 사용도 가능합니다',
  },
  reviewSlug: 'humla-review',
  pqReview: {
    date: '2026-11-19',
    version: '0.81.0',
    versionSourceUrl: 'https://github.com/michaelwilhelmsen/humla/releases/tag/v0.81.0',
  },
  verdict: 'Best for Apple Silicon Mac users who want a free, open-source, bot-free meeting notepad with a separate choice between on-device and cloud engines; limited by macOS-only Apple Silicon support, version numbers below 1.0 with near-daily releases, a paid Humla Cloud for sync, and transcription, recap and privacy claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // GitHub release v0.81.0 published 2026-11-19 and repo pushed_at 2026-11-19 (GitHub API, read 2026-11-19)
  lastUpstreamUpdateSource: 'https://github.com/michaelwilhelmsen/humla/releases/tag/v0.81.0',
}
