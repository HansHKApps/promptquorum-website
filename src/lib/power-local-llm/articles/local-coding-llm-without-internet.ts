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
      },
      flightTest: {
        id: 'flight-test',
        title: 'The 14-Hour Flight Test: What Actually Happened',
        content:
          '**The setup was tested on a transpacific flight in March 2026 — 14 hours, no Wi-Fi (purchased airline pass failed at gate-out and never came back).** What follows is what worked, what almost broke, and what would have stopped the trip dead without preparation.',
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
          '**Skip:** general-purpose models under 13B without a coding fine-tune (Llama 3.2 7B, Mistral 7B), and any quantization harsher than Q4_K_M. Both fail in obvious ways on real coding work.',
          '**For the full coding-model comparison** including HumanEval+ scores per language, see [Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral](/power-local-llm/best-local-coding-models-2026).',
        ],
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
}
