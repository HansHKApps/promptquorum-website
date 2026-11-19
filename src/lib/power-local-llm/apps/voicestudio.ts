// Local AI App Directory — VoiceStudio by Palash Debnath / the VoiceStudio repository maintainers (layer: desktop app + CLI + local API,
// local voice cloning, voice design, video dubbing, dictation, transcription, audiobooks; also written "OmniVoice Studio" in the site's structured data)
// Added 2026-11-19 at the owner's request from primary sources (NOT hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-19: website voicestudio.sh (home page, /download structured data, /privacy, /terms), GitHub repository debpalash/VoiceStudio (README, GitHub API:
// license AGPL-3.0, created 2026-04-09, pushed 2026-11-18, releases), localhosted.com/voicestudio (secondary, cross-check only).
// Notes:
// - Version: latest STABLE release v0.5.8 published 2026-11-12 (GitHub releases/latest). Newer pre-releases exist (v0.5.9-beta.6 published 2026-11-18); the tile and review
//   name the stable version and mention the beta line. Stable assets seen: VoiceStudio-0.5.8-mac-arm64.dmg, -mac-x64.dmg, -win-x64.exe, -win-arm64.exe,
//   -linux-x64.AppImage, -linux-x64.deb, -android.apk/.aab, -ios-unsigned.ipa.
// - License: AGPL-3.0 for the free desktop app (GitHub API + README). A separate closed-source "VoiceStudio Pro" build adds a paid commercial license (7-day trial; no prices
//   on the pages read); model weights carry their own licenses. Hence price 'freemium'.
// - HQ: the terms page (voicestudio.sh/terms) states "governed by the law of India (courts at Agartala, Tripura)"; no company name or address is given, so the flag rests on
//   the governing-law clause only (owner rule 2026-11-15: governing law counts).
// - compare: languages unset on purpose (maker claims 646 languages but gives no per-engine breakdown); streaming unset (not stated); voiceCloning, cpuUsable ("runs on CPU, just
//   slower", README) and apiServer (documented local API) set from the README.
// - Platforms: stable on macOS (Apple silicon; Intel limited to a remote backend), Windows x64, Linux x64, Docker; Android (10+) and iOS (17+, unsigned IPA) are labelled preview and not listed in platforms.
// - Website figures (82K stars snapshot dated 23 Oct 2026) are older than the GitHub API values; the tile uses the GitHub API star count.
// Last upstream update: 2026-11-18 (GitHub API pushed_at; latest commit 2026-11-18T04:10Z; pre-release v0.5.9-beta.6 same day) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'voicestudio',
  name: 'VoiceStudio',
  categories: ['voice-cloning', 'text-to-speech', 'speech-to-text', 'dictation', 'subtitles-dubbing'],
  interfaces: ['desktop', 'cli'],
  exposesApi: true,
  locality: 'local', // README/website: generation, transcription and dubbing run on the machine; network only for updates and model downloads (free app); Pro adds an account and licence checks
  platforms: ['mac', 'win', 'linux', 'selfhosted'],
  worksWith: ['Claude Code', 'Cursor', 'whisper.cpp', 'Docker'], // MCP support and whisper.cpp ASR named in the README/site; Docker image documented
  engine: 'builtin', // README: default engine k2-fsa/OmniVoice, Model Manager offers further engines; models downloaded inside the app
  license: 'AGPL-3.0',
  price: 'freemium', // free AGPL-3.0 desktop app; separate paid VoiceStudio Pro build with commercial license (no price on the pages read)
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true, variesByModel: true }, // site: "about 8 GB RAM to start, GPU optional"; README: runs on CPU, just slower
  stars: 113833, // GitHub API read 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'voicestudio.sh',
  storeLinks: {
    github: 'https://github.com/debpalash/VoiceStudio',
    web: 'https://voicestudio.sh',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.5.8 (stable, 2026-11-12) checked 2026-11-19: VoiceStudio-0.5.8-mac-arm64.dmg, -mac-x64.dmg, -win-x64.exe, -win-arm64.exe, -linux-x64.AppImage and -linux-x64.deb assets; README also lists Homebrew cask, a PowerShell/curl one-liner, Snap, AUR and a Docker image (ghcr.io/debpalash/voicestudio:stable). Android APK and an unsigned iOS IPA are labelled preview.',
  installOn: ['mac', 'win', 'linux'],
  tagline: {
    en: 'AGPL-3.0 local voice studio that clones and designs voices, dubs video, transcribes and dictates, with a local API, CLI and MCP server; a separate paid Pro build adds a commercial license',
    de: 'Lokales Sprachstudio unter AGPL-3.0, das Stimmen klont und gestaltet, Videos synchronisiert, transkribiert und diktiert, mit lokaler API, CLI und MCP-Server; eine separate Pro-Version bietet gegen Bezahlung eine kommerzielle Lizenz',
    fr: 'Studio vocal local sous licence AGPL-3.0 qui clone et conçoit des voix, double des vidéos, transcrit et dicte, avec API locale, CLI et serveur MCP ; une version Pro payante distincte ajoute une licence commerciale',
    ja: '声のクローンとデザイン、動画の吹き替え、文字起こし、音声入力ができ、ローカルAPI・CLI・MCPサーバーを備えたAGPL-3.0のローカル音声スタジオ。商用ライセンス付きの有料Pro版は別ビルド',
    zh: '采用 AGPL-3.0 许可证的本地语音工作室，可克隆与设计声音、视频配音、转写和听写，提供本地 API、CLI 和 MCP 服务器；另有付费 Pro 版本提供商业许可',
    es: 'Estudio de voz local con licencia AGPL-3.0 que clona y diseña voces, dobla vídeos, transcribe y dicta, con API local, CLI y servidor MCP; una versión Pro de pago aparte añade una licencia comercial',
    pt: 'Estúdio de voz local com licença AGPL-3.0 que clona e cria vozes, dubla vídeos, transcreve e dita, com API local, CLI e servidor MCP; uma versão Pro paga à parte acrescenta licença comercial',
    ar: 'استوديو صوت محلي بترخيص AGPL-3.0 يستنسخ الأصوات ويصمّمها ويدبلج الفيديو وينسخ الكلام ويملي النصوص، مع واجهة API محلية وCLI وخادم MCP؛ وتضيف نسخة Pro المدفوعة المنفصلة ترخيصًا تجاريًا',
    ko: '목소리를 복제·디자인하고, 영상을 더빙하며, 받아쓰기와 전사를 하고, 로컬 API·CLI·MCP 서버를 제공하는 AGPL-3.0 로컬 음성 스튜디오. 상업용 라이선스가 포함된 유료 Pro 버전은 별도 빌드',
  },
  compare: { voiceCloning: true, cpuUsable: true, apiServer: true }, // README/site read 2026-11-19; languages unset on purpose (646 claimed, no per-engine breakdown); streaming not stated
  mcpSupport: true, // README: "MCP support"; site docs list an MCP section of the local API
  reviewSlug: 'voicestudio-review',
  pqReview: {
    date: '2026-11-19',
    version: '0.5.8',
    versionSourceUrl: 'https://github.com/debpalash/VoiceStudio/releases/latest',
  },
  verdict: 'Best for people who want voice cloning, video dubbing, dictation and transcription in one free local app with a local API and MCP server, and who accept an AGPL-3.0 core plus a separate paid Pro build; limited by Apple-silicon-only stable Mac support, preview-only mobile apps, pre-releases moving fast, model weights with their own licenses, and quality, speed and 646-language claims PromptQuorum could not test.',
  hqCountry: 'IN',
  hqCountrySource: 'https://voicestudio.sh/terms', // governing law "the law of India (courts at Agartala, Tripura)"; no company name or address stated
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-18', // GitHub API: pushed_at 2026-11-18T20:23Z, latest commit 2026-11-18, pre-release v0.5.9-beta.6 published 2026-11-18; latest stable v0.5.8 published 2026-11-12
  lastUpstreamUpdateSource: 'https://github.com/debpalash/VoiceStudio/commits/main',
}
