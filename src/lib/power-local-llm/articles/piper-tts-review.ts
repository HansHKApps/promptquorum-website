// Piper TTS Review: Fast, Local Neural Text-to-Speech
// Slug: piper-tts-review
// Companion to: local-tts-voice-cloning-piper-coqui-xtts.ts (licensing deep dive) and
// elevenlabs-vs-local-tts-piper-xtts.ts (cloud vs. local TTS comparison)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-en.webp',
    title: 'Piper TTS Review (2026): Fast, Local Neural Text-to-Speech',
    seoTitle: 'Piper TTS Review 2026: Fast Local Neural TTS',
    intro:
      'Piper is a free, local neural text-to-speech engine that turns text into spoken audio entirely on your own device, originally created within the [Rhasspy](https://github.com/rhasspy) open-source voice-assistant project by Michael Hansen. In 2025, active development moved to a new repository, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), maintained by the [Open Home Foundation](https://www.openhomefoundation.org/) — the nonprofit behind Home Assistant — and the original [rhasspy/piper](https://github.com/rhasspy/piper) repository was archived (made read-only) on October 6, 2025. This review covers that history, real install and usage commands, its current license (which changed from MIT to GPL-3.0-or-later), and where Piper is not the right tool — including a link to PromptQuorum\'s licensing deep dive and its comparison against ElevenLabs.',
    metaDescription:
      'Piper TTS review: the free, local neural text-to-speech engine from the Rhasspy project, now maintained by the Open Home Foundation. History, install steps, real commands, current GPL-3.0 license, and when to use XTTS v2 instead.',
    twitterDescription:
      'Piper TTS review 2026: fast, local, real-time-on-a-Raspberry-Pi neural text-to-speech, created by Michael Hansen and now maintained by the Open Home Foundation. Real install commands, the 2025 GPL-3.0 relicense, and honest limits.',
    audience:
      'Developers and hobbyists building local voice assistants, accessibility tools, or offline apps who need fast text-to-speech without a cloud API, GPU, or per-character fee.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS review',
    targetKeywords: [
      'piper tts review',
      'piper tts',
      'piper tts install',
      'piper tts python',
      'piper tts license',
      'ohf-voice piper1-gpl',
      'local neural text to speech',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper is a free, local neural text-to-speech engine created within the Rhasspy voice-assistant project by Michael Hansen, now maintained by the Open Home Foundation at [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), that converts text to spoken audio fast enough to run in real time on CPU-only hardware such as a Raspberry Pi.** Install it with `pip install piper-tts`. As of 2025, the actively maintained repository ships under the GPL-3.0-or-later license — a change from the MIT license of the original, now-archived `rhasspy/piper` repository. For a licensing deep dive across Piper, Coqui TTS, XTTS v2, F5-TTS, Bark, and StyleTTS 2, see PromptQuorum\'s [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'What is Piper TTS and is it still maintained?',
        answer:
          'Piper is worth using if you want fast, fully local text-to-speech that runs on CPU-only hardware, including a Raspberry Pi, without sending any text to a cloud API. It was created within the Rhasspy open-source voice-assistant project by Michael Hansen and is best known as the default local TTS engine in Home Assistant\'s voice pipeline. Yes, it is still maintained: after the original rhasspy/piper repository was archived on October 6, 2025, active development continued at a new repository, OHF-Voice/piper1-gpl, under the Open Home Foundation. The one change to know about is licensing — the actively maintained repository ships under GPL-3.0-or-later, not the original MIT license, and the project\'s own README notes it is currently looking for additional maintainers. Choose XTTS v2 instead if you need expressive, emotional, few-second voice cloning; Piper\'s voices are pre-trained, not cloned from a short sample.',
        bullets: [
          'Created within the Rhasspy voice-assistant project by Michael Hansen; original repository archived October 6, 2025.',
          'Active development now under the Open Home Foundation at OHF-Voice/piper1-gpl, created March 28, 2025.',
          'License changed from MIT (archived repo) to GPL-3.0-or-later (current repo) — check this before embedding Piper in a closed-source product.',
          'Free, no paid tier; runs in real time on CPU-only hardware including a Raspberry Pi, with optional CUDA GPU acceleration.',
          'Latest release: v1.8.0, published September 4, 2026, per the project\'s GitHub releases page.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: From Rhasspy to the Open Home Foundation', anchor: 'history' },
      { label: 'What Piper Actually Does', anchor: 'what-it-does' },
      { label: 'Install and Run Piper: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Cost', anchor: 'license-cost' },
      { label: 'What Piper Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to Piper', anchor: 'alternatives' },
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
            text: 'Piper is a free, local neural text-to-speech engine originally created within the Rhasspy voice-assistant project by Michael Hansen and now maintained by the Open Home Foundation, fast enough to run in real time on CPU-only hardware such as a Raspberry Pi, that changed its license from MIT to GPL-3.0-or-later when development moved to a new repository in 2025.',
          },
          {
            type: 'plain-terms',
            text: 'It is a program you `pip install` that turns typed text into spoken audio on your own device — no cloud account, no internet connection required, and it runs fast enough for real-time speech even on very modest hardware.',
          },
        ],
        items: [
          'Created within the Rhasspy voice-assistant project by Michael Hansen.',
          'Original rhasspy/piper repository archived (read-only) October 6, 2025, under the MIT license.',
          'Active development now at OHF-Voice/piper1-gpl (created March 28, 2025), under the Open Home Foundation, the nonprofit behind Home Assistant.',
          'Current license: GPL-3.0-or-later — a change from the archived repository\'s MIT license.',
          'Free, no paid tier; real-time CPU inference, optional CUDA GPU acceleration.',
          'Latest release: v1.8.0, published September 4, 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The license changed in 2025. If you evaluated Piper before that under the assumption it is MIT-licensed, re-check before using the currently maintained repository in a closed-source product — see the License and Cost section below.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: From Rhasspy to the Open Home Foundation',
        content: [
          '**Piper began inside Rhasspy**, an open-source toolkit for building fully offline voice assistants, where Michael Hansen built it as a fast, local text-to-speech engine to pair with Rhasspy\'s local speech recognition — avoiding a round trip to a cloud TTS API for every spoken response. Piper uses a neural, VITS-style text-to-waveform architecture: it converts text to phonemes (using [espeak-ng](https://github.com/espeak-ng/espeak-ng)), then synthesizes a waveform directly from those phonemes with a model exported to [ONNX Runtime](https://onnxruntime.ai/) for fast inference, including on CPU-only hardware.',
          '**The original repository, [rhasspy/piper](https://github.com/rhasspy/piper), grew to become one of the most widely used local TTS engines** in the open-source home-automation and accessibility space, accumulating over 11,000 GitHub stars under its MIT license. It became the default local text-to-speech engine in [Home Assistant](https://www.home-assistant.io/)\'s voice pipeline.',
          '**In 2025, active development moved to a new repository.** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) was created on March 28, 2025, under the Open Home Foundation — the nonprofit organization that also stewards Home Assistant. The original rhasspy/piper repository was subsequently archived (made read-only) on October 6, 2025; it remains available under its original MIT license, but receives no further updates.',
          '**The new repository carries a different license: GPL-3.0-or-later**, rather than the original MIT license. The project does not state its reasoning in the README or changelog, but piper1-gpl embeds [espeak-ng](https://github.com/espeak-ng/espeak-ng) for phonemization, and espeak-ng is itself licensed under GPL-3.0 — a plausible explanation for the relicensing, though PromptQuorum could not confirm this as the stated reason from an official source. As of publication, the project\'s own README states the Open Home Foundation is looking for additional maintainers for Piper.',
        ],
        faqs: [
          {
            q: 'Who created Piper?',
            a: 'Piper was created by Michael Hansen within the Rhasspy open-source voice-assistant project. Development later moved to a new repository, OHF-Voice/piper1-gpl, maintained by the Open Home Foundation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What Piper Actually Does',
        content: [
          'Piper converts written text into spoken audio using a neural text-to-speech pipeline: text is converted to phonemes via espeak-ng, then a trained voice model synthesizes a waveform from those phonemes, running on ONNX Runtime for speed.',
        ],
        items: [
          '**Command-line synthesis.** Run `python3 -m piper` with a downloaded voice model to synthesize a WAV file or stream audio directly to your speakers.',
          '**Python API.** Load a voice with `PiperVoice.load()` and call `.synthesize_wav()` or the streaming `.synthesize()` generator from your own Python application.',
          '**HTTP web server mode.** Piper can run as a persistent web server so voice models stay loaded in memory, avoiding the reload cost of the CLI on every call — recommended for repeated or production use.',
          '**C/C++ API (libpiper).** A native C++ library and CLI, ported from the legacy Piper repository, for embedding Piper in non-Python applications.',
          '**Raw phoneme injection.** Wrapping text in `[[ ... ]]` lets you pass IPA phonemes (from `espeak-ng --ipa=3`) directly, useful for correcting mispronounced names or technical terms.',
          '**Optional GPU acceleration.** Passing `--cuda` (CLI) or `use_cuda=True` (Python) enables CUDA acceleration via the `onnxruntime-gpu` package, though Piper is designed to run acceptably fast on CPU alone.',
          '**Community-trained multilingual voices.** Dozens of languages and regional variants are available as separately downloaded voice models, distributed via [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main); voice quality varies by voice since they are trained by different community contributors.',
        ],
        note: 'Piper is a text-to-speech engine, not a voice-cloning tool — its voices are pre-trained models you download and select, not created on the fly from a short reference audio clip. For that, see the voice-cloning alternatives in the Alternatives section below.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Install and Run Piper: Step by Step',
        content: 'This walkthrough installs Piper via pip and runs a first synthesis, using the syntax documented in the project\'s own CLI and Python API docs.',
        numberedItems: [
          {
            title: 'Install Piper.',
            whyItMatters: 'Run `pip install piper-tts` in a Python environment (Python 3.9+ recommended). This installs the `piper` package and its ONNX Runtime dependency; no GPU or CUDA setup is required for CPU-only use.',
          },
          {
            title: 'List and download a voice.',
            whyItMatters: 'Run `python3 -m piper.download_voices` with no arguments to list available voices, then `python3 -m piper.download_voices en_US-lessac-medium` to download a specific one to the current directory.',
          },
          {
            title: 'Synthesize speech from the command line.',
            whyItMatters: 'Run `python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` to write a WAV file. If you have `ffplay` installed, drop the `-f` flag to hear the audio immediately instead of saving it.',
          },
          {
            title: '(Optional) Use the Python API instead of the CLI.',
            whyItMatters: 'For repeated use inside an application, `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` then `voice.synthesize_wav(text, wav_file)` avoids the CLI\'s per-call startup cost.',
          },
          {
            title: '(Optional) Enable GPU acceleration.',
            whyItMatters: 'Install the `onnxruntime-gpu` package, then pass `--cuda` on the CLI or `use_cuda=True` to `PiperVoice.load()` in Python. This is optional — Piper is designed to run in real time on CPU alone.',
          },
          {
            title: '(Optional) Run the web server for repeated use.',
            whyItMatters: 'For a production or repeated-use setup, run Piper\'s HTTP web server mode so the voice model stays loaded in memory instead of reloading on every CLI invocation.',
          },
          {
            title: '(Optional) Fix a mispronounced word with raw phonemes.',
            whyItMatters: 'Get the IPA phonemes for a word with `espeak-ng -v en-us --ipa=3 -q <word>`, then wrap them in `[[ ... ]]` inside your input text to override Piper\'s automatic pronunciation for that word.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'Beyond the basic install walkthrough above, these are common real-world usage patterns from the project\'s own documentation.',
        ],
        codeBlock: `# Command line: write a WAV file
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# Command line: play audio immediately (requires ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# Python API
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# Python API: adjust synthesis (speed, volume, expressiveness)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # half as loud
    length_scale=2.0,  # twice as slow
    noise_scale=1.0,   # more audio variation
    noise_w_scale=1.0, # more speaking variation
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# Python API: GPU acceleration (requires onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# Python API: streaming synthesis
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'The parameters shown here (`--cuda`, `SynthesisConfig`, `use_cuda`, the streaming `synthesize()` generator) are documented in the project\'s docs/CLI.md and docs/API_PYTHON.md on GitHub. Check the current documentation before deploying to production, since options can change between releases.',
        items: [
          '**Raw phoneme injection** for correcting pronunciation: wrap text like `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` using IPA phonemes obtained from `espeak-ng -v en-us --ipa=3 -q <word>`.',
          '**libpiper C/C++ API** exposes `piper_create()` (or `piper_create_with_options()` for finer control) for embedding Piper directly in a native application without a Python runtime.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Cost',
        content: [
          '**The actively maintained Piper repository, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), is licensed under GPL-3.0-or-later**, confirmed via the `piper-tts` package\'s published metadata on [PyPI](https://pypi.org/project/piper-tts/). This is a change from the original [rhasspy/piper](https://github.com/rhasspy/piper) repository, which was MIT-licensed before it was archived on October 6, 2025 and remains available under that MIT license, unmaintained.',
          '**GPL-3.0 is a copyleft license, which is meaningfully different from MIT for commercial use.** You can use Piper for free, including commercially, to generate speech. But GPL-3.0 requires that if you distribute a modified version of Piper\'s own source code — for example, a fork bundled or statically linked into your product — you must release that modified source under the same GPL-3.0 terms. Using Piper as an unmodified external tool (calling its CLI, its Python package, or its web server as a separate process) generally does not place your own application\'s other source code under GPL, but the exact boundary depends on how tightly your code is linked with Piper\'s. This paragraph explains the license\'s general shape; it is not legal advice — check with a lawyer for your specific deployment before shipping a commercial product built on Piper.',
          '**There is no paid tier, subscription, or license fee for Piper itself.** The only costs are the hardware you run it on and your own development time. Voice models are downloaded separately from a shared [Hugging Face repository](https://huggingface.co/rhasspy/piper-voices/tree/main); check the license noted for each individual voice before redistributing it, since voices are contributed by different community members and are not guaranteed to share the same license as the Piper codebase.',
        ],
        faqs: [
          {
            q: 'What license does Piper use?',
            a: 'The actively maintained Piper repository (OHF-Voice/piper1-gpl) is licensed under GPL-3.0-or-later. The original, now-archived rhasspy/piper repository was licensed under MIT. This is a real difference for commercial use — GPL-3.0 requires releasing modifications to Piper\'s own source code under the same license if you distribute them, while MIT did not.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What Piper Is Not Good For',
        content: [
          'Piper is a fast, general-purpose local text-to-speech engine, not a voice-cloning or expressive-speech tool. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Expressive, emotional, or few-second voice cloning.** Piper synthesizes speech from pre-trained voice models, not from a short reference audio clip of a specific person. If you need to clone a voice from a few seconds of sample audio, or want more emotionally expressive delivery, [XTTS v2](https://huggingface.co/coqui/XTTS-v2) is built for that instead — see PromptQuorum\'s [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) for its (non-commercial) license terms.',
          '**Multi-speaker cloning from a short sample.** Similarly, Piper has no built-in mechanism to generate a new voice on the fly from an audio sample of a specific speaker; each voice is a separately trained and distributed model.',
          '**GPL-3.0 copyleft obligations in a closed-source product.** If your use case involves modifying and redistributing Piper\'s own source code inside a closed-source binary, the GPL-3.0-or-later license of the current repository is a real constraint that the original MIT-licensed repository did not have. Review the License and Cost section above and consult a lawyer before that kind of deployment.',
          '**Guaranteed consistent voice quality across all languages.** Because voices are trained and contributed by different community members, quality varies noticeably by language and by specific voice — check samples for your target language before committing to Piper for a production application.',
          '**Long-term maintenance certainty.** As of publication, the project\'s own README states the Open Home Foundation is looking for additional maintainers for Piper, which is worth factoring into a decision to build critical infrastructure on top of it.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Piper',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'Best fit': 'Flexible multi-backend toolkit (VITS, Tacotron2, XTTS) with broad language support',
            'License': 'MPL-2.0',
          },
          {
            'Tool': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'Best fit': 'Voice cloning from a few seconds of reference audio, across 17 languages',
            'License': 'CPML (non-commercial)',
          },
          {
            'Tool': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Best fit': 'Highest natural-sounding English narration quality (no voice cloning)',
            'License': 'MIT',
          },
          {
            'Tool': '[Bark](https://github.com/suno-ai/bark)',
            'Best fit': 'Expressive, non-speech audio — laughter, sighs, ambient sound',
            'License': 'MIT',
          },
          {
            'Tool': '[ElevenLabs](https://elevenlabs.io)',
            'Best fit': 'Managed cloud API for teams that prefer not to self-host, with commercial voice cloning',
            'License': 'Proprietary (paid cloud API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Piper?',
            a: 'Piper is a free, local neural text-to-speech engine created within the Rhasspy voice-assistant project by Michael Hansen, now maintained by the Open Home Foundation, that converts text to spoken audio fast enough to run in real time on CPU-only hardware.',
          },
          {
            q: 'Is Piper free?',
            a: 'Yes. Piper has no paid tier, subscription, or license fee. It is currently licensed under GPL-3.0-or-later, which is free to use but places conditions on distributing modified versions of Piper\'s own source code — see the License and Cost section for details.',
          },
          {
            q: 'Do I need a GPU to run Piper?',
            a: 'No. Piper is designed to run in real time on CPU-only hardware, including a Raspberry Pi. Optional CUDA GPU acceleration is available via the onnxruntime-gpu package for higher throughput.',
          },
          {
            q: 'What is the difference between rhasspy/piper and OHF-Voice/piper1-gpl?',
            a: 'rhasspy/piper is the original repository, created within the Rhasspy project and licensed under MIT; it was archived (made read-only) on October 6, 2025. OHF-Voice/piper1-gpl is the actively maintained successor repository, created March 28, 2025 under the Open Home Foundation, and licensed under GPL-3.0-or-later instead of MIT.',
          },
          {
            q: 'Can Piper clone a specific person\'s voice?',
            a: 'Not from a short audio sample. Piper synthesizes speech using pre-trained voice models you download and select; it does not clone a new voice on the fly from a few seconds of reference audio. For that, see XTTS v2, which is built specifically for few-second voice cloning.',
          },
          {
            q: 'Is Piper used in Home Assistant?',
            a: 'Yes. Piper is the default local text-to-speech engine in Home Assistant\'s voice assistant pipeline, maintained by the Open Home Foundation, the same nonprofit organization that stewards Home Assistant.',
          },
          {
            q: 'Who maintains Piper today?',
            a: 'Piper is maintained under the Open Home Foundation at the OHF-Voice/piper1-gpl repository, after development moved there from the original Rhasspy-hosted repository in 2025. The project\'s own README states the Open Home Foundation is currently looking for additional maintainers.',
          },
          {
            q: 'What is the latest Piper release?',
            a: 'The latest stable release is v1.8.0, published September 4, 2026, per the project\'s GitHub releases page.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Piper remains one of the fastest ways to get real local text-to-speech running on modest hardware — its CPU-only, real-time performance is what made it the default voice for Home Assistant, and that has not changed under its new maintainers. What has changed, and what every reader evaluating it in 2026 needs to know, is the license: the actively maintained repository moved from MIT to GPL-3.0-or-later when development shifted to the Open Home Foundation in 2025, a real difference for anyone planning to embed and redistribute modified Piper source code in a closed-source product. It remains free to use, well documented, and actively released (v1.8.0 as of September 2026), though its own maintainers are openly seeking more help. For fast, offline, general-purpose speech synthesis on CPU-class hardware, Piper is a well-verified, no-cost choice — for expressive few-second voice cloning, pair this review with PromptQuorum\'s coverage of [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) or compare against the managed cloud alternative in the [ElevenLabs vs. local TTS comparison](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OHF-Voice/piper1-gpl on GitHub](https://github.com/OHF-Voice/piper1-gpl) — the actively maintained repository: README, docs, license, and release history.',
          '[piper-tts on PyPI](https://pypi.org/project/piper-tts/) — published package metadata, including the current GPL-3.0-or-later license.',
          '[rhasspy/piper on GitHub](https://github.com/rhasspy/piper) — the original, now-archived repository (MIT license).',
          '[piper1-gpl releases](https://github.com/OHF-Voice/piper1-gpl/releases) — version history, including v1.8.0 (September 4, 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — the nonprofit organization maintaining Piper and Home Assistant.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local TTS & Voice Cloning Licenses: Piper, XTTS v2, F5-TTS and Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — the licensing deep dive across all major local TTS engines.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — the cloud-vs-local comparison for readers deciding whether to self-host.',
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — connect Piper to a local LLM and a Whisper-based STT engine into a complete voice pipeline.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the local speech-to-text counterpart, reviewed in the same depth.',
          '[faster-whisper Review](/power-local-llm/faster-whisper-review) — the CTranslate2-based speech-to-text alternative, reviewed in the same depth.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS Review (2026): Fast, Local Neural Text-to-Speech',
      description:
        'Piper TTS review: the free, local neural text-to-speech engine from the Rhasspy project, now maintained by the Open Home Foundation. History, install steps, real commands, current GPL-3.0 license, and when to use XTTS v2 instead.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'en',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, offline text-to-speech tools' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Text-to-speech' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS Review (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-de.webp',
    title: 'Piper TTS im Test (2026): Schnelle, lokale neuronale Sprachsynthese',
    seoTitle: 'Piper TTS im Test 2026: Schnelle lokale TTS',
    intro:
      'Piper ist eine kostenlose, lokale neuronale Text-zu-Sprache-Engine, die Text vollständig auf dem eigenen Gerät in gesprochenes Audio umwandelt. Ursprünglich wurde Piper innerhalb des Open-Source-Sprachassistenten-Projekts [Rhasspy](https://github.com/rhasspy) von Michael Hansen entwickelt. 2025 zog die aktive Entwicklung in ein neues Repository um: [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), gepflegt von der [Open Home Foundation](https://www.openhomefoundation.org/) — der gemeinnützigen Organisation hinter Home Assistant. Das ursprüngliche Repository [rhasspy/piper](https://github.com/rhasspy/piper) wurde am 6. Oktober 2025 archiviert (nur noch lesbar). Dieser Test behandelt diese Geschichte, echte Installations- und Nutzungsbefehle, die aktuelle Lizenz (die von MIT auf GPL-3.0-or-later wechselte) und die Grenzen von Piper — inklusive Verweis auf PromptQuorums Lizenz-Deep-Dive und den Vergleich mit ElevenLabs.',
    metaDescription:
      'Piper TTS im Test: die kostenlose, lokale neuronale Text-zu-Sprache-Engine aus dem Rhasspy-Projekt, heute von der Open Home Foundation gepflegt. Geschichte, Installation, echte Befehle, aktuelle GPL-3.0-Lizenz und wann XTTS v2 die bessere Wahl ist.',
    twitterDescription:
      'Piper TTS im Test 2026: schnelle, lokale, sogar auf einem Raspberry Pi echtzeitfähige neuronale Sprachsynthese, entwickelt von Michael Hansen und heute von der Open Home Foundation gepflegt. Echte Installationsbefehle, der GPL-3.0-Lizenzwechsel 2025 und ehrliche Grenzen.',
    audience:
      'Entwickler und Hobbyisten, die lokale Sprachassistenten, Barrierefreiheits-Tools oder Offline-Apps bauen und schnelle Sprachsynthese ohne Cloud-API, GPU oder Kosten pro Zeichen benötigen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS im Test',
    targetKeywords: [
      'piper tts test',
      'piper tts',
      'piper tts installieren',
      'piper tts python',
      'piper tts lizenz',
      'ohf-voice piper1-gpl',
      'lokale neuronale sprachsynthese',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper ist eine kostenlose, lokale neuronale Text-zu-Sprache-Engine, die innerhalb des Rhasspy-Sprachassistenten-Projekts von Michael Hansen entstand und heute von der Open Home Foundation unter [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) gepflegt wird — schnell genug, um in Echtzeit auf reiner CPU-Hardware wie einem Raspberry Pi zu laufen.** Installation mit `pip install piper-tts`. Seit 2025 steht das aktiv gepflegte Repository unter der Lizenz GPL-3.0-or-later — ein Wechsel gegenüber der MIT-Lizenz des ursprünglichen, heute archivierten Repositories `rhasspy/piper`. Für einen Lizenz-Deep-Dive über Piper, Coqui TTS, XTTS v2, F5-TTS, Bark und StyleTTS 2 siehe PromptQuorums [Leitfaden zu lokalen TTS-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'Was ist Piper TTS und wird es noch gepflegt?',
        answer:
          'Piper lohnt sich, wenn Sie schnelle, vollständig lokale Sprachsynthese wollen, die auf reiner CPU-Hardware läuft — einschließlich eines Raspberry Pi — ohne Text an eine Cloud-API zu senden. Es entstand innerhalb des Open-Source-Sprachassistenten-Projekts Rhasspy durch Michael Hansen und ist vor allem als Standard-TTS-Engine in der Sprachpipeline von Home Assistant bekannt. Ja, es wird weiterhin gepflegt: Nachdem das ursprüngliche Repository rhasspy/piper am 6. Oktober 2025 archiviert wurde, läuft die aktive Entwicklung in einem neuen Repository weiter, OHF-Voice/piper1-gpl, unter der Open Home Foundation. Der wichtigste Unterschied betrifft die Lizenz — das aktiv gepflegte Repository steht unter GPL-3.0-or-later statt der ursprünglichen MIT-Lizenz, und die README des Projekts sucht derzeit ausdrücklich weitere Maintainer. Wählen Sie stattdessen XTTS v2, wenn Sie ausdrucksstarkes, emotionales Voice-Cloning aus wenigen Sekunden Audio benötigen — Pipers Stimmen sind vortrainiert, nicht aus einer kurzen Audioprobe geklont.',
        bullets: [
          'Entstanden innerhalb des Rhasspy-Sprachassistenten-Projekts durch Michael Hansen; ursprüngliches Repository am 6. Oktober 2025 archiviert.',
          'Aktive Entwicklung heute unter der Open Home Foundation bei OHF-Voice/piper1-gpl, erstellt am 28. März 2025.',
          'Lizenzwechsel von MIT (archiviertes Repository) zu GPL-3.0-or-later (aktuelles Repository) — vor dem Einbau in ein Closed-Source-Produkt prüfen.',
          'Kostenlos, keine Bezahlstufe; läuft in Echtzeit auf reiner CPU-Hardware inklusive Raspberry Pi, optionale CUDA-GPU-Beschleunigung.',
          'Aktuelle Version: v1.8.0, veröffentlicht am 4. September 2026, laut der GitHub-Releases-Seite des Projekts.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Von Rhasspy zur Open Home Foundation', anchor: 'history' },
      { label: 'Was Piper tatsächlich leistet', anchor: 'what-it-does' },
      { label: 'Piper installieren und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Anwendungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und Kosten', anchor: 'license-cost' },
      { label: 'Wofür Piper nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu Piper', anchor: 'alternatives' },
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
            text: 'Piper ist eine kostenlose, lokale neuronale Text-zu-Sprache-Engine, die ursprünglich innerhalb des Rhasspy-Sprachassistenten-Projekts von Michael Hansen entstand und heute von der Open Home Foundation gepflegt wird — schnell genug für Echtzeitsprache auf reiner CPU-Hardware wie einem Raspberry Pi — und deren Lizenz 2025 beim Umzug in ein neues Repository von MIT auf GPL-3.0-or-later wechselte.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein Programm, das Sie per `pip install` installieren und das getippten Text auf dem eigenen Gerät in gesprochenes Audio verwandelt — kein Cloud-Konto, keine Internetverbindung nötig, und es läuft schnell genug für Echtzeitsprache selbst auf sehr bescheidener Hardware.',
          },
        ],
        items: [
          'Entstanden innerhalb des Rhasspy-Sprachassistenten-Projekts durch Michael Hansen.',
          'Ursprüngliches Repository rhasspy/piper am 6. Oktober 2025 archiviert (nur lesbar), unter der MIT-Lizenz.',
          'Aktive Entwicklung heute bei OHF-Voice/piper1-gpl (erstellt am 28. März 2025), unter der Open Home Foundation, der gemeinnützigen Organisation hinter Home Assistant.',
          'Aktuelle Lizenz: GPL-3.0-or-later — ein Wechsel gegenüber der MIT-Lizenz des archivierten Repositories.',
          'Kostenlos, keine Bezahlstufe; Echtzeit-CPU-Inferenz, optionale CUDA-GPU-Beschleunigung.',
          'Aktuelle Version: v1.8.0, veröffentlicht am 4. September 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Lizenz hat sich 2025 geändert. Wer Piper vor diesem Zeitpunkt unter der Annahme geprüft hat, es sei MIT-lizenziert, sollte das vor dem Einsatz des aktuell gepflegten Repositories in einem Closed-Source-Produkt erneut prüfen — siehe Abschnitt Lizenz und Kosten unten.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Von Rhasspy zur Open Home Foundation',
        content: [
          '**Piper entstand innerhalb von Rhasspy**, einem Open-Source-Toolkit für vollständig offline arbeitende Sprachassistenten, wo Michael Hansen es als schnelle, lokale Text-zu-Sprache-Engine baute, um sie mit Rhasspys lokaler Spracherkennung zu kombinieren — und so den Umweg über eine Cloud-TTS-API bei jeder gesprochenen Antwort zu vermeiden. Piper nutzt eine neuronale, VITS-artige Text-zu-Wellenform-Architektur: Text wird zunächst in Phoneme umgewandelt (mit [espeak-ng](https://github.com/espeak-ng/espeak-ng)), dann synthetisiert ein für [ONNX Runtime](https://onnxruntime.ai/) exportiertes Modell direkt aus diesen Phonemen eine Wellenform — schnell genug auch auf reiner CPU-Hardware.',
          '**Das ursprüngliche Repository, [rhasspy/piper](https://github.com/rhasspy/piper), wuchs zu einer der meistgenutzten lokalen TTS-Engines** im Open-Source-Bereich für Heimautomatisierung und Barrierefreiheit heran und sammelte unter seiner MIT-Lizenz über 11.000 GitHub-Sterne. Es wurde zur Standard-Text-zu-Sprache-Engine in der Sprachpipeline von [Home Assistant](https://www.home-assistant.io/).',
          '**2025 zog die aktive Entwicklung in ein neues Repository um.** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) wurde am 28. März 2025 unter der Open Home Foundation erstellt — der gemeinnützigen Organisation, die auch Home Assistant betreut. Das ursprüngliche Repository rhasspy/piper wurde in der Folge am 6. Oktober 2025 archiviert (nur noch lesbar); es bleibt unter seiner ursprünglichen MIT-Lizenz verfügbar, erhält aber keine weiteren Updates mehr.',
          '**Das neue Repository trägt eine andere Lizenz: GPL-3.0-or-later** statt der ursprünglichen MIT-Lizenz. Das Projekt nennt in README oder Changelog keinen Grund dafür, aber piper1-gpl bindet [espeak-ng](https://github.com/espeak-ng/espeak-ng) zur Phonemisierung ein, und espeak-ng selbst steht unter GPL-3.0 — eine plausible Erklärung für den Lizenzwechsel, die PromptQuorum jedoch nicht als offiziell genannten Grund bestätigen konnte. Zum Zeitpunkt der Veröffentlichung dieses Artikels gibt die README des Projekts an, dass die Open Home Foundation weitere Maintainer für Piper sucht.',
        ],
        faqs: [
          {
            q: 'Wer hat Piper entwickelt?',
            a: 'Piper wurde von Michael Hansen innerhalb des Open-Source-Sprachassistenten-Projekts Rhasspy entwickelt. Die Entwicklung zog später in ein neues Repository um, OHF-Voice/piper1-gpl, das von der Open Home Foundation gepflegt wird.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was Piper tatsächlich leistet',
        content: [
          'Piper wandelt geschriebenen Text mit einer neuronalen Text-zu-Sprache-Pipeline in gesprochenes Audio um: Text wird über espeak-ng in Phoneme umgewandelt, dann synthetisiert ein trainiertes Stimmmodell aus diesen Phonemen eine Wellenform — ausgeführt auf ONNX Runtime für Geschwindigkeit.',
        ],
        items: [
          '**Sprachsynthese über die Kommandozeile.** Mit `python3 -m piper` und einem heruntergeladenen Stimmmodell lässt sich eine WAV-Datei erzeugen oder Audio direkt an die Lautsprecher streamen.',
          '**Python-API.** Eine Stimme mit `PiperVoice.load()` laden und `.synthesize_wav()` oder den streamenden `.synthesize()`-Generator aus der eigenen Python-Anwendung heraus aufrufen.',
          '**HTTP-Webserver-Modus.** Piper kann als dauerhaft laufender Webserver betrieben werden, sodass Stimmmodelle im Speicher bleiben und die Ladezeit der Kommandozeile bei jedem Aufruf entfällt — empfohlen für wiederholte oder produktive Nutzung.',
          '**C/C++-API (libpiper).** Eine native C++-Bibliothek samt Kommandozeile, portiert aus dem alten Piper-Repository, zum Einbetten von Piper in Nicht-Python-Anwendungen.',
          '**Direkte Phonem-Eingabe.** Text in `[[ ... ]]` eingebettet erlaubt es, IPA-Phoneme (von `espeak-ng --ipa=3`) direkt zu übergeben — nützlich, um falsch ausgesprochene Namen oder Fachbegriffe zu korrigieren.',
          '**Optionale GPU-Beschleunigung.** `--cuda` (Kommandozeile) oder `use_cuda=True` (Python) aktiviert CUDA-Beschleunigung über das Paket `onnxruntime-gpu`, obwohl Piper darauf ausgelegt ist, auch allein auf der CPU akzeptabel schnell zu laufen.',
          '**Community-trainierte, mehrsprachige Stimmen.** Dutzende Sprachen und regionale Varianten stehen als separat herunterladbare Stimmmodelle über [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main) bereit; die Stimmqualität variiert, da die Stimmen von unterschiedlichen Community-Mitgliedern trainiert werden.',
        ],
        note: 'Piper ist eine Text-zu-Sprache-Engine, kein Voice-Cloning-Werkzeug — seine Stimmen sind vortrainierte Modelle, die man herunterlädt und auswählt, nicht auf die Schnelle aus einer kurzen Referenzaufnahme erzeugt. Voice-Cloning-Alternativen finden Sie im Abschnitt Alternativen unten.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Piper installieren und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung installiert Piper per pip und führt eine erste Sprachsynthese aus, gemäß der in der eigenen CLI- und Python-API-Dokumentation des Projekts beschriebenen Syntax.',
        numberedItems: [
          {
            title: 'Piper installieren.',
            whyItMatters: '`pip install piper-tts` in einer Python-Umgebung ausführen (Python 3.9+ empfohlen). Damit werden das Paket `piper` und seine ONNX-Runtime-Abhängigkeit installiert; für reine CPU-Nutzung ist kein GPU- oder CUDA-Setup nötig.',
          },
          {
            title: 'Eine Stimme auflisten und herunterladen.',
            whyItMatters: '`python3 -m piper.download_voices` ohne Argumente ausführen, um verfügbare Stimmen aufzulisten, dann `python3 -m piper.download_voices en_US-lessac-medium`, um eine bestimmte Stimme in das aktuelle Verzeichnis herunterzuladen.',
          },
          {
            title: 'Sprache über die Kommandozeile synthetisieren.',
            whyItMatters: '`python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` ausführen, um eine WAV-Datei zu schreiben. Bei installiertem `ffplay` kann das Flag `-f` weggelassen werden, um das Audio sofort zu hören, statt es zu speichern.',
          },
          {
            title: '(Optional) Die Python-API statt der Kommandozeile nutzen.',
            whyItMatters: 'Für wiederholte Nutzung innerhalb einer Anwendung vermeidet `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` gefolgt von `voice.synthesize_wav(text, wav_file)` die Startkosten der Kommandozeile bei jedem Aufruf.',
          },
          {
            title: '(Optional) GPU-Beschleunigung aktivieren.',
            whyItMatters: 'Das Paket `onnxruntime-gpu` installieren, dann `--cuda` in der Kommandozeile oder `use_cuda=True` bei `PiperVoice.load()` in Python übergeben. Optional — Piper ist darauf ausgelegt, auch allein auf der CPU in Echtzeit zu laufen.',
          },
          {
            title: '(Optional) Den Webserver für wiederholte Nutzung ausführen.',
            whyItMatters: 'Für Produktions- oder Dauerbetrieb den HTTP-Webserver-Modus von Piper ausführen, damit das Stimmmodell im Speicher bleibt, statt bei jedem Kommandozeilenaufruf neu geladen zu werden.',
          },
          {
            title: '(Optional) Ein falsch ausgesprochenes Wort mit rohen Phonemen korrigieren.',
            whyItMatters: 'Die IPA-Phoneme eines Wortes mit `espeak-ng -v en-us --ipa=3 -q <Wort>` ermitteln, dann im Eingabetext in `[[ ... ]]` einbetten, um Pipers automatische Aussprache für dieses Wort zu überschreiben.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Anwendungsbeispiele',
        content: [
          'Über die grundlegende Installationsanleitung oben hinaus sind dies gängige Nutzungsmuster aus der eigenen Dokumentation des Projekts.',
        ],
        codeBlock: `# Kommandozeile: WAV-Datei schreiben
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# Kommandozeile: Audio sofort abspielen (benötigt ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# Python-API
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# Python-API: Synthese anpassen (Tempo, Lautstärke, Ausdruck)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # halb so laut
    length_scale=2.0,  # doppelt so langsam
    noise_scale=1.0,   # mehr Audiovariation
    noise_w_scale=1.0, # mehr Sprechvariation
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# Python-API: GPU-Beschleunigung (benötigt onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# Python-API: Streaming-Synthese
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'Die hier gezeigten Parameter (`--cuda`, `SynthesisConfig`, `use_cuda`, der streamende `synthesize()`-Generator) sind in docs/CLI.md und docs/API_PYTHON.md des Projekts auf GitHub dokumentiert. Vor dem Produktiveinsatz die aktuelle Dokumentation prüfen, da sich Optionen zwischen Versionen ändern können.',
        items: [
          '**Direkte Phonem-Eingabe** zur Korrektur der Aussprache: Text wie `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` mit IPA-Phonemen aus `espeak-ng -v en-us --ipa=3 -q <Wort>`.',
          '**libpiper C/C++-API** stellt `piper_create()` (oder `piper_create_with_options()` für feinere Kontrolle) bereit, um Piper direkt in eine native Anwendung ohne Python-Laufzeit einzubetten.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und Kosten',
        content: [
          '**Das aktiv gepflegte Piper-Repository [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) steht unter der Lizenz GPL-3.0-or-later**, bestätigt durch die veröffentlichten Metadaten des Pakets `piper-tts` auf [PyPI](https://pypi.org/project/piper-tts/). Das ist ein Wechsel gegenüber dem ursprünglichen Repository [rhasspy/piper](https://github.com/rhasspy/piper), das vor seiner Archivierung am 6. Oktober 2025 unter MIT-Lizenz stand und unter dieser MIT-Lizenz weiterhin verfügbar, aber unmaintained bleibt.',
          '**GPL-3.0 ist eine Copyleft-Lizenz, die sich für die kommerzielle Nutzung deutlich von MIT unterscheidet.** Piper darf kostenlos genutzt werden, auch kommerziell, um Sprache zu erzeugen. GPL-3.0 verlangt aber, dass eine modifizierte Version von Pipers eigenem Quellcode — etwa ein Fork, der in das eigene Produkt eingebunden oder statisch gelinkt wird — bei Weitergabe unter denselben GPL-3.0-Bedingungen freigegeben werden muss. Die unveränderte Nutzung von Piper als externes Werkzeug (Aufruf der CLI, des Python-Pakets oder des Webservers als separater Prozess) stellt die eigene übrige Anwendung in der Regel nicht unter GPL, aber die genaue Grenze hängt davon ab, wie eng der eigene Code mit Pipers Code verknüpft ist. Dieser Absatz erläutert die grundsätzliche Form der Lizenz; er ist keine Rechtsberatung — vor dem Versand eines kommerziellen, auf Piper aufbauenden Produkts einen Anwalt konsultieren.',
          '**Für Piper selbst gibt es keine Bezahlstufe, kein Abonnement und keine Lizenzgebühr.** Die einzigen Kosten sind die Hardware, auf der es läuft, sowie die eigene Entwicklungszeit. Stimmmodelle werden separat aus einem gemeinsamen [Hugging-Face-Repository](https://huggingface.co/rhasspy/piper-voices/tree/main) heruntergeladen; vor einer Weitergabe die für jede einzelne Stimme angegebene Lizenz prüfen, da die Stimmen von unterschiedlichen Community-Mitgliedern beigesteuert werden und nicht garantiert dieselbe Lizenz wie der Piper-Code tragen.',
        ],
        faqs: [
          {
            q: 'Unter welcher Lizenz steht Piper?',
            a: 'Das aktiv gepflegte Piper-Repository (OHF-Voice/piper1-gpl) steht unter GPL-3.0-or-later. Das ursprüngliche, heute archivierte Repository rhasspy/piper stand unter MIT. Das ist ein realer Unterschied für die kommerzielle Nutzung — GPL-3.0 verlangt bei Weitergabe modifizierter Versionen von Pipers eigenem Quellcode dieselbe Lizenz, während MIT das nicht tat.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür Piper nicht geeignet ist',
        content: [
          'Piper ist eine schnelle, universelle lokale Text-zu-Sprache-Engine, kein Voice-Cloning- oder Ausdrucks-Sprachwerkzeug. In folgenden Fällen ist es das falsche Werkzeug:',
        ],
        items: [
          '**Ausdrucksstarkes, emotionales oder Voice-Cloning aus wenigen Sekunden.** Piper synthetisiert Sprache aus vortrainierten Stimmmodellen, nicht aus einer kurzen Referenzaufnahme einer bestimmten Person. Wer eine Stimme aus wenigen Sekunden Beispielaudio klonen oder ausdrucksstärkere Sprechweise möchte, findet in [XTTS v2](https://huggingface.co/coqui/XTTS-v2) das dafür gebaute Werkzeug — siehe PromptQuorums [Leitfaden zu lokalen TTS-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) für dessen (nicht-kommerzielle) Lizenzbedingungen.',
          '**Mehrsprecher-Cloning aus einer kurzen Probe.** Ebenso hat Piper keinen eingebauten Mechanismus, um aus einer Audioprobe eines bestimmten Sprechers spontan eine neue Stimme zu erzeugen; jede Stimme ist ein separat trainiertes und verteiltes Modell.',
          '**GPL-3.0-Copyleft-Pflichten in einem Closed-Source-Produkt.** Wer Pipers eigenen Quellcode modifizieren und in einer Closed-Source-Binärdatei weitergeben möchte, muss die GPL-3.0-or-later-Lizenz des aktuellen Repositories als echte Einschränkung berücksichtigen, die das ursprüngliche, MIT-lizenzierte Repository nicht hatte. Den obigen Abschnitt Lizenz und Kosten lesen und vor einem solchen Einsatz einen Anwalt konsultieren.',
          '**Garantiert einheitliche Stimmqualität über alle Sprachen hinweg.** Da Stimmen von unterschiedlichen Community-Mitgliedern trainiert und beigesteuert werden, variiert die Qualität spürbar je nach Sprache und Stimme — vor der Festlegung auf Piper für eine Produktivanwendung Samples der Zielsprache prüfen.',
          '**Langfristige Wartungssicherheit.** Zum Zeitpunkt der Veröffentlichung sucht die README des Projekts laut eigener Aussage weitere Maintainer für Piper bei der Open Home Foundation — ein Punkt, der bei der Entscheidung, kritische Infrastruktur darauf aufzubauen, mit einzubeziehen ist.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu Piper',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'Am besten für': 'Flexibles Multi-Backend-Toolkit (VITS, Tacotron2, XTTS) mit breiter Sprachunterstützung',
            'Lizenz': 'MPL-2.0',
          },
          {
            'Tool': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'Am besten für': 'Voice-Cloning aus wenigen Sekunden Referenzaudio, über 17 Sprachen hinweg',
            'Lizenz': 'CPML (nicht-kommerziell)',
          },
          {
            'Tool': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Am besten für': 'Höchste natürliche englische Erzählqualität (kein Voice-Cloning)',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[Bark](https://github.com/suno-ai/bark)',
            'Am besten für': 'Ausdrucksstarke Nicht-Sprach-Audios — Lachen, Seufzen, Umgebungsgeräusche',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[ElevenLabs](https://elevenlabs.io)',
            'Am besten für': 'Verwaltete Cloud-API für Teams ohne eigenes Hosting, mit kommerziellem Voice-Cloning',
            'Lizenz': 'Proprietär (bezahlte Cloud-API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Piper?',
            a: 'Piper ist eine kostenlose, lokale neuronale Text-zu-Sprache-Engine, die innerhalb des Rhasspy-Sprachassistenten-Projekts von Michael Hansen entstand und heute von der Open Home Foundation gepflegt wird — schnell genug, um in Echtzeit auf reiner CPU-Hardware zu laufen.',
          },
          {
            q: 'Ist Piper kostenlos?',
            a: 'Ja. Piper hat keine Bezahlstufe, kein Abonnement und keine Lizenzgebühr. Es steht derzeit unter GPL-3.0-or-later, was die Nutzung kostenlos erlaubt, aber Bedingungen an die Weitergabe modifizierter Versionen von Pipers eigenem Quellcode knüpft — Details im Abschnitt Lizenz und Kosten.',
          },
          {
            q: 'Brauche ich eine GPU, um Piper auszuführen?',
            a: 'Nein. Piper ist darauf ausgelegt, in Echtzeit auf reiner CPU-Hardware zu laufen, einschließlich eines Raspberry Pi. Optionale CUDA-GPU-Beschleunigung ist über das Paket onnxruntime-gpu für höheren Durchsatz verfügbar.',
          },
          {
            q: 'Was ist der Unterschied zwischen rhasspy/piper und OHF-Voice/piper1-gpl?',
            a: 'rhasspy/piper ist das ursprüngliche, innerhalb des Rhasspy-Projekts entstandene und unter MIT lizenzierte Repository; es wurde am 6. Oktober 2025 archiviert (nur lesbar). OHF-Voice/piper1-gpl ist das aktiv gepflegte Nachfolge-Repository, erstellt am 28. März 2025 unter der Open Home Foundation, und steht unter GPL-3.0-or-later statt MIT.',
          },
          {
            q: 'Kann Piper die Stimme einer bestimmten Person klonen?',
            a: 'Nicht aus einer kurzen Audioprobe. Piper synthetisiert Sprache mit vortrainierten Stimmmodellen, die man herunterlädt und auswählt; es klont keine neue Stimme spontan aus wenigen Sekunden Referenzaudio. Dafür ist XTTS v2 gebaut, speziell für Voice-Cloning aus wenigen Sekunden.',
          },
          {
            q: 'Wird Piper in Home Assistant eingesetzt?',
            a: 'Ja. Piper ist die Standard-lokale-Text-zu-Sprache-Engine in der Sprachassistenten-Pipeline von Home Assistant, gepflegt von der Open Home Foundation — derselben gemeinnützigen Organisation, die auch Home Assistant betreut.',
          },
          {
            q: 'Wer pflegt Piper heute?',
            a: 'Piper wird bei der Open Home Foundation im Repository OHF-Voice/piper1-gpl gepflegt, nachdem die Entwicklung 2025 vom ursprünglichen, bei Rhasspy gehosteten Repository dorthin umgezogen ist. Die README des Projekts gibt an, dass die Open Home Foundation derzeit weitere Maintainer sucht.',
          },
          {
            q: 'Was ist die aktuellste Piper-Version?',
            a: 'Die aktuelle stabile Version ist v1.8.0, veröffentlicht am 4. September 2026, laut der GitHub-Releases-Seite des Projekts.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Piper bleibt eine der schnellsten Möglichkeiten, echte lokale Sprachsynthese auf bescheidener Hardware zum Laufen zu bringen — seine echtzeitfähige, reine CPU-Leistung machte es zur Standardstimme von Home Assistant, und daran hat sich unter den neuen Maintainern nichts geändert. Was sich geändert hat und was jeder, der Piper 2026 prüft, wissen muss, ist die Lizenz: Das aktiv gepflegte Repository wechselte 2025 beim Umzug zur Open Home Foundation von MIT auf GPL-3.0-or-later — ein realer Unterschied für alle, die modifizierten Piper-Quellcode in ein Closed-Source-Produkt einbauen und weitergeben wollen. Es bleibt kostenlos, gut dokumentiert und aktiv weiterentwickelt (v1.8.0 mit Stand September 2026), auch wenn die eigenen Maintainer offen um weitere Unterstützung bitten. Für schnelle, offline, universelle Sprachsynthese auf CPU-Hardware ist Piper eine gut verifizierte, kostenlose Wahl — für ausdrucksstarkes Voice-Cloning aus wenigen Sekunden lohnt sich der Blick auf PromptQuorums Abdeckung von [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) oder der Vergleich mit der verwalteten Cloud-Alternative im [Vergleich ElevenLabs vs. lokale TTS](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OHF-Voice/piper1-gpl auf GitHub](https://github.com/OHF-Voice/piper1-gpl) — das aktiv gepflegte Repository: README, Dokumentation, Lizenz und Versionshistorie.',
          '[piper-tts auf PyPI](https://pypi.org/project/piper-tts/) — veröffentlichte Paket-Metadaten, einschließlich der aktuellen GPL-3.0-or-later-Lizenz.',
          '[rhasspy/piper auf GitHub](https://github.com/rhasspy/piper) — das ursprüngliche, heute archivierte Repository (MIT-Lizenz).',
          '[piper1-gpl-Releases](https://github.com/OHF-Voice/piper1-gpl/releases) — Versionshistorie, einschließlich v1.8.0 (4. September 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — die gemeinnützige Organisation, die Piper und Home Assistant pflegt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale TTS- und Voice-Cloning-Lizenzen: Piper, XTTS v2, F5-TTS und Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — der Lizenz-Deep-Dive über alle wichtigen lokalen TTS-Engines.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — der Cloud-vs-lokal-Vergleich für alle, die über Self-Hosting entscheiden.',
          '[Einen vollständig offline Sprachassistenten bauen 2026](/power-local-llm/build-local-voice-assistant-2026) — Piper mit einem lokalen LLM und einer Whisper-basierten STT-Engine zu einer vollständigen Sprachpipeline verbinden.',
          '[Whisper.cpp im Test](/power-local-llm/whisper-cpp-review) — das lokale Spracherkennungs-Gegenstück, im selben Detailgrad getestet.',
          '[faster-whisper im Test](/power-local-llm/faster-whisper-review) — die CTranslate2-basierte Spracherkennungs-Alternative, im selben Detailgrad getestet.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS im Test (2026): Schnelle, lokale neuronale Sprachsynthese',
      description:
        'Piper TTS im Test: die kostenlose, lokale neuronale Text-zu-Sprache-Engine aus dem Rhasspy-Projekt, heute von der Open Home Foundation gepflegt. Geschichte, Installation, echte Befehle, aktuelle GPL-3.0-Lizenz und wann XTTS v2 die bessere Wahl ist.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'de',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, offline arbeitende Text-zu-Sprache-Werkzeuge evaluieren' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Text-zu-Sprache' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS im Test (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-fr.webp',
    title: 'Piper TTS : avis (2026) — synthèse vocale neuronale locale et rapide',
    seoTitle: 'Piper TTS : avis 2026 — TTS locale rapide',
    intro:
      'Piper est un moteur de synthèse vocale neuronale local et gratuit, qui transforme du texte en audio parlé entièrement sur votre propre appareil, créé à l\'origine au sein du projet open source d\'assistant vocal [Rhasspy](https://github.com/rhasspy) par Michael Hansen. En 2025, le développement actif a migré vers un nouveau dépôt, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), maintenu par l\'[Open Home Foundation](https://www.openhomefoundation.org/) — l\'organisation à but non lucratif derrière Home Assistant — et le dépôt d\'origine [rhasspy/piper](https://github.com/rhasspy/piper) a été archivé (passé en lecture seule) le 6 octobre 2025. Cet avis couvre cette histoire, de vraies commandes d\'installation et d\'utilisation, sa licence actuelle (passée de MIT à GPL-3.0-or-later) et les cas où Piper n\'est pas le bon outil — avec un lien vers le comparatif de licences de PromptQuorum et sa comparaison face à ElevenLabs.',
    metaDescription:
      'Piper TTS : avis — le moteur de synthèse vocale neuronale local et gratuit du projet Rhasspy, aujourd\'hui maintenu par l\'Open Home Foundation. Histoire, installation, vraies commandes, licence GPL-3.0 actuelle, et quand préférer XTTS v2.',
    twitterDescription:
      'Piper TTS : avis 2026 — synthèse vocale neuronale locale et rapide, fonctionnant en temps réel même sur un Raspberry Pi, créée par Michael Hansen et désormais maintenue par l\'Open Home Foundation. Vraies commandes d\'installation, changement de licence GPL-3.0 en 2025, limites honnêtes.',
    audience:
      'Développeurs et amateurs construisant des assistants vocaux locaux, des outils d\'accessibilité ou des applications hors ligne, qui ont besoin d\'une synthèse vocale rapide sans API cloud, sans GPU et sans coût au caractère.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS avis',
    targetKeywords: [
      'piper tts avis',
      'piper tts',
      'installer piper tts',
      'piper tts python',
      'licence piper tts',
      'ohf-voice piper1-gpl',
      'synthèse vocale neuronale locale',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper est un moteur de synthèse vocale neuronale local et gratuit, créé au sein du projet d\'assistant vocal Rhasspy par Michael Hansen, aujourd\'hui maintenu par l\'Open Home Foundation sur [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), assez rapide pour fonctionner en temps réel sur du matériel CPU seul comme un Raspberry Pi.** Installation avec `pip install piper-tts`. Depuis 2025, le dépôt activement maintenu est sous licence GPL-3.0-or-later — un changement par rapport à la licence MIT du dépôt d\'origine `rhasspy/piper`, désormais archivé. Pour un comparatif de licences entre Piper, Coqui TTS, XTTS v2, F5-TTS, Bark et StyleTTS 2, voir le [guide des licences TTS locales](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que Piper TTS et est-il encore maintenu ?',
        answer:
          'Piper vaut le détour si vous voulez une synthèse vocale rapide et entièrement locale, fonctionnant sur du matériel CPU seul — y compris un Raspberry Pi — sans envoyer de texte à une API cloud. Il a été créé au sein du projet open source d\'assistant vocal Rhasspy par Michael Hansen et est surtout connu comme le moteur TTS local par défaut du pipeline vocal de Home Assistant. Oui, il est toujours maintenu : après l\'archivage du dépôt d\'origine rhasspy/piper le 6 octobre 2025, le développement actif s\'est poursuivi sur un nouveau dépôt, OHF-Voice/piper1-gpl, sous l\'Open Home Foundation. Le point à connaître est la licence — le dépôt activement maintenu est sous GPL-3.0-or-later et non plus sous la licence MIT d\'origine, et le README du projet indique rechercher actuellement des mainteneurs supplémentaires. Préférez XTTS v2 si vous avez besoin d\'un clonage vocal expressif et émotionnel à partir de quelques secondes d\'audio ; les voix de Piper sont pré-entraînées, pas clonées à partir d\'un court échantillon.',
        bullets: [
          'Créé au sein du projet d\'assistant vocal Rhasspy par Michael Hansen ; dépôt d\'origine archivé le 6 octobre 2025.',
          'Développement actif désormais sous l\'Open Home Foundation, sur OHF-Voice/piper1-gpl, créé le 28 mars 2025.',
          'Changement de licence : de MIT (dépôt archivé) à GPL-3.0-or-later (dépôt actuel) — à vérifier avant d\'intégrer Piper dans un produit fermé.',
          'Gratuit, aucune offre payante ; fonctionne en temps réel sur du matériel CPU seul, y compris un Raspberry Pi, avec accélération GPU CUDA optionnelle.',
          'Dernière version : v1.8.0, publiée le 4 septembre 2026, selon la page des releases GitHub du projet.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : de Rhasspy à l\'Open Home Foundation', anchor: 'history' },
      { label: 'Ce que Piper fait réellement', anchor: 'what-it-does' },
      { label: 'Installer et exécuter Piper : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et coût', anchor: 'license-cost' },
      { label: 'Ce pour quoi Piper n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à Piper', anchor: 'alternatives' },
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
            text: 'Piper est un moteur de synthèse vocale neuronale local et gratuit, créé à l\'origine au sein du projet d\'assistant vocal Rhasspy par Michael Hansen et aujourd\'hui maintenu par l\'Open Home Foundation, assez rapide pour fonctionner en temps réel sur du matériel CPU seul comme un Raspberry Pi, et dont la licence est passée de MIT à GPL-3.0-or-later lors du transfert vers un nouveau dépôt en 2025.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un programme que l\'on installe avec `pip install` et qui transforme du texte tapé en audio parlé sur son propre appareil — pas de compte cloud, pas de connexion Internet nécessaire, et il tourne assez vite pour de la parole en temps réel même sur du matériel très modeste.',
          },
        ],
        items: [
          'Créé au sein du projet d\'assistant vocal Rhasspy par Michael Hansen.',
          'Dépôt d\'origine rhasspy/piper archivé (lecture seule) le 6 octobre 2025, sous licence MIT.',
          'Développement actif désormais sur OHF-Voice/piper1-gpl (créé le 28 mars 2025), sous l\'Open Home Foundation, l\'organisation à but non lucratif derrière Home Assistant.',
          'Licence actuelle : GPL-3.0-or-later — un changement par rapport à la licence MIT du dépôt archivé.',
          'Gratuit, aucune offre payante ; inférence CPU en temps réel, accélération GPU CUDA optionnelle.',
          'Dernière version : v1.8.0, publiée le 4 septembre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La licence a changé en 2025. Si vous avez évalué Piper avant cette date en pensant qu\'il était sous licence MIT, vérifiez à nouveau avant d\'utiliser le dépôt actuellement maintenu dans un produit fermé — voir la section Licence et coût ci-dessous.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : de Rhasspy à l\'Open Home Foundation',
        content: [
          '**Piper est né au sein de Rhasspy**, une boîte à outils open source pour construire des assistants vocaux entièrement hors ligne, où Michael Hansen l\'a conçu comme un moteur de synthèse vocale local et rapide à associer à la reconnaissance vocale locale de Rhasspy — évitant un aller-retour vers une API TTS cloud à chaque réponse parlée. Piper utilise une architecture neuronale texte-vers-forme-d\'onde de type VITS : le texte est d\'abord converti en phonèmes (via [espeak-ng](https://github.com/espeak-ng/espeak-ng)), puis un modèle exporté vers [ONNX Runtime](https://onnxruntime.ai/) synthétise directement une forme d\'onde à partir de ces phonèmes, pour une inférence rapide même sur du matériel CPU seul.',
          '**Le dépôt d\'origine, [rhasspy/piper](https://github.com/rhasspy/piper), est devenu l\'un des moteurs TTS locaux les plus utilisés** dans l\'écosystème open source de la domotique et de l\'accessibilité, accumulant plus de 11 000 étoiles GitHub sous sa licence MIT. Il est devenu le moteur de synthèse vocale locale par défaut du pipeline vocal de [Home Assistant](https://www.home-assistant.io/).',
          '**En 2025, le développement actif a migré vers un nouveau dépôt.** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) a été créé le 28 mars 2025, sous l\'Open Home Foundation — l\'organisation à but non lucratif qui gère aussi Home Assistant. Le dépôt d\'origine rhasspy/piper a ensuite été archivé (passé en lecture seule) le 6 octobre 2025 ; il reste disponible sous sa licence MIT d\'origine, mais ne reçoit plus de mises à jour.',
          '**Le nouveau dépôt porte une licence différente : GPL-3.0-or-later**, et non plus la licence MIT d\'origine. Le projet n\'explique pas cette raison dans son README ou son changelog, mais piper1-gpl intègre [espeak-ng](https://github.com/espeak-ng/espeak-ng) pour la phonémisation, et espeak-ng est lui-même sous licence GPL-3.0 — une explication plausible du changement de licence, que PromptQuorum n\'a toutefois pas pu confirmer comme raison officiellement énoncée. Au moment de la publication, le README du projet indique que l\'Open Home Foundation recherche des mainteneurs supplémentaires pour Piper.',
        ],
        faqs: [
          {
            q: 'Qui a créé Piper ?',
            a: 'Piper a été créé par Michael Hansen au sein du projet open source d\'assistant vocal Rhasspy. Le développement a ensuite migré vers un nouveau dépôt, OHF-Voice/piper1-gpl, maintenu par l\'Open Home Foundation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que Piper fait réellement',
        content: [
          'Piper convertit du texte écrit en audio parlé via un pipeline de synthèse vocale neuronale : le texte est converti en phonèmes via espeak-ng, puis un modèle de voix entraîné synthétise une forme d\'onde à partir de ces phonèmes, exécuté sur ONNX Runtime pour la rapidité.',
        ],
        items: [
          '**Synthèse en ligne de commande.** Exécuter `python3 -m piper` avec un modèle de voix téléchargé pour synthétiser un fichier WAV ou diffuser l\'audio directement vers vos haut-parleurs.',
          '**API Python.** Charger une voix avec `PiperVoice.load()` et appeler `.synthesize_wav()` ou le générateur en streaming `.synthesize()` depuis votre propre application Python.',
          '**Mode serveur web HTTP.** Piper peut fonctionner comme un serveur web persistant afin que les modèles de voix restent chargés en mémoire, évitant le coût de rechargement de la CLI à chaque appel — recommandé pour un usage répété ou en production.',
          '**API C/C++ (libpiper).** Une bibliothèque C++ native et sa CLI, portées depuis l\'ancien dépôt Piper, pour intégrer Piper dans des applications non Python.',
          '**Injection de phonèmes bruts.** Entourer du texte de `[[ ... ]]` permet de passer directement des phonèmes IPA (issus de `espeak-ng --ipa=3`), utile pour corriger la prononciation de noms ou de termes techniques.',
          '**Accélération GPU optionnelle.** Passer `--cuda` (CLI) ou `use_cuda=True` (Python) active l\'accélération CUDA via le paquet `onnxruntime-gpu`, bien que Piper soit conçu pour tourner à une vitesse acceptable sur CPU seul.',
          '**Voix multilingues entraînées par la communauté.** Des dizaines de langues et de variantes régionales sont disponibles sous forme de modèles de voix téléchargeables séparément via [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main) ; la qualité varie selon la voix, celles-ci étant entraînées par différents contributeurs de la communauté.',
        ],
        note: 'Piper est un moteur de synthèse vocale, pas un outil de clonage de voix — ses voix sont des modèles pré-entraînés que l\'on télécharge et sélectionne, pas créées à la volée à partir d\'un court extrait audio de référence. Pour cela, voir les alternatives de clonage vocal dans la section Alternatives ci-dessous.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Installer et exécuter Piper : étape par étape',
        content: 'Ce guide installe Piper via pip et effectue une première synthèse, en suivant la syntaxe documentée dans la CLI et l\'API Python du projet.',
        numberedItems: [
          {
            title: 'Installer Piper.',
            whyItMatters: 'Exécuter `pip install piper-tts` dans un environnement Python (Python 3.9+ recommandé). Cela installe le paquet `piper` et sa dépendance ONNX Runtime ; aucune configuration GPU ou CUDA n\'est requise pour un usage CPU seul.',
          },
          {
            title: 'Lister et télécharger une voix.',
            whyItMatters: 'Exécuter `python3 -m piper.download_voices` sans argument pour lister les voix disponibles, puis `python3 -m piper.download_voices en_US-lessac-medium` pour en télécharger une dans le répertoire courant.',
          },
          {
            title: 'Synthétiser la parole en ligne de commande.',
            whyItMatters: 'Exécuter `python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` pour écrire un fichier WAV. Avec `ffplay` installé, omettre `-f` pour entendre l\'audio immédiatement au lieu de l\'enregistrer.',
          },
          {
            title: '(Optionnel) Utiliser l\'API Python plutôt que la CLI.',
            whyItMatters: 'Pour un usage répété dans une application, `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` puis `voice.synthesize_wav(text, wav_file)` évite le coût de démarrage de la CLI à chaque appel.',
          },
          {
            title: '(Optionnel) Activer l\'accélération GPU.',
            whyItMatters: 'Installer le paquet `onnxruntime-gpu`, puis passer `--cuda` en CLI ou `use_cuda=True` à `PiperVoice.load()` en Python. Optionnel — Piper est conçu pour tourner en temps réel sur CPU seul.',
          },
          {
            title: '(Optionnel) Exécuter le serveur web pour un usage répété.',
            whyItMatters: 'Pour une configuration en production ou à usage répété, exécuter le mode serveur web HTTP de Piper afin que le modèle de voix reste chargé en mémoire au lieu d\'être rechargé à chaque appel de la CLI.',
          },
          {
            title: '(Optionnel) Corriger un mot mal prononcé avec des phonèmes bruts.',
            whyItMatters: 'Obtenir les phonèmes IPA d\'un mot avec `espeak-ng -v en-us --ipa=3 -q <mot>`, puis les entourer de `[[ ... ]]` dans le texte d\'entrée pour remplacer la prononciation automatique de Piper pour ce mot.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Au-delà du guide d\'installation de base ci-dessus, voici des schémas d\'utilisation courants issus de la documentation officielle du projet.',
        ],
        codeBlock: `# Ligne de commande : écrire un fichier WAV
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# Ligne de commande : jouer l'audio immédiatement (nécessite ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# API Python
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# API Python : ajuster la synthèse (vitesse, volume, expressivité)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # deux fois moins fort
    length_scale=2.0,  # deux fois plus lent
    noise_scale=1.0,   # plus de variation audio
    noise_w_scale=1.0, # plus de variation d'élocution
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# API Python : accélération GPU (nécessite onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# API Python : synthèse en streaming
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'Les paramètres montrés ici (`--cuda`, `SynthesisConfig`, `use_cuda`, le générateur `synthesize()` en streaming) sont documentés dans docs/CLI.md et docs/API_PYTHON.md du projet sur GitHub. Vérifier la documentation actuelle avant un déploiement en production, ces options pouvant changer d\'une version à l\'autre.',
        items: [
          '**Injection de phonèmes bruts** pour corriger la prononciation : entourer du texte comme `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` avec des phonèmes IPA obtenus via `espeak-ng -v en-us --ipa=3 -q <mot>`.',
          '**API C/C++ libpiper** expose `piper_create()` (ou `piper_create_with_options()` pour un contrôle plus fin) pour intégrer Piper directement dans une application native sans environnement Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et coût',
        content: [
          '**Le dépôt Piper activement maintenu, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), est sous licence GPL-3.0-or-later**, confirmé par les métadonnées publiées du paquet `piper-tts` sur [PyPI](https://pypi.org/project/piper-tts/). C\'est un changement par rapport au dépôt d\'origine [rhasspy/piper](https://github.com/rhasspy/piper), qui était sous licence MIT avant d\'être archivé le 6 octobre 2025, et qui reste disponible sous cette licence MIT, sans plus être maintenu.',
          '**GPL-3.0 est une licence copyleft, ce qui la distingue nettement de MIT pour un usage commercial.** Piper peut être utilisé gratuitement, y compris commercialement, pour générer de la parole. Mais GPL-3.0 exige que si vous distribuez une version modifiée du code source de Piper lui-même — par exemple un fork intégré ou lié statiquement à votre produit — vous devez publier ce code modifié sous les mêmes conditions GPL-3.0. Utiliser Piper tel quel comme outil externe (appeler sa CLI, son paquet Python ou son serveur web comme processus séparé) ne place généralement pas le reste du code de votre application sous GPL, mais la limite exacte dépend du degré de liaison entre votre code et celui de Piper. Ce paragraphe explique la forme générale de la licence ; ce n\'est pas un avis juridique — consultez un avocat pour votre déploiement spécifique avant de commercialiser un produit construit sur Piper.',
          '**Il n\'y a aucune offre payante, abonnement ou frais de licence pour Piper lui-même.** Les seuls coûts sont le matériel sur lequel il fonctionne et votre propre temps de développement. Les modèles de voix sont téléchargés séparément depuis un [dépôt Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main) partagé ; vérifiez la licence indiquée pour chaque voix avant de la redistribuer, car les voix sont fournies par différents contributeurs de la communauté et ne partagent pas nécessairement la même licence que le code de Piper.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise Piper ?',
            a: 'Le dépôt Piper activement maintenu (OHF-Voice/piper1-gpl) est sous licence GPL-3.0-or-later. Le dépôt d\'origine, désormais archivé, rhasspy/piper était sous licence MIT. C\'est une réelle différence pour un usage commercial — GPL-3.0 impose la même licence si vous distribuez des versions modifiées du code source de Piper lui-même, ce que MIT n\'exigeait pas.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce pour quoi Piper n\'est pas adapté',
        content: [
          'Piper est un moteur de synthèse vocale locale rapide et généraliste, pas un outil de clonage de voix ou de parole expressive. C\'est le mauvais outil dans les cas suivants :',
        ],
        items: [
          '**Clonage vocal expressif, émotionnel ou à partir de quelques secondes.** Piper synthétise la parole à partir de modèles de voix pré-entraînés, pas à partir d\'un court extrait audio de référence d\'une personne précise. Pour cloner une voix à partir de quelques secondes d\'échantillon audio, ou obtenir une élocution plus expressive, [XTTS v2](https://huggingface.co/coqui/XTTS-v2) est conçu pour cela — voir le [guide des licences TTS locales](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum pour ses conditions de licence (non commerciales).',
          '**Clonage multi-locuteur à partir d\'un court échantillon.** De même, Piper n\'a aucun mécanisme intégré pour générer à la volée une nouvelle voix à partir d\'un échantillon audio d\'un locuteur donné ; chaque voix est un modèle entraîné et distribué séparément.',
          '**Obligations copyleft de la GPL-3.0 dans un produit fermé.** Si votre cas d\'usage implique de modifier et de redistribuer le code source de Piper lui-même dans un binaire fermé, la licence GPL-3.0-or-later du dépôt actuel est une contrainte réelle que le dépôt d\'origine, sous MIT, n\'avait pas. Relire la section Licence et coût ci-dessus et consulter un avocat avant ce type de déploiement.',
          '**Qualité vocale garantie et homogène sur toutes les langues.** Les voix étant entraînées et fournies par différents contributeurs de la communauté, la qualité varie sensiblement selon la langue et la voix — vérifier des échantillons dans la langue cible avant de s\'engager sur Piper pour une application en production.',
          '**Certitude de maintenance à long terme.** Au moment de la publication, le README du projet indique que l\'Open Home Foundation recherche des mainteneurs supplémentaires pour Piper, un point à prendre en compte avant de construire une infrastructure critique dessus.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à Piper',
        itemHeadings: true,
        columns: ['Outil', 'Idéal pour', 'Licence'],
        rows: [
          {
            'Outil': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'Idéal pour': 'Boîte à outils multi-backend flexible (VITS, Tacotron2, XTTS) avec large support linguistique',
            'Licence': 'MPL-2.0',
          },
          {
            'Outil': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'Idéal pour': 'Clonage vocal à partir de quelques secondes d\'audio de référence, sur 17 langues',
            'Licence': 'CPML (non commercial)',
          },
          {
            'Outil': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Idéal pour': 'Meilleure qualité de narration anglaise naturelle (sans clonage vocal)',
            'Licence': 'MIT',
          },
          {
            'Outil': '[Bark](https://github.com/suno-ai/bark)',
            'Idéal pour': 'Audio expressif non verbal — rires, soupirs, ambiances sonores',
            'Licence': 'MIT',
          },
          {
            'Outil': '[ElevenLabs](https://elevenlabs.io)',
            'Idéal pour': 'API cloud gérée pour les équipes préférant ne pas s\'auto-héberger, avec clonage vocal commercial',
            'Licence': 'Propriétaire (API cloud payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que Piper ?',
            a: 'Piper est un moteur de synthèse vocale neuronale local et gratuit, créé au sein du projet d\'assistant vocal Rhasspy par Michael Hansen, aujourd\'hui maintenu par l\'Open Home Foundation, qui convertit du texte en audio parlé assez rapidement pour fonctionner en temps réel sur du matériel CPU seul.',
          },
          {
            q: 'Piper est-il gratuit ?',
            a: 'Oui. Piper n\'a aucune offre payante, abonnement ou frais de licence. Il est actuellement sous licence GPL-3.0-or-later, gratuite à l\'usage mais qui impose des conditions à la distribution de versions modifiées du code source de Piper lui-même — voir la section Licence et coût pour les détails.',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour exécuter Piper ?',
            a: 'Non. Piper est conçu pour fonctionner en temps réel sur du matériel CPU seul, y compris un Raspberry Pi. Une accélération GPU CUDA optionnelle est disponible via le paquet onnxruntime-gpu pour un débit plus élevé.',
          },
          {
            q: 'Quelle est la différence entre rhasspy/piper et OHF-Voice/piper1-gpl ?',
            a: 'rhasspy/piper est le dépôt d\'origine, créé au sein du projet Rhasspy et sous licence MIT ; il a été archivé (lecture seule) le 6 octobre 2025. OHF-Voice/piper1-gpl est le dépôt successeur activement maintenu, créé le 28 mars 2025 sous l\'Open Home Foundation, et sous licence GPL-3.0-or-later au lieu de MIT.',
          },
          {
            q: 'Piper peut-il cloner la voix d\'une personne précise ?',
            a: 'Pas à partir d\'un court échantillon audio. Piper synthétise la parole à l\'aide de modèles de voix pré-entraînés que l\'on télécharge et sélectionne ; il ne clone pas de nouvelle voix à la volée à partir de quelques secondes d\'audio de référence. Pour cela, voir XTTS v2, conçu spécifiquement pour le clonage vocal en quelques secondes.',
          },
          {
            q: 'Piper est-il utilisé dans Home Assistant ?',
            a: 'Oui. Piper est le moteur de synthèse vocale locale par défaut du pipeline d\'assistant vocal de Home Assistant, maintenu par l\'Open Home Foundation, la même organisation à but non lucratif qui gère Home Assistant.',
          },
          {
            q: 'Qui maintient Piper aujourd\'hui ?',
            a: 'Piper est maintenu sous l\'Open Home Foundation, sur le dépôt OHF-Voice/piper1-gpl, après que le développement y a migré depuis le dépôt d\'origine hébergé sur Rhasspy en 2025. Le README du projet indique que l\'Open Home Foundation recherche actuellement des mainteneurs supplémentaires.',
          },
          {
            q: 'Quelle est la dernière version de Piper ?',
            a: 'La dernière version stable est la v1.8.0, publiée le 4 septembre 2026, selon la page des releases GitHub du projet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Piper reste l\'un des moyens les plus rapides d\'obtenir une vraie synthèse vocale locale sur du matériel modeste — sa performance en temps réel sur CPU seul en a fait la voix par défaut de Home Assistant, et cela n\'a pas changé sous ses nouveaux mainteneurs. Ce qui a changé, et que tout lecteur évaluant Piper en 2026 doit connaître, c\'est la licence : le dépôt activement maintenu est passé de MIT à GPL-3.0-or-later lors du transfert vers l\'Open Home Foundation en 2025, une réelle différence pour quiconque prévoit d\'intégrer et de redistribuer du code source Piper modifié dans un produit fermé. Il reste gratuit, bien documenté et activement publié (v1.8.0 à la date de septembre 2026), même si ses propres mainteneurs recherchent ouvertement de l\'aide. Pour une synthèse vocale rapide, hors ligne et généraliste sur du matériel de classe CPU, Piper est un choix bien vérifié et sans coût — pour un clonage vocal expressif en quelques secondes, associez cet avis à la couverture de [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) par PromptQuorum ou comparez avec l\'alternative cloud gérée dans le [comparatif ElevenLabs vs TTS local](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OHF-Voice/piper1-gpl sur GitHub](https://github.com/OHF-Voice/piper1-gpl) — le dépôt activement maintenu : README, documentation, licence et historique des versions.',
          '[piper-tts sur PyPI](https://pypi.org/project/piper-tts/) — métadonnées du paquet publiées, incluant la licence GPL-3.0-or-later actuelle.',
          '[rhasspy/piper sur GitHub](https://github.com/rhasspy/piper) — le dépôt d\'origine, désormais archivé (licence MIT).',
          '[Releases piper1-gpl](https://github.com/OHF-Voice/piper1-gpl/releases) — historique des versions, y compris v1.8.0 (4 septembre 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — l\'organisation à but non lucratif qui maintient Piper et Home Assistant.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Licences TTS et clonage vocal local : Piper, XTTS v2, F5-TTS et Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — le comparatif de licences pour tous les principaux moteurs TTS locaux.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — le comparatif cloud contre local pour choisir de s\'auto-héberger ou non.',
          '[Construire un assistant vocal entièrement hors ligne en 2026](/power-local-llm/build-local-voice-assistant-2026) — connecter Piper à un LLM local et à un moteur STT basé sur Whisper pour un pipeline vocal complet.',
          '[Avis Whisper.cpp](/power-local-llm/whisper-cpp-review) — l\'équivalent local en reconnaissance vocale, examiné avec le même niveau de détail.',
          '[Avis faster-whisper](/power-local-llm/faster-whisper-review) — l\'alternative de reconnaissance vocale basée sur CTranslate2, examinée avec le même niveau de détail.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS : avis (2026) — synthèse vocale neuronale locale et rapide',
      description:
        'Piper TTS : avis — le moteur de synthèse vocale neuronale local et gratuit du projet Rhasspy, aujourd\'hui maintenu par l\'Open Home Foundation. Histoire, installation, vraies commandes, licence GPL-3.0 actuelle, et quand préférer XTTS v2.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'fr',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des outils de synthèse vocale locaux et hors ligne' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Synthèse vocale' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS : avis (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-es.webp',
    title: 'Piper TTS: análisis (2026) — síntesis de voz neuronal local y rápida',
    seoTitle: 'Piper TTS: análisis 2026 — TTS local rápido',
    intro:
      'Piper es un motor de síntesis de voz neuronal local y gratuito que convierte texto en audio hablado íntegramente en tu propio dispositivo, creado originalmente dentro del proyecto de asistente de voz de código abierto [Rhasspy](https://github.com/rhasspy) por Michael Hansen. En 2025, el desarrollo activo se trasladó a un nuevo repositorio, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), mantenido por la [Open Home Foundation](https://www.openhomefoundation.org/) — la organización sin fines de lucro detrás de Home Assistant — y el repositorio original [rhasspy/piper](https://github.com/rhasspy/piper) se archivó (quedó de solo lectura) el 6 de octubre de 2025. Este análisis cubre esa historia, comandos reales de instalación y uso, su licencia actual (que cambió de MIT a GPL-3.0-or-later) y dónde Piper no es la herramienta adecuada — con un enlace a la guía de licencias de PromptQuorum y su comparativa frente a ElevenLabs.',
    metaDescription:
      'Piper TTS: análisis del motor de síntesis de voz neuronal local y gratuito del proyecto Rhasspy, hoy mantenido por la Open Home Foundation. Historia, instalación, comandos reales, licencia GPL-3.0 actual y cuándo elegir XTTS v2 en su lugar.',
    twitterDescription:
      'Piper TTS: análisis 2026 — síntesis de voz neuronal local y rápida, en tiempo real incluso en una Raspberry Pi, creada por Michael Hansen y hoy mantenida por la Open Home Foundation. Comandos reales, el cambio de licencia GPL-3.0 de 2025 y límites honestos.',
    audience:
      'Desarrolladores y aficionados que construyen asistentes de voz locales, herramientas de accesibilidad o apps offline y necesitan síntesis de voz rápida sin API en la nube, sin GPU y sin coste por carácter.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS análisis',
    targetKeywords: [
      'piper tts análisis',
      'piper tts',
      'instalar piper tts',
      'piper tts python',
      'licencia piper tts',
      'ohf-voice piper1-gpl',
      'síntesis de voz neuronal local',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper es un motor de síntesis de voz neuronal local y gratuito, creado dentro del proyecto de asistente de voz Rhasspy por Michael Hansen, hoy mantenido por la Open Home Foundation en [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), lo bastante rápido como para funcionar en tiempo real en hardware solo con CPU como una Raspberry Pi.** Se instala con `pip install piper-tts`. Desde 2025, el repositorio activamente mantenido usa la licencia GPL-3.0-or-later — un cambio respecto a la licencia MIT del repositorio original `rhasspy/piper`, ahora archivado. Para un análisis de licencias entre Piper, Coqui TTS, XTTS v2, F5-TTS, Bark y StyleTTS 2, consulta la [guía de licencias de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es Piper TTS y sigue manteniéndose?',
        answer:
          'Piper merece la pena si quieres síntesis de voz rápida y totalmente local que funcione en hardware solo con CPU, incluida una Raspberry Pi, sin enviar texto a una API en la nube. Se creó dentro del proyecto de asistente de voz de código abierto Rhasspy por Michael Hansen y es conocido sobre todo como el motor TTS local por defecto en el flujo de voz de Home Assistant. Sí, sigue manteniéndose: tras archivarse el repositorio original rhasspy/piper el 6 de octubre de 2025, el desarrollo activo continuó en un nuevo repositorio, OHF-Voice/piper1-gpl, bajo la Open Home Foundation. Lo importante a saber es la licencia: el repositorio activamente mantenido usa GPL-3.0-or-later, no la licencia MIT original, y el propio README del proyecto indica que actualmente busca más mantenedores. Elige XTTS v2 en su lugar si necesitas clonación de voz expresiva y emocional a partir de pocos segundos de audio; las voces de Piper están preentrenadas, no clonadas a partir de una muestra corta.',
        bullets: [
          'Creado dentro del proyecto de asistente de voz Rhasspy por Michael Hansen; repositorio original archivado el 6 de octubre de 2025.',
          'Desarrollo activo ahora bajo la Open Home Foundation en OHF-Voice/piper1-gpl, creado el 28 de marzo de 2025.',
          'Cambio de licencia: de MIT (repositorio archivado) a GPL-3.0-or-later (repositorio actual) — revísalo antes de integrar Piper en un producto de código cerrado.',
          'Gratuito, sin nivel de pago; funciona en tiempo real en hardware solo con CPU, incluida una Raspberry Pi, con aceleración GPU CUDA opcional.',
          'Última versión: v1.8.0, publicada el 4 de septiembre de 2026, según la página de releases de GitHub del proyecto.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: de Rhasspy a la Open Home Foundation', anchor: 'history' },
      { label: 'Qué hace realmente Piper', anchor: 'what-it-does' },
      { label: 'Instalar y ejecutar Piper: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y coste', anchor: 'license-cost' },
      { label: 'Para qué no sirve Piper', anchor: 'limitations' },
      { label: 'Alternativas a Piper', anchor: 'alternatives' },
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
            text: 'Piper es un motor de síntesis de voz neuronal local y gratuito, creado originalmente dentro del proyecto de asistente de voz Rhasspy por Michael Hansen y hoy mantenido por la Open Home Foundation, lo bastante rápido como para funcionar en tiempo real en hardware solo con CPU como una Raspberry Pi, cuya licencia pasó de MIT a GPL-3.0-or-later al trasladarse a un nuevo repositorio en 2025.',
          },
          {
            type: 'plain-terms',
            text: 'Es un programa que instalas con `pip install` y que convierte texto escrito en audio hablado en tu propio dispositivo — sin cuenta en la nube, sin necesidad de conexión a Internet, y funciona lo bastante rápido para voz en tiempo real incluso en hardware muy modesto.',
          },
        ],
        items: [
          'Creado dentro del proyecto de asistente de voz Rhasspy por Michael Hansen.',
          'Repositorio original rhasspy/piper archivado (solo lectura) el 6 de octubre de 2025, bajo licencia MIT.',
          'Desarrollo activo hoy en OHF-Voice/piper1-gpl (creado el 28 de marzo de 2025), bajo la Open Home Foundation, la organización sin fines de lucro detrás de Home Assistant.',
          'Licencia actual: GPL-3.0-or-later — un cambio respecto a la licencia MIT del repositorio archivado.',
          'Gratuito, sin nivel de pago; inferencia en tiempo real en CPU, aceleración GPU CUDA opcional.',
          'Última versión: v1.8.0, publicada el 4 de septiembre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La licencia cambió en 2025. Si evaluaste Piper antes de esa fecha asumiendo que tenía licencia MIT, revísalo de nuevo antes de usar el repositorio actualmente mantenido en un producto de código cerrado — ver la sección Licencia y coste más abajo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: de Rhasspy a la Open Home Foundation',
        content: [
          '**Piper nació dentro de Rhasspy**, un conjunto de herramientas de código abierto para construir asistentes de voz totalmente offline, donde Michael Hansen lo desarrolló como un motor de síntesis de voz local y rápido para combinarlo con el reconocimiento de voz local de Rhasspy — evitando un viaje de ida y vuelta a una API TTS en la nube en cada respuesta hablada. Piper usa una arquitectura neuronal de texto a forma de onda de tipo VITS: el texto se convierte primero en fonemas (mediante [espeak-ng](https://github.com/espeak-ng/espeak-ng)), y luego un modelo exportado a [ONNX Runtime](https://onnxruntime.ai/) sintetiza directamente una forma de onda a partir de esos fonemas, con inferencia rápida incluso en hardware solo con CPU.',
          '**El repositorio original, [rhasspy/piper](https://github.com/rhasspy/piper), se convirtió en uno de los motores TTS locales más usados** en el ecosistema de código abierto de domótica y accesibilidad, acumulando más de 11.000 estrellas en GitHub bajo su licencia MIT. Se convirtió en el motor de síntesis de voz local por defecto del flujo de voz de [Home Assistant](https://www.home-assistant.io/).',
          '**En 2025, el desarrollo activo se trasladó a un nuevo repositorio.** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) se creó el 28 de marzo de 2025, bajo la Open Home Foundation — la organización sin fines de lucro que también gestiona Home Assistant. El repositorio original rhasspy/piper se archivó posteriormente (quedó de solo lectura) el 6 de octubre de 2025; sigue disponible bajo su licencia MIT original, pero no recibe más actualizaciones.',
          '**El nuevo repositorio usa una licencia distinta: GPL-3.0-or-later**, en lugar de la licencia MIT original. El proyecto no explica el motivo en su README ni en el changelog, pero piper1-gpl integra [espeak-ng](https://github.com/espeak-ng/espeak-ng) para la fonemización, y espeak-ng en sí está bajo licencia GPL-3.0 — una explicación plausible del cambio de licencia, aunque PromptQuorum no pudo confirmarla como motivo declarado oficialmente. Al momento de esta publicación, el propio README del proyecto indica que la Open Home Foundation busca más mantenedores para Piper.',
        ],
        faqs: [
          {
            q: '¿Quién creó Piper?',
            a: 'Piper fue creado por Michael Hansen dentro del proyecto de asistente de voz de código abierto Rhasspy. El desarrollo se trasladó después a un nuevo repositorio, OHF-Voice/piper1-gpl, mantenido por la Open Home Foundation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente Piper',
        content: [
          'Piper convierte texto escrito en audio hablado mediante un pipeline de síntesis de voz neuronal: el texto se convierte en fonemas con espeak-ng, y luego un modelo de voz entrenado sintetiza una forma de onda a partir de esos fonemas, ejecutándose sobre ONNX Runtime para mayor velocidad.',
        ],
        items: [
          '**Síntesis por línea de comandos.** Ejecuta `python3 -m piper` con un modelo de voz descargado para generar un archivo WAV o transmitir audio directamente a tus altavoces.',
          '**API de Python.** Carga una voz con `PiperVoice.load()` y llama a `.synthesize_wav()` o al generador en streaming `.synthesize()` desde tu propia aplicación Python.',
          '**Modo servidor web HTTP.** Piper puede ejecutarse como un servidor web persistente para que los modelos de voz permanezcan cargados en memoria, evitando el coste de recarga de la CLI en cada llamada — recomendado para uso repetido o en producción.',
          '**API C/C++ (libpiper).** Una biblioteca nativa en C++ y su CLI, portada desde el repositorio original de Piper, para integrar Piper en aplicaciones que no son Python.',
          '**Inyección de fonemas en bruto.** Envolver texto en `[[ ... ]]` permite pasar fonemas IPA (obtenidos con `espeak-ng --ipa=3`) directamente, útil para corregir la pronunciación de nombres o términos técnicos.',
          '**Aceleración GPU opcional.** Pasar `--cuda` (CLI) o `use_cuda=True` (Python) activa la aceleración CUDA mediante el paquete `onnxruntime-gpu`, aunque Piper está diseñado para funcionar a una velocidad aceptable solo con CPU.',
          '**Voces multilingües entrenadas por la comunidad.** Docenas de idiomas y variantes regionales están disponibles como modelos de voz descargables por separado desde [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main); la calidad varía según la voz, ya que son entrenadas por distintos colaboradores de la comunidad.',
        ],
        note: 'Piper es un motor de síntesis de voz, no una herramienta de clonación de voz — sus voces son modelos preentrenados que descargas y seleccionas, no creadas al vuelo a partir de un breve clip de audio de referencia. Para eso, consulta las alternativas de clonación de voz en la sección Alternativas más abajo.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar y ejecutar Piper: paso a paso',
        content: 'Esta guía instala Piper mediante pip y realiza una primera síntesis, siguiendo la sintaxis documentada en la CLI y la API de Python del propio proyecto.',
        numberedItems: [
          {
            title: 'Instalar Piper.',
            whyItMatters: 'Ejecuta `pip install piper-tts` en un entorno Python (se recomienda Python 3.9+). Esto instala el paquete `piper` y su dependencia de ONNX Runtime; no se necesita configuración de GPU ni CUDA para uso solo con CPU.',
          },
          {
            title: 'Listar y descargar una voz.',
            whyItMatters: 'Ejecuta `python3 -m piper.download_voices` sin argumentos para listar las voces disponibles, y luego `python3 -m piper.download_voices en_US-lessac-medium` para descargar una voz concreta al directorio actual.',
          },
          {
            title: 'Sintetizar voz desde la línea de comandos.',
            whyItMatters: 'Ejecuta `python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` para escribir un archivo WAV. Con `ffplay` instalado, omite `-f` para escuchar el audio de inmediato en lugar de guardarlo.',
          },
          {
            title: '(Opcional) Usar la API de Python en lugar de la CLI.',
            whyItMatters: 'Para uso repetido dentro de una aplicación, `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` seguido de `voice.synthesize_wav(text, wav_file)` evita el coste de arranque de la CLI en cada llamada.',
          },
          {
            title: '(Opcional) Activar la aceleración GPU.',
            whyItMatters: 'Instala el paquete `onnxruntime-gpu`, y luego pasa `--cuda` en la CLI o `use_cuda=True` a `PiperVoice.load()` en Python. Es opcional — Piper está diseñado para funcionar en tiempo real solo con CPU.',
          },
          {
            title: '(Opcional) Ejecutar el servidor web para uso repetido.',
            whyItMatters: 'Para una configuración de producción o de uso repetido, ejecuta el modo servidor web HTTP de Piper para que el modelo de voz permanezca cargado en memoria en lugar de recargarse en cada llamada a la CLI.',
          },
          {
            title: '(Opcional) Corregir una palabra mal pronunciada con fonemas en bruto.',
            whyItMatters: 'Obtén los fonemas IPA de una palabra con `espeak-ng -v en-us --ipa=3 -q <palabra>`, y envuélvelos en `[[ ... ]]` dentro del texto de entrada para anular la pronunciación automática de Piper para esa palabra.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Más allá de la guía básica de instalación anterior, estos son patrones de uso reales comunes tomados de la propia documentación del proyecto.',
        ],
        codeBlock: `# Línea de comandos: escribir un archivo WAV
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# Línea de comandos: reproducir audio de inmediato (requiere ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# API de Python
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# API de Python: ajustar la síntesis (velocidad, volumen, expresividad)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # la mitad de volumen
    length_scale=2.0,  # el doble de lento
    noise_scale=1.0,   # más variación de audio
    noise_w_scale=1.0, # más variación al hablar
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# API de Python: aceleración GPU (requiere onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# API de Python: síntesis en streaming
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'Los parámetros mostrados aquí (`--cuda`, `SynthesisConfig`, `use_cuda`, el generador en streaming `synthesize()`) están documentados en docs/CLI.md y docs/API_PYTHON.md del proyecto en GitHub. Revisa la documentación actual antes de desplegar en producción, ya que las opciones pueden cambiar entre versiones.',
        items: [
          '**Inyección de fonemas en bruto** para corregir pronunciación: envuelve texto como `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` con fonemas IPA obtenidos con `espeak-ng -v en-us --ipa=3 -q <palabra>`.',
          '**API C/C++ libpiper** expone `piper_create()` (o `piper_create_with_options()` para un control más fino) para integrar Piper directamente en una aplicación nativa sin entorno de ejecución Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y coste',
        content: [
          '**El repositorio de Piper activamente mantenido, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), tiene licencia GPL-3.0-or-later**, confirmado mediante los metadatos publicados del paquete `piper-tts` en [PyPI](https://pypi.org/project/piper-tts/). Es un cambio respecto al repositorio original [rhasspy/piper](https://github.com/rhasspy/piper), que tenía licencia MIT antes de archivarse el 6 de octubre de 2025 y que sigue disponible bajo esa licencia MIT, sin mantenimiento.',
          '**GPL-3.0 es una licencia copyleft, lo cual es una diferencia real frente a MIT para uso comercial.** Puedes usar Piper de forma gratuita, incluso comercialmente, para generar voz. Pero GPL-3.0 exige que, si distribuyes una versión modificada del propio código fuente de Piper — por ejemplo, un fork integrado o enlazado estáticamente en tu producto — debes publicar ese código modificado bajo los mismos términos de GPL-3.0. Usar Piper sin modificar como herramienta externa (llamando a su CLI, su paquete Python o su servidor web como proceso separado) generalmente no coloca el resto del código de tu aplicación bajo GPL, pero el límite exacto depende de cuán estrechamente esté vinculado tu código con el de Piper. Este párrafo explica la forma general de la licencia; no es asesoría legal — consulta con un abogado para tu despliegue específico antes de lanzar un producto comercial construido sobre Piper.',
          '**No hay nivel de pago, suscripción ni tarifa de licencia para Piper en sí.** Los únicos costes son el hardware en el que se ejecuta y tu propio tiempo de desarrollo. Los modelos de voz se descargan por separado desde un [repositorio compartido de Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main); revisa la licencia indicada para cada voz individual antes de redistribuirla, ya que las voces son aportadas por distintos miembros de la comunidad y no tienen garantizada la misma licencia que el código de Piper.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa Piper?',
            a: 'El repositorio de Piper activamente mantenido (OHF-Voice/piper1-gpl) tiene licencia GPL-3.0-or-later. El repositorio original, ahora archivado, rhasspy/piper tenía licencia MIT. Esta es una diferencia real para uso comercial — GPL-3.0 exige liberar bajo la misma licencia las modificaciones del propio código fuente de Piper si se distribuyen, algo que MIT no exigía.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no sirve Piper',
        content: [
          'Piper es un motor de síntesis de voz local rápido y de propósito general, no una herramienta de clonación de voz ni de habla expresiva. Es la herramienta equivocada en las siguientes situaciones:',
        ],
        items: [
          '**Clonación de voz expresiva, emocional o a partir de pocos segundos.** Piper sintetiza voz a partir de modelos de voz preentrenados, no a partir de un breve clip de audio de referencia de una persona concreta. Si necesitas clonar una voz a partir de pocos segundos de audio de muestra, o buscas una entonación más expresiva, [XTTS v2](https://huggingface.co/coqui/XTTS-v2) está diseñado para eso — consulta la [guía de licencias de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum para conocer sus términos de licencia (no comercial).',
          '**Clonación multi-hablante a partir de una muestra corta.** De igual forma, Piper no tiene ningún mecanismo integrado para generar al vuelo una nueva voz a partir de una muestra de audio de un hablante específico; cada voz es un modelo entrenado y distribuido por separado.',
          '**Obligaciones copyleft de GPL-3.0 en un producto de código cerrado.** Si tu caso de uso implica modificar y redistribuir el propio código fuente de Piper dentro de un binario de código cerrado, la licencia GPL-3.0-or-later del repositorio actual es una restricción real que el repositorio original con licencia MIT no tenía. Revisa la sección Licencia y coste anterior y consulta con un abogado antes de ese tipo de despliegue.',
          '**Calidad de voz garantizada y homogénea en todos los idiomas.** Como las voces son entrenadas y aportadas por distintos miembros de la comunidad, la calidad varía notablemente según el idioma y la voz concreta — revisa muestras del idioma objetivo antes de comprometerte con Piper para una aplicación de producción.',
          '**Certeza de mantenimiento a largo plazo.** Al momento de esta publicación, el propio README del proyecto indica que la Open Home Foundation busca más mantenedores para Piper, algo a tener en cuenta antes de construir infraestructura crítica sobre él.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a Piper',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'Mejor para': 'Kit de herramientas multi-backend flexible (VITS, Tacotron2, XTTS) con amplio soporte de idiomas',
            'Licencia': 'MPL-2.0',
          },
          {
            'Herramienta': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'Mejor para': 'Clonación de voz a partir de pocos segundos de audio de referencia, en 17 idiomas',
            'Licencia': 'CPML (no comercial)',
          },
          {
            'Herramienta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Mejor para': 'Máxima calidad de narración natural en inglés (sin clonación de voz)',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[Bark](https://github.com/suno-ai/bark)',
            'Mejor para': 'Audio expresivo no verbal — risas, suspiros, sonido ambiental',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[ElevenLabs](https://elevenlabs.io)',
            'Mejor para': 'API en la nube gestionada para equipos que prefieren no autohospedar, con clonación de voz comercial',
            'Licencia': 'Propietaria (API en la nube de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Piper?',
            a: 'Piper es un motor de síntesis de voz neuronal local y gratuito, creado dentro del proyecto de asistente de voz Rhasspy por Michael Hansen, hoy mantenido por la Open Home Foundation, que convierte texto en audio hablado con suficiente rapidez para funcionar en tiempo real en hardware solo con CPU.',
          },
          {
            q: '¿Es gratis Piper?',
            a: 'Sí. Piper no tiene nivel de pago, suscripción ni tarifa de licencia. Actualmente tiene licencia GPL-3.0-or-later, gratuita de usar pero que impone condiciones a la distribución de versiones modificadas del propio código fuente de Piper — ver la sección Licencia y coste para más detalles.',
          },
          {
            q: '¿Necesito una GPU para ejecutar Piper?',
            a: 'No. Piper está diseñado para funcionar en tiempo real en hardware solo con CPU, incluida una Raspberry Pi. Hay aceleración GPU CUDA opcional disponible mediante el paquete onnxruntime-gpu para mayor rendimiento.',
          },
          {
            q: '¿Cuál es la diferencia entre rhasspy/piper y OHF-Voice/piper1-gpl?',
            a: 'rhasspy/piper es el repositorio original, creado dentro del proyecto Rhasspy y con licencia MIT; se archivó (solo lectura) el 6 de octubre de 2025. OHF-Voice/piper1-gpl es el repositorio sucesor activamente mantenido, creado el 28 de marzo de 2025 bajo la Open Home Foundation, y con licencia GPL-3.0-or-later en lugar de MIT.',
          },
          {
            q: '¿Puede Piper clonar la voz de una persona concreta?',
            a: 'No a partir de una muestra corta de audio. Piper sintetiza voz usando modelos de voz preentrenados que descargas y seleccionas; no clona una nueva voz al vuelo a partir de pocos segundos de audio de referencia. Para eso está XTTS v2, diseñado específicamente para clonación de voz en pocos segundos.',
          },
          {
            q: '¿Se usa Piper en Home Assistant?',
            a: 'Sí. Piper es el motor de síntesis de voz local por defecto en el flujo de asistente de voz de Home Assistant, mantenido por la Open Home Foundation, la misma organización sin fines de lucro que gestiona Home Assistant.',
          },
          {
            q: '¿Quién mantiene Piper hoy?',
            a: 'Piper se mantiene bajo la Open Home Foundation en el repositorio OHF-Voice/piper1-gpl, tras trasladarse allí el desarrollo desde el repositorio original alojado en Rhasspy en 2025. El README del proyecto indica que la Open Home Foundation busca actualmente más mantenedores.',
          },
          {
            q: '¿Cuál es la última versión de Piper?',
            a: 'La última versión estable es la v1.8.0, publicada el 4 de septiembre de 2026, según la página de releases de GitHub del proyecto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Piper sigue siendo una de las formas más rápidas de conseguir síntesis de voz local real en hardware modesto — su rendimiento en tiempo real solo con CPU es lo que lo convirtió en la voz por defecto de Home Assistant, y eso no ha cambiado bajo sus nuevos mantenedores. Lo que sí ha cambiado, y lo que cualquiera que evalúe Piper en 2026 debe saber, es la licencia: el repositorio activamente mantenido pasó de MIT a GPL-3.0-or-later cuando el desarrollo se trasladó a la Open Home Foundation en 2025, una diferencia real para quien planee integrar y redistribuir código fuente modificado de Piper en un producto de código cerrado. Sigue siendo gratuito, bien documentado y con lanzamientos activos (v1.8.0 a fecha de septiembre de 2026), aunque sus propios mantenedores buscan abiertamente más ayuda. Para síntesis de voz rápida, offline y de propósito general en hardware de clase CPU, Piper es una opción bien verificada y sin coste — para clonación de voz expresiva en pocos segundos, combina este análisis con la cobertura de [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum o compáralo con la alternativa en la nube gestionada en la [comparativa ElevenLabs vs TTS local](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[OHF-Voice/piper1-gpl en GitHub](https://github.com/OHF-Voice/piper1-gpl) — el repositorio activamente mantenido: README, documentación, licencia e historial de versiones.',
          '[piper-tts en PyPI](https://pypi.org/project/piper-tts/) — metadatos publicados del paquete, incluida la licencia GPL-3.0-or-later actual.',
          '[rhasspy/piper en GitHub](https://github.com/rhasspy/piper) — el repositorio original, ahora archivado (licencia MIT).',
          '[Releases de piper1-gpl](https://github.com/OHF-Voice/piper1-gpl/releases) — historial de versiones, incluida la v1.8.0 (4 de septiembre de 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — la organización sin fines de lucro que mantiene Piper y Home Assistant.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Licencias de TTS y clonación de voz local: Piper, XTTS v2, F5-TTS y Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — el análisis de licencias de todos los motores TTS locales principales.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparativa nube contra local para decidir si autohospedar.',
          '[Construir un asistente de voz totalmente offline en 2026](/power-local-llm/build-local-voice-assistant-2026) — conectar Piper con un LLM local y un motor STT basado en Whisper para un pipeline de voz completo.',
          '[Análisis de Whisper.cpp](/power-local-llm/whisper-cpp-review) — el equivalente local de reconocimiento de voz, analizado con el mismo nivel de detalle.',
          '[Análisis de faster-whisper](/power-local-llm/faster-whisper-review) — la alternativa de reconocimiento de voz basada en CTranslate2, analizada con el mismo nivel de detalle.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS: análisis (2026) — síntesis de voz neuronal local y rápida',
      description:
        'Piper TTS: análisis del motor de síntesis de voz neuronal local y gratuito del proyecto Rhasspy, hoy mantenido por la Open Home Foundation. Historia, instalación, comandos reales, licencia GPL-3.0 actual y cuándo elegir XTTS v2 en su lugar.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'es',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan herramientas locales y offline de texto a voz' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Síntesis de voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS: análisis (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-ja.webp',
    title: 'Piper TTSレビュー(2026):高速なローカル・ニューラル音声合成',
    seoTitle: 'Piper TTSレビュー2026:高速ローカルTTS',
    intro:
      'Piperは、テキストを自分のデバイス上だけで音声に変換する、無料のローカル・ニューラル音声合成エンジンです。もともとはオープンソースの音声アシスタントプロジェクト[Rhasspy](https://github.com/rhasspy)の中で、Michael Hansen氏によって開発されました。2025年、開発の中心は新しいリポジトリ[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)に移り、Home Assistantを支える非営利団体[Open Home Foundation](https://www.openhomefoundation.org/)が保守を担うようになりました。元のリポジトリ[rhasspy/piper](https://github.com/rhasspy/piper)は2025年10月6日にアーカイブ(読み取り専用化)されています。本レビューでは、この歴史、実際のインストール・使用コマンド、現在のライセンス(MITからGPL-3.0-or-laterへの変更)、そしてPiperが向いていない用途を解説し、PromptQuorumのライセンス比較記事とElevenLabsとの比較記事へのリンクも掲載します。',
    metaDescription:
      'Piper TTSレビュー:Rhasspyプロジェクト発、現在はOpen Home Foundationが保守する無料のローカル・ニューラル音声合成エンジン。歴史、インストール手順、実際のコマンド、現行のGPL-3.0ライセンス、XTTS v2を選ぶべき場面を解説。',
    twitterDescription:
      'Piper TTSレビュー2026:Raspberry Piでもリアルタイムで動く高速・ローカルなニューラル音声合成。Michael Hansen氏が開発し、現在はOpen Home Foundationが保守。実際のインストールコマンド、2025年のGPL-3.0ライセンス変更、正直な限界を解説。',
    audience:
      'クラウドAPIやGPU、文字数課金なしで高速な音声合成が必要な、ローカル音声アシスタント・アクセシビリティツール・オフラインアプリを構築する開発者や個人開発者。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTSレビュー',
    targetKeywords: [
      'piper tts レビュー',
      'piper tts',
      'piper tts インストール',
      'piper tts python',
      'piper tts ライセンス',
      'ohf-voice piper1-gpl',
      'ローカル ニューラル音声合成',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**PiperはMichael Hansen氏がRhasspy音声アシスタントプロジェクトの中で開発した無料のローカル・ニューラル音声合成エンジンで、現在は[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)でOpen Home Foundationが保守しており、Raspberry PiのようなCPUのみのハードウェアでもリアルタイムに動作するほど高速です。** `pip install piper-tts`でインストールできます。2025年以降、実際に保守されているリポジトリはGPL-3.0-or-laterライセンスの下にあり、これはアーカイブされた元のリポジトリ`rhasspy/piper`のMITライセンスからの変更です。Piper、Coqui TTS、XTTS v2、F5-TTS、Bark、StyleTTS 2のライセンス比較については、PromptQuorumの[ローカルTTSライセンスガイド](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)を参照してください。',
    quickAnswerTop: {
      en: {
        question: 'Piper TTSとは何か、今も保守されているのか',
        answer:
          'クラウドAPIにテキストを送らず、Raspberry Piを含むCPUのみのハードウェアで動作する高速で完全にローカルな音声合成が欲しいなら、Piperは検討する価値があります。もともとはオープンソースの音声アシスタントプロジェクトRhasspyの中でMichael Hansen氏が開発し、Home Assistantの音声パイプラインにおける標準のローカルTTSエンジンとして最もよく知られています。今も保守されているかというと、答えはイエスです。2025年10月6日に元のリポジトリrhasspy/piperがアーカイブされた後も、開発はOpen Home Foundationの下、新しいリポジトリOHF-Voice/piper1-gplで続いています。知っておくべき変化はライセンスです。実際に保守されているリポジトリは、元のMITライセンスではなくGPL-3.0-or-laterの下にあり、プロジェクト自身のREADMEには現在追加のメンテナーを募集していると記されています。数秒の音声から表現豊かで感情的な声のクローンが必要な場合は、代わりにXTTS v2を選んでください。Piperの声は事前学習済みで、短いサンプルからクローンされるものではありません。',
        bullets: [
          'Michael Hansen氏がRhasspy音声アシスタントプロジェクトの中で開発。元のリポジトリは2025年10月6日にアーカイブ。',
          '現在の開発拠点はOpen Home Foundation下のOHF-Voice/piper1-gplで、2025年3月28日に作成された。',
          'ライセンス変更:MIT(アーカイブ済みリポジトリ)からGPL-3.0-or-later(現行リポジトリ)へ — クローズドソース製品への組み込み前に必ず確認すること。',
          '無料で有料プランなし。Raspberry Piを含むCPUのみのハードウェアでリアルタイム動作し、CUDA GPUアクセラレーションもオプションで利用可能。',
          '最新リリース:v1.8.0、2026年9月4日公開(プロジェクトのGitHubリリースページより)。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:RhasspyからOpen Home Foundationへ', anchor: 'history' },
      { label: 'Piperが実際にできること', anchor: 'what-it-does' },
      { label: 'Piperのインストールと実行:手順', anchor: 'install-walkthrough' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスとコスト', anchor: 'license-cost' },
      { label: 'Piperが向いていない用途', anchor: 'limitations' },
      { label: 'Piperの代替ツール', anchor: 'alternatives' },
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
            text: 'PiperはもともとMichael Hansen氏がRhasspy音声アシスタントプロジェクトの中で開発し、現在はOpen Home Foundationが保守する無料のローカル・ニューラル音声合成エンジンで、Raspberry PiのようなCPUのみのハードウェアでもリアルタイム動作するほど高速であり、2025年に新しいリポジトリへ移行した際にライセンスがMITからGPL-3.0-or-laterに変わった。',
          },
          {
            type: 'plain-terms',
            text: '`pip install`でインストールし、入力したテキストを自分のデバイス上で音声に変換するプログラムです。クラウドアカウントもインターネット接続も不要で、かなり控えめなハードウェアでもリアルタイムの音声再生に十分な速さで動作します。',
          },
        ],
        items: [
          'Michael Hansen氏がRhasspy音声アシスタントプロジェクトの中で開発。',
          '元のリポジトリrhasspy/piperはMITライセンスの下、2025年10月6日にアーカイブ(読み取り専用化)された。',
          '現在の開発拠点は、Home Assistantを支える非営利団体Open Home Foundation下のOHF-Voice/piper1-gpl(2025年3月28日作成)。',
          '現行ライセンス:GPL-3.0-or-later — アーカイブ済みリポジトリのMITライセンスからの変更。',
          '無料で有料プランなし。CPUでのリアルタイム推論、オプションでCUDA GPUアクセラレーション。',
          '最新リリース:v1.8.0、2026年9月4日公開。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ライセンスは2025年に変更されました。それ以前にMITライセンスだという前提でPiperを評価したことがある場合は、クローズドソース製品で現行の保守リポジトリを使う前に必ず再確認してください — 詳細は下記のライセンスとコストのセクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:RhasspyからOpen Home Foundationへ',
        content: [
          '**Piperは、完全にオフラインで動く音声アシスタントを構築するためのオープンソースツールキットであるRhasspyの中で生まれました。** Michael Hansen氏は、話しかけるたびにクラウドTTS APIを往復させることを避けるため、Rhasspyのローカル音声認識と組み合わせる、高速でローカルな音声合成エンジンとしてPiperを開発しました。Piperはニューラルなテキスト→波形変換のVITS系アーキテクチャを採用しています:テキストはまず([espeak-ng](https://github.com/espeak-ng/espeak-ng)を使って)音素に変換され、[ONNX Runtime](https://onnxruntime.ai/)向けにエクスポートされたモデルがその音素から直接波形を合成するため、CPUのみのハードウェアでも高速に推論できます。',
          '**元のリポジトリ[rhasspy/piper](https://github.com/rhasspy/piper)は、オープンソースのホームオートメーションとアクセシビリティの分野で最も広く使われるローカルTTSエンジンの一つに成長しました。** MITライセンスの下で11,000を超えるGitHubスターを集め、[Home Assistant](https://www.home-assistant.io/)の音声パイプラインにおける標準のローカル音声合成エンジンとなりました。',
          '**2025年、開発の中心は新しいリポジトリへ移りました。** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)は2025年3月28日、Home Assistantも運営する非営利団体Open Home Foundationの下で作成されました。元のリポジトリrhasspy/piperはその後、2025年10月6日にアーカイブ(読み取り専用化)されました。元のMITライセンスの下で引き続き利用可能ですが、それ以上の更新は行われません。',
          '**新しいリポジトリは、元のMITライセンスとは異なるGPL-3.0-or-laterライセンスを採用しています。** プロジェクトはREADMEやChangelogでその理由を明言していませんが、piper1-gplは音素化のために[espeak-ng](https://github.com/espeak-ng/espeak-ng)を組み込んでおり、espeak-ng自体がGPL-3.0でライセンスされています。これはライセンス変更の一つのもっともらしい説明ですが、PromptQuorumは公式な理由として確認できたわけではありません。本記事公開時点で、プロジェクト自身のREADMEはOpen Home Foundationが引き続きPiperのメンテナーを募集していると述べています。',
        ],
        faqs: [
          {
            q: 'Piperを開発したのは誰ですか?',
            a: 'PiperはMichael Hansen氏が、オープンソースの音声アシスタントプロジェクトRhasspyの中で開発しました。その後、開発はOpen Home Foundationが保守する新しいリポジトリOHF-Voice/piper1-gplへ移行しました。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Piperが実際にできること',
        content: [
          'Piperはニューラル音声合成パイプラインを使って書かれたテキストを音声に変換します:テキストはespeak-ngを介して音素に変換され、学習済みの声モデルがその音素から波形を合成し、高速化のためONNX Runtime上で実行されます。',
        ],
        items: [
          '**コマンドラインでの合成。** ダウンロード済みの声モデルとともに`python3 -m piper`を実行すると、WAVファイルを生成したり、音声をスピーカーへ直接ストリーミングしたりできます。',
          '**Python API。** `PiperVoice.load()`で声を読み込み、自分のPythonアプリケーションから`.synthesize_wav()`やストリーミング用の`.synthesize()`ジェネレーターを呼び出せます。',
          '**HTTP Webサーバーモード。** Piperは常駐型のWebサーバーとして動作させることができ、声モデルをメモリ上に保持し続けるため、呼び出しのたびに発生するCLIの再読み込みコストを回避できます — 繰り返し利用や本番環境向けに推奨。',
          '**C/C++ API(libpiper)。** 旧Piperリポジトリから移植されたネイティブC++ライブラリとCLIで、Python以外のアプリケーションへPiperを組み込めます。',
          '**生の音素の直接指定。** テキストを`[[ ... ]]`で囲むと、(`espeak-ng --ipa=3`で得られる)IPA音素を直接渡せます。名前や専門用語の誤読を修正する際に便利です。',
          '**オプションのGPUアクセラレーション。** `--cuda`(CLI)や`use_cuda=True`(Python)を指定すると、`onnxruntime-gpu`パッケージ経由でCUDAアクセラレーションが有効になります。ただし、PiperはCPUのみでも十分実用的な速度で動くよう設計されています。',
          '**コミュニティが学習した多言語音声。** 数十の言語と地域バリエーションが、[Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main)から個別にダウンロードできる声モデルとして提供されています。各声は異なるコミュニティ貢献者が学習させているため、品質は声によって異なります。',
        ],
        note: 'Piperは音声合成エンジンであり、声のクローンツールではありません — その声は事前学習済みのモデルであり、ダウンロードして選ぶものであって、短い参照音声からその場で作られるものではありません。声のクローンについては、下記の代替ツールのセクションを参照してください。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Piperのインストールと実行:手順',
        content: 'このガイドでは、プロジェクト自身のCLIおよびPython APIドキュメントに記載された構文を使って、pip経由でPiperをインストールし、最初の音声合成を実行します。',
        numberedItems: [
          {
            title: 'Piperをインストールする。',
            whyItMatters: 'Python環境(Python 3.9以上を推奨)で`pip install piper-tts`を実行します。これで`piper`パッケージとそのONNX Runtime依存関係がインストールされます。CPUのみの利用であればGPUやCUDAのセットアップは不要です。',
          },
          {
            title: '声を一覧表示してダウンロードする。',
            whyItMatters: '引数なしで`python3 -m piper.download_voices`を実行して利用可能な声を一覧表示し、次に`python3 -m piper.download_voices en_US-lessac-medium`を実行して特定の声をカレントディレクトリにダウンロードします。',
          },
          {
            title: 'コマンドラインから音声を合成する。',
            whyItMatters: '`python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'`を実行してWAVファイルを書き出します。`ffplay`がインストールされていれば、`-f`フラグを省略することで保存する代わりにすぐに音声を聞けます。',
          },
          {
            title: '(任意)CLIの代わりにPython APIを使う。',
            whyItMatters: 'アプリケーション内で繰り返し利用する場合、`from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")`の後に`voice.synthesize_wav(text, wav_file)`を呼ぶことで、呼び出しのたびに発生するCLIの起動コストを避けられます。',
          },
          {
            title: '(任意)GPUアクセラレーションを有効にする。',
            whyItMatters: '`onnxruntime-gpu`パッケージをインストールし、CLIでは`--cuda`を、Pythonでは`PiperVoice.load()`に`use_cuda=True`を渡します。任意の設定です — PiperはCPUのみでもリアルタイムに動作するよう設計されています。',
          },
          {
            title: '(任意)繰り返し利用のためにWebサーバーを実行する。',
            whyItMatters: '本番環境や繰り返し利用する構成では、PiperのHTTP Webサーバーモードを実行し、CLI呼び出しのたびに再読み込みするのではなく、声モデルをメモリ上に保持し続けるようにします。',
          },
          {
            title: '(任意)生の音素で誤読を修正する。',
            whyItMatters: '`espeak-ng -v en-us --ipa=3 -q <単語>`である単語のIPA音素を取得し、それを入力テキスト内で`[[ ... ]]`で囲むことで、その単語に対するPiperの自動発音を上書きします。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          '上記の基本的なインストール手順に加えて、以下はプロジェクト自身のドキュメントに記載されている一般的な実用パターンです。',
        ],
        codeBlock: `# コマンドライン:WAVファイルを書き出す
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# コマンドライン:音声をすぐに再生する(ffplayが必要)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# Python API
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# Python API:合成設定を調整する(速度・音量・表現力)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # 半分の音量
    length_scale=2.0,  # 2倍遅く
    noise_scale=1.0,   # より多くの音声バリエーション
    noise_w_scale=1.0, # より多くの話し方のバリエーション
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# Python API:GPUアクセラレーション(onnxruntime-gpuが必要)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# Python API:ストリーミング合成
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'ここで示したパラメータ(`--cuda`、`SynthesisConfig`、`use_cuda`、ストリーミング用の`synthesize()`ジェネレーター)は、GitHub上のプロジェクトのdocs/CLI.mdおよびdocs/API_PYTHON.mdに記載されています。オプションはバージョン間で変わる可能性があるため、本番環境へのデプロイ前に最新のドキュメントを確認してください。',
        items: [
          '**生の音素の直接指定**による発音修正:`espeak-ng -v en-us --ipa=3 -q <単語>`で得たIPA音素を使って、`The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]`のようにテキストを囲みます。',
          '**libpiper C/C++ API**は、Pythonランタイムなしでネイティブアプリケーションに直接Piperを組み込むための`piper_create()`(より細かい制御が必要な場合は`piper_create_with_options()`)を公開しています。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスとコスト',
        content: [
          '**実際に保守されているPiperのリポジトリ[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)はGPL-3.0-or-laterライセンスの下にあります。** これは[PyPI](https://pypi.org/project/piper-tts/)上で公開されている`piper-tts`パッケージのメタデータからも確認できます。これは、2025年10月6日にアーカイブされる前はMITライセンスだった元のリポジトリ[rhasspy/piper](https://github.com/rhasspy/piper)からの変更であり、そちらは今もMITライセンスの下で利用可能ですが、保守はされていません。',
          '**GPL-3.0はコピーレフト・ライセンスであり、商用利用においてMITとは大きく異なります。** Piperを使って音声を生成すること自体は、商用を含めて無料で行えます。しかし、GPL-3.0では、Piper自身のソースコードの改変版を配布する場合 — たとえば自社製品に組み込んだり静的リンクしたりしたフォークなど — その改変されたソースコードを同じGPL-3.0の条件で公開する必要があります。Piperを未改変の外部ツールとして使う(そのCLI・Pythonパッケージ・Webサーバーを別プロセスとして呼び出す)場合、通常は自社アプリケーションの他の部分のソースコードがGPLの対象になることはありませんが、正確な境界線は自分のコードとPiperのコードがどれだけ密接にリンクしているかによって変わります。この段落はライセンスの大まかな性質を説明するものであり、法的助言ではありません — Piperを組み込んだ商用製品を出荷する前に、自身の具体的な導入形態について弁護士に相談してください。',
          '**Piper自体に有料プラン、サブスクリプション、ライセンス料はありません。** 実際にかかるコストは、実行するハードウェアと自身の開発時間のみです。声モデルは共有の[Hugging Faceリポジトリ](https://huggingface.co/rhasspy/piper-voices/tree/main)から個別にダウンロードします。声は異なるコミュニティメンバーによって提供されており、Piper本体と同じライセンスであるとは限らないため、再配布する前に各声に記載されたライセンスを確認してください。',
        ],
        faqs: [
          {
            q: 'Piperはどのライセンスを使っていますか?',
            a: '実際に保守されているPiperのリポジトリ(OHF-Voice/piper1-gpl)はGPL-3.0-or-laterライセンスです。今はアーカイブされている元のリポジトリrhasspy/piperはMITライセンスでした。これは商用利用において実質的な違いです — GPL-3.0では、Piper自身のソースコードの改変版を配布する場合、同じライセンスでの公開が求められますが、MITではそうした要件はありませんでした。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Piperが向いていない用途',
        content: [
          'Piperは高速で汎用的なローカル音声合成エンジンであり、声のクローンや表現豊かな発話のためのツールではありません。以下のような用途には向いていません:',
        ],
        items: [
          '**表現豊かで感情的な、あるいは数秒での声のクローン。** Piperは事前学習済みの声モデルから音声を合成するのであって、特定の人物の短い参照音声から合成するわけではありません。数秒のサンプル音声から声をクローンしたい、あるいはより感情豊かな発話が必要な場合は、[XTTS v2](https://huggingface.co/coqui/XTTS-v2)がそのために作られています — その(非商用の)ライセンス条件についてはPromptQuorumの[ローカルTTSライセンスガイド](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)を参照してください。',
          '**短いサンプルからのマルチスピーカー・クローン。** 同様に、Piperには特定の話者の音声サンプルからその場で新しい声を生成する仕組みは組み込まれていません。各声は個別に学習・配布されたモデルです。',
          '**クローズドソース製品におけるGPL-3.0コピーレフトの義務。** Piper自身のソースコードを改変してクローズドソースのバイナリの中で配布するようなユースケースの場合、現行リポジトリのGPL-3.0-or-laterライセンスは、元のMITライセンスのリポジトリにはなかった実質的な制約となります。上記のライセンスとコストのセクションを確認し、そのような導入の前に弁護士に相談してください。',
          '**すべての言語で一貫した音声品質の保証。** 声は異なるコミュニティメンバーによって学習・提供されているため、言語や声によって品質が大きく異なります — 本番アプリケーションでPiperの採用を決める前に、対象言語のサンプルを確認してください。',
          '**長期的な保守の確実性。** 本記事公開時点で、プロジェクト自身のREADMEはOpen Home FoundationがPiperの追加メンテナーを募集していると述べています。これは、重要なインフラをその上に構築する判断をする際に考慮すべき点です。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Piperの代替ツール',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            '最適な用途': '幅広い言語サポートを持つ柔軟なマルチバックエンド・ツールキット(VITS、Tacotron2、XTTS)',
            'ライセンス': 'MPL-2.0',
          },
          {
            'ツール': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            '最適な用途': '数秒の参照音声からの、17言語対応の声のクローン',
            'ライセンス': 'CPML(非商用)',
          },
          {
            'ツール': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最適な用途': '最高水準の自然な英語ナレーション品質(声のクローンなし)',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[Bark](https://github.com/suno-ai/bark)',
            '最適な用途': '笑い声・ため息・環境音など表現豊かな非音声オーディオ',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[ElevenLabs](https://elevenlabs.io)',
            '最適な用途': '自前ホスティングを避けたいチーム向けのマネージド・クラウドAPI。商用の声のクローンにも対応',
            'ライセンス': 'プロプライエタリ(有料クラウドAPI)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Piperとは何ですか?',
            a: 'PiperはMichael Hansen氏がRhasspy音声アシスタントプロジェクトの中で開発し、現在はOpen Home Foundationが保守する無料のローカル・ニューラル音声合成エンジンで、CPUのみのハードウェアでもリアルタイム動作するほど高速にテキストを音声に変換します。',
          },
          {
            q: 'Piperは無料ですか?',
            a: 'はい。Piperには有料プラン、サブスクリプション、ライセンス料はありません。現在はGPL-3.0-or-laterライセンスの下にあり、利用自体は無料ですが、Piper自身のソースコードの改変版を配布する際には条件が課されます — 詳細はライセンスとコストのセクションを参照してください。',
          },
          {
            q: 'Piperの実行にGPUは必要ですか?',
            a: 'いいえ。PiperはRaspberry Piを含むCPUのみのハードウェアでリアルタイムに動作するよう設計されています。より高いスループットが必要な場合は、onnxruntime-gpuパッケージ経由でオプションのCUDA GPUアクセラレーションを利用できます。',
          },
          {
            q: 'rhasspy/piperとOHF-Voice/piper1-gplの違いは何ですか?',
            a: 'rhasspy/piperは、Rhasspyプロジェクトの中で作られたMITライセンスの元のリポジトリで、2025年10月6日にアーカイブ(読み取り専用化)されました。OHF-Voice/piper1-gplは、2025年3月28日にOpen Home Foundationの下で作成された、実際に保守されている後継リポジトリで、MITではなくGPL-3.0-or-laterライセンスの下にあります。',
          },
          {
            q: 'Piperは特定の人物の声をクローンできますか?',
            a: '短い音声サンプルからはできません。Piperはダウンロードして選択した事前学習済みの声モデルを使って音声を合成するのであって、数秒の参照音声からその場で新しい声をクローンするわけではありません。それが目的であれば、数秒での声のクローン専用に設計されたXTTS v2を参照してください。',
          },
          {
            q: 'PiperはHome Assistantで使われていますか?',
            a: 'はい。Piperは、Home Assistantの音声アシスタント・パイプラインにおける標準のローカル音声合成エンジンであり、Home Assistantを運営するのと同じ非営利団体Open Home Foundationが保守しています。',
          },
          {
            q: '現在Piperを保守しているのは誰ですか?',
            a: 'Piperは、2025年に元のRhasspyでホストされていたリポジトリから開発が移行した後、Open Home Foundationの下のOHF-Voice/piper1-gplリポジトリで保守されています。プロジェクトのREADMEには、Open Home Foundationが現在追加のメンテナーを募集していると記されています。',
          },
          {
            q: 'Piperの最新リリースは何ですか?',
            a: '最新の安定版はv1.8.0で、プロジェクトのGitHubリリースページによると2026年9月4日に公開されました。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Piperは今も、控えめなハードウェア上で本物のローカル音声合成を動かす最速の手段の一つであり続けています。そのCPUのみでのリアルタイム性能こそがHome Assistantの標準の声となった理由であり、それは新しい保守体制の下でも変わっていません。変わったのは、そして2026年にPiperを評価するすべての人が知っておくべきなのは、ライセンスです。実際に保守されているリポジトリは、2025年にOpen Home Foundationへ開発が移行した際にMITからGPL-3.0-or-laterへ変わりました。これは、改変したPiperのソースコードをクローズドソース製品に組み込んで配布しようとしている人にとって実質的な違いです。それでも無料で、十分に文書化されており、活発にリリースが続いています(2026年9月時点でv1.8.0)。プロジェクト自身のメンテナーが公然と追加の協力者を求めている点は留意すべきですが。CPUクラスのハードウェア上で高速・オフライン・汎用的な音声合成を求めるなら、Piperはよく検証された無料の選択肢です — 数秒での表現豊かな声のクローンが必要な場合は、本レビューとあわせてPromptQuorumの[XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)の解説や、マネージド・クラウドの代替との比較である[ElevenLabs対ローカルTTS比較](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)も参照してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のOHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) — 実際に保守されているリポジトリ:README、ドキュメント、ライセンス、リリース履歴。',
          '[PyPI上のpiper-tts](https://pypi.org/project/piper-tts/) — 公開されているパッケージメタデータ。現行のGPL-3.0-or-laterライセンスを含む。',
          '[GitHub上のrhasspy/piper](https://github.com/rhasspy/piper) — 今はアーカイブされている元のリポジトリ(MITライセンス)。',
          '[piper1-gplのリリース](https://github.com/OHF-Voice/piper1-gpl/releases) — v1.8.0(2026年9月4日)を含むバージョン履歴。',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — PiperとHome Assistantを保守する非営利団体。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルTTSと声のクローンのライセンス:Piper、XTTS v2、F5-TTS、Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 主要なローカルTTSエンジン全体のライセンス比較。',
          '[ElevenLabs対Piper対XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 自前ホスティングを検討する読者向けのクラウド対ローカル比較。',
          '[2026年版・完全オフライン音声アシスタントの構築](/power-local-llm/build-local-voice-assistant-2026) — Piperをローカルなら LLMおよびWhisperベースのSTTエンジンとつなぎ、完全な音声パイプラインを構築する方法。',
          '[Whisper.cppレビュー](/power-local-llm/whisper-cpp-review) — 同じ深さで解説したローカル音声認識の対となる記事。',
          '[faster-whisperレビュー](/power-local-llm/faster-whisper-review) — 同じ深さで解説したCTranslate2ベースの音声認識の代替。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTSレビュー(2026):高速なローカル・ニューラル音声合成',
      description:
        'Piper TTSレビュー:Rhasspyプロジェクト発、現在はOpen Home Foundationが保守する無料のローカル・ニューラル音声合成エンジン。歴史、インストール手順、実際のコマンド、現行のGPL-3.0ライセンス、XTTS v2を選ぶべき場面を解説。',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'ja',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカル・オフラインの音声合成ツールを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '音声合成' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTSレビュー(2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-pt.webp',
    title: 'Piper TTS: análise (2026) — síntese de voz neural local e rápida',
    seoTitle: 'Piper TTS: análise 2026 — TTS local rápido',
    intro:
      'O Piper é um mecanismo de síntese de voz neural local e gratuito que converte texto em áudio falado inteiramente no seu próprio dispositivo, criado originalmente dentro do projeto de assistente de voz de código aberto [Rhasspy](https://github.com/rhasspy) por Michael Hansen. Em 2025, o desenvolvimento ativo migrou para um novo repositório, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), mantido pela [Open Home Foundation](https://www.openhomefoundation.org/) — a organização sem fins lucrativos por trás do Home Assistant — e o repositório original [rhasspy/piper](https://github.com/rhasspy/piper) foi arquivado (tornado somente leitura) em 6 de outubro de 2025. Esta análise cobre essa história, comandos reais de instalação e uso, sua licença atual (que mudou de MIT para GPL-3.0-or-later) e onde o Piper não é a ferramenta certa — com um link para o guia de licenças da PromptQuorum e sua comparação com o ElevenLabs.',
    metaDescription:
      'Piper TTS: análise do mecanismo de síntese de voz neural local e gratuito do projeto Rhasspy, hoje mantido pela Open Home Foundation. História, instalação, comandos reais, licença GPL-3.0 atual e quando escolher o XTTS v2 em vez dele.',
    twitterDescription:
      'Piper TTS: análise 2026 — síntese de voz neural local e rápida, em tempo real até mesmo em um Raspberry Pi, criada por Michael Hansen e hoje mantida pela Open Home Foundation. Comandos reais de instalação, a mudança de licença GPL-3.0 de 2025 e limites honestos.',
    audience:
      'Desenvolvedores e entusiastas que constroem assistentes de voz locais, ferramentas de acessibilidade ou apps offline e precisam de síntese de voz rápida sem API na nuvem, sem GPU e sem custo por caractere.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS análise',
    targetKeywords: [
      'piper tts análise',
      'piper tts',
      'instalar piper tts',
      'piper tts python',
      'licença piper tts',
      'ohf-voice piper1-gpl',
      'síntese de voz neural local',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**O Piper é um mecanismo de síntese de voz neural local e gratuito, criado dentro do projeto de assistente de voz Rhasspy por Michael Hansen, hoje mantido pela Open Home Foundation em [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), rápido o suficiente para rodar em tempo real em hardware somente com CPU, como um Raspberry Pi.** Instale com `pip install piper-tts`. Desde 2025, o repositório ativamente mantido está sob a licença GPL-3.0-or-later — uma mudança em relação à licença MIT do repositório original `rhasspy/piper`, agora arquivado. Para uma análise de licenças entre Piper, Coqui TTS, XTTS v2, F5-TTS, Bark e StyleTTS 2, veja o [guia de licenças de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) da PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o Piper TTS e ele ainda é mantido?',
        answer:
          'O Piper vale a pena se você quer síntese de voz rápida e totalmente local, que roda em hardware somente com CPU, incluindo um Raspberry Pi, sem enviar texto para uma API na nuvem. Ele foi criado dentro do projeto de assistente de voz de código aberto Rhasspy por Michael Hansen e é mais conhecido como o mecanismo TTS local padrão no pipeline de voz do Home Assistant. Sim, ele ainda é mantido: depois que o repositório original rhasspy/piper foi arquivado em 6 de outubro de 2025, o desenvolvimento ativo continuou em um novo repositório, OHF-Voice/piper1-gpl, sob a Open Home Foundation. O ponto importante a saber é a licença — o repositório ativamente mantido está sob GPL-3.0-or-later, não a licença MIT original, e o próprio README do projeto indica que atualmente busca mais mantenedores. Escolha o XTTS v2 em vez disso se precisar de clonagem de voz expressiva e emocional a partir de poucos segundos de áudio; as vozes do Piper são pré-treinadas, não clonadas a partir de uma amostra curta.',
        bullets: [
          'Criado dentro do projeto de assistente de voz Rhasspy por Michael Hansen; repositório original arquivado em 6 de outubro de 2025.',
          'Desenvolvimento ativo agora sob a Open Home Foundation em OHF-Voice/piper1-gpl, criado em 28 de março de 2025.',
          'Mudança de licença: de MIT (repositório arquivado) para GPL-3.0-or-later (repositório atual) — verifique isso antes de incorporar o Piper em um produto de código fechado.',
          'Gratuito, sem plano pago; roda em tempo real em hardware somente com CPU, incluindo um Raspberry Pi, com aceleração GPU CUDA opcional.',
          'Última versão: v1.8.0, publicada em 4 de setembro de 2026, segundo a página de releases do projeto no GitHub.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'História: de Rhasspy à Open Home Foundation', anchor: 'history' },
      { label: 'O que o Piper realmente faz', anchor: 'what-it-does' },
      { label: 'Instalar e executar o Piper: passo a passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos de uso reais', anchor: 'usage-examples' },
      { label: 'Licença e custo', anchor: 'license-cost' },
      { label: 'Para que o Piper não serve', anchor: 'limitations' },
      { label: 'Alternativas ao Piper', anchor: 'alternatives' },
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
            text: 'O Piper é um mecanismo de síntese de voz neural local e gratuito, criado originalmente dentro do projeto de assistente de voz Rhasspy por Michael Hansen e hoje mantido pela Open Home Foundation, rápido o suficiente para rodar em tempo real em hardware somente com CPU, como um Raspberry Pi, cuja licença passou de MIT para GPL-3.0-or-later ao migrar para um novo repositório em 2025.',
          },
          {
            type: 'plain-terms',
            text: 'É um programa que você instala com `pip install` e que transforma texto digitado em áudio falado no seu próprio dispositivo — sem conta na nuvem, sem necessidade de conexão à internet, e roda rápido o suficiente para fala em tempo real mesmo em hardware bem modesto.',
          },
        ],
        items: [
          'Criado dentro do projeto de assistente de voz Rhasspy por Michael Hansen.',
          'Repositório original rhasspy/piper arquivado (somente leitura) em 6 de outubro de 2025, sob a licença MIT.',
          'Desenvolvimento ativo hoje em OHF-Voice/piper1-gpl (criado em 28 de março de 2025), sob a Open Home Foundation, a organização sem fins lucrativos por trás do Home Assistant.',
          'Licença atual: GPL-3.0-or-later — uma mudança em relação à licença MIT do repositório arquivado.',
          'Gratuito, sem plano pago; inferência em tempo real na CPU, aceleração GPU CUDA opcional.',
          'Última versão: v1.8.0, publicada em 4 de setembro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A licença mudou em 2025. Se você avaliou o Piper antes disso presumindo que ele fosse licenciado como MIT, verifique novamente antes de usar o repositório atualmente mantido em um produto de código fechado — veja a seção Licença e custo abaixo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: de Rhasspy à Open Home Foundation',
        content: [
          '**O Piper nasceu dentro do Rhasspy**, um conjunto de ferramentas de código aberto para construir assistentes de voz totalmente offline, onde Michael Hansen o desenvolveu como um mecanismo de síntese de voz local e rápido para combinar com o reconhecimento de voz local do Rhasspy — evitando uma ida e volta a uma API TTS na nuvem a cada resposta falada. O Piper usa uma arquitetura neural de texto para forma de onda do tipo VITS: o texto é primeiro convertido em fonemas (usando o [espeak-ng](https://github.com/espeak-ng/espeak-ng)), e então um modelo exportado para o [ONNX Runtime](https://onnxruntime.ai/) sintetiza diretamente uma forma de onda a partir desses fonemas, com inferência rápida mesmo em hardware somente com CPU.',
          '**O repositório original, [rhasspy/piper](https://github.com/rhasspy/piper), tornou-se um dos mecanismos TTS locais mais usados** no ecossistema de código aberto de automação residencial e acessibilidade, acumulando mais de 11.000 estrelas no GitHub sob sua licença MIT. Tornou-se o mecanismo de síntese de voz local padrão no pipeline de voz do [Home Assistant](https://www.home-assistant.io/).',
          '**Em 2025, o desenvolvimento ativo migrou para um novo repositório.** O [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) foi criado em 28 de março de 2025, sob a Open Home Foundation — a organização sem fins lucrativos que também administra o Home Assistant. O repositório original rhasspy/piper foi posteriormente arquivado (tornado somente leitura) em 6 de outubro de 2025; ele permanece disponível sob sua licença MIT original, mas não recebe mais atualizações.',
          '**O novo repositório usa uma licença diferente: GPL-3.0-or-later**, em vez da licença MIT original. O projeto não declara o motivo no README ou no changelog, mas o piper1-gpl incorpora o [espeak-ng](https://github.com/espeak-ng/espeak-ng) para fonemização, e o próprio espeak-ng é licenciado sob GPL-3.0 — uma explicação plausível para a mudança de licença, que a PromptQuorum, no entanto, não conseguiu confirmar como o motivo declarado oficialmente. No momento desta publicação, o próprio README do projeto afirma que a Open Home Foundation está buscando mais mantenedores para o Piper.',
        ],
        faqs: [
          {
            q: 'Quem criou o Piper?',
            a: 'O Piper foi criado por Michael Hansen dentro do projeto de assistente de voz de código aberto Rhasspy. O desenvolvimento migrou depois para um novo repositório, OHF-Voice/piper1-gpl, mantido pela Open Home Foundation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o Piper realmente faz',
        content: [
          'O Piper converte texto escrito em áudio falado usando um pipeline de síntese de voz neural: o texto é convertido em fonemas via espeak-ng, e então um modelo de voz treinado sintetiza uma forma de onda a partir desses fonemas, rodando sobre o ONNX Runtime para velocidade.',
        ],
        items: [
          '**Síntese via linha de comando.** Execute `python3 -m piper` com um modelo de voz baixado para sintetizar um arquivo WAV ou transmitir áudio diretamente para os alto-falantes.',
          '**API Python.** Carregue uma voz com `PiperVoice.load()` e chame `.synthesize_wav()` ou o gerador de streaming `.synthesize()` a partir da sua própria aplicação Python.',
          '**Modo servidor web HTTP.** O Piper pode rodar como um servidor web persistente para que os modelos de voz permaneçam carregados na memória, evitando o custo de recarregamento da CLI a cada chamada — recomendado para uso repetido ou em produção.',
          '**API C/C++ (libpiper).** Uma biblioteca C++ nativa e sua CLI, portada do repositório Piper legado, para incorporar o Piper em aplicações que não usam Python.',
          '**Injeção de fonemas brutos.** Envolver o texto em `[[ ... ]]` permite passar fonemas IPA diretamente (obtidos de `espeak-ng --ipa=3`), útil para corrigir a pronúncia de nomes ou termos técnicos.',
          '**Aceleração GPU opcional.** Passar `--cuda` (CLI) ou `use_cuda=True` (Python) ativa a aceleração CUDA via o pacote `onnxruntime-gpu`, embora o Piper seja projetado para rodar em velocidade aceitável apenas com CPU.',
          '**Vozes multilíngues treinadas pela comunidade.** Dezenas de idiomas e variantes regionais estão disponíveis como modelos de voz baixados separadamente pelo [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main); a qualidade varia por voz, já que são treinadas por diferentes colaboradores da comunidade.',
        ],
        note: 'O Piper é um mecanismo de síntese de voz, não uma ferramenta de clonagem de voz — suas vozes são modelos pré-treinados que você baixa e seleciona, não criadas na hora a partir de um trecho curto de áudio de referência. Para isso, veja as alternativas de clonagem de voz na seção Alternativas abaixo.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar e executar o Piper: passo a passo',
        content: 'Este guia instala o Piper via pip e executa uma primeira síntese, seguindo a sintaxe documentada na própria CLI e na API Python do projeto.',
        numberedItems: [
          {
            title: 'Instalar o Piper.',
            whyItMatters: 'Execute `pip install piper-tts` em um ambiente Python (recomenda-se Python 3.9+). Isso instala o pacote `piper` e sua dependência do ONNX Runtime; nenhuma configuração de GPU ou CUDA é necessária para uso somente com CPU.',
          },
          {
            title: 'Listar e baixar uma voz.',
            whyItMatters: 'Execute `python3 -m piper.download_voices` sem argumentos para listar as vozes disponíveis, depois `python3 -m piper.download_voices en_US-lessac-medium` para baixar uma voz específica para o diretório atual.',
          },
          {
            title: 'Sintetizar fala pela linha de comando.',
            whyItMatters: 'Execute `python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` para escrever um arquivo WAV. Com o `ffplay` instalado, omita o `-f` para ouvir o áudio imediatamente em vez de salvá-lo.',
          },
          {
            title: '(Opcional) Usar a API Python em vez da CLI.',
            whyItMatters: 'Para uso repetido dentro de uma aplicação, `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` seguido de `voice.synthesize_wav(text, wav_file)` evita o custo de inicialização da CLI a cada chamada.',
          },
          {
            title: '(Opcional) Ativar a aceleração GPU.',
            whyItMatters: 'Instale o pacote `onnxruntime-gpu`, depois passe `--cuda` na CLI ou `use_cuda=True` para `PiperVoice.load()` no Python. É opcional — o Piper é projetado para rodar em tempo real apenas com CPU.',
          },
          {
            title: '(Opcional) Executar o servidor web para uso repetido.',
            whyItMatters: 'Para uma configuração de produção ou de uso repetido, execute o modo servidor web HTTP do Piper para que o modelo de voz permaneça carregado na memória em vez de ser recarregado a cada chamada da CLI.',
          },
          {
            title: '(Opcional) Corrigir uma palavra mal pronunciada com fonemas brutos.',
            whyItMatters: 'Obtenha os fonemas IPA de uma palavra com `espeak-ng -v en-us --ipa=3 -q <palavra>`, depois envolva-os em `[[ ... ]]` dentro do texto de entrada para substituir a pronúncia automática do Piper para essa palavra.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos de uso reais',
        content: [
          'Além do guia básico de instalação acima, estes são padrões de uso reais comuns retirados da própria documentação do projeto.',
        ],
        codeBlock: `# Linha de comando: escrever um arquivo WAV
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# Linha de comando: reproduzir áudio imediatamente (requer ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# API Python
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# API Python: ajustar a síntese (velocidade, volume, expressividade)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # metade do volume
    length_scale=2.0,  # duas vezes mais lento
    noise_scale=1.0,   # mais variação de áudio
    noise_w_scale=1.0, # mais variação na fala
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# API Python: aceleração GPU (requer onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# API Python: síntese em streaming
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'Os parâmetros mostrados aqui (`--cuda`, `SynthesisConfig`, `use_cuda`, o gerador de streaming `synthesize()`) estão documentados em docs/CLI.md e docs/API_PYTHON.md do projeto no GitHub. Verifique a documentação atual antes de implantar em produção, já que as opções podem mudar entre versões.',
        items: [
          '**Injeção de fonemas brutos** para corrigir pronúncia: envolva texto como `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` usando fonemas IPA obtidos com `espeak-ng -v en-us --ipa=3 -q <palavra>`.',
          '**API C/C++ libpiper** expõe `piper_create()` (ou `piper_create_with_options()` para controle mais fino) para incorporar o Piper diretamente em uma aplicação nativa sem um runtime Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e custo',
        content: [
          '**O repositório Piper ativamente mantido, [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl), é licenciado sob GPL-3.0-or-later**, confirmado pelos metadados publicados do pacote `piper-tts` no [PyPI](https://pypi.org/project/piper-tts/). Essa é uma mudança em relação ao repositório original [rhasspy/piper](https://github.com/rhasspy/piper), que era licenciado sob MIT antes de ser arquivado em 6 de outubro de 2025 e permanece disponível sob essa licença MIT, sem manutenção.',
          '**A GPL-3.0 é uma licença copyleft, o que é uma diferença real em relação à MIT para uso comercial.** Você pode usar o Piper gratuitamente, inclusive comercialmente, para gerar fala. Mas a GPL-3.0 exige que, se você distribuir uma versão modificada do próprio código-fonte do Piper — por exemplo, um fork incorporado ou vinculado estaticamente ao seu produto — você deve liberar esse código modificado sob os mesmos termos da GPL-3.0. Usar o Piper sem modificações como uma ferramenta externa (chamando sua CLI, seu pacote Python ou seu servidor web como um processo separado) geralmente não coloca o restante do código da sua aplicação sob a GPL, mas o limite exato depende de quão estreitamente seu código está vinculado ao do Piper. Este parágrafo explica a forma geral da licença; não é aconselhamento jurídico — consulte um advogado para sua implantação específica antes de lançar um produto comercial construído sobre o Piper.',
          '**Não há plano pago, assinatura ou taxa de licença para o Piper em si.** Os únicos custos são o hardware em que ele roda e o seu próprio tempo de desenvolvimento. Os modelos de voz são baixados separadamente de um [repositório compartilhado no Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main); verifique a licença indicada para cada voz individual antes de redistribuí-la, já que as vozes são contribuídas por diferentes membros da comunidade e não têm garantia de compartilhar a mesma licença do código do Piper.',
        ],
        faqs: [
          {
            q: 'Qual licença o Piper usa?',
            a: 'O repositório Piper ativamente mantido (OHF-Voice/piper1-gpl) é licenciado sob GPL-3.0-or-later. O repositório original, agora arquivado, rhasspy/piper era licenciado sob MIT. Essa é uma diferença real para uso comercial — a GPL-3.0 exige liberar sob a mesma licença as modificações do próprio código-fonte do Piper caso sejam distribuídas, algo que a MIT não exigia.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o Piper não serve',
        content: [
          'O Piper é um mecanismo de síntese de voz local rápido e de propósito geral, não uma ferramenta de clonagem de voz ou fala expressiva. É a ferramenta errada nas seguintes situações:',
        ],
        items: [
          '**Clonagem de voz expressiva, emocional ou a partir de poucos segundos.** O Piper sintetiza fala a partir de modelos de voz pré-treinados, não a partir de um trecho curto de áudio de referência de uma pessoa específica. Se você precisa clonar uma voz a partir de poucos segundos de áudio de amostra, ou quer uma entonação mais expressiva, o [XTTS v2](https://huggingface.co/coqui/XTTS-v2) foi feito para isso — veja o [guia de licenças de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) da PromptQuorum para seus termos de licença (não comercial).',
          '**Clonagem multi-falante a partir de uma amostra curta.** Da mesma forma, o Piper não tem nenhum mecanismo integrado para gerar na hora uma nova voz a partir de uma amostra de áudio de um falante específico; cada voz é um modelo treinado e distribuído separadamente.',
          '**Obrigações copyleft da GPL-3.0 em um produto de código fechado.** Se o seu caso de uso envolve modificar e redistribuir o próprio código-fonte do Piper dentro de um binário de código fechado, a licença GPL-3.0-or-later do repositório atual é uma restrição real que o repositório original, licenciado sob MIT, não tinha. Revise a seção Licença e custo acima e consulte um advogado antes desse tipo de implantação.',
          '**Qualidade de voz garantida e consistente em todos os idiomas.** Como as vozes são treinadas e contribuídas por diferentes membros da comunidade, a qualidade varia perceptivelmente por idioma e por voz específica — verifique amostras do seu idioma alvo antes de se comprometer com o Piper para uma aplicação de produção.',
          '**Certeza de manutenção de longo prazo.** No momento desta publicação, o próprio README do projeto afirma que a Open Home Foundation está buscando mais mantenedores para o Piper, algo a considerar antes de construir infraestrutura crítica sobre ele.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao Piper',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor para', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'Melhor para': 'Kit de ferramentas flexível multi-backend (VITS, Tacotron2, XTTS) com amplo suporte a idiomas',
            'Licença': 'MPL-2.0',
          },
          {
            'Ferramenta': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'Melhor para': 'Clonagem de voz a partir de poucos segundos de áudio de referência, em 17 idiomas',
            'Licença': 'CPML (não comercial)',
          },
          {
            'Ferramenta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Melhor para': 'Maior qualidade de narração natural em inglês (sem clonagem de voz)',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[Bark](https://github.com/suno-ai/bark)',
            'Melhor para': 'Áudio expressivo não verbal — risadas, suspiros, sons ambientes',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[ElevenLabs](https://elevenlabs.io)',
            'Melhor para': 'API na nuvem gerenciada para equipes que preferem não se autoalojar, com clonagem de voz comercial',
            'Licença': 'Proprietária (API na nuvem paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o Piper?',
            a: 'O Piper é um mecanismo de síntese de voz neural local e gratuito, criado dentro do projeto de assistente de voz Rhasspy por Michael Hansen, hoje mantido pela Open Home Foundation, que converte texto em áudio falado rápido o suficiente para rodar em tempo real em hardware somente com CPU.',
          },
          {
            q: 'O Piper é gratuito?',
            a: 'Sim. O Piper não tem plano pago, assinatura ou taxa de licença. Ele é licenciado atualmente sob GPL-3.0-or-later, que é gratuita para uso mas impõe condições à distribuição de versões modificadas do próprio código-fonte do Piper — veja a seção Licença e custo para detalhes.',
          },
          {
            q: 'Preciso de uma GPU para rodar o Piper?',
            a: 'Não. O Piper é projetado para rodar em tempo real em hardware somente com CPU, incluindo um Raspberry Pi. Aceleração GPU CUDA opcional está disponível via o pacote onnxruntime-gpu para maior throughput.',
          },
          {
            q: 'Qual é a diferença entre rhasspy/piper e OHF-Voice/piper1-gpl?',
            a: 'rhasspy/piper é o repositório original, criado dentro do projeto Rhasspy e licenciado sob MIT; foi arquivado (somente leitura) em 6 de outubro de 2025. OHF-Voice/piper1-gpl é o repositório sucessor ativamente mantido, criado em 28 de março de 2025 sob a Open Home Foundation, e licenciado sob GPL-3.0-or-later em vez de MIT.',
          },
          {
            q: 'O Piper pode clonar a voz de uma pessoa específica?',
            a: 'Não a partir de uma amostra curta de áudio. O Piper sintetiza fala usando modelos de voz pré-treinados que você baixa e seleciona; ele não clona uma nova voz na hora a partir de poucos segundos de áudio de referência. Para isso, veja o XTTS v2, projetado especificamente para clonagem de voz em poucos segundos.',
          },
          {
            q: 'O Piper é usado no Home Assistant?',
            a: 'Sim. O Piper é o mecanismo de síntese de voz local padrão no pipeline de assistente de voz do Home Assistant, mantido pela Open Home Foundation, a mesma organização sem fins lucrativos que administra o Home Assistant.',
          },
          {
            q: 'Quem mantém o Piper hoje?',
            a: 'O Piper é mantido sob a Open Home Foundation no repositório OHF-Voice/piper1-gpl, depois que o desenvolvimento migrou para lá a partir do repositório original hospedado no Rhasspy em 2025. O README do projeto afirma que a Open Home Foundation está atualmente buscando mais mantenedores.',
          },
          {
            q: 'Qual é a versão mais recente do Piper?',
            a: 'A versão estável mais recente é a v1.8.0, publicada em 4 de setembro de 2026, segundo a página de releases do projeto no GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Piper continua sendo uma das formas mais rápidas de obter síntese de voz local de verdade em hardware modesto — seu desempenho em tempo real somente com CPU foi o que o tornou a voz padrão do Home Assistant, e isso não mudou sob seus novos mantenedores. O que mudou, e o que todo leitor que avaliar o Piper em 2026 precisa saber, é a licença: o repositório ativamente mantido passou de MIT para GPL-3.0-or-later quando o desenvolvimento migrou para a Open Home Foundation em 2025, uma diferença real para quem planeja incorporar e redistribuir código-fonte modificado do Piper em um produto de código fechado. Ele continua gratuito, bem documentado e com lançamentos ativos (v1.8.0 até setembro de 2026), embora seus próprios mantenedores estejam abertamente buscando mais ajuda. Para síntese de voz rápida, offline e de propósito geral em hardware de classe CPU, o Piper é uma escolha bem verificada e sem custo — para clonagem de voz expressiva em poucos segundos, combine esta análise com a cobertura da PromptQuorum sobre o [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) ou compare com a alternativa gerenciada na nuvem na [comparação ElevenLabs vs TTS local](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[OHF-Voice/piper1-gpl no GitHub](https://github.com/OHF-Voice/piper1-gpl) — o repositório ativamente mantido: README, documentação, licença e histórico de versões.',
          '[piper-tts no PyPI](https://pypi.org/project/piper-tts/) — metadados publicados do pacote, incluindo a licença GPL-3.0-or-later atual.',
          '[rhasspy/piper no GitHub](https://github.com/rhasspy/piper) — o repositório original, agora arquivado (licença MIT).',
          '[Releases do piper1-gpl](https://github.com/OHF-Voice/piper1-gpl/releases) — histórico de versões, incluindo a v1.8.0 (4 de setembro de 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — a organização sem fins lucrativos que mantém o Piper e o Home Assistant.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Licenças de TTS e clonagem de voz local: Piper, XTTS v2, F5-TTS e Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — a análise de licenças de todos os principais mecanismos TTS locais.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — a comparação nuvem vs local para quem está decidindo se deve se autoalojar.',
          '[Construir um assistente de voz totalmente offline em 2026](/power-local-llm/build-local-voice-assistant-2026) — conectar o Piper a um LLM local e a um mecanismo STT baseado em Whisper em um pipeline de voz completo.',
          '[Análise do Whisper.cpp](/power-local-llm/whisper-cpp-review) — o equivalente local de reconhecimento de voz, analisado com o mesmo nível de detalhe.',
          '[Análise do faster-whisper](/power-local-llm/faster-whisper-review) — a alternativa de reconhecimento de voz baseada em CTranslate2, analisada com o mesmo nível de detalhe.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS: análise (2026) — síntese de voz neural local e rápida',
      description:
        'Piper TTS: análise do mecanismo de síntese de voz neural local e gratuito do projeto Rhasspy, hoje mantido pela Open Home Foundation. História, instalação, comandos reais, licença GPL-3.0 atual e quando escolher o XTTS v2 em vez dele.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando ferramentas locais e offline de texto para voz' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'Síntese de voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS: análise (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-ar.webp',
    title: 'مراجعة Piper TTS (2026): تحويل نص إلى كلام عصبي محلي وسريع',
    seoTitle: 'مراجعة Piper TTS 2026: TTS محلي سريع',
    intro:
      'Piper هو محرك تحويل نص إلى كلام عصبي محلي ومجاني، يحوّل النص إلى صوت منطوق بالكامل على جهازك الخاص، وقد طُوِّر في الأصل ضمن مشروع المساعد الصوتي مفتوح المصدر [Rhasspy](https://github.com/rhasspy) بواسطة Michael Hansen. في عام 2025، انتقل التطوير النشط إلى مستودع جديد هو [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)، الذي تصونه [Open Home Foundation](https://www.openhomefoundation.org/) — المؤسسة غير الربحية وراء Home Assistant — وتمت أرشفة المستودع الأصلي [rhasspy/piper](https://github.com/rhasspy/piper) (وتحويله للقراءة فقط) في 6 أكتوبر 2025. تتناول هذه المراجعة هذا التاريخ، وأوامر تثبيت واستخدام حقيقية، ورخصته الحالية (التي تغيّرت من MIT إلى GPL-3.0-or-later)، والحالات التي لا يناسبها Piper — مع رابط إلى دليل رخص PromptQuorum ومقارنته مع ElevenLabs.',
    metaDescription:
      'مراجعة Piper TTS: محرك تحويل نص إلى كلام عصبي محلي ومجاني من مشروع Rhasspy، تصونه اليوم Open Home Foundation. التاريخ، خطوات التثبيت، أوامر حقيقية، رخصة GPL-3.0 الحالية، ومتى تختار XTTS v2 بدلًا منه.',
    twitterDescription:
      'مراجعة Piper TTS 2026: تحويل نص إلى كلام عصبي محلي وسريع، يعمل في الوقت الفعلي حتى على Raspberry Pi، طوّره Michael Hansen وتصونه اليوم Open Home Foundation. أوامر تثبيت حقيقية، تغيير رخصة GPL-3.0 في 2025، وحدود صريحة.',
    audience:
      'المطورون والهواة الذين يبنون مساعدات صوتية محلية أو أدوات إتاحة أو تطبيقات دون اتصال، ويحتاجون تحويل نص إلى كلام سريعًا دون واجهة برمجة سحابية أو GPU أو تكلفة لكل حرف.',
    readTime: '11 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة Piper TTS',
    targetKeywords: [
      'مراجعة piper tts',
      'piper tts',
      'تثبيت piper tts',
      'piper tts python',
      'رخصة piper tts',
      'ohf-voice piper1-gpl',
      'تحويل نص إلى كلام عصبي محلي',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper هو محرك تحويل نص إلى كلام عصبي محلي ومجاني، نشأ ضمن مشروع المساعد الصوتي Rhasspy على يد Michael Hansen، وتصونه اليوم Open Home Foundation عبر [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)، وهو سريع بما يكفي للعمل في الوقت الفعلي على أجهزة تعتمد على CPU فقط مثل Raspberry Pi.** التثبيت عبر `pip install piper-tts`. منذ عام 2025، يخضع المستودع الذي يُصان فعليًا لرخصة GPL-3.0-or-later — وهو تغيير عن رخصة MIT الخاصة بالمستودع الأصلي `rhasspy/piper`، المؤرشف الآن. للاطلاع على مقارنة رخص بين Piper وCoqui TTS وXTTS v2 وF5-TTS وBark وStyleTTS 2، راجع [دليل رخص TTS المحلي](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو Piper TTS، وهل لا يزال يُصان؟',
        answer:
          'يستحق Piper الاستخدام إذا كنت تريد تحويل نص إلى كلام سريعًا ومحليًا بالكامل، يعمل على أجهزة تعتمد على CPU فقط — بما في ذلك Raspberry Pi — دون إرسال أي نص إلى واجهة برمجة سحابية. نشأ ضمن مشروع المساعد الصوتي مفتوح المصدر Rhasspy على يد Michael Hansen، وهو معروف بشكل خاص كمحرك TTS المحلي الافتراضي في خط أنابيب الصوت الخاص بـHome Assistant. نعم، لا يزال يُصان: بعد أرشفة المستودع الأصلي rhasspy/piper في 6 أكتوبر 2025، استمر التطوير النشط في مستودع جديد هو OHF-Voice/piper1-gpl، تحت مظلة Open Home Foundation. النقطة المهمة التي يجب معرفتها هي الرخصة — المستودع الذي يُصان فعليًا يخضع لرخصة GPL-3.0-or-later وليس رخصة MIT الأصلية، ويشير ملف README الخاص بالمشروع نفسه إلى أنه يبحث حاليًا عن صائنين إضافيين. اختر XTTS v2 بدلًا من ذلك إذا كنت بحاجة إلى استنساخ صوتي معبّر وعاطفي من ثوانٍ قليلة من الصوت؛ أصوات Piper مدرّبة مسبقًا وليست مستنسخة من عينة قصيرة.',
        bullets: [
          'نشأ ضمن مشروع المساعد الصوتي Rhasspy على يد Michael Hansen؛ أُرشف المستودع الأصلي في 6 أكتوبر 2025.',
          'التطوير النشط اليوم تحت مظلة Open Home Foundation في OHF-Voice/piper1-gpl، الذي أُنشئ في 28 مارس 2025.',
          'تغيير الرخصة: من MIT (المستودع المؤرشف) إلى GPL-3.0-or-later (المستودع الحالي) — تحقّق من ذلك قبل دمج Piper في منتج مغلق المصدر.',
          'مجاني، بلا خطة مدفوعة؛ يعمل في الوقت الفعلي على أجهزة تعتمد على CPU فقط بما في ذلك Raspberry Pi، مع تسريع GPU عبر CUDA اختياريًا.',
          'أحدث إصدار: v1.8.0، صدر في 4 سبتمبر 2026، وفق صفحة إصدارات المشروع على GitHub.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: من Rhasspy إلى Open Home Foundation', anchor: 'history' },
      { label: 'ما الذي يفعله Piper فعليًا', anchor: 'what-it-does' },
      { label: 'تثبيت وتشغيل Piper: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الرخصة والتكلفة', anchor: 'license-cost' },
      { label: 'ما لا يصلح له Piper', anchor: 'limitations' },
      { label: 'بدائل Piper', anchor: 'alternatives' },
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
            text: 'Piper هو محرك تحويل نص إلى كلام عصبي محلي ومجاني، نشأ في الأصل ضمن مشروع المساعد الصوتي Rhasspy على يد Michael Hansen وتصونه اليوم Open Home Foundation، وهو سريع بما يكفي للعمل في الوقت الفعلي على أجهزة تعتمد على CPU فقط مثل Raspberry Pi، وقد تغيّرت رخصته من MIT إلى GPL-3.0-or-later عند الانتقال إلى مستودع جديد في 2025.',
          },
          {
            type: 'plain-terms',
            text: 'إنه برنامج تثبّته عبر `pip install`، يحوّل النص المكتوب إلى صوت منطوق على جهازك الخاص — دون حساب سحابي أو حاجة لاتصال بالإنترنت، ويعمل بسرعة كافية للكلام في الوقت الفعلي حتى على أجهزة متواضعة جدًا.',
          },
        ],
        items: [
          'نشأ ضمن مشروع المساعد الصوتي Rhasspy على يد Michael Hansen.',
          'أُرشف المستودع الأصلي rhasspy/piper (للقراءة فقط) في 6 أكتوبر 2025، تحت رخصة MIT.',
          'التطوير النشط اليوم في OHF-Voice/piper1-gpl (أُنشئ في 28 مارس 2025)، تحت مظلة Open Home Foundation، المؤسسة غير الربحية وراء Home Assistant.',
          'الرخصة الحالية: GPL-3.0-or-later — تغيير عن رخصة MIT الخاصة بالمستودع المؤرشف.',
          'مجاني، بلا خطة مدفوعة؛ استدلال في الوقت الفعلي على CPU، وتسريع GPU عبر CUDA اختياريًا.',
          'أحدث إصدار: v1.8.0، صدر في 4 سبتمبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تغيّرت الرخصة في 2025. إذا قيّمت Piper قبل ذلك التاريخ على افتراض أنه مرخّص بموجب MIT، فتحقق مجددًا قبل استخدام المستودع الذي يُصان حاليًا في منتج مغلق المصدر — راجع قسم الرخصة والتكلفة أدناه.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: من Rhasspy إلى Open Home Foundation',
        content: [
          '**نشأ Piper ضمن Rhasspy**، وهي مجموعة أدوات مفتوحة المصدر لبناء مساعدات صوتية تعمل دون اتصال بالكامل، حيث طوّره Michael Hansen كمحرك تحويل نص إلى كلام محلي وسريع ليقترن بالتعرف الصوتي المحلي في Rhasspy — متجنبًا رحلة ذهاب وإياب إلى واجهة برمجة TTS سحابية عند كل رد منطوق. يستخدم Piper بنية عصبية من نوع VITS لتحويل النص إلى موجة صوتية مباشرة: يُحوَّل النص أولًا إلى فونيمات (باستخدام [espeak-ng](https://github.com/espeak-ng/espeak-ng))، ثم يقوم نموذج مُصدَّر إلى [ONNX Runtime](https://onnxruntime.ai/) بتوليف موجة صوتية مباشرة من تلك الفونيمات، باستدلال سريع حتى على أجهزة تعتمد على CPU فقط.',
          '**نما المستودع الأصلي، [rhasspy/piper](https://github.com/rhasspy/piper)، ليصبح أحد أكثر محركات TTS المحلية استخدامًا** في نظام أتمتة المنازل والإتاحة مفتوح المصدر، جامعًا أكثر من 11,000 نجمة على GitHub تحت رخصة MIT الخاصة به. وأصبح محرك تحويل النص إلى كلام المحلي الافتراضي في خط أنابيب الصوت الخاص بـ[Home Assistant](https://www.home-assistant.io/).',
          '**في عام 2025، انتقل التطوير النشط إلى مستودع جديد.** أُنشئ [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) في 28 مارس 2025، تحت مظلة Open Home Foundation — المؤسسة غير الربحية التي تُشرف أيضًا على Home Assistant. لاحقًا، أُرشف المستودع الأصلي rhasspy/piper (وتحول للقراءة فقط) في 6 أكتوبر 2025؛ ويظل متاحًا تحت رخصة MIT الأصلية، لكنه لا يتلقى المزيد من التحديثات.',
          '**يحمل المستودع الجديد رخصة مختلفة: GPL-3.0-or-later**، بدلًا من رخصة MIT الأصلية. لا يذكر المشروع السبب في ملف README أو سجل التغييرات، لكن piper1-gpl يدمج [espeak-ng](https://github.com/espeak-ng/espeak-ng) لأغراض التحويل الصوتي، وespeak-ng نفسه مرخّص بموجب GPL-3.0 — وهو تفسير معقول لتغيير الرخصة، إلا أن PromptQuorum لم تتمكن من تأكيده كسبب معلن رسميًا. حتى وقت نشر هذا المقال، يذكر ملف README الخاص بالمشروع أن Open Home Foundation تبحث عن صائنين إضافيين لـPiper.',
        ],
        faqs: [
          {
            q: 'من طوّر Piper؟',
            a: 'طوّر Piper المبرمج Michael Hansen ضمن مشروع المساعد الصوتي مفتوح المصدر Rhasspy. انتقل التطوير لاحقًا إلى مستودع جديد، OHF-Voice/piper1-gpl، تصونه Open Home Foundation.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله Piper فعليًا',
        content: [
          'يحوّل Piper النص المكتوب إلى صوت منطوق عبر خط أنابيب تحويل نص إلى كلام عصبي: يُحوَّل النص إلى فونيمات عبر espeak-ng، ثم يقوم نموذج صوتي مدرَّب بتوليف موجة صوتية من تلك الفونيمات، ويعمل ذلك على ONNX Runtime لتحقيق السرعة.',
        ],
        items: [
          '**التوليف عبر سطر الأوامر.** شغّل `python3 -m piper` مع نموذج صوتي تم تنزيله لتوليف ملف WAV أو بث الصوت مباشرة إلى مكبرات الصوت.',
          '**واجهة برمجة Python.** حمّل صوتًا عبر `PiperVoice.load()` واستدعِ `.synthesize_wav()` أو مولّد البث `.synthesize()` من تطبيق Python الخاص بك.',
          '**وضع خادم ويب HTTP.** يمكن تشغيل Piper كخادم ويب مستمر بحيث تبقى النماذج الصوتية محمَّلة في الذاكرة، متجنبًا تكلفة إعادة تحميل سطر الأوامر عند كل استدعاء — يُنصح به للاستخدام المتكرر أو الإنتاجي.',
          '**واجهة برمجة C/C++ (libpiper).** مكتبة C++ أصلية وسطر أوامر خاص بها، مُنقولة من مستودع Piper القديم، لدمج Piper في تطبيقات غير Python.',
          '**حقن الفونيمات الخام مباشرة.** وضع النص بين `[[ ... ]]` يتيح تمرير فونيمات IPA (من `espeak-ng --ipa=3`) مباشرة، وهو مفيد لتصحيح النطق الخاطئ للأسماء أو المصطلحات التقنية.',
          '**تسريع GPU اختياري.** تمرير `--cuda` (سطر الأوامر) أو `use_cuda=True` (Python) يفعّل تسريع CUDA عبر حزمة `onnxruntime-gpu`، رغم أن Piper مصمَّم للعمل بسرعة مقبولة على CPU وحده.',
          '**أصوات متعددة اللغات مدرَّبة من المجتمع.** تتوفر عشرات اللغات والمتغيرات الإقليمية كنماذج صوتية يمكن تنزيلها بشكل منفصل عبر [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main)؛ وتتفاوت جودة الصوت لأن الأصوات مدرَّبة من قِبل مساهمين مختلفين في المجتمع.',
        ],
        note: 'Piper محرك تحويل نص إلى كلام، وليس أداة استنساخ صوتي — أصواته نماذج مدرَّبة مسبقًا تُنزِّلها وتختارها، وليست مولَّدة فوريًا من مقطع صوتي مرجعي قصير. للاستنساخ الصوتي، راجع البدائل في قسم البدائل أدناه.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تثبيت وتشغيل Piper: خطوة بخطوة',
        content: 'يُثبِّت هذا الدليل Piper عبر pip وينفّذ أول عملية توليف، باتباع الصيغة الموثّقة في وثائق سطر الأوامر وواجهة برمجة Python الخاصة بالمشروع.',
        numberedItems: [
          {
            title: 'تثبيت Piper.',
            whyItMatters: 'شغّل `pip install piper-tts` في بيئة Python (يُنصح بإصدار 3.9 أو أحدث). يثبّت هذا حزمة `piper` واعتماديتها على ONNX Runtime؛ لا حاجة لإعداد GPU أو CUDA للاستخدام على CPU فقط.',
          },
          {
            title: 'عرض قائمة الأصوات وتنزيل أحدها.',
            whyItMatters: 'شغّل `python3 -m piper.download_voices` دون معاملات لعرض الأصوات المتاحة، ثم `python3 -m piper.download_voices en_US-lessac-medium` لتنزيل صوت محدد إلى المجلد الحالي.',
          },
          {
            title: 'توليف الكلام من سطر الأوامر.',
            whyItMatters: 'شغّل `python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'` لكتابة ملف WAV. عند تثبيت `ffplay`، احذف العلامة `-f` لسماع الصوت فورًا بدلًا من حفظه.',
          },
          {
            title: '(اختياري) استخدام واجهة برمجة Python بدلًا من سطر الأوامر.',
            whyItMatters: 'للاستخدام المتكرر داخل تطبيق، يتجنب `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")` متبوعًا بـ`voice.synthesize_wav(text, wav_file)` تكلفة بدء تشغيل سطر الأوامر عند كل استدعاء.',
          },
          {
            title: '(اختياري) تفعيل تسريع GPU.',
            whyItMatters: 'ثبّت حزمة `onnxruntime-gpu`، ثم مرّر `--cuda` في سطر الأوامر أو `use_cuda=True` إلى `PiperVoice.load()` في Python. اختياري — Piper مصمَّم للعمل في الوقت الفعلي على CPU وحده.',
          },
          {
            title: '(اختياري) تشغيل خادم الويب للاستخدام المتكرر.',
            whyItMatters: 'لإعداد إنتاجي أو استخدام متكرر، شغّل وضع خادم الويب HTTP الخاص بـPiper بحيث يبقى النموذج الصوتي محمَّلًا في الذاكرة بدلًا من إعادة تحميله عند كل استدعاء لسطر الأوامر.',
          },
          {
            title: '(اختياري) تصحيح كلمة يُساء نطقها باستخدام فونيمات خام.',
            whyItMatters: 'احصل على فونيمات IPA لكلمة ما عبر `espeak-ng -v en-us --ipa=3 -q <الكلمة>`، ثم ضعها بين `[[ ... ]]` داخل نص الإدخال لتجاوز النطق التلقائي لـPiper لتلك الكلمة.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'إلى جانب دليل التثبيت الأساسي أعلاه، هذه أنماط استخدام واقعية شائعة من وثائق المشروع نفسه.',
        ],
        codeBlock: `# سطر الأوامر: كتابة ملف WAV
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# سطر الأوامر: تشغيل الصوت فورًا (يتطلب ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# واجهة برمجة Python
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# واجهة برمجة Python: ضبط إعدادات التوليف (السرعة، الحجم، التعبير)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # نصف الحجم
    length_scale=2.0,  # أبطأ بمقدار الضعف
    noise_scale=1.0,   # تنوع صوتي أكبر
    noise_w_scale=1.0, # تنوع أكبر في طريقة الكلام
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# واجهة برمجة Python: تسريع GPU (يتطلب onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# واجهة برمجة Python: توليف عبر البث
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: 'المعاملات الموضحة هنا (`--cuda`، `SynthesisConfig`، `use_cuda`، مولّد البث `synthesize()`) موثّقة في docs/CLI.md وdocs/API_PYTHON.md الخاصين بالمشروع على GitHub. تحقق من الوثائق الحالية قبل النشر في الإنتاج، إذ يمكن أن تتغير الخيارات بين الإصدارات.',
        items: [
          '**حقن الفونيمات الخام** لتصحيح النطق: ضع نصًا مثل `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]` باستخدام فونيمات IPA من `espeak-ng -v en-us --ipa=3 -q <الكلمة>`.',
          '**واجهة برمجة libpiper بلغة C/C++** تعرض `piper_create()` (أو `piper_create_with_options()` للتحكم الأدق) لدمج Piper مباشرة في تطبيق أصلي دون بيئة تشغيل Python.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الرخصة والتكلفة',
        content: [
          '**مستودع Piper الذي يُصان فعليًا، [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)، مرخّص بموجب GPL-3.0-or-later**، وهو ما تؤكده البيانات الوصفية المنشورة لحزمة `piper-tts` على [PyPI](https://pypi.org/project/piper-tts/). هذا تغيير عن المستودع الأصلي [rhasspy/piper](https://github.com/rhasspy/piper)، الذي كان مرخّصًا بموجب MIT قبل أرشفته في 6 أكتوبر 2025، ويظل متاحًا تحت رخصة MIT تلك، دون صيانة.',
          '**GPL-3.0 رخصة copyleft، وهذا فرق جوهري عن MIT للاستخدام التجاري.** يمكنك استخدام Piper مجانًا، بما في ذلك تجاريًا، لتوليد الكلام. لكن GPL-3.0 تشترط أنه إذا وزّعت نسخة معدّلة من الكود المصدري لـPiper نفسه — على سبيل المثال fork مدمج أو مرتبط ارتباطًا ثابتًا بمنتجك — فيجب عليك إتاحة ذلك الكود المعدَّل بموجب شروط GPL-3.0 نفسها. استخدام Piper كما هو دون تعديل، كأداة خارجية (استدعاء سطر أوامره أو حزمة Python الخاصة به أو خادم الويب كعملية منفصلة)، لا يضع عادة بقية كود تطبيقك تحت GPL، لكن الحد الفاصل الدقيق يعتمد على مدى إحكام ارتباط كودك بكود Piper. توضح هذه الفقرة الشكل العام للرخصة؛ وهي ليست استشارة قانونية — استشر محاميًا بشأن نشر تطبيقك المحدد قبل إصدار منتج تجاري مبني على Piper.',
          '**لا توجد خطة مدفوعة أو اشتراك أو رسوم ترخيص لـPiper نفسه.** التكاليف الوحيدة هي العتاد الذي يعمل عليه ووقت التطوير الخاص بك. تُنزَّل النماذج الصوتية بشكل منفصل من [مستودع مشترك على Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main)؛ تحقق من الرخصة المذكورة لكل صوت على حدة قبل إعادة توزيعه، إذ يساهم بالأصوات أعضاء مختلفون من المجتمع وليس مضمونًا أن تشترك في نفس رخصة كود Piper.',
        ],
        faqs: [
          {
            q: 'ما الرخصة التي يستخدمها Piper؟',
            a: 'مستودع Piper الذي يُصان فعليًا (OHF-Voice/piper1-gpl) مرخّص بموجب GPL-3.0-or-later. أما المستودع الأصلي، المؤرشف الآن، rhasspy/piper فكان مرخّصًا بموجب MIT. هذا فرق حقيقي للاستخدام التجاري — تشترط GPL-3.0 إتاحة تعديلات الكود المصدري لـPiper نفسه بموجب الرخصة نفسها عند توزيعها، وهو ما لم تكن MIT تشترطه.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له Piper',
        content: [
          'Piper محرك تحويل نص إلى كلام محلي سريع وعام الغرض، وليس أداة استنساخ صوتي أو كلام معبّر. إنه الأداة الخاطئة في الحالات التالية:',
        ],
        items: [
          '**الاستنساخ الصوتي المعبّر أو العاطفي أو من ثوانٍ قليلة.** يولّف Piper الكلام من نماذج صوتية مدرَّبة مسبقًا، وليس من مقطع صوتي مرجعي قصير لشخص محدد. إذا كنت بحاجة إلى استنساخ صوت من ثوانٍ قليلة من عينة صوتية، أو تريد أداءً أكثر تعبيرًا، فإن [XTTS v2](https://huggingface.co/coqui/XTTS-v2) مصمَّم لذلك — راجع [دليل رخص TTS المحلي](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) من PromptQuorum للاطلاع على شروط رخصته (غير التجارية).',
          '**استنساخ متعدد المتحدثين من عينة قصيرة.** وبالمثل، لا تتوفر لدى Piper آلية مدمجة لتوليد صوت جديد فوريًا من عينة صوتية لمتحدث معين؛ فكل صوت هو نموذج مدرَّب وموزَّع بشكل منفصل.',
          '**التزامات copyleft الخاصة بـGPL-3.0 في منتج مغلق المصدر.** إذا كانت حالة استخدامك تتضمن تعديل الكود المصدري لـPiper نفسه وإعادة توزيعه داخل ملف ثنائي مغلق المصدر، فإن رخصة GPL-3.0-or-later للمستودع الحالي تمثل قيدًا حقيقيًا لم يكن موجودًا في المستودع الأصلي المرخّص بموجب MIT. راجع قسم الرخصة والتكلفة أعلاه واستشر محاميًا قبل هذا النوع من النشر.',
          '**جودة صوتية مضمونة ومتسقة عبر جميع اللغات.** بما أن الأصوات مدرَّبة ومساهَم بها من أعضاء مختلفين في المجتمع، تتفاوت الجودة بشكل ملحوظ حسب اللغة والصوت المحدد — تحقق من عينات للغة المستهدفة قبل الالتزام بـPiper لتطبيق إنتاجي.',
          '**استقرار الصيانة على المدى الطويل.** حتى وقت نشر هذا المقال، يذكر ملف README الخاص بالمشروع نفسه أن Open Home Foundation تبحث عن صائنين إضافيين لـPiper، وهي نقطة يجب مراعاتها قبل بناء بنية تحتية حرجة عليه.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل Piper',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            'الأنسب لـ': 'مجموعة أدوات مرنة متعددة الخلفيات (VITS، Tacotron2، XTTS) بدعم واسع للغات',
            'الرخصة': 'MPL-2.0',
          },
          {
            'الأداة': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            'الأنسب لـ': 'استنساخ صوتي من ثوانٍ قليلة من الصوت المرجعي، عبر 17 لغة',
            'الرخصة': 'CPML (غير تجارية)',
          },
          {
            'الأداة': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'الأنسب لـ': 'أعلى جودة سرد إنجليزي طبيعي (دون استنساخ صوتي)',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[Bark](https://github.com/suno-ai/bark)',
            'الأنسب لـ': 'صوت غير كلامي معبّر — ضحك، تنهدات، أصوات محيطة',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[ElevenLabs](https://elevenlabs.io)',
            'الأنسب لـ': 'واجهة برمجة سحابية مُدارة للفرق التي تفضل عدم الاستضافة الذاتية، مع استنساخ صوتي تجاري',
            'الرخصة': 'ملكية خاصة (واجهة برمجة سحابية مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Piper؟',
            a: 'Piper محرك تحويل نص إلى كلام عصبي محلي ومجاني، نشأ ضمن مشروع المساعد الصوتي Rhasspy على يد Michael Hansen، وتصونه اليوم Open Home Foundation، ويحوّل النص إلى صوت منطوق بسرعة كافية للعمل في الوقت الفعلي على أجهزة تعتمد على CPU فقط.',
          },
          {
            q: 'هل Piper مجاني؟',
            a: 'نعم. لا يوجد لدى Piper خطة مدفوعة أو اشتراك أو رسوم ترخيص. وهو مرخّص حاليًا بموجب GPL-3.0-or-later، وهي مجانية للاستخدام لكنها تفرض شروطًا على توزيع نسخ معدَّلة من الكود المصدري لـPiper نفسه — راجع قسم الرخصة والتكلفة للتفاصيل.',
          },
          {
            q: 'هل أحتاج إلى GPU لتشغيل Piper؟',
            a: 'لا. صُمِّم Piper للعمل في الوقت الفعلي على أجهزة تعتمد على CPU فقط، بما في ذلك Raspberry Pi. تتوفر إمكانية تسريع GPU اختيارية عبر CUDA من خلال حزمة onnxruntime-gpu لتحقيق إنتاجية أعلى.',
          },
          {
            q: 'ما الفرق بين rhasspy/piper وOHF-Voice/piper1-gpl؟',
            a: 'rhasspy/piper هو المستودع الأصلي، الذي نشأ ضمن مشروع Rhasspy ومرخّص بموجب MIT؛ وقد أُرشف (للقراءة فقط) في 6 أكتوبر 2025. أما OHF-Voice/piper1-gpl فهو المستودع الخَلَف الذي يُصان فعليًا، وأُنشئ في 28 مارس 2025 تحت مظلة Open Home Foundation، ومرخّص بموجب GPL-3.0-or-later بدلًا من MIT.',
          },
          {
            q: 'هل يمكن لـPiper استنساخ صوت شخص محدد؟',
            a: 'ليس من عينة صوتية قصيرة. يولّف Piper الكلام باستخدام نماذج صوتية مدرَّبة مسبقًا تُنزِّلها وتختارها؛ ولا يستنسخ صوتًا جديدًا فوريًا من ثوانٍ قليلة من الصوت المرجعي. لهذا الغرض، راجع XTTS v2، المصمَّم خصيصًا للاستنساخ الصوتي في ثوانٍ قليلة.',
          },
          {
            q: 'هل يُستخدم Piper في Home Assistant؟',
            a: 'نعم. Piper هو محرك تحويل النص إلى كلام المحلي الافتراضي في خط أنابيب المساعد الصوتي الخاص بـHome Assistant، وتصونه Open Home Foundation، وهي نفس المؤسسة غير الربحية التي تُشرف على Home Assistant.',
          },
          {
            q: 'من يصون Piper اليوم؟',
            a: 'يُصان Piper تحت مظلة Open Home Foundation في مستودع OHF-Voice/piper1-gpl، بعد أن انتقل التطوير إليه من المستودع الأصلي المستضاف على Rhasspy في عام 2025. يذكر ملف README الخاص بالمشروع أن Open Home Foundation تبحث حاليًا عن صائنين إضافيين.',
          },
          {
            q: 'ما أحدث إصدار من Piper؟',
            a: 'أحدث إصدار مستقر هو v1.8.0، الصادر في 4 سبتمبر 2026، وفق صفحة إصدارات المشروع على GitHub.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يظل Piper من أسرع الطرق للحصول على تحويل نص إلى كلام محلي حقيقي على عتاد متواضع — أداؤه في الوقت الفعلي على CPU فقط هو ما جعله الصوت الافتراضي لـHome Assistant، ولم يتغيّر ذلك تحت الصائنين الجدد. أما ما تغيّر، وما يحتاج كل من يقيّم Piper في 2026 إلى معرفته، فهو الرخصة: انتقل المستودع الذي يُصان فعليًا من MIT إلى GPL-3.0-or-later عند انتقال التطوير إلى Open Home Foundation في 2025، وهذا فرق حقيقي لمن يخطط لدمج وإعادة توزيع كود Piper المصدري المعدَّل داخل منتج مغلق المصدر. يظل مجانيًا وموثَّقًا جيدًا ونشط الإصدارات (v1.8.0 حتى سبتمبر 2026)، رغم أن صائنيه أنفسهم يطلبون علنًا مزيدًا من المساعدة. بالنسبة لتحويل نص إلى كلام سريع وغير متصل وعام الغرض على عتاد من فئة CPU، يُعد Piper خيارًا موثَّقًا جيدًا وبلا تكلفة — أما للاستنساخ الصوتي المعبّر في ثوانٍ قليلة، فاقرن هذه المراجعة بتغطية PromptQuorum لـ[XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) أو قارن مع البديل السحابي المُدار في [مقارنة ElevenLabs مقابل TTS المحلي](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[OHF-Voice/piper1-gpl على GitHub](https://github.com/OHF-Voice/piper1-gpl) — المستودع الذي يُصان فعليًا: README، الوثائق، الرخصة، وسجل الإصدارات.',
          '[piper-tts على PyPI](https://pypi.org/project/piper-tts/) — بيانات وصفية منشورة للحزمة، بما في ذلك رخصة GPL-3.0-or-later الحالية.',
          '[rhasspy/piper على GitHub](https://github.com/rhasspy/piper) — المستودع الأصلي، المؤرشف الآن (رخصة MIT).',
          '[إصدارات piper1-gpl](https://github.com/OHF-Voice/piper1-gpl/releases) — سجل الإصدارات، بما في ذلك v1.8.0 (4 سبتمبر 2026).',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — المؤسسة غير الربحية التي تصون Piper وHome Assistant.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[رخص TTS المحلي والاستنساخ الصوتي: Piper وXTTS v2 وF5-TTS وCoqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مقارنة الرخص عبر أهم محركات TTS المحلية.',
          '[ElevenLabs مقابل Piper مقابل XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — مقارنة السحابة مقابل المحلي لمن يقرر الاستضافة الذاتية.',
          '[بناء مساعد صوتي غير متصل بالكامل في 2026](/power-local-llm/build-local-voice-assistant-2026) — ربط Piper بنموذج لغوي محلي ومحرك تعرف صوتي قائم على Whisper لإنشاء خط أنابيب صوتي كامل.',
          '[مراجعة Whisper.cpp](/power-local-llm/whisper-cpp-review) — نظير التعرف الصوتي المحلي، بنفس مستوى التفصيل.',
          '[مراجعة faster-whisper](/power-local-llm/faster-whisper-review) — بديل التعرف الصوتي المعتمد على CTranslate2، بنفس مستوى التفصيل.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Piper TTS (2026): تحويل نص إلى كلام عصبي محلي وسريع',
      description:
        'مراجعة Piper TTS: محرك تحويل نص إلى كلام عصبي محلي ومجاني من مشروع Rhasspy، تصونه اليوم Open Home Foundation. التاريخ، خطوات التثبيت، أوامر حقيقية، رخصة GPL-3.0 الحالية، ومتى تختار XTTS v2 بدلًا منه.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'ar',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون الذين يقيّمون أدوات تحويل نص إلى كلام محلية وغير متصلة' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: 'تحويل نص إلى كلام' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة Piper TTS (2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-zh.webp',
    title: 'Piper TTS评测(2026):快速的本地神经网络语音合成',
    seoTitle: 'Piper TTS评测2026:快速本地TTS',
    intro:
      'Piper是一款免费的本地神经网络语音合成引擎,完全在你自己的设备上将文本转换为语音,最初由Michael Hansen在开源语音助手项目[Rhasspy](https://github.com/rhasspy)中创建。2025年,活跃开发转移到了新仓库[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl),由Home Assistant背后的非营利组织[Open Home Foundation](https://www.openhomefoundation.org/)维护,原始仓库[rhasspy/piper](https://github.com/rhasspy/piper)已于2025年10月6日被归档(设为只读)。本评测涵盖这段历史、真实的安装与使用命令、当前许可证(已从MIT变更为GPL-3.0-or-later),以及Piper不适合的场景——并附上PromptQuorum许可证深度对比指南以及与ElevenLabs的对比链接。',
    metaDescription:
      'Piper TTS评测:来自Rhasspy项目、现由Open Home Foundation维护的免费本地神经网络语音合成引擎。历史、安装步骤、真实命令、当前GPL-3.0许可证,以及何时应选择XTTS v2。',
    twitterDescription:
      'Piper TTS评测2026:快速的本地神经网络语音合成,即使在Raspberry Pi上也能实时运行。由Michael Hansen开发,现由Open Home Foundation维护。真实安装命令、2025年GPL-3.0许可证变更,以及真实的局限。',
    audience:
      '构建本地语音助手、无障碍工具或离线应用,需要快速语音合成而不依赖云端API、GPU或按字符计费的开发者与爱好者。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS评测',
    targetKeywords: [
      'piper tts评测',
      'piper tts',
      '安装piper tts',
      'piper tts python',
      'piper tts许可证',
      'ohf-voice piper1-gpl',
      '本地神经网络语音合成',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper是一款免费的本地神经网络语音合成引擎,由Michael Hansen在Rhasspy语音助手项目中创建,现由Open Home Foundation在[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)维护,速度快到足以在纯CPU硬件(如Raspberry Pi)上实时运行。** 使用`pip install piper-tts`安装。自2025年起,实际维护的仓库采用GPL-3.0-or-later许可证——相较于已归档的原始仓库`rhasspy/piper`的MIT许可证,这是一次变更。关于Piper、Coqui TTS、XTTS v2、F5-TTS、Bark和StyleTTS 2的许可证对比,参见PromptQuorum的[本地TTS许可证指南](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)。',
    quickAnswerTop: {
      en: {
        question: 'Piper TTS是什么?它还在维护吗?',
        answer:
          '如果你想要快速、完全本地化的语音合成,能在纯CPU硬件(包括Raspberry Pi)上运行,而无需将文本发送到云端API,Piper值得使用。它由Michael Hansen在开源语音助手项目Rhasspy中创建,最著名的身份是Home Assistant语音流程中默认的本地TTS引擎。是的,它仍在维护:原始仓库rhasspy/piper于2025年10月6日被归档后,活跃开发转移到了Open Home Foundation旗下的新仓库OHF-Voice/piper1-gpl继续进行。需要了解的关键变化是许可证——实际维护的仓库采用GPL-3.0-or-later,而非原来的MIT许可证,项目自己的README表明目前正在寻找更多维护者。如果你需要从几秒钟音频进行富有表现力、情感化的语音克隆,请改用XTTS v2;Piper的语音是预训练的,不是从短音频样本克隆而来。',
        bullets: [
          '由Michael Hansen在Rhasspy语音助手项目中创建;原始仓库于2025年10月6日被归档。',
          '活跃开发现在位于Open Home Foundation旗下的OHF-Voice/piper1-gpl,创建于2025年3月28日。',
          '许可证变更:从MIT(已归档仓库)变为GPL-3.0-or-later(当前仓库)——在将Piper嵌入闭源产品前请务必核实。',
          '免费,无付费方案;在纯CPU硬件(包括Raspberry Pi)上实时运行,可选CUDA GPU加速。',
          '最新版本:v1.8.0,于2026年9月4日发布,依据项目GitHub发布页面。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '历史:从Rhasspy到Open Home Foundation', anchor: 'history' },
      { label: 'Piper实际能做什么', anchor: 'what-it-does' },
      { label: '安装并运行Piper:分步指南', anchor: 'install-walkthrough' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与成本', anchor: 'license-cost' },
      { label: 'Piper不适合的场景', anchor: 'limitations' },
      { label: 'Piper的替代方案', anchor: 'alternatives' },
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
            text: 'Piper是一款免费的本地神经网络语音合成引擎,最初由Michael Hansen在Rhasspy语音助手项目中创建,现由Open Home Foundation维护,速度快到足以在纯CPU硬件(如Raspberry Pi)上实时运行,其许可证在2025年迁移到新仓库时从MIT变更为GPL-3.0-or-later。',
          },
          {
            type: 'plain-terms',
            text: '这是一个通过`pip install`安装的程序,可以在你自己的设备上把输入的文本变成语音——不需要云端账户,不需要联网,而且即使在配置很一般的硬件上,速度也足以实现实时语音播放。',
          },
        ],
        items: [
          '由Michael Hansen在Rhasspy语音助手项目中创建。',
          '原始仓库rhasspy/piper于2025年10月6日被归档(只读),采用MIT许可证。',
          '活跃开发目前位于OHF-Voice/piper1-gpl(创建于2025年3月28日),由Home Assistant背后的非营利组织Open Home Foundation维护。',
          '当前许可证:GPL-3.0-or-later——相较于已归档仓库的MIT许可证的变更。',
          '免费,无付费方案;实时CPU推理,可选CUDA GPU加速。',
          '最新版本:v1.8.0,于2026年9月4日发布。',
        ],
        callouts: [
          {
            type: 'note',
            text: '许可证在2025年发生了变化。如果你在此之前评估Piper时假设它是MIT许可证,在将当前维护的仓库用于闭源产品前,请重新核实——详见下文的许可证与成本部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:从Rhasspy到Open Home Foundation',
        content: [
          '**Piper诞生于Rhasspy项目**,这是一个用于构建完全离线语音助手的开源工具包。Michael Hansen将其打造为快速的本地语音合成引擎,与Rhasspy的本地语音识别配合使用——避免每次语音回应都要往返一次云端TTS API。Piper采用VITS风格的神经网络文本转波形架构:文本首先通过[espeak-ng](https://github.com/espeak-ng/espeak-ng)转换为音素,然后一个导出到[ONNX Runtime](https://onnxruntime.ai/)的模型直接从这些音素合成波形,即使在纯CPU硬件上也能实现快速推理。',
          '**原始仓库[rhasspy/piper](https://github.com/rhasspy/piper)成长为最广泛使用的本地TTS引擎之一**,活跃于开源家庭自动化与无障碍生态系统,在MIT许可证下积累了超过11,000个GitHub星标。它成为[Home Assistant](https://www.home-assistant.io/)语音流程中默认的本地语音合成引擎。',
          '**2025年,活跃开发转移到了新仓库。** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)于2025年3月28日创建,由同样管理Home Assistant的非营利组织Open Home Foundation维护。此后,原始仓库rhasspy/piper于2025年10月6日被归档(设为只读);它仍以原始MIT许可证提供,但不再接收更新。',
          '**新仓库采用了不同的许可证:GPL-3.0-or-later**,而非原来的MIT许可证。项目并未在README或更新日志中说明原因,但piper1-gpl集成了用于音素化的[espeak-ng](https://github.com/espeak-ng/espeak-ng),而espeak-ng本身采用GPL-3.0许可证——这是许可证变更的一个合理解释,但PromptQuorum无法将其确认为官方声明的原因。截至本文发布时,项目自己的README表明Open Home Foundation正在为Piper寻找更多维护者。',
        ],
        faqs: [
          {
            q: '谁创建了Piper?',
            a: 'Piper由Michael Hansen在开源语音助手项目Rhasspy中创建。此后开发转移到了由Open Home Foundation维护的新仓库OHF-Voice/piper1-gpl。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Piper实际能做什么',
        content: [
          'Piper通过神经网络语音合成流程将书面文本转换为语音:文本先经espeak-ng转换为音素,然后经训练的语音模型从这些音素合成波形,在ONNX Runtime上运行以保证速度。',
        ],
        items: [
          '**命令行合成。** 使用已下载的语音模型运行`python3 -m piper`,可生成WAV文件,或将音频直接流式输出到扬声器。',
          '**Python API。** 使用`PiperVoice.load()`加载一个语音,并从你自己的Python应用中调用`.synthesize_wav()`或流式的`.synthesize()`生成器。',
          '**HTTP Web服务器模式。** Piper可以作为持久运行的Web服务器,使语音模型保持加载在内存中,避免每次调用都要承担命令行的重新加载成本——推荐用于重复或生产环境使用。',
          '**C/C++ API(libpiper)。** 从旧版Piper仓库移植而来的原生C++库及其命令行工具,用于将Piper嵌入非Python应用。',
          '**原始音素注入。** 用`[[ ... ]]`包裹文本可以直接传入IPA音素(来自`espeak-ng --ipa=3`),便于纠正名称或专业术语的错误发音。',
          '**可选GPU加速。** 传入`--cuda`(命令行)或`use_cuda=True`(Python)可通过`onnxruntime-gpu`软件包启用CUDA加速,不过Piper的设计目标就是仅靠CPU也能以可接受的速度运行。',
          '**社区训练的多语言语音。** 数十种语言及地区变体作为可单独下载的语音模型,通过[Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main)提供;由于这些语音由不同的社区贡献者训练,质量因语音而异。',
        ],
        note: 'Piper是一款语音合成引擎,而非语音克隆工具——它的语音是预训练模型,供你下载和选择,而不是从一段简短的参考音频即时生成的。关于语音克隆,请参见下文替代方案部分。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '安装并运行Piper:分步指南',
        content: '本指南通过pip安装Piper,并按照项目自身命令行和Python API文档中记录的语法完成首次语音合成。',
        numberedItems: [
          {
            title: '安装Piper。',
            whyItMatters: '在Python环境中运行`pip install piper-tts`(建议使用Python 3.9及以上版本)。这会安装`piper`软件包及其ONNX Runtime依赖;仅使用CPU时无需配置GPU或CUDA。',
          },
          {
            title: '列出并下载一个语音。',
            whyItMatters: '不带参数运行`python3 -m piper.download_voices`以列出可用语音,然后运行`python3 -m piper.download_voices en_US-lessac-medium`将指定语音下载到当前目录。',
          },
          {
            title: '通过命令行合成语音。',
            whyItMatters: '运行`python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'`以写出一个WAV文件。若已安装`ffplay`,可省略`-f`标志以立即听到音频,而不是保存它。',
          },
          {
            title: '(可选)使用Python API而非命令行。',
            whyItMatters: '在应用中重复使用时,先执行`from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")`,再调用`voice.synthesize_wav(text, wav_file)`,可以避免每次调用命令行都要承担的启动成本。',
          },
          {
            title: '(可选)启用GPU加速。',
            whyItMatters: '安装`onnxruntime-gpu`软件包,然后在命令行中传入`--cuda`,或在Python中向`PiperVoice.load()`传入`use_cuda=True`。这是可选项——Piper的设计目标就是仅靠CPU也能实时运行。',
          },
          {
            title: '(可选)运行Web服务器以便重复使用。',
            whyItMatters: '在生产环境或重复使用的配置中,运行Piper的HTTP Web服务器模式,使语音模型保持加载在内存中,而不是每次命令行调用都重新加载。',
          },
          {
            title: '(可选)使用原始音素纠正发音错误的单词。',
            whyItMatters: '使用`espeak-ng -v en-us --ipa=3 -q <单词>`获取某个单词的IPA音素,然后在输入文本中将其用`[[ ... ]]`包裹,以覆盖Piper对该单词的自动发音。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '除了上文的基本安装指南外,以下是项目自身文档中常见的真实使用模式。',
        ],
        codeBlock: `# 命令行:写出一个WAV文件
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# 命令行:立即播放音频(需要ffplay)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# Python API
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# Python API:调整合成设置(速度、音量、表现力)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # 音量减半
    length_scale=2.0,  # 速度减慢一倍
    noise_scale=1.0,   # 更多音频变化
    noise_w_scale=1.0, # 更多语调变化
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# Python API:GPU加速(需要onnxruntime-gpu)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# Python API:流式合成
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: '此处展示的参数(`--cuda`、`SynthesisConfig`、`use_cuda`、流式的`synthesize()`生成器)记录在项目GitHub上的docs/CLI.md和docs/API_PYTHON.md中。部署到生产环境前请查阅最新文档,因为选项可能在版本之间发生变化。',
        items: [
          '**原始音素注入**用于纠正发音:使用来自`espeak-ng -v en-us --ipa=3 -q <单词>`的IPA音素,像`The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]`这样包裹文本。',
          '**libpiper C/C++ API**暴露了`piper_create()`(如需更精细的控制则用`piper_create_with_options()`),用于在没有Python运行时的情况下将Piper直接嵌入原生应用。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与成本',
        content: [
          '**实际维护的Piper仓库[OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)采用GPL-3.0-or-later许可证**,这一点已通过[PyPI](https://pypi.org/project/piper-tts/)上`piper-tts`软件包发布的元数据得到确认。相较于原始仓库[rhasspy/piper](https://github.com/rhasspy/piper),这是一次变更——该仓库在2025年10月6日被归档前采用MIT许可证,此后仍以该MIT许可证提供,但已无人维护。',
          '**GPL-3.0是一种著佐权(copyleft)许可证,这对商业使用而言与MIT有着实质区别。** 你可以免费使用Piper,包括商业用途,来生成语音。但GPL-3.0要求:如果你分发了Piper自身源代码的修改版本——例如集成或静态链接到你产品中的一个分支——你必须以相同的GPL-3.0条款开放该修改后的源代码。将Piper作为未经修改的外部工具使用(以独立进程方式调用其命令行、Python软件包或Web服务器)通常不会使你应用的其余代码受GPL约束,但确切的边界取决于你的代码与Piper代码的耦合紧密程度。本段说明的是该许可证的大致形态;这不是法律建议——在发布基于Piper构建的商业产品前,请就你具体的部署方式咨询律师。',
          '**Piper本身没有付费方案、订阅或许可费用。** 唯一的成本是运行它的硬件以及你自己的开发时间。语音模型通过共享的[Hugging Face仓库](https://huggingface.co/rhasspy/piper-voices/tree/main)单独下载;在重新分发之前,请检查每个语音标注的许可证,因为这些语音由不同的社区成员贡献,并不保证与Piper代码采用相同的许可证。',
        ],
        faqs: [
          {
            q: 'Piper使用什么许可证?',
            a: '实际维护的Piper仓库(OHF-Voice/piper1-gpl)采用GPL-3.0-or-later许可证。已归档的原始仓库rhasspy/piper采用MIT许可证。这对商业使用而言是实质性差异——GPL-3.0要求在分发Piper自身源代码的修改版本时以相同许可证开放,而MIT没有这一要求。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Piper不适合的场景',
        content: [
          'Piper是一款快速、通用的本地语音合成引擎,而不是语音克隆或富有表现力的语音工具。在以下情况下,它并不是合适的选择:',
        ],
        items: [
          '**富有表现力、情感化或短短几秒钟内完成的语音克隆。** Piper是从预训练的语音模型合成语音,而不是从特定人物的简短参考音频克隆而来。如果你需要从几秒钟的样本音频克隆一个声音,或需要更具表现力的语调,[XTTS v2](https://huggingface.co/coqui/XTTS-v2)正是为此而设计——关于其(非商业)许可条款,参见PromptQuorum的[本地TTS许可证指南](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)。',
          '**从简短样本进行多说话人克隆。** 同样,Piper没有内置机制可以从特定说话人的音频样本即时生成新语音;每个语音都是单独训练并分发的模型。',
          '**闭源产品中的GPL-3.0著佐权义务。** 如果你的使用场景涉及修改并在闭源二进制文件中重新分发Piper自身的源代码,当前仓库的GPL-3.0-or-later许可证是一个实质性限制,而原始的MIT许可证仓库没有这一限制。请查阅上文的许可证与成本部分,并在此类部署前咨询律师。',
          '**跨所有语言保证一致的语音质量。** 由于语音由不同社区成员训练和贡献,质量会因语言和具体语音而明显不同——在生产应用中采用Piper之前,请先检查目标语言的样本。',
          '**长期维护的确定性。** 截至本文发布时,项目自己的README表明Open Home Foundation正在为Piper寻找更多维护者,这是在其上构建关键基础设施前需要考虑的一点。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Piper的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合', '许可证'],
        rows: [
          {
            '工具': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            '最适合': '灵活的多后端工具包(VITS、Tacotron2、XTTS),语言支持广泛',
            '许可证': 'MPL-2.0',
          },
          {
            '工具': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            '最适合': '从几秒钟参考音频进行语音克隆,支持17种语言',
            '许可证': 'CPML(非商业)',
          },
          {
            '工具': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最适合': '最高质量的自然英语朗读效果(不含语音克隆)',
            '许可证': 'MIT',
          },
          {
            '工具': '[Bark](https://github.com/suno-ai/bark)',
            '最适合': '富有表现力的非语音音频——笑声、叹息、环境声',
            '许可证': 'MIT',
          },
          {
            '工具': '[ElevenLabs](https://elevenlabs.io)',
            '最适合': '面向不想自行托管的团队的托管云端API,支持商业语音克隆',
            '许可证': '专有(付费云端API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Piper是什么?',
            a: 'Piper是一款免费的本地神经网络语音合成引擎,由Michael Hansen在Rhasspy语音助手项目中创建,现由Open Home Foundation维护,能以足够快的速度将文本转换为语音,在纯CPU硬件上实现实时运行。',
          },
          {
            q: 'Piper免费吗?',
            a: '是的。Piper没有付费方案、订阅或许可费用。它目前采用GPL-3.0-or-later许可证,使用免费,但对分发Piper自身源代码修改版本附加了条件——详见许可证与成本部分。',
          },
          {
            q: '运行Piper需要GPU吗?',
            a: '不需要。Piper的设计目标是在纯CPU硬件(包括Raspberry Pi)上实时运行。如需更高吞吐量,可通过onnxruntime-gpu软件包使用可选的CUDA GPU加速。',
          },
          {
            q: 'rhasspy/piper与OHF-Voice/piper1-gpl有什么区别?',
            a: 'rhasspy/piper是原始仓库,诞生于Rhasspy项目并采用MIT许可证;已于2025年10月6日被归档(只读)。OHF-Voice/piper1-gpl是实际维护的后继仓库,于2025年3月28日在Open Home Foundation旗下创建,采用GPL-3.0-or-later许可证而非MIT。',
          },
          {
            q: 'Piper能克隆特定人物的声音吗?',
            a: '无法从简短音频样本克隆。Piper使用你下载并选择的预训练语音模型合成语音;它不会从几秒钟的参考音频即时克隆出新语音。这方面请参考XTTS v2,它是专为几秒钟语音克隆设计的。',
          },
          {
            q: 'Piper用于Home Assistant吗?',
            a: '是的。Piper是Home Assistant语音助手流程中默认的本地语音合成引擎,由Open Home Foundation维护——这与管理Home Assistant的是同一个非营利组织。',
          },
          {
            q: '目前是谁在维护Piper?',
            a: 'Piper在Open Home Foundation旗下的OHF-Voice/piper1-gpl仓库中维护,此前开发工作已于2025年从原本托管在Rhasspy的仓库迁移至此。项目的README表明Open Home Foundation目前正在寻找更多维护者。',
          },
          {
            q: 'Piper最新版本是什么?',
            a: '最新稳定版本是v1.8.0,根据项目GitHub发布页面,发布于2026年9月4日。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Piper依然是在配置一般的硬件上获得真正本地语音合成的最快方式之一——它仅靠CPU即可实时运行的性能,正是它成为Home Assistant默认语音的原因,而这一点在新的维护者接手后并未改变。真正改变的、也是每个在2026年评估Piper的人都需要知道的,是许可证:实际维护的仓库在2025年随开发转移到Open Home Foundation时,从MIT变为了GPL-3.0-or-later,这对任何计划将修改后的Piper源代码集成并重新分发到闭源产品中的人而言,都是实质性的差异。它依然免费、文档完善,并保持活跃发布(截至2026年9月为v1.8.0),尽管其维护者自己也在公开寻求更多帮助。对于在CPU级硬件上进行快速、离线、通用的语音合成而言,Piper是一个经过充分验证且零成本的选择——如果需要几秒钟内完成的富有表现力的语音克隆,可以将本评测与PromptQuorum关于[XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)的报道结合阅读,或参考[ElevenLabs与本地TTS对比](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)中的托管云端替代方案。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub上的OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) —— 实际维护的仓库:README、文档、许可证与版本历史。',
          '[PyPI上的piper-tts](https://pypi.org/project/piper-tts/) —— 已发布的软件包元数据,包括当前的GPL-3.0-or-later许可证。',
          '[GitHub上的rhasspy/piper](https://github.com/rhasspy/piper) —— 已归档的原始仓库(MIT许可证)。',
          '[piper1-gpl发布记录](https://github.com/OHF-Voice/piper1-gpl/releases) —— 版本历史,包括v1.8.0(2026年9月4日)。',
          '[Open Home Foundation](https://www.openhomefoundation.org/) —— 维护Piper和Home Assistant的非营利组织。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地TTS与语音克隆许可证:Piper、XTTS v2、F5-TTS与Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) —— 覆盖所有主要本地TTS引擎的许可证深度对比。',
          '[ElevenLabs对比Piper对比XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) —— 面向决定是否自行托管的读者的云端与本地对比。',
          '[2026年打造完全离线的语音助手](/power-local-llm/build-local-voice-assistant-2026) —— 将Piper与本地LLM及基于Whisper的STT引擎连接,构建完整语音流程。',
          '[Whisper.cpp评测](/power-local-llm/whisper-cpp-review) —— 同等深度的本地语音识别对应产品评测。',
          '[faster-whisper评测](/power-local-llm/faster-whisper-review) —— 同等深度评测的基于CTranslate2的语音识别替代方案。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS评测(2026):快速的本地神经网络语音合成',
      description:
        'Piper TTS评测:来自Rhasspy项目、现由Open Home Foundation维护的免费本地神经网络语音合成引擎。历史、安装步骤、真实命令、当前GPL-3.0许可证,以及何时应选择XTTS v2。',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'zh',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地离线语音合成工具的开发者' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '语音合成' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS评测(2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/piper-tts-review-hero-ko.webp',
    title: 'Piper TTS 리뷰(2026): 빠르고 로컬한 신경망 음성 합성',
    seoTitle: 'Piper TTS 리뷰 2026: 빠른 로컬 TTS',
    intro:
      'Piper는 텍스트를 오직 자신의 기기에서만 음성으로 변환하는 무료 로컬 신경망 음성 합성 엔진으로, 원래 오픈소스 음성 비서 프로젝트인 [Rhasspy](https://github.com/rhasspy) 안에서 Michael Hansen이 만들었습니다. 2025년, 실제 개발은 새로운 저장소 [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)로 옮겨갔으며, 이는 Home Assistant를 이끄는 비영리 단체 [Open Home Foundation](https://www.openhomefoundation.org/)이 관리합니다. 원래 저장소인 [rhasspy/piper](https://github.com/rhasspy/piper)는 2025년 10월 6일에 아카이브(읽기 전용) 처리되었습니다. 이 리뷰에서는 이러한 역사, 실제 설치 및 사용 명령어, 현재 라이선스(MIT에서 GPL-3.0-or-later로 변경됨), 그리고 Piper가 적합하지 않은 경우를 다루며, PromptQuorum의 라이선스 비교 가이드와 ElevenLabs와의 비교 링크도 함께 제공합니다.',
    metaDescription:
      'Piper TTS 리뷰: Rhasspy 프로젝트에서 시작되어 현재 Open Home Foundation이 관리하는 무료 로컬 신경망 음성 합성 엔진입니다. 역사, 설치 단계, 실제 명령어, 현재 GPL-3.0 라이선스, XTTS v2를 선택해야 할 때를 정리했습니다.',
    twitterDescription:
      'Piper TTS 리뷰 2026: Raspberry Pi에서도 실시간으로 동작하는 빠르고 로컬한 신경망 음성 합성. Michael Hansen이 개발했고 현재는 Open Home Foundation이 관리합니다. 실제 설치 명령어, 2025년 GPL-3.0 라이선스 변경, 솔직한 한계를 정리했습니다.',
    audience:
      '클라우드 API, GPU, 문자당 비용 없이 빠른 음성 합성이 필요한, 로컬 음성 비서·접근성 도구·오프라인 앱을 만드는 개발자와 취미 개발자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Piper TTS 리뷰',
    targetKeywords: [
      'piper tts 리뷰',
      'piper tts',
      'piper tts 설치',
      'piper tts python',
      'piper tts 라이선스',
      'ohf-voice piper1-gpl',
      '로컬 신경망 음성 합성',
      'piper tts vs xtts',
    ],
    current_models_mentioned: ['en_US-lessac-medium', 'en_US-amy-medium'],
    current_hardware_mentioned: ['CPU', 'Raspberry Pi', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Piper는 Michael Hansen이 Rhasspy 음성 비서 프로젝트 안에서 만든 무료 로컬 신경망 음성 합성 엔진으로, 현재는 Open Home Foundation이 [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)에서 관리하고 있으며, Raspberry Pi 같은 CPU 전용 하드웨어에서도 실시간으로 동작할 만큼 빠릅니다.** `pip install piper-tts`로 설치합니다. 2025년 이후 실제로 관리되는 저장소는 GPL-3.0-or-later 라이선스를 따르며, 이는 아카이브된 원래 저장소 `rhasspy/piper`의 MIT 라이선스에서 바뀐 것입니다. Piper, Coqui TTS, XTTS v2, F5-TTS, Bark, StyleTTS 2의 라이선스 비교는 PromptQuorum의 [로컬 TTS 라이선스 가이드](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)를 참고하십시오.',
    quickAnswerTop: {
      en: {
        question: 'Piper TTS란 무엇이며, 지금도 관리되고 있습니까?',
        answer:
          '텍스트를 클라우드 API로 보내지 않고 Raspberry Pi를 포함한 CPU 전용 하드웨어에서 동작하는 빠르고 완전한 로컬 음성 합성이 필요하다면 Piper를 검토할 가치가 있습니다. 오픈소스 음성 비서 프로젝트 Rhasspy 안에서 Michael Hansen이 개발했으며, Home Assistant 음성 파이프라인의 기본 로컬 TTS 엔진으로 가장 잘 알려져 있습니다. 지금도 관리되고 있는지에 대한 답은 예입니다. 2025년 10월 6일 원래 저장소 rhasspy/piper가 아카이브된 이후, Open Home Foundation 산하의 새 저장소 OHF-Voice/piper1-gpl에서 실제 개발이 계속되고 있습니다. 알아둬야 할 핵심 변화는 라이선스입니다. 실제로 관리되는 저장소는 원래의 MIT 라이선스가 아니라 GPL-3.0-or-later 라이선스를 따르며, 프로젝트 자체 README에는 현재 추가 관리자를 찾고 있다고 명시되어 있습니다. 몇 초의 오디오로 표현력 있고 감정적인 음성 클로닝이 필요하다면 대신 XTTS v2를 선택하십시오. Piper의 음성은 사전 학습된 것이며, 짧은 샘플로부터 복제되는 것이 아닙니다.',
        bullets: [
          'Michael Hansen이 Rhasspy 음성 비서 프로젝트 안에서 개발; 원래 저장소는 2025년 10월 6일에 아카이브됨.',
          '현재 실제 개발은 Open Home Foundation 산하의 OHF-Voice/piper1-gpl에서 이루어지며, 2025년 3월 28일에 생성됨.',
          '라이선스 변경: MIT(아카이브된 저장소)에서 GPL-3.0-or-later(현재 저장소)로 — 폐쇄 소스 제품에 통합하기 전에 반드시 확인할 것.',
          '무료, 유료 플랜 없음; Raspberry Pi를 포함한 CPU 전용 하드웨어에서 실시간으로 동작하며, 선택적으로 CUDA GPU 가속 지원.',
          '최신 릴리스: v1.8.0, 2026년 9월 4일 공개 (프로젝트 GitHub 릴리스 페이지 기준).',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: Rhasspy에서 Open Home Foundation으로', anchor: 'history' },
      { label: 'Piper가 실제로 하는 일', anchor: 'what-it-does' },
      { label: 'Piper 설치 및 실행: 단계별 가이드', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스와 비용', anchor: 'license-cost' },
      { label: 'Piper가 적합하지 않은 용도', anchor: 'limitations' },
      { label: 'Piper의 대안', anchor: 'alternatives' },
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
            text: 'Piper는 원래 Michael Hansen이 Rhasspy 음성 비서 프로젝트 안에서 개발했고 현재는 Open Home Foundation이 관리하는 무료 로컬 신경망 음성 합성 엔진으로, Raspberry Pi 같은 CPU 전용 하드웨어에서도 실시간으로 동작할 만큼 빠르며, 2025년 새 저장소로 이전하면서 라이선스가 MIT에서 GPL-3.0-or-later로 바뀌었습니다.',
          },
          {
            type: 'plain-terms',
            text: '`pip install`로 설치하는 프로그램으로, 입력한 텍스트를 자신의 기기에서 음성으로 바꿔줍니다 — 클라우드 계정도, 인터넷 연결도 필요 없으며, 매우 평범한 하드웨어에서도 실시간 음성 재생에 충분할 만큼 빠르게 동작합니다.',
          },
        ],
        items: [
          'Michael Hansen이 Rhasspy 음성 비서 프로젝트 안에서 개발.',
          '원래 저장소 rhasspy/piper는 MIT 라이선스 하에 2025년 10월 6일 아카이브(읽기 전용)됨.',
          '현재 실제 개발은 Home Assistant를 이끄는 비영리 단체 Open Home Foundation 산하의 OHF-Voice/piper1-gpl(2025년 3월 28일 생성)에서 진행.',
          '현재 라이선스: GPL-3.0-or-later — 아카이브된 저장소의 MIT 라이선스에서 변경됨.',
          '무료, 유료 플랜 없음; CPU 실시간 추론, 선택적 CUDA GPU 가속.',
          '최신 릴리스: v1.8.0, 2026년 9월 4일 공개.',
        ],
        callouts: [
          {
            type: 'note',
            text: '2025년에 라이선스가 변경되었습니다. 이전에 MIT 라이선스라고 가정하고 Piper를 평가한 적이 있다면, 현재 관리되는 저장소를 폐쇄 소스 제품에 사용하기 전에 다시 확인하십시오 — 자세한 내용은 아래 라이선스와 비용 섹션을 참고하십시오.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: Rhasspy에서 Open Home Foundation으로',
        content: [
          '**Piper는 완전히 오프라인으로 동작하는 음성 비서를 만들기 위한 오픈소스 툴킷인 Rhasspy 안에서 탄생했습니다.** Michael Hansen은 말할 때마다 클라우드 TTS API를 왕복하는 것을 피하기 위해, Rhasspy의 로컬 음성 인식과 결합할 빠르고 로컬한 음성 합성 엔진으로 Piper를 만들었습니다. Piper는 VITS 스타일의 신경망 텍스트-투-웨이브폼 아키텍처를 사용합니다. 텍스트는 먼저 ([espeak-ng](https://github.com/espeak-ng/espeak-ng)를 사용해) 음소로 변환된 다음, [ONNX Runtime](https://onnxruntime.ai/)용으로 내보낸 모델이 그 음소로부터 직접 파형을 합성하므로, CPU 전용 하드웨어에서도 빠르게 추론할 수 있습니다.',
          '**원래 저장소인 [rhasspy/piper](https://github.com/rhasspy/piper)는 오픈소스 홈 오토메이션 및 접근성 생태계에서 가장 널리 쓰이는 로컬 TTS 엔진 중 하나로 성장했습니다.** MIT 라이선스 하에 11,000개 이상의 GitHub 스타를 모았으며, [Home Assistant](https://www.home-assistant.io/) 음성 파이프라인의 기본 로컬 음성 합성 엔진이 되었습니다.',
          '**2025년, 실제 개발이 새로운 저장소로 이전했습니다.** [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)은 2025년 3월 28일, Home Assistant도 운영하는 비영리 단체 Open Home Foundation 산하에 생성되었습니다. 이후 원래 저장소 rhasspy/piper는 2025년 10월 6일에 아카이브(읽기 전용)되었습니다. 원래의 MIT 라이선스 하에 여전히 이용할 수 있지만, 더 이상 업데이트되지는 않습니다.',
          '**새 저장소는 원래의 MIT 라이선스 대신 GPL-3.0-or-later라는 다른 라이선스를 채택했습니다.** 프로젝트는 README나 변경 이력에서 그 이유를 밝히지 않았지만, piper1-gpl은 음소화를 위해 [espeak-ng](https://github.com/espeak-ng/espeak-ng)를 내장하고 있으며, espeak-ng 자체가 GPL-3.0 라이선스를 따릅니다 — 이는 라이선스 변경에 대한 그럴듯한 설명이지만, PromptQuorum은 이를 공식적으로 명시된 이유로 확인할 수는 없었습니다. 본 문서 작성 시점 기준, 프로젝트 자체 README에는 Open Home Foundation이 Piper를 위한 추가 관리자를 찾고 있다고 명시되어 있습니다.',
        ],
        faqs: [
          {
            q: 'Piper를 만든 사람은 누구입니까?',
            a: 'Piper는 오픈소스 음성 비서 프로젝트 Rhasspy 안에서 Michael Hansen이 개발했습니다. 이후 개발은 Open Home Foundation이 관리하는 새 저장소 OHF-Voice/piper1-gpl로 이전했습니다.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Piper가 실제로 하는 일',
        content: [
          'Piper는 신경망 음성 합성 파이프라인을 통해 작성된 텍스트를 음성으로 변환합니다. 텍스트는 espeak-ng를 통해 음소로 변환된 다음, 학습된 음성 모델이 그 음소로부터 파형을 합성하며, 속도를 위해 ONNX Runtime 위에서 실행됩니다.',
        ],
        items: [
          '**명령줄 합성.** 다운로드한 음성 모델과 함께 `python3 -m piper`를 실행하면 WAV 파일을 생성하거나 오디오를 스피커로 직접 스트리밍할 수 있습니다.',
          '**Python API.** `PiperVoice.load()`로 음성을 불러온 뒤, 자신의 Python 애플리케이션에서 `.synthesize_wav()`나 스트리밍용 `.synthesize()` 제너레이터를 호출합니다.',
          '**HTTP 웹 서버 모드.** Piper는 상시 실행되는 웹 서버로 동작시킬 수 있어, 음성 모델을 메모리에 계속 로드해 두고 호출할 때마다 발생하는 CLI 재로딩 비용을 피할 수 있습니다 — 반복 사용이나 프로덕션 환경에 권장됩니다.',
          '**C/C++ API(libpiper).** 예전 Piper 저장소에서 이식된 네이티브 C++ 라이브러리와 CLI로, Python이 아닌 애플리케이션에 Piper를 통합할 수 있습니다.',
          '**원시 음소 주입.** 텍스트를 `[[ ... ]]`로 감싸면 (`espeak-ng --ipa=3`으로 얻은) IPA 음소를 직접 전달할 수 있으며, 이름이나 전문 용어의 잘못된 발음을 고칠 때 유용합니다.',
          '**선택적 GPU 가속.** `--cuda`(CLI) 또는 `use_cuda=True`(Python)를 지정하면 `onnxruntime-gpu` 패키지를 통해 CUDA 가속이 활성화됩니다. 다만 Piper는 CPU만으로도 충분히 실용적인 속도로 동작하도록 설계되었습니다.',
          '**커뮤니티가 학습시킨 다국어 음성.** 수십 개 언어와 지역 변형이 [Hugging Face](https://huggingface.co/rhasspy/piper-voices/tree/main)에서 개별적으로 다운로드할 수 있는 음성 모델로 제공됩니다. 서로 다른 커뮤니티 기여자가 학습시키기 때문에 음성별로 품질이 다릅니다.',
        ],
        note: 'Piper는 음성 합성 엔진이지 음성 클로닝 도구가 아닙니다 — 그 음성들은 다운로드해서 선택하는 사전 학습된 모델이지, 짧은 참조 오디오 클립으로부터 즉석에서 만들어지는 것이 아닙니다. 음성 클로닝에 대해서는 아래 대안 섹션을 참고하십시오.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Piper 설치 및 실행: 단계별 가이드',
        content: '이 가이드는 pip로 Piper를 설치하고, 프로젝트 자체 CLI 및 Python API 문서에 기재된 구문을 사용해 첫 음성 합성을 실행합니다.',
        numberedItems: [
          {
            title: 'Piper를 설치합니다.',
            whyItMatters: 'Python 환경(Python 3.9 이상 권장)에서 `pip install piper-tts`를 실행합니다. 이렇게 하면 `piper` 패키지와 ONNX Runtime 의존성이 설치됩니다. CPU만 사용할 경우 별도의 GPU나 CUDA 설정은 필요하지 않습니다.',
          },
          {
            title: '음성을 나열하고 다운로드합니다.',
            whyItMatters: '인자 없이 `python3 -m piper.download_voices`를 실행해 사용 가능한 음성을 나열한 다음, `python3 -m piper.download_voices en_US-lessac-medium`을 실행해 특정 음성을 현재 디렉터리에 다운로드합니다.',
          },
          {
            title: '명령줄에서 음성을 합성합니다.',
            whyItMatters: '`python3 -m piper -m en_US-lessac-medium -f test.wav -- \'This is a test.\'`를 실행해 WAV 파일을 작성합니다. `ffplay`가 설치되어 있다면 `-f` 플래그를 생략해 저장 대신 바로 오디오를 들을 수 있습니다.',
          },
          {
            title: '(선택) CLI 대신 Python API를 사용합니다.',
            whyItMatters: '애플리케이션 내에서 반복 사용할 경우, `from piper import PiperVoice; voice = PiperVoice.load("en_US-lessac-medium.onnx")`에 이어 `voice.synthesize_wav(text, wav_file)`를 호출하면 매 호출마다 발생하는 CLI 시작 비용을 피할 수 있습니다.',
          },
          {
            title: '(선택) GPU 가속을 활성화합니다.',
            whyItMatters: '`onnxruntime-gpu` 패키지를 설치한 다음, CLI에서는 `--cuda`를, Python에서는 `PiperVoice.load()`에 `use_cuda=True`를 전달합니다. 선택 사항입니다 — Piper는 CPU만으로도 실시간으로 동작하도록 설계되었습니다.',
          },
          {
            title: '(선택) 반복 사용을 위해 웹 서버를 실행합니다.',
            whyItMatters: '프로덕션이나 반복 사용 환경에서는 Piper의 HTTP 웹 서버 모드를 실행해, CLI를 호출할 때마다 다시 로드하는 대신 음성 모델을 메모리에 계속 유지하십시오.',
          },
          {
            title: '(선택) 원시 음소로 잘못 발음되는 단어를 수정합니다.',
            whyItMatters: '`espeak-ng -v en-us --ipa=3 -q <단어>`로 단어의 IPA 음소를 얻은 다음, 입력 텍스트 안에서 `[[ ... ]]`로 감싸 그 단어에 대한 Piper의 자동 발음을 재정의합니다.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '위의 기본 설치 가이드 외에도, 다음은 프로젝트 자체 문서에 나오는 일반적인 실사용 패턴입니다.',
        ],
        codeBlock: `# 명령줄: WAV 파일 작성
python3 -m piper -m en_US-lessac-medium -f test.wav -- "This is a test."

# 명령줄: 오디오 즉시 재생 (ffplay 필요)
python3 -m piper -m en_US-lessac-medium -- "This will play on your speakers."

# Python API
import wave
from piper import PiperVoice

voice = PiperVoice.load("en_US-lessac-medium.onnx")
with wave.open("test.wav", "wb") as wav_file:
    voice.synthesize_wav("Welcome to the world of speech synthesis!", wav_file)

# Python API: 합성 설정 조정 (속도, 볼륨, 표현력)
from piper import SynthesisConfig

syn_config = SynthesisConfig(
    volume=0.5,        # 절반 음량
    length_scale=2.0,  # 두 배 느리게
    noise_scale=1.0,   # 더 많은 오디오 변화
    noise_w_scale=1.0, # 더 많은 발화 변화
)
voice.synthesize_wav("Custom synthesis settings.", wav_file, syn_config=syn_config)

# Python API: GPU 가속 (onnxruntime-gpu 필요)
voice = PiperVoice.load("en_US-lessac-medium.onnx", use_cuda=True)

# Python API: 스트리밍 합성
for chunk in voice.synthesize("Streamed audio, chunk by chunk."):
    play_audio(chunk.audio_int16_bytes, chunk.sample_rate)`,
        codeLanguage: 'python',
        note: '여기에 표시된 매개변수(`--cuda`, `SynthesisConfig`, `use_cuda`, 스트리밍용 `synthesize()` 제너레이터)는 GitHub의 프로젝트 docs/CLI.md와 docs/API_PYTHON.md에 문서화되어 있습니다. 버전에 따라 옵션이 바뀔 수 있으므로 프로덕션에 배포하기 전에 최신 문서를 확인하십시오.',
        items: [
          '**원시 음소 주입**을 통한 발음 수정: `espeak-ng -v en-us --ipa=3 -q <단어>`로 얻은 IPA 음소를 사용해 `The [[ bˈætmæn ]] not [[ bɹˈuːs wˈeɪn ]]`처럼 텍스트를 감쌉니다.',
          '**libpiper C/C++ API**는 `piper_create()`(더 세밀한 제어가 필요하면 `piper_create_with_options()`)를 제공하여, Python 런타임 없이 네이티브 애플리케이션에 Piper를 직접 통합할 수 있습니다.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스와 비용',
        content: [
          '**실제로 관리되는 Piper 저장소인 [OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl)은 GPL-3.0-or-later 라이선스를 따릅니다.** 이는 [PyPI](https://pypi.org/project/piper-tts/)에 공개된 `piper-tts` 패키지 메타데이터를 통해 확인됩니다. 이는 원래 저장소인 [rhasspy/piper](https://github.com/rhasspy/piper)에서 바뀐 것으로, 이 저장소는 2025년 10월 6일 아카이브되기 전까지 MIT 라이선스였으며, 지금도 그 MIT 라이선스 하에 이용할 수 있지만 더 이상 관리되지는 않습니다.',
          '**GPL-3.0은 카피레프트 라이선스로, 상업적 이용에 있어 MIT와는 실질적으로 다릅니다.** Piper를 사용해 음성을 생성하는 것은 상업적 용도를 포함해 무료로 가능합니다. 하지만 GPL-3.0은 Piper 자체 소스 코드의 수정 버전을 배포하는 경우 — 예를 들어 제품에 통합하거나 정적으로 링크한 포크 — 그 수정된 소스 코드를 동일한 GPL-3.0 조건으로 공개할 것을 요구합니다. Piper를 수정하지 않은 외부 도구로 사용하는 경우(CLI, Python 패키지, 웹 서버를 별도 프로세스로 호출하는 경우)에는 일반적으로 자신의 애플리케이션의 다른 소스 코드가 GPL의 적용을 받지 않지만, 정확한 경계는 자신의 코드가 Piper의 코드와 얼마나 밀접하게 연결되어 있는지에 따라 달라집니다. 이 단락은 라이선스의 대략적인 형태를 설명한 것이며, 법률 자문이 아닙니다 — Piper를 기반으로 한 상업 제품을 출시하기 전에 자신의 구체적인 배포 방식에 대해 변호사와 상담하십시오.',
          '**Piper 자체에는 유료 플랜, 구독, 라이선스 비용이 없습니다.** 실제 비용은 이를 실행하는 하드웨어와 자신의 개발 시간뿐입니다. 음성 모델은 공유되는 [Hugging Face 저장소](https://huggingface.co/rhasspy/piper-voices/tree/main)에서 별도로 다운로드합니다. 음성은 서로 다른 커뮤니티 구성원이 기여한 것이며 Piper 코드와 동일한 라이선스임이 보장되지 않으므로, 재배포하기 전에 각 음성에 명시된 라이선스를 확인하십시오.',
        ],
        faqs: [
          {
            q: 'Piper는 어떤 라이선스를 사용합니까?',
            a: '실제로 관리되는 Piper 저장소(OHF-Voice/piper1-gpl)는 GPL-3.0-or-later 라이선스를 따릅니다. 지금은 아카이브된 원래 저장소 rhasspy/piper는 MIT 라이선스였습니다. 이는 상업적 이용에 있어 실질적인 차이입니다 — GPL-3.0은 Piper 자체 소스 코드의 수정 버전을 배포할 경우 동일한 라이선스로 공개할 것을 요구하지만, MIT는 그런 요구가 없었습니다.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Piper가 적합하지 않은 용도',
        content: [
          'Piper는 빠르고 범용적인 로컬 음성 합성 엔진이지, 음성 클로닝이나 표현력 있는 발화를 위한 도구가 아닙니다. 다음과 같은 상황에서는 적합하지 않습니다:',
        ],
        items: [
          '**표현력 있고 감정적인, 또는 몇 초 안에 이루어지는 음성 클로닝.** Piper는 사전 학습된 음성 모델로부터 음성을 합성하는 것이지, 특정 인물의 짧은 참조 오디오 클립으로부터 합성하는 것이 아닙니다. 몇 초의 샘플 오디오로 음성을 클로닝해야 하거나 더 표현력 있는 발화가 필요하다면, [XTTS v2](https://huggingface.co/coqui/XTTS-v2)가 그 목적을 위해 만들어졌습니다 — 그 (비상업적) 라이선스 조건은 PromptQuorum의 [로컬 TTS 라이선스 가이드](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)를 참고하십시오.',
          '**짧은 샘플로부터의 다중 화자 클로닝.** 마찬가지로 Piper에는 특정 화자의 오디오 샘플로부터 즉석에서 새 음성을 생성하는 내장 메커니즘이 없습니다. 각 음성은 별도로 학습되고 배포되는 모델입니다.',
          '**폐쇄 소스 제품에서의 GPL-3.0 카피레프트 의무.** Piper 자체 소스 코드를 수정해 폐쇄 소스 바이너리 안에서 배포하는 사용 사례라면, 현재 저장소의 GPL-3.0-or-later 라이선스는 원래 MIT 라이선스 저장소에는 없던 실질적인 제약입니다. 위의 라이선스와 비용 섹션을 검토하고, 그런 종류의 배포를 하기 전에 변호사와 상담하십시오.',
          '**모든 언어에서 일관되게 보장되는 음성 품질.** 음성은 서로 다른 커뮤니티 구성원이 학습시키고 기여하기 때문에, 언어와 특정 음성에 따라 품질이 눈에 띄게 다릅니다 — 프로덕션 애플리케이션에 Piper를 채택하기 전에 대상 언어의 샘플을 확인하십시오.',
          '**장기적인 유지보수의 확실성.** 본 문서 작성 시점 기준, 프로젝트 자체 README에는 Open Home Foundation이 Piper를 위한 추가 관리자를 찾고 있다고 명시되어 있으며, 이는 그 위에 중요한 인프라를 구축하기로 결정하기 전에 고려할 점입니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Piper의 대안',
        itemHeadings: true,
        columns: ['도구', '최적의 용도', '라이선스'],
        rows: [
          {
            '도구': '[Coqui TTS](https://github.com/coqui-ai/TTS)',
            '최적의 용도': '폭넓은 언어 지원을 갖춘 유연한 멀티 백엔드 툴킷(VITS, Tacotron2, XTTS)',
            '라이선스': 'MPL-2.0',
          },
          {
            '도구': '[XTTS v2](https://huggingface.co/coqui/XTTS-v2)',
            '최적의 용도': '몇 초의 참조 오디오로부터 이루어지는, 17개 언어 지원 음성 클로닝',
            '라이선스': 'CPML(비상업적)',
          },
          {
            '도구': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '최적의 용도': '가장 자연스러운 영어 내레이션 품질(음성 클로닝 없음)',
            '라이선스': 'MIT',
          },
          {
            '도구': '[Bark](https://github.com/suno-ai/bark)',
            '최적의 용도': '웃음, 한숨, 주변 소리 등 표현력 있는 비언어 오디오',
            '라이선스': 'MIT',
          },
          {
            '도구': '[ElevenLabs](https://elevenlabs.io)',
            '최적의 용도': '자체 호스팅을 원하지 않는 팀을 위한 관리형 클라우드 API, 상업적 음성 클로닝 지원',
            '라이선스': '독점(유료 클라우드 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Piper란 무엇입니까?',
            a: 'Piper는 Michael Hansen이 Rhasspy 음성 비서 프로젝트 안에서 만든 무료 로컬 신경망 음성 합성 엔진으로, 현재는 Open Home Foundation이 관리하고 있으며, CPU 전용 하드웨어에서도 실시간으로 동작할 만큼 빠르게 텍스트를 음성으로 변환합니다.',
          },
          {
            q: 'Piper는 무료입니까?',
            a: '예. Piper에는 유료 플랜, 구독, 라이선스 비용이 없습니다. 현재는 GPL-3.0-or-later 라이선스를 따르며, 사용 자체는 무료이지만 Piper 자체 소스 코드의 수정 버전 배포에는 조건이 따릅니다 — 자세한 내용은 라이선스와 비용 섹션을 참고하십시오.',
          },
          {
            q: 'Piper를 실행하는 데 GPU가 필요합니까?',
            a: '아니요. Piper는 Raspberry Pi를 포함한 CPU 전용 하드웨어에서 실시간으로 동작하도록 설계되었습니다. 더 높은 처리량이 필요하면 onnxruntime-gpu 패키지를 통해 선택적으로 CUDA GPU 가속을 사용할 수 있습니다.',
          },
          {
            q: 'rhasspy/piper와 OHF-Voice/piper1-gpl의 차이는 무엇입니까?',
            a: 'rhasspy/piper는 Rhasspy 프로젝트 안에서 만들어진 원래 저장소로 MIT 라이선스였으며, 2025년 10월 6일에 아카이브(읽기 전용)되었습니다. OHF-Voice/piper1-gpl은 2025년 3월 28일 Open Home Foundation 산하에 생성된, 실제로 관리되는 후속 저장소로, MIT 대신 GPL-3.0-or-later 라이선스를 따릅니다.',
          },
          {
            q: 'Piper가 특정 인물의 음성을 클로닝할 수 있습니까?',
            a: '짧은 오디오 샘플로부터는 불가능합니다. Piper는 다운로드해서 선택한 사전 학습된 음성 모델을 사용해 음성을 합성하는 것이지, 몇 초의 참조 오디오로부터 즉석에서 새 음성을 클로닝하는 것이 아닙니다. 그런 목적이라면, 몇 초 안에 이루어지는 음성 클로닝을 위해 특별히 설계된 XTTS v2를 참고하십시오.',
          },
          {
            q: 'Piper는 Home Assistant에서 사용됩니까?',
            a: '예. Piper는 Home Assistant의 음성 비서 파이프라인에서 기본 로컬 음성 합성 엔진이며, Home Assistant를 운영하는 것과 같은 비영리 단체인 Open Home Foundation이 관리합니다.',
          },
          {
            q: '현재 Piper는 누가 관리합니까?',
            a: 'Piper는 2025년에 원래 Rhasspy에서 호스팅되던 저장소로부터 개발이 이전된 이후, Open Home Foundation 산하의 OHF-Voice/piper1-gpl 저장소에서 관리되고 있습니다. 프로젝트의 README에는 Open Home Foundation이 현재 추가 관리자를 찾고 있다고 명시되어 있습니다.',
          },
          {
            q: 'Piper의 최신 릴리스는 무엇입니까?',
            a: '최신 안정 버전은 v1.8.0이며, 프로젝트 GitHub 릴리스 페이지에 따르면 2026년 9월 4일에 공개되었습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Piper는 여전히 평범한 하드웨어에서 진짜 로컬 음성 합성을 구현하는 가장 빠른 방법 중 하나로 남아 있습니다 — CPU만으로도 실시간으로 동작하는 성능 덕분에 Home Assistant의 기본 음성이 되었고, 새로운 관리자 체제 아래에서도 이는 변하지 않았습니다. 변한 것, 그리고 2026년에 Piper를 평가하는 모든 사람이 알아야 할 것은 라이선스입니다. 2025년 개발이 Open Home Foundation으로 이전하면서 실제로 관리되는 저장소는 MIT에서 GPL-3.0-or-later로 바뀌었으며, 이는 수정된 Piper 소스 코드를 폐쇄 소스 제품에 통합해 재배포하려는 사람에게 실질적인 차이입니다. Piper는 여전히 무료이고, 문서화가 잘 되어 있으며, 활발히 릴리스되고 있습니다(2026년 9월 기준 v1.8.0). 다만 그 관리자들 스스로도 공개적으로 더 많은 도움을 구하고 있습니다. CPU급 하드웨어에서 빠르고 오프라인이며 범용적인 음성 합성을 원한다면, Piper는 충분히 검증된 무비용 선택지입니다 — 몇 초 안에 이루어지는 표현력 있는 음성 클로닝이 필요하다면, 이 리뷰와 함께 PromptQuorum의 [XTTS v2](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) 관련 콘텐츠를 참고하거나, 관리형 클라우드 대안과 비교한 [ElevenLabs 대 로컬 TTS 비교](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)를 참고하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 OHF-Voice/piper1-gpl](https://github.com/OHF-Voice/piper1-gpl) — 실제로 관리되는 저장소: README, 문서, 라이선스, 릴리스 이력.',
          '[PyPI의 piper-tts](https://pypi.org/project/piper-tts/) — 현재의 GPL-3.0-or-later 라이선스를 포함한 공개 패키지 메타데이터.',
          '[GitHub의 rhasspy/piper](https://github.com/rhasspy/piper) — 지금은 아카이브된 원래 저장소(MIT 라이선스).',
          '[piper1-gpl 릴리스](https://github.com/OHF-Voice/piper1-gpl/releases) — v1.8.0(2026년 9월 4일)을 포함한 버전 이력.',
          '[Open Home Foundation](https://www.openhomefoundation.org/) — Piper와 Home Assistant를 관리하는 비영리 단체.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 TTS 및 음성 클로닝 라이선스: Piper, XTTS v2, F5-TTS, Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 주요 로컬 TTS 엔진 전체를 다루는 라이선스 비교.',
          '[ElevenLabs 대 Piper 대 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 자체 호스팅 여부를 결정하려는 독자를 위한 클라우드 대 로컬 비교.',
          '[2026년 완전 오프라인 음성 비서 구축하기](/power-local-llm/build-local-voice-assistant-2026) — Piper를 로컬 LLM 및 Whisper 기반 STT 엔진과 연결해 완전한 음성 파이프라인을 구축하는 방법.',
          '[Whisper.cpp 리뷰](/power-local-llm/whisper-cpp-review) — 동일한 깊이로 다룬 로컬 음성 인식 대응 제품 리뷰.',
          '[faster-whisper 리뷰](/power-local-llm/faster-whisper-review) — 동일한 깊이로 다룬 CTranslate2 기반 음성 인식 대안.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Piper TTS 리뷰(2026): 빠르고 로컬한 신경망 음성 합성',
      description:
        'Piper TTS 리뷰: Rhasspy 프로젝트에서 시작되어 현재 Open Home Foundation이 관리하는 무료 로컬 신경망 음성 합성 엔진입니다. 역사, 설치 단계, 실제 명령어, 현재 GPL-3.0 라이선스, XTTS v2를 선택해야 할 때를 정리했습니다.',
      url: 'https://promptquorum.com/power-local-llm/piper-tts-review',
      inLanguage: 'ko',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 오프라인 음성 합성 도구를 평가하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'Piper TTS' },
        { '@type': 'Thing', name: 'Open Home Foundation' },
        { '@type': 'Thing', name: 'Home Assistant' },
        { '@type': 'Thing', name: '음성 합성' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/piper-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Piper TTS 리뷰(2026)', item: 'https://promptquorum.com/power-local-llm/piper-tts-review' },
      ],
    },
  },
}
