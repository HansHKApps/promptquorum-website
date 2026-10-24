// Local AI App Directory — LocalGhost (category: personal-assistants — self-hosted personal AI server + Android app)
// Added 2026-10-24 on the owner's request. All facts below read on 2026-10-24 from localghost.ai (about.md, setup.md, privacy.md),
// github.com/LocalGhostDao/localghost (README, SECURITY.md, RELEASES.md, v0.0.7 release and its asset list) — no hands-on testing.
// An official website exists, so `url` is the website and the repo moves to storeLinks.github.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localghost',
  name: 'LocalGhost',
  categories: ['personal-assistants'],
  interfaces: ['mobile', 'cli'],
  locality: 'local',
  platforms: ['linux', 'android'],
  worksWith: ['llama.cpp', 'Gemma 4', 'EmbeddingGemma', 'whisper.cpp'],
  engine: 'builtin',
  license: 'MIT', // README + GitHub API license field (spdx MIT), read 2026-10-24
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // setup guide: NVIDIA GPU optional (reference box 12 GB card); without a card everything runs on the CPU, about 24 photos described per hour; Debian 13 x86-64 with TPM 2.0 for the sealed volume — read 2026-10-24
  stars: 17, // github.com/LocalGhostDao/localghost via GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'agent', 'phone'],
  url: 'www.localghost.ai',
  storeLinks: {
    github: 'https://github.com/LocalGhostDao/localghost',
    web: 'https://www.localghost.ai',
  },
  installEffort: 'terminal-setup', // see InstallEffortKey in ./types.ts
  installOn: ['linux'],
  installEvidence: 'GitHub Releases v0.0.7 ships localghost-server-0.0.7-linux-amd64.tar.gz, localghost-app-0.0.7.apk (+ .asc/.idsig), SHA256SUMS(.asc), source tarball; the setup guide (localghost.ai/setup) needs Debian 13, the TPM switched on in the BIOS, apt packages, a GPG-verified download, tools/install.sh asking for a disk or file volume and PINs, a QR scan from the phone and a first update run — multi-step, no one-line installer; the phone app is a signed APK sideload with no store listing. checked 2026-10-24',
  tagline: {
    en: 'Open-source personal AI server on a Debian box you own, with an Android app as the only client',
    de: 'Quelloffener persönlicher KI-Server auf einem eigenen Debian-Rechner, mit einer Android-App als einzigem Client',
    fr: 'Serveur d\'IA personnelle open source sur une machine Debian que vous possédez, avec une application Android comme seul client',
    ja: '自分のDebianマシンで動くオープンソースのパーソナルAIサーバー。クライアントはAndroidアプリのみ',
    zh: '运行在自有 Debian 设备上的开源个人 AI 服务器，唯一客户端是 Android 应用',
    es: 'Servidor de IA personal de código abierto en un equipo Debian propio, con una app de Android como único cliente',
    pt: 'Servidor de IA pessoal de código aberto em uma máquina Debian sua, com um app Android como único cliente',
    ar: 'خادم ذكاء اصطناعي شخصي مفتوح المصدر على جهاز Debian تملكه، مع تطبيق Android كعميل وحيد',
    ko: '직접 소유한 Debian 장비에서 동작하는 오픈소스 개인 AI 서버, 클라이언트는 Android 앱 하나뿐',
  },
  reviewSlug: 'localghost-review',
  // Comparison attributes (personal-assistants segment): localLlm and memory are stated by the README/site; voice and toolUse
  // are not stated as assistant features (voice notes are transcribed, there is no voice assistant), so they stay unset.
  compare: { localLlm: true, memory: true },
  pqReview: {
    date: '2026-10-24',
    version: '0.0.7',
    versionSourceUrl: 'https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7',
  },
  verdict: 'Best for self-hosters and homelab owners with a Debian machine (ideally with an NVIDIA card) who want a private, phone-fronted memory of their photos, notes, voice and health data; limited by a one-person project that shipped its first release on 2 October 2026, an Android-only client, a multi-step server setup and privacy claims that rest on the maker\'s own statements.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // GitHub: release v0.0.7 published 2026-10-23T16:34:34Z (latest push 2026-10-23T23:41:25Z), read via the GitHub API 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/LocalGhostDao/localghost/releases/tag/v0.0.7',
}
