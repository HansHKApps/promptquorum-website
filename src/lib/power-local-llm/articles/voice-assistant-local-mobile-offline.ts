// Power Local LLM — Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud)
// Slug: voice-assistant-local-mobile-offline
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud) — 2026',
    seoTitle: 'Local Voice Assistant Whisper + LLM Phone 2026',
    intro:
      'A fully offline voice assistant on iPhone or Android in 2026 stacks three components: Whisper for speech-to-text, an on-device LLM for the response, and Piper or the system TTS for the voice. The realistic speech-to-first-audio latency on flagship phones is 0.8–1.5 seconds — under the 2-second "feels usable" threshold. This guide covers the iPhone (LLM Farm + WhisperKit), Android (Layla + Whisper.cpp), and hybrid (phone STT + remote Ollama) paths, with measured latency, battery, and accuracy numbers.',
    metaDescription:
      'Fully offline voice AI on iPhone and Android in 2026. Whisper local STT + on-device LLM + Piper TTS. iPhone, Android, and hybrid setup; latency, battery, privacy.',
    twitterDescription:
      'Build a Siri replacement that runs offline: Whisper local STT + Phi-4 Mini + Piper TTS. Speech-to-first-audio under 1.5 sec on flagship phones. iPhone + Android setup.',
    current_models_mentioned: [
      'Whisper Small',
      'Whisper Medium',
      'WhisperKit',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Piper TTS',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'Pixel 9 Pro (Tensor G4)',
      'Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Privacy-conscious phone users who want a Siri / Google Assistant replacement that runs entirely on-device, including travellers, journalists, healthcare workers, and developers building offline voice workflows.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'local voice assistant phone',
      'offline whisper iphone',
      'whisper local llm android',
      'siri replacement offline',
      'piper tts mobile',
      'whisperkit ios',
      'layla android voice',
    ],
    leadAnswerBlock:
      '**A fully offline voice assistant in 2026 needs three components: Whisper Small or Medium for speech-to-text, a 3B–4B local LLM (Phi-4 Mini or Gemma 3 4B) for the response, and Piper TTS or the system text-to-speech for the audio output.** On iPhone, the easiest stack is WhisperKit (or the Whisper Transcription app) + LLM Farm + iOS system TTS — speech-to-first-audio of ~0.9–1.4 seconds on iPhone 16 Pro. On Android, Layla bundles a similar stack natively, or you assemble it via Termux + whisper.cpp + Ollama + Piper. For better LLM quality, use the hybrid path: phone runs Whisper locally for privacy-critical STT, then sends the transcript to a home Mac or PC running Ollama with a 70B model. All three setups work without internet once the models are downloaded.',
    quickAnswerTop: {
      en: {
        question: 'Can you build a fully offline voice assistant on a phone in 2026?',
        answer:
          'Yes. The standard stack is Whisper for speech-to-text, a 3B–4B local LLM (Phi-4 Mini or Gemma 3 4B) for the response, and Piper TTS or the iOS / Android system TTS for the audio output. On iPhone 16 Pro, speech-to-first-audio latency is ~0.9–1.4 seconds — under the 2-second "feels usable" threshold. On flagship Android phones (Pixel 9 Pro, Galaxy S25 Ultra), latency is ~1.0–1.6 seconds. The iPhone path uses WhisperKit + LLM Farm; the Android path uses Layla (built-in stack) or Termux + whisper.cpp + Ollama; the hybrid path keeps STT on-device and sends the transcript to a home Mac or PC running a 70B model.',
        bullets: [
          'Stack: Whisper (STT) + 3B–4B local LLM + Piper or system TTS — all on-device.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + iOS system voice. Latency ~0.9–1.4 sec on 16 Pro.',
          'Android: Layla (bundled stack) or Termux + whisper.cpp + Ollama + Piper. Latency ~1.0–1.6 sec on Pixel 9 Pro.',
          'Hybrid: phone does STT locally, sends transcript to home Ollama running Llama 3.3 70B. Best quality.',
          'Battery (1 hour active conversation): ~25–35% on iPhone 16 Pro; ~25–40% on flagship Android.',
          'Whisper Small (~466 MB) is the standard for mobile — ~12% WER, ~150–300 ms STT latency.',
          'Speech-to-first-audio under 2 seconds is the "feels usable" threshold; under 1 second feels native.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which Voice Assistant Stack Should You Build?', anchor: '#which-stack' },
      { label: 'Voice Assistant Stack Comparison', anchor: '#stack-comparison' },
      { label: 'The Three-Component Stack: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'iPhone Setup: WhisperKit + LLM Farm (5 min)', anchor: '#iphone-setup' },
      { label: 'Android Setup: Layla or Termux Stack (5–15 min)', anchor: '#android-setup' },
      { label: 'Hybrid Setup: Phone STT + Remote Ollama', anchor: '#hybrid-setup' },
      { label: 'Latency Budget: Where the Seconds Go', anchor: '#latency-budget' },
      { label: 'Accuracy and Battery Drain Over 1 Hour', anchor: '#accuracy-battery' },
      { label: 'Hands-Free: Shortcuts, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: 'Privacy Guarantees: Truly Offline vs Cloud-Assisted', anchor: '#privacy' },
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
          '**The fully offline stack is Whisper (STT) + 3B–4B local LLM + Piper or system TTS.** All three components run on-device once installed; no cloud calls during operation.',
          '**iPhone: WhisperKit + LLM Farm + iOS system voice is the easiest path.** WhisperKit uses Apple Neural Engine for STT; LLM Farm runs Phi-4 Mini for the response; iOS system TTS handles the audio. Speech-to-first-audio: ~0.9–1.4 seconds on iPhone 16 Pro.',
          '**Android: Layla bundles the full stack natively, or build it manually with Termux + whisper.cpp + Ollama + Piper.** Layla is the easier path; the Termux build is more flexible. Speech-to-first-audio: ~1.0–1.6 seconds on Pixel 9 Pro and Galaxy S25 Ultra.',
          '**Hybrid (phone STT + remote Ollama) gives the best LLM quality.** Phone runs Whisper locally (privacy-critical for the audio), then sends the text transcript to a home Mac or PC running Llama 3.3 70B. Higher quality response, requires home Wi-Fi.',
          '**Whisper Small (~466 MB) is the mobile sweet spot.** ~12% WER on common speech, ~150–300 ms STT latency. Whisper Medium (~1.5 GB) is more accurate (~9% WER) but slower; Whisper Tiny (~75 MB) is faster but error-prone above background noise.',
          '**Battery drain is significant — about 25–35% per hour of active conversation on flagship phones.** For all-day use, plug in or use the hybrid path (only STT runs on the phone, dropping drain to ~10–15% per hour).',
          '**This is a real Siri replacement for users who prefer privacy over feature breadth.** What you give up: web search, smart-home integration with proprietary clouds, system action coverage. What you gain: works offline, no telemetry, no account.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**STT engine:** Whisper.cpp (cross-platform), WhisperKit (iOS, Apple Neural Engine optimised), Sherpa-ONNX (Android, ONNX runtime).',
          '**LLM:** Phi-4 Mini (3.8B) on flagship phones; Qwen3 1.7B or SmolLM 2 1.7B on older devices.',
          '**TTS:** Piper TTS (open-source, ~50 MB per voice), iOS system TTS (AVSpeechSynthesizer), Android system TTS.',
          '**iPhone apps:** WhisperKit, Whisper Transcription (Aiko developer), LLM Farm, PocketPal AI.',
          '**Android apps:** Layla (bundled stack), Termux + whisper.cpp + Ollama, Sherpa-ONNX demo apps.',
          '**Speech-to-first-audio target:** under 2 seconds = "feels usable"; under 1 second = "feels native".',
          '**Battery (1 hour active):** iPhone 16 Pro ~25–35%; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'Which Voice Assistant Stack Should You Build?',
        content:
          '**For most users on flagship phones: the on-device path is the right call.** It is fully private, works offline, and produces usable results in under 1.5 seconds. Use the hybrid path only if you specifically need 70B-class quality and accept the home-Wi-Fi dependency.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Build a fully offline voice assistant by stacking Whisper (STT), a 3B–4B local LLM (Phi-4 Mini or Gemma 3 4B), and Piper or the system TTS — speech-to-first-audio of 0.9–1.6 seconds on flagship phones in 2026.',
          },
          {
            type: 'plain-terms',
            text: 'A voice assistant has three jobs: turn your speech into text, generate a reply, and speak the reply back. With Whisper for the first step, a small local LLM for the second, and Piper or the phone\'s built-in voice for the third, you can do all three on the phone with no internet. The whole loop takes about 1 second on a recent iPhone or Android flagship — fast enough that it feels like talking to Siri, but everything stays on the device.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which Voice Assistant Stack?',
          localIf: [
            'You want full privacy and offline operation → fully on-device (iPhone or Android path)',
            'You travel often and want voice on planes / no-signal areas → fully on-device',
            'You\'re a journalist, healthcare worker, or lawyer → fully on-device for source / patient / client confidentiality',
            'You\'re a developer prototyping an offline voice workflow → fully on-device',
          ],
          cloudIf: [
            'You need 70B+ model quality (complex reasoning) → hybrid path (phone STT + remote Ollama at home)',
            'You need real-time web search or live data → cloud assistant (no local equivalent in 2026)',
            'You need deep integration with proprietary clouds (Google Calendar, iCloud, etc.) → keep using Siri / Google Assistant for those tasks',
          ],
          quick: [
            'iPhone simplest path: WhisperKit + LLM Farm + iOS voice',
            'Android simplest path: Layla (bundled stack)',
            'Best quality: hybrid (phone STT + home Ollama 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Start with the fully on-device path even if you eventually want hybrid. The on-device setup teaches you the moving parts (STT, LLM, TTS) and works without any home-server dependency. Once it\'s running, swapping the LLM call from local to a remote Ollama URL is a 1-line change.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Voice Assistant Stack Comparison',
        content:
          '**Three viable stacks in 2026, each tuned for a different priority: simplicity (Layla), Apple-native polish (WhisperKit + LLM Farm), or LLM quality (hybrid).** All three run STT and TTS on-device; the hybrid moves only the LLM step to a home machine.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick iPhone (WhisperKit + LLM Farm + iOS voice) for simplicity on iOS, Android (Layla) for simplicity on Android, or hybrid (phone STT + home Ollama) for best LLM quality.',
          },
          {
            type: 'plain-terms',
            text: 'The latency numbers below are speech-to-first-audio — the time from when you stop talking to when the assistant starts answering. Under 2 seconds feels usable; under 1 second feels native. Battery is the percentage drained over 1 hour of active back-and-forth conversation.',
          },
        ],
        columns: ['Stack', 'Latency (speech → first audio)', 'Battery (1 hr active)', 'Best for'],
        rows: [
          { 'Stack': 'iPhone (WhisperKit + LLM Farm)', 'Latency (speech → first audio)': '~0.9–1.4 sec (16 Pro / 17 Pro)', 'Battery (1 hr active)': '~25–35%', 'Best for': 'iOS users wanting Apple-native polish' },
          { 'Stack': 'Android (Layla, bundled)', 'Latency (speech → first audio)': '~1.0–1.6 sec (Pixel 9 Pro, Galaxy S25 Ultra)', 'Battery (1 hr active)': '~25–40%', 'Best for': 'Android users wanting one-app simplicity' },
          { 'Stack': 'Android (Termux + whisper.cpp + Ollama + Piper)', 'Latency (speech → first audio)': '~1.2–2.0 sec', 'Battery (1 hr active)': '~30–40%', 'Best for': 'Power users wanting full control' },
          { 'Stack': 'Hybrid (phone STT + home Ollama 70B)', 'Latency (speech → first audio)': '~1.5–2.5 sec (Wi-Fi dependent)', 'Battery (1 hr active)': '~10–15%', 'Best for': '70B-class quality, home-network use' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Latency is dominated by the LLM "first token" step, not by Whisper or TTS. To cut latency, use a smaller LLM (Qwen3 1.7B in place of Phi-4 Mini drops the LLM step from ~600 ms to ~250 ms). The trade-off is shorter, less-detailed responses.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'The Three-Component Stack: STT + LLM + TTS',
        content:
          '**Speech-to-text, the LLM, and text-to-speech are three independent components that you can swap individually.** Optimising any one of them (smaller Whisper, faster LLM, lower-latency TTS) reduces total latency.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small (~466 MB) is the standard mobile choice — ~12% word error rate (WER) on common speech, ~150–300 ms STT latency for a 5-second utterance. Whisper Medium (~1.5 GB) drops WER to ~9% but doubles latency. Whisper Tiny (~75 MB) is fast but error-prone above moderate background noise. WhisperKit (iOS) uses the Apple Neural Engine for ~30–40% lower STT latency than vanilla Whisper.cpp.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) is the recommended default on flagship phones. Time-to-first-token is ~400–800 ms on iPhone 16 Pro for a short prompt — the largest single contributor to overall latency. For older or RAM-constrained devices, Qwen3 1.7B (~1.1 GB) is faster (~200–400 ms TTFT) at the cost of shorter, simpler responses.',
          '**TTS — Piper TTS or system TTS.** Piper (Rhasspy project, open-source) supports 30+ languages, ~50 MB per voice, ~100–200 ms first-audio latency, and runs on iOS, Android, Linux, macOS, Windows. System TTS (AVSpeechSynthesizer on iOS, TextToSpeech on Android) has lower latency (~50–100 ms) but a more robotic voice on older OS versions. iOS 18+ and Android 14+ system voices are noticeably better than earlier OS versions.',
          '**Voice activity detection (VAD).** Most apps use Silero VAD or webrtcvad to detect when you stop talking. A 200–500 ms silence window is the typical end-of-utterance threshold. Too short → cuts you off mid-sentence; too long → adds latency. 300 ms is a reasonable default.',
          '**The full pipeline:** mic capture → VAD detects end of speech → Whisper transcribes → LLM generates reply → TTS speaks. Streaming the LLM tokens to TTS as they arrive is what makes "first audio" arrive in under 1 second on flagship phones — the alternative (wait for full LLM reply, then speak) doubles perceived latency.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If your stack feels sluggish, profile each step: log the duration of (mic → STT done), (STT done → LLM first token), (LLM first token → TTS first audio). One step usually dominates. On flagship phones in 2026, it is almost always the LLM time-to-first-token (~400–800 ms). Switch to a smaller LLM for faster perceived latency.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'iPhone Setup: WhisperKit + LLM Farm (5 min)',
        content:
          '**The simplest fully-offline iPhone voice assistant in 2026: WhisperKit (or Whisper Transcription) for STT, LLM Farm for the LLM, and iOS system TTS for the voice.** Total setup time is 5–10 minutes plus model download time.',
        numberedItems: [
          'Install WhisperKit-based app from App Store (e.g., "Whisper Transcription" by Aiko developer, free) — provides on-device transcription using Apple Neural Engine. Alternatively, build the WhisperKit reference app from GitHub (Argmax / WhisperKit).',
          'In WhisperKit / Whisper Transcription: download the "Small" model (~466 MB). Tiny is faster but inaccurate; Medium is more accurate but slower.',
          'Install LLM Farm from the App Store (free). In LLM Farm: tap Models → "Add Model from URL" → paste a Hugging Face URL for Phi-4 Mini Q4_K_M (or use the in-app library if available). Model is ~2.7 GB.',
          'Wire them together via iOS Shortcuts: create a Shortcut with these actions — (1) Record Audio (or accept Audio input from Share Sheet), (2) Transcribe with Whisper Transcription, (3) Generate Text with LLM Farm (if exposed) or Private LLM (~£10, has a Shortcuts action), (4) Speak Text using iOS system voice.',
          'Assign the Shortcut to a Lock Screen widget, Action Button (iPhone 15 Pro and newer), or "Hey Siri, run [shortcut name]". The Action Button gives the lowest-latency hands-free trigger.',
          'Test: hold the Action Button → speak → release. STT runs (~200 ms) → LLM generates (~600 ms first token, streams to TTS) → first audio plays at ~0.9–1.4 sec total. Tweak the VAD silence threshold in the Shortcut if it cuts you off.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm does not currently expose a Shortcuts action (as of May 2026). To use the iOS Shortcuts pipeline, you will need Private LLM (~£10 one-time) which does expose a "Generate Text" action. The Shortcuts approach is what makes the iPhone path "5 minutes" — without Shortcuts, you have to chain the apps manually.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Android Setup: Layla or Termux Stack (5–15 min)',
        content:
          '**Two Android paths: Layla (5-minute bundled-stack approach) or Termux + whisper.cpp + Ollama + Piper (15-minute manual approach with more control).** Both run fully offline once configured.',
        items: [
          '**Path A — Layla (5 min):** install Layla from the Play Store, download a model (Phi-4 Mini or Gemma 3 4B), enable voice mode in settings. Layla bundles whisper.cpp for STT, the local LLM for the response, and uses the Android system TTS. The simplest path; trade-off is less configurability.',
          '**Path B — Termux stack (15 min):**',
          'Install Termux from F-Droid (not Play Store; Play Store version is outdated).',
          'In Termux: `pkg update && pkg install git cmake clang ffmpeg`.',
          'Build whisper.cpp: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` and download the Small model: `bash ./models/download-ggml-model.sh small`.',
          'Install Ollama (Termux ARM build): `curl -fsSL https://ollama.com/install.sh | sh`. Pull a model: `ollama pull phi4-mini`. Start the server: `ollama serve`.',
          'Install Piper: `pip install piper-tts` (in a Termux Python venv) and download a voice (`piper-tts --download-voice en_US-amy-low` for example).',
          'Wire the pipeline with a small Python script that reads from `arecord`, runs whisper.cpp on the audio, sends the transcript to Ollama at localhost:11434, and pipes the response to Piper. Or use Tasker to chain shell commands triggered by a button or quick-tile.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For Path B, use Termux:Widget to create a home-screen shortcut that runs the voice-assistant script. One tap on the widget triggers the full pipeline. Pair with a Bluetooth button or a Tasker quick-tile for hands-free invocation. The Pixel 9 Pro and Galaxy S25 Ultra Action / Side keys can also trigger Tasker actions.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'Hybrid Setup: Phone STT + Remote Ollama',
        content:
          '**The hybrid stack moves only the LLM call to a home machine, keeping STT and TTS on-device.** This gives access to 70B-class models (Llama 3.3 70B, Qwen3-Coder 32B) while preserving privacy for the audio (which never leaves the phone — only the text transcript is sent over your home Wi-Fi).',
        numberedItems: [
          'On the home machine (Mac, PC, or NAS): install Ollama. Pull a 70B model: `ollama pull llama3.3:70b` (requires ~40 GB free disk + ~48 GB RAM or 24 GB GPU VRAM).',
          'Bind Ollama to your local network: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. Note the home machine\'s local IP (e.g., 192.168.1.20).',
          'On the phone, configure your voice assistant pipeline (iOS Shortcut or Android Tasker) to send the Whisper transcript via HTTP POST to `http://192.168.1.20:11434/api/generate` instead of the local LLM call.',
          'TTS still runs on the phone (Piper or system voice) using the response text from the home machine.',
          'Result: Whisper STT runs on-phone (audio never leaves the device), home Ollama generates a 70B-quality response in ~600–1200 ms, TTS speaks on-phone. Total latency ~1.5–2.5 seconds — slightly higher than fully on-device but with much better LLM quality.',
        ],
        promptExamples: [
          {
            label: 'iOS Shortcut: hybrid voice assistant (Action Button trigger)',
            text: '1. Record Audio → save to temp file.\n2. Transcribe with Whisper Transcription → output: transcript text.\n3. Get Contents of URL → URL: http://192.168.1.20:11434/api/generate, Method: POST, JSON body: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → output: response text.\n4. Speak Text → input: response text, voice: iOS system voice.\nAssign to Action Button. Hold to record; release to send. First audio plays in ~1.5–2.5 sec.',
          },
          {
            label: 'Tasker: Android hybrid voice assistant',
            text: '1. Variable: %TRANSCRIPT = (output of whisper-cli on recorded audio file).\n2. HTTP Request: URL http://192.168.1.20:11434/api/generate, Method POST, Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. Variable: %REPLY = (parsed "response" field from JSON).\n4. Say: %REPLY (Android system TTS or Piper if installed).\nTrigger via quick-tile, Bluetooth button, or Side-key long-press on Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For lowest-latency hybrid, set Ollama to streaming mode (`"stream":true`) and stream tokens to TTS as they arrive instead of waiting for the full response. iOS Shortcuts cannot stream natively, but a small Tasker plugin or a custom iOS app can. With streaming, perceived "first audio" latency drops by 200–400 ms even though total response time is the same.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'Latency Budget: Where the Seconds Go',
        content:
          '**On flagship phones in 2026, the LLM time-to-first-token dominates total latency — typically 50–60% of the speech-to-first-audio time.** Optimising the LLM step has more impact than tuning Whisper or TTS.',
        columns: ['Step', 'Typical Time (iPhone 16 Pro, on-device)', 'Notes'],
        rows: [
          { 'Step': 'VAD end-of-utterance detection', 'Typical Time (iPhone 16 Pro, on-device)': '~200–500 ms', 'Notes': 'Tunable; 300 ms default. Counts toward perceived latency.' },
          { 'Step': 'Whisper Small STT (5-sec utterance)', 'Typical Time (iPhone 16 Pro, on-device)': '~150–300 ms', 'Notes': 'WhisperKit ~30–40% faster via Apple Neural Engine.' },
          { 'Step': 'LLM time-to-first-token (Phi-4 Mini)', 'Typical Time (iPhone 16 Pro, on-device)': '~400–800 ms', 'Notes': 'Largest contributor. Smaller model = faster.' },
          { 'Step': 'TTS first audio (Piper or system)', 'Typical Time (iPhone 16 Pro, on-device)': '~100–200 ms', 'Notes': 'System TTS slightly faster than Piper.' },
          { 'Step': 'Total speech-to-first-audio', 'Typical Time (iPhone 16 Pro, on-device)': '~0.9–1.4 sec', 'Notes': 'Under 2 sec = "feels usable"; under 1 sec = "feels native".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'To get under 1 second total: use Whisper Tiny (75 MB, ~80 ms STT) + Qwen3 1.7B (~250 ms TTFT) + system TTS (~80 ms first audio). Total ~600–800 ms on iPhone 16 Pro. The trade-off is shorter, less-coherent LLM responses and lower STT accuracy in noisy environments. Worth it if responsiveness is your top priority.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'Accuracy and Battery Drain Over 1 Hour',
        content:
          '**Whisper Small achieves ~88% accuracy on common speech in moderate background noise; Whisper Medium reaches ~91% but doubles latency.** Battery drain over 1 hour of active conversation is ~25–35% on iPhone 16 Pro and ~25–40% on flagship Android.',
        items: [
          '**Whisper accuracy by model size (LibriSpeech-clean WER, lower is better):** Tiny ~7.5%, Small ~3%, Medium ~2.4%, Large v3 ~1.8%. In real-world noisy conditions: Tiny degrades to ~15–20% WER, Small to ~10–14%, Medium to ~7–10%, Large v3 to ~5–7%.',
          '**Cloud Whisper vs local Whisper:** OpenAI\'s cloud Whisper API uses Large v3 by default (~2% WER on clean speech). Local Whisper Small on a phone is ~3% WER on the same audio — close enough that for everyday assistant use, the difference is imperceptible.',
          '**Battery drain (1 hour active conversation, screen on):** iPhone 16 Pro ~25–35%; iPhone 17 Pro ~22–30%; Pixel 9 Pro ~30–40%; Galaxy S25 Ultra ~28–38%. Hybrid mode drops phone drain to ~10–15% per hour because only STT runs locally.',
          '**Thermal throttling:** sustained on-device LLM inference triggers thermal throttling after ~10–15 min on iPhone (chip surface ~38°C); ~15–20 min on flagship Android (better thermal mass on tablets and large phones). Throttling drops tokens/sec by 30–50%, which extends LLM latency from ~600 ms to ~900 ms first-token.',
          '**Mitigation for long sessions:** plug in to a charger, place phone face-up on a hard surface (not in your hand), or switch to hybrid mode. Phone-as-microphone uses a fraction of the energy of phone-as-everything.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A 1-hour all-local voice session can drain your phone battery by 30–40%. For all-day or in-car use, plan for charging. The hybrid path (only STT on-device) is the realistic option for ambient, always-on voice assistants — the home machine handles the heavy lifting.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'Hands-Free: Shortcuts, Tasker, CarPlay, Android Auto',
        content:
          '**Hands-free invocation depends on the trigger mechanism, not the voice stack.** iOS uses Shortcuts with the Action Button or "Hey Siri, run [shortcut]"; Android uses Tasker with the Side Key, quick-tile, or Bluetooth buttons.',
        items: [
          '**iPhone Action Button (iPhone 15 Pro and newer):** assign a Shortcut that triggers the voice pipeline. Hold the Action Button to start recording; release to send. Lowest-latency hands-free trigger on iPhone in 2026.',
          '**iPhone "Hey Siri, run [shortcut name]":** wakes Siri (~500 ms), then runs the Shortcut. Adds latency vs Action Button but works hands-free at any time the phone is unlocked.',
          '**Android Side Key / Bixby key (Galaxy):** assign a Tasker action via the Galaxy Modes & Routines settings or Bixby key remap apps. Press to trigger.',
          '**Android Tasker quick-tile:** add a quick-tile to the notification shade that runs the voice script. Two-swipe trigger from the lock screen.',
          '**Bluetooth buttons (e.g., Flic, generic media buttons):** pair with iOS or Android, configure to trigger the voice Shortcut / Tasker task. True hands-free (button on a desk, on a steering wheel, in a pocket).',
          '**CarPlay / Android Auto:** these use the system Siri / Google Assistant by design — neither exposes a third-party voice assistant API in 2026. The workaround for CarPlay is to use a Shortcut bound to a CarPlay action button (limited Shortcut support); for Android Auto, use Tasker to trigger via Bluetooth media button. Neither is as polished as the system assistants.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For in-car use without CarPlay / Android Auto integration: pair a small Bluetooth button (Flic, AirShou, generic media remote) and clip it to the steering wheel. Press to trigger the offline voice assistant — it works without internet, never sends audio to a cloud, and answers in ~1.5 seconds. The trade-off vs CarPlay is no UI on the car display, audio-only.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy Guarantees: Truly Offline vs Cloud-Assisted',
        content:
          '**A voice assistant is "truly offline" only if mic audio, transcripts, and TTS audio all stay on the device with no network calls.** Many apps marketed as "private" still send transcripts or telemetry to a cloud — verify with airplane mode or a network monitor before trusting.',
        items: [
          '**How to verify "truly offline":** put the phone in airplane mode and use the assistant. If it works at full quality, it is truly offline. If it degrades or fails, some step depends on a cloud service.',
          '**Audio capture:** mic data should be processed locally and never written to disk or sent anywhere. Whisper, WhisperKit, and Sherpa-ONNX all run STT in memory and discard audio after transcription.',
          '**LLM inference:** if the response is generated by a local model (Phi-4 Mini, Gemma 3, Llama 3.2) on the phone, no prompt leaves the device. If the assistant uses a "cloud-assisted" mode (Apple Intelligence Private Cloud Compute, Google\'s on-device-first then cloud-fallback), transcripts may be sent to a server under specific conditions — check the app\'s privacy policy.',
          '**TTS:** Piper and system TTS are fully on-device. Some "premium" cloud voices (ElevenLabs, OpenAI TTS) require sending the response text to a server — avoid these for true offline.',
          '**Hybrid path privacy posture:** in hybrid mode, audio stays on the phone (Whisper local), but the text transcript is sent to your home Ollama server over your home Wi-Fi. This is local-network-only, not cloud — the data stays inside your network. Acceptable for most privacy-conscious users; not equivalent to fully on-device for the strictest threat models.',
          '**App-specific notes (May 2026):** WhisperKit and whisper.cpp are open-source and verifiably offline. Layla runs locally by default (verify in airplane mode). LLM Farm and PocketPal AI run inference fully on-device. Apple Intelligence has both an on-device and Private Cloud Compute mode — disable PCC in Settings for fully on-device operation.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If full offline operation is critical (journalist / source confidentiality, healthcare, legal): prefer open-source apps (WhisperKit reference build, whisper.cpp via Termux, Layla) where you can audit network behaviour. Closed-source apps (even those marketed as "private") may add cloud features in future updates without obvious user notification.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Using Whisper Tiny for everything.** Tiny is fast (~80 ms STT) but error-prone in noisy environments (~15–20% WER vs Small at ~10–14%). Tiny is acceptable for short commands in quiet rooms; use Small for general-purpose voice assistants.',
          '**Wait-for-full-LLM-response before TTS starts.** This doubles perceived latency. Stream LLM tokens to TTS as they arrive — Piper supports streaming input, system TTS supports incremental speech. First audio should play after the LLM\'s first sentence, not after the full response.',
          '**Running on-device LLM in a hot environment.** Thermal throttling kicks in within minutes in direct sun or inside a hot car, dropping tokens/sec by 30–50% and pushing latency past 2 seconds. Use the hybrid path or keep the phone cool.',
          '**Trusting "private" without verification.** "Private" and "local" are marketing terms in 2026 — some apps that claim local processing still phone home for analytics, model updates, or cloud-fallback transcription. Verify with airplane mode before relying on it for sensitive use.',
          '**Building the Termux Android stack on a low-RAM device.** Termux + whisper.cpp + Ollama + Piper consumes ~4 GB of system RAM at peak. Devices with 6 GB or less RAM will OOM-kill components mid-conversation. Use Layla on low-RAM Android, or stick with the iPhone path.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) (cross-platform Whisper, including Android and iOS builds).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) (Apple Neural Engine optimised Whisper for iOS / macOS).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) (open-source neural TTS, mobile-capable, 30+ languages).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (iOS app for running GGUF models locally).',
          'Layla (Android) — [Play Store listing](https://play.google.com) and developer documentation (bundled local LLM stack with voice support).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'How accurate is local Whisper vs cloud Whisper?',
            a: 'Whisper Small running locally on a phone achieves ~3% WER on clean speech; OpenAI\'s cloud Whisper (Large v3) achieves ~2%. In noisy environments, local Small drops to ~10–14% WER while cloud Large v3 drops to ~5–7%. For everyday voice-assistant use, the local accuracy is close enough to be imperceptible. For dictation of long-form text where every word matters, cloud or local Medium / Large is preferable.',
          },
          {
            q: 'Can a local voice assistant replace Siri completely?',
            a: 'For private Q&A, drafting, and summarisation: yes, with comparable or better quality than Siri\'s on-device features. For system actions (open apps, set timers, control HomeKit), launch web searches, or live data (weather, sports scores): no — Siri\'s integration with iOS and Apple services is not replicable by a third-party local stack in 2026. Many users keep both: Siri for system actions, local stack for private Q&A.',
          },
          {
            q: 'Does this work with CarPlay or Android Auto?',
            a: 'Limited. CarPlay and Android Auto are designed around the system Siri / Google Assistant; neither exposes a third-party voice-assistant API. Workarounds: use a Shortcut bound to a CarPlay action button (limited Shortcut support), or pair a Bluetooth button (Flic, generic media remote) and trigger Tasker / Shortcuts via that. Neither matches the polish of the system assistants for in-car use.',
          },
          {
            q: 'How do I trigger it hands-free?',
            a: 'iPhone: hold the Action Button (iPhone 15 Pro and newer) to invoke the Shortcut, or say "Hey Siri, run [shortcut name]". Android: use the Side Key or Bixby key on Galaxy phones, a Tasker quick-tile, or a paired Bluetooth button. For true ambient hands-free (always-listening wake word), the local stack does not match Siri / Google Assistant in 2026 — the phone\'s system wake-word detector is not exposed to third-party apps.',
          },
          {
            q: 'Can it handle multi-language conversations?',
            a: 'Yes, but with caveats. Whisper auto-detects the input language and supports 99 languages. Local LLMs vary: Phi-4 Mini handles English well and the major European languages reasonably; Qwen3 has strong multilingual support including Chinese; Gemma 3 supports 100+ languages. For TTS, Piper has voices in 30+ languages; system TTS depends on the OS language packs you have installed. Mid-conversation language switching works in Whisper but may confuse the LLM.',
          },
          {
            q: 'Does background noise break local STT?',
            a: 'Whisper Tiny degrades significantly above moderate noise (~15–20% WER); Small handles café-level noise reasonably (~10–14% WER); Medium and Large handle most realistic environments well. For noisy use (cars, public transit), use Whisper Medium if your phone has the RAM, or apply VAD aggressively (only transcribe when speech is detected, ignore between utterances).',
          },
          {
            q: 'How do I integrate with smart home devices locally?',
            a: 'Pipe the LLM\'s response through a parser that detects intents (e.g., "turn off the kitchen lights") and call your local smart home hub\'s API directly — Home Assistant has a REST API at your local IP, and Apple HomeKit integration works via the Shortcuts "Control Home" actions. Avoid cloud smart-home integrations (Alexa, Google Home) if you want a fully offline pipeline.',
          },
          {
            q: 'Can I customise the voice (TTS)?',
            a: 'Yes. Piper TTS has 100+ community-trained voices in 30+ languages, downloadable as ~50 MB voice models. iOS Voice Shortcuts let you pick from system voices including the higher-quality Premium voices (download in Settings → Accessibility → Spoken Content → Voices). Android system TTS supports voice packs from Google or third parties. Custom voice cloning (your own voice or a specific persona) requires a separate TTS toolchain (Coqui, Tortoise TTS) — not yet practical on-device in 2026.',
          },
          {
            q: 'Does battery life take a major hit?',
            a: 'Yes — about 25–40% per hour of active conversation on flagship phones. For occasional voice queries, the impact is small. For all-day or always-on use, plug in or use the hybrid path (only STT runs on-device, dropping drain to ~10–15% per hour). Background passive listening with wake-word detection is not currently feasible on third-party local stacks at acceptable battery cost.',
          },
          {
            q: 'Will iOS 19 or Android 16 break this setup?',
            a: 'Unlikely for the core stack (Whisper, local LLM, TTS) — these are user-space apps that depend on standard APIs (mic capture, TTS, network). What may break: Shortcuts integrations if Apple changes the Shortcuts API; Termux on Android if Android 16 tightens background process restrictions further (Android has been tightening these every release). Keep apps updated and verify after each major OS update.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — base layer apps (PocketPal AI, LLM Farm, Private LLM) for the iPhone path.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — base layer apps (Layla, Maid, MLC Chat, Termux + Ollama) for the Android path.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model layer of the voice stack; benchmarks and quality vs latency trade-offs.',
          '[How to Run AI on a Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — tablet equivalent for users wanting a larger-screen voice setup.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority covering all hardware tiers, useful for picking the LLM in the hybrid setup.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory entries for Whisper.cpp, WhisperKit, Piper TTS, and other voice-stack components.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Einen lokalen Sprachassistenten auf Ihrem Telefon erstellen: Whisper + lokales LLM (keine Cloud) — 2026',
    seoTitle: 'Lokaler Sprachassistent Whisper LLM Telefon 2026',
    intro:
      'Ein vollständig offline funktionierender Sprachassistent auf iPhone oder Android in 2026 setzt sich aus drei Komponenten zusammen: Whisper für Sprache-zu-Text, ein lokales LLM auf dem Gerät für die Antwort und Piper oder das System-TTS für die Sprachausgabe. Die realistische Latenz von Sprache bis zum ersten Audio auf aktuellen Flaggschiff-Telefonen beträgt 0,8–1,5 Sekunden — unter der 2-Sekunden-Schwelle für „nutzbar anfühlend". Dieser Leitfaden behandelt den iPhone-Weg (LLM Farm + WhisperKit), Android-Weg (Layla + Whisper.cpp) und den hybriden Weg (Telefon-STT + Remote Ollama) mit gemessenen Latenz-, Akku- und Genauigkeitszahlen.',
    metaDescription:
      'Vollständig offline funktionierender Sprachassistenten auf iPhone und Android in 2026. Whisper lokales STT + lokales LLM + Piper TTS. iPhone-, Android- und Hybrid-Setup; Latenz, Akku, Datenschutz.',
    twitterDescription:
      'Erstellen Sie einen Siri-Ersatz, der offline läuft: Whisper lokales STT + Phi-4 Mini + Piper TTS. Sprache-zu-erstem-Audio unter 1,5 Sekunden auf Flaggschiff-Telefonen. iPhone + Android Setup.',
    current_models_mentioned: [
      'Whisper Small',
      'Whisper Medium',
      'WhisperKit',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Piper TTS',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'Pixel 9 Pro (Tensor G4)',
      'Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Datenschutzbewusste Telefonnutzer, die einen Siri / Google Assistant-Ersatz möchten, der vollständig auf dem Gerät läuft, einschließlich Reisender, Journalisten, Gesundheitsfachkräfte und Entwickler, die offline Sprach-Workflows erstellen.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'lokaler Sprachassistent Telefon',
      'offline Whisper iPhone',
      'Whisper lokales LLM Android',
      'Siri Ersatz offline',
      'Piper TTS mobil',
      'WhisperKit iOS',
      'Layla Android Stimme',
    ],
    leadAnswerBlock:
      '**Ein vollständig offline funktionierender Sprachassistent in 2026 benötigt drei Komponenten: Whisper Small oder Medium für Sprache-zu-Text, ein lokales 3B–4B LLM (Phi-4 Mini oder Gemma 3 4B) für die Antwort und Piper TTS oder das System-Sprach-zu-Text für die Audioausgabe.** Auf iPhone ist der einfachste Stack WhisperKit (oder die Whisper Transcription-App) + LLM Farm + iOS System-TTS — Sprache-zu-erstem-Audio von ~0,9–1,4 Sekunden auf iPhone 16 Pro. Auf Android bundles Layla einen ähnlichen Stack nativ, oder Sie bauen ihn über Termux + whisper.cpp + Ollama + Piper zusammen. Für bessere LLM-Qualität verwenden Sie den hybriden Weg: Telefon führt Whisper lokal aus für datenschutzkritisches STT, sendet dann die Abschrift an einen Home Mac oder PC, auf dem Ollama mit einem 70B-Modell läuft. Alle drei Setups funktionieren ohne Internet, sobald die Modelle heruntergeladen wurden.',
    quickAnswerTop: {
      de: {
        question: 'Können Sie einen vollständig offline funktionierendes Sprachassistent auf einem Telefon 2026 erstellen?',
        answer:
          'Ja. Der Standard-Stack ist Whisper für Sprache-zu-Text, ein lokales 3B–4B LLM (Phi-4 Mini oder Gemma 3 4B) für die Antwort und Piper TTS oder das iOS / Android System-TTS für die Audioausgabe. Auf iPhone 16 Pro liegt die Latenz von Sprache-zu-erstem-Audio bei ~0,9–1,4 Sekunden — unter der 2-Sekunden-Schwelle für „nutzbar anfühlend". Auf Flaggschiff-Android-Telefonen (Pixel 9 Pro, Galaxy S25 Ultra) liegt die Latenz bei ~1,0–1,6 Sekunden. Der iPhone-Weg verwendet WhisperKit + LLM Farm; der Android-Weg verwendet Layla (eingebauter Stack) oder Termux + whisper.cpp + Ollama; der Hybrid-Weg hält STT auf dem Gerät und sendet die Abschrift an einen Home Mac oder PC, auf dem ein 70B-Modell läuft.',
        bullets: [
          'Stack: Whisper (STT) + 3B–4B lokales LLM + Piper oder System-TTS — alles auf dem Gerät.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + iOS Systemstimme. Latenz ~0,9–1,4 Sekunden auf 16 Pro.',
          'Android: Layla (gebündelter Stack) oder Termux + whisper.cpp + Ollama + Piper. Latenz ~1,0–1,6 Sekunden auf Pixel 9 Pro.',
          'Hybrid: Telefon führt STT lokal aus, sendet Abschrift an Home Ollama mit Llama 3.3 70B. Beste Qualität.',
          'Akku (1 Stunde aktives Gespräch): ~25–35% auf iPhone 16 Pro; ~25–40% auf Flaggschiff-Android.',
          'Whisper Small (~466 MB) ist der Standard für Mobilgeräte — ~12% WER, ~150–300 ms STT-Latenz.',
          'Sprache-zu-erstem-Audio unter 2 Sekunden ist die „nutzbar anfühlende" Schwelle; unter 1 Sekunde wirkt nativ.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Welcher Sprachassistenten-Stack soll erstellt werden?', anchor: '#which-stack' },
      { label: 'Vergleich des Sprachassistenten-Stacks', anchor: '#stack-comparison' },
      { label: 'Der dreikomponentige Stack: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'iPhone-Setup: WhisperKit + LLM Farm (5 Min.)', anchor: '#iphone-setup' },
      { label: 'Android-Setup: Layla oder Termux-Stack (5–15 Min.)', anchor: '#android-setup' },
      { label: 'Hybrid-Setup: Telefon-STT + Remote Ollama', anchor: '#hybrid-setup' },
      { label: 'Latenz-Budget: Wohin gehen die Sekunden', anchor: '#latency-budget' },
      { label: 'Genauigkeit und Akkulaufzeit über 1 Stunde', anchor: '#accuracy-battery' },
      { label: 'Freisprecheinrichtung: Shortcuts, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: 'Datenschutzgarantien: Wirklich offline vs. Cloud-gestützt', anchor: '#privacy' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Der vollständig offline-Stack ist Whisper (STT) + 3B–4B lokales LLM + Piper oder System-TTS.** Alle drei Komponenten laufen lokal auf dem Gerät, sobald sie installiert sind; keine Cloud-Aufrufe während des Betriebs.',
          '**iPhone: WhisperKit + LLM Farm + iOS Systemstimme ist der einfachste Weg.** WhisperKit verwendet die Apple Neural Engine für STT; LLM Farm führt Phi-4 Mini für die Antwort aus; iOS System-TTS verwaltet das Audio. Sprache-zu-erstem-Audio: ~0,9–1,4 Sekunden auf iPhone 16 Pro.',
          '**Android: Layla bundles den vollständigen Stack nativ, oder bauen Sie ihn manuell mit Termux + whisper.cpp + Ollama + Piper zusammen.** Layla ist der einfachere Weg; der Termux-Build ist flexibler. Sprache-zu-erstem-Audio: ~1,0–1,6 Sekunden auf Pixel 9 Pro und Galaxy S25 Ultra.',
          '**Hybrid (Telefon-STT + Remote Ollama) ergibt die beste LLM-Qualität.** Telefon führt Whisper lokal aus (datenschutzkritisch für das Audio), sendet dann die Textabschrift an einen Home Mac oder PC, auf dem Llama 3.3 70B läuft. Bessere Antwortqualität, erfordert Home-Wi-Fi.',
          '**Whisper Small (~466 MB) ist der Mobile-Sweet-Spot.** ~12% WER bei normaler Sprache, ~150–300 ms STT-Latenz. Whisper Medium (~1,5 GB) ist genauer (~9% WER), aber langsamer; Whisper Tiny (~75 MB) ist schneller, aber fehleranfällig über Hintergrundgeräusche.',
          '**Akkulaufzeit ist erheblich — etwa 25–35% pro Stunde aktiven Gesprächs auf Flaggschiff-Telefonen.** Für Ganztagsnutzung anschließen oder den hybriden Weg verwenden (nur STT läuft auf dem Telefon, Abfluss auf ~10–15% pro Stunde reduzieren).',
          '**Dies ist ein echter Siri-Ersatz für Nutzer, die Datenschutz über Funktionsbreite bevorzugen.** Was Sie aufgeben: Web-Suche, Smart-Home-Integration mit proprietären Clouds, System-Action-Abdeckung. Was Sie gewinnen: funktioniert offline, keine Telemetrie, kein Konto.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**STT-Engine:** Whisper.cpp (plattformübergreifend), WhisperKit (iOS, Apple Neural Engine optimiert), Sherpa-ONNX (Android, ONNX-Runtime).',
          '**LLM:** Phi-4 Mini (3,8B) auf Flaggschiff-Telefonen; Qwen3 1,7B oder SmolLM 2 1,7B auf älteren Geräten.',
          '**TTS:** Piper TTS (Open-Source, ~50 MB pro Stimme), iOS System-TTS (AVSpeechSynthesizer), Android System-TTS.',
          '**iPhone-Apps:** WhisperKit, Whisper Transcription (Aiko-Entwickler), LLM Farm, PocketPal AI.',
          '**Android-Apps:** Layla (gebündelter Stack), Termux + whisper.cpp + Ollama, Sherpa-ONNX Demo-Apps.',
          '**Sprache-zu-erstem-Audio-Ziel:** unter 2 Sekunden = „nutzbar anfühlend"; unter 1 Sekunde = „wirkt nativ".',
          '**Akku (1 Stunde aktiv):** iPhone 16 Pro ~25–35%; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'Welcher Sprachassistenten-Stack soll erstellt werden?',
        content:
          '**Für die meisten Nutzer auf Flaggschiff-Telefonen: Der Weg auf dem Gerät ist die richtige Wahl.** Es ist vollständig privat, funktioniert offline und liefert nutzbare Ergebnisse unter 1,5 Sekunden. Verwenden Sie den Hybrid-Weg nur, wenn Sie speziell 70B-Klassenqualität benötigen und die Home-Wi-Fi-Abhängigkeit akzeptieren.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Erstellen Sie einen vollständig offline-Sprachassistenten, indem Sie Whisper (STT), ein lokales 3B–4B-LLM (Phi-4 Mini oder Gemma 3 4B) und Piper oder System-TTS stacks — Sprache-zu-erstem-Audio von 0,9–1,6 Sekunden auf Flaggschiff-Telefonen 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Sprachassistent hat drei Aufgaben: Ihre Sprache in Text umwandeln, eine Antwort generieren und die Antwort zurück sprechen. Mit Whisper für den ersten Schritt, einem kleinen lokalen LLM für den zweiten und Piper oder der integrierten Stimme des Telefons für den dritten, können Sie alle drei auf dem Telefon ohne Internet durchführen. Die gesamte Schleife dauert etwa 1 Sekunde auf einem aktuellen iPhone oder Android-Flaggschiff — schnell genug, dass es sich anfühlt, als würde man mit Siri sprechen, aber alles bleibt auf dem Gerät.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidung: Welcher Sprachassistenten-Stack?',
          localIf: [
            'Sie möchten vollständige Datenschutz- und Offline-Betrieb → vollständig auf dem Gerät (iPhone oder Android-Weg)',
            'Sie reisen oft und möchten Sprachfunktionen auf Flugzeugen / in Bereichen ohne Signal → vollständig auf dem Gerät',
            'Sie sind Journalist, Gesundheitsfachkraft oder Rechtsanwalt → vollständig auf dem Gerät für Quelle / Patient / Klient-Vertraulichkeit',
            'Sie sind Entwickler, der einen offline-Sprach-Workflow prototypiert → vollständig auf dem Gerät',
          ],
          cloudIf: [
            'Sie benötigen 70B+ Modellqualität (komplexes Reasoning) → Hybrid-Weg (Telefon-STT + Remote Ollama zu Hause)',
            'Sie benötigen Echtzeit-Web-Suche oder Live-Daten → Cloud-Assistent (kein lokales Äquivalent 2026)',
            'Sie benötigen tiefe Integration mit proprietären Clouds (Google Calendar, iCloud, etc.) → Verwenden Sie Siri / Google Assistant weiterhin für diese Aufgaben',
          ],
          quick: [
            'iPhone einfachster Weg: WhisperKit + LLM Farm + iOS-Stimme',
            'Android einfachster Weg: Layla (gebündelter Stack)',
            'Beste Qualität: Hybrid (Telefon-STT + Home Ollama 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Beginnen Sie mit dem vollständig auf dem Gerät laufenden Weg, auch wenn Sie später einen Hybrid-Ansatz möchten. Das Setup auf dem Gerät lehrt Sie die beweglichen Teile (STT, LLM, TTS) und funktioniert ohne Home-Server-Abhängigkeit. Sobald es läuft, ist das Austauschen des LLM-Aufrufs von lokal zu einer Remote-Ollama-URL eine 1-Zeilen-Änderung.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Vergleich des Sprachassistenten-Stacks',
        content:
          '**Drei praktikable Stacks 2026, je einer auf eine andere Priorität abgestimmt: Einfachheit (Layla), Apple-native Verarbeitung (WhisperKit + LLM Farm) oder LLM-Qualität (Hybrid).** Alle drei führen STT und TTS auf dem Gerät aus; der Hybrid verschiebt nur den LLM-Schritt auf einen Home-Computer.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wählen Sie iPhone (WhisperKit + LLM Farm + iOS-Stimme) für Einfachheit unter iOS, Android (Layla) für Einfachheit unter Android oder Hybrid (Telefon-STT + Home Ollama) für beste LLM-Qualität.',
          },
          {
            type: 'plain-terms',
            text: 'Die Latenzzahlen unten sind Sprache-zu-erstem-Audio — die Zeit von Ihrer Sprechpause bis der Assistent anfängt zu antworten. Unter 2 Sekunden wirkt nutzbar; unter 1 Sekunde wirkt nativ. Akku ist der Prozentsatz, der über 1 Stunde aktives Hin- und Hergespräch entleert wird.',
          },
        ],
        columns: ['Stack', 'Latenz (Sprache → erstes Audio)', 'Akku (1 Stunde aktiv)', 'Am besten für'],
        rows: [
          { 'Stack': 'iPhone (WhisperKit + LLM Farm)', 'Latenz (Sprache → erstes Audio)': '~0,9–1,4 Sekunden (16 Pro / 17 Pro)', 'Akku (1 Stunde aktiv)': '~25–35%', 'Am besten für': 'iOS-Nutzer, die Apple-native Verarbeitung mögen' },
          { 'Stack': 'Android (Layla, gebündelt)', 'Latenz (Sprache → erstes Audio)': '~1,0–1,6 Sekunden (Pixel 9 Pro, Galaxy S25 Ultra)', 'Akku (1 Stunde aktiv)': '~25–40%', 'Am besten für': 'Android-Nutzer, die Ein-App-Einfachheit mögen' },
          { 'Stack': 'Android (Termux + whisper.cpp + Ollama + Piper)', 'Latenz (Sprache → erstes Audio)': '~1,2–2,0 Sekunden', 'Akku (1 Stunde aktiv)': '~30–40%', 'Am besten für': 'Power-Nutzer, die vollständige Kontrolle mögen' },
          { 'Stack': 'Hybrid (Telefon-STT + Home Ollama 70B)', 'Latenz (Sprache → erstes Audio)': '~1,5–2,5 Sekunden (Wi-Fi-abhängig)', 'Akku (1 Stunde aktiv)': '~10–15%', 'Am besten für': '70B-Klassenqualität, Nutzung bei Home-Netzwerk' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Latenz wird vom LLM „Erstes-Token"-Schritt dominiert, nicht von Whisper oder TTS. Um die Latenz zu reduzieren, verwenden Sie ein kleineres LLM (Qwen3 1,7B anstelle von Phi-4 Mini senkt den LLM-Schritt von ~600 ms auf ~250 ms). Der Kompromiss sind kürzere, weniger detaillierte Antworten.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'Der dreikomponentige Stack: STT + LLM + TTS',
        content:
          '**Sprache-zu-Text, das LLM und Text-zu-Sprache sind drei unabhängige Komponenten, die Sie einzeln austauschen können.** Die Optimierung einer von ihnen (kleinerer Whisper, schnellerer LLM, niedrigere TTS-Latenz) reduziert die Gesamtlatenz.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small (~466 MB) ist die Standard-Mobile-Wahl — ~12% Wortfehlerrate (WER) bei normaler Sprache, ~150–300 ms STT-Latenz für eine 5-Sekunden-Äußerung. Whisper Medium (~1,5 GB) senkt WER auf ~9%, verdoppelt aber die Latenz. Whisper Tiny (~75 MB) ist schnell, aber fehleranfällig über moderates Hintergrundgeräusch. WhisperKit (iOS) verwendet die Apple Neural Engine für ~30–40% niedrigere STT-Latenz als Vanilla Whisper.cpp.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) ist die empfohlene Standardeinstellung auf Flaggschiff-Telefonen. Zeit zum ersten Token beträgt ~400–800 ms auf iPhone 16 Pro für einen kurzen Prompt — der größte einzelne Beitrag zur Gesamtlatenz. Für ältere oder RAM-begrenzte Geräte ist Qwen3 1,7B (~1,1 GB) schneller (~200–400 ms TTFT) auf Kosten kürzerer, einfacherer Antworten.',
          '**TTS — Piper TTS oder System-TTS.** Piper (Rhasspy-Projekt, Open-Source) unterstützt 30+ Sprachen, ~50 MB pro Stimme, ~100–200 ms erste Audio-Latenz und läuft auf iOS, Android, Linux, macOS, Windows. System-TTS (AVSpeechSynthesizer auf iOS, TextToSpeech auf Android) hat niedrigere Latenz (~50–100 ms), aber eine robotischere Stimme auf älteren OS-Versionen. iOS 18+ und Android 14+ System-Stimmen sind deutlich besser als frühere OS-Versionen.',
          '**Sprachaktivitätserkennung (VAD).** Die meisten Apps verwenden Silero VAD oder webrtcvad, um zu erkennen, wenn Sie aufhören zu sprechen. Ein 200–500 ms Stille-Fenster ist die typische Schwelle für Äußerungsende. Zu kurz → schneidet Sie mitten im Satz ab; zu lang → addiert Latenz. 300 ms ist ein vernünftiger Standard.',
          '**Die vollständige Pipeline:** Mikrofon-Erfassung → VAD erkennt Sprachende → Whisper transkribiert → LLM generiert Antwort → TTS spricht. Das Streamen der LLM-Token zu TTS, während sie ankommen, ist das, was „erstes Audio" in weniger als 1 Sekunde auf Flaggschiff-Telefonen ankommen lässt — die Alternative (auf vollständige LLM-Antwort warten, dann sprechen) verdoppelt die wahrgenommene Latenz.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Ihr Stack träge wirkt, profilieren Sie jeden Schritt: Protokollieren Sie die Dauer von (Mikrofon → STT fertig), (STT fertig → LLM erstes Token), (LLM erstes Token → TTS erstes Audio). Ein Schritt dominiert normalerweise. Auf Flaggschiff-Telefonen 2026 ist es fast immer die LLM-Zeit-zum-ersten-Token (~400–800 ms). Wechseln Sie zu einem kleineren LLM für schnellere wahrgenommene Latenz.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'iPhone-Setup: WhisperKit + LLM Farm (5 Min.)',
        content:
          '**Der einfachste vollständig offline iPhone-Sprachassistent 2026: WhisperKit (oder Whisper Transcription) für STT, LLM Farm für das LLM und iOS System-TTS für die Stimme.** Gesamteinrichtungszeit beträgt 5–10 Minuten plus Modell-Download-Zeit.',
        numberedItems: [
          'Installieren Sie WhisperKit-basierte App aus dem App Store (z. B. „Whisper Transcription" von Aiko-Entwickler, kostenlos) — bietet Transkription auf dem Gerät unter Verwendung der Apple Neural Engine. Alternatively, bauen Sie die WhisperKit-Referenz-App von GitHub (Argmax / WhisperKit).',
          'In WhisperKit / Whisper Transcription: laden Sie das „Small" Modell herunter (~466 MB). Tiny ist schneller, aber ungenau; Medium ist genauer, aber langsamer.',
          'Installieren Sie LLM Farm aus dem App Store (kostenlos). In LLM Farm: tippen Sie Models → „Add Model from URL" → fügen Sie eine Hugging Face URL für Phi-4 Mini Q4_K_M ein (oder verwenden Sie die In-App-Bibliothek, falls verfügbar). Modell ist ~2,7 GB.',
          'Verdrahten Sie sie über iOS Shortcuts: erstellen Sie eine Shortcut mit diesen Aktionen — (1) Audio aufnehmen (oder akzeptieren Sie Audioeingabe von Share Sheet), (2) mit Whisper Transcription transkribieren, (3) Text mit LLM Farm generieren (falls offengelegt) oder Private LLM (~£10, hat eine Shortcuts-Aktion), (4) Text mit iOS-Systemstimme sprechen.',
          'Weisen Sie die Shortcut einem Lock Screen Widget, Action Button (iPhone 15 Pro und neuer) oder „Hey Siri, run [Shortcut-Name]" zu. Der Action Button bietet den niedrigsten Latenzdruck für Freisprechbetrieb.',
          'Testen: Action Button halten → sprechen → loslassen. STT läuft (~200 ms) → LLM generiert (~600 ms erstes Token, streamt zu TTS) → erstes Audio spielt bei ~0,9–1,4 Sekunden Gesamtzeit ab. Optimieren Sie die VAD-Stille-Schwelle in der Shortcut, falls sie Sie abschneidet.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm stellt derzeit keine Shortcuts-Aktion bereit (Stand Mai 2026). Um die iOS Shortcuts-Pipeline zu verwenden, benötigen Sie Private LLM (~£10 einmalig), die eine „Generate Text"-Aktion offenlegen. Der Shortcuts-Ansatz ist, was den iPhone-Weg „5 Minuten" macht — ohne Shortcuts müssen Sie die Apps manuell verbinden.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Android-Setup: Layla oder Termux-Stack (5–15 Min.)',
        content:
          '**Zwei Android-Wege: Layla (5-Minuten-Gebündel-Stack-Ansatz) oder Termux + whisper.cpp + Ollama + Piper (15-Minuten-Manueller-Ansatz mit mehr Kontrolle).** Beide laufen nach Konfiguration vollständig offline.',
        items: [
          '**Weg A — Layla (5 Min.):** Installieren Sie Layla vom Play Store, laden Sie ein Modell herunter (Phi-4 Mini oder Gemma 3 4B), aktivieren Sie Sprachmodus in Einstellungen. Layla bundles whisper.cpp für STT, das lokale LLM für die Antwort und verwendet das Android System-TTS. Der einfachste Weg; Kompromiss ist weniger Konfigurierbarkeit.',
          '**Weg B — Termux-Stack (15 Min.):**',
          'Installieren Sie Termux von F-Droid (nicht Play Store; Play Store-Version ist veraltet).',
          'In Termux: `pkg update && pkg install git cmake clang ffmpeg`.',
          'Bauen Sie whisper.cpp: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` und laden Sie das Small Modell herunter: `bash ./models/download-ggml-model.sh small`.',
          'Installieren Sie Ollama (Termux ARM Build): `curl -fsSL https://ollama.com/install.sh | sh`. Ziehen Sie ein Modell: `ollama pull phi4-mini`. Starten Sie den Server: `ollama serve`.',
          'Installieren Sie Piper: `pip install piper-tts` (in einer Termux Python venv) und laden Sie eine Stimme herunter (`piper-tts --download-voice en_US-amy-low` zum Beispiel).',
          'Verbinden Sie die Pipeline mit einem kleinen Python-Skript, das von `arecord` liest, whisper.cpp auf das Audio ausführt, die Abschrift an Ollama unter localhost:11434 sendet und die Antwort zu Piper sendet. Oder verwenden Sie Tasker, um Shell-Befehle zu verketten, die durch einen Button oder eine Schnellkachel ausgelöst werden.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verwenden Sie für Weg B Termux:Widget, um eine Home-Bildschirm-Verknüpfung zu erstellen, die das Voice-Assistant-Skript ausführt. Eine Antippen des Widgets löst die vollständige Pipeline aus. Koppeln Sie mit einem Bluetooth-Button oder einer Tasker-Schnellkachel für Freisprechbetrieb. Die Pixel 9 Pro und Galaxy S25 Ultra Action / Seitentasten können auch Tasker-Aktionen auslösen.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'Hybrid-Setup: Telefon-STT + Remote Ollama',
        content:
          '**Der Hybrid-Stack verschiebt nur den LLM-Anruf auf einen Home-Computer, hält STT und TTS auf dem Gerät.** Dies gibt Zugriff auf 70B-Klassenmodelle (Llama 3.3 70B, Qwen3-Coder 32B), während der Datenschutz für das Audio erhalten bleibt (das nie das Telefon verlässt — nur die Textabschrift wird über Ihr Home-Wi-Fi gesendet).',
        numberedItems: [
          'Auf dem Home-Computer (Mac, PC oder NAS): Installieren Sie Ollama. Ziehen Sie ein 70B Modell: `ollama pull llama3.3:70b` (erfordert ~40 GB freier Speicher + ~48 GB RAM oder 24 GB GPU VRAM).',
          'Binden Sie Ollama an Ihr lokales Netzwerk: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. Notieren Sie sich die lokale IP des Home-Computers (z. B. 192.168.1.20).',
          'Auf dem Telefon konfigurieren Sie Ihre Voice-Assistant-Pipeline (iOS Shortcut oder Android Tasker), um die Whisper-Abschrift per HTTP POST an `http://192.168.1.20:11434/api/generate` zu senden, anstatt den lokalen LLM-Aufruf zu machen.',
          'TTS läuft immer noch auf dem Telefon (Piper oder Systemstimme) unter Verwendung des Antworttextes vom Home-Computer.',
          'Ergebnis: Whisper STT läuft auf dem Telefon (Audio verlässt niemals das Gerät), Home Ollama generiert eine 70B-Qualität-Antwort in ~600–1200 ms, TTS spricht auf dem Telefon. Gesamtlatenz ~1,5–2,5 Sekunden — etwas höher als vollständig auf dem Gerät, aber mit viel besserer LLM-Qualität.',
        ],
        promptExamples: [
          {
            label: 'iOS Shortcut: Hybrid Voice Assistant (Action Button Trigger)',
            text: '1. Audio aufnehmen → in Temp-Datei speichern.\n2. Mit Whisper Transcription transkribieren → Ausgabe: Transkript-Text.\n3. Inhalte der URL abrufen → URL: http://192.168.1.20:11434/api/generate, Methode: POST, JSON Body: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → Ausgabe: Antwort-Text.\n4. Text sprechen → Eingabe: Antwort-Text, Stimme: iOS-Systemstimme.\nZuweisen zu Action Button. Halten zum Aufnehmen; loslassen zum Senden. Erstes Audio spielt in ~1,5–2,5 Sekunden ab.',
          },
          {
            label: 'Tasker: Android Hybrid Voice Assistant',
            text: '1. Variable: %TRANSCRIPT = (Ausgabe von Whisper-CLI auf aufgenommener Audiodatei).\n2. HTTP Request: URL http://192.168.1.20:11434/api/generate, Methode POST, Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. Variable: %REPLY = (geparster „response" Feld aus JSON).\n4. Sagen: %REPLY (Android System-TTS oder Piper, falls installiert).\nAuslösen über Schnellkachel, Bluetooth-Button oder Side-Key Langdruck auf Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für niedrigste-Latenz Hybrid, setzen Sie Ollama in den Streaming-Modus (`"stream":true`) und streamen Sie Token zu TTS, während sie ankommen, anstatt auf die vollständige Antwort zu warten. iOS Shortcuts können nicht nativ streamen, aber ein kleines Tasker-Plugin oder eine benutzerdefinierte iOS-App kann. Mit Streaming, wird die wahrgenommene „erste Audio"-Latenz um 200–400 ms gesenkt, obwohl die Gesamtantwortzeit gleich ist.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'Latenz-Budget: Wohin gehen die Sekunden',
        content:
          '**Auf Flaggschiff-Telefonen 2026 dominiert die LLM Zeit-zum-ersten-Token die Gesamtlatenz — typischerweise 50–60% der Sprache-zu-erstem-Audio-Zeit.** Die Optimierung des LLM-Schritts hat mehr Auswirkungen als die Optimierung von Whisper oder TTS.',
        columns: ['Schritt', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)', 'Notizen'],
        rows: [
          { 'Schritt': 'VAD Äußerungsende-Erkennung', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)': '~200–500 ms', 'Notizen': 'Optimierbar; 300 ms Standard. Zählt zur wahrgenommenen Latenz.' },
          { 'Schritt': 'Whisper Small STT (5-Sekunden-Äußerung)', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)': '~150–300 ms', 'Notizen': 'WhisperKit ~30–40% schneller über Apple Neural Engine.' },
          { 'Schritt': 'LLM Zeit-zum-ersten-Token (Phi-4 Mini)', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)': '~400–800 ms', 'Notizen': 'Größter Beitrag. Kleineres Modell = schneller.' },
          { 'Schritt': 'TTS erstes Audio (Piper oder System)', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)': '~100–200 ms', 'Notizen': 'System-TTS etwas schneller als Piper.' },
          { 'Schritt': 'Gesamt Sprache-zu-erstem-Audio', 'Typische Zeit (iPhone 16 Pro, auf dem Gerät)': '~0,9–1,4 Sekunden', 'Notizen': 'Unter 2 Sekunden = „nutzbar anfühlend"; unter 1 Sekunde = „wirkt nativ".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Um unter 1 Sekunde zu kommen: verwenden Sie Whisper Tiny (75 MB, ~80 ms STT) + Qwen3 1,7B (~250 ms TTFT) + System-TTS (~80 ms erstes Audio). Gesamtzeit ~600–800 ms auf iPhone 16 Pro. Der Kompromiss sind kürzere, weniger kohärente LLM-Antworten und niedrigere STT-Genauigkeit in lauten Umgebungen. Es lohnt sich, wenn Reaktionsfähigkeit Ihre Top-Priorität ist.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'Genauigkeit und Akkulaufzeit über 1 Stunde',
        content:
          '**Whisper Small erreicht ~88% Genauigkeit bei normaler Sprache in moderatem Hintergrundgeräusch; Whisper Medium erreicht ~91%, verdoppelt aber die Latenz.** Akkulaufzeit über 1 Stunde aktiven Gesprächs beträgt ~25–35% auf iPhone 16 Pro und ~25–40% auf Flaggschiff-Android.',
        items: [
          '**Whisper-Genauigkeit nach Modellgröße (LibriSpeech-clean WER, je niedriger, desto besser):** Tiny ~7,5%, Small ~3%, Medium ~2,4%, Large v3 ~1,8%. In realen, lauten Bedingungen: Tiny verschlechtert sich auf ~15–20% WER, Small auf ~10–14%, Medium auf ~7–10%, Large v3 auf ~5–7%.',
          '**Cloud Whisper vs. lokales Whisper:** OpenAIs Cloud Whisper API verwendet standardmäßig Large v3 (~2% WER auf sauberer Sprache). Lokales Whisper Small auf einem Telefon ist ~3% WER auf dem gleichen Audio — nah genug, dass für die tägliche Assistenten-Nutzung der Unterschied kaum wahrnehmbar ist.',
          '**Akkulaufzeit (1 Stunde aktives Gespräch, Bildschirm an):** iPhone 16 Pro ~25–35%; iPhone 17 Pro ~22–30%; Pixel 9 Pro ~30–40%; Galaxy S25 Ultra ~28–38%. Hybrid-Modus senkt die Telefon-Entladung auf ~10–15% pro Stunde, da nur STT lokal läuft.',
          '**Wärmeverlust:** Anhaltender On-Device-LLM-Inferenzbetrieb löst thermische Drosselung nach ~10–15 Min. auf dem iPhone aus (Chip-Oberflächentemperatur ~38°C); ~15–20 Min. auf Flaggschiff-Android (bessere thermische Masse auf Tablets und großen Telefonen). Drosselung senkt Token/s um 30–50%, was LLM-Latenz vom ersten Token von ~600 ms auf ~900 ms ausdehnt.',
          '**Minderung für lange Sitzungen:** an ein Ladegerät anschließen, Telefon mit Vorderseite auf einer harten Oberfläche ablegen (nicht in der Hand), oder zum Hybrid-Modus wechseln. Telefon-als-Mikrofon verwendet einen Bruchteil der Energie von Telefon-als-alles.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Eine 1-Stunden-All-Local-Voice-Session kann Ihre Telefon-Akkulaufzeit um 30–40% reduzieren. Für Ganztagsnutzung oder Nutzung im Auto, planen Sie zum Aufladen ein. Der Hybrid-Weg (nur STT auf dem Gerät) ist die realistische Option für Ambient-, Always-On-Sprachassistenten — der Home-Computer macht die schwere Arbeit.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'Freisprecheinrichtung: Shortcuts, Tasker, CarPlay, Android Auto',
        content:
          '**Freisprechauslösung hängt vom Auslösemechanismus ab, nicht vom Voice-Stack.** iOS verwendet Shortcuts mit dem Action Button oder „Hey Siri, run [Shortcut]"; Android verwendet Tasker mit der Seitentaste, Schnellkachel oder Bluetooth-Buttons.',
        items: [
          '**iPhone Action Button (iPhone 15 Pro und neuer):** Weisen Sie eine Shortcut zu, die die Voice-Pipeline auslöst. Action Button halten zum Aufnehmen; loslassen zum Senden. Niedrigster-Latenzdruck für Freisprechbetrieb auf dem iPhone 2026.',
          '**iPhone „Hey Siri, run [Shortcut-Name]":** aktiviert Siri (~500 ms), führt dann die Shortcut aus. Addiert Latenz vs. Action Button, funktioniert aber Freisprechbetrieb jederzeit, wenn das Telefon entsperrt ist.',
          '**Android Seitentaste / Bixby-Taste (Galaxy):** Weisen Sie eine Tasker-Aktion über Einstellungen für Galaxy Modes & Routines oder Bixby-Taste Remap-Apps zu. Drücken zum Auslösen.',
          '**Android Tasker Schnellkachel:** Fügen Sie eine Schnellkachel zur Benachrichtigungsleiste hinzu, die das Voice-Skript ausführt. Zwei-Wischen Auslösen von dem Sperrbildschirm.',
          '**Bluetooth-Buttons (z. B. Flic, generische Media-Buttons):** Koppeln Sie mit iOS oder Android, konfigurieren Sie zum Auslösen der Voice Shortcut / Tasker Task. Echter Freisprechbetrieb (Button auf einem Schreibtisch, auf einem Lenkrad, in einer Tasche).',
          '**CarPlay / Android Auto:** Diese verwenden das System Siri / Google Assistant nach Design — weder exponiert dritte Partei Voice Assistant API 2026. Der Workaround für CarPlay ist, eine Shortcut an eine CarPlay-Aktionstaste zu binden (begrenzte Shortcut-Unterstützung); für Android Auto verwenden Sie Tasker zum Auslösen über Bluetooth-Media-Button. Keiner ist so poliert wie die System-Assistenten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Auto-Nutzung ohne CarPlay / Android Auto Integration: Koppeln Sie einen kleinen Bluetooth-Button (Flic, AirShou, generische Media-Fernbedienung) und befestigen Sie ihn am Lenkrad. Drücken zum Auslösen des Offline-Voice-Assistenten — er funktioniert ohne Internet, sendet niemals Audio an eine Cloud und antwortet in ~1,5 Sekunden. Der Kompromiss vs. CarPlay ist keine UI auf der Auto-Anzeige, nur Audio.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutzgarantien: Wirklich offline vs. Cloud-gestützt',
        content:
          '**Ein Sprachassistent ist „wirklich offline" nur, wenn Mikrofon-Audio, Abschriften und TTS-Audio alle auf dem Gerät bleiben und keine Netzwerkanrufe erfolgen.** Viele Apps, die als „privat" vermarktet werden, senden Abschriften oder Telemetrie noch immer an eine Cloud — überprüfen Sie mit dem Flugzeugmodus oder einer Netzwerk-Überwachung, bevor Sie vertrauen.',
        items: [
          '**So überprüfen Sie „wirklich offline":** Setzen Sie das Telefon in den Flugzeugmodus und verwenden Sie den Assistenten. Wenn es mit voller Qualität funktioniert, ist es wirklich offline. Wenn es sich verschlechtert oder fehlschlägt, ist ein Schritt von einem Cloud-Dienst abhängig.',
          '**Audio-Erfassung:** Mikrofon-Daten sollten lokal verarbeitet und niemals auf Festplatte geschrieben oder irgendwohin gesendet werden. Whisper, WhisperKit und Sherpa-ONNX alle führen STT im Speicher durch und verwerfen Audio nach der Transkription.',
          '**LLM-Inferenz:** Wenn die Antwort durch ein lokales Modell (Phi-4 Mini, Gemma 3, Llama 3.2) auf dem Telefon generiert wird, verlässt kein Prompt das Gerät. Wenn der Assistent einen „Cloud-gestützten" Modus verwendet (Apple Intelligence Private Cloud Compute, Googles On-Device-Erst dann Cloud-Fallback), Abschriften können unter bestimmten Bedingungen an einen Server gesendet werden — überprüfen Sie die Datenschutzerklärung der App.',
          '**TTS:** Piper und System-TTS sind vollständig auf dem Gerät. Einige „Premium" Cloud-Stimmen (ElevenLabs, OpenAI TTS) erfordern das Senden des Antworttexts an einen Server — vermeiden Sie diese für echte Offline.',
          '**Hybrid-Pfad-Datenschutzhaltung:** Im Hybrid-Modus bleibt Audio auf dem Telefon (Whisper lokal), aber die Textabschrift wird an Ihren Home Ollama-Server über Ihr Home-Wi-Fi gesendet. Dies ist lokales-Netzwerk-nur, nicht Cloud — die Daten bleiben in Ihrem Netzwerk. Akzeptabel für die meisten datenschutzbewussten Nutzer; nicht äquivalent zu vollständig auf dem Gerät für die strengsten Bedrohungsmodelle.',
          '**App-spezifische Notizen (Mai 2026):** WhisperKit und whisper.cpp sind Open-Source und überprüfbar offline. Layla läuft standardmäßig lokal (überprüfen Sie im Flugzeugmodus). LLM Farm und PocketPal AI führen Inferenz vollständig auf dem Gerät durch. Apple Intelligence hat sowohl einen On-Device- als auch einen Private Cloud Compute-Modus — deaktivieren Sie PCC in Einstellungen für vollständig On-Device-Betrieb.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn vollständiger Offline-Betrieb kritisch ist (Journalist / Quellen-Vertraulichkeit, Gesundheitswesen, Rechtswesen): Bevorzugen Sie Open-Source-Apps (WhisperKit-Referenz-Build, whisper.cpp via Termux, Layla), wo Sie Netzwerkverhalten überprüfen können. Closed-Source-Apps (auch die als „privat" vermarktet) können Cloud-Funktionen in zukünftigen Updates ohne offensichtliche Benutzerbenachrichtigung hinzufügen.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Whisper Tiny für alles verwenden.** Tiny ist schnell (~80 ms STT), aber fehleranfällig in lauten Umgebungen (~15–20% WER vs. Small bei ~10–14%). Tiny ist akzeptabel für kurze Befehle in ruhigen Räumen; verwenden Sie Small für Allzweck-Sprachassistenten.',
          '**Warten auf vollständige LLM-Antwort, bevor TTS startet.** Dies verdoppelt die wahrgenommene Latenz. Streamen Sie LLM-Token zu TTS, während sie ankommen — Piper unterstützt Streaming-Eingabe, System-TTS unterstützt inkrementelle Rede. Erstes Audio sollte nach dem ersten LLM-Satz spielen, nicht nach der vollständigen Antwort.',
          '**On-Device-LLM in einer heißen Umgebung ausführen.** Thermische Drosselung setzt nach Minuten in direkter Sonne oder in einem heißen Auto ein, was Token/s um 30–50% senkt und die Latenz über 2 Sekunden drückt. Verwenden Sie den Hybrid-Weg oder halten Sie das Telefon kühl.',
          '**„Privat" ohne Überprüfung vertrauen.** „Privat" und „lokal" sind Marketing-Begriffe 2026 — einige Apps, die lokale Verarbeitung behaupten, telefonieren immer noch nach Hause für Analytik, Modell-Updates oder Cloud-Fallback-Transkription. Überprüfen Sie mit dem Flugzeugmodus, bevor Sie es für sensitive Nutzung verlassen.',
          '**Termux Android-Stack auf Low-RAM-Gerät bauen.** Termux + whisper.cpp + Ollama + Piper konsumiert ~4 GB System-RAM auf Peak. Geräte mit 6 GB oder weniger RAM werden OOM-Kill-Komponenten mitten im Gespräch. Verwenden Sie Layla auf Low-RAM-Android oder bleiben Sie beim iPhone-Weg.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) (plattformübergreifendes Whisper, einschließlich Android und iOS Builds).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) (Apple Neural Engine optimiertes Whisper für iOS / macOS).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) (Open-Source Neural TTS, Mobile-fähig, 30+ Sprachen).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (iOS App zum lokalen Ausführen von GGUF-Modellen).',
          'Layla (Android) — [Play Store Listing](https://play.google.com) und Entwickler-Dokumentation (gebündelter lokaler LLM-Stack mit Voice-Unterstützung).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Wie genau ist lokales Whisper vs. Cloud Whisper?',
            a: 'Whisper Small lokal auf einem Telefon laufend erreicht ~3% WER bei sauberer Sprache; OpenAIs Cloud Whisper (Large v3) erreicht ~2%. In lauten Umgebungen, fällt lokales Small auf ~10–14% WER, während Cloud Large v3 auf ~5–7% fällt. Für alltägliche Voice-Assistant-Nutzung ist die lokale Genauigkeit nah genug, um kaum wahrnehmbar zu sein. Für Diktate von langen Texten, wo jedes Wort zählt, ist Cloud oder lokales Medium / Large vorzuziehen.',
          },
          {
            q: 'Kann ein lokaler Sprachassistent Siri vollständig ersetzen?',
            a: 'Für private Q&A, Entwürfe und Zusammenfassungen: ja, mit vergleichbarer oder besserer Qualität als Siris On-Device-Funktionen. Für System-Aktionen (Apps öffnen, Timer stellen, HomeKit kontrollieren), Web-Suchen starten oder Live-Daten (Wetter, Sports-Scores): nein — Siris Integration mit iOS und Apple-Diensten ist nicht replizierbar durch einen Drittanbieter-Stack 2026. Viele Nutzer verwenden beide: Siri für System-Aktionen, lokaler Stack für private Q&A.',
          },
          {
            q: 'Funktioniert dies mit CarPlay oder Android Auto?',
            a: 'Begrenzt. CarPlay und Android Auto sind um System Siri / Google Assistant gestaltet; keiner exponiert eine Drittanbieter-Voice-Assistant-API. Workarounds: verwenden Sie eine an eine CarPlay-Action-Taste gebundene Shortcut (begrenzte Shortcut-Unterstützung) oder koppeln Sie einen Bluetooth-Button (Flic, generische Media-Fernbedienung) und lösen Sie Tasker / Shortcuts via diesen aus. Keiner entspricht der Verarbeitung der System-Assistenten für Auto-Nutzung.',
          },
          {
            q: 'Wie löse ich es Freisprechbetrieb aus?',
            a: 'iPhone: Halten Sie den Action Button (iPhone 15 Pro und neuer) zum Aufrufen der Shortcut oder sagen Sie „Hey Siri, run [Shortcut Name]". Android: Verwenden Sie die Seitentaste oder Bixby-Taste auf Galaxy-Telefonen, eine Tasker Schnellkachel oder einen gekoppelten Bluetooth-Button. Für echten Ambient-Freisprechbetrieb (Always-Listening Wake Word), den lokalen Stack passt nicht zu Siri / Google Assistant 2026 an — das Telefon System Wake-Word-Detektor ist nicht Drittanbieter-Apps exponiert.',
          },
          {
            q: 'Kann es mehrsprachige Gespräche handhaben?',
            a: 'Ja, aber mit Vorbehalten. Whisper erkennt die Eingabesprache automatisch und unterstützt 99 Sprachen. Lokale LLMs variieren: Phi-4 Mini verarbeitet Englisch gut und die großen europäischen Sprachen angemessen; Qwen3 hat starke mehrsprachige Unterstützung einschließlich Chinesisch; Gemma 3 unterstützt 100+ Sprachen. Für TTS, Piper hat Stimmen in 30+ Sprachen; System-TTS hängt von den OS-Sprachpaketen ab, die Sie installiert haben. Sprache-Wechsel in den Gesprächen funktioniert in Whisper, aber kann das LLM verwirren.',
          },
          {
            q: 'Bricht Hintergrundgeräusch lokales STT?',
            a: 'Whisper Tiny verschlechtert sich deutlich über moderates Geräusch (~15–20% WER); Small bewältigt Café-Pegel-Geräusch angemessen (~10–14% WER); Medium und Large bewältigen die meisten realen Umgebungen gut. Für laute Nutzung (Autos, Nahverkehr), verwenden Sie Whisper Medium, falls Ihr Telefon den RAM hat, oder wenden Sie VAD aggressiv an (nur transkribieren Sie, wenn Sprache erkannt wird, ignorieren Sie zwischen Äußerungen).',
          },
          {
            q: 'Wie integriere ich mit Smart-Home-Geräten lokal?',
            a: 'Leiten Sie die LLM-Antwort durch einen Parser, der Intents erkennt (z. B. „Küchenlicht ausschalten") und rufen Sie direkt die API Ihres lokalen Smart-Home-Hub auf — Home Assistant hat eine REST-API auf Ihrer lokalen IP, und Apple HomeKit-Integration funktioniert über Shortcuts „Control Home"-Aktionen. Vermeiden Sie Cloud Smart-Home-Integrationen (Alexa, Google Home), wenn Sie einen vollständig offline-Pipeline möchten.',
          },
          {
            q: 'Kann ich die Stimme (TTS) personalisieren?',
            a: 'Ja. Piper TTS hat 100+ Community-trainierte Stimmen in 30+ Sprachen, herunterladbar als ~50 MB Voice-Modelle. iOS Voice Shortcuts ermöglichen Sie aus System-Stimmen auszuwählen, einschließlich der höheren Qualität Premium-Stimmen (herunterladen in Einstellungen → Barrierefreiheit → Spoken Content → Voices). Android System-TTS unterstützt Voice-Packs von Google oder Drittanbietern. Benutzerdefiniertes Voice-Klonen (Ihre eigene Stimme oder eine bestimmte Persona) erfordert eine separate TTS-Toolchain (Coqui, Tortoise TTS) — noch nicht praktisch auf dem Gerät 2026.',
          },
          {
            q: 'Verschlechtert sich die Akkulaufzeit deutlich?',
            a: 'Ja — etwa 25–40% pro Stunde aktiven Gesprächs auf Flaggschiff-Telefonen. Für gelegentliche Voice-Anfragen ist die Auswirkung klein. Für Ganztagsnutzung oder Always-On-Nutzung, anschließen oder verwenden Sie den Hybrid-Weg (nur STT läuft auf dem Gerät, was den Abfluss auf ~10–15% pro Stunde senkt). Passive Hintergrund-Hören mit Wake-Word-Erkennung ist derzeit auf Drittanbieter-lokale Stacks mit akzeptablen Akku-Kosten nicht praktisch.',
          },
          {
            q: 'Wird iOS 19 oder Android 16 dieses Setup unterbrechen?',
            a: 'Unwahrscheinlich für den Kern-Stack (Whisper, lokales LLM, TTS) — diese sind Benutzerraum-Apps, die auf Standard-APIs (Mikrofon-Erfassung, TTS, Netzwerk) abhängen. Was kann unterbrechen: Shortcuts-Integrationen, wenn Apple die Shortcuts-API ändert; Termux auf Android, wenn Android 16 Hintergrund-Prozess-Beschränkungen weiter spannt (Android spannt diese jede Version an). Halten Sie Apps aktualisiert und überprüfen Sie nach jeder großen OS-Update.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Best Local LLM Apps für iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=de) — Basis-Layer-Apps (PocketPal AI, LLM Farm, Private LLM) für den iPhone-Weg.',
          '[Best Local LLM Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=de) — Basis-Layer-Apps (Layla, Maid, MLC Chat, Termux + Ollama) für den Android-Weg.',
          '[Best Mobile LLM Models 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=de) — Modell-Layer des Voice-Stacks; Benchmarks und Qualität vs. Latentz-Kompromisse.',
          '[So führen Sie KI auf einem Tablet aus: iPad und Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android?lang=de) — Tablet-Äquivalent für Nutzer, die einen großeren-Bildschirm Voice-Setup mögen.',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — breitere Modell-Autorität, die alle Hardware-Ebenen abdeckt, nützlich zum Auswählen des LLM im Hybrid-Setup.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — Verzeichniseinträge für Whisper.cpp, WhisperKit, Piper TTS und andere Voice-Stack-Komponenten.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Einen lokalen Sprachassistenten auf Ihrem Telefon erstellen: Whisper + lokales LLM (keine Cloud) — 2026',
      url: 'https://www.promptquorum.com/power-local-llm/voice-assistant-local-mobile-offline?lang=de',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/og-image.png',
        width: 1200,
        height: 630,
      },
      description: 'Vollständig offline funktionierender Sprachassistenten auf iPhone und Android in 2026. Whisper lokales STT + lokales LLM + Piper TTS. iPhone-, Android- und Hybrid-Setup; Latenz, Akku, Datenschutz.',
      inLanguage: 'de',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/logo.svg',
        },
      },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      about: [
        { '@type': 'Thing', name: 'Whisper STT' },
        { '@type': 'Thing', name: 'lokale LLMs' },
        { '@type': 'Thing', name: 'iPhone Offline' },
        { '@type': 'Thing', name: 'Android Offline' },
        { '@type': 'Thing', name: 'Sprachassistent' },
        { '@type': 'Thing', name: 'Mobile AI' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Construire un assistant vocal local sur votre téléphone : Whisper + LLM local (sans cloud) — 2026',
    seoTitle: 'Assistant vocal local Whisper LLM téléphone 2026',
    intro:
      'Un assistant vocal entièrement hors ligne sur iPhone ou Android en 2026 repose sur trois composants : Whisper pour la conversion parole-texte, un LLM local sur l\'appareil pour la réponse, et Piper ou le TTS système pour la synthèse vocale. La latence réaliste du début de la parole au premier audio sur les téléphones phares actuels est de 0,8–1,5 secondes — sous le seuil de 2 secondes pour « se sentir utilisable ». Ce guide couvre le chemin iPhone (LLM Farm + WhisperKit), le chemin Android (Layla + Whisper.cpp) et le chemin hybride (STT téléphone + Ollama distant) avec des chiffres mesurés de latence, batterie et précision.',
    metaDescription:
      'Assistant vocal entièrement hors ligne sur iPhone et Android en 2026. Whisper STT local + LLM local + Piper TTS. Configuration iPhone, Android et hybride ; latence, batterie, confidentialité.',
    twitterDescription:
      'Construisez un remplacement Siri fonctionnant hors ligne : Whisper STT local + Phi-4 Mini + Piper TTS. Parole vers premier audio en moins de 1,5 seconde sur téléphones phares. Configuration iPhone + Android.',
    current_models_mentioned: [
      'Whisper Small',
      'Whisper Medium',
      'WhisperKit',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Piper TTS',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'Pixel 9 Pro (Tensor G4)',
      'Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Utilisateurs conscients de la vie privée qui souhaitent un remplaçant Siri / Google Assistant s\'exécutant entièrement sur l\'appareil, y compris les voyageurs, journalistes, professionnels de santé et développeurs créant des flux de travail vocaux hors ligne.',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'assistant vocal local téléphone',
      'Whisper hors ligne iPhone',
      'Whisper LLM local Android',
      'remplacement Siri hors ligne',
      'Piper TTS mobile',
      'WhisperKit iOS',
      'Layla Android vocal',
    ],
    leadAnswerBlock:
      '**Un assistant vocal entièrement hors ligne en 2026 nécessite trois composants : Whisper Small ou Medium pour la conversion parole-texte, un LLM local 3B–4B (Phi-4 Mini ou Gemma 3 4B) pour la réponse, et Piper TTS ou le TTS système pour la sortie audio.** Sur iPhone, la pile la plus simple est WhisperKit (ou l\'application Whisper Transcription) + LLM Farm + TTS système iOS — parole vers premier audio de ~0,9–1,4 secondes sur iPhone 16 Pro. Sur Android, Layla intègre une pile similaire nativement, ou vous l\'assemblez via Termux + whisper.cpp + Ollama + Piper. Pour une meilleure qualité LLM, utilisez le chemin hybride : le téléphone exécute Whisper localement pour le STT critique pour la confidentialité, puis envoie la transcription à un Mac ou PC à la maison exécutant Ollama avec un modèle 70B. Les trois configurations fonctionnent sans Internet une fois les modèles téléchargés.',
    quickAnswerTop: {
      fr: {
        question: 'Pouvez-vous construire un assistant vocal entièrement hors ligne sur un téléphone en 2026 ?',
        answer:
          'Oui. La pile standard est Whisper pour la conversion parole-texte, un LLM local 3B–4B (Phi-4 Mini ou Gemma 3 4B) pour la réponse, et Piper TTS ou le TTS système iOS / Android pour la sortie audio. Sur iPhone 16 Pro, la latence parole vers premier audio est de ~0,9–1,4 secondes — sous le seuil de 2 secondes pour « se sentir utilisable ». Sur les téléphones phares Android (Pixel 9 Pro, Galaxy S25 Ultra), la latence est de ~1,0–1,6 secondes. Le chemin iPhone utilise WhisperKit + LLM Farm ; le chemin Android utilise Layla (pile intégrée) ou Termux + whisper.cpp + Ollama ; le chemin hybride maintient le STT sur l\'appareil et envoie la transcription à un Mac ou PC à la maison exécutant un modèle 70B.',
        bullets: [
          'Pile : Whisper (STT) + LLM local 3B–4B + Piper ou TTS système — tout sur l\'appareil.',
          'iPhone : WhisperKit / Whisper Transcription + LLM Farm + voix système iOS. Latence ~0,9–1,4 sec sur 16 Pro.',
          'Android : Layla (pile groupée) ou Termux + whisper.cpp + Ollama + Piper. Latence ~1,0–1,6 sec sur Pixel 9 Pro.',
          'Hybride : le téléphone exécute STT localement, envoie la transcription à Ollama à la maison exécutant Llama 3.3 70B. Meilleure qualité.',
          'Batterie (1 heure de conversation active) : ~25–35% sur iPhone 16 Pro ; ~25–40% sur Android phare.',
          'Whisper Small (~466 MB) est le standard mobile — ~12% WER, ~150–300 ms latence STT.',
          'Parole vers premier audio en moins de 2 secondes est le seuil « se sentir utilisable » ; moins de 1 seconde se sent natif.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Principaux enseignements', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Quelle pile d\'assistant vocal construire ?', anchor: '#which-stack' },
      { label: 'Comparaison de la pile d\'assistant vocal', anchor: '#stack-comparison' },
      { label: 'La pile à trois composants : STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'Configuration iPhone : WhisperKit + LLM Farm (5 min)', anchor: '#iphone-setup' },
      { label: 'Configuration Android : Layla ou pile Termux (5–15 min)', anchor: '#android-setup' },
      { label: 'Configuration hybride : STT téléphone + Ollama distant', anchor: '#hybrid-setup' },
      { label: 'Budget de latence : où vont les secondes', anchor: '#latency-budget' },
      { label: 'Précision et autonomie batterie sur 1 heure', anchor: '#accuracy-battery' },
      { label: 'Mains libres : Raccourcis, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: 'Garanties de confidentialité : vraiment hors ligne vs cloud-assisté', anchor: '#privacy' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La pile entièrement hors ligne est Whisper (STT) + LLM local 3B–4B + Piper ou TTS système.** Les trois composants s\'exécutent localement sur l\'appareil une fois installés ; aucun appel cloud pendant le fonctionnement.',
          '**iPhone : WhisperKit + LLM Farm + voix système iOS est le chemin le plus simple.** WhisperKit utilise le Neural Engine Apple pour le STT ; LLM Farm exécute Phi-4 Mini pour la réponse ; le TTS système iOS gère l\'audio. Parole vers premier audio : ~0,9–1,4 secondes sur iPhone 16 Pro.',
          '**Android : Layla intègre la pile complète nativement, ou construisez-la manuellement avec Termux + whisper.cpp + Ollama + Piper.** Layla est le chemin plus simple ; la construction Termux est plus flexible. Parole vers premier audio : ~1,0–1,6 secondes sur Pixel 9 Pro et Galaxy S25 Ultra.',
          '**Hybride (STT téléphone + Ollama distant) offre la meilleure qualité LLM.** Le téléphone exécute Whisper localement (critique pour la confidentialité de l\'audio), puis envoie la transcription à un Mac ou PC à la maison exécutant Llama 3.3 70B. Qualité de réponse meilleure, nécessite le Wi-Fi à la maison.',
          '**Whisper Small (~466 MB) est le point idéal mobile.** ~12% WER en parole normale, ~150–300 ms latence STT. Whisper Medium (~1,5 GB) est plus précis (~9% WER) mais plus lent ; Whisper Tiny (~75 MB) est plus rapide mais sujet aux erreurs au-dessus du bruit de fond.',
          '**La consommation batterie est importante — environ 25–35% par heure de conversation active sur les téléphones phares.** Pour une utilisation toute la journée, branchez-vous ou utilisez le chemin hybride (seul STT s\'exécute sur le téléphone, réduisant la consommation à ~10–15% par heure).',
          '**Ceci est un vrai remplacement Siri pour les utilisateurs qui préfèrent la confidentialité à la largeur des fonctionnalités.** Ce que vous sacrifiez : recherche web, intégration domotique avec des clouds propriétaires, couverture des actions système. Ce que vous gagnez : fonctionne hors ligne, pas de télémétrie, pas de compte.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Moteur STT :** Whisper.cpp (multiplateforme), WhisperKit (iOS, Neural Engine Apple optimisé), Sherpa-ONNX (Android, runtime ONNX).',
          '**LLM :** Phi-4 Mini (3.8B) sur téléphones phares ; Qwen3 1.7B ou SmolLM 2 1.7B sur appareils plus anciens.',
          '**TTS :** Piper TTS (open-source, ~50 MB par voix), TTS système iOS (AVSpeechSynthesizer), TTS système Android.',
          '**Applications iPhone :** WhisperKit, Whisper Transcription (développeur Aiko), LLM Farm, PocketPal AI.',
          '**Applications Android :** Layla (pile groupée), Termux + whisper.cpp + Ollama, applications de démonstration Sherpa-ONNX.',
          '**Cible parole vers premier audio :** moins de 2 secondes = « se sentir utilisable » ; moins de 1 seconde = « se sentir natif ».',
          '**Batterie (1 heure actif) :** iPhone 16 Pro ~25–35% ; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'Quelle pile d\'assistant vocal construire ?',
        content:
          '**Pour la plupart des utilisateurs sur téléphones phares : le chemin sur l\'appareil est le bon choix.** Il est entièrement privé, fonctionne hors ligne et produit des résultats utilisables en moins de 1,5 secondes. Utilisez le chemin hybride uniquement si vous avez spécifiquement besoin de qualité classe 70B et acceptez la dépendance Wi-Fi à la maison.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Construisez un assistant vocal entièrement hors ligne en empilant Whisper (STT), un LLM local 3B–4B (Phi-4 Mini ou Gemma 3 4B) et Piper ou TTS système — parole vers premier audio de 0,9–1,6 secondes sur téléphones phares en 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Un assistant vocal a trois tâches : convertir votre parole en texte, générer une réponse et parler la réponse. Avec Whisper pour la première étape, un petit LLM local pour la deuxième et Piper ou la voix intégrée du téléphone pour la troisième, vous pouvez faire les trois sur le téléphone sans Internet. La boucle entière prend environ 1 seconde sur un iPhone ou un téléphone phare Android récent — assez rapide pour ressembler à une conversation avec Siri, mais tout reste sur l\'appareil.',
          },
        ],
        decisionBlock: {
          title: 'Décision : Quelle pile d\'assistant vocal ?',
          localIf: [
            'Vous voulez une confidentialité totale et un fonctionnement hors ligne → entièrement sur l\'appareil (chemin iPhone ou Android)',
            'Vous voyagez souvent et voulez la voix sur les avions / zones sans signal → entièrement sur l\'appareil',
            'Vous êtes journaliste, professionnel de santé ou avocat → entièrement sur l\'appareil pour la confidentialité source / patient / client',
            'Vous êtes développeur prototypant un flux de travail vocal hors ligne → entièrement sur l\'appareil',
          ],
          cloudIf: [
            'Vous avez besoin de qualité modèle 70B+ (raisonnement complexe) → chemin hybride (STT téléphone + Ollama distant à la maison)',
            'Vous avez besoin d\'une recherche web en temps réel ou de données en direct → assistant cloud (pas d\'équivalent local en 2026)',
            'Vous avez besoin d\'une intégration profonde avec des clouds propriétaires (Google Calendar, iCloud, etc.) → continuez à utiliser Siri / Google Assistant pour ces tâches',
          ],
          quick: [
            'Chemin iPhone le plus simple : WhisperKit + LLM Farm + voix iOS',
            'Chemin Android le plus simple : Layla (pile groupée)',
            'Meilleure qualité : hybride (STT téléphone + Ollama maison 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Commencez par le chemin entièrement sur l\'appareil même si vous voulez éventuellement un approche hybride. La configuration sur l\'appareil vous enseigne les pièces mobiles (STT, LLM, TTS) et fonctionne sans dépendance de serveur maison. Une fois qu\'elle fonctionne, l\'échange de l\'appel LLM de local à une URL Ollama distant est un changement d\'une ligne.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Comparaison de la pile d\'assistant vocal',
        content:
          '**Trois piles viables en 2026, chacune accordée à une priorité différente : simplicité (Layla), finition native Apple (WhisperKit + LLM Farm) ou qualité LLM (hybride).** Les trois exécutent STT et TTS sur l\'appareil ; l\'hybride ne déplace que l\'étape LLM vers un ordinateur à la maison.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez iPhone (WhisperKit + LLM Farm + voix iOS) pour la simplicité sous iOS, Android (Layla) pour la simplicité sous Android, ou hybride (STT téléphone + Ollama maison) pour la meilleure qualité LLM.',
          },
          {
            type: 'plain-terms',
            text: 'Les nombres de latence ci-dessous sont parole vers premier audio — le temps entre le moment où vous arrêtez de parler et le moment où l\'assistant commence à répondre. Moins de 2 secondes se sentir utilisable ; moins de 1 seconde se sentir natif. La batterie est le pourcentage épuisé sur 1 heure de conversation bidirectionnelle active.',
          },
        ],
        columns: ['Pile', 'Latence (parole → premier audio)', 'Batterie (1 heure actif)', 'Meilleur pour'],
        rows: [
          { 'Pile': 'iPhone (WhisperKit + LLM Farm)', 'Latence (parole → premier audio)': '~0,9–1,4 sec (16 Pro / 17 Pro)', 'Batterie (1 heure actif)': '~25–35%', 'Meilleur pour': 'Utilisateurs iOS voulant la finition native Apple' },
          { 'Pile': 'Android (Layla, groupé)', 'Latence (parole → premier audio)': '~1,0–1,6 sec (Pixel 9 Pro, Galaxy S25 Ultra)', 'Batterie (1 heure actif)': '~25–40%', 'Meilleur pour': 'Utilisateurs Android voulant la simplicité d\'une seule application' },
          { 'Pile': 'Android (Termux + whisper.cpp + Ollama + Piper)', 'Latence (parole → premier audio)': '~1,2–2,0 sec', 'Batterie (1 heure actif)': '~30–40%', 'Meilleur pour': 'Utilisateurs avancés voulant un contrôle total' },
          { 'Pile': 'Hybride (STT téléphone + Ollama maison 70B)', 'Latence (parole → premier audio)': '~1,5–2,5 sec (dépendant du Wi-Fi)', 'Batterie (1 heure actif)': '~10–15%', 'Meilleur pour': 'Qualité classe 70B, utilisation réseau maison' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La latence est dominée par l\'étape LLM « premier token », pas par Whisper ou TTS. Pour réduire la latence, utilisez un LLM plus petit (Qwen3 1.7B à la place de Phi-4 Mini réduit l\'étape LLM de ~600 ms à ~250 ms). Le compromis est des réponses plus courtes et moins détaillées.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'La pile à trois composants : STT + LLM + TTS',
        content:
          '**Conversion parole-texte, le LLM et conversion texte-parole sont trois composants indépendants que vous pouvez échanger individuellement.** L\'optimisation de l\'un d\'eux (Whisper plus petit, LLM plus rapide, TTS latence inférieure) réduit la latence totale.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small (~466 MB) est le choix standard mobile — ~12% taux d\'erreur mots (WER) en parole normale, ~150–300 ms latence STT pour une énonciation de 5 secondes. Whisper Medium (~1,5 GB) réduit le WER à ~9% mais double la latence. Whisper Tiny (~75 MB) est rapide mais sujet aux erreurs au-dessus du bruit de fond modéré. WhisperKit (iOS) utilise le Neural Engine Apple pour une latence STT ~30–40% inférieure au Whisper.cpp vanille.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** Phi-4 Mini (3.8B Q4_K_M, ~2,7 GB) est le défaut recommandé sur téléphones phares. Le temps jusqu\'au premier token est ~400–800 ms sur iPhone 16 Pro pour un court prompt — le plus grand contributeur unique à la latence globale. Pour les appareils plus anciens ou limités en RAM, Qwen3 1.7B (~1,1 GB) est plus rapide (~200–400 ms TTFT) au prix de réponses plus courtes et plus simples.',
          '**TTS — Piper TTS ou TTS système.** Piper (projet Rhasspy, open-source) supporte 30+ langues, ~50 MB par voix, ~100–200 ms latence premier audio, et s\'exécute sur iOS, Android, Linux, macOS, Windows. Le TTS système (AVSpeechSynthesizer sur iOS, TextToSpeech sur Android) a une latence inférieure (~50–100 ms) mais une voix plus robotique sur les anciennes versions du système. Les voix système iOS 18+ et Android 14+ sont notablement meilleures que les versions du système antérieures.',
          '**Détection d\'activité vocale (VAD).** La plupart des applications utilisent Silero VAD ou webrtcvad pour détecter quand vous arrêtez de parler. Une fenêtre de silence de 200–500 ms est le seuil typique de fin d\'énonciation. Trop court → vous coupe à mi-phrase ; trop long → ajoute de la latence. 300 ms est un défaut raisonnable.',
          '**Le pipeline complet :** capture microphone → VAD détecte fin de parole → Whisper transcrit → LLM génère réponse → TTS parle. La diffusion en continu des tokens LLM vers TTS à mesure qu\'ils arrivent est ce qui rend le « premier audio » en moins de 1 seconde sur téléphones phares — l\'alternative (attendre la réponse LLM complète, puis parler) double la latence perçue.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si votre pile semble lente, profilez chaque étape : enregistrez la durée de (microphone → STT terminé), (STT terminé → LLM premier token), (LLM premier token → TTS premier audio). Une étape domine généralement. Sur téléphones phares en 2026, c\'est presque toujours le temps LLM jusqu\'au premier token (~400–800 ms). Passez à un LLM plus petit pour une latence perçue plus rapide.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'Configuration iPhone : WhisperKit + LLM Farm (5 min)',
        content:
          '**L\'assistant vocal entièrement hors ligne iPhone le plus simple en 2026 : WhisperKit (ou Whisper Transcription) pour STT, LLM Farm pour le LLM, et TTS système iOS pour la voix.** Le temps de configuration total est de 5–10 minutes plus le temps de téléchargement du modèle.',
        numberedItems: [
          'Installez une application basée sur WhisperKit depuis l\'App Store (par exemple, « Whisper Transcription » du développeur Aiko, gratuit) — fournit la transcription sur l\'appareil utilisant le Neural Engine Apple. Vous pouvez également construire l\'application de référence WhisperKit à partir de GitHub (Argmax / WhisperKit).',
          'Dans WhisperKit / Whisper Transcription : téléchargez le modèle « Small » (~466 MB). Tiny est plus rapide mais imprécis ; Medium est plus précis mais plus lent.',
          'Installez LLM Farm depuis l\'App Store (gratuit). Dans LLM Farm : appuyez sur Modèles → « Ajouter un modèle depuis l\'URL » → collez une URL Hugging Face pour Phi-4 Mini Q4_K_M (ou utilisez la bibliothèque intégrée si disponible). Le modèle fait ~2,7 GB.',
          'Connectez-les via Raccourcis iOS : créez un Raccourci avec ces actions — (1) Enregistrer l\'audio (ou acceptez l\'entrée audio à partir de Partager), (2) Transcrire avec Whisper Transcription, (3) Générer du texte avec LLM Farm (si exposé) ou Private LLM (~£10, a une action Raccourcis), (4) Parler le texte en utilisant la voix système iOS.',
          'Attribuez le Raccourci à un widget Écran de verrouillage, Bouton d\'action (iPhone 15 Pro et plus récent) ou « Hey Siri, run [nom du raccourci] ». Le Bouton d\'action donne le déclenchement mains libres latence la plus basse.',
          'Testez : maintenez le Bouton d\'action → parlez → relâchez. STT s\'exécute (~200 ms) → LLM génère (~600 ms premier token, diffuse vers TTS) → premier audio se joue à ~0,9–1,4 secondes totales. Ajustez le seuil de silence VAD dans le Raccourci s\'il vous coupe.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm n\'expose pas actuellement une action Raccourcis (au 13 mai 2026). Pour utiliser le pipeline Raccourcis iOS, vous aurez besoin de Private LLM (~£10 unique) qui expose une action « Générer du texte ». L\'approche Raccourcis est ce qui rend le chemin iPhone « 5 minutes » — sans Raccourcis, vous devez connecter les applications manuellement.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Configuration Android : Layla ou pile Termux (5–15 min)',
        content:
          '**Deux chemins Android : Layla (approche de pile groupée 5 minutes) ou Termux + whisper.cpp + Ollama + Piper (approche manuelle 15 minutes avec plus de contrôle).** Les deux s\'exécutent entièrement hors ligne une fois configurés.',
        items: [
          '**Chemin A — Layla (5 min) :** installez Layla depuis le Play Store, téléchargez un modèle (Phi-4 Mini ou Gemma 3 4B), activez le mode vocal dans les paramètres. Layla intègre whisper.cpp pour STT, le LLM local pour la réponse, et utilise le TTS système Android. Le chemin le plus simple ; le compromis est moins de configurabilité.',
          '**Chemin B — Pile Termux (15 min) :**',
          'Installez Termux depuis F-Droid (pas Play Store ; la version Play Store est obsolète).',
          'Dans Termux : `pkg update && pkg install git cmake clang ffmpeg`.',
          'Construisez whisper.cpp : `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` et téléchargez le modèle Small : `bash ./models/download-ggml-model.sh small`.',
          'Installez Ollama (construction Termux ARM) : `curl -fsSL https://ollama.com/install.sh | sh`. Tirez un modèle : `ollama pull phi4-mini`. Démarrez le serveur : `ollama serve`.',
          'Installez Piper : `pip install piper-tts` (dans un venv Python Termux) et téléchargez une voix (`piper-tts --download-voice en_US-amy-low` par exemple).',
          'Connectez le pipeline avec un petit script Python qui lit depuis `arecord`, exécute whisper.cpp sur l\'audio, envoie la transcription à Ollama à localhost:11434, et pipe la réponse vers Piper. Ou utilisez Tasker pour enchaîner des commandes shell déclenchées par un bouton ou une tuile rapide.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour le chemin B, utilisez Termux:Widget pour créer un raccourci d\'écran d\'accueil qui exécute le script d\'assistant vocal. Une seule appui du widget déclenche le pipeline complet. Associez à un bouton Bluetooth ou une tuile rapide Tasker pour un fonctionnement mains libres. Les clés Pixel 9 Pro et Galaxy S25 Ultra Action / Côté peuvent également déclencher des actions Tasker.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'Configuration hybride : STT téléphone + Ollama distant',
        content:
          '**La pile hybride ne déplace que l\'appel LLM vers un ordinateur maison, maintenant STT et TTS sur l\'appareil.** Cela donne accès aux modèles classe 70B (Llama 3.3 70B, Qwen3-Coder 32B) tout en préservant la confidentialité pour l\'audio (qui ne quitte jamais le téléphone — seule la transcription textuelle est envoyée sur votre Wi-Fi maison).',
        numberedItems: [
          'Sur l\'ordinateur maison (Mac, PC ou NAS) : installez Ollama. Tirez un modèle 70B : `ollama pull llama3.3:70b` (nécessite ~40 GB d\'espace disque libre + ~48 GB de RAM ou 24 GB de VRAM GPU).',
          'Liez Ollama à votre réseau local : `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. Notez l\'adresse IP locale de l\'ordinateur maison (par exemple, 192.168.1.20).',
          'Sur le téléphone, configurez votre pipeline d\'assistant vocal (Raccourci iOS ou Tasker Android) pour envoyer la transcription Whisper via HTTP POST à `http://192.168.1.20:11434/api/generate` au lieu de l\'appel LLM local.',
          'Le TTS s\'exécute toujours sur le téléphone (Piper ou voix système) en utilisant le texte de réponse de l\'ordinateur maison.',
          'Résultat : Whisper STT s\'exécute sur téléphone (l\'audio ne quitte jamais l\'appareil), Ollama maison génère une réponse de qualité 70B en ~600–1200 ms, TTS parle sur téléphone. Latence totale ~1,5–2,5 secondes — un peu plus que entièrement sur l\'appareil mais avec bien meilleure qualité LLM.',
        ],
        promptExamples: [
          {
            label: 'Raccourci iOS : assistant vocal hybride (déclenchement Bouton d\'action)',
            text: '1. Enregistrer l\'audio → enregistrer dans le fichier temp.\n2. Transcrire avec Whisper Transcription → résultat : texte de transcription.\n3. Obtenir les contenus de l\'URL → URL : http://192.168.1.20:11434/api/generate, Méthode : POST, JSON body : {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → résultat : texte de réponse.\n4. Parler le texte → entrée : texte de réponse, voix : voix système iOS.\nAttribuer au Bouton d\'action. Maintenez pour enregistrer ; relâchez pour envoyer. Premier audio se joue en ~1,5–2,5 secondes.',
          },
            label: 'Tasker : assistant vocal hybride Android',
            text: '1. Variable : %TRANSCRIPT = (résultat de whisper-cli sur le fichier audio enregistré).\n2. Requête HTTP : URL http://192.168.1.20:11434/api/generate, Méthode POST, Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. Variable : %REPLY = (champ « response » analysé à partir de JSON).\n4. Dire : %REPLY (TTS système Android ou Piper s\'il est installé).\nDéclencher via tuile rapide, bouton Bluetooth ou appui long sur la clé d\'action sur Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour la latence hybride la plus basse, définissez Ollama en mode streaming (`"stream":true`) et diffusez les tokens vers TTS à mesure qu\'ils arrivent au lieu d\'attendre la réponse complète. Les Raccourcis iOS ne peuvent pas diffuser nativement, mais un petit plugin Tasker ou une application iOS personnalisée peut. Avec la diffusion en continu, la latence « premier audio » perçue diminue de 200–400 ms même si le temps de réponse total est le même.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'Budget de latence : où vont les secondes',
        content:
          '**Sur les téléphones phares en 2026, le temps LLM jusqu\'au premier token domine la latence totale — typiquement 50–60% du temps parole vers premier audio.** L\'optimisation de l\'étape LLM a plus d\'impact que l\'accord de Whisper ou TTS.',
        columns: ['Étape', 'Temps typique (iPhone 16 Pro, sur l\'appareil)', 'Remarques'],
        rows: [
          { 'Étape': 'Détection fin d\'énonciation VAD', 'Temps typique (iPhone 16 Pro, sur l\'appareil)': '~200–500 ms', 'Remarques': 'Accordable ; défaut 300 ms. Compte dans la latence perçue.' },
          { 'Étape': 'Whisper Small STT (énonciation 5 sec)', 'Temps typique (iPhone 16 Pro, sur l\'appareil)': '~150–300 ms', 'Remarques': 'WhisperKit ~30–40% plus rapide via Neural Engine Apple.' },
          { 'Étape': 'LLM temps jusqu\'au premier token (Phi-4 Mini)', 'Temps typique (iPhone 16 Pro, sur l\'appareil)': '~400–800 ms', 'Remarques': 'Plus grand contributeur. LLM plus petit = plus rapide.' },
          { 'Étape': 'TTS premier audio (Piper ou système)', 'Temps typique (iPhone 16 Pro, sur l\'appareil)': '~100–200 ms', 'Remarques': 'TTS système un peu plus rapide que Piper.' },
          { 'Étape': 'Parole totale vers premier audio', 'Temps typique (iPhone 16 Pro, sur l\'appareil)': '~0,9–1,4 sec', 'Remarques': 'Moins de 2 sec = « se sentir utilisable » ; moins de 1 sec = « se sentir natif ».' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour passer sous 1 seconde : utilisez Whisper Tiny (75 MB, ~80 ms STT) + Qwen3 1.7B (~250 ms TTFT) + TTS système (~80 ms premier audio). Total ~600–800 ms sur iPhone 16 Pro. Le compromis est des réponses plus courtes et moins cohérentes et une précision STT inférieure dans les environnements bruyants. Cela en vaut la peine si la réactivité est votre priorité absolue.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'Précision et autonomie batterie sur 1 heure',
        content:
          '**Whisper Small atteint ~88% de précision en parole normale dans le bruit de fond modéré ; Whisper Medium atteint ~91% mais double la latence.** L\'autonomie batterie sur 1 heure de conversation active est ~25–35% sur iPhone 16 Pro et ~25–40% sur Android phare.',
        items: [
          '**Précision Whisper par taille de modèle (LibriSpeech-clean WER, plus bas est mieux) :** Tiny ~7.5%, Small ~3%, Medium ~2.4%, Large v3 ~1.8%. Dans les conditions réelles bruyantes : Tiny se dégrade à ~15–20% WER, Small à ~10–14%, Medium à ~7–10%, Large v3 à ~5–7%.',
          '**Cloud Whisper vs Whisper local :** L\'API Cloud Whisper d\'OpenAI utilise Large v3 par défaut (~2% WER en parole propre). Whisper Small local sur un téléphone est ~3% WER sur le même audio — assez proche pour que la différence soit imperceptible pour l\'utilisation quotidienne d\'assistant.',
          '**Consommation batterie (1 heure de conversation active, écran allumé) :** iPhone 16 Pro ~25–35% ; iPhone 17 Pro ~22–30% ; Pixel 9 Pro ~30–40% ; Galaxy S25 Ultra ~28–38%. Le mode hybride réduit la consommation téléphone à ~10–15% par heure car seul STT s\'exécute localement.',
          '**Limitation thermique :** l\'inférence LLM sur appareil soutenue déclenche une limitation thermique après ~10–15 min sur iPhone (surface du chip ~38°C) ; ~15–20 min sur Android phare (meilleure masse thermique sur tablettes et téléphones grands). La limitation réduit les tokens/sec de 30–50%, ce qui étend la latence LLM premier token de ~600 ms à ~900 ms.',
          '**Atténuation pour les longues sessions :** branchez-vous à un chargeur, posez le téléphone face vers le haut sur une surface dure (pas dans votre main), ou passez au mode hybride. Un téléphone comme microphone utilise une fraction de l\'énergie de téléphone-comme-tout.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Une session vocale all-local d\'1 heure peut drainer l\'autonomie batterie de votre téléphone de 30–40%. Pour une utilisation toute la journée ou en voiture, planifiez le chargement. Le chemin hybride (seul STT sur l\'appareil) est l\'option réaliste pour les assistants vocaux ambiants, toujours actifs — l\'ordinateur maison fait le gros du travail.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'Mains libres : Raccourcis, Tasker, CarPlay, Android Auto',
        content:
          '**Le déclenchement mains libres dépend du mécanisme de déclenchement, pas de la pile vocale.** iOS utilise Raccourcis avec le Bouton d\'action ou « Hey Siri, run [Raccourci] » ; Android utilise Tasker avec la Clé d\'action, une tuile rapide ou des boutons Bluetooth.',
        items: [
          '**Bouton d\'action iPhone (iPhone 15 Pro et plus récent) :** attribuez un Raccourci qui déclenche le pipeline vocal. Maintenez le Bouton d\'action pour commencer l\'enregistrement ; relâchez pour envoyer. Déclenchement mains libres latence la plus basse sur iPhone en 2026.',
          '**iPhone « Hey Siri, run [nom du raccourci] » :** réveille Siri (~500 ms), puis exécute le Raccourci. Ajoute de la latence vs le Bouton d\'action mais fonctionne mains libres n\'importe quand le téléphone est déverrouillé.',
          '**Clé d\'action Android / Clé Bixby (Galaxy) :** attribuez une action Tasker via les paramètres Galaxy Modes & Routines ou les applications de remappage Clé Bixby. Appuyez pour déclencher.',
          '**Tuile rapide Tasker Android :** ajoutez une tuile rapide au volet de notification qui exécute le script vocal. Déclenchement balayage-deux depuis l\'écran de verrouillage.',
          '**Boutons Bluetooth (par exemple, Flic, boutons média génériques) :** associez à iOS ou Android, configurez pour déclencher le Raccourci vocal / Tâche Tasker. Vrai mains libres (bouton sur un bureau, sur un volant, dans une poche).',
          '**CarPlay / Android Auto :** ceux-ci utilisent le système Siri / Google Assistant par conception — ni l\'un ni l\'autre n\'expose une API d\'assistant vocal tiers en 2026. La solution de contournement pour CarPlay est de lier un Raccourci à un bouton d\'action CarPlay (support Raccourci limité) ; pour Android Auto, utilisez Tasker pour déclencher via un bouton média Bluetooth. Aucun n\'est aussi poli que les assistants système.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour l\'utilisation en voiture sans intégration CarPlay / Android Auto : associez un petit bouton Bluetooth (Flic, AirShou, télécommande média générique) et attachez-le au volant. Appuyez pour déclencher l\'assistant vocal hors ligne — il fonctionne sans Internet, n\'envoie jamais d\'audio à un cloud et répond en ~1,5 secondes. Le compromis vs CarPlay est pas d\'UI sur l\'affichage voiture, audio uniquement.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Garanties de confidentialité : vraiment hors ligne vs cloud-assisté',
        content:
          '**Un assistant vocal est « vraiment hors ligne » uniquement si l\'audio microphone, les transcriptions et l\'audio TTS restent tous sur l\'appareil sans aucun appel réseau.** De nombreuses applications commercialisées comme « privées » envoient toujours des transcriptions ou de la télémétrie à un cloud — vérifiez avec le mode avion ou un moniteur réseau avant de faire confiance.',
        items: [
          '**Comment vérifier « vraiment hors ligne » :** mettez le téléphone en mode avion et utilisez l\'assistant. S\'il fonctionne à qualité complète, c\'est vraiment hors ligne. S\'il se dégrade ou échoue, une étape dépend d\'un service cloud.',
          '**Capture d\'audio :** les données microphone doivent être traitées localement et jamais écrites sur disque ou envoyées n\'importe où. Whisper, WhisperKit et Sherpa-ONNX exécutent tous STT en mémoire et rejettent l\'audio après transcription.',
          '**Inférence LLM :** si la réponse est générée par un modèle local (Phi-4 Mini, Gemma 3, Llama 3.2) sur le téléphone, aucun prompt ne quitte l\'appareil. Si l\'assistant utilise un mode « cloud-assisté » (Apple Intelligence Private Cloud Compute, Premier le Cloud Compute du cloud-fallback de Google), les transcriptions peuvent être envoyées à un serveur sous certaines conditions — vérifiez la politique de confidentialité de l\'application.',
          '**TTS :** Piper et TTS système sont entièrement sur l\'appareil. Certaines voix cloud « premium » (ElevenLabs, OpenAI TTS) nécessitent l\'envoi du texte de réponse à un serveur — évitez ceux-ci pour un vrai hors ligne.',
          '**Posture de confidentialité chemin hybride :** en mode hybride, l\'audio reste sur le téléphone (Whisper local), mais la transcription textuelle est envoyée à votre serveur Ollama maison sur votre Wi-Fi maison. Ceci est local-réseau-uniquement, pas cloud — les données restent à l\'intérieur de votre réseau. Acceptable pour la plupart des utilisateurs conscients de la confidentialité ; pas équivalent à entièrement sur l\'appareil pour les modèles de menace les plus stricts.',
          '**Remarques spécifiques à l\'application (mai 2026) :** WhisperKit et whisper.cpp sont open-source et vérifiablement hors ligne. Layla s\'exécute localement par défaut (vérifiez en mode avion). LLM Farm et PocketPal AI exécutent l\'inférence entièrement sur l\'appareil. Apple Intelligence a à la fois un mode On-Device et Private Cloud Compute — désactivez PCC dans Paramètres pour une opération entièrement On-Device.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si un fonctionnement totalement hors ligne est critique (journaliste / confidentialité source, santé, droit) : préférez les applications open-source (construction de référence WhisperKit, whisper.cpp via Termux, Layla) où vous pouvez auditer le comportement réseau. Les applications closed-source (même celles commercialisées comme « privées ») peuvent ajouter des fonctionnalités cloud dans les futures mises à jour sans notification utilisateur évidente.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Utiliser Whisper Tiny pour tout.** Tiny est rapide (~80 ms STT) mais sujet aux erreurs dans les environnements bruyants (~15–20% WER vs Small à ~10–14%). Tiny est acceptable pour de courtes commandes dans des pièces tranquilles ; utilisez Small pour les assistants vocaux polyvalents.',
          '**Attendre une réponse LLM complète avant que TTS ne commence.** Ceci double la latence perçue. Diffusez les tokens LLM vers TTS à mesure qu\'ils arrivent — Piper supporte l\'entrée de diffusion, TTS système supporte la parole incrémentielle. Le premier audio devrait jouer après la première phrase du LLM, pas après la réponse complète.',
          '**Exécution du LLM sur appareil dans un environnement chaud.** La limitation thermique démarre après quelques minutes en plein soleil ou dans une voiture chaude, réduisant les tokens/sec de 30–50% et poussant la latence au-delà de 2 secondes. Utilisez le chemin hybride ou gardez le téléphone au frais.',
          '**Faire confiance à « privé » sans vérification.** « Privé » et « local » sont des termes marketing en 2026 — certaines applications qui prétendent au traitement local font encore des appels à domicile pour l\'analytique, les mises à jour de modèle ou la transcription cloud-fallback. Vérifiez avec le mode avion avant de compter sur cela pour une utilisation sensible.',
          '**Construire la pile Android Termux sur un appareil bas RAM.** Termux + whisper.cpp + Ollama + Piper consomme ~4 GB de RAM système au pic. Les appareils avec 6 GB ou moins de RAM tueront les composants OOM en milieu de conversation. Utilisez Layla sur Android bas-RAM ou restez au chemin iPhone.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) (Whisper multiplateforme, y compris les builds Android et iOS).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) (Whisper optimisé Neural Engine Apple pour iOS / macOS).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) (TTS neural open-source, capable mobile, 30+ langues).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (application iOS pour exécuter des modèles GGUF localement).',
          'Layla (Android) — [Listing Play Store](https://play.google.com) et documentation développeur (pile LLM locale groupée avec support vocal).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quelle est la précision de Whisper local vs Cloud Whisper ?',
            a: 'Whisper Small exécuté localement sur un téléphone atteint ~3% WER en parole propre ; Whisper Cloud d\'OpenAI (Large v3) atteint ~2%. Dans les environnements bruyants, Small local chute à ~10–14% WER tandis que Cloud Large v3 chute à ~5–7%. Pour l\'utilisation quotidienne d\'assistant vocal, la précision locale est suffisamment proche pour être imperceptible. Pour la dictation de texte long où chaque mot compte, le cloud ou le Medium / Large local est préférable.',
          },
          {
            q: 'Un assistant vocal local peut-il remplacer complètement Siri ?',
            a: 'Pour Q&A privé, les brouillons et les résumés : oui, avec une qualité comparable ou meilleure que les fonctionnalités Siri sur l\'appareil. Pour les actions système (ouverture d\'applications, définir des minuteurs, contrôler HomeKit), lancer des recherches web ou des données en direct (météo, scores sportifs) : non — l\'intégration Siri avec iOS et les services Apple n\'est pas réplicable par une pile tiers locale en 2026. De nombreux utilisateurs conservent les deux : Siri pour les actions système, la pile locale pour Q&A privé.',
          },
          {
            q: 'Cela fonctionne-t-il avec CarPlay ou Android Auto ?',
            a: 'Limité. CarPlay et Android Auto sont conçus autour du système Siri / Google Assistant ; ni l\'un ni l\'autre n\'expose une API d\'assistant vocal tiers. Solutions de contournement : utilisez un Raccourci lié à un bouton d\'action CarPlay (support Raccourci limité), ou associez un bouton Bluetooth (Flic, télécommande média générique) et déclenchez Tasker / Raccourcis via celui-ci. Aucun ne correspond au polissage des assistants système pour l\'utilisation automobile.',
          },
          {
            q: 'Comment le déclencher mains libres ?',
            a: 'iPhone : maintenez le Bouton d\'action (iPhone 15 Pro et plus récent) pour appeler le Raccourci, ou dites « Hey Siri, run [nom du raccourci] ». Android : utilisez la Clé d\'action ou Clé Bixby sur les téléphones Galaxy, une tuile rapide Tasker ou un bouton Bluetooth associé. Pour un vrai mains libres ambient (wake word toujours à l\'écoute), la pile locale ne correspond pas à Siri / Google Assistant en 2026 — le détecteur wake-word système du téléphone n\'est pas exposé aux applications tierces.',
          },
          {
            q: 'Peut-il gérer les conversations multilingues ?',
            a: 'Oui, mais avec des mises en garde. Whisper détecte automatiquement la langue d\'entrée et supporte 99 langues. Les LLMs locaux varient : Phi-4 Mini gère bien l\'anglais et les grandes langues européennes raisonnablement ; Qwen3 a un support multilingue fort y compris le chinois ; Gemma 3 supporte 100+ langues. Pour TTS, Piper a des voix en 30+ langues ; TTS système dépend des packs de langue du système d\'exploitation que vous avez installés. Le changement de langue en milieu de conversation fonctionne dans Whisper mais peut confondre le LLM.',
          },
          {
            q: 'Le bruit de fond casse-t-il le STT local ?',
            a: 'Whisper Tiny se dégrade significativement au-dessus d\'un bruit modéré (~15–20% WER) ; Small gère le bruit de café raisonnablement (~10–14% WER) ; Medium et Large gèrent bien la plupart des environnements réalistes. Pour une utilisation bruyante (voitures, transports en commun), utilisez Whisper Medium si votre téléphone a la RAM, ou appliquez VAD agressivement (ne transcrivez que lorsque la parole est détectée, ignorez entre les énoncés).',
          },
          {
            q: 'Comment intégrer avec les appareils domotiques localement ?',
            a: 'Canalisez la réponse du LLM via un analyseur qui détecte les intents (par exemple, « éteindre la lumière cuisine ») et appelez l\'API directement du hub domotique local — Home Assistant a une API REST à votre IP locale, et l\'intégration Apple HomeKit fonctionne via les actions Raccourcis « Control Home ». Évitez les intégrations domotique cloud (Alexa, Google Home) si vous voulez un pipeline entièrement hors ligne.',
          },
          {
            q: 'Puis-je personnaliser la voix (TTS) ?',
            a: 'Oui. Piper TTS a 100+ voix entraînées par la communauté en 30+ langues, téléchargeables sous forme de modèles de voix ~50 MB. Les Raccourcis vocaux iOS vous permettent de choisir parmi les voix système y compris les voix Premium de qualité supérieure (téléchargement dans Paramètres → Accessibilité → Contenu parlé → Voix). TTS système Android supporte les packs de voix de Google ou de tiers. Le clonage de voix personnalisé (votre propre voix ou une persona spécifique) nécessite une chaîne d\'outils TTS séparée (Coqui, Tortoise TTS) — pas encore pratique sur l\'appareil en 2026.',
          },
          {
            q: 'L\'autonomie batterie prend-elle un gros coup ?',
            a: 'Oui — environ 25–40% par heure de conversation active sur téléphones phares. Pour les requêtes vocales occasionnelles, l\'impact est petit. Pour l\'utilisation toute la journée ou Always-On, branchez-vous ou utilisez le chemin hybride (seul STT s\'exécute sur l\'appareil, réduisant la consommation à ~10–15% par heure). L\'écoute passive en arrière-plan avec détection wake-word n\'est actuellement pas réalisable sur les piles locales tierces à un coût batterie acceptable.',
          },
          {
            q: 'iOS 19 ou Android 16 cassera-t-il ce setup ?',
            a: 'Improbable pour la pile principale (Whisper, LLM local, TTS) — ce sont des applications en espace utilisateur qui dépendent d\'API standard (capture microphone, TTS, réseau). Ce qui peut casser : intégrations Raccourcis si Apple change l\'API Raccourcis ; Termux sur Android si Android 16 renforce davantage les restrictions de processus en arrière-plan (Android le fait à chaque version). Gardez les applications à jour et vérifiez après chaque grande mise à jour du système d\'exploitation.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Meilleures applications LLM locales pour iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=fr) — applications de couche de base (PocketPal AI, LLM Farm, Private LLM) pour le chemin iPhone.',
          '[Meilleures applications LLM locales pour Android 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=fr) — applications de couche de base (Layla, Maid, MLC Chat, Termux + Ollama) pour le chemin Android.',
          '[Meilleurs modèles LLM mobiles 2026 : Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=fr) — couche de modèle de la pile vocale ; benchmarks et compromis qualité vs latence.',
          '[Comment exécuter l\'IA sur une tablette : iPad et Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android?lang=fr) — équivalent tablette pour les utilisateurs voulant une configuration vocale à écran plus grand.',
          '[Meilleurs LLMs locaux 2026](/local-llms/best-local-llms-2026?lang=fr) — autorité modèle plus large couvrant tous les niveaux matériels, utile pour choisir le LLM dans la configuration hybride.',
          '[Répertoire logiciel LLM local 2026](/power-local-llm/local-llm-software-directory-2026?lang=fr) — entrées répertoire pour Whisper.cpp, WhisperKit, Piper TTS et autres composants de pile vocale.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construire un assistant vocal local sur votre téléphone : Whisper + LLM local (sans cloud) — 2026',
      url: 'https://www.promptquorum.com/power-local-llm/voice-assistant-local-mobile-offline?lang=fr',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.promptquorum.com/og-image.png',
        width: 1200,
        height: 630,
      },
      description: 'Assistant vocal entièrement hors ligne sur iPhone et Android en 2026. Whisper STT local + LLM local + Piper TTS. Configuration iPhone, Android et hybride ; latence, batterie, confidentialité.',
      inLanguage: 'fr',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.promptquorum.com/logo.svg',
        },
      },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      about: [
        { '@type': 'Thing', name: 'Whisper STT' },
        { '@type': 'Thing', name: 'LLMs locaux' },
        { '@type': 'Thing', name: 'iPhone hors ligne' },
        { '@type': 'Thing', name: 'Android hors ligne' },
        { '@type': 'Thing', name: 'Assistant vocal' },
        { '@type': 'Thing', name: 'IA mobile' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
}
