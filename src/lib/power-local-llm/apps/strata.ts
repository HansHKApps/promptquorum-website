// Local AI App Directory — Strata (layer: run-serve — inference engine + desktop app for one large MoE model)
// Added 2026-10-23 on the owner's request. All facts below read from github.com/Niko1221/Strata (README, docs/SAFETY.md,
// docs/HOW_IT_WORKS.md, the v0.2.2 release and its asset list) on 2026-10-23 — no hands-on testing.
// The repository has no separate product website (homepage field empty), so `url` is the repo and the installers live on its Releases page.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'strata',
  name: 'Strata',
  categories: ['inference-engines'],
  interfaces: ['desktop', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Codex CLI', 'OpenCode', 'OpenClaw', 'Hermes Agent', 'OpenAI', 'Anthropic'],
  engine: 'builtin',
  license: 'MIT', // README + GitHub API license field (spdx MIT), read 2026-10-23; model files carry their own licences
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // README: "at least 32 GB of RAM and graphics memory (VRAM) together", plus about 80 GB free disk; a CUDA, HIP or SYCL engine needs a graphics card to start, the Mac engine can run without one — read 2026-10-23
  stars: 30740, // github.com/Niko1221/Strata via GitHub API, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'github.com/Niko1221/Strata',
  storeLinks: {
    github: 'https://github.com/Niko1221/Strata',
    web: 'https://github.com/Niko1221/Strata/releases/latest',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'GitHub Releases v0.2.2 ships Strata-0.2.2-windows-cuda13.exe / -cuda12.exe / -hip.exe / -hip-rdna3.exe, Strata-0.2.2-linux-nvidia-cuda13.AppImage / -cuda12 / -amd-rx9070 / -amd-rx7900 / -amd-strixhalo and Strata-0.2.2-mac.dmg; README says the Windows installer is not code-signed yet, Linux needs FUSE 2, the Mac build needs Apple Silicon and macOS 15+. A one-line install.sh / install.ps1 Terminal path also exists. checked 2026-10-23',
  tagline: {
    en: 'Runs a 125-billion-parameter open model on a gaming PC, with an OpenAI- and Anthropic-compatible local API',
    de: 'Betreibt ein offenes Modell mit 125 Milliarden Parametern auf einem Gaming-PC, mit lokaler OpenAI- und Anthropic-kompatibler API',
    fr: 'Fait tourner un modèle ouvert de 125 milliards de paramètres sur un PC de jeu, avec une API locale compatible OpenAI et Anthropic',
    ja: '1,250億パラメータのオープンモデルをゲーミングPCで動かす、OpenAI・Anthropic互換のローカルAPI付きアプリ',
    zh: '在游戏电脑上运行1250亿参数开源模型，并提供兼容OpenAI与Anthropic的本地API',
    es: 'Ejecuta un modelo abierto de 125 000 millones de parámetros en un PC gaming, con API local compatible con OpenAI y Anthropic',
    pt: 'Executa um modelo aberto de 125 bilhões de parâmetros em um PC gamer, com API local compatível com OpenAI e Anthropic',
    ar: 'يشغّل نموذجًا مفتوحًا بـ 125 مليار معلمة على حاسوب ألعاب، مع واجهة API محلية متوافقة مع OpenAI وAnthropic',
    ko: '1,250억 파라미터 오픈 모델을 게이밍 PC에서 실행하며 OpenAI·Anthropic 호환 로컬 API를 제공합니다',
  },
  mcpSupport: true, // README: "AI tools can also install, start and stop Strata through its MCP server" (docs/MCP_SERVER.md)
  reviewSlug: 'strata-review',
  // Comparison attributes (inference-engines segment), each verified against the README on 2026-10-23;
  // cpuInference is not stated as a supported mode (a graphics card is required except on the Mac), so it stays unset (not stated, never false).
  compare: { openaiApi: true, nvidiaGpu: true, appleSilicon: true, amdGpu: true, distributed: true },
  pqReview: {
    date: '2026-10-23',
    version: '0.2.2',
    versionSourceUrl: 'https://github.com/Niko1221/Strata/releases/tag/v0.2.2',
  },
  verdict: 'Best for people with a gaming PC (32 GB of RAM plus graphics memory) who want one very large open model behind a local OpenAI- and Anthropic-compatible API; limited by a single supported model family, an 80 GB disk need, a project that is only a month old and unverified privacy and speed claims.',
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-21', // GitHub: release v0.2.2 published 2026-10-21T11:10:21Z (latest push 2026-10-21T10:46:11Z), read via the GitHub API 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/Niko1221/Strata/releases/tag/v0.2.2',
}
