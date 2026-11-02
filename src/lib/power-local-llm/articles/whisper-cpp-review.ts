// Whisper.cpp Review: Local Speech-to-Text in Pure C/C++
// Slug: whisper-cpp-review
// Deep-dive companion to: local-whisper-stt-comparison (hub comparison of whisper.cpp vs faster-whisper)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-en.webp',
    title: 'Whisper.cpp Review: Local Speech-to-Text in Pure C/C++',
    seoTitle: 'Whisper.cpp Review: MIT, Install & CLI for Local STT',
    intro:
      'whisper.cpp is a C/C++ reimplementation of OpenAI\'s Whisper automatic speech recognition model, created by Georgi Gerganov and now maintained under the [ggml-org GitHub organization](https://github.com/ggml-org/whisper.cpp). It transcribes speech to text entirely on-device, with no Python runtime and no cloud API call, and supports CPU, Apple Silicon (Metal, Core ML) and NVIDIA GPUs (CUDA), among other backends. This review covers its history, how to install and run it, real command-line usage, its MIT license and cost (free), and where it is not the right tool — including a link to our comparison with faster-whisper for readers deciding between the two.',
    metaDescription:
      'Whisper.cpp review: the MIT-licensed C/C++ port of OpenAI Whisper for local speech-to-text. Install steps, CLI commands, license, and faster-whisper.',
    twitterDescription:
      'Whisper.cpp review 2026: Georgi Gerganov\'s C/C++ port of OpenAI Whisper for offline, on-device speech-to-text. History, setup, real commands, MIT license, and honest limits.',
    audience:
      'Developers and self-hosters who want offline, on-device speech-to-text without a Python runtime or cloud API — on x86 and ARM CPUs, Apple Silicon, or NVIDIA GPU pipelines.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp review',
    targetKeywords: [
      'whisper.cpp review',
      'whisper.cpp',
      'whisper cpp install',
      'whisper cpp setup',
      'ggerganov whisper',
      'local speech to text c++',
      'offline whisper transcription',
      'whisper cpp license',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp is a free, MIT-licensed C/C++ port of OpenAI\'s Whisper speech-to-text model that runs transcription on-device without Python.** It supports CPU, Apple Metal, Core ML, CUDA and Vulkan. Compare it with faster-whisper in our [whisper.cpp vs faster-whisper comparison](/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      en: {
        question: 'What is whisper.cpp and is it worth using for local speech-to-text?',
        answer:
          'whisper.cpp is worth using if you want offline, on-device speech-to-text without installing Python or CUDA, or if you are targeting a platform like iOS, Android, or WebAssembly where a C/C++ library is easier to embed than a Python stack. It is free (MIT license), actively maintained, and uses the same underlying Whisper model weights as OpenAI\'s original release, so accuracy for a given model size follows upstream Whisper. Choose faster-whisper instead if your primary target is an NVIDIA GPU server running a Python pipeline — its CTranslate2 backend is commonly recommended there.',
        bullets: [
          'Created by Georgi Gerganov, first published in 2022 as a C/C++ port of OpenAI Whisper; now maintained under the ggml-org organization on GitHub.',
          'MIT-licensed, free, no paid tier, no account required.',
          'Runs on CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, and more — no Python runtime needed.',
          'Latest stable release: v1.9.5 (October 6, 2026); the repository\'s latest activity was on October 30, 2026, per the project\'s GitHub pages.',
          'Best fit: embedded devices, Apple Silicon, and any deployment where a single self-contained binary beats a Python environment.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: Who Built Whisper.cpp and Why', anchor: 'history' },
      { label: 'What Whisper.cpp Actually Does', anchor: 'what-it-does' },
      { label: 'Install and Run Whisper.cpp: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Cost', anchor: 'license-cost' },
      { label: 'What Whisper.cpp Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to Whisper.cpp', anchor: 'alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp is a free, MIT-licensed C/C++ port of OpenAI\'s Whisper speech-to-text model, created by Georgi Gerganov, that transcribes audio entirely on-device across CPU, Apple Metal, NVIDIA CUDA, and other backends with no Python required.',
          },
          {
            type: 'plain-terms',
            text: 'It turns spoken audio into text on your own computer or device instead of sending it to a cloud API — you build it from source (the project documents the CMake steps), feed it an audio file or a live microphone stream, and it gives you back a transcript, for free, using the same Whisper models OpenAI trained.',
          },
        ],
        items: [
          'Created by Georgi Gerganov in 2022; today maintained under the ggml-org GitHub organization.',
          'MIT license — free to use, modify, and redistribute, including commercially.',
          'Runs on CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm, and Ascend NPU backends.',
          'No Python runtime required — it builds from C/C++ source with CMake; Python bindings exist as separate community projects.',
          'Supports real-time microphone transcription via its stream example, in addition to batch file transcription.',
          'Latest stable release: v1.9.5, published October 6, 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review focuses on whisper.cpp as a standalone tool: its history, installation, real commands, licensing, and honest limits. For a side-by-side look at faster-whisper on Apple Silicon and NVIDIA GPUs, see the [whisper.cpp vs faster-whisper comparison](/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: Who Built Whisper.cpp and Why',
        content: [
          '**OpenAI released Whisper, its automatic speech recognition model, in September 2022** as an open-weight model trained on a large amount of multilingual audio, distributed as a Python package (`openai-whisper`) that depends on PyTorch and, for good performance, a CUDA-capable GPU.',
          '**Georgi Gerganov ported the model to plain C/C++ shortly after, in 2022**, under the [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) repository. Gerganov is also the creator of the ggml tensor library that underpins whisper.cpp\'s math and quantization, and later became known for llama.cpp, the equivalent C/C++ port for running large language models locally — the two projects share the same ggml foundation and the same design goal: run a model that normally needs Python and a GPU on ordinary hardware instead.',
          '**The motivation was portability and resource efficiency, not just speed.** The original Python/PyTorch implementation of Whisper is straightforward to run on a workstation with a good GPU, but heavy to deploy in an iOS app, a WebAssembly page, or on an embedded Linux board with no Python interpreter at all. whisper.cpp removes the PyTorch and Python dependency entirely, builds as native C/C++ code, and adds quantization support so smaller model variants fit in a few hundred megabytes of RAM.',
          '**The project has grown well beyond a single-author side project.** It now has hundreds of contributors, is packaged for Debian, and ships official support for Core ML (Apple Neural Engine), CUDA, Vulkan, OpenVINO, and other backends that did not exist in the original 2022 release. It remains a Whisper *runtime* — it does not train or fine-tune its own models, and every transcription still uses the same weights OpenAI published for a given model size (tiny through large-v3), converted into the project\'s GGML format.',
        ],
        faqs: [
          {
            q: 'Who created whisper.cpp?',
            a: 'Georgi Gerganov created whisper.cpp, first publishing it in 2022 as a C/C++ port of OpenAI\'s Whisper model. Gerganov also created the ggml tensor library it runs on and later created llama.cpp, the equivalent local-inference port for large language models.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What Whisper.cpp Actually Does',
        content: [
          'whisper.cpp takes an audio input — a file (WAV, and other formats via optional FFmpeg decoding) or a live microphone stream — and produces a text transcript, optionally with per-segment timestamps and translation into English. It does this by loading a Whisper model (converted to the project\'s GGML weight format) and running inference through the ggml tensor library, entirely on the local machine.',
        ],
        items: [
          '**Batch transcription.** Point the `whisper-cli` binary at an audio file and get back a transcript, with options for output as plain text, SRT/VTT subtitles, JSON, or CSV.',
          '**Real-time streaming.** The `whisper-stream` example captures live microphone audio and transcribes it continuously, useful for voice assistants or live captioning.',
          '**Multilingual transcription and translation.** Whisper\'s underlying models were trained on many languages; whisper.cpp can transcribe in the source language or translate directly to English, depending on the flags passed.',
          '**Hardware-accelerated inference.** On Apple Silicon, whisper.cpp can export models to Core ML format to use the Apple Neural Engine; on NVIDIA hardware it uses CUDA; on other GPUs it can use Vulkan or OpenVINO. On CPU-only machines, it uses AVX2 (x86) or NEON (ARM) vector instructions.',
          '**Quantization.** Models can be quantized (for example to 4-bit or 5-bit GGML formats) to trade a small amount of accuracy for significantly lower memory use and faster inference — the same technique llama.cpp uses for LLMs.',
        ],
        note: 'whisper.cpp is a runtime, not a model. Transcription accuracy for a given model size (tiny, base, small, medium, large-v3) is set by OpenAI\'s original training, not by whisper.cpp — the project\'s job is running that model efficiently without Python or a heavy GPU stack.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Install and Run Whisper.cpp: Step by Step',
        content: 'This walkthrough builds whisper.cpp from source and runs a first transcription, using the commands documented in the project\'s own README.',
        numberedItems: [
          {
            title: 'Clone the repository.',
            whyItMatters: 'Run `git clone https://github.com/ggml-org/whisper.cpp.git` followed by `cd whisper.cpp`. This pulls the full C/C++ source tree, including the CMake build files and model-download script.',
          },
          {
            title: 'Download a model.',
            whyItMatters: 'Run `sh ./models/download-ggml-model.sh base.en` to fetch the English-only base model in GGML format. Swap `base.en` for `tiny`, `small`, `medium`, or `large-v3` depending on the accuracy/speed trade-off you want, or drop the `.en` suffix for a multilingual model.',
          },
          {
            title: 'Build the project.',
            whyItMatters: 'Run `cmake -B build` followed by `cmake --build build -j --config Release`. This compiles the CLI binaries (`whisper-cli`, `whisper-stream`, and others) into the `build/bin/` directory. No Python installation is required for this step.',
          },
          {
            title: 'Transcribe a sample file.',
            whyItMatters: 'Run `./build/bin/whisper-cli -f samples/jfk.wav` using the sample audio file bundled with the repository. This confirms the build works end-to-end and prints a transcript to the terminal.',
          },
          {
            title: 'Transcribe your own audio.',
            whyItMatters: 'Replace the sample path with your own WAV file: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. Add `-osrt` to also write an `.srt` subtitle file, or `-oj` for JSON output.',
          },
          {
            title: '(Optional) Enable GPU acceleration.',
            whyItMatters: 'On Apple Silicon, Metal acceleration is used automatically once built with the default CMake flags on macOS. On an NVIDIA machine, add `-DGGML_CUDA=ON` to the `cmake -B build` step (requires the CUDA toolkit installed) to build with CUDA support.',
          },
          {
            title: '(Optional) Try real-time transcription.',
            whyItMatters: 'Build the streaming example and run `./build/bin/whisper-stream -m models/ggml-base.en.bin` to transcribe live microphone audio continuously instead of a fixed file.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'Beyond the basic install walkthrough above, these are common real-world invocations of the `whisper-cli` binary.',
        ],
        codeBlock: `# Transcribe an audio file to plain text (default output)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# Transcribe and output SRT subtitles, using the larger, more accurate model
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# Translate non-English speech directly into English text
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# Pick a specific GPU device (multi-GPU machines)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# Real-time transcription from the default microphone
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'Flags shown here (`-m` model path, `-f` input file, `-osrt` SRT output, `-tr` translate to English, `-g`/`--gpu-device` GPU selection, `-t` thread count) are documented in the project\'s own `--help` output and README. Always run `./build/bin/whisper-cli --help` to confirm the current flag set for the version you have installed, since CLI options can change between releases.',
        items: [
          '**pywhispercpp** provides Python bindings for whisper.cpp for teams that want the Metal/CUDA acceleration but still prefer to call it from Python code rather than shelling out to the CLI binary.',
          '**whisper.cpp also ships a small local HTTP server example** (`whisper-server`) for teams that want to send audio over HTTP instead of invoking the CLI per file — useful for wiring whisper.cpp into an existing service without a Python dependency.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Cost',
        content: [
          '**whisper.cpp is licensed under the MIT License** — the license file in the [official repository](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) permits free use, modification, and redistribution, including in closed-source and commercial products, with no royalty and no attribution requirement beyond keeping the license notice.',
          '**There is no paid tier, subscription, or license fee for whisper.cpp itself.** The only real costs are the hardware you run it on (or a cloud VM if you choose to host it) and, if you build a product on top of it, your own development time. There is no usage metering, no API key, and no vendor lock-in.',
          '**The underlying Whisper model weights are separately licensed by OpenAI under MIT** as well, so both the runtime (whisper.cpp) and the model weights it loads are permissively licensed for commercial use.',
        ],
        faqs: [
          {
            q: 'Is whisper.cpp free to use commercially?',
            a: 'Yes. whisper.cpp is MIT-licensed, and the Whisper model weights it uses are also released by OpenAI under an MIT license. Both permit commercial use, modification, and redistribution without a fee.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What Whisper.cpp Is Not Good For',
        content: [
          'whisper.cpp is a transcription runtime, not a full conversational-AI or speaker-diarization product. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Speaker diarization ("who said what").** whisper.cpp transcribes what was said but does not natively separate or label different speakers in a multi-person recording. Diarization requires a separate model or pipeline (for example, pairing whisper.cpp\'s transcript with a diarization tool) layered on top.',
          '**Sub-100-millisecond streaming latency at scale.** The built-in `whisper-stream` example works well for a single live microphone on one machine, but whisper.cpp is not a purpose-built, horizontally scaled streaming ASR service the way a dedicated real-time speech API is designed to be for many concurrent users.',
          '**Zero setup for non-technical users.** whisper.cpp is a command-line tool that most people build from source — the project\'s README documents a CMake build, and we did not find a graphical installer or app-store listing aimed at non-developers on the official repository. Users who want a point-and-click transcription app should look at a GUI application built on top of whisper.cpp, or a hosted transcription service, instead.',
          '**Squeezing the last bit of NVIDIA GPU throughput on a Python-first pipeline.** On the largest models on NVIDIA hardware, faster-whisper\'s CTranslate2 backend is commonly reported to be quicker and lighter on VRAM than whisper.cpp\'s CUDA path (our [comparison](/power-local-llm/local-whisper-stt-comparison) discusses it; we did not run these measurements ourselves) — if your deployment is already a Python service on an NVIDIA GPU, faster-whisper is often the better fit.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Whisper.cpp',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'Best fit': 'Python pipelines on NVIDIA GPUs — CTranslate2 backend, ~4x throughput vs. original Whisper',
            'License': 'MIT',
          },
          {
            'Tool': '[WhisperX](https://github.com/m-bain/whisperX)',
            'Best fit': 'When you need word-level timestamps and speaker diarization on top of Whisper transcripts',
            'License': 'BSD-2-Clause',
          },
          {
            'Tool': '[OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            'Best fit': 'Teams that prefer a managed cloud API over self-hosting, in exchange for per-minute usage fees',
            'License': 'Proprietary (paid API)',
          },
          {
            'Tool': '[Vosk](https://alphacephei.com/vosk/)',
            'Best fit': 'Very low-resource offline devices needing a small footprint over Whisper-level accuracy',
            'License': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is whisper.cpp?',
            a: 'whisper.cpp is a free, MIT-licensed C/C++ reimplementation of OpenAI\'s Whisper speech-to-text model, created by Georgi Gerganov, that runs transcription locally without a Python runtime.',
          },
          {
            q: 'Is whisper.cpp free?',
            a: 'Yes. whisper.cpp is MIT-licensed with no paid tier, subscription, or usage fee. The Whisper model weights it uses are also MIT-licensed by OpenAI.',
          },
          {
            q: 'Do I need a GPU to run whisper.cpp?',
            a: 'No. whisper.cpp runs on CPU using AVX2 (x86) or NEON (ARM) optimizations, and the smaller models (tiny, base) are the usual choice for CPU-only hardware; real-time speed depends on your processor. A GPU (Apple Metal, NVIDIA CUDA, or Vulkan) speeds up larger models like large-v3 but is not required.',
          },
          {
            q: 'Does whisper.cpp support real-time transcription?',
            a: 'Yes, via the `whisper-stream` example, which captures live microphone audio and transcribes it continuously. Latency depends on model size and hardware — smaller models on a fast CPU or GPU keep pace closest to real time.',
          },
          {
            q: 'What is the difference between whisper.cpp and faster-whisper?',
            a: 'whisper.cpp is a pure C/C++ implementation with no Python dependency, built for portability across CPU, Apple Metal, CUDA, and embedded devices. faster-whisper is a Python library built on CTranslate2, optimized primarily for NVIDIA GPU throughput inside Python pipelines. See our [comparison](/power-local-llm/local-whisper-stt-comparison) for more detail.',
          },
          {
            q: 'Does whisper.cpp run on ARM devices?',
            a: 'whisper.cpp includes ARM NEON optimizations and has no Python or CUDA dependency to install, so ARM CPUs are a target. Speed depends on the device and model size, and we have not measured it on specific boards, so test the tiny and base models first.',
          },
          {
            q: 'Does whisper.cpp translate audio into English?',
            a: 'Yes. Passing the `-tr` (translate) flag to `whisper-cli` transcribes non-English speech and translates it directly to English text, using the same multilingual Whisper models\' built-in translation capability.',
          },
          {
            q: 'Who maintains whisper.cpp today?',
            a: 'The project is maintained under the ggml-org GitHub organization, founded by original creator Georgi Gerganov, with contributions from hundreds of community developers. It remains actively released: v1.9.5 was published October 6, 2026, and the repository\'s latest activity was October 30, 2026.',
          },
          {
            q: 'Does whisper.cpp separate different speakers in a recording?',
            a: 'Not natively. whisper.cpp transcribes speech to text but does not perform speaker diarization on its own. For "who said what," pair it with a dedicated diarization tool or use WhisperX, which adds diarization on top of Whisper transcripts.',
          },
          {
            q: 'Is whisper.cpp safe to download?',
            a: 'Get it only from the official repository, [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp), and its [releases page](https://github.com/ggml-org/whisper.cpp/releases); avoid repackaged installers and unofficial mirrors. The code is open source (MIT), so you can read it and build it yourself, and you should verify the source or any published checksums before running downloaded files. We have not audited the code, and no download can be guaranteed safe.',
          },
          {
            q: 'What changed in whisper.cpp v1.9.4 and v1.9.5?',
            a: 'Per the official release notes, v1.9.4 (September 11, 2026) calls the encoder-begin callback before language auto-detection, re-seeds decoder 0 between calls, makes the server return the language in its detect response, adds Windows on ARM to the CI release job and syncs ggml to 0.23.0. v1.9.5 (October 6, 2026) is described as a maintenance release that updates to ggml v0.26.0; its changelog also lists an optional ANEForge encoder backend (Apple Neural Engine), a CLI error-code fix, an abort callback on language detection, VAD model-load validation and a smaller Vulkan Docker image. Read the full notes before upgrading.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'whisper.cpp succeeds at exactly what it set out to do: bring OpenAI\'s Whisper speech-to-text model to any device that can compile C/C++, without requiring Python, CUDA, or a heavy runtime. That portability — from x86 and ARM CPUs to Apple Silicon to Vulkan- or CUDA-capable GPUs — has no close free equivalent for local, offline transcription, and the MIT license permits commercial use (not legal advice). It is free, actively maintained, and uses the same model weights as upstream Whisper, so accuracy for a given model size follows what OpenAI published. Where it is not the strongest choice is a Python-first, NVIDIA-GPU-only pipeline chasing maximum throughput — faster-whisper\'s CTranslate2 backend is commonly recommended there, as our [comparison](/power-local-llm/local-whisper-stt-comparison) discusses. For everyone else — developers targeting embedded hardware, Apple Silicon, cross-platform apps, or anyone who prefers building native code to maintaining a Python environment — whisper.cpp is a free starting point worth testing on your own audio.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp on GitHub](https://github.com/ggml-org/whisper.cpp) — official repository: README, install instructions, license, and release history.',
          '[whisper.cpp releases](https://github.com/ggml-org/whisper.cpp/releases) — version history, including v1.9.5 (October 6, 2026).',
          '[whisper.cpp LICENSE](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — MIT license text.',
          '[OpenAI Whisper announcement](https://openai.com/index/whisper/) — original 2022 release of the Whisper model.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Whisper.cpp vs faster-whisper 2026: Local STT Benchmarks, Setup & GPU Acceleration](/power-local-llm/local-whisper-stt-comparison) — the side-by-side comparison for readers deciding between whisper.cpp and faster-whisper.',
          'faster-whisper Review — the CTranslate2-based alternative, reviewed in the same depth.',
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — connect whisper.cpp to a local LLM and Piper TTS into a complete voice pipeline.',
          'Piper TTS Review — the local text-to-speech counterpart, for turning generated text back into speech offline.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local-AI tools across categories.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp Review (2026): Local Speech-to-Text in Pure C/C++',
      description:
        'Whisper.cpp review: the MIT-licensed C/C++ port of OpenAI Whisper for local speech-to-text. History, install steps, real CLI commands, license, and when to use faster-whisper instead.',
      url: 'https://www.promptquorum.com/power-local-llm/whisper-cpp-review',
      inLanguage: 'en',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, offline speech-to-text tools' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'Speech-to-text' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp Review (2026)', item: 'https://www.promptquorum.com/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-de.webp',
    title: 'Whisper.cpp-Rezension: Lokale Spracherkennung in reinem C/C++',
    seoTitle: 'Whisper.cpp-Rezension: MIT, Setup & CLI für lokale STT',
    intro:
      'whisper.cpp ist eine C/C++-Neuimplementierung von OpenAIs automatischem Spracherkennungsmodell Whisper, geschaffen von Georgi Gerganov und heute unter der [GitHub-Organisation ggml-org](https://github.com/ggml-org/whisper.cpp) gepflegt. Es wandelt Sprache vollständig auf dem Gerät in Text um, ohne Python-Laufzeitumgebung und ohne Cloud-API-Aufruf, und unterstützt unter anderem CPU, Apple Silicon (Metal, Core ML) und NVIDIA-GPUs (CUDA). Diese Rezension behandelt die Geschichte, Installation und Ausführung, echte Kommandozeilenbefehle, die MIT-Lizenz und die Kosten (kostenlos) sowie die Fälle, in denen es nicht das richtige Werkzeug ist – inklusive eines Links zu unserem Vergleich mit faster-whisper für alle, die sich zwischen beiden entscheiden müssen.',
    metaDescription:
      'Whisper.cpp-Rezension: C/C++-Port von OpenAI Whisper (MIT) für lokale Spracherkennung. Installation, CLI-Befehle, Lizenz und Vergleich mit faster-whisper.',
    twitterDescription:
      'Whisper.cpp-Rezension 2026: Georgi Gerganovs C/C++-Port von OpenAI Whisper für lokale, offline Spracherkennung. Geschichte, Setup, echte Befehle, MIT-Lizenz und ehrliche Grenzen.',
    audience:
      'Entwickler und Selbsthoster, die Offline-Spracherkennung direkt auf dem Gerät wollen, ohne Python-Laufzeit oder Cloud-API – auf x86- und ARM-CPUs, Apple Silicon oder in NVIDIA-GPU-Pipelines.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp Rezension',
    targetKeywords: [
      'whisper.cpp test',
      'whisper.cpp',
      'whisper cpp installieren',
      'whisper cpp einrichten',
      'ggerganov whisper',
      'lokale spracherkennung c++',
      'offline whisper transkription',
      'whisper cpp lizenz',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp ist ein kostenloser, MIT-lizenzierter C/C++-Port von OpenAIs Whisper-Spracherkennung, der die Transkription ohne Python auf dem Gerät ausführt.** Unterstützt werden CPU, Apple Metal, Core ML, CUDA und Vulkan. Den Vergleich mit faster-whisper finden Sie im [Vergleich whisper.cpp vs. faster-whisper](/de/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      de: {
        question: 'Was ist whisper.cpp und lohnt sich der Einsatz für lokale Spracherkennung?',
        answer:
          'whisper.cpp lohnt sich, wenn Sie Offline-Spracherkennung direkt auf dem Gerät ohne Python oder CUDA wollen oder eine Plattform wie iOS, Android oder WebAssembly anpeilen, wo sich eine C/C++-Bibliothek leichter einbetten lässt als ein Python-Stack. Es ist kostenlos (MIT-Lizenz), aktiv gepflegt und nutzt dieselben Whisper-Modellgewichte wie OpenAIs ursprüngliche Veröffentlichung, sodass die Genauigkeit bei gegebener Modellgröße dem Original-Whisper folgt. Wählen Sie stattdessen faster-whisper, wenn Ihr Hauptziel ein NVIDIA-GPU-Server mit Python-Pipeline ist – dessen CTranslate2-Backend wird dafür häufig empfohlen.',
        bullets: [
          'Entwickelt von Georgi Gerganov, erstmals 2022 als C/C++-Port von OpenAI Whisper veröffentlicht; heute unter der ggml-org-Organisation auf GitHub gepflegt.',
          'MIT-lizenziert, kostenlos, keine kostenpflichtige Stufe, kein Konto erforderlich.',
          'Läuft auf CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO und mehr — keine Python-Laufzeitumgebung nötig.',
          'Aktuelle stabile Version: v1.9.5 (6. Oktober 2026); die letzte Aktivität im Repository war am 30. Oktober 2026, laut den GitHub-Seiten des Projekts.',
          'Am besten geeignet für: eingebettete Geräte, Apple Silicon und jede Bereitstellung, bei der ein einzelnes eigenständiges Binary besser ist als eine Python-Umgebung.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Wer hat whisper.cpp entwickelt und warum', anchor: 'history' },
      { label: 'Was whisper.cpp tatsächlich leistet', anchor: 'what-it-does' },
      { label: 'Whisper.cpp installieren und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Anwendungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und Kosten', anchor: 'license-cost' },
      { label: 'Wofür whisper.cpp nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu whisper.cpp', anchor: 'alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp ist ein kostenloser, MIT-lizenzierter C/C++-Port des Spracherkennungsmodells Whisper von OpenAI, entwickelt von Georgi Gerganov, der Audio vollständig lokal über CPU, Apple Metal, NVIDIA CUDA und weitere Backends transkribiert — ganz ohne Python.',
          },
          {
            type: 'plain-terms',
            text: 'Es wandelt gesprochenes Audio auf Ihrem eigenen Computer oder Gerät in Text um, statt es an eine Cloud-API zu senden – Sie bauen es aus dem Quellcode (das Projekt dokumentiert die CMake-Schritte), geben eine Audiodatei oder einen Live-Mikrofonstrom hinein und erhalten kostenlos ein Transkript mit denselben Whisper-Modellen, die OpenAI trainiert hat.',
          },
        ],
        items: [
          'Entwickelt von Georgi Gerganov im Jahr 2022; heute unter der ggml-org-Organisation auf GitHub gepflegt.',
          'MIT-Lizenz — kostenlose Nutzung, Veränderung und Weiterverbreitung, auch kommerziell.',
          'Läuft auf CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm und Ascend-NPU-Backends.',
          'Keine Python-Laufzeit nötig – es wird mit CMake aus C/C++-Quellcode gebaut; Python-Bindings gibt es als separate Community-Projekte.',
          'Unterstützt Echtzeit-Mikrofontranskription über das Stream-Beispiel, zusätzlich zur Batch-Transkription von Dateien.',
          'Aktuelle stabile Version: v1.9.5, veröffentlicht am 6. Oktober 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension konzentriert sich auf whisper.cpp als eigenständiges Werkzeug: Geschichte, Installation, echte Befehle, Lizenzierung und ehrliche Grenzen. Einen direkten Blick auf faster-whisper auf Apple Silicon und NVIDIA-GPUs bietet der [Whisper.cpp-vs-faster-whisper-Vergleich](/de/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Wer hat whisper.cpp entwickelt und warum',
        content: [
          '**OpenAI veröffentlichte sein Spracherkennungsmodell Whisper im September 2022** als Modell mit offenen Gewichten, trainiert auf einer großen Menge mehrsprachiger Audiodaten, verteilt als Python-Paket (`openai-whisper`), das von PyTorch und für gute Leistung von einer CUDA-fähigen GPU abhängt.',
          '**Georgi Gerganov portierte das Modell kurz danach, ebenfalls 2022, nach reinem C/C++**, im Repository [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp). Gerganov ist auch der Schöpfer der ggml-Tensor-Bibliothek, die die Mathematik und Quantisierung von whisper.cpp trägt, und wurde später vor allem durch llama.cpp bekannt, den entsprechenden C/C++-Port für die lokale Ausführung großer Sprachmodelle — beide Projekte teilen dieselbe ggml-Grundlage und dasselbe Designziel: ein Modell, das normalerweise Python und eine GPU braucht, auf gewöhnlicher Hardware laufen zu lassen.',
          '**Das Motiv waren Portabilität und Ressourceneffizienz, nicht nur Geschwindigkeit.** Die ursprüngliche Python/PyTorch-Implementierung von Whisper lässt sich auf einer Workstation mit guter GPU einfach betreiben, ist aber schwergewichtig in einer iOS-App, auf einer WebAssembly-Seite oder auf einem eingebetteten Linux-Board ganz ohne Python-Interpreter. whisper.cpp entfernt die PyTorch- und Python-Abhängigkeit vollständig, wird als native C/C++-Software gebaut und ergänzt Quantisierung, damit kleinere Modellvarianten in wenige hundert Megabyte RAM passen.',
          '**Das Projekt ist längst über ein Ein-Personen-Nebenprojekt hinausgewachsen.** Es hat inzwischen Hunderte Mitwirkende, wird für Debian paketiert und bietet offiziellen Support für Core ML (Apple Neural Engine), CUDA, Vulkan, OpenVINO und weitere Backends, die es in der ursprünglichen Version von 2022 noch nicht gab. Es bleibt eine Whisper-*Laufzeitumgebung* — es trainiert oder feintunt keine eigenen Modelle, und jede Transkription verwendet weiterhin dieselben von OpenAI veröffentlichten Gewichte für eine gegebene Modellgröße (tiny bis large-v3), umgewandelt in das GGML-Format des Projekts.',
        ],
        faqs: [
          {
            q: 'Wer hat whisper.cpp entwickelt?',
            a: 'Georgi Gerganov hat whisper.cpp entwickelt und 2022 erstmals als C/C++-Port von OpenAIs Whisper-Modell veröffentlicht. Gerganov schuf auch die ggml-Tensor-Bibliothek, auf der es läuft, und später llama.cpp, den entsprechenden Port für die lokale Ausführung großer Sprachmodelle.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was whisper.cpp tatsächlich leistet',
        content: [
          'whisper.cpp nimmt einen Audio-Input entgegen — eine Datei (WAV, sowie weitere Formate über optionale FFmpeg-Dekodierung) oder einen Live-Mikrofonstream — und erzeugt ein Text-Transkript, optional mit Zeitstempeln pro Segment und Übersetzung ins Englische. Dazu lädt es ein Whisper-Modell (umgewandelt in das GGML-Gewichtsformat des Projekts) und führt die Inferenz über die ggml-Tensor-Bibliothek vollständig auf der lokalen Maschine aus.',
        ],
        items: [
          '**Batch-Transkription.** Das Binary `whisper-cli` auf eine Audiodatei richten und ein Transkript zurückbekommen, mit Optionen für die Ausgabe als reiner Text, SRT/VTT-Untertitel, JSON oder CSV.',
          '**Echtzeit-Streaming.** Das Beispiel `whisper-stream` erfasst Live-Mikrofonaudio und transkribiert es fortlaufend — nützlich für Sprachassistenten oder Live-Untertitelung.',
          '**Mehrsprachige Transkription und Übersetzung.** Die zugrunde liegenden Whisper-Modelle wurden auf vielen Sprachen trainiert; whisper.cpp kann je nach übergebenen Flags in der Ausgangssprache transkribieren oder direkt ins Englische übersetzen.',
          '**Hardwarebeschleunigte Inferenz.** Auf Apple Silicon kann whisper.cpp Modelle ins Core-ML-Format exportieren, um die Apple Neural Engine zu nutzen; auf NVIDIA-Hardware verwendet es CUDA; auf anderen GPUs kann es Vulkan oder OpenVINO nutzen. Auf reinen CPU-Maschinen nutzt es AVX2 (x86) oder NEON (ARM) Vektorbefehle.',
          '**Quantisierung.** Modelle können quantisiert werden (zum Beispiel in 4-Bit- oder 5-Bit-GGML-Formate), um etwas Genauigkeit gegen deutlich geringeren Speicherverbrauch und schnellere Inferenz einzutauschen — dieselbe Technik, die llama.cpp für LLMs verwendet.',
        ],
        note: 'whisper.cpp ist eine Laufzeitumgebung, kein Modell. Die Transkriptionsgenauigkeit für eine gegebene Modellgröße (tiny, base, small, medium, large-v3) wird durch das ursprüngliche Training von OpenAI bestimmt, nicht durch whisper.cpp — die Aufgabe des Projekts ist es, dieses Modell effizient auszuführen, ohne Python oder einen schweren GPU-Stack.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Whisper.cpp installieren und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung baut whisper.cpp aus dem Quellcode und führt eine erste Transkription aus, mit den im README des Projekts dokumentierten Befehlen.',
        numberedItems: [
          {
            title: 'Repository klonen.',
            whyItMatters: 'Führen Sie `git clone https://github.com/ggml-org/whisper.cpp.git` gefolgt von `cd whisper.cpp` aus. Das lädt den vollständigen C/C++-Quellcodebaum inklusive CMake-Build-Dateien und Modell-Download-Skript herunter.',
          },
          {
            title: 'Ein Modell herunterladen.',
            whyItMatters: 'Führen Sie `sh ./models/download-ggml-model.sh base.en` aus, um das englischsprachige base-Modell im GGML-Format herunterzuladen. Ersetzen Sie `base.en` je nach gewünschtem Verhältnis von Genauigkeit zu Geschwindigkeit durch `tiny`, `small`, `medium` oder `large-v3`, oder lassen Sie das Suffix `.en` für ein mehrsprachiges Modell weg.',
          },
          {
            title: 'Das Projekt bauen.',
            whyItMatters: 'Führen Sie `cmake -B build` gefolgt von `cmake --build build -j --config Release` aus. Das kompiliert die CLI-Binaries (`whisper-cli`, `whisper-stream` und weitere) in das Verzeichnis `build/bin/`. Für diesen Schritt ist keine Python-Installation erforderlich.',
          },
          {
            title: 'Eine Beispieldatei transkribieren.',
            whyItMatters: 'Führen Sie `./build/bin/whisper-cli -f samples/jfk.wav` mit der im Repository mitgelieferten Beispiel-Audiodatei aus. Das bestätigt, dass der Build durchgängig funktioniert, und gibt ein Transkript im Terminal aus.',
          },
          {
            title: 'Eigene Audiodateien transkribieren.',
            whyItMatters: 'Ersetzen Sie den Beispielpfad durch Ihre eigene WAV-Datei: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. Fügen Sie `-osrt` hinzu, um zusätzlich eine `.srt`-Untertiteldatei zu schreiben, oder `-oj` für JSON-Ausgabe.',
          },
          {
            title: '(Optional) GPU-Beschleunigung aktivieren.',
            whyItMatters: 'Auf Apple Silicon wird Metal-Beschleunigung automatisch genutzt, sobald mit den Standard-CMake-Flags unter macOS gebaut wird. Auf einer NVIDIA-Maschine fügen Sie dem Schritt `cmake -B build` das Flag `-DGGML_CUDA=ON` hinzu (erfordert installiertes CUDA-Toolkit), um mit CUDA-Unterstützung zu bauen.',
          },
          {
            title: '(Optional) Echtzeit-Transkription ausprobieren.',
            whyItMatters: 'Bauen Sie das Streaming-Beispiel und führen Sie `./build/bin/whisper-stream -m models/ggml-base.en.bin` aus, um Live-Mikrofonaudio fortlaufend statt einer festen Datei zu transkribieren.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Anwendungsbeispiele',
        content: [
          'Über die grundlegende Installationsanleitung oben hinaus sind dies gängige reale Aufrufe des Binarys `whisper-cli`.',
        ],
        codeBlock: `# Audiodatei in reinen Text transkribieren (Standardausgabe)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# Transkribieren und SRT-Untertitel ausgeben, mit dem größeren, genaueren Modell
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# Nicht-englische Sprache direkt ins Englische übersetzen
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# Eine bestimmte GPU auswählen (Multi-GPU-Maschinen)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# Echtzeit-Transkription vom Standardmikrofon
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'Die hier gezeigten Flags (`-m` Modellpfad, `-f` Eingabedatei, `-osrt` SRT-Ausgabe, `-tr` ins Englische übersetzen, `-g`/`--gpu-device` GPU-Auswahl, `-t` Anzahl Threads) sind in der `--help`-Ausgabe und dem README des Projekts dokumentiert. Führen Sie immer `./build/bin/whisper-cli --help` aus, um den aktuellen Flag-Satz für Ihre installierte Version zu bestätigen, da sich CLI-Optionen zwischen Versionen ändern können.',
        items: [
          '**pywhispercpp** bietet Python-Bindings für whisper.cpp für Teams, die die Metal-/CUDA-Beschleunigung nutzen, aber lieber aus Python-Code aufrufen wollen als das CLI-Binary pro Datei aufzurufen.',
          '**whisper.cpp liefert außerdem ein kleines lokales HTTP-Server-Beispiel** (`whisper-server`) für Teams, die Audio über HTTP statt per CLI-Aufruf pro Datei senden wollen — nützlich, um whisper.cpp ohne Python-Abhängigkeit in einen bestehenden Dienst einzubinden.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und Kosten',
        content: [
          '**whisper.cpp ist unter der MIT-Lizenz lizenziert** — die Lizenzdatei im [offiziellen Repository](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) erlaubt kostenlose Nutzung, Veränderung und Weiterverbreitung, auch in Closed-Source- und kommerziellen Produkten, ohne Lizenzgebühr und ohne Namensnennungspflicht über den Erhalt des Lizenzhinweises hinaus.',
          '**Es gibt keine kostenpflichtige Stufe, kein Abonnement und keine Lizenzgebühr für whisper.cpp selbst.** Die einzigen realen Kosten sind die Hardware, auf der Sie es betreiben (oder eine Cloud-VM, falls Sie es dort hosten), sowie, falls Sie ein Produkt darauf aufbauen, Ihre eigene Entwicklungszeit. Es gibt keine Nutzungsmessung, keinen API-Schlüssel und keine Anbieterbindung.',
          '**Die zugrunde liegenden Whisper-Modellgewichte sind separat von OpenAI ebenfalls unter MIT lizenziert**, sodass sowohl die Laufzeitumgebung (whisper.cpp) als auch die geladenen Modellgewichte großzügig für die kommerzielle Nutzung lizenziert sind.',
        ],
        faqs: [
          {
            q: 'Ist whisper.cpp kommerziell kostenlos nutzbar?',
            a: 'Ja. whisper.cpp ist MIT-lizenziert, und die von OpenAI veröffentlichten Whisper-Modellgewichte, die es nutzt, sind ebenfalls MIT-lizenziert. Beide erlauben kommerzielle Nutzung, Veränderung und Weiterverbreitung ohne Gebühr.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür whisper.cpp nicht geeignet ist',
        content: [
          'whisper.cpp ist eine Transkriptions-Laufzeitumgebung, kein vollständiges Produkt für Konversations-KI oder Sprechertrennung. Für folgende Situationen ist es das falsche Werkzeug:',
        ],
        items: [
          '**Sprechertrennung ("wer hat was gesagt").** whisper.cpp transkribiert, was gesagt wurde, trennt oder kennzeichnet aber nicht von sich aus verschiedene Sprecher in einer Aufnahme mit mehreren Personen. Sprechertrennung erfordert ein separates Modell oder eine Pipeline (zum Beispiel die Kombination des whisper.cpp-Transkripts mit einem Diarisierungswerkzeug), die darüber gelegt wird.',
          '**Streaming-Latenz unter 100 Millisekunden im großen Maßstab.** Das eingebaute Beispiel `whisper-stream` funktioniert gut für ein einzelnes Live-Mikrofon auf einer Maschine, aber whisper.cpp ist kein speziell gebauter, horizontal skalierter Echtzeit-Spracherkennungsdienst, wie er für viele gleichzeitige Nutzer bei einer dedizierten Echtzeit-Sprach-API konzipiert wäre.',
          '**Keine Einrichtung für nichttechnische Nutzer.** whisper.cpp ist ein Kommandozeilenwerkzeug, das die meisten aus dem Quellcode bauen – die README des Projekts dokumentiert einen CMake-Build, und im offiziellen Repository haben wir keinen grafischen Installer und keinen App-Store-Eintrag für Nicht-Entwickler gefunden. Wer eine Klick-und-los-Transkriptions-App will, sollte stattdessen eine auf whisper.cpp aufbauende GUI-Anwendung oder einen gehosteten Transkriptionsdienst prüfen.',
          '**Das letzte Quäntchen NVIDIA-GPU-Durchsatz in einer Python-Pipeline.** Bei den größten Modellen auf NVIDIA-Hardware gilt das CTranslate2-Backend von faster-whisper häufig als schneller und VRAM-sparender als der CUDA-Pfad von whisper.cpp (unser [Vergleich](/de/power-local-llm/local-whisper-stt-comparison) behandelt das; wir haben diese Messungen nicht selbst durchgeführt) – wenn Ihr Einsatz ohnehin ein Python-Dienst auf einer NVIDIA-GPU ist, passt faster-whisper oft besser.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu whisper.cpp',
        itemHeadings: true,
        columns: ['Werkzeug', 'Am besten geeignet für', 'Lizenz'],
        rows: [
          {
            'Werkzeug': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'Am besten geeignet für': 'Python-Pipelines auf NVIDIA-GPUs — CTranslate2-Backend, ~4x Durchsatz vs. Original-Whisper',
            'Lizenz': 'MIT',
          },
          {
            'Werkzeug': '[WhisperX](https://github.com/m-bain/whisperX)',
            'Am besten geeignet für': 'Wenn Sie zusätzlich zu Whisper-Transkripten wortgenaue Zeitstempel und Sprechertrennung brauchen',
            'Lizenz': 'BSD-2-Clause',
          },
          {
            'Werkzeug': '[OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            'Am besten geeignet für': 'Teams, die eine verwaltete Cloud-API gegenüber Self-Hosting bevorzugen, gegen nutzungsabhängige Gebühren',
            'Lizenz': 'Proprietär (kostenpflichtige API)',
          },
          {
            'Werkzeug': '[Vosk](https://alphacephei.com/vosk/)',
            'Am besten geeignet für': 'Sehr ressourcenarme Offline-Geräte, bei denen ein kleiner Speicherbedarf wichtiger ist als Whisper-Genauigkeit',
            'Lizenz': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist whisper.cpp?',
            a: 'whisper.cpp ist eine kostenlose, MIT-lizenzierte C/C++-Neuimplementierung des Spracherkennungsmodells Whisper von OpenAI, entwickelt von Georgi Gerganov, die Transkription lokal ohne Python-Laufzeitumgebung ausführt.',
          },
          {
            q: 'Ist whisper.cpp kostenlos?',
            a: 'Ja. whisper.cpp ist MIT-lizenziert, ohne kostenpflichtige Stufe, Abonnement oder Nutzungsgebühr. Die verwendeten Whisper-Modellgewichte sind ebenfalls von OpenAI unter MIT lizenziert.',
          },
          {
            q: 'Brauche ich eine GPU, um whisper.cpp auszuführen?',
            a: 'Nein. whisper.cpp läuft auf der CPU mit AVX2- (x86) oder NEON-Optimierungen (ARM), und die kleineren Modelle (tiny, base) sind die übliche Wahl für reine CPU-Hardware; die Echtzeitgeschwindigkeit hängt von Ihrem Prozessor ab. Eine GPU (Apple Metal, NVIDIA CUDA oder Vulkan) beschleunigt größere Modelle wie large-v3, ist aber nicht erforderlich.',
          },
          {
            q: 'Unterstützt whisper.cpp Echtzeit-Transkription?',
            a: 'Ja, über das Beispiel `whisper-stream`, das Live-Mikrofonaudio erfasst und fortlaufend transkribiert. Die Latenz hängt von Modellgröße und Hardware ab — kleinere Modelle auf einer schnellen CPU oder GPU kommen der Echtzeit am nächsten.',
          },
          {
            q: 'Was ist der Unterschied zwischen whisper.cpp und faster-whisper?',
            a: 'whisper.cpp ist eine reine C/C++-Implementierung ohne Python-Abhängigkeit, gebaut für Portabilität über CPU, Apple Metal, CUDA und eingebettete Geräte. faster-whisper ist eine Python-Bibliothek auf Basis von CTranslate2, primär für NVIDIA-GPU-Durchsatz in Python-Pipelines optimiert. Mehr dazu in unserem [Vergleich](/de/power-local-llm/local-whisper-stt-comparison).',
          },
          {
            q: 'Läuft whisper.cpp auf ARM-Geräten?',
            a: 'whisper.cpp enthält ARM-NEON-Optimierungen und braucht weder Python noch CUDA, ARM-CPUs sind also ein Zielsystem. Die Geschwindigkeit hängt von Gerät und Modellgröße ab; wir haben sie nicht auf bestimmten Boards gemessen, testen Sie daher zuerst die Modelle tiny und base.',
          },
          {
            q: 'Übersetzt whisper.cpp Audio ins Englische?',
            a: 'Ja. Mit dem Flag `-tr` (translate) an `whisper-cli` wird nicht-englische Sprache transkribiert und direkt in englischen Text übersetzt, unter Nutzung der in den mehrsprachigen Whisper-Modellen eingebauten Übersetzungsfähigkeit.',
          },
          {
            q: 'Wer pflegt whisper.cpp heute?',
            a: 'Das Projekt wird unter der GitHub-Organisation ggml-org gepflegt, gegründet vom ursprünglichen Schöpfer Georgi Gerganov, mit Beiträgen von Hunderten Community-Entwicklern. Es wird weiterhin aktiv veröffentlicht: v1.9.5 erschien am 6. Oktober 2026, die letzte Aktivität im Repository war am 30. Oktober 2026.',
          },
          {
            q: 'Trennt whisper.cpp verschiedene Sprecher in einer Aufnahme?',
            a: 'Nicht von sich aus. whisper.cpp transkribiert Sprache zu Text, führt aber keine eigenständige Sprechertrennung durch. Für "wer hat was gesagt" kombinieren Sie es mit einem dedizierten Diarisierungswerkzeug oder verwenden Sie WhisperX, das Sprechertrennung auf Whisper-Transkripte aufsetzt.',
          },
          {
            q: 'Ist whisper.cpp sicher herunterzuladen?',
            a: 'Beziehen Sie es nur aus dem offiziellen Repository [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) und dessen [Releases-Seite](https://github.com/ggml-org/whisper.cpp/releases); meiden Sie neu verpackte Installer und inoffizielle Spiegel. Der Code ist Open Source (MIT), Sie können ihn also lesen und selbst bauen, und Sie sollten Quellcode oder veröffentlichte Prüfsummen prüfen, bevor Sie heruntergeladene Dateien ausführen. Wir haben den Code nicht auditiert, und kein Download lässt sich als sicher garantieren.',
          },
          {
            q: 'Was hat sich in whisper.cpp v1.9.4 und v1.9.5 geändert?',
            a: 'Laut den offiziellen Release-Notes ruft v1.9.4 (11. September 2026) den Encoder-Begin-Callback vor der automatischen Spracherkennung auf, setzt Decoder 0 zwischen Aufrufen neu auf, lässt den Server die Sprache in der Detect-Antwort zurückgeben, nimmt Windows on ARM in den CI-Release-Job auf und synchronisiert ggml auf 0.23.0. v1.9.5 (6. Oktober 2026) wird als Wartungsversion beschrieben, die auf ggml v0.26.0 aktualisiert; das Changelog nennt außerdem ein optionales ANEForge-Encoder-Backend (Apple Neural Engine), eine Korrektur des CLI-Fehlercodes, einen Abort-Callback bei der Spracherkennung, eine Prüfung beim Laden von VAD-Modellen und ein kleineres Vulkan-Docker-Image. Lesen Sie die vollständigen Notes vor dem Upgrade.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'whisper.cpp erreicht genau das, was es sich vorgenommen hat: OpenAIs Whisper-Spracherkennungsmodell auf jedes Gerät zu bringen, das C/C++ kompilieren kann, ohne Python, CUDA oder eine schwere Laufzeit. Diese Portabilität – von x86- und ARM-CPUs über Apple Silicon bis zu Vulkan- oder CUDA-fähigen GPUs – hat für lokale Offline-Transkription kein vergleichbares kostenloses Gegenstück, und die MIT-Lizenz erlaubt die kommerzielle Nutzung (keine Rechtsberatung). Es ist kostenlos, aktiv gepflegt und nutzt dieselben Modellgewichte wie das ursprüngliche Whisper, sodass die Genauigkeit bei gegebener Modellgröße dem von OpenAI Veröffentlichten folgt. Weniger stark ist es bei einer reinen Python-/NVIDIA-GPU-Pipeline, die maximalen Durchsatz anstrebt – dort wird das CTranslate2-Backend von faster-whisper häufig empfohlen, wie unser [Vergleich](/de/power-local-llm/local-whisper-stt-comparison) darlegt. Für alle anderen – Entwickler mit eingebetteter Hardware, Apple Silicon, plattformübergreifenden Apps oder dem Wunsch, native Software statt einer Python-Umgebung zu pflegen – ist whisper.cpp ein kostenloser Ausgangspunkt, den Sie mit eigenem Audio testen sollten.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[whisper.cpp auf GitHub](https://github.com/ggml-org/whisper.cpp) — offizielles Repository: README, Installationsanleitung, Lizenz und Versionshistorie.',
          '[whisper.cpp-Releases](https://github.com/ggml-org/whisper.cpp/releases) – Versionsverlauf, darunter v1.9.5 (6. Oktober 2026).',
          '[whisper.cpp-LIZENZ](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — MIT-Lizenztext.',
          '[OpenAI-Whisper-Ankündigung](https://openai.com/index/whisper/) — ursprüngliche Veröffentlichung des Whisper-Modells 2022.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Whisper.cpp vs faster-whisper 2026: Lokale STT-Benchmarks, Setup & GPU-Beschleunigung](/de/power-local-llm/local-whisper-stt-comparison) — der direkte Vergleich für alle, die sich zwischen whisper.cpp und faster-whisper entscheiden müssen.',
          'faster-whisper-Rezension — die CTranslate2-basierte Alternative, im selben Detailgrad getestet.',
          '[Einen vollständig offline Sprachassistenten bauen 2026](/de/power-local-llm/build-local-voice-assistant-2026) — whisper.cpp mit einem lokalen LLM und Piper TTS zu einer vollständigen Sprachpipeline verbinden.',
          'Piper-TTS-Rezension — das lokale Text-zu-Sprache-Gegenstück, um generierten Text offline wieder in Sprache umzuwandeln.',
          '[Das vollständige Local-LLM-Software-Verzeichnis](/de/directory) — ein umfassenderes Verzeichnis lokaler KI-Werkzeuge über alle Kategorien hinweg.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp-Rezension (2026): Lokale Spracherkennung in reinem C/C++',
      description:
        'Whisper.cpp-Rezension: der MIT-lizenzierte C/C++-Port von OpenAI Whisper für lokale Spracherkennung. Geschichte, Installation, echte CLI-Befehle, Lizenz und wann faster-whisper die bessere Wahl ist.',
      url: 'https://www.promptquorum.com/de/power-local-llm/whisper-cpp-review',
      inLanguage: 'de',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, offline Spracherkennungswerkzeuge evaluieren' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'Spracherkennung' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/de/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp-Rezension (2026)', item: 'https://www.promptquorum.com/de/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-fr.webp',
    title: 'Whisper.cpp: avis — reconnaissance vocale locale en C/C++ pur',
    seoTitle: 'Whisper.cpp : avis, licence MIT, installation et CLI',
    intro:
      'whisper.cpp est une réimplémentation en C/C++ du modèle de reconnaissance vocale Whisper d\'OpenAI, créée par Georgi Gerganov et maintenue aujourd\'hui au sein de l\'[organisation GitHub ggml-org](https://github.com/ggml-org/whisper.cpp). Il transcrit la parole en texte entièrement sur l\'appareil, sans environnement Python ni appel à une API cloud, et prend en charge notamment le CPU, Apple Silicon (Metal, Core ML) et les GPU NVIDIA (CUDA). Cette analyse couvre son histoire, son installation et son exécution, des commandes réelles, sa licence MIT et son coût (gratuit), ainsi que les cas où ce n\'est pas le bon outil — avec un lien vers notre comparatif avec faster-whisper pour les lecteurs qui hésitent entre les deux.',
    metaDescription:
      'Avis whisper.cpp : le port C/C++ d\'OpenAI Whisper (licence MIT) pour la reconnaissance vocale locale. Installation, commandes CLI, faster-whisper.',
    twitterDescription:
      'Whisper.cpp 2026 : le port C/C++ de Georgi Gerganov pour OpenAI Whisper, reconnaissance vocale locale et hors ligne. Histoire, installation, vraies commandes, licence MIT et limites honnêtes.',
    audience:
      'Développeurs et auto-hébergeurs qui veulent une reconnaissance vocale hors ligne, sur l\'appareil, sans environnement Python ni API cloud — sur CPU x86 et ARM, Apple Silicon ou pipelines GPU NVIDIA.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp avis',
    targetKeywords: [
      'whisper.cpp avis',
      'whisper.cpp',
      'installer whisper cpp',
      'configurer whisper cpp',
      'ggerganov whisper',
      'reconnaissance vocale locale c++',
      'transcription whisper hors ligne',
      'licence whisper cpp',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp est un portage C/C++ gratuit, sous licence MIT, du modèle de reconnaissance vocale Whisper d\'OpenAI, qui transcrit sur l\'appareil sans Python.** Il prend en charge CPU, Apple Metal, Core ML, CUDA et Vulkan. Comparez-le à faster-whisper dans notre [comparatif whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que whisper.cpp et vaut-il le coup pour la reconnaissance vocale locale ?',
        answer:
          'whisper.cpp vaut le coup si vous voulez une reconnaissance vocale hors ligne, sur l\'appareil, sans installer Python ni CUDA, ou si vous visez une plateforme comme iOS, Android ou WebAssembly où une bibliothèque C/C++ s\'intègre plus facilement qu\'une pile Python. Il est gratuit (licence MIT), activement maintenu et utilise les mêmes poids de modèle Whisper que la version d\'origine d\'OpenAI : la précision, à taille de modèle égale, suit celle de Whisper. Choisissez plutôt faster-whisper si votre cible principale est un serveur GPU NVIDIA avec un pipeline Python — son backend CTranslate2 y est couramment recommandé.',
        bullets: [
          'Créé par Georgi Gerganov, publié pour la première fois en 2022 comme port C/C++ d\'OpenAI Whisper ; aujourd\'hui maintenu sous l\'organisation ggml-org sur GitHub.',
          'Sous licence MIT, gratuit, aucune offre payante, aucun compte requis.',
          'Fonctionne sur CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO et plus — aucun environnement Python nécessaire.',
          'Dernière version stable : v1.9.5 (6 octobre 2026) ; la dernière activité du dépôt date du 30 octobre 2026, d\'après les pages GitHub du projet.',
          'Idéal pour : appareils embarqués, Apple Silicon, et tout déploiement où un binaire autonome unique vaut mieux qu\'un environnement Python.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : qui a créé whisper.cpp et pourquoi', anchor: 'history' },
      { label: 'Ce que whisper.cpp fait réellement', anchor: 'what-it-does' },
      { label: 'Installer et exécuter whisper.cpp : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et coût', anchor: 'license-cost' },
      { label: 'Ce pour quoi whisper.cpp n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à whisper.cpp', anchor: 'alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp est un port C/C++ gratuit, sous licence MIT, du modèle de reconnaissance vocale Whisper d\'OpenAI, créé par Georgi Gerganov, qui transcrit l\'audio entièrement sur l\'appareil via CPU, Apple Metal, NVIDIA CUDA et d\'autres backends, sans Python.',
          },
          {
            type: 'plain-terms',
            text: 'Il transforme l\'audio parlé en texte sur votre propre ordinateur ou appareil au lieu de l\'envoyer à une API cloud — vous le compilez depuis les sources (le projet documente les étapes CMake), lui fournissez un fichier audio ou un flux de microphone en direct, et il vous rend une transcription, gratuitement, avec les mêmes modèles Whisper qu\'OpenAI a entraînés.',
          },
        ],
        items: [
          'Créé par Georgi Gerganov en 2022 ; aujourd\'hui maintenu sous l\'organisation ggml-org sur GitHub.',
          'Licence MIT — utilisation, modification et redistribution gratuites, y compris commerciales.',
          'Fonctionne sur CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm et backends Ascend NPU.',
          'Aucun environnement Python requis — il se compile depuis les sources C/C++ avec CMake ; des liaisons Python existent sous forme de projets communautaires distincts.',
          'Prend en charge la transcription micro en temps réel via son exemple de streaming, en plus de la transcription par lots de fichiers.',
          'Dernière version stable : v1.9.5, publiée le 6 octobre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cette analyse présente whisper.cpp comme outil autonome : histoire, installation, commandes réelles, licence et limites assumées. Pour une vue côte à côte avec faster-whisper sur Apple Silicon et GPU NVIDIA, voir le [comparatif whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : qui a créé whisper.cpp et pourquoi',
        content: [
          '**OpenAI a publié son modèle de reconnaissance vocale Whisper en septembre 2022**, un modèle à poids ouverts entraîné sur une grande quantité de données audio multilingues, distribué comme paquet Python (`openai-whisper`) dépendant de PyTorch et, pour de bonnes performances, d\'un GPU compatible CUDA.',
          '**Georgi Gerganov a porté le modèle en C/C++ pur peu après, en 2022 également**, dans le dépôt [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp). Gerganov est aussi le créateur de la bibliothèque de tenseurs ggml qui porte les calculs et la quantification de whisper.cpp, et deviendra plus tard connu pour llama.cpp, le port C/C++ équivalent pour l\'exécution locale de grands modèles de langage — les deux projets partagent la même base ggml et le même objectif de conception : faire tourner sur du matériel ordinaire un modèle qui nécessite normalement Python et un GPU.',
          '**La motivation était la portabilité et l\'efficacité des ressources, pas seulement la vitesse.** L\'implémentation Python/PyTorch d\'origine de Whisper est simple à lancer sur une station de travail dotée d\'un bon GPU, mais lourde à déployer dans une application iOS, une page WebAssembly ou une carte Linux embarquée sans interpréteur Python. whisper.cpp supprime entièrement la dépendance à PyTorch et à Python, se compile en code C/C++ natif et ajoute la quantification pour que des variantes plus petites tiennent dans quelques centaines de mégaoctets de RAM.',
          '**Le projet a largement dépassé le stade du projet personnel.** Il compte aujourd\'hui des centaines de contributeurs, est empaqueté pour Debian, et propose un support officiel pour Core ML (Apple Neural Engine), CUDA, Vulkan, OpenVINO et d\'autres backends qui n\'existaient pas dans la publication originale de 2022. Il reste un *environnement d\'exécution* Whisper — il n\'entraîne ni n\'affine ses propres modèles, et chaque transcription utilise toujours les mêmes poids publiés par OpenAI pour une taille de modèle donnée (de tiny à large-v3), convertis dans le format GGML du projet.',
        ],
        faqs: [
          {
            q: 'Qui a créé whisper.cpp ?',
            a: 'Georgi Gerganov a créé whisper.cpp, publié pour la première fois en 2022 comme port C/C++ du modèle Whisper d\'OpenAI. Gerganov a aussi créé la bibliothèque de tenseurs ggml sur laquelle il repose, puis llama.cpp, le port équivalent pour l\'exécution locale de grands modèles de langage.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que whisper.cpp fait réellement',
        content: [
          'whisper.cpp prend une entrée audio — un fichier (WAV, et d\'autres formats via un décodage FFmpeg optionnel) ou un flux micro en direct — et produit une transcription textuelle, avec en option des horodatages par segment et une traduction en anglais. Pour cela, il charge un modèle Whisper (converti dans le format de poids GGML du projet) et exécute l\'inférence via la bibliothèque de tenseurs ggml, entièrement sur la machine locale.',
        ],
        items: [
          '**Transcription par lots.** Pointer le binaire `whisper-cli` vers un fichier audio et récupérer une transcription, avec des options de sortie en texte brut, sous-titres SRT/VTT, JSON ou CSV.',
          '**Streaming en temps réel.** L\'exemple `whisper-stream` capture l\'audio du micro en direct et le transcrit en continu, utile pour les assistants vocaux ou le sous-titrage en direct.',
          '**Transcription et traduction multilingues.** Les modèles Whisper sous-jacents ont été entraînés sur de nombreuses langues ; whisper.cpp peut transcrire dans la langue source ou traduire directement en anglais, selon les options passées.',
          '**Inférence accélérée matériellement.** Sur Apple Silicon, whisper.cpp peut exporter les modèles au format Core ML pour utiliser le Neural Engine d\'Apple ; sur matériel NVIDIA, il utilise CUDA ; sur d\'autres GPU, il peut utiliser Vulkan ou OpenVINO. Sur machines CPU uniquement, il utilise les instructions vectorielles AVX2 (x86) ou NEON (ARM).',
          '**Quantification.** Les modèles peuvent être quantifiés (par exemple en formats GGML 4 bits ou 5 bits) pour échanger un peu de précision contre une utilisation mémoire nettement plus faible et une inférence plus rapide — la même technique que llama.cpp utilise pour les LLM.',
        ],
        note: 'whisper.cpp est un environnement d\'exécution, pas un modèle. La précision de transcription pour une taille de modèle donnée (tiny, base, small, medium, large-v3) est fixée par l\'entraînement original d\'OpenAI, pas par whisper.cpp — le rôle du projet est d\'exécuter ce modèle efficacement, sans Python ni pile GPU lourde.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Installer et exécuter whisper.cpp : étape par étape',
        content: 'Ce guide construit whisper.cpp depuis les sources et lance une première transcription, avec les commandes documentées dans le README du projet.',
        numberedItems: [
          {
            title: 'Cloner le dépôt.',
            whyItMatters: 'Exécutez `git clone https://github.com/ggml-org/whisper.cpp.git` puis `cd whisper.cpp`. Cela récupère l\'arborescence complète des sources C/C++, y compris les fichiers de build CMake et le script de téléchargement de modèle.',
          },
          {
            title: 'Télécharger un modèle.',
            whyItMatters: 'Exécutez `sh ./models/download-ggml-model.sh base.en` pour récupérer le modèle base anglophone au format GGML. Remplacez `base.en` par `tiny`, `small`, `medium` ou `large-v3` selon le compromis précision/vitesse voulu, ou retirez le suffixe `.en` pour un modèle multilingue.',
          },
          {
            title: 'Construire le projet.',
            whyItMatters: 'Exécutez `cmake -B build` puis `cmake --build build -j --config Release`. Cela compile les binaires CLI (`whisper-cli`, `whisper-stream` et d\'autres) dans le répertoire `build/bin/`. Aucune installation Python n\'est requise pour cette étape.',
          },
          {
            title: 'Transcrire un fichier d\'exemple.',
            whyItMatters: 'Exécutez `./build/bin/whisper-cli -f samples/jfk.wav` avec le fichier audio d\'exemple fourni dans le dépôt. Cela confirme que la construction fonctionne de bout en bout et affiche une transcription dans le terminal.',
          },
          {
            title: 'Transcrire votre propre audio.',
            whyItMatters: 'Remplacez le chemin d\'exemple par votre propre fichier WAV : `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. Ajoutez `-osrt` pour écrire aussi un fichier de sous-titres `.srt`, ou `-oj` pour une sortie JSON.',
          },
          {
            title: '(Optionnel) Activer l\'accélération GPU.',
            whyItMatters: 'Sur Apple Silicon, l\'accélération Metal est utilisée automatiquement dès lors que la construction utilise les options CMake par défaut sous macOS. Sur une machine NVIDIA, ajoutez `-DGGML_CUDA=ON` à l\'étape `cmake -B build` (nécessite le toolkit CUDA installé) pour construire avec le support CUDA.',
          },
          {
            title: '(Optionnel) Essayer la transcription en temps réel.',
            whyItMatters: 'Construisez l\'exemple de streaming et exécutez `./build/bin/whisper-stream -m models/ggml-base.en.bin` pour transcrire en continu l\'audio du micro en direct plutôt qu\'un fichier fixe.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Au-delà du guide d\'installation de base ci-dessus, voici des invocations courantes en situation réelle du binaire `whisper-cli`.',
        ],
        codeBlock: `# Transcrire un fichier audio en texte brut (sortie par défaut)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# Transcrire et générer des sous-titres SRT, avec le modèle plus grand et plus précis
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# Traduire directement une parole non anglaise en texte anglais
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# Choisir un GPU spécifique (machines multi-GPU)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# Transcription en temps réel depuis le microphone par défaut
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'Les options montrées ici (`-m` chemin du modèle, `-f` fichier d\'entrée, `-osrt` sortie SRT, `-tr` traduire en anglais, `-g`/`--gpu-device` sélection du GPU, `-t` nombre de threads) sont documentées dans la sortie `--help` et le README du projet. Exécutez toujours `./build/bin/whisper-cli --help` pour confirmer le jeu d\'options actuel de votre version installée, car les options CLI peuvent changer d\'une version à l\'autre.',
        items: [
          '**pywhispercpp** fournit des bindings Python pour whisper.cpp, pour les équipes qui veulent l\'accélération Metal/CUDA tout en préférant appeler l\'outil depuis du code Python plutôt que d\'invoquer le binaire CLI fichier par fichier.',
          '**whisper.cpp fournit aussi un petit exemple de serveur HTTP local** (`whisper-server`) pour les équipes qui veulent envoyer l\'audio via HTTP plutôt que d\'invoquer la CLI par fichier — utile pour intégrer whisper.cpp dans un service existant sans dépendance Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et coût',
        content: [
          '**whisper.cpp est sous licence MIT** — le fichier de licence du [dépôt officiel](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) autorise l\'utilisation, la modification et la redistribution gratuites, y compris dans des produits fermés et commerciaux, sans redevance et sans obligation d\'attribution au-delà de la conservation de la mention de licence.',
          '**Il n\'existe aucune offre payante, abonnement ou redevance de licence pour whisper.cpp lui-même.** Les seuls coûts réels sont le matériel sur lequel vous l\'exécutez (ou une VM cloud si vous choisissez de l\'héberger) et, si vous construisez un produit dessus, votre propre temps de développement. Il n\'y a aucune facturation à l\'usage, aucune clé API, aucun verrouillage fournisseur.',
          '**Les poids du modèle Whisper sous-jacent sont eux aussi publiés séparément par OpenAI sous licence MIT**, donc à la fois l\'environnement d\'exécution (whisper.cpp) et les poids de modèle qu\'il charge sont sous licence permissive pour un usage commercial.',
        ],
        faqs: [
          {
            q: 'whisper.cpp est-il gratuit pour un usage commercial ?',
            a: 'Oui. whisper.cpp est sous licence MIT, et les poids du modèle Whisper qu\'il utilise sont également publiés par OpenAI sous licence MIT. Les deux autorisent un usage, une modification et une redistribution commerciaux sans redevance.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce pour quoi whisper.cpp n\'est pas adapté',
        content: [
          'whisper.cpp est un environnement d\'exécution de transcription, pas un produit complet d\'IA conversationnelle ou de diarisation. C\'est le mauvais outil dans les situations suivantes :',
        ],
        items: [
          '**Diarisation ("qui a dit quoi").** whisper.cpp transcrit ce qui a été dit, mais ne sépare ni n\'étiquette nativement les différents locuteurs dans un enregistrement à plusieurs personnes. La diarisation nécessite un modèle ou un pipeline séparé (par exemple, combiner la transcription de whisper.cpp avec un outil de diarisation) superposé par-dessus.',
          '**Latence de streaming sous 100 millisecondes à grande échelle.** L\'exemple intégré `whisper-stream` fonctionne bien pour un micro en direct unique sur une machine, mais whisper.cpp n\'est pas un service de reconnaissance vocale en temps réel conçu spécifiquement et mis à l\'échelle horizontalement, comme le serait une API vocale temps réel dédiée pour de nombreux utilisateurs simultanés.',
          '**Aucune installation clé en main pour les non-techniciens.** whisper.cpp est un outil en ligne de commande que la plupart des gens compilent depuis les sources — le README du projet documente une compilation CMake, et nous n\'avons trouvé dans le dépôt officiel ni installateur graphique ni fiche de boutique d\'applications destinée aux non-développeurs. Qui veut une application de transcription clic-et-go devrait regarder une application graphique construite sur whisper.cpp, ou un service de transcription hébergé.',
          '**Gratter le dernier point de débit GPU NVIDIA dans un pipeline Python.** Sur les plus gros modèles et du matériel NVIDIA, le backend CTranslate2 de faster-whisper est couramment présenté comme plus rapide et plus sobre en VRAM que le chemin CUDA de whisper.cpp (notre [comparatif](/fr/power-local-llm/local-whisper-stt-comparison) en parle ; nous n\'avons pas réalisé ces mesures nous-mêmes) — si votre déploiement est déjà un service Python sur GPU NVIDIA, faster-whisper convient souvent mieux.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à whisper.cpp',
        itemHeadings: true,
        columns: ['Outil', 'Le mieux adapté à', 'Licence'],
        rows: [
          {
            'Outil': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'Le mieux adapté à': 'Pipelines Python sur GPU NVIDIA — backend CTranslate2, ~4x le débit du Whisper d\'origine',
            'Licence': 'MIT',
          },
          {
            'Outil': '[WhisperX](https://github.com/m-bain/whisperX)',
            'Le mieux adapté à': 'Besoin d\'horodatages au mot près et de diarisation en plus des transcriptions Whisper',
            'Licence': 'BSD-2-Clause',
          },
          {
            'Outil': '[API OpenAI Whisper](https://platform.openai.com/docs/guides/speech-to-text)',
            'Le mieux adapté à': 'Équipes qui préfèrent une API cloud managée à l\'autohébergement, contre des frais à l\'usage',
            'Licence': 'Propriétaire (API payante)',
          },
          {
            'Outil': '[Vosk](https://alphacephei.com/vosk/)',
            'Le mieux adapté à': 'Appareils hors ligne à très faibles ressources, où une petite empreinte compte plus que la précision de Whisper',
            'Licence': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que whisper.cpp ?',
            a: 'whisper.cpp est une réimplémentation gratuite, sous licence MIT, en C/C++, du modèle de reconnaissance vocale Whisper d\'OpenAI, créée par Georgi Gerganov, qui exécute la transcription localement sans environnement Python.',
          },
          {
            q: 'whisper.cpp est-il gratuit ?',
            a: 'Oui. whisper.cpp est sous licence MIT, sans offre payante, abonnement ni frais d\'usage. Les poids du modèle Whisper qu\'il utilise sont également sous licence MIT par OpenAI.',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour exécuter whisper.cpp ?',
            a: 'Non. whisper.cpp tourne sur CPU grâce aux optimisations AVX2 (x86) ou NEON (ARM), et les petits modèles (tiny, base) sont le choix habituel pour du matériel sans GPU ; la vitesse en temps réel dépend de votre processeur. Un GPU (Apple Metal, NVIDIA CUDA ou Vulkan) accélère les modèles plus grands comme large-v3 mais n\'est pas nécessaire.',
          },
          {
            q: 'whisper.cpp prend-il en charge la transcription en temps réel ?',
            a: 'Oui, via l\'exemple `whisper-stream`, qui capture l\'audio du micro en direct et le transcrit en continu. La latence dépend de la taille du modèle et du matériel — les modèles plus petits sur un CPU ou GPU rapide se rapprochent le plus du temps réel.',
          },
          {
            q: 'Quelle est la différence entre whisper.cpp et faster-whisper ?',
            a: 'whisper.cpp est une implémentation C/C++ pure, sans dépendance à Python, conçue pour la portabilité entre CPU, Apple Metal, CUDA et appareils embarqués. faster-whisper est une bibliothèque Python reposant sur CTranslate2, optimisée surtout pour le débit des GPU NVIDIA dans des pipelines Python. Voir notre [comparatif](/fr/power-local-llm/local-whisper-stt-comparison) pour plus de détails.',
          },
          {
            q: 'whisper.cpp fonctionne-t-il sur les appareils ARM ?',
            a: 'whisper.cpp inclut des optimisations ARM NEON et n\'a ni Python ni CUDA à installer : les CPU ARM sont donc une cible. La vitesse dépend de l\'appareil et de la taille du modèle, et nous ne l\'avons pas mesurée sur des cartes précises ; testez d\'abord les modèles tiny et base.',
          },
          {
            q: 'whisper.cpp traduit-il l\'audio en anglais ?',
            a: 'Oui. Passer l\'option `-tr` (traduire) à `whisper-cli` transcrit une parole non anglaise et la traduit directement en texte anglais, grâce à la capacité de traduction intégrée des modèles Whisper multilingues.',
          },
          {
            q: 'Qui maintient whisper.cpp aujourd\'hui ?',
            a: 'Le projet est maintenu au sein de l\'organisation GitHub ggml-org, fondée par son créateur Georgi Gerganov, avec des contributions de centaines de développeurs de la communauté. Il reste activement publié : v1.9.5 est sortie le 6 octobre 2026 et la dernière activité du dépôt date du 30 octobre 2026.',
          },
          {
            q: 'whisper.cpp sépare-t-il les différents locuteurs d\'un enregistrement ?',
            a: 'Pas nativement. whisper.cpp transcrit la parole en texte mais n\'effectue pas de diarisation par lui-même. Pour "qui a dit quoi", combinez-le avec un outil de diarisation dédié ou utilisez WhisperX, qui ajoute la diarisation par-dessus les transcriptions Whisper.',
          },
          {
            q: 'whisper.cpp est-il sûr à télécharger ?',
            a: 'Récupérez-le uniquement depuis le dépôt officiel [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) et sa [page des releases](https://github.com/ggml-org/whisper.cpp/releases) ; évitez les installateurs reconditionnés et les miroirs non officiels. Le code est open source (MIT) : vous pouvez le lire et le compiler vous-même, et vous devriez vérifier les sources ou les sommes de contrôle publiées avant d\'exécuter un fichier téléchargé. Nous n\'avons pas audité le code, et aucun téléchargement ne peut être garanti sûr.',
          },
          {
            q: 'Qu\'est-ce qui a changé dans whisper.cpp v1.9.4 et v1.9.5 ?',
            a: 'Selon les notes de version officielles, v1.9.4 (11 septembre 2026) appelle le callback de début d\'encodeur avant la détection automatique de la langue, réinitialise le décodeur 0 entre les appels, fait renvoyer la langue par le serveur dans sa réponse de détection, ajoute Windows on ARM au job de release CI et synchronise ggml en 0.23.0. v1.9.5 (6 octobre 2026) est décrite comme une version de maintenance qui passe à ggml v0.26.0 ; son changelog mentionne aussi un backend d\'encodeur ANEForge optionnel (Apple Neural Engine), une correction du code d\'erreur du CLI, un callback d\'abandon lors de la détection de langue, une validation au chargement des modèles VAD et une image Docker Vulkan plus petite. Lisez les notes complètes avant de mettre à jour.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'whisper.cpp réussit exactement ce qu\'il visait : apporter le modèle de reconnaissance vocale Whisper d\'OpenAI à tout appareil capable de compiler du C/C++, sans exiger Python, CUDA ni runtime lourd. Cette portabilité — des CPU x86 et ARM à Apple Silicon et aux GPU compatibles Vulkan ou CUDA — n\'a pas d\'équivalent gratuit proche pour la transcription locale hors ligne, et la licence MIT autorise l\'usage commercial (ce n\'est pas un conseil juridique). Il est gratuit, activement maintenu et utilise les mêmes poids de modèle que Whisper d\'origine : la précision, à taille de modèle égale, suit ce qu\'OpenAI a publié. Il n\'est pas le plus fort dans un pipeline uniquement Python et GPU NVIDIA qui vise le débit maximal — le backend CTranslate2 de faster-whisper y est couramment recommandé, comme le discute notre [comparatif](/fr/power-local-llm/local-whisper-stt-comparison). Pour tous les autres — développeurs visant le matériel embarqué, Apple Silicon, les applications multiplateformes, ou préférant compiler du code natif plutôt que maintenir un environnement Python — whisper.cpp est un point de départ gratuit à tester sur vos propres fichiers audio.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[whisper.cpp sur GitHub](https://github.com/ggml-org/whisper.cpp) — dépôt officiel : README, instructions d\'installation, licence et historique des versions.',
          '[Releases de whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — historique des versions, dont v1.9.5 (6 octobre 2026).',
          '[LICENCE whisper.cpp](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — texte de la licence MIT.',
          '[Annonce OpenAI Whisper](https://openai.com/index/whisper/) — publication originale du modèle Whisper en 2022.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Whisper.cpp vs faster-whisper 2026 : benchmarks STT locaux, installation et accélération GPU](/fr/power-local-llm/local-whisper-stt-comparison) — le comparatif direct pour les lecteurs indécis entre whisper.cpp et faster-whisper.',
          'Avis faster-whisper — l\'alternative basée sur CTranslate2, examinée avec le même niveau de détail.',
          '[Construire un assistant vocal entièrement hors ligne en 2026](/fr/power-local-llm/build-local-voice-assistant-2026) — connecter whisper.cpp à un LLM local et à Piper TTS pour un pipeline vocal complet.',
          'Avis Piper TTS — le pendant local de la synthèse vocale, pour retransformer un texte généré en parole hors ligne.',
          '[L\'annuaire complet des logiciels LLM locaux](/fr/directory) — un annuaire plus large des outils d\'IA locale toutes catégories confondues.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp : avis (2026) — reconnaissance vocale locale en C/C++ pur',
      description:
        'Avis whisper.cpp : le port C/C++ sous licence MIT d\'OpenAI Whisper pour la reconnaissance vocale locale. Histoire, installation, vraies commandes, licence, et quand préférer faster-whisper.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/whisper-cpp-review',
      inLanguage: 'fr',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des outils de reconnaissance vocale locale et hors ligne' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'Reconnaissance vocale' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/fr/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp : avis (2026)', item: 'https://www.promptquorum.com/fr/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-es.webp',
    title: 'Whisper.cpp: análisis — reconocimiento de voz local en C/C++ puro',
    seoTitle: 'Whisper.cpp: análisis, licencia MIT, instalación y CLI',
    intro:
      'whisper.cpp es una reimplementación en C/C++ del modelo de reconocimiento de voz Whisper de OpenAI, creada por Georgi Gerganov y mantenida hoy dentro de la [organización de GitHub ggml-org](https://github.com/ggml-org/whisper.cpp). Transcribe voz a texto íntegramente en el dispositivo, sin entorno de Python ni llamadas a una API en la nube, y admite CPU, Apple Silicon (Metal, Core ML) y GPU NVIDIA (CUDA), entre otros backends. Esta reseña cubre su historia, cómo instalarlo y ejecutarlo, comandos reales, su licencia MIT y su coste (gratis), y dónde no es la herramienta adecuada, con un enlace a nuestra comparativa con faster-whisper para quien dude entre ambos.',
    metaDescription:
      'Análisis de whisper.cpp: el port en C/C++ de OpenAI Whisper (licencia MIT) para voz a texto local. Instalación, comandos CLI, licencia y faster-whisper.',
    twitterDescription:
      'Whisper.cpp 2026: el port en C/C++ de Georgi Gerganov para OpenAI Whisper, reconocimiento de voz local y sin conexión. Historia, instalación, comandos reales, licencia MIT y límites honestos.',
    audience:
      'Desarrolladores y autoalojadores que quieren reconocimiento de voz sin conexión, en el propio dispositivo, sin entorno de Python ni API en la nube: en CPU x86 y ARM, Apple Silicon o pipelines con GPU NVIDIA.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp análisis',
    targetKeywords: [
      'whisper.cpp análisis',
      'whisper.cpp',
      'instalar whisper cpp',
      'configurar whisper cpp',
      'ggerganov whisper',
      'reconocimiento de voz local c++',
      'transcripción whisper sin conexión',
      'licencia whisper cpp',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp es un port gratuito en C/C++, con licencia MIT, del modelo de voz a texto Whisper de OpenAI que transcribe en el dispositivo sin Python.** Admite CPU, Apple Metal, Core ML, CUDA y Vulkan. Compáralo con faster-whisper en nuestra [comparativa whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      es: {
        question: '¿Qué es whisper.cpp y merece la pena para reconocimiento de voz local?',
        answer:
          'whisper.cpp merece la pena si quieres voz a texto sin conexión, en el propio dispositivo, sin instalar Python ni CUDA, o si apuntas a una plataforma como iOS, Android o WebAssembly donde una biblioteca C/C++ es más fácil de integrar que una pila de Python. Es gratis (licencia MIT), se mantiene activamente y usa los mismos pesos de modelo Whisper que la publicación original de OpenAI, así que la precisión para un tamaño de modelo dado sigue la de Whisper. Elige faster-whisper si tu objetivo principal es un servidor con GPU NVIDIA y un pipeline de Python: su backend CTranslate2 se recomienda mucho para ese caso.',
        bullets: [
          'Creado por Georgi Gerganov, publicado por primera vez en 2022 como port en C/C++ de OpenAI Whisper; hoy mantenido bajo la organización ggml-org en GitHub.',
          'Con licencia MIT, gratuito, sin nivel de pago, sin cuenta requerida.',
          'Funciona en CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO y más — no necesita entorno Python.',
          'Última versión estable: v1.9.5 (6 de octubre de 2026); la última actividad del repositorio fue el 30 de octubre de 2026, según las páginas de GitHub del proyecto.',
          'Ideal para: dispositivos embebidos, Apple Silicon, y cualquier despliegue donde un binario autónomo único sea mejor que un entorno Python.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: quién creó whisper.cpp y por qué', anchor: 'history' },
      { label: 'Qué hace realmente whisper.cpp', anchor: 'what-it-does' },
      { label: 'Instalar y ejecutar whisper.cpp: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y coste', anchor: 'license-cost' },
      { label: 'Para qué no sirve whisper.cpp', anchor: 'limitations' },
      { label: 'Alternativas a whisper.cpp', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp es un port gratuito en C/C++, con licencia MIT, del modelo de reconocimiento de voz Whisper de OpenAI, creado por Georgi Gerganov, que transcribe audio totalmente en el dispositivo mediante CPU, Apple Metal, NVIDIA CUDA y otros backends, sin Python.',
          },
          {
            type: 'plain-terms',
            text: 'Convierte audio hablado en texto en tu propio equipo o dispositivo en lugar de enviarlo a una API en la nube: lo compilas desde el código fuente (el proyecto documenta los pasos de CMake), le das un archivo de audio o un flujo de micrófono en directo y te devuelve una transcripción, gratis, con los mismos modelos Whisper que entrenó OpenAI.',
          },
        ],
        items: [
          'Creado por Georgi Gerganov en 2022; hoy mantenido bajo la organización ggml-org en GitHub.',
          'Licencia MIT: uso, modificación y redistribución gratuitos, incluido uso comercial.',
          'Funciona en CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm y backends Ascend NPU.',
          'No requiere Python: se compila desde código C/C++ con CMake; los enlaces (bindings) para Python existen como proyectos comunitarios independientes.',
          'Admite transcripción de micrófono en tiempo real mediante su ejemplo de streaming, además de la transcripción por lotes de archivos.',
          'Última versión estable: v1.9.5, publicada el 6 de octubre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se centra en whisper.cpp como herramienta independiente: su historia, instalación, comandos reales, licencia y límites sin adornos. Para verlo junto a faster-whisper en Apple Silicon y GPU NVIDIA, consulta la [comparativa whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: quién creó whisper.cpp y por qué',
        content: [
          '**OpenAI publicó su modelo de reconocimiento de voz Whisper en septiembre de 2022** como un modelo de pesos abiertos entrenado con una gran cantidad de audio multilingüe, distribuido como paquete de Python (`openai-whisper`) que depende de PyTorch y, para un buen rendimiento, de una GPU compatible con CUDA.',
          '**Georgi Gerganov portó el modelo a C/C++ puro poco después, también en 2022**, en el repositorio [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp). Gerganov es también el creador de la librería de tensores ggml sobre la que se apoyan las matemáticas y la cuantización de whisper.cpp, y más tarde se hizo conocido por llama.cpp, el port equivalente en C/C++ para ejecutar localmente grandes modelos de lenguaje — ambos proyectos comparten la misma base ggml y el mismo objetivo de diseño: ejecutar en hardware normal un modelo que normalmente necesita Python y una GPU.',
          '**La motivación fue la portabilidad y la eficiencia de recursos, no solo la velocidad.** La implementación original de Whisper en Python/PyTorch es fácil de ejecutar en una estación de trabajo con buena GPU, pero pesada de desplegar en una app de iOS, una página WebAssembly o una placa Linux embebida sin intérprete de Python. whisper.cpp elimina por completo la dependencia de PyTorch y Python, se compila como código C/C++ nativo y añade cuantización para que las variantes pequeñas quepan en unos cientos de megabytes de RAM.',
          '**El proyecto ha crecido mucho más allá de un proyecto de un único desarrollador.** Hoy tiene cientos de colaboradores, está empaquetado para Debian, y ofrece soporte oficial para Core ML (Apple Neural Engine), CUDA, Vulkan, OpenVINO y otros backends que no existían en la publicación original de 2022. Sigue siendo un *entorno de ejecución* de Whisper: no entrena ni ajusta sus propios modelos, y cada transcripción sigue usando los mismos pesos publicados por OpenAI para un tamaño de modelo dado (de tiny a large-v3), convertidos al formato GGML del proyecto.',
        ],
        faqs: [
          {
            q: '¿Quién creó whisper.cpp?',
            a: 'Georgi Gerganov creó whisper.cpp, publicado por primera vez en 2022 como port en C/C++ del modelo Whisper de OpenAI. Gerganov también creó la librería de tensores ggml sobre la que se ejecuta, y más tarde llama.cpp, el port equivalente para ejecutar localmente grandes modelos de lenguaje.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente whisper.cpp',
        content: [
          'whisper.cpp toma una entrada de audio (un archivo WAV, y otros formatos mediante decodificación FFmpeg opcional, o una transmisión de micrófono en vivo) y produce una transcripción de texto, opcionalmente con marcas de tiempo por segmento y traducción al inglés. Para ello carga un modelo Whisper (convertido al formato de pesos GGML del proyecto) y ejecuta la inferencia mediante la librería de tensores ggml, totalmente en la máquina local.',
        ],
        items: [
          '**Transcripción por lotes.** Apuntar el binario `whisper-cli` a un archivo de audio y obtener una transcripción, con opciones de salida en texto plano, subtítulos SRT/VTT, JSON o CSV.',
          '**Streaming en tiempo real.** El ejemplo `whisper-stream` captura audio de micrófono en vivo y lo transcribe de forma continua, útil para asistentes de voz o subtitulado en directo.',
          '**Transcripción y traducción multilingües.** Los modelos Whisper subyacentes se entrenaron en muchos idiomas; whisper.cpp puede transcribir en el idioma de origen o traducir directamente al inglés, según los indicadores que se pasen.',
          '**Inferencia acelerada por hardware.** En Apple Silicon, whisper.cpp puede exportar modelos al formato Core ML para usar el Apple Neural Engine; en hardware NVIDIA usa CUDA; en otras GPU puede usar Vulkan u OpenVINO. En máquinas solo con CPU, usa instrucciones vectoriales AVX2 (x86) o NEON (ARM).',
          '**Cuantización.** Los modelos se pueden cuantizar (por ejemplo, a formatos GGML de 4 o 5 bits) para cambiar algo de precisión por un uso de memoria significativamente menor e inferencia más rápida — la misma técnica que usa llama.cpp para LLM.',
        ],
        note: 'whisper.cpp es un entorno de ejecución, no un modelo. La precisión de transcripción para un tamaño de modelo dado (tiny, base, small, medium, large-v3) la determina el entrenamiento original de OpenAI, no whisper.cpp — la función del proyecto es ejecutar ese modelo de forma eficiente, sin Python ni una pila de GPU pesada.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar y ejecutar whisper.cpp: paso a paso',
        content: 'Esta guía compila whisper.cpp desde el código fuente y ejecuta una primera transcripción, usando los comandos documentados en el propio README del proyecto.',
        numberedItems: [
          {
            title: 'Clonar el repositorio.',
            whyItMatters: 'Ejecuta `git clone https://github.com/ggml-org/whisper.cpp.git` seguido de `cd whisper.cpp`. Esto descarga el árbol completo de código fuente en C/C++, incluidos los archivos de compilación CMake y el script de descarga de modelos.',
          },
          {
            title: 'Descargar un modelo.',
            whyItMatters: 'Ejecuta `sh ./models/download-ggml-model.sh base.en` para obtener el modelo base en inglés en formato GGML. Cambia `base.en` por `tiny`, `small`, `medium` o `large-v3` según el equilibrio entre precisión y velocidad que quieras, o quita el sufijo `.en` para un modelo multilingüe.',
          },
          {
            title: 'Compilar el proyecto.',
            whyItMatters: 'Ejecuta `cmake -B build` seguido de `cmake --build build -j --config Release`. Esto compila los binarios de CLI (`whisper-cli`, `whisper-stream` y otros) en el directorio `build/bin/`. Este paso no requiere instalación de Python.',
          },
          {
            title: 'Transcribir un archivo de ejemplo.',
            whyItMatters: 'Ejecuta `./build/bin/whisper-cli -f samples/jfk.wav` con el archivo de audio de ejemplo incluido en el repositorio. Esto confirma que la compilación funciona de principio a fin e imprime una transcripción en la terminal.',
          },
          {
            title: 'Transcribir tu propio audio.',
            whyItMatters: 'Sustituye la ruta de ejemplo por tu propio archivo WAV: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. Añade `-osrt` para escribir también un archivo de subtítulos `.srt`, o `-oj` para salida en JSON.',
          },
          {
            title: '(Opcional) Activar la aceleración por GPU.',
            whyItMatters: 'En Apple Silicon, la aceleración Metal se usa automáticamente al compilar con los indicadores CMake predeterminados en macOS. En una máquina NVIDIA, añade `-DGGML_CUDA=ON` al paso `cmake -B build` (requiere tener instalado el toolkit de CUDA) para compilar con soporte CUDA.',
          },
          {
            title: '(Opcional) Probar la transcripción en tiempo real.',
            whyItMatters: 'Compila el ejemplo de streaming y ejecuta `./build/bin/whisper-stream -m models/ggml-base.en.bin` para transcribir de forma continua el audio del micrófono en vivo en lugar de un archivo fijo.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Más allá de la guía de instalación básica anterior, estas son invocaciones habituales del binario `whisper-cli` en escenarios reales.',
        ],
        codeBlock: `# Transcribir un archivo de audio a texto plano (salida por defecto)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# Transcribir y generar subtítulos SRT, usando el modelo más grande y preciso
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# Traducir directamente audio no anglófono a texto en inglés
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# Elegir una GPU concreta (máquinas con varias GPU)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# Transcripción en tiempo real desde el micrófono predeterminado
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'Los indicadores mostrados aquí (`-m` ruta del modelo, `-f` archivo de entrada, `-osrt` salida SRT, `-tr` traducir al inglés, `-g`/`--gpu-device` selección de GPU, `-t` número de hilos) están documentados en la salida `--help` y en el README del proyecto. Ejecuta siempre `./build/bin/whisper-cli --help` para confirmar el conjunto de indicadores actual de tu versión instalada, ya que las opciones de la CLI pueden cambiar entre versiones.',
        items: [
          '**pywhispercpp** proporciona bindings de Python para whisper.cpp, para equipos que quieren la aceleración Metal/CUDA pero prefieren llamarlo desde código Python en vez de invocar el binario CLI archivo por archivo.',
          '**whisper.cpp también incluye un pequeño ejemplo de servidor HTTP local** (`whisper-server`) para equipos que quieren enviar audio por HTTP en lugar de invocar la CLI por archivo — útil para integrar whisper.cpp en un servicio existente sin depender de Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y coste',
        content: [
          '**whisper.cpp tiene licencia MIT** — el archivo de licencia del [repositorio oficial](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) permite el uso, modificación y redistribución gratuitos, incluso en productos cerrados y comerciales, sin regalías y sin más requisito de atribución que conservar el aviso de licencia.',
          '**No existe ningún nivel de pago, suscripción ni tarifa de licencia para whisper.cpp en sí.** Los únicos costes reales son el hardware en el que lo ejecutes (o una VM en la nube si eliges alojarlo ahí) y, si construyes un producto sobre él, tu propio tiempo de desarrollo. No hay medición de uso, ni clave de API, ni dependencia de un proveedor.',
          '**Los pesos del modelo Whisper subyacente también están publicados por OpenAI con licencia MIT**, por lo que tanto el entorno de ejecución (whisper.cpp) como los pesos del modelo que carga tienen licencias permisivas para uso comercial.',
        ],
        faqs: [
          {
            q: '¿Es whisper.cpp gratuito para uso comercial?',
            a: 'Sí. whisper.cpp tiene licencia MIT, y los pesos del modelo Whisper que usa también están publicados por OpenAI bajo licencia MIT. Ambos permiten uso, modificación y redistribución comercial sin coste.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no sirve whisper.cpp',
        content: [
          'whisper.cpp es un entorno de ejecución de transcripción, no un producto completo de IA conversacional o diarización de hablantes. Es la herramienta equivocada en estas situaciones:',
        ],
        items: [
          '**Diarización de hablantes ("quién dijo qué").** whisper.cpp transcribe lo que se dijo, pero no separa ni etiqueta de forma nativa a distintos hablantes en una grabación con varias personas. La diarización requiere un modelo o pipeline aparte (por ejemplo, combinar la transcripción de whisper.cpp con una herramienta de diarización) superpuesto encima.',
          '**Latencia de streaming por debajo de 100 milisegundos a gran escala.** El ejemplo integrado `whisper-stream` funciona bien para un único micrófono en vivo en una máquina, pero whisper.cpp no es un servicio de reconocimiento de voz en tiempo real diseñado específicamente y escalado horizontalmente, como sí lo estaría una API de voz en tiempo real dedicada para muchos usuarios simultáneos.',
          '**Cero configuración para usuarios no técnicos.** whisper.cpp es una herramienta de línea de comandos que casi todos compilan desde el código fuente: el README del proyecto documenta una compilación con CMake y en el repositorio oficial no encontramos un instalador gráfico ni una ficha en tiendas de apps pensada para no desarrolladores. Quien quiera una app de transcripción de clic y listo debería mirar una aplicación con interfaz gráfica basada en whisper.cpp, o un servicio de transcripción alojado.',
          '**Exprimir hasta el último rendimiento de una GPU NVIDIA en un pipeline de Python.** En los modelos más grandes y hardware NVIDIA, suele indicarse que el backend CTranslate2 de faster-whisper es más rápido y gasta menos VRAM que la ruta CUDA de whisper.cpp (nuestra [comparativa](/es/power-local-llm/local-whisper-stt-comparison) lo trata; no realizamos estas mediciones nosotros) — si tu despliegue ya es un servicio de Python sobre GPU NVIDIA, faster-whisper suele encajar mejor.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a whisper.cpp',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'Mejor para': 'Pipelines en Python sobre GPU NVIDIA — backend CTranslate2, ~4x el rendimiento del Whisper original',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[WhisperX](https://github.com/m-bain/whisperX)',
            'Mejor para': 'Cuando necesitas marcas de tiempo palabra por palabra y diarización sobre las transcripciones de Whisper',
            'Licencia': 'BSD-2-Clause',
          },
          {
            'Herramienta': '[API de OpenAI Whisper](https://platform.openai.com/docs/guides/speech-to-text)',
            'Mejor para': 'Equipos que prefieren una API en la nube gestionada frente al autoalojamiento, a cambio de tarifas por uso',
            'Licencia': 'Propietaria (API de pago)',
          },
          {
            'Herramienta': '[Vosk](https://alphacephei.com/vosk/)',
            'Mejor para': 'Dispositivos sin conexión de muy pocos recursos donde una huella pequeña importa más que la precisión de Whisper',
            'Licencia': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es whisper.cpp?',
            a: 'whisper.cpp es una reimplementación gratuita en C/C++, con licencia MIT, del modelo de reconocimiento de voz Whisper de OpenAI, creada por Georgi Gerganov, que ejecuta la transcripción localmente sin entorno Python.',
          },
          {
            q: '¿Es gratuito whisper.cpp?',
            a: 'Sí. whisper.cpp tiene licencia MIT, sin nivel de pago, suscripción ni tarifa de uso. Los pesos del modelo Whisper que usa también están licenciados por OpenAI bajo MIT.',
          },
          {
            q: '¿Necesito una GPU para ejecutar whisper.cpp?',
            a: 'No. whisper.cpp se ejecuta en CPU con optimizaciones AVX2 (x86) o NEON (ARM), y los modelos pequeños (tiny, base) son la elección habitual para hardware solo con CPU; la velocidad en tiempo real depende de tu procesador. Una GPU (Apple Metal, NVIDIA CUDA o Vulkan) acelera los modelos más grandes como large-v3, pero no es obligatoria.',
          },
          {
            q: '¿whisper.cpp admite transcripción en tiempo real?',
            a: 'Sí, mediante el ejemplo `whisper-stream`, que captura audio de micrófono en vivo y lo transcribe de forma continua. La latencia depende del tamaño del modelo y del hardware — los modelos más pequeños en una CPU o GPU rápida son los que más se acercan al tiempo real.',
          },
          {
            q: '¿Cuál es la diferencia entre whisper.cpp y faster-whisper?',
            a: 'whisper.cpp es una implementación C/C++ pura, sin dependencia de Python, pensada para la portabilidad entre CPU, Apple Metal, CUDA y dispositivos embebidos. faster-whisper es una biblioteca de Python basada en CTranslate2, optimizada sobre todo para el rendimiento en GPU NVIDIA dentro de pipelines de Python. Consulta nuestra [comparativa](/es/power-local-llm/local-whisper-stt-comparison) para más detalle.',
          },
          {
            q: '¿Funciona whisper.cpp en dispositivos ARM?',
            a: 'whisper.cpp incluye optimizaciones ARM NEON y no necesita instalar Python ni CUDA, así que las CPU ARM son un objetivo. La velocidad depende del dispositivo y del tamaño del modelo, y no la hemos medido en placas concretas; prueba primero los modelos tiny y base.',
          },
          {
            q: '¿whisper.cpp traduce audio al inglés?',
            a: 'Sí. Al pasar el indicador `-tr` (traducir) a `whisper-cli` se transcribe voz no anglófona y se traduce directamente a texto en inglés, usando la capacidad de traducción integrada en los modelos Whisper multilingües.',
          },
          {
            q: '¿Quién mantiene whisper.cpp hoy?',
            a: 'El proyecto se mantiene dentro de la organización de GitHub ggml-org, fundada por su creador original, Georgi Gerganov, con aportaciones de cientos de desarrolladores de la comunidad. Sigue publicándose de forma activa: v1.9.5 salió el 6 de octubre de 2026 y la última actividad del repositorio fue el 30 de octubre de 2026.',
          },
          {
            q: '¿whisper.cpp separa a los distintos hablantes de una grabación?',
            a: 'No de forma nativa. whisper.cpp transcribe voz a texto, pero no realiza diarización de hablantes por sí mismo. Para "quién dijo qué", combínalo con una herramienta de diarización dedicada o usa WhisperX, que añade diarización sobre las transcripciones de Whisper.',
          },
          {
            q: '¿Es seguro descargar whisper.cpp?',
            a: 'Descárgalo solo del repositorio oficial [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) y de su [página de releases](https://github.com/ggml-org/whisper.cpp/releases); evita instaladores reempaquetados y réplicas no oficiales. El código es de código abierto (MIT), así que puedes leerlo y compilarlo tú mismo, y conviene comprobar el código fuente o las sumas de verificación publicadas antes de ejecutar archivos descargados. No hemos auditado el código y ninguna descarga puede garantizarse como segura.',
          },
          {
            q: '¿Qué cambió en whisper.cpp v1.9.4 y v1.9.5?',
            a: 'Según las notas de versión oficiales, v1.9.4 (11 de septiembre de 2026) llama al callback de inicio del codificador antes de la detección automática de idioma, reinicia la semilla del decodificador 0 entre llamadas, hace que el servidor devuelva el idioma en su respuesta de detección, añade Windows on ARM al job de release de CI y sincroniza ggml a 0.23.0. v1.9.5 (6 de octubre de 2026) se describe como una versión de mantenimiento que actualiza a ggml v0.26.0; su changelog también menciona un backend de codificador ANEForge opcional (Apple Neural Engine), una corrección del código de error de la CLI, un callback de aborto en la detección de idioma, validación al cargar modelos VAD y una imagen Docker de Vulkan más pequeña. Lee las notas completas antes de actualizar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'whisper.cpp logra justo lo que se proponía: llevar el modelo de voz a texto Whisper de OpenAI a cualquier dispositivo capaz de compilar C/C++, sin exigir Python, CUDA ni un entorno pesado. Esa portabilidad —de CPU x86 y ARM a Apple Silicon y GPU compatibles con Vulkan o CUDA— no tiene un equivalente gratuito cercano para la transcripción local sin conexión, y la licencia MIT permite el uso comercial (no es asesoramiento legal). Es gratis, se mantiene activamente y usa los mismos pesos de modelo que Whisper original, así que la precisión para un tamaño dado sigue lo publicado por OpenAI. No es la opción más fuerte en un pipeline solo de Python y GPU NVIDIA que busque el máximo rendimiento: el backend CTranslate2 de faster-whisper suele recomendarse ahí, como explica nuestra [comparativa](/es/power-local-llm/local-whisper-stt-comparison). Para todos los demás —desarrolladores con hardware embebido, Apple Silicon, apps multiplataforma, o quien prefiere compilar código nativo antes que mantener un entorno de Python— whisper.cpp es un punto de partida gratuito que conviene probar con tu propio audio.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[whisper.cpp en GitHub](https://github.com/ggml-org/whisper.cpp) — repositorio oficial: README, instrucciones de instalación, licencia e historial de versiones.',
          '[Releases de whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — historial de versiones, incluida v1.9.5 (6 de octubre de 2026).',
          '[LICENCIA de whisper.cpp](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — texto de la licencia MIT.',
          '[Anuncio de OpenAI Whisper](https://openai.com/index/whisper/) — publicación original del modelo Whisper en 2022.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Whisper.cpp vs faster-whisper 2026: benchmarks de STT local, instalación y aceleración por GPU](/es/power-local-llm/local-whisper-stt-comparison) — el comparativo directo para quien tenga que elegir entre whisper.cpp y faster-whisper.',
          'Análisis de faster-whisper — la alternativa basada en CTranslate2, analizada con el mismo nivel de detalle.',
          '[Construir un asistente de voz totalmente sin conexión en 2026](/es/power-local-llm/build-local-voice-assistant-2026) — conectar whisper.cpp con un LLM local y Piper TTS en un pipeline de voz completo.',
          'Análisis de Piper TTS — el equivalente local de síntesis de voz, para convertir texto generado de nuevo en voz sin conexión.',
          '[El directorio completo de software de LLM local](/es/directory) — un directorio más amplio de herramientas de IA local en todas las categorías.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp: análisis (2026) — reconocimiento de voz local en C/C++ puro',
      description:
        'Análisis de whisper.cpp: el port en C/C++ con licencia MIT de OpenAI Whisper para reconocimiento de voz local. Historia, instalación, comandos reales, licencia y cuándo usar faster-whisper.',
      url: 'https://www.promptquorum.com/es/power-local-llm/whisper-cpp-review',
      inLanguage: 'es',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan herramientas de reconocimiento de voz local y sin conexión' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'Reconocimiento de voz' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/es/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp: análisis (2026)', item: 'https://www.promptquorum.com/es/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-ja.webp',
    title: 'whisper.cppレビュー:純粋なC/C++によるローカル音声認識',
    seoTitle: 'whisper.cppレビュー:C/C++のローカルSTT',
    intro:
      'whisper.cppは、OpenAIの音声認識モデルWhisperをC/C++で再実装したもので、Georgi Gerganovが作成し、現在は[GitHub組織ggml-org](https://github.com/ggml-org/whisper.cpp)の下で保守されています。Pythonランタイムもクラウドの API呼び出しも使わず、音声をすべて端末上でテキストに変換し、CPU、Apple Silicon（Metal、Core ML）、NVIDIA GPU（CUDA）などに対応します。本レビューでは、歴史、インストールと実行方法、実際のコマンド、MITライセンスと費用（無料）、向かない場面を扱い、faster-whisperとの選択に迷う方向けに当サイトの比較記事へのリンクも載せています。',
    metaDescription:
      'whisper.cppレビュー:OpenAI WhisperのMIT版C/C++移植によるローカル音声認識。インストール、CLIコマンド、ライセンス、faster-whisperとの比較。',
    twitterDescription:
      'whisper.cppレビュー2026:Georgi Gerganov氏によるOpenAI WhisperのC/C++移植版。オフラインでデバイス上の音声認識を実現。歴史、セットアップ、実際のコマンド、MITライセンス、正直な限界を解説。',
    audience:
      'PythonランタイムやクラウドAPIなしで、オフラインかつオンデバイスの音声認識を使いたい開発者とセルフホスター向け。x86・ARMのCPU、Apple Silicon、NVIDIA GPUパイプラインが対象です。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp レビュー',
    targetKeywords: [
      'whisper.cpp レビュー',
      'whisper.cpp',
      'whisper cpp インストール',
      'whisper cpp セットアップ',
      'ggerganov whisper',
      'ローカル音声認識 c++',
      'オフライン whisper 文字起こし',
      'whisper cpp ライセンス',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cppは、OpenAIの音声認識モデルWhisperをC/C++で再実装した無料のMITライセンスのソフトウェアで、Georgi Gerganovが作成し、Python依存なしで文字起こしを端末上で完結させます。** CPU（AVX2/NEON最適化）、Apple MetalとCore ML、NVIDIA CUDA、Vulkanなど複数のバックエンドに対応し、1つのコードベースでx86・ARMのCPU、Apple Silicon、CUDA GPUをカバーします。faster-whisperとの並べた比較は、当サイトの[whisper.cpp対faster-whisper比較](/ja/power-local-llm/local-whisper-stt-comparison)をご覧ください。',
    quickAnswerTop: {
      ja: {
        question: 'whisper.cppとは何か、ローカル音声認識に使う価値はあるか',
        answer:
          'Pythonに加えCUDAも入れずにオフラインでオンデバイスの音声認識をしたい場合や、iOS、Android、WebAssemblyのように、Pythonスタックよりも C/C++ライブラリのほうが組み込みやすい環境を狙う場合に、whisper.cppは有力な選択肢です。無料（MITライセンス）で活発に保守されており、OpenAIの元のリリースと同じWhisperモデルの重みを使うため、同じモデルサイズでの精度は元のWhisperに準じます。主な対象がPythonパイプラインを動かすNVIDIA GPUサーバーなら、代わりにfaster-whisperを選んでください。CTranslate2バックエンドがその用途でよく推奨されています。',
        bullets: [
          'Georgi Gerganov氏が開発し、2022年にOpenAI WhisperのC/C++移植版として初公開。現在はGitHubのggml-org組織で保守。',
          'MITライセンス、無料、有料プランなし、アカウント不要。',
          'CPU、Apple Metal/Core ML、NVIDIA CUDA、Vulkan、OpenVINOなどで動作 ー Pythonランタイム不要。',
          '最新の安定版:v1.9.5（2026年10月6日）。リポジトリの直近の更新は2026年10月30日で、プロジェクトのGitHubページに基づきます。',
          '最適な用途:組み込みデバイス、Apple Silicon、Python環境よりも単一の自己完結バイナリを求める展開全般。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:誰がなぜwhisper.cppを作ったか', anchor: 'history' },
      { label: 'whisper.cppが実際にできること', anchor: 'what-it-does' },
      { label: 'whisper.cppのインストールと実行:手順', anchor: 'install-walkthrough' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスとコスト', anchor: 'license-cost' },
      { label: 'whisper.cppが向いていない用途', anchor: 'limitations' },
      { label: 'whisper.cppの代替ツール', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cppは、Georgi Gerganov氏が開発した、OpenAIの音声認識モデルWhisperの無料・MITライセンスC/C++移植版で、CPU、Apple Metal、NVIDIA CUDAなどのバックエンドを通じてPythonなしで完全にデバイス上で音声を文字起こしする。',
          },
          {
            type: 'plain-terms',
            text: '音声をクラウドAPIに送る代わりに、お使いのコンピューターや端末上でテキストに変換します。ソースからビルドし（プロジェクトがCMakeの手順を公開しています）、音声ファイルまたはライブのマイク入力を渡すと、OpenAIが学習したのと同じWhisperモデルで、無料で文字起こしが得られます。',
          },
        ],
        items: [
          'Georgi Gerganov氏が2022年に開発。現在はGitHubのggml-org組織で保守。',
          'MITライセンス ー 商用利用を含め、無料で使用・改変・再配布可能。',
          'CPU、Apple Metal/Core ML、NVIDIA CUDA、Vulkan、OpenVINO、AMD ROCm、Ascend NPUバックエンドで動作。',
          'Pythonランタイムは不要です。CMakeでC/C++のソースからビルドします。Pythonバインディングはコミュニティの別プロジェクトとして存在します。',
          'streamingサンプルによりリアルタイムのマイク文字起こしにも対応し、ファイルのバッチ文字起こしもできる。',
          '最新の安定版:v1.9.5、2026年10月6日公開。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューでは、whisper.cppを単体のツールとして扱い、歴史、インストール、実際のコマンド、ライセンス、率直な限界を取り上げます。Apple SiliconとNVIDIA GPUでfaster-whisperと並べて見るには、[whisper.cpp対faster-whisper比較](/ja/power-local-llm/local-whisper-stt-comparison)をご覧ください。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:誰がなぜwhisper.cppを作ったか',
        content: [
          '**OpenAIは2022年9月に音声認識モデルWhisperを公開しました。** 大量の多言語音声データで学習したオープンウェイトモデルで、PyTorchに依存し、良好な性能を得るにはCUDA対応GPUを必要とするPythonパッケージ(`openai-whisper`)として配布されていました。',
          '**Georgi Gerganov氏はその直後、同じ2022年にこのモデルを純粋なC/C++へ移植しました。** リポジトリは[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)です。Gerganov氏はwhisper.cppの演算と量子化を支えるggmlテンソルライブラリの開発者でもあり、後にローカルで大規模言語モデルを実行するための同等のC/C++移植版であるllama.cppでも知られるようになりました ー 両プロジェクトは同じggml基盤と、通常はPythonとGPUを必要とするモデルを一般的なハードウェアで動かすという同じ設計目標を共有しています。',
          '**動機は速度だけでなく、移植性とリソース効率でした。** Whisperの元のPython/PyTorch実装は、高性能GPUを積んだワークステーションでは簡単に動きますが、iOSアプリ、WebAssemblyページ、Pythonインタープリターのない組み込みLinuxボードへの配備には重い実装です。whisper.cppはPyTorchとPythonへの依存を完全に取り除き、ネイティブのC/C++コードとしてビルドでき、量子化にも対応するため、小さなモデルなら数百MBのRAMに収まります。',
          '**プロジェクトは一人の開発者によるサイドプロジェクトの域をはるかに超えて成長しました。** 現在は数百人の貢献者を抱え、Debian向けにパッケージ化され、2022年のオリジナル公開時には存在しなかったCore ML(Apple Neural Engine)、CUDA、Vulkan、OpenVINOなどのバックエンドを公式にサポートしています。それでも本質はWhisperの*実行環境*であり続けています ー 独自モデルの学習やファインチューニングは行わず、すべての文字起こしは、指定されたモデルサイズ(tinyからlarge-v3まで)についてOpenAIが公開した同じ重みを、プロジェクト独自のGGML形式に変換して使用しています。',
        ],
        faqs: [
          {
            q: 'whisper.cppを開発したのは誰ですか?',
            a: 'Georgi Gerganov氏がwhisper.cppを開発し、2022年にOpenAIのWhisperモデルのC/C++移植版として初めて公開しました。Gerganov氏はwhisper.cppが動作するggmlテンソルライブラリの開発者でもあり、後にローカルで大規模言語モデルを実行するための同等の移植版であるllama.cppも開発しました。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'whisper.cppが実際にできること',
        content: [
          'whisper.cppは音声入力(WAVファイル、およびオプションのFFmpegデコードによるその他の形式、またはライブマイクストリーム)を受け取り、テキストの文字起こしを出力します。オプションでセグメントごとのタイムスタンプと英語への翻訳も可能です。これを実現するために、Whisperモデル(プロジェクト独自のGGML重み形式に変換済み)を読み込み、ggmlテンソルライブラリを通じて完全にローカルマシン上で推論を実行します。',
        ],
        items: [
          '**バッチ文字起こし。** `whisper-cli`バイナリを音声ファイルに向けて実行し、文字起こしを取得。プレーンテキスト、SRT/VTT字幕、JSON、CSVでの出力オプションあり。',
          '**リアルタイムストリーミング。** `whisper-stream`サンプルはライブマイク音声を取り込み、継続的に文字起こしする。音声アシスタントやライブ字幕に有用。',
          '**多言語文字起こしと翻訳。** 元となるWhisperモデルは多数の言語で学習されており、whisper.cppは渡すフラグに応じて元言語のまま文字起こしするか、直接英語に翻訳できる。',
          '**ハードウェアアクセラレーション推論。** Apple Siliconでは、whisper.cppはモデルをCore ML形式にエクスポートしてApple Neural Engineを利用可能。NVIDIAハードウェアではCUDAを、他のGPUではVulkanやOpenVINOを利用可能。CPUのみのマシンでは、AVX2(x86)やNEON(ARM)ベクトル命令を使用する。',
          '**量子化。** モデルを量子化(例:4ビットや5ビットのGGML形式)することで、わずかな精度と引き換えにメモリ使用量を大幅に削減し、推論を高速化できる ー llama.cppがLLMに使うのと同じ技術。',
        ],
        note: 'whisper.cppは実行環境であり、モデルそのものではない。指定されたモデルサイズ(tiny、base、small、medium、large-v3)における文字起こし精度は、whisper.cppではなくOpenAIによる元の学習で決まる ー このプロジェクトの役割は、Pythonや重いGPUスタックなしにそのモデルを効率的に実行することである。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'whisper.cppのインストールと実行:手順',
        content: 'このガイドは、プロジェクト自身のREADMEに記載されたコマンドを使って、ソースからwhisper.cppをビルドし、最初の文字起こしを実行します。',
        numberedItems: [
          {
            title: 'リポジトリをクローンする。',
            whyItMatters: '`git clone https://github.com/ggml-org/whisper.cpp.git` を実行し、続けて `cd whisper.cpp` を実行します。これにより、CMakeビルドファイルとモデルダウンロードスクリプトを含む、C/C++ソースツリー全体が取得されます。',
          },
          {
            title: 'モデルをダウンロードする。',
            whyItMatters: '`sh ./models/download-ggml-model.sh base.en` を実行し、GGML形式の英語専用baseモデルを取得します。求める精度と速度のバランスに応じて `base.en` を `tiny`、`small`、`medium`、`large-v3` に置き換えるか、多言語モデルには `.en` 接尾辞を外してください。',
          },
          {
            title: 'プロジェクトをビルドする。',
            whyItMatters: '`cmake -B build` を実行し、続けて `cmake --build build -j --config Release` を実行します。これによりCLIバイナリ(`whisper-cli`、`whisper-stream`など)が `build/bin/` ディレクトリにコンパイルされます。このステップにPythonのインストールは不要です。',
          },
          {
            title: 'サンプルファイルを文字起こしする。',
            whyItMatters: 'リポジトリに同梱されているサンプル音声ファイルを使って `./build/bin/whisper-cli -f samples/jfk.wav` を実行します。これでビルドがエンドツーエンドで機能していることを確認でき、ターミナルに文字起こしが出力されます。',
          },
          {
            title: '自分の音声を文字起こしする。',
            whyItMatters: 'サンプルパスを自分のWAVファイルに置き換えます:`./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`。`.srt`字幕ファイルも出力するには `-osrt` を、JSON出力には `-oj` を追加します。',
          },
          {
            title: '(任意)GPUアクセラレーションを有効にする。',
            whyItMatters: 'Apple Siliconでは、macOSでデフォルトのCMakeフラグでビルドすると自動的にMetalアクセラレーションが使用されます。NVIDIAマシンでは、CUDA対応でビルドするために `cmake -B build` のステップに `-DGGML_CUDA=ON` を追加します(CUDAツールキットのインストールが必要)。',
          },
          {
            title: '(任意)リアルタイム文字起こしを試す。',
            whyItMatters: 'ストリーミングサンプルをビルドし、`./build/bin/whisper-stream -m models/ggml-base.en.bin` を実行して、固定ファイルの代わりにライブマイク音声を継続的に文字起こしします。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          '上記の基本的なインストール手順に加えて、以下は `whisper-cli` バイナリの実際によく使われる呼び出し例です。',
        ],
        codeBlock: `# 音声ファイルをプレーンテキストに文字起こし(デフォルト出力)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# より大きく精度の高いモデルを使い、SRT字幕を出力しながら文字起こし
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# 非英語の音声を直接英語テキストに翻訳
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# 特定のGPUを指定(マルチGPUマシン)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# デフォルトマイクからのリアルタイム文字起こし
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'ここに示したフラグ(`-m` モデルパス、`-f` 入力ファイル、`-osrt` SRT出力、`-tr` 英語への翻訳、`-g`/`--gpu-device` GPU選択、`-t` スレッド数)は、プロジェクトの `--help` 出力とREADMEに記載されています。CLIオプションはバージョン間で変わる可能性があるため、常に `./build/bin/whisper-cli --help` を実行して、インストール済みバージョンの現在のフラグセットを確認してください。',
        items: [
          '**pywhispercpp** はwhisper.cppのPythonバインディングを提供し、Metal/CUDAアクセラレーションを利用しつつ、ファイルごとにCLIバイナリを呼び出すのではなくPythonコードから呼び出したいチーム向け。',
          '**whisper.cppには小さなローカルHTTPサーバーのサンプル(`whisper-server`)も付属しており**、ファイルごとにCLIを呼び出すのではなくHTTP経由で音声を送りたいチームに有用 ー Pythonへの依存なしに既存サービスへwhisper.cppを組み込むのに役立つ。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスとコスト',
        content: [
          '**whisper.cppはMITライセンスの下で公開されています。** [公式リポジトリ](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE)のライセンスファイルは、クローズドソースおよび商用製品を含め、無料での使用・改変・再配布を許可しており、ロイヤリティは不要、ライセンス表示の保持以外の帰属表示義務もありません。',
          '**whisper.cpp自体に有料プラン、サブスクリプション、ライセンス料は一切存在しません。** 実際にかかるコストは、実行するハードウェア(またはホスティングを選ぶ場合はクラウドVM)と、その上に製品を構築する場合の自身の開発時間だけです。使用量計測もAPIキーもベンダーロックインもありません。',
          '**基盤となるWhisperモデルの重みも、OpenAIによって別途MITライセンスで公開されています。** そのため、実行環境(whisper.cpp)とそれが読み込むモデルの重みの両方が、商用利用に対して寛容なライセンスとなっています。',
        ],
        faqs: [
          {
            q: 'whisper.cppは商用利用でも無料ですか?',
            a: 'はい。whisper.cppはMITライセンスであり、使用しているWhisperモデルの重みもOpenAIによってMITライセンスで公開されています。両方とも商用利用、改変、再配布が無料で許可されています。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'whisper.cppが向いていない用途',
        content: [
          'whisper.cppは文字起こしの実行環境であり、完全な対話型AIや話者分離の製品ではありません。以下の状況には向いていません。',
        ],
        items: [
          '**話者分離(誰が何を言ったか)。** whisper.cppは発話内容を文字起こしするが、複数人の録音で異なる話者をネイティブに分離・ラベル付けすることはできない。話者分離には、whisper.cppの文字起こしを話者分離ツールと組み合わせるなど、別途モデルやパイプラインを重ねる必要がある。',
          '**大規模での100ミリ秒未満のストリーミング遅延。** 組み込みの `whisper-stream` サンプルは1台のマシンでの単一のライブマイクにはよく機能するが、whisper.cppは、多数の同時ユーザー向けに専用のリアルタイム音声APIが設計されるような、専用に構築され水平にスケールされたストリーミング音声認識サービスではない。',
          '**非技術者向けのかんたんセットアップはありません。** whisper.cppはコマンドラインツールで、多くの人がソースからビルドして使います。プロジェクトのREADMEにはCMakeによるビルド手順があり、公式リポジトリでは非開発者向けのグラフィカルなインストーラーやアプリストアの掲載は確認できませんでした。クリックだけで使える文字起こしアプリが欲しい場合は、whisper.cpp上に作られたGUIアプリやホスト型の文字起こしサービスをご検討ください。',
          '**PythonファーストのパイプラインでNVIDIA GPUの性能を限界まで引き出したい場合。** NVIDIAハードウェア上の最大級のモデルでは、faster-whisperのCTranslate2バックエンドのほうがwhisper.cppのCUDA経路より高速でVRAMも少ないと一般に言われています（当サイトの[比較記事](/ja/power-local-llm/local-whisper-stt-comparison)で扱っていますが、これらの測定は当サイトで実施したものではありません）。すでにNVIDIA GPU上のPythonサービスを運用しているなら、faster-whisperのほうが合うことが多いでしょう。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'whisper.cppの代替ツール',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            '最適な用途': 'NVIDIA GPU上のPythonパイプライン ー CTranslate2バックエンド、オリジナルWhisper比で約4倍のスループット',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[WhisperX](https://github.com/m-bain/whisperX)',
            '最適な用途': 'Whisperの文字起こしに加えて、単語レベルのタイムスタンプと話者分離が必要な場合',
            'ライセンス': 'BSD-2-Clause',
          },
          {
            'ツール': '[OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            '最適な用途': 'セルフホストより従量課金のマネージドクラウドAPIを好むチーム',
            'ライセンス': 'プロプライエタリ(有料API)',
          },
          {
            'ツール': '[Vosk](https://alphacephei.com/vosk/)',
            '最適な用途': 'Whisper並みの精度よりも小さなフットプリントが重要な、非常にリソースの限られたオフラインデバイス',
            'ライセンス': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'whisper.cppとは何ですか?',
            a: 'whisper.cppは、Georgi Gerganov氏が開発した、OpenAIの音声認識モデルWhisperの無料・MITライセンスのC/C++再実装で、Pythonランタイムなしでローカルに文字起こしを実行します。',
          },
          {
            q: 'whisper.cppは無料ですか?',
            a: 'はい。whisper.cppはMITライセンスで、有料プラン、サブスクリプション、利用料は一切ありません。使用しているWhisperモデルの重みも、OpenAIによってMITライセンスで公開されています。',
          },
          {
            q: 'whisper.cppの実行にGPUは必要ですか?',
            a: 'いいえ。whisper.cppはAVX2（x86）またはNEON（ARM）の最適化によりCPUで動作し、CPUのみの環境では小さいモデル（tiny、base）が一般的な選択です。リアルタイム性はプロセッサー次第です。GPU（Apple Metal、NVIDIA CUDA、Vulkan）はlarge-v3のような大きなモデルを高速化しますが、必須ではありません。',
          },
          {
            q: 'whisper.cppはリアルタイム文字起こしに対応していますか?',
            a: 'はい、`whisper-stream` サンプルにより、ライブマイク音声を取り込み継続的に文字起こしできます。遅延はモデルサイズとハードウェアに依存し、高速なCPUやGPU上の小さいモデルが最もリアルタイムに近くなります。',
          },
          {
            q: 'whisper.cppとfaster-whisperの違いは何ですか?',
            a: 'whisper.cppはPython依存のない純粋なC/C++実装で、CPU、Apple Metal、CUDA、組み込み機器をまたぐ移植性を重視して作られています。faster-whisperはCTranslate2をベースにしたPythonライブラリで、主にPythonパイプライン内でのNVIDIA GPUのスループットに最適化されています。詳しくは当サイトの[比較記事](/ja/power-local-llm/local-whisper-stt-comparison)をご覧ください。',
          },
          {
            q: 'whisper.cppはARM搭載デバイスで動きますか？',
            a: 'whisper.cppにはARM NEON最適化があり、PythonやCUDAをインストールする必要もないため、ARM CPUは対象に含まれます。速度はデバイスとモデルサイズ次第で、特定のボードでの測定は行っていません。まずtinyとbaseモデルで試してください。',
          },
          {
            q: 'whisper.cppは音声を英語に翻訳しますか?',
            a: 'はい。`whisper-cli` に `-tr`(翻訳)フラグを渡すと、非英語の音声を文字起こしし、多言語Whisperモデルに組み込まれた翻訳機能を使って直接英語テキストに翻訳します。',
          },
          {
            q: 'whisper.cppは現在誰が保守していますか?',
            a: 'プロジェクトは、元の作者Georgi Gerganovが立ち上げたGitHub組織ggml-orgの下で保守され、数百人のコミュニティ開発者が貢献しています。リリースも活発で、v1.9.5は2026年10月6日に公開され、リポジトリの直近の更新は2026年10月30日です。',
          },
          {
            q: 'whisper.cppは録音内の異なる話者を分離できますか?',
            a: 'ネイティブにはできません。whisper.cppは発話をテキストに文字起こししますが、それ自体で話者分離を行うことはありません。「誰が何を言ったか」が必要な場合は、専用の話者分離ツールと組み合わせるか、Whisperの文字起こしに話者分離を追加するWhisperXを使用してください。',
          },
          {
            q: 'whisper.cppはダウンロードしても安全ですか？',
            a: '公式リポジトリ[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)とその[リリースページ](https://github.com/ggml-org/whisper.cpp/releases)からのみ入手し、再パッケージされたインストーラーや非公式ミラーは避けてください。コードはオープンソース（MIT）なので、自分で読んでビルドでき、ダウンロードしたファイルを実行する前にソースや公開されているチェックサムを確認することをおすすめします。当サイトはコードの監査を行っておらず、どのダウンロードも安全を保証することはできません。',
          },
          {
            q: 'whisper.cpp v1.9.4とv1.9.5では何が変わりましたか？',
            a: '公式のリリースノートによると、v1.9.4（2026年9月11日）では、言語の自動検出の前にエンコーダー開始コールバックを呼び出すようになり、呼び出し間でデコーダー0のシードを再設定し、サーバーが検出レスポンスで言語を返すようになり、CIリリースジョブにWindows on ARMが追加され、ggmlが0.23.0に同期されました。v1.9.5（2026年10月6日）はggml v0.26.0に更新するメンテナンスリリースとされ、変更履歴にはオプションのANEForgeエンコーダーバックエンド（Apple Neural Engine）、CLIのエラーコード修正、言語検出時のアボートコールバック、VADモデル読み込み時の検証、より小さなVulkan Dockerイメージも記載されています。アップグレード前にリリースノート全文をお読みください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'whisper.cppは、目指したことを見事に実現しています。C/C++をコンパイルできるあらゆる端末に、Python、CUDA、重いランタイムなしでOpenAIのWhisper音声認識モデルを持ち込めるのです。x86・ARMのCPUからApple Silicon、VulkanやCUDA対応GPUまで広がるこの移植性は、ローカルでオフラインの文字起こしでは無料の類似品が見当たらず、MITライセンスは商用利用も認めています（法的助言ではありません）。無料で活発に保守され、元のWhisperと同じモデルの重みを使うため、同じモデルサイズでの精度はOpenAIの公表内容に準じます。最大のスループットを求めるPython中心・NVIDIA GPU限定のパイプラインでは最有力とは言えず、そこではfaster-whisperのCTranslate2バックエンドがよく推奨されます。詳細は当サイトの[比較記事](/ja/power-local-llm/local-whisper-stt-comparison)をご覧ください。それ以外の方、つまり組み込みハードウェア、Apple Silicon、クロスプラットフォームアプリを狙う開発者や、Python環境の維持よりネイティブコードのビルドを好む方にとって、whisper.cppはお手持ちの音声で試す価値のある無料の出発点です。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のwhisper.cpp](https://github.com/ggml-org/whisper.cpp) ー 公式リポジトリ:README、インストール手順、ライセンス、リリース履歴。',
          '[whisper.cppのリリース](https://github.com/ggml-org/whisper.cpp/releases) ー バージョン履歴(v1.9.5(2026年10月6日)を含む)。',
          '[whisper.cppのLICENSE](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) ー MITライセンスの本文。',
          '[OpenAI Whisperの発表](https://openai.com/index/whisper/) ー 2022年のWhisperモデルの初回公開。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[whisper.cpp対faster-whisper 2026:ローカルSTTベンチマーク、セットアップ、GPUアクセラレーション](/ja/power-local-llm/local-whisper-stt-comparison) ー whisper.cppとfaster-whisperの選択で迷う読者向けの直接比較。',
          'faster-whisperレビュー ー CTranslate2ベースの代替ツールを同じ深さでレビュー。',
          '[2026年に完全オフラインの音声アシスタントを構築する](/ja/power-local-llm/build-local-voice-assistant-2026) ー whisper.cppをローカルLLMとPiper TTSに接続し、完全な音声パイプラインを構築。',
          'Piper TTSレビュー ー 生成したテキストをオフラインで音声に戻す、ローカルの音声合成版。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/directory) ー あらゆるカテゴリのローカルAIツールを網羅した、より広範なディレクトリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'whisper.cppレビュー(2026):純粋なC/C++によるローカル音声認識',
      description:
        'whisper.cppレビュー:OpenAI WhisperのMITライセンスC/C++移植版によるローカル音声認識。歴史、インストール手順、実際のCLIコマンド、ライセンス、faster-whisperを選ぶべき場面を解説。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/whisper-cpp-review',
      inLanguage: 'ja',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカル・オフライン音声認識ツールを検討する開発者' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: '音声認識' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ja/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'whisper.cppレビュー(2026)', item: 'https://www.promptquorum.com/ja/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-pt.webp',
    title: 'Whisper.cpp: análise — reconhecimento de voz local em C/C++ puro',
    seoTitle: 'Whisper.cpp: análise, licença MIT, instalação e CLI local',
    intro:
      'O whisper.cpp é uma reimplementação em C/C++ do modelo de reconhecimento de fala Whisper, da OpenAI, criada por Georgi Gerganov e hoje mantida na [organização ggml-org no GitHub](https://github.com/ggml-org/whisper.cpp). Ele transcreve fala em texto inteiramente no dispositivo, sem ambiente Python e sem chamadas a uma API na nuvem, e oferece suporte a CPU, Apple Silicon (Metal, Core ML) e GPUs NVIDIA (CUDA), entre outros backends. Esta análise cobre sua história, como instalar e executar, uso real da linha de comando, a licença MIT e o custo (gratuito) e onde ele não é a ferramenta certa, com um link para a nossa comparação com o faster-whisper para quem está decidindo entre os dois.',
    metaDescription:
      'Análise do whisper.cpp: o port em C/C++ do OpenAI Whisper (licença MIT) para voz em texto local. Instalação, comandos CLI, licença e faster-whisper.',
    twitterDescription:
      'Whisper.cpp 2026: o port em C/C++ de Georgi Gerganov para o OpenAI Whisper, reconhecimento de voz local e offline. História, instalação, comandos reais, licença MIT e limites honestos.',
    audience:
      'Desenvolvedores e quem hospeda por conta própria e quer reconhecimento de fala offline, no próprio dispositivo, sem ambiente Python nem API na nuvem: em CPUs x86 e ARM, Apple Silicon ou pipelines com GPU NVIDIA.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp análise',
    targetKeywords: [
      'whisper.cpp análise',
      'whisper.cpp',
      'instalar whisper cpp',
      'configurar whisper cpp',
      'ggerganov whisper',
      'reconhecimento de voz local c++',
      'transcrição whisper offline',
      'licença whisper cpp',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**O whisper.cpp é um port gratuito em C/C++, com licença MIT, do modelo de fala para texto Whisper, da OpenAI, que transcreve no dispositivo sem Python.** Ele oferece suporte a CPU, Apple Metal, Core ML, CUDA e Vulkan. Compare-o com o faster-whisper na nossa [comparação whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      pt: {
        question: 'O que é o whisper.cpp e vale a pena usá-lo para reconhecimento de voz local?',
        answer:
          'O whisper.cpp vale a pena se você quer fala para texto offline, no próprio dispositivo, sem instalar Python nem CUDA, ou se mira uma plataforma como iOS, Android ou WebAssembly, onde uma biblioteca C/C++ é mais fácil de embutir do que uma pilha Python. Ele é gratuito (licença MIT), mantido ativamente e usa os mesmos pesos de modelo do Whisper original da OpenAI, então a precisão para um dado tamanho de modelo acompanha o Whisper original. Escolha o faster-whisper se o seu alvo principal for um servidor com GPU NVIDIA rodando um pipeline Python: o backend CTranslate2 dele é comumente recomendado nesse caso.',
        bullets: [
          'Criado por Georgi Gerganov, publicado pela primeira vez em 2022 como port em C/C++ do OpenAI Whisper; hoje mantido sob a organização ggml-org no GitHub.',
          'Licenciado sob MIT, gratuito, sem plano pago, sem necessidade de conta.',
          'Roda em CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO e mais — não precisa de ambiente Python.',
          'Última versão estável: v1.9.5 (6 de outubro de 2026); a última atividade do repositório foi em 30 de outubro de 2026, segundo as páginas do projeto no GitHub.',
          'Ideal para: dispositivos embarcados, Apple Silicon, e qualquer implantação onde um binário autocontido único é melhor que um ambiente Python.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'História: quem criou o whisper.cpp e por quê', anchor: 'history' },
      { label: 'O que o whisper.cpp realmente faz', anchor: 'what-it-does' },
      { label: 'Instalar e executar o whisper.cpp: passo a passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos de uso reais', anchor: 'usage-examples' },
      { label: 'Licença e custo', anchor: 'license-cost' },
      { label: 'Para que o whisper.cpp não serve', anchor: 'limitations' },
      { label: 'Alternativas ao whisper.cpp', anchor: 'alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O whisper.cpp é um port gratuito em C/C++, com licença MIT, do modelo de reconhecimento de voz Whisper da OpenAI, criado por Georgi Gerganov, que transcreve áudio totalmente no dispositivo via CPU, Apple Metal, NVIDIA CUDA e outros backends, sem Python.',
          },
          {
            type: 'plain-terms',
            text: 'Ele converte áudio falado em texto no seu próprio computador ou dispositivo, em vez de enviá-lo a uma API na nuvem: você o compila a partir do código-fonte (o projeto documenta os passos do CMake), entrega um arquivo de áudio ou um fluxo de microfone ao vivo e recebe uma transcrição, de graça, usando os mesmos modelos Whisper que a OpenAI treinou.',
          },
        ],
        items: [
          'Criado por Georgi Gerganov em 2022; hoje mantido sob a organização ggml-org no GitHub.',
          'Licença MIT — uso, modificação e redistribuição gratuitos, incluindo uso comercial.',
          'Roda em CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm e backends Ascend NPU.',
          'Não exige Python: compila a partir do código C/C++ com CMake; os bindings para Python existem como projetos separados da comunidade.',
          'Suporta transcrição de microfone em tempo real via seu exemplo de streaming, além da transcrição em lote de arquivos.',
          'Última versão estável: v1.9.5, publicada em 6 de outubro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise trata o whisper.cpp como ferramenta independente: história, instalação, comandos reais, licença e limites sem rodeios. Para vê-lo ao lado do faster-whisper em Apple Silicon e GPUs NVIDIA, consulte a [comparação whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: quem criou o whisper.cpp e por quê',
        content: [
          '**A OpenAI lançou seu modelo de reconhecimento de voz Whisper em setembro de 2022**, como um modelo de pesos abertos treinado com uma grande quantidade de áudio multilíngue, distribuído como um pacote Python (`openai-whisper`) que depende do PyTorch e, para bom desempenho, de uma GPU compatível com CUDA.',
          '**Georgi Gerganov portou o modelo para C/C++ puro pouco depois, também em 2022**, no repositório [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp). Gerganov também é o criador da biblioteca de tensores ggml que sustenta a matemática e a quantização do whisper.cpp, e mais tarde ficou conhecido pelo llama.cpp, o port equivalente em C/C++ para executar localmente grandes modelos de linguagem — os dois projetos compartilham a mesma base ggml e o mesmo objetivo de design: rodar em hardware comum um modelo que normalmente exige Python e uma GPU.',
          '**A motivação foi portabilidade e eficiência de recursos, não só velocidade.** A implementação original do Whisper em Python/PyTorch é simples de rodar numa estação de trabalho com uma boa GPU, mas pesada de implantar num app iOS, numa página WebAssembly ou numa placa Linux embarcada sem interpretador Python. O whisper.cpp elimina por completo a dependência de PyTorch e Python, compila como código C/C++ nativo e adiciona quantização para que as variantes menores caibam em algumas centenas de megabytes de RAM.',
          '**O projeto cresceu muito além de um projeto pessoal de um único desenvolvedor.** Hoje tem centenas de colaboradores, é empacotado para o Debian, e oferece suporte oficial para Core ML (Apple Neural Engine), CUDA, Vulkan, OpenVINO e outros backends que não existiam no lançamento original de 2022. Ele continua sendo um *ambiente de execução* do Whisper — não treina nem ajusta seus próprios modelos, e toda transcrição ainda usa os mesmos pesos publicados pela OpenAI para um dado tamanho de modelo (de tiny a large-v3), convertidos para o formato GGML do projeto.',
        ],
        faqs: [
          {
            q: 'Quem criou o whisper.cpp?',
            a: 'Georgi Gerganov criou o whisper.cpp, publicado pela primeira vez em 2022 como port em C/C++ do modelo Whisper da OpenAI. Gerganov também criou a biblioteca de tensores ggml sobre a qual ele roda, e mais tarde o llama.cpp, o port equivalente para executar localmente grandes modelos de linguagem.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o whisper.cpp realmente faz',
        content: [
          'O whisper.cpp recebe uma entrada de áudio — um arquivo (WAV, e outros formatos via decodificação FFmpeg opcional) ou um stream de microfone ao vivo — e produz uma transcrição em texto, opcionalmente com carimbos de tempo por segmento e tradução para o inglês. Para isso, ele carrega um modelo Whisper (convertido para o formato de pesos GGML do projeto) e executa a inferência via a biblioteca de tensores ggml, totalmente na máquina local.',
        ],
        items: [
          '**Transcrição em lote.** Apontar o binário `whisper-cli` para um arquivo de áudio e obter uma transcrição, com opções de saída em texto simples, legendas SRT/VTT, JSON ou CSV.',
          '**Streaming em tempo real.** O exemplo `whisper-stream` captura áudio de microfone ao vivo e o transcreve continuamente, útil para assistentes de voz ou legendagem ao vivo.',
          '**Transcrição e tradução multilíngues.** Os modelos Whisper subjacentes foram treinados em muitos idiomas; o whisper.cpp pode transcrever no idioma de origem ou traduzir diretamente para o inglês, dependendo das flags passadas.',
          '**Inferência acelerada por hardware.** No Apple Silicon, o whisper.cpp pode exportar modelos para o formato Core ML para usar o Apple Neural Engine; em hardware NVIDIA, usa CUDA; em outras GPUs, pode usar Vulkan ou OpenVINO. Em máquinas apenas com CPU, usa instruções vetoriais AVX2 (x86) ou NEON (ARM).',
          '**Quantização.** Os modelos podem ser quantizados (por exemplo, para formatos GGML de 4 ou 5 bits) para trocar um pouco de precisão por um uso de memória significativamente menor e inferência mais rápida — a mesma técnica que o llama.cpp usa para LLMs.',
        ],
        note: 'O whisper.cpp é um ambiente de execução, não um modelo. A precisão de transcrição para um dado tamanho de modelo (tiny, base, small, medium, large-v3) é definida pelo treinamento original da OpenAI, não pelo whisper.cpp — a função do projeto é executar esse modelo com eficiência, sem Python ou uma pilha de GPU pesada.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar e executar o whisper.cpp: passo a passo',
        content: 'Este guia compila o whisper.cpp a partir do código-fonte e executa uma primeira transcrição, usando os comandos documentados no próprio README do projeto.',
        numberedItems: [
          {
            title: 'Clonar o repositório.',
            whyItMatters: 'Execute `git clone https://github.com/ggml-org/whisper.cpp.git` seguido de `cd whisper.cpp`. Isso baixa a árvore completa do código-fonte em C/C++, incluindo os arquivos de build do CMake e o script de download de modelos.',
          },
          {
            title: 'Baixar um modelo.',
            whyItMatters: 'Execute `sh ./models/download-ggml-model.sh base.en` para obter o modelo base em inglês no formato GGML. Troque `base.en` por `tiny`, `small`, `medium` ou `large-v3` conforme o equilíbrio entre precisão e velocidade desejado, ou remova o sufixo `.en` para um modelo multilíngue.',
          },
          {
            title: 'Compilar o projeto.',
            whyItMatters: 'Execute `cmake -B build` seguido de `cmake --build build -j --config Release`. Isso compila os binários de CLI (`whisper-cli`, `whisper-stream` e outros) no diretório `build/bin/`. Nenhuma instalação de Python é necessária para esta etapa.',
          },
          {
            title: 'Transcrever um arquivo de exemplo.',
            whyItMatters: 'Execute `./build/bin/whisper-cli -f samples/jfk.wav` usando o arquivo de áudio de exemplo incluído no repositório. Isso confirma que a build funciona de ponta a ponta e imprime uma transcrição no terminal.',
          },
          {
            title: 'Transcrever seu próprio áudio.',
            whyItMatters: 'Substitua o caminho de exemplo pelo seu próprio arquivo WAV: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. Adicione `-osrt` para também escrever um arquivo de legendas `.srt`, ou `-oj` para saída em JSON.',
          },
          {
            title: '(Opcional) Ativar aceleração por GPU.',
            whyItMatters: 'No Apple Silicon, a aceleração Metal é usada automaticamente ao compilar com as flags padrão do CMake no macOS. Em uma máquina NVIDIA, adicione `-DGGML_CUDA=ON` à etapa `cmake -B build` (requer o toolkit CUDA instalado) para compilar com suporte a CUDA.',
          },
          {
            title: '(Opcional) Experimentar transcrição em tempo real.',
            whyItMatters: 'Compile o exemplo de streaming e execute `./build/bin/whisper-stream -m models/ggml-base.en.bin` para transcrever continuamente o áudio do microfone ao vivo em vez de um arquivo fixo.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos de uso reais',
        content: [
          'Além do guia básico de instalação acima, estas são invocações comuns do binário `whisper-cli` em situações reais.',
        ],
        codeBlock: `# Transcrever um arquivo de áudio para texto simples (saída padrão)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# Transcrever e gerar legendas SRT, usando o modelo maior e mais preciso
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# Traduzir diretamente áudio não inglês para texto em inglês
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# Escolher uma GPU específica (máquinas com múltiplas GPUs)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# Transcrição em tempo real a partir do microfone padrão
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'As flags mostradas aqui (`-m` caminho do modelo, `-f` arquivo de entrada, `-osrt` saída SRT, `-tr` traduzir para inglês, `-g`/`--gpu-device` seleção de GPU, `-t` número de threads) estão documentadas na saída `--help` e no README do projeto. Execute sempre `./build/bin/whisper-cli --help` para confirmar o conjunto atual de flags da versão instalada, já que as opções de CLI podem mudar entre versões.',
        items: [
          '**pywhispercpp** fornece bindings Python para o whisper.cpp, para equipes que querem a aceleração Metal/CUDA mas preferem chamar a partir de código Python em vez de invocar o binário CLI por arquivo.',
          '**O whisper.cpp também traz um pequeno exemplo de servidor HTTP local** (`whisper-server`) para equipes que querem enviar áudio via HTTP em vez de invocar a CLI por arquivo — útil para integrar o whisper.cpp a um serviço existente sem dependência de Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e custo',
        content: [
          '**O whisper.cpp é licenciado sob a licença MIT** — o arquivo de licença no [repositório oficial](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) permite uso, modificação e redistribuição gratuitos, inclusive em produtos fechados e comerciais, sem royalties e sem exigência de atribuição além de manter o aviso de licença.',
          '**Não existe plano pago, assinatura ou taxa de licença para o whisper.cpp em si.** Os únicos custos reais são o hardware em que você o executa (ou uma VM na nuvem, se optar por hospedá-lo) e, se você construir um produto sobre ele, seu próprio tempo de desenvolvimento. Não há medição de uso, chave de API nem dependência de fornecedor.',
          '**Os pesos do modelo Whisper subjacente também são licenciados separadamente pela OpenAI sob MIT**, então tanto o ambiente de execução (whisper.cpp) quanto os pesos do modelo que ele carrega têm licenças permissivas para uso comercial.',
        ],
        faqs: [
          {
            q: 'O whisper.cpp é gratuito para uso comercial?',
            a: 'Sim. O whisper.cpp é licenciado sob MIT, e os pesos do modelo Whisper que ele usa também são publicados pela OpenAI sob licença MIT. Ambos permitem uso, modificação e redistribuição comercial sem custo.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o whisper.cpp não serve',
        content: [
          'O whisper.cpp é um ambiente de execução de transcrição, não um produto completo de IA conversacional ou diarização de falantes. É a ferramenta errada nas seguintes situações:',
        ],
        items: [
          '**Diarização de falantes ("quem disse o quê").** O whisper.cpp transcreve o que foi dito, mas não separa nem rotula nativamente diferentes falantes em uma gravação com várias pessoas. A diarização exige um modelo ou pipeline separado (por exemplo, combinar a transcrição do whisper.cpp com uma ferramenta de diarização) sobreposto.',
          '**Latência de streaming abaixo de 100 milissegundos em grande escala.** O exemplo embutido `whisper-stream` funciona bem para um único microfone ao vivo em uma máquina, mas o whisper.cpp não é um serviço de reconhecimento de voz em tempo real construído especificamente e escalado horizontalmente, como seria uma API de voz em tempo real dedicada para muitos usuários simultâneos.',
          '**Nenhuma configuração pronta para usuários não técnicos.** O whisper.cpp é uma ferramenta de linha de comando que a maioria das pessoas compila a partir do código-fonte: o README do projeto documenta uma compilação com CMake, e no repositório oficial não encontramos instalador gráfico nem página em loja de apps voltados a não desenvolvedores. Quem quer um app de transcrição de clicar e usar deve procurar um aplicativo com interface gráfica construído sobre o whisper.cpp, ou um serviço de transcrição hospedado.',
          '**Extrair o último pingo de desempenho de uma GPU NVIDIA num pipeline Python.** Nos maiores modelos em hardware NVIDIA, costuma-se relatar que o backend CTranslate2 do faster-whisper é mais rápido e usa menos VRAM do que o caminho CUDA do whisper.cpp (a nossa [comparação](/pt/power-local-llm/local-whisper-stt-comparison) trata do assunto; não fizemos essas medições nós mesmos). Se a sua implantação já é um serviço Python numa GPU NVIDIA, o faster-whisper geralmente se encaixa melhor.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao whisper.cpp',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor para', 'Licença'],
        rows: [
          {
            'Ferramenta': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'Melhor para': 'Pipelines Python em GPUs NVIDIA — backend CTranslate2, ~4x o throughput do Whisper original',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[WhisperX](https://github.com/m-bain/whisperX)',
            'Melhor para': 'Quando você precisa de carimbos de tempo por palavra e diarização além das transcrições do Whisper',
            'Licença': 'BSD-2-Clause',
          },
          {
            'Ferramenta': '[API OpenAI Whisper](https://platform.openai.com/docs/guides/speech-to-text)',
            'Melhor para': 'Equipes que preferem uma API gerenciada na nuvem à autohospedagem, em troca de tarifas por uso',
            'Licença': 'Proprietária (API paga)',
          },
          {
            'Ferramenta': '[Vosk](https://alphacephei.com/vosk/)',
            'Melhor para': 'Dispositivos offline com recursos muito limitados, onde uma pegada pequena importa mais que a precisão do Whisper',
            'Licença': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o whisper.cpp?',
            a: 'O whisper.cpp é uma reimplementação gratuita em C/C++, com licença MIT, do modelo de reconhecimento de voz Whisper da OpenAI, criada por Georgi Gerganov, que executa a transcrição localmente sem ambiente Python.',
          },
          {
            q: 'O whisper.cpp é gratuito?',
            a: 'Sim. O whisper.cpp é licenciado sob MIT, sem plano pago, assinatura ou taxa de uso. Os pesos do modelo Whisper que ele usa também são licenciados pela OpenAI sob MIT.',
          },
          {
            q: 'Preciso de uma GPU para rodar o whisper.cpp?',
            a: 'Não. O whisper.cpp roda em CPU com otimizações AVX2 (x86) ou NEON (ARM), e os modelos menores (tiny, base) são a escolha usual para hardware só com CPU; a velocidade em tempo real depende do seu processador. Uma GPU (Apple Metal, NVIDIA CUDA ou Vulkan) acelera modelos maiores como o large-v3, mas não é obrigatória.',
          },
          {
            q: 'O whisper.cpp suporta transcrição em tempo real?',
            a: 'Sim, via o exemplo `whisper-stream`, que captura áudio de microfone ao vivo e o transcreve continuamente. A latência depende do tamanho do modelo e do hardware — modelos menores em uma CPU ou GPU rápida chegam mais perto do tempo real.',
          },
          {
            q: 'Qual é a diferença entre whisper.cpp e faster-whisper?',
            a: 'O whisper.cpp é uma implementação C/C++ pura, sem dependência de Python, feita para portabilidade entre CPU, Apple Metal, CUDA e dispositivos embarcados. O faster-whisper é uma biblioteca Python baseada em CTranslate2, otimizada principalmente para o desempenho de GPUs NVIDIA dentro de pipelines Python. Veja a nossa [comparação](/pt/power-local-llm/local-whisper-stt-comparison) para mais detalhes.',
          },
          {
            q: 'O whisper.cpp roda em dispositivos ARM?',
            a: 'O whisper.cpp inclui otimizações ARM NEON e não exige instalar Python nem CUDA, então CPUs ARM são um alvo. A velocidade depende do dispositivo e do tamanho do modelo, e não a medimos em placas específicas; teste primeiro os modelos tiny e base.',
          },
          {
            q: 'O whisper.cpp traduz áudio para inglês?',
            a: 'Sim. Passar a flag `-tr` (traduzir) para o `whisper-cli` transcreve fala não inglesa e a traduz diretamente para texto em inglês, usando a capacidade de tradução embutida nos modelos Whisper multilíngues.',
          },
          {
            q: 'Quem mantém o whisper.cpp hoje?',
            a: 'O projeto é mantido na organização ggml-org no GitHub, fundada pelo criador original, Georgi Gerganov, com contribuições de centenas de desenvolvedores da comunidade. Ele continua sendo lançado ativamente: a v1.9.5 foi publicada em 6 de outubro de 2026 e a última atividade do repositório foi em 30 de outubro de 2026.',
          },
          {
            q: 'O whisper.cpp separa diferentes falantes em uma gravação?',
            a: 'Não nativamente. O whisper.cpp transcreve voz em texto, mas não realiza diarização de falantes por conta própria. Para "quem disse o quê", combine-o com uma ferramenta de diarização dedicada ou use o WhisperX, que adiciona diarização sobre as transcrições do Whisper.',
          },
          {
            q: 'O whisper.cpp é seguro para baixar?',
            a: 'Baixe-o apenas do repositório oficial [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) e da sua [página de releases](https://github.com/ggml-org/whisper.cpp/releases); evite instaladores reempacotados e espelhos não oficiais. O código é aberto (MIT), então você pode lê-lo e compilá-lo por conta própria, e deve conferir o código-fonte ou os checksums publicados antes de executar arquivos baixados. Não auditamos o código, e nenhum download pode ser garantido como seguro.',
          },
          {
            q: 'O que mudou no whisper.cpp v1.9.4 e v1.9.5?',
            a: 'Segundo as notas de versão oficiais, a v1.9.4 (11 de setembro de 2026) chama o callback de início do codificador antes da detecção automática de idioma, reinicializa a semente do decodificador 0 entre chamadas, faz o servidor retornar o idioma na resposta de detecção, adiciona o Windows on ARM ao job de release de CI e sincroniza o ggml para 0.23.0. A v1.9.5 (6 de outubro de 2026) é descrita como uma versão de manutenção que atualiza para o ggml v0.26.0; o changelog também lista um backend de codificador ANEForge opcional (Apple Neural Engine), uma correção do código de erro da CLI, um callback de aborto na detecção de idioma, validação no carregamento de modelos VAD e uma imagem Docker do Vulkan menor. Leia as notas completas antes de atualizar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O whisper.cpp cumpre exatamente o que se propôs: levar o modelo de fala para texto Whisper, da OpenAI, a qualquer dispositivo capaz de compilar C/C++, sem exigir Python, CUDA ou um ambiente pesado. Essa portabilidade, de CPUs x86 e ARM a Apple Silicon e GPUs compatíveis com Vulkan ou CUDA, não tem equivalente gratuito próximo para transcrição local offline, e a licença MIT permite uso comercial (não é aconselhamento jurídico). Ele é gratuito, mantido ativamente e usa os mesmos pesos de modelo do Whisper original, então a precisão para um dado tamanho de modelo acompanha o que a OpenAI publicou. Não é a opção mais forte num pipeline só de Python e GPU NVIDIA que busca o throughput máximo: o backend CTranslate2 do faster-whisper costuma ser recomendado ali, como discute a nossa [comparação](/pt/power-local-llm/local-whisper-stt-comparison). Para todos os outros, como desenvolvedores com hardware embarcado, Apple Silicon, apps multiplataforma ou quem prefere compilar código nativo a manter um ambiente Python, o whisper.cpp é um ponto de partida gratuito que vale testar com o seu próprio áudio.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[whisper.cpp no GitHub](https://github.com/ggml-org/whisper.cpp) — repositório oficial: README, instruções de instalação, licença e histórico de versões.',
          '[Releases do whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — histórico de versões, incluindo a v1.9.5 (6 de outubro de 2026).',
          '[LICENÇA do whisper.cpp](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — texto da licença MIT.',
          '[Anúncio do OpenAI Whisper](https://openai.com/index/whisper/) — publicação original do modelo Whisper em 2022.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Whisper.cpp vs faster-whisper 2026: benchmarks de STT local, instalação e aceleração por GPU](/pt/power-local-llm/local-whisper-stt-comparison) — o comparativo direto para quem precisa escolher entre whisper.cpp e faster-whisper.',
          'Análise do faster-whisper — a alternativa baseada em CTranslate2, analisada com o mesmo nível de detalhe.',
          '[Construir um assistente de voz totalmente offline em 2026](/pt/power-local-llm/build-local-voice-assistant-2026) — conectar o whisper.cpp a um LLM local e ao Piper TTS em um pipeline de voz completo.',
          'Análise do Piper TTS — o equivalente local de síntese de voz, para transformar texto gerado de volta em voz offline.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em todas as categorias.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Whisper.cpp: análise (2026) — reconhecimento de voz local em C/C++ puro',
      description:
        'Análise do whisper.cpp: o port em C/C++ com licença MIT do OpenAI Whisper para reconhecimento de voz local. História, instalação, comandos reais, licença e quando usar o faster-whisper.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/whisper-cpp-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando ferramentas de reconhecimento de voz local e offline' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'Reconhecimento de voz' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/pt/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Whisper.cpp: análise (2026)', item: 'https://www.promptquorum.com/pt/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-ar.webp',
    title: 'مراجعة whisper.cpp: تحويل الكلام إلى نص محليًا بلغة C/C++ خالصة',
    seoTitle: 'مراجعة whisper.cpp: تحويل كلام محلي بـ C/C++',
    intro:
      'whisper.cpp هو إعادة تنفيذ بلغة C/C++ لنموذج التعرف على الكلام Whisper من OpenAI، أنشأه Georgi Gerganov ويُصان اليوم ضمن [منظمة ggml-org على GitHub](https://github.com/ggml-org/whisper.cpp). يحوّل الكلام إلى نص بالكامل على الجهاز، دون بيئة Python ودون استدعاء أي واجهة سحابية، ويدعم المعالج المركزي وApple Silicon (Metal وCore ML) وبطاقات NVIDIA الرسومية (CUDA) وغيرها من الواجهات الخلفية. تغطي هذه المراجعة تاريخه وطريقة تثبيته وتشغيله وأوامر سطر أوامر فعلية ورخصة MIT وتكلفته (مجاني) والحالات التي لا يكون فيها الأداة المناسبة، مع رابط إلى مقارنتنا مع faster-whisper لمن يتردد بين الاثنين.',
    metaDescription:
      'مراجعة whisper.cpp: نسخة C/C++ من OpenAI Whisper برخصة MIT لتحويل الكلام إلى نص محليًا. التثبيت، أوامر CLI، الرخصة، ومقارنته بـ faster-whisper.',
    twitterDescription:
      'مراجعة whisper.cpp 2026: نسخة Georgi Gerganov بلغة C/C++ من OpenAI Whisper لتحويل الكلام إلى نص محليًا وبلا اتصال. التاريخ، الإعداد، أوامر حقيقية، رخصة MIT، وحدود صريحة.',
    audience:
      'مطورون ومستضيفون ذاتيون يريدون تحويل الكلام إلى نص دون اتصال وعلى الجهاز نفسه، دون بيئة Python أو واجهة سحابية — على معالجات x86 وARM أو Apple Silicon أو مسارات بطاقات NVIDIA الرسومية.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة whisper.cpp',
    targetKeywords: [
      'مراجعة whisper.cpp',
      'whisper.cpp',
      'تثبيت whisper cpp',
      'إعداد whisper cpp',
      'ggerganov whisper',
      'تحويل كلام محلي c++',
      'تفريغ صوتي whisper بلا اتصال',
      'رخصة whisper cpp',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp نسخة C/C++ مجانية بترخيص MIT من نموذج Whisper لتحويل الكلام إلى نص من OpenAI، تعمل على الجهاز دون Python.** تدعم المعالج المركزي وApple Metal وCore ML وCUDA وVulkan. قارنه بـ faster-whisper في [مقارنة whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison).',
    quickAnswerTop: {
      ar: {
        question: 'ما هو whisper.cpp وهل يستحق الاستخدام لتحويل الكلام إلى نص محليًا؟',
        answer:
          'يستحق whisper.cpp الاستخدام إذا أردت تحويل الكلام إلى نص دون اتصال وعلى الجهاز نفسه دون تثبيت Python أو CUDA، أو إذا كنت تستهدف منصة مثل iOS أو Android أو WebAssembly حيث يسهل تضمين مكتبة C/C++ أكثر من حزمة Python. وهو مجاني (ترخيص MIT) وتتم صيانته بنشاط ويستخدم أوزان نموذج Whisper نفسها في إصدار OpenAI الأصلي، فتتبع الدقة لحجم نموذج معيّن دقة Whisper الأصلي. اختر faster-whisper بدلًا منه إذا كان هدفك الأساسي خادمًا ببطاقة NVIDIA ومسار عمل بلغة Python — إذ يُوصى بالواجهة الخلفية CTranslate2 فيه عادةً.',
        bullets: [
          'طوّره Georgi Gerganov، ونُشر لأول مرة عام 2022 كنسخة C/C++ من OpenAI Whisper؛ ويُصان اليوم ضمن منظمة ggml-org على GitHub.',
          'برخصة MIT، مجاني، لا توجد فئة مدفوعة، لا حاجة لحساب.',
          'يعمل على المعالج المركزي، وApple Metal/Core ML، وNVIDIA CUDA، وVulkan، وOpenVINO والمزيد — لا حاجة لبيئة Python.',
          'أحدث إصدار مستقر: v1.9.5 (6 أكتوبر 2026)؛ وكان آخر نشاط في المستودع بتاريخ 30 أكتوبر 2026، وفقًا لصفحات المشروع على GitHub.',
          'الأنسب لـ: الأجهزة المدمجة، وApple Silicon، وأي عملية نشر يكون فيها ملف تنفيذي واحد مستقل أفضل من بيئة Python.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: من طوّر whisper.cpp ولماذا', anchor: 'history' },
      { label: 'ما الذي يفعله whisper.cpp فعليًا', anchor: 'what-it-does' },
      { label: 'تثبيت وتشغيل whisper.cpp: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الرخصة والتكلفة', anchor: 'license-cost' },
      { label: 'ما لا يصلح له whisper.cpp', anchor: 'limitations' },
      { label: 'بدائل whisper.cpp', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp هو نسخة C/C++ مجانية برخصة MIT من نموذج تحويل الكلام إلى نص Whisper من OpenAI، طوّرها Georgi Gerganov، وتقوم بتفريغ الصوت بالكامل على الجهاز عبر المعالج المركزي وApple Metal وNVIDIA CUDA وخلفيات أخرى، دون Python.',
          },
          {
            type: 'plain-terms',
            text: 'يحوّل الكلام المنطوق إلى نص على حاسوبك أو جهازك بدلًا من إرساله إلى واجهة سحابية — تبنيه من الشيفرة المصدرية (يوثّق المشروع خطوات CMake)، وتمرّر له ملف صوت أو بثًّا حيًّا من الميكروفون، فيعيد لك نصًا مكتوبًا مجانًا باستخدام نماذج Whisper نفسها التي دربتها OpenAI.',
          },
        ],
        items: [
          'طوّره Georgi Gerganov عام 2022؛ ويُصان اليوم ضمن منظمة ggml-org على GitHub.',
          'رخصة MIT — استخدام وتعديل وإعادة توزيع مجانية، بما في ذلك الاستخدام التجاري.',
          'يعمل على المعالج المركزي، وApple Metal/Core ML، وNVIDIA CUDA، وVulkan، وOpenVINO، وAMD ROCm، وخلفيات Ascend NPU.',
          'لا يتطلب بيئة Python — يُبنى من شيفرة C/C++ المصدرية باستخدام CMake؛ وتوجد روابط Python كمشاريع مجتمعية منفصلة.',
          'يدعم تفريغ الميكروفون في الوقت الفعلي عبر مثال البث الخاص به، إضافةً إلى تفريغ الملفات دفعةً واحدة.',
          'أحدث إصدار مستقر: v1.9.5، نُشر في 6 أكتوبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تركز هذه المراجعة على whisper.cpp أداةً مستقلة: تاريخه وتثبيته وأوامره الفعلية ورخصته وحدوده بصراحة. لرؤية faster-whisper جنبًا إلى جنب على Apple Silicon وبطاقات NVIDIA، راجع [مقارنة whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison).',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: من طوّر whisper.cpp ولماذا',
        content: [
          '**أطلقت OpenAI نموذج تحويل الكلام إلى نص Whisper في سبتمبر 2022** كنموذج مفتوح الأوزان دُرِّب على كمية كبيرة من البيانات الصوتية متعددة اللغات، ووُزِّع كحزمة Python (`openai-whisper`) تعتمد على PyTorch، وتحتاج للأداء الجيد إلى معالج رسومي متوافق مع CUDA.',
          '**قام Georgi Gerganov بنقل النموذج إلى لغة C/C++ خالصة بعد ذلك بوقت قصير، في العام نفسه 2022**، ضمن مستودع [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp). كما أن Gerganov هو مبتكر مكتبة الموترات ggml التي تعتمد عليها عمليات whisper.cpp الحسابية وعمليات الضغط الكمّي، وأصبح لاحقًا معروفًا بمشروع llama.cpp، وهو النسخة المكافئة بلغة C/C++ لتشغيل نماذج اللغة الكبيرة محليًا — ويتشارك المشروعان نفس أساس ggml ونفس هدف التصميم: تشغيل نموذج يحتاج عادةً إلى Python ومعالج رسومي على أجهزة عادية.',
          '**كان الدافع هو قابلية النقل وكفاءة الموارد، لا السرعة وحدها.** يسهل تشغيل التنفيذ الأصلي لـ Whisper بلغة Python/PyTorch على محطة عمل ببطاقة رسومية جيدة، لكن نشره ثقيل داخل تطبيق iOS أو صفحة WebAssembly أو لوحة Linux مدمجة بلا مفسّر Python. يزيل whisper.cpp الاعتماد على PyTorch وPython تمامًا، ويُبنى بوصفه شيفرة C/C++ أصلية، ويضيف دعم التكميم لتتسع النسخ الأصغر من النموذج في بضع مئات من الميغابايت من الذاكرة.',
          '**تجاوز المشروع كثيرًا كونه مشروعًا جانبيًا من مطور واحد.** يضم الآن مئات المساهمين، ويُعبَّأ لتوزيعة Debian، ويقدّم دعمًا رسميًا لـ Core ML (محرك Apple العصبي)، وCUDA، وVulkan، وOpenVINO وخلفيات أخرى لم تكن موجودة في الإصدار الأصلي لعام 2022. ويظل مع ذلك *بيئة تشغيل* لنموذج Whisper — فهو لا يدرّب أو يضبط نماذجه الخاصة، وكل عملية تفريغ صوتي لا تزال تستخدم نفس الأوزان التي نشرتها OpenAI لحجم نموذج معين (من tiny إلى large-v3)، محوَّلة إلى صيغة GGML الخاصة بالمشروع.',
        ],
        faqs: [
          {
            q: 'من طوّر whisper.cpp؟',
            a: 'طوّر Georgi Gerganov برنامج whisper.cpp، ونشره لأول مرة عام 2022 كنسخة C/C++ من نموذج Whisper من OpenAI. كما ابتكر Gerganov مكتبة الموترات ggml التي يعمل عليها، ثم طوّر لاحقًا llama.cpp، وهو النسخة المكافئة لتشغيل نماذج اللغة الكبيرة محليًا.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله whisper.cpp فعليًا',
        content: [
          'يستقبل whisper.cpp إدخالًا صوتيًا — ملفًا (WAV، وصيغًا أخرى عبر فك ترميز FFmpeg الاختياري) أو بثًا مباشرًا من الميكروفون — وينتج تفريغًا نصيًا، مع إمكانية إضافة طوابع زمنية لكل مقطع وترجمة إلى الإنجليزية. ويقوم بذلك عبر تحميل نموذج Whisper (محوَّل إلى صيغة أوزان GGML الخاصة بالمشروع) وتشغيل الاستدلال عبر مكتبة الموترات ggml، بالكامل على الجهاز المحلي.',
        ],
        items: [
          '**التفريغ الصوتي دفعةً واحدة.** توجيه الملف التنفيذي `whisper-cli` إلى ملف صوتي والحصول على تفريغ نصي، مع خيارات إخراج كنص عادي أو ترجمات SRT/VTT أو JSON أو CSV.',
          '**البث المباشر في الوقت الفعلي.** يلتقط مثال `whisper-stream` صوت الميكروفون المباشر ويفرّغه باستمرار، وهو مفيد للمساعدات الصوتية أو الترجمة الحية.',
          '**التفريغ والترجمة متعددة اللغات.** دُرِّبت نماذج Whisper الأساسية على العديد من اللغات؛ ويمكن لـ whisper.cpp التفريغ باللغة الأصلية أو الترجمة مباشرةً إلى الإنجليزية، حسب الخيارات الممرَّرة.',
          '**استدلال مُسرَّع بالعتاد.** على أجهزة Apple Silicon، يمكن لـ whisper.cpp تصدير النماذج بصيغة Core ML لاستخدام محرك Apple العصبي؛ وعلى عتاد NVIDIA يستخدم CUDA؛ وعلى معالجات رسومية أخرى يمكنه استخدام Vulkan أو OpenVINO. وعلى الأجهزة المعتمدة على المعالج المركزي فقط، يستخدم تعليمات المتجهات AVX2 (x86) أو NEON (ARM).',
          '**الضغط الكمّي.** يمكن ضغط النماذج كميًا (مثلًا إلى صيغ GGML بـ 4 أو 5 بت) لمقايضة قدر بسيط من الدقة مقابل استهلاك ذاكرة أقل بكثير واستدلال أسرع — وهي نفس التقنية التي يستخدمها llama.cpp لنماذج اللغة الكبيرة.',
        ],
        note: 'whisper.cpp هو بيئة تشغيل، وليس نموذجًا. تُحدَّد دقة التفريغ الصوتي لحجم نموذج معين (tiny، base، small، medium، large-v3) بواسطة تدريب OpenAI الأصلي، وليس بواسطة whisper.cpp — ومهمة المشروع هي تشغيل ذلك النموذج بكفاءة، دون Python أو حزمة معالج رسومي ثقيلة.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تثبيت وتشغيل whisper.cpp: خطوة بخطوة',
        content: 'يبني هذا الدليل whisper.cpp من الشيفرة المصدرية ويشغّل أول عملية تفريغ صوتي، باستخدام الأوامر الموثّقة في ملف README الخاص بالمشروع.',
        numberedItems: [
          {
            title: 'استنساخ المستودع.',
            whyItMatters: 'نفّذ `git clone https://github.com/ggml-org/whisper.cpp.git` ثم `cd whisper.cpp`. يؤدي هذا إلى تنزيل شجرة الشيفرة المصدرية الكاملة بلغة C/C++، بما في ذلك ملفات بناء CMake وسكربت تنزيل النماذج.',
          },
          {
            title: 'تنزيل نموذج.',
            whyItMatters: 'نفّذ `sh ./models/download-ggml-model.sh base.en` لجلب نموذج base الإنجليزي بصيغة GGML. استبدل `base.en` بـ `tiny` أو `small` أو `medium` أو `large-v3` حسب التوازن المطلوب بين الدقة والسرعة، أو احذف اللاحقة `.en` للحصول على نموذج متعدد اللغات.',
          },
          {
            title: 'بناء المشروع.',
            whyItMatters: 'نفّذ `cmake -B build` ثم `cmake --build build -j --config Release`. يؤدي هذا إلى تجميع ملفات CLI التنفيذية (`whisper-cli` و`whisper-stream` وغيرها) في مجلد `build/bin/`. لا يتطلب هذا الخطوة تثبيت Python.',
          },
          {
            title: 'تفريغ ملف عيّنة.',
            whyItMatters: 'نفّذ `./build/bin/whisper-cli -f samples/jfk.wav` باستخدام ملف الصوت العيّني المرفق مع المستودع. يؤكد هذا أن البناء يعمل من البداية إلى النهاية، ويطبع تفريغًا نصيًا في الطرفية.',
          },
          {
            title: 'تفريغ الصوت الخاص بك.',
            whyItMatters: 'استبدل مسار العيّنة بملف WAV الخاص بك: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. أضف `-osrt` لكتابة ملف ترجمة `.srt` أيضًا، أو `-oj` للإخراج بصيغة JSON.',
          },
          {
            title: '(اختياري) تفعيل تسريع المعالج الرسومي.',
            whyItMatters: 'على أجهزة Apple Silicon، يُستخدم تسريع Metal تلقائيًا عند البناء بخيارات CMake الافتراضية على macOS. على جهاز NVIDIA، أضف `-DGGML_CUDA=ON` إلى خطوة `cmake -B build` (يتطلب تثبيت أدوات CUDA) للبناء بدعم CUDA.',
          },
          {
            title: '(اختياري) تجربة التفريغ الصوتي في الوقت الفعلي.',
            whyItMatters: 'ابنِ مثال البث ونفّذ `./build/bin/whisper-stream -m models/ggml-base.en.bin` لتفريغ صوت الميكروفون المباشر باستمرار بدلًا من ملف ثابت.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'بالإضافة إلى دليل التثبيت الأساسي أعلاه، هذه استدعاءات شائعة وواقعية للملف التنفيذي `whisper-cli`.',
        ],
        codeBlock: `# تفريغ ملف صوتي إلى نص عادي (الإخراج الافتراضي)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# التفريغ وإخراج ترجمات SRT، باستخدام النموذج الأكبر والأدق
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# ترجمة كلام غير إنجليزي مباشرةً إلى نص إنجليزي
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# اختيار معالج رسومي محدد (أجهزة متعددة المعالجات الرسومية)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# تفريغ صوتي في الوقت الفعلي من الميكروفون الافتراضي
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: 'الخيارات الموضحة هنا (`-m` مسار النموذج، `-f` ملف الإدخال، `-osrt` إخراج SRT، `-tr` الترجمة إلى الإنجليزية، `-g`/`--gpu-device` اختيار المعالج الرسومي، `-t` عدد الخيوط) موثقة في مخرجات `--help` وملف README الخاص بالمشروع. نفّذ دائمًا `./build/bin/whisper-cli --help` للتأكد من مجموعة الخيارات الحالية للإصدار المثبَّت لديك، لأن خيارات سطر الأوامر قد تتغير بين الإصدارات.',
        items: [
          '**pywhispercpp** توفّر ارتباطات Python لـ whisper.cpp، للفرق التي تريد تسريع Metal/CUDA لكنها تفضّل الاستدعاء من شيفرة Python بدلًا من استدعاء الملف التنفيذي لكل ملف.',
          '**كما يقدّم whisper.cpp مثالًا صغيرًا لخادم HTTP محلي** (`whisper-server`) للفرق التي تريد إرسال الصوت عبر HTTP بدلًا من استدعاء سطر الأوامر لكل ملف — وهو مفيد لدمج whisper.cpp في خدمة قائمة دون الاعتماد على Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الرخصة والتكلفة',
        content: [
          '**whisper.cpp مرخّص بموجب رخصة MIT** — يسمح ملف الرخصة في [المستودع الرسمي](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) بالاستخدام والتعديل وإعادة التوزيع مجانًا، بما في ذلك في منتجات مغلقة المصدر وتجارية، دون رسوم امتياز ودون أي التزام بذكر المصدر يتجاوز الاحتفاظ بإشعار الرخصة.',
          '**لا توجد فئة مدفوعة أو اشتراك أو رسوم ترخيص لـ whisper.cpp نفسه.** التكاليف الحقيقية الوحيدة هي العتاد الذي تشغّله عليه (أو جهاز افتراضي سحابي إذا اخترت استضافته)، ووقت التطوير الخاص بك إذا بنيت منتجًا فوقه. لا يوجد قياس للاستخدام، ولا مفتاح API، ولا ارتباط بمورّد معيّن.',
          '**كما أن أوزان نموذج Whisper الأساسي مرخّصة بشكل منفصل من قِبل OpenAI بموجب MIT أيضًا**، لذا فإن كلًّا من بيئة التشغيل (whisper.cpp) وأوزان النموذج التي تحمّلها مرخّصان بشكل متساهل للاستخدام التجاري.',
        ],
        faqs: [
          {
            q: 'هل whisper.cpp مجاني للاستخدام التجاري؟',
            a: 'نعم. whisper.cpp مرخّص بموجب MIT، وأوزان نموذج Whisper التي يستخدمها مرخّصة أيضًا من OpenAI بموجب MIT. وكلاهما يسمح بالاستخدام والتعديل وإعادة التوزيع التجاري دون رسوم.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له whisper.cpp',
        content: [
          'whisper.cpp هو بيئة تشغيل للتفريغ الصوتي، وليس منتجًا كاملًا للذكاء الاصطناعي الحواري أو فصل المتحدثين. وهو الأداة الخاطئة في الحالات التالية:',
        ],
        items: [
          '**فصل المتحدثين ("من قال ماذا").** يقوم whisper.cpp بتفريغ ما قيل، لكنه لا يفصل أو يصنّف بشكل أصلي المتحدثين المختلفين في تسجيل متعدد الأشخاص. يتطلب فصل المتحدثين نموذجًا أو خط معالجة منفصلًا (مثل دمج تفريغ whisper.cpp مع أداة فصل متحدثين) يُضاف فوقه.',
          '**زمن استجابة بث أقل من 100 ميلي ثانية على نطاق واسع.** يعمل مثال `whisper-stream` المدمج بشكل جيد لميكروفون مباشر واحد على جهاز واحد، لكن whisper.cpp ليس خدمة تحويل كلام في الوقت الفعلي مصمَّمة خصيصًا وموسَّعة أفقيًا كما تُصمَّم واجهة برمجة تطبيقات صوتية مخصصة في الوقت الفعلي لعدد كبير من المستخدمين المتزامنين.',
          '**لا إعداد جاهزًا للمستخدمين غير التقنيين.** whisper.cpp أداة سطر أوامر يبنيها معظم الناس من الشيفرة المصدرية — يوثّق ملف README للمشروع بناءً عبر CMake، ولم نجد في المستودع الرسمي مثبّتًا رسوميًا ولا صفحة في متجر تطبيقات موجهة لغير المطورين. ومن يريد تطبيق نسخ بنقرة واحدة فعليه البحث عن تطبيق بواجهة رسومية مبني فوق whisper.cpp أو خدمة نسخ مستضافة.',
          '**استخراج آخر قدر من أداء بطاقة NVIDIA في مسار عمل يعتمد على Python.** في أكبر النماذج على عتاد NVIDIA، يُذكر عادةً أن الواجهة الخلفية CTranslate2 في faster-whisper أسرع وأخف على الذاكرة الرسومية من مسار CUDA في whisper.cpp (تناقش [مقارنتنا](/ar/power-local-llm/local-whisper-stt-comparison) ذلك؛ ولم نجرِ هذه القياسات بأنفسنا) — فإن كان نشرك خدمة Python على بطاقة NVIDIA أصلًا، فغالبًا يناسبك faster-whisper أكثر.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل whisper.cpp',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            'الأنسب لـ': 'خطوط معالجة Python على معالجات NVIDIA GPU — خلفية CTranslate2، أداء أعلى بنحو 4 أضعاف مقارنة بـ Whisper الأصلي',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[WhisperX](https://github.com/m-bain/whisperX)',
            'الأنسب لـ': 'عند الحاجة إلى طوابع زمنية على مستوى الكلمة وفصل متحدثين فوق تفريغات Whisper',
            'الرخصة': 'BSD-2-Clause',
          },
          {
            'الأداة': '[واجهة OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            'الأنسب لـ': 'الفرق التي تفضّل واجهة سحابية مُدارة على الاستضافة الذاتية، مقابل رسوم حسب الاستخدام',
            'الرخصة': 'ملكية خاصة (واجهة مدفوعة)',
          },
          {
            'الأداة': '[Vosk](https://alphacephei.com/vosk/)',
            'الأنسب لـ': 'الأجهزة بلا اتصال ذات الموارد المحدودة جدًا حيث يكون البصمة الصغيرة أهم من دقة Whisper',
            'الرخصة': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو whisper.cpp؟',
            a: 'whisper.cpp هو إعادة تنفيذ مجانية برخصة MIT بلغة C/C++ لنموذج تحويل الكلام إلى نص Whisper من OpenAI، طوّره Georgi Gerganov، وينفّذ التفريغ الصوتي محليًا دون بيئة Python.',
          },
          {
            q: 'هل whisper.cpp مجاني؟',
            a: 'نعم. whisper.cpp مرخّص بموجب MIT، دون فئة مدفوعة أو اشتراك أو رسوم استخدام. أوزان نموذج Whisper التي يستخدمها مرخّصة أيضًا من OpenAI بموجب MIT.',
          },
          {
            q: 'هل أحتاج إلى معالج رسومي لتشغيل whisper.cpp؟',
            a: 'لا. يعمل whisper.cpp على المعالج المركزي بتحسينات AVX2 (في x86) أو NEON (في ARM)، والنماذج الأصغر (tiny وbase) هي الخيار المعتاد للعتاد الذي يعتمد على المعالج وحده؛ وتتوقف السرعة الفورية على معالجك. تُسرّع البطاقة الرسومية (Apple Metal أو NVIDIA CUDA أو Vulkan) النماذج الأكبر مثل large-v3 لكنها ليست إلزامية.',
          },
          {
            q: 'هل يدعم whisper.cpp التفريغ الصوتي في الوقت الفعلي؟',
            a: 'نعم، عبر مثال `whisper-stream`، الذي يلتقط صوت الميكروفون المباشر ويفرّغه باستمرار. يعتمد زمن الاستجابة على حجم النموذج والعتاد — وتقترب النماذج الأصغر على معالج مركزي أو رسومي سريع أكثر من الوقت الفعلي.',
          },
          {
            q: 'ما الفرق بين whisper.cpp وfaster-whisper؟',
            a: 'whisper.cpp تنفيذ C/C++ خالص دون اعتماد على Python، مصمم لقابلية النقل عبر المعالج المركزي وApple Metal وCUDA والأجهزة المدمجة. أما faster-whisper فمكتبة Python مبنية على CTranslate2 ومحسّنة أساسًا لإنتاجية بطاقات NVIDIA داخل مسارات Python. راجع [مقارنتنا](/ar/power-local-llm/local-whisper-stt-comparison) لمزيد من التفاصيل.',
          },
          {
            q: 'هل يعمل whisper.cpp على أجهزة ARM؟',
            a: 'يتضمن whisper.cpp تحسينات ARM NEON ولا يحتاج إلى تثبيت Python أو CUDA، فمعالجات ARM هدف مدعوم. وتتوقف السرعة على الجهاز وحجم النموذج، ولم نقسها على لوحات بعينها؛ لذا جرّب نموذجي tiny وbase أولًا.',
          },
          {
            q: 'هل يترجم whisper.cpp الصوت إلى الإنجليزية؟',
            a: 'نعم. تمرير الخيار `-tr` (ترجمة) إلى `whisper-cli` يقوم بتفريغ الكلام غير الإنجليزي وترجمته مباشرةً إلى نص إنجليزي، باستخدام قدرة الترجمة المدمجة في نماذج Whisper متعددة اللغات.',
          },
          {
            q: 'من يصون whisper.cpp اليوم؟',
            a: 'يُصان المشروع ضمن منظمة ggml-org على GitHub التي أسسها المنشئ الأصلي Georgi Gerganov، بمساهمات مئات المطورين من المجتمع. ولا تزال إصداراته نشطة: نُشر v1.9.5 في 6 أكتوبر 2026، وكان آخر نشاط في المستودع في 30 أكتوبر 2026.',
          },
          {
            q: 'هل يفصل whisper.cpp المتحدثين المختلفين في تسجيل ما؟',
            a: 'ليس بشكل أصلي. يقوم whisper.cpp بتفريغ الكلام إلى نص، لكنه لا يقوم بفصل المتحدثين بنفسه. لمعرفة "من قال ماذا"، ادمجه مع أداة فصل متحدثين مخصصة أو استخدم WhisperX، الذي يضيف فصل المتحدثين فوق تفريغات Whisper.',
          },
          {
            q: 'هل تنزيل whisper.cpp آمن؟',
            a: 'نزّله من المستودع الرسمي [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) و[صفحة إصداراته](https://github.com/ggml-org/whisper.cpp/releases) فقط، وتجنب المثبّتات المعاد تغليفها والمرايا غير الرسمية. الشيفرة مفتوحة المصدر (MIT) فيمكنك قراءتها وبناؤها بنفسك، ويُستحسن التحقق من الشيفرة المصدرية أو من المجاميع الاختبارية المنشورة قبل تشغيل أي ملفات منزّلة. لم ندقق الشيفرة، ولا يمكن ضمان أمان أي تنزيل.',
          },
          {
            q: 'ما الذي تغيّر في whisper.cpp الإصدارين v1.9.4 وv1.9.5؟',
            a: 'وفق ملاحظات الإصدار الرسمية، يستدعي v1.9.4 (11 سبتمبر 2026) دالة بدء المشفّر قبل الكشف التلقائي عن اللغة، ويعيد تهيئة بذرة المفكّك 0 بين الاستدعاءات، ويجعل الخادم يعيد اللغة في استجابة الكشف، ويضيف Windows on ARM إلى مهمة الإصدار في CI، ويزامن ggml إلى 0.23.0. ويوصف v1.9.5 (6 أكتوبر 2026) بأنه إصدار صيانة يحدّث إلى ggml v0.26.0؛ كما يذكر سجل التغييرات واجهة مشفّر ANEForge اختيارية (Apple Neural Engine)، وإصلاح رمز الخطأ في CLI، ودالة إلغاء عند الكشف عن اللغة، والتحقق عند تحميل نماذج VAD، وصورة Docker أصغر لـ Vulkan. اقرأ الملاحظات كاملة قبل الترقية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'ينجح whisper.cpp في ما أراده تمامًا: جلب نموذج Whisper من OpenAI لتحويل الكلام إلى نص إلى أي جهاز يستطيع تصريف C/C++ دون الحاجة إلى Python أو CUDA أو بيئة تشغيل ثقيلة. وهذه القابلية للنقل — من معالجات x86 وARM إلى Apple Silicon إلى البطاقات الرسومية الداعمة لـ Vulkan أو CUDA — ليس لها بديل مجاني قريب للنسخ المحلي دون اتصال، ويتيح ترخيص MIT الاستخدام التجاري (وهذا ليس استشارة قانونية). وهو مجاني وتتم صيانته بنشاط ويستخدم أوزان Whisper الأصلية نفسها، فتتبع الدقة لحجم نموذج معيّن ما نشرته OpenAI. وليس هو الأقوى في مسار يعتمد على Python وبطاقات NVIDIA فقط ويسعى إلى أقصى إنتاجية — إذ يُوصى عادةً بالواجهة الخلفية CTranslate2 في faster-whisper هناك، كما تناقش [مقارنتنا](/ar/power-local-llm/local-whisper-stt-comparison). أما لسائر الحالات — المطورون الذين يستهدفون العتاد المدمج أو Apple Silicon أو التطبيقات متعددة المنصات، أو من يفضّل بناء شيفرة أصلية على صيانة بيئة Python — فهو نقطة بداية مجانية تستحق التجربة على صوتك أنت.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[whisper.cpp على GitHub](https://github.com/ggml-org/whisper.cpp) — المستودع الرسمي: README، وتعليمات التثبيت، والرخصة، وسجل الإصدارات.',
          '[إصدارات whisper.cpp](https://github.com/ggml-org/whisper.cpp/releases) — سجل الإصدارات، بما فيها v1.9.5 (6 أكتوبر 2026).',
          '[رخصة whisper.cpp](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — نص رخصة MIT.',
          '[إعلان OpenAI عن Whisper](https://openai.com/index/whisper/) — الإصدار الأصلي لنموذج Whisper عام 2022.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[whisper.cpp مقابل faster-whisper 2026: قياسات أداء STT محلية، والإعداد، وتسريع المعالج الرسومي](/ar/power-local-llm/local-whisper-stt-comparison) — المقارنة المباشرة لمن يحتار بين whisper.cpp وfaster-whisper.',
          'مراجعة faster-whisper — البديل المعتمد على CTranslate2، بنفس مستوى التفصيل.',
          '[بناء مساعد صوتي بلا اتصال بالكامل عام 2026](/ar/power-local-llm/build-local-voice-assistant-2026) — ربط whisper.cpp بنموذج لغة محلي وPiper TTS في خط معالجة صوتي كامل.',
          'مراجعة Piper TTS — النظير المحلي لتحويل النص إلى كلام، لتحويل النص المُولَّد مرة أخرى إلى صوت بلا اتصال.',
          '[الدليل الكامل لبرمجيات نماذج اللغة المحلية](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية عبر جميع الفئات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة whisper.cpp (2026): تحويل الكلام إلى نص محليًا بلغة C/C++ خالصة',
      description:
        'مراجعة whisper.cpp: نسخة C/C++ من OpenAI Whisper برخصة MIT لتحويل الكلام إلى نص محليًا. التاريخ، خطوات التثبيت، أوامر CLI حقيقية، الرخصة، ومتى تختار faster-whisper بدلًا منه.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/whisper-cpp-review',
      inLanguage: 'ar',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون الذين يقيّمون أدوات تحويل الكلام إلى نص محليًا وبلا اتصال' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: 'تحويل الكلام إلى نص' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ar/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة whisper.cpp (2026)', item: 'https://www.promptquorum.com/ar/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-zh.webp',
    title: 'whisper.cpp评测:纯C/C++本地语音识别',
    seoTitle: 'whisper.cpp评测:C/C++本地STT',
    intro:
      'whisper.cpp 是 OpenAI 语音识别模型 Whisper 的 C/C++ 重新实现，由 Georgi Gerganov 创建，现由 [GitHub 组织 ggml-org](https://github.com/ggml-org/whisper.cpp) 维护。它完全在设备本地把语音转成文字，无需 Python 运行环境，也不调用云端 API，支持 CPU、Apple Silicon（Metal、Core ML）和 NVIDIA GPU（CUDA）等后端。本评测涵盖它的历史、安装与运行、真实命令行用法、MIT 许可证与费用（免费），以及它不适合的场景，并附上我们与 faster-whisper 的对比链接，供正在二选一的读者参考。',
    metaDescription:
      'whisper.cpp评测:采用MIT许可证的OpenAI Whisper C/C++移植版,用于本地语音识别。历史、安装步骤、真实CLI命令、许可证,以及何时应选择faster-whisper。',
    twitterDescription:
      'whisper.cpp评测2026:Georgi Gerganov为OpenAI Whisper打造的C/C++移植版,实现本地离线语音识别。历史、安装、真实命令、MIT许可证与真实局限。',
    audience:
      '希望在无需 Python 运行环境或云端 API 的情况下，实现离线、本地语音转文字的开发者和自托管用户——适用于 x86 和 ARM CPU、Apple Silicon 或 NVIDIA GPU 流水线。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp 评测',
    targetKeywords: [
      'whisper.cpp 评测',
      'whisper.cpp',
      'whisper cpp 安装',
      'whisper cpp 配置',
      'ggerganov whisper',
      '本地语音识别 c++',
      '离线whisper转录',
      'whisper cpp 许可证',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp 是 OpenAI Whisper 语音转文字模型的免费、MIT 许可的 C/C++ 重新实现，由 Georgi Gerganov 创建，可完全在设备本地完成转录，不依赖 Python。** 它支持 CPU（含 AVX2/NEON 优化）、Apple Metal 与 Core ML、NVIDIA CUDA、Vulkan 等多种后端，一套代码即可覆盖 x86 与 ARM CPU、Apple Silicon 和 CUDA GPU。想并排了解它与 faster-whisper，请看我们的 [whisper.cpp 与 faster-whisper 对比](/zh/power-local-llm/local-whisper-stt-comparison)。',
    quickAnswerTop: {
      zh: {
        question: 'whisper.cpp是什么?值得用它做本地语音识别吗?',
        answer:
          '如果你想在不安装 Python 或 CUDA 的情况下实现离线、本地的语音转文字，或者面向 iOS、Android、WebAssembly 等平台——这些平台上 C/C++ 库比 Python 技术栈更容易嵌入——whisper.cpp 值得一用。它免费（MIT 许可证）、维护活跃，并使用与 OpenAI 原始发布相同的 Whisper 模型权重，因此同一模型规格下的准确度与原版 Whisper 一致。如果你的主要目标是运行 Python 流水线的 NVIDIA GPU 服务器，则更适合选择 faster-whisper——其 CTranslate2 后端在该场景下常被推荐。',
        bullets: [
          '由Georgi Gerganov开发,2022年首次发布,作为OpenAI Whisper的C/C++移植版;目前由GitHub上的ggml-org组织维护。',
          '采用MIT许可证,免费,无付费套餐,无需账户。',
          '可在CPU、Apple Metal/Core ML、NVIDIA CUDA、Vulkan、OpenVINO等平台上运行——无需Python运行时。',
          '最新稳定版本：v1.9.5（2026年10月6日）；仓库最近一次活动在2026年10月30日，依据项目的 GitHub 页面。',
          '最适合场景:嵌入式设备、Apple Silicon,以及任何单一自包含二进制文件优于Python环境的部署场景。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '历史:whisper.cpp的开发者与初衷', anchor: 'history' },
      { label: 'whisper.cpp实际能做什么', anchor: 'what-it-does' },
      { label: '安装并运行whisper.cpp:分步指南', anchor: 'install-walkthrough' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与成本', anchor: 'license-cost' },
      { label: 'whisper.cpp不适合的场景', anchor: 'limitations' },
      { label: 'whisper.cpp的替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp是一款免费、采用MIT许可证的C/C++移植版,基于OpenAI的语音识别模型Whisper,由Georgi Gerganov开发,通过CPU、Apple Metal、NVIDIA CUDA等多种后端在设备本地完全转录音频,无需Python。',
          },
          {
            type: 'plain-terms',
            text: '它在你自己的电脑或设备上把语音转成文字，而不是发送到云端 API——你从源码构建（项目文档给出了 CMake 步骤），输入音频文件或实时麦克风流，就能免费得到转录文本，使用的正是 OpenAI 训练的同一批 Whisper 模型。',
          },
        ],
        items: [
          '由Georgi Gerganov于2022年开发;目前由GitHub上的ggml-org组织维护。',
          'MIT许可证——可免费使用、修改和分发,包括商业用途。',
          '支持CPU、Apple Metal/Core ML、NVIDIA CUDA、Vulkan、OpenVINO、AMD ROCm及Ascend NPU等后端。',
          '无需 Python 运行环境——用 CMake 从 C/C++ 源码构建；Python 绑定由社区项目另行提供。',
          '通过其流式传输示例支持实时麦克风转录,同时也支持文件批量转录。',
          '最新稳定版本：v1.9.5，发布于2026年10月6日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测把 whisper.cpp 当作独立工具来介绍：历史、安装、真实命令、许可证与坦率的局限。想并排了解 faster-whisper 在 Apple Silicon 和 NVIDIA GPU 上的情况，请看 [whisper.cpp 与 faster-whisper 对比](/zh/power-local-llm/local-whisper-stt-comparison)。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:whisper.cpp的开发者与初衷',
        content: [
          '**OpenAI于2022年9月发布了其语音识别模型Whisper**,这是一个基于大量多语言音频数据训练的开放权重模型,以Python包(`openai-whisper`)形式分发,依赖PyTorch,若追求良好性能则还需要支持CUDA的GPU。',
          '**Georgi Gerganov在此后不久,同样在2022年,将该模型移植为纯C/C++**,项目位于[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)仓库。Gerganov同时也是支撑whisper.cpp数学运算与量化的ggml张量库的创建者,后来他因llama.cpp而广为人知——这是用于本地运行大语言模型的同类C/C++移植版。两个项目共享相同的ggml基础和相同的设计目标:让通常需要Python和GPU的模型在普通硬件上运行。',
          '**初衷是可移植性和资源效率，而不仅仅是速度。** Whisper 最初的 Python/PyTorch 实现在配有好显卡的工作站上很容易运行，但要部署到 iOS 应用、WebAssembly 页面或没有 Python 解释器的嵌入式 Linux 开发板上就很吃力。whisper.cpp 彻底去掉了对 PyTorch 和 Python 的依赖，以原生 C/C++ 代码构建，并加入量化支持，使较小的模型变体只需几百兆内存。',
          '**该项目早已远远超越了一个人的业余项目。** 如今它拥有数百名贡献者,已被打包进Debian,并为Core ML(Apple神经网络引擎)、CUDA、Vulkan、OpenVINO等在2022年原始版本中并不存在的后端提供官方支持。但它始终是Whisper的*运行环境*——它不训练或微调自己的模型,每次转录仍然使用OpenAI针对给定模型规模(从tiny到large-v3)发布的相同权重,只是转换成了该项目自己的GGML格式。',
        ],
        faqs: [
          {
            q: 'whisper.cpp是谁开发的?',
            a: 'Georgi Gerganov开发了whisper.cpp,并于2022年首次将其作为OpenAI Whisper模型的C/C++移植版发布。Gerganov同时也创建了它所依赖的ggml张量库,后来又开发了用于本地运行大语言模型的同类移植项目llama.cpp。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'whisper.cpp实际能做什么',
        content: [
          'whisper.cpp接收音频输入——一个文件(WAV,以及通过可选的FFmpeg解码支持的其他格式)或实时麦克风流——并生成文本转录,可选择附带每段时间戳以及英语翻译。为此,它会加载一个Whisper模型(已转换为该项目的GGML权重格式),并通过ggml张量库完全在本地机器上执行推理。',
        ],
        items: [
          '**批量转录。** 将`whisper-cli`二进制文件指向一个音频文件即可获得转录结果,支持纯文本、SRT/VTT字幕、JSON或CSV格式输出。',
          '**实时流式传输。** `whisper-stream`示例可捕获实时麦克风音频并持续转录,适用于语音助手或实时字幕场景。',
          '**多语言转录与翻译。** 底层Whisper模型经过多种语言训练;whisper.cpp可以根据传入的参数,以原始语言转录或直接翻译成英语。',
          '**硬件加速推理。** 在Apple Silicon上,whisper.cpp可以将模型导出为Core ML格式以利用Apple神经网络引擎;在NVIDIA硬件上使用CUDA;在其他GPU上可以使用Vulkan或OpenVINO。在仅有CPU的机器上,使用AVX2(x86)或NEON(ARM)向量指令。',
          '**量化。** 模型可以被量化(例如量化为4位或5位的GGML格式),以少量精度损失换取显著更低的内存占用和更快的推理速度——这与llama.cpp用于大语言模型的技术相同。',
        ],
        note: 'whisper.cpp是一个运行环境,而不是模型。给定模型规模(tiny、base、small、medium、large-v3)的转录精度由OpenAI最初的训练决定,而非whisper.cpp——该项目的作用是高效运行该模型,无需Python或沉重的GPU技术栈。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '安装并运行whisper.cpp:分步指南',
        content: '本指南使用项目自身README中记载的命令,从源码构建whisper.cpp并运行首次转录。',
        numberedItems: [
          {
            title: '克隆仓库。',
            whyItMatters: '运行`git clone https://github.com/ggml-org/whisper.cpp.git`,然后运行`cd whisper.cpp`。这会拉取完整的C/C++源码树,包括CMake构建文件和模型下载脚本。',
          },
          {
            title: '下载模型。',
            whyItMatters: '运行`sh ./models/download-ggml-model.sh base.en`以获取GGML格式的英语专用base模型。根据你想要的精度与速度取舍,将`base.en`替换为`tiny`、`small`、`medium`或`large-v3`,或去掉`.en`后缀以获取多语言模型。',
          },
          {
            title: '构建项目。',
            whyItMatters: '运行`cmake -B build`,然后运行`cmake --build build -j --config Release`。这会将CLI二进制文件(`whisper-cli`、`whisper-stream`等)编译到`build/bin/`目录中。此步骤无需安装Python。',
          },
          {
            title: '转录示例文件。',
            whyItMatters: '使用仓库自带的示例音频文件运行`./build/bin/whisper-cli -f samples/jfk.wav`。这可以确认构建是否端到端正常工作,并在终端中输出转录结果。',
          },
          {
            title: '转录你自己的音频。',
            whyItMatters: '将示例路径替换为你自己的WAV文件:`./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`。添加`-osrt`可同时写出`.srt`字幕文件,或添加`-oj`以输出JSON格式。',
          },
          {
            title: '(可选)启用GPU加速。',
            whyItMatters: '在Apple Silicon上,只要使用macOS默认CMake参数构建,Metal加速就会自动启用。在NVIDIA机器上,在`cmake -B build`步骤中添加`-DGGML_CUDA=ON`(需要已安装CUDA工具包)以启用CUDA支持进行构建。',
          },
          {
            title: '(可选)尝试实时转录。',
            whyItMatters: '构建流式传输示例并运行`./build/bin/whisper-stream -m models/ggml-base.en.bin`,以持续转录实时麦克风音频,而非固定文件。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '除了上面的基础安装指南外,以下是`whisper-cli`二进制文件在真实场景中的常见调用方式。',
        ],
        codeBlock: `# 将音频文件转录为纯文本(默认输出)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# 使用更大、更精确的模型进行转录并输出SRT字幕
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# 将非英语语音直接翻译为英文文本
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# 指定特定GPU(多GPU机器)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# 从默认麦克风进行实时转录
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: '这里展示的参数(`-m`模型路径、`-f`输入文件、`-osrt`SRT输出、`-tr`翻译为英语、`-g`/`--gpu-device`选择GPU、`-t`线程数)记录在项目的`--help`输出和README中。由于CLI选项可能在不同版本之间发生变化,请始终运行`./build/bin/whisper-cli --help`以确认你所安装版本的当前参数集。',
        items: [
          '**pywhispercpp** 为whisper.cpp提供Python绑定,适合希望利用Metal/CUDA加速、但更倾向于从Python代码调用而非逐个文件调用CLI二进制文件的团队。',
          '**whisper.cpp还附带一个小型本地HTTP服务器示例**(`whisper-server`),适合希望通过HTTP发送音频而非逐个文件调用CLI的团队——便于在不依赖Python的情况下将whisper.cpp集成到现有服务中。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与成本',
        content: [
          '**whisper.cpp采用MIT许可证。** [官方仓库](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE)中的许可证文件允许免费使用、修改和分发,包括用于闭源和商业产品,无需支付版税,除保留许可证声明外无需其他署名要求。',
          '**whisper.cpp本身没有付费套餐、订阅或许可费用。** 唯一的实际成本是你运行它所用的硬件(如果选择托管,则是云端虚拟机成本),以及如果在其上构建产品所投入的开发时间。没有用量计费,没有API密钥,也不存在供应商锁定。',
          '**底层Whisper模型权重也由OpenAI单独以MIT许可证发布**,因此运行环境(whisper.cpp)和它所加载的模型权重,均采用对商业使用宽松的许可证。',
        ],
        faqs: [
          {
            q: 'whisper.cpp能否免费用于商业用途?',
            a: '可以。whisper.cpp采用MIT许可证,它所使用的Whisper模型权重同样由OpenAI以MIT许可证发布。两者都允许免费进行商业使用、修改和分发。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'whisper.cpp不适合的场景',
        content: [
          'whisper.cpp是一个转录运行环境,而不是完整的对话式AI或说话人分离产品。在以下情况下它不是合适的工具:',
        ],
        items: [
          '**说话人分离("谁说了什么")。** whisper.cpp会转录说了什么,但不会原生分离或标注多人录音中的不同说话人。说话人分离需要单独的模型或流水线(例如将whisper.cpp的转录结果与说话人分离工具结合)叠加在其之上。',
          '**大规模场景下低于100毫秒的流式延迟。** 内置的`whisper-stream`示例适用于单台机器上的单个实时麦克风,但whisper.cpp并非专门为大量并发用户构建、可水平扩展的实时语音识别服务,而专用的实时语音API正是为此设计的。',
          '**对非技术用户没有开箱即用的安装方式。** whisper.cpp 是命令行工具，大多数人从源码构建——项目 README 记录了 CMake 构建方法，我们在官方仓库中没有找到面向非开发者的图形安装程序或应用商店页面。想要点击即用的转录应用，可以看看基于 whisper.cpp 构建的图形界面应用，或托管式转录服务。',
          '**在以 Python 为主的流水线中榨干 NVIDIA GPU 的最后一点吞吐。** 在 NVIDIA 硬件上运行最大模型时，一般认为 faster-whisper 的 CTranslate2 后端比 whisper.cpp 的 CUDA 路径更快、更省显存（我们的[对比文章](/zh/power-local-llm/local-whisper-stt-comparison)讨论过这一点；这些测量并非由我们自己完成）——如果你的部署本来就是 NVIDIA GPU 上的 Python 服务，faster-whisper 往往更合适。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'whisper.cpp的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合', '许可证'],
        rows: [
          {
            '工具': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            '最适合': 'NVIDIA GPU上的Python流水线——CTranslate2后端,吞吐量约为原始Whisper的4倍',
            '许可证': 'MIT',
          },
          {
            '工具': '[WhisperX](https://github.com/m-bain/whisperX)',
            '最适合': '需要在Whisper转录基础上获得词级时间戳和说话人分离',
            '许可证': 'BSD-2-Clause',
          },
          {
            '工具': '[OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            '最适合': '相较于自托管,更偏好按使用付费的托管云端API的团队',
            '许可证': '专有(付费API)',
          },
          {
            '工具': '[Vosk](https://alphacephei.com/vosk/)',
            '最适合': '资源非常有限的离线设备,需要小体积胜过Whisper级别精度',
            '许可证': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'whisper.cpp是什么?',
            a: 'whisper.cpp是一款免费的、采用MIT许可证的C/C++重新实现,基于OpenAI的语音识别模型Whisper,由Georgi Gerganov开发,可在无需Python运行时的情况下本地执行转录。',
          },
          {
            q: 'whisper.cpp免费吗?',
            a: '是的。whisper.cpp采用MIT许可证,没有付费套餐、订阅或使用费用。它所使用的Whisper模型权重同样由OpenAI以MIT许可证授权。',
          },
          {
            q: '运行whisper.cpp需要GPU吗?',
            a: '不需要。whisper.cpp 借助 AVX2（x86）或 NEON（ARM）优化在 CPU 上运行，纯 CPU 硬件通常选用较小的模型（tiny、base）；实时速度取决于你的处理器。GPU（Apple Metal、NVIDIA CUDA 或 Vulkan）能加速 large-v3 等较大模型，但并非必需。',
          },
          {
            q: 'whisper.cpp支持实时转录吗?',
            a: '支持,通过`whisper-stream`示例,可以捕获实时麦克风音频并持续转录。延迟取决于模型规模和硬件——在快速CPU或GPU上运行的较小模型最接近实时。',
          },
          {
            q: 'whisper.cpp和faster-whisper有什么区别?',
            a: 'whisper.cpp 是纯 C/C++ 实现，不依赖 Python，为在 CPU、Apple Metal、CUDA 和嵌入式设备之间实现可移植性而构建。faster-whisper 是基于 CTranslate2 的 Python 库，主要针对 Python 流水线中的 NVIDIA GPU 吞吐量做了优化。更多细节见我们的[对比文章](/zh/power-local-llm/local-whisper-stt-comparison)。',
          },
          {
            q: 'whisper.cpp 能在 ARM 设备上运行吗？',
            a: 'whisper.cpp 包含 ARM NEON 优化，也无需安装 Python 或 CUDA，因此 ARM CPU 是其目标平台之一。速度取决于设备和模型规格，我们没有在具体开发板上测量过，建议先试用 tiny 和 base 模型。',
          },
          {
            q: 'whisper.cpp会把音频翻译成英语吗?',
            a: '会。向`whisper-cli`传递`-tr`(翻译)参数,可以转录非英语语音并直接翻译成英文文本,利用的是多语言Whisper模型内置的翻译能力。',
          },
          {
            q: '目前是谁在维护whisper.cpp?',
            a: '该项目由 ggml-org GitHub 组织维护，该组织由原作者 Georgi Gerganov 创立，并有数百名社区开发者贡献。它仍在积极发布：v1.9.5 发布于2026年10月6日，仓库最近一次活动在2026年10月30日。',
          },
          {
            q: 'whisper.cpp能否分离一段录音中的不同说话人?',
            a: '并非原生支持。whisper.cpp会将语音转录为文本,但本身不执行说话人分离。若要实现"谁说了什么",请将其与专用的说话人分离工具结合使用,或使用WhisperX,它在Whisper转录基础上增加了说话人分离功能。',
          },
          {
            q: 'whisper.cpp下载安全吗？',
            a: '请只从官方仓库 [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) 及其[发布页面](https://github.com/ggml-org/whisper.cpp/releases)获取，避开重新打包的安装程序和非官方镜像。代码是开源的（MIT），你可以自己阅读并构建，运行下载的文件之前应核对源码或已发布的校验和。我们没有审计过该代码，也无法保证任何下载是安全的。',
          },
          {
            q: 'whisper.cpp v1.9.4和v1.9.5有哪些变化？',
            a: '根据官方发布说明，v1.9.4（2026年9月11日）在语言自动检测之前调用编码器开始回调，在两次调用之间重新设置解码器 0 的种子，让服务器在检测响应中返回语言，把 Windows on ARM 加入 CI 发布任务，并将 ggml 同步到 0.23.0。v1.9.5（2026年10月6日）被描述为更新到 ggml v0.26.0 的维护版本；其更新日志还列出可选的 ANEForge 编码器后端（Apple Neural Engine）、CLI 错误码修复、语言检测时的中止回调、VAD 模型加载校验以及更小的 Vulkan Docker 镜像。升级前请阅读完整说明。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'whisper.cpp 恰好做到了它想做的事：让 OpenAI 的 Whisper 语音转文字模型运行在任何能编译 C/C++ 的设备上，无需 Python、CUDA 或沉重的运行时。这种可移植性——从 x86 和 ARM CPU 到 Apple Silicon，再到支持 Vulkan 或 CUDA 的 GPU——在本地离线转录领域几乎没有同等的免费替代品，MIT 许可证也允许商业使用（不构成法律意见）。它免费、维护活跃，并使用与原版 Whisper 相同的模型权重，因此同一模型规格下的准确度与 OpenAI 公布的一致。在追求极致吞吐、以 Python 和 NVIDIA GPU 为主的流水线中，它并非最强选择——那里常推荐 faster-whisper 的 CTranslate2 后端，我们的[对比文章](/zh/power-local-llm/local-whisper-stt-comparison)也有讨论。对其他所有人——面向嵌入式硬件、Apple Silicon、跨平台应用的开发者，或更愿意构建原生代码而不想维护 Python 环境的人——whisper.cpp 是一个值得用自己的音频试一试的免费起点。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub上的whisper.cpp](https://github.com/ggml-org/whisper.cpp) ——官方仓库:README、安装说明、许可证和版本历史。',
          '[whisper.cpp 发布页](https://github.com/ggml-org/whisper.cpp/releases)——版本历史，包括 v1.9.5（2026年10月6日）。',
          '[whisper.cpp许可证](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) ——MIT许可证文本。',
          '[OpenAI Whisper发布公告](https://openai.com/index/whisper/) ——Whisper模型2022年的原始发布。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[whisper.cpp对比faster-whisper 2026:本地STT基准测试、安装与GPU加速](/zh/power-local-llm/local-whisper-stt-comparison) ——为需要在whisper.cpp和faster-whisper之间做选择的读者提供的直接对比。',
          'faster-whisper评测 ——基于CTranslate2的替代方案,采用同等深度评测。',
          '[2026年构建完全离线的语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) ——将whisper.cpp与本地大语言模型和Piper TTS连接成完整的语音流水线。',
          'Piper TTS评测 ——本地文本转语音的对应工具,用于将生成的文本离线转换回语音。',
          '[本地大语言模型软件完整目录](/zh/directory) ——覆盖所有分类的更广泛本地AI工具目录。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'whisper.cpp评测(2026):纯C/C++本地语音识别',
      description:
        'whisper.cpp评测:采用MIT许可证的OpenAI Whisper C/C++移植版,用于本地语音识别。历史、安装步骤、真实CLI命令、许可证,以及何时应选择faster-whisper。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/whisper-cpp-review',
      inLanguage: 'zh',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地离线语音识别工具的开发者' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: '语音识别' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/zh/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'whisper.cpp评测(2026)', item: 'https://www.promptquorum.com/zh/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/whisper-cpp-review-hero-ko.webp',
    title: 'whisper.cpp 리뷰: 순수 C/C++로 구현한 로컬 음성 인식',
    seoTitle: 'whisper.cpp 리뷰: C/C++ 로컬 STT',
    intro:
      'whisper.cpp는 OpenAI의 음성 인식 모델 Whisper를 C/C++로 다시 구현한 프로젝트로, Georgi Gerganov가 만들었으며 현재 [GitHub 조직 ggml-org](https://github.com/ggml-org/whisper.cpp)에서 관리됩니다. Python 런타임이나 클라우드 API 호출 없이 음성을 기기 안에서 텍스트로 변환하며, CPU, Apple Silicon(Metal, Core ML), NVIDIA GPU(CUDA) 등 여러 백엔드를 지원합니다. 이 리뷰는 역사, 설치와 실행 방법, 실제 명령줄 사용법, MIT 라이선스와 비용(무료), 적합하지 않은 경우를 다루며, 두 도구 사이에서 고민하는 독자를 위해 faster-whisper와의 비교 글 링크도 담았습니다.',
    metaDescription:
      'whisper.cpp 리뷰: OpenAI Whisper의 MIT 라이선스 C/C++ 포팅. 설치 방법, CLI 명령어, 라이선스, faster-whisper와의 비교를 정리했습니다.',
    twitterDescription:
      'whisper.cpp 리뷰 2026: Georgi Gerganov가 만든 OpenAI Whisper의 C/C++ 포팅 버전으로 로컬·오프라인 음성 인식을 구현합니다. 역사, 설치, 실제 명령어, MIT 라이선스, 솔직한 한계를 정리했습니다.',
    audience:
      'Python 런타임이나 클라우드 API 없이 오프라인·온디바이스 음성 인식을 원하는 개발자와 자체 호스팅 사용자를 위한 도구로, x86·ARM CPU, Apple Silicon, NVIDIA GPU 파이프라인에서 쓸 수 있습니다.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'whisper.cpp 리뷰',
    targetKeywords: [
      'whisper.cpp 리뷰',
      'whisper.cpp',
      'whisper cpp 설치',
      'whisper cpp 설정',
      'ggerganov whisper',
      '로컬 음성 인식 c++',
      '오프라인 whisper 전사',
      'whisper cpp 라이선스',
    ],
    current_models_mentioned: ['Whisper large-v3', 'Whisper base', 'Whisper tiny'],
    current_hardware_mentioned: ['Apple Silicon', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**whisper.cpp는 OpenAI의 Whisper 음성 인식 모델을 C/C++로 다시 구현한 무료 MIT 라이선스 프로젝트로, Georgi Gerganov가 만들었으며 Python 의존성 없이 변환을 기기 안에서 모두 처리합니다.** CPU(AVX2/NEON 최적화), Apple Metal과 Core ML, NVIDIA CUDA, Vulkan 등 여러 백엔드를 지원하므로 하나의 코드베이스로 x86·ARM CPU, Apple Silicon, CUDA GPU를 모두 다룹니다. faster-whisper와 나란히 보려면 [whisper.cpp 대 faster-whisper 비교](/ko/power-local-llm/local-whisper-stt-comparison)를 참고하세요.',
    quickAnswerTop: {
      ko: {
        question: 'whisper.cpp란 무엇이며, 로컬 음성 인식에 사용할 가치가 있습니까?',
        answer:
          'Python이나 CUDA를 설치하지 않고 오프라인·온디바이스 음성 인식을 하고 싶거나, Python 스택보다 C/C++ 라이브러리를 넣기 쉬운 iOS, Android, WebAssembly 같은 플랫폼을 목표로 한다면 whisper.cpp를 써 볼 만합니다. 무료(MIT 라이선스)이고 활발히 관리되며 OpenAI 원본과 같은 Whisper 모델 가중치를 쓰므로, 같은 모델 크기에서의 정확도는 원본 Whisper를 따릅니다. 주 대상이 Python 파이프라인을 돌리는 NVIDIA GPU 서버라면 faster-whisper를 선택하십시오. CTranslate2 백엔드가 그 용도로 흔히 권장됩니다.',
        bullets: [
          'Georgi Gerganov가 개발했으며, 2022년 OpenAI Whisper의 C/C++ 포팅 버전으로 처음 공개됨. 현재는 GitHub의 ggml-org 조직에서 관리.',
          'MIT 라이선스, 무료, 유료 등급 없음, 계정 필요 없음.',
          'CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO 등에서 동작 — Python 런타임 불필요.',
          '최신 안정 버전: v1.9.5(2026년 10월 6일). 저장소의 마지막 활동은 2026년 10월 30일이며, 프로젝트의 GitHub 페이지 기준입니다.',
          '가장 적합한 용도: 임베디드 기기, Apple Silicon, 그리고 Python 환경보다 단일 독립 실행형 바이너리가 나은 모든 배포 환경.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: whisper.cpp를 누가, 왜 만들었는가', anchor: 'history' },
      { label: 'whisper.cpp가 실제로 하는 일', anchor: 'what-it-does' },
      { label: 'whisper.cpp 설치 및 실행: 단계별 가이드', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스와 비용', anchor: 'license-cost' },
      { label: 'whisper.cpp가 적합하지 않은 용도', anchor: 'limitations' },
      { label: 'whisper.cpp의 대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'whisper.cpp는 Georgi Gerganov가 개발한 무료 MIT 라이선스 C/C++ 포팅 버전으로, OpenAI의 음성 인식 모델 Whisper를 기반으로 하며 CPU, Apple Metal, NVIDIA CUDA 등 다양한 백엔드를 통해 Python 없이 기기 내에서 완전히 오디오를 전사합니다.',
          },
          {
            type: 'plain-terms',
            text: '음성을 클라우드 API로 보내는 대신 사용자의 컴퓨터나 기기에서 텍스트로 바꿉니다. 소스에서 빌드하고(프로젝트가 CMake 단계를 문서화하고 있습니다), 오디오 파일이나 실시간 마이크 스트림을 넣으면 OpenAI가 학습시킨 것과 같은 Whisper 모델로 무료로 변환 결과를 돌려줍니다.',
          },
        ],
        items: [
          '2022년 Georgi Gerganov가 개발; 현재는 GitHub의 ggml-org 조직에서 관리.',
          'MIT 라이선스 — 상업적 사용을 포함해 무료로 사용, 수정, 재배포 가능.',
          'CPU, Apple Metal/Core ML, NVIDIA CUDA, Vulkan, OpenVINO, AMD ROCm, Ascend NPU 백엔드에서 동작.',
          'Python 런타임이 필요 없으며, CMake로 C/C++ 소스에서 빌드합니다. Python 바인딩은 커뮤니티의 별도 프로젝트로 존재합니다.',
          '스트리밍 예제를 통해 실시간 마이크 전사를 지원하며, 파일 일괄 전사도 지원.',
          '최신 안정 버전: v1.9.5, 2026년 10월 6일 게시.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 whisper.cpp를 독립적인 도구로 다루며 역사, 설치, 실제 명령, 라이선스, 솔직한 한계를 설명합니다. Apple Silicon과 NVIDIA GPU에서 faster-whisper와 나란히 보려면 [whisper.cpp 대 faster-whisper 비교](/ko/power-local-llm/local-whisper-stt-comparison)를 참고하세요.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: whisper.cpp를 누가, 왜 만들었는가',
        content: [
          '**OpenAI는 2022년 9월 음성 인식 모델 Whisper를 공개했습니다.** 대량의 다국어 오디오 데이터로 학습된 오픈 웨이트 모델로, PyTorch에 의존하고 좋은 성능을 위해서는 CUDA 지원 GPU가 필요한 Python 패키지(`openai-whisper`)로 배포되었습니다.',
          '**Georgi Gerganov는 그 직후, 역시 2022년에 이 모델을 순수 C/C++로 포팅했습니다.** 저장소는 [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)입니다. Gerganov는 whisper.cpp의 연산과 양자화를 뒷받침하는 ggml 텐서 라이브러리의 개발자이기도 하며, 이후에는 대규모 언어 모델을 로컬에서 실행하기 위한 동등한 C/C++ 포팅인 llama.cpp로 널리 알려졌습니다 — 두 프로젝트는 같은 ggml 기반과, 원래는 Python과 GPU가 필요한 모델을 평범한 하드웨어에서 실행한다는 동일한 설계 목표를 공유합니다.',
          '**동기는 속도만이 아니라 이식성과 자원 효율이었습니다.** Whisper의 원래 Python/PyTorch 구현은 좋은 GPU가 있는 워크스테이션에서는 쉽게 돌아가지만, iOS 앱, WebAssembly 페이지, Python 인터프리터가 전혀 없는 임베디드 Linux 보드에 배포하기에는 무겁습니다. whisper.cpp는 PyTorch와 Python 의존성을 완전히 없애고 네이티브 C/C++ 코드로 빌드되며, 양자화를 지원해 작은 모델 변형은 수백 MB의 RAM에 들어갑니다.',
          '**이 프로젝트는 한 사람이 만든 사이드 프로젝트 수준을 훨씬 넘어섰습니다.** 현재는 수백 명의 기여자를 두고 있으며, Debian용으로 패키징되어 있고, 2022년 원본 공개 당시에는 존재하지 않았던 Core ML(Apple Neural Engine), CUDA, Vulkan, OpenVINO 등 여러 백엔드를 공식 지원합니다. 그럼에도 whisper.cpp는 여전히 Whisper의 *실행 환경*입니다 — 자체 모델을 학습하거나 미세 조정하지 않으며, 모든 전사는 여전히 주어진 모델 크기(tiny부터 large-v3까지)에 대해 OpenAI가 공개한 동일한 가중치를, 프로젝트 고유의 GGML 형식으로 변환해 사용합니다.',
        ],
        faqs: [
          {
            q: 'whisper.cpp는 누가 만들었습니까?',
            a: 'Georgi Gerganov가 whisper.cpp를 개발했으며, 2022년 OpenAI Whisper 모델의 C/C++ 포팅 버전으로 처음 공개했습니다. Gerganov는 whisper.cpp가 구동되는 ggml 텐서 라이브러리도 만들었으며, 이후 대규모 언어 모델을 로컬에서 실행하기 위한 동등한 포팅인 llama.cpp도 개발했습니다.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'whisper.cpp가 실제로 하는 일',
        content: [
          'whisper.cpp는 오디오 입력(WAV 파일, 그리고 선택적 FFmpeg 디코딩을 통한 다른 형식, 또는 실시간 마이크 스트림)을 받아 텍스트 전사 결과를 생성하며, 선택적으로 구간별 타임스탬프와 영어 번역도 함께 제공합니다. 이를 위해 Whisper 모델(프로젝트 고유의 GGML 가중치 형식으로 변환됨)을 불러와 ggml 텐서 라이브러리를 통해 로컬 머신에서 완전히 추론을 수행합니다.',
        ],
        items: [
          '**일괄 전사.** `whisper-cli` 바이너리를 오디오 파일에 지정하면 전사 결과를 얻을 수 있으며, 일반 텍스트, SRT/VTT 자막, JSON, CSV 출력 옵션을 제공합니다.',
          '**실시간 스트리밍.** `whisper-stream` 예제는 실시간 마이크 오디오를 캡처하여 지속적으로 전사하며, 음성 비서나 실시간 자막에 유용합니다.',
          '**다국어 전사 및 번역.** 기반 Whisper 모델은 여러 언어로 학습되었으며, whisper.cpp는 전달된 플래그에 따라 원문 언어로 전사하거나 직접 영어로 번역할 수 있습니다.',
          '**하드웨어 가속 추론.** Apple Silicon에서는 whisper.cpp가 모델을 Core ML 형식으로 내보내 Apple Neural Engine을 활용할 수 있습니다. NVIDIA 하드웨어에서는 CUDA를 사용하며, 다른 GPU에서는 Vulkan이나 OpenVINO를 사용할 수 있습니다. CPU 전용 머신에서는 AVX2(x86) 또는 NEON(ARM) 벡터 명령어를 사용합니다.',
          '**양자화.** 모델은 (예를 들어 4비트나 5비트 GGML 형식으로) 양자화되어, 약간의 정확도를 희생하는 대신 메모리 사용량을 크게 줄이고 추론 속도를 높일 수 있습니다 — llama.cpp가 LLM에 사용하는 것과 동일한 기법입니다.',
        ],
        note: 'whisper.cpp는 실행 환경이지 모델이 아닙니다. 주어진 모델 크기(tiny, base, small, medium, large-v3)의 전사 정확도는 whisper.cpp가 아니라 OpenAI의 원본 학습에 의해 결정됩니다 — 이 프로젝트의 역할은 Python이나 무거운 GPU 스택 없이 해당 모델을 효율적으로 실행하는 것입니다.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'whisper.cpp 설치 및 실행: 단계별 가이드',
        content: '이 가이드는 프로젝트 자체 README에 문서화된 명령어를 사용하여 소스에서 whisper.cpp를 빌드하고 첫 전사를 실행합니다.',
        numberedItems: [
          {
            title: '저장소를 클론합니다.',
            whyItMatters: '`git clone https://github.com/ggml-org/whisper.cpp.git`을 실행한 뒤 `cd whisper.cpp`를 실행합니다. 이렇게 하면 CMake 빌드 파일과 모델 다운로드 스크립트를 포함한 전체 C/C++ 소스 트리를 내려받습니다.',
          },
          {
            title: '모델을 다운로드합니다.',
            whyItMatters: '`sh ./models/download-ggml-model.sh base.en`을 실행하여 GGML 형식의 영어 전용 base 모델을 가져옵니다. 원하는 정확도와 속도의 균형에 따라 `base.en`을 `tiny`, `small`, `medium`, `large-v3`로 바꾸거나, 다국어 모델을 위해 `.en` 접미사를 제거하십시오.',
          },
          {
            title: '프로젝트를 빌드합니다.',
            whyItMatters: '`cmake -B build`를 실행한 뒤 `cmake --build build -j --config Release`를 실행합니다. 이렇게 하면 CLI 바이너리(`whisper-cli`, `whisper-stream` 등)가 `build/bin/` 디렉터리에 컴파일됩니다. 이 단계에는 Python 설치가 필요하지 않습니다.',
          },
          {
            title: '예제 파일을 전사합니다.',
            whyItMatters: '저장소에 포함된 예제 오디오 파일로 `./build/bin/whisper-cli -f samples/jfk.wav`를 실행합니다. 이를 통해 빌드가 처음부터 끝까지 정상 작동하는지 확인하고, 터미널에 전사 결과가 출력됩니다.',
          },
          {
            title: '자신의 오디오를 전사합니다.',
            whyItMatters: '예제 경로를 자신의 WAV 파일로 바꿉니다: `./build/bin/whisper-cli -m models/ggml-base.en.bin -f your-audio.wav`. `.srt` 자막 파일도 함께 작성하려면 `-osrt`를, JSON 출력을 원하면 `-oj`를 추가하십시오.',
          },
          {
            title: '(선택) GPU 가속을 활성화합니다.',
            whyItMatters: 'Apple Silicon에서는 macOS에서 기본 CMake 옵션으로 빌드하면 Metal 가속이 자동으로 사용됩니다. NVIDIA 머신에서는 CUDA 지원으로 빌드하기 위해 `cmake -B build` 단계에 `-DGGML_CUDA=ON`을 추가하십시오(CUDA 툴킷 설치 필요).',
          },
          {
            title: '(선택) 실시간 전사를 시도합니다.',
            whyItMatters: '스트리밍 예제를 빌드하고 `./build/bin/whisper-stream -m models/ggml-base.en.bin`을 실행하여 고정된 파일 대신 실시간 마이크 오디오를 지속적으로 전사합니다.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '위의 기본 설치 가이드 외에, 다음은 실제로 자주 사용되는 `whisper-cli` 바이너리 호출 예시입니다.',
        ],
        codeBlock: `# 오디오 파일을 일반 텍스트로 전사(기본 출력)
./build/bin/whisper-cli -m models/ggml-base.en.bin -f interview.wav

# 더 크고 정확한 모델을 사용해 전사하고 SRT 자막을 출력
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f lecture.wav -osrt

# 비영어권 음성을 영어 텍스트로 직접 번역
./build/bin/whisper-cli -m models/ggml-medium.bin -f french-audio.wav -tr

# 특정 GPU 선택(다중 GPU 머신)
./build/bin/whisper-cli -m models/ggml-large-v3.bin -f audio.wav -g 0

# 기본 마이크로부터 실시간 전사
./build/bin/whisper-stream -m models/ggml-base.en.bin -t 8`,
        codeLanguage: 'bash',
        note: '여기에 표시된 플래그(`-m` 모델 경로, `-f` 입력 파일, `-osrt` SRT 출력, `-tr` 영어 번역, `-g`/`--gpu-device` GPU 선택, `-t` 스레드 수)는 프로젝트의 `--help` 출력과 README에 문서화되어 있습니다. CLI 옵션은 버전에 따라 달라질 수 있으므로, 설치한 버전의 현재 플래그 세트를 확인하려면 항상 `./build/bin/whisper-cli --help`를 실행하십시오.',
        items: [
          '**pywhispercpp**는 whisper.cpp의 Python 바인딩을 제공하여, Metal/CUDA 가속을 활용하면서도 파일마다 CLI 바이너리를 호출하는 대신 Python 코드에서 호출하려는 팀에 적합합니다.',
          '**whisper.cpp에는 작은 로컬 HTTP 서버 예제**(`whisper-server`)도 포함되어 있어, 파일마다 CLI를 호출하는 대신 HTTP를 통해 오디오를 전송하려는 팀에 유용합니다 — Python 의존성 없이 기존 서비스에 whisper.cpp를 통합하는 데 도움이 됩니다.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스와 비용',
        content: [
          '**whisper.cpp는 MIT 라이선스로 배포됩니다.** [공식 저장소](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE)의 라이선스 파일은 클로즈드 소스 및 상업 제품을 포함해 무료로 사용, 수정, 재배포하는 것을 허용하며, 로열티가 없고 라이선스 고지를 유지하는 것 외에 별도의 저작권 표시 의무도 없습니다.',
          '**whisper.cpp 자체에는 유료 등급, 구독, 라이선스 비용이 전혀 없습니다.** 실제 비용은 실행할 하드웨어(또는 호스팅을 선택할 경우 클라우드 VM)와, 그 위에 제품을 구축할 경우 자신의 개발 시간뿐입니다. 사용량 측정, API 키, 벤더 종속도 없습니다.',
          '**기반이 되는 Whisper 모델 가중치 또한 OpenAI가 별도로 MIT 라이선스로 공개했으므로**, 실행 환경(whisper.cpp)과 그것이 불러오는 모델 가중치 모두 상업적 사용에 대해 관대한 라이선스를 갖습니다.',
        ],
        faqs: [
          {
            q: 'whisper.cpp는 상업적으로 무료로 사용할 수 있습니까?',
            a: '네. whisper.cpp는 MIT 라이선스이며, 사용하는 Whisper 모델 가중치도 OpenAI에 의해 MIT 라이선스로 공개되어 있습니다. 둘 다 비용 없이 상업적 사용, 수정, 재배포를 허용합니다.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'whisper.cpp가 적합하지 않은 용도',
        content: [
          'whisper.cpp는 전사 실행 환경이지, 완전한 대화형 AI나 화자 분리 제품이 아닙니다. 다음과 같은 상황에서는 적합한 도구가 아닙니다.',
        ],
        items: [
          '**화자 분리("누가 무엇을 말했는가").** whisper.cpp는 말한 내용을 전사하지만, 여러 사람이 등장하는 녹음에서 서로 다른 화자를 기본적으로 분리하거나 표시하지 않습니다. 화자 분리를 위해서는 (예를 들어 whisper.cpp의 전사 결과를 화자 분리 도구와 결합하는 등) 별도의 모델이나 파이프라인을 추가로 얹어야 합니다.',
          '**대규모 환경에서 100밀리초 미만의 스트리밍 지연.** 내장된 `whisper-stream` 예제는 한 대의 머신에서 하나의 실시간 마이크에는 잘 작동하지만, whisper.cpp는 다수의 동시 사용자를 위해 전용 실시간 음성 API가 설계되는 것과 같은, 특별히 설계되어 수평적으로 확장되는 실시간 음성 인식 서비스는 아닙니다.',
          '**비전문가를 위한 간편 설치는 없습니다.** whisper.cpp는 대부분 소스에서 빌드해 쓰는 명령줄 도구이며, 프로젝트 README에 CMake 빌드 방법이 문서화되어 있고 공식 저장소에서 비개발자용 그래픽 설치 프로그램이나 앱 스토어 등록은 찾지 못했습니다. 클릭만으로 쓰는 변환 앱을 원한다면 whisper.cpp 위에 만들어진 GUI 앱이나 호스팅형 변환 서비스를 살펴보십시오.',
          '**Python 중심 파이프라인에서 NVIDIA GPU 처리량을 끝까지 끌어내려는 경우.** NVIDIA 하드웨어의 가장 큰 모델에서는 faster-whisper의 CTranslate2 백엔드가 whisper.cpp의 CUDA 경로보다 빠르고 VRAM도 적게 쓴다고 흔히 보고됩니다([비교 글](/ko/power-local-llm/local-whisper-stt-comparison)에서 다루며, 이 측정은 저희가 직접 수행한 것이 아닙니다). 이미 NVIDIA GPU 위에서 Python 서비스를 운영 중이라면 faster-whisper가 더 잘 맞는 경우가 많습니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'whisper.cpp의 대안',
        itemHeadings: true,
        columns: ['도구', '가장 적합한 경우', '라이선스'],
        rows: [
          {
            '도구': '[faster-whisper](https://github.com/SYSTRAN/faster-whisper)',
            '가장 적합한 경우': 'NVIDIA GPU 위의 Python 파이프라인 — CTranslate2 백엔드, 원본 Whisper 대비 약 4배의 처리량',
            '라이선스': 'MIT',
          },
          {
            '도구': '[WhisperX](https://github.com/m-bain/whisperX)',
            '가장 적합한 경우': 'Whisper 전사 결과에 더해 단어 단위 타임스탬프와 화자 분리가 필요할 때',
            '라이선스': 'BSD-2-Clause',
          },
          {
            '도구': '[OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)',
            '가장 적합한 경우': '셀프 호스팅보다 사용량 기반 요금의 관리형 클라우드 API를 선호하는 팀',
            '라이선스': '독점(유료 API)',
          },
          {
            '도구': '[Vosk](https://alphacephei.com/vosk/)',
            '가장 적합한 경우': 'Whisper 수준의 정확도보다 작은 용량이 중요한, 자원이 매우 제한적인 오프라인 기기',
            '라이선스': 'Apache-2.0',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'whisper.cpp란 무엇입니까?',
            a: 'whisper.cpp는 Georgi Gerganov가 개발한 무료 MIT 라이선스 C/C++ 재구현체로, OpenAI의 음성 인식 모델 Whisper를 기반으로 하며 Python 런타임 없이 로컬에서 전사를 실행합니다.',
          },
          {
            q: 'whisper.cpp는 무료입니까?',
            a: '네. whisper.cpp는 MIT 라이선스이며, 유료 등급, 구독, 사용료가 없습니다. 사용하는 Whisper 모델 가중치도 OpenAI에 의해 MIT 라이선스로 공개되어 있습니다.',
          },
          {
            q: 'whisper.cpp를 실행하는 데 GPU가 필요합니까?',
            a: '아니요. whisper.cpp는 AVX2(x86) 또는 NEON(ARM) 최적화로 CPU에서 동작하며, CPU만 있는 환경에서는 작은 모델(tiny, base)을 주로 씁니다. 실시간 속도는 프로세서에 따라 달라집니다. GPU(Apple Metal, NVIDIA CUDA, Vulkan)는 large-v3 같은 큰 모델을 빠르게 해 주지만 필수는 아닙니다.',
          },
          {
            q: 'whisper.cpp는 실시간 전사를 지원합니까?',
            a: '네, `whisper-stream` 예제를 통해 실시간 마이크 오디오를 캡처하여 지속적으로 전사할 수 있습니다. 지연 시간은 모델 크기와 하드웨어에 따라 다르며, 빠른 CPU나 GPU에서 실행되는 작은 모델일수록 실시간에 가장 가깝습니다.',
          },
          {
            q: 'whisper.cpp와 faster-whisper의 차이는 무엇입니까?',
            a: 'whisper.cpp는 Python 의존성이 없는 순수 C/C++ 구현으로, CPU, Apple Metal, CUDA, 임베디드 기기 전반의 이식성을 목표로 만들어졌습니다. faster-whisper는 CTranslate2 기반의 Python 라이브러리로, 주로 Python 파이프라인 안에서의 NVIDIA GPU 처리량에 최적화되어 있습니다. 자세한 내용은 [비교 글](/ko/power-local-llm/local-whisper-stt-comparison)을 참고하세요.',
          },
          {
            q: 'whisper.cpp는 ARM 기기에서 동작합니까?',
            a: 'whisper.cpp에는 ARM NEON 최적화가 포함되어 있고 Python이나 CUDA를 설치할 필요도 없으므로 ARM CPU도 대상에 포함됩니다. 속도는 기기와 모델 크기에 따라 다르며 특정 보드에서는 측정하지 않았으니, 먼저 tiny와 base 모델로 시험해 보십시오.',
          },
          {
            q: 'whisper.cpp는 오디오를 영어로 번역합니까?',
            a: '네. `whisper-cli`에 `-tr`(번역) 플래그를 전달하면 비영어권 음성을 전사하고, 다국어 Whisper 모델에 내장된 번역 기능을 사용해 곧바로 영어 텍스트로 번역합니다.',
          },
          {
            q: 'whisper.cpp는 현재 누가 관리합니까?',
            a: '이 프로젝트는 원작자 Georgi Gerganov가 설립한 GitHub 조직 ggml-org에서 관리되며 수백 명의 커뮤니티 개발자가 기여합니다. 릴리스도 활발해서 v1.9.5가 2026년 10월 6일에 게시되었고 저장소의 마지막 활동은 2026년 10월 30일입니다.',
          },
          {
            q: 'whisper.cpp는 녹음 속 서로 다른 화자를 분리합니까?',
            a: '기본적으로는 분리하지 않습니다. whisper.cpp는 음성을 텍스트로 전사하지만 자체적으로 화자 분리를 수행하지는 않습니다. "누가 무엇을 말했는가"가 필요하다면 전용 화자 분리 도구와 결합하거나, Whisper 전사 결과 위에 화자 분리를 추가하는 WhisperX를 사용하십시오.',
          },
          {
            q: 'whisper.cpp는 내려받아도 안전합니까?',
            a: '공식 저장소 [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)와 [릴리스 페이지](https://github.com/ggml-org/whisper.cpp/releases)에서만 받고, 재포장된 설치 파일과 비공식 미러는 피하십시오. 코드는 오픈 소스(MIT)이므로 직접 읽고 빌드할 수 있으며, 내려받은 파일을 실행하기 전에 소스나 공개된 체크섬을 확인하는 것이 좋습니다. 저희는 코드를 감사하지 않았으며, 어떤 다운로드도 안전을 보장할 수 없습니다.',
          },
          {
            q: 'whisper.cpp v1.9.4와 v1.9.5에서 무엇이 바뀌었습니까?',
            a: '공식 릴리스 노트에 따르면 v1.9.4(2026년 9월 11일)는 언어 자동 감지 전에 인코더 시작 콜백을 호출하고, 호출 사이에 디코더 0의 시드를 다시 설정하며, 서버가 감지 응답에 언어를 포함해 반환하게 하고, CI 릴리스 작업에 Windows on ARM을 추가하며, ggml을 0.23.0으로 동기화했습니다. v1.9.5(2026년 10월 6일)는 ggml v0.26.0으로 업데이트하는 유지보수 릴리스로 설명되며, 변경 내역에는 선택형 ANEForge 인코더 백엔드(Apple Neural Engine), CLI 오류 코드 수정, 언어 감지 시 중단 콜백, VAD 모델 로드 검증, 더 작은 Vulkan Docker 이미지도 나열되어 있습니다. 업그레이드 전에 전체 노트를 읽어 보십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'whisper.cpp는 목표한 바를 정확히 이뤄 냅니다. C/C++를 컴파일할 수 있는 모든 기기에서 Python, CUDA, 무거운 런타임 없이 OpenAI의 Whisper 음성 인식 모델을 쓸 수 있게 합니다. x86·ARM CPU에서 Apple Silicon, Vulkan 또는 CUDA 지원 GPU까지 아우르는 이 이식성은 로컬 오프라인 변환 분야에서 비슷한 무료 대안이 드물며, MIT 라이선스는 상업적 사용을 허용합니다(법률 자문이 아닙니다). 무료이고 활발히 관리되며 원본 Whisper와 같은 모델 가중치를 쓰므로 같은 모델 크기에서의 정확도는 OpenAI가 공개한 내용을 따릅니다. 최대 처리량을 노리는 Python 중심, NVIDIA GPU 전용 파이프라인에서는 가장 강한 선택이 아니며, 그곳에서는 faster-whisper의 CTranslate2 백엔드가 흔히 권장됩니다([비교 글](/ko/power-local-llm/local-whisper-stt-comparison) 참고). 그 밖의 모든 경우, 즉 임베디드 하드웨어, Apple Silicon, 크로스 플랫폼 앱을 목표로 하는 개발자나 Python 환경을 유지하기보다 네이티브 코드를 빌드하는 쪽을 선호하는 분께 whisper.cpp는 직접 가진 오디오로 시험해 볼 만한 무료 출발점입니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 whisper.cpp](https://github.com/ggml-org/whisper.cpp) — 공식 저장소: README, 설치 안내, 라이선스, 릴리스 이력.',
          '[whisper.cpp 릴리스](https://github.com/ggml-org/whisper.cpp/releases) — 버전 이력, v1.9.5(2026년 10월 6일) 포함.',
          '[whisper.cpp 라이선스](https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE) — MIT 라이선스 전문.',
          '[OpenAI Whisper 발표](https://openai.com/index/whisper/) — 2022년 Whisper 모델의 최초 공개.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[whisper.cpp 대 faster-whisper 2026: 로컬 STT 벤치마크, 설치, GPU 가속](/ko/power-local-llm/local-whisper-stt-comparison) — whisper.cpp와 faster-whisper 사이에서 고민하는 독자를 위한 직접 비교.',
          'faster-whisper 리뷰 — CTranslate2 기반 대안을 동일한 깊이로 리뷰.',
          '[2026년 완전 오프라인 음성 비서 구축하기](/ko/power-local-llm/build-local-voice-assistant-2026) — whisper.cpp를 로컬 LLM 및 Piper TTS와 연결해 완전한 음성 파이프라인 구축.',
          'Piper TTS 리뷰 — 생성된 텍스트를 오프라인에서 다시 음성으로 변환하는, 로컬 음성 합성 짝꿍 도구.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 모든 카테고리를 아우르는 더 넓은 로컬 AI 도구 디렉터리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'whisper.cpp 리뷰(2026): 순수 C/C++로 구현한 로컬 음성 인식',
      description:
        'whisper.cpp 리뷰: OpenAI Whisper를 MIT 라이선스로 C/C++ 포팅한 로컬 음성 인식 도구. 역사, 설치 단계, 실제 CLI 명령어, 라이선스, faster-whisper를 선택해야 할 때를 정리했습니다.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/whisper-cpp-review',
      inLanguage: 'ko',
      datePublished: '2026-09-05',
      dateModified: '2026-11-02',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬·오프라인 음성 인식 도구를 검토하는 개발자' },
      about: [
        { '@type': 'SoftwareApplication', name: 'whisper.cpp', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', softwareVersion: '1.9.5', license: 'https://github.com/ggml-org/whisper.cpp/blob/master/LICENSE', url: 'https://github.com/ggml-org/whisper.cpp', sameAs: ['https://github.com/ggml-org/whisper.cpp'] },
        { '@type': 'Thing', name: 'OpenAI Whisper', sameAs: ['https://github.com/openai/whisper', 'https://openai.com/index/whisper/'] },
        { '@type': 'Thing', name: '음성 인식' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/ko/power-local-llm/whisper-cpp-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'whisper.cpp 리뷰(2026)', item: 'https://www.promptquorum.com/ko/power-local-llm/whisper-cpp-review' },
      ],
    },
  },
}
