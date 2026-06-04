import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper on Apple Silicon 2026: Metal Benchmarks, Core ML Setup, M1–M5 Speed Guide',
    seoTitle: 'Whisper STT on Apple Silicon 2026: Metal Benchmarks M1–M5',
    intro: 'Whisper speech-to-text on Apple Silicon: Metal and Core ML benchmarks for M1 through M5 Max. Setup guide, model selection, real-time transcription.',
    metaDescription: 'Whisper on Mac: Metal GPU benchmarks M1–M5, setup, real-time transcription. Large-v3 runs 10× real-time on M5 Pro. Core ML guide.',
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
          { config: 'M5 Pro + concurrent LLM', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: 'Voice assistant' },
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
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper en Apple Silicon 2026: Benchmarks Metal, Configuración Core ML, Guía M1–M5',
    seoTitle: 'Whisper STT en Apple Silicon 2026: Benchmarks Metal M1–M5',
    intro: 'Whisper de reconocimiento de voz en Apple Silicon: benchmarks de Metal y Core ML para M1 hasta M5 Max. Guía de configuración, selección de modelo y transcripción en tiempo real.',
    metaDescription: 'Whisper en Mac: benchmarks GPU Metal M1–M5, configuración, transcripción en tiempo real. Large-v3 corre a 10× tiempo real en M5 Pro. Guía Core ML.',
    twitterDescription: 'Whisper en M5 Pro: large-v3 a 10× tiempo real vía Metal. Benchmarks, configuración Core ML, guía STT en tiempo real.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: 'Usuarios de Mac que implementan reconocimiento de voz de forma local.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', 'reconocimiento de voz local', 'transcripción en tiempo real', 'benchmarks Apple Silicon'],
    leadAnswerBlock: '**Whisper large-v3 en M5 Pro: 10–12× tiempo real. GPU Metal automático. Large-v3-turbo equilibra velocidad + precisión a 14–18×. Sin costo, completamente offline.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Tabla de benchmarks completa (M1–M5)', anchor: '#table' },
      { label: 'Tamaños de modelos Whisper', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'Configuración: whisper.cpp', anchor: '#setup' },
      { label: 'Streaming en tiempo real', anchor: '#realtime' },
      { label: 'Pipeline de asistente de voz', anchor: '#integration' },
      { label: 'Mejor configuración por Mac', anchor: '#model-choice' },
      { label: 'STT local vs cloud', anchor: '#cloud-comparison' },
      { label: 'Puntos clave', anchor: '#faq' },
      { label: 'Artículos relacionados', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: 'Tabla de benchmarks completa: rendimiento de Whisper en Apple Silicon (M1–M5)',
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
        note: '×N tiempo real = N segundos de audio transcritos en 1 segundo. Benchmarks vía whisper.cpp con aceleración Metal. Todos los M1 Pro+ pueden ejecutar large-v3 en tiempo real o más rápido.'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tamaños de modelos Whisper: ¿cuál deberías usar?',
        tableFormat: true,
        columns: ['Modelo', 'Parámetros', 'Tamaño en disco', 'Uso de RAM', 'WER en inglés', 'Ideal para'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7,6%', bestFor: 'Tiempo real, menor precisión' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5,0%', bestFor: 'Tiempo real en Macs más antiguos' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3,4%', bestFor: 'Equilibrio velocidad/calidad' },
          { model: 'medium', params: '769M', disk: '1,5 GB', ram: '~5 GB', wer: '2,9%', bestFor: 'Alta calidad, más lento' },
          { model: 'large-v3', params: '1,55B', disk: '3,0 GB', ram: '~10 GB', wer: '2,5%', bestFor: 'Máxima precisión' },
          { model: 'large-v3-turbo', params: '809M', disk: '1,6 GB', ram: '~6 GB', wer: '2,7%', bestFor: 'Mejor equilibrio velocidad/calidad' },
          { model: 'distil-large-v3', params: '756M', disk: '1,5 GB', ram: '~5 GB', wer: '2,6%', bestFor: '6× más rápido que large-v3' },
        ],
        note: 'WER (tasa de error de palabras) en el conjunto de prueba inglés de LibriSpeech. Large-v3-turbo y distil-large-v3 son el punto óptimo para tiempo real en la mayoría de los Macs: calidad cercana a large-v3 a 4–6× la velocidad.'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine: ¿qué backend elegir?',
        content: [
          'Apple Silicon ofrece tres rutas de aceleración para Whisper. Cada una tiene sus ventajas y desventajas.',
          '',
          'Metal (vía whisper.cpp) — Recomendado: Usa el framework GPU Apple Metal, compatible con todos los chips de la serie M, 10–12× tiempo real en large-v3 (M5 Pro), configuración vía make WHISPER_METAL=1. Ideal para: la mayoría de usuarios, la configuración más sencilla, rendimiento probado.',
          '',
          'Core ML (vía formato Apple Core ML) — Avanzado: Usa el framework de aprendizaje automático de Apple, puede apuntar al Neural Engine (ANE) para algunas operaciones, 15–20% más rápido en algunas cargas de trabajo, requiere conversión del modelo (10–15 min de configuración). Ideal para: usuarios avanzados que buscan la máxima velocidad.',
          '',
          'Apple Neural Engine (ANE) — Uso limitado: Acelerador de IA dedicado en todos los chips de la serie M, no accesible directamente (debe ir a través de Core ML), Whisper no aprovecha completamente el ANE por incompatibilidad de arquitectura, funciona mejor con modelos pequeños (tiny, base). Ideal para: Whisper tiny/base en laptops con batería.',
          '',
          'Matriz de decisión: Primera configuración → Metal (whisper.cpp). Máxima velocidad en large-v3 → Metal (whisper.cpp). Laptop con batería, modelo base → Core ML con ANE. Servidor de producción → Metal (probado, confiable). Transcripción en tiempo real → Metal con modo streaming. Despliegue cloud en instancias Mac → Metal (contenedorizable).'
        ],
        items: [
          'Metal (whisper.cpp): Más rápido, amplia compatibilidad, configuración más sencilla',
          'Core ML: Optimización con Neural Engine, ganancia de velocidad del 15–20% en algunas cargas (requiere conversión)',
          'Apple Neural Engine: Beneficio limitado para modelos grandes, ideal para tiny/base en laptops'
        ]
      },
      setup: {
        id: 'setup',
        title: 'Configuración: whisper.cpp con aceleración Metal',
        numberedItems: [
          { title: 'Instalar dependencias', whyItMatters: 'xcode-select --install (herramientas Xcode)\nbrew install ffmpeg (conversión de audio)' },
          { title: 'Clonar y compilar whisper.cpp con Metal', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: 'Descargar un modelo', whyItMatters: 'bash ./models/download-ggml-model.sh small (466 MB, tiempo real)\nbash ./models/download-ggml-model.sh large-v3 (3 GB, mejor calidad)\nbash ./models/download-ggml-model.sh large-v3-turbo (1,6 GB, equilibrado)' },
          { title: 'Transcribir un archivo de audio', whyItMatters: './main -m models/ggml-large-v3.bin -f /ruta/al/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj (JSON)\n./main -m models/ggml-large-v3.bin -f audio.wav -l en (especificar idioma)' },
          { title: 'Convertir audio no-WAV primero', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: 'Transcripción en streaming en tiempo real (micrófono en vivo)',
        content: [
          'Para transcripción en vivo desde el micrófono: asistentes de voz, transcripción de reuniones, herramientas de accesibilidad.',
          '',
          'Opción 1: modo stream de whisper.cpp',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: procesar cada 500ms',
          '# --length 5000: mantener los últimos 5 segundos de contexto',
          '',
          'Opción 2: Python con faster-whisper (ver bloque de código a continuación)',
          '',
          'Latencia en M5 Pro: modelo small ~200ms, large-v3-turbo ~400–600ms, large-v3 ~800ms–1,2s de retraso respecto al tiempo real.'
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
        title: 'Pipeline de asistente de voz: Whisper + Ollama + Piper TTS',
        content: 'Código completo para un asistente de voz local que funciona íntegramente en Apple Silicon.',
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
        note: 'Rendimiento en M5 Pro: STT 300ms, LLM 700ms, TTS 200ms. Total de extremo a extremo: ~1,2 segundos.'
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Mejor configuración de Whisper según el modelo de Mac',
        tableFormat: true,
        columns: ['Configuración Mac', 'Modelo recomendado', 'Múltiplo de tiempo real', 'Caso de uso'],
        rows: [
          { config: 'M1/M2 base 8GB', model: 'small', realtime: '12–14×', useCase: 'Transcripción ligera' },
          { config: 'M1/M2 base 16GB', model: 'small o distil-large-v3', realtime: '8–15×', useCase: 'Uso general' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12–15×', useCase: 'Mejor calidad, aún rápido' },
          { config: 'M5 base 32GB', model: 'large-v3-turbo', realtime: '14–18×', useCase: 'Velocidad + calidad' },
          { config: 'M5 Pro 36–64GB', model: 'large-v3', realtime: '10–12×', useCase: 'Máxima precisión' },
          { config: 'M5 Pro + LLM simultáneo', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: 'Asistente de voz' },
          { config: 'M5 Max 128GB', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: 'Stack multimodal completo' },
        ],
        note: 'Para asistente de voz en tiempo real: usa small o large-v3-turbo para la menor latencia. Para transcripción de reuniones/podcasts: usa large-v3 para máxima precisión (retraso de 1–2 segundos aceptable). Los precios pueden variar según tu país.'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'Whisper local vs servicios de transcripción en la nube',
        tableFormat: true,
        columns: ['Métrica', 'Whisper local (M5 Pro)', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: 'Costo por hora de audio', local: '$0', google: '$1.44', openai: '$0.36', assembly: '$0.65' },
          { metric: 'Precisión (WER en inglés)', local: '2,5%', google: '4,9%', openai: '2,5%', assembly: '3,0%' },
          { metric: 'Latencia', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: 'Privacidad', local: '100% local', google: 'Enviado a Google', openai: 'Enviado a OpenAI', assembly: 'Enviado a AssemblyAI' },
          { metric: 'Funciona sin conexión', local: 'Sí', google: 'No', openai: 'No', assembly: 'No' },
          { metric: 'Idiomas', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: 'Configuración', local: '5 minutos', google: 'Clave API', openai: 'Clave API', assembly: 'Clave API' },
        ],
        note: 'Costo mensual (8 horas/día): Whisper local $0, Google $345, OpenAI $86, AssemblyAI $156. Los precios pueden variar según tu país. Para trabajo sensible a la privacidad (médico, legal, periodismo), Whisper local es la única opción. Para transcripción de alto volumen (más de $100/mes en la nube), un Mac local se amortiza en 12 meses.'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Whisper es más rápido que las APIs en la nube?', a: 'Local en M5 Pro: 10× tiempo real (latencia 100ms). APIs en la nube: 100–500ms de latencia por la red. El local es más rápido y gratuito.' },
          { q: '¿Puede Whisper manejar múltiples hablantes?', a: 'Sí, las marcas de tiempo separan a los hablantes. Usa herramientas de post-procesamiento o diarización para identificar la identidad de cada hablante.' },
          { q: '¿Qué idiomas admite?', a: '99 idiomas con detección automática. La precisión varía según el idioma: inglés al 2,5% WER, otros idiomas al 5–15% WER.' },
          { q: '¿Qué modelo Whisper tiene la mejor relación velocidad/calidad?', a: 'Large-v3-turbo o distil-large-v3. Ambos logran ~95% de la precisión de large-v3 a 4–6× la velocidad. Recomendados para la mayoría de los casos de uso en tiempo real.' },
          { q: '¿Puede Whisper manejar inglés con acento o hablantes no nativos?', a: 'Sí, pero el WER aumenta. Inglés nativo: ~2,5%. Acento fuerte/no nativo: 5–12%. Large-v3 maneja mejor los acentos que los modelos más pequeños.' },
          { q: '¿Funciona Whisper para podcasts y transcripción de música?', a: 'Podcasts: sí, excelente para contenido hablado. Música con letra: deficiente — Whisper está entrenado para voz. Usa modelos especializados para música.' },
          { q: '¿Qué tan preciso es Whisper con terminología técnica?', a: 'Variable. Términos técnicos comunes: bueno. Términos muy especializados: puede transcribir incorrectamente. Usa la opción --prompt con el vocabulario esperado para mejorar la precisión.' },
          { q: '¿Puedo ejecutar múltiples instancias de Whisper en un Mac?', a: 'Sí, limitado por la memoria. M5 Pro 36GB: 2 instancias de large-v3 simultáneas. M5 Max 128GB: 4–6 instancias o una instancia más LLM/TTS.' },
        ]
      },
      related: {
        id: 'related',
        title: 'Artículos relacionados',
        items: [
          '[Apple Silicon para LLMs locales: Guía completa](/es/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/es/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Comparativa Whisper STT local (whisper.cpp vs faster-whisper)](/es/power-local-llm/local-whisper-stt-comparison-2026)',
          '[Construir un asistente de voz local](/es/power-local-llm/build-local-voice-assistant-2026)',
          '[TTS local y clonación de voz](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server)',
          '[¿Cuánta memoria unificada necesitas para LLMs locales?](/es/local-llms/how-much-unified-memory-for-local-llm)',
          '[Pipeline multimodal local](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper en Apple Silicon 2026: Benchmarks Metal, Configuración Core ML',
      description: 'Whisper en Mac: benchmarks GPU Metal M1–M5, configuración, transcripción rápida sin GPU externa.',
      url: 'https://www.promptquorum.com/es/local-llms/apple-silicon-whisper-metal-benchmark?lang=es',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper no Apple Silicon 2026: benchmarks Metal, configuração Core ML, guia M1-M5',
    seoTitle: 'Whisper STT no Apple Silicon 2026: benchmarks Metal M1-M5',
    intro: 'Whisper de reconhecimento de voz no Apple Silicon: benchmarks de Metal e Core ML para M1 até M5 Max. Guia de configuração, seleção de modelo e transcrição em tempo real.',
    metaDescription: 'Whisper no Mac: benchmarks GPU Metal M1-M5, configuração, transcrição em tempo real. Large-v3 roda a 10× tempo real no M5 Pro. Guia Core ML.',
    twitterDescription: 'Whisper no M5 Pro: large-v3 a 10× tempo real via Metal. Benchmarks, configuração Core ML, guia STT em tempo real.',
    publishDate: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: 'Usuários de Mac que implementam reconhecimento de voz de forma local.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', 'reconhecimento de voz local', 'transcrição em tempo real', 'benchmarks Apple Silicon'],
    leadAnswerBlock: '**Whisper large-v3 no M5 Pro: 10-12× tempo real. GPU Metal automático. Large-v3-turbo equilibra velocidade + precisão a 14-18×. Sem custo, totalmente offline.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      pt: {
        question: 'Qual é a velocidade do Whisper no Mac?', // VERIFY
        answer: 'Whisper tiny: 48–60× tempo real. Small: 22–34× tempo real. Large-v3: 5–14× tempo real (M1→M5 Pro). Large-v3-turbo: 14–18× tempo real no M5 base.', // VERIFY
        bullets: ['Tiny: 48–60× tempo real (rápido, menor precisão)', 'Small: 22–34× tempo real (equilibrado)', 'Large-v3-turbo: 14–18× tempo real (melhor velocidade/qualidade)', 'Large-v3: 5–14× tempo real (melhor precisão)', 'Aceleração por GPU Metal automática', 'Custo zero, totalmente offline'], // VERIFY
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Tabela de benchmarks completa (M1-M5)', anchor: '#table' },
      { label: 'Tamanhos de modelos Whisper', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'Configuração: whisper.cpp', anchor: '#setup' },
      { label: 'Streaming em tempo real', anchor: '#realtime' },
      { label: 'Pipeline de assistente de voz', anchor: '#integration' },
      { label: 'Melhor configuração por Mac', anchor: '#model-choice' },
      { label: 'STT local vs nuvem', anchor: '#cloud-comparison' },
      { label: 'Pontos-chave', anchor: '#faq' },
      { label: 'Artigos relacionados', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: 'Tabela de benchmarks completa: desempenho do Whisper no Apple Silicon (M1-M5)',
        tableFormat: true,
        columns: ['Chip', 'Tiny', 'Base', 'Small', 'Medium', 'Large-v3'],
        rows: [
          { chip: 'M1', tiny: '32×', base: '20×', small: '12×', medium: '5×', large: '2-3×' },
          { chip: 'M1 Pro', tiny: '38×', base: '24×', small: '16×', medium: '7×', large: '3-4×' },
          { chip: 'M1 Max', tiny: '45×', base: '30×', small: '22×', medium: '10×', large: '5-6×' },
          { chip: 'M2', tiny: '36×', base: '23×', small: '14×', medium: '6×', large: '3-4×' },
          { chip: 'M3', tiny: '40×', base: '26×', small: '16×', medium: '7×', large: '3-4×' },
          { chip: 'M4', tiny: '44×', base: '30×', small: '18×', medium: '8×', large: '4-5×' },
          { chip: 'M5 Pro', tiny: '55×', base: '40×', small: '30×', medium: '14×', large: '10-12×' },
          { chip: 'M5 Max', tiny: '65×', base: '48×', small: '38×', medium: '18×', large: '12-14×' },
        ],
        note: '×N tempo real = N segundos de áudio transcritos em 1 segundo. Benchmarks via whisper.cpp com aceleração Metal.',
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tamanhos de modelos Whisper: qual você deve usar?',
        tableFormat: true,
        columns: ['Modelo', 'Parâmetros', 'Tamanho em disco', 'Uso de RAM', 'WER em inglês', 'Ideal para'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7,6%', bestFor: 'Tempo real, menor precisão' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5,0%', bestFor: 'Tempo real em Macs mais antigos' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3,4%', bestFor: 'Equilíbrio velocidade/qualidade' },
          { model: 'medium', params: '769M', disk: '1,5 GB', ram: '~5 GB', wer: '2,9%', bestFor: 'Alta qualidade, mais lento' },
          { model: 'large-v3', params: '1,55B', disk: '3,0 GB', ram: '~10 GB', wer: '2,5%', bestFor: 'Precisão máxima' },
          { model: 'large-v3-turbo', params: '809M', disk: '1,6 GB', ram: '~6 GB', wer: '2,7%', bestFor: 'Melhor equilíbrio velocidade/qualidade' },
        ],
        note: 'O português brasileiro (pt-BR) é suportado com WER de aproximadamente 3-6%. Large-v3-turbo recomendado para maioria dos casos de uso em tempo real.',
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine: qual backend escolher?',
        items: [
          'Metal (whisper.cpp): Mais rápido, ampla compatibilidade, configuração mais simples. Recomendado para a maioria dos usuários.',
          'Core ML: Otimização com Neural Engine, ganho de velocidade de 15-20% em algumas cargas (requer conversão do modelo).',
          'Apple Neural Engine: Benefício limitado para modelos grandes, ideal para tiny/base em laptops com bateria.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuração: whisper.cpp com aceleração Metal',
        numberedItems: [
          { title: 'Instalar dependências', whyItMatters: 'xcode-select --install\nbrew install ffmpeg' },
          { title: 'Clonar e compilar whisper.cpp com Metal', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1' },
          { title: 'Baixar um modelo', whyItMatters: 'bash ./models/download-ggml-model.sh large-v3-turbo' },
          { title: 'Transcrever um arquivo de áudio', whyItMatters: './main -m models/ggml-large-v3-turbo.bin -f audio.wav -l pt' },
        ],
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Melhor configuração do Whisper por modelo de Mac',
        tableFormat: true,
        columns: ['Configuração Mac', 'Modelo recomendado', 'Múltiplo de tempo real', 'Caso de uso'],
        rows: [
          { config: 'M1/M2 base', model: 'small', realtime: '12-14×', useCase: 'Transcrição leve em português' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12-15×', useCase: 'Melhor qualidade, ainda rápido' },
          { config: 'M5 Pro 36-64 GB', model: 'large-v3', realtime: '10-12×', useCase: 'Precisão máxima em português' },
          { config: 'M5 Max 128 GB', model: 'large-v3 + LLM + TTS', realtime: '12-14×', useCase: 'Stack multimodal completo' },
        ],
        note: 'Para conformidade com LGPD: transcrição local garante que dados de áudio sensíveis nunca saiam da organização.',
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'Whisper local vs serviços de transcrição na nuvem',
        tableFormat: true,
        columns: ['Métrica', 'Whisper local (M5 Pro)', 'Google Speech-to-Text', 'OpenAI Whisper API'],
        rows: [
          { metric: 'Custo por hora de áudio', local: 'R$ 0', google: '~R$ 7,20', openai: '~R$ 1,80' },
          { metric: 'Precisão (WER em português)', local: '3-6%', google: '5-8%', openai: '3-6%' },
          { metric: 'Privacidade / LGPD', local: '100% local', google: 'Enviado ao Google', openai: 'Enviado à OpenAI' },
          { metric: 'Funciona offline', local: 'Sim', google: 'Não', openai: 'Não' },
          { metric: 'Idiomas', local: '99', google: '125+', openai: '99' },
        ],
        note: 'Para conformidade com a LGPD e proteção de dados sensíveis (médico, jurídico, financeiro), o Whisper local é a única opção que garante que os dados de áudio nunca saiam da organização.',
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'O Whisper funciona bem em português?', a: 'Sim. O português (Brasil e Portugal) é um dos idiomas com melhor suporte. WER típico: 3-5% para português padrão, 5-10% para sotaques regionais. Especifique o idioma com -l pt para melhor desempenho.' },
          { q: 'O Whisper local é mais rápido que as APIs na nuvem?', a: 'Local no M5 Pro: 10× tempo real (latência 100ms). APIs na nuvem: 100-500ms de latência pela rede. O local é mais rápido e gratuito.' },
          { q: 'Qual modelo Whisper tem o melhor equilíbrio velocidade/qualidade?', a: 'Large-v3-turbo. Atinge ~95% da precisão do large-v3 a 4-6× a velocidade. Recomendado para a maioria dos casos de uso em tempo real.' },
          { q: 'Posso usar o Whisper local para conformidade com a LGPD?', a: 'Sim. O Whisper rodando localmente garante que nenhum dado de áudio seja enviado a servidores externos. Ideal para prontuários médicos, processos jurídicos e dados financeiros sob a LGPD (Lei nº 13.709/2018).' },
        ],
      },
      related: {
        id: 'related',
        title: 'Artigos relacionados',
        items: [
          '[Apple Silicon para LLMs locais: guia completo](/pt/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Construir um assistente de voz local](/pt/power-local-llm/build-local-voice-assistant-2026)',
          '[Mac Mini M5 como servidor de IA local](/pt/local-llms/mac-mini-m5-local-ai-server)',
          '[Quanta memória unificada você precisa para LLMs locais?](/pt/local-llms/how-much-unified-memory-for-local-llm)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper no Apple Silicon 2026: benchmarks Metal, configuração Core ML',
      description: 'Whisper no Mac: benchmarks GPU Metal M1-M5, configuração, transcrição rápida sem GPU externa.',
      url: 'https://www.promptquorum.com/pt/local-llms/apple-silicon-whisper-metal-benchmark',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper auf Apple Silicon 2026: Metal-Benchmarks, Core-ML-Setup, M1–M5-Geschwindigkeitsleitfaden',
    seoTitle: 'Whisper STT auf Apple Silicon 2026: Metal Benchmarks M1–M5',
    intro: 'Whisper Spracherkennung auf Apple Silicon: Metal- und Core-ML-Benchmarks für M1 bis M5 Max. Setup-Anleitung, Modellauswahl, Echtzeit-Transkription.',
    metaDescription: 'Whisper auf Mac: Metal GPU Benchmarks M1–M5, Setup, Echtzeit-Transkription. Large-v3 läuft 10× Realzeit auf M5 Pro. Core ML Anleitung.',
    twitterDescription: 'Whisper auf M5 Pro: large-v3 mit 10× Realzeit via Metal. Benchmarks, Core-ML-Setup, Echtzeit-STT-Anleitung.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: 'Mac-Benutzer, die Spracherkennung lokal implementieren.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', 'Spracherkennung lokal', 'Echtzeit-Transkription', 'Apple-Silicon-Benchmarks'],
    leadAnswerBlock: '**Whisper large-v3 auf M5 Pro: 10–12× Realzeit. Metal GPU automatisch. Large-v3-turbo balanciert Geschwindigkeit + Genauigkeit mit 14–18×. Kostenlos, vollständig offline.**',
    quickAnswerTop: {
      en: {
        question: 'How fast is Whisper on Mac?',
        answer: 'Whisper tiny: 48–60× real-time. Small: 22–34× real-time. Large-v3: 5–14× real-time (M1→M5 Pro). Large-v3-turbo: 14–18× real-time on M5 base.',
        bullets: ['Tiny: 48–60× real-time (fast, lower accuracy)', 'Small: 22–34× real-time (balanced)', 'Large-v3-turbo: 14–18× real-time (best speed/quality)', 'Large-v3: 5–14× real-time (best accuracy)', 'Metal GPU acceleration automatic', 'Zero cost, fully offline'],
        updatedDate: '2026-05-15',
      },
      de: {
        question: 'Wie schnell ist Whisper auf dem Mac?',
        answer: 'Whisper tiny: 48–60× Realzeit. Small: 22–34× Realzeit. Large-v3: 5–14× Realzeit (M1→M5 Pro). Large-v3-turbo: 14–18× Realzeit auf M5 Basis.',
        bullets: ['Tiny: 48–60× Realzeit (schnell, niedrigere Genauigkeit)', 'Small: 22–34× Realzeit (ausgeglichen)', 'Large-v3-turbo: 14–18× Realzeit (beste Geschwindigkeit/Qualität)', 'Large-v3: 5–14× Realzeit (beste Genauigkeit)', 'Metal-GPU-Beschleunigung automatisch', 'Kostenlos, vollständig offline'],
        updatedDate: '2026-05-15',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Vollständige Benchmark-Tabelle (M1–M5)', anchor: '#table' },
      { label: 'Whisper-Modellgrößen', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'Setup: whisper.cpp', anchor: '#setup' },
      { label: 'Echtzeit-Streaming', anchor: '#realtime' },
      { label: 'Voice-Assistant-Pipeline', anchor: '#integration' },
      { label: 'Beste Konfiguration nach Mac', anchor: '#model-choice' },
      { label: 'Lokal vs Cloud STT', anchor: '#cloud-comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Verwandte Artikel', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: 'Vollständige Benchmark-Tabelle: Whisper-Performance auf Apple Silicon (M1–M5)',
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
        note: '×N Realzeit = N Sekunden Audio in 1 Sekunde transkribiert. Benchmarks via whisper.cpp mit Metal-Beschleunigung. Alle M1 Pro+ können large-v3 in Realzeit oder schneller ausführen.'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Whisper-Modellgrößen – Welches sollten Sie wählen?',
        tableFormat: true,
        columns: ['Modell', 'Parameter', 'Festplattengröße', 'RAM-Verwendung', 'Englisch WER', 'Am besten für'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7,6%', bestFor: 'Echtzeit, niedrigere Genauigkeit' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5,0%', bestFor: 'Echtzeit auf älteren Macs' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3,4%', bestFor: 'Ausgeglichene Geschwindigkeit/Qualität' },
          { model: 'medium', params: '769M', disk: '1,5 GB', ram: '~5 GB', wer: '2,9%', bestFor: 'Hohe Qualität, langsamer' },
          { model: 'large-v3', params: '1,55B', disk: '3,0 GB', ram: '~10 GB', wer: '2,5%', bestFor: 'Beste Genauigkeit' },
          { model: 'large-v3-turbo', params: '809M', disk: '1,6 GB', ram: '~6 GB', wer: '2,7%', bestFor: 'Beste Geschwindigkeit/Qualität-Balance' },
          { model: 'distil-large-v3', params: '756M', disk: '1,5 GB', ram: '~5 GB', wer: '2,6%', bestFor: '6× schneller als large-v3' },
        ],
        note: 'WER (Word Error Rate) im LibriSpeech-Testsatz auf Englisch. Large-v3-turbo und distil-large-v3 sind das ideale Gleichgewicht für Echtzeit auf den meisten Macs — nahezu large-v3-Qualität mit 4–6× Geschwindigkeit.'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine: Welches Backend?',
        content: [
          'Apple Silicon bietet drei Beschleunigungswege für Whisper. Jedes hat Nachteile.',
          '',
          'Metal (via whisper.cpp) – Empfohlen: Nutzt Apple Metal GPU Framework, kompatibel mit allen M-Series-Chips, 10–12× Realzeit auf large-v3 (M5 Pro), Setup via make WHISPER_METAL=1. Am besten für: die meisten Benutzer, einfachstes Setup, bewährte Performance.',
          '',
          'Core ML (via Apple Core ML Format) – Fortgeschritten: Nutzt Apple Machine-Learning-Framework, kann Neural Engine (ANE) für einige Operationen ansprechen, 15–20% schneller bei einigen Workloads, erfordert Modellkonvertierung (10–15 Min. Setup). Am besten für: Power-Benutzer, die maximale Geschwindigkeit wollen.',
          '',
          'Apple Neural Engine (ANE) – Begrenzte Verwendung: Dedizierter KI-Beschleuniger auf allen M-Series-Chips, nicht direkt zugänglich (muss über Core ML laufen), Whisper nutzt ANE nicht vollständig aufgrund von Architektur-Inkompatibilität, funktioniert am besten bei kleinen Modellen (tiny, base). Am besten für: tiny/base Whisper auf batteriegestützten Laptops.',
          '',
          'Entscheidungsmatrix: Erstes Setup → Metal (whisper.cpp). Maximale Geschwindigkeit auf large-v3 → Metal (whisper.cpp). Akku-Laptop, Base-Modell → Core ML mit ANE. Produktionsserver → Metal (bewährt, zuverlässig). Echtzeit-Transkription → Metal mit Streaming-Modus. Cloud-Deployment auf Mac-Instanzen → Metal (containerisierbar).'
        ],
        items: [
          'Metal (whisper.cpp): Schneller, weit verbreitet kompatibel, einfachstes Setup',
          'Core ML: Neural Engine Optimierung, 15–20% Geschwindigkeitszugewinn bei einigen Workloads (erfordert Konvertierung)',
          'Apple Neural Engine: Begrenzte Vorteile für große Modelle, am besten für tiny/base auf Laptops'
        ]
      },
      setup: {
        id: 'setup',
        title: 'Setup: whisper.cpp mit Metal-Beschleunigung',
        numberedItems: [
          { title: 'Abhängigkeiten installieren', whyItMatters: 'xcode-select --install (Xcode-Tools)\nbrew install ffmpeg (Audio-Konvertierung)' },
          { title: 'whisper.cpp mit Metal klonen und bauen', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: 'Ein Modell herunterladen', whyItMatters: 'bash ./models/download-ggml-model.sh small (466 MB, Echtzeit)\nbash ./models/download-ggml-model.sh large-v3 (3 GB, beste Qualität)\nbash ./models/download-ggml-model.sh large-v3-turbo (1,6 GB, ausgeglichen)' },
          { title: 'Eine Audiodatei transkribieren', whyItMatters: './main -m models/ggml-large-v3.bin -f /path/to/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj (JSON)\n./main -m models/ggml-large-v3.bin -f audio.wav -l en (Sprache angeben)' },
          { title: 'Nicht-WAV-Audio zuerst konvertieren', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: 'Echtzeit-Streaming-Transkription (Live-Mikrofon)',
        content: [
          'Für Live-Transkription vom Mikrofon – Sprachassistenten, Meeting-Transkription, Barrierefreiheits-Tools.',
          '',
          'Option 1: whisper.cpp Stream-Modus',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: verarbeite alle 500ms',
          '# --length 5000: behalte letzte 5 Sekunden Kontext',
          '',
          'Option 2: Python mit faster-whisper (siehe Code-Block unten)',
          '',
          'Latenz auf M5 Pro: small-Modell ~200ms, large-v3-turbo ~400–600ms, large-v3 ~800ms–1,2s hinter Realzeit.'
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
        title: 'Voice-Assistant-Pipeline: Whisper + Ollama + Piper TTS',
        content: 'Vollständiger Code für einen lokalen Sprachassistenten, der vollständig auf Apple Silicon läuft.',
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
        note: 'Performance auf M5 Pro: STT 300ms, LLM 700ms, TTS 200ms. Gesamtes Ende-zu-Ende: ~1,2 Sekunden.'
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Beste Whisper-Konfiguration nach Mac-Modell',
        tableFormat: true,
        columns: ['Mac-Konfiguration', 'Empfohlenes Modell', 'Realzeit-Mehrfach', 'Use Case'],
        rows: [
          { config: 'M1/M2 Basis 8GB', model: 'small', realtime: '12–14×', useCase: 'Leichte Transkription' },
          { config: 'M1/M2 Basis 16GB', model: 'small oder distil-large-v3', realtime: '8–15×', useCase: 'Allgemeine Verwendung' },
          { config: 'M3/M4 Basis', model: 'distil-large-v3', realtime: '12–15×', useCase: 'Bessere Qualität, immer noch schnell' },
          { config: 'M5 Basis 32GB', model: 'large-v3-turbo', realtime: '14–18×', useCase: 'Geschwindigkeit + Qualität' },
          { config: 'M5 Pro 36–64GB', model: 'large-v3', realtime: '10–12×', useCase: 'Maximale Genauigkeit' },
          { config: 'M5 Pro + gleichzeitiges LLM', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: 'Sprachassistent' },
          { config: 'M5 Max 128GB', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: 'Vollständiger Multi-Modal-Stack' },
        ],
        note: 'Für Echtzeit-Sprachassistenten: Verwenden Sie small oder large-v3-turbo für niedrigste Latenz. Für Meeting-/Podcast-Transkription: Verwenden Sie large-v3 für maximale Genauigkeit (1–2 Sekunden Verzögerung akzeptabel).'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'Lokal Whisper vs Cloud Speech-to-Text Services',
        tableFormat: true,
        columns: ['Metrik', 'Whisper Lokal (M5 Pro)', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: 'Kosten pro Stunde Audio', local: '0 €', google: '1,44 €', openai: '0,36 €', assembly: '0,65 €' },
          { metric: 'Genauigkeit (Englisch WER)', local: '2,5%', google: '4,9%', openai: '2,5%', assembly: '3,0%' },
          { metric: 'Latenz', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: 'Datenschutz', local: '100% lokal', google: 'An Google gesendet', openai: 'An OpenAI gesendet', assembly: 'An AssemblyAI gesendet' },
          { metric: 'Offline möglich', local: 'Ja', google: 'Nein', openai: 'Nein', assembly: 'Nein' },
          { metric: 'Sprachen', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: 'Setup', local: '5 Minuten', google: 'API-Schlüssel', openai: 'API-Schlüssel', assembly: 'API-Schlüssel' },
        ],
        note: 'Monatliche Kosten (8 Stunden/Tag): Whisper lokal 0 €, Google 259 €, OpenAI 65 €, AssemblyAI 117 €. Für datenschutzsensible Arbeit (medizinisch, legal, Journalismus) ist lokal Whisper die einzige Option. Für hochvolumige Transkription (>75 €/Monat Cloud) amortisiert sich ein lokaler Mac in 12 Monaten.'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Ist Whisper schneller als Cloud-APIs?', a: 'Lokal auf M5 Pro: 10× Realzeit (100ms Latenz). Cloud-APIs: 100–500ms Latenz aufgrund von Netzwerk. Lokal ist schneller und kostenlos.' },
          { q: 'Kann Whisper mehrere Sprecher verarbeiten?', a: 'Ja, Zeitstempel trennen Sprecher. Verwenden Sie Post-Processing oder Diarisierungs-Tools, um Sprecheridentität zu identifizieren.' },
          { q: 'Welche Sprachunterstützung gibt es?', a: '99 Sprachen mit Auto-Erkennung. Genauigkeit variiert je nach Sprache – Englisch ist 2,5% WER, andere Sprachen 5–15% WER.' },
          { q: 'Welches Whisper-Modell hat das beste Verhältnis zwischen Geschwindigkeit und Qualität?', a: 'Large-v3-turbo oder distil-large-v3. Beide erreichen ~95% der large-v3 Genauigkeit mit 4–6× Geschwindigkeit. Für die meisten Echtzeit-Use Cases empfohlen.' },
          { q: 'Kann Whisper akzentuiertes Englisch oder Nicht-Muttersprachler handhaben?', a: 'Ja, aber WER steigt. Englisch ohne Akzent: ~2,5%. Starker Akzent/nicht muttersprachlich: 5–12%. Large-v3 handhabe Akzente besser als kleinere Modelle.' },
          { q: 'Funktioniert Whisper für Podcasts und Musiktranskription?', a: 'Podcasts: Ja, hervorragend für gesprochenes Wort. Musik mit Text: schlecht – Whisper wird für Sprache trainiert. Verwenden Sie spezialisierte Modelle für Musik.' },
          { q: 'Wie präzise ist Whisper bei technischer Terminologie?', a: 'Variable. Häufige technische Begriffe: gut. Hochspezialisierte Begriffe: könnten falsch transkribiert werden. Verwenden Sie --prompt-Flag mit erwarteter Vokabeln, um Genauigkeit zu verbessern.' },
          { q: 'Kann ich mehrere Whisper-Instanzen auf einem Mac ausführen?', a: 'Ja, speichergebunden. M5 Pro 36GB: 2 gleichzeitige large-v3 Instanzen. M5 Max 128GB: 4–6 Instanzen oder eine Instanz plus LLM/TTS.' },
        ]
      },
      related: {
        id: 'related',
        title: 'Verwandte Artikel',
        items: [
          '[Apple Silicon für lokale LLMs: Vollständiger Leitfaden](/de/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max Benchmarks 2026](/de/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Lokale Whisper STT Vergleich (whisper.cpp vs faster-whisper)](/de/power-local-llm/local-whisper-stt-comparison-2026)',
          '[Bauen Sie einen lokalen Voice Assistant](/de/power-local-llm/build-local-voice-assistant-2026)',
          '[Lokale TTS und Voice Cloning](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[Mac Mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server)',
          '[Wie viel vereinigte RAM für lokale LLMs?](/de/local-llms/how-much-unified-memory-for-local-llm)',
          '[Lokale Multi-Modal-Pipeline](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Whisper sur Apple Silicon 2026 : Benchmarks Metal, Configuration Core ML, Guide M1–M5',
    seoTitle: 'Whisper STT Apple Silicon 2026 : Benchmarks Metal M1–M5',
    intro: 'Whisper sur Apple Silicon : benchmarks Metal et Core ML de M1 à M5 Max. Guide d\'installation, sélection de modèle, transcription en temps réel.',
    metaDescription: 'Whisper sur Mac : benchmarks GPU Metal M1–M5, configuration, transcription temps réel. Large-v3 10× temps réel sur M5 Pro. Guide Core ML.',
    twitterDescription: 'Whisper sur M5 Pro : large-v3 à 10× temps réel via Metal. Benchmarks, Core ML, guide STT temps réel.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: 'Utilisateurs Mac mettant en œuvre la reconnaissance vocale locale.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', 'reconnaissance vocale locale', 'transcription temps réel', 'benchmarks Apple Silicon'],
    leadAnswerBlock: '**Whisper large-v3 sur M5 Pro : 10–12× temps réel. GPU Metal automatique. Large-v3-turbo équilibre vitesse + précision à 14–18×. Gratuit, entièrement hors ligne.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: {
        question: 'Quelle est la vitesse de Whisper sur Mac ?',
        answer: 'Whisper tiny : 48–60× temps réel. Small : 22–34× temps réel. Large-v3 : 5–14× temps réel (M1→M5 Pro). Large-v3-turbo : 14–18× temps réel sur M5 base.',
        bullets: ['Tiny : 48–60× temps réel (rapide, précision réduite)', 'Small : 22–34× temps réel (équilibré)', 'Large-v3-turbo : 14–18× temps réel (meilleur rapport vitesse/qualité)', 'Large-v3 : 5–14× temps réel (meilleure précision)', 'Accélération GPU Metal automatique', 'Coût zéro, entièrement hors ligne'],
        updatedDate: '2026-05-15',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Tableau de benchmarks complet (M1–M5)', anchor: '#table' },
      { label: 'Tailles des modèles Whisper', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'Installation : whisper.cpp', anchor: '#setup' },
      { label: 'Streaming en temps réel', anchor: '#realtime' },
      { label: 'Pipeline assistant vocal', anchor: '#integration' },
      { label: 'Meilleure configuration par Mac', anchor: '#model-choice' },
      { label: 'STT local vs cloud', anchor: '#cloud-comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles connexes', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: 'Tableau de benchmarks complet : Performance de Whisper sur Apple Silicon (M1–M5)',
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
        note: '×N temps réel = N secondes d\'audio transcrites en 1 seconde. Benchmarks via whisper.cpp avec accélération Metal. Tous les M1 Pro+ peuvent exécuter large-v3 en temps réel ou plus vite.'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tailles des modèles Whisper — Lequel choisir ?',
        tableFormat: true,
        columns: ['Modèle', 'Paramètres', 'Taille disque', 'RAM utilisée', 'WER anglais', 'Idéal pour'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 Go', wer: '7,6%', bestFor: 'Temps réel, précision réduite' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 Go', wer: '5,0%', bestFor: 'Temps réel sur anciens Mac' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 Go', wer: '3,4%', bestFor: 'Équilibre vitesse/qualité' },
          { model: 'medium', params: '769M', disk: '1,5 Go', ram: '~5 Go', wer: '2,9%', bestFor: 'Haute qualité, plus lent' },
          { model: 'large-v3', params: '1,55B', disk: '3,0 Go', ram: '~10 Go', wer: '2,5%', bestFor: 'Meilleure précision' },
          { model: 'large-v3-turbo', params: '809M', disk: '1,6 Go', ram: '~6 Go', wer: '2,7%', bestFor: 'Meilleur équilibre vitesse/qualité' },
          { model: 'distil-large-v3', params: '756M', disk: '1,5 Go', ram: '~5 Go', wer: '2,6%', bestFor: '6× plus rapide que large-v3' },
        ],
        note: 'WER (taux d\'erreur de mots) sur le jeu de test LibriSpeech anglais. Large-v3-turbo et distil-large-v3 sont le meilleur compromis pour le temps réel — qualité proche de large-v3 à 4–6× la vitesse.'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine : Quel backend ?',
        content: [
          'Apple Silicon offre trois chemins d\'accélération pour Whisper. Chacun présente des compromis.',
          '',
          'Metal (via whisper.cpp) — Recommandé : Utilise le framework GPU Apple Metal, compatible avec toutes les puces M, 10–12× temps réel sur large-v3 (M5 Pro), configuration via make WHISPER_METAL=1. Idéal pour : la plupart des utilisateurs, configuration la plus simple, performances éprouvées.',
          '',
          'Core ML (via format Apple Core ML) — Avancé : Utilise le framework d\'apprentissage automatique Apple, peut cibler le Neural Engine (ANE) pour certaines opérations, 15–20% plus rapide sur certaines charges de travail, nécessite une conversion de modèle (10–15 min de configuration). Idéal pour : les utilisateurs avancés recherchant la vitesse maximale.',
          '',
          'Apple Neural Engine (ANE) — Utilisation limitée : Accélérateur IA dédié sur toutes les puces M, non accessible directement (doit passer par Core ML), Whisper n\'exploite pas pleinement l\'ANE en raison d\'incompatibilités architecturales, fonctionne mieux avec les petits modèles (tiny, base). Idéal pour : Whisper tiny/base sur MacBooks sur batterie.',
          '',
          'Matrice de décision : Première configuration → Metal (whisper.cpp). Vitesse maximale sur large-v3 → Metal (whisper.cpp). Laptop sur batterie, modèle base → Core ML avec ANE. Serveur de production → Metal (éprouvé, fiable). Transcription temps réel → Metal avec mode streaming. Déploiement cloud sur instances Mac → Metal (conteneurisable).'
        ],
        items: [
          'Metal (whisper.cpp) : Plus rapide, compatible universellement, configuration la plus simple',
          'Core ML : Optimisation Neural Engine, gain de vitesse de 15–20% sur certaines charges (nécessite conversion)',
          'Apple Neural Engine : Bénéfice limité pour les grands modèles, meilleur pour tiny/base sur laptops'
        ]
      },
      setup: {
        id: 'setup',
        title: 'Installation : whisper.cpp avec accélération Metal',
        numberedItems: [
          { title: 'Installer les dépendances', whyItMatters: 'xcode-select --install (outils Xcode)\nbrew install ffmpeg (conversion audio)' },
          { title: 'Cloner et compiler whisper.cpp avec Metal', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: 'Télécharger un modèle', whyItMatters: 'bash ./models/download-ggml-model.sh small (466 Mo, temps réel)\nbash ./models/download-ggml-model.sh large-v3 (3 Go, meilleure qualité)\nbash ./models/download-ggml-model.sh large-v3-turbo (1,6 Go, équilibré)' },
          { title: 'Transcrire un fichier audio', whyItMatters: './main -m models/ggml-large-v3.bin -f /chemin/vers/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj (JSON)\n./main -m models/ggml-large-v3.bin -f audio.wav -l en (spécifier la langue)' },
          { title: 'Convertir d\'abord l\'audio non-WAV', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: 'Transcription en streaming temps réel (microphone en direct)',
        content: [
          'Pour la transcription en direct depuis le microphone — assistants vocaux, transcription de réunions, outils d\'accessibilité.',
          '',
          'Option 1 : mode stream de whisper.cpp',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: traitement toutes les 500ms',
          '# --length 5000: conserver les 5 dernières secondes de contexte',
          '',
          'Option 2 : Python avec faster-whisper (voir bloc de code ci-dessous)',
          '',
          'Latence sur M5 Pro : modèle small ~200ms, large-v3-turbo ~400–600ms, large-v3 ~800ms–1,2s derrière le temps réel.'
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
        title: 'Pipeline assistant vocal : Whisper + Ollama + Piper TTS',
        content: 'Code complet pour un assistant vocal local fonctionnant entièrement sur Apple Silicon.',
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
        note: 'Performance sur M5 Pro : STT 300ms, LLM 700ms, TTS 200ms. Durée totale de bout en bout : ~1,2 seconde.'
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Meilleure configuration Whisper par modèle de Mac',
        tableFormat: true,
        columns: ['Configuration Mac', 'Modèle recommandé', 'Multiplicateur temps réel', 'Cas d\'usage'],
        rows: [
          { config: 'M1/M2 base 8 Go', model: 'small', realtime: '12–14×', useCase: 'Transcription légère' },
          { config: 'M1/M2 base 16 Go', model: 'small ou distil-large-v3', realtime: '8–15×', useCase: 'Usage général' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12–15×', useCase: 'Meilleure qualité, toujours rapide' },
          { config: 'M5 base 32 Go', model: 'large-v3-turbo', realtime: '14–18×', useCase: 'Vitesse + qualité' },
          { config: 'M5 Pro 36–64 Go', model: 'large-v3', realtime: '10–12×', useCase: 'Précision maximale' },
          { config: 'M5 Pro + LLM simultané', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: 'Assistant vocal' },
          { config: 'M5 Max 128 Go', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: 'Stack multimodal complet' },
        ],
        note: 'Pour un assistant vocal temps réel : utilisez small ou large-v3-turbo pour la latence la plus faible. Pour la transcription de réunions/podcasts : utilisez large-v3 pour une précision maximale (délai de 1–2 secondes acceptable).'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'Whisper local vs services cloud de transcription',
        tableFormat: true,
        columns: ['Métrique', 'Whisper local (M5 Pro)', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: 'Coût par heure audio', local: '0 €', google: 'env. 1,35 €', openai: 'env. 0,34 €', assembly: 'env. 0,61 €' },
          { metric: 'Précision (WER anglais)', local: '2,5%', google: '4,9%', openai: '2,5%', assembly: '3,0%' },
          { metric: 'Latence', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: 'Confidentialité', local: '100% local', google: 'Envoyé à Google', openai: 'Envoyé à OpenAI', assembly: 'Envoyé à AssemblyAI' },
          { metric: 'Hors ligne possible', local: 'Oui', google: 'Non', openai: 'Non', assembly: 'Non' },
          { metric: 'Langues', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: 'Configuration', local: '5 minutes', google: 'Clé API', openai: 'Clé API', assembly: 'Clé API' },
        ],
        note: 'Coût mensuel (8 heures/jour) : Whisper local 0 €, Google env. 325 €, OpenAI env. 82 €, AssemblyAI env. 147 €. Pour les travaux sensibles (médical, juridique, journalisme), Whisper local est la seule option. Pour une transcription à fort volume (plus de 80 €/mois en cloud), un Mac local est rentabilisé en 12 mois.'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Whisper est-il plus rapide que les API cloud ?', a: 'Whisper local sur M5 Pro : 10× temps réel (latence 100ms). API cloud : latence 100–500ms due au réseau. Le local est plus rapide et gratuit.' },
          { q: 'Whisper peut-il gérer plusieurs locuteurs ?', a: 'Oui, les horodatages séparent les locuteurs. Utilisez des outils de post-traitement ou de diarisation pour identifier les identités des locuteurs.' },
          { q: 'Quelles langues sont supportées ?', a: '99 langues avec détection automatique. La précision varie selon la langue — anglais à 2,5% WER, autres langues à 5–15% WER.' },
          { q: 'Quel modèle Whisper offre le meilleur rapport vitesse/qualité ?', a: 'Large-v3-turbo ou distil-large-v3. Les deux atteignent ~95% de la précision de large-v3 à 4–6× la vitesse. Recommandés pour la plupart des cas d\'usage temps réel.' },
          { q: 'Whisper gère-t-il l\'anglais accentué ou les locuteurs non natifs ?', a: 'Oui, mais le WER augmente. Anglais natif : ~2,5%. Fort accent/non natif : 5–12%. Large-v3 gère mieux les accents que les petits modèles.' },
          { q: 'Whisper fonctionne-t-il pour les podcasts et la transcription musicale ?', a: 'Podcasts : oui, excellent pour la parole. Musique avec paroles : médiocre — Whisper est entraîné pour la parole. Utilisez des modèles spécialisés pour la musique.' },
          { q: 'Quelle est la précision de Whisper pour la terminologie technique ?', a: 'Variable. Termes techniques courants : bonne. Termes très spécialisés : risque de transcription incorrecte. Utilisez --prompt avec le vocabulaire attendu pour améliorer la précision.' },
          { q: 'Puis-je exécuter plusieurs instances Whisper sur un Mac ?', a: 'Oui, limité par la mémoire. M5 Pro 36 Go : 2 instances large-v3 simultanées. M5 Max 128 Go : 4–6 instances ou une instance plus LLM/TTS.' },
        ]
      },
      related: {
        id: 'related',
        title: 'Articles connexes',
        items: [
          '[Apple Silicon pour les LLM locaux : Guide complet](/fr/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Benchmarks M5 Pro vs M5 Max 2026](/fr/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[Comparaison STT Whisper local (whisper.cpp vs faster-whisper)](/fr/power-local-llm/local-whisper-stt-comparison-2026)',
          '[Créer un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026)',
          '[TTS local et clonage vocal](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[Mac Mini M5 comme serveur IA local](/fr/local-llms/mac-mini-m5-local-ai-server)',
          '[Quelle quantité de mémoire unifiée pour les LLM locaux ?](/fr/local-llms/how-much-unified-memory-for-local-llm)',
          '[Pipeline multimodal local](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon上のWhisper 2026：MetalベンチマークとCore ML設定、M1–M5速度ガイド',
    seoTitle: 'Apple Silicon Whisper 2026：Metal ベンチマーク',
    intro: 'Apple Silicon上のWhisper音声認識：M1からM5 MaxのMetalおよびCore MLベンチマーク。セットアップガイド、モデル選択、リアルタイム文字起こし。',
    metaDescription: 'Whisper on Mac：Metal GPU ベンチマーク M1–M5、セットアップ、リアルタイム文字起こし。Large-v3は M5 Pro で10×リアルタイム実行。Core MLガイド、モデル選択、実装手順。',
    twitterDescription: 'M5 Pro上のWhisper：Metalで large-v3 が10×リアルタイム。ベンチマーク、Core ML設定、リアルタイムSTTガイド。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: '音声認識をローカルで実装するMacユーザー。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', '音声認識 ローカル', 'リアルタイム文字起こし', 'Apple Siliconベンチマーク'],
    leadAnswerBlock: '**M5 Pro上のWhisper large-v3：10–12×リアルタイム。Metal GPU自動。Large-v3-turboは14–18×で速度＋精度を両立。無料、完全オフライン。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: {
        question: 'MacでWhisperはどれくらい速いですか？',
        answer: 'Whisper tiny：48–60×リアルタイム。Small：22–34×。Large-v3：5–14×（M1→M5 Pro）。Large-v3-turbo：M5 baseで14–18×リアルタイム。',
        bullets: ['Tiny：48–60×リアルタイム（高速、精度低め）', 'Small：22–34×リアルタイム（バランス型）', 'Large-v3-turbo：14–18×リアルタイム（最高の速度/品質比）', 'Large-v3：5–14×リアルタイム（最高精度）', 'Metal GPU加速は自動', 'コスト0円、完全オフライン'],
        updatedDate: '2026-05-15',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: '完全ベンチマーク表（M1–M5）', anchor: '#table' },
      { label: 'Whisperモデルサイズ', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: 'セットアップ：whisper.cpp', anchor: '#setup' },
      { label: 'リアルタイムストリーミング', anchor: '#realtime' },
      { label: '音声アシスタントパイプライン', anchor: '#integration' },
      { label: 'Macモデル別最適設定', anchor: '#model-choice' },
      { label: 'ローカルvsクラウドSTT', anchor: '#cloud-comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: '完全ベンチマーク表：Apple Silicon（M1–M5）上のWhisperパフォーマンス',
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
        note: '×Nリアルタイム = 1秒でN秒分の音声を文字起こし。Metal加速付きwhisper.cppによるベンチマーク。M1 Pro以降のすべてのモデルでlarge-v3をリアルタイム以上で実行可能。'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Whisperモデルサイズ — どれを選ぶべきか？',
        tableFormat: true,
        columns: ['モデル', 'パラメータ数', 'ディスク容量', 'RAM使用量', '英語WER', '最適用途'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7.6%', bestFor: 'リアルタイム、精度低め' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5.0%', bestFor: '旧MacでのリアルタイムSTT' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3.4%', bestFor: '速度/品質バランス型' },
          { model: 'medium', params: '769M', disk: '1.5 GB', ram: '~5 GB', wer: '2.9%', bestFor: '高品質、処理が遅め' },
          { model: 'large-v3', params: '1.55B', disk: '3.0 GB', ram: '~10 GB', wer: '2.5%', bestFor: '最高精度' },
          { model: 'large-v3-turbo', params: '809M', disk: '1.6 GB', ram: '~6 GB', wer: '2.7%', bestFor: '最高の速度/品質バランス' },
          { model: 'distil-large-v3', params: '756M', disk: '1.5 GB', ram: '~5 GB', wer: '2.6%', bestFor: 'large-v3より6×高速' },
        ],
        note: 'WER（単語誤り率）は英語LibriSpeechテストセットによる。Large-v3-turboとdistil-large-v3はほとんどのMacでリアルタイム処理の最適バランス — large-v3品質の4–6×の速度。'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine：どのバックエンドを使うか？',
        content: [
          'Apple SiliconはWhisperに3つの加速経路を提供します。それぞれトレードオフがあります。',
          '',
          'Metal（whisper.cpp経由）— 推奨：Apple Metal GPUフレームワークを使用、すべてのMシリーズチップに対応、large-v3でM5 Proにて10–12×リアルタイム、make WHISPER_METAL=1でセットアップ。最適用途：ほとんどのユーザー、最も簡単なセットアップ、実績のあるパフォーマンス。',
          '',
          'Core ML（Apple Core MLフォーマット経由）— 上級者向け：Apple機械学習フレームワークを使用、一部の処理でNeural Engine（ANE）を活用可能、一部のワークロードで15–20%高速化、モデル変換が必要（10–15分のセットアップ）。最適用途：最高速度を求める上級ユーザー。',
          '',
          'Apple Neural Engine（ANE）— 限定的な用途：すべてのMシリーズチップ搭載の専用AIアクセラレータ、直接アクセス不可（Core ML経由のみ）、アーキテクチャの不一致によりWhisperはANEを十分活用できず、小さいモデル（tiny、base）での使用に限る。最適用途：バッテリー駆動のラップトップでのWhisper tiny/base。',
          '',
          '選択マトリックス：初回セットアップ → Metal（whisper.cpp）。large-v3で最高速度 → Metal。バッテリー駆動ラップトップ、baseモデル → ANE付きCore ML。本番サーバー → Metal（実績あり、信頼性高）。リアルタイム文字起こし → ストリーミングモード付きMetal。MacインスタンスへのCloudデプロイ → Metal（コンテナ化可能）。'
        ],
        items: [
          'Metal（whisper.cpp）：高速、広い互換性、最も簡単なセットアップ',
          'Core ML：Neural Engine最適化、一部のワークロードで15–20%の速度向上（変換が必要）',
          'Apple Neural Engine：大型モデルへの恩恵は限定的、tiny/baseのラップトップ使用に最適'
        ]
      },
      setup: {
        id: 'setup',
        title: 'セットアップ：Metal加速付きwhisper.cpp',
        numberedItems: [
          { title: '依存関係のインストール', whyItMatters: 'xcode-select --install (Xcodeツール)\nbrew install ffmpeg (音声変換)' },
          { title: 'Metal付きwhisper.cppのクローンとビルド', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: 'モデルのダウンロード', whyItMatters: 'bash ./models/download-ggml-model.sh small (466 MB、リアルタイム)\nbash ./models/download-ggml-model.sh large-v3 (3 GB、最高品質)\nbash ./models/download-ggml-model.sh large-v3-turbo (1.6 GB、バランス型)' },
          { title: '音声ファイルの文字起こし', whyItMatters: './main -m models/ggml-large-v3.bin -f /path/to/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj (JSON)\n./main -m models/ggml-large-v3.bin -f audio.wav -l en (言語指定)' },
          { title: '非WAV音声を先に変換', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: 'リアルタイムストリーミング文字起こし（ライブマイク）',
        content: [
          'マイクからのライブ文字起こし — 音声アシスタント、会議文字起こし、アクセシビリティツール向け。',
          '',
          'オプション1：whisper.cppのストリームモード',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: 500msごとに処理',
          '# --length 5000: 直近5秒のコンテキストを保持',
          '',
          'オプション2：faster-whisperを使ったPython（以下のコードブロックを参照）',
          '',
          'M5 Proでの遅延：smallモデル ~200ms、large-v3-turbo ~400–600ms、large-v3 ~800ms–1.2sのリアルタイム遅延。'
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
        title: '音声アシスタントパイプライン：Whisper + Ollama + Piper TTS',
        content: 'Apple Silicon上で完全にローカル動作する音声アシスタントの完全コード。',
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
        note: 'M5 Proでのパフォーマンス：STT 300ms、LLM 700ms、TTS 200ms。エンドツーエンド合計：約1.2秒。'
      },
      modelChoice: {
        id: 'model-choice',
        title: 'Macモデル別の最適Whisper設定',
        tableFormat: true,
        columns: ['Mac設定', '推奨モデル', 'リアルタイム倍率', 'ユースケース'],
        rows: [
          { config: 'M1/M2 base 8GB', model: 'small', realtime: '12–14×', useCase: '軽量な文字起こし' },
          { config: 'M1/M2 base 16GB', model: 'smallまたはdistil-large-v3', realtime: '8–15×', useCase: '一般用途' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12–15×', useCase: '高品質、高速' },
          { config: 'M5 base 32GB', model: 'large-v3-turbo', realtime: '14–18×', useCase: '速度＋品質' },
          { config: 'M5 Pro 36–64GB', model: 'large-v3', realtime: '10–12×', useCase: '最高精度' },
          { config: 'M5 Pro + LLM同時実行', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: '音声アシスタント' },
          { config: 'M5 Max 128GB', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: 'フルマルチモーダルスタック' },
        ],
        note: 'リアルタイム音声アシスタント向け：最低遅延のためsmallまたはlarge-v3-turboを使用。会議/ポッドキャスト文字起こし向け：最高精度のためlarge-v3を使用（1–2秒の遅延は許容範囲）。'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: 'ローカルWhisper vs クラウド音声認識サービス',
        tableFormat: true,
        columns: ['指標', 'Whisperローカル（M5 Pro）', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: '1時間あたりのコスト', local: '0円', google: '約220円', openai: '約55円', assembly: '約100円' },
          { metric: '精度（英語WER）', local: '2.5%', google: '4.9%', openai: '2.5%', assembly: '3.0%' },
          { metric: '遅延', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: 'プライバシー', local: '100%ローカル', google: 'Googleに送信', openai: 'OpenAIに送信', assembly: 'AssemblyAIに送信' },
          { metric: 'オフライン対応', local: 'あり', google: 'なし', openai: 'なし', assembly: 'なし' },
          { metric: '対応言語数', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: 'セットアップ', local: '5分', google: 'APIキー', openai: 'APIキー', assembly: 'APIキー' },
        ],
        note: '月額コスト（1日8時間）：Whisperローカル 0円、Google 約52,000円、OpenAI 約13,000円、AssemblyAI 約23,000円。機密性の高い作業（医療、法律、ジャーナリズム）では、ローカルWhisperが唯一の選択肢。高ボリュームの文字起こし（クラウドで月10,000円以上）の場合、ローカルMacは12ヶ月で元が取れます。'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'WhisperはクラウドAPIより高速ですか？', a: 'M5 Proでローカル動作：10×リアルタイム（遅延100ms）。クラウドAPI：ネットワークによる100–500msの遅延。ローカルの方が高速かつ無料。' },
          { q: 'Whisperは複数の話者に対応できますか？', a: 'はい、タイムスタンプで話者を分離できます。話者のIDを特定するには後処理や話者識別（ダイアライゼーション）ツールを使用してください。' },
          { q: '対応言語はどれくらいですか？', a: '99言語に対応し自動検出。言語によって精度が異なります — 英語は2.5% WER、その他の言語は5–15% WER。' },
          { q: '速度と品質のバランスが最も良いWhisperモデルはどれですか？', a: 'Large-v3-turboまたはdistil-large-v3。どちらもlarge-v3の精度の約95%を4–6×の速度で達成。ほとんどのリアルタイムユースケースで推奨。' },
          { q: 'Whisperはアクセントのある英語や非ネイティブスピーカーに対応していますか？', a: 'はい、ただしWERは上昇します。ネイティブ英語：約2.5%。強いアクセント/非ネイティブ：5–12%。Large-v3は小さいモデルよりもアクセントをより良く処理します。' },
          { q: 'Whisperはポッドキャストや音楽の文字起こしに使えますか？', a: 'ポッドキャスト：はい、音声コンテンツに優れています。歌詞付きの音楽：不向き — Whisperは音声用に学習されています。音楽には専門のモデルを使用してください。' },
          { q: '技術用語に対するWhisperの精度はどのくらいですか？', a: '様々です。一般的な技術用語：良好。高度に専門的な用語：誤文字起こしの可能性があります。精度向上には--promptフラグで想定語彙を指定してください。' },
          { q: '1台のMacで複数のWhisperインスタンスを実行できますか？', a: 'はい、メモリ依存です。M5 Pro 36GB：large-v3インスタンス2つを同時実行可能。M5 Max 128GB：4–6インスタンス、またはLLM/TTSと組み合わせた1インスタンス。' },
        ]
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[ローカルLLM向けApple Silicon：完全ガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Maxベンチマーク 2026](/ja/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[ローカルWhisper STT比較（whisper.cpp vs faster-whisper）](/ja/power-local-llm/local-whisper-stt-comparison-2026)',
          '[ローカル音声アシスタントを構築する](/ja/power-local-llm/build-local-voice-assistant-2026)',
          '[ローカルTTSと音声クローニング](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[ローカルAIサーバーとしてのMac Mini M5](/ja/local-llms/mac-mini-m5-local-ai-server)',
          '[ローカルLLMに必要なユニファイドメモリ量](/ja/local-llms/how-much-unified-memory-for-local-llm)',
          '[ローカルマルチモーダルパイプライン](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-15',
    theme: 'Hardware & Performance',
    title: 'Apple Silicon上的Whisper 2026：Metal基准测试、Core ML设置、M1–M5速度指南',
    seoTitle: 'Apple Silicon Whisper 2026：Metal 基准',
    intro: 'Apple Silicon上的Whisper语音识别：M1到M5 Max的Metal和Core ML基准测试。安装指南、模型选择、实时转录。',
    metaDescription: 'Whisper on Mac：Metal GPU 基准测试 M1–M5、安装、实时转录。Large-v3 在 M5 Pro 上实现10倍实时速度。Core ML 配置指南、模型选择、实现步骤。',
    twitterDescription: 'M5 Pro上的Whisper：large-v3通过Metal实现10×实时速度。基准测试、Core ML设置、实时STT指南。',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Whisper tiny', 'Whisper small', 'Whisper large-v3'],
    current_hardware_mentioned: ['M1', 'M5 Pro', 'M5 Max'],
    audience: '在Mac上本地实现语音识别的用户。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Whisper Apple Silicon STT',
    targetKeywords: ['Whisper Mac', '本地语音识别', '实时转录', 'Apple Silicon基准测试'],
    leadAnswerBlock: '**M5 Pro上的Whisper large-v3：10–12×实时速度。Metal GPU自动启用。Large-v3-turbo以14–18×平衡速度和精度。零成本，完全离线。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: {
        question: 'Whisper在Mac上有多快？',
        answer: 'Whisper tiny：48–60×实时。Small：22–34×实时。Large-v3：5–14×实时（M1→M5 Pro）。Large-v3-turbo：M5 base上14–18×实时。',
        bullets: ['Tiny：48–60×实时（快速，精度较低）', 'Small：22–34×实时（平衡型）', 'Large-v3-turbo：14–18×实时（最佳速度/质量比）', 'Large-v3：5–14×实时（最高精度）', 'Metal GPU加速自动启用', '零成本，完全离线'],
        updatedDate: '2026-05-15',
      },
    },
    toc: [
      { label: '完整基准测试表（M1–M5）', anchor: '#table' },
      { label: 'Whisper模型大小', anchor: '#model-sizes' },
      { label: 'Metal vs Core ML vs ANE', anchor: '#metal-vs-coreml' },
      { label: '安装：whisper.cpp', anchor: '#setup' },
      { label: '实时流式传输', anchor: '#realtime' },
      { label: '语音助手流水线', anchor: '#integration' },
      { label: '按Mac型号的最佳配置', anchor: '#model-choice' },
      { label: '本地STT vs 云端服务', anchor: '#cloud-comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关文章', anchor: '#related' },
    ],
    sections: {
      table: {
        id: 'table',
        title: '完整基准测试表：Apple Silicon（M1–M5）上的Whisper性能',
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
        note: '×N实时 = 1秒内转录N秒音频。通过Metal加速的whisper.cpp基准测试。所有M1 Pro+均可实时或更快运行large-v3。'
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Whisper模型大小 — 应该选哪个？',
        tableFormat: true,
        columns: ['模型', '参数量', '磁盘大小', 'RAM占用', '英语WER', '最适合'],
        rows: [
          { model: 'tiny', params: '39M', disk: '75 MB', ram: '~1 GB', wer: '7.6%', bestFor: '实时转录，精度较低' },
          { model: 'base', params: '74M', disk: '142 MB', ram: '~1 GB', wer: '5.0%', bestFor: '旧Mac上的实时转录' },
          { model: 'small', params: '244M', disk: '466 MB', ram: '~2 GB', wer: '3.4%', bestFor: '速度/质量平衡' },
          { model: 'medium', params: '769M', disk: '1.5 GB', ram: '~5 GB', wer: '2.9%', bestFor: '高质量，速度较慢' },
          { model: 'large-v3', params: '1.55B', disk: '3.0 GB', ram: '~10 GB', wer: '2.5%', bestFor: '最高精度' },
          { model: 'large-v3-turbo', params: '809M', disk: '1.6 GB', ram: '~6 GB', wer: '2.7%', bestFor: '最佳速度/质量平衡' },
          { model: 'distil-large-v3', params: '756M', disk: '1.5 GB', ram: '~5 GB', wer: '2.6%', bestFor: '比large-v3快6×' },
        ],
        note: 'WER（词错误率）基于英语LibriSpeech测试集。Large-v3-turbo和distil-large-v3是大多数Mac实时使用的最佳选择 — 以4–6×的速度实现接近large-v3的质量。'
      },
      metalVsCoreml: {
        id: 'metal-vs-coreml',
        title: 'Metal vs Core ML vs Apple Neural Engine：选择哪个后端？',
        content: [
          'Apple Silicon为Whisper提供三种加速路径，各有权衡。',
          '',
          'Metal（通过whisper.cpp）— 推荐：使用Apple Metal GPU框架，兼容所有M系列芯片，在M5 Pro上large-v3达到10–12×实时，通过make WHISPER_METAL=1设置。最适合：大多数用户，设置最简单，性能经过验证。',
          '',
          'Core ML（通过Apple Core ML格式）— 进阶：使用Apple机器学习框架，某些操作可以利用Neural Engine（ANE），某些工作负载快15–20%，需要模型转换（10–15分钟设置）。最适合：追求最高速度的高级用户。',
          '',
          'Apple Neural Engine（ANE）— 有限使用：所有M系列芯片上的专用AI加速器，无法直接访问（必须通过Core ML），由于架构不匹配Whisper无法充分利用ANE，小模型（tiny、base）效果最好。最适合：电池供电笔记本上的Whisper tiny/base。',
          '',
          '决策矩阵：首次设置 → Metal（whisper.cpp）。large-v3最高速度 → Metal。电池供电笔记本，base模型 → Core ML配合ANE。生产服务器 → Metal（可靠稳定）。实时转录 → 流式模式的Metal。Mac实例的云部署 → Metal（可容器化）。'
        ],
        items: [
          'Metal（whisper.cpp）：更快，兼容性广，设置最简单',
          'Core ML：Neural Engine优化，某些工作负载提速15–20%（需要转换）',
          'Apple Neural Engine：对大型模型收益有限，最适合笔记本上的tiny/base'
        ]
      },
      setup: {
        id: 'setup',
        title: '安装：Metal加速版whisper.cpp',
        numberedItems: [
          { title: '安装依赖', whyItMatters: 'xcode-select --install（Xcode工具）\nbrew install ffmpeg（音频转换）' },
          { title: '克隆并编译Metal版whisper.cpp', whyItMatters: 'git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake WHISPER_METAL=1\n./main -h | grep -i metal' },
          { title: '下载模型', whyItMatters: 'bash ./models/download-ggml-model.sh small（466 MB，实时）\nbash ./models/download-ggml-model.sh large-v3（3 GB，最高质量）\nbash ./models/download-ggml-model.sh large-v3-turbo（1.6 GB，平衡型）' },
          { title: '转录音频文件', whyItMatters: './main -m models/ggml-large-v3.bin -f /path/to/audio.wav\n./main -m models/ggml-large-v3.bin -f audio.wav -oj（JSON格式）\n./main -m models/ggml-large-v3.bin -f audio.wav -l en（指定语言）' },
          { title: '先转换非WAV音频', whyItMatters: 'ffmpeg -i input.mp3 -ar 16000 -ac 1 -c:a pcm_s16le output.wav\n./main -m models/ggml-large-v3.bin -f output.wav' }
        ]
      },
      realtime: {
        id: 'realtime',
        title: '实时流式转录（麦克风直播）',
        content: [
          '从麦克风实时转录 — 语音助手、会议转录、无障碍工具。',
          '',
          '选项1：whisper.cpp流式模式',
          './stream -m models/ggml-small.bin --step 500 --length 5000',
          '# --step 500: 每500ms处理一次',
          '# --length 5000: 保留最近5秒上下文',
          '',
          '选项2：使用faster-whisper的Python（见下方代码块）',
          '',
          'M5 Pro上的延迟：small模型约200ms，large-v3-turbo约400–600ms，large-v3约800ms–1.2s的实时延迟。'
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
        title: '语音助手流水线：Whisper + Ollama + Piper TTS',
        content: '完整代码，构建一个完全在Apple Silicon上本地运行的语音助手。',
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
        note: 'M5 Pro上的性能：STT 300ms，LLM 700ms，TTS 200ms。端到端总计：约1.2秒。'
      },
      modelChoice: {
        id: 'model-choice',
        title: '按Mac型号的最佳Whisper配置',
        tableFormat: true,
        columns: ['Mac配置', '推荐模型', '实时倍率', '使用场景'],
        rows: [
          { config: 'M1/M2 base 8GB', model: 'small', realtime: '12–14×', useCase: '轻量转录' },
          { config: 'M1/M2 base 16GB', model: 'small或distil-large-v3', realtime: '8–15×', useCase: '通用场景' },
          { config: 'M3/M4 base', model: 'distil-large-v3', realtime: '12–15×', useCase: '更高质量，仍然快速' },
          { config: 'M5 base 32GB', model: 'large-v3-turbo', realtime: '14–18×', useCase: '速度+质量' },
          { config: 'M5 Pro 36–64GB', model: 'large-v3', realtime: '10–12×', useCase: '最高精度' },
          { config: 'M5 Pro + 同时运行LLM', model: 'large-v3 + Llama 3.3 8B', realtime: '10×', useCase: '语音助手' },
          { config: 'M5 Max 128GB', model: 'large-v3 + LLM + TTS', realtime: '12–14×', useCase: '完整多模态栈' },
        ],
        note: '实时语音助手：使用small或large-v3-turbo以获得最低延迟。会议/播客转录：使用large-v3以获得最高精度（1–2秒延迟可接受）。'
      },
      cloudComparison: {
        id: 'cloud-comparison',
        title: '本地Whisper vs 云端语音识别服务',
        tableFormat: true,
        columns: ['指标', 'Whisper本地（M5 Pro）', 'Google Speech-to-Text', 'OpenAI Whisper API', 'AssemblyAI'],
        rows: [
          { metric: '每小时音频成本', local: '$0', google: '$1.44', openai: '$0.36', assembly: '$0.65' },
          { metric: '精度（英语WER）', local: '2.5%', google: '4.9%', openai: '2.5%', assembly: '3.0%' },
          { metric: '延迟', local: '100–300ms', google: '300–800ms', openai: '500–2000ms', assembly: '400–1500ms' },
          { metric: '隐私', local: '100%本地', google: '发送至Google', openai: '发送至OpenAI', assembly: '发送至AssemblyAI' },
          { metric: '离线可用', local: '是', google: '否', openai: '否', assembly: '否' },
          { metric: '语言数量', local: '99', google: '125+', openai: '99', assembly: '50+' },
          { metric: '设置', local: '5分钟', google: 'API密钥', openai: 'API密钥', assembly: 'API密钥' },
        ],
        note: '月度成本（每天8小时）：Whisper本地$0，Google $345，OpenAI $86，AssemblyAI $156。对于隐私敏感工作（医疗、法律、新闻），本地Whisper是唯一选择。对于高容量转录（云端每月$100+），本地Mac在12个月内收回成本。'
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Whisper比云端API更快吗？', a: 'M5 Pro本地运行：10×实时（延迟100ms）。云端API：因网络导致100–500ms延迟。本地更快且免费。' },
          { q: 'Whisper能处理多个说话者吗？', a: '是的，时间戳可以分离说话者。使用后处理或说话者识别工具来区分说话者身份。' },
          { q: '支持哪些语言？', a: '99种语言，自动检测。精度因语言而异 — 英语2.5% WER，其他语言5–15% WER。' },
          { q: '哪个Whisper模型的速度/质量比最好？', a: 'Large-v3-turbo或distil-large-v3。两者都以4–6×的速度达到large-v3约95%的精度。推荐用于大多数实时场景。' },
          { q: 'Whisper能处理带口音的英语或非母语说话者吗？', a: '是的，但WER会上升。母语英语：约2.5%。强口音/非母语：5–12%。Large-v3比小模型更好地处理口音。' },
          { q: 'Whisper适用于播客和音乐转录吗？', a: '播客：是的，非常适合语音内容。有歌词的音乐：效果差 — Whisper是为语音训练的。音乐请使用专用模型。' },
          { q: 'Whisper对专业术语的识别精度如何？', a: '因情况而异。常见技术术语：良好。高度专业化术语：可能转录错误。使用--prompt标志指定预期词汇来提高精度。' },
          { q: '我可以在一台Mac上运行多个Whisper实例吗？', a: '是的，受内存限制。M5 Pro 36GB：2个large-v3实例同时运行。M5 Max 128GB：4–6个实例，或一个实例加LLM/TTS。' },
        ]
      },
      related: {
        id: 'related',
        title: '相关文章',
        items: [
          '[本地LLM的Apple Silicon：完整指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)',
          '[M5 Pro vs M5 Max基准测试2026](/zh/local-llms/m5-pro-max-llm-benchmarks-2026)',
          '[本地Whisper STT比较（whisper.cpp vs faster-whisper）](/zh/power-local-llm/local-whisper-stt-comparison-2026)',
          '[构建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026)',
          '[本地TTS和声音克隆](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)',
          '[Mac Mini M5作为本地AI服务器](/zh/local-llms/mac-mini-m5-local-ai-server)',
          '[本地LLM需要多少统一内存？](/zh/local-llms/how-much-unified-memory-for-local-llm)',
          '[本地多模态流水线](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text)',
        ]
      }
    },
  },
}
