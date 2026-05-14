// Power Local LLM — Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper
// Slug: local-whisper-stt-comparison-2026
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
    title: 'Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper — Benchmarks, Setup, GPU Acceleration',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: Local STT Benchmarks & Setup',
    intro:
      'whisper.cpp and faster-whisper are the two dominant implementations of OpenAI\'s Whisper speech-to-text model for local, offline transcription in 2026. whisper.cpp is a pure C/C++ port that runs on Apple Metal, CUDA, Vulkan, and CPU — making it ideal for Apple Silicon, embedded systems, and real-time voice applications. faster-whisper is a Python library using CTranslate2 that achieves ~4× the throughput of the original Whisper on NVIDIA GPUs via int8 quantization. This guide covers installation, performance benchmarks, real-time transcription setup, and a head-to-head comparison across platforms so you can pick the right tool for your pipeline.',
    metaDescription:
      'Compare whisper.cpp and faster-whisper for local speech recognition in 2026. WER benchmarks, GPU vs CPU speed, Apple Silicon Metal, real-time transcription, and setup guides. All offline.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: local speech recognition benchmarks 2026. CPU vs GPU speed, Apple Metal, WER accuracy, real-time transcription. No cloud, no cost.',
    audience:
      'Developers, researchers, and system builders who need offline, private speech-to-text transcription — for meeting notes, voice interfaces, accessibility tools, or secure environments.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local speech-to-text',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'local speech to text 2026',
      'offline speech recognition',
      'whisper local transcription',
      'faster-whisper benchmark',
      'whisper cpp apple silicon',
      'local STT GPU',
      'whisper cpp setup',
    ],
    current_models_mentioned: [
      'Whisper tiny (39M)',
      'Whisper base (74M)',
      'Whisper small (244M)',
      'Whisper medium (769M)',
      'Whisper large-v3 (1.55B)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070',
      'Apple M5 Pro',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
    ],
    leadAnswerBlock:
      '**For Apple Silicon (M-series Macs), whisper.cpp with Metal acceleration is the fastest local STT option in 2026 — large-v3 runs at ~10× real-time on an M5 Pro.** For NVIDIA GPU servers and Python pipelines, faster-whisper with CTranslate2 int8 quantization is the better choice, achieving ~12× real-time on an RTX 4070 with 2.5 GB VRAM for the large-v3 model. Both tools use the same underlying Whisper models from OpenAI (tiny through large-v3); the difference is runtime optimization and integration path. On CPU-only hardware, both are usable for the tiny and base models — faster-whisper has a slight edge (~20× real-time vs. ~15×) on CPU via int8.',
    quickAnswerTop: {
      en: {
        question: 'Should I use whisper.cpp or faster-whisper for local speech-to-text in 2026?',
        answer:
          'The choice depends on your hardware and integration needs. On Apple Silicon (M1–M5), whisper.cpp with Metal acceleration is faster and the natural choice — it achieves ~10× real-time on large-v3 without any Python dependency. On NVIDIA GPUs, faster-whisper is faster and easier to integrate into Python pipelines, running large-v3 at ~12× real-time with 40% less VRAM than whisper.cpp via int8 quantization. On CPU-only hardware, both work for small and base models; faster-whisper has a small speed edge.',
        bullets: [
          'Apple Silicon → whisper.cpp with Core ML / Metal. ~10× real-time on M5 Pro with large-v3.',
          'NVIDIA GPU → faster-whisper. ~12× real-time on RTX 4070 with large-v3 int8, ~2.5 GB VRAM.',
          'Python pipeline → faster-whisper. Native Python, 5-line setup, VAD built in.',
          'Embedded / Raspberry Pi → whisper.cpp. Pure C binary, no Python runtime needed.',
          'Real-time voice → whisper.cpp stream mode or faster-whisper VAD pipeline.',
          'Batch transcription → faster-whisper. Best throughput on GPU; easy async batching.',
          'WER accuracy: both are identical — they use the same Whisper model weights.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Local Speech-to-Text?', anchor: '#why-local-stt' },
      { label: 'Whisper Model Sizes', anchor: '#whisper-model-sizes' },
      { label: 'whisper.cpp — The C/C++ Port', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — The CTranslate2 Port', anchor: '#faster-whisper' },
      { label: 'Head-to-Head Benchmark Table', anchor: '#benchmarks' },
      { label: 'Real-Time Transcription Setup', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp Wins', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper Wins', anchor: '#nvidia-gpu' },
      { label: 'When to Use Which', anchor: '#when-to-use' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp is the best local STT choice for Apple Silicon.** The C/C++ port leverages Core ML and Apple Metal for hardware acceleration — large-v3 at ~10× real-time on M5 Pro, with no Python dependency required.',
          '**faster-whisper is the best local STT choice for NVIDIA GPUs and Python pipelines.** CTranslate2 int8 quantization cuts VRAM by ~40% and boosts throughput by ~4× over the original OpenAI implementation — large-v3 at ~12× real-time on RTX 4070, using only ~2.5 GB VRAM.',
          '**Both tools use identical Whisper model weights from OpenAI.** WER (word error rate) is the same for both — the difference is entirely in runtime performance and integration pathway, not transcription accuracy.',
          '**Whisper large-v3 gives the best accuracy at 2.5% WER on English.** For most production use cases, Whisper small (3.4% WER, 2 GB RAM) or medium (2.9% WER, 5 GB RAM) offers a better speed-accuracy trade-off.',
          '**Real-time transcription is achievable with both tools** — whisper.cpp via its `--stream` flag, faster-whisper via its built-in VAD (voice activity detection) pipeline. Practical latency is 0.5–2 seconds behind live speech depending on model size.',
          '**whisper.cpp runs on CPU, Metal, CUDA, and Vulkan** — making it the only choice for cross-platform embedded use (Raspberry Pi, Windows GPU setups, ARM servers). faster-whisper supports CPU and CUDA only (no Metal on Mac).',
          '**For Raspberry Pi and embedded Linux, whisper.cpp tiny/base on CPU** is the practical ceiling — tiny at ~15× real-time on Pi 5, base at ~6× real-time. Both fit within 1 GB RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Both tools:** Based on OpenAI\'s open-source Whisper model (MIT license). Same accuracy — different runtimes.',
          '**whisper.cpp:** Written in C/C++ by ggerganov. Supports CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. No Python required.',
          '**faster-whisper:** Python library using CTranslate2. Supports CPU (int8) and CUDA. No Apple Metal support.',
          '**Whisper model sizes:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1.55B). All use the same ggml / CTranslate2 format.',
          '**Best model for most use cases:** Whisper small — 3.4% WER, runs in 2 GB RAM, 6× real-time on modern CPU.',
          '**RTX 4070 benchmark (large-v3):** faster-whisper ~12× real-time; whisper.cpp CUDA ~8× real-time. faster-whisper wins on NVIDIA.',
          '**M5 Pro benchmark (large-v3):** whisper.cpp Metal ~10× real-time; faster-whisper CPU-only ~3× real-time. whisper.cpp wins on Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Why Local Speech-to-Text?',
        content:
          'Cloud STT services (Google Speech-to-Text, AWS Transcribe, Azure Speech) charge per audio minute — typically $0.006–$0.024/minute — and send your audio to remote servers. For privacy-sensitive applications (medical dictation, legal recordings, journalist interviews, corporate meetings), local transcription eliminates the data exposure entirely.',
        items: [
          '**Privacy:** Audio never leaves your machine. No data-processing agreement needed for GDPR compliance — processing happens locally.',
          '**Cost:** Zero per-minute fees. A developer transcribing 8 hours of meetings per week saves $120–480/month at cloud STT pricing.',
          '**Offline:** Works on planes, in secure facilities, in areas without reliable internet. No API key management.',
          '**Latency:** No upload/download round-trip. For real-time voice interfaces, local processing reduces STT latency from 300–800 ms (cloud) to 50–300 ms.',
          '**Customization:** Fine-tune on domain-specific vocabulary. Run any model size that fits your hardware.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper Model Sizes — Foundation for Both Tools',
        content:
          'Both whisper.cpp and faster-whisper use the same Whisper model weights, converted to their respective formats (GGML for whisper.cpp, CTranslate2 for faster-whisper). Choose your model size based on your VRAM/RAM budget and accuracy requirements.',
        columns: ['Model', 'Parameters', 'VRAM / RAM', 'English WER', 'Speed Factor (vs real-time on RTX 4070)'],
        rows: [
          {
            'Model': 'tiny',
            'Parameters': '39M',
            'VRAM / RAM': '~1 GB',
            'English WER': '7.6%',
            'Speed Factor (vs real-time on RTX 4070)': '~32×',
          },
          {
            'Model': 'base',
            'Parameters': '74M',
            'VRAM / RAM': '~1 GB',
            'English WER': '5.0%',
            'Speed Factor (vs real-time on RTX 4070)': '~16×',
          },
          {
            'Model': 'small',
            'Parameters': '244M',
            'VRAM / RAM': '~2 GB',
            'English WER': '3.4%',
            'Speed Factor (vs real-time on RTX 4070)': '~6×',
          },
          {
            'Model': 'medium',
            'Parameters': '769M',
            'VRAM / RAM': '~5 GB',
            'English WER': '2.9%',
            'Speed Factor (vs real-time on RTX 4070)': '~2×',
          },
          {
            'Model': 'large-v3',
            'Parameters': '1.55B',
            'VRAM / RAM': '~10 GB',
            'English WER': '2.5%',
            'Speed Factor (vs real-time on RTX 4070)': '1× (baseline)',
          },
        ],
        note: 'WER (word error rate) figures from the Whisper paper on the LibriSpeech clean test set. Lower is better. Speed factors for faster-whisper int8 on RTX 4070.',
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — The C/C++ Port',
        content:
          '**whisper.cpp (by Georgi Gerganov) is a pure C/C++ reimplementation of OpenAI\'s Whisper model, optimized for low-resource and cross-platform inference.** It requires no Python, no CUDA toolkit, and runs on virtually any hardware — from Raspberry Pi to Apple M5 Pro to Windows CUDA setups.',
        items: [
          '**Platform support:** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (AMD/Intel GPU), OpenCL.',
          '**Apple Silicon advantage:** whisper.cpp exports models to Core ML format, enabling inference on the Apple Neural Engine. Large-v3 runs at ~10× real-time on M5 Pro via Metal — faster than any cloud round-trip.',
          '**Installation:** Clone the repo, run `make` (or `cmake`). Pre-built binaries available for common platforms. No Python dependency.',
          '**Model download:** `bash ./models/download-ggml-model.sh base.en` — downloads the GGML-format model file (~142 MB for base).',
          '**CLI example:** `./main -m models/ggml-base.bin -f audio.wav` — transcribes a WAV file to stdout. Add `-l de` for German.',
          '**Real-time stream mode:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcribes from microphone in 3-second chunks.',
          '**Python wrapper:** pywhispercpp provides a Python binding for whisper.cpp, enabling use in Python pipelines without sacrificing Metal acceleration.',
          '**Limitation:** No native VAD (voice activity detection). Stream mode requires tuning `--step` and `--length` parameters for your use case.',
        ],
        codeBlock: `# Build from source (macOS / Linux)
git clone https://github.com/ggerganov/whisper.cpp
cd whisper.cpp
make -j4

# Download a model
bash ./models/download-ggml-model.sh large-v3

# Transcribe a file
./main -m models/ggml-large-v3.bin -f recording.wav

# Enable Metal on Apple Silicon (Core ML)
make -j4 WHISPER_COREML=1
./main -m models/ggml-large-v3-encoder.mlmodelc -f recording.wav`,
        codeLanguage: 'bash',
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — The CTranslate2 Port',
        content:
          '**faster-whisper (by SYSTRAN) is a Python library that reimplements Whisper inference using CTranslate2 — a highly optimized C++ inference engine that supports int8 quantization, reducing VRAM usage and increasing throughput.** On NVIDIA GPUs, faster-whisper is the fastest local Whisper implementation available.',
        items: [
          '**Platform support:** CPU (int8 quantization) and NVIDIA CUDA GPU. No Apple Metal support — runs CPU-only on Mac.',
          '**int8 advantage:** CTranslate2 int8 quantization reduces VRAM by ~40% and increases inference speed by ~2× vs float16, with negligible WER impact (< 0.1% absolute).',
          '**Installation:** `pip install faster-whisper` — no compilation required. CUDA support requires CUDA 11.8+ and cuDNN 8.x.',
          '**Built-in VAD:** faster-whisper includes Silero VAD integration, which automatically skips silent audio segments — critical for real-time transcription pipelines.',
          '**Python-native:** Direct Python API makes it trivial to chain with LLMs, audio processing libraries, and web frameworks.',
          '**Speed:** large-v3 int8 on RTX 4070 runs at ~12× real-time and uses ~2.5 GB VRAM. CPU int8 achieves ~20× real-time for the tiny model.',
          '**Batch processing:** faster-whisper supports batched inference for processing large audio archives efficiently.',
          '**Limitation:** No Metal support on Mac — runs CPU-only on Apple Silicon, achieving ~3× real-time for large-v3 vs. whisper.cpp\'s ~10× with Metal.',
        ],
        codeBlock: `from faster_whisper import WhisperModel

# Load model (downloads automatically on first run)
model = WhisperModel("large-v3", device="cuda", compute_type="int8")

# Transcribe
segments, info = model.transcribe("audio.wav", beam_size=5)

print(f"Detected language: {info.language} (probability: {info.language_probability:.2f})")
for segment in segments:
    print(f"[{segment.start:.2f}s → {segment.end:.2f}s] {segment.text}")`,
        codeLanguage: 'python',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Head-to-Head Benchmark Table',
        content:
          'All benchmarks use the large-v3 model unless noted. Speed is measured in multiples of real-time (e.g., 10× means 60 minutes of audio transcribed in 6 minutes). VRAM figures for GPU runs; RAM figures for CPU runs.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'On Apple Silicon, whisper.cpp with Metal runs large-v3 at ~10× real-time; on NVIDIA GPUs, faster-whisper with int8 runs at ~12× real-time — each tool wins decisively on its target platform.',
          },
          {
            type: 'plain-terms',
            text: 'Pick whisper.cpp on Mac (it uses the Apple Neural Engine), and faster-whisper on Windows/Linux with an NVIDIA GPU (it processes audio 12× faster than real-time while using 40% less GPU memory).',
          },
        ],
        columns: ['Metric', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'Metric': 'Platform / language',
            'whisper.cpp (large-v3)': 'C/C++ (cross-platform)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'Metric': 'GPU support',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'CUDA only',
          },
          {
            'Metric': 'CPU optimization',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'int8 quantization',
          },
          {
            'Metric': 'Speed — RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8× real-time',
            'faster-whisper (large-v3)': '~12× real-time ✓',
          },
          {
            'Metric': 'Speed — M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10× real-time (Metal) ✓',
            'faster-whisper (large-v3)': '~3× real-time (CPU only)',
          },
          {
            'Metric': 'Speed — CPU only (x86), base',
            'whisper.cpp (large-v3)': '~15× real-time',
            'faster-whisper (large-v3)': '~20× real-time ✓',
          },
          {
            'Metric': 'VRAM — large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB (int8) ✓',
          },
          {
            'Metric': 'Python integration',
            'whisper.cpp (large-v3)': 'Needs wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Native ✓',
          },
          {
            'Metric': 'VAD (silence detection)',
            'whisper.cpp (large-v3)': 'Manual (--step tuning)',
            'faster-whisper (large-v3)': 'Built-in (Silero VAD) ✓',
          },
          {
            'Metric': 'Real-time streaming',
            'whisper.cpp (large-v3)': 'Yes (--stream flag) ✓',
            'faster-whisper (large-v3)': 'Yes (VAD pipeline)',
          },
          {
            'Metric': 'WER accuracy (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (identical)',
            'faster-whisper (large-v3)': '2.5% (identical)',
          },
          {
            'Metric': 'Python dependency',
            'whisper.cpp (large-v3)': 'None ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'Metric': 'Raspberry Pi / embedded',
            'whisper.cpp (large-v3)': 'Yes — C binary ✓',
            'faster-whisper (large-v3)': 'Limited — Python overhead',
          },
        ],
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Real-Time Transcription Setup',
        content:
          '**Real-time transcription processes audio in chunks as it arrives from a microphone, producing text with a short lag behind speech.** Both tools support this, but with different trade-offs.',
        items: [
          '**whisper.cpp stream mode:** Run `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Processes 3-second audio chunks; ~0.5–1.5 second lag with the small model. No Python needed.',
          '**faster-whisper VAD pipeline:** Use `vad_filter=True` in `model.transcribe()`. Silero VAD automatically segments audio at silence boundaries — more natural chunks than fixed-length windows.',
          '**Practical latency:** 0.5–2 seconds behind live speech with small or medium models. Use tiny for the lowest latency (< 0.5 seconds, but higher WER).',
          '**Model selection for real-time:** small or base is the practical sweet spot — fast enough to keep up with speech, accurate enough for clean audio. Avoid large-v3 for real-time unless you have a dedicated GPU.',
          '**Microphone input:** whisper.cpp reads raw audio via SDL2 or portaudio. faster-whisper reads audio arrays from any Python audio library (sounddevice, pyaudio, soundfile).',
          '**Stability:** whisper.cpp stream mode can produce repeated tokens ("hallucinate" short fillers) on silence. Suppress with `--suppress-blank` and `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp Wins',
        content:
          '**On M1, M2, M3, M4, and M5 Macs, whisper.cpp with Core ML / Metal acceleration is the correct tool — no question.** faster-whisper has no Metal support and runs CPU-only on Mac, achieving roughly 3× real-time for large-v3. whisper.cpp with Metal achieves ~10× real-time on M5 Pro — a 3× speed advantage.',
        items: [
          '**Core ML export:** Run `./models/generate-coreml-model.sh large-v3` to export the encoder to Core ML format. This offloads encoder inference to the Apple Neural Engine.',
          '**M5 Pro benchmark (large-v3, Metal):** ~10× real-time. 60 minutes of audio transcribes in ~6 minutes.',
          '**M3 MacBook Air benchmark (large-v3, Metal):** ~7× real-time. 60 minutes in ~8.5 minutes.',
          '**Memory:** Unified memory means no separate VRAM — a 16 GB M5 Pro can comfortably run large-v3 (~3 GB) alongside other processes.',
          '**faster-whisper on Mac:** CPU-only, int8. Large-v3 at ~3× real-time. Usable for batch overnight transcription but not for real-time or time-sensitive workflows.',
          '**Recommendation:** Use whisper.cpp for all Mac STT work. Add pywhispercpp if you need Python integration while retaining Metal acceleration.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper Wins',
        content:
          '**On Windows and Linux with NVIDIA GPUs, faster-whisper is the superior choice.** Its CTranslate2 CUDA backend is more optimized than whisper.cpp\'s CUDA path — ~12× vs. ~8× real-time for large-v3 on RTX 4070, with lower VRAM usage.',
        items: [
          '**RTX 4070 (12 GB) benchmark (large-v3 int8):** ~12× real-time, ~2.5 GB VRAM.',
          '**RTX 3060 (12 GB) benchmark (large-v3 int8):** ~8× real-time, ~2.5 GB VRAM.',
          '**RTX 4060 (8 GB) benchmark (large-v3 int8):** ~7× real-time, ~2.5 GB VRAM — easily fits.',
          '**int8 vs float16:** int8 is ~2× faster and uses ~40% less VRAM with negligible accuracy loss. Always use `compute_type="int8"` on NVIDIA.',
          '**Batch processing:** faster-whisper\'s `batched=True` parameter enables parallel processing of multiple audio files, maximizing GPU utilization for large transcription jobs.',
          '**Python pipeline integration:** faster-whisper slots directly into LangChain, Haystack, and custom Python pipelines. No subprocess overhead vs. wrapping whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'When to Use Which',
        content: 'A direct mapping from your scenario to the right tool:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Use whisper.cpp on Apple Silicon and embedded/cross-platform targets; use faster-whisper on NVIDIA GPUs and Python pipelines.',
          },
          {
            type: 'plain-terms',
            text: 'If you have a Mac, pick whisper.cpp — it\'s 3× faster than faster-whisper on Apple hardware. If you have an NVIDIA GPU and write Python, pick faster-whisper — it\'s faster and needs 40% less GPU memory.',
          },
        ],
        columns: ['Scenario', 'Best Choice', 'Why'],
        rows: [
          {
            'Scenario': 'Apple Silicon Mac (any model)',
            'Best Choice': 'whisper.cpp',
            'Why': 'Metal / Core ML acceleration — 3× faster than faster-whisper (CPU-only on Mac)',
          },
          {
            'Scenario': 'NVIDIA GPU server (Linux/Windows)',
            'Best Choice': 'faster-whisper',
            'Why': 'CTranslate2 int8 — faster and lower VRAM than whisper.cpp CUDA path',
          },
          {
            'Scenario': 'Python data pipeline',
            'Best Choice': 'faster-whisper',
            'Why': 'Native Python API; no subprocess wrapper; VAD built in',
          },
          {
            'Scenario': 'Raspberry Pi / embedded Linux',
            'Best Choice': 'whisper.cpp',
            'Why': 'Pure C binary; no Python runtime overhead; ARM NEON optimized',
          },
          {
            'Scenario': 'Real-time voice assistant',
            'Best Choice': 'whisper.cpp',
            'Why': 'Stream mode with low overhead; works without Python on Pi / embedded',
          },
          {
            'Scenario': 'Batch transcription (large audio archive)',
            'Best Choice': 'faster-whisper',
            'Why': 'Batched inference, GPU utilization, Python async integration',
          },
          {
            'Scenario': 'AMD GPU (Vulkan)',
            'Best Choice': 'whisper.cpp',
            'Why': 'Vulkan backend support; faster-whisper is CUDA-only',
          },
          {
            'Scenario': 'CPU-only Linux server',
            'Best Choice': 'faster-whisper',
            'Why': 'int8 quantization gives ~30% speed advantage on x86 CPU',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is the transcription accuracy the same between whisper.cpp and faster-whisper?',
            a: 'Yes. Both tools use the same OpenAI Whisper model weights — the model itself is identical. The difference is only in the inference runtime (C/C++ vs CTranslate2 Python). WER on the same audio file will be within 0.1% absolute of each other, which is within normal variation from beam search randomness.',
          },
          {
            q: 'Can I use faster-whisper on a Mac with Apple Silicon?',
            a: 'Yes, but it runs CPU-only — faster-whisper has no Metal support. On an M5 Pro, faster-whisper large-v3 runs at ~3× real-time (CPU int8), compared to whisper.cpp\'s ~10× real-time with Metal. For most Mac users, whisper.cpp is 3× faster for the same model. The only reason to use faster-whisper on Mac is if your Python pipeline already depends on it and speed is not critical.',
          },
          {
            q: 'What Whisper model size should I use for a voice assistant?',
            a: 'For real-time voice interfaces, Whisper small is the standard recommendation — 3.4% WER on clean English, ~200 ms STT latency on a modern CPU or GPU, and fits in 2 GB RAM. Use tiny if you are on very constrained hardware (Raspberry Pi Zero 2W, older phones) and can tolerate ~7.6% WER. Use medium or large-v3 only for batch transcription where latency is not a constraint.',
          },
          {
            q: 'Does whisper.cpp support languages other than English?',
            a: 'Yes. All Whisper multilingual models (base, small, medium, large-v3) support 99 languages. Add `-l [language code]` to the CLI: `-l de` for German, `-l fr` for French, `-l ja` for Japanese, etc. The tiny.en and base.en models are English-only and slightly more accurate for English than their multilingual equivalents.',
          },
          {
            q: 'How do I install faster-whisper with CUDA support?',
            a: 'Install with `pip install faster-whisper`. CUDA support requires CUDA 11.8 or later and cuDNN 8.x installed on your system. Verify your CUDA version with `nvcc --version`. Then specify `device="cuda"` when loading the model: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. If CUDA is not detected, faster-whisper falls back to CPU automatically.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — Source, build instructions, model download scripts, and Metal/Core ML setup guide.',
          '[faster-whisper on GitHub](https://github.com/SYSTRAN/faster-whisper) — Source, Python API documentation, and benchmark results.',
          '[OpenAI Whisper on GitHub](https://github.com/openai/whisper) — Original Whisper model, paper, and model cards for all sizes.',
          '[OpenAI Whisper paper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision." Source of WER figures.',
          '[CTranslate2 documentation](https://github.com/OpenNMT/CTranslate2) — Quantization details, hardware support, and int8 optimization rationale.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local TTS and Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — The TTS companion: turn transcribed text back into speech, offline.',
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — Connect Whisper STT to a local LLM and Piper TTS into a complete voice pipeline.',
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Add vision models alongside STT and TTS for a full multimodal local stack.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — GPU and RAM requirements for the full voice + LLM pipeline.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) — Mobile version: WhisperKit on iPhone, Layla on Android.',
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
    title: 'Lokale Spracherkennung 2026: Whisper.cpp vs faster-whisper — Benchmarks, Setup, GPU-Beschleunigung',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: Lokale STT Benchmarks & Setup',
    intro:
      'whisper.cpp und faster-whisper sind die zwei dominanten Implementierungen von OpenAIs Whisper-Spracherkennungsmodell für lokale, offline Transkription im Jahr 2026. whisper.cpp ist ein reiner C/C++-Port, der auf Apple Metal, CUDA, Vulkan und CPU läuft – ideal für Apple Silicon, Embedded-Systeme und Echtzeit-Sprachanwendungen. faster-whisper ist eine Python-Bibliothek auf Basis von CTranslate2, die durch int8-Quantisierung rund 4-fachen Durchsatz des ursprünglichen Whisper auf NVIDIA-GPUs erreicht. Dieser Leitfaden behandelt Installation, Performance-Benchmarks, Echtzeit-Transkriptions-Setup und einen direkten Vergleich auf verschiedenen Plattformen.',
    metaDescription:
      'Vergleich von whisper.cpp und faster-whisper für lokale Spracherkennung 2026. WER-Benchmarks, GPU vs. CPU-Geschwindigkeit, Apple Silicon Metal, Echtzeit-Transkription und Setup-Anleitungen. Vollständig offline.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: Lokale Spracherkennungs-Benchmarks 2026. CPU vs. GPU-Geschwindigkeit, Apple Metal, WER-Genauigkeit, Echtzeit-Transkription. Kein Cloud-Dienst, keine Kosten.',
    sections: {},
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper — Benchmarks, configuration, accélération GPU',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026 : Benchmarks STT local & configuration',
    intro:
      'whisper.cpp et faster-whisper sont les deux implémentations dominantes du modèle Whisper d\'OpenAI pour la transcription locale et hors ligne en 2026. whisper.cpp est un portage pur C/C++ qui fonctionne sur Apple Metal, CUDA, Vulkan et CPU — idéal pour Apple Silicon, les systèmes embarqués et les applications vocales en temps réel. faster-whisper est une bibliothèque Python utilisant CTranslate2 qui atteint environ 4× le débit de la version originale de Whisper sur GPU NVIDIA via la quantification int8. Ce guide couvre l\'installation, les benchmarks de performance, la configuration de la transcription en temps réel et une comparaison directe entre les deux outils.',
    metaDescription:
      'Comparaison de whisper.cpp et faster-whisper pour la reconnaissance vocale locale en 2026. Benchmarks WER, vitesse GPU vs CPU, Apple Silicon Metal, transcription en temps réel et guides d\'installation. Entièrement hors ligne.',
    twitterDescription:
      'whisper.cpp vs faster-whisper : benchmarks de reconnaissance vocale locale 2026. Vitesse CPU vs GPU, Apple Metal, précision WER, transcription en temps réel. Pas de cloud, pas de coût.',
    sections: {},
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカル音声認識2026：Whisper.cpp vs faster-whisper — ベンチマーク・セットアップ・GPU高速化',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026：ローカルSTTベンチマーク＆セットアップ',
    intro:
      'whisper.cppとfaster-whisperは、2026年にローカル・オフラインの文字起こしに使用されるOpenAIのWhisper音声認識モデルの2大実装です。whisper.cppはApple Metal、CUDA、Vulkan、CPUで動作する純粋なC/C++ポートで、Apple Silicon、組み込みシステム、リアルタイム音声アプリケーションに最適です。faster-whisperはCTranslate2を使用したPythonライブラリで、int8量子化によりNVIDIA GPU上でオリジナルWhisperの約4倍のスループットを実現します。このガイドでは、インストール、パフォーマンスベンチマーク、リアルタイム文字起こしのセットアップ、そして各プラットフォームでの比較を詳しく解説します。',
    metaDescription:
      '2026年のローカル音声認識におけるwhisper.cppとfaster-whisperの比較。WERベンチマーク、GPU対CPUの速度、Apple Silicon Metal、リアルタイム文字起こし、セットアップガイド。完全オフライン対応。',
    twitterDescription:
      'whisper.cpp vs faster-whisper：2026年ローカル音声認識ベンチマーク。CPU対GPU速度、Apple Metal、WER精度、リアルタイム文字起こし。クラウド不要、コストゼロ。',
    sections: {},
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '本地语音识别2026：Whisper.cpp vs faster-whisper — 基准测试、安装配置、GPU加速',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026：本地STT基准测试与配置指南',
    intro:
      'whisper.cpp和faster-whisper是2026年本地离线语音转文字的两大主流实现。whisper.cpp是纯C/C++移植版本，支持Apple Metal、CUDA、Vulkan和CPU，适用于Apple Silicon、嵌入式系统和实时语音应用。faster-whisper是基于CTranslate2的Python库，通过int8量化在NVIDIA GPU上实现约4倍于原始Whisper的吞吐量。本指南涵盖安装方法、性能基准测试、实时转录配置以及各平台的横向对比。',
    metaDescription:
      '对比whisper.cpp与faster-whisper在2026年本地语音识别中的表现。WER基准、GPU与CPU速度对比、Apple Silicon Metal支持、实时转录配置及安装指南。完全离线使用。',
    twitterDescription:
      'whisper.cpp vs faster-whisper：2026年本地语音识别基准测试。CPU与GPU速度、Apple Metal、WER准确率、实时转录。无需云服务，零成本。',
    sections: {},
  },
}
