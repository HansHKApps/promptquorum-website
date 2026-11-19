// Local AI App Directory — llmfit (layer: hardware-aware local-LLM selection, fit scoring and
// benchmarking CLI/TUI; MIT, Rust; runs no models itself)
// Added 2026-11-19 at the owner's request. No maker outreach — independent PromptQuorum entry; no
// founder-review badge. NOT hands-on tested.
// Sources read 2026-11-19:
// - github.com/AlexsJones/llmfit (README: "Find out which open-source Large Language Models (LLMs) your
//   hardware can comfortably run"; hardware auto-detection of CPU cores, RAM, GPUs, VRAM, unified memory
//   [NVIDIA CUDA, Apple Silicon, AMD ROCm, Intel OneAPI]; model scoring on quality, speed, fit, context;
//   interactive TUI default + CLI mode (fit / recommend / info / bench / doctor / serve); web dashboard +
//   REST API (/api/v1/system, /api/v1/models); runtime providers Ollama, llama.cpp, MLX, Docker Model Runner,
//   LM Studio; `llmfit bench` measures real tok/s and `--share` contributes results; cluster mode (Ray) is
//   labelled "Preview ... tested only against a mock Ray Dashboard"; install paths winget, Scoop, Homebrew,
//   MacPorts, install script, uv/pip, Docker image, release binaries, cargo from source; Windows release
//   binaries signed via SignPath from v1.1.19; "Privacy: this program will not transfer any information to
//   other networked systems unless specifically requested by the user"; license MIT; names `llm-checker` as an
//   alternative);
// - api.github.com/repos/AlexsJones/llmfit (full_name AlexsJones/llmfit; license.spdx_id MIT; 39,102 stars;
//   homepage field empty; archived false; pushed_at 2026-11-18T14:59:42Z);
// - api.github.com/repos/AlexsJones/llmfit/releases (latest release v1.1.20 published 2026-11-03T17:39:35Z;
//   assets are .tar.gz/.zip archives per target triple + .sha256 — no .dmg/.exe/.msi installer);
// - api.github.com/repos/AlexsJones/llmfit/commits (newest commits 2026-11-18T14:59Z weekly benchmark cache
//   refresh, 2026-11-18 community benchmark data PR, 2026-11-17T22:48Z "fix(serve): match every word of a
//   multi-word search in the API and MCP server");
// - raw docs/how-it-works.md, docs/providers.md, docs/platform-support.md on the same repository (Windows:
//   "RAM and CPU detection works. NVIDIA GPU detection via nvidia-smi if installed"; speed estimates come from
//   a memory-bandwidth model and carry an estimate_confidence of measured_local / measured_community /
//   calibrated / estimated / unsupported; embedded model database from the HuggingFace API);
// - raw Cargo.toml (workspace version "1.1.20", license "MIT");
// - llmfit.axjns.dev (one-line landing page: tagline "Match LLM models to your hardware", the install-script
//   command and a GitHub link — it only hosts the install script, so the repository stays the tile `url`);
// - localhosted.com/llmfit (third-party directory listing; used for orientation only, not as a source for facts).
// Notes:
// - No dedicated product website: the GitHub repository's `homepage` field is empty and llmfit.axjns.dev is
//   only an install-script landing page. `url` therefore stays the repository (rule: github.com url is correct
//   only when no separate website exists).
// - locality 'local': it inspects the user's own machine and contacts external services only when a feature
//   that needs them is requested (model downloads, provider queries, community leaderboard), per the README.
// - engine 'external': llmfit runs no inference of its own; benchmarks and downloads go through Ollama,
//   llama.cpp, MLX, LM Studio or Docker Model Runner.
// - installEffort 'one-command': brew / winget / scoop / uv / curl|sh each fully install it. The Releases page
//   offers archives only (no installer), so 'installer' is not claimed.
// - hqCountry: NOT SET. The project is a personal open-source repo of one maintainer (GitHub user AlexsJones);
//   the README privacy/code-signing text and the docs name no company, address, governing law or authority.
//   The GitHub profile location field is not a primary HQ source under the HQ-flag rule — flagged in the report.
// Last upstream update: 2026-11-18 (newer of latest release v1.1.20 on 2026-11-03 and last push
//   2026-11-18T14:59:42Z) → NOT stale (1 day before this 2026-11-19 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llmfit',
  name: 'llmfit',
  categories: ['runtimes-managers', 'evaluation-benchmarking'],
  interfaces: ['cli', 'web'],
  locality: 'local', // inspects the user's own hardware; external services only on explicit user request, per README
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp', 'MLX', 'LM Studio', 'Docker Model Runner'], // runtime providers named in README / docs/providers.md
  engine: 'external', // runs no inference itself; downloads and benchmarks go through the providers above
  license: 'MIT', // github.com/AlexsJones/llmfit license field + Cargo.toml, checked 2026-11-19
  price: 'free',
  hardware: null, // a lightweight Rust binary; the hardware floor depends on the models a user then runs
  stars: 39102, // github.com/AlexsJones/llmfit, checked 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/AlexsJones/llmfit',
  storeLinks: {
    github: 'https://github.com/AlexsJones/llmfit',
  },
  installEffort: 'one-command',
  installEvidence: 'github.com/AlexsJones/llmfit README, checked 2026-11-19: `winget install --exact --id AlexsJones.llmfit` and `scoop install llmfit` (Windows), `brew install AlexsJones/llmfit/llmfit` (macOS/Linux), `uv tool install -U llmfit`, a curl install script and a `ghcr.io/alexsjones/llmfit` Docker image each fully install it. The Releases page (v1.1.20) offers only .tar.gz/.zip archives with .sha256 files per target (aarch64/x86_64/riscv64 for macOS, Linux, Windows) — no .dmg/.exe/.msi installer, so the tier stays one-command.',
  tagline: {
    en: 'Free, open-source (MIT) terminal tool that detects your CPU, RAM and GPU and ranks hundreds of open LLMs by fit, estimated speed, quality and context — with Ollama, llama.cpp, MLX, LM Studio and Docker Model Runner support; it runs no models itself',
    de: 'Kostenloses, quelloffenes (MIT) Terminal-Tool, das CPU, RAM und GPU erkennt und Hunderte offener LLMs nach Passung, geschätzter Geschwindigkeit, Qualität und Kontext einordnet — mit Unterstützung für Ollama, llama.cpp, MLX, LM Studio und Docker Model Runner; es führt selbst keine Modelle aus',
    fr: "Outil de terminal gratuit et open source (MIT) qui détecte votre CPU, votre RAM et votre GPU et classe des centaines de LLM ouverts selon l'adéquation, la vitesse estimée, la qualité et le contexte — compatible avec Ollama, llama.cpp, MLX, LM Studio et Docker Model Runner ; il n'exécute lui-même aucun modèle",
    ja: 'CPU・RAM・GPUを検出し、数百のオープンLLMを適合度・推定速度・品質・コンテキストでランク付けする、無料のオープンソース（MIT）ターミナルツール — Ollama、llama.cpp、MLX、LM Studio、Docker Model Runnerに対応。自身ではモデルを実行しない',
    zh: '免费开源（MIT）的终端工具，检测CPU、内存和GPU，并按适配度、预估速度、质量和上下文对数百个开源LLM排序 —— 支持Ollama、llama.cpp、MLX、LM Studio和Docker Model Runner；自身不运行任何模型',
    es: 'Herramienta de terminal gratuita y de código abierto (MIT) que detecta tu CPU, RAM y GPU y ordena cientos de LLM abiertos según ajuste, velocidad estimada, calidad y contexto — compatible con Ollama, llama.cpp, MLX, LM Studio y Docker Model Runner; no ejecuta modelos por sí misma',
    pt: 'Ferramenta de terminal gratuita e de código aberto (MIT) que detecta sua CPU, RAM e GPU e classifica centenas de LLMs abertos por adequação, velocidade estimada, qualidade e contexto — com suporte a Ollama, llama.cpp, MLX, LM Studio e Docker Model Runner; ela não executa modelos por conta própria',
    ar: 'أداة طرفية مجانية ومفتوحة المصدر (MIT) تكتشف المعالج والذاكرة ووحدة الرسوميات لديك وتصنّف مئات نماذج LLM المفتوحة حسب الملاءمة والسرعة المقدّرة والجودة والسياق — مع دعم Ollama وllama.cpp وMLX وLM Studio وDocker Model Runner؛ ولا تشغّل أي نموذج بنفسها',
    ko: '무료 오픈소스(MIT) 터미널 도구로, CPU·RAM·GPU를 감지하여 수백 개의 오픈 LLM을 적합도, 추정 속도, 품질, 컨텍스트 기준으로 순위를 매김 — Ollama, llama.cpp, MLX, LM Studio, Docker Model Runner 지원. 자체적으로 모델을 실행하지는 않음',
  },
  reviewSlug: 'llmfit-review',
  // Comparison attributes (runtimes & managers segment): verified against the README, docs/providers.md and
  // docs/platform-support.md on 2026-11-19; a missing key means not stated there, never false.
  // headless: true — `llmfit serve` runs the API and web dashboard without the terminal UI. desktopApp is left
  // unset: the README documents no packaged desktop app, but the Cargo workspace has a llmfit-desktop crate
  // that was not examined, so "none" is not asserted.
  compare: { headless: true },
  pqReview: {
    date: '2026-11-19',
    version: '1.1.20',
    versionSourceUrl: 'https://github.com/AlexsJones/llmfit/releases/tag/v1.1.20',
  },
  verdict: 'Best for anyone who wants to know before downloading which open LLMs and quantizations fit their own CPU, RAM and GPU, with a ranked list, optional benchmarking and a JSON/HTTP API for scripts — weaker fit for people who want a tool that actually runs models, since llmfit only recommends and hands off to Ollama, llama.cpp, MLX, LM Studio or Docker Model Runner, and its speed numbers are estimates unless measured.',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-18', // github.com/AlexsJones/llmfit, last push 2026-11-18 (latest release v1.1.20 on 2026-11-03), checked 2026-11-19
  lastUpstreamUpdateSource: 'https://github.com/AlexsJones/llmfit/commits/main',
}
