// Power Local LLM — Build a Fully Offline Voice Assistant in 2026
// Slug: build-local-voice-assistant-2026
// Category: Voice, Speech & Multimodal

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Build a Fully Offline Voice Assistant in 2026: Whisper + LLM + Piper (Step-by-Step)',
    seoTitle: 'Build Offline Voice Assistant 2026: Whisper + Local LLM + Piper TTS',
    intro:
      'A fully offline voice assistant in 2026 combines three components: whisper.cpp for speech-to-text, a local LLM (Llama 3.1 8B, Phi-4, or Mistral 7B via Ollama) for reasoning, and Piper TTS for speech output. The end-to-end latency on a desktop GPU setup is 1–2 seconds, comparable to Alexa or Google Assistant. On a Mac Mini M5, it is under 1.5 seconds. On a Raspberry Pi 5, it is 5–8 seconds — usable for hands-free queries, not conversational. This guide walks through each layer step by step, with hardware tables, code for the Python orchestrator, wake word setup, and latency optimization techniques.',
    metaDescription:
      'Build a fully offline voice assistant in 2026 with whisper.cpp for STT, Ollama + Llama 3.1 8B for reasoning, and Piper TTS for speech. Step-by-step guide with hardware requirements, Python code, wake word setup, and latency optimization.',
    twitterDescription:
      'DIY offline voice assistant in 2026: Whisper STT + local LLM + Piper TTS. No cloud, no subscription. Full build guide with hardware specs, Python code, and wake word setup.',
    audience:
      'Developers and tinkerers who want a private, fully offline voice assistant — a Siri or Alexa replacement that runs entirely on hardware they own with no cloud dependencies.',
    readTime: '14 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'offline voice assistant',
    targetKeywords: [
      'build offline voice assistant 2026',
      'whisper llm piper pipeline',
      'local voice assistant python',
      'private voice assistant no cloud',
      'whisper.cpp ollama piper',
      'open source voice assistant 2026',
      'DIY voice assistant raspberry pi',
      'alexa alternative offline',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'Whisper small',
      'Whisper base',
      'Llama 3.1 8B',
      'Phi-4',
      'Phi-3 mini 3.8B',
      'Mistral 7B',
      'Piper TTS',
      'Coqui TTS',
    ],
    current_hardware_mentioned: [
      'Raspberry Pi 5 (8 GB)',
      'Mini PC (16 GB RAM)',
      'NVIDIA RTX 3060 12 GB',
      'Mac Mini M5 (24 GB)',
    ],
    leadAnswerBlock:
      '**A fully offline voice assistant in 2026 requires three components: whisper.cpp for speech-to-text, a local LLM via Ollama for reasoning, and Piper TTS for speech output.** The three connect via a Python orchestrator that listens for audio, transcribes it, sends the text to the LLM, and converts the response back to speech. On a desktop with an RTX 3060 12 GB GPU, end-to-end latency is 1–2 seconds with Llama 3.1 8B and Whisper small. On a Mac Mini M5 (24 GB), latency is 1–1.5 seconds with the same models running on Apple Silicon. On a Raspberry Pi 5 (8 GB), latency is 5–8 seconds with Phi-3 mini 3.8B — usable for hands-free queries with patience. Add a wake word detector (OpenWakeWord or Porcupine) to make the assistant always-listening without running Whisper continuously.',
    quickAnswerTop: {
      en: {
        question: 'How do you build a fully offline voice assistant in 2026?',
        answer:
          'Stack three components: whisper.cpp (speech-to-text), a local LLM via Ollama (reasoning), and Piper TTS (text-to-speech). A Python orchestrator connects the three: microphone audio → Whisper → text → Ollama LLM → response text → Piper → speaker. Add a wake word detector to avoid running Whisper continuously. The full stack requires 8–16 GB RAM minimum (desktop) or 6 GB GPU VRAM. Total hardware cost ranges from ~$100 (Raspberry Pi 5) to ~$600 (Mac Mini M5) to ~$800 (desktop GPU).',
        bullets: [
          'Layer 1 — STT: whisper.cpp (cross-platform, Metal on Mac) or faster-whisper (NVIDIA GPU).',
          'Layer 2 — LLM: Ollama + Llama 3.1 8B (desktop), Phi-4 (laptop/Pi), or Mistral 7B (GPU).',
          'Layer 3 — TTS: Piper (fastest, CPU, all hardware), Coqui (better quality, needs GPU).',
          'Glue: Python orchestrator — audio capture → STT → LLM → TTS → playback.',
          'Wake word: OpenWakeWord (open-source, MIT) or Porcupine (Picovoice, free tier for personal use).',
          'Latency: 1–2 sec on desktop GPU / Mac M5. 5–8 sec on Raspberry Pi 5.',
          'Hardware cost: Raspberry Pi 5 ~$100, Mini PC ~$300, Desktop GPU ~$800, Mac Mini M5 ~$600.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Build a Local Voice Assistant?', anchor: '#why-build' },
      { label: 'The Three-Layer Architecture', anchor: '#architecture' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Step 1: Set Up Speech-to-Text', anchor: '#step1-stt' },
      { label: 'Step 2: Set Up the Local LLM', anchor: '#step2-llm' },
      { label: 'Step 3: Set Up Text-to-Speech', anchor: '#step3-tts' },
      { label: 'Step 4: Connect the Pipeline', anchor: '#step4-pipeline' },
      { label: 'Step 5: Wake Word Detection', anchor: '#step5-wake-word' },
      { label: 'Latency Optimization', anchor: '#latency' },
      { label: 'Privacy and Security', anchor: '#privacy' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**The offline voice assistant stack is: whisper.cpp → Ollama LLM → Piper TTS, orchestrated by a Python script.** All three components are free, open-source, and operate entirely offline once installed.',
          '**End-to-end latency on a desktop GPU (RTX 3060 12 GB): 1–2 seconds.** This is comparable to Alexa and Google Assistant — the latency threshold for "feels natural" in voice interaction. Use Whisper small and Llama 3.1 8B for this result.',
          '**Raspberry Pi 5 (8 GB) is a viable but slow platform.** With Phi-3 mini 3.8B and Whisper base, latency is 5–8 seconds. Usable for hands-free queries where the user accepts a longer pause, not for conversational interaction.',
          '**Mac Mini M5 (24 GB unified memory) is the sweet spot for quality and silence.** Silent, fanless at idle, and powerful enough to run Llama 3.1 8B at ~50 tokens/sec with Whisper large-v3 at 10× real-time via Metal. Latency of 1–1.5 seconds.',
          '**Add a wake word to avoid running Whisper continuously.** OpenWakeWord (MIT, free, custom wake words) is the best open-source option. Porcupine (Picovoice) has a free tier for personal use with pre-built wake words like "Hey Jarvis".',
          '**Whisper hallucination on silence is the most common pipeline bug.** Whisper will transcribe silence as filler words or quotes from its training data. Set a minimum audio energy threshold before passing audio to Whisper — and configure `--no-speech-threshold 0.6` in whisper.cpp.',
          '**This setup produces zero network traffic during operation.** Verify with Wireshark after assembly. No audio, no transcripts, and no LLM queries leave your machine. EU GDPR compliance is automatic — no data processing agreement needed for internal tools.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**STT layer:** whisper.cpp (best for Apple Silicon and embedded), faster-whisper (best for NVIDIA GPU Python pipelines).',
          '**LLM layer:** Ollama with Llama 3.1 8B (recommended), Phi-4 (smaller, good quality), or Mistral 7B (comparable quality to Llama 3.1 8B).',
          '**TTS layer:** Piper (fastest, CPU-only, real-time on Pi), Coqui TTS (better quality, needs GPU).',
          '**Wake word options:** OpenWakeWord (MIT, fully offline), Porcupine (free tier, 1 custom wake word).',
          '**Minimum hardware:** Raspberry Pi 5 with 8 GB RAM (~$100) for 5–8 second latency.',
          '**Recommended hardware:** Mac Mini M5 24 GB (~$600) or desktop with RTX 3060 12 GB (~$800) for 1–2 second latency.',
          '**Languages:** Whisper supports 99 languages. Piper supports 20+ language voice packs. LLM performance varies by language.',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: 'Why Build a Local Voice Assistant?',
        content:
          'Alexa, Siri, and Google Assistant all route your voice through cloud servers — your audio is transcribed, processed, and logged by the provider. A local voice assistant processes everything on your hardware.',
        items: [
          '**Privacy:** No audio leaves your home. No wake word audio stored in the cloud. No conversation history on third-party servers. Critical for healthcare workers, lawyers, journalists, and anyone with sensitive work.',
          '**Cost:** No subscription. Alexa+ (formerly Alexa Premium) costs $4.99/month. Google One costs $1.99–$9.99/month. A local assistant is one-time hardware cost.',
          '**Customization:** Choose your wake word, personality, system prompt, and capabilities. Add custom commands, connect to local home automation systems, integrate with local APIs.',
          '**Offline operation:** Works without internet. Power outage (with a UPS) + internet outage: your local assistant still works. Useful for cabins, remote locations, and emergency preparedness.',
          '**What you give up:** Web search, smart-home integration with proprietary clouds, calendar sync with cloud services, the years of RLHF tuning that makes Alexa/Siri smooth at edge cases.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'The Three-Layer Architecture',
        content:
          '**The offline voice assistant consists of three independent layers connected by a Python orchestrator.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Microphone → whisper.cpp (STT) → Ollama LLM → Piper TTS → speaker: three independent components glued by a 50-line Python orchestrator.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it like a telephone relay: you speak, Whisper writes it down, the LLM thinks of a reply and writes it down, Piper reads it aloud. Each step is a separate program; Python passes the text between them.',
          },
        ],
        items: [
          '**Layer 1 — STT (Speech-to-Text):** whisper.cpp or faster-whisper. Converts microphone audio to text. Runs offline, no network.',
          '**Layer 2 — LLM (Reasoning):** Ollama serving Llama 3.1 8B, Phi-4, or Mistral 7B. Takes the transcribed text + conversation history + system prompt and generates a response. Runs offline, no network.',
          '**Layer 3 — TTS (Text-to-Speech):** Piper or Coqui TTS. Converts the LLM response text to audio and plays it through the speaker. Runs offline, no network.',
          '**Orchestrator:** A Python script that wires the three together: captures audio from microphone → passes to STT → passes transcript to LLM → passes response to TTS → plays audio.',
          '**Optional wake word:** A lightweight always-on detector (OpenWakeWord, Porcupine) that triggers the full pipeline only when the wake phrase is detected. Without this, the orchestrator runs whisper.cpp continuously — consuming more CPU and generating more false positives.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        content:
          'Four hardware tiers, ordered by latency and cost. All support the full Whisper + LLM + Piper stack.',
        columns: ['Setup', 'STT Model', 'LLM Model', 'TTS', 'Total Cost', 'End-to-End Latency'],
        rows: [
          {
            'Setup': 'Raspberry Pi 5 (8 GB)',
            'STT Model': 'Whisper base (CPU)',
            'LLM Model': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper (CPU)',
            'Total Cost': '~$100',
            'End-to-End Latency': '5–8 sec',
          },
          {
            'Setup': 'Mini PC (16 GB RAM)',
            'STT Model': 'Whisper small (CPU)',
            'LLM Model': 'Llama 3.1 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Total Cost': '~$300',
            'End-to-End Latency': '3–5 sec',
          },
          {
            'Setup': 'Desktop (RTX 3060 12 GB)',
            'STT Model': 'Whisper large-v3 (GPU)',
            'LLM Model': 'Llama 3.1 8B Q4 (GPU)',
            'TTS': 'Piper or Coqui (CPU/GPU)',
            'Total Cost': '~$800',
            'End-to-End Latency': '1–2 sec',
          },
          {
            'Setup': 'Mac Mini M5 (24 GB)',
            'STT Model': 'Whisper large-v3 (Metal)',
            'LLM Model': 'Llama 3.1 8B (Metal)',
            'TTS': 'Piper (CPU)',
            'Total Cost': '~$600',
            'End-to-End Latency': '1–1.5 sec',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The Mac Mini M5 is the most cost-efficient path to sub-2-second latency. It is fanless at idle, runs both Whisper Metal and Ollama on unified memory simultaneously, and requires no NVIDIA driver management.',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'Step 1: Set Up Speech-to-Text',
        content:
          'Install whisper.cpp for Apple Silicon and embedded hardware; install faster-whisper for NVIDIA GPU setups.',
        items: [
          '**Install whisper.cpp:** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**Download your model:** `bash ./models/download-ggml-model.sh small` (small = 3.4% WER, good speed balance)',
          '**Test transcription:** `./main -m models/ggml-small.bin -f test.wav` — should produce accurate text output.',
          '**Enable Metal on Mac:** `make -j4 WHISPER_COREML=1` then `bash models/generate-coreml-model.sh small`',
          '**Whisper model selection:** base for Raspberry Pi (1 GB RAM, low latency), small for the sweet spot (2 GB RAM, 3.4% WER), large-v3 for highest accuracy (10 GB VRAM/RAM).',
          '**Configure silence suppression:** Add `--no-speech-threshold 0.6 --suppress-blank` flags to avoid transcribing silence as hallucinated text.',
          '**Test with a 10-second recording:** Record yourself saying a test phrase, verify Whisper transcribes it accurately. Check both noise conditions and quiet speech.',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'Step 2: Set Up the Local LLM',
        content:
          'Install Ollama and pull the LLM model. Configure a system prompt for voice assistant behavior — shorter responses, no markdown, appropriate personality.',
        items: [
          '**Install Ollama:** Download from ollama.com. Available for macOS, Linux, and Windows. Installs in under 2 minutes.',
          '**Pull model:** `ollama pull llama3.1:8b` (recommended) or `ollama pull phi4` (lighter, good for 16 GB RAM systems).',
          '**Test:** `ollama run llama3.1:8b "What is the capital of France?"` — verify the response is accurate and fast.',
          '**System prompt for voice:** Use a short, directive system prompt: "You are a helpful voice assistant. Keep responses concise — 1–3 sentences maximum. Never use bullet points, markdown, or formatting. Speak naturally as if in conversation."',
          '**Temperature:** Set temperature to 0.3–0.5 for more predictable, factual responses. Lower temperature reduces hallucinations in voice responses.',
          '**Max tokens:** Limit response length with `--num-predict 150` — long responses take more TTS time and feel unnatural in voice interaction.',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'Step 3: Set Up Text-to-Speech',
        content:
          'Install Piper for all hardware tiers. It runs in real-time on CPU including Raspberry Pi, has 20+ language voice packs, and requires no GPU.',
        items: [
          '**Install Piper:** `pip install piper-tts`',
          '**Download a voice:** `piper --download-dir voices --update-voices --voice en_US-lessac-medium` (or any voice from the Piper voices page on Hugging Face).',
          '**Test:** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**Audio output:** Piper outputs raw PCM or WAV. Pipe to `aplay` (Linux), `afplay` (Mac), or use the `sounddevice` Python library for cross-platform playback.',
          '**Alternative (better quality):** Coqui VITS backend — install `pip install TTS`, use `tts --model_name tts_models/en/vctk/vits`. Requires ~2 GB VRAM; 2–3× slower than Piper but noticeably more natural.',
          '**Voice selection:** For voice assistants, choose a medium-quality voice rather than high — medium voices are faster and the difference is negligible over a speaker.',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'Step 4: Connect the Pipeline',
        content:
          'A Python orchestrator connects STT → LLM → TTS. The script captures audio from the microphone, transcribes it with Whisper, sends the transcript to Ollama, converts the response to speech with Piper, and plays it back.',
        codeBlock: `#!/usr/bin/env python3
"""Minimal offline voice assistant: Whisper STT + Ollama LLM + Piper TTS."""

import subprocess
import tempfile
import sounddevice as sd
import soundfile as sf
import numpy as np
import requests
import json

SAMPLE_RATE = 16000
RECORD_SECONDS = 5
OLLAMA_URL = "http://localhost:11434/api/generate"
WHISPER_BIN = "./whisper.cpp/main"
WHISPER_MODEL = "./whisper.cpp/models/ggml-small.bin"
PIPER_BIN = "piper"
PIPER_VOICE = "voices/en_US-lessac-medium.onnx"
SYSTEM_PROMPT = (
    "You are a helpful voice assistant. Keep responses to 1-3 sentences. "
    "Never use markdown, bullet points, or formatting. Speak naturally."
)

conversation_history = []

def record_audio(seconds: int = RECORD_SECONDS) -> np.ndarray:
    print("Listening...")
    audio = sd.rec(int(seconds * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype="int16")
    sd.wait()
    return audio

def transcribe(audio: np.ndarray) -> str:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        sf.write(f.name, audio, SAMPLE_RATE)
        result = subprocess.run(
            [WHISPER_BIN, "-m", WHISPER_MODEL, "-f", f.name, "--no-timestamps", "--no-prints"],
            capture_output=True, text=True
        )
    return result.stdout.strip()

def ask_llm(text: str) -> str:
    conversation_history.append({"role": "user", "content": text})
    response = requests.post(OLLAMA_URL, json={
        "model": "llama3.1:8b",
        "system": SYSTEM_PROMPT,
        "messages": conversation_history,
        "stream": False,
    })
    reply = response.json()["message"]["content"]
    conversation_history.append({"role": "assistant", "content": reply})
    return reply

def speak(text: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        subprocess.run(
            f'echo "{text}" | {PIPER_BIN} --model {PIPER_VOICE} --output_file {f.name}',
            shell=True, check=True
        )
        data, sr = sf.read(f.name)
        sd.play(data, sr)
        sd.wait()

def main():
    print("Voice assistant ready. Press Ctrl+C to stop.")
    while True:
        audio = record_audio()
        transcript = transcribe(audio)
        if not transcript or len(transcript) < 3:
            continue
        print(f"You: {transcript}")
        response = ask_llm(transcript)
        print(f"Assistant: {response}")
        speak(response)

if __name__ == "__main__":
    main()`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'note',
            text: 'This is a minimal pipeline for clarity — it records fixed-length audio. For production, use VAD (voice activity detection) to record until speech ends rather than using a fixed duration. faster-whisper includes Silero VAD; for whisper.cpp, use the --stream mode or implement a WebRTC VAD with the webrtcvad Python library.',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'Step 5: Wake Word Detection',
        content:
          '**A wake word detector runs a lightweight model continuously, triggering the full pipeline only when it hears your chosen phrase.** Without it, Whisper runs continuously — consuming CPU/GPU and generating more false positives on background noise.',
        items: [
          '**OpenWakeWord (MIT license):** Fully open-source, runs on CPU, supports custom wake words via fine-tuning on your own phrase. Install: `pip install openwakeword`. Works on Raspberry Pi. Best for fully offline and open-source setups.',
          '**Porcupine (Picovoice):** Proprietary but with a free tier for personal use. Pre-built wake words include "Alexa", "Hey Siri", "Ok Google", and custom options like "Hey Jarvis". Very accurate and low false-positive rate. Install: `pip install pvporcupine`.',
          '**Integration pattern:** Run OpenWakeWord/Porcupine in a loop. When wake word is detected, play a "ding" sound (user feedback), then trigger the Whisper + LLM + TTS pipeline for one query. Return to wake word listening after TTS playback.',
          '**Always-on power:** Wake word detection uses ~2–5% CPU on a Raspberry Pi 5 — negligible. You can leave the assistant running 24/7 with minimal power draw.',
          '**Custom wake words (OpenWakeWord):** Generate 500 positive and 500 negative audio examples of your wake phrase using text-to-speech, then fine-tune OpenWakeWord for < 30 minutes on CPU. Accuracy comparable to Porcupine for common English words.',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'Latency Optimization',
        content:
          '**The 1–2 second target is achievable on desktop hardware with the right settings.** Latency breaks down across the three layers:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'STT adds 0.2–0.5 sec, LLM first-token latency adds 0.5–1.5 sec, TTS adds 0.1–0.3 sec — total 1–2 seconds on a desktop GPU.',
          },
          {
            type: 'plain-terms',
            text: 'The LLM is the biggest bottleneck. The most effective optimization is to start streaming TTS output as the LLM generates tokens — the user starts hearing the answer before the LLM has finished writing it.',
          },
        ],
        items: [
          '**STT optimization (~0.2–0.5 sec):** Use Whisper small instead of large-v3. Use VAD to trim silence before passing audio to Whisper — shorter audio = faster transcription.',
          '**LLM optimization (~0.5–1.5 sec first token):** Pre-load the model at startup (Ollama does this automatically). Use Q4_K_M quantization for the best speed/quality balance. Set `--num-predict 100–150` to limit response length.',
          '**Streaming LLM → TTS:** Stream the LLM output token-by-token. Start TTS on each completed sentence (end of sentence detected by period/question mark). This reduces perceived latency by 0.3–0.7 seconds — the user hears the start of the answer while the LLM is still generating the end.',
          '**TTS optimization (~0.1–0.3 sec):** Piper generates the first audio within 50 ms. Pre-initialize Piper at startup. Use `--output-raw` to stream audio as it generates rather than waiting for a full file.',
          '**Keep models in memory:** Ollama keeps models warm in VRAM automatically. whisper.cpp loaded in stream mode stays in memory. Avoid reloading models between queries.',
          '**Target latency by hardware tier:** Pi 5: 5–8 sec (acceptable for non-conversational). Mini PC CPU: 3–5 sec (borderline conversational). Desktop GPU: 1–2 sec (natural). Mac M5: 1–1.5 sec (excellent).',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Security',
        content:
          '**A correctly assembled local voice assistant generates zero network traffic during operation.** All processing — audio capture, speech recognition, LLM inference, and TTS — runs entirely on your hardware.',
        items: [
          '**Verify with Wireshark:** Run Wireshark on your network interface during a conversation with the assistant. You should see zero packets from the assistant process. Any unexpected traffic indicates a misconfiguration — check that Ollama\'s external API is disabled if you have a public IP.',
          '**No audio stored:** Neither whisper.cpp nor faster-whisper write audio files by default — they process in memory. The Python orchestrator in this guide writes a temporary WAV file for whisper.cpp, which is deleted after transcription.',
          '**No conversation history stored:** The conversation history in the example script is in-memory only and resets when you restart. For persistent history, implement explicit storage with a local database and encryption at rest.',
          '**GDPR compliance:** Because all processing is local and no data leaves your network, a local voice assistant for internal use does not require a data processing agreement. There is no data controller/processor relationship with a third party.',
          '**Network isolation:** For maximum privacy, add a firewall rule blocking outbound traffic from the assistant process. Ollama and whisper.cpp will function normally — they require no network access after model download.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I use a local voice assistant for smart home control?',
            a: 'Yes, if your smart home system has a local API. Home Assistant (HASS) has excellent local integration — you can call the HASS REST API from the orchestrator after the LLM interprets the command. The LLM acts as an intent parser: "Turn on the living room lights" → structured JSON → HASS API call. For proprietary smart home systems (Ring, Nest, Philips Hue cloud) without local API support, you cannot integrate locally without internet.',
          },
          {
            q: 'How many languages does the local voice assistant support?',
            a: 'Whisper supports 99 languages for speech recognition. Piper supports 20+ language voice packs for TTS. The LLM\'s language support depends on the model — Llama 3.1 8B handles English, French, German, Spanish, Italian, Portuguese, and some Japanese/Chinese. For full multilingual support in less-common languages, choose a model specifically trained for those languages (e.g., Mistral 7B has strong European language support).',
          },
          {
            q: 'What is the minimum hardware to get under 2 seconds latency?',
            a: 'A Mac Mini M5 (24 GB, ~$600) or a desktop with an NVIDIA RTX 3060 12 GB (~$400 GPU, ~$800 total) both achieve 1–2 second latency. The key requirements are: 8+ GB GPU VRAM for Llama 3.1 8B at Q4, plus Metal or CUDA acceleration for Whisper. A 16 GB RAM CPU-only setup (Mini PC, ~$300) achieves 3–5 seconds — usable but below the "feels natural" threshold.',
          },
          {
            q: 'Does the Whisper + LLM + Piper pipeline work on Windows?',
            a: 'Yes. whisper.cpp has Windows build instructions using cmake and Visual Studio. Ollama runs natively on Windows 10/11 with NVIDIA GPU support. Piper has Windows binaries. The Python orchestrator runs on Windows with sounddevice for audio capture. The main complexity on Windows is building whisper.cpp from source — alternatively, use faster-whisper (pip install, no build required) on Windows with an NVIDIA GPU.',
          },
          {
            q: 'How do I add web search capability to the local voice assistant?',
            a: 'You can add web search by integrating a local search tool into the orchestrator. Options: (1) Use the DuckDuckGo API (free, no account needed) for general queries — parse the result and inject it into the LLM prompt. (2) Use a local news RSS feed for current events. (3) Use a local RAG system (AnythingLLM, PrivateGPT) with your own document collection for domain-specific search. The LLM then uses the retrieved context to answer questions accurately. This adds 0.5–2 seconds to latency depending on the search method.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — Source, build instructions, stream mode documentation.',
          '[Ollama on ollama.com](https://ollama.com) — Installation, model library, API reference.',
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — Source, voice pack downloads, Raspberry Pi setup guide.',
          '[OpenWakeWord on GitHub](https://github.com/dscripka/openWakeWord) — Source, custom wake word training guide, supported architectures.',
          '[Porcupine by Picovoice](https://github.com/Picovoice/porcupine) — Wake word SDK, free tier terms, Python SDK documentation.',
          '[Picovoice Console](https://console.picovoice.ai) — Create free-tier API key for Porcupine personal use.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026) — Deep dive on the STT layer of this pipeline.',
          '[Local TTS and Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Deep dive on the TTS layer and voice cloning options.',
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Extend this voice pipeline with vision model support.',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — Ollama installation and model management.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — Hardware selection for the full voice + LLM pipeline.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) — The mobile version of this guide (iPhone + Android).',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Vollständig offline Sprachassistenten bauen 2026: Whisper + LLM + Piper (Schritt für Schritt)',
    seoTitle: 'Offline-Sprachassistent bauen 2026: Whisper + Lokales LLM + Piper TTS',
    intro:
      'Ein vollständig offline arbeitender Sprachassistent kombiniert 2026 drei Komponenten: whisper.cpp für die Spracherkennung, ein lokales LLM (Llama 3.1 8B, Phi-4 oder Mistral 7B via Ollama) für die Verarbeitung und Piper TTS für die Sprachausgabe. Die End-to-End-Latenz auf einem Desktop-GPU-Setup beträgt 1–2 Sekunden – vergleichbar mit Alexa oder Google Assistant. Auf dem Mac Mini M5 liegt sie unter 1,5 Sekunden. Auf dem Raspberry Pi 5 beträgt sie 5–8 Sekunden. Dieser Leitfaden führt durch jeden Schritt mit Hardware-Tabellen, Python-Orchestrator-Code, Wake-Word-Setup und Latenzoptimierungsmaßnahmen.',
    metaDescription:
      'Vollständig offline Sprachassistenten bauen 2026 mit whisper.cpp für STT, Ollama + Llama 3.1 8B für die Verarbeitung und Piper TTS für die Sprachausgabe. Schritt-für-Schritt-Anleitung mit Hardwareanforderungen, Python-Code, Wake-Word-Setup und Latenzoptimierung.',
    twitterDescription:
      'DIY offline Sprachassistent 2026: Whisper STT + lokales LLM + Piper TTS. Keine Cloud, kein Abonnement. Vollständiger Bauanleitung mit Hardware-Spezifikationen, Python-Code und Wake-Word-Setup.',
    sections: {},
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Construire un assistant vocal entièrement hors ligne en 2026 : Whisper + LLM + Piper (guide étape par étape)',
    seoTitle: 'Assistant vocal hors ligne 2026 : Whisper + LLM local + Piper TTS',
    intro:
      'Un assistant vocal entièrement hors ligne en 2026 combine trois composants : whisper.cpp pour la reconnaissance vocale, un LLM local (Llama 3.1 8B, Phi-4 ou Mistral 7B via Ollama) pour le raisonnement, et Piper TTS pour la synthèse vocale. La latence de bout en bout sur un PC de bureau avec GPU est de 1 à 2 secondes, comparable à Alexa ou Google Assistant. Sur Mac Mini M5, elle est inférieure à 1,5 seconde. Sur Raspberry Pi 5, elle est de 5 à 8 secondes. Ce guide détaille chaque étape avec des tableaux de matériel, le code de l\'orchestrateur Python, la configuration du mot de déclenchement et des techniques d\'optimisation de la latence.',
    metaDescription:
      'Construire un assistant vocal entièrement hors ligne en 2026 avec whisper.cpp pour la STT, Ollama + Llama 3.1 8B pour le raisonnement et Piper TTS pour la synthèse vocale. Guide étape par étape avec les exigences matérielles, le code Python, la configuration du mot de déclenchement et l\'optimisation de la latence.',
    twitterDescription:
      'Assistant vocal DIY hors ligne 2026 : Whisper STT + LLM local + Piper TTS. Pas de cloud, pas d\'abonnement. Guide complet avec spécifications matérielles, code Python et configuration du mot de déclenchement.',
    sections: {},
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '完全オフライン音声アシスタントを2026年に構築：Whisper + LLM + Piper（ステップバイステップ）',
    seoTitle: 'オフライン音声アシスタント構築2026：Whisper + ローカルLLM + Piper TTS',
    intro:
      '2026年の完全オフライン音声アシスタントは、音声認識用のwhisper.cpp、推論用のローカルLLM（OllamaによるLlama 3.1 8B、Phi-4、またはMistral 7B）、音声出力用のPiper TTSの3つのコンポーネントを組み合わせます。デスクトップGPUセットアップでのエンドツーエンドのレイテンシは1〜2秒で、AlexaやGoogleアシスタントに匹敵します。Mac Mini M5では1.5秒未満、Raspberry Pi 5では5〜8秒です。このガイドでは、ハードウェア一覧表、Pythonオーケストレーターコード、ウェイクワードの設定、レイテンシ最適化技術を含む各ステップを詳しく解説します。',
    metaDescription:
      '2026年に完全オフライン音声アシスタントを構築：STT用whisper.cpp、推論用Ollama + Llama 3.1 8B、音声合成用Piper TTS。ハードウェア要件、Pythonコード、ウェイクワード設定、レイテンシ最適化を含むステップバイステップガイド。',
    twitterDescription:
      'DIYオフライン音声アシスタント2026：Whisper STT + ローカルLLM + Piper TTS。クラウド不要、サブスクリプション不要。ハードウェア仕様、Pythonコード、ウェイクワード設定を含む完全構築ガイド。',
    sections: {},
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '2026年构建完全离线语音助手：Whisper + LLM + Piper（逐步指南）',
    seoTitle: '构建离线语音助手2026：Whisper + 本地LLM + Piper TTS',
    intro:
      '2026年的完全离线语音助手由三个组件组成：用于语音识别的whisper.cpp、用于推理的本地LLM（通过Ollama运行Llama 3.1 8B、Phi-4或Mistral 7B），以及用于语音输出的Piper TTS。桌面GPU配置的端到端延迟为1-2秒，与Alexa或Google Assistant相当。Mac Mini M5上低于1.5秒，Raspberry Pi 5上为5-8秒。本指南逐步讲解每个环节，包含硬件配置表、Python编排代码、唤醒词设置和延迟优化技术。',
    metaDescription:
      '2026年构建完全离线语音助手：使用whisper.cpp实现STT，Ollama + Llama 3.1 8B实现推理，Piper TTS实现语音合成。包含硬件要求、Python代码、唤醒词配置和延迟优化的逐步指南。',
    twitterDescription:
      'DIY离线语音助手2026：Whisper STT + 本地LLM + Piper TTS。无需云服务，无需订阅。含硬件规格、Python代码和唤醒词配置的完整构建指南。',
    sections: {},
  },
}
