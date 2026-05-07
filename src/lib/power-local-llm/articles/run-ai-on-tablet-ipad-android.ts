// Power Local LLM — How to Run AI on a Tablet: iPad and Android (2026)
// Slug: run-ai-on-tablet-ipad-android
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Getting Started',
    title: 'How to Run AI on a Tablet: iPad and Android (2026)',
    seoTitle: 'Run AI on iPad and Android Tablet Locally 2026',
    intro:
      'Running a local AI on a tablet in 2026 is practical on high-end iPads and Android devices with 8 GB+ RAM. This guide covers the options: on-device inference with Pocket Paladin and LLM Farm on iPad, Termux + Ollama on Android, and the remote-connection alternative (connecting a tablet to a Mac or PC running Ollama over local Wi-Fi) for devices that cannot run inference locally.',
    metaDescription:
      'How to run AI locally on an iPad or Android tablet in 2026. On-device inference apps, Termux + Ollama on Android, and remote connection to a home Mac or PC explained.',
    twitterDescription:
      'Run AI on your iPad or Android tablet in 2026: on-device inference (Pocket Paladin, LLM Farm, Termux+Ollama), remote connection to a home Mac/PC, and model picks per device.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Qwen3 1.7B',
      'Gemma 3 4B',
      'Mistral 7B',
    ],
    current_hardware_mentioned: [
      'iPad Pro M4 16 GB',
      'iPad Air M2 8 GB',
      'Samsung Galaxy Tab S10+ 12 GB',
      'Google Pixel Tablet 8 GB',
    ],
    audience:
      'Tablet users who want to run AI locally or connect to a home LLM setup from their iPad or Android device — without relying on cloud AI services.',
    readTime: '11 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'run AI on tablet',
    targetKeywords: [
      'run ai on ipad locally',
      'run local llm android tablet',
      'ollama ipad remote connection',
      'termux ollama android',
      'llm farm ipad',
      'pocket paladin ios llm',
    ],
    leadAnswerBlock:
      '**Running a local AI on a tablet has two distinct modes: on-device inference (the model runs directly on the tablet\'s chip) and remote connection (the tablet is a display for a Mac or PC running Ollama at home). On-device is practical on iPad Pro M4 (16 GB, runs Phi-4 Mini and Llama 3.2 3B at real-time speed), iPad Air M2 (8 GB, runs 3B models adequately), and high-end Android devices with 8 GB+ RAM (Samsung Galaxy Tab S10+, via Termux + Ollama). Remote connection via open WebUI or a simple chat UI at the home server\'s local IP works on any tablet, any RAM, any OS — it turns your tablet into a touch-friendly terminal to a more capable home machine. For most people, remote connection is the better option: the home machine runs the 70B model while the tablet provides the convenient interface.**',
    quickAnswerTop: {
      en: {
        question: 'Can you run a local AI model on an iPad or Android tablet?',
        answer:
          'Yes, on high-end devices. iPad Pro M4 with 16 GB RAM runs Phi-4 Mini (3.8B) and Llama 3.2 3B at real-time speed using LLM Farm or Pocket Paladin. iPad Air M2 (8 GB) runs 3B models adequately. Android tablets with 8 GB+ RAM (Samsung Galaxy Tab S10+) can run Phi-4 Mini and Qwen3 1.7B via Termux + Ollama. For tablets with less RAM or older chips, the practical alternative is remote connection: connect to a Mac or PC running Ollama on your home network using Open WebUI in the tablet\'s browser.',
        bullets: [
          'iPad Pro M4 (16 GB) — runs Phi-4 Mini and Llama 3.2 3B locally at real-time speed using LLM Farm or Pocket Paladin.',
          'iPad Air M2 (8 GB) — runs 3B models at usable speed; 7B models are slow but functional.',
          'Android tablets (8 GB+ RAM) — Termux + Ollama runs Phi-4 Mini and Qwen3 1.7B locally.',
          'Remote connection — any tablet, any RAM: connect to your home Mac or PC running Ollama via Open WebUI in the browser.',
          'Best on-device model for most tablets: Phi-4 Mini (3.8B, ~2.7 GB) or Qwen3 1.7B for RAM-constrained devices.',
          'Remote connection recommended over on-device for 7B+ models — home machine runs the model faster than any tablet.',
          'SillyTavern and RisuAI both have mobile-responsive UIs that work in iPad Safari / Android Chrome.',
        ],
        updatedDate: '2026-05-07',
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
          '**On-device inference is practical on iPad Pro M4 (16 GB) and high-end Android (8 GB+).** Below these thresholds, generation is too slow for real-time use. Remote connection to a home machine is the better option for most tablet users.',
          '**Remote connection is the recommended approach for most people.** Connect your tablet (any RAM, any OS) to a Mac or PC running Ollama on your home network. The home machine runs the 70B model; the tablet gets a touch-friendly chat interface. No model download required on the tablet.',
          '**LLM Farm and Pocket Paladin are the iPad-native options.** Both run GGUF models locally on Apple Silicon chips in iPads. LLM Farm has more configuration options; Pocket Paladin is easier for first-time users.',
          '**Termux + Ollama is the Android approach.** Requires comfort with a terminal but works on any Android device with 8 GB+ RAM. Ollama runs in Termux and serves the model at localhost:11434.',
          '**Best on-device model for most tablets: Phi-4 Mini (3.8B).** Runs on anything with 6 GB+ available RAM; produces usable output for most everyday tasks; downloads in 5–10 minutes on a fast connection.',
          '**Open WebUI in the tablet browser is the simplest remote connection interface.** If your home Mac or PC runs Open WebUI at `192.168.x.x:3000`, open that address in your tablet\'s browser — no app install, no configuration, full chat interface.',
          '**SillyTavern has a mobile-responsive UI.** For roleplay and character-card use on tablet, SillyTavern running on a home machine and accessed from the tablet browser works well; RisuAI has the best native mobile support.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**iPad apps:** LLM Farm (free, open-source), Pocket Paladin (free tier + paid), PocketLLM (older, less active).',
          '**Android method:** Termux + Ollama (CLI) or MNN LLM (app, limited model support).',
          '**Remote connection:** any tablet browser → Open WebUI or a simple chat UI at your home machine\'s local IP.',
          '**Minimum for on-device:** iPad Air M2 (8 GB) for 3B models; iPad Pro M4 (16 GB) for 7B–8B models.',
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
          { 'Factor': 'Model size limit', 'On-Device': '3B–8B (iPad Pro M4); 3B (most tablets)', 'Remote Connection': 'Unlimited — home machine runs any model' },
          { 'Factor': 'Offline use', 'On-Device': 'Yes — works without Wi-Fi', 'Remote Connection': 'No — requires home Wi-Fi' },
          { 'Factor': 'Generation speed', 'On-Device': 'Moderate (10–25 tok/sec on iPad Pro M4)', 'Remote Connection': 'Depends on home machine (up to 40+ tok/sec)' },
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
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: On-Device Inference',
        content:
          '**iPad Pro M4 (16 GB) is the only iPad that runs 7B models at a comfortable speed.** iPad Air M2 (8 GB) and M3 (8 GB) run 3B models adequately. iPhone with 8 GB RAM (iPhone 15 Pro Max) also runs small models through LLM Farm.',
        items: [
          '**LLM Farm** (free, open-source): downloads GGUF models from Hugging Face, runs them using llama.cpp on Apple Silicon. Best performance of the iOS-native options. Supports chat and completion modes. Install from App Store.',
          '**Pocket Paladin** (free tier + subscription): curated model downloads, cleaner UI than LLM Farm, slightly simpler first-run experience. Free tier includes 3B models; subscription unlocks larger models and API mode.',
          '**Importing models:** in LLM Farm, tap the model library icon → "Add Model from URL" → paste a Hugging Face direct download URL for a GGUF file. Alternatively, use Apple Files to transfer a GGUF downloaded elsewhere. Models are stored in the app\'s local storage — not iCloud.',
          '**RAM management on iPad:** iOS aggressively manages RAM for background apps. Close all other apps before running a 7B model on an 8 GB iPad — iOS will evict the model if another app needs memory. On the 16 GB iPad Pro M4, this is rarely an issue.',
          '**Generation speed expectations:** iPad Pro M4 (16 GB): Phi-4 Mini ~20 tok/sec, Llama 3.2 3B ~30 tok/sec, Gemma 3 4B ~18 tok/sec. iPad Air M2 (8 GB): 3B models ~12–18 tok/sec; 7B models ~5–8 tok/sec (slow for real-time chat).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not try to run a 7B model on an 8 GB iPad for real-time chat. At 5–8 tokens per second, every response takes 15–30 seconds. This is usable for summarisation tasks where you send a prompt and wait, but frustrating for conversational use. Use 3B models on 8 GB devices; upgrade to a 16 GB device or switch to remote connection for 7B+.',
          },
        ],
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: On-Device Inference',
        content:
          '**Android on-device inference requires Termux — a Linux terminal emulator that runs Ollama natively on Android.** This is more technical than the iPad app experience but gives access to the full Ollama ecosystem.',
        numberedItems: [
          'Install Termux from F-Droid (not the Play Store version — the Play Store build is outdated and lacks required packages).',
          'In Termux: `pkg update && pkg install curl`',
          'Download the Ollama ARM binary: `curl -fsSL https://ollama.com/install.sh | sh` — this installs the ARM64 build compatible with most Android tablets.',
          'Pull a model: `ollama pull phi4-mini` or `ollama pull qwen3:1.7b`.',
          'Start the server: `ollama serve` (keep this running in a Termux session).',
          'Chat via Termux: `ollama run phi4-mini` — or open a web browser and go to `http://localhost:11434` to access the API. Install an Android chat app that connects to a local Ollama endpoint for a GUI.',
        ],
        items: [
          '**Supported devices for 3B+ models:** 8 GB RAM minimum (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Devices with 6 GB run Qwen3 1.7B only.',
          '**Snapdragon 8 Gen 3 and Dimensity 9300** are the fastest Android chips for on-device inference in 2026. Generation speed: ~15–25 tok/sec for 1.7B models; ~8–12 tok/sec for 3B models.',
          '**Model storage:** Android does not have unified memory — the model runs in system RAM without GPU acceleration in most Termux configurations. GPU acceleration requires Termux:NVIDIA or specific Vulkan builds; setup is more complex.',
          '**Alternative apps:** MNN LLM (Alibaba, free, Android app with on-device inference for select models) is an easier setup but has a more limited model selection than Ollama. AI Runner and llamafile also have Android builds with varying support.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install the Termux:Widget addon and create a shortcut that runs "ollama serve" — this lets you start the Ollama server from your Android home screen without opening Termux manually. Once Ollama is serving, open any chat app configured to connect to localhost:11434.',
          },
        ],
      },
      remoteConnection: {
        id: 'remote-connection',
        title: 'Remote Connection to a Home Machine',
        content:
          '**The simplest setup for most tablet users: run Ollama and Open WebUI on your home Mac or PC, then access the chat UI from your tablet browser on the same Wi-Fi network.** Your tablet becomes a touch-screen interface to the more powerful home machine.',
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
          '**Find your home machine\'s local IP:** on macOS, System Preferences → Network → the current network → IP Address. On Windows, run `ipconfig` in Command Prompt and look for IPv4 Address. Note the IP (typically `192.168.x.x`).',
          '**On the tablet:** open Safari (iPad) or Chrome (Android). Navigate to `http://[your-machine-IP]:3000`. Create an account in Open WebUI (local only, no cloud). Select your model from the dropdown. Start chatting.',
          '**Security:** this setup is local-network-only. Do not expose port 3000 to the internet without adding Open WebUI authentication (it has a built-in admin account system). The connection is plain HTTP — do not send sensitive information over public Wi-Fi.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Bookmark the home machine\'s Open WebUI URL on your tablet\'s home screen (in Safari: Share → Add to Home Screen; in Chrome: three-dot menu → Add to Home Screen). This makes it feel like a native app. On iPad, full-screen web apps in Safari hide the browser chrome for an app-like experience.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations by Device',
        content:
          '**Model choice is determined by available RAM — not by preference.** The table below maps device RAM to the largest model that runs at real-time speed (over 8 tokens/sec).',
        columns: ['Device / RAM', 'Recommended Model', 'Download Size', 'Expected Speed'],
        rows: [
          { 'Device / RAM': 'iPad Air M2 / M3 — 8 GB', 'Recommended Model': 'Phi-4 Mini (3.8B Q4)', 'Download Size': '~2.7 GB', 'Expected Speed': '~15–18 tok/sec' },
          { 'Device / RAM': 'iPad Pro M4 — 16 GB', 'Recommended Model': 'Llama 3.2 3B or Gemma 3 4B (Q4)', 'Download Size': '2–3 GB', 'Expected Speed': '~25–30 tok/sec (3B); ~15–20 tok/sec (7B)' },
          { 'Device / RAM': 'Android 8 GB (Tab S10+)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4) via Termux+Ollama', 'Download Size': '~2.7 GB', 'Expected Speed': '~10–15 tok/sec' },
          { 'Device / RAM': 'Android 6 GB', 'Recommended Model': 'Qwen3 1.7B (Q4)', 'Download Size': '~1.1 GB', 'Expected Speed': '~15–20 tok/sec' },
          { 'Device / RAM': 'Any tablet via remote connection', 'Recommended Model': 'Any — runs on home machine', 'Download Size': 'N/A (stored on home machine)', 'Expected Speed': 'Depends on home machine (~20–40 tok/sec for 70B on RTX 4090)' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For most everyday tasks (drafting text, answering questions, summarising content), Phi-4 Mini (3.8B) on a tablet is adequately capable. Where it falls short compared to a 70B model: complex multi-step reasoning, nuanced creative writing, and long document analysis. For these tasks, use remote connection to a home machine running a larger model.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Tablet Frontends for Local AI',
        content:
          '**The chat interface you use on the tablet affects usability significantly.** Some frontends are designed for mobile; others are desktop-first and just tolerable on tablet.',
        items: [
          '**Open WebUI (browser):** best mobile-responsive web UI for general chat. Works at any local IP:port in Safari or Chrome. Adapts cleanly to tablet aspect ratios. Recommended for remote connection setups.',
          '**LLM Farm (iPad app):** designed for iOS, uses the full iPad display. Most capable on-device option for iPad. Lacks the polish of desktop apps but purpose-built for iOS inference.',
          '**Pocket Paladin (iPad app):** cleaner UI than LLM Farm, designed for general users. Free tier runs 3B models; the paid tier unlocks larger models and API access.',
          '**RisuAI (browser, mobile-responsive):** best mobile experience for roleplay and character-card fiction. Can connect to a remote Ollama instance. Works in iPad Safari with a near-app-quality interface.',
          '**SillyTavern (browser):** works on iPad Safari connected to a remote Ollama instance. Not optimised for mobile but functional. Some extension features do not work in mobile Safari.',
          '**Termux CLI (Android):** command-line only. Usable for scripted tasks; not practical for conversational use without a companion app.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For roleplay and character-card fiction on iPad, RisuAI connected to a remote Ollama instance running Llama 3.3 70B is the best combination available in 2026. RisuAI\'s mobile interface is designed for touch; the remote connection gives access to a 70B model that produces significantly better character voice than any model that fits on a tablet.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Running a 7B model on an 8 GB tablet.** At 5–8 tokens/sec, this is too slow for conversational use. Use 3B models for on-device chat on 8 GB devices; use remote connection for 7B+ quality.',
          '**Using the Play Store Termux on Android.** The Play Store version of Termux is outdated and lacks the packages needed for Ollama. Always install Termux from F-Droid.',
          '**Exposing Open WebUI to the internet without authentication.** Open WebUI has no password by default. If you expose it beyond your home network, anyone who finds the URL gets access to your model. Enable the admin account system and use a firewall.',
          '**Not closing other apps before running on-device on 8 GB iPad.** iOS evicts background apps from RAM. A 3B model on an 8 GB iPad uses ~3.5 GB; if iOS reclaims that memory for another app, the model crashes. Close all other apps before starting inference.',
          '**Expecting desktop-quality UI on mobile browsers.** SillyTavern and some other frontends are desktop-first. Their mobile experience in a browser is functional but not polished. For mobile-first UX, prefer RisuAI or Open WebUI.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LLM Farm (iOS) documentation and GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'Pocket Paladin iOS app — [App Store](https://apps.apple.com)',
          'Ollama ARM build for Termux — [Ollama documentation](https://ollama.com/docs)',
          'Open WebUI documentation — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M4 chip memory bandwidth and Neural Engine specs — [Apple Silicon](https://apple.com/newsroom)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can you run AI on an iPad?',
            a: 'Yes, on iPad Pro M4 (16 GB) and iPad Air M2/M3 (8 GB). The iPad Pro M4 runs Phi-4 Mini and Llama 3.2 3B at real-time speed using LLM Farm or Pocket Paladin. The iPad Air M2 runs 3B models adequately. For 7B+ models on an iPad, remote connection to a home Mac or PC running Ollama is recommended — the iPad displays the chat but the home machine handles inference.',
          },
          {
            q: 'Can you run AI on an Android tablet?',
            a: 'Yes, on devices with 8 GB+ RAM using Termux + Ollama. The Samsung Galaxy Tab S10+ (12 GB RAM) runs Phi-4 Mini at ~10–15 tokens/sec. Devices with 6 GB RAM can run Qwen3 1.7B. The setup requires Termux from F-Droid and comfort with a few terminal commands. Remote connection to a home machine is the easier path for most Android tablet users.',
          },
          {
            q: 'Does on-device AI on a tablet work without internet?',
            a: 'Yes. Once the model is downloaded and the app is installed, on-device inference on iPad (LLM Farm, Pocket Paladin) and Android (Termux + Ollama) works with no internet connection. This is one of the main advantages of on-device over remote connection — the remote connection approach requires your home Wi-Fi.',
          },
          {
            q: 'What is the best AI app for iPad?',
            a: 'For on-device inference: LLM Farm (more options, open-source) or Pocket Paladin (simpler UI). For remote connection to a home Ollama server: Open WebUI in Safari (best general chat), RisuAI in Safari (best for roleplay and character fiction). The best choice depends on whether you want on-device capability, offline use, or the best interface quality.',
          },
          {
            q: 'Is Termux + Ollama safe to use on Android?',
            a: 'Yes. Termux is a well-established Android terminal emulator used by millions of developers. Ollama in Termux serves a local-only API (localhost:11434 by default) — it is not accessible from other devices on your network unless you explicitly change the bind address. The model files are stored in Termux\'s private storage, not in shared Android storage.',
          },
          {
            q: 'Can I use ChatGPT-quality responses on a tablet locally?',
            a: 'Not quite, but close with the right setup. GPT-4o quality requires a 70B+ model. On a tablet: the iPad Pro M4 (16 GB) cannot run 70B models — only 3B–8B models fit. Via remote connection: if your home machine has a 24 GB GPU (RTX 4090) or 64 GB unified memory (Mac M5 Max), it can run Llama 3.3 70B, and your tablet accesses that quality via Open WebUI in the browser. That is the closest to cloud-AI quality on a tablet.',
          },
          {
            q: 'How do I keep my home Ollama server running when I close the laptop lid?',
            a: 'On macOS, set the lid-close sleep policy: System Preferences → Battery → disable "Enable Power Nap" and use a tool like Amphetamine to prevent sleep when plugged in. On Windows, go to Power Options → Change plan settings → "Never" for sleep when plugged in. Alternatively, run Ollama on a always-on machine (mini PC, NAS, or a repurposed old laptop) rather than your primary laptop.',
          },
          {
            q: 'Does running AI on a tablet drain the battery quickly?',
            a: 'Yes — on-device inference is CPU/GPU-intensive. Running Phi-4 Mini on an iPad Pro M4 for active conversation drains the battery at roughly 20–30% per hour. For extended use, keep the tablet plugged in. Remote connection to a home machine draws significantly less tablet battery — the tablet is just displaying a web page.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Easiest Local AI App for Windows, Mac, and Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — the desktop equivalent for users setting up local AI on a Mac or PC.',
          '[Best Local AI App for Low-End PCs](/power-local-llm/best-local-ai-app-low-end-pc) — recommendations for resource-constrained devices with limited RAM.',
          '[Best Local AI App for Non-Technical Users](/power-local-llm/local-ai-app-non-technical-users) — user-experience comparison focused on onboarding and ease of use.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — mobile UI comparison for character-card roleplay on tablet.',
          '[LM Studio vs Jan vs GPT4All: Full Comparison](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — desktop app comparison that complements the tablet guide.',
          '[Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — connecting a tablet to an MCP-enabled local agent setup on your home machine.',
        ],
      },
    },
  },
}
