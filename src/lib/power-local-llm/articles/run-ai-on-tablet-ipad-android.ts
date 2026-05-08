// Power Local LLM — Run Local AI on Your Tablet: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)
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
    theme: 'Mobile & Edge LLMs',
    title: 'Run Local AI on Your Tablet: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)',
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
          '**iPad Pro M4 (16 GB) is the only iPad that runs 7B models at a comfortable speed.** iPad Air M2 (8 GB) and M3 (8 GB) run 3B models adequately. [iPhone with 8 GB RAM (iPhone 15 Pro Max) also runs small models](/power-local-llm/best-local-llm-apps-iphone-2026) through LLM Farm.',
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
          '**Android on-device inference uses [Termux + Ollama](/power-local-llm/best-local-llm-apps-android-2026) — Termux is a Linux terminal emulator that runs Ollama natively on Android.** This is more technical than the iPad app experience but gives access to the full Ollama ecosystem.',
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
          '**Pixel Tablet not recommended for on-device:** Pixel Tablet (2023 model, 8 GB Tensor G2) was excluded from the recommended on-device list — Tensor G2 is significantly slower than Snapdragon 8 Gen 3 / Dimensity 9300 for LLM inference, producing 4–7 tok/sec on Phi-4 Mini (too slow for conversational use). Pixel Tablet users should use remote connection to a home machine.',
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
          '**Model choice is determined by available RAM — not by preference.** The table below maps device RAM to the largest model that runs at real-time speed (over 8 tokens/sec). For the model layer specifically, see [Best Mobile LLM Models in 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm). For the broader model landscape across all hardware tiers, see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        columns: ['Device / RAM', 'Recommended Model', 'Speed', 'Best for'],
        rows: [
          { 'Device / RAM': 'iPad Air M2 / M3 (8 GB)', 'Recommended Model': 'Phi-4 Mini Q4', 'Speed': '~15–18 tok/sec', 'Best for': 'Writing assistance, summarization' },
          { 'Device / RAM': 'iPad Pro M4 (16 GB)', 'Recommended Model': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Speed': '~25–30 tok/sec / ~15–20 tok/sec', 'Best for': 'Real LLM workstation, RAG, fiction drafting' },
          { 'Device / RAM': 'Android 8 GB (Tab S10+)', 'Recommended Model': 'Phi-4 Mini Q4 via Termux+Ollama', 'Speed': '~10–15 tok/sec', 'Best for': 'Power users comfortable with Termux' },
          { 'Device / RAM': 'Android 6 GB', 'Recommended Model': 'Qwen3 1.7B Q4', 'Speed': '~15–20 tok/sec', 'Best for': 'Light chat, translation, simple tasks' },
          { 'Device / RAM': 'Pixel Tablet (8 GB)', 'Recommended Model': 'Remote connection only', 'Speed': 'N/A', 'Best for': 'Tensor G2 too slow for on-device' },
          { 'Device / RAM': 'Any tablet via remote', 'Recommended Model': 'Any model on home machine', 'Speed': '~20–40 tok/sec', 'Best for': 'Quality-first use, 70B models' },
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
          {
            q: 'Do tablets thermal-throttle during AI inference?',
            a: 'Yes, especially on iPad Air M2 / M3 and Android tablets without active cooling. iPad Pro M4 has better thermal headroom and sustains generation speed for ~10–15 minutes before noticeable throttling. Android tablets thermal-throttle faster (5–8 minutes of sustained inference). Mitigations: use shorter generation chunks (200–400 tokens per response), keep the tablet on a hard surface, and avoid running other CPU-heavy apps simultaneously.',
          },
          {
            q: 'Which keyboard works best for AI tablet use?',
            a: 'Apple Magic Keyboard for iPad Pro M4 (with trackpad) is the most polished setup — full keyboard shortcuts work in Safari + Open WebUI, trackpad enables text selection across long responses. Logitech Combo Touch is the budget alternative. Android: any Bluetooth keyboard works with Termux but the experience is rougher (terminal-only). For prose work, an iPad Pro + Magic Keyboard turns the tablet into a writing-first AI workstation.',
          },
          {
            q: 'Can I run SillyTavern on iPad?',
            a: 'Yes, via remote connection. SillyTavern runs on a home Mac or PC, and iPad Safari connects to it at the local IP. Mobile UI is functional but not polished — some extension features (regex tools, group chat panels) work but feel cramped. For roleplay specifically, RisuAI has better mobile UI than SillyTavern; both can connect to the same Ollama backend on your home machine.',
          },
          {
            q: 'Can a tablet handle long-form RAG?',
            a: 'On-device, no — embedding 1,000+ documents on a tablet is impractical. Via remote connection, yes — your home machine handles the RAG pipeline, the tablet displays the chat interface. AnythingLLM running on a home machine and accessed via browser on the tablet handles document collections of any size with no tablet-side limit. For students or knowledge workers wanting RAG on tablet, remote connection is the only practical option.',
          },
          {
            q: 'Can I use external displays with tablet AI?',
            a: 'Yes on iPad Pro M4 (Stage Manager + external display gives a multi-window setup; Open WebUI on the external monitor, notes/source documents on the iPad screen). Galaxy Tab S10 Ultra supports DeX mode with an external display for similar multi-monitor AI workflow. Android tablets without DeX mode mirror the screen — less useful. iPad Pro + external monitor + Magic Keyboard is the closest a tablet gets to a real AI workstation in 2026.',
          },
          {
            q: 'Is a tablet better than a phone for local AI?',
            a: 'For typing-heavy use (drafting, RAG, long conversations), yes — keyboard support and screen size matter. For quick chat, voice queries, or on-the-go use, the phone you already carry is better. The iPad Pro M4 is the only tablet that significantly outperforms a flagship phone for local AI; mid-range tablets and phones are roughly equivalent. Most readers should not buy a tablet specifically for local AI — buy one if you want a tablet for other reasons; AI capability is a bonus.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Mobile & Edge LLMs',
    title: 'KI lokal auf Ihrem Tablet ausführen: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'KI lokal auf iPad und Android-Tablet 2026 ausführen',
    intro:
      'Die Ausführung einer lokalen KI auf einem Tablet ist 2026 auf High-End-iPads und Android-Geräten mit 8 GB+ RAM praktisch. Diese Anleitung behandelt die Optionen: lokale Inferenz auf iPad mit Pocket Paladin und LLM Farm, Termux + Ollama auf Android sowie die Remote-Verbindungsmöglichkeit (Verbindung eines Tablets mit einem Mac oder PC, auf dem Ollama über lokales Wi-Fi ausgeführt wird) für Geräte, die keine lokale Inferenz durchführen können.',
    metaDescription:
      'So führen Sie KI lokal auf einem iPad oder Android-Tablet 2026 aus. Lokale Inferenz-Apps, Termux + Ollama auf Android und Remote-Verbindung zu einem Home-Mac oder PC erklärt.',
    twitterDescription:
      'KI auf Ihrem iPad oder Android-Tablet 2026 ausführen: lokale Inferenz (Pocket Paladin, LLM Farm, Termux+Ollama), Remote-Verbindung zu einem Home-Mac/PC und Modellauswahl pro Gerät.',
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
      'Tablet-Benutzer, die KI lokal ausführen oder sich von ihrem iPad oder Android-Gerät mit einem lokalem LLM-Setup verbinden möchten — ohne auf Cloud-KI-Services zu verlassen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'KI auf Tablet ausführen',
    targetKeywords: [
      'KI lokal auf iPad ausführen',
      'lokales LLM auf Android-Tablet ausführen',
      'Ollama iPad Remote-Verbindung',
      'Termux Ollama Android',
      'LLM Farm iPad',
      'Pocket Paladin iOS LLM',
    ],
    leadAnswerBlock:
      '**Die Ausführung einer lokalen KI auf einem Tablet hat zwei unterschiedliche Modi: lokale Inferenz (das Modell wird direkt auf dem Prozessor des Tablets ausgeführt) und Remote-Verbindung (das Tablet ist eine Anzeige für einen Mac oder PC, auf dem zu Hause Ollama ausgeführt wird). Lokale Inferenz ist praktisch auf iPad Pro M4 (16 GB, führt Phi-4 Mini und Llama 3.2 3B in Echtzeit aus), iPad Air M2 (8 GB, führt 3B-Modelle angemessen aus) und High-End-Android-Geräten mit 8 GB+ RAM (Samsung Galaxy Tab S10+, über Termux + Ollama) aus. Die Remote-Verbindung über Open WebUI oder eine einfache Chat-UI unter der lokalen IP des Home-Servers funktioniert auf jedem Tablet, RAM, jedem Betriebssystem — es verwandelt Ihr Tablet in eine Touch-freundliche Schnittstelle zu einem leistungsfähigeren Home-Computer. Für die meisten Menschen ist die Remote-Verbindung die bessere Option: Der Home-Computer führt das 70B-Modell aus, während das Tablet die bequeme Schnittstelle bereitstellt.**',
    quickAnswerTop: {
      de: {
        question: 'Können Sie ein lokales KI-Modell auf einem iPad oder Android-Tablet ausführen?',
        answer:
          'Ja, auf High-End-Geräten. iPad Pro M4 mit 16 GB RAM führt Phi-4 Mini (3.8B) und Llama 3.2 3B in Echtzeit mit LLM Farm oder Pocket Paladin aus. iPad Air M2 (8 GB) führt 3B-Modelle angemessen aus. Android-Tablets mit 8 GB+ RAM (Samsung Galaxy Tab S10+) können Phi-4 Mini und Qwen3 1.7B über Termux + Ollama lokal ausführen. Für Tablets mit weniger RAM oder älteren Chips ist die praktische Alternative die Remote-Verbindung: Verbinden Sie sich mit einem Mac oder PC, auf dem Ollama in Ihrem Heimnetzwerk läuft, über Open WebUI im Browser des Tablets.',
        bullets: [
          'iPad Pro M4 (16 GB) — führt Phi-4 Mini und Llama 3.2 3B lokal in Echtzeit mit LLM Farm oder Pocket Paladin aus.',
          'iPad Air M2 (8 GB) — führt 3B-Modelle in nutzbarer Geschwindigkeit aus; 7B-Modelle sind langsam, aber funktionsfähig.',
          'Android-Tablets (8 GB+ RAM) — Termux + Ollama führt Phi-4 Mini und Qwen3 1.7B lokal aus.',
          'Remote-Verbindung — jedes Tablet, jede RAM, jedes Betriebssystem: Verbinden Sie sich mit Ihrem Home-Mac oder PC, auf dem Ollama über Open WebUI im Browser läuft.',
          'Bestes Modell für die meisten Tablets: Phi-4 Mini (3.8B, ~2,7 GB) oder Qwen3 1.7B für RAM-limitierte Geräte.',
          'Remote-Verbindung wird gegenüber On-Device für 7B+ Modelle empfohlen — der Home-Computer führt das Modell schneller aus als jedes Tablet.',
          'SillyTavern und RisuAI haben beide mobile-responsive UIs, die in iPad Safari / Android Chrome funktionieren.',
        ],
        updatedDate: '2026-05-07',
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
          '**Lokale Inferenz ist praktisch auf iPad Pro M4 (16 GB) und High-End-Android (8 GB+).** Unterhalb dieser Schwellen ist die Generierung zu langsam für die Echtzeitnutzung. Die Remote-Verbindung zu einem Home-Computer ist die bessere Option für die meisten Tablet-Benutzer.',
          '**Die Remote-Verbindung ist der empfohlene Ansatz für die meisten Menschen.** Verbinden Sie Ihr Tablet (beliebige RAM, beliebiges Betriebssystem) mit einem Mac oder PC, auf dem Ollama in Ihrem Heimnetzwerk läuft. Der Home-Computer führt das 70B-Modell aus; das Tablet erhält eine Touch-freundliche Chat-Schnittstelle. Kein Model-Download auf dem Tablet erforderlich.',
          '**LLM Farm und Pocket Paladin sind die iPad-nativen Optionen.** Beide führen GGUF-Modelle lokal auf Apple Silicon-Chips in iPads aus. LLM Farm bietet mehr Konfigurationsoptionen; Pocket Paladin ist einfacher für Anfänger.',
          '**Termux + Ollama ist der Android-Ansatz.** Erfordert Komfort mit einem Terminal, funktioniert aber auf jedem Android-Gerät mit 8 GB+ RAM. Ollama läuft in Termux und stellt das Modell unter localhost:11434 bereit.',
          '**Bestes Modell für die meisten Tablets: Phi-4 Mini (3.8B).** Läuft auf allem mit 6 GB+ verfügbarem RAM; liefert nutzbare Ausgabe für die meisten alltäglichen Aufgaben; Download in 5–10 Minuten bei schneller Verbindung.',
          '**Open WebUI im Browser des Tablets ist die einfachste Remote-Verbindungs-Schnittstelle.** Wenn Ihr Home-Mac oder PC Open WebUI unter `192.168.x.x:3000` ausführt, öffnen Sie diese Adresse im Browser Ihres Tablets — keine App-Installation, keine Konfiguration, vollständige Chat-Schnittstelle.',
          '**SillyTavern hat eine mobile-responsive UI.** Für Roleplay und Character-Card-Nutzung auf Tablet funktioniert SillyTavern, das auf einem Home-Computer läuft und vom Browser des Tablets aus zugegriffen wird, gut; RisuAI hat die beste native mobile Unterstützung.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**iPad-Apps:** LLM Farm (kostenlos, Open-Source), Pocket Paladin (kostenlose Stufe + bezahlt), PocketLLM (älter, weniger aktiv).',
          '**Android-Methode:** Termux + Ollama (CLI) oder MNN LLM (App, begrenzte Model-Unterstützung).',
          '**Remote-Verbindung:** jeder Tablet-Browser → Open WebUI oder eine einfache Chat-UI unter der lokalen IP Ihres Home-Computers.',
          '**Minimum für On-Device:** iPad Air M2 (8 GB) für 3B-Modelle; iPad Pro M4 (16 GB) für 7B–8B-Modelle.',
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
          { 'Faktor': 'Modellgrößenlimit', 'Lokale Inferenz': '3B–8B (iPad Pro M4); 3B (die meisten Tablets)', 'Remote-Verbindung': 'Unbegrenzt — Home-Computer führt jedes Modell aus' },
          { 'Faktor': 'Offline-Nutzung', 'Lokale Inferenz': 'Ja — funktioniert ohne Wi-Fi', 'Remote-Verbindung': 'Nein — erfordert Home-Wi-Fi' },
          { 'Faktor': 'Generierungsgeschwindigkeit', 'Lokale Inferenz': 'Moderat (10–25 Token/Sek auf iPad Pro M4)', 'Remote-Verbindung': 'Hängt vom Home-Computer ab (bis zu 40+ Token/Sek)' },
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
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad: Lokale Inferenz',
        content:
          '**iPad Pro M4 (16 GB) ist das einzige iPad, das 7B-Modelle mit angenehmer Geschwindigkeit ausführt.** iPad Air M2 (8 GB) und M3 (8 GB) führen 3B-Modelle angemessen aus. [iPhone mit 8 GB RAM (iPhone 15 Pro Max) führt auch kleine Modelle aus](/de/power-local-llm/best-local-llm-apps-iphone-2026) über LLM Farm.',
        items: [
          '**LLM Farm** (kostenlos, Open-Source): lädt GGUF-Modelle von Hugging Face herunter und führt sie mit llama.cpp auf Apple Silicon aus. Beste Leistung der iOS-nativen Optionen. Unterstützt Chat- und Completion-Modi. Installation aus dem App Store.',
          '**Pocket Paladin** (kostenlose Stufe + Abonnement): kuratierte Model-Downloads, saubere UI als LLM Farm, etwas einfachere Erfahrung beim ersten Start. Die kostenlose Stufe umfasst 3B-Modelle; das Abonnement entsperrt größere Modelle und API-Modus.',
          '**Modelle importieren:** in LLM Farm, tippen Sie auf das Model-Library-Symbol → "Modell von URL hinzufügen" → fügen Sie eine direkte Download-URL von Hugging Face für eine GGUF-Datei ein. Alternativ können Sie Apple Files verwenden, um eine GGUF-Datei, die an anderer Stelle heruntergeladen wurde, zu übertragen. Modelle werden im lokalen Speicher der App gespeichert — nicht in iCloud.',
          '**RAM-Verwaltung auf iPad:** iOS verwaltet RAM aggressiv für Hintergrund-Apps. Schließen Sie alle anderen Apps vor dem Ausführen eines 7B-Modells auf einem 8 GB-iPad — iOS wird das Modell entfernen, wenn eine andere App Speicher benötigt. Auf dem 16 GB iPad Pro M4 ist dies selten ein Problem.',
          '**Erwartungen zur Generierungsgeschwindigkeit:** iPad Pro M4 (16 GB): Phi-4 Mini ~20 Token/Sek, Llama 3.2 3B ~30 Token/Sek, Gemma 3 4B ~18 Token/Sek. iPad Air M2 (8 GB): 3B-Modelle ~12–18 Token/Sek; 7B-Modelle ~5–8 Token/Sek (zu langsam für Echtzeit-Chat).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Versuchen Sie nicht, ein 7B-Modell auf einem 8 GB-iPad für Echtzeit-Chat auszuführen. Mit 5–8 Token pro Sekunde dauert jede Antwort 15–30 Sekunden. Dies ist für Zusammenfassungsaufgaben nützlich, bei denen Sie einen Prompt senden und warten, aber frustrierend für gesprächsbasierte Nutzung. Verwenden Sie 3B-Modelle auf 8 GB-Geräten; Upgrade auf ein 16 GB-Gerät oder wechseln Sie zur Remote-Verbindung für 7B+.',
          },
        ],
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android: Lokale Inferenz',
        content:
          '**Android On-Device-Inferenz verwendet [Termux + Ollama](/de/power-local-llm/best-local-llm-apps-android-2026) — Termux ist ein Linux-Terminal-Emulator, der Ollama nativ auf Android ausführt.** Dies ist technischer als die iPad-App-Erfahrung, gibt aber Zugriff auf das vollständige Ollama-Ökosystem.',
        numberedItems: [
          'Installieren Sie Termux von F-Droid (nicht die Play Store-Version — der Play Store-Build ist veraltet und fehlen erforderliche Pakete).',
          'In Termux: `pkg update && pkg install curl`',
          'Laden Sie den Ollama ARM-Build herunter: `curl -fsSL https://ollama.com/install.sh | sh` — dies installiert den ARM64-Build, der mit den meisten Android-Tablets kompatibel ist.',
          'Ziehen Sie ein Modell: `ollama pull phi4-mini` oder `ollama pull qwen3:1.7b`.',
          'Starten Sie den Server: `ollama serve` (halten Sie dies in einer Termux-Sitzung aktiv).',
          'Chat über Termux: `ollama run phi4-mini` — oder öffnen Sie einen Web-Browser und gehen Sie zu `http://localhost:11434`, um auf die API zuzugreifen. Installieren Sie eine Android-Chat-App, die sich mit einem lokalen Ollama-Endpoint für eine GUI verbindet.',
        ],
        items: [
          '**Unterstützte Geräte für 3B+ Modelle:** 8 GB RAM-Minimum (Samsung Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). Geräte mit 6 GB führen nur Qwen3 1.7B aus.',
          '**Pixel Tablet nicht empfohlen für On-Device:** Pixel Tablet (2023-Modell, 8 GB Tensor G2) wurde von der empfohlenen On-Device-Liste ausgeschlossen — Tensor G2 ist bei der LLM-Inferenz erheblich langsamer als Snapdragon 8 Gen 3 / Dimensity 9300 und liefert 4–7 Token/Sek auf Phi-4 Mini (zu langsam für gesprächsbasierte Nutzung). Pixel-Tablet-Benutzer sollten die Remote-Verbindung zu einem Home-Computer verwenden.',
          '**Snapdragon 8 Gen 3 und Dimensity 9300** sind die schnellsten Android-Chips für On-Device-Inferenz 2026. Generierungsgeschwindigkeit: ~15–25 Token/Sek für 1.7B-Modelle; ~8–12 Token/Sek für 3B-Modelle.',
          '**Modellspeicher:** Android hat keinen einheitlichen Speicher — das Modell läuft in System-RAM ohne GPU-Beschleunigung in den meisten Termux-Konfigurationen. GPU-Beschleunigung erfordert Termux:NVIDIA oder spezifische Vulkan-Builds; Setup ist komplexer.',
          '**Alternative Apps:** MNN LLM (Alibaba, kostenlos, Android-App mit On-Device-Inferenz für ausgewählte Modelle) ist ein einfacheres Setup, hat aber eine begrenztere Model-Auswahl als Ollama. AI Runner und llamafile haben auch Android-Builds mit unterschiedlicher Unterstützung.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie das Termux:Widget-Add-on und erstellen Sie eine Verknüpfung, die "ollama serve" ausführt — dies ermöglicht es Ihnen, den Ollama-Server von Ihrem Android-Startbildschirm aus zu starten, ohne Termux manuell zu öffnen. Sobald Ollama läuft, öffnen Sie eine Chat-App, die für localhost:11434 konfiguriert ist.',
          },
        ],
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
      },
      models: {
        id: 'models',
        title: 'Modell-Empfehlungen pro Gerät',
        content:
          '**Die Modellwahl wird durch verfügbaren RAM bestimmt — nicht durch Vorlieben.** Die Tabelle unten ordnet Geräte-RAM dem größten Modell zu, das mit Echtzeit-Geschwindigkeit (über 8 Token/Sek) läuft. Für die Modellschicht speziell siehe [Best Mobile LLM Models 2026](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm). Für die breitere Modelllandschaft über alle Hardware-Ebenen siehe [Best Local LLMs 2026](/de/local-llms/best-local-llms-2026).',
        columns: ['Gerät / RAM', 'Empfohlenes Modell', 'Geschwindigkeit', 'Am besten für'],
        rows: [
          { 'Gerät / RAM': 'iPad Air M2 / M3 (8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini Q4', 'Geschwindigkeit': '~15–18 Token/Sek', 'Am besten für': 'Schreibunterstützung, Zusammenfassung' },
          { 'Gerät / RAM': 'iPad Pro M4 (16 GB)', 'Empfohlenes Modell': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Geschwindigkeit': '~25–30 Token/Sek / ~15–20 Token/Sek', 'Am besten für': 'Echte LLM-Workstation, RAG, Fiction-Entwurf' },
          { 'Gerät / RAM': 'Android 8 GB (Tab S10+)', 'Empfohlenes Modell': 'Phi-4 Mini Q4 über Termux+Ollama', 'Geschwindigkeit': '~10–15 Token/Sek', 'Am besten für': 'Power-Nutzer komfortabel mit Termux' },
          { 'Gerät / RAM': 'Android 6 GB', 'Empfohlenes Modell': 'Qwen3 1.7B Q4', 'Geschwindigkeit': '~15–20 Token/Sek', 'Am besten für': 'Leichter Chat, Übersetzung, einfache Aufgaben' },
          { 'Gerät / RAM': 'Pixel Tablet (8 GB)', 'Empfohlenes Modell': 'Nur Remote-Verbindung', 'Geschwindigkeit': 'N/V', 'Am besten für': 'Tensor G2 zu langsam für On-Device' },
          { 'Gerät / RAM': 'Jedes Tablet über Remote', 'Empfohlenes Modell': 'Jedes Modell auf dem Home-Computer', 'Geschwindigkeit': '~20–40 Token/Sek', 'Am besten für': 'Qualitätsorientierte Nutzung, 70B-Modelle' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die meisten alltäglichen Aufgaben (Textentwurf, Fragen beantworten, Inhalte zusammenfassen) ist Phi-4 Mini (3.8B) auf einem Tablet ausreichend leistungsfähig. Wo es im Vergleich zu einem 70B-Modell schwach wird: komplexes mehrstufiges Denken, differenziertes kreatives Schreiben und lange Dokumentenanalyse. Für diese Aufgaben verwenden Sie die Remote-Verbindung zu einem Home-Computer, der ein größeres Modell ausführt.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Tablet-Frontends für lokale KI',
        content:
          '**Die Chat-Schnittstelle, die Sie auf dem Tablet verwenden, beeinflusst die Benutzerfreundlichkeit erheblich.** Einige Frontends sind für Mobilgeräte ausgelegt; andere sind Desktop-first und auf Tablets kaum zu verwenden.',
        items: [
          '**Open WebUI (Browser):** beste mobile-responsive Web-UI für allgemeinen Chat. Funktioniert unter jeder lokalen IP:Port in Safari oder Chrome. Passt sich saubern an Tablet-Seitenverhältnisse an. Wird für Remote-Verbindungs-Setups empfohlen.',
          '**LLM Farm (iPad-App):** für iOS ausgelegt, nutzt den gesamten iPad-Bildschirm. Die leistungsfähigste On-Device-Option für iPad. Weniger Glanz als Desktop-Apps, aber zweckgebaut für iOS-Inferenz.',
          '**Pocket Paladin (iPad-App):** saubere UI als LLM Farm, für allgemeine Benutzer ausgelegt. Die kostenlose Stufe führt 3B-Modelle aus; die bezahlte Stufe entsperrt größere Modelle und API-Zugang.',
          '**RisuAI (Browser, mobile-responsive):** beste mobile-Erfahrung für Roleplay und Character-Card-Fiction. Kann sich mit einer Remote-Ollama-Instanz verbinden. Funktioniert in iPad Safari mit einer Near-App-Quality-Schnittstelle.',
          '**SillyTavern (Browser):** funktioniert auf iPad Safari, verbunden mit einer Remote-Ollama-Instanz. Nicht für Mobilgeräte optimiert, aber funktionsfähig. Einige Erweiterungsfunktionen funktionieren nicht in mobil Safari.',
          '**Termux CLI (Android):** nur Befehlszeile. Für skriptgesteuerte Aufgaben nützlich; nicht praktisch für gesprächsbasierte Nutzung ohne begleitende App.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Roleplay und Character-Card-Fiction auf iPad ist RisuAI verbunden mit einer Remote-Ollama-Instanz, auf der Llama 3.3 70B läuft, die beste verfügbare Kombination 2026. Die mobile RisuAI-Schnittstelle ist für Touch ausgelegt; die Remote-Verbindung ermöglicht Zugriff auf ein 70B-Modell, das eine erheblich bessere Character-Voice liefert als jedes Modell, das auf ein Tablet passt.',
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
          '**BSI-Grundschutz-Kataloge:** Das German Federal Office for Information Security (BSI) empfiehlt lokale Inferenz-Architekturen für Organisationen, die mit regulierten Daten arbeiten (Healthcare, Finance, öffentliche Verwaltung). Der BSI-Grundschutz C5:2020 Standard bevorzugt Systeme, die keine Daten außerhalb Deutschland exportieren.',
          '**Mittelstand-Anwendungsfälle:** Kleine und mittlere Unternehmen (KMU) in Deutschland können Phi-4 Mini oder Llama 3.2 lokal ausführen, um interne Dokumentenverwaltung, Kundenkommunikation und Produktbeschreibungen zu unterstützen, ohne DSGVO-Risiken zu tragen. Ein iPad Pro M4 mit 16 GB im Büro ist ein kostengünstiger Einstiegspunkt.',
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
          '**Ausführen eines 7B-Modells auf einem 8 GB-Tablet.** Bei 5–8 Token/Sek ist dies zu langsam für gesprächsbasierte Nutzung. Verwenden Sie 3B-Modelle für On-Device-Chat auf 8 GB-Geräten; verwenden Sie Remote-Verbindung für 7B+ Qualität.',
          '**Verwendung des Play Store Termux auf Android.** Die Play Store-Version von Termux ist veraltet und fehlen die Pakete, die für Ollama benötigt werden. Installieren Sie Termux immer von F-Droid.',
          '**Exposing von Open WebUI zum Internet ohne Authentifizierung.** Open WebUI hat standardmäßig kein Passwort. Wenn Sie es über Ihr Heimnetzwerk hinaus exponieren, bekommt jeder, der die URL findet, Zugriff auf Ihr Modell. Aktivieren Sie das Admin-Kontosystem und verwenden Sie eine Firewall.',
          '**Nichtschließen anderer Apps vor On-Device auf 8 GB-iPad.** iOS räumt Hintergrund-Apps aus dem RAM ab. Ein 3B-Modell auf einem 8 GB-iPad nutzt ~3,5 GB; wenn iOS diesen Speicher für eine andere App zurückfordert, stürzt das Modell ab. Schließen Sie alle anderen Apps vor der Inferenz.',
          '**Erwartung von Desktop-Qualitäts-UI auf Mobil-Browsern.** SillyTavern und einige andere Frontends sind Desktop-first. Ihre mobile Erfahrung in einem Browser ist funktionsfähig, aber nicht poliert. Für mobile-first UX bevorzugen Sie RisuAI oder Open WebUI.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'LLM Farm (iOS) Dokumentation und GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'Pocket Paladin iOS-App — [App Store](https://apps.apple.com)',
          'Ollama ARM-Build für Termux — [Ollama-Dokumentation](https://ollama.com/docs)',
          'Open WebUI-Dokumentation — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M4-Chip-Speicherbandbreite und Neural Engine-Spezifikationen — [Apple Silicon](https://apple.com/newsroom)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Können Sie KI auf einem iPad ausführen?',
            a: 'Ja, auf iPad Pro M4 (16 GB) und iPad Air M2/M3 (8 GB). Der iPad Pro M4 führt Phi-4 Mini und Llama 3.2 3B in Echtzeit mit LLM Farm oder Pocket Paladin aus. Der iPad Air M2 führt 3B-Modelle angemessen aus. Für 7B+ Modelle auf einem iPad wird die Remote-Verbindung zu einem Home-Mac oder PC, auf dem Ollama läuft, empfohlen — das iPad zeigt den Chat, aber der Home-Computer führt Inferenz durch.',
          },
          {
            q: 'Können Sie KI auf einem Android-Tablet ausführen?',
            a: 'Ja, auf Geräten mit 8 GB+ RAM mit Termux + Ollama. Das Samsung Galaxy Tab S10+ (12 GB RAM) führt Phi-4 Mini bei ~10–15 Token/Sek aus. Geräte mit 6 GB RAM können Qwen3 1.7B ausführen. Das Setup erfordert Termux von F-Droid und Komfort mit einigen Terminal-Befehlen. Die Remote-Verbindung zu einem Home-Computer ist der einfachere Weg für die meisten Android-Tablet-Benutzer.',
          },
          {
            q: 'Funktioniert On-Device-KI auf einem Tablet ohne Internet?',
            a: 'Ja. Sobald das Modell heruntergeladen ist und die App installiert ist, funktioniert On-Device-Inferenz auf iPad (LLM Farm, Pocket Paladin) und Android (Termux + Ollama) ohne Internetverbindung. Dies ist einer der Hauptvorteile von On-Device gegenüber Remote-Verbindung — die Remote-Verbindung erfordert Ihr Home-Wi-Fi.',
          },
          {
            q: 'Was ist die beste KI-App für iPad?',
            a: 'Für On-Device-Inferenz: LLM Farm (mehr Optionen, Open-Source) oder Pocket Paladin (einfachere UI). Für Remote-Verbindung zu einem Home-Ollama-Server: Open WebUI in Safari (bester allgemeiner Chat), RisuAI in Safari (beste für Roleplay und Character-Fiction). Die beste Wahl hängt davon ab, ob Sie On-Device-Fähigkeit, Offline-Nutzung oder beste Schnittstellen-Qualität möchten.',
          },
          {
            q: 'Ist Termux + Ollama sicher auf Android zu verwenden?',
            a: 'Ja. Termux ist ein etablierter Android-Terminal-Emulator, der von Millionen von Entwicklern verwendet wird. Ollama in Termux stellt eine nur lokale API bereit (localhost:11434 standard) — sie ist nicht von anderen Geräten in Ihrem Netzwerk aus zugänglich, es sei denn, Sie ändern die Bind-Adresse explizit. Die Modelldateien werden im privaten Termux-Speicher gespeichert, nicht im freigegebenen Android-Speicher.',
          },
          {
            q: 'Kann ich ChatGPT-ähnliche Antworten lokal auf einem Tablet erhalten?',
            a: 'Nicht ganz, aber fast mit dem richtigen Setup. GPT-4o-Qualität erfordert ein 70B+ Modell. Auf einem Tablet: Der iPad Pro M4 (16 GB) kann 70B-Modelle nicht ausführen — nur 3B–8B-Modelle passen. Via Remote-Verbindung: Wenn Ihr Home-Computer eine 24 GB-GPU (RTX 4090) oder 64 GB-Unified-Memory (Mac M5 Max) hat, kann er Llama 3.3 70B ausführen, und Ihr Tablet greift diese Qualität über Open WebUI im Browser zu. Das ist die Cloud-KI-Qualität auf einem Tablet am nächsten.',
          },
          {
            q: 'Wie halte ich meinen Home-Ollama-Server am Laufen, wenn ich das Laptop-Deckel schließe?',
            a: 'Auf macOS: Stellen Sie die Sleep-Policy beim Schließen des Deckels ein: Systemeinstellungen → Energie sparen → deaktivieren Sie "Power Nap aktivieren" und verwenden Sie ein Tool wie Amphetamine, um den Sleep zu verhindern, wenn an Strom angeschlossen. Auf Windows: Gehen Sie zu Energieoptionen → Planeinstellungen ändern → "Niemals" für Sleep, wenn an Strom angeschlossen. Alternativ führen Sie Ollama auf einem Always-On-Computer aus (Mini-PC, NAS oder repurposed altes Laptop), anstatt Ihrem primären Laptop.',
          },
          {
            q: 'Entleert die Ausführung von KI auf einem Tablet die Batterie schnell?',
            a: 'Ja — On-Device-Inferenz ist CPU/GPU-intensiv. Das Ausführen von Phi-4 Mini auf einem iPad Pro M4 bei aktiver Unterhaltung entleert die Batterie mit ungefähr 20–30 % pro Stunde. Für längere Nutzung halten Sie das Tablet an Strom angeschlossen. Remote-Verbindung zu einem Home-Computer zieht erheblich weniger Tablet-Batterie — das Tablet zeigt nur eine Webseite an.',
          },
          {
            q: 'Throtteln Tablets während KI-Inferenz?',
            a: 'Ja, besonders auf iPad Air M2 / M3 und Android-Tablets ohne aktive Kühlung. iPad Pro M4 hat besseren thermalen Spielraum und hält die Generierungsgeschwindigkeit ~10–15 Minuten lang, bevor merkbares Throttling auftritt. Android-Tablets throtteln schneller (5–8 Minuten anhaltende Inferenz). Mitigationen: verwenden Sie kürzere Generierungs-Chunks (200–400 Token pro Antwort), halten Sie das Tablet auf einer harten Oberfläche und vermeiden Sie das gleichzeitige Ausführen anderer CPU-schwerer Apps.',
          },
          {
            q: 'Welche Tastatur funktioniert am besten für KI-Tablet-Nutzung?',
            a: 'Apple Magic Keyboard für iPad Pro M4 (mit Trackpad) ist das polierte Setup — volle Tastatur-Shortcuts funktionieren in Safari + Open WebUI, Trackpad ermöglicht Text-Auswahl über lange Antworten. Logitech Combo Touch ist die Budget-Alternative. Android: Jede Bluetooth-Tastatur funktioniert mit Termux, aber die Erfahrung ist rauer (nur Terminal). Für Schreibarbeiten verwandelt sich ein iPad Pro + Magic Keyboard in eine schreiborientierte KI-Workstation.',
          },
          {
            q: 'Kann ich SillyTavern auf iPad ausführen?',
            a: 'Ja, via Remote-Verbindung. SillyTavern läuft auf einem Home-Mac oder PC, und iPad Safari verbindet sich unter der lokalen IP. Mobile UI ist funktionsfähig, aber nicht poliert — einige Erweiterungsfunktionen (Regex-Tools, Group-Chat-Panels) funktionieren, fühlen sich aber beengt an. Für Roleplay speziell hat RisuAI bessere mobile UI als SillyTavern; beide können sich mit demselben Ollama-Backend auf Ihrem Home-Computer verbinden.',
          },
          {
            q: 'Kann ein Tablet Long-Form-RAG durchführen?',
            a: 'On-Device, nein — das Einbetten von 1.000+ Dokumenten auf einem Tablet ist unpraktisch. Via Remote-Verbindung, ja — Ihr Home-Computer verwaltet die RAG-Pipeline, das Tablet zeigt die Chat-Schnittstelle. AnythingLLM auf einem Home-Computer und über Browser auf dem Tablet zugegriffen verwaltet Dokument-Sammlungen jeder Größe ohne Tablet-seitige Begrenzung. Für Schüler oder Knowledge-Worker, die RAG auf Tablet möchten, ist Remote-Verbindung die einzige praktische Option.',
          },
          {
            q: 'Kann ich externe Displays mit Tablet-KI verwenden?',
            a: 'Ja, auf iPad Pro M4 (Stage Manager + external Display gibt ein Multi-Window-Setup; Open WebUI auf dem externen Monitor, Notizen/Quelldokumente auf dem iPad-Bildschirm). Galaxy Tab S10 Ultra unterstützt DeX-Modus mit externem Display für ähnliches Multi-Monitor-KI-Workflow. Android-Tablets ohne DeX-Modus spiegeln den Bildschirm — weniger nützlich. iPad Pro + externer Monitor + Magic Keyboard ist das Nächste, das ein Tablet zu einer echten KI-Workstation 2026 kommt.',
          },
          {
            q: 'Ist ein Tablet besser als ein Telefon für lokale KI?',
            a: 'Für Tasten-intensive Nutzung (Entwurf, RAG, lange Unterhaltungen), ja — Tastatur-Unterstützung und Bildschirmgröße sind wichtig. Für schnelle Chats, Voice-Queries oder unterwegs ist das Telefon, das Sie bereits tragen, besser. Der iPad Pro M4 ist das einzige Tablet, das merklich über ein Flaggschiff-Telefon für lokale KI hinausgeht; Mid-Range-Tablets und Telefone sind ungefähr gleichwertig. Die meisten Leser sollten kein Tablet speziell für lokale KI kaufen — kaufen Sie eines, wenn Sie es aus anderen Gründen möchten; KI-Fähigkeit ist ein Bonus.',
          },
          {
            q: 'Muss ich bei der Verwendung von lokalen Tablets die DSGVO beachten?',
            a: 'Wenn Sie ein Tablet mit lokalen Modellen für berufliche Kommunikation in Deutschland, Österreich oder der Schweiz verwenden, ja. DSGVO Artikel 28 (Auftragsverarbeitung) und 32 (Datenschutzmassnahmen) erfordern, dass Kundendaten nicht an ungeprüfte Cloud-Services gesendet werden. Lokale Inferenz auf Ihrem Tablet oder Home-Computer erfüllt diese Anforderung. Dokumentieren Sie Ihre Setup-Architektur (wo Daten gespeichert sind, welche Modelle verwendet werden) für den Datenschutzbeauftragten bei auditpflichtigen Prozessen.',
          },
          {
            q: 'Ist ein Tablet mit lokalen Modellen für deutschen Mittelstand geeignet?',
            a: 'Ja. Kleine und mittlere Unternehmen können einen iPad Pro M4 (16 GB) mit Phi-4 Mini oder Llama 3.2 für interne Dokumentenverwaltung, Geschäftskommunikation und Produktbeschreibungen einsetzen. Das Setup ist kostengünstiger als Enterprise-LLM-Dienste, erfüllt DSGVO-Anforderungen ohne externe Anwälte und gibt KMU Zugang zu Fähigkeiten, die sonst große Unternehmen vorbehalten sind. Der BSI empfiehlt diesen Ansatz für Organisationen unter der Datenschutz-Grundverordnung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
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
      headline: 'KI lokal auf Ihrem Tablet ausführen: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'So führen Sie KI lokal auf einem iPad oder Android-Tablet 2026 aus. Lokale Inferenz-Apps, Termux + Ollama auf Android und Remote-Verbindung zu einem Home-Mac oder PC erklärt.',
      image: `https://www.promptquorum.com/og/power-local-llm/run-ai-on-tablet-ipad-android?lang=de`,
      url: 'https://www.promptquorum.com/de/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'de',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Die Ausführung einer lokalen KI auf einem Tablet ist 2026 praktisch. Diese Anleitung behandelt On-Device-Inferenz und Remote-Verbindung zu einem Home-Computer.',
      keywords: [
        'KI lokal auf iPad',
        'lokales LLM auf Android',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'Pocket Paladin',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'Wie man ein iPad für lokale KI-Inferenz einrichtet',
        'Wie man Termux und Ollama auf Android nutzt',
        'Wie man sich mit einem Remote-Ollama von einem Tablet aus verbindet',
        'Modellauswahl basierend auf Tablet-Hardware',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'Pocket Paladin' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      about: [
        { '@type': 'Thing', 'name': 'lokale KI-Inferenz' },
        { '@type': 'Thing', 'name': 'Tablet-LLMs' },
        { '@type': 'Thing', 'name': 'iPad-Apps für KI' },
        { '@type': 'Thing', 'name': 'Android-Tablet-Inferenz' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Mobile & Edge LLMs',
    title: 'Exécuter l\'IA localement sur votre tablette : iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)',
    seoTitle: 'Exécuter l\'IA localement sur iPad et tablette Android 2026',
    intro:
      'L\'exécution d\'une IA locale sur une tablette est pratique en 2026 sur les iPad haut de gamme et les appareils Android disposant de 8 GB+ de RAM. Ce guide couvre les options : inférence sur appareil avec Pocket Paladin et LLM Farm sur iPad, Termux + Ollama sur Android, et l\'alternative de connexion à distance (connecter une tablette à un Mac ou PC exécutant Ollama via Wi-Fi local) pour les appareils ne pouvant pas exécuter l\'inférence localement.',
    metaDescription:
      'Exécutez l\'IA localement sur iPad ou Android en 2026. Applications d\'inférence locale, Termux + Ollama sur Android, connexion à distance vers Mac ou PC expliqués.',
    twitterDescription:
      'Exécutez l\'IA sur votre iPad ou tablette Android en 2026 : inférence locale (Pocket Paladin, LLM Farm, Termux+Ollama), connexion à distance vers Mac/PC, sélection de modèles par appareil.',
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
      'Utilisateurs de tablettes souhaitant exécuter l\'IA localement ou se connecter à une configuration LLM locale depuis leur iPad ou appareil Android — sans dépendre des services d\'IA cloud.',
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'exécuter l\'IA sur tablette',
    targetKeywords: [
      'exécuter l\'IA localement sur iPad',
      'exécuter un LLM local sur tablette Android',
      'connexion à distance Ollama iPad',
      'Termux Ollama Android',
      'LLM Farm iPad',
      'Pocket Paladin iOS LLM',
    ],
    leadAnswerBlock:
      '**L\'exécution d\'une IA locale sur une tablette offre deux modes distincts : l\'inférence sur appareil (le modèle s\'exécute directement sur le processeur de la tablette) et la connexion à distance (la tablette affiche un Mac ou PC exécutant Ollama à la maison). L\'inférence locale fonctionne sur iPad Pro M4 (16 GB, exécute Phi-4 Mini et Llama 3.2 3B en temps réel), iPad Air M2 (8 GB, exécute les modèles 3B correctement) et les appareils Android haut de gamme avec 8 GB+ de RAM (Samsung Galaxy Tab S10+, via Termux + Ollama). La connexion à distance via Open WebUI ou une interface chat simple à l\'IP locale fonctionne sur toute tablette, tout OS — elle transforme votre tablette en interface tactile pour une machine plus puissante. Pour la plupart, la connexion à distance est préférable : la machine exécute le modèle 70B, la tablette fournit l\'interface pratique.**',
    quickAnswerTop: {
      fr: {
        question: 'Pouvez-vous exécuter un modèle d\'IA local sur un iPad ou une tablette Android ?',
        answer:
          'Oui, sur les appareils haut de gamme. iPad Pro M4 avec 16 GB de RAM exécute Phi-4 Mini (3.8B) et Llama 3.2 3B en temps réel avec LLM Farm ou Pocket Paladin. iPad Air M2 (8 GB) exécute les modèles 3B correctement. Les tablettes Android avec 8 GB+ de RAM (Samsung Galaxy Tab S10+) peuvent exécuter Phi-4 Mini et Qwen3 1.7B via Termux + Ollama. Pour les tablettes avec moins de RAM, l\'alternative est la connexion à distance : connectez-vous à un Mac ou PC exécutant Ollama sur votre réseau domestique via Open WebUI dans le navigateur.',
        bullets: [
          'iPad Pro M4 (16 GB) — exécute Phi-4 Mini et Llama 3.2 3B localement en temps réel avec LLM Farm ou Pocket Paladin.',
          'iPad Air M2 (8 GB) — exécute les modèles 3B à vitesse utilisable ; les modèles 7B sont lents mais fonctionnels.',
          'Tablettes Android (8 GB+ RAM) — Termux + Ollama exécute Phi-4 Mini et Qwen3 1.7B localement.',
          'Connexion à distance — toute tablette, toute RAM : connectez-vous Mac ou PC local via Open WebUI navigateur.',
          'Meilleur modèle on-device : Phi-4 Mini (3.8B, ~2.7 GB) ou Qwen3 1.7B pour appareils limités.',
          'Connexion à distance recommandée pour 7B+ — machine locale plus rapide que toute tablette.',
          'SillyTavern et RisuAI ont des UI réactives mobiles fonctionnant Safari / Android Chrome.',
        ],
        updatedDate: '2026-05-07',
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
          '**L\'inférence locale fonctionne sur iPad Pro M4 (16 GB) et Android haut de gamme (8 GB+).** Au-dessous, génération trop lente. Connexion à distance préférable pour la plupart.',
          '**La connexion à distance est l\'approche recommandée.** Connectez tablette (RAM quelconque, OS quelconque) à Mac ou PC exécutant Ollama localement. Machine exécute 70B ; tablette affiche interface chat tactile. Aucun téléchargement modèle requis.',
          '**LLM Farm et Pocket Paladin sont les options natives iPad.** Les deux exécutent modèles GGUF localement sur Apple Silicon. LLM Farm plus d\'options ; Pocket Paladin plus simple.',
          '**Termux + Ollama est l\'approche Android.** Demande aisance terminal, fonctionne tout appareil 8 GB+ RAM. Ollama dans Termux, modèle sur localhost:11434.',
          '**Meilleur modèle pour la plupart : Phi-4 Mini (3.8B).** Fonctionne 6 GB+ RAM ; sortie utilisable ; téléchargement 5–10 minutes.',
          '**Open WebUI dans navigateur tablette est l\'interface distance la plus simple.** Ouvrez http://[IP-locale]:3000 — aucune app, aucune config, chat complet.',
          '**SillyTavern a une UI réactive mobile.** Jeu rôle tablette : accédez SillyTavern hébergé localement via navigateur ; RisuAI meilleur support natif mobile.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Apps iPad :** LLM Farm (gratuit, open-source), Pocket Paladin (gratuit + payant), PocketLLM (ancien).',
          '**Approche Android :** Termux + Ollama (CLI) ou MNN LLM (app, support limité).',
          '**Connexion à distance :** tout navigateur tablette → Open WebUI ou interface chat à IP locale.',
          '**Minimum on-device :** iPad Air M2 (8 GB) pour 3B ; iPad Pro M4 (16 GB) pour 7B–8B.',
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
          { 'Facteur': 'Limite modèle', 'Inférence locale': '3B–8B (iPad Pro M4) ; 3B (plupart)', 'Connexion à distance': 'Illimitée — machine exécute tout' },
          { 'Facteur': 'Utilisation hors ligne', 'Inférence locale': 'Oui — sans Wi-Fi', 'Connexion à distance': 'Non — demande Wi-Fi maison' },
          { 'Facteur': 'Vitesse génération', 'Inférence locale': 'Modérée (10–25 tok/sec iPad Pro M4)', 'Connexion à distance': 'Dépend machine (jusqu\'à 40+ tok/sec)' },
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
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad : inférence locale',
        content:
          '**iPad Pro M4 (16 GB) est le seul iPad exécutant modèles 7B à vitesse confortable.** iPad Air M2 (8 GB) et M3 exécutent 3B correctement. [iPhone 8 GB (iPhone 15 Pro Max) exécute aussi petits modèles](/fr/power-local-llm/best-local-llm-apps-iphone-2026) via LLM Farm.',
        items: [
          '**LLM Farm** (gratuit, open-source) : télécharge GGUF Hugging Face, llama.cpp Apple Silicon. Meilleure performance iOS native. Chat et completion. App Store.',
          '**Pocket Paladin** (gratuit + payant) : téléchargements curés, UI propre, plus simple démarrage. Tier gratuit = 3B ; payant déverrouille gros modèles.',
          '**Importer modèles :** LLM Farm, bibliothèque → "Ajouter URL" → URL Hugging Face GGUF. Ou Files pour transférer. Stockage local app — pas iCloud.',
          '**Gestion RAM iPad :** iOS gère RAM aggressivement. Fermez autres apps avant 7B sur 8 GB — iOS supprimera si autre app demande mémoire. Sur 16 GB rare.',
          '**Vitesse attendue :** iPad Pro M4 : Phi-4 Mini ~20 tok/sec, Llama 3.2 3B ~30 tok/sec, Gemma 3 4B ~18 tok/sec. iPad Air M2 : 3B ~12–18 tok/sec ; 7B ~5–8 tok/sec.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne tentez pas 7B sur iPad 8 GB pour chat temps réel. À 5–8 tok/sec, chaque réponse 15–30 sec. Utilisez 3B sur 8 GB ; passez 16 GB ou connexion à distance pour 7B+.',
          },
        ],
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android : inférence locale',
        content:
          '**Inférence Android utilise [Termux + Ollama](/fr/power-local-llm/best-local-llm-apps-android-2026) — Termux émulateur Linux terminal exécutant Ollama nativement.** Plus technique qu\'app iPad mais accès complet écosystème Ollama.',
        numberedItems: [
          'Installez Termux de F-Droid (pas Play Store — vieux, dépendances manquent).',
          'Dans Termux : `pkg update && pkg install curl`',
          'Téléchargez Ollama ARM : `curl -fsSL https://ollama.com/install.sh | sh` — ARM64 compatible plupart Android.',
          'Tirez modèle : `ollama pull phi4-mini` ou `ollama pull qwen3:1.7b`.',
          'Démarrez serveur : `ollama serve` (gardez session active).',
          'Chat Termux : `ollama run phi4-mini` — ou navigateur `http://localhost:11434`. Installez app chat connectant endpoint local.',
        ],
        items: [
          '**Appareils compatibles 3B+ :** 8 GB RAM min (Galaxy Tab S10+, OnePlus Pad 2, Xiaomi Pad 7 Pro). 6 GB : Qwen3 1.7B seulement.',
          '**Pixel Tablet non recommandé :** Tensor G2 beaucoup plus lent Snapdragon 8 Gen 3, ~4–7 tok/sec Phi-4 Mini (trop lent). Utilisateurs Pixel : connexion à distance.',
          '**Snapdragon 8 Gen 3 et Dimensity 9300** puces Android les plus rapides 2026. ~15–25 tok/sec 1.7B ; ~8–12 tok/sec 3B.',
          '**Stockage modèle :** Android pas mémoire unifiée — RAM sans GPU plupart configs. GPU demande Termux:NVIDIA ou Vulkan spécifique.',
          '**Apps alternatives :** MNN LLM (Alibaba, gratuit, plus simple) sélection limitée. AI Runner, llamafile aussi disponibles.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez Termux:Widget, créez raccourci "ollama serve" — démarre serveur depuis écran d\'accueil. Une fois actif, ouvrez app chat configurée localhost:11434.',
          },
        ],
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
          '**Trouvez IP locale :** macOS Prefs → Réseau → IP. Windows : `ipconfig` → IPv4. Notez (typiquement `192.168.x.x`).',
          '**Sur tablette :** Safari/Chrome, `http://[IP]:3000`. Créez compte Open WebUI (local). Sélectionnez modèle. Chattez.',
          '**Sécurité :** local-only. N\'exposez pas port 3000 sans auth (système compte admin). Plain HTTP — pas données sensibles Wi-Fi public.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ajoutez URL Open WebUI écran d\'accueil tablette (Safari : Partage → Écran d\'accueil ; Chrome : Menu → Écran d\'accueil). Ressemble app native. iPad Safari fullscreen masque chrome navigateur.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles par appareil',
        content:
          '**Choix modèle déterminé par RAM disponible.** Tableau ci-dessous mappe RAM au plus gros modèle tournant temps réel (8+ tok/sec). Couche modèle : [Best Mobile LLMs 2026](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm). Paysage complet : [Best LLMs 2026](/fr/local-llms/best-local-llms-2026).',
        columns: ['Appareil / RAM', 'Modèle recommandé', 'Vitesse', 'Idéal pour'],
        rows: [
          { 'Appareil / RAM': 'iPad Air M2 / M3 (8 GB)', 'Modèle recommandé': 'Phi-4 Mini Q4', 'Vitesse': '~15–18 tok/sec', 'Idéal pour': 'Assistance écriture, résumé' },
          { 'Appareil / RAM': 'iPad Pro M4 (16 GB)', 'Modèle recommandé': 'Llama 3.2 3B / Gemma 3 4B Q4', 'Vitesse': '~25–30 tok/sec / ~15–20 tok/sec', 'Idéal pour': 'Station LLM réelle, RAG, fiction' },
          { 'Appareil / RAM': 'Android 8 GB (Tab S10+)', 'Modèle recommandé': 'Phi-4 Mini Q4 Termux+Ollama', 'Vitesse': '~10–15 tok/sec', 'Idéal pour': 'Power users Termux' },
          { 'Appareil / RAM': 'Android 6 GB', 'Modèle recommandé': 'Qwen3 1.7B Q4', 'Vitesse': '~15–20 tok/sec', 'Idéal pour': 'Chat léger, traduction' },
          { 'Appareil / RAM': 'Pixel Tablet (8 GB)', 'Modèle recommandé': 'Connexion à distance seulement', 'Vitesse': 'N/A', 'Idéal pour': 'Tensor G2 trop lent' },
          { 'Appareil / RAM': 'Toute tablette à distance', 'Modèle recommandé': 'Tout modèle machine locale', 'Vitesse': '~20–40 tok/sec', 'Idéal pour': 'Qualité prioritaire, 70B' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Tâches quotidiennes (brouillon, questions, résumé) : Phi-4 Mini (3.8B) tablette est adéquat. Échoue vs 70B : raisonnement multi-étapes, créativité nuancée, longs documents. Utilisez connexion à distance pour ces cas.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces avant pour IA locale',
        content:
          '**Interface chat que vous utilisez affecte significativement usabilité.** Certains optimisés mobile ; d\'autres desktop-first.',
        items: [
          '**Open WebUI (navigateur) :** meilleure web UI réactive mobile. Fonctionne toute IP:port Safari/Chrome. S\'adapte tablette. Recommandé connexion à distance.',
          '**LLM Farm (app iPad) :** conçu iOS, écran iPad complet. Plus capable on-device. Moins poli que desktop mais conçu iOS inférence.',
          '**Pocket Paladin (app iPad) :** UI propre, simple. Tier gratuit 3B ; payant déverrouille gros modèles + API.',
          '**RisuAI (navigateur, réactif mobile) :** meilleure expérience mobile jeu rôle. Se connecte Ollama distant. Fonctionne Safari near-app quality.',
          '**SillyTavern (navigateur) :** fonctionne Safari connecté Ollama distant. Pas mobile-optimisé mais fonctionnel. Extensions partiellement Safari mobile.',
          '**Termux CLI (Android) :** ligne commande seulement. Tâches scriptées ; pas pratique conversation sans app compagne.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Jeu rôle iPad : RisuAI + Ollama distant Llama 3.3 70B meilleure combo 2026. Interface RisuAI tactile ; 70B produit character voice bien meilleur que tout modèle tablette.',
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
          '**Mise en pratique :** iPad Pro M4 ou tablette Android (8 GB) + Ollama distant Mac/PC foyer = architecture simplement conforme CNIL. Documentez setup (stockage données, modèles) auprès de votre DPO.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Modèle 7B sur tablette 8 GB.** À 5–8 tok/sec trop lent conversation. Utilisez 3B sur 8 GB ; connexion à distance pour 7B+.',
          '**Termux Play Store Android.** Version vieille, dépendances manquent. Installez toujours F-Droid.',
          '**Open WebUI exposé internet sans auth.** Aucun mot de passe défaut. Quiconque trouve URL accède modèle. Activez compte admin + firewall.',
          '**Autres apps pas fermées avant on-device 8 GB iPad.** iOS supprime RAM. Modèle 3B ~3.5 GB ; iOS le tue si autre app demande. Fermez tout avant inférence.',
          '**Attendre UI desktop-quality navigateurs mobile.** SillyTavern desktop-first. Mobile fonctionnel pas poli. Mobile-first : RisuAI ou Open WebUI.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LLM Farm (iOS) docs et GitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'App Pocket Paladin iOS — [App Store](https://apps.apple.com)',
          'Build ARM Ollama Termux — [Docs Ollama](https://ollama.com/docs)',
          'Docs Open WebUI — [docs.openwebui.com](https://docs.openwebui.com)',
          'Spécifications puce M4 Apple bande passante Neural Engine — [Apple Silicon](https://apple.com/newsroom)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Pouvez-vous exécuter l\'IA sur un iPad ?',
            a: 'Oui, sur iPad Pro M4 (16 GB) et iPad Air M2/M3 (8 GB). iPad Pro M4 exécute Phi-4 Mini et Llama 3.2 3B temps réel LLM Farm ou Pocket Paladin. iPad Air M2 exécute 3B correctement. Pour 7B+ iPad, connexion à distance Mac ou PC Ollama recommandée — iPad affiche chat, machine exécute inférence.',
          },
          {
            q: 'Pouvez-vous exécuter l\'IA sur une tablette Android ?',
            a: 'Oui, appareils 8 GB+ RAM Termux + Ollama. Galaxy Tab S10+ (12 GB) exécute Phi-4 Mini ~10–15 tok/sec. 6 GB exécute Qwen3 1.7B. Setup demande Termux F-Droid + commandes terminal. Connexion à distance machine locale est chemin plus facile plupart utilisateurs Android.',
          },
          {
            q: 'L\'IA on-device tablette fonctionne hors ligne ?',
            a: 'Oui. Modèle téléchargé et app installée, inférence on-device iPad (LLM Farm, Pocket Paladin) et Android (Termux + Ollama) fonctionne sans internet. Avantage principal on-device — connexion à distance demande Wi-Fi maison.',
          },
          {
            q: 'Meilleure app IA iPad ?',
            a: 'On-device : LLM Farm (plus options, open-source) ou Pocket Paladin (UI plus simple). Connexion distance Ollama : Open WebUI Safari (meilleur chat général), RisuAI Safari (meilleur jeu rôle). Choix dépend si vous voulez on-device, hors ligne, ou meilleure UI.',
          },
          {
            q: 'Termux + Ollama Android sûr ?',
            a: 'Oui. Termux émulateur terminal établi, millions développeurs. Ollama API locale seulement (localhost:11434 défaut) — pas accessible autres appareils réseau sauf bind explicite. Fichiers modèle stockage privé Termux, pas Android partagé.',
          },
          {
            q: 'Qualité ChatGPT locale tablette ?',
            a: 'Presque avec bon setup. GPT-4o demande 70B+. iPad Pro M4 (16 GB) pas 70B — 3B–8B seulement. À distance : GPU 24 GB (RTX 4090) ou unifié 64 GB (Mac M5 Max) exécute Llama 3.3 70B, tablette accède qualité Open WebUI. Plus proche qualité cloud tablette.',
          },
          {
            q: 'Garder serveur Ollama maison démarré lid fermé ?',
            a: 'macOS : Prefs → Énergie → désactiver "Power Nap" + Amphetamine prévenir sleep branché. Windows : Options énergie → "Jamais" sleep branché. Alternative : exécutez Ollama machine toujours-on (mini-PC, NAS) pas laptop primaire.',
          },
          {
            q: 'Batterie tablette IA épuisée rapide ?',
            a: 'Oui — inférence CPU/GPU intensif. Phi-4 Mini iPad Pro M4 conversation actuelle ~20–30% heure. Usage long : tablette branchée. Connexion distance machine : beaucoup moins batterie — affiche seulement page web.',
          },
          {
            q: 'Throttling tablettes inférence IA ?',
            a: 'Oui, spécialement iPad Air M2/M3 et Android sans refroidissement actif. iPad Pro M4 meilleur espace thermique, ~10–15 min avant throttling notable. Android plus vite (5–8 min). Mitigations : chunks 200–400 tokens, tablette surface dure, pas autres apps CPU.',
          },
          {
            q: 'Clavier meilleur usage IA tablette ?',
            a: 'Apple Magic Keyboard iPad Pro M4 (trackpad) setup poli — shortcuts Safari + Open WebUI, trackpad sélection texte. Logitech Combo Touch budget. Android : tout Bluetooth fonctionne Termux mais expérience plus rude. Prose : iPad Pro + Magic Keyboard station IA écriture.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
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
      headline: 'Exécuter l\'IA localement sur votre tablette : iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)',
      description:
        'Exécutez l\'IA localement sur iPad ou Android en 2026. Applications d\'inférence locale, Termux + Ollama, connexion à distance vers Mac ou PC expliqués.',
      image: `https://www.promptquorum.com/og/power-local-llm/run-ai-on-tablet-ipad-android?lang=fr`,
      url: 'https://www.promptquorum.com/fr/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'fr',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        'Exécution IA locale tablette pratique 2026. Inférence on-device et connexion à distance machine locale.',
      keywords: [
        'IA locale iPad',
        'LLM local tablette Android',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'Pocket Paladin',
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
        { '@type': 'SoftwareApplication', 'name': 'Pocket Paladin' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Open WebUI' },
        { '@type': 'SoftwareApplication', 'name': 'Termux' },
      ],
      about: [
        { '@type': 'Thing', 'name': 'inférence IA locale' },
        { '@type': 'Thing', 'name': 'LLMs tablette' },
        { '@type': 'Thing', 'name': 'apps iPad IA' },
        { '@type': 'Thing', 'name': 'inférence tablette Android' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Mobile & Edge LLMs',
    title: 'タブレットでAIをローカル実行：iPad Pro M4・Galaxy Tab S10・OnePlus Pad 2（2026年版）',
    seoTitle: 'iPadとAndroidタブレットでAIをローカル実行 2026',
    intro:
      '2026年、タブレットでのローカルAI実行はRAM 8GB以上の高性能iPad・Androidデバイスで現実的です。このガイドでは、iPadでのPocket PaladinとLLM Farmによるオンデバイス推論、AndroidでのTermux + Ollama、そしてローカル推論ができないデバイス向けのリモート接続（ローカルWi-FiでOllamaを実行するMacまたはPCへの接続）を解説します。',
    metaDescription:
      '2026年のiPadとAndroidタブレットでのAIローカル実行方法。オンデバイス推論アプリ、Termux + Ollama、ホームMac・PCへのリモート接続を解説。',
    twitterDescription:
      '2026年タブレットでAIをローカル実行：オンデバイス推論（Pocket Paladin・LLM Farm・Termux+Ollama）、ホームMac/PCへのリモート接続、デバイス別モデル選択。',
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
      'クラウドAIサービスに頼らず、iPadまたはAndroidデバイスからAIをローカル実行、またはホームLLMセットアップに接続したいタブレットユーザー。',
    readTime: '11分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'タブレットでAIをローカル実行',
    targetKeywords: [
      'iPadでAIをローカル実行',
      'AndroidタブレットでローカルLLM実行',
      'Ollama iPadリモート接続',
      'Termux Ollama Android',
      'LLM Farm iPad',
      'Pocket Paladin iOS LLM',
    ],
    leadAnswerBlock:
      '**タブレットでのローカルAI実行には2つのモードがあります。オンデバイス推論（タブレットのチップで直接モデルを実行）とリモート接続（自宅のMacまたはPCでOllamaを実行し、タブレットはその表示端末となる）です。オンデバイスはiPad Pro M4（16GB、Phi-4 MiniとLlama 3.2 3Bをリアルタイム実行）、iPad Air M2（8GB、3Bモデルを適切に実行）、RAM 8GB以上のAndroid高性能デバイス（Samsung Galaxy Tab S10+、Termux + Ollama経由）で実用的です。ホームサーバーのローカルIPでOpen WebUIまたはシンプルなチャットUIを使ったリモート接続は、あらゆるタブレット・RAM・OSで機能します。ほとんどのユーザーにはリモート接続がより優れた選択肢です。ホームマシンが70Bモデルを実行し、タブレットは使いやすいインターフェースを提供します。**',
    quickAnswerTop: {
      ja: {
        question: 'iPadまたはAndroidタブレットでローカルAIモデルを実行できますか？',
        answer:
          'はい、高性能デバイスで可能です。16GB RAMのiPad Pro M4は、LLM FarmまたはPocket PaladinでPhi-4 Mini（3.8B）とLlama 3.2 3Bをリアルタイム実行します。iPad Air M2（8GB）は3Bモデルを適切に実行します。RAM 8GB以上のAndroidタブレット（Samsung Galaxy Tab S10+）はTermux + OllamaでPhi-4 MiniとQwen3 1.7Bをローカル実行できます。RAMが少ないまたは古いチップのタブレットには、リモート接続が実用的な代替手段です。',
        bullets: [
          'iPad Pro M4（16GB）— LLM FarmまたはPocket PaladinでPhi-4 MiniとLlama 3.2 3Bをリアルタイムローカル実行。',
          'iPad Air M2（8GB）— 3Bモデルを実用的な速度で実行；7Bモデルは低速だが動作可能。',
          'Androidタブレット（8GB+ RAM）— Termux + OllamaでPhi-4 MiniとQwen3 1.7Bをローカル実行。',
          'リモート接続 — どのタブレット・RAM・OSでも：ブラウザのOpen WebUI経由でOllama実行中のホームMac・PCに接続。',
          'ほとんどのタブレットに最適なオンデバイスモデル：Phi-4 Mini（3.8B、約2.7GB）、RAM制約デバイスにはQwen3 1.7B。',
          '7B以上はリモート接続推奨 — ホームマシンの方がどのタブレットよりも高速。',
          'SillyTavernとRisuAIはiPad Safari・Android Chromeで動作するモバイル対応UIを搭載。',
        ],
        updatedDate: '2026-05-07',
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
          '**オンデバイス推論はiPad Pro M4（16GB）と高性能Android（8GB+）で実用的です。** これ以下のスペックではリアルタイム利用に生成速度が不足します。ほとんどのタブレットユーザーにはリモート接続の方が優れた選択肢です。',
          '**リモート接続がほとんどの人に推奨されるアプローチです。** ホームネットワーク上のOllama実行中のMacまたはPCにタブレット（RAM・OS問わず）を接続します。ホームマシンが70Bモデルを実行し、タブレットはタッチ操作しやすいチャットインターフェースを表示します。タブレットへのモデルダウンロードは不要です。',
          '**LLM FarmとPocket PaladinはiPadネイティブの選択肢です。** どちらもiPadのApple SiliconチップでGGUFモデルをローカル実行します。LLM Farmは設定オプションが豊富；Pocket Paladinは初回利用者に簡単です。',
          '**Termux + OllamaはAndroidのアプローチです。** ターミナル操作に慣れている必要がありますが、RAM 8GB以上のあらゆるAndroidデバイスで動作します。Termux内でOllamaが動作し、localhost:11434でモデルを提供します。',
          '**ほとんどのタブレットに最適なモデル：Phi-4 Mini（3.8B）。** 6GB以上の空きRAMで動作し、日常的なタスクで実用的な出力を生成します。高速回線で5〜10分でダウンロード完了します。',
          '**タブレットブラウザのOpen WebUIが最もシンプルなリモート接続インターフェースです。** ホームのMacまたはPCが`192.168.x.x:3000`でOpen WebUIを実行中なら、タブレットのブラウザでそのアドレスを開くだけ — アプリインストール不要、設定不要、フルチャットインターフェース。',
          '**SillyTavernはモバイル対応UIを搭載しています。** タブレットでのロールプレイやキャラクターカード利用では、ホームマシンで動作するSillyTavernにタブレットブラウザからアクセスする方法が効果的です；RisuAIは最高のネイティブモバイルサポートを持っています。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**iPadアプリ：** LLM Farm（無料・オープンソース）、Pocket Paladin（無料プラン＋有料）、PocketLLM（旧式、更新少ない）。',
          '**Androidの方法：** Termux + Ollama（CLI）またはMNN LLM（アプリ、対応モデル限定）。',
          '**リモート接続：** あらゆるタブレットブラウザ → ホームマシンのローカルIPでOpen WebUIまたはシンプルなチャットUI。',
          '**オンデバイスの最低要件：** iPad Air M2（8GB）で3Bモデル；iPad Pro M4（16GB）で7B〜8Bモデル。',
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
          { '項目': 'モデルサイズ上限', 'オンデバイス': '3B〜8B（iPad Pro M4）；3B（ほとんどのタブレット）', 'リモート接続': '無制限 — ホームマシンがどのモデルも実行可能' },
          { '項目': 'オフライン利用', 'オンデバイス': '可能 — Wi-Fi不要で動作', 'リモート接続': '不可 — ホームWi-Fi必須' },
          { '項目': '生成速度', 'オンデバイス': '中程度（iPad Pro M4で10〜25トークン/秒）', 'リモート接続': 'ホームマシン次第（最大40+トークン/秒）' },
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
      },
      ipadOnDevice: {
        id: 'ipad-on-device',
        title: 'iPad：オンデバイス推論',
        content:
          '**iPad Pro M4（16GB）は7Bモデルを快適な速度で実行できる唯一のiPadです。** iPad Air M2（8GB）とM3（8GB）は3Bモデルを適切に実行します。[8GB RAM iPhone（iPhone 15 Pro Max）もLLM Farm経由で小型モデルを実行できます](/ja/power-local-llm/best-local-llm-apps-iphone-2026)。',
        items: [
          '**LLM Farm**（無料・オープンソース）：Hugging FaceからGGUFモデルをダウンロードし、Apple Silicon上でllama.cppを使って実行します。iOSネイティブオプションの中で最高のパフォーマンス。チャットと補完モードをサポート。App Storeからインストール。',
          '**Pocket Paladin**（無料プラン＋サブスクリプション）：厳選されたモデルダウンロード、LLM Farmよりクリーンなインターフェース、初回起動が少し簡単。無料プランは3Bモデルを含む；サブスクリプションで大型モデルとAPIモードが解放。',
          '**モデルのインポート：** LLM Farmでは、モデルライブラリアイコンをタップ → 「URLからモデルを追加」→ GGUFファイルのHugging Face直接ダウンロードURLを貼り付け。またはApple Filesを使って別の場所でダウンロードしたGGUFを転送。モデルはアプリのローカルストレージに保存 — iCloudではありません。',
          '**iPadのRAM管理：** iOSはバックグラウンドアプリのRAMを積極的に管理します。8GB iPadで7Bモデルを実行する前に他のすべてのアプリを閉じてください — 別のアプリがメモリを必要とするとiOSがモデルを削除します。16GB iPad Pro M4ではほとんど問題になりません。',
          '**生成速度の目安：** iPad Pro M4（16GB）：Phi-4 Mini 約20トークン/秒、Llama 3.2 3B 約30トークン/秒、Gemma 3 4B 約18トークン/秒。iPad Air M2（8GB）：3Bモデル 約12〜18トークン/秒；7Bモデル 約5〜8トークン/秒（リアルタイムチャットには低速）。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '8GB iPadでリアルタイムチャット用に7Bモデルを実行しようとしないでください。毎秒5〜8トークンでは、各レスポンスに15〜30秒かかります。プロンプトを送信して待つ要約タスクには使えますが、会話型利用には苛立たしい速度です。8GBデバイスでは3Bモデルを使用し、7B以上には16GBデバイスへのアップグレードまたはリモート接続に切り替えてください。',
          },
        ],
      },
      androidOnDevice: {
        id: 'android-on-device',
        title: 'Android：オンデバイス推論',
        content:
          '**Androidのオンデバイス推論は[Termux + Ollama](/ja/power-local-llm/best-local-llm-apps-android-2026)を使用します — TermuxはAndroidでOllamaをネイティブ実行するLinuxターミナルエミュレーターです。** iPadのアプリ体験より技術的ですが、完全なOllamaエコシステムへのアクセスが可能です。',
        numberedItems: [
          'F-DroidからTermuxをインストールします（Play Store版は不可 — 古く、必要なパッケージが不足しています）。',
          'Termuxで：`pkg update && pkg install curl`',
          'Ollama ARMバイナリをダウンロード：`curl -fsSL https://ollama.com/install.sh | sh` — ほとんどのAndroidタブレットと互換性のあるARM64ビルドをインストールします。',
          'モデルをプル：`ollama pull phi4-mini` または `ollama pull qwen3:1.7b`。',
          'サーバーを起動：`ollama serve`（このTermuxセッションを維持してください）。',
          'Termux経由でチャット：`ollama run phi4-mini` — またはブラウザを開いて`http://localhost:11434`にアクセスしてAPIを利用。GUIのためにローカルOllamaエンドポイントに接続するAndroidチャットアプリをインストール。',
        ],
        items: [
          '**3B以上のモデルに対応するデバイス：** RAM 8GB最低限（Samsung Galaxy Tab S10+、OnePlus Pad 2、Xiaomi Pad 7 Pro）。6GBデバイスはQwen3 1.7Bのみ実行可能。',
          '**Pixel Tabletはオンデバイスに非推奨：** Pixel Tablet（2023年モデル、8GB Tensor G2）は推奨リストから除外 — Tensor G2はSnapdragon 8 Gen 3 / Dimensity 9300よりLLM推論が大幅に低速で、Phi-4 Miniで4〜7トークン/秒（会話型利用には低速すぎる）。Pixel Tabletユーザーはホームマシンへのリモート接続を使用してください。',
          '**Snapdragon 8 Gen 3とDimensity 9300**は2026年のオンデバイス推論で最速のAndroidチップです。生成速度：1.7Bモデルで約15〜25トークン/秒；3Bモデルで約8〜12トークン/秒。',
          '**モデルストレージ：** Androidは統合メモリを持たないため、ほとんどのTermux設定ではGPUアクセラレーションなしでシステムRAM上でモデルが実行されます。GPUアクセラレーションにはTermux:NVIDIAまたは特定のVulkanビルドが必要；セットアップがより複雑です。',
          '**代替アプリ：** MNN LLM（Alibaba製、無料、選択されたモデルのオンデバイス推論Androidアプリ）はセットアップが簡単ですが、Ollamaよりモデル選択が限定的です。AI RunnerとllamafileもさまざまなサポートのAndroidビルドがあります。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Termux:Widgetアドオンをインストールし、「ollama serve」を実行するショートカットを作成してください — Termuxを手動で開かずにAndroidのホーム画面からOllamaサーバーを起動できます。Ollamaが起動したら、localhost:11434に接続するよう設定されたチャットアプリを開いてください。',
          },
        ],
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
          '**ホームマシンのローカルIPを確認：** macOSでは、システム環境設定 → ネットワーク → 現在のネットワーク → IPアドレス。Windowsでは、コマンドプロンプトで`ipconfig`を実行してIPv4アドレスを確認。IPをメモ（通常`192.168.x.x`）。',
          '**タブレット上で：** Safari（iPad）またはChrome（Android）を開く。`http://[マシンIP]:3000`に移動。Open WebUIでアカウントを作成（ローカルのみ、クラウドなし）。ドロップダウンからモデルを選択。チャット開始。',
          '**セキュリティ：** このセットアップはローカルネットワーク限定です。Open WebUI認証を追加せずにポート3000をインターネットに公開しないでください（組み込みの管理者アカウントシステムがあります）。接続はプレーンHTTP — 公共Wi-Fiで機密情報を送信しないでください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ホームマシンのOpen WebUI URLをタブレットのホーム画面にブックマーク追加してください（Safariでは：共有 → ホーム画面に追加；Chromeでは：三点メニュー → ホーム画面に追加）。ネイティブアプリのような感覚になります。iPadでは、SafariのフルスクリーンWebアプリはブラウザのクロームを隠し、アプリのような体験が得られます。',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'デバイス別モデル推奨',
        content:
          '**モデルの選択は好みではなく、利用可能なRAMによって決まります。** 以下の表は、デバイスのRAMをリアルタイム速度（8トークン/秒以上）で実行できる最大モデルにマッピングしています。モデル層について詳しくは[モバイルLLMモデルベスト2026](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)を参照。すべてのハードウェア層のモデル全体像は[ベストローカルLLM 2026](/ja/local-llms/best-local-llms-2026)を参照。',
        columns: ['デバイス / RAM', '推奨モデル', '速度', '最適な用途'],
        rows: [
          { 'デバイス / RAM': 'iPad Air M2 / M3（8GB）', '推奨モデル': 'Phi-4 Mini Q4', '速度': '約15〜18トークン/秒', '最適な用途': '文章作成補助、要約' },
          { 'デバイス / RAM': 'iPad Pro M4（16GB）', '推奨モデル': 'Llama 3.2 3B / Gemma 3 4B Q4', '速度': '約25〜30 / 約15〜20トークン/秒', '最適な用途': '本格的LLMワークステーション、RAG、フィクション執筆' },
          { 'デバイス / RAM': 'Android 8GB（Tab S10+）', '推奨モデル': 'Phi-4 Mini Q4（Termux+Ollama）', '速度': '約10〜15トークン/秒', '最適な用途': 'Termuxに慣れたパワーユーザー' },
          { 'デバイス / RAM': 'Android 6GB', '推奨モデル': 'Qwen3 1.7B Q4', '速度': '約15〜20トークン/秒', '最適な用途': '軽いチャット、翻訳、シンプルなタスク' },
          { 'デバイス / RAM': 'Pixel Tablet（8GB）', '推奨モデル': 'リモート接続のみ', '速度': 'N/A', '最適な用途': 'Tensor G2はオンデバイスに低速すぎる' },
          { 'デバイス / RAM': 'リモート経由の全タブレット', '推奨モデル': 'ホームマシン上の任意モデル', '速度': '約20〜40トークン/秒', '最適な用途': '品質優先利用、70Bモデル' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ほとんどの日常タスク（文章草稿、質問回答、内容要約）では、タブレット上のPhi-4 Mini（3.8B）は十分に実用的です。70Bモデルと比較して劣る点：複雑な多段階推論、ニュアンスのある創作、長文書分析。これらのタスクには大型モデルを実行するホームマシンへのリモート接続を使用してください。',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'タブレット向けローカルAIフロントエンド',
        content:
          '**タブレットで使用するチャットインターフェースは使いやすさに大きく影響します。** モバイル向けに設計されたものもあれば、デスクトップファーストでタブレットでは使いにくいものもあります。',
        items: [
          '**Open WebUI（ブラウザ）：** 一般的なチャットに最適なモバイル対応WebUI。SafariまたはChromeの任意のローカルIP:ポートで動作。タブレットのアスペクト比にきれいに適応。リモート接続セットアップに推奨。',
          '**LLM Farm（iPadアプリ）：** iOS向けに設計、iPadの全画面を使用。iPadで最も高性能なオンデバイスオプション。デスクトップアプリほどの洗練度はないが、iOS推論向けに作られています。',
          '**Pocket Paladin（iPadアプリ）：** LLM Farmよりクリーンなインターフェース、一般ユーザー向け設計。無料プランは3Bモデルを実行；有料プランで大型モデルとAPIアクセスが解放。',
          '**RisuAI（ブラウザ、モバイル対応）：** ロールプレイとキャラクターカードフィクションの最高モバイル体験。リモートOllamaインスタンスに接続可能。iPad Safariでアプリに近い品質のインターフェースで動作。',
          '**SillyTavern（ブラウザ）：** リモートOllamaインスタンスに接続したiPad Safariで動作。モバイル最適化されていないが機能的。一部の拡張機能はモバイルSafariで動作しません。',
          '**Termux CLI（Android）：** コマンドラインのみ。スクリプト化されたタスクに使えますが、コンパニオンアプリなしでの会話型利用には実用的でありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'iPadでのロールプレイとキャラクターカードフィクションには、Llama 3.3 70Bを実行するリモートOllamaインスタンスに接続したRisuAIが2026年に利用可能な最高の組み合わせです。RisuAIのモバイルインターフェースはタッチ操作向けに設計されており、リモート接続によりタブレットに収まるどのモデルよりも大幅に優れたキャラクターボイスを生み出す70Bモデルにアクセスできます。',
          },
        ],
      },
      metiContext: {
        id: 'meti-context',
        title: '日本・東アジアユーザーのための活用ポイント',
        content:
          '日本のユーザーにとって、タブレットでのローカルAI実行には規制面での追加的な意義があります。**経済産業省（METI）は2024年のAIガバナンスガイドラインで、企業データを処理するAIシステムにおけるローカル推論アーキテクチャを推奨しています。** タブレット上またはホームマシンへのリモート接続でのローカル推論は、クラウドAPIへのデータ送信なしにこれらの要件を満たします。',
        items: [
          '**METI AIガバナンス2024：** 経済産業省のガイドラインは、機密性の高い業務データを扱うシステムにローカル推論を推奨します。iPad Pro M4やAndroidタブレットのローカルモデルは、顧客データを海外クラウドに送信せずに動作します。',
          '**東アジアのデータ主権：** 日本、マレーシア、シンガポール、韓国はデータローカリゼーション要件を強化しています。タブレットのローカル推論またはローカルネットワークリモート接続はデータを国境内に保持します。',
          '**エンタープライズセキュリティ：** 日本の企業セキュリティ標準（ISMS、ISO 27001）はデータ処理の文書化を要求します。タブレット上または自社ネットワーク内で実行されるローカルモデルは、審査担当者へのコンプライアンス文書化を簡素化します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'METI AIガバナンスへのコンプライアンスを検討している日本企業の場合：iPad Pro M4とOllamaを使ったローカル推論のプルーフオブコンセプトをCISO・法務部門とともに実施することをお勧めします。オープンソースライセンス（Meta、Alibaba）とローカルネットワークアーキテクチャにより、規制当局への文書化が簡素化されます。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある失敗',
        items: [
          '**8GBタブレットで7Bモデルを実行する。** 毎秒5〜8トークンでは会話型利用には低速すぎます。8GBデバイスのオンデバイスチャットには3Bモデルを使用；7B以上の品質にはリモート接続を使用してください。',
          '**AndroidでPlay Store版Termuxを使用する。** Play Store版のTermuxは古く、Ollamaに必要なパッケージが不足しています。常にF-DroidからTermuxをインストールしてください。',
          '**認証なしにOpen WebUIをインターネットに公開する。** Open WebUIにはデフォルトでパスワードがありません。ホームネットワーク外に公開すると、URLを見つけた誰もがモデルにアクセスできます。管理者アカウントシステムを有効にしてファイアウォールを使用してください。',
          '**8GB iPad でオンデバイス前に他のアプリを閉じない。** iOSはバックグラウンドアプリのRAMを削除します。8GB iPadの3Bモデルは約3.5GBを使用；iOSが別のアプリのためにそのメモリを回収するとモデルがクラッシュします。推論前にすべての他のアプリを閉じてください。',
          '**モバイルブラウザでデスクトップ品質のUIを期待する。** SillyTavernなどはデスクトップファーストです。ブラウザでのモバイル体験は機能的ですが洗練されていません。モバイルファーストUXにはRisuAIまたはOpen WebUIを好んでください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'LLM Farm（iOS）ドキュメントとGitHub — [github.com/guinmoon](https://github.com/guinmoon/LLMFarm)',
          'Pocket Paladin iOSアプリ — [App Store](https://apps.apple.com)',
          'Termux向けOllama ARMビルド — [Ollamaドキュメント](https://ollama.com/docs)',
          'Open WebUIドキュメント — [docs.openwebui.com](https://docs.openwebui.com)',
          'Apple M4チップメモリ帯域幅とNeural Engineスペック — [Apple Silicon](https://apple.com/newsroom)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'iPadでAIを実行できますか？',
            a: 'はい、iPad Pro M4（16GB）とiPad Air M2/M3（8GB）で可能です。iPad Pro M4はLLM FarmまたはPocket PaladinでPhi-4 MiniとLlama 3.2 3Bをリアルタイム実行します。iPad Air M2は3Bモデルを適切に実行します。iPadで7B以上のモデルには、Ollamaを実行するホームMacまたはPCへのリモート接続を推奨します — iPadはチャットを表示し、ホームマシンが推論を処理します。',
          },
          {
            q: 'AndroidタブレットでAIを実行できますか？',
            a: 'はい、Termux + Ollamaを使用してRAM 8GB以上のデバイスで可能です。Samsung Galaxy Tab S10+（RAM 12GB）はPhi-4 Miniを約10〜15トークン/秒で実行します。RAM 6GBデバイスはQwen3 1.7Bを実行できます。セットアップにはF-DroidからのTermuxといくつかのターミナルコマンドへの慣れが必要です。ほとんどのAndroidタブレットユーザーにはホームマシンへのリモート接続の方が簡単なルートです。',
          },
          {
            q: 'タブレットのオンデバイスAIはインターネットなしで動作しますか？',
            a: 'はい。モデルをダウンロードしてアプリをインストールすれば、iPadのオンデバイス推論（LLM Farm、Pocket Paladin）とAndroid（Termux + Ollama）はインターネット接続なしで動作します。これがリモート接続に対するオンデバイスの主な利点の一つです — リモート接続アプローチにはホームWi-Fiが必要です。',
          },
          {
            q: 'iPadに最適なAIアプリは何ですか？',
            a: 'オンデバイス推論には：LLM Farm（より多くのオプション、オープンソース）またはPocket Paladin（よりシンプルなUI）。ホームOllamaサーバーへのリモート接続には：Open WebUI in Safari（一般チャットに最適）、RisuAI in Safari（ロールプレイとキャラクターフィクションに最適）。最適な選択は、オンデバイス機能、オフライン利用、または最高のインターフェース品質が欲しいかどうかによって異なります。',
          },
          {
            q: 'AndroidでTermux + Ollamaを使うのは安全ですか？',
            a: 'はい。Termuxは何百万人もの開発者が使用する確立されたAndroidターミナルエミュレーターです。Termux内のOllamaはローカル専用APIを提供します（デフォルトでlocalhost:11434）— バインドアドレスを明示的に変更しない限り、ネットワーク上の他のデバイスからはアクセスできません。モデルファイルはTermuxのプライベートストレージに保存され、共有Androidストレージには保存されません。',
          },
          {
            q: 'タブレットでChatGPT品質のレスポンスをローカルで得られますか？',
            a: 'ほぼ、ただし適切なセットアップが必要です。GPT-4o品質には70B以上のモデルが必要です。タブレット上では：iPad Pro M4（16GB）は70Bモデルを実行できません — 3B〜8Bモデルのみ。リモート接続経由：ホームマシンに24GB GPU（RTX 4090）または64GB統合メモリ（Mac M5 Max）があればLlama 3.3 70Bを実行でき、タブレットはブラウザのOpen WebUI経由でその品質にアクセスできます。これがタブレットでクラウドAI品質に最も近い方法です。',
          },
          {
            q: 'ラップトップのカバーを閉じてもホームOllamaサーバーを動かし続けるには？',
            a: 'macOSの場合：カバーを閉じた時のスリープポリシーを設定：システム環境設定 → バッテリー → 「電源アダプタ接続時にPower Napを有効にする」を無効にし、Amphetamineなどのツールを使用して電源接続時のスリープを防ぐ。Windowsの場合：電源オプション → プラン設定の変更 → 電源接続時のスリープを「しない」に設定。または、プライマリラップトップではなく常時稼働マシン（ミニPC、NAS、または廃棄予定の古いラップトップ）でOllamaを実行する。',
          },
          {
            q: 'タブレットでAIを実行するとバッテリーが早く消耗しますか？',
            a: 'はい — オンデバイス推論はCPU/GPU集約的です。iPad Pro M4でPhi-4 Miniを活発な会話で実行すると、バッテリーが約1時間で20〜30%消耗します。長時間使用する場合は、タブレットを充電しながら使用してください。ホームマシンへのリモート接続は、タブレットのバッテリー消費が大幅に少なくなります — タブレットはウェブページを表示するだけです。',
          },
          {
            q: 'AI推論中にタブレットはサーマルスロットリングしますか？',
            a: 'はい、特にiPad Air M2/M3とアクティブ冷却のないAndroidタブレットでは。iPad Pro M4の方が熱的なヘッドルームが大きく、顕著なスロットリングが起きる前に約10〜15分間生成速度を維持します。Androidタブレットはより早くスロットリングします（5〜8分の持続的推論）。緩和策：より短い生成チャンク（レスポンスあたり200〜400トークン）を使用、タブレットを硬い面に置く、同時に他のCPU集約型アプリを実行しない。',
          },
          {
            q: 'AIタブレット利用に最適なキーボードは何ですか？',
            a: 'iPad Pro M4用Apple Magic Keyboard（トラックパッド付き）が最も洗練されたセットアップです — Safari + Open WebUIでフルキーボードショートカットが動作し、トラックパッドで長いレスポンスのテキスト選択が可能。Logitech Combo Touchは予算代替品。Android：Termuxではどのbluetoothキーボードも動作しますが体験はより粗い（ターミナルのみ）。文章作業には、iPad Pro + Magic Keyboardがタブレットを執筆ファーストのAIワークステーションに変えます。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
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
      headline: 'タブレットでAIをローカル実行：iPad Pro M4・Galaxy Tab S10・OnePlus Pad 2（2026年版）',
      description:
        '2026年のiPadとAndroidタブレットでのAIローカル実行方法。オンデバイス推論アプリ、Termux + Ollama、ホームMac・PCへのリモート接続を解説。',
      image: `https://www.promptquorum.com/og/power-local-llm/run-ai-on-tablet-ipad-android?lang=ja`,
      url: 'https://www.promptquorum.com/ja/power-local-llm/run-ai-on-tablet-ipad-android',
      inLanguage: 'ja',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Organization', 'name': 'PromptQuorum' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      articleBody:
        '2026年のタブレットでのローカルAI実行。オンデバイス推論とホームマシンへのリモート接続を解説します。',
      keywords: [
        'iPad ローカルAI',
        'Android タブレット ローカルLLM',
        'Ollama iPad',
        'Termux Ollama',
        'LLM Farm',
        'Pocket Paladin',
      ],
      educationalLevel: 'Beginner',
      teaches: [
        'ローカルAI推論のためのiPad設定方法',
        'AndroidでTermuxとOllamaを使う方法',
        'タブレットからリモートOllamaに接続する方法',
        'タブレットハードウェアに基づくモデル選択',
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'LLM Farm' },
        { '@type': 'SoftwareApplication', 'name': 'Pocket Paladin' },
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
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
  },
}
