// Local AI App Directory — PicoClaw (layer: personal agent / assistant)
// Added 2026-11-01 on request. Facts verified 2026-11-01 against: picoclaw.io (home page, FAQ, download page — platform list is
// JS-rendered and showed only "Loading…" in a text fetch), the GitHub repo sipeed/picoclaw (README, MIT licence, releases, commits) and
// docs.picoclaw.io (channel list only). Not tested hands-on.
// MAKER: Sipeed (picoclaw.io footer "PicoClaw is open-source software by Sipeed"; README: "independent open-source project initiated by
// Sipeed", written in Go, "not a fork of OpenClaw, NanoBot"). Sipeed also sells the RISC-V boards the project advertises (LicheeRV-Claw).
// LOCALITY = hybrid: PicoClaw is the agent loop; inference comes from a provider you configure. README provider table lists Ollama (`ollama/`)
// and vLLM (`vllm/`) as local, key-free options next to cloud providers. The site FAQ says LLM requests go to the configured provider.
// RELEASES: latest stable v0.3.1 published 2026-07-03 (assets: tar.gz/zip per OS and CPU, .deb/.rpm, picoclaw-android-universal.zip,
// checksums); newest commit on the default branch 2026-08-19 ("add configurable default fallback chain"). README warns it is in early rapid
// development, may have unresolved security issues and should not be deployed to production before v1.0.
// Memory claim: README says core footprint <10 MB, but also that recent builds may use 10-20 MB — recorded as "varies", not as a number.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'picoclaw',
  name: 'PicoClaw',
  categories: ['personal-assistants', 'autonomous-agents'],
  interfaces: ['cli', 'web', 'mobile'], // terminal binary, browser-based WebUI Launcher on localhost:18800, Android APK (README)
  locality: 'hybrid', // agent runs on your device; the model is whatever provider you configure — Ollama/vLLM locally or a cloud API
  platforms: ['linux', 'mac', 'win', 'android', 'rpi', 'selfhosted'], // README/site list Raspberry Pi and Docker (recorded 2026-11-01 when added); also RISC-V, ARM, MIPS, LoongArch, FreeBSD
  worksWith: ['Ollama', 'vLLM', 'OpenAI-compatible APIs', 'MCP'],
  engine: 'external', // no inference in-process
  license: 'MIT',
  price: 'free', // software is free; you pay your own LLM provider (site FAQ)
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // agent itself: 64 MB minimum / 512 MB recommended (site); model hardware depends on the chosen backend
  stars: 30079, // github.com/sipeed/picoclaw, GitHub API read 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'picoclaw.io',
  storeLinks: {
    web: 'https://picoclaw.io',
    github: 'https://github.com/sipeed/picoclaw',
  },
  installEffort: 'installer', // easiest documented path: download from picoclaw.io, double-click picoclaw-launcher (WebUI) — see evidence
  installEvidence: 'README Install section (read 2026-11-01): download from picoclaw.io, then double-click `picoclaw-launcher` (`.exe` on Windows) to open the WebUI at localhost:18800; macOS build is not notarized (System Settings → Privacy & Security → Open Anyway); Android APK from picoclaw.io/download "no Termux required". GitHub Releases v0.3.1 assets are tar.gz/zip archives per OS/CPU plus .deb/.rpm packages and picoclaw-android-universal.zip, not .dmg/.exe installers; Docker Compose and Termux are alternatives. The picoclaw.io download page lists platforms only via JavaScript, so the exact installer file names were not seen',
  tagline: {
    en: 'Open-source personal AI agent from Sipeed written in Go, built for low-cost boards and old phones, with Ollama and vLLM support',
    de: 'Quelloffener persönlicher KI-Agent von Sipeed in Go, gebaut für günstige Boards und alte Smartphones, mit Ollama- und vLLM-Anbindung',
    fr: 'Agent IA personnel open source de Sipeed écrit en Go, conçu pour les cartes bon marché et les vieux téléphones, avec prise en charge d’Ollama et vLLM',
    ja: 'Sipeed製のGo言語オープンソース個人用AIエージェント。低価格ボードや古いスマートフォン向けで、OllamaとvLLMに対応',
    zh: 'Sipeed 用 Go 编写的开源个人 AI 智能体，面向低成本开发板和旧手机，支持 Ollama 和 vLLM',
    es: 'Agente de IA personal de código abierto de Sipeed, escrito en Go y pensado para placas económicas y móviles antiguos, compatible con Ollama y vLLM',
    pt: 'Agente de IA pessoal de código aberto da Sipeed, escrito em Go, feito para placas baratas e celulares antigos, com suporte a Ollama e vLLM',
    ar: 'وكيل ذكاء اصطناعي شخصي مفتوح المصدر من Sipeed مكتوب بلغة Go، مصمم للوحات منخفضة التكلفة والهواتف القديمة، ويدعم Ollama وvLLM',
    ko: 'Sipeed가 Go로 만든 오픈소스 개인 AI 에이전트로, 저가 보드와 오래된 휴대폰을 겨냥하며 Ollama와 vLLM을 지원',
  },
  // Comparison attributes (agent segment), from the README/site on 2026-11-01. Keys follow nanobot's: localLlm (Ollama/vLLM provider rows),
  // ollama, memory ("long-term memory", JSONL memory store), toolUse (tools, MCP). Anything else is not stated — left unset, never false.
  compare: { localLlm: true, ollama: true, memory: true, toolUse: true },
  mcpSupport: true, // README: "Native Model Context Protocol integration" (v0.2.1 onward)
  reviewSlug: 'picoclaw-review',
  pqReview: {
    date: '2026-11-01',
    version: '0.3.1',
    versionSourceUrl: 'https://github.com/sipeed/picoclaw/releases/tag/v0.3.1',
  },
  verdict: 'Best for tinkerers who want a very small, MIT-licensed agent that can sit on a Raspberry Pi, RISC-V board or spare Android phone and talk to their own Ollama or vLLM server, if they accept the maker’s own warning that it is early-stage software not meant for production before v1.0.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-08-19', // newest commit on the default branch (feat(models) default fallback chain, #3200), GitHub API read 2026-11-01; latest stable release v0.3.1 is 2026-07-03
  lastUpstreamUpdateSource: 'https://github.com/sipeed/picoclaw',
}
