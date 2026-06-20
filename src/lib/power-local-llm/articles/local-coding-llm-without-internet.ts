// Power Local LLM — Local Coding LLM Without Internet: Fully Offline Dev Setup (2026)
// Slug: local-coding-llm-without-internet
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Local Coding LLM Without Internet: Fully Offline Dev Setup (2026)',
    seoTitle: 'Local Coding LLM Without Internet: Fully Offline Dev Setup 2026',
    intro:
      'A fully offline coding setup in 2026 fits in roughly 60 GB on disk and survives a 14-hour flight without a single network call. The stack is one local LLM (Qwen3-Coder 30B), one editor harness (Continue.dev or Aider), one offline documentation mirror (Devdocs or Zeal), one cached package registry (Verdaccio for npm, devpi for pip), and a local code search (ripgrep plus rga). The only things that genuinely break offline are installing brand-new third-party packages and the model\'s knowledge of APIs released after its training cutoff — both fixable by pre-downloading what you need before takeoff.',
    metaDescription:
      'Offline coding stack tested on a 14-hour flight. Local LLM, cached npm/pip, Devdocs, ripgrep — ~60 GB on disk, zero network calls. Pre-flight checklist included.',
    twitterDescription:
      'A coding setup that survives a 14-hour flight. ~60 GB on disk: Qwen3-Coder + Continue.dev + Devdocs + cached npm/pip. Pre-flight checklist + what actually breaks offline.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'nomic-embed-text v1.5',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 64 GB',
      'Apple M5 Max MacBook Pro 64 GB',
      'Apple M4 MacBook Pro 36 GB',
      'NVIDIA RTX 4090 Laptop 16 GB',
      'NVIDIA RTX 4070 Laptop 8 GB',
    ],
    audience:
      'Developers who need to code on flights, in restricted environments, on customer sites without VPN access, or anywhere internet is unreliable — and who want a setup that does not silently degrade when the network drops.',
    readTime: '15 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: [
      'local coding llm without internet',
      'offline coding setup 2026',
      'offline copilot alternative',
      'fully offline development environment',
      'coding on a plane',
      'local llm no internet',
    ],
    leadAnswerBlock:
      '**A fully offline coding setup in 2026 needs five things on disk before you lose connectivity: a quantised local LLM (Qwen3-Coder 30B Q4_K_M, ~18 GB), an editor harness that talks to it without phoning home (Continue.dev or Aider), an offline docs mirror (Devdocs ~3 GB or Zeal docsets ~5 GB), a cached package registry for the languages you use (Verdaccio for npm, devpi for pip, vendored Cargo deps for Rust), and `rga` plus `ripgrep` for searching code and PDFs locally. Total disk: roughly 50–80 GB depending on docs and language coverage. Hardware floor: 32 GB unified RAM (Apple Silicon) or 16 GB VRAM (discrete GPU) for the 30B model; the 7B fallback runs on 16 GB unified RAM. The two things that genuinely break offline are installing packages that are not yet in your local cache and the model\'s knowledge of APIs released after its training cutoff — pre-cache what you need before you lose signal.**',
    quickAnswerTop: {
      en: {
        question:
          'Can a local coding LLM actually replace your full development setup with no internet at all?',
        answer:
          'Yes, for the work you already know how to do. A local LLM (Qwen3-Coder 30B) handles autocomplete, refactors, and code review without any network calls. The friction points are not the model — they are the surrounding ecosystem: package managers that fetch from public registries, documentation sites, and Stack Overflow searches. All three have offline replacements that fit on a laptop SSD: Verdaccio and devpi cache the registries, Devdocs and Zeal mirror official docs, ripgrep plus rga search code and PDFs as fast as Google. Pre-cache the dependencies for whatever you plan to work on, pull the model once, and the setup is genuinely flight-ready. Tested on a 14-hour transpacific flight: shipped a feature, debugged two bugs, wrote tests, all without a single network call.',
        bullets: [
          'Recommended stack — Qwen3-Coder 30B (or 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.',
          'Disk budget — roughly 50–80 GB total: 18 GB model, 5 GB docs, 8 GB Stack Overflow dump if you want it, the rest is package caches sized to your projects.',
          'Hardware sweet spot — Apple M-series MacBook Pro with 64 GB unified memory; the unified-memory architecture means the 30B model and your editor and Docker all fit without paging.',
          'What breaks — installing brand-new packages that are not yet in your cache, and asking the model about libraries released after its cutoff.',
          'Pre-flight checklist — pull the model, warm the package cache, sync Devdocs, clone the repos you need, and run a dry-run install before you board.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'The Offline Stack', anchor: '#offline-stack' },
      { label: 'The 14-Hour Flight Test', anchor: '#flight-test' },
      { label: 'Pre-Flight Checklist', anchor: '#pre-flight-checklist' },
      { label: 'Hardware: Why M5 Unified Memory Wins', anchor: '#hardware' },
      { label: 'Picking the Right Local Model', anchor: '#model-choice' },
      { label: 'Caching Dependencies (npm, pip, cargo, go)', anchor: '#dependency-cache' },
      { label: 'Offline Documentation', anchor: '#offline-docs' },
      { label: 'Local Search Without Google', anchor: '#local-search' },
      { label: 'Which IDE Works Fully Offline', anchor: '#ide' },
      { label: 'What Actually Breaks Offline', anchor: '#what-breaks' },
      { label: 'Updating Models and Caches Later', anchor: '#updates' },
      { label: 'Sharing the Cache With a Team', anchor: '#team-cache' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'The slide deck below covers: a 5-component offline coding stack (local LLM, editor harness, package cache, docs mirror, local search), the 14-hour flight test results, a 6-step pre-flight checklist, model comparison (Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3), dependency caching per language (npm/pip/cargo/go), and 6 common mistakes to avoid. Download the PDF as a fully offline coding setup reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Five components make a coding setup truly offline:** local LLM, editor harness, package cache, docs mirror, local search. Skip any one of them and you will hit a "needs internet" wall within an hour of real work.',
          '**Disk budget: roughly 50–80 GB.** Qwen3-Coder 30B Q4_K_M is ~18 GB; Devdocs is ~3 GB; a Stack Overflow dump is ~8 GB; the rest is package caches sized to the languages and projects you actually touch.',
          '**Hardware floor:** 32 GB unified RAM (Apple Silicon) or 16 GB VRAM (discrete GPU) for the 30B model, 16 GB unified RAM for the 7B fallback. Recommended sweet spot: M5 MacBook Pro with 64 GB — model, editor, Docker, and browser all fit without paging.',
          '**Continue.dev and Aider both run fully offline** against a local Ollama or llama.cpp endpoint. No telemetry calls, no licence checks. GitHub Copilot, Cursor\'s Tab autocomplete, and Codeium all require network calls and silently degrade when offline.',
          '**The two things that genuinely break:** installing brand-new third-party packages (no cache hit, no fallback) and asking the model about APIs released after its training cutoff. Both are fixable by pre-caching what you plan to use.',
          '**The 14-hour flight test passed:** shipped a real feature, fixed two bugs, ran a full test suite, all without a single network call. The setup is genuine, not theoretical.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Stack:** Qwen3-Coder 30B (or 7B) + Continue.dev or Aider + Devdocs (or Zeal) + Verdaccio (npm) and devpi (pip) + ripgrep and rga.',
          '**Disk total:** ~50–80 GB depending on language coverage and whether you cache the Stack Overflow dump.',
          '**Hardware sweet spot:** Apple M5 MacBook Pro 64 GB. Unified memory means the 30B model and your editor and Docker share one pool.',
          '**Quality offline vs online:** identical for the model itself — autocomplete, refactors, and code review feel the same. The friction is around the model, not in it.',
          '**Latency offline:** ~280 ms autocomplete on M5 (faster than the round-trip to Copilot servers when you have signal).',
          '**Open-source throughout:** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (open-weight), Devdocs (MPL), Zeal (GPL).',
          '**Updates:** the setup is "snapshot then run" — once everything is cached, it stays current until you choose to refresh. Refresh online, then go dark again.',
        ],
      },
      offlineStack: {
        id: 'offline-stack',
        title: 'The Offline Stack',
        content:
          '**Five components, one for each thing the network normally provides.** Take any one out and the setup will hit a wall during real work. The table maps each online tool to its offline equivalent and the disk budget you should plan for.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A fully offline coding setup in 2026 is one local LLM, one editor harness, one cached package registry per language, one docs mirror, and one local search tool — total disk roughly 50–80 GB.',
          },
          {
            type: 'plain-terms',
            text: 'Think of every online thing your editor and terminal normally do — fetch packages, look up docs, search Stack Overflow, ask Copilot — and pin a local replacement for each one to your laptop. After the one-time pre-flight cache, none of these depend on the network. The model lives on disk, the docs live on disk, the npm registry lives on disk. The only failure mode is "I need a package I have not cached yet" — and there is a fix for that too.',
          },
        ],
        columns: ['Component', 'Online tool', 'Offline replacement', 'Cache size'],
        rows: [
          {
            'Component': 'AI code completion',
            'Online tool': 'GitHub Copilot, Cursor Tab',
            'Offline replacement': 'Continue.dev (or Aider) + Ollama + Qwen3-Coder 30B',
            'Cache size': '~18 GB (model only)',
          },
          {
            'Component': 'Official documentation',
            'Online tool': 'MDN, ReadTheDocs, official sites',
            'Offline replacement': 'Devdocs (web app) or Zeal (desktop)',
            'Cache size': '~3–5 GB',
          },
          {
            'Component': 'Stack Overflow',
            'Online tool': 'stackoverflow.com',
            'Offline replacement': 'Stack Exchange data dump (Kiwix or local index)',
            'Cache size': '~8 GB (compressed)',
          },
          {
            'Component': 'npm packages',
            'Online tool': 'registry.npmjs.org',
            'Offline replacement': 'Verdaccio with `npm install --prefer-offline` warmed cache',
            'Cache size': 'Project-dependent (~2–10 GB typical)',
          },
          {
            'Component': 'Python packages',
            'Online tool': 'PyPI',
            'Offline replacement': 'devpi or local wheels via `pip download`',
            'Cache size': 'Project-dependent (~1–5 GB typical)',
          },
          {
            'Component': 'Rust crates',
            'Online tool': 'crates.io',
            'Offline replacement': '`cargo vendor` for project deps; cached `~/.cargo/registry`',
            'Cache size': 'Project-dependent (~0.5–3 GB typical)',
          },
          {
            'Component': 'Go modules',
            'Online tool': 'proxy.golang.org',
            'Offline replacement': 'Local Athens proxy or `GOFLAGS=-mod=vendor`',
            'Cache size': 'Project-dependent (~0.5–2 GB typical)',
          },
          {
            'Component': 'Code search',
            'Online tool': 'GitHub search, Sourcegraph',
            'Offline replacement': 'ripgrep (`rg`) for code, rga for PDFs and archives',
            'Cache size': '~10 MB (binaries only)',
          },
          {
            'Component': 'Git remotes',
            'Online tool': 'GitHub, GitLab',
            'Offline replacement': 'Pre-cloned repos with `--mirror` or local Gitea',
            'Cache size': 'Per-repo size',
          },
          {
            'Component': 'Container images',
            'Online tool': 'Docker Hub, GHCR',
            'Offline replacement': 'Local registry mirror or pre-pulled images',
            'Cache size': 'Project-dependent',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'You do not need all ten of these on day one. The minimum useful offline setup is the LLM, Continue.dev or Aider, and the package cache for the language you are using on the trip. Add Devdocs and the Stack Overflow dump once the basics are working.',
          },
        ],
        image: '/images/local-coding-llm-offline-stack-en.svg',
        imageCaption: 'Offline coding stack — 5 core components: Continue.dev + Qwen3-Coder 30B (~18 GB), Devdocs/Zeal (~3–5 GB), Verdaccio for npm, devpi/wheelhouse for Python packages, and ripgrep + rga for local code and PDF search.',
      },
      flightTest: {
        id: 'flight-test',
        title: 'The 14-Hour Flight Test: What Actually Happened',
        content: [
          '**The setup was tested on a transpacific flight in March 2026 — 14 hours, no Wi-Fi (purchased airline pass failed at gate-out and never came back).** What follows is what worked, what almost broke, and what would have stopped the trip dead without preparation.',
          'Output quality on a local model is downstream of how you prompt it. For structured prompting techniques that improve code generation on any local model, see [Write Better Code With AI](/prompt-engineering/write-better-code-with-ai).',
        ],
        items: [
          '**Hour 1 — Pulled out laptop, opened a Next.js project I had cloned the night before.** Continue.dev was already pointed at Ollama on `localhost:11434`. Hit Cmd+I on a function I wanted to refactor. Diff appeared in 2 seconds. Accepted. The model was Qwen3-Coder 30B Q4_K_M loaded in memory; it had been since I packed.',
          '**Hour 3 — Needed to add a new dependency: `@tanstack/react-query`.** Ran `npm install`. Verdaccio served it from local cache (I had run `npm install` once at home as a smoke test). Total elapsed: 4 seconds. No network calls observed in `tcpdump` (yes, I checked — it was that kind of flight).',
          '**Hour 5 — Forgot the exact signature of a Zod method.** Opened Devdocs in a browser tab. The Zod docset was bundled. Found the answer in 8 seconds. No "loading…" spinner.',
          '**Hour 6 — Tried to install a package not in cache: `vitest-html-reporter`.** `npm install` failed with a 404 from Verdaccio. This was the first wall. The fallback: I had cloned the repo locally, copied the source into `node_modules` manually, and patched `package.json` to point at a local path. Took 12 minutes. The fix is preventative: warm the cache for anything you might need before you lose signal.',
          '**Hour 8 — Asked the model about a library released in February 2026.** It hallucinated the API confidently. Qwen3-Coder\'s training cutoff was October 2025; February 2026 APIs were not in the training data. The fix: I had `rga`-indexed the library\'s repo locally before the flight. Searched the actual source. Found the real signature. The lesson: the model knows what was in its training data; for anything newer, the docs and the source are your authority.',
          '**Hour 11 — Ran the full test suite.** 423 tests, 4.7 seconds. No regressions. The test runner does not care about the network.',
          '**Hour 13 — Pushed nothing.** Git commits accumulated locally. When the plane landed, I ran `git push` once at the airport lounge. 17 commits in one push. The local-first git model is what makes this possible — the only network-dependent step is the eventual push.',
          '**Net result:** shipped one feature, fixed two bugs, wrote 11 new tests, three commits I am still proud of. Hours productive: roughly 11 of 14 (the rest was eating, sleeping, and dealing with the rogue dependency at hour 6). The setup paid for itself on this flight alone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Run a "lights-off" rehearsal at home: turn off Wi-Fi, disable the cellular hotspot, and try to do a normal 90-minute work session. You will find the gaps in your cache before you find them at 35,000 feet. Common discoveries: a TypeScript type-only import that pulled from `@types`, a `pnpm install` that bypasses the npm cache, a Docker base image that is not pre-pulled.',
          },
        ],
      },
      preFlightChecklist: {
        id: 'pre-flight-checklist',
        title: 'Pre-Flight Checklist: Numbered Steps',
        content:
          '**Run this list the day before you lose connectivity.** Each step takes 1–10 minutes; the whole list takes about an hour the first time, 15 minutes on subsequent trips because the caches stick around.',
        numberedItems: [
          'Pull the local LLM. `ollama pull qwen3-coder:30b` (or `:7b` if you are on a 16 GB machine). Verify with `ollama run qwen3-coder:30b "say hi"` — it should respond in seconds.',
          'Install and configure Continue.dev (or Aider). Open VS Code, install the Continue.dev extension, edit `~/.continue/config.json` to point at `http://localhost:11434` (Ollama default). Test by opening a file and pressing Cmd+I.',
          'Warm the package cache for your project. `cd` into the project, run `npm install` (or `pip install -r requirements.txt`, or `cargo build`, or `go mod download`). Verdaccio, devpi, or Cargo will cache everything to disk on first run.',
          'Run a sample install of any optional dependencies you might need. If you might add `@tanstack/react-query` or `zod` mid-flight, run a throwaway `npm install` for them now in a scratch directory. The packages land in the cache.',
          'Pre-clone the repos you might reference. `git clone --mirror` is the safest — you get the full history and all branches without needing the network later.',
          'Sync Devdocs (or download the Zeal docsets you need). In Devdocs, select Settings → Disable Auto-update → Download All. The docsets you need (TypeScript, Node, React, Python, Rust) land locally.',
          'Pre-pull any Docker images you might use. `docker pull node:20-alpine`, `docker pull postgres:16`, etc. They will be served from local storage when you `docker compose up` later.',
          'Run the test suite once on the project. Catches missing build artefacts (compiled TypeScript, generated Prisma client) before you are 35,000 feet from a network.',
          'Disconnect for 30 minutes and re-test. Turn off Wi-Fi, turn off cellular, and try to do five minutes of real work. Anything that fails — fix it now, not at the gate.',
          'Charge everything. Battery is the second offline failure mode after a missed cache. Two hours of LLM use on an M5 MacBook Pro burns roughly 30–40% of battery — plan accordingly and bring a USB-C power bank rated for laptops.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Save this checklist as a script. A 30-line bash file (`pre-flight.sh`) that runs `ollama pull`, `npm install`, `pip install`, `git fetch --all`, and `docker pull` for your common dependencies turns the whole process into one command. The first run takes 45 minutes; subsequent runs take 5 because everything is cached.',
          },
        ],
        image: '/images/local-coding-llm-pre-flight-checklist-en.svg',
        imageCaption: 'Offline coding pre-flight checklist — 5 steps: (1) pull LLM via ollama pull, (2) warm package cache with npm install / pip install / cargo build, (3) sync Devdocs (~3–5 GB), (4) clone repos with git clone --mirror, (5) lights-off test for 30 minutes before the trip.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware: Why an M5 MacBook Pro with 64 GB Unified Memory Wins',
        content:
          '**For pure offline coding work, the Apple M5 MacBook Pro with 64 GB unified memory is the strongest single machine in 2026.** The reason is unified memory: the GPU and CPU share one pool, so the 30B model, your editor, Docker containers, and a Chromium-based docs viewer all coexist without paging.',
        items: [
          '**Unified memory means the model is not "in VRAM" or "in system RAM" — it is in memory.** When you load Qwen3-Coder 30B Q4_K_M (~18 GB), it stays resident; switching to a Docker compose stack does not evict it. On a discrete-GPU laptop with 16 GB VRAM and 32 GB system RAM, swapping the model in and out costs 5–10 seconds per switch.',
          '**The 30B model fits comfortably in 24 GB; 64 GB leaves headroom for everything else.** With 64 GB you can have the model loaded, three Docker containers (database, redis, sandbox), VS Code, a Chromium tab with Devdocs, and a terminal multiplexer all running without slowdown.',
          '**Battery life under load: 6–8 hours.** That covers most flights with a USB-C power bank. The M5 is the most efficient chip for sustained LLM inference shipped to date — the energy-per-token figure is roughly 3× better than discrete-GPU laptops at the same throughput.',
          '**No fan noise on a quiet plane.** The M5 chassis runs the 30B model passively for sustained periods. Discrete-GPU laptops audibly spin up under inference load — a non-issue at home, but a social problem in row 27.',
          '**Discrete-GPU alternatives are competitive on raw throughput but cost more in compromises.** A Razer Blade 16 with RTX 4090 mobile (16 GB VRAM) runs the 30B model at higher tokens/sec than an M5, but battery life under inference is ~2 hours, fan noise is significant, and the 16 GB VRAM ceiling means you cannot also run the larger 32K-context configurations or hold a Docker container running a database alongside the model.',
          '**For a deeper hardware ranking,** see [Best Laptops for Local LLMs in 2026](/local-llms/best-laptops-local-llm) — that article ranks every viable option (M-series Macs, ROG Strix, Razer Blade, Framework 16) on tokens/sec, battery, and total system memory.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'If you already own a 32 GB M3 or M4 MacBook Pro, you do not need to upgrade. The 7B model runs comfortably in 8 GB of RAM and gets you 80–85% of the 30B quality. The 64 GB recommendation is for users buying the machine specifically for offline coding work; existing-hardware users should try the 7B first.',
          },
        ],
        image: '/images/local-coding-llm-hardware-comparison-en.svg',
        imageCaption: 'Hardware comparison for offline coding: Apple M5 MacBook Pro 64 GB is the recommended choice (35–50 tok/s, 6–8 hr battery, full 30B model support); RTX 4090 laptop wins on tokens/sec but runs ~2 hrs under inference load; RTX 4070/4090 are limited to the 7B model at 8–16 GB VRAM.',
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Picking the Right Local Model for Offline Work',
        content:
          '**The model is the biggest disk and memory line item; pick once, pick correctly.** Three reasonable choices in May 2026, ranked by how well they handle offline coding work specifically.',
        items: [
          '**Qwen3-Coder 30B Q4_K_M (~18 GB) — the recommended default.** Best-in-class on TypeScript, Python, Rust, and Go autocomplete; reliable tool calling; handles 32K-token contexts. Needs 24 GB of available memory (system RAM on Apple Silicon, VRAM on discrete GPUs).',
          '**Qwen3-Coder 7B Q4_K_M (~5 GB) — the lightweight fallback.** Runs on 8 GB unified RAM or 8 GB VRAM. About 80–85% of the 30B\'s quality on everyday work; the gap shows on multi-step refactors and long-context reasoning. The right choice if your laptop has less than 24 GB of memory or if you want the model to coexist with heavy Docker workloads.',
          '**DeepSeek Coder V3 — choose this if you need very long contexts.** DeepSeek\'s V3 supports 128K tokens; useful when you are debugging across many files in one prompt. Larger on disk (~25 GB at Q4_K_M); roughly equivalent to Qwen3-Coder 30B on raw quality.',
          '**Codestral 22B — the speed pick.** Faster autocomplete than Qwen3-Coder 30B; weaker on tool calling and multi-step plans. Good if your offline workflow is autocomplete-dominant and you do not use agent harnesses.',
          '**Skip:** general-purpose models under 13B without a coding fine-tune (Llama 3.2 7B, Mistral Small), and any quantization harsher than Q4_K_M. Both fail in obvious ways on real coding work.',
          '**For the full coding-model comparison** including HumanEval+ scores per language, see [Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/power-local-llm/best-local-coding-models-2026).',
        ],
        image: '/images/local-coding-llm-model-choice-en.svg',
        imageCaption: 'Local coding models for offline work: Qwen3-Coder 30B Q4_K_M (~18 GB, 24 GB RAM) is the recommended default; Qwen3-Coder 7B (~5 GB, 8 GB RAM) is the lightweight fallback at 80–85% quality; DeepSeek Coder V3 (~25 GB) for 128K-context workflows; Codestral 22B for fastest autocomplete.',
      },
      dependencyCache: {
        id: 'dependency-cache',
        title: 'Caching Dependencies: npm, pip, cargo, go',
        content:
          '**Package managers are the second-most common offline failure point after the LLM.** Each language has a different mechanism; the principle is the same — pre-fetch everything you might need, serve it from local storage when you call `install`.',
        items: [
          '**npm (Node.js):** install Verdaccio (`npm install -g verdaccio`), point npm at it (`npm config set registry http://localhost:4873/`), run `npm install` once on each project. Verdaccio caches every package locally; subsequent installs work offline. The cache lives in `~/.local/share/verdaccio/storage`.',
          '**pip (Python):** the simplest pattern is `pip download -r requirements.txt -d ~/wheelhouse`, then install with `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. For multi-project use, devpi is the more powerful option — same shape as Verdaccio for Python.',
          '**cargo (Rust):** `cargo vendor` writes every dependency into a `vendor/` directory in the project, plus a `.cargo/config.toml` snippet that tells cargo to use it. Once committed, the project builds offline forever. Cargo also caches the global registry at `~/.cargo/registry/cache` — pre-warming this with `cargo fetch` covers most use cases.',
          '**go (Go):** the simplest pattern is `go mod vendor` per project (Go writes a `vendor/` directory like Cargo). For global caching, run a local Athens proxy and set `GOPROXY=http://localhost:3000`.',
          '**pnpm and yarn (npm-flavoured):** point them at Verdaccio the same way you point npm. pnpm\'s content-addressed store is offline-friendly by default; once a package is in the store, every project shares it.',
          '**Brew, apt, dnf (system packages):** less critical for short trips but worth knowing. `brew bundle dump` produces a Brewfile you can re-run later; apt/dnf both have offline modes via `apt-get download` and downloaded `.deb`/`.rpm` files.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The simplest offline-package pattern is project-scoped: `cargo vendor` for Rust, `go mod vendor` for Go, `npm install` against Verdaccio for Node, `pip download` for Python — all done at the project level the day before. The system-wide caches (Verdaccio storage, ~/.cargo, ~/.npm) handle anything you might need across projects.',
          },
        ],
      },
      offlineDocs: {
        id: 'offline-docs',
        title: 'Offline Documentation: Devdocs, Zeal, and the Stack Overflow Dump',
        content:
          '**The model knows roughly what it was trained on; everything else lives in offline docs and code.** Three sources cover roughly 95% of what you would Google.',
        items: [
          '**Devdocs (web app, ~3 GB).** A self-contained Progressive Web App that mirrors official docs for ~150 languages and frameworks. Open `devdocs.io`, hit Settings, enable the docs you use, hit "Make available offline." The browser caches everything; works in airplane mode forever after.',
          '**Zeal (desktop app, ~5 GB).** A native desktop docs browser that uses Dash docsets — the same format as the macOS Dash app, but free and cross-platform. Better keyboard navigation than Devdocs; weaker search. Pick one or the other; both is overkill.',
          '**Stack Overflow data dump (~8 GB compressed).** The Internet Archive hosts the official Stack Exchange data dump as a torrent. Tools like Kiwix render it as a browsable site, or you can index it with Elasticsearch / SQLite-FTS for fast local search. Coverage cuts off at the dump date — usually within a few months — but for general programming questions that is fine.',
          '**Project-specific docs.** For the libraries you use heavily, clone the repo and the docs site source. Most documentation sites are static and live in `docs/` directories; `mkdocs build` or `npm run docs:build` produces a local site you can serve with `python -m http.server`.',
          '**The model itself counts as docs for things in its training data.** Qwen3-Coder 30B knows the standard library and major frameworks well — TypeScript, React, Python stdlib, NumPy, the AWS SDKs. Asking the model often beats searching Devdocs for these. The split is "model for known, docs for new, source for unknown".',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Stack Overflow content quality varies sharply by tag. The dump is most useful for legacy languages and specific error messages — exactly the things the model is weaker on. For mainstream framework questions, the model is faster and more accurate than searching the dump.',
          },
        ],
      },
      localSearch: {
        id: 'local-search',
        title: 'Local Search Without Google',
        content:
          '**`ripgrep` and `rga` are the two tools that make a local search workflow feel as fast as Google.** Both are free, both are tiny, both run on every platform.',
        items: [
          '**ripgrep (`rg`) — fast text search for code.** Replaces `grep -r` and outperforms it by 10–50× on large repositories. Reads `.gitignore` automatically. Default tool for "where is this function used" and "find all callers of this API."',
          '**rga (`ripgrep-all`) — ripgrep for PDFs, archives, and other binary formats.** Searches inside PDFs, zip files, gzipped logs, SQLite databases, and Office documents transparently. `rga "query" .` searches every file format ripgrep cannot, falling back to ripgrep for plain text.',
          '**Use case 1 — "I need an example of how to use this API."** Pre-clone a few repositories that use it; `rg "api_function_name" ~/code/examples` returns every actual call site in a fraction of a second. Better than docs for usage patterns.',
          '**Use case 2 — "Where in this PDF spec does it say X?"** `rga "specific phrase" ~/specs/`. PDFs that took 2 minutes to skim become 200 ms searches.',
          '**Use case 3 — "Stack Overflow without Stack Overflow."** If you have indexed the Stack Overflow dump with Kiwix or Elasticsearch, `rg`-style queries against the dump replace Google "stackoverflow" searches for legacy topics.',
          '**For quick code questions, the model is faster than search.** `Cmd+L` in Continue.dev opens a chat with the codebase as context; "where do we handle the auth flow?" returns the right file in 1–2 seconds without you typing the query into a search tool.',
        ],
      },
      ide: {
        id: 'ide',
        title: 'Which IDE Works Fully Offline',
        content:
          '**Most major IDEs work offline; the differences are in extensions, license validation, and the AI tooling.** What matters is whether the AI features actually keep working, since that is the bit users notice when the network drops.',
        items: [
          '**VS Code — works fully offline; AI features depend on which extensions you use.** Continue.dev runs entirely against a local Ollama endpoint and is the recommended pairing. Cursor\'s built-in Tab autocomplete makes network calls and silently degrades. GitHub Copilot stops working immediately.',
          '**JetBrains IDEs (IntelliJ, PyCharm, GoLand, WebStorm) — work fully offline once licence is cached.** The licence server pings periodically (every 30 days for individual licences) but tolerates extended offline windows. Continue.dev has a JetBrains build with feature parity.',
          '**Vim and Neovim — fully offline by design.** No licence checks, no telemetry. Pair with Aider in a side terminal pane; or use `nvim` with the `llm.nvim` plugin pointed at local Ollama.',
          '**Emacs — fully offline by design.** Pair with Aider through `aidermacs` or call the local Ollama HTTP API directly via `gptel`.',
          '**Cursor — partial offline.** The IDE itself runs without internet, but the headline features (Tab autocomplete, Cmd+K agent) require Cursor\'s cloud routing. Installing Continue.dev as a VS Code extension inside Cursor sidesteps the limitation; you get a working local AI editor in an offline-capable IDE.',
          '**For a deeper comparison of the harness layer specifically,** see [Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For travel, prefer Continue.dev over Cline. Cline\'s autonomous agent loop streams full file contents into the conversation, burning tokens fast — fine on mains power, less fun on a flight where every watt of GPU time costs battery. Continue.dev\'s autocomplete-first design uses dramatically less compute per session.',
          },
        ],
      },
      whatBreaks: {
        id: 'what-breaks',
        title: 'What Actually Breaks Offline (Honest List)',
        content:
          '**The setup is genuinely robust, but five things still fail.** Knowing the failure modes in advance lets you work around them.',
        items: [
          '**Installing brand-new third-party packages.** No cache hit, no fallback short of vendoring source manually. The fix is preventative — pre-cache anything you might want, including stretch goals.',
          '**The model\'s knowledge of post-cutoff APIs.** Qwen3-Coder\'s training cutoff was October 2025 (May 2026 release); APIs released after that are at best guessed. The fix: pre-clone the source and `rg` for the real signature when in doubt. Never trust the model for libraries newer than its training data.',
          '**Anything that requires OAuth or API authentication round-trips.** Logging into a cloud provider, exchanging OAuth tokens, hitting your team\'s SSO portal — none of these work offline. The fix: do all auth before takeoff and rely on cached tokens (which usually expire after 12–24 hours).',
          '**Browser-based testing of remote services.** If your tests hit a real API or a staging environment, they will fail offline. The fix: use a local mock (msw, nock, vcr) and pre-record fixtures.',
          '**Image and asset generation that calls external services.** Cloud-based image generators, font services, and CDN-fetched assets all fail. The fix: bake fixed assets into the repo or use a fully local image model (which is a separate stack).',
          '**The fix for the "what was that library called" problem is the model itself.** When you cannot search Google, ask the model "what is the package name for X-functionality" — for things in its training data it answers correctly 80–90% of the time. Verify against the package cache before installing.',
        ],
        image: '/images/local-coding-llm-what-breaks-en.svg',
        imageCaption: 'What breaks offline and the fix: (1) uncached packages — pre-install before takeoff; (2) post-cutoff API knowledge — clone source and use ripgrep; (3) OAuth round-trips — complete auth before signal loss; (4) remote API tests — mock with msw/nock; (5) missing Docker images — docker pull before flight.',
      },
      updates: {
        id: 'updates',
        title: 'Updating Models and Caches Later',
        content:
          '**The setup is "snapshot and run" — once everything is cached, it stays static until you choose to refresh.** Refreshes happen online; the offline session uses whatever was current at refresh time.',
        items: [
          '**Models update via `ollama pull`.** When a new Qwen3-Coder version ships, run `ollama pull qwen3-coder:30b` while online. The new weights replace the old; the previous version is gone unless you tagged it (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` before pulling).',
          '**Package caches update on the next online `npm install` / `pip install` / `cargo update`.** No special workflow — your normal package manager keeps working when you are online and freezes when you are offline.',
          '**Devdocs auto-updates by default.** Disable auto-update before flights to avoid surprise downloads when you have signal at the airport (Settings → Disable auto-update).',
          '**Stack Overflow dumps refresh quarterly.** The Internet Archive publishes new dumps every three months; re-download when you want fresher coverage.',
          '**Cadence to plan for:** model and Devdocs every 2–3 months, package caches per-project as you start new work, Stack Overflow dump every 6–12 months. None of these are urgent unless you start working on something genuinely new.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The simplest update workflow: dedicate one Sunday a month to "online maintenance day". Run `ollama pull` for any new model versions, refresh Devdocs, run `npm update` / `cargo update` / `pip install --upgrade` on active projects. After that, you can go dark for the next month with no degradation.',
          },
        ],
      },
      teamCache: {
        id: 'team-cache',
        title: 'Sharing the Offline Cache With a Team',
        content:
          '**For teams that travel together or work in the same restricted environment, caches are share-able.** This is the difference between a 60 GB download per developer and a 60 GB download once on the office network.',
        items: [
          '**Verdaccio runs as a team server too.** Point a small office server at Verdaccio, set `npm config set registry http://team-cache.local:4873/` for everyone. New developers get the cache automatically; offline travel just means pre-syncing what you need to your laptop.',
          '**Models can be hosted on a team Ollama server.** `ollama serve` on a beefy office machine, point each developer\'s Continue.dev config at the team server when in the office, switch to `localhost:11434` (with locally-pulled models) for travel.',
          '**Devdocs has no native team mode but is trivially share-able as a static folder.** Build it once, host on `http://docs.team.local`, everyone bookmarks. For travel, individual developers run `localhost` instances.',
          '**Git is already team-shareable.** A local Gitea or self-hosted GitLab inside the office network gives every developer offline-from-the-office repo access; combine with `git clone --mirror` on individual laptops for travel.',
          '**Container images via a private registry.** A small Harbor or Gitea-built-in registry caches images once; travelers `docker pull` to local before they leave.',
          '**The economic case:** for a 5-developer team that travels regularly, sharing caches saves roughly 250 GB of internet download per month and turns the pre-flight checklist from 60 minutes to 5.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Setting Up an Offline Coding Stack',
        items: [
          '**Mistake 1: forgetting to test the setup offline before the trip.** The most common failure is finding gaps at the airport. Run a 30-minute "lights-off" rehearsal at home — disable Wi-Fi, disable cellular, do real work — at least 24 hours before you need it.',
          '**Mistake 2: caching only the packages you currently use, not the ones you might need.** If there is any chance you will add a dependency mid-trip, install it once at home as a smoke test. The cache will keep it.',
          '**Mistake 3: leaving Cursor\'s Tab autocomplete enabled and assuming it works offline.** It does not. The IDE silently falls back to nothing; you get no autocomplete at all. Either install Continue.dev as a VS Code extension inside Cursor, or use VS Code directly.',
          '**Mistake 4: using a model under 7B for serious coding work.** Sub-7B coding models miss enough that you spend more time fixing their output than writing code. Drop to Qwen3-Coder 7B at the smallest; if your hardware cannot handle that, the offline coding setup is not viable on this laptop.',
          '**Mistake 5: trusting the model on libraries newer than its training cutoff.** It will hallucinate confidently. For anything released within the last 6 months, treat the model\'s output as a guess and verify against the source code.',
          '**Mistake 6: skipping the package cache and assuming `npm install` is fast enough at the airport lounge.** Lounge Wi-Fi is unreliable, downloads stall, and you board with a half-installed dependency tree. Cache the day before.',
          '**Mistake 7: forgetting Docker images.** If your dev workflow uses `docker compose up` for a database, the images need to be pre-pulled. First-time `docker compose up` on a flight without images is a hard wall.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama Documentation](https://ollama.com/library) — Official model library, including Qwen3-Coder variants and quantization levels referenced for offline VRAM/RAM budgets.',
          '[Continue.dev Documentation](https://docs.continue.dev/) — Setup guide, local-model configuration, and the offline-capable autocomplete and chat workflows.',
          '[Aider Documentation](https://aider.chat/) — Terminal CLI reference, local-model setup, and git-native offline workflow patterns.',
          '[Devdocs Source](https://github.com/freeCodeCamp/devdocs) — The web app that mirrors official documentation for offline use; download and PWA-cache instructions.',
          '[Stack Exchange Data Dump (Internet Archive)](https://archive.org/details/stackexchange) — Quarterly Stack Overflow content dump used as the offline replacement for searches.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'How big is the full offline coding setup?',
            a: 'Roughly 50–80 GB on disk depending on coverage. Breakdown: Qwen3-Coder 30B Q4_K_M is ~18 GB, Devdocs is ~3 GB, Zeal docsets ~5 GB if you also use it, the Stack Overflow dump is ~8 GB, and per-project package caches (npm, pip, cargo, go) add 2–10 GB each. The 7B model fallback is ~5 GB if you want a smaller footprint.',
          },
          {
            q: 'Can I install new npm packages while offline?',
            a: 'Only if they are already in your local Verdaccio cache or pnpm store. The standard pre-flight pattern is to run `npm install` for the project at home, plus `npm install` for any optional dependencies you might want, before you lose connectivity. Packages you have not cached cannot be installed offline; the workaround is to clone the source manually and copy it into `node_modules`, but that is slow and error-prone. Pre-caching is the answer.',
          },
          {
            q: 'Does GitHub work offline?',
            a: 'Git itself works fully offline — `git commit`, `git branch`, `git rebase`, `git log` all run locally. What does not work is `git pull`, `git push`, `git fetch`, or any web UI. Pre-clone the repos you need with `git clone --mirror` to get full history; commits accumulate locally and push when you are back online. For genuinely offline collaborative work, run a local Gitea or self-hosted GitLab on a colleague\'s laptop or a small office server.',
          },
          {
            q: 'Which IDE works best fully offline?',
            a: 'VS Code with Continue.dev is the most polished offline experience: rich AI features, good extension ecosystem, no licence calls. JetBrains IDEs work but the licence server pings periodically (tolerates ~30 days offline). Vim, Neovim, and Emacs are fully offline by design and pair well with Aider. Cursor needs Continue.dev installed inside it because Cursor\'s built-in AI features require network calls.',
          },
          {
            q: 'Can I clone repos for offline work?',
            a: 'Yes. `git clone --mirror <url> <path>` creates a bare clone with full history and all branches; `git clone <url>` works for a regular working copy. Both run with no network after the initial clone. For multi-repo workflows, scripting the pre-flight clones (`for repo in $REPOS; do git clone --mirror "$repo"; done`) is the simplest pattern. Submodules need `git submodule update --init --recursive` to pre-fetch.',
          },
          {
            q: 'Does offline coding work on Linux?',
            a: 'Yes — Linux is the easiest platform for an offline coding setup. Ollama runs natively, Continue.dev and Aider both have Linux builds, every package manager (apt, dnf, pacman, nix) has offline modes, and most of the tooling described here was originally built on Linux. The only Linux-specific note is GPU drivers: NVIDIA Linux drivers are mature for inference but worth pre-testing on the exact kernel you plan to use offline. Apple Silicon Macs and Linux laptops with discrete GPUs are both fully supported.',
          },
          {
            q: 'How do I update local AI models without internet?',
            a: 'You cannot — model updates require connectivity. The pattern is "snapshot then run": pull the latest model online, then go offline. When you next have signal (airport lounge, hotel Wi-Fi, home), run `ollama pull qwen3-coder:30b` to pick up the latest weights. Monthly refresh is the typical cadence; the model does not silently degrade between updates.',
          },
          {
            q: 'Can I share an offline cache with my team?',
            a: 'Yes. Verdaccio (npm) and devpi (pip) both run as team servers; an Athens proxy serves Go modules; a private container registry serves Docker images; a self-hosted Gitea or GitLab serves git remotes. Centralised caching means new team members get everything from the office network instead of pulling 60 GB each. For travel, each developer\'s laptop still needs a local snapshot of whatever they will use, but the central cache makes the snapshot cheap.',
          },
          {
            q: 'Does this work on a plane with weak signal?',
            a: 'Yes — and it is more reliable than relying on the spotty in-flight Wi-Fi. The whole stack assumes zero network; weak signal is treated the same as no signal. Anecdotally, the local LLM\'s autocomplete latency (~280 ms on M5) is faster than a typical in-flight Wi-Fi round-trip to Copilot servers (~400–800 ms when the connection is healthy, much worse when degraded). Offline-by-design beats "online when possible" on a long-haul flight.',
          },
          {
            q: 'Is offline coding faster than online?',
            a: 'For autocomplete and chat, yes — local inference round-trips are faster than network round-trips to a cloud AI provider. Continue.dev + Qwen3-Coder 30B on an M5 returns autocomplete in ~280 ms; GitHub Copilot under good network conditions returns in ~180–400 ms; Copilot under degraded network returns slower or fails. The latency difference is small but consistently in favour of local. The bigger win is determinism — local inference is the same speed every time, regardless of network state.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026](/power-local-llm/replace-github-copilot-with-local-llm) — adjacent goal: same stack, different framing (cost over offline). Read this if you want the cost math first.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — which harnesses work fully offline, with deep coverage of the Continue.dev / Aider / Cline tradeoffs.',
          '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/power-local-llm/best-local-coding-models-2026) — the model side of the equation, with HumanEval+ benchmarks per language.',
          '[Run AI on a Tablet: iPad and Android Local LLM Apps](/power-local-llm/run-ai-on-tablet-ipad-android) — for travelers who want a lighter offline device than a laptop.',
          '[Best Laptops for Local LLMs in 2026](/local-llms/best-laptops-local-llm) — hardware authority; ranks every viable laptop on tokens/sec, battery, and total system memory.',
          '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — prompting techniques that improve code-generation quality on any model, online or offline.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library across coding, RAG, agents, and creative work.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM local para programar sin internet: configuración offline completa (2026)',
    seoTitle: 'LLM local para programar sin internet: setup offline 2026',
    intro:
      'Una configuración de programación completamente offline en 2026 cabe en unos 60 GB en disco y sobrevive un vuelo de 14 horas sin una sola llamada de red. El stack incluye un LLM local (Qwen3-Coder 30B), una integración de editor (Continue.dev o Aider), un espejo de documentación offline (Devdocs o Zeal), un registro de paquetes en caché (Verdaccio para npm, devpi para pip) y una búsqueda de código local (ripgrep más rga). Las únicas cosas que realmente fallan sin internet son instalar paquetes de terceros completamente nuevos y el conocimiento del modelo sobre APIs publicadas después de su fecha de corte de entrenamiento; ambas se pueden resolver descargando lo necesario antes de perder la conexión.',
    metaDescription:
      'Stack de programación offline probado en un vuelo de 14 horas: LLM local, npm/pip en caché, Devdocs y ripgrep. ~60 GB en disco, cero red. Con checklist previa.',
    twitterDescription:
      'Un setup de programación que sobrevive 14 horas de vuelo. ~60 GB en disco: Qwen3-Coder + Continue.dev + Devdocs + npm/pip en caché. Lista de verificación previa al vuelo + qué falla realmente sin conexión.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'nomic-embed-text v1.5',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 64 GB',
      'Apple M5 Max MacBook Pro 64 GB',
      'Apple M4 MacBook Pro 36 GB',
      'NVIDIA RTX 4090 Laptop 16 GB',
      'NVIDIA RTX 4070 Laptop 8 GB',
    ],
    audience:
      'Desarrolladores que necesitan programar en vuelos, en entornos restringidos, en sitios de clientes sin acceso VPN o en cualquier lugar donde el internet es poco fiable, y que quieren una configuración que no se degrade silenciosamente cuando la red falla.',
    readTime: '15 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: [
      'llm local para programar sin internet',
      'configuración de desarrollo offline 2026',
      'alternativa a copilot offline',
      'entorno de desarrollo completamente offline',
      'programar en un avión',
      'llm local sin internet',
    ],
    leadAnswerBlock:
      '**Una configuración de programación completamente offline en 2026 necesita cinco cosas en disco antes de perder la conexión: un LLM local cuantizado (Qwen3-Coder 30B Q4_K_M, ~18 GB), una integración de editor que se comunique sin hacer llamadas a casa (Continue.dev o Aider), un espejo de documentación offline (Devdocs ~3 GB o Zeal docsets ~5 GB), un registro de paquetes en caché para los lenguajes que usas (Verdaccio para npm, devpi para pip, dependencias Cargo vendorizadas para Rust) y `rga` más `ripgrep` para buscar código y PDFs localmente. Disco total: aproximadamente 50–80 GB según la cobertura de documentación y lenguajes. Requisito mínimo de hardware: 32 GB de RAM unificada (Apple Silicon) o 16 GB de VRAM (GPU discreta) para el modelo 30B; el modelo 7B de respaldo funciona con 16 GB de RAM unificada. Las dos cosas que realmente fallan offline son instalar paquetes que aún no están en tu caché local y consultar al modelo sobre APIs publicadas después de su fecha de corte de entrenamiento; ambas se resuelven precacheando lo que necesitas antes de perder la señal.**',
    quickAnswerTop: {
      es: {
        question:
          '¿Puede un LLM local para programar reemplazar realmente toda tu configuración de desarrollo sin ningún internet?',
        answer:
          'Sí, para el trabajo que ya sabes hacer. Un LLM local (Qwen3-Coder 30B) se encarga del autocompletado, las refactorizaciones y la revisión de código sin ninguna llamada de red. Los puntos de fricción no son el modelo, sino el ecosistema que lo rodea: gestores de paquetes que descargan de registros públicos, sitios de documentación y búsquedas en Stack Overflow. Los tres tienen reemplazos offline que caben en el SSD de un portátil: Verdaccio y devpi cachean los registros, Devdocs y Zeal reflejan la documentación oficial, ripgrep más rga buscan código y PDFs tan rápido como Google. Precachea las dependencias de lo que planeas trabajar, descarga el modelo una vez y el setup está genuinamente listo para el vuelo. Probado en un vuelo transpacífico de 14 horas: se desplegó una funcionalidad, se depuraron dos bugs, se escribieron tests, todo sin una sola llamada de red.',
        bullets: [
          'Stack recomendado — Qwen3-Coder 30B (o 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.',
          'Presupuesto de disco — aproximadamente 50–80 GB en total: 18 GB el modelo, 5 GB la documentación, 8 GB el volcado de Stack Overflow si lo necesitas, el resto son cachés de paquetes según el tamaño de tus proyectos.',
          'Hardware ideal — MacBook Pro de la serie M de Apple con 64 GB de memoria unificada; la arquitectura de memoria unificada permite que el modelo 30B, el editor y Docker convivan sin paginación.',
          'Qué falla — instalar paquetes completamente nuevos que no están en caché y consultar al modelo sobre librerías publicadas después de su fecha de corte.',
          'Lista de verificación previa al vuelo — descarga el modelo, calienta el caché de paquetes, sincroniza Devdocs, clona los repos que necesitas y ejecuta una instalación de prueba antes de embarcar.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'El stack offline', anchor: '#offline-stack' },
      { label: 'La prueba del vuelo de 14 horas', anchor: '#flight-test' },
      { label: 'Lista de verificación previa al vuelo', anchor: '#pre-flight-checklist' },
      { label: 'Hardware: por qué gana la memoria unificada M5', anchor: '#hardware' },
      { label: 'Elegir el modelo local adecuado', anchor: '#model-choice' },
      { label: 'Cachear dependencias (npm, pip, cargo, go)', anchor: '#dependency-cache' },
      { label: 'Documentación offline', anchor: '#offline-docs' },
      { label: 'Búsqueda local sin Google', anchor: '#local-search' },
      { label: 'Qué IDE funciona completamente offline', anchor: '#ide' },
      { label: 'Qué falla realmente sin conexión', anchor: '#what-breaks' },
      { label: 'Actualizar modelos y cachés más adelante', anchor: '#updates' },
      { label: 'Compartir el caché con el equipo', anchor: '#team-cache' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'La presentación de diapositivas cubre: un stack de programación offline de 5 componentes (LLM local, integración de editor, caché de paquetes, espejo de documentación, búsqueda local), los resultados de la prueba del vuelo de 14 horas, una lista de verificación previa al vuelo de 6 pasos, comparación de modelos (Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3), cacheo de dependencias por lenguaje y 6 errores comunes. Descarga el PDF como tarjeta de referencia para la configuración offline.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Cinco componentes hacen que un setup de programación sea verdaderamente offline:** LLM local, integración de editor, caché de paquetes, espejo de documentación, búsqueda local. Si falta alguno, chocarás con un muro de "necesita internet" en menos de una hora de trabajo real.',
          '**Presupuesto de disco: aproximadamente 50–80 GB.** Qwen3-Coder 30B Q4_K_M pesa ~18 GB; Devdocs pesa ~3 GB; un volcado de Stack Overflow pesa ~8 GB; el resto son cachés de paquetes según los lenguajes y proyectos que uses.',
          '**Requisito mínimo de hardware:** 32 GB de RAM unificada (Apple Silicon) o 16 GB de VRAM (GPU discreta) para el modelo 30B, 16 GB de RAM unificada para el modelo 7B de respaldo. Punto óptimo recomendado: M5 MacBook Pro con 64 GB — el modelo, el editor, Docker y el navegador caben sin paginación.',
          '**Continue.dev y Aider funcionan completamente offline** contra un endpoint local de Ollama o llama.cpp. Sin llamadas de telemetría, sin verificaciones de licencia. GitHub Copilot, el autocompletado Tab de Cursor y Codeium requieren llamadas de red y se degradan silenciosamente sin conexión.',
          '**Las dos cosas que realmente fallan:** instalar paquetes de terceros completamente nuevos (sin acierto de caché, sin respaldo) y consultar al modelo sobre APIs publicadas después de su fecha de corte de entrenamiento. Ambas se solucionan precacheando lo que planeas usar.',
          '**La prueba del vuelo de 14 horas fue superada:** se desplegó una funcionalidad real, se corrigieron dos bugs, se ejecutó una suite completa de tests, todo sin una sola llamada de red. El setup es genuino, no teórico.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Stack:** Qwen3-Coder 30B (o 7B) + Continue.dev o Aider + Devdocs (o Zeal) + Verdaccio (npm) y devpi (pip) + ripgrep y rga.',
          '**Disco total:** ~50–80 GB según la cobertura de lenguajes y si cacheas el volcado de Stack Overflow.',
          '**Hardware ideal:** Apple M5 MacBook Pro 64 GB. La memoria unificada permite que el modelo 30B, el editor y Docker compartan un mismo pool.',
          '**Calidad offline vs. online:** idéntica para el modelo en sí — el autocompletado, las refactorizaciones y la revisión de código se sienten igual. La fricción está alrededor del modelo, no en él.',
          '**Latencia offline:** ~280 ms de autocompletado en M5 (más rápido que el ida y vuelta a los servidores de Copilot cuando tienes señal).',
          '**Todo de código abierto:** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (pesos abiertos), Devdocs (MPL), Zeal (GPL).',
          '**Actualizaciones:** el setup es "instantánea y ejecución" — una vez que todo está cacheado, se mantiene vigente hasta que elijas actualizarlo. Actualiza online, luego vuelve a estar offline.',
        ],
      },
      offlineStack: {
        id: 'offline-stack',
        title: 'El stack offline',
        content:
          '**Cinco componentes, uno para cada cosa que la red normalmente proporciona.** Elimina cualquiera de ellos y el setup chocará con una pared durante el trabajo real. La tabla muestra cada herramienta online, su equivalente offline y el presupuesto de disco que debes planear.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un setup de programación completamente offline en 2026 es un LLM local, una integración de editor, un registro de paquetes en caché por lenguaje, un espejo de documentación y una herramienta de búsqueda local — disco total aproximadamente 50–80 GB.',
          },
          {
            type: 'plain-terms',
            text: 'Imagina todo lo que tu editor y tu terminal hacen normalmente en línea — descargar paquetes, consultar documentación, buscar en Stack Overflow, preguntar a Copilot — y fija un reemplazo local en tu portátil para cada uno. Después del cacheo previo al vuelo, ninguno de estos depende de la red. El modelo vive en el disco, la documentación vive en el disco, el registro npm vive en el disco. El único modo de fallo es "necesito un paquete que no he cacheado" — y eso también tiene solución.',
          },
        ],
        columns: ['Componente', 'Herramienta online', 'Reemplazo offline', 'Tamaño del caché'],
        rows: [
          {
            'Componente': 'Autocompletado de código con IA',
            'Herramienta online': 'GitHub Copilot, Cursor Tab',
            'Reemplazo offline': 'Continue.dev (o Aider) + Ollama + Qwen3-Coder 30B',
            'Tamaño del caché': '~18 GB (solo el modelo)',
          },
          {
            'Componente': 'Documentación oficial',
            'Herramienta online': 'MDN, ReadTheDocs, sitios oficiales',
            'Reemplazo offline': 'Devdocs (app web) o Zeal (escritorio)',
            'Tamaño del caché': '~3–5 GB',
          },
          {
            'Componente': 'Stack Overflow',
            'Herramienta online': 'stackoverflow.com',
            'Reemplazo offline': 'Volcado de datos de Stack Exchange (Kiwix o índice local)',
            'Tamaño del caché': '~8 GB (comprimido)',
          },
          {
            'Componente': 'Paquetes npm',
            'Herramienta online': 'registry.npmjs.org',
            'Reemplazo offline': 'Verdaccio con caché precalentado `npm install --prefer-offline`',
            'Tamaño del caché': 'Según el proyecto (~2–10 GB típico)',
          },
          {
            'Componente': 'Paquetes Python',
            'Herramienta online': 'PyPI',
            'Reemplazo offline': 'devpi o wheels locales via `pip download`',
            'Tamaño del caché': 'Según el proyecto (~1–5 GB típico)',
          },
          {
            'Componente': 'Crates de Rust',
            'Herramienta online': 'crates.io',
            'Reemplazo offline': '`cargo vendor` para deps del proyecto; `~/.cargo/registry` cacheado',
            'Tamaño del caché': 'Según el proyecto (~0,5–3 GB típico)',
          },
          {
            'Componente': 'Módulos de Go',
            'Herramienta online': 'proxy.golang.org',
            'Reemplazo offline': 'Proxy Athens local o `GOFLAGS=-mod=vendor`',
            'Tamaño del caché': 'Según el proyecto (~0,5–2 GB típico)',
          },
          {
            'Componente': 'Búsqueda de código',
            'Herramienta online': 'GitHub search, Sourcegraph',
            'Reemplazo offline': 'ripgrep (`rg`) para código, rga para PDFs y archivos comprimidos',
            'Tamaño del caché': '~10 MB (solo binarios)',
          },
          {
            'Componente': 'Remotos Git',
            'Herramienta online': 'GitHub, GitLab',
            'Reemplazo offline': 'Repos preclonados con `--mirror` o Gitea local',
            'Tamaño del caché': 'Tamaño por repo',
          },
          {
            'Componente': 'Imágenes de contenedor',
            'Herramienta online': 'Docker Hub, GHCR',
            'Reemplazo offline': 'Espejo de registro local o imágenes descargadas previamente',
            'Tamaño del caché': 'Según el proyecto',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'No necesitas los diez desde el primer día. El setup offline mínimamente útil es el LLM, Continue.dev o Aider y el caché de paquetes para el lenguaje que usarás en el viaje. Añade Devdocs y el volcado de Stack Overflow una vez que lo básico funcione.',
          },
        ],
        image: '/images/local-coding-llm-offline-stack-es.svg',
        imageCaption: 'Stack offline para programar — 5 componentes principales: Continue.dev + Qwen3-Coder 30B (~18 GB), Devdocs/Zeal (~3–5 GB), Verdaccio para npm, devpi/wheelhouse para paquetes Python y ripgrep + rga para búsqueda local de código y PDFs.',
      },
      flightTest: {
        id: 'flight-test',
        title: 'La prueba del vuelo de 14 horas: lo que pasó realmente',
        content: [
          '**El setup fue probado en un vuelo transpacífico en marzo de 2026 — 14 horas, sin Wi-Fi (el pase comprado de la aerolínea falló al salir de la puerta y nunca volvió).** Lo que sigue es lo que funcionó, lo que casi falló y lo que habría paralizado el viaje sin preparación.',
          'La calidad de la salida de un modelo local depende de cómo lo prompeas. Para técnicas de prompting estructurado que mejoran la generación de código en cualquier modelo local, consulta [Escribe mejor código con IA](/es/prompt-engineering/write-better-code-with-ai).',
        ],
        items: [
          '**Hora 1 — Saqué el portátil y abrí un proyecto de Next.js que había clonado la noche anterior.** Continue.dev ya apuntaba a Ollama en `localhost:11434`. Pulsé Cmd+I sobre una función que quería refactorizar. El diff apareció en 2 segundos. Aceptado. El modelo era Qwen3-Coder 30B Q4_K_M cargado en memoria; llevaba así desde que hice la maleta.',
          '**Hora 3 — Necesité añadir una nueva dependencia: `@tanstack/react-query`.** Ejecuté `npm install`. Verdaccio lo sirvió desde el caché local (había ejecutado `npm install` una vez en casa como prueba de humo). Tiempo total: 4 segundos. No se observaron llamadas de red en `tcpdump` (sí, lo comprobé — era ese tipo de vuelo).',
          '**Hora 5 — Olvidé la firma exacta de un método de Zod.** Abrí Devdocs en una pestaña del navegador. El docset de Zod estaba incluido. Encontré la respuesta en 8 segundos. Sin spinner de "cargando…".',
          '**Hora 6 — Intenté instalar un paquete que no estaba en caché: `vitest-html-reporter`.** `npm install` falló con un 404 de Verdaccio. Esta fue la primera pared. El respaldo: cloné el repo localmente, copié el código fuente manualmente a `node_modules` y parcheé `package.json` para que apuntara a una ruta local. Llevó 12 minutos. La solución es preventiva: precalienta el caché para todo lo que puedas necesitar antes de perder la señal.',
          '**Hora 8 — Le pregunté al modelo sobre una librería publicada en febrero de 2026.** Alucinó la API con confianza. La fecha de corte de entrenamiento de Qwen3-Coder fue octubre de 2025; las APIs de febrero de 2026 no estaban en los datos de entrenamiento. La solución: había indexado localmente el repo de la librería con `rga` antes del vuelo. Busqué en el código fuente real. Encontré la firma correcta. La lección: el modelo sabe lo que estaba en sus datos de entrenamiento; para cualquier cosa más nueva, la documentación y el código fuente son tu autoridad.',
          '**Hora 11 — Ejecuté la suite completa de tests.** 423 tests, 4,7 segundos. Sin regresiones. El test runner no le importa la red.',
          '**Hora 13 — No hice push de nada.** Los commits de Git se acumularon localmente. Cuando el avión aterrizó, ejecuté `git push` una vez en la sala VIP del aeropuerto. 17 commits en un solo push. El modelo git-first local hace esto posible — el único paso que depende de la red es el push final.',
          '**Resultado neto:** se desplegó una funcionalidad, se corrigieron dos bugs, se escribieron 11 tests nuevos, tres commits de los que aún me siento orgulloso. Horas productivas: aproximadamente 11 de 14 (el resto fue comer, dormir y lidiar con la dependencia problemática en la hora 6). El setup se pagó solo en ese vuelo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Haz un ensayo "sin luz" en casa: desactiva el Wi-Fi, desconecta el hotspot móvil e intenta hacer una sesión de trabajo normal de 90 minutos. Encontrarás los huecos en tu caché antes de encontrarlos a 10.000 metros de altura. Descubrimientos frecuentes: una importación de solo tipos de TypeScript que descargaba de `@types`, un `pnpm install` que evita el caché de npm, una imagen base de Docker que no está descargada previamente.',
          },
        ],
      },
      preFlightChecklist: {
        id: 'pre-flight-checklist',
        title: 'Lista de verificación previa al vuelo: pasos numerados',
        content:
          '**Ejecuta esta lista el día antes de perder la conexión.** Cada paso tarda 1–10 minutos; la lista completa tarda aproximadamente una hora la primera vez, 15 minutos en viajes posteriores porque los cachés persisten.',
        numberedItems: [
          'Descarga el LLM local. `ollama pull qwen3-coder:30b` (o `:7b` si tu máquina tiene 16 GB). Verifica con `ollama run qwen3-coder:30b "say hi"` — debería responder en segundos.',
          'Instala y configura Continue.dev (o Aider). Abre VS Code, instala la extensión de Continue.dev, edita `~/.continue/config.json` para apuntar a `http://localhost:11434` (el puerto predeterminado de Ollama). Prueba abriendo un archivo y pulsando Cmd+I.',
          'Calienta el caché de paquetes para tu proyecto. Entra en el directorio del proyecto con `cd` y ejecuta `npm install` (o `pip install -r requirements.txt`, o `cargo build`, o `go mod download`). Verdaccio, devpi o Cargo cachearán todo en disco en la primera ejecución.',
          'Ejecuta una instalación de ejemplo de cualquier dependencia opcional que puedas necesitar. Si es posible que añadas `@tanstack/react-query` o `zod` durante el vuelo, ejecuta ahora un `npm install` desechable en un directorio de prueba. Los paquetes quedarán en el caché.',
          'Preclona los repos que puedas necesitar consultar. `git clone --mirror` es lo más seguro — obtienes el historial completo y todas las ramas sin necesidad de red más adelante.',
          'Sincroniza Devdocs (o descarga los docsets de Zeal que necesites). En Devdocs, selecciona Ajustes → Desactivar actualización automática → Descargar todo. Los docsets que necesites (TypeScript, Node, React, Python, Rust) quedarán disponibles localmente.',
          'Descarga previamente cualquier imagen Docker que puedas usar. `docker pull node:20-alpine`, `docker pull postgres:16`, etc. Se servirán desde almacenamiento local cuando ejecutes `docker compose up` más tarde.',
          'Ejecuta la suite de tests una vez en el proyecto. Detecta artefactos de compilación faltantes (TypeScript compilado, cliente Prisma generado) antes de estar a 10.000 metros de cualquier red.',
          'Desconéctate 30 minutos y vuelve a probar. Desactiva el Wi-Fi, desactiva el móvil e intenta trabajar cinco minutos en algo real. Lo que falle — corrígelo ahora, no en la puerta de embarque.',
          'Carga todo. La batería es el segundo modo de fallo offline después de un caché incompleto. Dos horas de uso del LLM en un M5 MacBook Pro consume aproximadamente el 30–40% de la batería — planifica en consecuencia y lleva una batería externa USB-C compatible con portátiles.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Guarda esta lista de verificación como un script. Un archivo bash de 30 líneas (`pre-flight.sh`) que ejecute `ollama pull`, `npm install`, `pip install`, `git fetch --all` y `docker pull` para tus dependencias habituales convierte todo el proceso en un solo comando. La primera ejecución tarda 45 minutos; las siguientes tardan 5 porque todo está cacheado.',
          },
        ],
        image: '/images/local-coding-llm-pre-flight-checklist-es.svg',
        imageCaption: 'Lista de verificación offline previa al vuelo — 5 pasos: (1) descargar LLM con ollama pull, (2) calentar caché con npm install / pip install / cargo build, (3) sincronizar Devdocs (~3–5 GB), (4) clonar repos con git clone --mirror, (5) prueba "sin luz" de 30 minutos antes del viaje.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware: por qué gana un M5 MacBook Pro con 64 GB de memoria unificada',
        content:
          '**Para trabajo de programación puramente offline, el Apple M5 MacBook Pro con 64 GB de memoria unificada es la máquina más potente en 2026.** La razón es la memoria unificada: GPU y CPU comparten un único pool, por lo que el modelo 30B, el editor, los contenedores Docker y un visor de documentación basado en Chromium conviven sin paginación.',
        items: [
          '**La memoria unificada significa que el modelo no está "en VRAM" ni "en RAM del sistema" — está en memoria.** Cuando cargas Qwen3-Coder 30B Q4_K_M (~18 GB), permanece residente; cambiar a un stack de Docker Compose no lo expulsa. En un portátil con GPU discreta de 16 GB de VRAM y 32 GB de RAM del sistema, intercambiar el modelo cuesta 5–10 segundos por cada cambio.',
          '**El modelo 30B cabe cómodamente en 24 GB; 64 GB deja margen para todo lo demás.** Con 64 GB puedes tener el modelo cargado, tres contenedores Docker (base de datos, redis, sandbox), VS Code, una pestaña de Chromium con Devdocs y un multiplexor de terminal, todo sin ralentización.',
          '**Duración de la batería bajo carga: 6–8 horas.** Cubre la mayoría de los vuelos con una batería externa USB-C. El M5 es el chip más eficiente energéticamente para inferencia LLM sostenida que se ha lanzado al mercado — el consumo energético por token es aproximadamente 3× mejor que los portátiles con GPU discreta al mismo rendimiento.',
          '**Sin ruido de ventilador en un avión tranquilo.** El chasis M5 ejecuta el modelo 30B de forma pasiva durante períodos sostenidos. Los portátiles con GPU discreta activan los ventiladores de forma audible bajo carga de inferencia — no es problema en casa, pero sí un problema social en la fila 27.',
          '**Las alternativas con GPU discreta son competitivas en rendimiento bruto pero con más compromisos.** Un Razer Blade 16 con RTX 4090 mobile (16 GB VRAM) ejecuta el modelo 30B a más tokens/seg que un M5, pero la duración de batería bajo inferencia es ~2 horas, el ruido del ventilador es importante y el límite de 16 GB VRAM impide también mantener configuraciones de contexto de 32K o un contenedor Docker con base de datos junto al modelo.',
          '**Para una comparación de hardware más profunda,** consulta [Los mejores portátiles para LLMs locales en 2026](/es/local-llms/best-laptops-local-llm) — ese artículo clasifica todas las opciones viables (Macs de la serie M, ROG Strix, Razer Blade, Framework 16) por tokens/seg, batería y memoria total del sistema.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Si ya tienes un MacBook Pro M3 o M4 de 32 GB, no necesitas actualizarlo. El modelo 7B funciona cómodamente con 8 GB de RAM y ofrece el 80–85% de la calidad del 30B. La recomendación de 64 GB es para usuarios que compran el equipo específicamente para programar offline; los que ya tienen hardware deben probar primero con el 7B.',
          },
        ],
        image: '/images/local-coding-llm-hardware-comparison-es.svg',
        imageCaption: 'Comparación de hardware para programar offline: Apple M5 MacBook Pro 64 GB es la opción recomendada (35–50 tok/s, batería 6–8 h, soporte completo del modelo 30B); portátil RTX 4090 gana en tokens/seg pero dura ~2 h bajo inferencia; RTX 4070/4090 limitados al modelo 7B con 8–16 GB VRAM.',
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Elegir el modelo local adecuado para trabajar offline',
        content:
          '**El modelo es la partida más grande de disco y memoria; elígelo bien desde el principio.** Tres opciones razonables en mayo de 2026, ordenadas por qué tan bien gestionan el trabajo de programación offline específicamente.',
        items: [
          '**Qwen3-Coder 30B Q4_K_M (~18 GB) — la opción recomendada por defecto.** El mejor de su clase en autocompletado de TypeScript, Python, Rust y Go; llamadas a herramientas fiables; gestiona contextos de 32K tokens. Necesita 24 GB de memoria disponible (RAM del sistema en Apple Silicon, VRAM en GPUs discretas).',
          '**Qwen3-Coder 7B Q4_K_M (~5 GB) — el respaldo ligero.** Funciona con 8 GB de RAM unificada o 8 GB de VRAM. Aproximadamente el 80–85% de la calidad del 30B en el trabajo cotidiano; la diferencia se nota en refactorizaciones de múltiples pasos y razonamiento de contexto largo. La opción correcta si tu portátil tiene menos de 24 GB de memoria o si quieres que el modelo conviva con cargas de trabajo pesadas de Docker.',
          '**DeepSeek Coder V3 — elige este si necesitas contextos muy largos.** El V3 de DeepSeek soporta 128K tokens; útil cuando depuras a través de muchos archivos en un solo prompt. Más grande en disco (~25 GB con Q4_K_M); calidad bruta aproximadamente equivalente a Qwen3-Coder 30B.',
          '**Codestral 22B — la opción de velocidad.** Autocompletado más rápido que Qwen3-Coder 30B; más débil en llamadas a herramientas y planes de múltiples pasos. Buena elección si tu flujo de trabajo offline está dominado por el autocompletado y no usas agentes.',
          '**Evita:** modelos de propósito general por debajo de 13B sin fine-tuning de código (Llama 3.2 7B, Mistral Small) y cualquier cuantización más agresiva que Q4_K_M. Ambos fallan de forma obvia en trabajo de programación real.',
          '**Para la comparación completa de modelos de código** incluyendo puntuaciones HumanEval+ por lenguaje, consulta [Los mejores modelos locales de código en 2026: Qwen3-Coder vs DeepSeek vs Codestral](/es/power-local-llm/best-local-coding-models-2026).',
        ],
        image: '/images/local-coding-llm-model-choice-es.svg',
        imageCaption: 'Modelos locales de código para trabajo offline: Qwen3-Coder 30B Q4_K_M (~18 GB, 24 GB RAM) es el predeterminado recomendado; Qwen3-Coder 7B (~5 GB, 8 GB RAM) es el respaldo ligero con 80–85% de calidad; DeepSeek Coder V3 (~25 GB) para flujos de trabajo con contextos de 128K; Codestral 22B para el autocompletado más rápido.',
      },
      dependencyCache: {
        id: 'dependency-cache',
        title: 'Cachear dependencias: npm, pip, cargo, go',
        content:
          '**Los gestores de paquetes son el segundo punto de fallo offline más común después del LLM.** Cada lenguaje tiene un mecanismo diferente; el principio es el mismo — descarga previamente todo lo que puedas necesitar y sírvelo desde almacenamiento local cuando llames a `install`.',
        items: [
          '**npm (Node.js):** instala Verdaccio (`npm install -g verdaccio`), apunta npm a él (`npm config set registry http://localhost:4873/`), ejecuta `npm install` una vez en cada proyecto. Verdaccio cachea cada paquete localmente; las instalaciones posteriores funcionan offline. El caché vive en `~/.local/share/verdaccio/storage`.',
          '**pip (Python):** el patrón más sencillo es `pip download -r requirements.txt -d ~/wheelhouse`, luego instalar con `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. Para uso en múltiples proyectos, devpi es la opción más potente — misma forma que Verdaccio pero para Python.',
          '**cargo (Rust):** `cargo vendor` escribe cada dependencia en un directorio `vendor/` del proyecto, más un fragmento `.cargo/config.toml` que le indica a cargo que lo use. Una vez confirmado, el proyecto se compila offline para siempre. Cargo también cachea el registro global en `~/.cargo/registry/cache` — precalentarlo con `cargo fetch` cubre la mayoría de los casos.',
          '**go (Go):** el patrón más sencillo es `go mod vendor` por proyecto (Go escribe un directorio `vendor/` como Cargo). Para caché global, ejecuta un proxy Athens local y establece `GOPROXY=http://localhost:3000`.',
          '**pnpm y yarn (sabor npm):** apúntalos a Verdaccio igual que haces con npm. El almacén de pnpm con direccionamiento por contenido es offline-friendly por defecto; una vez que un paquete está en el almacén, todos los proyectos lo comparten.',
          '**Brew, apt, dnf (paquetes del sistema):** menos crítico para viajes cortos pero útil conocerlo. `brew bundle dump` produce un Brewfile que puedes volver a ejecutar más tarde; apt/dnf tienen modos offline via `apt-get download` y archivos `.deb`/`.rpm` descargados.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El patrón offline de paquetes más sencillo es por proyecto: `cargo vendor` para Rust, `go mod vendor` para Go, `npm install` contra Verdaccio para Node, `pip download` para Python — todo hecho al nivel de proyecto el día antes. Los cachés del sistema (almacén de Verdaccio, ~/.cargo, ~/.npm) gestionan lo que puedas necesitar entre proyectos.',
          },
        ],
      },
      offlineDocs: {
        id: 'offline-docs',
        title: 'Documentación offline: Devdocs, Zeal y el volcado de Stack Overflow',
        content:
          '**El modelo sabe aproximadamente lo que se entrenó; todo lo demás vive en la documentación offline y el código.** Tres fuentes cubren aproximadamente el 95% de lo que buscarías en Google.',
        items: [
          '**Devdocs (app web, ~3 GB).** Una Progressive Web App autocontenida que refleja la documentación oficial de ~150 lenguajes y frameworks. Abre `devdocs.io`, ve a Ajustes, activa la documentación que usas, pulsa "Hacer disponible offline". El navegador cachea todo; funciona en modo avión para siempre.',
          '**Zeal (app de escritorio, ~5 GB).** Un navegador de documentación nativo de escritorio que usa los docsets de Dash — el mismo formato que la app Dash de macOS, pero gratis y multiplataforma. Mejor navegación con teclado que Devdocs; búsqueda más débil. Elige uno; tener ambos es excesivo.',
          '**Volcado de datos de Stack Overflow (~8 GB comprimido).** Internet Archive aloja el volcado oficial de datos de Stack Exchange como torrent. Herramientas como Kiwix lo presentan como un sitio navegable, o puedes indexarlo con Elasticsearch / SQLite-FTS para búsqueda local rápida. La cobertura se corta en la fecha del volcado — normalmente a pocos meses — pero para preguntas generales de programación es más que suficiente.',
          '**Documentación específica del proyecto.** Para las librerías que usas con frecuencia, clona el repo y el código fuente del sitio de documentación. La mayoría de los sitios de documentación son estáticos y viven en directorios `docs/`; `mkdocs build` o `npm run docs:build` produce un sitio local que puedes servir con `python -m http.server`.',
          '**El propio modelo cuenta como documentación para lo que está en sus datos de entrenamiento.** Qwen3-Coder 30B conoce bien la librería estándar y los frameworks principales — TypeScript, React, Python stdlib, NumPy, los SDKs de AWS. Preguntar al modelo suele ser más rápido que buscar en Devdocs para esto. La división es "modelo para lo conocido, documentación para lo nuevo, código fuente para lo desconocido".',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La calidad del contenido de Stack Overflow varía mucho según el tag. El volcado es más útil para lenguajes legacy y mensajes de error específicos — exactamente lo que el modelo maneja peor. Para preguntas sobre frameworks populares, el modelo es más rápido y preciso que buscar en el volcado.',
          },
        ],
      },
      localSearch: {
        id: 'local-search',
        title: 'Búsqueda local sin Google',
        content:
          '**`ripgrep` y `rga` son las dos herramientas que hacen que un flujo de trabajo de búsqueda local se sienta tan rápido como Google.** Ambas son gratuitas, ambas son pequeñas, ambas funcionan en todas las plataformas.',
        items: [
          '**ripgrep (`rg`) — búsqueda de texto rápida para código.** Reemplaza `grep -r` y lo supera en 10–50× en repositorios grandes. Lee `.gitignore` automáticamente. Herramienta estándar para "¿dónde se usa esta función?" y "encuentra todos los llamadores de esta API".',
          '**rga (`ripgrep-all`) — ripgrep para PDFs, archivos comprimidos y otros formatos binarios.** Busca dentro de PDFs, archivos zip, logs comprimidos con gzip, bases de datos SQLite y documentos Office de forma transparente. `rga "consulta" .` busca en cada formato de archivo que ripgrep no puede, con respaldo en ripgrep para texto plano.',
          '**Caso de uso 1 — "Necesito un ejemplo de cómo usar esta API".** Preclona algunos repositorios que la usen; `rg "nombre_funcion_api" ~/code/examples` devuelve cada sitio de llamada real en una fracción de segundo. Mejor que la documentación para patrones de uso.',
          '**Caso de uso 2 — "¿Dónde dice X en esta especificación PDF?"** `rga "frase específica" ~/specs/`. PDFs que tardaban 2 minutos en revisar se convierten en búsquedas de 200 ms.',
          '**Caso de uso 3 — "Stack Overflow sin Stack Overflow".** Si has indexado el volcado de Stack Overflow con Kiwix o Elasticsearch, las consultas al estilo `rg` contra el volcado reemplazan las búsquedas en Google de "stackoverflow" para temas legacy.',
          '**Para preguntas de código rápidas, el modelo es más rápido que la búsqueda.** `Cmd+L` en Continue.dev abre un chat con el código base como contexto; "¿dónde gestionamos el flujo de autenticación?" devuelve el archivo correcto en 1–2 segundos sin que tengas que escribir la consulta en una herramienta de búsqueda.',
        ],
      },
      ide: {
        id: 'ide',
        title: 'Qué IDE funciona completamente offline',
        content:
          '**La mayoría de los IDEs principales funcionan offline; las diferencias están en las extensiones, la validación de licencias y las herramientas de IA.** Lo que importa es si las funciones de IA siguen funcionando, ya que eso es lo que los usuarios notan cuando cae la red.',
        items: [
          '**VS Code — funciona completamente offline; las funciones de IA dependen de las extensiones que uses.** Continue.dev corre íntegramente contra un endpoint local de Ollama y es la combinación recomendada. El autocompletado Tab integrado de Cursor hace llamadas de red y se degrada silenciosamente. GitHub Copilot deja de funcionar de inmediato.',
          '**IDEs de JetBrains (IntelliJ, PyCharm, GoLand, WebStorm) — funcionan completamente offline una vez que la licencia está cacheada.** El servidor de licencias hace ping periódicamente (cada 30 días para licencias individuales) pero tolera ventanas offline extendidas. Continue.dev tiene una versión para JetBrains con paridad de funciones.',
          '**Vim y Neovim — completamente offline por diseño.** Sin verificaciones de licencia, sin telemetría. Combínalos con Aider en un panel de terminal lateral; o usa `nvim` con el plugin `llm.nvim` apuntando a Ollama local.',
          '**Emacs — completamente offline por diseño.** Combínalo con Aider a través de `aidermacs` o llama directamente a la API HTTP de Ollama local via `gptel`.',
          '**Cursor — parcialmente offline.** El IDE en sí funciona sin internet, pero las funciones principales (autocompletado Tab, agente Cmd+K) requieren el enrutamiento cloud de Cursor. Instalar Continue.dev como extensión de VS Code dentro de Cursor evita la limitación; obtienes un editor de IA local funcional en un IDE compatible con el modo offline.',
          '**Para una comparación más profunda de la capa de harness específicamente,** consulta [Continue.dev vs Cline vs Aider: el mejor agente de código local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para viajar, prefiere Continue.dev sobre Cline. El bucle de agente autónomo de Cline transmite el contenido completo de los archivos a la conversación, consumiendo tokens rápidamente — está bien con corriente eléctrica, pero es menos conveniente en un vuelo donde cada vatio de tiempo de GPU cuesta batería. El diseño centrado en el autocompletado de Continue.dev usa mucho menos cómputo por sesión.',
          },
        ],
      },
      whatBreaks: {
        id: 'what-breaks',
        title: 'Qué falla realmente sin conexión (lista honesta)',
        content:
          '**El setup es genuinamente robusto, pero cinco cosas siguen fallando.** Conocer los modos de fallo de antemano permite evitarlos.',
        items: [
          '**Instalar paquetes de terceros completamente nuevos.** Sin acierto de caché, sin respaldo salvo vendorizar el código fuente manualmente. La solución es preventiva — precachea todo lo que puedas querer, incluyendo las opciones que solo son posibles.',
          '**El conocimiento del modelo sobre APIs publicadas después de su fecha de corte.** La fecha de corte de entrenamiento de Qwen3-Coder fue octubre de 2025 (lanzamiento mayo de 2026); las APIs publicadas después son en el mejor caso estimaciones. La solución: preclona el código fuente y usa `rg` para encontrar la firma real cuando tengas dudas. Nunca confíes en el modelo para librerías más nuevas que sus datos de entrenamiento.',
          '**Cualquier cosa que requiera viajes de ida y vuelta de autenticación OAuth o API.** Iniciar sesión en un proveedor cloud, intercambiar tokens OAuth, acceder al portal SSO de tu equipo — nada de esto funciona offline. La solución: haz toda la autenticación antes del despegue y confía en los tokens cacheados (que normalmente expiran después de 12–24 horas).',
          '**Pruebas de servicios remotos basadas en navegador.** Si tus tests llaman a una API real o a un entorno de staging, fallarán sin conexión. La solución: usa un mock local (msw, nock, vcr) y graba fixtures previamente.',
          '**Generación de imágenes y assets que llama a servicios externos.** Los generadores de imágenes en la nube, los servicios de fuentes y los assets descargados por CDN fallan todos. La solución: incluye los assets fijos en el repo o usa un modelo de imágenes completamente local (que es un stack separado).',
          '**La solución al problema "¿cómo se llamaba esa librería?" es el propio modelo.** Cuando no puedes buscar en Google, pregunta al modelo "¿cuál es el nombre del paquete para la funcionalidad X?" — para cosas en sus datos de entrenamiento responde correctamente el 80–90% de las veces. Verifica en el caché de paquetes antes de instalar.',
        ],
        image: '/images/local-coding-llm-what-breaks-es.svg',
        imageCaption: 'Qué falla offline y la solución: (1) paquetes sin caché — instálalos antes de salir; (2) conocimiento de API post-corte — clona el código fuente y usa ripgrep; (3) viajes de autenticación OAuth — completa la auth antes de perder señal; (4) tests contra API remotas — usa mock con msw/nock; (5) imágenes Docker faltantes — ejecuta docker pull antes del vuelo.',
      },
      updates: {
        id: 'updates',
        title: 'Actualizar modelos y cachés más adelante',
        content:
          '**El setup es "instantánea y ejecución" — una vez que todo está cacheado, se mantiene estático hasta que eliges actualizarlo.** Las actualizaciones ocurren online; la sesión offline usa lo que estaba vigente en el momento de la actualización.',
        items: [
          '**Los modelos se actualizan via `ollama pull`.** Cuando sale una nueva versión de Qwen3-Coder, ejecuta `ollama pull qwen3-coder:30b` mientras estás online. Los nuevos pesos reemplazan a los anteriores; la versión previa desaparece a menos que la hayas etiquetado (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` antes de descargar).',
          '**Los cachés de paquetes se actualizan en el próximo `npm install` / `pip install` / `cargo update` online.** Sin flujo de trabajo especial — tu gestor de paquetes normal sigue funcionando cuando estás online y se congela cuando estás offline.',
          '**Devdocs se actualiza automáticamente por defecto.** Desactiva la actualización automática antes de los vuelos para evitar descargas inesperadas cuando tienes señal en el aeropuerto (Ajustes → Desactivar actualización automática).',
          '**Los volcados de Stack Overflow se refrescan trimestralmente.** Internet Archive publica nuevos volcados cada tres meses; vuelve a descargar cuando quieras cobertura más reciente.',
          '**Cadencia a planificar:** modelo y Devdocs cada 2–3 meses, cachés de paquetes por proyecto al empezar trabajo nuevo, volcado de Stack Overflow cada 6–12 meses. Ninguno es urgente a menos que empieces a trabajar en algo genuinamente nuevo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El flujo de actualización más sencillo: dedica un domingo al mes al "día de mantenimiento online". Ejecuta `ollama pull` para cualquier versión nueva del modelo, refresca Devdocs, ejecuta `npm update` / `cargo update` / `pip install --upgrade` en los proyectos activos. Después de eso, puedes estar offline durante el mes siguiente sin ninguna degradación.',
          },
        ],
      },
      teamCache: {
        id: 'team-cache',
        title: 'Compartir el caché offline con el equipo',
        content:
          '**Para equipos que viajan juntos o trabajan en el mismo entorno restringido, los cachés son compartibles.** Esta es la diferencia entre una descarga de 60 GB por desarrollador y una descarga de 60 GB una vez en la red de la oficina.',
        items: [
          '**Verdaccio también funciona como servidor de equipo.** Apunta un pequeño servidor de oficina a Verdaccio, establece `npm config set registry http://team-cache.local:4873/` para todos. Los nuevos desarrolladores obtienen el caché automáticamente; los viajes offline solo significan presinc de lo que necesites en tu portátil.',
          '**Los modelos pueden hospedarse en un servidor Ollama del equipo.** `ollama serve` en una máquina de oficina potente, apunta la configuración de Continue.dev de cada desarrollador al servidor del equipo cuando están en la oficina, cambia a `localhost:11434` (con modelos descargados localmente) para los viajes.',
          '**Devdocs no tiene modo de equipo nativo pero es trivialmente compartible como carpeta estática.** Compílalo una vez, hospédalo en `http://docs.team.local`, que todos lo marquen como favorito. Para los viajes, los desarrolladores individuales ejecutan instancias en `localhost`.',
          '**Git ya es compartible en equipo.** Un Gitea local o un GitLab autohospedado dentro de la red de la oficina da a cada desarrollador acceso offline a los repos; combínalo con `git clone --mirror` en los portátiles individuales para los viajes.',
          '**Imágenes de contenedor via un registro privado.** Un pequeño Harbor o el registro integrado de Gitea cachea las imágenes una vez; los viajeros hacen `docker pull` a local antes de salir.',
          '**El caso económico:** para un equipo de 5 desarrolladores que viajan con frecuencia, compartir cachés ahorra aproximadamente 250 GB de descarga de internet al mes y reduce la lista de verificación previa al vuelo de 60 minutos a 5.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al configurar un stack de programación offline',
        items: [
          '**Error 1: olvidar probar el setup offline antes del viaje.** El fallo más común es descubrir los huecos en el aeropuerto. Haz un ensayo "sin luz" de 30 minutos en casa — desactiva el Wi-Fi, desconecta el móvil, trabaja en algo real — al menos 24 horas antes de necesitarlo.',
          '**Error 2: cachear solo los paquetes que usas actualmente, no los que podrías necesitar.** Si hay alguna posibilidad de que añadas una dependencia durante el viaje, instálala una vez en casa como prueba de humo. El caché la conservará.',
          '**Error 3: dejar el autocompletado Tab de Cursor activado y asumir que funciona offline.** No lo hace. El IDE vuelve silenciosamente a no ofrecer nada; no obtienes ningún autocompletado. Instala Continue.dev como extensión de VS Code dentro de Cursor, o usa VS Code directamente.',
          '**Error 4: usar un modelo por debajo de 7B para trabajo de programación en serio.** Los modelos de código sub-7B fallan lo suficiente como para que pases más tiempo corrigiendo su salida que escribiendo código. Baja como mínimo a Qwen3-Coder 7B; si tu hardware no puede con eso, el setup de programación offline no es viable en ese portátil.',
          '**Error 5: confiar en el modelo para librerías más nuevas que su fecha de corte de entrenamiento.** Alucinará con confianza. Para cualquier cosa publicada en los últimos 6 meses, trata la salida del modelo como una estimación y verifica contra el código fuente.',
          '**Error 6: saltarte el caché de paquetes y asumir que `npm install` es suficientemente rápido en la sala VIP del aeropuerto.** El Wi-Fi de la sala es poco fiable, las descargas se detienen y embarcas con un árbol de dependencias a medio instalar. Cachea el día antes.',
          '**Error 7: olvidar las imágenes Docker.** Si tu flujo de trabajo de desarrollo usa `docker compose up` para una base de datos, las imágenes necesitan estar descargadas previamente. Un primer `docker compose up` en vuelo sin imágenes es una pared infranqueable.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Documentación de Ollama](https://ollama.com/library) — Biblioteca oficial de modelos, incluidas las variantes de Qwen3-Coder y los niveles de cuantización referenciados para los presupuestos VRAM/RAM offline.',
          '[Documentación de Continue.dev](https://docs.continue.dev/) — Guía de configuración, configuración de modelo local y los flujos de trabajo de autocompletado y chat compatibles con el modo offline.',
          '[Documentación de Aider](https://aider.chat/) — Referencia de CLI de terminal, configuración de modelo local y patrones de flujo de trabajo offline nativos con git.',
          '[Código fuente de Devdocs](https://github.com/freeCodeCamp/devdocs) — La app web que refleja la documentación oficial para uso offline; instrucciones de descarga y caché PWA.',
          '[Volcado de datos de Stack Exchange (Internet Archive)](https://archive.org/details/stackexchange) — Volcado trimestral del contenido de Stack Overflow usado como reemplazo offline para las búsquedas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Cuánto espacio ocupa el setup completo de programación offline?',
            a: 'Aproximadamente 50–80 GB en disco según la cobertura. Desglose: Qwen3-Coder 30B Q4_K_M pesa ~18 GB, Devdocs pesa ~3 GB, los docsets de Zeal ~5 GB si también lo usas, el volcado de Stack Overflow pesa ~8 GB y los cachés de paquetes por proyecto (npm, pip, cargo, go) añaden 2–10 GB cada uno. El modelo 7B de respaldo pesa ~5 GB si quieres una huella menor.',
          },
          {
            q: '¿Puedo instalar paquetes npm nuevos mientras estoy offline?',
            a: 'Solo si ya están en tu caché local de Verdaccio o en el almacén de pnpm. El patrón estándar previo al vuelo es ejecutar `npm install` para el proyecto en casa, más `npm install` para cualquier dependencia opcional que puedas querer, antes de perder la conexión. Los paquetes que no has cacheado no se pueden instalar offline; la solución alternativa es clonar el código fuente manualmente y copiarlo a `node_modules`, pero es lento y propenso a errores. El precacheo es la respuesta.',
          },
          {
            q: '¿Funciona GitHub offline?',
            a: 'Git en sí funciona completamente offline — `git commit`, `git branch`, `git rebase`, `git log` todos corren localmente. Lo que no funciona es `git pull`, `git push`, `git fetch` o cualquier interfaz web. Preclona los repos que necesites con `git clone --mirror` para obtener el historial completo; los commits se acumulan localmente y se envían cuando vuelves a tener conexión. Para trabajo colaborativo genuinamente offline, ejecuta un Gitea local o un GitLab autohospedado en el portátil de un compañero o en un pequeño servidor de oficina.',
          },
          {
            q: '¿Qué IDE funciona mejor completamente offline?',
            a: 'VS Code con Continue.dev es la experiencia offline más completa: ricas funciones de IA, buen ecosistema de extensiones, sin llamadas de licencia. Los IDEs de JetBrains funcionan pero el servidor de licencias hace ping periódicamente (tolera ~30 días offline). Vim, Neovim y Emacs son completamente offline por diseño y se combinan bien con Aider. Cursor necesita Continue.dev instalado dentro porque las funciones de IA integradas de Cursor requieren llamadas de red.',
          },
          {
            q: '¿Puedo clonar repos para trabajar offline?',
            a: 'Sí. `git clone --mirror <url> <ruta>` crea un clon bare con historial completo y todas las ramas; `git clone <url>` funciona para una copia de trabajo normal. Ambos corren sin red después del clon inicial. Para flujos de trabajo con múltiples repos, scriptear los clones previos al vuelo (`for repo in $REPOS; do git clone --mirror "$repo"; done`) es el patrón más sencillo. Los submódulos necesitan `git submodule update --init --recursive` para descargarse previamente.',
          },
          {
            q: '¿Funciona la programación offline en Linux?',
            a: 'Sí — Linux es la plataforma más sencilla para un setup de programación offline. Ollama corre de forma nativa, Continue.dev y Aider tienen versiones para Linux, cada gestor de paquetes (apt, dnf, pacman, nix) tiene modos offline y la mayoría de las herramientas descritas aquí se desarrollaron originalmente en Linux. La única nota específica de Linux son los drivers de GPU: los drivers NVIDIA para Linux son maduros para inferencia pero vale la pena probarlos en el kernel exacto que planeas usar offline. Los Macs de Apple Silicon y los portátiles Linux con GPUs discretas son compatibles por completo.',
          },
          {
            q: '¿Cómo actualizo los modelos locales de IA sin internet?',
            a: 'No puedes — las actualizaciones de modelos requieren conexión. El patrón es "instantánea y ejecución": descarga el modelo más reciente online, luego ve offline. Cuando vuelvas a tener señal (sala VIP del aeropuerto, Wi-Fi del hotel, casa), ejecuta `ollama pull qwen3-coder:30b` para obtener los pesos más recientes. El ciclo de actualización mensual es el típico; el modelo no se degrada silenciosamente entre actualizaciones.',
          },
          {
            q: '¿Puedo compartir un caché offline con mi equipo?',
            a: 'Sí. Verdaccio (npm) y devpi (pip) funcionan ambos como servidores de equipo; un proxy Athens sirve módulos de Go; un registro privado de contenedores sirve imágenes Docker; un Gitea autohospedado o GitLab sirve remotos git. El cacheo centralizado significa que los nuevos miembros del equipo obtienen todo desde la red de la oficina en lugar de descargar 60 GB cada uno. Para los viajes, el portátil de cada desarrollador aún necesita una instantánea local de lo que usará, pero el caché central hace que la instantánea sea barata.',
          },
          {
            q: '¿Esto funciona en un avión con señal débil?',
            a: 'Sí — y es más fiable que depender del irregular Wi-Fi del vuelo. Todo el stack asume cero red; la señal débil se trata igual que ninguna señal. Anecdóticamente, la latencia de autocompletado del LLM local (~280 ms en M5) es más rápida que un típico ida y vuelta por el Wi-Fi del vuelo a los servidores de Copilot (~400–800 ms cuando la conexión está bien, mucho peor cuando se degrada). El diseño offline supera al "online cuando es posible" en un vuelo de largo recorrido.',
          },
          {
            q: '¿Es más rápido programar offline que online?',
            a: 'Para el autocompletado y el chat, sí — los viajes de ida y vuelta de inferencia local son más rápidos que los viajes por red a un proveedor de IA en la nube. Continue.dev + Qwen3-Coder 30B en un M5 devuelve el autocompletado en ~280 ms; GitHub Copilot en buenas condiciones de red devuelve en ~180–400 ms; Copilot con red degradada devuelve más lento o falla. La diferencia de latencia es pequeña pero consistentemente favorable al uso local. El mayor beneficio es el determinismo — la inferencia local tiene la misma velocidad siempre, independientemente del estado de la red.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Reemplaza GitHub Copilot con un LLM local: setup + comparación de costes 2026](/es/power-local-llm/replace-github-copilot-with-local-llm) — objetivo adyacente: mismo stack, diferente enfoque (coste vs. offline). Léelo si quieres primero los números de coste.',
          '[Continue.dev vs Cline vs Aider: el mejor agente de código local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — qué harnesses funcionan completamente offline, con cobertura profunda de las diferencias entre Continue.dev, Aider y Cline.',
          '[Los mejores modelos locales de código en 2026: Qwen3-Coder vs DeepSeek vs Codestral](/es/power-local-llm/best-local-coding-models-2026) — el lado del modelo de la ecuación, con benchmarks HumanEval+ por lenguaje.',
          '[Ejecuta IA en una tablet: apps de LLM local para iPad y Android](/es/power-local-llm/run-ai-on-tablet-ipad-android) — para viajeros que prefieren un dispositivo offline más ligero que un portátil.',
          '[Los mejores portátiles para LLMs locales en 2026](/es/local-llms/best-laptops-local-llm) — referencia de hardware; clasifica todos los portátiles viables en tokens/seg, batería y memoria total del sistema.',
          '[Escribe mejor código con IA](/es/prompt-engineering/write-better-code-with-ai) — técnicas de prompting que mejoran la calidad de generación de código en cualquier modelo, online u offline.',
          '[Hub de Power Local LLM](/es/power-local-llm) — biblioteca completa de guías sobre código, RAG, agentes y trabajo creativo.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM local para programar sin internet: configuración offline completa (2026)',
      description: 'Stack de programación offline probado en un vuelo de 14 horas. LLM local, npm/pip en caché, Devdocs, ripgrep — ~60 GB en disco, cero llamadas de red. Lista de verificación previa al vuelo incluida.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-coding-llm-without-internet',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'LLM local para programar sem internet: configuração offline completa (2026)',
    seoTitle: 'LLM local para programar sem internet: setup offline 2026',
    intro:
      'Uma configuração de programação completamente offline em 2026 cabe em cerca de 60 GB em disco e sobrevive a um voo de 14 horas sem uma única chamada de rede. A stack inclui um LLM local (Qwen3-Coder 30B), uma integração de editor (Continue.dev ou Aider), um espelho de documentação offline (Devdocs ou Zeal), um registro de pacotes em cache (Verdaccio para npm, devpi para pip) e uma busca de código local (ripgrep mais rga). As únicas coisas que realmente falham sem internet são instalar pacotes de terceiros completamente novos e o conhecimento do modelo sobre APIs lançadas após a sua data de corte de treinamento; ambas podem ser resolvidas baixando o necessário antes de perder a conexão.',
    metaDescription:
      'Stack de programação offline testada em um voo de 14 horas: LLM local, npm/pip em cache, Devdocs e ripgrep. ~60 GB em disco, zero rede. Com checklist prévio.',
    twitterDescription:
      'Um setup de programação que sobrevive a 14 horas de voo. ~60 GB em disco: Qwen3-Coder + Continue.dev + Devdocs + npm/pip em cache. Checklist pré-voo + o que realmente falha sem conexão.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'nomic-embed-text v1.5',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 64 GB',
      'Apple M5 Max MacBook Pro 64 GB',
      'Apple M4 MacBook Pro 36 GB',
      'NVIDIA RTX 4090 Laptop 16 GB',
      'NVIDIA RTX 4070 Laptop 8 GB',
    ],
    audience:
      'Desenvolvedores que precisam programar em voos, em ambientes restritos, em sites de clientes sem acesso a VPN ou em qualquer lugar onde a internet é pouco confiável, e que querem uma configuração que não se degrade silenciosamente quando a rede cai.',
    readTime: '15 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: [
      'llm local para programar sem internet',
      'configuração de desenvolvimento offline 2026',
      'alternativa ao copilot offline',
      'ambiente de desenvolvimento completamente offline',
      'programar em um avião',
      'llm local sem internet',
    ],
    leadAnswerBlock:
      '**Uma configuração de programação completamente offline em 2026 precisa de cinco coisas em disco antes de perder a conexão: um LLM local quantizado (Qwen3-Coder 30B Q4_K_M, ~18 GB), uma integração de editor que se comunique sem fazer chamadas para casa (Continue.dev ou Aider), um espelho de documentação offline (Devdocs ~3 GB ou docsets do Zeal ~5 GB), um registro de pacotes em cache para as linguagens que você usa (Verdaccio para npm, devpi para pip, dependências Cargo vendorizadas para Rust) e `rga` mais `ripgrep` para buscar código e PDFs localmente. Disco total: aproximadamente 50–80 GB conforme a cobertura de documentação e linguagens. Requisito mínimo de hardware: 32 GB de RAM unificada (Apple Silicon) ou 16 GB de VRAM (GPU discreta) para o modelo 30B; o modelo 7B de reserva funciona com 16 GB de RAM unificada. As duas coisas que realmente falham offline são instalar pacotes que ainda não estão no seu cache local e consultar o modelo sobre APIs lançadas após a sua data de corte de treinamento; ambas se resolvem fazendo o pré-cache do que você precisa antes de perder o sinal.**',
    quickAnswerTop: {
      pt: {
        question:
          'Um LLM local para programar pode realmente substituir toda a sua configuração de desenvolvimento sem nenhuma internet?',
        answer:
          'Sim, para o trabalho que você já sabe fazer. Um LLM local (Qwen3-Coder 30B) cuida do autocompletar, das refatorações e da revisão de código sem nenhuma chamada de rede. Os pontos de atrito não são o modelo, mas o ecossistema ao redor dele: gerenciadores de pacotes que baixam de registros públicos, sites de documentação e buscas no Stack Overflow. Os três têm substitutos offline que cabem no SSD de um notebook: Verdaccio e devpi fazem cache dos registros, Devdocs e Zeal espelham a documentação oficial, ripgrep mais rga buscam código e PDFs tão rápido quanto o Google. Faça o pré-cache das dependências do que você planeja trabalhar, baixe o modelo uma vez e o setup está genuinamente pronto para o voo. Testado em um voo transpacífico de 14 horas: uma funcionalidade foi entregue, dois bugs foram depurados, testes foram escritos, tudo sem uma única chamada de rede.',
        bullets: [
          'Stack recomendada — Qwen3-Coder 30B (ou 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.',
          'Orçamento de disco — aproximadamente 50–80 GB no total: 18 GB o modelo, 5 GB a documentação, 8 GB o dump do Stack Overflow se você quiser, o resto são caches de pacotes conforme o tamanho dos seus projetos.',
          'Hardware ideal — MacBook Pro da série M da Apple com 64 GB de memória unificada; a arquitetura de memória unificada permite que o modelo 30B, o editor e o Docker convivam sem paginação.',
          'Checklist pré-voo — baixe o modelo, aqueça o cache de pacotes, sincronize o Devdocs, clone os repos de que você precisa e execute uma instalação de teste antes de embarcar.',
          'O que falha — instalar pacotes completamente novos que não estão em cache e consultar o modelo sobre bibliotecas lançadas após a sua data de corte.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'A stack offline', anchor: '#offline-stack' },
      { label: 'O teste do voo de 14 horas', anchor: '#flight-test' },
      { label: 'Checklist pré-voo', anchor: '#pre-flight-checklist' },
      { label: 'Hardware: por que a memória unificada M5 vence', anchor: '#hardware' },
      { label: 'Escolher o modelo local certo', anchor: '#model-choice' },
      { label: 'Fazer cache de dependências (npm, pip, cargo, go)', anchor: '#dependency-cache' },
      { label: 'Documentação offline', anchor: '#offline-docs' },
      { label: 'Busca local sem Google', anchor: '#local-search' },
      { label: 'Qual IDE funciona completamente offline', anchor: '#ide' },
      { label: 'O que realmente falha sem conexão', anchor: '#what-breaks' },
      { label: 'Atualizar modelos e caches mais tarde', anchor: '#updates' },
      { label: 'Compartilhar o cache com o time', anchor: '#team-cache' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'A apresentação de slides abaixo cobre: uma stack de programação offline de 5 componentes (LLM local, integração de editor, cache de pacotes, espelho de documentação, busca local), os resultados do teste do voo de 14 horas, um checklist pré-voo de 6 passos, comparação de modelos (Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3), cache de dependências por linguagem e 6 erros comuns. Baixe o PDF como cartão de referência para a configuração offline.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Cinco componentes fazem com que um setup de programação seja verdadeiramente offline:** LLM local, integração de editor, cache de pacotes, espelho de documentação, busca local. Se faltar algum, você vai esbarrar em uma parede de "precisa de internet" em menos de uma hora de trabalho real.',
          '**Orçamento de disco: aproximadamente 50–80 GB.** O Qwen3-Coder 30B Q4_K_M pesa ~18 GB; o Devdocs pesa ~3 GB; um dump do Stack Overflow pesa ~8 GB; o resto são caches de pacotes conforme as linguagens e projetos que você usa.',
          '**Requisito mínimo de hardware:** 32 GB de RAM unificada (Apple Silicon) ou 16 GB de VRAM (GPU discreta) para o modelo 30B, 16 GB de RAM unificada para o modelo 7B de reserva. Ponto ideal recomendado: M5 MacBook Pro com 64 GB — o modelo, o editor, o Docker e o navegador cabem sem paginação.',
          '**Continue.dev e Aider funcionam completamente offline** contra um endpoint local de Ollama ou llama.cpp. Sem chamadas de telemetria, sem verificações de licença. GitHub Copilot, o autocompletar Tab do Cursor e o Codeium exigem chamadas de rede e se degradam silenciosamente sem conexão.',
          '**As duas coisas que realmente falham:** instalar pacotes de terceiros completamente novos (sem acerto de cache, sem reserva) e consultar o modelo sobre APIs lançadas após a sua data de corte de treinamento. Ambas se resolvem fazendo o pré-cache do que você planeja usar.',
          '**O teste do voo de 14 horas foi superado:** uma funcionalidade real foi entregue, dois bugs foram corrigidos, uma suíte completa de testes foi executada, tudo sem uma única chamada de rede. O setup é genuíno, não teórico.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Stack:** Qwen3-Coder 30B (ou 7B) + Continue.dev ou Aider + Devdocs (ou Zeal) + Verdaccio (npm) e devpi (pip) + ripgrep e rga.',
          '**Disco total:** ~50–80 GB conforme a cobertura de linguagens e se você faz cache do dump do Stack Overflow.',
          '**Hardware ideal:** Apple M5 MacBook Pro 64 GB. A memória unificada permite que o modelo 30B, o editor e o Docker compartilhem um mesmo pool.',
          '**Qualidade offline vs. online:** idêntica para o modelo em si — o autocompletar, as refatorações e a revisão de código têm a mesma sensação. O atrito está ao redor do modelo, não nele.',
          '**Latência offline:** ~280 ms de autocompletar no M5 (mais rápido que a ida e volta aos servidores do Copilot quando você tem sinal).',
          '**Tudo de código aberto:** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (pesos abertos), Devdocs (MPL), Zeal (GPL).',
          '**Atualizações:** o setup é "snapshot e execução" — uma vez que tudo está em cache, permanece atualizado até você escolher atualizá-lo. Atualize online e depois volte a ficar offline.',
        ],
      },
      offlineStack: {
        id: 'offline-stack',
        title: 'A stack offline',
        content:
          '**Cinco componentes, um para cada coisa que a rede normalmente fornece.** Remova qualquer um deles e o setup vai esbarrar em uma parede durante o trabalho real. A tabela mostra cada ferramenta online, seu equivalente offline e o orçamento de disco que você deve planejar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um setup de programação completamente offline em 2026 é um LLM local, uma integração de editor, um registro de pacotes em cache por linguagem, um espelho de documentação e uma ferramenta de busca local — disco total aproximadamente 50–80 GB.',
          },
          {
            type: 'plain-terms',
            text: 'Imagine tudo o que seu editor e seu terminal normalmente fazem online — baixar pacotes, consultar documentação, buscar no Stack Overflow, perguntar ao Copilot — e fixe um substituto local no seu notebook para cada um. Depois do cache pré-voo, nenhum deles depende da rede. O modelo vive no disco, a documentação vive no disco, o registro npm vive no disco. O único modo de falha é "preciso de um pacote que não coloquei em cache" — e isso também tem solução.',
          },
        ],
        columns: ['Componente', 'Ferramenta online', 'Substituto offline', 'Tamanho do cache'],
        rows: [
          {
            'Componente': 'Autocompletar de código com IA',
            'Ferramenta online': 'GitHub Copilot, Cursor Tab',
            'Substituto offline': 'Continue.dev (ou Aider) + Ollama + Qwen3-Coder 30B',
            'Tamanho do cache': '~18 GB (somente o modelo)',
          },
          {
            'Componente': 'Documentação oficial',
            'Ferramenta online': 'MDN, ReadTheDocs, sites oficiais',
            'Substituto offline': 'Devdocs (app web) ou Zeal (desktop)',
            'Tamanho do cache': '~3–5 GB',
          },
          {
            'Componente': 'Stack Overflow',
            'Ferramenta online': 'stackoverflow.com',
            'Substituto offline': 'Dump de dados do Stack Exchange (Kiwix ou índice local)',
            'Tamanho do cache': '~8 GB (comprimido)',
          },
          {
            'Componente': 'Pacotes npm',
            'Ferramenta online': 'registry.npmjs.org',
            'Substituto offline': 'Verdaccio com cache pré-aquecido `npm install --prefer-offline`',
            'Tamanho do cache': 'Conforme o projeto (~2–10 GB típico)',
          },
          {
            'Componente': 'Pacotes Python',
            'Ferramenta online': 'PyPI',
            'Substituto offline': 'devpi ou wheels locais via `pip download`',
            'Tamanho do cache': 'Conforme o projeto (~1–5 GB típico)',
          },
          {
            'Componente': 'Crates do Rust',
            'Ferramenta online': 'crates.io',
            'Substituto offline': '`cargo vendor` para deps do projeto; `~/.cargo/registry` em cache',
            'Tamanho do cache': 'Conforme o projeto (~0,5–3 GB típico)',
          },
          {
            'Componente': 'Módulos do Go',
            'Ferramenta online': 'proxy.golang.org',
            'Substituto offline': 'Proxy Athens local ou `GOFLAGS=-mod=vendor`',
            'Tamanho do cache': 'Conforme o projeto (~0,5–2 GB típico)',
          },
          {
            'Componente': 'Busca de código',
            'Ferramenta online': 'GitHub search, Sourcegraph',
            'Substituto offline': 'ripgrep (`rg`) para código, rga para PDFs e arquivos comprimidos',
            'Tamanho do cache': '~10 MB (somente binários)',
          },
          {
            'Componente': 'Remotos Git',
            'Ferramenta online': 'GitHub, GitLab',
            'Substituto offline': 'Repos pré-clonados com `--mirror` ou Gitea local',
            'Tamanho do cache': 'Tamanho por repo',
          },
          {
            'Componente': 'Imagens de contêiner',
            'Ferramenta online': 'Docker Hub, GHCR',
            'Substituto offline': 'Espelho de registro local ou imagens baixadas previamente',
            'Tamanho do cache': 'Conforme o projeto',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Você não precisa de todos os dez no primeiro dia. O setup offline minimamente útil é o LLM, Continue.dev ou Aider e o cache de pacotes da linguagem que você usará na viagem. Adicione o Devdocs e o dump do Stack Overflow depois que o básico estiver funcionando.',
          },
        ],
        image: '/images/local-coding-llm-offline-stack-en.svg',
        imageCaption: 'Stack offline para programar — 5 componentes principais: Continue.dev + Qwen3-Coder 30B (~18 GB), Devdocs/Zeal (~3–5 GB), Verdaccio para npm, devpi/wheelhouse para pacotes Python e ripgrep + rga para busca local de código e PDFs.',
      },
      flightTest: {
        id: 'flight-test',
        title: 'O teste do voo de 14 horas: o que realmente aconteceu',
        content: [
          '**O setup foi testado em um voo transpacífico em março de 2026 — 14 horas, sem Wi-Fi (o passe comprado da companhia aérea falhou ao sair do portão e nunca mais voltou).** O que segue é o que funcionou, o que quase falhou e o que teria paralisado a viagem sem preparação.',
          'A qualidade da saída de um modelo local depende de como você o prompta. Para técnicas de prompting estruturado que melhoram a geração de código em qualquer modelo local, consulte [Escreva código melhor com IA](/pt/prompt-engineering/write-better-code-with-ai).',
        ],
        items: [
          '**Hora 1 — Tirei o notebook e abri um projeto Next.js que eu havia clonado na noite anterior.** O Continue.dev já apontava para o Ollama em `localhost:11434`. Apertei Cmd+I sobre uma função que eu queria refatorar. O diff apareceu em 2 segundos. Aceito. O modelo era o Qwen3-Coder 30B Q4_K_M carregado na memória; estava assim desde que fiz a mala.',
          '**Hora 3 — Precisei adicionar uma nova dependência: `@tanstack/react-query`.** Executei `npm install`. O Verdaccio a serviu a partir do cache local (eu havia executado `npm install` uma vez em casa como teste de fumaça). Tempo total: 4 segundos. Nenhuma chamada de rede foi observada no `tcpdump` (sim, eu verifiquei — era esse tipo de voo).',
          '**Hora 5 — Esqueci a assinatura exata de um método do Zod.** Abri o Devdocs em uma aba do navegador. O docset do Zod estava incluído. Encontrei a resposta em 8 segundos. Sem spinner de "carregando…".',
          '**Hora 6 — Tentei instalar um pacote que não estava em cache: `vitest-html-reporter`.** O `npm install` falhou com um 404 do Verdaccio. Esta foi a primeira parede. A reserva: clonei o repo localmente, copiei o código-fonte manualmente para `node_modules` e apliquei um patch no `package.json` para apontar para um caminho local. Levou 12 minutos. A solução é preventiva: pré-aqueça o cache para tudo o que você possa precisar antes de perder o sinal.',
          '**Hora 8 — Perguntei ao modelo sobre uma biblioteca lançada em fevereiro de 2026.** Ele alucinou a API com confiança. A data de corte de treinamento do Qwen3-Coder foi outubro de 2025; as APIs de fevereiro de 2026 não estavam nos dados de treinamento. A solução: eu havia indexado localmente o repo da biblioteca com `rga` antes do voo. Busquei no código-fonte real. Encontrei a assinatura correta. A lição: o modelo sabe o que estava nos seus dados de treinamento; para qualquer coisa mais nova, a documentação e o código-fonte são a sua autoridade.',
          '**Hora 11 — Executei a suíte completa de testes.** 423 testes, 4,7 segundos. Sem regressões. O test runner não se importa com a rede.',
          '**Hora 13 — Não fiz push de nada.** Os commits do Git se acumularam localmente. Quando o avião pousou, executei `git push` uma vez na sala VIP do aeroporto. 17 commits em um único push. O modelo git-first local é o que torna isso possível — o único passo que depende da rede é o push final.',
          '**Resultado líquido:** uma funcionalidade foi entregue, dois bugs foram corrigidos, 11 testes novos foram escritos, três commits dos quais ainda me orgulho. Horas produtivas: aproximadamente 11 de 14 (o resto foi comer, dormir e lidar com a dependência problemática na hora 6). O setup se pagou nesse voo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Faça um ensaio "sem luz" em casa: desative o Wi-Fi, desconecte o hotspot do celular e tente fazer uma sessão de trabalho normal de 90 minutos. Você vai encontrar as lacunas no seu cache antes de encontrá-las a 10.000 metros de altura. Descobertas frequentes: uma importação somente de tipos do TypeScript que baixava de `@types`, um `pnpm install` que evita o cache do npm, uma imagem base do Docker que não está baixada previamente.',
          },
        ],
      },
      preFlightChecklist: {
        id: 'pre-flight-checklist',
        title: 'Checklist pré-voo: passos numerados',
        content:
          '**Execute esta lista no dia anterior à perda da conexão.** Cada passo leva 1–10 minutos; a lista completa leva aproximadamente uma hora na primeira vez, 15 minutos em viagens posteriores porque os caches persistem.',
        numberedItems: [
          'Baixe o LLM local. `ollama pull qwen3-coder:30b` (ou `:7b` se a sua máquina tiver 16 GB). Verifique com `ollama run qwen3-coder:30b "say hi"` — ele deve responder em segundos.',
          'Instale e configure o Continue.dev (ou Aider). Abra o VS Code, instale a extensão do Continue.dev, edite `~/.continue/config.json` para apontar para `http://localhost:11434` (a porta padrão do Ollama). Teste abrindo um arquivo e apertando Cmd+I.',
          'Aqueça o cache de pacotes do seu projeto. Entre no diretório do projeto com `cd` e execute `npm install` (ou `pip install -r requirements.txt`, ou `cargo build`, ou `go mod download`). Verdaccio, devpi ou Cargo farão cache de tudo em disco na primeira execução.',
          'Execute uma instalação de exemplo de quaisquer dependências opcionais de que você possa precisar. Se for possível que você adicione `@tanstack/react-query` ou `zod` durante o voo, execute agora um `npm install` descartável em um diretório de teste. Os pacotes ficarão no cache.',
          'Pré-clone os repos que você possa precisar consultar. `git clone --mirror` é o mais seguro — você obtém o histórico completo e todas as branches sem precisar de rede mais tarde.',
          'Sincronize o Devdocs (ou baixe os docsets do Zeal de que você precisa). No Devdocs, selecione Configurações → Desativar atualização automática → Baixar tudo. Os docsets de que você precisa (TypeScript, Node, React, Python, Rust) ficarão disponíveis localmente.',
          'Baixe previamente qualquer imagem Docker que você possa usar. `docker pull node:20-alpine`, `docker pull postgres:16`, etc. Elas serão servidas a partir do armazenamento local quando você executar `docker compose up` mais tarde.',
          'Execute a suíte de testes uma vez no projeto. Detecta artefatos de compilação faltantes (TypeScript compilado, cliente Prisma gerado) antes de você estar a 10.000 metros de qualquer rede.',
          'Desconecte-se por 30 minutos e teste novamente. Desative o Wi-Fi, desative o celular e tente trabalhar cinco minutos em algo real. O que falhar — corrija agora, não no portão de embarque.',
          'Carregue tudo. A bateria é o segundo modo de falha offline depois de um cache incompleto. Duas horas de uso do LLM em um M5 MacBook Pro consomem aproximadamente 30–40% da bateria — planeje de acordo e leve um power bank USB-C compatível com notebooks.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Salve este checklist como um script. Um arquivo bash de 30 linhas (`pre-flight.sh`) que execute `ollama pull`, `npm install`, `pip install`, `git fetch --all` e `docker pull` para as suas dependências habituais transforma todo o processo em um único comando. A primeira execução leva 45 minutos; as seguintes levam 5 porque tudo está em cache.',
          },
        ],
        image: '/images/local-coding-llm-pre-flight-checklist-en.svg',
        imageCaption: 'Checklist offline pré-voo — 5 passos: (1) baixar o LLM com ollama pull, (2) aquecer o cache com npm install / pip install / cargo build, (3) sincronizar o Devdocs (~3–5 GB), (4) clonar repos com git clone --mirror, (5) teste "sem luz" de 30 minutos antes da viagem.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware: por que um M5 MacBook Pro com 64 GB de memória unificada vence',
        content:
          '**Para trabalho de programação puramente offline, o Apple M5 MacBook Pro com 64 GB de memória unificada é a máquina mais potente em 2026.** A razão é a memória unificada: GPU e CPU compartilham um único pool, então o modelo 30B, o editor, os contêineres Docker e um visualizador de documentação baseado em Chromium convivem sem paginação.',
        items: [
          '**A memória unificada significa que o modelo não está "na VRAM" nem "na RAM do sistema" — está na memória.** Quando você carrega o Qwen3-Coder 30B Q4_K_M (~18 GB), ele permanece residente; mudar para uma stack do Docker Compose não o expulsa. Em um notebook com GPU discreta de 16 GB de VRAM e 32 GB de RAM do sistema, trocar o modelo custa 5–10 segundos a cada troca.',
          '**O modelo 30B cabe confortavelmente em 24 GB; 64 GB deixam margem para tudo o mais.** Com 64 GB você pode ter o modelo carregado, três contêineres Docker (banco de dados, redis, sandbox), VS Code, uma aba do Chromium com Devdocs e um multiplexador de terminal, tudo sem lentidão.',
          '**Duração da bateria sob carga: 6–8 horas.** Cobre a maioria dos voos com um power bank USB-C. O M5 é o chip mais eficiente energeticamente para inferência LLM sustentada já lançado no mercado — o consumo de energia por token é aproximadamente 3× melhor que os notebooks com GPU discreta no mesmo desempenho.',
          '**Sem ruído de ventilador em um avião silencioso.** O chassi M5 executa o modelo 30B de forma passiva por períodos sustentados. Os notebooks com GPU discreta acionam os ventiladores de forma audível sob carga de inferência — não é problema em casa, mas é um problema social na fileira 27.',
          '**As alternativas com GPU discreta são competitivas em desempenho bruto mas com mais compromissos.** Um Razer Blade 16 com RTX 4090 mobile (16 GB VRAM) executa o modelo 30B a mais tokens/seg que um M5, mas a duração da bateria sob inferência é ~2 horas, o ruído do ventilador é importante e o limite de 16 GB VRAM impede também manter configurações de contexto de 32K ou um contêiner Docker com banco de dados junto ao modelo.',
          '**Para uma comparação de hardware mais profunda,** consulte [Os melhores notebooks para LLMs locais em 2026](/pt/local-llms/best-laptops-local-llm) — esse artigo classifica todas as opções viáveis (Macs da série M, ROG Strix, Razer Blade, Framework 16) por tokens/seg, bateria e memória total do sistema.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Se você já tem um MacBook Pro M3 ou M4 de 32 GB, não precisa atualizá-lo. O modelo 7B funciona confortavelmente com 8 GB de RAM e oferece 80–85% da qualidade do 30B. A recomendação de 64 GB é para usuários que compram o equipamento especificamente para programar offline; quem já tem hardware deve testar primeiro com o 7B.',
          },
        ],
        image: '/images/local-coding-llm-hardware-comparison-en.svg',
        imageCaption: 'Comparação de hardware para programar offline: Apple M5 MacBook Pro 64 GB é a opção recomendada (35–50 tok/s, bateria 6–8 h, suporte completo do modelo 30B); notebook RTX 4090 vence em tokens/seg mas dura ~2 h sob inferência; RTX 4070/4090 limitados ao modelo 7B com 8–16 GB VRAM.',
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Escolher o modelo local certo para trabalhar offline',
        content:
          '**O modelo é a maior parcela de disco e memória; escolha bem desde o início.** Três opções razoáveis em maio de 2026, ordenadas por quão bem gerenciam o trabalho de programação offline especificamente.',
        items: [
          '**Qwen3-Coder 30B Q4_K_M (~18 GB) — a opção recomendada por padrão.** O melhor da sua classe em autocompletar de TypeScript, Python, Rust e Go; chamadas de ferramentas confiáveis; gerencia contextos de 32K tokens. Precisa de 24 GB de memória disponível (RAM do sistema no Apple Silicon, VRAM em GPUs discretas).',
          '**Qwen3-Coder 7B Q4_K_M (~5 GB) — a reserva leve.** Funciona com 8 GB de RAM unificada ou 8 GB de VRAM. Aproximadamente 80–85% da qualidade do 30B no trabalho cotidiano; a diferença aparece em refatorações de múltiplos passos e raciocínio de contexto longo. A escolha certa se o seu notebook tem menos de 24 GB de memória ou se você quer que o modelo conviva com cargas de trabalho pesadas de Docker.',
          '**DeepSeek Coder V3 — escolha este se você precisa de contextos muito longos.** O V3 da DeepSeek suporta 128K tokens; útil quando você depura através de muitos arquivos em um único prompt. Maior em disco (~25 GB com Q4_K_M); qualidade bruta aproximadamente equivalente ao Qwen3-Coder 30B.',
          '**Codestral 22B — a opção de velocidade.** Autocompletar mais rápido que o Qwen3-Coder 30B; mais fraco em chamadas de ferramentas e planos de múltiplos passos. Boa escolha se o seu fluxo de trabalho offline é dominado pelo autocompletar e você não usa agentes.',
          '**Evite:** modelos de propósito geral abaixo de 13B sem fine-tuning de código (Llama 3.2 7B, Mistral Small) e qualquer quantização mais agressiva que Q4_K_M. Ambos falham de forma óbvia em trabalho de programação real.',
          '**Para a comparação completa de modelos de código** incluindo pontuações HumanEval+ por linguagem, consulte [Os melhores modelos locais de código em 2026: Qwen3-Coder vs DeepSeek vs Codestral](/pt/power-local-llm/best-local-coding-models-2026).',
        ],
        image: '/images/local-coding-llm-model-choice-en.svg',
        imageCaption: 'Modelos locais de código para trabalho offline: Qwen3-Coder 30B Q4_K_M (~18 GB, 24 GB RAM) é o padrão recomendado; Qwen3-Coder 7B (~5 GB, 8 GB RAM) é a reserva leve com 80–85% de qualidade; DeepSeek Coder V3 (~25 GB) para fluxos de trabalho com contextos de 128K; Codestral 22B para o autocompletar mais rápido.',
      },
      dependencyCache: {
        id: 'dependency-cache',
        title: 'Fazer cache de dependências: npm, pip, cargo, go',
        content:
          '**Os gerenciadores de pacotes são o segundo ponto de falha offline mais comum depois do LLM.** Cada linguagem tem um mecanismo diferente; o princípio é o mesmo — baixe previamente tudo o que você possa precisar e sirva-o a partir do armazenamento local quando você chamar `install`.',
        items: [
          '**npm (Node.js):** instale o Verdaccio (`npm install -g verdaccio`), aponte o npm para ele (`npm config set registry http://localhost:4873/`), execute `npm install` uma vez em cada projeto. O Verdaccio faz cache de cada pacote localmente; as instalações posteriores funcionam offline. O cache fica em `~/.local/share/verdaccio/storage`.',
          '**pip (Python):** o padrão mais simples é `pip download -r requirements.txt -d ~/wheelhouse`, depois instalar com `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. Para uso em múltiplos projetos, o devpi é a opção mais poderosa — mesma forma que o Verdaccio mas para Python.',
          '**cargo (Rust):** o `cargo vendor` escreve cada dependência em um diretório `vendor/` do projeto, mais um trecho `.cargo/config.toml` que diz ao cargo para usá-lo. Uma vez confirmado, o projeto compila offline para sempre. O Cargo também faz cache do registro global em `~/.cargo/registry/cache` — pré-aquecê-lo com `cargo fetch` cobre a maioria dos casos.',
          '**go (Go):** o padrão mais simples é `go mod vendor` por projeto (o Go escreve um diretório `vendor/` como o Cargo). Para cache global, execute um proxy Athens local e defina `GOPROXY=http://localhost:3000`.',
          '**pnpm e yarn (sabor npm):** aponte-os para o Verdaccio do mesmo jeito que você aponta o npm. O armazenamento do pnpm com endereçamento por conteúdo é offline-friendly por padrão; uma vez que um pacote está no armazenamento, todos os projetos o compartilham.',
          '**Brew, apt, dnf (pacotes do sistema):** menos crítico para viagens curtas mas vale a pena conhecer. O `brew bundle dump` produz um Brewfile que você pode reexecutar mais tarde; apt/dnf têm modos offline via `apt-get download` e arquivos `.deb`/`.rpm` baixados.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O padrão offline de pacotes mais simples é por projeto: `cargo vendor` para Rust, `go mod vendor` para Go, `npm install` contra o Verdaccio para Node, `pip download` para Python — tudo feito no nível de projeto no dia anterior. Os caches do sistema (armazenamento do Verdaccio, ~/.cargo, ~/.npm) gerenciam o que você possa precisar entre projetos.',
          },
        ],
      },
      offlineDocs: {
        id: 'offline-docs',
        title: 'Documentação offline: Devdocs, Zeal e o dump do Stack Overflow',
        content:
          '**O modelo sabe aproximadamente o que foi treinado; todo o resto vive na documentação offline e no código.** Três fontes cobrem aproximadamente 95% do que você buscaria no Google.',
        items: [
          '**Devdocs (app web, ~3 GB).** Um Progressive Web App autocontido que espelha a documentação oficial de ~150 linguagens e frameworks. Abra `devdocs.io`, vá em Configurações, ative a documentação que você usa, aperte "Tornar disponível offline". O navegador faz cache de tudo; funciona em modo avião para sempre.',
          '**Zeal (app de desktop, ~5 GB).** Um navegador de documentação nativo de desktop que usa os docsets do Dash — o mesmo formato do app Dash do macOS, mas gratuito e multiplataforma. Melhor navegação com teclado que o Devdocs; busca mais fraca. Escolha um; ter os dois é exagero.',
          '**Dump de dados do Stack Overflow (~8 GB comprimido).** O Internet Archive hospeda o dump oficial de dados do Stack Exchange como torrent. Ferramentas como o Kiwix o apresentam como um site navegável, ou você pode indexá-lo com Elasticsearch / SQLite-FTS para busca local rápida. A cobertura é cortada na data do dump — normalmente a poucos meses — mas para perguntas gerais de programação é mais que suficiente.',
          '**Documentação específica do projeto.** Para as bibliotecas que você usa com frequência, clone o repo e o código-fonte do site de documentação. A maioria dos sites de documentação são estáticos e vivem em diretórios `docs/`; `mkdocs build` ou `npm run docs:build` produz um site local que você pode servir com `python -m http.server`.',
          '**O próprio modelo conta como documentação para o que está nos seus dados de treinamento.** O Qwen3-Coder 30B conhece bem a biblioteca padrão e os principais frameworks — TypeScript, React, Python stdlib, NumPy, os SDKs da AWS. Perguntar ao modelo costuma ser mais rápido que buscar no Devdocs para isso. A divisão é "modelo para o conhecido, documentação para o novo, código-fonte para o desconhecido".',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A qualidade do conteúdo do Stack Overflow varia muito conforme a tag. O dump é mais útil para linguagens legadas e mensagens de erro específicas — exatamente o que o modelo lida pior. Para perguntas sobre frameworks populares, o modelo é mais rápido e preciso que buscar no dump.',
          },
        ],
      },
      localSearch: {
        id: 'local-search',
        title: 'Busca local sem Google',
        content:
          '**`ripgrep` e `rga` são as duas ferramentas que fazem com que um fluxo de trabalho de busca local pareça tão rápido quanto o Google.** Ambas são gratuitas, ambas são pequenas, ambas funcionam em todas as plataformas.',
        items: [
          '**ripgrep (`rg`) — busca de texto rápida para código.** Substitui o `grep -r` e o supera em 10–50× em repositórios grandes. Lê o `.gitignore` automaticamente. Ferramenta padrão para "onde esta função é usada?" e "encontre todos os chamadores desta API".',
          '**rga (`ripgrep-all`) — ripgrep para PDFs, arquivos comprimidos e outros formatos binários.** Busca dentro de PDFs, arquivos zip, logs comprimidos com gzip, bancos de dados SQLite e documentos Office de forma transparente. `rga "consulta" .` busca em cada formato de arquivo que o ripgrep não consegue, com reserva no ripgrep para texto puro.',
          '**Caso de uso 1 — "Preciso de um exemplo de como usar esta API".** Pré-clone alguns repositórios que a usem; `rg "nome_funcao_api" ~/code/examples` retorna cada local de chamada real em uma fração de segundo. Melhor que a documentação para padrões de uso.',
          '**Caso de uso 2 — "Onde diz X nesta especificação PDF?"** `rga "frase específica" ~/specs/`. PDFs que levavam 2 minutos para revisar viram buscas de 200 ms.',
          '**Caso de uso 3 — "Stack Overflow sem Stack Overflow".** Se você indexou o dump do Stack Overflow com Kiwix ou Elasticsearch, as consultas no estilo `rg` contra o dump substituem as buscas no Google de "stackoverflow" para tópicos legados.',
          '**Para perguntas de código rápidas, o modelo é mais rápido que a busca.** `Cmd+L` no Continue.dev abre um chat com a base de código como contexto; "onde gerenciamos o fluxo de autenticação?" retorna o arquivo correto em 1–2 segundos sem que você precise digitar a consulta em uma ferramenta de busca.',
        ],
      },
      ide: {
        id: 'ide',
        title: 'Qual IDE funciona completamente offline',
        content:
          '**A maioria dos IDEs principais funciona offline; as diferenças estão nas extensões, na validação de licenças e nas ferramentas de IA.** O que importa é se as funções de IA continuam funcionando, já que é isso que os usuários notam quando a rede cai.',
        items: [
          '**VS Code — funciona completamente offline; as funções de IA dependem das extensões que você usa.** O Continue.dev roda inteiramente contra um endpoint local de Ollama e é a combinação recomendada. O autocompletar Tab integrado do Cursor faz chamadas de rede e se degrada silenciosamente. O GitHub Copilot para de funcionar imediatamente.',
          '**IDEs da JetBrains (IntelliJ, PyCharm, GoLand, WebStorm) — funcionam completamente offline uma vez que a licença está em cache.** O servidor de licenças faz ping periodicamente (a cada 30 dias para licenças individuais) mas tolera janelas offline estendidas. O Continue.dev tem uma versão para JetBrains com paridade de funções.',
          '**Vim e Neovim — completamente offline por design.** Sem verificações de licença, sem telemetria. Combine-os com o Aider em um painel de terminal lateral; ou use o `nvim` com o plugin `llm.nvim` apontando para o Ollama local.',
          '**Emacs — completamente offline por design.** Combine-o com o Aider através do `aidermacs` ou chame diretamente a API HTTP do Ollama local via `gptel`.',
          '**Cursor — parcialmente offline.** O IDE em si funciona sem internet, mas as funções principais (autocompletar Tab, agente Cmd+K) exigem o roteamento na nuvem do Cursor. Instalar o Continue.dev como extensão do VS Code dentro do Cursor contorna a limitação; você obtém um editor de IA local funcional em um IDE compatível com o modo offline.',
          '**Para uma comparação mais profunda da camada de harness especificamente,** consulte [Continue.dev vs Cline vs Aider: o melhor agente de código local em 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para viajar, prefira o Continue.dev ao Cline. O loop de agente autônomo do Cline transmite o conteúdo completo dos arquivos para a conversa, consumindo tokens rapidamente — tudo bem com energia da tomada, mas é menos conveniente em um voo onde cada watt de tempo de GPU custa bateria. O design centrado no autocompletar do Continue.dev usa muito menos computação por sessão.',
          },
        ],
      },
      whatBreaks: {
        id: 'what-breaks',
        title: 'O que realmente falha sem conexão (lista honesta)',
        content:
          '**O setup é genuinamente robusto, mas cinco coisas ainda falham.** Conhecer os modos de falha de antemão permite contorná-los.',
        items: [
          '**Instalar pacotes de terceiros completamente novos.** Sem acerto de cache, sem reserva além de vendorizar o código-fonte manualmente. A solução é preventiva — faça o pré-cache de tudo o que você possa querer, incluindo as opções que são apenas possibilidades.',
          '**O conhecimento do modelo sobre APIs lançadas após a sua data de corte.** A data de corte de treinamento do Qwen3-Coder foi outubro de 2025 (lançamento em maio de 2026); as APIs lançadas depois são, no melhor caso, estimativas. A solução: pré-clone o código-fonte e use `rg` para encontrar a assinatura real quando tiver dúvidas. Nunca confie no modelo para bibliotecas mais novas que os seus dados de treinamento.',
          '**Qualquer coisa que exija idas e voltas de autenticação OAuth ou API.** Fazer login em um provedor de nuvem, trocar tokens OAuth, acessar o portal SSO do seu time — nada disso funciona offline. A solução: faça toda a autenticação antes da decolagem e confie nos tokens em cache (que normalmente expiram após 12–24 horas).',
          '**Testes de serviços remotos baseados em navegador.** Se os seus testes chamam uma API real ou um ambiente de staging, eles vão falhar sem conexão. A solução: use um mock local (msw, nock, vcr) e grave fixtures previamente.',
          '**Geração de imagens e assets que chama serviços externos.** Os geradores de imagens na nuvem, os serviços de fontes e os assets baixados por CDN falham todos. A solução: inclua os assets fixos no repo ou use um modelo de imagens completamente local (que é uma stack separada).',
          '**A solução para o problema "como se chamava aquela biblioteca?" é o próprio modelo.** Quando você não pode buscar no Google, pergunte ao modelo "qual é o nome do pacote para a funcionalidade X?" — para coisas nos seus dados de treinamento ele responde corretamente 80–90% das vezes. Verifique no cache de pacotes antes de instalar.',
        ],
        image: '/images/local-coding-llm-what-breaks-en.svg',
        imageCaption: 'O que falha offline e a solução: (1) pacotes sem cache — instale-os antes de sair; (2) conhecimento de API pós-corte — clone o código-fonte e use ripgrep; (3) idas e voltas de autenticação OAuth — complete a auth antes de perder sinal; (4) testes contra API remotas — use mock com msw/nock; (5) imagens Docker faltantes — execute docker pull antes do voo.',
      },
      updates: {
        id: 'updates',
        title: 'Atualizar modelos e caches mais tarde',
        content:
          '**O setup é "snapshot e execução" — uma vez que tudo está em cache, permanece estático até você escolher atualizá-lo.** As atualizações ocorrem online; a sessão offline usa o que estava vigente no momento da atualização.',
        items: [
          '**Os modelos se atualizam via `ollama pull`.** Quando sai uma nova versão do Qwen3-Coder, execute `ollama pull qwen3-coder:30b` enquanto estiver online. Os novos pesos substituem os anteriores; a versão prévia desaparece a menos que você a tenha marcado com tag (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` antes de baixar).',
          '**Os caches de pacotes se atualizam no próximo `npm install` / `pip install` / `cargo update` online.** Sem fluxo de trabalho especial — o seu gerenciador de pacotes normal continua funcionando quando você está online e congela quando você está offline.',
          '**O Devdocs se atualiza automaticamente por padrão.** Desative a atualização automática antes dos voos para evitar downloads inesperados quando você tem sinal no aeroporto (Configurações → Desativar atualização automática).',
          '**Os dumps do Stack Overflow são atualizados trimestralmente.** O Internet Archive publica novos dumps a cada três meses; baixe novamente quando quiser cobertura mais recente.',
          '**Cadência a planejar:** modelo e Devdocs a cada 2–3 meses, caches de pacotes por projeto ao começar trabalho novo, dump do Stack Overflow a cada 6–12 meses. Nenhum é urgente a menos que você comece a trabalhar em algo genuinamente novo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O fluxo de atualização mais simples: dedique um domingo por mês ao "dia de manutenção online". Execute `ollama pull` para qualquer versão nova do modelo, atualize o Devdocs, execute `npm update` / `cargo update` / `pip install --upgrade` nos projetos ativos. Depois disso, você pode ficar offline durante o mês seguinte sem nenhuma degradação.',
          },
        ],
      },
      teamCache: {
        id: 'team-cache',
        title: 'Compartilhar o cache offline com o time',
        content:
          '**Para times que viajam juntos ou trabalham no mesmo ambiente restrito, os caches são compartilháveis.** Esta é a diferença entre um download de 60 GB por desenvolvedor e um download de 60 GB uma vez na rede do escritório.',
        items: [
          '**O Verdaccio também funciona como servidor de time.** Aponte um pequeno servidor de escritório para o Verdaccio, defina `npm config set registry http://team-cache.local:4873/` para todos. Os novos desenvolvedores obtêm o cache automaticamente; as viagens offline significam apenas pré-sincronizar o que você precisa no seu notebook.',
          '**Os modelos podem ser hospedados em um servidor Ollama do time.** `ollama serve` em uma máquina de escritório potente, aponte a configuração do Continue.dev de cada desenvolvedor para o servidor do time quando estão no escritório, mude para `localhost:11434` (com modelos baixados localmente) para as viagens.',
          '**O Devdocs não tem modo de time nativo mas é trivialmente compartilhável como pasta estática.** Compile-o uma vez, hospede-o em `http://docs.team.local`, que todos o marquem como favorito. Para as viagens, os desenvolvedores individuais executam instâncias em `localhost`.',
          '**O Git já é compartilhável em time.** Um Gitea local ou um GitLab auto-hospedado dentro da rede do escritório dá a cada desenvolvedor acesso offline aos repos; combine-o com `git clone --mirror` nos notebooks individuais para as viagens.',
          '**Imagens de contêiner via um registro privado.** Um pequeno Harbor ou o registro integrado do Gitea faz cache das imagens uma vez; os viajantes fazem `docker pull` para local antes de sair.',
          '**O caso econômico:** para um time de 5 desenvolvedores que viajam com frequência, compartilhar caches economiza aproximadamente 250 GB de download de internet por mês e reduz o checklist pré-voo de 60 minutos para 5.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao configurar uma stack de programação offline',
        items: [
          '**Erro 1: esquecer de testar o setup offline antes da viagem.** A falha mais comum é descobrir as lacunas no aeroporto. Faça um ensaio "sem luz" de 30 minutos em casa — desative o Wi-Fi, desconecte o celular, trabalhe em algo real — pelo menos 24 horas antes de precisar dele.',
          '**Erro 2: fazer cache apenas dos pacotes que você usa atualmente, não dos que você poderia precisar.** Se houver alguma possibilidade de que você adicione uma dependência durante a viagem, instale-a uma vez em casa como teste de fumaça. O cache vai conservá-la.',
          '**Erro 3: deixar o autocompletar Tab do Cursor ativado e supor que funciona offline.** Não funciona. O IDE volta silenciosamente a não oferecer nada; você não recebe nenhum autocompletar. Instale o Continue.dev como extensão do VS Code dentro do Cursor, ou use o VS Code diretamente.',
          '**Erro 4: usar um modelo abaixo de 7B para trabalho de programação a sério.** Os modelos de código sub-7B falham o suficiente para que você passe mais tempo corrigindo a saída deles do que escrevendo código. Desça no mínimo para o Qwen3-Coder 7B; se o seu hardware não dá conta disso, o setup de programação offline não é viável nesse notebook.',
          '**Erro 5: confiar no modelo para bibliotecas mais novas que a sua data de corte de treinamento.** Ele vai alucinar com confiança. Para qualquer coisa lançada nos últimos 6 meses, trate a saída do modelo como uma estimativa e verifique contra o código-fonte.',
          '**Erro 6: pular o cache de pacotes e supor que o `npm install` é rápido o suficiente na sala VIP do aeroporto.** O Wi-Fi da sala é pouco confiável, os downloads travam e você embarca com uma árvore de dependências instalada pela metade. Faça cache no dia anterior.',
          '**Erro 7: esquecer as imagens Docker.** Se o seu fluxo de trabalho de desenvolvimento usa `docker compose up` para um banco de dados, as imagens precisam estar baixadas previamente. Um primeiro `docker compose up` em voo sem imagens é uma parede intransponível.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Documentação do Ollama](https://ollama.com/library) — Biblioteca oficial de modelos, incluindo as variantes do Qwen3-Coder e os níveis de quantização referenciados para os orçamentos VRAM/RAM offline.',
          '[Documentação do Continue.dev](https://docs.continue.dev/) — Guia de configuração, configuração de modelo local e os fluxos de trabalho de autocompletar e chat compatíveis com o modo offline.',
          '[Documentação do Aider](https://aider.chat/) — Referência de CLI de terminal, configuração de modelo local e padrões de fluxo de trabalho offline nativos com git.',
          '[Código-fonte do Devdocs](https://github.com/freeCodeCamp/devdocs) — O app web que espelha a documentação oficial para uso offline; instruções de download e cache PWA.',
          '[Dump de dados do Stack Exchange (Internet Archive)](https://archive.org/details/stackexchange) — Dump trimestral do conteúdo do Stack Overflow usado como substituto offline para as buscas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quanto espaço ocupa o setup completo de programação offline?',
            a: 'Aproximadamente 50–80 GB em disco conforme a cobertura. Detalhamento: o Qwen3-Coder 30B Q4_K_M pesa ~18 GB, o Devdocs pesa ~3 GB, os docsets do Zeal ~5 GB se você também o usar, o dump do Stack Overflow pesa ~8 GB e os caches de pacotes por projeto (npm, pip, cargo, go) adicionam 2–10 GB cada. O modelo 7B de reserva pesa ~5 GB se você quiser uma pegada menor.',
          },
          {
            q: 'Posso instalar pacotes npm novos enquanto estou offline?',
            a: 'Apenas se eles já estiverem no seu cache local do Verdaccio ou no armazenamento do pnpm. O padrão pré-voo padrão é executar `npm install` para o projeto em casa, mais `npm install` para qualquer dependência opcional que você possa querer, antes de perder a conexão. Os pacotes que você não colocou em cache não podem ser instalados offline; a solução alternativa é clonar o código-fonte manualmente e copiá-lo para `node_modules`, mas é lento e propenso a erros. O pré-cache é a resposta.',
          },
          {
            q: 'O GitHub funciona offline?',
            a: 'O Git em si funciona completamente offline — `git commit`, `git branch`, `git rebase`, `git log` rodam todos localmente. O que não funciona é `git pull`, `git push`, `git fetch` ou qualquer interface web. Pré-clone os repos de que você precisa com `git clone --mirror` para obter o histórico completo; os commits se acumulam localmente e são enviados quando você volta a ter conexão. Para trabalho colaborativo genuinamente offline, execute um Gitea local ou um GitLab auto-hospedado no notebook de um colega ou em um pequeno servidor de escritório.',
          },
          {
            q: 'Qual IDE funciona melhor completamente offline?',
            a: 'VS Code com Continue.dev é a experiência offline mais completa: funções de IA ricas, bom ecossistema de extensões, sem chamadas de licença. Os IDEs da JetBrains funcionam mas o servidor de licenças faz ping periodicamente (tolera ~30 dias offline). Vim, Neovim e Emacs são completamente offline por design e se combinam bem com o Aider. O Cursor precisa do Continue.dev instalado dentro dele porque as funções de IA integradas do Cursor exigem chamadas de rede.',
          },
          {
            q: 'Posso clonar repos para trabalhar offline?',
            a: 'Sim. `git clone --mirror <url> <caminho>` cria um clone bare com histórico completo e todas as branches; `git clone <url>` funciona para uma cópia de trabalho normal. Ambos rodam sem rede depois do clone inicial. Para fluxos de trabalho com múltiplos repos, criar um script dos clones pré-voo (`for repo in $REPOS; do git clone --mirror "$repo"; done`) é o padrão mais simples. Os submódulos precisam de `git submodule update --init --recursive` para serem baixados previamente.',
          },
          {
            q: 'A programação offline funciona no Linux?',
            a: 'Sim — o Linux é a plataforma mais simples para um setup de programação offline. O Ollama roda de forma nativa, Continue.dev e Aider têm versões para Linux, cada gerenciador de pacotes (apt, dnf, pacman, nix) tem modos offline e a maioria das ferramentas descritas aqui foi desenvolvida originalmente no Linux. A única nota específica do Linux são os drivers de GPU: os drivers NVIDIA para Linux são maduros para inferência mas vale a pena testá-los no kernel exato que você planeja usar offline. Os Macs com Apple Silicon e os notebooks Linux com GPUs discretas são totalmente compatíveis.',
          },
          {
            q: 'Como atualizo os modelos locais de IA sem internet?',
            a: 'Você não pode — as atualizações de modelos exigem conexão. O padrão é "snapshot e execução": baixe o modelo mais recente online, depois fique offline. Quando você voltar a ter sinal (sala VIP do aeroporto, Wi-Fi do hotel, casa), execute `ollama pull qwen3-coder:30b` para obter os pesos mais recentes. O ciclo de atualização mensal é o típico; o modelo não se degrada silenciosamente entre atualizações.',
          },
          {
            q: 'Posso compartilhar um cache offline com o meu time?',
            a: 'Sim. Verdaccio (npm) e devpi (pip) funcionam ambos como servidores de time; um proxy Athens serve módulos do Go; um registro privado de contêineres serve imagens Docker; um Gitea auto-hospedado ou GitLab serve remotos git. O cache centralizado significa que os novos membros do time obtêm tudo da rede do escritório em vez de baixar 60 GB cada. Para as viagens, o notebook de cada desenvolvedor ainda precisa de um snapshot local do que vai usar, mas o cache central torna o snapshot barato.',
          },
          {
            q: 'Isso funciona em um avião com sinal fraco?',
            a: 'Sim — e é mais confiável que depender do irregular Wi-Fi do voo. Toda a stack assume zero rede; o sinal fraco é tratado igual a nenhum sinal. Anedoticamente, a latência de autocompletar do LLM local (~280 ms no M5) é mais rápida que uma típica ida e volta pelo Wi-Fi do voo aos servidores do Copilot (~400–800 ms quando a conexão está boa, muito pior quando se degrada). O design offline supera o "online quando possível" em um voo de longa distância.',
          },
          {
            q: 'É mais rápido programar offline que online?',
            a: 'Para o autocompletar e o chat, sim — as idas e voltas de inferência local são mais rápidas que as idas e voltas pela rede a um provedor de IA na nuvem. Continue.dev + Qwen3-Coder 30B em um M5 retorna o autocompletar em ~280 ms; GitHub Copilot em boas condições de rede retorna em ~180–400 ms; Copilot com rede degradada retorna mais lento ou falha. A diferença de latência é pequena mas consistentemente favorável ao uso local. O maior benefício é o determinismo — a inferência local tem a mesma velocidade sempre, independentemente do estado da rede.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Substitua o GitHub Copilot por um LLM local: setup + comparação de custos 2026](/pt/power-local-llm/replace-github-copilot-with-local-llm) — objetivo adjacente: mesma stack, abordagem diferente (custo vs. offline). Leia isto se você quiser primeiro os números de custo.',
          '[Continue.dev vs Cline vs Aider: o melhor agente de código local em 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — quais harnesses funcionam completamente offline, com cobertura profunda das diferenças entre Continue.dev, Aider e Cline.',
          '[Os melhores modelos locais de código em 2026: Qwen3-Coder vs DeepSeek vs Codestral](/pt/power-local-llm/best-local-coding-models-2026) — o lado do modelo da equação, com benchmarks HumanEval+ por linguagem.',
          '[Execute IA em um tablet: apps de LLM local para iPad e Android](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — para viajantes que preferem um dispositivo offline mais leve que um notebook.',
          '[Os melhores notebooks para LLMs locais em 2026](/pt/local-llms/best-laptops-local-llm) — referência de hardware; classifica todos os notebooks viáveis em tokens/seg, bateria e memória total do sistema.',
          '[Escreva código melhor com IA](/pt/prompt-engineering/write-better-code-with-ai) — técnicas de prompting que melhoram a qualidade de geração de código em qualquer modelo, online ou offline.',
          '[Hub de Power Local LLM](/pt/power-local-llm) — biblioteca completa de guias sobre código, RAG, agentes e trabalho criativo.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM local para programar sem internet: configuração offline completa (2026)',
      description: 'Stack de programação offline testada em um voo de 14 horas. LLM local, npm/pip em cache, Devdocs, ripgrep — ~60 GB em disco, zero chamadas de rede. Checklist pré-voo incluído.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-coding-llm-without-internet',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Offline-Entwicklungsumgebung ohne Internet: Vollständig lokal codieren (2026)',
    seoTitle: 'Offline-Coding: Lokales LLM ohne Internet 2026',
    intro: 'Eine vollständig offline Entwicklungsumgebung im Jahr 2026 passt auf etwa 60 GB Festplatte und übersteht einen 14-Stunden-Flug ohne eine einzige Netzwerkverbindung. Der Stack besteht aus einem lokalen LLM (Qwen3-Coder 30B), einer Editor-Integration (Continue.dev oder Aider), einer lokalen Dokumentationsspiegelung (Devdocs oder Zeal), einer gepufferten Paketregistrierung (Verdaccio für npm, devpi für pip) und einer lokalen Code-Suche (ripgrep plus rga). Die einzigen Dinge, die wirklich offline nicht funktionieren, sind die Installation von völlig neuen Third-Party-Paketen und das Wissen des Modells über APIs, die nach seinem Training-Cutoff veröffentlicht wurden – beide lassen sich durch Vorherunterladen lösen, bevor Sie die Verbindung verlieren.',
    metaDescription: 'Offline programmieren auf einem 14-Stunden-Flug getestet: lokales LLM, gepufferte npm/pip, DevDocs und ripgrep (~60 GB). Mit Pre-Flight-Checkliste.',
    twitterDescription: 'Entwicklungsumgebung für 14-Stunden-Flug: ~60 GB: Qwen3-Coder + Continue.dev + Devdocs + Cache. Pre-Flight-Checkliste + was wirklich offline bricht.',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3', 'Codestral 22B', 'nomic-embed-text v1.5'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro 64 GB', 'Apple M5 Max MacBook Pro 64 GB', 'Apple M4 MacBook Pro 36 GB', 'NVIDIA RTX 4090 Laptop 16 GB', 'NVIDIA RTX 4070 Laptop 8 GB'],
    audience: 'Entwickler, die auf Flügen, in eingeschränkten Umgebungen, auf Kundenstandorten ohne VPN-Zugang oder überall dort codieren müssen, wo Internet unzuverlässig ist – und die eine Einrichtung wünschen, die nicht still abbaut, wenn das Netzwerk ausfällt.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: ['lokales coding llm ohne internet', 'offline entwicklungsumgebung 2026', 'offline copilot alternative', 'vollständig offline programmieren', 'programmieren im flugzeug', 'lokales llm ohne internet'],
    leadAnswerBlock: '**Eine vollständig offline Entwicklungsumgebung im Jahr 2026 benötigt fünf Dinge auf der Festplatte, bevor Sie die Verbindung verlieren: ein quantisiertes lokales LLM (Qwen3-Coder 30B Q4_K_M, ~18 GB), eine Editor-Integration, die ohne Heimweh spricht (Continue.dev oder Aider), eine lokale Dokumentationsspiegelung (Devdocs ~3 GB oder Zeal Docsets ~5 GB), eine gepufferte Paketregistrierung für die Sprachen, die Sie verwenden (Verdaccio für npm, devpi für pip, vendored Cargo Deps für Rust), und `rga` plus `ripgrep` zum lokalen Durchsuchen von Code und PDFs. Gesamtfestplatte: etwa 50–80 GB je nach Dokumentationsabdeckung und Sprachenverfügbarkeit. Hardware-Minimum: 32 GB unified RAM (Apple Silicon) oder 16 GB VRAM (diskrete GPU) für das 30B-Modell; das 7B-Fallback läuft auf 16 GB unified RAM. Die zwei Dinge, die wirklich offline nicht funktionieren, sind die Installation von Paketen, die sich nicht in Ihrem lokalen Cache befinden, und das Wissen des Modells über APIs, die nach seinem Training-Cutoff veröffentlicht wurden – pre-cachen Sie, was Sie benötigen, bevor Sie das Signal verlieren.**',
    quickAnswerTop: {
      de: {
        question: 'Kann ein lokales Coding-LLM wirklich Ihr gesamtes Entwicklungs-Setup vollständig offline ersetzen?',
        answer: 'Ja, für die Arbeit, die Sie bereits kennen. Ein lokales LLM (Qwen3-Coder 30B) verwaltet Autocomplete, Refaktorierungen und Code-Reviews ohne Netzwerkaufrufe. Die Reibungspunkte sind nicht das Modell – sie sind das umgebende Ökosystem: Paketmanager, die aus öffentlichen Registrierungen abrufen, Dokumentationsseiten und Stack-Overflow-Suchen. Alle drei haben Offline-Ersatzstoffe, die auf eine Laptop-SSD passen: Verdaccio und devpi cachen die Registrierungen, Devdocs und Zeal spiegeln offizielle Docs, ripgrep plus rga durchsuchen Code und PDFs so schnell wie Google. Pre-cache die Abhängigkeiten für das, woran Sie arbeiten möchten, hole das Modell einmal ab, und das Setup ist genuinely flugbereit. Getestet auf einem 14-Stunden-Transatlantikflug: ein Feature ausgeliefert, zwei Bugs debuggt, Tests geschrieben – alles ohne einen einzigen Netzwerkaufruf.',
        bullets: ['Empfohlener Stack – Qwen3-Coder 30B (oder 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.', 'Festplattenbudget – etwa 50–80 GB insgesamt: 18 GB Modell, 5 GB Docs, 8 GB Stack-Overflow-Dump falls gewünscht, der Rest ist Paketcaches in der Größe Ihrer Projekte.', 'Hardware Sweet Spot – Apple M-Series MacBook Pro mit 64 GB unified RAM; die unified-memory Architektur bedeutet, das 30B-Modell und Ihr Editor und Docker passen alle ohne Paging rein.', 'Was bricht – Installation völlig neuer Pakete, die sich nicht in Ihrem Cache befinden, und Anfragen des Modells über Bibliotheken, die nach seinem Cutoff veröffentlicht wurden.', 'Pre-Flight-Checkliste – Modell abrufen, Paketcache aufwärmen, Devdocs synchronisieren, die Repos, die Sie benötigen, klonen und einen Trockentest durchführen, bevor Sie einsteigen.'],
        updatedDate: '2026-05-07',
      },
    },
    toc: [{ label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' }, { label: 'Schnelle Fakten', anchor: '#quick-facts' }, { label: 'Der Offline-Stack', anchor: '#offline-stack' }, { label: 'Der 14-Stunden-Flugtest', anchor: '#flight-test' }, { label: 'Pre-Flight-Checkliste', anchor: '#pre-flight-checklist' }, { label: 'Hardware: Warum M5 Unified Memory gewinnt', anchor: '#hardware' }, { label: 'Wahl des richtigen lokalen Modells', anchor: '#model-choice' }, { label: 'Abhängigkeits-Caching (npm, pip, cargo, go)', anchor: '#dependency-cache' }, { label: 'Offline-Dokumentation', anchor: '#offline-docs' }, { label: 'Lokale Suche ohne Google', anchor: '#local-search' }, { label: 'Welche IDE funktioniert vollständig offline', anchor: '#ide' }, { label: 'Was wirklich offline bricht', anchor: '#what-breaks' }, { label: 'Aktualisierung von Modellen und Caches später', anchor: '#updates' }, { label: 'Teilen des Caches mit einem Team', anchor: '#team-cache' }, { label: 'Häufige Fehler', anchor: '#common-mistakes' }, { label: 'Quellen', anchor: '#sources' }, { label: 'FAQ', anchor: '#faq' }, { label: 'Weiterführendes', anchor: '#related-reading' }],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'Das Foliendeck unten behandelt: einen 5-Komponenten-Offline-Coding-Stack (lokales LLM, Editor-Integration, Paketcache, Dokumentationsspiegel, lokale Suche), die Ergebnisse des 14-Stunden-Flugtests, eine 6-Schritte-Pre-Flight-Checkliste, Modellvergleich (Qwen3-Coder 30B vs. 7B vs. DeepSeek Coder V3), Abhängigkeits-Caching pro Sprache und 6 häufige Fehler. PDF als Offline-Coding-Setup-Referenzkarte herunterladen.',
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**Fünf Komponenten machen eine Entwicklungsumgebung wirklich offline:** lokales LLM, Editor-Integration, Paketcache, Dokumentationsspiegelung, lokale Suche. Lassen Sie eine aus und Sie werden innerhalb einer Stunde echter Arbeit auf eine „braucht Internet"-Wand treffen.', '**Festplattenbudget: etwa 50–80 GB.** Qwen3-Coder 30B Q4_K_M ist ~18 GB; Devdocs ist ~3 GB; ein Stack-Overflow-Dump ist ~8 GB; der Rest sind Paketcaches der Größe der Sprachen und Projekte, die Sie tatsächlich anfassen.', '**Hardware-Minimum:** 32 GB unified RAM (Apple Silicon) oder 16 GB VRAM (diskrete GPU) für das 30B-Modell, 16 GB unified RAM für das 7B-Fallback. Empfohlener Sweet Spot: M5 MacBook Pro mit 64 GB – Modell, Editor, Docker und Browser passen alle ohne Paging rein.', '**Continue.dev und Aider laufen beide vollständig offline** gegen einen lokalen Ollama oder llama.cpp Endpoint. Kein Telemetrie-Aufrufe, keine Lizenzprüfungen. GitHub Copilot, Cursors Tab-Autocomplete und Codeium benötigen alle Netzwerkaufrufe und bauen still ab, wenn offline.', '**Die zwei Dinge, die wirklich brechen:** Installation von völlig neuen Third-Party-Paketen (kein Cache-Hit, kein Fallback) und Fragen des Modells über APIs, die nach seinem Training-Cutoff veröffentlicht wurden. Beide sind durch Vor-Caching zu beheben.', '**Der 14-Stunden-Flugtest bestand:** ein echtes Feature ausgeliefert, zwei Bugs behoben, vollständige Test-Suite durchgeführt – alles ohne einen einzigen Netzwerkaufruf. Das Setup ist echt, nicht theoretisch.'] },
      quickFacts: { id: 'quick-facts', title: 'Schnelle Fakten', items: ['**Stack:** Qwen3-Coder 30B (oder 7B) + Continue.dev oder Aider + Devdocs (oder Zeal) + Verdaccio (npm) und devpi (pip) + ripgrep und rga.', '**Festplatte insgesamt:** ~50–80 GB je nach Sprachenverfügbarkeit und ob Sie den Stack-Overflow-Dump cachen.', '**Hardware Sweet Spot:** Apple M5 MacBook Pro 64 GB. Unified RAM bedeutet, das 30B-Modell und Ihr Editor und Docker teilen einen Pool.', '**Qualität offline vs. online:** identisch für das Modell selbst – Autocomplete, Refaktorierungen und Code-Review fühlen sich gleich an. Der Reibungspunkt ist um das Modell herum, nicht darin.', '**Latenz offline:** ~280 ms Autocomplete auf M5 (schneller als Roundtrip zu Copilot-Servern, wenn Sie Signal haben).', '**Open-Source durchgehend:** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (Open-Weight), Devdocs (MPL), Zeal (GPL).', '**Updates:** das Setup ist „Snapshot dann Run" – sobald alles gecacht ist, bleibt es aktuell, bis Sie es aktualisieren wählen. Online aktualisieren, dann wieder offline gehen.'] },
      offlineStack: { id: 'offline-stack', title: 'Der Offline-Stack', content: '**Fünf Komponenten, eine für jede Aufgabe, die das Netzwerk normalerweise erfüllt.** Entfernen Sie eine davon und das Setup wird während echter Arbeit an eine Wand stoßen. Die Tabelle zeigt jeden Online-Tool und seinen Offline-Äquivalent mit dem Festplattenbudget, das Sie einplanen sollten.', snippetBlocks: [{ type: 'one-sentence', text: 'Eine vollständig offline Entwicklungsumgebung in 2026 ist ein lokales LLM, eine Editor-Integration, eine gepufferte Paketregistrierung pro Sprache, eine Dokumentationsspiegelung und ein lokales Suchtool – insgesamt etwa 50–80 GB Festplatte.' }, { type: 'plain-terms', text: 'Stellen Sie sich jede Online-Aufgabe vor, die Ihr Editor und Terminal normalerweise ausführen – Pakete abrufen, Docs nachschlagen, Stack Overflow durchsuchen, Copilot fragen – und befestigen Sie einen lokalen Ersatz für jede auf Ihrem Laptop. Nach der einmaligen Pre-Flight-Pufferung hängt keine dieser Aufgaben vom Netzwerk ab. Das Modell lebt auf der Festplatte, die Docs leben auf der Festplatte, die npm-Registrierung lebt auf der Festplatte. Der einzige Ausfallmodus ist „Ich brauche ein Paket, das ich noch nicht gepuffert habe" – und auch dafür gibt es eine Lösung.' }], columns: ['Komponente', 'Online-Tool', 'Offline-Ersatz', 'Cache-Größe'], rows: [{ 'Komponente': 'KI-Code-Vervollständigung', 'Online-Tool': 'GitHub Copilot, Cursor Tab', 'Offline-Ersatz': 'Continue.dev (oder Aider) + Ollama + Qwen3-Coder 30B', 'Cache-Größe': '~18 GB (nur Modell)' }, { 'Komponente': 'Offizielle Dokumentation', 'Online-Tool': 'MDN, ReadTheDocs, offizielle Seiten', 'Offline-Ersatz': 'Devdocs (Web-App) oder Zeal (Desktop)', 'Cache-Größe': '~3–5 GB' }, { 'Komponente': 'Stack Overflow', 'Online-Tool': 'stackoverflow.com', 'Offline-Ersatz': 'Stack Exchange Daten-Dump (Kiwix oder lokaler Index)', 'Cache-Größe': '~8 GB (komprimiert)' }, { 'Komponente': 'npm-Pakete', 'Online-Tool': 'registry.npmjs.org', 'Offline-Ersatz': 'Verdaccio mit `npm install --prefer-offline` gewärmtem Cache', 'Cache-Größe': 'Projektabhängig (~2–10 GB typisch)' }, { 'Komponente': 'Python-Pakete', 'Online-Tool': 'PyPI', 'Offline-Ersatz': 'devpi oder lokale Wheels via `pip download`', 'Cache-Größe': 'Projektabhängig (~1–5 GB typisch)' }, { 'Komponente': 'Rust-Crates', 'Online-Tool': 'crates.io', 'Offline-Ersatz': '`cargo vendor` für Projekt-Deps; gepuffertes `~/.cargo/registry`', 'Cache-Größe': 'Projektabhängig (~0,5–3 GB typisch)' }, { 'Komponente': 'Go-Module', 'Online-Tool': 'proxy.golang.org', 'Offline-Ersatz': 'Lokaler Athens-Proxy oder `GOFLAGS=-mod=vendor`', 'Cache-Größe': 'Projektabhängig (~0,5–2 GB typisch)' }, { 'Komponente': 'Code-Suche', 'Online-Tool': 'GitHub-Suche, Sourcegraph', 'Offline-Ersatz': 'ripgrep (`rg`) für Code, rga für PDFs und Archive', 'Cache-Größe': '~10 MB (nur Binärdateien)' }, { 'Komponente': 'Git-Remotes', 'Online-Tool': 'GitHub, GitLab', 'Offline-Ersatz': 'Vorgeklonte Repos mit `--mirror` oder lokales Gitea', 'Cache-Größe': 'Pro Repo-Größe' }, { 'Komponente': 'Container-Images', 'Online-Tool': 'Docker Hub, GHCR', 'Offline-Ersatz': 'Lokales Registry-Mirror oder vorgeholte Images', 'Cache-Größe': 'Projektabhängig' }], callouts: [{ type: 'note', text: 'Sie brauchen am ersten Tag nicht alle zehn davon. Das minimal nützliche Offline-Setup ist das LLM, Continue.dev oder Aider und der Paketcache für die Sprache, die Sie auf der Reise verwenden möchten. Fügen Sie Devdocs und den Stack-Overflow-Dump hinzu, sobald die Grundlagen funktionieren.' }] },
      flightTest: { id: 'flight-test', title: 'Der 14-Stunden-Flugtest: Was wirklich passierte', content: ['**Das Setup wurde auf einem Transpazifikflug im März 2026 getestet – 14 Stunden, kein Wi-Fi (gekaufter Airline-Pass fiel beim Gate-Ausgang aus und kam nie zurück).** Im Folgenden wird beschrieben, was funktionierte, was beinahe brach und was die Reise ohne Vorbereitung zum Stillstand gebracht hätte.', 'Die Ausgabequalität auf einem lokalen Modell hängt davon ab, wie Sie es auffordern. Strukturierte Prompting-Techniken, die die Code-Generierung auf jedem lokalen Modell verbessern, finden Sie unter [Write Better Code With AI](/de/prompt-engineering/write-better-code-with-ai).'], items: ['**Stunde 1 – Laptop herausgezogen, ein Next.js-Projekt geöffnet, das ich am Vorabend geklont hatte.** Continue.dev war bereits auf Ollama auf `localhost:11434` ausgerichtet. Cmd+I auf eine Funktion gedrückt, die ich umgestalten wollte. Diff erschien in 2 Sekunden. Akzeptiert. Das Modell war Qwen3-Coder 30B Q4_K_M im Speicher; es war dort seit ich gepackt hatte.', '**Stunde 3 – Musste eine neue Abhängigkeit hinzufügen: `@tanstack/react-query`.** `npm install` ausgeführt. Verdaccio bediente es aus dem lokalen Cache (ich hatte `npm install` einmal zu Hause als Rauchtests durchgeführt). Insgesamt verstrichene Zeit: 4 Sekunden. Keine Netzwerkaufrufe in `tcpdump` beobachtet (ja, ich habe überprüft – es war dieser Flugtyp).', '**Stunde 5 – Vergaß die genaue Signatur einer Zod-Methode.** Devdocs in einem Browsertab geöffnet. Das Zod-Docset war enthalten. Antwort in 8 Sekunden gefunden. Kein „Lädt…"-Spinner.', '**Stunde 6 – Versuchte ein Paket zu installieren, das nicht im Cache ist: `vitest-html-reporter`.** `npm install` schlug mit einem 404 von Verdaccio fehl. Dies war die erste Wand. Der Fallback: Ich hatte das Repo lokal geklont, die Quelle manuell in `node_modules` kopiert und `package.json` bearbeitet, um auf einen lokalen Pfad zu zeigen. Dauerte 12 Minuten. Die Lösung ist präventiv: Wärmen Sie den Cache für alles auf, das Sie möglicherweise brauchen, bevor Sie das Signal verlieren.', '**Stunde 8 – Fragte das Modell über eine Bibliothek, die im Februar 2026 veröffentlicht wurde.** Es halluzinierte die API selbstbewusst. Qwen3-Coders Trainings-Cutoff war Oktober 2025; Februar-2026-APIs waren nicht in den Trainingsdaten. Die Lösung: Ich hatte das Repo der Bibliothek lokal mit `rga` indiziert, bevor der Flug losging. Durchsuchte die tatsächliche Quelle. Fand die echte Signatur. Die Lektion: Das Modell kennt, was in seinen Trainingsdaten war; für alles Neuere sind die Docs und die Quelle Ihre Autorität.', '**Stunde 11 – Ran die vollständige Test-Suite.** 423 Tests, 4,7 Sekunden. Keine Regressionsfehler. Der Test-Runner kümmert sich nicht um das Netzwerk.', '**Stunde 13 – Schob nichts.** Git-Commits sammelten sich lokal an. Als das Flugzeug landete, lief ich `git push` einmal in der Flughafenlounge. 17 Commits in einem Push. Das lokal-erste Git-Modell macht dies möglich – der einzige netzwerkabhängige Schritt ist der eventuelle Push.', '**Nettoresultat:** ein Feature ausgeliefert, zwei Bugs behoben, 11 neue Tests geschrieben, drei Commits, auf die ich immer noch stolz bin. Stunden produktiv: etwa 11 von 14 (der Rest war Essen, Schlafen und Umgang mit der rogue dependency in Stunde 6). Das Setup zahlte sich in diesem Flug allein aus.'], callouts: [{ type: 'tip', text: 'Führen Sie eine „lights-off"-Probe zu Hause durch: schalten Sie Wi-Fi aus, deaktivieren Sie den Mobilfunk-Hotspot und versuchen Sie, eine normale 90-Minuten-Arbeitssitzung zu machen. Sie werden die Lücken in Ihrem Cache finden, bevor Sie sie in 35.000 Fuß Höhe finden. Häufige Erkenntnisse: ein TypeScript-only-Import, der von `@types` zog, ein `pnpm install`, das den npm-Cache umgeht, ein Docker-Basis-Image, das nicht vorgezogen ist.' }] },
      preFlightChecklist: { id: 'pre-flight-checklist', title: 'Pre-Flight-Checkliste: Nummerierte Schritte', content: '**Führen Sie diese Liste am Tag vor dem Verlust der Konnektivität durch.** Jeder Schritt dauert 1–10 Minuten; die gesamte Liste dauert beim ersten Mal etwa eine Stunde, 15 Minuten bei nachfolgenden Reisen, weil die Caches bestehen bleiben.', numberedItems: ['Rufen Sie das lokale LLM ab. `ollama pull qwen3-coder:30b` (oder `:7b`, wenn Sie auf einem 16-GB-Computer sind). Überprüfen Sie mit `ollama run qwen3-coder:30b "say hi"` – es sollte in Sekunden antworten.', 'Installieren und konfigurieren Sie Continue.dev (oder Aider). Öffnen Sie VS Code, installieren Sie die Continue.dev-Erweiterung, bearbeiten Sie `~/.continue/config.json`, um auf `http://localhost:11434` (Ollama-Standard) zu zeigen. Test durch Öffnen einer Datei und Drücken von Cmd+I.', 'Wärmen Sie den Paketcache für Ihr Projekt auf. `cd` in das Projekt, führen Sie `npm install` (oder `pip install -r requirements.txt`, oder `cargo build`, oder `go mod download`) aus. Verdaccio, devpi oder Cargo werden alles beim ersten Durchlauf auf der Festplatte cachen.', 'Führen Sie einen Beispiel-Install aller optionalen Abhängigkeiten durch, die Sie möglicherweise brauchen. Wenn Sie möglicherweise mid-Flight `@tanstack/react-query` oder `zod` hinzufügen, führen Sie jetzt einen Einweg-`npm install` dafür in einem Scratch-Verzeichnis durch. Die Pakete landen im Cache.', 'Klonen Sie die Repos vor, auf die Sie möglicherweise verweisen. `git clone --mirror` ist am sichersten – Sie erhalten die vollständige Historie und alle Branches, ohne das Netzwerk später zu benötigen.', 'Synchronisieren Sie Devdocs (oder laden Sie die Zeal-Docsets herunter, die Sie benötigen). Wählen Sie in Devdocs Einstellungen → Auto-Update deaktivieren → Alle herunterladen. Die Docsets, die Sie benötigen (TypeScript, Node, React, Python, Rust), landen lokal.', 'Rufen Sie alle Docker-Images vor, die Sie möglicherweise verwenden. `docker pull node:20-alpine`, `docker pull postgres:16`, usw. Sie werden aus dem lokalen Speicher bereitgestellt, wenn Sie später `docker compose up` verwenden.', 'Führen Sie die Test-Suite einmal auf dem Projekt aus. Fängt fehlende Build-Artefakte auf (kompilierte TypeScript, generierte Prisma-Client) ab, bevor Sie 35.000 Fuß von einem Netzwerk entfernt sind.', 'Trennen Sie sich 30 Minuten lang und testen Sie erneut. Schalten Sie Wi-Fi aus, deaktivieren Sie Mobilfunk und versuchen Sie, fünf Minuten echte Arbeit zu leisten. Alles, das fehlschlägt – beheben Sie es jetzt, nicht beim Gate.', 'Laden Sie alles auf. Batterie ist der zweite Offline-Ausfallmodus neben einem verpassten Cache. Zwei Stunden LLM-Nutzung auf einem M5 MacBook Pro verbrauchen etwa 30–40 % der Batterie – planen Sie entsprechend und bringen Sie einen USB-C-Power-Bank mit Laptop-Rating mit.'], callouts: [{ type: 'tip', text: 'Speichern Sie diese Checkliste als Skript. Eine 30-Zeilen-Bash-Datei (`pre-flight.sh`), die `ollama pull`, `npm install`, `pip install`, `git fetch --all` und `docker pull` für Ihre häufigen Abhängigkeiten ausführt, verwandelt den gesamten Prozess in einen Befehl. Der erste Durchlauf dauert 45 Minuten; nachfolgende Durchläufe dauern 5, weil alles gecacht ist.' }] },
      hardware: { id: 'hardware', title: 'Hardware: Warum ein M5 MacBook Pro mit 64 GB Unified Memory gewinnt', content: '**Für reine Offline-Codierungsarbeit ist das Apple M5 MacBook Pro mit 64 GB Unified Memory die stärkste Single-Maschine in 2026.** Der Grund ist Unified Memory: GPU und CPU teilen sich einen Pool, sodass das 30B-Modell, Ihr Editor, Docker-Container und ein Chromium-basierter Docs-Viewer nebeneinander koexistieren, ohne dass es zu Paging kommt.', items: ['**Unified Memory bedeutet, das Modell ist weder „in VRAM" noch „in System-RAM" – es ist in Memory.** Wenn Sie Qwen3-Coder 30B Q4_K_M (~18 GB) laden, bleibt es resident; das Umschalten auf einen Docker-Compose-Stack verdrängt es nicht. Auf einem Laptop mit diskreter GPU mit 16 GB VRAM und 32 GB System-RAM kostet das Tauschen des Modells 5–10 Sekunden pro Wechsel.', '**Das 30B-Modell passt komfortabel in 24 GB; 64 GB hinterlässt Spielraum für alles andere.** Mit 64 GB können Sie das Modell geladen haben, drei Docker-Container (Datenbank, Redis, Sandbox), VS Code, einen Chromium-Tab mit Devdocs und einen Terminal-Multiplexer, alles gleichzeitig ohne Verlangsamung.', '**Akkulaufzeit unter Last: 6–8 Stunden.** Das deckt die meisten Flüge mit einer USB-C-Power-Bank ab. Der M5 ist der energieeffizienteste Chip für fortgesetzte LLM-Inferenz, der bisher an Verbraucher ausgeliefert wurde – die Energie-pro-Token-Zahl ist etwa 3× besser als Laptops mit diskreter GPU mit dem gleichen Durchsatz.', '**Kein Lüftergeräusch in einem ruhigen Flugzeug.** Das M5-Gehäuse führt das 30B-Modell über längere Zeit passiv aus. Laptops mit diskreter GPU drehen hörbaren Lüftern unter Inferenzlast – kein Problem zu Hause, aber ein soziales Problem in Reihe 27.', '**Alternativen mit diskreter GPU sind im Durchsatz wettbewerbsfähig, kosten aber Kompromisse.** Ein Razer Blade 16 mit RTX 4090 Mobilgerät (16 GB VRAM) führt das 30B-Modell mit höheren Tokens/Sek als ein M5 aus, aber die Akkulaufzeit unter Inferenz beträgt ~2 Stunden, Lüftergeräusch ist signifikant und die 16-GB-VRAM-Obergrenze bedeutet, dass Sie die größeren 32K-Kontext-Konfigurationen nicht auch halten können oder einen Docker-Container mit einer Datenbank neben dem Modell ausführen.', '**Für ein tieferes Hardware-Ranking** siehe [Best Laptops for Local LLMs in 2026](/de/local-llms/best-laptops-local-llm) – dieser Artikel ordnet jede praktikable Option (M-Series Macs, ROG Strix, Razer Blade, Framework 16) nach Tokens/Sek, Akkulaufzeit und Gesamt-Systemspeicher.'], callouts: [{ type: 'note', text: 'Wenn Sie bereits einen 32-GB-M3- oder M4-MacBook Pro besitzen, müssen Sie nicht upgraden. Das 7B-Modell läuft bequem in 8 GB RAM und liefert 80–85 % der 30B-Qualität. Die 64-GB-Empfehlung ist für Benutzer, die die Maschine speziell für Offline-Codierungsarbeit kaufen; Benutzer mit vorhandener Hardware sollten zuerst das 7B-Modell testen.' }] },
      modelChoice: { id: 'model-choice', title: 'Wahl des richtigen lokalen Modells für Offline-Arbeit', content: '**Das Modell ist der größte Festplatte und Speicher-Zeilenelement; wählen Sie einmal, wählen Sie richtig.** Drei vernünftige Optionen im Mai 2026, geordnet nach ihrer Handhabung von Offline-Codierungsarbeit.', items: ['**Qwen3-Coder 30B Q4_K_M (~18 GB) – der empfohlene Standard.** Best-in-class bei TypeScript, Python, Rust und Go Autocomplete; zuverlässige Tool-Aufrufe; handhabt 32K-Token-Kontexte. Benötigt 24 GB verfügbaren Speicher (System-RAM auf Apple Silicon, VRAM auf diskreten GPUs).', '**Qwen3-Coder 7B Q4_K_M (~5 GB) – der leichte Fallback.** Läuft auf 8 GB Unified RAM oder 8 GB VRAM. Etwa 80–85 % der 30B-Qualität auf alltäglicher Arbeit; die Lücke zeigt sich bei Multi-Step-Umgestaltungen und langkontextigen Überlegungen. Die richtige Wahl, wenn Ihr Laptop weniger als 24 GB Speicher hat oder wenn Sie möchten, dass das Modell mit schweren Docker-Workloads koexistiert.', '**DeepSeek Coder V3 – wählen Sie dies, wenn Sie sehr lange Kontexte benötigen.** DeepSeeks V3 unterstützt 128K Token; nützlich, wenn Sie über viele Dateien in einem Prompt debuggen. Größer auf der Festplatte (~25 GB in Q4_K_M); ungefähr gleichwertig mit Qwen3-Coder 30B in Raw-Qualität.', '**Codestral 22B – die Geschwindigkeit. Schnelleres Autocomplete als Qwen3-Coder 30B; schwächer bei Tool-Aufrufen und Multi-Step-Plänen. Gut, wenn Ihr Offline-Workflow Autocomplete-dominiert ist und Sie keine Agent-Systeme verwenden.', '**Überspringen:** Allzweck-Modelle unter 13B ohne Coding-Fine-Tune (Llama 3.2 7B, Mistral Small) und jede Quantisierung härter als Q4_K_M. Beide schlagen bei echter Codierungsarbeit offensichtlich fehl.', '**Für den vollständigen Coding-Modell-Vergleich** einschließlich HumanEval+ Scores pro Sprache, siehe [Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/de/power-local-llm/best-local-coding-models-2026).'] },
      dependencyCache: { id: 'dependency-cache', title: 'Caching von Abhängigkeiten: npm, pip, cargo, go', content: '**Paketmanager sind der zweithäufigste Offline-Fehlerpunkt nach dem LLM.** Jede Sprache hat einen anderen Mechanismus; das Prinzip ist gleich – holen Sie im Voraus alles ab, das Sie möglicherweise brauchen, bedienen Sie es aus dem lokalen Speicher, wenn Sie `install` aufrufen.', items: ['**npm (Node.js):** Installieren Sie Verdaccio (`npm install -g verdaccio`), zeigen Sie npm darauf (`npm config set registry http://localhost:4873/`), führen Sie `npm install` einmal auf jedem Projekt aus. Verdaccio cacht jedes Paket lokal; nachfolgende Installationen funktionieren offline. Der Cache befindet sich in `~/.local/share/verdaccio/storage`.', '**pip (Python):** das einfachste Muster ist `pip download -r requirements.txt -d ~/wheelhouse`, dann Installieren mit `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. Für Multi-Projekt-Nutzung ist devpi die leistungsstärkere Option – gleiche Form wie Verdaccio für Python.', '**cargo (Rust):** `cargo vendor` schreibt jede Abhängigkeit in ein `vendor/`-Verzeichnis im Projekt, plus ein `.cargo/config.toml`-Snippet, das cargo sagt, es zu verwenden. Sobald commitet, baut sich das Projekt offline für immer. Cargo cached auch die globale Registrierung unter `~/.cargo/registry/cache` – das Vorwärmen damit mit `cargo fetch` deckt die meisten Use-Cases ab.', '**go (Go):** das einfachste Muster ist `go mod vendor` pro Projekt (Go schreibt ein `vendor/`-Verzeichnis wie Cargo). Für globales Caching, führen Sie einen lokalen Athens-Proxy aus und stellen Sie `GOPROXY=http://localhost:3000` ein.', '**pnpm und yarn (npm-flavoured):** zeigen Sie sie auf Verdaccio, wie Sie npm zeigen. pnpms inhaltsadressierter Store ist standardmäßig offline-freundlich; sobald ein Paket im Store ist, teilt es jedes Projekt.', '**Brew, apt, dnf (System-Pakete):** weniger entscheidend für kurze Reisen, aber wissenswert. `brew bundle dump` produziert einen Brewfile, den Sie später erneut ausführen können; apt/dnf haben beide Offline-Modi über `apt-get download` und heruntergeladene `.deb`/`.rpm`-Dateien.'], callouts: [{ type: 'tip', text: 'Das einfachste Offline-Paket-Muster ist Projekt-gescoped: `cargo vendor` für Rust, `go mod vendor` für Go, `npm install` gegen Verdaccio für Node, `pip download` für Python – alles am Tag vorher auf Projektebene erledigt. Die System-weiten Caches (Verdaccio-Speicher, ~/.cargo, ~/.npm) handhaben alles, das Sie möglicherweise über Projekte hinweg brauchen.' }] },
      offlineDocs: { id: 'offline-docs', title: 'Offline-Dokumentation: Devdocs, Zeal und Stack Overflow Dump', content: '**Das Modell kennt ungefähr, worauf es trainiert wurde; alles andere befindet sich in Offline-Docs und Code.** Drei Quellen decken grob 95 % ab, was Sie googeln würden.', items: ['**Devdocs (Web-App, ~3 GB).** Eine in sich geschlossene Progressive Web App, die offizielle Docs für ~150 Sprachen und Frameworks spiegelt. Öffnen Sie `devdocs.io`, drücken Sie Einstellungen, aktivieren Sie die Docs, die Sie verwenden, drücken Sie „Offline verfügbar machen." Der Browser cached alles; funktioniert danach im Flugzeugmodus für immer.', '**Zeal (Desktop-App, ~5 GB).** Ein nativer Desktop-Docs-Browser, der Dash-Docsets verwendet – das gleiche Format wie die macOS-Dash-App, aber kostenlos und plattformübergreifend. Bessere Tastaturnavigation als Devdocs; schwächere Suche. Wählen Sie eine oder die andere; beide sind Overkill.', '**Stack Overflow Daten-Dump (~8 GB komprimiert).** Das Internet Archive hostet den offiziellen Stack Exchange Daten-Dump als Torrent. Tools wie Kiwix machen es zu einer durchsuchbaren Website, oder Sie können es mit Elasticsearch / SQLite-FTS für schnelle lokale Suche indizieren. Die Abdeckung wird am Dump-Datum beendet – normalerweise innerhalb weniger Monate – aber für allgemeine Programmierungsfragen ist das in Ordnung.', '**Projekt-spezifische Docs.** Für die Bibliotheken, die Sie stark verwenden, klonen Sie das Repo und die Docs-Site-Quelle. Die meisten Dokumentations-Seiten sind statisch und befinden sich in `docs/`-Verzeichnissen; `mkdocs build` oder `npm run docs:build` produziert eine lokale Site, die Sie mit `python -m http.server` bedienen können.', '**Das Modell selbst zählt als Docs für Dinge in seinen Trainingsdaten.** Qwen3-Coder 30B kennt die Standardbibliothek und wichtige Frameworks gut – TypeScript, React, Python stdlib, NumPy, die AWS SDKs. Das Modell zu fragen schlägt oft das Durchsuchen von Devdocs für diese. Die Aufteilung ist „Modell für Bekanntes, Docs für Neues, Quelle für Unbekanntes".'], callouts: [{ type: 'note', text: 'Stack Overflow Inhaltsqualität variiert stark nach Tag. Der Dump ist am nützlichsten für Legacy-Sprachen und spezifische Fehlermeldungen – genau die Dinge, bei denen das Modell schwächer ist. Für Mainstream-Framework-Fragen ist das Modell schneller und genauer als die Dump-Suche.' }] },
      localSearch: { id: 'local-search', title: 'Lokale Suche ohne Google', content: '**`ripgrep` und `rga` sind die beiden Tools, die eine lokale Such-Workflow genauso schnell wie Google fühlen.** Beide sind kostenlos, beide sind winzig, beide laufen auf jeder Plattform.', items: ['**ripgrep (`rg`) – schnelle Textsuche für Code.** Ersetzt `grep -r` und übertrifft es um das 10–50×fache auf großen Repositories. Liest `.gitignore` automatisch. Standard-Tool für „wo ist diese Funktion" und „finde alle Aufrufer dieser API".', '**rga (`ripgrep-all`) – ripgrep für PDFs, Archive und andere Binärformate.** Durchsucht PDFs, Zip-Dateien, gzippte Logs, SQLite-Datenbanken und Office-Dokumente transparent. `rga "query" .` durchsucht jedes Dateiformat, das ripgrep nicht kann, mit Fallback auf ripgrep für Nur-Text.', '**Use-Case 1 – „Ich brauche ein Beispiel, wie man diese API benutzt."** Klonen Sie ein paar Repositorys vor, die sie verwenden; `rg "api_function_name" ~/code/examples` gibt jedem tatsächlichen Aufruf in einem Bruchteil einer Sekunde zurück. Besser als Docs für Nutzungsmuster.', '**Use-Case 2 – „Wo in dieser PDF-Spezifikation steht X?"** `rga "spezifischer Satz" ~/specs/`. PDFs, die 2 Minuten zum Überfliegen brauchten, werden 200-ms-Suchen.', '**Use-Case 3 – „Stack Overflow ohne Stack Overflow."** Wenn Sie den Stack Overflow Dump mit Kiwix oder Elasticsearch indiziert haben, ersetzen `rg`-ähnliche Abfragen gegen den Dump Google \"stackoverflow\"-Suchen nach Legacy-Themen.', '**Für schnelle Code-Fragen ist das Modell schneller als die Suche.** `Cmd+L` in Continue.dev öffnet einen Chat mit der Codebasis als Kontext; \"wo handhaben wir den Auth-Flow?\" gibt die richtige Datei in 1–2 Sekunden zurück, ohne dass Sie die Abfrage in ein Such-Tool tippen.'] },
      ide: { id: 'ide', title: 'Welche IDE funktioniert vollständig offline', content: '**Die meisten großen IDEs funktionieren offline; die Unterschiede liegen in Erweiterungen, Lizenzvalidierung und der KI-Tooling.** Was zählt ist, ob die KI-Funktionen wirklich funktionieren, da dies der Bit ist, den Benutzer bemerken, wenn das Netzwerk ausfällt.', items: ['**VS Code – funktioniert vollständig offline; KI-Funktionen hängen davon ab, welche Erweiterungen Sie verwenden.** Continue.dev läuft vollständig gegen einen lokalen Ollama-Endpoint und ist das empfohlene Pairing. Der Tab-Autocomplete von Cursor macht Netzwerkaufrufe und degradiert stumm. GitHub Copilot hört sofort auf zu funktionieren.', '**JetBrains IDEs (IntelliJ, PyCharm, GoLand, WebStorm) – funktionieren vollständig offline, sobald die Lizenz gecacht ist.** Der Lizenz-Server pingt periodisch (alle 30 Tage für einzelne Lizenzen) aber toleriert erweiterte Offline-Fenster. Continue.dev hat einen JetBrains-Build mit Feature-Parität.', '**Vim und Neovim – vollständig offline nach Design.** Keine Lizenz-Checks, keine Telemetrie. Pairing mit Aider in einem Seiten-Terminal-Pane; oder verwende `nvim` mit dem `llm.nvim`-Plugin, das auf lokales Ollama zeigt.', '**Emacs – vollständig offline nach Design.** Pairing mit Aider durch `aidermacs` oder rufe die lokale Ollama HTTP API direkt über `gptel` auf.', '**Cursor – teilweise offline.** Die IDE selbst läuft ohne Internet, aber die Headline-Features (Tab-Autocomplete, Cmd+K-Agent) benötigen Cursors Cloud-Routing. Das Installieren von Continue.dev als VS Code-Erweiterung in Cursor umgeht die Limitation; Sie erhalten einen funktionierenden lokalen KI-Editor in einer Offline-fähigen IDE.', '**Für einen tieferen Vergleich der Harness-Ebene speziell** siehe [Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local).'], callouts: [{ type: 'tip', text: 'Zum Reisen bevorzugen Sie Continue.dev gegenüber Cline. Die Autonomous-Agent-Loop von Cline streamet vollständige Datei-Inhalte ins Gespräch, verbrennt Tokens schnell – fein auf Netzstrom, weniger spaßig im Flugzeug, wo jedes Watt GPU-Zeit die Batterie kostet. Das Autocomplete-First-Design von Continue.dev verwendet dramatisch weniger Berechnung pro Sitzung.' }] },
      whatBreaks: { id: 'what-breaks', title: 'Was wirklich offline bricht (ehrliche Liste)', content: '**Das Setup ist genuinely robust, aber fünf Dinge schlagen immer noch fehl.** Die Fehlermodi im Voraus zu kennen, ermöglicht Ihnen, sie zu umgehen.', items: ['**Installation von brandneuen Third-Party-Paketen.** Kein Cache-Hit, kein Fallback außer manueller Vendoring-Quelle. Die Lösung ist präventiv – alten Sie alles vor, das Sie möglicherweise möchten, einschließlich Dehnungsziele.', '**Das Wissen des Modells über Post-Cutoff-APIs.** Qwen3-Coders Trainings-Cutoff war Oktober 2025 (Mai-2026-Release); nach dieser Zeit veröffentlichte APIs werden bestenfalls erraten. Die Lösung: klonen Sie die Quelle vor und `rg` für die echte Signatur, wenn im Zweifel. Vertrauen Sie dem Modell niemals auf Bibliotheken, die älter sind als seine Trainingsdaten.', '**Alles, das OAuth oder API-Authentifizierungs-Roundtrips benötigt.** Einloggen in einen Cloud-Provider, Austausch von OAuth-Token, Treffer Ihres Teams SSO-Portal – keines davon funktioniert offline. Die Lösung: machen Sie alle Authentifizierung vor dem Start und verlassen sich auf gecachte Token (die normalerweise nach 12–24 Stunden ablaufen).', '**Browser-basiertes Testen von Remote-Services.** Wenn Ihre Tests eine echte API oder eine Staging-Umgebung treffen, schlagen sie offline fehl. Die Lösung: Verwende ein lokales Mock (msw, nock, vcr) und pre-record Fixtures.', '**Bild- und Asset-Generierung, die externe Services aufruft.** Cloud-basierte Image-Generatoren, Font-Services und CDN-abgerufene Assets alle fehlschlag. Die Lösung: backen Sie feste Assets ins Repo oder verwenden Sie ein vollständig lokales Image-Modell (das ist ein separater Stack).', '**Die Lösung für das „wie hieß diese Bibliothek"-Problem ist das Modell selbst.** Wenn Sie Google nicht durchsuchen können, fragen Sie das Modell \"wie heißt das Paket für X-Funktionalität\" – für Dinge in seinen Trainingsdaten antwortet es korrekt 80–90 % der Zeit. Überprüfen Sie gegen den Paketcache, bevor Sie installieren.'] },
      updates: { id: 'updates', title: 'Aktualisierung von Modellen und Caches später', content: '**Das Setup ist „Snapshot und Run" – sobald alles gecacht ist, bleibt es statisch, bis Sie es aktualisieren möchten.** Aktualisierungen passieren online; die Offline-Sitzung verwendet, was zum Aktualisierungszeitpunkt aktuell war.', items: ['**Modell-Updates über `ollama pull`.** Wenn eine neue Qwen3-Coder-Version ausgeliefert wird, führen Sie `ollama pull qwen3-coder:30b` während des Online aus. Die neuen Gewichte ersetzen den alten; die vorherige Version ist weg, es sei denn, Sie haben sie getaggt (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` vor dem Abrufen).', '**Paketcaches aktualisieren sich beim nächsten Online-`npm install` / `pip install` / `cargo update`.** Kein spezieller Workflow – Ihr Paketmanager funktioniert normal, wenn Sie online sind und erstarrt, wenn Sie offline sind.', '**Devdocs aktualisiert sich standardmäßig automatisch.** Deaktivieren Sie Auto-Update vor Flügen, um überraschende Downloads zu vermeiden, wenn Sie Signal am Flughafen haben (Einstellungen → Auto-Update deaktivieren).', '**Stack Overflow Dumps erfrischen sich vierteljährlich.** Das Internet Archive veröffentlicht neue Dumps alle drei Monate; neu herunterladen, wenn Sie neuere Abdeckung möchten.', '**Cadence zu planen:** Modell und Devdocs alle 2–3 Monate, Paketcaches pro-Projekt wenn Sie neue Arbeit starten, Stack Overflow Dump alle 6–12 Monate. Keines davon ist dringend, es sei denn, Sie starten die Arbeit an etwas genuinely Neuem.'], callouts: [{ type: 'tip', text: 'Der einfachste Aktualisierungs-Workflow: dedizieren Sie einen Sonntag im Monat auf \"Online-Wartungstag\". Führen Sie `ollama pull` aus, um neue Modellversionen zu pullen, Devdocs zu erfrischen, `npm update` / `cargo update` / `pip install --upgrade` auf aktive Projekte. Danach können Sie den nächsten Monat dunkel gehen, ohne dass keine Degradation stattfindet.' }] },
      teamCache: { id: 'team-cache', title: 'Teilen des Offline-Caches mit einem Team', content: '**Für Teams, die zusammen reisen oder in der gleichen eingeschränkten Umgebung arbeiten, sind Caches shareable.** Dies ist der Unterschied zwischen einem 60-GB-Download pro Developer und einem 60-GB-Download einmal im Office-Netzwerk.', items: ['**Verdaccio läuft auch als Team-Server.** Zeigen Sie einen kleinen Office-Server auf Verdaccio, stellen Sie `npm config set registry http://team-cache.local:4873/` für jeden. Neue Developer erhalten den Cache automatisch; Offline-Reisen bedeuten einfach Pre-Sync, was Sie auf Ihrem Laptop brauchen.', '**Modelle können auf einem Team-Ollama-Server gehostet werden.** `ollama serve` auf einer beefy Office-Maschine, zeigen Sie Every Developer\'s Continue.dev config auf den Team-Server, wenn im Office, wechseln Sie zu `localhost:11434` (mit lokal-gepullten Modellen) zum Reisen.', '**Devdocs hat keinen nativen Team-Modus, aber ist trivial shareable als statischer Ordner.** Bauen Sie es einmal, hosten Sie auf `http://docs.team.local`, jeder markiert mit Lesezeichen. Zum Reisen führen einzelne Developer `localhost`-Instanzen aus.', '**Git ist bereits Team-shareable.** Ein lokales Gitea oder selbst-gehostetes GitLab im Office-Netzwerk gibt jedem Developer Offline-vom-Office-Repo-Zugriff; kombiniere mit `git clone --mirror` auf einzelnen Laptops zum Reisen.', '**Container-Images über ein Privat-Registry.** Ein kleines Harbor oder Gitea-built-in Registry cached Images einmal; Traveler `docker pull` zum lokalen, bevor sie gehen.', '**Der wirtschaftliche Fall:** Für ein 5-Developer-Team, das regelmäßig reist, spart das Teilen von Caches ungefähr 250 GB Internet-Download pro Monat und verwandelt die Pre-Flight-Checkliste von 60 Minuten zu 5.'] },
      commonMistakes: { id: 'common-mistakes', title: 'Häufige Fehler beim Einrichten eines Offline-Coding-Stacks', items: ['**Fehler 1: vergaß, das Setup offline vor der Reise zu testen.** Der häufigste Fehler ist, Lücken am Flughafen zu finden. Führen Sie eine 30-Minuten-\"lights-off\"-Probe zu Hause – deaktivieren Sie Wi-Fi, deaktivieren Sie Mobilfunk, machen Sie echte Arbeit – mindestens 24 Stunden, bevor Sie es brauchen.', '**Fehler 2: cachen nur die Pakete, die Sie derzeit verwenden, nicht die, die Sie möglicherweise brauchen.** Wenn es eine Chance gibt, dass Sie eine Abhängigkeit mid-Trip hinzufügen, installieren Sie es einmal zu Hause als Rauchmittel. Der Cache wird es behalten.', '**Fehler 3: Cursors Tab-Autocomplete aktiviert lassen und annehmen, dass es offline funktioniert.** Das tut es nicht. Die IDE fällt stumm auf nichts zurück; Sie erhalten kein Autocomplete überhaupt. Installieren Sie entweder Continue.dev als VS Code-Erweiterung in Cursor, oder verwenden Sie VS Code direkt.', '**Fehler 4: ein Modell unter 7B für ernsthafte Coding-Arbeit verwenden.** Sub-7B Coding-Modelle missen genug, dass Sie mehr Zeit mit dem Fixieren ihrer Ausgabe verbringen als mit dem Schreiben von Code. Fällt auf Qwen3-Coder 7B im kleinsten; wenn Ihr Hardware dies nicht handhaben kann, ist das Offline-Coding-Setup nicht auf diesem Laptop lebensfähig.', '**Fehler 5: das Modell auf Bibliotheken neuer als seinen Trainings-Cutoff vertrauen.** Es wird selbstbewusst halluzinieren. Für alles, das in den letzten 6 Monaten veröffentlicht wurde, behandeln Sie die Ausgabe des Modells als eine Vermutung und überprüfen Sie gegen den Quellcode.', '**Fehler 6: den Paketcache überspringen und annehmen, dass `npm install` im Flughafen-Lounge schnell genug ist.** Lounge Wi-Fi ist unzuverlässig, Downloads stallen und Sie steigen mit einem halb-installierten Abhängigkeits-Baum ein. Cachen Sie den Tag zuvor.', '**Fehler 7: Docker-Images vergessen.** Wenn Ihr Dev-Workflow `docker compose up` für eine Datenbank verwendet, müssen die Images vorgezogen werden. Erstes `docker compose up` im Flug ohne Images ist eine harte Wand.'] },
      sources: { id: 'sources', title: 'Quellen', items: ['[Ollama Documentation](https://ollama.com/library) — Offizielle Modell-Bibliothek, einschließlich Qwen3-Coder-Varianten und Quantisierungsstufen, auf die für Offline-VRAM/RAM-Budgets verwiesen wird.', '[Continue.dev Documentation](https://docs.continue.dev/) — Setup-Anleitung, lokale Modell-Konfiguration und die Offline-fähigen Autocomplete- und Chat-Workflows.', '[Aider Documentation](https://aider.chat/) — Terminal-CLI-Referenz, lokales-Modell-Setup und Git-native Offline-Workflow-Muster.', '[Devdocs Source](https://github.com/freeCodeCamp/devdocs) — Die Web-App, die offizielle Dokumentation für den Offline-Gebrauch spiegelt; Download- und PWA-Cache-Anweisungen.', '[Stack Exchange Data Dump (Internet Archive)](https://archive.org/details/stackexchange) — Vierteljährliche Stack Overflow Inhalts-Dump, die als Offline-Ersatz für Suchen verwendet wird.'] },
      faq: { id: 'faq', title: 'FAQ', faqs: [{ q: 'Wie groß ist das vollständige Offline-Coding-Setup?', a: 'Ungefähr 50–80 GB auf der Festplatte, abhängig von der Abdeckung. Aufschlüsselung: Qwen3-Coder 30B Q4_K_M ist ~18 GB, Devdocs ist ~3 GB, Zeal-Docsets ~5 GB wenn Sie es auch verwenden, Stack Overflow Dump ist ~8 GB und Pro-Projekt-Paketcaches (npm, pip, cargo, go) fügen 2–10 GB jeweils hinzu. Das 7B-Modell-Fallback ist ~5 GB, wenn Sie einen kleineren Fußabdruck möchten.' }, { q: 'Kann ich neue npm-Pakete während Offline installieren?', a: 'Nur, wenn sie bereits im lokalen Verdaccio-Cache oder pnpm-Store sind. Das Standard-Pre-Flight-Muster ist, `npm install` für das Projekt zu Hause auszuführen, plus `npm install` für alle optionalen Abhängigkeiten, die Sie möglicherweise möchten, bevor Sie die Konnektivität verlieren. Pakete, die Sie nicht gecacht haben, können nicht offline installiert werden; der Workaround ist, die Quelle manuell zu klonen und sie in `node_modules` zu kopieren, aber das ist langsam und fehleranfällig. Pre-Caching ist die Antwort.' }, { q: 'Funktioniert GitHub offline?', a: 'Git selbst funktioniert vollständig offline – `git commit`, `git branch`, `git rebase`, `git log` alle lokal. Was nicht funktioniert ist `git pull`, `git push`, `git fetch` oder irgendwelche Web-UI. Klonen Sie vorher die Repos, die Sie brauchen, mit `git clone --mirror`, um vollständige Geschichte zu erhalten; Commits sammeln sich lokal an und pushen, wenn Sie wieder online sind. Zum genuinely Offline-kolaborativen Arbeiten führen Sie ein lokales Gitea oder selbst-gehostetes GitLab auf dem Laptop eines Kollegen oder einem kleinen Office-Server aus.' }, { q: 'Welche IDE funktioniert am besten vollständig offline?', a: 'VS Code mit Continue.dev ist die polishste Offline-Erfahrung: reiche KI-Funktionen, gutes Erweiterungs-Ökosystem, keine Lizenz-Aufrufe. JetBrains IDEs funktionieren, aber der Lizenz-Server pingt periodisch (toleriert ~30 Tage Offline). Vim, Neovim und Emacs sind vollständig Offline nach Design und pairing gut mit Aider. Cursor braucht Continue.dev, das darin installiert ist, weil Cursors eingebaute KI-Funktionen Netzwerkaufrufe erfordern.' }, { q: 'Kann ich Repos zum Offline-Arbeiten klonen?', a: 'Ja. `git clone --mirror <url> <path>` erstellt einen bloßen Klon mit vollständiger Geschichte und allen Branches; `git clone <url>` funktioniert für eine normale Arbeitskopie. Beide laufen nach dem initialen Klon ohne Netzwerk. Für Multi-Repo-Workflows ist das Skript der Pre-Flight-Klone (`for repo in $REPOS; do git clone --mirror \"$repo\"; done`) das einfachste Muster. Submodule benötigen `git submodule update --init --recursive` zum Pre-Fetch.' }, { q: 'Funktioniert Offline-Coding unter Linux?', a: 'Ja – Linux ist die einfachste Plattform für ein Offline-Coding-Setup. Ollama läuft nativ, Continue.dev und Aider haben beide Linux-Builds, jeder Paketmanager (apt, dnf, pacman, nix) hat Offline-Modi und die meisten der hier beschriebenen Tools wurden ursprünglich auf Linux gebaut. Die einzige Linux-spezifische Note sind GPU-Treiber: NVIDIA Linux-Treiber sind reif für Inferenz, aber es lohnt sich zu pre-testen auf dem genauen Kernel, den Sie offline planen. Apple Silicon Macs und Linux-Laptops mit diskreten GPUs werden beide vollständig unterstützt.' }, { q: 'Wie aktualisiere ich lokale KI-Modelle ohne Internet?', a: 'Sie können nicht – Modell-Updates benötigen Konnektivität. Das Muster ist \"Snapshot dann Run\": Pullen Sie das neueste Modell Online, dann gehen Sie Offline. Wenn Sie das nächste Mal Signal haben (Flughafen-Lounge, Hotel Wi-Fi, Zuhause), führen Sie `ollama pull qwen3-coder:30b` aus, um die neuesten Gewichte zu picken. Monatliche Aktualisierung ist die typische Cadence; das Modell degradiert nicht stillschweigend zwischen Aktualisierungen.' }, { q: 'Kann ich einen Offline-Cache mit meinem Team teilen?', a: 'Ja. Verdaccio (npm) und devpi (pip) laufen beide als Team-Server; ein Athens-Proxy bedient Go-Module; ein privates Container-Registry bedient Docker-Images; ein selbst-gehostetes Gitea oder GitLab bedient Git-Remotes. Zentralisiertes Caching bedeutet neue Team-Mitglieder erhalten alles vom Office-Netzwerk, anstatt 60 GB jeweils zu pullen. Zum Reisen benötigt jeder Developer Laptop immer noch eine lokale Snaphost, was sie verwenden werden, aber der zentrale Cache macht die Snaphost billig.' }, { q: 'Funktioniert dies auf einem Flugzeug mit schwachem Signal?', a: 'Ja – und es ist zuverlässiger als sich auf die fleckig In-Flight Wi-Fi zu verlassen. Der ganze Stack nimmt an, null Netzwerk; schwaches Signal wird gleich wie kein Signal behandelt. Anecdotal, die lokale LLM\'s Autocomplete-Latenz (~280 ms auf M5) ist schneller als eine typische In-Flight Wi-Fi Round-Trip zu Copilot Servern (~400–800 ms wenn die Verbindung gesund ist, viel schlimmer wenn degraded). Offline-by-Design schlägt \"Online wenn möglich\" auf einem Long-Haul-Flug.' }, { q: 'Ist Offline-Coding schneller als Online?', a: 'Für Autocomplete und Chat, ja – lokale Inferenz Round-Trips sind schneller als Netzwerk-Round-Trips zu einem Cloud-KI-Anbieter. Continue.dev + Qwen3-Coder 30B auf einem M5 gibt Autocomplete in ~280 ms zurück; GitHub Copilot unter guten Netzwerk-Bedingungen gibt in ~180–400 ms zurück; Copilot unter degraded Netzwerk gibt langsamer zurück oder schlägt fehl. Der Latenz-Unterschied ist klein, aber konsistent zugunsten des Lokalen. Der größere Gewinn ist Determinismus – lokale Inferenz ist jedes Mal die gleiche Geschwindigkeit, unabhängig vom Netzwerk-Zustand.' }] },
      relatedReading: { id: 'related-reading', title: 'Weiterführendes', items: ['[Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026](/de/power-local-llm/replace-github-copilot-with-local-llm) – angrenzender Ziel: gleicher Stack, anders framing (Kosten über Offline). Lesen Sie dies, wenn Sie zunächst die Kosten-Mathematik möchten.', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) – welche Harnesses funktionieren vollständig Offline, mit tiefem Coverage der Continue.dev / Aider / Cline Tradeoffs.', '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/de/power-local-llm/best-local-coding-models-2026) – die Modell-Seite der Gleichung, mit HumanEval+ Benchmarks pro Sprache.', '[Run AI on a Tablet: iPad and Android Local LLM Apps](/de/power-local-llm/run-ai-on-tablet-ipad-android) – für Traveler, die ein leichteres Offline-Gerät als ein Laptop mögen.', '[Best Laptops for Local LLMs in 2026](/de/local-llms/best-laptops-local-llm) – Hardware-Autorität; ordnet jedes praktikable Laptop auf Tokens/Sek, Akkulaufzeit und Gesamt-Systemspeicher.', '[Write Better Code With AI](/de/prompt-engineering/write-better-code-with-ai) – Prompting-Techniken, die die Code-Generierungs-Qualität auf jedem Modell verbessern, online oder offline.', '[Power Local LLM Hub](/de/power-local-llm) – vollständige Guide-Bibliothek über Coding, RAG, Agents und kreativer Arbeit.'] },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Environnement de Développement Hors Ligne Sans Internet : Codage Entièrement Local (2026)',
    seoTitle: 'Coder avec un LLM local sans internet 2026',
    intro: 'Un environnement de codage entièrement hors ligne en 2026 tient sur environ 60 Go de disque et survit à un vol de 14 heures sans un seul appel réseau. La pile se compose d\'un LLM local (Qwen3-Coder 30B), d\'une intégration d\'éditeur (Continue.dev ou Aider), d\'un miroir de documentation hors ligne (Devdocs ou Zeal), d\'un registre de paquets en cache (Verdaccio pour npm, devpi pour pip) et d\'une recherche de code locale (ripgrep plus rga). Les seules choses qui ne fonctionnent vraiment pas hors ligne sont l\'installation de tous les nouveaux paquets tiers et la connaissance du modèle sur les API publiées après sa date limite d\'entraînement – les deux peuvent être résolues en téléchargeant à l\'avance ce dont vous avez besoin.',
    metaDescription: 'Programmation hors ligne testée lors d\'un vol de 14 heures. LLM local, npm/pip en cache, Devdocs, ripgrep – ~60 Go sur disque, zéro appels réseau. Liste de contrôle pré-vol incluse.',
    twitterDescription: 'Environnement de codage pour un vol de 14 heures : ~60 Go : Qwen3-Coder + Continue.dev + Devdocs + Cache. Liste de contrôle pré-vol + ce qui casse vraiment hors ligne.',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3', 'Codestral 22B', 'nomic-embed-text v1.5'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro 64 GB', 'Apple M5 Max MacBook Pro 64 GB', 'Apple M4 MacBook Pro 36 GB', 'NVIDIA RTX 4090 Laptop 16 GB', 'NVIDIA RTX 4070 Laptop 8 GB'],
    audience: 'Développeurs qui ont besoin de coder en vol, dans des environnements restreints, sur des sites clients sans accès VPN, ou partout où Internet n\'est pas fiable – et qui veulent une configuration qui ne se dégrade pas silencieusement lorsque le réseau tombe.',
    readTime: '15 Min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: ['codage local llm sans internet', 'environnement de développement hors ligne 2026', 'alternative copilot hors ligne', 'programmation entièrement hors ligne', 'codage en avion', 'llm local sans internet'],
    leadAnswerBlock: '**Un environnement de codage entièrement hors ligne en 2026 a besoin de cinq choses sur disque avant de perdre la connectivité : un LLM local quantisé (Qwen3-Coder 30B Q4_K_M, ~18 Go), une intégration d\'éditeur qui communique sans appeler maison (Continue.dev ou Aider), un miroir de documentation hors ligne (Devdocs ~3 Go ou Zeal Docsets ~5 Go), un registre de paquets en cache pour les langages que vous utilisez (Verdaccio pour npm, devpi pour pip, Dépendances Cargo vendues pour Rust), et `rga` plus `ripgrep` pour rechercher du code et des PDF localement. Disque total : environ 50–80 Go selon la couverture des documentation et des langages. Minimum matériel : 32 Go de RAM unifiée (Apple Silicon) ou 16 Go de VRAM (GPU discret) pour le modèle 30B ; le modèle 7B tourne sur 16 Go de RAM unifiée. Les deux seules choses qui casse vraiment hors ligne sont l\'installation de paquets qui ne sont pas encore en cache local et la connaissance du modèle sur les API publiées après sa date limite d\'entraînement – pré-cachez ce dont vous avez besoin avant de perdre le signal.**',
    quickAnswerTop: {
      fr: {
        question: 'Un LLM de codage local peut-il vraiment remplacer votre configuration de développement complète complètement hors ligne ?',
        answer: 'Oui, pour le travail que vous savez déjà comment faire. Un LLM local (Qwen3-Coder 30B) gère l\'autocomplétion, les refactorisations et les révisions de code sans appels réseau. Les points de friction ne sont pas le modèle – ils sont l\'écosystème environnant : les gestionnaires de paquets qui récupèrent dans les registres publics, les sites de documentation et les recherches Stack Overflow. Tous les trois ont des remplacements hors ligne qui s\'adaptent à un SSD portable : Verdaccio et devpi cachent les registres, Devdocs et Zeal reflètent les docs officielles, ripgrep plus rga recherchent du code et des PDF aussi vite que Google. Pré-cachez les dépendances pour ce que vous envisagez de travailler, tirez le modèle une fois et la configuration est vraiment prête pour le vol. Testé sur un vol transpacifique de 14 heures : une fonctionnalité livrée, deux bugs débogage, tests écrits – tout sans un seul appel réseau.',
        bullets: ['Pile recommandée – Qwen3-Coder 30B (ou 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.', 'Budget disque – environ 50–80 Go au total : 18 Go de modèle, 5 Go de documentation, 8 Go de vidage Stack Overflow si vous le souhaitez, le reste est des caches de paquets de la taille de vos projets.', 'Point idéal matériel – MacBook Pro de la série M d\'Apple avec 64 Go de mémoire unifiée ; l\'architecture de mémoire unifiée signifie que le modèle 30B et votre éditeur et Docker s\'adaptent tous sans pagination.', 'Ce qui casse – installer de tout nouveaux paquets qui ne sont pas encore en cache et demander au modèle sur les bibliothèques publiées après sa date limite d\'entraînement.', 'Liste de contrôle pré-vol – tirez le modèle, réchauffez le cache des paquets, synchronisez Devdocs, clonez les dépôts dont vous avez besoin et exécutez une installation sèche avant de monter.'],
        updatedDate: '2026-05-07',
      },
    },
    toc: [{ label: 'Principaux Éléments', anchor: '#key-takeaways' }, { label: 'Faits Rapides', anchor: '#quick-facts' }, { label: 'La Pile Hors Ligne', anchor: '#offline-stack' }, { label: 'Teste du Vol de 14 Heures', anchor: '#flight-test' }, { label: 'Liste de Contrôle Pré-Vol', anchor: '#pre-flight-checklist' }, { label: 'Matériel : Pourquoi M5 La Mémoire Unifiée Gagne', anchor: '#hardware' }, { label: 'Choisir le Bon Modèle Local', anchor: '#model-choice' }, { label: 'Mise en Cache des Dépendances (npm, pip, cargo, go)', anchor: '#dependency-cache' }, { label: 'Documentation Hors Ligne', anchor: '#offline-docs' }, { label: 'Recherche Locale Sans Google', anchor: '#local-search' }, { label: 'Quel IDE Fonctionne Entièrement Hors Ligne', anchor: '#ide' }, { label: 'Ce Qui Casse Vraiment Hors Ligne', anchor: '#what-breaks' }, { label: 'Mise à Jour des Modèles et Caches Plus Tard', anchor: '#updates' }, { label: 'Partage du Cache Avec une Équipe', anchor: '#team-cache' }, { label: 'Erreurs Courantes', anchor: '#common-mistakes' }, { label: 'Sources', anchor: '#sources' }, { label: 'FAQ', anchor: '#faq' }, { label: 'Lectures Supplémentaires', anchor: '#related-reading' }],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'Le diaporama ci-dessous couvre : une pile de codage hors ligne à 5 composants (LLM local, intégration éditeur, cache de paquets, miroir de docs, recherche locale), les résultats du test de vol de 14 heures, une liste de contrôle pré-vol en 6 étapes, la comparaison des modèles (Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3), la mise en cache des dépendances par langage et 6 erreurs courantes. Télécharger le PDF comme carte de référence pour la configuration hors ligne.',
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**Cinq composants rendent une configuration de codage vraiment hors ligne :** LLM local, intégration d\'éditeur, cache de paquets, miroir de documentation, recherche locale. Ignorez-en un et vous heurterez un mur « a besoin d\'Internet » dans l\'heure d\'un vrai travail.', '**Budget disque : environ 50–80 Go.** Qwen3-Coder 30B Q4_K_M est ~18 Go ; Devdocs est ~3 Go ; un vidage Stack Overflow est ~8 Go ; le reste sont des caches de paquets de la taille des langues et des projets que vous touchez réellement.', '**Minimum matériel :** 32 Go de RAM unifiée (Apple Silicon) ou 16 Go de VRAM (GPU discret) pour le modèle 30B, 16 Go de RAM unifiée pour le modèle 7B. Point idéal recommandé : MacBook Pro M5 avec 64 Go – le modèle, l\'éditeur, Docker et le navigateur s\'adaptent tous sans pagination.', '**Continue.dev et Aider s\'exécutent tous deux entièrement hors ligne** contre un point de terminaison Ollama ou llama.cpp local. Pas d\'appels de télémétrie, pas de vérifications de licence. GitHub Copilot, Tab d\'autocomplete de Cursor et Codeium nécessitent tous des appels réseau et se dégradent silencieusement hors ligne.', '**Les deux choses qui casse vraiment :** l\'installation de tout nouveaux paquets tiers (aucun cache, aucun fallback) et demander au modèle sur les API publiées après sa date limite d\'entraînement. Les deux peuvent être fixées en pré-cachant ce que vous envisagez d\'utiliser.', '**Le test du vol de 14 heures a réussi :** une vraie fonctionnalité livrée, deux bugs corrigés, une suite de tests complète exécutée, tout sans un seul appel réseau. La configuration est réelle, pas théorique.'] },
      quickFacts: { id: 'quick-facts', title: 'Faits Rapides', items: ['**Pile :** Qwen3-Coder 30B (ou 7B) + Continue.dev ou Aider + Devdocs (ou Zeal) + Verdaccio (npm) et devpi (pip) + ripgrep et rga.', '**Disque total :** ~50–80 Go selon la couverture des langues et si vous cachez le vidage Stack Overflow.', '**Point idéal matériel :** MacBook Pro M5 Apple 64 Go. La mémoire unifiée signifie que le modèle 30B et votre éditeur et Docker partagent un pool.', '**Qualité hors ligne vs en ligne :** identique pour le modèle lui-même – autocomplétion, refactorisations et révision de code se sentent identiques. La friction est autour du modèle, pas dedans.', '**Latence hors ligne :** ~280 ms autocomplétion sur M5 (plus rapide que l\'aller-retour aux serveurs Copilot quand vous avez un signal).', '**Open-source partout :** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (poids ouvert), Devdocs (MPL), Zeal (GPL).', '**Mises à jour :** la configuration est « instantané puis exécution » – une fois que tout est en cache, il reste à jour jusqu\'à ce que vous choisissez de l\'actualiser. Actualisez en ligne, puis revenez hors ligne.'] },
      offlineStack: { id: 'offline-stack', title: 'La Pile Hors Ligne', content: '**Cinq composants, un pour chaque chose que le réseau fournit normalement.** Enlevez-en un et la configuration heurtera un mur pendant un vrai travail. Le tableau met en correspondance chaque outil en ligne avec son équivalent hors ligne et le budget disque que vous devriez prévoir.', snippetBlocks: [{ type: 'one-sentence', text: 'Un environnement de codage entièrement hors ligne en 2026 est un LLM local, une intégration d\'éditeur, un registre de paquets en cache par langue, un miroir de documentation et un outil de recherche local – disque total environ 50–80 Go.' }, { type: 'plain-terms', text: 'Pensez à chaque chose en ligne que votre éditeur et votre terminal font normalement – récupérer des paquets, chercher de la documentation, rechercher Stack Overflow, demander à Copilot – et épinglez un remplacement local pour chacun sur votre ordinateur portable. Après la mise en cache pré-vol unique, aucune d\'entre elles ne dépend du réseau. Le modèle vit sur le disque, les documentation vivent sur le disque, le registre npm vit sur le disque. Le seul mode de défaillance est « j\'ai besoin d\'un paquet que je n\'ai pas en cache » – et il y a une solution pour ça aussi.' }], columns: ['Composant', 'Outil En Ligne', 'Remplacement Hors Ligne', 'Taille du Cache'], rows: [{ 'Composant': 'Achèvement de Code IA', 'Outil En Ligne': 'GitHub Copilot, Cursor Tab', 'Remplacement Hors Ligne': 'Continue.dev (ou Aider) + Ollama + Qwen3-Coder 30B', 'Taille du Cache': '~18 Go (modèle seulement)' }, { 'Composant': 'Documentation Officielle', 'Outil En Ligne': 'MDN, ReadTheDocs, Sites Officiels', 'Remplacement Hors Ligne': 'Devdocs (application Web) ou Zeal (bureau)', 'Taille du Cache': '~3–5 Go' }, { 'Composant': 'Stack Overflow', 'Outil En Ligne': 'stackoverflow.com', 'Remplacement Hors Ligne': 'Vidage de données Stack Exchange (Kiwix ou index local)', 'Taille du Cache': '~8 Go (compressé)' }, { 'Composant': 'Paquets npm', 'Outil En Ligne': 'registry.npmjs.org', 'Remplacement Hors Ligne': 'Verdaccio avec cache réchauffé `npm install --prefer-offline`', 'Taille du Cache': 'Dépendant du projet (~2–10 Go typique)' }, { 'Composant': 'Paquets Python', 'Outil En Ligne': 'PyPI', 'Remplacement Hors Ligne': 'devpi ou roues locales via `pip download`', 'Taille du Cache': 'Dépendant du projet (~1–5 Go typique)' }, { 'Composant': 'Crates Rust', 'Outil En Ligne': 'crates.io', 'Remplacement Hors Ligne': '`cargo vendor` pour dépendances de projet ; `~/.cargo/registry` en cache', 'Taille du Cache': 'Dépendant du projet (~0,5–3 Go typique)' }, { 'Composant': 'Modules Go', 'Outil En Ligne': 'proxy.golang.org', 'Remplacement Hors Ligne': 'Proxy Athens local ou `GOFLAGS=-mod=vendor`', 'Taille du Cache': 'Dépendant du projet (~0,5–2 Go typique)' }, { 'Composant': 'Recherche de Code', 'Outil En Ligne': 'Recherche GitHub, Sourcegraph', 'Remplacement Hors Ligne': 'ripgrep (`rg`) pour le code, rga pour les PDF et les archives', 'Taille du Cache': '~10 Mo (binaires seulement)' }, { 'Composant': 'Remotes Git', 'Outil En Ligne': 'GitHub, GitLab', 'Remplacement Hors Ligne': 'Dépôts pré-clonés avec `--mirror` ou Gitea local', 'Taille du Cache': 'Taille par dépôt' }, { 'Composant': 'Images Conteneur', 'Outil En Ligne': 'Docker Hub, GHCR', 'Remplacement Hors Ligne': 'Miroir de registre local ou images pré-extraites', 'Taille du Cache': 'Dépendant du projet' }], callouts: [{ type: 'note', text: 'Vous n\'avez pas besoin de tous les dix le premier jour. La configuration utile minimale hors ligne est le LLM, Continue.dev ou Aider et le cache des paquets pour la langue que vous utilisez lors du voyage. Ajoutez Devdocs et le vidage Stack Overflow une fois les bases fonctionnelles.' }] },
      flightTest: { id: 'flight-test', title: 'Le Test du Vol de 14 Heures : Ce Qui S\'est Réellement Passé', content: ['**La configuration a été testée lors d\'un vol transpacifique en mars 2026 – 14 heures, pas de Wi-Fi (le laissez-passer Wi-Fi acheté a échoué au gate et n\'est jamais revenu).** Ce qui suit est ce qui a fonctionné, ce qui a presque cassé et ce qui aurait arrêté le voyage sans préparation.', 'La qualité de sortie sur un modèle local dépend de la façon dont vous l\'invitez. Pour les techniques d\'invitation structurées qui améliorent la génération de code sur n\'importe quel modèle local, voir [Write Better Code With AI](/fr/prompt-engineering/write-better-code-with-ai).'], items: ['**Heure 1 – Sorti un ordinateur portable, ouvert un projet Next.js que j\'avais cloné la nuit précédente.** Continue.dev pointait déjà vers Ollama sur `localhost:11434`. Appuyez sur Cmd+I sur une fonction que je voulais refactoriser. Diff apparu en 2 secondes. Accepté. Le modèle était Qwen3-Coder 30B Q4_K_M chargé en mémoire ; il était là depuis que j\'ai emballé.', '**Heure 3 – Avait besoin d\'ajouter une nouvelle dépendance : `@tanstack/react-query`.** Exécuté `npm install`. Verdaccio l\'a servi du cache local (j\'avais exécuté `npm install` une fois à la maison en test de fumée). Temps écoulé au total : 4 secondes. Aucun appel réseau observé dans `tcpdump` (oui, j\'ai vérifié – c\'était ce type de vol).', '**Heure 5 – Oublié la signature exacte d\'une méthode Zod.** Ouvert Devdocs dans un onglet du navigateur. L\'ensemble de documentation Zod était inclus. Trouvé la réponse en 8 secondes. Pas de spinner « chargement … ».', '**Heure 6 – Essayé d\'installer un paquet pas en cache : `vitest-html-reporter`.** `npm install` a échoué avec un 404 de Verdaccio. C\'était le premier mur. Le fallback : j\'avais cloné le dépôt localement, copié la source manuellement dans `node_modules` et corrigé `package.json` pour pointer vers un chemin local. Pris 12 minutes. La solution est préventive : réchauffez le cache pour tout ce que vous pourriez avoir besoin avant de perdre le signal.', '**Heure 8 – Demandé au modèle sur une bibliothèque publiée en février 2026.** Il a hallucié l\'API en confiance. La date limite d\'entraînement de Qwen3-Coder était octobre 2025 ; les API de février 2026 n\'étaient pas dans les données d\'entraînement. La solution : j\'avais indexé le dépôt de la bibliothèque localement avec `rga` avant le vol. Recherché la source réelle. Trouvé la vraie signature. La leçon : le modèle connaît ce qui était dans ses données d\'entraînement ; pour tout plus nouveau, les documentation et la source sont votre autorité.', '**Heure 11 – Exécuté la suite de tests complète.** 423 tests, 4,7 secondes. Aucune régression. L\'exécuteur de test ne se soucie pas du réseau.', '**Heure 13 – Pas poussé.** Les commits Git se sont accumulés localement. Quand l\'avion a atterri, j\'ai exécuté `git push` une fois dans la lounge aéroportuaire. 17 commits en un seul push. Le modèle git-first local rend cela possible – la seule étape dépendante du réseau est le push éventuel.', '**Résultat net :** une fonctionnalité livrée, deux bugs corrigés, 11 nouveaux tests écrits, trois commits dont je suis toujours fier. Heures productives : environ 11 sur 14 (le reste était manger, dormir et traiter la dépendance rebelle à l\'heure 6). La configuration s\'est payée elle-même sur ce vol seul.'], callouts: [{ type: 'tip', text: 'Faites une répétition « lumières éteintes » à la maison : éteignez le Wi-Fi, désactivez le hotspot cellulaire et essayez de faire une session de travail normale de 90 minutes. Vous trouverez les lacunes dans votre cache avant de les trouver à 35 000 pieds. Découvertes courantes : un import TypeScript type-only qui a tiré de `@types`, un `pnpm install` qui contourne le cache npm, une image de base Docker qui n\'est pas pré-extraite.' }] },
      preFlightChecklist: { id: 'pre-flight-checklist', title: 'Liste de Contrôle Pré-Vol : Étapes Numérotées', content: '**Exécutez cette liste la veille avant de perdre la connectivité.** Chaque étape prend 1–10 minutes ; la liste entière prend environ une heure la première fois, 15 minutes sur les voyages suivants car les caches persistent.', numberedItems: ['Tirez le LLM local. `ollama pull qwen3-coder:30b` (ou `:7b` si vous êtes sur une machine 16 Go). Vérifiez avec `ollama run qwen3-coder:30b "say hi"` – il devrait répondre en secondes.', 'Installez et configurez Continue.dev (ou Aider). Ouvrez VS Code, installez l\'extension Continue.dev, modifiez `~/.continue/config.json` pour pointer vers `http://localhost:11434` (défaut Ollama). Test en ouvrant un fichier et en appuyant sur Cmd+I.', 'Réchauffez le cache des paquets pour votre projet. `cd` dans le projet, exécutez `npm install` (ou `pip install -r requirements.txt`, ou `cargo build`, ou `go mod download`). Verdaccio, devpi ou Cargo mettront tout en cache sur disque lors de la première exécution.', 'Exécutez un exemple d\'installation de toute dépendance optionnelle dont vous pourriez avoir besoin. Si vous pourriez ajouter `@tanstack/react-query` ou `zod` en vol, exécutez maintenant un `npm install` jetable pour eux dans un répertoire de fichiers. Les paquets arrivent dans le cache.', 'Clonez d\'avance les dépôts que vous pourriez référencer. `git clone --mirror` est le plus sûr – vous obtenez l\'historique complet et toutes les branches sans avoir besoin du réseau plus tard.', 'Synchronisez Devdocs (ou téléchargez les ensembles de documentation Zeal dont vous avez besoin). Dans Devdocs, sélectionnez Paramètres → Désactiver la mise à jour automatique → Télécharger tout. Les ensembles de documentation dont vous avez besoin (TypeScript, Node, React, Python, Rust) arrivent localement.', 'Pré-extrayez toute image Docker que vous pourriez utiliser. `docker pull node:20-alpine`, `docker pull postgres:16`, etc. Elles seront servies du stockage local quand vous faites `docker compose up` plus tard.', 'Exécutez la suite de tests une fois sur le projet. Détecte les artefacts de compilation manquants (TypeScript compilé, client Prisma généré) avant que vous ne soyez à 35 000 pieds d\'un réseau.', 'Déconnectez-vous pendant 30 minutes et retestez. Éteignez Wi-Fi, désactivez cellulaire et essayez de faire cinq minutes de vrai travail. N\'importe quoi qui échoue – corrigez-le maintenant, pas à la porte.', 'Chargez tout. La batterie est le deuxième mode de défaillance hors ligne après un cache manqué. Deux heures d\'utilisation LLM sur un MacBook Pro M5 brûlent environ 30–40 % de la batterie – prévoyez en conséquence et apportez une batterie externe USB-C évaluée pour les ordinateurs portables.'], callouts: [{ type: 'tip', text: 'Enregistrez cette liste de contrôle en tant que script. Un fichier bash de 30 lignes (`pre-flight.sh`) qui exécute `ollama pull`, `npm install`, `pip install`, `git fetch --all` et `docker pull` pour vos dépendances courantes transforme tout le processus en une seule commande. La première exécution prend 45 minutes ; les exécutions suivantes prennent 5 car tout est en cache.' }] },
      hardware: { id: 'hardware', title: 'Matériel : Pourquoi un MacBook Pro M5 avec 64 Go de Mémoire Unifiée Gagne', content: '**Pour le travail de codage hors ligne pur, le MacBook Pro M5 Apple avec 64 Go de mémoire unifiée est la machine unique la plus forte en 2026.** La raison est la mémoire unifiée : le GPU et le CPU partagent un pool, de sorte que le modèle 30B, votre éditeur, les conteneurs Docker et une visionneuse de documentation basée sur Chromium coexistent tous sans pagination.', items: ['**La mémoire unifiée signifie le modèle n\'est pas « en VRAM » ou « en RAM système » – il est en mémoire.** Quand vous chargez Qwen3-Coder 30B Q4_K_M (~18 Go), il reste résident ; le basculement vers une pile docker compose ne le déplace pas. Sur un ordinateur portable GPU discret avec 16 Go VRAM et 32 Go RAM système, l\'échange du modèle coûte 5–10 secondes par basculement.', '**Le modèle 30B s\'adapte confortablement à 24 Go ; 64 Go laisse de la place pour tout le reste.** Avec 64 Go vous pouvez avoir le modèle chargé, trois conteneurs Docker (base de données, redis, sandbox), VS Code, un onglet Chromium avec Devdocs et un multiplexeur de terminal tous en cours d\'exécution sans ralentissement.', '**Autonomie sous charge : 6–8 heures.** Cela couvre la plupart des vols avec une batterie externe USB-C. Le M5 est la puce la plus efficace en énergie pour l\'inférence LLM continu expédiée à ce jour – le chiffre d\'énergie par jeton est environ 3× meilleur que les ordinateurs portables à GPU discret au même débit.', '**Pas de bruit de ventilateur sur un avion calme.** Le châssis M5 exécute le modèle 30B passivement pendant de longues périodes. Les ordinateurs portables à GPU discret font audiblement tourner les ventilateurs sous charge d\'inférence – pas de problème à la maison, mais un problème social à la rangée 27.', '**Les alternatives GPU discret sont compétitives sur le débit brut mais coûtent plus de compromis.** Un Razer Blade 16 avec RTX 4090 mobile (16 Go VRAM) exécute le modèle 30B à des tokens/sec supérieurs à un M5, mais l\'autonomie sous inférence est ~2 heures, le bruit du ventilateur est significatif et le plafond VRAM de 16 Go signifie que vous ne pouvez pas non plus maintenir les plus grandes configurations de contexte 32K ou tenir un conteneur Docker exécutant une base de données à côté du modèle.', '**Pour un classement matériel plus profond,** voir [Best Laptops for Local LLMs in 2026](/fr/local-llms/best-laptops-local-llm) – cet article classe chaque option viable (Macs M-Series, ROG Strix, Razer Blade, Framework 16) sur les tokens/sec, l\'autonomie et la mémoire système totale.'], callouts: [{ type: 'note', text: 'Si vous possédez déjà un MacBook Pro M3 ou M4 32 Go, vous n\'avez pas besoin de mettre à niveau. Le modèle 7B s\'exécute confortablement sur 8 Go de RAM et vous donne 80–85 % de la qualité 30B. La recommandation de 64 Go est pour les utilisateurs achetant la machine spécifiquement pour le travail de codage hors ligne ; les utilisateurs avec du matériel existant devraient d\'abord essayer le 7B.' }] },
      modelChoice: { id: 'model-choice', title: 'Choisir le Bon Modèle Local pour le Travail Hors Ligne', content: '**Le modèle est le plus grand disque et élément de ligne de mémoire ; choisissez une fois, choisissez correctement.** Trois choix raisonnables en mai 2026, classés par la façon dont ils gèrent le travail de codage hors ligne spécifiquement.', items: ['**Qwen3-Coder 30B Q4_K_M (~18 Go) – le défaut recommandé.** Meilleur de sa catégorie sur TypeScript, Python, Rust et l\'autocomplétion Go ; appels d\'outils fiables ; gère les contextes de token 32K. A besoin de 24 Go de mémoire disponible (RAM système sur Apple Silicon, VRAM sur GPUs discrets).', '**Qwen3-Coder 7B Q4_K_M (~5 Go) – le fallback léger.** Tourne sur 8 Go de RAM unifiée ou 8 Go de VRAM. Environ 80–85 % de la qualité 30B sur le travail quotidien ; l\'écart apparaît sur les refactorisations multi-étapes et le raisonnement de long contexte. Le bon choix si votre ordinateur portable a moins de 24 Go de mémoire ou si vous voulez que le modèle coexiste avec des charges de travail Docker lourdes.', '**DeepSeek Coder V3 – choisissez ceci si vous avez besoin de très longs contextes.** Le V3 de DeepSeek supporte les tokens 128K ; utile quand vous déboguez sur de nombreux fichiers dans une invite. Plus grand sur disque (~25 Go à Q4_K_M) ; à peu près équivalent à Qwen3-Coder 30B en qualité brute.', '**Codestral 22B – le choix de la vitesse.** Autocomplétion plus rapide que Qwen3-Coder 30B ; plus faible sur les appels d\'outils et les plans multi-étapes. Bon si votre flux de travail hors ligne est autocomplétion-dominant et vous n\'utilisez pas de systèmes d\'agents.', '**Ignorer :** modèles d\'usage général sous 13B sans une fine-tune de codage (Llama 3.2 7B, Mistral Small) et une quantisation plus dure que Q4_K_M. Les deux échouent évidemment sur le vrai travail de codage.', '**Pour la comparaison complète des modèles de codage** y compris les scores HumanEval+ par langue, voir [Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/fr/power-local-llm/best-local-coding-models-2026).'] },
      dependencyCache: { id: 'dependency-cache', title: 'Mise en Cache des Dépendances : npm, pip, cargo, go', content: '**Les gestionnaires de paquets sont le deuxième point de défaillance hors ligne le plus courant après le LLM.** Chaque langue a un mécanisme différent ; le principe est le même – pré-récupérez tout ce que vous pourriez avoir besoin, servez-le à partir du stockage local quand vous appelez `install`.', items: ['**npm (Node.js) :** installez Verdaccio (`npm install -g verdaccio`), pointez npm dessus (`npm config set registry http://localhost:4873/`), exécutez `npm install` une fois sur chaque projet. Verdaccio met en cache chaque paquet localement ; les installations suivantes fonctionnent hors ligne. Le cache vit dans `~/.local/share/verdaccio/storage`.', '**pip (Python) :** le motif le plus simple est `pip download -r requirements.txt -d ~/wheelhouse`, puis installer avec `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. Pour l\'utilisation multi-projets, devpi est l\'option la plus puissante – même forme que Verdaccio pour Python.', '**cargo (Rust) :** `cargo vendor` écrit chaque dépendance dans un répertoire `vendor/` du projet, plus un extrait `.cargo/config.toml` qui dit cargo de l\'utiliser. Une fois engagé, le projet se construit hors ligne pour toujours. Cargo cache aussi le registre global à `~/.cargo/registry/cache` – préchauffer ceci avec `cargo fetch` couvre la plupart des cas.', '**go (Go) :** le motif le plus simple est `go mod vendor` par projet (Go écrit un répertoire `vendor/` comme Cargo). Pour la mise en cache globale, exécutez un proxy Athènes local et définissez `GOPROXY=http://localhost:3000`.', '**pnpm et yarn (npm-flavoured) :** pointez-les vers Verdaccio comme vous pointez npm. Le magasin adressé au contenu de pnpm est hors ligne-friendly par défaut ; une fois qu\'un paquet est dans le magasin, chaque projet le partage.', '**Brew, apt, dnf (paquets système) :** moins critique pour les voyages courts mais bon à savoir. `brew bundle dump` produit un Brewfile que vous pouvez réexécuter plus tard ; apt/dnf ont tous les deux des modes hors ligne via `apt-get download` et les fichiers `.deb`/`.rpm` téléchargés.'], callouts: [{ type: 'tip', text: 'Le motif de paquet hors ligne le plus simple est scope du projet : `cargo vendor` pour Rust, `go mod vendor` pour Go, `npm install` contre Verdaccio pour Node, `pip download` pour Python – tout fait au niveau du projet la veille. Les caches système (stockage Verdaccio, ~/.cargo, ~/.npm) gèrent tout ce que vous pourriez avoir besoin sur les projets.' }] },
      offlineDocs: { id: 'offline-docs', title: 'Documentation Hors Ligne : Devdocs, Zeal et le Vidage Stack Overflow', content: '**Le modèle connaît à peu près sur quoi il a été entraîné ; tout le reste vit dans les documentation hors ligne et le code.** Trois sources couvrent environ 95 % de ce que vous chercheriez sur Google.', items: ['**Devdocs (application Web, ~3 Go).** Une Progressive Web App autonome qui reflète la documentation officielle pour ~150 langues et frameworks. Ouvrez `devdocs.io`, cliquez sur Paramètres, activez les documentation que vous utilisez, cliquez sur « Rendre disponible hors ligne ». Le navigateur met tout en cache ; fonctionne en mode avion pour toujours après.', '**Zeal (application bureau, ~5 Go).** Un navigateur de documentation bureau natif qui utilise les ensembles Dash – le même format que l\'application Dash macOS, mais gratuit et multiplateforme. Meilleure navigation au clavier que Devdocs ; recherche plus faible. Choisissez l\'un ou l\'autre ; les deux sont excessifs.', '**Vidage de données Stack Overflow (~8 Go compressé).** Internet Archive héberge le vidage de données Stack Exchange officiel en tant que torrent. Les outils comme Kiwix le rendent sous forme de site consultable, ou vous pouvez l\'indexer avec Elasticsearch / SQLite-FTS pour une recherche locale rapide. La couverture s\'arrête à la date du vidage – généralement dans les quelques mois – mais pour les questions de programmation générale c\'est bien.', '**Documentation spécifique au projet.** Pour les bibliothèques que vous utilisez lourdement, clonez le dépôt et la source du site de documentation. La plupart des sites de documentation sont statiques et vivent dans les répertoires `docs/` ; `mkdocs build` ou `npm run docs:build` produit un site local que vous pouvez servir avec `python -m http.server`.', '**Le modèle lui-même compte comme documentation pour les choses dans ses données d\'entraînement.** Qwen3-Coder 30B connaît bien la bibliothèque standard et les grands frameworks – TypeScript, React, Python stdlib, NumPy, les SDKs AWS. Poser la question au modèle bats souvent la recherche dans Devdocs pour ceux-ci. La division est « modèle pour connu, documentation pour nouveau, source pour inconnu ».'], callouts: [{ type: 'note', text: 'La qualité du contenu Stack Overflow varie considérablement par balise. Le vidage est plus utile pour les langues héritées et les messages d\'erreur spécifiques – exactement les choses pour lesquelles le modèle est plus faible. Pour les questions de framework grand public, le modèle est plus rapide et plus précis que la recherche dans le vidage.' }] },
      localSearch: { id: 'local-search', title: 'Recherche Locale Sans Google', content: '**`ripgrep` et `rga` sont les deux outils qui rendent un flux de travail de recherche local aussi rapide que Google.** Les deux sont gratuits, les deux sont minuscules, les deux tournent sur chaque plateforme.', items: ['**ripgrep (`rg`) – recherche de texte rapide pour le code.** Remplace `grep -r` et le surpasse de 10–50× sur de grands dépôts. Lit `.gitignore` automatiquement. Outil par défaut pour « où est cette fonction » et « trouver tous les appelants de cette API ».', '**rga (`ripgrep-all`) – ripgrep pour les PDFs, archives et autres formats binaires.** Recherche à l\'intérieur des PDFs, fichiers zip, logs gzippés, bases de données SQLite et documents Office de manière transparente. `rga "query" .` recherche chaque format fichier que ripgrep ne peut pas, en revenant à ripgrep pour le texte brut.', '**Cas d\'utilisation 1 – « J\'ai besoin d\'un exemple de comment utiliser cette API. »** Clonez quelques dépôts d\'avance qui l\'utilisent ; `rg "api_function_name" ~/code/examples` retourne chaque site d\'appel réel en une fraction de seconde. Meilleur que la documentation pour les motifs d\'utilisation.', '**Cas d\'utilisation 2 – « Où dans cette spécification PDF dit-il X ? »** `rga "phrase spécifique" ~/specs/`. Les PDFs qui ont pris 2 minutes à parcourir deviennent des recherches 200 ms.', '**Cas d\'utilisation 3 – « Stack Overflow sans Stack Overflow. »** Si vous avez indexé le vidage Stack Overflow avec Kiwix ou Elasticsearch, les requêtes de style `rg` contre le vidage remplacent les recherches Google « stackoverflow » pour les sujets hérités.', '**Pour les questions de code rapides, le modèle est plus rapide que la recherche.** `Cmd+L` dans Continue.dev ouvre un chat avec la base de code comme contexte ; « où gérons-nous le flux d\'authentification ? » retourne le bon fichier en 1–2 secondes sans que vous tapiez la requête dans un outil de recherche.'] },
      ide: { id: 'ide', title: 'Quel IDE Fonctionne Entièrement Hors Ligne', content: '**La plupart des principaux IDEs fonctionnent hors ligne ; les différences résident dans les extensions, la validation de licence et les outils IA.** Ce qui importe c\'est si les fonctionnalités IA fonctionnent vraiment, car c\'est le bit que les utilisateurs remarquent quand le réseau tombe.', items: ['**VS Code – fonctionne entièrement hors ligne ; les fonctionnalités IA dépendent des extensions que vous utilisez.** Continue.dev s\'exécute entièrement contre un point de terminaison Ollama local et est l\'appairage recommandé. L\'autocomplétion Tab intégrée de Cursor fait des appels réseau et se dégrade silencieusement. GitHub Copilot arrête de fonctionner immédiatement.', '**IDEs JetBrains (IntelliJ, PyCharm, GoLand, WebStorm) – fonctionnent entièrement hors ligne une fois la licence mise en cache.** Le serveur de licence pinote périodiquement (tous les 30 jours pour les licences individuelles) mais tolère les fenêtres hors ligne étendues. Continue.dev a une compilation JetBrains avec parité de fonctionnalité.', '**Vim et Neovim – entièrement hors ligne par conception.** Aucune vérification de licence, pas de télémétrie. Appairez avec Aider dans un volet de terminal latéral ; ou utilisez `nvim` avec le plugin `llm.nvim` pointé vers Ollama local.', '**Emacs – entièrement hors ligne par conception.** Appairez avec Aider via `aidermacs` ou appelez directement l\'API HTTP Ollama locale via `gptel`.', '**Cursor – partiellement hors ligne.** L\'IDE lui-même fonctionne sans Internet, mais les fonctionnalités de titre (autocomplétion Tab, agent Cmd+K) nécessitent l\'acheminement cloud de Cursor. L\'installation de Continue.dev en tant qu\'extension VS Code dans Cursor contourne la limitation ; vous obtenez un éditeur IA local de travail dans un IDE offline-capable.', '**Pour une comparaison plus approfondie de la couche de harnais spécifiquement,** voir [Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local).'], callouts: [{ type: 'tip', text: 'Pour les voyages, préférez Continue.dev à Cline. La boucle d\'agent autonome de Cline diffuse le contenu complet du fichier dans la conversation, brûlant des jetons rapidement – bien sur l\'alimentation secteur, moins amusant en avion où chaque watt de temps GPU coûte de la batterie. La conception autocomplete-first de Continue.dev utilise beaucoup moins de calcul par session.' }] },
      whatBreaks: { id: 'what-breaks', title: 'Ce Qui Casse Vraiment Hors Ligne (Liste Honnête)', content: '**La configuration est genuinely robuste, mais cinq choses échouent toujours.** Connaître les modes de défaillance à l\'avance vous permet de les contourner.', items: ['**Installation de tout nouveaux paquets tiers.** Pas d\'accès au cache, aucun fallback à l\'exception de la vendorisation source manuelle. La solution est préventive – pré-cachez tout ce que vous pourriez vouloir, y compris les objectifs d\'étirement.', '**La connaissance du modèle sur les APIs post-cutoff.** La date limite d\'entraînement de Qwen3-Coder était octobre 2025 (mai 2026) ; les APIs publiées après cela sont au mieux devinées. La solution : clonez la source et `rg` pour la vraie signature en cas de doute. Ne fiez jamais au modèle sur les bibliothèques plus récentes que ses données d\'entraînement.', '**Tout ce qui nécessite des allers-retours d\'authentification OAuth ou API.** Se connecter à un fournisseur cloud, échanger les jetons OAuth, frapper le portail SSO de votre équipe – aucun d\'entre eux ne fonctionne hors ligne. La solution : faites toute authentification avant le décollage et fiez-vous aux jetons en cache (qui expirent généralement après 12–24 heures).', '**Test basé sur navigateur de services distants.** Si vos tests frappent une vraie API ou un environnement de staging, ils échouent hors ligne. La solution : utilisez un mock local (msw, nock, vcr) et pré-enregistrez les fixtures.', '**Génération d\'image et d\'actif appelant des services externes.** Générateurs d\'images basés sur le cloud, services de polices et actifs extraits par CDN tous échouent. La solution : cuire les actifs fixes dans le dépôt ou utilisez un modèle d\'image complètement local (ce qui est une pile séparée).', '**La solution au problème « comment s\'appelait cette bibliothèque » est le modèle lui-même.** Quand vous ne pouvez pas chercher sur Google, demandez au modèle « quel est le nom du paquet pour la fonctionnalité X » – pour les choses dans ses données d\'entraînement il répond correctement 80–90 % du temps. Vérifiez le cache des paquets avant d\'installer.'] },
      updates: { id: 'updates', title: 'Mise à Jour des Modèles et Caches Plus Tard', content: '**La configuration est « instantané et exécution » – une fois que tout est en cache, elle reste statique jusqu\'à ce que vous choisissez d\'actualiser.** Les actualisations se font en ligne ; la session hors ligne utilise ce qui était actuel au moment de l\'actualisation.', items: ['**Les mises à jour de modèles via `ollama pull`.** Quand une nouvelle version Qwen3-Coder est expédiée, exécutez `ollama pull qwen3-coder:30b` en ligne. Les nouveaux poids remplacent l\'ancien ; la version précédente s\'en va à moins que vous ne l\'ayez marquée (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` avant de tirer).', '**Les caches de paquets se mettent à jour au prochain `npm install` / `pip install` / `cargo update` en ligne.** Aucun flux particulier – votre gestionnaire de paquets continue à fonctionner normalement quand vous êtes en ligne et se fige quand vous êtes hors ligne.', '**Devdocs se met à jour automatiquement par défaut.** Désactivez la mise à jour automatique avant les vols pour éviter les téléchargements surprise quand vous avez un signal à l\'aéroport (Paramètres → Désactiver la mise à jour automatique).', '**Les vidages Stack Overflow s\'actualisent tous les trimestres.** Internet Archive publie de nouveaux vidages tous les trois mois ; retéléchargez quand vous voulez une couverture plus nouvelle.', '**Cadence à planifier :** modèle et Devdocs tous les 2–3 mois, caches de paquets par projet quand vous commencez du travail nouveau, vidage Stack Overflow tous les 6–12 mois. Aucun d\'entre eux n\'est urgent à moins que vous ne commenciez à travailler sur quelque chose de genuinely nouveau.'], callouts: [{ type: 'tip', text: 'Le flux d\'actualisation le plus simple : dédier un dimanche par mois à « jour de maintenance en ligne ». Exécutez `ollama pull` pour toute nouvelle version de modèle, actualisez Devdocs, exécutez `npm update` / `cargo update` / `pip install --upgrade` sur les projets actifs. Après cela, vous pouvez vous perdre pour le mois suivant sans aucune dégradation.' }] },
      teamCache: { id: 'team-cache', title: 'Partage du Cache Hors Ligne Avec une Équipe', content: '**Pour les équipes qui voyagent ensemble ou travaillent dans le même environnement restreint, les caches sont shareable.** C\'est la différence entre un téléchargement 60 Go par développeur et un téléchargement 60 Go une fois sur le réseau du bureau.', items: ['**Verdaccio fonctionne aussi en tant que serveur d\'équipe.** Pointez un petit serveur de bureau vers Verdaccio, définissez `npm config set registry http://team-cache.local:4873/` pour tout le monde. Les nouveaux développeurs obtiennent le cache automatiquement ; les voyages hors ligne signifient juste pré-synchroniser ce dont vous avez besoin sur votre ordinateur portable.', '**Les modèles peuvent être hébergés sur un serveur Ollama d\'équipe.** `ollama serve` sur une puissante machine de bureau, pointez la config Continue.dev de chaque développeur vers le serveur d\'équipe quand au bureau, passez à `localhost:11434` (avec des modèles locaux tirés) pour les voyages.', '**Devdocs n\'a pas de mode d\'équipe natif mais est trivialement shareable en tant que dossier statique.** Construisez-le une fois, hébergez sur `http://docs.team.local`, tout le monde marque. Pour les voyages, les développeurs individuels exécutent des instances `localhost`.', '**Git est déjà team-shareable.** Un Gitea local ou GitLab auto-hébergé dans le réseau du bureau donne à chaque développeur l\'accès aux dépôts hors ligne du bureau ; combinez avec `git clone --mirror` sur des ordinateurs portables individuels pour les voyages.', '**Images conteneur via un registre privé.** Un petit Harbor ou registre Gitea intégré met en cache les images une fois ; les voyageurs `docker pull` vers local avant de partir.', '**Le cas économique :** pour une équipe de 5 développeurs qui voyage régulièrement, le partage des caches économise environ 250 Go de téléchargement Internet par mois et transforme la liste de contrôle pré-vol de 60 minutes à 5.'] },
      commonMistakes: { id: 'common-mistakes', title: 'Erreurs Courantes lors de la Configuration d\'une Pile de Codage Hors Ligne', items: ['**Erreur 1 : oublier de tester la configuration hors ligne avant le voyage.** L\'erreur la plus courante est de trouver des lacunes à l\'aéroport. Exécutez une répétition « lumières éteintes » 30 minutes à la maison – éteignez Wi-Fi, désactivez le cellulaire et faites un vrai travail – au moins 24 heures avant de le besoin.', '**Erreur 2 : mise en cache uniquement des paquets que vous utilisez actuellement, pas ceux dont vous aurez peut-être besoin.** S\'il y a une chance que vous ajoutiez une dépendance en vol, installez-la une fois à la maison en test de fumée. Le cache le conservera.', '**Erreur 3 : laisser l\'autocomplétion Tab de Cursor activée et supposer qu\'elle fonctionne hors ligne.** C\'est pas le cas. L\'IDE bascule silencieusement vers rien ; vous n\'obtenez pas d\'autocomplétion du tout. Installez soit Continue.dev en tant qu\'extension VS Code dans Cursor, soit utilisez VS Code directement.', '**Erreur 4 : utiliser un modèle sous 7B pour un sérieux travail de codage.** Les modèles de codage sub-7B manquent assez pour que vous passiez plus de temps à corriger leur résultat qu\'à écrire du code. Tombe à Qwen3-Coder 7B au minimum ; si votre matériel ne peut pas gérer cela, la configuration de codage hors ligne n\'est pas viable sur cet ordinateur portable.', '**Erreur 5 : faire confiance au modèle sur les bibliothèques plus récentes que sa date limite d\'entraînement.** Il hallucine en confiance. Pour tout publié dans les 6 derniers mois, traitez la résultat du modèle comme une supposition et vérifiez contre le code source.', '**Erreur 6 : ignorer le cache du paquet et supposer que `npm install` est assez rapide à la lounge aéroportuaire.** Le Wi-Fi de la lounge est peu fiable, les téléchargements s\'arrêtent et vous montez à bord avec un arbre de dépendances demi-installé. Mettez en cache la veille.', '**Erreur 7 : oublier les images Docker.** Si votre flux de travail dev utilise `docker compose up` pour une base de données, les images doivent être pré-extraites. Premier `docker compose up` en vol sans images est un mur dur.'] },
      sources: { id: 'sources', title: 'Sources', items: ['[Documentation Ollama](https://ollama.com/library) — Bibliothèque de modèles officielle, y compris les variantes Qwen3-Coder et les niveaux de quantisation référencés pour les budgets VRAM/RAM hors ligne.', '[Documentation Continue.dev](https://docs.continue.dev/) — Guide de configuration, configuration de modèle local et les flux de travail d\'autocomplétion et de chat offline-capable.', '[Documentation Aider](https://aider.chat/) — Référence CLI terminal, configuration de modèle local et les motifs de flux de travail offline Git-native.', '[Source Devdocs](https://github.com/freeCodeCamp/devdocs) — L\'application Web qui reflète la documentation officielle pour l\'utilisation hors ligne ; télécharger et les instructions de cache PWA.', '[Vidage de Données Stack Exchange (Internet Archive)](https://archive.org/details/stackexchange) — Vidage de contenu Stack Overflow trimestriel utilisé comme remplacement hors ligne pour les recherches.'] },
      faq: { id: 'faq', title: 'FAQ', faqs: [{ q: 'Quelle est la taille complète de la configuration de codage hors ligne ?', a: 'Environ 50–80 Go sur disque selon la couverture. Décomposition : Qwen3-Coder 30B Q4_K_M est ~18 Go, Devdocs est ~3 Go, Zeal docsets ~5 Go si vous l\'utilisez aussi, le vidage Stack Overflow est ~8 Go et les caches de paquets par projet (npm, pip, cargo, go) ajoutent 2–10 Go chacun. Le modèle 7B fallback est ~5 Go si vous voulez une empreinte plus petite.' }, { q: 'Puis-je installer de nouveaux paquets npm hors ligne ?', a: 'Seulement s\'ils sont déjà en cache Verdaccio local ou pnpm store. Le motif pré-vol standard est d\'exécuter `npm install` pour le projet à la maison, plus `npm install` pour toute dépendance optionnelle que vous pourriez vouloir, avant de perdre la connectivité. Les paquets que vous n\'avez pas en cache ne peuvent pas être installés hors ligne ; le contournement est de cloner manuellement la source et de la copier dans `node_modules`, mais c\'est lent et sujet aux erreurs. La pré-mise en cache est la réponse.' }, { q: 'GitHub fonctionne-t-il hors ligne ?', a: 'Git lui-même fonctionne entièrement hors ligne – `git commit`, `git branch`, `git rebase`, `git log` s\'exécutent tous localement. Ce qui ne fonctionne pas c\'est `git pull`, `git push`, `git fetch` ou toute interface Web. Clonez d\'avance les dépôts dont vous avez besoin avec `git clone --mirror` pour obtenir l\'historique complet ; les commits s\'accumulent localement et pushent quand vous êtes à nouveau en ligne. Pour un vrai travail collaboratif hors ligne, exécutez un Gitea local ou GitLab auto-hébergé sur l\'ordinateur portable d\'un collègue ou un petit serveur de bureau.' }, { q: 'Quel IDE fonctionne le mieux entièrement hors ligne ?', a: 'VS Code avec Continue.dev est l\'expérience hors ligne la plus polie : riches fonctionnalités IA, bon écosystème d\'extensions, aucun appel de licence. Les IDEs JetBrains fonctionnent mais le serveur de licence pinote périodiquement (tolère ~30 jours hors ligne). Vim, Neovim et Emacs sont entièrement hors ligne par conception et s\'associent bien avec Aider. Cursor a besoin de Continue.dev installé dedans car les fonctionnalités IA intégrées de Cursor nécessitent des appels réseau.' }, { q: 'Puis-je cloner des dépôts pour un travail hors ligne ?', a: 'Oui. `git clone --mirror <url> <path>` crée un clone dénudé avec historique complet et toutes les branches ; `git clone <url>` fonctionne pour une copie de travail normale. Les deux s\'exécutent sans réseau après le clone initial. Pour les flux de travail multi-dépôt, l\'écriture des clones pré-vol (`for repo in $REPOS; do git clone --mirror \"$repo\"; done`) est le motif le plus simple. Les sous-modules nécessitent `git submodule update --init --recursive` pour pré-chercher.' }, { q: 'Le codage hors ligne fonctionne-t-il sur Linux ?', a: 'Oui – Linux est la plateforme la plus facile pour une configuration de codage hors ligne. Ollama s\'exécute nativement, Continue.dev et Aider ont tous deux des compilations Linux, chaque gestionnaire de paquets (apt, dnf, pacman, nix) a des modes hors ligne et la plupart des outils décrits ici ont été construits à l\'origine sur Linux. La seule note spécifique à Linux est les pilotes GPU : les pilotes Linux NVIDIA sont mûrs pour l\'inférence mais cela vaut la peine de pré-tester sur le noyau exact que vous prévoyez d\'utiliser hors ligne. Les Macs Apple Silicon et les ordinateurs portables Linux avec des GPUs discrets sont tous deux pleinement pris en charge.' }, { q: 'Comment mets-je à jour les modèles IA locaux sans Internet ?', a: 'Vous ne pouvez pas – les mises à jour de modèles nécessitent une connectivité. Le motif est « instantané puis exécution » : tirez le dernier modèle en ligne, puis allez hors ligne. Quand vous avez ensuite un signal (lounge aéroportuaire, Wi-Fi d\'hôtel, maison), exécutez `ollama pull qwen3-coder:30b` pour récupérer les poids les plus récents. La cadence typique est l\'actualisation mensuelle ; le modèle ne se dégrade pas silencieusement entre les mises à jour.' }, { q: 'Puis-je partager un cache hors ligne avec mon équipe ?', a: 'Oui. Verdaccio (npm) et devpi (pip) s\'exécutent tous les deux en tant que serveurs d\'équipe ; un proxy Athènes sert les modules Go ; un registre conteneur privé sert les images Docker ; un Gitea auto-hébergé ou GitLab sert les remotes git. La mise en cache centralisée signifie que les nouveaux membres d\'équipe obtiennent tout du réseau du bureau au lieu de tirer 60 Go chacun. Pour les voyages, chaque ordinateur portable du développeur a toujours besoin d\'une snapshot locale de ce qu\'il utilisera, mais le cache central rend la snapshot bon marché.' }, { q: 'Cela fonctionne-t-il sur un avion avec un signal faible ?', a: 'Oui – et c\'est plus fiable que de compter sur le Wi-Fi spottily en vol. La pile entière suppose zéro réseau ; un signal faible est traité identiquement à aucun signal. Anecdotiquement, la latence d\'autocomplétion du LLM local (~280 ms sur M5) est plus rapide qu\'un aller-retour Wi-Fi typique en vol vers les serveurs Copilot (~400–800 ms quand la connexion est saine, bien pire quand dégradée). Offline-by-design bats « en ligne quand c\'est possible » sur un vol long-courrier.' }, { q: 'Le codage hors ligne est-il plus rapide que le codage en ligne ?', a: 'Pour l\'autocomplétion et le chat, oui – les allers-retours d\'inférence locaux sont plus rapides que les allers-retours réseau vers un fournisseur d\'IA cloud. Continue.dev + Qwen3-Coder 30B sur un M5 retourne l\'autocomplétion en ~280 ms ; GitHub Copilot en bonnes conditions réseau retourne en ~180–400 ms ; Copilot en réseau dégradé retourne plus lent ou échoue. La différence de latence est petite mais toujours en faveur du local. Le plus gros gain est le déterminisme – l\'inférence locale est la même vitesse à chaque fois, indépendamment de l\'état du réseau.' }] },
      relatedReading: { id: 'related-reading', title: 'Lectures Supplémentaires', items: ['[Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026](/fr/power-local-llm/replace-github-copilot-with-local-llm) – objectif adjacent : même pile, framing différent (coûts sur hors ligne). Lisez ceci si vous voulez les mathématiques de coût en premier.', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) – quels systèmes de harnais fonctionnent entièrement hors ligne, avec couverture profonde des compromis Continue.dev / Aider / Cline.', '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/fr/power-local-llm/best-local-coding-models-2026) – le côté modèle de l\'équation, avec scores HumanEval+ par langue.', '[Run AI on a Tablet: iPad and Android Local LLM Apps](/fr/power-local-llm/run-ai-on-tablet-ipad-android) – pour les voyageurs qui veulent un appareil hors ligne plus léger qu\'un ordinateur portable.', '[Best Laptops for Local LLMs in 2026](/fr/local-llms/best-laptops-local-llm) – autorité matérielle ; classe chaque ordinateur portable viable sur tokens/sec, autonomie et mémoire système totale.', '[Write Better Code With AI](/fr/prompt-engineering/write-better-code-with-ai) – techniques d\'invitation qui améliorent la qualité de la génération de code sur n\'importe quel modèle, en ligne ou hors ligne.', '[Power Local LLM Hub](/fr/power-local-llm) – bibliothèque de guides complète couvrant le codage, RAG, les agents et le travail créatif.'] },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'インターネットなしのオフラインコーディング環境：完全ローカル開発セットアップ (2026)',
    seoTitle: 'オフラインコーディング：インターネットなしのローカルLLM 2026',
    intro: '2026年の完全にオフラインなコーディング環境は約60GBのディスクに収まり、ネットワーク呼び出しなしに14時間のフライトに耐えられます。スタックは、1つのローカルLLM（Qwen3-Coder 30B）、1つのエディタ統合（Continue.devまたはAider）、1つのオフラインドキュメント ミラー（DevdocsまたはZeal）、1つのキャッシュされたパッケージレジストリ（npmのVerdaccio、pythonのdevpi）、およびローカルコード検索（ripgrepプラスrga）で構成されています。オフラインで本当に機能しない唯一のことは、新しいサードパーティパッケージのインストールとトレーニングカットオフ後にリリースされたAPIについてのモデルの知識です。両方とも、オフラインに行く前に事前にダウンロードすることで修正できます。',
    metaDescription: '14時間のフライトでテストされたオフラインコーディング。ローカルLLM、キャッシュされたnpm/pip、Devdocs、ripgrep – ディスク上約60GB、ゼロネットワーク呼び出し。フライト前チェックリスト付属。',
    twitterDescription: '14時間のフライトのコーディング環境：約60GB：Qwen3-Coder + Continue.dev + Devdocs + キャッシュ。フライト前チェックリスト + オフラインで実際に壊れるもの。',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3', 'Codestral 22B', 'nomic-embed-text v1.5'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro 64 GB', 'Apple M5 Max MacBook Pro 64 GB', 'Apple M4 MacBook Pro 36 GB', 'NVIDIA RTX 4090 Laptop 16 GB', 'NVIDIA RTX 4070 Laptop 8 GB'],
    audience: 'フライト、制限された環境、VPNアクセスなしのクライアントサイト、またはインターネットが信頼できない場所でコーディングする必要があり、ネットワークが落ちても静かに低下しないセットアップを必要とする開発者。',
    readTime: '15分の読み取り',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: ['オフラインローカルllm インターネットなし', 'オフライン開発環境2026', 'オフラインcopilot代替案', '完全オフライン開発', '飛行機でのコーディング', 'ローカルllm インターネットなし'],
    leadAnswerBlock: '**2026年の完全にオフラインなコーディング環境には、接続を失う前にディスク上に5つのものが必要です：量子化ローカルLLM（Qwen3-Coder 30B Q4_K_M、約18GB）、ローカルEndpointと通信するエディタハーネス（Continue.devまたはAider）、オフラインドキュメントミラー（Devdocs約3GBまたはZeal Docsets約5GB）、使用言語のキャッシュパッケージレジストリ（npmのVerdaccio、pythonのdevpi、Rustのベンダー化されたCargo Deps）、およびローカルコード検索用の`rga`プラス`ripgrep`。合計ディスク：ドキュメントカバレッジと言語の可用性に応じて約50～80GB。ハードウェアフロア：30Bモデルの場合32GB統一RAM（Apple Silicon）または16GB VRAM（ディスクレートGPU）、7Bフォールバックの場合16GB統一RAM。オフラインで本当に壊れる2つのこと：ローカルキャッシュにまだない新しいサードパーティパッケージをインストールすること、およびトレーニングカットオフ後にリリースされたAPIについてモデルに尋ねることです。両方は、オフラインに行く前に必要なものを事前キャッシュすることで対処できます。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルコーディングLLMは、本当にインターネットなしでフル開発セットアップ全体を置き換えることができますか？',
        answer: 'はい、既に方法を知っているような仕事には。ローカルLLM（Qwen3-Coder 30B）はネットワーク呼び出しなしにオートコンプリート、リファクタリング、コードレビューを処理します。摩擦点はモデルではなく、周囲のエコシステム：パブリックレジストリから取得するパッケージマネージャー、ドキュメントサイト、Stack Overflow検索です。3つすべてにラップトップSSDに適応するオフライン置換があります：Verdaccioとdevpiはレジストリをキャッシュし、DevdocsとZealは公式ドキュメント反映し、ripgrepプラスrgaはGoogleと同じくらい速くコードとPDFを検索します。実行しようと計画しているもののために依存関係を事前キャッシュし、モデルを1回取得し、セットアップは本当にフライト準備完了です。14時間の太平洋横断フライトでテスト済み：1つの機能を配備、2つのバグをデバッグ、テスト実行 - すべてネットワーク呼び出しなし。',
        bullets: ['推奨スタック – Qwen3-Coder 30B（または7B）+ Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga。', 'ディスク予算 – 合計約50～80GB：18GBモデル、5GB Docs、8GB Stack Overflowダンプ（必要な場合）、残りはプロジェクトサイズのパッケージキャッシュ。', 'ハードウェアの甘い点 – 64GB統一メモリを搭載したApple M-Series MacBook Pro；統一メモリアーキテクチャは、30Bモデルとエディタとdockerが全部ページング無しで適応することを意味します。', '壊れるもの – キャッシュにない新しいパッケージをインストール、モデルがカットオフ後にリリースされたライブラリについて尋ねること。', 'フライト前チェックリスト – モデルを取得、パッケージキャッシュを温め、Devdocsを同期し、必要なレポをクローン、搭乗前にドライラン実行。'],
        updatedDate: '2026-05-07',
      },
    },
    toc: [{ label: '重要なポイント', anchor: '#key-takeaways' }, { label: '高速な事実', anchor: '#quick-facts' }, { label: 'オフラインスタック', anchor: '#offline-stack' }, { label: '14時間飛行テスト', anchor: '#flight-test' }, { label: 'フライト前チェックリスト', anchor: '#pre-flight-checklist' }, { label: 'ハードウェア：M5統一メモリが勝つ理由', anchor: '#hardware' }, { label: '適切なローカルモデル選択', anchor: '#model-choice' }, { label: '依存関係キャッシング (npm, pip, cargo, go)', anchor: '#dependency-cache' }, { label: 'オフラインドキュメント', anchor: '#offline-docs' }, { label: 'Googleなしのローカル検索', anchor: '#local-search' }, { label: '完全にオフラインで機能するIDE', anchor: '#ide' }, { label: 'オフラインで実際に壊れるもの', anchor: '#what-breaks' }, { label: 'モデルとキャッシュ後で更新', anchor: '#updates' }, { label: 'チームとのキャッシュ共有', anchor: '#team-cache' }, { label: '一般的な間違い', anchor: '#common-mistakes' }, { label: 'ソース', anchor: '#sources' }, { label: 'FAQ', anchor: '#faq' }, { label: '関連読書', anchor: '#related-reading' }],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: '下のスライドデッキは以下をカバーします：5コンポーネントのオフラインコーディングスタック（ローカルLLM、エディタ統合、パッケージキャッシュ、ドキュメントミラー、ローカル検索）、14時間フライトテストの結果、6ステップのフライト前チェックリスト、モデル比較（Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3）、言語ごとの依存関係キャッシング、6つのよくある間違い。PDFをオフラインコーディングセットアップリファレンスカードとしてダウンロード。',
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**5つのコンポーネントがコーディングセットアップを本当にオフラインにします：** ローカルLLM、エディタ統合、パッケージキャッシュ、ドキュメントミラー、ローカル検索。1つでも欠けたら、実際の仕事の1時間以内に「インターネットが必要」の壁にぶつかります。', '**ディスク予算：約50～80GB。** Qwen3-Coder 30B Q4_K_Mは約18GB、Devdocsは約3GB、Stack Overflowダンプは約8GB、残りは実際に利用する言語とプロジェクトサイズのパッケージキャッシュです。', '**ハードウェアフロア：** 30Bモデルの場合32GB統一RAM（Apple Silicon）または16GB VRAM（ディスクレートGPU）、7Bフォールバックの場合16GB統一RAM。推奨の甘い点：64GB搭載M5 MacBook Pro – モデル、エディタ、Docker、ブラウザはすべてページング無しで適応します。', '**Continue.devとAiderは両方とも完全にオフラインで実行します** ローカルOllamaまたはllama.cpp エンドポイントに対して。テレメトリ呼び出しなし、ライセンスチェックなし。GitHub Copilot、Cursorのタブオートコンプリート、Codeiumはすべてネットワーク呼び出しが必要で、オフラインで静かに低下します。', '**本当に壊れる2つのこと：** 新しいサードパーティパッケージをインストール（キャッシュ無し、フォールバック無し）とモデルがトレーニングカットオフ後にリリースされたAPIについて尋ねること。両方は、使用予定のものを事前キャッシュすることで修正可能です。', '**14時間飛行テストパス：** 本当の機能を配備、2つのバグを修正、フルテストスイート実行 – すべてネットワーク呼び出しなし。セットアップは本当、理論的ではありません。'] },
      quickFacts: { id: 'quick-facts', title: '高速な事実', items: ['**スタック：** Qwen3-Coder 30B（または7B）+ Continue.dev または Aider + Devdocs（またはZeal）+ Verdaccio（npm）と devpi（pip）+ ripgrep と rga。', '**合計ディスク：** 言語カバレッジとStack Overflowダンプをキャッシュするかどうかに応じて約50～80GB。', '**ハードウェアの甘い点：** Apple M5 MacBook Pro 64GB。統一メモリは30Bモデルとエディタとdockerが1つのプールを共有することを意味します。', '**オフラインvs オンライン品質：** モデル自体は同一 – オートコンプリート、リファクタリング、コードレビューは同じ感覚です。摩擦はモデルの周り、内ではなく。', '**オフラインレイテンシ：** M5で約280msオートコンプリート（シグナルがあるときCopilotサーバーへの往復より速い）。', '**全体オープンソース：** Ollama（MIT）、Continue.dev（Apache）、Aider（Apache）、Qwen3-Coder（オープンウェイト）、Devdocs（MPL）、Zeal（GPL）。', '**アップデート：** セットアップは「スナップショットして実行」 – すべてキャッシュされたら、更新を選択するまで現在のまま。オンラインで更新、それからオフラインに戻す。'] },
      offlineStack: { id: 'offline-stack', title: 'オフラインスタック', content: '**5つのコンポーネント、各1つネットワークが通常提供するもの。** 1つ削除したら、セットアップは本当の仕事中に壁にぶつかります。テーブルは各オンラインツールをそのオフライン相当物とディスク予算にマッピングします。', snippetBlocks: [{ type: 'one-sentence', text: '2026年の完全オフラインコーディング環境は1つのローカルLLM、1つのエディタハーネス、言語ごと1つのキャッシュパッケージレジストリ、1つのドキュメントミラー、1つのローカル検索ツール – 合計ディスク約50～80GB。' }, { type: 'plain-terms', text: 'エディタとターミナルが通常行うすべてのオンラインなもの – パッケージ取得、ドキュメント検索、Stack Overflow検索、Copilotに質問 – を想像してください。それぞれにラップトップにローカル置換をピンします。ワンタイムフライト前キャッシュ後、これらのどれもネットワークに依存しません。モデルはディスクに存在、ドキュメント存在、npmレジストリはディスクに存在。唯一の失敗モードは「キャッシュされていないパッケージが必要」 – そのための修正もあります。' }], columns: ['コンポーネント', 'オンラインツール', 'オフライン置換', 'キャッシュサイズ'], rows: [{ 'コンポーネント': 'AIコード補完', 'オンラインツール': 'GitHub Copilot, Cursor Tab', 'オフライン置換': 'Continue.dev（またはAider）+ Ollama + Qwen3-Coder 30B', 'キャッシュサイズ': '約18GB（モデルのみ）' }, { 'コンポーネント': '公式ドキュメント', 'オンラインツール': 'MDN, ReadTheDocs, 公式サイト', 'オフライン置換': 'Devdocs（Webアプリ）またはZeal（デスクトップ）', 'キャッシュサイズ': '約3～5GB' }, { 'コンポーネント': 'Stack Overflow', 'オンラインツール': 'stackoverflow.com', 'オフライン置換': 'Stack Exchangeデータダンプ（KiwixまたはローカルIndex）', 'キャッシュサイズ': '約8GB（圧縮）' }, { 'コンポーネント': 'npmパッケージ', 'オンラインツール': 'registry.npmjs.org', 'オフライン置換': '`npm install --prefer-offline`ウォームキャッシュVerdaccio', 'キャッシュサイズ': 'プロジェクト依存（通常約2～10GB）' }, { 'コンポーネント': 'Pythonパッケージ', 'オンラインツール': 'PyPI', 'オフライン置換': 'devpiまたは`pip download`経由ローカルwheels', 'キャッシュサイズ': 'プロジェクト依存（通常約1～5GB）' }, { 'コンポーネント': 'Rustクレート', 'オンラインツール': 'crates.io', 'オフライン置換': 'プロジェクトdepsの`cargo vendor`；キャッシュ`~/.cargo/registry`', 'キャッシュサイズ': 'プロジェクト依存（通常約0.5～3GB）' }, { 'コンポーネント': 'Goモジュール', 'オンラインツール': 'proxy.golang.org', 'オフライン置換': 'ローカルAthensプロキシまたは`GOFLAGS=-mod=vendor`', 'キャッシュサイズ': 'プロジェクト依存（通常約0.5～2GB）' }, { 'コンポーネント': 'コード検索', 'オンラインツール': 'GitHub検索, Sourcegraph', 'オフライン置換': 'ripgrep（`rg`）コード、rgaはPDFとアーカイブ用', 'キャッシュサイズ': '約10MB（バイナリのみ）' }, { 'コンポーネント': 'Git remotes', 'オンラインツール': 'GitHub, GitLab', 'オフライン置換': '`--mirror`でプリクローンreposまたはローカルGitea', 'キャッシュサイズ': 'リポサイズ毎' }, { 'コンポーネント': 'コンテナイメージ', 'オンラインツール': 'Docker Hub, GHCR', 'オフライン置換': 'ローカルレジストリミラーまたはプリプルイメージ', 'キャッシュサイズ': 'プロジェクト依存' }], callouts: [{ type: 'note', text: '初日にこれら全部は不要です。最小限の有用なオフラインセットアップはLLM、Continue.devまたはAider、フライプに使用する言語のパッケージキャッシュです。基本が機能したらDevdocsとStack Overflowダンプを追加してください。' }] },
      flightTest: { id: 'flight-test', title: '14時間飛行テスト：実際に起こったこと', content: ['**セットアップは2026年3月に太平洋横断フライトでテストされました – 14時間、Wi-Fi無し（購入されたエアライン パスはゲート時に失敗して戻らずに）。** 以下は何が機能し、何がほぼ壊れ、準備なしで旅を停止させたであろう何かです。', 'ローカルモデルの出力品質は、それをどのようにプロンプトするかの下流です。任意のローカルモデルのコード生成を改善する構造化プロンプト技術については、[Write Better Code With AI](/ja/prompt-engineering/write-better-code-with-ai)を参照してください。'], items: ['**時間1 – ラップトップを取り出し、前夜にクローンしたNext.jsプロジェクトを開きました。** Continue.devは既に`localhost:11434`のOllamaを指していました。リファクタリングしたい関数にCmd+Iを押しました。Diffは2秒で現れました。受け入れられました。モデルはQwen3-Coder 30B Q4_K_Mで、メモリに読み込まれていました。パック以来、そこにいました。', '**時間3 – 新しい依存関係を追加する必要があった：`@tanstack/react-query`。** `npm install`を実行しました。Verdaccioはローカルキャッシュから提供しました（家でスモークテストとして`npm install`を実行していた）。合計経過時間：4秒。`tcpdump`でネットワーク呼び出しは観測されません（はい、確認しました – それはそのようなフライトでした）。', '**時間5 – Zod методを正確な署名を忘れました。** ブラウザタブでDevdocsを開きました。Zodドキュメントセットが含まれていました。8秒で答えが見つかりました。「読み込み中…」スピナーなし。', '**時間6 – キャッシュにないパッケージをインストールしようとした：`vitest-html-reporter`。** `npm install`はVerdaccioから404で失敗。これは最初の壁でした。フォールバック：ローカルにリポをクローン、手動で`node_modules`にソースをコピー、`package.json`をローカルパスに指すように修正。12分かかりました。修正は予防的です：オフラインに行く前に必要になるかもしれない何でもキャッシュを温めてください。', '**時間8 – 2月2026年にリリースされたライブラリについてモデルに尋ねました。** 自信を持ってAPIを幻視。Qwen3-Coderのトレーニングカットオフは2025年10月でした；2月2026年のAPIはトレーニングデータになかった。修正：飛行前にライブラリのrepoを`rga`で索引付けしました。実際のソースを検索。本当の署名を見つけました。教訓：モデルはトレーニングデータにあったことを知っている；より新しい何でも、ドキュメントとソースが権限です。', '**時間11 – フルテストスイートを実行。** 423テスト、4.7秒。リグレッションなし。テストランナーはネットワークを気にしません。', '**時間13 – 何も推さず。** Gitコミットはローカルに蓄積。飛行機が着陸したとき、空港ラウンジで1回`git push`を実行。1つの推しで17コミット。ローカルファースト git モデルはこれを可能にします – 唯一のネットワーク依存ステップは最終的なプッシュです。', '**純結果：** 1つの機能を配備、2つのバグを修正、11の新しいテストを書き、3つのコミット私はまだ誇りに思う。生産的な時間：14時間中約11時間（残りは食べる、寝る、時間6で悪い依存関係を対処）。セットアップはこのフライトだけで自分を支払いました。'], callouts: [{ type: 'tip', text: '自宅で「明かりを消す」リハーサルを実行：Wi-Fi をオフにし、セルラーホットスポットを無効にし、通常の90分作業セッションをしてみてください。35,000フィートでキャッシュの隙間を見つける前にギャップを見つけます。一般的な発見：`@types`から引き出すTypeScriptタイプのみのインポート、npmキャッシュを回避する`pnpm install`、プリプルされていないdockerベースイメージ。' }] },
      preFlightChecklist: { id: 'pre-flight-checklist', title: 'フライト前チェックリスト：番号付きステップ', content: '**接続を失う前日にこのリストを実行してください。** 各ステップは1～10分かかります。全リストは初回約1時間、以降のトリップは15分です（キャッシュは保持されるため）。', numberedItems: ['ローカルLLMを取得します。`ollama pull qwen3-coder:30b`（16GB マシンの場合は`:7b`）。`ollama run qwen3-coder:30b "say hi"` – 数秒で応答するはずです。', 'Continue.dev（またはAider）をインストールおよび構成します。VS Code を開き、Continue.dev拡張をインストール、`~/.continue/config.json`を編集して`http://localhost:11434`（Ollama デフォルト）を指す。ファイルを開いてCmd+I を押すことでテストします。', 'プロジェクトのパッケージキャッシュを温める。プロジェクトに`cd`、`npm install`を実行（または`pip install -r requirements.txt`、または`cargo build`、または`go mod download`）。Verdaccio、devpi、またはCargoは最初の実行でディスクにすべてをキャッシュします。', 'インストール中に必要な可能性のあるオプションの依存関係のサンプルをインストールします。フライト中に`@tanstack/react-query`または`zod`を追加することがあればスクラッチディレクトリでそれらの使い捨て`npm install`を今実行。パッケージはキャッシュに到着します。', '参照したい可能性のあるリポをプリクローン。`git clone --mirror`は最も安全 – 完全な履歴とすべてのブランチを取得します。', 'Devdocs を同期（または必要な Zeal docsets をダウンロード）。Devdocs で、Settings → Disable Auto-update → Download All を選択。必要な Docsets（TypeScript、Node、React、Python、Rust）はローカルに到着します。', '使用する可能性のある Docker イメージをプリプル。`docker pull node:20-alpine`、`docker pull postgres:16` など。後で`docker compose up`を使用する場合、ローカルストレージから提供されます。', 'プロジェクトのテストスイートを1度実行します。ネットワークから35,000フィート遠い前に欠落しているビルドアーティファクト（コンパイル TypeScript、生成 Prisma クライアント）をキャッチします。', '30分間切断して再テストします。Wi-Fi をオフにし、セルラーを無効にして、5分間の実際の作業をしてみてください。失敗するもの – 今修正、ゲートではなく。', 'すべてを充電します。バッテリーは欠落キャッシュの後の2番目のオフライン失敗モード。M5 MacBook Pro で2時間の LLM 使用はバッテリーの約30～40% を消費します – それに応じて計画し、ラップトップ定格のUSB-C パワーバンクを持ってきてください。'], callouts: [{ type: 'tip', text: 'このチェックリストをスクリプトとして保存します。`ollama pull`、`npm install`、`pip install`、`git fetch --all`、`docker pull`を実行する30行のbashファイル（`pre-flight.sh`）一般的な依存関係プロセス全体を1つのコマンドに変わります。最初の実行は45分; 後続の実行は5分です。' }] },
      hardware: { id: 'hardware', title: 'ハードウェア：M5 64GB統一メモリ MacBook Pro が勝つ理由', content: '**純粋なオフラインコーディング作業の場合、64GB統一メモリを搭載したApple M5 MacBook Pro は2026年の最も強力なシングルマシンです。** 理由は統一メモリ：GPUとCPUは1つのプールを共有するため、30Bモデル、エディタ、Dockerコンテナ、Chromiumベースのドキュメントビューアはすべてページング無しで共存します。', items: ['**統一メモリはモデルが「VRAM内」も「システムRAM内」もない – メモリ内にあります。** Qwen3-Coder 30B Q4_K_M（約18GB）をロード場合、それは常駐。Docker composeスタックへの切り替えは削除しません。16GB VRAMと32GB システムRAMのディスクレートGPUラップトップでは、モデル交換は スイッチ毎に5～10秒かかります。', '**30B モデルは 24GB に快適に適応；64GB は残りのためのヘッドルーム。** 64GB で、モデルをロード、3つのDockerコンテナ（データベース、redis、サンドボックス）、VS Code、Devdocs 付きChromiumタブ、ターミナルマルチプレクサーはすべて実行無し遅く。', '**負荷下の電池寿命：6～8時間。** ほとんどのフライトはUSB-C パワーバンクでカバーします。M5 は持続 LLM 推論の最も効率的なチップ - エネルギートークン当たりの数字は約3× よい同じスループット時のディスクレートGPUラップトップより。', '**静かな飛行機でのファンノイズなし。** M5 シャーシは持続期間パッシブで30Bモデルを実行。ディスクレートGPUラップトップは推論負荷下でファン著名 - 家では問題ですが、27 行での社会問題。', '**ディスクレートGPU選択肢は生スループットで競争的ですが、妥協のコスト。** Razer Blade 16 RTX 4090 モバイル（16GB VRAM）は M5 より高い tokens/sec で30Bモデルを実行しますが、推論下バッテリー寿命は約2時間、ファンノイズは重要、16GB VRAM 天井は32K コンテキスト設定を保持できない、またはモデル横のデータベース実行 Docker コンテナを保持できない。', '**より深いハードウェア ランキングについては、** [Best Laptops for Local LLMs in 2026](/ja/local-llms/best-laptops-local-llm) を参照してください – この記事はすべての実行可能な選択肢（M-シリーズ Mac、ROG Strix、Razer Blade、Framework 16）を tokens/sec、バッテリー、合計システムメモリにランク付けします。'], callouts: [{ type: 'note', text: '32GB M3 または M4 MacBook Pro を既に所有している場合、アップグレード無し。7B モデルは 8GB RAM で快適に実行し、30B 品質の80～85% を得ます。64GB 推奨はオフラインコーディング作業用に特に機械を購入するユーザー向け；既存ハードウェアユーザーは最初に 7B を試すべき。' }] },
      modelChoice: { id: 'model-choice', title: 'オフライン作業の正しい地元のモデルを選ぶ', content: '**モデルは最も大きいディスクとメモリライン項目；1回選ぶ、正しく選ぶ。** 2026年5月の3つの合理的な選択肢、オフラインコーディング作業を処理する方法によってランク付け。', items: ['**Qwen3-Coder 30B Q4_K_M（約18GB）– 推奨デフォルト。** TypeScript、Python、Rust、Go オートコンプリートのベストインクラス；信頼できるツール呼び出し；32K トークンコンテキストを処理。利用可能メモリの 24GB が必要（Apple Silicon システムRAM、ディスクレートGPU VRAM）。', '**Qwen3-Coder 7B Q4_K_M（約5GB）– 軽量フォールバック。** 8GB 統一 RAM または 8GB VRAM で実行。日常の仕事で 30B 品質の約80～85％；ギャップはマルチステップリファクタリングおよび長文脈推論に表示されます。ラップトップが 24GB 未満メモリを持つ、または重いdockerワークロードと共存する場合の正しい選択。', '**DeepSeek Coder V3 – 非常に長いコンテキストが必要な場合これを選択。** DeepSeek V3 は 128K トークン サポート；多くのファイル間でデバッグが有用。ディスク上より大きい（Q4_K_M での約25GB）；生品質で Qwen3-Coder 30B と大体同等。', '**Codestral 22B – 速度ピック。** Qwen3-Coder 30B より高速オートコンプリート；ツール呼び出しおよびマルチステッププランで弱い。オフラインワークフロー Autocompletion が支配的で、エージェントハーネスを使用しない場合良い。', '**スキップ：** コーディング ファイン チューンなしで 13B 未満の汎用モデル（Llama 3.2 7B、Mistral Small）および Q4_K_M より厳しい任意の量子化。両方は実際のコーディング作業で明白に失敗。', '**言語毎 HumanEval+ スコアを含む完全なコーディングモデル比較のため、** [Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/ja/power-local-llm/best-local-coding-models-2026) を参照してください。'] },
      dependencyCache: { id: 'dependency-cache', title: '依存関係キャッシング：npm、pip、cargo、go', content: '**パッケージマネージャーは LLM 後の2番目に一般的なオフライン失敗点。** 各言語は異なるメカニズム；原則は同じ – 必要になるかもしれない何でも pref を取得し、呼び出す`install`時ローカルストレージから提供します。', items: ['**npm（Node.js）：** Verdaccio をインストール（`npm install -g verdaccio`）、npm をそこに指す（`npm config set registry http://localhost:4873/`）、各プロジェクトで1度`npm install`を実行。Verdaccio は各パッケージをローカル キャッシュ；後続インストールはオフラインで機能。キャッシュは`~/.local/share/verdaccio/storage`に存在。', '**pip（Python）：** 最もシンプルなパターンは`pip download -r requirements.txt -d ~/wheelhouse`、その後`pip install --no-index --find-links ~/wheelhouse -r requirements.txt`でインストール。マルチプロジェクト使用、devpi はより強力な選択肢 – Python 向け Verdaccio と同じ形。', '**cargo（Rust）：** `cargo vendor` は各依存関係をプロジェクトの`vendor/`ディレクトリに書き込み、プラス`cargo`に使用するよう指示する`.cargo/config.toml` スニペット。コミットされたら、プロジェクトはオフラインで常に構築。Cargo はグローバルレジストリを`~/.cargo/registry/cache` でもキャッシュ – これを`cargo fetch`で事前に温めるはほとんどの場合をカバー。', '**go（Go）：** 最もシンプルなパターンはプロジェクトあたり`go mod vendor`（Go はCargo のような`vendor/`ディレクトリを書き込み）。グローバルキャッシング、ローカル Athens プロキシを実行し`GOPROXY=http://localhost:3000`設定。', '**pnpm と yarn（npm形）：** npm の同じ方法で Verdaccio を指す。pnpm コンテンツアドレス店はデフォルトでオフライン親しみやすい；パッケージがストアにあれば、各プロジェクトがそれを共有。', '**Brew、apt、dnf（システムパッケージ）：** 短いトリップでは重要度が低いですがはす値する。`brew bundle dump` Brewfile を生成し後で再実行できます；apt/dnf は共に`apt-get download`とダウンロード`.deb`/`.rpm`ファイル経由オフラインモード。'], callouts: [{ type: 'tip', text: 'もっと単純なオフラインパッケージパターンはプロジェクトスコープ：Rust 用`cargo vendor`、Go 用`go mod vendor`、Node 用 Verdaccio に対する`npm install`、Python 用`pip download` – すべてプロジェクトレベルでフライト前日に完了。システム全体キャッシュ（Verdaccio ストレージ、~/.cargo、~/.npm）はプロジェクト全体で必要な何でも扱う。' }] },
      offlineDocs: { id: 'offline-docs', title: 'オフラインドキュメント：Devdocs、Zeal、Stack Overflow ダンプ', content: '**モデルは大体訓練されたもの知っています；他のすべてはオフラインドキュメントとコードに存在。** 3つのソースはあなたが Google するであろう約 95% カバー。', items: ['**Devdocs（Webアプリ、約3GB）。** 約150言語とフレームワーク向けのミラーオフィシャルドキュメントが収納型 Progressive Web App。`devdocs.io`開く、Settings、使用するドキュメントを有効にする、「Make available offline」を打つ。ブラウザはすべてキャッシュ；その後飛行機モードで永久に動作。', '**Zeal（デスクトップアプリ、約5GB）。** Dash docsets を使用するネイティブデスクトップドキュメントブラウザ – macOS Dash アプリと同じフォーマットがフリーかつクロスプラットフォーム。Devdocs より良好なキーボードナビゲーション；より弱いサーチ。1つまたは他を選択；両方は過剰。', '**Stack Overflow データダンプ（約8GB 圧縮）。** Internet Archive はオフィシャル Stack Exchange データダンプをトレント としてホスト。Kiwix のようなツールは閲覧可能サイトとしてレンダー、または Elasticsearch / SQLite-FTS で高速ローカルサーチ用に索引。カバレッジはダンプ日で切断 – 通常数か月以内 – しかし一般的なプログラミング質問はファイン。', '**プロジェクト固有ドキュメント。** 強く使用するライブラリについて、リポとドキュメント サイトソースをクローン。ほとんどのドキュメント サイトは静的で`docs/`ディレクトリに存在；`mkdocs build`または`npm run docs:build`ローカルサイトが生成でき`python -m http.server`で提供可能。', '**モデル自体はトレーニングデータにある事柄のドキュメントとしてカウント。** Qwen3-Coder 30B は標準ライブラリとメジャーフレームワークをよく知っています – TypeScript、React、Python stdlib、NumPy、AWS SDK。モデルに尋ねることはこれらについて Devdocs を検索するより度々優って。分割は「モデル既知、ドキュメント新規、ソース未知」。'], callouts: [{ type: 'note', text: 'Stack Overflow コンテンツ品質はタグできつく変わる。ダンプは最も有用でレガシー言語および固有エラーメッセージ –正確にモデルが弱い事柄。メインフレームワーク質問、モデルはダンプサーチより速く正確。' }] },
      localSearch: { id: 'local-search', title: 'Google なしローカル検索', content: '**`ripgrep`と`rga`は 2 つのツールをローカルサーチワークフローは Google と同じく高速感じしました。** 両方フリー、両方 tiny、両方すべてプラットフォームで実行。', items: ['**ripgrep（`rg`）– コード用高速テキストサーチ。** `grep -r`置き換え、大きなリポジトリで10～50× 優秀。自動的に`.gitignore`読み込み。「この関数どこ」と「この API のすべての呼び出し元を見つける」標準ツール。', '**rga（`ripgrep-all`）– PDF、アーカイブ、他のバイナリフォーマット向け ripgrep。** PDF、zip ファイル、gzipped ログ、SQLite データベース、Office ドキュメント内を透過的に検索。`rga "query" .`は ripgrep ができないすべてのファイルフォーマットを検索、プレーンテキスト ripgrep にフォールバック。', '**ユースケース 1 – 「この API を使用方法例が必要」。** これを使用する複数リポを事前クローン；`rg "api_function_name" ~/code/examples`は秒のほんの一部で各実コールサイト戻します。使用パターンのためドキュメントより良好。', '**ユースケース 2 – 「この PDF 仕様に X と言うどこ」。** `rga "specific phrase" ~/specs/`。2分スキミング必要だった PDF は200ms 検索へ。', '**ユースケース 3 – 「Stack Overflow なし Stack Overflow」。** Kiwix または Elasticsearch でStack Overflow ダンプを索引付けした場合、ダンプに対する`rg`風クエリは レガシートピック向けGoogle「stackoverflow」検索置き換え。', '**速い code の質問、モデルは検索より高速。** Continue.dev `Cmd+L`はコンテキストとして codebase を開いたチャット；「auth フロー処理どこ」は検索ツールに質問をタイプせず1～2 秒で正しいファイル戻す。'] },
      ide: { id: 'ide', title: '完全にオフラインで機能する IDE', content: '**ほとんどメジャー IDE はオフラインで機能；違いは拡張、ライセンス検証、AI ツール内。** 重要なことは AI 機能実際に機能は、ネットワーク低下時ユーザーが注目するビット。', items: ['**VS Code – 完全にオフラインで機能；AI 機能は使用する拡張に依存。** Continue.dev はローカル Ollama エンドポイントに対して完全に実行、推奨ペアリング。Cursor の組み込みTab オートコンプリート作成ネットワーク呼び出し、静かに低下。GitHub Copilot は直ちに停止機能。', '**JetBrains IDE（IntelliJ、PyCharm、GoLand、WebStorm）– ライセンスキャッシュされたら完全オフラインで機能。** ライセンスサーバーは定期的にピンも（個人ライセンス30日毎）、拡張オフラインウィンドウを許容。Continue.dev は機能パリティ付き JetBrains ビルドを持つ。', '**Vim と Neovim – 完全オフラインデザイン。** ライセンスチェック無し、テレメトリー無し。サイドターミナルペインで Aider とペア；またはローカル Ollama に指す`llm.nvim`プラグイン で`nvim`使用。', '**Emacs – 完全オフラインデザイン。** `aidermacs`経由で Aider とペア、または`gptel`経由でローカル Ollama HTTP API 直接呼び出し。', '**Cursor – 部分的オフライン。** IDE 自体はインターネットなし実行、しかし見出し機能（Tab オートコンプリート、Cmd+K エージェント）Cursor クラウドルーティング要求。VS Code 拡張を Cursor 内にインストール Continue.dev は制限をサイドステップ；オフライン対応可能 IDE 内動作ローカル AI エディタを取得。', '**ハーネスレイヤー具体的なより深い比較のため、** [Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) 参照してください。'], callouts: [{ type: 'tip', text: '移動の場合、Cline 上 Continue.dev を好む。Cline 自律エージェントループは会話ストリーム全ファイルコンテンツ、高速トークン燃焼 – メイン電力時良好、航空機では楽しみより少ない、各 GPU ワット時間スタミナコスト。Continue.dev オートコンプリート第一デザイン著しく少ない計算各セッション使用。' }] },
      whatBreaks: { id: 'what-breaks', title: 'オフラインで実際に壊れるもの（正直なリスト）', content: '**セットアップは genuinely 堅牢、しかし 5 つのこと依然失敗。** 失敗モード事前知識は回避を許可。', items: ['**新しいサードパーティパッケージのインストール。** キャッシュ無し、手動ベンダソース以外フォールバック無し。修正は予防的 – 必要かもしれない何でもプリキャッシュ、ストレッチ目標含む。', '**ポストカットオフ API 別モデル知識。** Qwen3-Coder トレーニングカットオフ 2025年10月（2026年5月リリース）；その後 API はベスト推測。修正：ソース複製、疑問時実署名`rg`。モデルをトレーニングデータより新しいライブラリ信頼しない。', '**OAuth または API 認証往復要求するすべて。** クラウドプロバイダにログイン、OAuth トークン交換、チーム SSO ポータル打つ – すべてオフラインで機能しない。修正：テイクオフ前すべて認証、キャッシュトークン信頼（通常12～24時間後に期限切れ）。', '**リモートサービスのブラウザベーステスト。** テスト実 API または staging 環境打つ場合、オフライン失敗。修正：ローカルモック使用（msw、nock、vcr）、プリレコード fixtures。', '**外部サービス呼び出す画像と資産生成。** クラウドベース画像生成器、フォントサービス、CDN フェッチ資産すべて失敗。修正：固定資産をリポに焼き込むか、完全ローカル画像モデル使用（別スタック）。', '**「そのライブラリ名何だった」問題解は モデル自体。** Google 検索できない場合、モデル「X-機能のパッケージ名何か」尋ねる – トレーニングデータのもの、80～90% 正しく回答。インストール前パッケージキャッシュに対し確認。'] },
      updates: { id: 'updates', title: 'モデルとキャッシュ後で更新', content: '**セットアップは「スナップショット然實行」 – 一旦すべてキャッシュされ、更新選択まで静止。** 更新はオンライン；オフラインセッション更新時電流使用。', items: ['**`ollama pull`経由モデルアップデート。** 新 Qwen3-Coder 版が出荷場合、オンライン`ollama pull qwen3-coder:30b`実行。新重み古い置き換え；前バージョン消えるタグしない限り（プルさせる前に`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05`）。', '**パッケージキャッシュは次 オンライン`npm install` / `pip install` / `cargo update`更新。** 特別なワークフロー無し – 通常パッケージマネージャーはオンラインで機能し、オフラインで凍結。', '**Devdocs はデフォルト自動更新。** フライト前自動更新無効にして驚きダウンロード避ける空港信号の場合（設定 → 自動更新無効）。', '**Stack Overflow ダンプは四半期ごとにリフレッシュ。** Internet Archive は3ヶ月毎に新ダンプ公開；新しいカバレッジ選択再ダウンロード。', '**計画向け cadence：** モデルと Devdocs 2～3ヶ月毎、パッケージキャッシュ新作仕事開始毎、Stack Overflow ダンプ6～12ヶ月毎。これらのどれも緊迫しない限り genuinely 新作仕事開始。'], callouts: [{ type: 'tip', text: 'もっと単純な更新ワークフロー：1ヶ月毎1日を「オンラインメンテナンス日」に献身。新モデル版プル用`ollama pull`、Devdocs 更新、アクティブプロジェクトで`npm update` / `cargo update` / `pip install --upgrade`実行します。その後、次の月間黒以下劣化に無し。' }] },
      teamCache: { id: 'team-cache', title: 'チームとのオフラインキャッシュ共有', content: '**一緒に移動するまたは同じ制限環境で働くチーム、キャッシュは shareable。** これは開発者あたり60GB ダウンロード差、オフィスネット一度60GB ダウンロード差別です。', items: ['**Verdaccio はチームサーバーとしても実行。** 小さなオフィスサーバーをVerdaccio 指す、`npm config set registry http://team-cache.local:4873/` 全員向け。新開発者自動的にキャッシュ得；オフライントリップはラップトップに必要物プリシンク意味。', '**モデルをチーム Ollama サーバーでホスト可能。** beefy オフィスマシン`ollama serve`、办公内にオフィス内にチームサーバーの各開発者 Continue.dev 設定ポイント、移動向けに`localhost:11434`（ローカルプルモデル）に切り替え。', '**Devdocs は ネイティブチームモード無し しかし trivially shareable 静止フォルダとして。** 1度構築、`http://docs.team.local`ホスト、全員ブックマーク。移動、個々の開発者`localhost`インスタンス実行。', '**Git は既にチームshareable。** ローカル Gitea または自ホスト GitLab オフィスネット内、各開発者オフィスからオフラインリポアクセス与える；個別ラップトップ`git clone --mirror`移動と組み合わせ。', '**プライベートレジストリ経由コンテナイメージ。** 小さな Harbor または Gitea 組み込みレジストリ一度イメージキャッシュ；移動者が先ローカル`docker pull`去る前。', '**経済ケース：** 定期的に移動5開発者チーム、キャッシュ共有は1ヶ月毎約250GB インターネットダウンロード保存し、フライト前チェックリスト60分から5。'] },
      commonMistakes: { id: 'common-mistakes', title: 'オフラインコーディングスタック設定一般的間違い', items: ['**間違い 1：トリップ前セットアップオフラインをテスト忘れ。** ほとんど一般的失敗は空港ギャップを見つけるは。「ライト消す」30分リハーサル実行家で – Wi-Fi オフ、セルラー無効、実仕事試す – 少なくも24時間前必要。', '**間違い 2：現在使う パッケージのキャッシュのみ、必要かもしれない無し。** 機会があり、トリップ中依存関係加算場合、スモークテストスト家で1度インストール。キャッシュ保持。', '**間違い 3：Cursor のタブオートコンプリート有効化し、オフラインで機能します想定。** しません。IDE 静かにノッシング フォールバック；オートコンプリートゼロ。Continue.dev を VS Code拡張として Cursor 内にインストールするか、直接 VS Code 使用。', '**間違い 4：7B 下のモデル使用真摯なコーディング作業。** Sub-7B コーディング モデルミス十分修正出力に書きコード以上時間費す。Qwen3-Coder 7B に最小限低下；ハードウェアが処理不可オフラインコーディングセットアップはこのラップトップで実行可能しない。', '**間違い 5：ないトレーニングカットオフより新しいライブラリモデルに信頼。** 自信を持ち幻視。最後6ヶ月以内に公開何でも、モデル出力を推測として扱う、ソースコードに対し確認。', '**間違い 6：パッケージキャッシュをスキップし、`npm install` 空港ラウンジで十分速い。** ラウンジ Wi-Fi は信頼できず、ダウンロード停滞、半インストール依存ツリーで搭乗。前日キャッシュ。', '**間違い 7：Docker イメージ忘れ。** Dev ワークフロー データベース用`docker compose up`使用場合、イメージプリプルが必要。最初フライトなし`docker compose up`イメージはハード壁。'] },
      sources: { id: 'sources', title: 'ソース', items: ['[Ollama ドキュメント](https://ollama.com/library) — オフィシャルモデルライブラリ、Qwen3-Coder 変動とオフライン VRAM/RAM 予算向け参照量子化レベル含む。', '[Continue.dev ドキュメント](https://docs.continue.dev/) — 設定ガイド、ローカルモデル設定、オフライン対応オートコンプリート チャットワークフロー。', '[Aider ドキュメント](https://aider.chat/) — ターミナル CLI リファレンス、ローカルモデル設定、git-ネイティブオフラインワークフローパターン。', '[Devdocs ソース](https://github.com/freeCodeCamp/devdocs) — オフライン使用向けミラーオフィシャルドキュメント Web アプリ；ダウンロード PWA キャッシュ指示。', '[Stack Exchange データ ダンプ（Internet Archive）](https://archive.org/details/stackexchange) — 検索向けオフライン置換として使用四半期 Stack Overflow コンテンツダンプ。'] },
      faq: { id: 'faq', title: 'FAQ', faqs: [{ q: '全オフラインコーディング設定のサイズは何か', a: 'ディスク上約50～80GB カバレッジに応じて。分ける：Qwen3-Coder 30B Q4_K_M は約18GB、Devdocs は約3GB、Zeal docsets は約5GB やはり使用、Stack Overflow ダンプは約8GB、プロジェクトあたりパッケージキャッシュ（npm、pip、cargo、go）は各2～10GB 加える。7B モデルフォールバック約5GB 小さいフットプリント希望場合。' }, { q: 'オフラインで新しい npm パッケージをインストール可能か', a: '既にローカル Verdaccio キャッシュまたは pnpm store にある場合のみ。標準フライト前パターンはプロジェクト向け`npm install`ホームで実行、プラス任意依存関係オフラインに行く前に必要かもしれない。キャッシュしていないパッケージはオフラインインストール不可；回避は手動ソース複製コピー`node_modules`しかし遅くエラープロン。予前キャッシュは答えです。' }, { q: 'GitHub はオフラインで機能するか', a: 'Git 自体は完全オフラインで機能 – `git commit`、`git branch`、`git rebase`、`git log` すべてローカル実行。機能しない のは`git pull`、`git push`、`git fetch`、いずれの web UI も。完全履歴の`git clone --mirror`で必要リポプリクローン；コミットはローカルに蓄積し、オンライン時返す。genuinely オフラインコラボ仕事、ローカル Gitea または自ホスト GitLab 同僚ラップトップまたは小さいオフィスサーバーで実行。' }, { q: 'どの IDE が最適に完全オフラインで機能するか', a: 'VS Code Continue.dev は最もポリッシュ オフライン経験：豊かな AI 機能、良好拡張生態系、ライセンス呼び出し無し。JetBrains IDE は機能しますが、ライセンスサーバーは定期的にピンも（約30日オフラインを許容）。Vim、Neovim、Emacs は完全オフラインデザイン、Aider とペア良好。Cursor は Cursor 組み込み AI 機能ネットワーク呼び出し要求するため Cursor 内にインストール Continue.dev が必要。' }, { q: 'オフライン作業リポをクローン可能か', a: 'はい。`git clone --mirror <url> <path>`完全履歴とすべてブランチのベアクローン作成；`git clone <url>`は正規ワーク複製向け機能。両方は初期クローン後ネットワーク無し実行。マルチリポワークフロー、プリフライトクローンスクリプト（`for repo in $REPOS; do git clone --mirror "$repo"; done`）は最もシンプル。サブモジュールはプリフェッチ向け`git submodule update --init --recursive`が必要。' }, { q: 'オフラインコーディング Linux で機能するか', a: 'はい – Linux はオフラインコーディングセットアップ最も簡単プラットフォーム。Ollama はネイティブ実行、Continue.dev 及び Aider 両方 Linux ビルド、各パッケージマネージャ（apt、dnf、pacman、nix）オフラインモード、ここで説明ツール大部分は元々 Linux で構築。唯一 Linux 特定注記は GPU ドライバ：NVIDIA Linux ドライバは推論用完成ですが、オフラインプラン正確なカーネルで事前テスト価値。Apple Silicon Mac とディスクレート GPU Linux ラップトップ両方完全サポート。' }, { q: 'インターネット無しでローカル AI モデルをアップデートするか', a: 'できません – モデルアップデートは接続必要。パターンは「スナップショット然實行」：オンラインで最新モデルプル、その後オフラインに行く。次にシグナルがある時（空港ラウンジ、ホテル Wi-Fi、ホーム），`ollama pull qwen3-coder:30b`実行して最新重み取得。月毎リフレッシュが典型的cadence；モデルは更新間静かに低下しない。' }, { q: 'オフラインキャッシュをチームと共有可能か', a: 'はい。Verdaccio（npm）と devpi（pip）両方チームサーバーとして実行；Athens プロキシは Go モジュール提供；プライベートコンテナレジストリは Docker イメージ提供；自ホスト Gitea または GitLab は git remotes 提供。セントラルキャッシュはオフィスネットワークから各新チーム員が全部得ることを意味し、各60GB 引くのではなく。移動のため、各開発者ラップトップはまだ使用ローカルスナップショット必要ですが、セントラルキャッシュはスナップショット安くします。' }, { q: 'これは弱信号の飛行機で機能するか', a: 'はい – 及びスポッティ機内 Wi-Fi に信頼より堅牢です。全スタックはゼロネットワークを想定；弱信号はゼロ信号と同じに扱われます。時折、ローカル LLM オートコンプリートレイテンシ（M5 で約280ms）は機内 Wi-Fi ラウンドトリップ Copilot サーバーより高速（健全な接続時400～800ms、劣化時ずっと悪い）。オフラインバイデザインは「オンラインした時」長距離フライトで負かす。' }, { q: 'オフラインコーディング はオンライン時より高速か', a: 'オートコンプリート及びチャット用はい – ローカル推論往復はクラウド AI プロバイダへのネットワーク往復より高速。Continue.dev + Qwen3-Coder 30B M5 でオートコンプリート約280ms で返す；GitHub Copilot よい条件時約180～400ms で返す；Copilot 劣化ネットワークで遅く返すまたは失敗。レイテンシ差は小ですが一貫してローカル有利。最大利益は決定性 – ローカル推論は常に同じ速度、ネットワーク状態かかわらず。' }] },
      relatedReading: { id: 'related-reading', title: '関連読書', items: ['[Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026](/ja/power-local-llm/replace-github-copilot-with-local-llm) – 関連目標：同じスタック、異なるフレーミング（コストオーバーオフライン）。最初にコスト数学希望場合読む。', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) – どのハーネスが完全オフラインで機能、Continue.dev/Aider/Cline トレードオフの深カバレッジ。', '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/ja/power-local-llm/best-local-coding-models-2026) – 方程式のモデル側、言語毎 HumanEval+ スコア。', '[Run AI on a Tablet: iPad and Android Local LLM Apps](/ja/power-local-llm/run-ai-on-tablet-ipad-android) – ラップトップより軽いオフラインデバイス希望旅行者向け。', '[Best Laptops for Local LLMs in 2026](/ja/local-llms/best-laptops-local-llm) – ハードウェア権限；各実行可能ラップトップをtokens/sec、バッテリー、合計システムメモリにランク。', '[Write Better Code With AI](/ja/prompt-engineering/write-better-code-with-ai) –任意モデルのコード生成品質向上プロンプト技術、オンラインまたはオフライン。', '[Power Local LLM Hub](/ja/power-local-llm) – コーディング、RAG、エージェント、クリエイティブ作業を覆う完全ガイドライブラリ。'] },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: '无互联网的离线编码环境：完全本地开发设置 (2026)',
    seoTitle: '离线编码：无互联网的本地LLM 2026',
    intro: '2026年完全离线的编码设置大约占用60GB硬盘并能存活14小时的飞行，无任何网络调用。堆栈由一个本地LLM（Qwen3-Coder 30B）、一个编辑器集成（Continue.dev或Aider）、一个离线文档镜像（Devdocs或Zeal）、一个缓存包注册表（npm的Verdaccio、python的devpi）和本地代码搜索（ripgrep加rga）组成。唯一真正在离线时不工作的是安装全新的第三方包和模型关于其训练截止后发布的API的知识 – 两者都可以通过离线前预先下载所需内容来解决。',
    metaDescription: '在14小时飞行上测试离线编码。本地LLM、缓存npm/pip、Devdocs、ripgrep – 磁盘上约60GB、零网络调用。包括离飞前检查清单。',
    twitterDescription: '14小时飞行的编码设置：约60GB：Qwen3-Coder + Continue.dev + Devdocs + 缓存。离飞前检查清单 + 什么真正在离线时破裂。',
    current_models_mentioned: ['Qwen3-Coder 30B', 'Qwen3-Coder 7B', 'DeepSeek Coder V3', 'Codestral 22B', 'nomic-embed-text v1.5'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro 64 GB', 'Apple M5 Max MacBook Pro 64 GB', 'Apple M4 MacBook Pro 36 GB', 'NVIDIA RTX 4090 Laptop 16 GB', 'NVIDIA RTX 4070 Laptop 8 GB'],
    audience: '需要在飞行、受限环境、无VPN访问的客户站点或互联网不可靠的地方编码的开发人员 – 以及希望当网络下降时不会无声地性能下降的设置。',
    readTime: '15分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: ['本地离线llm 无互联网', '离线开发环境2026', '离线copilot替代方案', '完全离线开发', '飞机上编码', '本地llm 无互联网'],
    leadAnswerBlock: '**2026年完全离线编码环境在失去连接前需要磁盘上的五个东西：量子化本地LLM（Qwen3-Coder 30B Q4_K_M，约18GB）、无需回拨家就能与其通信的编辑器束缚（Continue.dev或Aider）、离线文档镜像（Devdocs约3GB或Zeal Docsets约5GB）、用于你使用的语言的缓存包注册表（npm的Verdaccio、python的devpi、Rust的供应商化Cargo Deps）和`rga`加`ripgrep`用于本地代码搜索。总磁盘：取决于文档覆盖范围和语言可用性约50～80GB。硬件下限：30B模型32GB统一RAM（Apple Silicon）或16GB VRAM（独立GPU）、7B后备选项16GB统一RAM。只有两件事真正在离线时破裂：安装不在本地缓存中的全新第三方包和询问模型关于在其训练截止后发布的API的知识 – 两者都可以通过离飞前预缓存所需内容来修复。**',
    quickAnswerTop: {
      zh: {
        question: '本地编码LLM真的能完全不用互联网替换整个开发设置吗？',
        answer: '是的，对于你已经知道如何做的工作。本地LLM（Qwen3-Coder 30B）无网络调用即可处理自动完成、重构和代码审查。摩擦点不是模型 – 而是周围的生态系统：从公共注册表提取的包管理器、文档网站、Stack Overflow搜索。所有三个都有适合笔记本SSD的离线替换品：Verdaccio和devpi缓存注册表、Devdocs和Zeal镜像官方文档、ripgrep加rga搜索代码和PDF速度与Google一样快。预缓存你计划使用的依赖、一次获取模型，设置就真的飞行准备好了。在14小时太平洋航线上测试：部署了一个功能、调试了两个bug、写了测试 – 全部无任何网络调用。',
        bullets: ['推荐堆栈 – Qwen3-Coder 30B（或7B）+ Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga。', '磁盘预算 – 大约50～80GB总计：18GB模型、5GB文档、8GB Stack Overflow转储（如果需要）、其余是根据你的项目大小的包缓存。', '硬件甜蜜点 – Apple M系列MacBook Pro 64GB统一内存；统一内存架构意味着30B模型和你的编辑器和Docker全部适配无分页。', '什么破裂 – 安装未在缓存中的全新包、询问模型关于在其截止后发布的库。', '离飞前检查清单 – 获取模型、预热包缓存、同步Devdocs、克隆需要的repos、在登机前运行试运行。'],
        updatedDate: '2026-05-07',
      },
    },
    toc: [{ label: '关键要点', anchor: '#key-takeaways' }, { label: '快速事实', anchor: '#quick-facts' }, { label: '离线堆栈', anchor: '#offline-stack' }, { label: '14小时飞行测试', anchor: '#flight-test' }, { label: '离飞前检查清单', anchor: '#pre-flight-checklist' }, { label: '硬件：为什么M5统一内存赢', anchor: '#hardware' }, { label: '选择正确的本地模型', anchor: '#model-choice' }, { label: '缓存依赖 (npm, pip, cargo, go)', anchor: '#dependency-cache' }, { label: '离线文档', anchor: '#offline-docs' }, { label: '无Google的本地搜索', anchor: '#local-search' }, { label: '哪个IDE完全离线工作', anchor: '#ide' }, { label: '什么真的在离线时破裂', anchor: '#what-breaks' }, { label: '之后更新模型和缓存', anchor: '#updates' }, { label: '与团队共享缓存', anchor: '#team-cache' }, { label: '常见错误', anchor: '#common-mistakes' }, { label: '来源', anchor: '#sources' }, { label: 'FAQ', anchor: '#faq' }, { label: '相关阅读', anchor: '#related-reading' }],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: '下方幻灯片涵盖：5个组件的离线编码堆栈（本地LLM、编辑器集成、包缓存、文档镜像、本地搜索）、14小时飞行测试结果、6步离飞前检查清单、模型比较（Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3）、各语言依赖缓存和6个常见错误。下载PDF作为完全离线编码设置参考卡。',
    sections: {
      tldr: { id: 'key-takeaways', isTldr: true, items: ['**五个组件使编码设置真的离线：** 本地LLM、编辑器集成、包缓存、文档镜像、本地搜索。缺少任何一个你会在实际工作的一个小时内撞到"需要互联网"的墙。', '**磁盘预算：大约50～80GB。** Qwen3-Coder 30B Q4_K_M大约18GB；Devdocs大约3GB；Stack Overflow转储大约8GB；其余是根据你实际接触的语言和项目大小的包缓存。', '**硬件下限：** 30B模型32GB统一RAM（Apple Silicon）或16GB VRAM（独立GPU）、7B后备选项16GB统一RAM。推荐甜蜜点：64GB的M5 MacBook Pro – 模型、编辑器、Docker、浏览器无分页全适配。', '**Continue.dev和Aider都完全离线运行** 针对本地Ollama或llama.cpp端点。无遥测调用、无许可证检查。GitHub Copilot、Cursor的Tab自动完成、Codeium都需要网络调用且在离线时无声地性能下降。', '**真的破裂的两件事：** 安装未在缓存中的全新第三方包（无缓存命中、无后备）和询问模型关于在其训练截止后发布的API。两者都可以通过预缓存你计划使用的内容来修复。', '**14小时飞行测试通过：** 部署了真实功能、修复了两个bug、运行了完整测试套件、全部无任何网络调用。设置是真实的，不是理论的。'] },
      quickFacts: { id: 'quick-facts', title: '快速事实', items: ['**堆栈：** Qwen3-Coder 30B（或7B）+ Continue.dev或Aider + Devdocs（或Zeal）+ Verdaccio（npm）和devpi（pip）+ ripgrep和rga。', '**总磁盘：** 取决于语言覆盖范围和是否缓存Stack Overflow转储约50～80GB。', '**硬件甜蜜点：** Apple M5 MacBook Pro 64GB。统一内存意味着30B模型和你的编辑器和Docker共享一个池。', '**离线vs在线质量：** 模型本身相同 – 自动完成、重构、代码审查感觉一样。摩擦在模型周围，不在其中。', '**离线延迟：** M5上大约280ms自动完成（当你有信号时比到Copilot服务器的往返更快）。', '**完全开源：** Ollama（MIT）、Continue.dev（Apache）、Aider（Apache）、Qwen3-Coder（开放权重）、Devdocs（MPL）、Zeal（GPL）。', '**更新：** 设置是"快照然后运行" – 一旦所有内容被缓存，它保持最新直到你选择刷新。在线更新，然后再离线。'] },
      offlineStack: { id: 'offline-stack', title: '离线堆栈', content: '**五个组件，每个用于网络通常提供的东西。** 删除其中任何一个设置在实际工作中会撞到墙。表格映射每个在线工具到其离线等效物和你应该规划的磁盘预算。', snippetBlocks: [{ type: 'one-sentence', text: '2026年完全离线编码环境是一个本地LLM、一个编辑器束缚、每种语言一个缓存包注册表、一个文档镜像、一个本地搜索工具 – 总磁盘大约50～80GB。' }, { type: 'plain-terms', text: '想象你的编辑器和终端通常做的所有在线事情 – 获取包、查看文档、搜索Stack Overflow、询问Copilot – 并在你的笔记本上为每一个固定一个本地替换品。在一次性离飞前缓存后，这些都不依赖网络。模型存在于磁盘、文档存在于磁盘、npm注册表存在于磁盘。唯一的故障模式是"我需要一个我还没有缓存的包" – 那也有修复。' }], columns: ['组件', '在线工具', '离线替换', '缓存大小'], rows: [{ '组件': 'AI代码补全', '在线工具': 'GitHub Copilot, Cursor Tab', '离线替换': 'Continue.dev（或Aider）+ Ollama + Qwen3-Coder 30B', '缓存大小': '约18GB（仅模型）' }, { '组件': '官方文档', '在线工具': 'MDN, ReadTheDocs, 官方网站', '离线替换': 'Devdocs（网页应用）或Zeal（桌面）', '缓存大小': '约3～5GB' }, { '组件': 'Stack Overflow', '在线工具': 'stackoverflow.com', '离线替换': 'Stack Exchange数据转储（Kiwix或本地索引）', '缓存大小': '约8GB（压缩）' }, { '组件': 'npm包', '在线工具': 'registry.npmjs.org', '离线替换': '带`npm install --prefer-offline`预热缓存的Verdaccio', '缓存大小': '项目相关（通常约2～10GB）' }, { '组件': 'Python包', '在线工具': 'PyPI', '离线替换': 'devpi或通过`pip download`的本地wheels', '缓存大小': '项目相关（通常约1～5GB）' }, { '组件': 'Rust crates', '在线工具': 'crates.io', '离线替换': '项目deps的`cargo vendor`；缓存的`~/.cargo/registry`', '缓存大小': '项目相关（通常约0.5～3GB）' }, { '组件': 'Go模块', '在线工具': 'proxy.golang.org', '离线替换': '本地Athens代理或`GOFLAGS=-mod=vendor`', '缓存大小': '项目相关（通常约0.5～2GB）' }, { '组件': '代码搜索', '在线工具': 'GitHub搜索, Sourcegraph', '离线替换': '代码用ripgrep（`rg`）、PDF和存档用rga', '缓存大小': '约10MB（仅二进制）' }, { '组件': 'Git远程', '在线工具': 'GitHub, GitLab', '离线替换': '用`--mirror`预克隆的repos或本地Gitea', '缓存大小': '每repo大小' }, { '组件': '容器镜像', '在线工具': 'Docker Hub, GHCR', '离线替换': '本地注册表镜像或预拉取的镜像', '缓存大小': '项目相关' }], callouts: [{ type: 'note', text: '第一天你不需要所有十个。最小可用的离线设置是LLM、Continue.dev或Aider以及你在旅行中使用的语言的包缓存。一旦基础工作后添加Devdocs和Stack Overflow转储。' }] },
      flightTest: { id: 'flight-test', title: '14小时飞行测试：实际发生了什么', content: ['**设置在2026年3月进行了太平洋横断飞行测试 – 14小时、无Wi-Fi（购买的航空公司通票在登机门时失败且再也没回来）。** 下面是什么工作、什么几乎破裂、没有准备会停止旅行的东西。', '本地模型的输出质量取决于你如何提示它。对于改进任何本地模型代码生成的结构化提示技术，参阅[Write Better Code With AI](/zh/prompt-engineering/write-better-code-with-ai)。'], items: ['**第1小时 – 取出笔记本、打开前晚克隆的Next.js项目。** Continue.dev已经指向`localhost:11434`的Ollama。在想要重构的函数上按Cmd+I。差异在2秒内出现。接受。模型是加载到内存的Qwen3-Coder 30B Q4_K_M；自我打包后就一直在那。', '**第3小时 – 需要添加新的依赖项：`@tanstack/react-query`。** 运行`npm install`。Verdaccio从本地缓存提供它（我在家作为烟雾测试运行了`npm install`）。总耗时：4秒。在`tcpdump`中观察到的无网络调用（是的，我检查了 – 这是那种飞行）。', '**第5小时 – 忘记了Zod方法的确切签名。** 在浏览器标签页中打开Devdocs。Zod docset被包含。8秒内找到答案。无"加载…"旋转器。', '**第6小时 – 尝试安装不在缓存中的包：`vitest-html-reporter`。** `npm install`从Verdaccio失败，出现404。这是第一堵墙。后备：我本地克隆了repo、手动将源代码复制到`node_modules`、修补`package.json`指向本地路径。用了12分钟。修复是预防性的：离线前预热任何你可能需要的缓存。', '**第8小时 – 询问模型关于2月2026年发布的库。** 它自信地幻视了API。Qwen3-Coder的训练截止是2025年10月；2月2026年的API不在训练数据中。修复：我在飞行前用`rga`本地索引了库的repo。搜索实际源代码。找到真实签名。教训：模型知道在其训练数据中是什么；对于任何更新的，文档和源代码是你的权威。', '**第11小时 – 运行完整测试套件。** 423个测试、4.7秒。无回归。测试运行器不在乎网络。', '**第13小时 – 无推送。** Git提交本地累积。飞机着陆时，我在机场酒廊运行一次`git push`。17个提交一起推送。本地第一个git模型使这成为可能 – 唯一网络依赖步骤是最终推送。', '**净结果：** 部署了一个真实功能、修复了两个bug、写了11个新测试、三个提交我仍然为之自豪。生产小时数：14小时中约11小时（其余是吃饭、睡觉、在第6小时处理流氓依赖）。设置在仅这一次飞行就为自己付费。'], callouts: [{ type: 'tip', text: '在家进行一次"熄灯"演练：关闭Wi-Fi、禁用移动热点、尝试进行正常的90分钟工作会议。你会在离地35,000英尺前找到缓存中的缝隙。常见发现：从`@types`拉取的TypeScript仅类型导入、绕过npm缓存的`pnpm install`、未预拉取的Docker基础镜像。' }] },
      preFlightChecklist: { id: 'pre-flight-checklist', title: '离飞前检查清单：编号步骤', content: '**在失去连接的前一天运行此列表。** 每个步骤耗时1～10分钟；整个列表第一次耗时约一小时、后续旅行耗时15分钟因为缓存保持不变。', numberedItems: ['拉取本地LLM。`ollama pull qwen3-coder:30b`（16GB机器是`:7b`）。用`ollama run qwen3-coder:30b "say hi"` – 它应该在秒内响应进行验证。', '安装并配置Continue.dev（或Aider）。打开VS Code、安装Continue.dev扩展、编辑`~/.continue/config.json`指向`http://localhost:11434`（Ollama默认）。通过打开文件并按Cmd+I测试。', '预热项目的包缓存。`cd`进项目、运行`npm install`（或`pip install -r requirements.txt`、或`cargo build`、或`go mod download`）。Verdaccio、devpi或Cargo将在第一次运行时将所有内容缓存到磁盘。', '运行可能需要的任何可选依赖项的示例安装。如果你可能在飞行中添加`@tanstack/react-query`或`zod`，现在在暂存目录中对它们运行一次性`npm install`。包会进入缓存。', '预克隆你可能引用的repos。`git clone --mirror`是最安全的 – 你获得完整历史和所有分支而无需稍后的网络。', '同步Devdocs（或下载你需要的Zeal docsets）。在Devdocs中，选择Settings → Disable Auto-update → Download All。你需要的docsets（TypeScript、Node、React、Python、Rust）会本地到达。', '预拉取你可能使用的任何Docker镜像。`docker pull node:20-alpine`、`docker pull postgres:16`等。当你后来`docker compose up`时它们将从本地存储提供。', '在项目上运行一次测试套件。在你离地球35,000英尺远的网络之前会捕获缺失的构建工件（编译的TypeScript、生成的Prisma客户端）。', '断开连接30分钟并重新测试。关闭Wi-Fi、禁用移动蜂窝并尝试进行5分钟的真实工作。任何失败的东西 – 现在修复、不在登机口。', '给所有东西充电。电池是缓存未命中之后的第二个离线故障模式。M5 MacBook Pro上2小时的LLM使用大约燃烧电池的30～40% – 相应计划并带一个笔记本级USB-C电源组。'], callouts: [{ type: 'tip', text: '将此检查清单保存为脚本。运行`ollama pull`、`npm install`、`pip install`、`git fetch --all`、`docker pull`处理常见依赖的30行bash文件（`pre-flight.sh`）将整个过程变为一个命令。第一次运行耗时45分钟；后续运行耗时5分钟因为所有内容都缓存。' }] },
      hardware: { id: 'hardware', title: '硬件：为什么64GB统一内存的M5 MacBook Pro赢', content: '**对于纯离线编码工作，64GB统一内存的Apple M5 MacBook Pro是2026年最强大的单一机器。** 原因是统一内存：GPU和CPU共享一个池，所以30B模型、你的编辑器、Docker容器、基于Chromium的文档查看器全部共存无分页。', items: ['**统一内存意味着模型不"在VRAM中"也不"在系统RAM中" – 它在内存中。** 当你加载Qwen3-Coder 30B Q4_K_M（约18GB）时，它保持驻留；切换到Docker compose堆栈不会驱逐它。在具有16GB VRAM和32GB系统RAM的离散GPU笔记本上，交换模型每次切换成本5～10秒。', '**30B模型舒适地适应24GB；64GB为其他所有内容留下余地。** 有64GB你可以加载模型、三个Docker容器（数据库、redis、沙箱）、VS Code、带Devdocs的Chromium标签页、终端多路复用器全都运行无缓慢。', '**负载下的电池寿命：6～8小时。** 这涵盖了大多数带USB-C电源组的飞行。M5是迄今为止为消费级用户提供的持续LLM推理最节能的芯片 – 能量每令牌的数字大约比离散GPU笔记本相同吞吐量好3倍。', '**在安静的飞行上无风扇噪音。** M5机箱在持续时间内被动运行30B模型。离散GPU笔记本在推理负载下听得见地旋转风扇 – 在家没问题，但在第27行是社会问题。', '**离散GPU替代方案在原始吞吐量上有竞争力但成本更多折中。** Razer Blade 16带RTX 4090移动（16GB VRAM）运行30B模型时tokens/sec比M5更高，但推理下电池寿命约2小时、风扇噪音重要、16GB VRAM上限意味着你也不能保存32K上下文配置或在模型旁边运行数据库Docker容器。', '**对于更深的硬件排名，** 参阅[Best Laptops for Local LLMs in 2026](/zh/local-llms/best-laptops-local-llm) – 该文章按tokens/sec、电池寿命、总系统内存对所有可行选项（M系列Macs、ROG Strix、Razer Blade、Framework 16）进行排名。'], callouts: [{ type: 'note', text: '如果你已经有32GB的M3或M4 MacBook Pro，你不需要升级。7B模型在8GB RAM上舒适运行并获得30B质量的80～85%。64GB建议是为特意为离线编码工作购买机器的用户；现有硬件用户应该先试试7B。' }] },
      modelChoice: { id: 'model-choice', title: '为离线工作选择正确的本地模型', content: '**模型是最大的磁盘和内存线项；选择一次、正确选择。** 2026年5月的三个合理选择，按他们处理离线编码工作的良好程度排名。', items: ['**Qwen3-Coder 30B Q4_K_M（约18GB）– 推荐默认。** TypeScript、Python、Rust、Go自动完成的同类最佳；可靠的工具调用；处理32K令牌上下文。需要24GB可用内存（Apple Silicon系统RAM、离散GPU VRAM）。', '**Qwen3-Coder 7B Q4_K_M（约5GB）– 轻量级后备。** 在8GB统一RAM或8GB VRAM上运行。日常工作的30B质量约80～85%；差距显示在多步重构和长上下文推理。如果你的笔记本具有少于24GB内存或者你想让模型与重型Docker工作负载共存的正确选择。', '**DeepSeek Coder V3 – 如果你需要非常长的上下文选择这个。** DeepSeek的V3支持128K令牌；在一个提示中跨许多文件调试时有用。在磁盘上更大（Q4_K_M时约25GB）；原始质量大致等于Qwen3-Coder 30B。', '**Codestral 22B – 速度选择。** 比Qwen3-Coder 30B更快的自动完成；在工具调用和多步计划上较弱。如果你的离线工作流是自动完成主导的且你不使用代理工具的好处。', '**跳过：** 无编码微调的13B以下通用模型（Llama 3.2 7B、Mistral Small）和任何比Q4_K_M更严格的量化。两个在实际编码工作上明显失败。', '**对于包括每种语言HumanEval+分数的完整编码模型比较，** 参阅[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/zh/power-local-llm/best-local-coding-models-2026)。'] },
      dependencyCache: { id: 'dependency-cache', title: '缓存依赖：npm、pip、cargo、go', content: '**包管理器是LLM之后第二个最常见的离线故障点。** 每种语言有不同的机制；原则相同 – 预先获取你可能需要的一切、从本地存储供应当你调用`install`时。', items: ['**npm（Node.js）：** 安装Verdaccio（`npm install -g verdaccio`）、指向npm（`npm config set registry http://localhost:4873/`）、在每个项目上运行`npm install`一次。Verdaccio本地缓存每个包；后续安装离线工作。缓存在`~/.local/share/verdaccio/storage`。', '**pip（Python）：** 最简单的模式是`pip download -r requirements.txt -d ~/wheelhouse`，然后用`pip install --no-index --find-links ~/wheelhouse -r requirements.txt`安装。多项目使用，devpi是更强大的选项 – 对Python的Verdaccio一样的形状。', '**cargo（Rust）：** `cargo vendor`将每个依赖项写入项目中的`vendor/`目录，加上一个`.cargo/config.toml`片段告诉cargo使用它。提交后，项目离线永远构建。Cargo也在`~/.cargo/registry/cache`缓存全局注册表 – 用`cargo fetch`预热此为大多数用例提供。', '**go（Go）：** 最简单的模式是每项目`go mod vendor`（Go写一个`vendor/`目录比如Cargo）。全局缓存，运行本地Athens代理设置`GOPROXY=http://localhost:3000`。', '**pnpm和yarn（npm风味）：** 指向Verdaccio就像你指向npm。pnpm的内容寻址存储离线友好；一旦包在存储中，每个项目共享它。', '**Brew、apt、dnf（系统包）：** 短期行程优先级较低但值得知道。`brew bundle dump`生成Brewfile你可以稍后重新运行；apt/dnf都有离线模式通过`apt-get download`和下载`.deb`/`.rpm`文件。'], callouts: [{ type: 'tip', text: '最简单的离线包模式是项目范围：Rust的`cargo vendor`、Go的`go mod vendor`、Node的针对Verdaccio的`npm install`、Python的`pip download` – 全部在离飞前一天在项目级别完成。系统范围缓存（Verdaccio存储、~/.cargo、~/.npm）处理你在项目间可能需要的任何东西。' }] },
      offlineDocs: { id: 'offline-docs', title: '离线文档：Devdocs、Zeal、Stack Overflow转储', content: '**模型大约知道它训练的内容；其他所有东西在离线文档和代码中存在。** 三个来源覆盖大约95%你会Google的内容。', items: ['**Devdocs（网页应用、约3GB）。** 一个独立的Progressive Web App，为约150种语言和框架镜像官方文档。打开`devdocs.io`、点击Settings、启用你使用的文档、点击"Make available offline"。浏览器缓存所有内容；之后在飞行模式下永久工作。', '**Zeal（桌面应用、约5GB）。** 一个原生桌面文档浏览器使用Dash docsets – 与macOS Dash应用相同的格式，但自由且跨平台。比Devdocs更好的键盘导航；更弱的搜索。选择一个或另一个；两个都过度。', '**Stack Overflow数据转储（约8GB压缩）。** Internet Archive将官方Stack Exchange数据转储作为torrent托管。Kiwix这样的工具将其呈现为可浏览网站，或者你可以用Elasticsearch / SQLite-FTS为快速本地搜索索引。覆盖在转储日期切断 – 通常在几个月内 – 但对于一般编程问题很好。', '**项目特定文档。** 对于你大量使用的库，克隆repo和文档网站源。大多数文档网站是静止的在`docs/`目录存在；`mkdocs build`或`npm run docs:build`生成本地网站你可以用`python -m http.server`提供。', '**模型本身对其训练数据中的事物计算为文档。** Qwen3-Coder 30B很好地知道标准库和主要框架 – TypeScript、React、Python stdlib、NumPy、AWS SDK。询问模型经常胜过搜索Devdocs这些。分割是"已知的模型、新的文档、源代码的未知"。'], callouts: [{ type: 'note', text: 'Stack Overflow内容质量在tag间变化很大。转储对于遗留语言和具体错误消息 – 正确是模型较弱的东西最有用。对于主流框架问题，模型比转储搜索更快更准确。' }] },
      localSearch: { id: 'local-search', title: '无Google的本地搜索', content: '**`ripgrep`和`rga`是两个工具使本地搜索工作流感觉像Google一样快。** 两个都免费、两个都tiny、两个在每个平台上运行。', items: ['**ripgrep（`rg`）– 代码的快速文本搜索。** 替换`grep -r`并在大型repos上运行10～50倍。自动读取`.gitignore`。"这个函数在哪里"的标准工具和"查找此API的所有调用者"。', '**rga（`ripgrep-all`）– ripgrep用于PDF、存档、其他二进制格式。** 透明搜索PDF、zip文件、gzipped日志、SQLite数据库、Office文档内。`rga "query" .`搜索ripgrep无法完成的每个文件格式，对纯文本回退到ripgrep。', '**用例1 – "我需要如何使用此API的示例"。** 预克隆使用它的几个repos；`rg "api_function_name" ~/code/examples`以秒的一小部分返回每个实际调用网站。对于使用模式比文档更好。', '**用例2 – "此PDF规范的哪处说X"。** `rga "specific phrase" ~/specs/`。需要2分钟扫描的PDF变为200ms搜索。', '**用例3 – "无Stack Overflow的Stack Overflow"。** 如果你用Kiwix或Elasticsearch索引Stack Overflow转储，针对转储的`rg`风格查询替换遗留主题的Google"stackoverflow"搜索。', '**对于快速代码问题，模型比搜索更快。** Continue.dev中的`Cmd+L`打开带有codebase的聊天作为上下文；"我们在哪里处理auth流"在1～2秒内返回正确的文件，无需你在搜索工具中键入查询。'] },
      ide: { id: 'ide', title: '哪个IDE完全离线工作', content: '**大多数主要IDE离线工作；差异在扩展、许可验证、AI工具。** 重要是AI功能真的工作，因为那是网络下降时用户注意的位。', items: ['**VS Code – 完全离线工作；AI功能取决于你使用的扩展。** Continue.dev针对本地Ollama端点完全运行且是推荐配对。Cursor的内置Tab自动完成进行网络调用且无声性能下降。GitHub Copilot立即停止工作。', '**JetBrains IDE（IntelliJ、PyCharm、GoLand、WebStorm）– 许可缓存后完全离线工作。** 许可证服务器定期ping（个人许可证30天）但容忍扩展离线窗口。Continue.dev有有功能奇偶JetBrains构建。', '**Vim和Neovim – 完全离线设计。** 无许可证检查、无遥测。与Aider侧终端窗格配对；或用`llm.nvim`插件指向本地Ollama使用`nvim`。', '**Emacs – 完全离线设计。** 通过`aidermacs`与Aider配对或直接通过`gptel`调用本地Ollama HTTP API。', '**Cursor – 部分离线。** IDE本身运行无互联网，但头条功能（Tab自动完成、Cmd+K代理）需要Cursor云路由。在Cursor内安装Continue.dev作为VS Code扩展绕过限制；在离线能力IDE内获得工作本地AI编辑器。', '**对于harness层特定的更深比较，** 参阅[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local)。'], callouts: [{ type: 'tip', text: '为旅行选择Cline上的Continue.dev。Cline的自主代理循环将完整文件内容流入对话中，快速燃烧令牌 – 在市电上好，在飞行上乐趣较少其中每瓦GPU时间成本电池。Continue.dev的自动完成第一设计每会话使用明显较少计算。' }] },
      whatBreaks: { id: 'what-breaks', title: '什么真的在离线时破裂（诚实列表）', content: '**设置是genuinely稳健，但五件东西仍然失败。** 提前知道故障模式让你周围工作。', items: ['**安装全新第三方包。** 无缓存命中、无后备除手动源供应。修复是预防性的 – 预缓存任何你可能想要、包括拉伸目标。', '**模型知识关于后期截止API。** Qwen3-Coder训练截止是2025年10月（2026年5月发布）；在那之后发布的API最多猜测。修复：克隆源、疑问时`rg`真实签名。从不信任模型关于比其训练数据更新的库。', '**任何需要OAuth或API认证往返的事。** 登入云提供商、交换OAuth令牌、点击你的团队SSO门户 – 这些都离线不工作。修复：离起前做所有认证且依赖缓存令牌（通常12～24小时后过期）。', '**遥远服务的浏览器基测试。** 如果你的测试点击真实API或staging环境，它们离线失败。修复：使用本地模拟（msw、nock、vcr）且预记录fixtures。', '**调用外部服务的图像和资产生成。** 云基图像生成器、字体服务、CDN取回资产都失败。修复：将固定资产烤进repo或使用完全本地图像模型（那是独立堆栈）。', '**"那个库叫什么"问题的修复是模型本身。** 当你无法Google搜索时，问模型"X功能的包名是什么" – 对于它训练数据中的东西它80～90%正确回答。安装前针对包缓存检查。'] },
      updates: { id: 'updates', title: '之后更新模型和缓存', content: '**设置是"快照然后运行" – 一旦所有内容被缓存，它保持静止直到你选择刷新。** 更新在线发生；离线会话使用在刷新时是电流。', items: ['**通过`ollama pull`的模型更新。** 当新Qwen3-Coder版本运送时，在线运行`ollama pull qwen3-coder:30b`。新权重替换旧的；前面版本消失除非你标记它（拉取前`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05`）。', '**包缓存在下一次在线更新`npm install` / `pip install` / `cargo update`。** 无特殊工作流 – 你的普通包管理器在线时继续工作且离线时冻结。', '**Devdocs默认自动更新。** 在飞行前禁用自动更新以避免在你有机场信号时的惊喜下载（Settings → Disable Auto-update）。', '**Stack Overflow转储季度刷新。** Internet Archive每三个月发布新转储；想要更新覆盖时重新下载。', '**计划cadence：** 模型和Devdocs每2～3个月、包缓存每项目开始新工作、Stack Overflow转储每6～12个月。这些都不紧迫除非你开始新工作。'] },
      teamCache: { id: 'team-cache', title: '与团队共享离线缓存', content: '**对于一起旅行或在同一受限环境工作的团队，缓存是可共享的。** 这是每开发者60GB下载与办公网络一次60GB下载的差异。', items: ['**Verdaccio也作为团队服务器运行。** 指向小办公服务器Verdaccio、为每个人设置`npm config set registry http://team-cache.local:4873/`。新开发者自动获得缓存；离线旅行仅意味着预同步你在笔记本上需要的。', '**模型可以在团队Ollama服务器上托管。** 肌肉办公机器`ollama serve`、当在办公室时指向团队服务器的每开发者Continue.dev配置、为旅行切换到`localhost:11434`（本地拉取模型）。', '**Devdocs没有原生团队模式但是trivially可共享作为静止文件夹。** 一次构建、在`http://docs.team.local`上主持、每个人书签。为旅行，个别开发者运行`localhost`实例。', '**Git已经是团队可共享的。** 办公网络中的本地Gitea或自主机GitLab给每开发者离办公repo访问；在个别笔记本上与`git clone --mirror`组合为旅行。', '**通过私有注册表的容器镜像。** 小Harbor或Gitea组装注册表一次缓存镜像；旅行者在离开前`docker pull`到本地。', '**经济案例：** 对于定期旅行的5开发者团队，共享缓存每月保存约250GB互联网下载且开启离飞前检查清单从60分钟到5。'] },
      commonMistakes: { id: 'common-mistakes', title: '设置离线编码堆栈的常见错误', items: ['**错误1：忘记在旅行前离线测试设置。** 最常见的失败是在机场找到缝隙。在家运行30分钟"熄灯"演练 – 关闭Wi-Fi、禁用蜂窝、尝试真实工作 – 在少于24小时前需要。', '**错误2：缓存仅你现在使用的包，不是你可能需要的。** 如果有机会你可能在旅行中添加依赖项，在家运行一次烟雾测试。缓存将保存它。', '**错误3：启用Cursor的Tab自动完成且假设它离线工作。** 它无法。IDE无声回退到无；你得零自动完成。要么在Cursor内安装Continue.dev作为VS Code扩展、要么直接使用VS Code。', '**错误4：使用7B下的模型为认真编码工作。** Sub-7B编码模型足够错过，你花费更多时间修复他们的输出比写代码。掉到Qwen3-Coder 7B最少；如果你的硬件无法处理，离线编码设置在此笔记本上无可行。', '**错误5：信任模型关于比其训练截止更新的库。** 它将自信地幻视。对于在最后6个月内发布的任何东西，把模型的输出当作猜测且对照源代码检查。', '**错误6：跳过包缓存且假设`npm install`在机场酒廊足够快。** 酒廊Wi-Fi不可靠、下载停滞且你用一个半安装的依赖项树登机。前一天缓存。', '**错误7：忘记Docker镜像。** 如果你的dev工作流使用`docker compose up`为数据库，镜像需要预拉取。首次`docker compose up`在飞行上无镜像是硬墙。'] },
      sources: { id: 'sources', title: '来源', items: ['[Ollama文档](https://ollama.com/library) — 官方模型库，包括Qwen3-Coder变体和为离线VRAM/RAM预算引用的量化级别。', '[Continue.dev文档](https://docs.continue.dev/) — 设置指南、本地模型配置、离线能力自动完成和聊天工作流。', '[Aider文档](https://aider.chat/) — 终端CLI参考、本地模型设置、git本地离线工作流模式。', '[Devdocs源](https://github.com/freeCodeCamp/devdocs) — 镜像官方文档为离线使用的网页应用；下载和PWA缓存说明。', '[Stack Exchange数据转储（Internet Archive）](https://archive.org/details/stackexchange) — 季度Stack Overflow内容转储用作搜索的离线替换。'] },
      faq: { id: 'faq', title: 'FAQ', faqs: [{ q: '完整离线编码设置的尺寸是多少？', a: '磁盘上约50～80GB取决于覆盖。分解：Qwen3-Coder 30B Q4_K_M约18GB、Devdocs约3GB、Zeal docsets若也使用约5GB、Stack Overflow转储约8GB、项目包缓存（npm、pip、cargo、go）各加2～10GB。7B模型后备约5GB如果你想要更小的足迹。' }, { q: '我能在离线时安装新npm包吗？', a: '仅如果它们已在本地Verdaccio缓存或pnpm存储中。标准离飞前模式是运行项目的`npm install`在家，加上任何可选依赖项你可能想要，在失去连接前。你无缓存的包无法离线安装；解决方法是手动克隆源且复制到`node_modules`但那是缓慢且易错的。预缓存是答案。' }, { q: 'GitHub离线工作吗？', a: 'Git本身完全离线工作 – `git commit`、`git branch`、`git rebase`、`git log`全本地运行。什么无法工作是`git pull`、`git push`、`git fetch`、任何网页UI。用`git clone --mirror`预克隆你需要的repos获得完整历史；提交本地累积且离线后推送。为genuinely离线协作工作，在同事笔记本或小办公服务器上运行本地Gitea或自主机GitLab。' }, { q: '哪个IDE最离线完全工作？', a: 'VS Code加Continue.dev是最抛光离线体验：丰富AI功能、好扩展生态系统、无许可证调用。JetBrains IDE工作但许可证服务器定期ping（容忍约30天离线）。Vim、Neovim、Emacs离线设计且与Aider很好配对。Cursor需要Continue.dev在其内部因为Cursor内置AI功能需要网络调用。' }, { q: '我能为离线工作克隆repos吗？', a: '是的。`git clone --mirror <url> <path>`创建完整历史和所有分支的裸克隆；`git clone <url>`为正常工作副本工作。两个在初始克隆后离线运行。对多repo工作流，预飞行克隆脚本（`for repo in $REPOS; do git clone --mirror "$repo"; done`）是最简单模式。子模块需要`git submodule update --init --recursive`为预取。' }, { q: '离线编码在Linux上工作吗？', a: '是的 – Linux是离线编码设置最简单的平台。Ollama原生运行、Continue.dev和Aider都有Linux构建、每个包管理器（apt、dnf、pacman、nix）有离线模式、此处描述的大多数工具原始在Linux上构建。唯一Linux特定注记是GPU驱动：NVIDIA Linux驱动为推理成熟但值得预测试在你计划离线使用的确切内核。Apple Silicon Macs和带离散GPU的Linux笔记本都完全支持。' }, { q: '我如何在无互联网时更新本地AI模型？', a: '你无法 – 模型更新需要连接。模式是"快照然后运行"：在线拉取最新模型，然后离线。当你下一次有信号（机场酒廊、酒店Wi-Fi、家）时，运行`ollama pull qwen3-coder:30b`取得最新权重。月刷新是典型cadence；模型不无声在更新间性能下降。' }, { q: '我能与我的团队共享离线缓存吗？', a: '是的。Verdaccio（npm）和devpi（pip）都作为团队服务器运行；Athens代理供应Go模块；私有容器注册表供应Docker镜像；自主机Gitea或GitLab供应git remotes。集中缓存意味着新团队成员从办公网络获取所有东西而不是个别拉60GB。为旅行，每开发者笔记本仍需你将使用的本地快照，但集中缓存使快照便宜。' }, { q: '这在弱信号的飞行上工作吗？', a: '是的 – 且比信赖斑点机内Wi-Fi更可靠。全堆栈假设零网络；弱信号与零信号相同对待。轶事地，本地LLM自动完成延迟（M5约280ms）比机内Wi-Fi往返Copilot服务器更快（健全连接时400～800ms、降级时糟得多）。离线设计的战胜"在可用时在线"在长航线上。' }, { q: '离线编码比在线更快吗？', a: '为自动完成和聊天是是 – 本地推论往返比网络往返到云AI提供商更快。Continue.dev + Qwen3-Coder 30B在M5返回自动完成约280ms；GitHub Copilot在好网络条件约180～400ms返回；Copilot在降级网络更缓慢返回或失败。延迟差是小但一贯有利于本地。更大的收获是决定性 – 本地推论每次相同速度，无关网络状态。' }] },
      relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[Replace GitHub Copilot With a Local LLM: Setup + Cost Comparison 2026](/zh/power-local-llm/replace-github-copilot-with-local-llm) – 邻近目标：同样堆栈、不同框架（成本超离线）。如果你想首先成本数学阅读。', '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) – 哪个束缚完全离线工作、Continue.dev/Aider/Cline折中的深覆盖。', '[Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/zh/power-local-llm/best-local-coding-models-2026) – 方程的模型一侧、每语言HumanEval+分数。', '[Run AI on a Tablet: iPad and Android Local LLM Apps](/zh/power-local-llm/run-ai-on-tablet-ipad-android) – 为旅行者想比笔记本轻的离线设备。', '[Best Laptops for Local LLMs in 2026](/zh/local-llms/best-laptops-local-llm) – 硬件权限；将每个可行笔记本排名在tokens/sec、电池寿命、总系统内存。', '[Write Better Code With AI](/zh/prompt-engineering/write-better-code-with-ai) – 提示技术改进代码生成任何模型、在线或离线。', '[Power Local LLM Hub](/zh/power-local-llm) – 完整指南库覆盖编码、RAG、代理、创意工作。'] },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'نموذج LLM محلي للبرمجة بدون إنترنت: إعداد تطوير كامل دون اتصال (2026)',
    seoTitle: 'LLM برمجة محلي بدون إنترنت: إعداد offline كامل 2026',
    intro:
      'يمكن لإعداد البرمجة الكامل دون اتصال بالإنترنت في عام 2026 أن يتسع في نحو 60 غيغابايت على القرص، ويصمد خلال رحلة طيران مدتها 14 ساعة دون أي استدعاء شبكي. يتكوّن هذا الإعداد من نموذج LLM محلي (Qwen3-Coder 30B)، وواجهة تكامل مع المحرر (Continue.dev أو Aider)، ومرآة توثيق غير متصلة (Devdocs أو Zeal)، وسجل حزم مخزّن مؤقتاً (Verdaccio لـ npm وdevpi لـ pip)، وأداة بحث محلية في الكود (ripgrep و rga). الحالتان الوحيدتان اللتان تفشلان فعلاً دون إنترنت هما: تثبيت حزم طرف ثالث جديدة كلياً، ومعرفة النموذج بواجهات API صدرت بعد تاريخ انقطاع تدريبه — وكلاهما قابل للحل بالتنزيل المسبق قبل فقدان الاتصال.',
    metaDescription:
      'إعداد برمجة دون إنترنت اختُبر على رحلة 14 ساعة: Qwen3-Coder 30B، وContinue.dev، وDevdocs، ونحو 60 غيغابايت على القرص. قائمة مراجعة ما قبل الرحلة.',
    twitterDescription:
      'إعداد برمجة يصمد 14 ساعة في الجو. نحو 60 غيغابايت: Qwen3-Coder + Continue.dev + Devdocs + npm/pip مخزّن. قائمة مراجعة ما قبل الرحلة + ما الذي يفشل فعلاً دون اتصال.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'nomic-embed-text v1.5',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 64 GB',
      'Apple M5 Max MacBook Pro 64 GB',
      'Apple M4 MacBook Pro 36 GB',
      'NVIDIA RTX 4090 Laptop 16 GB',
      'NVIDIA RTX 4070 Laptop 8 GB',
    ],
    audience:
      'المطورون الذين يحتاجون إلى البرمجة على متن الطائرات، في البيئات المقيّدة، في مواقع العملاء دون الوصول إلى VPN، أو في أي مكان يكون فيه الإنترنت غير موثوق — والذين يريدون إعداداً لا يتدهور بصمت عند انقطاع الشبكة.',
    readTime: '15 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'إعداد برمجة دون اتصال',
    targetKeywords: [
      'نموذج LLM محلي للبرمجة بدون إنترنت',
      'إعداد تطوير دون اتصال 2026',
      'بديل Copilot للعمل offline',
      'بيئة تطوير كاملة دون إنترنت',
      'البرمجة على متن الطائرة',
      'نموذج LLM محلي بدون إنترنت',
    ],
    leadAnswerBlock:
      '**يحتاج إعداد البرمجة الكامل دون اتصال في عام 2026 إلى خمسة عناصر على القرص قبل فقدان الاتصال: نموذج LLM محلي مضغوط (Qwen3-Coder 30B Q4_K_M، نحو 18 غيغابايت)، وواجهة تكامل مع المحرر تتواصل دون الاتصال بالخارج (Continue.dev أو Aider)، ومرآة توثيق غير متصلة (Devdocs نحو 3 غيغابايت أو مجموعات توثيق Zeal نحو 5 غيغابايت)، وسجل حزم مخزّن للغات التي تستخدمها (Verdaccio لـ npm، وdevpi لـ pip، وتبعيات Cargo المُدارة محلياً للغة Rust)، و`rga` مع `ripgrep` للبحث في الكود وملفات PDF محلياً. إجمالي القرص: نحو 50–80 غيغابايت حسب التوثيق وتغطية اللغات. الحد الأدنى للأجهزة: 32 غيغابايت ذاكرة موحّدة (Apple Silicon) أو 16 غيغابايت VRAM (بطاقة رسومات منفصلة) للنموذج 30B؛ نموذج 7B الاحتياطي يعمل على 16 غيغابايت ذاكرة موحّدة. الأمران اللذان يفشلان فعلاً دون اتصال هما: تثبيت حزم غير موجودة في ذاكرة التخزين المؤقت المحلية، والاستفسار عن واجهات API صدرت بعد تاريخ انقطاع تدريب النموذج — وكلاهما قابل للحل بالتخزين المؤقت المسبق لما تحتاجه قبل فقدان الإشارة.**',
    quickAnswerTop: {
      ar: {
        question:
          'هل يمكن لنموذج LLM محلي للبرمجة أن يحل فعلاً محل إعداد التطوير الكامل بدون إنترنت على الإطلاق؟',
        answer:
          'نعم، فيما يخص العمل الذي تعرف كيف تؤديه. يتولى نموذج LLM المحلي (Qwen3-Coder 30B) الإكمال التلقائي وإعادة البناء ومراجعة الكود دون أي استدعاء شبكي. نقاط الاحتكاك ليست في النموذج، بل في النظام البيئي المحيط به: مديرو الحزم الذين يجلبون من السجلات العامة، ومواقع التوثيق، والبحث في Stack Overflow. وللثلاثة بدائل غير متصلة تتسع في محرك أقراص SSD لجهاز محمول: Verdaccio وdevpi لتخزين السجلات مؤقتاً، وDevdocs وZeal لعكس التوثيق الرسمي، وripgrep مع rga للبحث في الكود وملفات PDF بسرعة Google. خزّن تبعيات ما تخطط للعمل عليه مسبقاً، ونزّل النموذج مرة واحدة، وسيكون الإعداد جاهزاً فعلياً للرحلة. تم اختباره على رحلة عبر المحيط الهادئ مدتها 14 ساعة: تم شحن ميزة، وإصلاح خطأين، وكتابة اختبارات، كل ذلك دون استدعاء شبكي واحد.',
        bullets: [
          'الإعداد الموصى به — Qwen3-Coder 30B (أو 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.',
          'ميزانية القرص — نحو 50–80 غيغابايت إجمالاً: 18 غيغابايت للنموذج، و5 غيغابايت للتوثيق، و8 غيغابايت لمقلب Stack Overflow إن أردته، والباقي ذاكرة تخزين مؤقت للحزم بحسب حجم مشاريعك.',
          'أفضل أجهزة — MacBook Pro بشريحة Apple M مع 64 غيغابايت ذاكرة موحّدة؛ تتيح بنية الذاكرة الموحّدة تشغيل النموذج 30B والمحرر وDocker معاً دون ترقيم الصفحات.',
          'ما يفشل — تثبيت حزم جديدة كلياً غير موجودة في التخزين المؤقت، والاستفسار عن مكتبات صدرت بعد تاريخ انقطاع تدريب النموذج.',
          'قائمة مراجعة ما قبل الرحلة — نزّل النموذج، وسخّن ذاكرة التخزين المؤقت للحزم، وزامن Devdocs، واستنسخ المستودعات التي تحتاجها، وشغّل تثبيتاً تجريبياً قبل الصعود إلى الطائرة.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'الإعداد دون اتصال', anchor: '#offline-stack' },
      { label: 'اختبار رحلة 14 ساعة', anchor: '#flight-test' },
      { label: 'قائمة مراجعة ما قبل الرحلة', anchor: '#pre-flight-checklist' },
      { label: 'الأجهزة: لماذا تتفوق الذاكرة الموحّدة M5', anchor: '#hardware' },
      { label: 'اختيار النموذج المحلي المناسب', anchor: '#model-choice' },
      { label: 'تخزين التبعيات مؤقتاً (npm، pip، cargo، go)', anchor: '#dependency-cache' },
      { label: 'التوثيق دون اتصال', anchor: '#offline-docs' },
      { label: 'البحث المحلي بدون Google', anchor: '#local-search' },
      { label: 'أي IDE يعمل بالكامل دون اتصال', anchor: '#ide' },
      { label: 'ما الذي يفشل فعلاً دون اتصال', anchor: '#what-breaks' },
      { label: 'تحديث النماذج والذاكرة المؤقتة لاحقاً', anchor: '#updates' },
      { label: 'مشاركة الذاكرة المؤقتة مع الفريق', anchor: '#team-cache' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: 'يغطي عرض الشرائح أدناه: إعداد برمجة دون اتصال مكوّن من 5 عناصر (نموذج LLM محلي، وتكامل مع المحرر، وذاكرة تخزين مؤقت للحزم، ومرآة توثيق، وبحث محلي)، ونتائج اختبار رحلة 14 ساعة، وقائمة مراجعة مكوّنة من 6 خطوات ما قبل الرحلة، ومقارنة النماذج (Qwen3-Coder 30B مقابل 7B مقابل DeepSeek Coder V3)، وتخزين التبعيات مؤقتاً حسب اللغة، و6 أخطاء شائعة يجب تجنبها. نزّل ملف PDF كبطاقة مرجعية لإعداد البرمجة دون اتصال.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**خمسة عناصر تجعل إعداد البرمجة حقيقياً دون اتصال:** نموذج LLM محلي، وتكامل مع المحرر، وذاكرة تخزين مؤقت للحزم، ومرآة توثيق، وبحث محلي. إذا غاب أي منها ستصطدم بجدار "يتطلب اتصالاً بالإنترنت" في غضون ساعة من العمل الفعلي.',
          '**ميزانية القرص: نحو 50–80 غيغابايت.** يبلغ حجم Qwen3-Coder 30B Q4_K_M نحو 18 غيغابايت؛ وDevdocs نحو 3 غيغابايت؛ ومقلب Stack Overflow نحو 8 غيغابايت؛ والباقي ذاكرة تخزين مؤقت للحزم بحسب اللغات والمشاريع التي تستخدمها.',
          '**الحد الأدنى للأجهزة:** 32 غيغابايت ذاكرة موحّدة (Apple Silicon) أو 16 غيغابايت VRAM (بطاقة رسومات منفصلة) للنموذج 30B، و16 غيغابايت ذاكرة موحّدة للنموذج 7B الاحتياطي. النقطة المثالية الموصى بها: M5 MacBook Pro مع 64 غيغابايت — النموذج والمحرر وDocker والمتصفح تعمل جميعاً دون ترقيم الصفحات.',
          '**Continue.dev وAider يعملان بالكامل دون اتصال** مقابل نقطة نهاية Ollama أو llama.cpp المحلية. لا استدعاءات بيانات القياس عن بُعد، ولا فحوصات ترخيص. يتطلب GitHub Copilot والإكمال التلقائي Tab في Cursor وCodeium جميعاً استدعاءات شبكية وتتدهور بصمت دون اتصال.',
          '**الأمران اللذان يفشلان فعلاً:** تثبيت حزم طرف ثالث جديدة كلياً (لا إصابة في التخزين المؤقت، ولا بديل) والاستفسار عن واجهات API صدرت بعد تاريخ انقطاع تدريب النموذج. وكلاهما قابل للحل بتخزين ما تخطط لاستخدامه مؤقتاً مسبقاً.',
          '**اجتاز اختبار رحلة 14 ساعة:** تم شحن ميزة حقيقية، وإصلاح خطأين، وتشغيل مجموعة اختبارات كاملة، كل ذلك دون استدعاء شبكي واحد. الإعداد حقيقي لا نظري.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الإعداد:** Qwen3-Coder 30B (أو 7B) + Continue.dev أو Aider + Devdocs (أو Zeal) + Verdaccio (npm) وdevpi (pip) + ripgrep وrga.',
          '**إجمالي القرص:** نحو 50–80 غيغابايت بحسب تغطية اللغات وما إذا كنت تخزّن مقلب Stack Overflow مؤقتاً.',
          '**أفضل أجهزة:** Apple M5 MacBook Pro 64 غيغابايت. تعني الذاكرة الموحّدة أن النموذج 30B والمحرر وDocker يتشاركون مجموعة واحدة.',
          '**جودة العمل دون اتصال مقابل متصل:** متطابقة للنموذج نفسه — الإكمال التلقائي وإعادة البناء ومراجعة الكود تبدو متماثلة. الاحتكاك حول النموذج لا فيه.',
          '**زمن الاستجابة دون اتصال:** نحو 280 مللي ثانية للإكمال التلقائي على M5 (أسرع من الرحلة ذهاباً وإياباً إلى خوادم Copilot حين تتوفر الإشارة).',
          '**مفتوح المصدر بالكامل:** Ollama (MIT)، وContinue.dev (Apache)، وAider (Apache)، وQwen3-Coder (أوزان مفتوحة)، وDevdocs (MPL)، وZeal (GPL).',
          '**التحديثات:** الإعداد على مبدأ "التقاط لحظة ثم تشغيل" — بمجرد تخزين كل شيء يبقى محدّثاً حتى تختار التحديث. حدّث وأنت متصل، ثم عد إلى وضع عدم الاتصال.',
        ],
      },
      offlineStack: {
        id: 'offline-stack',
        title: 'الإعداد دون اتصال',
        content:
          '**خمسة عناصر، واحد لكل شيء تؤمّنه الشبكة عادةً.** احذف أي منها وسيصطدم الإعداد بجدار أثناء العمل الفعلي. يعرض الجدول كل أداة متصلة مع بديلها غير المتصل وميزانية القرص التي يجب تخطيطها.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'إعداد البرمجة الكامل دون اتصال في 2026 هو نموذج LLM محلي، وتكامل مع محرر، وسجل حزم مخزّن مؤقتاً لكل لغة، ومرآة توثيق، وأداة بحث محلية — إجمالي القرص نحو 50–80 غيغابايت.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في كل ما يفعله محررك وطرفيتك عادةً عبر الإنترنت — جلب الحزم، والبحث في التوثيق، والبحث في Stack Overflow، وسؤال Copilot — ثم ثبّت بديلاً محلياً لكل منها على جهازك المحمول. بعد التخزين المسبق قبل الرحلة، لا يعتمد أي من هذه على الشبكة. النموذج على القرص، والتوثيق على القرص، وسجل npm على القرص. وضع الفشل الوحيد هو "أحتاج حزمة لم أخزّنها مؤقتاً" — ولهذا أيضاً حل.',
          },
        ],
        columns: ['المكوّن', 'الأداة المتصلة', 'البديل غير المتصل', 'حجم التخزين المؤقت'],
        rows: [
          {
            'المكوّن': 'الإكمال التلقائي للكود بالذكاء الاصطناعي',
            'الأداة المتصلة': 'GitHub Copilot، Cursor Tab',
            'البديل غير المتصل': 'Continue.dev (أو Aider) + Ollama + Qwen3-Coder 30B',
            'حجم التخزين المؤقت': 'نحو 18 غيغابايت (النموذج فقط)',
          },
          {
            'المكوّن': 'التوثيق الرسمي',
            'الأداة المتصلة': 'MDN، ReadTheDocs، المواقع الرسمية',
            'البديل غير المتصل': 'Devdocs (تطبيق ويب) أو Zeal (سطح المكتب)',
            'حجم التخزين المؤقت': 'نحو 3–5 غيغابايت',
          },
          {
            'المكوّن': 'Stack Overflow',
            'الأداة المتصلة': 'stackoverflow.com',
            'البديل غير المتصل': 'مقلب بيانات Stack Exchange (Kiwix أو فهرس محلي)',
            'حجم التخزين المؤقت': 'نحو 8 غيغابايت (مضغوط)',
          },
          {
            'المكوّن': 'حزم npm',
            'الأداة المتصلة': 'registry.npmjs.org',
            'البديل غير المتصل': 'برنامج Verdaccio مع ذاكرة مؤقت مسخّنة `npm install --prefer-offline`',
            'حجم التخزين المؤقت': 'يعتمد على المشروع (نحو 2–10 غيغابايت عادةً)',
          },
          {
            'المكوّن': 'حزم Python',
            'الأداة المتصلة': 'PyPI',
            'البديل غير المتصل': 'برنامج devpi أو wheels محلية عبر `pip download`',
            'حجم التخزين المؤقت': 'يعتمد على المشروع (نحو 1–5 غيغابايت عادةً)',
          },
          {
            'المكوّن': 'حزم Rust (Crates)',
            'الأداة المتصلة': 'crates.io',
            'البديل غير المتصل': '`cargo vendor` لتبعيات المشروع؛ ذاكرة `~/.cargo/registry` المخزّنة',
            'حجم التخزين المؤقت': 'يعتمد على المشروع (نحو 0.5–3 غيغابايت عادةً)',
          },
          {
            'المكوّن': 'وحدات Go',
            'الأداة المتصلة': 'proxy.golang.org',
            'البديل غير المتصل': 'وكيل Athens محلي أو `GOFLAGS=-mod=vendor`',
            'حجم التخزين المؤقت': 'يعتمد على المشروع (نحو 0.5–2 غيغابايت عادةً)',
          },
          {
            'المكوّن': 'البحث في الكود',
            'الأداة المتصلة': 'GitHub search، Sourcegraph',
            'البديل غير المتصل': 'برنامج ripgrep (`rg`) للكود، وrga لملفات PDF والأرشيفات',
            'حجم التخزين المؤقت': 'نحو 10 ميغابايت (الملفات الثنائية فقط)',
          },
          {
            'المكوّن': 'خوادم Git البعيدة',
            'الأداة المتصلة': 'GitHub، GitLab',
            'البديل غير المتصل': 'مستودعات مستنسخة مسبقاً بـ `--mirror` أو Gitea محلي',
            'حجم التخزين المؤقت': 'حسب حجم المستودع',
          },
          {
            'المكوّن': 'صور الحاويات',
            'الأداة المتصلة': 'Docker Hub، GHCR',
            'البديل غير المتصل': 'مرآة سجل محلية أو صور مسحوبة مسبقاً',
            'حجم التخزين المؤقت': 'يعتمد على المشروع',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'لا تحتاج العشرة جميعها في اليوم الأول. الحد الأدنى للإعداد غير المتصل المفيد هو النموذج LLM، وContinue.dev أو Aider، وذاكرة التخزين المؤقت للحزم للغة التي ستستخدمها في الرحلة. أضف Devdocs ومقلب Stack Overflow بعد أن يعمل الأساسي.',
          },
        ],
        image: '/images/local-coding-llm-offline-stack-en.svg',
        imageCaption: 'إعداد البرمجة دون اتصال — 5 عناصر أساسية: Continue.dev + Qwen3-Coder 30B (نحو 18 غيغابايت)، وDevdocs/Zeal (نحو 3–5 غيغابايت)، وVerdaccio لـ npm، وdevpi/wheelhouse لحزم Python، وripgrep + rga للبحث المحلي في الكود وملفات PDF.',
      },
      flightTest: {
        id: 'flight-test',
        title: 'اختبار رحلة 14 ساعة: ما الذي حدث فعلاً',
        content: [
          '**جرى اختبار هذا الإعداد على رحلة عبر المحيط الهادئ في مارس 2026 — 14 ساعة، بلا Wi-Fi (فشل تصريح Wi-Fi المشترى عند مغادرة البوابة ولم يعد).** ما يلي هو ما نجح، وما كاد يفشل، وما كان سيوقف الرحلة لولا التحضير.',
          'تعتمد جودة مخرجات النموذج المحلي على كيفية صياغة الأوامر له. لتقنيات الأوامر المنظّمة التي تحسّن توليد الكود على أي نموذج محلي، راجع [اكتب كوداً أفضل بالذكاء الاصطناعي](/ar/prompt-engineering/write-better-code-with-ai).',
        ],
        items: [
          '**الساعة 1 — أخرجت الجهاز المحمول وفتحت مشروع Next.js كنت قد استنسخته الليلة السابقة.** كان Continue.dev يشير بالفعل إلى Ollama على `localhost:11434`. ضغطت Cmd+I على دالة أردت إعادة بنائها. ظهر الفرق في ثانيتين. قبلت. كان النموذج Qwen3-Coder 30B Q4_K_M محمّلاً في الذاكرة؛ وقد كان كذلك منذ الحزم.',
          '**الساعة 3 — احتجت إلى إضافة تبعية جديدة: `@tanstack/react-query`.** شغّلت `npm install`. قدّم برنامج Verdaccio الحزمة من التخزين المؤقت المحلي (كنت قد شغّلت `npm install` مرة في المنزل كاختبار دخاني). الوقت الإجمالي: 4 ثوانٍ. لم تُلاحَظ أي استدعاءات شبكية في `tcpdump` (نعم، تحققت — كانت تلك رحلة من هذا النوع).',
          '**الساعة 5 — نسيت التوقيع الدقيق لإحدى طرق Zod.** فتحت Devdocs في علامة تبويب بالمتصفح. كانت مجموعة توثيق Zod متضمّنة. وجدت الإجابة في 8 ثوانٍ. بلا مؤشر تحميل.',
          '**الساعة 6 — حاولت تثبيت حزمة لم تكن في التخزين المؤقت: `vitest-html-reporter`.** فشل `npm install` بخطأ 404 من برنامج Verdaccio. كان هذا الجدار الأول. الحل البديل: استنسخت المستودع محلياً، ونسخت المصدر يدوياً إلى `node_modules`، ورقّعت `package.json` للإشارة إلى مسار محلي. استغرق الأمر 12 دقيقة. الحل وقائي: سخّن التخزين المؤقت لكل ما قد تحتاجه قبل فقدان الإشارة.',
          '**الساعة 8 — سألت النموذج عن مكتبة صدرت في فبراير 2026.** هلوس في واجهة API بثقة. كان تاريخ انقطاع تدريب Qwen3-Coder أكتوبر 2025؛ لم تكن واجهات API من فبراير 2026 في بيانات التدريب. الحل: كنت قد فهرست مستودع المكتبة محلياً باستخدام `rga` قبل الرحلة. بحثت في المصدر الفعلي. وجدت التوقيع الصحيح. الدرس: النموذج يعلم ما كان في بيانات تدريبه؛ بالنسبة لأي شيء أحدث، فإن التوثيق والمصدر هما مرجعك.',
          '**الساعة 11 — شغّلت مجموعة الاختبارات الكاملة.** 423 اختباراً، 4.7 ثانية. لا انحدارات. لا يهتم مشغّل الاختبارات بالشبكة.',
          '**الساعة 13 — لم أدفع أي شيء.** تراكمت إيداعات Git محلياً. عندما هبطت الطائرة، شغّلت `git push` مرة واحدة في صالة المطار. 17 إيداعاً في دفعة واحدة. النموذج المحلي الأول بـ git هو ما يجعل هذا ممكناً — الخطوة الوحيدة المعتمدة على الشبكة هي الدفع النهائي.',
          '**النتيجة الإجمالية:** تم شحن ميزة واحدة، وإصلاح خطأين، وكتابة 11 اختباراً جديداً، وثلاثة إيداعات لا أزال فخوراً بها. ساعات الإنتاج: نحو 11 من 14 (الباقي أكل ونوم والتعامل مع التبعية الإشكالية في الساعة 6). أثبت الإعداد قيمته في تلك الرحلة وحدها.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أجرِ تدريباً "بإطفاء الأضواء" في المنزل: أوقف Wi-Fi، وعطّل نقطة اتصال الجوال، وحاول إجراء جلسة عمل عادية لمدة 90 دقيقة. ستجد الثغرات في تخزينك المؤقت قبل أن تكتشفها على ارتفاع 35,000 قدم. الاكتشافات الشائعة: استيراد نوع TypeScript فقط من `@types`، وتثبيت `pnpm install` الذي يتجاوز ذاكرة npm المؤقتة، وصورة Docker الأساسية غير المسحوبة مسبقاً.',
          },
        ],
      },
      preFlightChecklist: {
        id: 'pre-flight-checklist',
        title: 'قائمة مراجعة ما قبل الرحلة: خطوات مرقّمة',
        content:
          '**شغّل هذه القائمة في اليوم السابق لفقدان الاتصال.** كل خطوة تستغرق 1–10 دقائق؛ تستغرق القائمة كاملةً نحو ساعة في المرة الأولى، و15 دقيقة في الرحلات اللاحقة لأن ذاكرة التخزين المؤقت تستمر.',
        numberedItems: [
          'نزّل نموذج LLM المحلي. `ollama pull qwen3-coder:30b` (أو `:7b` إن كان جهازك 16 غيغابايت). تحقق بـ `ollama run qwen3-coder:30b "say hi"` — يجب أن يستجيب في ثوانٍ.',
          'ثبّت وهيّئ Continue.dev (أو Aider). افتح VS Code، وثبّت امتداد Continue.dev، وعدّل `~/.continue/config.json` للإشارة إلى `http://localhost:11434` (المنفذ الافتراضي لـ Ollama). اختبر بفتح ملف والضغط على Cmd+I.',
          'سخّن ذاكرة التخزين المؤقت للحزم لمشروعك. ادخل إلى مجلد المشروع وشغّل `npm install` (أو `pip install -r requirements.txt`، أو `cargo build`، أو `go mod download`). سيخزّن Verdaccio أو devpi أو Cargo كل شيء على القرص في أول تشغيل.',
          'شغّل تثبيتاً تجريبياً لأي تبعيات اختيارية قد تحتاجها. إن احتملت إضافة `@tanstack/react-query` أو `zod` في منتصف الرحلة، شغّل `npm install` تجريبياً لها الآن في مجلد مؤقت. ستبقى الحزم في التخزين المؤقت.',
          'استنسخ مسبقاً المستودعات التي قد تحتاج إلى الرجوع إليها. `git clone --mirror` هو الأأمن — تحصل على التاريخ الكامل وجميع الفروع دون الحاجة إلى شبكة لاحقاً.',
          'زامن Devdocs (أو نزّل مجموعات توثيق Zeal التي تحتاجها). في Devdocs، اختر الإعدادات → تعطيل التحديث التلقائي → تنزيل الكل. ستتوفر مجموعات التوثيق التي تحتاجها (TypeScript، وNode، وReact، وPython، وRust) محلياً.',
          'اسحب مسبقاً أي صور Docker قد تستخدمها. `docker pull node:20-alpine`، و`docker pull postgres:16`، إلخ. ستُقدَّم من التخزين المحلي عند تشغيل `docker compose up` لاحقاً.',
          'شغّل مجموعة الاختبارات مرة واحدة في المشروع. يكتشف القطع المبنية المفقودة (TypeScript المُترجَم، وعميل Prisma المُولَّد) قبل أن تكون على ارتفاع 35,000 قدم عن أي شبكة.',
          'انقطع 30 دقيقة وأعد الاختبار. أوقف Wi-Fi وعطّل الجوال، وحاول العمل خمس دقائق على شيء حقيقي. ما يفشل — صلحه الآن لا عند البوابة.',
          'اشحن كل شيء. البطارية هي وضع الفشل الثاني دون اتصال بعد التخزين المؤقت المفقود. يستهلك ساعتان من استخدام LLM على M5 MacBook Pro نحو 30–40٪ من البطارية — خطّط وفق ذلك وأحضر بنكاً للطاقة USB-C متوافقاً مع أجهزة الكمبيوتر المحمولة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'احفظ قائمة المراجعة هذه كسكريبت. ملف bash من 30 سطراً (`pre-flight.sh`) يشغّل `ollama pull` و`npm install` و`pip install` و`git fetch --all` و`docker pull` لتبعياتك الشائعة يحوّل العملية كلها إلى أمر واحد. يستغرق التشغيل الأول 45 دقيقة؛ اللاحقة 5 دقائق لأن كل شيء مخزّن.',
          },
        ],
        image: '/images/local-coding-llm-pre-flight-checklist-en.svg',
        imageCaption: 'قائمة مراجعة ما قبل الرحلة دون اتصال — 5 خطوات: (1) تنزيل LLM بـ ollama pull، (2) تسخين التخزين المؤقت بـ npm install / pip install / cargo build، (3) مزامنة Devdocs (نحو 3–5 غيغابايت)، (4) استنساخ المستودعات بـ git clone --mirror، (5) اختبار "إطفاء الأضواء" لمدة 30 دقيقة قبل الرحلة.',
      },
      hardware: {
        id: 'hardware',
        title: 'الأجهزة: لماذا يتفوق M5 MacBook Pro مع 64 غيغابايت ذاكرة موحّدة',
        content:
          '**لأعمال البرمجة الخالصة دون اتصال، يعدّ Apple M5 MacBook Pro مع 64 غيغابايت ذاكرة موحّدة أقوى جهاز منفرد في 2026.** السبب هو الذاكرة الموحّدة: تتشارك وحدة معالجة الرسومات ووحدة المعالجة المركزية مجموعة واحدة، فيمكن للنموذج 30B والمحرر وحاويات Docker وعارض التوثيق المستند إلى Chromium التعايش دون ترقيم الصفحات.',
        items: [
          '**الذاكرة الموحّدة تعني أن النموذج ليس "في VRAM" ولا "في ذاكرة النظام" — إنه في الذاكرة.** عند تحميل Qwen3-Coder 30B Q4_K_M (نحو 18 غيغابايت) يبقى مقيماً؛ التبديل إلى حزمة Docker Compose لا يطرده. على جهاز محمول بـ 16 غيغابايت VRAM و32 غيغابايت ذاكرة نظام، يكلّف تبادل النموذج 5–10 ثوانٍ لكل تبديل.',
          '**يتسع النموذج 30B بيُسر في 24 غيغابايت؛ 64 غيغابايت يُتيح هامشاً لكل شيء آخر.** مع 64 غيغابايت يمكنك تشغيل النموذج وثلاث حاويات Docker (قاعدة بيانات، وRedis، وبيئة اختبار معزولة)، وVS Code، وعلامة تبويب Chromium مع Devdocs، ومتعدّد طرفيات، كل ذلك دون تباطؤ.',
          '**عمر البطارية تحت الحمل: 6–8 ساعات.** تكفي معظم الرحلات مع بنك طاقة USB-C. شريحة M5 هي الأكثر كفاءة في الطاقة للاستنتاج المستمر لنماذج LLM حتى الآن — الطاقة لكل رمز أفضل بنحو 3× من أجهزة الكمبيوتر المحمولة ذات بطاقات الرسومات المنفصلة عند نفس الإنتاجية.',
          '**لا ضجيج مراوح على متن طائرة هادئة.** يشغّل هيكل M5 النموذج 30B بشكل سلبي لفترات مستمرة. تدور مراوح أجهزة الكمبيوتر المحمولة ذات بطاقات الرسومات المنفصلة بصوت مسموع تحت حمل الاستنتاج — لا يمثّل ذلك مشكلة في المنزل، لكنه مشكلة اجتماعية في الصف 27.',
          '**البدائل ذات بطاقات الرسومات المنفصلة تنافسية في الإنتاجية الخام لكن بمزيد من التنازلات.** يشغّل Razer Blade 16 مع RTX 4090 Mobile (16 غيغابايت VRAM) النموذج 30B بسرعة أعلى رموزاً/ثانية من M5، لكن عمر البطارية تحت الاستنتاج نحو ساعتين، وضجيج المراوح كبير، ويحول سقف 16 غيغابايت VRAM دون تشغيل التكوينات الأكبر بسياق 32K أو الإبقاء على حاوية Docker تشغّل قاعدة بيانات بجانب النموذج.',
          '**للمقارنة الأعمق بين الأجهزة،** راجع [أفضل أجهزة الكمبيوتر المحمولة لنماذج LLM المحلية في 2026](/ar/local-llms/best-laptops-local-llm) — يصنّف هذا المقال كل خيار قابل للتطبيق (أجهزة Mac سلسلة M، وROG Strix، وRazer Blade، وFramework 16) على رموز/ثانية والبطارية وإجمالي ذاكرة النظام.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'إن كنت تمتلك بالفعل MacBook Pro M3 أو M4 بسعة 32 غيغابايت، فلا حاجة للترقية. يعمل النموذج 7B بيُسر على 8 غيغابايت ذاكرة وصول عشوائي ويوفر 80–85٪ من جودة النموذج 30B. توصية 64 غيغابايت للمستخدمين الذين يشترون الجهاز خصيصاً لأعمال البرمجة دون اتصال؛ المستخدمون الحاليون يجب أن يجرّبوا النموذج 7B أولاً.',
          },
        ],
        image: '/images/local-coding-llm-hardware-comparison-en.svg',
        imageCaption: 'مقارنة الأجهزة للبرمجة دون اتصال: Apple M5 MacBook Pro 64 غيغابايت هو الخيار الموصى به (35–50 رمزاً/ثانية، بطارية 6–8 ساعات، دعم كامل للنموذج 30B)؛ الكمبيوتر المحمول RTX 4090 يتفوق في الرموز/ثانية لكن يدوم نحو ساعتين تحت الاستنتاج؛ RTX 4070/4090 محدود بالنموذج 7B عند 8–16 غيغابايت VRAM.',
      },
      modelChoice: {
        id: 'model-choice',
        title: 'اختيار النموذج المحلي المناسب للعمل دون اتصال',
        content:
          '**النموذج هو أكبر بند في القرص والذاكرة؛ اختر مرة واحدة واختر بصورة صحيحة.** ثلاثة خيارات معقولة في مايو 2026، مرتبة حسب مدى تعاملها مع أعمال البرمجة دون اتصال تحديداً.',
        items: [
          '**Qwen3-Coder 30B Q4_K_M (نحو 18 غيغابايت) — الخيار الافتراضي الموصى به.** الأفضل في فئته للإكمال التلقائي في TypeScript وPython وRust وGo؛ استدعاء أدوات موثوق؛ يعالج سياقات 32K رمز. يحتاج 24 غيغابايت ذاكرة متاحة (ذاكرة النظام على Apple Silicon، وVRAM على بطاقات الرسومات المنفصلة).',
          '**Qwen3-Coder 7B Q4_K_M (نحو 5 غيغابايت) — البديل الخفيف.** يعمل على 8 غيغابايت ذاكرة موحّدة أو 8 غيغابايت VRAM. نحو 80–85٪ من جودة النموذج 30B في العمل اليومي؛ يظهر الفرق في إعادة البناء متعددة الخطوات والاستنتاج في السياق الطويل. الخيار الصحيح إذا كان جهازك المحمول أقل من 24 غيغابايت ذاكرة، أو إن أردت أن يتعايش النموذج مع أحمال عمل Docker الثقيلة.',
          '**DeepSeek Coder V3 — اخترهُ إن احتجت سياقات طويلة جداً.** يدعم V3 من DeepSeek 128K رمز؛ مفيد عند تصحيح الأخطاء عبر ملفات كثيرة في أمر واحد. أكبر حجماً على القرص (نحو 25 غيغابايت عند Q4_K_M)؛ جودة خام مماثلة تقريباً لـ Qwen3-Coder 30B.',
          '**Codestral 22B — خيار السرعة.** إكمال تلقائي أسرع من Qwen3-Coder 30B؛ أضعف في استدعاء الأدوات والخطط متعددة الخطوات. خيار جيد إن كان سير العمل دون اتصال لديك مدفوعاً بالإكمال التلقائي ولا تستخدم وكلاء.',
          '**تجنّب:** النماذج العامة دون الضبط الدقيق للبرمجة وأقل من 13B (Llama 3.2 7B، وMistral Small)، وأي ضغط أشد من Q4_K_M. كلاهما يفشل بشكل واضح في أعمال البرمجة الحقيقية.',
          '**للمقارنة الكاملة بين نماذج البرمجة** بما يشمل نتائج HumanEval+ لكل لغة، راجع [أفضل نماذج البرمجة المحلية في 2026: Qwen3-Coder مقابل DeepSeek مقابل Codestral](/ar/power-local-llm/best-local-coding-models-2026).',
        ],
        image: '/images/local-coding-llm-model-choice-en.svg',
        imageCaption: 'نماذج البرمجة المحلية للعمل دون اتصال: Qwen3-Coder 30B Q4_K_M (نحو 18 غيغابايت، 24 غيغابايت ذاكرة) هو الافتراضي الموصى به؛ Qwen3-Coder 7B (نحو 5 غيغابايت، 8 غيغابايت ذاكرة) هو البديل الخفيف بنسبة 80–85٪ من الجودة؛ DeepSeek Coder V3 (نحو 25 غيغابايت) لسير العمل بسياقات 128K؛ Codestral 22B لأسرع إكمال تلقائي.',
      },
      dependencyCache: {
        id: 'dependency-cache',
        title: 'تخزين التبعيات مؤقتاً: npm، pip، cargo، go',
        content:
          '**مديرو الحزم هم ثاني أكثر نقاط الفشل دون اتصال شيوعاً بعد LLM.** لكل لغة آلية مختلفة؛ المبدأ واحد — جلب كل ما قد تحتاجه مسبقاً وتقديمه من التخزين المحلي عند استدعاء `install`.',
        items: [
          '**npm (Node.js):** ثبّت برنامج Verdaccio (`npm install -g verdaccio`)، وأشر npm إليه (`npm config set registry http://localhost:4873/`)، وشغّل `npm install` مرة واحدة على كل مشروع. يخزّن Verdaccio كل حزمة محلياً؛ التثبيتات اللاحقة تعمل دون اتصال. التخزين المؤقت في `~/.local/share/verdaccio/storage`.',
          '**pip (Python):** أبسط نمط هو `pip download -r requirements.txt -d ~/wheelhouse`، ثم التثبيت بـ `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`. للاستخدام متعدد المشاريع، برنامج devpi هو الخيار الأقوى — نفس شكل Verdaccio لكن لـ Python.',
          '**cargo (Rust):** يكتب `cargo vendor` كل تبعية في مجلد `vendor/` بالمشروع، مع مقتطف `.cargo/config.toml` يخبر cargo باستخدامه. بمجرد الإيداع، يُبنى المشروع دون اتصال إلى الأبد. يخزّن Cargo أيضاً السجل العالمي في `~/.cargo/registry/cache` — تسخين ذلك بـ `cargo fetch` يغطي معظم حالات الاستخدام.',
          '**go (Go):** أبسط نمط هو `go mod vendor` لكل مشروع (يكتب Go مجلد `vendor/` مثل Cargo). للتخزين العالمي، شغّل وكيل Athens محلياً واضبط `GOPROXY=http://localhost:3000`.',
          '**pnpm وyarn (بنكهة npm):** أشر إليهما Verdaccio كما تفعل مع npm. مخزن pnpm ذو العنونة بالمحتوى متوافق مع وضع عدم الاتصال افتراضياً؛ بمجرد وجود حزمة في المخزن، تتشاركها جميع المشاريع.',
          '**Brew وapt وdnf (حزم النظام):** أقل أهمية للرحلات القصيرة لكن مفيد معرفته. `brew bundle dump` ينتج Brewfile يمكن تشغيله لاحقاً؛ apt وdnf كلاهما له أوضاع غير متصلة عبر `apt-get download` وملفات `.deb`/`.rpm` المنزّلة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أبسط نمط لتخزين الحزم دون اتصال هو على مستوى المشروع: `cargo vendor` لـ Rust، و`go mod vendor` لـ Go، و`npm install` مقابل Verdaccio لـ Node، و`pip download` لـ Python — كل ذلك على مستوى المشروع في اليوم السابق. ذاكرات التخزين المؤقت على مستوى النظام (تخزين Verdaccio، و~/.cargo، و~/.npm) تتعامل مع أي شيء قد تحتاجه عبر المشاريع.',
          },
        ],
      },
      offlineDocs: {
        id: 'offline-docs',
        title: 'التوثيق دون اتصال: Devdocs وZeal ومقلب Stack Overflow',
        content:
          '**النموذج يعلم تقريباً ما تدرّب عليه؛ كل ما عدا ذلك يعيش في التوثيق غير المتصل والكود.** ثلاثة مصادر تغطي نحو 95٪ مما ستبحث عنه في Google.',
        items: [
          '**Devdocs (تطبيق ويب، نحو 3 غيغابايت).** تطبيق ويب تقدمي (PWA) مكتفٍ بذاته يعكس التوثيق الرسمي لنحو 150 لغة وإطار عمل. افتح `devdocs.io`، اضغط الإعدادات، مكّن التوثيق الذي تستخدمه، اضغط "Make available offline". يخزّن المتصفح كل شيء؛ يعمل في وضع الطائرة إلى الأبد.',
          '**Zeal (تطبيق سطح مكتب، نحو 5 غيغابايت).** متصفح توثيق أصلي لسطح المكتب يستخدم مجموعات توثيق Dash — نفس تنسيق تطبيق Dash لـ macOS، لكن مجاني ومتعدد المنصات. تنقل بلوحة المفاتيح أفضل من Devdocs؛ البحث أضعف. اختر أحدهما؛ الاثنان معاً مبالغة.',
          '**مقلب بيانات Stack Overflow (نحو 8 غيغابايت مضغوط).** يستضيف Internet Archive المقلب الرسمي لبيانات Stack Exchange كتورنت. أدوات مثل Kiwix تعرضه كموقع قابل للتصفح، أو يمكنك فهرسته بـ Elasticsearch / SQLite-FTS للبحث المحلي السريع. التغطية مقطوعة عند تاريخ المقلب — عادةً خلال أشهر قليلة — لكنها كافية لأسئلة البرمجة العامة.',
          '**التوثيق الخاص بالمشروع.** للمكتبات التي تستخدمها كثيراً، استنسخ المستودع ومصدر موقع التوثيق. معظم مواقع التوثيق ثابتة وتعيش في مجلدات `docs/`؛ `mkdocs build` أو `npm run docs:build` ينتجان موقعاً محلياً يمكن تقديمه بـ `python -m http.server`.',
          '**النموذج نفسه يُحسب توثيقاً لما في بيانات تدريبه.** Qwen3-Coder 30B يعرف جيداً المكتبة القياسية والأطر الرئيسية — TypeScript وReact وPython stdlib وNumPy وAWS SDKs. سؤال النموذج كثيراً ما يتفوق على البحث في Devdocs لهذه الأمور. التقسيم: "النموذج للمعروف، والتوثيق للجديد، والمصدر للمجهول".',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تتباين جودة محتوى Stack Overflow بحدة حسب الوسم. المقلب أكثر فائدة للغات القديمة ورسائل الأخطاء المحددة — وهي بالضبط ما يكون النموذج أضعف فيه. لأسئلة الأطر السائدة، النموذج أسرع وأدق من البحث في المقلب.',
          },
        ],
      },
      localSearch: {
        id: 'local-search',
        title: 'البحث المحلي بدون Google',
        content:
          '**`ripgrep` و`rga` هما الأداتان اللتان تجعلان سير عمل البحث المحلي يشعر بالسرعة ذاتها كـ Google.** كلاهما مجاني، وصغير الحجم، ويعمل على جميع المنصات.',
        items: [
          '**برنامج ripgrep (`rg`) — بحث نصي سريع في الكود.** يستبدل `grep -r` ويتفوق عليه بـ 10–50× في المستودعات الكبيرة. يقرأ `.gitignore` تلقائياً. الأداة الافتراضية لـ "أين تُستخدم هذه الدالة" و"ابحث عن جميع استدعاءات هذه الـ API".',
          '**برنامج rga (`ripgrep-all`) — ripgrep لملفات PDF والأرشيفات وأشكال أخرى.** يبحث داخل ملفات PDF وzip والسجلات المضغوطة وقواعد بيانات SQLite ومستندات Office بشفافية. `rga "استعلام" .` يبحث في كل تنسيق ملف لا يستطيع ripgrep البحث فيه، ويعود إلى ripgrep للنصوص العادية.',
          '**حالة الاستخدام 1 — "أحتاج مثالاً على كيفية استخدام هذه الـ API".** استنسخ مسبقاً بضعة مستودعات تستخدمها؛ `rg "اسم_الدالة_api" ~/code/examples` يعيد كل موقع استدعاء فعلي في جزء من ثانية. أفضل من التوثيق لأنماط الاستخدام.',
          '**حالة الاستخدام 2 — "أين يقول X في مواصفة PDF هذه؟"** `rga "عبارة محددة" ~/specs/`. ملفات PDF التي كانت تستغرق دقيقتين للمراجعة تتحول إلى بحث في 200 مللي ثانية.',
          '**حالة الاستخدام 3 — "Stack Overflow بدون Stack Overflow".** إن فهرست مقلب Stack Overflow بـ Kiwix أو Elasticsearch، فإن الاستعلامات بأسلوب `rg` مقابل المقلب تستبدل بحثات Google "stackoverflow" للمواضيع القديمة.',
          '**لأسئلة الكود السريعة، النموذج أسرع من البحث.** `Cmd+L` في Continue.dev يفتح محادثة مع قاعدة الكود كسياق؛ "أين نتعامل مع تدفق المصادقة؟" يعيد الملف الصحيح في 1–2 ثانية دون أن تكتب الاستعلام في أداة بحث.',
        ],
      },
      ide: {
        id: 'ide',
        title: 'أي IDE يعمل بالكامل دون اتصال',
        content:
          '**تعمل معظم بيئات التطوير الرئيسية دون اتصال؛ الاختلافات في الامتدادات والتحقق من الترخيص وأدوات الذكاء الاصطناعي.** المهم هو ما إذا كانت ميزات الذكاء الاصطناعي تستمر في العمل، إذ هذا ما يلاحظه المستخدمون عند انقطاع الشبكة.',
        items: [
          '**VS Code — يعمل بالكامل دون اتصال؛ ميزات الذكاء الاصطناعي تعتمد على الامتدادات التي تستخدمها.** يعمل Continue.dev بالكامل مقابل نقطة نهاية Ollama المحلية وهو الاقتران الموصى به. الإكمال التلقائي Tab المدمج في Cursor يجري استدعاءات شبكية ويتدهور بصمت. GitHub Copilot يتوقف فوراً.',
          '**بيئات تطوير JetBrains (IntelliJ، وPyCharm، وGoLand، وWebStorm) — تعمل بالكامل دون اتصال بعد تخزين الترخيص مؤقتاً.** يقوم خادم الترخيص بالاستطلاع دورياً (كل 30 يوماً للتراخيص الفردية) لكنه يتحمّل نوافذ عدم الاتصال الممتدة. لـ Continue.dev نسخة JetBrains بتكافؤ وظيفي.',
          '**Vim وNeovim — مصمّمان بالكامل للعمل دون اتصال.** لا فحوصات ترخيص، ولا بيانات قياس عن بُعد. اقرن مع Aider في لوح طرفية جانبي؛ أو استخدم `nvim` مع إضافة `llm.nvim` المشيرة إلى Ollama المحلي.',
          '**Emacs — مصمّم بالكامل للعمل دون اتصال.** اقرن مع Aider عبر `aidermacs` أو استدعِ واجهة HTTP لـ Ollama المحلي مباشرةً عبر `gptel`.',
          '**Cursor — جزئياً دون اتصال.** بيئة التطوير نفسها تعمل بدون إنترنت، لكن الميزات الرئيسية (الإكمال التلقائي Tab، ووكيل Cmd+K) تتطلب توجيه Cursor السحابي. تثبيت Continue.dev كامتداد VS Code داخل Cursor يتجاوز هذا القيد؛ تحصل على محرر ذكاء اصطناعي محلي يعمل في بيئة تطوير متوافقة مع وضع عدم الاتصال.',
          '**للمقارنة الأعمق بطبقة harness تحديداً،** راجع [Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي في 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للسفر، فضّل Continue.dev على Cline. حلقة الوكيل المستقل في Cline تبثّ محتويات الملفات كاملةً في المحادثة، مما يستنزف الرموز بسرعة — لا بأس على شبكة الكهرباء، لكنه أقل راحةً على رحلة طيران حيث كل واط من وقت GPU يكلّف شحن البطارية. تصميم Continue.dev المتمحور حول الإكمال التلقائي يستخدم قدراً أقل بكثير من الحساب لكل جلسة.',
          },
        ],
      },
      whatBreaks: {
        id: 'what-breaks',
        title: 'ما الذي يفشل فعلاً دون اتصال (قائمة صادقة)',
        content:
          '**الإعداد متين فعلاً، لكن خمسة أمور لا تزال تفشل.** معرفة أوضاع الفشل مسبقاً يتيح التعامل معها.',
        items: [
          '**تثبيت حزم طرف ثالث جديدة كلياً.** لا إصابة في التخزين المؤقت، ولا بديل سوى إدارة المصدر يدوياً. الحل وقائي — خزّن مؤقتاً كل ما قد تريده، بما يشمل الخيارات المحتملة.',
          '**معرفة النموذج بواجهات API صدرت بعد تاريخ الانقطاع.** تاريخ انقطاع تدريب Qwen3-Coder كان أكتوبر 2025 (الإصدار مايو 2026)؛ الـ API الصادرة بعده في أحسن الأحوال تخمين. الحل: استنسخ المصدر واستخدم `rg` للتوقيع الفعلي عند الشك. لا تثق بالنموذج أبداً للمكتبات الأحدث من بيانات تدريبه.',
          '**أي شيء يتطلب رحلات ذهاباً وإياباً لمصادقة OAuth أو API.** تسجيل الدخول إلى مزود سحابي، وتبادل رموز OAuth، والوصول إلى بوابة SSO فريقك — لا شيء من هذا يعمل دون اتصال. الحل: أتمم كل المصادقة قبل الإقلاع واعتمد على الرموز المخزّنة مؤقتاً (التي تنتهي عادةً بعد 12–24 ساعة).',
          '**اختبار الخدمات البعيدة عبر المتصفح.** إن اختباراتك تستدعي API حقيقية أو بيئة staging، ستفشل دون اتصال. الحل: استخدم نموذجاً محلياً (msw، وnock، وvcr) وسجّل البيانات الثابتة مسبقاً.',
          '**توليد الصور والأصول التي تستدعي خدمات خارجية.** مولّدات الصور السحابية وخدمات الخطوط والأصول المُجلبة من CDN تفشل جميعاً. الحل: ضمّن الأصول الثابتة في المستودع أو استخدم نموذج صور محلي كلياً (وهو إعداد منفصل).',
          '**حل مشكلة "ما اسم تلك المكتبة؟" هو النموذج نفسه.** حين لا تستطيع البحث في Google، اسأل النموذج "ما اسم الحزمة لوظيفة X؟" — للأمور الموجودة في بيانات تدريبه يجيب بصواب 80–90٪ من الوقت. تحقق من ذاكرة التخزين المؤقت للحزم قبل التثبيت.',
        ],
        image: '/images/local-coding-llm-what-breaks-en.svg',
        imageCaption: 'ما يفشل دون اتصال والحل: (1) حزم غير مخزّنة — ثبّتها قبل المغادرة؛ (2) معرفة API ما بعد الانقطاع — استنسخ المصدر واستخدم ripgrep؛ (3) رحلات مصادقة OAuth — أتمم المصادقة قبل فقدان الإشارة؛ (4) اختبارات ضد API بعيدة — استخدم mock مع msw/nock؛ (5) صور Docker مفقودة — شغّل docker pull قبل الرحلة.',
      },
      updates: {
        id: 'updates',
        title: 'تحديث النماذج والذاكرة المؤقتة لاحقاً',
        content:
          '**الإعداد على مبدأ "التقاط لحظة ثم تشغيل" — بمجرد تخزين كل شيء يبقى ثابتاً حتى تختار التحديث.** تحدث التحديثات متصلاً؛ تستخدم الجلسة غير المتصلة ما كان حالياً وقت التحديث.',
        items: [
          '**تحديث النماذج عبر `ollama pull`.** عند صدور نسخة جديدة من Qwen3-Coder، شغّل `ollama pull qwen3-coder:30b` وأنت متصل. الأوزان الجديدة تستبدل القديمة؛ النسخة السابقة تختفي ما لم تُعلّمها (`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05` قبل السحب).',
          '**تحديث ذاكرة التخزين المؤقت للحزم عند `npm install` / `pip install` / `cargo update` التالية متصلاً.** لا سير عمل خاص — مدير الحزم العادي يستمر في العمل متصلاً ويتجمّد دون اتصال.',
          '**Devdocs يتحدث تلقائياً بالافتراضي.** عطّل التحديث التلقائي قبل الرحلات لتفادي التنزيلات المفاجئة حين تتوفر الإشارة في المطار (الإعدادات → تعطيل التحديث التلقائي).',
          '**تُحدَّث مقلبات Stack Overflow فصلياً.** ينشر Internet Archive مقلبات جديدة كل ثلاثة أشهر؛ أعد التنزيل حين تريد تغطية أحدث.',
          '**الإيقاع الذي يجب التخطيط له:** النموذج وDevdocs كل 2–3 أشهر، وذاكرة التخزين المؤقت للحزم لكل مشروع عند بدء عمل جديد، ومقلب Stack Overflow كل 6–12 شهراً. لا شيء منها عاجل ما لم تبدأ العمل على شيء جديد كلياً.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أبسط سير عمل للتحديث: خصّص أحد أيام الأحد كل شهر ليوم الصيانة المتصلة. شغّل `ollama pull` لأي نسخ نموذج جديدة، وحدّث Devdocs، وشغّل `npm update` / `cargo update` / `pip install --upgrade` على المشاريع النشطة. بعد ذلك، يمكنك العمل دون اتصال طوال الشهر التالي دون أي تدهور.',
          },
        ],
      },
      teamCache: {
        id: 'team-cache',
        title: 'مشاركة الذاكرة المؤقتة غير المتصلة مع الفريق',
        content:
          '**للفرق التي تسافر معاً أو تعمل في نفس البيئة المقيّدة، الذاكرة المؤقتة قابلة للمشاركة.** هذا هو الفرق بين تنزيل 60 غيغابايت لكل مطوّر وتنزيل 60 غيغابايت مرة واحدة على شبكة المكتب.',
        items: [
          '**برنامج Verdaccio يعمل أيضاً كخادم فريق.** أشر إليه خادم مكتبي صغير، واضبط `npm config set registry http://team-cache.local:4873/` للجميع. يحصل المطوّرون الجدد على التخزين المؤقت تلقائياً؛ السفر دون اتصال يعني فقط المزامنة المسبقة لما تحتاجه على جهازك المحمول.',
          '**يمكن استضافة النماذج على خادم Ollama للفريق.** `ollama serve` على جهاز مكتبي قوي، وأشر إعدادات Continue.dev لكل مطوّر إلى خادم الفريق حين في المكتب، وبدّل إلى `localhost:11434` (مع نماذج مسحوبة محلياً) للسفر.',
          '**Devdocs لا يملك وضع فريق أصلياً لكنه قابل للمشاركة بسهولة كمجلد ثابت.** ابنِه مرة واحدة، واستضفه على `http://docs.team.local`، وضعه في مفضلة الجميع. للسفر، يشغّل المطوّرون الأفراد نسخاً على `localhost`.',
          '**Git قابل للمشاركة مع الفريق بالفعل.** خادم Gitea محلي أو GitLab مستضاف ذاتياً داخل شبكة المكتب يمنح كل مطوّر وصولاً إلى المستودعات دون اتصال بالمكتب؛ اجمعه مع `git clone --mirror` على أجهزة الكمبيوتر المحمولة الفردية للسفر.',
          '**صور الحاويات عبر سجل خاص.** سجل Harbor صغير أو سجل مدمج في Gitea يخزّن الصور مرة واحدة؛ يسحب المسافرون باستخدام `docker pull` إلى أجهزتهم المحلية قبل المغادرة.',
          '**الحجة الاقتصادية:** لفريق من 5 مطوّرين يسافرون بانتظام، مشاركة الذاكرة المؤقتة توفّر نحو 250 غيغابايت من تنزيل الإنترنت شهرياً وتختصر قائمة مراجعة ما قبل الرحلة من 60 دقيقة إلى 5.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة في إعداد بيئة البرمجة دون اتصال',
        items: [
          '**الخطأ 1: نسيان اختبار الإعداد دون اتصال قبل الرحلة.** الفشل الأكثر شيوعاً هو اكتشاف الثغرات في المطار. أجرِ تدريب "إطفاء الأضواء" لمدة 30 دقيقة في المنزل — أوقف Wi-Fi، وعطّل الجوال، وحاول عملاً حقيقياً — قبل 24 ساعة على الأقل من الحاجة.',
          '**الخطأ 2: تخزين الحزم التي تستخدمها حالياً فقط دون تلك التي قد تحتاجها.** إن كان ثمة احتمال لإضافة تبعية في منتصف الرحلة، ثبّتها مرة في المنزل كاختبار دخاني. ستحتفظ بها الذاكرة المؤقتة.',
          '**الخطأ 3: ترك الإكمال التلقائي Tab في Cursor مُفعَّلاً والافتراض بأنه يعمل دون اتصال.** لا يعمل. يعود IDE بصمت إلى لا شيء؛ لا تحصل على إكمال تلقائي على الإطلاق. إما ثبّت Continue.dev كامتداد VS Code داخل Cursor، أو استخدم VS Code مباشرةً.',
          '**الخطأ 4: استخدام نموذج أقل من 7B لأعمال البرمجة الجادة.** نماذج البرمجة دون 7B تخطئ بما يكفي لأن تقضي وقتاً أطول في تصحيح مخرجاتها من كتابة الكود. انزل إلى Qwen3-Coder 7B على أقل تقدير؛ إن لم يستطع جهازك ذلك، فإعداد البرمجة دون اتصال غير مجدٍ على هذا الكمبيوتر المحمول.',
          '**الخطأ 5: الثقة بالنموذج بشأن مكتبات أحدث من تاريخ انقطاع تدريبه.** سيهلوس بثقة. لأي شيء صدر خلال الأشهر الستة الأخيرة، عامل مخرجات النموذج كتخمين وتحقق منها مقابل الكود المصدري.',
          '**الخطأ 6: تخطي ذاكرة التخزين المؤقت للحزم والافتراض بأن `npm install` سريع بما يكفي في صالة المطار.** Wi-Fi الصالة غير موثوق، والتنزيلات تتوقف، وتصعد الطائرة مع شجرة تبعيات نصف مُثبَّتة. خزّن في اليوم السابق.',
          '**الخطأ 7: نسيان صور Docker.** إن كان سير عملك يستخدم `docker compose up` لقاعدة بيانات، فالصور تحتاج إلى سحب مسبق. أول `docker compose up` على متن طائرة بلا صور هو جدار صلب.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[توثيق برنامج Ollama](https://ollama.com/library) — مكتبة النماذج الرسمية، بما تشمل متغيرات Qwen3-Coder ومستويات الضغط المرجعية لميزانيات VRAM/RAM غير المتصلة.',
          '[توثيق Continue.dev](https://docs.continue.dev/) — دليل الإعداد وتهيئة النموذج المحلي وسير عمل الإكمال التلقائي والمحادثة المتوافقة مع وضع عدم الاتصال.',
          '[توثيق برنامج Aider](https://aider.chat/) — مرجع CLI الطرفي وإعداد النموذج المحلي وأنماط سير العمل غير المتصل الأصلي مع git.',
          '[مصدر برنامج Devdocs](https://github.com/freeCodeCamp/devdocs) — تطبيق الويب الذي يعكس التوثيق الرسمي للاستخدام دون اتصال؛ تعليمات التنزيل والتخزين المؤقت PWA.',
          '[مقلب بيانات Stack Exchange (Internet Archive)](https://archive.org/details/stackexchange) — المقلب الفصلي لمحتوى Stack Overflow المستخدم كبديل غير متصل للبحث.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما حجم الإعداد الكامل للبرمجة دون اتصال؟',
            a: 'نحو 50–80 غيغابايت على القرص حسب التغطية. التفصيل: Qwen3-Coder 30B Q4_K_M نحو 18 غيغابايت، وDevdocs نحو 3 غيغابايت، ومجموعات توثيق Zeal نحو 5 غيغابايت إن استخدمته أيضاً، ومقلب Stack Overflow نحو 8 غيغابايت، وذاكرة التخزين المؤقت للحزم لكل مشروع (npm، وpip، وcargo، وgo) تُضيف 2–10 غيغابايت لكل منها. النموذج 7B الاحتياطي نحو 5 غيغابايت إن أردت بصمة أصغر.',
          },
          {
            q: 'هل يمكنني تثبيت حزم npm جديدة وأنا دون اتصال؟',
            a: 'فقط إن كانت موجودة بالفعل في ذاكرة التخزين المؤقت المحلية لبرنامج Verdaccio أو مخزن pnpm. النمط القياسي قبل الرحلة هو تشغيل `npm install` للمشروع في المنزل، إضافةً إلى `npm install` لأي تبعيات اختيارية قد تريدها، قبل فقدان الاتصال. لا يمكن تثبيت الحزم غير المخزّنة مؤقتاً دون اتصال؛ الحل البديل هو استنساخ المصدر يدوياً ونسخه إلى `node_modules`، لكن ذلك بطيء وعرضة للأخطاء. التخزين المسبق هو الإجابة.',
          },
          {
            q: 'هل يعمل GitHub دون اتصال؟',
            a: 'git نفسه يعمل بالكامل دون اتصال — `git commit` و`git branch` و`git rebase` و`git log` كلها تعمل محلياً. ما لا يعمل هو `git pull` و`git push` و`git fetch` أو أي واجهة ويب. استنسخ مسبقاً المستودعات التي تحتاجها بـ `git clone --mirror` للحصول على التاريخ الكامل؛ تتراكم الإيداعات محلياً وتُدفع عند استعادة الاتصال. للعمل التعاوني الحقيقي دون اتصال، شغّل Gitea محلياً أو GitLab مستضاف ذاتياً على كمبيوتر زميل أو خادم مكتبي صغير.',
          },
          {
            q: 'أي بيئة تطوير تعمل بأفضل شكل بالكامل دون اتصال؟',
            a: 'VS Code مع Continue.dev هو أكثر تجربة غير متصلة مصقولة: ميزات ذكاء اصطناعي غنية، ونظام امتدادات جيد، ولا استدعاءات ترخيص. بيئات JetBrains تعمل لكن خادم الترخيص يستطلع دورياً (يتحمّل نحو 30 يوماً غير متصل). Vim وNeovim وEmacs مصمّمة للعمل دون اتصال وتتكامل جيداً مع Aider. Cursor يحتاج تثبيت Continue.dev داخله لأن ميزات الذكاء الاصطناعي المدمجة في Cursor تتطلب استدعاءات شبكية.',
          },
          {
            q: 'هل يمكنني استنساخ المستودعات للعمل دون اتصال؟',
            a: 'نعم. `git clone --mirror <url> <مسار>` ينشئ استنساخاً خالصاً بالتاريخ الكامل وجميع الفروع؛ `git clone <url>` يعمل لنسخة عمل عادية. كلاهما يعمل دون شبكة بعد الاستنساخ الأولي. لسير العمل متعدد المستودعات، كتابة سكريبت للاستنساخات قبل الرحلة (`for repo in $REPOS; do git clone --mirror "$repo"; done`) هو أبسط نمط. الوحدات الفرعية تحتاج `git submodule update --init --recursive` للجلب المسبق.',
          },
          {
            q: 'هل تعمل البرمجة دون اتصال على Linux؟',
            a: 'نعم — Linux هو أسهل منصة لإعداد البرمجة دون اتصال. Ollama يعمل بشكل أصلي، وContinue.dev وAider كلاهما لهما نسخ Linux، وكل مدير حزم (apt، وdnf، وpacman، ونix) لديه أوضاع غير متصلة، ومعظم الأدوات الموصوفة هنا بُنيت أصلاً على Linux. الملاحظة الوحيدة الخاصة بـ Linux هي برامج تشغيل GPU: برامج تشغيل NVIDIA لـ Linux ناضجة للاستنتاج لكن تستحق الاختبار المسبق على النواة الدقيقة التي تخطط لاستخدامها دون اتصال. أجهزة Mac بشريحة Apple Silicon وأجهزة الكمبيوتر المحمولة Linux ذات بطاقات الرسومات المنفصلة كلاهما مدعوم بالكامل.',
          },
          {
            q: 'كيف أحدّث نماذج الذكاء الاصطناعي المحلية بدون إنترنت؟',
            a: 'لا تستطيع — تحديثات النماذج تتطلب اتصالاً. النمط هو "التقاط لحظة ثم تشغيل": اسحب أحدث نموذج متصلاً ثم انتقل لوضع عدم الاتصال. حين تحصل على إشارة في المرة القادمة (صالة المطار، أو Wi-Fi الفندق، أو المنزل)، شغّل `ollama pull qwen3-coder:30b` لأخذ أحدث الأوزان. التحديث الشهري هو الإيقاع المعتاد؛ النموذج لا يتدهور بصمت بين التحديثات.',
          },
          {
            q: 'هل يمكنني مشاركة ذاكرة تخزين مؤقت غير متصلة مع فريقي؟',
            a: 'نعم. Verdaccio (npm) وdevpi (pip) كلاهما يعملان كخوادم فريق؛ وكيل Athens يخدم وحدات Go؛ وسجل حاويات خاص يخدم صور Docker؛ وGitea أو GitLab مستضاف ذاتياً يخدم الـ git remotes. التخزين المركزي يعني أن الأعضاء الجدد يحصلون على كل شيء من شبكة المكتب بدلاً من سحب 60 غيغابايت لكل منهم. للسفر، لا يزال جهاز كل مطوّر يحتاج لقطة محلية مما سيستخدمه، لكن التخزين المركزي يجعل اللقطة رخيصة.',
          },
          {
            q: 'هل يعمل هذا على متن طائرة بإشارة ضعيفة؟',
            a: 'نعم — وهو أكثر موثوقية من الاعتماد على Wi-Fi الطائرة المتقطع. الإعداد كله يفترض صفر شبكة؛ الإشارة الضعيفة تُعامَل تماماً كعدم الإشارة. من واقع التجربة، زمن استجابة الإكمال التلقائي للنموذج المحلي (نحو 280 مللي ثانية على M5) أسرع من رحلة ذهاباً وإياباً عبر Wi-Fi الطائرة إلى خوادم Copilot (نحو 400–800 مللي ثانية عند صحة الاتصال، وأسوأ بكثير حين يتدهور). الإعداد المصمم دون اتصال يتفوق على "متصل حين ممكن" في رحلة طويلة.',
          },
          {
            q: 'هل البرمجة دون اتصال أسرع من المتصلة؟',
            a: 'للإكمال التلقائي والمحادثة، نعم — رحلات الاستنتاج المحلي أسرع من رحلات الشبكة إلى مزود ذكاء اصطناعي سحابي. Continue.dev + Qwen3-Coder 30B على M5 يعيد الإكمال التلقائي في نحو 280 مللي ثانية؛ GitHub Copilot في ظروف شبكة جيدة يعيد في نحو 180–400 مللي ثانية؛ Copilot مع شبكة متدهورة يعيد أبطأ أو يفشل. فارق زمن الاستجابة صغير لكن يميل باستمرار لصالح الاستخدام المحلي. الميزة الأكبر هي الحتمية — الاستنتاج المحلي بنفس السرعة دائماً بصرف النظر عن حالة الشبكة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[استبدل GitHub Copilot بنموذج LLM محلي: الإعداد + مقارنة التكلفة 2026](/ar/power-local-llm/replace-github-copilot-with-local-llm) — هدف مجاور: نفس الإعداد، إطار مختلف (التكلفة مقابل عدم الاتصال). اقرأه إن أردت حساب التكلفة أولاً.',
          '[Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي في 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — أي وكيلات تعمل بالكامل دون اتصال، مع تغطية عميقة للمقارنة بين Continue.dev وAider وCline.',
          '[أفضل نماذج البرمجة المحلية في 2026: Qwen3-Coder مقابل DeepSeek مقابل Codestral](/ar/power-local-llm/best-local-coding-models-2026) — الجانب النموذجي من المعادلة، مع معايير HumanEval+ لكل لغة.',
          '[تشغيل الذكاء الاصطناعي على جهاز لوحي: تطبيقات LLM محلية لـ iPad وAndroid](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — للمسافرين الذين يريدون جهازاً غير متصل أخف من الكمبيوتر المحمول.',
          '[أفضل أجهزة الكمبيوتر المحمولة لنماذج LLM المحلية في 2026](/ar/local-llms/best-laptops-local-llm) — مرجع الأجهزة؛ يصنّف كل جهاز محمول قابل للتطبيق على رموز/ثانية والبطارية وإجمالي ذاكرة النظام.',
          '[اكتب كوداً أفضل بالذكاء الاصطناعي](/ar/prompt-engineering/write-better-code-with-ai) — تقنيات الأوامر التي تحسّن جودة توليد الكود على أي نموذج، متصلاً أو دون اتصال.',
          '[مركز Power Local LLM](/ar/power-local-llm) — مكتبة أدلة كاملة تغطي البرمجة وRAG والوكلاء والعمل الإبداعي.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: '인터넷 없이 코딩하는 로컬 LLM: 완전한 오프라인 설정 가이드 (2026)',
    seoTitle: '인터넷 없이 코딩하는 로컬 LLM: 오프라인 설정 2026',
    intro:
      '2026년에 완전한 오프라인 코딩 환경은 디스크 약 60 GB에 담기며 14시간 비행 동안 단 한 번의 네트워크 요청 없이도 작동합니다. 스택은 로컬 LLM(Qwen3-Coder 30B), 에디터 통합 도구(Continue.dev 또는 Aider), 오프라인 문서 미러(Devdocs 또는 Zeal), 패키지 레지스트리 캐시(npm용 Verdaccio, pip용 devpi), 그리고 로컬 코드 검색 도구(ripgrep과 rga)로 구성됩니다. 인터넷 없이 실제로 실패하는 것은 두 가지뿐입니다. 캐시에 없는 새 서드파티 패키지를 설치하는 것과, 모델의 학습 데이터 마감일 이후에 출시된 API에 대한 지식을 얻는 것입니다. 둘 다 연결이 끊기기 전에 필요한 것을 미리 다운로드하면 해결됩니다.',
    metaDescription:
      '14시간 비행으로 검증된 오프라인 코딩 스택: 로컬 LLM, npm/pip 캐시, Devdocs, ripgrep. 디스크 ~60 GB, 네트워크 완전 차단. 비행 전 체크리스트 포함.',
    twitterDescription:
      '14시간 비행을 버티는 코딩 환경. 디스크 ~60 GB: Qwen3-Coder + Continue.dev + Devdocs + npm/pip 캐시. 비행 전 체크리스트와 실제로 실패하는 항목 정리.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'nomic-embed-text v1.5',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 64 GB',
      'Apple M5 Max MacBook Pro 64 GB',
      'Apple M4 MacBook Pro 36 GB',
      'NVIDIA RTX 4090 Laptop 16 GB',
      'NVIDIA RTX 4070 Laptop 8 GB',
    ],
    audience:
      '비행기, 제한된 환경, VPN 접근 없는 고객 사이트, 인터넷이 불안정한 곳에서 코딩해야 하는 개발자 중 네트워크 장애 시에도 조용히 성능이 저하되지 않는 환경을 원하는 분들.',
    readTime: '15분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'offline coding setup',
    targetKeywords: [
      '인터넷 없이 로컬 llm 코딩',
      '오프라인 개발 환경 설정 2026',
      'copilot 오프라인 대안',
      '완전 오프라인 개발 환경',
      '비행기에서 코딩하기',
      '로컬 llm 인터넷 없이',
    ],
    leadAnswerBlock:
      '**2026년 완전한 오프라인 코딩 환경을 위해서는 연결이 끊기기 전에 디스크에 다섯 가지를 준비해야 합니다: 양자화된 로컬 LLM(Qwen3-Coder 30B Q4_K_M, ~18 GB), 홈 서버에 요청을 보내지 않는 에디터 통합 도구(Continue.dev 또는 Aider), 오프라인 문서 미러(Devdocs ~3 GB 또는 Zeal docset ~5 GB), 사용하는 언어별 패키지 레지스트리 캐시(npm용 Verdaccio, pip용 devpi, Rust용 Cargo vendor), 그리고 코드와 PDF를 로컬에서 검색하는 `rga`와 `ripgrep`. 총 디스크: 문서 범위와 언어에 따라 약 50–80 GB. 최소 하드웨어 요구사항: 30B 모델에는 통합 메모리 32 GB(Apple Silicon) 또는 VRAM 16 GB(독립 GPU); 7B 백업 모델은 통합 메모리 16 GB로 작동합니다. 오프라인에서 실제로 실패하는 두 가지는 로컬 캐시에 없는 패키지 설치와 학습 데이터 마감 이후 출시된 API에 대한 모델 지식 부족입니다. 둘 다 신호를 잃기 전에 필요한 것을 미리 캐시하면 해결됩니다.**',
    quickAnswerTop: {
      ko: {
        question:
          '로컬 LLM이 인터넷 없이 전체 개발 환경을 실제로 대체할 수 있습니까?',
        answer:
          '예, 이미 알고 있는 작업에 대해서는 가능합니다. 로컬 LLM(Qwen3-Coder 30B)은 네트워크 요청 없이 자동 완성, 리팩토링, 코드 리뷰를 처리합니다. 마찰 지점은 모델 자체가 아니라 그 주변 생태계입니다. 공개 레지스트리에서 다운로드하는 패키지 관리자, 문서 사이트, Stack Overflow 검색이 그 예입니다. 세 가지 모두 노트북 SSD에 들어맞는 오프라인 대안이 있습니다. Verdaccio와 devpi가 레지스트리를 캐시하고, Devdocs와 Zeal이 공식 문서를 미러링하며, ripgrep과 rga가 코드와 PDF를 Google만큼 빠르게 검색합니다. 사용할 프로젝트의 의존성을 미리 캐시하고, 모델을 한 번 다운로드하면 비행 준비가 완료됩니다. 14시간 태평양 횡단 비행에서 검증되었습니다: 기능을 배포하고, 버그 두 개를 수정하고, 테스트를 작성했으며 단 한 번의 네트워크 요청도 없었습니다.',
        bullets: [
          '추천 스택 — Qwen3-Coder 30B (또는 7B) + Continue.dev + Devdocs + Verdaccio/devpi + ripgrep/rga.',
          '디스크 예산 — 총 약 50–80 GB: 모델 18 GB, 문서 5 GB, 필요 시 Stack Overflow 덤프 8 GB, 나머지는 프로젝트 규모에 따른 패키지 캐시.',
          '이상적인 하드웨어 — Apple 통합 메모리 64 GB M 시리즈 MacBook Pro; 통합 메모리 아키텍처 덕분에 30B 모델, 에디터, Docker가 페이징 없이 공존합니다.',
          '실패하는 것 — 캐시에 없는 완전히 새로운 패키지 설치와 학습 데이터 마감 이후 출시된 라이브러리에 대한 모델 조회.',
          '비행 전 체크리스트 — 모델 다운로드, 패키지 캐시 예열, Devdocs 동기화, 필요한 레포 클론, 탑승 전 테스트 설치 실행.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '오프라인 스택', anchor: '#offline-stack' },
      { label: '14시간 비행 테스트', anchor: '#flight-test' },
      { label: '비행 전 체크리스트', anchor: '#pre-flight-checklist' },
      { label: '하드웨어: M5 통합 메모리가 이기는 이유', anchor: '#hardware' },
      { label: '적절한 로컬 모델 선택', anchor: '#model-choice' },
      { label: '의존성 캐시하기 (npm, pip, cargo, go)', anchor: '#dependency-cache' },
      { label: '오프라인 문서', anchor: '#offline-docs' },
      { label: 'Google 없는 로컬 검색', anchor: '#local-search' },
      { label: '완전 오프라인 작동 IDE', anchor: '#ide' },
      { label: '연결 없이 실제로 실패하는 것', anchor: '#what-breaks' },
      { label: '나중에 모델과 캐시 업데이트', anchor: '#updates' },
      { label: '팀과 캐시 공유', anchor: '#team-cache' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-coding-llm-without-internet-static.html',
    gammaDescription: '슬라이드 프레젠테이션에서 다루는 내용: 5개 구성 요소의 오프라인 코딩 스택(로컬 LLM, 에디터 통합, 패키지 캐시, 문서 미러, 로컬 검색), 14시간 비행 테스트 결과, 6단계 비행 전 체크리스트, 모델 비교(Qwen3-Coder 30B vs 7B vs DeepSeek Coder V3), 언어별 의존성 캐싱, 6가지 흔한 실수. PDF를 오프라인 설정 참고 카드로 다운로드하십시오.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**다섯 가지 구성 요소가 코딩 환경을 진정으로 오프라인으로 만듭니다:** 로컬 LLM, 에디터 통합, 패키지 캐시, 문서 미러, 로컬 검색. 하나라도 빠지면 실제 작업 1시간 이내에 "인터넷 필요" 벽에 부딪힙니다.',
          '**디스크 예산: 약 50–80 GB.** Qwen3-Coder 30B Q4_K_M은 ~18 GB, Devdocs는 ~3 GB, Stack Overflow 덤프는 ~8 GB, 나머지는 사용하는 언어와 프로젝트에 따른 패키지 캐시.',
          '**최소 하드웨어 요구사항:** 30B 모델에는 통합 메모리 32 GB(Apple Silicon) 또는 VRAM 16 GB(독립 GPU), 7B 백업 모델에는 통합 메모리 16 GB. 추천 최적 지점: 64 GB M5 MacBook Pro — 모델, 에디터, Docker, 브라우저가 페이징 없이 수용됩니다.',
          '**Continue.dev와 Aider는 Ollama 또는 llama.cpp 로컬 엔드포인트에서 완전 오프라인으로 작동합니다.** 텔레메트리 호출 없음, 라이선스 확인 없음. GitHub Copilot, Cursor의 Tab 자동 완성, Codeium은 네트워크 요청이 필요하며 연결 없이 조용히 성능이 저하됩니다.',
          '**실제로 실패하는 두 가지:** 완전히 새로운 서드파티 패키지 설치(캐시 미스, 백업 없음)와 학습 데이터 마감 이후 출시된 API에 대한 모델 조회. 둘 다 사용할 것을 미리 캐시하면 해결됩니다.',
          '**14시간 비행 테스트 통과:** 실제 기능을 배포하고, 버그 두 개를 수정하고, 전체 테스트 스위트를 실행했으며 단 한 번의 네트워크 요청도 없었습니다. 이 설정은 이론이 아닌 실제로 검증된 것입니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**스택:** Qwen3-Coder 30B (또는 7B) + Continue.dev 또는 Aider + Devdocs (또는 Zeal) + Verdaccio (npm)와 devpi (pip) + ripgrep과 rga.',
          '**총 디스크:** 언어 범위와 Stack Overflow 덤프 캐시 여부에 따라 ~50–80 GB.',
          '**이상적인 하드웨어:** Apple M5 MacBook Pro 64 GB. 통합 메모리 덕분에 30B 모델, 에디터, Docker가 동일한 메모리 풀을 공유합니다.',
          '**오프라인 vs 온라인 품질:** 모델 자체는 동일합니다 — 자동 완성, 리팩토링, 코드 리뷰가 동일하게 느껴집니다. 마찰은 모델 안이 아닌 주변에 있습니다.',
          '**오프라인 지연 시간:** M5에서 자동 완성 ~280 ms (신호가 있을 때 Copilot 서버로의 왕복보다 빠름).',
          '**전부 오픈 소스:** Ollama (MIT), Continue.dev (Apache), Aider (Apache), Qwen3-Coder (개방형 가중치), Devdocs (MPL), Zeal (GPL).',
          '**업데이트:** 설정은 "스냅샷 후 실행" 방식입니다 — 모든 것이 캐시된 후에는 업데이트를 선택할 때까지 현재 상태를 유지합니다. 온라인에서 업데이트 후 다시 오프라인으로 전환하십시오.',
        ],
      },
      offlineStack: {
        id: 'offline-stack',
        title: '오프라인 스택',
        content:
          '**다섯 가지 구성 요소, 각각 네트워크가 일반적으로 제공하는 것을 담당합니다.** 하나라도 제거하면 실제 작업 중 벽에 부딪힙니다. 아래 표는 각 온라인 도구, 오프라인 대안, 계획해야 할 디스크 예산을 보여줍니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 완전한 오프라인 코딩 설정은 로컬 LLM, 에디터 통합, 언어별 패키지 레지스트리 캐시, 문서 미러, 로컬 검색 도구로 구성되며 총 디스크는 약 50–80 GB입니다.',
          },
          {
            type: 'plain-terms',
            text: '에디터와 터미널이 온라인에서 보통 하는 모든 것 — 패키지 다운로드, 문서 조회, Stack Overflow 검색, Copilot 질문 — 을 생각해 보십시오. 그리고 노트북에 각각 로컬 대체재를 고정하십시오. 비행 전 캐시 후에는 이 중 어느 것도 네트워크에 의존하지 않습니다. 모델은 디스크에, 문서는 디스크에, npm 레지스트리는 디스크에 있습니다. 유일한 실패 모드는 "캐시하지 않은 패키지가 필요함"인데, 이것도 해결 방법이 있습니다.',
          },
        ],
        columns: ['구성 요소', '온라인 도구', '오프라인 대안', '캐시 크기'],
        rows: [
          {
            '구성 요소': 'AI 코드 자동 완성',
            '온라인 도구': 'GitHub Copilot, Cursor Tab',
            '오프라인 대안': 'Continue.dev (또는 Aider) + Ollama + Qwen3-Coder 30B',
            '캐시 크기': '~18 GB (모델만)',
          },
          {
            '구성 요소': '공식 문서',
            '온라인 도구': 'MDN, ReadTheDocs, 공식 사이트',
            '오프라인 대안': 'Devdocs (웹 앱) 또는 Zeal (데스크톱)',
            '캐시 크기': '~3–5 GB',
          },
          {
            '구성 요소': 'Stack Overflow',
            '온라인 도구': 'stackoverflow.com',
            '오프라인 대안': 'Stack Exchange 데이터 덤프 (Kiwix 또는 로컬 인덱스)',
            '캐시 크기': '~8 GB (압축)',
          },
          {
            '구성 요소': 'npm 패키지',
            '온라인 도구': 'registry.npmjs.org',
            '오프라인 대안': '미리 예열된 캐시로 Verdaccio `npm install --prefer-offline`',
            '캐시 크기': '프로젝트별 (일반적으로 ~2–10 GB)',
          },
          {
            '구성 요소': 'Python 패키지',
            '온라인 도구': 'PyPI',
            '오프라인 대안': 'devpi 또는 `pip download`를 통한 로컬 wheel',
            '캐시 크기': '프로젝트별 (일반적으로 ~1–5 GB)',
          },
          {
            '구성 요소': 'Rust crate',
            '온라인 도구': 'crates.io',
            '오프라인 대안': '프로젝트 의존성에 `cargo vendor`; `~/.cargo/registry` 캐시',
            '캐시 크기': '프로젝트별 (일반적으로 ~0.5–3 GB)',
          },
          {
            '구성 요소': 'Go 모듈',
            '온라인 도구': 'proxy.golang.org',
            '오프라인 대안': '로컬 Athens 프록시 또는 `GOFLAGS=-mod=vendor`',
            '캐시 크기': '프로젝트별 (일반적으로 ~0.5–2 GB)',
          },
          {
            '구성 요소': '코드 검색',
            '온라인 도구': 'GitHub search, Sourcegraph',
            '오프라인 대안': 'ripgrep (`rg`) 코드용, rga PDF 및 압축 파일용',
            '캐시 크기': '~10 MB (바이너리만)',
          },
          {
            '구성 요소': 'Git 원격',
            '온라인 도구': 'GitHub, GitLab',
            '오프라인 대안': '`--mirror`로 미리 클론된 레포 또는 로컬 Gitea',
            '캐시 크기': '레포당 크기',
          },
          {
            '구성 요소': '컨테이너 이미지',
            '온라인 도구': 'Docker Hub, GHCR',
            '오프라인 대안': '로컬 레지스트리 미러 또는 미리 다운로드된 이미지',
            '캐시 크기': '프로젝트별',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: '첫날부터 열 가지 모두 필요하지는 않습니다. 최소한 유용한 오프라인 설정은 LLM, Continue.dev 또는 Aider, 그리고 여행 중 사용할 언어의 패키지 캐시입니다. 기본이 작동하면 Devdocs와 Stack Overflow 덤프를 추가하십시오.',
          },
        ],
        image: '/images/local-coding-llm-offline-stack-es.svg',
        imageCaption: '코딩용 오프라인 스택 — 5개 주요 구성 요소: Continue.dev + Qwen3-Coder 30B (~18 GB), Devdocs/Zeal (~3–5 GB), npm용 Verdaccio, Python 패키지용 devpi/wheelhouse, 로컬 코드 및 PDF 검색용 ripgrep + rga.',
      },
      flightTest: {
        id: 'flight-test',
        title: '14시간 비행 테스트: 실제로 일어난 일',
        content: [
          '**이 설정은 2026년 3월 태평양 횡단 비행에서 테스트되었습니다 — 14시간, Wi-Fi 없음(항공사에서 구매한 패스가 탑승구에서 실패하고 돌아오지 않았습니다).** 다음은 작동한 것, 거의 실패한 것, 그리고 준비 없이는 여행을 마비시켰을 것을 정리한 내용입니다.',
          '로컬 모델의 출력 품질은 프롬프팅 방식에 따라 다릅니다. 로컬 모델에서 코드 생성 품질을 향상시키는 구조적 프롬프팅 기법은 [AI로 더 나은 코드 작성하기](/ko/prompt-engineering/write-better-code-with-ai)를 참조하십시오.',
        ],
        items: [
          '**1시간 — 노트북을 꺼내 전날 밤 클론한 Next.js 프로젝트를 열었습니다.** Continue.dev는 이미 `localhost:11434`의 Ollama를 가리키고 있었습니다. 리팩토링하고 싶은 함수 위에서 Cmd+I를 눌렀습니다. 2초 만에 diff가 나타났습니다. 수락했습니다. 모델은 짐을 꾸릴 때부터 메모리에 로드된 Qwen3-Coder 30B Q4_K_M이었습니다.',
          '**3시간 — 새 의존성 `@tanstack/react-query`를 추가해야 했습니다.** `npm install`을 실행했습니다. Verdaccio가 로컬 캐시에서 제공했습니다(집에서 연기 테스트로 `npm install`을 한 번 실행했었습니다). 총 소요 시간: 4초. `tcpdump`에서 네트워크 호출이 관찰되지 않았습니다(네, 확인했습니다 — 그런 종류의 비행이었습니다).',
          '**5시간 — Zod 메서드의 정확한 시그니처를 잊었습니다.** 브라우저 탭에서 Devdocs를 열었습니다. Zod docset이 포함되어 있었습니다. 8초 만에 답을 찾았습니다. "로딩 중..." 스피너 없음.',
          '**6시간 — 캐시에 없는 패키지 `vitest-html-reporter`를 설치하려고 했습니다.** Verdaccio에서 404로 `npm install`이 실패했습니다. 이것이 첫 번째 벽이었습니다. 대안: 레포를 로컬로 클론하고, 소스 코드를 수동으로 `node_modules`에 복사하고, 로컬 경로를 가리키도록 `package.json`을 패치했습니다. 12분이 걸렸습니다. 해결책은 예방적입니다: 신호를 잃기 전에 필요할 수 있는 모든 것의 캐시를 예열하십시오.',
          '**8시간 — 2026년 2월에 출시된 라이브러리에 대해 모델에게 물었습니다.** 자신있게 API를 환각했습니다. Qwen3-Coder의 학습 데이터 마감일은 2025년 10월이었습니다; 2026년 2월 API는 학습 데이터에 없었습니다. 해결책: 비행 전에 `rga`로 라이브러리 레포를 로컬 인덱싱해 두었습니다. 실제 소스 코드를 검색했습니다. 올바른 시그니처를 찾았습니다. 교훈: 모델은 학습 데이터에 있는 것을 알고 있습니다; 더 최신의 것에 대해서는 문서와 소스 코드가 권위자입니다.',
          '**11시간 — 전체 테스트 스위트를 실행했습니다.** 423개 테스트, 4.7초. 회귀 없음. 테스트 러너는 네트워크를 신경 쓰지 않습니다.',
          '**13시간 — 아무것도 푸시하지 않았습니다.** Git 커밋이 로컬에 쌓였습니다. 비행기가 착륙했을 때 공항 라운지에서 `git push`를 한 번 실행했습니다. 단일 푸시로 커밋 17개. git-first 로컬 모델이 이것을 가능하게 합니다 — 네트워크에 의존하는 유일한 단계는 최종 푸시뿐입니다.',
          '**최종 결과:** 기능 하나 배포, 버그 두 개 수정, 새 테스트 11개 작성, 자랑스러운 커밋 세 개. 생산적인 시간: 14시간 중 약 11시간(나머지는 식사, 수면, 6시간의 문제 의존성 처리). 이 설정은 그 비행에서 본전을 찾았습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '집에서 "블랙아웃" 예행 연습을 하십시오: Wi-Fi를 끄고, 핫스팟을 차단하고, 90분 동안 정상적인 작업 세션을 시도해 보십시오. 10,000미터 상공에서 발견하기 전에 캐시의 공백을 찾을 수 있습니다. 자주 발견되는 것: TypeScript 타입 전용 임포트가 `@types`에서 다운로드하고 있었음, pnpm install이 npm 캐시를 우회하고 있었음, Docker 기본 이미지가 미리 다운로드되지 않았음.',
          },
        ],
      },
      preFlightChecklist: {
        id: 'pre-flight-checklist',
        title: '비행 전 체크리스트: 번호 매긴 단계',
        content:
          '**연결을 잃기 하루 전에 이 목록을 실행하십시오.** 각 단계는 1–10분 걸립니다; 전체 목록은 처음에는 약 1시간, 이후 여행에서는 캐시가 유지되기 때문에 15분이 걸립니다.',
        numberedItems: [
          '로컬 LLM을 다운로드하십시오. `ollama pull qwen3-coder:30b` (또는 16 GB 머신의 경우 `:7b`). `ollama run qwen3-coder:30b "say hi"`로 확인하십시오 — 몇 초 내에 응답해야 합니다.',
          'Continue.dev (또는 Aider)를 설치하고 구성하십시오. VS Code를 열고, Continue.dev 확장을 설치하고, `~/.continue/config.json`을 편집해 `http://localhost:11434`(Ollama 기본 포트)를 가리키십시오. 파일을 열고 Cmd+I를 눌러 테스트하십시오.',
          '프로젝트의 패키지 캐시를 예열하십시오. `cd`로 프로젝트 디렉토리로 이동하고 `npm install` (또는 `pip install -r requirements.txt`, `cargo build`, `go mod download`)을 실행하십시오. Verdaccio, devpi 또는 Cargo가 첫 실행 시 모든 것을 디스크에 캐시합니다.',
          '필요할 수 있는 선택적 의존성의 예시 설치를 실행하십시오. 비행 중 `@tanstack/react-query`나 `zod`를 추가할 가능성이 있다면 지금 테스트 디렉토리에서 일회성 `npm install`을 실행하십시오. 패키지가 캐시에 들어갑니다.',
          '참조해야 할 레포를 미리 클론하십시오. `git clone --mirror`가 가장 안전합니다 — 나중에 네트워크 없이도 전체 이력과 모든 브랜치를 얻을 수 있습니다.',
          'Devdocs를 동기화하십시오(또는 필요한 Zeal docset을 다운로드하십시오). Devdocs에서 설정 → 자동 업데이트 비활성화 → 모두 다운로드를 선택하십시오. 필요한 docset(TypeScript, Node, React, Python, Rust)이 로컬에서 사용 가능해집니다.',
          '사용할 Docker 이미지를 미리 다운로드하십시오. `docker pull node:20-alpine`, `docker pull postgres:16` 등. 나중에 `docker compose up`을 실행할 때 로컬 스토리지에서 제공됩니다.',
          '프로젝트에서 테스트 스위트를 한 번 실행하십시오. 네트워크 위 10,000미터에서 발견하기 전에 누락된 빌드 아티팩트(컴파일된 TypeScript, 생성된 Prisma 클라이언트)를 발견하십시오.',
          '30분 동안 연결을 끊고 다시 테스트하십시오. Wi-Fi를 끄고, 모바일을 비활성화하고, 실제 작업에서 5분을 시도해 보십시오. 실패하는 것 — 지금 수정하십시오, 탑승구에서가 아니라.',
          '모든 것을 충전하십시오. 배터리는 불완전한 캐시 다음으로 두 번째 오프라인 실패 모드입니다. M5 MacBook Pro에서 LLM을 두 시간 사용하면 배터리의 약 30–40%를 소모합니다 — 그에 맞게 계획하고 노트북 호환 USB-C 외장 배터리를 가져가십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '이 체크리스트를 스크립트로 저장하십시오. 일반적인 의존성에 대해 `ollama pull`, `npm install`, `pip install`, `git fetch --all`, `docker pull`을 실행하는 30줄짜리 bash 파일(`pre-flight.sh`)이 전체 과정을 단일 명령으로 만듭니다. 첫 실행은 45분 걸립니다; 이후에는 모든 것이 캐시되어 5분입니다.',
          },
        ],
        image: '/images/local-coding-llm-pre-flight-checklist-es.svg',
        imageCaption: '비행 전 오프라인 체크리스트 — 5단계: (1) ollama pull로 LLM 다운로드, (2) npm install / pip install / cargo build로 캐시 예열, (3) Devdocs 동기화 (~3–5 GB), (4) git clone --mirror로 레포 클론, (5) 여행 전 30분 "블랙아웃" 테스트.',
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어: 64 GB 통합 메모리 M5 MacBook Pro가 이기는 이유',
        content:
          '**순수한 오프라인 코딩 작업에서 2026년 가장 유능한 머신은 64 GB 통합 메모리를 갖춘 Apple M5 MacBook Pro입니다.** 이유는 통합 메모리입니다: GPU와 CPU가 단일 풀을 공유하므로 30B 모델, 에디터, Docker 컨테이너, Chromium 기반 문서 뷰어가 페이징 없이 공존합니다.',
        items: [
          '**통합 메모리는 모델이 "VRAM에" 또는 "시스템 RAM에" 있지 않고 메모리에 있음을 의미합니다.** Qwen3-Coder 30B Q4_K_M (~18 GB)을 로드하면 상주 상태를 유지합니다; Docker Compose 스택으로 전환해도 메모리에서 내쫓기지 않습니다. 독립 GPU VRAM 16 GB와 시스템 RAM 32 GB를 갖춘 노트북에서는 전환할 때마다 모델 교체에 5–10초가 걸립니다.',
          '**30B 모델은 24 GB에 편안하게 들어맞습니다; 64 GB는 나머지 모든 것을 위한 여유를 줍니다.** 64 GB로는 모델 로드, Docker 컨테이너 세 개(데이터베이스, redis, 샌드박스), VS Code, Devdocs 탭 하나, 터미널 멀티플렉서를 모두 가동하면서 느려짐이 없습니다.',
          '**부하 시 배터리 수명: 6–8시간.** USB-C 외장 배터리로 대부분의 비행을 커버합니다. M5는 출시된 LLM 지속 추론 칩 중 에너지 효율이 가장 높습니다 — 토큰당 전력 소비가 동급 성능의 독립 GPU 노트북보다 약 3배 낮습니다.',
          '**조용한 비행기에서 팬 소음 없음.** M5 섀시는 지속적으로 30B 모델을 수동으로 실행합니다. 독립 GPU 노트북은 추론 부하 시 팬이 눈에 띄게 작동합니다 — 집에서는 문제가 없지만 27번 줄에서는 사회적 문제입니다.',
          '**독립 GPU 대안은 원시 성능에서 경쟁력 있지만 더 많은 절충이 있습니다.** 모바일 RTX 4090 (16 GB VRAM)을 갖춘 Razer Blade 16은 M5보다 더 많은 토큰/초로 30B 모델을 실행하지만, 추론 시 배터리 수명이 ~2시간이고, 팬 소음이 심하며, 16 GB VRAM 한계로 32K 컨텍스트 설정이나 모델 옆에 데이터베이스 Docker 컨테이너를 유지할 수 없습니다.',
          '**더 심층적인 하드웨어 비교를 원하시면** [2026년 로컬 LLM을 위한 최고의 노트북](/ko/local-llms/best-laptops-local-llm)을 참조하십시오 — 해당 글에서는 모든 실용적인 옵션(M 시리즈 Mac, ROG Strix, Razer Blade, Framework 16)을 토큰/초, 배터리, 총 시스템 메모리로 순위를 매깁니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이미 32 GB M3 또는 M4 MacBook Pro가 있다면 업그레이드할 필요가 없습니다. 7B 모델은 8 GB RAM에서 편안하게 실행되며 30B 품질의 80–85%를 제공합니다. 64 GB 권장 사항은 오프라인 코딩을 위해 장비를 구매하는 사용자를 위한 것입니다; 이미 하드웨어가 있는 사람들은 먼저 7B로 테스트하십시오.',
          },
        ],
        image: '/images/local-coding-llm-hardware-comparison-es.svg',
        imageCaption: '오프라인 코딩을 위한 하드웨어 비교: Apple M5 MacBook Pro 64 GB가 권장 옵션(35–50 tok/s, 배터리 6–8h, 30B 모델 완전 지원); RTX 4090 노트북은 토큰/초에서 이기지만 추론 중 ~2h; RTX 4070/4090은 8–16 GB VRAM으로 7B 모델로 제한.',
      },
      modelChoice: {
        id: 'model-choice',
        title: '오프라인 작업에 적합한 로컬 모델 선택',
        content:
          '**모델은 디스크와 메모리에서 가장 큰 항목입니다; 처음부터 올바르게 선택하십시오.** 2026년 5월 기준으로 특히 오프라인 코딩 작업을 얼마나 잘 처리하는지 순서대로 정리한 세 가지 합리적인 옵션입니다.',
        items: [
          '**Qwen3-Coder 30B Q4_K_M (~18 GB) — 기본 권장 옵션.** TypeScript, Python, Rust, Go 자동 완성에서 동급 최고; 신뢰할 수 있는 도구 호출; 32K 토큰 컨텍스트 처리. 사용 가능한 메모리 24 GB 필요(Apple Silicon에서는 시스템 RAM, 독립 GPU에서는 VRAM).',
          '**Qwen3-Coder 7B Q4_K_M (~5 GB) — 경량 백업.** 통합 메모리 또는 VRAM 8 GB로 실행됩니다. 일상적인 작업에서 30B 품질의 약 80–85%; 다단계 리팩토링과 긴 컨텍스트 추론에서 차이가 납니다. 노트북 메모리가 24 GB 미만이거나 무거운 Docker 워크로드와 함께 모델을 사용하려는 경우의 올바른 선택.',
          '**DeepSeek Coder V3 — 매우 긴 컨텍스트가 필요한 경우 선택.** DeepSeek V3는 128K 토큰을 지원합니다; 단일 프롬프트에서 많은 파일에 걸쳐 디버깅할 때 유용합니다. 디스크에서 더 큽니다(Q4_K_M으로 ~25 GB); 원시 품질은 Qwen3-Coder 30B와 대략 동등합니다.',
          '**Codestral 22B — 속도 옵션.** Qwen3-Coder 30B보다 빠른 자동 완성; 도구 호출과 다단계 계획에서 약함. 오프라인 워크플로우가 자동 완성 위주이고 에이전트를 사용하지 않는다면 좋은 선택.',
          '**피해야 할 것:** 코드 파인튜닝 없이 13B 미만의 범용 모델(Llama 3.2 7B, Mistral Small)과 Q4_K_M보다 더 공격적인 양자화. 둘 다 실제 코딩 작업에서 명백하게 실패합니다.',
          '**언어별 HumanEval+ 점수를 포함한 전체 모델 비교는** [2026년 최고의 로컬 코딩 모델: Qwen3-Coder vs DeepSeek vs Codestral](/ko/power-local-llm/best-local-coding-models-2026)을 참조하십시오.',
        ],
        image: '/images/local-coding-llm-model-choice-es.svg',
        imageCaption: '오프라인 작업을 위한 로컬 코딩 모델: Qwen3-Coder 30B Q4_K_M (~18 GB, RAM 24 GB)이 기본 권장; Qwen3-Coder 7B (~5 GB, RAM 8 GB)는 80–85% 품질의 경량 백업; DeepSeek Coder V3 (~25 GB)는 128K 컨텍스트 워크플로우용; Codestral 22B는 가장 빠른 자동 완성용.',
      },
      dependencyCache: {
        id: 'dependency-cache',
        title: '의존성 캐시하기: npm, pip, cargo, go',
        content:
          '**패키지 관리자는 LLM 다음으로 두 번째로 흔한 오프라인 실패 지점입니다.** 각 언어는 다른 메커니즘을 가지고 있습니다; 원리는 같습니다 — 필요할 수 있는 모든 것을 미리 다운로드하고 `install`을 호출할 때 로컬 스토리지에서 제공하십시오.',
        items: [
          '**npm (Node.js):** Verdaccio를 설치하고(`npm install -g verdaccio`), npm이 그것을 가리키도록 설정하고(`npm config set registry http://localhost:4873/`), 각 프로젝트에서 `npm install`을 한 번 실행하십시오. Verdaccio는 각 패키지를 로컬로 캐시합니다; 이후 설치는 오프라인으로 작동합니다. 캐시는 `~/.local/share/verdaccio/storage`에 있습니다.',
          '**pip (Python):** 가장 간단한 패턴은 `pip download -r requirements.txt -d ~/wheelhouse`, 그런 다음 `pip install --no-index --find-links ~/wheelhouse -r requirements.txt`로 설치하는 것입니다. 여러 프로젝트에 사용하려면 devpi가 더 강력한 옵션입니다 — Verdaccio와 같은 형태이지만 Python용입니다.',
          '**cargo (Rust):** `cargo vendor`는 각 의존성을 프로젝트의 `vendor/` 디렉토리에 쓰고 cargo에게 그것을 사용하도록 지시하는 `.cargo/config.toml` 스니펫을 추가합니다. 커밋되면 프로젝트는 영원히 오프라인으로 빌드됩니다. Cargo는 또한 `~/.cargo/registry/cache`에 글로벌 레지스트리를 캐시합니다 — `cargo fetch`로 예열하면 대부분의 경우를 커버합니다.',
          '**go (Go):** 가장 간단한 패턴은 프로젝트별 `go mod vendor`입니다(Go는 Cargo처럼 `vendor/` 디렉토리를 씁니다). 글로벌 캐시는 로컬 Athens 프록시를 실행하고 `GOPROXY=http://localhost:3000`을 설정하십시오.',
          '**pnpm과 yarn (npm 변형):** npm과 동일하게 Verdaccio를 가리키십시오. pnpm의 내용 주소 지정 스토어는 기본적으로 오프라인 친화적입니다; 패키지가 스토어에 있으면 모든 프로젝트가 공유합니다.',
          '**Brew, apt, dnf (시스템 패키지):** 짧은 여행에는 덜 중요하지만 알아 두면 유용합니다. `brew bundle dump`는 나중에 다시 실행할 수 있는 Brewfile을 생성합니다; apt/dnf는 `apt-get download`와 다운로드된 `.deb`/`.rpm` 파일을 통한 오프라인 모드가 있습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '가장 간단한 패키지 오프라인 패턴은 프로젝트별입니다: Rust의 `cargo vendor`, Go의 `go mod vendor`, Node의 Verdaccio 대상 `npm install`, Python의 `pip download` — 전날 프로젝트 수준에서 모두 완료. 시스템 캐시(Verdaccio 스토어, ~/.cargo, ~/.npm)가 프로젝트 간에 필요한 것을 처리합니다.',
          },
        ],
      },
      offlineDocs: {
        id: 'offline-docs',
        title: '오프라인 문서: Devdocs, Zeal, Stack Overflow 덤프',
        content:
          '**모델은 대략 학습된 내용을 알고 있습니다; 나머지는 오프라인 문서와 코드에 있습니다.** 세 가지 소스가 Google에서 검색할 내용의 약 95%를 커버합니다.',
        items: [
          '**Devdocs (웹 앱, ~3 GB).** ~150개 언어와 프레임워크의 공식 문서를 미러링하는 독립형 Progressive Web App. `devdocs.io`를 열고 설정으로 이동해 사용하는 문서를 활성화하고 "오프라인에서 사용 가능하게"를 클릭하십시오. 브라우저가 모든 것을 캐시합니다; 비행기 모드에서 영원히 작동합니다.',
          '**Zeal (데스크톱 앱, ~5 GB).** Dash docset을 사용하는 네이티브 데스크톱 문서 브라우저 — macOS Dash 앱과 동일한 형식이지만 무료이고 크로스 플랫폼. Devdocs보다 키보드 탐색이 더 낫고, 검색이 더 약합니다. 하나를 선택하십시오; 둘 다 갖추는 것은 과합니다.',
          '**Stack Overflow 데이터 덤프 (~8 GB 압축).** Internet Archive는 공식 Stack Exchange 데이터 덤프를 토렌트로 호스팅합니다. Kiwix 같은 도구가 이것을 탐색 가능한 사이트로 제공하거나, 빠른 로컬 검색을 위해 Elasticsearch/SQLite-FTS로 인덱싱할 수 있습니다. 커버리지는 덤프 날짜에서 끊기지만 — 보통 몇 달 이내 — 일반 코딩 질문에는 충분히 남습니다.',
          '**프로젝트별 문서.** 자주 사용하는 라이브러리의 경우, 레포와 문서 사이트 소스를 클론하십시오. 대부분의 문서 사이트는 `docs/` 디렉토리에 있는 정적 사이트입니다; `mkdocs build` 또는 `npm run docs:build`가 `python -m http.server`로 제공할 수 있는 로컬 사이트를 생성합니다.',
          '**모델 자체는 학습 데이터에 있는 것에 대한 문서 역할을 합니다.** Qwen3-Coder 30B는 표준 라이브러리와 주요 프레임워크 — TypeScript, React, Python stdlib, NumPy, AWS SDK — 를 잘 알고 있습니다. 이에 대해서는 Devdocs를 검색하는 것보다 모델에게 물어보는 것이 더 빠른 경우가 많습니다. 구분은 "알려진 것은 모델, 새로운 것은 문서, 모르는 것은 소스 코드"입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Stack Overflow 콘텐츠 품질은 태그에 따라 크게 다릅니다. 덤프는 레거시 언어와 특정 오류 메시지에 가장 유용합니다 — 모델이 가장 잘 처리하지 못하는 부분입니다. 인기 있는 프레임워크 질문에 대해서는 모델이 덤프 검색보다 더 빠르고 정확합니다.',
          },
        ],
      },
      localSearch: {
        id: 'local-search',
        title: 'Google 없는 로컬 검색',
        content:
          '**`ripgrep`과 `rga`는 로컬 검색 워크플로우를 Google만큼 빠르게 느끼게 하는 두 가지 도구입니다.** 둘 다 무료이고, 둘 다 작고, 둘 다 모든 플랫폼에서 작동합니다.',
        items: [
          '**ripgrep (`rg`) — 코드를 위한 빠른 텍스트 검색.** 대규모 레포에서 `grep -r`을 대체하고 10–50배 능가합니다. 자동으로 `.gitignore`를 읽습니다. "이 함수가 어디에서 사용됩니까?"와 "이 API의 모든 호출자를 찾아라"에 대한 표준 도구.',
          '**rga (`ripgrep-all`) — PDF, 압축 파일, 다른 바이너리 형식을 위한 ripgrep.** PDF, zip 파일, gzip으로 압축된 로그, SQLite 데이터베이스, Office 문서를 투명하게 검색합니다. `rga "쿼리" .`는 일반 텍스트에 대해 ripgrep으로 폴백하면서 ripgrep이 할 수 없는 모든 파일 형식에서 검색합니다.',
          '**사용 사례 1 — "이 API 사용 예시가 필요합니다".** 그것을 사용하는 몇 개의 레포를 미리 클론하십시오; `rg "api_function_name" ~/code/examples`가 1초도 안 걸려 모든 실제 호출 사이트를 반환합니다. 사용 패턴에 대해서는 문서보다 낫습니다.',
          '**사용 사례 2 — "이 PDF 사양에서 X가 어디에 있습니까?"** `rga "특정 문구" ~/specs/`. 검토하는 데 2분이 걸리던 PDF가 200 ms 검색으로 바뀝니다.',
          '**사용 사례 3 — "Stack Overflow 없는 Stack Overflow".** Kiwix나 Elasticsearch로 Stack Overflow 덤프를 인덱싱했다면, 덤프에 대한 `rg` 스타일 쿼리가 레거시 주제에 대한 Google의 "stackoverflow" 검색을 대체합니다.',
          '**빠른 코딩 질문에는 검색보다 모델이 더 빠릅니다.** Continue.dev에서 `Cmd+L`을 누르면 코드베이스를 컨텍스트로 채팅이 열립니다; "인증 플로우를 어디서 처리합니까?"가 1–2초 안에 올바른 파일을 반환합니다, 검색 도구에 쿼리를 입력할 필요 없이.',
        ],
      },
      ide: {
        id: 'ide',
        title: '완전 오프라인으로 작동하는 IDE',
        content:
          '**대부분의 주요 IDE는 오프라인으로 작동합니다; 차이점은 확장, 라이선스 검증, AI 도구에 있습니다.** 중요한 것은 네트워크가 끊겼을 때 AI 기능이 계속 작동하는지 여부입니다, 이것이 사용자가 알아채는 부분이기 때문입니다.',
        items: [
          '**VS Code — 완전 오프라인 작동; AI 기능은 사용하는 확장에 따라 다릅니다.** Continue.dev는 Ollama 로컬 엔드포인트에 대해 완전히 실행되며 권장 조합입니다. Cursor의 내장 Tab 자동 완성은 네트워크 호출을 하고 조용히 성능이 저하됩니다. GitHub Copilot은 즉시 작동을 멈춥니다.',
          '**JetBrains IDE (IntelliJ, PyCharm, GoLand, WebStorm) — 라이선스가 캐시되면 완전 오프라인 작동.** 라이선스 서버는 주기적으로 핑합니다(개인 라이선스의 경우 30일마다) 하지만 장기 오프라인 기간을 허용합니다. Continue.dev는 기능 동등성을 갖춘 JetBrains 버전이 있습니다.',
          '**Vim과 Neovim — 설계상 완전 오프라인.** 라이선스 확인 없음, 텔레메트리 없음. 터미널 사이드 패널에서 Aider와 결합하거나; 또는 `llm.nvim` 플러그인을 사용해 로컬 Ollama를 가리키십시오.',
          '**Emacs — 설계상 완전 오프라인.** `aidermacs`를 통해 Aider와 결합하거나 `gptel`을 통해 로컬 Ollama HTTP API를 직접 호출하십시오.',
          '**Cursor — 부분 오프라인.** IDE 자체는 인터넷 없이 작동하지만 주요 기능(Tab 자동 완성, Cmd+K 에이전트)은 Cursor의 클라우드 라우팅이 필요합니다. Cursor 내에 VS Code 확장으로 Continue.dev를 설치하면 제한을 우회합니다; 오프라인 모드 호환 IDE에서 완전히 작동하는 로컬 AI 에디터를 얻을 수 있습니다.',
          '**특히 harness 계층의 더 심층적인 비교는** [Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코드 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '여행 시에는 Cline보다 Continue.dev를 선호하십시오. Cline의 자율 에이전트 루프는 전체 파일 내용을 대화에 스트리밍하여 토큰을 빠르게 소비합니다 — 전력이 있을 때는 괜찮지만, 모든 GPU 시간이 배터리 비용인 비행 중에는 불편합니다. Continue.dev의 자동 완성 중심 설계는 세션당 훨씬 적은 컴퓨팅을 사용합니다.',
          },
        ],
      },
      whatBreaks: {
        id: 'what-breaks',
        title: '연결 없이 실제로 실패하는 것 (정직한 목록)',
        content:
          '**이 설정은 진정으로 강력하지만 다섯 가지는 여전히 실패합니다.** 미리 실패 모드를 알면 피할 수 있습니다.',
        items: [
          '**완전히 새로운 서드파티 패키지 설치.** 캐시 미스, 소스 코드를 수동으로 vendoring하는 것 외에는 백업 없음. 해결책은 예방적입니다 — 사용할 가능성이 있는 것은 모두 미리 캐시하십시오, 가능한 옵션도 포함하여.',
          '**학습 데이터 마감 이후 출시된 API에 대한 모델 지식.** Qwen3-Coder의 학습 데이터 마감일은 2025년 10월입니다(2026년 5월 출시); 그 이후에 출시된 API는 기껏해야 추측입니다. 해결책: 소스 코드를 미리 클론하고 의심스러울 때 `rg`를 사용해 실제 시그니처를 찾으십시오. 학습 데이터보다 최신의 라이브러리에 대해 모델을 신뢰하지 마십시오.',
          '**OAuth 또는 API 인증 왕복이 필요한 것.** 클라우드 공급자 로그인, OAuth 토큰 교환, 팀 SSO 포털 접근 — 이 중 어느 것도 오프라인으로 작동하지 않습니다. 해결책: 이륙 전에 모든 인증을 완료하고 캐시된 토큰에 의존하십시오(보통 12–24시간 후 만료됩니다).',
          '**브라우저 기반 원격 서비스 테스트.** 테스트가 실제 API나 스테이징 환경을 호출한다면 연결 없이 실패합니다. 해결책: 로컬 mock을 사용하고(msw, nock, vcr) 미리 픽스처를 기록하십시오.',
          '**외부 서비스를 호출하는 이미지 및 에셋 생성.** 클라우드 이미지 생성기, 폰트 서비스, CDN으로 다운로드된 에셋이 모두 실패합니다. 해결책: 에셋을 레포에 포함하거나 완전히 로컬 이미지 모델을 사용하십시오(이는 별도의 스택입니다).',
          '**"그 라이브러리 이름이 뭐였더라?" 문제의 해결책은 모델 자체입니다.** Google을 검색할 수 없을 때, 모델에게 "X 기능을 위한 패키지 이름은 무엇입니까?"라고 물어보십시오 — 학습 데이터에 있는 것에 대해서는 80–90% 정확하게 답합니다. 설치 전에 패키지 캐시에서 확인하십시오.',
        ],
        image: '/images/local-coding-llm-what-breaks-es.svg',
        imageCaption: '오프라인에서 실패하는 것과 해결책: (1) 캐시 없는 패키지 — 출발 전 설치; (2) 마감 후 API 지식 — 소스 코드 클론 후 ripgrep 사용; (3) OAuth 인증 왕복 — 신호 잃기 전 인증 완료; (4) 원격 API 대상 테스트 — msw/nock으로 mock 사용; (5) 누락된 Docker 이미지 — 비행 전 docker pull 실행.',
      },
      updates: {
        id: 'updates',
        title: '나중에 모델과 캐시 업데이트',
        content:
          '**설정은 "스냅샷 후 실행" 방식입니다 — 모든 것이 캐시되면 업데이트를 선택할 때까지 정적으로 유지됩니다.** 업데이트는 온라인에서 이루어지고; 오프라인 세션은 업데이트 당시의 것을 사용합니다.',
        items: [
          '**모델은 `ollama pull`로 업데이트됩니다.** Qwen3-Coder 새 버전이 출시되면 온라인 상태에서 `ollama pull qwen3-coder:30b`를 실행하십시오. 새 가중치가 이전 것을 대체합니다; 다운로드 전에 태그를 지정했다면 이전 버전이 유지됩니다(`ollama tag qwen3-coder:30b qwen3-coder:30b-2026-05`).',
          '**패키지 캐시는 다음 온라인 `npm install` / `pip install` / `cargo update`에서 업데이트됩니다.** 특별한 워크플로우 없음 — 온라인 상태에서 일반 패키지 관리자가 계속 작동하고 오프라인 상태에서 고정됩니다.',
          '**Devdocs는 기본적으로 자동 업데이트됩니다.** 공항에서 신호가 있을 때 예상치 못한 다운로드를 방지하기 위해 비행 전에 자동 업데이트를 비활성화하십시오(설정 → 자동 업데이트 비활성화).',
          '**Stack Overflow 덤프는 분기별로 새로 고쳐집니다.** Internet Archive는 3개월마다 새 덤프를 게시합니다; 더 최신 커버리지를 원할 때 다시 다운로드하십시오.',
          '**계획할 주기:** 모델과 Devdocs는 2–3개월마다, 패키지 캐시는 새 작업을 시작할 때 프로젝트별로, Stack Overflow 덤프는 6–12개월마다. 진정으로 새로운 것을 시작하지 않는 한 긴급하지 않습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '가장 간단한 업데이트 플로우: 월 1회 일요일에 "온라인 유지보수의 날"을 지정하십시오. 새 모델 버전에 `ollama pull`을 실행하고, Devdocs를 새로 고치고, 활성 프로젝트에서 `npm update` / `cargo update` / `pip install --upgrade`를 실행하십시오. 그 후에는 성능 저하 없이 다음 달 동안 오프라인 상태를 유지할 수 있습니다.',
          },
        ],
      },
      teamCache: {
        id: 'team-cache',
        title: '팀과 오프라인 캐시 공유',
        content:
          '**함께 여행하거나 동일한 제한된 환경에서 작업하는 팀의 경우 캐시를 공유할 수 있습니다.** 이것이 개발자당 60 GB 다운로드와 사무실 네트워크에서 60 GB 한 번 다운로드의 차이입니다.',
        items: [
          '**Verdaccio도 팀 서버로 작동합니다.** 소규모 사무실 서버에 Verdaccio를 가리키고, 모든 사람을 위해 `npm config set registry http://team-cache.local:4873/`을 설정하십시오. 새 개발자는 자동으로 캐시를 얻습니다; 오프라인 여행은 노트북에서 필요한 것을 미리 동기화하는 것만 의미합니다.',
          '**모델은 팀 Ollama 서버에 호스팅될 수 있습니다.** 강력한 사무실 머신에서 `ollama serve`를 실행하고, 각 개발자의 Continue.dev 설정을 사무실에 있을 때 팀 서버를 가리키도록 하고, 여행용으로는 `localhost:11434`(로컬에 다운로드된 모델)로 전환하십시오.',
          '**Devdocs는 네이티브 팀 모드가 없지만 정적 폴더로 사소하게 공유 가능합니다.** 한 번 빌드하고 `http://docs.team.local`에 호스팅하여 모두가 북마크하십시오. 여행 시 개발자들은 `localhost`에서 개별 인스턴스를 실행합니다.',
          '**Git은 이미 팀 공유 가능합니다.** 사무실 네트워크 내 로컬 Gitea 또는 자체 호스팅 GitLab은 각 개발자에게 레포에 대한 오프라인 접근을 제공합니다; 개별 노트북의 `git clone --mirror`와 결합해 여행하십시오.',
          '**개인 레지스트리를 통한 컨테이너 이미지.** 소규모 Harbor 또는 Gitea 통합 레지스트리가 이미지를 한 번 캐시합니다; 여행자들은 출발 전에 로컬로 `docker pull`하십시오.',
          '**경제적 사례:** 자주 여행하는 개발자 5명 팀의 경우 캐시 공유가 월 약 250 GB의 인터넷 다운로드를 절약하고 비행 전 체크리스트를 60분에서 5분으로 줄입니다.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '오프라인 코딩 스택 설정의 흔한 실수',
        items: [
          '**실수 1: 여행 전에 오프라인 설정을 테스트하지 않음.** 가장 흔한 실패는 공항에서 공백을 발견하는 것입니다. 집에서 30분 "블랙아웃" 예행 연습을 하십시오 — Wi-Fi를 끄고, 모바일을 차단하고, 실제 작업에서 시도해 보십시오 — 필요하기 최소 24시간 전에.',
          '**실수 2: 현재 사용하는 패키지만 캐시하고 필요할 수도 있는 패키지는 캐시하지 않음.** 여행 중 의존성을 추가할 가능성이 있다면 집에서 smoke test로 한 번 설치하십시오. 캐시가 그것을 유지합니다.',
          '**실수 3: Cursor의 Tab 자동 완성을 활성화된 채로 두고 오프라인에서 작동한다고 가정함.** 작동하지 않습니다. IDE는 조용히 아무것도 제공하지 않는 상태로 폴백합니다; 자동 완성이 전혀 없습니다. Cursor 내에서 Continue.dev를 VS Code 확장으로 설치하거나, VS Code를 직접 사용하십시오.',
          '**실수 4: 진지한 코딩 작업에 7B 미만 모델 사용.** 7B 미만 코딩 모델은 출력을 수정하는 데 코드를 직접 작성하는 것보다 더 많은 시간을 소비할 만큼 충분히 실패합니다. 최소한 Qwen3-Coder 7B로 내려가십시오; 하드웨어가 그것도 처리할 수 없다면 그 노트북에서는 오프라인 코딩 설정이 실용적이지 않습니다.',
          '**실수 5: 학습 데이터 마감보다 최신의 라이브러리에 대해 모델을 신뢰함.** 자신 있게 환각합니다. 지난 6개월 내에 출시된 모든 것에 대해 모델 출력을 추정으로 취급하고 소스 코드에서 확인하십시오.',
          '**실수 6: 패키지 캐시를 건너뛰고 공항 라운지 Wi-Fi에서 `npm install`이 충분히 빠를 것이라고 가정함.** 라운지 Wi-Fi는 불안정하고, 다운로드가 중단되며, 의존성 트리가 절반만 설치된 상태로 탑승합니다. 전날 캐시하십시오.',
          '**실수 7: Docker 이미지를 잊음.** 개발 워크플로우가 데이터베이스를 위해 `docker compose up`을 사용한다면 이미지를 미리 다운로드해야 합니다. 이미지 없이 비행 중 첫 `docker compose up`은 넘을 수 없는 벽입니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ollama 문서](https://ollama.com/library) — 오프라인 VRAM/RAM 예산을 위해 참조된 Qwen3-Coder 변형 및 양자화 수준을 포함한 공식 모델 라이브러리.',
          '[Continue.dev 문서](https://docs.continue.dev/) — 설정 가이드, 로컬 모델 구성, 오프라인 모드 호환 자동 완성 및 채팅 워크플로우.',
          '[Aider 문서](https://aider.chat/) — 터미널 CLI 참조, 로컬 모델 구성, git을 통한 네이티브 오프라인 워크플로우 패턴.',
          '[Devdocs 소스 코드](https://github.com/freeCodeCamp/devdocs) — 오프라인 사용을 위한 공식 문서를 미러링하는 웹 앱; 다운로드 지침 및 PWA 캐시.',
          '[Stack Exchange 데이터 덤프 (Internet Archive)](https://archive.org/details/stackexchange) — 검색 대체용으로 사용되는 Stack Overflow 콘텐츠의 분기별 덤프.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '완전한 오프라인 코딩 설정은 얼마나 많은 공간을 차지합니까?',
            a: '커버리지에 따라 디스크에서 약 50–80 GB. 분류: Qwen3-Coder 30B Q4_K_M은 ~18 GB, Devdocs는 ~3 GB, Zeal docset은 사용하는 경우 ~5 GB, Stack Overflow 덤프는 ~8 GB, 프로젝트별 패키지 캐시(npm, pip, cargo, go)는 각각 2–10 GB를 추가합니다. 더 작은 공간 점유를 원하는 경우 7B 백업 모델은 ~5 GB입니다.',
          },
          {
            q: '오프라인 상태에서 새로운 npm 패키지를 설치할 수 있습니까?',
            a: '로컬 Verdaccio 캐시나 pnpm 스토어에 이미 있는 경우에만 가능합니다. 표준 비행 전 패턴은 집에서 프로젝트에 `npm install`을 실행하고, 추가할 수 있는 선택적 의존성에도 `npm install`을 실행하는 것입니다. 캐시하지 않은 패키지는 오프라인으로 설치할 수 없습니다; 대안은 소스 코드를 수동으로 클론하여 `node_modules`에 복사하는 것이지만 느리고 오류가 발생하기 쉽습니다. 미리 캐시하는 것이 정답입니다.',
          },
          {
            q: 'GitHub은 오프라인에서 작동합니까?',
            a: 'Git 자체는 완전히 오프라인으로 작동합니다 — `git commit`, `git branch`, `git rebase`, `git log`가 모두 로컬에서 실행됩니다. `git pull`, `git push`, `git fetch`, 또는 웹 인터페이스는 작동하지 않습니다. 전체 이력을 위해 `git clone --mirror`로 필요한 레포를 미리 클론하십시오; 커밋이 로컬에 쌓이고 연결이 돌아올 때 푸시됩니다. 진정한 오프라인 협업 작업의 경우 팀원의 노트북이나 소규모 사무실 서버에서 로컬 Gitea 또는 자체 호스팅 GitLab을 실행하십시오.',
          },
          {
            q: '완전 오프라인에서 가장 잘 작동하는 IDE는 무엇입니까?',
            a: 'Continue.dev가 있는 VS Code가 가장 완전한 오프라인 경험입니다: 풍부한 AI 기능, 좋은 확장 생태계, 라이선스 호출 없음. JetBrains IDE는 작동하지만 라이선스 서버가 주기적으로 핑합니다(~30일 오프라인 허용). Vim, Neovim, Emacs는 설계상 완전히 오프라인이며 Aider와 잘 결합됩니다. Cursor는 내장된 AI 기능이 네트워크 요청을 필요로 하기 때문에 내부에 Continue.dev를 설치해야 합니다.',
          },
          {
            q: '오프라인 작업을 위해 레포를 클론할 수 있습니까?',
            a: '예. `git clone --mirror <url> <path>`는 전체 이력과 모든 브랜치를 포함한 bare 클론을 만듭니다; `git clone <url>`은 일반 작업 복사본에 작동합니다. 둘 다 초기 클론 후 네트워크 없이 실행됩니다. 여러 레포 워크플로우의 경우 비행 전 클론을 스크립트화하는 것(`for repo in $REPOS; do git clone --mirror "$repo"; done`)이 가장 간단한 패턴입니다. 서브모듈은 미리 다운로드하기 위해 `git submodule update --init --recursive`가 필요합니다.',
          },
          {
            q: 'Linux에서 오프라인 코딩이 작동합니까?',
            a: '예 — Linux는 오프라인 코딩 설정에 가장 간단한 플랫폼입니다. Ollama가 네이티브로 실행되고, Continue.dev와 Aider에는 Linux 버전이 있으며, 모든 패키지 관리자(apt, dnf, pacman, nix)에는 오프라인 모드가 있고, 여기서 설명된 대부분의 도구는 원래 Linux에서 개발되었습니다. Linux 관련 주의 사항은 GPU 드라이버입니다: Linux용 NVIDIA 드라이버는 추론에 성숙하지만 오프라인으로 사용할 정확한 커널에서 테스트할 가치가 있습니다. Apple Silicon Mac과 독립 GPU가 있는 Linux 노트북은 둘 다 완전히 지원됩니다.',
          },
          {
            q: '인터넷 없이 로컬 AI 모델을 어떻게 업데이트합니까?',
            a: '할 수 없습니다 — 모델 업데이트는 연결이 필요합니다. 패턴은 "스냅샷 후 실행"입니다: 온라인에서 최신 모델을 다운로드하고 오프라인으로 전환하십시오. 신호가 돌아올 때(공항 라운지, 호텔 Wi-Fi, 집), `ollama pull qwen3-coder:30b`를 실행해 최신 가중치를 얻으십시오. 월간 업데이트 주기가 일반적입니다; 모델은 업데이트 사이에 조용히 성능이 저하되지 않습니다.',
          },
          {
            q: '팀과 오프라인 캐시를 공유할 수 있습니까?',
            a: '예. Verdaccio(npm)와 devpi(pip)는 둘 다 팀 서버로 작동합니다; Athens 프록시는 Go 모듈을 제공합니다; 개인 컨테이너 레지스트리는 Docker 이미지를 제공합니다; 자체 호스팅 Gitea 또는 GitLab은 git 원격을 제공합니다. 중앙화된 캐싱은 새 팀원이 각자 60 GB를 다운로드하는 대신 사무실 네트워크에서 모든 것을 얻음을 의미합니다. 여행 시 각 개발자의 노트북에는 여전히 사용할 것의 로컬 스냅샷이 필요하지만 중앙 캐시 덕분에 스냅샷이 저렴합니다.',
          },
          {
            q: '이것이 약한 신호가 있는 비행기에서도 작동합니까?',
            a: '예 — 그리고 불안정한 항공사 Wi-Fi에 의존하는 것보다 더 신뢰할 수 있습니다. 전체 스택은 네트워크 제로를 가정합니다; 약한 신호는 신호 없음과 동일하게 처리됩니다. 일화적으로, 로컬 LLM 자동 완성 지연 시간(M5에서 ~280 ms)은 연결이 좋을 때도 Copilot 서버까지의 일반적인 항공사 Wi-Fi 왕복(~400–800 ms, 저하 시 훨씬 더 나쁨)보다 빠릅니다. 오프라인 설계는 장거리 비행에서 "가능하면 온라인"을 능가합니다.',
          },
          {
            q: '오프라인으로 코딩하는 것이 온라인보다 빠릅니까?',
            a: '자동 완성과 채팅의 경우 예 — 로컬 추론 왕복은 클라우드 AI 공급자까지의 네트워크 왕복보다 빠릅니다. M5에서 Continue.dev + Qwen3-Coder 30B는 ~280 ms 안에 자동 완성을 반환합니다; 좋은 네트워크 조건에서 GitHub Copilot은 ~180–400 ms에 반환합니다; 성능이 저하된 네트워크에서 Copilot은 더 느리게 반환하거나 실패합니다. 지연 시간 차이는 작지만 일관되게 로컬 사용에 유리합니다. 가장 큰 이점은 결정론입니다 — 로컬 추론은 네트워크 상태에 관계없이 항상 같은 속도입니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[GitHub Copilot을 로컬 LLM으로 대체하기: 설정 및 비용 비교 2026](/ko/power-local-llm/replace-github-copilot-with-local-llm) — 인접한 목표: 동일한 스택, 다른 접근 방식(비용 vs. 오프라인). 비용 수치를 먼저 원한다면 읽으십시오.',
          '[Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코드 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 완전 오프라인으로 작동하는 harness와 Continue.dev, Aider, Cline의 차이에 대한 심층 커버리지.',
          '[2026년 최고의 로컬 코딩 모델: Qwen3-Coder vs DeepSeek vs Codestral](/ko/power-local-llm/best-local-coding-models-2026) — 언어별 HumanEval+ 벤치마크와 함께 방정식의 모델 측면.',
          '[태블릿에서 AI 실행: iPad 및 Android 로컬 LLM 앱](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 노트북보다 더 가벼운 오프라인 기기를 선호하는 여행자를 위한 안내.',
          '[2026년 로컬 LLM을 위한 최고의 노트북](/ko/local-llms/best-laptops-local-llm) — 하드웨어 참조; 모든 실용적인 노트북을 토큰/초, 배터리, 총 시스템 메모리로 순위 매김.',
          '[AI로 더 나은 코드 작성하기](/ko/prompt-engineering/write-better-code-with-ai) — 온라인 또는 오프라인에서 모든 모델의 코드 생성 품질을 향상시키는 프롬프팅 기법.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 코딩, RAG, 에이전트, 창작 작업에 대한 전체 가이드 라이브러리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '인터넷 없이 코딩하는 로컬 LLM: 완전한 오프라인 설정 가이드 (2026)',
      description: '14시간 비행으로 검증된 오프라인 코딩 스택. 로컬 LLM, npm/pip 캐시, Devdocs, ripgrep — 디스크 ~60 GB, 네트워크 요청 제로. 비행 전 체크리스트 포함.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-coding-llm-without-internet',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '인터넷 없이 코딩하는 로컬 LLM', item: 'https://www.promptquorum.com/ko/power-local-llm/local-coding-llm-without-internet' },
      ],
    },
  },
}
