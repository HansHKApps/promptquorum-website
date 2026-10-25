// Local AI App Directory — Anarlog (formerly Hyprnote, briefly "Char"): bot-free AI meeting notepad (layer: desktop meeting notetaker, speech-to-text)
// Added 2026-10-24. Facts verified 2026-10-24 against anarlog.so (home, llms.txt, /privacy last updated 2026-10-21), docs.anarlog.so
// (llms-full.txt: install, offline, data-and-privacy, models-and-providers, FAQ), the GitHub repo fastrepl/anarlog (README, MIT licence,
// API: 9,574 stars, pushed 2026-10-24) and its Releases page (latest stable desktop_v1.4.31, published 2026-10-20).
// Name history per the README: started as Hyprnote, briefly used the "char" name, then split: char.com is a separate productivity app,
// anarlog is the open-source local-first meeting notetaker. No separate hyprnote tile exists in apps/ (grep 2026-10-24).
// Release assets on v1.4.31: anarlog-macos-aarch64.dmg, anarlog-macos-x86_64.dmg, anarlog-windows-x86_64-setup.exe, anarlog-linux-{x86_64,aarch64}.AppImage and .deb.
// Docs: macOS 15 or later; Windows and Linux support is in beta; Microsoft Store listing exists; mobile apps are beta (TestFlight, Google Play beta).
// Built-in on-device transcription (Soniqo, Apple Speech, whisper.cpp .bin) needs an Apple Silicon Mac; not available on Windows, Linux or Intel Macs.
// Local summaries via Ollama, LM Studio, Unsloth or Apple Intelligence (experimental). Cloud ("Pro") is $14/month or $140/year per docs.anarlog.so FAQ.
// No hands-on testing by PromptQuorum. No `compare` block: the meeting-notes sub-category has no comparison segment defined for it.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'anarlog',
  name: 'Anarlog',
  categories: ['speech-to-text', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'hybrid', // audio capture and storage are local; transcription and summaries are local only if you pick on-device (Apple Silicon Mac) and local models, otherwise Anarlog Cloud or your own provider (docs, 2026-10-24)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'Unsloth', 'Apple Intelligence', 'Google Calendar'], // Obsidian-style Markdown export is described on the site's blog; calendars and local model servers per the docs
  engine: 'both', // ships Soniqo/Parakeet on-device transcription (Apple Silicon) and also connects to external local servers and cloud providers
  license: 'MIT', // community application; enterprise/ components are source-visible and commercially licensed (README)
  price: 'freemium', // Free plan (on-device and bring-your-own-key); Pro (Cloud) $14/month or $140/year per docs FAQ
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; on-device transcription needs Apple Silicon
  stars: 9574, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'anarlog.so',
  storeLinks: {
    github: 'https://github.com/fastrepl/anarlog',
    web: 'https://anarlog.so',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases desktop_v1.4.31 (2026-10-20) checked 2026-10-24: anarlog-macos-aarch64.dmg, anarlog-macos-x86_64.dmg, anarlog-windows-x86_64-setup.exe, anarlog-linux-x86_64/aarch64 .AppImage and .deb assets; the download page and docs also list a Microsoft Store entry; Windows and Linux builds are labelled beta',
  tagline: {
    en: 'Open-source, bot-free AI meeting notepad (formerly Hyprnote) that records on your device and can transcribe and summarize locally on an Apple Silicon Mac',
    de: 'Quelloffenes AI-Notizbuch für Meetings (früher Hyprnote) ohne Bot im Call, das auf Ihrem Gerät aufnimmt und auf einem Apple-Silicon-Mac lokal transkribieren und zusammenfassen kann',
    fr: "Bloc-notes IA open source pour réunions (anciennement Hyprnote), sans robot dans l'appel, qui enregistre sur votre appareil et peut transcrire et résumer en local sur un Mac Apple Silicon",
    ja: '会議にボットを参加させないオープンソースのAI議事メモアプリ（旧Hyprnote）。端末上で録音し、Apple SiliconのMacではローカルで文字起こしと要約も可能',
    zh: '开源、无需会议机器人的 AI 会议笔记应用（前身为 Hyprnote），在本机录音，并可在 Apple Silicon Mac 上本地转写和生成摘要',
    es: 'Bloc de notas con IA de código abierto para reuniones (antes Hyprnote), sin bot en la llamada, que graba en tu dispositivo y puede transcribir y resumir en local en un Mac con Apple Silicon',
    pt: 'Bloco de notas com IA de código aberto para reuniões (antes Hyprnote), sem bot na chamada, que grava no seu dispositivo e pode transcrever e resumir localmente em um Mac com Apple Silicon',
    ar: 'دفتر ملاحظات اجتماعات مفتوح المصدر بالذكاء الاصطناعي (كان يسمى Hyprnote) دون بوت في المكالمة، يسجّل على جهازك ويمكنه النسخ والتلخيص محليًا على Mac بمعالج Apple Silicon',
    ko: '회의에 봇이 참여하지 않는 오픈소스 AI 회의 노트 앱(이전 이름 Hyprnote)으로, 기기에서 녹음하며 Apple Silicon Mac에서는 전사와 요약도 로컬로 처리할 수 있습니다',
  },
  reviewSlug: 'anarlog-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.4.31',
    versionSourceUrl: 'https://github.com/fastrepl/anarlog/releases/tag/desktop_v1.4.31',
  },
  verdict: 'Best for people who want a bot-free meeting notepad with open-source code and a choice between local and cloud AI; limited by built-in local transcription that needs an Apple Silicon Mac, beta Windows and Linux builds, a paid Pro plan for hosted AI, optional telemetry, and transcription and summary quality PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // newest default-branch commit (GitHub API, read 2026-10-24); latest stable release desktop_v1.4.31 published 2026-10-20
  lastUpstreamUpdateSource: 'https://github.com/fastrepl/anarlog/commits/main',
}
