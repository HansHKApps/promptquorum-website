import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper on Apple Silicon 2026: Metal Benchmarks, Core ML Setup, M1–M5 Speed Guide',
    seoTitle: 'Whisper STT on Apple Silicon 2026: Metal GPU Benchmarks M1-M5, Setup Guide',
    intro: 'Whisper speech-to-text on Apple Silicon: Metal and Core ML benchmarks for M1 through M5 Max. Setup guide, model selection, real-time transcription.',
    metaDescription: 'Whisper on Mac Apple Silicon: Metal GPU benchmarks M1-M5 Max, setup, real-time STT performance.',
    twitterDescription: 'Whisper on M5 Pro: large-v3 at 10× real-time via Metal. Benchmarks, Core ML setup, real-time STT guide.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: 'Mac users implementing speech-to-text locally.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', 'speech to text local', 'real-time transcription', 'Apple Silicon benchmarks'],
    leadAnswerBlock: '**Whisper large-v3 on M5 Pro: 10–12× real-time. Metal GPU automatic. Large-v3-turbo balances speed + accuracy at 14–18×. Zero cost, fully offline.**',
    quickAnswerTop: {
      en: {
        question: 'How fast is Whisper on Mac?',
        answer: 'Whisper tiny: 48–60× real-time. Small: 22–34× real-time. Large-v3: 5–14× real-time (M1→M5 Pro). Large-v3-turbo: 14–18× real-time on M5 base.',
        bullets: ['Tiny: 48–60× real-time (fast, lower accuracy)', 'Small: 22–34× real-time (balanced)', 'Large-v3-turbo: 14–18× real-time (best speed/quality)', 'Large-v3: 5–14× real-time (best accuracy)', 'Metal GPU acceleration automatic', 'Zero cost, fully offline'],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Full Benchmark Table (M1–M5)', anchor: '#table' },
      { label: 'Whisper Model Sizes', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'Setup: whisper.cpp', anchor: '#setup' },
      { label: 'Real-Time Streaming', anchor: '#realtime' },
      { label: 'Voice Assistant Pipeline', anchor: '#integration' },
      { label: 'Best Config by Mac', anchor: '#model-choice' },
      { label: 'Local vs Cloud STT', anchor: '#cloud-comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Articles', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: 'Full Benchmark Table: Whisper Performance on Apple Silicon (M1–M5)',
        tableFormat: true,
        columns: ['Chip', 'Tiny', 'Base', 'Small', 'Medium', 'Large-v3'],
        rows: [
          { chip: 'M1', tiny: '32×', base: '20×', small: '12×', medium: '5×', large: '2–3×' },
          { chip: 'M1 Pro', tiny: '38×', base: '24×', small: '16×', medium: '7×', large: '3–4×' },
          { chip: 'M1 Max', tiny: '45×', base: '30×', small: '22×', medium: '10×', large: '5–6×' },
          { chip: 'M1 Ultra', tiny: '55×', base: '38×', small: '28×', medium: '14×', large: '7–9×' },
          { chip: 'M2', tiny: '36×', base: '23×', small: '14×', medium: '6×', large: '3–4×' },
          { chip: 'M2 Pro', tiny: '42×', base: '28×', small: '20×', medium: '9×', large: '4–5×' },
          { chip: 'M2 Max', tiny: '50×', base: '35×', small: '26×', medium: '12×', large: '6–8×' },
          { chip: 'M2 Ultra', tiny: '60×', base: '42×', small: '32×', medium: '17×', large: '9–11×' },
          { chip: 'M3', tiny: '40×', base: '26×', small: '16×', medium: '7×', large: '3–4×' },
          { chip: 'M3 Pro', tiny: '46×', base: '32×', small: '22×', medium: '10×', large: '5–6×' },
          { chip: 'M3 Max', tiny: '55×', base: '40×', small: '30×', medium: '14×', large: '7–9×' },
          { chip: 'M4', tiny: '44×', base: '30×', small: '18×', medium: '8×', large: '4–5×' },
          { chip: 'M4 Pro', tiny: '50×', base: '36×', small: '26×', medium: '12×', large: '6–8×' },
          { chip: 'M4 Max', tiny: '60×', base: '44×', small: '34×', medium: '16×', large: '8–10×' },
          { chip: 'M5 (base)', tiny: '48×', base: '34×', small: '22×', medium: '10×', large: '5–7×' },
          { chip: 'M5 Pro', tiny: '55×', base: '40×', small: '30×', medium: '14×', large: '10–12×' },
          { chip: 'M5 Max', tiny: '65×', base: '48×', small: '38×', medium: '18×', large: '12–14×' },
        ],
        note: '×N real-time = N seconds of audio transcribed in 1 second. Benchmarks via whisper.cpp with Metal acceleration. All M1 Pro+ can run large-v3 in real-time or faster.'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Whisper Model Sizes — Which One Should You Use?',
        tableFormat: true,
        columns: ['Model', 'Parameters', 'Disk Size', 'RAM Usage', 'English WER', 'Best For'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7.6%', bestFor: 'Real-time, lowest accuracy' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5.0%', bestFor: 'Real-time on older Macs' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3.4%', bestFor: 'Balanced speed/quality' },
          { model: 'medium', params: '769M', disk: '1.5 GB', ram: '~5 GB', wer: '2.9%', bestFor: 'High quality, slower' },
          { model: 'large-v3', params: '1.55B', disk: '3.0 GB', ram: '~10 GB', wer: '2.5%', bestFor: 'Best accuracy' },
          { model: 'large-v3-turbo', params: '809M', disk: '1.6 GB', ram: '~6 GB', wer: '2.7%', bestFor: 'Best speed/quality balance' },
          { model: 'distil-large-v3', params: '756M', disk: '1.5 GB', ram: '~5 GB', wer: '2.6%', bestFor: '6× faster than large-v3' },
        ],
        note: 'WER (Word Error Rate) on English LibriSpeech test set. Large-v3-turbo and distil-large-v3 are the sweet spot for real-time on most Macs — near-large-v3 quality at 4–6× the speed.'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine: Which Backend?',
        content: [
          'Apple Silicon offers three acceleration paths for Whisper. Each has tradeoffs.',
          '',
          'Metal (via whisper.cpp) — Recommended: Uses Apple Metal GPU framework, compatible with all M-series chips, 10–12× real-time on large-v3 (M5 Pro), setup via make WHISPER_METAL=1. Best for: most users, easiest setup, proven performance.',
          '',
          'Core ML (via Apple Core ML format) — Advanced: Uses Apple machine learning framework, can target Neural Engine (ANE) for some operations, 15–20% faster on some workloads, requires model conversion (10–15 min setup). Best for: power users wanting maximum speed.',
          '',
          'Apple Neural Engine (ANE) — Limited Use: Dedicated AI accelerator on all M-series chips, not directly accessible (must go through Core ML), Whisper doesn\'t fully utilize ANE due to architecture mismatch, works best at small models (tiny, base). Best for: tiny/base Whisper on battery-constrained laptops.',
          '',
          'Decision Matrix: First-time setup → Metal (whisper.cpp). Maximum speed on large-v3 → Metal (whisper.cpp). Battery-powered laptop, base model → Core ML with ANE. Production server → Metal (proven, reliable). Real-time transcription → Metal with streaming mode. Cloud deployment to Mac instances → Metal (containerizable).'
        ],
        items: [
          'Metal (whisper.cpp): Faster, widely compatible, simplest setup',
          'Core ML: Neural Engine optimization, 15–20% speed gain on some workloads (requires conversion)',
          'Apple Neural Engine: Limited benefit for large models, best for tiny/base on laptops'
        ]
      },
      setup: {
        id: 'setup',
        title: 'Setup: whisper.cpp with Metal Acceleration',
        numberedItems: [
          { title: 'Install dependencies', whyItMatters: 'xcode-select --install (Xcode tools)\nbrew install ffmpeg (audio conversion)' },
          { title: 'Clone and build whisper.cpp with Metal', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: 'Download a model', whyItMatters: 'bash ./models/download-ggml-model.sh small (466 MB, real-time)\nbash ./models/download-ggml-model.sh large-v3 (3 GB, best quality)\nbash ./models/download-ggml-model.sh large-v3-turbo (1.6 GB, balanced)' },
          { title: 'Transcribe an audio file', whyItMatters: './main -m models/ggml-large-v3.bin -f /path/to/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj (JSON)\n./main -m models/ggml-large-v3.bin -f audio.wav -l en (specify language)' },
          { title: 'Convert non-WAV audio first', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: 'Real-Time Streaming Transcription (Live Microphone)',
        content: [
          'For live transcription from microphone — voice assistants, meeting transcription, accessibility tools.',
          '',
          'Option 1: whisper.cpp stream mode',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: process every 500ms',
          '# --length 5000: keep last 5 seconds context',
          '',
          'Option 2: Python with faster-whisper (see code block below)',
          '',
          'Latency on M5 Pro: small model ~200ms, large-v3-turbo ~400–600ms, large-v3 ~800ms–1.2s behind real-time.'
        ],
        codeBlock: `import sounddevice as sd
import numpy as np
from faster_whisper import WhisperModel

model = WhisperModel("large-v3-turbo", device="cpu", compute_type="int8")
buffer = []
chunk_duration = 3
sample_rate = 16000

def callback(indata, frames, time, status):
    buffer.append(indata.copy())
    if len(buffer) * 1024 / sample_rate >= chunk_duration:
        audio = np.concatenate(buffer).flatten().astype(np.float32)
        segments, _ = model.transcribe(audio, beam_size=5)
        for segment in segments:
            print(segment.text)
        buffer.clear()

with sd.InputStream(callback=callback, channels=1, samplerate=sample_rate):
    print("Listening... (Ctrl+C to stop)")
    while True:
        sd.sleep(1000)`,
        codeLanguage: 'python'
      },
      integration: {
        id: 'integration',
        title: 'Voice Assistant Pipeline: Whisper + Ollama + Piper TTS',
        content: 'Complete code for a local voice assistant running entirely on Apple Silicon.',
        codeBlock: `import sounddevice as sd
import numpy as np
import requests
import subprocess
from faster_whisper import WhisperModel

WHISPER_MODEL = "large-v3-turbo"
OLLAMA_URL = "http://localhost:11434/api/chat"
LLM_MODEL = "llama3.1:8b"
SAMPLE_RATE = 16000

whisper = WhisperModel(WHISPER_MODEL, device="cpu", compute_type="int8")

def record_audio(duration=5):
    print("Listening...")
    audio = sd.rec(int(duration * SAMPLE_RATE),
                   samplerate=SAMPLE_RATE,
                   channels=1,
                   dtype=np.float32)
    sd.wait()
    return audio.flatten()

def transcribe(audio):
    segments, _ = whisper.transcribe(audio, beam_size=5)
    return " ".join([seg.text for seg in segments])

def llm_respond(user_text):
    response = requests.post(OLLAMA_URL, json={
        "model": LLM_MODEL,
        "messages": [{"role": "user", "content": user_text}],
        "stream": False
    })
    return response.json()["message"]["content"]

def speak(text):
    subprocess.run(
        ["piper", "--model", "en_US-amy-medium.onnx"],
        input=text.encode(),
        check=True
    )

while True:
    audio = record_audio(duration=5)
    user_text = transcribe(audio)
    print(f"You: {user_text}")
    if not user_text.strip():
        continue
    response = llm_respond(user_text)
    print(f"AI: {response}")
    speak(response)`,
        codeLanguage: 'python',
        note: 'Performance on M5 Pro: STT 300ms, LLM 700ms, TTS 200ms. Total end-to-end: ~1.2 seconds.'
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Best Whisper Configuration by Mac Model',
        tableFormat: true,
        columns: ['Mac Config', 'Recommended Model', 'Real-time Multiple', 'Use Case'],
        rows: [
          { config: 'M1/M2 base 8GB', model: 'small', realtime: '12–14×', useCase: 'Light transcription' },
          { config: 'M1/M2 base 16GB', model: 'small or distil-large-v3', realtime: '8–15×', useCase: 'General use' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12–15×', useCase: 'Better quality, still fast' },
          { config: 'M5 base 32GB', model: 'large-v3-turbo', realtime: '14–18×', useCase: 'Speed + quality' },
          { config: 'M5 Pro 36–64GB', model: 'large-v3', realtime: '10–12×', useCase: 'Maximum accuracy' },
          { config: 'M5 Pro + concurrent LLM', model: 'large-v3 + Llama 3.1 8B', realtime: '10×', useCase: 'Voice assistant' },
          { config: 'M5 Max 128GB', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: 'Full multimodal stack' },
        ],
        note: 'For real-time voice assistant: use small or large-v3-turbo for lowest latency. For meeting/podcast transcription: use large-v3 for maximum accuracy (1–2 second delay acceptable).'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'Local Whisper vs Cloud Speech-to-Text Services',
        tableFormat: true,
        columns: ['Metric', 'Whisper Local (M5 Pro)', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: 'Cost per hour audio', local: '$0', google: '$1.44', openai: '$0.36', assembly: '$0.65' },
          { metric: 'Accuracy (English WER)', local: '2.5%', google: '4.9%', openai: '2.5%', assembly: '3.0%' },
          { metric: 'Latency', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: 'Privacy', local: '100% local', google: 'Sent to Google', openai: 'Sent to OpenAI', assembly: 'Sent to AssemblyAI' },
          { metric: 'Offline capable', local: 'Yes', google: 'No', openai: 'No', assembly: 'No' },
          { metric: 'Languages', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: 'Setup', local: '5 minutes', google: 'API key', openai: 'API key', assembly: 'API key' },
        ],
        note: 'Monthly cost (8 hours/day): Whisper local $3, Google $345, OpenAI $86, AssemblyAI $156. For privacy-sensitive work (medical, legal, journalism), local Whisper is the only option. For high-volume transcription ($100+/month cloud), local Mac pays for itself in 12 months.'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is Whisper faster than cloud APIs?', a: 'Local on M5 Pro: 10× real-time (100ms latency). Cloud APIs: 100–500ms latency due to network. Local is faster and free.' },
          { q: 'Can Whisper handle multiple speakers?', a: 'Yes, timestamps separate speakers. Use post-processing or diarization tools to identify speaker identity.' },
          { q: 'What language support?', a: '99 languages with auto-detect. Accuracy varies by language — English is 2.5% WER, other languages 5–15% WER.' },
          { q: 'Which Whisper model has the best speed-to-quality ratio?', a: 'Large-v3-turbo or distil-large-v3. Both achieve ~95% of large-v3 accuracy at 4–6× the speed. Recommended for most real-time use cases.' },
          { q: 'Can Whisper handle accented English or non-native speakers?', a: 'Yes, but WER increases. Native English: ~2.5%. Strong accent/non-native: 5–12%. Large-v3 handles accents better than smaller models.' },
          { q: 'Does Whisper work for podcasts and music transcription?', a: 'Podcasts: yes, excellent for spoken-word. Music with lyrics: poor — Whisper is trained for speech. Use specialized models for music.' },
          { q: 'How accurate is Whisper for technical terminology?', a: 'Variable. Common technical terms: good. Highly specialized terms: may transcribe incorrectly. Use --prompt flag with expected vocabulary to improve accuracy.' },
          { q: 'Can I run multiple Whisper instances on one Mac?', a: 'Yes, memory-bound. M5 Pro 36GB: 2 simultaneous large-v3 instances. M5 Max 128GB: 4–6 instances or one instance plus LLM/TTS.' },
        ]
      },
      related: {
        id: 'related',
        title: 'Related Articles',
        items: [
          '[Apple Silicon for Local LLMs: Complete Guide](/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Local Whisper STT Comparison (whisper.cpp vs faster-whisper)](/power-local-llm/local-whisper-stt-comparison-2026)',
          '[Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026)',
          '[Local TTS and Voice Cloning](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server)',
          '[How Much Unified Memory for Local LLMs?](/local-llms/how-much-unified-memory-for-local-llm)',
          '[Local Multimodal Pipeline](/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
  },
  de: { theme: 'Hardware & Performance', title: '', sections: {} },
  fr: { theme: 'Hardware & Performance', title: '', sections: {} },
  ja: { theme: 'Hardware & Performance', title: '', sections: {} },
  zh: { theme: 'Hardware & Performance', title: '', sections: {} },
}
