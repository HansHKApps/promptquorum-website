// Power Local LLM — Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper
// Slug: local-whisper-stt-comparison
// Category: Voice, Speech & Multimodal

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: Local STT Benchmarks, Setup & GPU Acceleration',
    seoTitle: 'whisper.cpp vs faster-whisper vs Whisper 2026: CPU/GPU',
    intro:
      'whisper.cpp and faster-whisper are the two dominant implementations of OpenAI\'s Whisper speech-to-text model for local, offline transcription in 2026. whisper.cpp is a pure C/C++ port that runs on Apple Metal, CUDA, Vulkan, and CPU — making it ideal for Apple Silicon, embedded systems, and real-time voice applications. faster-whisper is a Python library using CTranslate2 that, according to its README, is up to 4× faster than the original Whisper at the same accuracy. This guide covers installation, performance benchmarks, real-time transcription setup, and a head-to-head comparison across platforms so you can pick the right tool for your pipeline.',
    metaDescription:
      'faster-whisper is up to 4x faster than OpenAI Whisper; whisper.cpp adds Apple Metal. CPU vs GPU timings, VRAM and WER from published benchmarks.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-en.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Use whisper.cpp on Apple Silicon and embedded devices, and faster-whisper on NVIDIA GPUs and in Python pipelines — both run the same OpenAI Whisper weights, so accuracy is essentially the same and mainly speed and integration differ.**',
    quickAnswerTop: {
      en: {
        question: 'Should I use whisper.cpp or faster-whisper for local speech-to-text in 2026?',
        answer:
          'The choice depends on your hardware and integration needs. On Apple Silicon, whisper.cpp with Metal and Core ML is the natural choice because faster-whisper has no Metal backend. On NVIDIA GPUs, faster-whisper was faster in the published tests we found (23× vs 15× real-time for large-v3 on an RTX 4070 Ti, third-party test) and is easier to integrate into Python pipelines. On CPU-only hardware, published results disagree, so time your own audio.',
        bullets: [
          'Apple Silicon → whisper.cpp with Core ML / Metal; faster-whisper has no Metal backend.',
          'NVIDIA GPU → faster-whisper. Third-party RTX 4070 Ti test, large-v3: 23× real-time vs 15× for whisper.cpp CUDA.',
          'Python pipeline → faster-whisper. Native Python, 5-line setup, VAD built in.',
          'Embedded / Raspberry Pi 5 → whisper.cpp. Pure C binary, no Python runtime; tiny/base run in real time, small is batch-only.',
          'Real-time voice → whisper.cpp stream mode or faster-whisper VAD pipeline.',
          'Batch transcription → faster-whisper. Best throughput on GPU; easy async batching.',
          'WER accuracy: expected to be very close — both use the same Whisper model weights (quantization and decoding settings can cause small differences).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Local Speech-to-Text?', anchor: '#why-local-stt' },
      { label: 'Whisper Model Sizes', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: The Faster Alternative', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — The C/C++ Port', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp Latest Version & Updates', anchor: '#whats-new' },
      { label: 'faster-whisper — The CTranslate2 Port', anchor: '#faster-whisper' },
      { label: 'Get ggml-base.bin via pip (Python Setup)', anchor: '#install-ggml-pip' },
      { label: 'Head-to-Head Benchmark Table', anchor: '#benchmarks' },
      { label: 'Reference Benchmark: GPU vs CPU Timings', anchor: '#reference-benchmark' },
      { label: 'Real-Time Transcription Setup', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp Is the Natural Fit', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper Leads in Published Tests', anchor: '#nvidia-gpu' },
      { label: 'Older NVIDIA GPUs (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper on Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp is the natural local STT choice for Apple Silicon.** The C/C++ port uses Core ML and Apple Metal for hardware acceleration — its README reports the Core ML encoder at more than 3× faster than CPU-only execution (developer-reported) — and needs no Python.',
          '**faster-whisper was faster on NVIDIA GPUs in the published tests we found, and it fits Python pipelines.** In the faster-whisper README test, int8 cut VRAM from 4708 MB (OpenAI Whisper fp16) to 2926 MB (large-v2, RTX 3070 Ti, developer-reported); a third-party RTX 4070 Ti test measured 23× real-time vs 15× for whisper.cpp CUDA (large-v3).',
          '**Both tools use identical Whisper model weights from OpenAI.** Accuracy should therefore be very close — the main differences are runtime performance and integration pathway; small WER differences can still arise from quantization and decoding settings, which we did not measure.',
          '**Whisper large-v3 gives the best accuracy at 2.5% WER on English.** For most production use cases, Whisper small (3.4% WER, 2 GB RAM) or medium (2.9% WER, 5 GB RAM) offers a better speed-accuracy trade-off.',
          '**Real-time transcription is achievable with both tools** — whisper.cpp via its `--stream` flag, faster-whisper via its built-in VAD (voice activity detection) pipeline. How far the text lags behind live speech varies by hardware and model size; we did not measure it.',
          '**whisper.cpp runs on CPU, Metal, CUDA, and Vulkan** — making it the practical choice for cross-platform embedded use (Raspberry Pi, Windows GPU setups, ARM servers). faster-whisper supports CPU and CUDA only (no Metal on Mac).',
          '**For Raspberry Pi 5 and embedded Linux, whisper.cpp tiny and base on CPU** are the real-time-capable models — tiny runs comfortably faster than real-time, base around real-time with `-t 4`. The small model (3.4% WER) runs below real-time on the Pi 5 and is best for batch jobs. All inference is CPU (ARM NEON) — the Pi has no usable GPU path for Whisper. These Pi 5 figures are community-reported, not our own measurements.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Both tools:** Based on OpenAI\'s open-source Whisper model (MIT license). Same model weights, so similar accuracy — different runtimes.',
          '**whisper.cpp:** Written in C/C++ by ggerganov. Supports CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. No Python required.',
          '**faster-whisper:** Python library using CTranslate2. Supports CPU (int8) and CUDA. No Apple Metal support.',
          '**Whisper model sizes:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1.55B). All use the same ggml / CTranslate2 format.',
          '**Best model for most use cases:** Whisper small — 3.4% WER and about 2 GB of memory; step up to medium or large-v3 when accuracy matters more than speed.',
          '**NVIDIA GPU (large-v3, third-party test, RTX 4070 Ti):** faster-whisper 23× real-time; whisper.cpp CUDA 15× real-time.',
          '**Apple Silicon:** whisper.cpp runs on Metal and Core ML (README: Core ML encoder more than 3× faster than CPU-only); faster-whisper has no Metal backend. We found no published M5 Pro large-v3 benchmark.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Why Local Speech-to-Text?',
        content:
          'Cloud STT services (Google Speech-to-Text, AWS Transcribe, Azure Speech) charge per audio minute — typically $0.006–$0.024/minute — and send your audio to remote servers. For privacy-sensitive applications (medical dictation, legal recordings, journalist interviews, corporate meetings), local transcription avoids sending audio to a third-party service.',
        items: [
          '**Privacy:** Both tools can run locally without sending audio to a cloud service, so no cloud processor needs to be involved in transcription. Data-protection duties such as legal basis and secure storage still apply to you.',
          '**Cost:** No per-minute fees. At typical cloud list prices of $0.006–$0.024 per minute (check current provider pricing), a developer transcribing 8 hours of meetings per week would pay roughly $12–50/month, a cost that local transcription avoids (hardware and electricity not included).',
          '**Offline:** Works on planes, in secure facilities, in areas without reliable internet. No API key management.',
          '**Latency:** No upload/download round-trip. For real-time voice interfaces, local processing can reduce STT latency compared with a cloud round-trip; the gain depends on your network and hardware.',
          '**Customization:** Fine-tune on domain-specific vocabulary. Run any model size that fits your hardware.',
          '**Home assistant integration:** Whisper can run locally without sending audio to a cloud service, so wake words and voice commands can stay on your home network. See [local Whisper in Home Assistant →](/smart-home/local-whisper-home-assistant) for the add-on setup that replaces cloud STT entirely.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper Model Sizes — Foundation for Both Tools',
        content:
          'Both whisper.cpp and faster-whisper use the same Whisper model weights, converted to their respective formats (GGML for whisper.cpp, CTranslate2 for faster-whisper). Choose your model size based on your VRAM/RAM budget and accuracy requirements.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-en.webp',
          imageCaption: 'Whisper model sizes shared by whisper.cpp and faster-whisper, from tiny to large-v3.',
          imageAlt: 'Poster titled Whisper Model Sizes: Speed vs Accuracy, noting tiny is about 10 times faster than large, large-v3 is slowest and most accurate, and speeds come from the OpenAI README on an A100',
        columns: ['Model', 'Parameters', 'VRAM / RAM', 'English WER', 'Relative speed (vs large)'],
        rows: [
          {
            'Model': 'tiny',
            'Parameters': '39M',
            'VRAM / RAM': '~1 GB',
            'English WER': '7.6%',
            'Relative speed (vs large)': '~10×',
          },
          {
            'Model': 'base',
            'Parameters': '74M',
            'VRAM / RAM': '~1 GB',
            'English WER': '5.0%',
            'Relative speed (vs large)': '~7×',
          },
          {
            'Model': 'small',
            'Parameters': '244M',
            'VRAM / RAM': '~2 GB',
            'English WER': '3.4%',
            'Relative speed (vs large)': '~4×',
          },
          {
            'Model': 'medium',
            'Parameters': '769M',
            'VRAM / RAM': '~5 GB',
            'English WER': '2.9%',
            'Relative speed (vs large)': '~2×',
          },
          {
            'Model': 'large-v3',
            'Parameters': '1.55B',
            'VRAM / RAM': '~10 GB',
            'English WER': '2.5%',
            'Relative speed (vs large)': '1× (baseline)',
          },
          {
            'Model': 'distil-large-v3',
            'Parameters': '~756M',
            'VRAM / RAM': '~4 GB',
            'English WER': '~2.6%',
            'Relative speed (vs large)': '~6.3×',
          },
        ],
        note: 'WER (word error rate), lower is better. The tiny, base, small and medium figures are from the Whisper paper (Radford et al., 2022, Appendix D.1.1, LibriSpeech test-clean, greedy decoding). The paper does not cover large-v3 or distil-large-v3, so their figures are approximate and not directly comparable. Relative speeds are OpenAI\'s published values from the Whisper README, measured on an A100 against the large model (developer-reported); real-world speed varies with hardware. distil-large-v3 is 6.3× faster than large-v3 per its model card.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: The Faster Alternative',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) is a distilled variant of large-v3 with ~50% fewer parameters, running 6.3× faster while keeping WER within ~1% of the original.** It is the right choice when transcription speed matters more than squeezing out the last fraction of accuracy. distil-large-v3 works with both faster-whisper (native CTranslate2 support) and whisper.cpp (via GGML format conversion), so it integrates into whichever runtime you already use.',
        items: [
          '**Parameters:** ~756M — roughly half of large-v3\'s 1.55B, fitting in ~4 GB VRAM instead of ~10 GB.',
          '**Speed:** 6.3× faster than large-v3 according to the model card (relative latency, not a real-time factor), with WER within about 1% of large-v3 on long-form audio.',
          '**WER:** ~2.6% on English — only ~0.1% higher than large-v3\'s 2.5%. The difference may be hard to notice on typical speech, but we did not test it.',
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
          '**Apple Silicon advantage:** whisper.cpp exports models to Core ML format, enabling inference on the Apple Neural Engine. Its README reports the Core ML encoder at more than 3× faster than CPU-only execution (developer-reported).',
          '**Installation:** Clone the repo, run `make` (or `cmake`). Pre-built binaries available for common platforms. No Python dependency.',
          '**Model download:** `bash ./models/download-ggml-model.sh base.en` — downloads the GGML-format model file (~142 MB for base).',
          '**CLI example:** `./main -m models/ggml-base.bin -f audio.wav` — transcribes a WAV file to stdout. Add `-l de` for German.',
          '**Real-time stream mode:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcribes from microphone in 3-second chunks.',
          '**Python wrapper:** pywhispercpp provides a Python binding for whisper.cpp, enabling use in Python pipelines without sacrificing Metal acceleration.',
          '**VAD:** whisper.cpp supports optional Silero voice activity detection via `--vad` in `whisper-cli` (it needs a separate VAD model download). Stream mode still requires tuning `--step` and `--length` for your use case.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp Latest Version & Updates',
        content:
          '**The latest whisper.cpp release is v1.9.5, published October 6, 2026.** It syncs the bundled ggml library to v0.26.0 with backend work across CUDA, Vulkan, Metal, SYCL, OpenCL and CPU kernels, and adds Whisper fixes such as an abort callback during language detection and an integer-overflow fix in parallel chunk offsets. whisper.cpp is also packaged officially for Debian (sid) as `whisper.cpp` / `libwhisper-dev` / `libwhisper1`, alongside the long-standing unofficial Snap. faster-whisper\'s latest tagged release is still v1.2.1 (October 31, 2025), but the repository is actively maintained: its latest commit was on November 2, 2026 (checked November 3, 2026). Both runtimes still load the same OpenAI Whisper weights; we are not aware of a new model class that changed transcription accuracy in 2026.',
        items: [
          '**whisper.cpp v1.9.5 (October 6, 2026):** Syncs ggml to v0.26.0 with CUDA, Vulkan, Metal, SYCL, OpenCL, WebGPU and CPU kernel updates, adds an abort callback during language detection, fixes an integer overflow in parallel chunk offsets, and makes the CLI return the correct error code when a file fails.',
          '**whisper.cpp v1.9.4 (September 11, 2026):** The server now returns the detected language, the encoder callback runs before language auto-detection, and Windows on ARM was added to the release job.',
          '**whisper.cpp v1.9.3 (August 20, 2026):** Syncs ggml to v0.20.2 with backend-wide performance improvements, Metal TQ2_0 quantization support, fused CUDA/SYCL kernels, and ARM/WASI fixes.',
          '**whisper.cpp v1.9.0–v1.9.2 (June–August 2026):** Point releases continuing the same ggml-sync and cross-backend performance line ahead of v1.9.3.',
          '**whisper.cpp v1.8.6 (June 2, 2026):** Reimplemented `ffmpeg-transcode` for clearer optional FFmpeg decoding of compressed audio (MP3, M4A) plus a CI examples-path fix.',
          '**whisper.cpp v1.8.5 (May 2026):** Streaming VAD (voice activity detection) improvements, server parameter-leak and token-timestamp fixes, and memory-leak fixes in the Ruby and VAD bindings.',
          '**whisper.cpp v1.8.4 (March 19, 2026):** Latest `ggml` sync with broad performance gains, a new `-g` / `--gpu-device` flag (and `GGML_CUDA` device selection) to pick a GPU, and UTF-8 segment-wrapping fixes.',
          '**Native VAD is now built into whisper.cpp.** Recent releases added a native voice-activity-detection path, narrowing a long-standing faster-whisper advantage — though faster-whisper\'s Silero VAD integration remains more turnkey.',
          '**faster-whisper v1.2.1 (October 31, 2025):** Latest tagged release; `pip install faster-whisper` pulls it. There is no tagged release in 2026, but the main branch is active: its latest commit (November 2, 2026, checked November 3, 2026) fixes CI, and commits from October 16, 2026 add input validation, such as an error for languages a model does not support. v1.2.0 (August 2025) added distil-large-v3.5 support.',
          '**CTranslate2 v4.8.4 (October 25, 2026):** The inference engine under faster-whisper shipped another release. It adds guards against integer overflow in tensor size computation, fixes for CPU Conv1D and for INT8 quantization-scale overflow on tiny weight rows, and an experimental offline text-to-speech implementation (Drama 3). The v4.8.3 release before it (October 13, 2026) added Windows ROCm fixes, load-time hardening, and a fix for a division by zero in Whisper `align()` when a window has no frames. v4.8.5 followed on November 2, 2026 (checked November 3, 2026) with CUDA attention-precision fixes and a Windows ROCm/HIP build guide.',
          '**No new accuracy-class Whisper model in 2026.** OpenAI\'s newest multilingual weights remain large-v3-turbo (October 2024; 809M parameters, decoder cut from 32 to 4 layers, MIT license), which trades a small quality loss for much higher speed and runs in both tools. distil-large-v3 stays the English-only speed option. As far as we know, updates to either runtime are runtime and tooling changes, not accuracy changes.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — The CTranslate2 Port',
        content:
          '**faster-whisper (by SYSTRAN) is a Python library that reimplements Whisper inference using CTranslate2 — a highly optimized C++ inference engine that supports int8 quantization, reducing VRAM usage and increasing throughput.** On NVIDIA GPUs, faster-whisper ranks among the fastest local Whisper implementations in published tests.',
        items: [
          '**Platform support:** CPU (int8 quantization) and NVIDIA CUDA GPU. No Apple Metal support — runs CPU-only on Mac.',
          '**int8 advantage:** CTranslate2 int8 quantization cut VRAM by about a third in the faster-whisper README test (4525 MB at fp16 vs 2926 MB at int8, large-v2) with a small speed gain (1m03s vs 59s); the WER impact is usually negligible.',
          '**Installation:** `pip install faster-whisper` — no compilation required (Python 3.9+). GPU use needs NVIDIA cuBLAS for CUDA 12 and cuDNN 9; older CUDA 11 / cuDNN 8 setups must pin an older `ctranslate2` (3.24.0).',
          '**Built-in VAD:** faster-whisper includes Silero VAD integration, which automatically skips silent audio segments — critical for real-time transcription pipelines.',
          '**Python-native:** Direct Python API makes it trivial to chain with LLMs, audio processing libraries, and web frameworks.',
          '**Speed:** in the README test (large-v2, RTX 3070 Ti, 13-minute file) int8 finished in 59 s and int8 with batch size 8 in 16 s; a third-party RTX 4070 Ti test measured 23× real-time for large-v3.',
          '**Batch processing:** faster-whisper supports batched inference for processing large audio archives efficiently.',
          '**Limitation:** No Metal support on Mac — it runs CPU-only on Apple Silicon. We found no published faster-whisper vs whisper.cpp benchmark on Apple Silicon.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'Get ggml-base.bin via pip (Python Setup)',
        content:
          '**To use ggml-base.bin from Python via pip, install the `pywhispercpp` binding — `pip install pywhispercpp` — then load `Model("base")`, which downloads `ggml-base.bin` automatically on first run.** There is no `pip install whisper.cpp`; pywhispercpp is the pip wrapper around the whisper.cpp C/C++ engine, and it keeps Metal and CUDA acceleration. The GGML model file (`ggml-base.bin`, ~142 MB) is downloaded separately from Hugging Face and cached locally — the pip package ships the inference engine, not the weights.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Run `pip install pywhispercpp`, then `Model("base")` in Python fetches and caches ggml-base.bin automatically on first use.',
          },
          {
            type: 'plain-terms',
            text: 'pip installs the program (pywhispercpp); the ggml-base.bin model file is a separate ~142 MB download that happens the first time you load the "base" model — or that you grab by hand with the download-ggml-model.sh script.',
          },
        ],
        items: [
          '**Install the binding:** `pip install pywhispercpp`. For NVIDIA CUDA acceleration, build with `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`.',
          '**Auto-download ggml-base.bin:** `from pywhispercpp.model import Model` then `model = Model("base")` downloads `ggml-base.bin` from Hugging Face (`ggerganov/whisper.cpp`) on first run and caches it. Use `"base.en"` for the English-only variant.',
          '**Manual download (CLI route, no pip):** From a cloned whisper.cpp repo, `bash ./models/download-ggml-model.sh base` saves the file to `models/ggml-base.bin` — the same file pywhispercpp fetches.',
          '**Direct download:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` pulls the model with no script. Swap `base` for `tiny`, `small`, `medium`, or `large-v3`.',
          '**Do not confuse the packages:** `pip install openai-whisper` installs OpenAI\'s original PyTorch Whisper (it uses `.pt` checkpoints, not `ggml-base.bin`). `pip install faster-whisper` uses the CTranslate2 format. Only `pywhispercpp` consumes GGML `ggml-*.bin` files.',
          '**Where the file lives:** pywhispercpp stores downloaded GGML models under its module cache (or a path you pass via `Model("base", models_dir="...")`), so the same `ggml-base.bin` is reused across runs — no re-download.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Head-to-Head Benchmark Table',
        content:
          'Each row names its source and hardware. Speed is shown in multiples of real-time (10× means 60 minutes of audio transcribed in 6 minutes). Third-party rows come from the [x2q.net backend shootout](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti and Intel Core i5-13400F, large-v3, Danish phone-call audio, June 2026); README rows come from the faster-whisper README (RTX 3070 Ti, large-v2). Hardware and audio differ between sources, so read the rows as indicators, not as one head-to-head on a single machine.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-en.webp',
          imageCaption: 'whisper.cpp and faster-whisper compared by platform: Apple Silicon, NVIDIA GPU and CPU.',
          imageAlt: 'Poster titled whisper.cpp vs faster-whisper by Platform: Apple Silicon favors whisper.cpp with Metal, both run CUDA on NVIDIA GPUs, and published CPU results disagree',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'In a third-party RTX 4070 Ti test, faster-whisper ran large-v3 at 23× real-time against 15× for whisper.cpp CUDA; on Apple Silicon only whisper.cpp can use Metal.',
          },
          {
            type: 'plain-terms',
            text: 'Pick whisper.cpp on a Mac, where it can use Metal and Core ML, and faster-whisper on Windows/Linux with an NVIDIA GPU, where it was faster in the published tests and used less VRAM with int8 (2926 MB vs 4127 MB for whisper.cpp fp16 in the README test).',
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
            'Metric': 'Speed — RTX 4070 Ti, large-v3 (3rd-party)',
            'whisper.cpp (large-v3)': '~15× real-time',
            'faster-whisper (large-v3)': '~23× real-time ✓',
          },
          {
            'Metric': 'Speed — Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (no benchmark found)',
            'faster-whisper (large-v3)': 'CPU only (no benchmark found)',
          },
          {
            'Metric': 'Speed — x86 CPU, large-v3 (3rd-party)',
            'whisper.cpp (large-v3)': '~15× real-time ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2× real-time (i5-13400F)',
          },
          {
            'Metric': 'VRAM — large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'Metric': 'Python integration',
            'whisper.cpp (large-v3)': 'Needs wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Native ✓',
          },
          {
            'Metric': 'VAD (silence detection)',
            'whisper.cpp (large-v3)': 'Optional (--vad + Silero model)',
            'faster-whisper (large-v3)': 'Built-in (Silero VAD) ✓',
          },
          {
            'Metric': 'Real-time streaming',
            'whisper.cpp (large-v3)': 'Yes (--stream flag) ✓',
            'faster-whisper (large-v3)': 'Yes (VAD pipeline)',
          },
          {
            'Metric': 'WER accuracy (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (same weights)',
            'faster-whisper (large-v3)': '2.5% (same weights)',
          },
          {
            'Metric': 'Python dependency',
            'whisper.cpp (large-v3)': 'None ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'Metric': 'Raspberry Pi / embedded',
            'whisper.cpp (large-v3)': 'Yes — C binary ✓',
            'faster-whisper (large-v3)': 'Possible — needs a Python runtime',
          },
          {
            'Metric': 'Output formats',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python objects (start, end, text)',
          },
        ],
        note: 'whisper.cpp writes output directly to standard subtitle and transcript file formats (SRT, VTT, JSON, CSV, txt) — ideal for subtitle workflows where you need a file on disk with no additional code. faster-whisper yields a Python generator of segment objects with `start`, `end`, and `text` attributes — ideal for LLM pipeline chaining, where you pass segment text directly into a downstream model without writing intermediate files. For subtitle generation, whisper.cpp is simpler. For pipelines that process segments programmatically, faster-whisper is simpler.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'Reference Benchmark: GPU vs CPU Timings from faster-whisper',
        content:
          '**The faster-whisper project publishes its own timings on a 13-minute audio file — they show whisper.cpp with Flash Attention matching faster-whisper fp16 on a GPU, while batching and int8 are where faster-whisper pulls ahead.** The figures below come from the faster-whisper README (large-v2 on an RTX 3070 Ti 8 GB with CUDA 12.4 for the GPU rows; the small model on an Intel Core i7-12700K with 8 threads for the CPU rows; beam size 5). They are not our own measurements and use different hardware and models than the large-v3 figures above.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'In the faster-whisper README benchmark, whisper.cpp with Flash Attention (1m05s) and faster-whisper fp16 (1m03s) are nearly tied on a GPU; faster-whisper int8 with batching finishes the same 13-minute file in 16 seconds.',
          },
        ],
        columns: ['Setup', 'Precision', 'Time', 'VRAM / RAM'],
        rows: [
          {
            'Setup': 'GPU · OpenAI Whisper',
            'Precision': 'fp16',
            'Time': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'Setup': 'GPU · whisper.cpp (Flash Attn)',
            'Precision': 'fp16',
            'Time': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'Setup': 'GPU · faster-whisper',
            'Precision': 'fp16',
            'Time': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'Setup': 'GPU · faster-whisper',
            'Precision': 'int8',
            'Time': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'Setup': 'GPU · faster-whisper, batch 8',
            'Precision': 'int8',
            'Time': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'Setup': 'CPU · OpenAI Whisper',
            'Precision': 'fp32',
            'Time': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'Setup': 'CPU · whisper.cpp',
            'Precision': 'fp32',
            'Time': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'Setup': 'CPU · faster-whisper',
            'Precision': 'int8',
            'Time': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'Setup': 'CPU · faster-whisper, batch 8',
            'Precision': 'int8',
            'Time': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'Read this next to the head-to-head table: single-stream fp16 GPU speed is close between the two tools on this setup. faster-whisper\'s lasting advantages are int8 memory savings (2.9 GB vs 4.1–4.5 GB at fp16) and batched inference (16 s vs 59 s). On CPU, whisper.cpp fp32 and faster-whisper int8 are within roughly 25% of each other without batching. The README\'s OpenAI Whisper rows give the baseline: 2m23s on the GPU (fp16, 4708 MB) and 6m58s on the CPU (fp32, 2335 MB), against 59s and 1m42s for faster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Real-Time Transcription Setup',
        content:
          '**Real-time transcription processes audio in chunks as it arrives from a microphone, producing text with a short lag behind speech.** Both tools support this, but with different trade-offs.',
        items: [
          '**whisper.cpp stream mode:** Run `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Processes 3-second audio chunks; lag varies by hardware and model, not measured by us. No Python needed.',
          '**faster-whisper VAD pipeline:** Use `vad_filter=True` in `model.transcribe()`. Silero VAD automatically segments audio at silence boundaries — more natural chunks than fixed-length windows.',
          '**Latency:** varies by hardware and model size and is not measured by us. Smaller models such as tiny typically respond faster but with a higher WER.',
          '**Model selection for real-time:** small or base is the practical sweet spot — fast enough to keep up with speech, accurate enough for clean audio. Avoid large-v3 for real-time unless you have a dedicated GPU.',
          '**Microphone input:** whisper.cpp reads raw audio via SDL2 or portaudio. faster-whisper reads audio arrays from any Python audio library (sounddevice, pyaudio, soundfile).',
          '**Stability:** whisper.cpp stream mode can produce repeated tokens ("hallucinate" short fillers) on silence. Suppress with `--suppress-blank` and `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp Is the Natural Fit',
        content:
          '**On M1 to M5 Macs, whisper.cpp with Core ML / Metal acceleration is the natural tool, because faster-whisper has no Metal backend and runs CPU-only on Mac.** The whisper.cpp README reports the Core ML encoder at more than 3× faster than CPU-only execution (developer-reported). We found no published M5 Pro benchmark for large-v3, so this guide quotes no real-time factor for Apple chips.',
        items: [
          '**Core ML export:** Run `./models/generate-coreml-model.sh large-v3` to export the encoder to Core ML format. This offloads encoder inference to the Apple Neural Engine.',
          '**Benchmarks:** the whisper.cpp project collects timings in its [benchmark discussion](https://github.com/ggml-org/whisper.cpp/discussions/89) (encoder timings; no M5 entries when we checked). We found no published M5 Pro large-v3 benchmark, so this guide quotes no real-time factor for Apple chips.',
          '**Measure your own Mac:** whisper.cpp ships a `whisper-bench` tool that times the encoder; or time a real file end to end. Results vary with chip, model size and quantization.',
          '**Memory:** Unified memory means no separate VRAM. The whisper.cpp README lists about 3.9 GB of memory for the large model, which leaves room on a 16 GB Mac for other processes.',
          '**faster-whisper on Mac:** CPU-only (int8). Usable for batch transcription, but it has no Metal path and we found no benchmark against whisper.cpp on Apple Silicon.',
          '**Recommendation:** Use whisper.cpp for most Mac STT work. Add pywhispercpp if you need Python integration while retaining Metal acceleration.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper Leads in Published Tests',
        content:
          '**On Windows and Linux with NVIDIA GPUs, faster-whisper was the faster tool in the published tests we found.** In a third-party RTX 4070 Ti test (large-v3, June 2026) it ran at 23× real-time against 15× for whisper.cpp CUDA; in the faster-whisper README test (large-v2, RTX 3070 Ti) the two were nearly tied in single-stream mode (1m03s vs 1m05s), and int8 plus batching is where faster-whisper pulled ahead.',
        items: [
          '**RTX 4070 Ti (12 GB), large-v3, third-party test:** faster-whisper 23× real-time (large-v3-turbo: 56×); whisper.cpp CUDA 15× (large-v3-turbo: 40×).',
          '**RTX 3070 Ti (8 GB), large-v2, faster-whisper README:** a 13-minute file took 1m03s at fp16, 59s at int8 (2926 MB VRAM) and 16s at int8 with batch size 8.',
          '**Other cards (RTX 3060, RTX 4060):** we found no published large-v3 benchmark for these and quote no speed figure; the int8 VRAM figure above is the main fit check.',
          '**int8 vs float16:** in the README test int8 used about a third less VRAM (2926 MB vs 4525 MB) and finished slightly sooner (59s vs 1m03s), with usually negligible accuracy loss. `compute_type="int8"` is a sensible default on NVIDIA.',
          '**Batch processing:** faster-whisper\'s `batched=True` parameter enables parallel processing of multiple audio files, maximizing GPU utilization for large transcription jobs.',
          '**Python pipeline integration:** faster-whisper slots directly into LangChain, Haystack, and custom Python pipelines. No subprocess overhead vs. wrapping whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'Older NVIDIA GPUs (GTX 970): int8 Falls Back to float32',
        content:
          '**On a GTX 970 (Maxwell, compute capability 5.2), faster-whisper still runs on CUDA, but `compute_type="int8"` does not give you int8 — CTranslate2 converts the weights to float32.** Its quantization table maps every GPU at compute capability 6.0 or lower to float32 for any requested type, so the VRAM saving and the int8 speedup quoted for RTX cards do not apply.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'On a GTX 970 (compute capability 5.2), faster-whisper runs on CUDA in float32 only — a requested int8 compute type is converted automatically.',
          },
          {
            type: 'plain-terms',
            text: 'The GTX 970 is too old for GPU int8. It still works, but you get no memory savings, so stay with the tiny, base or small models on its 4 GB.',
          },
        ],
        items: [
          '**What still works:** CTranslate2\'s prebuilt binaries support NVIDIA GPUs with compute capability 3.5 or higher, so a GTX 970 (5.2) can run faster-whisper on CUDA, provided your installed CUDA and cuDNN libraries match the release (see Common Issues).',
          '**Where GPU int8 works:** int8 needs compute capability 7.0 or higher (Volta and RTX 20-series onward) or exactly 6.1 (GTX 1050 to 1080 Ti, int8_float32). Compute capability 6.0, 6.2 and everything below fall back to float32; float16 needs 7.0 or higher.',
          '**Memory consequence:** float32 stores 4 bytes per parameter against 1 byte for int8, so by parameter count large-v3 (1.55B) needs roughly 6 GB for weights alone — more than the GTX 970\'s 4 GB. Small (244M, about 1 GB in float32) fits comfortably; medium (769M, about 3 GB) is borderline.',
          '**Speed:** We have not benchmarked a GTX 970, so there is no measured figure here. Expect float32 throughput well below the RTX 4070 Ti numbers in this guide, and test tiny, base and small on your own audio.',
          '**Check what your GPU supports:** `ctranslate2.get_supported_compute_types("cuda")` lists the compute types CTranslate2 accepts on your card.',
          '**Fallbacks:** CPU int8 (`device="cpu", compute_type="int8"`) works on any modern x86 CPU, and whisper.cpp\'s quantized GGML models (for example `ggml-large-v3-q5_0.bin`, about 3–4 GB) are the usual way to fit larger models into 4 GB — verify the CUDA or Vulkan build on your card.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper on Raspberry Pi 5: tiny, base & small',
        content:
          '**On a Raspberry Pi 5, whisper.cpp runs the tiny and base models in real time for live transcription, while the small model runs below real time and is best kept to batch jobs.** The Pi 5\'s quad-core Cortex-A76 has no usable GPU path for Whisper, so all inference is CPU (ARM NEON). Use the quantized GGML models (`ggml-*-q5_0.bin`) to cut memory use and speed inference.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'On a Raspberry Pi 5, the whisper.cpp small model runs slower than real time in community reports (batch use; we did not benchmark it ourselves); tiny and base are the models reported to keep up with live speech.',
          },
          {
            type: 'plain-terms',
            text: 'A Pi 5 can transcribe live audio with the tiny and base Whisper models, but the small model is too heavy to keep up in real time — use small for recorded files you process in the background, not for a live microphone.',
          },
        ],
        items: [
          '**Whisper small on Pi 5:** Reported to run slower than real time on CPU (we did not benchmark it, so treat any timing as indicative). Accurate at 3.4% WER (Whisper paper, LibriSpeech test-clean) but too slow for live captioning — use it for overnight/batch transcription.',
          '**Whisper base on Pi 5:** Reported to run at around real time with multithreading (`-t 4`); results vary with build, cooling and audio. The practical sweet spot for live transcription on the Pi, with acceptable 5.0% WER.',
          '**Whisper tiny on Pi 5:** Fastest option, generally reported to keep up with live use, at the cost of higher 7.6% WER. Best for wake-word and short-command recognition.',
          '**Use quantized models:** `bash ./models/download-ggml-model.sh small-q5_0` trims RAM and speeds inference with minimal accuracy loss — important on the Pi 5\'s shared memory.',
          '**faster-whisper on Pi 5:** Installable (`pip install faster-whisper`, CPU int8) and competitive for batch jobs, but whisper.cpp\'s lighter C binary is the more common embedded choice.',
          '**Thermals:** Sustained transcription pushes the Pi 5 CPU hard — use active cooling to avoid thermal throttling that erodes these numbers.',
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
            text: 'If you have a Mac, pick whisper.cpp — it can use Metal and Core ML, which faster-whisper does not support. If you have an NVIDIA GPU and write Python, pick faster-whisper — it was faster in the published tests and used less GPU memory with int8.',
          },
        ],
        columns: ['Scenario', 'Best Choice', 'Why'],
        rows: [
          {
            'Scenario': 'Apple Silicon Mac (any model)',
            'Best Choice': 'whisper.cpp',
            'Why': 'Metal / Core ML acceleration; faster-whisper has no Metal backend',
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
            'Best Choice': 'Test both',
            'Why': 'README and third-party CPU tests disagree; time your audio',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** A Hugging Face Transformers pipeline wrapper that adds Flash Attention 2 support for fast batched GPU inference on NVIDIA hardware; its README reports large speed-ups (developer-reported, not benchmarked by us against faster-whisper). Best for batch processing large audio archives on NVIDIA GPUs. Requires a Flash Attention 2-compatible GPU (Ampere or newer: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Common Issues and Fixes',
        content: 'The most frequent setup and runtime problems, with direct fixes:',
        items: [
          '**CUDA version mismatch:** Current faster-whisper releases need cuBLAS for CUDA 12 and cuDNN 9. If you are stuck on older libraries, pin ctranslate2: `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 with cuDNN 8) or `3.24.0` (CUDA 11 with cuDNN 8). Check your CUDA version with `nvcc --version`.',
          '**Metal model export fails:** Ensure Xcode Command Line Tools are installed — run `xcode-select --install`. The Core ML export script requires the `coremltools` Python package: `pip install coremltools`.',
          '**Hallucination on silence:** Both tools can produce repeated filler tokens on silent audio segments. Use `--no-speech-threshold 0.6` in whisper.cpp stream mode, or `vad_filter=True` in faster-whisper\'s `model.transcribe()` to skip silent segments automatically.',
          '**Out of memory on large-v3:** Switch to int8 quantization in faster-whisper (`compute_type="int8"`) — in the README test (large-v2) it reduced VRAM from about 4.5 GB (float16) to about 2.9 GB. In whisper.cpp, use the quantized GGML variant (e.g., `ggml-large-v3-q5_0.bin`) which cuts memory to ~3–4 GB.',
          '**Garbled output on non-English audio:** Do not use `.en` model variants (tiny.en, base.en) for non-English speech — they are English-only. Use the multilingual models (base, small, medium, large-v3) and set the language explicitly: `-l de` in whisper.cpp or `language="de"` in faster-whisper.',
          '**Slow CPU inference:** Ensure your CPU supports AVX2 instructions (required for optimized CPU inference). Check with `grep avx2 /proc/cpuinfo` on Linux or `sysctl machdep.cpu.features` on Mac. CPUs without AVX2 fall back to generic SIMD and will be 2–3× slower.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a Debian or apt package for whisper.cpp?',
            a: 'Yes — whisper.cpp is now packaged officially for Debian (currently in sid), providing the `whisper.cpp` binary plus `libwhisper-dev` and `libwhisper1` for linking against it as a shared library. It hasn\'t reached stable Debian releases or Ubuntu\'s default repos yet, so on most systems you\'ll still need to add sid or build from source. An unofficial Snap (`sudo snap install whisper-cpp`) is also available for Debian 9+ and Ubuntu if you don\'t want to build from source or pull from sid.',
          },
          {
            q: 'How do I check which version of whisper.cpp I have installed?',
            a: 'Run the compiled binary with no arguments or `--help` — the version is printed in the banner line. You can also check the exact commit with `git describe --tags` inside the cloned repository, or compare your build date against the release notes at github.com/ggml-org/whisper.cpp/releases to see if you\'re behind the current v1.9.5.',
          },
          {
            q: 'Is the transcription accuracy the same between whisper.cpp and faster-whisper?',
            a: 'Mostly. Both tools use the same OpenAI Whisper model weights, so accuracy should be very close; the difference is mainly the inference runtime (C/C++ vs CTranslate2 Python). Small differences in output can still occur from quantization (for example int8), decoding settings and numeric precision. We did not measure a WER difference between the two runtimes, so test on your own audio.',
          },
          {
            q: 'Can I use faster-whisper on a Mac with Apple Silicon?',
            a: 'Yes, but it runs CPU-only — faster-whisper has no Metal support. whisper.cpp can use Metal and Core ML, and its README reports the Core ML encoder at more than 3× faster than CPU-only execution. We found no published faster-whisper vs whisper.cpp benchmark on Apple Silicon, so time your own audio. The main reason to use faster-whisper on a Mac is an existing Python pipeline that already depends on it.',
          },
          {
            q: 'What Whisper model size should I use for a voice assistant?',
            a: 'For real-time voice interfaces, Whisper small is the standard recommendation — about 3.4% WER on clean English (Whisper paper, LibriSpeech test-clean), low latency on a modern CPU or GPU (it varies with hardware; we did not measure it), and fits in about 2 GB RAM. Use tiny if you are on very constrained hardware (Raspberry Pi Zero 2W, older phones) and can tolerate ~7.6% WER. Use medium or large-v3 only for batch transcription where latency is not a constraint.',
          },
          {
            q: 'Does whisper.cpp support languages other than English?',
            a: 'Yes. All Whisper multilingual models (base, small, medium, large-v3) support 99 languages. Add `-l [language code]` to the CLI: `-l de` for German, `-l fr` for French, `-l ja` for Japanese, etc. The tiny.en and base.en models are English-only and slightly more accurate for English than their multilingual equivalents.',
          },
          {
            q: 'How do I install faster-whisper with CUDA support?',
            a: 'Install with `pip install faster-whisper`. Current releases need NVIDIA cuBLAS for CUDA 12 and cuDNN 9 on your system (on Linux, `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"` provides them). On older CUDA 11 / cuDNN 8 setups, pin `ctranslate2==3.24.0` (or `4.4.0` for CUDA 12 with cuDNN 8). Then specify `device="cuda"` when loading the model: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Use `device="auto"` if you want it to fall back to CPU when CUDA is not available.',
          },
          {
            q: 'Which is more accurate — whisper.cpp or faster-whisper?',
            a: 'Very close, but not guaranteed identical. Both tools use the same OpenAI Whisper model weights, so accuracy should be very close on the same audio. The main difference between whisper.cpp and faster-whisper is speed and platform support. Quantization (int8, q5_0), beam size and other decoding settings can change the transcript slightly; we did not measure this, so compare both on a sample of your own audio.',
          },
          {
            q: 'Can I run Whisper large-v3 on 8 GB RAM?',
            a: 'Yes on GPU — large-v3 int8 in faster-whisper should fit on an 8 GB GPU (the faster-whisper README measured 2926 MB of VRAM for large-v2 at int8). On CPU-only hardware, 8 GB RAM is tight for large-v3 (float32 needs roughly 10 GB). Use medium (5 GB RAM) or small (2 GB RAM) on CPU-only systems. In the README test, whisper.cpp used less RAM on CPU than faster-whisper (1049 MB vs 1477 MB at int8).',
          },
          {
            q: 'How much does local Whisper cost vs cloud STT?',
            a: 'No ongoing license or per-minute fees. Cloud STT services typically charge $0.006–$0.024 per audio minute (check current pricing) — for a developer transcribing 8 hours of meetings per week, that is roughly $12–50/month. Local Whisper runs on hardware you already own, with no per-minute fees and no API key management, and no audio needs to be sent to a cloud service (electricity and setup time not included).',
          },
          {
            q: 'Does faster-whisper int8 work on a GTX 970?',
            a: 'No — not as real int8. The GTX 970 has compute capability 5.2, and CTranslate2 runs int8 only on GPUs with compute capability 7.0 or higher (or exactly 6.1); on older cards it converts the weights to float32 automatically. faster-whisper still runs on the GPU in float32, so use tiny, base or small to stay inside 4 GB, or run CPU int8, which works on any modern x86 CPU. We have not benchmarked a GTX 970, so there is no measured speed figure here.',
          },
          {
            q: 'How big are the Whisper model files for whisper.cpp and faster-whisper?',
            a: 'whisper.cpp\'s README lists GGML model files of about 75 MiB (tiny), 142 MiB (base), 466 MiB (small), 1.5 GiB (medium) and 2.9 GiB (large) on disk, needing roughly 273 MB, 388 MB, 852 MB, 2.1 GB and 3.9 GB of memory. faster-whisper downloads CTranslate2 models from Hugging Face on first use; large-v3 is about 3 GB there (1.55B parameters at 2 bytes each in float16). The model-size table above lists parameter counts for every size.',
          },
          {
            q: 'Is Whisper large-v3-turbo better than large-v3 for local transcription?',
            a: 'It is faster, not more accurate. large-v3-turbo has 809M parameters because OpenAI cut the decoder from 32 layers to 4, and its model card describes it as much faster than large-v3 at the expense of a minor quality degradation, under the MIT license. The card also warns that it can hallucinate or repeat text and that accuracy varies across languages, so keep large-v3 for the hardest audio and use turbo (or distil-large-v3 for English) when speed matters. Both whisper.cpp and faster-whisper can run it.',
          },
          {
            q: 'Can whisper.cpp use an AMD or Intel GPU instead of CUDA?',
            a: 'Yes. whisper.cpp\'s Vulkan backend (`-DGGML_VULKAN=1`) works across vendors as long as your driver supports the Vulkan API, ROCm/HIP (`-DGGML_HIP=1`) targets AMD GPUs, and OpenVINO accelerates the encoder on Intel CPUs and GPUs. faster-whisper\'s own documentation covers NVIDIA CUDA only; CTranslate2\'s release notes mention ROCm wheels, but we have not tested that path.',
          },
          {
            q: 'Is mlx-whisper faster than whisper.cpp on a Mac?',
            a: 'One independent test says yes for large-v3-turbo: Bill Mill\'s January 2026 rerun measured mlx_whisper at about 13.1 seconds against 26.7 seconds for whisper.cpp on the same long recording, roughly 2× faster. A community speed test on a short clip put the two close, with whisper.cpp using Core ML and q5_0 quantization. The M5 Pro figures in this guide were not compared against MLX, so benchmark your own audio before choosing.',
          },
          {
            q: 'Is faster-whisper faster than OpenAI Whisper?',
            a: 'Yes. The faster-whisper README says its CTranslate2 reimplementation is up to 4 times faster than the original openai/whisper package for the same accuracy while using less memory, and 8-bit quantization improves efficiency further on CPU and GPU. In the README\'s 13-minute test, openai/whisper took 2m23s on an RTX 3070 Ti (large-v2, fp16) against 1m03s for faster-whisper fp16 and 59s for int8, and 6m58s on an Intel Core i7-12700K CPU (small model, fp32) against 1m42s for faster-whisper int8. Both run the same Whisper weights, so accuracy should be essentially the same; whisper.cpp, the third runtime, finished the GPU test in 1m05s with Flash Attention.',
          },
          {
            q: 'Is Whisper faster on a GPU than on a CPU?',
            a: 'For large models, yes; for small ones a CPU is often enough. In the faster-whisper README, large-v2 on an RTX 3070 Ti took 59 s at int8 for a 13-minute file, while the small model on an Intel Core i7-12700K CPU took 1m42s at int8 — a different model on different hardware, so compare orders of magnitude only. A third-party test of large-v3 on an Intel Core i5-13400F CPU measured whisper.cpp at 15× and faster-whisper at 2× real-time. Community reports suggest tiny and base can keep up with live speech on a Raspberry Pi 5; we did not benchmark this.',
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
          '[insanely-fast-whisper on GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Flash Attention 2 Whisper pipeline for batched NVIDIA GPU inference (see its README for developer-reported benchmarks).',
          '[OpenAI Whisper on GitHub](https://github.com/openai/whisper) — Original Whisper model, paper, model cards and the relative-speed table (A100) for all sizes.',
          '[x2q.net: Whisper backend shootout](https://www.x2q.net/post/whisper-backend-shootout/) — Third-party June 2026 benchmark (RTX 4070 Ti and Intel Core i5-13400F, large-v3, Danish phone-call audio) behind the real-time factors for faster-whisper and whisper.cpp.',
          '[whisper.cpp benchmark discussion](https://github.com/ggml-org/whisper.cpp/discussions/89) — Community encoder timings for Apple Silicon and other chips.',
          '[OpenAI Whisper paper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision." Source of WER figures.',
          '[CTranslate2 documentation](https://github.com/OpenNMT/CTranslate2) — Quantization details, hardware support, and int8 optimization rationale.',
          '[CTranslate2 quantization documentation](https://opennmt.net/CTranslate2/quantization.html) — Which compute types each GPU compute capability supports (basis of the GTX 970 section).',
          '[faster-whisper README benchmarks](https://github.com/SYSTRAN/faster-whisper#benchmark) — 13-minute GPU and CPU timings used in the reference benchmark, plus current CUDA 12 / cuDNN 9 requirements.',
          '[openai/whisper-large-v3-turbo on Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — Model card: 809M parameters, 4 decoder layers, MIT license.',
          '[Bill Mill: updated mlx_whisper vs. whisper.cpp benchmark](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Independent large-v3-turbo timing comparison on Apple Silicon.',
          '[whisper.cpp releases](https://github.com/ggml-org/whisper.cpp/releases) — Release notes for v1.9.4 and v1.9.5.',
          '[CTranslate2 releases](https://github.com/OpenNMT/CTranslate2/releases) — Release notes for v4.8.3, v4.8.4 and v4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Whisper.cpp Review (2026)](/power-local-llm/whisper-cpp-review) — a deep dive on whisper.cpp alone: history, install walkthrough, real CLI commands, license, and when to pick faster-whisper instead.',
          'faster-whisper Review — the CTranslate2-based counterpart, reviewed in the same depth.',
          '[Local TTS and Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — The TTS companion: turn transcribed text back into speech, offline.',
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — Connect Whisper STT to a local LLM and Piper TTS into a complete voice pipeline.',
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Add vision models alongside STT and TTS for a full multimodal local stack.',
          '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) — GPU and RAM requirements for the full voice + LLM pipeline.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) — Mobile version: WhisperKit on iPhone, Layla on Android.',
        ],
      },
    },
  },

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: Lokale STT-Benchmarks, Setup & GPU-Beschleunigung',
    seoTitle: 'whisper.cpp vs. faster-whisper vs. Whisper 2026: CPU/GPU',
    intro:
      'whisper.cpp und faster-whisper sind die zwei dominanten Implementierungen von OpenAIs Whisper-Spracherkennungsmodell für lokale, offline Transkription im Jahr 2026. Dieser whisper.cpp vs faster-whisper Vergleich zeigt, welches Tool auf welcher Hardware besser passt. whisper.cpp ist ein reiner C/C++-Port, der auf Apple Metal, CUDA, Vulkan und CPU läuft – ideal für Apple Silicon, Embedded-Systeme und Echtzeit-Sprachanwendungen. faster-whisper ist eine Python-Bibliothek auf Basis von CTranslate2, die laut ihrer README bei gleicher Genauigkeit bis zu 4× schneller ist als das ursprüngliche Whisper. Dieser Leitfaden behandelt Installation, Performance-Benchmarks, Echtzeit-Transkriptions-Setup und einen direkten Plattformvergleich.',
    metaDescription:
      'faster-whisper ist bis zu 4x schneller als OpenAI Whisper, whisper.cpp bringt Apple Metal mit. CPU- vs. GPU-Zeiten, VRAM und WER aus Benchmarks.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-de.webp',
    twitterDescription:
      'whisper.cpp vs faster-whisper: Lokale STT-Benchmarks 2026. CPU vs. GPU-Geschwindigkeit, Apple Metal, WER-Genauigkeit, Echtzeit-Transkription. Kein Cloud-Dienst, keine Kosten.',
    audience:
      'Entwickler, Forscher und Systembauer, die eine Offline-Sprachtranskription mit Fokus auf Datenschutz benötigen – für Besprechungsnotizen, Sprachinterfaces, Barrierefreiheitstools oder sichere Umgebungen.',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Nutzen Sie whisper.cpp auf Apple Silicon und Embedded-Geräten, faster-whisper auf NVIDIA-GPUs und in Python-Pipelines – beide führen dieselben OpenAI-Whisper-Gewichte aus, die Genauigkeit ist daher im Wesentlichen gleich, und vor allem Geschwindigkeit und Integration unterscheiden sich.**',
    quickAnswerTop: {
      de: {
        question: 'Welches Tool sollte ich für lokale Spracherkennung 2026 verwenden – whisper.cpp oder faster-whisper?',
        answer:
          'Die Wahl hängt von Ihrer Hardware und Ihren Integrationsbedürfnissen ab. Auf Apple Silicon ist whisper.cpp mit Metal und Core ML die natürliche Wahl, weil faster-whisper kein Metal-Backend hat. Auf NVIDIA-GPUs war faster-whisper in den veröffentlichten Tests, die wir gefunden haben, schneller (23-fache vs. 15-fache Echtzeit bei large-v3 auf einer RTX 4070 Ti, Test eines Dritten) und lässt sich leichter in Python-Pipelines integrieren. Auf reiner CPU-Hardware widersprechen sich veröffentlichte Ergebnisse – messen Sie mit Ihrem eigenen Audio.',
        bullets: [
          'Apple Silicon → whisper.cpp mit Core ML / Metal; faster-whisper hat kein Metal-Backend.',
          'NVIDIA GPU → faster-whisper. Test eines Dritten, RTX 4070 Ti, large-v3: 23-fache Echtzeit vs. 15-fache bei whisper.cpp CUDA.',
          'Python-Pipeline → faster-whisper. Nativ in Python, 5-Zeilen-Setup, VAD integriert.',
          'Embedded / Raspberry Pi 5 → whisper.cpp. Reines C-Binary, kein Python-Runtime; tiny/base laufen in Echtzeit, small nur im Batch-Betrieb.',
          'Echtzeit-Spracherfassung → whisper.cpp Stream-Modus oder faster-whisper VAD-Pipeline.',
          'Batch-Transkription → faster-whisper. Bester Durchsatz auf GPU; einfaches Async-Batching.',
          'WER-Genauigkeit: voraussichtlich sehr nah beieinander – beide nutzen dieselben Whisper-Modellgewichte (Quantisierung und Dekodiereinstellungen können kleine Abweichungen verursachen).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Auf einen Blick', anchor: '#quick-facts' },
      { label: 'Warum lokale Spracherkennung?', anchor: '#why-local-stt' },
      { label: 'Whisper-Modellgrößen', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: Die schnellere Alternative', anchor: '#distil-whisper' },
      { label: 'whisper.cpp – Der C/C++-Port', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp – Aktuelle Version & Updates', anchor: '#whats-new' },
      { label: 'faster-whisper – Der CTranslate2-Port', anchor: '#faster-whisper' },
      { label: 'ggml-base.bin per pip beziehen (Python-Setup)', anchor: '#install-ggml-pip' },
      { label: 'Direktvergleich: Benchmark-Tabelle', anchor: '#benchmarks' },
      { label: 'Referenz-Benchmark: GPU- vs. CPU-Laufzeiten', anchor: '#reference-benchmark' },
      { label: 'Echtzeit-Transkription einrichten', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp passt am besten', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper vorn in veröffentlichten Tests', anchor: '#nvidia-gpu' },
      { label: 'Ältere NVIDIA-GPUs (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper auf dem Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp ist die natürliche lokale STT-Wahl für Apple Silicon.** Der C/C++-Port nutzt Core ML und Apple Metal zur Hardware-Beschleunigung – laut README ist der Core-ML-Encoder mehr als 3× schneller als die reine CPU-Ausführung (Herstellerangabe) – und braucht kein Python.',
          '**faster-whisper war in den veröffentlichten Tests, die wir gefunden haben, auf NVIDIA-GPUs schneller und passt gut zu Python-Pipelines.** Im README-Test senkte int8 den VRAM-Bedarf von 4708 MB (OpenAI Whisper, fp16) auf 2926 MB (large-v2, RTX 3070 Ti, Herstellerangabe); ein Test eines Dritten auf einer RTX 4070 Ti maß 23-fache Echtzeit gegenüber 15-facher bei whisper.cpp CUDA (large-v3).',
          '**Beide Tools verwenden identische Whisper-Modellgewichte von OpenAI.** Die Genauigkeit sollte daher sehr nah beieinander liegen – die Hauptunterschiede liegen in der Laufzeit-Performance und im Integrationspfad; kleine WER-Abweichungen durch Quantisierung und Dekodiereinstellungen sind dennoch möglich, wir haben sie nicht gemessen.',
          '**Whisper large-v3 bietet die beste Genauigkeit mit 2,5 % WER auf Englisch.** Für die meisten Produktivszenarien bietet Whisper small (3,4 % WER, 2 GB RAM) oder medium (2,9 % WER, 5 GB RAM) ein besseres Geschwindigkeit-Genauigkeits-Verhältnis.',
          '**Echtzeit-Transkription ist mit beiden Tools erreichbar** – whisper.cpp über den `--stream`-Flag, faster-whisper über seine integrierte VAD-Pipeline (Sprachaktivitätserkennung). Wie weit der Text der Livesprache hinterherhinkt, hängt von Hardware und Modellgröße ab; wir haben das nicht gemessen.',
          '**whisper.cpp läuft auf CPU, Metal, CUDA und Vulkan** – und ist damit die naheliegende Wahl für plattformübergreifende Embedded-Nutzung (Raspberry Pi, Windows GPU-Setups, ARM-Server). faster-whisper unterstützt nur CPU und CUDA (kein Metal auf Mac).',
          '**Für Raspberry Pi 5 und Embedded Linux sind whisper.cpp tiny und base auf der CPU** die echtzeitfähigen Modelle – tiny läuft komfortabel schneller als Echtzeit, base etwa in Echtzeit mit `-t 4`. Das small-Modell (3,4 % WER) läuft auf dem Pi 5 unterhalb der Echtzeit und eignet sich am besten für Batch-Jobs. Die gesamte Inferenz erfolgt auf der CPU (ARM NEON) – der Pi hat keinen nutzbaren GPU-Pfad für Whisper. Diese Pi-5-Angaben stammen aus Community-Berichten, nicht aus eigenen Messungen.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Auf einen Blick',
        items: [
          '**Beide Tools:** Basieren auf OpenAIs quelloffenem Whisper-Modell (MIT-Lizenz). Dieselben Modellgewichte, daher ähnliche Genauigkeit – unterschiedliche Laufzeiten.',
          '**whisper.cpp:** In C/C++ von Georgi Gerganov entwickelt. Unterstützt CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Kein Python erforderlich.',
          '**faster-whisper:** Python-Bibliothek auf Basis von CTranslate2. Unterstützt CPU (int8) und CUDA. Kein Apple Metal-Support.',
          '**Whisper-Modellgrößen:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Alle im GGML- / CTranslate2-Format.',
          '**Bestes Modell für die meisten Anwendungsfälle:** Whisper small – 3,4 % WER und etwa 2 GB Speicher; wechseln Sie zu medium oder large-v3, wenn Genauigkeit wichtiger ist als Geschwindigkeit.',
          '**NVIDIA GPU (large-v3, Test eines Dritten, RTX 4070 Ti):** faster-whisper 23-fache Echtzeit; whisper.cpp CUDA 15-fache Echtzeit.',
          '**Apple Silicon:** whisper.cpp läuft über Metal und Core ML (README: Core-ML-Encoder mehr als 3× schneller als reine CPU); faster-whisper hat kein Metal-Backend. Einen veröffentlichten large-v3-Benchmark für den M5 Pro haben wir nicht gefunden.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Warum lokale Spracherkennung?',
        content:
          'Cloud-STT-Dienste (Google Speech-to-Text, AWS Transcribe, Azure Speech) berechnen Gebühren pro Audiominute – typischerweise ca. 0,005–0,022 €/Min. – und senden Audiodaten an externe Server. Für datenschutzsensible Anwendungen (medizinische Diktierlösungen, Rechtsaufzeichnungen, Journalisteninterviews, Unternehmensmeetings) vermeidet lokale Transkription die Übertragung der Audiodaten an einen Drittanbieter-Dienst.',
        items: [
          '**Datenschutz:** Beide Tools können lokal laufen, ohne Audio an einen Cloud-Dienst zu senden; dann ist kein Cloud-Dienstleister an der Transkription beteiligt. Pflichten wie Rechtsgrundlage und sichere Speicherung bleiben bei Ihnen.',
          '**Kosten:** Keine minutenbasierten Gebühren. Zu typischen Cloud-Listenpreisen von ca. 0,005–0,022 €/Min. (aktuelle Anbieterpreise prüfen) zahlt ein Entwickler, der 8 Stunden Meetings pro Woche transkribiert, grob 10–45 €/Monat – diese Kosten entfallen bei lokaler Transkription (Hardware und Strom nicht eingerechnet).',
          '**Offline:** Funktioniert im Flugzeug, in Sicherheitsbereichen, in Gebieten ohne stabiles Internet. Kein API-Schlüsselmanagement.',
          '**Latenz:** Kein Upload/Download-Roundtrip. Für Echtzeit-Sprachinterfaces kann lokale Verarbeitung die STT-Latenz gegenüber einem Cloud-Roundtrip senken; wie groß der Vorteil ist, hängt von Netzwerk und Hardware ab.',
          '**Anpassbarkeit:** Feinabstimmung auf domänenspezifisches Vokabular. Beliebige Modellgröße, die zur Hardware passt.',
          '**Home-Assistant-Integration:** Whisper kann lokal laufen, ohne dass Audio an einen Cloud-Dienst gesendet wird; Aktivierungswörter und Sprachbefehle können so im Heimnetzwerk bleiben. Siehe [lokales Whisper in Home Assistant →](/de/smart-home/local-whisper-home-assistant) für das Add-on-Setup, das Cloud-STT vollständig ersetzt.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper-Modellgrößen – Grundlage beider Tools',
        content:
          'Sowohl whisper.cpp als auch faster-whisper verwenden dieselben Whisper-Modellgewichte, konvertiert in das jeweilige Format (GGML für whisper.cpp, CTranslate2 für faster-whisper). Wählen Sie die Modellgröße anhand Ihres VRAM/RAM-Budgets und Ihrer Genauigkeitsanforderungen.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-de.webp',
          imageCaption: 'Whisper-Modellgrößen, die whisper.cpp und faster-whisper gemeinsam nutzen, von tiny bis large-v3.',
          imageAlt: 'Plakat „Whisper-Modellgrößen: Geschwindigkeit vs. Genauigkeit“: tiny ist etwa 10-mal schneller als large, large-v3 ist am langsamsten und genauesten, die Geschwindigkeiten stammen aus der OpenAI-README auf einer A100',
        columns: ['Modell', 'Parameter', 'VRAM / RAM', 'Englisch WER', 'Rel. Geschwindigkeit'],
        rows: [
          {
            'Modell': 'tiny',
            'Parameter': '39M',
            'VRAM / RAM': '~1 GB',
            'Englisch WER': '7,6 %',
            'Rel. Geschwindigkeit': '~10×',
          },
          {
            'Modell': 'base',
            'Parameter': '74M',
            'VRAM / RAM': '~1 GB',
            'Englisch WER': '5,0 %',
            'Rel. Geschwindigkeit': '~7×',
          },
          {
            'Modell': 'small',
            'Parameter': '244M',
            'VRAM / RAM': '~2 GB',
            'Englisch WER': '3,4 %',
            'Rel. Geschwindigkeit': '~4×',
          },
          {
            'Modell': 'medium',
            'Parameter': '769M',
            'VRAM / RAM': '~5 GB',
            'Englisch WER': '2,9 %',
            'Rel. Geschwindigkeit': '~2×',
          },
          {
            'Modell': 'large-v3',
            'Parameter': '1,55B',
            'VRAM / RAM': '~10 GB',
            'Englisch WER': '2,5 %',
            'Rel. Geschwindigkeit': '1× (Referenz)',
          },
          {
            'Modell': 'distil-large-v3',
            'Parameter': '~756M',
            'VRAM / RAM': '~4 GB',
            'Englisch WER': '~2,6 %',
            'Rel. Geschwindigkeit': '~6,3×',
          },
        ],
        note: 'WER (Wortfehlerrate), niedriger ist besser. Die Werte für tiny, base, small und medium stammen aus dem Whisper-Paper (Radford et al., 2022, Anhang D.1.1, LibriSpeech test-clean, Greedy Decoding). Das Paper deckt large-v3 und distil-large-v3 nicht ab; deren Werte sind Näherungen und nicht direkt vergleichbar. Die relativen Geschwindigkeiten sind die veröffentlichten OpenAI-Werte aus der Whisper-README, gemessen auf einer A100 relativ zum Modell large (Herstellerangabe); die reale Geschwindigkeit hängt von der Hardware ab. distil-large-v3 ist laut Modellkarte 6,3× schneller als large-v3.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: Die schnellere Alternative',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) ist eine destillierte Variante von large-v3 mit ~50 % weniger Parametern, die 6,3× schneller läuft und dabei den WER nur um ~1 % erhöht.** Es ist die richtige Wahl, wenn Transkriptionsgeschwindigkeit wichtiger ist als das letzte Stück Genauigkeit. distil-large-v3 funktioniert sowohl mit faster-whisper (native CTranslate2-Unterstützung) als auch mit whisper.cpp (über GGML-Format-Konvertierung).',
        items: [
          '**Parameter:** ~756M – etwa halb so viele wie large-v3s 1,55B; passt in ~4 GB VRAM statt ~10 GB.',
          '**Geschwindigkeit:** laut Modellkarte 6,3× schneller als large-v3 (relative Latenz, kein Echtzeitfaktor), bei einem WER innerhalb von etwa 1 % von large-v3 auf langen Aufnahmen.',
          '**WER:** ~2,6 % auf Englisch – nur ~0,1 % höher als large-v3s 2,5 %. In der Praxis dürfte der Unterschied bei typischer Sprache kaum auffallen; wir haben das nicht getestet.',
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
          '**Apple-Silicon-Vorteil:** whisper.cpp exportiert Modelle ins Core ML-Format und ermöglicht damit Inferenz auf der Apple Neural Engine. Laut README ist der Core-ML-Encoder mehr als 3× schneller als die reine CPU-Ausführung (Herstellerangabe).',
          '**Installation:** Repository klonen, `make` (oder `cmake`) ausführen. Vorgefertigte Binaries für gängige Plattformen verfügbar. Keine Python-Abhängigkeit.',
          '**Modell-Download:** `bash ./models/download-ggml-model.sh base.en` – lädt die GGML-Modelldatei herunter (~142 MB für base).',
          '**CLI-Beispiel:** `./main -m models/ggml-base.bin -f audio.wav` – transkribiert eine WAV-Datei nach stdout. `-l de` für Deutsch hinzufügen.',
          '**Echtzeit-Stream-Modus:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` – transkribiert in 3-Sekunden-Chunks vom Mikrofon.',
          '**Python-Wrapper:** pywhispercpp bietet eine Python-Anbindung für whisper.cpp und ermöglicht die Nutzung in Python-Pipelines ohne Verlust der Metal-Beschleunigung.',
          '**VAD:** whisper.cpp unterstützt optional die Silero-Sprachaktivitätserkennung über `--vad` in `whisper-cli` (dafür ist ein separater VAD-Modell-Download nötig). Der Stream-Modus erfordert weiterhin die Feinabstimmung der Parameter `--step` und `--length` für den jeweiligen Anwendungsfall.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp – Aktuelle Version & Updates',
        content:
          '**Die neueste whisper.cpp-Version ist v1.9.5, veröffentlicht am 6. Oktober 2026.** Sie synchronisiert die gebündelte ggml-Bibliothek auf v0.26.0 mit Backend-Arbeiten für CUDA, Vulkan, Metal, SYCL, OpenCL und CPU-Kernels und bringt Whisper-Korrekturen wie einen Abbruch-Callback bei der Spracherkennung und eine Integer-Overflow-Korrektur bei parallelen Chunk-Offsets. whisper.cpp ist außerdem offiziell als Debian-Paket (sid) verfügbar (`whisper.cpp`, `libwhisper-dev`, `libwhisper1`), zusätzlich zum langjährigen inoffiziellen Snap. Die neueste getaggte faster-whisper-Version ist weiterhin v1.2.1 (31. Oktober 2025), das Repository wird aber aktiv gepflegt: der letzte Commit stammt vom 2. November 2026 (Stand: 3. November 2026). Beide Runtimes laden weiterhin dieselben OpenAI-Whisper-Gewichte; uns ist 2026 keine neue Modellklasse bekannt, die die Transkriptionsgenauigkeit verändert hätte.',
        items: [
          '**whisper.cpp v1.9.5 (6. Oktober 2026):** ggml-Sync auf v0.26.0 mit Updates für CUDA-, Vulkan-, Metal-, SYCL-, OpenCL-, WebGPU- und CPU-Kernels, ein Abbruch-Callback bei der Spracherkennung, Korrektur eines Integer-Overflows bei parallelen Chunk-Offsets und korrekter Fehlercode der CLI, wenn eine Datei fehlschlägt.',
          '**whisper.cpp v1.9.4 (11. September 2026):** Der Server liefert jetzt die erkannte Sprache zurück, der Encoder-Callback läuft vor der automatischen Spracherkennung, und Windows on ARM wurde zum Release-Job hinzugefügt.',
          '**whisper.cpp v1.9.3 (20. August 2026):** ggml-Sync auf v0.20.2 mit durchgängigen Performance-Verbesserungen, Metal-TQ2_0-Quantisierung, fusionierten CUDA/SYCL-Kernels und ARM/WASI-Korrekturen.',
          '**whisper.cpp v1.9.0–v1.9.2 (Juni–August 2026):** Punktreleases in derselben ggml-Sync- und Performance-Linie vor v1.9.3.',
          '**whisper.cpp v1.8.6 (2. Juni 2026):** Neu implementiertes `ffmpeg-transcode` für klarere optionale FFmpeg-Dekodierung komprimierter Audiodateien (MP3, M4A) plus eine Korrektur des CI-Beispielpfads.',
          '**whisper.cpp v1.8.5 (Mai 2026):** Verbesserungen beim Streaming-VAD (Sprachaktivitätserkennung), Korrekturen für Server-Parameter-Leaks und Token-Zeitstempel sowie Behebung von Speicherlecks in den Ruby- und VAD-Bindings.',
          '**whisper.cpp v1.8.4 (19. März 2026):** Neueste `ggml`-Synchronisierung mit breiten Performance-Gewinnen, ein neuer `-g` / `--gpu-device`-Flag (und `GGML_CUDA`-Geräteauswahl) zur GPU-Wahl sowie Korrekturen beim UTF-8-Segmentumbruch.',
          '**Nativer VAD ist jetzt in whisper.cpp integriert.** Aktuelle Versionen haben einen nativen Pfad zur Sprachaktivitätserkennung ergänzt und verringern damit einen langjährigen Vorteil von faster-whisper – auch wenn die Silero-VAD-Integration von faster-whisper weiterhin gebrauchsfertiger ist.',
          '**faster-whisper v1.2.1 (31. Oktober 2025):** Neueste getaggte Version; `pip install faster-whisper` installiert sie. 2026 gab es keine getaggte Version, der Main-Branch ist aber aktiv: der letzte Commit (2. November 2026, Stand 3. November 2026) betrifft CI, und Commits vom 16. Oktober 2026 ergänzen Eingabeprüfungen, etwa einen Fehler für Sprachen, die ein Modell nicht unterstützt. v1.2.0 (August 2025) brachte Unterstützung für distil-large-v3.5.',
          '**CTranslate2 v4.8.4 (25. Oktober 2026):** Die Inferenz-Engine unter faster-whisper hat eine weitere Version veröffentlicht. Sie ergänzt Schutz vor Ganzzahlüberläufen bei der Berechnung von Tensorgrößen, Korrekturen für CPU-Conv1D und für einen Überlauf der INT8-Quantisierungsskala bei sehr kleinen Gewichtszeilen sowie eine experimentelle Offline-Text-to-Speech-Implementierung (Drama 3). Die Version davor, v4.8.3 (13. Oktober 2026), brachte Windows-ROCm-Korrekturen, Härtung beim Laden und die Korrektur einer Division durch null in Whisper `align()`, wenn ein Fenster keine Frames hat. Danach folgte am 2. November 2026 v4.8.5 (Stand: 3. November 2026) mit Korrekturen zur CUDA-Attention-Präzision und einer Build-Anleitung für Windows ROCm/HIP.',
          '**Kein neues Whisper-Modell mit höherer Genauigkeit 2026.** OpenAIs neueste mehrsprachige Gewichte bleiben large-v3-turbo (Oktober 2024; 809M Parameter, Decoder von 32 auf 4 Schichten reduziert, MIT-Lizenz), das einen kleinen Qualitätsverlust gegen deutlich mehr Geschwindigkeit eintauscht und in beiden Tools läuft. distil-large-v3 bleibt die rein englische Speed-Option. Soweit uns bekannt, betreffen Updates an beiden Runtimes Laufzeit und Tooling, nicht die Genauigkeit.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper – Der CTranslate2-Port',
        content:
          '**faster-whisper (von SYSTRAN) ist eine Python-Bibliothek, die Whisper-Inferenz mit CTranslate2 – einer hochoptimierten C++-Inferenz-Engine mit int8-Quantisierungsunterstützung – neu implementiert und dadurch VRAM-Bedarf reduziert und Durchsatz erhöht.** Auf NVIDIA-GPUs gehört faster-whisper in veröffentlichten Tests zu den schnellsten lokalen Whisper-Implementierungen.',
        items: [
          '**Plattformunterstützung:** CPU (int8-Quantisierung) und NVIDIA CUDA GPU. Kein Apple Metal-Support – läuft auf Mac nur über CPU.',
          '**int8-Vorteil:** Die CTranslate2 int8-Quantisierung senkte den VRAM-Bedarf im README-Test um etwa ein Drittel (4525 MB bei fp16 vs. 2926 MB bei int8, large-v2) bei leichtem Geschwindigkeitsgewinn (1m03s vs. 59s); die Auswirkung auf den WER ist in der Regel vernachlässigbar.',
          '**Installation:** `pip install faster-whisper` – keine Kompilierung erforderlich (Python 3.9+). GPU-Nutzung erfordert NVIDIA cuBLAS für CUDA 12 und cuDNN 9; ältere CUDA-11-/cuDNN-8-Setups müssen ein älteres `ctranslate2` (3.24.0) pinnen.',
          '**Integrierter VAD:** faster-whisper enthält Silero VAD-Integration, die stille Audiosegmente automatisch überspringt – entscheidend für Echtzeit-Transkriptions-Pipelines.',
          '**Python-nativ:** Die direkte Python-API macht es trivial, faster-whisper mit LLMs, Audio-Verarbeitungsbibliotheken und Web-Frameworks zu verbinden.',
          '**Geschwindigkeit:** Im README-Test (large-v2, RTX 3070 Ti, 13-Minuten-Datei) benötigte int8 59 s und int8 mit Batch-Größe 8 nur 16 s; ein Test eines Dritten auf einer RTX 4070 Ti maß 23-fache Echtzeit für large-v3.',
          '**Batch-Verarbeitung:** faster-whisper unterstützt Batch-Inferenz für die effiziente Verarbeitung großer Audio-Archive.',
          '**Einschränkung:** Kein Metal-Support auf Mac – läuft auf Apple Silicon nur über die CPU. Einen veröffentlichten Benchmark faster-whisper vs. whisper.cpp auf Apple Silicon haben wir nicht gefunden.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'ggml-base.bin per pip beziehen (Python-Setup)',
        content:
          '**Um ggml-base.bin aus Python per pip zu nutzen, installieren Sie das `pywhispercpp`-Binding – `pip install pywhispercpp` – und laden dann `Model("base")`, das `ggml-base.bin` beim ersten Lauf automatisch herunterlädt.** Es gibt kein `pip install whisper.cpp`; pywhispercpp ist der pip-Wrapper um die whisper.cpp-C/C++-Engine und behält Metal- und CUDA-Beschleunigung bei. Die GGML-Modelldatei (`ggml-base.bin`, ~142 MB) wird separat von Hugging Face heruntergeladen und lokal zwischengespeichert – das pip-Paket liefert die Inferenz-Engine, nicht die Gewichte.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '`pip install pywhispercpp` ausführen; dann lädt `Model("base")` in Python ggml-base.bin beim ersten Aufruf automatisch herunter und speichert es zwischen.',
          },
          {
            type: 'plain-terms',
            text: 'pip installiert das Programm (pywhispercpp); die Modelldatei ggml-base.bin ist ein separater ~142-MB-Download, der beim ersten Laden des „base“-Modells erfolgt – oder den Sie manuell mit dem Skript download-ggml-model.sh holen.',
          },
        ],
        items: [
          '**Binding installieren:** `pip install pywhispercpp`. Für NVIDIA-CUDA-Beschleunigung mit `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp` bauen.',
          '**ggml-base.bin automatisch herunterladen:** `from pywhispercpp.model import Model`, dann lädt `model = Model("base")` beim ersten Lauf `ggml-base.bin` von Hugging Face (`ggerganov/whisper.cpp`) herunter und speichert es zwischen. `"base.en"` für die rein englische Variante verwenden.',
          '**Manueller Download (CLI-Weg, ohne pip):** In einem geklonten whisper.cpp-Repo speichert `bash ./models/download-ggml-model.sh base` die Datei unter `models/ggml-base.bin` – dieselbe Datei, die pywhispercpp abruft.',
          '**Direkter Download:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` lädt das Modell ohne Skript. `base` durch `tiny`, `small`, `medium` oder `large-v3` ersetzen.',
          '**Die Pakete nicht verwechseln:** `pip install openai-whisper` installiert OpenAIs ursprüngliches PyTorch-Whisper (es nutzt `.pt`-Checkpoints, nicht `ggml-base.bin`). `pip install faster-whisper` nutzt das CTranslate2-Format. Nur `pywhispercpp` verarbeitet GGML-`ggml-*.bin`-Dateien.',
          '**Wo die Datei liegt:** pywhispercpp speichert heruntergeladene GGML-Modelle in seinem Modul-Cache (oder einem Pfad, den Sie über `Model("base", models_dir="...")` übergeben), sodass dieselbe `ggml-base.bin` über mehrere Läufe wiederverwendet wird – kein erneuter Download.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Direktvergleich: Benchmark-Tabelle',
        content:
          'Jede Zeile nennt Quelle und Hardware. Die Geschwindigkeit wird in Vielfachen der Echtzeit angegeben (10× bedeutet: 60 Minuten Audio werden in 6 Minuten transkribiert). Zeilen mit „Dritte“ stammen aus dem [x2q.net-Backend-Vergleich](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti und Intel Core i5-13400F, large-v3, dänische Telefongespräche, Juni 2026); „README“-Zeilen stammen aus der faster-whisper-README (RTX 3070 Ti, large-v2). Hardware und Audio unterscheiden sich je Quelle – lesen Sie die Zeilen als Anhaltspunkte, nicht als direkten Vergleich auf einer einzigen Maschine.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-de.webp',
          imageCaption: 'whisper.cpp und faster-whisper im Plattformvergleich: Apple Silicon, NVIDIA GPU und CPU.',
          imageAlt: 'Plakat „whisper.cpp vs. faster-whisper nach Plattform“: Apple Silicon mit whisper.cpp (Metal), auf NVIDIA-GPUs laufen beide mit CUDA, bei der CPU widersprechen sich veröffentlichte Ergebnisse',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'In einem Test eines Dritten auf einer RTX 4070 Ti lief large-v3 mit faster-whisper in 23-facher Echtzeit gegenüber 15-facher bei whisper.cpp CUDA; auf Apple Silicon kann nur whisper.cpp Metal nutzen.',
          },
          {
            type: 'plain-terms',
            text: 'Auf dem Mac whisper.cpp wählen, das Metal und Core ML nutzen kann; auf Windows/Linux mit NVIDIA GPU faster-whisper wählen, das in den veröffentlichten Tests schneller war und mit int8 weniger VRAM brauchte (2926 MB vs. 4127 MB bei whisper.cpp fp16 im README-Test).',
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
            'Metrik': 'Geschwindigkeit – RTX 4070 Ti, large-v3 (Dritte)',
            'whisper.cpp (large-v3)': '~15-fache Echtzeit',
            'faster-whisper (large-v3)': '~23-fache Echtzeit ✓',
          },
          {
            'Metrik': 'Geschwindigkeit – Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (kein Benchmark gefunden)',
            'faster-whisper (large-v3)': 'Nur CPU (kein Benchmark gefunden)',
          },
          {
            'Metrik': 'Geschwindigkeit – x86-CPU, large-v3 (Dritte)',
            'whisper.cpp (large-v3)': '~15-fache Echtzeit ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2-fache Echtzeit (i5-13400F)',
          },
          {
            'Metrik': 'VRAM – large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'Metrik': 'Python-Integration',
            'whisper.cpp (large-v3)': 'Wrapper nötig (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativ ✓',
          },
          {
            'Metrik': 'VAD (Stilles Audio erkennen)',
            'whisper.cpp (large-v3)': 'Optional (--vad + Silero-Modell)',
            'faster-whisper (large-v3)': 'Integriert (Silero VAD) ✓',
          },
          {
            'Metrik': 'Echtzeit-Streaming',
            'whisper.cpp (large-v3)': 'Ja (--stream-Flag) ✓',
            'faster-whisper (large-v3)': 'Ja (VAD-Pipeline)',
          },
          {
            'Metrik': 'WER-Genauigkeit (large-v3)',
            'whisper.cpp (large-v3)': '2,5 % (gleiche Gewichte)',
            'faster-whisper (large-v3)': '2,5 % (gleiche Gewichte)',
          },
          {
            'Metrik': 'Python-Abhängigkeit',
            'whisper.cpp (large-v3)': 'Keine ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'Metrik': 'Raspberry Pi / Embedded',
            'whisper.cpp (large-v3)': 'Ja – C-Binary ✓',
            'faster-whisper (large-v3)': 'Möglich – braucht Python-Laufzeit',
          },
          {
            'Metrik': 'Ausgabeformate',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python-Objekte (start, end, text)',
          },
        ],
        note: 'whisper.cpp schreibt die Ausgabe direkt in gängige Untertitel- und Transkriptformate (SRT, VTT, JSON, CSV, txt) – ideal für Untertitel-Workflows. faster-whisper liefert einen Python-Generator von Segment-Objekten mit `start`-, `end`- und `text`-Attributen – ideal für LLM-Pipeline-Chaining. Für Untertitel-Generierung ist whisper.cpp einfacher; für Pipelines, die Segmente programmatisch verarbeiten, ist faster-whisper einfacher.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'Referenz-Benchmark: GPU- vs. CPU-Laufzeiten von faster-whisper',
        content:
          '**Das faster-whisper-Projekt veröffentlicht eigene Laufzeiten für eine 13-minütige Audiodatei — sie zeigen, dass whisper.cpp mit Flash Attention auf einer GPU mit faster-whisper fp16 gleichzieht, während Batching und int8 faster-whisper den Vorsprung geben.** Die Werte stammen aus der faster-whisper-README (large-v2 auf einer RTX 3070 Ti 8 GB mit CUDA 12.4 für die GPU-Zeilen; das small-Modell auf einem Intel Core i7-12700K mit 8 Threads für die CPU-Zeilen; Beam Size 5). Es sind nicht unsere eigenen Messungen, und Hardware und Modelle unterscheiden sich von den large-v3-Werten oben.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Im README-Benchmark von faster-whisper liegen whisper.cpp mit Flash Attention (1m05s) und faster-whisper fp16 (1m03s) auf der GPU praktisch gleichauf; faster-whisper int8 mit Batching schafft dieselbe 13-Minuten-Datei in 16 Sekunden.',
          },
        ],
        columns: ['Setup', 'Präzision', 'Zeit', 'VRAM / RAM'],
        rows: [
          {
            'Setup': 'GPU · OpenAI Whisper',
            'Präzision': 'fp16',
            'Zeit': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'Setup': 'GPU · whisper.cpp (Flash Attn)',
            'Präzision': 'fp16',
            'Zeit': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'Setup': 'GPU · faster-whisper',
            'Präzision': 'fp16',
            'Zeit': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'Setup': 'GPU · faster-whisper',
            'Präzision': 'int8',
            'Zeit': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'Setup': 'GPU · faster-whisper, Batch 8',
            'Präzision': 'int8',
            'Zeit': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'Setup': 'CPU · OpenAI Whisper',
            'Präzision': 'fp32',
            'Zeit': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'Setup': 'CPU · whisper.cpp',
            'Präzision': 'fp32',
            'Zeit': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'Setup': 'CPU · faster-whisper',
            'Präzision': 'int8',
            'Zeit': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'Setup': 'CPU · faster-whisper, Batch 8',
            'Präzision': 'int8',
            'Zeit': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'Lesen Sie dies neben der Direktvergleich-Tabelle: Bei einzelnem fp16-Stream liegt die GPU-Geschwindigkeit beider Tools in diesem Setup nah beieinander. Die bleibenden Vorteile von faster-whisper sind die int8-Speicherersparnis (2,9 GB vs. 4,1–4,5 GB bei fp16) und die Batch-Inferenz (16 s vs. 59 s). Auf der CPU liegen whisper.cpp fp32 und faster-whisper int8 ohne Batching etwa 25 % auseinander. Die OpenAI-Whisper-Zeilen im README liefern die Ausgangsbasis: 2m23s auf der GPU (fp16, 4708 MB) und 6m58s auf der CPU (fp32, 2335 MB), gegenüber 59s bzw. 1m42s für faster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Echtzeit-Transkription einrichten',
        content:
          '**Echtzeit-Transkription verarbeitet Audio in Chunks, wie es vom Mikrofon ankommt, und erzeugt Text mit einer kurzen Verzögerung gegenüber der Sprache.** Beide Tools unterstützen dies, jedoch mit unterschiedlichen Trade-offs.',
        items: [
          '**whisper.cpp Stream-Modus:** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4` ausführen. Verarbeitet 3-Sekunden-Audio-Chunks; die Verzögerung hängt von Hardware und Modell ab und wurde von uns nicht gemessen. Kein Python erforderlich.',
          '**faster-whisper VAD-Pipeline:** `vad_filter=True` in `model.transcribe()` verwenden. Silero VAD segmentiert Audio automatisch an Stille-Grenzen – natürlichere Chunks als bei festen Zeitfenstern.',
          '**Latenz:** hängt von Hardware und Modellgröße ab und wurde von uns nicht gemessen. Kleinere Modelle wie tiny reagieren in der Regel schneller, haben aber einen höheren WER.',
          '**Modellwahl für Echtzeit:** small oder base ist der praktische Sweet Spot – schnell genug, um mit der Sprache mitzuhalten, genau genug für sauberes Audio. large-v3 nur für Echtzeit verwenden, wenn eine dedizierte GPU verfügbar ist.',
          '**Mikrofon-Eingabe:** whisper.cpp liest Rohaudiosignale über SDL2 oder portaudio. faster-whisper liest Audio-Arrays aus beliebigen Python-Audiobibliotheken (sounddevice, pyaudio, soundfile).',
          '**Stabilität:** Der Stream-Modus von whisper.cpp kann bei Stille wiederholte Tokens erzeugen. Mit `--suppress-blank` und `--no-speech-threshold` unterdrücken.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp passt am besten',
        content:
          '**Auf M1- bis M5-Macs ist whisper.cpp mit Core ML / Metal-Beschleunigung das naheliegende Tool, weil faster-whisper kein Metal-Backend hat und auf dem Mac nur über die CPU läuft.** Laut whisper.cpp-README ist der Core-ML-Encoder mehr als 3× schneller als die reine CPU-Ausführung (Herstellerangabe). Einen veröffentlichten large-v3-Benchmark für den M5 Pro haben wir nicht gefunden; deshalb nennt dieser Leitfaden keinen Echtzeitfaktor für Apple-Chips.',
        items: [
          '**Core ML-Export:** `./models/generate-coreml-model.sh large-v3` ausführen, um den Encoder ins Core ML-Format zu exportieren. Dies verlagert die Encoder-Inferenz auf die Apple Neural Engine.',
          '**Benchmarks:** Das whisper.cpp-Projekt sammelt Messwerte in seiner [Benchmark-Diskussion](https://github.com/ggml-org/whisper.cpp/discussions/89) (Encoder-Zeiten; bei unserer Prüfung ohne M5-Einträge). Einen veröffentlichten large-v3-Benchmark für den M5 Pro haben wir nicht gefunden und nennen daher keinen Echtzeitfaktor für Apple-Chips.',
          '**Eigenen Mac messen:** whisper.cpp liefert das Tool `whisper-bench` mit, das den Encoder zeitlich misst; alternativ messen Sie eine echte Datei von Anfang bis Ende. Die Ergebnisse hängen von Chip, Modellgröße und Quantisierung ab.',
          '**Arbeitsspeicher:** Unified Memory bedeutet keinen separaten VRAM. Die whisper.cpp-README nennt für das Modell large etwa 3,9 GB Speicher, was auf einem 16-GB-Mac Platz für andere Prozesse lässt.',
          '**faster-whisper auf dem Mac:** Nur CPU (int8). Für Batch-Transkription nutzbar, aber ohne Metal-Pfad; einen Benchmark gegen whisper.cpp auf Apple Silicon haben wir nicht gefunden.',
          '**Empfehlung:** whisper.cpp für die meisten Mac-STT-Aufgaben verwenden. pywhispercpp hinzufügen, wenn Python-Integration bei gleichzeitiger Metal-Beschleunigung benötigt wird.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper vorn in veröffentlichten Tests',
        content:
          '**Auf Windows und Linux mit NVIDIA-GPUs war faster-whisper in den veröffentlichten Tests, die wir gefunden haben, das schnellere Tool.** In einem Test eines Dritten auf einer RTX 4070 Ti (large-v3, Juni 2026) lief es mit 23-facher Echtzeit gegenüber 15-facher bei whisper.cpp CUDA; im faster-whisper-README-Test (large-v2, RTX 3070 Ti) lagen beide im Einzelmodus fast gleichauf (1m03s vs. 1m05s), und mit int8 und Batching setzte sich faster-whisper ab.',
        items: [
          '**RTX 4070 Ti (12 GB), large-v3, Test eines Dritten:** faster-whisper 23-fache Echtzeit (large-v3-turbo: 56-fach); whisper.cpp CUDA 15-fache (large-v3-turbo: 40-fach).',
          '**RTX 3070 Ti (8 GB), large-v2, faster-whisper-README:** Eine 13-Minuten-Datei dauerte 1m03s bei fp16, 59s bei int8 (2926 MB VRAM) und 16s bei int8 mit Batch-Größe 8.',
          '**Weitere Karten (RTX 3060, RTX 4060):** Für diese haben wir keinen veröffentlichten large-v3-Benchmark gefunden und nennen keinen Geschwindigkeitswert; der int8-VRAM-Wert oben ist der wichtigste Passungs-Check.',
          '**int8 vs. float16:** Im README-Test brauchte int8 etwa ein Drittel weniger VRAM (2926 MB vs. 4525 MB) und war etwas schneller (59s vs. 1m03s), bei in der Regel vernachlässigbarem Genauigkeitsverlust. `compute_type="int8"` ist auf NVIDIA ein sinnvoller Standard.',
          '**Batch-Verarbeitung:** Der `batched=True`-Parameter von faster-whisper ermöglicht die parallele Verarbeitung mehrerer Audiodateien und maximiert die GPU-Auslastung bei großen Transkriptionsjobs.',
          '**Python-Pipeline-Integration:** faster-whisper fügt sich direkt in LangChain, Haystack und eigene Python-Pipelines ein. Kein Subprocess-Overhead im Vergleich zum Wrapping von whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'Ältere NVIDIA-GPUs (GTX 970): int8 fällt auf float32 zurück',
        content:
          '**Auf einer GTX 970 (Maxwell, Compute Capability 5.2) läuft faster-whisper weiterhin auf CUDA, aber `compute_type="int8"` liefert kein echtes int8 — CTranslate2 wandelt die Gewichte in float32 um.** Die Quantisierungstabelle ordnet jeder GPU mit Compute Capability 6.0 oder niedriger für jeden angeforderten Typ float32 zu; die VRAM-Ersparnis und der int8-Speedup, die für RTX-Karten genannt werden, gelten hier daher nicht.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Auf einer GTX 970 (Compute Capability 5.2) läuft faster-whisper auf CUDA nur in float32 — ein angeforderter int8-Compute-Typ wird automatisch umgewandelt.',
          },
          {
            type: 'plain-terms',
            text: 'Die GTX 970 ist zu alt für GPU-int8. Sie funktioniert weiterhin, aber ohne Speicherersparnis; bleiben Sie auf ihren 4 GB bei den Modellen tiny, base oder small.',
          },
        ],
        items: [
          '**Was weiterhin funktioniert:** Die vorgebauten CTranslate2-Binaries unterstützen NVIDIA-GPUs ab Compute Capability 3.5; eine GTX 970 (5.2) kann faster-whisper daher auf CUDA ausführen, sofern die installierten CUDA- und cuDNN-Bibliotheken zur Version passen (siehe Häufige Probleme).',
          '**Wo GPU-int8 funktioniert:** int8 benötigt Compute Capability 7.0 oder höher (Volta und RTX-20-Serie aufwärts) oder genau 6.1 (GTX 1050 bis 1080 Ti, int8_float32). Compute Capability 6.0, 6.2 und alles darunter fällt auf float32 zurück; float16 benötigt 7.0 oder höher.',
          '**Folge für den Speicher:** float32 belegt 4 Byte pro Parameter gegenüber 1 Byte bei int8; nach Parameterzahl braucht large-v3 (1,55B) allein für die Gewichte etwa 6 GB — mehr als die 4 GB der GTX 970. Small (244M, etwa 1 GB in float32) passt problemlos; medium (769M, etwa 3 GB) ist grenzwertig.',
          '**Geschwindigkeit:** Wir haben keine GTX 970 gemessen, daher gibt es hier keinen Messwert. Erwarten Sie float32-Durchsatz deutlich unter den RTX-4070-Ti-Werten dieses Leitfadens und testen Sie tiny, base und small mit Ihrem eigenen Audio.',
          '**Unterstützte Typen prüfen:** `ctranslate2.get_supported_compute_types("cuda")` listet die Compute-Typen auf, die CTranslate2 auf Ihrer Karte akzeptiert.',
          '**Alternativen:** CPU-int8 (`device="cpu", compute_type="int8"`) funktioniert auf jeder modernen x86-CPU, und die quantisierten GGML-Modelle von whisper.cpp (etwa `ggml-large-v3-q5_0.bin`, rund 3–4 GB) sind der übliche Weg, größere Modelle in 4 GB unterzubringen — prüfen Sie den CUDA- oder Vulkan-Build auf Ihrer Karte.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper auf dem Raspberry Pi 5: tiny, base & small',
        content:
          '**Auf einem Raspberry Pi 5 führt whisper.cpp die Modelle tiny und base in Echtzeit für die Live-Transkription aus, während das small-Modell unterhalb der Echtzeit läuft und am besten Batch-Jobs vorbehalten bleibt.** Der Quad-Core-Cortex-A76 des Pi 5 hat keinen nutzbaren GPU-Pfad für Whisper, sodass die gesamte Inferenz auf der CPU (ARM NEON) erfolgt. Verwenden Sie die quantisierten GGML-Modelle (`ggml-*-q5_0.bin`), um den Speicherbedarf zu senken und die Inferenz zu beschleunigen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Auf einem Raspberry Pi 5 läuft das whisper.cpp-small-Modell laut Community-Berichten langsamer als Echtzeit (Batch-Einsatz; von uns nicht selbst gemessen); tiny und base gelten als die Modelle, die mit Live-Sprache mithalten.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Pi 5 kann Live-Audio mit den Whisper-Modellen tiny und base transkribieren, aber das small-Modell ist zu schwer, um in Echtzeit mitzuhalten – nutzen Sie small für aufgezeichnete Dateien, die Sie im Hintergrund verarbeiten, nicht für ein Live-Mikrofon.',
          },
        ],
        items: [
          '**Whisper small auf dem Pi 5:** Laut Berichten langsamer als Echtzeit auf der CPU (von uns nicht gemessen, Zeitangaben sind daher nur Richtwerte). Genau mit 3,4 % WER (Whisper-Paper, LibriSpeech test-clean), aber zu langsam für Live-Untertitelung – für nächtliche/Batch-Transkription verwenden.',
          '**Whisper base auf dem Pi 5:** Laut Berichten etwa in Echtzeit mit Multithreading (`-t 4`); das Ergebnis hängt von Build, Kühlung und Audio ab. Der praktische Sweet Spot für Live-Transkription auf dem Pi, mit akzeptablen 5,0 % WER.',
          '**Whisper tiny auf dem Pi 5:** Schnellste Option, laut Berichten in der Regel live-tauglich, zum Preis höherer 7,6 % WER. Am besten für Wake-Word- und Kurzbefehl-Erkennung.',
          '**Quantisierte Modelle verwenden:** `bash ./models/download-ggml-model.sh small-q5_0` senkt den RAM-Bedarf und beschleunigt die Inferenz bei minimalem Genauigkeitsverlust – wichtig beim geteilten Speicher des Pi 5.',
          '**faster-whisper auf dem Pi 5:** Installierbar (`pip install faster-whisper`, CPU int8) und wettbewerbsfähig für Batch-Jobs, aber das leichtere C-Binary von whisper.cpp ist die verbreitetere Embedded-Wahl.',
          '**Thermik:** Anhaltende Transkription belastet die CPU des Pi 5 stark – verwenden Sie aktive Kühlung, um thermisches Throttling zu vermeiden, das diese Werte verschlechtert.',
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
            text: 'Mit einem Mac: whisper.cpp wählen – es nutzt Metal und Core ML, was faster-whisper nicht unterstützt. Mit einer NVIDIA GPU und Python: faster-whisper wählen – es war in den veröffentlichten Tests schneller und brauchte mit int8 weniger GPU-Speicher.',
          },
        ],
        columns: ['Szenario', 'Empfehlung', 'Begründung'],
        rows: [
          {
            'Szenario': 'Apple Silicon Mac (beliebiges Modell)',
            'Empfehlung': 'whisper.cpp',
            'Begründung': 'Metal / Core ML-Beschleunigung; faster-whisper hat kein Metal-Backend',
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
            'Empfehlung': 'Beide testen',
            'Begründung': 'README- und Drittanbieter-CPU-Tests widersprechen sich; messen',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** Ein Hugging Face Transformers Pipeline-Wrapper mit Flash-Attention-2-Unterstützung für schnelle Batch-GPU-Inferenz auf NVIDIA-Hardware; laut README deutliche Beschleunigung (Herstellerangabe, von uns nicht gegen faster-whisper gemessen). Am besten für: Batch-Verarbeitung großer Audio-Archive auf NVIDIA-GPUs. Erfordert eine Flash-Attention-2-kompatible GPU (Ampere oder neuer: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Häufige Probleme und Lösungen',
        content: 'Die häufigsten Setup- und Laufzeit-Probleme mit direkten Lösungen:',
        items: [
          '**CUDA-Versionskonflikt:** Aktuelle faster-whisper-Versionen benötigen cuBLAS für CUDA 12 und cuDNN 9. Wer an älteren Bibliotheken hängt, pinnt ctranslate2: `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 mit cuDNN 8) oder `3.24.0` (CUDA 11 mit cuDNN 8). CUDA-Version prüfen mit `nvcc --version`.',
          '**Metal-Modell-Export schlägt fehl:** Xcode Command Line Tools müssen installiert sein – `xcode-select --install` ausführen. Das Core ML-Exportskript erfordert das Python-Paket `coremltools`: `pip install coremltools`.',
          '**Halluzination bei Stille:** Beide Tools können bei stillen Audiosegmenten wiederholte Füll-Tokens erzeugen. `--no-speech-threshold 0.6` im whisper.cpp Stream-Modus verwenden oder `vad_filter=True` in faster-whispers `model.transcribe()`, um stille Segmente automatisch zu überspringen.',
          '**Speichermangel bei large-v3:** Auf int8-Quantisierung in faster-whisper wechseln (`compute_type="int8"`) – im README-Test (large-v2) sank der VRAM-Bedarf von etwa 4,5 GB (float16) auf etwa 2,9 GB. Bei whisper.cpp: quantisierte GGML-Variante verwenden (z. B. `ggml-large-v3-q5_0.bin`), was den Speicherbedarf auf ~3–4 GB senkt.',
          '**Unleserliche Ausgabe bei nicht-englischen Aufnahmen:** Keine `.en`-Modellvarianten (tiny.en, base.en) für nicht-englische Sprache verwenden – diese sind English-only. Mehrsprachige Modelle (base, small, medium, large-v3) verwenden und die Sprache explizit angeben: `-l de` in whisper.cpp oder `language="de"` in faster-whisper.',
          '**Langsame CPU-Inferenz:** Sicherstellen, dass die CPU AVX2-Instruktionen unterstützt (für optimierte CPU-Inferenz erforderlich). Prüfen mit `grep avx2 /proc/cpuinfo` unter Linux oder `sysctl machdep.cpu.features` auf Mac. CPUs ohne AVX2 greifen auf generisches SIMD zurück und sind 2–3× langsamer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es ein Debian- oder apt-Paket für whisper.cpp?',
            a: 'Ja – whisper.cpp ist jetzt offiziell für Debian paketiert (derzeit in sid) und liefert die `whisper.cpp`-Binary sowie `libwhisper-dev` und `libwhisper1` zum Linken als Shared Library. Es hat die stabilen Debian-Releases oder die Standard-Repos von Ubuntu noch nicht erreicht, daher braucht man auf den meisten Systemen weiterhin sid oder muss aus dem Quellcode bauen. Alternativ gibt es einen inoffiziellen Snap (`sudo snap install whisper-cpp`) für Debian 9+ und Ubuntu.',
          },
          {
            q: 'Wie prüfe ich, welche whisper.cpp-Version installiert ist?',
            a: 'Starten Sie die kompilierte Binary ohne Argumente oder mit `--help` – die Version steht in der Banner-Zeile. Alternativ prüfen Sie den genauen Commit mit `git describe --tags` im geklonten Repository, oder vergleichen Sie Ihr Build-Datum mit den Release Notes unter github.com/ggml-org/whisper.cpp/releases, um zu sehen, ob Sie hinter der aktuellen v1.9.5 liegen.',
          },
          {
            q: 'Ist die Transkriptionsgenauigkeit bei whisper.cpp und faster-whisper gleich?',
            a: 'Weitgehend. Beide Tools verwenden dieselben OpenAI-Whisper-Modellgewichte, die Genauigkeit sollte daher sehr nah beieinander liegen; der Unterschied liegt hauptsächlich in der Inferenz-Laufzeit (C/C++ vs. CTranslate2 Python). Kleine Abweichungen im Ergebnis sind durch Quantisierung (z. B. int8), Dekodiereinstellungen und numerische Genauigkeit dennoch möglich. Einen WER-Unterschied zwischen beiden Laufzeiten haben wir nicht gemessen – testen Sie mit Ihrem eigenen Audio.',
          },
          {
            q: 'Kann ich faster-whisper auf einem Mac mit Apple Silicon verwenden?',
            a: 'Ja, aber es läuft nur über die CPU – faster-whisper hat keinen Metal-Support. whisper.cpp kann Metal und Core ML nutzen, und laut README ist der Core-ML-Encoder mehr als 3× schneller als die reine CPU-Ausführung. Einen veröffentlichten Benchmark faster-whisper vs. whisper.cpp auf Apple Silicon haben wir nicht gefunden – messen Sie mit Ihrem eigenen Audio. Der Hauptgrund für faster-whisper auf dem Mac ist eine bestehende Python-Pipeline, die bereits davon abhängt.',
          },
          {
            q: 'Welche Whisper-Modellgröße sollte ich für einen Sprachassistenten verwenden?',
            a: 'Für Echtzeit-Sprachinterfaces ist Whisper small die Standardempfehlung – etwa 3,4 % WER auf sauberem Englisch (Whisper-Paper, LibriSpeech test-clean), geringe Latenz auf einer modernen CPU oder GPU (hängt von der Hardware ab; von uns nicht gemessen) und passt in etwa 2 GB RAM. tiny verwenden bei sehr eingeschränkter Hardware (Raspberry Pi Zero 2W, ältere Smartphones) und wenn ~7,6 % WER akzeptabel sind. medium oder large-v3 nur für Batch-Transkription verwenden, bei der Latenz keine Rolle spielt.',
          },
          {
            q: 'Unterstützt whisper.cpp andere Sprachen als Englisch?',
            a: 'Ja. Alle mehrsprachigen Whisper-Modelle (base, small, medium, large-v3) unterstützen 99 Sprachen. `-l [Sprachcode]` in der CLI hinzufügen: `-l de` für Deutsch, `-l fr` für Französisch, `-l ja` für Japanisch usw. Die Modelle tiny.en und base.en sind English-only und etwas genauer für Englisch als ihre mehrsprachigen Äquivalente.',
          },
          {
            q: 'Wie installiere ich faster-whisper mit CUDA-Unterstützung?',
            a: 'Installation mit `pip install faster-whisper`. Aktuelle Versionen benötigen NVIDIA cuBLAS für CUDA 12 und cuDNN 9 auf dem System (unter Linux liefert `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"` beides). Bei älteren CUDA-11-/cuDNN-8-Setups `ctranslate2==3.24.0` pinnen (oder `4.4.0` für CUDA 12 mit cuDNN 8). Dann `device="cuda"` beim Laden des Modells angeben: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Mit `device="auto"` fällt faster-whisper auf die CPU zurück, wenn CUDA nicht verfügbar ist.',
          },
          {
            q: 'Welches ist genauer – whisper.cpp oder faster-whisper?',
            a: 'Sehr ähnlich, aber nicht garantiert identisch. Beide Tools verwenden dieselben OpenAI-Whisper-Modellgewichte, die Genauigkeit sollte bei gleichem Audio daher sehr nah beieinander liegen. Der Hauptunterschied zwischen whisper.cpp und faster-whisper liegt in Geschwindigkeit und Plattformunterstützung. Quantisierung (int8, q5_0), Beam-Größe und weitere Dekodiereinstellungen können das Transkript leicht verändern; wir haben das nicht gemessen, vergleichen Sie beide daher an einer Stichprobe Ihres eigenen Audios.',
          },
          {
            q: 'Kann ich Whisper large-v3 mit 8 GB RAM betreiben?',
            a: 'Ja auf der GPU – large-v3 int8 in faster-whisper sollte auf eine 8-GB-GPU passen (die faster-whisper-README maß 2926 MB VRAM für large-v2 bei int8). Auf reiner CPU-Hardware sind 8 GB RAM für large-v3 knapp (float32 braucht grob 10 GB). Auf Nur-CPU-Systemen medium (5 GB RAM) oder small (2 GB RAM) verwenden. Im README-Test brauchte whisper.cpp auf der CPU weniger RAM als faster-whisper (1049 MB vs. 1477 MB bei int8).',
          },
          {
            q: 'Was kostet lokales Whisper im Vergleich zu Cloud-STT?',
            a: 'Keine laufenden Lizenz- oder Minutengebühren. Cloud-STT-Dienste berechnen typischerweise ca. 0,005–0,022 €/Min. (aktuelle Preise prüfen) – für einen Entwickler, der 8 Stunden Meetings pro Woche transkribiert, sind das grob 10–45 €/Monat. Lokales Whisper läuft auf bereits vorhandener Hardware, ohne minutenbasierte Gebühren und ohne API-Schlüsselverwaltung, und es muss kein Audio an einen Cloud-Dienst gesendet werden (Strom und Einrichtungsaufwand nicht eingerechnet).',
          },
          {
            q: 'Hilft lokale Whisper-Transkription bei der DSGVO-Compliance?',
            a: 'Sie kann die Compliance erleichtern, garantiert sie aber nicht. Wenn die Audiodaten Ihr eigenes Gerät nie verlassen und kein externer Dienstleister beteiligt ist, entfällt für den Transkriptionsschritt in der Regel die Auftragsverarbeitung nach DSGVO Art. 28. Rechtsgrundlage, Informationspflichten, Speicherung und Zugriffsschutz bleiben jedoch Ihre Aufgabe, und ob Ihr konkreter Einsatz konform ist, hängt vom Einzelfall ab. Klären Sie das bei besonders sensiblen Daten (etwa Gesundheitsdaten) mit Ihrer Datenschutzbeauftragten oder einer Rechtsberatung. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Ist Whisper für den deutschen Mittelstand geeignet?',
            a: 'Ja – insbesondere für Branchen mit hohen Datenschutzanforderungen wie Anwaltskanzleien, Arztpraxen, Steuerberater und Unternehmensberatungen. Der Einsatz von whisper.cpp oder faster-whisper kann die Protokollierung von Kundengesprächen und Besprechungen ohne Cloud-Abhängigkeit erleichtern; die DSGVO-Pflichten (Rechtsgrundlage, Speicherung, Löschung) bleiben dennoch bei Ihnen und müssen gesondert geprüft werden. Kein laufendes Abonnement, keine API-Kosten, volle Kontrolle über die Audiodaten. Für den Einstieg empfiehlt sich Whisper small (3,4 % WER, 2 GB RAM) oder medium (2,9 % WER, 5 GB RAM) – beide laufen auf handelsüblicher Hardware ohne NVIDIA-GPU.',
          },
          {
            q: 'Funktioniert faster-whisper int8 auf einer GTX 970?',
            a: 'Nein — nicht als echtes int8. Die GTX 970 hat Compute Capability 5.2, und CTranslate2 führt int8 nur auf GPUs mit Compute Capability 7.0 oder höher (oder genau 6.1) aus; auf älteren Karten werden die Gewichte automatisch in float32 umgewandelt. faster-whisper läuft weiterhin auf der GPU in float32. Nutzen Sie tiny, base oder small, um in 4 GB zu bleiben, oder CPU-int8, das auf jeder modernen x86-CPU funktioniert. Wir haben keine GTX 970 gemessen, daher gibt es hier keinen Messwert.',
          },
          {
            q: 'Wie groß sind die Whisper-Modelldateien für whisper.cpp und faster-whisper?',
            a: 'Die README von whisper.cpp nennt GGML-Modelldateien von etwa 75 MiB (tiny), 142 MiB (base), 466 MiB (small), 1,5 GiB (medium) und 2,9 GiB (large) auf der Platte; sie benötigen rund 273 MB, 388 MB, 852 MB, 2,1 GB und 3,9 GB Speicher. faster-whisper lädt CTranslate2-Modelle beim ersten Start von Hugging Face; large-v3 ist dort etwa 3 GB groß (1,55B Parameter mit je 2 Byte in float16). Die Modellgrößen-Tabelle oben nennt die Parameterzahlen aller Größen.',
          },
          {
            q: 'Ist Whisper large-v3-turbo für lokale Transkription besser als large-v3?',
            a: 'Es ist schneller, nicht genauer. large-v3-turbo hat 809M Parameter, weil OpenAI den Decoder von 32 auf 4 Schichten gekürzt hat; die Model Card beschreibt es als deutlich schneller als large-v3 bei geringfügig geringerer Qualität, unter MIT-Lizenz. Die Karte warnt außerdem vor Halluzinationen und Textwiederholungen sowie unterschiedlicher Genauigkeit je Sprache. Behalten Sie large-v3 für schwierigstes Audio und nutzen Sie turbo (oder distil-large-v3 für Englisch), wenn Geschwindigkeit zählt. whisper.cpp und faster-whisper können es beide ausführen.',
          },
          {
            q: 'Kann whisper.cpp eine AMD- oder Intel-GPU statt CUDA nutzen?',
            a: 'Ja. Das Vulkan-Backend von whisper.cpp (`-DGGML_VULKAN=1`) funktioniert herstellerübergreifend, sofern der Treiber die Vulkan-API unterstützt; ROCm/HIP (`-DGGML_HIP=1`) zielt auf AMD-GPUs, und OpenVINO beschleunigt den Encoder auf Intel-CPUs und -GPUs. Die Dokumentation von faster-whisper behandelt nur NVIDIA CUDA; die CTranslate2-Release-Notes erwähnen ROCm-Wheels, diesen Weg haben wir aber nicht getestet.',
          },
          {
            q: 'Ist mlx-whisper auf einem Mac schneller als whisper.cpp?',
            a: 'Ein unabhängiger Test sagt ja für large-v3-turbo: Bill Mills Wiederholung vom Januar 2026 maß für mlx_whisper etwa 13,1 Sekunden gegenüber 26,7 Sekunden für whisper.cpp bei derselben langen Aufnahme, also rund 2× schneller. Ein Community-Speedtest mit einem kurzen Clip sah beide nah beieinander, wobei whisper.cpp Core ML und q5_0-Quantisierung nutzte. Die M5-Pro-Werte in diesem Leitfaden wurden nicht mit MLX verglichen; testen Sie daher Ihr eigenes Audio, bevor Sie sich entscheiden.',
          },
          {
            q: 'Ist faster-whisper schneller als OpenAI Whisper?',
            a: 'Ja. Laut README von faster-whisper ist die CTranslate2-Neuimplementierung bei gleicher Genauigkeit bis zu viermal schneller als das ursprüngliche Paket openai/whisper und braucht weniger Speicher; 8-Bit-Quantisierung steigert die Effizienz auf CPU und GPU weiter. Im 13-Minuten-Test des READMEs benötigte openai/whisper auf einer RTX 3070 Ti (large-v2, fp16) 2m23s gegenüber 1m03s für faster-whisper fp16 und 59s für int8, sowie auf einer Intel-Core-i7-12700K-CPU (Modell small, fp32) 6m58s gegenüber 1m42s für faster-whisper int8. Beide nutzen dieselben Whisper-Gewichte, die Genauigkeit sollte also im Wesentlichen gleich bleiben; whisper.cpp, die dritte Laufzeitumgebung, schaffte den GPU-Test mit Flash Attention in 1m05s.',
          },
          {
            q: 'Ist Whisper auf einer GPU schneller als auf einer CPU?',
            a: 'Bei großen Modellen ja; bei kleinen reicht oft eine CPU. In der faster-whisper-README benötigte large-v2 auf einer RTX 3070 Ti bei int8 59 s für eine 13-Minuten-Datei, das Modell small auf einer Intel Core i7-12700K-CPU bei int8 1m42s – anderes Modell, andere Hardware, vergleichen Sie also nur Größenordnungen. Ein Test eines Dritten mit large-v3 auf einer Intel Core i5-13400F-CPU maß whisper.cpp mit 15-facher und faster-whisper mit 2-facher Echtzeit. Auf einem Raspberry Pi 5 sollen laut Community-Berichten tiny und base mit Live-Sprache Schritt halten; von uns nicht gemessen.',
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
          '[insanely-fast-whisper auf GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Flash-Attention-2-Whisper-Pipeline für Batch-Inferenz auf NVIDIA-GPUs (Benchmarks laut README, Herstellerangabe).',
          '[OpenAI Whisper auf GitHub](https://github.com/openai/whisper) — Originales Whisper-Modell, Paper, Modellkarten und die Tabelle der relativen Geschwindigkeit (A100) für alle Größen.',
          '[x2q.net: Whisper-Backend-Vergleich](https://www.x2q.net/post/whisper-backend-shootout/) — Benchmark eines Dritten vom Juni 2026 (RTX 4070 Ti und Intel Core i5-13400F, large-v3, dänische Telefongespräche) hinter den Echtzeitfaktoren für faster-whisper und whisper.cpp.',
          '[whisper.cpp-Benchmark-Diskussion](https://github.com/ggml-org/whisper.cpp/discussions/89) — Community-Encoder-Zeiten für Apple Silicon und andere Chips.',
          '[OpenAI Whisper Paper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — „Robust Speech Recognition via Large-Scale Weak Supervision." Quelle der WER-Werte.',
          '[CTranslate2-Dokumentation](https://github.com/OpenNMT/CTranslate2) — Quantisierungsdetails, Hardware-Unterstützung und int8-Optimierungsgrundlagen.',
          '[CTranslate2-Dokumentation zur Quantisierung](https://opennmt.net/CTranslate2/quantization.html) — Welche Compute-Typen welche GPU-Compute-Capability unterstützt (Grundlage des GTX-970-Abschnitts).',
          '[faster-whisper-README-Benchmarks](https://github.com/SYSTRAN/faster-whisper#benchmark) — 13-Minuten-Laufzeiten für GPU und CPU im Referenz-Benchmark sowie die aktuellen CUDA-12-/cuDNN-9-Anforderungen.',
          '[openai/whisper-large-v3-turbo auf Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — Model Card: 809M Parameter, 4 Decoder-Schichten, MIT-Lizenz.',
          '[Bill Mill: aktualisierter Benchmark mlx_whisper vs. whisper.cpp](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Unabhängiger large-v3-turbo-Zeitvergleich auf Apple Silicon.',
          '[whisper.cpp-Releases](https://github.com/ggml-org/whisper.cpp/releases) — Release Notes zu v1.9.4 und v1.9.5.',
          '[CTranslate2-Releases](https://github.com/OpenNMT/CTranslate2/releases) — Release Notes zu v4.8.3, v4.8.4 und v4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale TTS und Voice Cloning 2026: Piper vs Coqui vs XTTS v2](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Der TTS-Begleiter: transkribierte Texte wieder in Sprache umwandeln, offline.',
          '[Vollständig offline Sprachassistenten erstellen 2026](/de/power-local-llm/build-local-voice-assistant-2026) — Whisper STT mit einem lokalen LLM und Piper TTS zu einer vollständigen Sprach-Pipeline verbinden.',
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Vision-Modelle neben STT und TTS für einen vollständigen lokalen multimodalen Stack hinzufügen.',
          '[Lokaler LLM Hardware-Guide](/de/local-llms/local-llm-hardware-guide) — GPU- und RAM-Anforderungen für die vollständige Sprach- + LLM-Pipeline.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen](/de/power-local-llm/voice-assistant-local-mobile-offline) — Mobile Version: WhisperKit auf iPhone, Layla auf Android.',
        ],
      },
    },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026 : Benchmarks STT local, configuration & accélération GPU',
    seoTitle: 'whisper.cpp vs faster-whisper vs Whisper 2026 : CPU/GPU',
    intro:
      'whisper.cpp et faster-whisper sont les deux implémentations dominantes du modèle Whisper d\'OpenAI pour la transcription locale hors ligne en 2026. Ce guide whisper.cpp vs faster-whisper détermine quel outil s\'impose sur chaque plateforme. whisper.cpp est un portage pur C/C++ fonctionnant sur Apple Metal, CUDA, Vulkan et CPU — idéal pour Apple Silicon, les systèmes embarqués et les applications vocales temps réel. faster-whisper est une bibliothèque Python utilisant CTranslate2 qui, selon son README, est jusqu\'à 4× plus rapide que l\'implémentation originale de Whisper à précision égale.',
    metaDescription:
      'faster-whisper est jusqu\'à 4x plus rapide qu\'OpenAI Whisper ; whisper.cpp ajoute Apple Metal. Temps CPU vs GPU, VRAM et WER de benchmarks publiés.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-fr.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Utilisez whisper.cpp sur Apple Silicon et les appareils embarqués, faster-whisper sur GPU NVIDIA et dans les pipelines Python — les deux exécutent les mêmes poids OpenAI Whisper, donc la précision est pratiquement la même et ce sont surtout la vitesse et l\'intégration qui diffèrent.**',
    quickAnswerTop: {
      fr: {
        question: 'Whisper.cpp ou faster-whisper pour la reconnaissance vocale locale en 2026 ?',
        answer:
          'Le choix dépend de votre matériel et de vos besoins d\'intégration. Sur Apple Silicon, whisper.cpp avec Metal et Core ML est le choix naturel, car faster-whisper n\'a pas de backend Metal. Sur GPU NVIDIA, faster-whisper était plus rapide dans les tests publiés que nous avons trouvés (23× vs 15× le temps réel pour large-v3 sur une RTX 4070 Ti, test tiers) et s\'intègre plus facilement aux pipelines Python. Sur CPU seul, les résultats publiés divergent : mesurez avec votre propre audio.',
        bullets: [
          'Apple Silicon → whisper.cpp avec Core ML / Metal ; faster-whisper n\'a pas de backend Metal.',
          'GPU NVIDIA → faster-whisper. Test tiers RTX 4070 Ti, large-v3 : 23× le temps réel contre 15× pour whisper.cpp CUDA.',
          'Pipeline Python → faster-whisper. API Python native, configuration en 5 lignes, VAD intégré.',
          'Embarqué / Raspberry Pi 5 → whisper.cpp. Binaire C pur, aucun runtime Python ; tiny/base tournent en temps réel, small uniquement en mode batch.',
          'Voix temps réel → mode stream whisper.cpp ou pipeline VAD faster-whisper.',
          'Transcription par lots → faster-whisper. Meilleur débit sur GPU ; batching asynchrone facile.',
          'Précision WER : attendue très proche — les deux utilisent les mêmes poids de modèle Whisper (la quantification et les réglages de décodage peuvent causer de petits écarts).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'En un coup d\'œil', anchor: '#quick-facts' },
      { label: 'Pourquoi la reconnaissance vocale locale ?', anchor: '#why-local-stt' },
      { label: 'Tailles des modèles Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper : l\'alternative plus rapide', anchor: '#distil-whisper' },
      { label: 'whisper.cpp – le port C/C++', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp : dernière version & mises à jour', anchor: '#whats-new' },
      { label: 'faster-whisper – le port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Obtenir ggml-base.bin via pip (configuration Python)', anchor: '#install-ggml-pip' },
      { label: 'Comparaison directe : tableau de benchmarks', anchor: '#benchmarks' },
      { label: 'Benchmark de référence : durées GPU vs CPU', anchor: '#reference-benchmark' },
      { label: 'Configuration de la transcription en temps réel', anchor: '#real-time' },
      { label: 'Apple Silicon : whisper.cpp, le choix naturel', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA : faster-whisper devant dans les tests publiés', anchor: '#nvidia-gpu' },
      { label: 'Anciens GPU NVIDIA (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper sur Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp est le choix STT local naturel pour Apple Silicon.** Le port C/C++ s\'appuie sur Core ML et Apple Metal pour l\'accélération matérielle — son README indique un encodeur Core ML plus de 3× plus rapide qu\'une exécution CPU seule (annoncé par les développeurs) — et ne nécessite pas Python.',
          '**faster-whisper était plus rapide sur GPU NVIDIA dans les tests publiés que nous avons trouvés, et convient aux pipelines Python.** Dans le test du README, int8 a fait passer la VRAM de 4708 MB (OpenAI Whisper fp16) à 2926 MB (large-v2, RTX 3070 Ti, annoncé par les développeurs) ; un test tiers sur RTX 4070 Ti a mesuré 23× le temps réel contre 15× pour whisper.cpp CUDA (large-v3).',
          '**Les deux outils utilisent des poids de modèle Whisper identiques d\'OpenAI.** La précision devrait donc être très proche — les différences portent surtout sur la performance d\'exécution et le chemin d\'intégration ; de petits écarts de WER dus à la quantification et aux réglages de décodage restent possibles, nous ne les avons pas mesurés.',
          '**Whisper large-v3 offre la meilleure précision avec 2.5 % de WER sur l\'anglais.** Pour la plupart des cas d\'usage, Whisper small (3.4 % WER, 2 GB RAM) ou medium (2.9 % WER, 5 GB RAM) offre un meilleur compromis vitesse-précision.',
          '**La transcription en temps réel est accessible avec les deux outils** — whisper.cpp via son flag `--stream`, faster-whisper via son pipeline VAD intégré. Le décalage du texte par rapport à la parole en direct varie selon le matériel et la taille du modèle ; nous ne l\'avons pas mesuré.',
          '**whisper.cpp fonctionne sur CPU, Metal, CUDA et Vulkan** — choix le plus pratique pour les déploiements embarqués multi-plateformes (Raspberry Pi, GPU Windows, serveurs ARM). faster-whisper supporte uniquement CPU et CUDA (pas de Metal sur Mac).',
          '**Pour Raspberry Pi 5 et Linux embarqué, whisper.cpp tiny et base sur CPU** sont les modèles capables de temps réel — tiny tourne confortablement plus vite que le temps réel, base autour du temps réel avec `-t 4`. Le modèle small (3.4 % WER) tourne en deçà du temps réel sur le Pi 5 et convient mieux aux jobs par lots. Toute l\'inférence se fait sur CPU (ARM NEON) — le Pi n\'a pas de chemin GPU utilisable pour Whisper. Ces indications pour le Pi 5 proviennent de retours de la communauté, pas de nos propres mesures.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'En un coup d\'œil',
        items: [
          '**Les deux outils :** basés sur le modèle Whisper open source d\'OpenAI (licence MIT). Mêmes poids de modèle, donc précision similaire — runtimes différents.',
          '**whisper.cpp :** écrit en C/C++ par Georgi Gerganov. Supporte CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Aucun Python requis.',
          '**faster-whisper :** bibliothèque Python utilisant CTranslate2. Supporte CPU (int8) et CUDA. Pas de support Apple Metal.',
          '**Tailles de modèles Whisper :** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1.55B). Tous au format GGML / CTranslate2.',
          '**Meilleur modèle pour la plupart des usages :** Whisper small — 3.4 % WER et environ 2 GB de mémoire ; passez à medium ou large-v3 quand la précision prime sur la vitesse.',
          '**GPU NVIDIA (large-v3, test tiers, RTX 4070 Ti) :** faster-whisper 23× le temps réel ; whisper.cpp CUDA 15× le temps réel.',
          '**Apple Silicon :** whisper.cpp fonctionne via Metal et Core ML (README : encodeur Core ML plus de 3× plus rapide que le CPU seul) ; faster-whisper n\'a pas de backend Metal. Nous n\'avons trouvé aucun benchmark publié de large-v3 sur M5 Pro.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Pourquoi la reconnaissance vocale locale ?',
        content:
          'Les services STT cloud (Google Speech-to-Text, AWS Transcribe, Azure Speech) facturent à la minute audio — en général env. 0.005–0.022 €/min — et envoient vos données audio vers des serveurs distants. Pour les applications sensibles (dictée médicale, enregistrements juridiques, entretiens journalistiques, réunions d\'entreprise), la transcription locale évite d\'envoyer l\'audio à un service tiers. Les obligations de protection des données (base légale, sécurité du stockage) restent les vôtres.',
        items: [
          '**Confidentialité :** les deux outils peuvent fonctionner en local sans envoyer l\'audio à un service cloud ; aucun prestataire cloud n\'a alors besoin d\'intervenir dans la transcription. Les obligations de protection des données (base légale, stockage sécurisé) restent les vôtres.',
          '**Coût :** pas de frais à la minute. Aux tarifs catalogue cloud courants d\'env. 0.005–0.022 €/min (vérifiez les tarifs actuels), un développeur qui transcrit 8 heures de réunions par semaine paierait environ 10–45 €/mois ; la transcription locale évite ce coût (matériel et électricité non inclus).',
          '**Hors ligne :** fonctionne en avion, dans des installations sécurisées, sans connexion fiable. Aucune gestion de clé API.',
          '**Latence :** pas d\'aller-retour upload/download. Pour les interfaces vocales temps réel, le traitement local peut réduire la latence STT par rapport à un aller-retour vers le cloud ; le gain dépend de votre réseau et de votre matériel.',
          '**Personnalisation :** affinage sur un vocabulaire spécifique au domaine. Utilisation de n\'importe quelle taille de modèle adaptée à votre matériel.',
          '**Intégration Home Assistant :** Whisper peut fonctionner en local sans envoyer d\'audio à un service cloud, de sorte que les mots de réveil et les commandes vocales peuvent rester sur votre réseau domestique. Voir [Whisper local dans Home Assistant →](/fr/smart-home/local-whisper-home-assistant) pour la configuration du module qui remplace entièrement le STT cloud.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tailles des modèles Whisper',
        content:
          'whisper.cpp et faster-whisper utilisent les mêmes poids de modèle Whisper, convertis dans leur format respectif (GGML pour whisper.cpp, CTranslate2 pour faster-whisper). Choisissez la taille de modèle en fonction de votre budget VRAM/RAM et de vos exigences de précision.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-fr.webp',
          imageCaption: 'Tailles de modèles Whisper partagées par whisper.cpp et faster-whisper, de tiny à large-v3.',
          imageAlt: 'Affiche « Tailles de modèles Whisper : vitesse vs précision » : tiny est environ 10 fois plus rapide que large, large-v3 est le plus lent et le plus précis, vitesses issues du README d\'OpenAI sur A100',
        columns: ['Modèle', 'Paramètres', 'VRAM / RAM', 'WER anglais', 'Vitesse relative (vs large)'],
        rows: [
          {
            'Modèle': 'tiny',
            'Paramètres': '39M',
            'VRAM / RAM': '~1 GB',
            'WER anglais': '7.6 %',
            'Vitesse relative (vs large)': '~10×',
          },
          {
            'Modèle': 'base',
            'Paramètres': '74M',
            'VRAM / RAM': '~1 GB',
            'WER anglais': '5.0 %',
            'Vitesse relative (vs large)': '~7×',
          },
          {
            'Modèle': 'small',
            'Paramètres': '244M',
            'VRAM / RAM': '~2 GB',
            'WER anglais': '3.4 %',
            'Vitesse relative (vs large)': '~4×',
          },
          {
            'Modèle': 'medium',
            'Paramètres': '769M',
            'VRAM / RAM': '~5 GB',
            'WER anglais': '2.9 %',
            'Vitesse relative (vs large)': '~2×',
          },
          {
            'Modèle': 'large-v3',
            'Paramètres': '1.55B',
            'VRAM / RAM': '~10 GB',
            'WER anglais': '2.5 %',
            'Vitesse relative (vs large)': '1× (référence)',
          },
          {
            'Modèle': 'distil-large-v3',
            'Paramètres': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER anglais': '~2.6 %',
            'Vitesse relative (vs large)': '~6.3×',
          },
        ],
        note: 'WER (taux d\'erreur de mots), plus bas = mieux. Les valeurs de tiny, base, small et medium proviennent de l\'article Whisper (Radford et al., 2022, annexe D.1.1, LibriSpeech test-clean, décodage glouton). L\'article ne couvre ni large-v3 ni distil-large-v3 : leurs valeurs sont approximatives et pas directement comparables. Les vitesses relatives sont les valeurs publiées par OpenAI dans le README de Whisper, mesurées sur un A100 par rapport au modèle large (annoncé par les développeurs) ; la vitesse réelle dépend du matériel. distil-large-v3 est 6.3× plus rapide que large-v3 selon sa fiche modèle.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper : l\'alternative plus rapide',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) est une variante distillée de large-v3 avec ~50 % de paramètres en moins, tournant 6.3× plus vite pour un WER supérieur de seulement ~1 %.** C\'est le bon choix quand la vitesse de transcription prime sur le dernier pourcent de précision. distil-large-v3 fonctionne avec faster-whisper (support CTranslate2 natif) et whisper.cpp (via conversion au format GGML).',
        items: [
          '**Paramètres :** ~756M — environ la moitié des 1.55B de large-v3, tenant dans ~4 GB de VRAM au lieu de ~10 GB.',
          '**Vitesse :** 6.3× plus rapide que large-v3 selon la fiche modèle (latence relative, pas un facteur temps réel), avec un WER à environ 1 % de large-v3 sur l\'audio long.',
          '**WER :** ~2.6 % sur l\'anglais — seulement ~0.1 % au-dessus des 2.5 % de large-v3. En pratique, la différence est probablement difficile à remarquer sur de la parole typique ; nous ne l\'avons pas testé.',
          '**Compatibilité :** fonctionne nativement avec faster-whisper (`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`). Pour whisper.cpp : conversion au format GGML via le script de conversion distil-whisper.',
          '**Idéal pour :** transcription par lots, déploiements serveur avec VRAM limitée, et tout cas d\'usage nécessitant la qualité de large-v3 à la vitesse du modèle medium.',
          '**Déconseillé pour :** la transcription multilingue — distil-large-v3 est optimisé uniquement pour l\'anglais. Pour d\'autres langues, utiliser large-v3 ou medium.',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp – le port C/C++',
        content:
          '**whisper.cpp (par Georgi Gerganov) est une réimplémentation pure C/C++ du modèle Whisper d\'OpenAI, optimisée pour l\'inférence à faibles ressources sur toutes plateformes.** Aucun Python, aucun toolkit CUDA requis — fonctionne sur pratiquement tout matériel, du Raspberry Pi à l\'Apple M5 Pro.',
        items: [
          '**Support plateforme :** CPU (AVX2, AVX512, ARM NEON), Apple Metal (Core ML), CUDA (NVIDIA), Vulkan (GPU AMD/Intel), OpenCL.',
          '**Avantage Apple Silicon :** whisper.cpp exporte les modèles au format Core ML, permettant l\'inférence sur l\'Apple Neural Engine. Son README indique un encodeur Core ML plus de 3× plus rapide qu\'une exécution CPU seule (annoncé par les développeurs).',
          '**Installation :** cloner le dépôt, exécuter `make` (ou `cmake`). Binaires pré-compilés disponibles pour les plateformes courantes. Aucune dépendance Python.',
          '**Téléchargement du modèle :** `bash ./models/download-ggml-model.sh base.en` — télécharge le fichier modèle GGML (~142 MB pour base).',
          '**Exemple CLI :** `./main -m models/ggml-base.bin -f audio.wav` — transcrit un fichier WAV vers stdout. Ajouter `-l fr` pour le français.',
          '**Mode stream temps réel :** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcrit depuis le microphone par chunks de 3 secondes.',
          '**Wrapper Python :** pywhispercpp fournit une liaison Python pour whisper.cpp, permettant son utilisation dans des pipelines Python sans sacrifier l\'accélération Metal.',
          '**VAD :** whisper.cpp prend en charge, en option, la détection d\'activité vocale Silero via `--vad` dans `whisper-cli` (un modèle VAD distinct est à télécharger). Le mode stream nécessite toujours l\'ajustement des paramètres `--step` et `--length` selon le cas d\'usage.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp : dernière version & mises à jour',
        content:
          '**La dernière version de whisper.cpp est la v1.9.5, publiée le 6 octobre 2026.** Elle synchronise la bibliothèque ggml embarquée avec v0.26.0 (travaux sur les backends CUDA, Vulkan, Metal, SYCL, OpenCL et les kernels CPU) et ajoute des correctifs Whisper, comme un callback d\'abandon pendant la détection de langue et une correction de dépassement d\'entier dans les décalages de chunks parallèles. whisper.cpp dispose aussi d\'un paquet Debian officiel (sid) (`whisper.cpp`, `libwhisper-dev`, `libwhisper1`), en plus du Snap non officiel. La dernière version taguée de faster-whisper reste la v1.2.1 (31 octobre 2025), mais le dépôt est activement maintenu : le dernier commit date du 2 novembre 2026 (vérifié le 3 novembre 2026). Les deux runtimes chargent toujours les mêmes poids OpenAI Whisper ; nous n\'avons connaissance d\'aucune nouvelle classe de modèle ayant modifié la précision de transcription en 2026.',
        items: [
          '**whisper.cpp v1.9.5 (6 octobre 2026) :** synchronisation ggml avec v0.26.0 (mises à jour des kernels CUDA, Vulkan, Metal, SYCL, OpenCL, WebGPU et CPU), callback d\'abandon pendant la détection de langue, correction d\'un dépassement d\'entier dans les décalages de chunks parallèles, et code d\'erreur correct de la CLI quand un fichier échoue.',
          '**whisper.cpp v1.9.4 (11 septembre 2026) :** le serveur renvoie désormais la langue détectée, le callback de l\'encodeur s\'exécute avant la détection automatique de langue, et Windows sur ARM a été ajouté au job de release.',
          '**whisper.cpp v1.9.3 (20 août 2026) :** synchronisation ggml avec v0.20.2, améliorations de performance sur tous les backends, quantification Metal TQ2_0, kernels CUDA/SYCL fusionnés, correctifs ARM/WASI.',
          '**whisper.cpp v1.9.0–v1.9.2 (juin–août 2026) :** versions intermédiaires dans la même ligne de synchronisation ggml avant la v1.9.3.',
          '**whisper.cpp v1.8.6 (2 juin 2026) :** réimplémentation de `ffmpeg-transcode` pour un décodage FFmpeg optionnel plus clair des fichiers audio compressés (MP3, M4A), plus une correction du chemin des exemples CI.',
          '**whisper.cpp v1.8.5 (mai 2026) :** améliorations du VAD en streaming (détection d\'activité vocale), corrections de fuites de paramètres serveur et d\'horodatages de tokens, ainsi que des corrections de fuites mémoire dans les bindings Ruby et VAD.',
          '**whisper.cpp v1.8.4 (19 mars 2026) :** dernière synchronisation `ggml` avec de larges gains de performance, un nouveau flag `-g` / `--gpu-device` (et sélection de périphérique `GGML_CUDA`) pour choisir un GPU, et des corrections de retour à la ligne des segments UTF-8.',
          '**Le VAD natif est désormais intégré à whisper.cpp.** Les versions récentes ont ajouté un chemin natif de détection d\'activité vocale, réduisant un avantage de longue date de faster-whisper — même si l\'intégration Silero VAD de faster-whisper reste plus clé en main.',
          '**faster-whisper v1.2.1 (31 octobre 2025) :** dernière version taguée ; `pip install faster-whisper` l\'installe. Aucune version taguée en 2026, mais la branche principale est active : le dernier commit (2 novembre 2026, vérifié le 3 novembre 2026) corrige la CI, et les commits du 16 octobre 2026 ajoutent des validations d\'entrée, comme une erreur pour les langues non prises en charge par un modèle. La v1.2.0 (août 2025) a ajouté la prise en charge de distil-large-v3.5.',
          '**CTranslate2 v4.8.4 (25 octobre 2026) :** le moteur d\'inférence sous faster-whisper a publié une nouvelle version. Elle ajoute des garde-fous contre les dépassements d\'entiers dans le calcul de la taille des tenseurs, des correctifs pour Conv1D sur CPU et pour un dépassement de l\'échelle de quantification INT8 sur de très petites lignes de poids, ainsi qu\'une implémentation expérimentale de synthèse vocale hors ligne (Drama 3). La version précédente, v4.8.3 (13 octobre 2026), avait apporté des correctifs ROCm sous Windows, un durcissement au chargement et la correction d\'une division par zéro dans Whisper `align()` lorsqu\'une fenêtre ne contient aucune trame. La v4.8.5 a suivi le 2 novembre 2026 (vérifié le 3 novembre 2026), avec des correctifs de précision d\'attention CUDA et un guide de compilation Windows ROCm/HIP.',
          '**Aucun nouveau modèle Whisper de classe supérieure en 2026.** Les derniers poids multilingues d\'OpenAI restent large-v3-turbo (octobre 2024 ; 809M de paramètres, décodeur réduit de 32 à 4 couches, licence MIT), qui échange une légère perte de qualité contre une vitesse bien supérieure et fonctionne dans les deux outils. distil-large-v3 reste l\'option rapide réservée à l\'anglais. À notre connaissance, les mises à jour des deux runtimes sont des changements de runtime et d\'outillage, pas de précision.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper – le port CTranslate2',
        content:
          '**faster-whisper (par SYSTRAN) est une bibliothèque Python réimplémentant l\'inférence Whisper avec CTranslate2 — un moteur d\'inférence C++ hautement optimisé supportant la quantification int8, qui réduit l\'utilisation VRAM et augmente le débit.** Sur GPU NVIDIA, faster-whisper figure parmi les implémentations locales de Whisper les plus rapides dans les tests publiés.',
        items: [
          '**Support plateforme :** CPU (quantification int8) et GPU NVIDIA CUDA. Pas de support Apple Metal — tourne uniquement sur CPU sur Mac.',
          '**Avantage int8 :** la quantification int8 de CTranslate2 a réduit la VRAM d\'environ un tiers dans le test du README (4525 MB en fp16 contre 2926 MB en int8, large-v2) avec un léger gain de vitesse (1m03s contre 59s) ; l\'impact sur le WER est généralement négligeable.',
          '**Installation :** `pip install faster-whisper` — aucune compilation requise (Python 3.9+). L\'usage GPU exige NVIDIA cuBLAS pour CUDA 12 et cuDNN 9 ; les anciennes configurations CUDA 11 / cuDNN 8 doivent épingler un `ctranslate2` plus ancien (3.24.0).',
          '**VAD intégré :** faster-whisper inclut l\'intégration Silero VAD, qui ignore automatiquement les segments audio silencieux — crucial pour les pipelines de transcription temps réel.',
          '**Python natif :** l\'API Python directe facilite le chaînage avec des LLM, des bibliothèques de traitement audio et des frameworks web.',
          '**Vitesse :** dans le test du README (large-v2, RTX 3070 Ti, fichier de 13 minutes), int8 a pris 59 s et int8 avec batch de 8 seulement 16 s ; un test tiers sur RTX 4070 Ti a mesuré 23× le temps réel pour large-v3.',
          '**Traitement par lots :** faster-whisper supporte l\'inférence en batch pour traiter efficacement de grandes archives audio.',
          '**Limitation :** pas de support Metal sur Mac — il tourne sur CPU seul sur Apple Silicon. Nous n\'avons trouvé aucun benchmark publié faster-whisper contre whisper.cpp sur Apple Silicon.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'Obtenir ggml-base.bin via pip (configuration Python)',
        content:
          '**Pour utiliser ggml-base.bin depuis Python via pip, installez le binding `pywhispercpp` — `pip install pywhispercpp` — puis chargez `Model("base")`, qui télécharge `ggml-base.bin` automatiquement au premier lancement.** Il n\'existe pas de `pip install whisper.cpp` ; pywhispercpp est le wrapper pip autour du moteur C/C++ whisper.cpp, et il conserve l\'accélération Metal et CUDA. Le fichier modèle GGML (`ggml-base.bin`, ~142 MB) est téléchargé séparément depuis Hugging Face et mis en cache localement — le paquet pip livre le moteur d\'inférence, pas les poids.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Exécutez `pip install pywhispercpp`, puis `Model("base")` en Python récupère et met en cache ggml-base.bin automatiquement à la première utilisation.',
          },
          {
            type: 'plain-terms',
            text: 'pip installe le programme (pywhispercpp) ; le fichier modèle ggml-base.bin est un téléchargement séparé de ~142 MB qui se produit la première fois que vous chargez le modèle « base » — ou que vous récupérez à la main avec le script download-ggml-model.sh.',
          },
        ],
        items: [
          '**Installer le binding :** `pip install pywhispercpp`. Pour l\'accélération NVIDIA CUDA, compilez avec `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`.',
          '**Téléchargement auto de ggml-base.bin :** `from pywhispercpp.model import Model` puis `model = Model("base")` télécharge `ggml-base.bin` depuis Hugging Face (`ggerganov/whisper.cpp`) au premier lancement et le met en cache. Utilisez `"base.en"` pour la variante anglaise uniquement.',
          '**Téléchargement manuel (voie CLI, sans pip) :** depuis un dépôt whisper.cpp cloné, `bash ./models/download-ggml-model.sh base` enregistre le fichier dans `models/ggml-base.bin` — le même fichier que pywhispercpp récupère.',
          '**Téléchargement direct :** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` récupère le modèle sans script. Remplacez `base` par `tiny`, `small`, `medium` ou `large-v3`.',
          '**Ne confondez pas les paquets :** `pip install openai-whisper` installe le Whisper PyTorch original d\'OpenAI (il utilise des checkpoints `.pt`, pas `ggml-base.bin`). `pip install faster-whisper` utilise le format CTranslate2. Seul `pywhispercpp` consomme les fichiers GGML `ggml-*.bin`.',
          '**Où réside le fichier :** pywhispercpp stocke les modèles GGML téléchargés dans son cache de module (ou un chemin passé via `Model("base", models_dir="...")`), de sorte que le même `ggml-base.bin` est réutilisé d\'un lancement à l\'autre — aucun re-téléchargement.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Comparaison directe : tableau de benchmarks',
        content:
          'Chaque ligne indique sa source et son matériel. La vitesse est exprimée en multiples du temps réel (10× signifie 60 minutes d\'audio transcrites en 6 minutes). Les lignes « tiers » proviennent du [comparatif x2q.net](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti et Intel Core i5-13400F, large-v3, appels téléphoniques en danois, juin 2026) ; les lignes « README » proviennent du README de faster-whisper (RTX 3070 Ti, large-v2). Matériel et audio diffèrent selon les sources : lisez ces lignes comme des indications, pas comme un duel sur une seule machine.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-fr.webp',
          imageCaption: 'whisper.cpp et faster-whisper comparés par plateforme : Apple Silicon, GPU NVIDIA et CPU.',
          imageAlt: 'Affiche « whisper.cpp vs faster-whisper par plateforme » : Apple Silicon avec whisper.cpp (Metal), les deux utilisent CUDA sur GPU NVIDIA, les résultats publiés divergent sur CPU',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dans un test tiers sur RTX 4070 Ti, faster-whisper a fait tourner large-v3 à 23× le temps réel contre 15× pour whisper.cpp CUDA ; sur Apple Silicon, seul whisper.cpp peut utiliser Metal.',
          },
          {
            type: 'plain-terms',
            text: 'Choisissez whisper.cpp sur Mac, où il peut utiliser Metal et Core ML, et faster-whisper sous Windows/Linux avec un GPU NVIDIA, où il était plus rapide dans les tests publiés et utilisait moins de VRAM en int8 (2926 MB contre 4127 MB pour whisper.cpp fp16 dans le test du README).',
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
            'Métrique': 'Vitesse – RTX 4070 Ti, large-v3 (tiers)',
            'whisper.cpp (large-v3)': '~15× temps réel',
            'faster-whisper (large-v3)': '~23× temps réel ✓',
          },
          {
            'Métrique': 'Vitesse – Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (aucun benchmark trouvé)',
            'faster-whisper (large-v3)': 'CPU seul (aucun benchmark trouvé)',
          },
          {
            'Métrique': 'Vitesse – CPU x86, large-v3 (tiers)',
            'whisper.cpp (large-v3)': '~15× temps réel ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2× temps réel (i5-13400F)',
          },
          {
            'Métrique': 'VRAM – large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'Métrique': 'Intégration Python',
            'whisper.cpp (large-v3)': 'Wrapper nécessaire (pywhispercpp)',
            'faster-whisper (large-v3)': 'Natif ✓',
          },
          {
            'Métrique': 'VAD (détection silence)',
            'whisper.cpp (large-v3)': 'Optionnel (--vad + modèle Silero)',
            'faster-whisper (large-v3)': 'Intégré (Silero VAD) ✓',
          },
          {
            'Métrique': 'Streaming temps réel',
            'whisper.cpp (large-v3)': 'Oui (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Oui (pipeline VAD)',
          },
          {
            'Métrique': 'Précision WER (large-v3)',
            'whisper.cpp (large-v3)': '2.5 % (mêmes poids)',
            'faster-whisper (large-v3)': '2.5 % (mêmes poids)',
          },
          {
            'Métrique': 'Dépendance Python',
            'whisper.cpp (large-v3)': 'Aucune ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'Métrique': 'Raspberry Pi / embarqué',
            'whisper.cpp (large-v3)': 'Oui — binaire C ✓',
            'faster-whisper (large-v3)': 'Possible — nécessite Python',
          },
          {
            'Métrique': 'Formats de sortie',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objets Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp écrit directement dans des formats standards (SRT, VTT, JSON, CSV, txt) — idéal pour les workflows de sous-titrage. faster-whisper retourne un générateur Python d\'objets segment avec `start`, `end` et `text` — idéal pour le chaînage avec des LLM. Pour la génération de sous-titres, whisper.cpp est plus simple ; pour les pipelines traitant les segments de façon programmatique, faster-whisper est plus simple.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'Benchmark de référence : durées GPU vs CPU de faster-whisper',
        content:
          '**Le projet faster-whisper publie ses propres durées sur un fichier audio de 13 minutes — elles montrent que whisper.cpp avec Flash Attention égale faster-whisper fp16 sur GPU, alors que le batching et l\'int8 donnent l\'avantage à faster-whisper.** Les chiffres ci-dessous viennent du README de faster-whisper (large-v2 sur une RTX 3070 Ti 8 Go avec CUDA 12.4 pour les lignes GPU ; le modèle small sur un Intel Core i7-12700K avec 8 threads pour les lignes CPU ; beam size 5). Ce ne sont pas nos propres mesures, et le matériel et les modèles diffèrent des chiffres large-v3 ci-dessus.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Dans le benchmark du README de faster-whisper, whisper.cpp avec Flash Attention (1m05s) et faster-whisper fp16 (1m03s) sont quasiment à égalité sur GPU ; faster-whisper int8 avec batching traite le même fichier de 13 minutes en 16 secondes.',
          },
        ],
        columns: ['Configuration', 'Précision', 'Durée', 'VRAM / RAM'],
        rows: [
          {
            'Configuration': 'GPU · OpenAI Whisper',
            'Précision': 'fp16',
            'Durée': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'Configuration': 'GPU · whisper.cpp (Flash Attn)',
            'Précision': 'fp16',
            'Durée': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'Configuration': 'GPU · faster-whisper',
            'Précision': 'fp16',
            'Durée': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'Configuration': 'GPU · faster-whisper',
            'Précision': 'int8',
            'Durée': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'Configuration': 'GPU · faster-whisper, batch 8',
            'Précision': 'int8',
            'Durée': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'Configuration': 'CPU · OpenAI Whisper',
            'Précision': 'fp32',
            'Durée': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'Configuration': 'CPU · whisper.cpp',
            'Précision': 'fp32',
            'Durée': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'Configuration': 'CPU · faster-whisper',
            'Précision': 'int8',
            'Durée': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'Configuration': 'CPU · faster-whisper, batch 8',
            'Précision': 'int8',
            'Durée': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'À lire avec le tableau comparatif : en flux unique fp16, la vitesse GPU des deux outils est proche dans cette configuration. Les avantages durables de faster-whisper sont l\'économie de mémoire int8 (2,9 Go contre 4,1–4,5 Go en fp16) et l\'inférence par lots (16 s contre 59 s). Sur CPU, whisper.cpp fp32 et faster-whisper int8 sont à environ 25 % l\'un de l\'autre sans batching. Les lignes OpenAI Whisper du README donnent la référence : 2m23s sur GPU (fp16, 4708 MB) et 6m58s sur CPU (fp32, 2335 MB), contre 59s et 1m42s pour faster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuration de la transcription en temps réel',
        content:
          '**La transcription temps réel traite l\'audio en chunks au fur et à mesure de l\'entrée microphone, produisant du texte avec un léger décalage par rapport à la parole.** Les deux outils supportent ce mode avec des compromis différents.',
        items: [
          '**Mode stream whisper.cpp :** exécuter `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Traite des chunks de 3 secondes ; le décalage varie selon le matériel et le modèle et n\'a pas été mesuré par nos soins. Aucun Python requis.',
          '**Pipeline VAD faster-whisper :** utiliser `vad_filter=True` dans `model.transcribe()`. Silero VAD segmente automatiquement l\'audio aux silences — chunks plus naturels que les fenêtres à durée fixe.',
          '**Latence :** varie selon le matériel et la taille du modèle, et n\'a pas été mesurée par nos soins. Les petits modèles comme tiny répondent généralement plus vite, mais avec un WER plus élevé.',
          '**Choix du modèle temps réel :** small ou base est le meilleur compromis — assez rapide pour suivre la parole, assez précis sur audio propre. Éviter large-v3 en temps réel sans GPU dédié.',
          '**Entrée microphone :** whisper.cpp lit l\'audio brut via SDL2 ou portaudio. faster-whisper lit des tableaux audio depuis n\'importe quelle bibliothèque Python (sounddevice, pyaudio, soundfile).',
          '**Stabilité :** le mode stream de whisper.cpp peut produire des tokens répétés sur les silences. Supprimer avec `--suppress-blank` et `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon : whisper.cpp, le choix naturel',
        content:
          '**Sur les Mac M1 à M5, whisper.cpp avec l\'accélération Core ML / Metal est l\'outil naturel, car faster-whisper n\'a pas de backend Metal et tourne sur CPU seul sur Mac.** Le README de whisper.cpp indique un encodeur Core ML plus de 3× plus rapide qu\'une exécution CPU seule (annoncé par les développeurs). Nous n\'avons trouvé aucun benchmark publié de large-v3 sur M5 Pro ; ce guide ne donne donc aucun facteur temps réel pour les puces Apple.',
        items: [
          '**Export Core ML :** exécuter `./models/generate-coreml-model.sh large-v3` pour exporter l\'encodeur au format Core ML. Cela déporte l\'inférence de l\'encodeur vers l\'Apple Neural Engine.',
          '**Benchmarks :** le projet whisper.cpp rassemble des mesures dans sa [discussion de benchmarks](https://github.com/ggml-org/whisper.cpp/discussions/89) (temps de l\'encodeur ; aucune entrée M5 lors de notre vérification). Nous n\'avons trouvé aucun benchmark publié de large-v3 sur M5 Pro et ne donnons donc aucun facteur temps réel pour les puces Apple.',
          '**Mesurez votre propre Mac :** whisper.cpp fournit un outil `whisper-bench` qui chronomètre l\'encodeur ; ou chronométrez un vrai fichier de bout en bout. Les résultats varient selon la puce, la taille du modèle et la quantification.',
          '**Mémoire :** la mémoire unifiée signifie pas de VRAM séparée. Le README de whisper.cpp indique environ 3.9 GB de mémoire pour le modèle large, ce qui laisse de la place sur un Mac 16 GB pour d\'autres processus.',
          '**faster-whisper sur Mac :** CPU seul (int8). Utilisable pour la transcription par lots, mais sans voie Metal ; nous n\'avons trouvé aucun benchmark face à whisper.cpp sur Apple Silicon.',
          '**Recommandation :** utilisez whisper.cpp pour la plupart des tâches STT sur Mac. Ajoutez pywhispercpp si vous avez besoin d\'une intégration Python tout en conservant l\'accélération Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA : faster-whisper devant dans les tests publiés',
        content:
          '**Sous Windows et Linux avec des GPU NVIDIA, faster-whisper était l\'outil le plus rapide dans les tests publiés que nous avons trouvés.** Dans un test tiers sur RTX 4070 Ti (large-v3, juin 2026), il tournait à 23× le temps réel contre 15× pour whisper.cpp CUDA ; dans le test du README de faster-whisper (large-v2, RTX 3070 Ti), les deux étaient presque à égalité en flux unique (1m03s contre 1m05s), et c\'est avec int8 et le traitement par lots que faster-whisper a pris l\'avantage.',
        items: [
          '**RTX 4070 Ti (12 GB), large-v3, test tiers :** faster-whisper 23× le temps réel (large-v3-turbo : 56×) ; whisper.cpp CUDA 15× (large-v3-turbo : 40×).',
          '**RTX 3070 Ti (8 GB), large-v2, README de faster-whisper :** un fichier de 13 minutes a pris 1m03s en fp16, 59s en int8 (2926 MB de VRAM) et 16s en int8 avec batch de 8.',
          '**Autres cartes (RTX 3060, RTX 4060) :** nous n\'avons trouvé aucun benchmark publié de large-v3 pour celles-ci et ne donnons aucune vitesse ; la VRAM en int8 ci-dessus est le principal critère d\'adéquation.',
          '**int8 vs float16 :** dans le test du README, int8 a utilisé environ un tiers de VRAM en moins (2926 MB contre 4525 MB) et fini un peu plus tôt (59s contre 1m03s), avec une perte de précision généralement négligeable. `compute_type="int8"` est un bon réglage par défaut sur NVIDIA.',
          '**Traitement par lots :** le paramètre `batched=True` de faster-whisper permet le traitement parallèle de plusieurs fichiers audio, maximisant l\'utilisation GPU pour les gros jobs de transcription.',
          '**Intégration pipeline Python :** faster-whisper s\'intègre directement dans LangChain, Haystack et des pipelines Python personnalisés. Pas d\'overhead subprocess comparé au wrapping de whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'Anciens GPU NVIDIA (GTX 970) : int8 retombe sur float32',
        content:
          '**Sur une GTX 970 (Maxwell, compute capability 5.2), faster-whisper fonctionne toujours sur CUDA, mais `compute_type="int8"` ne donne pas du vrai int8 — CTranslate2 convertit les poids en float32.** Son tableau de quantification associe float32 à tout GPU de compute capability 6.0 ou inférieure, quel que soit le type demandé ; l\'économie de VRAM et le gain de vitesse int8 cités pour les cartes RTX ne s\'appliquent donc pas.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Sur une GTX 970 (compute capability 5.2), faster-whisper fonctionne sur CUDA uniquement en float32 — un type de calcul int8 demandé est converti automatiquement.',
          },
          {
            type: 'plain-terms',
            text: 'La GTX 970 est trop ancienne pour l\'int8 sur GPU. Elle fonctionne, mais sans gain de mémoire : restez sur les modèles tiny, base ou small avec ses 4 Go.',
          },
        ],
        items: [
          '**Ce qui fonctionne encore :** les binaires précompilés de CTranslate2 prennent en charge les GPU NVIDIA de compute capability 3.5 ou supérieure ; une GTX 970 (5.2) peut donc exécuter faster-whisper sur CUDA, à condition que vos bibliothèques CUDA et cuDNN correspondent à la version (voir Problèmes courants).',
          '**Où l\'int8 GPU fonctionne :** l\'int8 exige une compute capability de 7.0 ou plus (Volta et RTX série 20 et au-delà) ou exactement 6.1 (GTX 1050 à 1080 Ti, int8_float32). Les compute capability 6.0, 6.2 et inférieures retombent sur float32 ; le float16 exige 7.0 ou plus.',
          '**Conséquence mémoire :** le float32 occupe 4 octets par paramètre contre 1 pour l\'int8 ; d\'après le nombre de paramètres, large-v3 (1,55B) demande environ 6 Go pour les seuls poids — plus que les 4 Go de la GTX 970. Small (244M, environ 1 Go en float32) passe sans problème ; medium (769M, environ 3 Go) est limite.',
          '**Vitesse :** nous n\'avons pas testé de GTX 970, donc aucune mesure ici. Attendez-vous à un débit float32 bien inférieur aux chiffres RTX 4070 Ti de ce guide, et testez tiny, base et small sur votre propre audio.',
          '**Vérifier ce que supporte votre GPU :** `ctranslate2.get_supported_compute_types("cuda")` liste les types de calcul acceptés par CTranslate2 sur votre carte.',
          '**Solutions de repli :** l\'int8 sur CPU (`device="cpu", compute_type="int8"`) fonctionne sur tout CPU x86 récent, et les modèles GGML quantifiés de whisper.cpp (par exemple `ggml-large-v3-q5_0.bin`, environ 3–4 Go) sont le moyen habituel de faire tenir de plus gros modèles dans 4 Go — vérifiez le build CUDA ou Vulkan sur votre carte.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper sur Raspberry Pi 5 : tiny, base & small',
        content:
          '**Sur un Raspberry Pi 5, whisper.cpp exécute les modèles tiny et base en temps réel pour la transcription en direct, tandis que le modèle small tourne en deçà du temps réel et vaut mieux le réserver aux jobs par lots.** Le quad-core Cortex-A76 du Pi 5 n\'a pas de chemin GPU utilisable pour Whisper, donc toute l\'inférence se fait sur CPU (ARM NEON). Utilisez les modèles GGML quantifiés (`ggml-*-q5_0.bin`) pour réduire l\'usage mémoire et accélérer l\'inférence.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Sur un Raspberry Pi 5, le modèle small de whisper.cpp tourne plus lentement que le temps réel selon des retours de la communauté (usage par lots ; nous ne l\'avons pas mesuré nous-mêmes) ; tiny et base sont les modèles qui, d\'après ces retours, suivent la parole en direct.',
          },
          {
            type: 'plain-terms',
            text: 'Un Pi 5 peut transcrire de l\'audio en direct avec les modèles Whisper tiny et base, mais le modèle small est trop lourd pour suivre en temps réel — utilisez small pour des fichiers enregistrés que vous traitez en arrière-plan, pas pour un microphone en direct.',
          },
        ],
        items: [
          '**Whisper small sur Pi 5 :** d\'après les retours, plus lent que le temps réel sur CPU (nous ne l\'avons pas mesuré ; toute durée est indicative). Précis à 3.4 % WER (article Whisper, LibriSpeech test-clean) mais trop lent pour le sous-titrage en direct — à utiliser pour la transcription de nuit/par lots.',
          '**Whisper base sur Pi 5 :** d\'après les retours, autour du temps réel avec le multithreading (`-t 4`) ; le résultat varie selon la compilation, le refroidissement et l\'audio. Le compromis pratique idéal pour la transcription en direct sur le Pi, avec un WER acceptable de 5.0 %.',
          '**Whisper tiny sur Pi 5 :** l\'option la plus rapide, généralement signalée comme compatible avec l\'usage en direct, au prix d\'un WER plus élevé de 7.6 %. Idéal pour la reconnaissance de mots de réveil et de commandes courtes.',
          '**Utilisez des modèles quantifiés :** `bash ./models/download-ggml-model.sh small-q5_0` réduit la RAM et accélère l\'inférence avec une perte de précision minimale — important sur la mémoire partagée du Pi 5.',
          '**faster-whisper sur Pi 5 :** installable (`pip install faster-whisper`, CPU int8) et compétitif pour les jobs par lots, mais le binaire C plus léger de whisper.cpp reste le choix embarqué le plus courant.',
          '**Thermique :** une transcription soutenue sollicite fortement le CPU du Pi 5 — utilisez un refroidissement actif pour éviter le throttling thermique qui dégrade ces chiffres.',
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
            text: 'Avec un Mac, choisissez whisper.cpp — il utilise Metal et Core ML, ce que faster-whisper ne prend pas en charge. Avec un GPU NVIDIA et du Python, choisissez faster-whisper — il était plus rapide dans les tests publiés et utilisait moins de mémoire GPU en int8.',
          },
        ],
        columns: ['Scénario', 'Meilleur choix', 'Raison'],
        rows: [
          {
            'Scénario': 'Mac Apple Silicon (tout modèle)',
            'Meilleur choix': 'whisper.cpp',
            'Raison': 'Accélération Metal / Core ML ; faster-whisper n\'a pas de backend Metal',
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
            'Meilleur choix': 'Tester les deux',
            'Raison': 'Tests CPU README et tiers divergent ; mesurez',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) :** wrapper de pipeline Hugging Face Transformers avec support Flash Attention 2 pour une inférence GPU par lots rapide sur NVIDIA ; son README annonce de fortes accélérations (annoncé par les développeurs, non comparé par nous à faster-whisper). Idéal pour : traitement par lots de grandes archives audio sur GPU NVIDIA. Nécessite un GPU compatible Flash Attention 2 (Ampere ou plus récent : RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problèmes courants et solutions',
        content: 'Les problèmes les plus fréquents en configuration et à l\'exécution, avec des solutions directes :',
        items: [
          '**Incompatibilité de version CUDA :** les versions actuelles de faster-whisper exigent cuBLAS pour CUDA 12 et cuDNN 9. Si vous êtes bloqué sur des bibliothèques plus anciennes, épinglez ctranslate2 : `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 avec cuDNN 8) ou `3.24.0` (CUDA 11 avec cuDNN 8). Vérifier la version CUDA avec `nvcc --version`.',
          '**L\'export du modèle Metal échoue :** les Xcode Command Line Tools doivent être installés — exécuter `xcode-select --install`. Le script d\'export Core ML nécessite le paquet Python `coremltools` : `pip install coremltools`.',
          '**Hallucinations sur les silences :** les deux outils peuvent générer des tokens répétés sur les segments silencieux. Utiliser `--no-speech-threshold 0.6` en mode stream whisper.cpp, ou `vad_filter=True` dans `model.transcribe()` de faster-whisper pour ignorer automatiquement les silences.',
          '**Mémoire insuffisante avec large-v3 :** passez à la quantification int8 dans faster-whisper (`compute_type="int8"`) — dans le test du README (large-v2), la VRAM est passée d\'environ 4.5 GB (float16) à environ 2.9 GB. Dans whisper.cpp, utilisez la variante GGML quantifiée (par ex. `ggml-large-v3-q5_0.bin`) qui ramène la mémoire à ~3–4 GB.',
          '**Sortie illisible sur audio non anglais :** ne pas utiliser les variantes `.en` (tiny.en, base.en) pour de l\'audio non anglais — elles sont English-only. Utiliser les modèles multilingues (base, small, medium, large-v3) et spécifier la langue explicitement : `-l fr` dans whisper.cpp ou `language="fr"` dans faster-whisper.',
          '**Inférence CPU lente :** vérifier que le CPU supporte les instructions AVX2 (requises pour l\'inférence CPU optimisée). Vérifier avec `grep avx2 /proc/cpuinfo` sous Linux ou `sysctl machdep.cpu.features` sur Mac. Les CPU sans AVX2 utilisent SIMD générique et seront 2–3× plus lents.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          {
            q: 'Existe-t-il un paquet Debian ou apt pour whisper.cpp ?',
            a: 'Oui — whisper.cpp dispose désormais d\'un paquet Debian officiel (actuellement dans sid), fournissant le binaire `whisper.cpp` ainsi que `libwhisper-dev` et `libwhisper1` pour l\'utiliser comme bibliothèque partagée. Il n\'a pas encore atteint les versions stables de Debian ni les dépôts par défaut d\'Ubuntu, donc sur la plupart des systèmes il faut encore utiliser sid ou compiler depuis les sources. Un Snap non officiel (`sudo snap install whisper-cpp`) est aussi disponible pour Debian 9+ et Ubuntu.',
          },
          {
            q: 'Comment vérifier quelle version de whisper.cpp est installée ?',
            a: 'Lancez le binaire compilé sans argument ou avec `--help` — la version s\'affiche sur la ligne d\'en-tête. Vous pouvez aussi vérifier le commit exact avec `git describe --tags` dans le dépôt cloné, ou comparer votre date de build aux notes de version sur github.com/ggml-org/whisper.cpp/releases pour voir si vous êtes en retard sur la v1.9.5 actuelle.',
          },
          {
            q: 'La précision de transcription est-elle identique entre whisper.cpp et faster-whisper ?',
            a: 'En grande partie. Les deux outils utilisent les mêmes poids de modèle OpenAI Whisper, la précision devrait donc être très proche ; la différence tient surtout au runtime d\'inférence (C/C++ vs CTranslate2 Python). De petits écarts de résultat restent possibles à cause de la quantification (par exemple int8), des réglages de décodage et de la précision numérique. Nous n\'avons pas mesuré d\'écart de WER entre les deux runtimes : testez sur vos propres fichiers audio.',
          },
          {
            q: 'Puis-je utiliser faster-whisper sur un Mac Apple Silicon ?',
            a: 'Oui, mais uniquement sur CPU — faster-whisper n\'a pas de support Metal. whisper.cpp peut utiliser Metal et Core ML, et son README indique un encodeur Core ML plus de 3× plus rapide qu\'une exécution CPU seule. Nous n\'avons trouvé aucun benchmark publié faster-whisper contre whisper.cpp sur Apple Silicon : mesurez avec votre propre audio. La principale raison d\'utiliser faster-whisper sur Mac est un pipeline Python qui en dépend déjà.',
          },
          {
            q: 'Quelle taille de modèle Whisper utiliser pour un assistant vocal ?',
            a: 'Pour les interfaces vocales temps réel, Whisper small est la recommandation standard — environ 3.4 % WER sur l\'anglais propre (article Whisper, LibriSpeech test-clean), une faible latence sur CPU ou GPU moderne (variable selon le matériel ; non mesurée par nous) et tient dans environ 2 GB de RAM. Utiliser tiny sur matériel très contraint (Raspberry Pi Zero 2W) en acceptant ~7.6 % de WER. Réserver medium ou large-v3 à la transcription par lots où la latence n\'est pas une contrainte.',
          },
          {
            q: 'whisper.cpp supporte-t-il d\'autres langues que l\'anglais ?',
            a: 'Oui. Tous les modèles Whisper multilingues (base, small, medium, large-v3) supportent 99 langues. Ajouter `-l [code langue]` en CLI : `-l fr` pour le français, `-l de` pour l\'allemand, `-l ja` pour le japonais, etc. Les modèles tiny.en et base.en sont English-only et légèrement plus précis pour l\'anglais que leurs équivalents multilingues.',
          },
          {
            q: 'Comment installer faster-whisper avec le support CUDA ?',
            a: 'Installation avec `pip install faster-whisper`. Les versions actuelles exigent NVIDIA cuBLAS pour CUDA 12 et cuDNN 9 sur le système (sous Linux, `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"` les fournit). Sur les anciennes configurations CUDA 11 / cuDNN 8, épinglez `ctranslate2==3.24.0` (ou `4.4.0` pour CUDA 12 avec cuDNN 8). Spécifiez ensuite `device="cuda"` lors du chargement du modèle : `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Utilisez `device="auto"` pour retomber sur le CPU quand CUDA n\'est pas disponible.',
          },
          {
            q: 'Lequel est le plus précis — whisper.cpp ou faster-whisper ?',
            a: 'Très proche, mais pas garantie identique. Les deux outils utilisent les mêmes poids de modèle OpenAI Whisper, la précision devrait donc être très proche sur un même audio. La principale différence entre whisper.cpp et faster-whisper est la vitesse et le support plateforme. La quantification (int8, q5_0), la taille du faisceau et d\'autres réglages de décodage peuvent modifier légèrement la transcription ; nous ne l\'avons pas mesuré, comparez donc les deux sur un échantillon de votre propre audio.',
          },
          {
            q: 'Puis-je faire tourner Whisper large-v3 avec 8 GB de RAM ?',
            a: 'Oui sur GPU — large-v3 en int8 dans faster-whisper devrait tenir sur un GPU de 8 GB (le README de faster-whisper a mesuré 2926 MB de VRAM pour large-v2 en int8). Sur CPU seul, 8 GB de RAM sont justes pour large-v3 (float32 demande environ 10 GB). Utilisez medium (5 GB de RAM) ou small (2 GB de RAM) sur les systèmes CPU seul. Dans le test du README, whisper.cpp a utilisé moins de RAM sur CPU que faster-whisper (1049 MB contre 1477 MB en int8).',
          },
          {
            q: 'Quel est le coût de Whisper local vs STT cloud ?',
            a: 'Aucun frais récurrent de licence ou à la minute. Les services STT cloud facturent en général env. 0.005–0.022 €/min (vérifiez les tarifs actuels) — pour un développeur transcrivant 8 heures de réunions par semaine, cela représente environ 10–45 €/mois. Whisper local tourne sur du matériel déjà possédé, sans frais à la minute et sans gestion de clé API, et l\'audio n\'a pas besoin d\'être envoyé à un service cloud (électricité et temps de mise en place non inclus).',
          },
          {
            q: 'faster-whisper int8 fonctionne-t-il sur une GTX 970 ?',
            a: 'Non — pas en vrai int8. La GTX 970 a une compute capability de 5.2, et CTranslate2 n\'exécute l\'int8 que sur les GPU de compute capability 7.0 ou plus (ou exactement 6.1) ; sur les cartes plus anciennes, les poids sont convertis automatiquement en float32. faster-whisper tourne toujours sur le GPU en float32 : utilisez tiny, base ou small pour rester dans 4 Go, ou l\'int8 sur CPU, qui fonctionne sur tout CPU x86 récent. Nous n\'avons pas testé de GTX 970, donc aucune mesure de vitesse ici.',
          },
          {
            q: 'Quelle est la taille des fichiers de modèles Whisper pour whisper.cpp et faster-whisper ?',
            a: 'Le README de whisper.cpp indique des fichiers de modèles GGML d\'environ 75 MiB (tiny), 142 MiB (base), 466 MiB (small), 1,5 GiB (medium) et 2,9 GiB (large) sur disque, pour environ 273 Mo, 388 Mo, 852 Mo, 2,1 Go et 3,9 Go de mémoire. faster-whisper télécharge les modèles CTranslate2 depuis Hugging Face au premier lancement ; large-v3 y pèse environ 3 Go (1,55B de paramètres à 2 octets en float16). Le tableau des tailles de modèles ci-dessus donne le nombre de paramètres de chaque taille.',
          },
          {
            q: 'Whisper large-v3-turbo est-il meilleur que large-v3 pour la transcription locale ?',
            a: 'Il est plus rapide, pas plus précis. large-v3-turbo compte 809M de paramètres car OpenAI a réduit le décodeur de 32 à 4 couches ; sa fiche de modèle le décrit comme bien plus rapide que large-v3 au prix d\'une légère dégradation de qualité, sous licence MIT. La fiche avertit aussi de risques d\'hallucinations et de répétitions, et d\'une précision variable selon les langues : gardez large-v3 pour l\'audio le plus difficile et utilisez turbo (ou distil-large-v3 pour l\'anglais) quand la vitesse prime. whisper.cpp et faster-whisper peuvent tous deux l\'exécuter.',
          },
          {
            q: 'whisper.cpp peut-il utiliser un GPU AMD ou Intel à la place de CUDA ?',
            a: 'Oui. Le backend Vulkan de whisper.cpp (`-DGGML_VULKAN=1`) fonctionne tous constructeurs confondus tant que votre pilote prend en charge l\'API Vulkan, ROCm/HIP (`-DGGML_HIP=1`) cible les GPU AMD, et OpenVINO accélère l\'encodeur sur les CPU et GPU Intel. La documentation de faster-whisper ne couvre que NVIDIA CUDA ; les notes de version de CTranslate2 mentionnent des wheels ROCm, mais nous n\'avons pas testé cette voie.',
          },
          {
            q: 'mlx-whisper est-il plus rapide que whisper.cpp sur un Mac ?',
            a: 'Un test indépendant répond oui pour large-v3-turbo : la réexécution de Bill Mill en janvier 2026 a mesuré environ 13,1 secondes pour mlx_whisper contre 26,7 secondes pour whisper.cpp sur le même long enregistrement, soit environ 2× plus rapide. Un test de vitesse communautaire sur un clip court donnait les deux proches, whisper.cpp utilisant Core ML et la quantification q5_0. Les chiffres M5 Pro de ce guide n\'ont pas été comparés à MLX : testez votre propre audio avant de choisir.',
          },
          {
            q: 'faster-whisper est-il plus rapide qu\'OpenAI Whisper ?',
            a: 'Oui. Selon le README de faster-whisper, sa réimplémentation CTranslate2 est jusqu\'à 4 fois plus rapide que le paquet d\'origine openai/whisper à précision égale, avec moins de mémoire ; la quantification 8 bits améliore encore l\'efficacité sur CPU et GPU. Dans le test de 13 minutes du README, openai/whisper a mis 2m23s sur une RTX 3070 Ti (large-v2, fp16) contre 1m03s pour faster-whisper fp16 et 59s en int8, et 6m58s sur un CPU Intel Core i7-12700K (modèle small, fp32) contre 1m42s pour faster-whisper int8. Les deux utilisent les mêmes poids Whisper : la précision devrait donc rester pratiquement la même ; whisper.cpp, le troisième moteur, a terminé le test GPU en 1m05s avec Flash Attention.',
          },
          {
            q: 'Whisper est-il plus rapide sur GPU que sur CPU ?',
            a: 'Pour les grands modèles, oui ; pour les petits, un CPU suffit souvent. Dans le README de faster-whisper, large-v2 sur une RTX 3070 Ti a pris 59 s en int8 pour un fichier de 13 minutes, tandis que le modèle small sur un CPU Intel Core i7-12700K a pris 1m42s en int8 — autre modèle, autre matériel : ne comparez que les ordres de grandeur. Un test tiers de large-v3 sur un CPU Intel Core i5-13400F a mesuré whisper.cpp à 15× et faster-whisper à 2× le temps réel. Sur un Raspberry Pi 5, d\'après des retours de la communauté, tiny et base suivent la parole en direct ; nous ne l\'avons pas mesuré.',
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
          '[insanely-fast-whisper sur GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 pour l\'inférence par lots sur GPU NVIDIA (benchmarks annoncés dans son README).',
          '[OpenAI Whisper sur GitHub](https://github.com/openai/whisper) — Modèle Whisper original, article, fiches modèles et tableau des vitesses relatives (A100) pour toutes les tailles.',
          '[x2q.net : comparatif des backends Whisper](https://www.x2q.net/post/whisper-backend-shootout/) — Benchmark tiers de juin 2026 (RTX 4070 Ti et Intel Core i5-13400F, large-v3, appels téléphoniques en danois) à l\'origine des facteurs temps réel de faster-whisper et whisper.cpp.',
          '[Discussion de benchmarks whisper.cpp](https://github.com/ggml-org/whisper.cpp/discussions/89) — Temps d\'encodeur de la communauté pour Apple Silicon et d\'autres puces.',
          '[Article OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — « Robust Speech Recognition via Large-Scale Weak Supervision. » Source des valeurs WER.',
          '[Documentation CTranslate2](https://github.com/OpenNMT/CTranslate2) — Détails de quantification, support matériel et bases de l\'optimisation int8.',
          '[Documentation de quantification CTranslate2](https://opennmt.net/CTranslate2/quantization.html) — Types de calcul pris en charge par compute capability de GPU (base de la section GTX 970).',
          '[Benchmarks du README faster-whisper](https://github.com/SYSTRAN/faster-whisper#benchmark) — Durées GPU et CPU sur 13 minutes utilisées dans le benchmark de référence, et exigences actuelles CUDA 12 / cuDNN 9.',
          '[openai/whisper-large-v3-turbo sur Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — Fiche du modèle : 809M de paramètres, 4 couches de décodeur, licence MIT.',
          '[Bill Mill : benchmark mlx_whisper vs. whisper.cpp mis à jour](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Comparaison indépendante des durées large-v3-turbo sur Apple Silicon.',
          '[Versions de whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — Notes de version des v1.9.4 et v1.9.5.',
          '[Versions de CTranslate2](https://github.com/OpenNMT/CTranslate2/releases) — Notes de version des v4.8.3, v4.8.4 et v4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[TTS local et clonage vocal 2026 : Piper vs Coqui vs XTTS v2](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Le complément TTS : retransformer le texte transcrit en parole, hors ligne.',
          '[Créer un assistant vocal entièrement hors ligne en 2026](/fr/power-local-llm/build-local-voice-assistant-2026) — Connecter Whisper STT à un LLM local et Piper TTS pour un pipeline vocal complet.',
          '[Pipeline IA multimodale locale 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Ajouter des modèles de vision aux côtés de STT et TTS pour une stack locale complète.',
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide) — Exigences GPU et RAM pour le pipeline vocal + LLM complet.',
          '[Créer un assistant vocal local sur smartphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) — Version mobile : WhisperKit sur iPhone, Layla sur Android.',
        ],
      },
    },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカル音声認識2026：Whisper・faster-whisper・whisper.cppの違いと比較 — ベンチマーク・GPU高速化',
    seoTitle: 'Whisper・faster-whisperの違い比較2026',
    intro:
      'whisper.cppとfaster-whisperは、2026年にローカル・オフラインの文字起こしに使用されるOpenAIのWhisper音声認識モデルの2大実装です。whisper.cppはApple Metal、CUDA、Vulkan、CPUで動作する純粋なC/C++ポートで、Apple Silicon、組み込みシステム、リアルタイム音声アプリケーションに最適です。faster-whisperはCTranslate2を使用したPythonライブラリで、READMEによれば同じ精度でオリジナルのWhisperより最大4倍高速です。このガイドでは、インストール、パフォーマンスベンチマーク、リアルタイム文字起こしのセットアップ、そして各プラットフォームでの比較を詳しく解説します。',
    metaDescription:
      'faster-whisperとは、CTranslate2でOpenAI Whisperを再実装したライブラリで最大4倍高速。whisper.cppとの違いをCPU/GPU速度・VRAM・WERで比較します。',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ja.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Apple Siliconと組み込み機器にはwhisper.cpp、NVIDIA GPUとPythonパイプラインにはfaster-whisperを使ってください。どちらもOpenAI Whisperの同じ重みを実行するため精度はほぼ同じで、主に違うのは速度と統合方法です。**',
    quickAnswerTop: {
      ja: {
        question: '2026年のローカル音声認識にwhisper.cppとfaster-whisperのどちらを使うべきですか？',
        answer:
          '選択はハードウェアと統合ニーズ次第です。Apple Siliconでは、faster-whisperにMetalバックエンドがないため、MetalとCore MLを使えるwhisper.cppが自然な選択です。NVIDIA GPUでは、確認できた公開テストでfaster-whisperの方が高速で（RTX 4070 Ti上のlarge-v3でリアルタイムの23倍対15倍、第三者テスト）、Pythonパイプラインにも組み込みやすいです。CPUのみの環境では公開結果が一致していないため、ご自身の音声で計測してください。',
        bullets: [
          'Apple Silicon → Core ML / Metal対応のwhisper.cpp。faster-whisperにはMetalバックエンドがありません。',
          'NVIDIA GPU → faster-whisper。第三者のRTX 4070 Tiテスト（large-v3）：リアルタイムの23倍、whisper.cpp CUDAは15倍。',
          'Pythonパイプライン → faster-whisper。ネイティブPython、5行のセットアップ、VAD内蔵。',
          '組み込み / Raspberry Pi 5 → whisper.cpp。純粋なCバイナリ、Pythonランタイム不要。tiny/baseはリアルタイムで動作し、smallはバッチ専用。',
          'リアルタイム音声 → whisper.cppのstreamモードまたはfaster-whisperのVADパイプライン。',
          'バッチ文字起こし → faster-whisper。GPUでの最高スループット、簡単な非同期バッチ処理。',
          'WER精度：非常に近いと見込まれます — 同じWhisperモデルウェイトを使用（量子化やデコード設定により小さな差が出ることがあります）。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'なぜローカル音声認識なのか？', anchor: '#why-local-stt' },
      { label: 'Whisperモデルサイズ', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper：高速な代替手段', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++ポート', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp 最新バージョンとアップデート', anchor: '#whats-new' },
      { label: 'faster-whisper — CTranslate2ポート', anchor: '#faster-whisper' },
      { label: 'pipでggml-base.binを入手する（Pythonセットアップ）', anchor: '#install-ggml-pip' },
      { label: '直接比較：ベンチマークテーブル', anchor: '#benchmarks' },
      { label: '参考ベンチマーク：GPUとCPUの処理時間', anchor: '#reference-benchmark' },
      { label: 'リアルタイム文字起こしのセットアップ', anchor: '#real-time' },
      { label: 'Apple Silicon：whisper.cppが自然な選択', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU：公開テストではfaster-whisperが優位', anchor: '#nvidia-gpu' },
      { label: '旧世代NVIDIA GPU（GTX 970）', anchor: '#older-nvidia-gpus' },
      { label: 'Raspberry Pi 5でのWhisper', anchor: '#raspberry-pi-5' },
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
          '**whisper.cppはApple Silicon向けローカルSTTの自然な選択です。** C/C++ポートはCore MLとApple Metalでハードウェア加速を行い、READMEではCore MLエンコーダがCPUのみの実行より3倍以上高速と記載されています（開発元による公表値）。Pythonは不要です。',
          '**確認できた公開テストでは、faster-whisperがNVIDIA GPUで高速で、Pythonパイプラインにも適しています。** READMEのテストでは、int8によりVRAMが4708 MB（OpenAI Whisper fp16）から2926 MB（large-v2、RTX 3070 Ti、開発元による公表値）に減りました。第三者のRTX 4070 Tiテストでは、large-v3でリアルタイムの23倍、whisper.cpp CUDAは15倍でした。',
          '**両ツールともOpenAIの同一のWhisperモデルウェイトを使用しています。** そのため精度は非常に近いはずで、主な違いはランタイムパフォーマンスと統合方法です。量子化やデコード設定によるWERの小さな差は生じうるため、当サイトでは測定していません。',
          '**Whisper large-v3は英語で2.5% WERの最高精度を提供します。** ほとんどの本番ユースケースでは、Whisper small（3.4% WER、2 GB RAM）またはmedium（2.9% WER、5 GB RAM）の方が速度と精度のバランスが良いです。',
          '**リアルタイム文字起こしは両ツールとも実現可能です** — whisper.cppは`--stream`フラグ経由、faster-whisperは内蔵VAD（音声アクティビティ検出）パイプライン経由。テキストが音声からどれだけ遅れるかはハードウェアとモデルサイズによって異なり、当サイトでは測定していません。',
          '**whisper.cppはCPU、Metal、CUDA、Vulkanで動作します** — クロスプラットフォーム組み込み用途（Raspberry Pi、Windows GPUセットアップ、ARMサーバー）では現実的な選択肢。faster-whisperはCPUとCUDAのみ対応（MacではMetalなし）。',
          '**Raspberry Pi 5と組み込みLinuxでは、whisper.cpp tinyとbaseをCPUで実行するのがリアルタイム対応モデルです** — tinyはリアルタイムより余裕を持って高速に動作し、baseは`-t 4`でほぼリアルタイムです。smallモデル（3.4% WER）はPi 5でリアルタイム未満となり、バッチ処理に最適です。すべての推論はCPU（ARM NEON）で行われ、PiにはWhisper向けの利用可能なGPUパスがありません。これらのPi 5の目安はコミュニティの報告に基づくもので、当サイト独自の測定ではありません。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**両ツール：** OpenAIのオープンソースWhisperモデル（MITライセンス）をベースにしています。同じモデルウェイトのため精度は近く、ランタイムが異なります。',
          '**whisper.cpp：** ggerganovによってC/C++で書かれています。CPU（AVX2/NEON）、CUDA、Metal（Apple）、Vulkanをサポート。Python不要。',
          '**faster-whisper：** CTranslate2を使ったPythonライブラリ。CPU（int8）とCUDAをサポート。Apple Metalのサポートなし。',
          '**Whisperモデルサイズ：** tiny（39M）、base（74M）、small（244M）、medium（769M）、large-v3（1.55B）。すべてggml / CTranslate2フォーマット。',
          '**ほとんどのユースケースに適したモデル：** Whisper small — 3.4% WER、メモリ約2 GB。速度より精度を重視する場合はmediumやlarge-v3に上げてください。',
          '**NVIDIA GPU（large-v3、第三者テスト、RTX 4070 Ti）：** faster-whisperはリアルタイムの23倍、whisper.cpp CUDAは15倍。',
          '**Apple Silicon：** whisper.cppはMetalとCore MLで動作します（README：Core MLエンコーダはCPUのみより3倍以上高速）。faster-whisperにMetalバックエンドはありません。M5 Proのlarge-v3について公開ベンチマークは見つかりませんでした。',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'なぜローカル音声認識なのか？',
        content:
          'クラウドSTTサービス（Google Speech-to-Text、AWS Transcribe、Azure Speech）は音声1分当たりの料金を請求し、通常$0.006〜$0.024/分 — そして音声をリモートサーバーに送信します。プライバシーが重要なアプリケーション（医療口述、法的録音、ジャーナリストのインタビュー、企業会議）では、ローカル文字起こしなら音声を第三者のサービスに送信せずに済みます。',
        items: [
          '**プライバシー：** どちらのツールもローカルで動作でき、音声をクラウドサービスに送信せずに済むため、文字起こしにクラウド事業者は関与しません。法的根拠や安全な保管といったデータ保護上の義務は引き続きご自身にあります。',
          '**コスト：** 分単位の費用はありません。クラウドSTTの一般的な定価（$0.006〜$0.024/分、最新の料金は各社で確認）では、週8時間の会議を文字起こしする開発者で月およそ$12〜50に相当し、ローカルならこの費用はかかりません（ハードウェアと電気代は含みません）。',
          '**オフライン：** 飛行機内、セキュア施設内、安定したインターネットがない場所でも動作。APIキー管理不要。',
          '**レイテンシ：** アップロード/ダウンロードの往復遅延なし。リアルタイム音声インターフェースでは、ローカル処理により、クラウドとの往復に比べてSTTレイテンシを抑えられる場合があります。効果はネットワークとハードウェアによって異なります。',
          '**カスタマイズ：** ドメイン固有の語彙でファインチューニング可能。ハードウェアに合ったモデルサイズを実行。',
          '**Home Assistant連携：** ローカルで動作するWhisperなら、音声をクラウドサービスに送信せず、ウェイクワードと音声コマンドをホームネットワーク内にとどめられます。クラウドSTTを完全に置き換えるアドオン設定は[Home AssistantのローカルWhisper →](/ja/smart-home/local-whisper-home-assistant)をご覧ください。',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisperモデルサイズ — 両ツールの基盤',
        content:
          'whisper.cppとfaster-whisperはどちらも同じWhisperモデルウェイトを使用し、それぞれのフォーマット（whisper.cppはGGML、faster-whisperはCTranslate2）に変換されています。VRAMとRAMの予算と精度要件に基づいてモデルサイズを選択してください。',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ja.webp',
          imageCaption: 'tinyからlarge-v3まで、whisper.cppとfaster-whisperが共通で使うWhisperモデルのサイズ。',
          imageAlt: '「Whisperモデルサイズ：速度と精度」のポスター。tinyはlargeの約10倍高速、large-v3は最も遅く最も高精度、速度はOpenAI READMEのA100の値',
        columns: ['モデル', 'パラメータ数', 'VRAM / RAM', '英語WER', '相対速度（large比）'],
        rows: [
          {
            'モデル': 'tiny',
            'パラメータ数': '39M',
            'VRAM / RAM': '~1 GB',
            '英語WER': '7.6%',
            '相対速度（large比）': '~10倍',
          },
          {
            'モデル': 'base',
            'パラメータ数': '74M',
            'VRAM / RAM': '~1 GB',
            '英語WER': '5.0%',
            '相対速度（large比）': '~7倍',
          },
          {
            'モデル': 'small',
            'パラメータ数': '244M',
            'VRAM / RAM': '~2 GB',
            '英語WER': '3.4%',
            '相対速度（large比）': '~4倍',
          },
          {
            'モデル': 'medium',
            'パラメータ数': '769M',
            'VRAM / RAM': '~5 GB',
            '英語WER': '2.9%',
            '相対速度（large比）': '~2倍',
          },
          {
            'モデル': 'large-v3',
            'パラメータ数': '1.55B',
            'VRAM / RAM': '~10 GB',
            '英語WER': '2.5%',
            '相対速度（large比）': '1倍（基準）',
          },
          {
            'モデル': 'distil-large-v3',
            'パラメータ数': '~756M',
            'VRAM / RAM': '~4 GB',
            '英語WER': '~2.6%',
            '相対速度（large比）': '~6.3倍',
          },
        ],
        note: 'WER（単語誤り率）は低いほど良好です。tiny、base、small、mediumの値はWhisper論文（Radford et al., 2022、付録D.1.1、LibriSpeech test-clean、greedy decoding）によるものです。論文にはlarge-v3とdistil-large-v3が含まれないため、それらの値は概算であり、直接比較はできません。相対速度はWhisper READMEに掲載されたOpenAIの公表値で、A100上でlargeモデルを基準に測定されています（開発元による公表値）。実際の速度はハードウェアによって異なります。distil-large-v3はモデルカードによるとlarge-v3の6.3倍高速です。',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper：高速な代替手段',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)はlarge-v3の蒸留バリアントで、パラメータ数が約50%少なく、WERはオリジナルの約1%以内に抑えながら約6.3倍高速です。** 文字起こし速度が最後の精度より重要な場合に適した選択です。distil-large-v3はfaster-whisper（ネイティブCTranslate2サポート）とwhisper.cpp（GGML形式への変換経由）の両方で動作するため、すでに使用しているランタイムに統合できます。',
        items: [
          '**パラメータ数：** ~756M — large-v3の1.55Bの約半分で、約4 GB VRAMで動作（large-v3は約10 GB）。',
          '**速度：** モデルカードによるとlarge-v3の6.3倍高速（相対レイテンシであり、リアルタイム係数ではありません）。長尺音声でのWERはlarge-v3の約1%以内です。',
          '**WER：** 英語で約2.6% — large-v3の2.5%よりわずかに高いだけ。実際の音声では差に気づきにくいと考えられますが、当サイトでは検証していません。',
          '**互換性：** faster-whisperとネイティブで動作（`WhisperModel("distil-large-v3", device="cuda", compute_type="int8")`）。whisper.cppの場合は、distil-whisper GGMLコンバージョンスクリプトを使用してGGML形式に変換。',
          '**最適な用途：** バッチ文字起こしジョブ、VRAM制限のあるサーバーデプロイ、大型モデルレベルの品質をmediumモデルの速度で求めるユースケース。',
          '**不適な用途：** 多言語文字起こし — distil-large-v3は英語のみ。他言語にはlarge-v3またはmediumを使用。',
        ],
      },
      whisperCppDeep: {
        id: 'whisper-cpp',
        title: 'whisper.cpp — C/C++ポート',
        content:
          '**whisper.cpp（Georgi Gerganov作）はOpenAIのWhisperモデルを純粋なC/C++で再実装したもので、低リソースかつクロスプラットフォームの推論向けに最適化されています。** Pythonも、CUDAツールキットも不要で、Raspberry PiからApple M5 Pro、WindowsのCUDA環境まで、実質的にあらゆるハードウェアで動作します。',
        items: [
          '**プラットフォームサポート：** CPU（AVX2、AVX512、ARM NEON）、Apple Metal（Core ML）、CUDA（NVIDIA）、Vulkan（AMD/Intel GPU）、OpenCL。',
          '**Apple Siliconの利点：** whisper.cppはモデルをCore ML形式にエクスポートでき、Apple Neural Engineで推論できます。READMEではCore MLエンコーダがCPUのみの実行より3倍以上高速と記載されています（開発元による公表値）。',
          '**インストール：** リポジトリをクローンし、`make`（または`cmake`）を実行。一般的なプラットフォーム向けのビルド済みバイナリも利用可能。Python依存なし。',
          '**モデルダウンロード：** `bash ./models/download-ggml-model.sh base.en` — GGMLフォーマットのモデルファイルをダウンロード（baseで約142 MB）。',
          '**CLIの例：** `./main -m models/ggml-base.bin -f audio.wav` — WAVファイルを標準出力に文字起こし。`-l ja`で日本語。',
          '**リアルタイムストリームモード：** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — マイクから3秒チャンクで文字起こし。',
          '**Pythonラッパー：** pywhispercppがwhisper.cpp用のPythonバインディングを提供し、Metal高速化を維持したままPythonパイプラインで使用可能。',
          '**VAD：** whisper.cppは`whisper-cli`の`--vad`でSilero音声アクティビティ検出をオプションで利用できます（別途VADモデルのダウンロードが必要）。ストリームモードでは引き続き、ユースケースに応じた`--step`と`--length`パラメータのチューニングが必要です。',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp 最新バージョンとアップデート',
        content:
          '**whisper.cppの最新リリースは2026年10月6日公開のv1.9.5です。** 同梱のggmlをv0.26.0に同期し、CUDA、Vulkan、Metal、SYCL、OpenCL、CPUカーネルのバックエンド更新に加え、言語検出中の中断コールバックや並列チャンクオフセットの整数オーバーフロー修正などWhisperの修正が入っています。whisper.cppは非公式Snapに加え、Debian公式パッケージ（sid、`whisper.cpp`／`libwhisper-dev`／`libwhisper1`）でも利用できます。faster-whisperの最新タグ付きリリースは引き続きv1.2.1（2025年10月31日）ですが、リポジトリは活発に保守されており、最新のコミットは2026年11月2日です（2026年11月3日確認）。両ランタイムとも同じOpenAI Whisperのウェイトを読み込み、2026年に文字起こし精度を変えるような新しいモデルクラスは把握していません。',
        items: [
          '**whisper.cpp v1.9.5（2026年10月6日）：** ggmlをv0.26.0に同期（CUDA、Vulkan、Metal、SYCL、OpenCL、WebGPU、CPUカーネルの更新）、言語検出中の中断コールバックの追加、並列チャンクオフセットの整数オーバーフロー修正、ファイル処理失敗時にCLIが正しいエラーコードを返すよう修正。',
          '**whisper.cpp v1.9.4（2026年9月11日）：** サーバーが検出言語を返すようになり、エンコーダーコールバックが言語自動検出の前に呼ばれるようになり、リリースジョブにWindows on ARMが追加されました。',
          '**whisper.cpp v1.9.3（2026年8月20日）：** ggmlをv0.20.2に同期し、全バックエンドで性能向上、Metal TQ2_0量子化対応、CUDA/SYCLカーネル統合、ARM/WASI修正。',
          '**whisper.cpp v1.9.0〜v1.9.2（2026年6月〜8月）：** v1.9.3に至るまでの同系統のggml同期・性能改善リリース。',
          '**whisper.cpp v1.8.6（2026年6月2日）：** 圧縮音声（MP3、M4A）のオプションのFFmpegデコードをより明確にするため`ffmpeg-transcode`を再実装し、CIのexamplesパスを修正。',
          '**whisper.cpp v1.8.5（2026年5月）：** ストリーミングVAD（音声アクティビティ検出）の改善、サーバーのパラメータリークおよびトークンタイムスタンプの修正、RubyとVADのバインディングにおけるメモリリークの修正。',
          '**whisper.cpp v1.8.4（2026年3月19日）：** 幅広いパフォーマンス向上を伴う最新の`ggml`同期、GPUを選択するための新しい`-g` / `--gpu-device`フラグ（および`GGML_CUDA`デバイス選択）、UTF-8セグメント折り返しの修正。',
          '**ネイティブVADがwhisper.cppに組み込まれました。** 最近のリリースでネイティブな音声アクティビティ検出パスが追加され、長年のfaster-whisperの優位性が縮小しました — ただしfaster-whisperのSilero VAD統合の方が依然としてすぐ使える状態です。',
          '**faster-whisper v1.2.1（2025年10月31日）：** 最新のタグ付きリリース。`pip install faster-whisper`で取得できます。2026年のタグ付きリリースはありませんが、メインブランチは活発です。最新のコミット（2026年11月2日、11月3日確認）はCIの修正で、2026年10月16日のコミットでは、モデルが対応しない言語へのエラーなど入力検証が追加されました。v1.2.0（2025年8月）でdistil-large-v3.5に対応しました。',
          '**CTranslate2 v4.8.4（2026年10月25日）：** faster-whisperの基盤となる推論エンジンに新しいリリースが出ました。テンソルサイズ計算での整数オーバーフロー対策、重みの行が非常に小さい場合のCPU Conv1DとINT8量子化スケールのオーバーフロー修正、実験的なオフライン音声合成（Drama 3）の実装が加わっています。直前のv4.8.3（2026年10月13日）では、WindowsでのROCm修正、モデル読み込み時の堅牢化、ウィンドウにフレームがない場合のWhisper `align()`のゼロ除算修正が入りました。その後、2026年11月2日（2026年11月3日確認）にv4.8.5が公開され、CUDAアテンション精度の修正とWindows ROCm/HIPのビルドガイドが加わりました。',
          '**2026年に精度クラスの新しいWhisperモデルはありません。** OpenAIの最新の多言語ウェイトはlarge-v3-turbo（2024年10月、809Mパラメータ、デコーダーを32層から4層に削減、MITライセンス）のままで、わずかな品質低下と引き換えに大幅な高速化を実現し、両ツールで動作します。distil-large-v3は英語専用の高速オプションです。把握している限り、どちらのランタイムの更新も、ランタイムとツールの変更であり、精度の変更ではありません。',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — CTranslate2ポート',
        content:
          '**faster-whisper（SYSTRAN社製）はCTranslate2 — int8量子化をサポートする高度に最適化されたC++推論エンジン — を使ってWhisper推論を再実装したPythonライブラリです。** NVIDIA GPUでは、公開テストでfaster-whisperは最速クラスのローカルWhisper実装の一つです。',
        items: [
          '**プラットフォームサポート：** CPU（int8量子化）とNVIDIA CUDA GPU。Apple Metalサポートなし — MacではCPU専用で動作。',
          '**int8の利点：** CTranslate2のint8量子化は、faster-whisper READMEのテストでVRAMを約3分の1削減し（fp16で4525 MB、int8で2926 MB、large-v2）、速度もわずかに向上しました（1m03s対59s）。WERへの影響は通常無視できる程度です。',
          '**インストール：** `pip install faster-whisper` — コンパイル不要（Python 3.9以上）。GPU利用にはCUDA 12向けのNVIDIA cuBLASとcuDNN 9が必要で、古いCUDA 11 / cuDNN 8環境では古い`ctranslate2`（3.24.0）に固定する必要があります。',
          '**内蔵VAD：** faster-whisperにはSilero VAD統合が含まれており、無音セグメントを自動的にスキップします — リアルタイム文字起こしパイプラインに不可欠。',
          '**Python対応：** 直接PythonのAPIにより、LLM、音声処理ライブラリ、Webフレームワークとの連携が簡単。',
          '**速度：** READMEのテスト（large-v2、RTX 3070 Ti、13分のファイル）では、int8で59秒、バッチサイズ8のint8で16秒でした。第三者のRTX 4070 Tiテストでは、large-v3でリアルタイムの23倍でした。',
          '**バッチ処理：** faster-whisperはバッチ推論をサポートし、大量の音声ファイルを効率的に処理。',
          '**制限：** MacではMetalに非対応で、Apple SiliconではCPUのみで動作します。Apple Silicon上でfaster-whisperとwhisper.cppを比較した公開ベンチマークは見つかりませんでした。',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'pipでggml-base.binを入手する（Pythonセットアップ）',
        content:
          '**ggml-base.binをpip経由でPythonから使うには、`pywhispercpp`バインディングをインストール（`pip install pywhispercpp`）し、`Model("base")`を読み込みます。初回実行時に`ggml-base.bin`が自動的にダウンロードされます。** `pip install whisper.cpp`は存在しません。pywhispercppはwhisper.cppのC/C++エンジンをラップするpipラッパーで、MetalとCUDAの高速化を維持します。GGMLモデルファイル（`ggml-base.bin`、~142 MB）はHugging Faceから別途ダウンロードされ、ローカルにキャッシュされます — pipパッケージが提供するのは推論エンジンであり、ウェイトではありません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '`pip install pywhispercpp`を実行すると、Pythonの`Model("base")`が初回使用時にggml-base.binを自動的に取得・キャッシュします。',
          },
          {
            type: 'plain-terms',
            text: 'pipはプログラム（pywhispercpp）をインストールします。モデルファイルggml-base.binは別途~142 MBのダウンロードで、「base」モデルを初めて読み込むとき、またはdownload-ggml-model.shスクリプトで手動取得するときに行われます。',
          },
        ],
        items: [
          '**バインディングのインストール：** `pip install pywhispercpp`。NVIDIA CUDA高速化には`GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`でビルドします。',
          '**ggml-base.binの自動ダウンロード：** `from pywhispercpp.model import Model`の後に`model = Model("base")`とすると、初回実行時にHugging Face（`ggerganov/whisper.cpp`）から`ggml-base.bin`をダウンロードしてキャッシュします。英語専用版には`"base.en"`を使用します。',
          '**手動ダウンロード（CLI経由、pipなし）：** クローン済みのwhisper.cppリポジトリで`bash ./models/download-ggml-model.sh base`を実行すると、ファイルが`models/ggml-base.bin`に保存されます — pywhispercppが取得するのと同じファイルです。',
          '**直接ダウンロード：** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`でスクリプトなしにモデルを取得します。`base`を`tiny`、`small`、`medium`、`large-v3`に置き換えられます。',
          '**パッケージを混同しないこと：** `pip install openai-whisper`はOpenAIのオリジナルのPyTorch版Whisperをインストールします（`.pt`チェックポイントを使用し、`ggml-base.bin`ではありません）。`pip install faster-whisper`はCTranslate2フォーマットを使用します。GGMLの`ggml-*.bin`ファイルを扱うのは`pywhispercpp`だけです。',
          '**ファイルの保存場所：** pywhispercppはダウンロードしたGGMLモデルをモジュールのキャッシュ（または`Model("base", models_dir="...")`で渡したパス）に保存するため、同じ`ggml-base.bin`が実行をまたいで再利用されます — 再ダウンロードは不要です。',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: '直接比較：ベンチマークテーブル',
        content:
          '各行に出典とハードウェアを明記しています。速度はリアルタイムの何倍かで示します（10倍＝60分の音声を6分で文字起こし）。「第三者」の行は[x2q.netのバックエンド比較](https://www.x2q.net/post/whisper-backend-shootout/)（RTX 4070 TiとIntel Core i5-13400F、large-v3、デンマーク語の通話音声、2026年6月）、「README」の行はfaster-whisperのREADME（RTX 3070 Ti、large-v2）に基づきます。出典ごとにハードウェアと音声が異なるため、同一マシンでの直接比較ではなく目安として読んでください。',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-ja.webp',
          imageCaption: 'Apple Silicon、NVIDIA GPU、CPUというプラットフォーム別に比較したwhisper.cppとfaster-whisper。',
          imageAlt: '「プラットフォーム別 whisper.cpp vs faster-whisper」のポスター。Apple Siliconではwhisper.cpp（Metal）、NVIDIA GPUではどちらもCUDA、CPUでは公表結果が分かれる',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '第三者のRTX 4070 Tiテストでは、large-v3でfaster-whisperがリアルタイムの23倍、whisper.cpp CUDAが15倍でした。Apple Siliconでは、Metalを使えるのはwhisper.cppだけです。',
          },
          {
            type: 'plain-terms',
            text: 'MacではMetalとCore MLを使えるwhisper.cpp、NVIDIA GPU搭載のWindows/Linuxでは、公開テストで高速かつint8でVRAMが少なかったfaster-whisperを選びましょう（READMEのテストで2926 MB対whisper.cpp fp16の4127 MB）。',
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
            '指標': '速度 — RTX 4070 Ti、large-v3（第三者）',
            'whisper.cpp (large-v3)': '~15倍速',
            'faster-whisper (large-v3)': '~23倍速 ✓',
          },
          {
            '指標': '速度 — Apple Silicon、large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML（ベンチマーク未確認）',
            'faster-whisper (large-v3)': 'CPUのみ（ベンチマーク未確認）',
          },
          {
            '指標': '速度 — x86 CPU、large-v3（第三者）',
            'whisper.cpp (large-v3)': '~15倍速 ✓（i5-13400F）',
            'faster-whisper (large-v3)': '~2倍速（i5-13400F）',
          },
          {
            '指標': 'VRAM — large-v2、RTX 3070 Ti（README）',
            'whisper.cpp (large-v3)': '4127 MB（fp16、Flash Attention）',
            'faster-whisper (large-v3)': '2926 MB（int8）✓',
          },
          {
            '指標': 'Python統合',
            'whisper.cpp (large-v3)': 'ラッパーが必要（pywhispercpp）',
            'faster-whisper (large-v3)': 'ネイティブ ✓',
          },
          {
            '指標': 'VAD（無音検出）',
            'whisper.cpp (large-v3)': 'オプション（--vad＋Sileroモデル）',
            'faster-whisper (large-v3)': '内蔵（Silero VAD）✓',
          },
          {
            '指標': 'リアルタイムストリーミング',
            'whisper.cpp (large-v3)': 'あり（--streamフラグ）✓',
            'faster-whisper (large-v3)': 'あり（VADパイプライン）',
          },
          {
            '指標': 'WER精度（large-v3）',
            'whisper.cpp (large-v3)': '2.5%（同じウェイト）',
            'faster-whisper (large-v3)': '2.5%（同じウェイト）',
          },
          {
            '指標': 'Python依存',
            'whisper.cpp (large-v3)': 'なし ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            '指標': 'Raspberry Pi / 組み込み',
            'whisper.cpp (large-v3)': 'あり — Cバイナリ ✓',
            'faster-whisper (large-v3)': '可能 — Pythonランタイムが必要',
          },
          {
            '指標': '出力フォーマット',
            'whisper.cpp (large-v3)': 'SRT、VTT、JSON、CSV、txt',
            'faster-whisper (large-v3)': 'Pythonオブジェクト（start、end、text）',
          },
        ],
        note: 'whisper.cppは標準的な字幕・トランスクリプトファイル形式（SRT、VTT、JSON、CSV、txt）に直接出力します — 追加コードなしでディスクにファイルが必要な字幕ワークフローに最適。faster-whisperは`start`、`end`、`text`属性を持つセグメントオブジェクトのPythonジェネレータを生成します — 中間ファイルを書かずにセグメントテキストを直接ダウンストリームモデルに渡すLLMパイプライン連携に最適。字幕生成にはwhisper.cppが簡単で、セグメントをプログラムで処理するパイプラインにはfaster-whisperが簡単です。',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: '参考ベンチマーク：faster-whisperのGPUとCPUの処理時間',
        content:
          '**faster-whisperプロジェクトは13分の音声ファイルでの処理時間を公開しており、GPUではFlash Attention付きwhisper.cppがfaster-whisperのfp16に並ぶ一方、バッチ処理とint8ではfaster-whisperが優位に立つことが分かります。** 以下の数値はfaster-whisperのREADMEによるものです（GPU行はRTX 3070 Ti 8 GB・CUDA 12.4でlarge-v2、CPU行はIntel Core i7-12700K・8スレッドでsmallモデル、ビームサイズ5）。当サイトの自前の計測ではなく、上記のlarge-v3の数値とはハードウェアもモデルも異なります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'faster-whisper READMEのベンチマークでは、GPU上でFlash Attention付きwhisper.cpp（1m05s）とfaster-whisper fp16（1m03s）はほぼ互角で、バッチ処理付きfaster-whisper int8は同じ13分のファイルを16秒で処理します。',
          },
        ],
        columns: ['構成', '精度', '時間', 'VRAM / RAM'],
        rows: [
          {
            '構成': 'GPU · OpenAI Whisper',
            '精度': 'fp16',
            '時間': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            '構成': 'GPU · whisper.cpp (Flash Attn)',
            '精度': 'fp16',
            '時間': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            '構成': 'GPU · faster-whisper',
            '精度': 'fp16',
            '時間': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            '構成': 'GPU · faster-whisper',
            '精度': 'int8',
            '時間': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            '構成': 'GPU · faster-whisper, バッチ8',
            '精度': 'int8',
            '時間': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            '構成': 'CPU · OpenAI Whisper',
            '精度': 'fp32',
            '時間': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            '構成': 'CPU · whisper.cpp',
            '精度': 'fp32',
            '時間': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            '構成': 'CPU · faster-whisper',
            '精度': 'int8',
            '時間': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            '構成': 'CPU · faster-whisper, バッチ8',
            '精度': 'int8',
            '時間': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: '上のヘッドツーヘッド表と併せてお読みください。この構成では、単一ストリームのfp16によるGPU速度は両ツールで近い値です。faster-whisperの持続的な強みは、int8のメモリ削減（fp16の4.1〜4.5 GBに対して2.9 GB）とバッチ推論（59秒に対して16秒）です。CPUでは、バッチ処理なしの場合、whisper.cpp fp32とfaster-whisper int8の差は約25%以内です。READMEのOpenAI Whisperの行が基準です。GPUで2m23s（fp16、4708 MB）、CPUで6m58s（fp32、2335 MB）かかり、faster-whisper int8の59sと1m42sより長くなっています。',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'リアルタイム文字起こしのセットアップ',
        content:
          '**リアルタイム文字起こしは、マイクから届いた音声をチャンクで処理し、音声から短い遅延でテキストを生成します。** 両ツールとも対応していますが、トレードオフが異なります。',
        items: [
          '**whisper.cppのstreamモード：** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`を実行。3秒の音声チャンクを処理します。遅延はハードウェアとモデルによって異なり、当サイトでは測定していません。Python不要。',
          '**faster-whisperのVADパイプライン：** `model.transcribe()`で`vad_filter=True`を使用。Silero VADが無音境界で自動的に音声をセグメント化 — 固定長ウィンドウよりも自然なチャンク。',
          '**レイテンシ：** ハードウェアとモデルサイズによって異なり、当サイトでは測定していません。tinyのような小さいモデルは一般に応答が速い一方、WERは高くなります。',
          '**リアルタイム向けモデル選択：** smallまたはbaseが実用的なスイートスポット — 音声に追いつくのに十分な速度で、クリアな音声に対して十分な精度。専用GPUがない限り、リアルタイムでlarge-v3は避けること。',
          '**マイク入力：** whisper.cppはSDL2またはportaudio経由で生音声を読み込む。faster-whisperは任意のPython音声ライブラリ（sounddevice、pyaudio、soundfile）からの音声配列を読み込む。',
          '**安定性：** whisper.cppのstreamモードは無音時に繰り返しトークンを生成（短いフィラーを「幻聴」）することがある。`--suppress-blank`と`--no-speech-threshold`で抑制。',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon：whisper.cppが自然な選択',
        content:
          '**M1〜M5のMacでは、faster-whisperにMetalバックエンドがなくMacではCPUのみで動作するため、Core ML / Metal加速に対応したwhisper.cppが自然な選択です。** whisper.cppのREADMEではCore MLエンコーダがCPUのみの実行より3倍以上高速と記載されています（開発元による公表値）。M5 Proのlarge-v3について公開ベンチマークは見つからなかったため、本ガイドではAppleチップのリアルタイム係数を掲載しません。',
        items: [
          '**Core MLエクスポート：** `./models/generate-coreml-model.sh large-v3`を実行してエンコーダをCore ML形式にエクスポート。これによりエンコーダの推論がApple Neural Engineにオフロードされます。',
          '**ベンチマーク：** whisper.cppプロジェクトは[ベンチマークのディスカッション](https://github.com/ggml-org/whisper.cpp/discussions/89)で計測値を集めています（エンコーダ時間。確認時点でM5のエントリはありません）。M5 Proのlarge-v3について公開ベンチマークは見つからなかったため、Appleチップのリアルタイム係数は掲載しません。',
          '**お使いのMacで計測：** whisper.cppには、エンコーダの時間を計測する`whisper-bench`ツールが付属します。または実際のファイルを最初から最後まで計測してください。結果はチップ、モデルサイズ、量子化によって変わります。',
          '**メモリ：** ユニファイドメモリにより独立したVRAMは不要です。whisper.cppのREADMEではlargeモデルに約3.9 GBのメモリが必要と記載されており、16 GBのMacでも他のプロセスの余裕があります。',
          '**Macでのfaster-whisper：** CPUのみ（int8）。バッチ文字起こしには使えますがMetalの経路がなく、Apple Silicon上でwhisper.cppと比較したベンチマークは見つかりませんでした。',
          '**推奨：** Macでのほとんどの音声認識にはwhisper.cppを使いましょう。Metal加速を維持したままPython統合が必要な場合はpywhispercppを追加します。',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU：公開テストではfaster-whisperが優位',
        content:
          '**WindowsとLinuxのNVIDIA GPUでは、確認できた公開テストでfaster-whisperの方が高速でした。** 第三者のRTX 4070 Tiテスト（large-v3、2026年6月）ではリアルタイムの23倍で、whisper.cpp CUDAの15倍を上回りました。faster-whisper READMEのテスト（large-v2、RTX 3070 Ti）では、単一ストリームでほぼ互角（1m03s対1m05s）で、int8とバッチ処理でfaster-whisperが差をつけています。',
        items: [
          '**RTX 4070 Ti（12 GB）、large-v3、第三者テスト：** faster-whisperはリアルタイムの23倍（large-v3-turbo：56倍）、whisper.cpp CUDAは15倍（large-v3-turbo：40倍）。',
          '**RTX 3070 Ti（8 GB）、large-v2、faster-whisper README：** 13分のファイルがfp16で1m03s、int8で59s（VRAM 2926 MB）、バッチサイズ8のint8で16sでした。',
          '**その他のカード（RTX 3060、RTX 4060）：** これらのlarge-v3の公開ベンチマークは見つからなかったため、速度値は掲載しません。上記のint8のVRAM値が主な適合確認の目安です。',
          '**int8とfloat16：** READMEのテストでは、int8はVRAMが約3分の1少なく（2926 MB対4525 MB）、わずかに速く（59s対1m03s）、精度低下は通常無視できる程度でした。NVIDIAでは`compute_type="int8"`が妥当な既定値です。',
          '**バッチ処理：** faster-whisperの`batched=True`パラメータにより複数の音声ファイルの並列処理が可能となり、大規模な文字起こしジョブでGPU利用率を最大化。',
          '**Pythonパイプライン統合：** faster-whisperはLangChain、Haystack、カスタムPythonパイプラインに直接組み込めます。whisper.cppをラップする際のサブプロセスオーバーヘッドなし。',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: '旧世代NVIDIA GPU（GTX 970）：int8はfloat32にフォールバック',
        content:
          '**GTX 970（Maxwell、compute capability 5.2）でもfaster-whisperはCUDAで動作しますが、`compute_type="int8"`を指定しても実際のint8にはならず、CTranslate2が重みをfloat32に変換します。** 量子化の対応表では、compute capability 6.0以下のGPUはどの型を要求してもfloat32になるため、RTXカードで言われるVRAM削減やint8による高速化は適用されません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GTX 970（compute capability 5.2）ではfaster-whisperはCUDA上でfloat32のみで動作し、要求したint8の計算型は自動的に変換されます。',
          },
          {
            type: 'plain-terms',
            text: 'GTX 970はGPUのint8には古すぎます。動作はしますがメモリ削減はないため、4 GBではtiny、base、smallモデルにとどめてください。',
          },
        ],
        items: [
          '**引き続き動くこと：** CTranslate2のビルド済みバイナリはcompute capability 3.5以上のNVIDIA GPUに対応しているため、GTX 970（5.2）でもCUDA上でfaster-whisperを実行できます。ただし、インストール済みのCUDAとcuDNNがリリースに合っている必要があります（「よくある問題」を参照）。',
          '**GPUのint8が使える範囲：** int8にはcompute capability 7.0以上（VoltaおよびRTX 20シリーズ以降）、またはちょうど6.1（GTX 1050〜1080 Ti、int8_float32）が必要です。6.0、6.2およびそれ以下はfloat32にフォールバックし、float16には7.0以上が必要です。',
          '**メモリへの影響：** float32は1パラメータあたり4バイトで、int8の1バイトの4倍です。パラメータ数から計算すると、large-v3（1.55B）は重みだけで約6 GB必要となり、GTX 970の4 GBを超えます。small（244M、float32で約1 GB）は余裕で収まり、medium（769M、約3 GB）はぎりぎりです。',
          '**速度：** GTX 970のベンチマークは行っていないため、実測値はありません。このガイドのRTX 4070 Tiの数値を大きく下回るfloat32のスループットを想定し、tiny、base、smallをご自身の音声で試してください。',
          '**GPUの対応型を確認：** `ctranslate2.get_supported_compute_types("cuda")`で、お使いのカードでCTranslate2が受け付ける計算型を一覧できます。',
          '**代替手段：** CPUのint8（`device="cpu", compute_type="int8"`）は最近のx86 CPUなら動作し、whisper.cppの量子化GGMLモデル（例：`ggml-large-v3-q5_0.bin`、約3〜4 GB）は大きなモデルを4 GBに収める一般的な方法です。お使いのカードでCUDAまたはVulkanビルドを確認してください。',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Raspberry Pi 5でのWhisper：tiny、base、small',
        content:
          '**Raspberry Pi 5では、whisper.cppはtinyとbaseモデルをライブ文字起こし向けにリアルタイムで実行しますが、smallモデルはリアルタイム未満で動作するためバッチジョブに留めるのが最適です。** Pi 5のクアッドコアCortex-A76にはWhisper向けの利用可能なGPUパスがないため、すべての推論はCPU（ARM NEON）で行われます。量子化済みGGMLモデル（`ggml-*-q5_0.bin`）を使ってメモリ使用量を抑え、推論を高速化しましょう。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Raspberry Pi 5では、whisper.cppのsmallモデルはリアルタイムより遅く動作し（コミュニティの報告によるもので、当サイト自身では測定していません。バッチ用途向け）。ライブ音声に追いつけると報告されているのはtinyとbaseモデルです。',
          },
          {
            type: 'plain-terms',
            text: 'Pi 5はtinyとbaseのWhisperモデルでライブ音声を文字起こしできますが、smallモデルは重すぎてリアルタイムで追いつけません — smallはライブマイク用ではなく、バックグラウンドで処理する録音ファイル用に使いましょう。',
          },
        ],
        items: [
          '**Pi 5でのWhisper small：** CPUではリアルタイムより遅いと報告されています（当サイトでは測定しておらず、時間はあくまで目安です）。3.4% WER（Whisper論文、LibriSpeech test-clean）で正確ですが、ライブ字幕には遅すぎます — 夜間/バッチの文字起こしに使用します。',
          '**Pi 5でのWhisper base：** マルチスレッド（`-t 4`）でほぼリアルタイムと報告されています。結果はビルド、冷却、音声によって異なります。Piでのライブ文字起こしの実用的なスイートスポットで、許容範囲の5.0% WERです。',
          '**Pi 5でのWhisper tiny：** 最速のオプションで、一般にライブ用途に対応できると報告されていますが、WERは7.6%とやや高めです。ウェイクワードや短いコマンドの認識に最適です。',
          '**量子化モデルを使用：** `bash ./models/download-ggml-model.sh small-q5_0`はRAMを削減し、精度の低下を最小限に抑えつつ推論を高速化します — Pi 5の共有メモリでは重要です。',
          '**Pi 5でのfaster-whisper：** インストール可能（`pip install faster-whisper`、CPU int8）でバッチジョブには競争力がありますが、より軽量なwhisper.cppのCバイナリの方が組み込みでは一般的な選択肢です。',
          '**サーマル：** 継続的な文字起こしはPi 5のCPUに大きな負荷をかけます — これらの数値を悪化させるサーマルスロットリングを避けるため、アクティブ冷却を使用しましょう。',
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
            text: 'Macならwhisper.cppを選びましょう。faster-whisperが対応していないMetalとCore MLを使えます。NVIDIA GPUとPythonを使うならfaster-whisperを選びましょう。公開テストで高速で、int8ではGPUメモリも少なくて済みました。',
          },
        ],
        columns: ['シナリオ', '最適なツール', '理由'],
        rows: [
          {
            'シナリオ': 'Apple Silicon Mac（すべてのモデル）',
            '最適なツール': 'whisper.cpp',
            '理由': 'Metal / Core ML加速。faster-whisperにMetalバックエンドなし',
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
            '最適なツール': '両方を試す',
            '理由': 'READMEと第三者のCPUテストで結果が食い違う。実測を',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)：** Flash Attention 2サポートを追加するHugging Face Transformersパイプラインラッパーで、NVIDIAハードウェアでの高速なバッチGPU推論を実現し、READMEでは大幅な高速化が報告されています（開発元の公表値。faster-whisperとの比較は当サイトでは行っていません）。最適用途：NVIDIA GPUでの大量音声アーカイブのバッチ処理。Flash Attention 2対応GPU（Ampere以降：RTX 3000+、A100、H100）が必要。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'よくある問題と解決策',
        content: 'よくあるセットアップとランタイムの問題、そして直接の解決策：',
        items: [
          '**CUDAバージョンの不一致：** 現行のfaster-whisperにはCUDA 12向けcuBLASとcuDNN 9が必要です。古いライブラリのままの場合はctranslate2を固定してください：`pip install --force-reinstall ctranslate2==4.4.0`（CUDA 12とcuDNN 8）または`3.24.0`（CUDA 11とcuDNN 8）。CUDAバージョンは`nvcc --version`で確認。',
          '**Metalモデルエクスポートの失敗：** Xcode Command Line Toolsのインストールを確認 — `xcode-select --install`を実行。Core MLエクスポートスクリプトには`coremltools` Pythonパッケージが必要：`pip install coremltools`。',
          '**無音時の幻聴：** 両ツールとも無音の音声セグメントで繰り返しフィラートークンを生成することがある。whisper.cppのstreamモードでは`--no-speech-threshold 0.6`を使用するか、faster-whisperの`model.transcribe()`で`vad_filter=True`を使用して無音セグメントを自動的にスキップ。',
          '**large-v3でメモリ不足：** faster-whisperでint8量子化に切り替えます（`compute_type="int8"`）。READMEのテスト（large-v2）ではVRAMが約4.5 GB（float16）から約2.9 GBに減りました。whisper.cppでは量子化GGMLバリアント（例：`ggml-large-v3-q5_0.bin`）を使うとメモリが約3〜4 GBに減ります。',
          '**非英語音声での文字化け：** 非英語音声に`.en`モデルバリアント（tiny.en、base.en）を使用しないこと — これらは英語専用。多言語モデル（base、small、medium、large-v3）を使用し、言語を明示的に指定：whisper.cppでは`-l ja`、faster-whisperでは`language="ja"`。',
          '**CPUの推論が遅い：** CPUがAVX2命令をサポートしているか確認（最適化されたCPU推論に必要）。Linuxでは`grep avx2 /proc/cpuinfo`、Macでは`sysctl machdep.cpu.features`で確認。AVX2なしのCPUは汎用SIMDにフォールバックし、2〜3倍遅くなります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'whisper.cppにDebian（apt）パッケージはありますか？',
            a: 'はい — whisper.cppは現在Debian（現時点ではsid）向けに公式パッケージ化されており、`whisper.cpp`バイナリに加え、共有ライブラリとしてリンクするための`libwhisper-dev`と`libwhisper1`が提供されています。まだDebianの安定版やUbuntuの標準リポジトリには到達していないため、多くの環境ではsidの利用またはソースからのビルドが必要です。ソースビルドを避けたい場合は、Debian 9以降とUbuntu向けの非公式Snap（`sudo snap install whisper-cpp`）も利用できます。',
          },
          {
            q: 'インストール済みのwhisper.cppのバージョンを確認するには？',
            a: 'コンパイルしたバイナリを引数なしまたは`--help`付きで実行すると、バナー行にバージョンが表示されます。クローンしたリポジトリ内で`git describe --tags`を実行して正確なコミットを確認することもできます。またビルド日をgithub.com/ggml-org/whisper.cpp/releasesのリリースノートと比較し、現行のv1.9.5より古いかどうかを確認できます。',
          },
          {
            q: 'whisper.cppとfaster-whisperで文字起こし精度は同じですか？',
            a: 'ほぼ同じです。両ツールとも同じOpenAI Whisperモデルウェイトを使用するため、精度は非常に近いはずです。違いは主に推論ランタイム（C/C++対CTranslate2 Python）です。量子化（int8など）、デコード設定、数値精度により、出力に小さな差が出ることがあります。2つのランタイム間のWER差は測定していないため、ご自身の音声で試してください。',
          },
          {
            q: 'Apple SiliconのMacでfaster-whisperを使えますか？',
            a: 'はい、ただしCPUのみで動作します。faster-whisperはMetalに非対応です。whisper.cppはMetalとCore MLを使え、READMEではCore MLエンコーダがCPUのみの実行より3倍以上高速と記載されています。Apple Silicon上でfaster-whisperとwhisper.cppを比較した公開ベンチマークは見つからなかったため、ご自身の音声で計測してください。Macでfaster-whisperを使う主な理由は、既にそれに依存するPythonパイプラインがある場合です。',
          },
          {
            q: '音声アシスタントにはどのWhisperモデルサイズを使うべきですか？',
            a: 'リアルタイム音声インターフェースには、Whisper smallが標準推奨です — クリアな英語で約3.4% WER（Whisper論文、LibriSpeech test-clean）、最新のCPUまたはGPUで低レイテンシ（ハードウェアによって異なり、当サイトでは測定していません）、約2 GB RAMに収まる。非常に制約のあるハードウェア（Raspberry Pi Zero 2W、古いスマートフォン）で約7.6% WERが許容できる場合はtinyを使用。mediumまたはlarge-v3はレイテンシが制約にならないバッチ文字起こしのみに使用。',
          },
          {
            q: 'whisper.cppは英語以外の言語をサポートしていますか？',
            a: 'はい。すべてのWhisper多言語モデル（base、small、medium、large-v3）は99言語をサポートしています。CLIに`-l [言語コード]`を追加：日本語は`-l ja`、ドイツ語は`-l de`、フランス語は`-l fr`など。tiny.enとbase.enモデルは英語専用で、多言語版と比べて英語でわずかに正確です。',
          },
          {
            q: 'CUDAサポート付きのfaster-whisperはどうインストールしますか？',
            a: '`pip install faster-whisper`でインストールします。現行リリースにはシステムにCUDA 12向けNVIDIA cuBLASとcuDNN 9が必要です（Linuxでは`pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"`で導入できます）。古いCUDA 11 / cuDNN 8環境では`ctranslate2==3.24.0`（CUDA 12とcuDNN 8なら`4.4.0`）に固定してください。その後、モデルロード時に`device="cuda"`を指定します：`WhisperModel("large-v3", device="cuda", compute_type="int8")`。CUDAが使えないときにCPUへフォールバックさせたい場合は`device="auto"`を使います。',
          },
          {
            q: 'どちらがより正確ですか — whisper.cppかfaster-whisperか？',
            a: '非常に近いですが、同一とは限りません。両ツールとも同じOpenAI Whisperモデルウェイトを使用するため、同じ音声での精度は非常に近いはずです。whisper.cppとfaster-whisperの主な違いは速度とプラットフォームサポートです。量子化（int8、q5_0）、ビームサイズなどのデコード設定により、文字起こし結果がわずかに変わることがあります。当サイトでは測定していないため、ご自身の音声サンプルで両方を比較してください。',
          },
          {
            q: 'Whisper large-v3を8 GB RAMで実行できますか？',
            a: 'はい、GPUならlarge-v3のint8はfaster-whisperで8 GBのGPUに収まるはずです（faster-whisper READMEはlarge-v2のint8でVRAM 2926 MBを計測）。CPUのみの環境では、large-v3に8 GB RAMはぎりぎりです（float32は約10 GB必要）。CPUのみのシステムではmedium（5 GB RAM）またはsmall（2 GB RAM）を使ってください。READMEのテストでは、whisper.cppはCPU上でfaster-whisperよりRAM使用量が少なくなりました（int8で1049 MB対1477 MB）。',
          },
          {
            q: 'ローカルWhisperはクラウドSTTと比べてコストはどのくらいですか？',
            a: '継続的なライセンス料や分単位の料金はありません。クラウドSTTサービスの料金は一般に音声1分当たり$0.006〜$0.024です（最新の料金を確認してください）— 週8時間の会議を文字起こしする開発者で月およそ$12〜50です。ローカルWhisperはすでに所有しているハードウェアで動作し、分単位の料金もAPIキー管理も不要で、音声をクラウドサービスに送る必要もありません（電気代とセットアップの手間は含みません）。',
          },
          {
            q: 'GTX 970でfaster-whisperのint8は使えますか？',
            a: '実際のint8としては使えません。GTX 970のcompute capabilityは5.2で、CTranslate2がint8を実行するのはcompute capability 7.0以上（またはちょうど6.1）のGPUのみです。それより古いカードでは重みが自動的にfloat32に変換されます。faster-whisperはGPU上でfloat32として動作するため、4 GBに収めるにはtiny、base、smallを使うか、最近のx86 CPUで動くCPUのint8を使ってください。GTX 970のベンチマークは行っていないため、実測の速度値はありません。',
          },
          {
            q: 'whisper.cppとfaster-whisperのWhisperモデルファイルはどれくらいの大きさですか？',
            a: 'whisper.cppのREADMEによると、GGMLモデルファイルのディスク上のサイズはtinyが約75 MiB、baseが142 MiB、smallが466 MiB、mediumが1.5 GiB、largeが2.9 GiBで、必要なメモリはそれぞれ約273 MB、388 MB、852 MB、2.1 GB、3.9 GBです。faster-whisperは初回使用時にHugging FaceからCTranslate2モデルをダウンロードし、large-v3は約3 GB（1.55Bパラメータ×float16の2バイト）です。各サイズのパラメータ数は上記のモデルサイズ表をご覧ください。',
          },
          {
            q: 'ローカル文字起こしではWhisper large-v3-turboはlarge-v3より優れていますか？',
            a: '速いだけで、精度が高いわけではありません。large-v3-turboはOpenAIがデコーダーを32層から4層に削減したため809Mパラメータで、モデルカードではlarge-v3よりはるかに高速で、品質の低下はわずかと説明されています（MITライセンス）。カードにはハルシネーションや繰り返しが起こりうること、言語によって精度にばらつきがあることも記されています。難しい音声にはlarge-v3、速度重視ならturbo（英語ならdistil-large-v3）を使い分けてください。whisper.cppとfaster-whisperのどちらでも実行できます。',
          },
          {
            q: 'whisper.cppはCUDAの代わりにAMDやIntelのGPUを使えますか？',
            a: 'はい。whisper.cppのVulkanバックエンド（`-DGGML_VULKAN=1`）は、ドライバーがVulkan APIに対応していればベンダーを問わず動作します。ROCm/HIP（`-DGGML_HIP=1`）はAMD GPU向けで、OpenVINOはIntel CPUとGPUでエンコーダーを高速化します。faster-whisperの公式ドキュメントはNVIDIA CUDAのみを扱っています。CTranslate2のリリースノートにはROCm向けホイールへの言及がありますが、その経路は検証していません。',
          },
          {
            q: 'Macではmlx-whisperはwhisper.cppより速いですか？',
            a: 'large-v3-turboについては、独立した検証が「はい」と示しています。Bill Millの2026年1月の再計測では、同じ長尺録音でmlx_whisperが約13.1秒、whisper.cppが26.7秒で、およそ2倍高速でした。短いクリップでのコミュニティの速度テストでは両者は近く、whisper.cppはCore MLとq5_0量子化を使用していました。このガイドのM5 Proの数値はMLXとは比較していないため、選ぶ前にご自身の音声でベンチマークしてください。',
          },
          {
            q: 'faster-whisperとOpenAI Whisperの違いは何ですか？速度はどれくらい違いますか？',
            a: 'faster-whisperは、CTranslate2でOpenAI Whisperを再実装したライブラリです。faster-whisperのREADMEによると、同じ精度のまま元のopenai/whisperパッケージより最大4倍高速で、メモリ使用量も少なく、8ビット量子化によりCPUとGPUで効率がさらに高まります。READMEの13分の音声テストでは、openai/whisperはRTX 3070 Ti（large-v2、fp16）で2m23s、faster-whisperはfp16で1m03s、int8で59sでした。Intel Core i7-12700K CPU（smallモデル、fp32）ではopenai/whisperが6m58s、faster-whisper int8が1m42sです。どちらも同じWhisperの重みを使うため精度はほぼ同じはずです。3つ目のランタイムであるwhisper.cppは、Flash AttentionありでGPUテストを1m05sで完了しました。',
          },
          {
            q: 'WhisperはCPUよりGPUのほうが速いですか？',
            a: '大きなモデルならはい、小さなモデルならCPUで十分なことも多いです。faster-whisper READMEでは、large-v2がRTX 3070 Tiのint8で13分のファイルを59秒で処理し、smallモデルがIntel Core i7-12700K CPUのint8で1m42sでした。モデルもハードウェアも異なるため、桁の目安としてのみ比較してください。第三者のIntel Core i5-13400F CPUでのlarge-v3テストでは、whisper.cppがリアルタイムの15倍、faster-whisperが2倍でした。Raspberry Pi 5では、tinyとbaseがライブ音声に追従できるとコミュニティで報告されていますが、当サイトでは測定していません。',
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
          '[insanely-fast-whisper（GitHub）](https://github.com/Vaibhavs10/insanely-fast-whisper) — NVIDIA GPUでのバッチ推論向けFlash Attention 2 Whisperパイプライン（ベンチマークはREADME記載の開発元公表値）。',
          '[GitHub上のOpenAI Whisper](https://github.com/openai/whisper) — オリジナルのWhisperモデル、論文、全サイズのモデルカードと相対速度の表（A100）。',
          '[x2q.net：Whisperバックエンド比較](https://www.x2q.net/post/whisper-backend-shootout/) — faster-whisperとwhisper.cppのリアルタイム係数の根拠となる、2026年6月の第三者ベンチマーク（RTX 4070 TiとIntel Core i5-13400F、large-v3、デンマーク語の通話音声）。',
          '[whisper.cppのベンチマークディスカッション](https://github.com/ggml-org/whisper.cpp/discussions/89) — Apple Siliconなどのチップに関するコミュニティのエンコーダ時間。',
          '[OpenAI Whisper論文（Radford他、2022年）](https://arxiv.org/abs/2212.04356) — 「Robust Speech Recognition via Large-Scale Weak Supervision」。WER値の出典。',
          '[CTranslate2ドキュメント](https://github.com/OpenNMT/CTranslate2) — 量子化の詳細、ハードウェアサポート、int8最適化の根拠。',
          '[CTranslate2 量子化ドキュメント](https://opennmt.net/CTranslate2/quantization.html) — GPUのcompute capabilityごとに対応する計算型（GTX 970セクションの根拠）。',
          '[faster-whisper READMEのベンチマーク](https://github.com/SYSTRAN/faster-whisper#benchmark) — 参考ベンチマークで使用した13分間のGPU・CPU処理時間と、現行のCUDA 12 / cuDNN 9要件。',
          '[Hugging Faceのopenai/whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) — モデルカード：809Mパラメータ、デコーダー4層、MITライセンス。',
          '[Bill Mill：mlx_whisperとwhisper.cppのベンチマーク更新版](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Apple Silicon上のlarge-v3-turbo処理時間の独立比較。',
          '[whisper.cppのリリース](https://github.com/ggml-org/whisper.cpp/releases) — v1.9.4とv1.9.5のリリースノート。',
          '[CTranslate2のリリース](https://github.com/OpenNMT/CTranslate2/releases) — v4.8.3、v4.8.4、v4.8.5のリリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルTTSと音声クローニング2026：Piper vs Coqui vs XTTS v2](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTSの補完：文字起こしテキストをオフラインで再び音声に変換。',
          '[2026年に完全オフライン音声アシスタントを構築する](/ja/power-local-llm/build-local-voice-assistant-2026) — Whisper STTをローカルLLMとPiper TTSに接続して完全な音声パイプラインを構築。',
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — STTとTTSと並行してビジョンモデルを追加して完全なローカルマルチモーダルスタックを構築。',
          '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) — 音声 + LLMパイプライン全体のGPUとRAM要件。',
          '[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline) — モバイル版：iPhoneのWhisperKit、AndroidのLayla。',
        ],
      },
    },
  },

  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: '本地语音识别2026：Whisper.cpp vs faster-whisper — 基准测试、安装配置、GPU加速',
    seoTitle: 'Whisper.cpp与faster-whisper对比2026',
    intro:
      'whisper.cpp和faster-whisper是2026年本地离线语音转文字的两大主流实现。whisper.cpp是纯C/C++移植版本，支持Apple Metal、CUDA、Vulkan和CPU，适用于Apple Silicon、嵌入式系统和实时语音应用。faster-whisper是基于CTranslate2的Python库，据其README称，在精度相同的前提下最高比原始Whisper快4倍。本指南涵盖安装方法、性能基准测试、实时转录配置以及各平台的横向对比。',
    metaDescription:
      'faster-whisper比OpenAI Whisper最高快4倍，whisper.cpp支持Apple Metal。基于公开基准对比CPU与GPU耗时、显存和WER。',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-zh.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Apple Silicon和嵌入式设备用whisper.cpp，NVIDIA GPU和Python流水线用faster-whisper——二者运行同一套OpenAI Whisper权重，精度基本相同，区别主要在速度和集成方式。**',
    quickAnswerTop: {
      zh: {
        question: '2026年本地语音识别应该选择whisper.cpp还是faster-whisper？',
        answer:
          '选择取决于您的硬件和集成需求。在Apple Silicon上，由于faster-whisper没有Metal后端，支持Metal和Core ML的whisper.cpp是自然之选。在NVIDIA GPU上，在我们找到的公开测试中faster-whisper更快（RTX 4070 Ti上large-v3达到23倍实时速度，whisper.cpp CUDA为15倍，第三方测试），也更容易集成到Python流水线。仅用CPU时，公开结果并不一致，请用自己的音频实测。',
        bullets: [
          'Apple Silicon → 使用Core ML / Metal的whisper.cpp；faster-whisper没有Metal后端。',
          'NVIDIA GPU → faster-whisper。第三方RTX 4070 Ti测试（large-v3）：23倍实时速度，whisper.cpp CUDA为15倍。',
          'Python管道 → faster-whisper。原生Python，5行代码配置，内置VAD。',
          '嵌入式 / Raspberry Pi 5 → whisper.cpp。纯C二进制文件，无需Python运行时；tiny/base可实时运行，small仅适合批处理。',
          '实时语音 → whisper.cpp的stream模式或faster-whisper的VAD管道。',
          '批量转录 → faster-whisper。GPU上最佳吞吐量，轻松实现异步批处理。',
          'WER精度：预计非常接近 — 使用相同的Whisper模型权重（量化和解码设置可能带来细微差异）。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '为什么选择本地语音识别？', anchor: '#why-local-stt' },
      { label: 'Whisper模型规格', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper：更快的替代方案', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++移植版', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp 最新版本与更新', anchor: '#whats-new' },
      { label: 'faster-whisper — CTranslate2版本', anchor: '#faster-whisper' },
      { label: '通过pip获取ggml-base.bin（Python配置）', anchor: '#install-ggml-pip' },
      { label: '正面对比：基准测试表格', anchor: '#benchmarks' },
      { label: '参考基准测试：GPU与CPU耗时', anchor: '#reference-benchmark' },
      { label: '实时转录配置', anchor: '#real-time' },
      { label: 'Apple Silicon：whisper.cpp是自然之选', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU：公开测试中faster-whisper领先', anchor: '#nvidia-gpu' },
      { label: '旧款NVIDIA GPU（GTX 970）', anchor: '#older-nvidia-gpus' },
      { label: 'Raspberry Pi 5上的Whisper', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp是Apple Silicon上本地STT的自然之选。** C/C++移植版借助Core ML和Apple Metal实现硬件加速，其README称Core ML编码器比纯CPU执行快3倍以上（开发者自报），且无需Python。',
          '**在我们找到的公开测试中，faster-whisper在NVIDIA GPU上更快，也适合Python流水线。** 在README测试中，int8将显存从4708 MB（OpenAI Whisper fp16）降到2926 MB（large-v2，RTX 3070 Ti，开发者自报）；第三方RTX 4070 Ti测试中，large-v3达到23倍实时速度，whisper.cpp CUDA为15倍。',
          '**两款工具均使用OpenAI相同的Whisper模型权重。** 因此精度应当非常接近 — 区别主要在于运行时性能和集成方式；量化和解码设置仍可能带来细微的WER差异，我们未做测量。',
          '**Whisper large-v3在英语上提供最佳精度，WER为2.5%。** 对于大多数生产用例，Whisper small（3.4% WER，2 GB RAM）或medium（2.9% WER，5 GB RAM）提供更好的速度精度平衡。',
          '**两款工具均可实现实时转录** — whisper.cpp通过`--stream`参数，faster-whisper通过内置VAD（语音活动检测）管道。文本相对实时语音的延迟取决于硬件和模型大小，我们未做测量。',
          '**whisper.cpp支持CPU、Metal、CUDA和Vulkan** — 是跨平台嵌入式部署（Raspberry Pi、Windows GPU、ARM服务器）的务实之选。faster-whisper仅支持CPU和CUDA（Mac上无Metal支持）。',
          '**对于Raspberry Pi 5和嵌入式Linux，whisper.cpp tiny和base在CPU上**是具备实时能力的模型 — tiny运行速度从容超过实时，base在`-t 4`下约为实时。small模型（3.4% WER）在Pi 5上低于实时，最适合批处理任务。所有推理均在CPU（ARM NEON）上进行 — Pi没有可用于Whisper的GPU路径。这些Pi 5数据来自社区反馈，并非本站自行测得。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**两款工具：** 均基于OpenAI的开源Whisper模型（MIT许可证）。模型权重相同，精度相近 — 运行时不同。',
          '**whisper.cpp：** 由ggerganov用C/C++编写。支持CPU（AVX2/NEON）、CUDA、Metal（Apple）、Vulkan。无需Python。',
          '**faster-whisper：** 基于CTranslate2的Python库。支持CPU（int8）和CUDA。不支持Apple Metal。',
          '**Whisper模型规格：** tiny（39M）、base（74M）、small（244M）、medium（769M）、large-v3（1.55B）。均使用ggml / CTranslate2格式。',
          '**大多数用例的合适模型：** Whisper small — 3.4% WER，内存约2 GB；当精度比速度更重要时，可升级到medium或large-v3。',
          '**NVIDIA GPU（large-v3，第三方测试，RTX 4070 Ti）：** faster-whisper为23倍实时速度；whisper.cpp CUDA为15倍实时速度。',
          '**Apple Silicon：** whisper.cpp通过Metal和Core ML运行（README：Core ML编码器比纯CPU快3倍以上）；faster-whisper没有Metal后端。我们没有找到M5 Pro上large-v3的公开基准。',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '为什么选择本地语音识别？',
        content:
          '云端STT服务（Google Speech-to-Text、AWS Transcribe、Azure Speech）按音频分钟收费 — 通常$0.006至$0.024/分钟 — 并将音频发送至远程服务器。对于隐私敏感应用（医疗听写、法律录音、记者采访、企业会议），本地转录可避免把音频发送给第三方服务。',
        items: [
          '**隐私保护：** 两款工具都可以在本地运行，无需把音频发送到云服务，因此转录过程不必涉及云服务商。法律依据、安全存储等数据保护义务仍由您自己承担。',
          '**零成本：** 无按分钟计费。按云端STT常见的标价$0.006至$0.024/分钟计（请以服务商当前价格为准），每周转录8小时会议的开发者每月约需$12至50，本地转录可免去这笔费用（不含硬件和电费）。',
          '**离线使用：** 在飞机上、安全设施内、网络不稳定区域均可使用。无需管理API密钥。',
          '**低延迟：** 无上传/下载往返延迟。对于实时语音界面，与云端往返相比，本地处理可以降低STT延迟，具体幅度取决于网络和硬件。',
          '**可定制：** 可针对特定领域词汇进行微调。运行适合您硬件的任意模型规格。',
          '**Home Assistant集成：** Whisper可以在本地运行，无需将音频发送到云服务，因此唤醒词和语音命令可以留在您的家庭网络内。请参阅[Home Assistant中的本地Whisper →](/zh/smart-home/local-whisper-home-assistant)了解完全替代云端STT的插件设置。',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper模型规格 — 两款工具的基础',
        content:
          'whisper.cpp和faster-whisper均使用相同的Whisper模型权重，分别转换为各自的格式（whisper.cpp使用GGML，faster-whisper使用CTranslate2）。根据您的VRAM/RAM预算和精度要求选择模型规格。',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-zh.webp',
          imageCaption: 'whisper.cpp和faster-whisper共用的Whisper模型尺寸，从tiny到large-v3。',
          imageAlt: '海报「Whisper模型尺寸：速度与精度」：tiny比large快约10倍，large-v3最慢但最准确，速度数据来自OpenAI README（A100）',
        columns: ['模型', '参数量', 'VRAM / RAM', '英语WER', '相对速度（相对large）'],
        rows: [
          {
            '模型': 'tiny',
            '参数量': '39M',
            'VRAM / RAM': '~1 GB',
            '英语WER': '7.6%',
            '相对速度（相对large）': '~10倍',
          },
          {
            '模型': 'base',
            '参数量': '74M',
            'VRAM / RAM': '~1 GB',
            '英语WER': '5.0%',
            '相对速度（相对large）': '~7倍',
          },
          {
            '模型': 'small',
            '参数量': '244M',
            'VRAM / RAM': '~2 GB',
            '英语WER': '3.4%',
            '相对速度（相对large）': '~4倍',
          },
          {
            '模型': 'medium',
            '参数量': '769M',
            'VRAM / RAM': '~5 GB',
            '英语WER': '2.9%',
            '相对速度（相对large）': '~2倍',
          },
          {
            '模型': 'large-v3',
            '参数量': '1.55B',
            'VRAM / RAM': '~10 GB',
            '英语WER': '2.5%',
            '相对速度（相对large）': '1倍（基准）',
          },
          {
            '模型': 'distil-large-v3',
            '参数量': '~756M',
            'VRAM / RAM': '~4 GB',
            '英语WER': '~2.6%',
            '相对速度（相对large）': '~6.3倍',
          },
        ],
        note: 'WER（词错误率）越低越好。tiny、base、small和medium的数值取自Whisper论文（Radford等，2022，附录D.1.1，LibriSpeech test-clean，贪婪解码）。该论文未涵盖large-v3和distil-large-v3，因此它们的数值为近似值，不可直接比较。相对速度是OpenAI在Whisper README中公布的数值，在A100上以large模型为基准测得（开发者自报），实际速度因硬件而异。根据模型卡，distil-large-v3比large-v3快6.3倍。',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper：更快的替代方案',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)是large-v3的蒸馏变体，参数量减少约50%，WER与原版相差约1%以内，运行速度提升约6.3倍。** 当转录速度比精度更重要时，这是正确的选择。distil-large-v3可与faster-whisper（原生CTranslate2支持）和whisper.cpp（通过GGML格式转换）配合使用，可集成到您已使用的任何运行时。',
        items: [
          '**参数量：** ~756M — 约为large-v3 1.55B参数的一半，VRAM需求约4 GB而非约10 GB。',
          '**速度：** 根据模型卡，比large-v3快6.3倍（相对延迟，不是实时倍速），在长音频上的WER与large-v3相差约1%以内。',
          '**WER：** 英语约2.6% — 仅比large-v3的2.5%高约0.1%。在实际语音中差异可能很难察觉，但我们未做验证。',
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
          '**Apple Silicon优势：** whisper.cpp可将模型导出为Core ML格式，在Apple Neural Engine上推理。其README称Core ML编码器比纯CPU执行快3倍以上（开发者自报）。',
          '**安装：** 克隆代码库，运行`make`（或`cmake`）。常见平台有预构建的二进制文件。无Python依赖。',
          '**下载模型：** `bash ./models/download-ggml-model.sh base.en` — 下载GGML格式模型文件（base约142 MB）。',
          '**CLI示例：** `./main -m models/ggml-base.bin -f audio.wav` — 将WAV文件转录到标准输出。`-l zh`用于中文。',
          '**实时流模式：** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — 以3秒块从麦克风转录。',
          '**Python封装：** pywhispercpp为whisper.cpp提供Python绑定，可在Python管道中使用，同时保留Metal加速。',
          '**VAD：** whisper.cpp可通过`whisper-cli`的`--vad`参数选用Silero语音活动检测（需另行下载VAD模型）。流模式仍需针对具体用例调整`--step`和`--length`参数。',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp 最新版本与更新',
        content:
          '**whisper.cpp的最新版本是v1.9.5，于2026年10月6日发布。** 该版本将内置的ggml同步至v0.26.0（涉及CUDA、Vulkan、Metal、SYCL、OpenCL和CPU内核的后端更新），并带来Whisper修复，例如语言检测期间的中止回调，以及并行分块偏移中的整数溢出修复。whisper.cpp现已提供官方Debian软件包（sid，`whisper.cpp`／`libwhisper-dev`／`libwhisper1`），在非官方Snap之外多了一个选择。faster-whisper最新的带标签版本仍是v1.2.1（2025年10月31日），但仓库仍在积极维护：最新一次提交在2026年11月2日（2026年11月3日核查）。两个运行时仍加载相同的OpenAI Whisper权重；就我们所知，2026年没有改变转录精度的新模型类别。',
        items: [
          '**whisper.cpp v1.9.5（2026年10月6日）：** 将ggml同步至v0.26.0（CUDA、Vulkan、Metal、SYCL、OpenCL、WebGPU和CPU内核更新），新增语言检测期间的中止回调，修复并行分块偏移的整数溢出，并让CLI在文件处理失败时返回正确的错误码。',
          '**whisper.cpp v1.9.4（2026年9月11日）：** 服务器现在会返回检测到的语言，编码器回调在语言自动检测之前运行，并在发布任务中加入了Windows on ARM。',
          '**whisper.cpp v1.8.6（2026年6月2日）：** 重新实现了`ffmpeg-transcode`，以便更清晰地对压缩音频（MP3、M4A）进行可选的FFmpeg解码，并修复了CI示例路径问题。',
          '**whisper.cpp v1.8.5（2026年5月）：** 改进了流式VAD（语音活动检测），修复了服务器参数泄漏和token时间戳问题，并修复了Ruby和VAD绑定中的内存泄漏。',
          '**whisper.cpp v1.8.4（2026年3月19日）：** 最新的`ggml`同步带来广泛的性能提升，新增用于选择GPU的`-g` / `--gpu-device`标志（以及`GGML_CUDA`设备选择），并修复了UTF-8分段换行问题。',
          '**原生VAD现已内置于whisper.cpp。** 近期版本新增了原生语音活动检测路径，缩小了faster-whisper长期以来的优势 — 不过faster-whisper的Silero VAD集成仍然更开箱即用。',
          '**faster-whisper v1.2.1（2025年10月31日）：** 最新的带标签版本；`pip install faster-whisper`会安装它。2026年没有带标签的版本，但主分支很活跃：最新提交（2026年11月2日，11月3日核查）为CI修复，2026年10月16日的提交新增了输入校验，例如对模型不支持的语言报错。v1.2.0（2025年8月）新增了对distil-large-v3.5的支持。',
          '**CTranslate2 v4.8.4（2026年10月25日）：** faster-whisper底层的推理引擎发布了新版本。新增了张量大小计算中的整数溢出保护，修复了权重行极小时CPU Conv1D和INT8量化比例的溢出，并加入了实验性的离线语音合成（Drama 3）实现。此前的v4.8.3（2026年10月13日）加入了Windows ROCm修复、模型加载时的加固，以及修复了窗口没有帧时Whisper `align()`中的除零错误。随后v4.8.5于2026年11月2日发布（11月3日核查），包含CUDA注意力精度修复和Windows ROCm/HIP构建指南。',
          '**2026年没有新的精度级Whisper模型。** OpenAI最新的多语言权重仍是large-v3-turbo（2024年10月；8.09亿参数，解码器从32层削减到4层，MIT许可），以小幅质量损失换取大幅提速，两个工具都能运行。distil-large-v3仍是仅限英语的提速选项。据我们所知，两个运行时的更新都是运行时与工具层面的变化，而非精度变化。',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — CTranslate2版本',
        content:
          '**faster-whisper（由SYSTRAN开发）是使用CTranslate2 — 支持int8量化的高度优化C++推理引擎 — 重新实现Whisper推理的Python库。** 在NVIDIA GPU上，公开测试中faster-whisper属于最快的本地Whisper实现之一。',
        items: [
          '**平台支持：** CPU（int8量化）和NVIDIA CUDA GPU。不支持Apple Metal — 在Mac上仅以CPU模式运行。',
          '**int8优势：** 在faster-whisper README测试中，CTranslate2 int8量化使显存降低约三分之一（fp16为4525 MB，int8为2926 MB，large-v2），速度略有提升（1m03s对59s）；对WER的影响通常可以忽略。',
          '**安装：** `pip install faster-whisper` — 无需编译（Python 3.9+）。使用GPU需要CUDA 12版NVIDIA cuBLAS和cuDNN 9；较旧的CUDA 11 / cuDNN 8环境必须固定较旧的`ctranslate2`（3.24.0）。',
          '**内置VAD：** faster-whisper包含Silero VAD集成，可自动跳过无声音频段 — 对实时转录管道至关重要。',
          '**Python原生：** 直接的Python API使其可以轻松与LLM、音频处理库和Web框架链接。',
          '**速度：** 在README测试中（large-v2，RTX 3070 Ti，13分钟文件），int8耗时59秒，批大小为8的int8仅需16秒；第三方RTX 4070 Ti测试中，large-v3达到23倍实时速度。',
          '**批量处理：** faster-whisper支持批量推理，可高效处理大型音频存档。',
          '**限制：** Mac上不支持Metal，在Apple Silicon上只能用CPU运行。我们没有找到Apple Silicon上faster-whisper与whisper.cpp的公开对比基准。',
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
      installPython: {
        id: 'install-ggml-pip',
        title: '通过pip获取ggml-base.bin（Python配置）',
        content:
          '**要通过pip在Python中使用ggml-base.bin，请安装`pywhispercpp`绑定 — `pip install pywhispercpp` — 然后加载`Model("base")`，它会在首次运行时自动下载`ggml-base.bin`。** 不存在`pip install whisper.cpp`；pywhispercpp是围绕whisper.cpp C/C++引擎的pip封装，并保留Metal和CUDA加速。GGML模型文件（`ggml-base.bin`，~142 MB）从Hugging Face单独下载并缓存到本地 — pip包提供的是推理引擎，而非权重。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '运行`pip install pywhispercpp`，然后Python中的`Model("base")`会在首次使用时自动获取并缓存ggml-base.bin。',
          },
          {
            type: 'plain-terms',
            text: 'pip安装的是程序（pywhispercpp）；模型文件ggml-base.bin是一个单独的~142 MB下载，发生在首次加载"base"模型时 — 或者你用download-ggml-model.sh脚本手动获取。',
          },
        ],
        items: [
          '**安装绑定：** `pip install pywhispercpp`。如需NVIDIA CUDA加速，使用`GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`进行编译。',
          '**自动下载ggml-base.bin：** `from pywhispercpp.model import Model`，然后`model = Model("base")`会在首次运行时从Hugging Face（`ggerganov/whisper.cpp`）下载`ggml-base.bin`并缓存。英语专用变体使用`"base.en"`。',
          '**手动下载（CLI方式，无需pip）：** 在克隆的whisper.cpp仓库中，`bash ./models/download-ggml-model.sh base`会将文件保存到`models/ggml-base.bin` — 与pywhispercpp获取的是同一文件。',
          '**直接下载：** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`无需脚本即可拉取模型。将`base`替换为`tiny`、`small`、`medium`或`large-v3`。',
          '**请勿混淆这些包：** `pip install openai-whisper`安装的是OpenAI原始的PyTorch版Whisper（使用`.pt`检查点，而非`ggml-base.bin`）。`pip install faster-whisper`使用CTranslate2格式。只有`pywhispercpp`才使用GGML的`ggml-*.bin`文件。',
          '**文件位置：** pywhispercpp将下载的GGML模型存储在其模块缓存中（或通过`Model("base", models_dir="...")`传入的路径），因此同一个`ggml-base.bin`会在多次运行间复用 — 无需重新下载。',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: '正面对比：基准测试表格',
        content:
          '每一行都注明了来源和硬件。速度以实时的倍数表示（10倍表示60分钟音频在6分钟内转录完成）。“第三方”行来自[x2q.net的后端对比](https://www.x2q.net/post/whisper-backend-shootout/)（RTX 4070 Ti和Intel Core i5-13400F，large-v3，丹麦语电话录音，2026年6月）；“README”行来自faster-whisper的README（RTX 3070 Ti，large-v2）。不同来源的硬件和音频不同，请把这些行视为参考，而不是同一台机器上的直接对比。',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-zh.webp',
          imageCaption: 'whisper.cpp与faster-whisper按平台对比：Apple Silicon、NVIDIA GPU和CPU。',
          imageAlt: '海报「按平台对比whisper.cpp与faster-whisper」：Apple Silicon上用whisper.cpp（Metal），NVIDIA GPU上两者都用CUDA，CPU上已发布的结果不一致',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在第三方RTX 4070 Ti测试中，large-v3在faster-whisper上达到23倍实时速度，whisper.cpp CUDA为15倍；在Apple Silicon上，只有whisper.cpp能使用Metal。',
          },
          {
            type: 'plain-terms',
            text: 'Mac上选whisper.cpp，它能使用Metal和Core ML；在带NVIDIA GPU的Windows/Linux上选faster-whisper，它在公开测试中更快，int8下显存也更少（README测试中为2926 MB，whisper.cpp fp16为4127 MB）。',
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
            '指标': '速度 — RTX 4070 Ti，large-v3（第三方）',
            'whisper.cpp (large-v3)': '~15倍实时速度',
            'faster-whisper (large-v3)': '~23倍实时速度 ✓',
          },
          {
            '指标': '速度 — Apple Silicon，large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML（未找到基准）',
            'faster-whisper (large-v3)': '仅CPU（未找到基准）',
          },
          {
            '指标': '速度 — x86 CPU，large-v3（第三方）',
            'whisper.cpp (large-v3)': '~15倍实时速度 ✓（i5-13400F）',
            'faster-whisper (large-v3)': '~2倍实时速度（i5-13400F）',
          },
          {
            '指标': '显存 — large-v2，RTX 3070 Ti（README）',
            'whisper.cpp (large-v3)': '4127 MB（fp16，Flash Attention）',
            'faster-whisper (large-v3)': '2926 MB（int8）✓',
          },
          {
            '指标': 'Python集成',
            'whisper.cpp (large-v3)': '需要封装器（pywhispercpp）',
            'faster-whisper (large-v3)': '原生支持 ✓',
          },
          {
            '指标': 'VAD（静音检测）',
            'whisper.cpp (large-v3)': '可选（--vad + Silero模型）',
            'faster-whisper (large-v3)': '内置（Silero VAD）✓',
          },
          {
            '指标': '实时流传输',
            'whisper.cpp (large-v3)': '支持（--stream参数）✓',
            'faster-whisper (large-v3)': '支持（VAD管道）',
          },
          {
            '指标': 'WER精度（large-v3）',
            'whisper.cpp (large-v3)': '2.5%（权重相同）',
            'faster-whisper (large-v3)': '2.5%（权重相同）',
          },
          {
            '指标': 'Python依赖',
            'whisper.cpp (large-v3)': '无 ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            '指标': 'Raspberry Pi / 嵌入式',
            'whisper.cpp (large-v3)': '支持 — C二进制 ✓',
            'faster-whisper (large-v3)': '可行 — 需要Python运行时',
          },
          {
            '指标': '输出格式',
            'whisper.cpp (large-v3)': 'SRT、VTT、JSON、CSV、txt',
            'faster-whisper (large-v3)': 'Python对象（start、end、text）',
          },
        ],
        note: 'whisper.cpp直接输出到标准字幕和转录文件格式（SRT、VTT、JSON、CSV、txt）— 适合需要磁盘文件且无需额外代码的字幕工作流。faster-whisper产生带有`start`、`end`和`text`属性的段对象的Python生成器 — 适合LLM管道链接，可直接将段文本传递到下游模型而无需写入中间文件。字幕生成用whisper.cpp更简单，编程处理段落的管道用faster-whisper更简单。',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: '参考基准测试：faster-whisper的GPU与CPU耗时',
        content:
          '**faster-whisper项目公布了自己在13分钟音频上的耗时——数据显示，在GPU上带Flash Attention的whisper.cpp与faster-whisper fp16基本持平，而批处理和int8才是faster-whisper拉开差距的地方。** 以下数据来自faster-whisper的README（GPU行为RTX 3070 Ti 8 GB、CUDA 12.4上的large-v2；CPU行为Intel Core i7-12700K、8线程上的small模型；beam size为5）。它们不是我们自己的测量，且硬件和模型与上文的large-v3数据不同。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在faster-whisper README的基准测试中，GPU上带Flash Attention的whisper.cpp（1m05s）与faster-whisper fp16（1m03s）几乎打平；启用批处理的faster-whisper int8处理同一个13分钟文件只需16秒。',
          },
        ],
        columns: ['配置', '精度', '耗时', 'VRAM / RAM'],
        rows: [
          {
            '配置': 'GPU · OpenAI Whisper',
            '精度': 'fp16',
            '耗时': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            '配置': 'GPU · whisper.cpp (Flash Attn)',
            '精度': 'fp16',
            '耗时': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            '配置': 'GPU · faster-whisper',
            '精度': 'fp16',
            '耗时': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            '配置': 'GPU · faster-whisper',
            '精度': 'int8',
            '耗时': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            '配置': 'GPU · faster-whisper, 批大小8',
            '精度': 'int8',
            '耗时': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            '配置': 'CPU · OpenAI Whisper',
            '精度': 'fp32',
            '耗时': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            '配置': 'CPU · whisper.cpp',
            '精度': 'fp32',
            '耗时': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            '配置': 'CPU · faster-whisper',
            '精度': 'int8',
            '耗时': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            '配置': 'CPU · faster-whisper, 批大小8',
            '精度': 'int8',
            '耗时': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: '请结合上方的正面对比表阅读：在此配置下，单路fp16的GPU速度两个工具很接近。faster-whisper持久的优势是int8的内存节省（2.9 GB对比fp16的4.1–4.5 GB）和批量推理（16秒对比59秒）。在CPU上，不使用批处理时，whisper.cpp fp32与faster-whisper int8相差约25%以内。README中的OpenAI Whisper行给出了基准：GPU上为2m23s（fp16，4708 MB），CPU上为6m58s（fp32，2335 MB），而faster-whisper int8分别为59s和1m42s。',
      },
      realTimeSetup: {
        id: 'real-time',
        title: '实时转录配置',
        content:
          '**实时转录在音频从麦克风到达时分块处理，产生比语音稍有延迟的文本。** 两款工具均支持此功能，但各有权衡。',
        items: [
          '**whisper.cpp流模式：** 运行`./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`。处理3秒音频块；延迟因硬件和模型而异，我们未测量。无需Python。',
          '**faster-whisper VAD管道：** 在`model.transcribe()`中使用`vad_filter=True`。Silero VAD自动在静音边界处分割音频 — 比固定长度窗口更自然的块。',
          '**延迟：** 因硬件和模型大小而异，我们未测量。tiny等较小模型通常响应更快，但WER更高。',
          '**实时模型选择：** small或base是实际最优选择 — 足够快以跟上语音，对清晰音频足够准确。除非有专用GPU，否则避免实时使用large-v3。',
          '**麦克风输入：** whisper.cpp通过SDL2或portaudio读取原始音频。faster-whisper读取任意Python音频库（sounddevice、pyaudio、soundfile）的音频数组。',
          '**稳定性：** whisper.cpp流模式在静音时可能产生重复标记（"幻听"短填充词）。使用`--suppress-blank`和`--no-speech-threshold`来抑制。',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon：whisper.cpp是自然之选',
        content:
          '**在M1到M5的Mac上，由于faster-whisper没有Metal后端、在Mac上只能用CPU运行，支持Core ML / Metal加速的whisper.cpp是自然之选。** whisper.cpp的README称Core ML编码器比纯CPU执行快3倍以上（开发者自报）。我们没有找到M5 Pro上large-v3的公开基准，因此本指南不给出Apple芯片的实时倍速。',
        items: [
          '**Core ML导出：** 运行`./models/generate-coreml-model.sh large-v3`将编码器导出为Core ML格式。这将编码器推理卸载到Apple Neural Engine。',
          '**基准：** whisper.cpp项目在其[基准讨论帖](https://github.com/ggml-org/whisper.cpp/discussions/89)中收集测试数据（编码器耗时；我们查看时没有M5条目）。我们没有找到M5 Pro上large-v3的公开基准，因此不给出Apple芯片的实时倍速。',
          '**测量您自己的Mac：** whisper.cpp自带`whisper-bench`工具，可测量编码器耗时；也可以对真实文件做端到端计时。结果因芯片、模型大小和量化方式而异。',
          '**内存：** 统一内存意味着没有独立显存。whisper.cpp的README列出large模型约需3.9 GB内存，在16 GB的Mac上仍可留出空间给其他进程。',
          '**Mac上的faster-whisper：** 仅CPU（int8）。可用于批量转录，但没有Metal路径；我们没有找到它与whisper.cpp在Apple Silicon上的对比基准。',
          '**建议：** Mac上的大多数STT工作使用whisper.cpp。如果需要Python集成并保留Metal加速，请添加pywhispercpp。',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU：公开测试中faster-whisper领先',
        content:
          '**在带NVIDIA GPU的Windows和Linux上，在我们找到的公开测试中faster-whisper更快。** 第三方RTX 4070 Ti测试（large-v3，2026年6月）中，它达到23倍实时速度，whisper.cpp CUDA为15倍；在faster-whisper README测试（large-v2，RTX 3070 Ti）中，单流模式下两者几乎持平（1m03s对1m05s），int8和批处理才是faster-whisper拉开差距的地方。',
        items: [
          '**RTX 4070 Ti（12 GB），large-v3，第三方测试：** faster-whisper为23倍实时速度（large-v3-turbo：56倍）；whisper.cpp CUDA为15倍（large-v3-turbo：40倍）。',
          '**RTX 3070 Ti（8 GB），large-v2，faster-whisper README：** 13分钟的文件在fp16下耗时1m03s，int8下59s（显存2926 MB），批大小为8的int8下16s。',
          '**其他显卡（RTX 3060、RTX 4060）：** 我们没有找到这些显卡上large-v3的公开基准，因此不给出速度数值；上面的int8显存数据是判断能否运行的主要依据。',
          '**int8与float16：** 在README测试中，int8显存减少约三分之一（2926 MB对4525 MB），速度略快（59s对1m03s），精度损失通常可以忽略。在NVIDIA上，`compute_type="int8"`是合理的默认设置。',
          '**批量处理：** faster-whisper的`batched=True`参数支持并行处理多个音频文件，最大化大型转录任务的GPU利用率。',
          '**Python管道集成：** faster-whisper可直接插入LangChain、Haystack和自定义Python管道。无需封装whisper.cpp时的子进程开销。',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: '旧款NVIDIA GPU（GTX 970）：int8回退为float32',
        content:
          '**在GTX 970（Maxwell，计算能力5.2）上，faster-whisper仍可在CUDA上运行，但`compute_type="int8"`并不会得到真正的int8——CTranslate2会把权重转换为float32。** 其量化对照表将计算能力6.0及以下的所有GPU，无论请求何种类型，都映射为float32，因此RTX显卡所说的显存节省和int8加速并不适用。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在GTX 970（计算能力5.2）上，faster-whisper在CUDA上只能以float32运行——请求的int8计算类型会被自动转换。',
          },
          {
            type: 'plain-terms',
            text: 'GTX 970对GPU上的int8来说太旧了。它仍能工作，但没有显存节省，因此在其4 GB显存上请使用tiny、base或small模型。',
          },
        ],
        items: [
          '**仍然可用的部分：** CTranslate2的预编译二进制支持计算能力3.5及以上的NVIDIA GPU，因此GTX 970（5.2）可以在CUDA上运行faster-whisper，前提是已安装的CUDA和cuDNN库与版本匹配（见“常见问题与解决”）。',
          '**GPU上int8可用的范围：** int8需要计算能力7.0及以上（Volta及RTX 20系列以后），或者恰好为6.1（GTX 1050至1080 Ti，int8_float32）。计算能力6.0、6.2及以下会回退为float32；float16需要7.0及以上。',
          '**对显存的影响：** float32每个参数占4字节，int8只占1字节；按参数量计算，large-v3（15.5亿）仅权重就需要约6 GB，超过GTX 970的4 GB。small（2.44亿，float32约1 GB）可以轻松放下；medium（7.69亿，约3 GB）则比较勉强。',
          '**速度：** 我们没有在GTX 970上做过基准测试，因此这里没有实测数据。预计float32吞吐量远低于本指南中的RTX 4070 Ti数值，请用自己的音频测试tiny、base和small。',
          '**查看GPU支持的类型：** `ctranslate2.get_supported_compute_types("cuda")`会列出CTranslate2在你的显卡上接受的计算类型。',
          '**备选方案：** CPU int8（`device="cpu", compute_type="int8"`）可在任何较新的x86 CPU上运行；whisper.cpp的量化GGML模型（例如`ggml-large-v3-q5_0.bin`，约3–4 GB）是把更大模型装进4 GB的常见方式——请在你的显卡上验证CUDA或Vulkan构建。',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: '在Raspberry Pi 5上运行Whisper：tiny、base与small',
        content:
          '**在Raspberry Pi 5上，whisper.cpp可以实时运行tiny和base模型用于实时转录，而small模型运行速度低于实时，最适合用于批处理任务。** Pi 5的四核Cortex-A76没有可用于Whisper的GPU路径，因此所有推理都在CPU（ARM NEON）上进行。使用量化的GGML模型（`ggml-*-q5_0.bin`）可降低内存占用并加快推理速度。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '在Raspberry Pi 5上，whisper.cpp的small模型运行速度低于实时（据社区反馈，我们未自行测试；仅适合批处理）；据报告能跟上实时语音的是tiny和base。',
          },
          {
            type: 'plain-terms',
            text: 'Pi 5可以用tiny和base这两个Whisper模型转录实时音频，但small模型太重，无法实时跟上 — 请将small用于在后台处理的录制文件，而不是实时麦克风。',
          },
        ],
        items: [
          '**Pi 5上的Whisper small：** 据报告在CPU上慢于实时（我们未自行测试，时间仅供参考）。3.4% WER（Whisper论文，LibriSpeech test-clean）下精度高，但对于实时字幕太慢 — 用于过夜/批量转录。',
          '**Pi 5上的Whisper base：** 据报告借助多线程（`-t 4`）约为实时；结果因构建、散热和音频而异。是Pi上实时转录的实用最佳平衡点，WER为5.0%，可接受。',
          '**Pi 5上的Whisper tiny：** 最快的选项，据报告一般可满足实时使用，代价是WER较高（7.6%）。最适合唤醒词和短命令识别。',
          '**使用量化模型：** `bash ./models/download-ggml-model.sh small-q5_0`可减少RAM占用并加快推理，精度损失极小 — 在Pi 5的共享内存上很重要。',
          '**Pi 5上的faster-whisper：** 可安装（`pip install faster-whisper`，CPU int8），在批处理任务中具有竞争力，但whisper.cpp更轻量的C二进制文件是更常见的嵌入式选择。',
          '**散热：** 持续转录会让Pi 5的CPU高负荷运行 — 使用主动散热以避免热降频侵蚀这些数据。',
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
            text: '如果您用Mac，请选whisper.cpp——它能使用Metal和Core ML，而faster-whisper不支持。如果您用NVIDIA GPU并写Python，请选faster-whisper——它在公开测试中更快，int8下占用的GPU内存也更少。',
          },
        ],
        columns: ['使用场景', '推荐工具', '原因'],
        rows: [
          {
            '使用场景': 'Apple Silicon Mac（任意型号）',
            '推荐工具': 'whisper.cpp',
            '原因': 'Metal / Core ML加速；faster-whisper没有Metal后端',
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
            '推荐工具': '两者都测',
            '原因': 'README与第三方CPU测试结果不一致，请实测',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)：** 添加Flash Attention 2支持的Hugging Face Transformers管道封装器，在NVIDIA硬件上实现快速的批量GPU推理；其README报告了显著提速（开发者自报，我们未与faster-whisper做对比测试）。最适合：在NVIDIA GPU上批量处理大型音频存档。需要Flash Attention 2兼容GPU（Ampere或更新：RTX 3000+、A100、H100）。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '常见问题与解决方案',
        content: '最常见的配置和运行时问题及直接解决方案：',
        items: [
          '**CUDA版本不匹配：** 当前的faster-whisper版本需要CUDA 12版cuBLAS和cuDNN 9。如果被旧库限制，请固定ctranslate2：`pip install --force-reinstall ctranslate2==4.4.0`（CUDA 12搭配cuDNN 8）或`3.24.0`（CUDA 11搭配cuDNN 8）。使用`nvcc --version`检查CUDA版本。',
          '**Metal模型导出失败：** 确保已安装Xcode Command Line Tools — 运行`xcode-select --install`。Core ML导出脚本需要`coremltools` Python包：`pip install coremltools`。',
          '**静音时出现幻听：** 两款工具在静音音频段上都可能产生重复填充标记。在whisper.cpp流模式中使用`--no-speech-threshold 0.6`，或在faster-whisper的`model.transcribe()`中使用`vad_filter=True`自动跳过静音段。',
          '**large-v3内存不足：** 在faster-whisper中切换到int8量化（`compute_type="int8"`）——在README测试（large-v2）中，显存从约4.5 GB（float16）降到约2.9 GB。在whisper.cpp中，使用量化的GGML变体（如`ggml-large-v3-q5_0.bin`），可将内存降到约3–4 GB。',
          '**非英语音频出现乱码：** 不要对非英语语音使用`.en`模型变体（tiny.en、base.en）— 它们仅支持英语。使用多语言模型（base、small、medium、large-v3）并明确设置语言：whisper.cpp中使用`-l zh`，faster-whisper中使用`language="zh"`。',
          '**CPU推理慢：** 确认CPU支持AVX2指令集（优化CPU推理所必需）。Linux上使用`grep avx2 /proc/cpuinfo`检查，Mac上使用`sysctl machdep.cpu.features`检查。不支持AVX2的CPU将回退到通用SIMD，速度慢2至3倍。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题解答',
        faqs: [
          {
            q: 'whisper.cpp有Debian或apt软件包吗？',
            a: '有——whisper.cpp现已正式打包进入Debian（目前在sid中），提供`whisper.cpp`可执行文件，以及用于作为共享库链接的`libwhisper-dev`和`libwhisper1`。它尚未进入Debian稳定版或Ubuntu默认软件源，因此大多数系统仍需使用sid或从源码构建。另外，Debian 9+和Ubuntu也有一个非官方Snap包（`sudo snap install whisper-cpp`）可用。',
          },
          {
            q: '如何检查已安装的whisper.cpp版本？',
            a: '不带参数或加上`--help`运行编译好的可执行文件，版本号会显示在横幅行中。也可以在克隆的仓库中运行`git describe --tags`查看确切的提交，或将构建日期与github.com/ggml-org/whisper.cpp/releases上的发布说明对比，确认是否落后于当前的v1.9.5。',
          },
          {
            q: 'whisper.cpp和faster-whisper的转录精度相同吗？',
            a: '大体如此。两款工具均使用相同的OpenAI Whisper模型权重，因此精度应当非常接近；区别主要在推理运行时（C/C++与CTranslate2 Python）。量化（如int8）、解码设置和数值精度仍可能让输出出现细微差异。我们未测量两种运行时之间的WER差异，请用您自己的音频测试。',
          },
          {
            q: '可以在配备Apple Silicon的Mac上使用faster-whisper吗？',
            a: '可以，但只能用CPU运行——faster-whisper不支持Metal。whisper.cpp可以使用Metal和Core ML，其README称Core ML编码器比纯CPU执行快3倍以上。我们没有找到Apple Silicon上faster-whisper与whisper.cpp的公开对比基准，请用自己的音频实测。在Mac上使用faster-whisper的主要理由，是您已有依赖它的Python流水线。',
          },
          {
            q: '语音助手应该使用哪个Whisper模型规格？',
            a: '对于实时语音界面，Whisper small是标准推荐 — 清晰英语上约3.4% WER（Whisper论文，LibriSpeech test-clean），现代CPU或GPU上延迟较低（因硬件而异，我们未测量），约2 GB RAM内可运行。硬件非常受限（Raspberry Pi Zero 2W、旧手机）且可接受约7.6% WER时使用tiny。仅在延迟不是限制的批量转录场景下使用medium或large-v3。',
          },
          {
            q: 'whisper.cpp支持英语以外的语言吗？',
            a: '支持。所有Whisper多语言模型（base、small、medium、large-v3）支持99种语言。在CLI中添加`-l [语言代码]`：中文用`-l zh`，日语用`-l ja`，法语用`-l fr`等。tiny.en和base.en模型仅支持英语，在英语上比多语言版本略微准确。',
          },
          {
            q: '如何安装支持CUDA的faster-whisper？',
            a: '使用`pip install faster-whisper`安装。当前版本需要系统中有CUDA 12版NVIDIA cuBLAS和cuDNN 9（在Linux上，`pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"`可提供二者）。在较旧的CUDA 11 / cuDNN 8环境中，请固定`ctranslate2==3.24.0`（CUDA 12搭配cuDNN 8则用`4.4.0`）。然后加载模型时指定`device="cuda"`：`WhisperModel("large-v3", device="cuda", compute_type="int8")`。若希望在CUDA不可用时回退到CPU，请使用`device="auto"`。',
          },
          {
            q: '哪个更准确 — whisper.cpp还是faster-whisper？',
            a: '非常接近，但不保证完全相同。两款工具均使用相同的OpenAI Whisper模型权重，因此对同一音频，精度应当非常接近。whisper.cpp和faster-whisper的主要区别在于速度和平台支持。量化（int8、q5_0）、束搜索宽度等解码设置可能让转录结果略有不同；我们未做测量，请用您自己的音频样本对比两者。',
          },
          {
            q: '可以在8 GB RAM上运行Whisper large-v3吗？',
            a: '在GPU上可以——faster-whisper的large-v3 int8应该能放进8 GB显卡（faster-whisper README测得large-v2 int8的显存为2926 MB）。仅用CPU时，8 GB内存对large-v3比较紧张（float32约需10 GB）。仅CPU的系统请使用medium（5 GB内存）或small（2 GB内存）。在README测试中，whisper.cpp在CPU上占用的内存比faster-whisper少（int8下1049 MB对1477 MB）。',
          },
          {
            q: '本地Whisper与云端STT相比费用如何？',
            a: '无持续的许可或按分钟费用。云端STT服务通常按音频分钟收费$0.006至$0.024（请以当前价格为准）— 每周转录8小时会议的开发者每月约$12至50。本地Whisper在您已拥有的硬件上运行，无按分钟计费，无需管理API密钥，也无需把音频发送到云服务（不含电费和部署时间）。',
          },
          {
            q: 'faster-whisper的int8能在GTX 970上使用吗？',
            a: '不能作为真正的int8使用。GTX 970的计算能力为5.2，而CTranslate2只在计算能力7.0及以上（或恰好6.1）的GPU上运行int8；在更旧的显卡上，权重会被自动转换为float32。faster-whisper仍会在GPU上以float32运行，因此请使用tiny、base或small以控制在4 GB之内，或使用可在任何较新x86 CPU上运行的CPU int8。我们没有对GTX 970做过基准测试，因此这里没有实测速度数据。',
          },
          {
            q: 'whisper.cpp和faster-whisper的Whisper模型文件有多大？',
            a: 'whisper.cpp的README列出的GGML模型文件磁盘大小约为：tiny 75 MiB、base 142 MiB、small 466 MiB、medium 1.5 GiB、large 2.9 GiB，所需内存约为273 MB、388 MB、852 MB、2.1 GB和3.9 GB。faster-whisper首次使用时从Hugging Face下载CTranslate2模型；large-v3约为3 GB（15.5亿参数，float16下每个参数2字节）。上方的模型大小表列出了各规格的参数量。',
          },
          {
            q: '本地转录时，Whisper large-v3-turbo比large-v3更好吗？',
            a: '更快，但不是更准。large-v3-turbo有8.09亿参数，因为OpenAI把解码器从32层削减到了4层；其模型卡称它比large-v3快得多，代价是质量略有下降，采用MIT许可。模型卡还提醒它可能产生幻觉或重复文本，且各语言的准确度不一。最难处理的音频请继续使用large-v3，追求速度时使用turbo（英语可用distil-large-v3）。whisper.cpp和faster-whisper都能运行它。',
          },
          {
            q: 'whisper.cpp可以用AMD或Intel GPU代替CUDA吗？',
            a: '可以。whisper.cpp的Vulkan后端（`-DGGML_VULKAN=1`）只要驱动支持Vulkan API就能跨厂商工作，ROCm/HIP（`-DGGML_HIP=1`）面向AMD GPU，OpenVINO可在Intel CPU和GPU上加速编码器。faster-whisper自己的文档只涵盖NVIDIA CUDA；CTranslate2的发布说明提到了ROCm轮子，但我们没有测试过这条路径。',
          },
          {
            q: '在Mac上，mlx-whisper比whisper.cpp更快吗？',
            a: '一项独立测试对large-v3-turbo的结论是更快：Bill Mill在2026年1月的复测中，同一段长录音上mlx_whisper约13.1秒，whisper.cpp为26.7秒，大约快2倍。社区在短音频上的速度测试则显示两者接近，其中whisper.cpp使用了Core ML和q5_0量化。本指南中的M5 Pro数据没有与MLX对比，因此请在选择之前用自己的音频做基准测试。',
          },
          {
            q: 'faster-whisper比OpenAI Whisper更快吗？',
            a: '是的。根据faster-whisper的README，其基于CTranslate2的重新实现在精度相同的情况下最高比原版openai/whisper包快4倍，并且占用内存更少；8位量化还能在CPU和GPU上进一步提高效率。在README的13分钟测试中，openai/whisper在RTX 3070 Ti（large-v2，fp16）上耗时2m23s，faster-whisper fp16为1m03s、int8为59s；在Intel Core i7-12700K CPU（small模型，fp32）上openai/whisper耗时6m58s，faster-whisper int8为1m42s。两者使用相同的Whisper权重，因此精度应当基本相同；第三种运行时whisper.cpp启用Flash Attention后，在GPU测试中耗时1m05s。',
          },
          {
            q: 'Whisper在GPU上比在CPU上更快吗？',
            a: '大模型是的；小模型通常CPU就够用。在faster-whisper README中，large-v2在RTX 3070 Ti上用int8处理13分钟文件耗时59秒，而small模型在Intel Core i7-12700K CPU上用int8耗时1m42s——模型和硬件都不同，只能比较数量级。第三方在Intel Core i5-13400F CPU上对large-v3的测试中，whisper.cpp为15倍实时速度，faster-whisper为2倍。据社区反馈，在Raspberry Pi 5上tiny和base能跟上实时语音，我们未自行测试。',
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
          '[insanely-fast-whisper（GitHub）](https://github.com/Vaibhavs10/insanely-fast-whisper) — 用于NVIDIA GPU批量推理的Flash Attention 2 Whisper管道（基准数据见其README，为开发者自报）。',
          '[GitHub上的OpenAI Whisper](https://github.com/openai/whisper) — 原始Whisper模型、论文、各尺寸的模型卡，以及相对速度表（A100）。',
          '[x2q.net：Whisper后端对比](https://www.x2q.net/post/whisper-backend-shootout/) — 2026年6月的第三方基准（RTX 4070 Ti和Intel Core i5-13400F，large-v3，丹麦语电话录音），是faster-whisper和whisper.cpp实时倍速的依据。',
          '[whisper.cpp基准讨论帖](https://github.com/ggml-org/whisper.cpp/discussions/89) — 社区提供的Apple Silicon等芯片的编码器耗时。',
          '[OpenAI Whisper论文（Radford等，2022）](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision"。WER数据来源。',
          '[CTranslate2文档](https://github.com/OpenNMT/CTranslate2) — 量化细节、硬件支持及int8优化原理。',
          '[CTranslate2量化文档](https://opennmt.net/CTranslate2/quantization.html) — 各GPU计算能力所支持的计算类型（GTX 970部分的依据）。',
          '[faster-whisper README基准测试](https://github.com/SYSTRAN/faster-whisper#benchmark) — 参考基准测试所用的13分钟GPU与CPU耗时，以及当前CUDA 12 / cuDNN 9要求。',
          '[Hugging Face上的openai/whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) — 模型卡：8.09亿参数、4层解码器、MIT许可。',
          '[Bill Mill：更新后的mlx_whisper与whisper.cpp基准测试](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Apple Silicon上large-v3-turbo耗时的独立对比。',
          '[whisper.cpp发布页](https://github.com/ggml-org/whisper.cpp/releases) — v1.9.4和v1.9.5的发布说明。',
          '[CTranslate2发布页](https://github.com/OpenNMT/CTranslate2/releases) — v4.8.3、v4.8.4和v4.8.5的发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地TTS与语音克隆2026：Piper vs Coqui vs XTTS v2](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS补充：将转录文本转换回语音，完全离线。',
          '[2026年构建完全离线语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 将Whisper STT连接到本地LLM和Piper TTS，构建完整语音管道。',
          '[本地多模态AI管道2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 在STT和TTS基础上添加视觉模型，构建完整的本地多模态技术栈。',
          '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide) — 完整语音 + LLM管道的GPU和RAM需求。',
          '[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 移动版：iPhone上的WhisperKit，Android上的Layla。',
        ],
      },
    },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: Benchmarks STT local, configuración y aceleración GPU',
    seoTitle: 'whisper.cpp vs faster-whisper vs Whisper 2026: CPU/GPU',
    intro:
      'whisper.cpp y faster-whisper son las dos implementaciones dominantes del modelo Whisper de OpenAI para transcripción local y offline en 2026. whisper.cpp es un port puro en C/C++ que funciona en Apple Metal, CUDA, Vulkan y CPU — ideal para Apple Silicon, sistemas embebidos y aplicaciones de voz en tiempo real. faster-whisper es una librería Python que usa CTranslate2 y, según su README, es hasta 4× más rápida que el Whisper original con la misma precisión. Esta guía cubre instalación, benchmarks de rendimiento, configuración de transcripción en tiempo real y una comparación directa entre plataformas para que elijas la herramienta adecuada.',
    metaDescription:
      'faster-whisper es hasta 4x más rápido que OpenAI Whisper; whisper.cpp añade Apple Metal. Tiempos CPU vs GPU, VRAM y WER de benchmarks publicados.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-es.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Usa whisper.cpp en Apple Silicon y dispositivos embebidos, y faster-whisper en GPUs NVIDIA y pipelines de Python: ambos ejecutan los mismos pesos de OpenAI Whisper, así que la precisión es prácticamente la misma y cambian sobre todo la velocidad y la integración.**',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar whisper.cpp o faster-whisper para reconocimiento de voz local en 2026?',
        answer:
          'La elección depende de tu hardware y de tus necesidades de integración. En Apple Silicon, whisper.cpp con Metal y Core ML es la opción natural porque faster-whisper no tiene backend Metal. En GPUs NVIDIA, faster-whisper fue más rápido en las pruebas publicadas que encontramos (23× frente a 15× tiempo real con large-v3 en una RTX 4070 Ti, prueba de terceros) y se integra mejor en pipelines de Python. En CPU sola, los resultados publicados no coinciden: mide con tu propio audio.',
        bullets: [
          'Apple Silicon → whisper.cpp con Core ML / Metal; faster-whisper no tiene backend Metal.',
          'GPU NVIDIA → faster-whisper. Prueba de terceros en RTX 4070 Ti, large-v3: 23× tiempo real frente a 15× de whisper.cpp CUDA.',
          'Pipeline Python → faster-whisper. Python nativo, configuración en 5 líneas, VAD incluido.',
          'Embebido / Raspberry Pi 5 → whisper.cpp. Binario C puro, sin runtime Python; tiny/base funcionan en tiempo real, small solo por lotes.',
          'Voz en tiempo real → modo stream de whisper.cpp o pipeline VAD de faster-whisper.',
          'Transcripción por lotes → faster-whisper. Mejor rendimiento en GPU; batching asíncrono sencillo.',
          'Precisión WER: se espera muy parecida — usan los mismos pesos del modelo Whisper (la cuantización y los ajustes de decodificación pueden causar pequeñas diferencias).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Por qué reconocimiento de voz local?', anchor: '#why-local-stt' },
      { label: 'Tamaños del modelo Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: la alternativa más rápida', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — el port C/C++', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp: última versión y novedades', anchor: '#whats-new' },
      { label: 'faster-whisper — el port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Obtén ggml-base.bin con pip (configuración Python)', anchor: '#install-ggml-pip' },
      { label: 'Comparativa directa: tabla de benchmarks', anchor: '#benchmarks' },
      { label: 'Benchmark de referencia: tiempos de GPU vs CPU', anchor: '#reference-benchmark' },
      { label: 'Configuración de transcripción en tiempo real', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp es la opción natural', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA: faster-whisper lidera en pruebas publicadas', anchor: '#nvidia-gpu' },
      { label: 'GPU NVIDIA antiguas (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper en Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp es la opción natural de STT local para Apple Silicon.** El port en C/C++ usa Core ML y Apple Metal para la aceleración por hardware; su README indica que el encoder Core ML es más de 3× más rápido que la ejecución solo en CPU (dato de los desarrolladores), y no necesita Python.',
          '**faster-whisper fue más rápido en GPUs NVIDIA en las pruebas publicadas que encontramos, y encaja bien en pipelines de Python.** En la prueba del README, int8 redujo la VRAM de 4708 MB (OpenAI Whisper fp16) a 2926 MB (large-v2, RTX 3070 Ti, dato de los desarrolladores); una prueba de terceros en una RTX 4070 Ti midió 23× tiempo real frente a 15× de whisper.cpp CUDA (large-v3).',
          '**Ambas herramientas usan los mismos pesos del modelo Whisper de OpenAI.** Por eso la precisión debería ser muy parecida: las diferencias están sobre todo en el rendimiento del runtime y el camino de integración; aun así, la cuantización y los ajustes de decodificación pueden causar pequeñas diferencias de WER, que no hemos medido.',
          '**Whisper large-v3 ofrece la mejor precisión con 2,5% WER en inglés.** Para la mayoría de casos de producción, Whisper small (3,4% WER, 2 GB RAM) o medium (2,9% WER, 5 GB RAM) ofrece mejor equilibrio entre velocidad y precisión.',
          '**La transcripción en tiempo real es alcanzable con ambas herramientas** — whisper.cpp mediante su flag `--stream`, faster-whisper mediante su pipeline VAD (detección de actividad de voz) integrado. El retraso del texto respecto al habla en vivo varía según el hardware y el tamaño del modelo; no lo hemos medido.',
          '**whisper.cpp funciona en CPU, Metal, CUDA y Vulkan** — siendo la opción más práctica para uso embebido multiplataforma (Raspberry Pi, configuraciones GPU en Windows, servidores ARM). faster-whisper solo admite CPU y CUDA (sin Metal en Mac).',
          '**Para Raspberry Pi 5 y Linux embebido, whisper.cpp tiny y base en CPU** son los modelos capaces de tiempo real — tiny funciona cómodamente más rápido que el tiempo real, base en torno al tiempo real con `-t 4`. El modelo small (3,4% WER) funciona por debajo del tiempo real en el Pi 5 y conviene reservarlo para trabajos por lotes. Toda la inferencia es en CPU (ARM NEON) — el Pi no tiene una ruta GPU utilizable para Whisper. Estas indicaciones para el Pi 5 proceden de informes de la comunidad, no de mediciones propias.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Ambas herramientas:** basadas en el modelo Whisper de código abierto de OpenAI (licencia MIT). Mismos pesos del modelo, por tanto precisión similar — runtimes diferentes.',
          '**whisper.cpp:** escrito en C/C++ por Georgi Gerganov. Admite CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. No requiere Python.',
          '**faster-whisper:** librería Python usando CTranslate2. Admite CPU (int8) y CUDA. Sin soporte para Apple Metal.',
          '**Tamaños del modelo Whisper:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Todos en formato ggml / CTranslate2.',
          '**Mejor modelo para la mayoría de casos:** Whisper small — 3,4% WER y unos 2 GB de memoria; sube a medium o large-v3 cuando la precisión importe más que la velocidad.',
          '**GPU NVIDIA (large-v3, prueba de terceros, RTX 4070 Ti):** faster-whisper 23× tiempo real; whisper.cpp CUDA 15× tiempo real.',
          '**Apple Silicon:** whisper.cpp funciona con Metal y Core ML (README: encoder Core ML más de 3× más rápido que solo CPU); faster-whisper no tiene backend Metal. No encontramos ningún benchmark publicado de large-v3 en M5 Pro.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '¿Por qué reconocimiento de voz local?',
        content:
          'Los servicios STT en la nube (Google Speech-to-Text, AWS Transcribe, Azure Speech) cobran por minuto de audio — típicamente $0,006–$0,024/minuto — y envían el audio a servidores remotos. Para aplicaciones sensibles a la privacidad (dictado médico, grabaciones legales, entrevistas periodísticas, reuniones corporativas), la transcripción local evita enviar el audio a un servicio de terceros.',
        items: [
          '**Privacidad:** ambas herramientas pueden ejecutarse en local sin enviar el audio a un servicio cloud, así que ningún proveedor cloud tiene que intervenir en la transcripción. Las obligaciones de protección de datos, como la base legal y el almacenamiento seguro, siguen siendo tuyas.',
          '**Costo:** sin tarifas por minuto. Con los precios de lista habituales de STT en la nube ($0,006–$0,024/minuto; consulta los precios actuales), un desarrollador que transcribe 8 horas de reuniones por semana pagaría aproximadamente $12–50/mes, un gasto que la transcripción local evita (hardware y electricidad aparte).',
          '**Offline:** funciona en aviones, instalaciones seguras y zonas sin internet estable. Sin gestión de API keys.',
          '**Latencia:** sin ida y vuelta de subida/descarga. Para interfaces de voz en tiempo real, el procesamiento local puede reducir la latencia STT frente a un viaje de ida y vuelta a la nube; la mejora depende de tu red y tu hardware.',
          '**Personalización:** ajusta el modelo con vocabulario específico del dominio. Ejecuta el tamaño de modelo que quepa en tu hardware.',
          '**Integración con Home Assistant:** Whisper puede ejecutarse en local sin enviar audio a un servicio en la nube, de modo que las palabras de activación y los comandos de voz pueden quedarse en tu red doméstica. Ver [Whisper local en Home Assistant →](/es/smart-home/local-whisper-home-assistant) para la configuración del complemento que reemplaza completamente el STT en la nube.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tamaños del modelo Whisper — base de ambas herramientas',
        content:
          'Tanto whisper.cpp como faster-whisper usan los mismos pesos del modelo Whisper, convertidos a sus formatos respectivos (GGML para whisper.cpp, CTranslate2 para faster-whisper). Elige el tamaño del modelo según tu presupuesto de VRAM/RAM y tus requisitos de precisión.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-es.webp',
          imageCaption: 'Tamaños de modelo Whisper compartidos por whisper.cpp y faster-whisper, de tiny a large-v3.',
          imageAlt: 'Póster «Tamaños de modelo Whisper: velocidad vs precisión»: tiny es unas 10 veces más rápido que large, large-v3 es el más lento y el más preciso, velocidades del README de OpenAI en una A100',
        columns: ['Modelo', 'Parámetros', 'VRAM / RAM', 'WER inglés', 'Velocidad relativa (vs large)'],
        rows: [
          {
            'Modelo': 'tiny',
            'Parámetros': '39M',
            'VRAM / RAM': '~1 GB',
            'WER inglés': '7,6%',
            'Velocidad relativa (vs large)': '~10×',
          },
          {
            'Modelo': 'base',
            'Parámetros': '74M',
            'VRAM / RAM': '~1 GB',
            'WER inglés': '5,0%',
            'Velocidad relativa (vs large)': '~7×',
          },
          {
            'Modelo': 'small',
            'Parámetros': '244M',
            'VRAM / RAM': '~2 GB',
            'WER inglés': '3,4%',
            'Velocidad relativa (vs large)': '~4×',
          },
          {
            'Modelo': 'medium',
            'Parámetros': '769M',
            'VRAM / RAM': '~5 GB',
            'WER inglés': '2,9%',
            'Velocidad relativa (vs large)': '~2×',
          },
          {
            'Modelo': 'large-v3',
            'Parámetros': '1,55B',
            'VRAM / RAM': '~10 GB',
            'WER inglés': '2,5%',
            'Velocidad relativa (vs large)': '1× (referencia)',
          },
          {
            'Modelo': 'distil-large-v3',
            'Parámetros': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER inglés': '~2,6%',
            'Velocidad relativa (vs large)': '~6,3×',
          },
        ],
        note: 'WER (tasa de error de palabras), menor es mejor. Los valores de tiny, base, small y medium proceden del paper de Whisper (Radford et al., 2022, apéndice D.1.1, LibriSpeech test-clean, decodificación voraz). El paper no cubre large-v3 ni distil-large-v3, por lo que sus valores son aproximados y no directamente comparables. Las velocidades relativas son los valores publicados por OpenAI en el README de Whisper, medidos en una A100 respecto al modelo large (dato de los desarrolladores); la velocidad real depende del hardware. Según su ficha de modelo, distil-large-v3 es 6,3× más rápido que large-v3.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: la alternativa más rápida',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) es una variante destilada de large-v3 con ~50% menos parámetros, que funciona 6,3× más rápido manteniendo el WER dentro del ~1% del original.** Es la elección correcta cuando la velocidad de transcripción importa más que exprimir el último porcentaje de precisión. distil-large-v3 funciona con faster-whisper (soporte CTranslate2 nativo) y whisper.cpp (mediante conversión al formato GGML), integrándose en el runtime que ya uses.',
        items: [
          '**Parámetros:** ~756M — aproximadamente la mitad de los 1,55B de large-v3, cabe en ~4 GB de VRAM en lugar de ~10 GB.',
          '**Velocidad:** 6,3× más rápido que large-v3 según la ficha del modelo (latencia relativa, no un factor de tiempo real), con un WER dentro de ~1% del de large-v3 en audio largo.',
          '**WER:** ~2,6% en inglés — solo ~0,1% superior al 2,5% de large-v3. En la práctica, la diferencia probablemente sea difícil de notar en habla típica, pero no lo hemos comprobado.',
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
          '**Ventaja en Apple Silicon:** whisper.cpp exporta modelos al formato Core ML, lo que permite la inferencia en el Apple Neural Engine. Su README indica que el encoder Core ML es más de 3× más rápido que la ejecución solo en CPU (dato de los desarrolladores).',
          '**Instalación:** clona el repositorio, ejecuta `make` (o `cmake`). Binarios precompilados disponibles para plataformas comunes. Sin dependencia de Python.',
          '**Descarga de modelo:** `bash ./models/download-ggml-model.sh base.en` — descarga el archivo de modelo en formato GGML (~142 MB para base).',
          '**Ejemplo de CLI:** `./main -m models/ggml-base.bin -f audio.wav` — transcribe un archivo WAV a la salida estándar. Añade `-l es` para español.',
          '**Modo stream en tiempo real:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcribe desde el micrófono en chunks de 3 segundos.',
          '**Wrapper Python:** pywhispercpp proporciona un binding Python para whisper.cpp, permitiendo su uso en pipelines Python sin sacrificar la aceleración Metal.',
          '**VAD:** whisper.cpp admite de forma opcional la detección de actividad de voz Silero mediante `--vad` en `whisper-cli` (requiere descargar un modelo VAD aparte). El modo stream sigue requiriendo ajustar los parámetros `--step` y `--length` según el caso de uso.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp: última versión y novedades',
        content:
          '**La última versión de whisper.cpp es la v1.9.5, publicada el 6 de octubre de 2026.** Sincroniza la biblioteca ggml incluida con la v0.26.0 (trabajo en los backends CUDA, Vulkan, Metal, SYCL, OpenCL y los kernels de CPU) y añade correcciones de Whisper, como un callback de aborto durante la detección de idioma y una corrección de desbordamiento de enteros en los desplazamientos de chunks paralelos. whisper.cpp también cuenta con paquete oficial de Debian (sid) (`whisper.cpp`, `libwhisper-dev`, `libwhisper1`), además del Snap no oficial. La última versión etiquetada de faster-whisper sigue siendo la v1.2.1 (31 de octubre de 2025), pero el repositorio se mantiene activamente: el último commit es del 2 de noviembre de 2026 (comprobado el 3 de noviembre de 2026). Ambos runtimes siguen cargando los mismos pesos de OpenAI Whisper; no tenemos constancia de ninguna nueva clase de modelo que cambiara la precisión de la transcripción en 2026.',
        items: [
          '**whisper.cpp v1.9.5 (6 de octubre de 2026):** sincroniza ggml con la v0.26.0 (actualizaciones de kernels CUDA, Vulkan, Metal, SYCL, OpenCL, WebGPU y CPU), añade un callback de aborto durante la detección de idioma, corrige un desbordamiento de enteros en los desplazamientos de chunks paralelos y hace que la CLI devuelva el código de error correcto cuando falla un archivo.',
          '**whisper.cpp v1.9.4 (11 de septiembre de 2026):** el servidor ahora devuelve el idioma detectado, el callback del encoder se ejecuta antes de la detección automática de idioma y se añadió Windows on ARM al job de publicación.',
          '**whisper.cpp v1.9.3 (20 de agosto de 2026):** sincronización de ggml con v0.20.2, mejoras de rendimiento en todos los backends, cuantización Metal TQ2_0, kernels CUDA/SYCL fusionados y correcciones ARM/WASI.',
          '**whisper.cpp v1.9.0-v1.9.2 (junio-agosto de 2026):** versiones intermedias de la misma línea de sincronización de ggml antes de la v1.9.3.',
          '**whisper.cpp v1.8.6 (2 de junio de 2026):** reimplementación de `ffmpeg-transcode` para una decodificación opcional con FFmpeg más clara de audio comprimido (MP3, M4A), además de una corrección de la ruta de ejemplos en CI.',
          '**whisper.cpp v1.8.5 (mayo de 2026):** mejoras en el VAD por streaming (detección de actividad de voz), correcciones de fugas de parámetros del servidor y de marcas de tiempo de tokens, y correcciones de fugas de memoria en los bindings de Ruby y VAD.',
          '**whisper.cpp v1.8.4 (19 de marzo de 2026):** última sincronización de `ggml` con amplias mejoras de rendimiento, un nuevo flag `-g` / `--gpu-device` (y selección de dispositivo `GGML_CUDA`) para elegir una GPU, y correcciones del ajuste de segmentos UTF-8.',
          '**El VAD nativo ya está integrado en whisper.cpp.** Las versiones recientes añadieron una ruta nativa de detección de actividad de voz, reduciendo una ventaja de larga data de faster-whisper — aunque la integración de Silero VAD de faster-whisper sigue siendo más lista para usar.',
          '**faster-whisper v1.2.1 (31 de octubre de 2025):** última versión etiquetada; `pip install faster-whisper` la instala. No hay versión etiquetada en 2026, pero la rama principal está activa: el último commit (2 de noviembre de 2026, comprobado el 3 de noviembre) corrige la CI, y los commits del 16 de octubre de 2026 añaden validaciones de entrada, como un error para idiomas que un modelo no admite. La v1.2.0 (agosto de 2025) añadió compatibilidad con distil-large-v3.5.',
          '**CTranslate2 v4.8.4 (25 de octubre de 2026):** el motor de inferencia bajo faster-whisper publicó otra versión. Añade protecciones contra el desbordamiento de enteros en el cálculo del tamaño de los tensores, correcciones para Conv1D en CPU y para el desbordamiento de la escala de cuantización INT8 en filas de pesos muy pequeñas, y una implementación experimental de texto a voz sin conexión (Drama 3). La versión anterior, v4.8.3 (13 de octubre de 2026), incorporó correcciones de ROCm en Windows, refuerzos en la carga del modelo y la corrección de una división por cero en Whisper `align()` cuando una ventana no tiene fotogramas. Después llegó la v4.8.5 el 2 de noviembre de 2026 (comprobado el 3 de noviembre de 2026), con correcciones de precisión de atención en CUDA y una guía de compilación para Windows ROCm/HIP.',
          '**Ningún modelo Whisper nuevo de clase superior en 2026.** Los pesos multilingües más recientes de OpenAI siguen siendo large-v3-turbo (octubre de 2024; 809M de parámetros, decoder reducido de 32 a 4 capas, licencia MIT), que cambia una pequeña pérdida de calidad por mucha más velocidad y funciona en ambas herramientas. distil-large-v3 sigue siendo la opción rápida solo para inglés. Hasta donde sabemos, las actualizaciones de ambos runtimes son cambios de runtime y herramientas, no de precisión.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — el port CTranslate2',
        content:
          '**faster-whisper (de SYSTRAN) es una librería Python que reimplementa la inferencia de Whisper usando CTranslate2 — un motor de inferencia C++ altamente optimizado con soporte de cuantización int8, reduciendo el uso de VRAM y aumentando el rendimiento.** En GPUs NVIDIA, faster-whisper figura entre las implementaciones locales de Whisper más rápidas en las pruebas publicadas.',
        items: [
          '**Soporte de plataformas:** CPU (cuantización int8) y GPU NVIDIA CUDA. Sin soporte para Apple Metal — funciona solo en CPU en Mac.',
          '**Ventaja int8:** la cuantización int8 de CTranslate2 redujo la VRAM en cerca de un tercio en la prueba del README (4525 MB en fp16 frente a 2926 MB en int8, large-v2) con una pequeña mejora de velocidad (1m03s frente a 59s); el impacto en el WER suele ser despreciable.',
          '**Instalación:** `pip install faster-whisper` — sin compilación necesaria (Python 3.9+). El uso de GPU requiere NVIDIA cuBLAS para CUDA 12 y cuDNN 9; las configuraciones antiguas con CUDA 11 / cuDNN 8 deben fijar un `ctranslate2` anterior (3.24.0).',
          '**VAD integrado:** faster-whisper incluye integración con Silero VAD, que omite automáticamente segmentos de audio silencioso — crítico para pipelines de transcripción en tiempo real.',
          '**Python nativo:** la API Python directa facilita la integración con LLMs, librerías de procesamiento de audio y frameworks web.',
          '**Velocidad:** en la prueba del README (large-v2, RTX 3070 Ti, archivo de 13 minutos), int8 tardó 59 s e int8 con lote de 8 solo 16 s; una prueba de terceros en una RTX 4070 Ti midió 23× tiempo real con large-v3.',
          '**Procesamiento por lotes:** faster-whisper admite inferencia en lotes para procesar grandes archivos de audio de forma eficiente.',
          '**Limitación:** sin soporte de Metal en Mac; funciona solo en CPU en Apple Silicon. No encontramos ningún benchmark publicado de faster-whisper frente a whisper.cpp en Apple Silicon.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'Obtén ggml-base.bin con pip (configuración Python)',
        content:
          '**Para usar ggml-base.bin desde Python con pip, instala el binding `pywhispercpp` — `pip install pywhispercpp` — y luego carga `Model("base")`, que descarga `ggml-base.bin` automáticamente en la primera ejecución.** No existe `pip install whisper.cpp`; pywhispercpp es el envoltorio pip del motor C/C++ de whisper.cpp y conserva la aceleración Metal y CUDA. El archivo del modelo GGML (`ggml-base.bin`, ~142 MB) se descarga por separado desde Hugging Face y se cachea localmente — el paquete pip incluye el motor de inferencia, no los pesos.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ejecuta `pip install pywhispercpp`, y luego `Model("base")` en Python obtiene y cachea ggml-base.bin automáticamente en el primer uso.',
          },
          {
            type: 'plain-terms',
            text: 'pip instala el programa (pywhispercpp); el archivo del modelo ggml-base.bin es una descarga aparte de ~142 MB que ocurre la primera vez que cargas el modelo «base» — o que obtienes a mano con el script download-ggml-model.sh.',
          },
        ],
        items: [
          '**Instala el binding:** `pip install pywhispercpp`. Para aceleración NVIDIA CUDA, compila con `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`.',
          '**Descarga automática de ggml-base.bin:** `from pywhispercpp.model import Model` y luego `model = Model("base")` descarga `ggml-base.bin` desde Hugging Face (`ggerganov/whisper.cpp`) en la primera ejecución y lo cachea. Usa `"base.en"` para la variante solo en inglés.',
          '**Descarga manual (vía CLI, sin pip):** desde un repo whisper.cpp clonado, `bash ./models/download-ggml-model.sh base` guarda el archivo en `models/ggml-base.bin` — el mismo archivo que obtiene pywhispercpp.',
          '**Descarga directa:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` obtiene el modelo sin script. Cambia `base` por `tiny`, `small`, `medium` o `large-v3`.',
          '**No confundas los paquetes:** `pip install openai-whisper` instala el Whisper PyTorch original de OpenAI (usa checkpoints `.pt`, no `ggml-base.bin`). `pip install faster-whisper` usa el formato CTranslate2. Solo `pywhispercpp` consume archivos GGML `ggml-*.bin`.',
          '**Dónde queda el archivo:** pywhispercpp almacena los modelos GGML descargados en su caché de módulo (o en una ruta que pases con `Model("base", models_dir="...")`), de modo que el mismo `ggml-base.bin` se reutiliza entre ejecuciones — sin volver a descargar.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Comparativa directa: tabla de benchmarks',
        content:
          'Cada fila indica su fuente y su hardware. La velocidad se expresa en múltiplos del tiempo real (10× significa que 60 minutos de audio se transcriben en 6 minutos). Las filas «terceros» provienen de la [comparativa de x2q.net](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti e Intel Core i5-13400F, large-v3, llamadas telefónicas en danés, junio de 2026); las filas «README» provienen del README de faster-whisper (RTX 3070 Ti, large-v2). El hardware y el audio difieren entre fuentes, así que lee las filas como indicios, no como un duelo directo en una sola máquina.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-es.webp',
          imageCaption: 'whisper.cpp y faster-whisper comparados por plataforma: Apple Silicon, GPU NVIDIA y CPU.',
          imageAlt: 'Póster «whisper.cpp vs faster-whisper por plataforma»: Apple Silicon con whisper.cpp (Metal), ambos usan CUDA en GPU NVIDIA y los resultados publicados en CPU no coinciden',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En una prueba de terceros en una RTX 4070 Ti, faster-whisper ejecutó large-v3 a 23× tiempo real frente a 15× de whisper.cpp CUDA; en Apple Silicon solo whisper.cpp puede usar Metal.',
          },
          {
            type: 'plain-terms',
            text: 'Elige whisper.cpp en Mac, donde puede usar Metal y Core ML, y faster-whisper en Windows/Linux con GPU NVIDIA, donde fue más rápido en las pruebas publicadas y usó menos VRAM con int8 (2926 MB frente a 4127 MB de whisper.cpp fp16 en la prueba del README).',
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
            'Métrica': 'Velocidad — RTX 4070 Ti, large-v3 (terceros)',
            'whisper.cpp (large-v3)': '~15× tiempo real',
            'faster-whisper (large-v3)': '~23× tiempo real ✓',
          },
          {
            'Métrica': 'Velocidad — Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (sin benchmark)',
            'faster-whisper (large-v3)': 'Solo CPU (sin benchmark)',
          },
          {
            'Métrica': 'Velocidad — CPU x86, large-v3 (terceros)',
            'whisper.cpp (large-v3)': '~15× tiempo real ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2× tiempo real (i5-13400F)',
          },
          {
            'Métrica': 'VRAM — large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'Métrica': 'Integración Python',
            'whisper.cpp (large-v3)': 'Requiere wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativo ✓',
          },
          {
            'Métrica': 'VAD (detección de silencio)',
            'whisper.cpp (large-v3)': 'Opcional (--vad + modelo Silero)',
            'faster-whisper (large-v3)': 'Integrado (Silero VAD) ✓',
          },
          {
            'Métrica': 'Streaming en tiempo real',
            'whisper.cpp (large-v3)': 'Sí (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Sí (pipeline VAD)',
          },
          {
            'Métrica': 'Precisión WER (large-v3)',
            'whisper.cpp (large-v3)': '2,5% (mismos pesos)',
            'faster-whisper (large-v3)': '2,5% (mismos pesos)',
          },
          {
            'Métrica': 'Dependencia Python',
            'whisper.cpp (large-v3)': 'Ninguna ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'Métrica': 'Raspberry Pi / embebido',
            'whisper.cpp (large-v3)': 'Sí — binario C ✓',
            'faster-whisper (large-v3)': 'Posible — requiere Python',
          },
          {
            'Métrica': 'Formatos de salida',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objetos Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp escribe la salida directamente en formatos estándar de subtítulos y transcripción (SRT, VTT, JSON, CSV, txt) — ideal para flujos de trabajo de subtitulado donde necesitas un archivo en disco sin código adicional. faster-whisper devuelve un generador Python de objetos de segmento con atributos `start`, `end` y `text` — ideal para encadenamiento de pipelines LLM, donde pasas el texto del segmento directamente a un modelo posterior sin escribir archivos intermedios. Para generación de subtítulos, whisper.cpp es más sencillo. Para pipelines que procesan segmentos programáticamente, faster-whisper es más sencillo.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'Benchmark de referencia: tiempos de GPU vs CPU de faster-whisper',
        content:
          '**El proyecto faster-whisper publica sus propios tiempos sobre un archivo de audio de 13 minutos: muestran que whisper.cpp con Flash Attention iguala a faster-whisper fp16 en GPU, mientras que el batching y el int8 son donde faster-whisper se adelanta.** Las cifras de abajo proceden del README de faster-whisper (large-v2 en una RTX 3070 Ti de 8 GB con CUDA 12.4 para las filas de GPU; el modelo small en un Intel Core i7-12700K con 8 hilos para las filas de CPU; beam size 5). No son mediciones propias y usan hardware y modelos distintos de las cifras de large-v3 de arriba.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En el benchmark del README de faster-whisper, whisper.cpp con Flash Attention (1m05s) y faster-whisper fp16 (1m03s) quedan casi empatados en GPU; faster-whisper int8 con batching termina el mismo archivo de 13 minutos en 16 segundos.',
          },
        ],
        columns: ['Configuración', 'Precisión', 'Tiempo', 'VRAM / RAM'],
        rows: [
          {
            'Configuración': 'GPU · OpenAI Whisper',
            'Precisión': 'fp16',
            'Tiempo': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'Configuración': 'GPU · whisper.cpp (Flash Attn)',
            'Precisión': 'fp16',
            'Tiempo': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'Configuración': 'GPU · faster-whisper',
            'Precisión': 'fp16',
            'Tiempo': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'Configuración': 'GPU · faster-whisper',
            'Precisión': 'int8',
            'Tiempo': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'Configuración': 'GPU · faster-whisper, batch 8',
            'Precisión': 'int8',
            'Tiempo': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'Configuración': 'CPU · OpenAI Whisper',
            'Precisión': 'fp32',
            'Tiempo': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'Configuración': 'CPU · whisper.cpp',
            'Precisión': 'fp32',
            'Tiempo': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'Configuración': 'CPU · faster-whisper',
            'Precisión': 'int8',
            'Tiempo': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'Configuración': 'CPU · faster-whisper, batch 8',
            'Precisión': 'int8',
            'Tiempo': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'Léelo junto a la tabla comparativa: con un solo flujo fp16, la velocidad en GPU de ambas herramientas es parecida en esta configuración. Las ventajas duraderas de faster-whisper son el ahorro de memoria de int8 (2,9 GB frente a 4,1–4,5 GB en fp16) y la inferencia por lotes (16 s frente a 59 s). En CPU, whisper.cpp fp32 y faster-whisper int8 están a un 25 % aproximadamente uno del otro sin batching. Las filas de OpenAI Whisper del README muestran la referencia: 2m23s en GPU (fp16, 4708 MB) y 6m58s en CPU (fp32, 2335 MB), frente a 59s y 1m42s de faster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuración de transcripción en tiempo real',
        content:
          '**La transcripción en tiempo real procesa el audio en chunks a medida que llega desde el micrófono, produciendo texto con un breve retraso respecto al habla.** Ambas herramientas lo admiten, pero con diferentes compromisos.',
        items: [
          '**Modo stream de whisper.cpp:** ejecuta `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Procesa chunks de 3 segundos; el retraso varía según el hardware y el modelo, y no lo hemos medido. Sin Python necesario.',
          '**Pipeline VAD de faster-whisper:** usa `vad_filter=True` en `model.transcribe()`. Silero VAD segmenta el audio automáticamente en los límites de silencio — chunks más naturales que ventanas de longitud fija.',
          '**Latencia:** varía según el hardware y el tamaño del modelo, y no la hemos medido. Los modelos pequeños como tiny suelen responder más rápido, pero con un WER mayor.',
          '**Selección de modelo para tiempo real:** small o base es el punto óptimo práctico — suficientemente rápido para seguir el habla, suficientemente preciso para audio limpio. Evita large-v3 en tiempo real salvo que tengas una GPU dedicada.',
          '**Entrada de micrófono:** whisper.cpp lee audio raw mediante SDL2 o portaudio. faster-whisper lee arrays de audio desde cualquier librería Python de audio (sounddevice, pyaudio, soundfile).',
          '**Estabilidad:** el modo stream de whisper.cpp puede producir tokens repetidos ("alucinaciones" de rellenos cortos) en silencio. Suprime con `--suppress-blank` y `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp es la opción natural',
        content:
          '**En Macs M1 a M5, whisper.cpp con aceleración Core ML / Metal es la herramienta natural, porque faster-whisper no tiene backend Metal y funciona solo en CPU en Mac.** El README de whisper.cpp indica que el encoder Core ML es más de 3× más rápido que la ejecución solo en CPU (dato de los desarrolladores). No encontramos ningún benchmark publicado de large-v3 en M5 Pro, así que esta guía no da un factor de tiempo real para chips Apple.',
        items: [
          '**Exportación a Core ML:** ejecuta `./models/generate-coreml-model.sh large-v3` para exportar el encoder al formato Core ML. Esto descarga la inferencia del encoder al Apple Neural Engine.',
          '**Benchmarks:** el proyecto whisper.cpp recopila mediciones en su [discusión de benchmarks](https://github.com/ggml-org/whisper.cpp/discussions/89) (tiempos del encoder; sin entradas M5 cuando lo comprobamos). No encontramos ningún benchmark publicado de large-v3 en M5 Pro, así que no damos un factor de tiempo real para chips Apple.',
          '**Mide tu propio Mac:** whisper.cpp incluye la herramienta `whisper-bench`, que mide el tiempo del encoder; o cronometra un archivo real de principio a fin. Los resultados varían según el chip, el tamaño del modelo y la cuantización.',
          '**Memoria:** la memoria unificada significa que no hay VRAM separada. El README de whisper.cpp indica unos 3,9 GB de memoria para el modelo large, lo que deja margen en un Mac de 16 GB para otros procesos.',
          '**faster-whisper en Mac:** solo CPU (int8). Sirve para transcripción por lotes, pero no tiene vía Metal y no encontramos ningún benchmark frente a whisper.cpp en Apple Silicon.',
          '**Recomendación:** usa whisper.cpp para la mayoría del trabajo de STT en Mac. Añade pywhispercpp si necesitas integración con Python manteniendo la aceleración Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA: faster-whisper lidera en pruebas publicadas',
        content:
          '**En Windows y Linux con GPUs NVIDIA, faster-whisper fue la herramienta más rápida en las pruebas publicadas que encontramos.** En una prueba de terceros en una RTX 4070 Ti (large-v3, junio de 2026) funcionó a 23× tiempo real frente a 15× de whisper.cpp CUDA; en la prueba del README de faster-whisper (large-v2, RTX 3070 Ti) ambos quedaron casi empatados en modo de flujo único (1m03s frente a 1m05s), y con int8 y procesamiento por lotes faster-whisper se despegó.',
        items: [
          '**RTX 4070 Ti (12 GB), large-v3, prueba de terceros:** faster-whisper 23× tiempo real (large-v3-turbo: 56×); whisper.cpp CUDA 15× (large-v3-turbo: 40×).',
          '**RTX 3070 Ti (8 GB), large-v2, README de faster-whisper:** un archivo de 13 minutos tardó 1m03s en fp16, 59s en int8 (2926 MB de VRAM) y 16s en int8 con lote de 8.',
          '**Otras tarjetas (RTX 3060, RTX 4060):** no encontramos ningún benchmark publicado de large-v3 para ellas y no damos cifra de velocidad; la VRAM en int8 de arriba es la comprobación principal.',
          '**int8 frente a float16:** en la prueba del README, int8 usó cerca de un tercio menos de VRAM (2926 MB frente a 4525 MB) y terminó algo antes (59s frente a 1m03s), con una pérdida de precisión normalmente despreciable. `compute_type="int8"` es un valor por defecto razonable en NVIDIA.',
          '**Procesamiento por lotes:** el parámetro `batched=True` de faster-whisper permite el procesamiento paralelo de múltiples archivos de audio, maximizando la utilización GPU en trabajos grandes de transcripción.',
          '**Integración en pipeline Python:** faster-whisper se integra directamente en LangChain, Haystack y pipelines Python personalizados. Sin overhead de subproceso comparado con envolver whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'GPU NVIDIA antiguas (GTX 970): int8 retrocede a float32',
        content:
          '**En una GTX 970 (Maxwell, compute capability 5.2), faster-whisper sigue funcionando en CUDA, pero `compute_type="int8"` no da int8 real: CTranslate2 convierte los pesos a float32.** Su tabla de cuantización asigna float32 a toda GPU con compute capability 6.0 o inferior para cualquier tipo solicitado, así que el ahorro de VRAM y la aceleración int8 citados para las tarjetas RTX no se aplican.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En una GTX 970 (compute capability 5.2), faster-whisper funciona en CUDA solo en float32: un tipo de cómputo int8 solicitado se convierte automáticamente.',
          },
          {
            type: 'plain-terms',
            text: 'La GTX 970 es demasiado antigua para int8 en GPU. Funciona, pero sin ahorro de memoria, así que quédate con los modelos tiny, base o small en sus 4 GB.',
          },
        ],
        items: [
          '**Lo que sigue funcionando:** los binarios precompilados de CTranslate2 admiten GPU NVIDIA con compute capability 3.5 o superior, por lo que una GTX 970 (5.2) puede ejecutar faster-whisper en CUDA, siempre que tus bibliotecas CUDA y cuDNN instaladas coincidan con la versión (ver Problemas comunes).',
          '**Dónde funciona int8 en GPU:** int8 necesita compute capability 7.0 o superior (Volta y serie RTX 20 en adelante) o exactamente 6.1 (GTX 1050 a 1080 Ti, int8_float32). Las compute capability 6.0, 6.2 e inferiores retroceden a float32; float16 necesita 7.0 o superior.',
          '**Consecuencia en memoria:** float32 usa 4 bytes por parámetro frente a 1 byte de int8; por número de parámetros, large-v3 (1,55B) necesita unos 6 GB solo para los pesos, más que los 4 GB de la GTX 970. Small (244M, ~1 GB en float32) cabe sin problemas; medium (769M, ~3 GB) está al límite.',
          '**Velocidad:** no hemos medido una GTX 970, así que aquí no hay cifra medida. Espera un rendimiento float32 muy inferior a las cifras RTX 4070 Ti de esta guía y prueba tiny, base y small con tu propio audio.',
          '**Comprueba qué admite tu GPU:** `ctranslate2.get_supported_compute_types("cuda")` lista los tipos de cómputo que CTranslate2 acepta en tu tarjeta.',
          '**Alternativas:** int8 en CPU (`device="cpu", compute_type="int8"`) funciona en cualquier CPU x86 moderna, y los modelos GGML cuantizados de whisper.cpp (por ejemplo `ggml-large-v3-q5_0.bin`, unos 3–4 GB) son la forma habitual de encajar modelos mayores en 4 GB; verifica la compilación CUDA o Vulkan en tu tarjeta.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper en Raspberry Pi 5: tiny, base y small',
        content:
          '**En una Raspberry Pi 5, whisper.cpp ejecuta los modelos tiny y base en tiempo real para transcripción en vivo, mientras que el modelo small funciona por debajo del tiempo real y conviene reservarlo para trabajos por lotes.** El Cortex-A76 de cuatro núcleos del Pi 5 no tiene una ruta GPU utilizable para Whisper, así que toda la inferencia es en CPU (ARM NEON). Usa los modelos GGML cuantizados (`ggml-*-q5_0.bin`) para reducir el uso de memoria y acelerar la inferencia.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En una Raspberry Pi 5, el modelo small de whisper.cpp funciona más lento que el tiempo real según informes de la comunidad (uso por lotes; no lo hemos medido nosotros); tiny y base son los modelos que, según esos informes, siguen el ritmo del habla en vivo.',
          },
          {
            type: 'plain-terms',
            text: 'Una Pi 5 puede transcribir audio en vivo con los modelos Whisper tiny y base, pero el modelo small es demasiado pesado para seguir el ritmo en tiempo real — usa small para archivos grabados que proceses en segundo plano, no para un micrófono en vivo.',
          },
        ],
        items: [
          '**Whisper small en Pi 5:** según informes, más lento que el tiempo real en CPU (no lo hemos medido; cualquier tiempo es orientativo). Preciso con 3,4% WER (paper de Whisper, LibriSpeech test-clean) pero demasiado lento para subtitulado en vivo — úsalo para transcripción nocturna/por lotes.',
          '**Whisper base en Pi 5:** según informes, en torno al tiempo real con multihilo (`-t 4`); el resultado varía según la compilación, la refrigeración y el audio. El punto óptimo práctico para transcripción en vivo en el Pi, con un WER aceptable de 5,0%.',
          '**Whisper tiny en Pi 5:** la opción más rápida, que según informes suele servir para uso en vivo, a costa de un WER más alto de 7,6%. Ideal para reconocimiento de palabra de activación y comandos cortos.',
          '**Usa modelos cuantizados:** `bash ./models/download-ggml-model.sh small-q5_0` recorta la RAM y acelera la inferencia con una pérdida de precisión mínima — importante en la memoria compartida del Pi 5.',
          '**faster-whisper en Pi 5:** instalable (`pip install faster-whisper`, CPU int8) y competitivo para trabajos por lotes, pero el binario C más ligero de whisper.cpp es la opción embebida más común.',
          '**Térmica:** la transcripción sostenida exige mucho a la CPU del Pi 5 — usa refrigeración activa para evitar el throttling térmico que degrada estas cifras.',
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
            text: 'Si tienes un Mac, elige whisper.cpp: usa Metal y Core ML, que faster-whisper no admite. Si tienes una GPU NVIDIA y programas en Python, elige faster-whisper: fue más rápido en las pruebas publicadas y usó menos memoria de GPU con int8.',
          },
        ],
        columns: ['Escenario', 'Mejor opción', 'Por qué'],
        rows: [
          {
            'Escenario': 'Mac con Apple Silicon (cualquier modelo)',
            'Mejor opción': 'whisper.cpp',
            'Por qué': 'Aceleración Metal / Core ML; faster-whisper no tiene backend Metal',
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
            'Mejor opción': 'Probar ambos',
            'Por qué': 'Pruebas CPU del README y de terceros difieren; mide',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** un wrapper de pipeline Hugging Face Transformers que añade soporte de Flash Attention 2 para inferencia GPU por lotes rápida en hardware NVIDIA; su README informa de grandes aceleraciones (dato de los desarrolladores, no comparado por nosotros con faster-whisper). Mejor para: procesamiento por lotes de grandes archivos de audio en GPUs NVIDIA. Requiere una GPU compatible con Flash Attention 2 (Ampere o más reciente: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problemas comunes y soluciones',
        content: 'Los problemas de configuración y runtime más frecuentes, con soluciones directas:',
        items: [
          '**Incompatibilidad de versión CUDA:** las versiones actuales de faster-whisper requieren cuBLAS para CUDA 12 y cuDNN 9. Si estás atascado con bibliotecas antiguas, fija ctranslate2: `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 con cuDNN 8) o `3.24.0` (CUDA 11 con cuDNN 8). Verifica la versión de CUDA con `nvcc --version`.',
          '**Falla la exportación del modelo Metal:** asegúrate de tener instaladas las Xcode Command Line Tools — ejecuta `xcode-select --install`. El script de exportación Core ML requiere el paquete Python `coremltools`: `pip install coremltools`.',
          '**Alucinaciones en el silencio:** ambas herramientas pueden producir tokens de relleno repetidos en segmentos de audio silencioso. Usa `--no-speech-threshold 0.6` en el modo stream de whisper.cpp, o `vad_filter=True` en `model.transcribe()` de faster-whisper para omitir automáticamente los segmentos silenciosos.',
          '**Memoria insuficiente con large-v3:** cambia a cuantización int8 en faster-whisper (`compute_type="int8"`): en la prueba del README (large-v2) redujo la VRAM de unos 4,5 GB (float16) a unos 2,9 GB. En whisper.cpp, usa la variante GGML cuantizada (p. ej., `ggml-large-v3-q5_0.bin`), que reduce la memoria a ~3–4 GB.',
          '**Salida ilegible en audio no inglés:** no uses variantes `.en` del modelo (tiny.en, base.en) para habla no inglesa — son solo inglés. Usa los modelos multilingües (base, small, medium, large-v3) y especifica el idioma explícitamente: `-l es` en whisper.cpp o `language="es"` en faster-whisper.',
          '**Inferencia CPU lenta:** verifica que tu CPU admita instrucciones AVX2 (necesarias para inferencia CPU optimizada). Comprueba con `grep avx2 /proc/cpuinfo` en Linux o `sysctl machdep.cpu.features` en Mac. Las CPUs sin AVX2 recurren a SIMD genérico y serán 2–3× más lentas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Existe un paquete Debian o apt para whisper.cpp?',
            a: 'Sí — whisper.cpp ahora tiene un paquete oficial de Debian (actualmente en sid), que proporciona el binario `whisper.cpp` además de `libwhisper-dev` y `libwhisper1` para enlazarlo como biblioteca compartida. Todavía no ha llegado a las versiones estables de Debian ni a los repositorios predeterminados de Ubuntu, así que en la mayoría de sistemas hay que usar sid o compilar desde el código fuente. También existe un Snap no oficial (`sudo snap install whisper-cpp`) para Debian 9+ y Ubuntu.',
          },
          {
            q: '¿Cómo compruebo qué versión de whisper.cpp tengo instalada?',
            a: 'Ejecuta el binario compilado sin argumentos o con `--help` — la versión aparece en la línea de cabecera. También puedes comprobar el commit exacto con `git describe --tags` dentro del repositorio clonado, o comparar tu fecha de compilación con las notas de versión en github.com/ggml-org/whisper.cpp/releases para ver si estás por detrás de la v1.9.5 actual.',
          },
          {
            q: '¿La precisión de transcripción es la misma entre whisper.cpp y faster-whisper?',
            a: 'En gran medida. Ambas herramientas usan los mismos pesos del modelo OpenAI Whisper, así que la precisión debería ser muy parecida; la diferencia está sobre todo en el runtime de inferencia (C/C++ vs CTranslate2 Python). Aun así, la cuantización (por ejemplo int8), los ajustes de decodificación y la precisión numérica pueden causar pequeñas diferencias en la salida. No hemos medido ninguna diferencia de WER entre ambos runtimes, así que prueba con tu propio audio.',
          },
          {
            q: '¿Puedo usar faster-whisper en un Mac con Apple Silicon?',
            a: 'Sí, pero solo en CPU: faster-whisper no tiene soporte de Metal. whisper.cpp puede usar Metal y Core ML, y su README indica que el encoder Core ML es más de 3× más rápido que la ejecución solo en CPU. No encontramos ningún benchmark publicado de faster-whisper frente a whisper.cpp en Apple Silicon, así que mide con tu propio audio. La razón principal para usar faster-whisper en Mac es tener ya un pipeline de Python que dependa de él.',
          },
          {
            q: '¿Qué tamaño de modelo Whisper debo usar para un asistente de voz?',
            a: 'Para interfaces de voz en tiempo real, Whisper small es la recomendación estándar — aproximadamente 3,4% WER en inglés limpio (paper de Whisper, LibriSpeech test-clean), baja latencia en una CPU o GPU moderna (varía según el hardware; no la hemos medido) y cabe en unos 2 GB de RAM. Usa tiny si estás en hardware muy restringido (Raspberry Pi Zero 2W, teléfonos antiguos) y puedes tolerar ~7,6% WER. Usa medium o large-v3 solo para transcripción por lotes donde la latencia no es una restricción.',
          },
          {
            q: '¿whisper.cpp admite idiomas distintos al inglés?',
            a: 'Sí. Todos los modelos multilingües de Whisper (base, small, medium, large-v3) admiten 99 idiomas. Añade `-l [código de idioma]` al CLI: `-l es` para español, `-l de` para alemán, `-l ja` para japonés, etc. Los modelos tiny.en y base.en son solo inglés y ligeramente más precisos para inglés que sus equivalentes multilingües.',
          },
          {
            q: '¿Cómo instalo faster-whisper con soporte CUDA?',
            a: 'Instala con `pip install faster-whisper`. Las versiones actuales requieren NVIDIA cuBLAS para CUDA 12 y cuDNN 9 en tu sistema (en Linux, `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"` los proporciona). En configuraciones antiguas con CUDA 11 / cuDNN 8, fija `ctranslate2==3.24.0` (o `4.4.0` para CUDA 12 con cuDNN 8). Luego especifica `device="cuda"` al cargar el modelo: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Usa `device="auto"` si quieres que recurra a la CPU cuando CUDA no esté disponible.',
          },
          {
            q: '¿Cuál es más preciso — whisper.cpp o faster-whisper?',
            a: 'Muy parecida, aunque no garantizada idéntica. Ambas herramientas usan los mismos pesos del modelo OpenAI Whisper, así que la precisión debería ser muy parecida con el mismo audio. La diferencia principal entre whisper.cpp y faster-whisper es la velocidad y el soporte de plataforma. La cuantización (int8, q5_0), el tamaño de beam y otros ajustes de decodificación pueden cambiar ligeramente la transcripción; no lo hemos medido, así que compara ambas con una muestra de tu propio audio.',
          },
          {
            q: '¿Puedo ejecutar Whisper large-v3 con 8 GB de RAM?',
            a: 'Sí en GPU: large-v3 en int8 con faster-whisper debería caber en una GPU de 8 GB (el README de faster-whisper midió 2926 MB de VRAM para large-v2 en int8). En hardware solo CPU, 8 GB de RAM son justos para large-v3 (float32 necesita unos 10 GB). Usa medium (5 GB de RAM) o small (2 GB de RAM) en sistemas solo CPU. En la prueba del README, whisper.cpp usó menos RAM en CPU que faster-whisper (1049 MB frente a 1477 MB en int8).',
          },
          {
            q: '¿Cuánto cuesta Whisper local vs STT en la nube?',
            a: 'Sin costos de licencia ni tarifas por minuto. Los servicios STT en la nube suelen cobrar $0,006–$0,024 por minuto de audio (consulta los precios actuales); para un desarrollador que transcribe 8 horas de reuniones por semana, eso son aproximadamente $12–50/mes. Whisper local funciona en hardware que ya posees, sin tarifas por minuto y sin gestión de API keys, y no hace falta enviar el audio a un servicio cloud (electricidad y tiempo de configuración aparte).',
          },
          {
            q: '¿Funciona faster-whisper int8 en una GTX 970?',
            a: 'No, no como int8 real. La GTX 970 tiene compute capability 5.2, y CTranslate2 solo ejecuta int8 en GPU con compute capability 7.0 o superior (o exactamente 6.1); en tarjetas más antiguas convierte los pesos a float32 automáticamente. faster-whisper sigue funcionando en la GPU en float32, así que usa tiny, base o small para quedarte dentro de 4 GB, o int8 en CPU, que funciona en cualquier CPU x86 moderna. No hemos medido una GTX 970, así que aquí no hay cifra de velocidad medida.',
          },
          {
            q: '¿Cuánto pesan los archivos de modelo de Whisper para whisper.cpp y faster-whisper?',
            a: 'El README de whisper.cpp indica archivos de modelo GGML de unos 75 MiB (tiny), 142 MiB (base), 466 MiB (small), 1,5 GiB (medium) y 2,9 GiB (large) en disco, que necesitan unos 273 MB, 388 MB, 852 MB, 2,1 GB y 3,9 GB de memoria. faster-whisper descarga los modelos CTranslate2 de Hugging Face en el primer uso; large-v3 pesa ahí unos 3 GB (1,55B de parámetros a 2 bytes en float16). La tabla de tamaños de modelo de arriba indica los parámetros de cada tamaño.',
          },
          {
            q: '¿Es Whisper large-v3-turbo mejor que large-v3 para transcripción local?',
            a: 'Es más rápido, no más preciso. large-v3-turbo tiene 809M de parámetros porque OpenAI redujo el decoder de 32 a 4 capas, y su ficha de modelo lo describe como mucho más rápido que large-v3 a costa de una ligera degradación de calidad, con licencia MIT. La ficha también advierte de que puede alucinar o repetir texto y de que la precisión varía según el idioma: conserva large-v3 para el audio más difícil y usa turbo (o distil-large-v3 para inglés) cuando importe la velocidad. whisper.cpp y faster-whisper pueden ejecutarlo.',
          },
          {
            q: '¿Puede whisper.cpp usar una GPU AMD o Intel en lugar de CUDA?',
            a: 'Sí. El backend Vulkan de whisper.cpp (`-DGGML_VULKAN=1`) funciona entre fabricantes siempre que tu controlador admita la API Vulkan, ROCm/HIP (`-DGGML_HIP=1`) apunta a GPU AMD y OpenVINO acelera el encoder en CPU y GPU Intel. La documentación de faster-whisper solo cubre NVIDIA CUDA; las notas de versión de CTranslate2 mencionan wheels de ROCm, pero no hemos probado esa vía.',
          },
          {
            q: '¿Es mlx-whisper más rápido que whisper.cpp en un Mac?',
            a: 'Una prueba independiente dice que sí para large-v3-turbo: la repetición de Bill Mill en enero de 2026 midió unos 13,1 segundos para mlx_whisper frente a 26,7 segundos para whisper.cpp en la misma grabación larga, aproximadamente 2× más rápido. Una prueba de velocidad de la comunidad con un clip corto dejó a ambos cerca, con whisper.cpp usando Core ML y cuantización q5_0. Las cifras del M5 Pro de esta guía no se compararon con MLX, así que prueba tu propio audio antes de elegir.',
          },
          {
            q: '¿Es faster-whisper más rápido que OpenAI Whisper?',
            a: 'Sí. Según el README de faster-whisper, su reimplementación con CTranslate2 es hasta 4 veces más rápida que el paquete original openai/whisper con la misma precisión y usa menos memoria; la cuantización de 8 bits mejora aún más la eficiencia en CPU y GPU. En la prueba de 13 minutos del README, openai/whisper tardó 2m23s en una RTX 3070 Ti (large-v2, fp16) frente a 1m03s de faster-whisper fp16 y 59s en int8, y 6m58s en una CPU Intel Core i7-12700K (modelo small, fp32) frente a 1m42s de faster-whisper int8. Ambos usan los mismos pesos de Whisper, así que la precisión debería ser prácticamente la misma; whisper.cpp, el tercer motor, terminó la prueba en GPU en 1m05s con Flash Attention.',
          },
          {
            q: '¿Whisper es más rápido en GPU que en CPU?',
            a: 'Para modelos grandes, sí; para los pequeños, una CPU suele bastar. En el README de faster-whisper, large-v2 en una RTX 3070 Ti tardó 59 s en int8 con un archivo de 13 minutos, mientras que el modelo small en una CPU Intel Core i7-12700K tardó 1m42s en int8: otro modelo y otro hardware, así que compara solo órdenes de magnitud. Una prueba de terceros de large-v3 en una CPU Intel Core i5-13400F midió whisper.cpp a 15× y faster-whisper a 2× tiempo real. Según informes de la comunidad, en una Raspberry Pi 5 tiny y base siguen el ritmo del habla en directo; no lo hemos medido.',
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
          '[insanely-fast-whisper en GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 para inferencia por lotes en GPU NVIDIA (benchmarks del README, datos de los desarrolladores).',
          '[OpenAI Whisper en GitHub](https://github.com/openai/whisper) — Modelo Whisper original, paper, fichas de modelo y la tabla de velocidad relativa (A100) para todos los tamaños.',
          '[x2q.net: comparativa de backends de Whisper](https://www.x2q.net/post/whisper-backend-shootout/) — Benchmark de terceros de junio de 2026 (RTX 4070 Ti e Intel Core i5-13400F, large-v3, llamadas telefónicas en danés) detrás de los factores de tiempo real de faster-whisper y whisper.cpp.',
          '[Discusión de benchmarks de whisper.cpp](https://github.com/ggml-org/whisper.cpp/discussions/89) — Tiempos de encoder aportados por la comunidad para Apple Silicon y otros chips.',
          '[Paper de OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". Fuente de los valores WER.',
          '[Documentación de CTranslate2](https://github.com/OpenNMT/CTranslate2) — Detalles de cuantización, soporte de hardware y fundamentos de optimización int8.',
          '[Documentación de cuantización de CTranslate2](https://opennmt.net/CTranslate2/quantization.html) — Tipos de cómputo que admite cada compute capability de GPU (base de la sección sobre la GTX 970).',
          '[Benchmarks del README de faster-whisper](https://github.com/SYSTRAN/faster-whisper#benchmark) — Tiempos de GPU y CPU sobre 13 minutos usados en el benchmark de referencia, y los requisitos actuales de CUDA 12 / cuDNN 9.',
          '[openai/whisper-large-v3-turbo en Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — Ficha del modelo: 809M de parámetros, 4 capas de decoder, licencia MIT.',
          '[Bill Mill: benchmark actualizado de mlx_whisper vs. whisper.cpp](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Comparación independiente de tiempos de large-v3-turbo en Apple Silicon.',
          '[Versiones de whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — Notas de versión de v1.9.4 y v1.9.5.',
          '[Versiones de CTranslate2](https://github.com/OpenNMT/CTranslate2/releases) — Notas de versión de v4.8.3, v4.8.4 y v4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[TTS local y clonación de voz 2026: Piper vs Coqui vs XTTS v2](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — El complemento TTS: convierte el texto transcrito de nuevo en voz, offline.',
          '[Construye un asistente de voz completamente offline en 2026](/es/power-local-llm/build-local-voice-assistant-2026) — Conecta Whisper STT a un LLM local y Piper TTS en un pipeline de voz completo.',
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Añade modelos de visión junto a STT y TTS para un stack local multimodal completo.',
          '[Guía de hardware para LLM local](/es/local-llms/local-llm-hardware-guide) — Requisitos de GPU y RAM para el pipeline completo de voz + LLM.',
          '[Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) — Versión móvil: WhisperKit en iPhone, Layla en Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Whisper.cpp vs faster-whisper 2026: Benchmarks STT local, configuración y aceleración GPU',
       description: 'Compara whisper.cpp y faster-whisper para reconocimiento de voz local en 2026. Benchmarks WER, velocidad GPU vs CPU, Apple Silicon Metal, transcripción en tiempo real y guías de instalación. Funciona sin conexión.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-whisper-stt-comparison',
       inLanguage: 'es',
       datePublished: '2026-05-14',
       dateModified: '2026-11-02',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
},

  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: Benchmarks de STT local, configuração e aceleração de GPU',
    seoTitle: 'whisper.cpp vs faster-whisper vs Whisper 2026: CPU/GPU',
    intro:
      'whisper.cpp e faster-whisper são as duas implementações dominantes do modelo Whisper de fala em texto da OpenAI para transcrição local e offline em 2026. whisper.cpp é um port puro em C/C++ que roda em Apple Metal, CUDA, Vulkan e CPU — o que o torna ideal para Apple Silicon, sistemas embarcados e aplicações de voz em tempo real. faster-whisper é uma biblioteca Python que usa CTranslate2 e, segundo o README dela, é até 4× mais rápida que o Whisper original com a mesma precisão. Este guia cobre instalação, benchmarks de desempenho, configuração de transcrição em tempo real e uma comparação direta entre plataformas para que você escolha a ferramenta certa para seu pipeline.',
    metaDescription:
      'faster-whisper é até 4x mais rápido que o OpenAI Whisper; whisper.cpp traz o Apple Metal. Tempos de CPU vs GPU, VRAM e WER de benchmarks publicados.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-pt.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Use whisper.cpp no Apple Silicon e em dispositivos embarcados, e faster-whisper em GPUs NVIDIA e pipelines Python: os dois executam os mesmos pesos do OpenAI Whisper, então a precisão é praticamente a mesma e mudam principalmente a velocidade e a integração.**',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar whisper.cpp ou faster-whisper para reconhecimento de voz local em 2026?',
        answer:
          'A escolha depende do seu hardware e das suas necessidades de integração. No Apple Silicon, whisper.cpp com Metal e Core ML é a escolha natural, porque o faster-whisper não tem backend Metal. Em GPUs NVIDIA, o faster-whisper foi mais rápido nos testes publicados que encontramos (23× contra 15× o tempo real com large-v3 em uma RTX 4070 Ti, teste de terceiros) e é mais fácil de integrar a pipelines Python. Em hardware só com CPU, os resultados publicados divergem: meça com o seu próprio áudio.',
        bullets: [
          'Apple Silicon → whisper.cpp com Core ML / Metal; o faster-whisper não tem backend Metal.',
          'GPU NVIDIA → faster-whisper. Teste de terceiros em RTX 4070 Ti, large-v3: 23× o tempo real contra 15× do whisper.cpp CUDA.',
          'Pipeline Python → faster-whisper. Python nativo, configuração em 5 linhas, VAD incluído.',
          'Embarcado / Raspberry Pi 5 → whisper.cpp. Binário C puro, sem runtime Python; tiny/base rodam em tempo real, small apenas em lote.',
          'Voz em tempo real → modo stream do whisper.cpp ou pipeline VAD do faster-whisper.',
          'Transcrição em lote → faster-whisper. Melhor throughput em GPU; batching assíncrono simples.',
          'Precisão WER: esperada muito próxima — usam os mesmos pesos do modelo Whisper (a quantização e as configurações de decodificação podem causar pequenas diferenças).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Por que reconhecimento de voz local?', anchor: '#why-local-stt' },
      { label: 'Tamanhos do modelo Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: a alternativa mais rápida', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — o port C/C++', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp: versão mais recente e novidades', anchor: '#whats-new' },
      { label: 'faster-whisper — o port CTranslate2', anchor: '#faster-whisper' },
      { label: 'Obtenha ggml-base.bin via pip (configuração Python)', anchor: '#install-ggml-pip' },
      { label: 'Comparação direta: tabela de benchmarks', anchor: '#benchmarks' },
      { label: 'Benchmark de referência: tempos de GPU vs CPU', anchor: '#reference-benchmark' },
      { label: 'Configuração de transcrição em tempo real', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp é a escolha natural', anchor: '#apple-silicon' },
      { label: 'GPU NVIDIA: faster-whisper à frente em testes publicados', anchor: '#nvidia-gpu' },
      { label: 'GPUs NVIDIA antigas (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper no Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp é a escolha natural de STT local para Apple Silicon.** O port em C/C++ usa Core ML e Apple Metal para aceleração por hardware; o README informa que o encoder Core ML é mais de 3× mais rápido que a execução só em CPU (informado pelos desenvolvedores), e não precisa de Python.',
          '**faster-whisper foi mais rápido em GPUs NVIDIA nos testes publicados que encontramos e combina com pipelines Python.** No teste do README, o int8 reduziu a VRAM de 4708 MB (OpenAI Whisper fp16) para 2926 MB (large-v2, RTX 3070 Ti, informado pelos desenvolvedores); um teste de terceiros em uma RTX 4070 Ti mediu 23× o tempo real contra 15× do whisper.cpp CUDA (large-v3).',
          '**Ambas as ferramentas usam os mesmos pesos do modelo Whisper da OpenAI.** Por isso a precisão deve ser muito próxima: as diferenças estão principalmente no desempenho do runtime e no caminho de integração; ainda assim, a quantização e as configurações de decodificação podem causar pequenas diferenças de WER, que não medimos.',
          '**Whisper large-v3 oferece a melhor precisão, com 2,5% de WER em inglês.** Para a maioria dos casos de produção, Whisper small (3,4% WER, 2 GB RAM) ou medium (2,9% WER, 5 GB RAM) oferece um melhor equilíbrio entre velocidade e precisão.',
          '**A transcrição em tempo real é alcançável com ambas as ferramentas** — whisper.cpp por meio da flag `--stream`, faster-whisper por meio de seu pipeline VAD (detecção de atividade de voz) integrado. O atraso do texto em relação à fala ao vivo varia conforme o hardware e o tamanho do modelo; nós não o medimos.',
          '**whisper.cpp roda em CPU, Metal, CUDA e Vulkan** — sendo a opção mais prática para uso embarcado multiplataforma (Raspberry Pi, configurações de GPU no Windows, servidores ARM). faster-whisper só suporta CPU e CUDA (sem Metal no Mac).',
          '**Para Raspberry Pi 5 e Linux embarcado, whisper.cpp tiny e base em CPU** são os modelos capazes de tempo real — tiny roda confortavelmente mais rápido que o tempo real, base em torno do tempo real com `-t 4`. O modelo small (3,4% WER) roda abaixo do tempo real no Pi 5 e é melhor reservá-lo para trabalhos em lote. Toda a inferência é em CPU (ARM NEON) — o Pi não tem um caminho de GPU utilizável para o Whisper. Essas indicações para o Pi 5 vêm de relatos da comunidade, não de medições próprias.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Ambas as ferramentas:** baseadas no modelo Whisper de código aberto da OpenAI (licença MIT). Mesmos pesos do modelo, portanto precisão semelhante — runtimes diferentes.',
          '**whisper.cpp:** escrito em C/C++ por Georgi Gerganov. Suporta CPU (AVX2/NEON), CUDA, Metal (Apple), Vulkan. Não requer Python.',
          '**faster-whisper:** biblioteca Python usando CTranslate2. Suporta CPU (int8) e CUDA. Sem suporte a Apple Metal.',
          '**Tamanhos do modelo Whisper:** tiny (39M), base (74M), small (244M), medium (769M), large-v3 (1,55B). Todos no formato ggml / CTranslate2.',
          '**Melhor modelo para a maioria dos casos:** Whisper small — 3,4% WER e cerca de 2 GB de memória; passe para medium ou large-v3 quando a precisão importar mais que a velocidade.',
          '**GPU NVIDIA (large-v3, teste de terceiros, RTX 4070 Ti):** faster-whisper 23× o tempo real; whisper.cpp CUDA 15× o tempo real.',
          '**Apple Silicon:** whisper.cpp roda com Metal e Core ML (README: encoder Core ML mais de 3× mais rápido que só CPU); o faster-whisper não tem backend Metal. Não encontramos nenhum benchmark publicado de large-v3 no M5 Pro.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'Por que reconhecimento de voz local?',
        content:
          'Os serviços de STT na nuvem (Google Speech-to-Text, AWS Transcribe, Azure Speech) cobram por minuto de áudio — normalmente US$ 0,006–0,024/minuto — e enviam seu áudio para servidores remotos. Para aplicações sensíveis à privacidade (ditado médico, gravações jurídicas, entrevistas jornalísticas, reuniões corporativas), a transcrição local evita enviar o áudio a um serviço de terceiros.',
        items: [
          '**Privacidade:** ambas as ferramentas podem rodar localmente sem enviar o áudio a um serviço de nuvem, então nenhum provedor de nuvem precisa participar da transcrição. As obrigações de proteção de dados, como base legal e armazenamento seguro, continuam sendo suas.',
          '**Custo:** sem tarifas por minuto. Com os preços de tabela comuns de STT na nuvem (US$ 0,006–0,024/minuto; confira os preços atuais), um desenvolvedor que transcreve 8 horas de reuniões por semana pagaria cerca de US$ 12–50/mês, gasto que a transcrição local evita (hardware e energia à parte).',
          '**Offline:** funciona em aviões, em instalações seguras e em áreas sem internet confiável. Sem gerenciamento de chaves de API.',
          '**Latência:** sem ida e volta de upload/download. Para interfaces de voz em tempo real, o processamento local pode reduzir a latência de STT em comparação com uma ida e volta à nuvem; o ganho depende da sua rede e do seu hardware.',
          '**Personalização:** ajuste fino com vocabulário específico do domínio. Rode qualquer tamanho de modelo que caiba no seu hardware.',
          '**Integração com Home Assistant:** O Whisper pode rodar localmente sem enviar áudio a um serviço de nuvem, de modo que palavras de ativação e comandos de voz podem ficar na sua rede doméstica. Veja [Whisper local no Home Assistant →](/pt/smart-home/local-whisper-home-assistant) para a configuração do complemento que substitui completamente o STT na nuvem.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Tamanhos do modelo Whisper — base de ambas as ferramentas',
        content:
          'Tanto whisper.cpp quanto faster-whisper usam os mesmos pesos do modelo Whisper, convertidos para seus respectivos formatos (GGML para whisper.cpp, CTranslate2 para faster-whisper). Escolha o tamanho do modelo conforme seu orçamento de VRAM/RAM e seus requisitos de precisão.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-pt.webp',
          imageCaption: 'Tamanhos de modelo Whisper compartilhados por whisper.cpp e faster-whisper, de tiny a large-v3.',
          imageAlt: 'Pôster «Tamanhos de modelo Whisper: velocidade vs precisão»: tiny é cerca de 10 vezes mais rápido que large, large-v3 é o mais lento e o mais preciso, velocidades do README da OpenAI em uma A100',
        columns: ['Modelo', 'Parâmetros', 'VRAM / RAM', 'WER inglês', 'Velocidade relativa (vs large)'],
        rows: [
          {
            'Modelo': 'tiny',
            'Parâmetros': '39M',
            'VRAM / RAM': '~1 GB',
            'WER inglês': '7,6%',
            'Velocidade relativa (vs large)': '~10×',
          },
          {
            'Modelo': 'base',
            'Parâmetros': '74M',
            'VRAM / RAM': '~1 GB',
            'WER inglês': '5,0%',
            'Velocidade relativa (vs large)': '~7×',
          },
          {
            'Modelo': 'small',
            'Parâmetros': '244M',
            'VRAM / RAM': '~2 GB',
            'WER inglês': '3,4%',
            'Velocidade relativa (vs large)': '~4×',
          },
          {
            'Modelo': 'medium',
            'Parâmetros': '769M',
            'VRAM / RAM': '~5 GB',
            'WER inglês': '2,9%',
            'Velocidade relativa (vs large)': '~2×',
          },
          {
            'Modelo': 'large-v3',
            'Parâmetros': '1,55B',
            'VRAM / RAM': '~10 GB',
            'WER inglês': '2,5%',
            'Velocidade relativa (vs large)': '1× (referência)',
          },
          {
            'Modelo': 'distil-large-v3',
            'Parâmetros': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER inglês': '~2,6%',
            'Velocidade relativa (vs large)': '~6,3×',
          },
        ],
        note: 'WER (taxa de erro de palavras), menor é melhor. Os valores de tiny, base, small e medium vêm do paper do Whisper (Radford et al., 2022, apêndice D.1.1, LibriSpeech test-clean, decodificação gulosa). O paper não cobre large-v3 nem distil-large-v3, então os valores deles são aproximados e não diretamente comparáveis. As velocidades relativas são os valores publicados pela OpenAI no README do Whisper, medidos em uma A100 em relação ao modelo large (informado pelos desenvolvedores); a velocidade real depende do hardware. Segundo o model card, o distil-large-v3 é 6,3× mais rápido que o large-v3.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: a alternativa mais rápida',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) é uma variante destilada do large-v3 com ~50% menos parâmetros, que roda 6,3× mais rápido mantendo o WER dentro de ~1% do original.** É a escolha certa quando a velocidade de transcrição importa mais do que extrair a última fração de precisão. distil-large-v3 funciona com faster-whisper (suporte nativo a CTranslate2) e com whisper.cpp (por meio de conversão para o formato GGML), integrando-se ao runtime que você já usa.',
        items: [
          '**Parâmetros:** ~756M — cerca de metade dos 1,55B do large-v3, cabendo em ~4 GB de VRAM em vez de ~10 GB.',
          '**Velocidade:** 6,3× mais rápido que o large-v3 segundo o model card (latência relativa, não um fator de tempo real), com WER dentro de ~1% do large-v3 em áudio longo.',
          '**WER:** ~2,6% em inglês — apenas ~0,1% acima dos 2,5% do large-v3. Na prática, a diferença provavelmente é difícil de notar em fala típica, mas não a verificamos.',
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
          '**Vantagem no Apple Silicon:** o whisper.cpp exporta modelos para o formato Core ML, permitindo inferência no Apple Neural Engine. O README informa que o encoder Core ML é mais de 3× mais rápido que a execução só em CPU (informado pelos desenvolvedores).',
          '**Instalação:** clone o repositório, execute `make` (ou `cmake`). Binários pré-compilados disponíveis para plataformas comuns. Sem dependência de Python.',
          '**Download do modelo:** `bash ./models/download-ggml-model.sh base.en` — baixa o arquivo de modelo no formato GGML (~142 MB para base).',
          '**Exemplo de CLI:** `./main -m models/ggml-base.bin -f audio.wav` — transcreve um arquivo WAV para a saída padrão. Adicione `-l pt` para português.',
          '**Modo stream em tempo real:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — transcreve do microfone em chunks de 3 segundos.',
          '**Wrapper Python:** pywhispercpp fornece um binding Python para whisper.cpp, permitindo seu uso em pipelines Python sem sacrificar a aceleração Metal.',
          '**VAD:** o whisper.cpp oferece, como opção, a detecção de atividade de voz Silero via `--vad` no `whisper-cli` (é preciso baixar um modelo VAD à parte). O modo stream continua exigindo ajustar os parâmetros `--step` e `--length` conforme o caso de uso.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp: versão mais recente e novidades',
        content:
          '**A versão mais recente do whisper.cpp é a v1.9.5, publicada em 6 de outubro de 2026.** Ela sincroniza a biblioteca ggml embutida com a v0.26.0 (trabalho nos backends CUDA, Vulkan, Metal, SYCL, OpenCL e nos kernels de CPU) e traz correções do Whisper, como um callback de aborto durante a detecção de idioma e uma correção de estouro de inteiros nos deslocamentos de chunks paralelos. O whisper.cpp também conta com pacote oficial para Debian (sid) (`whisper.cpp`, `libwhisper-dev`, `libwhisper1`), além do Snap não oficial. A versão marcada mais recente do faster-whisper continua sendo a v1.2.1 (31 de outubro de 2025), mas o repositório é mantido ativamente: o commit mais recente é de 2 de novembro de 2026 (verificado em 3 de novembro de 2026). Ambos os runtimes continuam carregando os mesmos pesos do OpenAI Whisper; não temos conhecimento de nenhuma nova classe de modelo que tenha mudado a precisão da transcrição em 2026.',
        items: [
          '**whisper.cpp v1.9.5 (6 de outubro de 2026):** sincroniza o ggml com a v0.26.0 (atualizações dos kernels CUDA, Vulkan, Metal, SYCL, OpenCL, WebGPU e CPU), adiciona um callback de aborto durante a detecção de idioma, corrige um estouro de inteiros nos deslocamentos de chunks paralelos e faz a CLI retornar o código de erro correto quando um arquivo falha.',
          '**whisper.cpp v1.9.4 (11 de setembro de 2026):** o servidor agora retorna o idioma detectado, o callback do encoder roda antes da detecção automática de idioma e o Windows on ARM foi adicionado ao job de release.',
          '**whisper.cpp v1.9.3 (20 de agosto de 2026):** sincronização do ggml com a v0.20.2, melhorias de desempenho em todos os backends, quantização Metal TQ2_0, kernels CUDA/SYCL combinados e correções para ARM/WASI.',
          '**whisper.cpp v1.9.0 a v1.9.2 (junho a agosto de 2026):** versões intermediárias da mesma linha de sincronização do ggml antes da v1.9.3.',
          '**whisper.cpp v1.8.6 (2 de junho de 2026):** reimplementação do `ffmpeg-transcode` para uma decodificação opcional com FFmpeg mais clara de áudio comprimido (MP3, M4A), além de uma correção do caminho de exemplos no CI.',
          '**whisper.cpp v1.8.5 (maio de 2026):** melhorias no VAD por streaming (detecção de atividade de voz), correções de vazamento de parâmetros do servidor e de carimbos de tempo de tokens, e correções de vazamentos de memória nos bindings de Ruby e VAD.',
          '**whisper.cpp v1.8.4 (19 de março de 2026):** sincronização mais recente do `ggml` com amplos ganhos de desempenho, uma nova flag `-g` / `--gpu-device` (e seleção de dispositivo `GGML_CUDA`) para escolher uma GPU, e correções de quebra de segmentos UTF-8.',
          '**O VAD nativo agora vem integrado ao whisper.cpp.** Versões recentes adicionaram um caminho nativo de detecção de atividade de voz, reduzindo uma vantagem de longa data do faster-whisper — embora a integração do Silero VAD do faster-whisper continue mais pronta para uso.',
          '**faster-whisper v1.2.1 (31 de outubro de 2025):** última versão marcada; `pip install faster-whisper` a instala. Não há versão marcada em 2026, mas a branch principal está ativa: o commit mais recente (2 de novembro de 2026, verificado em 3 de novembro) corrige a CI, e commits de 16 de outubro de 2026 adicionam validações de entrada, como um erro para idiomas que um modelo não suporta. A v1.2.0 (agosto de 2025) adicionou suporte ao distil-large-v3.5.',
          '**CTranslate2 v4.8.4 (25 de outubro de 2026):** o motor de inferência por baixo do faster-whisper lançou mais uma versão. Ela adiciona proteções contra estouro de inteiros no cálculo do tamanho de tensores, correções para o Conv1D na CPU e para o estouro da escala de quantização INT8 em linhas de pesos muito pequenas, além de uma implementação experimental de conversão de texto em fala offline (Drama 3). A versão anterior, v4.8.3 (13 de outubro de 2026), trouxe correções de ROCm no Windows, reforço no carregamento do modelo e a correção de uma divisão por zero no `align()` do Whisper quando uma janela não tem quadros. Em seguida veio a v4.8.5, em 2 de novembro de 2026 (verificado em 3 de novembro de 2026), com correções de precisão de atenção em CUDA e um guia de build para Windows ROCm/HIP.',
          '**Nenhum modelo Whisper novo de classe superior em 2026.** Os pesos multilíngues mais recentes da OpenAI continuam sendo o large-v3-turbo (outubro de 2024; 809M de parâmetros, decoder reduzido de 32 para 4 camadas, licença MIT), que troca uma pequena perda de qualidade por muito mais velocidade e roda nas duas ferramentas. O distil-large-v3 segue como a opção rápida só para inglês. Até onde sabemos, as atualizações de ambos os runtimes são mudanças de runtime e de ferramentas, não de precisão.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — o port CTranslate2',
        content:
          '**faster-whisper (da SYSTRAN) é uma biblioteca Python que reimplementa a inferência do Whisper usando CTranslate2 — um motor de inferência C++ altamente otimizado com suporte a quantização int8, reduzindo o uso de VRAM e aumentando o throughput.** Em GPUs NVIDIA, o faster-whisper está entre as implementações locais de Whisper mais rápidas nos testes publicados.',
        items: [
          '**Suporte de plataformas:** CPU (quantização int8) e GPU NVIDIA CUDA. Sem suporte a Apple Metal — roda somente em CPU no Mac.',
          '**Vantagem do int8:** a quantização int8 do CTranslate2 reduziu a VRAM em cerca de um terço no teste do README (4525 MB em fp16 contra 2926 MB em int8, large-v2) com um pequeno ganho de velocidade (1m03s contra 59s); o impacto no WER costuma ser desprezível.',
          '**Instalação:** `pip install faster-whisper` — sem compilação necessária (Python 3.9+). O uso de GPU exige NVIDIA cuBLAS para CUDA 12 e cuDNN 9; configurações antigas com CUDA 11 / cuDNN 8 precisam fixar um `ctranslate2` mais antigo (3.24.0).',
          '**VAD integrado:** faster-whisper inclui integração com Silero VAD, que pula automaticamente segmentos de áudio silencioso — crítico para pipelines de transcrição em tempo real.',
          '**Python nativo:** a API Python direta facilita a integração com LLMs, bibliotecas de processamento de áudio e frameworks web.',
          '**Velocidade:** no teste do README (large-v2, RTX 3070 Ti, arquivo de 13 minutos), o int8 levou 59 s e o int8 com lote de 8 apenas 16 s; um teste de terceiros em uma RTX 4070 Ti mediu 23× o tempo real com large-v3.',
          '**Processamento em lote:** faster-whisper suporta inferência em lote para processar grandes arquivos de áudio de forma eficiente.',
          '**Limitação:** sem suporte a Metal no Mac; roda só em CPU no Apple Silicon. Não encontramos nenhum benchmark publicado de faster-whisper contra whisper.cpp no Apple Silicon.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'Obtenha ggml-base.bin via pip (configuração Python)',
        content:
          '**Para usar ggml-base.bin a partir do Python via pip, instale o binding `pywhispercpp` — `pip install pywhispercpp` — e então carregue `Model("base")`, que baixa `ggml-base.bin` automaticamente na primeira execução.** Não existe `pip install whisper.cpp`; pywhispercpp é o wrapper pip do motor C/C++ do whisper.cpp e mantém a aceleração Metal e CUDA. O arquivo do modelo GGML (`ggml-base.bin`, ~142 MB) é baixado separadamente do Hugging Face e armazenado em cache localmente — o pacote pip entrega o motor de inferência, não os pesos.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Execute `pip install pywhispercpp`, e então `Model("base")` no Python busca e armazena em cache o ggml-base.bin automaticamente no primeiro uso.',
          },
          {
            type: 'plain-terms',
            text: 'o pip instala o programa (pywhispercpp); o arquivo do modelo ggml-base.bin é um download separado de ~142 MB que ocorre na primeira vez que você carrega o modelo «base» — ou que você obtém manualmente com o script download-ggml-model.sh.',
          },
        ],
        items: [
          '**Instale o binding:** `pip install pywhispercpp`. Para aceleração NVIDIA CUDA, compile com `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`.',
          '**Download automático do ggml-base.bin:** `from pywhispercpp.model import Model` e então `model = Model("base")` baixa `ggml-base.bin` do Hugging Face (`ggerganov/whisper.cpp`) na primeira execução e o armazena em cache. Use `"base.en"` para a variante somente em inglês.',
          '**Download manual (via CLI, sem pip):** a partir de um repositório whisper.cpp clonado, `bash ./models/download-ggml-model.sh base` salva o arquivo em `models/ggml-base.bin` — o mesmo arquivo que o pywhispercpp busca.',
          '**Download direto:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` obtém o modelo sem script. Troque `base` por `tiny`, `small`, `medium` ou `large-v3`.',
          '**Não confunda os pacotes:** `pip install openai-whisper` instala o Whisper PyTorch original da OpenAI (ele usa checkpoints `.pt`, não `ggml-base.bin`). `pip install faster-whisper` usa o formato CTranslate2. Apenas o `pywhispercpp` consome arquivos GGML `ggml-*.bin`.',
          '**Onde o arquivo fica:** o pywhispercpp armazena os modelos GGML baixados no cache do seu módulo (ou em um caminho que você passe via `Model("base", models_dir="...")`), de modo que o mesmo `ggml-base.bin` é reutilizado entre execuções — sem novo download.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Comparação direta: tabela de benchmarks',
        content:
          'Cada linha informa sua fonte e seu hardware. A velocidade é dada em múltiplos do tempo real (10× significa 60 minutos de áudio transcritos em 6 minutos). As linhas «terceiros» vêm da [comparação do x2q.net](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti e Intel Core i5-13400F, large-v3, ligações telefônicas em dinamarquês, junho de 2026); as linhas «README» vêm do README do faster-whisper (RTX 3070 Ti, large-v2). Hardware e áudio diferem entre as fontes, então leia as linhas como indícios, não como um confronto direto em uma única máquina.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-pt.webp',
          imageCaption: 'whisper.cpp e faster-whisper comparados por plataforma: Apple Silicon, GPU NVIDIA e CPU.',
          imageAlt: 'Pôster «whisper.cpp vs faster-whisper por plataforma»: Apple Silicon com whisper.cpp (Metal), ambos usam CUDA em GPUs NVIDIA e os resultados publicados em CPU divergem',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em um teste de terceiros em uma RTX 4070 Ti, o faster-whisper rodou o large-v3 a 23× o tempo real contra 15× do whisper.cpp CUDA; no Apple Silicon, só o whisper.cpp pode usar Metal.',
          },
          {
            type: 'plain-terms',
            text: 'Escolha whisper.cpp no Mac, onde ele pode usar Metal e Core ML, e faster-whisper no Windows/Linux com GPU NVIDIA, onde foi mais rápido nos testes publicados e usou menos VRAM com int8 (2926 MB contra 4127 MB do whisper.cpp fp16 no teste do README).',
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
            'Métrica': 'Velocidade — RTX 4070 Ti, large-v3 (terceiros)',
            'whisper.cpp (large-v3)': '~15× tempo real',
            'faster-whisper (large-v3)': '~23× tempo real ✓',
          },
          {
            'Métrica': 'Velocidade — Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (sem benchmark)',
            'faster-whisper (large-v3)': 'Só CPU (sem benchmark)',
          },
          {
            'Métrica': 'Velocidade — CPU x86, large-v3 (terceiros)',
            'whisper.cpp (large-v3)': '~15× tempo real ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2× tempo real (i5-13400F)',
          },
          {
            'Métrica': 'VRAM — large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'Métrica': 'Integração Python',
            'whisper.cpp (large-v3)': 'Requer wrapper (pywhispercpp)',
            'faster-whisper (large-v3)': 'Nativo ✓',
          },
          {
            'Métrica': 'VAD (detecção de silêncio)',
            'whisper.cpp (large-v3)': 'Opcional (--vad + modelo Silero)',
            'faster-whisper (large-v3)': 'Integrado (Silero VAD) ✓',
          },
          {
            'Métrica': 'Streaming em tempo real',
            'whisper.cpp (large-v3)': 'Sim (flag --stream) ✓',
            'faster-whisper (large-v3)': 'Sim (pipeline VAD)',
          },
          {
            'Métrica': 'Precisão WER (large-v3)',
            'whisper.cpp (large-v3)': '2,5% (mesmos pesos)',
            'faster-whisper (large-v3)': '2,5% (mesmos pesos)',
          },
          {
            'Métrica': 'Dependência Python',
            'whisper.cpp (large-v3)': 'Nenhuma ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'Métrica': 'Raspberry Pi / embarcado',
            'whisper.cpp (large-v3)': 'Sim — binário C ✓',
            'faster-whisper (large-v3)': 'Possível — requer Python',
          },
          {
            'Métrica': 'Formatos de saída',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Objetos Python (start, end, text)',
          },
        ],
        note: 'whisper.cpp grava a saída diretamente em formatos padrão de legendas e transcrição (SRT, VTT, JSON, CSV, txt) — ideal para fluxos de trabalho de legendagem em que você precisa de um arquivo em disco sem código adicional. faster-whisper retorna um gerador Python de objetos de segmento com atributos `start`, `end` e `text` — ideal para encadeamento de pipelines LLM, em que você passa o texto do segmento diretamente para um modelo posterior sem gravar arquivos intermediários. Para geração de legendas, whisper.cpp é mais simples. Para pipelines que processam segmentos programaticamente, faster-whisper é mais simples.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'Benchmark de referência: tempos de GPU vs CPU do faster-whisper',
        content:
          '**O projeto faster-whisper publica seus próprios tempos em um arquivo de áudio de 13 minutos: eles mostram o whisper.cpp com Flash Attention igualando o faster-whisper fp16 em GPU, enquanto batching e int8 são onde o faster-whisper se destaca.** Os números abaixo vêm do README do faster-whisper (large-v2 em uma RTX 3070 Ti de 8 GB com CUDA 12.4 nas linhas de GPU; o modelo small em um Intel Core i7-12700K com 8 threads nas linhas de CPU; beam size 5). Não são medições nossas e usam hardware e modelos diferentes dos números do large-v3 acima.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'No benchmark do README do faster-whisper, o whisper.cpp com Flash Attention (1m05s) e o faster-whisper fp16 (1m03s) ficam praticamente empatados em GPU; o faster-whisper int8 com batching termina o mesmo arquivo de 13 minutos em 16 segundos.',
          },
        ],
        columns: ['Configuração', 'Precisão', 'Tempo', 'VRAM / RAM'],
        rows: [
          {
            'Configuração': 'GPU · OpenAI Whisper',
            'Precisão': 'fp16',
            'Tempo': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'Configuração': 'GPU · whisper.cpp (Flash Attn)',
            'Precisão': 'fp16',
            'Tempo': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'Configuração': 'GPU · faster-whisper',
            'Precisão': 'fp16',
            'Tempo': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'Configuração': 'GPU · faster-whisper',
            'Precisão': 'int8',
            'Tempo': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'Configuração': 'GPU · faster-whisper, batch 8',
            'Precisão': 'int8',
            'Tempo': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'Configuração': 'CPU · OpenAI Whisper',
            'Precisão': 'fp32',
            'Tempo': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'Configuração': 'CPU · whisper.cpp',
            'Precisão': 'fp32',
            'Tempo': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'Configuração': 'CPU · faster-whisper',
            'Precisão': 'int8',
            'Tempo': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'Configuração': 'CPU · faster-whisper, batch 8',
            'Precisão': 'int8',
            'Tempo': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'Leia junto com a tabela comparativa: com um único fluxo fp16, a velocidade em GPU das duas ferramentas é próxima nesta configuração. As vantagens duradouras do faster-whisper são a economia de memória do int8 (2,9 GB contra 4,1–4,5 GB em fp16) e a inferência em lote (16 s contra 59 s). Em CPU, whisper.cpp fp32 e faster-whisper int8 ficam a cerca de 25 % um do outro sem batching. As linhas do OpenAI Whisper no README mostram a referência: 2m23s na GPU (fp16, 4708 MB) e 6m58s na CPU (fp32, 2335 MB), contra 59s e 1m42s do faster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'Configuração de transcrição em tempo real',
        content:
          '**A transcrição em tempo real processa o áudio em chunks à medida que ele chega do microfone, produzindo texto com um pequeno atraso em relação à fala.** Ambas as ferramentas suportam isso, mas com diferentes compensações.',
        items: [
          '**Modo stream do whisper.cpp:** execute `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. Processa chunks de 3 segundos; o atraso varia conforme o hardware e o modelo e não foi medido por nós. Sem Python necessário.',
          '**Pipeline VAD do faster-whisper:** use `vad_filter=True` em `model.transcribe()`. Silero VAD segmenta o áudio automaticamente nos limites de silêncio — chunks mais naturais do que janelas de comprimento fixo.',
          '**Latência:** varia conforme o hardware e o tamanho do modelo e não foi medida por nós. Modelos pequenos como tiny costumam responder mais rápido, mas com WER maior.',
          '**Seleção de modelo para tempo real:** small ou base é o ponto ideal prático — rápido o suficiente para acompanhar a fala, preciso o suficiente para áudio limpo. Evite large-v3 em tempo real a menos que você tenha uma GPU dedicada.',
          '**Entrada de microfone:** whisper.cpp lê áudio raw via SDL2 ou portaudio. faster-whisper lê arrays de áudio de qualquer biblioteca Python de áudio (sounddevice, pyaudio, soundfile).',
          '**Estabilidade:** o modo stream do whisper.cpp pode produzir tokens repetidos ("alucinações" de preenchimentos curtos) no silêncio. Suprima com `--suppress-blank` e `--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp é a escolha natural',
        content:
          '**Em Macs M1 a M5, o whisper.cpp com aceleração Core ML / Metal é a ferramenta natural, porque o faster-whisper não tem backend Metal e roda só em CPU no Mac.** O README do whisper.cpp informa que o encoder Core ML é mais de 3× mais rápido que a execução só em CPU (informado pelos desenvolvedores). Não encontramos nenhum benchmark publicado de large-v3 no M5 Pro, então este guia não traz fator de tempo real para chips Apple.',
        items: [
          '**Exportação para Core ML:** execute `./models/generate-coreml-model.sh large-v3` para exportar o encoder para o formato Core ML. Isso descarrega a inferência do encoder no Apple Neural Engine.',
          '**Benchmarks:** o projeto whisper.cpp reúne medições na sua [discussão de benchmarks](https://github.com/ggml-org/whisper.cpp/discussions/89) (tempos do encoder; sem entradas M5 quando conferimos). Não encontramos nenhum benchmark publicado de large-v3 no M5 Pro, então não trazemos fator de tempo real para chips Apple.',
          '**Meça o seu próprio Mac:** o whisper.cpp inclui a ferramenta `whisper-bench`, que mede o tempo do encoder; ou cronometre um arquivo real do início ao fim. Os resultados variam conforme o chip, o tamanho do modelo e a quantização.',
          '**Memória:** a memória unificada significa que não há VRAM separada. O README do whisper.cpp indica cerca de 3,9 GB de memória para o modelo large, o que deixa folga em um Mac de 16 GB para outros processos.',
          '**faster-whisper no Mac:** só CPU (int8). Serve para transcrição em lote, mas não tem caminho Metal e não encontramos benchmark contra o whisper.cpp no Apple Silicon.',
          '**Recomendação:** use whisper.cpp na maior parte do trabalho de STT no Mac. Adicione pywhispercpp se precisar de integração com Python mantendo a aceleração Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'GPU NVIDIA: faster-whisper à frente em testes publicados',
        content:
          '**No Windows e no Linux com GPUs NVIDIA, o faster-whisper foi a ferramenta mais rápida nos testes publicados que encontramos.** Em um teste de terceiros em uma RTX 4070 Ti (large-v3, junho de 2026), ele rodou a 23× o tempo real contra 15× do whisper.cpp CUDA; no teste do README do faster-whisper (large-v2, RTX 3070 Ti), os dois ficaram quase empatados em fluxo único (1m03s contra 1m05s), e com int8 e processamento em lote o faster-whisper abriu vantagem.',
        items: [
          '**RTX 4070 Ti (12 GB), large-v3, teste de terceiros:** faster-whisper 23× o tempo real (large-v3-turbo: 56×); whisper.cpp CUDA 15× (large-v3-turbo: 40×).',
          '**RTX 3070 Ti (8 GB), large-v2, README do faster-whisper:** um arquivo de 13 minutos levou 1m03s em fp16, 59s em int8 (2926 MB de VRAM) e 16s em int8 com lote de 8.',
          '**Outras placas (RTX 3060, RTX 4060):** não encontramos nenhum benchmark publicado de large-v3 para elas e não citamos valor de velocidade; a VRAM em int8 acima é a principal checagem de compatibilidade.',
          '**int8 contra float16:** no teste do README, o int8 usou cerca de um terço menos VRAM (2926 MB contra 4525 MB) e terminou um pouco antes (59s contra 1m03s), com perda de precisão geralmente desprezível. `compute_type="int8"` é um padrão razoável em NVIDIA.',
          '**Processamento em lote:** o parâmetro `batched=True` do faster-whisper permite o processamento paralelo de múltiplos arquivos de áudio, maximizando a utilização da GPU em grandes trabalhos de transcrição.',
          '**Integração em pipeline Python:** faster-whisper se integra diretamente ao LangChain, Haystack e pipelines Python personalizados. Sem overhead de subprocesso em comparação com envolver o whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'GPUs NVIDIA antigas (GTX 970): int8 recua para float32',
        content:
          '**Em uma GTX 970 (Maxwell, compute capability 5.2), o faster-whisper ainda roda em CUDA, mas `compute_type="int8"` não entrega int8 de verdade: o CTranslate2 converte os pesos para float32.** A tabela de quantização dele mapeia toda GPU com compute capability 6.0 ou inferior para float32, qualquer que seja o tipo pedido; por isso a economia de VRAM e o ganho de velocidade do int8 citados para placas RTX não se aplicam.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em uma GTX 970 (compute capability 5.2), o faster-whisper roda em CUDA apenas em float32: um tipo de computação int8 solicitado é convertido automaticamente.',
          },
          {
            type: 'plain-terms',
            text: 'A GTX 970 é antiga demais para int8 em GPU. Ela funciona, mas sem economia de memória, então fique com os modelos tiny, base ou small nos 4 GB dela.',
          },
        ],
        items: [
          '**O que continua funcionando:** os binários pré-compilados do CTranslate2 suportam GPUs NVIDIA com compute capability 3.5 ou superior, então uma GTX 970 (5.2) pode rodar o faster-whisper em CUDA, desde que as bibliotecas CUDA e cuDNN instaladas correspondam à versão (veja Problemas comuns).',
          '**Onde o int8 em GPU funciona:** o int8 exige compute capability 7.0 ou superior (Volta e série RTX 20 em diante) ou exatamente 6.1 (GTX 1050 a 1080 Ti, int8_float32). As compute capability 6.0, 6.2 e inferiores recuam para float32; o float16 exige 7.0 ou superior.',
          '**Consequência na memória:** o float32 usa 4 bytes por parâmetro contra 1 byte do int8; pela contagem de parâmetros, o large-v3 (1,55B) precisa de cerca de 6 GB só para os pesos, mais que os 4 GB da GTX 970. O small (244M, ~1 GB em float32) cabe com folga; o medium (769M, ~3 GB) fica no limite.',
          '**Velocidade:** não medimos uma GTX 970, então não há número medido aqui. Espere um desempenho em float32 bem abaixo dos números de RTX 4070 Ti deste guia e teste tiny, base e small com o seu próprio áudio.',
          '**Veja o que a sua GPU suporta:** `ctranslate2.get_supported_compute_types("cuda")` lista os tipos de computação que o CTranslate2 aceita na sua placa.',
          '**Alternativas:** int8 em CPU (`device="cpu", compute_type="int8"`) funciona em qualquer CPU x86 moderna, e os modelos GGML quantizados do whisper.cpp (por exemplo `ggml-large-v3-q5_0.bin`, cerca de 3–4 GB) são o caminho usual para encaixar modelos maiores em 4 GB; verifique o build CUDA ou Vulkan na sua placa.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper no Raspberry Pi 5: tiny, base e small',
        content:
          '**Em um Raspberry Pi 5, o whisper.cpp roda os modelos tiny e base em tempo real para transcrição ao vivo, enquanto o modelo small roda abaixo do tempo real e é melhor reservá-lo para trabalhos em lote.** O Cortex-A76 quad-core do Pi 5 não tem um caminho de GPU utilizável para o Whisper, então toda a inferência é em CPU (ARM NEON). Use os modelos GGML quantizados (`ggml-*-q5_0.bin`) para reduzir o uso de memória e acelerar a inferência.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em um Raspberry Pi 5, o modelo small do whisper.cpp roda mais lento que o tempo real segundo relatos da comunidade (uso em lote; não medimos por conta própria); tiny e base são os modelos que, segundo esses relatos, acompanham a fala ao vivo.',
          },
          {
            type: 'plain-terms',
            text: 'Um Pi 5 consegue transcrever áudio ao vivo com os modelos Whisper tiny e base, mas o modelo small é pesado demais para acompanhar em tempo real — use o small para arquivos gravados que você processa em segundo plano, não para um microfone ao vivo.',
          },
        ],
        items: [
          '**Whisper small no Pi 5:** segundo relatos, mais lento que o tempo real em CPU (não medimos; qualquer tempo é apenas indicativo). Preciso com 3,4% WER (paper do Whisper, LibriSpeech test-clean), mas lento demais para legendagem ao vivo — use-o para transcrição noturna/em lote.',
          '**Whisper base no Pi 5:** segundo relatos, em torno do tempo real com multithreading (`-t 4`); o resultado varia conforme o build, a refrigeração e o áudio. O ponto ideal prático para transcrição ao vivo no Pi, com WER aceitável de 5,0%.',
          '**Whisper tiny no Pi 5:** a opção mais rápida, que segundo relatos costuma servir para uso ao vivo, ao custo de um WER mais alto de 7,6%. Ideal para reconhecimento de palavra de ativação e comandos curtos.',
          '**Use modelos quantizados:** `bash ./models/download-ggml-model.sh small-q5_0` reduz a RAM e acelera a inferência com perda mínima de precisão — importante na memória compartilhada do Pi 5.',
          '**faster-whisper no Pi 5:** instalável (`pip install faster-whisper`, CPU int8) e competitivo para trabalhos em lote, mas o binário C mais leve do whisper.cpp é a escolha embarcada mais comum.',
          '**Térmica:** a transcrição sustentada exige muito da CPU do Pi 5 — use refrigeração ativa para evitar o throttling térmico que degrada esses números.',
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
            text: 'Se você tem um Mac, escolha whisper.cpp: ele usa Metal e Core ML, que o faster-whisper não suporta. Se você tem uma GPU NVIDIA e programa em Python, escolha faster-whisper: foi mais rápido nos testes publicados e usou menos memória de GPU com int8.',
          },
        ],
        columns: ['Cenário', 'Melhor escolha', 'Por quê'],
        rows: [
          {
            'Cenário': 'Mac com Apple Silicon (qualquer modelo)',
            'Melhor escolha': 'whisper.cpp',
            'Por quê': 'Aceleração Metal / Core ML; o faster-whisper não tem backend Metal',
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
            'Melhor escolha': 'Testar os dois',
            'Por quê': 'Testes de CPU do README e de terceiros divergem; meça',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** um wrapper de pipeline Hugging Face Transformers que adiciona suporte a Flash Attention 2 para inferência em lote rápida em GPU em hardware NVIDIA; o README relata grandes acelerações (informado pelos desenvolvedores, não comparado por nós com o faster-whisper). Melhor para: processamento em lote de grandes arquivos de áudio em GPUs NVIDIA. Requer uma GPU compatível com Flash Attention 2 (Ampere ou mais recente: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Problemas comuns e soluções',
        content: 'Os problemas de configuração e runtime mais frequentes, com soluções diretas:',
        items: [
          '**Incompatibilidade de versão do CUDA:** as versões atuais do faster-whisper exigem cuBLAS para CUDA 12 e cuDNN 9. Se você está preso a bibliotecas antigas, fixe o ctranslate2: `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 com cuDNN 8) ou `3.24.0` (CUDA 11 com cuDNN 8). Verifique a versão do CUDA com `nvcc --version`.',
          '**Falha na exportação do modelo Metal:** garanta que as Xcode Command Line Tools estejam instaladas — execute `xcode-select --install`. O script de exportação Core ML requer o pacote Python `coremltools`: `pip install coremltools`.',
          '**Alucinações no silêncio:** ambas as ferramentas podem produzir tokens de preenchimento repetidos em segmentos de áudio silencioso. Use `--no-speech-threshold 0.6` no modo stream do whisper.cpp, ou `vad_filter=True` em `model.transcribe()` do faster-whisper para pular automaticamente os segmentos silenciosos.',
          '**Memória insuficiente com large-v3:** mude para a quantização int8 no faster-whisper (`compute_type="int8"`): no teste do README (large-v2), a VRAM caiu de cerca de 4,5 GB (float16) para cerca de 2,9 GB. No whisper.cpp, use a variante GGML quantizada (por exemplo, `ggml-large-v3-q5_0.bin`), que reduz a memória para ~3–4 GB.',
          '**Saída ilegível em áudio não inglês:** não use variantes `.en` do modelo (tiny.en, base.en) para fala não inglesa — são somente inglês. Use os modelos multilíngues (base, small, medium, large-v3) e especifique o idioma explicitamente: `-l pt` no whisper.cpp ou `language="pt"` no faster-whisper.',
          '**Inferência lenta em CPU:** verifique se a sua CPU suporta instruções AVX2 (necessárias para inferência otimizada em CPU). Confira com `grep avx2 /proc/cpuinfo` no Linux ou `sysctl machdep.cpu.features` no Mac. CPUs sem AVX2 recorrem a SIMD genérico e serão 2–3× mais lentas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe um pacote Debian ou apt para o whisper.cpp?',
            a: 'Sim — o whisper.cpp agora tem um pacote oficial para Debian (atualmente em sid), disponibilizando o binário `whisper.cpp` além de `libwhisper-dev` e `libwhisper1` para vinculação como biblioteca compartilhada. Ainda não chegou às versões estáveis do Debian nem aos repositórios padrão do Ubuntu, então na maioria dos sistemas ainda é preciso usar sid ou compilar a partir do código-fonte. Também existe um Snap não oficial (`sudo snap install whisper-cpp`) para Debian 9+ e Ubuntu.',
          },
          {
            q: 'Como verifico qual versão do whisper.cpp está instalada?',
            a: 'Execute o binário compilado sem argumentos ou com `--help` — a versão aparece na linha de banner. Você também pode conferir o commit exato com `git describe --tags` dentro do repositório clonado, ou comparar a data do build com as notas de versão em github.com/ggml-org/whisper.cpp/releases para ver se está atrás da v1.9.5 atual.',
          },
          {
            q: 'A precisão de transcrição é a mesma entre whisper.cpp e faster-whisper?',
            a: 'Em grande parte. Ambas as ferramentas usam os mesmos pesos do modelo OpenAI Whisper, então a precisão deve ser muito próxima; a diferença está principalmente no runtime de inferência (C/C++ vs CTranslate2 Python). Ainda assim, a quantização (por exemplo int8), as configurações de decodificação e a precisão numérica podem causar pequenas diferenças na saída. Não medimos nenhuma diferença de WER entre os dois runtimes, então teste com o seu próprio áudio.',
          },
          {
            q: 'Posso usar faster-whisper em um Mac com Apple Silicon?',
            a: 'Sim, mas só em CPU: o faster-whisper não tem suporte a Metal. O whisper.cpp pode usar Metal e Core ML, e o README dele informa que o encoder Core ML é mais de 3× mais rápido que a execução só em CPU. Não encontramos nenhum benchmark publicado de faster-whisper contra whisper.cpp no Apple Silicon, então meça com o seu próprio áudio. O principal motivo para usar o faster-whisper no Mac é já ter um pipeline Python que dependa dele.',
          },
          {
            q: 'Que tamanho de modelo Whisper devo usar para um assistente de voz?',
            a: 'Para interfaces de voz em tempo real, Whisper small é a recomendação padrão — cerca de 3,4% WER em inglês limpo (paper do Whisper, LibriSpeech test-clean), baixa latência em uma CPU ou GPU moderna (varia conforme o hardware; não medimos) e cabe em cerca de 2 GB de RAM. Use tiny se você estiver em hardware muito restrito (Raspberry Pi Zero 2W, telefones antigos) e puder tolerar ~7,6% WER. Use medium ou large-v3 apenas para transcrição em lote em que a latência não é uma restrição.',
          },
          {
            q: 'whisper.cpp suporta idiomas além do inglês?',
            a: 'Sim. Todos os modelos multilíngues do Whisper (base, small, medium, large-v3) suportam 99 idiomas. Adicione `-l [código do idioma]` ao CLI: `-l pt` para português, `-l de` para alemão, `-l ja` para japonês, etc. Os modelos tiny.en e base.en são somente inglês e ligeiramente mais precisos para inglês que seus equivalentes multilíngues.',
          },
          {
            q: 'Como instalo faster-whisper com suporte CUDA?',
            a: 'Instale com `pip install faster-whisper`. As versões atuais exigem NVIDIA cuBLAS para CUDA 12 e cuDNN 9 no seu sistema (no Linux, `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"` fornece os dois). Em configurações antigas com CUDA 11 / cuDNN 8, fixe `ctranslate2==3.24.0` (ou `4.4.0` para CUDA 12 com cuDNN 8). Em seguida, especifique `device="cuda"` ao carregar o modelo: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. Use `device="auto"` se quiser que ele recorra à CPU quando o CUDA não estiver disponível.',
          },
          {
            q: 'Qual é mais preciso — whisper.cpp ou faster-whisper?',
            a: 'Muito próxima, embora não garantida idêntica. Ambas as ferramentas usam os mesmos pesos do modelo OpenAI Whisper, então a precisão deve ser muito próxima no mesmo áudio. A principal diferença entre whisper.cpp e faster-whisper é a velocidade e o suporte de plataforma. A quantização (int8, q5_0), o tamanho do beam e outras configurações de decodificação podem alterar levemente a transcrição; não medimos isso, então compare as duas com uma amostra do seu próprio áudio.',
          },
          {
            q: 'Posso rodar o Whisper large-v3 com 8 GB de RAM?',
            a: 'Sim na GPU: o large-v3 em int8 no faster-whisper deve caber em uma GPU de 8 GB (o README do faster-whisper mediu 2926 MB de VRAM para o large-v2 em int8). Em hardware só com CPU, 8 GB de RAM é pouco para o large-v3 (float32 precisa de cerca de 10 GB). Use medium (5 GB de RAM) ou small (2 GB de RAM) em sistemas só com CPU. No teste do README, o whisper.cpp usou menos RAM na CPU que o faster-whisper (1049 MB contra 1477 MB em int8).',
          },
          {
            q: 'Quanto custa o Whisper local vs STT na nuvem?',
            a: 'Sem custos de licença nem tarifas por minuto. Os serviços de STT na nuvem costumam cobrar US$ 0,006–0,024 por minuto de áudio (confira os preços atuais); para um desenvolvedor que transcreve 8 horas de reuniões por semana, isso dá cerca de US$ 12–50/mês. O Whisper local roda em hardware que você já possui, sem tarifas por minuto e sem gerenciamento de chaves de API, e não é preciso enviar o áudio a um serviço de nuvem (energia e tempo de configuração à parte).',
          },
          {
            q: 'O faster-whisper int8 funciona em uma GTX 970?',
            a: 'Não, não como int8 de verdade. A GTX 970 tem compute capability 5.2, e o CTranslate2 só executa int8 em GPUs com compute capability 7.0 ou superior (ou exatamente 6.1); em placas mais antigas ele converte os pesos para float32 automaticamente. O faster-whisper continua rodando na GPU em float32, então use tiny, base ou small para ficar dentro de 4 GB, ou int8 em CPU, que funciona em qualquer CPU x86 moderna. Não medimos uma GTX 970, então não há número de velocidade medido aqui.',
          },
          {
            q: 'Qual o tamanho dos arquivos de modelo do Whisper para whisper.cpp e faster-whisper?',
            a: 'O README do whisper.cpp lista arquivos de modelo GGML de cerca de 75 MiB (tiny), 142 MiB (base), 466 MiB (small), 1,5 GiB (medium) e 2,9 GiB (large) em disco, que precisam de aproximadamente 273 MB, 388 MB, 852 MB, 2,1 GB e 3,9 GB de memória. O faster-whisper baixa os modelos CTranslate2 do Hugging Face no primeiro uso; o large-v3 tem cerca de 3 GB lá (1,55B de parâmetros a 2 bytes em float16). A tabela de tamanhos de modelo acima traz a contagem de parâmetros de cada tamanho.',
          },
          {
            q: 'O Whisper large-v3-turbo é melhor que o large-v3 para transcrição local?',
            a: 'Ele é mais rápido, não mais preciso. O large-v3-turbo tem 809M de parâmetros porque a OpenAI reduziu o decoder de 32 para 4 camadas, e o model card o descreve como muito mais rápido que o large-v3 ao custo de uma pequena degradação de qualidade, sob licença MIT. O card também alerta que ele pode alucinar ou repetir texto e que a precisão varia entre idiomas: mantenha o large-v3 para o áudio mais difícil e use o turbo (ou o distil-large-v3 para inglês) quando a velocidade importar. whisper.cpp e faster-whisper conseguem rodá-lo.',
          },
          {
            q: 'O whisper.cpp pode usar uma GPU AMD ou Intel em vez de CUDA?',
            a: 'Sim. O backend Vulkan do whisper.cpp (`-DGGML_VULKAN=1`) funciona entre fabricantes, desde que o seu driver suporte a API Vulkan; o ROCm/HIP (`-DGGML_HIP=1`) mira GPUs AMD, e o OpenVINO acelera o encoder em CPUs e GPUs Intel. A documentação do faster-whisper cobre apenas NVIDIA CUDA; as notas de versão do CTranslate2 mencionam wheels de ROCm, mas não testamos esse caminho.',
          },
          {
            q: 'O mlx-whisper é mais rápido que o whisper.cpp em um Mac?',
            a: 'Um teste independente diz que sim para o large-v3-turbo: a nova medição de Bill Mill em janeiro de 2026 registrou cerca de 13,1 segundos para o mlx_whisper contra 26,7 segundos para o whisper.cpp na mesma gravação longa, ou seja, cerca de 2× mais rápido. Um teste de velocidade da comunidade com um clipe curto deixou os dois próximos, com o whisper.cpp usando Core ML e quantização q5_0. Os números do M5 Pro deste guia não foram comparados com o MLX, então faça o benchmark com o seu próprio áudio antes de escolher.',
          },
          {
            q: 'O faster-whisper é mais rápido que o OpenAI Whisper?',
            a: 'Sim. Segundo o README do faster-whisper, a reimplementação com CTranslate2 é até 4 vezes mais rápida que o pacote original openai/whisper com a mesma precisão e usa menos memória; a quantização de 8 bits melhora ainda mais a eficiência em CPU e GPU. No teste de 13 minutos do README, o openai/whisper levou 2m23s em uma RTX 3070 Ti (large-v2, fp16) contra 1m03s do faster-whisper fp16 e 59s em int8, e 6m58s em uma CPU Intel Core i7-12700K (modelo small, fp32) contra 1m42s do faster-whisper int8. Ambos usam os mesmos pesos do Whisper, então a precisão deve ser praticamente a mesma; o whisper.cpp, o terceiro runtime, concluiu o teste em GPU em 1m05s com Flash Attention.',
          },
          {
            q: 'O Whisper é mais rápido na GPU do que na CPU?',
            a: 'Para modelos grandes, sim; para os pequenos, uma CPU costuma bastar. No README do faster-whisper, o large-v2 em uma RTX 3070 Ti levou 59 s em int8 para um arquivo de 13 minutos, enquanto o modelo small em uma CPU Intel Core i7-12700K levou 1m42s em int8: outro modelo e outro hardware, então compare só ordens de grandeza. Um teste de terceiros do large-v3 em uma CPU Intel Core i5-13400F mediu o whisper.cpp a 15× e o faster-whisper a 2× o tempo real. Segundo relatos da comunidade, em um Raspberry Pi 5 tiny e base acompanham a fala ao vivo; não medimos isso.',
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
          '[insanely-fast-whisper no GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — Pipeline Whisper Flash Attention 2 para inferência em lote em GPU NVIDIA (benchmarks do README, informados pelos desenvolvedores).',
          '[OpenAI Whisper no GitHub](https://github.com/openai/whisper) — Modelo Whisper original, paper, model cards e a tabela de velocidade relativa (A100) para todos os tamanhos.',
          '[x2q.net: comparação de backends do Whisper](https://www.x2q.net/post/whisper-backend-shootout/) — Benchmark de terceiros de junho de 2026 (RTX 4070 Ti e Intel Core i5-13400F, large-v3, ligações telefônicas em dinamarquês) por trás dos fatores de tempo real do faster-whisper e do whisper.cpp.',
          '[Discussão de benchmarks do whisper.cpp](https://github.com/ggml-org/whisper.cpp/discussions/89) — Tempos de encoder enviados pela comunidade para Apple Silicon e outros chips.',
          '[Paper do OpenAI Whisper (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". Fonte dos valores de WER.',
          '[Documentação do CTranslate2](https://github.com/OpenNMT/CTranslate2) — Detalhes de quantização, suporte de hardware e fundamentos da otimização int8.',
          '[Documentação de quantização do CTranslate2](https://opennmt.net/CTranslate2/quantization.html) — Tipos de computação que cada compute capability de GPU suporta (base da seção sobre a GTX 970).',
          '[Benchmarks do README do faster-whisper](https://github.com/SYSTRAN/faster-whisper#benchmark) — Tempos de GPU e CPU em 13 minutos usados no benchmark de referência, e os requisitos atuais de CUDA 12 / cuDNN 9.',
          '[openai/whisper-large-v3-turbo no Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — Model card: 809M de parâmetros, 4 camadas de decoder, licença MIT.',
          '[Bill Mill: benchmark atualizado de mlx_whisper vs. whisper.cpp](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Comparação independente de tempos do large-v3-turbo no Apple Silicon.',
          '[Releases do whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — Notas de versão da v1.9.4 e da v1.9.5.',
          '[Releases do CTranslate2](https://github.com/OpenNMT/CTranslate2/releases) — Notas de versão da v4.8.3, da v4.8.4 e da v4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[TTS local e clonagem de voz 2026: Piper vs Coqui vs XTTS v2](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — O complemento de TTS: converta o texto transcrito de volta em voz, offline.',
          '[Construa um assistente de voz totalmente offline em 2026](/pt/power-local-llm/build-local-voice-assistant-2026) — Conecte Whisper STT a um LLM local e Piper TTS em um pipeline de voz completo.',
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Adicione modelos de visão junto a STT e TTS para um stack local multimodal completo.',
          '[Guia de hardware para LLM local](/pt/local-llms/local-llm-hardware-guide) — Requisitos de GPU e RAM para o pipeline completo de voz + LLM.',
          '[Construa um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline) — Versão móvel: WhisperKit no iPhone, Layla no Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Whisper.cpp vs faster-whisper 2026: Benchmarks de STT local, configuração e aceleração de GPU',
       description: 'Compare whisper.cpp e faster-whisper para reconhecimento de voz local em 2026. Benchmarks de WER, velocidade GPU vs CPU, Apple Silicon Metal, transcrição em tempo real e guias de instalação. Funciona offline.',
       url: 'https://www.promptquorum.com/pt/power-local-llm/local-whisper-stt-comparison',
       inLanguage: 'pt-BR',
       datePublished: '2026-05-14',
       dateModified: '2026-11-02',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
},

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: '⁨Whisper.cpp⁩ مقابل ⁨faster-whisper 2026⁩: معايير ⁨STT⁩ المحلية والإعداد وتسريع ⁨GPU⁩',
    seoTitle: '⁨Whisper.cpp⁩ مقابل ⁨faster-whisper 2026⁩: ⁨CPU⁩ و⁨GPU⁩',
    intro:
      'يُعدّ كلٌّ من whisper.cpp وfaster-whisper التطبيقَين المهيمنَين لنموذج Whisper من OpenAI لتحويل الكلام إلى نص محليًا وبدون اتصال في عام 2026. فـwhisper.cpp هو منفذ نقي بلغة C/C++ يعمل على Apple Metal وCUDA وVulkan والمعالج — مما يجعله مثاليًا لأجهزة Apple Silicon والأنظمة المدمجة وتطبيقات الصوت في الوقت الفعلي. أما faster-whisper فهو مكتبة Python تستخدم CTranslate2 وهي، وفق ملف README الخاص بها، أسرع حتى 4 أضعاف من Whisper الأصلي بالدقة نفسها. يتناول هذا الدليل التثبيت ومعايير الأداء وإعداد النسخ في الوقت الفعلي والمقارنة المباشرة بين المنصات لمساعدتك في اختيار الأداة المناسبة لخط أنابيبك.',
    metaDescription:
      'faster-whisper أسرع حتى 4× من OpenAI Whisper، وwhisper.cpp يضيف دعم Apple Metal. أزمنة CPU مقابل GPU وVRAM وWER من معايير منشورة.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ar.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**استخدم whisper.cpp على Apple Silicon والأجهزة المدمجة، واستخدم faster-whisper على بطاقات NVIDIA وفي مسارات Python — فكلاهما يشغّل أوزان OpenAI Whisper نفسها، فالدقة متقاربة جدًا ويختلف أساسًا السرعة وطريقة التكامل.**',
    quickAnswerTop: {
      ar: {
        question: 'هل أستخدم whisper.cpp أم faster-whisper لتحويل الكلام إلى نص محليًا في 2026؟',
        answer:
          'يعتمد الاختيار على عتادك واحتياجات التكامل. على Apple Silicon يكون whisper.cpp مع Metal وCore ML الخيار الطبيعي لأن faster-whisper لا يملك واجهة Metal. وعلى بطاقات NVIDIA كان faster-whisper أسرع في الاختبارات المنشورة التي وجدناها (23 ضعف الزمن الفعلي مقابل 15 ضعفًا مع large-v3 على RTX 4070 Ti، اختبار طرف ثالث) وأسهل دمجًا في مسارات Python. وعلى المعالج وحده تتضارب النتائج المنشورة، فقِس بنفسك على تسجيلاتك.',
        bullets: [
          'Apple Silicon ← whisper.cpp مع Core ML / Metal؛ faster-whisper لا يملك واجهة Metal.',
          'NVIDIA GPU ← faster-whisper. اختبار طرف ثالث على RTX 4070 Ti مع large-v3: 23 ضعف الزمن الفعلي مقابل 15 ضعفًا لـwhisper.cpp CUDA.',
          'خط أنابيب Python ← faster-whisper. Python أصيل، إعداد بـ5 أسطر، VAD مدمج.',
          'مدمج / Raspberry Pi 5 ← whisper.cpp. ثنائي C نقي، لا يتطلب وقت تشغيل Python؛ tiny/base يعملان في الزمن الفعلي، وsmall للدُّفعات فقط.',
          'صوت الوقت الفعلي ← وضع stream في whisper.cpp أو خط أنابيب VAD في faster-whisper.',
          'نسخ دفعي ← faster-whisper. أفضل إنتاجية على GPU؛ معالجة دفعية غير متزامنة سهلة.',
          'دقة WER: يُتوقع أن تكون متقاربة جدًا — يستخدمان أوزان نموذج Whisper ذاتها (وقد يسبب التكميم وإعدادات فك الترميز فروقًا صغيرة).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'لماذا تحويل الكلام إلى نص محليًا؟', anchor: '#why-local-stt' },
      { label: 'أحجام نموذج Whisper', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: البديل الأسرع', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — منفذ C/C++', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp — أحدث إصدار وتحديثات', anchor: '#whats-new' },
      { label: 'faster-whisper — منفذ CTranslate2', anchor: '#faster-whisper' },
      { label: 'الحصول على ggml-base.bin عبر pip (إعداد Python)', anchor: '#install-ggml-pip' },
      { label: 'مقارنة مباشرة: جدول معايير الأداء', anchor: '#benchmarks' },
      { label: 'معيار مرجعي: أزمنة GPU مقابل CPU', anchor: '#reference-benchmark' },
      { label: 'إعداد النسخ في الوقت الفعلي', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp هو الخيار الطبيعي', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: faster-whisper متقدم في الاختبارات المنشورة', anchor: '#nvidia-gpu' },
      { label: 'وحدات NVIDIA القديمة (GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Whisper على Raspberry Pi 5', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp هو الخيار الطبيعي لتحويل الكلام إلى نص محليًا على Apple Silicon.** يستخدم المنفذ المكتوب بـC/C++ تقنيتي Core ML وApple Metal للتسريع، ويذكر ملف README أن مُرمِّز Core ML أسرع بأكثر من 3 أضعاف من التنفيذ على المعالج وحده (بحسب المطوّرين)، ولا يحتاج إلى Python.',
          '**كان faster-whisper أسرع على بطاقات NVIDIA في الاختبارات المنشورة التي وجدناها، ويناسب مسارات Python.** في اختبار README خفّض int8 استهلاك VRAM من 4708 MB (OpenAI Whisper بدقة fp16) إلى 2926 MB (large-v2 وRTX 3070 Ti، بحسب المطوّرين)؛ وقاس اختبار طرف ثالث على RTX 4070 Ti ما يعادل 23 ضعف الزمن الفعلي مقابل 15 ضعفًا لـwhisper.cpp CUDA (large-v3).',
          '**تستخدم كلتا الأداتين أوزان نموذج Whisper ذاتها من OpenAI.** لذلك يُفترض أن تكون الدقة متقاربة جدًا — يكمن الفرق أساسًا في أداء وقت التشغيل ومسار التكامل؛ ومع ذلك قد تنشأ فروق صغيرة في WER بسبب التكميم وإعدادات فك الترميز، ولم نقِسها.',
          '**يوفر Whisper large-v3 أفضل دقة بمعدل 2.5% WER بالإنجليزية.** بالنسبة لمعظم حالات الاستخدام الإنتاجية، يوفر Whisper small (3.4% WER، 2 جيجابايت RAM) أو medium (2.9% WER، 5 جيجابايت RAM) توازنًا أفضل بين السرعة والدقة.',
          '**النسخ في الوقت الفعلي ممكن مع كلتا الأداتين** — whisper.cpp عبر علامة `--stream`، وfaster-whisper عبر خط أنابيب VAD (الكشف عن نشاط الصوت) المدمج. يختلف مقدار تأخر النص عن الكلام الحي بحسب العتاد وحجم النموذج، ولم نقِسه.',
          '**يعمل whisper.cpp على CPU وMetal وCUDA وVulkan** — مما يجعله الخيار الأكثر عملية للاستخدام المدمج متعدد المنصات (Raspberry Pi، إعدادات GPU على Windows، خوادم ARM). يدعم faster-whisper CPU وCUDA فقط (بدون Metal على Mac).',
          '**لـRaspberry Pi وLinux المدمج، whisper.cpp tiny/base على CPU** هو السقف العملي — وتفيد تقارير المجتمع بأن tiny وbase يعملان بسرعة الزمن الفعلي أو قريبًا منه على Pi 5 (لم نقِس ذلك بأنفسنا). كلاهما يتناسب مع نحو 1 جيجابايت RAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**كلتا الأداتين:** تستندان إلى نموذج Whisper مفتوح المصدر من OpenAI (رخصة MIT). أوزان النموذج نفسها، فالدقة متقاربة — أوقات تشغيل مختلفة.',
          '**whisper.cpp:** مكتوب بلغة C/C++ من قِبَل Georgi Gerganov. يدعم CPU (AVX2/NEON) وCUDA وMetal (Apple) وVulkan. لا يتطلب Python.',
          '**faster-whisper:** مكتبة Python تستخدم CTranslate2. تدعم CPU (int8) وCUDA. لا دعم لـApple Metal.',
          '**أحجام نموذج Whisper:** tiny (39M)، وbase (74M)، وsmall (244M)، وmedium (769M)، وlarge-v3 (1.55B). جميعها بتنسيق ggml / CTranslate2.',
          '**أفضل نموذج لمعظم حالات الاستخدام:** Whisper small — 3.4% WER وحوالي 2 جيجابايت من الذاكرة؛ انتقل إلى medium أو large-v3 حين تكون الدقة أهم من السرعة.',
          '**NVIDIA GPU (large-v3، اختبار طرف ثالث، RTX 4070 Ti):** faster-whisper بـ23 ضعف الزمن الفعلي؛ whisper.cpp CUDA بـ15 ضعف الزمن الفعلي.',
          '**Apple Silicon:** يعمل whisper.cpp عبر Metal وCore ML (README: مُرمِّز Core ML أسرع بأكثر من 3 أضعاف من المعالج وحده)؛ faster-whisper لا يملك واجهة Metal. لم نجد معيارًا منشورًا لـlarge-v3 على M5 Pro.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: 'لماذا تحويل الكلام إلى نص محليًا؟',
        content:
          'تُحصّل خدمات STT السحابية (Google Speech-to-Text وAWS Transcribe وAzure Speech) رسومًا مقابل كل دقيقة صوتية — عادةً 0.006–0.024 دولار/دقيقة — وترسل الصوت إلى خوادم بعيدة. بالنسبة للتطبيقات الحساسة للخصوصية (الإملاء الطبي والتسجيلات القانونية ومقابلات الصحفيين والاجتماعات المؤسسية)، يتيح النسخ المحلي تجنّب إرسال الصوت إلى خدمة طرف ثالث.',
        items: [
          '**الخصوصية:** يمكن تشغيل كلتا الأداتين محليًا دون إرسال الصوت إلى خدمة سحابية، فلا يلزم أن يشارك أي مزوّد سحابي في عملية النسخ. تبقى التزامات حماية البيانات، مثل الأساس القانوني والتخزين الآمن، على عاتقك.',
          '**التكلفة:** لا رسوم لكل دقيقة. وفق أسعار القوائم الشائعة لـSTT السحابية (0.006–0.024 دولار/دقيقة؛ راجع الأسعار الحالية)، سيدفع مطوّر ينسخ 8 ساعات اجتماعات أسبوعيًا نحو 12–50 دولارًا شهريًا، وهي تكلفة يتجنبها النسخ المحلي (دون احتساب العتاد والكهرباء).',
          '**بدون اتصال:** يعمل على الطائرات وفي المنشآت الآمنة والمناطق دون إنترنت موثوق. لا إدارة لمفاتيح API.',
          '**زمن الاستجابة:** لا ذهاب وإياب لرفع/تنزيل البيانات. لواجهات الصوت في الوقت الفعلي، قد تقلل المعالجة المحلية زمن استجابة STT مقارنةً بالذهاب والإياب إلى السحابة؛ ويعتمد مقدار الفرق على شبكتك وعتادك.',
          '**التخصيص:** ضبط دقيق على المفردات الخاصة بالمجال. شغّل أي حجم نموذج يناسب جهازك.',
          '**التكامل مع Home Assistant:** يمكن تشغيل Whisper محليًا دون إرسال الصوت إلى خدمة سحابية، بحيث يمكن أن تبقى كلمات التنبيه والأوامر الصوتية داخل شبكتك المنزلية. راجع [Whisper المحلي في Home Assistant ←](/ar/smart-home/local-whisper-home-assistant) لإعداد الإضافة التي تحل محل STT السحابية كليًا.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'أحجام نموذج Whisper — الأساس لكلتا الأداتين',
        content:
          'تستخدم كلٌّ من whisper.cpp وfaster-whisper أوزان نموذج Whisper ذاتها، المحوَّلة إلى تنسيقاتها المعنية (GGML لـwhisper.cpp، وCTranslate2 لـfaster-whisper). اختر حجم النموذج بناءً على ميزانية VRAM/RAM ومتطلبات الدقة لديك.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ar.webp',
          imageCaption: 'أحجام نماذج Whisper التي يشترك فيها whisper.cpp وfaster-whisper، من tiny إلى large-v3.',
          imageAlt: 'ملصق «أحجام نماذج Whisper: السرعة مقابل الدقة»: tiny أسرع بنحو 10 أضعاف من large، وlarge-v3 الأبطأ والأدق، والسرعات من README الخاص بـOpenAI على A100',
        columns: ['النموذج', 'المعاملات', 'VRAM / RAM', 'WER إنجليزي', 'السرعة النسبية (vs large)'],
        rows: [
          {
            'النموذج': 'tiny',
            'المعاملات': '39M',
            'VRAM / RAM': '~1 GB',
            'WER إنجليزي': '7.6%',
            'السرعة النسبية (vs large)': '~10×',
          },
          {
            'النموذج': 'base',
            'المعاملات': '74M',
            'VRAM / RAM': '~1 GB',
            'WER إنجليزي': '5.0%',
            'السرعة النسبية (vs large)': '~7×',
          },
          {
            'النموذج': 'small',
            'المعاملات': '244M',
            'VRAM / RAM': '~2 GB',
            'WER إنجليزي': '3.4%',
            'السرعة النسبية (vs large)': '~4×',
          },
          {
            'النموذج': 'medium',
            'المعاملات': '769M',
            'VRAM / RAM': '~5 GB',
            'WER إنجليزي': '2.9%',
            'السرعة النسبية (vs large)': '~2×',
          },
          {
            'النموذج': 'large-v3',
            'المعاملات': '1.55B',
            'VRAM / RAM': '~10 GB',
            'WER إنجليزي': '2.5%',
            'السرعة النسبية (vs large)': '1× (المرجع)',
          },
          {
            'النموذج': 'distil-large-v3',
            'المعاملات': '~756M',
            'VRAM / RAM': '~4 GB',
            'WER إنجليزي': '~2.6%',
            'السرعة النسبية (vs large)': '~6.3×',
          },
        ],
        note: 'WER (معدل خطأ الكلمات)؛ الأقل أفضل. قيم tiny وbase وsmall وmedium من ورقة Whisper (Radford وآخرون، 2022، الملحق D.1.1، LibriSpeech test-clean، فك الترميز الجشع). لا تغطي الورقة large-v3 ولا distil-large-v3، لذا فقيمهما تقريبية وغير قابلة للمقارنة المباشرة. السرعات النسبية هي القيم التي نشرتها OpenAI في README الخاص بـWhisper، مقيسة على A100 بالنسبة إلى نموذج large (بحسب المطوّرين)؛ وتختلف السرعة الفعلية باختلاف العتاد. وفق بطاقة النموذج، distil-large-v3 أسرع بـ6.3 أضعاف من large-v3.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: البديل الأسرع',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3) هو نسخة مُقطَّرة من large-v3 بمعاملات أقل بنسبة ~50%، تعمل بسرعة أعلى 6.3 أضعاف مع الحفاظ على WER ضمن ~1% من الأصل.** إنه الخيار الصحيح حين تكون سرعة النسخ أهم من استخلاص آخر جزء من الدقة. يعمل distil-large-v3 مع faster-whisper (دعم أصيل لـCTranslate2) وwhisper.cpp (عبر تحويل تنسيق GGML)، مما يجعله متكاملًا مع أي وقت تشغيل تستخدمه بالفعل.',
        items: [
          '**المعاملات:** ~756M — تقريبًا نصف 1.55B لـlarge-v3، يتناسب مع ~4 جيجابايت VRAM بدلًا من ~10 جيجابايت.',
          '**السرعة:** أسرع بـ6.3 أضعاف من large-v3 وفق بطاقة النموذج (زمن استجابة نسبي لا معامل زمن فعلي)، مع WER ضمن نحو 1% من large-v3 على الصوت الطويل.',
          '**WER:** ~2.6% بالإنجليزية — أعلى بـ~0.1% فقط من 2.5% لـlarge-v3. في الممارسة العملية قد يصعب ملاحظة الفرق في الكلام الطبيعي، لكننا لم نختبر ذلك.',
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
          '**ميزة Apple Silicon:** يصدّر whisper.cpp النماذج بصيغة Core ML فيتيح الاستدلال على Apple Neural Engine. ويذكر README أن مُرمِّز Core ML أسرع بأكثر من 3 أضعاف من التنفيذ على المعالج وحده (بحسب المطوّرين).',
          '**التثبيت:** استنسخ المستودع، شغّل `make` (أو `cmake`). تتوفر ثنائيات مُجمَّعة مسبقًا للمنصات الشائعة. لا اعتماد على Python.',
          '**تنزيل النموذج:** `bash ./models/download-ggml-model.sh base.en` — ينزّل ملف النموذج بتنسيق GGML (~142 ميغابايت لـbase).',
          '**مثال CLI:** `./main -m models/ggml-base.bin -f audio.wav` — ينسخ ملف WAV إلى الإخراج القياسي. أضف `-l ar` للعربية.',
          '**وضع stream في الوقت الفعلي:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — ينسخ من الميكروفون بأجزاء من 3 ثوانٍ.',
          '**غلاف Python:** يوفر pywhispercpp ارتباط Python لـwhisper.cpp، مما يتيح الاستخدام في خطوط أنابيب Python دون التضحية بتسريع Metal.',
          '**VAD:** يدعم whisper.cpp اختياريًا الكشف عن نشاط الصوت Silero عبر `--vad` في `whisper-cli` (ويتطلب تنزيل نموذج VAD منفصل). ولا يزال وضع stream يتطلب ضبط معاملات `--step` و`--length` لحالة الاستخدام.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp — أحدث إصدار وتحديثات',
        content:
          '**أحدث إصدار من whisper.cpp هو v1.9.5، الصادر في 6 أكتوبر 2026.** يُزامن مكتبة ggml المضمَّنة مع v0.26.0 (أعمال على الواجهات الخلفية CUDA وVulkan وMetal وSYCL وOpenCL ونوى CPU)، ويضيف إصلاحات لـWhisper مثل استدعاء إلغاء أثناء اكتشاف اللغة وإصلاح تجاوز عدد صحيح في إزاحات المقاطع المتوازية. كما أصبح لدى whisper.cpp حزمة Debian رسمية (sid) (`whisper.cpp`، `libwhisper-dev`، `libwhisper1`)، إلى جانب حزمة Snap غير الرسمية. لا يزال أحدث إصدار موسوم من faster-whisper هو v1.2.1 (31 أكتوبر 2025)، لكن المستودع يُصان بنشاط: آخر التزام (commit) في 2 نوفمبر 2026 (تم التحقق في 3 نوفمبر 2026). لا يزال كلا وقتَي التشغيل يحمّلان أوزان OpenAI Whisper نفسها؛ ولا علم لنا بفئة نماذج جديدة غيّرت دقة النسخ في 2026.',
        items: [
          '**whisper.cpp v1.9.5 (6 أكتوبر 2026):** مزامنة ggml مع v0.26.0 (تحديثات نوى CUDA وVulkan وMetal وSYCL وOpenCL وWebGPU وCPU)، وإضافة استدعاء إلغاء أثناء اكتشاف اللغة، وإصلاح تجاوز عدد صحيح في إزاحات المقاطع المتوازية، وجعل واجهة CLI تُرجع رمز الخطأ الصحيح عند فشل ملف.',
          '**whisper.cpp v1.9.4 (11 سبتمبر 2026):** يُرجع الخادم الآن اللغة المكتشفة، ويُستدعى استدعاء المُرمِّز قبل الاكتشاف التلقائي للغة، وأُضيف Windows on ARM إلى مهمة الإصدار.',
          '**whisper.cpp v1.9.3 (20 أغسطس 2026):** مزامنة ggml مع v0.20.2، وتحسينات أداء عبر جميع الواجهات الخلفية، ودعم تكميم Metal TQ2_0، ونوى CUDA/SYCL مدمجة، وإصلاحات لـARM/WASI.',
          '**whisper.cpp من v1.9.0 إلى v1.9.2 (يونيو-أغسطس 2026):** إصدارات وسيطة ضمن سلسلة مزامنة ggml نفسها قبل v1.9.3.',
          '**whisper.cpp v1.8.6 (2 يونيو 2026):** إعادة تنفيذ `ffmpeg-transcode` لفك تشفير FFmpeg الاختياري بوضوح أكبر للصوت المضغوط (MP3، M4A) إضافةً إلى إصلاح لمسار أمثلة CI.',
          '**whisper.cpp v1.8.5 (مايو 2026):** تحسينات على VAD المتدفق (الكشف عن نشاط الصوت)، وإصلاحات لتسريب معاملات الخادم وطوابع توقيت الرموز، وإصلاحات لتسرب الذاكرة في ارتباطات Ruby وVAD.',
          '**whisper.cpp v1.8.4 (19 مارس 2026):** أحدث مزامنة لـ`ggml` مع مكاسب أداء واسعة، وراية جديدة `-g` / `--gpu-device` (واختيار جهاز `GGML_CUDA`) لاختيار GPU، وإصلاحات لالتفاف مقاطع UTF-8.',
          '**VAD الأصيل مدمج الآن في whisper.cpp.** أضافت الإصدارات الأخيرة مسارًا أصيلًا للكشف عن نشاط الصوت، مما يقلّص ميزةً طالما تمتّع بها faster-whisper — وإن ظل تكامل Silero VAD في faster-whisper أجهز للاستخدام.',
          '**faster-whisper v1.2.1 (31 أكتوبر 2025):** أحدث إصدار موسوم؛ يثبّته `pip install faster-whisper`. لا يوجد إصدار موسوم في 2026، لكن الفرع الرئيسي نشط: آخر التزام (2 نوفمبر 2026، تم التحقق في 3 نوفمبر) يصلح CI، والتزامات 16 أكتوبر 2026 تضيف تحققًا من المدخلات، مثل خطأ للغات التي لا يدعمها النموذج. أضاف v1.2.0 (أغسطس 2025) دعم distil-large-v3.5.',
          '**CTranslate2 v4.8.4 (25 أكتوبر 2026):** أصدر محرك الاستدلال الذي يقوم عليه faster-whisper نسخة جديدة. تضيف حمايةً من تجاوز الأعداد الصحيحة عند حساب أحجام التنسورات، وإصلاحات لـConv1D على CPU ولتجاوز مقياس تكميم INT8 في صفوف الأوزان الصغيرة جدًا، وتنفيذًا تجريبيًا لتحويل النص إلى كلام دون اتصال (Drama 3). وكانت النسخة السابقة v4.8.3 (13 أكتوبر 2026) قد أضافت إصلاحات ROCm على Windows، وتحصينًا عند تحميل النموذج، وإصلاح قسمة على صفر في `align()` الخاصة بـWhisper عندما لا تحتوي النافذة على إطارات. ثم صدر v4.8.5 في 2 نوفمبر 2026 (تم التحقق في 3 نوفمبر 2026) بإصلاحات لدقة الانتباه في CUDA ودليل بناء لـWindows ROCm/HIP.',
          '**لا يوجد نموذج Whisper جديد بفئة دقة أعلى في 2026.** أحدث أوزان OpenAI متعددة اللغات تبقى large-v3-turbo (أكتوبر 2024؛ 809 مليون معامل، مُفكِّك مخفَّض من 32 إلى 4 طبقات، ترخيص MIT)، وهو يقايض خسارة صغيرة في الجودة بسرعة أعلى بكثير ويعمل في الأداتين. يبقى distil-large-v3 خيار السرعة للإنجليزية فقط. على حد علمنا، تحديثات وقتَي التشغيل تغييرات في بيئة التشغيل والأدوات، لا في الدقة.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — منفذ CTranslate2',
        content:
          '**faster-whisper (من SYSTRAN) هي مكتبة Python تُعيد تنفيذ استدلال Whisper باستخدام CTranslate2 — محرك استدلال C++ عالي الكفاءة يدعم تكميم int8، مما يقلل استخدام VRAM ويزيد الإنتاجية.** على بطاقات NVIDIA GPU، يُعدّ faster-whisper من أسرع تطبيقات Whisper المحلية في الاختبارات المنشورة.',
        items: [
          '**دعم المنصات:** CPU (تكميم int8) وNVIDIA CUDA GPU. لا دعم لـApple Metal — يعمل على CPU فقط على Mac.',
          '**ميزة int8:** خفّض تكميم int8 في CTranslate2 استهلاك VRAM بنحو الثلث في اختبار README الخاص بـfaster-whisper (4525 MB بدقة fp16 مقابل 2926 MB بدقة int8، large-v2) مع تحسن طفيف في السرعة (1m03s مقابل 59s)؛ وتأثيره في WER عادةً ضئيل.',
          '**التثبيت:** `pip install faster-whisper` — لا تجميع مطلوب (Python 3.9+). يتطلب استخدام GPU مكتبة NVIDIA cuBLAS لـCUDA 12 وcuDNN 9؛ أما إعدادات CUDA 11 / cuDNN 8 القديمة فيجب أن تثبّت إصدارًا أقدم من `ctranslate2` (3.24.0).',
          '**VAD مدمج:** يتضمن faster-whisper تكاملًا مع Silero VAD، الذي يتخطى تلقائيًا أجزاء الصوت الصامتة — أمر بالغ الأهمية لخطوط أنابيب النسخ في الوقت الفعلي.',
          '**Python أصيل:** تجعل واجهة برمجة Python المباشرة من السهل التكامل مع النماذج اللغوية الكبيرة ومكتبات معالجة الصوت وأطر الويب.',
          '**السرعة:** في اختبار README (large-v2 وRTX 3070 Ti وملف مدته 13 دقيقة) استغرق int8 مدة 59 ثانية، واستغرق int8 بحجم دفعة 8 مدة 16 ثانية فقط؛ وقاس اختبار طرف ثالث على RTX 4070 Ti ما يعادل 23 ضعف الزمن الفعلي مع large-v3.',
          '**المعالجة الدفعية:** يدعم faster-whisper الاستدلال الدفعي لمعالجة أرشيفات صوتية كبيرة بكفاءة.',
          '**القيد:** لا يدعم Metal على Mac — يعمل على المعالج وحده في Apple Silicon. لم نجد معيارًا منشورًا يقارن faster-whisper بـwhisper.cpp على Apple Silicon.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'الحصول على ggml-base.bin عبر pip (إعداد Python)',
        content:
          '**لاستخدام ggml-base.bin من Python عبر pip، ثبّت ارتباط `pywhispercpp` — `pip install pywhispercpp` — ثم حمّل `Model("base")`، الذي ينزّل `ggml-base.bin` تلقائيًا في أول تشغيل.** لا يوجد `pip install whisper.cpp`؛ فـpywhispercpp هو غلاف pip حول محرك whisper.cpp بلغة C/C++، وهو يحافظ على تسريع Metal وCUDA. يُنزَّل ملف نموذج GGML (`ggml-base.bin`، ~142 ميغابايت) بشكل منفصل من Hugging Face ويُخزَّن محليًا — يوفّر حزمة pip محرك الاستدلال، لا الأوزان.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'شغّل `pip install pywhispercpp`، ثم يجلب `Model("base")` في Python ملف ggml-base.bin ويخزّنه تلقائيًا في أول استخدام.',
          },
          {
            type: 'plain-terms',
            text: 'يثبّت pip البرنامج (pywhispercpp)؛ أما ملف النموذج ggml-base.bin فهو تنزيل منفصل بحجم ~142 ميغابايت يحدث أول مرة تحمّل فيها نموذج «base» — أو تجلبه يدويًا عبر السكربت download-ggml-model.sh.',
          },
        ],
        items: [
          '**ثبّت الارتباط:** `pip install pywhispercpp`. لتسريع NVIDIA CUDA، ابنِ عبر `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`.',
          '**تنزيل ggml-base.bin تلقائيًا:** `from pywhispercpp.model import Model` ثم `model = Model("base")` ينزّل `ggml-base.bin` من Hugging Face (`ggerganov/whisper.cpp`) في أول تشغيل ويخزّنه. استخدم `"base.en"` للنسخة الإنجليزية فقط.',
          '**تنزيل يدوي (مسار CLI، دون pip):** من مستودع whisper.cpp مستنسخ، يحفظ `bash ./models/download-ggml-model.sh base` الملف في `models/ggml-base.bin` — وهو الملف ذاته الذي يجلبه pywhispercpp.',
          '**تنزيل مباشر:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin` يجلب النموذج دون سكربت. استبدل `base` بـ`tiny` أو `small` أو `medium` أو `large-v3`.',
          '**لا تخلط بين الحزم:** `pip install openai-whisper` يثبّت Whisper الأصلي من OpenAI بـPyTorch (يستخدم نقاط تحقق `.pt`، لا `ggml-base.bin`). و`pip install faster-whisper` يستخدم تنسيق CTranslate2. وحده `pywhispercpp` يستهلك ملفات GGML من نوع `ggml-*.bin`.',
          '**أين يوجد الملف:** يخزّن pywhispercpp نماذج GGML المنزّلة في ذاكرة التخزين المؤقت للوحدة (أو مسار تمرّره عبر `Model("base", models_dir="...")`)، بحيث يُعاد استخدام `ggml-base.bin` ذاته عبر عمليات التشغيل — دون إعادة تنزيل.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'مقارنة مباشرة: جدول معايير الأداء',
        content:
          'يذكر كل صف مصدره وعتاده. تُعرض السرعة بمضاعفات الزمن الفعلي (10× تعني نسخ 60 دقيقة من الصوت في 6 دقائق). صفوف «طرف ثالث» من [مقارنة x2q.net للواجهات الخلفية](https://www.x2q.net/post/whisper-backend-shootout/) (RTX 4070 Ti وIntel Core i5-13400F، وlarge-v3، ومكالمات هاتفية بالدنماركية، يونيو 2026)؛ وصفوف «README» من README الخاص بـfaster-whisper (RTX 3070 Ti وlarge-v2). يختلف العتاد والصوت بين المصادر، فاقرأ الصفوف كمؤشرات لا كمقارنة مباشرة على جهاز واحد.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-ar.webp',
          imageCaption: 'مقارنة whisper.cpp وfaster-whisper حسب المنصة: Apple Silicon وNVIDIA GPU والمعالج.',
          imageAlt: 'ملصق «whisper.cpp مقابل faster-whisper حسب المنصة»: Apple Silicon مع whisper.cpp (Metal)، وكلاهما يعمل بـCUDA على NVIDIA GPU، والنتائج المنشورة على المعالج متضاربة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'في اختبار طرف ثالث على RTX 4070 Ti شغّل faster-whisper النموذج large-v3 بـ23 ضعف الزمن الفعلي مقابل 15 ضعفًا لـwhisper.cpp CUDA؛ وعلى Apple Silicon وحده whisper.cpp يستطيع استخدام Metal.',
          },
          {
            type: 'plain-terms',
            text: 'اختر whisper.cpp على Mac حيث يستخدم Metal وCore ML، واختر faster-whisper على Windows/Linux مع NVIDIA GPU حيث كان أسرع في الاختبارات المنشورة واستهلك VRAM أقل مع int8 (2926 MB مقابل 4127 MB لـwhisper.cpp بدقة fp16 في اختبار README).',
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
            'المقياس': 'السرعة — RTX 4070 Ti، large-v3 (طرف ثالث)',
            'whisper.cpp (large-v3)': '~15 ضعف الزمن الفعلي',
            'faster-whisper (large-v3)': '~23 ضعف الزمن الفعلي ✓',
          },
          {
            'المقياس': 'السرعة — Apple Silicon، large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (لا معيار منشور)',
            'faster-whisper (large-v3)': 'المعالج فقط (لا معيار منشور)',
          },
          {
            'المقياس': 'السرعة — CPU x86، large-v3 (طرف ثالث)',
            'whisper.cpp (large-v3)': '~15 ضعفًا ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2 ضعف (i5-13400F)',
          },
          {
            'المقياس': 'VRAM — large-v2، RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16، Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            'المقياس': 'تكامل Python',
            'whisper.cpp (large-v3)': 'يتطلب غلافًا (pywhispercpp)',
            'faster-whisper (large-v3)': 'أصيل ✓',
          },
          {
            'المقياس': 'VAD (الكشف عن الصمت)',
            'whisper.cpp (large-v3)': 'اختياري (--vad + نموذج Silero)',
            'faster-whisper (large-v3)': 'مدمج (Silero VAD) ✓',
          },
          {
            'المقياس': 'بث في الوقت الفعلي',
            'whisper.cpp (large-v3)': 'نعم (علامة --stream) ✓',
            'faster-whisper (large-v3)': 'نعم (خط أنابيب VAD)',
          },
          {
            'المقياس': 'دقة WER (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (الأوزان نفسها)',
            'faster-whisper (large-v3)': '2.5% (الأوزان نفسها)',
          },
          {
            'المقياس': 'الاعتماد على Python',
            'whisper.cpp (large-v3)': 'لا شيء ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            'المقياس': 'Raspberry Pi / مدمج',
            'whisper.cpp (large-v3)': 'نعم — ثنائي C ✓',
            'faster-whisper (large-v3)': 'ممكن — يتطلب بيئة Python',
          },
          {
            'المقياس': 'تنسيقات الإخراج',
            'whisper.cpp (large-v3)': 'SRT، VTT، JSON، CSV، txt',
            'faster-whisper (large-v3)': 'كائنات Python (start، end، text)',
          },
        ],
        note: 'يكتب whisper.cpp الإخراج مباشرةً بتنسيقات الترجمة والنسخ القياسية (SRT، VTT، JSON، CSV، txt) — مثالي لسير عمل الترجمات حيث تحتاج إلى ملف على القرص دون كود إضافي. يُعيد faster-whisper مولّد Python من كائنات الأجزاء بسمات `start` و`end` و`text` — مثالي لسلسلة خطوط أنابيب النماذج اللغوية الكبيرة، حيث تمرر نص الجزء مباشرةً إلى نموذج لاحق دون كتابة ملفات وسيطة. لتوليد الترجمات، whisper.cpp أبسط. لخطوط الأنابيب التي تعالج الأجزاء برمجيًا، faster-whisper أبسط.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: 'معيار مرجعي: أزمنة GPU مقابل CPU من faster-whisper',
        content:
          '**ينشر مشروع faster-whisper أزمنته الخاصة على ملف صوتي مدته 13 دقيقة — وتُظهر أن whisper.cpp مع Flash Attention يعادل faster-whisper بدقة fp16 على GPU، بينما تمنح المعالجة الدفعية وint8 الأفضلية لـfaster-whisper.** الأرقام أدناه مأخوذة من README الخاص بـfaster-whisper (large-v2 على RTX 3070 Ti بذاكرة 8 GB مع CUDA 12.4 لصفوف GPU؛ ونموذج small على Intel Core i7-12700K بثمانية خيوط لصفوف CPU؛ وحجم beam يساوي 5). هذه ليست قياساتنا نحن، وتستخدم عتادًا ونماذج مختلفة عن أرقام large-v3 أعلاه.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'في معيار README الخاص بـfaster-whisper يتعادل whisper.cpp مع Flash Attention (1m05s) وfaster-whisper بدقة fp16 (1m03s) تقريبًا على GPU؛ أما faster-whisper بدقة int8 مع المعالجة الدفعية فينهي الملف نفسه (13 دقيقة) في 16 ثانية.',
          },
        ],
        columns: ['الإعداد', 'الدقة العددية', 'الزمن', 'VRAM / RAM'],
        rows: [
          {
            'الإعداد': 'GPU · OpenAI Whisper',
            'الدقة العددية': 'fp16',
            'الزمن': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            'الإعداد': 'GPU · whisper.cpp (Flash Attn)',
            'الدقة العددية': 'fp16',
            'الزمن': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            'الإعداد': 'GPU · faster-whisper',
            'الدقة العددية': 'fp16',
            'الزمن': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            'الإعداد': 'GPU · faster-whisper',
            'الدقة العددية': 'int8',
            'الزمن': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            'الإعداد': 'GPU · faster-whisper, دفعة 8',
            'الدقة العددية': 'int8',
            'الزمن': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            'الإعداد': 'CPU · OpenAI Whisper',
            'الدقة العددية': 'fp32',
            'الزمن': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            'الإعداد': 'CPU · whisper.cpp',
            'الدقة العددية': 'fp32',
            'الزمن': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            'الإعداد': 'CPU · faster-whisper',
            'الدقة العددية': 'int8',
            'الزمن': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            'الإعداد': 'CPU · faster-whisper, دفعة 8',
            'الدقة العددية': 'int8',
            'الزمن': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: 'اقرأ هذا بجوار جدول المقارنة المباشرة: في هذا الإعداد تتقارب سرعة GPU بدقة fp16 لمسار واحد بين الأداتين. أما مزايا faster-whisper الدائمة فهي توفير ذاكرة int8 (2.9 GB مقابل 4.1–4.5 GB بدقة fp16) والاستدلال الدفعي (16 ثانية مقابل 59 ثانية). وعلى CPU يتقارب whisper.cpp بدقة fp32 وfaster-whisper بدقة int8 ضمن نحو 25% بدون معالجة دفعية. تعرض صفوف OpenAI Whisper في README خط الأساس: 2m23s على GPU (fp16، 4708 MB) و6m58s على CPU (fp32، 2335 MB)، مقابل 59s و1m42s لـfaster-whisper int8.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: 'إعداد النسخ في الوقت الفعلي',
        content:
          '**ينسخ النسخ في الوقت الفعلي الصوتَ بأجزاء فور وصوله من الميكروفون، منتجًا نصًا مع تأخير قصير خلف الكلام.** كلتا الأداتين تدعم هذا، لكن مع موازنات مختلفة.',
        items: [
          '**وضع stream في whisper.cpp:** شغّل `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`. يعالج أجزاء من 3 ثوانٍ؛ يختلف التأخير بحسب العتاد والنموذج ولم نقِسه. لا Python مطلوب.',
          '**خط أنابيب VAD في faster-whisper:** استخدم `vad_filter=True` في `model.transcribe()`. يقسّم Silero VAD الصوت تلقائيًا عند حدود الصمت — أجزاء أكثر طبيعية من النوافذ ذات الطول الثابت.',
          '**زمن الاستجابة:** يختلف بحسب العتاد وحجم النموذج ولم نقِسه. عادةً تستجيب النماذج الأصغر مثل tiny أسرع، لكن بمعدل WER أعلى.',
          '**اختيار النموذج للوقت الفعلي:** small أو base هو النقطة المثلى العملية — سريع بما يكفي لمواكبة الكلام، ودقيق بما يكفي للصوت النظيف. تجنب large-v3 للوقت الفعلي ما لم يكن لديك GPU مخصص.',
          '**إدخال الميكروفون:** يقرأ whisper.cpp الصوت الخام عبر SDL2 أو portaudio. يقرأ faster-whisper مصفوفات الصوت من أي مكتبة صوت Python (sounddevice، وpyaudio، وsoundfile).',
          '**الاستقرار:** قد ينتج وضع stream في whisper.cpp رموزًا متكررة ("هلوسة" لحشوات قصيرة) عند الصمت. اقمعها بـ`--suppress-blank` و`--no-speech-threshold`.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp هو الخيار الطبيعي',
        content:
          '**على أجهزة Mac من M1 إلى M5، يكون whisper.cpp مع تسريع Core ML / Metal الأداة الطبيعية، لأن faster-whisper لا يملك واجهة Metal ويعمل على المعالج وحده في Mac.** يذكر README الخاص بـwhisper.cpp أن مُرمِّز Core ML أسرع بأكثر من 3 أضعاف من التنفيذ على المعالج وحده (بحسب المطوّرين). لم نجد معيارًا منشورًا لـlarge-v3 على M5 Pro، لذا لا يذكر هذا الدليل معامل زمن فعلي لشرائح Apple.',
        items: [
          '**تصدير Core ML:** شغّل `./models/generate-coreml-model.sh large-v3` لتصدير المشفّر بتنسيق Core ML. هذا يُفرّغ استدلال المشفّر على Apple Neural Engine.',
          '**المعايير:** يجمع مشروع whisper.cpp القياسات في [نقاش المعايير](https://github.com/ggml-org/whisper.cpp/discussions/89) (أزمنة المُرمِّز؛ بلا مدخلات M5 عند مراجعتنا). لم نجد معيارًا منشورًا لـlarge-v3 على M5 Pro، لذا لا نذكر معامل زمن فعلي لشرائح Apple.',
          '**قِس جهاز Mac الخاص بك:** يتضمن whisper.cpp أداة `whisper-bench` التي تقيس زمن المُرمِّز؛ أو احسب زمن معالجة ملف حقيقي من البداية إلى النهاية. تختلف النتائج بحسب الشريحة وحجم النموذج والتكميم.',
          '**الذاكرة:** الذاكرة الموحدة تعني عدم وجود VRAM منفصلة. يذكر README الخاص بـwhisper.cpp نحو 3.9 جيجابايت من الذاكرة للنموذج large، ما يترك متسعًا على Mac بسعة 16 جيجابايت لعمليات أخرى.',
          '**faster-whisper على Mac:** المعالج فقط (int8). يصلح للنسخ على دفعات، لكن لا يوجد له مسار Metal ولم نجد معيارًا يقارنه بـwhisper.cpp على Apple Silicon.',
          '**التوصية:** استخدم whisper.cpp لمعظم أعمال تحويل الكلام إلى نص على Mac. أضف pywhispercpp إذا احتجت إلى تكامل مع Python مع الإبقاء على تسريع Metal.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: faster-whisper متقدم في الاختبارات المنشورة',
        content:
          '**على Windows وLinux مع بطاقات NVIDIA، كان faster-whisper الأداة الأسرع في الاختبارات المنشورة التي وجدناها.** في اختبار طرف ثالث على RTX 4070 Ti (large-v3، يونيو 2026) عمل بـ23 ضعف الزمن الفعلي مقابل 15 ضعفًا لـwhisper.cpp CUDA؛ وفي اختبار README الخاص بـfaster-whisper (large-v2 وRTX 3070 Ti) كان الاثنان متقاربين تقريبًا في وضع التدفق الواحد (1m03s مقابل 1m05s)، ومع int8 والمعالجة على دفعات تقدّم faster-whisper.',
        items: [
          '**RTX 4070 Ti (12 جيجابايت)، large-v3، اختبار طرف ثالث:** faster-whisper بـ23 ضعف الزمن الفعلي (large-v3-turbo: 56 ضعفًا)؛ whisper.cpp CUDA بـ15 ضعفًا (large-v3-turbo: 40 ضعفًا).',
          '**RTX 3070 Ti (8 جيجابايت)، large-v2، README الخاص بـfaster-whisper:** استغرق ملف مدته 13 دقيقة 1m03s بدقة fp16، و59s بدقة int8 (2926 MB من VRAM)، و16s بدقة int8 مع دفعة بحجم 8.',
          '**بطاقات أخرى (RTX 3060 وRTX 4060):** لم نجد معيارًا منشورًا لـlarge-v3 لهذه البطاقات ولا نذكر رقم سرعة لها؛ ويظل رقم VRAM بدقة int8 أعلاه هو الفحص الأساسي للملاءمة.',
          '**int8 مقابل float16:** في اختبار README استهلك int8 نحو ثلث VRAM أقل (2926 MB مقابل 4525 MB) وانتهى أسرع قليلًا (59s مقابل 1m03s)، مع فقدان دقة ضئيل عادةً. و`compute_type="int8"` إعداد افتراضي معقول على NVIDIA.',
          '**المعالجة الدفعية:** يتيح معامل `batched=True` في faster-whisper المعالجة المتوازية لملفات صوتية متعددة، مما يعظّم استخدام GPU لمهام النسخ الكبيرة.',
          '**التكامل في خط أنابيب Python:** يتكامل faster-whisper مباشرةً مع LangChain وHaystack وخطوط أنابيب Python المخصصة. لا حمل زائد للعمليات الفرعية مقارنةً بتغليف whisper.cpp.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: 'وحدات NVIDIA القديمة (GTX 970): يتراجع int8 إلى float32',
        content:
          '**على GTX 970 (معمارية Maxwell، قدرة حوسبة 5.2) يعمل faster-whisper على CUDA، لكن `compute_type="int8"` لا يمنحك int8 حقيقيًا — يحوّل CTranslate2 الأوزان إلى float32.** يربط جدول التكميم لديه كل وحدة بقدرة حوسبة 6.0 أو أقل بـfloat32 لأي نوع مطلوب، فلا ينطبق توفير VRAM ولا تسريع int8 المذكوران لبطاقات RTX.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'على GTX 970 (قدرة حوسبة 5.2) يعمل faster-whisper على CUDA بصيغة float32 فقط — يُحوَّل نوع الحساب int8 المطلوب تلقائيًا.',
          },
          {
            type: 'plain-terms',
            text: 'بطاقة GTX 970 أقدم من أن تدعم int8 على GPU. ما زالت تعمل، لكن بلا توفير في الذاكرة، فالتزم بنماذج tiny أو base أو small ضمن 4 GB.',
          },
        ],
        items: [
          '**ما الذي ما زال يعمل:** تدعم الملفات التنفيذية الجاهزة لـCTranslate2 وحدات NVIDIA بقدرة حوسبة 3.5 فأكثر، فيمكن لـGTX 970 (5.2) تشغيل faster-whisper على CUDA، شرط أن تتطابق مكتبات CUDA وcuDNN المثبتة مع الإصدار (راجع المشكلات الشائعة).',
          '**أين يعمل int8 على GPU:** يتطلب int8 قدرة حوسبة 7.0 فأكثر (Volta وسلسلة RTX 20 فما بعدها) أو 6.1 تحديدًا (GTX 1050 حتى 1080 Ti، int8_float32). تتراجع القدرات 6.0 و6.2 وما دونها إلى float32؛ ويتطلب float16 القدرة 7.0 فأكثر.',
          '**أثر ذلك على الذاكرة:** يخزّن float32 أربعة بايتات لكل معامل مقابل بايت واحد لـint8؛ وبحسب عدد المعاملات يحتاج large-v3 (1.55 مليار) إلى نحو 6 GB للأوزان وحدها — أكثر من 4 GB في GTX 970. يتسع small (244 مليون، نحو 1 GB بصيغة float32) بسهولة؛ أما medium (769 مليون، نحو 3 GB) فعلى الحد.',
          '**السرعة:** لم نختبر GTX 970، فلا توجد هنا قيمة مقيسة. توقّع إنتاجية float32 أقل بكثير من أرقام RTX 4070 Ti في هذا الدليل، وجرّب tiny وbase وsmall على صوتك أنت.',
          '**تحقق مما تدعمه بطاقتك:** تعرض `ctranslate2.get_supported_compute_types("cuda")` أنواع الحساب التي يقبلها CTranslate2 على بطاقتك.',
          '**البدائل:** يعمل int8 على CPU (`device="cpu", compute_type="int8"`) على أي معالج x86 حديث، وتُعدّ نماذج GGML المكمّمة في whisper.cpp (مثل `ggml-large-v3-q5_0.bin`، نحو 3–4 GB) الطريقة المعتادة لإدخال نماذج أكبر في 4 GB — تحقق من بناء CUDA أو Vulkan على بطاقتك.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Whisper على Raspberry Pi 5: tiny وbase وsmall',
        content:
          '**على Raspberry Pi 5، يشغّل whisper.cpp النموذجين tiny وbase في الزمن الفعلي للنسخ الحي، بينما يعمل نموذج small دون الزمن الفعلي ويُفضّل قصره على مهام الدُّفعات.** لا يملك معالج Pi 5 رباعي النوى Cortex-A76 مسار GPU قابلًا للاستخدام مع Whisper، لذا تجري كل عمليات الاستدلال على المعالج (ARM NEON). استخدم نماذج GGML المكمَّمة (`ggml-*-q5_0.bin`) لتقليل استخدام الذاكرة وتسريع الاستدلال.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'على Raspberry Pi 5، يعمل نموذج small في whisper.cpp أبطأ من الزمن الفعلي بحسب تقارير المجتمع (للدُّفعات؛ لم نقِسه بأنفسنا)؛ أما tiny وbase فهما النموذجان اللذان تفيد التقارير بأنهما يجاريان الكلام الحي.',
          },
          {
            type: 'plain-terms',
            text: 'يستطيع Pi 5 نسخ الصوت الحي بنموذجَي Whisper من نوع tiny وbase، لكن نموذج small أثقل من أن يجاري الزمن الفعلي — استخدم small للملفات المسجّلة التي تعالجها في الخلفية، لا للميكروفون الحي.',
          },
        ],
        items: [
          '**Whisper small على Pi 5:** بحسب التقارير أبطأ من الزمن الفعلي على المعالج (لم نقِسه، فأي توقيت تقريبي فقط). دقيق عند 3.4% WER (ورقة Whisper، LibriSpeech test-clean) لكنه بطيء جدًا للترجمة الحية — استخدمه للنسخ الليلي/الدُّفعي.',
          '**Whisper base على Pi 5:** بحسب التقارير نحو الزمن الفعلي مع تعدد الخيوط (`-t 4`)؛ وتختلف النتيجة بحسب البناء والتبريد والصوت. نقطة التوازن العملية للنسخ الحي على Pi، مع WER مقبول قدره 5.0%.',
          '**Whisper tiny على Pi 5:** الخيار الأسرع، وتفيد التقارير عمومًا بأنه يلائم الاستخدام الحي، على حساب WER أعلى قدره 7.6%. الأفضل للتعرّف على كلمة التنبيه والأوامر القصيرة.',
          '**استخدم النماذج المكمَّمة:** `bash ./models/download-ggml-model.sh small-q5_0` يقلّص الذاكرة ويسرّع الاستدلال بخسارة دقة ضئيلة — أمر مهم على الذاكرة المشتركة في Pi 5.',
          '**faster-whisper على Pi 5:** قابل للتثبيت (`pip install faster-whisper`، CPU int8) ومنافس لمهام الدُّفعات، لكن ثنائي C الأخف في whisper.cpp هو الخيار المضمَّن الأكثر شيوعًا.',
          '**الحرارة:** يجهد النسخ المستمر معالج Pi 5 بشدة — استخدم تبريدًا نشطًا لتجنّب خفض التردد الحراري الذي يقوّض هذه الأرقام.',
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
            text: 'إذا كان لديك Mac فاختر whisper.cpp — فهو يستخدم Metal وCore ML اللذين لا يدعمهما faster-whisper. وإذا كان لديك NVIDIA GPU وتكتب بـPython فاختر faster-whisper — فقد كان أسرع في الاختبارات المنشورة واستهلك ذاكرة GPU أقل مع int8.',
          },
        ],
        columns: ['السيناريو', 'أفضل خيار', 'السبب'],
        rows: [
          {
            'السيناريو': 'Mac بـApple Silicon (أي طراز)',
            'أفضل خيار': 'whisper.cpp',
            'السبب': 'تسريع Metal / Core ML؛ faster-whisper لا يملك واجهة Metal',
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
            'أفضل خيار': 'جرّب الاثنين',
            'السبب': 'اختبارات CPU في README وطرف ثالث متضاربة؛ قِس',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** غلاف خط أنابيب Hugging Face Transformers يضيف دعم Flash Attention 2 لاستدلال GPU دفعي سريع على أجهزة NVIDIA؛ ويذكر ملف README تسريعًا كبيرًا (بحسب المطوّرين، ولم نقارنه بأنفسنا مع faster-whisper). الأفضل لـ: المعالجة الدفعية لأرشيفات صوتية كبيرة على بطاقات NVIDIA GPU. يتطلب GPU متوافق مع Flash Attention 2 (Ampere أو أحدث: RTX 3000+، A100، H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'المشكلات الشائعة والحلول',
        content: 'أكثر مشكلات الإعداد والتشغيل شيوعًا مع حلول مباشرة:',
        items: [
          '**عدم توافق إصدار CUDA:** تتطلب إصدارات faster-whisper الحالية cuBLAS لـCUDA 12 وcuDNN 9. إذا كنت عالقًا مع مكتبات أقدم فثبّت ctranslate2: `pip install --force-reinstall ctranslate2==4.4.0` (CUDA 12 مع cuDNN 8) أو `3.24.0` (CUDA 11 مع cuDNN 8). تحقق من إصدار CUDA بـ`nvcc --version`.',
          '**فشل تصدير نموذج Metal:** تأكد من تثبيت Xcode Command Line Tools — شغّل `xcode-select --install`. يتطلب سكريبت تصدير Core ML حزمة Python `coremltools`: `pip install coremltools`.',
          '**هلوسة عند الصمت:** قد تنتج كلتا الأداتين رموزًا متكررة لحشوات قصيرة على أجزاء الصوت الصامتة. استخدم `--no-speech-threshold 0.6` في وضع stream في whisper.cpp، أو `vad_filter=True` في `model.transcribe()` من faster-whisper لتخطي الأجزاء الصامتة تلقائيًا.',
          '**نفاد الذاكرة مع large-v3:** انتقل إلى تكميم int8 في faster-whisper (`compute_type="int8"`) — في اختبار README (large-v2) انخفض VRAM من نحو 4.5 جيجابايت (float16) إلى نحو 2.9 جيجابايت. وفي whisper.cpp استخدم النسخة المكمّمة من GGML (مثل `ggml-large-v3-q5_0.bin`) التي تخفض الذاكرة إلى ~3–4 جيجابايت.',
          '**إخراج مشوَّه لصوت غير إنجليزي:** لا تستخدم نسخ `.en` من النموذج (tiny.en، base.en) للكلام غير الإنجليزي — فهي إنجليزية فقط. استخدم النماذج متعددة اللغات (base، وsmall، وmedium، وlarge-v3) وحدد اللغة صراحةً: `-l ar` في whisper.cpp أو `language="ar"` في faster-whisper.',
          '**استدلال CPU بطيء:** تأكد من أن معالجك يدعم تعليمات AVX2 (المطلوبة للاستدلال المُحسَّن على CPU). تحقق بـ`grep avx2 /proc/cpuinfo` على Linux أو `sysctl machdep.cpu.features` على Mac. المعالجات دون AVX2 تعود إلى SIMD العام وستكون أبطأ بنسبة 2–3 أضعاف.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل توجد حزمة Debian أو apt لـ whisper.cpp؟',
            a: 'نعم — أصبح لدى whisper.cpp حزمة Debian رسمية الآن (حاليًا في sid)، توفّر الملف التنفيذي `whisper.cpp` بالإضافة إلى `libwhisper-dev` و`libwhisper1` للربط كمكتبة مشتركة. لم تصل بعد إلى إصدارات Debian المستقرة أو مستودعات Ubuntu الافتراضية، لذا على معظم الأنظمة ستحتاج إلى استخدام sid أو البناء من المصدر. تتوفر أيضًا حزمة Snap غير رسمية (`sudo snap install whisper-cpp`) لـ Debian 9 فما فوق وUbuntu.',
          },
          {
            q: 'كيف أتحقق من إصدار whisper.cpp المثبّت لديّ؟',
            a: 'شغّل الملف التنفيذي المُجمَّع بدون أي وسائط أو مع `--help` — سيُطبع الإصدار في سطر العنوان. يمكنك أيضًا التحقق من الالتزام (commit) الدقيق عبر `git describe --tags` داخل المستودع المستنسخ، أو مقارنة تاريخ البناء لديك بملاحظات الإصدارات على github.com/ggml-org/whisper.cpp/releases لمعرفة ما إذا كنت متأخرًا عن الإصدار الحالي v1.9.5.',
          },
          {
            q: 'هل دقة النسخ متطابقة بين whisper.cpp وfaster-whisper؟',
            a: 'إلى حد كبير. تستخدم كلتا الأداتين أوزان نموذج OpenAI Whisper ذاتها، لذا يُفترض أن تكون الدقة متقاربة جدًا؛ ويكمن الفرق أساسًا في وقت تشغيل الاستدلال (C/C++ مقابل CTranslate2 Python). ومع ذلك قد تظهر فروق صغيرة في المخرجات بسبب التكميم (مثل int8) وإعدادات فك الترميز والدقة العددية. لم نقِس فرقًا في WER بين وقتي التشغيل، فجرّب على صوتك أنت.',
          },
          {
            q: 'هل يمكنني استخدام faster-whisper على Mac بـApple Silicon؟',
            a: 'نعم، لكنه يعمل على المعالج وحده — faster-whisper لا يدعم Metal. يستطيع whisper.cpp استخدام Metal وCore ML، ويذكر README الخاص به أن مُرمِّز Core ML أسرع بأكثر من 3 أضعاف من التنفيذ على المعالج وحده. لم نجد معيارًا منشورًا يقارن faster-whisper بـwhisper.cpp على Apple Silicon، فقِس على تسجيلاتك. والسبب الرئيسي لاستخدام faster-whisper على Mac هو وجود مسار Python يعتمد عليه أصلًا.',
          },
          {
            q: 'أي حجم نموذج Whisper يجب استخدامه لمساعد صوتي؟',
            a: 'لواجهات الصوت في الوقت الفعلي، Whisper small هو التوصية القياسية — نحو 3.4% WER على الإنجليزية النظيفة (ورقة Whisper، LibriSpeech test-clean)، وزمن استجابة منخفض على معالج أو GPU حديث (يختلف بحسب العتاد؛ لم نقِسه)، ويتناسب مع نحو 2 جيجابايت RAM. استخدم tiny إذا كنت على جهاز محدود الموارد جدًا (Raspberry Pi Zero 2W، الهواتف القديمة) ويمكنك تحمّل ~7.6% WER. استخدم medium أو large-v3 فقط للنسخ الدفعي حيث التأخير ليس قيدًا.',
          },
          {
            q: 'هل يدعم whisper.cpp لغات غير الإنجليزية؟',
            a: 'نعم. جميع نماذج Whisper متعددة اللغات (base، وsmall، وmedium، وlarge-v3) تدعم 99 لغة. أضف `-l [رمز اللغة]` إلى CLI: `-l ar` للعربية، و`-l de` للألمانية، و`-l ja` لليابانية، إلخ. نموذجا tiny.en وbase.en للإنجليزية فقط وأكثر دقة قليلًا للإنجليزية من نظيريهما متعددَي اللغات.',
          },
          {
            q: 'كيف أثبّت faster-whisper مع دعم CUDA؟',
            a: 'ثبّت بـ`pip install faster-whisper`. تتطلب الإصدارات الحالية NVIDIA cuBLAS لـCUDA 12 وcuDNN 9 على نظامك (على Linux يوفّرهما `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"`). في إعدادات CUDA 11 / cuDNN 8 القديمة ثبّت `ctranslate2==3.24.0` (أو `4.4.0` لـCUDA 12 مع cuDNN 8). ثم حدد `device="cuda"` عند تحميل النموذج: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. استخدم `device="auto"` إذا أردت الرجوع إلى CPU عندما لا يتوفر CUDA.',
          },
          {
            q: 'أيٌّ منهما أكثر دقة — whisper.cpp أم faster-whisper؟',
            a: 'متقاربة جدًا لكنها غير مضمونة التطابق. تستخدم كلتا الأداتين أوزان نموذج OpenAI Whisper ذاتها، لذا يُفترض أن تكون الدقة متقاربة جدًا على الصوت نفسه. الفرق الرئيسي بين whisper.cpp وfaster-whisper هو السرعة ودعم المنصة. وقد يغيّر التكميم (int8 وq5_0) وحجم beam وإعدادات فك الترميز الأخرى النص قليلًا؛ لم نقِس ذلك، لذا قارن الأداتين على عيّنة من صوتك أنت.',
          },
          {
            q: 'هل يمكنني تشغيل Whisper large-v3 بذاكرة 8 جيجابايت RAM؟',
            a: 'نعم على GPU — ينبغي أن يتسع large-v3 بدقة int8 في faster-whisper لبطاقة GPU بسعة 8 جيجابايت (قاس README الخاص بـfaster-whisper استهلاك 2926 MB من VRAM لـlarge-v2 بدقة int8). وعلى المعالج وحده تكون 8 جيجابايت من RAM ضيقة لـlarge-v3 (يحتاج float32 إلى نحو 10 جيجابايت). استخدم medium (5 جيجابايت RAM) أو small (2 جيجابايت RAM) على الأنظمة التي بلا GPU. وفي اختبار README استهلك whisper.cpp ذاكرة RAM أقل من faster-whisper على المعالج (1049 MB مقابل 1477 MB بدقة int8).',
          },
          {
            q: 'كم تكلف نسخة Whisper المحلية مقارنةً بـSTT السحابية؟',
            a: 'لا رسوم ترخيص ولا رسوم لكل دقيقة. تُحصّل خدمات STT السحابية عادةً 0.006–0.024 دولارًا لكل دقيقة صوت (راجع الأسعار الحالية) — لمطوّر ينسخ 8 ساعات اجتماعات أسبوعيًا، هذا نحو 12–50 دولارًا شهريًا. يعمل Whisper المحلي على جهازك الذي تمتلكه بالفعل، بدون رسوم دقائق وبدون إدارة مفاتيح API، ولا حاجة لإرسال الصوت إلى خدمة سحابية (دون احتساب الكهرباء ووقت الإعداد).',
          },
          {
            q: 'هل يعمل faster-whisper بصيغة int8 على GTX 970؟',
            a: 'لا — ليس كـint8 حقيقي. قدرة حوسبة GTX 970 هي 5.2، ولا ينفّذ CTranslate2 صيغة int8 إلا على وحدات بقدرة حوسبة 7.0 فأكثر (أو 6.1 تحديدًا)؛ وعلى البطاقات الأقدم يحوّل الأوزان إلى float32 تلقائيًا. يظل faster-whisper يعمل على GPU بصيغة float32، فاستخدم tiny أو base أو small للبقاء ضمن 4 GB، أو int8 على CPU الذي يعمل على أي معالج x86 حديث. لم نختبر GTX 970، فلا توجد هنا قيمة سرعة مقيسة.',
          },
          {
            q: 'ما حجم ملفات نماذج Whisper لـwhisper.cpp وfaster-whisper؟',
            a: 'يذكر README الخاص بـwhisper.cpp ملفات نماذج GGML بحجم نحو 75 MiB (tiny) و142 MiB (base) و466 MiB (small) و1.5 GiB (medium) و2.9 GiB (large) على القرص، وتحتاج نحو 273 MB و388 MB و852 MB و2.1 GB و3.9 GB من الذاكرة. ينزّل faster-whisper نماذج CTranslate2 من Hugging Face عند أول استخدام؛ ويبلغ large-v3 هناك نحو 3 GB (1.55 مليار معامل بمعدل بايتين لكل معامل بصيغة float16). يسرد جدول أحجام النماذج أعلاه عدد المعاملات لكل حجم.',
          },
          {
            q: 'هل Whisper large-v3-turbo أفضل من large-v3 للنسخ المحلي؟',
            a: 'هو أسرع، لا أدق. يحتوي large-v3-turbo على 809 مليون معامل لأن OpenAI خفضت المُفكِّك من 32 إلى 4 طبقات، وتصفه بطاقة النموذج بأنه أسرع بكثير من large-v3 على حساب تراجع طفيف في الجودة، بترخيص MIT. وتحذّر البطاقة أيضًا من احتمال الهلوسة أو تكرار النص ومن تفاوت الدقة بين اللغات، فأبقِ على large-v3 للصوت الأصعب، واستخدم turbo (أو distil-large-v3 للإنجليزية) عندما تهمّ السرعة. يستطيع whisper.cpp وfaster-whisper تشغيله.',
          },
          {
            q: 'هل يستطيع whisper.cpp استخدام GPU من AMD أو Intel بدل CUDA؟',
            a: 'نعم. تعمل الواجهة الخلفية Vulkan في whisper.cpp (`-DGGML_VULKAN=1`) عبر الشركات المصنِّعة ما دام مشغّلك يدعم واجهة Vulkan، وتستهدف ROCm/HIP (`-DGGML_HIP=1`) وحدات AMD، ويسرّع OpenVINO المُرمِّز على معالجات Intel ووحداتها الرسومية. أما وثائق faster-whisper نفسه فتغطي NVIDIA CUDA فقط؛ وتذكر ملاحظات إصدار CTranslate2 حزم ROCm، لكننا لم نختبر هذا المسار.',
          },
          {
            q: 'هل mlx-whisper أسرع من whisper.cpp على جهاز Mac؟',
            a: 'يقول اختبار مستقل نعم بالنسبة إلى large-v3-turbo: قاس إعادة تشغيل Bill Mill في يناير 2026 نحو 13.1 ثانية لـmlx_whisper مقابل 26.7 ثانية لـwhisper.cpp على التسجيل الطويل نفسه، أي أسرع بنحو مرتين. وأظهر اختبار سرعة مجتمعي على مقطع قصير أن الاثنين متقاربان، مع استخدام whisper.cpp لـCore ML وتكميم q5_0. لم تُقارن أرقام M5 Pro في هذا الدليل بـMLX، فاختبر صوتك أنت قبل أن تختار.',
          },
          {
            q: 'هل faster-whisper أسرع من OpenAI Whisper؟',
            a: 'نعم. وفق ملف README الخاص بـfaster-whisper، فإن إعادة تنفيذه المبنية على CTranslate2 أسرع حتى 4 مرات من حزمة openai/whisper الأصلية بالدقة نفسها مع استهلاك ذاكرة أقل، ويزيد التكميم بـ8 بت الكفاءة أكثر على CPU وGPU. في اختبار README لملف صوتي مدته 13 دقيقة، احتاج openai/whisper إلى 2m23s على RTX 3070 Ti (النموذج large-v2، fp16) مقابل 1m03s لـfaster-whisper بـfp16 و59s بـint8، وإلى 6m58s على معالج Intel Core i7-12700K (النموذج small، fp32) مقابل 1m42s لـfaster-whisper بـint8. يستخدم الاثنان أوزان Whisper نفسها، لذا يُفترض أن تبقى الدقة متقاربة جدًا؛ أما whisper.cpp، وهو بيئة التشغيل الثالثة، فأنهى اختبار GPU في 1m05s مع Flash Attention.',
          },
          {
            q: 'هل Whisper أسرع على GPU منه على CPU؟',
            a: 'للنماذج الكبيرة نعم؛ أما الصغيرة فيكفيها المعالج غالبًا. في README الخاص بـfaster-whisper استغرق large-v2 على RTX 3070 Ti مدة 59 ثانية بدقة int8 لملف مدته 13 دقيقة، بينما استغرق النموذج small على معالج Intel Core i7-12700K مدة 1m42s بدقة int8 — نموذج مختلف وعتاد مختلف، فقارن الرتب العددية فقط. وفي اختبار طرف ثالث لـlarge-v3 على معالج Intel Core i5-13400F قيس whisper.cpp بـ15 ضعف الزمن الفعلي وfaster-whisper بـ2 ضعف. وبحسب تقارير المجتمع، يواكب tiny وbase الكلام المباشر على Raspberry Pi 5؛ ولم نقِس ذلك بأنفسنا.',
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
          '[insanely-fast-whisper على GitHub](https://github.com/Vaibhavs10/insanely-fast-whisper) — خط أنابيب Whisper Flash Attention 2 للاستدلال الدفعي على NVIDIA GPU (المقاييس في README بحسب المطوّرين).',
          '[OpenAI Whisper على GitHub](https://github.com/openai/whisper) — نموذج Whisper الأصلي والورقة وبطاقات النماذج وجدول السرعة النسبية (A100) لجميع الأحجام.',
          '[x2q.net: مقارنة الواجهات الخلفية لـWhisper](https://www.x2q.net/post/whisper-backend-shootout/) — معيار طرف ثالث من يونيو 2026 (RTX 4070 Ti وIntel Core i5-13400F، وlarge-v3، ومكالمات هاتفية بالدنماركية) وراء معاملات الزمن الفعلي لـfaster-whisper وwhisper.cpp.',
          '[نقاش معايير whisper.cpp](https://github.com/ggml-org/whisper.cpp/discussions/89) — أزمنة المُرمِّز التي يشاركها المجتمع لـApple Silicon وشرائح أخرى.',
          '[ورقة OpenAI Whisper البحثية (Radford et al.، 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". مصدر قيم WER.',
          '[توثيق CTranslate2](https://github.com/OpenNMT/CTranslate2) — تفاصيل التكميم ودعم الأجهزة وأسس تحسين int8.',
          '[وثائق التكميم في CTranslate2](https://opennmt.net/CTranslate2/quantization.html) — أنواع الحساب التي تدعمها كل قدرة حوسبة لـGPU (أساس قسم GTX 970).',
          '[معايير README الخاصة بـfaster-whisper](https://github.com/SYSTRAN/faster-whisper#benchmark) — أزمنة GPU وCPU لملف مدته 13 دقيقة المستخدمة في المعيار المرجعي، ومتطلبات CUDA 12 / cuDNN 9 الحالية.',
          '[openai/whisper-large-v3-turbo على Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo) — بطاقة النموذج: 809 مليون معامل، 4 طبقات مُفكِّك، ترخيص MIT.',
          '[Bill Mill: معيار محدَّث لـmlx_whisper مقابل whisper.cpp](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — مقارنة مستقلة لأزمنة large-v3-turbo على Apple Silicon.',
          '[إصدارات whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — ملاحظات الإصدارين v1.9.4 وv1.9.5.',
          '[إصدارات CTranslate2](https://github.com/OpenNMT/CTranslate2/releases) — ملاحظات الإصدارات v4.8.3 وv4.8.4 وv4.8.5.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[TTS المحلي واستنساخ الصوت 2026: Piper مقابل Coqui مقابل XTTS v2](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مكمّل TTS: حوّل النص المنسوخ مجددًا إلى صوت، بدون اتصال.',
          '[بناء مساعد صوتي كاملًا بدون اتصال في 2026](/ar/power-local-llm/build-local-voice-assistant-2026) — اربط Whisper STT بنموذج LLM محلي وPiper TTS في خط أنابيب صوتي كامل.',
          '[خط أنابيب AI متعدد الوسائط المحلي 2026](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — أضف نماذج رؤية جنبًا إلى جنب مع STT وTTS لحزمة محلية متعددة الوسائط كاملة.',
          '[دليل الأجهزة لـLLM المحلي](/ar/local-llms/local-llm-hardware-guide) — متطلبات GPU وRAM لخط الأنابيب الكامل للصوت + LLM.',
          '[بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) — النسخة الجوالة: WhisperKit على iPhone، وLayla على Android.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: '⁨Whisper.cpp⁩ مقابل ⁨faster-whisper 2026⁩: معايير ⁨STT⁩ المحلية والإعداد وتسريع ⁨GPU⁩',
       description: 'قارن بين whisper.cpp وfaster-whisper للتعرف على الكلام محليًا في 2026. معايير WER، سرعة GPU مقابل CPU، Apple Silicon Metal، النسخ في الوقت الفعلي وأدلة التثبيت. يعمل دون اتصال.',
       url: 'https://www.promptquorum.com/ar/power-local-llm/local-whisper-stt-comparison',
       inLanguage: 'ar',
       datePublished: '2026-05-14',
       dateModified: '2026-11-02',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
},
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-11-02',
    lastFactChecked: '2026-11-02',
    next_refresh_due: '2027-03-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Whisper.cpp vs faster-whisper 2026: 로컬 STT 벤치마크, 설정 및 GPU 가속',
    seoTitle: '로컬 STT 비교: whisper.cpp·faster-whisper',
    intro:
      'whisper.cpp와 faster-whisper는 2026년 현재 OpenAI Whisper 모델을 기반으로 한 가장 주요한 두 가지 로컬 오프라인 음성 인식(STT) 구현체입니다. whisper.cpp는 Apple Metal, CUDA, Vulkan, CPU에서 동작하는 순수 C/C++ 포트로 — Apple Silicon, 임베디드 시스템, 실시간 음성 애플리케이션에 이상적입니다. faster-whisper는 CTranslate2를 활용하는 Python 라이브러리로, README에 따르면 같은 정확도에서 원본 Whisper보다 최대 4배 빠릅니다. 이 가이드에서는 설치 방법, 성능 벤치마크, 실시간 전사 설정, 그리고 플랫폼별 직접 비교를 통해 적합한 도구를 선택할 수 있도록 안내해 드립니다.',
    metaDescription:
      '로컬 STT 모델 whisper.cpp·faster-whisper 비교: OpenAI Whisper 대비 최대 4배, CPU·GPU(Vulkan·Metal) 시간, WER, 실시간 전사.',
    heroImage: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ko.webp',
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
      'Whisper large-v3-turbo (809M)',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 Ti',
      'NVIDIA RTX 3070 Ti',
      'Apple Silicon (M-series)',
      'Raspberry Pi',
      'CPU (x86)',
      'NVIDIA GTX 970 (Maxwell)',
      'NVIDIA RTX 3070 Ti',
    ],
    leadAnswerBlock:
      '**Apple Silicon과 임베디드 기기에는 whisper.cpp를, NVIDIA GPU와 Python 파이프라인에는 faster-whisper를 사용하십시오. 두 도구 모두 같은 OpenAI Whisper 가중치를 실행하므로 정확도는 거의 같고 주로 속도와 통합 방식이 다릅니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년 로컬 음성 인식에 whisper.cpp와 faster-whisper 중 어느 것을 사용해야 합니까?',
        answer:
          '선택은 하드웨어와 통합 요구 사항에 따라 달라집니다. Apple Silicon에서는 faster-whisper에 Metal 백엔드가 없으므로 Metal과 Core ML을 쓸 수 있는 whisper.cpp가 자연스러운 선택입니다. NVIDIA GPU에서는 확인한 공개 테스트에서 faster-whisper가 더 빨랐고(RTX 4070 Ti의 large-v3에서 실시간 대비 23배 대 15배, 제3자 테스트) Python 파이프라인에도 통합하기 쉽습니다. CPU만 사용하는 환경에서는 공개된 결과가 서로 엇갈리므로 직접 가진 오디오로 측정하십시오.',
        bullets: [
          'Apple Silicon → Core ML / Metal을 쓰는 whisper.cpp. faster-whisper에는 Metal 백엔드가 없습니다.',
          'NVIDIA GPU → faster-whisper. 제3자 RTX 4070 Ti 테스트(large-v3): 실시간 대비 23배, whisper.cpp CUDA는 15배.',
          'Python 파이프라인 → faster-whisper. 네이티브 Python, 5줄 설정, VAD 포함.',
          '임베디드 / Raspberry Pi 5 → whisper.cpp. 순수 C 바이너리, Python 런타임 불필요. tiny/base는 실시간, small은 배치 전용.',
          '실시간 음성 → whisper.cpp 스트림 모드 또는 faster-whisper VAD 파이프라인.',
          '배치 전사 → faster-whisper. GPU 처리량 우수; 간편한 비동기 배칭.',
          'WER 정확도: 매우 비슷할 것으로 예상 — 동일한 Whisper 모델 가중치 사용(양자화와 디코딩 설정에 따라 작은 차이가 생길 수 있음).',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실 정리', anchor: '#quick-facts' },
      { label: '로컬 음성 인식이 필요한 이유', anchor: '#why-local-stt' },
      { label: 'Whisper 모델 크기', anchor: '#whisper-model-sizes' },
      { label: 'Distil-Whisper: 더 빠른 대안', anchor: '#distil-whisper' },
      { label: 'whisper.cpp — C/C++ 포트', anchor: '#whisper-cpp' },
      { label: 'whisper.cpp 최신 버전 및 업데이트', anchor: '#whats-new' },
      { label: 'faster-whisper — CTranslate2 포트', anchor: '#faster-whisper' },
      { label: 'pip로 ggml-base.bin 받기(Python 설정)', anchor: '#install-ggml-pip' },
      { label: '직접 비교: 벤치마크 표', anchor: '#benchmarks' },
      { label: '참고 벤치마크: GPU와 CPU 소요 시간', anchor: '#reference-benchmark' },
      { label: '실시간 전사 설정', anchor: '#real-time' },
      { label: 'Apple Silicon: whisper.cpp가 자연스러운 선택', anchor: '#apple-silicon' },
      { label: 'NVIDIA GPU: 공개 테스트에서 faster-whisper 우위', anchor: '#nvidia-gpu' },
      { label: '구형 NVIDIA GPU(GTX 970)', anchor: '#older-nvidia-gpus' },
      { label: 'Raspberry Pi 5의 Whisper', anchor: '#raspberry-pi-5' },
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
          '**whisper.cpp는 Apple Silicon에서 로컬 STT를 쓸 때 자연스러운 선택입니다.** C/C++ 포트는 Core ML과 Apple Metal로 하드웨어 가속을 하며, README는 Core ML 인코더가 CPU 전용 실행보다 3배 넘게 빠르다고 밝힙니다(개발자 공개 수치). Python도 필요하지 않습니다.',
          '**확인한 공개 테스트에서 faster-whisper는 NVIDIA GPU에서 더 빨랐고 Python 파이프라인에도 잘 맞습니다.** README 테스트에서 int8은 VRAM을 4708 MB(OpenAI Whisper fp16)에서 2926 MB(large-v2, RTX 3070 Ti, 개발자 공개 수치)로 줄였고, 제3자 RTX 4070 Ti 테스트는 large-v3에서 실시간 대비 23배, whisper.cpp CUDA는 15배로 측정했습니다.',
          '**두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용합니다.** 따라서 정확도는 매우 비슷할 것이며, 차이는 주로 런타임 성능과 통합 방식에 있습니다. 양자화와 디코딩 설정으로 인한 작은 WER 차이는 여전히 생길 수 있으며, 이는 자체 측정하지 않았습니다.',
          '**Whisper large-v3는 영어에서 2.5% WER로 최고의 정확도를 제공합니다.** 대부분의 프로덕션 사용 사례에서는 Whisper small(3.4% WER, 2GB RAM) 또는 medium(2.9% WER, 5GB RAM)이 속도와 정확도 사이에서 더 나은 균형을 제공합니다.',
          '**실시간 전사는 두 도구 모두로 달성 가능합니다** — whisper.cpp는 `--stream` 플래그를 통해, faster-whisper는 내장 VAD(음성 활동 감지) 파이프라인을 통해 지원합니다. 텍스트가 라이브 음성보다 얼마나 지연되는지는 하드웨어와 모델 크기에 따라 다르며, 자체 측정은 하지 않았습니다.',
          '**whisper.cpp는 CPU, Metal, CUDA, Vulkan에서 동작합니다** — 크로스 플랫폼 임베디드 사용(Raspberry Pi, Windows GPU 구성, ARM 서버)을 위한 가장 현실적인 옵션입니다. faster-whisper는 CPU와 CUDA만 지원합니다(Mac에서 Metal 미지원).',
          '**Raspberry Pi 5 및 임베디드 Linux에서는 CPU의 whisper.cpp tiny와 base**가 실시간을 처리할 수 있는 모델입니다. tiny는 실시간보다 여유 있게 빠르고, base는 `-t 4`에서 실시간 수준입니다. small 모델(WER 3.4%)은 Pi 5에서 실시간보다 느려 배치 작업에 가장 적합합니다. 모든 추론은 CPU(ARM NEON)에서 이루어지며, Pi에는 Whisper용으로 쓸 만한 GPU 경로가 없습니다. 이 Pi 5 수치는 커뮤니티 보고에 따른 것이며 자체 측정이 아닙니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실 정리',
        items: [
          '**두 도구 모두:** OpenAI의 오픈소스 Whisper 모델(MIT 라이선스) 기반. 같은 모델 가중치이므로 정확도는 비슷하며 런타임만 다름.',
          '**whisper.cpp:** Georgi Gerganov가 C/C++로 작성. CPU(AVX2/NEON), CUDA, Metal(Apple), Vulkan 지원. Python 불필요.',
          '**faster-whisper:** CTranslate2를 사용하는 Python 라이브러리. CPU(int8)와 CUDA 지원. Apple Metal 미지원.',
          '**Whisper 모델 크기:** tiny(39M), base(74M), small(244M), medium(769M), large-v3(1.55B). 모두 ggml / CTranslate2 형식.',
          '**대부분의 경우에 적합한 모델:** Whisper small — 3.4% WER, 메모리 약 2GB. 속도보다 정확도가 중요하면 medium이나 large-v3로 올리십시오.',
          '**NVIDIA GPU(large-v3, 제3자 테스트, RTX 4070 Ti):** faster-whisper 실시간 대비 23배, whisper.cpp CUDA 실시간 대비 15배.',
          '**Apple Silicon:** whisper.cpp는 Metal과 Core ML로 동작합니다(README: Core ML 인코더가 CPU 전용보다 3배 넘게 빠름). faster-whisper에는 Metal 백엔드가 없습니다. M5 Pro의 large-v3에 대한 공개 벤치마크는 찾지 못했습니다.',
        ],
      },
      whyLocalSTT: {
        id: 'why-local-stt',
        title: '로컬 음성 인식이 필요한 이유',
        content:
          '클라우드 STT 서비스(Google Speech-to-Text, AWS Transcribe, Azure Speech)는 오디오 분당 요금을 부과하며 — 일반적으로 $0.006–$0.024/분 — 오디오를 원격 서버로 전송합니다. 개인 정보 보호가 중요한 애플리케이션(의료 받아쓰기, 법적 녹음, 저널리즘 인터뷰, 기업 회의)의 경우, 로컬 전사는 오디오를 제3자 서비스로 보내지 않아도 되게 해 줍니다.',
        items: [
          '**개인 정보 보호:** 두 도구 모두 로컬에서 실행할 수 있어 오디오를 클라우드 서비스로 보내지 않아도 되므로, 전사 과정에 클라우드 사업자가 관여할 필요가 없습니다. 법적 근거와 안전한 보관 같은 개인정보 보호 의무는 여전히 사용자에게 있습니다.',
          '**비용:** 분당 요금 없음. 일반적인 클라우드 STT 정가($0.006–$0.024/분, 최신 요금은 제공업체에서 확인)로 계산하면 주당 8시간 회의를 전사하는 개발자는 월 약 $12–50를 내게 되며, 로컬 전사는 이 비용이 들지 않습니다(하드웨어와 전기 요금 제외).',
          '**오프라인:** 비행기, 보안 시설, 안정적인 인터넷이 없는 지역에서 동작합니다. API 키 관리 불필요.',
          '**지연 시간:** 업로드/다운로드 왕복 없음. 실시간 음성 인터페이스의 경우, 로컬 처리는 클라우드 왕복에 비해 STT 지연 시간을 줄일 수 있으며, 그 폭은 네트워크와 하드웨어에 따라 달라집니다.',
          '**커스터마이즈:** 도메인별 어휘로 모델을 미세 조정합니다. 하드웨어에 맞는 모델 크기를 실행합니다.',
          '**Home Assistant 통합:** 로컬 Whisper는 오디오를 클라우드 서비스로 보내지 않고 실행할 수 있으므로 웨이크 워드와 음성 명령을 홈 네트워크 안에 둘 수 있습니다. 클라우드 STT를 완전히 대체하는 애드온 설정은 [Home Assistant에서의 로컬 Whisper →](/ko/smart-home/local-whisper-home-assistant)를 참조하십시오.',
        ],
      },
      whisperModelSizes: {
        id: 'whisper-model-sizes',
        title: 'Whisper 모델 크기 — 두 도구의 공통 기반',
        content:
          'whisper.cpp와 faster-whisper 모두 동일한 Whisper 모델 가중치를 사용하며, 각자의 형식으로 변환됩니다(whisper.cpp는 GGML, faster-whisper는 CTranslate2). VRAM/RAM 예산과 정확도 요구 사항에 따라 모델 크기를 선택하십시오.',
          image: '/images/local-whisper-stt-comparison-2026-model-sizes-hero-ko.webp',
          imageCaption: 'tiny부터 large-v3까지, whisper.cpp와 faster-whisper가 함께 쓰는 Whisper 모델 크기.',
          imageAlt: '포스터 「Whisper 모델 크기: 속도 대 정확도」: tiny는 large보다 약 10배 빠르고, large-v3는 가장 느리지만 가장 정확하며, 속도는 OpenAI README의 A100 기준',
        columns: ['모델', '파라미터', 'VRAM / RAM', '영어 WER', '상대 속도(large 대비)'],
        rows: [
          {
            '모델': 'tiny',
            '파라미터': '39M',
            'VRAM / RAM': '~1 GB',
            '영어 WER': '7.6%',
            '상대 속도(large 대비)': '~10배',
          },
          {
            '모델': 'base',
            '파라미터': '74M',
            'VRAM / RAM': '~1 GB',
            '영어 WER': '5.0%',
            '상대 속도(large 대비)': '~7배',
          },
          {
            '모델': 'small',
            '파라미터': '244M',
            'VRAM / RAM': '~2 GB',
            '영어 WER': '3.4%',
            '상대 속도(large 대비)': '~4배',
          },
          {
            '모델': 'medium',
            '파라미터': '769M',
            'VRAM / RAM': '~5 GB',
            '영어 WER': '2.9%',
            '상대 속도(large 대비)': '~2배',
          },
          {
            '모델': 'large-v3',
            '파라미터': '1.55B',
            'VRAM / RAM': '~10 GB',
            '영어 WER': '2.5%',
            '상대 속도(large 대비)': '1배(기준)',
          },
          {
            '모델': 'distil-large-v3',
            '파라미터': '~756M',
            'VRAM / RAM': '~4 GB',
            '영어 WER': '~2.6%',
            '상대 속도(large 대비)': '~6.3배',
          },
        ],
        note: 'WER(단어 오류율)은 낮을수록 좋습니다. tiny, base, small, medium 값은 Whisper 논문(Radford et al., 2022, 부록 D.1.1, LibriSpeech test-clean, 그리디 디코딩)의 값입니다. 논문은 large-v3와 distil-large-v3를 다루지 않으므로 이 둘의 값은 근사치이며 직접 비교할 수 없습니다. 상대 속도는 Whisper README에 게시된 OpenAI의 공개 수치로, A100에서 large 모델 대비로 측정되었습니다(개발자 공개 수치). 실제 속도는 하드웨어에 따라 다릅니다. distil-large-v3는 모델 카드 기준으로 large-v3보다 6.3배 빠릅니다.',
      },
      distilWhisper: {
        id: 'distil-whisper',
        title: 'Distil-Whisper: 더 빠른 대안',
        content:
          '**[distil-whisper/distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3)는 large-v3의 지식 증류 변형으로, 파라미터가 ~50% 적으면서 WER이 원본의 ~1% 이내로 유지되며 6.3배 빠르게 동작합니다.** 전사 속도가 마지막 정확도 퍼센트 이상으로 중요한 경우에 올바른 선택입니다. distil-large-v3는 faster-whisper(네이티브 CTranslate2 지원)와 whisper.cpp(GGML 형식 변환을 통해) 모두와 호환되어, 이미 사용 중인 런타임에 통합됩니다.',
        items: [
          '**파라미터:** ~756M — large-v3의 1.55B의 약 절반, ~10GB 대신 ~4GB VRAM에 수용됩니다.',
          '**속도:** 모델 카드 기준 large-v3보다 6.3배 빠릅니다(상대 지연 시간이며 실시간 배율이 아닙니다). 긴 오디오에서 WER은 large-v3의 약 1% 이내입니다.',
          '**WER:** 영어에서 ~2.6% — large-v3의 2.5%보다 단 ~0.1% 높습니다. 일반적인 음성에서는 차이를 알아차리기 어려울 수 있지만, 직접 시험하지는 않았습니다.',
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
          '**Apple Silicon의 장점:** whisper.cpp는 모델을 Core ML 형식으로 내보내 Apple Neural Engine에서 추론할 수 있습니다. README는 Core ML 인코더가 CPU 전용 실행보다 3배 넘게 빠르다고 밝힙니다(개발자 공개 수치).',
          '**설치:** 저장소를 클론하고 `make`(또는 `cmake`)를 실행합니다. 일반 플랫폼용 사전 빌드된 바이너리가 제공됩니다. Python 의존성 없음.',
          '**모델 다운로드:** `bash ./models/download-ggml-model.sh base.en` — GGML 형식의 모델 파일을 다운로드합니다(base의 경우 ~142MB).',
          '**CLI 예시:** `./main -m models/ggml-base.bin -f audio.wav` — WAV 파일을 표준 출력으로 전사합니다. 한국어는 `-l ko`를 추가하십시오.',
          '**실시간 스트림 모드:** `./stream -m models/ggml-base.bin --step 3000 --length 10000` — 마이크에서 3초 청크 단위로 전사합니다.',
          '**Python 래퍼:** pywhispercpp은 whisper.cpp를 위한 Python 바인딩을 제공하여, Metal 가속을 희생하지 않고 Python 파이프라인에서 사용할 수 있게 합니다.',
          '**VAD:** whisper.cpp는 `whisper-cli`의 `--vad` 옵션으로 Silero 음성 활동 감지를 선택적으로 사용할 수 있습니다(별도의 VAD 모델 다운로드 필요). 스트림 모드는 사용 사례에 따라 여전히 `--step` 및 `--length` 파라미터를 조정해야 합니다.',
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
      whatsNew: {
        id: 'whats-new',
        title: 'whisper.cpp 최신 버전 및 업데이트',
        content:
          '**whisper.cpp의 최신 릴리스는 2026년 10월 6일에 공개된 v1.9.5입니다.** 번들된 ggml 라이브러리를 v0.26.0으로 동기화하며(CUDA, Vulkan, Metal, SYCL, OpenCL, CPU 커널 백엔드 작업), 언어 감지 중 중단 콜백과 병렬 청크 오프셋의 정수 오버플로 수정 같은 Whisper 수정이 포함됩니다. whisper.cpp는 비공식 Snap과 별개로 Debian 공식 패키지(sid, `whisper.cpp` / `libwhisper-dev` / `libwhisper1`)로도 제공됩니다. faster-whisper의 최신 태그 릴리스는 여전히 v1.2.1(2025년 10월 31일)이지만 저장소는 활발히 관리되고 있으며, 가장 최근 커밋은 2026년 11월 2일입니다(2026년 11월 3일 확인). 두 런타임 모두 동일한 OpenAI Whisper 가중치를 불러오며, 2026년에 전사 정확도를 바꾼 새로운 모델 계열은 파악하지 못했습니다.',
        items: [
          '**whisper.cpp v1.9.5(2026년 10월 6일):** ggml을 v0.26.0으로 동기화(CUDA, Vulkan, Metal, SYCL, OpenCL, WebGPU, CPU 커널 업데이트), 언어 감지 중 중단 콜백 추가, 병렬 청크 오프셋의 정수 오버플로 수정, 파일 처리 실패 시 CLI가 올바른 오류 코드를 반환하도록 수정.',
          '**whisper.cpp v1.9.4(2026년 9월 11일):** 서버가 감지된 언어를 반환하고, 인코더 콜백이 언어 자동 감지 전에 호출되며, 릴리스 작업에 Windows on ARM이 추가되었습니다.',
          '**whisper.cpp v1.9.3(2026년 8월 20일):** ggml을 v0.20.2로 동기화하여 전 백엔드 성능 개선, Metal TQ2_0 양자화 지원, 융합 CUDA/SYCL 커널, ARM/WASI 수정.',
          '**whisper.cpp v1.9.0–v1.9.2(2026년 6월–8월):** v1.9.3에 이르기까지 같은 ggml 동기화 및 백엔드 성능 개선 계열의 포인트 릴리스.',
          '**whisper.cpp v1.8.6(2026년 6월 2일):** 압축 오디오(MP3, M4A)의 선택적 FFmpeg 디코딩을 더 명확하게 하도록 `ffmpeg-transcode`를 재구현하고 CI 예제 경로를 수정.',
          '**whisper.cpp v1.8.5(2026년 5월):** 스트리밍 VAD(음성 활동 감지) 개선, 서버 파라미터 누수 및 토큰 타임스탬프 수정, Ruby 및 VAD 바인딩의 메모리 누수 수정.',
          '**whisper.cpp v1.8.4(2026년 3월 19일):** 폭넓은 성능 향상을 담은 최신 `ggml` 동기화, GPU를 선택하는 새 `-g` / `--gpu-device` 플래그(및 `GGML_CUDA` 장치 선택), UTF-8 세그먼트 줄바꿈 수정.',
          '**네이티브 VAD가 whisper.cpp에 내장되었습니다.** 최근 릴리스에 네이티브 음성 활동 감지 경로가 추가되어 오랜 faster-whisper의 강점이 줄었습니다. 다만 faster-whisper의 Silero VAD 통합이 여전히 더 바로 쓰기 쉽습니다.',
          '**faster-whisper v1.2.1(2025년 10월 31일):** 최신 태그 릴리스이며 `pip install faster-whisper`로 설치됩니다. 2026년에 태그 릴리스는 없지만 메인 브랜치는 활발합니다. 최신 커밋(2026년 11월 2일, 11월 3일 확인)은 CI 수정이며, 2026년 10월 16일 커밋에서 모델이 지원하지 않는 언어에 대한 오류 같은 입력 검증이 추가되었습니다. v1.2.0(2025년 8월)에서 distil-large-v3.5 지원이 추가되었습니다.',
          '**CTranslate2 v4.8.4(2026년 10월 25일):** faster-whisper 아래의 추론 엔진이 새 버전을 릴리스했습니다. 텐서 크기 계산에서의 정수 오버플로 방지, 가중치 행이 매우 작을 때의 CPU Conv1D 및 INT8 양자화 스케일 오버플로 수정, 실험적인 오프라인 음성 합성(Drama 3) 구현이 추가되었습니다. 직전 버전인 v4.8.3(2026년 10월 13일)에서는 Windows ROCm 수정, 모델 로드 시 방어 강화, 윈도에 프레임이 없을 때 Whisper `align()`의 0으로 나누기 오류 수정이 포함되었습니다. 이후 v4.8.5가 2026년 11월 2일에 공개되었으며(11월 3일 확인), CUDA 어텐션 정밀도 수정과 Windows ROCm/HIP 빌드 가이드가 포함됩니다.',
          '**2026년에는 정확도 등급의 새 Whisper 모델이 없습니다.** OpenAI의 최신 다국어 가중치는 여전히 large-v3-turbo(2024년 10월, 809M 파라미터, 디코더를 32층에서 4층으로 축소, MIT 라이선스)이며, 약간의 품질 저하를 감수하고 훨씬 높은 속도를 얻고 두 도구 모두에서 동작합니다. distil-large-v3는 영어 전용 속도 옵션으로 남아 있습니다. 우리가 아는 한 두 런타임의 업데이트는 런타임과 도구의 변경이지 정확도 변경이 아닙니다.',
        ],
      },
      fasterWhisperDeep: {
        id: 'faster-whisper',
        title: 'faster-whisper — CTranslate2 포트',
        content:
          '**faster-whisper(SYSTRAN 제작)는 CTranslate2를 사용하여 Whisper 추론을 재구현한 Python 라이브러리입니다 — int8 양자화 지원을 통해 VRAM 사용량을 줄이고 처리량을 향상시키는 고도로 최적화된 C++ 추론 엔진입니다.** NVIDIA GPU에서 faster-whisper는 공개된 테스트 기준으로 가장 빠른 로컬 Whisper 구현체 중 하나입니다.',
        items: [
          '**플랫폼 지원:** CPU(int8 양자화)와 NVIDIA GPU CUDA. Apple Metal 미지원 — Mac에서는 CPU 전용으로만 동작합니다.',
          '**int8의 장점:** CTranslate2 int8 양자화는 faster-whisper README 테스트에서 VRAM을 약 3분의 1 줄였고(fp16 4525 MB 대 int8 2926 MB, large-v2) 속도도 소폭 빨라졌습니다(1m03s 대 59s). WER에 미치는 영향은 보통 무시할 수 있는 수준입니다.',
          '**설치:** `pip install faster-whisper` — 컴파일 불필요(Python 3.9+). GPU 사용에는 CUDA 12용 NVIDIA cuBLAS와 cuDNN 9가 필요하며, 오래된 CUDA 11 / cuDNN 8 환경에서는 더 오래된 `ctranslate2`(3.24.0)로 고정해야 합니다.',
          '**내장 VAD:** faster-whisper에는 Silero VAD 통합이 포함되어 있어 음성이 없는 오디오 세그먼트를 자동으로 건너뜁니다 — 실시간 전사 파이프라인에 필수적입니다.',
          '**네이티브 Python:** 직접적인 Python API는 LLM, 오디오 처리 라이브러리, 웹 프레임워크와의 통합을 용이하게 합니다.',
          '**속도:** README 테스트(large-v2, RTX 3070 Ti, 13분 파일)에서 int8은 59초, 배치 크기 8의 int8은 16초가 걸렸습니다. 제3자 RTX 4070 Ti 테스트는 large-v3에서 실시간 대비 23배를 측정했습니다.',
          '**배치 처리:** faster-whisper는 대량의 오디오 파일을 효율적으로 처리하기 위한 배치 추론을 지원합니다.',
          '**제한 사항:** Mac에서는 Metal을 지원하지 않아 Apple Silicon에서 CPU 전용으로 동작합니다. Apple Silicon에서 faster-whisper와 whisper.cpp를 비교한 공개 벤치마크는 찾지 못했습니다.',
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
      installPython: {
        id: 'install-ggml-pip',
        title: 'pip로 ggml-base.bin 받기(Python 설정)',
        content:
          '**pip로 Python에서 ggml-base.bin을 사용하려면 `pywhispercpp` 바인딩을 설치하고(`pip install pywhispercpp`) `Model("base")`를 로드하십시오. 처음 실행할 때 `ggml-base.bin`이 자동으로 다운로드됩니다.** `pip install whisper.cpp`는 존재하지 않으며, pywhispercpp가 whisper.cpp C/C++ 엔진을 감싼 pip 래퍼이고 Metal 및 CUDA 가속을 유지합니다. GGML 모델 파일(`ggml-base.bin`, 약 142 MB)은 Hugging Face에서 별도로 내려받아 로컬에 캐시되며, pip 패키지는 가중치가 아니라 추론 엔진만 포함합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '`pip install pywhispercpp`를 실행한 뒤 Python에서 `Model("base")`를 호출하면 처음 사용할 때 ggml-base.bin이 자동으로 내려받아져 캐시됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'pip는 프로그램(pywhispercpp)을 설치하고, ggml-base.bin 모델 파일은 "base" 모델을 처음 로드할 때 내려받는 별도의 약 142 MB 파일입니다. download-ggml-model.sh 스크립트로 직접 받을 수도 있습니다.',
          },
        ],
        items: [
          '**바인딩 설치:** `pip install pywhispercpp`. NVIDIA CUDA 가속이 필요하면 `GGML_CUDA=1 pip install git+https://github.com/absadiki/pywhispercpp`로 빌드하십시오.',
          '**ggml-base.bin 자동 다운로드:** `from pywhispercpp.model import Model` 후 `model = Model("base")`를 실행하면 처음 실행 시 Hugging Face(`ggerganov/whisper.cpp`)에서 `ggml-base.bin`을 내려받아 캐시합니다. 영어 전용 변형은 `"base.en"`을 사용하십시오.',
          '**수동 다운로드(CLI 방식, pip 없음):** 클론한 whisper.cpp 저장소에서 `bash ./models/download-ggml-model.sh base`를 실행하면 `models/ggml-base.bin`에 저장되며, pywhispercpp가 받는 것과 같은 파일입니다.',
          '**직접 다운로드:** `curl -L -o ggml-base.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`으로 스크립트 없이 모델을 받을 수 있습니다. `base`를 `tiny`, `small`, `medium`, `large-v3`로 바꾸십시오.',
          '**패키지를 혼동하지 마십시오:** `pip install openai-whisper`는 OpenAI의 원본 PyTorch Whisper를 설치하며(`.pt` 체크포인트를 사용하고 `ggml-base.bin`을 사용하지 않음), `pip install faster-whisper`는 CTranslate2 형식을 사용합니다. GGML `ggml-*.bin` 파일을 사용하는 것은 `pywhispercpp`뿐입니다.',
          '**파일 위치:** pywhispercpp는 내려받은 GGML 모델을 모듈 캐시(또는 `Model("base", models_dir="...")`로 지정한 경로)에 저장하므로 같은 `ggml-base.bin`을 다시 받지 않고 재사용합니다.',
        ],
        codeBlock: `# 1. Install the pip binding for whisper.cpp
pip install pywhispercpp

# 2. ggml-base.bin downloads automatically on first use
#    from pywhispercpp.model import Model
#    model = Model("base")          # fetches & caches ggml-base.bin (~142 MB)
#    for seg in model.transcribe("audio.wav"):
#        print(seg.text)

# --- Or get ggml-base.bin manually (no pip) ---
# From a cloned whisper.cpp checkout:
bash ./models/download-ggml-model.sh base       # -> models/ggml-base.bin

# Or download the file directly from Hugging Face:
curl -L -o ggml-base.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin`,
        codeLanguage: 'bash',
      },
      benchmarks: {
        id: 'benchmarks',
        title: '직접 비교: 벤치마크 표',
        content:
          '각 행에는 출처와 하드웨어를 표시했습니다. 속도는 실시간 대비 배수로 나타냅니다(10배는 60분 분량 오디오를 6분에 전사한다는 뜻). "제3자" 행은 [x2q.net 백엔드 비교](https://www.x2q.net/post/whisper-backend-shootout/)(RTX 4070 Ti와 Intel Core i5-13400F, large-v3, 덴마크어 통화 녹음, 2026년 6월)에서, "README" 행은 faster-whisper README(RTX 3070 Ti, large-v2)에서 가져왔습니다. 출처마다 하드웨어와 오디오가 다르므로, 한 대의 기기에서 직접 비교한 결과가 아니라 참고 수치로 읽으십시오.',
          image: '/images/local-whisper-stt-comparison-2026-platform-winner-hero-ko.webp',
          imageCaption: 'Apple Silicon, NVIDIA GPU, CPU 플랫폼별로 비교한 whisper.cpp와 faster-whisper.',
          imageAlt: '포스터 「플랫폼별 whisper.cpp vs faster-whisper」: Apple Silicon은 whisper.cpp(Metal), NVIDIA GPU에서는 둘 다 CUDA, CPU에서는 공개된 결과가 엇갈림',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '제3자 RTX 4070 Ti 테스트에서 large-v3는 faster-whisper가 실시간 대비 23배, whisper.cpp CUDA가 15배였습니다. Apple Silicon에서는 whisper.cpp만 Metal을 쓸 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'Mac에서는 Metal과 Core ML을 쓸 수 있는 whisper.cpp를, NVIDIA GPU가 있는 Windows/Linux에서는 공개 테스트에서 더 빨랐고 int8에서 VRAM을 덜 쓴 faster-whisper를 선택하십시오(README 테스트에서 2926 MB 대 whisper.cpp fp16의 4127 MB).',
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
            '지표': '속도 — RTX 4070 Ti, large-v3 (제3자)',
            'whisper.cpp (large-v3)': '~15배 실시간',
            'faster-whisper (large-v3)': '~23배 실시간 ✓',
          },
          {
            '지표': '속도 — Apple Silicon, large-v3',
            'whisper.cpp (large-v3)': 'Metal + Core ML (벤치마크 없음)',
            'faster-whisper (large-v3)': 'CPU 전용 (벤치마크 없음)',
          },
          {
            '지표': '속도 — x86 CPU, large-v3 (제3자)',
            'whisper.cpp (large-v3)': '~15배 실시간 ✓ (i5-13400F)',
            'faster-whisper (large-v3)': '~2배 실시간 (i5-13400F)',
          },
          {
            '지표': 'VRAM — large-v2, RTX 3070 Ti (README)',
            'whisper.cpp (large-v3)': '4127 MB (fp16, Flash Attention)',
            'faster-whisper (large-v3)': '2926 MB (int8) ✓',
          },
          {
            '지표': 'Python 통합',
            'whisper.cpp (large-v3)': '래퍼 필요 (pywhispercpp)',
            'faster-whisper (large-v3)': '네이티브 ✓',
          },
          {
            '지표': 'VAD (침묵 감지)',
            'whisper.cpp (large-v3)': '선택 사항 (--vad + Silero 모델)',
            'faster-whisper (large-v3)': '내장 (Silero VAD) ✓',
          },
          {
            '지표': '실시간 스트리밍',
            'whisper.cpp (large-v3)': '예 (--stream 플래그) ✓',
            'faster-whisper (large-v3)': '예 (VAD 파이프라인)',
          },
          {
            '지표': 'WER 정확도 (large-v3)',
            'whisper.cpp (large-v3)': '2.5% (같은 가중치)',
            'faster-whisper (large-v3)': '2.5% (같은 가중치)',
          },
          {
            '지표': 'Python 의존성',
            'whisper.cpp (large-v3)': '없음 ✓',
            'faster-whisper (large-v3)': 'Python 3.9+',
          },
          {
            '지표': 'Raspberry Pi / 임베디드',
            'whisper.cpp (large-v3)': '예 — C 바이너리 ✓',
            'faster-whisper (large-v3)': '가능 — Python 런타임 필요',
          },
          {
            '지표': '출력 형식',
            'whisper.cpp (large-v3)': 'SRT, VTT, JSON, CSV, txt',
            'faster-whisper (large-v3)': 'Python 객체 (start, end, text)',
          },
        ],
        note: 'whisper.cpp는 출력을 표준 자막 및 전사 형식(SRT, VTT, JSON, CSV, txt)으로 직접 작성합니다 — 추가 코드 없이 디스크에 파일이 필요한 자막 워크플로에 이상적입니다. faster-whisper는 `start`, `end`, `text` 속성을 가진 세그먼트 객체의 Python 제너레이터를 반환합니다 — 세그먼트 텍스트를 중간 파일 작성 없이 다운스트림 모델에 직접 전달하는 LLM 파이프라인 연결에 이상적입니다. 자막 생성의 경우 whisper.cpp가 더 간단합니다. 세그먼트를 프로그래밍 방식으로 처리하는 파이프라인의 경우 faster-whisper가 더 간단합니다.',
      },
      refBenchmark: {
        id: 'reference-benchmark',
        title: '참고 벤치마크: faster-whisper의 GPU와 CPU 소요 시간',
        content:
          '**faster-whisper 프로젝트는 13분 길이 오디오 파일에 대한 자체 소요 시간을 공개하고 있으며, GPU에서는 Flash Attention을 적용한 whisper.cpp가 faster-whisper fp16과 비슷하고, 배치 처리와 int8에서 faster-whisper가 앞선다는 것을 보여 줍니다.** 아래 수치는 faster-whisper README에서 가져온 것입니다(GPU 행은 RTX 3070 Ti 8 GB, CUDA 12.4에서 large-v2, CPU 행은 Intel Core i7-12700K 8스레드에서 small 모델, 빔 크기 5). 저희가 직접 측정한 값이 아니며, 위의 large-v3 수치와는 하드웨어와 모델이 다릅니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'faster-whisper README 벤치마크에서 GPU의 Flash Attention 적용 whisper.cpp(1m05s)와 faster-whisper fp16(1m03s)은 거의 동률이며, 배치 처리를 적용한 faster-whisper int8은 같은 13분 파일을 16초에 처리합니다.',
          },
        ],
        columns: ['구성', '정밀도', '시간', 'VRAM / RAM'],
        rows: [
          {
            '구성': 'GPU · OpenAI Whisper',
            '정밀도': 'fp16',
            '시간': '2m23s',
            'VRAM / RAM': '4708 MB',
          },
          {
            '구성': 'GPU · whisper.cpp (Flash Attn)',
            '정밀도': 'fp16',
            '시간': '1m05s',
            'VRAM / RAM': '4127 MB',
          },
          {
            '구성': 'GPU · faster-whisper',
            '정밀도': 'fp16',
            '시간': '1m03s',
            'VRAM / RAM': '4525 MB',
          },
          {
            '구성': 'GPU · faster-whisper',
            '정밀도': 'int8',
            '시간': '59s',
            'VRAM / RAM': '2926 MB',
          },
          {
            '구성': 'GPU · faster-whisper, 배치 8',
            '정밀도': 'int8',
            '시간': '16s',
            'VRAM / RAM': '4500 MB',
          },
          {
            '구성': 'CPU · OpenAI Whisper',
            '정밀도': 'fp32',
            '시간': '6m58s',
            'VRAM / RAM': '2335 MB',
          },
          {
            '구성': 'CPU · whisper.cpp',
            '정밀도': 'fp32',
            '시간': '2m05s',
            'VRAM / RAM': '1049 MB',
          },
          {
            '구성': 'CPU · faster-whisper',
            '정밀도': 'int8',
            '시간': '1m42s',
            'VRAM / RAM': '1477 MB',
          },
          {
            '구성': 'CPU · faster-whisper, 배치 8',
            '정밀도': 'int8',
            '시간': '51s',
            'VRAM / RAM': '3608 MB',
          },
        ],
        note: '위의 직접 비교 표와 함께 읽어 주십시오. 이 구성에서 단일 스트림 fp16 GPU 속도는 두 도구가 비슷합니다. faster-whisper의 지속적인 강점은 int8 메모리 절감(fp16의 4.1~4.5 GB 대비 2.9 GB)과 배치 추론(59초 대비 16초)입니다. CPU에서는 배치 처리 없이 whisper.cpp fp32와 faster-whisper int8의 차이가 약 25% 이내입니다. README의 OpenAI Whisper 행이 기준값입니다. GPU에서는 2m23s(fp16, 4708 MB), CPU에서는 6m58s(fp32, 2335 MB)가 걸렸고, faster-whisper int8은 각각 59s와 1m42s입니다.',
      },
      realTimeSetup: {
        id: 'real-time',
        title: '실시간 전사 설정',
        content:
          '**실시간 전사는 마이크에서 들어오는 오디오를 청크 단위로 처리하여 음성보다 약간 지연된 텍스트를 생성합니다.** 두 도구 모두 이를 지원하지만, 서로 다른 트레이드오프가 있습니다.',
        items: [
          '**whisper.cpp 스트림 모드:** `./stream -m models/ggml-small.bin --step 3000 --length 10000 -t 4`를 실행합니다. 3초 청크를 처리하며, 지연 시간은 하드웨어와 모델에 따라 다르고 자체 측정은 하지 않았습니다. Python 불필요.',
          '**faster-whisper VAD 파이프라인:** `model.transcribe()`에서 `vad_filter=True`를 사용합니다. Silero VAD가 침묵 경계에서 자동으로 오디오를 세그먼트화합니다 — 고정 길이 창보다 더 자연스러운 청크.',
          '**지연 시간:** 하드웨어와 모델 크기에 따라 다르며 자체 측정은 하지 않았습니다. tiny와 같은 작은 모델은 대체로 응답이 빠르지만 WER은 더 높습니다.',
          '**실시간용 모델 선택:** small 또는 base가 실질적인 최적 지점입니다 — 음성을 따라가기에 충분히 빠르고, 깨끗한 오디오에 대해 충분히 정확합니다. 전용 GPU가 없는 한 실시간에서 large-v3는 피하십시오.',
          '**마이크 입력:** whisper.cpp는 SDL2 또는 portaudio를 통해 원시 오디오를 읽습니다. faster-whisper는 모든 Python 오디오 라이브러리(sounddevice, pyaudio, soundfile)에서 오디오 배열을 읽습니다.',
          '**안정성:** whisper.cpp의 스트림 모드는 침묵 중에 반복 채움 토큰("환각")을 생성할 수 있습니다. `--suppress-blank`와 `--no-speech-threshold`로 억제하십시오.',
        ],
      },
      appleSiliconSection: {
        id: 'apple-silicon',
        title: 'Apple Silicon: whisper.cpp가 자연스러운 선택',
        content:
          '**M1부터 M5까지의 Mac에서는 faster-whisper에 Metal 백엔드가 없고 Mac에서 CPU 전용으로만 동작하므로, Core ML / Metal 가속을 쓰는 whisper.cpp가 자연스러운 도구입니다.** whisper.cpp README는 Core ML 인코더가 CPU 전용 실행보다 3배 넘게 빠르다고 밝힙니다(개발자 공개 수치). M5 Pro의 large-v3에 대한 공개 벤치마크는 찾지 못했으므로 이 가이드는 Apple 칩의 실시간 배율을 제시하지 않습니다.',
        items: [
          '**Core ML 내보내기:** `./models/generate-coreml-model.sh large-v3`를 실행하여 인코더를 Core ML 형식으로 내보냅니다. 이를 통해 인코더 추론이 Apple Neural Engine으로 오프로드됩니다.',
          '**벤치마크:** whisper.cpp 프로젝트는 [벤치마크 토론](https://github.com/ggml-org/whisper.cpp/discussions/89)에 측정값을 모읍니다(인코더 시간이며, 확인 시점에 M5 항목은 없었습니다). M5 Pro의 large-v3에 대한 공개 벤치마크는 찾지 못했으므로 Apple 칩의 실시간 배율은 제시하지 않습니다.',
          '**내 Mac에서 직접 측정:** whisper.cpp에는 인코더 시간을 재는 `whisper-bench` 도구가 포함되어 있습니다. 또는 실제 파일을 처음부터 끝까지 측정하십시오. 결과는 칩, 모델 크기, 양자화에 따라 달라집니다.',
          '**메모리:** 통합 메모리는 별도의 VRAM이 없음을 의미합니다. whisper.cpp README는 large 모델에 약 3.9GB의 메모리가 필요하다고 밝히며, 16GB Mac에서도 다른 프로세스를 위한 여유가 남습니다.',
          '**Mac에서의 faster-whisper:** CPU 전용(int8). 배치 전사에는 쓸 수 있지만 Metal 경로가 없고, Apple Silicon에서 whisper.cpp와 비교한 벤치마크는 찾지 못했습니다.',
          '**권장 사항:** Mac의 대부분의 STT 작업에는 whisper.cpp를 사용하십시오. Metal 가속을 유지하면서 Python 통합이 필요하면 pywhispercpp를 추가하십시오.',
        ],
      },
      nvidiaSection: {
        id: 'nvidia-gpu',
        title: 'NVIDIA GPU: 공개 테스트에서 faster-whisper 우위',
        content:
          '**NVIDIA GPU가 있는 Windows와 Linux에서는 확인한 공개 테스트에서 faster-whisper가 더 빠른 도구였습니다.** 제3자 RTX 4070 Ti 테스트(large-v3, 2026년 6월)에서는 실시간 대비 23배로 whisper.cpp CUDA의 15배보다 빨랐고, faster-whisper README 테스트(large-v2, RTX 3070 Ti)에서는 단일 스트림에서 두 도구가 거의 비슷했으며(1m03s 대 1m05s), int8과 배치 처리에서 faster-whisper가 앞섰습니다.',
        items: [
          '**RTX 4070 Ti(12GB), large-v3, 제3자 테스트:** faster-whisper 실시간 대비 23배(large-v3-turbo: 56배), whisper.cpp CUDA 15배(large-v3-turbo: 40배).',
          '**RTX 3070 Ti(8GB), large-v2, faster-whisper README:** 13분 파일이 fp16에서 1m03s, int8에서 59s(VRAM 2926 MB), 배치 크기 8의 int8에서 16s가 걸렸습니다.',
          '**그 밖의 카드(RTX 3060, RTX 4060):** 이 카드들의 large-v3 공개 벤치마크는 찾지 못했으므로 속도 수치는 제시하지 않습니다. 위의 int8 VRAM 수치가 적합 여부를 가늠하는 주된 기준입니다.',
          '**int8 대 float16:** README 테스트에서 int8은 VRAM을 약 3분의 1 덜 쓰고(2926 MB 대 4525 MB) 조금 더 빨랐으며(59s 대 1m03s), 정확도 손실은 보통 무시할 수 있는 수준이었습니다. NVIDIA에서는 `compute_type="int8"`이 무난한 기본값입니다.',
          '**배치 처리:** faster-whisper의 `batched=True` 파라미터는 여러 오디오 파일의 병렬 처리를 가능하게 하여, 대규모 전사 작업에서 GPU 활용을 극대화합니다.',
          '**Python 파이프라인 통합:** faster-whisper는 LangChain, Haystack 및 커스텀 Python 파이프라인에 직접 통합됩니다. whisper.cpp 래핑과 비교하여 서브프로세스 오버헤드 없음.',
        ],
      },
      legacyGpu: {
        id: 'older-nvidia-gpus',
        title: '구형 NVIDIA GPU(GTX 970): int8이 float32로 대체됨',
        content:
          '**GTX 970(Maxwell, compute capability 5.2)에서도 faster-whisper는 CUDA로 동작하지만, `compute_type="int8"`을 지정해도 실제 int8이 되지 않고 CTranslate2가 가중치를 float32로 변환합니다.** 양자화 표는 compute capability 6.0 이하의 모든 GPU를 요청한 타입과 무관하게 float32로 매핑하므로, RTX 카드에서 언급되는 VRAM 절감과 int8 속도 향상은 적용되지 않습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GTX 970(compute capability 5.2)에서 faster-whisper는 CUDA에서 float32로만 동작하며, 요청한 int8 연산 타입은 자동으로 변환됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'GTX 970은 GPU int8을 쓰기에는 너무 오래되었습니다. 동작은 하지만 메모리 절감이 없으므로 4 GB에서는 tiny, base, small 모델을 사용하십시오.',
          },
        ],
        items: [
          '**여전히 동작하는 것:** CTranslate2의 사전 빌드 바이너리는 compute capability 3.5 이상의 NVIDIA GPU를 지원하므로 GTX 970(5.2)에서도 설치된 CUDA와 cuDNN 라이브러리가 릴리스와 맞는다면 faster-whisper를 CUDA로 실행할 수 있습니다(일반적인 문제 참조).',
          '**GPU int8이 동작하는 범위:** int8은 compute capability 7.0 이상(Volta 및 RTX 20 시리즈 이후) 또는 정확히 6.1(GTX 1050~1080 Ti, int8_float32)이 필요합니다. 6.0, 6.2 및 그 이하는 float32로 대체되며, float16은 7.0 이상이 필요합니다.',
          '**메모리에 미치는 영향:** float32는 파라미터당 4바이트로 int8의 1바이트보다 큽니다. 파라미터 수로 계산하면 large-v3(1.55B)는 가중치만으로 약 6 GB가 필요하여 GTX 970의 4 GB를 넘습니다. small(244M, float32로 약 1 GB)은 여유 있게 들어가고 medium(769M, 약 3 GB)은 빠듯합니다.',
          '**속도:** GTX 970을 벤치마크하지 않았으므로 여기에는 실측값이 없습니다. 이 가이드의 RTX 4070 Ti 수치보다 훨씬 낮은 float32 처리량을 예상하시고, tiny, base, small을 직접 가진 오디오로 테스트하십시오.',
          '**GPU가 지원하는 타입 확인:** `ctranslate2.get_supported_compute_types("cuda")`는 CTranslate2가 해당 카드에서 허용하는 연산 타입을 나열합니다.',
          '**대안:** CPU int8(`device="cpu", compute_type="int8"`)은 최신 x86 CPU 어디에서나 동작하며, whisper.cpp의 양자화 GGML 모델(예: `ggml-large-v3-q5_0.bin`, 약 3~4 GB)은 더 큰 모델을 4 GB에 맞추는 일반적인 방법입니다. 사용 중인 카드에서 CUDA 또는 Vulkan 빌드를 확인하십시오.',
        ],
        codeBlock: `import ctranslate2
from faster_whisper import WhisperModel

# Which compute types does this GPU accept?
print(ctranslate2.get_supported_compute_types("cuda"))

# On compute capability < 6.1 (e.g. GTX 970), request float32 explicitly so nothing is converted silently
model = WhisperModel("small", device="cuda", compute_type="float32")`,
        codeLanguage: 'python',
      },
      raspberryPi: {
        id: 'raspberry-pi-5',
        title: 'Raspberry Pi 5의 Whisper: tiny, base, small',
        content:
          '**Raspberry Pi 5에서 whisper.cpp는 tiny와 base 모델을 실시간 전사에 사용할 수 있지만, small 모델은 실시간보다 느리므로 배치 작업에 쓰는 것이 좋습니다.** Pi 5의 쿼드코어 Cortex-A76에는 Whisper용으로 쓸 만한 GPU 경로가 없어 모든 추론이 CPU(ARM NEON)에서 이루어집니다. 양자화 GGML 모델(`ggml-*-q5_0.bin`)을 사용하면 메모리 사용량이 줄고 추론이 빨라집니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Raspberry Pi 5에서 whisper.cpp small 모델은 실시간보다 느리게(커뮤니티 보고 기준이며 자체 측정은 아닙니다. 배치 전용) 동작하며, 실시간 음성을 따라가는 것으로 보고된 것은 tiny와 base입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Pi 5는 tiny와 base Whisper 모델로 실시간 오디오를 전사할 수 있지만, small 모델은 실시간을 따라가기에 너무 무겁습니다. small은 라이브 마이크가 아니라 백그라운드에서 처리하는 녹음 파일에 사용하십시오.',
          },
        ],
        items: [
          '**Pi 5의 Whisper small:** CPU에서 실시간보다 느리다고 보고됩니다(자체 측정은 하지 않았으므로 시간은 참고용입니다). WER 3.4%(Whisper 논문, LibriSpeech test-clean)로 정확하지만 라이브 자막에는 너무 느리므로 야간/배치 전사에 사용하십시오.',
          '**Pi 5의 Whisper base:** 멀티스레딩(`-t 4`)으로 대략 실시간 수준이라고 보고되며, 빌드·냉각·오디오에 따라 결과가 달라집니다. WER 5.0%를 허용할 수 있다면 Pi에서 실시간 전사에 가장 현실적인 선택입니다.',
          '**Pi 5의 Whisper tiny:** 가장 빠른 옵션으로, 일반적으로 실시간 사용이 가능하다고 보고되지만 WER이 7.6%로 높습니다. 웨이크 워드와 짧은 명령 인식에 적합합니다.',
          '**양자화 모델 사용:** `bash ./models/download-ggml-model.sh small-q5_0`은 정확도 손실을 최소화하면서 RAM을 줄이고 추론을 빠르게 합니다. Pi 5의 공유 메모리에서는 중요합니다.',
          '**Pi 5의 faster-whisper:** 설치할 수 있고(`pip install faster-whisper`, CPU int8) 배치 작업에서는 경쟁력이 있지만, 임베디드에서는 더 가벼운 C 바이너리인 whisper.cpp가 더 흔한 선택입니다.',
          '**발열:** 지속적인 전사는 Pi 5 CPU에 큰 부하를 주므로, 이 수치가 떨어지는 열 스로틀링을 피하려면 능동 냉각을 사용하십시오.',
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
            text: 'Mac이라면 whisper.cpp를 선택하십시오. faster-whisper가 지원하지 않는 Metal과 Core ML을 쓸 수 있습니다. NVIDIA GPU와 Python을 쓴다면 faster-whisper를 선택하십시오. 공개 테스트에서 더 빨랐고 int8에서 GPU 메모리도 덜 썼습니다.',
          },
        ],
        columns: ['시나리오', '최선의 선택', '이유'],
        rows: [
          {
            '시나리오': 'Apple Silicon Mac (모든 모델)',
            '최선의 선택': 'whisper.cpp',
            '이유': 'Metal / Core ML 가속. faster-whisper에는 Metal 백엔드 없음',
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
            '최선의 선택': '둘 다 테스트',
            '이유': 'README와 제3자 CPU 테스트 결과가 엇갈림. 직접 측정',
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
          '**[insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper):** Flash Attention 2 지원을 추가하는 Hugging Face Transformers 파이프라인 래퍼로, NVIDIA 하드웨어에서 빠른 배치 GPU 추론을 제공하며, README는 큰 속도 향상을 보고합니다(개발자 공개 수치이며 faster-whisper와의 비교는 자체 측정하지 않았습니다). 최적 사용 사례: NVIDIA GPU에서 대용량 오디오 파일 배치 처리. Flash Attention 2 호환 GPU 필요(Ampere 이상: RTX 3000+, A100, H100).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '일반적인 문제 및 해결책',
        content: '가장 자주 발생하는 설정 및 런타임 문제와 직접적인 해결책:',
        items: [
          '**CUDA 버전 불일치:** 현재의 faster-whisper 릴리스에는 CUDA 12용 cuBLAS와 cuDNN 9가 필요합니다. 오래된 라이브러리에 묶여 있다면 ctranslate2를 고정하십시오: `pip install --force-reinstall ctranslate2==4.4.0`(CUDA 12와 cuDNN 8) 또는 `3.24.0`(CUDA 11과 cuDNN 8). CUDA 버전은 `nvcc --version`으로 확인하십시오.',
          '**Metal 모델 내보내기 실패:** Xcode Command Line Tools가 설치되어 있는지 확인하십시오 — `xcode-select --install`을 실행합니다. Core ML 내보내기 스크립트는 `coremltools` Python 패키지가 필요합니다: `pip install coremltools`.',
          '**침묵 중 환각:** 두 도구 모두 음성이 없는 오디오 세그먼트에서 반복 채움 토큰을 생성할 수 있습니다. whisper.cpp 스트림 모드에서는 `--no-speech-threshold 0.6`을, faster-whisper의 `model.transcribe()`에서는 `vad_filter=True`를 사용하여 자동으로 음성이 없는 세그먼트를 건너뛰십시오.',
          '**large-v3에서 메모리 부족:** faster-whisper에서 int8 양자화로 전환하십시오(`compute_type="int8"`). README 테스트(large-v2)에서 VRAM이 약 4.5GB(float16)에서 약 2.9GB로 줄었습니다. whisper.cpp에서는 양자화된 GGML 변형(예: `ggml-large-v3-q5_0.bin`)을 쓰면 메모리가 약 3~4GB로 줄어듭니다.',
          '**영어가 아닌 오디오에서 알아볼 수 없는 출력:** 영어가 아닌 음성에 `.en` 모델 변형(tiny.en, base.en)을 사용하지 마십시오 — 이것들은 영어 전용입니다. 다국어 모델(base, small, medium, large-v3)을 사용하고 언어를 명시적으로 지정하십시오: whisper.cpp에서 `-l ko` 또는 faster-whisper에서 `language="ko"`.',
          '**느린 CPU 추론:** CPU가 AVX2 명령어를 지원하는지 확인하십시오(최적화된 CPU 추론에 필요). Linux에서 `grep avx2 /proc/cpuinfo` 또는 Mac에서 `sysctl machdep.cpu.features`로 확인하십시오. AVX2 없는 CPU는 일반 SIMD로 폴백되어 2–3배 느립니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'whisper.cpp용 Debian 또는 apt 패키지가 있습니까?',
            a: '예 — whisper.cpp는 이제 Debian(현재 sid)에 공식 패키지로 제공되며, `whisper.cpp` 바이너리와 함께 공유 라이브러리로 링크할 수 있는 `libwhisper-dev`, `libwhisper1`도 제공합니다. 아직 Debian 안정 버전이나 Ubuntu 기본 저장소에는 도달하지 않았으므로, 대부분의 시스템에서는 여전히 sid를 사용하거나 소스에서 빌드해야 합니다. 소스 빌드를 원하지 않는다면 Debian 9 이상과 Ubuntu용 비공식 Snap(`sudo snap install whisper-cpp`)도 사용할 수 있습니다.',
          },
          {
            q: '설치된 whisper.cpp 버전은 어떻게 확인합니까?',
            a: '컴파일된 바이너리를 인자 없이 또는 `--help`와 함께 실행하면 배너 줄에 버전이 출력됩니다. 클론한 저장소 안에서 `git describe --tags`로 정확한 커밋을 확인하거나, 빌드 날짜를 github.com/ggml-org/whisper.cpp/releases의 릴리스 노트와 비교해 현재 버전인 v1.9.5보다 뒤처졌는지 확인할 수도 있습니다.',
          },
          {
            q: 'whisper.cpp와 faster-whisper의 전사 정확도는 동일합니까?',
            a: '대체로 그렇습니다. 두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용하므로 정확도는 매우 비슷할 것입니다. 차이는 주로 추론 런타임(C/C++ vs CTranslate2 Python)에 있습니다. 양자화(예: int8), 디코딩 설정, 수치 정밀도에 따라 출력에 작은 차이가 생길 수 있습니다. 두 런타임 간 WER 차이는 측정하지 않았으니 직접 가진 오디오로 시험해 보십시오.',
          },
          {
            q: 'Apple Silicon Mac에서 faster-whisper를 사용할 수 있습니까?',
            a: '예, 다만 CPU 전용으로 동작합니다. faster-whisper는 Metal을 지원하지 않습니다. whisper.cpp는 Metal과 Core ML을 쓸 수 있으며, README는 Core ML 인코더가 CPU 전용 실행보다 3배 넘게 빠르다고 밝힙니다. Apple Silicon에서 faster-whisper와 whisper.cpp를 비교한 공개 벤치마크는 찾지 못했으므로 직접 가진 오디오로 측정하십시오. Mac에서 faster-whisper를 쓰는 주된 이유는 이미 그것에 의존하는 Python 파이프라인이 있을 때입니다.',
          },
          {
            q: '음성 어시스턴트에 어떤 Whisper 모델 크기를 사용해야 합니까?',
            a: '실시간 음성 인터페이스의 경우, Whisper small이 표준 권장 사항입니다 — 깨끗한 영어에서 약 3.4% WER(Whisper 논문, LibriSpeech test-clean), 현대적인 CPU 또는 GPU에서 낮은 지연 시간(하드웨어에 따라 다르며 자체 측정은 하지 않았습니다), 약 2GB RAM에 수용됩니다. 하드웨어가 매우 제한된 경우(Raspberry Pi Zero 2W, 구형 전화기) ~7.6% WER을 허용할 수 있다면 tiny를 사용하십시오. 지연 시간이 제약이 아닌 배치 전사의 경우에만 medium 또는 large-v3를 사용하십시오.',
          },
          {
            q: 'whisper.cpp는 영어 외의 언어를 지원합니까?',
            a: '그렇습니다. 모든 다국어 Whisper 모델(base, small, medium, large-v3)은 99개 언어를 지원합니다. CLI에 `-l [언어 코드]`를 추가하십시오: 한국어는 `-l ko`, 독일어는 `-l de`, 일본어는 `-l ja` 등. tiny.en 및 base.en 모델은 영어 전용이며 다국어 대응물보다 영어에서 약간 더 정확합니다.',
          },
          {
            q: 'CUDA 지원을 포함하여 faster-whisper를 어떻게 설치합니까?',
            a: '`pip install faster-whisper`로 설치합니다. 현재 릴리스에는 시스템에 CUDA 12용 NVIDIA cuBLAS와 cuDNN 9가 필요합니다(Linux에서는 `pip install nvidia-cublas-cu12 "nvidia-cudnn-cu12==9.*"`로 설치할 수 있습니다). 오래된 CUDA 11 / cuDNN 8 환경에서는 `ctranslate2==3.24.0`(CUDA 12와 cuDNN 8이라면 `4.4.0`)으로 고정하십시오. 그런 다음 모델 로딩 시 `device="cuda"`를 지정합니다: `WhisperModel("large-v3", device="cuda", compute_type="int8")`. CUDA를 사용할 수 없을 때 CPU로 폴백하려면 `device="auto"`를 사용하십시오.',
          },
          {
            q: 'whisper.cpp와 faster-whisper 중 어느 것이 더 정확합니까?',
            a: '매우 비슷하지만 동일하다고 보장되지는 않습니다. 두 도구 모두 동일한 OpenAI Whisper 모델 가중치를 사용하므로 같은 오디오에서 정확도는 매우 비슷할 것입니다. whisper.cpp와 faster-whisper의 주된 차이는 속도와 플랫폼 지원입니다. 양자화(int8, q5_0), beam 크기 등 디코딩 설정이 전사 결과를 약간 바꿀 수 있으며, 이는 측정하지 않았으니 직접 가진 오디오 샘플로 두 도구를 비교해 보십시오.',
          },
          {
            q: '8GB RAM으로 Whisper large-v3를 실행할 수 있습니까?',
            a: 'GPU에서는 예. faster-whisper의 large-v3 int8은 8GB GPU에 들어갈 것으로 보입니다(faster-whisper README는 large-v2 int8에서 VRAM 2926 MB를 측정했습니다). CPU 전용 환경에서는 large-v3에 8GB RAM이 빠듯합니다(float32는 약 10GB 필요). CPU 전용 시스템에서는 medium(RAM 5GB)이나 small(RAM 2GB)을 사용하십시오. README 테스트에서 whisper.cpp는 CPU에서 faster-whisper보다 RAM을 덜 썼습니다(int8 기준 1049 MB 대 1477 MB).',
          },
          {
            q: '로컬 Whisper vs 클라우드 STT의 비용은 얼마입니까?',
            a: '지속적인 라이선스 비용이나 분당 요금은 없습니다. 클라우드 STT 서비스는 보통 오디오 분당 $0.006–$0.024를 부과합니다(최신 요금 확인) — 주당 8시간 회의를 전사하는 개발자라면 월 약 $12–50입니다. 로컬 Whisper는 이미 소유한 하드웨어에서 동작하며, 분당 요금과 API 키 관리가 없고, 오디오를 클라우드 서비스로 보낼 필요도 없습니다(전기 요금과 설정 시간 제외).',
          },
          {
            q: 'GTX 970에서 faster-whisper int8이 동작합니까?',
            a: '실제 int8로는 동작하지 않습니다. GTX 970의 compute capability는 5.2이며, CTranslate2는 compute capability 7.0 이상(또는 정확히 6.1)의 GPU에서만 int8을 실행합니다. 더 오래된 카드에서는 가중치가 자동으로 float32로 변환됩니다. faster-whisper는 여전히 GPU에서 float32로 동작하므로 4 GB 안에 머물려면 tiny, base, small을 사용하거나 최신 x86 CPU에서 동작하는 CPU int8을 사용하십시오. GTX 970을 벤치마크하지 않았으므로 실측 속도 수치는 없습니다.',
          },
          {
            q: 'whisper.cpp와 faster-whisper의 Whisper 모델 파일은 얼마나 큽니까?',
            a: 'whisper.cpp README는 GGML 모델 파일의 디스크 크기를 tiny 약 75 MiB, base 142 MiB, small 466 MiB, medium 1.5 GiB, large 2.9 GiB로 나열하며, 필요한 메모리는 각각 약 273 MB, 388 MB, 852 MB, 2.1 GB, 3.9 GB입니다. faster-whisper는 처음 사용할 때 Hugging Face에서 CTranslate2 모델을 내려받으며, large-v3는 약 3 GB입니다(1.55B 파라미터 × float16 2바이트). 위의 모델 크기 표에 각 크기의 파라미터 수가 나와 있습니다.',
          },
          {
            q: '로컬 전사에서 Whisper large-v3-turbo가 large-v3보다 낫습니까?',
            a: '더 빠를 뿐 더 정확하지는 않습니다. large-v3-turbo는 OpenAI가 디코더를 32층에서 4층으로 줄였기 때문에 809M 파라미터이며, 모델 카드는 large-v3보다 훨씬 빠르고 품질 저하는 경미하다고 설명합니다(MIT 라이선스). 카드는 환각이나 텍스트 반복 가능성과 언어별 정확도 편차도 경고합니다. 가장 어려운 오디오에는 large-v3를, 속도가 중요하면 turbo(영어라면 distil-large-v3)를 사용하십시오. whisper.cpp와 faster-whisper 모두 실행할 수 있습니다.',
          },
          {
            q: 'whisper.cpp는 CUDA 대신 AMD나 Intel GPU를 사용할 수 있습니까?',
            a: '예. whisper.cpp의 Vulkan 백엔드(`-DGGML_VULKAN=1`)는 드라이버가 Vulkan API를 지원하면 제조사와 무관하게 동작하고, ROCm/HIP(`-DGGML_HIP=1`)은 AMD GPU를 대상으로 하며, OpenVINO는 Intel CPU와 GPU에서 인코더를 가속합니다. faster-whisper 자체 문서는 NVIDIA CUDA만 다루며, CTranslate2 릴리스 노트에는 ROCm 휠이 언급되지만 해당 경로는 테스트하지 않았습니다.',
          },
          {
            q: 'Mac에서 mlx-whisper가 whisper.cpp보다 빠릅니까?',
            a: 'large-v3-turbo에 대해서는 독립적인 테스트가 그렇다고 말합니다. Bill Mill의 2026년 1월 재측정에서는 같은 긴 녹음에서 mlx_whisper가 약 13.1초, whisper.cpp가 26.7초로 약 2배 빨랐습니다. 짧은 클립에 대한 커뮤니티 속도 테스트에서는 두 도구가 비슷했으며, whisper.cpp는 Core ML과 q5_0 양자화를 사용했습니다. 이 가이드의 M5 Pro 수치는 MLX와 비교하지 않았으므로 선택하기 전에 직접 가진 오디오로 벤치마크하십시오.',
          },
          {
            q: 'faster-whisper가 OpenAI Whisper보다 빠릅니까?',
            a: '예. faster-whisper README에 따르면 CTranslate2 기반 재구현은 같은 정확도에서 원본 openai/whisper 패키지보다 최대 4배 빠르고 메모리를 덜 사용하며, 8비트 양자화로 CPU와 GPU에서 효율이 더 높아집니다. README의 13분 오디오 테스트에서 openai/whisper는 RTX 3070 Ti(large-v2, fp16)에서 2m23s가 걸렸고 faster-whisper는 fp16에서 1m03s, int8에서 59s였습니다. Intel Core i7-12700K CPU(small 모델, fp32)에서는 openai/whisper가 6m58s, faster-whisper int8이 1m42s였습니다. 둘 다 같은 Whisper 가중치를 사용하므로 정확도는 거의 같을 것이며, 세 번째 런타임인 whisper.cpp는 Flash Attention을 켠 GPU 테스트를 1m05s에 마쳤습니다.',
          },
          {
            q: 'Whisper는 CPU보다 GPU에서 더 빠릅니까?',
            a: '큰 모델은 그렇고, 작은 모델은 CPU로 충분한 경우가 많습니다. faster-whisper README에서 large-v2는 RTX 3070 Ti의 int8로 13분 파일을 59초에 처리했고, small 모델은 Intel Core i7-12700K CPU의 int8로 1m42s가 걸렸습니다. 모델과 하드웨어가 다르므로 크기 순서만 비교하십시오. 제3자가 Intel Core i5-13400F CPU에서 large-v3로 한 테스트는 whisper.cpp를 실시간 대비 15배, faster-whisper를 2배로 측정했습니다. 커뮤니티 보고에 따르면 Raspberry Pi 5에서 tiny와 base가 실시간 음성을 따라가지만, 자체 측정은 하지 않았습니다.',
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
          '[GitHub의 insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) — NVIDIA GPU 배치 추론을 위한 Whisper Flash Attention 2 파이프라인(벤치마크는 README의 개발자 공개 수치).',
          '[GitHub의 OpenAI Whisper](https://github.com/openai/whisper) — 원본 Whisper 모델, 논문, 모든 크기의 모델 카드와 상대 속도 표(A100).',
          '[x2q.net: Whisper 백엔드 비교](https://www.x2q.net/post/whisper-backend-shootout/) — faster-whisper와 whisper.cpp의 실시간 배율 근거가 되는 2026년 6월 제3자 벤치마크(RTX 4070 Ti와 Intel Core i5-13400F, large-v3, 덴마크어 통화 녹음).',
          '[whisper.cpp 벤치마크 토론](https://github.com/ggml-org/whisper.cpp/discussions/89) — Apple Silicon 등 칩에 대한 커뮤니티의 인코더 시간.',
          '[OpenAI Whisper 논문 (Radford et al., 2022)](https://arxiv.org/abs/2212.04356) — "Robust Speech Recognition via Large-Scale Weak Supervision". WER 값의 출처.',
          '[CTranslate2 문서](https://github.com/OpenNMT/CTranslate2) — 양자화 세부 사항, 하드웨어 지원, int8 최적화 기초.',
          '[CTranslate2 양자화 문서](https://opennmt.net/CTranslate2/quantization.html) — GPU compute capability별로 지원되는 연산 타입(GTX 970 섹션의 근거).',
          '[faster-whisper README 벤치마크](https://github.com/SYSTRAN/faster-whisper#benchmark) — 참고 벤치마크에 사용한 13분 GPU·CPU 소요 시간과 현재 CUDA 12 / cuDNN 9 요구 사항.',
          '[Hugging Face의 openai/whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) — 모델 카드: 809M 파라미터, 디코더 4층, MIT 라이선스.',
          '[Bill Mill: mlx_whisper와 whisper.cpp 벤치마크 업데이트](https://notes.billmill.org/dev_blog/2026/01/updated_my_mlx_whisper_vs._whisper.cpp_benchmark.html) — Apple Silicon에서 large-v3-turbo 소요 시간의 독립 비교.',
          '[whisper.cpp 릴리스](https://github.com/ggml-org/whisper.cpp/releases) — v1.9.4와 v1.9.5 릴리스 노트.',
          '[CTranslate2 릴리스](https://github.com/OpenNMT/CTranslate2/releases) — v4.8.3, v4.8.4, v4.8.5 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 로컬 TTS 및 음성 복제: Piper vs Coqui vs XTTS v2](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — TTS 보완 가이드: 전사된 텍스트를 오프라인으로 다시 음성으로 변환합니다.',
          '[2026년 완전 오프라인 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026) — Whisper STT를 로컬 LLM과 Piper TTS에 연결하여 완전한 음성 파이프라인을 만듭니다.',
          '[2026년 로컬 멀티모달 AI 파이프라인](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — STT 및 TTS와 함께 비전 모델을 추가하여 완전한 로컬 멀티모달 스택을 구성합니다.',
          '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 완전한 음성 + LLM 파이프라인을 위한 GPU 및 RAM 요구 사항.',
          '[스마트폰에서 로컬 음성 어시스턴트 구축](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 모바일 버전: iPhone의 WhisperKit, Android의 Layla.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp vs faster-whisper 2026: 로컬 STT 벤치마크, 설정 및 GPU 가속',
      description: '2026년 로컬 음성 인식을 위한 whisper.cpp와 faster-whisper 비교. WER 벤치마크, GPU vs CPU 속도, Apple Silicon Metal, 실시간 전사, 설치 가이드. 오프라인 동작.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-whisper-stt-comparison',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp vs faster-whisper 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-whisper-stt-comparison' },
      ],
    },
  },
}
