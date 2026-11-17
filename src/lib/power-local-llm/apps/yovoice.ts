// Local AI App Directory — YoVoice by leemysw (layer: desktop app + CLI, local text-to-speech, voice cloning, music generation, MCP server)
// Added 2026-11-17 from primary sources (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-17: official website yovoice.leemysw.com (EN page, schema.org data, community page and community terms), GitHub repository leemysw/yovoice
// (README, LICENSE = Apache-2.0, docs/models.md, docs/ai.md, docs/api.md, docs/cli.md, docs/architecture.md, CHANGELOG.md, GitHub API), Releases v0.8.0, and the maker's
// personal site leemysw.com.
// Notes:
// - Written "yovoice" by the project and "YoVoice" in the directory request; the tile uses the project's own spelling in the review text and "YoVoice" as the display name.
// - Repository created 2026-09-15 (GitHub API), so the project is about two months old. Stars: GitHub API 2234 on 2026-11-17.
// - Version: latest release v0.8.0 published 2026-11-15 (GitHub API). Release assets seen: macOS arm64 .dmg and .zip, Windows x64 -setup.exe plus CUDA 12.4 and CUDA 13.3
//   setup variants, Linux x64 .deb and .tar.gz, standalone CLI zips for the three OSes, SHA256SUMS.txt.
// - License: Apache-2.0 for the app (LICENSE file + GitHub API). Model weights carry their own licenses; several are non-commercial (README "Supported Models" note).
// - No privacy policy or imprint page exists on the website (/privacy, /terms and /imprint return 404 on 2026-11-17); only the community terms exist
//   (yovoice.leemysw.com/en/community/terms/, effective 2026-11-12), which name the laws of Singapore as governing law.
// - HQ country NOT set: the community terms name Singapore as governing law, while the maker's personal site leemysw.com carries a Guangdong ICP filing number
//   (a Chinese registration) and the GitHub profile location reads "MOON". Conflicting signals and no stated company or address, so per the HQ-flag rule it is left unset
//   for the owner to decide (candidates: SG via the terms, CN via the ICP filing).
// - compare: languages left unset on purpose (the count depends on the model chosen; the app UI itself has 12 interface languages). streaming = the docs describe a
//   "Listen while generating" option when the model and engine support streaming; cpuUsable = README says Linux runs on the CPU out of the box and the CLI supports a CPU backend.
// - Platforms: macOS 14+ Apple Silicon only (no Intel build listed), Windows 10/11 x64, Linux x64. The Linux app does not self-update yet (README).
// Last upstream update: 2026-11-17 (last commit; latest release 2026-11-15) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'yovoice',
  name: 'YoVoice',
  categories: ['voice-cloning', 'text-to-speech', 'music-audio', 'mcp-servers-skills'],
  interfaces: ['desktop', 'cli'],
  exposesApi: true,
  locality: 'local', // generation runs on the machine with downloaded models; the optional AI assistant, update checks, model downloads and community sharing are separate network paths (docs/ai.md, docs/architecture.md)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Cursor', 'Ollama', 'LM Studio'], // MCP clients named in the README; local LLM services listed in docs/ai.md
  engine: 'builtin', // bundles the audio.cpp native C++ inference engine; models are downloaded inside the app or with the CLI
  license: 'Apache-2.0',
  price: 'free', // no paid plan found; optional cloud AI providers are billed by those providers
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no minimum stated; requirements depend on the model chosen (docs/models.md lists file sizes)
  stars: 2234, // GitHub API read 2026-11-17
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'yovoice.leemysw.com',
  storeLinks: {
    github: 'https://github.com/leemysw/yovoice',
    web: 'https://yovoice.leemysw.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.8.0 (2026-11-15) checked 2026-11-17: yovoice-v0.8.0-macos-arm64.dmg and .zip, yovoice-v0.8.0-windows-x64-setup.exe (plus CUDA 12.4 and CUDA 13.3 setup variants), yovoice-v0.8.0-linux-x64.deb and .tar.gz; README install table and the official website point to the same packages. A standalone CLI zip per OS also exists.',
  tagline: {
    en: 'Apache-2.0 desktop studio that generates speech, clones and designs voices, writes songs and scores with local models, and exposes a CLI, HTTP API and MCP server for AI agents',
    de: 'Desktop-Studio unter Apache-2.0, das Sprache erzeugt, Stimmen klont und gestaltet, mit lokalen Modellen Songs und Partituren schreibt und KI-Agenten eine CLI, eine HTTP-API und einen MCP-Server bietet',
    fr: 'Studio de bureau sous licence Apache-2.0 qui génère de la voix, clone et conçoit des voix, écrit chansons et partitions avec des modèles locaux, et offre aux agents IA une CLI, une API HTTP et un serveur MCP',
    ja: '音声生成、声のクローンとデザイン、ローカルモデルによる楽曲とスコア制作ができ、AIエージェント向けにCLI・HTTP API・MCPサーバーも備えた、Apache-2.0のデスクトップスタジオ',
    zh: '采用 Apache-2.0 许可证的桌面工作室，可用本地模型生成语音、克隆与设计声音、创作歌曲和配乐，并为 AI 智能体提供 CLI、HTTP API 和 MCP 服务器',
    es: 'Estudio de escritorio con licencia Apache-2.0 que genera voz, clona y diseña voces, crea canciones y partituras con modelos locales, y ofrece a los agentes de IA una CLI, una API HTTP y un servidor MCP',
    pt: 'Estúdio de desktop com licença Apache-2.0 que gera voz, clona e cria vozes, compõe músicas e partituras com modelos locais e oferece a agentes de IA uma CLI, uma API HTTP e um servidor MCP',
    ar: 'استوديو سطح مكتب بترخيص Apache-2.0 يولّد الكلام ويستنسخ الأصوات ويصمّمها ويكتب الأغاني والمقطوعات بنماذج محلية، ويوفّر لوكلاء الذكاء الاصطناعي واجهة CLI وواجهة HTTP API وخادم MCP',
    ko: '로컬 모델로 음성을 생성하고, 목소리를 복제·디자인하며, 노래와 악보를 만들고, AI 에이전트를 위한 CLI·HTTP API·MCP 서버도 제공하는 Apache-2.0 데스크톱 스튜디오',
  },
  compare: { voiceCloning: true, streaming: true, cpuUsable: true, apiServer: true }, // README/docs read 2026-11-17; languages unset on purpose (model dependent)
  mcpSupport: true, // yovoice serve / in-app local API / `yovoice mcp` expose an MCP server (docs/api.md, docs/cli.md)
  reviewSlug: 'yovoice-review',
  pqReview: {
    date: '2026-11-17',
    version: '0.8.0',
    versionSourceUrl: 'https://github.com/leemysw/yovoice/releases/tag/v0.8.0',
  },
  verdict: 'Best for people who want speech, voice cloning and AI music in one free local studio with a CLI and MCP server for agents, and who accept downloading large model files; limited by a two-month-old, single-maintainer project, no privacy policy page, several model weights that are non-commercial, an Apple-silicon-only Mac build, and quality, speed and privacy claims PromptQuorum could not test.',
  hqCountry: 'SG',
  hqCountrySource: 'https://yovoice.leemysw.com/en/community/terms/', // governing law named as Singapore; maker's personal site also carries a Guangdong ICP filing, so the flag rests on the terms only
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-17', // GitHub API: latest commit on main 2026-11-17T17:19Z; latest release v0.8.0 published 2026-11-15
  lastUpstreamUpdateSource: 'https://github.com/leemysw/yovoice/commits/main (last commit 2026-11-17; latest release 2026-11-15)',
}
