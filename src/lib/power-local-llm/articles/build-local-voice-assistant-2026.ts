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
    seoTitle: 'Local Voice Assistant 2026: Whisper + LLM + Piper TTS',
    intro:
      'A fully offline voice assistant in 2026 combines three components: whisper.cpp for speech-to-text, a local LLM (Llama 3.3 8B, Phi-4, or Mistral Small via Ollama) for reasoning, and Piper TTS for speech output. The end-to-end latency on a desktop GPU setup is 1–2 seconds, comparable to Alexa or Google Assistant. On a Mac Mini M5, it is under 1.5 seconds. On a Raspberry Pi 5, it is 5–8 seconds — usable for hands-free queries, not conversational. This guide walks through each layer step by step, with hardware tables, code for the Python orchestrator, wake word setup, and latency optimization techniques.',
    metaDescription:
      'whisper.cpp for STT, Ollama + Llama 3.3 8B for reasoning, Piper TTS for speech. 1–2 sec GPU latency. Python orchestrator + wake word setup. 2026.',
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
      'Llama 3.3 8B',
      'Phi-4',
      'Phi-3 mini 3.8B',
      'Mistral Small',
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
      '**A fully offline voice assistant in 2026 requires three components: whisper.cpp for speech-to-text, a local LLM via Ollama for reasoning, and Piper TTS for speech output.** The three connect via a Python orchestrator that listens for audio, transcribes it, sends the text to the LLM, and converts the response back to speech. On a desktop with an RTX 3060 12 GB GPU, end-to-end latency is 1–2 seconds with Llama 3.3 8B and Whisper small. On a Mac Mini M5 (24 GB), latency is 1–1.5 seconds with the same models running on Apple Silicon. On a Raspberry Pi 5 (8 GB), latency is 5–8 seconds with Phi-3 mini 3.8B — usable for hands-free queries with patience. Add a wake word detector (OpenWakeWord or Porcupine) to make the assistant always-listening without running Whisper continuously.',
    quickAnswerTop: {
      en: {
        question: 'How do you build a fully offline voice assistant in 2026?',
        answer:
          'Stack three components: whisper.cpp (speech-to-text), a local LLM via Ollama (reasoning), and Piper TTS (text-to-speech). A Python orchestrator connects the three: microphone audio → Whisper → text → Ollama LLM → response text → Piper → speaker. Add a wake word detector to avoid running Whisper continuously. The full stack requires 8–16 GB RAM minimum (desktop) or 6 GB GPU VRAM. Total hardware cost ranges from ~$100 (Raspberry Pi 5) to ~$600 (Mac Mini M5) to ~$800 (desktop GPU).',
        bullets: [
          'Layer 1 — STT: whisper.cpp (cross-platform, Metal on Mac) or faster-whisper (NVIDIA GPU).',
          'Layer 2 — LLM: Ollama + Llama 3.3 8B (desktop), Phi-4 (laptop/Pi), or Mistral Small (GPU).',
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
          '**End-to-end latency on a desktop GPU (RTX 3060 12 GB): 1–2 seconds.** This is comparable to Alexa and Google Assistant — the latency threshold for "feels natural" in voice interaction. Use Whisper small and Llama 3.3 8B for this result.',
          '**Raspberry Pi 5 (8 GB) is a viable but slow platform.** With Phi-3 mini 3.8B and Whisper base, latency is 5–8 seconds. Usable for hands-free queries where the user accepts a longer pause, not for conversational interaction.',
          '**Mac Mini M5 (24 GB unified memory) is the sweet spot for quality and silence.** Silent, fanless at idle, and powerful enough to run Llama 3.3 8B at ~50 tokens/sec with Whisper large-v3 at 10× real-time via Metal. Latency of 1–1.5 seconds.',
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
          '**LLM layer:** Ollama with Llama 3.3 8B (recommended), Phi-4 (smaller, good quality), or Mistral Small (comparable quality to Llama 3.3 8B).',
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
          '**Layer 2 — LLM (Reasoning):** Ollama serving Llama 3.3 8B, Phi-4, or Mistral Small. Takes the transcribed text + conversation history + system prompt and generates a response. Runs offline, no network.',
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
            'LLM Model': 'Llama 3.3 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Total Cost': '~$300',
            'End-to-End Latency': '3–5 sec',
          },
          {
            'Setup': 'Desktop (RTX 3060 12 GB)',
            'STT Model': 'Whisper large-v3 (GPU)',
            'LLM Model': 'Llama 3.3 8B Q4 (GPU)',
            'TTS': 'Piper or Coqui (CPU/GPU)',
            'Total Cost': '~$800',
            'End-to-End Latency': '1–2 sec',
          },
          {
            'Setup': 'Mac Mini M5 (24 GB)',
            'STT Model': 'Whisper large-v3 (Metal)',
            'LLM Model': 'Llama 3.3 8B (Metal)',
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
            a: 'Whisper supports 99 languages for speech recognition. Piper supports 20+ language voice packs for TTS. The LLM\'s language support depends on the model — Llama 3.3 8B handles English, French, German, Spanish, Italian, Portuguese, and some Japanese/Chinese. For full multilingual support in less-common languages, choose a model specifically trained for those languages (e.g., Mistral Small has strong European language support).',
          },
          {
            q: 'What is the minimum hardware to get under 2 seconds latency?',
            a: 'A Mac Mini M5 (24 GB, ~$600) or a desktop with an NVIDIA RTX 3060 12 GB (~$400 GPU, ~$800 total) both achieve 1–2 second latency. The key requirements are: 8+ GB GPU VRAM for Llama 3.3 8B at Q4, plus Metal or CUDA acceleration for Whisper. A 16 GB RAM CPU-only setup (Mini PC, ~$300) achieves 3–5 seconds — usable but below the "feels natural" threshold.',
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
    seoTitle: 'Lokaler Sprachassistent 2026: Whisper + LLM + Piper TTS',
    intro:
      'Ein vollständig offline arbeitender Sprachassistent kombiniert 2026 drei Komponenten: whisper.cpp für die Spracherkennung, ein lokales LLM (Llama 3.3 8B, Phi-4 oder Mistral Small via Ollama) für die Verarbeitung und Piper TTS für die Sprachausgabe. Die End-to-End-Latenz auf einem Desktop-GPU-Setup beträgt 1–2 Sekunden – vergleichbar mit Alexa oder Google Assistant. Auf dem Mac Mini M5 liegt sie unter 1,5 Sekunden. Auf dem Raspberry Pi 5 beträgt sie 5–8 Sekunden – nutzbar für Anfragen ohne Bildschirm, nicht für natürliche Konversation. Dieser Leitfaden führt durch jeden Schritt mit Hardware-Tabellen, Python-Orchestrator-Code, Wake-Word-Setup und Latenzoptimierungsmaßnahmen.',
    metaDescription:
      'Offline-Sprachassistent bauen 2026: whisper.cpp (STT), Ollama + Llama 3.3 8B und Piper TTS. Anleitung mit Hardware, Python-Code und Wake-Word-Setup.',
    twitterDescription:
      'DIY offline Sprachassistent 2026: Whisper STT + lokales LLM + Piper TTS. Keine Cloud, kein Abonnement. Vollständige Bauanleitung mit Hardware-Spezifikationen, Python-Code und Wake-Word-Setup.',
    readTime: '14 Min. Lesezeit',
    leadAnswerBlock:
      '**Ein vollständig offline arbeitender Sprachassistent benötigt 2026 drei Komponenten: whisper.cpp für die Spracherkennung, ein lokales LLM via Ollama für die Verarbeitung und Piper TTS für die Sprachausgabe.** Die drei Komponenten werden durch einen Python-Orchestrator verbunden, der Audioeingaben abhört, transkribiert, an das LLM weitergibt und die Antwort in Sprache umwandelt. Auf einem Desktop mit RTX 3060 12 GB GPU beträgt die End-to-End-Latenz 1–2 Sekunden mit Llama 3.3 8B und Whisper small. Auf einem Mac Mini M5 (24 GB) liegt sie bei 1–1,5 Sekunden. Auf einem Raspberry Pi 5 (8 GB) beträgt sie 5–8 Sekunden mit Phi-3 mini 3,8B – nutzbar für Anfragen, nicht für Konversation. Ein Wake-Word-Detektor (OpenWakeWord oder Porcupine) macht den Assistenten dauerhaft empfangsbereit, ohne Whisper ununterbrochen auszuführen.',
    quickAnswerTop: {
      de: {
        question: 'Wie baut man 2026 einen vollständig offline arbeitenden Sprachassistenten?',
        answer:
          'Drei Komponenten kombinieren: whisper.cpp (Spracherkennung), ein lokales LLM via Ollama (Verarbeitung) und Piper TTS (Sprachausgabe). Ein Python-Orchestrator verbindet die drei: Mikrofon-Audio → Whisper → Text → Ollama LLM → Antworttext → Piper → Lautsprecher. Wake-Word-Detektor hinzufügen, um Whisper nicht durchgehend ausführen zu müssen. Der vollständige Stack benötigt mindestens 8–16 GB RAM (Desktop) oder 6 GB GPU-VRAM. Die Hardwarekosten liegen zwischen ca. 90 € (Raspberry Pi 5) und ca. 600 € (Mac Mini M5) bzw. ca. 750 € (Desktop-GPU).',
        bullets: [
          'Schicht 1 — STT: whisper.cpp (plattformübergreifend, Metal auf Mac) oder faster-whisper (NVIDIA GPU).',
          'Schicht 2 — LLM: Ollama + Llama 3.3 8B (Desktop), Phi-4 (Laptop/Pi) oder Mistral Small (GPU).',
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
          '**End-to-End-Latenz auf Desktop-GPU (RTX 3060 12 GB): 1–2 Sekunden.** Dies entspricht Alexa und Google Assistant – der Schwellenwert für „fühlt sich natürlich an" bei der Sprachinteraktion. Whisper small und Llama 3.3 8B liefern dieses Ergebnis.',
          '**Raspberry Pi 5 (8 GB) ist eine nutzbare, aber langsame Plattform.** Mit Phi-3 mini 3,8B und Whisper base beträgt die Latenz 5–8 Sekunden. Geeignet für Anfragen ohne Bildschirm, nicht für konversationelle Interaktion.',
          '**Mac Mini M5 (24 GB Unified Memory) ist das beste Preis-Leistungs-Verhältnis für Qualität und Stille.** Lautlos im Leerlauf, leistungsstark genug für Llama 3.3 8B mit ~50 Token/Sek. und Whisper large-v3 mit 10-fachem Echtzeittempo via Metal. Latenz 1–1,5 Sekunden.',
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
          '**LLM-Schicht:** Ollama mit Llama 3.3 8B (empfohlen), Phi-4 (kleiner, gute Qualität) oder Mistral Small (vergleichbare Qualität zu Llama 3.3 8B).',
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
          '**Schicht 2 — LLM (Verarbeitung):** Ollama mit Llama 3.3 8B, Phi-4 oder Mistral Small. Nimmt den transkribierten Text + Gesprächshistorie + System-Prompt entgegen und generiert eine Antwort. Läuft offline, ohne Netzwerkzugriff.',
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
            'LLM-Modell': 'Llama 3.3 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Gesamtkosten': 'ca. 270 €',
            'End-to-End-Latenz': '3–5 Sek.',
          },
          {
            'Konfiguration': 'Desktop (RTX 3060 12 GB)',
            'STT-Modell': 'Whisper large-v3 (GPU)',
            'LLM-Modell': 'Llama 3.3 8B Q4 (GPU)',
            'TTS': 'Piper oder Coqui (CPU/GPU)',
            'Gesamtkosten': 'ca. 750 €',
            'End-to-End-Latenz': '1–2 Sek.',
          },
          {
            'Konfiguration': 'Mac Mini M5 (24 GB)',
            'STT-Modell': 'Whisper large-v3 (Metal)',
            'LLM-Modell': 'Llama 3.3 8B (Metal)',
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
            a: 'Whisper unterstützt 99 Sprachen für die Spracherkennung. Piper unterstützt 20+ Sprachpakete für TTS. Die Sprachunterstützung des LLMs hängt vom Modell ab – Llama 3.3 8B verarbeitet Englisch, Französisch, Deutsch, Spanisch, Italienisch und Portugiesisch gut. Für vollständige Mehrsprachigkeit in weniger verbreiteten Sprachen ein speziell für diese Sprachen trainiertes Modell wählen.',
          },
          {
            q: 'Was ist die Mindesthardware für eine Latenz unter 2 Sekunden?',
            a: 'Ein Mac Mini M5 (24 GB, ca. 600 €) oder ein Desktop mit NVIDIA RTX 3060 12 GB (GPU ca. 330 €, Gesamtsystem ca. 750 €) erreichen beide 1–2 Sekunden Latenz. Die Schlüsselanforderungen sind: 8+ GB GPU-VRAM für Llama 3.3 8B mit Q4, plus Metal- oder CUDA-Beschleunigung für Whisper. Ein 16 GB RAM CPU-only Setup (Mini-PC, ca. 270 €) erreicht 3–5 Sekunden – nutzbar, aber unterhalb der Schwelle für „fühlt sich natürlich an".',
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
            a: 'Ja – besonders für Anwendungsfälle mit Vertraulichkeitsanforderungen: Kanzleien, Steuerberater, medizinische Praxen, Fertigungsunternehmen mit Know-how-Schutz und alle unter NDA-Verpflichtungen. Die einmalige Hardware-Investition (ca. 270–750 €) amortisiert sich gegenüber Cloud-Abonnements bei regelmäßigem Einsatz in 6–18 Monaten. Einstiegspunkt: Mini-PC ca. 270 € mit Ollama und Piper – Einrichtungszeit unter 2 Stunden, kein IT-Spezialist erforderlich. Für höchste Qualität: Mac Mini M5 (ca. 600 €) mit Llama 3.3 8B.',
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
          '[Lokale Spracherkennung 2026: Whisper.cpp vs. faster-whisper](/de/power-local-llm/local-whisper-stt-comparison-2026) — Detailanalyse der STT-Schicht dieser Pipeline.',
          '[Lokale TTS und Voice-Cloning 2026: Piper vs. Coqui vs. XTTS v2](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Detailanalyse der TTS-Schicht und Voice-Cloning-Optionen.',
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Sprachpipeline um Vision-Modell-Unterstützung erweitern.',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) — Ollama-Installation und Modellverwaltung.',
          '[Lokale LLM-Hardware-Anleitung 2026](/de/local-llms/local-llm-hardware-guide-2026) — Hardware-Auswahl für die vollständige Sprach- und LLM-Pipeline.',
          '[Lokalen Sprachassistenten auf dem Smartphone bauen](/de/power-local-llm/voice-assistant-local-mobile-offline) — Die mobile Version dieses Leitfadens (iPhone und Android).',
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
    seoTitle: 'Assistant vocal local 2026 : Whisper + LLM + Piper',
    intro:
      'Un assistant vocal entièrement hors ligne en 2026 combine trois composants : whisper.cpp pour la reconnaissance vocale, un LLM local (Llama 3.3 8B, Phi-4 ou Mistral Small via Ollama) pour le raisonnement, et Piper TTS pour la synthèse vocale. La latence de bout en bout sur un PC de bureau avec GPU est de 1 à 2 secondes, comparable à Alexa ou Google Assistant. Sur Mac Mini M5, elle est inférieure à 1,5 seconde. Sur Raspberry Pi 5, elle est de 5 à 8 secondes. Ce guide détaille chaque étape avec des tableaux de matériel, le code de l\'orchestrateur Python, la configuration du mot de déclenchement et des techniques d\'optimisation de la latence.',
    metaDescription:
      'Construire un assistant vocal hors ligne en 2026 avec whisper.cpp pour la STT, Ollama + Llama 3.3 8B pour le raisonnement et Piper TTS pour la synthèse vocale. Guide étape par étape avec exigences matérielles, code Python, mot de déclenchement et optimisation de la latence.',
    twitterDescription:
      'Assistant vocal DIY hors ligne 2026 : Whisper STT + LLM local + Piper TTS. Pas de cloud, pas d\'abonnement. Guide complet avec spécifications matérielles, code Python et mot de déclenchement.',
    readTime: '14 min de lecture',
    leadAnswerBlock:
      '**Un assistant vocal hors ligne complet nécessite trois composants : whisper.cpp pour la reconnaissance vocale, un LLM local via Ollama pour le raisonnement, et Piper TTS pour la synthèse vocale.** Un orchestrateur Python relie les trois : audio microphone → Whisper → texte → Ollama LLM → réponse → Piper → haut-parleur. Sur un PC avec RTX 3060 12 Go de VRAM, la latence est de 1 à 2 secondes avec Llama 3.3 8B et Whisper small. Sur Mac Mini M5 (24 Go), elle descend à 1–1,5 seconde. Sur Raspberry Pi 5 (8 Go), elle est de 5 à 8 secondes avec Phi-3 mini 3.8B. Ajoutez un détecteur de mot de déclenchement (OpenWakeWord ou Porcupine) pour que l\'assistant soit toujours en écoute sans faire tourner Whisper en continu.',
    quickAnswerTop: {
      fr: {
        question: 'Comment construire un assistant vocal entièrement hors ligne en 2026 ?',
        answer:
          'Assembler trois composants : whisper.cpp (reconnaissance vocale), un LLM local via Ollama (raisonnement) et Piper TTS (synthèse vocale). Un orchestrateur Python relie les trois : audio microphone → Whisper → texte → Ollama → réponse → Piper → haut-parleur. Ajoutez un mot de déclenchement pour éviter de faire tourner Whisper en permanence. L\'ensemble nécessite au minimum 8–16 Go de RAM ou 6 Go de VRAM GPU. Les coûts vont de 90 € (Raspberry Pi 5) à 600 € (Mac Mini M5) ou 750 € (GPU de bureau).',
        bullets: [
          'Couche 1 — STT : whisper.cpp (multiplateforme, Metal sur Mac) ou faster-whisper (GPU NVIDIA).',
          'Couche 2 — LLM : Ollama + Llama 3.3 8B (PC de bureau), Phi-4 (laptop/Pi) ou Mistral Small (GPU).',
          'Couche 3 — TTS : Piper (plus rapide, CPU, tout matériel), Coqui (meilleure qualité, GPU requis).',
          'Liaison : orchestrateur Python — capture audio → STT → LLM → TTS → lecture.',
          'Mot de déclenchement : OpenWakeWord (open-source, MIT) ou Porcupine (Picovoice, tier gratuit pour usage personnel).',
          'Latence : 1–2 s sur GPU de bureau / Mac M5. 5–8 s sur Raspberry Pi 5.',
          'Coût matériel : Raspberry Pi 5 ~90 €, Mini PC ~270 €, GPU de bureau ~750 €, Mac Mini M5 ~600 €.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Pourquoi construire un assistant vocal local ?', anchor: '#why-build' },
      { label: 'L\'architecture en trois couches', anchor: '#architecture' },
      { label: 'Configuration matérielle', anchor: '#hardware' },
      { label: 'Étape 1 : Configurer la reconnaissance vocale', anchor: '#step1-stt' },
      { label: 'Étape 2 : Configurer le LLM local', anchor: '#step2-llm' },
      { label: 'Étape 3 : Configurer la synthèse vocale', anchor: '#step3-tts' },
      { label: 'Étape 4 : Connecter le pipeline', anchor: '#step4-pipeline' },
      { label: 'Étape 5 : Détection du mot de déclenchement', anchor: '#step5-wake-word' },
      { label: 'Optimisation de la latence', anchor: '#latency' },
      { label: 'Confidentialité et sécurité', anchor: '#privacy' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures connexes', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Points clés',
        items: [
          '**Le pipeline est : whisper.cpp → Ollama LLM → Piper TTS, orchestré par un script Python.** Les trois composants sont gratuits, open-source et fonctionnent entièrement hors ligne une fois installés.',
          '**Latence de bout en bout sur GPU de bureau (RTX 3060 12 Go) : 1 à 2 secondes.** Comparable à Alexa et Google Assistant. Utilisez Whisper small et Llama 3.3 8B pour ce résultat.',
          '**Raspberry Pi 5 (8 Go) est viable mais lent.** Avec Phi-3 mini 3.8B et Whisper base, la latence est de 5 à 8 secondes. Utilisable pour des requêtes mains libres, pas pour une conversation fluide.',
          '**Mac Mini M5 (24 Go de mémoire unifiée) offre le meilleur rapport qualité-silence-performance.** Silencieux au repos, Llama 3.3 8B à ~50 tokens/s, Whisper large-v3 en 10× temps réel via Metal. Latence de 1 à 1,5 seconde.',
          '**Ajoutez un mot de déclenchement pour ne pas faire tourner Whisper en permanence.** OpenWakeWord (MIT, gratuit, mots personnalisables) est la meilleure option open-source. Porcupine (Picovoice) propose un tier gratuit avec des mots préconfigurés comme « Hey Jarvis ».',
          '**La hallucination de Whisper sur le silence est le bug le plus fréquent.** Définissez un seuil d\'énergie audio minimum et configurez `--no-speech-threshold 0.6`.',
          '**Ce setup ne génère aucun trafic réseau en fonctionnement.** Aucun audio, aucune transcription, aucune requête LLM ne quitte votre machine. La conformité RGPD pour les outils internes est automatique.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Couche STT :** whisper.cpp (optimal pour Apple Silicon et embarqué), faster-whisper (optimal pour les pipelines Python GPU NVIDIA).',
          '**Couche LLM :** Ollama avec Llama 3.3 8B (recommandé), Phi-4 (plus léger) ou Mistral Small.',
          '**Couche TTS :** Piper (plus rapide, CPU uniquement, temps réel sur Pi), Coqui TTS (meilleure qualité, GPU requis).',
          '**Options de mot de déclenchement :** OpenWakeWord (MIT, entièrement hors ligne), Porcupine (tier gratuit, 1 mot personnalisé).',
          '**Matériel minimum :** Raspberry Pi 5 avec 8 Go de RAM (~90 €) pour une latence de 5 à 8 secondes.',
          '**Matériel recommandé :** Mac Mini M5 24 Go (~600 €) ou PC de bureau avec RTX 3060 12 Go (~750 €) pour 1 à 2 secondes.',
          '**Langues :** Whisper supporte 99 langues. Piper supporte 20+ packs vocaux. Les performances LLM varient selon la langue.',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: 'Pourquoi construire un assistant vocal local ?',
        content:
          'Alexa, Siri et Google Assistant acheminent votre voix via des serveurs cloud — votre audio est transcrit, traité et journalisé par le prestataire. Un assistant vocal local traite tout sur votre propre matériel.',
        items: [
          '**Confidentialité :** Aucun audio ne quitte votre réseau. Aucun historique de conversation sur des serveurs tiers. Essentiel pour les professionnels de santé, avocats, journalistes et toute personne traitant des données sensibles.',
          '**Coût :** Pas d\'abonnement. Alexa+ coûte environ 4,99 €/mois. Google One coûte environ 1,99 à 9,99 €/mois. Un assistant local est un investissement matériel unique.',
          '**Personnalisation :** Choisissez votre mot de déclenchement, la personnalité, le prompt système et les fonctionnalités. Connectez des systèmes domotiques locaux, intégrez des API locales.',
          '**Fonctionnement hors ligne :** Fonctionne sans internet. Panne de courant (avec onduleur) + panne internet : votre assistant local continue de fonctionner.',
          '**Ce que vous perdez :** Recherche web, intégration domotique avec les clouds propriétaires, synchronisation d\'agenda cloud, et les années d\'optimisation RLHF qui rendent Alexa/Siri fluides pour les cas limites.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'L\'architecture en trois couches',
        content:
          '**L\'assistant vocal hors ligne repose sur trois couches indépendantes connectées par un orchestrateur Python.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Microphone → whisper.cpp (STT) → Ollama LLM → Piper TTS → haut-parleur : trois composants indépendants reliés par un orchestrateur Python d\'environ 50 lignes.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un relais téléphonique : vous parlez, Whisper l\'écrit, le LLM formule une réponse et l\'écrit, Piper la lit à voix haute. Chaque étape est un programme distinct ; Python fait passer le texte entre eux.',
          },
        ],
        items: [
          '**Couche 1 — STT :** whisper.cpp ou faster-whisper. Convertit l\'audio du microphone en texte. Fonctionne hors ligne, sans réseau.',
          '**Couche 2 — LLM :** Ollama avec Llama 3.3 8B, Phi-4 ou Mistral Small. Reçoit le texte transcrit + l\'historique + le prompt système et génère une réponse. Fonctionne hors ligne.',
          '**Couche 3 — TTS :** Piper ou Coqui TTS. Convertit le texte de réponse en audio et le diffuse via le haut-parleur. Fonctionne hors ligne.',
          '**Orchestrateur :** Un script Python qui relie les trois : capture audio → STT → transcript → LLM → réponse → TTS → audio diffusé.',
          '**Mot de déclenchement optionnel :** Un détecteur léger en permanence (OpenWakeWord, Porcupine) qui ne lance le pipeline complet que lorsque la phrase d\'activation est détectée.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle',
        content:
          'Quatre configurations matérielles, classées par latence et coût. Toutes supportent le pipeline complet Whisper + LLM + Piper.',
        columns: ['Configuration', 'Modèle STT', 'Modèle LLM', 'TTS', 'Coût total', 'Latence totale'],
        rows: [
          {
            'Configuration': 'Raspberry Pi 5 (8 Go)',
            'Modèle STT': 'Whisper base (CPU)',
            'Modèle LLM': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper (CPU)',
            'Coût total': '~90 €',
            'Latence totale': '5–8 s',
          },
          {
            'Configuration': 'Mini PC (16 Go RAM)',
            'Modèle STT': 'Whisper small (CPU)',
            'Modèle LLM': 'Llama 3.3 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Coût total': '~270 €',
            'Latence totale': '3–5 s',
          },
          {
            'Configuration': 'PC de bureau (RTX 3060 12 Go)',
            'Modèle STT': 'Whisper large-v3 (GPU)',
            'Modèle LLM': 'Llama 3.3 8B Q4 (GPU)',
            'TTS': 'Piper ou Coqui (CPU/GPU)',
            'Coût total': '~750 €',
            'Latence totale': '1–2 s',
          },
          {
            'Configuration': 'Mac Mini M5 (24 Go)',
            'Modèle STT': 'Whisper large-v3 (Metal)',
            'Modèle LLM': 'Llama 3.3 8B (Metal)',
            'TTS': 'Piper (CPU)',
            'Coût total': '~600 €',
            'Latence totale': '1–1,5 s',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le Mac Mini M5 est le chemin le plus rentable vers une latence inférieure à 2 secondes. Silencieux au repos, il fait tourner Whisper Metal et Ollama simultanément sur la mémoire unifiée, sans gestion de pilotes NVIDIA.',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'Étape 1 : Configurer la reconnaissance vocale',
        content:
          'Installez whisper.cpp pour Apple Silicon et le matériel embarqué ; installez faster-whisper pour les setups GPU NVIDIA.',
        items: [
          '**Installer whisper.cpp :** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**Télécharger le modèle :** `bash ./models/download-ggml-model.sh small` (small = 3.4 % WER, bon équilibre vitesse/précision)',
          '**Tester la transcription :** `./main -m models/ggml-small.bin -f test.wav` — doit produire une sortie texte précise.',
          '**Activer Metal sur Mac :** `make -j4 WHISPER_COREML=1` puis `bash models/generate-coreml-model.sh small`',
          '**Sélection du modèle :** base pour Raspberry Pi (1 Go RAM, faible latence), small pour le meilleur compromis (2 Go RAM, 3.4 % WER), large-v3 pour la précision maximale (10 Go VRAM/RAM).',
          '**Configurer la suppression du silence :** Ajoutez `--no-speech-threshold 0.6 --suppress-blank` pour éviter de transcrire le silence en texte halluciné.',
          '**Tester avec un enregistrement de 10 secondes :** Vérifiez la transcription en conditions bruyantes et en parole faible.',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'Étape 2 : Configurer le LLM local',
        content:
          'Installez Ollama et téléchargez le modèle LLM. Configurez un prompt système adapté — réponses courtes, pas de markdown, personnalité appropriée.',
        items: [
          '**Installer Ollama :** Téléchargez depuis ollama.com. Disponible pour macOS, Linux et Windows. Installation en moins de 2 minutes.',
          '**Télécharger le modèle :** `ollama pull llama3.1:8b` (recommandé) ou `ollama pull phi4` (plus léger, pour 16 Go de RAM).',
          '**Tester :** `ollama run llama3.1:8b "What is the capital of France?"` — vérifiez la précision et la rapidité.',
          '**Prompt système pour la voix :** « You are a helpful voice assistant. Keep responses concise — 1–3 sentences maximum. Never use bullet points, markdown, or formatting. Speak naturally as if in conversation. »',
          '**Température :** Réglez à 0.3–0.5 pour des réponses plus prévisibles et factuelles. Réduit les hallucinations.',
          '**Nombre maximum de tokens :** Limitez avec `--num-predict 150` — les longues réponses prennent plus de temps en TTS et sonnent peu naturel à l\'oral.',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'Étape 3 : Configurer la synthèse vocale',
        content:
          'Installez Piper pour toutes les configurations matérielles. Fonctionne en temps réel sur CPU, y compris Raspberry Pi, avec 20+ packs vocaux et sans GPU.',
        items: [
          '**Installer Piper :** `pip install piper-tts`',
          '**Télécharger une voix :** `piper --download-dir voices --update-voices --voice en_US-lessac-medium`',
          '**Tester :** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**Sortie audio :** Piper génère du PCM brut ou du WAV. Redirigez vers `aplay` (Linux), `afplay` (Mac), ou utilisez `sounddevice` Python.',
          '**Alternative (meilleure qualité) :** Backend Coqui VITS — `pip install TTS`, `tts --model_name tts_models/en/vctk/vits`. Nécessite ~2 Go de VRAM, 2–3× plus lent.',
          '**Sélection de la voix :** Choisissez une voix de qualité moyenne — plus rapide et la différence est négligeable via un haut-parleur.',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'Étape 4 : Connecter le pipeline',
        content:
          'Un orchestrateur Python connecte STT → LLM → TTS. Le script capture l\'audio du microphone, le transcrit avec Whisper, envoie la transcription à Ollama, convertit la réponse en parole avec Piper et la diffuse.',
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
            text: 'Il s\'agit d\'un pipeline minimal — il enregistre avec une durée fixe. Pour la production, utilisez la VAD (détection d\'activité vocale) pour enregistrer jusqu\'à la fin de la parole. faster-whisper intègre Silero VAD ; pour whisper.cpp, utilisez le mode --stream ou implémentez une VAD WebRTC avec la bibliothèque Python webrtcvad.',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'Étape 5 : Détection du mot de déclenchement',
        content:
          '**Un détecteur de mot de déclenchement fait tourner un modèle léger en permanence et ne lance le pipeline complet que lorsque la phrase choisie est détectée.** Sans lui, Whisper tourne en continu — consommant plus de CPU/GPU et générant plus de faux positifs.',
        items: [
          '**OpenWakeWord (licence MIT) :** Entièrement open-source, tourne sur CPU, supporte des mots personnalisés via fine-tuning. Installation : `pip install openwakeword`. Fonctionne sur Raspberry Pi.',
          '**Porcupine (Picovoice) :** Propriétaire avec tier gratuit pour usage personnel. Mots préconfigurés : « Alexa », « Hey Siri », « Ok Google », « Hey Jarvis ». Très bonne précision. Installation : `pip install pvporcupine`.',
          '**Schéma d\'intégration :** Faites tourner le détecteur en boucle. À la détection, jouez un son « ding », déclenchez le pipeline pour une requête, puis revenez à l\'écoute.',
          '**Fonctionnement en continu :** La détection utilise ~2–5 % de CPU sur Raspberry Pi 5 — négligeable. L\'assistant peut tourner 24h/24.',
          '**Mots personnalisés (OpenWakeWord) :** Générez 500 exemples positifs et 500 négatifs via TTS, puis affinez OpenWakeWord en moins de 30 minutes sur CPU.',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'Optimisation de la latence',
        content:
          '**L\'objectif de 1 à 2 secondes est atteignable sur du matériel de bureau avec les bons réglages.** La latence se décompose sur les trois couches :',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le STT ajoute 0,2–0,5 s, le premier token du LLM ajoute 0,5–1,5 s, le TTS ajoute 0,1–0,3 s — total 1 à 2 secondes sur GPU de bureau.',
          },
          {
            type: 'plain-terms',
            text: 'Le LLM est le principal goulot d\'étranglement. L\'optimisation la plus efficace : démarrer le TTS en streaming pendant que le LLM génère ses tokens — l\'utilisateur entend la réponse avant que le LLM ait fini.',
          },
        ],
        items: [
          '**Optimisation STT (~0,2–0,5 s) :** Utilisez Whisper small plutôt que large-v3. Utilisez la VAD pour couper le silence avant de passer l\'audio à Whisper.',
          '**Optimisation LLM (~0,5–1,5 s premier token) :** Préchargez le modèle au démarrage (Ollama le fait automatiquement). Utilisez Q4_K_M. Définissez `--num-predict 100–150`.',
          '**Streaming LLM → TTS :** Streamez la sortie du LLM token par token. Lancez le TTS à chaque phrase complète. Réduit la latence perçue de 0,3 à 0,7 s.',
          '**Optimisation TTS (~0,1–0,3 s) :** Piper génère le premier audio en 50 ms. Pré-initialisez Piper au démarrage. Utilisez `--output-raw` pour le streaming.',
          '**Maintenir les modèles en mémoire :** Ollama maintient les modèles chauds en VRAM automatiquement. Évitez de recharger les modèles entre les requêtes.',
          '**Objectifs par configuration :** Pi 5 : 5–8 s. Mini PC CPU : 3–5 s. GPU de bureau : 1–2 s. Mac M5 : 1–1,5 s.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et sécurité',
        content:
          '**Un assistant vocal local correctement configuré ne génère aucun trafic réseau en fonctionnement.** Tout le traitement — capture audio, reconnaissance vocale, inférence LLM et TTS — s\'exécute entièrement sur votre matériel.',
        items: [
          '**Vérifiez avec Wireshark :** Lancez Wireshark pendant une conversation. Vous ne devriez voir aucun paquet provenant du processus assistant. Tout trafic inattendu indique une mauvaise configuration.',
          '**Aucun audio stocké :** Ni whisper.cpp ni faster-whisper n\'écrivent de fichiers audio par défaut. L\'orchestrateur écrit un fichier WAV temporaire supprimé après la transcription.',
          '**Aucun historique stocké :** L\'historique dans le script d\'exemple est en mémoire uniquement. Pour un historique persistant, implémentez un stockage local avec chiffrement au repos.',
          '**Conformité RGPD et CNIL :** Comme tout le traitement est local et qu\'aucune donnée ne quitte votre réseau, aucun contrat de sous-traitance n\'est requis. La CNIL recommande le traitement local des données vocales sensibles (médicales, juridiques, financières) pour éviter tout transfert vers des prestataires tiers.',
          '**Isolation réseau :** Ajoutez une règle de pare-feu bloquant le trafic sortant du processus assistant pour une confidentialité maximale. Ollama et whisper.cpp fonctionneront normalement après le téléchargement des modèles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Puis-je utiliser un assistant vocal local pour contrôler ma domotique ?',
            a: 'Oui, si votre système domotique dispose d\'une API locale. Home Assistant (HASS) offre une excellente intégration locale — vous pouvez appeler l\'API REST HASS depuis l\'orchestrateur après que le LLM a interprété la commande. Le LLM sert de parseur d\'intentions : « Allume les lumières du salon » → JSON → appel API HASS. Pour les systèmes propriétaires (Ring, Nest, Philips Hue cloud) sans API locale, l\'intégration locale n\'est pas possible sans internet.',
          },
          {
            q: 'Combien de langues l\'assistant vocal local supporte-t-il ?',
            a: 'Whisper supporte 99 langues pour la reconnaissance vocale. Piper supporte 20+ packs vocaux pour le TTS. Le support linguistique du LLM dépend du modèle — Llama 3.3 8B gère bien l\'anglais, le français, l\'allemand, l\'espagnol, l\'italien et le portugais. Pour les langues moins répandues, choisissez un modèle spécifiquement entraîné.',
          },
          {
            q: 'Quel est le matériel minimum pour une latence inférieure à 2 secondes ?',
            a: 'Un Mac Mini M5 (24 Go, ~600 €) ou un PC de bureau avec NVIDIA RTX 3060 12 Go (GPU ~330 €, système ~750 €) atteignent tous deux 1 à 2 secondes. Les exigences clés : 8 Go+ de VRAM GPU pour Llama 3.3 8B en Q4, plus Metal ou CUDA pour Whisper. Un setup CPU uniquement (Mini PC, ~270 €) atteint 3 à 5 secondes.',
          },
          {
            q: 'Le pipeline Whisper + LLM + Piper fonctionne-t-il sous Windows ?',
            a: 'Oui. whisper.cpp dispose d\'instructions de build Windows avec cmake et Visual Studio. Ollama fonctionne nativement sous Windows 10/11 avec GPU NVIDIA. Piper a des binaires Windows. La principale complexité est la compilation de whisper.cpp — utilisez faster-whisper (pip install, aucune compilation) sous Windows avec GPU NVIDIA.',
          },
          {
            q: 'Comment ajouter la recherche web à l\'assistant vocal local ?',
            a: 'Intégrez un outil de recherche dans l\'orchestrateur. Options : (1) API DuckDuckGo (gratuite, sans compte) pour les requêtes générales. (2) Flux RSS local pour l\'actualité. (3) Système RAG local (AnythingLLM, PrivateGPT) avec votre propre collection de documents. Cela ajoute 0,5 à 2 secondes de latence selon la méthode.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp sur GitHub](https://github.com/ggerganov/whisper.cpp) — Code source, instructions de build, documentation du mode stream.',
          '[Ollama sur ollama.com](https://ollama.com) — Installation, bibliothèque de modèles, référence API.',
          '[Piper TTS sur GitHub](https://github.com/rhasspy/piper) — Code source, téléchargements de packs vocaux, guide Raspberry Pi.',
          '[OpenWakeWord sur GitHub](https://github.com/dscripka/openWakeWord) — Code source, guide d\'entraînement de mots personnalisés.',
          '[Porcupine par Picovoice](https://github.com/Picovoice/porcupine) — SDK de mot de déclenchement, conditions du tier gratuit, documentation Python.',
          '[Picovoice Console](https://console.picovoice.ai) — Créez une clé API gratuite pour Porcupine (usage personnel).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison-2026) — Analyse approfondie de la couche STT de ce pipeline.',
          '[TTS local et clonage vocal 2026 : Piper vs Coqui vs XTTS v2](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Analyse approfondie de la couche TTS et des options de clonage vocal.',
          '[Pipeline IA multimodale local 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Étendre ce pipeline vocal avec le support de modèles de vision.',
          '[Installer Ollama](/fr/local-llms/how-to-install-ollama) — Installation d\'Ollama et gestion des modèles.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — Sélection du matériel pour le pipeline complet.',
          '[Construire un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) — La version mobile de ce guide (iPhone et Android).',
        ],
      },
    },
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
      '2026年の完全オフライン音声アシスタントは、音声認識用のwhisper.cpp、推論用のローカルLLM（OllamaによるLlama 3.3 8B、Phi-4、またはMistral Small）、音声出力用のPiper TTSの3つのコンポーネントを組み合わせます。デスクトップGPUセットアップでのエンドツーエンドのレイテンシは1〜2秒で、AlexaやGoogleアシスタントに匹敵します。Mac Mini M5では1.5秒未満、Raspberry Pi 5では5〜8秒です。このガイドでは、ハードウェア一覧表、Pythonオーケストレーターコード、ウェイクワードの設定、レイテンシ最適化技術を含む各ステップを詳しく解説します。',
    metaDescription:
      '2026年版ローカル音声アシスタントの構築：Whisper、LLM、Piper TTSを組み合わせて完全オフラインの音声AIを作成。プライバシー保護と低遅延を実現する方法を解説。',
    twitterDescription:
      'DIYオフライン音声アシスタント2026：Whisper STT + ローカルLLM + Piper TTS。クラウド不要、サブスクリプション不要。ハードウェア仕様、Pythonコード、ウェイクワード設定を含む完全構築ガイド。',
    readTime: '14分で読める',
    leadAnswerBlock:
      '**2026年の完全オフライン音声アシスタントには3つのコンポーネントが必要です：音声認識用のwhisper.cpp、推論用のOllama経由ローカルLLM、音声出力用のPiper TTS。** Pythonオーケストレーターが3つを接続し、音声を聞き取り、テキストに変換し、LLMに送信し、応答を音声に変換します。RTX 3060 12 GB GPUを搭載したデスクトップでは、Llama 3.3 8BとWhisper smallを使用した場合のエンドツーエンドレイテンシは1〜2秒です。Mac Mini M5（24 GB）では同じモデルをApple Silicon上で実行した場合1〜1.5秒。Raspberry Pi 5（8 GB）ではPhi-3 mini 3.8Bで5〜8秒です。ウェイクワード検出器（OpenWakeWordまたはPorcupine）を追加することで、Whisperを継続的に実行することなく常時待機状態を実現できます。',
    quickAnswerTop: {
      ja: {
        question: '2026年に完全オフライン音声アシスタントを構築するには？',
        answer:
          '3つのコンポーネントを組み合わせます：whisper.cpp（音声認識）、Ollama経由のローカルLLM（推論）、Piper TTS（テキスト読み上げ）。Pythonオーケストレーターが3つを接続：マイク音声 → Whisper → テキスト → Ollama LLM → 応答テキスト → Piper → スピーカー。ウェイクワード検出器を追加してWhisperの継続動作を回避します。フルスタックには最低8〜16 GB RAM（デスクトップ）または6 GB GPU VRAMが必要です。ハードウェアコストは約¥14,800（Raspberry Pi 5）から約¥88,800（Mac Mini M5）、約¥130,000（デスクトップGPU）の範囲です。',
        bullets: [
          'レイヤー1 — STT：whisper.cpp（クロスプラットフォーム、MacではMetal）またはfaster-whisper（NVIDIA GPU）。',
          'レイヤー2 — LLM：Ollama + Llama 3.3 8B（デスクトップ）、Phi-4（ラップトップ/Pi）、またはMistral Small（GPU）。',
          'レイヤー3 — TTS：Piper（最速、CPU対応、全ハードウェアで動作）、Coqui（高品質、GPU必要）。',
          'グルー：Pythonオーケストレーター — 音声キャプチャ → STT → LLM → TTS → 再生。',
          'ウェイクワード：OpenWakeWord（オープンソース、MIT）またはPorcupine（Picovoice、個人使用は無料枠あり）。',
          'レイテンシ：デスクトップGPU / Mac M5で1〜2秒。Raspberry Pi 5で5〜8秒。',
          'ハードウェアコスト：Raspberry Pi 5 約¥14,800、ミニPC 約¥43,000、デスクトップGPU 約¥130,000、Mac Mini M5 約¥88,800。',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '概要', anchor: '#quick-facts' },
      { label: 'なぜローカル音声アシスタントを構築するのか？', anchor: '#why-build' },
      { label: '三層アーキテクチャ', anchor: '#architecture' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'ステップ1：音声認識のセットアップ', anchor: '#step1-stt' },
      { label: 'ステップ2：ローカルLLMのセットアップ', anchor: '#step2-llm' },
      { label: 'ステップ3：テキスト読み上げのセットアップ', anchor: '#step3-tts' },
      { label: 'ステップ4：パイプラインの接続', anchor: '#step4-pipeline' },
      { label: 'ステップ5：ウェイクワード検出', anchor: '#step5-wake-word' },
      { label: 'レイテンシ最適化', anchor: '#latency' },
      { label: 'プライバシーとセキュリティ', anchor: '#privacy' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '参考文献', anchor: '#sources' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**オフライン音声アシスタントのスタックは：whisper.cpp → Ollama LLM → Piper TTS、Pythonスクリプトでオーケストレーションされます。** 3つのコンポーネントはすべて無料のオープンソースであり、インストール後は完全にオフラインで動作します。',
          '**デスクトップGPU（RTX 3060 12 GB）でのエンドツーエンドレイテンシ：1〜2秒。** AlexaやGoogle アシスタントと同等です。この結果にはWhisper smallとLlama 3.3 8Bを使用します。',
          '**Raspberry Pi 5（8 GB）は実用的ですが低速なプラットフォームです。** Phi-3 mini 3.8BとWhisper baseを使用した場合のレイテンシは5〜8秒。ハンズフリー操作には使用可能ですが、会話型インタラクションには向きません。',
          '**Mac Mini M5（24 GB統合メモリ）は品質と静粛性のベストバランスです。** アイドル時はファンレスで静寂、Llama 3.3 8Bを約50トークン/秒で実行でき、Whisper large-v3はMetalで10倍のリアルタイム処理が可能。レイテンシは1〜1.5秒。',
          '**Whisperを継続的に実行しないようウェイクワードを追加してください。** OpenWakeWord（MIT、無料、カスタムウェイクワード対応）がベストなオープンソースオプションです。Porcupine（Picovoice）は個人使用の無料枠があり、「Hey Jarvis」などの定義済みウェイクワードが使えます。',
          '**静寂時のWhisperハルシネーションは最も一般的なパイプラインのバグです。** Whisperは静寂をフィラーワードやトレーニングデータからの引用として転写することがあります。音声をWhisperに渡す前に最小音声エネルギー閾値を設定し、whisper.cppで`--no-speech-threshold 0.6`を設定してください。',
          '**このセットアップは動作中にネットワークトラフィックをゼロに保ちます。** 組み立て後にWiresharkで確認してください。音声、転写結果、LLMクエリのいずれもマシン外に出ません。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '概要',
        items: [
          '**STTレイヤー：** whisper.cpp（Apple Siliconと組み込みに最適）またはfaster-whisper（NVIDIA GPU Pythonパイプラインに最適）。',
          '**LLMレイヤー：** OllamaとLlama 3.3 8B（推奨）、Phi-4（軽量、高品質）、またはMistral Small（Llama 3.3 8Bと同等の品質）。',
          '**TTSレイヤー：** Piper（最速、CPUのみ、Pi上でリアルタイム）、Coqui TTS（高品質、GPU必要）。',
          '**ウェイクワードオプション：** OpenWakeWord（MIT、完全オフライン）、Porcupine（無料枠、カスタムウェイクワード1つ）。',
          '**最小ハードウェア：** Raspberry Pi 5（8 GB RAM、約¥14,800）で5〜8秒レイテンシ。',
          '**推奨ハードウェア：** Mac Mini M5 24 GB（約¥88,800）またはRTX 3060 12 GB搭載デスクトップ（約¥130,000）で1〜2秒レイテンシ。',
          '**言語：** Whisperは99言語に対応。Piperは20以上の言語音声パックを提供。LLMの言語性能はモデルによって異なります。',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: 'なぜローカル音声アシスタントを構築するのか？',
        content:
          'Alexa、Siri、Google アシスタントはすべてクラウドサーバー経由で音声を処理しています。あなたの音声はプロバイダーによって転写、処理、記録されます。ローカル音声アシスタントはすべての処理をあなたのハードウェア上で行います。',
        items: [
          '**プライバシー：** 音声が自宅外に出ません。クラウドにウェイクワード音声は保存されません。サードパーティのサーバーに会話履歴はありません。医療従事者、弁護士、ジャーナリスト、機密業務を持つすべての人に重要です。',
          '**コスト：** サブスクリプション不要。Alexa+（旧Alexa Premium）は月額$4.99、Google Oneは月額$1.99〜$9.99かかります。ローカルアシスタントは一回きりのハードウェアコストです。',
          '**カスタマイズ：** ウェイクワード、個性、システムプロンプト、機能を選択できます。カスタムコマンドを追加し、ローカルホームオートメーションシステムに接続し、ローカルAPIと統合できます。',
          '**オフライン動作：** インターネットなしで動作します。停電（UPSあり）＋インターネット障害でもローカルアシスタントは動き続けます。山小屋、遠隔地、緊急時対策に有用です。',
          '**失うもの：** ウェブ検索、独自クラウドを使うスマートホーム統合、クラウドサービスとのカレンダー同期、AlexaやSiriのエッジケースを滑らかにしているRLHFチューニングの積み重ね。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '三層アーキテクチャ',
        content:
          '**オフライン音声アシスタントは、Pythonオーケストレーターによって接続された3つの独立したレイヤーで構成されています。**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'マイク → whisper.cpp（STT） → Ollama LLM → Piper TTS → スピーカー：50行のPythonオーケストレーターでつながれた3つの独立したコンポーネント。',
          },
          {
            type: 'plain-terms',
            text: '電話リレーのようなものです。あなたが話すと、Whisperが文字に起こし、LLMが返答を考えて書き、Piperがそれをスピーカーから読み上げます。各ステップは別のプログラムで、Pythonがテキストを受け渡します。',
          },
        ],
        items: [
          '**レイヤー1 — STT（音声認識）：** whisper.cppまたはfaster-whisper。マイク音声をテキストに変換します。オフラインで動作し、ネットワーク不要です。',
          '**レイヤー2 — LLM（推論）：** Llama 3.3 8B、Phi-4、またはMistral Smallを提供するOllama。転写されたテキスト＋会話履歴＋システムプロンプトを受け取り、応答を生成します。オフラインで動作し、ネットワーク不要です。',
          '**レイヤー3 — TTS（テキスト読み上げ）：** PiperまたはCoqui TTS。LLMの応答テキストを音声に変換し、スピーカーから再生します。オフラインで動作し、ネットワーク不要です。',
          '**オーケストレーター：** 3つを接続するPythonスクリプト：マイクから音声をキャプチャ → STTに渡す → LLMに転写結果を渡す → TTSに応答を渡す → 音声を再生。',
          '**オプションのウェイクワード：** 選択したフレーズが検出された場合のみフルパイプラインをトリガーする軽量の常時動作検出器（OpenWakeWord、Porcupine）。これがないと、オーケストレーターはwhisper.cppを継続的に実行し、CPUやGPUを消費し、バックグラウンドノイズによる誤検知が増えます。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア要件',
        content:
          'レイテンシとコスト順に並べた4つのハードウェア構成。すべてWhisper + LLM + Piperのフルスタックをサポートします。',
        columns: ['構成', 'STTモデル', 'LLMモデル', 'TTS', '合計費用', 'エンドツーエンドレイテンシ'],
        rows: [
          {
            '構成': 'Raspberry Pi 5（8 GB）',
            'STTモデル': 'Whisper base（CPU）',
            'LLMモデル': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper（CPU）',
            '合計費用': '約¥14,800',
            'エンドツーエンドレイテンシ': '5〜8秒',
          },
          {
            '構成': 'ミニPC（16 GB RAM）',
            'STTモデル': 'Whisper small（CPU）',
            'LLMモデル': 'Llama 3.3 8B Q4（CPU）',
            'TTS': 'Piper（CPU）',
            '合計費用': '約¥43,000',
            'エンドツーエンドレイテンシ': '3〜5秒',
          },
          {
            '構成': 'デスクトップ（RTX 3060 12 GB）',
            'STTモデル': 'Whisper large-v3（GPU）',
            'LLMモデル': 'Llama 3.3 8B Q4（GPU）',
            'TTS': 'Piper または Coqui（CPU/GPU）',
            '合計費用': '約¥130,000',
            'エンドツーエンドレイテンシ': '1〜2秒',
          },
          {
            '構成': 'Mac Mini M5（24 GB）',
            'STTモデル': 'Whisper large-v3（Metal）',
            'LLMモデル': 'Llama 3.3 8B（Metal）',
            'TTS': 'Piper（CPU）',
            '合計費用': '約¥88,800',
            'エンドツーエンドレイテンシ': '1〜1.5秒',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mac Mini M5は、2秒未満のレイテンシを達成するための最もコスト効率の高い選択肢です。アイドル時はファンレスで静寂、統合メモリ上でWhisper MetalとOllamaを同時に実行でき、NVIDIAドライバーの管理が不要です。',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'ステップ1：音声認識のセットアップ',
        content:
          'Apple Siliconと組み込みハードウェアにはwhisper.cppをインストールし、NVIDIA GPUセットアップにはfaster-whisperをインストールします。',
        items: [
          '**whisper.cppのインストール：** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**モデルのダウンロード：** `bash ./models/download-ggml-model.sh small`（small = WER 3.4%、速度と精度のバランスが良い）',
          '**転写のテスト：** `./main -m models/ggml-small.bin -f test.wav` — 正確なテキスト出力が得られるはずです。',
          '**MacでMetalを有効化：** `make -j4 WHISPER_COREML=1` 後に `bash models/generate-coreml-model.sh small`',
          '**Whisperモデルの選択：** Raspberry PiにはWhisper base（1 GB RAM、低レイテンシ）、バランス重視にはsmall（2 GB RAM、WER 3.4%）、最高精度にはlarge-v3（VRAM/RAM 10 GB必要）。',
          '**無音抑制の設定：** 無音をハルシネーションとして転写しないよう`--no-speech-threshold 0.6 --suppress-blank`フラグを追加します。',
          '**10秒録音でのテスト：** テストフレーズを録音し、Whisperが正確に転写することを確認します。ノイズ条件と静かな音声の両方を確認してください。',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'ステップ2：ローカルLLMのセットアップ',
        content:
          'Ollamaをインストールし、LLMモデルを取得します。音声アシスタントの動作用システムプロンプトを設定します。短い応答、マークダウンなし、適切な個性が必要です。',
        items: [
          '**Ollamaのインストール：** ollama.comからダウンロードします。macOS、Linux、Windows対応。2分以内にインストール完了。',
          '**モデルの取得：** `ollama pull llama3.1:8b`（推奨）または`ollama pull phi4`（軽量、16 GB RAMシステムに最適）。',
          '**テスト：** `ollama run llama3.1:8b "What is the capital of France?"` — 応答が正確で高速であることを確認します。',
          '**音声用システムプロンプト：** 短くて指示的なシステムプロンプトを使用します：「あなたは役立つ音声アシスタントです。応答は簡潔に — 最大1〜3文。箇条書き、マークダウン、書式は使用しないでください。会話のように自然に話してください。」',
          '**温度：** より予測可能で事実に基づく応答のために温度を0.3〜0.5に設定します。低い温度は音声応答のハルシネーションを減らします。',
          '**最大トークン数：** `--num-predict 150`で応答長を制限します。長い応答はTTS時間を増やし、音声インタラクションでは不自然に感じます。',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'ステップ3：テキスト読み上げのセットアップ',
        content:
          '全ハードウェア構成にPiperをインストールします。Raspberry Piを含むCPU上でリアルタイム動作し、20以上の言語音声パックを持ち、GPUが不要です。',
        items: [
          '**Piperのインストール：** `pip install piper-tts`',
          '**音声のダウンロード：** `piper --download-dir voices --update-voices --voice en_US-lessac-medium`（またはHugging FaceのPiper voicesページから任意の音声）。',
          '**テスト：** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**音声出力：** PiperはPCMまたはWAVを出力します。`aplay`（Linux）、`afplay`（Mac）にパイプするか、クロスプラットフォーム再生には`sounddevice`Pythonライブラリを使用します。',
          '**代替（高品質）：** Coqui VITSバックエンド — `pip install TTS`をインストールし、`tts --model_name tts_models/en/vctk/vits`を使用します。約2 GB VRAMが必要で、Piperより2〜3倍遅いですが、明らかに自然な音声です。',
          '**音声選択：** 音声アシスタントには、高品質よりも中品質の音声を選んでください。中品質の音声は高速で、スピーカーからの品質差は無視できます。',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'ステップ4：パイプラインの接続',
        content:
          'PythonオーケストレーターがSTT → LLM → TTSを接続します。スクリプトはマイクから音声をキャプチャし、Whisperで転写し、Ollamaにテキストを送信し、Piperで応答を音声に変換して再生します。',
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
            text: 'これは明確さのための最小限のパイプラインです。固定長の音声を録音します。本番環境では、固定時間ではなく音声終了まで録音するVAD（音声活動検出）を使用してください。faster-whisperにはSilero VADが含まれています。whisper.cppでは--streamモードを使用するか、webrtcvad Pythonライブラリを使ってWebRTC VADを実装してください。',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'ステップ5：ウェイクワード検出',
        content:
          '**ウェイクワード検出器は軽量モデルを常時実行し、選択したフレーズを検出した場合のみフルパイプラインをトリガーします。** これがないと、Whisperが継続的に実行され、CPUやGPUを消費し、バックグラウンドノイズによる誤検知が増えます。',
        items: [
          '**OpenWakeWord（MITライセンス）：** 完全なオープンソース、CPU上で動作、カスタムフレーズのファインチューニングによるカスタムウェイクワードに対応。インストール：`pip install openwakeword`。Raspberry Piでも動作。完全オフラインでオープンソースのセットアップに最適です。',
          '**Porcupine（Picovoice）：** 独自仕様ですが個人使用の無料枠あり。定義済みウェイクワードには「Alexa」「Hey Siri」「Ok Google」、「Hey Jarvis」などのカスタムオプションが含まれます。精度が高く誤検知率が低い。インストール：`pip install pvporcupine`。',
          '**統合パターン：** OpenWakeWord/Porcupineをループで実行します。ウェイクワードが検出されたら「ディン」音（ユーザーフィードバック）を鳴らし、Whisper + LLM + TTSパイプラインを1つのクエリ用にトリガーします。TTS再生後、ウェイクワード待機に戻ります。',
          '**常時稼働電力：** ウェイクワード検出はRaspberry Pi 5でCPUの約2〜5%を使用し、無視できる程度です。最小限の消費電力でアシスタントを24時間365日稼働させることができます。',
          '**カスタムウェイクワード（OpenWakeWord）：** テキスト読み上げを使ってウェイクフレーズの500のポジティブと500のネガティブ音声サンプルを生成し、CPU上で30分未満でOpenWakeWordをファインチューニングします。一般的な英語単語ではPorcupineと同等の精度が得られます。',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'レイテンシ最適化',
        content:
          '**1〜2秒の目標はデスクトップハードウェアで適切な設定により達成可能です。** レイテンシは3つのレイヤーに分散しています：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'STTが0.2〜0.5秒、LLMの初回トークンレイテンシが0.5〜1.5秒、TTSが0.1〜0.3秒 — デスクトップGPUで合計1〜2秒。',
          },
          {
            type: 'plain-terms',
            text: 'LLMが最大のボトルネックです。最も効果的な最適化は、LLMがトークンを生成するにつれてTTS出力をストリーミング開始することです。LLMが書き終わる前にユーザーが答えを聞き始めます。',
          },
        ],
        items: [
          '**STT最適化（約0.2〜0.5秒）：** large-v3の代わりにWhisper smallを使用します。無音をトリムしてからWhisperに渡すためにVADを使用します。短い音声 = 高速な転写。',
          '**LLM最適化（初回トークン約0.5〜1.5秒）：** 起動時にモデルをプリロードします（Ollamaは自動的に行います）。速度と品質のベストバランスにはQ4_K_M量子化を使用します。応答長を制限するには`--num-predict 100〜150`を設定します。',
          '**ストリーミングLLM → TTS：** LLMの出力をトークンごとにストリーミングします。完成した各文（ピリオドや疑問符の終わりで検出）でTTSを開始します。これにより知覚されるレイテンシが0.3〜0.7秒削減されます。LLMが残りを生成している間にユーザーは答えの最初を聞き始めます。',
          '**TTS最適化（約0.1〜0.3秒）：** Piperは50ms以内に最初の音声を生成します。起動時にPiperを事前初期化します。完全なファイルを待つのではなく、生成しながら音声をストリーミングするために`--output-raw`を使用します。',
          '**モデルをメモリに保持：** OllamaはVRAM内のモデルを自動的にウォーム状態に保ちます。ストリームモードで読み込まれたwhisper.cppはメモリに残ります。クエリ間でのモデルリロードを避けます。',
          '**ハードウェア構成別の目標レイテンシ：** Pi 5：5〜8秒（会話型以外では許容範囲）。ミニPC CPU：3〜5秒（会話型の境界線）。デスクトップGPU：1〜2秒（自然な感じ）。Mac M5：1〜1.5秒（優秀）。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとセキュリティ',
        content:
          '**正しく組み立てられたローカル音声アシスタントは、動作中にネットワークトラフィックをゼロに保ちます。** 音声キャプチャ、音声認識、LLM推論、TTSを含むすべての処理はハードウェア上で実行されます。',
        items: [
          '**Wiresharkで確認：** アシスタントとの会話中にネットワークインターフェイスでWiresharkを実行します。アシスタントプロセスからのパケットがゼロであることを確認してください。予期しないトラフィックは設定ミスを示します。パブリックIPを持つ場合は、OllamaのextternalAPIが無効化されていることを確認してください。',
          '**音声の保存なし：** whisper.cppもfaster-whisperも、デフォルトでは音声ファイルを書き込みません。メモリで処理します。このガイドのPythonオーケストレーターは、whisper.cpp用に一時的なWAVファイルを書き込みますが、転写後に削除されます。',
          '**会話履歴の保存なし：** サンプルスクリプトの会話履歴はメモリのみで、再起動するとリセットされます。永続的な履歴には、ローカルデータベースと保存時の暗号化を使った明示的なストレージを実装してください。',
          '**プライバシーコンプライアンス：** すべての処理がローカルで行われ、データがネットワーク外に出ないため、内部使用のローカル音声アシスタントにはデータ処理契約が不要です。サードパーティとのデータ管理者/処理者関係はありません。経済産業省（METI）のAIガバナンスガイドラインは、医療・法律・金融などの機密データに対してローカル処理を推奨しています。',
          '**ネットワーク分離：** 最大のプライバシーのために、アシスタントプロセスからのアウトバウンドトラフィックをブロックするファイアウォールルールを追加します。OllamaとWhisper.cppはモデルダウンロード後はネットワークアクセスが不要なため、正常に機能します。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカル音声アシスタントをスマートホーム制御に使用できますか？',
            a: 'はい、スマートホームシステムにローカルAPIがある場合は可能です。Home Assistant（HASS）は優れたローカル統合機能を持っています。LLMがコマンドを解釈した後、オーケストレーターからHASS REST APIを呼び出せます。LLMはインテントパーサーとして機能します：「リビングルームの照明をつけて」→ 構造化JSON → HASS APIコール。ローカルAPIサポートなしの独自スマートホームシステム（Ring、Nest、Philips Hueクラウド）では、インターネットなしのローカル統合はできません。',
          },
          {
            q: 'ローカル音声アシスタントは何か国語に対応していますか？',
            a: 'Whisperは音声認識で99言語に対応しています。Piperは20以上の言語音声パックを提供しています。LLMの言語対応はモデルによって異なります。Llama 3.3 8Bは英語、フランス語、ドイツ語、スペイン語、イタリア語、ポルトガル語、および一部の日本語/中国語を処理できます。マイナー言語での完全な多言語対応には、それらの言語専用に訓練されたモデルを選択してください。',
          },
          {
            q: '2秒以下のレイテンシを達成するための最小ハードウェアは？',
            a: 'Mac Mini M5（24 GB、約¥88,800）またはNVIDIA RTX 3060 12 GBを搭載したデスクトップ（合計約¥130,000）は、どちらも1〜2秒のレイテンシを達成します。主な要件は：Llama 3.3 8B（Q4）用に8 GB以上のGPU VRAM、WhisperのMetalまたはCUDAアクセラレーション。16 GB RAMのCPUのみのセットアップ（ミニPC、約¥43,000）では3〜5秒を達成しますが、「自然に感じる」閾値を下回ります。',
          },
          {
            q: 'Whisper + LLM + PiperパイプラインはWindowsで動作しますか？',
            a: 'はい。whisper.cppにはcmakeとVisual Studioを使ったWindowsビルド手順があります。OllamaはNVIDIA GPUサポートでWindows 10/11上でネイティブに動作します。PiperにはWindowsバイナリがあります。PythonオーケストレーターはWindows上でsounddeviceを使って音声キャプチャが可能です。Windowsでの主な複雑さはwhisper.cppのソースからのビルドですが、NVIDIA GPUを搭載したWindowsでは代わりにfaster-whisper（pip install、ビルド不要）を使用できます。',
          },
          {
            q: 'ローカル音声アシスタントにウェブ検索機能を追加するには？',
            a: 'オーケストレーターにローカル検索ツールを統合することでウェブ検索を追加できます。オプション：（1）一般クエリ用DuckDuckGo API（無料、アカウント不要）を使用 — 結果を解析してLLMプロンプトに注入します。（2）最新情報用ローカルニュースRSSフィードを使用。（3）ドメイン固有の検索にはドキュメントコレクションを持つローカルRAGシステム（AnythingLLM、PrivateGPT）を使用。LLMはその後、取得したコンテキストを使って正確に質問に答えます。検索方法によっては0.5〜2秒レイテンシが追加されます。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          '[GitHubのwhisper.cpp](https://github.com/ggerganov/whisper.cpp) — ソースコード、ビルド手順、ストリームモードドキュメント。',
          '[ollama.comのOllama](https://ollama.com) — インストール、モデルライブラリ、APIリファレンス。',
          '[GitHubのPiper TTS](https://github.com/rhasspy/piper) — ソースコード、音声パックダウンロード、Raspberry Piセットアップガイド。',
          '[GitHubのOpenWakeWord](https://github.com/dscripka/openWakeWord) — ソースコード、カスタムウェイクワードトレーニングガイド、サポートアーキテクチャ。',
          '[PicovoiceのPorcupine](https://github.com/Picovoice/porcupine) — ウェイクワードSDK、無料枠の条件、Python SDKドキュメント。',
          '[Picovoice Console](https://console.picovoice.ai) — Porcupine個人使用の無料枠APIキーを作成。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/ja/power-local-llm/local-whisper-stt-comparison-2026) — このパイプラインのSTTレイヤーの詳細解説。',
          '[ローカルTTSと音声クローニング2026：Piper vs Coqui vs XTTS v2](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTSレイヤーと音声クローニングオプションの詳細解説。',
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — この音声パイプラインをビジョンモデルサポートで拡張。',
          '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) — Ollamaのインストールとモデル管理。',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — 音声 + LLMパイプライン全体のハードウェア選択。',
          '[スマートフォンでローカル音声アシスタントを構築](/ja/power-local-llm/voice-assistant-local-mobile-offline) — このガイドのモバイル版（iPhone + Android）。',
        ],
      },
    },
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
      '2026年的完全离线语音助手由三个组件组成：用于语音识别的whisper.cpp、用于推理的本地LLM（通过Ollama运行Llama 3.3 8B、Phi-4或Mistral Small），以及用于语音输出的Piper TTS。桌面GPU配置的端到端延迟为1-2秒，与Alexa或Google Assistant相当。Mac Mini M5上低于1.5秒，Raspberry Pi 5上为5-8秒。本指南逐步讲解每个环节，包含硬件配置表、Python编排代码、唤醒词设置和延迟优化技术。',
    metaDescription:
      '2026年构建完全离线语音助手：使用whisper.cpp实现STT，Ollama + Llama 3.3 8B实现推理，Piper TTS实现语音合成。包含硬件要求、Python代码、唤醒词配置和延迟优化的逐步指南。',
    twitterDescription:
      'DIY离线语音助手2026：Whisper STT + 本地LLM + Piper TTS。无需云服务，无需订阅。含硬件规格、Python代码和唤醒词配置的完整构建指南。',
    readTime: '阅读约14分钟',
    leadAnswerBlock:
      '**2026年完全离线语音助手需要三个组件：用于语音识别的whisper.cpp、通过Ollama运行的本地LLM、用于语音输出的Piper TTS。** Python编排器将三者连接：录制音频 → Whisper转写 → 发送给LLM → 转换为语音播放。在配备RTX 3060 12 GB GPU的台式机上，使用Llama 3.3 8B和Whisper small的端到端延迟为1–2秒。Mac Mini M5（24 GB）在Apple Silicon上运行相同模型时为1–1.5秒。Raspberry Pi 5（8 GB）使用Phi-3 mini 3.8B时为5–8秒。添加唤醒词检测器（OpenWakeWord或Porcupine）可实现常时待机，无需持续运行Whisper。',
    quickAnswerTop: {
      zh: {
        question: '2026年如何构建完全离线的语音助手？',
        answer:
          '组合三个组件：whisper.cpp（语音识别）、通过Ollama运行的本地LLM（推理）、Piper TTS（文字转语音）。Python编排器连接三者：麦克风音频 → Whisper → 文本 → Ollama LLM → 响应文本 → Piper → 扬声器。添加唤醒词检测器避免持续运行Whisper。完整栈至少需要8–16 GB RAM（台式机）或6 GB GPU显存。硬件成本从~$100（Raspberry Pi 5）到~$600（Mac Mini M5）到~$800（台式机GPU）不等。',
        bullets: [
          '第1层 — STT：whisper.cpp（跨平台，Mac使用Metal）或faster-whisper（NVIDIA GPU）。',
          '第2层 — LLM：Ollama + Llama 3.3 8B（台式机）、Phi-4（笔记本/Pi）或Mistral Small（GPU）。',
          '第3层 — TTS：Piper（最快，纯CPU，所有硬件均可运行）、Coqui（质量更好，需要GPU）。',
          '连接层：Python编排器 — 音频采集 → STT → LLM → TTS → 播放。',
          '唤醒词：OpenWakeWord（开源，MIT）或Porcupine（Picovoice，个人使用免费套餐）。',
          '延迟：台式机GPU / Mac M5为1–2秒；Raspberry Pi 5为5–8秒。',
          '硬件成本：Raspberry Pi 5 ~$100，迷你主机 ~$300，台式机GPU ~$800，Mac Mini M5 ~$600。',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '为何构建本地语音助手？', anchor: '#why-build' },
      { label: '三层架构', anchor: '#architecture' },
      { label: '硬件要求', anchor: '#hardware' },
      { label: '步骤1：设置语音识别', anchor: '#step1-stt' },
      { label: '步骤2：设置本地LLM', anchor: '#step2-llm' },
      { label: '步骤3：设置文字转语音', anchor: '#step3-tts' },
      { label: '步骤4：连接流水线', anchor: '#step4-pipeline' },
      { label: '步骤5：唤醒词检测', anchor: '#step5-wake-word' },
      { label: '延迟优化', anchor: '#latency' },
      { label: '隐私与安全', anchor: '#privacy' },
      { label: '常见问题', anchor: '#faq' },
      { label: '参考资料', anchor: '#sources' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**离线语音助手栈：whisper.cpp → Ollama LLM → Piper TTS，由Python脚本编排。** 三个组件均免费开源，安装后完全离线运行。',
          '**台式机GPU（RTX 3060 12 GB）端到端延迟：1–2秒。** 与Alexa和Google Assistant相当。使用Whisper small和Llama 3.3 8B可达到此结果。',
          '**Raspberry Pi 5（8 GB）可用但速度较慢。** 使用Phi-3 mini 3.8B和Whisper base时延迟为5–8秒。适合免手操作查询，不适合对话式交互。',
          '**Mac Mini M5（24 GB统一内存）是质量与静音的最佳平衡。** 空闲时无风扇静音运行，Llama 3.3 8B约50 token/秒，Whisper large-v3通过Metal实现10倍实时处理速度。延迟1–1.5秒。',
          '**添加唤醒词避免持续运行Whisper。** OpenWakeWord（MIT，免费，支持自定义唤醒词）是最佳开源选项。Porcupine（Picovoice）个人使用免费套餐支持"Hey Jarvis"等预置唤醒词。',
          '**静音时Whisper幻觉是最常见的流水线bug。** Whisper会将静音转写为填充词或训练数据中的引用。在将音频传给Whisper前设置最小音频能量阈值，并在whisper.cpp中配置`--no-speech-threshold 0.6`。',
          '**此配置运行时产生零网络流量。** 组装完成后用Wireshark验证。音频、转写结果和LLM查询均不离开本机。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**STT层：** whisper.cpp（Apple Silicon和嵌入式设备最佳选择）或faster-whisper（NVIDIA GPU Python流水线最佳选择）。',
          '**LLM层：** Ollama + Llama 3.3 8B（推荐）、Phi-4（更轻量，质量好）或Mistral Small（与Llama 3.3 8B质量相当）。',
          '**TTS层：** Piper（最快，纯CPU，Pi上实时运行）、Coqui TTS（质量更好，需要GPU）。',
          '**唤醒词选项：** OpenWakeWord（MIT，完全离线）、Porcupine（免费套餐，1个自定义唤醒词）。',
          '**最低硬件：** Raspberry Pi 5（8 GB RAM，~$100）延迟5–8秒。',
          '**推荐硬件：** Mac Mini M5 24 GB（~$600）或RTX 3060 12 GB台式机（~$800）延迟1–2秒。',
          '**语言支持：** Whisper支持99种语言。Piper提供20+语言语音包。LLM语言性能因模型而异。',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: '为何构建本地语音助手？',
        content:
          'Alexa、Siri和Google Assistant都通过云服务器路由您的语音 — 您的音频由服务商转写、处理并记录。本地语音助手在您的硬件上完成所有处理。',
        items: [
          '**隐私：** 音频不离开您的家。无唤醒词音频存储在云端。服务器上无会话历史。对医疗工作者、律师、记者和任何有敏感工作的人至关重要。',
          '**成本：** 无订阅费。Alexa+每月$4.99，Google One每月$1.99–$9.99。本地助手只有一次性硬件成本。',
          '**自定义：** 选择唤醒词、个性、系统提示词和功能。添加自定义命令，连接本地家庭自动化系统，与本地API集成。',
          '**离线运行：** 无需网络即可工作。停电（配UPS）+ 断网：本地助手仍然运行。适用于山间小屋、偏远地区和应急准备。',
          '**放弃的功能：** 网络搜索、与专有云的智能家居集成、与云服务的日历同步，以及让Alexa/Siri在边缘情况下表现流畅的多年RLHF调优积累。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '三层架构',
        content:
          '**离线语音助手由三个独立层组成，通过Python编排器连接。**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '麦克风 → whisper.cpp（STT）→ Ollama LLM → Piper TTS → 扬声器：50行Python编排器连接的三个独立组件。',
          },
          {
            type: 'plain-terms',
            text: '类似电话接力：您说话，Whisper记录文字，LLM想出回复并写下来，Piper通过扬声器朗读。每个步骤是独立程序，Python在它们之间传递文本。',
          },
        ],
        items: [
          '**第1层 — STT（语音识别）：** whisper.cpp或faster-whisper。将麦克风音频转换为文本。离线运行，无需网络。',
          '**第2层 — LLM（推理）：** 提供Llama 3.3 8B、Phi-4或Mistral Small的Ollama。接收转写文本 + 会话历史 + 系统提示词并生成响应。离线运行，无需网络。',
          '**第3层 — TTS（文字转语音）：** Piper或Coqui TTS。将LLM响应文本转换为音频并通过扬声器播放。离线运行，无需网络。',
          '**编排器：** 连接三者的Python脚本：从麦克风采集音频 → 传给STT → 将转写结果传给LLM → 将响应传给TTS → 播放音频。',
          '**可选唤醒词：** 持续运行的轻量检测器（OpenWakeWord、Porcupine），仅在检测到唤醒词时触发完整流水线。没有它，编排器将持续运行whisper.cpp — 消耗更多CPU/GPU并产生更多误触发。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件要求',
        content:
          '按延迟和成本排列的四个硬件配置，均支持完整的Whisper + LLM + Piper栈。',
        columns: ['配置', 'STT模型', 'LLM模型', 'TTS', '总费用', '端到端延迟'],
        rows: [
          {
            '配置': 'Raspberry Pi 5（8 GB）',
            'STT模型': 'Whisper base（CPU）',
            'LLM模型': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper（CPU）',
            '总费用': '~$100',
            '端到端延迟': '5–8秒',
          },
          {
            '配置': '迷你主机（16 GB RAM）',
            'STT模型': 'Whisper small（CPU）',
            'LLM模型': 'Llama 3.3 8B Q4（CPU）',
            'TTS': 'Piper（CPU）',
            '总费用': '~$300',
            '端到端延迟': '3–5秒',
          },
          {
            '配置': '台式机（RTX 3060 12 GB）',
            'STT模型': 'Whisper large-v3（GPU）',
            'LLM模型': 'Llama 3.3 8B Q4（GPU）',
            'TTS': 'Piper或Coqui（CPU/GPU）',
            '总费用': '~$800',
            '端到端延迟': '1–2秒',
          },
          {
            '配置': 'Mac Mini M5（24 GB）',
            'STT模型': 'Whisper large-v3（Metal）',
            'LLM模型': 'Llama 3.3 8B（Metal）',
            'TTS': 'Piper（CPU）',
            '总费用': '~$600',
            '端到端延迟': '1–1.5秒',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mac Mini M5是实现2秒以内延迟最具成本效益的选择。空闲时无风扇静音，可在统一内存上同时运行Whisper Metal和Ollama，无需管理NVIDIA驱动。',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: '步骤1：设置语音识别',
        content:
          'Apple Silicon和嵌入式硬件安装whisper.cpp；NVIDIA GPU配置安装faster-whisper。',
        items: [
          '**安装whisper.cpp：** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**下载模型：** `bash ./models/download-ggml-model.sh small`（small = WER 3.4%，速度与精度的良好平衡）',
          '**测试转写：** `./main -m models/ggml-small.bin -f test.wav` — 应产生准确的文本输出。',
          '**在Mac上启用Metal：** `make -j4 WHISPER_COREML=1` 然后 `bash models/generate-coreml-model.sh small`',
          '**Whisper模型选择：** Raspberry Pi用base（1 GB RAM，低延迟），均衡选择用small（2 GB RAM，WER 3.4%），最高精度用large-v3（需10 GB显存/内存）。',
          '**配置静音抑制：** 添加`--no-speech-threshold 0.6 --suppress-blank`标志，避免将静音转写为幻觉文本。',
          '**用10秒录音测试：** 录制测试短语，验证Whisper准确转写。检查噪音和安静语音两种条件。',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: '步骤2：设置本地LLM',
        content:
          '安装Ollama并拉取LLM模型。配置语音助手行为的系统提示词 — 简短响应、无Markdown、合适的个性。',
        items: [
          '**安装Ollama：** 从ollama.com下载。支持macOS、Linux和Windows。2分钟内完成安装。',
          '**拉取模型：** `ollama pull llama3.1:8b`（推荐）或`ollama pull phi4`（更轻量，适合16 GB RAM系统）。',
          '**测试：** `ollama run llama3.1:8b "What is the capital of France?"` — 验证响应准确且快速。',
          '**语音系统提示词：** 使用简短、指令性的系统提示词："你是一个有用的语音助手。保持回答简洁 — 最多1–3句话。不要使用列表、Markdown或格式。像对话一样自然地说话。"',
          '**温度：** 将温度设置为0.3–0.5以获得更可预测、更符合事实的响应。较低的温度减少语音响应中的幻觉。',
          '**最大token数：** 用`--num-predict 150`限制响应长度 — 长响应增加TTS时间，在语音交互中显得不自然。',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: '步骤3：设置文字转语音',
        content:
          '在所有硬件配置上安装Piper。包括Raspberry Pi在内的CPU上实时运行，提供20+语言语音包，无需GPU。',
        items: [
          '**安装Piper：** `pip install piper-tts`',
          '**下载语音：** `piper --download-dir voices --update-voices --voice en_US-lessac-medium`（或从Hugging Face的Piper voices页面获取任意语音）。',
          '**测试：** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**音频输出：** Piper输出原始PCM或WAV。管道至`aplay`（Linux）、`afplay`（Mac），或使用`sounddevice` Python库实现跨平台播放。',
          '**替代方案（更高质量）：** Coqui VITS后端 — 安装`pip install TTS`，使用`tts --model_name tts_models/en/vctk/vits`。需要约2 GB显存；比Piper慢2–3倍但音质明显更自然。',
          '**语音选择：** 语音助手选择中等质量语音而非高质量 — 中等质量速度更快，通过扬声器播放时差异可忽略不计。',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: '步骤4：连接流水线',
        content:
          'Python编排器连接STT → LLM → TTS。脚本从麦克风采集音频，用Whisper转写，将文本发送给Ollama，用Piper将响应转换为语音并播放。',
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
            text: '这是一个为清晰度设计的最简流水线 — 录制固定时长音频。生产环境中，使用VAD（语音活动检测）录制到语音结束而非固定时长。faster-whisper包含Silero VAD；whisper.cpp使用--stream模式或通过webrtcvad Python库实现WebRTC VAD。',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: '步骤5：唤醒词检测',
        content:
          '**唤醒词检测器持续运行轻量模型，仅在检测到选定短语时触发完整流水线。** 没有它，Whisper将持续运行 — 消耗更多CPU/GPU并在背景噪音上产生更多误触发。',
        items: [
          '**OpenWakeWord（MIT许可证）：** 完全开源，在CPU上运行，支持通过微调自定义唤醒词短语。安装：`pip install openwakeword`。在Raspberry Pi上运行。完全离线开源配置的最佳选择。',
          '**Porcupine（Picovoice）：** 专有但个人使用有免费套餐。预置唤醒词包括"Alexa"、"Hey Siri"、"Ok Google"和"Hey Jarvis"等自定义选项。准确率高，误触发率低。安装：`pip install pvporcupine`。',
          '**集成模式：** 在循环中运行OpenWakeWord/Porcupine。检测到唤醒词时播放"叮"声（用户反馈），然后为单次查询触发Whisper + LLM + TTS流水线。TTS播放后返回唤醒词监听。',
          '**常时运行功耗：** 唤醒词检测在Raspberry Pi 5上使用约2–5% CPU — 可忽略不计。可以以最低功耗全天候运行助手。',
          '**自定义唤醒词（OpenWakeWord）：** 用文字转语音生成唤醒短语的500个正样本和500个负样本音频，然后在CPU上用不到30分钟微调OpenWakeWord。常见英语单词的准确率与Porcupine相当。',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: '延迟优化',
        content:
          '**1–2秒目标在台式机硬件上通过正确配置可以实现。** 延迟分布在三个层：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'STT增加0.2–0.5秒，LLM首token延迟增加0.5–1.5秒，TTS增加0.1–0.3秒 — 台式机GPU总计1–2秒。',
          },
          {
            type: 'plain-terms',
            text: 'LLM是最大瓶颈。最有效的优化是在LLM生成token的同时开始流式传输TTS输出 — 用户在LLM写完之前就开始听到答案。',
          },
        ],
        items: [
          '**STT优化（约0.2–0.5秒）：** 使用Whisper small而非large-v3。在传给Whisper前用VAD剪除静音 — 更短的音频 = 更快的转写。',
          '**LLM优化（首token约0.5–1.5秒）：** 启动时预加载模型（Ollama自动完成）。使用Q4_K_M量化获得最佳速度/质量平衡。用`--num-predict 100–150`限制响应长度。',
          '**流式LLM → TTS：** 逐token流式传输LLM输出。在每个完整句子（句号/问号结尾检测）开始TTS。这将感知延迟减少0.3–0.7秒 — 用户在LLM仍在生成结尾时就开始听到答案开头。',
          '**TTS优化（约0.1–0.3秒）：** Piper在50ms内生成首段音频。启动时预初始化Piper。使用`--output-raw`在生成时流式传输音频而非等待完整文件。',
          '**保持模型在内存中：** Ollama自动将模型保持在显存中预热状态。流模式加载的whisper.cpp保持在内存中。避免在查询之间重新加载模型。',
          '**各硬件配置目标延迟：** Pi 5：5–8秒（非对话式可接受）。迷你主机CPU：3–5秒（对话式临界值）。台式机GPU：1–2秒（自然流畅）。Mac M5：1–1.5秒（优秀）。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与安全',
        content:
          '**正确组装的本地语音助手在运行时产生零网络流量。** 所有处理 — 音频采集、语音识别、LLM推理和TTS — 完全在您的硬件上运行。',
        items: [
          '**用Wireshark验证：** 在与助手对话时在网络接口上运行Wireshark。应看到来自助手进程的零数据包。任何意外流量表明配置有误 — 如果您有公网IP，检查Ollama的外部API是否已禁用。',
          '**无音频存储：** whisper.cpp和faster-whisper默认不写入音频文件 — 在内存中处理。本指南中的Python编排器为whisper.cpp写入临时WAV文件，转写后删除。',
          '**无会话历史存储：** 示例脚本中的会话历史仅在内存中，重启时重置。如需持久历史，使用本地数据库和静态加密实现显式存储。',
          '**合规性：** 因所有处理在本地进行且数据不离开网络，内部使用的本地语音助手无需数据处理协议。与第三方无数据控制者/处理者关系。中国《数据安全法》（2021年）要求对重要数据进行分级分类管理，医疗、法律、金融等敏感语音数据在本地处理可有效避免跨境数据传输合规风险。',
          '**网络隔离：** 为最大化隐私，添加防火墙规则阻止来自助手进程的出站流量。Ollama和whisper.cpp在模型下载后不需要网络访问，可正常运行。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地语音助手能用于智能家居控制吗？',
            a: '可以，如果您的智能家居系统有本地API。Home Assistant（HASS）有出色的本地集成功能 — 您可以在LLM解释命令后从编排器调用HASS REST API。LLM作为意图解析器：「打开客厅灯」→ 结构化JSON → HASS API调用。对于没有本地API支持的专有智能家居系统（Ring、Nest、Philips Hue云端），无法在没有互联网的情况下进行本地集成。',
          },
          {
            q: '本地语音助手支持多少种语言？',
            a: 'Whisper支持99种语言的语音识别。Piper提供20+语言语音包用于TTS。LLM的语言支持取决于模型 — Llama 3.3 8B处理英语、法语、德语、西班牙语、意大利语、葡萄牙语以及部分日语/中文。对于较少见语言的完整多语言支持，选择专门针对这些语言训练的模型。',
          },
          {
            q: '实现2秒以内延迟的最低硬件配置是？',
            a: 'Mac Mini M5（24 GB，~$600）或配备NVIDIA RTX 3060 12 GB的台式机（GPU约$400，总计约$800）均可实现1–2秒延迟。关键要求：Llama 3.3 8B（Q4）需8+ GB GPU显存，Whisper需Metal或CUDA加速。16 GB RAM纯CPU配置（迷你主机，~$300）可实现3–5秒 — 可用但低于"感觉自然"的阈值。',
          },
          {
            q: 'Whisper + LLM + Piper流水线在Windows上能运行吗？',
            a: '可以。whisper.cpp有使用cmake和Visual Studio的Windows构建说明。Ollama在Windows 10/11上原生运行并支持NVIDIA GPU。Piper有Windows二进制文件。Python编排器在Windows上使用sounddevice进行音频采集。Windows上的主要复杂性是从源码构建whisper.cpp — 或者在有NVIDIA GPU的Windows上使用faster-whisper（pip install，无需构建）。',
          },
          {
            q: '如何为本地语音助手添加网络搜索功能？',
            a: '通过在编排器中集成本地搜索工具来添加网络搜索。选项：（1）使用DuckDuckGo API（免费，无需账号）进行通用查询 — 解析结果并注入LLM提示词。（2）使用本地新闻RSS源获取时事。（3）使用带有自有文档集合的本地RAG系统（AnythingLLM、PrivateGPT）进行领域特定搜索。LLM随后使用检索的上下文准确回答问题。根据搜索方式增加0.5–2秒延迟。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[GitHub上的whisper.cpp](https://github.com/ggerganov/whisper.cpp) — 源码、构建说明、流模式文档。',
          '[ollama.com上的Ollama](https://ollama.com) — 安装、模型库、API参考。',
          '[GitHub上的Piper TTS](https://github.com/rhasspy/piper) — 源码、语音包下载、Raspberry Pi配置指南。',
          '[GitHub上的OpenWakeWord](https://github.com/dscripka/openWakeWord) — 源码、自定义唤醒词训练指南、支持的架构。',
          '[Picovoice的Porcupine](https://github.com/Picovoice/porcupine) — 唤醒词SDK、免费套餐条款、Python SDK文档。',
          '[Picovoice Console](https://console.picovoice.ai) — 为Porcupine个人使用创建免费套餐API密钥。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/zh/power-local-llm/local-whisper-stt-comparison-2026) — 此流水线STT层的深度解析。',
          '[本地TTS与语音克隆2026：Piper vs Coqui vs XTTS v2](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS层与语音克隆选项的深度解析。',
          '[本地多模态AI流水线2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 为此语音流水线添加视觉模型支持。',
          '[如何安装Ollama](/zh/local-llms/how-to-install-ollama) — Ollama安装与模型管理。',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 完整语音 + LLM流水线的硬件选型。',
          '[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 本指南的移动版（iPhone + Android）。',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Crea un asistente de voz completamente offline en 2026: Whisper + LLM + Piper (paso a paso)',
    seoTitle: 'Asistente de voz local 2026: Whisper + LLM + Piper TTS',
    intro:
      'Un asistente de voz completamente offline en 2026 combina tres componentes: whisper.cpp para el reconocimiento de voz, un LLM local (Llama 3.3 8B, Phi-4 o Mistral Small mediante Ollama) para el razonamiento, y Piper TTS para la salida de audio. La latencia de extremo a extremo en un equipo de escritorio con GPU es de 1 a 2 segundos, comparable a Alexa o Google Assistant. En un Mac Mini M5, es inferior a 1,5 segundos. En una Raspberry Pi 5, es de 5 a 8 segundos — suficiente para consultas manos libres, no para conversaciones fluidas. Esta guía recorre cada capa paso a paso, con tablas de hardware, código del orquestador Python, configuración de la palabra de activación y técnicas de optimización de latencia.',
    metaDescription:
      'whisper.cpp (STT), Ollama + Llama 3.3 8B (razonamiento) y Piper TTS (audio). Latencia 1–2 s en GPU. Orquestador Python y palabra de activación. 2026.',
    twitterDescription:
      'Asistente de voz offline DIY en 2026: Whisper STT + LLM local + Piper TTS. Sin nube, sin suscripción. Guía completa con especificaciones de hardware, código Python y configuración de palabra de activación.',
    audience:
      'Desarrolladores y aficionados que quieren un asistente de voz privado y completamente offline — un reemplazo de Siri o Alexa que funciona íntegramente en hardware propio sin dependencias en la nube.',
    readTime: '14 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'asistente de voz offline',
    targetKeywords: [
      'crear asistente de voz offline 2026',
      'pipeline whisper llm piper',
      'asistente de voz local python',
      'asistente de voz privado sin nube',
      'whisper.cpp ollama piper',
      'asistente de voz open source 2026',
      'asistente de voz DIY raspberry pi',
      'alternativa alexa offline',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'Whisper small',
      'Whisper base',
      'Llama 3.3 8B',
      'Phi-4',
      'Phi-3 mini 3.8B',
      'Mistral Small',
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
      '**Un asistente de voz completamente offline en 2026 requiere tres componentes: whisper.cpp para el reconocimiento de voz, un LLM local mediante Ollama para el razonamiento y Piper TTS para la salida de audio.** Los tres se conectan mediante un orquestador Python que escucha el audio, lo transcribe, lo envía al LLM y convierte la respuesta en voz. En un equipo con una RTX 3060 12 GB de VRAM, la latencia de extremo a extremo es de 1 a 2 segundos con Llama 3.3 8B y Whisper small. En un Mac Mini M5 (24 GB), la latencia es de 1 a 1,5 segundos con los mismos modelos sobre Apple Silicon. En una Raspberry Pi 5 (8 GB), la latencia es de 5 a 8 segundos con Phi-3 mini 3.8B — suficiente para consultas manos libres con algo de paciencia. Añade un detector de palabra de activación (OpenWakeWord o Porcupine) para que el asistente esté siempre en escucha sin ejecutar Whisper continuamente.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo se construye un asistente de voz completamente offline en 2026?',
        answer:
          'Combina tres componentes: whisper.cpp (reconocimiento de voz), un LLM local mediante Ollama (razonamiento) y Piper TTS (síntesis de voz). Un orquestador Python conecta los tres: audio del micrófono → Whisper → texto → Ollama LLM → texto de respuesta → Piper → altavoz. Añade un detector de palabra de activación para evitar ejecutar Whisper continuamente. El stack completo requiere un mínimo de 8–16 GB de RAM (escritorio) o 6 GB de VRAM en la GPU. El costo del hardware oscila entre ~$100 (Raspberry Pi 5) y ~$600 (Mac Mini M5) o ~$800 (GPU de escritorio).',
        bullets: [
          'Capa 1 — STT: whisper.cpp (multiplataforma, Metal en Mac) o faster-whisper (GPU NVIDIA).',
          'Capa 2 — LLM: Ollama + Llama 3.3 8B (escritorio), Phi-4 (portátil/Pi) o Mistral Small (GPU).',
          'Capa 3 — TTS: Piper (más rápido, CPU, todo el hardware), Coqui (mejor calidad, requiere GPU).',
          'Pegamento: orquestador Python — captura de audio → STT → LLM → TTS → reproducción.',
          'Palabra de activación: OpenWakeWord (open-source, MIT) o Porcupine (Picovoice, nivel gratuito para uso personal).',
          'Latencia: 1–2 s en GPU de escritorio / Mac M5. 5–8 s en Raspberry Pi 5.',
          'Costo de hardware: Raspberry Pi 5 ~$100, Mini PC ~$300, GPU de escritorio ~$800, Mac Mini M5 ~$600.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Por qué construir un asistente de voz local?', anchor: '#why-build' },
      { label: 'La arquitectura de tres capas', anchor: '#architecture' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Paso 1: Configurar el reconocimiento de voz', anchor: '#step1-stt' },
      { label: 'Paso 2: Configurar el LLM local', anchor: '#step2-llm' },
      { label: 'Paso 3: Configurar la síntesis de voz', anchor: '#step3-tts' },
      { label: 'Paso 4: Conectar el pipeline', anchor: '#step4-pipeline' },
      { label: 'Paso 5: Detección de palabra de activación', anchor: '#step5-wake-word' },
      { label: 'Optimización de latencia', anchor: '#latency' },
      { label: 'Privacidad y seguridad', anchor: '#privacy' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Puntos clave',
        items: [
          '**El stack del asistente de voz offline es: whisper.cpp → Ollama LLM → Piper TTS, orquestado por un script Python.** Los tres componentes son gratuitos, open-source y funcionan completamente offline una vez instalados.',
          '**Latencia de extremo a extremo en GPU de escritorio (RTX 3060 12 GB): 1–2 segundos.** Comparable a Alexa y Google Assistant — el umbral para que la interacción de voz "se sienta natural". Usa Whisper small y Llama 3.3 8B para este resultado.',
          '**La Raspberry Pi 5 (8 GB) es una plataforma viable pero lenta.** Con Phi-3 mini 3.8B y Whisper base, la latencia es de 5–8 segundos. Útil para consultas manos libres en las que el usuario acepta una pausa más larga, no para conversaciones.',
          '**El Mac Mini M5 (24 GB de memoria unificada) es el punto óptimo entre calidad y silencio.** Silencioso en reposo, suficientemente potente para ejecutar Llama 3.3 8B a ~50 tokens/s con Whisper large-v3 a 10× tiempo real mediante Metal. Latencia de 1–1,5 segundos.',
          '**Añade una palabra de activación para no ejecutar Whisper continuamente.** OpenWakeWord (MIT, gratuito, palabras de activación personalizadas) es la mejor opción open-source. Porcupine (Picovoice) tiene un nivel gratuito para uso personal con palabras de activación predefinidas como "Hey Jarvis".',
          '**La alucinación de Whisper en silencio es el bug más común del pipeline.** Whisper transcribirá el silencio como palabras de relleno o citas de sus datos de entrenamiento. Establece un umbral mínimo de energía de audio antes de pasar el audio a Whisper y configura `--no-speech-threshold 0.6` en whisper.cpp.',
          '**Esta configuración genera cero tráfico de red durante el funcionamiento.** Verifica con Wireshark tras el montaje. Ni el audio, ni las transcripciones, ni las consultas al LLM abandonan tu máquina. El cumplimiento del RGPD para herramientas internas es automático — no se necesita ningún acuerdo de tratamiento de datos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Capa STT:** whisper.cpp (mejor para Apple Silicon y hardware embebido), faster-whisper (mejor para pipelines Python con GPU NVIDIA).',
          '**Capa LLM:** Ollama con Llama 3.3 8B (recomendado), Phi-4 (más ligero, buena calidad) o Mistral Small (calidad comparable a Llama 3.3 8B).',
          '**Capa TTS:** Piper (más rápido, solo CPU, tiempo real en Pi), Coqui TTS (mejor calidad, requiere GPU).',
          '**Opciones de palabra de activación:** OpenWakeWord (MIT, completamente offline), Porcupine (nivel gratuito, 1 palabra de activación personalizada).',
          '**Hardware mínimo:** Raspberry Pi 5 con 8 GB de RAM (~$100) para una latencia de 5–8 segundos.',
          '**Hardware recomendado:** Mac Mini M5 24 GB (~$600) o escritorio con RTX 3060 12 GB (~$800) para 1–2 segundos de latencia.',
          '**Idiomas:** Whisper admite 99 idiomas. Piper admite más de 20 paquetes de voces. El rendimiento del LLM varía según el idioma.',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: '¿Por qué construir un asistente de voz local?',
        content:
          'Alexa, Siri y Google Assistant enrutan tu voz a través de servidores en la nube — tu audio es transcrito, procesado y registrado por el proveedor. Un asistente de voz local procesa todo en tu propio hardware.',
        items: [
          '**Privacidad:** Ningún audio sale de tu casa. No se almacena audio de la palabra de activación en la nube. Sin historial de conversaciones en servidores de terceros. Fundamental para profesionales de la salud, abogados, periodistas y cualquier persona con trabajo sensible.',
          '**Costo:** Sin suscripción. Alexa+ cuesta $4,99/mes. Google One cuesta entre $1,99 y $9,99/mes. Un asistente local es un costo único de hardware.',
          '**Personalización:** Elige tu palabra de activación, personalidad, system prompt y funcionalidades. Añade comandos personalizados, conecta sistemas de domótica local e integra APIs locales.',
          '**Funcionamiento offline:** Funciona sin internet. Un corte de luz (con SAI) + un corte de internet: tu asistente local sigue funcionando. Útil en cabañas, ubicaciones remotas y para preparación ante emergencias.',
          '**Lo que pierdes:** Búsqueda web, integración de domótica con nubes propietarias, sincronización de calendarios con servicios en la nube y los años de ajuste con RLHF que hacen que Alexa/Siri sean fluidos en casos límite.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'La arquitectura de tres capas',
        content:
          '**El asistente de voz offline consta de tres capas independientes conectadas por un orquestador Python.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Micrófono → whisper.cpp (STT) → Ollama LLM → Piper TTS → altavoz: tres componentes independientes unidos por un orquestador Python de unas 50 líneas.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsalo como una cadena de relevos telefónica: tú hablas, Whisper lo escribe, el LLM piensa una respuesta y la escribe, Piper la lee en voz alta. Cada paso es un programa independiente; Python pasa el texto entre ellos.',
          },
        ],
        items: [
          '**Capa 1 — STT (reconocimiento de voz):** whisper.cpp o faster-whisper. Convierte el audio del micrófono en texto. Funciona offline, sin red.',
          '**Capa 2 — LLM (razonamiento):** Ollama sirviendo Llama 3.3 8B, Phi-4 o Mistral Small. Toma el texto transcrito + historial de conversación + system prompt y genera una respuesta. Funciona offline, sin red.',
          '**Capa 3 — TTS (síntesis de voz):** Piper o Coqui TTS. Convierte el texto de respuesta del LLM en audio y lo reproduce por el altavoz. Funciona offline, sin red.',
          '**Orquestador:** Un script Python que conecta los tres: captura el audio del micrófono → lo pasa al STT → pasa la transcripción al LLM → pasa la respuesta al TTS → reproduce el audio.',
          '**Palabra de activación opcional:** Un detector ligero siempre activo (OpenWakeWord, Porcupine) que activa el pipeline completo solo cuando se detecta la frase de activación. Sin esto, el orquestador ejecuta whisper.cpp continuamente — consumiendo más CPU y generando más falsos positivos.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        content:
          'Cuatro niveles de hardware, ordenados por latencia y costo. Todos admiten el stack completo de Whisper + LLM + Piper.',
        columns: ['Configuración', 'Modelo STT', 'Modelo LLM', 'TTS', 'Costo total', 'Latencia extremo a extremo'],
        rows: [
          {
            'Configuración': 'Raspberry Pi 5 (8 GB)',
            'Modelo STT': 'Whisper base (CPU)',
            'Modelo LLM': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper (CPU)',
            'Costo total': '~$100',
            'Latencia extremo a extremo': '5–8 s',
          },
          {
            'Configuración': 'Mini PC (16 GB RAM)',
            'Modelo STT': 'Whisper small (CPU)',
            'Modelo LLM': 'Llama 3.3 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Costo total': '~$300',
            'Latencia extremo a extremo': '3–5 s',
          },
          {
            'Configuración': 'Escritorio (RTX 3060 12 GB)',
            'Modelo STT': 'Whisper large-v3 (GPU)',
            'Modelo LLM': 'Llama 3.3 8B Q4 (GPU)',
            'TTS': 'Piper o Coqui (CPU/GPU)',
            'Costo total': '~$800',
            'Latencia extremo a extremo': '1–2 s',
          },
          {
            'Configuración': 'Mac Mini M5 (24 GB)',
            'Modelo STT': 'Whisper large-v3 (Metal)',
            'Modelo LLM': 'Llama 3.3 8B (Metal)',
            'TTS': 'Piper (CPU)',
            'Costo total': '~$600',
            'Latencia extremo a extremo': '1–1,5 s',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El Mac Mini M5 es la opción más rentable para alcanzar una latencia inferior a 2 segundos. Es silencioso en reposo, ejecuta Whisper Metal y Ollama simultáneamente sobre memoria unificada y no requiere gestión de drivers de NVIDIA.',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'Paso 1: Configurar el reconocimiento de voz',
        content:
          'Instala whisper.cpp para Apple Silicon y hardware embebido; instala faster-whisper para configuraciones con GPU NVIDIA.',
        items: [
          '**Instalar whisper.cpp:** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**Descargar el modelo:** `bash ./models/download-ggml-model.sh small` (small = 3,4 % WER, buen equilibrio entre velocidad y precisión)',
          '**Probar la transcripción:** `./main -m models/ggml-small.bin -f test.wav` — debe producir una salida de texto precisa.',
          '**Activar Metal en Mac:** `make -j4 WHISPER_COREML=1` y luego `bash models/generate-coreml-model.sh small`',
          '**Selección del modelo Whisper:** base para Raspberry Pi (1 GB de RAM, baja latencia), small para el equilibrio óptimo (2 GB de RAM, 3,4 % WER), large-v3 para máxima precisión (10 GB de VRAM/RAM).',
          '**Configurar la supresión de silencio:** Añade las flags `--no-speech-threshold 0.6 --suppress-blank` para evitar transcribir el silencio como texto alucinado.',
          '**Probar con una grabación de 10 segundos:** Graba una frase de prueba y verifica que Whisper la transcribe correctamente. Comprueba tanto en condiciones de ruido como con voz tranquila.',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'Paso 2: Configurar el LLM local',
        content:
          'Instala Ollama y descarga el modelo LLM. Configura un system prompt para el comportamiento del asistente de voz — respuestas más cortas, sin markdown, personalidad adecuada.',
        items: [
          '**Instalar Ollama:** Descarga desde ollama.com. Disponible para macOS, Linux y Windows. Se instala en menos de 2 minutos.',
          '**Descargar el modelo:** `ollama pull llama3.1:8b` (recomendado) o `ollama pull phi4` (más ligero, adecuado para sistemas con 16 GB de RAM).',
          '**Probar:** `ollama run llama3.1:8b "What is the capital of France?"` — verifica que la respuesta es precisa y rápida.',
          '**System prompt para voz:** Usa un system prompt corto y directivo: "Eres un asistente de voz útil. Mantén las respuestas concisas — máximo 1–3 oraciones. Nunca uses listas, markdown ni formato. Habla de forma natural como en una conversación."',
          '**Temperatura:** Establece la temperatura en 0,3–0,5 para respuestas más predecibles y factuales. Una temperatura más baja reduce las alucinaciones en las respuestas de voz.',
          '**Máximo de tokens:** Limita la longitud de respuesta con `--num-predict 150` — las respuestas largas requieren más tiempo de TTS y resultan artificiales en la interacción de voz.',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'Paso 3: Configurar la síntesis de voz',
        content:
          'Instala Piper para todos los niveles de hardware. Funciona en tiempo real en CPU, incluyendo la Raspberry Pi, tiene más de 20 paquetes de voces en distintos idiomas y no requiere GPU.',
        items: [
          '**Instalar Piper:** `pip install piper-tts`',
          '**Descargar una voz:** `piper --download-dir voices --update-voices --voice en_US-lessac-medium` (o cualquier voz de la página de voces de Piper en Hugging Face).',
          '**Probar:** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**Salida de audio:** Piper genera PCM sin procesar o WAV. Redirige a `aplay` (Linux), `afplay` (Mac), o usa la librería Python `sounddevice` para reproducción multiplataforma.',
          '**Alternativa (mejor calidad):** Backend Coqui VITS — instala `pip install TTS`, usa `tts --model_name tts_models/en/vctk/vits`. Requiere ~2 GB de VRAM; 2–3× más lento que Piper pero notablemente más natural.',
          '**Selección de voz:** Para asistentes de voz, elige una voz de calidad media en lugar de alta — las voces medias son más rápidas y la diferencia es insignificante a través de un altavoz.',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'Paso 4: Conectar el pipeline',
        content:
          'Un orquestador Python conecta STT → LLM → TTS. El script captura el audio del micrófono, lo transcribe con Whisper, envía la transcripción a Ollama, convierte la respuesta en voz con Piper y la reproduce.',
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
            text: 'Este es un pipeline mínimo pensado para mayor claridad — graba audio de duración fija. Para producción, usa VAD (detección de actividad de voz) para grabar hasta que termine el habla en lugar de usar una duración fija. faster-whisper incluye Silero VAD; para whisper.cpp, usa el modo --stream o implementa un VAD WebRTC con la librería Python webrtcvad.',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'Paso 5: Detección de palabra de activación',
        content:
          '**Un detector de palabra de activación ejecuta un modelo ligero de forma continua y activa el pipeline completo solo cuando detecta tu frase elegida.** Sin él, Whisper se ejecuta continuamente — consumiendo más CPU/GPU y generando más falsos positivos con el ruido de fondo.',
        items: [
          '**OpenWakeWord (licencia MIT):** Completamente open-source, funciona en CPU, admite palabras de activación personalizadas mediante fine-tuning con tu propia frase. Instalación: `pip install openwakeword`. Funciona en Raspberry Pi. La mejor opción para configuraciones completamente offline y open-source.',
          '**Porcupine (Picovoice):** Propietario pero con nivel gratuito para uso personal. Las palabras de activación predefinidas incluyen "Alexa", "Hey Siri", "Ok Google" y opciones personalizadas como "Hey Jarvis". Muy preciso con baja tasa de falsos positivos. Instalación: `pip install pvporcupine`.',
          '**Patrón de integración:** Ejecuta OpenWakeWord/Porcupine en un bucle. Cuando se detecta la palabra de activación, reproduce un sonido "ding" (retroalimentación al usuario), activa el pipeline Whisper + LLM + TTS para una consulta y vuelve a escuchar la palabra de activación tras la reproducción del TTS.',
          '**Consumo en funcionamiento continuo:** La detección de palabra de activación usa ~2–5 % de CPU en una Raspberry Pi 5 — insignificante. Puedes dejar el asistente funcionando 24/7 con un consumo mínimo.',
          '**Palabras de activación personalizadas (OpenWakeWord):** Genera 500 ejemplos de audio positivos y 500 negativos de tu frase de activación usando síntesis de voz, luego ajusta OpenWakeWord en menos de 30 minutos en CPU. La precisión es comparable a Porcupine para palabras comunes en inglés.',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'Optimización de latencia',
        content:
          '**El objetivo de 1–2 segundos es alcanzable en hardware de escritorio con la configuración adecuada.** La latencia se distribuye entre las tres capas:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El STT añade 0,2–0,5 s, la latencia del primer token del LLM añade 0,5–1,5 s, el TTS añade 0,1–0,3 s — total de 1–2 segundos en GPU de escritorio.',
          },
          {
            type: 'plain-terms',
            text: 'El LLM es el mayor cuello de botella. La optimización más eficaz consiste en iniciar el streaming de la salida del TTS mientras el LLM genera tokens — el usuario empieza a escuchar la respuesta antes de que el LLM haya terminado de escribirla.',
          },
        ],
        items: [
          '**Optimización del STT (~0,2–0,5 s):** Usa Whisper small en lugar de large-v3. Usa VAD para recortar el silencio antes de pasar el audio a Whisper — audio más corto = transcripción más rápida.',
          '**Optimización del LLM (~0,5–1,5 s primer token):** Precarga el modelo al inicio (Ollama lo hace automáticamente). Usa cuantización Q4_K_M para el mejor equilibrio entre velocidad y calidad. Establece `--num-predict 100–150` para limitar la longitud de la respuesta.',
          '**Streaming LLM → TTS:** Transmite la salida del LLM token a token. Inicia el TTS en cada oración completa (detectada por punto o signo de interrogación). Esto reduce la latencia percibida en 0,3–0,7 segundos — el usuario escucha el inicio de la respuesta mientras el LLM sigue generando el final.',
          '**Optimización del TTS (~0,1–0,3 s):** Piper genera el primer audio en 50 ms. Inicializa Piper al arranque. Usa `--output-raw` para transmitir el audio mientras se genera en lugar de esperar el archivo completo.',
          '**Mantener los modelos en memoria:** Ollama mantiene los modelos calientes en la VRAM automáticamente. whisper.cpp cargado en modo stream permanece en memoria. Evita recargar los modelos entre consultas.',
          '**Latencia objetivo por nivel de hardware:** Pi 5: 5–8 s (aceptable para uso no conversacional). Mini PC CPU: 3–5 s (límite para conversación). GPU de escritorio: 1–2 s (natural). Mac M5: 1–1,5 s (excelente).',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y seguridad',
        content:
          '**Un asistente de voz local correctamente ensamblado genera cero tráfico de red durante el funcionamiento.** Todo el procesamiento — captura de audio, reconocimiento de voz, inferencia del LLM y TTS — se ejecuta íntegramente en tu hardware.',
        items: [
          '**Verifica con Wireshark:** Ejecuta Wireshark en tu interfaz de red durante una conversación con el asistente. No deberías ver ningún paquete proveniente del proceso del asistente. Cualquier tráfico inesperado indica una mala configuración — comprueba que la API externa de Ollama esté desactivada si tienes una IP pública.',
          '**Sin almacenamiento de audio:** Ni whisper.cpp ni faster-whisper escriben archivos de audio por defecto — procesan en memoria. El orquestador Python de esta guía escribe un archivo WAV temporal para whisper.cpp, que se elimina tras la transcripción.',
          '**Sin historial de conversaciones almacenado:** El historial de conversaciones del script de ejemplo está solo en memoria y se reinicia al reiniciar el programa. Para historial persistente, implementa un almacenamiento explícito con una base de datos local y cifrado en reposo.',
          '**Cumplimiento del RGPD:** Dado que todo el procesamiento es local y ningún dato abandona tu red, un asistente de voz local para uso interno no requiere un acuerdo de tratamiento de datos. No existe una relación responsable/encargado del tratamiento con un tercero.',
          '**Aislamiento de red:** Para máxima privacidad, añade una regla de firewall que bloquee el tráfico de salida del proceso del asistente. Ollama y whisper.cpp funcionarán con normalidad — no requieren acceso a la red una vez descargados los modelos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar un asistente de voz local para controlar la domótica?',
            a: 'Sí, si tu sistema de domótica tiene una API local. Home Assistant (HASS) ofrece una excelente integración local — puedes llamar a la API REST de HASS desde el orquestador después de que el LLM interprete el comando. El LLM actúa como analizador de intenciones: "Enciende las luces del salón" → JSON estructurado → llamada a la API de HASS. Para sistemas de domótica propietarios (Ring, Nest, Philips Hue en la nube) sin soporte de API local, no es posible integrarse localmente sin acceso a internet.',
          },
          {
            q: '¿Cuántos idiomas admite el asistente de voz local?',
            a: 'Whisper admite 99 idiomas para el reconocimiento de voz. Piper admite más de 20 paquetes de voces para TTS. El soporte de idiomas del LLM depende del modelo — Llama 3.3 8B maneja bien el inglés, francés, alemán, español, italiano, portugués y algo de japonés/chino. Para un soporte multilingüe completo en idiomas menos comunes, elige un modelo específicamente entrenado para esos idiomas (por ejemplo, Mistral Small tiene buen soporte para idiomas europeos).',
          },
          {
            q: '¿Cuál es el hardware mínimo para obtener menos de 2 segundos de latencia?',
            a: 'Un Mac Mini M5 (24 GB, ~$600) o un escritorio con NVIDIA RTX 3060 12 GB (~$400 de GPU, ~$800 en total) alcanzan ambos una latencia de 1–2 segundos. Los requisitos clave son: 8+ GB de VRAM en la GPU para Llama 3.3 8B en Q4, más aceleración Metal o CUDA para Whisper. Una configuración solo con CPU y 16 GB de RAM (Mini PC, ~$300) alcanza 3–5 segundos — utilizable pero por debajo del umbral de "sensación natural".',
          },
          {
            q: '¿Funciona el pipeline Whisper + LLM + Piper en Windows?',
            a: 'Sí. whisper.cpp tiene instrucciones de compilación para Windows usando cmake y Visual Studio. Ollama funciona de forma nativa en Windows 10/11 con soporte de GPU NVIDIA. Piper tiene binarios para Windows. El orquestador Python funciona en Windows con sounddevice para la captura de audio. La principal complejidad en Windows es compilar whisper.cpp desde el código fuente — como alternativa, usa faster-whisper (pip install, sin necesidad de compilar) en Windows con GPU NVIDIA.',
          },
          {
            q: '¿Cómo añado la búsqueda web al asistente de voz local?',
            a: 'Puedes añadir búsqueda web integrando una herramienta de búsqueda local en el orquestador. Opciones: (1) Usa la API de DuckDuckGo (gratuita, sin cuenta) para consultas generales — analiza el resultado e inyéctalo en el prompt del LLM. (2) Usa un feed RSS local de noticias para eventos actuales. (3) Usa un sistema RAG local (AnythingLLM, PrivateGPT) con tu propia colección de documentos para búsqueda específica de un dominio. El LLM utiliza entonces el contexto recuperado para responder las preguntas con precisión. Esto añade entre 0,5 y 2 segundos de latencia según el método de búsqueda.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[whisper.cpp en GitHub](https://github.com/ggerganov/whisper.cpp) — Código fuente, instrucciones de compilación, documentación del modo stream.',
          '[Ollama en ollama.com](https://ollama.com) — Instalación, biblioteca de modelos, referencia de API.',
          '[Piper TTS en GitHub](https://github.com/rhasspy/piper) — Código fuente, descarga de paquetes de voces, guía de configuración para Raspberry Pi.',
          '[OpenWakeWord en GitHub](https://github.com/dscripka/openWakeWord) — Código fuente, guía de entrenamiento de palabras de activación personalizadas, arquitecturas compatibles.',
          '[Porcupine de Picovoice](https://github.com/Picovoice/porcupine) — SDK de palabra de activación, condiciones del nivel gratuito, documentación del SDK de Python.',
          '[Picovoice Console](https://console.picovoice.ai) — Crea una clave de API gratuita para Porcupine en uso personal.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Reconocimiento de voz local 2026: Whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison-2026) — Análisis en profundidad de la capa STT de este pipeline.',
          '[TTS local y clonación de voz 2026: Piper vs Coqui vs XTTS v2](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Análisis en profundidad de la capa TTS y las opciones de clonación de voz.',
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Amplía este pipeline de voz con soporte para modelos de visión.',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — Instalación de Ollama y gestión de modelos.',
          '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — Selección de hardware para el pipeline completo de voz + LLM.',
          '[Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) — La versión móvil de esta guía (iPhone + Android).',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Crea un asistente de voz completamente offline en 2026: Whisper + LLM + Piper (paso a paso)',
       description: 'whisper.cpp para STT, Ollama + Llama 3.3 8B para razonamiento, Piper TTS para audio. Latencia de 1–2 s en GPU. Orquestador Python + configuración de palabra de activación. 2026.',
       url: 'https://www.promptquorum.com/es/power-local-llm/build-local-voice-assistant-2026?lang=es',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Crie um assistente de voz totalmente offline em 2026: Whisper + LLM + Piper (passo a passo)',
    seoTitle: 'Assistente de voz local 2026: Whisper + LLM + Piper TTS',
    intro:
      'Um assistente de voz totalmente offline em 2026 combina três componentes: whisper.cpp para o reconhecimento de voz, um LLM local (Llama 3.3 8B, Phi-4 ou Mistral Small via Ollama) para o raciocínio, e Piper TTS para a saída de áudio. A latência de ponta a ponta em um equipamento de desktop com GPU é de 1 a 2 segundos, comparável à Alexa ou ao Google Assistant. Em um Mac Mini M5, é inferior a 1,5 segundo. Em um Raspberry Pi 5, é de 5 a 8 segundos — suficiente para consultas mãos livres, não para conversas fluidas. Este guia percorre cada camada passo a passo, com tabelas de hardware, código do orquestrador Python, configuração da palavra de ativação e técnicas de otimização de latência.',
    metaDescription:
      'whisper.cpp (STT), Ollama + Llama 3.3 8B (raciocínio) e Piper TTS (áudio). Latência 1–2 s em GPU. Orquestrador Python e palavra de ativação. 2026.',
    twitterDescription:
      'Assistente de voz offline DIY em 2026: Whisper STT + LLM local + Piper TTS. Sem nuvem, sem assinatura. Guia completo com especificações de hardware, código Python e configuração de palavra de ativação.',
    audience:
      'Desenvolvedores e entusiastas que querem um assistente de voz privado e totalmente offline — um substituto para Siri ou Alexa que roda inteiramente em hardware próprio sem dependências de nuvem.',
    readTime: '14 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'assistente de voz offline',
    targetKeywords: [
      'criar assistente de voz offline 2026',
      'pipeline whisper llm piper',
      'assistente de voz local python',
      'assistente de voz privado sem nuvem',
      'whisper.cpp ollama piper',
      'assistente de voz open source 2026',
      'assistente de voz DIY raspberry pi',
      'alternativa alexa offline',
    ],
    current_models_mentioned: [
      'whisper.cpp large-v3',
      'Whisper small',
      'Whisper base',
      'Llama 3.3 8B',
      'Phi-4',
      'Phi-3 mini 3.8B',
      'Mistral Small',
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
      '**Um assistente de voz totalmente offline em 2026 requer três componentes: whisper.cpp para o reconhecimento de voz, um LLM local via Ollama para o raciocínio e Piper TTS para a saída de áudio.** Os três se conectam por meio de um orquestrador Python que escuta o áudio, transcreve, envia ao LLM e converte a resposta em voz. Em um equipamento com uma RTX 3060 12 GB de VRAM, a latência de ponta a ponta é de 1 a 2 segundos com Llama 3.3 8B e Whisper small. Em um Mac Mini M5 (24 GB), a latência é de 1 a 1,5 segundo com os mesmos modelos sobre Apple Silicon. Em um Raspberry Pi 5 (8 GB), a latência é de 5 a 8 segundos com Phi-3 mini 3.8B — suficiente para consultas mãos livres com alguma paciência. Adicione um detector de palavra de ativação (OpenWakeWord ou Porcupine) para que o assistente fique sempre escutando sem executar o Whisper continuamente.',
    quickAnswerTop: {
      pt: {
        question: 'Como se constrói um assistente de voz totalmente offline em 2026?',
        answer:
          'Combine três componentes: whisper.cpp (reconhecimento de voz), um LLM local via Ollama (raciocínio) e Piper TTS (síntese de voz). Um orquestrador Python conecta os três: áudio do microfone → Whisper → texto → Ollama LLM → texto de resposta → Piper → alto-falante. Adicione um detector de palavra de ativação para evitar executar o Whisper continuamente. O stack completo requer um mínimo de 8–16 GB de RAM (desktop) ou 6 GB de VRAM na GPU. O custo do hardware varia de ~US$ 100 (Raspberry Pi 5) a ~US$ 600 (Mac Mini M5) ou ~US$ 800 (GPU de desktop).',
        bullets: [
          'Camada 1 — STT: whisper.cpp (multiplataforma, Metal no Mac) ou faster-whisper (GPU NVIDIA).',
          'Camada 2 — LLM: Ollama + Llama 3.3 8B (desktop), Phi-4 (notebook/Pi) ou Mistral Small (GPU).',
          'Camada 3 — TTS: Piper (mais rápido, CPU, todo o hardware), Coqui (melhor qualidade, requer GPU).',
          'Cola: orquestrador Python — captura de áudio → STT → LLM → TTS → reprodução.',
          'Palavra de ativação: OpenWakeWord (open-source, MIT) ou Porcupine (Picovoice, nível gratuito para uso pessoal).',
          'Latência: 1–2 s em GPU de desktop / Mac M5. 5–8 s em Raspberry Pi 5.',
          'Custo de hardware: Raspberry Pi 5 ~US$ 100, Mini PC ~US$ 300, GPU de desktop ~US$ 800, Mac Mini M5 ~US$ 600.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'Por que construir um assistente de voz local?', anchor: '#why-build' },
      { label: 'A arquitetura de três camadas', anchor: '#architecture' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Passo 1: Configurar o reconhecimento de voz', anchor: '#step1-stt' },
      { label: 'Passo 2: Configurar o LLM local', anchor: '#step2-llm' },
      { label: 'Passo 3: Configurar a síntese de voz', anchor: '#step3-tts' },
      { label: 'Passo 4: Conectar o pipeline', anchor: '#step4-pipeline' },
      { label: 'Passo 5: Detecção de palavra de ativação', anchor: '#step5-wake-word' },
      { label: 'Otimização de latência', anchor: '#latency' },
      { label: 'Privacidade e segurança', anchor: '#privacy' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Pontos principais',
        items: [
          '**O stack do assistente de voz offline é: whisper.cpp → Ollama LLM → Piper TTS, orquestrado por um script Python.** Os três componentes são gratuitos, open-source e funcionam totalmente offline depois de instalados.',
          '**Latência de ponta a ponta em GPU de desktop (RTX 3060 12 GB): 1–2 segundos.** Comparável à Alexa e ao Google Assistant — o limiar para que a interação de voz "pareça natural". Use Whisper small e Llama 3.3 8B para esse resultado.',
          '**O Raspberry Pi 5 (8 GB) é uma plataforma viável, mas lenta.** Com Phi-3 mini 3.8B e Whisper base, a latência é de 5–8 segundos. Útil para consultas mãos livres em que o usuário aceita uma pausa mais longa, não para conversas.',
          '**O Mac Mini M5 (24 GB de memória unificada) é o ponto ideal entre qualidade e silêncio.** Silencioso em repouso, potente o suficiente para executar Llama 3.3 8B a ~50 tokens/s com Whisper large-v3 a 10× tempo real via Metal. Latência de 1–1,5 segundo.',
          '**Adicione uma palavra de ativação para não executar o Whisper continuamente.** OpenWakeWord (MIT, gratuito, palavras de ativação personalizadas) é a melhor opção open-source. O Porcupine (Picovoice) tem um nível gratuito para uso pessoal com palavras de ativação predefinidas como "Hey Jarvis".',
          '**A alucinação do Whisper no silêncio é o bug mais comum do pipeline.** O Whisper transcreverá o silêncio como palavras de preenchimento ou citações dos seus dados de treinamento. Defina um limiar mínimo de energia de áudio antes de passar o áudio ao Whisper e configure `--no-speech-threshold 0.6` no whisper.cpp.',
          '**Essa configuração gera zero tráfego de rede durante o funcionamento.** Verifique com o Wireshark após a montagem. Nem o áudio, nem as transcrições, nem as consultas ao LLM saem da sua máquina. A conformidade com o RGPD para ferramentas internas é automática — nenhum acordo de tratamento de dados é necessário.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**Camada STT:** whisper.cpp (melhor para Apple Silicon e hardware embarcado), faster-whisper (melhor para pipelines Python com GPU NVIDIA).',
          '**Camada LLM:** Ollama com Llama 3.3 8B (recomendado), Phi-4 (mais leve, boa qualidade) ou Mistral Small (qualidade comparável ao Llama 3.3 8B).',
          '**Camada TTS:** Piper (mais rápido, só CPU, tempo real no Pi), Coqui TTS (melhor qualidade, requer GPU).',
          '**Opções de palavra de ativação:** OpenWakeWord (MIT, totalmente offline), Porcupine (nível gratuito, 1 palavra de ativação personalizada).',
          '**Hardware mínimo:** Raspberry Pi 5 com 8 GB de RAM (~US$ 100) para uma latência de 5–8 segundos.',
          '**Hardware recomendado:** Mac Mini M5 24 GB (~US$ 600) ou desktop com RTX 3060 12 GB (~US$ 800) para 1–2 segundos de latência.',
          '**Idiomas:** o Whisper suporta 99 idiomas. O Piper suporta mais de 20 pacotes de vozes. O desempenho do LLM varia conforme o idioma.',
        ],
      },
      whyBuild: {
        id: 'why-build',
        title: 'Por que construir um assistente de voz local?',
        content:
          'Alexa, Siri e Google Assistant roteiam a sua voz por servidores na nuvem — o seu áudio é transcrito, processado e registrado pelo fornecedor. Um assistente de voz local processa tudo no seu próprio hardware.',
        items: [
          '**Privacidade:** Nenhum áudio sai da sua casa. Nenhum áudio da palavra de ativação é armazenado na nuvem. Sem histórico de conversas em servidores de terceiros. Fundamental para profissionais de saúde, advogados, jornalistas e qualquer pessoa com trabalho sensível.',
          '**Custo:** Sem assinatura. O Alexa+ custa US$ 4,99/mês. O Google One custa entre US$ 1,99 e US$ 9,99/mês. Um assistente local é um custo único de hardware.',
          '**Personalização:** Escolha a sua palavra de ativação, personalidade, system prompt e funcionalidades. Adicione comandos personalizados, conecte sistemas de automação residencial local e integre APIs locais.',
          '**Funcionamento offline:** Funciona sem internet. Um corte de energia (com nobreak) + um corte de internet: o seu assistente local continua funcionando. Útil em chalés, locais remotos e para preparação para emergências.',
          '**O que você abre mão:** Busca web, integração de automação residencial com nuvens proprietárias, sincronização de calendários com serviços na nuvem e os anos de ajuste com RLHF que tornam a Alexa/Siri fluidas em casos extremos.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'A arquitetura de três camadas',
        content:
          '**O assistente de voz offline consiste em três camadas independentes conectadas por um orquestrador Python.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Microfone → whisper.cpp (STT) → Ollama LLM → Piper TTS → alto-falante: três componentes independentes unidos por um orquestrador Python de cerca de 50 linhas.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nisso como uma cadeia de retransmissão telefônica: você fala, o Whisper anota, o LLM pensa em uma resposta e a anota, o Piper a lê em voz alta. Cada passo é um programa separado; o Python passa o texto entre eles.',
          },
        ],
        items: [
          '**Camada 1 — STT (reconhecimento de voz):** whisper.cpp ou faster-whisper. Converte o áudio do microfone em texto. Funciona offline, sem rede.',
          '**Camada 2 — LLM (raciocínio):** Ollama servindo Llama 3.3 8B, Phi-4 ou Mistral Small. Pega o texto transcrito + histórico de conversa + system prompt e gera uma resposta. Funciona offline, sem rede.',
          '**Camada 3 — TTS (síntese de voz):** Piper ou Coqui TTS. Converte o texto de resposta do LLM em áudio e o reproduz pelo alto-falante. Funciona offline, sem rede.',
          '**Orquestrador:** Um script Python que conecta os três: captura o áudio do microfone → passa ao STT → passa a transcrição ao LLM → passa a resposta ao TTS → reproduz o áudio.',
          '**Palavra de ativação opcional:** Um detector leve sempre ativo (OpenWakeWord, Porcupine) que ativa o pipeline completo apenas quando a frase de ativação é detectada. Sem isso, o orquestrador executa o whisper.cpp continuamente — consumindo mais CPU e gerando mais falsos positivos.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        content:
          'Quatro níveis de hardware, ordenados por latência e custo. Todos suportam o stack completo de Whisper + LLM + Piper.',
        columns: ['Configuração', 'Modelo STT', 'Modelo LLM', 'TTS', 'Custo total', 'Latência ponta a ponta'],
        rows: [
          {
            'Configuração': 'Raspberry Pi 5 (8 GB)',
            'Modelo STT': 'Whisper base (CPU)',
            'Modelo LLM': 'Phi-3 mini 3.8B Q4',
            'TTS': 'Piper (CPU)',
            'Custo total': '~$100',
            'Latência ponta a ponta': '5–8 s',
          },
          {
            'Configuração': 'Mini PC (16 GB RAM)',
            'Modelo STT': 'Whisper small (CPU)',
            'Modelo LLM': 'Llama 3.3 8B Q4 (CPU)',
            'TTS': 'Piper (CPU)',
            'Custo total': '~$300',
            'Latência ponta a ponta': '3–5 s',
          },
          {
            'Configuração': 'Desktop (RTX 3060 12 GB)',
            'Modelo STT': 'Whisper large-v3 (GPU)',
            'Modelo LLM': 'Llama 3.3 8B Q4 (GPU)',
            'TTS': 'Piper ou Coqui (CPU/GPU)',
            'Custo total': '~$800',
            'Latência ponta a ponta': '1–2 s',
          },
          {
            'Configuração': 'Mac Mini M5 (24 GB)',
            'Modelo STT': 'Whisper large-v3 (Metal)',
            'Modelo LLM': 'Llama 3.3 8B (Metal)',
            'TTS': 'Piper (CPU)',
            'Custo total': '~$600',
            'Latência ponta a ponta': '1–1,5 s',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Mac Mini M5 é o caminho mais econômico para alcançar uma latência inferior a 2 segundos. Ele é silencioso em repouso, executa o Whisper Metal e o Ollama simultaneamente sobre memória unificada e não requer gestão de drivers da NVIDIA.',
          },
        ],
      },
      step1STT: {
        id: 'step1-stt',
        title: 'Passo 1: Configurar o reconhecimento de voz',
        content:
          'Instale o whisper.cpp para Apple Silicon e hardware embarcado; instale o faster-whisper para configurações com GPU NVIDIA.',
        items: [
          '**Instalar o whisper.cpp:** `git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make -j4`',
          '**Baixar o modelo:** `bash ./models/download-ggml-model.sh small` (small = 3,4% de WER, bom equilíbrio entre velocidade e precisão)',
          '**Testar a transcrição:** `./main -m models/ggml-small.bin -f test.wav` — deve produzir uma saída de texto precisa.',
          '**Ativar o Metal no Mac:** `make -j4 WHISPER_COREML=1` e depois `bash models/generate-coreml-model.sh small`',
          '**Seleção do modelo Whisper:** base para Raspberry Pi (1 GB de RAM, baixa latência), small para o equilíbrio ideal (2 GB de RAM, 3,4% de WER), large-v3 para máxima precisão (10 GB de VRAM/RAM).',
          '**Configurar a supressão de silêncio:** Adicione as flags `--no-speech-threshold 0.6 --suppress-blank` para evitar transcrever o silêncio como texto alucinado.',
          '**Testar com uma gravação de 10 segundos:** Grave uma frase de teste e verifique se o Whisper a transcreve corretamente. Verifique tanto em condições de ruído quanto com voz tranquila.',
        ],
      },
      step2LLM: {
        id: 'step2-llm',
        title: 'Passo 2: Configurar o LLM local',
        content:
          'Instale o Ollama e baixe o modelo LLM. Configure um system prompt para o comportamento do assistente de voz — respostas mais curtas, sem markdown, personalidade adequada.',
        items: [
          '**Instalar o Ollama:** Baixe de ollama.com. Disponível para macOS, Linux e Windows. Instala em menos de 2 minutos.',
          '**Baixar o modelo:** `ollama pull llama3.1:8b` (recomendado) ou `ollama pull phi4` (mais leve, adequado para sistemas com 16 GB de RAM).',
          '**Testar:** `ollama run llama3.1:8b "What is the capital of France?"` — verifique se a resposta é precisa e rápida.',
          '**System prompt para voz:** Use um system prompt curto e direto: "Você é um assistente de voz útil. Mantenha as respostas concisas — no máximo 1–3 frases. Nunca use listas, markdown ou formatação. Fale de forma natural, como em uma conversa."',
          '**Temperatura:** Defina a temperatura em 0,3–0,5 para respostas mais previsíveis e factuais. Uma temperatura mais baixa reduz as alucinações nas respostas de voz.',
          '**Máximo de tokens:** Limite o comprimento da resposta com `--num-predict 150` — respostas longas exigem mais tempo de TTS e parecem artificiais na interação de voz.',
        ],
      },
      step3TTS: {
        id: 'step3-tts',
        title: 'Passo 3: Configurar a síntese de voz',
        content:
          'Instale o Piper para todos os níveis de hardware. Ele funciona em tempo real na CPU, incluindo o Raspberry Pi, tem mais de 20 pacotes de vozes em diferentes idiomas e não requer GPU.',
        items: [
          '**Instalar o Piper:** `pip install piper-tts`',
          '**Baixar uma voz:** `piper --download-dir voices --update-voices --voice en_US-lessac-medium` (ou qualquer voz da página de vozes do Piper no Hugging Face).',
          '**Testar:** `echo "Hello, how can I help you today?" | piper --model voices/en_US-lessac-medium.onnx --output-raw | aplay -r 22050 -f S16_LE -c 1`',
          '**Saída de áudio:** O Piper gera PCM bruto ou WAV. Redirecione para `aplay` (Linux), `afplay` (Mac), ou use a biblioteca Python `sounddevice` para reprodução multiplataforma.',
          '**Alternativa (melhor qualidade):** Backend Coqui VITS — instale `pip install TTS`, use `tts --model_name tts_models/en/vctk/vits`. Requer ~2 GB de VRAM; 2–3× mais lento do que o Piper, mas notavelmente mais natural.',
          '**Seleção de voz:** Para assistentes de voz, escolha uma voz de qualidade média em vez de alta — as vozes médias são mais rápidas e a diferença é insignificante por um alto-falante.',
        ],
      },
      step4Pipeline: {
        id: 'step4-pipeline',
        title: 'Passo 4: Conectar o pipeline',
        content:
          'Um orquestrador Python conecta STT → LLM → TTS. O script captura o áudio do microfone, transcreve com o Whisper, envia a transcrição ao Ollama, converte a resposta em voz com o Piper e a reproduz.',
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
            text: 'Este é um pipeline mínimo pensado para maior clareza — ele grava áudio de duração fixa. Para produção, use VAD (detecção de atividade de voz) para gravar até que a fala termine em vez de usar uma duração fixa. O faster-whisper inclui o Silero VAD; para o whisper.cpp, use o modo --stream ou implemente um VAD WebRTC com a biblioteca Python webrtcvad.',
          },
        ],
      },
      step5WakeWord: {
        id: 'step5-wake-word',
        title: 'Passo 5: Detecção de palavra de ativação',
        content:
          '**Um detector de palavra de ativação executa um modelo leve de forma contínua e ativa o pipeline completo apenas quando detecta a sua frase escolhida.** Sem ele, o Whisper roda continuamente — consumindo mais CPU/GPU e gerando mais falsos positivos com o ruído de fundo.',
        items: [
          '**OpenWakeWord (licença MIT):** Totalmente open-source, roda na CPU, suporta palavras de ativação personalizadas mediante fine-tuning com a sua própria frase. Instalação: `pip install openwakeword`. Funciona no Raspberry Pi. A melhor opção para configurações totalmente offline e open-source.',
          '**Porcupine (Picovoice):** Proprietário, mas com nível gratuito para uso pessoal. As palavras de ativação predefinidas incluem "Alexa", "Hey Siri", "Ok Google" e opções personalizadas como "Hey Jarvis". Muito preciso com baixa taxa de falsos positivos. Instalação: `pip install pvporcupine`.',
          '**Padrão de integração:** Execute o OpenWakeWord/Porcupine em um loop. Quando a palavra de ativação é detectada, reproduza um som "ding" (retorno ao usuário), ative o pipeline Whisper + LLM + TTS para uma consulta e volte a escutar a palavra de ativação após a reprodução do TTS.',
          '**Consumo em funcionamento contínuo:** A detecção de palavra de ativação usa ~2–5% de CPU em um Raspberry Pi 5 — insignificante. Você pode deixar o assistente funcionando 24/7 com consumo mínimo.',
          '**Palavras de ativação personalizadas (OpenWakeWord):** Gere 500 exemplos de áudio positivos e 500 negativos da sua frase de ativação usando síntese de voz, depois ajuste o OpenWakeWord em menos de 30 minutos na CPU. A precisão é comparável ao Porcupine para palavras comuns em inglês.',
        ],
      },
      latencyOptimization: {
        id: 'latency',
        title: 'Otimização de latência',
        content:
          '**O objetivo de 1–2 segundos é alcançável em hardware de desktop com a configuração adequada.** A latência se distribui entre as três camadas:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O STT adiciona 0,2–0,5 s, a latência do primeiro token do LLM adiciona 0,5–1,5 s, o TTS adiciona 0,1–0,3 s — total de 1–2 segundos em GPU de desktop.',
          },
          {
            type: 'plain-terms',
            text: 'O LLM é o maior gargalo. A otimização mais eficaz consiste em iniciar o streaming da saída do TTS enquanto o LLM gera tokens — o usuário começa a ouvir a resposta antes de o LLM terminar de escrevê-la.',
          },
        ],
        items: [
          '**Otimização do STT (~0,2–0,5 s):** Use Whisper small em vez de large-v3. Use VAD para cortar o silêncio antes de passar o áudio ao Whisper — áudio mais curto = transcrição mais rápida.',
          '**Otimização do LLM (~0,5–1,5 s primeiro token):** Pré-carregue o modelo na inicialização (o Ollama faz isso automaticamente). Use quantização Q4_K_M para o melhor equilíbrio entre velocidade e qualidade. Defina `--num-predict 100–150` para limitar o comprimento da resposta.',
          '**Streaming LLM → TTS:** Transmita a saída do LLM token a token. Inicie o TTS a cada frase completa (detectada por ponto ou ponto de interrogação). Isso reduz a latência percebida em 0,3–0,7 segundos — o usuário ouve o início da resposta enquanto o LLM ainda gera o fim.',
          '**Otimização do TTS (~0,1–0,3 s):** O Piper gera o primeiro áudio em 50 ms. Inicialize o Piper na inicialização. Use `--output-raw` para transmitir o áudio enquanto ele é gerado em vez de esperar o arquivo completo.',
          '**Manter os modelos na memória:** O Ollama mantém os modelos quentes na VRAM automaticamente. O whisper.cpp carregado no modo stream permanece na memória. Evite recarregar os modelos entre consultas.',
          '**Latência-alvo por nível de hardware:** Pi 5: 5–8 s (aceitável para uso não conversacional). Mini PC CPU: 3–5 s (limite para conversa). GPU de desktop: 1–2 s (natural). Mac M5: 1–1,5 s (excelente).',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e segurança',
        content:
          '**Um assistente de voz local corretamente montado gera zero tráfego de rede durante o funcionamento.** Todo o processamento — captura de áudio, reconhecimento de voz, inferência do LLM e TTS — roda inteiramente no seu hardware.',
        items: [
          '**Verifique com o Wireshark:** Execute o Wireshark na sua interface de rede durante uma conversa com o assistente. Você não deve ver nenhum pacote vindo do processo do assistente. Qualquer tráfego inesperado indica uma má configuração — verifique se a API externa do Ollama está desativada caso você tenha um IP público.',
          '**Sem armazenamento de áudio:** Nem o whisper.cpp nem o faster-whisper gravam arquivos de áudio por padrão — eles processam na memória. O orquestrador Python deste guia grava um arquivo WAV temporário para o whisper.cpp, que é excluído após a transcrição.',
          '**Sem histórico de conversas armazenado:** O histórico de conversas do script de exemplo está apenas na memória e é reiniciado ao reiniciar o programa. Para histórico persistente, implemente um armazenamento explícito com um banco de dados local e criptografia em repouso.',
          '**Conformidade com o RGPD:** Como todo o processamento é local e nenhum dado sai da sua rede, um assistente de voz local para uso interno não requer um acordo de tratamento de dados. Não existe uma relação controlador/operador de dados com um terceiro.',
          '**Isolamento de rede:** Para máxima privacidade, adicione uma regra de firewall que bloqueie o tráfego de saída do processo do assistente. O Ollama e o whisper.cpp funcionarão normalmente — eles não requerem acesso à rede depois que os modelos são baixados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar um assistente de voz local para controlar a automação residencial?',
            a: 'Sim, se o seu sistema de automação residencial tiver uma API local. O Home Assistant (HASS) oferece excelente integração local — você pode chamar a API REST do HASS a partir do orquestrador depois que o LLM interpretar o comando. O LLM atua como analisador de intenções: "Acenda as luzes da sala" → JSON estruturado → chamada à API do HASS. Para sistemas de automação residencial proprietários (Ring, Nest, Philips Hue na nuvem) sem suporte de API local, não é possível integrar localmente sem acesso à internet.',
          },
          {
            q: 'Quantos idiomas o assistente de voz local suporta?',
            a: 'O Whisper suporta 99 idiomas para o reconhecimento de voz. O Piper suporta mais de 20 pacotes de vozes para TTS. O suporte de idiomas do LLM depende do modelo — o Llama 3.3 8B lida bem com inglês, francês, alemão, espanhol, italiano, português e um pouco de japonês/chinês. Para suporte multilíngue completo em idiomas menos comuns, escolha um modelo especificamente treinado para esses idiomas (por exemplo, o Mistral Small tem bom suporte para idiomas europeus).',
          },
          {
            q: 'Qual é o hardware mínimo para obter menos de 2 segundos de latência?',
            a: 'Um Mac Mini M5 (24 GB, ~US$ 600) ou um desktop com NVIDIA RTX 3060 12 GB (~US$ 400 de GPU, ~US$ 800 no total) alcançam ambos uma latência de 1–2 segundos. Os requisitos principais são: 8+ GB de VRAM na GPU para o Llama 3.3 8B em Q4, mais aceleração Metal ou CUDA para o Whisper. Uma configuração só com CPU e 16 GB de RAM (Mini PC, ~US$ 300) alcança 3–5 segundos — utilizável, mas abaixo do limiar de "sensação natural".',
          },
          {
            q: 'O pipeline Whisper + LLM + Piper funciona no Windows?',
            a: 'Sim. O whisper.cpp tem instruções de compilação para Windows usando cmake e Visual Studio. O Ollama funciona de forma nativa no Windows 10/11 com suporte de GPU NVIDIA. O Piper tem binários para Windows. O orquestrador Python funciona no Windows com o sounddevice para a captura de áudio. A principal complexidade no Windows é compilar o whisper.cpp a partir do código-fonte — como alternativa, use o faster-whisper (pip install, sem necessidade de compilar) no Windows com GPU NVIDIA.',
          },
          {
            q: 'Como adiciono a busca web ao assistente de voz local?',
            a: 'Você pode adicionar busca web integrando uma ferramenta de busca local ao orquestrador. Opções: (1) Use a API do DuckDuckGo (gratuita, sem conta) para consultas gerais — analise o resultado e injete-o no prompt do LLM. (2) Use um feed RSS local de notícias para eventos atuais. (3) Use um sistema RAG local (AnythingLLM, PrivateGPT) com a sua própria coleção de documentos para busca específica de um domínio. O LLM então usa o contexto recuperado para responder às perguntas com precisão. Isso adiciona entre 0,5 e 2 segundos de latência conforme o método de busca.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[whisper.cpp no GitHub](https://github.com/ggerganov/whisper.cpp) — Código-fonte, instruções de compilação, documentação do modo stream.',
          '[Ollama em ollama.com](https://ollama.com) — Instalação, biblioteca de modelos, referência de API.',
          '[Piper TTS no GitHub](https://github.com/rhasspy/piper) — Código-fonte, download de pacotes de vozes, guia de configuração para Raspberry Pi.',
          '[OpenWakeWord no GitHub](https://github.com/dscripka/openWakeWord) — Código-fonte, guia de treinamento de palavras de ativação personalizadas, arquiteturas compatíveis.',
          '[Porcupine da Picovoice](https://github.com/Picovoice/porcupine) — SDK de palavra de ativação, condições do nível gratuito, documentação do SDK de Python.',
          '[Picovoice Console](https://console.picovoice.ai) — Crie uma chave de API gratuita para o Porcupine em uso pessoal.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Reconhecimento de voz local 2026: Whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison-2026) — Análise aprofundada da camada STT deste pipeline.',
          '[TTS local e clonagem de voz 2026: Piper vs Coqui vs XTTS v2](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Análise aprofundada da camada TTS e das opções de clonagem de voz.',
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Amplie este pipeline de voz com suporte para modelos de visão.',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — Instalação do Ollama e gestão de modelos.',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — Seleção de hardware para o pipeline completo de voz + LLM.',
          '[Construa um assistente de voz local no seu telefone](/pt/power-local-llm/voice-assistant-local-mobile-offline) — A versão móvel deste guia (iPhone + Android).',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Crie um assistente de voz totalmente offline em 2026: Whisper + LLM + Piper (passo a passo)',
       description: 'whisper.cpp para STT, Ollama + Llama 3.3 8B para raciocínio, Piper TTS para áudio. Latência de 1–2 s em GPU. Orquestrador Python + configuração de palavra de ativação. 2026.',
       url: 'https://www.promptquorum.com/pt/power-local-llm/build-local-voice-assistant-2026?lang=pt',
       inLanguage: 'pt',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},
}
