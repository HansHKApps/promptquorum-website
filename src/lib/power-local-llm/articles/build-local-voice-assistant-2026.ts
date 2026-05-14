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
      'Ein vollständig offline arbeitender Sprachassistent kombiniert 2026 drei Komponenten: whisper.cpp für die Spracherkennung, ein lokales LLM (Llama 3.1 8B, Phi-4 oder Mistral 7B via Ollama) für die Verarbeitung und Piper TTS für die Sprachausgabe. Die End-to-End-Latenz auf einem Desktop-GPU-Setup beträgt 1–2 Sekunden – vergleichbar mit Alexa oder Google Assistant. Auf dem Mac Mini M5 liegt sie unter 1,5 Sekunden. Auf dem Raspberry Pi 5 beträgt sie 5–8 Sekunden – nutzbar für Anfragen ohne Bildschirm, nicht für natürliche Konversation. Dieser Leitfaden führt durch jeden Schritt mit Hardware-Tabellen, Python-Orchestrator-Code, Wake-Word-Setup und Latenzoptimierungsmaßnahmen.',
    metaDescription:
      'Vollständig offline Sprachassistenten bauen 2026 mit whisper.cpp für STT, Ollama + Llama 3.1 8B für die Verarbeitung und Piper TTS für die Sprachausgabe. Schritt-für-Schritt-Anleitung mit Hardwareanforderungen, Python-Code, Wake-Word-Setup und Latenzoptimierung.',
    twitterDescription:
      'DIY offline Sprachassistent 2026: Whisper STT + lokales LLM + Piper TTS. Keine Cloud, kein Abonnement. Vollständige Bauanleitung mit Hardware-Spezifikationen, Python-Code und Wake-Word-Setup.',
    readTime: '14 Min. Lesezeit',
    leadAnswerBlock:
      '**Ein vollständig offline arbeitender Sprachassistent benötigt 2026 drei Komponenten: whisper.cpp für die Spracherkennung, ein lokales LLM via Ollama für die Verarbeitung und Piper TTS für die Sprachausgabe.** Die drei Komponenten werden durch einen Python-Orchestrator verbunden, der Audioeingaben abhört, transkribiert, an das LLM weitergibt und die Antwort in Sprache umwandelt. Auf einem Desktop mit RTX 3060 12 GB GPU beträgt die End-to-End-Latenz 1–2 Sekunden mit Llama 3.1 8B und Whisper small. Auf einem Mac Mini M5 (24 GB) liegt sie bei 1–1,5 Sekunden. Auf einem Raspberry Pi 5 (8 GB) beträgt sie 5–8 Sekunden mit Phi-3 mini 3,8B – nutzbar für Anfragen, nicht für Konversation. Ein Wake-Word-Detektor (OpenWakeWord oder Porcupine) macht den Assistenten dauerhaft empfangsbereit, ohne Whisper ununterbrochen auszuführen.',
    quickAnswerTop: {
      de: {
        question: 'Wie baut man 2026 einen vollständig offline arbeitenden Sprachassistenten?',
        answer:
          'Drei Komponenten kombinieren: whisper.cpp (Spracherkennung), ein lokales LLM via Ollama (Verarbeitung) und Piper TTS (Sprachausgabe). Ein Python-Orchestrator verbindet die drei: Mikrofon-Audio → Whisper → Text → Ollama LLM → Antworttext → Piper → Lautsprecher. Wake-Word-Detektor hinzufügen, um Whisper nicht durchgehend ausführen zu müssen. Der vollständige Stack benötigt mindestens 8–16 GB RAM (Desktop) oder 6 GB GPU-VRAM. Die Hardwarekosten liegen zwischen ca. 90 € (Raspberry Pi 5) und ca. 600 € (Mac Mini M5) bzw. ca. 750 € (Desktop-GPU).',
        bullets: [
          'Schicht 1 — STT: whisper.cpp (plattformübergreifend, Metal auf Mac) oder faster-whisper (NVIDIA GPU).',
          'Schicht 2 — LLM: Ollama + Llama 3.1 8B (Desktop), Phi-4 (Laptop/Pi) oder Mistral 7B (GPU).',
          'Schicht 3 — TTS: Piper (schnellste, CPU, alle Hardware), Coqui (bessere Qualität, benötigt GPU).',
          'Verbindung: Python-Orchestrator — Audio-Aufnahme → STT → LLM → TTS → Wiedergabe.',
          'Wake-Word: OpenWakeWord (Open-Source, MIT) oder Porcupine (Picovoice, kostenlose Stufe für privaten Gebrauch).',
          'Latenz: 1–2 Sek. auf Desktop-GPU / Mac M5. 5–8 Sek. auf Raspberry Pi 5.',
          'Hardwarekosten: Raspberry Pi 5 ca. 90 €, Mini-PC ca. 270 €, Desktop-GPU ca. 750 €, Mac Mini M5 ca. 600 €.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Warum einen lokalen Sprachassistenten bauen?', anchor: '#why-build' },
      { label: 'Die Drei-Schichten-Architektur', anchor: '#architecture' },
      { label: 'Hardwareanforderungen', anchor: '#hardware' },
      { label: 'Schritt 1: Spracherkennung einrichten', anchor: '#step1-stt' },
      { label: 'Schritt 2: Lokales LLM einrichten', anchor: '#step2-llm' },
      { label: 'Schritt 3: Text-to-Speech einrichten', anchor: '#step3-tts' },
      { label: 'Schritt 4: Pipeline verbinden', anchor: '#step4-pipeline' },
      { label: 'Schritt 5: Wake-Word-Erkennung', anchor: '#step5-wake-word' },
      { label: 'Latenzoptimierung', anchor: '#latency' },
      { label: 'Datenschutz und Sicherheit', anchor: '#privacy' },
      { label: 'Häufige Fragen', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Zusammenfassung',
        items: [
          '**Der Stack für den offline Sprachassistenten lautet: whisper.cpp → Ollama LLM → Piper TTS, orchestriert durch ein Python-Skript.** Alle drei Komponenten sind kostenlos, Open-Source und arbeiten nach der Installation vollständig offline.',
          '**End-to-End-Latenz auf Desktop-GPU (RTX 3060 12 GB): 1–2 Sekunden.** Dies entspricht Alexa und Google Assistant – der Schwellenwert für „fühlt sich natürlich an" bei der Sprachinteraktion. Whisper small und Llama 3.1 8B liefern dieses Ergebnis.',
          '**Raspberry Pi 5 (8 GB) ist eine nutzbare, aber langsame Plattform.** Mit Phi-3 mini 3,8B und Whisper base beträgt die Latenz 5–8 Sekunden. Geeignet für Anfragen ohne Bildschirm, nicht für konversationelle Interaktion.',
          '**Mac Mini M5 (24 GB Unified Memory) ist das beste Preis-Leistungs-Verhältnis für Qualität und Stille.** Lautlos im Leerlauf, leistungsstark genug für Llama 3.1 8B mit ~50 Token/Sek. und Whisper large-v3 mit 10-fachem Echtzeittempo via Metal. Latenz 1–1,5 Sekunden.',
          '**Wake-Word hinzufügen, um Whisper nicht dauerhaft auszuführen.** OpenWakeWord (MIT, kostenlos, benutzerdefinierte Wake-Words) ist die beste Open-Source-Option. Porcupine (Picovoice) bietet eine kostenlose Stufe für den privaten Gebrauch mit vorgefertigten Wake-Words wie „Hey Jarvis".',
          '**Whisper-Halluzination bei Stille ist der häufigste Pipeline-Fehler.** Whisper transkribiert Stille als Füllwörter oder Zitate aus Trainingsdaten. Einen Mindestenergieschwellenwert für Audio festlegen, bevor es an Whisper weitergegeben wird – und `--no-speech-threshold 0.6` in whisper.cpp konfigurieren.',
          '**Dieses Setup erzeugt während des Betriebs keinen Netzwerkverkehr.** Nach dem Aufbau mit Wireshark überprüfen. Kein Audio, keine Transkripte und keine LLM-Anfragen verlassen die eigene Hardware. DSGVO-Konformität für interne Tools ist automatisch gegeben.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**STT-Schicht:** whisper.cpp (beste Wahl für Apple Silicon und Embedded-Hardware), faster-whisper (beste Wahl für NVIDIA-GPU-Python-Pipelines).',
          '**LLM-Schicht:** Ollama mit Llama 3.1 8B (empfohlen), Phi-4 (kleiner, gute Qualität) oder Mistral 7B (vergleichbare Qualität zu Llama 3.1 8B).',
          '**TTS-Schicht:** Piper (schnellste, nur CPU, Echtzeit auf Pi), Coqui TTS (bessere Qualität, benötigt GPU).',
          '**Wake-Word-Optionen:** OpenWakeWord (MIT, vollständig offline), Porcupine (kostenlose Stufe, 1 benutzerdefiniertes Wake-Word).',
          '**Mindesthardware:** Raspberry Pi 5 mit 8 GB RAM (ca. 90 €) für 5–8 Sekunden Latenz.',
          '**Empfohlene Hardware:** Mac Mini M5 24 GB (ca. 600 €) oder Desktop mit RTX 3060 12 GB (ca. 750 €) für 1–2 Sekunden Latenz.',
          '**Sprachen:** Whisper unterstützt 99 Sprachen. Piper unterstützt 20+ Sprachpakete. Die LLM-Performance variiert je nach Sprache.',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: 'Warum einen lokalen Sprachassistenten bauen?',
        content:
          'Alexa, Siri und Google Assistant leiten Ihre Sprache über Cloud-Server – Audio wird transkribiert, verarbeitet und vom Anbieter protokolliert. Ein lokaler Sprachassistent verarbeitet alles auf der eigenen Hardware.',
        items: [
          '**Datenschutz:** Kein Audio verlässt das eigene Netzwerk. Kein Wake-Word-Audio in der Cloud gespeichert. Keine Gesprächshistorie auf Servern Dritter. Kritisch für Beschäftigte im Gesundheitswesen, Anwälte, Journalisten und alle mit vertraulicher Arbeit.',
          '**Kosten:** Kein Abonnement. Alexa+ kostet ca. 4,99 €/Monat. Google One kostet ca. 1,99–9,99 €/Monat. Ein lokaler Assistent ist eine einmalige Hardwareinvestition.',
          '**Anpassbarkeit:** Wake-Word, Persönlichkeit, System-Prompt und Funktionen selbst wählen. Eigene Befehle hinzufügen, lokale Hausautomationssysteme verbinden, lokale APIs integrieren.',
          '**Offline-Betrieb:** Funktioniert ohne Internet. Stromausfall (mit USV) + Internetausfall: Der lokale Assistent funktioniert weiterhin. Nützlich für Hütten, abgelegene Standorte und Notfallvorbereitung.',
          '**Was Sie aufgeben:** Websuche, Smart-Home-Integration mit proprietären Clouds, Kalendersynchronisierung mit Cloud-Diensten und die jahrelange RLHF-Optimierung, die Alexa/Siri bei Randfällen geschmeidig macht.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Die Drei-Schichten-Architektur',
        content:
          '**Der offline Sprachassistent besteht aus drei unabhängigen Schichten, die durch einen Python-Orchestrator verbunden werden.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Mikrofon → whisper.cpp (STT) → Ollama LLM → Piper TTS → Lautsprecher: drei unabhängige Komponenten, verbunden durch einen ~50-Zeilen-Python-Orchestrator.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich wie eine Telefonvermittlung vor: Sie sprechen, Whisper schreibt es auf, das LLM denkt sich eine Antwort aus und schreibt sie auf, Piper liest sie vor. Jeder Schritt ist ein eigenständiges Programm; Python übergibt den Text zwischen ihnen.',
          },
        ],
        items: [
          '**Schicht 1 — STT (Spracherkennung):** whisper.cpp oder faster-whisper. Konvertiert Mikrofon-Audio in Text. Läuft offline, ohne Netzwerkzugriff.',
          '**Schicht 2 — LLM (Verarbeitung):** Ollama mit Llama 3.1 8B, Phi-4 oder Mistral 7B. Nimmt den transkribierten Text + Gesprächshistorie + System-Prompt entgegen und generiert eine Antwort. Läuft offline, ohne Netzwerkzugriff.',
          '**Schicht 3 — TTS (Text-to-Speech):** Piper oder Coqui TTS. Konvertiert den LLM-Antworttext in Audio und gibt es über den Lautsprecher aus. Läuft offline, ohne Netzwerkzugriff.',
          '**Orchestrator:** Ein Python-Skript, das die drei Komponenten verbindet: Audio vom Mikrofon aufnehmen → an STT übergeben → Transkript an LLM übergeben → Antwort an TTS übergeben → Audio abspielen.',
          '**Optionales Wake-Word:** Ein leichtgewichtiger Dauerdetektor (OpenWakeWord, Porcupine), der die vollständige Pipeline nur auslöst, wenn die Wake-Phrase erkannt wird. Ohne ihn läuft whisper.cpp kontinuierlich – mit höherem CPU-Verbrauch und mehr Fehlauslösungen.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardwareanforderungen',
        content:
          'Vier Hardware-Konfigurationen, geordnet nach Latenz und Kosten. Alle unterstützen den vollständigen Whisper + LLM + Piper Stack.',
        columns: ['Konfiguration', 'STT-Modell', 'LLM-Modell', 'TTS', 'Gesamtkosten', 'End-to-End-Latenz'],
        rows: [
          {
            'Konfiguration': 'Raspberry Pi 5 (8 GB)',
            'STT-Modell': 'Whisper base (CPU)',
            'LLM-Modell': 'Phi-3 mini 3,8B Q4',
            'TTS': 'Piper (CPU)',
            'Gesamtkosten': 'ca. 90 €',
            'End-to-End-Latenz': '5–8 Sek.',
          },
          {
            'Konfiguration': 'Mini-PC (16 GB RAM)',
            'STT-Modell': 'Whisper small (CPU)',
            'LLM-Modell': 'Llama 3.1 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Gesamtkosten': 'ca. 270 €',
            'End-to-End-Latenz': '3–5 Sek.',
          },
          {
            'Konfiguration': 'Desktop (RTX 3060 12 GB)',
            'STT-Modell': 'Whisper large-v3 (GPU)',
            'LLM-Modell': 'Llama 3.1 8B Q4 (GPU)',
            'TTS': 'Piper oder Coqui (CPU/GPU)',
            'Gesamtkosten': 'ca. 750 €',
            'End-to-End-Latenz': '1–2 Sek.',
          },
          {
            'Konfiguration': 'Mac Mini M5 (24 GB)',
            'STT-Modell': 'Whisper large-v3 (Metal)',
            'LLM-Modell': 'Llama 3.1 8B (Metal)',
            'TTS': 'Piper (CPU)',
            'Gesamtkosten': 'ca. 600 €',
            'End-to-End-Latenz': '1–1,5 Sek.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Mac Mini M5 ist der kosteneffizienteste Weg zu einer Latenz unter 2 Sekunden. Er ist im Leerlauf lautlos, führt Whisper Metal und Ollama gleichzeitig auf Unified Memory aus und erfordert kein NVIDIA-Treibermanagement.',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'Schritt 1: Spracherkennung einrichten',
        content:
          'whisper.cpp für Apple Silicon und Embedded-Hardware installieren; faster-whisper für NVIDIA-GPU-Setups installieren.',
        items: [
          '**whisper.cpp installieren:** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**Modell herunterladen:** `bash ./models/download-ggml-model.sh small` (small = 3,4 % WER, gutes Gleichgewicht zwischen Geschwindigkeit und Genauigkeit)',
          '**Transkription testen:** `./main -m models/ggml-small.bin -f test.wav` – sollte genauen Text ausgeben.',
          '**Metal auf Mac aktivieren:** `make -j4 WHISPER_COREML=1` dann `bash models/generate-coreml-model.sh small`',
          '**Whisper-Modellauswahl:** base für Raspberry Pi (1 GB RAM, geringe Latenz), small für den besten Kompromiss (2 GB RAM, 3,4 % WER), large-v3 für höchste Genauigkeit (10 GB VRAM/RAM).',
          '**Stille-Unterdrückung konfigurieren:** Flags `--no-speech-threshold 0.6 --suppress-blank` hinzufügen, um zu vermeiden, dass Stille als halluzinierter Text transkribiert wird.',
          '**Mit 10-Sekunden-Aufnahme testen:** Einen Testsatz einsprechen und prüfen, ob Whisper ihn korrekt transkribiert. Sowohl unter Lärmbedingungen als auch bei leiser Sprache testen.',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'Schritt 2: Lokales LLM einrichten',
        content:
          'Ollama installieren und das LLM-Modell herunterladen. Einen System-Prompt für das Verhalten eines Sprachassistenten konfigurieren – kürzere Antworten, kein Markdown, angemessene Persönlichkeit.',
        items: [
          '**Ollama installieren:** Von ollama.com herunterladen. Verfügbar für macOS, Linux und Windows. Installation in unter 2 Minuten.',
          '**Modell herunterladen:** `ollama pull llama3.1:8b` (empfohlen) oder `ollama pull phi4` (leichter, gut für Systeme mit 16 GB RAM).',
          '**Testen:** `ollama run llama3.1:8b "What is the capital of France?"` – prüfen, ob die Antwort korrekt und schnell ist.',
          '**System-Prompt für Sprache:** Einen kurzen, direktiven System-Prompt verwenden: „You are a helpful voice assistant. Keep responses concise — 1–3 sentences maximum. Never use bullet points, markdown, or formatting. Speak naturally as if in conversation."',
          '**Temperatur:** Temperatur auf 0,3–0,5 setzen für vorhersehbarere, sachlichere Antworten. Niedrigere Temperatur reduziert Halluzinationen bei Sprachantworten.',
          '**Maximale Token-Anzahl:** Antwortlänge mit `--num-predict 150` begrenzen – lange Antworten benötigen mehr TTS-Zeit und wirken bei Sprachinteraktion unnatürlich.',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'Schritt 3: Text-to-Speech einrichten',
        content:
          'Piper für alle Hardware-Konfigurationen installieren. Läuft in Echtzeit auf CPU einschließlich Raspberry Pi, verfügt über 20+ Sprachpakete und benötigt keine GPU.',
        items: [
          '**Piper installieren:** `pip install piper-tts`',
          '**Stimme herunterladen:** `piper --download-dir voices --update-voices --voice en_US-lessac-medium` (oder eine beliebige Stimme von der Piper-Stimmen-Seite auf Hugging Face).',
          '**Testen:** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**Audio-Ausgabe:** Piper gibt rohes PCM oder WAV aus. Mit `aplay` (Linux), `afplay` (Mac) weiterleiten oder die Python-Bibliothek `sounddevice` für plattformübergreifende Wiedergabe verwenden.',
          '**Alternative (bessere Qualität):** Coqui VITS-Backend – `pip install TTS` installieren, `tts --model_name tts_models/en/vctk/vits` verwenden. Benötigt ~2 GB VRAM; 2–3× langsamer als Piper, aber merklich natürlicher.',
          '**Stimmauswahl:** Für Sprachassistenten eine Stimme mittlerer Qualität statt hoher wählen – mittlere Stimmen sind schneller und der Unterschied über einen Lautsprecher kaum wahrnehmbar.',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'Schritt 4: Pipeline verbinden',
        content:
          'Ein Python-Orchestrator verbindet STT → LLM → TTS. Das Skript nimmt Audio vom Mikrofon auf, transkribiert es mit Whisper, sendet das Transkript an Ollama, konvertiert die Antwort mit Piper in Sprache und spielt sie ab.',
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
            text: 'Dies ist eine minimale Pipeline zur Verdeutlichung – sie nimmt Audio mit fester Dauer auf. Für den produktiven Einsatz VAD (Voice Activity Detection) verwenden, um bis zum Ende der Sprache aufzunehmen statt einer festen Dauer. faster-whisper enthält Silero VAD; für whisper.cpp den --stream-Modus verwenden oder WebRTC VAD mit der Python-Bibliothek webrtcvad implementieren.',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'Schritt 5: Wake-Word-Erkennung',
        content:
          '**Ein Wake-Word-Detektor führt ein leichtgewichtiges Modell dauerhaft aus und löst die vollständige Pipeline nur aus, wenn er die gewählte Phrase erkennt.** Ohne ihn läuft Whisper kontinuierlich – mit höherem CPU-/GPU-Verbrauch und mehr Fehlauslösungen durch Hintergrundgeräusche.',
        items: [
          '**OpenWakeWord (MIT-Lizenz):** Vollständig Open-Source, läuft auf CPU, unterstützt benutzerdefinierte Wake-Words durch Fine-Tuning auf eigene Phrasen. Installation: `pip install openwakeword`. Läuft auf Raspberry Pi. Beste Wahl für vollständig offline und Open-Source-Setups.',
          '**Porcupine (Picovoice):** Proprietär, aber mit kostenloser Stufe für den privaten Gebrauch. Vorgefertigte Wake-Words umfassen „Alexa", „Hey Siri", „Ok Google" und benutzerdefinierte Optionen wie „Hey Jarvis". Sehr genaue Erkennung mit geringer Fehlauslösungsrate. Installation: `pip install pvporcupine`.',
          '**Integrationsmuster:** OpenWakeWord/Porcupine in einer Schleife ausführen. Bei erkanntem Wake-Word einen „Ding"-Ton abspielen (Nutzer-Feedback), dann die Whisper + LLM + TTS-Pipeline für eine Anfrage auslösen. Nach der TTS-Wiedergabe zur Wake-Word-Erkennung zurückkehren.',
          '**Dauerbetrieb:** Die Wake-Word-Erkennung verbraucht ~2–5 % CPU auf dem Raspberry Pi 5 – vernachlässigbar. Der Assistent kann 24/7 mit minimalem Stromverbrauch laufen.',
          '**Benutzerdefinierte Wake-Words (OpenWakeWord):** 500 positive und 500 negative Audiobeispiele der eigenen Wake-Phrase per TTS generieren, dann OpenWakeWord in unter 30 Minuten auf CPU feinabstimmen. Genauigkeit vergleichbar mit Porcupine für geläufige englische Wörter.',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'Latenzoptimierung',
        content:
          '**Das Ziel von 1–2 Sekunden ist auf Desktop-Hardware mit den richtigen Einstellungen erreichbar.** Die Latenz verteilt sich auf die drei Schichten:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'STT fügt 0,2–0,5 Sek. hinzu, LLM-First-Token-Latenz 0,5–1,5 Sek., TTS 0,1–0,3 Sek. – insgesamt 1–2 Sekunden auf einem Desktop-GPU.',
          },
          {
            type: 'plain-terms',
            text: 'Das LLM ist der größte Engpass. Die effektivste Optimierung besteht darin, TTS-Ausgabe zu streamen, während das LLM Token generiert – der Nutzer hört die Antwort, bevor das LLM fertig geschrieben hat.',
          },
        ],
        items: [
          '**STT-Optimierung (~0,2–0,5 Sek.):** Whisper small statt large-v3 verwenden. VAD einsetzen, um Stille vor der Übergabe an Whisper abzuschneiden – kürzeres Audio = schnellere Transkription.',
          '**LLM-Optimierung (~0,5–1,5 Sek. First Token):** Modell beim Start vorladen (Ollama erledigt dies automatisch). Q4_K_M-Quantisierung für das beste Geschwindigkeits-Qualitäts-Verhältnis verwenden. `--num-predict 100–150` setzen, um die Antwortlänge zu begrenzen.',
          '**LLM → TTS streamen:** LLM-Ausgabe Token für Token streamen. TTS bei jedem vollständigen Satz starten (Satzende durch Punkt/Fragezeichen erkannt). Dies reduziert die wahrgenommene Latenz um 0,3–0,7 Sekunden – der Nutzer hört den Anfang der Antwort, während das LLM noch das Ende generiert.',
          '**TTS-Optimierung (~0,1–0,3 Sek.):** Piper generiert das erste Audio in 50 ms. Piper beim Start vorinitialisieren. `--output-raw` verwenden, um Audio beim Generieren zu streamen, statt auf eine vollständige Datei zu warten.',
          '**Modelle im Speicher halten:** Ollama hält Modelle automatisch im VRAM warm. whisper.cpp im Stream-Modus bleibt im Speicher. Modelle zwischen Anfragen nicht neu laden.',
          '**Latenz-Ziele nach Hardware:** Pi 5: 5–8 Sek. (akzeptabel für nicht-konversationelle Nutzung). Mini-PC CPU: 3–5 Sek. (grenzwertig konversationell). Desktop-GPU: 1–2 Sek. (natürlich). Mac M5: 1–1,5 Sek. (ausgezeichnet).',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Sicherheit',
        content:
          '**Ein korrekt aufgebauter lokaler Sprachassistent erzeugt während des Betriebs keinen Netzwerkverkehr.** Alle Verarbeitung – Audio-Aufnahme, Spracherkennung, LLM-Inferenz und TTS – läuft vollständig auf der eigenen Hardware.',
        items: [
          '**Mit Wireshark überprüfen:** Wireshark auf dem Netzwerkinterface während eines Gesprächs mit dem Assistenten ausführen. Es sollten keinerlei Pakete vom Assistenten-Prozess sichtbar sein. Unerwarteter Datenverkehr weist auf eine Fehlkonfiguration hin – prüfen, ob Ollamas externe API bei öffentlicher IP-Adresse deaktiviert ist.',
          '**Kein Audio gespeichert:** Weder whisper.cpp noch faster-whisper schreiben standardmäßig Audiodateien – sie verarbeiten im Arbeitsspeicher. Der Python-Orchestrator in diesem Leitfaden schreibt eine temporäre WAV-Datei für whisper.cpp, die nach der Transkription gelöscht wird.',
          '**Keine Gesprächshistorie gespeichert:** Die Gesprächshistorie im Beispielskript liegt nur im Arbeitsspeicher und wird beim Neustart zurückgesetzt. Für persistente Historie eine explizite Speicherung mit lokaler Datenbank und Verschlüsselung im Ruhezustand implementieren.',
          '**DSGVO-Konformität:** Da die gesamte Verarbeitung lokal erfolgt und keine Daten das eigene Netzwerk verlassen, erfordert ein lokaler Sprachassistent für den internen Gebrauch keinen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Es besteht kein Auftraggeber-/Auftragnehmer-Verhältnis mit einem Dritten.',
          '**Netzwerkisolierung:** Für maximalen Datenschutz eine Firewall-Regel hinzufügen, die ausgehenden Datenverkehr vom Assistenten-Prozess blockiert. Ollama und whisper.cpp funktionieren normal – sie benötigen nach dem Modell-Download keinen Netzwerkzugriff.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Kann ich einen lokalen Sprachassistenten für die Smart-Home-Steuerung verwenden?',
            a: 'Ja, wenn das Smart-Home-System über eine lokale API verfügt. Home Assistant (HASS) bietet hervorragende lokale Integration – die HASS REST API kann nach der LLM-Interpretation des Befehls aus dem Orchestrator aufgerufen werden. Das LLM fungiert als Intent-Parser: „Wohnzimmerlicht einschalten" → strukturiertes JSON → HASS API-Aufruf. Proprietäre Smart-Home-Systeme (Ring, Nest, Philips Hue Cloud) ohne lokale API-Unterstützung lassen sich ohne Internet nicht lokal integrieren.',
          },
          {
            q: 'Wie viele Sprachen unterstützt der lokale Sprachassistent?',
            a: 'Whisper unterstützt 99 Sprachen für die Spracherkennung. Piper unterstützt 20+ Sprachpakete für TTS. Die Sprachunterstützung des LLMs hängt vom Modell ab – Llama 3.1 8B verarbeitet Englisch, Französisch, Deutsch, Spanisch, Italienisch und Portugiesisch gut. Für vollständige Mehrsprachigkeit in weniger verbreiteten Sprachen ein speziell für diese Sprachen trainiertes Modell wählen.',
          },
          {
            q: 'Was ist die Mindesthardware für eine Latenz unter 2 Sekunden?',
            a: 'Ein Mac Mini M5 (24 GB, ca. 600 €) oder ein Desktop mit NVIDIA RTX 3060 12 GB (GPU ca. 330 €, Gesamtsystem ca. 750 €) erreichen beide 1–2 Sekunden Latenz. Die Schlüsselanforderungen sind: 8+ GB GPU-VRAM für Llama 3.1 8B mit Q4, plus Metal- oder CUDA-Beschleunigung für Whisper. Ein 16 GB RAM CPU-only Setup (Mini-PC, ca. 270 €) erreicht 3–5 Sekunden – nutzbar, aber unterhalb der Schwelle für „fühlt sich natürlich an".',
          },
          {
            q: 'Funktioniert die Whisper + LLM + Piper Pipeline unter Windows?',
            a: 'Ja. whisper.cpp verfügt über Windows-Build-Anleitungen mit cmake und Visual Studio. Ollama läuft nativ unter Windows 10/11 mit NVIDIA-GPU-Unterstützung. Piper hat Windows-Binärdateien. Der Python-Orchestrator läuft unter Windows mit sounddevice für die Audio-Aufnahme. Die Hauptkomplexität unter Windows ist der Build von whisper.cpp aus dem Quellcode – alternativ faster-whisper (pip install, kein Build erforderlich) unter Windows mit NVIDIA-GPU verwenden.',
          },
          {
            q: 'Wie füge ich dem lokalen Sprachassistenten Websuche hinzu?',
            a: 'Websuche kann durch Integration eines lokalen Suchwerkzeugs in den Orchestrator hinzugefügt werden. Möglichkeiten: (1) DuckDuckGo API (kostenlos, kein Account erforderlich) für allgemeine Anfragen – Ergebnis parsen und in den LLM-Prompt einbetten. (2) Lokalen News-RSS-Feed für aktuelle Ereignisse verwenden. (3) Lokales RAG-System (AnythingLLM, PrivateGPT) mit eigener Dokumentensammlung für domänenspezifische Suche. Dies erhöht die Latenz um 0,5–2 Sekunden je nach Suchmethode.',
          },
          {
            q: 'Muss ich bei der Verwendung eines lokalen Sprachassistenten die DSGVO beachten?',
            a: 'Für den internen Gebrauch – auf eigener Hardware, ohne Weitergabe an Dritte – ist ein lokaler Sprachassistent automatisch DSGVO-konform. Da keine personenbezogenen Daten das eigene Netzwerk verlassen und kein Auftragnehmer an der Verarbeitung beteiligt ist, entfällt die Pflicht zum Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Wird der Assistent für Dritte betrieben (z. B. im Unternehmen für Mitarbeitende), gelten die Informationspflichten nach Art. 13/14. Die BSI-Grundschutz-Kataloge (Baustein OPS.1.1.4) empfehlen lokale Verarbeitung sensibler Spracheingaben gegenüber Cloud-Lösungen.',
          },
          {
            q: 'Ist ein lokaler Sprachassistent für den deutschen Mittelstand geeignet?',
            a: 'Ja – besonders für Anwendungsfälle mit Vertraulichkeitsanforderungen: Kanzleien, Steuerberater, medizinische Praxen, Fertigungsunternehmen mit Know-how-Schutz und alle unter NDA-Verpflichtungen. Die einmalige Hardware-Investition (ca. 270–750 €) amortisiert sich gegenüber Cloud-Abonnements bei regelmäßigem Einsatz in 6–18 Monaten. Einstiegspunkt: Mini-PC ca. 270 € mit Ollama und Piper – Einrichtungszeit unter 2 Stunden, kein IT-Spezialist erforderlich. Für höchste Qualität: Mac Mini M5 (ca. 600 €) mit Llama 3.1 8B.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[whisper.cpp auf GitHub](https://github.com/ggerganov/whisper.cpp) — Quellcode, Build-Anleitungen, Stream-Modus-Dokumentation.',
          '[Ollama auf ollama.com](https://ollama.com) — Installation, Modell-Bibliothek, API-Referenz.',
          '[Piper TTS auf GitHub](https://github.com/rhasspy/piper) — Quellcode, Stimmpaket-Downloads, Raspberry Pi Setup-Anleitung.',
          '[OpenWakeWord auf GitHub](https://github.com/dscripka/openWakeWord) — Quellcode, Anleitung zum Training benutzerdefinierter Wake-Words, unterstützte Architekturen.',
          '[Porcupine von Picovoice](https://github.com/Picovoice/porcupine) — Wake-Word SDK, kostenlose Stufen-Bedingungen, Python SDK-Dokumentation.',
          '[Picovoice Console](https://console.picovoice.ai) — Kostenlosen API-Schlüssel für Porcupine (privater Gebrauch) erstellen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Lokale Spracherkennung 2026: Whisper.cpp vs. faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026?lang=de) — Detailanalyse der STT-Schicht dieser Pipeline.',
          '[Lokale TTS und Voice-Cloning 2026: Piper vs. Coqui vs. XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=de) — Detailanalyse der TTS-Schicht und Voice-Cloning-Optionen.',
          '[Lokale multimodale KI-Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=de) — Sprachpipeline um Vision-Modell-Unterstützung erweitern.',
          '[Ollama installieren](/local-llms/how-to-install-ollama?lang=de) — Ollama-Installation und Modellverwaltung.',
          '[Lokale LLM-Hardware-Anleitung 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — Hardware-Auswahl für die vollständige Sprach- und LLM-Pipeline.',
          '[Lokalen Sprachassistenten auf dem Smartphone bauen](/power-local-llm/voice-assistant-local-mobile-offline?lang=de) — Die mobile Version dieses Leitfadens (iPhone und Android).',
        ],
      },
    },
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
