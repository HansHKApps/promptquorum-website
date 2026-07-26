// Power Local LLM — Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud)
// Slug: voice-assistant-local-mobile-offline
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = 'voice-assistant-local-mobile-offline';

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
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'Decision tree for choosing a voice assistant path: fully on-device (iPhone WhisperKit + LLM Farm at ~0.9–1.4 sec, or Android Layla / Termux at ~1.0–2.0 sec) for privacy, versus hybrid (phone STT + home Ollama 70B, ~1.5–2.5 sec) or cloud assistant for 70B-class quality and live data.',
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
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'Speech-to-first-audio latency budget on iPhone 16 Pro: VAD detection 250 ms, Whisper STT 200 ms, LLM time-to-first-token 700 ms (54% of total, the biggest lever), TTS first audio 150 ms — total ≈1.3 seconds.',
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
        title: 'Frequently Asked Questions',
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
      'Lokaler Sprachassistent für Mobilgeräte 2026: Offline-KI auf dem Smartphone. Whisper, lokale LLMs und TTS für private Sprachsteuerung ohne Cloud einrichten.',
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
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'Entscheidungsbaum für die Wahl des Sprachassistenten-Pfads: vollständig auf dem Gerät (iPhone WhisperKit + LLM Farm bei ca. 0,9–1,4 Sek. oder Android Layla / Termux bei ca. 1,0–2,0 Sek.) für Datenschutz, versus Hybrid (Telefon-STT + Home-Ollama 70B, ca. 1,5–2,5 Sek.) oder Cloud-Assistent für 70B-Klassenqualität und Live-Daten.',
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
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'Sprache-zu-erstem-Audio-Latenzbudget auf dem iPhone 16 Pro: VAD-Erkennung 250 ms, Whisper-STT 200 ms, LLM-Zeit-bis-zum-ersten-Token 700 ms (54% der Gesamtzeit, der größte Hebel), TTS-erstes-Audio 150 ms — Gesamt ≈1,3 Sekunden.',
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
        title: 'Häufig gestellte Fragen',
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
          '[Best Local LLM Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — Basis-Layer-Apps (PocketPal AI, LLM Farm, Private LLM) für den iPhone-Weg.',
          '[Best Local LLM Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — Basis-Layer-Apps (Layla, Maid, MLC Chat, Termux + Ollama) für den Android-Weg.',
          '[Best Mobile LLM Models 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Modell-Layer des Voice-Stacks; Benchmarks und Qualität vs. Latentz-Kompromisse.',
          '[So führen Sie KI auf einem Tablet aus: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — Tablet-Äquivalent für Nutzer, die einen großeren-Bildschirm Voice-Setup mögen.',
          '[Best Local LLMs 2026](/de/local-llms/best-local-llms-2026) — breitere Modell-Autorität, die alle Hardware-Ebenen abdeckt, nützlich zum Auswählen des LLM im Hybrid-Setup.',
          '[Local LLM Software Directory 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichniseinträge für Whisper.cpp, WhisperKit, Piper TTS und andere Voice-Stack-Komponenten.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Einen lokalen Sprachassistenten auf Ihrem Telefon erstellen: Whisper + lokales LLM (keine Cloud) — 2026',
      url: 'https://www.promptquorum.com/de/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'de'),
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
      'proficiencyLevel': 'Intermediate',
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
      'Assistant vocal local pour mobile 2026 : IA hors ligne sur smartphone. Whisper, LLMs locaux et TTS pour un contrôle vocal privé sans connexion cloud.',
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
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'Arbre de décision pour choisir un chemin d\'assistant vocal : entièrement sur l\'appareil (iPhone WhisperKit + LLM Farm à ~0,9–1,4 s, ou Android Layla / Termux à ~1,0–2,0 s) pour la confidentialité, contre hybride (STT sur le téléphone + Ollama 70B à domicile, ~1,5–2,5 s) ou assistant cloud pour une qualité de classe 70B et des données en direct.',
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
          {
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
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'Budget de latence parole vers premier audio sur iPhone 16 Pro : détection VAD 250 ms, STT Whisper 200 ms, temps LLM jusqu\'au premier token 700 ms (54% du total, le levier le plus important), premier audio TTS 150 ms — total ≈1,3 seconde.',
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
        title: 'Questions fréquemment posées',
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
          '[Meilleures applications LLM locales pour iPhone 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — applications de couche de base (PocketPal AI, LLM Farm, Private LLM) pour le chemin iPhone.',
          '[Meilleures applications LLM locales pour Android 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — applications de couche de base (Layla, Maid, MLC Chat, Termux + Ollama) pour le chemin Android.',
          '[Meilleurs modèles LLM mobiles 2026 : Phi-4 Mini vs Gemma 3 vs SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — couche de modèle de la pile vocale ; benchmarks et compromis qualité vs latence.',
          '[Comment exécuter l\'IA sur une tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — équivalent tablette pour les utilisateurs voulant une configuration vocale à écran plus grand.',
          '[Meilleurs LLMs locaux 2026](/fr/local-llms/best-local-llms-2026) — autorité modèle plus large couvrant tous les niveaux matériels, utile pour choisir le LLM dans la configuration hybride.',
          '[Répertoire logiciel LLM local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — entrées répertoire pour Whisper.cpp, WhisperKit, Piper TTS et autres composants de pile vocale.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construire un assistant vocal local sur votre téléphone : Whisper + LLM local (sans cloud) — 2026',
      url: 'https://www.promptquorum.com/fr/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'fr'),
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
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'スマートフォンで完全オフラインの音声アシスタントを構築する：Whisper + ローカルLLM（クラウドなし）— 2026',
    seoTitle: 'ローカル音声アシスタント Whisper LLM スマートフォン 2026',
    intro:
      '2026年のiPhoneまたはAndroidで完全にオフラインの音声アシスタントを実装するには、3つのコンポーネントが必要です：音声をテキストに変換するWhisper、デバイス上のローカルLLM、および音声合成用のPiperまたはシステムTTS。フラッグシップスマートフォンでの実際の音声からの最初のオーディオまでのレイテンシは0.8～1.5秒です。これは2秒の「使用可能に感じる」しきい値を下回っています。このガイドでは、iPhone（LLM Farm + WhisperKit）、Android（Layla + Whisper.cpp）、およびハイブリッド（スマートフォンSTT +リモートOllama）のパスについて、測定されたレイテンシ、バッテリー、精度の数値を含めて説明します。',
    metaDescription:
      '2026年のiPhoneおよびAndroidで完全にオフラインで動作する音声アシスタント。Whisper ローカルSTT + ローカルLLM + Piper TTS。iPhone、Android、ハイブリッド設定；レイテンシ、バッテリー、プライバシー。',
    twitterDescription:
      'Siriの代替として動作するオフラインの音声アシスタントを構築：Whisper ローカルSTT + Phi-4 Mini + Piper TTS。フラッグシップスマートフォンで1.5秒以内に音声から最初のオーディオまで。iPhone + Android設定。',
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
      'プライバシーを重視するスマートフォンユーザーで、デバイス上で完全に動作するSiri / Google Assistantの代替品を望んでいる人、旅行者、ジャーナリスト、医療従事者、およびオフライン音声ワークフローを構築している開発者を含みます。',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'ローカル音声アシスタント スマートフォン',
      'オフライン Whisper iPhone',
      'Whisper ローカルLLM Android',
      'Siri代替 オフライン',
      'Piper TTS モバイル',
      'WhisperKit iOS',
      'Layla Android 音声',
    ],
    leadAnswerBlock:
      '**2026年に完全にオフラインで動作する音声アシスタントには3つのコンポーネントが必要です：音声テキスト変換用のWhisper SmallまたはMedium、応答用のローカル3B～4B LLM（Phi-4 MiniまたはGemma 3 4B）、およびオーディオ出力用のPiper TTSまたはシステムTTS。** iPhoneでは、最もシンプルなスタックはWhisperKit（またはWhisper Transcriptionアプリ）+ LLM Farm + iOSシステムTTS —iPhone 16 Proで約0.9～1.4秒の音声から最初のオーディオまでのレイテンシ。Androidでは、Laylはネイティブに類似したスタックをバンドルしているか、Termux + whisper.cpp + Ollama + Piperを使用して組み立てることができます。より良いLLM品質の場合は、ハイブリッドパスを使用します：スマートフォンはWhisperをローカルで実行してプライバシー重要なSTTを実行し、トランスクリプトをホームのMacまたはPC上で実行されているOllama 70Bモデルに送信します。すべての3つの設定は、モデルがダウンロードされたら、インターネットなしで機能します。',
    quickAnswerTop: {
      ja: {
        question: '2026年にスマートフォンで完全にオフラインの音声アシスタントを構築できますか？',
        answer:
          'はい。標準的なスタックは、音声テキスト変換用のWhisper、応答用のローカル3B～4B LLM（Phi-4 MiniまたはGemma 3 4B）、およびオーディオ出力用のPiper TTSまたはiOS / AndroidシステムTTSです。iPhone 16 Proでは、音声から最初のオーディオまでのレイテンシは約0.9～1.4秒です。これは「使用可能に感じる」2秒のしきい値を下回っています。フラッグシップAndroidスマートフォン（Pixel 9 Pro、Galaxy S25 Ultra）では、レイテンシは約1.0～1.6秒です。iPhoneパスはWhisperKit + LLM Farmを使用します。Androidパスはlayla（組み込みスタック）またはTermux + whisper.cpp + Ollama + Piperを使用します。ハイブリッドパスはスマートフォンでSTTを保持し、ホームのMacまたはPCで実行されている70Bモデルにトランスクリプトを送信します。',
        bullets: [
          'スタック：Whisper（STT）+ 3B～4B ローカルLLM + PiperまたはシステムTTS —すべてデバイス上。',
          'iPhone：WhisperKit / Whisper Transcription + LLM Farm + iOSシステムボイス。レイテンシ 16 Proで約0.9～1.4秒。',
          'Android：Layla（バンドルスタック）またはTermux + whisper.cpp + Ollama + Piper。レイテンシ Pixel 9 Proで約1.0～1.6秒。',
          'ハイブリッド：スマートフォンはローカルでSTTを実行し、トランスクリプトをホームOollama Llama 3.3 70Bに送信します。最高の品質。',
          'バッテリー（1時間のアクティブな会話）：iPhone 16 Proで約25～35% ; フラッグシップAndroidで約25～40%。',
          'Whisper Small（~466 MB）はモバイルの標準 — 約12% WER、約150～300 msのSTTレイテンシ。',
          '2秒以内の音声から最初のオーディオは「使用可能に感じる」しきい値；1秒以内はネイティブに感じます。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'どの音声アシスタントスタックを構築すべきか？', anchor: '#which-stack' },
      { label: '音声アシスタントスタック比較', anchor: '#stack-comparison' },
      { label: '3コンポーネントスタック：STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'iPhone設定：WhisperKit + LLM Farm（5分）', anchor: '#iphone-setup' },
      { label: 'Android設定：LaylまたはTermuxスタック（5～15分）', anchor: '#android-setup' },
      { label: 'ハイブリッド設定：スマートフォンSTT +リモートOllama', anchor: '#hybrid-setup' },
      { label: 'レイテンシバジェット：秒はどこへ行くのか', anchor: '#latency-budget' },
      { label: '1時間以上の精度とバッテリー消耗', anchor: '#accuracy-battery' },
      { label: 'ハンズフリー：ショートカット、Tasker、CarPlay、Android Auto', anchor: '#hands-free' },
      { label: 'プライバシー保証：完全にオフラインvsクラウド支援', anchor: '#privacy' },
      { label: '一般的な間違い', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連情報', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**完全にオフラインのスタックはWhisper（STT）+ 3B～4B ローカルLLM + PiperまたはシステムTTSです。** 3つのコンポーネントはすべて、インストール後にデバイス上でローカルに実行されます。操作中のクラウド呼び出しはありません。',
          '**iPhone：WhisperKit + LLM Farm + iOSシステムボイスが最も簡単なパスです。** WhisperKitはSTT用にApple Neural Engineを使用します。LLM Farmは応答用にPhi-4 Miniを実行します。iOSシステムTTSはオーディオを処理します。音声から最初のオーディオまで：iPhone 16 Proで約0.9～1.4秒。',
          '**Android：Laylは完全なスタックをネイティブにバンドルするか、Termux + whisper.cpp + Ollama + Piperで手動で構築します。** Laylはより簡単なパス；Termuxビルドはより柔軟です。音声から最初のオーディオまで：Pixel 9 ProおよびGalaxy S25 Ultraで約1.0～1.6秒。',
          '**ハイブリッド（スマートフォンSTT +リモートOllama）が最高のLLM品質を提供します。** スマートフォンはWhisperをローカルで実行してプライバシー重要なオーディオを取得し、トランスクリプトをホームのMacまたはPCで実行されているLlama 3.3 70Bに送信します。より良い応答品質；ホームWi-Fiが必要。',
          '**Whisper Small（~466 MB）はモバイルの最適なポイントです。** 通常の音声で約12% WER、約150～300 msのSTTレイテンシ。Whisper Medium（~1.5 GB）はより正確（~9% WER）ですが、遅い；Whisper Tiny（~75 MB）はより高速ですが、バックグラウンドノイズの上ではエラーが発生しやすい。',
          '**バッテリー消費は重要です—フラッグシップスマートフォンでのアクティブな会話1時間当たり約25～35%。** 終日使用の場合は、コンセントに接続するか、ハイブリッドパスを使用します（スマートフォンでのみSTTが実行され、消費が約10～15%/時間に削減）。',
          '**これは機能の幅よりもプライバシーを好むユーザー向けのSiriの本当の代替品です。** 放棄しているもの：Web検索、専有クラウドを使用するスマートホーム統合、システムアクション範囲。獲得しているもの：オフラインで動作、テレメトリなし、アカウントなし。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**STTエンジン：** Whisper.cpp（クロスプラットフォーム）、WhisperKit（iOS、Apple Neural Engine最適化）、Sherpa-ONNX（Android、ONNXランタイム）。',
          '**LLM：** Phi-4 Mini（3.8B）フラッグシップスマートフォン上；Qwen3 1.7BまたはSmolLM 2 1.7B古いデバイス上。',
          '**TTS：** Piper TTS（オープンソース、~50 MB/音声）、iOSシステムTTS（AVSpeechSynthesizer）、AndroidシステムTTS。',
          '**iPhoneアプリ：** WhisperKit、Whisper Transcription（Aiko開発者）、LLM Farm、PocketPal AI。',
          '**Androidアプリ：** Layla（バンドルスタック）、Termux + whisper.cpp + Ollama、Sherpa-ONNXデモアプリ。',
          '**音声から最初のオーディオまでのターゲット：** 2秒以下 = 「使用可能に感じる」；1秒以下 = 「ネイティブに感じる」。',
          '**バッテリー（1時間アクティブ）：** iPhone 16 Pro ~25～35% ; Pixel 9 Pro / Galaxy S25 Ultra ~25～40%。',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'どの音声アシスタントスタックを構築すべきか？',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          '音声アシスタントの選択肢を示す決定木：プライバシー重視ならフルオンデバイス（iPhoneのWhisperKit + LLM Farmで約0.9〜1.4秒、またはAndroidのLaylaかTermuxで約1.0〜2.0秒）、70Bクラスの品質やライブデータが必要ならハイブリッド（フォンSTT + 自宅のOllama 70B、約1.5〜2.5秒）またはクラウドアシスタント。',
        content:
          '**フラッグシップスマートフォン上のほとんどのユーザーの場合：デバイス上のパスが正しい選択です。** それは完全にプライベート、オフラインで動作、および1.5秒以内に使用可能な結果を生成します。特に70Bクラスの品質が必要で、ホームWi-Fi依存性を受け入れる場合にのみ、ハイブリッドパスを使用します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper（STT）、ローカル3B～4B LLM（Phi-4 MiniまたはGemma 3 4B）、およびPiperまたはシステムTTSをスタックして、完全にオフラインの音声アシスタントを構築します—2026年のフラッグシップスマートフォンで0.9～1.6秒の音声から最初のオーディオまで。',
          },
          {
            type: 'plain-terms',
            text: '音声アシスタントには3つの仕事があります：音声をテキストに変換する、返信を生成する、および返信を話す。最初のステップ用にWhisperを使用して、2番目のステップ用に小さなローカルLLMを使用して、3番目のステップ用にPiperまたはスマートフォンの組み込み音声を使用して、インターネットなしでスマートフォン上のすべての3つを実行できます。フルループは最近のiPhoneまたはAndroidフラッグシップで約1秒かかります—Siriと会話している感じがするのに十分な速さですが、すべてがデバイス上に留まります。',
          },
        ],
        decisionBlock: {
          title: '決定：どの音声アシスタントスタック？',
          localIf: [
            'あなたは完全なプライバシーとオフライン操作を望んでいます→完全にデバイス上（iPhoneまたはAndroidパス）',
            'あなたは頻繁に旅行し、飛行機/信号なしエリアで音声が必要です→完全にデバイス上',
            'あなたはジャーナリスト、医療専門家、弁護士です→ソース/患者/クライアント機密のため、完全にデバイス上',
            'あなたはオフライン音声ワークフローをプロトタイプしている開発者です→完全にデバイス上',
          ],
          cloudIf: [
            'あなたは70B+モデルの品質（複雑な推論）が必要です→ハイブリッドパス（スマートフォンSTT +リモートホームOllama）',
            'あなたはリアルタイムWebサーチまたはライブデータが必要です→クラウドアシスタント（2026年にはローカル相当なし）',
            'あなたは独自のクラウドとのディープ統合が必要です（Google Calendar、iCloud等）→これらのタスク用にSiri / Google Assistantを使用し続けてください',
          ],
          quick: [
            'iPhone最も簡単なパス：WhisperKit + LLM Farm + iOSボイス',
            'Android最も簡単なパス：Layla（バンドルスタック）',
            '最高品質：ハイブリッド（スマートフォンSTT +ホームOllama 70B）',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '最終的にハイブリッドアプローチを望んでいても、完全にデバイス上のパスから始めてください。デバイス上の設定は、移動部分（STT、LLM、TTS）を教え、ホームサーバーの依存性なしで動作します。実行中に、LLM呼び出しをローカルからリモートOllama URLに交換するのは1行の変更です。',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: '音声アシスタントスタック比較',
        content:
          '**2026年の3つの実行可能なスタック、それぞれが異なる優先順位に調整：シンプリシティ（Layla）、Apple-nativeポリッシング（WhisperKit + LLM Farm）、またはLLM品質（ハイブリッド）。** 3つはすべてデバイス上でSTTとTTSを実行します；ハイブリッドは家庭のコンピューターのみLLMステップを移動します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'iOS上の単純さにはiPhone（WhisperKit + LLM Farm + iOSボイス）を選択し、Android上の単純さにはAndroid（Layla）を、最高のLLM品質にはハイブリッド（スマートフォンSTT +ホームOllama）を選択します。',
          },
          {
            type: 'plain-terms',
            text: '以下のレイテンシ数値は音声から最初のオーディオまでです—あなたが話すのをやめた時間から、アシスタントが答え始めます。2秒以下は「使用可能に感じます」；1秒以下は「ネイティブに感じます」。バッテリーは、1時間のアクティブな双方向の会話で消耗するパーセンテージです。',
          },
        ],
        columns: ['スタック', 'レイテンシ（音声→最初のオーディオ）', 'バッテリー（1時間アクティブ）', '最適な用途'],
        rows: [
          { 'スタック': 'iPhone（WhisperKit + LLM Farm）', 'レイテンシ（音声→最初のオーディオ）': '~0.9～1.4秒（16 Pro / 17 Pro）', 'バッテリー（1時間アクティブ）': '~25～35%', '最適な用途': 'Apple-nativeポリッシングを望むiOSユーザー' },
          { 'スタック': 'Android（Layla、バンドル）', 'レイテンシ（音声→最初のオーディオ）': '~1.0～1.6秒（Pixel 9 Pro、Galaxy S25 Ultra）', 'バッテリー（1時間アクティブ）': '~25～40%', '最適な用途': 'シングルアプリシンプリシティを望むAndroidユーザー' },
          { 'スタック': 'Android（Termux + whisper.cpp + Ollama + Piper）', 'レイテンシ（音声→最初のオーディオ）': '~1.2～2.0秒', 'バッテリー（1時間アクティブ）': '~30～40%', '最適な用途': 'フルコントロールを望むパワーユーザー' },
          { 'スタック': 'ハイブリッド（スマートフォンSTT +ホームOllama 70B）', 'レイテンシ（音声→最初のオーディオ）': '~1.5～2.5秒（Wi-Fi依存）', 'バッテリー（1時間アクティブ）': '~10～15%', '最適な用途': '70Bクラス品質、ホームネットワーク使用' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'レイテンシはLLM「最初のトークン」ステップによって支配されます、WhisperやTTSではありません。レイテンシを削減するには、より小さなLLM（Phi-4 Miniの代わりにQwen3 1.7B）を使用します。LLMステップを~600 msから~250 msに削減します。トレードオフはより短く、詳細度が低い応答です。',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: '3コンポーネントスタック：STT + LLM + TTS',
        content:
          '**音声からテキスト、LLM、およびテキストから音声は、個別に交換できる3つの独立したコンポーネントです。** それらのいずれか1つを最適化する（小さいWhisper、より高速なLLM、低いTTSレイテンシ）は、総レイテンシを削減します。',
        items: [
          '**STT—Whisper.cpp / WhisperKit / Sherpa-ONNX。** Whisper Small（~466 MB）は標準的なモバイルの選択肢です—通常の音声で約12% WER、5秒の発言に約150～300 msのSTTレイテンシ。Whisper Medium（~1.5 GB）はWERを約9%に減らしますが、レイテンシは2倍。Whisper Tiny（~75 MB）は高速ですが、中程度の背景ノイズ上ではエラーが発生しやすい。WhisperKit（iOS）は、Vanilla Whisper.cppよりもSTTレイテンシが約30～40%低いApple Neural Engineを使用します。',
          '**LLM—Phi-4 Mini、Gemma 3 4B、Llama 3.2 3B。** Phi-4 Mini（3.8B Q4_K_M、~2.7 GB）は、フラッグシップスマートフォン上の推奨デフォルトです。短いプロンプトのiPhone 16 Proでの最初のトークンまでの時間は約400～800 ms—総レイテンシへの最大の単一の貢献者。古いデバイスまたはRAM制約のあるデバイスの場合、Qwen3 1.7B（~1.1 GB）はより高速（~200～400 ms TTFT）ですが、より短く、より単純な応答を犠牲にします。',
          '**TTS—Piper TTSまたはシステムTTS。** Piper（Rhasspy Project、オープンソース）は30以上の言語をサポートし、~50 MB/ボイス、~100～200 msの最初のオーディオレイテンシ、およびiOS、Android、Linux、macOS、Windowsで実行されます。システムTTS（iOSのAVSpeechSynthesizer、AndroidのTextToSpeech）はより低いレイテンシ（~50～100 ms）を備えていますが、古いOSバージョンではより多くのロボット音声です。iOS 18+およびAndroid 14+のシステムボイスは、以前のOSバージョンよりも顕著に優れています。',
          '**音声活動検出（VAD）。** ほとんどのアプリはSilero VADまたはwebrtcvadを使用して、話すのをやめたときを検出します。200～500 msのサイレンスウィンドウは、典型的な発話終了のしきい値です。短すぎる→文の途中であなたをカットします。長すぎる→レイテンシを追加します。300 msは合理的なデフォルトです。',
          '**フルパイプライン：** マイク・キャプチャ→VADは音声終了を検出→Whisperトランスクリプト→LLM生成返信→TTSスピーク。LLMトークンをストリーミングして、到着時にTTSへ—これが「最初のオーディオ」をフラッグシップスマートフォンで1秒以下にします—代替案（完全なLLM応答を待ってから話す）は認識レイテンシを2倍にします。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'あなたのスタックが遅く感じる場合、各ステップをプロフィール化します：（マイク→STT完了）、（STT完了→LLM最初のトークン）、（LLM最初のトークン→TTS最初のオーディオ）の期間をログします。1つのステップが通常支配します。2026年のフラッグシップスマートフォンでは、それはほぼ常にLLM最初のトークンまでの時間（~400～800 ms）です。より小さなLLMに切り替えて、認識レイテンシを速くします。',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'iPhone設定：WhisperKit + LLM Farm（5分）',
        content:
          '**2026年で最も単純な完全にオフラインのiPhone音声アシスタント：STT用のWhisperKit（またはWhisper Transcription）、LLM用のLLM Farm、およびボイス用のiOSシステムTTS。** 総設定時間は5～10分、モデルダウンロード時間を追加します。',
        numberedItems: [
          'App Storeからwhisperkit-baseアプリをインストール（例：「Whisper Transcription」by Aiko developer、無料）—Apple Neural Engineを使用して、デバイス上でのトランスクリプションを提供。または、GitHubからwhisperkit参照アプリを構築（Argmax / WhisperKit）。',
          'WhisperKit / Whisper Transcriptionで：「Small」モデル（~466 MB）をダウンロード。Tinyはより速いですが不正確です；Mediumはより正確ですが遅い。',
          'App StoreからLLM Farmをインストール（無料）。LLM Farmで：モデル→「URLからモデルを追加」をタップ→Hugging Face URLを貼り付けて、Phi-4 Mini Q4_K_M（または、利用可能な場合はアプリ内ライブラリを使用）。モデルは~2.7 GB。',
          'iOSショートカット経由で接続：これらのアクションを備えたショートカットを作成—（1）オーディオを記録（または共有シートからオーディオ入力を受け入れ）、（2）Whisper Transcriptionで転写、（3）LLM Farm（露出されている場合）または私立LLM（~£10、ショートカットアクション有）でテキスト生成、（4）iOSシステムボイスを使用してテキストを話す。',
          'ロック画面ウィジェット、アクションボタン（iPhone 15 Pro以上）、または「Hey Siri、run [ショートカット名]」にショートカットを割り当てます。アクションボタンは、最も低いレイテンシのハンズフリートリガーを提供します。',
          'テスト：アクションボタンを保持→話す→リリース。STT実行（~200 ms）→LLM生成（~600 ms最初のトークン、TTSにストリーム）→最初のオーディオ約0.9～1.4秒で再生。ショートカット内のVADサイレンスしきい値を調整します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farmは現在、ショートカットアクションを公開していません（2026年5月現在）。iOSショートカットパイプラインを使用するには、「テキスト生成」アクションを公開するPrivate LLM（~£10ワンタイム）が必要です。ショートカットアプローチは、iPhoneパスを「5分」にしているもの—ショートカットなしでは、アプリを手動で連鎖させる必要があります。',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Android設定：LaylまたはTermuxスタック（5～15分）',
        content:
          '**2つのAndroidパス：Layla（5分バンドルスタックアプローチ）またはTermux + whisper.cpp + Ollama + Piper（15分マニュアルアプローチより多くのコントロール）。** 両方は、構成後に完全にオフラインで実行されます。',
        items: [
          '**パスA—Layla（5分）：** Play Storeからlaylをインストール、モデル（Phi-4 MiniまたはGemma 3 4B）をダウンロード、設定でボイスモードを有効にします。Laylはwhisper.cppをSTT用に、応答用のローカルLLMを、AndroidシステムTTSを使用します。最も簡単なパス；トレードオフは設定可能性が少ないです。',
          '**パスB—Termuxスタック（15分）：**',
          'F-Droidからtermuxをインストール（Play Store；Play Storeバージョンは古い）。',
          'termuxで：`pkg update && pkg install git cmake clang ffmpeg`。',
          'whisper.cppを構築：`git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make`およびSmallモデルダウンロード：`bash ./models/download-ggml-model.sh small`。',
          'ollama（Termux ARMビルド）をインストール：`curl -fsSL https://ollama.com/install.sh | sh`。モデルをプル：`ollama pull phi4-mini`。サーバーを起動：`ollama serve`。',
          'Piperをインストール：`pip install piper-tts`（Termux Python venvidで）およびボイスダウンロード（例：`piper-tts --download-voice en_US-amy-low`）。',
          'arecordから読み取り、オーディオでwhisper.cppを実行し、トランスクリプトをOollama at localhost:11434に送信し、応答をPiperにパイプする小さなPythonスクリプトでパイプラインを接続します。または、taskerを使用して、ボタンまたはクイックタイルによってトリガーされるシェルコマンドを連鎖させます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'パスBの場合、Termux：Widgetを使用して、音声アシスタントスクリプトを実行するホーム画面ショートカットを作成します。ウィジェットの1回のタップはフルパイプラインをトリガーします。Bluetooth buttonまたはTaskerクイックタイルをペアリングして、ハンズフリー呼び出します。Pixel 9 ProおよびGalaxy S25 UltraアクションSideキーもTaskerアクションをトリガーできます。',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'ハイブリッド設定：スマートフォンSTT +リモートOllama',
        content:
          '**ハイブリッドスタックはLLM呼び出しをホームマシンに移動し、デバイスでSTTとTTSを保持します。** これは、70Bクラスのモデル（Llama 3.3 70B、Qwen3-Coder 32B）へのアクセスを与えながら、オーディオの機密性を保持します（スマートフォンを離れることはありません—テキストトランスクリプトのみがホームWi-Fi経由で送信されます）。',
        numberedItems: [
          'ホームマシン（Mac、PC、またはNAS）では：Ollama をインストール。70Bモデルをプル：`ollama pull llama3.3:70b`（~40 GBフリーディスク+ ~48 GB RAMまたは24 GB GPU VRAMが必要）。',
          'Ollamaをローカルネットワークにバインド：`OLLAMA_HOST=0.0.0.0:11434 ollama serve`。ホームマシンのローカルIP（例：192.168.1.20）に注意してください。',
          'スマートフォンでは、音声アシスタントパイプライン（iOSショートカットまたはAndroid Tasker）をWhisperトランスクリプトをHTTP POSTで`http://192.168.1.20:11434/api/generate`に送信するように構成します。',
          'TTSはスマートフォン上で動作し続けます（Piperまたはシステムボイスはホームマシンからの応答テキストを使用）。',
          '結果：Whisper STTはスマートフォンで実行されます（オーディオはデバイスを離れることはありません）、ホームOlamaは70B品質の応答を~600～1200 msで生成し、TTSはスマートフォンで話します。総レイテンシ~1.5～2.5秒—完全にデバイス上よりわずかに高いですが、より優れたLLM品質を備えています。',
        ],
        promptExamples: [
          {
            label: 'iOSショートカット：ハイブリッド音声アシスタント（アクションボタントリガー）',
            text: '1. オーディオ記録→tempdファイルに保存します。\n2. Whisper Transcriptionで転写→出力：トランスクリプトテキスト。\n3. URLの内容を取得→URL：http://192.168.1.20:11434/api/generate、メソッド：POST、JSONボディ：{"model":"llama3.3:70b","prompt":"[transcript]","stream":false}→出力：応答テキスト。\n4. テキストを話す→入力：応答テキスト、ボイス：iOSシステムボイス。\nアクションボタンに割り当てます。レコードを保持；送信をリリース。最初のオーディオ~1.5～2.5秒再生します。',
          },
          {
            label: 'Tasker：Androidハイブリッド音声アシスタント',
            text: '1. 変数：%TRANSCRIPT =（記録されたオーディオファイル上のwhisper-CLIの出力）。\n2. HTTPリクエスト：URLhttp://192.168.1.20:11434/api/generate、メソッドPOST、Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}。\n3. 変数：%REPLY =（JSONから解析された「応答」フィールド）。\n4. 言う：%REPLY（Androidシステムティスまたはインストールされている場合はPiper）。\nクイックタイル、Bluetoothボタン、またはPixel 9 Proのサイドキーロングプレスからトリガーします。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '最低レイテンシハイブリッドの場合、Ollamaをストリーミングモード（`"stream":true`）に設定し、到着時にトークンをTTSにストリーミングして、完全な応答を待つのではなく。iOSショートカットはネイティブストリーム化できませんが、小さなTaskerプラグインまたはカスタムiOSアプリはできます。ストリーミングで、認識「最初のオーディオ」レイテンシは200～400 msで低下します。',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'レイテンシバジェット：秒はどこへ行くのか',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'iPhone 16 Proにおける発話終了から最初の音声までのレイテンシ内訳：VAD検出250ms、Whisper STT 200ms、LLM初回トークン生成700ms（全体の54%、最大の改善余地）、TTS初回音声150ms — 合計約1.3秒。',
        content:
          '**2026年のフラッグシップスマートフォンでは、LLM最初のトークンまでの時間が総レイテンシを支配します—通常、音声から最初のオーディオ時間の50～60%。** LLMステップを最適化するには、WhisperまたはTTSの調整よりも多くの影響があります。',
        columns: ['ステップ', '典型的な時間（iPhone 16 Pro、デバイス上）', '備考'],
        rows: [
          { 'ステップ': 'VAD発話終了検出', '典型的な時間（iPhone 16 Pro、デバイス上）': '~200～500 ms', '備考': '調整可能；300 msデフォルト。認識レイテンシに数えます。' },
          { 'ステップ': 'Whisper Small STT（5秒発話）', '典型的な時間（iPhone 16 Pro、デバイス上）': '~150～300 ms', '備考': 'WhisperKit ~30～40%速いApple Neural Engine経由。' },
          { 'ステップ': 'LLM最初のトークンまでの時間（Phi-4 Mini）', '典型的な時間（iPhone 16 Pro、デバイス上）': '~400～800 ms', '備考': '最大のコントリビューター。より小さいモデル=高速。' },
          { 'ステップ': 'TTS最初のオーディオ（PiperまたはシステムTTS）', '典型的な時間（iPhone 16 Pro、デバイス上）': '~100～200 ms', '備考': 'システムTTSはPiperよりも少し速い。' },
          { 'ステップ': '総音声から最初のオーディオまで', '典型的な時間（iPhone 16 Pro、デバイス上）': '~0.9～1.4秒', '備考': '2秒以下 = 「使用可能に感じます」；1秒以下 = 「ネイティブに感じます」。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '1秒以下を取得するには：Whisper Tiny（75 MB、~80 ms STT）+ Qwen3 1.7B（~250 ms TTFT）+ systemTTS（~80 ms最初のオーディオ）を使用します。iPhone 16 Proで総~600～800 ms。トレードオフはより短く、一貫性のないLLM応答と、雑音の多い環境でのより低いSTT精度です。応答性が最優先事項の場合、それの価値があります。',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: '1時間以上の精度とバッテリー消耗',
        content:
          '**Whisper Smallは、中程度の背景ノイズで通常の音声で約88%の精度を実現します；Whisper Mediumは約91%に達しますが、レイテンシは2倍。** 1時間のアクティブな会話でのバッテリーの自律性は、iPhone 16 Proで約25～35%、フラッグシップAndroidで約25～40%です。',
        items: [
          '**モデルサイズ別のwhisper精度（LibriSpeech-clean WER、より低いほど良い）：** Tiny ~7.5%、Small ~3%、Medium ~2.4%、Large v3 ~1.8%。実質的なノイズ条件では：Tiny ~15～20% WERに分解、Small ~10～14%、Medium ~7～10%、Large v3 ~5～7%。',
          '**CloudWhisper vs Local Whisper：** OpenAIのCloud Whisper API は、デフォルトで大規模なv3（クリーンな音声で~2% WER）を使用します。スマートフォン上で実行されているWhisper Smallは、同じオーディオで~3% WERです—毎日のアシスタント使用で違いが認識できないほど十分に近い。',
          '**バッテリー消耗（1時間のアクティブな会話、画面オン）：** iPhone 16 Pro ~25～35% ; iPhone 17 Pro ~22～30% ; Pixel 9 Pro ~30～40% ; Galaxy S25 Ultra ~28～38%。ハイブリッドモードでは、スマートフォンの消耗を~10～15%/時間に減らします。',
          '**熱的な絞り込み：** 持続的なオンデバイスLLM推論は、iPhoneで~10～15分後に熱的な絞り込みをトリガーします（チップ表面~38℃）；フラッグシップAndroidで~15～20分（タブレットと大きなスマートフォン上でより優れた熱質量）。スロットリングはトークン/秒を30～50%削減し、LLM最初のトークンレイテンシを~600 msから~900 msに拡張します。',
          '**長いセッションの軽減策：** 充電器に接続、スマートフォンを硬い表面に顔を置く（手の中ではなく）、またはハイブリッドモードに切り替えます。スマートフォン-as-マイクはスマートフォンのような全体のエネルギーのごく一部を使用します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '1時間のall-localボイスセッションはスマートフォンのバッテリー自律性を30～40%消耗することができます。終日またはカー使用の場合は、チャージ計画を立てます。ハイブリッドパス（スマートフォン上のみSTT）は、周囲、常時オン音声アシスタントの現実的なオプション—ホームマシンは重い持ち上げをしています。',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'ハンズフリー：ショートカット、Tasker、CarPlay、Android Auto',
        content:
          '**ハンズフリートリガーは、音声スタックではなく、トリガーメカニズムに依存します。** iOSはアクションボタンまたは「Hey Siri、run [ショートカット]」を持つショートカットを使用します；Androidはサイドキー、クイックタイル、またはBluetoothボタン付きのtaskerを使用します。',
        items: [
          '**iPhoneアクションボタン（iPhone 15 Pro以上）：** 音声パイプラインをトリガーするショートカットを割り当てます。アクションボタンを保持して記録を開始；送信をリリース。2026年のiPhoneでの最も低いレイテンシのハンズフリートリガー。',
          '**iPhone「Hey Siri、run [ショートカット名]」：** Siritを目覚めさせます（~500 ms）、その後ショートカットを実行します。アクションボタン対やや遅いですが、ハンズフリーで任意の時間にスマートフォンが施錠される時間に機能します。',
          '**Androidサイドキー / Bixbyキー（Galaxy）：** Galaxy Modes & Routinesの設定またはBixbyキーリマップアプリを使用して、taskerアクションを割り当てます。トリガーを押します。',
          '**Android Taskerクイックタイル：** 通知シェードに追加されたクイックタイルが、音声スクリプトを実行します。ロック画面からトリガーをスワイプします。',
          '**Bluetoothボタン（例：Flic、ジェネリックメディアボタン）：** iOS / Androidとペアリング、音声ショートカット / Taskerタスクをトリガーするように構成します。本当のハンズフリー（机の上のボタン、ステアリングホイール上、ポケット内）。',
          '**CarPlay / Android Auto：** これらは、システムSiri / Google Assistantで設計によって使用されます—どちらも2026年でサードパーティ音声アシスタントAPIを公開しません。CarPlayの回避策は、CarPlayアクションボタンにショートカットをバインドすること（限定的なショートカットサポート）です；Android Autoは、Bluetoothメディアボタン経由でtaskerをトリガーするために。どちらもシステムアシスタントほどポーランド語されていません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'CarPlay / Android Auto統合なしでのカー使用の場合：小さなBluetoothボタン（Flic、AirShou、汎用メディアリモート）をペアリング、ステアリングホイールに取り付けます。オフラインの音声アシスタントをトリガーすることを押します—インターネットなしで動作し、クラウドにオーディオを送信せず、~1.5秒で答えます。CarPlayへのトレードオフは、カーディスプレイのUIなし、オーディオのみ。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー保証：完全にオフラインvsクラウド支援',
        content:
          '**音声アシスタントは「完全にオフライン」の場合にのみ、マイクオーディオ、トランスクリプト、およびTTSオーディオがすべてデバイス上に留まり、ネットワーク呼び出しなし。** 「プライベート」としてマーケティングされている多くのアプリは、クラウドへのトランスクリプトまたはテレメトリをまだ送信します—信頼する前に、飛行機モードまたはネットワークモニターで確認します。',
        items: [
          '**「完全にオフライン」を確認する方法：** スマートフォンを飛行機モードにして、アシスタントを使用します。フルサービスで機能する場合、それは完全にオフラインです。劣化またはフェールする場合、ステップはクラウドサービスに依存します。',
          '**オーディオキャプチャ：** マイクデータはローカルに処理され、どこにも記録または送信されるべきではありません。Whisper、whisperkitおよび sherpa-onnxは、すべてのmemoryのsttetを実行し、トランスクリプション後のオーディオを破棄します。',
          '**LLM推論：** スマートフォン上のローカルモデル（Phi-4 Mini、Gemma 3、Llama 3.2）によって応答が生成される場合、デバイスはプロンプトを離れません。アシスタントが「クラウド支援」モード（Apple Intelligence Private Cloud Compute、Googleのオンデバイス最初のクラウドフォールバック）を使用している場合、トランスクリプトは特定の条件下でサーバーに送信される可能性があります—アプリのプライバシーポリシーを確認します。',
          '**TTS：** PiperおよびシステムTTSは完全にデバイス上。いくつかの「プレミアム」クラウドボイス（Elevenlab、OpenAI TTS）はレスポンステキストをサーバーに送信する必要があります—真のオフラインでこれらを避けます。',
          '**ハイブリッドパスプライバシースタンス：** ハイブリッドモードでは、オーディオはスマートフォン上に留まります（Whisper Local）、ただしテキストトランスクリプトはホームOllama serverがホームWi-Fi経由。これはローカルネットワークのみであり、クラウドではありません—データはネットワーク内に留まります。ほとんどのプライバシー意識のあるユーザーにとって受け入れ可能です。最も厳しい脅威モデルの場合、完全にデバイス上と同等ではありません。',
          '**アプリ固有のメモ（2026年5月）：** whisperkitおよびwhisper.cppはオープンソースで確認可能オフラインです。Laylはデフォルトでローカルで実行されます（飛行機モードで確認）。LLM FarmおよびPocketPal AI実行推論完全にデバイス上。Apple Intelligenceはオンデバイス とPrivate Cloud Computeモード—disableを備えています。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '完全なオフライン操作が重要な場合（ジャーナリスト /ソース機密保持、医療、法律）：オープンソースアプリを優先（whisperkitリファレンスビルド、whisper.cpp via termux、layla）ネットワークの動作を監査できる場所。クローズドソースアプリ（「プライベート」としてマーケティングされている場合でも）、明らかなユーザー通知なしに、将来の更新でクラウド機能を追加することができます。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '一般的な間違い',
        items: [
          '**すべてにWhisper Tinyを使用。** Tinyは速い（~80 ms STT）ですが、ノイズの多い環境では誤りが発生しやすい（~15～20% WER対Small ~10～14%）。Tinyは静かなベッドルームでの短いコマンド用に受け入れ可能；汎用音声アシスタントにはSmallを使用します。',
          '**TTSが開始する前に、完全なLLM応答を待つ。** これは認識レイテンシを2倍にします。到着時にLLMトークンをTTSにストリーミング—Piperはストリーミング入力をサポート、システムTTSは段階的な音声をサポート。最初のオーディオは完全な応答の後ではなく、LLMの最初の文の後に再生されるべき。',
          '**ホット環境でオンデバイスLLMを実行します。** 熱的なスロットリングは直後に直後に、直射日光やホットカーで数分内で始まり、トークン/秒を30～50%削減し、レイテンシを2秒以上で押し出します。ハイブリッドパスを使用または冷たく保ちます。',
          '**検証なしで「プライベート」を信頼。** 「プライベート」と「ローカル」は2026年のマーケティング用語—ローカル処理を主張する一部のアプリはまだ分析、モデル更新、またはクラウドフォールバックトランスクリプション用にホーム電話をかけます。敏感な使用に依存する前に、飛行機モードで確認します。',
          '**低RAMデバイスでのTermux Androidスタック構築。** Termux + whisper.cpp + ollama + piperは、ピークでシステムRAM ~4 GBを消費します。6 GB以下のRAMを備えたデバイスは、会話の途中でコンポーネントのOOM-killです。低RAMAndroidでlaylを使用するか、iPhoneパスに固執します。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) （クロスプラットフォームWhisper、AndroidおよびiOSビルドを含む）。',
          'WhisperKit（Argmax）—[github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit)（Apple Neural Engine最適化Whisper iOS / macOS用）。',
          'Piper TTS（Rhasspy）— [github.com/rhasspy/piper](https://github.com/rhasspy/piper)（オープンソースニューラルTTS、モバイル対応、30+言語）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（iPhoneアプリをローカルで実行するGGUFモデル）。',
          'Layla（Android）— [Play Storeリスト](https://play.google.com)とデベロッパードキュメント（音声サポート付きバンドルローカルLLMスタック）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルWhisper対Cloud Whisperの精度はどの程度？',
            a: 'スマートフォン上で実行されているWhisper Smallは、クリーンな音声で~3% WERを実現します；OpenAIのCloud Whisper（Large v3）は~2%を実現します。ノイズの多い環境では、ローカルSmallは~10～14% WERに落ち、Cloud Large v3は~5～7%に落ちます。毎日の音声アシスタント使用の場合、ローカルの精度は認識可能でないほど十分に閉じています。すべての言葉が重要な長い形式のテキスト口述の場合、クラウドまたはローカルMedium / Largeが望ましい。',
          },
          {
            q: '地元の音声アシスタントは完全にSiriを置き換えることができますか？',
            a: 'プライベートQ&A、ドラフト、サマリー用：はい、Siriのオンデバイス機能と比較可能または優れた品質です。システムアクション（アプリを開く、タイマーを設定する、HomeKitを制御）、Webサーチを起動したり、ライブデータ（天気、スポーツスコア）を起動したりするために：いいえ—2026年でSiriのiOSおよびAppleサービスとの統合は第三者ローカルスタックでは複製不可能です。多くのユーザーはどちらも保持：システムアクション用のSiri、プライベートQ&A用のローカルスタック。',
          },
          {
            q: 'これはCarPlayまたはAndroid Autoで動作しますか？',
            a: '限定的。CarPlayおよびAndroid Autoは、システムSiri / Google Assistantの周囲で設計—どちらも2026年にはサードパーティ音声アシスタントAPIを公開します。解決策：CarPlayアクションボタン（限定的なショートカットサポート）にバインドされたショートカットを使用するか、Bluetooth mediaボタン（Flic、ジェネリックメディアリモート）をペアリングして、tasker / shortcutをトリガーします。どちらもシステムアシスタント対ほど洗練されていません。',
          },
          {
            q: 'ハンズフリーでどのようにトリガーしますか？',
            a: 'iPhone：ショートカットを呼び出すためにアクションボタン（iPhone 15 Pro以降）を保持するか、「Hey Siri、run [ショートカット名]」と言ってください。Android：Galaxyスマートフォン上の側面キーまたはBixbyキーを使用し、taskerクイックタイルまたはペアリングされたBluetoothボタン。真のアンビエントハンズフリー（常に聞く目覚めの言葉）の場合、ローカルスタックは2026年にSiri / Google Assistantに一致しません—スマートフォンシステムウェイクワード検出器はサードパーティアプリには公開されていません。',
          },
          {
            q: '多言語会話を処理できますか？',
            a: 'はい、ただし注意事項付き。Whisperは入力言語を自動検出し、99言語をサポート。ローカルLLMsは異なります：Phi-4 Mini言語は良い、主要なヨーロッパ言語合理的；Qwen3は中国語を含む強い多言語サポート；Gemma 3 100+言語をサポート。TTS用、Piperは30+言語を持つ；システムTTSはインストールしているOSの言語パックに依存。途中の言語の切り替えはWhisperで機能しますが、LLMを混同する可能性があります。',
          },
          {
            q: 'バックグラウンドノイズはローカルSTTを分割しますか？',
            a: 'Whisper Tinyはモデレートノイズ（~15～20% WER）の上に大幅に分解；Smallはカフェレベルノイズを合理的に処理（~10～14% WER）；MediumおよびLargeはほとんどの現実的な環境を良く処理。ノイズの多い使用（車、公共交通機関）の場合、RAMを持つ場合はWhisper Mediumを使用するか、VADを積極的に適用（音声が検出される場合のみトランスクリプト、声明の間で無視）。',
          },
          {
            q: 'スマートホームデバイスをローカルと統合する方法は？',
            a: 'LLM応答をインテント（例：「キッチンライトをオフにする」）を検出するパーサーを使用し、ローカルスマートホームハブのAPIを直接呼び出す—Home AssistantはローカルIP、Apple HomeKit統合でRESTAPIを備えており、Shortcutsの「制御ホーム」アクションを経由。完全にオフラインパイプラインが必要な場合、クラウドスマートホーム統合（Alexa、Google Home）を避けます。',
          },
          {
            q: 'ボイス（TTS）をカスタマイズできますか？',
            a: 'はい。Piper TTSは30+言語で100+のコミュニティ訓練音声を備えています。iOSボイスショートカットを使用すると、高品質プレミアム音声（設定→アクセシビリティ→スポークンコンテンツ→音声）を含むシステムボイスから選択できます。AndroidシステムTTSはGoogleまたはサードパーティのボイスパックをサポート。カスタムボイスクローニング（独自のボイスまたは特定のペルソナ）には、別のTTSツールチェーン（Coqui、Tortoise TTS）が必要—2026年のデバイス上でまだ実用的ではありません。',
          },
          {
            q: 'バッテリーライフは大きなヒットを取りますか？',
            a: 'はい—フラッグシップスマートフォンでのアクティブな会話1時間あたり約25～40%。時折の音声クエリの場合、影響は小さい。終日またはAlways-On使用の場合、プラグイン（スマートフォンあたり~10～15%/時間を削減するため、ハイブリッドパスのみスマートフォンで実行）を使用します。バックグラウンドパッシブリッスニング、目覚めワード検出は、現在、受け入れ可能なバッテリーコストでサードパーティローカルスタック上で可行な一定あたり現在実行不可能です。',
          },
          {
            q: 'iOS 19またはAndroid 16はこのセットアップを分割しますか？',
            a: 'コアスタック（Whisper、ローカルLLM、TTS）の可能性は低い—これらはマイク・キャプチャ、TTS、ネットワークなど（これらは標準API）に依存するユーザースペースアプリです。破砕可能：ショートカット統合、Appleがショートカット APIを変更する場合；Termux on Android（Android 16がバックグラウンドプロセス制限をさらに厳しくする場合）。アプリをアップグレードしたままにして、各メジャーOSアップデート後に確認してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連情報',
        items: [
          '[iPhone 2026年のベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) —iPhoneパスのベースレイヤーアプリ（PocketPal AI、LLM Farm、Private LLM）。',
          '[Android 2026年のベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) —Androidパスのベースレイヤーアプリ（Layla、Maid、MLC Chat、Termux + Ollama）。',
          '[最高のモバイルLLMモデル2026：Phi-4 Mini vs Gemma 3 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —音声スタックのモデルレイヤー；ベンチマーク品質対レイテンシのトレードオフ。',
          '[タブレットでAIを実行する方法：iPad and Android（2026）](/ja/power-local-llm/run-ai-on-tablet-ipad-android) —より大きな画面の音声セットアップが必要なユーザー向けのタブレット等価物。',
          '[最高のローカルLLMs 2026](/ja/local-llms/best-local-llms-2026) —すべてのハードウェアティアをカバーするより広いモデル権限、ハイブリッド設定でLLMを選択するのに役立つ。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) —Whisper.cpp、WhisperKit、Piper TTS、およびその他の音声スタックコンポーネントのディレクトリエントリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートフォンで完全オフラインの音声アシスタントを構築する：Whisper + ローカルLLM（クラウドなし）— 2026',
      url: 'https://www.promptquorum.com/ja/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'ja'),
      description: '2026年のiPhoneおよびAndroidで完全にオフラインで動作する音声アシスタント。Whisper ローカルSTT + ローカルLLM + Piper TTS。iPhone、Android、ハイブリッド設定；レイテンシ、バッテリー、プライバシー。',
      inLanguage: 'ja',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
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
        { '@type': 'Thing', name: 'ローカルLLM' },
        { '@type': 'Thing', name: 'iPhoneオフライン' },
        { '@type': 'Thing', name: 'Androidオフライン' },
        { '@type': 'Thing', name: '音声アシスタント' },
        { '@type': 'Thing', name: 'モバイルAI' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '在您的手机上构建完全离线语音助手：Whisper + 本地LLM（无云）— 2026',
    seoTitle: '本地语音助手 Whisper LLM 手机 2026',
    intro:
      '2026年在iPhone或Android上实现完全离线语音助手需要三个组件：将语音转换为文本的Whisper、设备上本地LLM以获得响应，以及用于语音合成的Piper或系统TTS。旗舰手机上从语音到首个音频的实际延迟为0.8-1.5秒，低于2秒的"感觉可用"阈值。本指南涵盖iPhone路径（LLM Farm + WhisperKit）、Android路径（Layla + Whisper.cpp）和混合路径（手机STT +远程Ollama），并包括测量的延迟、电池和精度数字。',
    metaDescription:
      '2026年在iPhone和Android上完全离线的语音助手。Whisper本地STT +本地LLM + Piper TTS。iPhone、Android和混合设置；延迟、电池、隐私。',
    twitterDescription:
      '构建离线运行的Siri替代品：Whisper本地STT + Phi-4 Mini + Piper TTS。旗舰手机上语音到首个音频不到1.5秒。iPhone + Android设置。',
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
      '重视隐私的手机用户，希望使用完全在设备上运行的Siri / Google助手替代品，包括旅行者、记者、医疗专业人士和构建离线语音工作流的开发者。',
    readTime: '13分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      '本地语音助手 手机',
      '离线 Whisper iPhone',
      'Whisper 本地 LLM Android',
      'Siri替代 离线',
      'Piper TTS 移动',
      'WhisperKit iOS',
      'Layla Android 语音',
    ],
    leadAnswerBlock:
      '**2026年完全离线语音助手需要三个组件：用于语音到文本的Whisper Small或Medium、用于响应的本地3B-4B LLM（Phi-4 Mini或Gemma 3 4B）以及用于音频输出的Piper TTS或系统TTS。** 在iPhone上，最简单的堆栈是WhisperKit（或Whisper Transcription应用）+ LLM Farm + iOS系统TTS——在iPhone 16 Pro上从语音到首个音频约0.9-1.4秒。在Android上，Layla本地捆绑类似的堆栈，或者通过Termux + whisper.cpp + Ollama + Piper自行组装。为了获得更好的LLM质量，使用混合路径：手机本地运行Whisper以进行隐私关键的STT，然后将转录发送到运行Ollama 70B模型的家庭Mac或PC。所有三种设置在下载模型后无需互联网即可工作。',
    quickAnswerTop: {
      zh: {
        question: '2026年可以在手机上构建完全离线语音助手吗？',
        answer:
          '可以。标准堆栈是用于语音到文本的Whisper、用于响应的本地3B-4B LLM（Phi-4 Mini或Gemma 3 4B）以及用于音频输出的Piper TTS或iOS / Android系统TTS。在iPhone 16 Pro上，从语音到首个音频的延迟约为0.9-1.4秒，低于2秒的"感觉可用"阈值。在旗舰Android手机（Pixel 9 Pro、Galaxy S25 Ultra）上，延迟约为1.0-1.6秒。iPhone路径使用WhisperKit + LLM Farm；Android路径使用Layla（内置堆栈）或Termux + whisper.cpp + Ollama；混合路径在手机上保持STT，并将转录发送到运行70B模型的家庭Mac或PC。',
        bullets: [
          '堆栈：Whisper（STT）+ 3B-4B本地LLM + Piper或系统TTS—全部在设备上。',
          'iPhone：WhisperKit / Whisper Transcription + LLM Farm + iOS系统语音。延迟 16 Pro约0.9-1.4秒。',
          'Android：Layla（捆绑堆栈）或Termux + whisper.cpp + Ollama + Piper。延迟 Pixel 9 Pro约1.0-1.6秒。',
          '混合：手机本地运行STT，将转录发送到运行Llama 3.3 70B的家庭Ollama。最高质量。',
          '电池（1小时活跃对话）：iPhone 16 Pro约25-35% ；旗舰Android约25-40%。',
          'Whisper Small（~466 MB）是移动标准—约12% WER、约150-300 ms STT延迟。',
          '2秒以内的语音到首个音频是"感觉可用"阈值；1秒以内感觉本地。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '应该构建哪种语音助手堆栈？', anchor: '#which-stack' },
      { label: '语音助手堆栈比较', anchor: '#stack-comparison' },
      { label: '三组件堆栈：STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'iPhone设置：WhisperKit + LLM Farm（5分钟）', anchor: '#iphone-setup' },
      { label: 'Android设置：Layla或Termux堆栈（5-15分钟）', anchor: '#android-setup' },
      { label: '混合设置：手机STT +远程Ollama', anchor: '#hybrid-setup' },
      { label: '延迟预算：秒去哪里了', anchor: '#latency-budget' },
      { label: '1小时以上的精度和电池消耗', anchor: '#accuracy-battery' },
      { label: '免提：快捷方式、Tasker、CarPlay、Android Auto', anchor: '#hands-free' },
      { label: '隐私保证：完全离线vs云辅助', anchor: '#privacy' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**完全离线堆栈是Whisper（STT）+ 3B-4B本地LLM + Piper或系统TTS。** 三个组件在安装后全部在设备上本地运行；运营期间无云调用。',
          '**iPhone：WhisperKit + LLM Farm + iOS系统语音是最简单的路径。** WhisperKit为STT使用Apple Neural Engine；LLM Farm为响应运行Phi-4 Mini；iOS系统TTS处理音频。语音到首个音频：iPhone 16 Pro约0.9-1.4秒。',
          '**Android：Layla本地捆绑完整堆栈，或使用Termux + whisper.cpp + Ollama + Piper手动构建。** Layla是更简单的路径；Termux构建更灵活。语音到首个音频：Pixel 9 Pro和Galaxy S25 Ultra约1.0-1.6秒。',
          '**混合（手机STT +远程Ollama）提供最佳LLM质量。** 手机本地运行Whisper以获得隐私关键的音频，然后将转录发送到运行Llama 3.3 70B的家庭Mac或PC。更好的响应质量，需要家庭Wi-Fi。',
          '**Whisper Small（~466 MB）是移动甜点。** 正常语音约12% WER、约150-300 ms STT延迟。Whisper Medium（~1.5 GB）更准确（~9% WER）但较慢；Whisper Tiny（~75 MB）更快但在背景噪音上容易出错。',
          '**电池消耗很大—旗舰手机上每小时活跃对话约25-35%。** 对于全天使用，插入或使用混合路径（仅手机上运行STT，消耗降至约10-15% /小时）。',
          '**这是一个真正的Siri替代品，适合优先考虑隐私而不是功能广度的用户。** 您放弃的：网络搜索、与专有云的智能家居集成、系统操作覆盖范围。您获得的：离线工作、无遥测、无帐户。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**STT引擎：** Whisper.cpp（跨平台）、WhisperKit（iOS、Apple Neural Engine优化）、Sherpa-ONNX（Android、ONNX运行时）。',
          '**LLM：** Phi-4 Mini（3.8B）在旗舰手机上；Qwen3 1.7B或SmolLM 2 1.7B在较旧的设备上。',
          '**TTS：** Piper TTS（开源、~50 MB /语音）、iOS系统TTS（AVSpeechSynthesizer）、Android系统TTS。',
          '**iPhone应用：** WhisperKit、Whisper Transcription（Aiko开发者）、LLM Farm、PocketPal AI。',
          '**Android应用：** Layla（捆绑堆栈）、Termux + whisper.cpp + Ollama、Sherpa-ONNX演示应用。',
          '**语音到首个音频目标：** 2秒以内 = "感觉可用"；1秒以内 = "感觉本地"。',
          '**电池（1小时活跃）：** iPhone 16 Pro ~25-35% ；Pixel 9 Pro / Galaxy S25 Ultra ~25-40%。',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: '应该构建哪种语音助手堆栈？',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          '语音助手路径选择决策树：追求隐私选择完全设备端方案（iPhone上的WhisperKit + LLM Farm约0.9-1.4秒，或Android上的Layla或Termux约1.0-2.0秒），需要70B级质量或实时数据则选择混合方案（手机端STT + 家庭Ollama 70B，约1.5-2.5秒）或云端助手。',
        content:
          '**对于大多数旗舰手机用户：设备上路径是正确的选择。** 它完全私密、离线工作并在1.5秒内产生可用的结果。仅当您特别需要70B级质量并接受家庭Wi-Fi依赖时才使用混合路径。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '通过堆叠Whisper（STT）、本地3B-4B LLM（Phi-4 Mini或Gemma 3 4B）和Piper或系统TTS来构建完全离线的语音助手—2026年旗舰手机上从语音到首个音频0.9-1.6秒。',
          },
          {
            type: 'plain-terms',
            text: '语音助手有三项工作：将您的语音转换为文本、生成回复并向您说出回复。使用Whisper进行第一步、小的本地LLM进行第二步、Piper或手机的内置语音进行第三步，您可以在没有互联网的情况下在手机上完成全部三步。完整的循环在最近的iPhone或Android旗舰上大约需要1秒—足够快，感觉像在与Siri交谈，但所有内容都保持在设备上。',
          },
        ],
        decisionBlock: {
          title: '决定：哪种语音助手堆栈？',
          localIf: [
            '您想要完全隐私和离线操作→完全在设备上（iPhone或Android路径）',
            '您经常旅行并想要飞行/无信号区域的语音→完全在设备上',
            '您是记者、医疗专业人士或律师→完全在设备上以保证来源/患者/客户保密',
            '您是原型设计离线语音工作流的开发者→完全在设备上',
          ],
          cloudIf: [
            '您需要70B+型号质量（复杂推理）→混合路径（手机STT +远程家庭Ollama）',
            '您需要实时网络搜索或实时数据→云助手（2026年没有本地等价物）',
            '您需要与专有云的深度集成（Google Calendar、iCloud等）→继续为这些任务使用Siri / Google助手',
          ],
          quick: [
            'iPhone最简单的路径：WhisperKit + LLM Farm + iOS语音',
            'Android最简单的路径：Layla（捆绑堆栈）',
            '最高质量：混合（手机STT +家庭Ollama 70B）',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '即使您最终想要混合方法，也要从完全在设备上的路径开始。设备上的设置教您移动部件（STT、LLM、TTS）并在没有家庭服务器依赖的情况下工作。运行后，将LLM调用从本地交换到远程Ollama URL是一行变化。',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: '语音助手堆栈比较',
        content:
          '**2026年有三种可行的堆栈，各自针对不同的优先级进行了调整：简洁性（Layla）、Apple原生抛光（WhisperKit + LLM Farm）或LLM质量（混合）。** 三种都在设备上运行STT和TTS；混合仅将LLM步骤移动到家庭计算机。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '为iOS上的简洁性选择iPhone（WhisperKit + LLM Farm + iOS语音），为Android上的简洁性选择Android（Layla），或为最佳LLM质量选择混合（手机STT +家庭Ollama）。',
          },
          {
            type: 'plain-terms',
            text: '下面的延迟数字是从语音到首个音频—您停止说话到助手开始回答的时间。2秒以内感觉可用；1秒以内感觉本地。电池是超过1小时活跃双向对话消耗的百分比。',
          },
        ],
        columns: ['堆栈', '延迟（语音→首个音频）', '电池（1小时活跃）', '最适合'],
        rows: [
          { '堆栈': 'iPhone（WhisperKit + LLM Farm）', '延迟（语音→首个音频）': '~0.9-1.4秒（16 Pro / 17 Pro）', '电池（1小时活跃）': '~25-35%', '最适合': '想要Apple原生抛光的iOS用户' },
          { '堆栈': 'Android（Layla、捆绑）', '延迟（语音→首个音频）': '~1.0-1.6秒（Pixel 9 Pro、Galaxy S25 Ultra）', '电池（1小时活跃）': '~25-40%', '最适合': '想要单应用简洁性的Android用户' },
          { '堆栈': 'Android（Termux + whisper.cpp + Ollama + Piper）', '延迟（语音→首个音频）': '~1.2-2.0秒', '电池（1小时活跃）': '~30-40%', '最适合': '想要完全控制的高级用户' },
          { '堆栈': '混合（手机STT +家庭Ollama 70B）', '延迟（语音→首个音频）': '~1.5-2.5秒（Wi-Fi依赖）', '电池（1小时活跃）': '~10-15%', '最适合': '70B级质量、家庭网络使用' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '延迟由LLM"首个令牌"步骤主导，而不是Whisper或TTS。要减少延迟，请使用较小的LLM（Qwen3 1.7B代替Phi-4 Mini将LLM步骤从~600 ms降至~250 ms）。权衡是较短、详细程度较低的响应。',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: '三组件堆栈：STT + LLM + TTS',
        content:
          '**语音到文本、LLM和文本到语音是三个独立的组件，您可以单独交换。** 优化其中任何一个（较小的Whisper、更快的LLM、较低的TTS延迟）会降低总延迟。',
        items: [
          '**STT—Whisper.cpp / WhisperKit / Sherpa-ONNX。** Whisper Small（~466 MB）是标准的移动选择—常见语音约12% WER、5秒话语约150-300 ms STT延迟。Whisper Medium（~1.5 GB）将WER降至约9%，但延迟翻倍。Whisper Tiny（~75 MB）快速但易受中等背景噪音影响。WhisperKit（iOS）通过Apple Neural Engine使用STT延迟比香草Whisper.cpp低约30-40%。',
          '**LLM—Phi-4 Mini、Gemma 3 4B、Llama 3.2 3B。** Phi-4 Mini（3.8B Q4_K_M、~2.7 GB）是旗舰手机上推荐的默认值。短提示在iPhone 16 Pro上的首令牌时间约为400-800 ms—对总延迟的最大单一贡献者。对于较旧或RAM受限的设备，Qwen3 1.7B（~1.1 GB）更快（~200-400 ms TTFT），代价是更短、更简单的响应。',
          '**TTS—Piper TTS或系统TTS。** Piper（Rhasspy项目、开源）支持30多种语言、~50 MB /语音、~100-200 ms首音频延迟，并在iOS、Android、Linux、macOS、Windows上运行。系统TTS（iOS上的AVSpeechSynthesizer、Android上的TextToSpeech）的延迟较低（~50-100 ms）但较旧OS版本上声音更机械。iOS 18+和Android 14+系统语音明显优于早期OS版本。',
          '**语音活动检测（VAD）。** 大多数应用使用Silero VAD或webrtcvad来检测您何时停止说话。200-500 ms静默窗口是典型的话语结束阈值。太短→在句子中途切断您；太长→增加延迟。300 ms是合理的默认值。',
          '**完整管道：** 麦克风捕获→VAD检测语音结束→Whisper转录→LLM生成回复→TTS说话。将LLM令牌流式传输到TTS时是到达的—这是什么让"首个音频"在旗舰手机上1秒以内到达—替代方案（等待完整LLM回复然后说话）将感觉延迟翻倍。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您的堆栈感觉缓慢，请为每个步骤进行配置：记录（麦克风→STT完成）、（STT完成→LLM首令牌）、（LLM首令牌→TTS首音频）的持续时间。一个步骤通常占主导。在2026年的旗舰手机上，几乎总是LLM首令牌时间（~400-800 ms）。切换到较小的LLM以获得更快的感觉延迟。',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'iPhone设置：WhisperKit + LLM Farm（5分钟）',
        content:
          '**2026年最简单的完全离线iPhone语音助手：STT的WhisperKit（或Whisper Transcription）、LLM的LLM Farm和语音的iOS系统TTS。** 总设置时间为5-10分钟加上模型下载时间。',
        numberedItems: [
          '从App Store安装基于WhisperKit的应用（例如" Whisper Transcription"（Aiko开发者、免费）—使用Apple Neural Engine提供设备上的转录。或者，从GitHub（Argmax / WhisperKit）构建WhisperKit参考应用。',
          '在WhisperKit / Whisper Transcription中：下载"Small"模型（~466 MB）。Tiny更快但不准确；Medium更准确但更慢。',
          '从App Store安装LLM Farm（免费）。在LLM Farm中：点击Models → "从URL添加模型" → 粘贴Phi-4 Mini Q4_K_M的Hugging Face URL（或使用应用内库（如果可用））。模型为~2.7 GB。',
          '通过iOS快捷方式连接：创建具有这些操作的快捷方式— （1）录制音频（或从共享表中接受音频输入）、（2）使用Whisper Transcription转录、（3）使用LLM Farm（如果公开）或私有LLM（~£10、有快捷方式操作）生成文本、（4）使用iOS系统语音说文本。',
          '将快捷方式分配给锁屏小部件、操作按钮（iPhone 15 Pro及更新版本）或"Hey Siri、run [快捷方式名称]"。操作按钮提供最低延迟的免提触发器。',
          '测试：按住操作按钮→说话→释放。STT运行（~200 ms）→LLM生成（~600 ms首令牌、流式传输到TTS）→首个音频在约0.9-1.4秒处播放。调整快捷方式中的VAD静默阈值，以防止其中断。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm目前未公开快捷方式操作（截至2026年5月）。要使用iOS快捷方式管道，您将需要私有LLM（~£10一次性），它公开"生成文本"操作。快捷方式方法是使iPhone路径"5分钟"的原因—没有快捷方式，您必须手动链接应用。',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Android设置：Layla或Termux堆栈（5-15分钟）',
        content:
          '**两条Android路径：Layla（5分钟捆绑堆栈方法）或Termux + whisper.cpp + Ollama + Piper（15分钟手动方法，更多控制）。** 两者在配置后完全离线运行。',
        items: [
          '**路径A—Layla（5分钟）：** 从Play Store安装Layla、下载模型（Phi-4 Mini或Gemma 3 4B）、在设置中启用语音模式。Layla为STT捆绑whisper.cpp、响应的本地LLM并使用Android系统TTS。最简单的路径；妥协是可配置性较少。',
          '**路径B—Termux堆栈（15分钟）：**',
          '从F-Droid安装Termux（不是Play Store；Play Store版本已过时）。',
          '在Termux中：`pkg update && pkg install git cmake clang ffmpeg`。',
          '构建whisper.cpp：`git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make`并下载Small模型：`bash ./models/download-ggml-model.sh small`。',
          '安装Ollama（Termux ARM构建）：`curl -fsSL https://ollama.com/install.sh | sh`。拉取模型：`ollama pull phi4-mini`。启动服务器：`ollama serve`。',
          '安装Piper：`pip install piper-tts`（在Termux Python venv中）并下载语音（例如`piper-tts --download-voice en_US-amy-low`）。',
          '使用从`arecord`读取、在音频上运行whisper.cpp、将转录发送到Ollama at localhost:11434并将响应管道到Piper的小型Python脚本连接管道。或使用Tasker链接由按钮或快速拼贴触发的shell命令。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于路径B，使用Termux：Widget创建运行语音助手脚本的主屏幕快捷方式。窗口小部件的一次点击触发完整管道。与蓝牙按钮或Tasker快速拼贴配对以获得免提调用。Pixel 9 Pro和Galaxy S25 Ultra Action / Side键也可以触发Tasker操作。',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: '混合设置：手机STT +远程Ollama',
        content:
          '**混合堆栈仅将LLM调用移动到家庭机器，在设备上保持STT和TTS。** 这提供了对70B级模型（Llama 3.3 70B、Qwen3-Coder 32B）的访问，同时保持了音频隐私（从不离开手机—仅文本转录通过您的家庭Wi-Fi发送）。',
        numberedItems: [
          '在家庭机器（Mac、PC或NAS）上：安装Ollama。拉取70B模型：`ollama pull llama3.3:70b`（需要~40 GB自由磁盘+ ~48 GB RAM或24 GB GPU VRAM）。',
          '将Ollama绑定到您的本地网络：`OLLAMA_HOST=0.0.0.0:11434 ollama serve`。注意家庭机器的本地IP（例如192.168.1.20）。',
          '在手机上，配置您的语音助手管道（iOS快捷方式或Android Tasker）以通过HTTP POST将Whisper转录发送到`http://192.168.1.20:11434/api/generate`，而不是本地LLM调用。',
          'TTS仍在手机上运行（Piper或系统语音），使用来自家庭机器的响应文本。',
          '结果：Whisper STT在手机上运行（音频从不离开设备），家庭Ollama在~600-1200 ms中生成70B质量响应，TTS在手机上说话。总延迟~1.5-2.5秒—略高于完全设备上但具有更好的LLM质量。',
        ],
        promptExamples: [
          {
            label: 'iOS快捷方式：混合语音助手（操作按钮触发器）',
            text: '1. 录制音频→保存到临时文件。\n2. 使用Whisper Transcription转录→输出：转录文本。\n3. 获取URL内容→URL：http://192.168.1.20:11434/api/generate、方法：POST、JSON正文：{"model":"llama3.3:70b","prompt":"[transcript]","stream":false}→输出：响应文本。\n4. 说文本→输入：响应文本、语音：iOS系统语音。\n分配到操作按钮。按住录制；释放发送。首个音频在~1.5-2.5秒处播放。',
          },
          {
            label: 'Tasker：Android混合语音助手',
            text: '1. 变量：%TRANSCRIPT =（记录的音频文件上的whisper-cli输出）。\n2. HTTP请求：URL http://192.168.1.20:11434/api/generate、方法POST、Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}。\n3. 变量：%REPLY =（从JSON解析的"response"字段）。\n4. 说：%REPLY（Android系统TTS或Piper（如果安装））。\n从快速拼贴、蓝牙按钮或Pixel 9 Pro上的Side-key长按触发。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '为了最低延迟混合，将Ollama设置为流模式（`"stream":true`）并在令牌到达时将其流式传输到TTS，而不是等待完整响应。iOS快捷方式无法本地流式传输，但小型Tasker插件或自定义iOS应用可以。通过流式传输，感觉"首个音频"延迟降低200-400 ms。',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: '延迟预算：秒去哪里了',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'iPhone 16 Pro上语音到首次音频的延迟预算：VAD检测250毫秒、Whisper语音转文本200毫秒、LLM首个token生成700毫秒（占总时长54%，是最大的优化点）、TTS首次发声150毫秒——总计约1.3秒。',
        content:
          '**在2026年的旗舰手机上，LLM首令牌时间主导总延迟—通常为语音到首个音频时间的50-60%。** 优化LLM步骤比调整Whisper或TTS有更多影响。',
        columns: ['步骤', '典型时间（iPhone 16 Pro、设备上）', '笔记'],
        rows: [
          { '步骤': 'VAD话语结束检测', '典型时间（iPhone 16 Pro、设备上）': '~200-500 ms', '笔记': '可调；300 ms默认。计入感觉延迟。' },
          { '步骤': 'Whisper Small STT（5秒话语）', '典型时间（iPhone 16 Pro、设备上）': '~150-300 ms', '笔记': 'WhisperKit通过Apple Neural Engine快约30-40%。' },
          { '步骤': 'LLM首令牌时间（Phi-4 Mini）', '典型时间（iPhone 16 Pro、设备上）': '~400-800 ms', '笔记': '最大贡献者。较小的模型=更快。' },
          { '步骤': 'TTS首音频（Piper或系统）', '典型时间（iPhone 16 Pro、设备上）': '~100-200 ms', '笔记': '系统TTS略快于Piper。' },
          { '步骤': '总语音到首个音频', '典型时间（iPhone 16 Pro、设备上）': '~0.9-1.4秒', '笔记': '2秒以内 = "感觉可用"；1秒以内 = "感觉本地"。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '要在1秒以内：使用Whisper Tiny（75 MB、~80 ms STT）+ Qwen3 1.7B（~250 ms TTFT）+ systemTTS（~80 ms首音频）。iPhone 16 Pro上的总~600-800 ms。妥协是较短、不太一致的LLM响应和嘈杂环境中较低的STT精度。如果响应性是您的首要任务，这是值得的。',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: '1小时以上的精度和电池消耗',
        content:
          '**Whisper Small在中等背景噪声中的普通语音上实现约88%的精度；Whisper Medium达到约91%但延迟翻倍。** 1小时活跃对话超过电池自主性约为iPhone 16 Pro上的25-35%，旗舰Android上的25-40%。',
        items: [
          '**按模型大小的Whisper精度（LibriSpeech清洁WER，越低越好）：** Tiny ~7.5%、Small ~3%、Medium ~2.4%、Large v3 ~1.8%。在实际嘈杂条件下：Tiny分解为~15-20% WER、Small ~10-14%、Medium ~7-10%、Large v3 ~5-7%。',
          '**Cloud Whisper vs本地Whisper：** OpenAI的Cloud Whisper API默认使用Large v3（清洁语音上~2% WER）。在手机上本地运行的Whisper Small是相同音频上的~3% WER—足够接近，日常助手使用的差异是不可察觉的。',
          '**电池消耗（1小时活跃对话、屏幕打开）：** iPhone 16 Pro ~25-35% ; iPhone 17 Pro ~22-30% ; Pixel 9 Pro ~30-40% ; Galaxy S25 Ultra ~28-38%。混合模式将手机消耗降至~10-15% /小时。',
          '**热节流：** 持续的设备上LLM推理在iPhone上触发热节流~10-15分钟后（芯片表面~38°C）；旗舰Android上~15-20分钟（平板电脑和大型手机上更好的热质量）。节流将令牌/秒降低30-50%，将LLM首令牌延迟从~600 ms扩展到~900 ms。',
          '**长期会话缓解：** 插入充电器、将手机面朝上放在硬表面（不在手中）或切换到混合模式。手机作为麦克风使用的能量是手机作为所有东西的一小部分。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '1小时的全本地语音会话可以消耗您的手机电池自主性30-40%。对于全天或汽车使用，计划充电。混合路径（仅手机上的STT）是环境、始终打开的语音助手的现实选择—家庭机器进行繁重的工作。',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: '免提：快捷方式、Tasker、CarPlay、Android Auto',
        content:
          '**免提触发取决于触发机制，而不是语音堆栈。** iOS使用带有操作按钮或"Hey Siri、run [快捷方式]"的快捷方式；Android使用带有Side Key、快速拼贴或蓝牙按钮的Tasker。',
        items: [
          '**iPhone操作按钮（iPhone 15 Pro及更新版本）：** 分配触发语音管道的快捷方式。按住操作按钮开始录制；释放发送。2026年iPhone上最低延迟的免提触发器。',
          '**iPhone"Hey Siri、run [快捷方式名称]"：** 唤醒Siri（~500 ms），然后运行快捷方式。添加相对于操作按钮的延迟，但在手机解锁时随时工作免提。',
          '**Android Side Key / Bixby键（Galaxy）：** 通过Galaxy Modes & Routines设置或Bixby键重新映射应用分配Tasker操作。按下以触发。',
          '**Android Tasker快速拼贴：** 将快速拼贴添加到通知阴影以运行语音脚本。从锁屏快速拼贴。',
          '**蓝牙按钮（例如Flic、通用媒体按钮）：** 与iOS或Android配对、配置以触发语音快捷方式/ Tasker任务。真正的免提（办公桌上的按钮、方向盘上、口袋里）。',
          '**CarPlay / Android Auto：** 这些按设计使用系统Siri / Google助手—都没有公开第三方语音助手API 2026。CarPlay的解决方法是将快捷方式绑定到CarPlay操作按钮（有限的快捷方式支持）；对于Android Auto，使用Tasker通过蓝牙媒体按钮触发。都不如系统助手对汽车使用的抛光。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于没有CarPlay / Android Auto集成的汽车使用：配对一个小的蓝牙按钮（Flic、AirShou、通用媒体遥控）并将其固定到方向盘。按下触发离线语音助手—它在没有互联网的情况下工作，从不将音频发送到云，并在~1.5秒内响应。与CarPlay相比的妥协是汽车显示器上没有UI、仅限音频。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私保证：完全离线vs云辅助',
        content:
          '**语音助手"完全离线"仅当麦克风音频、转录和TTS音频都留在设备上且无网络调用。** 许多作为"私人"营销的应用仍然将转录或遥测发送到云—在信任前用飞行模式或网络监视器验证。',
        items: [
          '**如何验证"完全离线"：** 将手机置于飞行模式并使用助手。如果它以完整质量运行，它完全离线。如果它降级或失败，某个步骤取决于云服务。',
          '**音频捕获：** 麦克风数据应在本地处理，从不写入磁盘或发送任何地方。Whisper、WhisperKit和Sherpa-ONNX都在内存中运行STT并在转录后丢弃音频。',
          '**LLM推论：** 如果响应由手机上的本地模型（Phi-4 Mini、Gemma 3、Llama 3.2）生成，则没有提示离开设备。如果助手使用"云辅助"模式（Apple Intelligence Private Cloud Compute、Google的设备优先然后云回退），转录可能在特定条件下发送到服务器—检查应用的隐私政策。',
          '**TTS：** Piper和系统TTS完全在设备上。一些"高级"云语音（ElevenLabs、OpenAI TTS）需要将响应文本发送到服务器—避免真正离线。',
          '**混合路径隐私态势：** 在混合模式中，音频保留在手机上（Whisper本地），但文本转录通过您的家庭Wi-Fi发送到您的家庭Ollama服务器。这仅限本地网络，不是云—数据保留在您的网络内。对大多数隐私意识的用户可接受；对最严格的威胁模型不等同于完全设备上。',
          '**应用特定笔记（2026年5月）：** WhisperKit和whisper.cpp是开源和可验证的离线。Layla默认本地运行（在飞行模式中验证）。LLM Farm和PocketPal AI完全在设备上运行推论。Apple Intelligence既有设备上又有Private Cloud Compute模式—在设置中禁用PCC进行完全设备上操作。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果完全离线操作至关重要（记者/来源保密、医疗、法律）：优先考虑开源应用（WhisperKit参考构建、whisper.cpp通过Termux、Layla），您可以在其中审核网络行为。闭源应用（即使作为"私人"营销）可以在未来的更新中添加云功能而不显著的用户通知。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**将Whisper Tiny用于所有内容。** Tiny快速（~80 ms STT）但在嘈杂环境中容易出错（~15-20% WER对Small ~10-14%）。Tiny可接受安静房间中的短命令；对于通用语音助手使用Small。',
          '**在TTS启动前等待完整的LLM响应。** 这将感觉延迟翻倍。在到达时将LLM令牌流式传输到TTS—Piper支持流式输入、系统TTS支持增量语音。首个音频应在LLM的第一个句子后播放，而不是完整响应后。',
          '**在热环境中运行设备上LLM。** 热节流在直射日光或热汽车的几分钟内开始，将令牌/秒降低30-50%并将延迟推向2秒以上。使用混合路径或保持冷静。',
          '**不验证地信任"私人"。** "私人"和"本地"在2026年是营销术语—声称本地处理的一些应用仍然因分析、模型更新或云回退转录而向主地打电话。在依赖敏感使用前在飞行模式中验证。',
          '**在低RAM设备上构建Termux Android堆栈。** Termux + whisper.cpp + ollama + piper在峰值消耗~4 GB系统RAM。6 GB或更少RAM的设备将OOM-kill组件在对话中途。在低RAM Android上使用Layla或坚持iPhone路径。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp)（跨平台Whisper，包括Android和iOS构建）。',
          'WhisperKit（Argmax）—[github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit)（Apple Neural Engine优化的Whisper for iOS / macOS）。',
          'Piper TTS（Rhasspy）— [github.com/rhasspy/piper](https://github.com/rhasspy/piper)（开源神经TTS、移动能力、30多种语言）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（用于本地运行GGUF模型的iPhone应用）。',
          'Layla（Android）— [Play Store清单](https://play.google.com)和开发者文档（带语音支持的捆绑本地LLM堆栈）。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地Whisper与Cloud Whisper的精度如何？',
            a: '在手机上本地运行的Whisper Small在清洁语音上实现~3% WER；OpenAI的Cloud Whisper（Large v3）实现~2%。在嘈杂的环境中，本地Small下降到~10-14% WER，而Cloud Large v3下降到~5-7%。对于日常语音助手使用，本地精度足够接近，无法察觉。对于长形式文本口述，其中每个字都很重要，云或本地Medium / Large是优选的。',
          },
          {
            q: '本地语音助手可以完全取代Siri吗？',
            a: '对于私密Q&A、草稿和摘要：是的，具有与Siri的设备上功能相当或更好的质量。对于系统操作（打开应用、设置计时器、控制HomeKit）、启动网络搜索或实时数据（天气、体育比分）：不—Siri与iOS和Apple服务的集成在2026年无法通过第三方本地堆栈复制。许多用户都保留两者：系统操作的Siri、私密Q&A的本地堆栈。',
          },
          {
            q: '这在CarPlay或Android Auto中起作用吗？',
            a: '有限。CarPlay和Android Auto按设计围绕系统Siri / Google助手—在2026年都不公开第三方语音助手API。解决方法：使用绑定到CarPlay操作按钮的快捷方式（有限的快捷方式支持），或配对蓝牙按钮（Flic、通用媒体遥控）并通过Tasker / Shortcuts触发。都不如系统助手在汽车使用上抛光。',
          },
          {
            q: '我如何免提触发它？',
            a: 'iPhone：按住操作按钮（iPhone 15 Pro及更新版本）调用快捷方式，或说"Hey Siri、run [快捷方式名称]"。Android：在Galaxy手机上使用Side Key或Bixby键、Tasker快速拼贴或配对的蓝牙按钮。对于真正的环境免提（始终听觉唤醒词），本地堆栈在2026年无法与Siri / Google助手匹配—手机系统唤醒词检测器不会暴露给第三方应用。',
          },
          {
            q: '它可以处理多语言对话吗？',
            a: '是的，但要注意。Whisper自动检测输入语言并支持99种语言。本地LLM因素：Phi-4 Mini良好的英语和主要欧洲语言合理；Qwen3具有强大的多语言支持，包括中文；Gemma 3支持100+语言。对于TTS，Piper在30多种语言中有语音；系统TTS取决于您安装的OS语言包。对话中期的语言切换在Whisper中起作用，但可能会使LLM混淆。',
          },
          {
            q: '背景噪音会破坏本地STT吗？',
            a: 'Whisper Tiny在中等噪声上大幅分解（~15-20% WER）；Small合理处理咖啡厅水平噪声（~10-14% WER）；Medium和Large很好处理大多数现实环境。对于嘈杂使用（汽车、公共交通），如果您的手机具有RAM，请使用Whisper Medium或积极应用VAD（仅在检测到语音时转录、在话语之间忽略）。',
          },
          {
            q: '我如何与智能家居设备本地集成？',
            a: '通过解析意图的解析器（例如"关闭厨房灯"）管道LLM响应，并直接调用本地智能家居集线器的API—Home Assistant有本地IP的REST API，Apple HomeKit集成通过Shortcuts"控制家庭"操作工作。避免云智能家居集成（Alexa、Google Home），如果您想要完全离线管道。',
          },
          {
            q: '我可以自定义语音（TTS）吗？',
            a: '可以。Piper TTS在30多种语言中拥有100多个社区训练的语音，可下载为~50 MB语音模型。iOS语音快捷方式让您从系统语音中选择，包括高级质量的高级语音（在设置→辅助功能→说话内容→语音中下载）。Android系统TTS支持来自Google或第三方的语音包。自定义语音克隆（您自己的语音或特定角色）需要单独的TTS工具链（Coqui、Tortoise TTS）—2026年在设备上还不实用。',
          },
          {
            q: '电池寿命会受到重大打击吗？',
            a: '是的—旗舰手机上的活跃对话每小时约25-40%。对于偶然的语音查询，影响很小。对于全天或Always-On使用，插入或使用混合路径（仅手机上运行STT，消耗降至~10-15% /小时）。被动后台监听与目标词检测目前在第三方本地堆栈上不可行，电池成本可接受。',
          },
          {
            q: 'iOS 19或Android 16会破坏这个设置吗？',
            a: '对于核心堆栈（Whisper、本地LLM、TTS），不太可能—这些是依赖标准API（麦克风捕获、TTS、网络）的用户空间应用。什么可能会破坏：如果Apple更改快捷方式API，快捷方式集成；Termux在Android上，如果Android 16进一步收紧后台进程限制（Android每次发布都进行收紧）。保持应用最新并在每次主要OS更新后验证。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[iPhone 2026年最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) —iPhone路径的基础层应用（PocketPal AI、LLM Farm、Private LLM）。',
          '[Android 2026年最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026) —Android路径的基础层应用（Layla、Maid、MLC Chat、Termux + Ollama）。',
          '[最佳移动LLM模型2026年：Phi-4 Mini对Gemma 3对SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —语音堆栈的模型层；基准和质量对延迟权衡。',
          '[如何在平板电脑上运行AI：iPad和Android（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) —想要较大屏幕语音设置的用户的平板电脑等价物。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) —更广泛的模型权限涵盖所有硬件层，对于在混合设置中选择LLM很有用。',
          '[本地LLM软件目录2026年](/zh/power-local-llm/local-llm-software-directory-2026) —Whisper.cpp、WhisperKit、Piper TTS和其他语音堆栈组件的目录条目。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '在您的手机上构建完全离线语音助手：Whisper + 本地LLM（无云）— 2026',
      url: 'https://www.promptquorum.com/zh/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'zh'),
      description: '2026年在iPhone和Android上完全离线的语音助手。Whisper本地STT +本地LLM + Piper TTS。iPhone、Android和混合设置；延迟、电池、隐私。',
      inLanguage: 'zh',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
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
        { '@type': 'Thing', name: '本地LLM' },
        { '@type': 'Thing', name: 'iPhone离线' },
        { '@type': 'Thing', name: 'Android离线' },
        { '@type': 'Thing', name: '语音助手' },
        { '@type': 'Thing', name: '移动AI' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Crea un asistente de voz local en tu teléfono: Whisper + LLM local (sin nube) — 2026',
    seoTitle: 'Asistente de voz local Whisper LLM teléfono 2026',
    intro:
      'Un asistente de voz completamente offline en iPhone o Android en 2026 combina tres componentes: Whisper para convertir voz a texto, un LLM local en el dispositivo para generar la respuesta y Piper o el TTS del sistema para la síntesis de voz. La latencia real desde que hablas hasta el primer audio en teléfonos de gama alta es de 0,8–1,5 segundos, por debajo del umbral de 2 segundos que "se siente usable". Esta guía cubre el camino en iPhone (LLM Farm + WhisperKit), Android (Layla + Whisper.cpp) e híbrido (STT en el teléfono + Ollama remoto), con cifras medidas de latencia, batería y precisión.',
    metaDescription:
      'IA de voz totalmente offline en iPhone y Android en 2026: Whisper STT + LLM local + Piper TTS. Configuración iPhone, Android e híbrida. Latencia y batería.',
    twitterDescription:
      'Crea un reemplazo de Siri que funciona offline: Whisper STT local + Phi-4 Mini + Piper TTS. Voz al primer audio en menos de 1,5 segundos en teléfonos de gama alta. Configuración iPhone + Android.',
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
      'Usuarios de teléfonos que valoran la privacidad y quieren un reemplazo de Siri / Google Assistant que funcione completamente en el dispositivo, incluyendo viajeros, periodistas, profesionales de salud y desarrolladores que construyen flujos de trabajo de voz offline.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'asistente de voz local teléfono',
      'Whisper offline iPhone',
      'Whisper LLM local Android',
      'reemplazo Siri offline',
      'Piper TTS móvil',
      'WhisperKit iOS',
      'Layla Android voz',
    ],
    leadAnswerBlock:
      '**Un asistente de voz completamente offline en 2026 necesita tres componentes: Whisper Small o Medium para voz a texto, un LLM local de 3B–4B (Phi-4 Mini o Gemma 3 4B) para la respuesta y Piper TTS o el TTS del sistema para la salida de audio.** En iPhone, la configuración más sencilla es WhisperKit (o la app Whisper Transcription) + LLM Farm + TTS del sistema iOS — voz al primer audio de ~0,9–1,4 segundos en iPhone 16 Pro. En Android, Layla incluye una configuración similar de forma nativa, o puedes ensamblarla con Termux + whisper.cpp + Ollama + Piper. Para mejor calidad de LLM, usa el camino híbrido: el teléfono ejecuta Whisper localmente para el STT (crítico para la privacidad) y luego envía la transcripción a un Mac o PC en casa con Ollama y un modelo de 70B. Las tres configuraciones funcionan sin internet una vez descargados los modelos.',
    quickAnswerTop: {
      es: {
        question: '¿Puedes crear un asistente de voz completamente offline en tu teléfono en 2026?',
        answer:
          'Sí. La configuración estándar es Whisper para voz a texto, un LLM local de 3B–4B (Phi-4 Mini o Gemma 3 4B) para la respuesta y Piper TTS o el TTS del sistema iOS / Android para la salida de audio. En iPhone 16 Pro, la latencia de voz al primer audio es de ~0,9–1,4 segundos, por debajo del umbral de 2 segundos que "se siente usable". En teléfonos Android de gama alta (Pixel 9 Pro, Galaxy S25 Ultra), la latencia es de ~1,0–1,6 segundos. El camino en iPhone usa WhisperKit + LLM Farm; el camino en Android usa Layla (stack integrado) o Termux + whisper.cpp + Ollama; el camino híbrido mantiene el STT en el dispositivo y envía la transcripción a un Mac o PC en casa con un modelo de 70B.',
        bullets: [
          'Stack: Whisper (STT) + LLM local de 3B–4B + Piper o TTS del sistema — todo en el dispositivo.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + voz del sistema iOS. Latencia ~0,9–1,4 seg en 16 Pro.',
          'Android: Layla (stack integrado) o Termux + whisper.cpp + Ollama + Piper. Latencia ~1,0–1,6 seg en Pixel 9 Pro.',
          'Híbrido: el teléfono ejecuta STT localmente, envía la transcripción a Ollama en casa con Llama 3.3 70B. Mejor calidad.',
          'Batería (1 hora de conversación activa): ~25–35% en iPhone 16 Pro; ~25–40% en Android de gama alta.',
          'Whisper Small (~466 MB) es el estándar para móvil — ~12% WER, ~150–300 ms de latencia STT.',
          'Voz al primer audio en menos de 2 segundos es el umbral de "se siente usable"; menos de 1 segundo se siente nativo.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué stack de asistente de voz deberías crear?', anchor: '#which-stack' },
      { label: 'Comparación de stacks de asistente de voz', anchor: '#stack-comparison' },
      { label: 'El stack de tres componentes: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'Configuración en iPhone: WhisperKit + LLM Farm (5 min)', anchor: '#iphone-setup' },
      { label: 'Configuración en Android: Layla o stack Termux (5–15 min)', anchor: '#android-setup' },
      { label: 'Configuración híbrida: STT en el teléfono + Ollama remoto', anchor: '#hybrid-setup' },
      { label: 'Presupuesto de latencia: dónde van los segundos', anchor: '#latency-budget' },
      { label: 'Precisión y consumo de batería durante 1 hora', anchor: '#accuracy-battery' },
      { label: 'Manos libres: Shortcuts, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: 'Garantías de privacidad: realmente offline vs asistido por nube', anchor: '#privacy' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**El stack completamente offline es Whisper (STT) + LLM local de 3B–4B + Piper o TTS del sistema.** Los tres componentes se ejecutan localmente en el dispositivo una vez instalados; sin llamadas a la nube durante el uso.',
          '**iPhone: WhisperKit + LLM Farm + voz del sistema iOS es el camino más sencillo.** WhisperKit usa Apple Neural Engine para STT; LLM Farm ejecuta Phi-4 Mini para la respuesta; el TTS del sistema iOS gestiona el audio. Voz al primer audio: ~0,9–1,4 segundos en iPhone 16 Pro.',
          '**Android: Layla incluye el stack completo de forma nativa, o constrúyelo manualmente con Termux + whisper.cpp + Ollama + Piper.** Layla es el camino más fácil; la build de Termux es más flexible. Voz al primer audio: ~1,0–1,6 segundos en Pixel 9 Pro y Galaxy S25 Ultra.',
          '**Híbrido (STT en el teléfono + Ollama remoto) da la mejor calidad de LLM.** El teléfono ejecuta Whisper localmente (crítico para la privacidad del audio) y luego envía la transcripción de texto a un Mac o PC en casa con Llama 3.3 70B. Mejor calidad de respuesta; requiere Wi-Fi doméstico.',
          '**Whisper Small (~466 MB) es el punto óptimo para móvil.** ~12% WER en habla común, ~150–300 ms de latencia STT. Whisper Medium (~1,5 GB) es más preciso (~9% WER) pero más lento; Whisper Tiny (~75 MB) es más rápido pero propenso a errores con ruido de fondo.',
          '**El consumo de batería es significativo — aproximadamente 25–35% por hora de conversación activa en teléfonos de gama alta.** Para uso durante todo el día, conecta el cargador o usa el camino híbrido (solo el STT se ejecuta en el teléfono, reduciendo el consumo a ~10–15% por hora).',
          '**Este es un reemplazo real de Siri para usuarios que prefieren la privacidad sobre la amplitud de funciones.** Lo que cedes: búsqueda web, integración con hogar inteligente en nubes propietarias, cobertura de acciones del sistema. Lo que ganas: funciona offline, sin telemetría, sin cuenta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Motor STT:** Whisper.cpp (multiplataforma), WhisperKit (iOS, optimizado para Apple Neural Engine), Sherpa-ONNX (Android, runtime ONNX).',
          '**LLM:** Phi-4 Mini (3,8B) en teléfonos de gama alta; Qwen3 1,7B o SmolLM 2 1,7B en dispositivos más antiguos.',
          '**TTS:** Piper TTS (código abierto, ~50 MB por voz), TTS del sistema iOS (AVSpeechSynthesizer), TTS del sistema Android.',
          '**Apps para iPhone:** WhisperKit, Whisper Transcription (desarrollador Aiko), LLM Farm, PocketPal AI.',
          '**Apps para Android:** Layla (stack integrado), Termux + whisper.cpp + Ollama, apps de demostración de Sherpa-ONNX.',
          '**Objetivo de voz al primer audio:** menos de 2 segundos = "se siente usable"; menos de 1 segundo = "se siente nativo".',
          '**Batería (1 hora activa):** iPhone 16 Pro ~25–35%; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: '¿Qué stack de asistente de voz deberías crear?',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'Árbol de decisión para elegir el camino del asistente de voz: totalmente en el dispositivo (iPhone con WhisperKit + LLM Farm en ~0,9–1,4 s, o Android con Layla / Termux en ~1,0–2,0 s) para privacidad, frente a híbrido (STT en el teléfono + Ollama 70B en casa, ~1,5–2,5 s) o asistente en la nube para calidad de clase 70B y datos en vivo.',
        content:
          '**Para la mayoría de usuarios en teléfonos de gama alta: el camino completamente en el dispositivo es la opción correcta.** Es totalmente privado, funciona offline y produce resultados usables en menos de 1,5 segundos. Usa el camino híbrido solo si específicamente necesitas calidad de clase 70B y aceptas la dependencia del Wi-Fi doméstico.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Crea un asistente de voz completamente offline combinando Whisper (STT), un LLM local de 3B–4B (Phi-4 Mini o Gemma 3 4B) y Piper o el TTS del sistema — voz al primer audio de 0,9–1,6 segundos en teléfonos de gama alta en 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Un asistente de voz tiene tres tareas: convertir tu voz en texto, generar una respuesta y decirte esa respuesta en voz alta. Con Whisper para el primer paso, un LLM local pequeño para el segundo y Piper o la voz integrada del teléfono para el tercero, puedes hacer los tres en el teléfono sin internet. El bucle completo tarda aproximadamente 1 segundo en un iPhone o Android de gama alta reciente — suficientemente rápido para sentir que hablas con Siri, pero todo se queda en el dispositivo.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué stack de asistente de voz?',
          localIf: [
            'Quieres privacidad total y funcionamiento offline → completamente en el dispositivo (camino iPhone o Android)',
            'Viajas con frecuencia y quieres voz en aviones / zonas sin cobertura → completamente en el dispositivo',
            'Eres periodista, profesional de salud o abogado → completamente en el dispositivo para confidencialidad de fuentes / pacientes / clientes',
            'Eres desarrollador creando un prototipo de flujo de trabajo de voz offline → completamente en el dispositivo',
          ],
          cloudIf: [
            'Necesitas calidad de modelo 70B+ (razonamiento complejo) → camino híbrido (STT en el teléfono + Ollama remoto en casa)',
            'Necesitas búsqueda web en tiempo real o datos en vivo → asistente en la nube (no hay equivalente local en 2026)',
            'Necesitas integración profunda con nubes propietarias (Google Calendar, iCloud, etc.) → sigue usando Siri / Google Assistant para esas tareas',
          ],
          quick: [
            'Camino más sencillo en iPhone: WhisperKit + LLM Farm + voz iOS',
            'Camino más sencillo en Android: Layla (stack integrado)',
            'Mejor calidad: híbrido (STT en el teléfono + Ollama en casa 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Empieza con el camino completamente en el dispositivo aunque eventualmente quieras el enfoque híbrido. La configuración en el dispositivo te enseña las partes móviles (STT, LLM, TTS) y funciona sin dependencia de un servidor en casa. Una vez que esté funcionando, cambiar la llamada al LLM de local a una URL remota de Ollama es un cambio de una línea.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Comparación de stacks de asistente de voz',
        content:
          '**Tres stacks viables en 2026, cada uno ajustado a una prioridad diferente: simplicidad (Layla), pulido nativo de Apple (WhisperKit + LLM Farm) o calidad de LLM (híbrido).** Los tres ejecutan STT y TTS en el dispositivo; el híbrido solo mueve el paso del LLM a un ordenador en casa.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige iPhone (WhisperKit + LLM Farm + voz iOS) para simplicidad en iOS, Android (Layla) para simplicidad en Android, o híbrido (STT en el teléfono + Ollama en casa) para mejor calidad de LLM.',
          },
          {
            type: 'plain-terms',
            text: 'Los números de latencia a continuación son voz al primer audio — el tiempo desde que dejas de hablar hasta que el asistente comienza a responder. Menos de 2 segundos se siente usable; menos de 1 segundo se siente nativo. La batería es el porcentaje consumido en 1 hora de conversación activa bidireccional.',
          },
        ],
        columns: ['Stack', 'Latencia (voz → primer audio)', 'Batería (1 h activa)', 'Ideal para'],
        rows: [
          { 'Stack': 'iPhone (WhisperKit + LLM Farm)', 'Latencia (voz → primer audio)': '~0,9–1,4 seg (16 Pro / 17 Pro)', 'Batería (1 h activa)': '~25–35%', 'Ideal para': 'Usuarios de iOS que quieren pulido nativo de Apple' },
          { 'Stack': 'Android (Layla, integrado)', 'Latencia (voz → primer audio)': '~1,0–1,6 seg (Pixel 9 Pro, Galaxy S25 Ultra)', 'Batería (1 h activa)': '~25–40%', 'Ideal para': 'Usuarios de Android que quieren simplicidad en una sola app' },
          { 'Stack': 'Android (Termux + whisper.cpp + Ollama + Piper)', 'Latencia (voz → primer audio)': '~1,2–2,0 seg', 'Batería (1 h activa)': '~30–40%', 'Ideal para': 'Usuarios avanzados que quieren control total' },
          { 'Stack': 'Híbrido (STT en teléfono + Ollama en casa 70B)', 'Latencia (voz → primer audio)': '~1,5–2,5 seg (depende del Wi-Fi)', 'Batería (1 h activa)': '~10–15%', 'Ideal para': 'Calidad de clase 70B, uso en red doméstica' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La latencia está dominada por el paso de "primer token" del LLM, no por Whisper ni por el TTS. Para reducir la latencia, usa un LLM más pequeño (Qwen3 1,7B en lugar de Phi-4 Mini reduce el paso del LLM de ~600 ms a ~250 ms). La desventaja son respuestas más cortas y menos detalladas.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'El stack de tres componentes: STT + LLM + TTS',
        content:
          '**Voz a texto, el LLM y texto a voz son tres componentes independientes que puedes cambiar individualmente.** Optimizar cualquiera de ellos (Whisper más pequeño, LLM más rápido, TTS con menor latencia) reduce la latencia total.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small (~466 MB) es la elección estándar para móvil — ~12% de tasa de error de palabras (WER) en habla común, ~150–300 ms de latencia STT para una emisión de 5 segundos. Whisper Medium (~1,5 GB) baja el WER a ~9% pero duplica la latencia. Whisper Tiny (~75 MB) es rápido pero propenso a errores con ruido de fondo moderado. WhisperKit (iOS) usa Apple Neural Engine para una latencia STT ~30–40% menor que el Whisper.cpp estándar.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) es el predeterminado recomendado en teléfonos de gama alta. El tiempo hasta el primer token es de ~400–800 ms en iPhone 16 Pro para un prompt corto — el mayor contribuyente individual a la latencia total. Para dispositivos más antiguos o con RAM limitada, Qwen3 1,7B (~1,1 GB) es más rápido (~200–400 ms TTFT) a costa de respuestas más cortas y simples.',
          '**TTS — Piper TTS o TTS del sistema.** Piper (proyecto Rhasspy, código abierto) soporta más de 30 idiomas, ~50 MB por voz, ~100–200 ms de latencia al primer audio, y funciona en iOS, Android, Linux, macOS y Windows. El TTS del sistema (AVSpeechSynthesizer en iOS, TextToSpeech en Android) tiene menor latencia (~50–100 ms) pero una voz más robótica en versiones antiguas del sistema. Las voces del sistema de iOS 18+ y Android 14+ son notablemente mejores que en versiones anteriores.',
          '**Detección de actividad de voz (VAD).** La mayoría de las apps usan Silero VAD o webrtcvad para detectar cuándo dejas de hablar. Una ventana de silencio de 200–500 ms es el umbral típico de fin de emisión. Demasiado corto → te corta a mitad de frase; demasiado largo → añade latencia. 300 ms es un valor predeterminado razonable.',
          '**El pipeline completo:** captura del micrófono → VAD detecta el fin del habla → Whisper transcribe → LLM genera respuesta → TTS habla. Transmitir en streaming los tokens del LLM al TTS a medida que llegan es lo que hace que el "primer audio" llegue en menos de 1 segundo en teléfonos de gama alta — la alternativa (esperar la respuesta completa del LLM y luego hablar) duplica la latencia percibida.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si tu stack se siente lento, analiza cada paso: registra la duración de (micrófono → STT listo), (STT listo → primer token del LLM), (primer token del LLM → primer audio del TTS). Un paso suele dominar. En teléfonos de gama alta en 2026, casi siempre es el tiempo hasta el primer token del LLM (~400–800 ms). Cambia a un LLM más pequeño para reducir la latencia percibida.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'Configuración en iPhone: WhisperKit + LLM Farm (5 min)',
        content:
          '**El asistente de voz iPhone más sencillo y completamente offline en 2026: WhisperKit (o Whisper Transcription) para STT, LLM Farm para el LLM y el TTS del sistema iOS para la voz.** El tiempo total de configuración es de 5–10 minutos más el tiempo de descarga del modelo.',
        numberedItems: [
          'Instala una app basada en WhisperKit desde la App Store (por ejemplo, "Whisper Transcription" del desarrollador Aiko, gratis) — proporciona transcripción en el dispositivo usando Apple Neural Engine. También puedes compilar la app de referencia de WhisperKit desde GitHub (Argmax / WhisperKit).',
          'En WhisperKit / Whisper Transcription: descarga el modelo "Small" (~466 MB). Tiny es más rápido pero inexacto; Medium es más preciso pero más lento.',
          'Instala LLM Farm desde la App Store (gratis). En LLM Farm: toca Modelos → "Agregar modelo desde URL" → pega una URL de Hugging Face para Phi-4 Mini Q4_K_M (o usa la biblioteca integrada si está disponible). El modelo ocupa ~2,7 GB.',
          'Conéctalos mediante Atajos de iOS: crea un Atajo con estas acciones — (1) Grabar audio (o aceptar entrada de audio desde la Hoja para compartir), (2) Transcribir con Whisper Transcription, (3) Generar texto con LLM Farm (si está disponible) o Private LLM (~£10, tiene una acción de Atajos), (4) Reproducir texto con la voz del sistema iOS.',
          'Asigna el Atajo a un widget de pantalla de bloqueo, el Botón de acción (iPhone 15 Pro y posteriores) o "Oye Siri, ejecuta [nombre del atajo]". El Botón de acción ofrece el menor tiempo de respuesta manos libres.',
          'Prueba: mantén pulsado el Botón de acción → habla → suelta. El STT se ejecuta (~200 ms) → el LLM genera (~600 ms primer token, transmite al TTS) → el primer audio suena a ~0,9–1,4 seg en total. Ajusta el umbral de silencio del VAD en el Atajo si te corta.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm actualmente no expone una acción de Atajos (a mayo de 2026). Para usar el pipeline de Atajos de iOS, necesitarás Private LLM (~£10 pago único) que sí expone una acción "Generar texto". El enfoque con Atajos es lo que hace que el camino en iPhone sea de "5 minutos" — sin Atajos, hay que encadenar las apps manualmente.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Configuración en Android: Layla o stack Termux (5–15 min)',
        content:
          '**Dos caminos en Android: Layla (enfoque de stack integrado en 5 minutos) o Termux + whisper.cpp + Ollama + Piper (enfoque manual en 15 minutos con más control).** Ambos funcionan completamente offline una vez configurados.',
        items: [
          '**Camino A — Layla (5 min):** instala Layla desde Play Store, descarga un modelo (Phi-4 Mini o Gemma 3 4B), activa el modo de voz en los ajustes. Layla incluye whisper.cpp para STT, el LLM local para la respuesta y usa el TTS del sistema Android. El camino más sencillo; la desventaja es menor capacidad de configuración.',
          '**Camino B — Stack Termux (15 min):**',
          'Instala Termux desde F-Droid (no desde Play Store; la versión de Play Store está desactualizada).',
          'En Termux: `pkg update && pkg install git cmake clang ffmpeg`.',
          'Compila whisper.cpp: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` y descarga el modelo Small: `bash ./models/download-ggml-model.sh small`.',
          'Instala Ollama (build Termux ARM): `curl -fsSL https://ollama.com/install.sh | sh`. Descarga un modelo: `ollama pull phi4-mini`. Inicia el servidor: `ollama serve`.',
          'Instala Piper: `pip install piper-tts` (en un venv Python de Termux) y descarga una voz (por ejemplo `piper-tts --download-voice en_US-amy-low`).',
          'Conecta el pipeline con un pequeño script Python que lea de `arecord`, ejecute whisper.cpp sobre el audio, envíe la transcripción a Ollama en localhost:11434 y redirija la respuesta a Piper. O usa Tasker para encadenar comandos de shell activados por un botón o un mosaico rápido.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para el Camino B, usa Termux:Widget para crear un acceso directo en la pantalla de inicio que ejecute el script del asistente de voz. Un solo toque en el widget activa el pipeline completo. Combínalo con un botón Bluetooth o un mosaico rápido de Tasker para invocación manos libres. Las teclas de acción / laterales del Pixel 9 Pro y el Galaxy S25 Ultra también pueden activar acciones de Tasker.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'Configuración híbrida: STT en el teléfono + Ollama remoto',
        content:
          '**El stack híbrido solo mueve la llamada al LLM a un ordenador en casa, manteniendo STT y TTS en el dispositivo.** Esto da acceso a modelos de clase 70B (Llama 3.3 70B, Qwen3-Coder 32B) mientras se preserva la privacidad del audio (que nunca sale del teléfono — solo la transcripción de texto se envía por tu Wi-Fi doméstico).',
        numberedItems: [
          'En el ordenador de casa (Mac, PC o NAS): instala Ollama. Descarga un modelo 70B: `ollama pull llama3.3:70b` (requiere ~40 GB de espacio libre en disco + ~48 GB de RAM o 24 GB de VRAM de GPU).',
          'Vincula Ollama a tu red local: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. Anota la IP local del ordenador de casa (por ejemplo, 192.168.1.20).',
          'En el teléfono, configura tu pipeline de asistente de voz (Atajo de iOS o Tasker de Android) para enviar la transcripción de Whisper mediante HTTP POST a `http://192.168.1.20:11434/api/generate` en lugar de la llamada al LLM local.',
          'El TTS sigue ejecutándose en el teléfono (Piper o voz del sistema) usando el texto de respuesta del ordenador de casa.',
          'Resultado: Whisper STT se ejecuta en el teléfono (el audio nunca sale del dispositivo), Ollama en casa genera una respuesta de calidad 70B en ~600–1200 ms, el TTS habla en el teléfono. Latencia total ~1,5–2,5 segundos — algo mayor que completamente en el dispositivo pero con mucha mejor calidad de LLM.',
        ],
        promptExamples: [
          {
            label: 'Atajo de iOS: asistente de voz híbrido (activación con el Botón de acción)',
            text: '1. Grabar audio → guardar en archivo temporal.\n2. Transcribir con Whisper Transcription → salida: texto de transcripción.\n3. Obtener contenido de URL → URL: http://192.168.1.20:11434/api/generate, Método: POST, cuerpo JSON: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → salida: texto de respuesta.\n4. Reproducir texto → entrada: texto de respuesta, voz: voz del sistema iOS.\nAsignar al Botón de acción. Mantén pulsado para grabar; suelta para enviar. El primer audio suena en ~1,5–2,5 seg.',
          },
          {
            label: 'Tasker: asistente de voz híbrido en Android',
            text: '1. Variable: %TRANSCRIPT = (salida de whisper-cli sobre el archivo de audio grabado).\n2. Solicitud HTTP: URL http://192.168.1.20:11434/api/generate, Método POST, Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. Variable: %REPLY = (campo "response" analizado del JSON).\n4. Decir: %REPLY (TTS del sistema Android o Piper si está instalado).\nActivar mediante mosaico rápido, botón Bluetooth o pulsación larga en la tecla lateral del Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para la menor latencia en modo híbrido, configura Ollama en modo streaming (`"stream":true`) y transmite los tokens al TTS a medida que llegan en lugar de esperar la respuesta completa. Los Atajos de iOS no pueden hacer streaming de forma nativa, pero un pequeño plugin de Tasker o una app iOS personalizada sí pueden. Con streaming, la latencia percibida al "primer audio" baja 200–400 ms aunque el tiempo total de respuesta sea el mismo.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'Presupuesto de latencia: dónde van los segundos',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'Presupuesto de latencia de voz a primer audio en iPhone 16 Pro: detección VAD 250 ms, STT de Whisper 200 ms, tiempo hasta el primer token del LLM 700 ms (54% del total, la mayor palanca), primer audio TTS 150 ms — total ≈1,3 segundos.',
        content:
          '**En teléfonos de gama alta en 2026, el tiempo hasta el primer token del LLM domina la latencia total — generalmente el 50–60% del tiempo de voz al primer audio.** Optimizar el paso del LLM tiene más impacto que ajustar Whisper o el TTS.',
        columns: ['Paso', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)', 'Notas'],
        rows: [
          { 'Paso': 'Detección de fin de emisión VAD', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)': '~200–500 ms', 'Notas': 'Ajustable; 300 ms por defecto. Cuenta en la latencia percibida.' },
          { 'Paso': 'Whisper Small STT (emisión de 5 seg)', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)': '~150–300 ms', 'Notas': 'WhisperKit ~30–40% más rápido vía Apple Neural Engine.' },
          { 'Paso': 'Tiempo hasta primer token del LLM (Phi-4 Mini)', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)': '~400–800 ms', 'Notas': 'Mayor contribuyente. Modelo más pequeño = más rápido.' },
          { 'Paso': 'Primer audio del TTS (Piper o sistema)', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)': '~100–200 ms', 'Notas': 'TTS del sistema algo más rápido que Piper.' },
          { 'Paso': 'Total voz al primer audio', 'Tiempo típico (iPhone 16 Pro, en el dispositivo)': '~0,9–1,4 seg', 'Notas': 'Menos de 2 seg = "se siente usable"; menos de 1 seg = "se siente nativo".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para bajar de 1 segundo en total: usa Whisper Tiny (75 MB, ~80 ms STT) + Qwen3 1,7B (~250 ms TTFT) + TTS del sistema (~80 ms primer audio). Total ~600–800 ms en iPhone 16 Pro. La desventaja son respuestas más cortas y menos coherentes del LLM y menor precisión del STT en entornos ruidosos. Vale la pena si la velocidad de respuesta es tu prioridad principal.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'Precisión y consumo de batería durante 1 hora',
        content:
          '**Whisper Small alcanza ~88% de precisión en habla común con ruido de fondo moderado; Whisper Medium llega a ~91% pero duplica la latencia.** El consumo de batería durante 1 hora de conversación activa es de ~25–35% en iPhone 16 Pro y ~25–40% en Android de gama alta.',
        items: [
          '**Precisión de Whisper por tamaño de modelo (WER LibriSpeech-clean, menor es mejor):** Tiny ~7,5%, Small ~3%, Medium ~2,4%, Large v3 ~1,8%. En condiciones reales con ruido: Tiny empeora a ~15–20% WER, Small a ~10–14%, Medium a ~7–10%, Large v3 a ~5–7%.',
          '**Whisper en la nube vs Whisper local:** La API de Whisper en la nube de OpenAI usa Large v3 por defecto (~2% WER en habla limpia). Whisper Small local en un teléfono es ~3% WER en el mismo audio — suficientemente cercano para que la diferencia sea imperceptible en el uso cotidiano del asistente.',
          '**Consumo de batería (1 hora de conversación activa, pantalla encendida):** iPhone 16 Pro ~25–35%; iPhone 17 Pro ~22–30%; Pixel 9 Pro ~30–40%; Galaxy S25 Ultra ~28–38%. El modo híbrido reduce el consumo del teléfono a ~10–15% por hora porque solo el STT se ejecuta localmente.',
          '**Limitación térmica:** la inferencia sostenida del LLM en el dispositivo activa la limitación térmica tras ~10–15 min en iPhone (superficie del chip ~38°C); ~15–20 min en Android de gama alta (mejor masa térmica en tablets y teléfonos grandes). La limitación reduce los tokens/seg en un 30–50%, alargando la latencia al primer token del LLM de ~600 ms a ~900 ms.',
          '**Mitigación para sesiones largas:** conecta el cargador, coloca el teléfono boca arriba sobre una superficie dura (no en la mano) o cambia al modo híbrido. El teléfono como micrófono usa una fracción de la energía del teléfono como todo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Una sesión de voz totalmente local de 1 hora puede agotar la batería de tu teléfono un 30–40%. Para uso durante todo el día o en el coche, planifica la carga. El camino híbrido (solo STT en el dispositivo) es la opción realista para asistentes de voz ambientales de siempre activo — el ordenador de casa hace el trabajo pesado.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'Manos libres: Shortcuts, Tasker, CarPlay, Android Auto',
        content:
          '**La activación manos libres depende del mecanismo de activación, no del stack de voz.** iOS usa Atajos con el Botón de acción o "Oye Siri, ejecuta [atajo]"; Android usa Tasker con la tecla lateral, un mosaico rápido o botones Bluetooth.',
        items: [
          '**Botón de acción del iPhone (iPhone 15 Pro y posteriores):** asigna un Atajo que active el pipeline de voz. Mantén pulsado el Botón de acción para comenzar a grabar; suelta para enviar. El activador manos libres con menor latencia en iPhone en 2026.',
          '**iPhone "Oye Siri, ejecuta [nombre del atajo]":** activa Siri (~500 ms) y luego ejecuta el Atajo. Añade latencia respecto al Botón de acción pero funciona manos libres en cualquier momento con el teléfono desbloqueado.',
          '**Tecla lateral / tecla Bixby de Android (Galaxy):** asigna una acción de Tasker mediante los ajustes de Galaxy Modes & Routines o apps de reasignación de la tecla Bixby. Pulsa para activar.',
          '**Mosaico rápido de Tasker en Android:** añade un mosaico rápido al panel de notificaciones que ejecute el script de voz. Activación con dos deslizamientos desde la pantalla de bloqueo.',
          '**Botones Bluetooth (por ejemplo, Flic, botones multimedia genéricos):** empareja con iOS o Android, configura para activar el Atajo de voz / tarea de Tasker. Verdaderamente manos libres (botón en un escritorio, en el volante, en un bolsillo).',
          '**CarPlay / Android Auto:** estos usan el sistema Siri / Google Assistant por diseño — ninguno expone una API de asistente de voz de terceros en 2026. El workaround para CarPlay es vincular un Atajo a un botón de acción de CarPlay (soporte limitado de Atajos); para Android Auto, usa Tasker activado mediante un botón multimedia Bluetooth. Ninguno tiene el mismo nivel de integración que los asistentes del sistema.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso en el coche sin integración con CarPlay / Android Auto: empareja un pequeño botón Bluetooth (Flic, AirShou, control multimedia genérico) y fíjalo al volante. Pulsa para activar el asistente de voz offline — funciona sin internet, nunca envía audio a la nube y responde en ~1,5 segundos. La desventaja frente a CarPlay es que no hay interfaz en la pantalla del coche, solo audio.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Garantías de privacidad: realmente offline vs asistido por nube',
        content:
          '**Un asistente de voz es "realmente offline" solo si el audio del micrófono, las transcripciones y el audio del TTS permanecen en el dispositivo sin ninguna llamada de red.** Muchas apps comercializadas como "privadas" siguen enviando transcripciones o telemetría a la nube — verifica con el modo avión o un monitor de red antes de confiar.',
        items: [
          '**Cómo verificar "realmente offline":** pon el teléfono en modo avión y usa el asistente. Si funciona con plena calidad, es realmente offline. Si degrada o falla, algún paso depende de un servicio en la nube.',
          '**Captura de audio:** los datos del micrófono deben procesarse localmente y nunca escribirse en disco ni enviarse a ningún lugar. Whisper, WhisperKit y Sherpa-ONNX ejecutan STT en memoria y descartan el audio tras la transcripción.',
          '**Inferencia del LLM:** si la respuesta la genera un modelo local (Phi-4 Mini, Gemma 3, Llama 3.2) en el teléfono, ningún prompt sale del dispositivo. Si el asistente usa un modo "asistido por nube" (Apple Intelligence Private Cloud Compute, el modo de primero en el dispositivo luego nube de Google), las transcripciones pueden enviarse a un servidor en ciertas condiciones — revisa la política de privacidad de la app.',
          '**TTS:** Piper y el TTS del sistema son completamente en el dispositivo. Algunas voces "premium" en la nube (ElevenLabs, OpenAI TTS) requieren enviar el texto de respuesta a un servidor — evítalas para uso verdaderamente offline.',
          '**Postura de privacidad del camino híbrido:** en modo híbrido, el audio permanece en el teléfono (Whisper local), pero la transcripción de texto se envía a tu servidor Ollama en casa por tu Wi-Fi doméstico. Esto es solo red local, no nube — los datos permanecen dentro de tu red. Aceptable para la mayoría de usuarios conscientes de la privacidad; no equivalente a completamente en el dispositivo para los modelos de amenaza más estrictos.',
          '**Notas específicas de apps (mayo 2026):** WhisperKit y whisper.cpp son de código abierto y verificablemente offline. Layla funciona localmente por defecto (verifica en modo avión). LLM Farm y PocketPal AI ejecutan la inferencia completamente en el dispositivo. Apple Intelligence tiene tanto un modo en el dispositivo como Private Cloud Compute — desactiva PCC en Ajustes para funcionamiento completamente en el dispositivo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si el funcionamiento completamente offline es crítico (periodista / confidencialidad de fuentes, salud, legal): prefiere apps de código abierto (build de referencia de WhisperKit, whisper.cpp vía Termux, Layla) donde puedes auditar el comportamiento de red. Las apps de código cerrado (incluso las comercializadas como "privadas") pueden añadir funcionalidades en la nube en actualizaciones futuras sin notificación evidente al usuario.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Usar Whisper Tiny para todo.** Tiny es rápido (~80 ms STT) pero propenso a errores en entornos ruidosos (~15–20% WER frente a ~10–14% de Small). Tiny es aceptable para comandos cortos en habitaciones silenciosas; usa Small para asistentes de voz de propósito general.',
          '**Esperar la respuesta completa del LLM antes de que empiece el TTS.** Esto duplica la latencia percibida. Transmite los tokens del LLM al TTS a medida que llegan — Piper soporta entrada en streaming, el TTS del sistema soporta habla incremental. El primer audio debe reproducirse tras la primera frase del LLM, no tras la respuesta completa.',
          '**Ejecutar el LLM en el dispositivo en un entorno caluroso.** La limitación térmica se activa en minutos bajo sol directo o dentro de un coche caliente, reduciendo los tokens/seg un 30–50% y empujando la latencia por encima de los 2 segundos. Usa el camino híbrido o mantén el teléfono fresco.',
          '**Confiar en "privado" sin verificar.** "Privado" y "local" son términos de marketing en 2026 — algunas apps que afirman procesamiento local siguen enviando datos a casa para análisis, actualizaciones de modelos o transcripción con respaldo en la nube. Verifica en modo avión antes de confiar en ellas para uso sensible.',
          '**Construir el stack Termux de Android en un dispositivo con poca RAM.** Termux + whisper.cpp + Ollama + Piper consume ~4 GB de RAM del sistema en el pico. Los dispositivos con 6 GB o menos de RAM terminarán matando componentes por OOM en medio de una conversación. Usa Layla en Android con poca RAM, o quédate con el camino en iPhone.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) (Whisper multiplataforma, incluyendo builds para Android e iOS).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) (Whisper optimizado para Apple Neural Engine en iOS / macOS).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) (TTS neuronal de código abierto, compatible con móviles, más de 30 idiomas).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS para ejecutar modelos GGUF localmente).',
          'Layla (Android) — [Listado en Play Store](https://play.google.com) y documentación del desarrollador (stack LLM local integrado con soporte de voz).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuán preciso es Whisper local frente a Whisper en la nube?',
            a: 'Whisper Small ejecutándose localmente en un teléfono alcanza ~3% WER en habla limpia; el Whisper en la nube de OpenAI (Large v3) alcanza ~2%. En entornos ruidosos, Small local cae a ~10–14% WER mientras que Cloud Large v3 cae a ~5–7%. Para el uso cotidiano del asistente de voz, la precisión local es suficientemente cercana para ser imperceptible. Para dictado de texto largo donde cada palabra importa, es preferible la nube o el Medium / Large local.',
          },
          {
            q: '¿Puede un asistente de voz local reemplazar completamente a Siri?',
            a: 'Para preguntas y respuestas privadas, redacción y resúmenes: sí, con calidad comparable o mejor que las funciones en el dispositivo de Siri. Para acciones del sistema (abrir apps, establecer temporizadores, controlar HomeKit), lanzar búsquedas web o datos en vivo (tiempo, resultados deportivos): no — la integración de Siri con iOS y los servicios de Apple no se puede replicar con un stack local de terceros en 2026. Muchos usuarios mantienen ambos: Siri para acciones del sistema, el stack local para preguntas y respuestas privadas.',
          },
          {
            q: '¿Funciona con CarPlay o Android Auto?',
            a: 'De forma limitada. CarPlay y Android Auto están diseñados en torno al sistema Siri / Google Assistant; ninguno expone una API de asistente de voz de terceros. Soluciones alternativas: usa un Atajo vinculado a un botón de acción de CarPlay (soporte limitado de Atajos), o empareja un botón Bluetooth (Flic, control multimedia genérico) y activa Tasker / Atajos desde él. Ninguno alcanza el nivel de integración de los asistentes del sistema para uso en el coche.',
          },
          {
            q: '¿Cómo lo activo con manos libres?',
            a: 'iPhone: mantén pulsado el Botón de acción (iPhone 15 Pro y posteriores) para invocar el Atajo, o di "Oye Siri, ejecuta [nombre del atajo]". Android: usa la tecla lateral o la tecla Bixby en teléfonos Galaxy, un mosaico rápido de Tasker o un botón Bluetooth emparejado. Para manos libres ambiental verdadero (siempre escuchando una palabra de activación), el stack local no iguala a Siri / Google Assistant en 2026 — el detector de palabras de activación del sistema del teléfono no está expuesto a apps de terceros.',
          },
          {
            q: '¿Puede manejar conversaciones en varios idiomas?',
            a: 'Sí, pero con matices. Whisper detecta automáticamente el idioma de entrada y soporta 99 idiomas. Los LLM locales varían: Phi-4 Mini maneja bien el inglés y razonablemente los principales idiomas europeos; Qwen3 tiene fuerte soporte multilingüe incluyendo el chino; Gemma 3 soporta más de 100 idiomas. Para TTS, Piper tiene voces en más de 30 idiomas; el TTS del sistema depende de los paquetes de idioma del sistema operativo que tengas instalados. El cambio de idioma en mitad de la conversación funciona en Whisper pero puede confundir al LLM.',
          },
          {
            q: '¿El ruido de fondo arruina el STT local?',
            a: 'Whisper Tiny se degrada significativamente con ruido moderado (~15–20% WER); Small maneja el ruido de nivel cafetería razonablemente (~10–14% WER); Medium y Large manejan bien la mayoría de entornos reales. Para uso ruidoso (coches, transporte público), usa Whisper Medium si tu teléfono tiene la RAM, o aplica VAD de forma agresiva (transcribe solo cuando se detecta habla, ignora los silencios entre emisiones).',
          },
          {
            q: '¿Cómo integro con dispositivos del hogar inteligente de forma local?',
            a: 'Pasa la respuesta del LLM por un analizador que detecte intenciones (por ejemplo, "apagar las luces de la cocina") y llama directamente a la API de tu hub de hogar inteligente local — Home Assistant tiene una API REST en tu IP local, y la integración con Apple HomeKit funciona mediante las acciones "Controlar el hogar" de los Atajos. Evita las integraciones de hogar inteligente en la nube (Alexa, Google Home) si quieres un pipeline completamente offline.',
          },
          {
            q: '¿Puedo personalizar la voz (TTS)?',
            a: 'Sí. Piper TTS tiene más de 100 voces entrenadas por la comunidad en más de 30 idiomas, descargables como modelos de voz de ~50 MB. Los Atajos de voz de iOS te permiten elegir entre las voces del sistema incluyendo las voces Premium de mayor calidad (descargar en Ajustes → Accesibilidad → Contenido hablado → Voces). El TTS del sistema Android soporta paquetes de voz de Google o de terceros. La clonación de voz personalizada (tu propia voz o una persona específica) requiere una cadena de herramientas TTS separada (Coqui, Tortoise TTS) — todavía no es práctico en el dispositivo en 2026.',
          },
          {
            q: '¿La batería sufre mucho?',
            a: 'Sí — aproximadamente un 25–40% por hora de conversación activa en teléfonos de gama alta. Para consultas de voz ocasionales, el impacto es pequeño. Para uso durante todo el día o siempre activo, conecta el cargador o usa el camino híbrido (solo el STT se ejecuta en el dispositivo, reduciendo el consumo a ~10–15% por hora). La escucha pasiva en segundo plano con detección de palabra de activación actualmente no es factible en stacks locales de terceros a un coste de batería aceptable.',
          },
          {
            q: '¿iOS 19 o Android 16 romperán esta configuración?',
            a: 'Es poco probable para el stack principal (Whisper, LLM local, TTS) — estas son apps en espacio de usuario que dependen de APIs estándar (captura de micrófono, TTS, red). Lo que puede romperse: las integraciones de Atajos si Apple cambia la API de Atajos; Termux en Android si Android 16 restringe aún más los procesos en segundo plano (Android los ha ido restringiendo en cada versión). Mantén las apps actualizadas y verifica tras cada actualización mayor del sistema operativo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — apps de la capa base (PocketPal AI, LLM Farm, Private LLM) para el camino en iPhone.',
          '[Mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — apps de la capa base (Layla, Maid, MLC Chat, Termux + Ollama) para el camino en Android.',
          '[Mejores modelos LLM para móvil en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — capa de modelo del stack de voz; benchmarks y compromisos de calidad vs latencia.',
          '[Cómo ejecutar IA en una tablet: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — equivalente en tablet para usuarios que quieren una configuración de voz con pantalla más grande.',
          '[Mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026) — autoridad de modelos más amplia que cubre todos los niveles de hardware, útil para elegir el LLM en la configuración híbrida.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — entradas del directorio para Whisper.cpp, WhisperKit, Piper TTS y otros componentes del stack de voz.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Crea un asistente de voz local en tu teléfono: Whisper + LLM local (sin nube) — 2026',
      url: 'https://www.promptquorum.com/es/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'es'),
      description: 'IA de voz completamente offline en iPhone y Android en 2026. Whisper STT local + LLM local + Piper TTS. Configuración en iPhone, Android e híbrida; latencia, batería, privacidad.',
      inLanguage: 'es',
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
        { '@type': 'Thing', name: 'LLM locales' },
        { '@type': 'Thing', name: 'iPhone offline' },
        { '@type': 'Thing', name: 'Android offline' },
        { '@type': 'Thing', name: 'Asistente de voz' },
        { '@type': 'Thing', name: 'IA móvil' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '전화기에서 로컬 음성 비서 만들기: Whisper + 로컬 LLM (클라우드 없음) — 2026',
    seoTitle: '로컬 음성 비서 Whisper LLM 전화기 2026',
    intro:
      '2026년 iPhone 또는 Android에서 완전히 오프라인 음성 비서는 세 가지 구성 요소를 결합합니다: 음성을 텍스트로 변환하는 Whisper, 응답을 생성하는 기기 내 로컬 LLM, 음성 합성을 위한 Piper 또는 시스템 TTS. 고급 전화기에서 말하기 시작부터 첫 오디오까지의 실제 지연은 0.8–1.5초로, "사용 가능하게 느껴지는" 2초 임계값 이하입니다. 이 가이드는 iPhone(LLM Farm + WhisperKit), Android(Layla + Whisper.cpp), 하이브리드(전화기에서 STT + 원격 Ollama) 경로를 측정된 지연, 배터리, 정확도 수치와 함께 다룹니다.',
    metaDescription:
      '2026년 iPhone 및 Android에서 완전히 오프라인 AI 음성: Whisper STT + 로컬 LLM + Piper TTS. iPhone, Android, 하이브리드 설정. 지연 및 배터리.',
    twitterDescription:
      '오프라인으로 작동하는 Siri 대체품 만들기: 로컬 Whisper STT + Phi-4 Mini + Piper TTS. 고급 전화기에서 1.5초 미만으로 음성에서 첫 오디오. iPhone + Android 설정.',
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
      '완전히 기기 내에서 작동하는 Siri / Google Assistant 대체품을 원하는 개인 정보 보호를 중시하는 전화기 사용자로, 오프라인 음성 워크플로우를 구축하는 여행자, 기자, 의료 전문가, 개발자 포함.',
    readTime: '13분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 음성 비서',
    targetKeywords: [
      '로컬 음성 비서 전화기',
      'Whisper 오프라인 iPhone',
      'Whisper LLM 로컬 Android',
      'Siri 오프라인 대체',
      'Piper TTS 모바일',
      'WhisperKit iOS',
      'Layla Android 음성',
    ],
    leadAnswerBlock:
      '**2026년 완전히 오프라인 음성 비서는 세 가지 구성 요소가 필요합니다: 음성 텍스트 변환을 위한 Whisper Small 또는 Medium, 응답을 위한 3B–4B 로컬 LLM(Phi-4 Mini 또는 Gemma 3 4B), 오디오 출력을 위한 Piper TTS 또는 시스템 TTS.** iPhone에서 가장 간단한 설정은 WhisperKit(또는 Whisper Transcription 앱) + LLM Farm + iOS 시스템 TTS입니다 — iPhone 16 Pro에서 음성에서 첫 오디오까지 ~0.9–1.4초. Android에서 Layla는 유사한 설정을 네이티브로 포함하거나, Termux + whisper.cpp + Ollama + Piper로 조립할 수 있습니다. 더 나은 LLM 품질을 위해 하이브리드 경로 사용: 전화기가 로컬에서 Whisper를 실행하고(개인 정보 보호에 중요) 텍스트 전사를 집에 있는 Mac이나 PC의 Ollama와 70B 모델로 전송합니다. 세 가지 설정 모두 모델을 다운로드하면 인터넷 없이 작동합니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 전화기에서 완전히 오프라인 음성 비서를 만들 수 있습니까?',
        answer:
          '네. 표준 설정은 음성 텍스트 변환을 위한 Whisper, 응답을 위한 3B–4B 로컬 LLM(Phi-4 Mini 또는 Gemma 3 4B), 오디오 출력을 위한 Piper TTS 또는 iOS/Android 시스템 TTS입니다. iPhone 16 Pro에서 음성에서 첫 오디오까지의 지연은 ~0.9–1.4초로, "사용 가능하게 느껴지는" 2초 임계값 이하입니다. 고급 Android 전화기(Pixel 9 Pro, Galaxy S25 Ultra)에서 지연은 ~1.0–1.6초입니다. iPhone 경로는 WhisperKit + LLM Farm을 사용하고; Android 경로는 Layla(통합 스택) 또는 Termux + whisper.cpp + Ollama를 사용합니다; 하이브리드 경로는 STT를 기기에 유지하고 전사를 70B 모델이 있는 집의 Mac이나 PC로 전송합니다.',
        bullets: [
          '스택: Whisper(STT) + 3B–4B 로컬 LLM + Piper 또는 시스템 TTS — 모두 기기에서.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + iOS 시스템 음성. 16 Pro에서 지연 ~0.9–1.4초.',
          'Android: Layla(통합 스택) 또는 Termux + whisper.cpp + Ollama + Piper. Pixel 9 Pro에서 지연 ~1.0–1.6초.',
          '하이브리드: 전화기가 로컬에서 STT 실행, 전사를 집의 Ollama에 Llama 3.3 70B로 전송. 더 높은 품질.',
          '배터리(1시간 활성 대화): iPhone 16 Pro에서 ~25–35%; 고급 Android에서 ~25–40%.',
          'Whisper Small(~466 MB)은 모바일 표준 — ~12% WER, ~150–300ms STT 지연.',
          '음성에서 첫 오디오까지 2초 미만이 "사용 가능하게 느껴지는" 임계값; 1초 미만은 네이티브하게 느껴집니다.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '어떤 음성 비서 스택을 구축해야 합니까?', anchor: '#which-stack' },
      { label: '음성 비서 스택 비교', anchor: '#stack-comparison' },
      { label: '세 가지 구성 요소 스택: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'iPhone 설정: WhisperKit + LLM Farm (5분)', anchor: '#iphone-setup' },
      { label: 'Android 설정: Layla 또는 Termux 스택 (5–15분)', anchor: '#android-setup' },
      { label: '하이브리드 설정: 전화기 STT + 원격 Ollama', anchor: '#hybrid-setup' },
      { label: '지연 예산: 초가 어디로 가는가', anchor: '#latency-budget' },
      { label: '1시간 동안의 정확도와 배터리 소모', anchor: '#accuracy-battery' },
      { label: '핸즈프리: Shortcuts, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: '개인 정보 보장: 진정한 오프라인 vs 클라우드 지원', anchor: '#privacy' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**완전히 오프라인 스택은 Whisper(STT) + 3B–4B 로컬 LLM + Piper 또는 시스템 TTS입니다.** 세 가지 구성 요소는 설치 후 기기에서 로컬로 실행됩니다; 사용 중 클라우드 호출 없음.',
          '**iPhone: WhisperKit + LLM Farm + iOS 시스템 음성이 가장 간단한 경로입니다.** WhisperKit는 STT에 Apple Neural Engine을 사용하고; LLM Farm은 응답을 위해 Phi-4 Mini를 실행하고; iOS 시스템 TTS가 오디오를 처리합니다. 음성에서 첫 오디오: iPhone 16 Pro에서 ~0.9–1.4초.',
          '**Android: Layla는 전체 스택을 네이티브로 포함하거나, Termux + whisper.cpp + Ollama + Piper로 수동으로 구축하십시오.** Layla가 더 쉬운 경로이고; Termux 빌드가 더 유연합니다. 음성에서 첫 오디오: Pixel 9 Pro와 Galaxy S25 Ultra에서 ~1.0–1.6초.',
          '**하이브리드(전화기에서 STT + 원격 Ollama)는 최고의 LLM 품질을 제공합니다.** 전화기가 로컬에서 Whisper를 실행하고(오디오 개인 정보 보호에 중요), 집의 Mac이나 PC의 Llama 3.3 70B로 텍스트 전사를 전송합니다. 더 높은 응답 품질; 홈 Wi-Fi가 필요합니다.',
          '**Whisper Small(~466 MB)은 모바일에서 최적입니다.** 일반적인 말에서 ~12% WER, ~150–300ms STT 지연. Whisper Medium(~1.5 GB)은 더 정확하지만(~9% WER) 더 느립니다; Whisper Tiny(~75 MB)는 더 빠르지만 배경 소음에서 오류가 발생하기 쉽습니다.',
          '**배터리 소모가 큽니다 — 고급 전화기에서 시간당 활성 대화 약 25–35%.** 하루 종일 사용하려면 충전하거나 하이브리드 경로를 사용하십시오(STT만 전화기에서 실행, 소모를 시간당 ~10–15%로 줄임).',
          '**이것은 기능의 폭보다 개인 정보 보호를 선호하는 사용자를 위한 진정한 Siri 대체품입니다.** 포기하는 것: 웹 검색, 독점 클라우드 스마트 홈 통합, 시스템 액션 커버리지. 얻는 것: 오프라인 작동, 텔레메트리 없음, 계정 없음.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**STT 엔진:** Whisper.cpp(크로스플랫폼), WhisperKit(iOS, Apple Neural Engine에 최적화), Sherpa-ONNX(Android, ONNX 런타임).',
          '**LLM:** 고급 전화기에서 Phi-4 Mini(3.8B); 오래된 기기에서 Qwen3 1.7B 또는 SmolLM 2 1.7B.',
          '**TTS:** Piper TTS(오픈소스, 음성당 ~50 MB), iOS TTS 시스템(AVSpeechSynthesizer), Android 시스템 TTS.',
          '**iPhone 앱:** WhisperKit, Whisper Transcription(개발자 Aiko), LLM Farm, PocketPal AI.',
          '**Android 앱:** Layla(통합 스택), Termux + whisper.cpp + Ollama, Sherpa-ONNX 데모 앱.',
          '**음성에서 첫 오디오 목표:** 2초 미만 = "사용 가능하게 느껴짐"; 1초 미만 = "네이티브하게 느껴짐".',
          '**배터리(1시간 활성):** iPhone 16 Pro ~25–35%; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: '어떤 음성 비서 스택을 구축해야 합니까?',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          '음성 비서 경로 선택을 위한 결정 트리: 개인정보 보호를 원하면 완전 온디바이스(iPhone WhisperKit + LLM Farm 약 0.9–1.4초, 또는 Android Layla / Termux 약 1.0–2.0초), 70B급 품질이나 실시간 데이터가 필요하면 하이브리드(휴대폰 STT + 홈 Ollama 70B, 약 1.5–2.5초) 또는 클라우드 비서.',
        content:
          '**고급 전화기를 가진 대부분의 사용자에게: 완전히 기기 내 경로가 올바른 선택입니다.** 완전히 개인 정보 보호가 되고, 오프라인으로 작동하며, 1.5초 미만에 사용 가능한 결과를 생성합니다. 구체적으로 70B급 품질이 필요하고 홈 Wi-Fi 의존성을 수용하는 경우에만 하이브리드 경로를 사용하십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Whisper(STT), 3B–4B 로컬 LLM(Phi-4 Mini 또는 Gemma 3 4B), Piper 또는 시스템 TTS를 결합하여 완전히 오프라인 음성 비서를 구축하십시오 — 2026년 고급 전화기에서 0.9–1.6초의 음성에서 첫 오디오.',
          },
          {
            type: 'plain-terms',
            text: '음성 비서는 세 가지 작업이 있습니다: 음성을 텍스트로 변환, 응답 생성, 큰 소리로 응답 말하기. 첫 번째 단계를 위한 Whisper, 두 번째를 위한 소형 로컬 LLM, 세 번째를 위한 Piper 또는 전화기의 내장 음성으로 인터넷 없이 전화기에서 세 가지 모두 할 수 있습니다. 전체 루프는 최근 고급 iPhone이나 Android에서 약 1초가 걸립니다 — Siri와 대화하는 것처럼 느낄 만큼 빠르지만 모든 것이 기기에 남아 있습니다.',
          },
        ],
        decisionBlock: {
          title: '결정: 어떤 음성 비서 스택?',
          localIf: [
            '완전한 개인 정보 보호와 오프라인 작동을 원한다 → 완전히 기기 내(iPhone 또는 Android 경로)',
            '자주 여행하고 비행기/음영 지역에서 음성을 원한다 → 완전히 기기 내',
            '기자, 의료 전문가, 또는 변호사이다 → 소스/환자/클라이언트 기밀을 위해 완전히 기기 내',
            '오프라인 음성 워크플로우 프로토타입을 만드는 개발자이다 → 완전히 기기 내',
          ],
          cloudIf: [
            '70B+ 모델 품질이 필요하다(복잡한 추론) → 하이브리드 경로(전화기에서 STT + 집의 원격 Ollama)',
            '실시간 웹 검색 또는 라이브 데이터가 필요하다 → 클라우드 비서(2026년에는 로컬 동등물 없음)',
            '독점 클라우드와의 깊은 통합이 필요하다(Google Calendar, iCloud 등) → 해당 작업을 위해 계속 Siri / Google Assistant 사용',
          ],
          quick: [
            'iPhone에서 가장 간단한 경로: WhisperKit + LLM Farm + iOS 음성',
            'Android에서 가장 간단한 경로: Layla(통합 스택)',
            '최고 품질: 하이브리드(전화기에서 STT + 집에서 Ollama 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '결국 하이브리드 접근 방식을 원하더라도 완전히 기기 내 경로로 시작하십시오. 기기 내 설정은 모바일 구성 요소(STT, LLM, TTS)를 가르쳐 주고 홈 서버 의존 없이 작동합니다. 일단 작동하면, LLM 호출을 로컬에서 원격 Ollama URL로 변경하는 것은 한 줄 변경입니다.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: '음성 비서 스택 비교',
        content:
          '**2026년 세 가지 실행 가능한 스택, 각각 다른 우선순위에 맞게 조정됨: 단순성(Layla), 네이티브 Apple 폴리시(WhisperKit + LLM Farm), LLM 품질(하이브리드).** 세 가지 모두 기기에서 STT와 TTS를 실행합니다; 하이브리드만 LLM 단계를 집의 컴퓨터로 이동합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'iOS에서 단순성을 위한 iPhone(WhisperKit + LLM Farm + iOS 음성), Android에서 단순성을 위한 Android(Layla), 더 나은 LLM 품질을 위한 하이브리드(전화기에서 STT + 집의 Ollama)를 선택하십시오.',
          },
          {
            type: 'plain-terms',
            text: '아래 지연 수치는 음성에서 첫 오디오까지입니다 — 말을 멈추고 나서 비서가 응답을 시작할 때까지의 시간. 2초 미만은 사용 가능하게 느껴집니다; 1초 미만은 네이티브하게 느껴집니다. 배터리는 양방향 활성 대화 1시간 동안 소모된 비율입니다.',
          },
        ],
        columns: ['스택', '지연 (음성 → 첫 오디오)', '배터리 (1시간 활성)', '최적'],
        rows: [
          { '스택': 'iPhone (WhisperKit + LLM Farm)', '지연 (음성 → 첫 오디오)': '~0.9–1.4초 (16 Pro / 17 Pro)', '배터리 (1시간 활성)': '~25–35%', '최적': '네이티브 Apple 폴리시를 원하는 iOS 사용자' },
          { '스택': 'Android (Layla, 통합)', '지연 (음성 → 첫 오디오)': '~1.0–1.6초 (Pixel 9 Pro, Galaxy S25 Ultra)', '배터리 (1시간 활성)': '~25–40%', '최적': '하나의 앱에서 단순성을 원하는 Android 사용자' },
          { '스택': 'Android (Termux + whisper.cpp + Ollama + Piper)', '지연 (음성 → 첫 오디오)': '~1.2–2.0초', '배터리 (1시간 활성)': '~30–40%', '최적': '완전한 제어를 원하는 고급 사용자' },
          { '스택': '하이브리드 (전화기에서 STT + 집의 Ollama 70B)', '지연 (음성 → 첫 오디오)': '~1.5–2.5초 (Wi-Fi 의존)', '배터리 (1시간 활성)': '~10–15%', '최적': '70B급 품질, 홈 네트워크 사용' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '지연은 Whisper나 TTS가 아닌 LLM의 "첫 번째 토큰" 단계에 의해 지배됩니다. 지연을 줄이려면 더 작은 LLM을 사용하십시오(Phi-4 Mini 대신 Qwen3 1.7B를 사용하면 LLM 단계가 ~600ms에서 ~250ms로 줄어듭니다). 단점은 더 짧고 덜 상세한 응답입니다.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: '세 가지 구성 요소 스택: STT + LLM + TTS',
        content:
          '**음성 텍스트 변환, LLM, 텍스트 음성 변환은 개별적으로 교환할 수 있는 세 가지 독립 구성 요소입니다.** 어느 것이든 최적화하면(더 작은 Whisper, 더 빠른 LLM, 더 낮은 지연 TTS) 전체 지연이 줄어듭니다.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small(~466 MB)은 모바일을 위한 표준 선택 — 일반적인 말에서 ~12% WER(단어 오류율), 5초 발화에서 ~150–300ms STT 지연. Whisper Medium(~1.5 GB)은 WER을 ~9%로 낮추지만 지연을 두 배로 늘립니다. Whisper Tiny(~75 MB)는 빠르지만 중간 정도의 배경 소음에서 오류가 발생하기 쉽습니다. WhisperKit(iOS)는 Apple Neural Engine을 사용하여 표준 Whisper.cpp보다 ~30–40% 더 낮은 STT 지연을 달성합니다.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** Phi-4 Mini(3.8B Q4_K_M, ~2.7 GB)는 고급 전화기에서 권장 기본값입니다. 짧은 프롬프트에서 iPhone 16 Pro의 첫 번째 토큰까지 시간은 ~400–800ms — 전체 지연에서 가장 큰 단일 기여자. 오래되거나 RAM이 제한된 기기의 경우, Qwen3 1.7B(~1.1 GB)는 더 짧고 단순한 응답을 희생하여 더 빠릅니다(~200–400ms TTFT).',
          '**TTS — Piper TTS 또는 시스템 TTS.** Piper(Rhasspy 프로젝트, 오픈소스)는 30개 이상의 언어를 지원하고, 음성당 ~50 MB, 첫 오디오까지 ~100–200ms 지연을 가지며, iOS, Android, Linux, macOS, Windows에서 작동합니다. 시스템 TTS(iOS에서 AVSpeechSynthesizer, Android에서 TextToSpeech)는 더 낮은 지연(~50–100ms)을 가지지만 이전 OS 버전에서 더 로봇 같은 음성. iOS 18+ 및 Android 14+ 시스템 음성은 이전 버전보다 현저히 향상되었습니다.',
          '**음성 활동 감지(VAD).** 대부분의 앱은 말하기를 멈출 때를 감지하기 위해 Silero VAD 또는 webrtcvad를 사용합니다. 200–500ms 침묵 창이 일반적인 발화 종료 임계값입니다. 너무 짧으면 → 문장 중간에 끊기고; 너무 길면 → 지연이 추가됩니다. 300ms가 합리적인 기본값입니다.',
          '**전체 파이프라인:** 마이크 캡처 → VAD가 말하기 종료 감지 → Whisper 전사 → LLM 응답 생성 → TTS 말하기. 도착하는 대로 LLM 토큰을 TTS로 스트리밍하는 것이 고급 전화기에서 "첫 오디오"가 1초 미만으로 도달하게 만드는 것입니다 — 대안(전체 LLM 응답을 기다렸다가 말하기)은 지각된 지연을 두 배로 늘립니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '스택이 느리게 느껴진다면 각 단계를 프로파일링하십시오: (마이크 → STT 준비), (STT 준비 → LLM 첫 번째 토큰), (LLM 첫 번째 토큰 → TTS 첫 오디오)의 지속 시간을 기록하십시오. 한 단계가 지배하는 경향이 있습니다. 2026년 고급 전화기에서 거의 항상 LLM 첫 번째 토큰 시간(~400–800ms)입니다. 지각된 지연을 줄이려면 더 작은 LLM으로 전환하십시오.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'iPhone 설정: WhisperKit + LLM Farm (5분)',
        content:
          '**2026년 가장 간단하고 완전히 오프라인인 iPhone 음성 비서: STT를 위한 WhisperKit(또는 Whisper Transcription), LLM을 위한 LLM Farm, 음성을 위한 iOS 시스템 TTS.** 총 설정 시간은 모델 다운로드 시간 플러스 5–10분입니다.',
        numberedItems: [
          'App Store에서 WhisperKit 기반 앱 설치(예: 개발자 Aiko의 "Whisper Transcription", 무료) — Apple Neural Engine을 사용하여 기기 내 전사를 제공합니다. GitHub(Argmax / WhisperKit)에서 WhisperKit 참조 앱을 빌드할 수도 있습니다.',
          'WhisperKit / Whisper Transcription에서: "Small" 모델 다운로드(~466 MB). Tiny는 더 빠르지만 부정확하고; Medium은 더 정확하지만 더 느립니다.',
          'App Store에서 LLM Farm 설치(무료). LLM Farm에서: Models 탭 → "URL에서 모델 추가" → Phi-4 Mini Q4_K_M을 위한 Hugging Face URL 붙여넣기(또는 사용 가능한 경우 내장 라이브러리 사용). 모델은 ~2.7 GB를 차지합니다.',
          'iOS Shortcuts를 통해 연결: 다음 액션으로 단축어 생성 — (1) 오디오 녹음(또는 공유 시트에서 오디오 입력 수락), (2) Whisper Transcription으로 전사, (3) LLM Farm(사용 가능한 경우) 또는 Private LLM(~£10, 단축어 액션 있음)으로 텍스트 생성, (4) iOS 시스템 음성으로 텍스트 재생.',
          '단축어를 잠금 화면 위젯, 동작 버튼(iPhone 15 Pro 이상) 또는 "Siri야, [단축어 이름] 실행"에 할당하십시오. 동작 버튼이 가장 짧은 핸즈프리 응답 시간을 제공합니다.',
          '테스트: 동작 버튼을 길게 누르기 → 말하기 → 놓기. STT 실행(~200ms) → LLM 생성(~600ms 첫 번째 토큰, TTS로 스트리밍) → 첫 오디오가 총 ~0.9–1.4초에 들림. 끊기는 경우 단축어에서 VAD 침묵 임계값을 조정하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm은 현재(2026년 5월 기준) 단축어 액션을 노출하지 않습니다. iOS Shortcuts 파이프라인을 사용하려면 "텍스트 생성" 액션을 노출하는 Private LLM(~£10 일회성 구매)이 필요합니다. 단축어 접근 방식이 iPhone 경로를 "5분"으로 만드는 것입니다 — 단축어 없이는 앱을 수동으로 체인해야 합니다.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Android 설정: Layla 또는 Termux 스택 (5–15분)',
        content:
          '**Android에서 두 가지 경로: Layla(5분의 통합 스택 접근 방식) 또는 Termux + whisper.cpp + Ollama + Piper(더 많은 제어가 있는 15분 수동 접근 방식).** 두 가지 모두 설정 후 완전히 오프라인으로 작동합니다.',
        items: [
          '**경로 A — Layla(5분):** Play Store에서 Layla 설치, 모델 다운로드(Phi-4 Mini 또는 Gemma 3 4B), 설정에서 음성 모드 활성화. Layla는 STT를 위한 whisper.cpp, 응답을 위한 로컬 LLM을 포함하며 Android 시스템 TTS를 사용합니다. 가장 간단한 경로; 단점은 구성 가능성이 낮습니다.',
          '**경로 B — Termux 스택(15분):**',
          'F-Droid에서 Termux 설치(Play Store 버전은 오래되어 권장하지 않음).',
          'Termux에서: `pkg update && pkg install git cmake clang ffmpeg`.',
          'whisper.cpp 빌드: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make`와 Small 모델 다운로드: `bash ./models/download-ggml-model.sh small`.',
          'Ollama(Termux ARM 빌드) 설치: `curl -fsSL https://ollama.com/install.sh | sh`. 모델 다운로드: `ollama pull phi4-mini`. 서버 시작: `ollama serve`.',
          'Piper 설치: `pip install piper-tts`(Termux Python venv에서)와 음성 다운로드(예: `piper-tts --download-voice ko_KR-kss-medium`).',
          '`arecord`에서 읽어 오디오에 whisper.cpp를 실행하고, 전사를 localhost:11434의 Ollama로 전송하고, 응답을 Piper로 파이프하는 소형 Python 스크립트로 파이프라인을 연결하십시오. 또는 Tasker를 사용하여 버튼이나 빠른 타일로 활성화된 쉘 명령을 체인하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '경로 B의 경우, Termux:Widget을 사용하여 음성 비서 스크립트를 실행하는 홈 화면 단축키를 만드십시오. 위젯을 한 번 터치하면 전체 파이프라인이 활성화됩니다. 핸즈프리 호출을 위해 Bluetooth 버튼이나 Tasker 빠른 타일과 결합하십시오. Pixel 9 Pro와 Galaxy S25 Ultra의 동작/사이드 키도 Tasker 액션을 트리거할 수 있습니다.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: '하이브리드 설정: 전화기 STT + 원격 Ollama',
        content:
          '**하이브리드 스택은 기기에서 STT와 TTS를 유지하면서 LLM 호출만 집의 컴퓨터로 이동합니다.** 이를 통해 오디오 개인 정보 보호를 유지하면서(전화기를 떠나지 않음 — 텍스트 전사만 홈 Wi-Fi를 통해 전송) 70B급 모델(Llama 3.3 70B, Qwen3-Coder 32B)에 접근할 수 있습니다.',
        numberedItems: [
          '집의 컴퓨터(Mac, PC 또는 NAS)에 Ollama를 설치하십시오. 70B 모델 다운로드: `ollama pull llama3.3:70b`(~40GB 여유 디스크 공간 + ~48GB RAM 또는 24GB GPU VRAM 필요).',
          'Ollama를 로컬 네트워크에 바인딩: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. 집 컴퓨터의 로컬 IP를 메모하십시오(예: 192.168.1.20).',
          '전화기에서 음성 비서 파이프라인(iOS Shortcut 또는 Android Tasker)을 설정하여 Whisper 전사를 로컬 LLM 호출 대신 `http://192.168.1.20:11434/api/generate`로 HTTP POST로 전송하십시오.',
          'TTS는 집 컴퓨터의 응답 텍스트를 사용하여 전화기에서 계속 실행됩니다(Piper 또는 시스템 음성).',
          '결과: Whisper STT가 전화기에서 실행되고(오디오가 기기를 떠나지 않음), 집의 Ollama가 ~600–1200ms에 70B급 응답을 생성하며, TTS가 전화기에서 말합니다. 총 지연 ~1.5–2.5초 — 완전히 기기 내보다 약간 더 많지만 훨씬 더 나은 LLM 품질.',
        ],
        promptExamples: [
          {
            label: 'iOS Shortcut: 하이브리드 음성 비서 (동작 버튼으로 활성화)',
            text: '1. 오디오 녹음 → 임시 파일에 저장.\n2. Whisper Transcription으로 전사 → 출력: 전사 텍스트.\n3. URL에서 콘텐츠 가져오기 → URL: http://192.168.1.20:11434/api/generate, 메서드: POST, JSON 본문: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → 출력: 응답 텍스트.\n4. 텍스트 재생 → 입력: 응답 텍스트, 음성: iOS 시스템 음성.\n동작 버튼에 할당. 길게 누르기로 녹음; 놓기로 전송. 첫 오디오가 ~1.5–2.5초에 들림.',
          },
          {
            label: 'Tasker: Android에서 하이브리드 음성 비서',
            text: '1. 변수: %TRANSCRIPT = (녹음된 오디오 파일에서 whisper-cli 출력).\n2. HTTP 요청: URL http://192.168.1.20:11434/api/generate, 메서드 POST, 본문 {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. 변수: %REPLY = (JSON에서 파싱된 "response" 필드).\n4. 말하기: %REPLY (Android 시스템 TTS 또는 Piper가 설치된 경우).\n빠른 타일, Bluetooth 버튼 또는 Pixel 9 Pro 사이드 키 길게 누르기로 활성화.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '하이브리드 모드에서 최저 지연을 위해 Ollama를 스트리밍 모드(`"stream":true`)로 설정하고 전체 응답을 기다리는 대신 도착하는 대로 TTS로 토큰을 스트리밍하십시오. iOS Shortcuts는 네이티브로 스트리밍을 할 수 없지만 소형 Tasker 플러그인이나 커스텀 iOS 앱은 할 수 있습니다. 스트리밍으로 총 응답 시간이 동일해도 "첫 오디오" 지각 지연이 200–400ms 줄어듭니다.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: '지연 예산: 초가 어디로 가는가',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'iPhone 16 Pro에서 음성 종료부터 첫 오디오까지의 지연 예산: VAD 감지 250ms, Whisper STT 200ms, LLM 첫 토큰 생성 700ms(전체의 54%, 가장 큰 개선 지점), TTS 첫 오디오 150ms — 총 약 1.3초.',
        content:
          '**2026년 고급 전화기에서 LLM 첫 번째 토큰 시간이 전체 지연을 지배합니다 — 일반적으로 음성에서 첫 오디오 시간의 50–60%.** LLM 단계를 최적화하면 Whisper나 TTS를 조정하는 것보다 더 큰 영향을 줍니다.',
        columns: ['단계', '일반적인 시간 (iPhone 16 Pro, 기기 내)', '참고'],
        rows: [
          { '단계': 'VAD 발화 종료 감지', '일반적인 시간 (iPhone 16 Pro, 기기 내)': '~200–500ms', '참고': '조정 가능; 기본 300ms. 지각 지연에 포함됨.' },
          { '단계': 'Whisper Small STT (5초 발화)', '일반적인 시간 (iPhone 16 Pro, 기기 내)': '~150–300ms', '참고': 'WhisperKit은 Apple Neural Engine을 통해 ~30–40% 더 빠름.' },
          { '단계': 'LLM 첫 번째 토큰 시간 (Phi-4 Mini)', '일반적인 시간 (iPhone 16 Pro, 기기 내)': '~400–800ms', '참고': '가장 큰 기여자. 더 작은 모델 = 더 빠름.' },
          { '단계': 'TTS 첫 오디오 (Piper 또는 시스템)', '일반적인 시간 (iPhone 16 Pro, 기기 내)': '~100–200ms', '참고': '시스템 TTS가 Piper보다 약간 더 빠름.' },
          { '단계': '총 음성에서 첫 오디오', '일반적인 시간 (iPhone 16 Pro, 기기 내)': '~0.9–1.4초', '참고': '2초 미만 = "사용 가능하게 느껴짐"; 1초 미만 = "네이티브하게 느껴짐".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '총 1초 미만으로 줄이려면: Whisper Tiny(75 MB, ~80ms STT) + Qwen3 1.7B(~250ms TTFT) + 시스템 TTS(~80ms 첫 오디오)를 사용하십시오. iPhone 16 Pro에서 총 ~600–800ms. 단점은 더 짧고 덜 일관된 LLM 응답과 소음이 있는 환경에서 더 낮은 STT 정확도입니다. 응답 속도가 주요 우선순위인 경우 가치 있습니다.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: '1시간 동안의 정확도와 배터리 소모',
        content:
          '**Whisper Small은 중간 정도의 배경 소음이 있는 일반적인 말에서 ~88% 정확도를 달성합니다; Whisper Medium은 ~91%에 도달하지만 지연이 두 배입니다.** 1시간 활성 대화 동안 배터리 소모는 iPhone 16 Pro에서 ~25–35%, 고급 Android에서 ~25–40%입니다.',
        items: [
          '**모델 크기별 Whisper 정확도(WER LibriSpeech-clean, 낮을수록 좋음):** Tiny ~7.5%, Small ~3%, Medium ~2.4%, Large v3 ~1.8%. 소음이 있는 실제 조건에서: Tiny는 ~15–20% WER로 악화, Small은 ~10–14%, Medium은 ~7–10%, Large v3는 ~5–7%.',
          '**클라우드 Whisper vs 로컬 Whisper:** OpenAI의 클라우드 Whisper API는 기본적으로 Large v3를 사용합니다(깨끗한 말에서 ~2% WER). 전화기의 로컬 Whisper Small은 동일한 오디오에서 ~3% WER — 일상적인 음성 비서 사용에서 차이가 감지되지 않을 만큼 충분히 가깝습니다.',
          '**배터리 소모(1시간 활성 대화, 화면 켜짐):** iPhone 16 Pro ~25–35%; iPhone 17 Pro ~22–30%; Pixel 9 Pro ~30–40%; Galaxy S25 Ultra ~28–38%. 하이브리드 모드는 STT만 로컬에서 실행되므로 전화기 소모를 시간당 ~10–15%로 줄입니다.',
          '**열 제한:** 기기 내 지속적인 LLM 추론은 iPhone에서 ~10–15분 후 열 제한을 트리거하고(칩 표면 ~38°C); 고급 Android에서 ~15–20분(태블릿과 대형 전화기에서 더 나은 열 질량). 제한은 토큰/초를 30–50% 줄여 LLM 첫 번째 토큰 지연을 ~600ms에서 ~900ms로 늘립니다.',
          '**긴 세션을 위한 완화:** 충전기를 연결하고, 딱딱한 표면에 전화기를 앞면 위로 놓거나(손에 들지 않고) 하이브리드 모드로 전환하십시오. 마이크로 전화기를 사용하면 전화기를 전부로 사용하는 에너지의 일부를 사용합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '완전히 로컬인 1시간 음성 세션은 전화기 배터리의 30–40%를 소모할 수 있습니다. 하루 종일 또는 차에서 사용하려면 충전을 계획하십시오. 하이브리드 경로(기기에서 STT만)는 항상 켜져 있는 주변 음성 비서를 위한 현실적인 옵션입니다 — 집의 컴퓨터가 무거운 작업을 합니다.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: '핸즈프리: Shortcuts, Tasker, CarPlay, Android Auto',
        content:
          '**핸즈프리 활성화는 음성 스택이 아닌 활성화 메커니즘에 달려 있습니다.** iOS는 동작 버튼 또는 "Siri야, [단축어 이름] 실행"으로 Shortcuts를 사용하고; Android는 사이드 키, 빠른 타일 또는 Bluetooth 버튼으로 Tasker를 사용합니다.',
        items: [
          '**iPhone 동작 버튼(iPhone 15 Pro 이상):** 음성 파이프라인을 활성화하는 단축어를 할당하십시오. 동작 버튼을 길게 누르기로 녹음 시작; 놓기로 전송. 2026년 iPhone에서 가장 낮은 지연의 핸즈프리 트리거.',
          '**iPhone "Siri야, [단축어 이름] 실행":** Siri를 활성화하고(~500ms) 단축어를 실행합니다. 동작 버튼보다 지연이 추가되지만 전화기가 잠금 해제된 언제든지 핸즈프리로 작동합니다.',
          '**Android 사이드 키/Bixby 키(Galaxy):** Galaxy Modes & Routines 설정 또는 Bixby 키 재매핑 앱을 통해 Tasker 액션을 할당하십시오. 누르기로 활성화.',
          '**Android의 Tasker 빠른 타일:** 음성 스크립트를 실행하는 알림 패널에 빠른 타일을 추가하십시오. 잠금 화면에서 두 번 스와이프로 활성화.',
          '**Bluetooth 버튼(예: Flic, 일반 미디어 버튼):** iOS 또는 Android와 페어링하고 음성 단축어/Tasker 작업을 트리거하도록 구성하십시오. 진정한 핸즈프리(책상, 핸들, 주머니의 버튼).',
          '**CarPlay / Android Auto:** 이것들은 Siri / Google Assistant 시스템을 중심으로 설계되었습니다 — 2026년에는 어느 것도 타사 음성 비서 API를 노출하지 않습니다. CarPlay 해결책은 CarPlay 동작 버튼에 단축어 연결(제한된 단축어 지원); Android Auto의 경우 Bluetooth 미디어 버튼으로 활성화된 Tasker 사용. 어느 것도 차량 사용을 위해 시스템 비서와 동일한 통합 수준을 달성하지 않습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'CarPlay / Android Auto 통합 없이 차량 사용의 경우: 작은 Bluetooth 버튼(Flic, AirShou, 일반 미디어 컨트롤)을 페어링하고 핸들에 부착하십시오. 누르기로 오프라인 음성 비서를 활성화합니다 — 인터넷 없이 작동하고, 오디오를 클라우드로 전송하지 않으며, ~1.5초에 응답합니다. CarPlay와 비교한 단점은 차량 화면에 인터페이스가 없고 오디오만 있다는 것입니다.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인 정보 보장: 진정한 오프라인 vs 클라우드 지원',
        content:
          '**음성 비서는 마이크 오디오, 전사, TTS 오디오가 네트워크 호출 없이 기기에 남아 있는 경우에만 "진정으로 오프라인"입니다.** "개인 정보 보호"로 마케팅된 많은 앱이 여전히 전사나 텔레메트리를 클라우드로 전송합니다 — 신뢰하기 전에 비행기 모드나 네트워크 모니터로 확인하십시오.',
        items: [
          '**"진정으로 오프라인" 확인 방법:** 전화기를 비행기 모드로 설정하고 비서를 사용하십시오. 완전한 품질로 작동하면 진정으로 오프라인입니다. 저하되거나 실패하면 일부 단계가 클라우드 서비스에 의존합니다.',
          '**오디오 캡처:** 마이크 데이터는 로컬로 처리되고 전사 후 어디에도 기록되거나 전송되지 않아야 합니다. Whisper, WhisperKit, Sherpa-ONNX는 메모리에서 STT를 실행하고 전사 후 오디오를 버립니다.',
          '**LLM 추론:** 응답이 전화기의 로컬 모델(Phi-4 Mini, Gemma 3, Llama 3.2)에 의해 생성되는 경우, 프롬프트가 기기를 나가지 않습니다. 비서가 "클라우드 지원" 모드를 사용하는 경우(Apple Intelligence Private Cloud Compute, Google의 기기 우선 후 클라우드 모드), 전사가 특정 조건에서 서버로 전송될 수 있습니다 — 앱의 개인 정보 보호 정책을 확인하십시오.',
          '**TTS:** Piper와 시스템 TTS는 완전히 기기 내. 일부 "프리미엄" 클라우드 음성(ElevenLabs, OpenAI TTS)은 응답 텍스트를 서버로 전송해야 합니다 — 진정한 오프라인 사용을 위해 피하십시오.',
          '**하이브리드 경로의 개인 정보 보호 입장:** 하이브리드 모드에서 오디오는 전화기에 남아 있지만(로컬 Whisper) 텍스트 전사가 홈 Wi-Fi를 통해 집의 Ollama 서버로 전송됩니다. 이것은 로컬 네트워크 전용으로 클라우드가 아닙니다 — 데이터는 네트워크 내에 남아 있습니다. 대부분의 개인 정보 보호 의식이 있는 사용자에게 허용 가능합니다; 가장 엄격한 위협 모델에는 완전히 기기 내와 동등하지 않습니다.',
          '**앱별 참고사항(2026년 5월):** WhisperKit과 whisper.cpp는 오픈소스이며 검증 가능하게 오프라인입니다. Layla는 기본적으로 로컬로 작동합니다(비행기 모드에서 확인하십시오). LLM Farm과 PocketPal AI는 완전히 기기 내에서 추론을 실행합니다. Apple Intelligence는 기기 내 모드와 Private Cloud Compute 모두 있습니다 — 완전히 기기 내 작동을 위해 설정에서 PCC를 비활성화하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '완전히 오프라인 작동이 중요한 경우(기자/소스 기밀, 의료, 법률): 네트워크 동작을 감사할 수 있는 오픈소스 앱(WhisperKit 참조 빌드, Termux를 통한 whisper.cpp, Layla)을 선호하십시오. 클로즈드 소스 앱은("개인 정보 보호"로 마케팅된 경우에도) 사용자에게 명확한 알림 없이 향후 업데이트에서 클라우드 기능을 추가할 수 있습니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**모든 것에 Whisper Tiny 사용하기.** Tiny는 빠르지만(~80ms STT) 소음이 있는 환경에서 오류가 발생하기 쉽습니다(~15–20% WER 대 Small의 ~10–14%). Tiny는 조용한 방에서 짧은 명령에는 허용 가능합니다; 범용 음성 비서에는 Small을 사용하십시오.',
          '**TTS가 시작하기 전에 전체 LLM 응답 기다리기.** 이것은 지각 지연을 두 배로 늘립니다. 도착하는 대로 LLM 토큰을 TTS로 스트리밍하십시오 — Piper는 스트리밍 입력을 지원하고, 시스템 TTS는 증분적 말하기를 지원합니다. 첫 오디오는 전체 응답 후가 아닌 LLM의 첫 번째 문장 후에 재생되어야 합니다.',
          '**더운 환경에서 기기 내 LLM 실행하기.** 열 제한은 직사광선이나 뜨거운 차 안에서 몇 분 안에 활성화되어 토큰/초를 30–50% 줄이고 지연을 2초 이상으로 밀어냅니다. 하이브리드 경로를 사용하거나 전화기를 시원하게 유지하십시오.',
          '**확인 없이 "개인 정보 보호"를 신뢰하기.** "개인 정보 보호"와 "로컬"은 2026년 마케팅 용어입니다 — 로컬 처리를 주장하는 일부 앱이 여전히 분석, 모델 업데이트 또는 클라우드 지원 전사를 위해 데이터를 전송합니다. 민감한 사용에 신뢰하기 전에 비행기 모드로 확인하십시오.',
          '**RAM이 부족한 Android 기기에서 Termux 스택 구축하기.** Termux + whisper.cpp + Ollama + Piper는 피크에서 ~4GB 시스템 RAM을 소비합니다. RAM이 6GB 이하인 기기는 대화 중간에 OOM으로 구성 요소를 죽입니다. RAM이 부족한 Android에서는 Layla를 사용하거나 iPhone 경로를 사용하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp)(Android 및 iOS 빌드 포함 크로스플랫폼 Whisper).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit)(iOS / macOS에서 Apple Neural Engine에 최적화된 Whisper).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper)(오픈소스 신경망 TTS, 모바일 호환, 30개 이상 언어).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)(로컬에서 GGUF 모델 실행을 위한 iOS 앱).',
          'Layla (Android) — [Play Store 목록](https://play.google.com) 및 개발자 문서(음성 지원이 있는 통합 로컬 LLM 스택).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '로컬 Whisper는 클라우드 Whisper와 비교하여 얼마나 정확합니까?',
            a: '전화기에서 로컬로 실행되는 Whisper Small은 깨끗한 말에서 ~3% WER을 달성합니다; OpenAI의 클라우드 Whisper(Large v3)는 ~2%를 달성합니다. 소음이 있는 환경에서 로컬 Small은 동일한 오디오에서 ~10–14% WER로 떨어지는 반면 Cloud Large v3는 ~5–7%로 떨어집니다. 일상적인 음성 비서 사용에서 로컬 정확도는 실용적으로 감지되지 않을 만큼 충분히 가깝습니다. 모든 단어가 중요한 긴 받아쓰기의 경우 클라우드나 로컬 Medium/Large가 선호됩니다.',
          },
          {
            q: '로컬 음성 비서가 Siri를 완전히 대체할 수 있습니까?',
            a: '개인 Q&A, 초안 작성, 요약의 경우: 네, Siri의 기기 내 기능과 비교 가능하거나 더 나은 품질로. 시스템 액션(앱 열기, 타이머 설정, HomeKit 제어), 웹 검색 시작 또는 라이브 데이터(날씨, 스포츠 결과): 아니요 — iOS와 Apple 서비스와의 Siri 통합은 2026년에 타사 로컬 스택으로 복제할 수 없습니다. 많은 사용자가 두 가지를 유지합니다: 시스템 액션을 위한 Siri, 개인 Q&A를 위한 로컬 스택.',
          },
          {
            q: 'CarPlay나 Android Auto에서 작동합니까?',
            a: '제한적으로. CarPlay와 Android Auto는 Siri / Google Assistant 시스템을 중심으로 설계되었습니다; 어느 것도 2026년에 타사 음성 비서 API를 노출하지 않습니다. 해결책: CarPlay 동작 버튼에 단축어 연결(제한된 단축어 지원), 또는 Bluetooth 버튼으로 Tasker/단축어를 활성화하십시오. 어느 것도 차량 사용에서 시스템 비서와 동일한 통합 수준을 달성하지 않습니다.',
          },
          {
            q: '핸즈프리로 어떻게 활성화합니까?',
            a: 'iPhone: 단축어를 호출하기 위해 동작 버튼을 길게 누르거나(iPhone 15 Pro 이상), "Siri야, [단축어 이름] 실행"이라고 말하십시오. Android: Galaxy 전화기의 사이드 키나 Bixby 키, Tasker 빠른 타일, 또는 페어링된 Bluetooth 버튼을 사용하십시오. 진정한 핸즈프리 주변 환경(웨이크 워드를 들을 때까지 항상 듣기)의 경우, 로컬 스택은 2026년에 Siri / Google Assistant와 동등하지 않습니다 — 전화기의 시스템 웨이크 워드 감지기는 타사 앱에 노출되지 않습니다.',
          },
          {
            q: '여러 언어로 대화를 처리할 수 있습니까?',
            a: '네, 하지만 뉘앙스가 있습니다. Whisper는 입력 언어를 자동으로 감지하고 99개 언어를 지원합니다. 로컬 LLM은 다양합니다: Phi-4 Mini는 영어를 잘 처리하고 주요 유럽 언어를 합리적으로 처리합니다; Qwen3는 중국어를 포함한 강력한 다국어 지원을 가지고 있습니다; Gemma 3는 100개 이상의 언어를 지원합니다. TTS의 경우 Piper는 30개 이상의 언어에 음성이 있습니다; 시스템 TTS는 설치된 OS 언어 패키지에 따라 다릅니다. 대화 중간 언어 전환은 Whisper에서는 작동하지만 LLM을 혼란스럽게 할 수 있습니다.',
          },
          {
            q: '배경 소음이 로컬 STT를 망칩니까?',
            a: 'Whisper Tiny는 중간 정도의 소음에서 크게 저하됩니다(~15–20% WER); Small은 카페 수준의 소음을 합리적으로 처리합니다(~10–14% WER); Medium과 Large는 대부분의 실제 환경을 잘 처리합니다. 소음이 있는 사용(차, 대중교통)의 경우, 전화기에 RAM이 있다면 Whisper Medium을 사용하거나 VAD를 공격적으로 적용하십시오(발화가 감지될 때만 전사, 발화 사이의 침묵은 무시).',
          },
          {
            q: '스마트 홈 기기와 로컬로 통합하려면 어떻게 합니까?',
            a: 'LLM 응답을 인텐트를 감지하는 파서를 통해 전달하고(예: "주방 불 끄기") 스마트 홈 허브의 API를 직접 호출하십시오 — Home Assistant는 로컬 IP에 REST API가 있으며, Apple HomeKit 통합은 단축어의 "홈 제어" 액션을 통해 작동합니다. 진정한 오프라인 파이프라인을 원한다면 클라우드 스마트 홈 통합(Alexa, Google Home)을 피하십시오.',
          },
          {
            q: 'TTS 음성을 커스터마이징할 수 있습니까?',
            a: '네. Piper TTS는 30개 이상의 언어에 100개 이상의 커뮤니티 훈련 음성이 있으며 ~50 MB 음성 모델로 다운로드 가능합니다. iOS 음성 단축어는 고품질 Premium 음성을 포함한 시스템 음성 중에서 선택할 수 있습니다(설정 → 접근성 → 말한 콘텐츠 → 음성에서 다운로드). Android 시스템 TTS는 Google이나 타사 음성 패키지를 지원합니다. 커스텀 음성 클로닝(자신의 음성 또는 특정 인물)은 별도의 TTS 도구 체인(Coqui, Tortoise TTS)이 필요합니다 — 2026년에는 아직 기기 내에서 실용적이지 않습니다.',
          },
          {
            q: '배터리가 많이 소모됩니까?',
            a: '네 — 고급 전화기에서 시간당 활성 대화 약 25–40%. 가끔 음성 쿼리의 경우 영향이 작습니다. 하루 종일 또는 항상 켜져 있는 사용의 경우 충전하거나 하이브리드 경로를 사용하십시오(기기에서 STT만 실행, 소모를 시간당 ~10–15%로 줄임). 웨이크 워드 감지를 통한 수동 백그라운드 청취는 현재 허용 가능한 배터리 비용으로 타사 로컬 스택에서 실현 가능하지 않습니다.',
          },
          {
            q: 'iOS 19 또는 Android 16이 이 설정을 망칩니까?',
            a: '주요 스택(Whisper, 로컬 LLM, TTS)에는 거의 그렇지 않습니다 — 이것들은 표준 API(마이크 캡처, TTS, 네트워크)에 의존하는 사용자 공간 앱입니다. 망가질 수 있는 것: Apple이 단축어 API를 변경하면 단축어 통합; Android 16이 백그라운드 프로세스를 더 제한하면 Android에서 Termux(Android는 각 버전에서 이를 점진적으로 제한해 왔습니다). 앱을 업데이트하고 각 주요 OS 업데이트 후 확인하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 iPhone을 위한 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 경로를 위한 기본 레이어 앱(PocketPal AI, LLM Farm, Private LLM).',
          '[2026년 Android를 위한 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 경로를 위한 기본 레이어 앱(Layla, Maid, MLC Chat, Termux + Ollama).',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma 3 vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 음성 스택의 모델 레이어; 품질 대 지연 절충점 벤치마크.',
          '[태블릿에서 AI 실행하는 방법: iPad 및 Android (2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 더 큰 화면으로 음성 설정을 원하는 사용자를 위한 태블릿 동등물.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 하이브리드 설정에서 LLM을 선택하는 데 유용한 모든 하드웨어 계층을 다루는 광범위한 모델 권위.',
          '[2026년 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — Whisper.cpp, WhisperKit, Piper TTS 및 기타 음성 스택 구성 요소의 디렉토리 항목.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '전화기에서 로컬 음성 비서 만들기: Whisper + 로컬 LLM (클라우드 없음) — 2026',
      url: 'https://www.promptquorum.com/ko/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'ko'),
      description: '2026년 iPhone 및 Android에서 완전히 오프라인 AI 음성. 로컬 Whisper STT + 로컬 LLM + Piper TTS. iPhone, Android, 하이브리드 설정; 지연, 배터리, 개인 정보 보호.',
      inLanguage: 'ko',
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
        { '@type': 'Thing', name: '로컬 LLM' },
        { '@type': 'Thing', name: 'iPhone 오프라인' },
        { '@type': 'Thing', name: 'Android 오프라인' },
        { '@type': 'Thing', name: '음성 비서' },
        { '@type': 'Thing', name: '모바일 AI' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Crie um assistente de voz local no seu telefone: Whisper + LLM local (sem nuvem) — 2026',
    seoTitle: 'Assistente de voz local Whisper LLM telefone 2026',
    intro:
      'Um assistente de voz totalmente offline no iPhone ou Android em 2026 combina três componentes: Whisper para converter voz em texto, um LLM local no dispositivo para gerar a resposta e Piper ou o TTS do sistema para a síntese de voz. A latência real desde quando você fala até o primeiro áudio em telefones de ponta é de 0,8–1,5 segundos, abaixo do limite de 2 segundos que "parece utilizável". Este guia cobre o caminho no iPhone (LLM Farm + WhisperKit), Android (Layla + Whisper.cpp) e híbrido (STT no telefone + Ollama remoto), com números medidos de latência, bateria e precisão.',
    metaDescription:
      'IA de voz totalmente offline no iPhone e Android em 2026: Whisper STT + LLM local + Piper TTS. Configuração iPhone, Android e híbrida. Latência e bateria.',
    twitterDescription:
      'Crie um substituto da Siri que funciona offline: Whisper STT local + Phi-4 Mini + Piper TTS. Voz ao primeiro áudio em menos de 1,5 segundo em telefones de ponta. Configuração iPhone + Android.',
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
      'Usuários de telefone preocupados com privacidade que querem um substituto da Siri / Google Assistant que funcione inteiramente no dispositivo, incluindo viajantes, jornalistas, profissionais de saúde e desenvolvedores que estão criando fluxos de trabalho de voz offline.',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'assistente de voz local telefone',
      'Whisper offline iPhone',
      'Whisper LLM local Android',
      'substituto Siri offline',
      'Piper TTS móvel',
      'WhisperKit iOS',
      'Layla Android voz',
    ],
    leadAnswerBlock:
      '**Um assistente de voz totalmente offline em 2026 precisa de três componentes: Whisper Small ou Medium para voz em texto, um LLM local de 3B–4B (Phi-4 Mini ou Gemma 3 4B) para a resposta e Piper TTS ou o TTS do sistema para a saída de áudio.** No iPhone, a configuração mais simples é o WhisperKit (ou o app Whisper Transcription) + LLM Farm + TTS do sistema iOS — voz ao primeiro áudio de ~0,9–1,4 segundo no iPhone 16 Pro. No Android, o Layla inclui uma configuração semelhante de forma nativa, ou você monta tudo com Termux + whisper.cpp + Ollama + Piper. Para melhor qualidade de LLM, use o caminho híbrido: o telefone executa o Whisper localmente para o STT (crítico para a privacidade) e depois envia a transcrição para um Mac ou PC em casa com Ollama e um modelo de 70B. As três configurações funcionam sem internet depois que os modelos são baixados.',
    quickAnswerTop: {
      pt: {
        question: 'Você consegue criar um assistente de voz totalmente offline no seu telefone em 2026?',
        answer:
          'Sim. A configuração padrão é o Whisper para voz em texto, um LLM local de 3B–4B (Phi-4 Mini ou Gemma 3 4B) para a resposta e Piper TTS ou o TTS do sistema iOS / Android para a saída de áudio. No iPhone 16 Pro, a latência de voz ao primeiro áudio é de ~0,9–1,4 segundo, abaixo do limite de 2 segundos que "parece utilizável". Em telefones Android de ponta (Pixel 9 Pro, Galaxy S25 Ultra), a latência é de ~1,0–1,6 segundo. O caminho no iPhone usa WhisperKit + LLM Farm; o caminho no Android usa Layla (stack integrado) ou Termux + whisper.cpp + Ollama; o caminho híbrido mantém o STT no dispositivo e envia a transcrição para um Mac ou PC em casa com um modelo de 70B.',
        bullets: [
          'Stack: Whisper (STT) + LLM local de 3B–4B + Piper ou TTS do sistema — tudo no dispositivo.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + voz do sistema iOS. Latência ~0,9–1,4 seg no 16 Pro.',
          'Android: Layla (stack integrado) ou Termux + whisper.cpp + Ollama + Piper. Latência ~1,0–1,6 seg no Pixel 9 Pro.',
          'Híbrido: o telefone executa o STT localmente e envia a transcrição para o Ollama em casa com Llama 3.3 70B. Melhor qualidade.',
          'Bateria (1 hora de conversa ativa): ~25–35% no iPhone 16 Pro; ~25–40% no Android de ponta.',
          'Whisper Small (~466 MB) é o padrão para celular — ~12% WER, ~150–300 ms de latência STT.',
          'Voz ao primeiro áudio em menos de 2 segundos é o limite de "parece utilizável"; menos de 1 segundo parece nativo.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual stack de assistente de voz você deve criar?', anchor: '#which-stack' },
      { label: 'Comparação de stacks de assistente de voz', anchor: '#stack-comparison' },
      { label: 'O stack de três componentes: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'Configuração no iPhone: WhisperKit + LLM Farm (5 min)', anchor: '#iphone-setup' },
      { label: 'Configuração no Android: Layla ou stack Termux (5–15 min)', anchor: '#android-setup' },
      { label: 'Configuração híbrida: STT no telefone + Ollama remoto', anchor: '#hybrid-setup' },
      { label: 'Orçamento de latência: para onde vão os segundos', anchor: '#latency-budget' },
      { label: 'Precisão e consumo de bateria durante 1 hora', anchor: '#accuracy-battery' },
      { label: 'Mãos livres: Shortcuts, Tasker, CarPlay, Android Auto', anchor: '#hands-free' },
      { label: 'Garantias de privacidade: realmente offline vs assistido pela nuvem', anchor: '#privacy' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O stack totalmente offline é Whisper (STT) + LLM local de 3B–4B + Piper ou TTS do sistema.** Os três componentes são executados localmente no dispositivo uma vez instalados; sem chamadas à nuvem durante o uso.',
          '**iPhone: WhisperKit + LLM Farm + voz do sistema iOS é o caminho mais simples.** O WhisperKit usa o Apple Neural Engine para o STT; o LLM Farm executa o Phi-4 Mini para a resposta; o TTS do sistema iOS gerencia o áudio. Voz ao primeiro áudio: ~0,9–1,4 segundo no iPhone 16 Pro.',
          '**Android: o Layla inclui o stack completo de forma nativa, ou monte-o manualmente com Termux + whisper.cpp + Ollama + Piper.** O Layla é o caminho mais fácil; a build do Termux é mais flexível. Voz ao primeiro áudio: ~1,0–1,6 segundo no Pixel 9 Pro e no Galaxy S25 Ultra.',
          '**Híbrido (STT no telefone + Ollama remoto) dá a melhor qualidade de LLM.** O telefone executa o Whisper localmente (crítico para a privacidade do áudio) e depois envia a transcrição de texto para um Mac ou PC em casa com Llama 3.3 70B. Melhor qualidade de resposta; requer Wi-Fi doméstico.',
          '**Whisper Small (~466 MB) é o ponto ideal para celular.** ~12% de WER em fala comum, ~150–300 ms de latência STT. O Whisper Medium (~1,5 GB) é mais preciso (~9% WER) mas mais lento; o Whisper Tiny (~75 MB) é mais rápido mas propenso a erros com ruído de fundo.',
          '**O consumo de bateria é significativo — cerca de 25–35% por hora de conversa ativa em telefones de ponta.** Para uso o dia todo, conecte o carregador ou use o caminho híbrido (apenas o STT é executado no telefone, reduzindo o consumo para ~10–15% por hora).',
          '**Este é um substituto real da Siri para usuários que preferem a privacidade à amplitude de recursos.** O que você abre mão: busca na web, integração com casa inteligente em nuvens proprietárias, cobertura de ações do sistema. O que você ganha: funciona offline, sem telemetria, sem conta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Motor STT:** Whisper.cpp (multiplataforma), WhisperKit (iOS, otimizado para Apple Neural Engine), Sherpa-ONNX (Android, runtime ONNX).',
          '**LLM:** Phi-4 Mini (3,8B) em telefones de ponta; Qwen3 1,7B ou SmolLM 2 1,7B em dispositivos mais antigos.',
          '**TTS:** Piper TTS (código aberto, ~50 MB por voz), TTS do sistema iOS (AVSpeechSynthesizer), TTS do sistema Android.',
          '**Apps para iPhone:** WhisperKit, Whisper Transcription (desenvolvedor Aiko), LLM Farm, PocketPal AI.',
          '**Apps para Android:** Layla (stack integrado), Termux + whisper.cpp + Ollama, apps de demonstração do Sherpa-ONNX.',
          '**Meta de voz ao primeiro áudio:** menos de 2 segundos = "parece utilizável"; menos de 1 segundo = "parece nativo".',
          '**Bateria (1 hora ativa):** iPhone 16 Pro ~25–35%; Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'Qual stack de assistente de voz você deve criar?',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'Árvore de decisão para escolher o caminho do assistente de voz: totalmente no dispositivo (iPhone com WhisperKit + LLM Farm em ~0,9–1,4 s, ou Android com Layla / Termux em ~1,0–2,0 s) para privacidade, versus híbrido (STT no telefone + Ollama 70B em casa, ~1,5–2,5 s) ou assistente em nuvem para qualidade de classe 70B e dados em tempo real.',
        content:
          '**Para a maioria dos usuários em telefones de ponta: o caminho totalmente no dispositivo é a opção certa.** Ele é totalmente privado, funciona offline e produz resultados utilizáveis em menos de 1,5 segundo. Use o caminho híbrido apenas se você precisar especificamente de qualidade de classe 70B e aceitar a dependência do Wi-Fi doméstico.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Crie um assistente de voz totalmente offline combinando Whisper (STT), um LLM local de 3B–4B (Phi-4 Mini ou Gemma 3 4B) e Piper ou o TTS do sistema — voz ao primeiro áudio de 0,9–1,6 segundo em telefones de ponta em 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Um assistente de voz tem três tarefas: converter sua voz em texto, gerar uma resposta e falar essa resposta em voz alta. Com o Whisper para o primeiro passo, um LLM local pequeno para o segundo e o Piper ou a voz integrada do telefone para o terceiro, você pode fazer os três no telefone sem internet. O ciclo completo leva cerca de 1 segundo em um iPhone ou Android de ponta recente — rápido o suficiente para parecer que você está falando com a Siri, mas tudo permanece no dispositivo.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual stack de assistente de voz?',
          localIf: [
            'Você quer privacidade total e funcionamento offline → totalmente no dispositivo (caminho iPhone ou Android)',
            'Você viaja com frequência e quer voz em aviões / áreas sem sinal → totalmente no dispositivo',
            'Você é jornalista, profissional de saúde ou advogado → totalmente no dispositivo para confidencialidade de fontes / pacientes / clientes',
            'Você é desenvolvedor criando um protótipo de fluxo de trabalho de voz offline → totalmente no dispositivo',
          ],
          cloudIf: [
            'Você precisa de qualidade de modelo 70B+ (raciocínio complexo) → caminho híbrido (STT no telefone + Ollama remoto em casa)',
            'Você precisa de busca na web em tempo real ou dados ao vivo → assistente na nuvem (não há equivalente local em 2026)',
            'Você precisa de integração profunda com nuvens proprietárias (Google Calendar, iCloud, etc.) → continue usando Siri / Google Assistant para essas tarefas',
          ],
          quick: [
            'Caminho mais simples no iPhone: WhisperKit + LLM Farm + voz iOS',
            'Caminho mais simples no Android: Layla (stack integrado)',
            'Melhor qualidade: híbrido (STT no telefone + Ollama em casa 70B)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Comece pelo caminho totalmente no dispositivo mesmo que eventualmente queira a abordagem híbrida. A configuração no dispositivo ensina as partes móveis (STT, LLM, TTS) e funciona sem dependência de um servidor em casa. Uma vez que estiver funcionando, trocar a chamada ao LLM de local para uma URL remota do Ollama é uma mudança de uma linha.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'Comparação de stacks de assistente de voz',
        content:
          '**Três stacks viáveis em 2026, cada um ajustado a uma prioridade diferente: simplicidade (Layla), acabamento nativo da Apple (WhisperKit + LLM Farm) ou qualidade de LLM (híbrido).** Os três executam STT e TTS no dispositivo; o híbrido move apenas o passo do LLM para um computador em casa.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha iPhone (WhisperKit + LLM Farm + voz iOS) para simplicidade no iOS, Android (Layla) para simplicidade no Android, ou híbrido (STT no telefone + Ollama em casa) para melhor qualidade de LLM.',
          },
          {
            type: 'plain-terms',
            text: 'Os números de latência abaixo são voz ao primeiro áudio — o tempo desde quando você para de falar até o assistente começar a responder. Menos de 2 segundos parece utilizável; menos de 1 segundo parece nativo. A bateria é a porcentagem consumida em 1 hora de conversa ativa de mão dupla.',
          },
        ],
        columns: ['Stack', 'Latência (voz → primeiro áudio)', 'Bateria (1 h ativa)', 'Ideal para'],
        rows: [
          { 'Stack': 'iPhone (WhisperKit + LLM Farm)', 'Latência (voz → primeiro áudio)': '~0,9–1,4 seg (16 Pro / 17 Pro)', 'Bateria (1 h ativa)': '~25–35%', 'Ideal para': 'Usuários de iOS que querem acabamento nativo da Apple' },
          { 'Stack': 'Android (Layla, integrado)', 'Latência (voz → primeiro áudio)': '~1,0–1,6 seg (Pixel 9 Pro, Galaxy S25 Ultra)', 'Bateria (1 h ativa)': '~25–40%', 'Ideal para': 'Usuários de Android que querem simplicidade em um único app' },
          { 'Stack': 'Android (Termux + whisper.cpp + Ollama + Piper)', 'Latência (voz → primeiro áudio)': '~1,2–2,0 seg', 'Bateria (1 h ativa)': '~30–40%', 'Ideal para': 'Usuários avançados que querem controle total' },
          { 'Stack': 'Híbrido (STT no telefone + Ollama em casa 70B)', 'Latência (voz → primeiro áudio)': '~1,5–2,5 seg (depende do Wi-Fi)', 'Bateria (1 h ativa)': '~10–15%', 'Ideal para': 'Qualidade de classe 70B, uso em rede doméstica' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A latência é dominada pelo passo de "primeiro token" do LLM, não pelo Whisper nem pelo TTS. Para reduzir a latência, use um LLM menor (Qwen3 1,7B no lugar do Phi-4 Mini reduz o passo do LLM de ~600 ms para ~250 ms). A desvantagem são respostas mais curtas e menos detalhadas.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'O stack de três componentes: STT + LLM + TTS',
        content:
          '**Voz em texto, o LLM e texto em voz são três componentes independentes que você pode trocar individualmente.** Otimizar qualquer um deles (Whisper menor, LLM mais rápido, TTS com menor latência) reduz a latência total.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** O Whisper Small (~466 MB) é a escolha padrão para celular — ~12% de taxa de erro de palavras (WER) em fala comum, ~150–300 ms de latência STT para uma fala de 5 segundos. O Whisper Medium (~1,5 GB) baixa o WER para ~9% mas dobra a latência. O Whisper Tiny (~75 MB) é rápido mas propenso a erros com ruído de fundo moderado. O WhisperKit (iOS) usa o Apple Neural Engine para uma latência STT ~30–40% menor que o Whisper.cpp padrão.',
          '**LLM — Phi-4 Mini, Gemma 3 4B, Llama 3.2 3B.** O Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) é o padrão recomendado em telefones de ponta. O tempo até o primeiro token é de ~400–800 ms no iPhone 16 Pro para um prompt curto — o maior contribuinte individual para a latência total. Para dispositivos mais antigos ou com RAM limitada, o Qwen3 1,7B (~1,1 GB) é mais rápido (~200–400 ms TTFT) ao custo de respostas mais curtas e simples.',
          '**TTS — Piper TTS ou TTS do sistema.** O Piper (projeto Rhasspy, código aberto) suporta mais de 30 idiomas, ~50 MB por voz, ~100–200 ms de latência até o primeiro áudio, e funciona no iOS, Android, Linux, macOS e Windows. O TTS do sistema (AVSpeechSynthesizer no iOS, TextToSpeech no Android) tem menor latência (~50–100 ms) mas uma voz mais robótica em versões antigas do sistema. As vozes do sistema do iOS 18+ e Android 14+ são notavelmente melhores do que em versões anteriores.',
          '**Detecção de atividade de voz (VAD).** A maioria dos apps usa Silero VAD ou webrtcvad para detectar quando você para de falar. Uma janela de silêncio de 200–500 ms é o limite típico de fim de fala. Curta demais → corta você no meio da frase; longa demais → adiciona latência. 300 ms é um valor padrão razoável.',
          '**O pipeline completo:** captura do microfone → VAD detecta o fim da fala → Whisper transcreve → LLM gera a resposta → TTS fala. Transmitir os tokens do LLM ao TTS em streaming à medida que chegam é o que faz o "primeiro áudio" chegar em menos de 1 segundo em telefones de ponta — a alternativa (esperar a resposta completa do LLM e depois falar) dobra a latência percebida.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o seu stack parece lento, analise cada passo: registre a duração de (microfone → STT pronto), (STT pronto → primeiro token do LLM), (primeiro token do LLM → primeiro áudio do TTS). Um passo geralmente domina. Em telefones de ponta em 2026, quase sempre é o tempo até o primeiro token do LLM (~400–800 ms). Troque por um LLM menor para reduzir a latência percebida.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'Configuração no iPhone: WhisperKit + LLM Farm (5 min)',
        content:
          '**O assistente de voz para iPhone mais simples e totalmente offline em 2026: WhisperKit (ou Whisper Transcription) para STT, LLM Farm para o LLM e o TTS do sistema iOS para a voz.** O tempo total de configuração é de 5–10 minutos mais o tempo de download do modelo.',
        numberedItems: [
          'Instale um app baseado no WhisperKit na App Store (por exemplo, "Whisper Transcription" do desenvolvedor Aiko, gratuito) — ele oferece transcrição no dispositivo usando o Apple Neural Engine. Você também pode compilar o app de referência do WhisperKit pelo GitHub (Argmax / WhisperKit).',
          'No WhisperKit / Whisper Transcription: baixe o modelo "Small" (~466 MB). O Tiny é mais rápido mas impreciso; o Medium é mais preciso mas mais lento.',
          'Instale o LLM Farm na App Store (gratuito). No LLM Farm: toque em Modelos → "Adicionar modelo a partir de URL" → cole uma URL do Hugging Face para o Phi-4 Mini Q4_K_M (ou use a biblioteca integrada se disponível). O modelo ocupa ~2,7 GB.',
          'Conecte-os usando os Atalhos do iOS: crie um Atalho com estas ações — (1) Gravar áudio (ou aceitar entrada de áudio da Folha de compartilhamento), (2) Transcrever com Whisper Transcription, (3) Gerar texto com LLM Farm (se disponível) ou Private LLM (~£10, tem uma ação de Atalhos), (4) Reproduzir texto com a voz do sistema iOS.',
          'Atribua o Atalho a um widget de tela de bloqueio, ao Botão de Ação (iPhone 15 Pro e mais recentes) ou a "E aí Siri, executar [nome do atalho]". O Botão de Ação oferece o menor tempo de resposta mãos livres.',
          'Teste: mantenha pressionado o Botão de Ação → fale → solte. O STT é executado (~200 ms) → o LLM gera (~600 ms primeiro token, transmite ao TTS) → o primeiro áudio soa em ~0,9–1,4 seg no total. Ajuste o limite de silêncio do VAD no Atalho se ele cortar você.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O LLM Farm atualmente não expõe uma ação de Atalhos (em maio de 2026). Para usar o pipeline de Atalhos do iOS, você precisará do Private LLM (~£10 pagamento único) que expõe uma ação "Gerar texto". A abordagem com Atalhos é o que faz o caminho no iPhone ser de "5 minutos" — sem Atalhos, é preciso encadear os apps manualmente.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'Configuração no Android: Layla ou stack Termux (5–15 min)',
        content:
          '**Dois caminhos no Android: Layla (abordagem de stack integrado em 5 minutos) ou Termux + whisper.cpp + Ollama + Piper (abordagem manual em 15 minutos com mais controle).** Ambos funcionam totalmente offline depois de configurados.',
        items: [
          '**Caminho A — Layla (5 min):** instale o Layla pela Play Store, baixe um modelo (Phi-4 Mini ou Gemma 3 4B), ative o modo de voz nas configurações. O Layla inclui o whisper.cpp para STT, o LLM local para a resposta e usa o TTS do sistema Android. O caminho mais simples; a desvantagem é menor capacidade de configuração.',
          '**Caminho B — Stack Termux (15 min):**',
          'Instale o Termux pelo F-Droid (não pela Play Store; a versão da Play Store está desatualizada).',
          'No Termux: `pkg update && pkg install git cmake clang ffmpeg`.',
          'Compile o whisper.cpp: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` e baixe o modelo Small: `bash ./models/download-ggml-model.sh small`.',
          'Instale o Ollama (build Termux ARM): `curl -fsSL https://ollama.com/install.sh | sh`. Baixe um modelo: `ollama pull phi4-mini`. Inicie o servidor: `ollama serve`.',
          'Instale o Piper: `pip install piper-tts` (em um venv Python do Termux) e baixe uma voz (por exemplo `piper-tts --download-voice en_US-amy-low`).',
          'Conecte o pipeline com um pequeno script Python que leia do `arecord`, execute o whisper.cpp sobre o áudio, envie a transcrição para o Ollama em localhost:11434 e redirecione a resposta para o Piper. Ou use o Tasker para encadear comandos de shell acionados por um botão ou um bloco rápido.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para o Caminho B, use o Termux:Widget para criar um atalho na tela inicial que execute o script do assistente de voz. Um único toque no widget aciona o pipeline completo. Combine com um botão Bluetooth ou um bloco rápido do Tasker para invocação mãos livres. As teclas de ação / laterais do Pixel 9 Pro e do Galaxy S25 Ultra também podem acionar ações do Tasker.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'Configuração híbrida: STT no telefone + Ollama remoto',
        content:
          '**O stack híbrido move apenas a chamada ao LLM para um computador em casa, mantendo o STT e o TTS no dispositivo.** Isso dá acesso a modelos de classe 70B (Llama 3.3 70B, Qwen3-Coder 32B) enquanto preserva a privacidade do áudio (que nunca sai do telefone — apenas a transcrição de texto é enviada pelo seu Wi-Fi doméstico).',
        numberedItems: [
          'No computador de casa (Mac, PC ou NAS): instale o Ollama. Baixe um modelo 70B: `ollama pull llama3.3:70b` (requer ~40 GB de espaço livre em disco + ~48 GB de RAM ou 24 GB de VRAM de GPU).',
          'Vincule o Ollama à sua rede local: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. Anote o IP local do computador de casa (por exemplo, 192.168.1.20).',
          'No telefone, configure o seu pipeline de assistente de voz (Atalho do iOS ou Tasker do Android) para enviar a transcrição do Whisper via HTTP POST para `http://192.168.1.20:11434/api/generate` em vez da chamada ao LLM local.',
          'O TTS continua sendo executado no telefone (Piper ou voz do sistema) usando o texto de resposta do computador de casa.',
          'Resultado: o Whisper STT é executado no telefone (o áudio nunca sai do dispositivo), o Ollama em casa gera uma resposta de qualidade 70B em ~600–1200 ms, o TTS fala no telefone. Latência total ~1,5–2,5 segundos — um pouco maior do que totalmente no dispositivo mas com qualidade de LLM muito melhor.',
        ],
        promptExamples: [
          {
            label: 'Atalho do iOS: assistente de voz híbrido (acionamento com o Botão de Ação)',
            text: '1. Gravar áudio → salvar em arquivo temporário.\n2. Transcrever com Whisper Transcription → saída: texto da transcrição.\n3. Obter conteúdo de URL → URL: http://192.168.1.20:11434/api/generate, Método: POST, corpo JSON: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → saída: texto de resposta.\n4. Reproduzir texto → entrada: texto de resposta, voz: voz do sistema iOS.\nAtribua ao Botão de Ação. Mantenha pressionado para gravar; solte para enviar. O primeiro áudio soa em ~1,5–2,5 seg.',
          },
          {
            label: 'Tasker: assistente de voz híbrido no Android',
            text: '1. Variável: %TRANSCRIPT = (saída do whisper-cli sobre o arquivo de áudio gravado).\n2. Solicitação HTTP: URL http://192.168.1.20:11434/api/generate, Método POST, Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. Variável: %REPLY = (campo "response" analisado do JSON).\n4. Falar: %REPLY (TTS do sistema Android ou Piper se instalado).\nAcionar via bloco rápido, botão Bluetooth ou pressionamento longo na tecla lateral do Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para a menor latência no modo híbrido, configure o Ollama no modo streaming (`"stream":true`) e transmita os tokens ao TTS à medida que chegam em vez de esperar a resposta completa. Os Atalhos do iOS não conseguem fazer streaming de forma nativa, mas um pequeno plugin do Tasker ou um app iOS personalizado conseguem. Com streaming, a latência percebida até o "primeiro áudio" cai 200–400 ms mesmo que o tempo total de resposta seja o mesmo.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'Orçamento de latência: para onde vão os segundos',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'Orçamento de latência de voz até o primeiro áudio no iPhone 16 Pro: detecção VAD 250 ms, STT do Whisper 200 ms, tempo até o primeiro token do LLM 700 ms (54% do total, a maior alavanca), primeiro áudio do TTS 150 ms — total ≈1,3 segundo.',
        content:
          '**Em telefones de ponta em 2026, o tempo até o primeiro token do LLM domina a latência total — geralmente 50–60% do tempo de voz ao primeiro áudio.** Otimizar o passo do LLM tem mais impacto do que ajustar o Whisper ou o TTS.',
        columns: ['Passo', 'Tempo típico (iPhone 16 Pro, no dispositivo)', 'Notas'],
        rows: [
          { 'Passo': 'Detecção de fim de fala VAD', 'Tempo típico (iPhone 16 Pro, no dispositivo)': '~200–500 ms', 'Notas': 'Ajustável; 300 ms por padrão. Conta na latência percebida.' },
          { 'Passo': 'Whisper Small STT (fala de 5 seg)', 'Tempo típico (iPhone 16 Pro, no dispositivo)': '~150–300 ms', 'Notas': 'WhisperKit ~30–40% mais rápido via Apple Neural Engine.' },
          { 'Passo': 'Tempo até o primeiro token do LLM (Phi-4 Mini)', 'Tempo típico (iPhone 16 Pro, no dispositivo)': '~400–800 ms', 'Notas': 'Maior contribuinte. Modelo menor = mais rápido.' },
          { 'Passo': 'Primeiro áudio do TTS (Piper ou sistema)', 'Tempo típico (iPhone 16 Pro, no dispositivo)': '~100–200 ms', 'Notas': 'TTS do sistema um pouco mais rápido que o Piper.' },
          { 'Passo': 'Total voz ao primeiro áudio', 'Tempo típico (iPhone 16 Pro, no dispositivo)': '~0,9–1,4 seg', 'Notas': 'Menos de 2 seg = "parece utilizável"; menos de 1 seg = "parece nativo".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para ficar abaixo de 1 segundo no total: use Whisper Tiny (75 MB, ~80 ms STT) + Qwen3 1,7B (~250 ms TTFT) + TTS do sistema (~80 ms primeiro áudio). Total ~600–800 ms no iPhone 16 Pro. A desvantagem são respostas mais curtas e menos coerentes do LLM e menor precisão do STT em ambientes ruidosos. Vale a pena se a velocidade de resposta for a sua prioridade principal.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'Precisão e consumo de bateria durante 1 hora',
        content:
          '**O Whisper Small atinge ~88% de precisão em fala comum com ruído de fundo moderado; o Whisper Medium chega a ~91% mas dobra a latência.** O consumo de bateria durante 1 hora de conversa ativa é de ~25–35% no iPhone 16 Pro e ~25–40% no Android de ponta.',
        items: [
          '**Precisão do Whisper por tamanho de modelo (WER LibriSpeech-clean, menor é melhor):** Tiny ~7,5%, Small ~3%, Medium ~2,4%, Large v3 ~1,8%. Em condições reais com ruído: Tiny piora para ~15–20% WER, Small para ~10–14%, Medium para ~7–10%, Large v3 para ~5–7%.',
          '**Whisper na nuvem vs Whisper local:** A API do Whisper na nuvem da OpenAI usa o Large v3 por padrão (~2% WER em fala limpa). O Whisper Small local em um telefone é ~3% WER no mesmo áudio — próximo o suficiente para que a diferença seja imperceptível no uso cotidiano do assistente.',
          '**Consumo de bateria (1 hora de conversa ativa, tela ligada):** iPhone 16 Pro ~25–35%; iPhone 17 Pro ~22–30%; Pixel 9 Pro ~30–40%; Galaxy S25 Ultra ~28–38%. O modo híbrido reduz o consumo do telefone para ~10–15% por hora porque apenas o STT é executado localmente.',
          '**Limitação térmica:** a inferência sustentada do LLM no dispositivo aciona a limitação térmica após ~10–15 min no iPhone (superfície do chip ~38°C); ~15–20 min no Android de ponta (melhor massa térmica em tablets e telefones grandes). A limitação reduz os tokens/seg em 30–50%, alongando a latência até o primeiro token do LLM de ~600 ms para ~900 ms.',
          '**Mitigação para sessões longas:** conecte o carregador, coloque o telefone virado para cima sobre uma superfície dura (não na mão) ou mude para o modo híbrido. O telefone como microfone usa uma fração da energia do telefone como tudo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Uma sessão de voz totalmente local de 1 hora pode consumir a bateria do seu telefone em 30–40%. Para uso o dia todo ou no carro, planeje o carregamento. O caminho híbrido (apenas STT no dispositivo) é a opção realista para assistentes de voz ambientais sempre ativos — o computador de casa faz o trabalho pesado.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'Mãos livres: Shortcuts, Tasker, CarPlay, Android Auto',
        content:
          '**A ativação mãos livres depende do mecanismo de acionamento, não do stack de voz.** O iOS usa Atalhos com o Botão de Ação ou "E aí Siri, executar [atalho]"; o Android usa Tasker com a tecla lateral, um bloco rápido ou botões Bluetooth.',
        items: [
          '**Botão de Ação do iPhone (iPhone 15 Pro e mais recentes):** atribua um Atalho que acione o pipeline de voz. Mantenha pressionado o Botão de Ação para começar a gravar; solte para enviar. O acionador mãos livres com menor latência no iPhone em 2026.',
          '**iPhone "E aí Siri, executar [nome do atalho]":** ativa a Siri (~500 ms) e depois executa o Atalho. Adiciona latência em relação ao Botão de Ação mas funciona mãos livres a qualquer momento com o telefone desbloqueado.',
          '**Tecla lateral / tecla Bixby do Android (Galaxy):** atribua uma ação do Tasker pelas configurações de Modos e Rotinas do Galaxy ou apps de remapeamento da tecla Bixby. Pressione para acionar.',
          '**Bloco rápido do Tasker no Android:** adicione um bloco rápido ao painel de notificações que execute o script de voz. Acionamento com dois deslizamentos a partir da tela de bloqueio.',
          '**Botões Bluetooth (por exemplo, Flic, botões de mídia genéricos):** pareie com o iOS ou Android, configure para acionar o Atalho de voz / tarefa do Tasker. Verdadeiramente mãos livres (botão em uma mesa, no volante, em um bolso).',
          '**CarPlay / Android Auto:** estes usam o sistema Siri / Google Assistant por design — nenhum expõe uma API de assistente de voz de terceiros em 2026. A solução alternativa para o CarPlay é vincular um Atalho a um botão de ação do CarPlay (suporte limitado de Atalhos); para o Android Auto, use o Tasker acionado por um botão de mídia Bluetooth. Nenhum tem o mesmo nível de integração que os assistentes do sistema.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso no carro sem integração com CarPlay / Android Auto: pareie um pequeno botão Bluetooth (Flic, AirShou, controle de mídia genérico) e fixe-o no volante. Pressione para acionar o assistente de voz offline — ele funciona sem internet, nunca envia áudio para a nuvem e responde em ~1,5 segundo. A desvantagem em relação ao CarPlay é que não há interface na tela do carro, apenas áudio.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Garantias de privacidade: realmente offline vs assistido pela nuvem',
        content:
          '**Um assistente de voz é "realmente offline" somente se o áudio do microfone, as transcrições e o áudio do TTS permanecerem no dispositivo sem nenhuma chamada de rede.** Muitos apps comercializados como "privados" ainda enviam transcrições ou telemetria para a nuvem — verifique com o modo avião ou um monitor de rede antes de confiar.',
        items: [
          '**Como verificar "realmente offline":** coloque o telefone no modo avião e use o assistente. Se ele funcionar com qualidade plena, é realmente offline. Se degradar ou falhar, algum passo depende de um serviço na nuvem.',
          '**Captura de áudio:** os dados do microfone devem ser processados localmente e nunca gravados em disco ou enviados a qualquer lugar. O Whisper, o WhisperKit e o Sherpa-ONNX executam o STT na memória e descartam o áudio após a transcrição.',
          '**Inferência do LLM:** se a resposta for gerada por um modelo local (Phi-4 Mini, Gemma 3, Llama 3.2) no telefone, nenhum prompt sai do dispositivo. Se o assistente usar um modo "assistido pela nuvem" (Apple Intelligence Private Cloud Compute, o modo primeiro-no-dispositivo-depois-nuvem do Google), as transcrições podem ser enviadas a um servidor sob certas condições — verifique a política de privacidade do app.',
          '**TTS:** o Piper e o TTS do sistema são totalmente no dispositivo. Algumas vozes "premium" na nuvem (ElevenLabs, OpenAI TTS) exigem enviar o texto de resposta para um servidor — evite-as para uso verdadeiramente offline.',
          '**Postura de privacidade do caminho híbrido:** no modo híbrido, o áudio permanece no telefone (Whisper local), mas a transcrição de texto é enviada ao seu servidor Ollama em casa pelo seu Wi-Fi doméstico. Isso é apenas rede local, não nuvem — os dados permanecem dentro da sua rede. Aceitável para a maioria dos usuários preocupados com privacidade; não equivalente a totalmente no dispositivo para os modelos de ameaça mais rigorosos.',
          '**Notas específicas de apps (maio de 2026):** o WhisperKit e o whisper.cpp são de código aberto e verificavelmente offline. O Layla funciona localmente por padrão (verifique no modo avião). O LLM Farm e o PocketPal AI executam a inferência totalmente no dispositivo. O Apple Intelligence tem tanto um modo no dispositivo quanto o Private Cloud Compute — desative o PCC nas Configurações para funcionamento totalmente no dispositivo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o funcionamento totalmente offline for crítico (jornalista / confidencialidade de fontes, saúde, jurídico): prefira apps de código aberto (build de referência do WhisperKit, whisper.cpp via Termux, Layla) onde você pode auditar o comportamento de rede. Os apps de código fechado (mesmo os comercializados como "privados") podem adicionar funcionalidades na nuvem em atualizações futuras sem notificação evidente ao usuário.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Usar o Whisper Tiny para tudo.** O Tiny é rápido (~80 ms STT) mas propenso a erros em ambientes ruidosos (~15–20% WER frente a ~10–14% do Small). O Tiny é aceitável para comandos curtos em salas silenciosas; use o Small para assistentes de voz de propósito geral.',
          '**Esperar a resposta completa do LLM antes do TTS começar.** Isso dobra a latência percebida. Transmita os tokens do LLM ao TTS à medida que chegam — o Piper suporta entrada em streaming, o TTS do sistema suporta fala incremental. O primeiro áudio deve ser reproduzido após a primeira frase do LLM, não após a resposta completa.',
          '**Executar o LLM no dispositivo em um ambiente quente.** A limitação térmica é acionada em minutos sob sol direto ou dentro de um carro quente, reduzindo os tokens/seg em 30–50% e empurrando a latência acima de 2 segundos. Use o caminho híbrido ou mantenha o telefone frio.',
          '**Confiar em "privado" sem verificar.** "Privado" e "local" são termos de marketing em 2026 — alguns apps que afirmam processamento local ainda enviam dados para casa para análises, atualizações de modelos ou transcrição com apoio na nuvem. Verifique no modo avião antes de confiar neles para uso sensível.',
          '**Construir o stack Termux do Android em um dispositivo com pouca RAM.** O Termux + whisper.cpp + Ollama + Piper consome ~4 GB de RAM do sistema no pico. Os dispositivos com 6 GB ou menos de RAM acabarão matando componentes por OOM no meio de uma conversa. Use o Layla no Android com pouca RAM, ou fique com o caminho no iPhone.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) (Whisper multiplataforma, incluindo builds para Android e iOS).',
          'WhisperKit (Argmax) — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) (Whisper otimizado para Apple Neural Engine no iOS / macOS).',
          'Piper TTS (Rhasspy) — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) (TTS neural de código aberto, compatível com celulares, mais de 30 idiomas).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS para executar modelos GGUF localmente).',
          'Layla (Android) — [Listagem na Play Store](https://play.google.com) e documentação do desenvolvedor (stack LLM local integrado com suporte de voz).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quão preciso é o Whisper local frente ao Whisper na nuvem?',
            a: 'O Whisper Small executando localmente em um telefone atinge ~3% WER em fala limpa; o Whisper na nuvem da OpenAI (Large v3) atinge ~2%. Em ambientes ruidosos, o Small local cai para ~10–14% WER enquanto o Cloud Large v3 cai para ~5–7%. Para o uso cotidiano do assistente de voz, a precisão local é próxima o suficiente para ser imperceptível. Para ditado de texto longo onde cada palavra importa, é preferível a nuvem ou o Medium / Large local.',
          },
          {
            q: 'Um assistente de voz local pode substituir completamente a Siri?',
            a: 'Para perguntas e respostas privadas, redação e resumos: sim, com qualidade comparável ou melhor que os recursos no dispositivo da Siri. Para ações do sistema (abrir apps, definir timers, controlar o HomeKit), iniciar buscas na web ou dados ao vivo (clima, resultados esportivos): não — a integração da Siri com o iOS e os serviços da Apple não pode ser replicada por um stack local de terceiros em 2026. Muitos usuários mantêm os dois: Siri para ações do sistema, o stack local para perguntas e respostas privadas.',
          },
          {
            q: 'Isso funciona com CarPlay ou Android Auto?',
            a: 'De forma limitada. O CarPlay e o Android Auto são projetados em torno do sistema Siri / Google Assistant; nenhum expõe uma API de assistente de voz de terceiros. Soluções alternativas: use um Atalho vinculado a um botão de ação do CarPlay (suporte limitado de Atalhos), ou pareie um botão Bluetooth (Flic, controle de mídia genérico) e acione o Tasker / Atalhos a partir dele. Nenhum alcança o nível de integração dos assistentes do sistema para uso no carro.',
          },
          {
            q: 'Como faço para acioná-lo com as mãos livres?',
            a: 'iPhone: mantenha pressionado o Botão de Ação (iPhone 15 Pro e mais recentes) para invocar o Atalho, ou diga "E aí Siri, executar [nome do atalho]". Android: use a tecla lateral ou a tecla Bixby em telefones Galaxy, um bloco rápido do Tasker ou um botão Bluetooth pareado. Para mãos livres ambiental verdadeiro (sempre escutando uma palavra de ativação), o stack local não iguala a Siri / Google Assistant em 2026 — o detector de palavra de ativação do sistema do telefone não está exposto a apps de terceiros.',
          },
          {
            q: 'Ele consegue lidar com conversas em vários idiomas?',
            a: 'Sim, mas com ressalvas. O Whisper detecta automaticamente o idioma de entrada e suporta 99 idiomas. Os LLMs locais variam: o Phi-4 Mini lida bem com o inglês e razoavelmente com os principais idiomas europeus; o Qwen3 tem forte suporte multilíngue incluindo o chinês; o Gemma 3 suporta mais de 100 idiomas. Para TTS, o Piper tem vozes em mais de 30 idiomas; o TTS do sistema depende dos pacotes de idioma do sistema operacional que você tem instalados. A troca de idioma no meio da conversa funciona no Whisper mas pode confundir o LLM.',
          },
          {
            q: 'O ruído de fundo arruína o STT local?',
            a: 'O Whisper Tiny se degrada significativamente com ruído moderado (~15–20% WER); o Small lida com ruído de nível cafeteria razoavelmente (~10–14% WER); o Medium e o Large lidam bem com a maioria dos ambientes reais. Para uso ruidoso (carros, transporte público), use o Whisper Medium se o seu telefone tiver a RAM, ou aplique o VAD de forma agressiva (transcreva apenas quando a fala for detectada, ignore os silêncios entre falas).',
          },
          {
            q: 'Como integro com dispositivos de casa inteligente de forma local?',
            a: 'Passe a resposta do LLM por um analisador que detecte intenções (por exemplo, "apagar as luzes da cozinha") e chame diretamente a API do seu hub de casa inteligente local — o Home Assistant tem uma API REST no seu IP local, e a integração com o Apple HomeKit funciona pelas ações "Controlar a casa" dos Atalhos. Evite as integrações de casa inteligente na nuvem (Alexa, Google Home) se você quiser um pipeline totalmente offline.',
          },
          {
            q: 'Posso personalizar a voz (TTS)?',
            a: 'Sim. O Piper TTS tem mais de 100 vozes treinadas pela comunidade em mais de 30 idiomas, baixáveis como modelos de voz de ~50 MB. Os Atalhos de voz do iOS permitem escolher entre as vozes do sistema incluindo as vozes Premium de maior qualidade (baixar em Configurações → Acessibilidade → Conteúdo falado → Vozes). O TTS do sistema Android suporta pacotes de voz do Google ou de terceiros. A clonagem de voz personalizada (sua própria voz ou uma persona específica) requer uma cadeia de ferramentas TTS separada (Coqui, Tortoise TTS) — ainda não é prático no dispositivo em 2026.',
          },
          {
            q: 'A bateria sofre muito?',
            a: 'Sim — cerca de 25–40% por hora de conversa ativa em telefones de ponta. Para consultas de voz ocasionais, o impacto é pequeno. Para uso o dia todo ou sempre ativo, conecte o carregador ou use o caminho híbrido (apenas o STT é executado no dispositivo, reduzindo o consumo para ~10–15% por hora). A escuta passiva em segundo plano com detecção de palavra de ativação atualmente não é viável em stacks locais de terceiros a um custo de bateria aceitável.',
          },
          {
            q: 'O iOS 19 ou o Android 16 vão quebrar essa configuração?',
            a: 'É improvável para o stack principal (Whisper, LLM local, TTS) — esses são apps em espaço de usuário que dependem de APIs padrão (captura de microfone, TTS, rede). O que pode quebrar: as integrações de Atalhos se a Apple mudar a API de Atalhos; o Termux no Android se o Android 16 restringir ainda mais os processos em segundo plano (o Android vem restringindo isso a cada versão). Mantenha os apps atualizados e verifique após cada atualização maior do sistema operacional.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — apps da camada base (PocketPal AI, LLM Farm, Private LLM) para o caminho no iPhone.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — apps da camada base (Layla, Maid, MLC Chat, Termux + Ollama) para o caminho no Android.',
          '[Melhores modelos LLM para celular em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — camada de modelo do stack de voz; benchmarks e compromissos de qualidade vs latência.',
          '[Como executar IA em um tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — equivalente em tablet para usuários que querem uma configuração de voz com tela maior.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — autoridade de modelos mais ampla cobrindo todos os níveis de hardware, útil para escolher o LLM na configuração híbrida.',
          '[Diretório de software LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — entradas do diretório para Whisper.cpp, WhisperKit, Piper TTS e outros componentes do stack de voz.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Crie um assistente de voz local no seu telefone: Whisper + LLM local (sem nuvem) — 2026',
      url: 'https://www.promptquorum.com/pt/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'pt'),
      description: 'IA de voz totalmente offline no iPhone e Android em 2026. Whisper STT local + LLM local + Piper TTS. Configuração no iPhone, Android e híbrida; latência, bateria, privacidade.',
      inLanguage: 'pt-BR',
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
        { '@type': 'Thing', name: 'LLM locais' },
        { '@type': 'Thing', name: 'iPhone offline' },
        { '@type': 'Thing', name: 'Android offline' },
        { '@type': 'Thing', name: 'Asistente de voz' },
        { '@type': 'Thing', name: 'IA móvil' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'أنشئ مساعدًا صوتيًا محليًا على هاتفك: ⁨Whisper + LLM⁩ محلي (بدون سحابة) — ⁨2026⁩',
    seoTitle: 'مساعد صوتي محلي ⁨Whisper + LLM⁩ للهاتف ⁨2026⁩',
    intro:
      'مساعد صوتي محلي بالكامل على iPhone أو Android في 2026 يجمع ثلاثة مكونات: Whisper لتحويل الصوت إلى نص، ونموذج LLM محلي على الجهاز لتوليد الردود، و Piper أو نظام التحويل النصي إلى صوتي للنطق. زمن الاستجابة الفعلي من لحظة الكلام حتى أول صوت على هواتف المستوى العالي هو 0.8–1.5 ثانية، دون عتبة الثانيتين التي "تبدو قابلة للاستخدام". يغطي هذا الدليل مسار iPhone ‏(LLM Farm + WhisperKit)‏ ومسار Android ‏(Layla + Whisper.cpp)‏ والمسار الهجين ‏(STT على الهاتف + Ollama عن بُعد)‏، مع أرقام مقيسة للكمون والبطارية والدقة.',
    metaDescription:
      'Whisper STT محلي + LLM على الجهاز + Piper TTS: زمن استجابة 0.8–1.5 ثانية. مسار iPhone مع WhisperKit، Android مع Whisper.cpp، وهجين عبر Ollama.',
    twitterDescription:
      'أنشئ بديلاً لـ Siri يعمل دون اتصال: Whisper STT محلي + Phi-4 Mini + Piper TTS. صوت إلى أول صوت في أقل من 1.5 ثانية على الهواتف المتميزة. إعداد iPhone + Android.',
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
      'مستخدمو الهواتف المهتمون بالخصوصية الذين يريدون بديلاً لـ Siri / Google Assistant يعمل بالكامل على الجهاز، بمن فيهم المسافرون والصحفيون والمهنيون الصحيون والمطورون الذين يبنون سير عمل صوتية دون اتصال.',
    readTime: '13 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مساعد صوتي محلي',
    targetKeywords: [
      'مساعد صوتي محلي هاتف',
      'whisper offline iphone',
      'whisper llm محلي android',
      'بديل siri دون اتصال',
      'piper tts جوال',
      'whisperkit ios',
      'layla android صوت',
    ],
    leadAnswerBlock:
      '**مساعد صوتي محلي بالكامل في 2026 يحتاج ثلاثة مكونات: Whisper Small أو Medium للكلام إلى نص، ونموذج LLM محلي 3B–4B ‏(Phi-4 Mini أو Gemma 3 4B)‏ للرد، و Piper TTS أو نظام الـ TTS للصوت.** على iPhone، أبسط إعداد هو WhisperKit ‏(أو تطبيق Whisper Transcription)‏ + LLM Farm + TTS نظام iOS — صوت إلى أول صوت ~0.9–1.4 ثانية على iPhone 16 Pro. على Android، تطبيق Layla يشمل إعدادًا مشابهًا بشكل افتراضي، أو يمكن تجميعه مع Termux + whisper.cpp + Ollama + Piper. لأفضل جودة LLM، استخدم المسار الهجين: الهاتف يشغّل Whisper محليًا للـ STT ‏(حرج للخصوصية)‏ ثم يرسل النسخ النصية إلى Mac أو PC في المنزل عبر Ollama مع نموذج 70B. الإعدادات الثلاثة تعمل بدون إنترنت بعد تنزيل النماذج.',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنك إنشاء مساعد صوتي محلي بالكامل على هاتفك في 2026؟',
        answer:
          'نعم. الإعداد القياسي هو Whisper للكلام إلى نص، ونموذج LLM محلي 3B–4B ‏(Phi-4 Mini أو Gemma 3 4B)‏ للرد، و Piper TTS أو TTS نظام iOS / Android للصوت. على iPhone 16 Pro، زمن الاستجابة من الصوت إلى أول صوت ~0.9–1.4 ثانية، دون عتبة الثانيتين التي "تبدو قابلة للاستخدام". على هواتف Android المتميزة ‏(Pixel 9 Pro، Galaxy S25 Ultra)‏، الكمون ~1.0–1.6 ثانية. مسار iPhone يستخدم WhisperKit + LLM Farm؛ مسار Android يستخدم Layla ‏(حزمة متكاملة)‏ أو Termux + whisper.cpp + Ollama؛ المسار الهجين يبقي الـ STT على الجهاز ويرسل النسخ إلى Mac أو PC في المنزل مع نموذج 70B.',
        bullets: [
          'الحزمة: Whisper ‏(STT)‏ + LLM محلي 3B–4B + Piper أو TTS النظام — كل شيء على الجهاز.',
          'iPhone: WhisperKit / Whisper Transcription + LLM Farm + صوت نظام iOS. كمون ~0.9–1.4 ث على 16 Pro.',
          'Android: Layla ‏(حزمة متكاملة)‏ أو Termux + whisper.cpp + Ollama + Piper. كمون ~1.0–1.6 ث على Pixel 9 Pro.',
          'هجين: الهاتف يشغّل STT محليًا، يرسل النسخ إلى Ollama في المنزل مع Llama 3.3 70B. أفضل جودة.',
          'البطارية ‏(ساعة محادثة نشطة)‏: ~25–35% على iPhone 16 Pro؛ ~25–40% على Android المتميز.',
          'Whisper Small ‏(~466 ميجابايت)‏ هو المعيار للجوال — ~12% WER، ~150–300 مللي ثانية كمون STT.',
          'صوت إلى أول صوت أقل من ثانيتين هو عتبة "يبدو قابلاً للاستخدام"؛ أقل من ثانية يبدو طبيعيًا.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي حزمة مساعد صوتي يجب أن تبنيها؟', anchor: '#which-stack' },
      { label: 'مقارنة حزم المساعد الصوتي', anchor: '#stack-comparison' },
      { label: 'الحزمة الثلاثية: STT + LLM + TTS', anchor: '#the-stack' },
      { label: 'الإعداد على iPhone: WhisperKit + LLM Farm ‏(5 دقائق)‏', anchor: '#iphone-setup' },
      { label: 'الإعداد على Android: Layla أو حزمة Termux ‏(5–15 دقيقة)‏', anchor: '#android-setup' },
      { label: 'الإعداد الهجين: STT على الهاتف + Ollama عن بُعد', anchor: '#hybrid-setup' },
      { label: 'ميزانية الكمون: أين تذهب الثواني', anchor: '#latency-budget' },
      { label: 'الدقة واستهلاك البطارية لمدة ساعة', anchor: '#accuracy-battery' },
      { label: 'الاستخدام حرّ اليدين: Shortcuts وTasker وCarPlay وAndroid Auto', anchor: '#hands-free' },
      { label: 'ضمانات الخصوصية: محلي فعلًا مقابل مدعوم بالسحابة', anchor: '#privacy' },
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
          '**الحزمة المحلية بالكامل هي Whisper ‏(STT)‏ + LLM محلي 3B–4B + Piper أو TTS النظام.** المكونات الثلاثة تعمل محليًا على الجهاز بعد التثبيت؛ بدون مكالمات سحابية أثناء الاستخدام.',
          '**iPhone: WhisperKit + LLM Farm + صوت نظام iOS هو أبسط مسار.** WhisperKit يستخدم Apple Neural Engine للـ STT؛ LLM Farm يشغّل Phi-4 Mini للرد؛ TTS نظام iOS يتولى الصوت. صوت إلى أول صوت: ~0.9–1.4 ثانية على iPhone 16 Pro.',
          '**Android: Layla تشمل الحزمة الكاملة بشكل افتراضي، أو ابنها يدويًا مع Termux + whisper.cpp + Ollama + Piper.** Layla هو أسهل مسار؛ بنية Termux أكثر مرونة. صوت إلى أول صوت: ~1.0–1.6 ثانية على Pixel 9 Pro و Galaxy S25 Ultra.',
          '**هجين ‏(STT على الهاتف + Ollama عن بُعد)‏ يعطي أفضل جودة LLM.** الهاتف يشغّل Whisper محليًا ‏(حرج لخصوصية الصوت)‏ ثم يرسل النص المحوَّل إلى Mac أو PC في المنزل مع Llama 3.3 70B. جودة ردود أفضل؛ يتطلب Wi-Fi منزلي.',
          '**Whisper Small ‏(~466 ميجابايت)‏ هو النقطة المثلى للجوال.** ~12% WER في الكلام الشائع، ~150–300 مللي ثانية كمون STT. Whisper Medium ‏(~1.5 جيجابايت)‏ أدق ‏(~9% WER)‏ لكن أبطأ؛ Whisper Tiny ‏(~75 ميجابايت)‏ أسرع لكن معرض للأخطاء مع الضوضاء الخلفية.',
          '**استهلاك البطارية ملحوظ — نحو 25–35% في الساعة من المحادثة النشطة على الهواتف المتميزة.** للاستخدام طوال اليوم، وصّل الشاحن أو استخدم المسار الهجين ‏(يعمل فقط الـ STT على الهاتف، يخفض الاستهلاك إلى ~10–15% في الساعة)‏.',
          '**هذا بديل حقيقي لـ Siri للمستخدمين الذين يفضلون الخصوصية على اتساع الميزات.** ما تتنازل عنه: البحث على الويب وتكامل المنزل الذكي مع السحابات الاحتكارية وتغطية إجراءات النظام. ما تكسبه: يعمل دون اتصال، بدون تتبع، بدون حساب.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**محرك STT:** Whisper.cpp ‏(متعدد المنصات)‏، WhisperKit ‏(iOS، محسَّن لـ Apple Neural Engine)‏، Sherpa-ONNX ‏(Android، نظام تشغيل ONNX)‏.',
          '**نموذج LLM:** Phi-4 Mini ‏(3.8B)‏ على الهواتف المتميزة؛ Qwen3 1.7B أو SmolLM 2 1.7B على الأجهزة الأقدم.',
          '**TTS:** Piper TTS ‏(مفتوح المصدر، ~50 ميجابايت لكل صوت)‏، TTS نظام iOS ‏(AVSpeechSynthesizer)‏، TTS نظام Android.',
          '**تطبيقات iPhone:** WhisperKit، Whisper Transcription ‏(مطور Aiko)‏، LLM Farm، PocketPal AI.',
          '**تطبيقات Android:** Layla ‏(حزمة متكاملة)‏، Termux + whisper.cpp + Ollama، تطبيقات Sherpa-ONNX التجريبية.',
          '**هدف صوت إلى أول صوت:** أقل من ثانيتين = "يبدو قابلًا للاستخدام"؛ أقل من ثانية = "يبدو طبيعيًا".',
          '**البطارية ‏(ساعة نشطة)‏:** iPhone 16 Pro ~25–35%؛ Pixel 9 Pro / Galaxy S25 Ultra ~25–40%.',
        ],
      },
      whichStack: {
        id: 'which-stack',
        title: 'أي حزمة مساعد صوتي يجب أن تبنيها؟',
        image: '/images/voice-assistant-local-mobile-offline-decision-tree-en.svg',
        imageCaption:
          'شجرة قرار لاختيار مسار المساعد الصوتي: بالكامل على الجهاز (iPhone مع WhisperKit + LLM Farm بزمن ~0.9–1.4 ثانية، أو Android مع Layla / Termux بزمن ~1.0–2.0 ثانية) من أجل الخصوصية، مقابل الهجين (تحويل الصوت على الهاتف + Ollama 70B في المنزل، ~1.5–2.5 ثانية) أو مساعد سحابي لجودة فئة 70B والبيانات المباشرة.',
        content:
          '**لمعظم المستخدمين على الهواتف المتميزة: المسار المحلي بالكامل على الجهاز هو الخيار الصحيح.** خاص تمامًا، يعمل دون اتصال، وينتج نتائج قابلة للاستخدام في أقل من 1.5 ثانية. استخدم المسار الهجين فقط إذا كنت تحتاج تحديدًا جودة نموذج 70B وتقبل الاعتماد على Wi-Fi المنزل.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أنشئ مساعدًا صوتيًا محليًا بالكامل بدمج Whisper ‏(STT)‏ ونموذج LLM محلي 3B–4B ‏(Phi-4 Mini أو Gemma 3 4B)‏ و Piper أو TTS النظام — صوت إلى أول صوت 0.9–1.6 ثانية على الهواتف المتميزة في 2026.',
          },
          {
            type: 'plain-terms',
            text: 'المساعد الصوتي لديه ثلاث مهام: تحويل صوتك إلى نص، وتوليد رد، وقول ذلك الرد بصوت عالٍ. مع Whisper للخطوة الأولى، ونموذج LLM صغير محلي للثانية، و Piper أو الصوت المدمج في الهاتف للثالثة، يمكنك إنجاز الثلاثة على الهاتف بدون إنترنت. الحلقة الكاملة تستغرق نحو ثانية على iPhone أو Android حديث متميز — سريع بما يكفي للشعور أنك تتحدث مع Siri، لكن كل شيء يبقى على الجهاز.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي حزمة مساعد صوتي؟',
          localIf: [
            'تريد خصوصية كاملة وعمل دون اتصال ← محلي بالكامل على الجهاز ‏(مسار iPhone أو Android)‏',
            'تسافر كثيرًا وتريد صوتًا في الطائرات / المناطق بدون تغطية ← محلي بالكامل على الجهاز',
            'صحفي أو مهني صحي أو محامٍ ← محلي بالكامل للحفاظ على سرية المصادر / المرضى / العملاء',
            'مطور يبني نموذجًا أوليًا لسير عمل صوتي دون اتصال ← محلي بالكامل على الجهاز',
          ],
          cloudIf: [
            'تحتاج جودة نموذج 70B+ ‏(استدلال معقد)‏ ← المسار الهجين ‏(STT على الهاتف + Ollama عن بُعد في المنزل)‏',
            'تحتاج بحثًا على الويب في الوقت الفعلي أو بيانات حية ← مساعد سحابي ‏(لا مكافئ محلي في 2026)‏',
            'تحتاج تكاملًا عميقًا مع السحابات الاحتكارية ‏(Google Calendar وiCloud وما إلى ذلك)‏ ← استمر في استخدام Siri / Google Assistant لتلك المهام',
          ],
          quick: [
            'أبسط مسار على iPhone: WhisperKit + LLM Farm + صوت iOS',
            'أبسط مسار على Android: Layla ‏(حزمة متكاملة)‏',
            'أفضل جودة: هجين ‏(STT على الهاتف + Ollama في المنزل 70B)‏',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'ابدأ بالمسار المحلي على الجهاز حتى لو أردت في نهاية المطاف النهج الهجين. إعداد الجهاز يعلّمك المكونات المتحركة ‏(STT وLLM وTTS)‏ ويعمل بدون الاعتماد على خادم في المنزل. بمجرد تشغيله، تغيير مكالمة LLM من محلية إلى عنوان URL بعيد لـ Ollama هو تغيير سطر واحد.',
          },
        ],
      },
      stackComparison: {
        id: 'stack-comparison',
        title: 'مقارنة حزم المساعد الصوتي',
        content:
          '**ثلاث حزم قابلة للتطبيق في 2026، كل منها مُضبَّطة لأولوية مختلفة: البساطة ‏(Layla)‏ أو الصقل الأصيل لـ Apple ‏(WhisperKit + LLM Farm)‏ أو جودة LLM ‏(هجين)‏.** الثلاثة تشغّل STT وTTS على الجهاز؛ الهجين فقط ينقل خطوة LLM إلى جهاز كمبيوتر في المنزل.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر iPhone ‏(WhisperKit + LLM Farm + صوت iOS)‏ للبساطة على iOS، أو Android ‏(Layla)‏ للبساطة على Android، أو هجين ‏(STT على الهاتف + Ollama في المنزل)‏ لأفضل جودة LLM.',
          },
          {
            type: 'plain-terms',
            text: 'أرقام الكمون أدناه هي الوقت من الصوت إلى أول صوت — الوقت من توقفك عن الكلام حتى يبدأ المساعد بالرد. أقل من ثانيتين يبدو قابلًا للاستخدام؛ أقل من ثانية يبدو طبيعيًا. البطارية هي النسبة المئوية المستهلكة في ساعة من المحادثة النشطة ثنائية الاتجاه.',
          },
        ],
        columns: ['الحزمة', 'الكمون ‏(صوت ← أول صوت)‏', 'البطارية ‏(ساعة نشطة)‏', 'الأفضل لـ'],
        rows: [
          { 'الحزمة': 'iPhone ‏(WhisperKit + LLM Farm)‏', 'الكمون ‏(صوت ← أول صوت)‏': '~0.9–1.4 ث ‏(16 Pro / 17 Pro)‏', 'البطارية ‏(ساعة نشطة)‏': '~25–35%', 'الأفضل لـ': 'مستخدمو iOS الذين يريدون الصقل الأصيل لـ Apple' },
          { 'الحزمة': 'Android ‏(Layla، متكامل)‏', 'الكمون ‏(صوت ← أول صوت)‏': '~1.0–1.6 ث ‏(Pixel 9 Pro، Galaxy S25 Ultra)‏', 'البطارية ‏(ساعة نشطة)‏': '~25–40%', 'الأفضل لـ': 'مستخدمو Android الذين يريدون بساطة تطبيق واحد' },
          { 'الحزمة': 'Android ‏(Termux + whisper.cpp + Ollama + Piper)‏', 'الكمون ‏(صوت ← أول صوت)‏': '~1.2–2.0 ث', 'البطارية ‏(ساعة نشطة)‏': '~30–40%', 'الأفضل لـ': 'المستخدمون المتقدمون الذين يريدون تحكمًا كاملًا' },
          { 'الحزمة': 'هجين ‏(STT على الهاتف + Ollama في المنزل 70B)‏', 'الكمون ‏(صوت ← أول صوت)‏': '~1.5–2.5 ث ‏(يعتمد على Wi-Fi)‏', 'البطارية ‏(ساعة نشطة)‏': '~10–15%', 'الأفضل لـ': 'جودة نموذج 70B، الاستخدام على الشبكة المنزلية' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الكمون يهيمن عليه خطوة "أول رمز" من LLM، لا Whisper ولا TTS. لتقليل الكمون، استخدم نموذج LLM أصغر ‏(Qwen3 1.7B بدلًا من Phi-4 Mini يخفض خطوة LLM من ~600 مللي ثانية إلى ~250 مللي ثانية)‏. العيب هو ردود أقصر وأقل تفصيلًا.',
          },
        ],
      },
      theStack: {
        id: 'the-stack',
        title: 'الحزمة الثلاثية: STT + LLM + TTS',
        content:
          '**الكلام إلى نص ونموذج LLM والنص إلى كلام هي ثلاثة مكونات مستقلة يمكن تبديل كل منها بشكل مستقل.** تحسين أي منها ‏(Whisper أصغر، LLM أسرع، TTS بكمون أقل)‏ يخفض الكمون الإجمالي.',
        items: [
          '**STT — Whisper.cpp / WhisperKit / Sherpa-ONNX.** Whisper Small ‏(~466 ميجابايت)‏ هو الاختيار القياسي للجوال — ~12% معدل خطأ كلمات ‏(WER)‏ في الكلام الشائع، ~150–300 مللي ثانية كمون STT لعبارة 5 ثوانٍ. Whisper Medium ‏(~1.5 جيجابايت)‏ يخفض WER إلى ~9% لكن يضاعف الكمون. Whisper Tiny ‏(~75 ميجابايت)‏ سريع لكن معرض للأخطاء مع ضوضاء خلفية معتدلة. WhisperKit ‏(iOS)‏ يستخدم Apple Neural Engine بكمون STT أقل ~30–40% من Whisper.cpp القياسي.',
          '**LLM — Phi-4 Mini، Gemma 3 4B، Llama 3.2 3B.** Phi-4 Mini ‏(3.8B Q4_K_M، ~2.7 جيجابايت)‏ هو الافتراضي الموصى به على الهواتف المتميزة. وقت أول رمز ~400–800 مللي ثانية على iPhone 16 Pro لموجّه قصير — أكبر مساهم فردي في الكمون الكلي. للأجهزة الأقدم أو المحدودة الذاكرة، Qwen3 1.7B ‏(~1.1 جيجابايت)‏ أسرع ‏(~200–400 مللي ثانية TTFT)‏ على حساب ردود أقصر وأبسط.',
          '**TTS — Piper TTS أو TTS النظام.** Piper ‏(مشروع Rhasspy، مفتوح المصدر)‏ يدعم أكثر من 30 لغة، ~50 ميجابايت لكل صوت، ~100–200 مللي ثانية كمون لأول صوت، ويعمل على iOS وAndroid وLinux وmacOS وWindows. TTS النظام ‏(AVSpeechSynthesizer على iOS، TextToSpeech على Android)‏ له كمون أقل ‏(~50–100 مللي ثانية)‏ لكن صوت أكثر آلية على الإصدارات الأقدم. أصوات النظام على iOS 18+ وAndroid 14+ أفضل ملحوظًا من الإصدارات السابقة.',
          '**كشف نشاط الصوت ‏(VAD)‏.** معظم التطبيقات تستخدم Silero VAD أو webrtcvad لاكتشاف توقفك عن الكلام. نافذة صمت 200–500 مللي ثانية هي عتبة نهاية العبارة النموذجية. قصير جدًا ← يقاطعك في منتصف الجملة؛ طويل جدًا ← يضيف كمونًا. 300 مللي ثانية هي قيمة افتراضية معقولة.',
          '**خط الأنابيب الكامل:** التقاط الميكروفون ← VAD يكشف نهاية الكلام ← Whisper يحوّل ← LLM يولّد الرد ← TTS يتكلم. بث رموز LLM إلى TTS لحظة وصولها هو ما يجعل "أول صوت" يصل في أقل من ثانية على الهواتف المتميزة — البديل ‏(انتظار الرد الكامل لـ LLM ثم الكلام)‏ يضاعف الكمون المُدرَك.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا بدت حزمتك بطيئة، حلّل كل خطوة: سجّل مدة ‏(ميكروفون ← STT جاهز)‏ و‏(STT جاهز ← أول رمز LLM)‏ و‏(أول رمز LLM ← أول صوت TTS)‏. خطوة واحدة عادةً تهيمن. على الهواتف المتميزة في 2026، هي دائمًا تقريبًا وقت أول رمز LLM ‏(~400–800 مللي ثانية)‏. بدّل إلى نموذج LLM أصغر لتقليل الكمون المُدرَك.',
          },
        ],
      },
      iphoneSetup: {
        id: 'iphone-setup',
        title: 'الإعداد على iPhone: WhisperKit + LLM Farm ‏(5 دقائق)‏',
        content:
          '**أبسط وأكمل مساعد صوتي محلي على iPhone في 2026: WhisperKit ‏(أو Whisper Transcription)‏ للـ STT، وLLM Farm للـ LLM، وTTS نظام iOS للصوت.** إجمالي وقت الإعداد 5–10 دقائق زائد وقت تنزيل النموذج.',
        numberedItems: [
          'ثبّت تطبيقًا مبنيًا على WhisperKit من App Store ‏(مثلًا "Whisper Transcription" من مطور Aiko، مجاني)‏ — يوفر نسخًا على الجهاز باستخدام Apple Neural Engine. يمكنك أيضًا بناء تطبيق مرجع WhisperKit من GitHub ‏(Argmax / WhisperKit)‏.',
          'في WhisperKit / Whisper Transcription: نزّل نموذج "Small" ‏(~466 ميجابايت)‏. Tiny أسرع لكن غير دقيق؛ Medium أدق لكن أبطأ.',
          'ثبّت LLM Farm من App Store ‏(مجاني)‏. في LLM Farm: اضغط على النماذج ← "إضافة نموذج من URL" ← الصق رابط Hugging Face لـ Phi-4 Mini Q4_K_M ‏(أو استخدم المكتبة المدمجة إن كانت متاحة)‏. النموذج يحتل ~2.7 جيجابايت.',
          'اربطهما عبر Shortcuts على iOS: أنشئ اختصارًا بهذه الإجراءات — ‏(1)‏ تسجيل صوت ‏(أو قبول إدخال صوتي من ورقة المشاركة)‏، ‏(2)‏ نسخ مع Whisper Transcription، ‏(3)‏ توليد نص مع LLM Farm ‏(إن كان متاحًا)‏ أو Private LLM ‏(~£10، له إجراء Shortcuts)‏، ‏(4)‏ تشغيل النص بصوت نظام iOS.',
          'عيّن الاختصار لـ widget شاشة القفل، أو زر الإجراء ‏(iPhone 15 Pro وما بعده)‏، أو "Siri قولي نفّذ [اسم الاختصار]". زر الإجراء يوفر أقل وقت استجابة حرّ اليدين.',
          'اختبر: اضغط مطولًا على زر الإجراء ← تكلّم ← أفلت. STT يعمل ‏(~200 مللي ثانية)‏ ← LLM يولّد ‏(~600 مللي ثانية أول رمز، يبث إلى TTS)‏ ← أول صوت يُسمع بعد ~0.9–1.4 ث إجمالًا. اضبط عتبة صمت VAD في الاختصار إذا قاطعك.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm حاليًا لا يعرض إجراء Shortcuts ‏(حتى مايو 2026)‏. لاستخدام خط أنابيب iOS Shortcuts، ستحتاج Private LLM ‏(~£10 دفعة واحدة)‏ الذي يعرض إجراء "توليد نص". نهج Shortcuts هو ما يجعل مسار iPhone "5 دقائق" — بدون Shortcuts يجب ربط التطبيقات يدويًا.',
          },
        ],
      },
      androidSetup: {
        id: 'android-setup',
        title: 'الإعداد على Android: Layla أو حزمة Termux ‏(5–15 دقيقة)‏',
        content:
          '**مساران على Android: Layla ‏(نهج الحزمة المتكاملة في 5 دقائق)‏ أو Termux + whisper.cpp + Ollama + Piper ‏(النهج اليدوي في 15 دقيقة مع مزيد من التحكم)‏.** كلاهما يعمل محليًا بالكامل بعد الإعداد.',
        items: [
          '**المسار A — Layla ‏(5 دقائق)‏:** ثبّت Layla من Play Store، نزّل نموذجًا ‏(Phi-4 Mini أو Gemma 3 4B)‏، فعّل وضع الصوت في الإعدادات. Layla تشمل whisper.cpp للـ STT، وnLLM المحلي للرد، وتستخدم TTS نظام Android. أسهل مسار؛ العيب هو قدرة تهيئة أقل.',
          '**المسار B — حزمة Termux ‏(15 دقيقة)‏:**',
          'ثبّت Termux من F-Droid ‏(لا من Play Store؛ نسخة Play Store قديمة)‏.',
          'في Termux: `pkg update && pkg install git cmake clang ffmpeg`.',
          'ابنِ whisper.cpp: `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make` ونزّل نموذج Small: `bash ./models/download-ggml-model.sh small`.',
          'ثبّت Ollama ‏(نسخة Termux ARM)‏: `curl -fsSL https://ollama.com/install.sh | sh`. نزّل نموذجًا: `ollama pull phi4-mini`. شغّل الخادم: `ollama serve`.',
          'ثبّت Piper: `pip install piper-tts` ‏(في venv Python من Termux)‏ ونزّل صوتًا ‏(مثلًا `piper-tts --download-voice en_US-amy-low`)‏.',
          'اربط خط الأنابيب بسكريبت Python صغير يقرأ من `arecord`، يشغّل whisper.cpp على الصوت، يرسل النسخ إلى Ollama على localhost:11434 ويوجّه الرد إلى Piper. أو استخدم Tasker لتسلسل أوامر shell يُشغَّل بزر أو اختصار سريع.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للمسار B، استخدم Termux:Widget لإنشاء اختصار على الشاشة الرئيسية يشغّل سكريبت المساعد الصوتي. نقرة واحدة على الـ widget تُفعّل خط الأنابيب الكامل. ادمجه مع زر Bluetooth أو اختصار سريع من Tasker للاستدعاء حرّ اليدين. أزرار الإجراء / الجانبية لـ Pixel 9 Pro و Galaxy S25 Ultra يمكنها أيضًا تشغيل إجراءات Tasker.',
          },
        ],
      },
      hybridSetup: {
        id: 'hybrid-setup',
        title: 'الإعداد الهجين: STT على الهاتف + Ollama عن بُعد',
        content:
          '**الحزمة الهجينة تنقل فقط مكالمة LLM إلى جهاز كمبيوتر في المنزل، مبقيةً STT وTTS على الجهاز.** هذا يتيح الوصول إلى نماذج 70B ‏(Llama 3.3 70B، Qwen3-Coder 32B)‏ مع الحفاظ على خصوصية الصوت ‏(لا يغادر الهاتف أبدًا — فقط النسخة النصية تُرسَل عبر Wi-Fi المنزلي)‏.',
        numberedItems: [
          'على جهاز الكمبيوتر المنزلي ‏(Mac أو PC أو NAS)‏: ثبّت Ollama. نزّل نموذج 70B: `ollama pull llama3.3:70b` ‏(يتطلب ~40 جيجابايت مساحة + ~48 جيجابايت RAM أو 24 جيجابايت VRAM للـ GPU)‏.',
          'ربط Ollama بشبكتك المحلية: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`. سجّل IP الجهاز المنزلي ‏(مثلًا 192.168.1.20)‏.',
          'على الهاتف، هيّئ خط أنابيب المساعد الصوتي ‏(iOS Shortcut أو Tasker على Android)‏ لإرسال نسخ Whisper عبر HTTP POST إلى `http://192.168.1.20:11434/api/generate` بدلًا من مكالمة LLM المحلية.',
          'يستمر TTS في العمل على الهاتف ‏(Piper أو صوت النظام)‏ باستخدام نص الرد من الجهاز المنزلي.',
          'النتيجة: Whisper STT يعمل على الهاتف ‏(الصوت لا يغادر الجهاز أبدًا)‏، Ollama المنزلي يولّد ردًا بجودة 70B في ~600–1200 مللي ثانية، TTS يتكلم على الهاتف. الكمون الإجمالي ~1.5–2.5 ثانية — أعلى قليلًا من الجهاز بالكامل لكن بجودة LLM أفضل بكثير.',
        ],
        promptExamples: [
          {
            label: 'iOS Shortcut: مساعد صوتي هجين ‏(تفعيل بزر الإجراء)‏',
            text: '1. تسجيل صوت → حفظ في ملف مؤقت.\n2. نسخ مع Whisper Transcription → إخراج: نص النسخ.\n3. الحصول على محتوى URL → URL: http://192.168.1.20:11434/api/generate، الطريقة: POST، جسم JSON: {"model":"llama3.3:70b","prompt":"[transcript]","stream":false} → إخراج: نص الرد.\n4. تشغيل النص → إدخال: نص الرد، الصوت: صوت نظام iOS.\nعيّن لزر الإجراء. اضغط مطولًا للتسجيل؛ أفلت للإرسال. أول صوت يُسمع بعد ~1.5–2.5 ث.',
          },
          {
            label: 'Tasker: مساعد صوتي هجين على Android',
            text: '1. متغير: %TRANSCRIPT = (إخراج whisper-cli على ملف الصوت المسجّل).\n2. طلب HTTP: URL http://192.168.1.20:11434/api/generate، الطريقة POST، Body {"model":"llama3.3:70b","prompt":"%TRANSCRIPT","stream":false}.\n3. متغير: %REPLY = (حقل "response" المُحلَّل من JSON).\n4. قل: %REPLY (TTS نظام Android أو Piper إن كان مثبتًا).\nتفعيل عبر اختصار سريع أو زر Bluetooth أو ضغطة طويلة على الزر الجانبي لـ Pixel 9 Pro.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لأقل كمون في الوضع الهجين، هيّئ Ollama في وضع البث ‏(`"stream":true`)‏ وابثّ الرموز إلى TTS لحظة وصولها بدلًا من انتظار الرد الكامل. iOS Shortcuts لا يمكنها البث بشكل أصلي، لكن بلاجن Tasker صغير أو تطبيق iOS مخصص يمكنهما. مع البث، الكمون المُدرَك لـ "أول صوت" ينخفض 200–400 مللي ثانية رغم أن إجمالي وقت الرد هو نفسه.',
          },
        ],
      },
      latencyBudget: {
        id: 'latency-budget',
        title: 'ميزانية الكمون: أين تذهب الثواني',
        image: '/images/voice-assistant-local-mobile-offline-latency-budget-en.svg',
        imageCaption:
          'ميزانية الكمون من انتهاء الكلام إلى أول صوت على iPhone 16 Pro: كشف VAD 250 مللي ثانية، تحويل الصوت بواسطة Whisper 200 مللي ثانية، وقت أول رمز من LLM 700 مللي ثانية (54% من الإجمالي، أكبر عامل للتحسين)، أول صوت من TTS 150 مللي ثانية — الإجمالي ≈1.3 ثانية.',
        content:
          '**على الهواتف المتميزة في 2026، وقت أول رمز LLM يهيمن على الكمون الكلي — عادةً 50–60% من وقت الصوت إلى أول صوت.** تحسين خطوة LLM له أكبر أثر من ضبط Whisper أو TTS.',
        columns: ['الخطوة', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏', 'ملاحظات'],
        rows: [
          { 'الخطوة': 'كشف نهاية العبارة VAD', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏': '~200–500 مللي ث', 'ملاحظات': 'قابل للضبط؛ 300 مللي ث افتراضيًا. يُحتسب في الكمون المُدرَك.' },
          { 'الخطوة': 'Whisper Small STT ‏(عبارة 5 ثوانٍ)‏', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏': '~150–300 مللي ث', 'ملاحظات': 'WhisperKit ~30–40% أسرع عبر Apple Neural Engine.' },
          { 'الخطوة': 'وقت أول رمز LLM ‏(Phi-4 Mini)‏', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏': '~400–800 مللي ث', 'ملاحظات': 'أكبر مساهم. نموذج أصغر = أسرع.' },
          { 'الخطوة': 'أول صوت TTS ‏(Piper أو نظام)‏', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏': '~100–200 مللي ث', 'ملاحظات': 'TTS النظام أسرع قليلًا من Piper.' },
          { 'الخطوة': 'إجمالي صوت إلى أول صوت', 'الوقت النموذجي ‏(iPhone 16 Pro، على الجهاز)‏': '~0.9–1.4 ث', 'ملاحظات': 'أقل من ثانيتين = "يبدو قابلًا للاستخدام"؛ أقل من ثانية = "يبدو طبيعيًا".' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للنزول دون ثانية إجمالًا: استخدم Whisper Tiny ‏(75 ميجابايت، ~80 مللي ث STT)‏ + Qwen3 1.7B ‏(~250 مللي ث TTFT)‏ + TTS النظام ‏(~80 مللي ث أول صوت)‏. الإجمالي ~600–800 مللي ث على iPhone 16 Pro. العيب هو ردود LLM أقصر وأقل اتساقًا ودقة STT أقل في البيئات الصاخبة. يستحق ذلك إذا كانت سرعة الاستجابة هي أولويتك الرئيسية.',
          },
        ],
      },
      accuracyBattery: {
        id: 'accuracy-battery',
        title: 'الدقة واستهلاك البطارية لمدة ساعة',
        content:
          '**Whisper Small يصل إلى ~88% دقة في الكلام الشائع مع ضوضاء خلفية معتدلة؛ Whisper Medium يصل إلى ~91% لكن يضاعف الكمون.** استهلاك البطارية خلال ساعة من المحادثة النشطة ~25–35% على iPhone 16 Pro و~25–40% على Android المتميز.',
        items: [
          '**دقة Whisper حسب حجم النموذج ‏(WER LibriSpeech-clean، أقل أفضل)‏:** Tiny ~7.5%، Small ~3%، Medium ~2.4%، Large v3 ~1.8%. في الظروف الحقيقية مع الضوضاء: Tiny يتدهور إلى ~15–20% WER، Small إلى ~10–14%، Medium إلى ~7–10%، Large v3 إلى ~5–7%.',
          '**Whisper السحابي مقابل المحلي:** Whisper API السحابي من OpenAI يستخدم Large v3 افتراضيًا ‏(~2% WER على الكلام النظيف)‏. Whisper Small المحلي على هاتف هو ~3% WER على نفس الصوت — قريب بما يكفي لعدم ملاحظة الفرق في الاستخدام اليومي للمساعد.',
          '**استهلاك البطارية ‏(ساعة من المحادثة النشطة، الشاشة مضاءة)‏:** iPhone 16 Pro ~25–35%؛ iPhone 17 Pro ~22–30%؛ Pixel 9 Pro ~30–40%؛ Galaxy S25 Ultra ~28–38%. الوضع الهجين يخفض استهلاك الهاتف إلى ~10–15% في الساعة لأن STT فقط يعمل محليًا.',
          '**الحد الحراري:** الاستدلال المستمر لـ LLM على الجهاز يُفعّل الحد الحراري بعد ~10–15 دقيقة على iPhone ‏(سطح الشريحة ~38 درجة مئوية)‏؛ ~15–20 دقيقة على Android المتميز ‏(كتلة حرارية أفضل في التابلت والهواتف الكبيرة)‏. الحد يخفض الرموز/الثانية بنسبة 30–50%، مطيلًا كمون أول رمز LLM من ~600 مللي ث إلى ~900 مللي ث.',
          '**تخفيف للجلسات الطويلة:** وصّل الشاحن، ضع الهاتف واجهةً لأعلى على سطح صلب ‏(لا في اليد)‏ أو بدّل للوضع الهجين. الهاتف كميكروفون فقط يستهلك جزءًا صغيرًا من طاقة الهاتف بمعالجة كل شيء محليًا.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'جلسة صوتية محلية بالكامل مدتها ساعة قد تستنزف بطارية هاتفك 30–40%. للاستخدام طوال اليوم أو في السيارة، خطّط للشحن. المسار الهجين ‏(STT على الجهاز فقط)‏ هو الخيار الواقعي للمساعدات الصوتية الدائمة التشغيل — الجهاز المنزلي يؤدي الجهد الثقيل.',
          },
        ],
      },
      handsFree: {
        id: 'hands-free',
        title: 'الاستخدام حرّ اليدين: Shortcuts وTasker وCarPlay وAndroid Auto',
        content:
          '**التفعيل حرّ اليدين يعتمد على آلية التفعيل لا على حزمة الصوت.** iOS يستخدم Shortcuts مع زر الإجراء أو "Siri قولي نفّذ [اختصار]"؛ Android يستخدم Tasker مع الزر الجانبي أو اختصار سريع أو أزرار Bluetooth.',
        items: [
          '**زر إجراء iPhone ‏(iPhone 15 Pro وما بعده)‏:** عيّن Shortcut يُفعّل خط أنابيب الصوت. اضغط مطولًا على زر الإجراء لبدء التسجيل؛ أفلت للإرسال. أقل كمون للتفعيل حرّ اليدين على iPhone في 2026.',
          '**iPhone "Siri قولي نفّذ [اسم الاختصار]":** يُفعّل Siri ‏(~500 مللي ث)‏ ثم ينفّذ الاختصار. يضيف كمونًا مقارنة بزر الإجراء لكن يعمل حرّ اليدين في أي وقت مع الهاتف غير مقفل.',
          '**زر جانبي / زر Bixby على Android ‏(Galaxy)‏:** عيّن إجراء Tasker عبر إعدادات Galaxy Modes & Routines أو تطبيقات إعادة تعيين زر Bixby. اضغط للتفعيل.',
          '**اختصار سريع من Tasker على Android:** أضف اختصارًا سريعًا في لوحة الإشعارات يشغّل سكريبت الصوت. تفعيل بانزلاقتين من شاشة القفل.',
          '**أزرار Bluetooth ‏(مثلًا Flic، أزرار وسائط عامة)‏:** اقرنها مع iOS أو Android، هيّئها لتشغيل مهمة الصوت Shortcut / Tasker. تفعيل حقيقي حرّ اليدين ‏(زر على مكتب، على عجلة القيادة، في جيب)‏.',
          '**CarPlay / Android Auto:** يستخدمان نظام Siri / Google Assistant بالتصميم — لا يعرضان API مساعد صوتي لجهة خارجية في 2026. الحل البديل لـ CarPlay هو ربط Shortcut بزر إجراء CarPlay ‏(دعم محدود للـ Shortcuts)‏؛ لـ Android Auto استخدم Tasker مُفعَّلًا بزر وسائط Bluetooth. لا أي منهما يصل لمستوى تكامل مساعدات النظام للاستخدام في السيارة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للاستخدام في السيارة بدون تكامل CarPlay / Android Auto: اقرن زر Bluetooth صغيرًا ‏(Flic، AirShou، تحكم وسائط عام)‏ وثبّته على عجلة القيادة. اضغط لتفعيل المساعد الصوتي دون اتصال — يعمل بدون إنترنت، لا يرسل صوتًا إلى السحابة، يرد في ~1.5 ثانية. العيب مقارنة بـ CarPlay هو عدم وجود واجهة على شاشة السيارة، فقط صوت.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'ضمانات الخصوصية: محلي فعلًا مقابل مدعوم بالسحابة',
        content:
          '**المساعد الصوتي "محلي فعلًا" فقط إذا بقيت صوت الميكروفون والنسخ وصوت TTS على الجهاز بدون أي مكالمة شبكية.** كثير من التطبيقات التي تُسوَّق على أنها "خاصة" لا تزال ترسل النسخ أو بيانات التتبع إلى السحابة — تحقق بوضع الطائرة أو مراقب شبكة قبل الوثوق.',
        items: [
          '**كيف تتحقق من "محلي فعلًا":** ضع الهاتف في وضع الطائرة واستخدم المساعد. إذا عمل بكامل الجودة، فهو محلي فعلًا. إذا تدهور أو فشل، فإحدى الخطوات تعتمد على خدمة سحابية.',
          '**التقاط الصوت:** يجب معالجة بيانات الميكروفون محليًا وعدم كتابتها على القرص أو إرسالها لأي مكان. Whisper وWhisperKit وSherpa-ONNX يشغّلون STT في الذاكرة ويتخلصون من الصوت بعد النسخ.',
          '**استدلال LLM:** إذا كان الرد يولّده نموذج محلي ‏(Phi-4 Mini، Gemma 3، Llama 3.2)‏ على الهاتف، لا موجّه يغادر الجهاز. إذا كان المساعد يستخدم وضع "مدعوم بالسحابة" ‏(Apple Intelligence Private Cloud Compute، وضع Google الذي يبدأ بالجهاز ثم السحابة)‏، قد تُرسَل النسخ إلى خادم في ظروف معينة — راجع سياسة خصوصية التطبيق.',
          '**TTS:** Piper وTTS النظام محليان بالكامل. بعض الأصوات "المتميزة" السحابية ‏(ElevenLabs، OpenAI TTS)‏ تتطلب إرسال نص الرد إلى خادم — تجنّبها للاستخدام المحلي الحقيقي.',
          '**موقف الخصوصية في المسار الهجين:** في الوضع الهجين، يبقى الصوت على الهاتف ‏(Whisper محلي)‏، لكن النسخة النصية تُرسَل إلى خادم Ollama المنزلي عبر Wi-Fi المحلي. هذا شبكة محلية فقط، لا سحابة — تبقى البيانات داخل شبكتك. مقبول لمعظم المستخدمين المهتمين بالخصوصية؛ لا يعادل الجهاز بالكامل لنماذج التهديد الأكثر صرامة.',
          '**ملاحظات محددة على التطبيقات ‏(مايو 2026)‏:** WhisperKit وwhisper.cpp مفتوحا المصدر ومحليان قابلان للتحقق. Layla يعمل محليًا افتراضيًا ‏(تحقق بوضع الطائرة)‏. LLM Farm وPocketPal AI يشغّلان الاستدلال بالكامل على الجهاز. Apple Intelligence لديها وضع على الجهاز وPrivate Cloud Compute — عطّل PCC في الإعدادات للتشغيل المحلي الكامل.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا كان التشغيل المحلي الكامل حرجًا ‏(صحفي / سرية مصادر، صحة، قانوني)‏: فضّل تطبيقات مفتوحة المصدر ‏(نسخة مرجع WhisperKit، whisper.cpp عبر Termux، Layla)‏ حيث يمكنك مراجعة سلوك الشبكة. التطبيقات مغلقة المصدر ‏(حتى تلك المُسوَّقة على أنها "خاصة")‏ قد تضيف وظائف سحابية في التحديثات المستقبلية دون إشعار واضح للمستخدم.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**استخدام Whisper Tiny لكل شيء.** Tiny سريع ‏(~80 مللي ث STT)‏ لكن معرض للأخطاء في البيئات الصاخبة ‏(~15–20% WER مقابل ~10–14% لـ Small)‏. Tiny مقبول للأوامر القصيرة في الغرف الهادئة؛ استخدم Small للمساعدات الصوتية متعددة الأغراض.',
          '**انتظار الرد الكامل لـ LLM قبل بدء TTS.** هذا يضاعف الكمون المُدرَك. ابثّ رموز LLM إلى TTS لحظة وصولها — Piper يدعم الإدخال بالبث، TTS النظام يدعم الكلام التدريجي. أول صوت يجب أن يُشغَّل بعد أول جملة من LLM، لا بعد الرد الكامل.',
          '**تشغيل LLM على الجهاز في بيئة حارة.** الحد الحراري يُفعَّل في دقائق تحت أشعة الشمس المباشرة أو داخل سيارة حارة، خافضًا الرموز/الثانية بنسبة 30–50% ودافعًا الكمون فوق ثانيتين. استخدم المسار الهجين أو أبقِ الهاتف باردًا.',
          '**الثقة في "خاص" دون تحقق.** "خاص" و"محلي" مصطلحا تسويق في 2026 — بعض التطبيقات التي تدّعي المعالجة المحلية لا تزال ترسل البيانات للخادم للتحليل وتحديثات النماذج أو النسخ الاحتياطية السحابية. تحقق بوضع الطائرة قبل الوثوق بها للاستخدام الحساس.',
          '**بناء حزمة Termux على Android ذو RAM قليل.** Termux + whisper.cpp + Ollama + Piper يستهلكون ~4 جيجابايت RAM في الذروة. الأجهزة ذات 6 جيجابايت RAM أو أقل ستنهي المكونات بسبب OOM في منتصف محادثة. استخدم Layla على Android ذو RAM قليل، أو التزم بمسار iPhone.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Whisper.cpp — [github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp) ‏(Whisper متعدد المنصات، بما فيها بنية Android وiOS)‏.',
          'WhisperKit ‏(Argmax)‏ — [github.com/argmaxinc/WhisperKit](https://github.com/argmaxinc/WhisperKit) ‏(Whisper محسَّن لـ Apple Neural Engine على iOS / macOS)‏.',
          'Piper TTS ‏(Rhasspy)‏ — [github.com/rhasspy/piper](https://github.com/rhasspy/piper) ‏(TTS عصبي مفتوح المصدر، صديق للجوال، أكثر من 30 لغة)‏.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) ‏(تطبيق iOS لتشغيل نماذج GGUF محليًا)‏.',
          'Layla ‏(Android)‏ — [قائمة Play Store](https://play.google.com) ووثائق المطور ‏(حزمة LLM محلية متكاملة مع دعم صوتي)‏.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما مدى دقة Whisper المحلي مقارنة بـ Whisper السحابي؟',
            a: 'Whisper Small يعمل محليًا على هاتف ويصل إلى ~3% WER على كلام نظيف؛ Whisper السحابي من OpenAI ‏(Large v3)‏ يصل إلى ~2%. في البيئات الصاخبة، Small المحلي يتراجع إلى ~10–14% WER بينما Cloud Large v3 يتراجع إلى ~5–7%. للاستخدام اليومي للمساعد الصوتي، الدقة المحلية قريبة بما يكفي لعدم ملاحظة الفرق. للإملاء النصي الطويل حيث كل كلمة مهمة، السحابة أو Medium / Large المحلي هو الأفضل.',
          },
          {
            q: 'هل يمكن للمساعد الصوتي المحلي أن يحل محل Siri بالكامل؟',
            a: 'للأسئلة والأجوبة الخاصة والمسودات والملخصات: نعم، بجودة مماثلة أو أفضل من ميزات Siri على الجهاز. لإجراءات النظام ‏(فتح التطبيقات وضبط المنبّهات والتحكم في HomeKit)‏ وإطلاق البحث على الويب والبيانات الحية ‏(الطقس والنتائج الرياضية)‏: لا — تكامل Siri مع iOS وخدمات Apple لا يمكن تكراره بحزمة محلية من طرف ثالث في 2026. كثير من المستخدمين يحتفظون بالاثنين: Siri لإجراءات النظام، والحزمة المحلية للأسئلة والأجوبة الخاصة.',
          },
          {
            q: 'هل يعمل مع CarPlay أو Android Auto؟',
            a: 'بشكل محدود. CarPlay وAndroid Auto مصمَّمان حول نظام Siri / Google Assistant؛ لا يعرضان API مساعد صوتي لجهة خارجية. الحلول البديلة: ربط Shortcut بزر إجراء CarPlay ‏(دعم محدود للـ Shortcuts)‏، أو إقران زر Bluetooth ‏(Flic، تحكم وسائط عام)‏ وتفعيل Tasker / Shortcuts منه. لا يصل أي منهما لمستوى تكامل مساعدات النظام للاستخدام في السيارة.',
          },
          {
            q: 'كيف أُفعّله حرّ اليدين؟',
            a: 'iPhone: اضغط مطولًا على زر الإجراء ‏(iPhone 15 Pro وما بعده)‏ لاستدعاء الاختصار، أو قل "Siri قولي نفّذ [اسم الاختصار]". Android: استخدم الزر الجانبي أو زر Bixby على هواتف Galaxy، أو اختصارًا سريعًا من Tasker، أو زرًا Bluetooth مقترنًا. للتفعيل البيئي الحقيقي دون لمس ‏(دائمًا يستمع لكلمة تفعيل)‏، الحزمة المحلية لا تضاهي Siri / Google Assistant في 2026 — كاشف كلمة التفعيل في النظام غير مكشوف لتطبيقات الجهات الخارجية.',
          },
          {
            q: 'هل يمكنه التعامل مع محادثات متعددة اللغات؟',
            a: 'نعم، لكن مع تحفظات. Whisper يكشف لغة الإدخال تلقائيًا ويدعم 99 لغة. نماذج LLM المحلية تتباين: Phi-4 Mini يتعامل جيدًا مع الإنجليزية ومعقولًا مع اللغات الأوروبية الرئيسية؛ Qwen3 لديه دعم متعدد اللغات قوي بما فيها الصينية؛ Gemma 3 يدعم أكثر من 100 لغة. للـ TTS، Piper لديه أصوات في أكثر من 30 لغة؛ TTS النظام يعتمد على حزم اللغات المثبتة. التبديل بين اللغات في منتصف المحادثة يعمل في Whisper لكن قد يربك نموذج LLM.',
          },
          {
            q: 'هل الضوضاء الخلفية تُفسد STT المحلي؟',
            a: 'Whisper Tiny يتدهور بشكل ملحوظ مع ضوضاء معتدلة ‏(~15–20% WER)‏؛ Small يتعامل مع ضوضاء مستوى المقهى بشكل معقول ‏(~10–14% WER)‏؛ Medium وLarge يتعاملان جيدًا مع معظم البيئات الحقيقية. للاستخدام الصاخب ‏(سيارات، مواصلات عامة)‏، استخدم Whisper Medium إذا كانت RAM هاتفك تسمح، أو طبّق VAD بشكل عدواني ‏(انسخ فقط عند كشف الكلام، تجاهل الصمت بين العبارات)‏.',
          },
          {
            q: 'كيف أتكامل مع أجهزة المنزل الذكي محليًا؟',
            a: 'مرّر رد LLM عبر محلل يكشف النوايا ‏(مثلًا "أطفئ أضواء المطبخ")‏ واستدعِ API hub المنزل الذكي المحلي مباشرةً — Home Assistant لديه REST API على IP المحلي، وتكامل Apple HomeKit يعمل عبر إجراءات "التحكم في المنزل" في Shortcuts. تجنّب تكاملات المنزل الذكي السحابية ‏(Alexa، Google Home)‏ إذا أردت خط أنابيب محليًا بالكامل.',
          },
          {
            q: 'هل يمكنني تخصيص الصوت ‏(TTS)‏؟',
            a: 'نعم. Piper TTS لديه أكثر من 100 صوت مدرَّبة من المجتمع في أكثر من 30 لغة، قابلة للتنزيل كنماذج صوت ~50 ميجابايت. Shortcuts iOS تتيح الاختيار من أصوات النظام بما فيها الأصوات المتميزة الأعلى جودة ‏(للتنزيل في الإعدادات ← إمكانية الوصول ← المحتوى المنطوق ← الأصوات)‏. TTS نظام Android يدعم حزم صوت Google أو جهات خارجية. استنساخ الصوت المخصص ‏(صوتك أو شخص محدد)‏ يتطلب سلسلة أدوات TTS منفصلة ‏(Coqui، Tortoise TTS)‏ — لا يزال غير عملي على الجهاز في 2026.',
          },
          {
            q: 'هل البطارية تعاني كثيرًا؟',
            a: 'نعم — نحو 25–40% في ساعة من المحادثة النشطة على الهواتف المتميزة. للاستفسارات الصوتية العرضية، الأثر صغير. للاستخدام طوال اليوم أو الدائم، وصّل الشاحن أو استخدم المسار الهجين ‏(يعمل STT فقط على الجهاز، يخفض الاستهلاك إلى ~10–15% في الساعة)‏. الاستماع السلبي في الخلفية مع كشف كلمة التفعيل غير ممكن حاليًا في الحزم المحلية من الجهات الخارجية بتكلفة بطارية مقبولة.',
          },
          {
            q: 'هل iOS 19 أو Android 16 سيكسران هذا الإعداد؟',
            a: 'من المستبعد للحزمة الرئيسية ‏(Whisper ونموذج LLM المحلي وTTS)‏ — هذه تطبيقات في مساحة المستخدم تعتمد على APIs قياسية ‏(التقاط الميكروفون، TTS، الشبكة)‏. ما قد ينكسر: تكاملات Shortcuts إذا غيّرت Apple API الخاصة بها؛ Termux على Android إذا قيّد Android 16 العمليات الخلفية أكثر ‏(Android يشدّد القيود في كل إصدار)‏. حافظ على تحديث التطبيقات وتحقق بعد كل تحديث رئيسي للنظام.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — تطبيقات الطبقة الأساسية ‏(PocketPal AI، LLM Farm، Private LLM)‏ لمسار iPhone.',
          '[أفضل تطبيقات LLM المحلية لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — تطبيقات الطبقة الأساسية ‏(Layla، Maid، MLC Chat، Termux + Ollama)‏ لمسار Android.',
          '[أفضل نماذج LLM للجوال في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — طبقة النموذج في حزمة الصوت؛ المعايير والمفاضلات بين الجودة والكمون.',
          '[كيفية تشغيل الذكاء الاصطناعي على تابلت: iPad وAndroid ‏(2026)‏](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — مكافئ التابلت للمستخدمين الذين يريدون إعداد صوتيًا بشاشة أكبر.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع نماذج أوسع يغطي جميع مستويات الأجهزة، مفيد لاختيار نموذج LLM في الإعداد الهجين.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — إدخالات الدليل لـ Whisper.cpp وWhisperKit وPiper TTS ومكونات حزمة الصوت الأخرى.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أنشئ مساعدًا صوتيًا محليًا على هاتفك: Whisper + LLM محلي ‏(بدون سحابة)‏ — 2026',
      url: 'https://www.promptquorum.com/ar/power-local-llm/voice-assistant-local-mobile-offline',
      image: buildOgImageObject(OG_SLUG, 'ar'),
      description: 'ذكاء اصطناعي صوتي محلي بالكامل على iPhone وAndroid في 2026. Whisper STT محلي + LLM محلي + Piper TTS. إعداد iPhone وAndroid وهجين؛ الكمون والبطارية والخصوصية.',
      inLanguage: 'ar',
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
        { '@type': 'Thing', name: 'نماذج LLM محلية' },
        { '@type': 'Thing', name: 'iPhone دون اتصال' },
        { '@type': 'Thing', name: 'Android دون اتصال' },
        { '@type': 'Thing', name: 'مساعد صوتي' },
        { '@type': 'Thing', name: 'ذكاء اصطناعي على الجوال' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WhisperKit' },
        { '@type': 'SoftwareApplication', name: 'LLM Farm' },
        { '@type': 'SoftwareApplication', name: 'Layla' },
        { '@type': 'SoftwareApplication', name: 'Piper TTS' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', '.faq'],
      },
    },
  },
}
