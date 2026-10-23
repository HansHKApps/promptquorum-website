// Power Local LLM — Run Local AI on Your Tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)
// Slug: run-ai-on-tablet-ipad-android
// All 9 languages (en/de/fr/ja/zh/es/ko/pt/ar) have full content blocks.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'Run a Local LLM on Your Tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'Run a Local LLM on iPad and Android Tablet in 2026',
    intro:
      'Running a local LLM on a tablet in 2026 is practical on high-end iPads and Android devices with 8 GB+ RAM. The iPad Pro M5 (12 GB on base storage tiers, 16 GB on 1 TB/2 TB models) and iPad Air M4 (12 GB) both raised the on-device ceiling over their predecessors. This guide covers the options: on-device inference with PocketPal AI, Locally AI and Google AI Edge Gallery on iPad (LLM Farm is no longer installable from the App Store), PocketPal AI and Termux + Ollama on Android, and the remote-connection alternative (connecting a tablet to a Mac or PC running Ollama over local Wi-Fi) for devices that cannot run inference locally — including whether Ollama itself can run directly on an iPad (it cannot; iPadOS has no supported Ollama build).',
    metaDescription:
      'Ollama does not run on iPad, but a local LLM does: PocketPal AI or Locally AI on-device, Termux on Android, or Ollama on a Mac over Wi-Fi.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-en.webp',
    twitterDescription:
      'Run a local LLM on your iPad or Android tablet in 2026: on-device apps (PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama, and remote connection to a home Mac/PC running Ollama — with model picks per device.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'Tablet users who want to run AI locally or connect to a home LLM setup from their iPad or Android device — without relying on cloud AI services.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'run AI on tablet',
    targetKeywords: [
      'run ai on ipad locally',
      'run local llm android tablet',
      'ollama ipad remote connection',
      'termux ollama android',
      'llm farm ipad',
      'pocketpal ai ipad',
      'local llm on ipad pro m5',
    ],
    leadAnswerBlock:
      '**Running a local LLM on a tablet has two distinct modes: on-device inference (the model runs directly on the tablet\'s chip) and remote connection (the tablet is a display for a Mac or PC running Ollama at home). On-device is practical on iPad Pro M5 (12 GB on base storage tiers, 16 GB on 1 TB/2 TB models — runs Phi-4 Mini and Llama 3.2 3B at real-time speed with more headroom than the previous M4 generation), iPad Air M4 (12 GB, runs 3B–4B models comfortably), and high-end Android devices with 8 GB+ RAM (Samsung Galaxy Tab S10+, via PocketPal AI or Termux + Ollama). Ollama itself does not run natively on iPadOS — there is no supported iPad build — so iPad users who want Ollama specifically must use remote connection to a Mac or PC. Remote connection via Open WebUI or a simple chat UI at the home server\'s local IP works on any tablet, any RAM, any OS — it turns your tablet into a touch-friendly terminal to a more capable home machine. For most people, remote connection is the better option: the home machine runs the 70B model while the tablet provides the convenient interface.**',
    quickAnswerTop: {
      en: {
        question: 'Can you run a local LLM on an iPad or Android tablet?',
        answer:
          'Yes, on high-end devices. iPad Pro M5 (12 GB on base storage tiers, 16 GB on 1 TB/2 TB models) runs Phi-4 Mini (3.8B) and Llama 3.2 3B at real-time speed using PocketPal AI or Locally AI, with more headroom than the previous M4 generation. iPad Air M4 (12 GB) runs 3B–4B models comfortably. Android tablets with 8 GB+ RAM (Samsung Galaxy Tab S10+) can run Phi-4 Mini and Qwen3 1.7B via PocketPal AI or Termux + Ollama. Ollama does not run natively on iPadOS itself — iPad users who specifically want Ollama need remote connection to a Mac or PC. For tablets with less RAM or older chips, the practical alternative is remote connection: connect to a Mac or PC running Ollama on your home network using Open WebUI in the tablet\'s browser.',
        bullets: [
          'iPad Pro M5 (12 GB / 16 GB) — runs Phi-4 Mini and Llama 3.2 3B locally at real-time speed using PocketPal AI or Locally AI, faster than the prior M4 generation thanks to higher memory bandwidth.',
          'iPad Air M4 (12 GB) — runs 3B–4B models at usable speed; 7B models are slow but functional.',
          'Android tablets (8 GB+ RAM) — PocketPal AI (no terminal) or Termux + Ollama runs Phi-4 Mini and Qwen3 1.7B locally.',
          'Ollama itself has no native iPadOS build — running Ollama "on" an iPad means remote-connecting to a Mac or PC that runs it, not installing it on the iPad.',
          'Remote connection — any tablet, any RAM: connect to your home Mac or PC running Ollama via Open WebUI in the browser.',
          'Best on-device model for most tablets: Phi-4 Mini (3.8B, ~2.7 GB) or Qwen3 1.7B for RAM-constrained devices.',
          'Remote connection recommended over on-device for 7B+ models — home machine runs the model faster than any tablet.',
          'SillyTavern and RisuAI both have mobile-responsive UIs that work in iPad Safari / Android Chrome.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Two Modes: On-Device vs Remote Connection', anchor: '#two-modes' },
      { label: 'iPad: On-Device Inference', anchor: '#ipad-on-device' },
      { label: 'Android: On-Device Inference', anchor: '#android-on-device' },
      { label: 'Remote Connection to a Home Machine', anchor: '#remote-connection' },
      { label: 'Model Recommendations by Device', anchor: '#models' },
      { label: 'Tablet Frontends for Local AI', anchor: '#frontends' },
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
          '**On-device inference is practical on iPad Pro M5 (12 GB / 16 GB), iPad Air M4 (12 GB), and high-end Android (8 GB+).** Below these thresholds, generation is too slow for real-time use. Remote connection to a home machine is the better option for most tablet users.',
          '**Remote connection is the recommended approach for most people.** Connect your tablet (any RAM, any OS) to a Mac or PC running Ollama on your home network. The home machine runs the 70B model; the tablet gets a touch-friendly chat interface. No model download required on the tablet.',
          '**PocketPal AI, Locally AI and Google AI Edge Gallery are the current iPad on-device options.** PocketPal AI imports GGUF models, Locally AI runs MLX models built for Apple Silicon, and Google AI Edge Gallery runs Google\'s Gemma models. LLM Farm was removed from the App Store in August 2025 and last updated on 2026-01-30 — treat it as a build-from-source option only.',
          '**PocketPal AI is the easiest Android approach; Termux + Ollama is the flexible one.** PocketPal AI is a Google Play app with no terminal step. Termux + Ollama needs comfort with a terminal but gives the full Ollama ecosystem on devices with 8 GB+ RAM, serving the model at localhost:11434.',
          '**Best on-device model for most tablets: Phi-4 Mini (3.8B).** Runs on anything with 6 GB+ available RAM; produces usable output for most everyday tasks; downloads in 5–10 minutes on a fast connection.',
          '**Open WebUI in the tablet browser is the simplest remote connection interface.** If your home Mac or PC runs Open WebUI at `192.168.x.x:3000`, open that address in your tablet\'s browser — no app install, no configuration, full chat interface.',
          '**SillyTavern has a mobile-responsive UI.** For roleplay and character-card use on tablet, SillyTavern running on a home machine and accessed from the tablet browser works well; RisuAI has the best native mobile support.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**iPad apps:** PocketPal AI (free, MIT), Locally AI (free + paid options, MLX), Google AI Edge Gallery (free, Apache 2.0). LLM Farm (free, MIT, iOS-only) was removed from the App Store in August 2025 and now has to be built from source.',
          '**Android method:** PocketPal AI or Google AI Edge Gallery (apps, no terminal), or Termux + Ollama (CLI).',
          '**Remote connection:** any tablet browser → Open WebUI or a simple chat UI at your home machine\'s local IP. This is also how iPad users run Ollama, since Ollama has no native iPadOS build.',
          '**Minimum for on-device:** iPad Air M4 (12 GB) for 3B–4B models; iPad Pro M5 (12 GB / 16 GB) for 7B–8B models.',
          '**Minimum Android for on-device:** 8 GB RAM device (Samsung Galaxy Tab S10+, OnePlus Pad 2).',
          '**Best on-device model:** Phi-4 Mini (3.8B, 2.7 GB) for most tablets; Qwen3 1.7B for very constrained devices.',
          '**Remote connection speed:** depends on Wi-Fi quality and the home machine\'s generation speed, not the tablet\'s hardware.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'Two Modes: On-Device vs Remote Connection',
        content:
          '**The most important decision is not which app to use — it is whether to run inference on the tablet or on a more powerful machine at home.** Each mode has a distinct hardware requirement and capability ceiling.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Running AI on a tablet has two practical modes: on-device inference (model runs on the tablet chip, limited to 3B–7B models) or remote connection (tablet is a browser display for a home Mac or PC running larger models via Ollama and Open WebUI).',
          },
          {
            type: 'plain-terms',
            text: 'On-device mode: the model lives on your tablet and works offline. It is limited to small models (3B, maybe 7B on a high-end iPad Pro) and is slower than a cloud AI. Remote mode: your home Mac or PC runs Ollama and a 70B model, and your tablet just shows the chat in a browser — you get full 70B quality on the tablet\'s screen, no model stored on the tablet, and the home machine needs to be on and on the same Wi-Fi. Choose remote connection unless you specifically need offline use.',
          },
        ],
        columns: ['Factor', 'On-Device', 'Remote Connection'],
        rows: [
          { 'Factor': 'Model size limit', 'On-Device': '3B–8B (iPad Pro M5); 3B–4B (most tablets)', 'Remote Connection': 'Unlimited — home machine runs any model' },
          { 'Factor': 'Offline use', 'On-Device': 'Yes — works without Wi-Fi', 'Remote Connection': 'No — requires home Wi-Fi' },
          { 'Factor': 'Generation speed', 'On-Device': 'Moderate (12–30 tok/sec on iPad Pro M5)', 'Remote Connection': 'Depends on home machine (up to 40+ tok/sec)' },
          { 'Factor': 'Storage on tablet', 'On-Device': '2–10 GB per model', 'Remote Connection': 'None — model lives on home machine' },
          { 'Factor': 'Setup complexity', 'On-Device': 'Low (download app + model file)', 'Remote Connection': 'Low–Medium (home machine needs Ollama + Open WebUI)' },
          { 'Factor': 'Best for', 'On-Device': 'Travel, offline use, 3B model tasks', 'Remote Connection': 'Quality-first use, 70B models, convenience' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you already have a Mac or PC at home that can run Ollama, start with remote connection. You get better model quality on your tablet immediately without storing model files on the tablet or dealing with mobile app limitations. Add on-device capability later if you find yourself wanting offline use.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-en.svg',
        imageCaption: 'Two tablet AI modes: on-device inference (model runs on tablet chip, works offline, limited to 3B–8B models) vs remote connection (tablet browser connects to home Mac/PC running Ollama, no model stored on tablet, unlimited model size).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: On-Device Inference',
        content:
          '**iPad Pro M5 is the iPad best suited to 7B–8B models.** Apple raised the base RAM on the M5 iPad Pro to 12 GB (16 GB on the 1 TB/2 TB storage tiers), up from 8 GB on the base M4 iPad Pro, and increased memory bandwidth to 153 GB/s from 120 GB/s — LLM inference on Apple Silicon is memory-bandwidth-bound, so this translates directly into faster generation. iPad Air M4 (12 GB, up from 8 GB on the M3 Air) now runs 3B–4B models comfortably instead of merely adequately. The iPad Air M3 (8 GB) and other 8 GB iPads are limited to 1B–3B models at Q4. [iPhone with 8 GB RAM also runs small models](/power-local-llm/best-local-llm-apps-iphone-2026) through LLM Farm.',
        items: [
          '**PocketPal AI** (free, open-source MIT, iOS + Android): runs GGUF models through llama.cpp, downloads models from Hugging Face inside the app or imports files, and includes a built-in benchmark so you can measure your own tablet\'s tokens per second. Last upstream update: 2026-10-19. See the [PocketPal AI review](/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (free with paid options, closed-source, iPhone/iPad/Mac): runs open models through Apple\'s MLX framework, built for Apple Silicon. Last App Store update: 2026-10-15. See the [Locally AI review](/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (free, Apache 2.0, iOS + Android): Google\'s on-device app for its Gemma models, running on the LiteRT-LM runtime. Last upstream update: 2026-10-23. See the [Google AI Edge Gallery review](/power-local-llm/google-ai-edge-gallery-review). It also runs Gemma 4 (E2B and E4B), Google\'s current small on-device models.',
          '**LLM Farm** (free, MIT, iOS-only): Apple removed the App Store listing in August 2025, and the project\'s README lists both the App Store and TestFlight as "temporarily unavailable" — the only route is building from [source](https://github.com/guinmoon/LLMFarm) in Xcode. Last upstream update: 2026-01-30, more than 180 days ago, so it may be unmaintained; check the repository before relying on it. See the [LLM Farm review](/power-local-llm/llm-farm-review).',
          '**Importing models:** in PocketPal AI, download a GGUF model from Hugging Face inside the app, or import a GGUF file you transferred with Apple Files. Models are stored in the app\'s local storage — not iCloud.',
          '**RAM management on iPad:** iOS aggressively manages RAM for background apps. Close all other apps before running a 7B model on a 12 GB iPad — iOS will evict the model if another app needs memory. On the 16 GB iPad Pro M5 (1 TB/2 TB tiers), this is rarely an issue.',
          '**Generation speed estimates (approximate, not PromptQuorum benchmarks — use PocketPal AI\'s built-in benchmark to measure your own device):** iPad Pro M5 (12 GB / 16 GB): Phi-4 Mini ~25 tok/sec, Llama 3.2 3B ~38 tok/sec, Gemma 3 4B ~23 tok/sec — roughly 25–30% faster than the previous M4 generation, in line with the memory-bandwidth increase. iPad Air M4 (12 GB): 3B–4B models ~15–20 tok/sec; 7B models ~7–10 tok/sec (still slow for real-time chat).',
          '**Entry-level iPads and iPads with 8 GB RAM or less:** use 1B–3B models at Q4, or treat the iPad as a remote-connection display. If a model does not fit in free RAM, iPadOS closes the app instead of slowing down gracefully.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not try to run a 7B model on a 12 GB iPad Air for real-time chat. At 7–10 tokens per second, every response still takes 10–20 seconds. This is usable for summarisation tasks where you send a prompt and wait, but frustrating for conversational use. Use 3B–4B models on iPad Air; upgrade to the 16 GB iPad Pro M5 or switch to remote connection for 7B+.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-en.svg',
        imageCaption: 'iPad on-device inference speed: iPad Pro M5 (12 GB / 16 GB) reaches 23–38 tok/sec on Phi-4 Mini and Llama 3.2 3B; iPad Air M4 (12 GB) runs 3B–4B models at 15–20 tok/sec but drops to 7–10 tok/sec on 7B models — still slow for real-time chat.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: On-Device Inference',
        content:
          '**Android on-device inference uses [Termux + Ollama](/power-local-llm/best-local-llm-apps-android-2026) — Termux is a Linux terminal emulator that runs Ollama natively on Android.** This is more technical than the iPad app experience but gives access to the full Ollama ecosystem.',
        numberedItems: [
          'Install Termux from F-Droid (not the Play Store version — the Play Store build is outdated and lacks required packages).',
          'In Termux: `pkg update && pkg upgrade`',
          'Install Ollama from the Termux package repository: `pkg install ollama` (older guides build Ollama from source with Go, which is no longer needed).',
          'Pull a model: `ollama pull phi4-mini` or `ollama pull qwen3:1.7b`.',
          'Start the server: `ollama serve` (keep this running in a Termux session).',
          'Chat via Termux: `ollama run phi4-mini` — or open a web browser and go to `http://localhost:11434` to access the API. Install an Android chat app that connects to a local Ollama endpoint for a GUI.',
        ],
        items: [
          '**Easier alternatives to Termux:** PocketPal AI (Google Play, free, MIT; last upstream update 2026-10-19) and Google AI Edge Gallery (free, Apache 2.0; last upstream update 2026-10-23) run on-device models with no terminal. Start with one of them unless you specifically need Ollama. See the [PocketPal AI review](/power-local-llm/pocketpal-ai-review).',
          '**Supported devices for 3B+ models:** 8 GB RAM minimum (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Devices with 6 GB run Qwen3 1.7B only.',
          '**Pixel Tablet not recommended for on-device:** Pixel Tablet (2023 model, 8 GB Tensor G2) was excluded from the recommended on-device list — Tensor G2 is significantly slower than Snapdragon 8 Gen 3 / Dimensity 9300 for LLM inference, producing 4–7 tok/sec on Phi-4 Mini (too slow for conversational use). Pixel Tablet users should use remote connection to a home machine.',
          '**Snapdragon 8 Gen 3 and Dimensity 9300** are the fastest Android chips for on-device inference in 2026. Generation speed: ~15–25 tok/sec for 1.7B models; ~8–12 tok/sec for 3B models.',
          '**Model storage:** Android does not have unified memory — the model runs in system RAM without GPU acceleration in most Termux configurations. GPU acceleration requires Termux:NVIDIA or specific Vulkan builds; setup is more complex.',
          '**Alternative apps:** MNN LLM (Alibaba, free, Android app with on-device inference for select models) is an easier setup but has a more limited model selection than Ollama. AI Runner and llamafile also have Android builds with varying support. There is no Android version of LLM Farm — it is an iOS-only app; PocketPal AI is the closest Android equivalent.',
          '**Other brands (Huawei MatePad, Xiaomi Pad, Galaxy Tab A-series):** RAM and chip decide, not the brand. Check the tablet\'s RAM in Settings: under 6 GB, stay with 1B–1.7B models or use remote connection; 8 GB or more, follow the 8 GB row of the model table.',
          'For a Japan-specific Xperia setup guide with hardware compatibility table, see <a href="/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">how to run a local LLM on Xperia phones in Japan</a>.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install the Termux:Widget addon and create a shortcut that runs "ollama serve" — this lets you start the Ollama server from your Android home screen without opening Termux manually. Once Ollama is serving, open any chat app configured to connect to localhost:11434.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-en.svg',
        imageCaption: 'Android on-device AI: 5-step Termux + Ollama setup — install Termux from F-Droid (not Play Store), update packages, install Ollama with pkg install ollama, pull a model (phi4-mini or qwen3:1.7b), then start the server at localhost:11434. Requires 8 GB RAM minimum.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Remote Connection to a Home Machine',
        content:
          '**The simplest setup for most tablet users: run Ollama and Open WebUI on your home Mac or PC, then access the chat UI from your tablet browser on the same Wi-Fi network.** Your tablet becomes a touch-screen interface to the more powerful machine running Ollama at home — see [the laptop guide](/local-llms/best-laptops-local-llm) for hardware sizing if you are choosing the home machine.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Remote connection to a home machine running Ollama and Open WebUI gives any tablet full access to 70B models via a browser — no model stored on the tablet, no app install, and no compromise on model quality.',
          },
          {
            type: 'plain-terms',
            text: 'On your Mac or PC: install Ollama, pull a model, install Open WebUI (Docker one-liner), and run it bound to your local network IP. On your tablet: open Safari or Chrome, go to http://[your-mac-IP]:3000, and you have a full AI chat interface. The model runs on the Mac; the tablet just shows the chat. Works on any tablet, any OS, any screen size.',
          },
        ],
        numberedItems: [
          '**On the home machine:** install Ollama (`brew install ollama` on macOS, download from ollama.com on Windows). Pull a model: `ollama pull llama3.3:70b` (or any model). Start Ollama with network binding: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Install Open WebUI** (the most tablet-friendly chat UI): `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. Open WebUI is now accessible at `http://[your-machine-IP]:3000`.',
          '**Find your home machine\'s local IP:** on macOS, System Settings → Network → the current network → IP Address. On Windows, run `ipconfig` in Command Prompt and look for IPv4 Address. Note the IP (typically `192.168.x.x`).',
          '**On the tablet:** open Safari (iPad) or Chrome (Android). Navigate to `http://[your-machine-IP]:3000`. Create an account in Open WebUI (local only, no cloud). Select your model from the dropdown. Start chatting.',
          '**Security:** this setup is local-network-only. Do not expose port 3000 to the internet without adding Open WebUI authentication (it has a built-in admin account system). The connection is plain HTTP — do not send sensitive information over public Wi-Fi.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Bookmark the home machine\'s Open WebUI URL on your tablet\'s home screen (in Safari: Share → Add to Home Screen; in Chrome: three-dot menu → Add to Home Screen). This makes it feel like a native app. On iPad, full-screen web apps in Safari hide the browser chrome for an app-like experience.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-en.webp',
        imageCaption: 'Remote AI from a tablet in 4 steps: install Ollama on your home machine, pull a model + Open WebUI, find your home IP address, then open http://[IP]:3000 in your tablet browser — no model stored on tablet, runs 70B models at 20–40 tok/sec.',
      },
      models: {
        id: 'models',
        title: 'Model Recommendations by Device',
        content:
          '**Model choice is determined by available RAM — not by preference.** The table below maps device RAM to the largest model that runs at real-time speed (over 8 tokens/sec). For the model layer specifically, see [Best Mobile LLM Models in 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm). For the broader model landscape across all hardware tiers, see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        columns: ['Device / RAM', 'Recommended Model', 'Speed', 'Best for'],
        rows: [
          { 'Device / RAM': 'iPad Air M4 (12 GB)', 'Recommended Model': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'Speed': '~18–20 tok/sec', 'Best for': 'Writing assistance, summarization' },
          { 'Device / RAM': 'iPad Air M3 / other 8 GB iPads', 'Recommended Model': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Speed': '~10–18 tok/sec (est.)', 'Best for': 'Light drafting, summaries' },
          { 'Device / RAM': 'iPad Pro M5 (12 GB / 16 GB)', 'Recommended Model': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Speed': '~32–38 tok/sec / ~20–23 tok/sec', 'Best for': 'Real LLM workstation, RAG, fiction drafting' },
          { 'Device / RAM': 'Android 8 GB (Tab S10+)', 'Recommended Model': 'Phi-4 Mini Q4 via Termux+Ollama', 'Speed': '~10–15 tok/sec', 'Best for': 'Power users comfortable with Termux' },
          { 'Device / RAM': 'Android 6 GB', 'Recommended Model': 'Qwen3 1.7B Q4', 'Speed': '~15–20 tok/sec', 'Best for': 'Light chat, translation, simple tasks' },
          { 'Device / RAM': 'Pixel Tablet (8 GB)', 'Recommended Model': 'Remote connection only', 'Speed': 'N/A', 'Best for': 'Tensor G2 too slow for on-device' },
          { 'Device / RAM': 'iPad mini 7 (A17 Pro, 8 GB)', 'Recommended Model': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Speed': 'Not benchmarked', 'Best for': 'Light drafting, summaries' },
          { 'Device / RAM': 'iPad A16 (6 GB) / iPad 10th gen (4 GB)', 'Recommended Model': 'Qwen3 1.7B Q4 or smaller', 'Speed': 'Not benchmarked', 'Best for': 'Short Q&A; remote for more' },
          { 'Device / RAM': 'Galaxy Tab S11 Ultra (12 GB / 16 GB)', 'Recommended Model': 'Gemma 4 E4B / Phi-4 Mini Q4', 'Speed': 'Not benchmarked', 'Best for': 'More multitasking (16 GB tier)' },
          { 'Device / RAM': 'Any tablet via remote (incl. iPad + Ollama)', 'Recommended Model': 'Any model on home machine', 'Speed': '~20–40 tok/sec', 'Best for': 'Quality-first use, 70B models, running Ollama with an iPad' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For most everyday tasks (drafting text, answering questions, summarising content), Phi-4 Mini (3.8B) on a tablet is adequately capable. Where it falls short compared to a 70B model: complex multi-step reasoning, nuanced creative writing, and long document analysis. For these tasks, use remote connection to a home machine running a larger model.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-en.webp',
        imageCaption: 'Best model by tablet: iPad Pro M5 (12 GB / 16 GB) reaches 32–38 tok/sec on Llama 3.2 3B; iPad Air M4 runs Phi-4 Mini at 18–20 tok/sec; Android 8 GB reaches 10–15 tok/sec via Termux; Pixel Tablet requires remote connection due to slow Tensor G2 chip.',
      },
      frontends: {
        id: 'frontends',
        title: 'Tablet Frontends for Local AI',
        content:
          '**The chat interface you use on the tablet affects usability significantly.** Some frontends are designed for mobile; others are desktop-first and just tolerable on tablet.',
        items: [
          '**Open WebUI (browser):** best mobile-responsive web UI for general chat. Works at any local IP:port in Safari or Chrome. Adapts cleanly to tablet aspect ratios. Recommended for remote connection setups.',
          '**PocketPal AI (iPad and Android app):** free, open-source, imports GGUF models and has a built-in benchmark. The most flexible on-device option on both platforms.',
          '**Locally AI (iPad app):** clean Apple-style interface built on MLX; the simplest first-run experience for non-technical users on iPad.',
          '**Google AI Edge Gallery (iPad and Android app):** Google\'s Gemma-focused app; the easiest way to try Google\'s small models on-device.',
          '**RisuAI (browser, mobile-responsive):** best mobile experience for roleplay and character-card fiction. Can connect to a remote Ollama instance. Works in iPad Safari with a near-app-quality interface.',
          '**SillyTavern (browser):** works on iPad Safari connected to a remote Ollama instance. Not optimised for mobile but functional. Some extension features do not work in mobile Safari.',
          '**Termux CLI (Android):** command-line only. Usable for scripted tasks; not practical for conversational use without a companion app.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For roleplay and character-card fiction on iPad, RisuAI connected to a remote Ollama instance running Llama 3.3 70B is a strong combination in 2026. RisuAI\'s mobile interface is designed for touch; the remote connection gives access to a 70B model that produces significantly better character voice than any model that fits on a tablet.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Searching the App Store for LLM Farm.** Apple removed it in August 2025. Use PocketPal AI or Locally AI, or build LLM Farm from source.',
          '**Running a 7B model on an 8 GB tablet.** At 5–8 tokens/sec, this is too slow for conversational use. Use 3B models for on-device chat on 8 GB devices; use remote connection for 7B+ quality.',
          '**Using the Play Store Termux on Android.** The Play Store version of Termux is outdated and lacks the packages needed for Ollama. Always install Termux from F-Droid.',
          '**Exposing Open WebUI to the internet without authentication.** Open WebUI has no password by default. If you expose it beyond your home network, anyone who finds the URL gets access to your model. Enable the admin account system and use a firewall.',
          '**Not closing other apps before running on-device on 8 GB iPad.** iOS evicts background apps from RAM. A 3B model on an 8 GB iPad uses ~3.5 GB; if iOS reclaims that memory for another app, the model crashes. Close all other apps before starting inference.',
          '**Expecting desktop-quality UI on mobile browsers.** SillyTavern and some other frontends are desktop-first. Their mobile experience in a browser is functional but not polished. For mobile-first UX, prefer RisuAI or Open WebUI.',
          '**Typing `ipad.local` into the browser.** Safari needs the home machine\'s address — its IP or hostname, for example `192.168.1.20:3000` or `my-mac.local:3000` — not the tablet\'s own name. A name like `ipad.local` points at a tablet, not at the machine that runs Ollama.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LLM Farm (iOS) documentation and GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [App Store listing](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Termux Ollama package — [Termux](https://termux.dev) (install Termux from F-Droid)',
          'Ollama ARM build for Termux — [Ollama documentation](https://ollama.com/docs)',
          'Open WebUI documentation — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M5 iPad Pro chip specs, RAM tiers, and memory bandwidth — [Apple Newsroom, October 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Apple M4 iPad Air chip specs and RAM — [Apple Newsroom, March 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Gemma 4 model overview and memory requirements — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Samsung Galaxy Tab S11 Ultra chip and RAM tiers — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can you run AI on an iPad?',
            a: 'Yes, on iPad Pro M5 (12 GB base / 16 GB on the 1 TB and 2 TB tiers) and iPad Air M4 (12 GB). The iPad Pro M5 runs Phi-4 Mini and Llama 3.2 3B at real-time speed using PocketPal AI or Locally AI, roughly 25–30% faster than the previous M4 iPad Pro thanks to higher memory bandwidth (153 GB/s vs 120 GB/s). The iPad Air M4 runs 3B–4B models comfortably. For 7B+ models on an iPad, remote connection to a home Mac or PC running Ollama is recommended — the iPad displays the chat but the home machine handles inference.',
          },
          {
            q: 'Does Ollama run on an iPad?',
            a: 'No — Ollama has no supported iPadOS build, so it cannot be installed directly on an iPad the way it can on Android via Termux. "Running Ollama on iPad" means running Ollama on a Mac or PC and connecting to it from the iPad browser (via Open WebUI at the home machine\'s local IP) — the iPad is a display, not the inference engine. For true on-device inference on an iPad, use an on-device app such as PocketPal AI (GGUF models via llama.cpp) or Locally AI (MLX models) instead.',
          },
          {
            q: 'Can you run AI on an Android tablet?',
            a: 'Yes, on devices with 8 GB+ RAM using PocketPal AI or Termux + Ollama. The Samsung Galaxy Tab S10+ (12 GB RAM) runs Phi-4 Mini at ~10–15 tokens/sec. Devices with 6 GB RAM can run Qwen3 1.7B. The setup requires Termux from F-Droid and comfort with a few terminal commands. Remote connection to a home machine is the easier path for most Android tablet users.',
          },
          {
            q: 'Does on-device AI on a tablet work without internet?',
            a: 'Yes. Once the model is downloaded and the app is installed, on-device inference on iPad (PocketPal AI, Locally AI) and Android (Termux + Ollama) works with no internet connection. This is one of the main advantages of on-device over remote connection — the remote connection approach requires your home Wi-Fi.',
          },
          {
            q: 'What is the best AI app for iPad?',
            a: 'For on-device inference: PocketPal AI (open-source, imports any GGUF model) or Locally AI (simplest UI, MLX). LLM Farm is no longer available on the App Store. For remote connection to a home Ollama server: Open WebUI in Safari (best general chat), RisuAI in Safari (best for roleplay and character fiction). The best choice depends on whether you want on-device capability, offline use, or the best interface quality.',
          },
          {
            q: 'Is Termux + Ollama safe to use on Android?',
            a: 'Yes. Termux is a well-established Android terminal emulator used by millions of developers. Ollama in Termux serves a local-only API (localhost:11434 by default) — it is not accessible from other devices on your network unless you explicitly change the bind address. The model files are stored in Termux\'s private storage, not in shared Android storage.',
          },
          {
            q: 'Can I use ChatGPT-quality responses on a tablet locally?',
            a: 'Not quite, but close with the right setup. Frontier cloud-model quality generally requires a 70B+ model. On a tablet: the iPad Pro M5 (12 GB / 16 GB) cannot run 70B models — only 3B–8B models fit. Via remote connection: if your home machine has a 24 GB GPU (RTX 4090) or 64 GB unified memory (Mac M5 Max), it can run Llama 3.3 70B, and your tablet accesses that quality via Open WebUI in the browser. That is the closest to cloud-AI quality on a tablet.',
          },
          {
            q: 'How do I keep my home Ollama server running when I close the laptop lid?',
            a: 'On macOS, set the lid-close sleep policy: System Settings → Battery → disable "Enable Power Nap" and use a tool like Amphetamine to prevent sleep when plugged in. On Windows, go to Power Options → Change plan settings → "Never" for sleep when plugged in. Alternatively, run Ollama on a always-on machine (mini PC, NAS, or a repurposed old laptop) rather than your primary laptop.',
          },
          {
            q: 'Does running AI on a tablet drain the battery quickly?',
            a: 'Yes — on-device inference is CPU/GPU-intensive and drains the battery much faster than browsing; the rate varies by device and model. For extended use, keep the tablet plugged in. Remote connection to a home machine draws significantly less tablet battery — the tablet is just displaying a web page.',
          },
          {
            q: 'Do tablets thermal-throttle during AI inference?',
            a: 'Yes, especially on iPad Air M4 and Android tablets without active cooling. iPad Pro M5 has more thermal headroom than the iPad Air, and many Android tablets throttle sooner under sustained inference. Mitigations: use shorter generation chunks (200–400 tokens per response), keep the tablet on a hard surface, and avoid running other CPU-heavy apps simultaneously.',
          },
          {
            q: 'Which keyboard works best for AI tablet use?',
            a: 'Apple Magic Keyboard for iPad Pro M5 (with trackpad) is the most polished setup — full keyboard shortcuts work in Safari + Open WebUI, trackpad enables text selection across long responses. Logitech Combo Touch is the budget alternative. Android: any Bluetooth keyboard works with Termux but the experience is rougher (terminal-only). For prose work, an iPad Pro + Magic Keyboard turns the tablet into a writing-first AI workstation.',
          },
          {
            q: 'Can I run SillyTavern on iPad?',
            a: 'Yes, via remote connection. SillyTavern runs on a home Mac or PC, and iPad Safari connects to it at the local IP. Mobile UI is functional but not polished — some extension features (regex tools, group chat panels) work but feel cramped. For roleplay specifically, RisuAI has better mobile UI than SillyTavern; both can connect to the same Ollama backend on your home machine.',
          },
          {
            q: 'Can a tablet handle long-form RAG?',
            a: 'On-device, no — embedding 1,000+ documents on a tablet is impractical. Via remote connection, yes — your home machine handles the RAG pipeline, the tablet displays the chat interface. AnythingLLM running on a home machine and accessed via browser on the tablet handles document collections of any size with no tablet-side limit. For students or knowledge workers wanting RAG on tablet, remote connection is usually the more practical option.',
          },
          {
            q: 'Can I use external displays with tablet AI?',
            a: 'Yes on iPad Pro M5 (Stage Manager + external display gives a multi-window setup; Open WebUI on the external monitor, notes/source documents on the iPad screen). Galaxy Tab S10 Ultra supports DeX mode with an external display for similar multi-monitor AI workflow. Android tablets without DeX mode mirror the screen — less useful. iPad Pro + external monitor + Magic Keyboard is the closest a tablet gets to a real AI workstation in 2026.',
          },
          {
            q: 'Is a tablet better than a phone for local AI?',
            a: 'For typing-heavy use (drafting, RAG, long conversations), yes — keyboard support and screen size matter. For quick chat, voice queries, or on-the-go use, the phone you already carry is better. The iPad Pro M5 is the tablet most likely to outperform a flagship phone for local AI; mid-range tablets and phones are roughly equivalent. Most readers should not buy a tablet specifically for local AI — buy one if you want a tablet for other reasons; AI capability is a bonus.',
          },
          {
            q: 'Why is local AI so slow on my tablet?',
            a: 'Usually one of four causes: the model is too large for free RAM (the system swaps or closes the app), generation is limited by memory bandwidth rather than chip speed, the tablet is thermal-throttling, or background apps are using memory. Fixes: switch to a smaller model or Q4 quantization, close other apps, keep the tablet cool and plugged in, and measure real speed with PocketPal AI\'s built-in benchmark. If a 3B model is still too slow, use remote connection to a home machine.',
          },
          {
            q: 'Which tablets can run a local LLM (iPad Air M3, entry-level iPad, Galaxy Tab A, Huawei MatePad, Xiaomi Pad)?',
            a: 'RAM and chip decide, not the brand. The iPad Air M3 (8 GB) handles 1B–3B models; entry-level iPads and budget Android tablets with under 6 GB of RAM fit only 1B–1.7B models, so remote connection is the better choice for them. Huawei MatePad and Xiaomi Pad models with 8 GB or more run the same apps as other Android tablets, subject to their app-store availability. Check your tablet\'s RAM in its settings, then follow the model table above.',
          },
          {
            q: 'Is there an Ollama app for iPad?',
            a: 'There is no official Ollama app for iPadOS. Third-party iPad clients that connect to an Ollama server on your Mac or PC exist — for example [GetOAI](https://apps.apple.com/app/id6752573799) and [LLLM](https://apps.apple.com/app/id6749804212) — but they only display the chat; the model still runs on the home machine. Check each App Store listing before installing. The browser route (Open WebUI in Safari) needs no app at all.',
          },
          {
            q: 'Can I run a local LLM on an Android tablet without a terminal?',
            a: 'Yes. PocketPal AI (free, open-source, on Google Play) and Google AI Edge Gallery (free, Apache 2.0) download and run models on-device without Termux. Termux + Ollama is only needed if you specifically want Ollama\'s ecosystem or a local API endpoint.',
          },
          {
            q: 'Can an older or entry-level iPad (iPad 9th, 10th or 11th generation, iPad mini, iPad Air 5) run a local LLM?',
            a: 'RAM decides. The iPad 9th generation (3 GB), 10th generation (4 GB) and iPad mini 6 (4 GB) are too small for useful on-device chat: use remote connection. The iPad 11th generation (A16, 6 GB) fits 1B–1.7B models at Q4. The iPad mini 7 (A17 Pro, 8 GB), iPad Air 5 and iPad Air M3 (8 GB) fit 3B models at Q4, within the 8 GB limits described above. Apple does not publish RAM for all of these models; the figures are widely reported, not Apple-confirmed.',
          },
          {
            q: 'Can the Galaxy Tab S11 Ultra or Galaxy Tab S9 FE run a local LLM?',
            a: 'The Galaxy Tab S11 Ultra (Dimensity 9400+, 12 GB or 16 GB RAM depending on configuration) is above the 8 GB threshold and runs the same apps as the Tab S10+ — PocketPal AI, Google AI Edge Gallery, or Termux + Ollama — with more room for 3B–4B models. The Galaxy Tab S9 FE is sold with 6 GB or 8 GB: the 6 GB version fits Qwen3 1.7B only, the 8 GB version follows the 8 GB row of the model table. Its Exynos 1380 is a mid-range chip, so expect lower speeds than on flagship tablets.',
          },
          {
            q: 'Does Gemma 4 run on a tablet?',
            a: 'Yes, the small Gemma 4 variants do. Google lists Gemma 4 E2B and E4B as its on-device sizes; at 4-bit quantization Google gives about 2.9 GB (E2B) and 4.5 GB (E4B) of memory for the weights. E2B is therefore the safer pick for 8 GB tablets, and E4B suits 12 GB or more. Google AI Edge Gallery is the app that runs them on iPad and Android; see the [Google AI Edge Gallery review](/power-local-llm/google-ai-edge-gallery-review). PromptQuorum has not measured tablet speeds for Gemma 4.',
          },
          {
            q: 'Which free apps run a local LLM on an iPad?',
            a: 'PocketPal AI (free, MIT), Google AI Edge Gallery (free, Apache 2.0) and Locally AI (free, with paid options) run models on-device at no cost. Open WebUI in Safari, connected to Ollama on a Mac or PC, is also free. LLM Farm is free too, but has to be built from source.',
          },
          {
            q: 'Can I still install LLM Farm on an iPad?',
            a: 'Not from the App Store. Apple removed LLM Farm in August 2025, and the project\'s README lists both the App Store and TestFlight as temporarily unavailable. The only route is building it from [source](https://github.com/guinmoon/LLMFarm) in Xcode. Its last upstream update was 2026-01-30, so it may be unmaintained. PocketPal AI and Locally AI are the installable alternatives on iPad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free open-source iOS and Android app recommended above for on-device tablet use.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — MLX-based on-device chat for iPad and iPhone.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s on-device Gemma app for iOS and Android.',
          '[LLM Farm Review](/power-local-llm/llm-farm-review) — why the app is no longer on the App Store and what building from source involves.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — sister Cat 6 guide focused on iPhone-specific app picks and setup.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — sister Cat 6 guide for Android app picks beyond Termux + Ollama.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model layer companion: which mobile model to pick for which task.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) — sister Cat 6 build guide for offline mobile voice assistance.',
          '[Easiest Local AI App for Windows, Mac, and Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — the desktop equivalent for users setting up local AI on a Mac or PC.',
          '[Best Local AI App for Low-End PCs](/power-local-llm/best-local-ai-app-low-end-pc) — recommendations for resource-constrained devices with limited RAM.',
          '[Best Local AI App for Non-Technical Users](/power-local-llm/local-ai-app-non-technical-users) — user-experience comparison focused on onboarding and ease of use.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — mobile UI comparison for character-card roleplay on tablet.',
          '[LM Studio vs Jan vs GPT4All: Full Comparison](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — desktop app comparison that complements the tablet guide.',
          '[Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — connecting a tablet to an MCP-enabled local agent setup on your home machine.',
          '[Best Laptops for Local LLM](/local-llms/best-laptops-local-llm) — hardware sizing guide for the home machine that pairs with a tablet via remote connection.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model landscape across all hardware tiers, including non-mobile.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'KI lokal auf Ihrem Tablet ausführen: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'KI lokal auf iPad und Android-Tablet 2026 ausführen',
    intro:
      'Die Ausführung einer lokalen KI auf einem Tablet ist 2026 auf High-End-iPads und Android-Geräten mit 8 GB+ RAM praktisch. Diese Anleitung behandelt die Optionen: lokale Inferenz auf dem iPad mit PocketPal AI, Locally AI und Google AI Edge Gallery (LLM Farm lässt sich nicht mehr aus dem App Store installieren), PocketPal AI und Termux + Ollama auf Android sowie die Remote-Verbindungsmöglichkeit (Verbindung eines Tablets mit einem Mac oder PC, auf dem Ollama über lokales Wi-Fi ausgeführt wird) für Geräte, die keine lokale Inferenz durchführen können — einschließlich der Frage, ob Ollama selbst direkt auf einem iPad laufen kann (nein; iPadOS hat keinen unterstützten Ollama-Build).',
    metaDescription:
      'Ollama läuft nicht auf dem iPad, ein lokales LLM schon: PocketPal AI oder Locally AI auf dem Gerät, Termux auf Android oder Ollama auf dem Mac per WLAN.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-de.webp',
    twitterDescription:
      'KI auf Ihrem iPad oder Android-Tablet 2026 ausführen: On-Device-Apps (PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama und Remote-Verbindung zu einem Home-Mac/PC mit Ollama — mit Modellauswahl pro Gerät.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'Tablet-Benutzer, die KI lokal ausführen oder sich von ihrem iPad oder Android-Gerät mit einem lokalem LLM-Setup verbinden möchten — ohne auf Cloud-KI-Services zu verlassen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'KI auf Tablet ausführen',
    targetKeywords: [
      'KI lokal auf iPad ausführen',
      'lokales LLM auf Android-Tablet ausführen',
      'Ollama iPad Remote-Verbindung',
      'Termux Ollama Android',
      'PocketPal AI iPad',
      'Locally AI iPad',
    ],
    leadAnswerBlock:
      '**Die Ausführung einer lokalen KI auf einem Tablet hat zwei unterschiedliche Modi: lokale Inferenz (das Modell wird direkt auf dem Prozessor des Tablets ausgeführt) und Remote-Verbindung (das Tablet ist eine Anzeige für einen Mac oder PC, auf dem zu Hause Ollama ausgeführt wird). Lokale Inferenz ist praktisch auf iPad Pro M5 (12 GB in den Basis-Speicherstufen, 16 GB bei 1 TB/2 TB-Modellen — führt Phi-4 Mini und Llama 3.2 3B in Echtzeit mit mehr Spielraum als die vorherige M4-Generation aus), iPad Air M4 (12 GB, führt 3B–4B-Modelle komfortabel aus) und High-End-Android-Geräten mit 8 GB+ RAM (Samsung Galaxy Tab S10+, über PocketPal AI oder Termux + Ollama) aus. Ollama selbst läuft nicht nativ auf iPadOS — es gibt keinen unterstützten iPad-Build —, daher müssen iPad-Nutzer, die speziell Ollama möchten, eine Remote-Verbindung zu einem Mac oder PC verwenden. Die Remote-Verbindung über Open WebUI oder eine einfache Chat-UI unter der lokalen IP des Home-Servers funktioniert auf jedem Tablet, RAM, jedem Betriebssystem — es verwandelt Ihr Tablet in eine Touch-freundliche Schnittstelle zu einem leistungsfähigeren Home-Computer. Für die meisten Menschen ist die Remote-Verbindung die bessere Option: Der Home-Computer führt das 70B-Modell aus, während das Tablet die bequeme Schnittstelle bereitstellt.**',
    quickAnswerTop: {
      de: {
        question: 'Können Sie ein lokales KI-Modell auf einem iPad oder Android-Tablet ausführen?',
        answer:
          'Ja, auf High-End-Geräten. iPad Pro M5 (12 GB in den Basis-Speicherstufen, 16 GB bei 1 TB/2 TB-Modellen) führt Phi-4 Mini (3.8B) und Llama 3.2 3B in Echtzeit mit PocketPal AI oder Locally AI aus, mit mehr Spielraum als die vorherige M4-Generation. iPad Air M4 (12 GB) führt 3B–4B-Modelle komfortabel aus. Android-Tablets mit 8 GB+ RAM (Samsung Galaxy Tab S10+) können Phi-4 Mini und Qwen3 1.7B über PocketPal AI oder Termux + Ollama lokal ausführen. Ollama selbst läuft nicht nativ auf iPadOS — Benutzer, die speziell Ollama möchten, benötigen eine Remote-Verbindung zu einem Mac oder PC. Für Tablets mit weniger RAM oder älteren Chips ist die praktische Alternative die Remote-Verbindung: Verbinden Sie sich mit einem Mac oder PC, auf dem Ollama in Ihrem Heimnetzwerk läuft, über Open WebUI im Browser des Tablets.',
        bullets: [
          'iPad Pro M5 (12 GB / 16 GB) — führt Phi-4 Mini und Llama 3.2 3B lokal in Echtzeit mit PocketPal AI oder Locally AI aus, dank höherer Speicherbandbreite schneller als die vorherige M4-Generation.',
          'iPad Air M4 (12 GB) — führt 3B–4B-Modelle in nutzbarer Geschwindigkeit aus; 7B-Modelle sind langsam, aber funktionsfähig.',
          'Android-Tablets (8 GB+ RAM) — PocketPal AI (ohne Terminal) oder Termux + Ollama führt Phi-4 Mini und Qwen3 1.7B lokal aus.',
          'Ollama selbst hat keinen nativen iPadOS-Build — "Ollama auf einem iPad ausführen" bedeutet eine Remote-Verbindung zu einem Mac oder PC, der Ollama ausführt, nicht die Installation auf dem iPad.',
          'Remote-Verbindung — jedes Tablet, jede RAM, jedes Betriebssystem: Verbinden Sie sich mit Ihrem Home-Mac oder PC, auf dem Ollama über Open WebUI im Browser läuft.',
          'Bestes Modell für die meisten Tablets: Phi-4 Mini (3.8B, ~2,7 GB) oder Qwen3 1.7B für RAM-limitierte Geräte.',
          'Remote-Verbindung wird gegenüber On-Device für 7B+ Modelle empfohlen — der Home-Computer führt das Modell schneller aus als jedes Tablet.',
          'SillyTavern und RisuAI haben beide mobile-responsive UIs, die in iPad Safari / Android Chrome funktionieren.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnellübersicht', anchor: '#quick-facts' },
      { label: 'Zwei Modi: Lokale Inferenz vs. Remote-Verbindung', anchor: '#two-modes' },
      { label: 'iPad: Lokale Inferenz', anchor: '#ipad-on-device' },
      { label: 'Android: Lokale Inferenz', anchor: '#android-on-device' },
      { label: 'Remote-Verbindung zum Home-Computer', anchor: '#remote-connection' },
      { label: 'Modell-Empfehlungen pro Gerät', anchor: '#models' },
      { label: 'Tablet-Frontends für lokale KI', anchor: '#frontends' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Lokale Inferenz ist praktisch auf iPad Pro M5 (12 GB / 16 GB), iPad Air M4 (12 GB) und High-End-Android (8 GB+).** Unterhalb dieser Schwellen ist die Generierung zu langsam für die Echtzeitnutzung. Die Remote-Verbindung zu einem Home-Computer ist die bessere Option für die meisten Tablet-Benutzer.',
          '**Die Remote-Verbindung ist der empfohlene Ansatz für die meisten Menschen.** Verbinden Sie Ihr Tablet (beliebige RAM, beliebiges Betriebssystem) mit einem Mac oder PC, auf dem Ollama in Ihrem Heimnetzwerk läuft. Der Home-Computer führt das 70B-Modell aus; das Tablet erhält eine Touch-freundliche Chat-Schnittstelle. Kein Model-Download auf dem Tablet erforderlich.',
          '**PocketPal AI, Locally AI und Google AI Edge Gallery sind die aktuellen On-Device-Optionen für das iPad.** PocketPal AI importiert GGUF-Modelle, Locally AI führt für Apple Silicon gebaute MLX-Modelle aus, und Google AI Edge Gallery führt Googles Gemma-Modelle aus. LLM Farm wurde im August 2025 aus dem App Store entfernt und zuletzt am 30. Januar 2026 aktualisiert — behandeln Sie es nur als Option zum Selbstbauen aus dem Quellcode.',
          '**PocketPal AI ist der einfachste Android-Ansatz; Termux + Ollama der flexible.** PocketPal AI ist eine Google-Play-App ohne Terminal-Schritt. Termux + Ollama erfordert Komfort mit einem Terminal, bietet aber das vollständige Ollama-Ökosystem auf Geräten mit 8 GB+ RAM und stellt das Modell unter localhost:11434 bereit.',
          '**Bestes Modell für die meisten Tablets: Phi-4 Mini (3.8B).** Läuft auf allem mit 6 GB+ verfügbarem RAM; liefert nutzbare Ausgabe für die meisten alltäglichen Aufgaben; Download in 5–10 Minuten bei schneller Verbindung.',
          '**Open WebUI im Browser des Tablets ist die einfachste Remote-Verbindungs-Schnittstelle.** Wenn Ihr Home-Mac oder PC Open WebUI unter `192.168.x.x:3000` ausführt, öffnen Sie diese Adresse im Browser Ihres Tablets — keine App-Installation, keine Konfiguration, vollständige Chat-Schnittstelle.',
          '**SillyTavern hat eine mobile-responsive UI.** Für Roleplay und Character-Card-Nutzung auf Tablet funktioniert SillyTavern, das auf einem Home-Computer läuft und vom Browser des Tablets aus zugegriffen wird, gut; RisuAI hat die beste native mobile Unterstützung.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**iPad-Apps:** PocketPal AI (kostenlos, MIT), Locally AI (kostenlos + Bezahloptionen, MLX), Google AI Edge Gallery (kostenlos, Apache 2.0). LLM Farm (kostenlos, MIT, nur iOS) wurde im August 2025 aus dem App Store entfernt und muss jetzt aus dem Quellcode gebaut werden.',
          '**Android-Methode:** PocketPal AI oder Google AI Edge Gallery (Apps, ohne Terminal) oder Termux + Ollama (CLI).',
          '**Remote-Verbindung:** jeder Tablet-Browser → Open WebUI oder eine einfache Chat-UI unter der lokalen IP Ihres Home-Computers. So führen auch iPad-Benutzer Ollama aus, da Ollama keinen nativen iPadOS-Build hat.',
          '**Minimum für On-Device:** iPad Air M4 (12 GB) für 3B–4B-Modelle; iPad Pro M5 (12 GB / 16 GB) für 7B–8B-Modelle.',
          '**Minimum Android für On-Device:** 8 GB RAM-Gerät (Samsung Galaxy Tab S10+, OnePlus Pad 2).',
          '**Bestes On-Device-Modell:** Phi-4 Mini (3.8B, 2,7 GB) für die meisten Tablets; Qwen3 1.7B für sehr limitierte Geräte.',
          '**Geschwindigkeit der Remote-Verbindung:** hängt von der Wi-Fi-Qualität und der Generierungsgeschwindigkeit des Home-Computers ab, nicht von der Hardware des Tablets.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'Zwei Modi: Lokale Inferenz vs. Remote-Verbindung',
        content:
          '**Die wichtigste Entscheidung ist nicht, welche App zu verwenden — es ist, ob Inferenz auf dem Tablet oder auf einem leistungsfähigeren Home-Computer durchgeführt wird.** Jeder Modus hat eine unterschiedliche Hardware-Anforderung und Leistungsobergrenze.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Das Ausführen von KI auf einem Tablet hat zwei praktische Modi: lokale Inferenz (Modell läuft auf dem Tablet-Chip, begrenzt auf 3B–7B-Modelle) oder Remote-Verbindung (Tablet ist eine Browser-Anzeige für einen Home-Mac oder PC, auf dem größere Modelle über Ollama und Open WebUI ausgeführt werden).',
          },
          {
            type: 'plain-terms',
            text: 'On-Device-Modus: das Modell lebt auf Ihrem Tablet und funktioniert offline. Es ist auf kleine Modelle (3B, vielleicht 7B auf einem High-End-iPad Pro) begrenzt und ist langsamer als eine Cloud-KI. Remote-Modus: Ihr Home-Mac oder PC führt Ollama und ein 70B-Modell aus, und Ihr Tablet zeigt nur den Chat in einem Browser — Sie erhalten volle 70B-Qualität auf dem Tablet-Bildschirm, kein Modell auf dem Tablet gespeichert, und der Home-Computer muss eingeschaltet sein und im gleichen Wi-Fi. Wählen Sie die Remote-Verbindung, es sei denn, Sie benötigen spezifisch die Offline-Nutzung.',
          },
        ],
        columns: ['Faktor', 'Lokale Inferenz', 'Remote-Verbindung'],
        rows: [
          { 'Faktor': 'Modellgrößenlimit', 'Lokale Inferenz': '3B–8B (iPad Pro M5); 3B–4B (die meisten Tablets)', 'Remote-Verbindung': 'Unbegrenzt — Home-Computer führt jedes Modell aus' },
          { 'Faktor': 'Offline-Nutzung', 'Lokale Inferenz': 'Ja — funktioniert ohne Wi-Fi', 'Remote-Verbindung': 'Nein — erfordert Home-Wi-Fi' },
          { 'Faktor': 'Generierungsgeschwindigkeit', 'Lokale Inferenz': 'Moderat (12–30 Token/Sek auf iPad Pro M5)', 'Remote-Verbindung': 'Hängt vom Home-Computer ab (bis zu 40+ Token/Sek)' },
          { 'Faktor': 'Speicher auf Tablet', 'Lokale Inferenz': '2–10 GB pro Modell', 'Remote-Verbindung': 'Keine — Modell lebt auf dem Home-Computer' },
          { 'Faktor': 'Setup-Komplexität', 'Lokale Inferenz': 'Niedrig (App herunterladen + Modelldatei)', 'Remote-Verbindung': 'Niedrig–Mittel (Home-Computer benötigt Ollama + Open WebUI)' },
          { 'Faktor': 'Am besten für', 'Lokale Inferenz': 'Reisen, Offline-Nutzung, 3B-Modell-Aufgaben', 'Remote-Verbindung': 'Qualitätsorientierte Nutzung, 70B-Modelle, Komfort' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie bereits einen Mac oder PC zu Hause haben, der Ollama ausführen kann, beginnen Sie mit der Remote-Verbindung. Sie erhalten sofort bessere Modellqualität auf Ihrem Tablet, ohne Modelldateien auf dem Tablet zu speichern oder mit mobilen App-Einschränkungen umzugehen. Fügen Sie später On-Device-Funktionalität hinzu, wenn Sie möchten.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-de.svg',
        imageCaption: 'Zwei Tablet-KI-Modi: On-Device-Inferenz (Modell läuft auf Tablet-Chip, offline nutzbar, auf 3B–8B begrenzt) vs. Remote-Verbindung (Tablet-Browser verbindet sich mit Home-Mac/PC über Ollama, kein Modell auf dem Tablet, unbegrenzte Modellgröße).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: Lokale Inferenz',
        content:
          '**iPad Pro M5 ist das iPad, das sich am besten für 7B–8B-Modelle eignet.** Apple hat den Basis-RAM des M5 iPad Pro auf 12 GB angehoben (16 GB bei den 1 TB/2 TB-Speicherstufen), gegenüber 8 GB beim Basis-M4-iPad-Pro, und die Speicherbandbreite von 120 GB/s auf 153 GB/s erhöht — LLM-Inferenz auf Apple Silicon ist speicherbandbreiten-limitiert, was sich direkt in schnellerer Generierung niederschlägt. iPad Air M4 (12 GB, gegenüber 8 GB beim M3 Air) führt 3B–4B-Modelle jetzt komfortabel statt nur angemessen aus. Das iPad Air M3 (8 GB) und andere iPads mit 8 GB sind auf 1B–3B-Modelle in Q4 beschränkt. [iPhone mit 8 GB RAM führt auch kleine Modelle aus](/de/power-local-llm/best-local-llm-apps-iphone-2026).',
        items: [
          '**PocketPal AI** (kostenlos, Open-Source MIT, iOS + Android): führt GGUF-Modelle über llama.cpp aus, lädt Modelle in der App von Hugging Face herunter oder importiert Dateien und enthält einen integrierten Benchmark, mit dem Sie die Token pro Sekunde Ihres eigenen Tablets messen können. Letztes Upstream-Update: 19. Oktober 2026. Siehe das [PocketPal-AI-Review](/de/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (kostenlos mit Bezahloptionen, Closed-Source, iPhone/iPad/Mac): führt offene Modelle über Apples MLX-Framework aus, gebaut für Apple Silicon. Letztes App-Store-Update: 15. Oktober 2026. Siehe das [Locally-AI-Review](/de/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (kostenlos, Apache 2.0, iOS + Android): Googles On-Device-App für seine Gemma-Modelle, basierend auf der LiteRT-LM-Runtime. Letztes Upstream-Update: 23. Oktober 2026. Siehe das [Google-AI-Edge-Gallery-Review](/de/power-local-llm/google-ai-edge-gallery-review). Die App führt außerdem Gemma 4 (E2B und E4B) aus, Googles aktuelle kleine Modelle für den Einsatz auf dem Gerät.',
          '**LLM Farm** (kostenlos, MIT, nur iOS): Apple hat den App-Store-Eintrag im August 2025 entfernt, und die README des Projekts führt sowohl App Store als auch TestFlight als „vorübergehend nicht verfügbar“ — der einzige Weg ist, es aus dem [Quellcode](https://github.com/guinmoon/LLMFarm) in Xcode zu bauen. Letztes Upstream-Update: 30. Januar 2026, vor mehr als 180 Tagen, es könnte also nicht mehr gepflegt werden; prüfen Sie das Repository, bevor Sie sich darauf verlassen. Siehe das [LLM-Farm-Review](/de/power-local-llm/llm-farm-review).',
          '**Modelle importieren:** in PocketPal AI laden Sie ein GGUF-Modell in der App von Hugging Face herunter oder importieren eine GGUF-Datei, die Sie per Apple Files übertragen haben. Modelle werden im lokalen Speicher der App gespeichert — nicht in iCloud.',
          '**RAM-Verwaltung auf iPad:** iOS verwaltet RAM aggressiv für Hintergrund-Apps. Schließen Sie alle anderen Apps vor dem Ausführen eines 7B-Modells auf einem 12 GB-iPad — iOS wird das Modell entfernen, wenn eine andere App Speicher benötigt. Auf dem 16 GB iPad Pro M5 (1 TB/2 TB-Stufen) ist dies selten ein Problem.',
          '**Geschwindigkeitsschätzungen (ungefähr, keine PromptQuorum-Benchmarks — messen Sie Ihr eigenes Gerät mit dem integrierten Benchmark von PocketPal AI):** iPad Pro M5 (12 GB / 16 GB): Phi-4 Mini ~25 Token/Sek, Llama 3.2 3B ~38 Token/Sek, Gemma 3 4B ~23 Token/Sek — rund 25–30 % schneller als die vorherige M4-Generation, entsprechend der höheren Speicherbandbreite. iPad Air M4 (12 GB): 3B–4B-Modelle ~15–20 Token/Sek; 7B-Modelle ~7–10 Token/Sek (weiterhin langsam für Echtzeit-Chat).',
          '**Einsteiger-iPads und iPads mit 8 GB RAM oder weniger:** verwenden Sie 1B–3B-Modelle in Q4 oder nutzen Sie das iPad als Anzeige für eine Remote-Verbindung. Passt ein Modell nicht in den freien RAM, beendet iPadOS die App, statt sich allmählich zu verlangsamen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Versuchen Sie nicht, ein 7B-Modell auf einem 12 GB-iPad Air für Echtzeit-Chat auszuführen. Mit 7–10 Token pro Sekunde dauert jede Antwort weiterhin 10–20 Sekunden. Dies ist für Zusammenfassungsaufgaben nützlich, bei denen Sie einen Prompt senden und warten, aber frustrierend für gesprächsbasierte Nutzung. Verwenden Sie 3B–4B-Modelle auf iPad Air; wechseln Sie zum 16 GB iPad Pro M5 oder zur Remote-Verbindung für 7B+.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-de.svg',
        imageCaption: 'iPad On-Device-Geschwindigkeit: iPad Pro M5 (12 GB / 16 GB) erreicht 23–38 Token/Sek auf Phi-4 Mini und Llama 3.2 3B; iPad Air M4 (12 GB) läuft 3B–4B-Modelle mit 15–20 Token/Sek, aber nur 7–10 Token/Sek auf 7B-Modellen — weiterhin langsam für Echtzeit-Chat.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: Lokale Inferenz',
        content:
          '**Android On-Device-Inferenz verwendet [Termux + Ollama](/de/power-local-llm/best-local-llm-apps-android-2026) — Termux ist ein Linux-Terminal-Emulator, der Ollama nativ auf Android ausführt.** Dies ist technischer als die iPad-App-Erfahrung, gibt aber Zugriff auf das vollständige Ollama-Ökosystem.',
        numberedItems: [
          'Installieren Sie Termux von F-Droid (nicht die Play Store-Version — der Play Store-Build ist veraltet und fehlen erforderliche Pakete).',
          'In Termux: `pkg update && pkg upgrade`',
          'Installieren Sie Ollama aus dem Termux-Paket-Repository: `pkg install ollama` (ältere Anleitungen bauen Ollama mit Go aus dem Quellcode, das ist nicht mehr nötig).',
          'Ziehen Sie ein Modell: `ollama pull phi4-mini` oder `ollama pull qwen3:1.7b`.',
          'Starten Sie den Server: `ollama serve` (halten Sie dies in einer Termux-Sitzung aktiv).',
          'Chat über Termux: `ollama run phi4-mini` — oder öffnen Sie einen Web-Browser und gehen Sie zu `http://localhost:11434`, um auf die API zuzugreifen. Installieren Sie eine Android-Chat-App, die sich mit einem lokalen Ollama-Endpoint für eine GUI verbindet.',
        ],
        items: [
          '**Einfachere Alternativen zu Termux:** PocketPal AI (Google Play, kostenlos, MIT; letztes Upstream-Update: 19. Oktober 2026) und Google AI Edge Gallery (kostenlos, Apache 2.0; letztes Upstream-Update: 23. Oktober 2026) führen On-Device-Modelle ohne Terminal aus. Beginnen Sie mit einer von beiden, wenn Sie nicht ausdrücklich Ollama brauchen. Siehe das [PocketPal-AI-Review](/de/power-local-llm/pocketpal-ai-review).',
          '**Unterstützte Geräte für 3B+ Modelle:** 8 GB RAM-Minimum (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Geräte mit 6 GB führen nur Qwen3 1.7B aus.',
          '**Pixel Tablet nicht empfohlen für On-Device:** Pixel Tablet (2023-Modell, 8 GB Tensor G2) wurde von der empfohlenen On-Device-Liste ausgeschlossen — Tensor G2 ist bei der LLM-Inferenz erheblich langsamer als Snapdragon 8 Gen 3 / Dimensity 9300 und liefert 4–7 Token/Sek auf Phi-4 Mini (zu langsam für gesprächsbasierte Nutzung). Pixel-Tablet-Benutzer sollten die Remote-Verbindung zu einem Home-Computer verwenden.',
          '**Snapdragon 8 Gen 3 und Dimensity 9300** sind die schnellsten Android-Chips für On-Device-Inferenz 2026. Generierungsgeschwindigkeit: ~15–25 Token/Sek für 1.7B-Modelle; ~8–12 Token/Sek für 3B-Modelle.',
          '**Modellspeicher:** Android hat keinen einheitlichen Speicher — das Modell läuft in System-RAM ohne GPU-Beschleunigung in den meisten Termux-Konfigurationen. GPU-Beschleunigung erfordert Termux:NVIDIA oder spezifische Vulkan-Builds; Setup ist komplexer.',
          '**Alternative Apps:** MNN LLM (Alibaba, kostenlos, Android-App mit On-Device-Inferenz für ausgewählte Modelle) ist ein einfacheres Setup, hat aber eine begrenztere Model-Auswahl als Ollama. AI Runner und llamafile haben auch Android-Builds mit unterschiedlicher Unterstützung. Es gibt keine Android-Version von LLM Farm — es ist eine iOS-only-App; PocketPal AI ist das nächste Android-Äquivalent.',
          '**Andere Marken (Huawei MatePad, Xiaomi Pad, Galaxy-Tab-A-Serie):** RAM und Chip entscheiden, nicht die Marke. Prüfen Sie den RAM des Tablets in den Einstellungen: unter 6 GB bleiben Sie bei 1B–1,7B-Modellen oder nutzen die Remote-Verbindung; bei 8 GB oder mehr folgen Sie der 8-GB-Zeile der Modelltabelle.',
          'Einen Japan-spezifischen Xperia-Einrichtungsleitfaden mit Hardware-Kompatibilitätstabelle finden Sie unter <a href="/de/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">Lokales LLM auf Xperia ausführen (Japan)</a>.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie das Termux:Widget-Add-on und erstellen Sie eine Verknüpfung, die "ollama serve" ausführt — dies ermöglicht es Ihnen, den Ollama-Server von Ihrem Android-Startbildschirm aus zu starten, ohne Termux manuell zu öffnen. Sobald Ollama läuft, öffnen Sie eine Chat-App, die für localhost:11434 konfiguriert ist.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-de.svg',
        imageCaption: 'Android On-Device-KI: 5-Schritte Termux + Ollama-Setup — Termux von F-Droid installieren (nicht Play Store), Pakete aktualisieren, Ollama mit pkg install ollama installieren, Modell laden (phi4-mini oder qwen3:1.7b), Server auf localhost:11434 starten. Mindestens 8 GB RAM erforderlich.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Remote-Verbindung zum Home-Computer',
        content:
          '**Das einfachste Setup für die meisten Tablet-Benutzer: Ollama und Open WebUI auf Ihrem Home-Mac oder PC ausführen und dann über Ihren Tablet-Browser im gleichen Wi-Fi auf die Chat-UI zugreifen.** Ihr Tablet wird zu einer Touchscreen-Schnittstelle für den leistungsfähigeren Home-Computer, auf dem Ollama läuft — siehe [den Laptop-Leitfaden](/de/local-llms/best-laptops-local-llm), um die Hardware zu dimensionieren, wenn Sie den Home-Computer auswählen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die Remote-Verbindung zu einem Home-Computer, auf dem Ollama und Open WebUI ausgeführt wird, bietet jedem Tablet vollen Zugriff auf 70B-Modelle über einen Browser — kein Modell auf dem Tablet gespeichert, keine App-Installation und kein Kompromiss bei der Modellqualität.',
          },
          {
            type: 'plain-terms',
            text: 'Auf Ihrem Mac oder PC: Ollama installieren, ein Modell ziehen, Open WebUI installieren (Docker-Einzeiler) und an Ihre lokale Netzwerk-IP binden ausführen. Auf Ihrem Tablet: Safari oder Chrome öffnen, zu http://[your-mac-IP]:3000 gehen, und Sie haben eine vollständige KI-Chat-Schnittstelle. Das Modell läuft auf dem Mac; das Tablet zeigt nur den Chat. Funktioniert auf jedem Tablet, jedem Betriebssystem, jeder Bildschirmgröße.',
          },
        ],
        numberedItems: [
          '**Auf dem Home-Computer:** Ollama installieren (`brew install ollama` auf macOS, von ollama.com auf Windows herunterladen). Ein Modell ziehen: `ollama pull llama3.3:70b` (oder jedes beliebige Modell). Ollama mit Netzwerk-Bindung starten: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Open WebUI installieren** (die Tablet-freundlichste Chat-UI): `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. Open WebUI ist jetzt unter `http://[your-machine-IP]:3000` verfügbar.',
          '**Finden Sie die lokale IP Ihres Home-Computers:** auf macOS, Systemeinstellungen → Netzwerk → das aktuelle Netzwerk → IP-Adresse. Auf Windows, führen Sie `ipconfig` in der Eingabeaufforderung aus und suchen Sie nach IPv4-Adresse. Notieren Sie die IP (typischerweise `192.168.x.x`).',
          '**Auf dem Tablet:** Öffnen Sie Safari (iPad) oder Chrome (Android). Navigieren Sie zu `http://[your-machine-IP]:3000`. Erstellen Sie ein Konto in Open WebUI (nur lokal, keine Cloud). Wählen Sie Ihr Modell aus der Dropdown-Liste. Beginnen Sie zu chatten.',
          '**Sicherheit:** Dieses Setup ist nur lokales Netzwerk. Setzen Sie Port 3000 nicht dem Internet aus, ohne Open WebUI-Authentifizierung hinzuzufügen (es hat ein integriertes Admin-Kontosystem). Die Verbindung ist Plain HTTP — senden Sie keine vertraulichen Informationen über öffentliches Wi-Fi.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Fügen Sie die Open WebUI-URL Ihres Home-Computers auf dem Startbildschirm Ihres Tablets als Lesezeichen hinzu (in Safari: Freigabe → Zum Startbildschirm hinzufügen; in Chrome: Drei-Punkt-Menü → Zum Startbildschirm hinzufügen). Dies fühlt sich wie eine native App an. Auf iPad verstecken Web-Apps im Vollbildmodus in Safari die Browser-Umgebung für ein App-ähnliches Erlebnis.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-de.webp',
        imageCaption: 'KI per Remote vom Tablet in 4 Schritten: Ollama auf dem Heimrechner installieren, Modell + Open WebUI laden, Heimnetz-IP herausfinden, dann http://[IP]:3000 im Tablet-Browser öffnen — kein Modell auf dem Tablet, 70B-Modelle mit 20–40 Token/Sek.',
      },
      models: {
        id: 'models',
        title: 'Modell-Empfehlungen pro Gerät',
        content:
          '**Die Modellwahl wird durch verfügbaren RAM bestimmt — nicht durch Vorlieben.** Die Tabelle unten ordnet Geräte-RAM dem größten Modell zu, das mit Echtzeit-Geschwindigkeit (über 8 Token/Sek) läuft. Für die Modellschicht speziell siehe [Best Mobile LLM Models 2026](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm). Für die breitere Modelllandschaft über alle Hardware-Ebenen siehe [Best Local LLMs 2026](/de/local-llms/best-local-llms-2026).',
        columns: ['Gerät / RAM', 'Empfohlenes Modell', 'Geschwindigkeit', 'Am besten für'],
        rows: [
          { 'Gerät / RAM': 'iPad Air M4 (12 GB)', 'Empfohlenes Modell': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'Geschwindigkeit': '~18–20 Token/Sek', 'Am besten für': 'Schreibunterstützung, Zusammenfassung' },
          { 'Gerät / RAM': 'iPad Air M3 / andere 8-GB-iPads', 'Empfohlenes Modell': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Geschwindigkeit': '~10–18 Token/Sek (geschätzt)', 'Am besten für': 'Leichtes Entwerfen, Zusammenfassungen' },
          { 'Gerät / RAM': 'iPad Pro M5 (12 GB / 16 GB)', 'Empfohlenes Modell': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Geschwindigkeit': '~32–38 Token/Sek / ~20–23 Token/Sek', 'Am besten für': 'Echte LLM-Workstation, RAG, Fiction-Entwurf' },
          { 'Gerät / RAM': 'Android 8 GB (Tab S10+)', 'Empfohlenes Modell': 'Phi-4 Mini Q4 über Termux+Ollama', 'Geschwindigkeit': '~10–15 Token/Sek', 'Am besten für': 'Power-Nutzer komfortabel mit Termux' },
          { 'Gerät / RAM': 'Android 6 GB', 'Empfohlenes Modell': 'Qwen3 1.7B Q4', 'Geschwindigkeit': '~15–20 Token/Sek', 'Am besten für': 'Leichter Chat, Übersetzung, einfache Aufgaben' },
          { 'Gerät / RAM': 'Pixel Tablet (8 GB)', 'Empfohlenes Modell': 'Nur Remote-Verbindung', 'Geschwindigkeit': 'N/V', 'Am besten für': 'Tensor G2 zu langsam für On-Device' },
          { 'Gerät / RAM': 'iPad mini 7 (A17 Pro, 8 GB)', 'Empfohlenes Modell': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Geschwindigkeit': 'Nicht gemessen', 'Am besten für': 'Leichtes Entwerfen, Zusammenfassungen' },
          { 'Gerät / RAM': 'iPad A16 (6 GB) / iPad 10. Gen. (4 GB)', 'Empfohlenes Modell': 'Qwen3 1.7B Q4 oder kleiner', 'Geschwindigkeit': 'Nicht gemessen', 'Am besten für': 'Kurze Fragen; für mehr Remote nutzen' },
          { 'Gerät / RAM': 'Galaxy Tab S11 Ultra (12 GB / 16 GB)', 'Empfohlenes Modell': 'Gemma 4 E4B / Phi-4 Mini Q4', 'Geschwindigkeit': 'Nicht gemessen', 'Am besten für': 'Mehr Multitasking (16-GB-Stufe)' },
          { 'Gerät / RAM': 'Jedes Tablet über Remote', 'Empfohlenes Modell': 'Jedes Modell auf dem Home-Computer', 'Geschwindigkeit': '~20–40 Token/Sek', 'Am besten für': 'Qualitätsorientierte Nutzung, 70B-Modelle' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die meisten alltäglichen Aufgaben (Textentwurf, Fragen beantworten, Inhalte zusammenfassen) ist Phi-4 Mini (3.8B) auf einem Tablet ausreichend leistungsfähig. Wo es im Vergleich zu einem 70B-Modell schwach wird: komplexes mehrstufiges Denken, differenziertes kreatives Schreiben und lange Dokumentenanalyse. Für diese Aufgaben verwenden Sie die Remote-Verbindung zu einem Home-Computer, der ein größeres Modell ausführt.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-de.webp',
        imageCaption: 'Bestes Modell pro Tablet: iPad Pro M5 (12 GB / 16 GB) erreicht 32–38 Token/Sek auf Llama 3.2 3B; iPad Air M4 läuft Phi-4 Mini mit 18–20 Token/Sek; Android 8 GB erreicht 10–15 Token/Sek über Termux; Pixel Tablet benötigt Remote-Verbindung wegen langsamem Tensor G2.',
      },
      frontends: {
        id: 'frontends',
        title: 'Tablet-Frontends für lokale KI',
        content:
          '**Die Chat-Schnittstelle, die Sie auf dem Tablet verwenden, beeinflusst die Benutzerfreundlichkeit erheblich.** Einige Frontends sind für Mobilgeräte ausgelegt; andere sind Desktop-first und auf Tablets kaum zu verwenden.',
        items: [
          '**Open WebUI (Browser):** beste mobile-responsive Web-UI für allgemeinen Chat. Funktioniert unter jeder lokalen IP:Port in Safari oder Chrome. Passt sich saubern an Tablet-Seitenverhältnisse an. Wird für Remote-Verbindungs-Setups empfohlen.',
          '**PocketPal AI (iPad- und Android-App):** kostenlos, Open-Source, importiert GGUF-Modelle und hat einen integrierten Benchmark. Die flexibelste On-Device-Option auf beiden Plattformen.',
          '**Locally AI (iPad-App):** aufgeräumte Oberfläche im Apple-Stil auf Basis von MLX; die einfachste Ersteinrichtung für nicht-technische Nutzer auf dem iPad.',
          '**Google AI Edge Gallery (iPad- und Android-App):** Googles Gemma-fokussierte App; der einfachste Weg, Googles kleine Modelle On-Device auszuprobieren.',
          '**RisuAI (Browser, mobile-responsive):** beste mobile-Erfahrung für Roleplay und Character-Card-Fiction. Kann sich mit einer Remote-Ollama-Instanz verbinden. Funktioniert in iPad Safari mit einer Near-App-Quality-Schnittstelle.',
          '**SillyTavern (Browser):** funktioniert auf iPad Safari, verbunden mit einer Remote-Ollama-Instanz. Nicht für Mobilgeräte optimiert, aber funktionsfähig. Einige Erweiterungsfunktionen funktionieren nicht in mobil Safari.',
          '**Termux CLI (Android):** nur Befehlszeile. Für skriptgesteuerte Aufgaben nützlich; nicht praktisch für gesprächsbasierte Nutzung ohne begleitende App.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Roleplay und Character-Card-Fiction auf iPad ist RisuAI verbunden mit einer Remote-Ollama-Instanz, auf der Llama 3.3 70B läuft, 2026 eine starke Kombination. Die mobile RisuAI-Schnittstelle ist für Touch ausgelegt; die Remote-Verbindung ermöglicht Zugriff auf ein 70B-Modell, das eine erheblich bessere Character-Voice liefert als jedes Modell, das auf ein Tablet passt.',
          },
        ],
      },
      dsgvoContext: {
        id: 'dsgvo-context',
        title: 'Im DACH-Kontext: Datenschutz und lokale Inferenz',
        content:
          'Für Benutzer in Deutschland, Österreich und der Schweiz hat die lokale Ausführung von KI-Modellen auf Tablets zusätzliche Bedeutung. **Die DSGVO-Artikel 28 (Auftragsverarbeitung) und 32 (Datenschutzmassnahmen) fördern Architekturen, bei denen Kundendaten nicht an Cloud-Services gesendet werden.** Lokale Inferenz auf einem Tablet — ob On-Device oder Remote-Verbindung zu einem Home-Computer — erfüllt diese Anforderungen ohne teure Enterprise-Lösungen.',
        items: [
          '**DSGVO-Artikel 28 Compliance:** Wenn Ihr Tablet oder Home-Computer mit lokalen LLMs läuft, bleibt sensible Geschäftskommunikation innerhalb Ihres Netzwerks. Keine Datenübertragung zu US-Cloud-APIs (OpenAI, Google, Meta), die unter SCHREMS II-Bedenken fallen.',
          '**Mittelstand-Anwendungsfälle:** Kleine und mittlere Unternehmen (KMU) in Deutschland können Phi-4 Mini oder Llama 3.2 lokal ausführen, um interne Dokumentenverwaltung, Kundenkommunikation und Produktbeschreibungen zu unterstützen, ohne DSGVO-Risiken zu tragen. Ein iPad Pro M5 mit 12 GB/16 GB im Büro ist ein kostengünstiger Einstiegspunkt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für DACH-Organisationen, die die Verwendung von Open-Source-Modellen wie Llama oder Qwen mit lokaler Speicherung validieren möchten: Die Open-Source-Lizenzen (Meta, Alibaba) und die lokale Netzwerk-Architektur vereinfachen die Compliance-Dokumentation für Regulatoren und Datenschutzbeauftragte. Führen Sie ein Setup-Proof-of-Concept mit dem Datenschutzbeauftragten durch, bevor Sie unternehmensweite Bereitstellung durchführen.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**LLM Farm im App Store suchen.** Apple hat es im August 2025 entfernt. Verwenden Sie PocketPal AI oder Locally AI, oder bauen Sie LLM Farm aus dem Quellcode.',
          '**Ausführen eines 7B-Modells auf einem 8 GB-Tablet.** Bei 5–8 Token/Sek ist dies zu langsam für gesprächsbasierte Nutzung. Verwenden Sie 3B-Modelle für On-Device-Chat auf 8 GB-Geräten; verwenden Sie Remote-Verbindung für 7B+ Qualität.',
          '**Verwendung des Play Store Termux auf Android.** Die Play Store-Version von Termux ist veraltet und fehlen die Pakete, die für Ollama benötigt werden. Installieren Sie Termux immer von F-Droid.',
          '**Exposing von Open WebUI zum Internet ohne Authentifizierung.** Open WebUI hat standardmäßig kein Passwort. Wenn Sie es über Ihr Heimnetzwerk hinaus exponieren, bekommt jeder, der die URL findet, Zugriff auf Ihr Modell. Aktivieren Sie das Admin-Kontosystem und verwenden Sie eine Firewall.',
          '**Nichtschließen anderer Apps vor On-Device auf 8 GB-iPad.** iOS räumt Hintergrund-Apps aus dem RAM ab. Ein 3B-Modell auf einem 8 GB-iPad nutzt ~3,5 GB; wenn iOS diesen Speicher für eine andere App zurückfordert, stürzt das Modell ab. Schließen Sie alle anderen Apps vor der Inferenz.',
          '**Erwartung von Desktop-Qualitäts-UI auf Mobil-Browsern.** SillyTavern und einige andere Frontends sind Desktop-first. Ihre mobile Erfahrung in einem Browser ist funktionsfähig, aber nicht poliert. Für mobile-first UX bevorzugen Sie RisuAI oder Open WebUI.',
          '**`ipad.local` in den Browser eingeben.** Safari braucht die Adresse des Home-Computers – seine IP oder seinen Hostnamen, zum Beispiel `192.168.1.20:3000` oder `mein-mac.local:3000` –, nicht den Namen des Tablets. Ein Name wie `ipad.local` zeigt auf ein Tablet, nicht auf den Rechner, auf dem Ollama läuft.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'LLM Farm (iOS) Dokumentation und GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [App-Store-Eintrag](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Termux-Ollama-Paket — [Termux](https://termux.dev) (Termux über F-Droid installieren)',
          'Ollama ARM-Build für Termux — [Ollama-Dokumentation](https://ollama.com/docs)',
          'Open WebUI-Dokumentation — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M5-Chip-Spezifikationen für das iPad Pro, RAM-Stufen und Speicherbandbreite — [Apple Newsroom, Oktober 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Apple M4-Chip-Spezifikationen und RAM für das iPad Air — [Apple Newsroom, März 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Gemma 4 Modellübersicht und Speicherbedarf — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Samsung Galaxy Tab S11 Ultra, Chip und RAM-Stufen — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Können Sie KI auf einem iPad ausführen?',
            a: 'Ja, auf iPad Pro M5 (12 GB Basis / 16 GB bei den 1 TB- und 2 TB-Stufen) und iPad Air M4 (12 GB). Der iPad Pro M5 führt Phi-4 Mini und Llama 3.2 3B in Echtzeit mit PocketPal AI oder Locally AI aus, dank höherer Speicherbandbreite (153 GB/s statt 120 GB/s) rund 25–30 % schneller als der vorherige iPad Pro M4. Der iPad Air M4 führt 3B–4B-Modelle komfortabel aus. Für 7B+ Modelle auf einem iPad wird die Remote-Verbindung zu einem Home-Mac oder PC, auf dem Ollama läuft, empfohlen — das iPad zeigt den Chat, aber der Home-Computer führt Inferenz durch.',
          },
          {
            q: 'Läuft Ollama auf einem iPad?',
            a: 'Nein — Ollama hat keinen unterstützten iPadOS-Build und kann daher nicht direkt auf einem iPad installiert werden, so wie es unter Android über Termux möglich ist. "Ollama auf dem iPad ausführen" bedeutet, Ollama auf einem Mac oder PC laufen zu lassen und sich vom iPad-Browser aus (über Open WebUI unter der lokalen IP des Home-Computers) damit zu verbinden — das iPad ist eine Anzeige, nicht die Inferenz-Engine. Für echte On-Device-Inferenz auf einem iPad verwenden Sie stattdessen eine On-Device-App wie PocketPal AI (GGUF-Modelle über llama.cpp) oder Locally AI (MLX-Modelle).',
          },
          {
            q: 'Können Sie KI auf einem Android-Tablet ausführen?',
            a: 'Ja, auf Geräten mit 8 GB+ RAM mit PocketPal AI oder Termux + Ollama. Das Samsung Galaxy Tab S10+ (12 GB RAM) führt Phi-4 Mini bei ~10–15 Token/Sek aus. Geräte mit 6 GB RAM können Qwen3 1.7B ausführen. Das Setup erfordert Termux von F-Droid und Komfort mit einigen Terminal-Befehlen. Die Remote-Verbindung zu einem Home-Computer ist der einfachere Weg für die meisten Android-Tablet-Benutzer.',
          },
          {
            q: 'Funktioniert On-Device-KI auf einem Tablet ohne Internet?',
            a: 'Ja. Sobald das Modell heruntergeladen ist und die App installiert ist, funktioniert On-Device-Inferenz auf iPad (PocketPal AI, Locally AI) und Android (Termux + Ollama) ohne Internetverbindung. Dies ist einer der Hauptvorteile von On-Device gegenüber Remote-Verbindung — die Remote-Verbindung erfordert Ihr Home-Wi-Fi.',
          },
          {
            q: 'Was ist die beste KI-App für iPad?',
            a: 'Für On-Device-Inferenz: PocketPal AI (Open-Source, importiert jedes GGUF-Modell) oder Locally AI (einfachste UI, MLX). LLM Farm ist im App Store nicht mehr verfügbar. Für Remote-Verbindung zu einem Home-Ollama-Server: Open WebUI in Safari (bester allgemeiner Chat), RisuAI in Safari (beste für Roleplay und Character-Fiction). Die beste Wahl hängt davon ab, ob Sie On-Device-Fähigkeit, Offline-Nutzung oder beste Schnittstellen-Qualität möchten.',
          },
          {
            q: 'Ist Termux + Ollama sicher auf Android zu verwenden?',
            a: 'Ja. Termux ist ein etablierter Android-Terminal-Emulator, der von Millionen von Entwicklern verwendet wird. Ollama in Termux stellt eine nur lokale API bereit (localhost:11434 standard) — sie ist nicht von anderen Geräten in Ihrem Netzwerk aus zugänglich, es sei denn, Sie ändern die Bind-Adresse explizit. Die Modelldateien werden im privaten Termux-Speicher gespeichert, nicht im freigegebenen Android-Speicher.',
          },
          {
            q: 'Kann ich ChatGPT-ähnliche Antworten lokal auf einem Tablet erhalten?',
            a: 'Nicht ganz, aber fast mit dem richtigen Setup. Die Qualität führender Cloud-Modelle erfordert in der Regel ein 70B+ Modell. Auf einem Tablet: Der iPad Pro M5 (12 GB / 16 GB) kann 70B-Modelle nicht ausführen — nur 3B–8B-Modelle passen. Via Remote-Verbindung: Wenn Ihr Home-Computer eine 24 GB-GPU (RTX 4090) oder 64 GB-Unified-Memory (Mac M5 Max) hat, kann er Llama 3.3 70B ausführen, und Ihr Tablet greift diese Qualität über Open WebUI im Browser zu. Das ist die Cloud-KI-Qualität auf einem Tablet am nächsten.',
          },
          {
            q: 'Wie halte ich meinen Home-Ollama-Server am Laufen, wenn ich das Laptop-Deckel schließe?',
            a: 'Auf macOS: Stellen Sie die Sleep-Policy beim Schließen des Deckels ein: Systemeinstellungen → Batterie → deaktivieren Sie "Power Nap aktivieren" und verwenden Sie ein Tool wie Amphetamine, um den Sleep zu verhindern, wenn an Strom angeschlossen. Auf Windows: Gehen Sie zu Energieoptionen → Planeinstellungen ändern → "Niemals" für Sleep, wenn an Strom angeschlossen. Alternativ führen Sie Ollama auf einem Always-On-Computer aus (Mini-PC, NAS oder repurposed altes Laptop), anstatt Ihrem primären Laptop.',
          },
          {
            q: 'Entleert die Ausführung von KI auf einem Tablet die Batterie schnell?',
            a: 'Ja — On-Device-Inferenz ist CPU/GPU-intensiv und entleert die Batterie deutlich schneller als Surfen; die Rate variiert je nach Gerät und Modell. Für längere Nutzung halten Sie das Tablet an Strom angeschlossen. Remote-Verbindung zu einem Home-Computer zieht erheblich weniger Tablet-Batterie — das Tablet zeigt nur eine Webseite an.',
          },
          {
            q: 'Throtteln Tablets während KI-Inferenz?',
            a: 'Ja, besonders auf iPad Air M4 und Android-Tablets ohne aktive Kühlung. iPad Pro M5 hat mehr thermalen Spielraum als das iPad Air, und viele Android-Tablets drosseln bei anhaltender Inferenz früher. Mitigationen: verwenden Sie kürzere Generierungs-Chunks (200–400 Token pro Antwort), halten Sie das Tablet auf einer harten Oberfläche und vermeiden Sie das gleichzeitige Ausführen anderer CPU-schwerer Apps.',
          },
          {
            q: 'Welche Tastatur funktioniert am besten für KI-Tablet-Nutzung?',
            a: 'Apple Magic Keyboard für iPad Pro M5 (mit Trackpad) ist das polierte Setup — volle Tastatur-Shortcuts funktionieren in Safari + Open WebUI, Trackpad ermöglicht Text-Auswahl über lange Antworten. Logitech Combo Touch ist die Budget-Alternative. Android: Jede Bluetooth-Tastatur funktioniert mit Termux, aber die Erfahrung ist rauer (nur Terminal). Für Schreibarbeiten verwandelt sich ein iPad Pro + Magic Keyboard in eine schreiborientierte KI-Workstation.',
          },
          {
            q: 'Kann ich SillyTavern auf iPad ausführen?',
            a: 'Ja, via Remote-Verbindung. SillyTavern läuft auf einem Home-Mac oder PC, und iPad Safari verbindet sich unter der lokalen IP. Mobile UI ist funktionsfähig, aber nicht poliert — einige Erweiterungsfunktionen (Regex-Tools, Group-Chat-Panels) funktionieren, fühlen sich aber beengt an. Für Roleplay speziell hat RisuAI bessere mobile UI als SillyTavern; beide können sich mit demselben Ollama-Backend auf Ihrem Home-Computer verbinden.',
          },
          {
            q: 'Kann ein Tablet Long-Form-RAG durchführen?',
            a: 'On-Device, nein — das Einbetten von 1.000+ Dokumenten auf einem Tablet ist unpraktisch. Via Remote-Verbindung, ja — Ihr Home-Computer verwaltet die RAG-Pipeline, das Tablet zeigt die Chat-Schnittstelle. AnythingLLM auf einem Home-Computer und über Browser auf dem Tablet zugegriffen verwaltet Dokument-Sammlungen jeder Größe ohne Tablet-seitige Begrenzung. Für Schüler oder Knowledge-Worker, die RAG auf Tablet möchten, ist die Remote-Verbindung in der Regel die praktischere Option.',
          },
          {
            q: 'Kann ich externe Displays mit Tablet-KI verwenden?',
            a: 'Ja, auf iPad Pro M5 (Stage Manager + external Display gibt ein Multi-Window-Setup; Open WebUI auf dem externen Monitor, Notizen/Quelldokumente auf dem iPad-Bildschirm). Galaxy Tab S10 Ultra unterstützt DeX-Modus mit externem Display für ähnliches Multi-Monitor-KI-Workflow. Android-Tablets ohne DeX-Modus spiegeln den Bildschirm — weniger nützlich. iPad Pro + externer Monitor + Magic Keyboard ist das Nächste, das ein Tablet zu einer echten KI-Workstation 2026 kommt.',
          },
          {
            q: 'Ist ein Tablet besser als ein Telefon für lokale KI?',
            a: 'Für Tasten-intensive Nutzung (Entwurf, RAG, lange Unterhaltungen), ja — Tastatur-Unterstützung und Bildschirmgröße sind wichtig. Für schnelle Chats, Voice-Queries oder unterwegs ist das Telefon, das Sie bereits tragen, besser. Der iPad Pro M5 ist das Tablet, das ein Flaggschiff-Telefon für lokale KI am ehesten übertrifft; Mid-Range-Tablets und Telefone sind ungefähr gleichwertig. Die meisten Leser sollten kein Tablet speziell für lokale KI kaufen — kaufen Sie eines, wenn Sie es aus anderen Gründen möchten; KI-Fähigkeit ist ein Bonus.',
          },
          {
            q: 'Warum ist lokale KI auf meinem Tablet so langsam?',
            a: 'Meist liegt es an einem von vier Gründen: Das Modell ist zu groß für den freien RAM (das System lagert aus oder beendet die App), die Generierung wird durch die Speicherbandbreite statt durch die Chip-Geschwindigkeit begrenzt, das Tablet drosselt thermisch, oder Hintergrund-Apps belegen Speicher. Abhilfe: wechseln Sie zu einem kleineren Modell oder Q4-Quantisierung, schließen Sie andere Apps, halten Sie das Tablet kühl und am Strom, und messen Sie die reale Geschwindigkeit mit dem integrierten Benchmark von PocketPal AI. Ist ein 3B-Modell immer noch zu langsam, nutzen Sie die Remote-Verbindung zu einem Home-Computer.',
          },
          {
            q: 'Welche Tablets können ein lokales LLM ausführen (iPad Air M3, Einsteiger-iPad, Galaxy Tab A, Huawei MatePad, Xiaomi Pad)?',
            a: 'RAM und Chip entscheiden, nicht die Marke. Das iPad Air M3 (8 GB) bewältigt 1B–3B-Modelle; Einsteiger-iPads und günstige Android-Tablets mit unter 6 GB RAM fassen nur 1B–1,7B-Modelle, für sie ist die Remote-Verbindung die bessere Wahl. Huawei-MatePad- und Xiaomi-Pad-Modelle mit 8 GB oder mehr führen dieselben Apps aus wie andere Android-Tablets, abhängig von deren Verfügbarkeit im jeweiligen App-Store. Prüfen Sie den RAM Ihres Tablets in den Einstellungen und folgen Sie dann der Modelltabelle oben.',
          },
          {
            q: 'Gibt es eine Ollama-App für das iPad?',
            a: 'Es gibt keine offizielle Ollama-App für iPadOS. Es gibt Drittanbieter-Clients für das iPad, die sich mit einem Ollama-Server auf Ihrem Mac oder PC verbinden — zum Beispiel [GetOAI](https://apps.apple.com/app/id6752573799) und [LLLM](https://apps.apple.com/app/id6749804212) —, aber sie zeigen nur den Chat an; das Modell läuft weiterhin auf dem Home-Computer. Prüfen Sie jeden App-Store-Eintrag vor der Installation. Der Browser-Weg (Open WebUI in Safari) braucht gar keine App.',
          },
          {
            q: 'Kann ich ein lokales LLM auf einem Android-Tablet ohne Terminal ausführen?',
            a: 'Ja. PocketPal AI (kostenlos, Open-Source, bei Google Play) und Google AI Edge Gallery (kostenlos, Apache 2.0) laden und führen Modelle On-Device ohne Termux aus. Termux + Ollama ist nur nötig, wenn Sie gezielt das Ollama-Ökosystem oder einen lokalen API-Endpoint möchten.',
          },
          {
            q: 'Muss ich bei der Verwendung von lokalen Tablets die DSGVO beachten?',
            a: 'Wenn Sie ein Tablet mit lokalen Modellen für berufliche Kommunikation in Deutschland, Österreich oder der Schweiz verwenden, ja. DSGVO Artikel 28 (Auftragsverarbeitung) und 32 (Datenschutzmassnahmen) erfordern, dass Kundendaten nicht an ungeprüfte Cloud-Services gesendet werden. Lokale Inferenz auf Ihrem Tablet oder Home-Computer erfüllt diese Anforderung. Dokumentieren Sie Ihre Setup-Architektur (wo Daten gespeichert sind, welche Modelle verwendet werden) für den Datenschutzbeauftragten bei auditpflichtigen Prozessen.',
          },
          {
            q: 'Ist ein Tablet mit lokalen Modellen für deutschen Mittelstand geeignet?',
            a: 'Ja. Kleine und mittlere Unternehmen können einen iPad Pro M5 (12 GB / 16 GB) mit Phi-4 Mini oder Llama 3.2 für interne Dokumentenverwaltung, Geschäftskommunikation und Produktbeschreibungen einsetzen. Das Setup ist kostengünstiger als Enterprise-LLM-Dienste, erfüllt DSGVO-Anforderungen ohne externe Anwälte und gibt KMU Zugang zu Fähigkeiten, die sonst große Unternehmen vorbehalten sind. Der BSI empfiehlt diesen Ansatz für Organisationen unter der Datenschutz-Grundverordnung.',
          },
          {
            q: 'Können ältere oder Einsteiger-iPads (iPad 9., 10. oder 11. Generation, iPad mini, iPad Air 5) ein lokales LLM ausführen?',
            a: 'Der RAM entscheidet. Das iPad der 9. Generation (3 GB), das der 10. Generation (4 GB) und das iPad mini 6 (4 GB) sind für sinnvollen Chat auf dem Gerät zu knapp – nutzen Sie hier die Remote-Verbindung. Das iPad der 11. Generation (A16, 6 GB) schafft 1B–1.7B-Modelle in Q4. Das iPad mini 7 (A17 Pro, 8 GB), das iPad Air 5 und das iPad Air M3 (8 GB) schaffen 3B-Modelle in Q4, innerhalb der oben beschriebenen 8-GB-Grenzen. Apple veröffentlicht den RAM nicht für alle diese Modelle; die Angaben sind allgemein berichtet, aber nicht von Apple bestätigt.',
          },
          {
            q: 'Läuft ein lokales LLM auf dem Galaxy Tab S11 Ultra oder dem Galaxy Tab S9 FE?',
            a: 'Das Galaxy Tab S11 Ultra (Dimensity 9400+, je nach Ausführung 12 GB oder 16 GB RAM) liegt über der 8-GB-Schwelle und führt dieselben Apps aus wie das Tab S10+ – PocketPal AI, Google AI Edge Gallery oder Termux + Ollama – mit mehr Spielraum für 3B–4B-Modelle. Das Galaxy Tab S9 FE wird mit 6 GB oder 8 GB verkauft: Die 6-GB-Version schafft nur Qwen3 1.7B, die 8-GB-Version folgt der 8-GB-Zeile der Modelltabelle. Der Exynos 1380 ist ein Mittelklasse-Chip; rechnen Sie mit geringerem Tempo als bei Flaggschiff-Tablets.',
          },
          {
            q: 'Läuft Gemma 4 auf einem Tablet?',
            a: 'Ja, die kleinen Gemma-4-Varianten. Google nennt Gemma 4 E2B und E4B als Größen für den Einsatz auf dem Gerät; bei 4-Bit-Quantisierung gibt Google rund 2,9 GB (E2B) und 4,5 GB (E4B) Speicher für die Gewichte an. E2B ist daher die sicherere Wahl für 8-GB-Tablets, E4B eignet sich eher ab 12 GB. Die App dafür ist Google AI Edge Gallery auf iPad und Android, siehe die [Google AI Edge Gallery Review](/de/power-local-llm/google-ai-edge-gallery-review). PromptQuorum hat die Geschwindigkeit von Gemma 4 auf Tablets nicht gemessen.',
          },
          {
            q: 'Welche kostenlosen Apps führen ein lokales LLM auf dem iPad aus?',
            a: 'PocketPal AI (kostenlos, MIT), Google AI Edge Gallery (kostenlos, Apache 2.0) und Locally AI (kostenlos, mit kostenpflichtigen Optionen) führen Modelle ohne Kosten direkt auf dem Gerät aus. Open WebUI in Safari, verbunden mit Ollama auf einem Mac oder PC, ist ebenfalls kostenlos. LLM Farm ist auch kostenlos, muss aber aus dem Quellcode gebaut werden.',
          },
          {
            q: 'Kann ich LLM Farm noch auf dem iPad installieren?',
            a: 'Nicht über den App Store. Apple hat LLM Farm im August 2025 entfernt, und die README des Projekts führt sowohl den App Store als auch TestFlight als vorübergehend nicht verfügbar. Der einzige Weg ist der Bau aus dem [Quellcode](https://github.com/guinmoon/LLMFarm) in Xcode. Das letzte Upstream-Update war am 30. Januar 2026, daher wird das Projekt möglicherweise nicht mehr gepflegt. PocketPal AI und Locally AI sind die installierbaren Alternativen auf dem iPad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[PocketPal AI Review](/de/power-local-llm/pocketpal-ai-review) — die oben empfohlene kostenlose Open-Source-App für iOS und Android zur On-Device-Nutzung auf Tablets.',
          '[Locally AI Review](/de/power-local-llm/locally-ai-review) — MLX-basierter On-Device-Chat für iPad und iPhone.',
          '[Google AI Edge Gallery Review](/de/power-local-llm/google-ai-edge-gallery-review) — Googles On-Device-Gemma-App für iOS und Android.',
          '[LLM Farm Review](/de/power-local-llm/llm-farm-review) — warum die App nicht mehr im App Store ist und was das Bauen aus dem Quellcode bedeutet.',
          '[Best Local LLM Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — Schwester-Leitfaden, fokussiert auf iPhone-spezifische App-Picks und Setup.',
          '[Best Local LLM Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — Schwester-Leitfaden für Android-App-Picks jenseits Termux + Ollama.',
          '[Best Mobile LLM Models 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Model-Schicht-Begleiter: Welches Mobile-Modell für welche Aufgabe wählen.',
          '[Bauen Sie einen lokalen Voice Assistant auf Ihrem Telefon](/de/power-local-llm/voice-assistant-local-mobile-offline) — Schwester-Build-Leitfaden für Offline-mobile Voice-Assistenz.',
          '[Einfachste lokale KI-App für Windows, Mac und Linux](/de/power-local-llm/easiest-local-ai-app-windows-mac-linux) — das Desktop-Equivalent für Benutzer, die lokale KI auf Mac oder PC einrichten.',
          '[Best Local AI App für Low-End-PCs](/de/power-local-llm/best-local-ai-app-low-end-pc) — Empfehlungen für Ressourcen-limitierte Geräte mit begrenzt RAM.',
          '[Best Local AI App für Nicht-Technische Benutzer](/de/power-local-llm/local-ai-app-non-technical-users) — Benutzerfreundlichkeits-Vergleich, fokussiert auf Onboarding und Einfachheit.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Mobile-UI-Vergleich für Character-Card-Roleplay auf Tablet.',
          '[LM Studio vs Jan vs GPT4All: Full Comparison](/de/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — Desktop-App-Vergleich, der den Tablet-Leitfaden ergänzt.',
          '[Local AI Agents mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — Verbinden Sie ein Tablet mit einem MCP-fähigen lokalen Agent-Setup auf Ihrem Home-Computer.',
          '[Best Laptops für Local LLM](/de/local-llms/best-laptops-local-llm) — Hardware-Sizing-Leitfaden für den Home-Computer, der sich über Remote-Verbindung mit einem Tablet koppelt.',
          '[Best Local LLMs 2026](/de/local-llms/best-local-llms-2026) — breitere Modelllandschaft über alle Hardware-Ebenen, einschließlich Nicht-Mobile.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'KI lokal auf Ihrem Tablet ausführen: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'So führen Sie KI lokal auf einem iPad oder Android-Tablet 2026 aus. Lokale Inferenz-Apps, Termux + Ollama auf Android und Remote-Verbindung zu einem Home-Mac oder PC erklärt.',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=de`,
      url: 'https://www.promptquorum.com/de/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'de',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Die Ausführung einer lokalen KI auf einem Tablet ist 2026 praktisch. Diese Anleitung behandelt On-Device-Inferenz und Remote-Verbindung zu einem Home-Computer.',
      keywords: [
        'KI lokal auf iPad',
        'lokales LLM auf Android',
        'Ollama iPad',
        'Termux Ollama',
        'PocketPal AI',
        'Locally AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'Wie man ein iPad für lokale KI-Inferenz einrichtet',
        'Wie man Termux und Ollama auf Android nutzt',
        'Wie man sich mit einem Remote-Ollama von einem Tablet aus verbindet',
        'Modellauswahl basierend auf Tablet-Hardware',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Google AI Edge Gallery' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', 'name': 'lokale KI-Inferenz' },
        { '@type': 'Thing', 'name': 'Tablet-LLMs' },
        { '@type': 'Thing', 'name': 'iPad-Apps für KI' },
        { '@type': 'Thing', 'name': 'Android-Tablet-Inferenz' },
      ],
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'Exécuter l\'IA localement sur votre tablette : iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'Exécuter l\'IA localement sur iPad et tablette Android 2026',
    intro:
      'L\'exécution d\'une IA locale sur une tablette est pratique en 2026 sur les iPad haut de gamme et les appareils Android disposant de 8 GB+ de RAM. Ce guide couvre les options : inférence sur appareil avec PocketPal AI, Locally AI et Google AI Edge Gallery sur iPad (LLM Farm n\'est plus installable depuis l\'App Store), PocketPal AI et Termux + Ollama sur Android, et l\'alternative de connexion à distance (connecter une tablette à un Mac ou PC exécutant Ollama via Wi-Fi local) pour les appareils ne pouvant pas exécuter l\'inférence localement — y compris la question de savoir si Ollama lui-même peut tourner directement sur un iPad (non : iPadOS n\'a pas de build Ollama pris en charge).',
    metaDescription:
      'Ollama ne tourne pas sur iPad, mais un LLM local oui : PocketPal AI ou Locally AI sur l\'appareil, Termux sur Android, ou Ollama sur Mac en Wi-Fi.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-fr.webp',
    twitterDescription:
      'Exécutez l\'IA sur votre iPad ou tablette Android en 2026 : apps sur appareil (PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama et connexion à distance vers un Mac/PC exécutant Ollama — avec des modèles recommandés par appareil.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'Utilisateurs de tablettes souhaitant exécuter l\'IA localement ou se connecter à une configuration LLM locale depuis leur iPad ou appareil Android — sans dépendre des services d\'IA cloud.',
    readTime: '12 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'exécuter l\'IA sur tablette',
    targetKeywords: [
      'exécuter l\'IA localement sur iPad',
      'exécuter un LLM local sur tablette Android',
      'connexion à distance Ollama iPad',
      'Termux Ollama Android',
      'LLM Farm iPad',
      'PocketPal AI iOS LLM',
      'LLM local iPad Pro M5',
    ],
    leadAnswerBlock:
      '**L\'exécution d\'une IA locale sur une tablette offre deux modes distincts : l\'inférence sur appareil (le modèle s\'exécute directement sur le processeur de la tablette) et la connexion à distance (la tablette affiche un Mac ou PC exécutant Ollama à la maison). L\'inférence locale fonctionne sur iPad Pro M5 (12 GB sur les paliers de stockage de base, 16 GB sur les modèles 1 TB/2 TB — exécute Phi-4 Mini et Llama 3.2 3B en temps réel avec plus de marge que la génération M4 précédente), iPad Air M4 (12 GB, exécute les modèles 3B–4B confortablement) et les appareils Android haut de gamme avec 8 GB+ de RAM (Samsung Galaxy Tab S10+, via PocketPal AI ou Termux + Ollama). Ollama lui-même ne fonctionne pas nativement sur iPadOS — il n\'existe aucun build iPad pris en charge — donc les utilisateurs d\'iPad qui veulent spécifiquement Ollama doivent passer par une connexion à distance vers un Mac ou PC. La connexion à distance via Open WebUI ou une interface chat simple à l\'IP locale fonctionne sur toute tablette, tout OS — elle transforme votre tablette en interface tactile pour une machine plus puissante. Pour la plupart, la connexion à distance est préférable : la machine exécute le modèle 70B, la tablette fournit l\'interface pratique.**',
    quickAnswerTop: {
      fr: {
        question: 'Pouvez-vous exécuter un modèle d\'IA local sur un iPad ou une tablette Android ?',
        answer:
          'Oui, sur les appareils haut de gamme. iPad Pro M5 (12 GB sur les paliers de stockage de base, 16 GB sur les modèles 1 TB/2 TB) exécute Phi-4 Mini (3.8B) et Llama 3.2 3B en temps réel avec PocketPal AI ou Locally AI, avec plus de marge que la génération M4 précédente. iPad Air M4 (12 GB) exécute les modèles 3B–4B confortablement. Les tablettes Android avec 8 GB+ de RAM (Samsung Galaxy Tab S10+) peuvent exécuter Phi-4 Mini et Qwen3 1.7B via PocketPal AI ou Termux + Ollama. Ollama lui-même ne fonctionne pas nativement sur iPadOS — les utilisateurs souhaitant spécifiquement Ollama doivent passer par une connexion à distance vers un Mac ou PC. Pour les tablettes avec moins de RAM, l\'alternative est la connexion à distance : connectez-vous à un Mac ou PC exécutant Ollama sur votre réseau domestique via Open WebUI dans le navigateur.',
        bullets: [
          'iPad Pro M5 (12 GB / 16 GB) — exécute Phi-4 Mini et Llama 3.2 3B localement en temps réel avec PocketPal AI ou Locally AI, plus rapide que la génération M4 précédente grâce à une bande passante mémoire accrue.',
          'iPad Air M4 (12 GB) — exécute les modèles 3B–4B à vitesse utilisable ; les modèles 7B sont lents mais fonctionnels.',
          'Tablettes Android (8 GB+ RAM) — PocketPal AI (sans terminal) ou Termux + Ollama exécute Phi-4 Mini et Qwen3 1.7B localement.',
          'Ollama lui-même n\'a pas de build iPadOS natif — « exécuter Ollama sur un iPad » signifie se connecter à distance à un Mac ou PC qui l\'exécute, pas l\'installer sur l\'iPad.',
          'Connexion à distance — toute tablette, toute RAM : connectez-vous Mac ou PC local via Open WebUI navigateur.',
          'Meilleur modèle on-device : Phi-4 Mini (3.8B, ~2.7 GB) ou Qwen3 1.7B pour appareils limités.',
          'Connexion à distance recommandée pour 7B+ — machine locale plus rapide que toute tablette.',
          'SillyTavern et RisuAI ont des UI réactives mobiles fonctionnant Safari / Android Chrome.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Deux modes : inférence locale vs. connexion à distance', anchor: '#two-modes' },
      { label: 'iPad : inférence locale', anchor: '#ipad-on-device' },
      { label: 'Android : inférence locale', anchor: '#android-on-device' },
      { label: 'Connexion à distance à un ordinateur local', anchor: '#remote-connection' },
      { label: 'Recommandations de modèles par appareil', anchor: '#models' },
      { label: 'Interfaces avant pour IA locale', anchor: '#frontends' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**L\'inférence locale fonctionne sur iPad Pro M5 (12 GB / 16 GB), iPad Air M4 (12 GB) et Android haut de gamme (8 GB+).** Au-dessous, génération trop lente. Connexion à distance préférable pour la plupart.',
          '**La connexion à distance est l\'approche recommandée.** Connectez tablette (RAM quelconque, OS quelconque) à Mac ou PC exécutant Ollama localement. Machine exécute 70B ; tablette affiche interface chat tactile. Aucun téléchargement modèle requis.',
          '**PocketPal AI, Locally AI et Google AI Edge Gallery sont les options actuelles sur appareil pour iPad.** PocketPal AI importe des modèles GGUF, Locally AI exécute des modèles MLX conçus pour Apple Silicon, et Google AI Edge Gallery exécute les modèles Gemma de Google. LLM Farm a été retiré de l\'App Store en août 2025 et a été mis à jour pour la dernière fois le 30 janvier 2026 (2026-01-30) — à considérer uniquement comme option à compiler depuis les sources.',
          '**PocketPal AI est l\'approche Android la plus simple ; Termux + Ollama est la plus flexible.** PocketPal AI est une app Google Play sans étape de terminal. Termux + Ollama demande de l\'aisance avec un terminal mais donne accès à tout l\'écosystème Ollama sur les appareils avec 8 GB+ de RAM, en servant le modèle sur localhost:11434.',
          '**Meilleur modèle pour la plupart : Phi-4 Mini (3.8B).** Fonctionne 6 GB+ RAM ; sortie utilisable ; téléchargement 5–10 minutes.',
          '**Open WebUI dans navigateur tablette est l\'interface distance la plus simple.** Ouvrez http://[IP-locale]:3000 — aucune app, aucune config, chat complet.',
          '**SillyTavern a une UI réactive mobile.** Jeu rôle tablette : accédez SillyTavern hébergé localement via navigateur ; RisuAI meilleur support natif mobile.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Apps iPad :** PocketPal AI (gratuit, MIT), Locally AI (gratuit + options payantes, MLX), Google AI Edge Gallery (gratuit, Apache 2.0). LLM Farm (gratuit, MIT, iOS uniquement) a été retiré de l\'App Store en août 2025 et doit désormais être compilé depuis les sources.',
          '**Approche Android :** PocketPal AI ou Google AI Edge Gallery (apps, sans terminal), ou Termux + Ollama (CLI).',
          '**Connexion à distance :** tout navigateur tablette → Open WebUI ou interface chat à IP locale. C\'est aussi ainsi que les utilisateurs iPad exécutent Ollama, celui-ci n\'ayant pas de build iPadOS natif.',
          '**Minimum on-device :** iPad Air M4 (12 GB) pour 3B–4B ; iPad Pro M5 (12 GB / 16 GB) pour 7B–8B.',
          '**Minimum Android :** appareil 8 GB RAM (Galaxy Tab S10+, OnePlus Pad 2).',
          '**Meilleur modèle on-device :** Phi-4 Mini (3.8B, 2.7 GB) ; Qwen3 1.7B pour très limité.',
          '**Vitesse connexion à distance :** dépend qualité Wi-Fi et vitesse génération machine locale.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'Deux modes : inférence locale vs. connexion à distance',
        content:
          '**La décision clé n\'est pas quelle app utiliser — c\'est d\'exécuter inférence sur tablette ou machine plus puissante.** Chaque mode a exigences matérielles et plafonds de performance distincts.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'IA sur tablette : deux modes — inférence locale (modèle sur processeur tablette, 3B–7B) ou connexion à distance (tablette navigateur affichant Mac/PC exécutant grands modèles via Ollama et Open WebUI).',
          },
          {
            type: 'plain-terms',
            text: 'Mode on-device : modèle sur tablette, hors ligne. Limité petits modèles (3B, 7B haut de gamme). Mode distant : Mac/PC exécute Ollama + 70B, tablette affiche chat navigateur — qualité 70B complète à l\'écran, machine doit être allumée même Wi-Fi. Choisissez distance sauf besoin hors ligne spécifique.',
          },
        ],
        columns: ['Facteur', 'Inférence locale', 'Connexion à distance'],
        rows: [
          { 'Facteur': 'Limite modèle', 'Inférence locale': '3B–8B (iPad Pro M5) ; 3B–4B (plupart)', 'Connexion à distance': 'Illimitée — machine exécute tout' },
          { 'Facteur': 'Utilisation hors ligne', 'Inférence locale': 'Oui — sans Wi-Fi', 'Connexion à distance': 'Non — demande Wi-Fi maison' },
          { 'Facteur': 'Vitesse génération', 'Inférence locale': 'Modérée (12–30 tok/sec iPad Pro M5)', 'Connexion à distance': 'Dépend machine (jusqu\'à 40+ tok/sec)' },
          { 'Facteur': 'Stockage tablette', 'Inférence locale': '2–10 GB par modèle', 'Connexion à distance': 'Aucun — modèle sur machine' },
          { 'Facteur': 'Complexité setup', 'Inférence locale': 'Basse (app + fichier modèle)', 'Connexion à distance': 'Basse–modérée (Ollama + Open WebUI)' },
          { 'Facteur': 'Idéal pour', 'Inférence locale': 'Voyage, hors ligne, 3B', 'Connexion à distance': 'Qualité prioritaire, 70B, commodité' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous avez Mac ou PC pouvant exécuter Ollama, commencez par connexion à distance. Meilleure qualité immédiatement, sans stocker modèles tablette. Ajoutez on-device plus tard si besoin hors ligne.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-fr.svg',
        imageCaption: 'Deux modes IA tablette : inférence locale (modèle sur processeur tablette, hors ligne, limité 3B–8B) vs connexion à distance (navigateur tablette sur Mac/PC Ollama, aucun modèle sur tablette, taille illimitée).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad : inférence locale',
        content:
          '**iPad Pro M5 est l\'iPad le mieux adapté aux modèles 7B–8B.** Apple a porté la RAM de base du M5 iPad Pro à 12 GB (16 GB sur les paliers de stockage 1 TB/2 TB), contre 8 GB sur le M4 iPad Pro de base, et augmenté la bande passante mémoire de 120 GB/s à 153 GB/s — l\'inférence LLM sur Apple Silicon étant limitée par la bande passante mémoire, cela se traduit directement par une génération plus rapide. iPad Air M4 (12 GB, contre 8 GB sur le M3 Air) exécute désormais les modèles 3B–4B confortablement, et non plus seulement correctement. L\'iPad Air M3 (8 GB) et les autres iPad de 8 GB sont limités aux modèles 1B–3B en Q4. [Un iPhone avec 8 GB de RAM exécute aussi de petits modèles](/fr/power-local-llm/best-local-llm-apps-iphone-2026) via LLM Farm.',
        items: [
          '**PocketPal AI** (gratuit, open-source MIT, iOS + Android) : exécute des modèles GGUF via llama.cpp, télécharge les modèles depuis Hugging Face dans l\'app ou importe des fichiers, et inclut un benchmark intégré pour mesurer les tokens par seconde de votre propre tablette. Dernière mise à jour en amont : 19 octobre 2026 (2026-10-19). Voir l\'[avis sur PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (gratuit avec options payantes, code fermé, iPhone/iPad/Mac) : exécute des modèles ouverts via le framework MLX d\'Apple, conçu pour Apple Silicon. Dernière mise à jour App Store : 15 octobre 2026 (2026-10-15). Voir l\'[avis sur Locally AI](/fr/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (gratuit, Apache 2.0, iOS + Android) : l\'app sur appareil de Google pour ses modèles Gemma, basée sur le runtime LiteRT-LM. Dernière mise à jour en amont : 23 octobre 2026 (2026-10-23). Voir l\'[avis sur Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review). Elle exécute aussi Gemma 4 (E2B et E4B), les petits modèles actuels de Google pour l\'appareil.',
          '**LLM Farm** (gratuit, MIT, iOS uniquement) : Apple a retiré la fiche App Store en août 2025, et le README du projet indique que l\'App Store et TestFlight sont tous deux « temporairement indisponibles » — la seule voie est de compiler depuis les [sources](https://github.com/guinmoon/LLMFarm) dans Xcode. Dernière mise à jour en amont : 30 janvier 2026 (2026-01-30), il y a plus de 180 jours, le projet n\'est donc peut-être plus maintenu ; vérifiez le dépôt avant de vous y fier. Voir l\'[avis sur LLM Farm](/fr/power-local-llm/llm-farm-review).',
          '**Importer des modèles :** dans PocketPal AI, téléchargez un modèle GGUF depuis Hugging Face dans l\'app, ou importez un fichier GGUF transféré via Fichiers d\'Apple. Stockage local de l\'app — pas iCloud.',
          '**Gestion RAM iPad :** iOS gère RAM aggressivement. Fermez autres apps avant 7B sur 12 GB — iOS supprimera si autre app demande mémoire. Sur 16 GB (paliers 1 TB/2 TB) rare.',
          '**Estimations de vitesse de génération (approximatives, pas des benchmarks PromptQuorum — utilisez le benchmark intégré de PocketPal AI pour mesurer votre appareil) :** iPad Pro M5 (12 GB / 16 GB) : Phi-4 Mini ~25 tok/sec, Llama 3.2 3B ~38 tok/sec, Gemma 3 4B ~23 tok/sec — environ 25–30 % plus rapide que la génération M4 précédente, conformément à l\'augmentation de bande passante mémoire. iPad Air M4 (12 GB) : 3B–4B ~15–20 tok/sec ; 7B ~7–10 tok/sec (toujours lent pour chat temps réel).',
          '**iPad d\'entrée de gamme et iPad avec 8 GB de RAM ou moins :** utilisez des modèles 1B–3B en Q4, ou considérez l\'iPad comme un écran pour une connexion à distance. Si un modèle ne tient pas dans la RAM libre, iPadOS ferme l\'app au lieu de ralentir progressivement.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne tentez pas 7B sur iPad Air 12 GB pour chat temps réel. À 7–10 tok/sec, chaque réponse prend encore 10–20 sec. Utilisez 3B–4B sur iPad Air ; passez au iPad Pro M5 16 GB ou connexion à distance pour 7B+.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-fr.svg',
        imageCaption: 'Vitesse iPad on-device : iPad Pro M5 (12 Go / 16 Go) atteint 23–38 tok/sec sur Phi-4 Mini et Llama 3.2 3B ; iPad Air M4 (12 Go) tourne 3B–4B à 15–20 tok/sec mais chute à 7–10 tok/sec sur 7B — toujours lent pour chat temps réel.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android : inférence locale',
        content:
          '**Inférence Android utilise [Termux + Ollama](/fr/power-local-llm/best-local-llm-apps-android-2026) — Termux émulateur Linux terminal exécutant Ollama nativement.** Plus technique qu\'app iPad mais accès complet écosystème Ollama.',
        numberedItems: [
          'Installez Termux de F-Droid (pas Play Store — vieux, dépendances manquent).',
          'Dans Termux : `pkg update && pkg upgrade`',
          'Installez Ollama depuis le dépôt de paquets Termux : `pkg install ollama` (les anciens guides compilent Ollama depuis les sources avec Go, ce qui n\'est plus nécessaire).',
          'Tirez modèle : `ollama pull phi4-mini` ou `ollama pull qwen3:1.7b`.',
          'Démarrez serveur : `ollama serve` (gardez session active).',
          'Chat Termux : `ollama run phi4-mini` — ou navigateur `http://localhost:11434`. Installez app chat connectant endpoint local.',
        ],
        items: [
          '**Alternatives plus simples à Termux :** PocketPal AI (Google Play, gratuit, MIT ; dernière mise à jour en amont : 19 octobre 2026, soit 2026-10-19) et Google AI Edge Gallery (gratuit, Apache 2.0 ; dernière mise à jour en amont : 23 octobre 2026, soit 2026-10-23) exécutent des modèles sur appareil sans terminal. Commencez par l\'une d\'elles sauf si vous avez spécifiquement besoin d\'Ollama. Voir l\'[avis sur PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
          '**Appareils compatibles 3B+ :** 8 GB RAM min (Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). 6 GB : Qwen3 1.7B seulement.',
          '**Pixel Tablet non recommandé :** Tensor G2 beaucoup plus lent Snapdragon 8 Gen 3, ~4–7 tok/sec Phi-4 Mini (trop lent). Utilisateurs Pixel : connexion à distance.',
          '**Snapdragon 8 Gen 3 et Dimensity 9300** puces Android les plus rapides 2026. ~15–25 tok/sec 1.7B ; ~8–12 tok/sec 3B.',
          '**Stockage modèle :** Android pas mémoire unifiée — RAM sans GPU plupart configs. GPU demande Termux:NVIDIA ou Vulkan spécifique.',
          '**Apps alternatives :** MNN LLM (Alibaba, gratuit, plus simple) sélection limitée. AI Runner, llamafile aussi disponibles. Il n\'existe aucune version Android de LLM Farm — c\'est une app iOS uniquement ; PocketPal AI est l\'équivalent Android le plus proche.',
          '**Autres marques (Huawei MatePad, Xiaomi Pad, Galaxy Tab série A) :** la RAM et la puce décident, pas la marque. Vérifiez la RAM de la tablette dans Réglages : moins de 6 GB, restez sur des modèles 1B–1.7B ou utilisez la connexion à distance ; 8 GB ou plus, suivez la ligne 8 GB du tableau des modèles.',
          'Pour un guide de configuration Xperia spécifique au Japon avec tableau de compatibilité matérielle, consultez <a href="/fr/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">comment exécuter un LLM local sur Xperia au Japon</a>.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez Termux:Widget, créez raccourci "ollama serve" — démarre serveur depuis écran d\'accueil. Une fois actif, ouvrez app chat configurée localhost:11434.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-fr.svg',
        imageCaption: 'IA Android on-device : 5 étapes Termux + Ollama — installer Termux depuis F-Droid (pas Play Store), mettre à jour les paquets, installer Ollama avec pkg install ollama, télécharger un modèle (phi4-mini ou qwen3:1.7b), démarrer le serveur sur localhost:11434.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Connexion à distance à un ordinateur local',
        content:
          '**Setup le plus simple : Ollama + Open WebUI sur Mac ou PC, accédez navigateur tablette même Wi-Fi.** Tablette devient interface tactile machine plus puissante — voir [guide laptop](/fr/local-llms/best-laptops-local-llm) pour dimensionner machine.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Connexion à distance machine Ollama + Open WebUI donne accès complet 70B via navigateur — aucun modèle tablette, aucune app, qualité complète.',
          },
          {
            type: 'plain-terms',
            text: 'Sur Mac/PC : installez Ollama, tirez modèle, Open WebUI (Docker une ligne), exécutez lié IP locale. Sur tablette : Safari/Chrome, http://[IP]:3000, chat complet. Modèle sur Mac ; tablette affiche. Fonctionne tout appareil, OS, écran.',
          },
        ],
        numberedItems: [
          '**Machine locale :** Ollama (`brew install ollama` macOS, ollama.com Windows). `ollama pull llama3.3:70b`. Démarrez : `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Open WebUI :** `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. Disponible `http://[IP]:3000`.',
          '**Trouvez IP locale :** macOS Réglages Système (System Settings) → Réseau → IP. Windows : `ipconfig` → IPv4. Notez (typiquement `192.168.x.x`).',
          '**Sur tablette :** Safari/Chrome, `http://[IP]:3000`. Créez compte Open WebUI (local). Sélectionnez modèle. Chattez.',
          '**Sécurité :** local-only. N\'exposez pas port 3000 sans auth (système compte admin). Plain HTTP — pas données sensibles Wi-Fi public.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ajoutez URL Open WebUI écran d\'accueil tablette (Safari : Partage → Écran d\'accueil ; Chrome : Menu → Écran d\'accueil). Ressemble app native. iPad Safari fullscreen masque chrome navigateur.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-fr.webp',
        imageCaption: 'IA distante depuis tablette en 4 étapes : installer Ollama sur la machine hôte, télécharger modèle + Open WebUI, trouver l\'IP locale, ouvrir http://[IP]:3000 dans le navigateur — aucun modèle sur tablette, modèles 70B à 20–40 tok/sec.',
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles par appareil',
        content:
          '**Choix modèle déterminé par RAM disponible.** Tableau ci-dessous mappe RAM au plus gros modèle tournant temps réel (8+ tok/sec). Couche modèle : [Best Mobile LLMs 2026](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm). Paysage complet : [Best LLMs 2026](/fr/local-llms/best-local-llms-2026).',
        columns: ['Appareil / RAM', 'Modèle recommandé', 'Vitesse', 'Idéal pour'],
        rows: [
          { 'Appareil / RAM': 'iPad Air M4 (12 GB)', 'Modèle recommandé': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'Vitesse': '~18–20 tok/sec', 'Idéal pour': 'Assistance écriture, résumé' },
          { 'Appareil / RAM': 'iPad Air M3 / autres iPad 8 GB', 'Modèle recommandé': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Vitesse': '~10–18 tok/sec (est.)', 'Idéal pour': 'Brouillons légers, résumés' },
          { 'Appareil / RAM': 'iPad Pro M5 (12 GB / 16 GB)', 'Modèle recommandé': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Vitesse': '~32–38 tok/sec / ~20–23 tok/sec', 'Idéal pour': 'Station LLM réelle, RAG, fiction' },
          { 'Appareil / RAM': 'Android 8 GB (Tab S10+)', 'Modèle recommandé': 'Phi-4 Mini Q4 Termux+Ollama', 'Vitesse': '~10–15 tok/sec', 'Idéal pour': 'Power users Termux' },
          { 'Appareil / RAM': 'Android 6 GB', 'Modèle recommandé': 'Qwen3 1.7B Q4', 'Vitesse': '~15–20 tok/sec', 'Idéal pour': 'Chat léger, traduction' },
          { 'Appareil / RAM': 'Pixel Tablet (8 GB)', 'Modèle recommandé': 'Connexion à distance seulement', 'Vitesse': 'N/A', 'Idéal pour': 'Tensor G2 trop lent' },
          { 'Appareil / RAM': 'iPad mini 7 (A17 Pro, 8 GB)', 'Modèle recommandé': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Vitesse': 'Non mesurée', 'Idéal pour': 'Brouillons légers, résumés' },
          { 'Appareil / RAM': 'iPad A16 (6 GB) / iPad 10e gén. (4 GB)', 'Modèle recommandé': 'Qwen3 1.7B Q4 ou plus petit', 'Vitesse': 'Non mesurée', 'Idéal pour': 'Questions courtes ; sinon à distance' },
          { 'Appareil / RAM': 'Galaxy Tab S11 Ultra (12 GB / 16 GB)', 'Modèle recommandé': 'Gemma 4 E4B / Phi-4 Mini Q4', 'Vitesse': 'Non mesurée', 'Idéal pour': 'Plus de multitâche (palier 16 GB)' },
          { 'Appareil / RAM': 'Toute tablette à distance (iPad + Ollama)', 'Modèle recommandé': 'Tout modèle machine locale', 'Vitesse': '~20–40 tok/sec', 'Idéal pour': 'Qualité prioritaire, 70B, Ollama sur iPad' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Tâches quotidiennes (brouillon, questions, résumé) : Phi-4 Mini (3.8B) tablette est adéquat. Échoue vs 70B : raisonnement multi-étapes, créativité nuancée, longs documents. Utilisez connexion à distance pour ces cas.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-fr.webp',
        imageCaption: 'Meilleur modèle par tablette : iPad Pro M5 (12 Go / 16 Go) atteint 32–38 tok/sec sur Llama 3.2 3B ; iPad Air M4 tourne Phi-4 Mini à 18–20 tok/sec ; Android 8 Go atteint 10–15 tok/sec via Termux ; Pixel Tablet nécessite connexion distante (Tensor G2 trop lent).',
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces avant pour IA locale',
        content:
          '**Interface chat que vous utilisez affecte significativement usabilité.** Certains optimisés mobile ; d\'autres desktop-first.',
        items: [
          '**Open WebUI (navigateur) :** meilleure web UI réactive mobile. Fonctionne toute IP:port Safari/Chrome. S\'adapte tablette. Recommandé connexion à distance.',
          '**PocketPal AI (app iPad et Android) :** gratuit, open-source, importe des modèles GGUF et inclut un benchmark intégré. L\'option sur appareil la plus flexible sur les deux plateformes.',
          '**Locally AI (app iPad) :** interface propre de style Apple basée sur MLX ; la première prise en main la plus simple pour les utilisateurs non techniques sur iPad.',
          '**Google AI Edge Gallery (app iPad et Android) :** l\'app de Google centrée sur Gemma ; le moyen le plus simple d\'essayer les petits modèles de Google sur appareil.',
          '**RisuAI (navigateur, réactif mobile) :** meilleure expérience mobile jeu rôle. Se connecte Ollama distant. Fonctionne Safari near-app quality.',
          '**SillyTavern (navigateur) :** fonctionne Safari connecté Ollama distant. Pas mobile-optimisé mais fonctionnel. Extensions partiellement Safari mobile.',
          '**Termux CLI (Android) :** ligne commande seulement. Tâches scriptées ; pas pratique conversation sans app compagne.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Jeu rôle iPad : RisuAI + Ollama distant Llama 3.3 70B combinaison solide en 2026. Interface RisuAI tactile ; 70B produit character voice bien meilleur que tout modèle tablette.',
          },
        ],
      },
      cnilContext: {
        id: 'cnil-context',
        title: 'Considérations pour utilisateurs francophones',
        content:
          'Pour utilisateurs en France, Belgique et Suisse romande : l\'exécution IA locale sur tablette offre avantages conformité. **La Commission Nationale de l\'Informatique et des Libertés (CNIL) recommande l\'inférence locale pour les données professionnelles sensibles** — communications clients, documents confidentiels, données patients, dossiers légaux restent dans réseau local. Architectures iPad/tablette connectées Ollama maison satisfont RGPD sans solutions enterprise coûteuses.',
        items: [
          '**CNIL + RGPD :** Si vous traitez données sensibles (communications clients, dossiers confidentiels, données patients) France, Belgique, Suisse — CNIL recommande inférence locale. Aucune transmission APIs cloud US sous RGPD.',
          '**Mise en pratique :** iPad Pro M5 ou tablette Android (8 GB) + Ollama distant Mac/PC foyer = architecture simplement conforme CNIL. Documentez setup (stockage données, modèles) auprès de votre DPO.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Chercher LLM Farm sur l\'App Store.** Apple l\'a retiré en août 2025. Utilisez PocketPal AI ou Locally AI, ou compilez LLM Farm depuis les sources.',
          '**Modèle 7B sur tablette 8 GB.** À 5–8 tok/sec trop lent conversation. Utilisez 3B sur 8 GB ; connexion à distance pour 7B+.',
          '**Termux Play Store Android.** Version vieille, dépendances manquent. Installez toujours F-Droid.',
          '**Open WebUI exposé internet sans auth.** Aucun mot de passe défaut. Quiconque trouve URL accède modèle. Activez compte admin + firewall.',
          '**Autres apps pas fermées avant on-device 8 GB iPad.** iOS supprime RAM. Modèle 3B ~3.5 GB ; iOS le tue si autre app demande. Fermez tout avant inférence.',
          '**Attendre UI desktop-quality navigateurs mobile.** SillyTavern desktop-first. Mobile fonctionnel pas poli. Mobile-first : RisuAI ou Open WebUI.',
          '**Saisir `ipad.local` dans le navigateur.** Safari doit recevoir l\'adresse de l\'ordinateur à la maison — son IP ou son nom d\'hôte, par exemple `192.168.1.20:3000` ou `mon-mac.local:3000` —, pas le nom de la tablette. Un nom comme `ipad.local` désigne une tablette, pas la machine qui exécute Ollama.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LLM Farm (iOS) docs et GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [fiche App Store](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Paquet Ollama pour Termux — [Termux](https://termux.dev) (installez Termux depuis F-Droid)',
          'Build ARM Ollama Termux — [Docs Ollama](https://ollama.com/docs)',
          'Docs Open WebUI — [docs.openwebui.com](https://docs.openwebui.com)',
          'Spécifications puce M5 Apple iPad Pro, paliers RAM et bande passante mémoire — [Apple Newsroom, octobre 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Spécifications puce M4 Apple iPad Air et RAM — [Apple Newsroom, mars 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Présentation des modèles Gemma 4 et besoins en mémoire — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Puce et paliers de RAM du Samsung Galaxy Tab S11 Ultra — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Pouvez-vous exécuter l\'IA sur un iPad ?',
            a: 'Oui, sur iPad Pro M5 (12 GB de base / 16 GB sur les paliers 1 TB et 2 TB) et iPad Air M4 (12 GB). iPad Pro M5 exécute Phi-4 Mini et Llama 3.2 3B temps réel avec PocketPal AI ou Locally AI, environ 25–30 % plus rapide que l\'iPad Pro M4 précédent grâce à une bande passante mémoire accrue (153 GB/s contre 120 GB/s). iPad Air M4 exécute 3B–4B confortablement. Pour 7B+ iPad, connexion à distance Mac ou PC Ollama recommandée — iPad affiche chat, machine exécute inférence.',
          },
          {
            q: 'Ollama fonctionne-t-il sur un iPad ?',
            a: 'Non — Ollama n\'a pas de build iPadOS pris en charge, il ne peut donc pas être installé directement sur un iPad comme c\'est possible sous Android via Termux. « Exécuter Ollama sur iPad » signifie faire tourner Ollama sur un Mac ou PC et s\'y connecter depuis le navigateur de l\'iPad (via Open WebUI à l\'IP locale de la machine) — l\'iPad est un affichage, pas le moteur d\'inférence. Pour une véritable inférence sur l\'appareil sur iPad, utilisez plutôt une app sur appareil comme PocketPal AI (modèles GGUF via llama.cpp) ou Locally AI (modèles MLX).',
          },
          {
            q: 'Pouvez-vous exécuter l\'IA sur une tablette Android ?',
            a: 'Oui, sur les appareils 8 GB+ de RAM avec PocketPal AI ou Termux + Ollama. Galaxy Tab S10+ (12 GB) exécute Phi-4 Mini ~10–15 tok/sec. 6 GB exécute Qwen3 1.7B. Setup demande Termux F-Droid + commandes terminal. Connexion à distance machine locale est chemin plus facile plupart utilisateurs Android.',
          },
          {
            q: 'L\'IA on-device tablette fonctionne hors ligne ?',
            a: 'Oui. Modèle téléchargé et app installée, inférence on-device iPad (PocketPal AI, Locally AI) et Android (Termux + Ollama) fonctionne sans internet. Avantage principal on-device — connexion à distance demande Wi-Fi maison.',
          },
          {
            q: 'Meilleure app IA iPad ?',
            a: 'On-device : PocketPal AI (open-source, importe tout modèle GGUF) ou Locally AI (UI la plus simple, MLX). LLM Farm n\'est plus disponible sur l\'App Store. Connexion distance Ollama : Open WebUI Safari (meilleur chat général), RisuAI Safari (meilleur jeu rôle). Choix dépend si vous voulez on-device, hors ligne, ou meilleure UI.',
          },
          {
            q: 'Termux + Ollama Android sûr ?',
            a: 'Oui. Termux émulateur terminal établi, millions développeurs. Ollama API locale seulement (localhost:11434 défaut) — pas accessible autres appareils réseau sauf bind explicite. Fichiers modèle stockage privé Termux, pas Android partagé.',
          },
          {
            q: 'Qualité ChatGPT locale tablette ?',
            a: 'Presque avec bon setup. La qualité des modèles cloud de pointe demande généralement 70B+. iPad Pro M5 (12 GB / 16 GB) pas 70B — 3B–8B seulement. À distance : GPU 24 GB (RTX 4090) ou unifié 64 GB (Mac M5 Max) exécute Llama 3.3 70B, tablette accède qualité Open WebUI. Plus proche qualité cloud tablette.',
          },
          {
            q: 'Garder serveur Ollama maison démarré lid fermé ?',
            a: 'macOS : Réglages Système (System Settings) → Batterie → désactiver "Power Nap" + Amphetamine prévenir sleep branché. Windows : Options énergie → "Jamais" sleep branché. Alternative : exécutez Ollama machine toujours-on (mini-PC, NAS) pas laptop primaire.',
          },
          {
            q: 'Batterie tablette IA épuisée rapide ?',
            a: 'Oui — l\'inférence sur appareil sollicite fortement CPU/GPU et vide la batterie bien plus vite que la navigation web ; le rythme varie selon l\'appareil et le modèle. Usage prolongé : gardez la tablette branchée. Connexion à distance vers une machine : beaucoup moins de batterie — la tablette affiche seulement une page web.',
          },
          {
            q: 'Throttling tablettes inférence IA ?',
            a: 'Oui, spécialement iPad Air M4 et Android sans refroidissement actif. iPad Pro M5 a plus de marge thermique que l\'iPad Air, et de nombreuses tablettes Android ralentissent plus tôt en inférence soutenue. Mitigations : chunks 200–400 tokens, tablette surface dure, pas autres apps CPU.',
          },
          {
            q: 'Clavier meilleur usage IA tablette ?',
            a: 'Apple Magic Keyboard iPad Pro M5 (trackpad) setup poli — shortcuts Safari + Open WebUI, trackpad sélection texte. Logitech Combo Touch budget. Android : tout Bluetooth fonctionne Termux mais expérience plus rude. Prose : iPad Pro + Magic Keyboard station IA écriture.',
          },
          {
            q: 'Puis-je exécuter SillyTavern sur iPad ?',
            a: 'Oui, via une connexion à distance. SillyTavern tourne sur un Mac ou PC à la maison, et Safari sur iPad s\'y connecte à l\'IP locale. L\'interface mobile est fonctionnelle mais peu soignée — certaines fonctions d\'extension (outils regex, panneaux de chat de groupe) marchent mais paraissent à l\'étroit. Pour le jeu de rôle en particulier, RisuAI a une meilleure interface mobile que SillyTavern ; les deux peuvent se connecter au même backend Ollama sur votre machine.',
          },
          {
            q: 'Une tablette peut-elle gérer du RAG sur de longs documents ?',
            a: 'Sur l\'appareil, non — vectoriser plus de 1 000 documents sur une tablette n\'est pas réaliste. Via une connexion à distance, oui — votre machine gère le pipeline RAG, la tablette affiche l\'interface de chat. AnythingLLM exécuté sur une machine à la maison et consulté via le navigateur de la tablette gère des collections de documents de toute taille sans limite côté tablette. Pour les étudiants ou travailleurs du savoir qui veulent du RAG sur tablette, la connexion à distance est généralement l\'option la plus pratique.',
          },
          {
            q: 'Puis-je utiliser des écrans externes avec l\'IA sur tablette ?',
            a: 'Oui sur iPad Pro M5 (Stage Manager + écran externe donne une configuration multifenêtre ; Open WebUI sur le moniteur externe, notes et documents sources sur l\'écran de l\'iPad). La Galaxy Tab S10 Ultra prend en charge le mode DeX avec écran externe pour un flux de travail IA multi-écrans similaire. Les tablettes Android sans mode DeX se contentent de dupliquer l\'écran — moins utile. iPad Pro + moniteur externe + Magic Keyboard est ce qui se rapproche le plus d\'une vraie station de travail IA sur tablette en 2026.',
          },
          {
            q: 'Une tablette est-elle meilleure qu\'un téléphone pour l\'IA locale ?',
            a: 'Pour un usage orienté saisie (rédaction, RAG, longues conversations), oui — le clavier et la taille d\'écran comptent. Pour un chat rapide, des requêtes vocales ou en déplacement, le téléphone que vous avez déjà est préférable. L\'iPad Pro M5 est la tablette la plus susceptible de surpasser un téléphone haut de gamme pour l\'IA locale ; les tablettes et téléphones milieu de gamme sont à peu près équivalents. La plupart des lecteurs ne devraient pas acheter une tablette spécifiquement pour l\'IA locale — achetez-en une si vous la voulez pour d\'autres raisons ; la capacité IA est un bonus.',
          },
          {
            q: 'Pourquoi l\'IA locale est-elle si lente sur ma tablette ?',
            a: 'Généralement l\'une de quatre causes : le modèle est trop grand pour la RAM libre (le système swappe ou ferme l\'app), la génération est limitée par la bande passante mémoire plutôt que par la vitesse de la puce, la tablette ralentit pour raisons thermiques, ou des apps en arrière-plan consomment de la mémoire. Solutions : passer à un modèle plus petit ou à une quantification Q4, fermer les autres apps, garder la tablette au frais et branchée, et mesurer la vitesse réelle avec le benchmark intégré de PocketPal AI. Si un modèle 3B reste trop lent, utilisez la connexion à distance vers une machine à la maison.',
          },
          {
            q: 'Quelles tablettes peuvent exécuter un LLM local (iPad Air M3, iPad d\'entrée de gamme, Galaxy Tab A, Huawei MatePad, Xiaomi Pad) ?',
            a: 'La RAM et la puce décident, pas la marque. L\'iPad Air M3 (8 GB) gère les modèles 1B–3B ; les iPad d\'entrée de gamme et les tablettes Android économiques avec moins de 6 GB de RAM ne tiennent que des modèles 1B–1.7B, donc la connexion à distance est le meilleur choix pour elles. Les Huawei MatePad et Xiaomi Pad avec 8 GB ou plus exécutent les mêmes apps que les autres tablettes Android, selon leur disponibilité dans les boutiques d\'apps. Vérifiez la RAM de votre tablette dans ses réglages, puis suivez le tableau des modèles ci-dessus.',
          },
          {
            q: 'Existe-t-il une app Ollama pour iPad ?',
            a: 'Il n\'existe pas d\'app Ollama officielle pour iPadOS. Il existe des clients iPad tiers qui se connectent à un serveur Ollama sur votre Mac ou PC — par exemple [GetOAI](https://apps.apple.com/app/id6752573799) et [LLLM](https://apps.apple.com/app/id6749804212) — mais ils ne font qu\'afficher le chat ; le modèle tourne toujours sur la machine à la maison. Vérifiez chaque fiche App Store avant l\'installation. La voie navigateur (Open WebUI dans Safari) ne demande aucune app.',
          },
          {
            q: 'Puis-je exécuter un LLM local sur une tablette Android sans terminal ?',
            a: 'Oui. PocketPal AI (gratuit, open-source, sur Google Play) et Google AI Edge Gallery (gratuit, Apache 2.0) téléchargent et exécutent des modèles sur appareil sans Termux. Termux + Ollama n\'est nécessaire que si vous voulez spécifiquement l\'écosystème d\'Ollama ou un point d\'accès API local.',
          },
          {
            q: 'Un iPad ancien ou d\'entrée de gamme (iPad 9e, 10e ou 11e génération, iPad mini, iPad Air 5) peut-il exécuter un LLM local ?',
            a: 'La RAM décide. Les iPad de 9e génération (3 GB) et de 10e génération (4 GB) ainsi que l\'iPad mini 6 (4 GB) sont trop justes pour un chat utile sur l\'appareil : passez par la connexion à distance. L\'iPad de 11e génération (A16, 6 GB) accepte des modèles de 1B–1.7B en Q4. L\'iPad mini 7 (A17 Pro, 8 GB), l\'iPad Air 5 et l\'iPad Air M3 (8 GB) acceptent des modèles de 3B en Q4, dans les limites des 8 GB décrites plus haut. Apple ne publie pas la RAM de tous ces modèles ; les chiffres sont ceux couramment rapportés, pas une confirmation d\'Apple.',
          },
          {
            q: 'Le Galaxy Tab S11 Ultra ou le Galaxy Tab S9 FE peuvent-ils exécuter un LLM local ?',
            a: 'Le Galaxy Tab S11 Ultra (Dimensity 9400+, 12 GB ou 16 GB de RAM selon la configuration) dépasse le seuil de 8 GB et exécute les mêmes applications que le Tab S10+ — PocketPal AI, Google AI Edge Gallery ou Termux + Ollama — avec plus de marge pour les modèles de 3B–4B. Le Galaxy Tab S9 FE existe en 6 GB ou 8 GB : la version 6 GB ne convient qu\'à Qwen3 1.7B, la version 8 GB suit la ligne 8 GB du tableau des modèles. L\'Exynos 1380 est une puce de milieu de gamme ; attendez-vous à une vitesse inférieure à celle des tablettes haut de gamme.',
          },
          {
            q: 'Gemma 4 fonctionne-t-il sur une tablette ?',
            a: 'Oui, les petites variantes de Gemma 4. Google présente Gemma 4 E2B et E4B comme les tailles destinées à l\'exécution sur l\'appareil ; en quantification 4 bits, Google indique environ 2.9 GB (E2B) et 4.5 GB (E4B) de mémoire pour les poids. E2B est donc le choix le plus sûr sur une tablette de 8 GB, et E4B convient mieux à partir de 12 GB. L\'application pour les exécuter sur iPad et Android est Google AI Edge Gallery ; voir l\'[avis sur Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review). PromptQuorum n\'a pas mesuré la vitesse de Gemma 4 sur tablette.',
          },
          {
            q: 'Quelles applications gratuites exécutent un LLM local sur iPad ?',
            a: 'PocketPal AI (gratuit, MIT), Google AI Edge Gallery (gratuit, Apache 2.0) et Locally AI (gratuit, avec options payantes) exécutent des modèles sur l\'appareil sans frais. Open WebUI dans Safari, relié à Ollama sur un Mac ou un PC, est aussi gratuit. LLM Farm est gratuit lui aussi, mais doit être compilé depuis les sources.',
          },
          {
            q: 'Peut-on encore installer LLM Farm sur iPad ?',
            a: 'Pas depuis l\'App Store. Apple a retiré LLM Farm en août 2025, et le README du projet indique que l\'App Store comme TestFlight sont temporairement indisponibles. La seule voie est de le compiler depuis les [sources](https://github.com/guinmoon/LLMFarm) dans Xcode. Sa dernière mise à jour en amont date du 30 janvier 2026 ; il est peut-être abandonné. PocketPal AI et Locally AI sont les alternatives installables sur iPad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — l\'app gratuite et open-source pour iOS et Android recommandée ci-dessus pour l\'usage sur appareil.',
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — chat sur appareil basé sur MLX pour iPad et iPhone.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'app Gemma sur appareil de Google pour iOS et Android.',
          '[Avis LLM Farm](/fr/power-local-llm/llm-farm-review) — pourquoi l\'app n\'est plus sur l\'App Store et ce que implique la compilation depuis les sources.',
          '[Meilleures apps IA locales iPhone 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — guide compagnon iPhone.',
          '[Meilleures apps IA locales Android 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — guide Android au-delà Termux + Ollama.',
          '[Meilleurs modèles IA mobiles 2026 : Phi-4 Mini vs Gemma 3](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — quel modèle mobile pour quelle tâche.',
          '[Construire assistant vocal local téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) — guide build voice offline mobile.',
          '[App IA locale plus facile Windows, Mac, Linux](/fr/power-local-llm/easiest-local-ai-app-windows-mac-linux) — équivalent desktop.',
          '[Meilleure app IA locale PC faible specs](/fr/power-local-llm/best-local-ai-app-low-end-pc) — appareils ressources limitées.',
          '[Meilleure app IA locale utilisateurs non-techniques](/fr/power-local-llm/local-ai-app-non-technical-users) — UX comparaison onboarding.',
          '[SillyTavern vs Agnai vs RisuAI : meilleur frontend roleplay local](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparaison UI mobile jeu rôle.',
          '[LM Studio vs Jan vs GPT4All : comparaison complète](/fr/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparaison apps desktop.',
          '[Agents IA locaux MCP 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — connecter tablette agent MCP maison.',
          '[Meilleurs laptops IA locale](/fr/local-llms/best-laptops-local-llm) — dimensionner machine maison.',
          '[Meilleurs LLMs locaux 2026](/fr/local-llms/best-local-llms-2026) — paysage modèle complet tous hardware.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Exécuter l\'IA localement sur votre tablette : iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'Exécutez un LLM local sur iPad ou tablette Android : apps sur appareil (PocketPal AI, Locally AI), Termux + Ollama, et pourquoi Ollama sur iPad passe par une connexion à distance.',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=fr`,
      url: 'https://www.promptquorum.com/fr/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'fr',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Exécution IA locale tablette pratique 2026. Inférence on-device et connexion à distance machine locale.',
      keywords: [
        'IA locale iPad',
        'LLM local tablette Android',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'PocketPal AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'Configuration iPad inférence IA locale',
        'Utiliser Termux et Ollama Android',
        'Connexion Ollama distant tablette',
        'Sélection modèle par hardware tablette',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', 'name': 'inférence IA locale' },
        { '@type': 'Thing', 'name': 'LLMs tablette' },
        { '@type': 'Thing', 'name': 'apps iPad IA' },
        { '@type': 'Thing', 'name': 'inférence tablette Android' },
      ],
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'タブレットでAIをローカル実行：iPad Pro M5・Galaxy Tab S10・OnePlus Pad 2（2026年版）',
    seoTitle: 'iPadとAndroidタブレットでAIをローカル実行 2026',
    intro:
      '2026年、タブレットでのローカルAI実行はRAM 8GB以上の高性能iPad・Androidデバイスで現実的です。このガイドでは、iPadでのPocketPal AI・Locally AI・Google AI Edge Galleryによるオンデバイス推論（LLM FarmはApp Storeからインストールできなくなりました）、AndroidでのPocketPal AIとTermux + Ollama、そしてローカル推論ができないデバイス向けのリモート接続（ローカルWi-FiでOllamaを実行するMacまたはPCへの接続）を解説します。Ollama自体をiPadで直接実行できるか（できません。iPadOSにはサポートされるOllamaビルドがありません）も取り上げます。',
    metaDescription:
      'OllamaはiPadでは動作しませんが、ローカルLLMは使えます。PocketPal AI・Locally AIの端末内実行、AndroidのTermux、MacのOllamaへのWi-Fi接続を解説します。',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ja.webp',
    twitterDescription:
      '2026年タブレットでAIをローカル実行：オンデバイスアプリ（PocketPal AI・Locally AI・Google AI Edge Gallery）、Termux + Ollama、Ollamaを実行するホームMac/PCへのリモート接続、デバイス別モデル選択。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'クラウドAIサービスに頼らず、iPadまたはAndroidデバイスからAIをローカル実行、またはホームLLMセットアップに接続したいタブレットユーザー。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'タブレットでAIをローカル実行',
    targetKeywords: [
      'iPadでAIをローカル実行',
      'AndroidタブレットでローカルLLM実行',
      'Ollama iPadリモート接続',
      'Termux Ollama Android',
      'PocketPal AI iPad',
      'Locally AI iPad',
    ],
    leadAnswerBlock:
      '**タブレットでのローカルAI実行には2つのモードがあります。オンデバイス推論（タブレットのチップで直接モデルを実行）とリモート接続（自宅のMacまたはPCでOllamaを実行し、タブレットはその表示端末となる）です。オンデバイスはiPad Pro M5（ベースストレージ12GB、1TB/2TBモデルは16GB。Phi-4 MiniとLlama 3.2 3Bを前世代M4より余裕を持ってリアルタイム実行）、iPad Air M4（12GB、3B〜4Bモデルを快適に実行）、RAM 8GB以上のAndroid高性能デバイス（Samsung Galaxy Tab S10+、PocketPal AIまたはTermux + Ollama経由）で実用的です。ホームサーバーのローカルIPでOpen WebUIまたはシンプルなチャットUIを使ったリモート接続は、あらゆるタブレット・RAM・OSで機能します。ほとんどのユーザーにはリモート接続がより優れた選択肢です。ホームマシンが70Bモデルを実行し、タブレットは使いやすいインターフェースを提供します。**',
    quickAnswerTop: {
      ja: {
        question: 'iPadまたはAndroidタブレットでローカルAIモデルを実行できますか？',
        answer:
          'はい、高性能デバイスで可能です。iPad Pro M5（ベースストレージ12GB、1TB/2TBモデルは16GB）は、PocketPal AIまたはLocally AIでPhi-4 Mini（3.8B）とLlama 3.2 3Bを前世代M4より余裕を持ってリアルタイム実行します。iPad Air M4（12GB）は3B〜4Bモデルを快適に実行します。RAM 8GB以上のAndroidタブレット（Samsung Galaxy Tab S10+）はPocketPal AIまたはTermux + OllamaでPhi-4 MiniとQwen3 1.7Bをローカル実行できます。Ollama自体はiPadOSではネイティブ動作しません — Ollamaを特に使いたいユーザーはMacまたはPCへのリモート接続が必要です。RAMが少ないまたは古いチップのタブレットには、リモート接続が実用的な代替手段です。',
        bullets: [
          'iPad Pro M5（12GB / 16GB）— PocketPal AIまたはLocally AIでPhi-4 MiniとLlama 3.2 3Bをリアルタイムローカル実行、高いメモリ帯域幅により前世代M4より高速。',
          'iPad Air M4（12GB）— 3B〜4Bモデルを実用的な速度で実行；7Bモデルは低速だが動作可能。',
          'Androidタブレット（8GB+ RAM）— PocketPal AI（ターミナル不要）またはTermux + OllamaでPhi-4 MiniとQwen3 1.7Bをローカル実行。',
          'Ollama自体にはネイティブなiPadOSビルドがありません — 「iPadでOllamaを実行する」とはiPad上へのインストールではなく、Ollamaを実行するMacまたはPCへリモート接続することを意味します。',
          'リモート接続 — どのタブレット・RAM・OSでも：ブラウザのOpen WebUI経由でOllama実行中のホームMac・PCに接続。',
          'ほとんどのタブレットに最適なオンデバイスモデル：Phi-4 Mini（3.8B、約2.7GB）、RAM制約デバイスにはQwen3 1.7B。',
          '7B以上はリモート接続推奨 — ホームマシンの方がどのタブレットよりも高速。',
          'SillyTavernとRisuAIはiPad Safari・Android Chromeで動作するモバイル対応UIを搭載。',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '2つのモード：オンデバイスvsリモート接続', anchor: '#two-modes' },
      { label: 'iPad：オンデバイス推論', anchor: '#ipad-on-device' },
      { label: 'Android：オンデバイス推論', anchor: '#android-on-device' },
      { label: 'ホームマシンへのリモート接続', anchor: '#remote-connection' },
      { label: 'デバイス別モデル推奨', anchor: '#models' },
      { label: 'タブレット向けローカルAIフロントエンド', anchor: '#frontends' },
      { label: 'よくある失敗', anchor: '#common-mistakes' },
      { label: '参考資料', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**オンデバイス推論はiPad Pro M5（12GB / 16GB）、iPad Air M4（12GB）、高性能Android（8GB+）で実用的です。** これ以下のスペックではリアルタイム利用に生成速度が不足します。ほとんどのタブレットユーザーにはリモート接続の方が優れた選択肢です。',
          '**リモート接続がほとんどの人に推奨されるアプローチです。** ホームネットワーク上のOllama実行中のMacまたはPCにタブレット（RAM・OS問わず）を接続します。ホームマシンが70Bモデルを実行し、タブレットはタッチ操作しやすいチャットインターフェースを表示します。タブレットへのモデルダウンロードは不要です。',
          '**PocketPal AI、Locally AI、Google AI Edge Galleryが現在のiPadオンデバイスの選択肢です。** PocketPal AIはGGUFモデルをインポートでき、Locally AIはApple Silicon向けのMLXモデルを実行し、Google AI Edge GalleryはGoogleのGemmaモデルを実行します。LLM Farmは2025年8月にApp Storeから削除され、最終更新は2026-01-30です — ソースからビルドする選択肢としてのみ扱ってください。',
          '**Androidで最も簡単なのはPocketPal AI、柔軟なのはTermux + Ollamaです。** PocketPal AIはGoogle Playのアプリで、ターミナル操作は不要です。Termux + Ollamaはターミナル操作に慣れている必要がありますが、RAM 8GB以上のデバイスで完全なOllamaエコシステムを利用でき、localhost:11434でモデルを提供します。',
          '**ほとんどのタブレットに最適なモデル：Phi-4 Mini（3.8B）。** 6GB以上の空きRAMで動作し、日常的なタスクで実用的な出力を生成します。高速回線で5〜10分でダウンロード完了します。',
          '**タブレットブラウザのOpen WebUIが最もシンプルなリモート接続インターフェースです。** ホームのMacまたはPCが`192.168.x.x:3000`でOpen WebUIを実行中なら、タブレットのブラウザでそのアドレスを開くだけ — アプリインストール不要、設定不要、フルチャットインターフェース。',
          '**SillyTavernはモバイル対応UIを搭載しています。** タブレットでのロールプレイやキャラクターカード利用では、ホームマシンで動作するSillyTavernにタブレットブラウザからアクセスする方法が効果的です；RisuAIは最高のネイティブモバイルサポートを持っています。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**iPadアプリ：** PocketPal AI（無料、MIT）、Locally AI（無料＋有料オプション、MLX）、Google AI Edge Gallery（無料、Apache 2.0）。LLM Farm（無料、MIT、iOS専用）は2025年8月にApp Storeから削除され、現在はソースからビルドする必要があります。',
          '**Androidの方法：** PocketPal AIまたはGoogle AI Edge Gallery（アプリ、ターミナル不要）、あるいはTermux + Ollama（CLI）。',
          '**リモート接続：** あらゆるタブレットブラウザ → ホームマシンのローカルIPでOpen WebUIまたはシンプルなチャットUI。OllamaにはネイティブなiPadOSビルドがないため、iPadユーザーもこの方法でOllamaを利用します。',
          '**オンデバイスの最低要件：** iPad Air M4（12GB）で3B〜4Bモデル；iPad Pro M5（12GB / 16GB）で7B〜8Bモデル。',
          '**Androidオンデバイスの最低要件：** RAM 8GBデバイス（Samsung Galaxy Tab S10+、OnePlus Pad 2）。',
          '**最適オンデバイスモデル：** ほとんどのタブレットにPhi-4 Mini（3.8B、2.7GB）；非常に制約があるデバイスにはQwen3 1.7B。',
          '**リモート接続速度：** タブレットのハードウェアではなく、Wi-Fi品質とホームマシンの生成速度に依存します。',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: '2つのモード：オンデバイスvsリモート接続',
        content:
          '**最も重要な判断はどのアプリを使うかではなく、タブレットで推論するかホームの高性能マシンで推論するかです。** 各モードには異なるハードウェア要件と性能上限があります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'タブレットでのAI実行には2つの実用的なモードがあります：オンデバイス推論（タブレットチップでモデル実行、3B〜7Bに限定）またはリモート接続（OllamaとOpen WebUIで大型モデルを実行するホームMac・PCのブラウザ表示端末としてタブレットを使用）。',
          },
          {
            type: 'plain-terms',
            text: 'オンデバイスモード：モデルがタブレット上に存在し、オフラインで動作します。小型モデル（3B、高性能iPad Proなら7B）に限定され、クラウドAIより低速です。リモートモード：ホームのMacまたはPCがOllamaと70Bモデルを実行し、タブレットはブラウザでチャットを表示するだけ。タブレット画面で70Bの品質を得られ、タブレットにモデル保存不要、ホームマシンは電源オンで同じWi-Fiに接続している必要があります。オフライン利用が特に必要でない限りリモート接続を選んでください。',
          },
        ],
        columns: ['項目', 'オンデバイス', 'リモート接続'],
        rows: [
          { '項目': 'モデルサイズ上限', 'オンデバイス': '3B〜8B（iPad Pro M5）；3B〜4B（ほとんどのタブレット）', 'リモート接続': '無制限 — ホームマシンがどのモデルも実行可能' },
          { '項目': 'オフライン利用', 'オンデバイス': '可能 — Wi-Fi不要で動作', 'リモート接続': '不可 — ホームWi-Fi必須' },
          { '項目': '生成速度', 'オンデバイス': '中程度（iPad Pro M5で12〜30トークン/秒）', 'リモート接続': 'ホームマシン次第（最大40+トークン/秒）' },
          { '項目': 'タブレット上のストレージ', 'オンデバイス': 'モデルあたり2〜10GB', 'リモート接続': 'なし — モデルはホームマシン上' },
          { '項目': 'セットアップの複雑さ', 'オンデバイス': '低（アプリ＋モデルファイルのダウンロード）', 'リモート接続': '低〜中（ホームマシンにOllama＋Open WebUI必要）' },
          { '項目': '最適な用途', 'オンデバイス': '旅行、オフライン利用、3Bモデルのタスク', 'リモート接続': '品質優先利用、70Bモデル、利便性' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ollamaを実行できるMacまたはPCがすでにある場合は、リモート接続から始めてください。タブレットにモデルファイルを保存したり、モバイルアプリの制限に対処したりすることなく、すぐに高品質を得られます。後でオフライン利用が必要になった場合にオンデバイス機能を追加してください。',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-ja.svg',
        imageCaption: '2つのタブレットAIモード：オンデバイス推論（タブレットチップでモデル実行、オフライン可能、3B〜8Bに限定）vsリモート接続（OllamaのホームMac/PCにタブレットブラウザで接続、タブレットにモデル不要、モデルサイズ無制限）。',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad：オンデバイス推論',
        content:
          '**iPad Pro M5は7B〜8Bモデルに最も適したiPadです。** AppleはM5 iPad Proのベースメモリを従来のM4 iPad Proベースモデルの8GBから12GBに引き上げ（1TB/2TBストレージモデルは16GB）、メモリ帯域幅を120GB/sから153GB/sに向上させました — Apple SiliconでのLLM推論はメモリ帯域幅に律速されるため、これは直接的な生成速度の向上につながります。iPad Air M4（12GB、M3 Airの8GBから増加）は、3B〜4Bモデルを「適切」ではなく「快適」に実行できるようになりました。iPad Air M3（8GB）とその他の8GB iPadは、Q4で1B〜3Bモデルに限られます。[8GB RAM iPhoneもLLM Farm経由で小型モデルを実行できます](/ja/power-local-llm/best-local-llm-apps-iphone-2026)。',
        items: [
          '**PocketPal AI**（無料、オープンソースMIT、iOS + Android）：llama.cpp経由でGGUFモデルを実行し、アプリ内でHugging Faceからモデルをダウンロードするかファイルをインポートでき、お使いのタブレットのトークン/秒を自分で測れるベンチマーク機能を内蔵しています。最終アップストリーム更新：2026-10-19。[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review)を参照。',
          '**Locally AI**（無料、有料オプションあり、クローズドソース、iPhone/iPad/Mac）：Apple Silicon向けに作られたAppleのMLXフレームワークでオープンモデルを実行します。最終App Store更新：2026-10-15。[Locally AIレビュー](/ja/power-local-llm/locally-ai-review)を参照。',
          '**Google AI Edge Gallery**（無料、Apache 2.0、iOS + Android）：LiteRT-LMランタイム上でGemmaモデルを動かすGoogleのオンデバイスアプリ。最終アップストリーム更新：2026-10-23。[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review)を参照。Gemma 4（E2BとE4B）、Googleの最新の小型オンデバイスモデルも動かせます。',
          '**LLM Farm**（無料、MIT、iOS専用）：Appleが2025年8月にApp Storeの掲載を削除し、プロジェクトのREADMEもApp StoreとTestFlightの両方を「一時的に利用不可」としています — 唯一の方法はXcodeで[ソース](https://github.com/guinmoon/LLMFarm)からビルドすることです。最終アップストリーム更新：2026-01-30で180日以上前のため、メンテナンスされていない可能性があります。利用前にリポジトリを確認してください。[LLM Farmレビュー](/ja/power-local-llm/llm-farm-review)を参照。',
          '**モデルのインポート：** PocketPal AIでは、アプリ内でHugging FaceからGGUFモデルをダウンロードするか、Apple Filesで転送したGGUFファイルをインポートします。モデルはアプリのローカルストレージに保存 — iCloudではありません。',
          '**iPadのRAM管理：** iOSはバックグラウンドアプリのRAMを積極的に管理します。12GB iPadで7Bモデルを実行する前に他のすべてのアプリを閉じてください — 別のアプリがメモリを必要とするとiOSがモデルを削除します。16GB iPad Pro M5（1TB/2TBモデル）ではほとんど問題になりません。',
          '**生成速度の目安（概算値でありPromptQuorumのベンチマークではありません — お使いのデバイスの実測にはPocketPal AIの内蔵ベンチマークを使用してください）：** iPad Pro M5（12GB / 16GB）：Phi-4 Mini 約25トークン/秒、Llama 3.2 3B 約38トークン/秒、Gemma 3 4B 約23トークン/秒 — メモリ帯域幅の向上に応じ、前世代M4より約25〜30%高速。iPad Air M4（12GB）：3B〜4Bモデル 約15〜20トークン/秒；7Bモデル 約7〜10トークン/秒（依然リアルタイムチャットには低速）。',
          '**エントリーモデルおよびRAM 8GB以下のiPad：** Q4で1B〜3Bモデルを使うか、iPadをリモート接続の表示端末として扱ってください。モデルが空きRAMに収まらない場合、iPadOSは緩やかに遅くなるのではなくアプリを終了します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '12GB iPad Airでリアルタイムチャット用に7Bモデルを実行しようとしないでください。毎秒7〜10トークンでは、各レスポンスに依然10〜20秒かかります。プロンプトを送信して待つ要約タスクには使えますが、会話型利用には苛立たしい速度です。iPad Airでは3B〜4Bモデルを使用し、7B以上には16GB iPad Pro M5へのアップグレードまたはリモート接続に切り替えてください。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-ja.svg',
        imageCaption: 'iPadオンデバイス推論速度：iPad Pro M5（12GB / 16GB）はPhi-4 MiniとLlama 3.2 3Bで23〜38トークン/秒；iPad Air M4（12GB）は3B〜4Bを15〜20トークン/秒で実行するが7Bは7〜10トークン/秒に低下 — 依然リアルタイムチャットには低速すぎる。',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android：オンデバイス推論',
        content:
          '**Androidのオンデバイス推論は[Termux + Ollama](/ja/power-local-llm/best-local-llm-apps-android-2026)を使用します — TermuxはAndroidでOllamaをネイティブ実行するLinuxターミナルエミュレーターです。** iPadのアプリ体験より技術的ですが、完全なOllamaエコシステムへのアクセスが可能です。',
        numberedItems: [
          'F-DroidからTermuxをインストールします（Play Store版は不可 — 古く、必要なパッケージが不足しています）。',
          'Termuxで：`pkg update && pkg upgrade`',
          'TermuxのパッケージリポジトリからOllamaをインストール：`pkg install ollama`（Goでソースからビルドする古いガイドは、もう不要です）。',
          'モデルをプル：`ollama pull phi4-mini` または `ollama pull qwen3:1.7b`。',
          'サーバーを起動：`ollama serve`（このTermuxセッションを維持してください）。',
          'Termux経由でチャット：`ollama run phi4-mini` — またはブラウザを開いて`http://localhost:11434`にアクセスしてAPIを利用。GUIのためにローカルOllamaエンドポイントに接続するAndroidチャットアプリをインストール。',
        ],
        items: [
          '**Termuxより簡単な代替手段：** PocketPal AI（Google Play、無料、MIT；最終アップストリーム更新2026-10-19）とGoogle AI Edge Gallery（無料、Apache 2.0；最終アップストリーム更新2026-10-23）は、ターミナルなしでオンデバイスモデルを実行できます。特にOllamaが必要でない限り、まずこれらのどちらかから始めてください。[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review)を参照。',
          '**3B以上のモデルに対応するデバイス：** RAM 8GB最低限（Samsung Galaxy Tab S10+、OnePlus Pad 2、Xiaomi Pad 7 Pro）。6GBデバイスはQwen3 1.7Bのみ実行可能。',
          '**Pixel Tabletはオンデバイスに非推奨：** Pixel Tablet（2023年モデル、8GB Tensor G2）は推奨リストから除外 — Tensor G2はSnapdragon 8 Gen 3 / Dimensity 9300よりLLM推論が大幅に低速で、Phi-4 Miniで4〜7トークン/秒（会話型利用には低速すぎる）。Pixel Tabletユーザーはホームマシンへのリモート接続を使用してください。',
          '**Snapdragon 8 Gen 3とDimensity 9300**は2026年のオンデバイス推論で最速のAndroidチップです。生成速度：1.7Bモデルで約15〜25トークン/秒；3Bモデルで約8〜12トークン/秒。',
          '**モデルストレージ：** Androidは統合メモリを持たないため、ほとんどのTermux設定ではGPUアクセラレーションなしでシステムRAM上でモデルが実行されます。GPUアクセラレーションにはTermux:NVIDIAまたは特定のVulkanビルドが必要；セットアップがより複雑です。',
          '**代替アプリ：** MNN LLM（Alibaba製、無料、選択されたモデルのオンデバイス推論Androidアプリ）はセットアップが簡単ですが、Ollamaよりモデル選択が限定的です。AI RunnerとllamafileもさまざまなサポートのAndroidビルドがあります。LLM FarmにAndroid版は存在しません — iOS専用アプリであり、PocketPal AIが最も近いAndroidの代替手段です。',
          '**その他のブランド（Huawei MatePad、Xiaomi Pad、Galaxy Tab Aシリーズ）：** 決め手はブランドではなくRAMとチップです。設定でタブレットのRAMを確認してください：6GB未満なら1B〜1.7Bモデルにとどめるかリモート接続を使用；8GB以上ならモデル表の8GBの行に従ってください。',
          'ハードウェア互換性表付きの日本向けXperia設定ガイドについては、<a href="/ja/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">XperiaでローカルLLMを動かす方法</a>をご覧ください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Termux:Widgetアドオンをインストールし、「ollama serve」を実行するショートカットを作成してください — Termuxを手動で開かずにAndroidのホーム画面からOllamaサーバーを起動できます。Ollamaが起動したら、localhost:11434に接続するよう設定されたチャットアプリを開いてください。',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-ja.svg',
        imageCaption: 'AndroidオンデバイスAI：5ステップTermux + Ollamaセットアップ — F-DroidからTermuxをインストール（Play Store不可）、パッケージ更新、pkg install ollamaでOllamaインストール、モデルをプル（phi4-miniまたはqwen3:1.7b）、localhost:11434でサーバー起動。最低8GB RAM必要。',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'ホームマシンへのリモート接続',
        content:
          '**ほとんどのタブレットユーザーに最もシンプルなセットアップ：ホームのMacまたはPCでOllamaとOpen WebUIを実行し、同じWi-FiネットワークのタブレットブラウザからチャットUIにアクセスする方法です。** タブレットは自宅でOllamaを実行するより高性能なマシンのタッチスクリーンインターフェースになります — ホームマシン選択時のハードウェアサイジングには[ラップトップガイド](/ja/local-llms/best-laptops-local-llm)を参照してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OllamaとOpen WebUIを実行するホームマシンへのリモート接続により、どのタブレットでもブラウザ経由で70Bモデルへのフルアクセスが可能 — タブレットにモデル保存なし、アプリインストールなし、モデル品質への妥協なし。',
          },
          {
            type: 'plain-terms',
            text: 'MacまたはPCで：Ollamaをインストール、モデルをプル、Open WebUIをインストール（Docker一行コマンド）、ローカルネットワークIPにバインドして実行。タブレットで：SafariまたはChromeを開き、http://[Mac-IP]:3000 に移動すると、フルAIチャットインターフェースが使えます。モデルはMac上で実行；タブレットはチャットを表示するだけ。どのタブレット、OS、画面サイズでも機能します。',
          },
        ],
        numberedItems: [
          '**ホームマシン上で：** Ollamaをインストール（macOSでは`brew install ollama`、Windowsではollama.comからダウンロード）。モデルをプル：`ollama pull llama3.3:70b`（または任意のモデル）。ネットワークバインドでOllamaを起動：`OLLAMA_HOST=0.0.0.0:11434 ollama serve`。',
          '**Open WebUIをインストール**（最もタブレット向けのチャットUI）：`docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`。Open WebUIは`http://[マシンIP]:3000`でアクセス可能になります。',
          '**ホームマシンのローカルIPを確認：** macOSでは、システム設定 → ネットワーク → 現在のネットワーク → IPアドレス。Windowsでは、コマンドプロンプトで`ipconfig`を実行してIPv4アドレスを確認。IPをメモ（通常`192.168.x.x`）。',
          '**タブレット上で：** Safari（iPad）またはChrome（Android）を開く。`http://[マシンIP]:3000`に移動。Open WebUIでアカウントを作成（ローカルのみ、クラウドなし）。ドロップダウンからモデルを選択。チャット開始。',
          '**セキュリティ：** このセットアップはローカルネットワーク限定です。Open WebUI認証を追加せずにポート3000をインターネットに公開しないでください（組み込みの管理者アカウントシステムがあります）。接続はプレーンHTTP — 公共Wi-Fiで機密情報を送信しないでください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ホームマシンのOpen WebUI URLをタブレットのホーム画面にブックマーク追加してください（Safariでは：共有 → ホーム画面に追加；Chromeでは：三点メニュー → ホーム画面に追加）。ネイティブアプリのような感覚になります。iPadでは、SafariのフルスクリーンWebアプリはブラウザのクロームを隠し、アプリのような体験が得られます。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-ja.webp',
        imageCaption: 'タブレットからリモートAIを4ステップで設定：自宅PCにOllamaをインストール、モデル＋Open WebUIをダウンロード、自宅PCのIPアドレスを確認、タブレットブラウザでhttp://[IP]:3000を開く — タブレットにモデル不要、70Bモデルを20〜40トークン/秒で利用可能。',
      },
      models: {
        id: 'models',
        title: 'デバイス別モデル推奨',
        content:
          '**モデルの選択は好みではなく、利用可能なRAMによって決まります。** 以下の表は、デバイスのRAMをリアルタイム速度（8トークン/秒以上）で実行できる最大モデルにマッピングしています。モデル層について詳しくは[モバイルLLMモデルベスト2026](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)を参照。すべてのハードウェア層のモデル全体像は[ベストローカルLLM 2026](/ja/local-llms/best-local-llms-2026)を参照。',
        columns: ['デバイス / RAM', '推奨モデル', '速度', '最適な用途'],
        rows: [
          { 'デバイス / RAM': 'iPad Air M4（12GB）', '推奨モデル': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', '速度': '約18〜20トークン/秒', '最適な用途': '文章作成補助、要約' },
          { 'デバイス / RAM': 'iPad Air M3 / その他8GB iPad', '推奨モデル': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '速度': '約10〜18トークン/秒（概算）', '最適な用途': '軽い下書き、要約' },
          { 'デバイス / RAM': 'iPad Pro M5（12GB / 16GB）', '推奨モデル': 'Llama 3.2 3B / Gemma 3 4B Q4', '速度': '約32〜38 / 約20〜23トークン/秒', '最適な用途': '本格的LLMワークステーション、RAG、フィクション執筆' },
          { 'デバイス / RAM': 'Android 8GB（Tab S10+）', '推奨モデル': 'Phi-4 Mini Q4（Termux+Ollama）', '速度': '約10〜15トークン/秒', '最適な用途': 'Termuxに慣れたパワーユーザー' },
          { 'デバイス / RAM': 'Android 6GB', '推奨モデル': 'Qwen3 1.7B Q4', '速度': '約15〜20トークン/秒', '最適な用途': '軽いチャット、翻訳、シンプルなタスク' },
          { 'デバイス / RAM': 'Pixel Tablet（8GB）', '推奨モデル': 'リモート接続のみ', '速度': 'N/A', '最適な用途': 'Tensor G2はオンデバイスに低速すぎる' },
          { 'デバイス / RAM': 'iPad mini 7（A17 Pro、8GB）', '推奨モデル': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '速度': '未計測', '最適な用途': '軽い下書き、要約' },
          { 'デバイス / RAM': 'iPad A16（6GB）/ iPad 第10世代（4GB）', '推奨モデル': 'Qwen3 1.7B Q4以下', '速度': '未計測', '最適な用途': '短い質問。それ以上はリモート' },
          { 'デバイス / RAM': 'Galaxy Tab S11 Ultra（12GB / 16GB）', '推奨モデル': 'Gemma 4 E4B / Phi-4 Mini Q4', '速度': '未計測', '最適な用途': 'マルチタスク（16GB構成）' },
          { 'デバイス / RAM': 'リモート経由の全タブレット', '推奨モデル': 'ホームマシン上の任意モデル', '速度': '約20〜40トークン/秒', '最適な用途': '品質優先利用、70Bモデル' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ほとんどの日常タスク（文章草稿、質問回答、内容要約）では、タブレット上のPhi-4 Mini（3.8B）は十分に実用的です。70Bモデルと比較して劣る点：複雑な多段階推論、ニュアンスのある創作、長文書分析。これらのタスクには大型モデルを実行するホームマシンへのリモート接続を使用してください。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ja.webp',
        imageCaption: 'タブレット別おすすめモデル：iPad Pro M5（12GB / 16GB）はLlama 3.2 3Bで32〜38トークン/秒；iPad Air M4はPhi-4 Miniを18〜20トークン/秒で実行；Android 8GBはTermux経由で10〜15トークン/秒；Pixel TabletはTensor G2の低速のためリモート接続が必要。',
      },
      frontends: {
        id: 'frontends',
        title: 'タブレット向けローカルAIフロントエンド',
        content:
          '**タブレットで使用するチャットインターフェースは使いやすさに大きく影響します。** モバイル向けに設計されたものもあれば、デスクトップファーストでタブレットでは使いにくいものもあります。',
        items: [
          '**Open WebUI（ブラウザ）：** 一般的なチャットに最適なモバイル対応WebUI。SafariまたはChromeの任意のローカルIP:ポートで動作。タブレットのアスペクト比にきれいに適応。リモート接続セットアップに推奨。',
          '**PocketPal AI（iPad・Androidアプリ）：** 無料、オープンソース、GGUFモデルをインポートでき、ベンチマーク機能を内蔵。両プラットフォームで最も柔軟なオンデバイスオプション。',
          '**Locally AI（iPadアプリ）：** MLX上に構築されたAppleらしいすっきりしたインターフェース。iPadで技術に詳しくないユーザーにとって最もシンプルな初回体験。',
          '**Google AI Edge Gallery（iPad・Androidアプリ）：** GoogleのGemmaに特化したアプリ。Googleの小型モデルをオンデバイスで試す最も簡単な方法。',
          '**RisuAI（ブラウザ、モバイル対応）：** ロールプレイとキャラクターカードフィクションの最高モバイル体験。リモートOllamaインスタンスに接続可能。iPad Safariでアプリに近い品質のインターフェースで動作。',
          '**SillyTavern（ブラウザ）：** リモートOllamaインスタンスに接続したiPad Safariで動作。モバイル最適化されていないが機能的。一部の拡張機能はモバイルSafariで動作しません。',
          '**Termux CLI（Android）：** コマンドラインのみ。スクリプト化されたタスクに使えますが、コンパニオンアプリなしでの会話型利用には実用的でありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'iPadでのロールプレイとキャラクターカードフィクションには、Llama 3.3 70Bを実行するリモートOllamaインスタンスに接続したRisuAIが2026年における有力な組み合わせです。RisuAIのモバイルインターフェースはタッチ操作向けに設計されており、リモート接続によりタブレットに収まるどのモデルよりも大幅に優れたキャラクターボイスを生み出す70Bモデルにアクセスできます。',
          },
        ],
      },
      metiContext: {
        id: 'meti-context',
        title: '日本・東アジアユーザーのための活用ポイント',
        content:
          '日本のユーザーにとって、タブレットでのローカルAI実行には規制面での追加的な意義があります。**経済産業省（METI）は2024年のAIガバナンスガイドラインで、企業データを処理するAIシステムにおけるローカル推論アーキテクチャを推奨しています。** タブレット上またはホームマシンへのリモート接続でのローカル推論は、クラウドAPIへのデータ送信なしにこれらの要件を満たします。',
        items: [
          '**METI AIガバナンス2024：** 経済産業省のガイドラインは、機密性の高い業務データを扱うシステムにローカル推論を推奨します。iPad Pro M5やAndroidタブレットのローカルモデルは、顧客データを海外クラウドに送信せずに動作します。',
          '**東アジアのデータ主権：** 日本、マレーシア、シンガポール、韓国はデータローカリゼーション要件を強化しています。タブレットのローカル推論またはローカルネットワークリモート接続はデータを国境内に保持します。',
          '**エンタープライズセキュリティ：** 日本の企業セキュリティ標準（ISMS、ISO 27001）はデータ処理の文書化を求める場合があります。タブレット上または自社ネットワーク内で実行されるローカルモデルは、データの流れを説明しやすくなることがありますが、ISMSやISO 27001への適合を保証するものではありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'METI AIガバナンスへのコンプライアンスを検討している日本企業の場合：iPad Pro M5とOllamaを使ったローカル推論のプルーフオブコンセプトをCISO・法務部門とともに実施することをお勧めします。オープンソースライセンス（Meta、Alibaba）とローカルネットワークアーキテクチャにより、規制当局への文書化が簡素化されます。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある失敗',
        items: [
          '**App StoreでLLM Farmを探す。** Appleは2025年8月に削除しました。PocketPal AIまたはLocally AIを使うか、LLM Farmをソースからビルドしてください。',
          '**8GBタブレットで7Bモデルを実行する。** 毎秒5〜8トークンでは会話型利用には低速すぎます。8GBデバイスのオンデバイスチャットには3Bモデルを使用；7B以上の品質にはリモート接続を使用してください。',
          '**AndroidでPlay Store版Termuxを使用する。** Play Store版のTermuxは古く、Ollamaに必要なパッケージが不足しています。常にF-DroidからTermuxをインストールしてください。',
          '**認証なしにOpen WebUIをインターネットに公開する。** Open WebUIにはデフォルトでパスワードがありません。ホームネットワーク外に公開すると、URLを見つけた誰もがモデルにアクセスできます。管理者アカウントシステムを有効にしてファイアウォールを使用してください。',
          '**8GB iPad でオンデバイス前に他のアプリを閉じない。** iOSはバックグラウンドアプリのRAMを削除します。8GB iPadの3Bモデルは約3.5GBを使用；iOSが別のアプリのためにそのメモリを回収するとモデルがクラッシュします。推論前にすべての他のアプリを閉じてください。',
          '**モバイルブラウザでデスクトップ品質のUIを期待する。** SillyTavernなどはデスクトップファーストです。ブラウザでのモバイル体験は機能的ですが洗練されていません。モバイルファーストUXにはRisuAIまたはOpen WebUIを好んでください。',
          '**ブラウザに `ipad.local` と入力する。** Safariに入力するのは、自宅マシンのIPアドレスまたはホスト名です（例：`192.168.1.20:3000`、`my-mac.local:3000`）。タブレット自身の名前ではありません。`ipad.local` のような名前はタブレットを指し、Ollamaが動いているマシンを指しません。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'LLM Farm（iOS）ドキュメントとGitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [App Storeの掲載ページ](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'TermuxのOllamaパッケージ — [Termux](https://termux.dev)（TermuxはF-Droidからインストール）',
          'Termux向けOllama ARMビルド — [Ollamaドキュメント](https://ollama.com/docs)',
          'Open WebUIドキュメント — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M5チップのiPad Pro向け仕様、RAM容量、メモリ帯域幅 — [Apple Newsroom、2025年10月](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Apple M4チップのiPad Air向け仕様とRAM — [Apple Newsroom、2026年3月](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Gemma 4のモデル概要とメモリ要件 — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Samsung Galaxy Tab S11 Ultraのチップ・RAM構成 — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPadでAIを実行できますか？',
            a: 'はい、iPad Pro M5（ベース12GB / 1TB・2TBモデルは16GB）とiPad Air M4（12GB）で可能です。iPad Pro M5はPocketPal AIまたはLocally AIでPhi-4 MiniとLlama 3.2 3Bをリアルタイム速度で実行し、メモリ帯域幅の向上（153GB/s対120GB/s）により前世代のM4 iPad Proより約25〜30%高速です。iPad Air M4は3B〜4Bモデルを快適に実行します。iPadで7B以上のモデルには、Ollamaを実行するホームMacまたはPCへのリモート接続を推奨します — iPadはチャットを表示し、ホームマシンが推論を処理します。',
          },
          {
            q: 'iPadでOllamaは動作しますか？',
            a: 'いいえ — OllamaはサポートされているiPadOSビルドを持たないため、AndroidのTermuxのようにiPadへ直接インストールすることはできません。「iPadでOllamaを実行する」とは、MacまたはPCでOllamaを動かし、iPadのブラウザから（ホームマシンのローカルIPでOpen WebUI経由で）接続することを意味します — iPadは推論エンジンではなく表示端末です。iPadで真のオンデバイス推論を行うには、代わりにPocketPal AI（llama.cpp経由のGGUFモデル）やLocally AI（MLXモデル）などのオンデバイスアプリを使用してください。',
          },
          {
            q: 'AndroidタブレットでAIを実行できますか？',
            a: 'はい、PocketPal AIまたはTermux + Ollamaを使用してRAM 8GB以上のデバイスで可能です。Samsung Galaxy Tab S10+（RAM 12GB）はPhi-4 Miniを約10〜15トークン/秒で実行します。RAM 6GBデバイスはQwen3 1.7Bを実行できます。セットアップにはF-DroidからのTermuxといくつかのターミナルコマンドへの慣れが必要です。ほとんどのAndroidタブレットユーザーにはホームマシンへのリモート接続の方が簡単なルートです。',
          },
          {
            q: 'タブレットのオンデバイスAIはインターネットなしで動作しますか？',
            a: 'はい。モデルをダウンロードしてアプリをインストールすれば、iPadのオンデバイス推論（PocketPal AI、Locally AI）とAndroid（Termux + Ollama）はインターネット接続なしで動作します。これがリモート接続に対するオンデバイスの主な利点の一つです — リモート接続アプローチにはホームWi-Fiが必要です。',
          },
          {
            q: 'iPadに最適なAIアプリは何ですか？',
            a: 'オンデバイス推論には：PocketPal AI（オープンソース、任意のGGUFモデルをインポート可能）またはLocally AI（最もシンプルなUI、MLX）。LLM FarmはApp Storeではもう入手できません。ホームOllamaサーバーへのリモート接続には：Open WebUI in Safari（一般チャットに最適）、RisuAI in Safari（ロールプレイとキャラクターフィクションに最適）。最適な選択は、オンデバイス機能、オフライン利用、または最高のインターフェース品質が欲しいかどうかによって異なります。',
          },
          {
            q: 'AndroidでTermux + Ollamaを使うのは安全ですか？',
            a: 'はい。Termuxは何百万人もの開発者が使用する確立されたAndroidターミナルエミュレーターです。Termux内のOllamaはローカル専用APIを提供します（デフォルトでlocalhost:11434）— バインドアドレスを明示的に変更しない限り、ネットワーク上の他のデバイスからはアクセスできません。モデルファイルはTermuxのプライベートストレージに保存され、共有Androidストレージには保存されません。',
          },
          {
            q: 'タブレットでChatGPT品質のレスポンスをローカルで得られますか？',
            a: 'ほぼ、ただし適切なセットアップが必要です。フロンティアクラウドモデル級の品質には一般に70B以上のモデルが必要です。タブレット上では：iPad Pro M5（12GB / 16GB）は70Bモデルを実行できません — 3B〜8Bモデルのみ。リモート接続経由：ホームマシンに24GB GPU（RTX 4090）または64GB統合メモリ（Mac M5 Max）があればLlama 3.3 70Bを実行でき、タブレットはブラウザのOpen WebUI経由でその品質にアクセスできます。これがタブレットでクラウドAI品質に最も近い方法です。',
          },
          {
            q: 'ラップトップのカバーを閉じてもホームOllamaサーバーを動かし続けるには？',
            a: 'macOSの場合：カバーを閉じた時のスリープポリシーを設定：システム設定 → バッテリー → 「電源アダプタ接続時にPower Napを有効にする」を無効にし、Amphetamineなどのツールを使用して電源接続時のスリープを防ぐ。Windowsの場合：電源オプション → プラン設定の変更 → 電源接続時のスリープを「しない」に設定。または、プライマリラップトップではなく常時稼働マシン（ミニPC、NAS、または廃棄予定の古いラップトップ）でOllamaを実行する。',
          },
          {
            q: 'タブレットでAIを実行するとバッテリーが早く消耗しますか？',
            a: 'はい — オンデバイス推論はCPU/GPU集約的で、ブラウジングよりはるかに速くバッテリーを消耗します。消耗率はデバイスとモデルによって異なります。長時間使用する場合は、タブレットを充電しながら使用してください。ホームマシンへのリモート接続は、タブレットのバッテリー消費が大幅に少なくなります — タブレットはウェブページを表示するだけです。',
          },
          {
            q: 'AI推論中にタブレットはサーマルスロットリングしますか？',
            a: 'はい、特にiPad Air M4とアクティブ冷却のないAndroidタブレットでは。iPad Pro M5はiPad Airより熱的なヘッドルームが大きく、多くのAndroidタブレットは持続的な推論でより早くスロットリングします。緩和策：より短い生成チャンク（レスポンスあたり200〜400トークン）を使用、タブレットを硬い面に置く、同時に他のCPU集約型アプリを実行しない。',
          },
          {
            q: 'AIタブレット利用に最適なキーボードは何ですか？',
            a: 'iPad Pro M5用Apple Magic Keyboard（トラックパッド付き）が最も洗練されたセットアップです — Safari + Open WebUIでフルキーボードショートカットが動作し、トラックパッドで長いレスポンスのテキスト選択が可能。Logitech Combo Touchは予算代替品。Android：Termuxではどのbluetoothキーボードも動作しますが体験はより粗い（ターミナルのみ）。文章作業には、iPad Pro + Magic Keyboardがタブレットを執筆ファーストのAIワークステーションに変えます。',
          },
          {
            q: 'SillyTavernをiPadで実行できますか？',
            a: 'はい、リモート接続経由で可能です。SillyTavernはホームのMacまたはPCで動作し、iPad Safariがローカルipで接続します。モバイルUIは機能的ですが洗練されてはいません — 一部の拡張機能（正規表現ツール、グループチャットパネル）は動作しますが窮屈に感じます。ロールプレイに限れば、RisuAIの方がSillyTavernよりモバイルUIが優れています。どちらもホームマシン上の同じOllamaバックエンドに接続できます。',
          },
          {
            q: 'タブレットで長文RAGを処理できますか？',
            a: 'オンデバイスでは無理です — タブレットで1,000件以上のドキュメントを埋め込むのは非現実的です。リモート接続なら可能です — RAGパイプラインはホームマシンが処理し、タブレットはチャットインターフェースを表示します。ホームマシンで動作するAnythingLLMにタブレットのブラウザからアクセスすれば、タブレット側の制限なしにあらゆる規模のドキュメントコレクションを扱えます。タブレットでRAGを使いたい学生や知識労働者には、リモート接続の方が通常は実用的な選択肢です。',
          },
          {
            q: 'タブレットAIで外部ディスプレイを使えますか？',
            a: 'iPad Pro M5では可能です（Stage Manager＋外部ディスプレイでマルチウィンドウ環境になり、外部モニターにOpen WebUI、iPad画面にメモや資料を表示）。Galaxy Tab S10 UltraはDeXモードで外部ディスプレイに対応し、同様のマルチモニターAIワークフローが可能です。DeXモードのないAndroidタブレットは画面をミラーリングするだけで、有用性は低くなります。iPad Pro＋外部モニター＋Magic Keyboardは、2026年にタブレットが本格的なAIワークステーションに最も近づく構成です。',
          },
          {
            q: 'ローカルAIはスマートフォンよりタブレットの方が優れていますか？',
            a: '入力中心の用途（下書き、RAG、長い会話）では、はい — キーボード対応と画面サイズが重要です。素早いチャット、音声クエリ、外出先での利用には、普段持ち歩いているスマートフォンの方が適しています。iPad Pro M5は、ローカルAIでフラッグシップスマートフォンを上回る可能性が最も高いタブレットで、ミッドレンジのタブレットとスマートフォンはほぼ同等です。ほとんどの読者は、ローカルAIのためだけにタブレットを買うべきではありません — 他の理由でタブレットが欲しい場合に購入し、AI機能はおまけと考えてください。',
          },
          {
            q: 'タブレットでローカルAIが遅いのはなぜですか？',
            a: '原因は通常、次の4つのいずれかです：モデルが空きRAMに対して大きすぎる（システムがスワップするかアプリを終了する）、生成速度がチップの速度ではなくメモリ帯域幅に制限されている、タブレットがサーマルスロットリングしている、またはバックグラウンドアプリがメモリを使っている。対処法：より小さなモデルまたはQ4量子化に切り替える、他のアプリを閉じる、タブレットを冷やして充電したままにする、PocketPal AIの内蔵ベンチマークで実際の速度を測る。3Bモデルでも遅すぎる場合は、ホームマシンへのリモート接続を使用してください。',
          },
          {
            q: 'ローカルLLMを実行できるタブレットは？（iPad Air M3、エントリーモデルのiPad、Galaxy Tab A、Huawei MatePad、Xiaomi Pad）',
            a: '決め手はブランドではなくRAMとチップです。iPad Air M3（8GB）は1B〜3Bモデルを扱えます。エントリーモデルのiPadやRAM 6GB未満の低価格Androidタブレットは1B〜1.7Bモデルしか収まらないため、リモート接続の方が適しています。RAM 8GB以上のHuawei MatePadとXiaomi Padは、アプリストアでの提供状況次第で、他のAndroidタブレットと同じアプリを実行できます。タブレットの設定でRAMを確認し、上のモデル表に従ってください。',
          },
          {
            q: 'iPad用のOllamaアプリはありますか？',
            a: 'iPadOS向けの公式Ollamaアプリはありません。MacまたはPC上のOllamaサーバーに接続するサードパーティ製のiPadクライアントは存在し — 例えば[GetOAI](https://apps.apple.com/app/id6752573799)や[LLLM](https://apps.apple.com/app/id6749804212) — ただしチャットを表示するだけで、モデルは引き続きホームマシンで動作します。インストール前に各App Storeの掲載内容を確認してください。ブラウザ経由（SafariでOpen WebUI）ならアプリは一切不要です。',
          },
          {
            q: 'ターミナルなしでAndroidタブレットでローカルLLMを実行できますか？',
            a: 'はい。PocketPal AI（無料、オープンソース、Google Play）とGoogle AI Edge Gallery（無料、Apache 2.0）は、Termuxなしでモデルをオンデバイスでダウンロード・実行します。Termux + Ollamaが必要なのは、Ollamaのエコシステムやローカルapiエンドポイントを特に使いたい場合だけです。',
          },
          {
            q: 'iPad 第9・第10・第11世代、iPad mini、iPad Air 5などの旧型・エントリーモデルでローカルLLMは動きますか？',
            a: 'RAM容量で決まります。iPad 第9世代（3GB）・第10世代（4GB）とiPad mini 6（4GB）は、端末内チャットには容量が足りません。リモート接続をお使いください。iPad 第11世代（A16、6GB）は、Q4の1B〜1.7Bモデルまで扱えます。iPad mini 7（A17 Pro、8GB）、iPad Air 5、iPad Air M3（8GB）は、前述の8GBの制約の範囲でQ4の3Bモデルを扱えます。AppleはこれらのモデルのRAMを一律には公表していません。数値は広く報じられているもので、Apple公式の確認値ではありません。',
          },
          {
            q: 'Galaxy Tab S11 UltraやGalaxy Tab S9 FEでローカルLLMは動きますか？',
            a: 'Galaxy Tab S11 Ultra（Dimensity 9400+、構成により12GBまたは16GB）は8GBの目安を上回り、Tab S10+と同じアプリ（PocketPal AI、Google AI Edge Gallery、Termux + Ollama）が使えます。3B〜4Bモデルには、より余裕があります。Galaxy Tab S9 FEには6GBと8GBの構成があります。6GB版はQwen3 1.7Bまで、8GB版はモデル表の8GBの行に従ってください。Exynos 1380はミドルレンジのチップのため、フラッグシップのタブレットより速度は落ちる見込みです。',
          },
          {
            q: 'Gemma 4はタブレットで動きますか？',
            a: 'はい、小型のGemma 4が動きます。GoogleはGemma 4のE2BとE4Bを端末内実行向けのサイズとしており、4ビット量子化ではウェイト用のメモリとして約2.9GB（E2B）と約4.5GB（E4B）を示しています。8GBのタブレットにはE2B、12GB以上にはE4Bが向いています。iPadとAndroidで動かすアプリはGoogle AI Edge Galleryです（[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review)を参照）。PromptQuorumはGemma 4のタブレットでの速度を計測していません。',
          },
          {
            q: 'iPadで無料で使えるローカルLLMアプリはどれですか？',
            a: 'PocketPal AI（無料、MIT）、Google AI Edge Gallery（無料、Apache 2.0）、Locally AI（無料、有料オプションあり）は、無料で端末内実行ができます。MacやPCのOllamaにSafariのOpen WebUIでつなぐ方法も無料です。LLM Farmも無料ですが、ソースからのビルドが必要です。',
          },
          {
            q: 'LLM Farmは今でもiPadにインストールできますか？',
            a: 'App Storeからはできません。AppleはLLM Farmを2025年8月に削除し、プロジェクトのREADMEもApp StoreとTestFlightの両方を一時的に利用不可としています。方法は、Xcodeで[ソース](https://github.com/guinmoon/LLMFarm)からビルドすることだけです。最終アップストリーム更新は2026年1月30日のため、保守が止まっている可能性があります。iPadでインストールできる代替は、PocketPal AIとLocally AIです。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 上記でタブレットのオンデバイス利用に推奨した、無料のオープンソースiOS・Androidアプリ。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iPadとiPhone向けのMLXベースのオンデバイスチャット。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — iOS・Android向けのGoogleのオンデバイスGemmaアプリ。',
          '[LLM Farmレビュー](/ja/power-local-llm/llm-farm-review) — アプリがApp Storeから消えた理由とソースからのビルドの内容。',
          '[iPhone向けベストローカルLLMアプリ2026](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone特化のアプリ選択とセットアップのガイド。',
          '[Android向けベストローカルLLMアプリ2026](/ja/power-local-llm/best-local-llm-apps-android-2026) — Termux + Ollama以外のAndroidアプリ選択ガイド。',
          '[2026年ベストモバイルLLMモデル：Phi-4 Mini vs Gemma 3 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — タスク別モバイルモデル選択のコンパニオンガイド。',
          '[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline) — オフラインモバイル音声アシスタントのビルドガイド。',
          '[Windows・Mac・Linuxで最も簡単なローカルAIアプリ](/ja/power-local-llm/easiest-local-ai-app-windows-mac-linux) — MacまたはPCでローカルAIをセットアップするユーザー向けデスクトップ版。',
          '[ローエンドPCに最適なローカルAIアプリ](/ja/power-local-llm/best-local-ai-app-low-end-pc) — RAMが限られたリソース制約デバイスへの推奨。',
          '[非技術ユーザー向けベストローカルAIアプリ](/ja/power-local-llm/local-ai-app-non-technical-users) — オンボーディングと使いやすさに焦点を当てたUX比較。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — タブレットでのキャラクターカードロールプレイ向けモバイルUI比較。',
          '[LM Studio vs Jan vs GPT4All：完全比較](/ja/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — タブレットガイドを補完するデスクトップアプリ比較。',
          '[MCPを使ったローカルAIエージェント2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — タブレットをホームマシンのMCP対応ローカルエージェントセットアップに接続。',
          '[ローカルLLMに最適なラップトップ](/ja/local-llms/best-laptops-local-llm) — リモート接続経由でタブレットと連携するホームマシンのハードウェアサイジングガイド。',
          '[2026年ベストローカルLLM](/ja/local-llms/best-local-llms-2026) — モバイル以外を含む全ハードウェア層にわたる広範なモデル全体像。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'タブレットでAIをローカル実行：iPad Pro M5・Galaxy Tab S10・OnePlus Pad 2（2026年版）',
      description:
        'iPadやAndroidタブレットでローカルLLMを実行：オンデバイスアプリ（PocketPal AI、Locally AI）、Termux + Ollama、iPadでOllamaを使うにはリモート接続が必要な理由を解説。',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=ja`,
      url: 'https://www.promptquorum.com/ja/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'ja',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      author: { '@type': 'Organization', 'name': 'PromptQuorum' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        '2026年のタブレットでのローカルAI実行。オンデバイス推論とホームマシンへのリモート接続を解説します。',
      keywords: [
        'iPad ローカルAI',
        'Android タブレット ローカルLLM',
        'Ollama iPad',
        'Termux Ollama',
        'PocketPal AI',
        'Locally AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'ローカルAI推論のためのiPad設定方法',
        'AndroidでTermuxとOllamaを使う方法',
        'タブレットからリモートOllamaに接続する方法',
        'タブレットハードウェアに基づくモデル選択',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Google AI Edge Gallery' },
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      about: [
        { '@type': 'Thing', 'name': 'ローカルAI推論' },
        { '@type': 'Thing', 'name': 'タブレットLLM' },
        { '@type': 'Thing', 'name': 'iPad AIアプリ' },
        { '@type': 'Thing', 'name': 'AndroidタブレットAI推論' },
      ],
      'proficiencyLevel': 'Beginner',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: '在平板上本地运行AI：iPad Pro M5、Galaxy Tab S10、OnePlus Pad 2（2026）',
    seoTitle: '在iPad和安卓平板上本地运行AI 2026',
    intro:
      '2026年，在高端iPad和内存8 GB以上的安卓设备上本地运行AI已切实可行。本指南涵盖所有方案：iPad上使用PocketPal AI、Locally AI和Google AI Edge Gallery进行本地推理（LLM Farm已无法从App Store安装）、安卓上使用PocketPal AI和Termux + Ollama，以及针对无法本地推理设备的远程连接方案（通过局域网Wi-Fi将平板连接到运行Ollama的Mac或PC），并说明Ollama能否直接在iPad上运行（不能：iPadOS没有受支持的Ollama版本）。',
    metaDescription:
      'Ollama 无法在 iPad 上原生运行，但本地大模型可以：设备端用 PocketPal AI 或 Locally AI，安卓用 Termux，或通过 Wi-Fi 连接 Mac 上的 Ollama。',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-zh.webp',
    twitterDescription:
      '2026年在iPad或安卓平板上运行AI：本地推理应用（PocketPal AI、Locally AI、Google AI Edge Gallery）、Termux + Ollama、远程连接家用Mac/PC运行Ollama，以及各设备型号推荐。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      '希望在iPad或安卓设备上本地运行AI或连接家用LLM的平板用户——无需依赖云端AI服务。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '平板本地运行AI',
    targetKeywords: [
      '在iPad本地运行AI',
      '安卓平板本地运行LLM',
      'Ollama iPad远程连接',
      'Termux Ollama安卓',
      'PocketPal AI iPad',
      'Locally AI iPad',
    ],
    leadAnswerBlock:
      '**在平板上本地运行AI有两种截然不同的模式：本地推理（模型直接在平板芯片上运行）和远程连接（平板作为家用Mac或PC运行Ollama的显示终端）。本地推理在iPad Pro M5（基础存储版12 GB，1 TB/2 TB版16 GB，可比上一代M4更从容地实时运行Phi-4 Mini和Llama 3.2 3B）、iPad Air M4（12 GB，可流畅运行3B至4B模型）以及8 GB以上RAM的高端安卓设备（Samsung Galaxy Tab S10+，通过PocketPal AI或Termux + Ollama）上切实可行。通过Open WebUI或简单聊天界面经局域网IP远程连接，适用于任何平板、任何内存、任何系统——将平板变成连接家用高性能机器的触控终端。对大多数用户而言，远程连接是更优选择：家用机器运行70B模型，平板提供便捷界面。**',
    quickAnswerTop: {
      zh: {
        question: '可以在iPad或安卓平板上运行本地AI模型吗？',
        answer:
          '可以，但需要高端设备。iPad Pro M5（基础存储版12 GB，1 TB/2 TB版16 GB）使用PocketPal AI或Locally AI可比上一代M4更从容地实时运行Phi-4 Mini（3.8B）和Llama 3.2 3B。iPad Air M4（12 GB）可流畅运行3B至4B模型。8 GB以上RAM的安卓平板（Samsung Galaxy Tab S10+）通过PocketPal AI或Termux + Ollama可本地运行Phi-4 Mini和Qwen3 1.7B。Ollama本身不支持在iPadOS上原生运行——特别需要Ollama的用户须远程连接到Mac或PC。内存较小或芯片较旧的平板，实用替代方案是远程连接：通过平板浏览器中的Open WebUI连接家庭网络中运行Ollama的Mac或PC。',
        bullets: [
          'iPad Pro M5（12 GB / 16 GB）——使用PocketPal AI或Locally AI可实时本地运行Phi-4 Mini和Llama 3.2 3B，得益于更高的内存带宽，速度快于上一代M4。',
          'iPad Air M4（12 GB）——3B至4B模型运行速度可用；7B模型较慢但可运行。',
          '安卓平板（8 GB以上RAM）——PocketPal AI（无需终端）或Termux + Ollama可本地运行Phi-4 Mini和Qwen3 1.7B。',
          'Ollama本身没有原生iPadOS版本——"在iPad上运行Ollama"意味着远程连接运行Ollama的Mac或PC，而非将其安装在iPad上。',
          '远程连接——任意平板、任意内存：通过浏览器Open WebUI连接运行Ollama的家用Mac或PC。',
          '大多数平板最佳本地模型：Phi-4 Mini（3.8B，约2.7 GB）；内存受限设备选Qwen3 1.7B。',
          '7B以上模型推荐远程连接而非本地推理——家用机器运行速度远超任何平板。',
          'SillyTavern和RisuAI均有移动端响应式界面，支持iPad Safari / 安卓Chrome。',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '两种模式：本地推理 vs 远程连接', anchor: '#two-modes' },
      { label: 'iPad：本地推理', anchor: '#ipad-on-device' },
      { label: '安卓：本地推理', anchor: '#android-on-device' },
      { label: '远程连接到家用机器', anchor: '#remote-connection' },
      { label: '各设备型号推荐', anchor: '#models' },
      { label: '平板AI前端界面', anchor: '#frontends' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地推理在iPad Pro M5（12 GB / 16 GB）、iPad Air M4（12 GB）和高端安卓设备（8 GB以上）上切实可行。** 低于此配置，生成速度过慢无法实时使用。对大多数平板用户，远程连接到家用机器是更优选择。',
          '**远程连接是大多数用户的推荐方案。** 将任意平板（任意内存、任意系统）连接到家庭网络中运行Ollama的Mac或PC。家用机器运行70B模型，平板获得触控友好的聊天界面，无需在平板上下载模型。',
          '**PocketPal AI、Locally AI和Google AI Edge Gallery是目前iPad上的本地推理选项。** PocketPal AI导入GGUF模型，Locally AI运行专为Apple Silicon打造的MLX模型，Google AI Edge Gallery运行Google的Gemma模型。LLM Farm已于2025年8月从App Store下架，最近一次更新为2026-01-30——只能视为需自行从源码构建的选项。',
          '**PocketPal AI是最简便的安卓方案；Termux + Ollama则更灵活。** PocketPal AI是Google Play应用，无需终端操作。Termux + Ollama需要具备终端操作基础，但在8 GB以上RAM的设备上可使用完整的Ollama生态系统，通过localhost:11434提供模型服务。',
          '**大多数平板最佳本地模型：Phi-4 Mini（3.8B）。** 可在6 GB以上可用RAM的设备上运行，满足大多数日常任务需求，快速网络下5至10分钟即可下载完成。',
          '**Open WebUI是最简便的远程连接界面。** 家用Mac或PC在192.168.x.x:3000运行Open WebUI后，在平板浏览器中打开该地址即可——无需安装应用，无需配置，完整聊天界面立即可用。',
          '**SillyTavern有移动端响应式界面。** 在平板上进行角色扮演和角色卡创作，通过平板浏览器访问家用机器上运行的SillyTavern效果很好；RisuAI原生移动端支持最佳。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**iPad应用：** PocketPal AI（免费，MIT）、Locally AI（免费+付费选项，MLX）、Google AI Edge Gallery（免费，Apache 2.0）。LLM Farm（免费，MIT，仅iOS）已于2025年8月从App Store下架，现在只能从源码构建。',
          '**安卓方案：** PocketPal AI或Google AI Edge Gallery（应用，无需终端），或Termux + Ollama（命令行）。',
          '**远程连接：** 任意平板浏览器 → 家用机器局域网IP上的Open WebUI或简单聊天界面。由于Ollama没有原生iPadOS版本，iPad用户也是通过这种方式运行Ollama。',
          '**本地推理最低配置：** 3B至4B模型需iPad Air M4（12 GB）；7B至8B模型需iPad Pro M5（12 GB / 16 GB）。',
          '**安卓本地推理最低配置：** 8 GB RAM（Samsung Galaxy Tab S10+、OnePlus Pad 2）。',
          '**最佳本地模型：** 大多数平板选Phi-4 Mini（3.8B，2.7 GB）；内存极度受限选Qwen3 1.7B。',
          '**远程连接速度：** 取决于Wi-Fi质量和家用机器的生成速度，与平板硬件无关。',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: '两种模式：本地推理 vs 远程连接',
        content:
          '**最重要的决策不是选哪款应用——而是在平板上本地推理还是连接家用更强大的机器。** 两种模式有截然不同的硬件要求和能力上限。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在平板上运行AI有两种实用模式：本地推理（模型在平板芯片上运行，限于3B至7B模型）或远程连接（平板作为浏览器显示终端，连接家用Mac或PC通过Ollama和Open WebUI运行更大模型）。',
          },
          {
            type: 'plain-terms',
            text: '本地模式：模型存储在平板上，离线可用。受限于小型模型（3B，高端iPad Pro最多7B），速度慢于云端AI。远程模式：家用Mac或PC运行Ollama和70B模型，平板仅在浏览器中显示聊天——平板屏幕可获得完整70B模型质量，平板无需存储模型，但家用机器需开机且连接同一Wi-Fi。除非特别需要离线使用，否则选择远程连接。',
          },
        ],
        columns: ['对比项', '本地推理', '远程连接'],
        rows: [
          { '对比项': '模型规模上限', '本地推理': '3B至8B（iPad Pro M5）；大多数平板3B至4B', '远程连接': '无限制——家用机器可运行任意模型' },
          { '对比项': '离线使用', '本地推理': '支持——无需Wi-Fi', '远程连接': '不支持——需要家庭Wi-Fi' },
          { '对比项': '生成速度', '本地推理': '中等（iPad Pro M5约12至30词元/秒）', '远程连接': '取决于家用机器（最高40+词元/秒）' },
          { '对比项': '平板存储占用', '本地推理': '每个模型2至10 GB', '远程连接': '零——模型存储在家用机器上' },
          { '对比项': '设置复杂度', '本地推理': '低（下载应用+模型文件）', '远程连接': '低至中（家用机器需安装Ollama + Open WebUI）' },
          { '对比项': '适合场景', '本地推理': '出行、离线使用、3B模型任务', '远程连接': '质量优先、70B模型、日常便捷使用' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果家中已有能运行Ollama的Mac或PC，先从远程连接开始。无需在平板上存储模型文件，立即获得更好的模型质量。如果之后发现需要离线使用，再考虑添加本地推理能力。',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-zh.svg',
        imageCaption: '两种平板AI模式：本地推理（模型在平板芯片上运行，离线可用，受限3B至8B）vs远程连接（平板浏览器连接运行Ollama的家用Mac/PC，平板无需存储模型，模型规模无限制）。',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad：本地推理',
        content:
          '**iPad Pro M5是最适合运行7B至8B模型的iPad。** 苹果将M5 iPad Pro基础内存提升至12 GB（1 TB/2 TB存储版为16 GB），高于上一代M4基础版的8 GB，内存带宽也从120 GB/s提升至153 GB/s——由于Apple Silicon上的LLM推理受内存带宽制约，这直接转化为更快的生成速度。iPad Air M4（12 GB，高于M3 Air的8 GB）现在可以流畅运行3B至4B模型，而不仅仅是勉强运行。iPad Air M3（8 GB）和其他8 GB iPad仅限于Q4量化的1B至3B模型。[配备8 GB RAM的iPhone也可通过LLM Farm运行小型模型](/zh/power-local-llm/best-local-llm-apps-iphone-2026)。',
        items: [
          '**PocketPal AI**（免费，开源MIT，iOS + 安卓）：通过llama.cpp运行GGUF模型，可在应用内从Hugging Face下载模型或导入文件，并内置基准测试，方便您测量自己平板的每秒词元数。最近一次上游更新：2026-10-19。参见[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)。',
          '**Locally AI**（免费含付费选项，闭源，iPhone/iPad/Mac）：通过苹果的MLX框架运行开源模型，专为Apple Silicon打造。最近一次App Store更新：2026-10-15。参见[Locally AI评测](/zh/power-local-llm/locally-ai-review)。',
          '**Google AI Edge Gallery**（免费，Apache 2.0，iOS + 安卓）：Google面向Gemma模型的本地推理应用，基于LiteRT-LM运行时。最近一次上游更新：2026-10-23。参见[Google AI Edge Gallery评测](/zh/power-local-llm/google-ai-edge-gallery-review)。它还能运行 Gemma 4（E2B 和 E4B），即谷歌目前的小尺寸设备端模型。',
          '**LLM Farm**（免费，MIT，仅iOS）：苹果于2025年8月下架了其App Store页面，项目README也将App Store和TestFlight均列为"暂时不可用"——唯一途径是在Xcode中从[源码](https://github.com/guinmoon/LLMFarm)构建。最近一次上游更新：2026-01-30，距今已超过180天，可能已无人维护；依赖前请先查看代码仓库。参见[LLM Farm评测](/zh/power-local-llm/llm-farm-review)。',
          '**导入模型：** 在PocketPal AI中，可在应用内从Hugging Face下载GGUF模型，或导入通过苹果文件应用传输的GGUF文件。模型存储在应用本地存储中——不使用iCloud。',
          '**iPad内存管理：** iOS会主动管理后台应用内存。在12 GB iPad上运行7B模型前关闭所有其他应用——iOS可能会在其他应用需要内存时清除模型。在16 GB iPad Pro M5（1 TB/2 TB版）上此问题很少出现。',
          '**生成速度估算（近似值，并非PromptQuorum基准测试——请使用PocketPal AI内置基准测试测量您自己的设备）：** iPad Pro M5（12 GB / 16 GB）：Phi-4 Mini约25词元/秒，Llama 3.2 3B约38词元/秒，Gemma 3 4B约23词元/秒——较上一代M4快约25%至30%，与内存带宽提升幅度一致。iPad Air M4（12 GB）：3B至4B模型约15至20词元/秒；7B模型约7至10词元/秒（实时对话速度仍偏慢）。',
          '**入门级iPad和RAM不超过8 GB的iPad：** 使用Q4量化的1B至3B模型，或将iPad仅作为远程连接的显示终端。如果模型放不进可用内存，iPadOS会直接关闭应用，而不是平稳降速。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要在12 GB iPad Air上运行7B模型进行实时对话。每秒7至10词元意味着每个回复仍需10至20秒。此速度勉强可用于摘要任务，但对话体验较差。iPad Air请使用3B至4B模型；7B以上质量需升级至16 GB iPad Pro M5或切换至远程连接。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-zh.svg',
        imageCaption: 'iPad本地推理速度：iPad Pro M5（12 GB / 16 GB）在Phi-4 Mini和Llama 3.2 3B上达到23至38词元/秒；iPad Air M4（12 GB）以15至20词元/秒运行3B至4B模型，但7B模型降至7至10词元/秒——实时对话速度仍偏慢。',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: '安卓：本地推理',
        content:
          '**安卓本地推理使用[Termux + Ollama](/zh/power-local-llm/best-local-llm-apps-android-2026)——Termux是在安卓上原生运行Ollama的Linux终端模拟器。** 比iPad应用体验更需技术基础，但可访问完整的Ollama生态系统。',
        numberedItems: [
          '从F-Droid安装Termux（不要使用Play Store版本——Play Store版本已过时，缺少所需软件包）。',
          '在Termux中执行：`pkg update && pkg upgrade`',
          '从Termux软件包仓库安装Ollama：`pkg install ollama`（旧教程使用Go从源码构建Ollama，现在已不再需要）。',
          '拉取模型：`ollama pull phi4-mini` 或 `ollama pull qwen3:1.7b`。',
          '启动服务：`ollama serve`（在Termux会话中保持运行）。',
          '通过Termux对话：`ollama run phi4-mini`——或打开浏览器访问`http://localhost:11434`获取API。安装支持本地Ollama端点的安卓聊天应用可获得图形界面。',
        ],
        items: [
          '**比Termux更简单的替代方案：** PocketPal AI（Google Play，免费，MIT；最近一次上游更新2026-10-19）和Google AI Edge Gallery（免费，Apache 2.0；最近一次上游更新2026-10-23）无需终端即可运行本地模型。除非特别需要Ollama，否则建议先从它们入手。参见[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)。',
          '**支持3B以上模型的设备：** 最少需要8 GB RAM（Samsung Galaxy Tab S10+、OnePlus Pad 2、小米Pad 7 Pro）。6 GB设备只能运行Qwen3 1.7B。',
          '**不推荐Pixel Tablet本地推理：** Pixel Tablet（2023款，8 GB Tensor G2）被排除在推荐本地推理设备之外——Tensor G2在LLM推理方面明显慢于骁龙8 Gen 3 / 天玑9300，Phi-4 Mini只能达到4至7词元/秒（对话速度过慢）。Pixel Tablet用户应使用远程连接到家用机器。',
          '**骁龙8 Gen 3和天玑9300**是2026年安卓本地推理最快的芯片。生成速度：1.7B模型约15至25词元/秒；3B模型约8至12词元/秒。',
          '**模型存储：** 安卓没有统一内存——大多数Termux配置下模型在系统RAM中运行，无GPU加速。GPU加速需要Termux:NVIDIA或特定Vulkan构建版本，设置更复杂。',
          '**替代应用：** MNN LLM（阿里巴巴，免费，安卓应用，支持精选模型的本地推理）设置更简便，但模型选择比Ollama有限。AI Runner和llamafile也有支持程度不同的安卓版本。LLM Farm没有安卓版本——它仅为iOS应用；PocketPal AI是最接近的安卓替代方案。',
          '**其他品牌（华为MatePad、小米Pad、Galaxy Tab A系列）：** 决定因素是内存和芯片，而非品牌。请在设置中查看平板的内存：低于6 GB时，请坚持使用1B至1.7B模型或改用远程连接；8 GB或以上时，请参照模型表中8 GB一行。',
          '有关日本专用Xperia硬件兼容性表格和设置指南，请参阅<a href="/zh/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">在日本Xperia手机上运行本地LLM的方法</a>。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '安装Termux:Widget插件，创建一个运行"ollama serve"的快捷方式——这样无需打开Termux就能从安卓主屏幕启动Ollama服务。Ollama启动后，打开配置连接localhost:11434的任意聊天应用即可。',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-zh.svg',
        imageCaption: '安卓本地AI：5步Termux + Ollama安装——从F-Droid安装Termux（非Play Store），更新软件包，通过pkg install ollama安装Ollama，下载模型（phi4-mini或qwen3:1.7b），在localhost:11434启动服务器。最低需要8 GB内存。',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: '远程连接到家用机器',
        content:
          '**大多数平板用户最简便的设置：在家用Mac或PC上运行Ollama和Open WebUI，然后通过同一Wi-Fi网络在平板浏览器中访问聊天界面。** 平板成为操控家用Ollama机器的触控界面——如果需要选购家用机器，参见[笔记本电脑指南](/zh/local-llms/best-laptops-local-llm)了解硬件配置建议。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '远程连接到运行Ollama和Open WebUI的家用机器，任意平板均可通过浏览器访问70B模型——平板无需存储模型，无需安装应用，模型质量不打折扣。',
          },
          {
            type: 'plain-terms',
            text: '在Mac或PC上：安装Ollama，拉取模型，安装Open WebUI（Docker一行命令），绑定到局域网IP运行。在平板上：打开Safari或Chrome，访问http://[您的Mac IP]:3000，获得完整的AI聊天界面。模型在Mac上运行，平板只显示聊天。适用于任何平板、任何系统、任何屏幕尺寸。',
          },
        ],
        numberedItems: [
          '**在家用机器上：** 安装Ollama（macOS执行`brew install ollama`，Windows从ollama.com下载）。拉取模型：`ollama pull llama3.3:70b`（或任意模型）。绑定网络启动Ollama：`OLLAMA_HOST=0.0.0.0:11434 ollama serve`。',
          '**安装Open WebUI**（最适合平板的聊天界面）：`docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`。Open WebUI现在可通过`http://[您的机器IP]:3000`访问。',
          '**查找家用机器的局域网IP：** macOS：系统设置 → 网络 → 当前网络 → IP地址。Windows：命令提示符运行`ipconfig`，查找IPv4地址。记录IP（通常为`192.168.x.x`）。',
          '**在平板上：** 打开Safari（iPad）或Chrome（安卓）。访问`http://[您的机器IP]:3000`。在Open WebUI中创建账号（仅限本地，无云端）。从下拉菜单选择模型。开始对话。',
          '**安全注意：** 此设置仅限局域网访问。不要在未添加Open WebUI身份验证的情况下将端口3000暴露至公网（内置管理员账号系统）。连接为普通HTTP——不要在公共Wi-Fi上发送敏感信息。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '将家用机器的Open WebUI网址收藏到平板主屏幕（Safari：分享 → 添加到主屏幕；Chrome：三点菜单 → 添加到主屏幕）。这样使用体验接近原生应用。在iPad上，Safari中的全屏Web应用会隐藏浏览器地址栏，带来类应用体验。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-zh.webp',
        imageCaption: '平板远程AI 4步设置：在家用电脑安装Ollama，下载模型和Open WebUI，查找家用电脑IP地址，在平板浏览器中打开http://[IP]:3000——平板无需存储模型，可使用70B模型，速度约20至40词元/秒。',
      },
      models: {
        id: 'models',
        title: '各设备型号推荐',
        content:
          '**模型选择由可用内存决定——而非偏好。** 下表将设备内存映射到以实时速度（每秒8词元以上）运行的最大模型。具体模型层面参见[2026年最佳移动LLM模型](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm)。全硬件层级的更广泛模型概览参见[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026)。',
        columns: ['设备 / 内存', '推荐模型', '生成速度', '适合场景'],
        rows: [
          { '设备 / 内存': 'iPad Air M4（12 GB）', '推荐模型': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', '生成速度': '约18至20词元/秒', '适合场景': '写作辅助、内容摘要' },
          { '设备 / 内存': 'iPad Air M3 / 其他8 GB iPad', '推荐模型': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '生成速度': '约10至18词元/秒（估算）', '适合场景': '轻量起草、摘要' },
          { '设备 / 内存': 'iPad Pro M5（12 GB / 16 GB）', '推荐模型': 'Llama 3.2 3B / Gemma 3 4B Q4', '生成速度': '约32至38 / 20至23词元/秒', '适合场景': '真正的LLM工作站、RAG、创意写作' },
          { '设备 / 内存': '安卓8 GB（Tab S10+）', '推荐模型': '通过Termux+Ollama运行Phi-4 Mini Q4', '生成速度': '约10至15词元/秒', '适合场景': '熟悉Termux的高级用户' },
          { '设备 / 内存': '安卓6 GB', '推荐模型': 'Qwen3 1.7B Q4', '生成速度': '约15至20词元/秒', '适合场景': '轻量对话、翻译、简单任务' },
          { '设备 / 内存': 'Pixel Tablet（8 GB）', '推荐模型': '仅限远程连接', '生成速度': '不适用', '适合场景': 'Tensor G2本地推理速度过慢' },
          { '设备 / 内存': 'iPad mini 7（A17 Pro，8 GB）', '推荐模型': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '生成速度': '未实测', '适合场景': '轻量起草、摘要' },
          { '设备 / 内存': 'iPad A16（6 GB）/ iPad 第10代（4 GB）', '推荐模型': 'Qwen3 1.7B Q4 或更小', '生成速度': '未实测', '适合场景': '简短问答；更多用远程连接' },
          { '设备 / 内存': 'Galaxy Tab S11 Ultra（12 GB / 16 GB）', '推荐模型': 'Gemma 4 E4B / Phi-4 Mini Q4', '生成速度': '未实测', '适合场景': '多任务更从容（16 GB 版）' },
          { '设备 / 内存': '任意平板（远程连接）', '推荐模型': '家用机器上的任意模型', '生成速度': '约20至40词元/秒', '适合场景': '质量优先使用、70B模型' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于大多数日常任务（起草文本、回答问题、内容摘要），平板上的Phi-4 Mini（3.8B）已足够胜任。与70B模型相比的不足之处：复杂多步推理、细腻创意写作和长文档分析。这类任务请使用远程连接到运行更大模型的家用机器。',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-zh.webp',
        imageCaption: '各平板推荐模型：iPad Pro M5（12 GB / 16 GB）在Llama 3.2 3B上达到32至38词元/秒；iPad Air M4以18至20词元/秒运行Phi-4 Mini；安卓8 GB通过Termux达到10至15词元/秒；Pixel Tablet因Tensor G2芯片速度过慢需使用远程连接。',
      },
      frontends: {
        id: 'frontends',
        title: '平板AI前端界面',
        content:
          '**在平板上使用的聊天界面对易用性影响显著。** 部分前端专为移动端设计；其他的以桌面端为主，在平板上勉强可用。',
        items: [
          '**Open WebUI（浏览器）：** 最佳移动端响应式通用聊天Web界面。在Safari或Chrome中通过任意本地IP:端口访问。适配平板屏幕比例效果良好。推荐用于远程连接设置。',
          '**PocketPal AI（iPad和安卓应用）：** 免费开源，可导入GGUF模型并内置基准测试。两个平台上最灵活的本地推理选项。',
          '**Locally AI（iPad应用）：** 基于MLX的简洁苹果风格界面；对非技术用户而言是iPad上最简单的首次使用体验。',
          '**Google AI Edge Gallery（iPad和安卓应用）：** Google以Gemma为主的应用；在设备上试用Google小型模型的最简便方式。',
          '**RisuAI（浏览器，移动端响应式）：** 角色扮演和角色卡创作的最佳移动端体验。可连接远程Ollama实例。在iPad Safari中提供接近原生应用的界面。',
          '**SillyTavern（浏览器）：** 在连接远程Ollama实例的iPad Safari上可用。未针对移动端优化，但功能正常。部分扩展功能在移动端Safari中无法使用。',
          '**Termux命令行（安卓）：** 仅限命令行。适合脚本任务；没有配套应用的情况下不适合对话使用。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在iPad上进行角色扮演和角色卡创作，连接到运行Llama 3.3 70B的远程Ollama实例的RisuAI是2026年的一种强力组合。RisuAI的移动端界面专为触控设计；远程连接提供对70B模型的访问，角色声音质量远超任何能放进平板的模型。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**在App Store中搜索LLM Farm。** 苹果已于2025年8月将其下架。请改用PocketPal AI或Locally AI，或从源码构建LLM Farm。',
          '**在8 GB平板上运行7B模型。** 每秒5至8词元对实时对话来说太慢。8 GB设备本地对话请使用3B模型；7B以上质量请使用远程连接。',
          '**在安卓上使用Play Store版Termux。** Play Store版Termux已过时，缺少Ollama所需软件包。务必从F-Droid安装Termux。',
          '**在未启用身份验证的情况下将Open WebUI暴露至公网。** Open WebUI默认无密码保护。如果将其暴露到家庭网络之外，任何找到该URL的人都可以访问您的模型。启用管理员账号系统并使用防火墙。',
          '**在8 GB iPad上运行本地推理前未关闭其他应用。** iOS会从内存中清除后台应用。8 GB iPad上3B模型占用约3.5 GB；如果iOS为其他应用回收该内存，模型会崩溃。运行推理前关闭所有其他应用。',
          '**在移动端浏览器上期待桌面级UI质量。** SillyTavern等部分前端以桌面端为主。在浏览器中的移动端体验可用但不精致。移动端优先UX请选择RisuAI或Open WebUI。',
          '**在浏览器中输入 `ipad.local`。** Safari 中要填的是家中主机的 IP 或主机名（例如 `192.168.1.20:3000` 或 `my-mac.local:3000`），而不是平板自己的名字。`ipad.local` 这类名称指向平板，而不是运行 Ollama 的那台机器。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'LLM Farm（iOS）文档和GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [App Store页面](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Termux的Ollama软件包 — [Termux](https://termux.dev)（请从F-Droid安装Termux）',
          'Termux版Ollama ARM构建 — [Ollama文档](https://ollama.com/docs)',
          'Open WebUI文档 — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M5芯片iPad Pro规格、内存版本和内存带宽 — [Apple Newsroom，2025年10月](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Apple M4芯片iPad Air规格和内存 — [Apple Newsroom，2026年3月](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Gemma 4 模型概览与内存需求 — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Samsung Galaxy Tab S11 Ultra 芯片与内存配置 — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以在iPad上运行AI吗？',
            a: '可以，支持iPad Pro M5（基础版12 GB / 1 TB和2 TB版16 GB）和iPad Air M4（12 GB）。iPad Pro M5使用PocketPal AI或Locally AI可比上一代iPad Pro M4更从容地实时运行Phi-4 Mini和Llama 3.2 3B。iPad Air M4可流畅运行3B至4B模型。对于iPad上的7B以上模型，推荐远程连接到运行Ollama的家用Mac或PC——iPad显示聊天，家用机器负责推理。',
          },
          {
            q: 'Ollama能在iPad上运行吗？',
            a: '不能——Ollama没有官方支持的iPadOS版本，因此无法像在安卓上通过Termux那样直接安装到iPad上。"在iPad上运行Ollama"实际是指在Mac或PC上运行Ollama，然后从iPad浏览器（通过家用机器局域网IP上的Open WebUI）连接——iPad只是显示终端，并非推理引擎。若需要在iPad上实现真正的本地推理，请改用PocketPal AI（通过llama.cpp运行GGUF模型）或Locally AI（MLX模型）等本地推理应用。',
          },
          {
            q: '可以在安卓平板上运行AI吗？',
            a: '可以，8 GB以上RAM的设备通过PocketPal AI或Termux + Ollama可以运行。Samsung Galaxy Tab S10+（12 GB RAM）运行Phi-4 Mini约达10至15词元/秒。6 GB RAM设备可运行Qwen3 1.7B。Termux方案需要从F-Droid安装Termux并熟悉几个终端命令。对大多数安卓平板用户而言，远程连接到家用机器是更简便的路径。',
          },
          {
            q: '平板上的本地AI是否无需联网就能工作？',
            a: '是的。一旦下载好模型并安装了应用，iPad（PocketPal AI、Locally AI）和安卓（Termux + Ollama）上的本地推理无需网络连接即可工作。这是本地推理相对于远程连接的主要优势之一——远程连接需要家庭Wi-Fi。',
          },
          {
            q: 'iPad最佳AI应用是什么？',
            a: '本地推理选PocketPal AI（开源，可导入任意GGUF模型）或Locally AI（界面最简洁，基于MLX）。LLM Farm已无法从App Store获取。远程连接到家用Ollama服务器选Safari中的Open WebUI（最佳通用聊天）或Safari中的RisuAI（最佳角色扮演和角色创作）。最佳选择取决于您是否需要本地推理能力、离线使用或最佳界面质量。',
          },
          {
            q: '在安卓上使用Termux + Ollama安全吗？',
            a: '安全。Termux是数百万开发者使用的成熟安卓终端模拟器。Termux中的Ollama默认只提供本地API（localhost:11434）——除非您明确更改绑定地址，否则网络上的其他设备无法访问。模型文件存储在Termux的私有存储中，不在安卓共享存储中。',
          },
          {
            q: '能在平板上本地获得ChatGPT级别的回答质量吗？',
            a: '不完全能，但配置得当可以接近。前沿云端模型的质量通常需要70B以上的模型。在平板上：iPad Pro M5（12 GB / 16 GB）无法运行70B模型——只能容纳3B至8B模型。通过远程连接：如果您的家用机器配有24 GB显卡（RTX 4090）或64 GB统一内存（Mac M5 Max），就能运行Llama 3.3 70B，平板通过浏览器中的Open WebUI即可获得这一质量。这是平板上最接近云端AI质量的方式。',
          },
          {
            q: '如何让家用Ollama服务器在合上笔记本盖子后持续运行？',
            a: '在macOS上，设置合盖睡眠策略：系统设置 → 电池 → 禁用"启用Power Nap"，并使用Amphetamine等工具在插电时防止睡眠。在Windows上，转到电源选项 → 更改计划设置 → 插电时"从不"睡眠。或者，在始终开机的机器上运行Ollama（迷你主机、NAS或闲置旧笔记本），而非主力笔记本。',
          },
          {
            q: '运行AI会快速耗尽平板电量吗？',
            a: '是的——本地推理对CPU/GPU要求较高，耗电速度远快于普通浏览网页，具体因设备和模型而异。长时间使用请保持插电状态。远程连接到家用机器对平板电量消耗明显更少——平板仅显示网页。',
          },
          {
            q: '平板在AI推理过程中会热降频吗？',
            a: '会，尤其是iPad Air M4和没有主动散热的安卓平板。iPad Pro M5的散热余量比iPad Air更大，而许多安卓平板在持续推理时会更早降频。缓解方法：使用较短的生成块（每次回复200至400词元）、将平板置于硬质平面上、避免同时运行其他CPU密集型应用。',
          },
          {
            q: '哪种键盘最适合平板AI使用？',
            a: '搭配触控板的Apple Magic Keyboard（适用于iPad Pro M5）是最完善的方案——完整键盘快捷键可在Safari + Open WebUI中使用，触控板便于在长回复中选择文本。Logitech Combo Touch是预算替代方案。安卓：任何蓝牙键盘都可配合Termux使用，但体验较粗糙（仅限终端）。对于文字工作，iPad Pro + Magic Keyboard可将平板变成以写作为先的AI工作站。',
          },
          {
            q: '可以在iPad上运行SillyTavern吗？',
            a: '可以，通过远程连接。SillyTavern运行在家用Mac或PC上，iPad Safari通过局域网IP连接。移动端界面可用但不够精致——部分扩展功能（正则工具、群聊面板）可以使用但显得拥挤。专就角色扮演而言，RisuAI的移动端界面优于SillyTavern；两者都可以连接到家用机器上的同一个Ollama后端。',
          },
          {
            q: '平板能处理长文档RAG吗？',
            a: '本地推理方式不行——在平板上嵌入1000+份文档不切实际。通过远程连接可以——家用机器处理RAG管道，平板显示聊天界面。AnythingLLM运行在家用机器上并通过浏览器在平板访问，可处理任意规模的文档集合，平板端无限制。对于需要在平板上使用RAG的学生或知识工作者，远程连接通常是更实用的方案。',
          },
          {
            q: '平板可以使用外接显示器进行AI工作吗？',
            a: '可以，iPad Pro M5支持（台前调度加外接显示器可实现多窗口设置：外接显示器上显示Open WebUI，iPad屏幕上显示笔记/源文档）。Galaxy Tab S10 Ultra支持DeX模式外接显示器，可实现类似的多屏AI工作流。不支持DeX模式的安卓平板只能镜像屏幕——作用较小。iPad Pro + 外接显示器 + Magic Keyboard是2026年平板最接近真正AI工作站的配置。',
          },
          {
            q: '平板比手机更适合本地AI吗？',
            a: '对于打字密集型使用（起草、RAG、长对话），是的——键盘支持和屏幕尺寸很重要。对于快速聊天、语音查询或移动使用，随身携带的手机更方便。iPad Pro M5是在本地AI方面最有可能超越旗舰手机的平板；中端平板和手机大致相当。大多数读者不应专门为本地AI购买平板——如果因其他原因想要平板，AI能力是附加价值。',
          },
          {
            q: '为什么我平板上的本地AI这么慢？',
            a: '通常有四种原因：模型超过可用内存（系统会使用交换空间或关闭应用）、生成速度受内存带宽而非芯片速度限制、平板正在热降频，或后台应用占用了内存。解决办法：改用更小的模型或Q4量化、关闭其他应用、保持平板凉爽并插电，并使用PocketPal AI内置的基准测试测量实际速度。如果3B模型仍然太慢，请改用远程连接到家用机器。',
          },
          {
            q: '哪些平板可以运行本地LLM（iPad Air M3、入门级iPad、Galaxy Tab A、华为MatePad、小米Pad）？',
            a: '决定因素是内存和芯片，而非品牌。iPad Air M3（8 GB）可处理1B至3B模型；内存低于6 GB的入门级iPad和低端安卓平板只能容纳1B至1.7B模型，因此对它们而言远程连接是更好的选择。8 GB或以上的华为MatePad和小米Pad可运行与其他安卓平板相同的应用，但需视其应用商店的可用情况而定。请在设置中查看平板的内存，然后参照上方的模型表。',
          },
          {
            q: 'iPad上有Ollama应用吗？',
            a: 'iPadOS上没有官方的Ollama应用。确实存在连接到您Mac或PC上Ollama服务器的第三方iPad客户端——例如[GetOAI](https://apps.apple.com/app/id6752573799)和[LLLM](https://apps.apple.com/app/id6749804212)——但它们只显示聊天；模型仍在家用机器上运行。安装前请查看各自的App Store页面。通过浏览器访问（Safari中的Open WebUI）则完全不需要应用。',
          },
          {
            q: '可以在安卓平板上不使用终端运行本地LLM吗？',
            a: '可以。PocketPal AI（免费，开源，Google Play）和Google AI Edge Gallery（免费，Apache 2.0）无需Termux即可在设备上下载并运行模型。只有在特别需要Ollama生态系统或本地API端点时，才需要Termux + Ollama。',
          },
          {
            q: '旧款或入门级 iPad（iPad 第9/10/11代、iPad mini、iPad Air 5）能运行本地大模型吗？',
            a: '由内存决定。iPad 第9代（3 GB）、第10代（4 GB）和 iPad mini 6（4 GB）内存太小，不适合在设备端流畅聊天，建议使用远程连接。iPad 第11代（A16，6 GB）可运行 Q4 的 1B–1.7B 模型。iPad mini 7（A17 Pro，8 GB）、iPad Air 5 和 iPad Air M3（8 GB）可运行 Q4 的 3B 模型，但受上文所述的 8 GB 限制。苹果并未公布所有这些机型的内存；文中数字为业内普遍报道，并非苹果官方确认。',
          },
          {
            q: 'Galaxy Tab S11 Ultra 或 Galaxy Tab S9 FE 能运行本地大模型吗？',
            a: 'Galaxy Tab S11 Ultra（天玑 9400+，按配置为 12 GB 或 16 GB 内存）高于 8 GB 门槛，可运行与 Tab S10+ 相同的应用——PocketPal AI、Google AI Edge Gallery 或 Termux + Ollama——并为 3B–4B 模型留有更多余量。Galaxy Tab S9 FE 有 6 GB 和 8 GB 两种配置：6 GB 版本只适合 Qwen3 1.7B，8 GB 版本按模型表中的 8 GB 一行选择。Exynos 1380 属于中端芯片，速度预计低于旗舰平板。',
          },
          {
            q: 'Gemma 4 能在平板上运行吗？',
            a: '可以，运行的是小尺寸的 Gemma 4。谷歌将 Gemma 4 E2B 和 E4B 列为设备端尺寸；在 4 位量化下，谷歌给出的权重内存约为 2.9 GB（E2B）和 4.5 GB（E4B）。因此 8 GB 平板更稳妥的选择是 E2B，12 GB 及以上更适合 E4B。在 iPad 和安卓上运行它们的应用是 Google AI Edge Gallery，参见 [Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review)。PromptQuorum 未实测 Gemma 4 在平板上的速度。',
          },
          {
            q: '有哪些免费应用可以在 iPad 上运行本地大模型？',
            a: 'PocketPal AI（免费，MIT）、Google AI Edge Gallery（免费，Apache 2.0）和 Locally AI（免费，含付费选项）都可以免费在设备端运行模型。在 Safari 中通过 Open WebUI 连接 Mac 或 PC 上的 Ollama 同样免费。LLM Farm 也免费，但需要从源码构建。',
          },
          {
            q: '现在还能在 iPad 上安装 LLM Farm 吗？',
            a: '无法通过 App Store 安装。苹果已于 2025 年 8 月下架 LLM Farm，项目 README 也将 App Store 和 TestFlight 均列为暂时不可用。唯一的方法是在 Xcode 中从[源码](https://github.com/guinmoon/LLMFarm)构建。其最近一次上游更新是 2026 年 1 月 30 日，可能已停止维护。iPad 上可安装的替代方案是 PocketPal AI 和 Locally AI。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 上文推荐的免费开源iOS和安卓应用，适合平板本地推理。',
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 面向iPad和iPhone的基于MLX的本地聊天应用。',
          '[Google AI Edge Gallery评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google面向iOS和安卓的本地Gemma应用。',
          '[LLM Farm评测](/zh/power-local-llm/llm-farm-review) — 该应用为何不再上架App Store，以及从源码构建需要做什么。',
          '[2026年iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 专注于iPhone特定应用选择和设置的姊妹指南。',
          '[2026年安卓最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — Termux + Ollama之外安卓应用选择的姊妹指南。',
          '[2026年最佳移动LLM模型：Phi-4 Mini vs Gemma 3 vs SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 模型层伴读：各任务选哪款移动模型。',
          '[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 离线移动语音助手构建指南。',
          '[Windows、Mac和Linux最易用的本地AI应用](/zh/power-local-llm/easiest-local-ai-app-windows-mac-linux) — Mac或PC上设置本地AI用户的桌面端对应指南。',
          '[低配PC最佳本地AI应用](/zh/power-local-llm/best-local-ai-app-low-end-pc) — 内存有限的低配设备推荐。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 平板角色卡角色扮演移动端UI对比。',
          '[最佳本地LLM笔记本电脑](/zh/local-llms/best-laptops-local-llm) — 配合平板远程连接使用的家用机器硬件配置指南。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 涵盖所有硬件层级（包括非移动端）的更广泛模型概览。',
          '[本地AI代理与MCP 2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — 将平板连接到家用机器上启用MCP的本地代理设置。',
        ],
      },
      zhContext: {
        id: 'zh-context',
        title: '中国数据合规背景：本地AI的适用场景',
        content:
          '**对于在中国运营的企业和个人用户，本地AI具有超越便捷性之外的数据合规意义。** 以下监管框架使本地推理在部分场景下成为合规必选。',
        items: [
          '**《数据安全法》（2021）：** 规范数据处理活动，要求对"重要数据"进行安全评估。向境外传输数据前需完成安全评估或标准合同备案。将数据发送至境外云端AI API（OpenAI、Anthropic、Google）可能触发跨境数据传输义务——具体取决于数据分类。',
          '**《个人信息保护法》（PIPL，2021）：** 中国的综合个人信息保护框架，对个人信息境外传输设有明确限制（需通过国家互联网信息办公室安全评估或经认证机构认证）。通过本地推理在设备上处理个人信息，避免跨境传输合规问题。',
          '**国家互联网信息办公室（CAC）监管：** 网信办监管互联网信息服务和算法推荐，并发布了生成式AI服务提供商相关规定。境外提供的生成式AI服务适用不同监管框架。在本地机器上运行开源模型（Qwen、Llama等）处于企业自用场景，目前通常不需要独立备案。',
          '**实际指导：** 对于处理内部业务数据、客户信息或内容的企业，本地推理提供了清晰的数据边界——数据不离开设备或公司网络。建议企业用户在具体合规决策前咨询熟悉《数据安全法》和PIPL的法律顾问；本内容仅供参考，不构成法律建议。',
          '**开源模型的选择：** Qwen系列（通义千问，阿里巴巴云）是本地运行开源模型的重要选项，包括针对移动端优化的Qwen3 1.7B。在平板上本地运行Qwen3 1.7B结合Termux + Ollama，为内存受限的安卓设备提供了切实可行的数据本地化解决方案。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '在平板上本地运行AI：iPad Pro M5、Galaxy Tab S10、OnePlus Pad 2（2026）',
      description:
        '在iPad或安卓平板上本地运行AI：本地推理应用（PocketPal AI、Locally AI）、Termux + Ollama，以及iPad上使用Ollama为何需要远程连接。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'zh',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      author: { '@type': 'Organization', 'name': 'PromptQuorum' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        '2026年在平板上本地运行AI。本地推理与连接家用机器的远程访问方案详解。',
      keywords: [
        'iPad本地AI',
        '安卓平板本地LLM',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'PocketPal AI',
        'Locally AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        '如何为本地AI推理配置iPad',
        '如何在安卓上使用Termux和Ollama',
        '如何从平板远程连接Ollama',
        '根据平板硬件选择适合的模型',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Google AI Edge Gallery' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      about: [
        { '@type': 'Thing', 'name': '本地AI推理' },
        { '@type': 'Thing', 'name': '平板LLM' },
        { '@type': 'Thing', 'name': 'iPad AI应用' },
        { '@type': 'Thing', 'name': '安卓平板AI推理' },
      ],
      'proficiencyLevel': 'Beginner',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'Ejecuta IA local en tu tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'Ejecutar IA localmente en iPad y tablet Android 2026',
    intro:
      'Ejecutar una IA local en una tablet es práctico en 2026 en iPads de alta gama y dispositivos Android con 8 GB o más de RAM. Esta guía cubre las opciones: inferencia en el dispositivo con PocketPal AI, Locally AI y Google AI Edge Gallery en iPad (LLM Farm ya no se puede instalar desde la App Store), PocketPal AI y Termux + Ollama en Android, y la alternativa de conexión remota (conectar la tablet a un Mac o PC que ejecute Ollama por Wi-Fi local) para dispositivos que no pueden ejecutar inferencia localmente.',
    metaDescription:
      'Ollama no se ejecuta en iPad, pero un LLM local sí: PocketPal AI o Locally AI en el dispositivo, Termux en Android u Ollama en un Mac por Wi-Fi.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-es.webp',
    twitterDescription:
      'Ejecuta IA en tu iPad o tablet Android en 2026: apps en el dispositivo (PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama y conexión remota a un Mac/PC de casa con Ollama, con modelos recomendados por dispositivo.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'Usuarios de tablet que quieren ejecutar IA localmente o conectarse a una configuración LLM en casa desde su iPad o dispositivo Android, sin depender de servicios de IA en la nube.',
    readTime: '12 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'ejecutar IA en tablet',
    targetKeywords: [
      'ejecutar ia localmente en ipad',
      'ejecutar llm local en tablet android',
      'ollama ipad conexion remota',
      'termux ollama android',
      'llm farm ipad',
      'pocketpal ai ios llm',
      'llm local en ipad pro m5',
    ],
    leadAnswerBlock:
      '**Ejecutar una IA local en una tablet tiene dos modos distintos: inferencia en el dispositivo (el modelo se ejecuta directamente en el chip de la tablet) y conexión remota (la tablet es una pantalla para un Mac o PC en casa que ejecuta Ollama). La inferencia en el dispositivo es práctica en iPad Pro M5 (12 GB en los niveles de almacenamiento base, 16 GB en los modelos de 1 TB/2 TB — ejecuta Phi-4 Mini y Llama 3.2 3B en tiempo real con más margen que la generación M4 anterior), iPad Air M4 (12 GB, ejecuta modelos de 3B a 4B con comodidad) y dispositivos Android de alta gama con 8 GB o más de RAM (Samsung Galaxy Tab S10+, mediante PocketPal AI o Termux + Ollama). La conexión remota a través de Open WebUI o una interfaz de chat sencilla en la IP local del servidor de casa funciona en cualquier tablet, con cualquier cantidad de RAM y cualquier sistema operativo: convierte tu tablet en un terminal táctil hacia una máquina doméstica más potente. Para la mayoría de las personas, la conexión remota es la mejor opción: la máquina en casa ejecuta el modelo de 70B mientras la tablet proporciona la interfaz conveniente.**',
    quickAnswerTop: {
      es: {
        question: '¿Se puede ejecutar un modelo de IA local en un iPad o tablet Android?',
        answer:
          'Sí, en dispositivos de alta gama. El iPad Pro M5 (12 GB en los niveles de almacenamiento base, 16 GB en los modelos de 1 TB/2 TB) ejecuta Phi-4 Mini (3.8B) y Llama 3.2 3B en tiempo real usando PocketPal AI o Locally AI, con más margen que la generación M4 anterior. El iPad Air M4 (12 GB) ejecuta modelos de 3B a 4B con comodidad. Las tablets Android con 8 GB o más de RAM (Samsung Galaxy Tab S10+) pueden ejecutar Phi-4 Mini y Qwen3 1.7B localmente mediante PocketPal AI o Termux + Ollama. Ollama en sí no se ejecuta de forma nativa en iPadOS — los usuarios que específicamente quieran Ollama necesitan una conexión remota a un Mac o PC. Para tablets con menos RAM o chips más antiguos, la alternativa práctica es la conexión remota: conéctate a un Mac o PC en tu red doméstica que ejecute Ollama, usando Open WebUI en el navegador de la tablet.',
        bullets: [
          'iPad Pro M5 (12 GB / 16 GB) — ejecuta Phi-4 Mini y Llama 3.2 3B localmente en tiempo real usando PocketPal AI o Locally AI, más rápido que la generación M4 anterior gracias a un mayor ancho de banda de memoria.',
          'iPad Air M4 (12 GB) — ejecuta modelos de 3B a 4B a velocidad utilizable; los modelos 7B son lentos pero funcionales.',
          'Tablets Android (8 GB o más de RAM) — PocketPal AI (sin terminal) o Termux + Ollama ejecuta Phi-4 Mini y Qwen3 1.7B localmente.',
          'Ollama en sí no tiene una compilación nativa para iPadOS — "ejecutar Ollama en un iPad" significa conectarse de forma remota a un Mac o PC que lo ejecute, no instalarlo en el iPad.',
          'Conexión remota — cualquier tablet, cualquier RAM: conéctate a tu Mac o PC en casa que ejecute Ollama mediante Open WebUI en el navegador.',
          'Mejor modelo en el dispositivo para la mayoría de tablets: Phi-4 Mini (3.8B, ~2,7 GB) o Qwen3 1.7B para dispositivos con RAM limitada.',
          'Se recomienda la conexión remota sobre el dispositivo para modelos de 7B en adelante — la máquina en casa ejecuta el modelo más rápido que cualquier tablet.',
          'SillyTavern y RisuAI tienen interfaces adaptadas a móvil que funcionan en iPad Safari / Android Chrome.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Dos modos: en el dispositivo vs conexión remota', anchor: '#two-modes' },
      { label: 'iPad: inferencia en el dispositivo', anchor: '#ipad-on-device' },
      { label: 'Android: inferencia en el dispositivo', anchor: '#android-on-device' },
      { label: 'Conexión remota a una máquina en casa', anchor: '#remote-connection' },
      { label: 'Recomendaciones de modelos por dispositivo', anchor: '#models' },
      { label: 'Frontends para IA local en tablet', anchor: '#frontends' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La inferencia en el dispositivo es práctica en iPad Pro M5 (12 GB / 16 GB), iPad Air M4 (12 GB) y Android de alta gama (8 GB o más).** Por debajo de estos umbrales, la generación es demasiado lenta para uso en tiempo real. La conexión remota a una máquina en casa es la mejor opción para la mayoría de los usuarios de tablet.',
          '**La conexión remota es el enfoque recomendado para la mayoría de las personas.** Conecta tu tablet (con cualquier RAM y sistema operativo) a un Mac o PC que ejecute Ollama en tu red doméstica. La máquina en casa ejecuta el modelo de 70B; la tablet obtiene una interfaz de chat táctil. No se requiere descargar el modelo en la tablet.',
          '**PocketPal AI, Locally AI y Google AI Edge Gallery son las opciones actuales en el dispositivo para iPad.** PocketPal AI importa modelos GGUF, Locally AI ejecuta modelos MLX creados para Apple Silicon y Google AI Edge Gallery ejecuta los modelos Gemma de Google. LLM Farm se retiró de la App Store en agosto de 2025 y su última actualización fue el 30 de enero de 2026: considéralo solo una opción para compilar desde el código fuente.',
          '**PocketPal AI es el enfoque más sencillo en Android; Termux + Ollama es el más flexible.** PocketPal AI es una app de Google Play sin pasos de terminal. Termux + Ollama requiere comodidad con la terminal, pero da acceso al ecosistema completo de Ollama en dispositivos con 8 GB o más de RAM y sirve el modelo en localhost:11434.',
          '**Mejor modelo en el dispositivo para la mayoría de las tablets: Phi-4 Mini (3.8B).** Funciona en cualquier dispositivo con 6 GB o más de RAM disponible; produce salidas utilizables para la mayoría de las tareas cotidianas; se descarga en 5 a 10 minutos con una conexión rápida.',
          '**Open WebUI en el navegador de la tablet es la interfaz de conexión remota más sencilla.** Si tu Mac o PC en casa ejecuta Open WebUI en `192.168.x.x:3000`, abre esa dirección en el navegador de tu tablet — sin instalar ninguna aplicación, sin configuración, con interfaz de chat completa.',
          '**SillyTavern tiene una interfaz adaptada a móvil.** Para roleplay y uso con tarjetas de personaje en tablet, SillyTavern ejecutándose en una máquina en casa al que se accede desde el navegador de la tablet funciona bien; RisuAI tiene el mejor soporte móvil nativo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Aplicaciones de iPad:** PocketPal AI (gratis, MIT), Locally AI (gratis con opciones de pago, MLX), Google AI Edge Gallery (gratis, Apache 2.0). LLM Farm (gratis, MIT, solo iOS) se retiró de la App Store en agosto de 2025 y ahora hay que compilarlo desde el código fuente.',
          '**Método Android:** PocketPal AI o Google AI Edge Gallery (apps, sin terminal), o Termux + Ollama (CLI).',
          '**Conexión remota:** cualquier navegador de tablet → Open WebUI o una interfaz de chat sencilla en la IP local de tu máquina en casa. Así es también como los usuarios de iPad ejecutan Ollama, ya que Ollama no tiene una compilación nativa para iPadOS.',
          '**Mínimo para el dispositivo:** iPad Air M4 (12 GB) para modelos de 3B a 4B; iPad Pro M5 (12 GB / 16 GB) para modelos de 7B a 8B.',
          '**Mínimo Android para el dispositivo:** dispositivo con 8 GB de RAM (Samsung Galaxy Tab S10+, OnePlus Pad 2).',
          '**Mejor modelo en el dispositivo:** Phi-4 Mini (3.8B, 2,7 GB) para la mayoría de las tablets; Qwen3 1.7B para dispositivos muy limitados.',
          '**Velocidad de conexión remota:** depende de la calidad del Wi-Fi y la velocidad de generación de la máquina en casa, no del hardware de la tablet.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'Dos modos: en el dispositivo vs conexión remota',
        content:
          '**La decisión más importante no es qué aplicación usar, sino si ejecutar la inferencia en la tablet o en una máquina más potente en casa.** Cada modo tiene un requisito de hardware distinto y un techo de rendimiento diferente.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ejecutar IA en una tablet tiene dos modos prácticos: inferencia en el dispositivo (el modelo se ejecuta en el chip de la tablet, limitado a modelos de 3B a 7B) o conexión remota (la tablet es una pantalla de navegador para un Mac o PC en casa que ejecuta modelos más grandes mediante Ollama y Open WebUI).',
          },
          {
            type: 'plain-terms',
            text: 'Modo en el dispositivo: el modelo vive en tu tablet y funciona sin conexión. Está limitado a modelos pequeños (3B, quizás 7B en un iPad Pro de alta gama) y es más lento que una IA en la nube. Modo remoto: tu Mac o PC en casa ejecuta Ollama y un modelo de 70B, y tu tablet solo muestra el chat en un navegador — obtienes la calidad completa del modelo de 70B en la pantalla de la tablet, sin modelos almacenados en la tablet, y la máquina en casa debe estar encendida y en el mismo Wi-Fi. Elige la conexión remota a menos que necesites específicamente el uso sin conexión.',
          },
        ],
        columns: ['Factor', 'En el dispositivo', 'Conexión remota'],
        rows: [
          { 'Factor': 'Límite de tamaño del modelo', 'En el dispositivo': '3B a 8B (iPad Pro M5); 3B a 4B (mayoría de tablets)', 'Conexión remota': 'Ilimitado — la máquina en casa ejecuta cualquier modelo' },
          { 'Factor': 'Uso sin conexión', 'En el dispositivo': 'Sí — funciona sin Wi-Fi', 'Conexión remota': 'No — requiere Wi-Fi en casa' },
          { 'Factor': 'Velocidad de generación', 'En el dispositivo': 'Moderada (12 a 30 tok/seg en iPad Pro M5)', 'Conexión remota': 'Depende de la máquina en casa (hasta 40+ tok/seg)' },
          { 'Factor': 'Almacenamiento en la tablet', 'En el dispositivo': '2 a 10 GB por modelo', 'Conexión remota': 'Ninguno — el modelo vive en la máquina en casa' },
          { 'Factor': 'Complejidad de configuración', 'En el dispositivo': 'Baja (descargar app + archivo de modelo)', 'Conexión remota': 'Baja a media (la máquina en casa necesita Ollama + Open WebUI)' },
          { 'Factor': 'Ideal para', 'En el dispositivo': 'Viajes, uso sin conexión, tareas con modelos 3B', 'Conexión remota': 'Uso con calidad prioritaria, modelos 70B, comodidad' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si ya tienes un Mac o PC en casa que pueda ejecutar Ollama, empieza con la conexión remota. Obtienes mejor calidad de modelo en tu tablet de inmediato sin almacenar archivos de modelo en ella ni lidiar con las limitaciones de las aplicaciones móviles. Agrega la capacidad en el dispositivo más adelante si descubres que necesitas uso sin conexión.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-es.svg',
        imageCaption: 'Dos modos de IA en tablet: inferencia en el dispositivo (el modelo se ejecuta en el chip de la tablet, funciona sin conexión, limitado a modelos de 3B a 8B) vs conexión remota (el navegador de la tablet se conecta al Mac/PC en casa con Ollama, sin modelo almacenado en la tablet, tamaño de modelo ilimitado).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: inferencia en el dispositivo',
        content:
          '**El iPad Pro M5 es el iPad más adecuado para modelos de 7B a 8B.** Apple elevó la RAM base del iPad Pro M5 a 12 GB (16 GB en los niveles de almacenamiento de 1 TB/2 TB), frente a los 8 GB del iPad Pro M4 base, y aumentó el ancho de banda de memoria de 120 GB/s a 153 GB/s — la inferencia LLM en Apple Silicon está limitada por el ancho de banda de memoria, así que esto se traduce directamente en una generación más rápida. El iPad Air M4 (12 GB, frente a los 8 GB del M3 Air) ahora ejecuta modelos de 3B a 4B con comodidad, en lugar de simplemente de forma adecuada. El iPad Air M3 (8 GB) y otros iPads de 8 GB se limitan a modelos de 1B a 3B en Q4. [El iPhone con 8 GB de RAM también ejecuta modelos pequeños](/es/power-local-llm/best-local-llm-apps-iphone-2026) mediante LLM Farm.',
        items: [
          '**PocketPal AI** (gratis, código abierto MIT, iOS + Android): ejecuta modelos GGUF mediante llama.cpp, descarga modelos de Hugging Face dentro de la app o importa archivos, e incluye un benchmark integrado para medir los tokens por segundo de tu propia tablet. Última actualización upstream: 19 de octubre de 2026. Consulta la [reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (gratis con opciones de pago, código cerrado, iPhone/iPad/Mac): ejecuta modelos abiertos mediante el framework MLX de Apple, creado para Apple Silicon. Última actualización en la App Store: 15 de octubre de 2026. Consulta la [reseña de Locally AI](/es/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (gratis, Apache 2.0, iOS + Android): la app de Google para ejecutar sus modelos Gemma en el dispositivo, sobre el runtime LiteRT-LM. Última actualización upstream: 23 de octubre de 2026. Consulta la [reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review). También ejecuta Gemma 4 (E2B y E4B), los modelos pequeños actuales de Google para el dispositivo.',
          '**LLM Farm** (gratis, MIT, solo iOS): Apple retiró la ficha de la App Store en agosto de 2025, y el README del proyecto indica que tanto la App Store como TestFlight están "temporalmente no disponibles" — la única vía es compilarlo desde el [código fuente](https://github.com/guinmoon/LLMFarm) en Xcode. Última actualización upstream: 30 de enero de 2026, hace más de 180 días, por lo que puede estar sin mantenimiento; revisa el repositorio antes de depender de él. Consulta la [reseña de LLM Farm](/es/power-local-llm/llm-farm-review).',
          '**Importar modelos:** en PocketPal AI, descarga un modelo GGUF de Hugging Face dentro de la app, o importa un archivo GGUF que hayas transferido con Apple Files. Los modelos se almacenan en el almacenamiento local de la aplicación, no en iCloud.',
          '**Gestión de RAM en iPad:** iOS gestiona la RAM de forma agresiva para las aplicaciones en segundo plano. Cierra todas las demás aplicaciones antes de ejecutar un modelo 7B en un iPad de 12 GB — iOS expulsará el modelo si otra aplicación necesita memoria. En el iPad Pro M5 de 16 GB (niveles de 1 TB/2 TB), esto rara vez es un problema.',
          '**Estimaciones de velocidad de generación (aproximadas, no son benchmarks de PromptQuorum — usa el benchmark integrado de PocketPal AI para medir tu propio dispositivo):** iPad Pro M5 (12 GB / 16 GB): Phi-4 Mini ~25 tok/seg, Llama 3.2 3B ~38 tok/seg, Gemma 3 4B ~23 tok/seg — aproximadamente un 25 a 30 % más rápido que la generación M4 anterior, en línea con el aumento del ancho de banda de memoria. iPad Air M4 (12 GB): modelos de 3B a 4B ~15 a 20 tok/seg; modelos 7B ~7 a 10 tok/seg (sigue siendo lento para chat en tiempo real).',
          '**iPads de gama de entrada y iPads con 8 GB de RAM o menos:** usa modelos de 1B a 3B en Q4, o trata el iPad como una pantalla de conexión remota. Si un modelo no cabe en la RAM libre, iPadOS cierra la app en lugar de ralentizarse de forma gradual.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No intentes ejecutar un modelo 7B en un iPad Air de 12 GB para chat en tiempo real. A 7 a 10 tokens por segundo, cada respuesta sigue tardando de 10 a 20 segundos. Esto es usable para tareas de resumen donde envías un prompt y esperas, pero frustrante para el uso conversacional. Usa modelos de 3B a 4B en iPad Air; actualiza al iPad Pro M5 de 16 GB o cambia a la conexión remota para modelos 7B en adelante.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-es.svg',
        imageCaption: 'Velocidad de inferencia en el dispositivo en iPad: el iPad Pro M5 (12 GB / 16 GB) alcanza de 23 a 38 tok/seg en Phi-4 Mini y Llama 3.2 3B; el iPad Air M4 (12 GB) ejecuta modelos de 3B a 4B a 15 a 20 tok/seg pero cae a 7 a 10 tok/seg en modelos 7B — sigue siendo lento para chat en tiempo real.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: inferencia en el dispositivo',
        content:
          '**La inferencia en el dispositivo en Android usa [Termux + Ollama](/es/power-local-llm/best-local-llm-apps-android-2026) — Termux es un emulador de terminal Linux que ejecuta Ollama de forma nativa en Android.** Es más técnico que la experiencia de aplicación en iPad, pero da acceso al ecosistema completo de Ollama.',
        numberedItems: [
          'Instala Termux desde F-Droid (no la versión de Play Store — la compilación de Play Store está desactualizada y le faltan paquetes necesarios).',
          'En Termux: `pkg update && pkg upgrade`',
          'Instala Ollama desde el repositorio de paquetes de Termux: `pkg install ollama` (las guías antiguas compilan Ollama desde el código fuente con Go, algo que ya no es necesario).',
          'Descarga un modelo: `ollama pull phi4-mini` o `ollama pull qwen3:1.7b`.',
          'Inicia el servidor: `ollama serve` (mantén esta sesión de Termux activa).',
          'Chat mediante Termux: `ollama run phi4-mini` — o abre un navegador y ve a `http://localhost:11434` para acceder a la API. Instala una aplicación de chat para Android que se conecte a un endpoint local de Ollama para obtener una interfaz gráfica.',
        ],
        items: [
          '**Alternativas más sencillas a Termux:** PocketPal AI (Google Play, gratis, MIT; última actualización upstream: 19 de octubre de 2026) y Google AI Edge Gallery (gratis, Apache 2.0; última actualización upstream: 23 de octubre de 2026) ejecutan modelos en el dispositivo sin terminal. Empieza con una de ellas, salvo que necesites específicamente Ollama. Consulta la [reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
          '**Dispositivos compatibles con modelos 3B o más:** mínimo 8 GB de RAM (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Los dispositivos con 6 GB solo ejecutan Qwen3 1.7B.',
          '**Pixel Tablet no recomendado para el dispositivo:** el Pixel Tablet (modelo 2023, 8 GB Tensor G2) quedó fuera de la lista de dispositivos recomendados para inferencia local — el Tensor G2 es significativamente más lento que el Snapdragon 8 Gen 3 / Dimensity 9300 para inferencia LLM, produciendo de 4 a 7 tok/seg en Phi-4 Mini (demasiado lento para uso conversacional). Los usuarios del Pixel Tablet deben usar la conexión remota a una máquina en casa.',
          '**Snapdragon 8 Gen 3 y Dimensity 9300** son los chips Android más rápidos para inferencia en el dispositivo en 2026. Velocidad de generación: ~15 a 25 tok/seg para modelos de 1.7B; ~8 a 12 tok/seg para modelos 3B.',
          '**Almacenamiento del modelo:** Android no tiene memoria unificada — el modelo se ejecuta en la RAM del sistema sin aceleración por GPU en la mayoría de las configuraciones de Termux. La aceleración por GPU requiere Termux:NVIDIA o compilaciones específicas de Vulkan; la configuración es más compleja.',
          '**Aplicaciones alternativas:** MNN LLM (Alibaba, gratis, aplicación Android con inferencia en el dispositivo para modelos seleccionados) tiene una configuración más sencilla pero una selección de modelos más limitada que Ollama. AI Runner y llamafile también tienen compilaciones para Android con soporte variable. No existe una versión para Android de LLM Farm — es una aplicación exclusiva de iOS; PocketPal AI es el equivalente más cercano en Android.',
          '**Otras marcas (Huawei MatePad, Xiaomi Pad, Galaxy Tab serie A):** deciden la RAM y el chip, no la marca. Comprueba la RAM de la tablet en Ajustes: con menos de 6 GB, quédate con modelos de 1B a 1.7B o usa la conexión remota; con 8 GB o más, sigue la fila de 8 GB de la tabla de modelos.',
          'Para una guía de configuración específica para Xperia en Japón con tabla de compatibilidad de hardware, consulta <a href="/es/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">cómo ejecutar un LLM local en teléfonos Xperia en Japón</a>.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Instala el complemento Termux:Widget y crea un acceso directo que ejecute "ollama serve" — esto te permite iniciar el servidor de Ollama desde la pantalla de inicio de tu Android sin abrir Termux manualmente. Una vez que Ollama esté sirviendo, abre cualquier aplicación de chat configurada para conectarse a localhost:11434.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-es.svg',
        imageCaption: 'IA en el dispositivo en Android: configuración en 5 pasos de Termux + Ollama — instala Termux desde F-Droid (no Play Store), actualiza paquetes, instala Ollama con pkg install ollama, descarga un modelo (phi4-mini o qwen3:1.7b), luego inicia el servidor en localhost:11434. Requiere un mínimo de 8 GB de RAM.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Conexión remota a una máquina en casa',
        content:
          '**La configuración más sencilla para la mayoría de los usuarios de tablet: ejecuta Ollama y Open WebUI en tu Mac o PC en casa, luego accede a la interfaz de chat desde el navegador de tu tablet en la misma red Wi-Fi.** Tu tablet se convierte en una interfaz táctil para la máquina más potente que ejecuta Ollama en casa — consulta [la guía de portátiles](/es/local-llms/best-laptops-local-llm) para dimensionar el hardware si estás eligiendo la máquina en casa.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La conexión remota a una máquina en casa que ejecuta Ollama y Open WebUI da a cualquier tablet acceso completo a modelos de 70B mediante un navegador — sin modelo almacenado en la tablet, sin instalar aplicaciones y sin comprometer la calidad del modelo.',
          },
          {
            type: 'plain-terms',
            text: 'En tu Mac o PC: instala Ollama, descarga un modelo, instala Open WebUI (un solo comando Docker) y ejecútalo vinculado a la IP de tu red local. En tu tablet: abre Safari o Chrome, ve a http://[IP-de-tu-Mac]:3000 y tendrás una interfaz de chat de IA completa. El modelo se ejecuta en el Mac; la tablet solo muestra el chat. Funciona en cualquier tablet, sistema operativo y tamaño de pantalla.',
          },
        ],
        numberedItems: [
          '**En la máquina en casa:** instala Ollama (`brew install ollama` en macOS, descárgalo de ollama.com en Windows). Descarga un modelo: `ollama pull llama3.3:70b` (o cualquier modelo). Inicia Ollama con vinculación de red: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Instala Open WebUI** (la interfaz de chat más amigable para tablets): `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. Open WebUI ahora es accesible en `http://[IP-de-tu-máquina]:3000`.',
          '**Encuentra la IP local de tu máquina en casa:** en macOS, Ajustes del Sistema → Red → la red actual → Dirección IP. En Windows, ejecuta `ipconfig` en el Símbolo del sistema y busca la Dirección IPv4. Anota la IP (típicamente `192.168.x.x`).',
          '**En la tablet:** abre Safari (iPad) o Chrome (Android). Navega a `http://[IP-de-tu-máquina]:3000`. Crea una cuenta en Open WebUI (solo local, sin nube). Selecciona tu modelo del menú desplegable. Empieza a chatear.',
          '**Seguridad:** esta configuración es solo para la red local. No expongas el puerto 3000 a internet sin añadir autenticación en Open WebUI (tiene un sistema de cuenta de administrador integrado). La conexión es HTTP plano — no envíes información sensible por Wi-Fi público.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Marca la URL de Open WebUI de tu máquina en casa en la pantalla de inicio de tu tablet (en Safari: Compartir → Añadir a la pantalla de inicio; en Chrome: menú de tres puntos → Añadir a la pantalla de inicio). Esto hace que se sienta como una aplicación nativa. En iPad, las aplicaciones web a pantalla completa en Safari ocultan la barra del navegador para una experiencia similar a una aplicación.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-es.webp',
        imageCaption: 'IA remota desde una tablet en 4 pasos: instala Ollama en tu máquina en casa, descarga un modelo y Open WebUI, encuentra la IP de tu máquina, luego abre http://[IP]:3000 en el navegador de tu tablet — sin modelo almacenado en la tablet, ejecuta modelos 70B a 20 a 40 tok/seg.',
      },
      models: {
        id: 'models',
        title: 'Recomendaciones de modelos por dispositivo',
        content:
          '**La elección del modelo está determinada por la RAM disponible, no por las preferencias.** La tabla a continuación mapea la RAM del dispositivo al modelo más grande que se ejecuta a velocidad en tiempo real (más de 8 tokens/seg). Para la capa de modelos específicamente, consulta [Mejores modelos LLM para móviles en 2026](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm). Para el panorama más amplio de modelos en todos los niveles de hardware, consulta [Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026).',
        columns: ['Dispositivo / RAM', 'Modelo recomendado', 'Velocidad', 'Ideal para'],
        rows: [
          { 'Dispositivo / RAM': 'iPad Air M4 (12 GB)', 'Modelo recomendado': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'Velocidad': '~18 a 20 tok/seg', 'Ideal para': 'Asistencia de escritura, resumen' },
          { 'Dispositivo / RAM': 'iPad Air M3 / otros iPads de 8 GB', 'Modelo recomendado': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Velocidad': '~10 a 18 tok/seg (est.)', 'Ideal para': 'Redacción ligera, resúmenes' },
          { 'Dispositivo / RAM': 'iPad Pro M5 (12 GB / 16 GB)', 'Modelo recomendado': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Velocidad': '~32 a 38 tok/seg / ~20 a 23 tok/seg', 'Ideal para': 'Estación de trabajo LLM real, RAG, redacción de ficción' },
          { 'Dispositivo / RAM': 'Android 8 GB (Tab S10+)', 'Modelo recomendado': 'Phi-4 Mini Q4 mediante Termux+Ollama', 'Velocidad': '~10 a 15 tok/seg', 'Ideal para': 'Usuarios avanzados cómodos con Termux' },
          { 'Dispositivo / RAM': 'Android 6 GB', 'Modelo recomendado': 'Qwen3 1.7B Q4', 'Velocidad': '~15 a 20 tok/seg', 'Ideal para': 'Chat ligero, traducción, tareas simples' },
          { 'Dispositivo / RAM': 'Pixel Tablet (8 GB)', 'Modelo recomendado': 'Solo conexión remota', 'Velocidad': 'N/A', 'Ideal para': 'Tensor G2 demasiado lento para el dispositivo' },
          { 'Dispositivo / RAM': 'iPad mini 7 (A17 Pro, 8 GB)', 'Modelo recomendado': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Velocidad': 'Sin medir', 'Ideal para': 'Borradores ligeros, resúmenes' },
          { 'Dispositivo / RAM': 'iPad A16 (6 GB) / iPad 10.ª gen. (4 GB)', 'Modelo recomendado': 'Qwen3 1.7B Q4 o menor', 'Velocidad': 'Sin medir', 'Ideal para': 'Preguntas cortas; más, en remoto' },
          { 'Dispositivo / RAM': 'Galaxy Tab S11 Ultra (12 GB / 16 GB)', 'Modelo recomendado': 'Gemma 4 E4B / Phi-4 Mini Q4', 'Velocidad': 'Sin medir', 'Ideal para': 'Más multitarea (nivel de 16 GB)' },
          { 'Dispositivo / RAM': 'Cualquier tablet por remoto', 'Modelo recomendado': 'Cualquier modelo en la máquina en casa', 'Velocidad': '~20 a 40 tok/seg', 'Ideal para': 'Uso con calidad prioritaria, modelos 70B' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para la mayoría de las tareas cotidianas (redactar texto, responder preguntas, resumir contenido), Phi-4 Mini (3.8B) en una tablet es suficientemente capaz. Donde queda corto comparado con un modelo de 70B: razonamiento complejo de múltiples pasos, escritura creativa con matices y análisis de documentos largos. Para estas tareas, usa la conexión remota a una máquina en casa que ejecute un modelo más grande.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-es.webp',
        imageCaption: 'Mejor modelo por tablet: iPad Pro M5 (12 GB / 16 GB) alcanza de 32 a 38 tok/seg en Llama 3.2 3B; iPad Air M4 ejecuta Phi-4 Mini a 18 a 20 tok/seg; Android 8 GB alcanza de 10 a 15 tok/seg mediante Termux; el Pixel Tablet requiere conexión remota debido al lento chip Tensor G2.',
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends para IA local en tablet',
        content:
          '**La interfaz de chat que usas en la tablet afecta significativamente la usabilidad.** Algunos frontends están diseñados para móvil; otros son principalmente para escritorio y apenas tolerables en tablet.',
        items: [
          '**Open WebUI (navegador):** la mejor interfaz web adaptada a móvil para chat general. Funciona en cualquier IP local:puerto en Safari o Chrome. Se adapta bien a las proporciones de pantalla de la tablet. Recomendado para configuraciones de conexión remota.',
          '**PocketPal AI (app de iPad y Android):** gratis, de código abierto, importa modelos GGUF e incluye un benchmark integrado. La opción en el dispositivo más flexible en ambas plataformas.',
          '**Locally AI (app de iPad):** interfaz limpia al estilo Apple basada en MLX; la experiencia de primer uso más sencilla para usuarios no técnicos en iPad.',
          '**Google AI Edge Gallery (app de iPad y Android):** la app de Google centrada en Gemma; la forma más fácil de probar en el dispositivo los modelos pequeños de Google.',
          '**RisuAI (navegador, adaptada a móvil):** la mejor experiencia móvil para roleplay y ficción con tarjetas de personaje. Puede conectarse a una instancia remota de Ollama. Funciona en iPad Safari con una interfaz de calidad casi nativa.',
          '**SillyTavern (navegador):** funciona en iPad Safari conectado a una instancia remota de Ollama. No optimizado para móvil pero funcional. Algunas funciones de extensión no funcionan en Safari móvil.',
          '**Termux CLI (Android):** solo línea de comandos. Útil para tareas con scripts; no es práctico para uso conversacional sin una aplicación complementaria.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para roleplay y ficción con tarjetas de personaje en iPad, RisuAI conectado a una instancia remota de Ollama ejecutando Llama 3.3 70B es una combinación sólida en 2026. La interfaz móvil de RisuAI está diseñada para el tacto; la conexión remota da acceso a un modelo de 70B que produce una voz de personaje significativamente mejor que cualquier modelo que quepa en una tablet.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Buscar LLM Farm en la App Store.** Apple lo retiró en agosto de 2025. Usa PocketPal AI o Locally AI, o compila LLM Farm desde el código fuente.',
          '**Ejecutar un modelo 7B en una tablet de 8 GB.** A 5 a 8 tokens/seg, esto es demasiado lento para el uso conversacional. Usa modelos 3B para chat en el dispositivo en dispositivos de 8 GB; usa la conexión remota para calidad de 7B en adelante.',
          '**Usar el Termux de Play Store en Android.** La versión de Play Store de Termux está desactualizada y le faltan los paquetes necesarios para Ollama. Siempre instala Termux desde F-Droid.',
          '**Exponer Open WebUI a internet sin autenticación.** Open WebUI no tiene contraseña por defecto. Si lo expones más allá de tu red doméstica, cualquiera que encuentre la URL obtendrá acceso a tu modelo. Activa el sistema de cuenta de administrador y usa un firewall.',
          '**No cerrar otras aplicaciones antes de ejecutar en el dispositivo en iPad de 8 GB.** iOS expulsa las aplicaciones en segundo plano de la RAM. Un modelo 3B en un iPad de 8 GB usa ~3,5 GB; si iOS recupera esa memoria para otra aplicación, el modelo falla. Cierra todas las demás aplicaciones antes de iniciar la inferencia.',
          '**Esperar una interfaz de escritorio de calidad en navegadores móviles.** SillyTavern y algunos otros frontends son principalmente para escritorio. Su experiencia móvil en un navegador es funcional pero no pulida. Para una UX orientada a móvil, prefiere RisuAI o Open WebUI.',
          '**Escribir `ipad.local` en el navegador.** Safari necesita la dirección del equipo de casa —su IP o su nombre de host, por ejemplo `192.168.1.20:3000` o `mi-mac.local:3000`—, no el nombre de la tablet. Un nombre como `ipad.local` apunta a una tablet, no al equipo que ejecuta Ollama.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Documentación y GitHub de LLM Farm (iOS) — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [Ficha de la App Store](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Paquete de Ollama para Termux — [Termux](https://termux.dev) (instala Termux desde F-Droid)',
          'Compilación ARM de Ollama para Termux — [Documentación de Ollama](https://ollama.com/docs)',
          'Documentación de Open WebUI — [docs.openwebui.com](https://docs.openwebui.com)',
          'Especificaciones del chip Apple M5 para el iPad Pro, niveles de RAM y ancho de banda de memoria — [Apple Newsroom, octubre de 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Especificaciones del chip Apple M4 para el iPad Air y RAM — [Apple Newsroom, marzo de 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Resumen de modelos Gemma 4 y requisitos de memoria — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Chip y niveles de RAM del Samsung Galaxy Tab S11 Ultra — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Se puede ejecutar IA en un iPad?',
            a: 'Sí, en iPad Pro M5 (12 GB base / 16 GB en los niveles de 1 TB y 2 TB) y iPad Air M4 (12 GB). El iPad Pro M5 ejecuta Phi-4 Mini y Llama 3.2 3B en tiempo real usando PocketPal AI o Locally AI, aproximadamente un 25 a 30 % más rápido que el iPad Pro M4 anterior gracias a un mayor ancho de banda de memoria (153 GB/s frente a 120 GB/s). El iPad Air M4 ejecuta modelos de 3B a 4B con comodidad. Para modelos de 7B en adelante en un iPad, se recomienda la conexión remota a un Mac o PC en casa que ejecute Ollama — el iPad muestra el chat pero la máquina en casa gestiona la inferencia.',
          },
          {
            q: '¿Se ejecuta Ollama en un iPad?',
            a: 'No — Ollama no tiene una compilación de iPadOS compatible, por lo que no se puede instalar directamente en un iPad como sí puede hacerse en Android mediante Termux. "Ejecutar Ollama en iPad" significa ejecutar Ollama en un Mac o PC y conectarse a él desde el navegador del iPad (mediante Open WebUI en la IP local de la máquina en casa) — el iPad es una pantalla, no el motor de inferencia. Para una inferencia verdaderamente en el dispositivo en un iPad, usa una app en el dispositivo como PocketPal AI (modelos GGUF mediante llama.cpp) o Locally AI (modelos MLX).',
          },
          {
            q: '¿Se puede ejecutar IA en una tablet Android?',
            a: 'Sí, en dispositivos con 8 GB o más de RAM usando PocketPal AI o Termux + Ollama. El Samsung Galaxy Tab S10+ (12 GB de RAM) ejecuta Phi-4 Mini a ~10 a 15 tokens/seg. Los dispositivos con 6 GB de RAM pueden ejecutar Qwen3 1.7B. La configuración requiere Termux de F-Droid y comodidad con algunos comandos de terminal. La conexión remota a una máquina en casa es el camino más sencillo para la mayoría de los usuarios de tablet Android.',
          },
          {
            q: '¿Funciona la IA en el dispositivo en una tablet sin internet?',
            a: 'Sí. Una vez que el modelo está descargado y la aplicación instalada, la inferencia en el dispositivo en iPad (PocketPal AI, Locally AI) y Android (Termux + Ollama) funciona sin conexión a internet. Esta es una de las principales ventajas del dispositivo sobre la conexión remota — el enfoque de conexión remota requiere tu Wi-Fi en casa.',
          },
          {
            q: '¿Cuál es la mejor aplicación de IA para iPad?',
            a: 'Para inferencia en el dispositivo: PocketPal AI (código abierto, importa cualquier modelo GGUF) o Locally AI (interfaz más sencilla, MLX). LLM Farm ya no está disponible en la App Store. Para conexión remota a un servidor Ollama en casa: Open WebUI en Safari (el mejor chat general), RisuAI en Safari (el mejor para roleplay y ficción con personajes). La mejor opción depende de si quieres capacidad en el dispositivo, uso sin conexión o la mejor calidad de interfaz.',
          },
          {
            q: '¿Es seguro usar Termux + Ollama en Android?',
            a: 'Sí. Termux es un emulador de terminal Android bien establecido usado por millones de desarrolladores. Ollama en Termux sirve una API solo local (localhost:11434 por defecto) — no es accesible desde otros dispositivos en tu red a menos que cambies explícitamente la dirección de vinculación. Los archivos del modelo se almacenan en el almacenamiento privado de Termux, no en el almacenamiento compartido de Android.',
          },
          {
            q: '¿Puedo obtener respuestas de calidad similar a ChatGPT en una tablet de forma local?',
            a: 'Casi, pero con la configuración correcta. La calidad de los modelos en la nube de frontera suele requerir un modelo de 70B o más. En una tablet: el iPad Pro M5 (12 GB / 16 GB) no puede ejecutar modelos de 70B — solo caben modelos de 3B a 8B. Mediante conexión remota: si tu máquina en casa tiene una GPU de 24 GB (RTX 4090) o 64 GB de memoria unificada (Mac M5 Max), puede ejecutar Llama 3.3 70B, y tu tablet accede a esa calidad mediante Open WebUI en el navegador. Eso es lo más cercano a la calidad de IA en la nube en una tablet.',
          },
          {
            q: '¿Cómo mantengo mi servidor de Ollama en casa funcionando cuando cierro la tapa del portátil?',
            a: 'En macOS, configura la política de suspensión al cerrar la tapa: Ajustes del Sistema → Batería → desactiva "Activar Power Nap" y usa una herramienta como Amphetamine para evitar la suspensión cuando está conectado a la corriente. En Windows, ve a Opciones de energía → Cambiar la configuración del plan → "Nunca" para suspender cuando está conectado. Alternativamente, ejecuta Ollama en una máquina siempre encendida (mini PC, NAS o un portátil antiguo reutilizado) en lugar de tu portátil principal.',
          },
          {
            q: '¿Ejecutar IA en una tablet agota la batería rápidamente?',
            a: 'Sí — la inferencia en el dispositivo es intensiva en CPU/GPU y agota la batería mucho más rápido que navegar; el ritmo varía según el dispositivo y el modelo. Para un uso prolongado, mantén la tablet enchufada. La conexión remota a una máquina en casa consume significativamente menos batería de la tablet — la tablet solo muestra una página web.',
          },
          {
            q: '¿Las tablets sufren throttling térmico durante la inferencia de IA?',
            a: 'Sí, especialmente en iPad Air M4 y tablets Android sin refrigeración activa. El iPad Pro M5 tiene más margen térmico que el iPad Air, y muchas tablets Android sufren throttling antes bajo inferencia sostenida. Mitigaciones: usa fragmentos de generación más cortos (200 a 400 tokens por respuesta), mantén la tablet sobre una superficie dura y evita ejecutar otras aplicaciones que consuman mucho CPU simultáneamente.',
          },
          {
            q: '¿Qué teclado funciona mejor para el uso de IA en tablet?',
            a: 'El Apple Magic Keyboard para iPad Pro M5 (con trackpad) es la configuración más pulida — los atajos de teclado completos funcionan en Safari + Open WebUI, el trackpad permite seleccionar texto en respuestas largas. El Logitech Combo Touch es la alternativa económica. Android: cualquier teclado Bluetooth funciona con Termux, pero la experiencia es más tosca (solo terminal). Para trabajo de redacción, un iPad Pro + Magic Keyboard convierte la tablet en una estación de trabajo de IA centrada en la escritura.',
          },
          {
            q: '¿Puedo ejecutar SillyTavern en iPad?',
            a: 'Sí, mediante conexión remota. SillyTavern se ejecuta en un Mac o PC en casa, y Safari en iPad se conecta a él en la IP local. La interfaz móvil es funcional pero no pulida — algunas funciones de extensión (herramientas de regex, paneles de chat en grupo) funcionan pero se sienten estrechas. Para roleplay específicamente, RisuAI tiene mejor interfaz móvil que SillyTavern; ambos pueden conectarse al mismo backend de Ollama en tu máquina en casa.',
          },
          {
            q: '¿Puede una tablet manejar RAG de formato largo?',
            a: 'En el dispositivo, no — incrustar más de 1.000 documentos en una tablet no es práctico. Mediante conexión remota, sí — tu máquina en casa gestiona el pipeline de RAG, la tablet muestra la interfaz de chat. AnythingLLM ejecutándose en una máquina en casa y accedido mediante el navegador de la tablet gestiona colecciones de documentos de cualquier tamaño sin límite del lado de la tablet. Para estudiantes o trabajadores del conocimiento que quieran RAG en tablet, la conexión remota suele ser la opción más práctica.',
          },
          {
            q: '¿Puedo usar pantallas externas con IA en tablet?',
            a: 'Sí, en iPad Pro M5 (Stage Manager + pantalla externa da una configuración de múltiples ventanas; Open WebUI en el monitor externo, notas/documentos fuente en la pantalla del iPad). Galaxy Tab S10 Ultra admite el modo DeX con una pantalla externa para un flujo de trabajo de IA con múltiples monitores similar. Las tablets Android sin modo DeX duplican la pantalla — menos útil. iPad Pro + monitor externo + Magic Keyboard es lo más cerca que puede llegar una tablet a una estación de trabajo de IA real en 2026.',
          },
          {
            q: '¿Es una tablet mejor que un teléfono para IA local?',
            a: 'Para el uso intensivo en escritura (redacción, RAG, conversaciones largas), sí — el soporte de teclado y el tamaño de pantalla importan. Para chat rápido, consultas de voz o uso en movimiento, el teléfono que ya llevas es mejor. El iPad Pro M5 es la tablet con más probabilidades de superar a un teléfono insignia para IA local; las tablets y teléfonos de gama media son aproximadamente equivalentes. La mayoría de los lectores no deberían comprar una tablet específicamente para IA local — cómprate una si la quieres por otras razones; la capacidad de IA es un bonus.',
          },
          {
            q: '¿Por qué la IA local va tan lenta en mi tablet?',
            a: 'Normalmente por una de cuatro causas: el modelo es demasiado grande para la RAM libre (el sistema usa swap o cierra la app), la generación está limitada por el ancho de banda de memoria y no por la velocidad del chip, la tablet sufre throttling térmico, o hay aplicaciones en segundo plano usando memoria. Soluciones: cambia a un modelo más pequeño o a cuantización Q4, cierra otras aplicaciones, mantén la tablet fría y enchufada, y mide la velocidad real con el benchmark integrado de PocketPal AI. Si un modelo 3B sigue siendo demasiado lento, usa la conexión remota a una máquina en casa.',
          },
          {
            q: '¿Qué tablets pueden ejecutar un LLM local (iPad Air M3, iPad de gama de entrada, Galaxy Tab A, Huawei MatePad, Xiaomi Pad)?',
            a: 'Deciden la RAM y el chip, no la marca. El iPad Air M3 (8 GB) maneja modelos de 1B a 3B; los iPads de gama de entrada y las tablets Android económicas con menos de 6 GB de RAM solo admiten modelos de 1B a 1.7B, así que para ellas es mejor la conexión remota. Los Huawei MatePad y Xiaomi Pad con 8 GB o más ejecutan las mismas apps que otras tablets Android, según su disponibilidad en la tienda de aplicaciones. Comprueba la RAM de tu tablet en sus ajustes y sigue la tabla de modelos de arriba.',
          },
          {
            q: '¿Existe una app de Ollama para iPad?',
            a: 'No hay una app oficial de Ollama para iPadOS. Existen clientes de terceros para iPad que se conectan a un servidor Ollama en tu Mac o PC — por ejemplo [GetOAI](https://apps.apple.com/app/id6752573799) y [LLLM](https://apps.apple.com/app/id6749804212) — pero solo muestran el chat; el modelo sigue ejecutándose en la máquina en casa. Revisa cada ficha de la App Store antes de instalar. La vía del navegador (Open WebUI en Safari) no necesita ninguna app.',
          },
          {
            q: '¿Puedo ejecutar un LLM local en una tablet Android sin terminal?',
            a: 'Sí. PocketPal AI (gratis, de código abierto, en Google Play) y Google AI Edge Gallery (gratis, Apache 2.0) descargan y ejecutan modelos en el dispositivo sin Termux. Termux + Ollama solo hace falta si quieres específicamente el ecosistema de Ollama o un endpoint de API local.',
          },
          {
            q: '¿Puede un iPad antiguo o de gama de entrada (iPad de 9.ª, 10.ª u 11.ª generación, iPad mini, iPad Air 5) ejecutar un LLM local?',
            a: 'La RAM decide. El iPad de 9.ª generación (3 GB), el de 10.ª (4 GB) y el iPad mini 6 (4 GB) se quedan cortos para un chat útil en el dispositivo: usa la conexión remota. El iPad de 11.ª generación (A16, 6 GB) admite modelos de 1B–1.7B en Q4. El iPad mini 7 (A17 Pro, 8 GB), el iPad Air 5 y el iPad Air M3 (8 GB) admiten modelos de 3B en Q4, dentro de los límites de 8 GB descritos arriba. Apple no publica la RAM de todos estos modelos; las cifras son las que se informan habitualmente, no una confirmación de Apple.',
          },
          {
            q: '¿Pueden el Galaxy Tab S11 Ultra o el Galaxy Tab S9 FE ejecutar un LLM local?',
            a: 'El Galaxy Tab S11 Ultra (Dimensity 9400+, 12 GB o 16 GB de RAM según la configuración) supera el umbral de 8 GB y ejecuta las mismas apps que el Tab S10+ —PocketPal AI, Google AI Edge Gallery o Termux + Ollama— con más margen para modelos de 3B–4B. El Galaxy Tab S9 FE se vende con 6 GB u 8 GB: la versión de 6 GB solo admite Qwen3 1.7B y la de 8 GB sigue la fila de 8 GB de la tabla de modelos. El Exynos 1380 es un chip de gama media, así que espera menos velocidad que en las tablets de gama alta.',
          },
          {
            q: '¿Gemma 4 funciona en una tablet?',
            a: 'Sí, las variantes pequeñas de Gemma 4. Google indica Gemma 4 E2B y E4B como tamaños para el dispositivo; con cuantización de 4 bits, Google da unos 2.9 GB (E2B) y 4.5 GB (E4B) de memoria para los pesos. Por eso E2B es la opción más segura en tablets de 8 GB y E4B encaja mejor desde 12 GB. La app para ejecutarlos en iPad y Android es Google AI Edge Gallery; consulta la [reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review). PromptQuorum no ha medido la velocidad de Gemma 4 en tablets.',
          },
          {
            q: '¿Qué apps gratuitas ejecutan un LLM local en el iPad?',
            a: 'PocketPal AI (gratis, MIT), Google AI Edge Gallery (gratis, Apache 2.0) y Locally AI (gratis, con opciones de pago) ejecutan modelos en el dispositivo sin coste. Open WebUI en Safari, conectado a Ollama en un Mac o PC, también es gratis. LLM Farm es gratis, pero hay que compilarlo desde el código fuente.',
          },
          {
            q: '¿Todavía puedo instalar LLM Farm en un iPad?',
            a: 'No desde la App Store. Apple retiró LLM Farm en agosto de 2025, y el README del proyecto indica que tanto la App Store como TestFlight no están disponibles temporalmente. La única vía es compilarlo desde el [código fuente](https://github.com/guinmoon/LLMFarm) en Xcode. Su última actualización upstream fue el 30 de enero de 2026, así que puede estar sin mantenimiento. PocketPal AI y Locally AI son las alternativas instalables en iPad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — la app gratuita y de código abierto para iOS y Android recomendada arriba para uso en tablet en el dispositivo.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — chat en el dispositivo basado en MLX para iPad y iPhone.',
          '[Reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app Gemma de Google en el dispositivo para iOS y Android.',
          '[Reseña de LLM Farm](/es/power-local-llm/llm-farm-review) — por qué la app ya no está en la App Store y qué implica compilarla desde el código fuente.',
          '[Mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — guía compañera centrada en selecciones de aplicaciones específicas de iPhone y configuración.',
          '[Mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — guía compañera para selecciones de aplicaciones Android más allá de Termux + Ollama.',
          '[Mejores modelos LLM para móviles en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — guía compañera de la capa de modelos: qué modelo móvil elegir para cada tarea.',
          '[Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) — guía de construcción compañera para asistencia de voz móvil sin conexión.',
          '[La app de IA local más fácil para Windows, Mac y Linux](/es/power-local-llm/easiest-local-ai-app-windows-mac-linux) — el equivalente de escritorio para usuarios que configuran IA local en un Mac o PC.',
          '[Mejor app de IA local para PCs de gama baja](/es/power-local-llm/best-local-ai-app-low-end-pc) — recomendaciones para dispositivos con recursos limitados y poca RAM.',
          '[Mejor app de IA local para usuarios no técnicos](/es/power-local-llm/local-ai-app-non-technical-users) — comparación de experiencia de usuario centrada en incorporación y facilidad de uso.',
          '[SillyTavern vs Agnai vs RisuAI: Mejor frontend de roleplay local](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparación de interfaz móvil para roleplay con tarjetas de personaje en tablet.',
          '[LM Studio vs Jan vs GPT4All: Comparación completa](/es/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparación de aplicaciones de escritorio que complementa la guía de tablet.',
          '[Agentes de IA locales con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — conectar una tablet a una configuración de agente local habilitado para MCP en tu máquina en casa.',
          '[Mejores portátiles para LLM local](/es/local-llms/best-laptops-local-llm) — guía de dimensionamiento de hardware para la máquina en casa que se combina con una tablet mediante conexión remota.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — panorama más amplio de modelos en todos los niveles de hardware, incluyendo los no móviles.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ejecuta IA local en tu tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'Ejecuta IA local en un iPad o tablet Android: apps en el dispositivo (PocketPal AI, Locally AI), Termux + Ollama y por qué Ollama en iPad requiere conexión remota.',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=es`,
      url: 'https://www.promptquorum.com/es/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'es',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Ejecutar IA local en una tablet es práctico en 2026. Esta guía cubre la inferencia en el dispositivo y la conexión remota a una máquina en casa.',
      keywords: [
        'IA local en iPad',
        'LLM local en tablet Android',
        'Ollama iPad',
        'Termux Ollama',
        'PocketPal AI',
        'Locally AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'Cómo configurar un iPad para inferencia de IA local',
        'Cómo usar Termux y Ollama en Android',
        'Cómo conectarse a un Ollama remoto desde una tablet',
        'Selección de modelo según el hardware de la tablet',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Google AI Edge Gallery' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', 'name': 'inferencia de IA local' },
        { '@type': 'Thing', 'name': 'LLMs en tablet' },
        { '@type': 'Thing', 'name': 'apps de iPad para IA' },
        { '@type': 'Thing', 'name': 'inferencia en tablet Android' },
      ],
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: '태블릿에서 로컬 AI 실행하기: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: '아이패드·안드로이드 태블릿에서 AI 로컬 실행 2026',
    intro:
      '2026년에는 고급형 iPad와 RAM 8GB 이상의 안드로이드 기기에서 태블릿 로컬 AI 실행이 실용적입니다. 이 가이드는 iPad의 PocketPal AI·Locally AI·Google AI Edge Gallery 온디바이스 추론(LLM Farm은 더 이상 App Store에서 설치할 수 없음), Android의 PocketPal AI 및 Termux + Ollama, 그리고 로컬에서 추론을 실행할 수 없는 기기를 위한 원격 연결 대안(Wi-Fi를 통해 Ollama를 실행 중인 Mac이나 PC에 태블릿 연결)을 다룹니다. Ollama 자체를 iPad에서 직접 실행할 수 있는지도 설명합니다(불가능합니다. iPadOS에는 지원되는 Ollama 빌드가 없습니다).',
    metaDescription:
      'Ollama는 iPad에서 직접 실행되지 않지만 로컬 LLM은 가능합니다. PocketPal AI·Locally AI 온디바이스, Android Termux, Mac의 Ollama 원격 연결을 안내합니다.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ko.webp',
    twitterDescription:
      '2026년 iPad·안드로이드 태블릿에서 로컬 LLM 실행: 온디바이스 앱(PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama, Ollama를 실행하는 자택 Mac·PC 원격 연결 및 기기별 모델 선택.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'iPad 또는 안드로이드 기기에서 로컬로 AI를 실행하거나, 자택 LLM 설정에 원격으로 연결하고자 하는 태블릿 사용자. 클라우드 AI 서비스에 의존하지 않으려는 분들을 위한 안내입니다.',
    readTime: '12분 분량',
    educationalLevel: 'Beginner',
    primaryTerm: '태블릿에서 AI 실행',
    targetKeywords: [
      'iPad 로컬 AI 실행',
      '안드로이드 태블릿 LLM 로컬',
      'Ollama iPad 원격 연결',
      'Termux Ollama 안드로이드',
      'LLM Farm iPad',
      'PocketPal AI iOS LLM',
    ],
    leadAnswerBlock:
      '**태블릿에서 로컬 AI를 실행하는 방식은 두 가지입니다: 온디바이스 추론(태블릿 칩에서 모델이 직접 실행)과 원격 연결(태블릿이 Ollama를 실행 중인 자택 Mac·PC의 화면 역할). 온디바이스 추론은 iPad Pro M5(기본 스토리지 12GB, 1TB/2TB 모델 16GB, 이전 M4 세대보다 여유롭게 Phi-4 Mini·Llama 3.2 3B 실시간 실행), iPad Air M4(12GB, 3B~4B 모델 원활한 실행), RAM 8GB 이상의 고급형 안드로이드 기기(Samsung Galaxy Tab S10+, PocketPal AI 또는 Termux + Ollama)에서 실용적입니다. 자택 서버 IP를 통한 Open WebUI 또는 간단한 채팅 인터페이스 원격 연결은 RAM 용량·OS에 상관없이 모든 태블릿에서 작동하며, 태블릿을 강력한 자택 기기의 터치 단말로 활용할 수 있습니다. 대부분의 사용자에게 원격 연결이 더 나은 선택입니다: 자택 기기가 70B 모델을 실행하고 태블릿은 편리한 인터페이스를 제공합니다.**',
    quickAnswerTop: {
      ko: {
        question: 'iPad나 안드로이드 태블릿에서 로컬 AI 모델을 실행할 수 있습니까?',
        answer:
          '네, 고급형 기기에서 가능합니다. iPad Pro M5(기본 스토리지 12GB, 1TB/2TB 모델 16GB)는 PocketPal AI 또는 Locally AI를 사용해 이전 M4 세대보다 여유롭게 Phi-4 Mini(3.8B)와 Llama 3.2 3B를 실시간으로 실행합니다. iPad Air M4(12GB)는 3B~4B 모델을 원활하게 실행합니다. RAM 8GB 이상의 안드로이드 태블릿(Samsung Galaxy Tab S10+)은 PocketPal AI 또는 Termux + Ollama를 통해 Phi-4 Mini와 Qwen3 1.7B를 로컬로 실행할 수 있습니다. Ollama 자체는 iPadOS에서 네이티브로 실행되지 않습니다 — Ollama를 특별히 원하는 사용자는 Mac·PC에 원격 연결해야 합니다. RAM이 부족하거나 구형 칩의 태블릿은 원격 연결을 권장합니다: 자택 네트워크의 Mac·PC에서 Ollama를 실행하고 태블릿 브라우저의 Open WebUI로 접속하십시오.',
        bullets: [
          'iPad Pro M5(12GB / 16GB) — PocketPal AI 또는 Locally AI로 Phi-4 Mini·Llama 3.2 3B를 로컬 실시간 실행, 향상된 메모리 대역폭 덕분에 이전 M4 세대보다 빠름.',
          'iPad Air M4(12GB) — 3B~4B 모델을 사용 가능한 속도로 실행; 7B 모델은 느리지만 동작.',
          '안드로이드 태블릿(RAM 8GB 이상) — PocketPal AI(터미널 불필요) 또는 Termux + Ollama로 Phi-4 Mini·Qwen3 1.7B 로컬 실행.',
          'Ollama 자체는 네이티브 iPadOS 빌드가 없습니다 — "iPad에서 Ollama 실행"은 iPad에 설치하는 것이 아니라 Ollama를 실행하는 Mac·PC에 원격 연결하는 것을 의미합니다.',
          '원격 연결 — RAM·OS 무관 모든 태블릿: 브라우저 Open WebUI로 자택 Mac·PC의 Ollama 접속.',
          '대부분의 태블릿 최적 온디바이스 모델: Phi-4 Mini(3.8B, ~2.7GB) 또는 RAM 제한 기기용 Qwen3 1.7B.',
          '7B 이상 모델에는 원격 연결 권장 — 자택 기기가 태블릿보다 빠르게 모델 실행.',
          'SillyTavern·RisuAI는 iPad Safari·Android Chrome에서 작동하는 모바일 최적화 인터페이스 제공.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '두 가지 모드: 온디바이스 vs 원격 연결', anchor: '#two-modes' },
      { label: 'iPad: 온디바이스 추론', anchor: '#ipad-on-device' },
      { label: 'Android: 온디바이스 추론', anchor: '#android-on-device' },
      { label: '자택 기기 원격 연결', anchor: '#remote-connection' },
      { label: '기기별 모델 추천', anchor: '#models' },
      { label: '태블릿 로컬 AI 프런트엔드', anchor: '#frontends' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**온디바이스 추론은 iPad Pro M5(12GB / 16GB), iPad Air M4(12GB)와 고급형 안드로이드(8GB 이상)에서 실용적입니다.** 이 임계치 이하에서는 생성 속도가 실시간 사용에 너무 느립니다. 대부분의 태블릿 사용자에게는 자택 기기 원격 연결이 최선의 방법입니다.',
          '**원격 연결이 대부분의 사람들에게 권장하는 접근 방식입니다.** 자택 Wi-Fi 네트워크의 Mac·PC에서 Ollama를 실행하고 태블릿(RAM·OS 무관)을 연결하십시오. 자택 기기가 70B 모델을 실행하고 태블릿은 터치 채팅 인터페이스를 제공합니다. 태블릿에 모델을 다운로드할 필요가 없습니다.',
          '**PocketPal AI, Locally AI, Google AI Edge Gallery가 현재 iPad 온디바이스 옵션입니다.** PocketPal AI는 GGUF 모델을 가져오고, Locally AI는 Apple Silicon용 MLX 모델을 실행하며, Google AI Edge Gallery는 Google의 Gemma 모델을 실행합니다. LLM Farm은 2025년 8월 App Store에서 삭제되었고 마지막 업데이트는 2026-01-30입니다 — 소스에서 직접 빌드하는 옵션으로만 보십시오.',
          '**안드로이드에서는 PocketPal AI가 가장 쉽고, Termux + Ollama가 가장 유연합니다.** PocketPal AI는 터미널 단계가 없는 Google Play 앱입니다. Termux + Ollama는 터미널 사용에 익숙해야 하지만 RAM 8GB 이상의 기기에서 Ollama 전체 생태계를 제공하며 localhost:11434에서 모델을 제공합니다.',
          '**대부분의 태블릿 최적 온디바이스 모델: Phi-4 Mini(3.8B).** 사용 가능한 RAM 6GB 이상의 기기에서 작동하며, 일상적인 대부분의 작업에서 사용 가능한 출력을 생성하고 빠른 연결 시 5~10분 내 다운로드 가능합니다.',
          '**태블릿 브라우저에서 Open WebUI가 가장 간단한 원격 연결 인터페이스입니다.** 자택 Mac·PC가 `192.168.x.x:3000`에서 Open WebUI를 실행하고 있다면, 태블릿 브라우저에서 해당 주소를 여십시오 — 앱 설치 없이, 설정 없이, 완전한 채팅 인터페이스를 제공합니다.',
          '**SillyTavern은 모바일 최적화 인터페이스를 제공합니다.** 태블릿에서 캐릭터 카드 롤플레이 및 픽션 사용 시, 자택 기기에서 실행 중인 SillyTavern을 태블릿 브라우저로 접속하면 잘 작동합니다; RisuAI는 가장 뛰어난 네이티브 모바일 지원을 제공합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**iPad 앱:** PocketPal AI(무료, MIT), Locally AI(무료 + 유료 옵션, MLX), Google AI Edge Gallery(무료, Apache 2.0). LLM Farm(무료, MIT, iOS 전용)은 2025년 8월 App Store에서 삭제되어 이제 소스에서 직접 빌드해야 합니다.',
          '**안드로이드 방법:** PocketPal AI 또는 Google AI Edge Gallery(앱, 터미널 불필요), 또는 Termux + Ollama(CLI).',
          '**원격 연결:** 태블릿 브라우저 → 자택 기기 로컬 IP의 Open WebUI 또는 간단한 채팅 인터페이스. Ollama에 네이티브 iPadOS 빌드가 없기 때문에 iPad 사용자도 이 방식으로 Ollama를 이용합니다.',
          '**온디바이스 최소 사양:** iPad Air M4(12GB) — 3B~4B 모델; iPad Pro M5(12GB / 16GB) — 7B~8B 모델.',
          '**안드로이드 온디바이스 최소 사양:** RAM 8GB 기기(Samsung Galaxy Tab S10+, OnePlus Pad 2).',
          '**최적 온디바이스 모델:** 대부분의 태블릿에 Phi-4 Mini(3.8B, 2.7GB); 매우 제한된 기기에 Qwen3 1.7B.',
          '**원격 연결 속도:** 태블릿 하드웨어가 아닌 Wi-Fi 품질과 자택 기기 생성 속도에 의존합니다.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: '두 가지 모드: 온디바이스 vs 원격 연결',
        content:
          '**가장 중요한 결정은 어떤 앱을 사용할지가 아니라, 태블릿에서 추론을 실행할지 자택의 더 강력한 기기에서 실행할지입니다.** 각 모드는 서로 다른 하드웨어 요구 사항과 성능 한계를 가집니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '태블릿에서 AI를 실행하는 실용적인 두 가지 모드: 온디바이스 추론(모델이 태블릿 칩에서 실행, 3B~7B 모델로 제한)과 원격 연결(태블릿이 Ollama와 Open WebUI를 통해 더 큰 모델을 실행하는 자택 Mac·PC의 브라우저 화면 역할).',
          },
          {
            type: 'plain-terms',
            text: '온디바이스 모드: 모델이 태블릿에 있어 오프라인으로 작동합니다. 소형 모델(3B, 고급형 iPad Pro라면 7B 정도)로 제한되며 클라우드 AI보다 느립니다. 원격 모드: 자택 Mac·PC가 Ollama와 70B 모델을 실행하고 태블릿은 브라우저에서 채팅만 표시합니다 — 태블릿 화면에서 70B 모델의 전체 품질을 얻고, 태블릿에 모델이 저장되지 않으며, 자택 기기가 켜져 동일한 Wi-Fi에 연결되어 있어야 합니다. 오프라인 사용이 특별히 필요하지 않다면 원격 연결을 선택하십시오.',
          },
        ],
        columns: ['요소', '온디바이스', '원격 연결'],
        rows: [
          { '요소': '모델 크기 한계', '온디바이스': '3B~8B(iPad Pro M5); 3B~4B(대부분의 태블릿)', '원격 연결': '무제한 — 자택 기기가 모든 모델 실행' },
          { '요소': '오프라인 사용', '온디바이스': '가능 — Wi-Fi 없이 작동', '원격 연결': '불가 — 자택 Wi-Fi 필요' },
          { '요소': '생성 속도', '온디바이스': '보통(iPad Pro M5 12~30 tok/초)', '원격 연결': '자택 기기에 의존(최대 40+ tok/초)' },
          { '요소': '태블릿 저장 공간', '온디바이스': '모델당 2~10GB', '원격 연결': '없음 — 모델이 자택 기기에 존재' },
          { '요소': '설정 복잡성', '온디바이스': '낮음(앱 + 모델 파일 다운로드)', '원격 연결': '낮음~중간(자택 기기에 Ollama + Open WebUI 필요)' },
          { '요소': '적합한 용도', '온디바이스': '여행, 오프라인 사용, 3B 모델 작업', '원격 연결': '품질 우선 사용, 70B 모델, 편의성' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '자택에 Ollama를 실행할 수 있는 Mac·PC가 있다면 원격 연결부터 시작하십시오. 모델 파일을 태블릿에 저장하거나 모바일 앱의 제한을 다룰 필요 없이 즉시 더 나은 모델 품질을 태블릿에서 얻을 수 있습니다. 오프라인 사용이 필요하다고 느끼면 나중에 온디바이스 기능을 추가하십시오.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-ko.svg',
        imageCaption: '태블릿 AI 두 가지 모드: 온디바이스 추론(모델이 태블릿 칩에서 실행, 오프라인 작동, 3B~8B 모델로 제한) vs 원격 연결(태블릿 브라우저가 Ollama를 사용하는 자택 Mac·PC에 연결, 태블릿에 모델 저장 없음, 무제한 모델 크기).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: 온디바이스 추론',
        content:
          '**iPad Pro M5는 7B~8B 모델에 가장 적합한 iPad입니다.** Apple은 M5 iPad Pro의 기본 RAM을 기존 M4 iPad Pro 기본 모델의 8GB에서 12GB로 늘리고(1TB/2TB 스토리지는 16GB), 메모리 대역폭도 120GB/s에서 153GB/s로 늘렸습니다 — Apple Silicon에서 LLM 추론은 메모리 대역폭에 의해 제한되므로, 이는 곧바로 더 빠른 생성 속도로 이어집니다. iPad Air M4(12GB, M3 Air의 8GB에서 증가)는 이제 3B~4B 모델을 단순히 "적절히"가 아니라 "원활하게" 실행합니다. iPad Air M3(8GB)와 그 밖의 8GB iPad는 Q4 기준 1B~3B 모델로 제한됩니다. [RAM 8GB의 iPhone도](/ko/power-local-llm/best-local-llm-apps-iphone-2026) LLM Farm을 통해 소형 모델을 실행합니다.',
        items: [
          '**PocketPal AI**(무료, 오픈소스 MIT, iOS + Android): llama.cpp로 GGUF 모델을 실행하며, 앱 안에서 Hugging Face 모델을 내려받거나 파일을 가져올 수 있고, 내장 벤치마크로 내 태블릿의 초당 토큰 수를 직접 측정할 수 있습니다. 마지막 업스트림 업데이트: 2026-10-19. [PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review)를 참조하십시오.',
          '**Locally AI**(무료 + 유료 옵션, 비공개 소스, iPhone/iPad/Mac): Apple Silicon용으로 만들어진 Apple의 MLX 프레임워크로 오픈 모델을 실행합니다. 마지막 App Store 업데이트: 2026-10-15. [Locally AI 리뷰](/ko/power-local-llm/locally-ai-review)를 참조하십시오.',
          '**Google AI Edge Gallery**(무료, Apache 2.0, iOS + Android): LiteRT-LM 런타임에서 Gemma 모델을 실행하는 Google의 온디바이스 앱입니다. 마지막 업스트림 업데이트: 2026-10-23. [Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review)를 참조하십시오. Gemma 4(E2B, E4B), 즉 Google의 최신 소형 온디바이스 모델도 실행합니다.',
          '**LLM Farm**(무료, MIT, iOS 전용): Apple이 2025년 8월 App Store 등록을 삭제했고, 프로젝트 README는 App Store와 TestFlight 모두 "일시적으로 이용 불가"로 표기합니다 — 유일한 방법은 Xcode에서 [소스](https://github.com/guinmoon/LLMFarm)를 직접 빌드하는 것입니다. 마지막 업스트림 업데이트: 2026-01-30으로 180일 넘게 지났으므로 유지 관리가 중단되었을 수 있습니다. 사용하기 전에 저장소를 확인하십시오. [LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review)를 참조하십시오.',
          '**모델 가져오기:** PocketPal AI에서는 앱 안에서 Hugging Face의 GGUF 모델을 내려받거나, Apple 파일로 전송한 GGUF 파일을 가져오십시오. 모델은 iCloud가 아닌 앱 로컬 스토리지에 저장됩니다.',
          '**iPad RAM 관리:** iOS는 백그라운드 앱의 RAM을 적극적으로 관리합니다. 12GB iPad에서 7B 모델 실행 전에 다른 모든 앱을 닫으십시오 — 다른 앱이 메모리를 필요로 하면 iOS가 모델을 제거합니다. 16GB iPad Pro M5(1TB/2TB 모델)에서는 거의 문제가 없습니다.',
          '**생성 속도 추정치(대략적인 값이며 PromptQuorum 벤치마크가 아님 — 내 기기는 PocketPal AI 내장 벤치마크로 직접 측정하십시오):** iPad Pro M5(12GB / 16GB): Phi-4 Mini ~25 tok/초, Llama 3.2 3B ~38 tok/초, Gemma 3 4B ~23 tok/초 — 메모리 대역폭 증가에 비례해 이전 M4 세대보다 약 25~30% 빠름. iPad Air M4(12GB): 3B~4B 모델 ~15~20 tok/초; 7B 모델 ~7~10 tok/초(여전히 실시간 채팅에는 느림).',
          '**보급형 iPad 및 RAM 8GB 이하 iPad:** Q4 기준 1B~3B 모델을 사용하거나 iPad를 원격 연결 화면으로 활용하십시오. 모델이 여유 RAM에 들어가지 않으면 iPadOS는 속도를 서서히 늦추는 대신 앱을 종료합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '12GB iPad Air에서 7B 모델을 실시간 채팅에 실행하려 하지 마십시오. 초당 7~10 토큰 속도로 각 응답은 여전히 10~20초가 걸립니다. 프롬프트를 보내고 기다리는 요약 작업에는 사용 가능하지만 대화용으로는 불편합니다. iPad Air에서는 3B~4B 모델을 사용하고, 7B 이상 모델을 위해서는 16GB iPad Pro M5로 업그레이드하거나 원격 연결로 전환하십시오.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-ko.svg',
        imageCaption: 'iPad 온디바이스 추론 속도: iPad Pro M5(12GB / 16GB)는 Phi-4 Mini·Llama 3.2 3B에서 23~38 tok/초 달성; iPad Air M4(12GB)는 3B~4B 모델을 15~20 tok/초로 실행하지만 7B 모델에서 7~10 tok/초로 하락 — 여전히 실시간 채팅에는 느림.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: 온디바이스 추론',
        content:
          '**안드로이드 온디바이스 추론은 [Termux + Ollama](/ko/power-local-llm/best-local-llm-apps-android-2026)를 사용합니다 — Termux는 Android에서 Ollama를 네이티브로 실행하는 Linux 터미널 에뮬레이터입니다.** iPad 앱 경험보다 기술적이지만 Ollama 전체 생태계에 접근할 수 있습니다.',
        numberedItems: [
          'F-Droid에서 Termux를 설치하십시오(Play Store 버전 아님 — Play Store 빌드는 구식이고 필요한 패키지가 없습니다).',
          'Termux에서: `pkg update && pkg upgrade`',
          'Termux 패키지 저장소에서 Ollama 설치: `pkg install ollama` (Go로 Ollama를 소스에서 빌드하던 예전 가이드는 더 이상 필요하지 않습니다).',
          '모델 다운로드: `ollama pull phi4-mini` 또는 `ollama pull qwen3:1.7b`.',
          '서버 시작: `ollama serve`(이 Termux 세션을 활성 상태로 유지).',
          'Termux로 채팅: `ollama run phi4-mini` — 또는 브라우저를 열어 `http://localhost:11434`로 이동해 API에 접속. 그래픽 인터페이스를 원하면 로컬 Ollama 엔드포인트에 연결하는 Android 채팅 앱을 설치하십시오.',
        ],
        items: [
          '**Termux의 쉬운 대안:** PocketPal AI(Google Play, 무료, MIT; 마지막 업스트림 업데이트 2026-10-19)와 Google AI Edge Gallery(무료, Apache 2.0; 마지막 업스트림 업데이트 2026-10-23)는 터미널 없이 온디바이스 모델을 실행합니다. Ollama가 꼭 필요한 경우가 아니라면 둘 중 하나로 시작하십시오. [PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review)를 참조하십시오.',
          '**3B 이상 모델 지원 기기:** 최소 RAM 8GB(Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). RAM 6GB 기기는 Qwen3 1.7B만 실행 가능.',
          '**Pixel Tablet 온디바이스 비권장:** Pixel Tablet(2023, 8GB Tensor G2)은 로컬 추론 권장 기기 목록에서 제외됩니다 — Tensor G2는 LLM 추론에서 Snapdragon 8 Gen 3·Dimensity 9300보다 현저히 느리며, Phi-4 Mini에서 4~7 tok/초(대화용으로 너무 느림)를 기록합니다. Pixel Tablet 사용자는 자택 기기 원격 연결을 사용하십시오.',
          '**Snapdragon 8 Gen 3·Dimensity 9300**은 2026년 온디바이스 추론에서 가장 빠른 Android 칩입니다. 생성 속도: 1.7B 모델 ~15~25 tok/초; 3B 모델 ~8~12 tok/초.',
          '**모델 저장:** Android에는 통합 메모리가 없습니다 — 대부분의 Termux 설정에서 모델은 GPU 가속 없이 시스템 RAM에서 실행됩니다. GPU 가속은 Termux:NVIDIA 또는 특정 Vulkan 빌드가 필요하며 설정이 더 복잡합니다.',
          '**대안 앱:** MNN LLM(Alibaba, 무료, 선택된 모델용 Android 온디바이스 추론 앱)은 설정이 더 간단하지만 Ollama보다 모델 선택이 제한적입니다. AI Runner·llamafile도 Android 빌드가 있으며 지원은 다양합니다. LLM Farm의 Android 버전은 존재하지 않습니다 — iOS 전용 앱이며, PocketPal AI가 가장 가까운 Android 대안입니다.',
          '**기타 브랜드(Huawei MatePad, Xiaomi Pad, Galaxy Tab A 시리즈):** 브랜드가 아니라 RAM과 칩이 결정합니다. 설정에서 태블릿 RAM을 확인하십시오: 6GB 미만이면 1B~1.7B 모델을 사용하거나 원격 연결을 이용하고, 8GB 이상이면 모델 표의 8GB 행을 따르십시오.',
          '일본 Xperia 전용 설정 가이드와 하드웨어 호환성 표는 <a href="/ko/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">일본 Xperia 스마트폰에서 로컬 LLM 실행 방법</a>을 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Termux:Widget 플러그인을 설치하고 "ollama serve"를 실행하는 바로가기를 만드십시오 — 이렇게 하면 Termux를 수동으로 열지 않고도 Android 홈 화면에서 Ollama 서버를 시작할 수 있습니다. Ollama가 서빙 중이면 localhost:11434에 연결하도록 설정된 채팅 앱을 열면 됩니다.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-ko.svg',
        imageCaption: 'Android 온디바이스 AI: Termux + Ollama 5단계 설정 — F-Droid에서 Termux 설치(Play Store 아님), 패키지 업데이트, pkg install ollama로 Ollama 설치, 모델 다운로드(phi4-mini 또는 qwen3:1.7b), localhost:11434에서 서버 시작. RAM 최소 8GB 필요.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: '자택 기기 원격 연결',
        content:
          '**대부분의 태블릿 사용자를 위한 가장 간단한 설정: 자택 Mac·PC에서 Ollama와 Open WebUI를 실행하고 동일한 Wi-Fi 네트워크의 태블릿 브라우저로 채팅 인터페이스에 접속하십시오.** 태블릿은 자택에서 Ollama를 실행하는 더 강력한 기기의 터치 인터페이스가 됩니다 — 자택 기기 하드웨어 선택 시 [노트북 가이드](/ko/local-llms/best-laptops-local-llm)를 참조하십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama·Open WebUI를 실행하는 자택 기기에 원격 연결하면 모든 태블릿이 브라우저를 통해 70B 모델에 완전히 접근할 수 있습니다 — 태블릿에 모델 저장 없음, 앱 설치 없음, 모델 품질 타협 없음.',
          },
          {
            type: 'plain-terms',
            text: 'Mac·PC에서: Ollama 설치, 모델 다운로드, Open WebUI 설치(단일 Docker 명령), 로컬 네트워크 IP에 바인딩하여 실행. 태블릿에서: Safari 또는 Chrome 열어 http://[Mac-IP]:3000 접속, 완전한 AI 채팅 인터페이스 제공. 모델은 Mac에서 실행; 태블릿은 채팅만 표시. 모든 태블릿, OS, 화면 크기에서 작동.',
          },
        ],
        numberedItems: [
          '**자택 기기에서:** Ollama 설치(macOS: `brew install ollama`, Windows: ollama.com에서 다운로드). 모델 다운로드: `ollama pull llama3.3:70b`(또는 원하는 모델). 네트워크 바인딩으로 Ollama 시작: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Open WebUI 설치**(태블릿 친화적인 채팅 인터페이스): `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. Open WebUI는 이제 `http://[기기-IP]:3000`에서 접근 가능.',
          '**자택 기기 로컬 IP 확인:** macOS에서 시스템 설정 → 네트워크 → 현재 네트워크 → IP 주소. Windows에서 명령 프롬프트에서 `ipconfig` 실행 후 IPv4 주소 확인. IP를 기록하십시오(일반적으로 `192.168.x.x`).',
          '**태블릿에서:** Safari(iPad) 또는 Chrome(Android) 열기. `http://[기기-IP]:3000` 접속. Open WebUI에서 계정 생성(로컬 전용, 클라우드 없음). 드롭다운 메뉴에서 모델 선택. 채팅 시작.',
          '**보안:** 이 설정은 로컬 네트워크 전용입니다. 인증 없이 포트 3000을 인터넷에 노출하지 마십시오(Open WebUI는 내장 관리자 계정 시스템을 갖추고 있습니다). 연결은 일반 HTTP입니다 — 공공 Wi-Fi에서 민감한 정보를 전송하지 마십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '태블릿 홈 화면에 자택 기기의 Open WebUI URL을 북마크하십시오(Safari: 공유 → 홈 화면에 추가; Chrome: 점 세 개 메뉴 → 홈 화면에 추가). 이렇게 하면 네이티브 앱처럼 느껴집니다. iPad에서 Safari의 전체 화면 웹 앱은 앱과 유사한 경험을 위해 브라우저 바를 숨깁니다.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-ko.webp',
        imageCaption: '태블릿 원격 AI 4단계: 자택 기기에 Ollama 설치, 모델·Open WebUI 다운로드, 기기 IP 확인, 태블릿 브라우저에서 http://[IP]:3000 접속 — 태블릿에 모델 저장 없이 20~40 tok/초로 70B 모델 실행.',
      },
      models: {
        id: 'models',
        title: '기기별 모델 추천',
        content:
          '**모델 선택은 선호도가 아닌 사용 가능한 RAM에 의해 결정됩니다.** 아래 표는 기기 RAM을 실시간 속도(8 tok/초 이상)로 실행 가능한 가장 큰 모델에 매핑합니다. 모델 레이어에 대해서는 [2026년 모바일 LLM 모델 비교](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm)를, 모든 하드웨어 레벨의 더 넓은 모델 개요는 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
        columns: ['기기 / RAM', '권장 모델', '속도', '적합한 용도'],
        rows: [
          { '기기 / RAM': 'iPad Air M4(12GB)', '권장 모델': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', '속도': '~18~20 tok/초', '적합한 용도': '글쓰기 지원, 요약' },
          { '기기 / RAM': 'iPad Air M3 / 기타 8GB iPad', '권장 모델': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '속도': '~10~18 tok/초(추정)', '적합한 용도': '가벼운 초안 작성, 요약' },
          { '기기 / RAM': 'iPad Pro M5(12GB / 16GB)', '권장 모델': 'Llama 3.2 3B / Gemma 3 4B Q4', '속도': '~32~38 tok/초 / ~20~23 tok/초', '적합한 용도': '실제 LLM 워크스테이션, RAG, 픽션 작성' },
          { '기기 / RAM': 'Android 8GB(Tab S10+)', '권장 모델': 'Termux+Ollama로 Phi-4 Mini Q4', '속도': '~10~15 tok/초', '적합한 용도': 'Termux에 익숙한 고급 사용자' },
          { '기기 / RAM': 'Android 6GB', '권장 모델': 'Qwen3 1.7B Q4', '속도': '~15~20 tok/초', '적합한 용도': '가벼운 채팅, 번역, 간단한 작업' },
          { '기기 / RAM': 'Pixel Tablet(8GB)', '권장 모델': '원격 연결만', '속도': 'N/A', '적합한 용도': 'Tensor G2가 온디바이스에 너무 느림' },
          { '기기 / RAM': 'iPad mini 7(A17 Pro, 8GB)', '권장 모델': 'Llama 3.2 3B Q4 / Qwen3 1.7B', '속도': '미측정', '적합한 용도': '가벼운 초안, 요약' },
          { '기기 / RAM': 'iPad A16(6GB) / iPad 10세대(4GB)', '권장 모델': 'Qwen3 1.7B Q4 이하', '속도': '미측정', '적합한 용도': '짧은 질문, 그 이상은 원격' },
          { '기기 / RAM': 'Galaxy Tab S11 Ultra(12GB / 16GB)', '권장 모델': 'Gemma 4 E4B / Phi-4 Mini Q4', '속도': '미측정', '적합한 용도': '멀티태스킹 여유(16GB 구성)' },
          { '기기 / RAM': '모든 태블릿(원격)', '권장 모델': '자택 기기의 모든 모델', '속도': '~20~40 tok/초', '적합한 용도': '품질 우선 사용, 70B 모델' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '일상적인 대부분의 작업(텍스트 작성, 질문 응답, 콘텐츠 요약)에서 태블릿의 Phi-4 Mini(3.8B)는 충분히 유능합니다. 70B 모델 대비 부족한 점: 복잡한 다단계 추론, 섬세한 창의적 글쓰기, 장문 문서 분석. 이러한 작업에는 더 큰 모델을 실행하는 자택 기기에 원격 연결하십시오.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ko.webp',
        imageCaption: '태블릿별 최적 모델: iPad Pro M5(12GB / 16GB)는 Llama 3.2 3B에서 32~38 tok/초 달성; iPad Air M4는 Phi-4 Mini를 18~20 tok/초로 실행; Android 8GB는 Termux를 통해 10~15 tok/초 달성; Pixel Tablet은 느린 Tensor G2 칩으로 원격 연결 필요.',
      },
      frontends: {
        id: 'frontends',
        title: '태블릿 로컬 AI 프런트엔드',
        content:
          '**태블릿에서 사용하는 채팅 인터페이스는 사용성에 크게 영향을 미칩니다.** 일부 프런트엔드는 모바일용으로 설계되었으며, 다른 것들은 주로 데스크톱용으로 태블릿에서는 겨우 사용 가능합니다.',
        items: [
          '**Open WebUI(브라우저):** 일반 채팅용 최고의 모바일 친화적 웹 인터페이스. Safari 또는 Chrome에서 모든 로컬IP:포트에서 작동. 태블릿 화면 비율에 잘 적응. 원격 연결 설정에 권장.',
          '**PocketPal AI(iPad 및 Android 앱):** 무료, 오픈소스, GGUF 모델을 가져올 수 있고 내장 벤치마크를 제공합니다. 두 플랫폼 모두에서 가장 유연한 온디바이스 옵션입니다.',
          '**Locally AI(iPad 앱):** MLX 기반의 깔끔한 Apple 스타일 인터페이스; iPad에서 비전문가에게 가장 간단한 첫 실행 경험을 제공합니다.',
          '**Google AI Edge Gallery(iPad 및 Android 앱):** Gemma 중심의 Google 앱; Google의 소형 모델을 온디바이스에서 가장 쉽게 체험할 수 있습니다.',
          '**RisuAI(브라우저, 모바일 최적화):** 캐릭터 카드 롤플레이·픽션을 위한 최고의 모바일 경험. 원격 Ollama 인스턴스에 연결 가능. iPad Safari에서 거의 네이티브 수준의 인터페이스로 작동.',
          '**SillyTavern(브라우저):** 원격 Ollama 인스턴스에 연결된 iPad Safari에서 작동. 모바일 최적화되지 않았지만 기능적. 일부 확장 기능은 모바일 Safari에서 작동하지 않습니다.',
          '**Termux CLI(Android):** 명령줄 전용. 스크립팅 작업에 유용; 보조 앱 없이는 대화용으로 실용적이지 않음.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'iPad에서 캐릭터 카드 롤플레이·픽션 사용 시, Llama 3.3 70B를 실행하는 원격 Ollama 인스턴스에 연결된 RisuAI가 2026년에 강력한 조합입니다. RisuAI의 모바일 인터페이스는 터치에 최적화되었으며, 원격 연결은 태블릿에 들어갈 수 있는 어떤 모델보다 훨씬 나은 캐릭터 목소리를 생성하는 70B 모델에 접근할 수 있게 합니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**App Store에서 LLM Farm 검색.** Apple이 2025년 8월에 삭제했습니다. PocketPal AI 또는 Locally AI를 사용하거나, LLM Farm을 소스에서 직접 빌드하십시오.',
          '**8GB 태블릿에서 7B 모델 실행.** 5~8 tok/초 속도는 대화용으로 너무 느립니다. 8GB 기기 온디바이스 채팅에는 3B 모델을 사용하고, 7B 이상 품질은 원격 연결을 사용하십시오.',
          '**Android에서 Play Store의 Termux 사용.** Termux의 Play Store 버전은 구식이고 Ollama에 필요한 패키지가 없습니다. 항상 F-Droid에서 Termux를 설치하십시오.',
          '**인증 없이 Open WebUI를 인터넷에 노출.** Open WebUI는 기본적으로 비밀번호가 없습니다. 자택 네트워크 외부에 노출하면 URL을 찾은 누구든 모델에 접근할 수 있습니다. 관리자 계정 시스템을 활성화하고 방화벽을 사용하십시오.',
          '**8GB iPad에서 온디바이스 실행 전 다른 앱을 닫지 않음.** iOS는 RAM에서 백그라운드 앱을 제거합니다. 8GB iPad의 3B 모델은 ~3.5GB를 사용하며, iOS가 다른 앱을 위해 해당 메모리를 회수하면 모델이 실패합니다. 추론 시작 전 다른 모든 앱을 닫으십시오.',
          '**모바일 브라우저에서 데스크톱 수준의 인터페이스 기대.** SillyTavern과 일부 다른 프런트엔드는 주로 데스크톱용입니다. 브라우저에서의 모바일 경험은 기능하지만 세련되지 않습니다. 모바일 UX를 위해서는 RisuAI 또는 Open WebUI를 선호하십시오.',
          '**브라우저에 `ipad.local`을 입력하는 것.** Safari에는 집에 있는 컴퓨터의 IP 또는 호스트 이름(예: `192.168.1.20:3000`, `my-mac.local:3000`)을 입력해야 하며, 태블릿 자신의 이름이 아닙니다. `ipad.local` 같은 이름은 태블릿을 가리키며, Ollama가 실행 중인 컴퓨터를 가리키지 않습니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'LLM Farm(iOS) 문서 및 GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [App Store 등록 페이지](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Termux Ollama 패키지 — [Termux](https://termux.dev) (Termux는 F-Droid에서 설치)',
          'Ollama Termux ARM 빌드 — [Ollama 문서](https://ollama.com/docs)',
          'Open WebUI 문서 — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M5 칩 iPad Pro 사양, RAM 티어, 메모리 대역폭 — [Apple Newsroom, 2025년 10월](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Apple M4 칩 iPad Air 사양 및 RAM — [Apple Newsroom, 2026년 3월](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Gemma 4 모델 개요 및 메모리 요구 사항 — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Samsung Galaxy Tab S11 Ultra 칩 및 RAM 구성 — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPad에서 AI를 실행할 수 있습니까?',
            a: '네, iPad Pro M5(기본 12GB / 1TB, 2TB 모델은 16GB) 및 iPad Air M4(12GB)에서 가능합니다. iPad Pro M5는 PocketPal AI 또는 Locally AI를 사용해 Phi-4 Mini와 Llama 3.2 3B를 실시간으로 실행하며, 향상된 메모리 대역폭(153GB/s, 이전 120GB/s) 덕분에 이전 iPad Pro M4보다 약 25~30% 빠릅니다. iPad Air M4는 3B~4B 모델을 원활하게 실행합니다. iPad에서 7B 이상 모델에는 자택 Mac·PC에서 Ollama를 실행하는 원격 연결을 권장합니다 — iPad는 채팅을 표시하지만 자택 기기가 추론을 처리합니다.',
          },
          {
            q: 'iPad에서 Ollama가 실행됩니까?',
            a: '아니요 — Ollama는 지원되는 iPadOS 빌드가 없어서 Android에서 Termux를 통해 하는 것처럼 iPad에 직접 설치할 수 없습니다. "iPad에서 Ollama 실행"이란 Mac이나 PC에서 Ollama를 실행하고 iPad 브라우저에서 (자택 기기의 로컬 IP에 있는 Open WebUI를 통해) 접속하는 것을 의미합니다 — iPad는 추론 엔진이 아니라 화면입니다. iPad에서 진정한 온디바이스 추론을 원한다면 대신 PocketPal AI(llama.cpp를 통한 GGUF 모델)나 Locally AI(MLX 모델) 같은 온디바이스 앱을 사용하십시오.',
          },
          {
            q: '안드로이드 태블릿에서 AI를 실행할 수 있습니까?',
            a: '네, PocketPal AI 또는 Termux + Ollama를 사용해 RAM 8GB 이상의 기기에서 가능합니다. Samsung Galaxy Tab S10+(12GB RAM)는 Phi-4 Mini를 ~10~15 tok/초로 실행합니다. RAM 6GB 기기는 Qwen3 1.7B를 실행할 수 있습니다. 설정에는 F-Droid의 Termux와 일부 터미널 명령에 대한 친숙함이 필요합니다. 대부분의 Android 태블릿 사용자에게 자택 기기 원격 연결이 더 간단한 방법입니다.',
          },
          {
            q: '태블릿 온디바이스 AI가 인터넷 없이 작동합니까?',
            a: '네. 모델이 다운로드되고 앱이 설치되면 iPad(PocketPal AI, Locally AI)와 Android(Termux + Ollama)의 온디바이스 추론은 인터넷 연결 없이 작동합니다. 이것이 원격 연결 접근 방식 대비 온디바이스의 주요 이점 중 하나입니다 — 원격 연결 방식은 자택 Wi-Fi가 필요합니다.',
          },
          {
            q: 'iPad에서 최고의 AI 앱은 무엇입니까?',
            a: '온디바이스 추론: PocketPal AI(오픈소스, 모든 GGUF 모델 가져오기 가능) 또는 Locally AI(가장 간단한 인터페이스, MLX). LLM Farm은 더 이상 App Store에서 받을 수 없습니다. 자택 Ollama 서버에 원격 연결: Safari의 Open WebUI(최고의 일반 채팅), Safari의 RisuAI(롤플레이·캐릭터 픽션 최고). 최선의 선택은 온디바이스 기능, 오프라인 사용, 또는 최고의 인터페이스 품질 중 무엇을 원하느냐에 따라 다릅니다.',
          },
          {
            q: 'Android에서 Termux + Ollama는 안전합니까?',
            a: '네. Termux는 수백만 개발자가 사용하는 잘 검증된 Android 터미널 에뮬레이터입니다. Termux의 Ollama는 로컬 전용 API(기본적으로 localhost:11434)를 제공합니다 — 바인딩 주소를 명시적으로 변경하지 않는 한 네트워크의 다른 기기에서 접근할 수 없습니다. 모델 파일은 Android 공유 스토리지가 아닌 Termux의 개인 스토리지에 저장됩니다.',
          },
          {
            q: '태블릿에서 ChatGPT와 유사한 품질의 응답을 로컬로 얻을 수 있습니까?',
            a: '거의 가능하지만 올바른 설정이 필요합니다. 최상위 클라우드 모델 수준의 품질에는 일반적으로 70B 이상의 모델이 필요합니다. 태블릿에서: iPad Pro M5(12GB / 16GB)는 70B 모델을 실행할 수 없습니다 — 3B~8B 모델만 들어갑니다. 원격 연결을 통해: 자택 기기에 24GB GPU(RTX 4090) 또는 64GB 통합 메모리(Mac M5 Max)가 있다면 Llama 3.3 70B를 실행할 수 있고, 태블릿은 브라우저의 Open WebUI를 통해 그 품질에 접근합니다. 이것이 태블릿에서 클라우드 AI 품질에 가장 근접한 방법입니다.',
          },
          {
            q: '노트북 덮개를 닫아도 자택 Ollama 서버가 계속 실행되게 하려면 어떻게 해야 합니까?',
            a: 'macOS에서 덮개 닫기 절전 정책 설정: 시스템 설정 → 배터리 → "Power Nap 활성화" 비활성화, Amphetamine 같은 도구로 전원 연결 시 절전 방지. Windows에서 전원 옵션 → 전원 계획 설정 변경 → 전원 연결 시 "절대 안 함"으로 설정. 또는 주 노트북 대신 항상 켜진 기기(미니 PC, NAS, 재활용한 구형 노트북)에서 Ollama를 실행하십시오.',
          },
          {
            q: '태블릿에서 AI를 실행하면 배터리가 빨리 소모됩니까?',
            a: '네 — 온디바이스 추론은 CPU/GPU 집약적이어서 웹 브라우징보다 배터리를 훨씬 빠르게 소모하며, 소모 속도는 기기와 모델에 따라 다릅니다. 장시간 사용 시 태블릿을 충전 상태로 유지하십시오. 자택 기기에 원격 연결하면 태블릿 배터리 소모가 현저히 줄어듭니다 — 태블릿은 단지 웹 페이지를 표시합니다.',
          },
          {
            q: 'AI 추론 중에 태블릿에 열 쓰로틀링이 발생합니까?',
            a: '네, 특히 능동 냉각 없는 iPad Air M4 및 Android 태블릿에서 발생합니다. iPad Pro M5는 iPad Air보다 열 여유가 크며, 많은 Android 태블릿은 지속적인 추론 시 더 빨리 쓰로틀링됩니다. 완화 방법: 더 짧은 생성 청크(응답당 200~400 토큰) 사용, 딱딱한 표면 위에 태블릿 놓기, 동시에 CPU를 많이 사용하는 다른 앱 실행 피하기.',
          },
          {
            q: '태블릿 AI 사용에 가장 적합한 키보드는 무엇입니까?',
            a: 'iPad Pro M5용 Apple Magic Keyboard(트랙패드 포함)가 가장 세련된 설정입니다 — Safari + Open WebUI에서 전체 키보드 단축키 작동, 트랙패드로 긴 응답에서 텍스트 선택 가능. Logitech Combo Touch가 경제적인 대안입니다. Android: Bluetooth 키보드 모두 Termux에서 작동하지만 경험이 더 거칩니다(터미널 전용). 글쓰기 작업의 경우 iPad Pro + Magic Keyboard는 태블릿을 글쓰기 중심 AI 워크스테이션으로 변환합니다.',
          },
          {
            q: 'iPad에서 SillyTavern을 실행할 수 있습니까?',
            a: '네, 원격 연결을 통해 가능합니다. SillyTavern은 자택 Mac·PC에서 실행되고 iPad Safari가 로컬 IP로 연결됩니다. 모바일 인터페이스는 기능하지만 세련되지 않습니다 — 일부 확장 기능(regex 도구, 그룹 채팅 패널)은 작동하지만 좁게 느껴집니다. 롤플레이에 특화하여, RisuAI는 SillyTavern보다 더 나은 모바일 인터페이스를 갖추며, 둘 다 자택 기기의 동일한 Ollama 백엔드에 연결할 수 있습니다.',
          },
          {
            q: '태블릿에서 장문 RAG를 처리할 수 있습니까?',
            a: '온디바이스에서는 불가능합니다 — 태블릿에 1,000개 이상의 문서를 임베딩하는 것은 실용적이지 않습니다. 원격 연결을 통해서는 가능합니다 — 자택 기기가 RAG 파이프라인을 처리하고 태블릿은 채팅 인터페이스를 표시합니다. 자택 기기에서 실행되는 AnythingLLM을 태블릿 브라우저로 접속하면 태블릿 측 제한 없이 모든 크기의 문서 컬렉션을 처리합니다. 태블릿에서 RAG를 원하는 학생이나 지식 노동자에게 원격 연결이 대개 더 실용적인 옵션입니다.',
          },
          {
            q: '태블릿 AI와 함께 외부 모니터를 사용할 수 있습니까?',
            a: '네, iPad Pro M5에서는 Stage Manager + 외부 디스플레이로 다중 창 설정이 가능합니다; 외부 모니터에 Open WebUI, iPad 화면에 노트/원본 문서. Galaxy Tab S10 Ultra는 외부 디스플레이로 DeX 모드를 지원해 다중 모니터 AI 워크플로가 가능합니다. DeX 모드 없는 Android 태블릿은 화면을 미러링합니다 — 덜 유용합니다. iPad Pro + 외부 모니터 + Magic Keyboard는 2026년 태블릿이 실제 AI 워크스테이션에 가장 근접하게 됩니다.',
          },
          {
            q: '로컬 AI에 태블릿이 스마트폰보다 낫습니까?',
            a: '집중적인 타이핑 작업(초안 작성, RAG, 긴 대화)에는 네 — 키보드 지원과 화면 크기가 중요합니다. 빠른 채팅, 음성 쿼리, 이동 중 사용에는 이미 갖고 있는 스마트폰이 낫습니다. iPad Pro M5는 로컬 AI에서 플래그십 스마트폰을 능가할 가능성이 가장 높은 태블릿입니다; 중급 태블릿과 스마트폰은 대략 동등합니다. 대부분의 독자는 특별히 로컬 AI를 위해 태블릿을 구매해서는 안 됩니다 — 다른 이유로 원한다면 구매하십시오; AI 기능은 보너스입니다.',
          },
          {
            q: '내 태블릿에서 로컬 AI가 왜 이렇게 느립니까?',
            a: '보통 네 가지 원인 중 하나입니다: 모델이 여유 RAM에 비해 너무 크거나(시스템이 스왑하거나 앱을 종료함), 칩 속도가 아니라 메모리 대역폭이 생성 속도를 제한하거나, 태블릿이 열 쓰로틀링 중이거나, 백그라운드 앱이 메모리를 사용 중입니다. 해결 방법: 더 작은 모델이나 Q4 양자화로 바꾸고, 다른 앱을 닫고, 태블릿을 시원하게 유지하며 충전 상태로 두고, PocketPal AI의 내장 벤치마크로 실제 속도를 측정하십시오. 3B 모델도 여전히 너무 느리다면 자택 기기에 원격 연결을 사용하십시오.',
          },
          {
            q: '어떤 태블릿에서 로컬 LLM을 실행할 수 있습니까(iPad Air M3, 보급형 iPad, Galaxy Tab A, Huawei MatePad, Xiaomi Pad)?',
            a: '브랜드가 아니라 RAM과 칩이 결정합니다. iPad Air M3(8GB)는 1B~3B 모델을 처리합니다. RAM 6GB 미만의 보급형 iPad와 저가형 Android 태블릿은 1B~1.7B 모델만 들어가므로 원격 연결이 더 나은 선택입니다. RAM 8GB 이상의 Huawei MatePad와 Xiaomi Pad는 앱 스토어 제공 여부에 따라 다른 Android 태블릿과 같은 앱을 실행합니다. 태블릿 설정에서 RAM을 확인한 뒤 위의 모델 표를 따르십시오.',
          },
          {
            q: 'iPad용 Ollama 앱이 있습니까?',
            a: 'iPadOS용 공식 Ollama 앱은 없습니다. Mac이나 PC의 Ollama 서버에 연결하는 서드파티 iPad 클라이언트는 있습니다 — 예를 들어 [GetOAI](https://apps.apple.com/app/id6752573799)와 [LLLM](https://apps.apple.com/app/id6749804212) — 하지만 이들은 채팅만 표시하며 모델은 여전히 자택 기기에서 실행됩니다. 설치 전에 각 App Store 등록 페이지를 확인하십시오. 브라우저 방식(Safari의 Open WebUI)은 앱이 전혀 필요 없습니다.',
          },
          {
            q: '터미널 없이 Android 태블릿에서 로컬 LLM을 실행할 수 있습니까?',
            a: '네. PocketPal AI(무료, 오픈소스, Google Play)와 Google AI Edge Gallery(무료, Apache 2.0)는 Termux 없이 기기에서 모델을 내려받아 실행합니다. Termux + Ollama는 Ollama 생태계나 로컬 API 엔드포인트가 꼭 필요한 경우에만 필요합니다.',
          },
          {
            q: '구형 또는 보급형 iPad(iPad 9·10·11세대, iPad mini, iPad Air 5)에서 로컬 LLM을 실행할 수 있습니까?',
            a: 'RAM이 좌우합니다. iPad 9세대(3GB), 10세대(4GB), iPad mini 6(4GB)는 기기 내 채팅에 쓰기에는 부족하므로 원격 연결을 사용하십시오. iPad 11세대(A16, 6GB)는 Q4의 1B–1.7B 모델까지 가능합니다. iPad mini 7(A17 Pro, 8GB), iPad Air 5, iPad Air M3(8GB)는 위에서 설명한 8GB 한계 안에서 Q4의 3B 모델을 실행할 수 있습니다. Apple은 이 모델들의 RAM을 모두 공개하지는 않습니다. 수치는 널리 보도된 값이며 Apple이 확인한 값은 아닙니다.',
          },
          {
            q: 'Galaxy Tab S11 Ultra나 Galaxy Tab S9 FE에서 로컬 LLM을 실행할 수 있습니까?',
            a: 'Galaxy Tab S11 Ultra(Dimensity 9400+, 구성에 따라 12GB 또는 16GB RAM)는 8GB 기준을 넘으며 Tab S10+와 같은 앱(PocketPal AI, Google AI Edge Gallery, Termux + Ollama)을 사용할 수 있습니다. 3B–4B 모델에는 더 여유가 있습니다. Galaxy Tab S9 FE는 6GB와 8GB 구성이 있습니다. 6GB 모델은 Qwen3 1.7B까지, 8GB 모델은 모델 표의 8GB 행을 따르십시오. Exynos 1380은 중급 칩이므로 플래그십 태블릿보다 속도가 낮을 것으로 예상됩니다.',
          },
          {
            q: 'Gemma 4를 태블릿에서 실행할 수 있습니까?',
            a: '예, 소형 Gemma 4 모델은 가능합니다. Google은 Gemma 4 E2B와 E4B를 온디바이스용 크기로 제시하며, 4비트 양자화에서 가중치용 메모리로 약 2.9GB(E2B)와 약 4.5GB(E4B)를 제시합니다. 따라서 8GB 태블릿에는 E2B가 더 안전하고, E4B는 12GB 이상에 적합합니다. iPad와 Android에서 실행하는 앱은 Google AI Edge Gallery입니다([Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) 참조). PromptQuorum은 태블릿에서 Gemma 4의 속도를 측정하지 않았습니다.',
          },
          {
            q: 'iPad에서 로컬 LLM을 실행하는 무료 앱은 무엇입니까?',
            a: 'PocketPal AI(무료, MIT), Google AI Edge Gallery(무료, Apache 2.0), Locally AI(무료, 유료 옵션 포함)는 비용 없이 기기에서 모델을 실행합니다. Mac이나 PC의 Ollama에 Safari의 Open WebUI로 연결하는 방법도 무료입니다. LLM Farm도 무료이지만 소스에서 빌드해야 합니다.',
          },
          {
            q: '지금도 iPad에 LLM Farm을 설치할 수 있습니까?',
            a: 'App Store에서는 설치할 수 없습니다. Apple은 2025년 8월 LLM Farm을 삭제했고, 프로젝트 README도 App Store와 TestFlight를 모두 일시적으로 이용할 수 없다고 안내합니다. 방법은 Xcode에서 [소스](https://github.com/guinmoon/LLMFarm)를 직접 빌드하는 것뿐입니다. 마지막 업스트림 업데이트는 2026년 1월 30일이므로 유지보수가 중단되었을 수 있습니다. iPad에서 설치 가능한 대안은 PocketPal AI와 Locally AI입니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 위에서 태블릿 온디바이스 사용에 권장한 무료 오픈소스 iOS·Android 앱.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — iPad와 iPhone용 MLX 기반 온디바이스 채팅.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — iOS·Android용 Google의 온디바이스 Gemma 앱.',
          '[LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review) — 이 앱이 App Store에서 사라진 이유와 소스 빌드에 필요한 과정.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 특화 앱 선택 및 설정에 초점을 맞춘 동반 가이드.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Termux + Ollama를 넘어선 Android 앱 선택을 위한 동반 가이드.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma 3 vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 모델 레이어 동반 가이드: 각 작업에 어떤 모바일 모델을 선택할지.',
          '[스마트폰에서 로컬 오프라인 음성 비서 구축](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 오프라인 모바일 음성 지원을 위한 동반 제작 가이드.',
          '[Windows, Mac, Linux용 가장 쉬운 로컬 AI 앱](/ko/power-local-llm/easiest-local-ai-app-windows-mac-linux) — Mac·PC에서 로컬 AI를 설정하는 사용자를 위한 데스크톱 버전.',
          '[저사양 PC용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-ai-app-low-end-pc) — 리소스가 제한된 저RAM 기기를 위한 추천.',
          '[비기술 사용자를 위한 최고의 로컬 AI 앱](/ko/power-local-llm/local-ai-app-non-technical-users) — 온보딩 및 사용 편의성 중심의 사용자 경험 비교.',
          '[SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프런트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 태블릿에서 캐릭터 카드 롤플레이를 위한 모바일 인터페이스 비교.',
          '[LM Studio vs Jan vs GPT4All: 전체 비교](/ko/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — 태블릿 가이드를 보완하는 데스크톱 앱 비교.',
          '[2026년 MCP를 활용한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — 태블릿을 자택 기기의 MCP 지원 에이전트 설정에 연결.',
          '[최고의 로컬 LLM 노트북](/ko/local-llms/best-laptops-local-llm) — 태블릿과 원격 연결로 결합하는 자택 기기의 하드웨어 사이징 가이드.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 모바일이 아닌 것을 포함한 모든 하드웨어 레벨의 더 넓은 모델 개요.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '태블릿에서 로컬 AI 실행하기: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        '2026년 iPad 또는 안드로이드 태블릿에서 AI를 로컬로 실행하는 방법. 온디바이스 추론 앱, Android Termux + Ollama, 자택 Mac·PC 원격 연결 설명.',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=ko`,
      url: 'https://www.promptquorum.com/ko/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        '태블릿에서 로컬 AI를 실행하는 것은 2026년에 실용적입니다. 이 가이드는 온디바이스 추론과 자택 기기 원격 연결을 다룹니다.',
      keywords: [
        'iPad 로컬 AI',
        '안드로이드 태블릿 LLM',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'PocketPal AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'iPad 로컬 AI 추론 설정 방법',
        'Android에서 Termux·Ollama 사용 방법',
        '태블릿에서 원격 Ollama 연결 방법',
        '태블릿 하드웨어에 따른 모델 선택',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', 'name': '로컬 AI 추론' },
        { '@type': 'Thing', 'name': '태블릿 LLM' },
        { '@type': 'Thing', 'name': 'iPad AI 앱' },
        { '@type': 'Thing', 'name': 'Android 태블릿 추론' },
      ],
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'Execute IA local no seu tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'Executar IA localmente no iPad e tablet Android 2026',
    intro:
      'Executar uma IA local em um tablet é prático em 2026 em iPads de alta gama e dispositivos Android com 8 GB ou mais de RAM. Este guia cobre as opções: inferência no dispositivo com PocketPal AI, Locally AI e Google AI Edge Gallery no iPad (o LLM Farm não pode mais ser instalado pela App Store), PocketPal AI e Termux + Ollama no Android, e a alternativa de conexão remota (conectar o tablet a um Mac ou PC que executa Ollama pela rede Wi-Fi local) para dispositivos que não conseguem executar inferência localmente — incluindo se o próprio Ollama roda diretamente em um iPad (não roda; o iPadOS não tem uma versão compatível do Ollama).',
    metaDescription:
      'O Ollama não roda no iPad, mas um LLM local sim: PocketPal AI ou Locally AI no aparelho, Termux no Android ou Ollama em um Mac via Wi-Fi.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-pt.webp',
    twitterDescription:
      'Execute IA no seu iPad ou tablet Android em 2026: apps no dispositivo (PocketPal AI, Locally AI, Google AI Edge Gallery), Termux + Ollama e conexão remota a um Mac/PC de casa que executa Ollama — com modelos recomendados por dispositivo.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'Usuários de tablet que querem executar IA localmente ou se conectar a uma configuração LLM em casa a partir do seu iPad ou dispositivo Android, sem depender de serviços de IA na nuvem.',
    readTime: '12 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'executar IA no tablet',
    targetKeywords: [
      'executar ia localmente no ipad',
      'executar llm local no tablet android',
      'ollama ipad conexao remota',
      'termux ollama android',
      'llm farm ipad',
      'pocketpal ai ios llm',
    ],
    leadAnswerBlock:
      '**Executar uma IA local em um tablet tem dois modos distintos: inferência no dispositivo (o modelo roda diretamente no chip do tablet) e conexão remota (o tablet é uma tela para um Mac ou PC em casa que executa o Ollama). A inferência no dispositivo é prática no iPad Pro M5 (12 GB nos níveis de armazenamento base, 16 GB nos modelos de 1 TB/2 TB — executa Phi-4 Mini e Llama 3.2 3B em tempo real com mais folga do que a geração M4 anterior), iPad Air M4 (12 GB, executa modelos de 3B a 4B com folga) e dispositivos Android de alta gama com 8 GB ou mais de RAM (Samsung Galaxy Tab S10+, via PocketPal AI ou Termux + Ollama). O Ollama em si não roda nativamente no iPadOS — não existe uma versão compatível para iPad —, então usuários de iPad que querem especificamente o Ollama precisam usar conexão remota a um Mac ou PC. A conexão remota via Open WebUI ou uma interface de chat simples no IP local do servidor de casa funciona em qualquer tablet, com qualquer quantidade de RAM e qualquer sistema operacional. Para a maioria das pessoas, a conexão remota é a melhor opção: a máquina em casa executa o modelo de 70B enquanto o tablet fornece a interface conveniente.**',
    quickAnswerTop: {
      pt: {
        question: 'Dá para executar um modelo de IA local em um iPad ou tablet Android?',
        answer:
          'Sim, em dispositivos de alta gama. O iPad Pro M5 (12 GB nos níveis de armazenamento base, 16 GB nos modelos de 1 TB/2 TB) executa Phi-4 Mini (3.8B) e Llama 3.2 3B em tempo real usando PocketPal AI ou Locally AI, com mais folga do que a geração M4 anterior. O iPad Air M4 (12 GB) executa modelos de 3B a 4B com folga. Os tablets Android com 8 GB ou mais de RAM (Samsung Galaxy Tab S10+) conseguem executar Phi-4 Mini e Qwen3 1.7B localmente via PocketPal AI ou Termux + Ollama. O Ollama em si não roda nativamente no iPadOS — usuários que querem especificamente o Ollama precisam de conexão remota a um Mac ou PC. Para tablets com menos RAM ou chips mais antigos, a alternativa prática é a conexão remota: conecte-se a um Mac ou PC na sua rede doméstica que executa Ollama, usando Open WebUI no navegador do tablet.',
        bullets: [
          'iPad Pro M5 (12 GB / 16 GB) — executa Phi-4 Mini e Llama 3.2 3B localmente em tempo real usando PocketPal AI ou Locally AI, mais rápido do que a geração M4 anterior graças à maior largura de banda de memória.',
          'iPad Air M4 (12 GB) — executa modelos de 3B a 4B em velocidade utilizável; modelos 7B são lentos, mas funcionais.',
          'Tablets Android (8 GB ou mais de RAM) — PocketPal AI (sem terminal) ou Termux + Ollama executa Phi-4 Mini e Qwen3 1.7B localmente.',
          'O Ollama em si não tem uma versão nativa para iPadOS — "executar Ollama no iPad" significa conectar-se remotamente a um Mac ou PC que o executa, não instalá-lo no iPad.',
          'Conexão remota — qualquer tablet, qualquer RAM: conecte-se ao seu Mac ou PC em casa que executa Ollama via Open WebUI no navegador.',
          'Melhor modelo no dispositivo para a maioria dos tablets: Phi-4 Mini (3.8B, ~2,7 GB) ou Qwen3 1.7B para dispositivos com RAM limitada.',
          'A conexão remota é recomendada sobre o dispositivo para modelos de 7B em diante — a máquina em casa executa o modelo mais rápido do que qualquer tablet.',
          'SillyTavern e RisuAI têm interfaces adaptadas para mobile que funcionam no iPad Safari / Android Chrome.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Dois modos: no dispositivo vs conexão remota', anchor: '#two-modes' },
      { label: 'iPad: inferência no dispositivo', anchor: '#ipad-on-device' },
      { label: 'Android: inferência no dispositivo', anchor: '#android-on-device' },
      { label: 'Conexão remota a uma máquina em casa', anchor: '#remote-connection' },
      { label: 'Recomendações de modelos por dispositivo', anchor: '#models' },
      { label: 'Frontends para IA local no tablet', anchor: '#frontends' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A inferência no dispositivo é prática no iPad Pro M5 (12 GB / 16 GB), iPad Air M4 (12 GB) e Android de alta gama (8 GB ou mais).** Abaixo desses limites, a geração é muito lenta para uso em tempo real. A conexão remota a uma máquina em casa é a melhor opção para a maioria dos usuários de tablet.',
          '**A conexão remota é a abordagem recomendada para a maioria das pessoas.** Conecte seu tablet (com qualquer RAM e sistema operacional) a um Mac ou PC que executa Ollama na sua rede doméstica. A máquina em casa executa o modelo de 70B; o tablet obtém uma interface de chat tátil.',
          '**PocketPal AI, Locally AI e Google AI Edge Gallery são as opções atuais de inferência no dispositivo no iPad.** O PocketPal AI importa modelos GGUF, o Locally AI executa modelos MLX feitos para Apple Silicon e o Google AI Edge Gallery executa os modelos Gemma do Google. O LLM Farm foi removido da App Store em agosto de 2025 e teve a última atualização em 30 de janeiro de 2026 — considere-o apenas uma opção de compilar a partir do código-fonte.',
          '**PocketPal AI é a abordagem mais fácil no Android; Termux + Ollama é a mais flexível.** O PocketPal AI é um app da Google Play sem etapa de terminal. Termux + Ollama exige conforto com o terminal, mas dá acesso a todo o ecossistema do Ollama em dispositivos com 8 GB ou mais de RAM, servindo o modelo em localhost:11434.',
          '**Melhor modelo no dispositivo para a maioria dos tablets: Phi-4 Mini (3.8B).** Funciona em qualquer dispositivo com 6 GB ou mais de RAM disponível; produz saídas utilizáveis para a maioria das tarefas cotidianas.',
          '**Open WebUI no navegador do tablet é a interface de conexão remota mais simples.** Se o seu Mac ou PC em casa executa Open WebUI em `192.168.x.x:3000`, abra esse endereço no navegador do seu tablet.',
          '**SillyTavern tem uma interface adaptada para mobile.** Para roleplay e uso com cartões de personagem no tablet, SillyTavern rodando em uma máquina em casa acessada pelo navegador do tablet funciona bem; RisuAI tem o melhor suporte mobile nativo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Aplicativos do iPad:** PocketPal AI (gratuito, MIT), Locally AI (gratuito + opções pagas, MLX), Google AI Edge Gallery (gratuito, Apache 2.0). O LLM Farm (gratuito, MIT, exclusivo do iOS) foi removido da App Store em agosto de 2025 e agora precisa ser compilado a partir do código-fonte.',
          '**Método Android:** PocketPal AI ou Google AI Edge Gallery (apps, sem terminal) ou Termux + Ollama (CLI).',
          '**Conexão remota:** qualquer navegador de tablet → Open WebUI ou uma interface de chat simples no IP local da sua máquina em casa. É assim também que usuários de iPad executam o Ollama, já que o Ollama não tem versão nativa para iPadOS.',
          '**Mínimo para o dispositivo:** iPad Air M4 (12 GB) para modelos de 3B a 4B; iPad Pro M5 (12 GB / 16 GB) para modelos de 7B a 8B.',
          '**Mínimo Android para o dispositivo:** dispositivo com 8 GB de RAM (Samsung Galaxy Tab S10+, OnePlus Pad 2).',
          '**Melhor modelo no dispositivo:** Phi-4 Mini (3.8B, 2,7 GB) para a maioria dos tablets; Qwen3 1.7B para dispositivos muito limitados.',
          '**Velocidade de conexão remota:** depende da qualidade do Wi-Fi e da velocidade de geração da máquina em casa, não do hardware do tablet.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'Dois modos: no dispositivo vs conexão remota',
        content:
          '**A decisão mais importante não é qual aplicativo usar, mas sim se executar a inferência no tablet ou em uma máquina mais poderosa em casa.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Executar IA em um tablet tem dois modos práticos: inferência no dispositivo (o modelo roda no chip do tablet, limitado a modelos de 3B a 7B) ou conexão remota (o tablet é uma tela de navegador para um Mac ou PC em casa que executa modelos maiores via Ollama e Open WebUI).',
          },
          {
            type: 'plain-terms',
            text: 'Modo no dispositivo: o modelo vive no seu tablet e funciona offline. Está limitado a modelos pequenos (3B, talvez 7B em um iPad Pro de alta gama) e é mais lento do que uma IA na nuvem. Modo remoto: seu Mac ou PC em casa executa o Ollama e um modelo de 70B, e seu tablet só exibe o chat em um navegador — você obtém a qualidade completa do modelo de 70B na tela do tablet, sem modelos armazenados no tablet. Escolha a conexão remota a menos que precise especificamente do uso offline.',
          },
        ],
        columns: ['Fator', 'No dispositivo', 'Conexão remota'],
        rows: [
          { 'Fator': 'Limite de tamanho do modelo', 'No dispositivo': '3B a 8B (iPad Pro M5); 3B a 4B (maioria dos tablets)', 'Conexão remota': 'Ilimitado — a máquina em casa executa qualquer modelo' },
          { 'Fator': 'Uso offline', 'No dispositivo': 'Sim — funciona sem Wi-Fi', 'Conexão remota': 'Não — requer Wi-Fi em casa' },
          { 'Fator': 'Velocidade de geração', 'No dispositivo': 'Moderada (12 a 30 tok/s no iPad Pro M5)', 'Conexão remota': 'Depende da máquina em casa (até 40+ tok/s)' },
          { 'Fator': 'Armazenamento no tablet', 'No dispositivo': '2 a 10 GB por modelo', 'Conexão remota': 'Nenhum — o modelo vive na máquina em casa' },
          { 'Fator': 'Complexidade de configuração', 'No dispositivo': 'Baixa (baixar app + arquivo de modelo)', 'Conexão remota': 'Baixa a média (a máquina em casa precisa de Ollama + Open WebUI)' },
          { 'Fator': 'Ideal para', 'No dispositivo': 'Viagens, uso offline, tarefas com modelos 3B', 'Conexão remota': 'Uso com qualidade prioritária, modelos 70B, conveniência' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se você já tem um Mac ou PC em casa que consegue executar o Ollama, comece com a conexão remota. Você obtém melhor qualidade de modelo no seu tablet imediatamente sem armazenar arquivos de modelo nele nem lidar com as limitações dos aplicativos móveis.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-pt.svg',
        imageCaption: 'Dois modos de IA no tablet: inferência no dispositivo (o modelo roda no chip do tablet, funciona offline, limitado a modelos de 3B a 8B) vs conexão remota (o navegador do tablet se conecta ao Mac/PC em casa com Ollama, sem modelo armazenado no tablet, tamanho de modelo ilimitado).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: inferência no dispositivo',
        content:
          '**O iPad Pro M5 é o iPad mais indicado para modelos de 7B a 8B.** A Apple elevou a RAM base do iPad Pro M5 para 12 GB (16 GB nos níveis de armazenamento de 1 TB/2 TB), ante os 8 GB do iPad Pro M4 base, e aumentou a largura de banda de memória de 120 GB/s para 153 GB/s — a inferência de LLM em Apple Silicon é limitada pela largura de banda de memória, então isso se traduz diretamente em geração mais rápida. O iPad Air M4 (12 GB, ante os 8 GB do M3 Air) agora executa modelos de 3B a 4B com folga, e não apenas adequadamente. O iPad Air M3 (8 GB) e outros iPads de 8 GB ficam limitados a modelos de 1B a 3B em Q4. [iPhones com 8 GB de RAM também executam modelos pequenos](/pt/power-local-llm/best-local-llm-apps-iphone-2026) por meio do LLM Farm.',
        items: [
          '**PocketPal AI** (gratuito, código aberto MIT, iOS + Android): executa modelos GGUF via llama.cpp, baixa modelos do Hugging Face dentro do app ou importa arquivos, e inclui um benchmark integrado para você medir os tokens por segundo do seu próprio tablet. Última atualização upstream: 19 de outubro de 2026. Veja a [análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (gratuito com opções pagas, código fechado, iPhone/iPad/Mac): executa modelos abertos pelo framework MLX da Apple, feito para Apple Silicon. Última atualização na App Store: 15 de outubro de 2026. Veja a [análise do Locally AI](/pt/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (gratuito, Apache 2.0, iOS + Android): app do Google para executar seus modelos Gemma no dispositivo, com o runtime LiteRT-LM. Última atualização upstream: 23 de outubro de 2026. Veja a [análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review). O app também roda o Gemma 4 (E2B e E4B), os modelos pequenos atuais do Google para uso no aparelho.',
          '**LLM Farm** (gratuito, MIT, exclusivo do iOS): a Apple removeu a página da App Store em agosto de 2025, e o README do projeto indica tanto a App Store quanto o TestFlight como "temporariamente indisponíveis" — o único caminho é compilar a partir do [código-fonte](https://github.com/guinmoon/LLMFarm) no Xcode. Última atualização upstream: 30 de janeiro de 2026, há mais de 180 dias, então pode estar sem manutenção; verifique o repositório antes de depender dele. Veja a [análise do LLM Farm](/pt/power-local-llm/llm-farm-review).',
          '**Importar modelos:** no PocketPal AI, baixe um modelo GGUF do Hugging Face dentro do app ou importe um arquivo GGUF transferido pelo app Arquivos da Apple. Os modelos ficam no armazenamento local do app — não no iCloud.',
          '**Gerenciamento de RAM no iPad:** o iOS gerencia a RAM de forma agressiva para aplicativos em segundo plano. Feche todos os outros aplicativos antes de executar um modelo 7B em um iPad de 12 GB. No iPad Pro M5 de 16 GB (níveis de 1 TB/2 TB), isso raramente é um problema.',
          '**Estimativas de velocidade de geração (aproximadas, não são benchmarks do PromptQuorum — use o benchmark integrado do PocketPal AI para medir o seu próprio dispositivo):** iPad Pro M5 (12 GB / 16 GB): Phi-4 Mini ~25 tok/s, Llama 3.2 3B ~38 tok/s, Gemma 3 4B ~23 tok/s — cerca de 25 a 30% mais rápido do que a geração M4 anterior, alinhado ao aumento na largura de banda de memória. iPad Air M4 (12 GB): modelos de 3B a 4B ~15 a 20 tok/s; modelos 7B ~7 a 10 tok/s (ainda lento para chat em tempo real).',
          '**iPads de entrada e iPads com 8 GB de RAM ou menos:** use modelos de 1B a 3B em Q4 ou trate o iPad como uma tela para conexão remota. Se um modelo não cabe na RAM livre, o iPadOS fecha o app em vez de ficar mais lento de forma gradual.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não tente executar um modelo 7B em um iPad Air de 12 GB para chat em tempo real. A 7 a 10 tokens por segundo, cada resposta ainda leva de 10 a 20 segundos. Use modelos de 3B a 4B no iPad Air; atualize para o iPad Pro M5 de 16 GB ou mude para a conexão remota para modelos 7B em diante.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-pt.svg',
        imageCaption: 'Velocidade de inferência no dispositivo no iPad: o iPad Pro M5 (12 GB / 16 GB) alcança de 23 a 38 tok/s no Phi-4 Mini e Llama 3.2 3B; o iPad Air M4 (12 GB) executa modelos de 3B a 4B a 15 a 20 tok/s, mas cai para 7 a 10 tok/s em modelos 7B — ainda lento para chat em tempo real.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: inferência no dispositivo',
        content:
          '**A inferência no dispositivo no Android usa [Termux + Ollama](/pt/power-local-llm/best-local-llm-apps-android-2026) — Termux é um emulador de terminal Linux que executa o Ollama nativamente no Android.**',
        numberedItems: [
          'Instale o Termux pelo F-Droid (não a versão da Play Store — a compilação da Play Store está desatualizada e faltam pacotes necessários).',
          'No Termux: `pkg update && pkg upgrade`',
          'Instale o Ollama pelo repositório de pacotes do Termux: `pkg install ollama` (guias antigos compilam o Ollama a partir do código-fonte com Go, o que não é mais necessário).',
          'Baixe um modelo: `ollama pull phi4-mini` ou `ollama pull qwen3:1.7b`.',
          'Inicie o servidor: `ollama serve` (mantenha esta sessão do Termux ativa).',
          'Chat via Termux: `ollama run phi4-mini` — ou abra um navegador e vá para `http://localhost:11434` para acessar a API.',
        ],
        items: [
          '**Alternativas mais fáceis ao Termux:** PocketPal AI (Google Play, gratuito, MIT; última atualização upstream em 19 de outubro de 2026) e Google AI Edge Gallery (gratuito, Apache 2.0; última atualização upstream em 23 de outubro de 2026) executam modelos no dispositivo sem terminal. Comece por um deles, a menos que você precise especificamente do Ollama. Veja a [análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
          '**Dispositivos compatíveis com modelos 3B ou mais:** mínimo 8 GB de RAM (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Dispositivos com 6 GB executam apenas Qwen3 1.7B.',
          '**Pixel Tablet não recomendado para o dispositivo:** o Pixel Tablet (modelo 2023, 8 GB Tensor G2) ficou fora da lista de dispositivos recomendados para inferência local — o Tensor G2 é significativamente mais lento do que o Snapdragon 8 Gen 3 / Dimensity 9300 para inferência LLM, produzindo 4 a 7 tok/s no Phi-4 Mini (lento demais para uso conversacional). Usuários do Pixel Tablet devem usar a conexão remota a uma máquina em casa.',
          '**Snapdragon 8 Gen 3 e Dimensity 9300** são os chips Android mais rápidos para inferência no dispositivo em 2026. Velocidade de geração: ~15 a 25 tok/s para modelos de 1.7B; ~8 a 12 tok/s para modelos 3B.',
          '**Aplicativos alternativos:** MNN LLM (Alibaba, gratuito, aplicativo Android com inferência no dispositivo para modelos selecionados) tem uma configuração mais simples, mas uma seleção de modelos mais limitada do que o Ollama. Não existe versão para Android do LLM Farm — é um aplicativo exclusivo do iOS; o PocketPal AI é o equivalente mais próximo no Android.',
          '**Outras marcas (Huawei MatePad, Xiaomi Pad, Galaxy Tab da série A):** quem decide são a RAM e o chip, não a marca. Verifique a RAM do tablet em Configurações: abaixo de 6 GB, fique com modelos de 1B a 1.7B ou use a conexão remota; com 8 GB ou mais, siga a linha de 8 GB da tabela de modelos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Instale o complemento Termux:Widget e crie um atalho que execute "ollama serve" — isso permite iniciar o servidor do Ollama na tela inicial do seu Android sem abrir o Termux manualmente.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-pt.svg',
        imageCaption: 'IA no dispositivo no Android: configuração em 5 passos do Termux + Ollama — instale Termux pelo F-Droid (não Play Store), atualize pacotes, instale Ollama com pkg install ollama, baixe um modelo (phi4-mini ou qwen3:1.7b), depois inicie o servidor em localhost:11434. Requer mínimo de 8 GB de RAM.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Conexão remota a uma máquina em casa',
        content:
          '**A configuração mais simples para a maioria dos usuários de tablet: execute Ollama e Open WebUI no seu Mac ou PC em casa, depois acesse a interface de chat pelo navegador do seu tablet na mesma rede Wi-Fi.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A conexão remota a uma máquina em casa que executa Ollama e Open WebUI dá a qualquer tablet acesso completo a modelos de 70B via navegador — sem modelo armazenado no tablet, sem instalar aplicativos e sem comprometer a qualidade do modelo.',
          },
          {
            type: 'plain-terms',
            text: 'No seu Mac ou PC: instale Ollama, baixe um modelo, instale Open WebUI (um único comando Docker) e execute-o vinculado ao IP da sua rede local. No seu tablet: abra Safari ou Chrome, vá para http://[IP-do-seu-Mac]:3000 e você terá uma interface de chat de IA completa. O modelo roda no Mac; o tablet apenas exibe o chat.',
          },
        ],
        numberedItems: [
          '**Na máquina em casa:** instale Ollama (`brew install ollama` no macOS, baixe de ollama.com no Windows). Baixe um modelo: `ollama pull llama3.3:70b`. Inicie o Ollama com vinculação de rede: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**Instale Open WebUI:** `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`.',
          '**Encontre o IP local da sua máquina em casa:** no macOS, Ajustes do Sistema → Rede → a rede atual → Endereço IP. No Windows, execute `ipconfig` no Prompt de Comando e procure o Endereço IPv4.',
          '**No tablet:** abra Safari (iPad) ou Chrome (Android). Navegue para `http://[IP-da-sua-máquina]:3000`. Crie uma conta no Open WebUI (apenas local, sem nuvem). Selecione seu modelo no menu suspenso. Comece a conversar.',
          '**Segurança:** esta configuração é apenas para a rede local. Não exponha a porta 3000 à internet sem adicionar autenticação no Open WebUI.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Marque a URL do Open WebUI da sua máquina em casa na tela inicial do seu tablet (no Safari: Compartilhar → Adicionar à tela inicial; no Chrome: menu de três pontos → Adicionar à tela inicial). Isso faz com que se pareça com um aplicativo nativo.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-pt.webp',
        imageCaption: 'IA remota de um tablet em 4 passos: instale Ollama na sua máquina em casa, baixe um modelo e Open WebUI, encontre o IP da sua máquina, depois abra http://[IP]:3000 no navegador do seu tablet — sem modelo armazenado no tablet, executa modelos 70B a 20 a 40 tok/s.',
      },
      models: {
        id: 'models',
        title: 'Recomendações de modelos por dispositivo',
        content:
          '**A escolha do modelo é determinada pela RAM disponível, não pelas preferências.**',
        columns: ['Dispositivo / RAM', 'Modelo recomendado', 'Velocidade', 'Ideal para'],
        rows: [
          { 'Dispositivo / RAM': 'iPad Air M4 (12 GB)', 'Modelo recomendado': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'Velocidade': '~18 a 20 tok/s', 'Ideal para': 'Assistência de escrita, resumo' },
          { 'Dispositivo / RAM': 'iPad Air M3 / outros iPads de 8 GB', 'Modelo recomendado': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Velocidade': '~10 a 18 tok/s (est.)', 'Ideal para': 'Rascunhos leves, resumos' },
          { 'Dispositivo / RAM': 'iPad Pro M5 (12 GB / 16 GB)', 'Modelo recomendado': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Velocidade': '~32 a 38 tok/s / ~20 a 23 tok/s', 'Ideal para': 'Estação de trabalho LLM real, RAG, redação de ficção' },
          { 'Dispositivo / RAM': 'Android 8 GB (Tab S10+)', 'Modelo recomendado': 'Phi-4 Mini Q4 via Termux+Ollama', 'Velocidade': '~10 a 15 tok/s', 'Ideal para': 'Usuários avançados confortáveis com Termux' },
          { 'Dispositivo / RAM': 'Android 6 GB', 'Modelo recomendado': 'Qwen3 1.7B Q4', 'Velocidade': '~15 a 20 tok/s', 'Ideal para': 'Chat leve, tradução, tarefas simples' },
          { 'Dispositivo / RAM': 'Pixel Tablet (8 GB)', 'Modelo recomendado': 'Apenas conexão remota', 'Velocidade': 'N/A', 'Ideal para': 'Tensor G2 muito lento para o dispositivo' },
          { 'Dispositivo / RAM': 'iPad mini 7 (A17 Pro, 8 GB)', 'Modelo recomendado': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'Velocidade': 'Não medido', 'Ideal para': 'Rascunhos leves, resumos' },
          { 'Dispositivo / RAM': 'iPad A16 (6 GB) / iPad 10ª ger. (4 GB)', 'Modelo recomendado': 'Qwen3 1.7B Q4 ou menor', 'Velocidade': 'Não medido', 'Ideal para': 'Perguntas curtas; mais, via remoto' },
          { 'Dispositivo / RAM': 'Galaxy Tab S11 Ultra (12 GB / 16 GB)', 'Modelo recomendado': 'Gemma 4 E4B / Phi-4 Mini Q4', 'Velocidade': 'Não medido', 'Ideal para': 'Mais multitarefa (faixa de 16 GB)' },
          { 'Dispositivo / RAM': 'Qualquer tablet por remoto', 'Modelo recomendado': 'Qualquer modelo na máquina em casa', 'Velocidade': '~20 a 40 tok/s', 'Ideal para': 'Uso com qualidade prioritária, modelos 70B' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para a maioria das tarefas cotidianas (redigir texto, responder perguntas, resumir conteúdo), Phi-4 Mini (3.8B) em um tablet é suficientemente capaz. Onde fica aquém em comparação com um modelo de 70B: raciocínio complexo de múltiplos passos, escrita criativa com nuances e análise de documentos longos. Para essas tarefas, use a conexão remota.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-pt.webp',
        imageCaption: 'Melhor modelo por tablet: iPad Pro M5 (12 GB / 16 GB) alcança de 32 a 38 tok/s no Llama 3.2 3B; iPad Air M4 executa Phi-4 Mini a 18 a 20 tok/s; Android 8 GB alcança de 10 a 15 tok/s via Termux; o Pixel Tablet requer conexão remota devido ao lento chip Tensor G2.',
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends para IA local no tablet',
        content:
          '**A interface de chat que você usa no tablet afeta significativamente a usabilidade.**',
        items: [
          '**Open WebUI (navegador):** a melhor interface web adaptada para mobile para chat geral. Funciona em qualquer IP local:porta no Safari ou Chrome. Recomendado para configurações de conexão remota.',
          '**PocketPal AI (app para iPad e Android):** gratuito, código aberto, importa modelos GGUF e tem benchmark integrado. A opção de inferência no dispositivo mais flexível nas duas plataformas.',
          '**Locally AI (app para iPad):** interface limpa no estilo Apple, construída sobre o MLX; a primeira experiência mais simples para usuários não técnicos no iPad.',
          '**Google AI Edge Gallery (app para iPad e Android):** app do Google focado em Gemma; a forma mais fácil de testar os modelos pequenos do Google no dispositivo.',
          '**RisuAI (navegador, adaptada para mobile):** a melhor experiência mobile para roleplay e ficção com cartões de personagem. Pode se conectar a uma instância remota do Ollama. Funciona no iPad Safari com uma interface de qualidade quase nativa.',
          '**SillyTavern (navegador):** funciona no iPad Safari conectado a uma instância remota do Ollama. Não otimizado para mobile, mas funcional.',
          '**Termux CLI (Android):** apenas linha de comando. Útil para tarefas com scripts; não é prático para uso conversacional sem um aplicativo complementar.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para roleplay e ficção com cartões de personagem no iPad, RisuAI conectado a uma instância remota do Ollama executando Llama 3.3 70B é uma combinação forte em 2026.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Procurar o LLM Farm na App Store.** A Apple o removeu em agosto de 2025. Use o PocketPal AI ou o Locally AI, ou compile o LLM Farm a partir do código-fonte.',
          '**Executar um modelo 7B em um tablet de 8 GB.** A 5 a 8 tokens/s, isso é muito lento para uso conversacional. Use modelos 3B para chat no dispositivo em dispositivos de 8 GB; use a conexão remota para qualidade de 7B em diante.',
          '**Usar o Termux da Play Store no Android.** A versão da Play Store do Termux está desatualizada e faltam os pacotes necessários para o Ollama. Sempre instale o Termux pelo F-Droid.',
          '**Expor o Open WebUI à internet sem autenticação.** O Open WebUI não tem senha por padrão. Se você o expuser além da sua rede doméstica, qualquer pessoa que encontrar a URL terá acesso ao seu modelo.',
          '**Não fechar outros aplicativos antes de executar no dispositivo no iPad de 8 GB.** O iOS expulsa os aplicativos em segundo plano da RAM. Feche todos os outros aplicativos antes de iniciar a inferência.',
          '**Esperar uma interface de desktop de qualidade em navegadores móveis.** SillyTavern e alguns outros frontends são principalmente para desktop. Para uma UX orientada a mobile, prefira RisuAI ou Open WebUI.',
          '**Digitar `ipad.local` no navegador.** O Safari precisa do endereço do computador de casa — o IP ou o nome do host, por exemplo `192.168.1.20:3000` ou `meu-mac.local:3000` —, não do nome do tablet. Um nome como `ipad.local` aponta para um tablet, não para o computador que roda o Ollama.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Documentação e GitHub do LLM Farm (iOS) — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [Página na App Store](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'Pacote Ollama do Termux — [Termux](https://termux.dev) (instale o Termux pelo F-Droid)',
          'Compilação ARM do Ollama para Termux — [Documentação do Ollama](https://ollama.com/docs)',
          'Documentação do Open WebUI — [docs.openwebui.com](https://docs.openwebui.com)',
          'Especificações do chip Apple M5 do iPad Pro, níveis de RAM e largura de banda de memória — [Apple Newsroom, outubro de 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'Especificações do chip Apple M4 do iPad Air e RAM — [Apple Newsroom, março de 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'Visão geral dos modelos Gemma 4 e requisitos de memória — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'Chip e faixas de RAM do Samsung Galaxy Tab S11 Ultra — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Dá para executar IA em um iPad?',
            a: 'Sim, no iPad Pro M5 (12 GB base / 16 GB nos níveis de 1 TB e 2 TB) e iPad Air M4 (12 GB). O iPad Pro M5 executa Phi-4 Mini e Llama 3.2 3B em tempo real usando PocketPal AI ou Locally AI, cerca de 25 a 30% mais rápido do que o iPad Pro M4 anterior graças à maior largura de banda de memória (153 GB/s ante 120 GB/s). O iPad Air M4 executa modelos de 3B a 4B com folga. Para modelos de 7B em diante em um iPad, a conexão remota a um Mac ou PC em casa que executa Ollama é recomendada.',
          },
          {
            q: 'O Ollama roda em um iPad?',
            a: 'Não — o Ollama não tem uma versão compatível com iPadOS, então não pode ser instalado diretamente em um iPad como pode ser feito no Android via Termux. "Executar Ollama no iPad" significa rodar o Ollama em um Mac ou PC e se conectar a ele pelo navegador do iPad (via Open WebUI no IP local da máquina em casa) — o iPad é uma tela, não o motor de inferência. Para inferência verdadeiramente no dispositivo em um iPad, use um app no dispositivo, como o PocketPal AI (modelos GGUF via llama.cpp) ou o Locally AI (modelos MLX).',
          },
          {
            q: 'Dá para executar IA em um tablet Android?',
            a: 'Sim, em dispositivos com 8 GB ou mais de RAM usando PocketPal AI ou Termux + Ollama. O Samsung Galaxy Tab S10+ (12 GB de RAM) executa Phi-4 Mini a ~10 a 15 tokens/s. Dispositivos com 6 GB de RAM conseguem executar Qwen3 1.7B. A configuração requer Termux do F-Droid e conforto com alguns comandos de terminal.',
          },
          {
            q: 'A IA no dispositivo funciona em um tablet sem internet?',
            a: 'Sim. Uma vez que o modelo está baixado e o aplicativo instalado, a inferência no dispositivo no iPad (PocketPal AI, Locally AI) e Android (Termux + Ollama) funciona sem conexão à internet.',
          },
          {
            q: 'Qual é o melhor aplicativo de IA para iPad?',
            a: 'Para inferência no dispositivo: PocketPal AI (código aberto, importa qualquer modelo GGUF) ou Locally AI (interface mais simples, MLX). O LLM Farm não está mais disponível na App Store. Para conexão remota a um servidor Ollama em casa: Open WebUI no Safari (o melhor chat geral), RisuAI no Safari (o melhor para roleplay e ficção com personagens).',
          },
          {
            q: 'É seguro usar Termux + Ollama no Android?',
            a: 'Sim. Termux é um emulador de terminal Android bem estabelecido usado por milhões de desenvolvedores. Ollama no Termux serve uma API apenas local (localhost:11434 por padrão) — não é acessível de outros dispositivos na sua rede, a menos que você mude explicitamente o endereço de vinculação.',
          },
          {
            q: 'Posso obter respostas com qualidade similar ao ChatGPT em um tablet localmente?',
            a: 'Quase, mas com a configuração certa. A qualidade de modelos de nuvem de ponta geralmente requer um modelo de 70B ou mais. Num tablet: o iPad Pro M5 (12 GB / 16 GB) não consegue executar modelos de 70B — apenas cabem modelos de 3B a 8B. Via conexão remota: se a sua máquina em casa tem uma GPU de 24 GB (RTX 4090) ou 64 GB de memória unificada (Mac M5 Max), ela consegue executar Llama 3.3 70B, e seu tablet acessa essa qualidade via Open WebUI no navegador.',
          },
          {
            q: 'Como mantenho meu servidor Ollama em casa funcionando quando fecho a tampa do notebook?',
            a: 'No macOS, configure a política de suspensão ao fechar a tampa: Ajustes do Sistema → Bateria → desative "Ativar Power Nap" e use uma ferramenta como Amphetamine para evitar a suspensão quando conectado à corrente. No Windows, vá para Opções de energia → Alterar as configurações do plano → "Nunca" para suspender quando conectado.',
          },
          {
            q: 'Executar IA em um tablet consome muita bateria?',
            a: 'Sim — a inferência no dispositivo é intensiva em CPU/GPU e esgota a bateria muito mais rápido do que navegar; a taxa varia conforme o dispositivo e o modelo. Para uso prolongado, mantenha o tablet carregando. A conexão remota a uma máquina em casa consome significativamente menos bateria do tablet — o tablet apenas exibe uma página web.',
          },
          {
            q: 'Os tablets sofrem throttling térmico durante a inferência de IA?',
            a: 'Sim, especialmente no iPad Air M4 e tablets Android sem resfriamento ativo. O iPad Pro M5 tem mais margem térmica do que o iPad Air, e muitos tablets Android sofrem throttling mais cedo sob inferência sustentada. Mitigações: use trechos de geração mais curtos (200 a 400 tokens por resposta), mantenha o tablet sobre uma superfície rígida e evite executar outros apps que exijam muito da CPU ao mesmo tempo.',
          },
          {
            q: 'Qual teclado funciona melhor para o uso de IA no tablet?',
            a: 'O Apple Magic Keyboard para iPad Pro M5 (com trackpad) é a configuração mais polida — os atalhos de teclado completos funcionam no Safari + Open WebUI, o trackpad permite selecionar texto em respostas longas. O Logitech Combo Touch é a alternativa econômica.',
          },
          {
            q: 'Posso executar SillyTavern no iPad?',
            a: 'Sim, via conexão remota. SillyTavern roda em um Mac ou PC em casa, e Safari no iPad se conecta a ele no IP local. A interface mobile é funcional, mas não polida.',
          },
          {
            q: 'Um tablet consegue lidar com RAG de formato longo?',
            a: 'No dispositivo, não — incorporar mais de 1.000 documentos em um tablet não é prático. Via conexão remota, sim — sua máquina em casa gerencia o pipeline de RAG, o tablet exibe a interface de chat. AnythingLLM rodando em uma máquina em casa e acessado pelo navegador do tablet gerencia coleções de documentos de qualquer tamanho.',
          },
          {
            q: 'Posso usar telas externas com IA no tablet?',
            a: 'Sim, no iPad Pro M5 (Stage Manager + tela externa dá uma configuração de múltiplas janelas; Open WebUI no monitor externo, notas/documentos fonte na tela do iPad). Galaxy Tab S10 Ultra suporta o modo DeX com uma tela externa.',
          },
          {
            q: 'Um tablet é melhor do que um telefone para IA local?',
            a: 'Para uso intensivo em escrita (redação, RAG, conversas longas), sim — o suporte de teclado e o tamanho de tela importam. Para chat rápido, consultas de voz ou uso em movimento, o telefone que você já carrega é melhor. A maioria dos leitores não deveria comprar um tablet especificamente para IA local — compre-o se quiser por outras razões; a capacidade de IA é um bônus.',
          },
          {
            q: 'Por que a IA local está tão lenta no meu tablet?',
            a: 'Geralmente por uma de quatro causas: o modelo é grande demais para a RAM livre (o sistema faz swap ou fecha o app), a geração é limitada pela largura de banda de memória e não pela velocidade do chip, o tablet está sofrendo throttling térmico ou apps em segundo plano estão usando memória. Soluções: troque por um modelo menor ou quantização Q4, feche outros apps, mantenha o tablet fresco e carregando e meça a velocidade real com o benchmark integrado do PocketPal AI. Se um modelo 3B ainda for lento demais, use a conexão remota a uma máquina em casa.',
          },
          {
            q: 'Quais tablets conseguem executar um LLM local (iPad Air M3, iPad de entrada, Galaxy Tab A, Huawei MatePad, Xiaomi Pad)?',
            a: 'Quem decide são a RAM e o chip, não a marca. O iPad Air M3 (8 GB) lida com modelos de 1B a 3B; iPads de entrada e tablets Android básicos com menos de 6 GB de RAM comportam apenas modelos de 1B a 1.7B, então a conexão remota é a melhor escolha para eles. Modelos Huawei MatePad e Xiaomi Pad com 8 GB ou mais executam os mesmos apps que outros tablets Android, sujeitos à disponibilidade nas lojas de apps. Verifique a RAM do seu tablet nas configurações e siga a tabela de modelos acima.',
          },
          {
            q: 'Existe um app Ollama para iPad?',
            a: 'Não existe um app oficial do Ollama para iPadOS. Existem clientes de terceiros para iPad que se conectam a um servidor Ollama no seu Mac ou PC — por exemplo [GetOAI](https://apps.apple.com/app/id6752573799) e [LLLM](https://apps.apple.com/app/id6749804212) — mas eles apenas exibem o chat; o modelo continua rodando na máquina em casa. Confira a página de cada app na App Store antes de instalar. A opção pelo navegador (Open WebUI no Safari) não exige nenhum app.',
          },
          {
            q: 'Posso executar um LLM local em um tablet Android sem terminal?',
            a: 'Sim. O PocketPal AI (gratuito, código aberto, na Google Play) e o Google AI Edge Gallery (gratuito, Apache 2.0) baixam e executam modelos no dispositivo sem o Termux. Termux + Ollama só é necessário se você quiser especificamente o ecossistema do Ollama ou um endpoint de API local.',
          },
          {
            q: 'Um iPad antigo ou de entrada (iPad de 9ª, 10ª ou 11ª geração, iPad mini, iPad Air 5) roda um LLM local?',
            a: 'A RAM decide. O iPad de 9ª geração (3 GB), o de 10ª (4 GB) e o iPad mini 6 (4 GB) ficam curtos para um chat útil no aparelho: use a conexão remota. O iPad de 11ª geração (A16, 6 GB) comporta modelos de 1B–1.7B em Q4. O iPad mini 7 (A17 Pro, 8 GB), o iPad Air 5 e o iPad Air M3 (8 GB) comportam modelos de 3B em Q4, dentro dos limites de 8 GB descritos acima. A Apple não divulga a RAM de todos esses modelos; os números são os amplamente reportados, não uma confirmação da Apple.',
          },
          {
            q: 'O Galaxy Tab S11 Ultra ou o Galaxy Tab S9 FE rodam um LLM local?',
            a: 'O Galaxy Tab S11 Ultra (Dimensity 9400+, 12 GB ou 16 GB de RAM conforme a configuração) está acima do limite de 8 GB e roda os mesmos apps do Tab S10+ — PocketPal AI, Google AI Edge Gallery ou Termux + Ollama — com mais folga para modelos de 3B–4B. O Galaxy Tab S9 FE é vendido com 6 GB ou 8 GB: a versão de 6 GB comporta só o Qwen3 1.7B e a de 8 GB segue a linha de 8 GB da tabela de modelos. O Exynos 1380 é um chip intermediário, então espere velocidade menor que a de tablets topo de linha.',
          },
          {
            q: 'O Gemma 4 roda em um tablet?',
            a: 'Sim, as variantes pequenas do Gemma 4. O Google lista Gemma 4 E2B e E4B como tamanhos para uso no aparelho; com quantização de 4 bits, o Google indica cerca de 2.9 GB (E2B) e 4.5 GB (E4B) de memória para os pesos. Por isso o E2B é a escolha mais segura em tablets de 8 GB e o E4B combina mais com 12 GB ou mais. O app para rodá-los no iPad e no Android é o Google AI Edge Gallery; veja a [análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review). A PromptQuorum não mediu a velocidade do Gemma 4 em tablets.',
          },
          {
            q: 'Quais apps gratuitos rodam um LLM local no iPad?',
            a: 'PocketPal AI (grátis, MIT), Google AI Edge Gallery (grátis, Apache 2.0) e Locally AI (grátis, com opções pagas) rodam modelos no aparelho sem custo. O Open WebUI no Safari, conectado ao Ollama em um Mac ou PC, também é grátis. O LLM Farm também é grátis, mas precisa ser compilado a partir do código-fonte.',
          },
          {
            q: 'Ainda posso instalar o LLM Farm em um iPad?',
            a: 'Não pela App Store. A Apple removeu o LLM Farm em agosto de 2025, e o README do projeto lista a App Store e o TestFlight como temporariamente indisponíveis. O único caminho é compilá-lo a partir do [código-fonte](https://github.com/guinmoon/LLMFarm) no Xcode. A última atualização upstream foi em 30 de janeiro de 2026, então ele pode estar sem manutenção. PocketPal AI e Locally AI são as alternativas instaláveis no iPad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — o app gratuito e de código aberto para iOS e Android recomendado acima para uso no dispositivo em tablets.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — chat no dispositivo baseado em MLX para iPad e iPhone.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app Gemma do Google para executar modelos no dispositivo em iOS e Android.',
          '[Análise do LLM Farm](/pt/power-local-llm/llm-farm-review) — por que o app não está mais na App Store e o que envolve compilá-lo a partir do código-fonte.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — guia complementar focado em seleções de aplicativos específicas do iPhone.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — guia complementar para seleções de aplicativos Android além do Termux + Ollama.',
          '[Melhores modelos LLM para mobile em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — guia complementar da camada de modelos: qual modelo mobile escolher para cada tarefa.',
          '[Construa um assistente de voz local no seu telefone](/pt/power-local-llm/voice-assistant-local-mobile-offline) — guia de construção complementar para assistência de voz mobile offline.',
          '[O app de IA local mais fácil para Windows, Mac e Linux](/pt/power-local-llm/easiest-local-ai-app-windows-mac-linux) — o equivalente de desktop para usuários que configuram IA local em um Mac ou PC.',
          '[Melhor app de IA local para PCs de baixo desempenho](/pt/power-local-llm/best-local-ai-app-low-end-pc) — recomendações para dispositivos com recursos limitados.',
          '[Melhor app de IA local para usuários não técnicos](/pt/power-local-llm/local-ai-app-non-technical-users) — comparação de experiência de uso focada em onboarding e facilidade.',
          '[SillyTavern vs Agnai vs RisuAI: Melhor frontend de roleplay local](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparação de interface mobile para roleplay com cartões de personagem no tablet.',
          '[LM Studio vs Jan vs GPT4All: Comparação completa](/pt/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparação de aplicativos de desktop que complementa o guia de tablet.',
          '[Agentes de IA locais com MCP 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — conectar um tablet a uma configuração de agente local habilitado para MCP na sua máquina em casa.',
          '[Melhores notebooks para LLM local](/pt/local-llms/best-laptops-local-llm) — guia de dimensionamento de hardware para a máquina em casa que se combina com um tablet via conexão remota.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — panorama mais amplo de modelos em todos os níveis de hardware.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Execute IA local no seu tablet: iPad Pro M5, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'Como executar IA localmente em um iPad ou tablet Android em 2026. Aplicativos de inferência no dispositivo, Termux + Ollama no Android e conexão remota ao seu Mac ou PC em casa explicados.',
      image: `https://www.promptquorum.com/api/og/run-ai-on-tablet-ipad-android?lang=pt`,
      url: 'https://www.promptquorum.com/pt/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Executar IA local em um tablet é prático em 2026. Este guia cobre a inferência no dispositivo e a conexão remota a uma máquina em casa.',
      keywords: [
        'IA local no iPad',
        'LLM local no tablet Android',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'PocketPal AI',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'Como configurar um iPad para inferência de IA local',
        'Como usar Termux e Ollama no Android',
        'Como se conectar a um Ollama remoto a partir de um tablet',
        'Seleção de modelo conforme o hardware do tablet',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
        { '@type': 'SoftwareApplication', 'name': 'Locally AI' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', 'name': 'inferência de IA local' },
        { '@type': 'Thing', 'name': 'LLMs no tablet' },
        { '@type': 'Thing', 'name': 'apps de iPad para IA' },
        { '@type': 'Thing', 'name': 'inferência no tablet Android' },
      ],
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    title: 'شغّل ذكاءً اصطناعيًا محليًا على لوحيك: ⁨iPad Pro M5⁩ و⁨Galaxy Tab S10⁩ و⁨OnePlus Pad 2⁩ (⁨2026⁩)',
    seoTitle: 'تشغيل ⁨LLM⁩ محليًا على ⁨iPad⁩ و⁨Android Tablet 2026⁩',
    intro:
      'تشغيل نموذج لغوي محلي (LLM) على لوحي أصبح عمليًا في 2026 على أجهزة iPad من الفئة الراقية وأجهزة Android بذاكرة RAM لا تقل عن 8 جيجابايت. رفع كل من iPad Pro M5 (12 جيجابايت في فئات التخزين الأساسية، و16 جيجابايت في طرازَي 1 تيرابايت/2 تيرابايت) وiPad Air M4 (12 جيجابايت) سقف التشغيل على الجهاز مقارنةً بسابقيهما. يغطي هذا الدليل الخيارات: الاستدلال على الجهاز عبر PocketPal AI وLocally AI وGoogle AI Edge Gallery على iPad (لم يعد LLM Farm قابلًا للتثبيت من App Store)، وPocketPal AI وTermux + Ollama على Android، وبديل الاتصال عن بُعد (ربط اللوحي بجهاز Mac أو PC يشغّل Ollama عبر شبكة Wi-Fi المحلية) للأجهزة التي لا تستطيع تشغيل الاستدلال محليًا — بما في ذلك هل يمكن تشغيل Ollama نفسه مباشرةً على iPad (لا يمكن؛ فلا يوجد إصدار مدعوم من Ollama لنظام iPadOS).',
    metaDescription:
      'لا يعمل Ollama على iPad مباشرةً، لكن النموذج المحلي ممكن: PocketPal AI أو Locally AI على الجهاز، أو Termux على Android، أو Ollama على Mac عبر Wi-Fi.',
    heroImage: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ar.webp',
    twitterDescription:
      'شغّل LLM محليًا على iPad أو تابلت Android في 2026: تطبيقات على الجهاز (PocketPal AI وLocally AI وGoogle AI Edge Gallery) وTermux + Ollama، واتصال عن بُعد بجهاز Mac/PC منزلي يشغّل Ollama — مع اختيارات النماذج لكل جهاز.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral Small',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M5 12 GB / 16 GB',
      'iPad Air M4 12 GB',
      'iPad Air M3 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
      'iPad mini 7 A17 Pro 8 GB',
      'iPad A16 6 GB',
      'Samsung Galaxy Tab S11 Ultra 12 GB / 16 GB',
    ],
    audience:
      'مستخدمو الأجهزة اللوحية الذين يريدون تشغيل ذكاء اصطناعي محلي أو الاتصال بإعداد LLM في المنزل من iPad أو جهاز Android، دون الاعتماد على خدمات الذكاء الاصطناعي السحابية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'تشغيل ذكاء اصطناعي على لوحي',
    targetKeywords: [
      'تشغيل ذكاء اصطناعي محلي على ipad',
      'تشغيل llm محلي على تابلت android',
      'ollama ipad اتصال عن بُعد',
      'termux ollama android',
      'llm farm ipad',
      'pocketpal ai ios llm',
      'llm محلي على ipad pro m5',
    ],
    leadAnswerBlock:
      '**تشغيل ذكاء اصطناعي محلي على لوحي له وضعان مختلفان: الاستدلال على الجهاز (النموذج يعمل مباشرةً على شريحة اللوحي) والاتصال عن بُعد (اللوحي شاشة لجهاز Mac أو PC في المنزل يشغّل Ollama). الاستدلال على الجهاز عملي على iPad Pro M5 (12 جيجابايت في فئات التخزين الأساسية، 16 جيجابايت في طرازَي 1 تيرابايت/2 تيرابايت — يشغّل Phi-4 Mini وLlama 3.2 3B في الوقت الفعلي بهامش أكبر من جيل M4 السابق)، وiPad Air M4 (12 جيجابايت، يشغّل نماذج 3B–4B بسلاسة)، وأجهزة Android من الفئة الراقية بذاكرة 8 جيجابايت أو أكثر (Samsung Galaxy Tab S10+، عبر PocketPal AI أو Termux + Ollama). Ollama نفسه لا يعمل بشكل أصلي على iPadOS — لا يوجد إصدار مدعوم لـ iPad — لذا على مستخدمي iPad الذين يريدون Ollama تحديدًا استخدام الاتصال عن بُعد بجهاز Mac أو PC. الاتصال عن بُعد عبر Open WebUI أو واجهة دردشة بسيطة على عنوان IP المحلي للخادم المنزلي يعمل على أي لوحي، بأي قدر من RAM وأي نظام تشغيل — يحوّل لوحيك إلى طرفية لمسية نحو جهاز منزلي أقوى. لمعظم الناس، الاتصال عن بُعد هو الخيار الأفضل: يشغّل الجهاز المنزلي نموذج 70B بينما يوفر اللوحي الواجهة المريحة.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكن تشغيل نموذج ذكاء اصطناعي محلي على iPad أو تابلت Android؟',
        answer:
          'نعم، على الأجهزة من الفئة الراقية. يشغّل iPad Pro M5 (12 جيجابايت في فئات التخزين الأساسية، 16 جيجابايت في طرازَي 1 تيرابايت/2 تيرابايت) نموذجَي Phi-4 Mini (3.8B) وLlama 3.2 3B في الوقت الفعلي باستخدام PocketPal AI أو Locally AI، بهامش أكبر من جيل M4 السابق. يشغّل iPad Air M4 (12 جيجابايت) نماذج 3B–4B بسلاسة. يمكن لأجهزة Android اللوحية بذاكرة 8 جيجابايت أو أكثر (Samsung Galaxy Tab S10+) تشغيل Phi-4 Mini وQwen3 1.7B عبر PocketPal AI أو Termux + Ollama. Ollama لا يعمل بشكل أصلي على iPadOS نفسه — من يريد Ollama تحديدًا على iPad يحتاج إلى اتصال عن بُعد بجهاز Mac أو PC. للأجهزة ذات RAM أقل أو الشرائح الأقدم، البديل العملي هو الاتصال عن بُعد: اربط لوحيك بجهاز Mac أو PC يشغّل Ollama على شبكتك المنزلية باستخدام Open WebUI في متصفح اللوحي.',
        bullets: [
          'iPad Pro M5 (12 جيجابايت / 16 جيجابايت) — يشغّل Phi-4 Mini وLlama 3.2 3B محليًا في الوقت الفعلي باستخدام PocketPal AI أو Locally AI، أسرع من جيل M4 السابق بفضل زيادة سرعة نقل البيانات في الذاكرة.',
          'iPad Air M4 (12 جيجابايت) — يشغّل نماذج 3B–4B بسرعة مقبولة؛ نماذج 7B بطيئة لكنها تعمل.',
          'أجهزة Android اللوحية (8 جيجابايت RAM أو أكثر) — PocketPal AI (دون طرفية) أو Termux + Ollama يشغّل Phi-4 Mini وQwen3 1.7B محليًا.',
          'Ollama نفسه ليس له إصدار أصلي لـ iPadOS — "تشغيل Ollama على iPad" يعني الاتصال عن بُعد بجهاز Mac أو PC يشغّله، لا تثبيته على iPad.',
          'الاتصال عن بُعد — أي لوحي، أي قدر من RAM: اتصل بجهاز Mac أو PC في المنزل يشغّل Ollama عبر Open WebUI في المتصفح.',
          'أفضل نموذج على الجهاز لمعظم الألواح: Phi-4 Mini (3.8B، ~2.7 جيجابايت) أو Qwen3 1.7B للأجهزة ذات RAM المحدودة.',
          'يُوصى بالاتصال عن بُعد بدل التشغيل على الجهاز لنماذج 7B فصاعدًا — الجهاز المنزلي يشغّل النموذج أسرع من أي لوحي.',
          'تطبيقا SillyTavern وRisuAI لديهما واجهات متجاوبة مع الأجهزة المحمولة تعمل في Safari على iPad وفي Chrome على Android.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'وضعان: على الجهاز مقابل الاتصال عن بُعد', anchor: '#two-modes' },
      { label: 'iPad: الاستدلال على الجهاز', anchor: '#ipad-on-device' },
      { label: 'Android: الاستدلال على الجهاز', anchor: '#android-on-device' },
      { label: 'الاتصال عن بُعد بجهاز منزلي', anchor: '#remote-connection' },
      { label: 'توصيات النماذج حسب الجهاز', anchor: '#models' },
      { label: 'واجهات الذكاء الاصطناعي المحلي للوحي', anchor: '#frontends' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**الاستدلال على الجهاز عملي على iPad Pro M5 (12 جيجابايت / 16 جيجابايت)، وiPad Air M4 (12 جيجابايت)، وAndroid من الفئة الراقية (8 جيجابايت أو أكثر).** دون هذه العتبات، يكون التوليد بطيئًا جدًا للاستخدام الفعلي. الاتصال عن بُعد بجهاز منزلي هو الخيار الأفضل لمعظم مستخدمي الألواح.',
          '**الاتصال عن بُعد هو النهج الموصى به لمعظم الناس.** اربط لوحيك (بأي قدر من RAM وأي نظام تشغيل) بجهاز Mac أو PC يشغّل Ollama على شبكتك المنزلية. يشغّل الجهاز المنزلي نموذج 70B؛ ويحصل اللوحي على واجهة دردشة لمسية. لا حاجة لتنزيل أي نموذج على اللوحي.',
          '**PocketPal AI وLocally AI وGoogle AI Edge Gallery هي خيارات التشغيل على الجهاز الحالية لـ iPad.** يستورد PocketPal AI نماذج GGUF، ويشغّل Locally AI نماذج MLX المصممة لشرائح Apple Silicon، ويشغّل Google AI Edge Gallery نماذج Gemma من Google. أُزيل LLM Farm من App Store في أغسطس 2025 وكان آخر تحديث له في 30 يناير 2026 (2026-01-30) — تعامل معه كخيار للبناء من المصدر فقط.',
          '**PocketPal AI هو أسهل نهج على Android؛ أما Termux + Ollama فهو النهج المرن.** PocketPal AI تطبيق على Google Play دون أي خطوة في الطرفية. يتطلب Termux + Ollama ألفةً بالطرفية لكنه يمنحك منظومة Ollama الكاملة على الأجهزة بذاكرة 8 جيجابايت أو أكثر، ويقدّم النموذج على localhost:11434.',
          '**أفضل نموذج على الجهاز لمعظم الألواح: Phi-4 Mini (3.8B).** يعمل على أي جهاز بذاكرة متاحة 6 جيجابايت أو أكثر؛ وينتج مخرجات صالحة لمعظم المهام اليومية؛ ويُنزَّل خلال 5–10 دقائق على اتصال سريع.',
          '**Open WebUI في متصفح اللوحي هو أبسط واجهة للاتصال عن بُعد.** إذا كان جهاز Mac أو PC المنزلي يشغّل Open WebUI على `192.168.x.x:3000`، فافتح هذا العنوان في متصفح لوحيك — بلا تثبيت تطبيق ولا إعدادات، وبواجهة دردشة كاملة.',
          '**SillyTavern لديه واجهة متجاوبة مع الأجهزة المحمولة.** لاستخدام لعب الأدوار وبطاقات الشخصيات على اللوحي، يعمل SillyTavern المشغَّل على جهاز منزلي والمُفتوح من متصفح اللوحي بشكل جيد؛ أما RisuAI فلديه أفضل دعم أصلي للأجهزة المحمولة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**تطبيقات iPad:** PocketPal AI (مجاني، MIT)، وLocally AI (مجاني مع خيارات مدفوعة، MLX)، وGoogle AI Edge Gallery (مجاني، Apache 2.0). أما LLM Farm (مجاني، MIT، لنظام iOS فقط) فقد أُزيل من App Store في أغسطس 2025 ويجب الآن بناؤه من المصدر.',
          '**طريقة Android:** PocketPal AI أو Google AI Edge Gallery (تطبيقات دون طرفية)، أو Termux + Ollama (سطر الأوامر).',
          '**الاتصال عن بُعد:** متصفح أي لوحي ← Open WebUI أو واجهة دردشة بسيطة على عنوان IP المحلي لجهازك المنزلي. هذه أيضًا هي الطريقة التي يشغّل بها مستخدمو iPad برنامج Ollama، لأنه لا يملك إصدارًا أصليًا لـ iPadOS.',
          '**الحد الأدنى للتشغيل على الجهاز:** iPad Air M4 (12 جيجابايت) لنماذج 3B–4B؛ وiPad Pro M5 (12 جيجابايت / 16 جيجابايت) لنماذج 7B–8B.',
          '**الحد الأدنى لـ Android للتشغيل على الجهاز:** جهاز بذاكرة RAM 8 جيجابايت (Samsung Galaxy Tab S10+ أو OnePlus Pad 2).',
          '**أفضل نموذج على الجهاز:** Phi-4 Mini (3.8B، 2.7 جيجابايت) لمعظم الألواح؛ وQwen3 1.7B للأجهزة شديدة المحدودية.',
          '**سرعة الاتصال عن بُعد:** تعتمد على جودة Wi-Fi وسرعة توليد الجهاز المنزلي، لا على عتاد اللوحي.',
        ],
      },
      twoModes: {
        id: 'two-modes',
        title: 'وضعان: الاستدلال على الجهاز مقابل الاتصال عن بُعد',
        content:
          '**القرار الأهم ليس أي تطبيق تستخدم، بل هل تشغّل الاستدلال على اللوحي أم على جهاز أقوى في المنزل.** لكل وضع متطلبات عتاد وسقف قدرات مختلفان.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'لتشغيل الذكاء الاصطناعي على لوحي وضعان عمليان: الاستدلال على الجهاز (النموذج يعمل على شريحة اللوحي ومحدود بنماذج 3B–7B) أو الاتصال عن بُعد (اللوحي شاشة متصفح لجهاز Mac أو PC منزلي يشغّل نماذج أكبر عبر Ollama وOpen WebUI).' },
          { type: 'plain-terms', text: 'وضع الجهاز: النموذج موجود على لوحيك ويعمل دون إنترنت. هو محدود بالنماذج الصغيرة (3B، وربما 7B على iPad Pro عالي المواصفات) وأبطأ من الذكاء الاصطناعي السحابي. الوضع عن بُعد: يشغّل جهاز Mac أو PC المنزلي Ollama ونموذج 70B، ويعرض لوحيك الدردشة في المتصفح فقط — تحصل على جودة 70B الكاملة على شاشة اللوحي دون تخزين أي نموذج عليه، لكن يجب أن يكون الجهاز المنزلي قيد التشغيل وعلى شبكة Wi-Fi نفسها. اختر الاتصال عن بُعد ما لم تكن بحاجة تحديدًا إلى الاستخدام دون اتصال.' },
        ],
        columns: ['العامل', 'على الجهاز', 'الاتصال عن بُعد'],
        rows: [
          { 'العامل': 'حد حجم النموذج', 'على الجهاز': '3B–8B (iPad Pro M5)؛ 3B–4B (معظم الألواح)', 'الاتصال عن بُعد': 'بلا حد — الجهاز المنزلي يشغّل أي نموذج' },
          { 'العامل': 'الاستخدام دون اتصال', 'على الجهاز': 'نعم — يعمل دون Wi-Fi', 'الاتصال عن بُعد': 'لا — يتطلب Wi-Fi المنزل' },
          { 'العامل': 'سرعة التوليد', 'على الجهاز': 'متوسطة (12–30 رمز/ثانية على iPad Pro M5)', 'الاتصال عن بُعد': 'حسب الجهاز المنزلي (حتى 40+ رمز/ثانية)' },
          { 'العامل': 'التخزين على اللوحي', 'على الجهاز': '2–10 جيجابايت لكل نموذج', 'الاتصال عن بُعد': 'لا شيء — النموذج على الجهاز المنزلي' },
          { 'العامل': 'تعقيد الإعداد', 'على الجهاز': 'منخفض (تنزيل تطبيق + ملف نموذج)', 'الاتصال عن بُعد': 'منخفض–متوسط (Ollama + Open WebUI منزليًا)' },
          { 'العامل': 'الأنسب لـ', 'على الجهاز': 'السفر، والاستخدام دون اتصال، ومهام 3B', 'الاتصال عن بُعد': 'الجودة أولًا، ونماذج 70B، والراحة' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا كان لديك في المنزل جهاز Mac أو PC يستطيع تشغيل Ollama، فابدأ بالاتصال عن بُعد. ستحصل فورًا على جودة نموذج أفضل على لوحيك دون تخزين ملفات النماذج عليه ودون التعامل مع قيود تطبيقات الجوّال. يمكنك إضافة القدرة على التشغيل على الجهاز لاحقًا إذا احتجت إلى الاستخدام دون اتصال.',
          },
        ],
        image: '/images/run-ai-on-tablet-two-modes-ar.svg',
        imageCaption: 'وضعا الذكاء الاصطناعي على اللوحي: الاستدلال على الجهاز (النموذج يعمل على شريحة اللوحي، ويعمل دون اتصال، ومحدود بنماذج 3B–8B) مقابل الاتصال عن بُعد (متصفح اللوحي يتصل بجهاز Mac/PC منزلي يشغّل Ollama، بلا نموذج مخزَّن على اللوحي وبحجم نموذج غير محدود).',
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: الاستدلال على الجهاز',
        content:
          '**iPad Pro M5 هو جهاز iPad الأنسب لنماذج 7B–8B.** رفعت Apple ذاكرة RAM الأساسية في iPad Pro M5 إلى 12 جيجابايت (16 جيجابايت في فئتَي التخزين 1 تيرابايت/2 تيرابايت)، مقارنة بـ 8 جيجابايت في iPad Pro M4 الأساسي، ورفعت سرعة نقل البيانات في الذاكرة إلى 153 جيجابايت/ثانية من 120 — والاستدلال على Apple Silicon محكوم بسرعة نقل الذاكرة، لذا ينعكس ذلك مباشرةً على سرعة التوليد. أما iPad Air M4 (12 جيجابايت، مقارنة بـ 8 جيجابايت في Air M3) فيشغّل الآن نماذج 3B–4B بسلاسة بدلًا من أداء مقبول فحسب. ويقتصر iPad Air M3 (8 جيجابايت) وأجهزة iPad الأخرى بذاكرة 8 جيجابايت على نماذج 1B–3B بتكميم Q4. [يشغّل iPhone بذاكرة 8 جيجابايت أيضًا نماذج صغيرة](/ar/power-local-llm/best-local-llm-apps-iphone-2026) عبر LLM Farm.',
        items: [
          '**PocketPal AI** (مجاني، مفتوح المصدر MIT، iOS + Android): يشغّل نماذج GGUF عبر llama.cpp، وينزّل النماذج من Hugging Face داخل التطبيق أو يستورد الملفات، ويتضمن اختبار أداء مدمجًا لتقيس بنفسك عدد الرموز في الثانية على لوحيك. آخر تحديث رسمي: 19 أكتوبر 2026 (2026-10-19). اطّلع على [مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
          '**Locally AI** (مجاني مع خيارات مدفوعة، مغلق المصدر، iPhone/iPad/Mac): يشغّل نماذج مفتوحة عبر إطار MLX من Apple المصمم لـ Apple Silicon. آخر تحديث على App Store: 15 أكتوبر 2026 (2026-10-15). اطّلع على [مراجعة Locally AI](/ar/power-local-llm/locally-ai-review).',
          '**Google AI Edge Gallery** (مجاني، Apache 2.0، iOS + Android): تطبيق Google للتشغيل على الجهاز لنماذج Gemma، ويعمل على بيئة LiteRT-LM. آخر تحديث رسمي: 23 أكتوبر 2026 (2026-10-23). اطّلع على [مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review). ويشغّل التطبيق أيضًا Gemma 4 (E2B وE4B)، وهما أحدث نماذج Google الصغيرة للتشغيل على الجهاز.',
          '**LLM Farm** (مجاني، MIT، لنظام iOS فقط): أزالت Apple صفحة التطبيق من App Store في أغسطس 2025، ويذكر ملف README الخاص بالمشروع أن App Store وTestFlight كليهما "غير متاحين مؤقتًا" — الطريق الوحيد هو البناء من [المصدر](https://github.com/guinmoon/LLMFarm) في Xcode. آخر تحديث رسمي: 30 يناير 2026 (2026-01-30)، أي قبل أكثر من 180 يومًا، لذا قد يكون المشروع غير مُصان؛ تحقق من المستودع قبل الاعتماد عليه. اطّلع على [مراجعة LLM Farm](/ar/power-local-llm/llm-farm-review).',
          '**استيراد النماذج:** في PocketPal AI، نزّل نموذج GGUF من Hugging Face داخل التطبيق، أو استورد ملف GGUF نقلته عبر تطبيق الملفات (Files) من Apple. تُخزَّن النماذج في التخزين المحلي للتطبيق — وليس في iCloud.',
          '**إدارة RAM على iPad:** يدير iOS ذاكرة RAM للتطبيقات في الخلفية بصرامة. أغلق جميع التطبيقات الأخرى قبل تشغيل نموذج 7B على iPad بذاكرة 12 جيجابايت — سيُخلي iOS النموذج من الذاكرة إذا احتاجها تطبيق آخر. على iPad Pro M5 بذاكرة 16 جيجابايت (فئتا 1 تيرابايت/2 تيرابايت) نادرًا ما تحدث هذه المشكلة.',
          '**تقديرات سرعة التوليد (تقريبية، وليست اختبارات أداء من PromptQuorum — استخدم اختبار الأداء المدمج في PocketPal AI لقياس جهازك):** iPad Pro M5 (12 جيجابايت / 16 جيجابايت): Phi-4 Mini ~25 رمز/ثانية، وLlama 3.2 3B ~38 رمز/ثانية، وGemma 3 4B ~23 رمز/ثانية — أسرع بنحو 25–30% من جيل M4 السابق، بما يتماشى مع زيادة سرعة نقل الذاكرة. iPad Air M4 (12 جيجابايت): نماذج 3B–4B ~15–20 رمز/ثانية؛ ونماذج 7B ~7–10 رموز/ثانية (لا تزال بطيئة للدردشة الفورية).',
          '**أجهزة iPad الأساسية وأجهزة iPad بذاكرة 8 جيجابايت أو أقل:** استخدم نماذج 1B–3B بتكميم Q4، أو اعتبر الـ iPad شاشة عرض للاتصال عن بُعد. إذا لم يتسع النموذج في الذاكرة الحرة، يُغلق iPadOS التطبيق بدلًا من التباطؤ التدريجي.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تحاول تشغيل نموذج 7B على iPad Air بذاكرة 12 جيجابايت للدردشة الفورية. عند 7–10 رموز في الثانية، يستغرق كل رد 10–20 ثانية. هذا مقبول لمهام التلخيص التي ترسل فيها الطلب وتنتظر، لكنه محبط للمحادثة. استخدم نماذج 3B–4B على iPad Air؛ وانتقل إلى iPad Pro M5 بذاكرة 16 جيجابايت أو إلى الاتصال عن بُعد لنماذج 7B فصاعدًا.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-speed-ar.svg',
        imageCaption: 'سرعة الاستدلال على iPad: يصل iPad Pro M5 (12 جيجابايت / 16 جيجابايت) إلى 23–38 رمز/ثانية على Phi-4 Mini وLlama 3.2 3B؛ ويشغّل iPad Air M4 (12 جيجابايت) نماذج 3B–4B بسرعة 15–20 رمز/ثانية لكنه ينخفض إلى 7–10 رموز/ثانية على نماذج 7B — وهي سرعة بطيئة للدردشة الفورية.',
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: الاستدلال على الجهاز',
        content:
          '**يعتمد الاستدلال على الجهاز في Android على [Termux + Ollama](/ar/power-local-llm/best-local-llm-apps-android-2026) — Termux محاكي طرفية Linux يشغّل Ollama بشكل أصلي على Android.** هذا أكثر تقنيةً من تجربة تطبيقات iPad، لكنه يتيح الوصول إلى منظومة Ollama الكاملة.',
        numberedItems: [
          'ثبّت Termux من F-Droid (وليس نسخة متجر Play — فنسخة المتجر قديمة وتفتقر إلى الحزم المطلوبة).',
          'في Termux: `pkg update && pkg upgrade`',
          'ثبّت Ollama من مستودع حزم Termux: `pkg install ollama` (الأدلة الأقدم تبني Ollama من المصدر باستخدام Go، ولم يعد ذلك ضروريًا).',
          'نزّل نموذجًا: `ollama pull phi4-mini` أو `ollama pull qwen3:1.7b`.',
          'شغّل الخادم: `ollama serve` (أبقِه يعمل في جلسة Termux).',
          'الدردشة عبر Termux: `ollama run phi4-mini` — أو افتح متصفح الويب واذهب إلى `http://localhost:11434` للوصول إلى الـ API. ثبّت تطبيق دردشة لـ Android يتصل بنقطة Ollama المحلية للحصول على واجهة رسومية.',
        ],
        items: [
          '**بدائل أسهل من Termux:** يشغّل PocketPal AI (على Google Play، مجاني، MIT؛ آخر تحديث رسمي 2026-10-19) وGoogle AI Edge Gallery (مجاني، Apache 2.0؛ آخر تحديث رسمي 2026-10-23) النماذج على الجهاز دون طرفية. ابدأ بأحدهما ما لم تكن بحاجة تحديدًا إلى Ollama. اطّلع على [مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
          '**الأجهزة المدعومة لنماذج 3B فأكثر:** 8 جيجابايت RAM كحد أدنى (Samsung Galaxy Tab S10+ أو OnePlus Pad 2 أو Xiaomi Pad 7 Pro). الأجهزة بذاكرة 6 جيجابايت تشغّل Qwen3 1.7B فقط.',
          '**Pixel Tablet غير موصى به للتشغيل على الجهاز:** استُبعد Pixel Tablet (طراز 2023، ذاكرة 8 جيجابايت، شريحة Tensor G2) من قائمة الأجهزة الموصى بها للتشغيل على الجهاز — فشريحة Tensor G2 أبطأ بكثير من Snapdragon 8 Gen 3 / Dimensity 9300 في استدلال LLM، إذ تنتج 4–7 رموز/ثانية على Phi-4 Mini (بطيء جدًا للمحادثة). على مستخدمي Pixel Tablet استخدام الاتصال عن بُعد بجهاز منزلي.',
          '**Snapdragon 8 Gen 3 وDimensity 9300** هما أسرع شريحتين في Android للاستدلال على الجهاز في 2026. سرعة التوليد: ~15–25 رمز/ثانية لنماذج 1.7B؛ و~8–12 رمز/ثانية لنماذج 3B.',
          '**تخزين النموذج:** لا يملك Android ذاكرة موحدة — يعمل النموذج في ذاكرة النظام دون تسريع GPU في معظم إعدادات Termux. يتطلب تسريع GPU إعدادات Termux:NVIDIA أو بنيات Vulkan محددة؛ والإعداد أكثر تعقيدًا.',
          '**تطبيقات بديلة:** MNN LLM (من Alibaba، مجاني، تطبيق Android بالاستدلال على الجهاز لنماذج مختارة) أسهل في الإعداد لكن اختيار النماذج فيه أضيق من Ollama. كما أن لـ AI Runner وllamafile بنيات لـ Android بدعم متفاوت. لا يوجد إصدار Android من LLM Farm — فهو تطبيق iOS فقط؛ وأقرب مكافئ له على Android هو PocketPal AI.',
          '**ماركات أخرى (Huawei MatePad وXiaomi Pad وسلسلة Galaxy Tab A):** الذاكرة والشريحة هما الحَكَم، لا الماركة. تحقق من ذاكرة RAM في اللوحي من الإعدادات: أقل من 6 جيجابايت، التزم بنماذج 1B–1.7B أو استخدم الاتصال عن بُعد؛ 8 جيجابايت أو أكثر، اتبع صف 8 جيجابايت في جدول النماذج.',
          'للاطلاع على دليل إعداد خاص باليابان لهواتف Xperia مع جدول توافق العتاد، راجع <a href="/ar/prompt-bites/run-local-llm-on-xperia-japan" class="text-primary hover:underline">كيفية تشغيل LLM محلي على هواتف Xperia في اليابان</a>.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ثبّت إضافة Termux:Widget وأنشئ اختصارًا يشغّل "ollama serve" — هذا يتيح لك بدء خادم Ollama من الشاشة الرئيسية في Android دون فتح Termux يدويًا. بمجرد أن يعمل Ollama، افتح أي تطبيق دردشة مضبوط للاتصال بـ localhost:11434.',
          },
        ],
        image: '/images/run-ai-on-tablet-termux-setup-ar.svg',
        imageCaption: 'الذكاء الاصطناعي على الجهاز في Android: إعداد Termux + Ollama في 5 خطوات — ثبّت Termux من F-Droid (وليس من متجر Play)، حدّث الحزم، ثبّت Ollama بالأمر pkg install ollama، نزّل نموذجًا (phi4-mini أو qwen3:1.7b)، ثم شغّل الخادم على localhost:11434. يتطلب 8 جيجابايت RAM كحد أدنى.',
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'الاتصال عن بُعد بجهاز منزلي',
        content:
          '**أبسط إعداد لمعظم مستخدمي الألواح: شغّل Ollama وOpen WebUI على جهاز Mac أو PC المنزلي، ثم افتح واجهة الدردشة من متصفح لوحيك على شبكة Wi-Fi نفسها.** يصبح لوحيك واجهة لمسية للجهاز الأقوى الذي يشغّل Ollama في المنزل — راجع [دليل اللابتوب](/ar/local-llms/best-laptops-local-llm) لتحديد حجم العتاد إذا كنت تختار الجهاز المنزلي.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يمنح الاتصال عن بُعد بجهاز منزلي يشغّل Ollama وOpen WebUI أي لوحي وصولًا كاملًا إلى نماذج 70B عبر المتصفح — بلا نموذج مخزَّن على اللوحي، وبلا تثبيت تطبيق، ودون أي تنازل عن جودة النموذج.' },
          { type: 'plain-terms', text: 'على جهاز Mac أو PC: ثبّت Ollama، ونزّل نموذجًا، وثبّت Open WebUI (أمر Docker واحد)، وشغّله مرتبطًا بعنوان IP شبكتك المحلية. على اللوحي: افتح Safari أو Chrome، واذهب إلى http://[عنوان-IP-الجهاز]:3000، وستحصل على واجهة دردشة كاملة. يعمل النموذج على الـ Mac؛ ولا يعرض اللوحي سوى الدردشة. يعمل على أي لوحي وأي نظام وأي حجم شاشة.' },
        ],
        numberedItems: [
          '**على الجهاز المنزلي:** ثبّت Ollama (`brew install ollama` على macOS، ونزّله من ollama.com على Windows). نزّل نموذجًا: `ollama pull llama3.3:70b` (أو أي نموذج). شغّل Ollama مع ربط الشبكة: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`.',
          '**ثبّت Open WebUI** (أنسب واجهة دردشة للألواح): `docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 --name open-webui ghcr.io/open-webui/open-webui:main`. أصبح Open WebUI متاحًا على `http://[عنوان-IP-جهازك]:3000`.',
          '**اعثر على عنوان IP المحلي لجهازك المنزلي:** على macOS: إعدادات النظام (System Settings) ← الشبكة (Network) ← الشبكة الحالية ← عنوان IP. على Windows، شغّل `ipconfig` في موجه الأوامر وابحث عن IPv4 Address. دوّن العنوان (عادةً `192.168.x.x`).',
          '**على اللوحي:** افتح Safari (iPad) أو Chrome (Android). انتقل إلى `http://[عنوان-IP-جهازك]:3000`. أنشئ حسابًا في Open WebUI (محلي فقط، دون سحابة). اختر نموذجك من القائمة المنسدلة. ابدأ المحادثة.',
          '**الأمان:** هذا الإعداد للشبكة المحلية فقط. لا تعرّض المنفذ 3000 للإنترنت دون إضافة مصادقة Open WebUI (لديه نظام حسابات إدارية مدمج). الاتصال عبر HTTP عادي — لا ترسل معلومات حساسة عبر شبكات Wi-Fi العامة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أضف عنوان Open WebUI للجهاز المنزلي إلى الشاشة الرئيسية للوحيك (في Safari: مشاركة ← إضافة إلى الشاشة الرئيسية؛ وفي Chrome: قائمة النقاط الثلاث ← إضافة إلى الشاشة الرئيسية). هذا يجعله يبدو كتطبيق أصلي. على iPad، تُخفي تطبيقات الويب بملء الشاشة في Safari عناصر المتصفح لتجربة أقرب إلى التطبيقات.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-remote-setup-hero-ar.webp',
        imageCaption: 'الذكاء الاصطناعي عن بُعد من اللوحي في 4 خطوات: ثبّت Ollama على جهازك المنزلي، ونزّل نموذجًا + Open WebUI، واعثر على عنوان IP المنزلي، ثم افتح http://[IP]:3000 في متصفح اللوحي — دون نموذج مخزَّن على اللوحي، وتشغيل نماذج 70B بسرعة 20–40 رمز/ثانية.',
      },
      models: {
        id: 'models',
        title: 'توصيات النماذج حسب الجهاز',
        content:
          '**يتحدد اختيار النموذج بذاكرة RAM المتاحة — لا بالتفضيل.** يربط الجدول أدناه ذاكرة الجهاز بأكبر نموذج يعمل بسرعة الوقت الفعلي (أكثر من 8 رموز/ثانية). لطبقة النماذج تحديدًا، راجع [أفضل نماذج LLM للهاتف في 2026](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm). وللاطلاع على مشهد النماذج الأوسع عبر جميع فئات العتاد، راجع [أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026).',
        columns: ['الجهاز / RAM', 'النموذج الموصى به', 'السرعة', 'الأنسب لـ'],
        rows: [
          { 'الجهاز / RAM': 'iPad Air M4 (12 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini Q4 / Llama 3.2 3B Q4', 'السرعة': '~18–20 رمز/ثانية', 'الأنسب لـ': 'المساعدة في الكتابة والتلخيص' },
          { 'الجهاز / RAM': 'iPad Air M3 / أجهزة iPad الأخرى 8 جيجابايت', 'النموذج الموصى به': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'السرعة': '~10–18 رمز/ثانية (تقدير)', 'الأنسب لـ': 'صياغة خفيفة وملخصات' },
          { 'الجهاز / RAM': 'iPad Pro M5 (12 جيجابايت / 16 جيجابايت)', 'النموذج الموصى به': 'Llama 3.2 3B / Gemma 3 4B Q4', 'السرعة': '~32–38 / ~20–23 رمز/ثانية', 'الأنسب لـ': 'محطة LLM حقيقية، وRAG، وصياغة الخيال' },
          { 'الجهاز / RAM': 'Android 8 جيجابايت (Tab S10+)', 'النموذج الموصى به': 'Phi-4 Mini Q4 عبر Termux+Ollama', 'السرعة': '~10–15 رمز/ثانية', 'الأنسب لـ': 'المستخدمون المتمرسون مع Termux' },
          { 'الجهاز / RAM': 'Android 6 جيجابايت', 'النموذج الموصى به': 'Qwen3 1.7B Q4', 'السرعة': '~15–20 رمز/ثانية', 'الأنسب لـ': 'دردشة خفيفة وترجمة ومهام بسيطة' },
          { 'الجهاز / RAM': 'Pixel Tablet (8 جيجابايت)', 'النموذج الموصى به': 'الاتصال عن بُعد فقط', 'السرعة': 'لا ينطبق', 'الأنسب لـ': 'Tensor G2 بطيء جدًا للتشغيل على الجهاز' },
          { 'الجهاز / RAM': 'iPad mini 7 (A17 Pro، 8 جيجابايت)', 'النموذج الموصى به': 'Llama 3.2 3B Q4 / Qwen3 1.7B', 'السرعة': 'غير مقاسة', 'الأنسب لـ': 'مسودات خفيفة وتلخيص' },
          { 'الجهاز / RAM': 'iPad A16 (6 جيجابايت) / iPad الجيل 10 (4 جيجابايت)', 'النموذج الموصى به': 'Qwen3 1.7B Q4 أو أصغر', 'السرعة': 'غير مقاسة', 'الأنسب لـ': 'أسئلة قصيرة؛ للمزيد اتصال عن بُعد' },
          { 'الجهاز / RAM': 'Galaxy Tab S11 Ultra (12 / 16 جيجابايت)', 'النموذج الموصى به': 'Gemma 4 E4B / Phi-4 Mini Q4', 'السرعة': 'غير مقاسة', 'الأنسب لـ': 'تعدد مهام أوسع (فئة 16 جيجابايت)' },
          { 'الجهاز / RAM': 'أي لوحي عن بُعد (بما فيه iPad + Ollama)', 'النموذج الموصى به': 'أي نموذج على الجهاز المنزلي', 'السرعة': '~20–40 رمز/ثانية', 'الأنسب لـ': 'الجودة أولًا، ونماذج 70B، وتشغيل Ollama مع iPad' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لمعظم المهام اليومية (صياغة النصوص، والإجابة عن الأسئلة، وتلخيص المحتوى)، يكفي Phi-4 Mini (3.8B) على اللوحي. أما أين يتراجع مقارنةً بنموذج 70B: الاستدلال المعقد متعدد الخطوات، والكتابة الإبداعية الدقيقة، وتحليل المستندات الطويلة. لهذه المهام، استخدم الاتصال عن بُعد بجهاز منزلي يشغّل نموذجًا أكبر.',
          },
        ],
        image: '/images/run-ai-on-tablet-ipad-android-model-by-device-hero-ar.webp',
        imageCaption: 'أفضل نموذج لكل لوحي: يصل iPad Pro M5 (12 جيجابايت / 16 جيجابايت) إلى 32–38 رمز/ثانية على Llama 3.2 3B؛ ويشغّل iPad Air M4 نموذج Phi-4 Mini بسرعة 18–20 رمز/ثانية؛ ويصل Android بذاكرة 8 جيجابايت إلى 10–15 رمز/ثانية عبر Termux؛ أما Pixel Tablet فيتطلب الاتصال عن بُعد بسبب بطء شريحة Tensor G2.',
      },
      frontends: {
        id: 'frontends',
        title: 'واجهات الذكاء الاصطناعي المحلي للوحي',
        content:
          '**تؤثر واجهة الدردشة التي تستخدمها على اللوحي في سهولة الاستخدام تأثيرًا كبيرًا.** بعض الواجهات مصممة للجوّال؛ وأخرى مصممة لسطح المكتب أولًا وتكاد تكون مقبولة على اللوحي.',
        items: [
          '**Open WebUI (متصفح):** أفضل واجهة ويب متجاوبة مع الجوّال للدردشة العامة. تعمل على أي IP:منفذ محلي في Safari أو Chrome. تتكيف بوضوح مع أبعاد شاشات الألواح. موصى بها لإعدادات الاتصال عن بُعد.',
          '**PocketPal AI (تطبيق iPad وAndroid):** مجاني ومفتوح المصدر، يستورد نماذج GGUF ولديه اختبار أداء مدمج. الخيار الأكثر مرونة للتشغيل على الجهاز على المنصتين.',
          '**Locally AI (تطبيق iPad):** واجهة نظيفة بأسلوب Apple مبنية على MLX؛ أبسط تجربة أولى للمستخدمين غير التقنيين على iPad.',
          '**Google AI Edge Gallery (تطبيق iPad وAndroid):** تطبيق من Google يركّز على Gemma؛ أسهل طريقة لتجربة نماذج Google الصغيرة على الجهاز.',
          '**RisuAI (متصفح، متجاوب مع الجوّال):** أفضل تجربة جوّال للعب الأدوار وخيال بطاقات الشخصيات. يمكنه الاتصال بنسخة Ollama بعيدة. يعمل في Safari على iPad بواجهة قريبة من جودة التطبيقات.',
          '**SillyTavern (متصفح):** يعمل في Safari على iPad متصلًا بنسخة Ollama بعيدة. غير محسَّن للجوّال لكنه يؤدي الغرض. بعض ميزات الإضافات لا تعمل في Safari على الجوّال.',
          '**Termux CLI (Android):** سطر أوامر فقط. صالح للمهام المبرمجة؛ وغير عملي للمحادثة دون تطبيق مرافق.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للعب الأدوار وخيال بطاقات الشخصيات على iPad، يُعد RisuAI المتصل بنسخة Ollama بعيدة تشغّل Llama 3.3 70B تركيبة قوية في 2026. واجهة RisuAI للجوّال مصممة للمس؛ ويتيح الاتصال عن بُعد الوصول إلى نموذج 70B ينتج صوت شخصيات أفضل بكثير من أي نموذج يتسع على لوحي.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**البحث عن LLM Farm في App Store.** أزالته Apple في أغسطس 2025. استخدم PocketPal AI أو Locally AI، أو ابنِ LLM Farm من المصدر.',
          '**تشغيل نموذج 7B على لوحي بذاكرة 8 جيجابايت.** عند 5–8 رموز/ثانية، يكون ذلك بطيئًا جدًا للمحادثة. استخدم نماذج 3B للدردشة على الجهاز في الأجهزة بذاكرة 8 جيجابايت؛ واستخدم الاتصال عن بُعد لجودة 7B فصاعدًا.',
          '**استخدام Termux من متجر Play على Android.** نسخة Termux في متجر Play قديمة وتفتقر إلى الحزم اللازمة لـ Ollama. ثبّت Termux دائمًا من F-Droid.',
          '**تعريض Open WebUI للإنترنت دون مصادقة.** لا يملك Open WebUI كلمة مرور افتراضيًا. إذا عرّضته خارج شبكتك المنزلية، فإن أي شخص يعثر على العنوان يصل إلى نموذجك. فعّل نظام الحسابات الإدارية واستخدم جدار حماية.',
          '**عدم إغلاق التطبيقات الأخرى قبل التشغيل على الجهاز في iPad بذاكرة 8 جيجابايت.** يُخلي iOS تطبيقات الخلفية من الذاكرة. يستخدم نموذج 3B على iPad بذاكرة 8 جيجابايت نحو 3.5 جيجابايت؛ وإذا استعاد iOS تلك الذاكرة لتطبيق آخر، ينهار النموذج. أغلق جميع التطبيقات الأخرى قبل بدء الاستدلال.',
          '**توقع واجهة بجودة سطح المكتب في متصفحات الجوّال.** SillyTavern وبعض الواجهات الأخرى مصممة لسطح المكتب أولًا. تجربتها في متصفح الجوّال تؤدي الغرض لكنها ليست مصقولة. لتجربة جوّال أفضل، فضّل RisuAI أو Open WebUI.',
          '**كتابة `ipad.local` في المتصفح.** يحتاج Safari إلى عنوان الجهاز المنزلي — عنوان IP أو اسم المضيف، مثل `192.168.1.20:3000` أو `my-mac.local:3000` — وليس اسم الجهاز اللوحي. اسم مثل `ipad.local` يشير إلى جهاز لوحي، لا إلى الجهاز الذي يشغّل Ollama.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'وثائق LLM Farm (iOS) وGitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Locally AI — [صفحة App Store](https://apps.apple.com/us/app/locally-ai/id6741426692)',
          'Google AI Edge Gallery — [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
          'حزمة Ollama في Termux — [Termux](https://termux.dev) (ثبّت Termux من F-Droid)',
          'بنية Ollama لمعالجات ARM على Termux — [وثائق Ollama](https://ollama.com/docs)',
          'وثائق Open WebUI — [docs.openwebui.com](https://docs.openwebui.com)',
          'مواصفات شريحة Apple M5 لجهاز iPad Pro، وفئات الذاكرة، وسرعة نقل البيانات — [Apple Newsroom، أكتوبر 2025](https://www.apple.com/newsroom/2025/10/apple-introduces-the-powerful-new-ipad-pro-with-the-m5-chip/)',
          'مواصفات شريحة Apple M4 لجهاز iPad Air والذاكرة — [Apple Newsroom، مارس 2026](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)',
          'نظرة عامة على نماذج Gemma 4 ومتطلبات الذاكرة — [Google AI for Developers](https://ai.google.dev/gemma/docs/core)',
          'شريحة Samsung Galaxy Tab S11 Ultra وفئات الذاكرة — [GSMArena](https://m.gsmarena.com/samsung_galaxy_tab_s11_ultra-ampp-14057.php)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن تشغيل الذكاء الاصطناعي على iPad؟',
            a: 'نعم، على iPad Pro M5 (12 جيجابايت أساسًا / 16 جيجابايت في فئتَي 1 تيرابايت و2 تيرابايت) وiPad Air M4 (12 جيجابايت). يشغّل iPad Pro M5 نموذجَي Phi-4 Mini وLlama 3.2 3B في الوقت الفعلي باستخدام PocketPal AI أو Locally AI، وأسرع بنحو 25–30% من iPad Pro M4 السابق بفضل سرعة نقل الذاكرة الأعلى (153 جيجابايت/ثانية مقابل 120). ويشغّل iPad Air M4 نماذج 3B–4B بسلاسة. لنماذج 7B فصاعدًا على iPad، يُوصى بالاتصال عن بُعد بجهاز Mac أو PC منزلي يشغّل Ollama — يعرض الـ iPad الدردشة بينما يتولى الجهاز المنزلي الاستدلال.',
          },
          {
            q: 'هل يعمل Ollama على iPad؟',
            a: 'لا — لا يملك Ollama إصدارًا مدعومًا لـ iPadOS، لذا لا يمكن تثبيته مباشرةً على iPad كما يمكن على Android عبر Termux. "تشغيل Ollama على iPad" يعني تشغيل Ollama على Mac أو PC والاتصال به من متصفح iPad (عبر Open WebUI على عنوان IP المحلي للجهاز المنزلي) — فـ iPad هنا شاشة عرض وليس محرك الاستدلال. للحصول على استدلال حقيقي على الجهاز في iPad، استخدم بدلًا من ذلك تطبيقًا يعمل على الجهاز مثل PocketPal AI (نماذج GGUF عبر llama.cpp) أو Locally AI (نماذج MLX).',
          },
          {
            q: 'هل يمكن تشغيل الذكاء الاصطناعي على لوحي Android؟',
            a: 'نعم، على الأجهزة بذاكرة 8 جيجابايت أو أكثر باستخدام PocketPal AI أو Termux + Ollama. يشغّل Samsung Galaxy Tab S10+ (ذاكرة 12 جيجابايت) نموذج Phi-4 Mini بسرعة ~10–15 رمز/ثانية. ويمكن للأجهزة بذاكرة 6 جيجابايت تشغيل Qwen3 1.7B. يتطلب إعداد Termux تثبيته من F-Droid وإلمامًا ببعض أوامر الطرفية. الاتصال عن بُعد بجهاز منزلي هو الطريق الأسهل لمعظم مستخدمي ألواح Android.',
          },
          {
            q: 'هل يعمل الذكاء الاصطناعي على الجهاز في اللوحي دون إنترنت؟',
            a: 'نعم. بعد تنزيل النموذج وتثبيت التطبيق، يعمل الاستدلال على الجهاز في iPad (PocketPal AI وLocally AI) وAndroid (Termux + Ollama) دون أي اتصال بالإنترنت. هذه إحدى المزايا الرئيسية للتشغيل على الجهاز مقارنةً بالاتصال عن بُعد — فنهج الاتصال عن بُعد يتطلب شبكة Wi-Fi المنزلية.',
          },
          {
            q: 'ما أفضل تطبيق ذكاء اصطناعي لـ iPad؟',
            a: 'للاستدلال على الجهاز: PocketPal AI (مفتوح المصدر، يستورد أي نموذج GGUF) أو Locally AI (أبسط واجهة، MLX). لم يعد LLM Farm متاحًا على App Store. للاتصال عن بُعد بخادم Ollama منزلي: Open WebUI في Safari (الأفضل للدردشة العامة)، وRisuAI في Safari (الأفضل للعب الأدوار وخيال الشخصيات). يعتمد الاختيار الأفضل على ما تريده: القدرة على الجهاز أم الاستخدام دون اتصال أم أفضل جودة واجهة.',
          },
          {
            q: 'هل Termux + Ollama آمن للاستخدام على Android؟',
            a: 'نعم. Termux محاكي طرفية معروف لـ Android يستخدمه ملايين المطورين. يقدّم Ollama في Termux واجهة API محلية فقط (localhost:11434 افتراضيًا) — ولا يمكن الوصول إليها من أجهزة أخرى على شبكتك ما لم تغيّر عنوان الربط صراحةً. تُخزَّن ملفات النماذج في التخزين الخاص بـ Termux، لا في تخزين Android المشترك.',
          },
          {
            q: 'هل يمكنني الحصول محليًا على ردود بجودة ChatGPT على لوحي؟',
            a: 'ليس تمامًا، لكن قريبًا مع الإعداد المناسب. جودة النماذج السحابية المتقدمة تتطلب عمومًا نموذج 70B فأكثر. على اللوحي: لا يستطيع iPad Pro M5 (12 جيجابايت / 16 جيجابايت) تشغيل نماذج 70B — إذ تتسع نماذج 3B–8B فقط. عبر الاتصال عن بُعد: إذا كان جهازك المنزلي يملك بطاقة GPU بذاكرة 24 جيجابايت (RTX 4090) أو ذاكرة موحدة 64 جيجابايت (Mac M5 Max)، فيمكنه تشغيل Llama 3.3 70B، ويصل لوحيك إلى تلك الجودة عبر Open WebUI في المتصفح. هذا أقرب ما يمكن إلى جودة الذكاء الاصطناعي السحابي على لوحي.',
          },
          {
            q: 'كيف أبقي خادم Ollama المنزلي يعمل عند إغلاق غطاء اللابتوب؟',
            a: 'على macOS، اضبط سياسة السكون عند إغلاق الغطاء: إعدادات النظام (System Settings) ← البطارية (Battery) ← عطّل "Enable Power Nap" واستخدم أداة مثل Amphetamine لمنع السكون عند التوصيل بالكهرباء. على Windows، اذهب إلى Power Options ← Change plan settings ← اختر "Never" للسكون عند التوصيل بالكهرباء. أو شغّل Ollama على جهاز يعمل دائمًا (Mini PC أو NAS أو لابتوب قديم أُعيد توظيفه) بدلًا من لابتوبك الأساسي.',
          },
          {
            q: 'هل يستنزف تشغيل الذكاء الاصطناعي على اللوحي البطارية بسرعة؟',
            a: 'نعم — الاستدلال على الجهاز مكثّف على CPU/GPU ويستنزف البطارية أسرع بكثير من التصفح؛ ويختلف المعدل حسب الجهاز والنموذج. للاستخدام الطويل، أبقِ اللوحي موصولًا بالكهرباء. الاتصال عن بُعد بجهاز منزلي يستهلك بطارية اللوحي بدرجة أقل بكثير — فاللوحي يعرض صفحة ويب فقط.',
          },
          {
            q: 'هل تخفّض الألواح أداءها بسبب الحرارة أثناء الاستدلال؟',
            a: 'نعم، خصوصًا في iPad Air M4 وألواح Android التي لا تملك تبريدًا نشطًا. يملك iPad Pro M5 هامشًا حراريًا أكبر من iPad Air، وتخفّض كثير من ألواح Android أداءها أبكر عند الاستدلال المتواصل. أساليب التخفيف: استخدم أجزاء توليد أقصر (200–400 رمز لكل رد)، وضع اللوحي على سطح صلب، وتجنب تشغيل تطبيقات أخرى مكثّفة للمعالج في الوقت نفسه.',
          },
          {
            q: 'ما أفضل لوحة مفاتيح لاستخدام الذكاء الاصطناعي على اللوحي؟',
            a: 'تُعد Apple Magic Keyboard لجهاز iPad Pro M5 (مع لوحة تتبع) الإعداد الأكثر صقلًا — تعمل اختصارات لوحة المفاتيح كاملة في Safari + Open WebUI، وتتيح لوحة التتبع تحديد النص عبر الردود الطويلة. تُعد Logitech Combo Touch البديل الاقتصادي. على Android: تعمل أي لوحة مفاتيح Bluetooth مع Termux لكن التجربة أخشن (طرفية فقط). لأعمال الكتابة، يحوّل iPad Pro + Magic Keyboard اللوحي إلى محطة ذكاء اصطناعي تركّز على الكتابة.',
          },
          {
            q: 'هل يمكنني تشغيل SillyTavern على iPad؟',
            a: 'نعم، عبر الاتصال عن بُعد. يعمل SillyTavern على Mac أو PC منزلي، ويتصل به Safari على iPad عبر عنوان IP المحلي. واجهة الجوّال تؤدي الغرض لكنها غير مصقولة — بعض ميزات الإضافات (أدوات regex ولوحات الدردشة الجماعية) تعمل لكنها تبدو ضيقة. للعب الأدوار تحديدًا، لدى RisuAI واجهة جوّال أفضل من SillyTavern؛ ويمكن لكليهما الاتصال بخلفية Ollama نفسها على جهازك المنزلي.',
          },
          {
            q: 'هل يستطيع اللوحي التعامل مع RAG للمستندات الطويلة؟',
            a: 'على الجهاز، لا — فتضمين أكثر من 1000 مستند على لوحي غير عملي. عبر الاتصال عن بُعد، نعم — يتولى جهازك المنزلي خط RAG بينما يعرض اللوحي واجهة الدردشة. يتعامل AnythingLLM المشغَّل على جهاز منزلي والمُفتوح عبر متصفح اللوحي مع مجموعات مستندات بأي حجم دون حد من جانب اللوحي. للطلاب والعاملين في مجال المعرفة الراغبين في RAG على اللوحي، الاتصال عن بُعد هو عادةً الخيار الأكثر عملية.',
          },
          {
            q: 'هل يمكنني استخدام شاشات خارجية مع الذكاء الاصطناعي على اللوحي؟',
            a: 'نعم على iPad Pro M5 (يمنح Stage Manager مع شاشة خارجية إعدادًا متعدد النوافذ؛ Open WebUI على الشاشة الخارجية، والملاحظات/المستندات المصدر على شاشة iPad). يدعم Galaxy Tab S10 Ultra وضع DeX مع شاشة خارجية لسير عمل مماثل متعدد الشاشات. أما ألواح Android التي لا تملك وضع DeX فتعكس الشاشة فقط — وهذا أقل فائدة. يُعد iPad Pro + شاشة خارجية + Magic Keyboard أقرب ما يصل إليه لوحي من محطة ذكاء اصطناعي حقيقية في 2026.',
          },
          {
            q: 'هل اللوحي أفضل من الهاتف للذكاء الاصطناعي المحلي؟',
            a: 'للاستخدام الكثيف الكتابة (الصياغة وRAG والمحادثات الطويلة)، نعم — فدعم لوحة المفاتيح وحجم الشاشة مهمان. للدردشة السريعة والاستعلامات الصوتية أو الاستخدام أثناء التنقل، الهاتف الذي تحمله أصلًا أفضل. iPad Pro M5 هو اللوحي الأكثر احتمالًا للتفوق على هاتف رائد في الذكاء الاصطناعي المحلي؛ أما الألواح والهواتف المتوسطة فمتقاربة تقريبًا. لا ينبغي لمعظم القراء شراء لوحي لأجل الذكاء الاصطناعي المحلي فقط — اشتره إذا أردت لوحيًا لأسباب أخرى؛ وقدرة الذكاء الاصطناعي ميزة إضافية.',
          },
          {
            q: 'لماذا الذكاء الاصطناعي المحلي بطيء جدًا على لوحي؟',
            a: 'عادةً لأحد أربعة أسباب: النموذج أكبر من الذاكرة الحرة (يستخدم النظام التبديل أو يغلق التطبيق)، أو التوليد محدود بسرعة نقل الذاكرة لا بسرعة الشريحة، أو اللوحي يخفّض أداءه بسبب الحرارة، أو تطبيقات الخلفية تستهلك الذاكرة. الحلول: انتقل إلى نموذج أصغر أو تكميم Q4، وأغلق التطبيقات الأخرى، وأبقِ اللوحي باردًا وموصولًا بالكهرباء، وقس السرعة الفعلية باختبار الأداء المدمج في PocketPal AI. وإذا بقي نموذج 3B بطيئًا جدًا، فاستخدم الاتصال عن بُعد بجهاز منزلي.',
          },
          {
            q: 'أي الألواح يمكنها تشغيل LLM محلي (iPad Air M3 وiPad الأساسي وGalaxy Tab A وHuawei MatePad وXiaomi Pad)؟',
            a: 'الذاكرة والشريحة هما الحَكَم، لا الماركة. يتعامل iPad Air M3 (8 جيجابايت) مع نماذج 1B–3B؛ أما أجهزة iPad الأساسية وألواح Android الاقتصادية بذاكرة أقل من 6 جيجابايت فتتسع فيها نماذج 1B–1.7B فقط، لذا فالاتصال عن بُعد هو الخيار الأفضل لها. تشغّل ألواح Huawei MatePad وXiaomi Pad بذاكرة 8 جيجابايت أو أكثر التطبيقات نفسها التي تعمل على ألواح Android الأخرى، رهنًا بتوفرها في متجر التطبيقات الخاص بها. تحقق من ذاكرة RAM في لوحيك من الإعدادات، ثم اتبع جدول النماذج أعلاه.',
          },
          {
            q: 'هل يوجد تطبيق Ollama لـ iPad؟',
            a: 'لا يوجد تطبيق Ollama رسمي لـ iPadOS. توجد تطبيقات iPad من جهات خارجية تتصل بخادم Ollama على جهاز Mac أو PC لديك — مثل [GetOAI](https://apps.apple.com/app/id6752573799) و[LLLM](https://apps.apple.com/app/id6749804212) — لكنها تعرض الدردشة فقط؛ فالنموذج لا يزال يعمل على الجهاز المنزلي. تحقق من صفحة كل تطبيق في App Store قبل التثبيت. أما مسار المتصفح (Open WebUI في Safari) فلا يحتاج إلى أي تطبيق.',
          },
          {
            q: 'هل يمكنني تشغيل LLM محلي على لوحي Android دون طرفية؟',
            a: 'نعم. ينزّل PocketPal AI (مجاني، مفتوح المصدر، على Google Play) وGoogle AI Edge Gallery (مجاني، Apache 2.0) النماذج ويشغّلانها على الجهاز دون Termux. لا حاجة إلى Termux + Ollama إلا إذا أردت تحديدًا منظومة Ollama أو نقطة API محلية.',
          },
          {
            q: 'هل يمكن لجهاز iPad قديم أو اقتصادي (الجيل 9 أو 10 أو 11، iPad mini، iPad Air 5) تشغيل نموذج لغوي محلي؟',
            a: 'الذاكرة (RAM) هي التي تحسم الأمر. أجهزة iPad من الجيل 9 (3 جيجابايت) والجيل 10 (4 جيجابايت) وiPad mini 6 (4 جيجابايت) أصغر من أن تقدّم دردشة مفيدة على الجهاز، فاستخدم الاتصال عن بُعد. أما iPad الجيل 11 (A16، 6 جيجابايت) فيستوعب نماذج 1B–1.7B بصيغة Q4. ويستوعب iPad mini 7 (A17 Pro، 8 جيجابايت) وiPad Air 5 وiPad Air M3 (8 جيجابايت) نماذج 3B بصيغة Q4 ضمن حدود 8 جيجابايت الموضحة أعلاه. لا تنشر Apple حجم الذاكرة لكل هذه الطرازات؛ الأرقام متداولة على نطاق واسع لكنها ليست مؤكدة من Apple.',
          },
          {
            q: 'هل يعمل نموذج لغوي محلي على Galaxy Tab S11 Ultra أو Galaxy Tab S9 FE؟',
            a: 'يتجاوز Galaxy Tab S11 Ultra (Dimensity 9400+، بذاكرة 12 أو 16 جيجابايت بحسب الفئة) حدّ 8 جيجابايت، ويشغّل التطبيقات نفسها التي يشغّلها Tab S10+ — PocketPal AI وGoogle AI Edge Gallery وTermux + Ollama — مع مساحة أكبر لنماذج 3B–4B. أما Galaxy Tab S9 FE فيُباع بذاكرة 6 أو 8 جيجابايت: نسخة 6 جيجابايت تناسب Qwen3 1.7B فقط، ونسخة 8 جيجابايت تتبع صف 8 جيجابايت في جدول النماذج. شريحة Exynos 1380 من الفئة المتوسطة، فتوقّع سرعة أقل من الأجهزة اللوحية الرائدة.',
          },
          {
            q: 'هل يعمل Gemma 4 على جهاز لوحي؟',
            a: 'نعم، الإصدارات الصغيرة من Gemma 4. تُدرج Google الإصدارين E2B وE4B كأحجام للتشغيل على الجهاز؛ وبترميز 4 بت تذكر Google نحو 2.9 جيجابايت (E2B) و4.5 جيجابايت (E4B) من الذاكرة للأوزان. لذلك يُعد E2B الخيار الأكثر أمانًا للأجهزة اللوحية ذات 8 جيجابايت، ويناسب E4B ذاكرة 12 جيجابايت فأكثر. التطبيق الذي يشغّلهما على iPad وAndroid هو Google AI Edge Gallery، راجع [مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review). لم تقِس PromptQuorum سرعة Gemma 4 على الأجهزة اللوحية.',
          },
          {
            q: 'ما التطبيقات المجانية التي تشغّل نموذجًا لغويًا محليًا على iPad؟',
            a: 'تشغّل PocketPal AI (مجاني، MIT) وGoogle AI Edge Gallery (مجاني، Apache 2.0) وLocally AI (مجاني مع خيارات مدفوعة) النماذج على الجهاز دون تكلفة. كما أن Open WebUI في Safari المتصل بـ Ollama على Mac أو PC مجاني أيضًا. LLM Farm مجاني كذلك، لكنه يتطلب البناء من الشيفرة المصدرية.',
          },
          {
            q: 'هل ما زال بإمكاني تثبيت LLM Farm على iPad؟',
            a: 'ليس من App Store. حذفت Apple تطبيق LLM Farm في أغسطس 2025، ويذكر ملف README الخاص بالمشروع أن App Store وTestFlight غير متاحين مؤقتًا. الطريقة الوحيدة هي بناؤه من [الشيفرة المصدرية](https://github.com/guinmoon/LLMFarm) في Xcode. وكان آخر تحديث رسمي له في 30 يناير 2026، فقد يكون غير مُصان. البديلان القابلان للتثبيت على iPad هما PocketPal AI وLocally AI.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — التطبيق المجاني مفتوح المصدر لنظامَي iOS وAndroid الموصى به أعلاه للتشغيل على الجهاز في الألواح.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — دردشة على الجهاز مبنية على MLX لأجهزة iPad وiPhone.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Gemma من Google للتشغيل على الجهاز لنظامَي iOS وAndroid.',
          '[مراجعة LLM Farm](/ar/power-local-llm/llm-farm-review) — لماذا لم يعد التطبيق على App Store وما يتضمنه البناء من المصدر.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — دليل مكمّل يركز على اختيارات التطبيقات الخاصة بـ iPhone.',
          '[أفضل تطبيقات LLM المحلية لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — دليل مكمّل لاختيارات تطبيقات Android بخلاف Termux + Ollama.',
          '[أفضل نماذج LLM للهاتف في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — دليل طبقة النماذج: أي نموذج هاتف تختار لكل مهمة.',
          '[أنشئ مساعدًا صوتيًا محليًا على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) — دليل بناء مكمّل للمساعد الصوتي على الهاتف دون اتصال.',
          '[أسهل تطبيق AI محلي على Windows وMac وLinux](/ar/power-local-llm/easiest-local-ai-app-windows-mac-linux) — المكافئ لسطح المكتب للمستخدمين الذين يعدّون AI محلي على Mac أو PC.',
          '[أفضل تطبيق AI محلي للحواسيب منخفضة المواصفات](/ar/power-local-llm/best-local-ai-app-low-end-pc) — توصيات للأجهزة محدودة الموارد وذات الذاكرة القليلة.',
          '[أفضل تطبيق AI محلي للمستخدمين غير التقنيين](/ar/power-local-llm/local-ai-app-non-technical-users) — مقارنة تجربة المستخدم تركّز على سهولة البدء والاستخدام.',
          '[SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة roleplay محلية](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة واجهات للوحي للعب الأدوار ببطاقات الشخصيات.',
          '[LM Studio مقابل Jan مقابل GPT4All: مقارنة شاملة](/ar/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — مقارنة تطبيقات سطح المكتب المكمّلة لدليل اللوحي.',
          '[وكلاء AI محليون مع MCP في 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — ربط اللوحي بإعداد وكيل محلي يدعم MCP على جهازك المنزلي.',
          '[أفضل أجهزة اللابتوب لـ LLM محلي](/ar/local-llms/best-laptops-local-llm) — دليل تحديد حجم العتاد للجهاز المنزلي الذي يقترن بالوحي عبر الاتصال عن بُعد.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — نظرة أوسع على النماذج عبر جميع فئات العتاد، بما فيها غير المحمولة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'شغّل ذكاءً اصطناعيًا محليًا على لوحيك: iPad Pro M5 وGalaxy Tab S10 وOnePlus Pad 2 (2026)',
      description: 'كيفية تشغيل ذكاء اصطناعي محلي على iPad أو تابلت Android في 2026. تطبيقات الاستدلال على الجهاز وTermux + Ollama والاتصال عن بُعد بـ Mac أو PC.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PocketPal AI' },
        { '@type': 'SoftwareApplication', name: 'Locally AI' },
        { '@type': 'SoftwareApplication', name: 'Google AI Edge Gallery' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'SoftwareApplication', name: 'Termux' },
      ],
      'proficiencyLevel': 'Beginner',
      about: [
        { '@type': 'Thing', name: 'الاستدلال المحلي للذكاء الاصطناعي' },
        { '@type': 'Thing', name: 'نماذج LLM على اللوحي' },
        { '@type': 'Thing', name: 'تطبيقات iPad للذكاء الاصطناعي' },
        { '@type': 'Thing', name: 'الاستدلال على تابلت Android' },
      ],
    },
  },
}
