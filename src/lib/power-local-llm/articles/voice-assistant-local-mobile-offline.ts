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
}
