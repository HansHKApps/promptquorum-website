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
    title: 'Whisper.cpp vs faster-whisper 2026: Local STT Benchmarks, Setup & GPU Acceleration',
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
      'distil-large-v3 (~756M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070',
      'Apple M5 Pro',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
    ],
    leadAnswerBlock:
      '**whisper.cpp vs faster-whisper — the two dominant local Whisper runtimes — each win decisively on their target platform.** **For Apple Silicon (M-series Macs), whisper.cpp with Metal acceleration is the fastest local STT option in 2026 — large-v3 runs at ~10× real-time on an M5 Pro.** For NVIDIA GPU servers and Python pipelines, faster-whisper with CTranslate2 int8 quantization is the better choice, achieving ~12× real-time on an RTX 4070 with 2.5 GB VRAM for the large-v3 model. Both tools use the same underlying Whisper models from OpenAI (tiny through large-v3); the difference is runtime optimization and integration path. On CPU-only hardware, both are usable for the tiny and base models — faster-whisper has a slight edge (~20× real-time vs. ~15×) on CPU via int8.',
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
      { label: 'Distil-Whisper: The Faster Alternative', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — The C/C++ Port', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — The CTranslate2 Port', anchor: '#faster-whisper' },
      { label: 'Head-to-Head Benchmark Table', anchor: '#benchmarks' },
      { label: 'Real-Time Transcription Setup', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp Wins', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper Wins', anchor: '#nvidia-gpu' },
      { label: 'When to Use Which', anchor: '#when-to-use' },
      { label: 'Beyond whisper.cpp and faster-whisper', anchor: '#beyond-tools' },
      { label: 'Common Issues and Fixes', anchor: '#troubleshooting' },
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
          {
            'Model': 'distil-large-v3',
            'Parameters': '~756M',
            'VRAM / RAM': '~4 GB',
            'English WER': '~2.6%',
            'Speed Factor (vs real-time on RTX 4070)': '~6×',
          },
        ],
        note: 'WER (word error rate) figures from the Whisper paper on the LibriSpeech clean test set. Lower is better. Speed factors for faster-whisper int8 on RTX 4070. distil-large-v3 figures from the Distil-Whisper paper.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: The Faster Alternative',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) is a distilled variant of large-v3 with ~50% fewer parameters, running ~6× faster while keeping WER within ~1% of the original.** It is the right choice when transcription speed matters more than squeezing out the last fraction of accuracy. distil-large-v3 works with both faster-whisper (native CTranslate2 support) and whisper.cpp (via GGML format conversion), so it integrates into whichever runtime you already use.',
        items: [
          '**Parameters:** ~756M — roughly half of large-v3\'s 1.55B, fitting in ~4 GB VRAM instead of ~10 GB.',
          '**Speed:** ~6× real-time on RTX 4070 (vs. 1× baseline for large-v3) — comparable to the medium model in speed, with large-v3-level accuracy.',
          '**WER:** ~2.6% on English — only ~0.1% higher than large-v3\'s 2.5%. In practice, the difference is inaudible on typical speech.',
          '**Compatibility:** Works with faster-whisper natively (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). For whisper.cpp, convert to GGML format using the distil-whisper GGML conversion script.',
          '**Best for:** Batch transcription jobs, server deployments with limited VRAM, and any use case where you want large-v3 quality at medium-model speed.',
          '**Not for:** Multilingual transcription — distil-large-v3 is English-only. For other languages, use large-v3 or medium.',
        ],
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
          {
            'Metric': 'Output formats',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python objects (start, end, text)',
          },
        ],
        note: 'whisper.cpp writes output directly to standard subtitle and transcript file formats (SRT, VTT, JSON, CSV, txt) — ideal for subtitle workflows where you need a file on disk with no additional code. faster-whisper yields a Python generator of segment objects with `start`, `end`, and `text` attributes — ideal for LLM pipeline chaining, where you pass segment text directly into a downstream model without writing intermediate files. For subtitle generation, whisper.cpp is simpler. For pipelines that process segments programmatically, faster-whisper is simpler.',
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
          '**M5 Pro benchmark (large-v3, Metal):** ~10× real-time. 60 minutes of audio transcribes in ~6 minutes. Note: M5 Pro shipped March 2026 — these are early community benchmarks. Performance may improve with whisper.cpp updates optimizing for the M5 Neural Engine.',
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
      beyondTools: {
        id: 'beyond-tools',
        title: 'Beyond whisper.cpp and faster-whisper',
        content:
          'Two additional tools extend Whisper with capabilities that neither whisper.cpp nor faster-whisper provide out of the box: speaker diarization and extreme-speed batch GPU inference.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** Built on top of faster-whisper, WhisperX adds word-level timestamps and speaker diarization — identifying which speaker said which words. Best for meeting transcription with speaker labels, podcast editing, and interview transcripts. Install with `pip install whisperx` and provide a Hugging Face token for the diarization model.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** A Hugging Face Transformers pipeline wrapper that adds Flash Attention 2 support for significantly faster GPU inference than standard faster-whisper on NVIDIA hardware. Best for batch processing large audio archives on NVIDIA GPUs. Requires a Flash Attention 2-compatible GPU (Ampere or newer: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Common Issues and Fixes',
        content: 'The most frequent setup and runtime problems, with direct fixes:',
        items: [
          '**CUDA version mismatch:** faster-whisper requires CUDA 11.8 or later. Check with `nvcc --version`. If your CUDA is older, either upgrade the driver or install faster-whisper in a conda environment with `cudatoolkit=11.8`.',
          '**Metal model export fails:** Ensure Xcode Command Line Tools are installed — run `xcode-select --install`. The Core ML export script requires the `coremltools` Python package: `pip install coremltools`.',
          '**Hallucination on silence:** Both tools can produce repeated filler tokens on silent audio segments. Use `--no-speech-threshold 0.6` in whisper.cpp stream mode, or `vad_filter=True` in faster-whisper\'s `model.transcribe()` to skip silent segments automatically.',
          '**Out of memory on large-v3:** Switch to int8 quantization in faster-whisper (`compute_type="int8"`) — reduces VRAM from ~5 GB (float16) to ~2.5 GB. In whisper.cpp, use the quantized GGML variant (e.g., `ggml-large-v3-q5_0.bin`) which cuts memory to ~3–4 GB.',
          '**Garbled output on non-English audio:** Do not use `.en` model variants (tiny.en, base.en) for non-English speech — they are English-only. Use the multilingual models (base, small, medium, large-v3) and set the language explicitly: `-l de` in whisper.cpp or `language="de"` in faster-whisper.',
          '**Slow CPU inference:** Ensure your CPU supports AVX2 instructions (required for optimized CPU inference). Check with `grep avx2 /proc/cpuinfo` on Linux or `sysctl machdep.cpu.features` on Mac. CPUs without AVX2 fall back to generic SIMD and will be 2–3× slower.',
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
          {
            q: 'Which is more accurate — whisper.cpp or faster-whisper?',
            a: 'Identical. Both tools use the same OpenAI Whisper model weights and produce the same WER on any given audio file. The difference between whisper.cpp and faster-whisper is speed and platform support, not transcription accuracy. Any WER difference you measure between runs is within normal variation from beam search, not from the runtime itself.',
          },
          {
            q: 'Can I run Whisper large-v3 on 8 GB RAM?',
            a: 'Yes on GPU — large-v3 int8 in faster-whisper uses ~2.5 GB VRAM and runs on any 8 GB GPU. On CPU-only hardware, 8 GB RAM is tight for large-v3 (float32 uses ~10 GB). Use medium (5 GB RAM) or small (2 GB RAM) on CPU-only systems. whisper.cpp is more memory-efficient on CPU than faster-whisper due to lower runtime overhead.',
          },
          {
            q: 'How much does local Whisper cost vs cloud STT?',
            a: 'Zero ongoing cost. Cloud STT services charge $0.006–$0.024 per audio minute — for a developer transcribing 8 hours of meetings per week, that\'s $120–480/month. Local Whisper runs on hardware you already own, with no per-minute fees, no API key management, and no audio data leaving your machine.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp on GitHub](https://github.com/ggerganov/whisper.cpp) — Source, build instructions, model download scripts, and Metal/Core ML setup guide.',
          '[faster-whisper on GitHub](https://github.com/SYSTRAN/faster-whisper) — Source, Python API documentation, and benchmark results.',
          '[distil-whisper/distil-large-v3 on Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — Model card, benchmark results, and usage instructions for the distilled Whisper variant.',
          '[WhisperX on GitHub](https://github.com/m-bain/whisperX) — Word-level timestamps and speaker diarization built on faster-whisper.',
          '[insanely-fast-whisper on GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Flash Attention 2 Whisper pipeline for maximum NVIDIA GPU throughput.',
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
    title: 'Whisper.cpp vs faster-whisper 2026: Lokale STT-Benchmarks, Setup & GPU-Beschleunigung',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: Lokale STT-Benchmarks & Setup',
    intro:
      'whisper.cpp und faster-whisper sind die zwei dominanten Implementierungen von OpenAIs Whisper-Spracherkennungsmodell für lokale, offline Transkription im Jahr 2026. Dieser whisper.cpp vs faster-whisper Vergleich zeigt, welches Tool auf welcher Hardware gewinnt. whisper.cpp ist ein reiner C/C++-Port, der auf Apple Metal, CUDA, Vulkan und CPU läuft – ideal für Apple Silicon, Embedded-Systeme und Echtzeit-Sprachanwendungen. faster-whisper ist eine Python-Bibliothek auf Basis von CTranslate2, die durch int8-Quantisierung rund 4-fachen Durchsatz des ursprünglichen Whisper auf NVIDIA-GPUs erreicht. Dieser Leitfaden behandelt Installation, Performance-Benchmarks, Echtzeit-Transkriptions-Setup und einen direkten Plattformvergleich.',
    metaDescription:
      'whisper.cpp vs faster-whisper 2026: Lokale STT im Vergleich. WER-Benchmarks, GPU vs. CPU, Apple Metal, Echtzeit-Transkription, vollständig offline.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: Lokale STT-Benchmarks 2026. CPU vs. GPU-Geschwindigkeit, Apple Metal, WER-Genauigkeit, Echtzeit-Transkription. Kein Cloud-Dienst, keine Kosten.',
    audience:
      'Entwickler, Forscher und Systembauer, die eine offline und datenschutzkonforme Sprachtranskription benötigen – für Besprechungsnotizen, Sprachinterfaces, Barrierefreiheitstools oder sichere Umgebungen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Spracherkennung',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'lokale Spracherkennung 2026',
      'offline Spracherkennung',
      'whisper lokale Transkription',
      'faster-whisper Benchmark',
      'whisper cpp apple silicon',
      'lokales STT GPU',
      'whisper cpp setup',
    ],
    current_models_mentioned: [
      'Whisper tiny (39M)',
      'Whisper base (74M)',
      'Whisper small (244M)',
      'Whisper medium (769M)',
      'Whisper large-v3 (1.55B)',
      'distil-large-v3 (~756M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070',
      'Apple M5 Pro',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
    ],
    leadAnswerBlock:
      '**whisper.cpp vs faster-whisper – die zwei dominanten lokalen Whisper-Runtimes – gewinnen jeweils deutlich auf ihrer Zielplattform.** **Für Apple Silicon (M-Series Macs) ist whisper.cpp mit Metal-Beschleunigung die schnellste lokale STT-Option im Jahr 2026 – large-v3 läuft auf einem M5 Pro mit ~10-facher Echtzeit.** Für NVIDIA-GPU-Server und Python-Pipelines ist faster-whisper mit CTranslate2 int8-Quantisierung die bessere Wahl und erreicht auf einem RTX 4070 ~12-fache Echtzeit bei nur 2,5 GB VRAM für das large-v3-Modell. Beide Tools verwenden dieselben zugrunde liegenden Whisper-Modelle von OpenAI (tiny bis large-v3); der Unterschied liegt in der Laufzeit-Optimierung und im Integrationspfad. Auf reiner CPU-Hardware sind beide für die Modelle tiny und base nutzbar – faster-whisper hat einen leichten Vorsprung (~20-fache Echtzeit vs. ~15-fache) auf der CPU über int8.',
    quickAnswerTop: {
      de: {
        question: 'Welches Tool sollte ich für lokale Spracherkennung 2026 verwenden – whisper.cpp oder faster-whisper?',
        answer:
          'Die Wahl hängt von Ihrer Hardware und Ihren Integrationsbedürfnissen ab. Auf Apple Silicon (M1–M5) ist whisper.cpp mit Metal-Beschleunigung schneller und die natürliche Wahl – ~10-fache Echtzeit bei large-v3 ohne Python-Abhängigkeit. Auf NVIDIA-GPUs ist faster-whisper schneller und einfacher in Python-Pipelines zu integrieren, mit ~12-facher Echtzeit bei large-v3 und 40 % weniger VRAM durch int8-Quantisierung. Auf reiner CPU-Hardware funktionieren beide für kleine und base-Modelle; faster-whisper hat einen leichten Geschwindigkeitsvorteil.',
        bullets: [
          'Apple Silicon → whisper.cpp mit Core ML / Metal. ~10-fache Echtzeit auf M5 Pro mit large-v3.',
          'NVIDIA GPU → faster-whisper. ~12-fache Echtzeit auf RTX 4070 mit large-v3 int8, ~2,5 GB VRAM.',
          'Python-Pipeline → faster-whisper. Nativ in Python, 5-Zeilen-Setup, VAD integriert.',
          'Embedded / Raspberry Pi → whisper.cpp. Reines C-Binary, kein Python-Runtime erforderlich.',
          'Echtzeit-Spracherfassung → whisper.cpp Stream-Modus oder faster-whisper VAD-Pipeline.',
          'Batch-Transkription → faster-whisper. Bester Durchsatz auf GPU; einfaches Async-Batching.',
          'WER-Genauigkeit: beide identisch – sie verwenden dieselben Whisper-Modellgewichte.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Auf einen Blick', anchor: '#quick-facts' },
      { label: 'Warum lokale Spracherkennung?', anchor: '#why-local-stt' },
      { label: 'Whisper-Modellgrößen', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: Die schnellere Alternative', anchor: '#distil-whisper' },
      { label: 'whisper.cpp – Der C/C++-Port', anchor: '#whisper-cpp' },
      { label: 'faster-whisper – Der CTranslate2-Port', anchor: '#faster-whisper' },
      { label: 'Direktvergleich: Benchmark-Tabelle', anchor: '#benchmarks' },
      { label: 'Echtzeit-Transkription einrichten', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp gewinnt', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper gewinnt', anchor: '#nvidia-gpu' },
      { label: 'Wann welches Tool verwenden?', anchor: '#when-to-use' },
      { label: 'Über whisper.cpp und faster-whisper hinaus', anchor: '#beyond-tools' },
      { label: 'Häufige Probleme und Lösungen', anchor: '#troubleshooting' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp ist die beste lokale STT-Wahl für Apple Silicon.** Der C/C++-Port nutzt Core ML und Apple Metal für Hardware-Beschleunigung – large-v3 mit ~10-facher Echtzeit auf dem M5 Pro, ohne Python-Abhängigkeit.',
          '**faster-whisper ist die beste lokale STT-Wahl für NVIDIA-GPUs und Python-Pipelines.** Die CTranslate2 int8-Quantisierung reduziert den VRAM-Bedarf um ~40 % und steigert den Durchsatz um ~4× gegenüber der ursprünglichen OpenAI-Implementierung – large-v3 mit ~12-facher Echtzeit auf dem RTX 4070 bei nur ~2,5 GB VRAM.',
          '**Beide Tools verwenden identische Whisper-Modellgewichte von OpenAI.** Der WER (Wortfehlerrate) ist bei beiden gleich – der Unterschied liegt ausschließlich in der Laufzeit-Performance und im Integrationspfad, nicht in der Transkriptionsgenauigkeit.',
          '**Whisper large-v3 bietet die beste Genauigkeit mit 2,5 % WER auf Englisch.** Für die meisten Produktivszenarien bietet Whisper small (3,4 % WER, 2 GB RAM) oder medium (2,9 % WER, 5 GB RAM) ein besseres Geschwindigkeit-Genauigkeits-Verhältnis.',
          '**Echtzeit-Transkription ist mit beiden Tools erreichbar** – whisper.cpp über den `--stream`-Flag, faster-whisper über seine integrierte VAD-Pipeline (Sprachaktivitätserkennung). Die praktische Latenz liegt je nach Modellgröße bei 0,5–2 Sekunden hinter der Livesprache.',
          '**whisper.cpp läuft auf CPU, Metal, CUDA und Vulkan** – und ist damit die einzige Wahl für plattformübergreifende Embedded-Nutzung (Raspberry Pi, Windows GPU-Setups, ARM-Server). faster-whisper unterstützt nur CPU und CUDA (kein Metal auf Mac).',
          '**Für Raspberry Pi und Embedded Linux** ist whisper.cpp tiny/base auf der CPU die praktische Obergrenze – tiny mit ~15-facher Echtzeit auf Pi 5, base mit ~6-facher Echtzeit. Beide passen in 1 GB RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Auf einen Blick',
        items: [
          '**Beide Tools:** Basieren auf OpenAIs quelloffenem Whisper-Modell (MIT-Lizenz). Gleiche Genauigkeit – unterschiedliche Laufzeiten.',
          '**whisper.cpp:** In C/C++ von Georgi Gerganov entwickelt. Unterstützt CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Kein Python erforderlich.',
          '**faster-whisper:** Python-Bibliothek auf Basis von CTranslate2. Unterstützt CPU (int8) und CUDA. Kein Apple Metal-Support.',
          '**Whisper-Modellgrößen:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Alle im GGML- / CTranslate2-Format.',
          '**Bestes Modell für die meisten Anwendungsfälle:** Whisper small – 3,4 % WER, läuft in 2 GB RAM, 6-fache Echtzeit auf modernem CPU.',
          '**RTX 4070-Benchmark (large-v3):** faster-whisper ~12-fache Echtzeit; whisper.cpp CUDA ~8-fache Echtzeit. faster-whisper gewinnt auf NVIDIA.',
          '**M5 Pro-Benchmark (large-v3):** whisper.cpp Metal ~10-fache Echtzeit; faster-whisper nur-CPU ~3-fache Echtzeit. whisper.cpp gewinnt auf Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Warum lokale Spracherkennung?',
        content:
          'Cloud-STT-Dienste (Google Speech-to-Text, AWS Transcribe, Azure Speech) berechnen Gebühren pro Audiominute – typischerweise ca. 0,005–0,022 €/Min. – und senden Audiodaten an externe Server. Für datenschutzsensible Anwendungen (medizinische Diktierlösungen, Rechtsaufzeichnungen, Journalisteninterviews, Unternehmensmeetings) eliminiert lokale Transkription das Datenschutzrisiko vollständig.',
        items: [
          '**Datenschutz:** Audio verlässt niemals Ihr Gerät. Kein Auftragsverarbeitungsvertrag nach DSGVO Art. 28 erforderlich – die Verarbeitung erfolgt lokal.',
          '**Kosten:** Keine minutenbasierten Gebühren. Ein Entwickler, der 8 Stunden Meetings pro Woche transkribiert, spart ca. 110–440 €/Monat gegenüber Cloud-STT-Preisen.',
          '**Offline:** Funktioniert im Flugzeug, in Sicherheitsbereichen, in Gebieten ohne stabiles Internet. Kein API-Schlüsselmanagement.',
          '**Latenz:** Kein Upload/Download-Roundtrip. Für Echtzeit-Sprachinterfaces reduziert lokale Verarbeitung die STT-Latenz von 300–800 ms (Cloud) auf 50–300 ms.',
          '**Anpassbarkeit:** Feinabstimmung auf domänenspezifisches Vokabular. Beliebige Modellgröße, die zur Hardware passt.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper-Modellgrößen – Grundlage beider Tools',
        content:
          'Sowohl whisper.cpp als auch faster-whisper verwenden dieselben Whisper-Modellgewichte, konvertiert in das jeweilige Format (GGML für whisper.cpp, CTranslate2 für faster-whisper). Wählen Sie die Modellgröße anhand Ihres VRAM/RAM-Budgets und Ihrer Genauigkeitsanforderungen.',
        columns: ['Modell', 'Parameter', 'VRAM / RAM', 'Englisch WER', 'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)'],
        rows: [
          {
            'Modell': 'tiny',
            'Parameter': '39M',
            'VRAM / RAM': '~1 GB',
            'Englisch WER': '7,6 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '~32×',
          },
          {
            'Modell': 'base',
            'Parameter': '74M',
            'VRAM / RAM': '~1 GB',
            'Englisch WER': '5,0 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '~16×',
          },
          {
            'Modell': 'small',
            'Parameter': '244M',
            'VRAM / RAM': '~2 GB',
            'Englisch WER': '3,4 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '~6×',
          },
          {
            'Modell': 'medium',
            'Parameter': '769M',
            'VRAM / RAM': '~5 GB',
            'Englisch WER': '2,9 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '~2×',
          },
          {
            'Modell': 'large-v3',
            'Parameter': '1,55B',
            'VRAM / RAM': '~10 GB',
            'Englisch WER': '2,5 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '1× (Referenz)',
          },
          {
            'Modell': 'distil-large-v3',
            'Parameter': '~756M',
            'VRAM / RAM': '~4 GB',
            'Englisch WER': '~2,6 %',
            'Geschwindigkeitsfaktor (ggü. Echtzeit, RTX 4070)': '~6×',
          },
        ],
        note: 'WER-Werte (Wortfehlerrate) aus dem Whisper-Paper auf dem LibriSpeech Clean Test Set. Niedrigerer Wert ist besser. Geschwindigkeitsfaktoren für faster-whisper int8 auf RTX 4070. distil-large-v3-Werte aus dem Distil-Whisper-Paper.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: Die schnellere Alternative',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) ist eine destillierte Variante von large-v3 mit ~50 % weniger Parametern, die ~6× schneller läuft und dabei den WER nur um ~1 % erhöht.** Es ist die richtige Wahl, wenn Transkriptionsgeschwindigkeit wichtiger ist als das letzte Stück Genauigkeit. distil-large-v3 funktioniert sowohl mit faster-whisper (native CTranslate2-Unterstützung) als auch mit whisper.cpp (über GGML-Format-Konvertierung).',
        items: [
          '**Parameter:** ~756M – etwa halb so viele wie large-v3s 1,55B; passt in ~4 GB VRAM statt ~10 GB.',
          '**Geschwindigkeit:** ~6-fache Echtzeit auf RTX 4070 (vs. 1× Referenz für large-v3) – vergleichbar mit medium in der Geschwindigkeit, bei large-v3-naher Genauigkeit.',
          '**WER:** ~2,6 % auf Englisch – nur ~0,1 % höher als large-v3s 2,5 %. In der Praxis kaum hörbarer Unterschied bei typischer Sprachqualität.',
          '**Kompatibilität:** Funktioniert mit faster-whisper nativ (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). Für whisper.cpp: Konvertierung ins GGML-Format mit dem distil-whisper GGML-Konvertierungsskript.',
          '**Am besten geeignet für:** Batch-Transkriptionsjobs, Server-Deployments mit begrenztem VRAM und alle Anwendungsfälle, bei denen large-v3-Qualität bei medium-Modell-Geschwindigkeit benötigt wird.',
          '**Nicht geeignet für:** Mehrsprachige Transkription – distil-large-v3 ist ausschließlich für Englisch optimiert. Für andere Sprachen: large-v3 oder medium verwenden.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp – Der C/C++-Port',
        content:
          '**whisper.cpp (von Georgi Gerganov) ist eine reine C/C++-Neuimplementierung von OpenAIs Whisper-Modell, optimiert für ressourcenarme und plattformübergreifende Inferenz.** Kein Python, kein CUDA-Toolkit erforderlich – läuft auf nahezu jeder Hardware, vom Raspberry Pi bis zum Apple M5 Pro und Windows CUDA-Setups.',
        items: [
          '**Plattformunterstützung:** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (AMD/Intel GPU), OpenCL.',
          '**Apple-Silicon-Vorteil:** whisper.cpp exportiert Modelle ins Core ML-Format und ermöglicht damit Inferenz auf der Apple Neural Engine. Large-v3 läuft mit ~10-facher Echtzeit auf dem M5 Pro über Metal – schneller als jeder Cloud-Roundtrip.',
          '**Installation:** Repository klonen, `make` (oder `cmake`) ausführen. Vorgefertigte Binaries für gängige Plattformen verfügbar. Keine Python-Abhängigkeit.',
          '**Modell-Download:** `bash ./models/download-ggml-model.sh base.en` – lädt die GGML-Modelldatei herunter (~142 MB für base).',
          '**CLI-Beispiel:** `./main -m models/ggml-base.bin -f audio.wav` – transkribiert eine WAV-Datei nach stdout. `-l de` für Deutsch hinzufügen.',
          '**Echtzeit-Stream-Modus:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` – transkribiert in 3-Sekunden-Chunks vom Mikrofon.',
          '**Python-Wrapper:** pywhispercpp bietet eine Python-Anbindung für whisper.cpp und ermöglicht die Nutzung in Python-Pipelines ohne Verlust der Metal-Beschleunigung.',
          '**Einschränkung:** Kein nativer VAD (Sprachaktivitätserkennung). Der Stream-Modus erfordert die Feinabstimmung der Parameter `--step` und `--length` für den jeweiligen Anwendungsfall.',
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
        title: 'faster-whisper – Der CTranslate2-Port',
        content:
          '**faster-whisper (von SYSTRAN) ist eine Python-Bibliothek, die Whisper-Inferenz mit CTranslate2 – einer hochoptimierten C++-Inferenz-Engine mit int8-Quantisierungsunterstützung – neu implementiert und dadurch VRAM-Bedarf reduziert und Durchsatz erhöht.** Auf NVIDIA-GPUs ist faster-whisper die schnellste verfügbare lokale Whisper-Implementierung.',
        items: [
          '**Plattformunterstützung:** CPU (int8-Quantisierung) und NVIDIA CUDA GPU. Kein Apple Metal-Support – läuft auf Mac nur über CPU.',
          '**int8-Vorteil:** CTranslate2 int8-Quantisierung reduziert den VRAM-Bedarf um ~40 % und erhöht die Inferenzgeschwindigkeit um ~2× gegenüber float16 bei vernachlässigbarer WER-Auswirkung (< 0,1 % absolut).',
          '**Installation:** `pip install faster-whisper` – keine Kompilierung erforderlich. CUDA-Unterstützung erfordert CUDA 11.8+ und cuDNN 8.x.',
          '**Integrierter VAD:** faster-whisper enthält Silero VAD-Integration, die stille Audiosegmente automatisch überspringt – entscheidend für Echtzeit-Transkriptions-Pipelines.',
          '**Python-nativ:** Die direkte Python-API macht es trivial, faster-whisper mit LLMs, Audio-Verarbeitungsbibliotheken und Web-Frameworks zu verbinden.',
          '**Geschwindigkeit:** large-v3 int8 auf RTX 4070 mit ~12-facher Echtzeit und ~2,5 GB VRAM. CPU int8 erreicht ~20-fache Echtzeit für das tiny-Modell.',
          '**Batch-Verarbeitung:** faster-whisper unterstützt Batch-Inferenz für die effiziente Verarbeitung großer Audio-Archive.',
          '**Einschränkung:** Kein Metal-Support auf Mac – läuft auf Apple Silicon nur über CPU mit ~3-facher Echtzeit für large-v3 vs. whisper.cpps ~10-fache mit Metal.',
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
        title: 'Direktvergleich: Benchmark-Tabelle',
        content:
          'Alle Benchmarks verwenden das large-v3-Modell, sofern nicht anders angegeben. Die Geschwindigkeit wird in Vielfachen der Echtzeit gemessen (z. B. 10× bedeutet: 60 Minuten Audio werden in 6 Minuten transkribiert). VRAM-Angaben für GPU-Läufe; RAM-Angaben für CPU-Läufe.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Auf Apple Silicon läuft whisper.cpp mit Metal large-v3 mit ~10-facher Echtzeit; auf NVIDIA-GPUs erreicht faster-whisper mit int8 ~12-fache Echtzeit – jedes Tool gewinnt klar auf seiner Zielplattform.',
          },
          {
            type: 'plain-terms',
            text: 'Auf dem Mac: whisper.cpp wählen (nutzt die Apple Neural Engine); auf Windows/Linux mit NVIDIA GPU: faster-whisper wählen (verarbeitet Audio 12× schneller als Echtzeit bei 40 % weniger GPU-Speicher).',
          },
        ],
        columns: ['Metrik', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'Metrik': 'Plattform / Sprache',
            'whisper.cpp (large-v3)': 'C/C++ (plattformübergreifend)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'Metrik': 'GPU-Unterstützung',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'Nur CUDA',
          },
          {
            'Metrik': 'CPU-Optimierung',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'int8-Quantisierung',
          },
          {
            'Metrik': 'Geschwindigkeit – RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8-fache Echtzeit',
            'faster-whisper (large-v3)': '~12-fache Echtzeit ✓',
          },
          {
            'Metrik': 'Geschwindigkeit – M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10-fache Echtzeit (Metal) ✓',
            'faster-whisper (large-v3)': '~3-fache Echtzeit (nur CPU)',
          },
          {
            'Metrik': 'Geschwindigkeit – nur CPU (x86), base',
            'whisper.cpp (large-v3)': '~15-fache Echtzeit',
            'faster-whisper (large-v3)': '~20-fache Echtzeit ✓',
          },
          {
            'Metrik': 'VRAM – large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2,5 GB (int8) ✓',
          },
          {
            'Metrik': 'Python-Integration',
            'whisper.cpp (large-v3)': 'Wrapper nötig (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativ ✓',
          },
          {
            'Metrik': 'VAD (Stilles Audio erkennen)',
            'whisper.cpp (large-v3)': 'Manuell (--step-Tuning)',
            'faster-whisper (large-v3)': 'Integriert (Silero VAD) ✓',
          },
          {
            'Metrik': 'Echtzeit-Streaming',
            'whisper.cpp (large-v3)': 'Ja (--stream-Flag) ✓',
            'faster-whisper (large-v3)': 'Ja (VAD-Pipeline)',
          },
          {
            'Metrik': 'WER-Genauigkeit (large-v3)',
            'whisper.cpp (large-v3)': '2,5 % (identisch)',
            'faster-whisper (large-v3)': '2,5 % (identisch)',
          },
          {
            'Metrik': 'Python-Abhängigkeit',
            'whisper.cpp (large-v3)': 'Keine ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'Metrik': 'Raspberry Pi / Embedded',
            'whisper.cpp (large-v3)': 'Ja – C-Binary ✓',
            'faster-whisper (large-v3)': 'Eingeschränkt – Python-Overhead',
          },
          {
            'Metrik': 'Ausgabeformate',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python-Objekte (start, end, text)',
          },
        ],
        note: 'whisper.cpp schreibt die Ausgabe direkt in gängige Untertitel- und Transkriptformate (SRT, VTT, JSON, CSV, txt) – ideal für Untertitel-Workflows. faster-whisper liefert einen Python-Generator von Segment-Objekten mit `start`-, `end`- und `text`-Attributen – ideal für LLM-Pipeline-Chaining. Für Untertitel-Generierung ist whisper.cpp einfacher; für Pipelines, die Segmente programmatisch verarbeiten, ist faster-whisper einfacher.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Echtzeit-Transkription einrichten',
        content:
          '**Echtzeit-Transkription verarbeitet Audio in Chunks, wie es vom Mikrofon ankommt, und erzeugt Text mit einer kurzen Verzögerung gegenüber der Sprache.** Beide Tools unterstützen dies, jedoch mit unterschiedlichen Trade-offs.',
        items: [
          '**whisper.cpp Stream-Modus:** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4` ausführen. Verarbeitet 3-Sekunden-Audio-Chunks; ~0,5–1,5 Sekunden Verzögerung mit dem small-Modell. Kein Python erforderlich.',
          '**faster-whisper VAD-Pipeline:** `vad_filter=True` in `model.transcribe()` verwenden. Silero VAD segmentiert Audio automatisch an Stille-Grenzen – natürlichere Chunks als bei festen Zeitfenstern.',
          '**Praktische Latenz:** 0,5–2 Sekunden hinter der Livesprache mit small- oder medium-Modellen. Tiny verwenden für geringste Latenz (< 0,5 Sekunden, aber höherer WER).',
          '**Modellwahl für Echtzeit:** small oder base ist der praktische Sweet Spot – schnell genug, um mit der Sprache mitzuhalten, genau genug für sauberes Audio. large-v3 nur für Echtzeit verwenden, wenn eine dedizierte GPU verfügbar ist.',
          '**Mikrofon-Eingabe:** whisper.cpp liest Rohaudiosignale über SDL2 oder portaudio. faster-whisper liest Audio-Arrays aus beliebigen Python-Audiobibliotheken (sounddevice, pyaudio, soundfile).',
          '**Stabilität:** whisper.cpp stream mode kann bei Stille wiederholte Tokens erzeugen. Mit `--suppress-blank` und `--no-speech-threshold` unterdrücken.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp gewinnt',
        content:
          '**Auf M1, M2, M3, M4 und M5 Macs ist whisper.cpp mit Core ML / Metal-Beschleunigung das richtige Tool – ohne Frage.** faster-whisper hat keinen Metal-Support und läuft auf dem Mac nur über CPU mit rund 3-facher Echtzeit für large-v3. whisper.cpp mit Metal erreicht ~10-fache Echtzeit auf dem M5 Pro – ein 3-facher Geschwindigkeitsvorteil.',
        items: [
          '**Core ML-Export:** `./models/generate-coreml-model.sh large-v3` ausführen, um den Encoder ins Core ML-Format zu exportieren. Dies verlagert die Encoder-Inferenz auf die Apple Neural Engine.',
          '**M5 Pro-Benchmark (large-v3, Metal):** ~10-fache Echtzeit. 60 Minuten Audio werden in ~6 Minuten transkribiert. Hinweis: Der M5 Pro wurde im März 2026 eingeführt – dies sind frühe Community-Benchmarks. Die Performance kann sich mit whisper.cpp-Updates verbessern, die für die M5 Neural Engine optimiert sind.',
          '**M3 MacBook Air-Benchmark (large-v3, Metal):** ~7-fache Echtzeit. 60 Minuten in ~8,5 Minuten.',
          '**Arbeitsspeicher:** Unified Memory bedeutet kein separater VRAM – ein 16 GB M5 Pro kann large-v3 (~3 GB) problemlos neben anderen Prozessen ausführen.',
          '**faster-whisper auf Mac:** Nur CPU, int8. Large-v3 mit ~3-facher Echtzeit. Für Batch-Transkription über Nacht nutzbar, aber nicht für Echtzeit oder zeitkritische Workflows.',
          '**Empfehlung:** whisper.cpp für alle Mac-STT-Aufgaben verwenden. pywhispercpp hinzufügen, wenn Python-Integration bei gleichzeitiger Metal-Beschleunigung benötigt wird.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper gewinnt',
        content:
          '**Auf Windows und Linux mit NVIDIA-GPUs ist faster-whisper die überlegene Wahl.** Der CTranslate2 CUDA-Backend ist besser optimiert als whisper.cpps CUDA-Pfad – ~12× vs. ~8-fache Echtzeit für large-v3 auf dem RTX 4070, bei geringerem VRAM-Verbrauch.',
        items: [
          '**RTX 4070 (12 GB)-Benchmark (large-v3 int8):** ~12-fache Echtzeit, ~2,5 GB VRAM.',
          '**RTX 3060 (12 GB)-Benchmark (large-v3 int8):** ~8-fache Echtzeit, ~2,5 GB VRAM.',
          '**RTX 4060 (8 GB)-Benchmark (large-v3 int8):** ~7-fache Echtzeit, ~2,5 GB VRAM – passt problemlos.',
          '**int8 vs. float16:** int8 ist ~2× schneller und benötigt ~40 % weniger VRAM bei vernachlässigbarem Genauigkeitsverlust. `compute_type="int8"` auf NVIDIA immer verwenden.',
          '**Batch-Verarbeitung:** Der `batched=True`-Parameter von faster-whisper ermöglicht die parallele Verarbeitung mehrerer Audiodateien und maximiert die GPU-Auslastung bei großen Transkriptionsjobs.',
          '**Python-Pipeline-Integration:** faster-whisper fügt sich direkt in LangChain, Haystack und eigene Python-Pipelines ein. Kein Subprocess-Overhead im Vergleich zum Wrapping von whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Wann welches Tool verwenden?',
        content: 'Eine direkte Zuordnung vom Anwendungsfall zum richtigen Tool:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp auf Apple Silicon und Embedded/plattformübergreifenden Targets verwenden; faster-whisper auf NVIDIA-GPUs und in Python-Pipelines.',
          },
          {
            type: 'plain-terms',
            text: 'Mit einem Mac: whisper.cpp wählen – es ist 3× schneller als faster-whisper auf Apple-Hardware. Mit einer NVIDIA GPU und Python: faster-whisper wählen – es ist schneller und benötigt 40 % weniger GPU-Speicher.',
          },
        ],
        columns: ['Szenario', 'Empfehlung', 'Begründung'],
        rows: [
          {
            'Szenario': 'Apple Silicon Mac (beliebiges Modell)',
            'Empfehlung': 'whisper.cpp',
            'Begründung': 'Metal / Core ML-Beschleunigung – 3× schneller als faster-whisper (nur CPU auf Mac)',
          },
          {
            'Szenario': 'NVIDIA GPU-Server (Linux/Windows)',
            'Empfehlung': 'faster-whisper',
            'Begründung': 'CTranslate2 int8 – schneller und geringerer VRAM als whisper.cpp CUDA-Pfad',
          },
          {
            'Szenario': 'Python-Datenpipeline',
            'Empfehlung': 'faster-whisper',
            'Begründung': 'Native Python-API; kein Subprocess-Wrapper; VAD integriert',
          },
          {
            'Szenario': 'Raspberry Pi / Embedded Linux',
            'Empfehlung': 'whisper.cpp',
            'Begründung': 'Reines C-Binary; kein Python-Runtime-Overhead; ARM NEON-optimiert',
          },
          {
            'Szenario': 'Echtzeit-Sprachassistent',
            'Empfehlung': 'whisper.cpp',
            'Begründung': 'Stream-Modus mit niedrigem Overhead; funktioniert ohne Python auf Pi / Embedded',
          },
          {
            'Szenario': 'Batch-Transkription (großes Audio-Archiv)',
            'Empfehlung': 'faster-whisper',
            'Begründung': 'Batch-Inferenz, GPU-Auslastung, Python-Async-Integration',
          },
          {
            'Szenario': 'AMD GPU (Vulkan)',
            'Empfehlung': 'whisper.cpp',
            'Begründung': 'Vulkan-Backend-Unterstützung; faster-whisper ist CUDA-only',
          },
          {
            'Szenario': 'Nur-CPU Linux-Server',
            'Empfehlung': 'faster-whisper',
            'Begründung': 'int8-Quantisierung gibt ~30 % Geschwindigkeitsvorteil auf x86 CPU',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'Über whisper.cpp und faster-whisper hinaus',
        content:
          'Zwei weitere Tools erweitern Whisper um Funktionen, die weder whisper.cpp noch faster-whisper standardmäßig bieten: Sprecherdiarisierung und extrem schnelle Batch-GPU-Inferenz.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** Basiert auf faster-whisper und fügt wortgenaue Zeitstempel sowie Sprecherdiarisierung hinzu – es wird identifiziert, welcher Sprecher was gesagt hat. Am besten für: Meeting-Transkription mit Sprecher-Labels, Podcast-Bearbeitung und Interview-Transkripte. Installation mit `pip install whisperx` und Hugging-Face-Token für das Diarisierungsmodell.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** Ein Hugging Face Transformers Pipeline-Wrapper mit Flash-Attention-2-Unterstützung für deutlich schnellere GPU-Inferenz als standard faster-whisper auf NVIDIA-Hardware. Am besten für: Batch-Verarbeitung großer Audio-Archive auf NVIDIA-GPUs. Erfordert eine Flash-Attention-2-kompatible GPU (Ampere oder neuer: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Häufige Probleme und Lösungen',
        content: 'Die häufigsten Setup- und Laufzeit-Probleme mit direkten Lösungen:',
        items: [
          '**CUDA-Versionskonflikt:** faster-whisper erfordert CUDA 11.8 oder höher. Prüfen mit `nvcc --version`. Bei älterer CUDA-Version: Treiber aktualisieren oder faster-whisper in einer conda-Umgebung mit `cudatoolkit=11.8` installieren.',
          '**Metal-Modell-Export schlägt fehl:** Xcode Command Line Tools müssen installiert sein – `xcode-select --install` ausführen. Das Core ML-Exportskript erfordert das Python-Paket `coremltools`: `pip install coremltools`.',
          '**Halluzination bei Stille:** Beide Tools können bei stillen Audiosegmenten wiederholte Füll-Tokens erzeugen. `--no-speech-threshold 0.6` im whisper.cpp Stream-Modus verwenden oder `vad_filter=True` in faster-whispers `model.transcribe()`, um stille Segmente automatisch zu überspringen.',
          '**Speichermangel bei large-v3:** Auf int8-Quantisierung in faster-whisper wechseln (`compute_type="int8"`) – reduziert VRAM von ~5 GB (float16) auf ~2,5 GB. Bei whisper.cpp: quantisierte GGML-Variante verwenden (z. B. `ggml-large-v3-q5_0.bin`), was den Speicher auf ~3–4 GB reduziert.',
          '**Unleserliche Ausgabe bei nicht-englischen Aufnahmen:** Keine `.en`-Modellvarianten (tiny.en, base.en) für nicht-englische Sprache verwenden – diese sind English-only. Mehrsprachige Modelle (base, small, medium, large-v3) verwenden und die Sprache explizit angeben: `-l de` in whisper.cpp oder `language="de"` in faster-whisper.',
          '**Langsame CPU-Inferenz:** Sicherstellen, dass die CPU AVX2-Instruktionen unterstützt (für optimierte CPU-Inferenz erforderlich). Prüfen mit `grep avx2 /proc/cpuinfo` unter Linux oder `sysctl machdep.cpu.features` auf Mac. CPUs ohne AVX2 greifen auf generisches SIMD zurück und sind 2–3× langsamer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist die Transkriptionsgenauigkeit bei whisper.cpp und faster-whisper gleich?',
            a: 'Ja. Beide Tools verwenden dieselben OpenAI-Whisper-Modellgewichte – das Modell selbst ist identisch. Der Unterschied liegt ausschließlich in der Inferenz-Laufzeit (C/C++ vs. CTranslate2 Python). Der WER auf derselben Audiodatei liegt innerhalb von 0,1 % absolut voneinander – das liegt im Rahmen der normalen Variation durch Beam-Search-Zufälligkeit.',
          },
          {
            q: 'Kann ich faster-whisper auf einem Mac mit Apple Silicon verwenden?',
            a: 'Ja, aber es läuft nur über CPU – faster-whisper hat keinen Metal-Support. Auf einem M5 Pro läuft faster-whisper large-v3 mit ~3-facher Echtzeit (CPU int8), verglichen mit whisper.cpps ~10-facher Echtzeit mit Metal. Für die meisten Mac-Nutzer ist whisper.cpp 3× schneller für dasselbe Modell. Der einzige Grund, faster-whisper auf dem Mac zu verwenden, ist, wenn eine Python-Pipeline bereits davon abhängt und Geschwindigkeit keine kritische Rolle spielt.',
          },
          {
            q: 'Welche Whisper-Modellgröße sollte ich für einen Sprachassistenten verwenden?',
            a: 'Für Echtzeit-Sprachinterfaces ist Whisper small die Standardempfehlung – 3,4 % WER auf sauberem Englisch, ~200 ms STT-Latenz auf einer modernen CPU oder GPU und passt in 2 GB RAM. tiny verwenden bei sehr eingeschränkter Hardware (Raspberry Pi Zero 2W, ältere Smartphones) und wenn ~7,6 % WER akzeptabel sind. medium oder large-v3 nur für Batch-Transkription verwenden, bei der Latenz keine Rolle spielt.',
          },
          {
            q: 'Unterstützt whisper.cpp andere Sprachen als Englisch?',
            a: 'Ja. Alle mehrsprachigen Whisper-Modelle (base, small, medium, large-v3) unterstützen 99 Sprachen. `-l [Sprachcode]` in der CLI hinzufügen: `-l de` für Deutsch, `-l fr` für Französisch, `-l ja` für Japanisch usw. Die Modelle tiny.en und base.en sind English-only und etwas genauer für Englisch als ihre mehrsprachigen Äquivalente.',
          },
          {
            q: 'Wie installiere ich faster-whisper mit CUDA-Unterstützung?',
            a: 'Installation mit `pip install faster-whisper`. CUDA-Unterstützung erfordert CUDA 11.8 oder höher und cuDNN 8.x auf dem System. CUDA-Version prüfen mit `nvcc --version`. Dann `device="cuda"` beim Laden des Modells angeben: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Wird CUDA nicht erkannt, wechselt faster-whisper automatisch zur CPU.',
          },
          {
            q: 'Welches ist genauer – whisper.cpp oder faster-whisper?',
            a: 'Identisch. Beide Tools verwenden dieselben OpenAI-Whisper-Modellgewichte und erzeugen denselben WER für dieselbe Audiodatei. Der Unterschied zwischen whisper.cpp und faster-whisper liegt in Geschwindigkeit und Plattformunterstützung, nicht in der Transkriptionsgenauigkeit. Jede WER-Differenz zwischen Läufen liegt im Rahmen normaler Beam-Search-Variation, nicht an der Laufzeit.',
          },
          {
            q: 'Kann ich Whisper large-v3 mit 8 GB RAM betreiben?',
            a: 'Ja auf der GPU – large-v3 int8 in faster-whisper benötigt ~2,5 GB VRAM und läuft auf jeder 8-GB-GPU. Auf reiner CPU-Hardware sind 8 GB RAM für large-v3 knapp (float32 benötigt ~10 GB). medium (5 GB RAM) oder small (2 GB RAM) auf Nur-CPU-Systemen verwenden. whisper.cpp ist auf der CPU speichereffizienter als faster-whisper durch geringeren Laufzeit-Overhead.',
          },
          {
            q: 'Was kostet lokales Whisper im Vergleich zu Cloud-STT?',
            a: 'Null laufende Kosten. Cloud-STT-Dienste berechnen ca. 0,005–0,022 €/Min. – ein Entwickler, der 8 Stunden Meetings pro Woche transkribiert, zahlt ca. 110–440 €/Monat. Lokales Whisper läuft auf bereits vorhandener Hardware, ohne minutenbasierte Gebühren, ohne API-Schlüsselverwaltung und ohne dass Audiodaten das eigene Gerät verlassen.',
          },
          {
            q: 'Ist lokale Whisper-Transkription DSGVO-konform?',
            a: 'Ja – für personenbezogene Audiodaten (Kundengespräche, Arzt-Patient-Dialoge, Mitarbeitermeetings) ist lokale Transkription mit whisper.cpp oder faster-whisper die datenschutzkonforme Lösung. Da die Audiodaten das eigene Gerät nie verlassen und keine Übertragung an externe Dienstleister stattfindet, entfällt die Pflicht zum Abschluss eines Auftragsverarbeitungsvertrags (AVV) nach DSGVO Art. 28. Das BSI empfiehlt für sicherheitskritische Anwendungen lokale Verarbeitung gegenüber Cloud-Diensten, da keine Datenübermittlung an Dritte erfolgt.',
          },
          {
            q: 'Ist Whisper für den deutschen Mittelstand geeignet?',
            a: 'Ja – insbesondere für Branchen mit hohen Datenschutzanforderungen wie Anwaltskanzleien, Arztpraxen, Steuerberater und Unternehmensberatungen. Der Einsatz von whisper.cpp oder faster-whisper ermöglicht DSGVO-konforme Protokollierung von Kundengesprächen und Besprechungen ohne Cloud-Abhängigkeit. Kein laufendes Abonnement, keine API-Kosten, volle Kontrolle über die Audiodaten. Für den Einstieg empfiehlt sich Whisper small (3,4 % WER, 2 GB RAM) oder medium (2,9 % WER, 5 GB RAM) – beide laufen auf handelsüblicher Hardware ohne NVIDIA-GPU.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[whisper.cpp auf GitHub](https://github.com/ggerganov/whisper.cpp) — Quellcode, Build-Anleitungen, Modell-Download-Skripte und Metal/Core ML-Setup-Guide.',
          '[faster-whisper auf GitHub](https://github.com/SYSTRAN/faster-whisper) — Quellcode, Python-API-Dokumentation und Benchmark-Ergebnisse.',
          '[distil-whisper/distil-large-v3 auf Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — Modellkarte, Benchmark-Ergebnisse und Nutzungshinweise für die destillierte Whisper-Variante.',
          '[WhisperX auf GitHub](https://github.com/m-bain/whisperX) — Wortgenaue Zeitstempel und Sprecherdiarisierung basierend auf faster-whisper.',
          '[insanely-fast-whisper auf GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Flash-Attention-2 Whisper-Pipeline für maximalen NVIDIA-GPU-Durchsatz.',
          '[OpenAI Whisper auf GitHub](https://github.com/openai/whisper) — Originales Whisper-Modell, Paper und Modellkarten für alle Größen.',
          '[OpenAI Whisper Paper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — „Robust Speech Recognition via Large-Scale Weak Supervision." Quelle der WER-Werte.',
          '[CTranslate2-Dokumentation](https://github.com/OpenNMT/CTranslate2) — Quantisierungsdetails, Hardware-Unterstützung und int8-Optimierungsgrundlagen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale TTS und Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=de) — Der TTS-Begleiter: transkribierte Texte wieder in Sprache umwandeln, offline.',
          '[Vollständig offline Sprachassistenten erstellen 2026](/power-local-llm/build-local-voice-assistant-2026?lang=de) — Whisper STT mit einem lokalen LLM und Piper TTS zu einer vollständigen Sprach-Pipeline verbinden.',
          '[Lokale multimodale KI-Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=de) — Vision-Modelle neben STT und TTS für einen vollständigen lokalen multimodalen Stack hinzufügen.',
          '[Lokaler LLM Hardware-Guide 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — GPU- und RAM-Anforderungen für die vollständige Sprach- + LLM-Pipeline.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen](/power-local-llm/voice-assistant-local-mobile-offline?lang=de) — Mobile Version: WhisperKit auf iPhone, Layla auf Android.',
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
