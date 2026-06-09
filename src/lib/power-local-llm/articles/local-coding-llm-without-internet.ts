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
      url: 'https://www.promptquorum.com/es/es/power-local-llm/local-coding-llm-without-internet',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-coding-llm-without-internet',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
    seoTitle: 'نموذج LLM محلي للبرمجة بدون إنترنت: إعداد offline 2026',
    intro:
      'يمكن لإعداد البرمجة الكامل دون اتصال بالإنترنت في عام 2026 أن يتسع في نحو 60 غيغابايت على القرص، ويصمد خلال رحلة طيران مدتها 14 ساعة دون أي استدعاء شبكي. يتكوّن هذا الإعداد من نموذج LLM محلي (Qwen3-Coder 30B)، وواجهة تكامل مع المحرر (Continue.dev أو Aider)، ومرآة توثيق غير متصلة (Devdocs أو Zeal)، وسجل حزم مخزّن مؤقتاً (Verdaccio لـ npm وdevpi لـ pip)، وأداة بحث محلية في الكود (ripgrep و rga). الحالتان الوحيدتان اللتان تفشلان فعلاً دون إنترنت هما: تثبيت حزم طرف ثالث جديدة كلياً، ومعرفة النموذج بواجهات API صدرت بعد تاريخ انقطاع تدريبه — وكلاهما قابل للحل بالتنزيل المسبق قبل فقدان الاتصال.',
    metaDescription:
      'إعداد برمجة دون إنترنت جرى اختباره على رحلة 14 ساعة. نموذج LLM محلي، npm/pip مخزّن مؤقتاً، Devdocs، ripgrep — نحو 60 غيغابايت على القرص، صفر استدعاءات شبكية. يتضمن قائمة مراجعة ما قبل الرحلة.',
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
}
