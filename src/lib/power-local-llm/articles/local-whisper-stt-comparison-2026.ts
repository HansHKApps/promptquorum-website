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
          '**Home assistant integration:** Whisper running locally means wake words and voice commands never leave your home network. See [local Whisper in Home Assistant →](/smart-home/local-whisper-home-assistant) for the add-on setup that replaces cloud STT entirely.',
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
    seoTitle: 'Whisper.cpp vs. faster-whisper 2026: Lokale STT-Benchmarks',
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
          '**Home-Assistant-Integration:** Lokal laufendes Whisper bedeutet, dass Aktivierungswörter und Sprachbefehle das Heimnetzwerk nie verlassen. Siehe [lokales Whisper in Home Assistant →](/de/smart-home/local-whisper-home-assistant) für das Add-on-Setup, das Cloud-STT vollständig ersetzt.',
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
          '[Lokale TTS und Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Der TTS-Begleiter: transkribierte Texte wieder in Sprache umwandeln, offline.',
          '[Vollständig offline Sprachassistenten erstellen 2026](/de/power-local-llm/build-local-voice-assistant-2026) — Whisper STT mit einem lokalen LLM und Piper TTS zu einer vollständigen Sprach-Pipeline verbinden.',
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Vision-Modelle neben STT und TTS für einen vollständigen lokalen multimodalen Stack hinzufügen.',
          '[Lokaler LLM Hardware-Guide 2026](/de/local-llms/local-llm-hardware-guide-2026) — GPU- und RAM-Anforderungen für die vollständige Sprach- + LLM-Pipeline.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen](/de/power-local-llm/voice-assistant-local-mobile-offline) — Mobile Version: WhisperKit auf iPhone, Layla auf Android.',
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
    title: 'Whisper.cpp vs faster-whisper 2026 : Benchmarks STT local, configuration & accélération GPU',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026 : Benchmarks STT local & configuration',
    intro:
      'whisper.cpp et faster-whisper sont les deux implémentations dominantes du modèle Whisper d\'OpenAI pour la transcription locale hors ligne en 2026. Ce guide whisper.cpp vs faster-whisper détermine quel outil s\'impose sur chaque plateforme. whisper.cpp est un portage pur C/C++ fonctionnant sur Apple Metal, CUDA, Vulkan et CPU — idéal pour Apple Silicon, les systèmes embarqués et les applications vocales temps réel. faster-whisper est une bibliothèque Python utilisant CTranslate2 qui atteint environ 4× le débit de l\'implémentation originale de Whisper sur GPU NVIDIA via la quantification int8.',
    metaDescription:
      'whisper.cpp vs faster-whisper 2026 : benchmarks STT local, GPU vs CPU, Apple Metal, transcription temps réel, installation. Entièrement hors ligne.',
    twitterDescription:
      'whisper.cpp vs faster-whisper : benchmarks STT local 2026. Vitesse CPU vs GPU, Apple Metal, précision WER, transcription temps réel. Pas de cloud, pas de coût.',
    audience:
      'Développeurs, chercheurs et architectes système ayant besoin d\'une transcription vocale hors ligne et confidentielle — pour notes de réunion, interfaces vocales, outils d\'accessibilité ou environnements sécurisés.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'reconnaissance vocale locale',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'reconnaissance vocale locale 2026',
      'transcription hors ligne',
      'whisper transcription locale',
      'benchmark faster-whisper',
      'whisper cpp apple silicon',
      'STT local GPU',
      'installation whisper cpp',
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
      '**whisper.cpp vs faster-whisper — les deux runtimes Whisper locaux dominants — s\'imposent chacun sur leur plateforme cible.** **Sur Apple Silicon (Mac M-series), whisper.cpp avec l\'accélération Metal est l\'option STT locale la plus rapide en 2026 — large-v3 tourne à ~10× le temps réel sur M5 Pro.** Sur les serveurs GPU NVIDIA et les pipelines Python, faster-whisper avec la quantification int8 CTranslate2 est le meilleur choix, atteignant ~12× le temps réel sur RTX 4070 avec seulement 2.5 GB de VRAM pour le modèle large-v3. Les deux outils utilisent les mêmes poids de modèle Whisper d\'OpenAI (tiny à large-v3) ; la différence réside dans l\'optimisation du runtime et le chemin d\'intégration. Sur CPU uniquement, les deux sont utilisables pour les modèles tiny et base — faster-whisper a un léger avantage (~20× vs ~15× temps réel) grâce à la quantification int8.',
    quickAnswerTop: {
      fr: {
        question: 'Whisper.cpp ou faster-whisper pour la reconnaissance vocale locale en 2026 ?',
        answer:
          'Le choix dépend de votre matériel et de vos besoins d\'intégration. Sur Apple Silicon (M1–M5), whisper.cpp avec l\'accélération Metal est plus rapide et le choix naturel — ~10× le temps réel sur large-v3 sans dépendance Python. Sur GPU NVIDIA, faster-whisper est plus rapide et plus facile à intégrer dans les pipelines Python, avec ~12× le temps réel sur large-v3 et 40 % de VRAM en moins via la quantification int8. Sur CPU uniquement, les deux fonctionnent pour les petits modèles ; faster-whisper a un léger avantage en vitesse.',
        bullets: [
          'Apple Silicon → whisper.cpp avec Core ML / Metal. ~10× le temps réel sur M5 Pro avec large-v3.',
          'GPU NVIDIA → faster-whisper. ~12× le temps réel sur RTX 4070 avec large-v3 int8, ~2.5 GB VRAM.',
          'Pipeline Python → faster-whisper. API Python native, configuration en 5 lignes, VAD intégré.',
          'Embarqué / Raspberry Pi → whisper.cpp. Binaire C pur, aucun runtime Python requis.',
          'Voix temps réel → mode stream whisper.cpp ou pipeline VAD faster-whisper.',
          'Transcription par lots → faster-whisper. Meilleur débit sur GPU ; batching asynchrone facile.',
          'Précision WER : identique pour les deux — ils utilisent les mêmes poids de modèle Whisper.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'En un coup d\'œil', anchor: '#quick-facts' },
      { label: 'Pourquoi la reconnaissance vocale locale ?', anchor: '#why-local-stt' },
      { label: 'Tailles des modèles Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper : l\'alternative plus rapide', anchor: '#distil-whisper' },
      { label: 'whisper.cpp – le port C/C++', anchor: '#whisper-cpp' },
      { label: 'faster-whisper – le port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Comparaison directe : tableau de benchmarks', anchor: '#benchmarks' },
      { label: 'Configuration de la transcription en temps réel', anchor: '#real-time' },
      { label: 'Apple Silicon : whisper.cpp gagne', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA : faster-whisper gagne', anchor: '#nvidia-gpu' },
      { label: 'Quel outil utiliser ?', anchor: '#when-to-use' },
      { label: 'Au-delà de whisper.cpp et faster-whisper', anchor: '#beyond-tools' },
      { label: 'Problèmes courants et solutions', anchor: '#troubleshooting' },
      { label: 'Foire aux questions', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp est le meilleur choix STT local pour Apple Silicon.** Le port C/C++ exploite Core ML et Apple Metal pour l\'accélération matérielle — large-v3 à ~10× le temps réel sur M5 Pro, sans dépendance Python.',
          '**faster-whisper est le meilleur choix STT local pour les GPU NVIDIA et les pipelines Python.** La quantification int8 CTranslate2 réduit le VRAM de ~40 % et multiplie le débit par ~4× par rapport à l\'implémentation OpenAI originale — large-v3 à ~12× le temps réel sur RTX 4070 avec ~2.5 GB de VRAM.',
          '**Les deux outils utilisent des poids de modèle Whisper identiques d\'OpenAI.** Le WER (taux d\'erreur de mots) est identique — la différence réside dans la performance d\'exécution et le chemin d\'intégration, pas dans la précision de transcription.',
          '**Whisper large-v3 offre la meilleure précision avec 2.5 % de WER sur l\'anglais.** Pour la plupart des cas d\'usage, Whisper small (3.4 % WER, 2 GB RAM) ou medium (2.9 % WER, 5 GB RAM) offre un meilleur compromis vitesse-précision.',
          '**La transcription en temps réel est accessible avec les deux outils** — whisper.cpp via son flag `--stream`, faster-whisper via son pipeline VAD intégré. La latence pratique est de 0.5–2 secondes derrière la parole en direct selon la taille du modèle.',
          '**whisper.cpp fonctionne sur CPU, Metal, CUDA et Vulkan** — seul choix pour les déploiements embarqués multi-plateformes (Raspberry Pi, GPU Windows, serveurs ARM). faster-whisper supporte uniquement CPU et CUDA (pas de Metal sur Mac).',
          '**Pour Raspberry Pi et Linux embarqué**, whisper.cpp tiny/base sur CPU est le plafond pratique — tiny à ~15× le temps réel sur Pi 5, base à ~6×. Les deux tiennent dans 1 GB de RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'En un coup d\'œil',
        items: [
          '**Les deux outils :** basés sur le modèle Whisper open source d\'OpenAI (licence MIT). Même précision — runtimes différents.',
          '**whisper.cpp :** écrit en C/C++ par Georgi Gerganov. Supporte CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Aucun Python requis.',
          '**faster-whisper :** bibliothèque Python utilisant CTranslate2. Supporte CPU (int8) et CUDA. Pas de support Apple Metal.',
          '**Tailles de modèles Whisper :** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1.55B). Tous au format GGML / CTranslate2.',
          '**Meilleur modèle pour la plupart des usages :** Whisper small — 3.4 % WER, tourne dans 2 GB de RAM, 6× le temps réel sur CPU moderne.',
          '**Benchmark RTX 4070 (large-v3) :** faster-whisper ~12× temps réel ; whisper.cpp CUDA ~8× temps réel. faster-whisper gagne sur NVIDIA.',
          '**Benchmark M5 Pro (large-v3) :** whisper.cpp Metal ~10× temps réel ; faster-whisper CPU uniquement ~3× temps réel. whisper.cpp gagne sur Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Pourquoi la reconnaissance vocale locale ?',
        content:
          'Les services STT cloud (Google Speech-to-Text, AWS Transcribe, Azure Speech) facturent à la minute audio — en général env. 0.005–0.022 €/min — et envoient vos données audio vers des serveurs distants. Pour les applications sensibles (dictée médicale, enregistrements juridiques, entretiens journalistiques, réunions d\'entreprise), la transcription locale élimine entièrement l\'exposition des données. La CNIL recommande le traitement local pour les données professionnelles sensibles lorsqu\'une solution viable est disponible.',
        items: [
          '**Confidentialité :** l\'audio ne quitte jamais votre machine. Aucun contrat de sous-traitance RGPD requis — le traitement s\'effectue localement.',
          '**Coût :** zéro frais à la minute. Un développeur transcrivant 8 heures de réunions par semaine économise env. 110–440 €/mois par rapport aux tarifs STT cloud.',
          '**Hors ligne :** fonctionne en avion, dans des installations sécurisées, sans connexion fiable. Aucune gestion de clé API.',
          '**Latence :** pas d\'aller-retour upload/download. Pour les interfaces vocales temps réel, le traitement local réduit la latence STT de 300–800 ms (cloud) à 50–300 ms.',
          '**Personnalisation :** affinage sur un vocabulaire spécifique au domaine. Utilisation de n\'importe quelle taille de modèle adaptée à votre matériel.',
          '**Intégration Home Assistant :** Whisper en local signifie que les mots de réveil et les commandes vocales ne quittent jamais votre réseau domestique. Voir [Whisper local dans Home Assistant →](/fr/smart-home/local-whisper-home-assistant) pour la configuration du module qui remplace entièrement le STT cloud.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tailles des modèles Whisper',
        content:
          'whisper.cpp et faster-whisper utilisent les mêmes poids de modèle Whisper, convertis dans leur format respectif (GGML pour whisper.cpp, CTranslate2 pour faster-whisper). Choisissez la taille de modèle en fonction de votre budget VRAM/RAM et de vos exigences de précision.',
        columns: ['Modèle', 'Paramètres', 'VRAM / RAM', 'WER anglais', 'Facteur de vitesse (vs temps réel, RTX 4070)'],
        rows: [
          {
            'Modèle': 'tiny',
            'Paramètres': '39M',
            'VRAM / RAM': '~1 GB',
            'WER anglais': '7.6 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '~32×',
          },
          {
            'Modèle': 'base',
            'Paramètres': '74M',
            'VRAM / RAM': '~1 GB',
            'WER anglais': '5.0 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '~16×',
          },
          {
            'Modèle': 'small',
            'Paramètres': '244M',
            'VRAM / RAM': '~2 GB',
            'WER anglais': '3.4 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '~6×',
          },
          {
            'Modèle': 'medium',
            'Paramètres': '769M',
            'VRAM / RAM': '~5 GB',
            'WER anglais': '2.9 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '~2×',
          },
          {
            'Modèle': 'large-v3',
            'Paramètres': '1.55B',
            'VRAM / RAM': '~10 GB',
            'WER anglais': '2.5 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '1× (référence)',
          },
          {
            'Modèle': 'distil-large-v3',
            'Paramètres': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER anglais': '~2.6 %',
            'Facteur de vitesse (vs temps réel, RTX 4070)': '~6×',
          },
        ],
        note: 'Valeurs WER (taux d\'erreur de mots) issues de l\'article Whisper sur le jeu de test LibriSpeech clean. Plus la valeur est basse, meilleure est la précision. Facteurs de vitesse pour faster-whisper int8 sur RTX 4070. Valeurs distil-large-v3 issues de l\'article Distil-Whisper.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper : l\'alternative plus rapide',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) est une variante distillée de large-v3 avec ~50 % de paramètres en moins, tournant ~6× plus vite pour un WER supérieur de seulement ~1 %.** C\'est le bon choix quand la vitesse de transcription prime sur le dernier pourcent de précision. distil-large-v3 fonctionne avec faster-whisper (support CTranslate2 natif) et whisper.cpp (via conversion au format GGML).',
        items: [
          '**Paramètres :** ~756M — environ la moitié des 1.55B de large-v3, tenant dans ~4 GB de VRAM au lieu de ~10 GB.',
          '**Vitesse :** ~6× le temps réel sur RTX 4070 (vs 1× de référence pour large-v3) — comparable à medium en vitesse, avec une précision proche de large-v3.',
          '**WER :** ~2.6 % sur l\'anglais — seulement ~0.1 % au-dessus des 2.5 % de large-v3. Différence imperceptible en pratique sur de la parole typique.',
          '**Compatibilité :** fonctionne nativement avec faster-whisper (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). Pour whisper.cpp : conversion au format GGML via le script de conversion distil-whisper.',
          '**Idéal pour :** transcription par lots, déploiements serveur avec VRAM limitée, et tout cas d\'usage nécessitant la qualité de large-v3 à la vitesse du modèle medium.',
          '**Déconseillé pour :** la transcription multilingue — distil-large-v3 est optimisé uniquement pour l\'anglais. Pour d\'autres langues, utiliser large-v3 ou medium.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp – le port C/C++',
        content:
          '**whisper.cpp (par Georgi Gerganov) est une réimplémentation pure C/C++ du modèle Whisper d\'OpenAI, optimisée pour l\'inférence à faibles ressources sur toutes plateformes.** Aucun Python, aucun toolkit CUDA requis — fonctionne sur pratiquement tout matériel, du Raspberry Pi au Apple M5 Pro.',
        items: [
          '**Support plateforme :** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (GPU AMD/Intel), OpenCL.',
          '**Avantage Apple Silicon :** whisper.cpp exporte les modèles au format Core ML, permettant l\'inférence sur l\'Apple Neural Engine. Large-v3 tourne à ~10× le temps réel sur M5 Pro via Metal — plus rapide que tout aller-retour cloud.',
          '**Installation :** cloner le dépôt, exécuter `make` (ou `cmake`). Binaires pré-compilés disponibles pour les plateformes courantes. Aucune dépendance Python.',
          '**Téléchargement du modèle :** `bash ./models/download-ggml-model.sh base.en` — télécharge le fichier modèle GGML (~142 MB pour base).',
          '**Exemple CLI :** `./main -m models/ggml-base.bin -f audio.wav` — transcrit un fichier WAV vers stdout. Ajouter `-l fr` pour le français.',
          '**Mode stream temps réel :** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcrit depuis le microphone par chunks de 3 secondes.',
          '**Wrapper Python :** pywhispercpp fournit une liaison Python pour whisper.cpp, permettant son utilisation dans des pipelines Python sans sacrifier l\'accélération Metal.',
          '**Limitation :** pas de VAD natif. Le mode stream nécessite l\'ajustement des paramètres `--step` et `--length` selon le cas d\'usage.',
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
        title: 'faster-whisper – le port CTranslate2',
        content:
          '**faster-whisper (par SYSTRAN) est une bibliothèque Python réimplémentant l\'inférence Whisper avec CTranslate2 — un moteur d\'inférence C++ hautement optimisé supportant la quantification int8, qui réduit l\'utilisation VRAM et augmente le débit.** Sur GPU NVIDIA, faster-whisper est l\'implémentation Whisper locale la plus rapide disponible.',
        items: [
          '**Support plateforme :** CPU (quantification int8) et GPU NVIDIA CUDA. Pas de support Apple Metal — tourne uniquement sur CPU sur Mac.',
          '**Avantage int8 :** la quantification int8 CTranslate2 réduit le VRAM de ~40 % et augmente la vitesse d\'inférence de ~2× vs float16, avec un impact WER négligeable (< 0.1 % absolu).',
          '**Installation :** `pip install faster-whisper` — aucune compilation requise. Le support CUDA nécessite CUDA 11.8+ et cuDNN 8.x.',
          '**VAD intégré :** faster-whisper inclut l\'intégration Silero VAD, qui ignore automatiquement les segments audio silencieux — crucial pour les pipelines de transcription temps réel.',
          '**Python natif :** l\'API Python directe facilite le chaînage avec des LLM, des bibliothèques de traitement audio et des frameworks web.',
          '**Vitesse :** large-v3 int8 sur RTX 4070 à ~12× le temps réel avec ~2.5 GB de VRAM. CPU int8 atteint ~20× le temps réel pour le modèle tiny.',
          '**Traitement par lots :** faster-whisper supporte l\'inférence en batch pour traiter efficacement de grandes archives audio.',
          '**Limitation :** pas de support Metal sur Mac — tourne uniquement sur CPU sur Apple Silicon, à ~3× le temps réel pour large-v3 vs ~10× de whisper.cpp avec Metal.',
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
        title: 'Comparaison directe : tableau de benchmarks',
        content:
          'Tous les benchmarks utilisent le modèle large-v3 sauf indication contraire. La vitesse est mesurée en multiples du temps réel (ex. 10× signifie : 60 minutes d\'audio transcrites en 6 minutes). Valeurs VRAM pour les runs GPU ; valeurs RAM pour les runs CPU.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Sur Apple Silicon, whisper.cpp avec Metal transcrit large-v3 à ~10× le temps réel ; sur GPU NVIDIA, faster-whisper avec int8 atteint ~12× — chaque outil s\'impose nettement sur sa plateforme cible.',
          },
          {
            type: 'plain-terms',
            text: 'Sur Mac : choisir whisper.cpp (exploite l\'Apple Neural Engine) ; sur Windows/Linux avec GPU NVIDIA : choisir faster-whisper (12× plus rapide que le temps réel avec 40 % de mémoire GPU en moins).',
          },
        ],
        columns: ['Métrique', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'Métrique': 'Plateforme / langage',
            'whisper.cpp (large-v3)': 'C/C++ (multi-plateforme)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'Métrique': 'Support GPU',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'CUDA uniquement',
          },
          {
            'Métrique': 'Optimisation CPU',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'Quantification int8',
          },
          {
            'Métrique': 'Vitesse – RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8× temps réel',
            'faster-whisper (large-v3)': '~12× temps réel ✓',
          },
          {
            'Métrique': 'Vitesse – M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10× temps réel (Metal) ✓',
            'faster-whisper (large-v3)': '~3× temps réel (CPU uniquement)',
          },
          {
            'Métrique': 'Vitesse – CPU uniquement (x86), base',
            'whisper.cpp (large-v3)': '~15× temps réel',
            'faster-whisper (large-v3)': '~20× temps réel ✓',
          },
          {
            'Métrique': 'VRAM – large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB (int8) ✓',
          },
          {
            'Métrique': 'Intégration Python',
            'whisper.cpp (large-v3)': 'Wrapper nécessaire (pywhispercpp)',
            'faster-whisper (large-v3)': 'Natif ✓',
          },
          {
            'Métrique': 'VAD (détection silence)',
            'whisper.cpp (large-v3)': 'Manuel (réglage --step)',
            'faster-whisper (large-v3)': 'Intégré (Silero VAD) ✓',
          },
          {
            'Métrique': 'Streaming temps réel',
            'whisper.cpp (large-v3)': 'Oui (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Oui (pipeline VAD)',
          },
          {
            'Métrique': 'Précision WER (large-v3)',
            'whisper.cpp (large-v3)': '2.5 % (identique)',
            'faster-whisper (large-v3)': '2.5 % (identique)',
          },
          {
            'Métrique': 'Dépendance Python',
            'whisper.cpp (large-v3)': 'Aucune ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'Métrique': 'Raspberry Pi / embarqué',
            'whisper.cpp (large-v3)': 'Oui — binaire C ✓',
            'faster-whisper (large-v3)': 'Limité — overhead Python',
          },
          {
            'Métrique': 'Formats de sortie',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objets Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp écrit directement dans des formats standards (SRT, VTT, JSON, CSV, txt) — idéal pour les workflows de sous-titrage. faster-whisper retourne un générateur Python d\'objets segment avec `start`, `end` et `text` — idéal pour le chaînage avec des LLM. Pour la génération de sous-titres, whisper.cpp est plus simple ; pour les pipelines traitant les segments de façon programmatique, faster-whisper est plus simple.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuration de la transcription en temps réel',
        content:
          '**La transcription temps réel traite l\'audio en chunks au fur et à mesure de l\'entrée microphone, produisant du texte avec un léger décalage par rapport à la parole.** Les deux outils supportent ce mode avec des compromis différents.',
        items: [
          '**Mode stream whisper.cpp :** exécuter `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Traite des chunks de 3 secondes ; décalage ~0.5–1.5 seconde avec le modèle small. Aucun Python requis.',
          '**Pipeline VAD faster-whisper :** utiliser `vad_filter=True` dans `model.transcribe()`. Silero VAD segmente automatiquement l\'audio aux silences — chunks plus naturels que les fenêtres à durée fixe.',
          '**Latence pratique :** 0.5–2 secondes derrière la parole en direct avec les modèles small ou medium. Utiliser tiny pour la latence minimale (< 0.5 seconde, mais WER plus élevé).',
          '**Choix du modèle temps réel :** small ou base est le meilleur compromis — assez rapide pour suivre la parole, assez précis sur audio propre. Éviter large-v3 en temps réel sans GPU dédié.',
          '**Entrée microphone :** whisper.cpp lit l\'audio brut via SDL2 ou portaudio. faster-whisper lit des tableaux audio depuis n\'importe quelle bibliothèque Python (sounddevice, pyaudio, soundfile).',
          '**Stabilité :** le mode stream de whisper.cpp peut produire des tokens répétés sur les silences. Supprimer avec `--suppress-blank` et `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon : whisper.cpp gagne',
        content:
          '**Sur Mac M1, M2, M3, M4 et M5, whisper.cpp avec l\'accélération Core ML / Metal est le bon outil — sans hésitation.** faster-whisper n\'a pas de support Metal et tourne uniquement sur CPU sur Mac, atteignant ~3× le temps réel pour large-v3. whisper.cpp avec Metal atteint ~10× le temps réel sur M5 Pro — avantage 3× en vitesse.',
        items: [
          '**Export Core ML :** exécuter `./models/generate-coreml-model.sh large-v3` pour exporter l\'encodeur au format Core ML. Cela déporte l\'inférence de l\'encodeur vers l\'Apple Neural Engine.',
          '**Benchmark M5 Pro (large-v3, Metal) :** ~10× le temps réel. 60 minutes d\'audio transcrites en ~6 minutes. Note : le M5 Pro est sorti en mars 2026 — il s\'agit de benchmarks communautaires préliminaires. Les performances pourront s\'améliorer avec les mises à jour de whisper.cpp optimisant le Neural Engine M5.',
          '**Benchmark M3 MacBook Air (large-v3, Metal) :** ~7× le temps réel. 60 minutes en ~8.5 minutes.',
          '**Mémoire :** la mémoire unifiée signifie pas de VRAM séparée — un M5 Pro 16 GB peut exécuter large-v3 (~3 GB) confortablement en parallèle d\'autres processus.',
          '**faster-whisper sur Mac :** CPU uniquement, int8. Large-v3 à ~3× le temps réel. Utilisable pour la transcription par lots de nuit, pas pour le temps réel.',
          '**Recommandation :** utiliser whisper.cpp pour tous les travaux STT sur Mac. Ajouter pywhispercpp si une intégration Python est nécessaire tout en conservant l\'accélération Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA : faster-whisper gagne',
        content:
          '**Sur Windows et Linux avec GPU NVIDIA, faster-whisper est le meilleur choix.** Son backend CUDA CTranslate2 est plus optimisé que le chemin CUDA de whisper.cpp — ~12× vs ~8× le temps réel pour large-v3 sur RTX 4070, avec moins de VRAM.',
        items: [
          '**Benchmark RTX 4070 (12 GB) (large-v3 int8) :** ~12× le temps réel, ~2.5 GB VRAM.',
          '**Benchmark RTX 3060 (12 GB) (large-v3 int8) :** ~8× le temps réel, ~2.5 GB VRAM.',
          '**Benchmark RTX 4060 (8 GB) (large-v3 int8) :** ~7× le temps réel, ~2.5 GB VRAM — tient facilement.',
          '**int8 vs float16 :** int8 est ~2× plus rapide et utilise ~40 % de VRAM en moins avec une perte de précision négligeable. Toujours utiliser `compute_type="int8"` sur NVIDIA.',
          '**Traitement par lots :** le paramètre `batched=True` de faster-whisper permet le traitement parallèle de plusieurs fichiers audio, maximisant l\'utilisation GPU pour les gros jobs de transcription.',
          '**Intégration pipeline Python :** faster-whisper s\'intègre directement dans LangChain, Haystack et des pipelines Python personnalisés. Pas d\'overhead subprocess comparé au wrapping de whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Quel outil utiliser ?',
        content: 'Correspondance directe scénario → outil recommandé :',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Utiliser whisper.cpp sur Apple Silicon et les cibles embarquées/multi-plateformes ; utiliser faster-whisper sur GPU NVIDIA et dans les pipelines Python.',
          },
          {
            type: 'plain-terms',
            text: 'Avec un Mac : choisir whisper.cpp — 3× plus rapide que faster-whisper sur Apple. Avec un GPU NVIDIA et Python : choisir faster-whisper — plus rapide et 40 % de mémoire GPU en moins.',
          },
        ],
        columns: ['Scénario', 'Meilleur choix', 'Raison'],
        rows: [
          {
            'Scénario': 'Mac Apple Silicon (tout modèle)',
            'Meilleur choix': 'whisper.cpp',
            'Raison': 'Accélération Metal / Core ML — 3× plus rapide que faster-whisper (CPU uniquement sur Mac)',
          },
          {
            'Scénario': 'Serveur GPU NVIDIA (Linux/Windows)',
            'Meilleur choix': 'faster-whisper',
            'Raison': 'CTranslate2 int8 — plus rapide et moins de VRAM que le chemin CUDA de whisper.cpp',
          },
          {
            'Scénario': 'Pipeline de données Python',
            'Meilleur choix': 'faster-whisper',
            'Raison': 'API Python native ; pas de wrapper subprocess ; VAD intégré',
          },
          {
            'Scénario': 'Raspberry Pi / Linux embarqué',
            'Meilleur choix': 'whisper.cpp',
            'Raison': 'Binaire C pur ; pas d\'overhead runtime Python ; optimisé ARM NEON',
          },
          {
            'Scénario': 'Assistant vocal temps réel',
            'Meilleur choix': 'whisper.cpp',
            'Raison': 'Mode stream à faible overhead ; fonctionne sans Python sur Pi / embarqué',
          },
          {
            'Scénario': 'Transcription par lots (grande archive audio)',
            'Meilleur choix': 'faster-whisper',
            'Raison': 'Inférence en batch, utilisation GPU, intégration Python async',
          },
          {
            'Scénario': 'GPU AMD (Vulkan)',
            'Meilleur choix': 'whisper.cpp',
            'Raison': 'Support backend Vulkan ; faster-whisper est CUDA uniquement',
          },
          {
            'Scénario': 'Serveur Linux CPU uniquement',
            'Meilleur choix': 'faster-whisper',
            'Raison': 'La quantification int8 donne ~30 % d\'avantage vitesse sur CPU x86',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'Au-delà de whisper.cpp et faster-whisper',
        content:
          'Deux outils supplémentaires étendent Whisper avec des fonctionnalités qu\'aucun des deux ne fournit nativement : la diarisation des locuteurs et l\'inférence GPU ultra-rapide par lots.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX) :** construit sur faster-whisper, ajoute des horodatages au niveau du mot et la diarisation des locuteurs — qui a dit quoi. Idéal pour : transcription de réunions avec identification des intervenants, montage de podcasts, transcription d\'interviews. Installation avec `pip install whisperx` et token Hugging Face pour le modèle de diarisation.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) :** wrapper de pipeline Hugging Face Transformers avec support Flash Attention 2 pour une inférence GPU significativement plus rapide que faster-whisper standard sur NVIDIA. Idéal pour : traitement par lots de grandes archives audio sur GPU NVIDIA. Nécessite un GPU compatible Flash Attention 2 (Ampere ou plus récent : RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problèmes courants et solutions',
        content: 'Les problèmes les plus fréquents en configuration et à l\'exécution, avec des solutions directes :',
        items: [
          '**Incompatibilité de version CUDA :** faster-whisper nécessite CUDA 11.8 ou supérieur. Vérifier avec `nvcc --version`. Si votre CUDA est plus ancien : mettre à jour le driver ou installer faster-whisper dans un environnement conda avec `cudatoolkit=11.8`.',
          '**L\'export du modèle Metal échoue :** les Xcode Command Line Tools doivent être installés — exécuter `xcode-select --install`. Le script d\'export Core ML nécessite le paquet Python `coremltools` : `pip install coremltools`.',
          '**Hallucinations sur les silences :** les deux outils peuvent générer des tokens répétés sur les segments silencieux. Utiliser `--no-speech-threshold 0.6` en mode stream whisper.cpp, ou `vad_filter=True` dans `model.transcribe()` de faster-whisper pour ignorer automatiquement les silences.',
          '**Mémoire insuffisante avec large-v3 :** passer à la quantification int8 dans faster-whisper (`compute_type="int8"`) — réduit le VRAM de ~5 GB (float16) à ~2.5 GB. Avec whisper.cpp : utiliser la variante GGML quantifiée (ex. `ggml-large-v3-q5_0.bin`), réduisant la mémoire à ~3–4 GB.',
          '**Sortie illisible sur audio non anglais :** ne pas utiliser les variantes `.en` (tiny.en, base.en) pour de l\'audio non anglais — elles sont English-only. Utiliser les modèles multilingues (base, small, medium, large-v3) et spécifier la langue explicitement : `-l fr` dans whisper.cpp ou `language="fr"` dans faster-whisper.',
          '**Inférence CPU lente :** vérifier que le CPU supporte les instructions AVX2 (requises pour l\'inférence CPU optimisée). Vérifier avec `grep avx2 /proc/cpuinfo` sous Linux ou `sysctl machdep.cpu.features` sur Mac. Les CPU sans AVX2 utilisent SIMD générique et seront 2–3× plus lents.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          {
            q: 'La précision de transcription est-elle identique entre whisper.cpp et faster-whisper ?',
            a: 'Oui. Les deux outils utilisent les mêmes poids de modèle OpenAI Whisper — le modèle lui-même est identique. La différence réside uniquement dans le runtime d\'inférence (C/C++ vs CTranslate2 Python). Le WER sur le même fichier audio sera dans un écart de 0.1 % absolu — dans la variation normale due à la recherche en faisceau.',
          },
          {
            q: 'Puis-je utiliser faster-whisper sur un Mac Apple Silicon ?',
            a: 'Oui, mais uniquement sur CPU — faster-whisper n\'a pas de support Metal. Sur un M5 Pro, faster-whisper large-v3 tourne à ~3× le temps réel (CPU int8), contre ~10× de whisper.cpp avec Metal. Pour la plupart des utilisateurs Mac, whisper.cpp est 3× plus rapide pour le même modèle. La seule raison d\'utiliser faster-whisper sur Mac est si votre pipeline Python en dépend déjà et que la vitesse n\'est pas critique.',
          },
          {
            q: 'Quelle taille de modèle Whisper utiliser pour un assistant vocal ?',
            a: 'Pour les interfaces vocales temps réel, Whisper small est la recommandation standard — 3.4 % WER sur l\'anglais propre, ~200 ms de latence STT sur CPU ou GPU moderne, et tient dans 2 GB de RAM. Utiliser tiny sur matériel très contraint (Raspberry Pi Zero 2W) en acceptant ~7.6 % de WER. Réserver medium ou large-v3 à la transcription par lots où la latence n\'est pas une contrainte.',
          },
          {
            q: 'whisper.cpp supporte-t-il d\'autres langues que l\'anglais ?',
            a: 'Oui. Tous les modèles Whisper multilingues (base, small, medium, large-v3) supportent 99 langues. Ajouter `-l [code langue]` en CLI : `-l fr` pour le français, `-l de` pour l\'allemand, `-l ja` pour le japonais, etc. Les modèles tiny.en et base.en sont English-only et légèrement plus précis pour l\'anglais que leurs équivalents multilingues.',
          },
          {
            q: 'Comment installer faster-whisper avec le support CUDA ?',
            a: 'Installation avec `pip install faster-whisper`. Le support CUDA nécessite CUDA 11.8 ou supérieur et cuDNN 8.x sur le système. Vérifier la version CUDA avec `nvcc --version`. Spécifier ensuite `device="cuda"` lors du chargement du modèle : `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Si CUDA n\'est pas détecté, faster-whisper bascule automatiquement sur CPU.',
          },
          {
            q: 'Lequel est le plus précis — whisper.cpp ou faster-whisper ?',
            a: 'Identique. Les deux outils utilisent les mêmes poids de modèle OpenAI Whisper et produisent le même WER sur tout fichier audio donné. La différence entre whisper.cpp et faster-whisper est la vitesse et le support plateforme, pas la précision. Toute différence de WER mesurée entre les runs est dans la variation normale de la recherche en faisceau, pas due au runtime.',
          },
          {
            q: 'Puis-je faire tourner Whisper large-v3 avec 8 GB de RAM ?',
            a: 'Oui sur GPU — large-v3 int8 dans faster-whisper utilise ~2.5 GB de VRAM et tourne sur tout GPU 8 GB. Sur matériel CPU uniquement, 8 GB de RAM est juste pour large-v3 (float32 utilise ~10 GB). Utiliser medium (5 GB RAM) ou small (2 GB RAM) sur systèmes CPU uniquement. whisper.cpp est plus efficace en mémoire que faster-whisper sur CPU grâce à un overhead runtime plus faible.',
          },
          {
            q: 'Quel est le coût de Whisper local vs STT cloud ?',
            a: 'Zéro coût récurrent. Les services STT cloud facturent env. 0.005–0.022 €/min — pour un développeur transcrivant 8 heures de réunions par semaine, cela représente env. 110–440 €/mois. Whisper local tourne sur du matériel déjà possédé, sans frais à la minute, sans gestion de clé API, et sans que les données audio quittent la machine.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp sur GitHub](https://github.com/ggerganov/whisper.cpp) — Code source, instructions de build, scripts de téléchargement de modèles et guide Metal/Core ML.',
          '[faster-whisper sur GitHub](https://github.com/SYSTRAN/faster-whisper) — Code source, documentation de l\'API Python et résultats de benchmarks.',
          '[distil-whisper/distil-large-v3 sur Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — Fiche modèle, résultats de benchmarks et instructions d\'utilisation de la variante distillée.',
          '[WhisperX sur GitHub](https://github.com/m-bain/whisperX) — Horodatages au niveau du mot et diarisation des locuteurs, construit sur faster-whisper.',
          '[insanely-fast-whisper sur GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 pour un débit GPU NVIDIA maximal.',
          '[OpenAI Whisper sur GitHub](https://github.com/openai/whisper) — Modèle Whisper original, article de recherche et fiches modèles pour toutes les tailles.',
          '[Article OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — « Robust Speech Recognition via Large-Scale Weak Supervision. » Source des valeurs WER.',
          '[Documentation CTranslate2](https://github.com/OpenNMT/CTranslate2) — Détails de quantification, support matériel et bases de l\'optimisation int8.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[TTS local et clonage vocal 2026 : Piper vs Coqui vs XTTS v2](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Le complément TTS : retransformer le texte transcrit en parole, hors ligne.',
          '[Créer un assistant vocal entièrement hors ligne en 2026](/fr/power-local-llm/build-local-voice-assistant-2026) — Connecter Whisper STT à un LLM local et Piper TTS pour un pipeline vocal complet.',
          '[Pipeline IA multimodale locale 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Ajouter des modèles de vision aux côtés de STT et TTS pour une stack locale complète.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — Exigences GPU et RAM pour le pipeline vocal + LLM complet.',
          '[Créer un assistant vocal local sur smartphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) — Version mobile : WhisperKit sur iPhone, Layla sur Android.',
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
    title: 'ローカル音声認識2026：Whisper.cpp vs faster-whisper — ベンチマーク・セットアップ・GPU高速化',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026：ローカルSTTベンチマーク＆セットアップ',
    intro:
      'whisper.cppとfaster-whisperは、2026年にローカル・オフラインの文字起こしに使用されるOpenAIのWhisper音声認識モデルの2大実装です。whisper.cppはApple Metal、CUDA、Vulkan、CPUで動作する純粋なC/C++ポートで、Apple Silicon、組み込みシステム、リアルタイム音声アプリケーションに最適です。faster-whisperはCTranslate2を使用したPythonライブラリで、int8量子化によりNVIDIA GPU上でオリジナルWhisperの約4倍のスループットを実現します。このガイドでは、インストール、パフォーマンスベンチマーク、リアルタイム文字起こしのセットアップ、そして各プラットフォームでの比較を詳しく解説します。',
    metaDescription:
      '2026年のローカル音声認識におけるwhisper.cppとfaster-whisperの比較。WERベンチマーク、GPU対CPUの速度、Apple Silicon Metal、リアルタイム文字起こし、セットアップガイド。完全オフライン対応。',
    twitterDescription:
      'whisper.cpp vs faster-whisper：2026年ローカル音声認識ベンチマーク。CPU対GPU速度、Apple Metal、WER精度、リアルタイム文字起こし。クラウド不要、コストゼロ。',
    audience:
      '音声文字起こしをローカルかつオフラインで必要とする開発者、研究者、システム構築者 — 議事録作成、音声インターフェース、アクセシビリティツール、セキュアな環境など向け。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカル音声認識',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'ローカル音声認識 2026',
      'オフライン音声認識',
      'whisper ローカル文字起こし',
      'faster-whisper ベンチマーク',
      'whisper cpp apple silicon',
      'ローカル STT GPU',
      'whisper cpp セットアップ',
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
      '**whisper.cppとfaster-whisper — ローカルWhisperの2大ランタイム — はそれぞれのターゲットプラットフォームで圧倒的な優位性を持ちます。** **Apple Silicon（MシリーズMac）では、Metal高速化付きのwhisper.cppが2026年における最速のローカルSTTオプションです — M5 Proでlarge-v3が約10倍速でリアルタイム動作します。** NVIDIA GPUサーバーおよびPythonパイプラインでは、CTranslate2 int8量子化を使ったfaster-whisperが優れた選択肢で、RTX 4070でlarge-v3が約12倍速でリアルタイム動作し、VRAMは2.5 GBのみです。両ツールとも同じOpenAIのWhisperモデルウェイト（tiny〜large-v3）を使用し、違いはランタイム最適化と統合方法のみです。CPU専用ハードウェアでは、tinyとbaseモデルで両方とも使用可能ですが、int8経由でfaster-whisperがわずかに優位（約20倍速 vs 約15倍速）です。',
    quickAnswerTop: {
      ja: {
        question: '2026年のローカル音声認識にwhisper.cppとfaster-whisperのどちらを使うべきですか？',
        answer:
          'ハードウェアと統合ニーズによります。Apple Silicon（M1〜M5）では、Metal高速化付きのwhisper.cppが高速で自然な選択です — Python依存なしでlarge-v3が約10倍速のリアルタイム動作。NVIDIA GPUでは、faster-whisperが高速でPythonパイプラインに統合しやすく、int8量子化でlarge-v3が約12倍速でVRAM40%削減。CPU専用ハードウェアでは両方とも小・baseモデルで動作しますが、faster-whisperがわずかに速い優位性があります。',
        bullets: [
          'Apple Silicon → Core ML / Metal付きのwhisper.cpp。M5 Proでlarge-v3が約10倍速。',
          'NVIDIA GPU → faster-whisper。RTX 4070でlarge-v3 int8が約12倍速、VRAM約2.5 GB。',
          'Pythonパイプライン → faster-whisper。ネイティブPython、5行のセットアップ、VAD内蔵。',
          '組み込み / Raspberry Pi → whisper.cpp。純粋なCバイナリ、Pythonランタイム不要。',
          'リアルタイム音声 → whisper.cppのstreamモードまたはfaster-whisperのVADパイプライン。',
          'バッチ文字起こし → faster-whisper。GPUでの最高スループット、簡単な非同期バッチ処理。',
          'WER精度：両方とも同一 — 同じWhisperモデルウェイトを使用。',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'なぜローカル音声認識なのか？', anchor: '#why-local-stt' },
      { label: 'Whisperモデルサイズ', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper：高速な代替手段', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++ポート', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — CTranslate2ポート', anchor: '#faster-whisper' },
      { label: '直接比較：ベンチマークテーブル', anchor: '#benchmarks' },
      { label: 'リアルタイム文字起こしのセットアップ', anchor: '#real-time' },
      { label: 'Apple Silicon：whisper.cppが勝つ', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU：faster-whisperが勝つ', anchor: '#nvidia-gpu' },
      { label: 'どちらをいつ使うか', anchor: '#when-to-use' },
      { label: 'whisper.cppとfaster-whisperを超えて', anchor: '#beyond-tools' },
      { label: 'よくある問題と解決策', anchor: '#troubleshooting' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '情報源', anchor: '#sources' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cppはApple Silicon向けの最高のローカルSTTです。** C/C++ポートはCore MLとApple Metalによるハードウェア高速化を活用し、M5 Proでlarge-v3が約10倍速のリアルタイム動作、Python依存なし。',
          '**faster-whisperはNVIDIA GPUとPythonパイプライン向けの最高のローカルSTTです。** CTranslate2 int8量子化でVRAMを約40%削減し、元のOpenAI実装の約4倍のスループットを実現 — RTX 4070でlarge-v3が約12倍速、VRAM約2.5 GB。',
          '**両ツールともOpenAIの同一のWhisperモデルウェイトを使用しています。** WER（単語誤り率）は両方とも同じ — 違いはランタイムパフォーマンスと統合方法のみで、文字起こし精度ではありません。',
          '**Whisper large-v3は英語で2.5% WERの最高精度を提供します。** ほとんどの本番ユースケースでは、Whisper small（3.4% WER、2 GB RAM）またはmedium（2.9% WER、5 GB RAM）の方が速度と精度のバランスが良いです。',
          '**リアルタイム文字起こしは両ツールとも実現可能です** — whisper.cppは`--stream`フラグ経由、faster-whisperは内蔵VAD（音声アクティビティ検出）パイプライン経由。モデルサイズによって実用レイテンシは音声より0.5〜2秒遅れます。',
          '**whisper.cppはCPU、Metal、CUDA、Vulkanで動作します** — クロスプラットフォーム組み込み用途（Raspberry Pi、Windows GPUセットアップ、ARMサーバー）では唯一の選択肢。faster-whisperはCPUとCUDAのみ対応（MacではMetalなし）。',
          '**Raspberry PiとEmbedded Linuxでは、whisper.cpp tiny/baseをCPUで実行するのが現実的な上限です** — Pi 5でtinyが約15倍速、baseが約6倍速。両方とも1 GB RAM内に収まります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**両ツール：** OpenAIのオープンソースWhisperモデル（MITライセンス）をベースにしています。同じ精度 — 異なるランタイム。',
          '**whisper.cpp：** ggerganovによってC/C++で書かれています。CPU（AVX2/NEON）、CUDA、Metal（Apple）、Vulkanをサポート。Python不要。',
          '**faster-whisper：** CTranslate2を使ったPythonライブラリ。CPU（int8）とCUDAをサポート。Apple Metalのサポートなし。',
          '**Whisperモデルサイズ：** tiny（39M）、base（74M）、small（244M）、medium（769M）、large-v3（1.55B）。すべてggml / CTranslate2フォーマット。',
          '**ほとんどのユースケースに最適なモデル：** Whisper small — 3.4% WER、2 GB RAMで動作、最新CPUで6倍速のリアルタイム。',
          '**RTX 4070ベンチマーク（large-v3）：** faster-whisper約12倍速；whisper.cpp CUDA約8倍速。faster-whisperがNVIDIAで勝つ。',
          '**M5 Proベンチマーク（large-v3）：** whisper.cpp Metal約10倍速；faster-whisper CPU専用約3倍速。whisper.cppがAppleで勝つ。',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'なぜローカル音声認識なのか？',
        content:
          'クラウドSTTサービス（Google Speech-to-Text、AWS Transcribe、Azure Speech）は音声分当たりの費用を請求し、通常$0.006〜$0.024/分 — そして音声をリモートサーバーに送信します。プライバシーが重要なアプリケーション（医療口述、法的録音、ジャーナリストのインタビュー、企業会議）では、ローカル文字起こしによってデータ漏洩リスクを完全に排除できます。',
        items: [
          '**プライバシー：** 音声はデバイスから外に出ません。ローカルで処理されるため、個人データに関する法的保護への対応が容易です。',
          '**コスト：** 分単位の費用はゼロ。週8時間の会議を文字起こしする開発者は、クラウドSTT価格と比べて月$120〜480を節約できます。',
          '**オフライン：** 飛行機内、セキュア施設内、安定したインターネットがない場所でも動作。APIキー管理不要。',
          '**レイテンシ：** アップロード/ダウンロードの往復遅延なし。リアルタイム音声インターフェースでは、ローカル処理によりSTTレイテンシをクラウドの300〜800msから50〜300msに削減。',
          '**カスタマイズ：** ドメイン固有の語彙でファインチューニング可能。ハードウェアに合ったモデルサイズを実行。',
          '**Home Assistant連携：** ローカルで動作するWhisperにより、ウェイクワードと音声コマンドはホームネットワークの外に出ることがありません。クラウドSTTを完全に置き換えるアドオン設定は[Home AssistantのローカルWhisper →](/ja/smart-home/local-whisper-home-assistant)をご覧ください。',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisperモデルサイズ — 両ツールの基盤',
        content:
          'whisper.cppとfaster-whisperはどちらも同じWhisperモデルウェイトを使用し、それぞれのフォーマット（whisper.cppはGGML、faster-whisperはCTranslate2）に変換されています。VRAMとRAMの予算と精度要件に基づいてモデルサイズを選択してください。',
        columns: ['モデル', 'パラメータ数', 'VRAM / RAM', '英語WER', '速度係数（RTX 4070実時間比）'],
        rows: [
          {
            'モデル': 'tiny',
            'パラメータ数': '39M',
            'VRAM / RAM': '~1 GB',
            '英語WER': '7.6%',
            '速度係数（RTX 4070実時間比）': '~32×',
          },
          {
            'モデル': 'base',
            'パラメータ数': '74M',
            'VRAM / RAM': '~1 GB',
            '英語WER': '5.0%',
            '速度係数（RTX 4070実時間比）': '~16×',
          },
          {
            'モデル': 'small',
            'パラメータ数': '244M',
            'VRAM / RAM': '~2 GB',
            '英語WER': '3.4%',
            '速度係数（RTX 4070実時間比）': '~6×',
          },
          {
            'モデル': 'medium',
            'パラメータ数': '769M',
            'VRAM / RAM': '~5 GB',
            '英語WER': '2.9%',
            '速度係数（RTX 4070実時間比）': '~2×',
          },
          {
            'モデル': 'large-v3',
            'パラメータ数': '1.55B',
            'VRAM / RAM': '~10 GB',
            '英語WER': '2.5%',
            '速度係数（RTX 4070実時間比）': '1×（基準値）',
          },
          {
            'モデル': 'distil-large-v3',
            'パラメータ数': '~756M',
            'VRAM / RAM': '~4 GB',
            '英語WER': '~2.6%',
            '速度係数（RTX 4070実時間比）': '~6×',
          },
        ],
        note: 'WER（単語誤り率）はLibriSpeechクリーンテストセットに関するWhisperの論文からのもの。低い方が優秀。速度係数はRTX 4070でのfaster-whisper int8のもの。distil-large-v3の数値はDistil-Whisperの論文から。',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper：高速な代替手段',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)はlarge-v3の蒸留バリアントで、パラメータ数が約50%少なく、WERはオリジナルの約1%以内に抑えながら約6倍高速です。** 文字起こし速度が最後の精度より重要な場合に適した選択です。distil-large-v3はfaster-whisper（ネイティブCTranslate2サポート）とwhisper.cpp（GGML形式への変換経由）の両方で動作するため、すでに使用しているランタイムに統合できます。',
        items: [
          '**パラメータ数：** ~756M — large-v3の1.55Bの約半分で、約4 GB VRAMで動作（large-v3は約10 GB）。',
          '**速度：** RTX 4070で約6倍速のリアルタイム（large-v3の1倍速の基準値と比べて）— mediumモデルと同程度の速度でlarge-v3レベルの精度。',
          '**WER：** 英語で約2.6% — large-v3の2.5%よりわずかに高いだけ。実際の音声では差は聞き取れません。',
          '**互換性：** faster-whisperとネイティブで動作（`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`）。whisper.cppの場合は、distil-whisper GGMLコンバージョンスクリプトを使用してGGML形式に変換。',
          '**最適な用途：** バッチ文字起こしジョブ、VRAM制限のあるサーバーデプロイ、大型モデルレベルの品質をmediumモデルの速度で求めるユースケース。',
          '**不適な用途：** 多言語文字起こし — distil-large-v3は英語のみ。他言語にはlarge-v3またはmediumを使用。',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — C/C++ポート',
        content:
          '**whisper.cpp（Georgi Gerganov作）はOpenAIのWhisperモデルを純粋なC/C++で再実装したもので、低リソースかつクロスプラットフォームの推論向けに最適化されています。** Pythonも、CUDAツールキットも不要で、Raspberry PiからApple M5 ProまでWindowsCUDAセットアップまで、実質的にあらゆるハードウェアで動作します。',
        items: [
          '**プラットフォームサポート：** CPU（AVX2、AVX512、ARM NEON）、Apple Metal（Core ML）、CUDA（NVIDIA）、Vulkan（AMD/Intel GPU）、OpenCL。',
          '**Apple Siliconの優位性：** whisper.cppはモデルをCore ML形式にエクスポートし、Apple Neural Engineでの推論を可能にします。large-v3はM5 ProでMetalにより約10倍速のリアルタイム動作 — クラウドへの往復より高速。',
          '**インストール：** リポジトリをクローンし、`make`（または`cmake`）を実行。一般的なプラットフォーム向けのビルド済みバイナリも利用可能。Python依存なし。',
          '**モデルダウンロード：** `bash ./models/download-ggml-model.sh base.en` — GGMLフォーマットのモデルファイルをダウンロード（baseで約142 MB）。',
          '**CLIの例：** `./main -m models/ggml-base.bin -f audio.wav` — WAVファイルを標準出力に文字起こし。`-l ja`で日本語。',
          '**リアルタイムストリームモード：** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — マイクから3秒チャンクで文字起こし。',
          '**Pythonラッパー：** pywhispercppがwhisper.cpp用のPythonバインディングを提供し、Metal高速化を維持したままPythonパイプラインで使用可能。',
          '**制限事項：** ネイティブVAD（音声アクティビティ検出）なし。ストリームモードはユースケースに応じた`--step`と`--length`パラメータのチューニングが必要。',
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
        title: 'faster-whisper — CTranslate2ポート',
        content:
          '**faster-whisper（SYSTRAN社製）はCTranslate2 — int8量子化をサポートする高度に最適化されたC++推論エンジン — を使ってWhisper推論を再実装したPythonライブラリです。** NVIDIA GPUでは、faster-whisperが利用可能な中で最速のローカルWhisper実装です。',
        items: [
          '**プラットフォームサポート：** CPU（int8量子化）とNVIDIA CUDA GPU。Apple Metalサポートなし — MacではCPU専用で動作。',
          '**int8の優位性：** CTranslate2 int8量子化でVRAMを約40%削減し、float16比でスループットを約2倍向上、WERへの影響は無視できる程度（絶対値で0.1%未満）。',
          '**インストール：** `pip install faster-whisper` — コンパイル不要。CUDAサポートにはCUDA 11.8以上とcuDNN 8.xが必要。',
          '**内蔵VAD：** faster-whisperにはSilero VAD統合が含まれており、無音セグメントを自動的にスキップします — リアルタイム文字起こしパイプラインに不可欠。',
          '**Python対応：** 直接PythonのAPIにより、LLM、音声処理ライブラリ、Webフレームワークとの連携が簡単。',
          '**速度：** RTX 4070でのlarge-v3 int8は約12倍速のリアルタイムでVRAM約2.5 GB使用。CPU int8ではtinyモデルで約20倍速を達成。',
          '**バッチ処理：** faster-whisperはバッチ推論をサポートし、大量の音声ファイルを効率的に処理。',
          '**制限事項：** MacでのMetalサポートなし — Apple SiliconではCPU専用で動作し、large-v3で約3倍速（whisper.cppのMetalでの約10倍速と比較）。',
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
        title: '直接比較：ベンチマークテーブル',
        content:
          'すべてのベンチマークは特記ない限りlarge-v3モデルを使用。速度はリアルタイムの倍率で計測（例：10×は60分の音声が6分で文字起こしできることを意味する）。GPU実行のVRAM数値；CPU実行のRAM数値。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple SiliconでのMetalを使ったwhisper.cppはlarge-v3を約10倍速でリアルタイム処理し；NVIDIA GPUでのint8を使ったfaster-whisperは約12倍速 — 各ツールはそれぞれのターゲットプラットフォームで圧倒的な優位性を持ちます。',
          },
          {
            type: 'plain-terms',
            text: 'Macではwhisper.cppを選択（Appleニューラルエンジンを使用）、Windows/LinuxでNVIDIA GPUがある場合はfaster-whisperを選択（音声を12倍速で処理し、GPUメモリを40%節約）。',
          },
        ],
        columns: ['指標', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            '指標': 'プラットフォーム / 言語',
            'whisper.cpp (large-v3)': 'C/C++（クロスプラットフォーム）',
            'faster-whisper (large-v3)': 'Python（CTranslate2）',
          },
          {
            '指標': 'GPUサポート',
            'whisper.cpp (large-v3)': 'CUDA、Metal、Vulkan',
            'faster-whisper (large-v3)': 'CUDAのみ',
          },
          {
            '指標': 'CPU最適化',
            'whisper.cpp (large-v3)': 'AVX2、ARM NEON',
            'faster-whisper (large-v3)': 'int8量子化',
          },
          {
            '指標': '速度 — RTX 4070、large-v3',
            'whisper.cpp (large-v3)': '~8倍速',
            'faster-whisper (large-v3)': '~12倍速 ✓',
          },
          {
            '指標': '速度 — M5 Pro、large-v3',
            'whisper.cpp (large-v3)': '~10倍速（Metal）✓',
            'faster-whisper (large-v3)': '~3倍速（CPU専用）',
          },
          {
            '指標': '速度 — CPU専用（x86）、base',
            'whisper.cpp (large-v3)': '~15倍速',
            'faster-whisper (large-v3)': '~20倍速 ✓',
          },
          {
            '指標': 'VRAM — large-v3、GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB（int8）✓',
          },
          {
            '指標': 'Python統合',
            'whisper.cpp (large-v3)': 'ラッパーが必要（pywhispercpp）',
            'faster-whisper (large-v3)': 'ネイティブ ✓',
          },
          {
            '指標': 'VAD（無音検出）',
            'whisper.cpp (large-v3)': '手動（--stepチューニング）',
            'faster-whisper (large-v3)': '内蔵（Silero VAD）✓',
          },
          {
            '指標': 'リアルタイムストリーミング',
            'whisper.cpp (large-v3)': 'あり（--streamフラグ）✓',
            'faster-whisper (large-v3)': 'あり（VADパイプライン）',
          },
          {
            '指標': 'WER精度（large-v3）',
            'whisper.cpp (large-v3)': '2.5%（同一）',
            'faster-whisper (large-v3)': '2.5%（同一）',
          },
          {
            '指標': 'Python依存',
            'whisper.cpp (large-v3)': 'なし ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            '指標': 'Raspberry Pi / 組み込み',
            'whisper.cpp (large-v3)': 'あり — Cバイナリ ✓',
            'faster-whisper (large-v3)': '限定的 — Pythonオーバーヘッド',
          },
          {
            '指標': '出力フォーマット',
            'whisper.cpp (large-v3)': 'SRT、VTT、JSON、CSV、txt',
            'faster-whisper (large-v3)': 'Pythonオブジェクト（start、end、text）',
          },
        ],
        note: 'whisper.cppは標準的な字幕・トランスクリプトファイル形式（SRT、VTT、JSON、CSV、txt）に直接出力します — 追加コードなしでディスクにファイルが必要な字幕ワークフローに最適。faster-whisperは`start`、`end`、`text`属性を持つセグメントオブジェクトのPythonジェネレータを生成します — 中間ファイルを書かずにセグメントテキストを直接ダウンストリームモデルに渡すLLMパイプライン連携に最適。字幕生成にはwhisper.cppが簡単で、セグメントをプログラムで処理するパイプラインにはfaster-whisperが簡単です。',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'リアルタイム文字起こしのセットアップ',
        content:
          '**リアルタイム文字起こしは、マイクから届いた音声をチャンクで処理し、音声から短い遅延でテキストを生成します。** 両ツールとも対応していますが、トレードオフが異なります。',
        items: [
          '**whisper.cppのstreamモード：** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`を実行。3秒の音声チャンクを処理；smallモデルで約0.5〜1.5秒の遅延。Python不要。',
          '**faster-whisperのVADパイプライン：** `model.transcribe()`で`vad_filter=True`を使用。Silero VADが無音境界で自動的に音声をセグメント化 — 固定長ウィンドウよりも自然なチャンク。',
          '**実用レイテンシ：** smallまたはmediumモデルでリアルタイム音声より0.5〜2秒遅延。最低レイテンシにはtinyを使用（0.5秒未満、ただしWERが高い）。',
          '**リアルタイム向けモデル選択：** smallまたはbaseが実用的なスイートスポット — 音声に追いつくのに十分な速度で、クリアな音声に対して十分な精度。専用GPUがない限り、リアルタイムでlarge-v3は避けること。',
          '**マイク入力：** whisper.cppはSDL2またはportaudio経由で生音声を読み込む。faster-whisperは任意のPython音声ライブラリ（sounddevice、pyaudio、soundfile）からの音声配列を読み込む。',
          '**安定性：** whisper.cppのstreamモードは無音時に繰り返しトークンを生成（短いフィラーを「幻聴」）することがある。`--suppress-blank`と`--no-speech-threshold`で抑制。',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon：whisper.cppが勝つ',
        content:
          '**M1、M2、M3、M4、M5のMacでは、Core ML / Metal高速化付きのwhisper.cppが正しいツールです — 疑いの余地なし。** faster-whisperはMetalサポートがなく、Macでは専らCPUのみで動作し、large-v3で約3倍速のリアルタイム。whisper.cppのMetalはM5 Proで約10倍速のリアルタイムを達成 — 3倍の速度優位性。',
        items: [
          '**Core MLエクスポート：** `./models/generate-coreml-model.sh large-v3`を実行してエンコーダをCore ML形式にエクスポート。これによりエンコーダの推論がApple Neural Engineにオフロードされます。',
          '**M5 Proベンチマーク（large-v3、Metal）：** 約10倍速。60分の音声が約6分で文字起こし完了。注記：M5 Proは2026年3月に発売 — これらはコミュニティの早期ベンチマークです。M5ニューラルエンジン向けのwhisper.cppの最適化が進むにつれてパフォーマンスは向上する可能性があります。',
          '**M3 MacBook Airベンチマーク（large-v3、Metal）：** 約7倍速。60分が約8.5分で完了。',
          '**メモリ：** ユニファイドメモリにより独立したVRAMは不要 — 16 GB M5 Proは他のプロセスと共存しながらもlarge-v3（~3 GB）を快適に動作させられます。',
          '**Macでのfaster-whisper：** CPU専用、int8。large-v3で約3倍速。一晩かけたバッチ文字起こしには使えますが、リアルタイムや時間が重要なワークフローには不向き。',
          '**推奨：** MacのすべてのSTT作業にwhisper.cppを使用。Metal高速化を維持しながらPython統合が必要な場合はpywhispercppを追加。',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU：faster-whisperが勝つ',
        content:
          '**NVIDIA GPUを搭載したWindowsとLinuxでは、faster-whisperが優れた選択肢です。** CTranslate2のCUDAバックエンドはwhisper.cppのCUDAパスよりも最適化されており — RTX 4070でのlarge-v3では約12倍速対約8倍速で、VRAMも少なく済みます。',
        items: [
          '**RTX 4070（12 GB）ベンチマーク（large-v3 int8）：** 約12倍速、VRAM約2.5 GB。',
          '**RTX 3060（12 GB）ベンチマーク（large-v3 int8）：** 約8倍速、VRAM約2.5 GB。',
          '**RTX 4060（8 GB）ベンチマーク（large-v3 int8）：** 約7倍速、VRAM約2.5 GB — 余裕で収まる。',
          '**int8対float16：** int8は約2倍速でVRAMを約40%削減し、精度への影響は無視できます。NVIDIAでは常に`compute_type="int8"`を使用。',
          '**バッチ処理：** faster-whisperの`batched=True`パラメータにより複数の音声ファイルの並列処理が可能となり、大規模な文字起こしジョブでGPU利用率を最大化。',
          '**Pythonパイプライン統合：** faster-whisperはLangChain、Haystack、カスタムPythonパイプラインに直接組み込めます。whisper.cppをラップする際のサブプロセスオーバーヘッドなし。',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'どちらをいつ使うか',
        content: 'シナリオから最適なツールへの直接マッピング：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Siliconと組み込み/クロスプラットフォームのターゲットにはwhisper.cppを使用；NVIDIA GPUとPythonパイプラインにはfaster-whisperを使用。',
          },
          {
            type: 'plain-terms',
            text: 'Macをお持ちならwhisper.cppを選択 — Appleハードウェアでfaster-whisperより3倍速。NVIDIA GPUを持ちPythonを書くならfaster-whisperを選択 — 高速でGPUメモリを40%節約。',
          },
        ],
        columns: ['シナリオ', '最適なツール', '理由'],
        rows: [
          {
            'シナリオ': 'Apple Silicon Mac（すべてのモデル）',
            '最適なツール': 'whisper.cpp',
            '理由': 'Metal / Core ML高速化 — MacでCPU専用のfaster-whisperより3倍速',
          },
          {
            'シナリオ': 'NVIDIA GPUサーバー（Linux/Windows）',
            '最適なツール': 'faster-whisper',
            '理由': 'CTranslate2 int8 — whisper.cppのCUDAパスより高速かつ低VRAM',
          },
          {
            'シナリオ': 'Pythonデータパイプライン',
            '最適なツール': 'faster-whisper',
            '理由': 'ネイティブPython API；サブプロセスラッパー不要；VAD内蔵',
          },
          {
            'シナリオ': 'Raspberry Pi / 組み込みLinux',
            '最適なツール': 'whisper.cpp',
            '理由': '純粋なCバイナリ；Pythonランタイムオーバーヘッドなし；ARM NEON最適化',
          },
          {
            'シナリオ': 'リアルタイム音声アシスタント',
            '最適なツール': 'whisper.cpp',
            '理由': '低オーバーヘッドのstreamモード；Pi / 組み込みでPythonなしで動作',
          },
          {
            'シナリオ': 'バッチ文字起こし（大量音声アーカイブ）',
            '最適なツール': 'faster-whisper',
            '理由': 'バッチ推論、GPU利用率、Python非同期統合',
          },
          {
            'シナリオ': 'AMD GPU（Vulkan）',
            '最適なツール': 'whisper.cpp',
            '理由': 'Vulkanバックエンドサポート；faster-whisperはCUDA専用',
          },
          {
            'シナリオ': 'CPU専用Linuxサーバー',
            '最適なツール': 'faster-whisper',
            '理由': 'int8量子化でx86 CPUに対して約30%の速度優位性',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'whisper.cppとfaster-whisperを超えて',
        content:
          'whisper.cppとfaster-whisperのどちらも標準では提供しない2つの機能 — 話者識別と超高速バッチGPU推論 — を追加する2つのツールがあります。',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX)：** faster-whisperをベースに構築し、単語レベルのタイムスタンプと話者識別を追加 — どの話者がどの言葉を話したかを特定。最適用途：話者ラベル付き会議文字起こし、ポッドキャスト編集、インタビュートランスクリプト。`pip install whisperx`でインストールし、識別モデル用のHugging Faceトークンを提供。',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)：** Flash Attention 2サポートを追加するHugging Face Transformersパイプラインラッパーで、NVIDIA ハードウェアで標準faster-whisperよりもはるかに高速なGPU推論を実現。最適用途：NVIDIA GPUでの大量音声アーカイブのバッチ処理。Flash Attention 2対応GPU（Ampere以降：RTX 3000+、A100、H100）が必要。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'よくある問題と解決策',
        content: 'よくあるセットアップとランタイムの問題、そして直接の解決策：',
        items: [
          '**CUDAバージョンの不一致：** faster-whisperにはCUDA 11.8以降が必要。`nvcc --version`で確認。CUDAが古い場合は、ドライバーをアップグレードするか、`cudatoolkit=11.8`でconda環境にfaster-whisperをインストール。',
          '**Metalモデルエクスポートの失敗：** Xcode Command Line Toolsのインストールを確認 — `xcode-select --install`を実行。Core MLエクスポートスクリプトには`coremltools` Pythonパッケージが必要：`pip install coremltools`。',
          '**無音時の幻聴：** 両ツールとも無音の音声セグメントで繰り返しフィラートークンを生成することがある。whisper.cppのstreamモードでは`--no-speech-threshold 0.6`を使用するか、faster-whisperの`model.transcribe()`で`vad_filter=True`を使用して無音セグメントを自動的にスキップ。',
          '**large-v3でのメモリ不足：** faster-whisperでint8量子化に切り替え（`compute_type="int8"`）— VRAMを~5 GB（float16）から~2.5 GBに削減。whisper.cppでは量子化されたGGMLバリアントを使用（例：`ggml-large-v3-q5_0.bin`）でメモリを~3〜4 GBに削減。',
          '**非英語音声での文字化け：** 非英語音声に`.en`モデルバリアント（tiny.en、base.en）を使用しないこと — これらは英語専用。多言語モデル（base、small、medium、large-v3）を使用し、言語を明示的に指定：whisper.cppでは`-l ja`、faster-whisperでは`language="ja"`。',
          '**CPUの推論が遅い：** CPUがAVX2命令をサポートしているか確認（最適化されたCPU推論に必要）。Linuxでは`grep avx2 /proc/cpuinfo`、Macでは`sysctl machdep.cpu.features`で確認。AVX2なしのCPUは汎用SIMDにフォールバックし、2〜3倍遅くなります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'whisper.cppとfaster-whisperで文字起こし精度は同じですか？',
            a: 'はい。両ツールとも同じOpenAI Whisperモデルウェイトを使用しています — モデル自体は同一です。違いは推論ランタイム（C/C++対CTranslate2 Python）のみです。同じ音声ファイルでのWERは絶対値で0.1%以内 — これはビームサーチのランダム性による通常の変動範囲内です。',
          },
          {
            q: 'Apple SiliconのMacでfaster-whisperを使えますか？',
            a: 'はい、ただしCPU専用で動作します — faster-whisperにはMetalサポートがありません。M5 Proでは、faster-whisperのlarge-v3はCPU int8で約3倍速のリアルタイムで動作し、whisper.cppのMetalでの約10倍速と比べると遅いです。ほとんどのMacユーザーにとって、同じモデルでwhisper.cppは3倍速です。Macでfaster-whisperを使う唯一の理由は、すでにPythonパイプラインがfaster-whisperに依存していて速度が重要でない場合です。',
          },
          {
            q: '音声アシスタントにはどのWhisperモデルサイズを使うべきですか？',
            a: 'リアルタイム音声インターフェースには、Whisper smallが標準推奨です — クリアな英語で3.4% WER、最新のCPUまたはGPUで約200 ms のSTTレイテンシ、2 GB RAMに収まる。非常に制約のあるハードウェア（Raspberry Pi Zero 2W、古いスマートフォン）で約7.6% WERが許容できる場合はtinyを使用。mediumまたはlarge-v3はレイテンシが制約にならないバッチ文字起こしのみに使用。',
          },
          {
            q: 'whisper.cppは英語以外の言語をサポートしていますか？',
            a: 'はい。すべてのWhisper多言語モデル（base、small、medium、large-v3）は99言語をサポートしています。CLIに`-l [言語コード]`を追加：日本語は`-l ja`、ドイツ語は`-l de`、フランス語は`-l fr`など。tiny.enとbase.enモデルは英語専用で、多言語版と比べて英語でわずかに正確です。',
          },
          {
            q: 'CUDAサポート付きのfaster-whisperはどうインストールしますか？',
            a: '`pip install faster-whisper`でインストール。CUDAサポートにはCUDA 11.8以降とシステムにcuDNN 8.xのインストールが必要。`nvcc --version`でCUDAバージョンを確認。その後、モデルロード時に`device="cuda"`を指定：`WhisperModel("large-v3", device="cuda", compute_type="int8")`。CUDAが検出されない場合、faster-whisperは自動的にCPUにフォールバックします。',
          },
          {
            q: 'どちらがより正確ですか — whisper.cppかfaster-whisperか？',
            a: '同一です。両ツールとも同じOpenAI Whisperモデルウェイトを使用し、同じ音声ファイルで同じWERを生成します。whisper.cppとfaster-whisperの違いは速度とプラットフォームサポートであり、文字起こし精度ではありません。実行間で測定されるWERの差はビームサーチの通常の変動範囲内であり、ランタイム自体によるものではありません。',
          },
          {
            q: 'Whisper large-v3を8 GB RAMで実行できますか？',
            a: 'GPUでは可能 — faster-whisperのlarge-v3 int8はVRAMを約2.5 GB使用し、8 GB GPUで動作します。CPU専用ハードウェアでは、8 GB RAMはlarge-v3には不足気味です（float32は約10 GB使用）。CPU専用システムではmedium（5 GB RAM）またはsmall（2 GB RAM）を使用してください。whisper.cppはランタイムオーバーヘッドが低いため、CPUでfaster-whisperよりメモリ効率が高いです。',
          },
          {
            q: 'ローカルWhisperはクラウドSTTと比べてコストはどのくらいですか？',
            a: '継続的なコストはゼロです。クラウドSTTサービスは音声1分当たり$0.006〜$0.024を請求します — 週8時間の会議を文字起こしする開発者は月$120〜480になります。ローカルWhisperはすでに所有しているハードウェアで動作し、分単位の料金なし、APIキー管理なし、音声データがデバイスから外に出ることもありません。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[whisper.cpp（GitHub）](https://github.com/ggerganov/whisper.cpp) — ソースコード、ビルド手順、モデルダウンロードスクリプト、Metal/Core MLセットアップガイド。',
          '[faster-whisper（GitHub）](https://github.com/SYSTRAN/faster-whisper) — ソースコード、Python APIドキュメント、ベンチマーク結果。',
          '[distil-whisper/distil-large-v3（Hugging Face）](https://huggingface.co/distil-whisper/distil-large-v3) — モデルカード、ベンチマーク結果、蒸留Whisperバリアントの使用手順。',
          '[WhisperX（GitHub）](https://github.com/m-bain/whisperX) — faster-whisperをベースとした単語レベルタイムスタンプと話者識別。',
          '[insanely-fast-whisper（GitHub）](https://github.com/Vaibhavs10/insanely-fast-whisper) — 最大NVIDIA GPUスループットのためのFlash Attention 2 Whisperパイプライン。',
          '[OpenAI Whisper（GitHub）](https://github.com/openai/whisper) — オリジナルのWhisperモデル、論文、全サイズのモデルカード。',
          '[OpenAI Whisper論文（Radford他、2022年）](https://arxiv.org/abs/2212.04356) — 「Robust Speech Recognition via Large-Scale Weak Supervision」。WER値の出典。',
          '[CTranslate2ドキュメント](https://github.com/OpenNMT/CTranslate2) — 量子化の詳細、ハードウェアサポート、int8最適化の根拠。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルTTSと音声クローニング2026：Piper vs Coqui vs XTTS v2](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTSの補完：文字起こしテキストをオフラインで再び音声に変換。',
          '[2026年に完全オフライン音声アシスタントを構築する](/ja/power-local-llm/build-local-voice-assistant-2026) — Whisper STTをローカルLLMとPiper TTSに接続して完全な音声パイプラインを構築。',
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — STTとTTSと並行してビジョンモデルを追加して完全なローカルマルチモーダルスタックを構築。',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — 音声 + LLMパイプライン全体のGPUとRAM要件。',
          '[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline) — モバイル版：iPhoneのWhisperKit、AndroidのLayla。',
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
    title: '本地语音识别2026：Whisper.cpp vs faster-whisper — 基准测试、安装配置、GPU加速',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026：本地STT基准测试与配置指南',
    intro:
      'whisper.cpp和faster-whisper是2026年本地离线语音转文字的两大主流实现。whisper.cpp是纯C/C++移植版本，支持Apple Metal、CUDA、Vulkan和CPU，适用于Apple Silicon、嵌入式系统和实时语音应用。faster-whisper是基于CTranslate2的Python库，通过int8量化在NVIDIA GPU上实现约4倍于原始Whisper的吞吐量。本指南涵盖安装方法、性能基准测试、实时转录配置以及各平台的横向对比。',
    metaDescription:
      '对比whisper.cpp与faster-whisper在2026年本地语音识别中的表现。WER基准、GPU与CPU速度对比、Apple Silicon Metal支持、实时转录配置及安装指南。完全离线使用。',
    twitterDescription:
      'whisper.cpp vs faster-whisper：2026年本地语音识别基准测试。CPU与GPU速度、Apple Metal、WER准确率、实时转录。无需云服务，零成本。',
    audience:
      '需要离线本地语音转文字功能的开发者、研究人员和系统构建者 — 适用于会议记录、语音界面、无障碍工具或安全环境。',
    readTime: '10分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地语音识别',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      '本地语音识别 2026',
      '离线语音识别',
      'whisper 本地转录',
      'faster-whisper 基准测试',
      'whisper cpp apple silicon',
      '本地 STT GPU',
      'whisper cpp 安装配置',
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
      '**whisper.cpp与faster-whisper — 两大本地Whisper运行时 — 在各自的目标平台上均具有决定性优势。** **在Apple Silicon（M系列Mac）上，配合Metal加速的whisper.cpp是2026年最快的本地STT方案 — M5 Pro上large-v3可达约10倍实时速度。** 在NVIDIA GPU服务器和Python管道方面，采用CTranslate2 int8量化的faster-whisper是更好的选择，在RTX 4070上large-v3可达约12倍实时速度，VRAM仅需2.5 GB。两款工具均使用相同的OpenAI Whisper模型权重（tiny至large-v3）；区别仅在于运行时优化和集成方式，与转录精度无关。在纯CPU硬件上，两者均可运行tiny和base模型 — faster-whisper通过int8略有优势（约20倍vs约15倍实时速度）。',
    quickAnswerTop: {
      zh: {
        question: '2026年本地语音识别应该选择whisper.cpp还是faster-whisper？',
        answer:
          '选择取决于您的硬件和集成需求。在Apple Silicon（M1至M5）上，配合Metal加速的whisper.cpp更快且更自然 — 无需Python依赖，large-v3可达约10倍实时速度。在NVIDIA GPU上，faster-whisper更快且更易于集成到Python管道，通过int8量化large-v3可达约12倍实时速度，VRAM减少40%。在纯CPU硬件上，两者均可运行小型和base模型；faster-whisper略有速度优势。',
        bullets: [
          'Apple Silicon → 使用Core ML / Metal的whisper.cpp。M5 Pro上large-v3约10倍实时速度。',
          'NVIDIA GPU → faster-whisper。RTX 4070上large-v3 int8约12倍实时速度，VRAM约2.5 GB。',
          'Python管道 → faster-whisper。原生Python，5行代码配置，内置VAD。',
          '嵌入式 / Raspberry Pi → whisper.cpp。纯C二进制文件，无需Python运行时。',
          '实时语音 → whisper.cpp的stream模式或faster-whisper的VAD管道。',
          '批量转录 → faster-whisper。GPU上最佳吞吐量，轻松实现异步批处理。',
          'WER精度：两者完全相同 — 使用相同的Whisper模型权重。',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '为什么选择本地语音识别？', anchor: '#why-local-stt' },
      { label: 'Whisper模型规格', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper：更快的替代方案', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++移植版', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — CTranslate2版本', anchor: '#faster-whisper' },
      { label: '正面对比：基准测试表格', anchor: '#benchmarks' },
      { label: '实时转录配置', anchor: '#real-time' },
      { label: 'Apple Silicon：whisper.cpp胜出', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU：faster-whisper胜出', anchor: '#nvidia-gpu' },
      { label: '适用场景指南', anchor: '#when-to-use' },
      { label: '超越whisper.cpp和faster-whisper', anchor: '#beyond-tools' },
      { label: '常见问题与解决方案', anchor: '#troubleshooting' },
      { label: '常见问题解答', anchor: '#faq' },
      { label: '参考来源', anchor: '#sources' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp是Apple Silicon的最佳本地STT选择。** 该C/C++移植版利用Core ML和Apple Metal进行硬件加速 — M5 Pro上large-v3约10倍实时速度，无需Python依赖。',
          '**faster-whisper是NVIDIA GPU和Python管道的最佳本地STT选择。** CTranslate2 int8量化将VRAM减少约40%，吞吐量比原始OpenAI实现提升约4倍 — RTX 4070上large-v3约12倍实时速度，VRAM仅约2.5 GB。',
          '**两款工具均使用OpenAI相同的Whisper模型权重。** WER（词错误率）完全相同 — 区别仅在于运行时性能和集成方式，与转录精度无关。',
          '**Whisper large-v3在英语上提供最佳精度，WER为2.5%。** 对于大多数生产用例，Whisper small（3.4% WER，2 GB RAM）或medium（2.9% WER，5 GB RAM）提供更好的速度精度平衡。',
          '**两款工具均可实现实时转录** — whisper.cpp通过`--stream`参数，faster-whisper通过内置VAD（语音活动检测）管道。根据模型大小，实际延迟比实时语音慢0.5至2秒。',
          '**whisper.cpp支持CPU、Metal、CUDA和Vulkan** — 是跨平台嵌入式部署（Raspberry Pi、Windows GPU、ARM服务器）的唯一选择。faster-whisper仅支持CPU和CUDA（Mac上无Metal支持）。',
          '**对于Raspberry Pi和嵌入式Linux，whisper.cpp tiny/base在CPU上运行**是实际可行的上限 — Pi 5上tiny约15倍实时速度，base约6倍实时速度。两者均可在1 GB RAM内运行。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**两款工具：** 均基于OpenAI的开源Whisper模型（MIT许可证）。精度相同 — 运行时不同。',
          '**whisper.cpp：** 由ggerganov用C/C++编写。支持CPU（AVX2/NEON）、CUDA、Metal（Apple）、Vulkan。无需Python。',
          '**faster-whisper：** 基于CTranslate2的Python库。支持CPU（int8）和CUDA。不支持Apple Metal。',
          '**Whisper模型规格：** tiny（39M）、base（74M）、small（244M）、medium（769M）、large-v3（1.55B）。均使用ggml / CTranslate2格式。',
          '**大多数用例的最佳模型：** Whisper small — 3.4% WER，2 GB RAM内运行，现代CPU上6倍实时速度。',
          '**RTX 4070基准（large-v3）：** faster-whisper约12倍实时速度；whisper.cpp CUDA约8倍实时速度。faster-whisper在NVIDIA上胜出。',
          '**M5 Pro基准（large-v3）：** whisper.cpp Metal约10倍实时速度；faster-whisper纯CPU约3倍实时速度。whisper.cpp在Apple上胜出。',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '为什么选择本地语音识别？',
        content:
          '云端STT服务（Google Speech-to-Text、AWS Transcribe、Azure Speech）按音频分钟收费 — 通常$0.006至$0.024/分钟 — 并将音频发送至远程服务器。对于隐私敏感应用（医疗听写、法律录音、记者采访、企业会议），本地转录可完全消除数据暴露风险。',
        items: [
          '**隐私保护：** 音频永不离开您的设备。本地处理无需第三方数据处理协议。',
          '**零成本：** 无按分钟计费。每周转录8小时会议的开发者，相比云端STT定价可节省$120至480/月。',
          '**离线使用：** 在飞机上、安全设施内、网络不稳定区域均可使用。无需管理API密钥。',
          '**低延迟：** 无上传/下载往返延迟。对于实时语音界面，本地处理将STT延迟从云端的300至800ms降低至50至300ms。',
          '**可定制：** 可针对特定领域词汇进行微调。运行适合您硬件的任意模型规格。',
          '**Home Assistant集成：** 本地运行的Whisper意味着唤醒词和语音命令永不离开您的家庭网络。请参阅[Home Assistant中的本地Whisper →](/zh/smart-home/local-whisper-home-assistant)了解完全替代云端STT的插件设置。',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper模型规格 — 两款工具的基础',
        content:
          'whisper.cpp和faster-whisper均使用相同的Whisper模型权重，分别转换为各自的格式（whisper.cpp使用GGML，faster-whisper使用CTranslate2）。根据您的VRAM/RAM预算和精度要求选择模型规格。',
        columns: ['模型', '参数量', 'VRAM / RAM', '英语WER', '速度系数（相对RTX 4070实时）'],
        rows: [
          {
            '模型': 'tiny',
            '参数量': '39M',
            'VRAM / RAM': '~1 GB',
            '英语WER': '7.6%',
            '速度系数（相对RTX 4070实时）': '~32×',
          },
          {
            '模型': 'base',
            '参数量': '74M',
            'VRAM / RAM': '~1 GB',
            '英语WER': '5.0%',
            '速度系数（相对RTX 4070实时）': '~16×',
          },
          {
            '模型': 'small',
            '参数量': '244M',
            'VRAM / RAM': '~2 GB',
            '英语WER': '3.4%',
            '速度系数（相对RTX 4070实时）': '~6×',
          },
          {
            '模型': 'medium',
            '参数量': '769M',
            'VRAM / RAM': '~5 GB',
            '英语WER': '2.9%',
            '速度系数（相对RTX 4070实时）': '~2×',
          },
          {
            '模型': 'large-v3',
            '参数量': '1.55B',
            'VRAM / RAM': '~10 GB',
            '英语WER': '2.5%',
            '速度系数（相对RTX 4070实时）': '1×（基准）',
          },
          {
            '模型': 'distil-large-v3',
            '参数量': '~756M',
            'VRAM / RAM': '~4 GB',
            '英语WER': '~2.6%',
            '速度系数（相对RTX 4070实时）': '~6×',
          },
        ],
        note: 'WER（词错误率）数据来自LibriSpeech干净测试集上的Whisper论文。数值越低越好。速度系数为RTX 4070上faster-whisper int8的数据。distil-large-v3数据来自Distil-Whisper论文。',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper：更快的替代方案',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)是large-v3的蒸馏变体，参数量减少约50%，WER与原版相差约1%以内，运行速度提升约6倍。** 当转录速度比精度更重要时，这是正确的选择。distil-large-v3可与faster-whisper（原生CTranslate2支持）和whisper.cpp（通过GGML格式转换）配合使用，可集成到您已使用的任何运行时。',
        items: [
          '**参数量：** ~756M — 约为large-v3 1.55B参数的一半，VRAM需求约4 GB而非约10 GB。',
          '**速度：** RTX 4070上约6倍实时速度（相比large-v3的1倍基准）— 速度与medium模型相当，精度接近large-v3水平。',
          '**WER：** 英语约2.6% — 仅比large-v3的2.5%高约0.1%。在实际语音中，差异几乎听不出来。',
          '**兼容性：** 与faster-whisper原生兼容（`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`）。对于whisper.cpp，使用distil-whisper GGML转换脚本转换为GGML格式。',
          '**最适合：** 批量转录任务、VRAM有限的服务器部署，以及希望以medium模型速度获得large-v3质量的任何用例。',
          '**不适合：** 多语言转录 — distil-large-v3仅支持英语。其他语言请使用large-v3或medium。',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — C/C++移植版',
        content:
          '**whisper.cpp（由Georgi Gerganov开发）是OpenAI Whisper模型的纯C/C++重新实现，针对低资源和跨平台推理进行了优化。** 无需Python，无需CUDA工具包，几乎可在任何硬件上运行 — 从Raspberry Pi到Apple M5 Pro再到Windows CUDA配置。',
        items: [
          '**平台支持：** CPU（AVX2、AVX512、ARM NEON）、Apple Metal（Core ML）、CUDA（NVIDIA）、Vulkan（AMD/Intel GPU）、OpenCL。',
          '**Apple Silicon优势：** whisper.cpp将模型导出为Core ML格式，支持在Apple Neural Engine上进行推理。large-v3通过Metal在M5 Pro上实现约10倍实时速度 — 比任何云端往返速度都快。',
          '**安装：** 克隆代码库，运行`make`（或`cmake`）。常见平台有预构建的二进制文件。无Python依赖。',
          '**下载模型：** `bash ./models/download-ggml-model.sh base.en` — 下载GGML格式模型文件（base约142 MB）。',
          '**CLI示例：** `./main -m models/ggml-base.bin -f audio.wav` — 将WAV文件转录到标准输出。`-l zh`用于中文。',
          '**实时流模式：** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — 以3秒块从麦克风转录。',
          '**Python封装：** pywhispercpp为whisper.cpp提供Python绑定，可在Python管道中使用，同时保留Metal加速。',
          '**限制：** 无原生VAD（语音活动检测）。流模式需要针对具体用例调整`--step`和`--length`参数。',
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
        title: 'faster-whisper — CTranslate2版本',
        content:
          '**faster-whisper（由SYSTRAN开发）是使用CTranslate2 — 支持int8量化的高度优化C++推理引擎 — 重新实现Whisper推理的Python库。** 在NVIDIA GPU上，faster-whisper是现有最快的本地Whisper实现。',
        items: [
          '**平台支持：** CPU（int8量化）和NVIDIA CUDA GPU。不支持Apple Metal — 在Mac上仅以CPU模式运行。',
          '**int8优势：** CTranslate2 int8量化将VRAM减少约40%，相比float16推理吞吐量提升约2倍，WER影响可忽略不计（绝对值<0.1%）。',
          '**安装：** `pip install faster-whisper` — 无需编译。CUDA支持需要CUDA 11.8+和cuDNN 8.x。',
          '**内置VAD：** faster-whisper包含Silero VAD集成，可自动跳过无声音频段 — 对实时转录管道至关重要。',
          '**Python原生：** 直接的Python API使其可以轻松与LLM、音频处理库和Web框架链接。',
          '**速度：** RTX 4070上的large-v3 int8约12倍实时速度，VRAM约2.5 GB。CPU int8对tiny模型可达约20倍实时速度。',
          '**批量处理：** faster-whisper支持批量推理，可高效处理大型音频存档。',
          '**限制：** Mac上无Metal支持 — 在Apple Silicon上以CPU模式运行，large-v3约3倍实时速度（相比whisper.cpp Metal的约10倍实时速度）。',
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
        title: '正面对比：基准测试表格',
        content:
          '所有基准测试除非另有说明均使用large-v3模型。速度以实时倍数衡量（例如10×表示60分钟音频在6分钟内转录完成）。GPU运行使用VRAM数据；CPU运行使用RAM数据。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在Apple Silicon上，配合Metal的whisper.cpp以约10倍实时速度运行large-v3；在NVIDIA GPU上，配合int8的faster-whisper以约12倍实时速度运行 — 每款工具在其目标平台上均具有决定性优势。',
          },
          {
            type: 'plain-terms',
            text: 'Mac用户选择whisper.cpp（它使用Apple Neural Engine），Windows/Linux用户有NVIDIA GPU选择faster-whisper（以12倍速处理音频，同时减少40%的GPU内存使用）。',
          },
        ],
        columns: ['指标', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            '指标': '平台 / 编程语言',
            'whisper.cpp (large-v3)': 'C/C++（跨平台）',
            'faster-whisper (large-v3)': 'Python（CTranslate2）',
          },
          {
            '指标': 'GPU支持',
            'whisper.cpp (large-v3)': 'CUDA、Metal、Vulkan',
            'faster-whisper (large-v3)': '仅CUDA',
          },
          {
            '指标': 'CPU优化',
            'whisper.cpp (large-v3)': 'AVX2、ARM NEON',
            'faster-whisper (large-v3)': 'int8量化',
          },
          {
            '指标': '速度 — RTX 4070，large-v3',
            'whisper.cpp (large-v3)': '~8倍实时速度',
            'faster-whisper (large-v3)': '~12倍实时速度 ✓',
          },
          {
            '指标': '速度 — M5 Pro，large-v3',
            'whisper.cpp (large-v3)': '~10倍实时速度（Metal）✓',
            'faster-whisper (large-v3)': '~3倍实时速度（仅CPU）',
          },
          {
            '指标': '速度 — 纯CPU（x86），base',
            'whisper.cpp (large-v3)': '~15倍实时速度',
            'faster-whisper (large-v3)': '~20倍实时速度 ✓',
          },
          {
            '指标': 'VRAM — large-v3，GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB（int8）✓',
          },
          {
            '指标': 'Python集成',
            'whisper.cpp (large-v3)': '需要封装器（pywhispercpp）',
            'faster-whisper (large-v3)': '原生支持 ✓',
          },
          {
            '指标': 'VAD（静音检测）',
            'whisper.cpp (large-v3)': '手动（--step调优）',
            'faster-whisper (large-v3)': '内置（Silero VAD）✓',
          },
          {
            '指标': '实时流传输',
            'whisper.cpp (large-v3)': '支持（--stream参数）✓',
            'faster-whisper (large-v3)': '支持（VAD管道）',
          },
          {
            '指标': 'WER精度（large-v3）',
            'whisper.cpp (large-v3)': '2.5%（相同）',
            'faster-whisper (large-v3)': '2.5%（相同）',
          },
          {
            '指标': 'Python依赖',
            'whisper.cpp (large-v3)': '无 ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            '指标': 'Raspberry Pi / 嵌入式',
            'whisper.cpp (large-v3)': '支持 — C二进制 ✓',
            'faster-whisper (large-v3)': '有限 — Python开销',
          },
          {
            '指标': '输出格式',
            'whisper.cpp (large-v3)': 'SRT、VTT、JSON、CSV、txt',
            'faster-whisper (large-v3)': 'Python对象（start、end、text）',
          },
        ],
        note: 'whisper.cpp直接输出到标准字幕和转录文件格式（SRT、VTT、JSON、CSV、txt）— 适合需要磁盘文件且无需额外代码的字幕工作流。faster-whisper产生带有`start`、`end`和`text`属性的段对象的Python生成器 — 适合LLM管道链接，可直接将段文本传递到下游模型而无需写入中间文件。字幕生成用whisper.cpp更简单，编程处理段落的管道用faster-whisper更简单。',
      },
      realTimeSetup: {
        id: 'real-time',
        title: '实时转录配置',
        content:
          '**实时转录在音频从麦克风到达时分块处理，产生比语音稍有延迟的文本。** 两款工具均支持此功能，但各有权衡。',
        items: [
          '**whisper.cpp流模式：** 运行`./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`。处理3秒音频块；使用small模型约0.5至1.5秒延迟。无需Python。',
          '**faster-whisper VAD管道：** 在`model.transcribe()`中使用`vad_filter=True`。Silero VAD自动在静音边界处分割音频 — 比固定长度窗口更自然的块。',
          '**实际延迟：** 使用small或medium模型时比实时语音慢0.5至2秒。使用tiny可获得最低延迟（<0.5秒，但WER更高）。',
          '**实时模型选择：** small或base是实际最优选择 — 足够快以跟上语音，对清晰音频足够准确。除非有专用GPU，否则避免实时使用large-v3。',
          '**麦克风输入：** whisper.cpp通过SDL2或portaudio读取原始音频。faster-whisper读取任意Python音频库（sounddevice、pyaudio、soundfile）的音频数组。',
          '**稳定性：** whisper.cpp流模式在静音时可能产生重复标记（"幻听"短填充词）。使用`--suppress-blank`和`--no-speech-threshold`来抑制。',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon：whisper.cpp胜出',
        content:
          '**在M1、M2、M3、M4和M5 Mac上，配合Core ML / Metal加速的whisper.cpp是正确的工具选择 — 毫无疑问。** faster-whisper不支持Metal，在Mac上仅以CPU模式运行，large-v3约3倍实时速度。whisper.cpp配合Metal在M5 Pro上可达约10倍实时速度 — 速度提升3倍。',
        items: [
          '**Core ML导出：** 运行`./models/generate-coreml-model.sh large-v3`将编码器导出为Core ML格式。这将编码器推理卸载到Apple Neural Engine。',
          '**M5 Pro基准（large-v3，Metal）：** 约10倍实时速度。60分钟音频约6分钟转录完成。注意：M5 Pro于2026年3月发布 — 这些是早期社区基准数据。随着whisper.cpp针对M5 Neural Engine的优化，性能可能会提升。',
          '**M3 MacBook Air基准（large-v3，Metal）：** 约7倍实时速度。60分钟约8.5分钟完成。',
          '**内存：** 统一内存意味着无需独立VRAM — 16 GB M5 Pro可在运行其他进程的同时轻松运行large-v3（约3 GB）。',
          '**Mac上的faster-whisper：** 仅CPU，int8。large-v3约3倍实时速度。可用于整晚批量转录，但不适合实时或时间敏感的工作流。',
          '**推荐：** 所有Mac STT工作使用whisper.cpp。如果需要Python集成同时保留Metal加速，添加pywhispercpp。',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU：faster-whisper胜出',
        content:
          '**在配备NVIDIA GPU的Windows和Linux系统上，faster-whisper是优越的选择。** 其CTranslate2 CUDA后端比whisper.cpp的CUDA路径更优化 — RTX 4070上large-v3约12倍vs约8倍实时速度，VRAM占用更低。',
        items: [
          '**RTX 4070（12 GB）基准（large-v3 int8）：** 约12倍实时速度，VRAM约2.5 GB。',
          '**RTX 3060（12 GB）基准（large-v3 int8）：** 约8倍实时速度，VRAM约2.5 GB。',
          '**RTX 4060（8 GB）基准（large-v3 int8）：** 约7倍实时速度，VRAM约2.5 GB — 轻松适配。',
          '**int8与float16：** int8速度约快2倍，VRAM减少约40%，精度损失可忽略不计。在NVIDIA上始终使用`compute_type="int8"`。',
          '**批量处理：** faster-whisper的`batched=True`参数支持并行处理多个音频文件，最大化大型转录任务的GPU利用率。',
          '**Python管道集成：** faster-whisper可直接插入LangChain、Haystack和自定义Python管道。无需封装whisper.cpp时的子进程开销。',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: '适用场景指南',
        content: '从您的使用场景直接映射到正确工具：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon和嵌入式/跨平台目标使用whisper.cpp；NVIDIA GPU和Python管道使用faster-whisper。',
          },
          {
            type: 'plain-terms',
            text: '有Mac就选whisper.cpp — 在Apple硬件上比faster-whisper快3倍。有NVIDIA GPU且写Python就选faster-whisper — 更快且GPU内存少40%。',
          },
        ],
        columns: ['使用场景', '推荐工具', '原因'],
        rows: [
          {
            '使用场景': 'Apple Silicon Mac（任意型号）',
            '推荐工具': 'whisper.cpp',
            '原因': 'Metal / Core ML加速 — 比Mac上仅CPU的faster-whisper快3倍',
          },
          {
            '使用场景': 'NVIDIA GPU服务器（Linux/Windows）',
            '推荐工具': 'faster-whisper',
            '原因': 'CTranslate2 int8 — 比whisper.cpp CUDA路径更快且VRAM更低',
          },
          {
            '使用场景': 'Python数据管道',
            '推荐工具': 'faster-whisper',
            '原因': '原生Python API；无子进程封装器；内置VAD',
          },
          {
            '使用场景': 'Raspberry Pi / 嵌入式Linux',
            '推荐工具': 'whisper.cpp',
            '原因': '纯C二进制；无Python运行时开销；ARM NEON优化',
          },
          {
            '使用场景': '实时语音助手',
            '推荐工具': 'whisper.cpp',
            '原因': '低开销的流模式；在Pi / 嵌入式设备上无需Python即可工作',
          },
          {
            '使用场景': '批量转录（大型音频存档）',
            '推荐工具': 'faster-whisper',
            '原因': '批量推理、GPU利用率、Python异步集成',
          },
          {
            '使用场景': 'AMD GPU（Vulkan）',
            '推荐工具': 'whisper.cpp',
            '原因': 'Vulkan后端支持；faster-whisper仅支持CUDA',
          },
          {
            '使用场景': '纯CPU Linux服务器',
            '推荐工具': 'faster-whisper',
            '原因': 'int8量化在x86 CPU上提供约30%速度优势',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: '超越whisper.cpp和faster-whisper',
        content:
          '两款额外工具提供了whisper.cpp和faster-whisper均未内置的功能：说话人分离和极速批量GPU推理。',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX)：** 基于faster-whisper构建，WhisperX添加了词级时间戳和说话人分离 — 识别哪个说话人说了哪些话。最适合：带说话人标签的会议转录、播客编辑和访谈记录。使用`pip install whisperx`安装，并提供分离模型的Hugging Face令牌。',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)：** 添加Flash Attention 2支持的Hugging Face Transformers管道封装器，在NVIDIA硬件上实现比标准faster-whisper更快的GPU推理。最适合：在NVIDIA GPU上批量处理大型音频存档。需要Flash Attention 2兼容GPU（Ampere或更新：RTX 3000+、A100、H100）。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '常见问题与解决方案',
        content: '最常见的配置和运行时问题及直接解决方案：',
        items: [
          '**CUDA版本不匹配：** faster-whisper需要CUDA 11.8或更高版本。使用`nvcc --version`检查。如果CUDA较旧，升级驱动程序或在conda环境中使用`cudatoolkit=11.8`安装faster-whisper。',
          '**Metal模型导出失败：** 确保已安装Xcode Command Line Tools — 运行`xcode-select --install`。Core ML导出脚本需要`coremltools` Python包：`pip install coremltools`。',
          '**静音时出现幻听：** 两款工具在静音音频段上都可能产生重复填充标记。在whisper.cpp流模式中使用`--no-speech-threshold 0.6`，或在faster-whisper的`model.transcribe()`中使用`vad_filter=True`自动跳过静音段。',
          '**large-v3内存不足：** 切换到faster-whisper中的int8量化（`compute_type="int8"`）— 将VRAM从约5 GB（float16）降至约2.5 GB。在whisper.cpp中，使用量化GGML变体（例如`ggml-large-v3-q5_0.bin`），将内存降至约3至4 GB。',
          '**非英语音频出现乱码：** 不要对非英语语音使用`.en`模型变体（tiny.en、base.en）— 它们仅支持英语。使用多语言模型（base、small、medium、large-v3）并明确设置语言：whisper.cpp中使用`-l zh`，faster-whisper中使用`language="zh"`。',
          '**CPU推理慢：** 确认CPU支持AVX2指令集（优化CPU推理所必需）。Linux上使用`grep avx2 /proc/cpuinfo`检查，Mac上使用`sysctl machdep.cpu.features`检查。不支持AVX2的CPU将回退到通用SIMD，速度慢2至3倍。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题解答',
        faqs: [
          {
            q: 'whisper.cpp和faster-whisper的转录精度相同吗？',
            a: '是的。两款工具均使用相同的OpenAI Whisper模型权重 — 模型本身完全相同。区别仅在于推理运行时（C/C++与CTranslate2 Python）。同一音频文件的WER绝对差值在0.1%以内 — 这在束搜索随机性的正常变动范围内。',
          },
          {
            q: '可以在配备Apple Silicon的Mac上使用faster-whisper吗？',
            a: '可以，但它仅以CPU模式运行 — faster-whisper没有Metal支持。在M5 Pro上，faster-whisper large-v3以CPU int8模式运行，约3倍实时速度，而whisper.cpp配合Metal约10倍实时速度。对大多数Mac用户来说，同等模型下whisper.cpp快3倍。在Mac上使用faster-whisper的唯一理由是Python管道已经依赖它且速度不是关键因素。',
          },
          {
            q: '语音助手应该使用哪个Whisper模型规格？',
            a: '对于实时语音界面，Whisper small是标准推荐 — 清晰英语上3.4% WER，现代CPU或GPU上约200 ms STT延迟，2 GB RAM内可运行。硬件非常受限（Raspberry Pi Zero 2W、旧手机）且可接受约7.6% WER时使用tiny。仅在延迟不是限制的批量转录场景下使用medium或large-v3。',
          },
          {
            q: 'whisper.cpp支持英语以外的语言吗？',
            a: '支持。所有Whisper多语言模型（base、small、medium、large-v3）支持99种语言。在CLI中添加`-l [语言代码]`：中文用`-l zh`，日语用`-l ja`，法语用`-l fr`等。tiny.en和base.en模型仅支持英语，在英语上比多语言版本略微准确。',
          },
          {
            q: '如何安装支持CUDA的faster-whisper？',
            a: '使用`pip install faster-whisper`安装。CUDA支持需要系统安装CUDA 11.8或更高版本和cuDNN 8.x。使用`nvcc --version`验证CUDA版本。然后加载模型时指定`device="cuda"`：`WhisperModel("large-v3", device="cuda", compute_type="int8")`。如果未检测到CUDA，faster-whisper会自动回退到CPU。',
          },
          {
            q: '哪个更准确 — whisper.cpp还是faster-whisper？',
            a: '完全相同。两款工具均使用相同的OpenAI Whisper模型权重，对任何给定音频文件产生相同的WER。whisper.cpp和faster-whisper的区别在于速度和平台支持，而非转录精度。运行之间测量到的任何WER差异都在束搜索的正常变动范围内，而非来自运行时本身。',
          },
          {
            q: '可以在8 GB RAM上运行Whisper large-v3吗？',
            a: '在GPU上可以 — faster-whisper中的large-v3 int8使用约2.5 GB VRAM，可在任何8 GB GPU上运行。在纯CPU硬件上，8 GB RAM对large-v3来说有些紧张（float32使用约10 GB）。在纯CPU系统上使用medium（5 GB RAM）或small（2 GB RAM）。由于运行时开销更低，whisper.cpp在CPU上比faster-whisper更节省内存。',
          },
          {
            q: '本地Whisper与云端STT相比费用如何？',
            a: '无持续费用。云端STT服务按音频分钟收费$0.006至$0.024 — 每周转录8小时会议的开发者每月需支付$120至480。本地Whisper在您已拥有的硬件上运行，无按分钟计费，无API密钥管理，音频数据不离开您的设备。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[whisper.cpp（GitHub）](https://github.com/ggerganov/whisper.cpp) — 源代码、构建说明、模型下载脚本及Metal/Core ML配置指南。',
          '[faster-whisper（GitHub）](https://github.com/SYSTRAN/faster-whisper) — 源代码、Python API文档及基准测试结果。',
          '[distil-whisper/distil-large-v3（Hugging Face）](https://huggingface.co/distil-whisper/distil-large-v3) — 模型卡、基准测试结果及蒸馏Whisper变体使用说明。',
          '[WhisperX（GitHub）](https://github.com/m-bain/whisperX) — 基于faster-whisper构建的词级时间戳和说话人分离。',
          '[insanely-fast-whisper（GitHub）](https://github.com/Vaibhavs10/insanely-fast-whisper) — 用于最大化NVIDIA GPU吞吐量的Flash Attention 2 Whisper管道。',
          '[OpenAI Whisper（GitHub）](https://github.com/openai/whisper) — 原始Whisper模型、论文及所有规格的模型卡。',
          '[OpenAI Whisper论文（Radford等，2022）](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision"。WER数据来源。',
          '[CTranslate2文档](https://github.com/OpenNMT/CTranslate2) — 量化细节、硬件支持及int8优化原理。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地TTS与语音克隆2026：Piper vs Coqui vs XTTS v2](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS补充：将转录文本转换回语音，完全离线。',
          '[2026年构建完全离线语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 将Whisper STT连接到本地LLM和Piper TTS，构建完整语音管道。',
          '[本地多模态AI管道2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 在STT和TTS基础上添加视觉模型，构建完整的本地多模态技术栈。',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 完整语音 + LLM管道的GPU和RAM需求。',
          '[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 移动版：iPhone上的WhisperKit，Android上的Layla。',
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
    title: 'Whisper.cpp vs faster-whisper 2026: Benchmarks STT local, configuración y aceleración GPU',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: STT local y benchmarks',
    intro:
      'whisper.cpp y faster-whisper son las dos implementaciones dominantes del modelo Whisper de OpenAI para transcripción local y offline en 2026. whisper.cpp es un port puro en C/C++ que funciona en Apple Metal, CUDA, Vulkan y CPU — ideal para Apple Silicon, sistemas embebidos y aplicaciones de voz en tiempo real. faster-whisper es una librería Python que usa CTranslate2 y logra un rendimiento de hasta ~4× el original de Whisper en GPUs NVIDIA mediante cuantización int8. Esta guía cubre instalación, benchmarks de rendimiento, configuración de transcripción en tiempo real y una comparación directa entre plataformas para que elijas la herramienta adecuada.',
    metaDescription:
      'Compara whisper.cpp y faster-whisper para voz local en 2026: WER, velocidad GPU vs CPU, Apple Silicon Metal y transcripción en tiempo real. Todo offline.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: benchmarks de reconocimiento de voz local 2026. Velocidad CPU vs GPU, Apple Metal, precisión WER, transcripción en tiempo real. Sin nube, sin costo.',
    audience:
      'Desarrolladores, investigadores y constructores de sistemas que necesitan transcripción de voz offline y privada — para notas de reuniones, interfaces de voz, herramientas de accesibilidad o entornos seguros.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'reconocimiento de voz local',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'reconocimiento de voz local 2026',
      'transcripción offline',
      'whisper transcripción local',
      'benchmark faster-whisper',
      'whisper cpp apple silicon',
      'STT local GPU',
      'instalación whisper cpp',
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
      '**whisper.cpp vs faster-whisper — los dos runtimes locales de Whisper más usados — ganan de forma decisiva en su plataforma objetivo.** **Para Apple Silicon (Macs con chip M), whisper.cpp con aceleración Metal es la opción STT local más rápida en 2026 — large-v3 funciona a ~10× tiempo real en un M5 Pro.** Para servidores GPU NVIDIA y pipelines Python, faster-whisper con cuantización int8 de CTranslate2 es la mejor opción, alcanzando ~12× tiempo real en una RTX 4070 con solo 2,5 GB de VRAM para el modelo large-v3. Ambas herramientas usan los mismos pesos del modelo Whisper de OpenAI (tiny hasta large-v3); la diferencia está en la optimización del runtime y el camino de integración. En hardware solo-CPU, ambas son utilizables para los modelos tiny y base — faster-whisper tiene una ligera ventaja (~20× vs ~15× tiempo real) en CPU mediante int8.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar whisper.cpp o faster-whisper para reconocimiento de voz local en 2026?',
        answer:
          'La elección depende de tu hardware y necesidades de integración. En Apple Silicon (M1–M5), whisper.cpp con aceleración Metal es más rápido y la elección natural — alcanza ~10× tiempo real con large-v3 sin ninguna dependencia de Python. En GPUs NVIDIA, faster-whisper es más rápido y más fácil de integrar en pipelines Python, funcionando large-v3 a ~12× tiempo real con un 40% menos de VRAM mediante cuantización int8. En hardware solo-CPU, ambos funcionan para modelos small y base; faster-whisper tiene una ligera ventaja en velocidad.',
        bullets: [
          'Apple Silicon → whisper.cpp con Core ML / Metal. ~10× tiempo real en M5 Pro con large-v3.',
          'NVIDIA GPU → faster-whisper. ~12× tiempo real en RTX 4070 con large-v3 int8, ~2,5 GB VRAM.',
          'Pipeline Python → faster-whisper. Python nativo, configuración en 5 líneas, VAD incluido.',
          'Embebido / Raspberry Pi → whisper.cpp. Binario C puro, sin necesidad de runtime Python.',
          'Voz en tiempo real → modo stream de whisper.cpp o pipeline VAD de faster-whisper.',
          'Transcripción por lotes → faster-whisper. Mejor rendimiento en GPU; batching asíncrono sencillo.',
          'Precisión WER: idéntica en ambos — usan los mismos pesos del modelo Whisper.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Por qué reconocimiento de voz local?', anchor: '#why-local-stt' },
      { label: 'Tamaños del modelo Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: la alternativa más rápida', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — el port C/C++', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — el port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Comparativa directa: tabla de benchmarks', anchor: '#benchmarks' },
      { label: 'Configuración de transcripción en tiempo real', anchor: '#real-time' },
      { label: 'Apple Silicon: gana whisper.cpp', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA: gana faster-whisper', anchor: '#nvidia-gpu' },
      { label: 'Cuándo usar cuál', anchor: '#when-to-use' },
      { label: 'Más allá de whisper.cpp y faster-whisper', anchor: '#beyond-tools' },
      { label: 'Problemas comunes y soluciones', anchor: '#troubleshooting' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp es la mejor opción STT local para Apple Silicon.** El port C/C++ aprovecha Core ML y Apple Metal para aceleración por hardware — large-v3 a ~10× tiempo real en M5 Pro, sin dependencia de Python.',
          '**faster-whisper es la mejor opción STT local para GPUs NVIDIA y pipelines Python.** La cuantización int8 de CTranslate2 reduce el VRAM en ~40% y aumenta el rendimiento ~4× respecto a la implementación original de OpenAI — large-v3 a ~12× tiempo real en RTX 4070, usando solo ~2,5 GB de VRAM.',
          '**Ambas herramientas usan los mismos pesos del modelo Whisper de OpenAI.** El WER (tasa de error de palabras) es idéntico — la diferencia está únicamente en el rendimiento del runtime y el camino de integración, no en la precisión de transcripción.',
          '**Whisper large-v3 ofrece la mejor precisión con 2,5% WER en inglés.** Para la mayoría de casos de producción, Whisper small (3,4% WER, 2 GB RAM) o medium (2,9% WER, 5 GB RAM) ofrece mejor equilibrio entre velocidad y precisión.',
          '**La transcripción en tiempo real es alcanzable con ambas herramientas** — whisper.cpp mediante su flag `--stream`, faster-whisper mediante su pipeline VAD (detección de actividad de voz) integrado. La latencia práctica es de 0,5–2 segundos detrás del habla en vivo según el tamaño del modelo.',
          '**whisper.cpp funciona en CPU, Metal, CUDA y Vulkan** — siendo la única opción para uso embebido multiplataforma (Raspberry Pi, configuraciones GPU en Windows, servidores ARM). faster-whisper solo admite CPU y CUDA (sin Metal en Mac).',
          '**Para Raspberry Pi y Linux embebido, whisper.cpp tiny/base en CPU** es el límite práctico — tiny a ~15× tiempo real en Pi 5, base a ~6× tiempo real. Ambos caben en 1 GB de RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Ambas herramientas:** basadas en el modelo Whisper de código abierto de OpenAI (licencia MIT). Misma precisión — runtimes diferentes.',
          '**whisper.cpp:** escrito en C/C++ por Georgi Gerganov. Admite CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. No requiere Python.',
          '**faster-whisper:** librería Python usando CTranslate2. Admite CPU (int8) y CUDA. Sin soporte para Apple Metal.',
          '**Tamaños del modelo Whisper:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Todos en formato ggml / CTranslate2.',
          '**Mejor modelo para la mayoría de casos:** Whisper small — 3,4% WER, funciona en 2 GB de RAM, 6× tiempo real en CPU moderno.',
          '**Benchmark RTX 4070 (large-v3):** faster-whisper ~12× tiempo real; whisper.cpp CUDA ~8× tiempo real. faster-whisper gana en NVIDIA.',
          '**Benchmark M5 Pro (large-v3):** whisper.cpp Metal ~10× tiempo real; faster-whisper solo-CPU ~3× tiempo real. whisper.cpp gana en Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '¿Por qué reconocimiento de voz local?',
        content:
          'Los servicios STT en la nube (Google Speech-to-Text, AWS Transcribe, Azure Speech) cobran por minuto de audio — típicamente $0,006–$0,024/minuto — y envían el audio a servidores remotos. Para aplicaciones sensibles a la privacidad (dictado médico, grabaciones legales, entrevistas periodísticas, reuniones corporativas), la transcripción local elimina completamente la exposición de datos.',
        items: [
          '**Privacidad:** el audio nunca sale de tu equipo. No se necesita acuerdo de procesamiento de datos para cumplimiento — el procesamiento ocurre localmente.',
          '**Costo:** sin tarifas por minuto. Un desarrollador que transcribe 8 horas de reuniones por semana ahorra $120–480/mes respecto a precios STT en la nube.',
          '**Offline:** funciona en aviones, instalaciones seguras y zonas sin internet estable. Sin gestión de API keys.',
          '**Latencia:** sin ida y vuelta de subida/descarga. Para interfaces de voz en tiempo real, el procesamiento local reduce la latencia STT de 300–800 ms (nube) a 50–300 ms.',
          '**Personalización:** ajusta el modelo con vocabulario específico del dominio. Ejecuta el tamaño de modelo que quepa en tu hardware.',
          '**Integración con Home Assistant:** Whisper en local significa que las palabras de activación y los comandos de voz nunca salen de tu red doméstica. Ver [Whisper local en Home Assistant →](/es/smart-home/local-whisper-home-assistant) para la configuración del complemento que reemplaza completamente el STT en la nube.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tamaños del modelo Whisper — base de ambas herramientas',
        content:
          'Tanto whisper.cpp como faster-whisper usan los mismos pesos del modelo Whisper, convertidos a sus formatos respectivos (GGML para whisper.cpp, CTranslate2 para faster-whisper). Elige el tamaño del modelo según tu presupuesto de VRAM/RAM y tus requisitos de precisión.',
        columns: ['Modelo', 'Parámetros', 'VRAM / RAM', 'WER inglés', 'Factor de velocidad (vs tiempo real en RTX 4070)'],
        rows: [
          {
            'Modelo': 'tiny',
            'Parámetros': '39M',
            'VRAM / RAM': '~1 GB',
            'WER inglés': '7,6%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '~32×',
          },
          {
            'Modelo': 'base',
            'Parámetros': '74M',
            'VRAM / RAM': '~1 GB',
            'WER inglés': '5,0%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '~16×',
          },
          {
            'Modelo': 'small',
            'Parámetros': '244M',
            'VRAM / RAM': '~2 GB',
            'WER inglés': '3,4%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '~6×',
          },
          {
            'Modelo': 'medium',
            'Parámetros': '769M',
            'VRAM / RAM': '~5 GB',
            'WER inglés': '2,9%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '~2×',
          },
          {
            'Modelo': 'large-v3',
            'Parámetros': '1,55B',
            'VRAM / RAM': '~10 GB',
            'WER inglés': '2,5%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '1× (referencia)',
          },
          {
            'Modelo': 'distil-large-v3',
            'Parámetros': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER inglés': '~2,6%',
            'Factor de velocidad (vs tiempo real en RTX 4070)': '~6×',
          },
        ],
        note: 'Valores WER (tasa de error de palabras) del paper de Whisper en el conjunto de prueba limpio de LibriSpeech. Menor es mejor. Factores de velocidad para faster-whisper int8 en RTX 4070. Valores de distil-large-v3 del paper de Distil-Whisper.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: la alternativa más rápida',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) es una variante destilada de large-v3 con ~50% menos parámetros, que funciona ~6× más rápido manteniendo el WER dentro del ~1% del original.** Es la elección correcta cuando la velocidad de transcripción importa más que exprimir el último porcentaje de precisión. distil-large-v3 funciona con faster-whisper (soporte CTranslate2 nativo) y whisper.cpp (mediante conversión al formato GGML), integrándose en el runtime que ya uses.',
        items: [
          '**Parámetros:** ~756M — aproximadamente la mitad de los 1,55B de large-v3, cabe en ~4 GB de VRAM en lugar de ~10 GB.',
          '**Velocidad:** ~6× tiempo real en RTX 4070 (vs. 1× de referencia para large-v3) — comparable al modelo medium en velocidad, con precisión cercana a large-v3.',
          '**WER:** ~2,6% en inglés — solo ~0,1% superior al 2,5% de large-v3. En la práctica, la diferencia es imperceptible en habla típica.',
          '**Compatibilidad:** funciona con faster-whisper de forma nativa (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). Para whisper.cpp, convierte al formato GGML usando el script de conversión GGML de distil-whisper.',
          '**Mejor para:** trabajos de transcripción por lotes, despliegues en servidor con VRAM limitada y cualquier caso de uso donde quieras calidad de large-v3 a velocidad del modelo medium.',
          '**No recomendado para:** transcripción multilingüe — distil-large-v3 es solo inglés. Para otros idiomas, usa large-v3 o medium.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — el port C/C++',
        content:
          '**whisper.cpp (de Georgi Gerganov) es una reimplementación pura en C/C++ del modelo Whisper de OpenAI, optimizada para inferencia de bajo consumo de recursos y multiplataforma.** No requiere Python, ni CUDA toolkit, y funciona en prácticamente cualquier hardware — desde Raspberry Pi hasta Apple M5 Pro o configuraciones Windows CUDA.',
        items: [
          '**Soporte de plataformas:** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (GPU AMD/Intel), OpenCL.',
          '**Ventaja en Apple Silicon:** whisper.cpp exporta modelos al formato Core ML, habilitando inferencia en el Apple Neural Engine. Large-v3 funciona a ~10× tiempo real en M5 Pro mediante Metal — más rápido que cualquier ida y vuelta a la nube.',
          '**Instalación:** clona el repositorio, ejecuta `make` (o `cmake`). Binarios precompilados disponibles para plataformas comunes. Sin dependencia de Python.',
          '**Descarga de modelo:** `bash ./models/download-ggml-model.sh base.en` — descarga el archivo de modelo en formato GGML (~142 MB para base).',
          '**Ejemplo de CLI:** `./main -m models/ggml-base.bin -f audio.wav` — transcribe un archivo WAV a la salida estándar. Añade `-l es` para español.',
          '**Modo stream en tiempo real:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcribe desde el micrófono en chunks de 3 segundos.',
          '**Wrapper Python:** pywhispercpp proporciona un binding Python para whisper.cpp, permitiendo su uso en pipelines Python sin sacrificar la aceleración Metal.',
          '**Limitación:** sin VAD (detección de actividad de voz) nativo. El modo stream requiere ajustar los parámetros `--step` y `--length` según el caso de uso.',
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
        title: 'faster-whisper — el port CTranslate2',
        content:
          '**faster-whisper (de SYSTRAN) es una librería Python que reimplementa la inferencia de Whisper usando CTranslate2 — un motor de inferencia C++ altamente optimizado con soporte de cuantización int8, reduciendo el uso de VRAM y aumentando el rendimiento.** En GPUs NVIDIA, faster-whisper es la implementación local de Whisper más rápida disponible.',
        items: [
          '**Soporte de plataformas:** CPU (cuantización int8) y GPU NVIDIA CUDA. Sin soporte para Apple Metal — funciona solo en CPU en Mac.',
          '**Ventaja de int8:** la cuantización int8 de CTranslate2 reduce el VRAM en ~40% y aumenta la velocidad de inferencia ~2× respecto a float16, con impacto WER negligible (< 0,1% absoluto).',
          '**Instalación:** `pip install faster-whisper` — sin compilación necesaria. El soporte CUDA requiere CUDA 11.8+ y cuDNN 8.x.',
          '**VAD integrado:** faster-whisper incluye integración con Silero VAD, que omite automáticamente segmentos de audio silencioso — crítico para pipelines de transcripción en tiempo real.',
          '**Python nativo:** la API Python directa facilita la integración con LLMs, librerías de procesamiento de audio y frameworks web.',
          '**Velocidad:** large-v3 int8 en RTX 4070 funciona a ~12× tiempo real usando ~2,5 GB de VRAM. CPU int8 alcanza ~20× tiempo real para el modelo tiny.',
          '**Procesamiento por lotes:** faster-whisper admite inferencia en lotes para procesar grandes archivos de audio de forma eficiente.',
          '**Limitación:** sin soporte Metal en Mac — funciona solo en CPU en Apple Silicon, logrando ~3× tiempo real con large-v3 vs. ~10× de whisper.cpp con Metal.',
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
        title: 'Comparativa directa: tabla de benchmarks',
        content:
          'Todos los benchmarks usan el modelo large-v3 salvo que se indique lo contrario. La velocidad se mide en múltiplos del tiempo real (p. ej., 10× significa 60 minutos de audio transcritos en 6 minutos). Cifras de VRAM para ejecuciones en GPU; cifras de RAM para ejecuciones en CPU.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En Apple Silicon, whisper.cpp con Metal ejecuta large-v3 a ~10× tiempo real; en GPUs NVIDIA, faster-whisper con int8 alcanza ~12× tiempo real — cada herramienta gana de forma decisiva en su plataforma objetivo.',
          },
          {
            type: 'plain-terms',
            text: 'En Mac elige whisper.cpp (usa el Apple Neural Engine), y en Windows/Linux con GPU NVIDIA elige faster-whisper (procesa audio 12× más rápido que en tiempo real usando un 40% menos de memoria GPU).',
          },
        ],
        columns: ['Métrica', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'Métrica': 'Plataforma / lenguaje',
            'whisper.cpp (large-v3)': 'C/C++ (multiplataforma)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'Métrica': 'Soporte GPU',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'Solo CUDA',
          },
          {
            'Métrica': 'Optimización CPU',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'Cuantización int8',
          },
          {
            'Métrica': 'Velocidad — RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8× tiempo real',
            'faster-whisper (large-v3)': '~12× tiempo real ✓',
          },
          {
            'Métrica': 'Velocidad — M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10× tiempo real (Metal) ✓',
            'faster-whisper (large-v3)': '~3× tiempo real (solo CPU)',
          },
          {
            'Métrica': 'Velocidad — solo CPU (x86), base',
            'whisper.cpp (large-v3)': '~15× tiempo real',
            'faster-whisper (large-v3)': '~20× tiempo real ✓',
          },
          {
            'Métrica': 'VRAM — large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2,5 GB (int8) ✓',
          },
          {
            'Métrica': 'Integración Python',
            'whisper.cpp (large-v3)': 'Requiere wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativo ✓',
          },
          {
            'Métrica': 'VAD (detección de silencio)',
            'whisper.cpp (large-v3)': 'Manual (ajuste de --step)',
            'faster-whisper (large-v3)': 'Integrado (Silero VAD) ✓',
          },
          {
            'Métrica': 'Streaming en tiempo real',
            'whisper.cpp (large-v3)': 'Sí (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Sí (pipeline VAD)',
          },
          {
            'Métrica': 'Precisión WER (large-v3)',
            'whisper.cpp (large-v3)': '2,5% (idéntico)',
            'faster-whisper (large-v3)': '2,5% (idéntico)',
          },
          {
            'Métrica': 'Dependencia Python',
            'whisper.cpp (large-v3)': 'Ninguna ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'Métrica': 'Raspberry Pi / embebido',
            'whisper.cpp (large-v3)': 'Sí — binario C ✓',
            'faster-whisper (large-v3)': 'Limitado — overhead de Python',
          },
          {
            'Métrica': 'Formatos de salida',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objetos Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp escribe la salida directamente en formatos estándar de subtítulos y transcripción (SRT, VTT, JSON, CSV, txt) — ideal para flujos de trabajo de subtitulado donde necesitas un archivo en disco sin código adicional. faster-whisper devuelve un generador Python de objetos de segmento con atributos `start`, `end` y `text` — ideal para encadenamiento de pipelines LLM, donde pasas el texto del segmento directamente a un modelo posterior sin escribir archivos intermedios. Para generación de subtítulos, whisper.cpp es más sencillo. Para pipelines que procesan segmentos programáticamente, faster-whisper es más sencillo.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuración de transcripción en tiempo real',
        content:
          '**La transcripción en tiempo real procesa el audio en chunks a medida que llega desde el micrófono, produciendo texto con un breve retraso respecto al habla.** Ambas herramientas lo admiten, pero con diferentes compromisos.',
        items: [
          '**Modo stream de whisper.cpp:** ejecuta `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Procesa chunks de 3 segundos; latencia ~0,5–1,5 segundos con el modelo small. Sin Python necesario.',
          '**Pipeline VAD de faster-whisper:** usa `vad_filter=True` en `model.transcribe()`. Silero VAD segmenta el audio automáticamente en los límites de silencio — chunks más naturales que ventanas de longitud fija.',
          '**Latencia práctica:** 0,5–2 segundos detrás del habla en vivo con modelos small o medium. Usa tiny para la menor latencia (< 0,5 segundos, pero mayor WER).',
          '**Selección de modelo para tiempo real:** small o base es el punto óptimo práctico — suficientemente rápido para seguir el habla, suficientemente preciso para audio limpio. Evita large-v3 en tiempo real salvo que tengas una GPU dedicada.',
          '**Entrada de micrófono:** whisper.cpp lee audio raw mediante SDL2 o portaudio. faster-whisper lee arrays de audio desde cualquier librería Python de audio (sounddevice, pyaudio, soundfile).',
          '**Estabilidad:** el modo stream de whisper.cpp puede producir tokens repetidos ("alucinaciones" de rellenos cortos) en silencio. Suprime con `--suppress-blank` y `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: gana whisper.cpp',
        content:
          '**En Macs con M1, M2, M3, M4 y M5, whisper.cpp con aceleración Core ML / Metal es la herramienta correcta — sin duda.** faster-whisper no tiene soporte Metal y solo funciona en CPU en Mac, alcanzando ~3× tiempo real con large-v3. whisper.cpp con Metal logra ~10× tiempo real en M5 Pro — una ventaja de velocidad de 3×.',
        items: [
          '**Exportación a Core ML:** ejecuta `./models/generate-coreml-model.sh large-v3` para exportar el encoder al formato Core ML. Esto descarga la inferencia del encoder al Apple Neural Engine.',
          '**Benchmark M5 Pro (large-v3, Metal):** ~10× tiempo real. 60 minutos de audio transcritos en ~6 minutos. Nota: el M5 Pro salió en marzo de 2026 — estos son benchmarks tempranos de la comunidad. El rendimiento puede mejorar con actualizaciones de whisper.cpp optimizando el M5 Neural Engine.',
          '**Benchmark M3 MacBook Air (large-v3, Metal):** ~7× tiempo real. 60 minutos en ~8,5 minutos.',
          '**Memoria:** la memoria unificada significa que no hay VRAM separada — un M5 Pro de 16 GB puede ejecutar large-v3 (~3 GB) cómodamente junto a otros procesos.',
          '**faster-whisper en Mac:** solo CPU, int8. Large-v3 a ~3× tiempo real. Usable para transcripción por lotes nocturna, pero no para tiempo real o flujos de trabajo sensibles al tiempo.',
          '**Recomendación:** usa whisper.cpp para todo el trabajo STT en Mac. Añade pywhispercpp si necesitas integración Python manteniendo la aceleración Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA: gana faster-whisper',
        content:
          '**En Windows y Linux con GPUs NVIDIA, faster-whisper es la opción superior.** Su backend CUDA de CTranslate2 está más optimizado que el camino CUDA de whisper.cpp — ~12× vs. ~8× tiempo real con large-v3 en RTX 4070, con menor uso de VRAM.',
        items: [
          '**Benchmark RTX 4070 (12 GB) (large-v3 int8):** ~12× tiempo real, ~2,5 GB VRAM.',
          '**Benchmark RTX 3060 (12 GB) (large-v3 int8):** ~8× tiempo real, ~2,5 GB VRAM.',
          '**Benchmark RTX 4060 (8 GB) (large-v3 int8):** ~7× tiempo real, ~2,5 GB VRAM — cabe con margen.',
          '**int8 vs float16:** int8 es ~2× más rápido y usa ~40% menos VRAM con pérdida de precisión negligible. Usa siempre `compute_type="int8"` en NVIDIA.',
          '**Procesamiento por lotes:** el parámetro `batched=True` de faster-whisper permite el procesamiento paralelo de múltiples archivos de audio, maximizando la utilización GPU en trabajos grandes de transcripción.',
          '**Integración en pipeline Python:** faster-whisper se integra directamente en LangChain, Haystack y pipelines Python personalizados. Sin overhead de subproceso comparado con envolver whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Cuándo usar cuál',
        content: 'Mapeo directo de tu escenario a la herramienta adecuada:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Usa whisper.cpp en Apple Silicon y objetivos embebidos/multiplataforma; usa faster-whisper en GPUs NVIDIA y pipelines Python.',
          },
          {
            type: 'plain-terms',
            text: 'Si tienes Mac, elige whisper.cpp — es 3× más rápido que faster-whisper en hardware Apple. Si tienes GPU NVIDIA y escribes Python, elige faster-whisper — es más rápido y necesita un 40% menos de memoria GPU.',
          },
        ],
        columns: ['Escenario', 'Mejor opción', 'Por qué'],
        rows: [
          {
            'Escenario': 'Mac con Apple Silicon (cualquier modelo)',
            'Mejor opción': 'whisper.cpp',
            'Por qué': 'Aceleración Metal / Core ML — 3× más rápido que faster-whisper (solo CPU en Mac)',
          },
          {
            'Escenario': 'Servidor GPU NVIDIA (Linux/Windows)',
            'Mejor opción': 'faster-whisper',
            'Por qué': 'CTranslate2 int8 — más rápido y menor VRAM que el camino CUDA de whisper.cpp',
          },
          {
            'Escenario': 'Pipeline de datos Python',
            'Mejor opción': 'faster-whisper',
            'Por qué': 'API Python nativa; sin wrapper de subproceso; VAD integrado',
          },
          {
            'Escenario': 'Raspberry Pi / Linux embebido',
            'Mejor opción': 'whisper.cpp',
            'Por qué': 'Binario C puro; sin overhead del runtime Python; optimizado con ARM NEON',
          },
          {
            'Escenario': 'Asistente de voz en tiempo real',
            'Mejor opción': 'whisper.cpp',
            'Por qué': 'Modo stream con bajo overhead; funciona sin Python en Pi / embebido',
          },
          {
            'Escenario': 'Transcripción por lotes (gran archivo de audio)',
            'Mejor opción': 'faster-whisper',
            'Por qué': 'Inferencia por lotes, utilización GPU, integración Python asíncrona',
          },
          {
            'Escenario': 'GPU AMD (Vulkan)',
            'Mejor opción': 'whisper.cpp',
            'Por qué': 'Soporte de backend Vulkan; faster-whisper es solo CUDA',
          },
          {
            'Escenario': 'Servidor Linux solo-CPU',
            'Mejor opción': 'faster-whisper',
            'Por qué': 'La cuantización int8 da ~30% de ventaja de velocidad en CPU x86',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'Más allá de whisper.cpp y faster-whisper',
        content:
          'Dos herramientas adicionales extienden Whisper con capacidades que ninguna de las dos proporciona de serie: diarización de hablantes e inferencia GPU ultra-rápida en lotes.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** construido sobre faster-whisper, WhisperX añade marcas de tiempo a nivel de palabra y diarización de hablantes — identificando qué hablante dijo qué palabras. Mejor para: transcripción de reuniones con etiquetas de hablante, edición de podcasts y transcripción de entrevistas. Instala con `pip install whisperx` y proporciona un token de Hugging Face para el modelo de diarización.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** un wrapper de pipeline Hugging Face Transformers que añade soporte de Flash Attention 2 para inferencia GPU significativamente más rápida que faster-whisper estándar en hardware NVIDIA. Mejor para: procesamiento por lotes de grandes archivos de audio en GPUs NVIDIA. Requiere una GPU compatible con Flash Attention 2 (Ampere o más reciente: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problemas comunes y soluciones',
        content: 'Los problemas de configuración y runtime más frecuentes, con soluciones directas:',
        items: [
          '**Incompatibilidad de versión CUDA:** faster-whisper requiere CUDA 11.8 o posterior. Verifica con `nvcc --version`. Si tu CUDA es más antigua, actualiza el driver o instala faster-whisper en un entorno conda con `cudatoolkit=11.8`.',
          '**Falla la exportación del modelo Metal:** asegúrate de tener instaladas las Xcode Command Line Tools — ejecuta `xcode-select --install`. El script de exportación Core ML requiere el paquete Python `coremltools`: `pip install coremltools`.',
          '**Alucinaciones en el silencio:** ambas herramientas pueden producir tokens de relleno repetidos en segmentos de audio silencioso. Usa `--no-speech-threshold 0.6` en el modo stream de whisper.cpp, o `vad_filter=True` en `model.transcribe()` de faster-whisper para omitir automáticamente los segmentos silenciosos.',
          '**Sin memoria con large-v3:** cambia a cuantización int8 en faster-whisper (`compute_type="int8"`) — reduce el VRAM de ~5 GB (float16) a ~2,5 GB. En whisper.cpp, usa la variante GGML cuantizada (p. ej., `ggml-large-v3-q5_0.bin`) que reduce la memoria a ~3–4 GB.',
          '**Salida ilegible en audio no inglés:** no uses variantes `.en` del modelo (tiny.en, base.en) para habla no inglesa — son solo inglés. Usa los modelos multilingüe (base, small, medium, large-v3) y especifica el idioma explícitamente: `-l es` en whisper.cpp o `language="es"` en faster-whisper.',
          '**Inferencia CPU lenta:** verifica que tu CPU admita instrucciones AVX2 (necesarias para inferencia CPU optimizada). Comprueba con `grep avx2 /proc/cpuinfo` en Linux o `sysctl machdep.cpu.features` en Mac. Las CPUs sin AVX2 recurren a SIMD genérico y serán 2–3× más lentas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿La precisión de transcripción es la misma entre whisper.cpp y faster-whisper?',
            a: 'Sí. Ambas herramientas usan los mismos pesos del modelo OpenAI Whisper — el modelo en sí es idéntico. La diferencia está únicamente en el runtime de inferencia (C/C++ vs CTranslate2 Python). El WER en el mismo archivo de audio estará dentro de un 0,1% absoluto el uno del otro, lo cual está dentro de la variación normal por la aleatoriedad de beam search.',
          },
          {
            q: '¿Puedo usar faster-whisper en un Mac con Apple Silicon?',
            a: 'Sí, pero funciona solo en CPU — faster-whisper no tiene soporte Metal. En un M5 Pro, faster-whisper large-v3 funciona a ~3× tiempo real (CPU int8), comparado con ~10× de whisper.cpp con Metal. Para la mayoría de usuarios Mac, whisper.cpp es 3× más rápido con el mismo modelo. La única razón para usar faster-whisper en Mac es si tu pipeline Python ya depende de él y la velocidad no es crítica.',
          },
          {
            q: '¿Qué tamaño de modelo Whisper debo usar para un asistente de voz?',
            a: 'Para interfaces de voz en tiempo real, Whisper small es la recomendación estándar — 3,4% WER en inglés limpio, ~200 ms de latencia STT en una CPU o GPU moderna, y cabe en 2 GB de RAM. Usa tiny si estás en hardware muy restringido (Raspberry Pi Zero 2W, teléfonos antiguos) y puedes tolerar ~7,6% WER. Usa medium o large-v3 solo para transcripción por lotes donde la latencia no es una restricción.',
          },
          {
            q: '¿whisper.cpp admite idiomas distintos al inglés?',
            a: 'Sí. Todos los modelos multilingüe de Whisper (base, small, medium, large-v3) admiten 99 idiomas. Añade `-l [código de idioma]` al CLI: `-l es` para español, `-l de` para alemán, `-l ja` para japonés, etc. Los modelos tiny.en y base.en son solo inglés y ligeramente más precisos para inglés que sus equivalentes multilingüe.',
          },
          {
            q: '¿Cómo instalo faster-whisper con soporte CUDA?',
            a: 'Instala con `pip install faster-whisper`. El soporte CUDA requiere CUDA 11.8 o posterior y cuDNN 8.x instalados en tu sistema. Verifica tu versión de CUDA con `nvcc --version`. Luego especifica `device="cuda"` al cargar el modelo: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Si no se detecta CUDA, faster-whisper recurre automáticamente a CPU.',
          },
          {
            q: '¿Cuál es más preciso — whisper.cpp o faster-whisper?',
            a: 'Idéntico. Ambas herramientas usan los mismos pesos del modelo OpenAI Whisper y producen el mismo WER en cualquier archivo de audio dado. La diferencia entre whisper.cpp y faster-whisper es la velocidad y el soporte de plataforma, no la precisión de transcripción. Cualquier diferencia de WER que midas entre ejecuciones está dentro de la variación normal de beam search, no proviene del runtime en sí.',
          },
          {
            q: '¿Puedo ejecutar Whisper large-v3 con 8 GB de RAM?',
            a: 'Sí en GPU — large-v3 int8 en faster-whisper usa ~2,5 GB de VRAM y funciona en cualquier GPU de 8 GB. En hardware solo-CPU, 8 GB de RAM es ajustado para large-v3 (float32 usa ~10 GB). Usa medium (5 GB RAM) o small (2 GB RAM) en sistemas solo-CPU. whisper.cpp es más eficiente en memoria en CPU que faster-whisper debido al menor overhead del runtime.',
          },
          {
            q: '¿Cuánto cuesta Whisper local vs STT en la nube?',
            a: 'Costo continuo cero. Los servicios STT en la nube cobran $0,006–$0,024 por minuto de audio — para un desarrollador que transcribe 8 horas de reuniones por semana, eso son $120–480/mes. Whisper local funciona en hardware que ya posees, sin tarifas por minuto, sin gestión de API keys y sin que los datos de audio salgan de tu equipo.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[whisper.cpp en GitHub](https://github.com/ggerganov/whisper.cpp) — Código fuente, instrucciones de compilación, scripts de descarga de modelos y guía de configuración Metal/Core ML.',
          '[faster-whisper en GitHub](https://github.com/SYSTRAN/faster-whisper) — Código fuente, documentación de la API Python y resultados de benchmarks.',
          '[distil-whisper/distil-large-v3 en Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — Ficha del modelo, resultados de benchmarks e instrucciones de uso de la variante destilada de Whisper.',
          '[WhisperX en GitHub](https://github.com/m-bain/whisperX) — Marcas de tiempo a nivel de palabra y diarización de hablantes construidas sobre faster-whisper.',
          '[insanely-fast-whisper en GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 para máximo rendimiento en GPU NVIDIA.',
          '[OpenAI Whisper en GitHub](https://github.com/openai/whisper) — Modelo Whisper original, paper y fichas de modelo para todos los tamaños.',
          '[Paper de OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". Fuente de los valores WER.',
          '[Documentación de CTranslate2](https://github.com/OpenNMT/CTranslate2) — Detalles de cuantización, soporte de hardware y fundamentos de optimización int8.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[TTS local y clonación de voz 2026: Piper vs Coqui vs XTTS v2](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — El complemento TTS: convierte el texto transcrito de nuevo en voz, offline.',
          '[Construye un asistente de voz completamente offline en 2026](/es/power-local-llm/build-local-voice-assistant-2026) — Conecta Whisper STT a un LLM local y Piper TTS en un pipeline de voz completo.',
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Añade modelos de visión junto a STT y TTS para un stack local multimodal completo.',
          '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — Requisitos de GPU y RAM para el pipeline completo de voz + LLM.',
          '[Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) — Versión móvil: WhisperKit en iPhone, Layla en Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Whisper.cpp vs faster-whisper 2026: Benchmarks STT local, configuración y aceleración GPU',
       description: 'Compara whisper.cpp y faster-whisper para reconocimiento de voz local en 2026. Benchmarks WER, velocidad GPU vs CPU, Apple Silicon Metal, transcripción en tiempo real y guías de instalación. Todo offline.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-whisper-stt-comparison-2026',
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
    title: 'Whisper.cpp vs faster-whisper 2026: Benchmarks de STT local, configuração e aceleração de GPU',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: STT local e benchmarks',
    intro:
      'whisper.cpp e faster-whisper são as duas implementações dominantes do modelo Whisper de fala em texto da OpenAI para transcrição local e offline em 2026. whisper.cpp é um port puro em C/C++ que roda em Apple Metal, CUDA, Vulkan e CPU — o que o torna ideal para Apple Silicon, sistemas embarcados e aplicações de voz em tempo real. faster-whisper é uma biblioteca Python que usa CTranslate2 e atinge ~4× o throughput do Whisper original em GPUs NVIDIA por meio de quantização int8. Este guia cobre instalação, benchmarks de desempenho, configuração de transcrição em tempo real e uma comparação direta entre plataformas para que você escolha a ferramenta certa para seu pipeline.',
    metaDescription:
      'Compare whisper.cpp e faster-whisper para reconhecimento de voz local em 2026. Benchmarks de WER, velocidade GPU vs CPU, Apple Silicon Metal, transcrição em tempo real e guias de instalação. Tudo offline.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: benchmarks de reconhecimento de voz local 2026. Velocidade CPU vs GPU, Apple Metal, precisão WER, transcrição em tempo real. Sem nuvem, sem custo.',
    audience:
      'Desenvolvedores, pesquisadores e construtores de sistemas que precisam de transcrição de fala em texto offline e privada — para notas de reuniões, interfaces de voz, ferramentas de acessibilidade ou ambientes seguros.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'reconhecimento de voz local',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      'reconhecimento de voz local 2026',
      'transcrição offline',
      'whisper transcrição local',
      'benchmark faster-whisper',
      'whisper cpp apple silicon',
      'STT local GPU',
      'instalação whisper cpp',
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
      '**whisper.cpp vs faster-whisper — os dois runtimes locais do Whisper mais usados — vencem de forma decisiva em sua plataforma-alvo.** **Para Apple Silicon (Macs com chip M), whisper.cpp com aceleração Metal é a opção de STT local mais rápida em 2026 — o large-v3 roda a ~10× tempo real em um M5 Pro.** Para servidores com GPU NVIDIA e pipelines Python, faster-whisper com quantização int8 do CTranslate2 é a melhor escolha, atingindo ~12× tempo real em uma RTX 4070 com apenas 2,5 GB de VRAM para o modelo large-v3. Ambas as ferramentas usam os mesmos pesos do modelo Whisper da OpenAI (do tiny ao large-v3); a diferença está na otimização do runtime e no caminho de integração. Em hardware somente CPU, ambas são utilizáveis para os modelos tiny e base — faster-whisper tem uma leve vantagem (~20× vs ~15× tempo real) em CPU por meio do int8.',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar whisper.cpp ou faster-whisper para reconhecimento de voz local em 2026?',
        answer:
          'A escolha depende do seu hardware e das suas necessidades de integração. Em Apple Silicon (M1–M5), whisper.cpp com aceleração Metal é mais rápido e a escolha natural — atinge ~10× tempo real com large-v3 sem nenhuma dependência de Python. Em GPUs NVIDIA, faster-whisper é mais rápido e mais fácil de integrar em pipelines Python, rodando large-v3 a ~12× tempo real com 40% menos VRAM por meio da quantização int8. Em hardware somente CPU, ambos funcionam para os modelos small e base; faster-whisper tem uma pequena vantagem de velocidade.',
        bullets: [
          'Apple Silicon → whisper.cpp com Core ML / Metal. ~10× tempo real em M5 Pro com large-v3.',
          'NVIDIA GPU → faster-whisper. ~12× tempo real em RTX 4070 com large-v3 int8, ~2,5 GB VRAM.',
          'Pipeline Python → faster-whisper. Python nativo, configuração em 5 linhas, VAD incluído.',
          'Embarcado / Raspberry Pi → whisper.cpp. Binário C puro, sem necessidade de runtime Python.',
          'Voz em tempo real → modo stream do whisper.cpp ou pipeline VAD do faster-whisper.',
          'Transcrição em lote → faster-whisper. Melhor throughput em GPU; batching assíncrono simples.',
          'Precisão WER: idêntica em ambos — usam os mesmos pesos do modelo Whisper.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Por que reconhecimento de voz local?', anchor: '#why-local-stt' },
      { label: 'Tamanhos do modelo Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: a alternativa mais rápida', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — o port C/C++', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — o port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Comparação direta: tabela de benchmarks', anchor: '#benchmarks' },
      { label: 'Configuração de transcrição em tempo real', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp vence', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA: faster-whisper vence', anchor: '#nvidia-gpu' },
      { label: 'Quando usar cada um', anchor: '#when-to-use' },
      { label: 'Além do whisper.cpp e do faster-whisper', anchor: '#beyond-tools' },
      { label: 'Problemas comuns e soluções', anchor: '#troubleshooting' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp é a melhor opção de STT local para Apple Silicon.** O port C/C++ aproveita Core ML e Apple Metal para aceleração por hardware — large-v3 a ~10× tempo real em M5 Pro, sem dependência de Python.',
          '**faster-whisper é a melhor opção de STT local para GPUs NVIDIA e pipelines Python.** A quantização int8 do CTranslate2 reduz a VRAM em ~40% e aumenta o throughput em ~4× em relação à implementação original da OpenAI — large-v3 a ~12× tempo real em RTX 4070, usando apenas ~2,5 GB de VRAM.',
          '**Ambas as ferramentas usam os mesmos pesos do modelo Whisper da OpenAI.** O WER (taxa de erro de palavras) é idêntico — a diferença está unicamente no desempenho do runtime e no caminho de integração, não na precisão de transcrição.',
          '**Whisper large-v3 oferece a melhor precisão, com 2,5% de WER em inglês.** Para a maioria dos casos de produção, Whisper small (3,4% WER, 2 GB RAM) ou medium (2,9% WER, 5 GB RAM) oferece um melhor equilíbrio entre velocidade e precisão.',
          '**A transcrição em tempo real é alcançável com ambas as ferramentas** — whisper.cpp por meio da flag `--stream`, faster-whisper por meio de seu pipeline VAD (detecção de atividade de voz) integrado. A latência prática é de 0,5–2 segundos atrás da fala ao vivo, dependendo do tamanho do modelo.',
          '**whisper.cpp roda em CPU, Metal, CUDA e Vulkan** — sendo a única opção para uso embarcado multiplataforma (Raspberry Pi, configurações de GPU no Windows, servidores ARM). faster-whisper só suporta CPU e CUDA (sem Metal no Mac).',
          '**Para Raspberry Pi e Linux embarcado, whisper.cpp tiny/base em CPU** é o limite prático — tiny a ~15× tempo real no Pi 5, base a ~6× tempo real. Ambos cabem em 1 GB de RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Ambas as ferramentas:** baseadas no modelo Whisper de código aberto da OpenAI (licença MIT). Mesma precisão — runtimes diferentes.',
          '**whisper.cpp:** escrito em C/C++ por Georgi Gerganov. Suporta CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Não requer Python.',
          '**faster-whisper:** biblioteca Python usando CTranslate2. Suporta CPU (int8) e CUDA. Sem suporte a Apple Metal.',
          '**Tamanhos do modelo Whisper:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Todos no formato ggml / CTranslate2.',
          '**Melhor modelo para a maioria dos casos:** Whisper small — 3,4% WER, roda em 2 GB de RAM, 6× tempo real em CPU moderna.',
          '**Benchmark RTX 4070 (large-v3):** faster-whisper ~12× tempo real; whisper.cpp CUDA ~8× tempo real. faster-whisper vence em NVIDIA.',
          '**Benchmark M5 Pro (large-v3):** whisper.cpp Metal ~10× tempo real; faster-whisper somente CPU ~3× tempo real. whisper.cpp vence em Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Por que reconhecimento de voz local?',
        content:
          'Os serviços de STT na nuvem (Google Speech-to-Text, AWS Transcribe, Azure Speech) cobram por minuto de áudio — normalmente US$ 0,006–0,024/minuto — e enviam seu áudio para servidores remotos. Para aplicações sensíveis à privacidade (ditado médico, gravações jurídicas, entrevistas jornalísticas, reuniões corporativas), a transcrição local elimina completamente a exposição de dados.',
        items: [
          '**Privacidade:** o áudio nunca sai da sua máquina. Não é preciso acordo de processamento de dados para conformidade com a LGPD — o processamento acontece localmente.',
          '**Custo:** sem tarifas por minuto. Um desenvolvedor que transcreve 8 horas de reuniões por semana economiza US$ 120–480/mês em relação aos preços de STT na nuvem.',
          '**Offline:** funciona em aviões, em instalações seguras e em áreas sem internet confiável. Sem gerenciamento de chaves de API.',
          '**Latência:** sem ida e volta de upload/download. Para interfaces de voz em tempo real, o processamento local reduz a latência de STT de 300–800 ms (nuvem) para 50–300 ms.',
          '**Personalização:** ajuste fino com vocabulário específico do domínio. Rode qualquer tamanho de modelo que caiba no seu hardware.',
          '**Integração com Home Assistant:** O Whisper rodando localmente significa que palavras de ativação e comandos de voz nunca saem da sua rede doméstica. Veja [Whisper local no Home Assistant →](/pt/smart-home/local-whisper-home-assistant) para a configuração do complemento que substitui completamente o STT na nuvem.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tamanhos do modelo Whisper — base de ambas as ferramentas',
        content:
          'Tanto whisper.cpp quanto faster-whisper usam os mesmos pesos do modelo Whisper, convertidos para seus respectivos formatos (GGML para whisper.cpp, CTranslate2 para faster-whisper). Escolha o tamanho do modelo conforme seu orçamento de VRAM/RAM e seus requisitos de precisão.',
        columns: ['Modelo', 'Parâmetros', 'VRAM / RAM', 'WER inglês', 'Fator de velocidade (vs tempo real em RTX 4070)'],
        rows: [
          {
            'Modelo': 'tiny',
            'Parâmetros': '39M',
            'VRAM / RAM': '~1 GB',
            'WER inglês': '7,6%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '~32×',
          },
          {
            'Modelo': 'base',
            'Parâmetros': '74M',
            'VRAM / RAM': '~1 GB',
            'WER inglês': '5,0%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '~16×',
          },
          {
            'Modelo': 'small',
            'Parâmetros': '244M',
            'VRAM / RAM': '~2 GB',
            'WER inglês': '3,4%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '~6×',
          },
          {
            'Modelo': 'medium',
            'Parâmetros': '769M',
            'VRAM / RAM': '~5 GB',
            'WER inglês': '2,9%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '~2×',
          },
          {
            'Modelo': 'large-v3',
            'Parâmetros': '1,55B',
            'VRAM / RAM': '~10 GB',
            'WER inglês': '2,5%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '1× (referência)',
          },
          {
            'Modelo': 'distil-large-v3',
            'Parâmetros': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER inglês': '~2,6%',
            'Fator de velocidade (vs tempo real em RTX 4070)': '~6×',
          },
        ],
        note: 'Valores de WER (taxa de erro de palavras) do paper do Whisper no conjunto de teste limpo do LibriSpeech. Menor é melhor. Fatores de velocidade para faster-whisper int8 em RTX 4070. Valores de distil-large-v3 do paper do Distil-Whisper.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: a alternativa mais rápida',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) é uma variante destilada do large-v3 com ~50% menos parâmetros, que roda ~6× mais rápido mantendo o WER dentro de ~1% do original.** É a escolha certa quando a velocidade de transcrição importa mais do que extrair a última fração de precisão. distil-large-v3 funciona com faster-whisper (suporte nativo a CTranslate2) e com whisper.cpp (por meio de conversão para o formato GGML), integrando-se ao runtime que você já usa.',
        items: [
          '**Parâmetros:** ~756M — cerca de metade dos 1,55B do large-v3, cabendo em ~4 GB de VRAM em vez de ~10 GB.',
          '**Velocidade:** ~6× tempo real em RTX 4070 (vs. 1× de referência para large-v3) — comparável ao modelo medium em velocidade, com precisão próxima à do large-v3.',
          '**WER:** ~2,6% em inglês — apenas ~0,1% acima dos 2,5% do large-v3. Na prática, a diferença é imperceptível em fala típica.',
          '**Compatibilidade:** funciona com faster-whisper de forma nativa (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). Para whisper.cpp, converta para o formato GGML usando o script de conversão GGML do distil-whisper.',
          '**Melhor para:** trabalhos de transcrição em lote, implantações em servidor com VRAM limitada e qualquer caso de uso em que você queira qualidade de large-v3 na velocidade do modelo medium.',
          '**Não recomendado para:** transcrição multilíngue — distil-large-v3 é somente inglês. Para outros idiomas, use large-v3 ou medium.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — o port C/C++',
        content:
          '**whisper.cpp (de Georgi Gerganov) é uma reimplementação pura em C/C++ do modelo Whisper da OpenAI, otimizada para inferência de baixo consumo de recursos e multiplataforma.** Não requer Python, nem CUDA toolkit, e roda em praticamente qualquer hardware — do Raspberry Pi ao Apple M5 Pro ou configurações Windows CUDA.',
        items: [
          '**Suporte de plataformas:** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (GPU AMD/Intel), OpenCL.',
          '**Vantagem em Apple Silicon:** whisper.cpp exporta modelos para o formato Core ML, habilitando inferência no Apple Neural Engine. O large-v3 roda a ~10× tempo real em M5 Pro via Metal — mais rápido que qualquer ida e volta à nuvem.',
          '**Instalação:** clone o repositório, execute `make` (ou `cmake`). Binários pré-compilados disponíveis para plataformas comuns. Sem dependência de Python.',
          '**Download do modelo:** `bash ./models/download-ggml-model.sh base.en` — baixa o arquivo de modelo no formato GGML (~142 MB para base).',
          '**Exemplo de CLI:** `./main -m models/ggml-base.bin -f audio.wav` — transcreve um arquivo WAV para a saída padrão. Adicione `-l pt` para português.',
          '**Modo stream em tempo real:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcreve do microfone em chunks de 3 segundos.',
          '**Wrapper Python:** pywhispercpp fornece um binding Python para whisper.cpp, permitindo seu uso em pipelines Python sem sacrificar a aceleração Metal.',
          '**Limitação:** sem VAD (detecção de atividade de voz) nativo. O modo stream exige ajustar os parâmetros `--step` e `--length` conforme o caso de uso.',
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
        title: 'faster-whisper — o port CTranslate2',
        content:
          '**faster-whisper (da SYSTRAN) é uma biblioteca Python que reimplementa a inferência do Whisper usando CTranslate2 — um motor de inferência C++ altamente otimizado com suporte a quantização int8, reduzindo o uso de VRAM e aumentando o throughput.** Em GPUs NVIDIA, faster-whisper é a implementação local do Whisper mais rápida disponível.',
        items: [
          '**Suporte de plataformas:** CPU (quantização int8) e GPU NVIDIA CUDA. Sem suporte a Apple Metal — roda somente em CPU no Mac.',
          '**Vantagem do int8:** a quantização int8 do CTranslate2 reduz a VRAM em ~40% e aumenta a velocidade de inferência em ~2× em relação ao float16, com impacto no WER negligível (< 0,1% absoluto).',
          '**Instalação:** `pip install faster-whisper` — sem compilação necessária. O suporte CUDA requer CUDA 11.8+ e cuDNN 8.x.',
          '**VAD integrado:** faster-whisper inclui integração com Silero VAD, que pula automaticamente segmentos de áudio silencioso — crítico para pipelines de transcrição em tempo real.',
          '**Python nativo:** a API Python direta facilita a integração com LLMs, bibliotecas de processamento de áudio e frameworks web.',
          '**Velocidade:** large-v3 int8 em RTX 4070 roda a ~12× tempo real usando ~2,5 GB de VRAM. CPU int8 atinge ~20× tempo real para o modelo tiny.',
          '**Processamento em lote:** faster-whisper suporta inferência em lote para processar grandes arquivos de áudio de forma eficiente.',
          '**Limitação:** sem suporte Metal no Mac — roda somente em CPU no Apple Silicon, atingindo ~3× tempo real com large-v3 vs. ~10× do whisper.cpp com Metal.',
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
        title: 'Comparação direta: tabela de benchmarks',
        content:
          'Todos os benchmarks usam o modelo large-v3 salvo indicação em contrário. A velocidade é medida em múltiplos do tempo real (p. ex., 10× significa 60 minutos de áudio transcritos em 6 minutos). Valores de VRAM para execuções em GPU; valores de RAM para execuções em CPU.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em Apple Silicon, whisper.cpp com Metal roda large-v3 a ~10× tempo real; em GPUs NVIDIA, faster-whisper com int8 atinge ~12× tempo real — cada ferramenta vence de forma decisiva em sua plataforma-alvo.',
          },
          {
            type: 'plain-terms',
            text: 'No Mac escolha whisper.cpp (usa o Apple Neural Engine), e no Windows/Linux com GPU NVIDIA escolha faster-whisper (processa áudio 12× mais rápido que o tempo real usando 40% menos memória de GPU).',
          },
        ],
        columns: ['Métrica', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'Métrica': 'Plataforma / linguagem',
            'whisper.cpp (large-v3)': 'C/C++ (multiplataforma)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'Métrica': 'Suporte de GPU',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'Apenas CUDA',
          },
          {
            'Métrica': 'Otimização de CPU',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'Quantização int8',
          },
          {
            'Métrica': 'Velocidade — RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8× tempo real',
            'faster-whisper (large-v3)': '~12× tempo real ✓',
          },
          {
            'Métrica': 'Velocidade — M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10× tempo real (Metal) ✓',
            'faster-whisper (large-v3)': '~3× tempo real (somente CPU)',
          },
          {
            'Métrica': 'Velocidade — somente CPU (x86), base',
            'whisper.cpp (large-v3)': '~15× tempo real',
            'faster-whisper (large-v3)': '~20× tempo real ✓',
          },
          {
            'Métrica': 'VRAM — large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2,5 GB (int8) ✓',
          },
          {
            'Métrica': 'Integração Python',
            'whisper.cpp (large-v3)': 'Requer wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativo ✓',
          },
          {
            'Métrica': 'VAD (detecção de silêncio)',
            'whisper.cpp (large-v3)': 'Manual (ajuste de --step)',
            'faster-whisper (large-v3)': 'Integrado (Silero VAD) ✓',
          },
          {
            'Métrica': 'Streaming em tempo real',
            'whisper.cpp (large-v3)': 'Sim (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Sim (pipeline VAD)',
          },
          {
            'Métrica': 'Precisão WER (large-v3)',
            'whisper.cpp (large-v3)': '2,5% (idêntico)',
            'faster-whisper (large-v3)': '2,5% (idêntico)',
          },
          {
            'Métrica': 'Dependência Python',
            'whisper.cpp (large-v3)': 'Nenhuma ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'Métrica': 'Raspberry Pi / embarcado',
            'whisper.cpp (large-v3)': 'Sim — binário C ✓',
            'faster-whisper (large-v3)': 'Limitado — overhead de Python',
          },
          {
            'Métrica': 'Formatos de saída',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objetos Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp grava a saída diretamente em formatos padrão de legendas e transcrição (SRT, VTT, JSON, CSV, txt) — ideal para fluxos de trabalho de legendagem em que você precisa de um arquivo em disco sem código adicional. faster-whisper retorna um gerador Python de objetos de segmento com atributos `start`, `end` e `text` — ideal para encadeamento de pipelines LLM, em que você passa o texto do segmento diretamente para um modelo posterior sem gravar arquivos intermediários. Para geração de legendas, whisper.cpp é mais simples. Para pipelines que processam segmentos programaticamente, faster-whisper é mais simples.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuração de transcrição em tempo real',
        content:
          '**A transcrição em tempo real processa o áudio em chunks à medida que ele chega do microfone, produzindo texto com um pequeno atraso em relação à fala.** Ambas as ferramentas suportam isso, mas com diferentes compensações.',
        items: [
          '**Modo stream do whisper.cpp:** execute `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Processa chunks de 3 segundos; latência ~0,5–1,5 segundo com o modelo small. Sem Python necessário.',
          '**Pipeline VAD do faster-whisper:** use `vad_filter=True` em `model.transcribe()`. Silero VAD segmenta o áudio automaticamente nos limites de silêncio — chunks mais naturais do que janelas de comprimento fixo.',
          '**Latência prática:** 0,5–2 segundos atrás da fala ao vivo com modelos small ou medium. Use tiny para a menor latência (< 0,5 segundo, mas WER maior).',
          '**Seleção de modelo para tempo real:** small ou base é o ponto ideal prático — rápido o suficiente para acompanhar a fala, preciso o suficiente para áudio limpo. Evite large-v3 em tempo real a menos que você tenha uma GPU dedicada.',
          '**Entrada de microfone:** whisper.cpp lê áudio raw via SDL2 ou portaudio. faster-whisper lê arrays de áudio de qualquer biblioteca Python de áudio (sounddevice, pyaudio, soundfile).',
          '**Estabilidade:** o modo stream do whisper.cpp pode produzir tokens repetidos ("alucinações" de preenchimentos curtos) no silêncio. Suprima com `--suppress-blank` e `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp vence',
        content:
          '**Em Macs com M1, M2, M3, M4 e M5, whisper.cpp com aceleração Core ML / Metal é a ferramenta correta — sem dúvida.** faster-whisper não tem suporte Metal e roda somente em CPU no Mac, atingindo ~3× tempo real com large-v3. whisper.cpp com Metal atinge ~10× tempo real em M5 Pro — uma vantagem de velocidade de 3×.',
        items: [
          '**Exportação para Core ML:** execute `./models/generate-coreml-model.sh large-v3` para exportar o encoder para o formato Core ML. Isso descarrega a inferência do encoder no Apple Neural Engine.',
          '**Benchmark M5 Pro (large-v3, Metal):** ~10× tempo real. 60 minutos de áudio transcritos em ~6 minutos. Observação: o M5 Pro foi lançado em março de 2026 — estes são benchmarks iniciais da comunidade. O desempenho pode melhorar com atualizações do whisper.cpp otimizando o M5 Neural Engine.',
          '**Benchmark M3 MacBook Air (large-v3, Metal):** ~7× tempo real. 60 minutos em ~8,5 minutos.',
          '**Memória:** a memória unificada significa que não há VRAM separada — um M5 Pro de 16 GB pode rodar large-v3 (~3 GB) confortavelmente junto a outros processos.',
          '**faster-whisper no Mac:** somente CPU, int8. Large-v3 a ~3× tempo real. Utilizável para transcrição em lote noturna, mas não para tempo real ou fluxos de trabalho sensíveis ao tempo.',
          '**Recomendação:** use whisper.cpp para todo o trabalho de STT no Mac. Adicione pywhispercpp se você precisar de integração Python mantendo a aceleração Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA: faster-whisper vence',
        content:
          '**No Windows e no Linux com GPUs NVIDIA, faster-whisper é a opção superior.** Seu backend CUDA do CTranslate2 é mais otimizado que o caminho CUDA do whisper.cpp — ~12× vs. ~8× tempo real com large-v3 em RTX 4070, com menor uso de VRAM.',
        items: [
          '**Benchmark RTX 4070 (12 GB) (large-v3 int8):** ~12× tempo real, ~2,5 GB VRAM.',
          '**Benchmark RTX 3060 (12 GB) (large-v3 int8):** ~8× tempo real, ~2,5 GB VRAM.',
          '**Benchmark RTX 4060 (8 GB) (large-v3 int8):** ~7× tempo real, ~2,5 GB VRAM — cabe com folga.',
          '**int8 vs float16:** int8 é ~2× mais rápido e usa ~40% menos VRAM com perda de precisão negligível. Use sempre `compute_type="int8"` em NVIDIA.',
          '**Processamento em lote:** o parâmetro `batched=True` do faster-whisper permite o processamento paralelo de múltiplos arquivos de áudio, maximizando a utilização da GPU em grandes trabalhos de transcrição.',
          '**Integração em pipeline Python:** faster-whisper se integra diretamente ao LangChain, Haystack e pipelines Python personalizados. Sem overhead de subprocesso em comparação com envolver o whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'Quando usar cada um',
        content: 'Mapeamento direto do seu cenário para a ferramenta adequada:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Use whisper.cpp em Apple Silicon e alvos embarcados/multiplataforma; use faster-whisper em GPUs NVIDIA e pipelines Python.',
          },
          {
            type: 'plain-terms',
            text: 'Se você tem um Mac, escolha whisper.cpp — é 3× mais rápido que faster-whisper em hardware Apple. Se você tem GPU NVIDIA e escreve Python, escolha faster-whisper — é mais rápido e precisa de 40% menos memória de GPU.',
          },
        ],
        columns: ['Cenário', 'Melhor escolha', 'Por quê'],
        rows: [
          {
            'Cenário': 'Mac com Apple Silicon (qualquer modelo)',
            'Melhor escolha': 'whisper.cpp',
            'Por quê': 'Aceleração Metal / Core ML — 3× mais rápido que faster-whisper (somente CPU no Mac)',
          },
          {
            'Cenário': 'Servidor com GPU NVIDIA (Linux/Windows)',
            'Melhor escolha': 'faster-whisper',
            'Por quê': 'CTranslate2 int8 — mais rápido e menor VRAM que o caminho CUDA do whisper.cpp',
          },
          {
            'Cenário': 'Pipeline de dados Python',
            'Melhor escolha': 'faster-whisper',
            'Por quê': 'API Python nativa; sem wrapper de subprocesso; VAD integrado',
          },
          {
            'Cenário': 'Raspberry Pi / Linux embarcado',
            'Melhor escolha': 'whisper.cpp',
            'Por quê': 'Binário C puro; sem overhead do runtime Python; otimizado com ARM NEON',
          },
          {
            'Cenário': 'Assistente de voz em tempo real',
            'Melhor escolha': 'whisper.cpp',
            'Por quê': 'Modo stream com baixo overhead; funciona sem Python no Pi / embarcado',
          },
          {
            'Cenário': 'Transcrição em lote (grande arquivo de áudio)',
            'Melhor escolha': 'faster-whisper',
            'Por quê': 'Inferência em lote, utilização da GPU, integração Python assíncrona',
          },
          {
            'Cenário': 'GPU AMD (Vulkan)',
            'Melhor escolha': 'whisper.cpp',
            'Por quê': 'Suporte de backend Vulkan; faster-whisper é apenas CUDA',
          },
          {
            'Cenário': 'Servidor Linux somente CPU',
            'Melhor escolha': 'faster-whisper',
            'Por quê': 'A quantização int8 dá ~30% de vantagem de velocidade em CPU x86',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'Além do whisper.cpp e do faster-whisper',
        content:
          'Duas ferramentas adicionais estendem o Whisper com capacidades que nenhuma das duas oferece de fábrica: diarização de falantes e inferência em lote ultrarrápida em GPU.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** construído sobre o faster-whisper, o WhisperX adiciona marcas de tempo em nível de palavra e diarização de falantes — identificando qual falante disse quais palavras. Melhor para: transcrição de reuniões com rótulos de falante, edição de podcasts e transcrição de entrevistas. Instale com `pip install whisperx` e forneça um token do Hugging Face para o modelo de diarização.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** um wrapper de pipeline Hugging Face Transformers que adiciona suporte a Flash Attention 2 para inferência em GPU significativamente mais rápida que o faster-whisper padrão em hardware NVIDIA. Melhor para: processamento em lote de grandes arquivos de áudio em GPUs NVIDIA. Requer uma GPU compatível com Flash Attention 2 (Ampere ou mais recente: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problemas comuns e soluções',
        content: 'Os problemas de configuração e runtime mais frequentes, com soluções diretas:',
        items: [
          '**Incompatibilidade de versão do CUDA:** faster-whisper requer CUDA 11.8 ou posterior. Verifique com `nvcc --version`. Se o seu CUDA for mais antigo, atualize o driver ou instale faster-whisper em um ambiente conda com `cudatoolkit=11.8`.',
          '**Falha na exportação do modelo Metal:** garanta que as Xcode Command Line Tools estejam instaladas — execute `xcode-select --install`. O script de exportação Core ML requer o pacote Python `coremltools`: `pip install coremltools`.',
          '**Alucinações no silêncio:** ambas as ferramentas podem produzir tokens de preenchimento repetidos em segmentos de áudio silencioso. Use `--no-speech-threshold 0.6` no modo stream do whisper.cpp, ou `vad_filter=True` em `model.transcribe()` do faster-whisper para pular automaticamente os segmentos silenciosos.',
          '**Sem memória com large-v3:** mude para quantização int8 no faster-whisper (`compute_type="int8"`) — reduz a VRAM de ~5 GB (float16) para ~2,5 GB. No whisper.cpp, use a variante GGML quantizada (p. ex., `ggml-large-v3-q5_0.bin`) que reduz a memória para ~3–4 GB.',
          '**Saída ilegível em áudio não inglês:** não use variantes `.en` do modelo (tiny.en, base.en) para fala não inglesa — são somente inglês. Use os modelos multilíngues (base, small, medium, large-v3) e especifique o idioma explicitamente: `-l pt` no whisper.cpp ou `language="pt"` no faster-whisper.',
          '**Inferência lenta em CPU:** verifique se a sua CPU suporta instruções AVX2 (necessárias para inferência otimizada em CPU). Confira com `grep avx2 /proc/cpuinfo` no Linux ou `sysctl machdep.cpu.features` no Mac. CPUs sem AVX2 recorrem a SIMD genérico e serão 2–3× mais lentas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A precisão de transcrição é a mesma entre whisper.cpp e faster-whisper?',
            a: 'Sim. Ambas as ferramentas usam os mesmos pesos do modelo OpenAI Whisper — o modelo em si é idêntico. A diferença está unicamente no runtime de inferência (C/C++ vs CTranslate2 Python). O WER no mesmo arquivo de áudio ficará dentro de 0,1% absoluto um do outro, o que está dentro da variação normal causada pela aleatoriedade do beam search.',
          },
          {
            q: 'Posso usar faster-whisper em um Mac com Apple Silicon?',
            a: 'Sim, mas ele roda somente em CPU — faster-whisper não tem suporte Metal. Em um M5 Pro, faster-whisper large-v3 roda a ~3× tempo real (CPU int8), comparado a ~10× do whisper.cpp com Metal. Para a maioria dos usuários de Mac, whisper.cpp é 3× mais rápido com o mesmo modelo. A única razão para usar faster-whisper no Mac é se o seu pipeline Python já depende dele e a velocidade não é crítica.',
          },
          {
            q: 'Que tamanho de modelo Whisper devo usar para um assistente de voz?',
            a: 'Para interfaces de voz em tempo real, Whisper small é a recomendação padrão — 3,4% WER em inglês limpo, ~200 ms de latência de STT em uma CPU ou GPU moderna, e cabe em 2 GB de RAM. Use tiny se você estiver em hardware muito restrito (Raspberry Pi Zero 2W, telefones antigos) e puder tolerar ~7,6% WER. Use medium ou large-v3 apenas para transcrição em lote em que a latência não é uma restrição.',
          },
          {
            q: 'whisper.cpp suporta idiomas além do inglês?',
            a: 'Sim. Todos os modelos multilíngues do Whisper (base, small, medium, large-v3) suportam 99 idiomas. Adicione `-l [código do idioma]` ao CLI: `-l pt` para português, `-l de` para alemão, `-l ja` para japonês, etc. Os modelos tiny.en e base.en são somente inglês e ligeiramente mais precisos para inglês que seus equivalentes multilíngues.',
          },
          {
            q: 'Como instalo faster-whisper com suporte CUDA?',
            a: 'Instale com `pip install faster-whisper`. O suporte CUDA requer CUDA 11.8 ou posterior e cuDNN 8.x instalados no seu sistema. Verifique sua versão do CUDA com `nvcc --version`. Em seguida, especifique `device="cuda"` ao carregar o modelo: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Se o CUDA não for detectado, faster-whisper recorre automaticamente à CPU.',
          },
          {
            q: 'Qual é mais preciso — whisper.cpp ou faster-whisper?',
            a: 'Idêntico. Ambas as ferramentas usam os mesmos pesos do modelo OpenAI Whisper e produzem o mesmo WER em qualquer arquivo de áudio. A diferença entre whisper.cpp e faster-whisper é a velocidade e o suporte de plataforma, não a precisão de transcrição. Qualquer diferença de WER que você medir entre execuções está dentro da variação normal do beam search, não vem do runtime em si.',
          },
          {
            q: 'Posso rodar o Whisper large-v3 com 8 GB de RAM?',
            a: 'Sim em GPU — large-v3 int8 no faster-whisper usa ~2,5 GB de VRAM e roda em qualquer GPU de 8 GB. Em hardware somente CPU, 8 GB de RAM é apertado para large-v3 (float32 usa ~10 GB). Use medium (5 GB RAM) ou small (2 GB RAM) em sistemas somente CPU. whisper.cpp é mais eficiente em memória na CPU que faster-whisper devido ao menor overhead do runtime.',
          },
          {
            q: 'Quanto custa o Whisper local vs STT na nuvem?',
            a: 'Custo contínuo zero. Os serviços de STT na nuvem cobram US$ 0,006–0,024 por minuto de áudio — para um desenvolvedor que transcreve 8 horas de reuniões por semana, isso dá US$ 120–480/mês. O Whisper local roda em hardware que você já possui, sem tarifas por minuto, sem gerenciamento de chaves de API e sem que os dados de áudio saiam da sua máquina.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[whisper.cpp no GitHub](https://github.com/ggerganov/whisper.cpp) — Código-fonte, instruções de compilação, scripts de download de modelos e guia de configuração Metal/Core ML.',
          '[faster-whisper no GitHub](https://github.com/SYSTRAN/faster-whisper) — Código-fonte, documentação da API Python e resultados de benchmarks.',
          '[distil-whisper/distil-large-v3 no Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — Ficha do modelo, resultados de benchmarks e instruções de uso da variante destilada do Whisper.',
          '[WhisperX no GitHub](https://github.com/m-bain/whisperX) — Marcas de tempo em nível de palavra e diarização de falantes construídas sobre o faster-whisper.',
          '[insanely-fast-whisper no GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 para máximo throughput em GPU NVIDIA.',
          '[OpenAI Whisper no GitHub](https://github.com/openai/whisper) — Modelo Whisper original, paper e fichas de modelo para todos os tamanhos.',
          '[Paper do OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". Fonte dos valores de WER.',
          '[Documentação do CTranslate2](https://github.com/OpenNMT/CTranslate2) — Detalhes de quantização, suporte de hardware e fundamentos da otimização int8.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[TTS local e clonagem de voz 2026: Piper vs Coqui vs XTTS v2](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — O complemento de TTS: converta o texto transcrito de volta em voz, offline.',
          '[Construa um assistente de voz totalmente offline em 2026](/pt/power-local-llm/build-local-voice-assistant-2026) — Conecte Whisper STT a um LLM local e Piper TTS em um pipeline de voz completo.',
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Adicione modelos de visão junto a STT e TTS para um stack local multimodal completo.',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — Requisitos de GPU e RAM para o pipeline completo de voz + LLM.',
          '[Construa um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline) — Versão móvel: WhisperKit no iPhone, Layla no Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Whisper.cpp vs faster-whisper 2026: Benchmarks de STT local, configuração e aceleração de GPU',
       description: 'Compare whisper.cpp e faster-whisper para reconhecimento de voz local em 2026. Benchmarks de WER, velocidade GPU vs CPU, Apple Silicon Metal, transcrição em tempo real e guias de instalação. Tudo offline.',
       url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-whisper-stt-comparison-2026',
       inLanguage: 'pt-BR',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp مقابل faster-whisper 2026: معايير STT المحلية والإعداد وتسريع GPU',
    seoTitle: 'Whisper.cpp مقابل faster-whisper 2026: معايير STT',
    intro:
      'يُعدّ كلٌّ من whisper.cpp وfaster-whisper التطبيقَين المهيمنَين لنموذج Whisper من OpenAI لتحويل الكلام إلى نص محليًا وبدون اتصال في عام 2026. فـwhisper.cpp هو منفذ نقي بلغة C/C++ يعمل على Apple Metal وCUDA وVulkan والمعالج — مما يجعله مثاليًا لأجهزة Apple Silicon والأنظمة المدمجة وتطبيقات الصوت في الوقت الفعلي. أما faster-whisper فهو مكتبة Python تستخدم CTranslate2 وتحقق إنتاجية تبلغ ~4 أضعاف نموذج Whisper الأصلي على بطاقات NVIDIA عبر التكميم int8. يتناول هذا الدليل التثبيت ومعايير الأداء وإعداد النسخ في الوقت الفعلي والمقارنة المباشرة بين المنصات لمساعدتك في اختيار الأداة المناسبة لخط أنابيبك.',
    metaDescription:
      'Whisper.cpp يعمل على CPU وApple Metal؛ faster-whisper أسرع 4× على GPU بـint8. مقارنة معايير WER وسرعة النسخ الفوري وخطوات الإعداد 2026.',
    twitterDescription:
      'whisper.cpp مقابل faster-whisper: معايير التعرف على الكلام المحلي 2026. سرعة CPU مقابل GPU، Apple Metal، دقة WER، النسخ في الوقت الفعلي. بدون سحابة، بدون تكلفة.',
    audience:
      'المطورون والباحثون ومنشئو الأنظمة الذين يحتاجون إلى نسخ الكلام إلى نص بشكل محلي وخاص — لتدوين ملاحظات الاجتماعات أو واجهات الصوت أو أدوات إمكانية الوصول أو البيئات الآمنة.',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'تحويل الكلام إلى نص محليًا',
    targetKeywords: [
      'whisper.cpp مقابل faster-whisper',
      'تحويل الكلام إلى نص محليًا 2026',
      'التعرف على الكلام بدون اتصال',
      'نسخ whisper المحلي',
      'معايير faster-whisper',
      'whisper cpp apple silicon',
      'STT محلي GPU',
      'إعداد whisper cpp',
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
      '**whisper.cpp مقابل faster-whisper — وهما أبرز وقتَي تشغيل Whisper المحليَّين — يتفوق كلٌّ منهما بشكل حاسم على منصته المستهدفة.** **بالنسبة لأجهزة Apple Silicon (أجهزة Mac بشريحة M)، يُعدّ whisper.cpp مع تسريع Metal الخيارَ الأسرع لتحويل الكلام إلى نص محليًا في 2026 — إذ يعمل large-v3 بسرعة ~10 أضعاف الزمن الفعلي على M5 Pro.** أما لخوادم NVIDIA GPU وخطوط أنابيب Python، فإن faster-whisper مع تكميم int8 من CTranslate2 هو الخيار الأفضل؛ إذ يصل إلى ~12 ضعف الزمن الفعلي على RTX 4070 مع استخدام 2.5 جيجابايت فقط من VRAM لنموذج large-v3. تستخدم كلتا الأداتين أوزان نموذج Whisper ذاتها من OpenAI (من tiny إلى large-v3)؛ والفرق يكمن في تحسين وقت التشغيل ومسار التكامل. على الأجهزة المعتمدة على المعالج فقط، كلتاهما قابلة للاستخدام مع نموذجَي tiny وbase — أما faster-whisper فله ميزة طفيفة (~20 ضعفًا مقابل ~15 ضعفًا) عبر int8.',
    quickAnswerTop: {
      ar: {
        question: 'هل أستخدم whisper.cpp أم faster-whisper لتحويل الكلام إلى نص محليًا في 2026؟',
        answer:
          'يعتمد الاختيار على جهازك واحتياجات التكامل. على أجهزة Apple Silicon (M1–M5)، يُعدّ whisper.cpp مع تسريع Metal الأسرع والخيار الطبيعي — إذ يصل إلى ~10 أضعاف الزمن الفعلي مع large-v3 دون أي اعتماد على Python. على بطاقات NVIDIA GPU، يكون faster-whisper أسرع وأسهل تكاملًا في خطوط أنابيب Python، إذ يشغّل large-v3 بسرعة ~12 ضعف الزمن الفعلي مع 40% أقل من VRAM عبر تكميم int8. على الأجهزة المعتمدة على المعالج فقط، تعمل كلتاهما مع النماذج الصغيرة؛ وlater-whisper لديه ميزة سرعة طفيفة.',
        bullets: [
          'Apple Silicon ← whisper.cpp مع Core ML / Metal. ~10 أضعاف الزمن الفعلي على M5 Pro مع large-v3.',
          'NVIDIA GPU ← faster-whisper. ~12 ضعف الزمن الفعلي على RTX 4070 مع large-v3 int8، ~2.5 جيجابايت VRAM.',
          'خط أنابيب Python ← faster-whisper. Python أصيل، إعداد بـ5 أسطر، VAD مدمج.',
          'مدمج / Raspberry Pi ← whisper.cpp. ثنائي C نقي، لا يتطلب وقت تشغيل Python.',
          'صوت الوقت الفعلي ← وضع stream في whisper.cpp أو خط أنابيب VAD في faster-whisper.',
          'نسخ دفعي ← faster-whisper. أفضل إنتاجية على GPU؛ معالجة دفعية غير متزامنة سهلة.',
          'دقة WER: متطابقة في كليهما — يستخدمان أوزان نموذج Whisper ذاتها.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'لماذا تحويل الكلام إلى نص محليًا؟', anchor: '#why-local-stt' },
      { label: 'أحجام نموذج Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: البديل الأسرع', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — منفذ C/C++', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — منفذ CTranslate2', anchor: '#faster-whisper' },
      { label: 'مقارنة مباشرة: جدول معايير الأداء', anchor: '#benchmarks' },
      { label: 'إعداد النسخ في الوقت الفعلي', anchor: '#real-time' },
      { label: 'Apple Silicon: يفوز whisper.cpp', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: يفوز faster-whisper', anchor: '#nvidia-gpu' },
      { label: 'متى تستخدم أيًّا منهما', anchor: '#when-to-use' },
      { label: 'ما وراء whisper.cpp وfaster-whisper', anchor: '#beyond-tools' },
      { label: 'المشكلات الشائعة والحلول', anchor: '#troubleshooting' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp هو أفضل خيار لتحويل الكلام إلى نص محليًا على Apple Silicon.** يستغل منفذ C/C++ إمكانات Core ML وApple Metal للتسريع عبر الأجهزة — large-v3 بسرعة ~10 أضعاف الزمن الفعلي على M5 Pro، دون أي اعتماد على Python.',
          '**faster-whisper هو أفضل خيار لتحويل الكلام إلى نص محليًا لبطاقات NVIDIA GPU وخطوط أنابيب Python.** يقلل تكميم int8 من CTranslate2 من VRAM بنسبة ~40% ويزيد الإنتاجية بنسبة ~4 أضعاف مقارنةً بالتطبيق الأصلي لـOpenAI — large-v3 بسرعة ~12 ضعف الزمن الفعلي على RTX 4070 باستخدام ~2.5 جيجابايت فقط من VRAM.',
          '**تستخدم كلتا الأداتين أوزان نموذج Whisper ذاتها من OpenAI.** معدل خطأ الكلمات (WER) متطابق — الفرق يكمن كليًا في أداء وقت التشغيل ومسار التكامل، لا في دقة النسخ.',
          '**يوفر Whisper large-v3 أفضل دقة بمعدل 2.5% WER بالإنجليزية.** بالنسبة لمعظم حالات الاستخدام الإنتاجية، يوفر Whisper small (3.4% WER، 2 جيجابايت RAM) أو medium (2.9% WER، 5 جيجابايت RAM) توازنًا أفضل بين السرعة والدقة.',
          '**النسخ في الوقت الفعلي ممكن مع كلتا الأداتين** — whisper.cpp عبر علامة `--stream`، وfaster-whisper عبر خط أنابيب VAD (الكشف عن نشاط الصوت) المدمج. التأخير العملي 0.5–2 ثانية خلف الكلام الحي حسب حجم النموذج.',
          '**يعمل whisper.cpp على CPU وMetal وCUDA وVulkan** — مما يجعله الخيار الوحيد للاستخدام المدمج متعدد المنصات (Raspberry Pi، إعدادات GPU على Windows، خوادم ARM). يدعم faster-whisper CPU وCUDA فقط (بدون Metal على Mac).',
          '**لـRaspberry Pi وLinux المدمج، whisper.cpp tiny/base على CPU** هو السقف العملي — tiny بسرعة ~15 ضعف الزمن الفعلي على Pi 5، وbase بسرعة ~6 أضعاف. كلاهما يتناسب مع 1 جيجابايت RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**كلتا الأداتين:** تستندان إلى نموذج Whisper مفتوح المصدر من OpenAI (رخصة MIT). دقة متطابقة — أوقات تشغيل مختلفة.',
          '**whisper.cpp:** مكتوب بلغة C/C++ من قِبَل Georgi Gerganov. يدعم CPU (AVX2/NEON) وCUDA وMetal (Apple) وVulkan. لا يتطلب Python.',
          '**faster-whisper:** مكتبة Python تستخدم CTranslate2. تدعم CPU (int8) وCUDA. لا دعم لـApple Metal.',
          '**أحجام نموذج Whisper:** tiny (39M)، وbase (74M)، وsmall (244M)، وmedium (769M)، وlarge-v3 (1.55B). جميعها بتنسيق ggml / CTranslate2.',
          '**أفضل نموذج لمعظم حالات الاستخدام:** Whisper small — 3.4% WER، يعمل في 2 جيجابايت RAM، 6 أضعاف الزمن الفعلي على معالج حديث.',
          '**معيار RTX 4070 (large-v3):** faster-whisper ~12 ضعف الزمن الفعلي؛ whisper.cpp CUDA ~8 أضعاف. يفوز faster-whisper على NVIDIA.',
          '**معيار M5 Pro (large-v3):** whisper.cpp Metal ~10 أضعاف الزمن الفعلي؛ faster-whisper CPU فقط ~3 أضعاف. يفوز whisper.cpp على Apple.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'لماذا تحويل الكلام إلى نص محليًا؟',
        content:
          'تُحصّل خدمات STT السحابية (Google Speech-to-Text وAWS Transcribe وAzure Speech) رسومًا مقابل كل دقيقة صوتية — عادةً 0.006–0.024 دولار/دقيقة — وترسل الصوت إلى خوادم بعيدة. بالنسبة للتطبيقات الحساسة للخصوصية (الإملاء الطبي والتسجيلات القانونية ومقابلات الصحفيين والاجتماعات المؤسسية)، يُزيل النسخ المحلي التعرض للبيانات كليًا.',
        items: [
          '**الخصوصية:** لا يغادر الصوت جهازك قط. لا حاجة لاتفاقية معالجة بيانات للامتثال لـGDPR — المعالجة تتم محليًا.',
          '**التكلفة:** صفر رسوم لكل دقيقة. مطوّر ينسخ 8 ساعات اجتماعات أسبوعيًا يوفر 120–480 دولارًا شهريًا مقارنةً بأسعار STT السحابية.',
          '**بدون اتصال:** يعمل على الطائرات وفي المنشآت الآمنة والمناطق دون إنترنت موثوق. لا إدارة لمفاتيح API.',
          '**زمن الاستجابة:** لا ذهاب وإياب لرفع/تنزيل البيانات. لواجهات الصوت في الوقت الفعلي، يقلل المعالجة المحلية زمن استجابة STT من 300–800 مللي ثانية (سحابة) إلى 50–300 مللي ثانية.',
          '**التخصيص:** ضبط دقيق على المفردات الخاصة بالمجال. شغّل أي حجم نموذج يناسب جهازك.',
          '**التكامل مع Home Assistant:** تشغيل Whisper محليًا يعني أن كلمات التنبيه والأوامر الصوتية لا تغادر شبكتك المنزلية قط. راجع [Whisper المحلي في Home Assistant ←](/ar/smart-home/local-whisper-home-assistant) لإعداد الإضافة التي تحل محل STT السحابية كليًا.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'أحجام نموذج Whisper — الأساس لكلتا الأداتين',
        content:
          'تستخدم كلٌّ من whisper.cpp وfaster-whisper أوزان نموذج Whisper ذاتها، المحوَّلة إلى تنسيقاتها المعنية (GGML لـwhisper.cpp، وCTranslate2 لـfaster-whisper). اختر حجم النموذج بناءً على ميزانية VRAM/RAM ومتطلبات الدقة لديك.',
        columns: ['النموذج', 'المعاملات', 'VRAM / RAM', 'WER إنجليزي', 'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)'],
        rows: [
          {
            'النموذج': 'tiny',
            'المعاملات': '39M',
            'VRAM / RAM': '~1 GB',
            'WER إنجليزي': '7.6%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '~32×',
          },
          {
            'النموذج': 'base',
            'المعاملات': '74M',
            'VRAM / RAM': '~1 GB',
            'WER إنجليزي': '5.0%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '~16×',
          },
          {
            'النموذج': 'small',
            'المعاملات': '244M',
            'VRAM / RAM': '~2 GB',
            'WER إنجليزي': '3.4%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '~6×',
          },
          {
            'النموذج': 'medium',
            'المعاملات': '769M',
            'VRAM / RAM': '~5 GB',
            'WER إنجليزي': '2.9%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '~2×',
          },
          {
            'النموذج': 'large-v3',
            'المعاملات': '1.55B',
            'VRAM / RAM': '~10 GB',
            'WER إنجليزي': '2.5%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '1× (مرجع)',
          },
          {
            'النموذج': 'distil-large-v3',
            'المعاملات': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER إنجليزي': '~2.6%',
            'معامل السرعة (مقابل الزمن الفعلي على RTX 4070)': '~6×',
          },
        ],
        note: 'قيم WER (معدل خطأ الكلمات) من ورقة Whisper البحثية على مجموعة اختبار LibriSpeech النظيفة. أقل أفضل. معاملات السرعة لـfaster-whisper int8 على RTX 4070. قيم distil-large-v3 من ورقة Distil-Whisper البحثية.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: البديل الأسرع',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) هو نسخة مُقطَّرة من large-v3 بمعاملات أقل بنسبة ~50%، تعمل بسرعة أعلى ~6 أضعاف مع الحفاظ على WER ضمن ~1% من الأصل.** إنه الخيار الصحيح حين تكون سرعة النسخ أهم من استخلاص آخر جزء من الدقة. يعمل distil-large-v3 مع faster-whisper (دعم أصيل لـCTranslate2) وwhisper.cpp (عبر تحويل تنسيق GGML)، مما يجعله متكاملًا مع أي وقت تشغيل تستخدمه بالفعل.',
        items: [
          '**المعاملات:** ~756M — تقريبًا نصف 1.55B لـlarge-v3، يتناسب مع ~4 جيجابايت VRAM بدلًا من ~10 جيجابايت.',
          '**السرعة:** ~6 أضعاف الزمن الفعلي على RTX 4070 (مقابل 1× مرجعي لـlarge-v3) — مقارب لنموذج medium في السرعة مع دقة قريبة من large-v3.',
          '**WER:** ~2.6% بالإنجليزية — أعلى بـ~0.1% فقط من 2.5% لـlarge-v3. في الممارسة العملية الفرق غير محسوس في الكلام الطبيعي.',
          '**التوافق:** يعمل مع faster-whisper بشكل أصيل (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). لـwhisper.cpp، حوّل إلى تنسيق GGML باستخدام سكريبت تحويل GGML لـdistil-whisper.',
          '**الأفضل لـ:** مهام النسخ الدفعي، ونشر الخوادم ذات VRAM المحدودة، وأي حالة استخدام تريد فيها جودة large-v3 بسرعة نموذج medium.',
          '**غير موصى به لـ:** النسخ متعدد اللغات — distil-large-v3 للإنجليزية فقط. للغات أخرى، استخدم large-v3 أو medium.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — منفذ C/C++',
        content:
          '**whisper.cpp (من Georgi Gerganov) هو إعادة تنفيذ نقية بلغة C/C++ لنموذج Whisper من OpenAI، مُحسَّنة للاستدلال منخفض الموارد ومتعدد المنصات.** لا يتطلب Python ولا مجموعة أدوات CUDA، ويعمل على أي جهاز تقريبًا — من Raspberry Pi إلى Apple M5 Pro وإعدادات Windows CUDA.',
        items: [
          '**دعم المنصات:** CPU (AVX2، AVX512، ARM NEON)، Apple Metal (Core ML)، CUDA (NVIDIA)، Vulkan (GPU AMD/Intel)، OpenCL.',
          '**ميزة Apple Silicon:** يُصدّر whisper.cpp النماذج بتنسيق Core ML، مما يتيح الاستدلال على Apple Neural Engine. يعمل Large-v3 بسرعة ~10 أضعاف الزمن الفعلي على M5 Pro عبر Metal — أسرع من أي ذهاب وإياب سحابي.',
          '**التثبيت:** استنسخ المستودع، شغّل `make` (أو `cmake`). تتوفر ثنائيات مُجمَّعة مسبقًا للمنصات الشائعة. لا اعتماد على Python.',
          '**تنزيل النموذج:** `bash ./models/download-ggml-model.sh base.en` — ينزّل ملف النموذج بتنسيق GGML (~142 ميغابايت لـbase).',
          '**مثال CLI:** `./main -m models/ggml-base.bin -f audio.wav` — ينسخ ملف WAV إلى الإخراج القياسي. أضف `-l ar` للعربية.',
          '**وضع stream في الوقت الفعلي:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — ينسخ من الميكروفون بأجزاء من 3 ثوانٍ.',
          '**غلاف Python:** يوفر pywhispercpp ارتباط Python لـwhisper.cpp، مما يتيح الاستخدام في خطوط أنابيب Python دون التضحية بتسريع Metal.',
          '**القيد:** لا VAD (الكشف عن نشاط الصوت) أصيل. يتطلب وضع stream ضبط معاملات `--step` و`--length` لحالة الاستخدام.',
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
        title: 'faster-whisper — منفذ CTranslate2',
        content:
          '**faster-whisper (من SYSTRAN) هي مكتبة Python تُعيد تنفيذ استدلال Whisper باستخدام CTranslate2 — محرك استدلال C++ عالي الكفاءة يدعم تكميم int8، مما يقلل استخدام VRAM ويزيد الإنتاجية.** على بطاقات NVIDIA GPU، يُعدّ faster-whisper أسرع تطبيق محلي لـWhisper متاح.',
        items: [
          '**دعم المنصات:** CPU (تكميم int8) وNVIDIA CUDA GPU. لا دعم لـApple Metal — يعمل على CPU فقط على Mac.',
          '**ميزة int8:** يقلل تكميم int8 من CTranslate2 من VRAM بنسبة ~40% ويزيد سرعة الاستدلال بنسبة ~2 ضعف مقارنةً بـfloat16، مع تأثير WER ضئيل (< 0.1% مطلق).',
          '**التثبيت:** `pip install faster-whisper` — لا تجميع مطلوب. يتطلب دعم CUDA نسخة CUDA 11.8+ وcuDNN 8.x.',
          '**VAD مدمج:** يتضمن faster-whisper تكاملًا مع Silero VAD، الذي يتخطى تلقائيًا أجزاء الصوت الصامتة — أمر بالغ الأهمية لخطوط أنابيب النسخ في الوقت الفعلي.',
          '**Python أصيل:** تجعل واجهة برمجة Python المباشرة من السهل التكامل مع النماذج اللغوية الكبيرة ومكتبات معالجة الصوت وأطر الويب.',
          '**السرعة:** large-v3 int8 على RTX 4070 يعمل بسرعة ~12 ضعف الزمن الفعلي ويستخدم ~2.5 جيجابايت VRAM. CPU int8 يصل إلى ~20 ضعف الزمن الفعلي للنموذج tiny.',
          '**المعالجة الدفعية:** يدعم faster-whisper الاستدلال الدفعي لمعالجة أرشيفات صوتية كبيرة بكفاءة.',
          '**القيد:** لا دعم Metal على Mac — يعمل على CPU فقط على Apple Silicon، محققًا ~3 أضعاف الزمن الفعلي مع large-v3 مقابل ~10 أضعاف لـwhisper.cpp مع Metal.',
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
        title: 'مقارنة مباشرة: جدول معايير الأداء',
        content:
          'جميع المعايير تستخدم نموذج large-v3 ما لم يُذكر خلاف ذلك. السرعة تُقاس بمضاعفات الزمن الفعلي (مثلًا، 10× تعني نسخ 60 دقيقة صوت في 6 دقائق). أرقام VRAM لتشغيل GPU؛ أرقام RAM لتشغيل CPU.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'على Apple Silicon، يشغّل whisper.cpp مع Metal نموذج large-v3 بسرعة ~10 أضعاف الزمن الفعلي؛ وعلى بطاقات NVIDIA GPU، يصل faster-whisper مع int8 إلى ~12 ضعف الزمن الفعلي — كل أداة تفوز بشكل حاسم على منصتها المستهدفة.',
          },
          {
            type: 'plain-terms',
            text: 'على Mac اختر whisper.cpp (يستخدم Apple Neural Engine)، وعلى Windows/Linux مع NVIDIA GPU اختر faster-whisper (يعالج الصوت بسرعة 12 ضعف الزمن الفعلي مع 40% أقل من ذاكرة GPU).',
          },
        ],
        columns: ['المقياس', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            'المقياس': 'المنصة / اللغة',
            'whisper.cpp (large-v3)': 'C/C++ (متعدد المنصات)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            'المقياس': 'دعم GPU',
            'whisper.cpp (large-v3)': 'CUDA، Metal، Vulkan',
            'faster-whisper (large-v3)': 'CUDA فقط',
          },
          {
            'المقياس': 'تحسين CPU',
            'whisper.cpp (large-v3)': 'AVX2، ARM NEON',
            'faster-whisper (large-v3)': 'تكميم int8',
          },
          {
            'المقياس': 'السرعة — RTX 4070، large-v3',
            'whisper.cpp (large-v3)': '~8 أضعاف الزمن الفعلي',
            'faster-whisper (large-v3)': '~12 ضعف الزمن الفعلي ✓',
          },
          {
            'المقياس': 'السرعة — M5 Pro، large-v3',
            'whisper.cpp (large-v3)': '~10 أضعاف الزمن الفعلي (Metal) ✓',
            'faster-whisper (large-v3)': '~3 أضعاف الزمن الفعلي (CPU فقط)',
          },
          {
            'المقياس': 'السرعة — CPU فقط (x86)، base',
            'whisper.cpp (large-v3)': '~15 ضعف الزمن الفعلي',
            'faster-whisper (large-v3)': '~20 ضعف الزمن الفعلي ✓',
          },
          {
            'المقياس': 'VRAM — large-v3، GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB (int8) ✓',
          },
          {
            'المقياس': 'تكامل Python',
            'whisper.cpp (large-v3)': 'يتطلب غلافًا (pywhispercpp)',
            'faster-whisper (large-v3)': 'أصيل ✓',
          },
          {
            'المقياس': 'VAD (الكشف عن الصمت)',
            'whisper.cpp (large-v3)': 'يدوي (ضبط --step)',
            'faster-whisper (large-v3)': 'مدمج (Silero VAD) ✓',
          },
          {
            'المقياس': 'بث في الوقت الفعلي',
            'whisper.cpp (large-v3)': 'نعم (علامة --stream) ✓',
            'faster-whisper (large-v3)': 'نعم (خط أنابيب VAD)',
          },
          {
            'المقياس': 'دقة WER (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (متطابق)',
            'faster-whisper (large-v3)': '2.5% (متطابق)',
          },
          {
            'المقياس': 'الاعتماد على Python',
            'whisper.cpp (large-v3)': 'لا شيء ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            'المقياس': 'Raspberry Pi / مدمج',
            'whisper.cpp (large-v3)': 'نعم — ثنائي C ✓',
            'faster-whisper (large-v3)': 'محدود — حمل زائد Python',
          },
          {
            'المقياس': 'تنسيقات الإخراج',
            'whisper.cpp (large-v3)': 'SRT، VTT، JSON، CSV، txt',
            'faster-whisper (large-v3)': 'كائنات Python (start، end، text)',
          },
        ],
        note: 'يكتب whisper.cpp الإخراج مباشرةً بتنسيقات الترجمة والنسخ القياسية (SRT، VTT، JSON، CSV، txt) — مثالي لسير عمل الترجمات حيث تحتاج إلى ملف على القرص دون كود إضافي. يُعيد faster-whisper مولّد Python من كائنات الأجزاء بسمات `start` و`end` و`text` — مثالي لسلسلة خطوط أنابيب النماذج اللغوية الكبيرة، حيث تمرر نص الجزء مباشرةً إلى نموذج لاحق دون كتابة ملفات وسيطة. لتوليد الترجمات، whisper.cpp أبسط. لخطوط الأنابيب التي تعالج الأجزاء برمجيًا، faster-whisper أبسط.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'إعداد النسخ في الوقت الفعلي',
        content:
          '**ينسخ النسخ في الوقت الفعلي الصوتَ بأجزاء فور وصوله من الميكروفون، منتجًا نصًا مع تأخير قصير خلف الكلام.** كلتا الأداتين تدعم هذا، لكن مع موازنات مختلفة.',
        items: [
          '**وضع stream في whisper.cpp:** شغّل `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. يعالج أجزاء من 3 ثوانٍ؛ تأخير ~0.5–1.5 ثانية مع النموذج small. لا Python مطلوب.',
          '**خط أنابيب VAD في faster-whisper:** استخدم `vad_filter=True` في `model.transcribe()`. يقسّم Silero VAD الصوت تلقائيًا عند حدود الصمت — أجزاء أكثر طبيعية من النوافذ ذات الطول الثابت.',
          '**التأخير العملي:** 0.5–2 ثانية خلف الكلام الحي مع النماذج small أو medium. استخدم tiny لأقل تأخير (< 0.5 ثانية، لكن WER أعلى).',
          '**اختيار النموذج للوقت الفعلي:** small أو base هو النقطة المثلى العملية — سريع بما يكفي لمواكبة الكلام، ودقيق بما يكفي للصوت النظيف. تجنب large-v3 للوقت الفعلي ما لم يكن لديك GPU مخصص.',
          '**إدخال الميكروفون:** يقرأ whisper.cpp الصوت الخام عبر SDL2 أو portaudio. يقرأ faster-whisper مصفوفات الصوت من أي مكتبة صوت Python (sounddevice، وpyaudio، وsoundfile).',
          '**الاستقرار:** قد ينتج وضع stream في whisper.cpp رموزًا متكررة ("هلوسة" لحشوات قصيرة) عند الصمت. اقمعها بـ`--suppress-blank` و`--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: يفوز whisper.cpp',
        content:
          '**على أجهزة Mac بـM1 وM2 وM3 وM4 وM5، whisper.cpp مع تسريع Core ML / Metal هو الأداة الصحيحة — بلا شك.** لا يوجد دعم Metal في faster-whisper ويعمل على CPU فقط على Mac، محققًا ~3 أضعاف الزمن الفعلي مع large-v3. يحقق whisper.cpp مع Metal ~10 أضعاف الزمن الفعلي على M5 Pro — ميزة سرعة 3 أضعاف.',
        items: [
          '**تصدير Core ML:** شغّل `./models/generate-coreml-model.sh large-v3` لتصدير المشفّر بتنسيق Core ML. هذا يُفرّغ استدلال المشفّر على Apple Neural Engine.',
          '**معيار M5 Pro (large-v3، Metal):** ~10 أضعاف الزمن الفعلي. تُنسخ 60 دقيقة من الصوت في ~6 دقائق. ملاحظة: صدر M5 Pro في مارس 2026 — هذه معايير مبكرة من المجتمع. قد يتحسن الأداء مع تحديثات whisper.cpp التي تُحسّن M5 Neural Engine.',
          '**معيار M3 MacBook Air (large-v3، Metal):** ~7 أضعاف الزمن الفعلي. 60 دقيقة في ~8.5 دقائق.',
          '**الذاكرة:** الذاكرة الموحدة تعني عدم وجود VRAM منفصلة — يمكن لـM5 Pro بسعة 16 جيجابايت تشغيل large-v3 (~3 جيجابايت) بسهولة بجانب عمليات أخرى.',
          '**faster-whisper على Mac:** CPU فقط، int8. Large-v3 بسرعة ~3 أضعاف الزمن الفعلي. مناسب للنسخ الدفعي الليلي لكن ليس للوقت الفعلي أو سير العمل الحساس للوقت.',
          '**التوصية:** استخدم whisper.cpp لجميع أعمال STT على Mac. أضف pywhispercpp إذا احتجت للتكامل مع Python مع الاحتفاظ بتسريع Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: يفوز faster-whisper',
        content:
          '**على Windows وLinux مع بطاقات NVIDIA GPU، faster-whisper هو الخيار المتفوق.** خلفيته CUDA من CTranslate2 أكثر تحسينًا من مسار CUDA في whisper.cpp — ~12 ضعفًا مقابل ~8 أضعاف الزمن الفعلي مع large-v3 على RTX 4070، مع استخدام أقل لـVRAM.',
        items: [
          '**معيار RTX 4070 (12 جيجابايت) (large-v3 int8):** ~12 ضعف الزمن الفعلي، ~2.5 جيجابايت VRAM.',
          '**معيار RTX 3060 (12 جيجابايت) (large-v3 int8):** ~8 أضعاف الزمن الفعلي، ~2.5 جيجابايت VRAM.',
          '**معيار RTX 4060 (8 جيجابايت) (large-v3 int8):** ~7 أضعاف الزمن الفعلي، ~2.5 جيجابايت VRAM — يتناسب بسهولة.',
          '**int8 مقابل float16:** int8 أسرع بنسبة ~2 ضعف ويستخدم ~40% أقل من VRAM مع خسارة دقة ضئيلة. استخدم دائمًا `compute_type="int8"` على NVIDIA.',
          '**المعالجة الدفعية:** يتيح معامل `batched=True` في faster-whisper المعالجة المتوازية لملفات صوتية متعددة، مما يعظّم استخدام GPU لمهام النسخ الكبيرة.',
          '**التكامل في خط أنابيب Python:** يتكامل faster-whisper مباشرةً مع LangChain وHaystack وخطوط أنابيب Python المخصصة. لا حمل زائد للعمليات الفرعية مقارنةً بتغليف whisper.cpp.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: 'متى تستخدم أيًّا منهما',
        content: 'تعيين مباشر من سيناريو إلى الأداة المناسبة:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'استخدم whisper.cpp على Apple Silicon والأهداف المدمجة/متعددة المنصات؛ واستخدم faster-whisper على بطاقات NVIDIA GPU وخطوط أنابيب Python.',
          },
          {
            type: 'plain-terms',
            text: 'إذا كان لديك Mac، اختر whisper.cpp — فهو أسرع 3 أضعاف من faster-whisper على أجهزة Apple. إذا كان لديك NVIDIA GPU وتكتب Python، اختر faster-whisper — فهو أسرع ويحتاج 40% أقل من ذاكرة GPU.',
          },
        ],
        columns: ['السيناريو', 'أفضل خيار', 'السبب'],
        rows: [
          {
            'السيناريو': 'Mac بـApple Silicon (أي طراز)',
            'أفضل خيار': 'whisper.cpp',
            'السبب': 'تسريع Metal / Core ML — أسرع 3 أضعاف من faster-whisper (CPU فقط على Mac)',
          },
          {
            'السيناريو': 'خادم NVIDIA GPU (Linux/Windows)',
            'أفضل خيار': 'faster-whisper',
            'السبب': 'CTranslate2 int8 — أسرع وأقل VRAM من مسار CUDA في whisper.cpp',
          },
          {
            'السيناريو': 'خط أنابيب بيانات Python',
            'أفضل خيار': 'faster-whisper',
            'السبب': 'واجهة برمجة Python أصيلة؛ لا غلاف للعمليات الفرعية؛ VAD مدمج',
          },
          {
            'السيناريو': 'Raspberry Pi / Linux مدمج',
            'أفضل خيار': 'whisper.cpp',
            'السبب': 'ثنائي C نقي؛ لا حمل زائد لوقت تشغيل Python؛ مُحسَّن بـARM NEON',
          },
          {
            'السيناريو': 'مساعد صوتي في الوقت الفعلي',
            'أفضل خيار': 'whisper.cpp',
            'السبب': 'وضع stream بحمل زائد منخفض؛ يعمل بدون Python على Pi / مدمج',
          },
          {
            'السيناريو': 'نسخ دفعي (أرشيف صوتي كبير)',
            'أفضل خيار': 'faster-whisper',
            'السبب': 'استدلال دفعي، استخدام GPU، تكامل Python غير متزامن',
          },
          {
            'السيناريو': 'AMD GPU (Vulkan)',
            'أفضل خيار': 'whisper.cpp',
            'السبب': 'دعم خلفية Vulkan؛ faster-whisper للـCUDA فقط',
          },
          {
            'السيناريو': 'خادم Linux بـCPU فقط',
            'أفضل خيار': 'faster-whisper',
            'السبب': 'تكميم int8 يمنح ~30% ميزة سرعة على CPU x86',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'ما وراء whisper.cpp وfaster-whisper',
        content:
          'توسّع أداتان إضافيتان نطاق Whisper بقدرات لا توفرها أيٌّ من الأداتين جاهزتَين: تمييز المتحدثين والاستدلال الدفعي فائق السرعة على GPU.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** مبني على faster-whisper، يضيف WhisperX طوابع زمنية على مستوى الكلمة وتمييز المتحدثين — للتعرف على أيٍّ من المتحدثين قال ماذا. الأفضل لـ: نسخ الاجتماعات بعلامات المتحدثين، وتحرير البودكاست، ونسخ المقابلات. ثبّت بـ`pip install whisperx` وأدرج رمز Hugging Face للنموذج المساعد لتمييز المتحدثين.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** غلاف خط أنابيب Hugging Face Transformers يضيف دعم Flash Attention 2 لاستدلال GPU أسرع بكثير من faster-whisper القياسي على أجهزة NVIDIA. الأفضل لـ: المعالجة الدفعية لأرشيفات صوتية كبيرة على بطاقات NVIDIA GPU. يتطلب GPU متوافق مع Flash Attention 2 (Ampere أو أحدث: RTX 3000+، A100، H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'المشكلات الشائعة والحلول',
        content: 'أكثر مشكلات الإعداد والتشغيل شيوعًا مع حلول مباشرة:',
        items: [
          '**عدم توافق إصدار CUDA:** يتطلب faster-whisper CUDA 11.8 أو أحدث. تحقق بـ`nvcc --version`. إذا كانت CUDA أقدم، إما حدّث المشغّل أو ثبّت faster-whisper في بيئة conda بـ`cudatoolkit=11.8`.',
          '**فشل تصدير نموذج Metal:** تأكد من تثبيت Xcode Command Line Tools — شغّل `xcode-select --install`. يتطلب سكريبت تصدير Core ML حزمة Python `coremltools`: `pip install coremltools`.',
          '**هلوسة عند الصمت:** قد تنتج كلتا الأداتين رموزًا متكررة لحشوات قصيرة على أجزاء الصوت الصامتة. استخدم `--no-speech-threshold 0.6` في وضع stream في whisper.cpp، أو `vad_filter=True` في `model.transcribe()` من faster-whisper لتخطي الأجزاء الصامتة تلقائيًا.',
          '**نفاد الذاكرة مع large-v3:** تحوّل إلى تكميم int8 في faster-whisper (`compute_type="int8"`) — يقلل VRAM من ~5 جيجابايت (float16) إلى ~2.5 جيجابايت. في whisper.cpp استخدم نسخة GGML المكمَّمة (مثلًا `ggml-large-v3-q5_0.bin`) التي تقلص الذاكرة إلى ~3–4 جيجابايت.',
          '**إخراج مشوَّه لصوت غير إنجليزي:** لا تستخدم نسخ `.en` من النموذج (tiny.en، base.en) للكلام غير الإنجليزي — فهي إنجليزية فقط. استخدم النماذج متعددة اللغات (base، وsmall، وmedium، وlarge-v3) وحدد اللغة صراحةً: `-l ar` في whisper.cpp أو `language="ar"` في faster-whisper.',
          '**استدلال CPU بطيء:** تأكد من أن معالجك يدعم تعليمات AVX2 (المطلوبة للاستدلال المُحسَّن على CPU). تحقق بـ`grep avx2 /proc/cpuinfo` على Linux أو `sysctl machdep.cpu.features` على Mac. المعالجات دون AVX2 تعود إلى SIMD العام وستكون أبطأ بنسبة 2–3 أضعاف.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل دقة النسخ متطابقة بين whisper.cpp وfaster-whisper؟',
            a: 'نعم. تستخدم كلتا الأداتين أوزان نموذج OpenAI Whisper ذاتها — النموذج نفسه متطابق. الفرق فقط في وقت تشغيل الاستدلال (C/C++ مقابل CTranslate2 Python). سيكون WER على ملف الصوت ذاته ضمن 0.1% مطلق بينهما، وهو ضمن التباين الطبيعي من عشوائية beam search.',
          },
          {
            q: 'هل يمكنني استخدام faster-whisper على Mac بـApple Silicon؟',
            a: 'نعم، لكنه يعمل على CPU فقط — لا يوجد دعم Metal في faster-whisper. على M5 Pro، يعمل faster-whisper large-v3 بسرعة ~3 أضعاف الزمن الفعلي (CPU int8)، مقارنةً بـ~10 أضعاف لـwhisper.cpp مع Metal. لمعظم مستخدمي Mac، يكون whisper.cpp أسرع 3 أضعاف للنموذج ذاته. السبب الوحيد لاستخدام faster-whisper على Mac هو إذا كان خط أنابيب Python يعتمد عليه بالفعل والسرعة ليست حاسمة.',
          },
          {
            q: 'أي حجم نموذج Whisper يجب استخدامه لمساعد صوتي؟',
            a: 'لواجهات الصوت في الوقت الفعلي، Whisper small هو التوصية القياسية — 3.4% WER على الإنجليزية النظيفة، ~200 مللي ثانية زمن استجابة STT على معالج أو GPU حديث، ويتناسب مع 2 جيجابايت RAM. استخدم tiny إذا كنت على جهاز محدود الموارد جدًا (Raspberry Pi Zero 2W، الهواتف القديمة) ويمكنك تحمّل ~7.6% WER. استخدم medium أو large-v3 فقط للنسخ الدفعي حيث التأخير ليس قيدًا.',
          },
          {
            q: 'هل يدعم whisper.cpp لغات غير الإنجليزية؟',
            a: 'نعم. جميع نماذج Whisper متعددة اللغات (base، وsmall، وmedium، وlarge-v3) تدعم 99 لغة. أضف `-l [رمز اللغة]` إلى CLI: `-l ar` للعربية، و`-l de` للألمانية، و`-l ja` لليابانية، إلخ. نموذجا tiny.en وbase.en للإنجليزية فقط وأكثر دقة قليلًا للإنجليزية من نظيريهما متعددَي اللغات.',
          },
          {
            q: 'كيف أثبّت faster-whisper مع دعم CUDA؟',
            a: 'ثبّت بـ`pip install faster-whisper`. يتطلب دعم CUDA نسخة CUDA 11.8 أو أحدث وcuDNN 8.x مثبّتَين على نظامك. تحقق من إصدار CUDA بـ`nvcc --version`. ثم حدد `device="cuda"` عند تحميل النموذج: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. إذا لم يُكتشف CUDA، يعود faster-whisper تلقائيًا إلى CPU.',
          },
          {
            q: 'أيٌّ منهما أكثر دقة — whisper.cpp أم faster-whisper؟',
            a: 'متطابقان. تستخدم كلتا الأداتين أوزان نموذج OpenAI Whisper ذاتها وتنتجان WER متطابق على أي ملف صوتي. الفرق بين whisper.cpp وfaster-whisper هو السرعة ودعم المنصة، لا دقة النسخ. أي فرق WER تقيسه بين التشغيلات ضمن التباين الطبيعي من beam search، وليس من وقت التشغيل نفسه.',
          },
          {
            q: 'هل يمكنني تشغيل Whisper large-v3 بذاكرة 8 جيجابايت RAM؟',
            a: 'نعم على GPU — large-v3 int8 في faster-whisper يستخدم ~2.5 جيجابايت VRAM ويعمل على أي GPU بسعة 8 جيجابايت. على الأجهزة المعتمدة على CPU فقط، 8 جيجابايت RAM ضيّقة لـlarge-v3 (float32 يستخدم ~10 جيجابايت). استخدم medium (5 جيجابايت RAM) أو small (2 جيجابايت RAM) على أنظمة CPU فقط. whisper.cpp أكثر كفاءة في استخدام الذاكرة على CPU من faster-whisper بسبب الحمل الزائد الأقل لوقت التشغيل.',
          },
          {
            q: 'كم تكلف نسخة Whisper المحلية مقارنةً بـSTT السحابية؟',
            a: 'صفر تكلفة مستمرة. تُحصّل خدمات STT السحابية 0.006–0.024 دولارًا لكل دقيقة صوت — لمطوّر ينسخ 8 ساعات اجتماعات أسبوعيًا، هذا 120–480 دولارًا شهريًا. يعمل Whisper المحلي على جهازك الذي تمتلكه بالفعل، بدون رسوم دقائق، وبدون إدارة مفاتيح API، وبدون أن تغادر بيانات الصوت جهازك.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[whisper.cpp على GitHub](https://github.com/ggerganov/whisper.cpp) — الكود المصدري وتعليمات البناء وسكريبتات تنزيل النماذج ودليل إعداد Metal/Core ML.',
          '[faster-whisper على GitHub](https://github.com/SYSTRAN/faster-whisper) — الكود المصدري وتوثيق Python API ونتائج المعايير.',
          '[distil-whisper/distil-large-v3 على Hugging Face](https://huggingface.co/distil-whisper/distil-large-v3) — بطاقة النموذج ونتائج المعايير وتعليمات استخدام نسخة Whisper المقطّرة.',
          '[WhisperX على GitHub](https://github.com/m-bain/whisperX) — طوابع زمنية على مستوى الكلمة وتمييز المتحدثين مبني على faster-whisper.',
          '[insanely-fast-whisper على GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — خط أنابيب Whisper Flash Attention 2 لأقصى إنتاجية على NVIDIA GPU.',
          '[OpenAI Whisper على GitHub](https://github.com/openai/whisper) — نموذج Whisper الأصلي والورقة البحثية وبطاقات النماذج لجميع الأحجام.',
          '[ورقة OpenAI Whisper البحثية (Radford et al.، 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". مصدر قيم WER.',
          '[توثيق CTranslate2](https://github.com/OpenNMT/CTranslate2) — تفاصيل التكميم ودعم الأجهزة وأسس تحسين int8.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[TTS المحلي واستنساخ الصوت 2026: Piper مقابل Coqui مقابل XTTS v2](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مكمّل TTS: حوّل النص المنسوخ مجددًا إلى صوت، بدون اتصال.',
          '[بناء مساعد صوتي كاملًا بدون اتصال في 2026](/ar/power-local-llm/build-local-voice-assistant-2026) — اربط Whisper STT بنموذج LLM محلي وPiper TTS في خط أنابيب صوتي كامل.',
          '[خط أنابيب AI متعدد الوسائط المحلي 2026](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — أضف نماذج رؤية جنبًا إلى جنب مع STT وTTS لحزمة محلية متعددة الوسائط كاملة.',
          '[دليل الأجهزة لـLLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) — متطلبات GPU وRAM لخط الأنابيب الكامل للصوت + LLM.',
          '[بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) — النسخة الجوالة: WhisperKit على iPhone، وLayla على Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Whisper.cpp مقابل faster-whisper 2026: معايير STT المحلية والإعداد وتسريع GPU',
       description: 'قارن بين whisper.cpp وfaster-whisper للتعرف على الكلام محليًا في 2026. معايير WER، سرعة GPU مقابل CPU، Apple Silicon Metal، النسخ في الوقت الفعلي وأدلة التثبيت. كل شيء بدون اتصال.',
       url: 'https://www.promptquorum.com/ar/power-local-llm/local-whisper-stt-comparison-2026',
       inLanguage: 'ar',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: 로컬 STT 벤치마크, 설정 및 GPU 가속',
    seoTitle: 'Whisper.cpp vs faster-whisper 2026: 로컬 STT 및 벤치마크',
    intro:
      'whisper.cpp와 faster-whisper는 2026년 현재 OpenAI Whisper 모델을 기반으로 한 가장 주요한 두 가지 로컬 오프라인 음성 인식(STT) 구현체입니다. whisper.cpp는 Apple Metal, CUDA, Vulkan, CPU에서 동작하는 순수 C/C++ 포트로 — Apple Silicon, 임베디드 시스템, 실시간 음성 애플리케이션에 이상적입니다. faster-whisper는 CTranslate2를 활용하는 Python 라이브러리로, int8 양자화를 통해 NVIDIA GPU에서 원본 Whisper 대비 최대 ~4배의 처리량을 달성합니다. 이 가이드에서는 설치 방법, 성능 벤치마크, 실시간 전사 설정, 그리고 플랫폼별 직접 비교를 통해 적합한 도구를 선택할 수 있도록 안내해 드립니다.',
    metaDescription:
      '2026년 로컬 음성 인식을 위한 whisper.cpp와 faster-whisper 비교: WER, GPU vs CPU 속도, Apple Silicon Metal, 실시간 전사. 완전 오프라인 동작.',
    twitterDescription:
      'whisper.cpp vs faster-whisper: 2026년 로컬 음성 인식 벤치마크. CPU vs GPU 속도, Apple Metal, WER 정확도, 실시간 전사. 클라우드 불필요, 무료.',
    audience:
      '오프라인 및 프라이버시 보호 음성 전사가 필요한 개발자, 연구자, 시스템 구축자 — 회의 메모, 음성 인터페이스, 접근성 도구, 또는 보안 환경에 활용하시는 분들을 위한 가이드입니다.',
    readTime: '10분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 음성 인식',
    targetKeywords: [
      'whisper.cpp vs faster-whisper',
      '로컬 음성 인식 2026',
      '오프라인 음성 전사',
      '로컬 whisper 전사',
      'faster-whisper 벤치마크',
      'whisper cpp 애플 실리콘',
      '로컬 STT GPU',
      'whisper cpp 설치 방법',
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
      '**whisper.cpp vs faster-whisper — 가장 널리 사용되는 두 가지 Whisper 로컬 런타임 — 각자의 대상 플랫폼에서 결정적인 우위를 보입니다.** **Apple Silicon(M 칩 탑재 Mac)의 경우, Metal 가속을 적용한 whisper.cpp가 2026년 가장 빠른 로컬 STT 옵션입니다 — M5 Pro에서 large-v3이 ~10배 실시간 속도로 동작합니다.** NVIDIA GPU 서버 및 Python 파이프라인의 경우, CTranslate2의 int8 양자화를 적용한 faster-whisper가 최선의 선택으로, RTX 4070에서 large-v3 모델을 ~2.5GB VRAM만으로 ~12배 실시간 속도로 처리합니다. 두 도구 모두 동일한 OpenAI Whisper 모델 가중치(tiny부터 large-v3까지)를 사용하며, 차이점은 런타임 최적화와 통합 방식에 있습니다. CPU 전용 하드웨어에서는 tiny 및 base 모델에 대해 두 도구 모두 활용 가능하며 — faster-whisper가 int8을 통해 CPU에서 약간 더 높은 속도(~20배 vs ~15배 실시간)를 제공합니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 로컬 음성 인식에 whisper.cpp와 faster-whisper 중 어느 것을 사용해야 합니까?',
        answer:
          '선택은 하드웨어와 통합 요구 사항에 따라 달라집니다. Apple Silicon(M1–M5)의 경우, Metal 가속을 적용한 whisper.cpp가 더 빠르고 자연스러운 선택입니다 — Python 의존성 없이 large-v3로 ~10배 실시간 속도를 달성합니다. NVIDIA GPU의 경우, faster-whisper가 더 빠르고 Python 파이프라인 통합이 용이하며, int8 양자화를 통해 40% 적은 VRAM으로 large-v3를 ~12배 실시간 속도로 처리합니다. CPU 전용 하드웨어에서는 small 및 base 모델에 대해 두 도구 모두 동작하며, faster-whisper가 속도 면에서 약간 우위를 보입니다.',
        bullets: [
          'Apple Silicon → whisper.cpp with Core ML / Metal. M5 Pro에서 large-v3으로 ~10배 실시간 속도.',
          'NVIDIA GPU → faster-whisper. RTX 4070에서 large-v3 int8으로 ~12배 실시간 속도, ~2.5GB VRAM.',
          'Python 파이프라인 → faster-whisper. 네이티브 Python, 5줄 설정, VAD 포함.',
          '임베디드 / Raspberry Pi → whisper.cpp. 순수 C 바이너리, Python 런타임 불필요.',
          '실시간 음성 → whisper.cpp 스트림 모드 또는 faster-whisper VAD 파이프라인.',
          '배치 전사 → faster-whisper. GPU 처리량 우수; 간편한 비동기 배칭.',
          'WER 정확도: 동일 — 동일한 Whisper 모델 가중치 사용.',
        ],
        updatedDate: '2026-05-14',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실 정리', anchor: '#quick-facts' },
      { label: '로컬 음성 인식이 필요한 이유', anchor: '#why-local-stt' },
      { label: 'Whisper 모델 크기', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: 더 빠른 대안', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++ 포트', anchor: '#whisper-cpp' },
      { label: 'faster-whisper — CTranslate2 포트', anchor: '#faster-whisper' },
      { label: '직접 비교: 벤치마크 표', anchor: '#benchmarks' },
      { label: '실시간 전사 설정', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp 승', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper 승', anchor: '#nvidia-gpu' },
      { label: '어느 것을 사용해야 하는가', anchor: '#when-to-use' },
      { label: 'whisper.cpp와 faster-whisper를 넘어서', anchor: '#beyond-tools' },
      { label: '일반적인 문제 및 해결책', anchor: '#troubleshooting' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '참고 자료', anchor: '#sources' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**whisper.cpp는 Apple Silicon을 위한 최선의 로컬 STT 선택입니다.** C/C++ 포트는 하드웨어 가속을 위해 Core ML과 Apple Metal을 활용합니다 — Python 의존성 없이 M5 Pro에서 large-v3가 ~10배 실시간 속도로 동작합니다.',
          '**faster-whisper는 NVIDIA GPU 및 Python 파이프라인을 위한 최선의 로컬 STT 선택입니다.** CTranslate2의 int8 양자화는 VRAM을 ~40% 줄이고 처리량을 원본 OpenAI 구현 대비 ~4배 향상시킵니다 — RTX 4070에서 large-v3가 ~2.5GB VRAM만으로 ~12배 실시간 속도를 달성합니다.',
          '**두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용합니다.** WER(단어 오류율)은 동일합니다 — 차이점은 런타임 성능과 통합 방식에만 있으며, 전사 정확도에는 차이가 없습니다.',
          '**Whisper large-v3는 영어에서 2.5% WER로 최고의 정확도를 제공합니다.** 대부분의 프로덕션 사용 사례에서는 Whisper small(3.4% WER, 2GB RAM) 또는 medium(2.9% WER, 5GB RAM)이 속도와 정확도 사이에서 더 나은 균형을 제공합니다.',
          '**실시간 전사는 두 도구 모두로 달성 가능합니다** — whisper.cpp는 `--stream` 플래그를 통해, faster-whisper는 내장 VAD(음성 활동 감지) 파이프라인을 통해 지원합니다. 실제 지연 시간은 모델 크기에 따라 라이브 음성보다 0.5~2초 지연됩니다.',
          '**whisper.cpp는 CPU, Metal, CUDA, Vulkan에서 동작합니다** — 크로스 플랫폼 임베디드 사용(Raspberry Pi, Windows GPU 구성, ARM 서버)을 위한 유일한 옵션입니다. faster-whisper는 CPU와 CUDA만 지원합니다(Mac에서 Metal 미지원).',
          '**Raspberry Pi 및 임베디드 Linux의 경우, CPU 상의 whisper.cpp tiny/base** 가 실질적인 한계입니다 — Pi 5에서 tiny가 ~15배 실시간 속도, base가 ~6배 실시간 속도. 두 모델 모두 1GB RAM에 수용됩니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실 정리',
        items: [
          '**두 도구 모두:** OpenAI의 오픈소스 Whisper 모델(MIT 라이선스) 기반. 동일한 정확도 — 런타임만 다름.',
          '**whisper.cpp:** Georgi Gerganov가 C/C++로 작성. CPU(AVX2/NEON), CUDA, Metal(Apple), Vulkan 지원. Python 불필요.',
          '**faster-whisper:** CTranslate2를 사용하는 Python 라이브러리. CPU(int8)와 CUDA 지원. Apple Metal 미지원.',
          '**Whisper 모델 크기:** tiny(39M), base(74M), small(244M), medium(769M), large-v3(1.55B). 모두 ggml / CTranslate2 형식.',
          '**대부분의 경우 최선의 모델:** Whisper small — 3.4% WER, 2GB RAM에서 동작, 현대적 CPU 또는 GPU에서 6배 실시간 속도.',
          '**RTX 4070 벤치마크(large-v3):** faster-whisper ~12배 실시간; whisper.cpp CUDA ~8배 실시간. NVIDIA에서는 faster-whisper 승.',
          '**M5 Pro 벤치마크(large-v3):** whisper.cpp Metal ~10배 실시간; faster-whisper CPU 전용 ~3배 실시간. Apple에서는 whisper.cpp 승.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '로컬 음성 인식이 필요한 이유',
        content:
          '클라우드 STT 서비스(Google Speech-to-Text, AWS Transcribe, Azure Speech)는 오디오 분당 요금을 부과하며 — 일반적으로 $0.006–$0.024/분 — 오디오를 원격 서버로 전송합니다. 개인 정보 보호가 중요한 애플리케이션(의료 받아쓰기, 법적 녹음, 저널리즘 인터뷰, 기업 회의)의 경우, 로컬 전사는 데이터 노출을 완전히 제거합니다.',
        items: [
          '**개인 정보 보호:** 오디오가 기기를 떠나지 않습니다. 컴플라이언스를 위한 데이터 처리 계약이 필요 없습니다 — 처리가 로컬에서 이루어집니다.',
          '**비용:** 분당 요금 없음. 주당 8시간 회의를 전사하는 개발자는 클라우드 STT 가격 대비 월 $120–480를 절약할 수 있습니다.',
          '**오프라인:** 비행기, 보안 시설, 안정적인 인터넷이 없는 지역에서 동작합니다. API 키 관리 불필요.',
          '**지연 시간:** 업로드/다운로드 왕복 없음. 실시간 음성 인터페이스의 경우, 로컬 처리는 STT 지연 시간을 클라우드의 300–800ms에서 50–300ms로 단축합니다.',
          '**커스터마이즈:** 도메인별 어휘로 모델을 미세 조정합니다. 하드웨어에 맞는 모델 크기를 실행합니다.',
          '**Home Assistant 통합:** 로컬 Whisper는 웨이크 워드와 음성 명령이 홈 네트워크를 떠나지 않음을 의미합니다. 클라우드 STT를 완전히 대체하는 애드온 설정은 [Home Assistant에서의 로컬 Whisper →](/ko/smart-home/local-whisper-home-assistant)를 참조하십시오.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper 모델 크기 — 두 도구의 공통 기반',
        content:
          'whisper.cpp와 faster-whisper 모두 동일한 Whisper 모델 가중치를 사용하며, 각자의 형식으로 변환됩니다(whisper.cpp는 GGML, faster-whisper는 CTranslate2). VRAM/RAM 예산과 정확도 요구 사항에 따라 모델 크기를 선택하십시오.',
        columns: ['모델', '파라미터', 'VRAM / RAM', '영어 WER', '속도 배율 (RTX 4070 실시간 대비)'],
        rows: [
          {
            '모델': 'tiny',
            '파라미터': '39M',
            'VRAM / RAM': '~1 GB',
            '영어 WER': '7.6%',
            '속도 배율 (RTX 4070 실시간 대비)': '~32×',
          },
          {
            '모델': 'base',
            '파라미터': '74M',
            'VRAM / RAM': '~1 GB',
            '영어 WER': '5.0%',
            '속도 배율 (RTX 4070 실시간 대비)': '~16×',
          },
          {
            '모델': 'small',
            '파라미터': '244M',
            'VRAM / RAM': '~2 GB',
            '영어 WER': '3.4%',
            '속도 배율 (RTX 4070 실시간 대비)': '~6×',
          },
          {
            '모델': 'medium',
            '파라미터': '769M',
            'VRAM / RAM': '~5 GB',
            '영어 WER': '2.9%',
            '속도 배율 (RTX 4070 실시간 대비)': '~2×',
          },
          {
            '모델': 'large-v3',
            '파라미터': '1.55B',
            'VRAM / RAM': '~10 GB',
            '영어 WER': '2.5%',
            '속도 배율 (RTX 4070 실시간 대비)': '1× (기준)',
          },
          {
            '모델': 'distil-large-v3',
            '파라미터': '~756M',
            'VRAM / RAM': '~4 GB',
            '영어 WER': '~2.6%',
            '속도 배율 (RTX 4070 실시간 대비)': '~6×',
          },
        ],
        note: 'WER(단어 오류율) 값은 LibriSpeech 클린 테스트 세트에 대한 Whisper 논문에서 가져왔습니다. 낮을수록 좋습니다. 속도 배율은 RTX 4070에서의 faster-whisper int8 기준입니다. distil-large-v3 값은 Distil-Whisper 논문에서 가져왔습니다.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: 더 빠른 대안',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)는 large-v3의 지식 증류 변형으로, 파라미터가 ~50% 적으면서 WER이 원본의 ~1% 이내로 유지되며 ~6배 빠르게 동작합니다.** 전사 속도가 마지막 정확도 퍼센트 이상으로 중요한 경우에 올바른 선택입니다. distil-large-v3는 faster-whisper(네이티브 CTranslate2 지원)와 whisper.cpp(GGML 형식 변환을 통해) 모두와 호환되어, 이미 사용 중인 런타임에 통합됩니다.',
        items: [
          '**파라미터:** ~756M — large-v3의 1.55B의 약 절반, ~10GB 대신 ~4GB VRAM에 수용됩니다.',
          '**속도:** RTX 4070에서 ~6배 실시간(large-v3의 기준인 1× 대비) — 속도는 medium 모델과 유사하면서 정확도는 large-v3에 근접합니다.',
          '**WER:** 영어에서 ~2.6% — large-v3의 2.5%보다 단 ~0.1% 높습니다. 실제로는 일반적인 음성에서 차이를 거의 느낄 수 없습니다.',
          '**호환성:** faster-whisper에서 네이티브로 동작합니다(`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). whisper.cpp의 경우, distil-whisper의 GGML 변환 스크립트를 사용하여 GGML 형식으로 변환하십시오.',
          '**최적 사용 사례:** 배치 전사 작업, VRAM이 제한된 서버 배포, large-v3 품질을 medium 모델 속도로 원하는 모든 사용 사례.',
          '**비권장 사용 사례:** 다국어 전사 — distil-large-v3는 영어 전용입니다. 다른 언어의 경우 large-v3 또는 medium을 사용하십시오.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — C/C++ 포트',
        content:
          '**whisper.cpp(Georgi Gerganov 제작)는 OpenAI Whisper 모델의 순수 C/C++ 재구현으로, 저자원 크로스 플랫폼 추론에 최적화되어 있습니다.** Python, CUDA 툴킷이 필요 없으며, Raspberry Pi부터 Apple M5 Pro, Windows CUDA 구성까지 거의 모든 하드웨어에서 동작합니다.',
        items: [
          '**플랫폼 지원:** CPU(AVX2, AVX512, ARM NEON), Apple Metal(Core ML), CUDA(NVIDIA), Vulkan(AMD/Intel GPU), OpenCL.',
          '**Apple Silicon 강점:** whisper.cpp는 모델을 Core ML 형식으로 내보내 Apple Neural Engine에서 추론을 가능하게 합니다. Metal을 통해 M5 Pro에서 large-v3가 ~10배 실시간 속도로 동작합니다 — 클라우드 왕복보다 빠릅니다.',
          '**설치:** 저장소를 클론하고 `make`(또는 `cmake`)를 실행합니다. 일반 플랫폼용 사전 빌드된 바이너리가 제공됩니다. Python 의존성 없음.',
          '**모델 다운로드:** `bash ./models/download-ggml-model.sh base.en` — GGML 형식의 모델 파일을 다운로드합니다(base의 경우 ~142MB).',
          '**CLI 예시:** `./main -m models/ggml-base.bin -f audio.wav` — WAV 파일을 표준 출력으로 전사합니다. 한국어는 `-l ko`를 추가하십시오.',
          '**실시간 스트림 모드:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — 마이크에서 3초 청크 단위로 전사합니다.',
          '**Python 래퍼:** pywhispercpp은 whisper.cpp를 위한 Python 바인딩을 제공하여, Metal 가속을 희생하지 않고 Python 파이프라인에서 사용할 수 있게 합니다.',
          '**한계:** 네이티브 VAD(음성 활동 감지) 없음. 스트림 모드는 사용 사례에 따라 `--step` 및 `--length` 파라미터를 조정해야 합니다.',
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
        title: 'faster-whisper — CTranslate2 포트',
        content:
          '**faster-whisper(SYSTRAN 제작)는 CTranslate2를 사용하여 Whisper 추론을 재구현한 Python 라이브러리입니다 — int8 양자화 지원을 통해 VRAM 사용량을 줄이고 처리량을 향상시키는 고도로 최적화된 C++ 추론 엔진입니다.** NVIDIA GPU에서 faster-whisper는 사용 가능한 가장 빠른 로컬 Whisper 구현체입니다.',
        items: [
          '**플랫폼 지원:** CPU(int8 양자화)와 NVIDIA GPU CUDA. Apple Metal 미지원 — Mac에서는 CPU 전용으로만 동작합니다.',
          '**int8 강점:** CTranslate2의 int8 양자화는 VRAM을 ~40% 줄이고 float16 대비 추론 속도를 ~2배 향상시키며, WER 영향은 무시할 수준(절대값 < 0.1%)입니다.',
          '**설치:** `pip install faster-whisper` — 컴파일 불필요. CUDA 지원은 CUDA 11.8+와 cuDNN 8.x가 필요합니다.',
          '**내장 VAD:** faster-whisper에는 Silero VAD 통합이 포함되어 있어 음성이 없는 오디오 세그먼트를 자동으로 건너뜁니다 — 실시간 전사 파이프라인에 필수적입니다.',
          '**네이티브 Python:** 직접적인 Python API는 LLM, 오디오 처리 라이브러리, 웹 프레임워크와의 통합을 용이하게 합니다.',
          '**속도:** RTX 4070에서 large-v3 int8이 ~2.5GB VRAM을 사용하며 ~12배 실시간 속도로 동작합니다. CPU int8은 tiny 모델에서 ~20배 실시간 속도를 달성합니다.',
          '**배치 처리:** faster-whisper는 대량의 오디오 파일을 효율적으로 처리하기 위한 배치 추론을 지원합니다.',
          '**한계:** Mac에서 Metal 미지원 — Apple Silicon에서 CPU 전용으로만 동작하며, Metal을 사용하는 whisper.cpp의 ~10배 대비 large-v3로 ~3배 실시간 속도를 달성합니다.',
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
        title: '직접 비교: 벤치마크 표',
        content:
          '모든 벤치마크는 달리 명시되지 않는 한 large-v3 모델을 사용합니다. 속도는 실시간 배율로 측정됩니다(예: 10×는 60분 오디오를 6분에 전사함을 의미). VRAM 수치는 GPU 실행 기준이며, RAM 수치는 CPU 실행 기준입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon에서 Metal을 사용한 whisper.cpp는 large-v3를 ~10배 실시간 속도로 처리하고, NVIDIA GPU에서 int8을 사용한 faster-whisper는 ~12배 실시간 속도를 달성합니다 — 각 도구는 자신의 대상 플랫폼에서 결정적인 우위를 보입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Mac에서는 whisper.cpp를 선택하십시오(Apple Neural Engine 활용), Windows/Linux의 NVIDIA GPU에서는 faster-whisper를 선택하십시오(실시간보다 12배 빠르게 오디오를 처리하며 GPU 메모리를 40% 덜 사용합니다).',
          },
        ],
        columns: ['지표', 'whisper.cpp (large-v3)', 'faster-whisper (large-v3)'],
        rows: [
          {
            '지표': '플랫폼 / 언어',
            'whisper.cpp (large-v3)': 'C/C++ (크로스 플랫폼)',
            'faster-whisper (large-v3)': 'Python (CTranslate2)',
          },
          {
            '지표': 'GPU 지원',
            'whisper.cpp (large-v3)': 'CUDA, Metal, Vulkan',
            'faster-whisper (large-v3)': 'CUDA 전용',
          },
          {
            '지표': 'CPU 최적화',
            'whisper.cpp (large-v3)': 'AVX2, ARM NEON',
            'faster-whisper (large-v3)': 'int8 양자화',
          },
          {
            '지표': '속도 — RTX 4070, large-v3',
            'whisper.cpp (large-v3)': '~8배 실시간',
            'faster-whisper (large-v3)': '~12배 실시간 ✓',
          },
          {
            '지표': '속도 — M5 Pro, large-v3',
            'whisper.cpp (large-v3)': '~10배 실시간 (Metal) ✓',
            'faster-whisper (large-v3)': '~3배 실시간 (CPU 전용)',
          },
          {
            '지표': '속도 — CPU 전용 (x86), base',
            'whisper.cpp (large-v3)': '~15배 실시간',
            'faster-whisper (large-v3)': '~20배 실시간 ✓',
          },
          {
            '지표': 'VRAM — large-v3, GPU',
            'whisper.cpp (large-v3)': '~3 GB',
            'faster-whisper (large-v3)': '~2.5 GB (int8) ✓',
          },
          {
            '지표': 'Python 통합',
            'whisper.cpp (large-v3)': '래퍼 필요 (pywhispercpp)',
            'faster-whisper (large-v3)': '네이티브 ✓',
          },
          {
            '지표': 'VAD (침묵 감지)',
            'whisper.cpp (large-v3)': '수동 (--step 조정)',
            'faster-whisper (large-v3)': '내장 (Silero VAD) ✓',
          },
          {
            '지표': '실시간 스트리밍',
            'whisper.cpp (large-v3)': '예 (--stream 플래그) ✓',
            'faster-whisper (large-v3)': '예 (VAD 파이프라인)',
          },
          {
            '지표': 'WER 정확도 (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (동일)',
            'faster-whisper (large-v3)': '2.5% (동일)',
          },
          {
            '지표': 'Python 의존성',
            'whisper.cpp (large-v3)': '없음 ✓',
            'faster-whisper (large-v3)': 'Python 3.8+',
          },
          {
            '지표': 'Raspberry Pi / 임베디드',
            'whisper.cpp (large-v3)': '예 — C 바이너리 ✓',
            'faster-whisper (large-v3)': '제한적 — Python 오버헤드',
          },
          {
            '지표': '출력 형식',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python 객체 (start, end, text)',
          },
        ],
        note: 'whisper.cpp는 출력을 표준 자막 및 전사 형식(SRT, VTT, JSON, CSV, txt)으로 직접 작성합니다 — 추가 코드 없이 디스크에 파일이 필요한 자막 워크플로에 이상적입니다. faster-whisper는 `start`, `end`, `text` 속성을 가진 세그먼트 객체의 Python 제너레이터를 반환합니다 — 세그먼트 텍스트를 중간 파일 작성 없이 다운스트림 모델에 직접 전달하는 LLM 파이프라인 연결에 이상적입니다. 자막 생성의 경우 whisper.cpp가 더 간단합니다. 세그먼트를 프로그래밍 방식으로 처리하는 파이프라인의 경우 faster-whisper가 더 간단합니다.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: '실시간 전사 설정',
        content:
          '**실시간 전사는 마이크에서 들어오는 오디오를 청크 단위로 처리하여 음성보다 약간 지연된 텍스트를 생성합니다.** 두 도구 모두 이를 지원하지만, 서로 다른 트레이드오프가 있습니다.',
        items: [
          '**whisper.cpp 스트림 모드:** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`를 실행합니다. 3초 청크를 처리하며, small 모델로 ~0.5–1.5초의 지연 시간. Python 불필요.',
          '**faster-whisper VAD 파이프라인:** `model.transcribe()`에서 `vad_filter=True`를 사용합니다. Silero VAD가 침묵 경계에서 자동으로 오디오를 세그먼트화합니다 — 고정 길이 창보다 더 자연스러운 청크.',
          '**실제 지연 시간:** small 또는 medium 모델로 라이브 음성보다 0.5–2초 지연. 더 낮은 지연 시간(< 0.5초, 단 WER 더 높음)을 위해서는 tiny를 사용하십시오.',
          '**실시간용 모델 선택:** small 또는 base가 실질적인 최적 지점입니다 — 음성을 따라가기에 충분히 빠르고, 깨끗한 오디오에 대해 충분히 정확합니다. 전용 GPU가 없는 한 실시간에서 large-v3는 피하십시오.',
          '**마이크 입력:** whisper.cpp는 SDL2 또는 portaudio를 통해 원시 오디오를 읽습니다. faster-whisper는 모든 Python 오디오 라이브러리(sounddevice, pyaudio, soundfile)에서 오디오 배열을 읽습니다.',
          '**안정성:** whisper.cpp의 스트림 모드는 침묵 중에 반복 채움 토큰("환각")을 생성할 수 있습니다. `--suppress-blank`와 `--no-speech-threshold`로 억제하십시오.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp 승',
        content:
          '**M1, M2, M3, M4, M5 탑재 Mac의 경우, Core ML / Metal 가속을 사용하는 whisper.cpp가 올바른 도구입니다 — 의심의 여지가 없습니다.** faster-whisper는 Metal 지원이 없어 Mac에서 CPU 전용으로만 동작하며 large-v3로 ~3배 실시간 속도를 달성합니다. Metal을 사용하는 whisper.cpp는 M5 Pro에서 ~10배 실시간 속도를 달성합니다 — 3배의 속도 이점.',
        items: [
          '**Core ML 내보내기:** `./models/generate-coreml-model.sh large-v3`를 실행하여 인코더를 Core ML 형식으로 내보냅니다. 이를 통해 인코더 추론이 Apple Neural Engine으로 오프로드됩니다.',
          '**M5 Pro 벤치마크(large-v3, Metal):** ~10배 실시간. 60분 오디오를 ~6분에 전사. 참고: M5 Pro는 2026년 3월 출시 — 이것은 커뮤니티의 초기 벤치마크입니다. whisper.cpp가 M5 Neural Engine을 최적화하는 업데이트에 따라 성능이 향상될 수 있습니다.',
          '**M3 MacBook Air 벤치마크(large-v3, Metal):** ~7배 실시간. 60분을 ~8.5분에.',
          '**메모리:** 통합 메모리는 별도의 VRAM이 없음을 의미합니다 — 16GB M5 Pro는 large-v3(~3GB)를 다른 프로세스와 함께 편안하게 실행할 수 있습니다.',
          '**Mac에서의 faster-whisper:** CPU 전용, int8. Large-v3로 ~3배 실시간 속도. 야간 배치 전사에는 사용 가능하지만, 실시간이나 시간에 민감한 워크플로에는 적합하지 않습니다.',
          '**권장 사항:** Mac에서의 모든 STT 작업에 whisper.cpp를 사용하십시오. Metal 가속을 유지하면서 Python 통합이 필요한 경우 pywhispercpp을 추가하십시오.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper 승',
        content:
          '**NVIDIA GPU를 탑재한 Windows 및 Linux에서는 faster-whisper가 우수한 선택입니다.** CTranslate2의 CUDA 백엔드는 whisper.cpp의 CUDA 경로보다 더 최적화되어 있습니다 — RTX 4070에서 large-v3으로 ~12배 대 ~8배 실시간 속도, 더 낮은 VRAM 사용량.',
        items: [
          '**RTX 4070(12GB) 벤치마크(large-v3 int8):** ~12배 실시간, ~2.5GB VRAM.',
          '**RTX 3060(12GB) 벤치마크(large-v3 int8):** ~8배 실시간, ~2.5GB VRAM.',
          '**RTX 4060(8GB) 벤치마크(large-v3 int8):** ~7배 실시간, ~2.5GB VRAM — 여유 있게 수용됩니다.',
          '**int8 vs float16:** int8은 ~2배 빠르고 VRAM을 ~40% 적게 사용하며 정확도 손실은 무시할 수준입니다. NVIDIA에서는 항상 `compute_type="int8"`을 사용하십시오.',
          '**배치 처리:** faster-whisper의 `batched=True` 파라미터는 여러 오디오 파일의 병렬 처리를 가능하게 하여, 대규모 전사 작업에서 GPU 활용을 극대화합니다.',
          '**Python 파이프라인 통합:** faster-whisper는 LangChain, Haystack 및 커스텀 Python 파이프라인에 직접 통합됩니다. whisper.cpp 래핑과 비교하여 서브프로세스 오버헤드 없음.',
        ],
      },
      whenToUse: {
        id: 'when-to-use',
        title: '어느 것을 사용해야 하는가',
        content: '시나리오에서 적합한 도구로의 직접적인 매핑:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon 및 임베디드/크로스 플랫폼 대상에서는 whisper.cpp를, NVIDIA GPU 및 Python 파이프라인에서는 faster-whisper를 사용하십시오.',
          },
          {
            type: 'plain-terms',
            text: 'Mac이 있다면 whisper.cpp를 선택하십시오 — Apple 하드웨어에서 faster-whisper보다 3배 빠릅니다. NVIDIA GPU가 있고 Python을 작성한다면 faster-whisper를 선택하십시오 — 더 빠르고 GPU 메모리를 40% 덜 필요로 합니다.',
          },
        ],
        columns: ['시나리오', '최선의 선택', '이유'],
        rows: [
          {
            '시나리오': 'Apple Silicon Mac (모든 모델)',
            '최선의 선택': 'whisper.cpp',
            '이유': 'Metal / Core ML 가속 — Mac에서 CPU 전용인 faster-whisper보다 3배 빠름',
          },
          {
            '시나리오': 'NVIDIA GPU 서버 (Linux/Windows)',
            '최선의 선택': 'faster-whisper',
            '이유': 'CTranslate2 int8 — whisper.cpp의 CUDA 경로보다 빠르고 VRAM 적게 사용',
          },
          {
            '시나리오': 'Python 데이터 파이프라인',
            '최선의 선택': 'faster-whisper',
            '이유': '네이티브 Python API; 서브프로세스 래퍼 없음; 내장 VAD',
          },
          {
            '시나리오': 'Raspberry Pi / 임베디드 Linux',
            '최선의 선택': 'whisper.cpp',
            '이유': '순수 C 바이너리; Python 런타임 오버헤드 없음; ARM NEON 최적화',
          },
          {
            '시나리오': '실시간 음성 어시스턴트',
            '최선의 선택': 'whisper.cpp',
            '이유': '낮은 오버헤드의 스트림 모드; Pi / 임베디드에서 Python 없이 동작',
          },
          {
            '시나리오': '배치 전사 (대용량 오디오 파일)',
            '최선의 선택': 'faster-whisper',
            '이유': '배치 추론, GPU 활용, 비동기 Python 통합',
          },
          {
            '시나리오': 'AMD GPU (Vulkan)',
            '최선의 선택': 'whisper.cpp',
            '이유': 'Vulkan 백엔드 지원; faster-whisper는 CUDA 전용',
          },
          {
            '시나리오': 'CPU 전용 Linux 서버',
            '최선의 선택': 'faster-whisper',
            '이유': 'int8 양자화가 x86 CPU에서 ~30% 속도 이점 제공',
          },
        ],
      },
      beyondTools: {
        id: 'beyond-tools',
        title: 'whisper.cpp와 faster-whisper를 넘어서',
        content:
          '두 가지 추가 도구는 Whisper를 두 기본 도구 모두가 기본적으로 제공하지 않는 기능으로 확장합니다: 화자 분리(diarization)와 초고속 GPU 배치 추론.',
        items: [
          '**[WhisperX](https://github.com/m-bain/whisperX):** faster-whisper 기반으로 구축된 WhisperX는 단어 수준 타임스탬프와 화자 분리를 추가합니다 — 어떤 화자가 어떤 단어를 말했는지 식별합니다. 최적 사용 사례: 화자 레이블이 있는 회의 전사, 팟캐스트 편집, 인터뷰 전사. `pip install whisperx`로 설치하고 분리 모델에 대한 Hugging Face 토큰을 제공하십시오.',
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** Flash Attention 2 지원을 추가하는 Hugging Face Transformers 파이프라인 래퍼로, NVIDIA 하드웨어에서 표준 faster-whisper보다 훨씬 빠른 GPU 추론을 제공합니다. 최적 사용 사례: NVIDIA GPU에서 대용량 오디오 파일 배치 처리. Flash Attention 2 호환 GPU 필요(Ampere 이상: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '일반적인 문제 및 해결책',
        content: '가장 자주 발생하는 설정 및 런타임 문제와 직접적인 해결책:',
        items: [
          '**CUDA 버전 불일치:** faster-whisper는 CUDA 11.8 이상이 필요합니다. `nvcc --version`으로 확인하십시오. CUDA가 이전 버전인 경우 드라이버를 업데이트하거나 `cudatoolkit=11.8`을 사용하여 conda 환경에 faster-whisper를 설치하십시오.',
          '**Metal 모델 내보내기 실패:** Xcode Command Line Tools가 설치되어 있는지 확인하십시오 — `xcode-select --install`을 실행합니다. Core ML 내보내기 스크립트는 `coremltools` Python 패키지가 필요합니다: `pip install coremltools`.',
          '**침묵 중 환각:** 두 도구 모두 음성이 없는 오디오 세그먼트에서 반복 채움 토큰을 생성할 수 있습니다. whisper.cpp 스트림 모드에서는 `--no-speech-threshold 0.6`을, faster-whisper의 `model.transcribe()`에서는 `vad_filter=True`를 사용하여 자동으로 음성이 없는 세그먼트를 건너뛰십시오.',
          '**large-v3 메모리 부족:** faster-whisper에서 int8 양자화로 전환하십시오(`compute_type="int8"`) — VRAM을 ~5GB(float16)에서 ~2.5GB로 줄입니다. whisper.cpp에서는 양자화된 GGML 변형을 사용하십시오(예: `ggml-large-v3-q5_0.bin`) — 메모리를 ~3–4GB로 줄입니다.',
          '**영어가 아닌 오디오에서 알아볼 수 없는 출력:** 영어가 아닌 음성에 `.en` 모델 변형(tiny.en, base.en)을 사용하지 마십시오 — 이것들은 영어 전용입니다. 다국어 모델(base, small, medium, large-v3)을 사용하고 언어를 명시적으로 지정하십시오: whisper.cpp에서 `-l ko` 또는 faster-whisper에서 `language="ko"`.',
          '**느린 CPU 추론:** CPU가 AVX2 명령어를 지원하는지 확인하십시오(최적화된 CPU 추론에 필요). Linux에서 `grep avx2 /proc/cpuinfo` 또는 Mac에서 `sysctl machdep.cpu.features`로 확인하십시오. AVX2 없는 CPU는 일반 SIMD로 폴백되어 2–3배 느립니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'whisper.cpp와 faster-whisper의 전사 정확도는 동일합니까?',
            a: '그렇습니다. 두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용합니다 — 모델 자체는 동일합니다. 차이는 추론 런타임(C/C++ vs CTranslate2 Python)에만 있습니다. 동일한 오디오 파일에 대한 WER은 서로 절대값 0.1% 이내로, 이는 beam search 무작위성으로 인한 정상적인 변동 범위 내입니다.',
          },
          {
            q: 'Apple Silicon Mac에서 faster-whisper를 사용할 수 있습니까?',
            a: '예, 하지만 CPU 전용으로만 동작합니다 — faster-whisper는 Metal 지원이 없습니다. M5 Pro에서 faster-whisper large-v3는 ~3배 실시간 속도(CPU int8)로 동작하며, Metal을 사용하는 whisper.cpp의 ~10배와 비교됩니다. 대부분의 Mac 사용자에게 whisper.cpp는 동일한 모델로 3배 더 빠릅니다. Mac에서 faster-whisper를 사용하는 유일한 이유는 Python 파이프라인이 이미 이에 의존하고 있으며 속도가 중요하지 않은 경우입니다.',
          },
          {
            q: '음성 어시스턴트에 어떤 Whisper 모델 크기를 사용해야 합니까?',
            a: '실시간 음성 인터페이스의 경우, Whisper small이 표준 권장 사항입니다 — 깨끗한 영어에서 3.4% WER, 현대적인 CPU 또는 GPU에서 ~200ms STT 지연 시간, 2GB RAM에 수용됩니다. 하드웨어가 매우 제한된 경우(Raspberry Pi Zero 2W, 구형 전화기) ~7.6% WER을 허용할 수 있다면 tiny를 사용하십시오. 지연 시간이 제약이 아닌 배치 전사의 경우에만 medium 또는 large-v3를 사용하십시오.',
          },
          {
            q: 'whisper.cpp는 영어 외의 언어를 지원합니까?',
            a: '그렇습니다. 모든 다국어 Whisper 모델(base, small, medium, large-v3)은 99개 언어를 지원합니다. CLI에 `-l [언어 코드]`를 추가하십시오: 한국어는 `-l ko`, 독일어는 `-l de`, 일본어는 `-l ja` 등. tiny.en 및 base.en 모델은 영어 전용이며 다국어 대응물보다 영어에서 약간 더 정확합니다.',
          },
          {
            q: 'CUDA 지원을 포함하여 faster-whisper를 어떻게 설치합니까?',
            a: '`pip install faster-whisper`로 설치합니다. CUDA 지원은 시스템에 CUDA 11.8 이상과 cuDNN 8.x가 설치되어 있어야 합니다. `nvcc --version`으로 CUDA 버전을 확인하십시오. 그런 다음 모델 로딩 시 `device="cuda"`를 지정합니다: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. CUDA가 감지되지 않으면 faster-whisper는 자동으로 CPU로 폴백합니다.',
          },
          {
            q: 'whisper.cpp와 faster-whisper 중 어느 것이 더 정확합니까?',
            a: '동일합니다. 두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용하며 동일한 오디오 파일에 대해 동일한 WER을 생성합니다. whisper.cpp와 faster-whisper의 차이점은 속도와 플랫폼 지원이지 전사 정확도가 아닙니다. 실행 간에 측정되는 WER 차이는 런타임 자체에서 비롯된 것이 아니라 beam search의 정상적인 변동 범위 내에 있습니다.',
          },
          {
            q: '8GB RAM으로 Whisper large-v3를 실행할 수 있습니까?',
            a: 'GPU에서는 가능합니다 — faster-whisper의 large-v3 int8은 ~2.5GB VRAM을 사용하며 8GB GPU에서 동작합니다. CPU 전용 하드웨어에서 8GB RAM은 large-v3(float32는 ~10GB 사용)에 빠듯합니다. CPU 전용 시스템에서는 medium(5GB RAM) 또는 small(2GB RAM)을 사용하십시오. whisper.cpp는 런타임 오버헤드가 적어 CPU에서 faster-whisper보다 메모리 효율이 높습니다.',
          },
          {
            q: '로컬 Whisper vs 클라우드 STT의 비용은 얼마입니까?',
            a: '지속적인 비용은 없습니다. 클라우드 STT 서비스는 오디오 분당 $0.006–$0.024를 부과합니다 — 주당 8시간 회의를 전사하는 개발자에게는 월 $120–480입니다. 로컬 Whisper는 이미 소유한 하드웨어에서 동작하며, 분당 요금 없고, API 키 관리 없고, 오디오 데이터가 기기를 떠나지 않습니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '참고 자료',
        items: [
          '[GitHub의 whisper.cpp](https://github.com/ggerganov/whisper.cpp) — 소스 코드, 빌드 지침, 모델 다운로드 스크립트, Metal/Core ML 설정 가이드.',
          '[GitHub의 faster-whisper](https://github.com/SYSTRAN/faster-whisper) — 소스 코드, Python API 문서, 벤치마크 결과.',
          '[Hugging Face의 distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) — 모델 카드, 벤치마크 결과, 증류된 Whisper 변형 사용 지침.',
          '[GitHub의 WhisperX](https://github.com/m-bain/whisperX) — faster-whisper 기반 단어 수준 타임스탬프 및 화자 분리.',
          '[GitHub의 insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) — NVIDIA GPU 최대 처리량을 위한 Whisper Flash Attention 2 파이프라인.',
          '[GitHub의 OpenAI Whisper](https://github.com/openai/whisper) — 원본 Whisper 모델, 논문, 모든 크기의 모델 카드.',
          '[OpenAI Whisper 논문 (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". WER 값의 출처.',
          '[CTranslate2 문서](https://github.com/OpenNMT/CTranslate2) — 양자화 세부 사항, 하드웨어 지원, int8 최적화 기초.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 로컬 TTS 및 음성 복제: Piper vs Coqui vs XTTS v2](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS 보완 가이드: 전사된 텍스트를 오프라인으로 다시 음성으로 변환합니다.',
          '[2026년 완전 오프라인 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026) — Whisper STT를 로컬 LLM과 Piper TTS에 연결하여 완전한 음성 파이프라인을 만듭니다.',
          '[2026년 로컬 멀티모달 AI 파이프라인](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — STT 및 TTS와 함께 비전 모델을 추가하여 완전한 로컬 멀티모달 스택을 구성합니다.',
          '[2026년 로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide-2026) — 완전한 음성 + LLM 파이프라인을 위한 GPU 및 RAM 요구 사항.',
          '[스마트폰에서 로컬 음성 어시스턴트 구축](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 모바일 버전: iPhone의 WhisperKit, Android의 Layla.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp vs faster-whisper 2026: 로컬 STT 벤치마크, 설정 및 GPU 가속',
      description: '2026년 로컬 음성 인식을 위한 whisper.cpp와 faster-whisper 비교. WER 벤치마크, GPU vs CPU 속도, Apple Silicon Metal, 실시간 전사, 설치 가이드. 완전 오프라인 동작.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-whisper-stt-comparison-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-05-14',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp vs faster-whisper 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-whisper-stt-comparison-2026' },
      ],
    },
  },

