// Coqui TTS Review: The Community-Maintained Voice-Cloning Toolkit
// Slug: coqui-tts-review
// Companion to: local-tts-voice-cloning-piper-coqui-xtts.ts (licensing deep dive),
// elevenlabs-vs-local-tts-piper-xtts.ts (cloud vs. local TTS comparison), and xtts-v2-review.ts (the model that runs on this toolkit)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-en.webp',
    title: 'Coqui TTS Review (2026): The Community-Maintained Voice-Cloning Toolkit',
    seoTitle: 'Coqui TTS Review 2026: Community-Maintained TTS Toolkit',
    intro:
      'Coqui TTS is an open-source, local text-to-speech and voice-cloning toolkit descended from Mozilla\'s TTS project, originally built by the startup Coqui AI, which shut down its paid services in December 2023. The original repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), has had no new commits since August 2024 and is not actively maintained, though it remains publicly available under its MPL-2.0 license. Development continues on a community fork, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), maintained by the [Idiap Research Institute](https://www.idiap.ch/) and published to PyPI as the `coqui-tts` package. This review covers that history, the toolkit\'s relationship to the [XTTS v2](https://huggingface.co/coqui/XTTS-v2) voice-cloning model, real install and usage commands, its MPL-2.0 license, and where the maintenance transition matters for anyone considering it in 2026.',
    metaDescription:
      'Coqui TTS review: the open-source, local voice-cloning toolkit descended from Mozilla TTS. Coqui AI shut down in 2023; the actively maintained fork is idiap/coqui-ai-TTS. History, install steps, XTTS v2 relationship, MPL-2.0 license, and honest limits.',
    twitterDescription:
      'Coqui TTS review 2026: the local voice-cloning toolkit Coqui AI built before shutting down in 2023 — now kept alive by a community fork at the Idiap Research Institute. Real install commands, its link to XTTS v2, and what changed after the company closed.',
    audience:
      'Developers and researchers who want a flexible, self-hosted text-to-speech toolkit with voice-cloning support and need to understand its post-shutdown maintenance status before building on it.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS review',
    targetKeywords: [
      'coqui tts review',
      'coqui tts',
      'coqui tts install',
      'coqui tts python',
      'coqui tts license',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'is coqui tts still maintained',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS is an open-source, local text-to-speech and voice-cloning toolkit, originally built by the startup Coqui AI, which shut down its paid services in December 2023.** The original repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), has not been updated since August 2024. Install the actively maintained community fork instead: `pip install coqui-tts`, which comes from [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), maintained by the [Idiap Research Institute](https://www.idiap.ch/). The toolkit is licensed under MPL-2.0 and is the software that runs the [XTTS v2](https://huggingface.co/coqui/XTTS-v2) voice-cloning model — the toolkit and the model are separate things with separate licenses (see the [License and Cost](#license-cost) section). For a full licensing comparison across local TTS engines, see PromptQuorum\'s [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'What is Coqui TTS and is it still maintained?',
        answer:
          'Coqui TTS is worth using if you want a flexible, local text-to-speech toolkit that supports multiple model architectures (VITS, Tacotron2, and the XTTS v2 voice-cloning model) with broad language coverage. It descends from Mozilla\'s TTS research project and was developed by the startup Coqui AI. The company shut down its paid services in December 2023, and its original repository, coqui-ai/TTS, has had no new commits since August 2024 — it is not actively maintained, though it remains downloadable under its MPL-2.0 license. Yes, a maintained version exists: development continues on a community fork, idiap/coqui-ai-TTS, maintained by the Idiap Research Institute and published to PyPI as the coqui-tts package, with releases as recent as January 2026. Choose Piper instead if you want the fastest CPU-only synthesis with no interest in voice cloning; choose Coqui TTS specifically if you want to run XTTS v2 or other cloning-capable models through a single, actively updated toolkit.',
        bullets: [
          'Descends from Mozilla\'s TTS research project; built by the startup Coqui AI, founded 2021 by former Mozilla TTS engineers.',
          'Coqui AI shut down its paid services in December 2023; the original coqui-ai/TTS repository has had no new commits since August 2024.',
          'Actively maintained community fork: idiap/coqui-ai-TTS, maintained by the Idiap Research Institute, published to PyPI as coqui-tts.',
          'License: MPL-2.0 for the toolkit itself. The XTTS v2 model that runs on it has a separate, non-commercial license (CPML) — the toolkit and the model are not the same license.',
          'Free, no paid tier; supports CPU inference with GPU acceleration recommended for larger models like XTTS v2.',
          'Latest package release: coqui-tts v0.27.5, published January 26, 2026, per PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: From Mozilla TTS to a Community Fork', anchor: 'history' },
      { label: 'What Coqui TTS Actually Does', anchor: 'what-it-does' },
      { label: 'Coqui TTS and XTTS v2: How They Relate', anchor: 'xtts-relationship' },
      { label: 'Install and Run Coqui TTS: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Cost', anchor: 'license-cost' },
      { label: 'What Coqui TTS Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to Coqui TTS', anchor: 'alternatives' },
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
            text: 'Coqui TTS is an open-source, local text-to-speech and voice-cloning toolkit descended from Mozilla\'s TTS project, whose original company, Coqui AI, shut down its paid services in December 2023, leaving the original repository unmaintained since August 2024 — but an actively maintained community fork, idiap/coqui-ai-TTS, continues development under the Idiap Research Institute.',
          },
          {
            type: 'plain-terms',
            text: 'It is a program you `pip install` that can turn text into speech using several different AI models, including a voice-cloning model called XTTS v2 — the company that built it closed down, but a research institute now keeps the software updated.',
          },
        ],
        items: [
          'Descends from Mozilla\'s TTS research project; built by the startup Coqui AI, founded in 2021 by former Mozilla TTS engineers.',
          'Coqui AI shut down its paid cloud services in December 2023; the original coqui-ai/TTS GitHub repository has had no new commits since August 2024.',
          'Actively maintained fork: idiap/coqui-ai-TTS, by the Idiap Research Institute, published to PyPI as `coqui-tts`.',
          'License: MPL-2.0 for the toolkit. The XTTS v2 model it can run is separately licensed under the non-commercial CPML — do not confuse the two.',
          'Free, no paid tier; runs on CPU, with GPU recommended for larger voice-cloning models.',
          'Latest package release: coqui-tts v0.27.5, published January 26, 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Install `coqui-tts` (the maintained fork), not the original `TTS` package name from the now-unmaintained coqui-ai/TTS repository, if you want a version that receives updates. See the Install and Run section below.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: From Mozilla TTS to a Community Fork',
        content: [
          '**Coqui TTS traces back to [Mozilla\'s TTS project](https://github.com/mozilla/TTS)**, an internal Mozilla research effort into open-source speech technology. When Mozilla disbanded that research group in 2021, several of its engineers — including Eren Gölge, Kelly Davis, Josh Meyer, and Reuben Morais — founded a startup, Coqui AI, to continue the work as an independent company, releasing both a text-to-speech toolkit (Coqui TTS) and a speech-to-text toolkit (Coqui STT).',
          '**Coqui AI raised a $3.3 million seed round in March 2023** and offered both an open-source toolkit and paid cloud services, including hosted access to its voice-cloning model, XTTS. The company struggled to reach a sustainable business model on top of open-source software, and announced it was shutting down its paid services in December 2023, with its servers going offline on December 11, 2023.',
          '**The original repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), remains publicly available on GitHub** under its MPL-2.0 license, but has had no new commits since August 2024, and GitHub does not show it as formally archived — in practice, it receives no active development or bug fixes.',
          '**A community fork, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), continues development.** It is maintained under the [Idiap Research Institute](https://www.idiap.ch/), a Swiss research institute, and is published to PyPI under the package name `coqui-tts` (distinct from the original `TTS` package name). Its README explicitly states it is a "fork of the original, unmaintained repository," and its release history shows ongoing updates, including a v0.27.0 release adding a voice-cloning cache and a v0.27.5 release on January 26, 2026.',
        ],
        faqs: [
          {
            q: 'Who created Coqui TTS?',
            a: 'Coqui TTS was created by the startup Coqui AI, founded in 2021 by former engineers of Mozilla\'s TTS research project, including Eren Gölge, Kelly Davis, Josh Meyer, and Reuben Morais. After Coqui AI shut down its paid services in December 2023, development continued on a community fork maintained by the Idiap Research Institute.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What Coqui TTS Actually Does',
        content: [
          'Coqui TTS is a toolkit, not a single model — it provides a unified Python interface, CLI, and training pipeline for running (and, historically, training) several different text-to-speech model architectures.',
        ],
        items: [
          '**Multi-model interface.** A single `TTS()` Python class loads and runs different model architectures, including VITS-based single-speaker and multi-speaker models, Tacotron2-based models, and the [XTTS v2](https://huggingface.co/coqui/XTTS-v2) voice-cloning model, without changing the surrounding application code.',
          '**Command-line synthesis.** The `tts` CLI command synthesizes speech directly from the terminal, listing all available pretrained models with `tts --list_models`.',
          '**Voice cloning via XTTS v2.** Passing a `speaker_wav` argument to a loaded XTTS v2 model clones a voice from a short reference audio clip, generating speech in that cloned voice across the languages XTTS v2 supports.',
          '**Broad pretrained model library.** The toolkit ships with access to pretrained models described as covering over 1,100 languages via the underlying Fairseq-based massively multilingual models, alongside higher-quality curated models for specific languages.',
          '**Model training and fine-tuning.** Beyond running pretrained models, the toolkit includes training scripts and dataset-analysis utilities for building or fine-tuning a custom voice model, historically one of its most-used features before the shutdown of Coqui AI\'s hosted training service.',
          '**Streaming inference for XTTS v2.** The toolkit documents low-latency streaming synthesis with XTTS v2 (cited by the maintained fork\'s documentation as sub-200ms latency to first audio), useful for interactive voice applications.',
        ],
        note: 'Coqui TTS is the software that runs models; XTTS v2 is one specific model it can run. They are covered together here because most readers evaluating Coqui TTS in 2026 are specifically interested in running XTTS v2 through it — see the dedicated relationship section below.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS and XTTS v2: How They Relate',
        content: [
          '**Coqui TTS (the toolkit) and XTTS v2 (the model) are two different things with two different licenses, and confusing them is a common licensing mistake.** The Coqui TTS toolkit — the Python package, CLI, and training code — is licensed under MPL-2.0, a permissive license that allows commercial use with source-disclosure conditions on toolkit modifications. XTTS v2 is a specific pretrained model whose weights are distributed under the Coqui Public Model License (CPML), a non-commercial license, separate from the toolkit\'s MPL-2.0 license.',
          '**In practice, this means you can use the Coqui TTS toolkit commercially with permissively licensed models** (VITS or Tacotron2 models trained under compatible licenses) while the specific combination of "Coqui TTS toolkit running the XTTS v2 model" inherits XTTS v2\'s non-commercial restriction for that model\'s weights and outputs. Running a different, permissively licensed model through the same toolkit does not carry that restriction.',
          '**The `coqui-tts` package documents XTTS v2 usage directly**, with the model loaded as `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`, since the toolkit is the primary supported way to run XTTS v2 outside of directly using the model weights through another inference stack. See PromptQuorum\'s dedicated [XTTS v2 review](/power-local-llm/xtts-v2-review) for a full breakdown of that model\'s license and capabilities.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Install and Run Coqui TTS: Step by Step',
        content: 'This walkthrough installs the actively maintained `coqui-tts` package and runs a first synthesis, using the syntax documented in the maintained fork\'s own README.',
        numberedItems: [
          {
            title: 'Install the maintained package.',
            whyItMatters: 'Run `pip install coqui-tts` (or `uv pip install coqui-tts` if using uv) in a Python environment. Install the `coqui-tts` package specifically — not the older `TTS` package name, which points to the now-unmaintained original repository.',
          },
          {
            title: 'List available pretrained models.',
            whyItMatters: 'Run `tts --list_models` to see the full catalog of pretrained models available to download, organized by language and architecture (VITS, Tacotron2, XTTS, and others).',
          },
          {
            title: 'Synthesize speech from the command line.',
            whyItMatters: 'Run `tts --text "Hello world" --out_path output.wav` to synthesize with the default model, or add `--model_name <model>` to pick a specific one from the list.',
          },
          {
            title: '(Optional) Use the Python API for XTTS v2 voice cloning.',
            whyItMatters: 'Load the model with `TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`, then call `.tts_to_file()` with a `speaker_wav` argument pointing to a short reference audio clip and a `language` argument to clone a voice.',
          },
          {
            title: '(Optional) Enable GPU acceleration.',
            whyItMatters: 'Pass `gpu=True` to the `TTS()` constructor, or call `.to("cuda")` on the loaded model object, to run inference on an NVIDIA GPU — recommended for XTTS v2, which is significantly slower on CPU alone.',
          },
          {
            title: '(Optional) Accept the CPML license non-interactively for XTTS v2.',
            whyItMatters: 'Loading XTTS v2 for the first time prompts an interactive license-acceptance step for the CPML. Set the `COQUI_TOS_AGREED=1` environment variable to accept it non-interactively, which is required for unattended use in Docker containers or CI pipelines.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'Beyond the basic install walkthrough above, these are common real-world usage patterns from the maintained fork\'s own documentation.',
        ],
        codeBlock: `# Command line: list available pretrained models
tts --list_models

# Command line: synthesize with the default model
tts --text "Hello world" --out_path output.wav

# Command line: synthesize with a specific model
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# Python API: basic synthesis
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# Python API: XTTS v2 voice cloning (accept CPML non-interactively first)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# Python API: list speakers and languages available on a loaded model
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'The `COQUI_TOS_AGREED=1` environment variable and the `speaker_wav`/`language` arguments are documented in the maintained fork\'s README and API docs. Check the current documentation before deploying, since the toolkit\'s API has changed across major versions (the original `TTS` package and the maintained `coqui-tts` fork share this same `TTS.api.TTS` import path as of the versions checked for this review).',
        items: [
          '**Non-interactive CPML acceptance** for automated environments: set `COQUI_TOS_AGREED=1` before the first XTTS v2 load, so Docker builds and CI pipelines do not hang on an interactive prompt.',
          '**Speaker and language introspection**: after loading a multi-speaker or multilingual model, `tts.speakers` and `tts.languages` list what the loaded model actually supports, useful for validating input before synthesis.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Cost',
        content: [
          '**The Coqui TTS toolkit is licensed under MPL-2.0 (Mozilla Public License 2.0)**, confirmed via the `coqui-tts` package\'s published metadata on [PyPI](https://pypi.org/project/coqui-tts/) and the license file in the [idiap/coqui-ai-TTS repository](https://github.com/idiap/coqui-ai-TTS). MPL-2.0 is a permissive-with-conditions license: you can use the toolkit commercially, but if you modify and distribute the toolkit\'s own source files, you must release those specific modified files under MPL-2.0 as well. Using the toolkit as an unmodified dependency does not place your own application code under MPL-2.0.',
          '**The XTTS v2 model is licensed separately, under the Coqui Public Model License (CPML), which is non-commercial** — this applies to the model weights and their generated audio outputs, not to the Coqui TTS toolkit code that runs them. See PromptQuorum\'s [XTTS v2 review](/power-local-llm/xtts-v2-review) for the full breakdown of that license.',
          '**There is no paid tier, subscription, or license fee for the Coqui TTS toolkit itself.** Coqui AI\'s paid hosted services shut down in December 2023 and are not available at any price; the only way to use Coqui TTS today is self-hosted, using either the unmaintained original package or the actively maintained `coqui-tts` fork.',
        ],
        faqs: [
          {
            q: 'What license does Coqui TTS use?',
            a: 'The Coqui TTS toolkit itself is licensed under MPL-2.0, which allows commercial use with the condition that modifications to the toolkit\'s own source files are released under the same license. This is separate from the license of any specific model it runs — the XTTS v2 model, for example, is under the non-commercial Coqui Public Model License (CPML), which applies to the model weights and outputs, not the toolkit code.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What Coqui TTS Is Not Good For',
        content: [
          'Coqui TTS is a flexible, multi-model toolkit, not the fastest or simplest option for every use case. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Building on the original, unmaintained repository.** If you `pip install TTS` (the original package name) rather than `pip install coqui-tts` (the maintained fork), you are building on code that has received no updates since August 2024 — check which package a tutorial or dependency actually references before relying on it.',
          '**Fastest possible CPU-only synthesis.** If your priority is real-time speech on modest hardware like a Raspberry Pi with no GPU, [Piper](/power-local-llm/piper-tts-review) is purpose-built for that and simpler to deploy; Coqui TTS\'s larger models, especially XTTS v2, are noticeably slower on CPU alone.',
          '**Commercial voice cloning without a separate license check.** Running XTTS v2 through the Coqui TTS toolkit still carries XTTS v2\'s own non-commercial CPML restriction on the model weights and outputs — the toolkit\'s MPL-2.0 license does not override that. See the License and Cost section above.',
          '**Guaranteed long-term corporate support.** Coqui AI, the company, no longer exists as of December 2023. The current fork is maintained by a research institute on a community basis, which is a different maintenance model than a funded company with a support contract — factor that into decisions for critical production infrastructure.',
          '**A single, stable API across versions.** Because development moved between an unmaintained original and an actively developed fork, some tutorials, Stack Overflow answers, and blog posts online reference an older API surface or the original package name — verify against the current `coqui-tts` documentation rather than an older search result.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Coqui TTS',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Piper](/power-local-llm/piper-tts-review)',
            'Best fit': 'Fastest CPU-only synthesis, no voice cloning, real-time on a Raspberry Pi',
            'License': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Best fit': 'The voice-cloning model itself, if you only need XTTS v2 and not the broader toolkit',
            'License': 'CPML (non-commercial)',
          },
          {
            'Tool': '[Bark](/power-local-llm/bark-tts-review)',
            'Best fit': 'Expressive, non-speech audio — laughter, sighs, ambient sound',
            'License': 'MIT',
          },
          {
            'Tool': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Best fit': 'Highest natural-sounding English narration quality (no voice cloning)',
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
            q: 'What is Coqui TTS?',
            a: 'Coqui TTS is an open-source, local text-to-speech and voice-cloning toolkit descended from Mozilla\'s TTS research project, originally built by the startup Coqui AI. It supports multiple model architectures, including the XTTS v2 voice-cloning model, through a single Python interface and CLI.',
          },
          {
            q: 'Is Coqui TTS still maintained?',
            a: 'The original coqui-ai/TTS repository is not actively maintained — it has had no new commits since August 2024, after the company Coqui AI shut down its paid services in December 2023. An actively maintained community fork, idiap/coqui-ai-TTS, continues development under the Idiap Research Institute and is published to PyPI as the coqui-tts package, with releases as recent as January 2026.',
          },
          {
            q: 'Is Coqui TTS free?',
            a: 'Yes, the toolkit itself has no paid tier or license fee. Coqui AI\'s previous paid hosted services shut down in December 2023 and are not available at any price. Some specific models that run on the toolkit, like XTTS v2, have their own separate license (CPML) that restricts commercial use of that model\'s weights and outputs.',
          },
          {
            q: 'What is the difference between the coqui-tts and TTS packages?',
            a: 'TTS is the original PyPI package name, tied to the unmaintained coqui-ai/TTS repository with no updates since August 2024. coqui-tts is the actively maintained fork\'s package name, published from the idiap/coqui-ai-TTS repository under the Idiap Research Institute, with regular releases including v0.27.5 in January 2026. Install coqui-tts for a version that receives updates.',
          },
          {
            q: 'Does Coqui TTS support voice cloning?',
            a: 'Yes, via the XTTS v2 model, which the toolkit can load and run. XTTS v2 clones a voice from a short reference audio clip passed as the speaker_wav argument. Note that XTTS v2\'s own license, the Coqui Public Model License (CPML), is non-commercial, separate from the toolkit\'s MPL-2.0 license.',
          },
          {
            q: 'Why did Coqui AI shut down?',
            a: 'Coqui AI, the company behind Coqui TTS, announced it was shutting down its paid hosted services in December 2023, with its servers going offline on December 11, 2023, after struggling to build a sustainable business model on top of open-source speech technology. The open-source toolkit itself remained available, and development later continued on a community fork.',
          },
          {
            q: 'What is the latest Coqui TTS release?',
            a: 'The latest release of the actively maintained coqui-tts package is v0.27.5, published January 26, 2026, per its PyPI listing.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Coqui TTS is a genuinely useful case study in what happens to open-source infrastructure after the company behind it shuts down: the original repository went quiet in August 2024, but the software did not disappear — a research institute picked up maintenance, renamed the package, and kept shipping releases into 2026. For anyone evaluating it today, the practical takeaway is simple: install `coqui-tts`, not the original `TTS` package, and understand that the toolkit\'s MPL-2.0 license is separate from the non-commercial CPML license on the XTTS v2 model it can run. As a toolkit, its strength is flexibility across model architectures rather than being the fastest or simplest option for any single use case — for that, pair this review with PromptQuorum\'s coverage of [Piper](/power-local-llm/piper-tts-review) for speed, [XTTS v2](/power-local-llm/xtts-v2-review) for the cloning model specifically, or the [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) for the full picture across engines.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[idiap/coqui-ai-TTS on GitHub](https://github.com/idiap/coqui-ai-TTS) — the actively maintained fork: README, docs, license, and release history.',
          '[coqui-tts on PyPI](https://pypi.org/project/coqui-tts/) — published package metadata, including the current MPL-2.0 license and version history.',
          '[coqui-ai/TTS on GitHub](https://github.com/coqui-ai/TTS) — the original, now-unmaintained repository (MPL-2.0 license).',
          '[XTTS v2 on Hugging Face](https://huggingface.co/coqui/XTTS-v2) — the voice-cloning model\'s model card and CPML license text.',
          '[Idiap Research Institute](https://www.idiap.ch/) — the Swiss research institute maintaining the community fork.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local TTS & Voice Cloning Licenses: Piper, XTTS v2, F5-TTS and Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — the licensing deep dive across all major local TTS engines.',
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review) — a full breakdown of the voice-cloning model this toolkit can run.',
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — the fast, CPU-only local TTS alternative, reviewed in the same depth.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — the cloud-vs-local comparison for readers deciding whether to self-host.',
          '[Bark TTS Review](/power-local-llm/bark-tts-review) — the expressive, non-speech-audio local TTS model, reviewed in the same depth.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS Review (2026): The Community-Maintained Voice-Cloning Toolkit',
      description:
        'Coqui TTS review: the open-source, local voice-cloning toolkit descended from Mozilla TTS. Coqui AI shut down in 2023; the actively maintained fork is idiap/coqui-ai-TTS. History, install steps, XTTS v2 relationship, MPL-2.0 license, and honest limits.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'en',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, self-hosted text-to-speech toolkits' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Idiap Research Institute' },
        { '@type': 'Thing', name: 'Text-to-speech' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS Review (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-de.webp',
    title: 'Coqui TTS im Test (2026): Das von der Community gepflegte Voice-Cloning-Toolkit',
    seoTitle: 'Coqui TTS im Test 2026: Community-TTS-Toolkit',
    intro:
      'Coqui TTS ist ein Open-Source-Toolkit für lokale Sprachsynthese und Voice-Cloning, das von Mozillas TTS-Projekt abstammt und ursprünglich vom Start-up Coqui AI entwickelt wurde, das seine kostenpflichtigen Dienste im Dezember 2023 einstellte. Das ursprüngliche Repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), hat seit August 2024 keine neuen Commits mehr erhalten und wird nicht mehr aktiv gepflegt, bleibt aber unter seiner MPL-2.0-Lizenz öffentlich verfügbar. Die Weiterentwicklung erfolgt in einem Community-Fork, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), gepflegt vom [Idiap Research Institute](https://www.idiap.ch/) und als `coqui-tts`-Paket auf PyPI veröffentlicht. Dieser Test behandelt diese Geschichte, das Verhältnis des Toolkits zum Voice-Cloning-Modell [XTTS v2](https://huggingface.co/coqui/XTTS-v2), echte Installations- und Nutzungsbefehle, die MPL-2.0-Lizenz und die Punkte, an denen der Pflege-Übergang 2026 wirklich relevant ist.',
    metaDescription:
      'Coqui TTS im Test: das Open-Source-Toolkit für lokales Voice-Cloning, das von Mozilla TTS abstammt. Coqui AI schloss 2023; der aktiv gepflegte Fork ist idiap/coqui-ai-TTS. Geschichte, Installation, Verhältnis zu XTTS v2, MPL-2.0-Lizenz und ehrliche Grenzen.',
    twitterDescription:
      'Coqui TTS im Test 2026: das lokale Voice-Cloning-Toolkit, das Coqui AI vor seiner Schließung 2023 baute — heute am Leben gehalten von einem Community-Fork am Idiap Research Institute. Echte Installationsbefehle, die Verbindung zu XTTS v2 und was sich nach der Schließung änderte.',
    audience:
      'Entwickler und Forscher, die ein flexibles, selbst gehostetes Text-zu-Sprache-Toolkit mit Voice-Cloning-Unterstützung wollen und den Pflegestatus nach der Firmenschließung verstehen müssen, bevor sie darauf aufbauen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS im Test',
    targetKeywords: [
      'coqui tts test',
      'coqui tts',
      'coqui tts installieren',
      'coqui tts python',
      'coqui tts lizenz',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'wird coqui tts noch gepflegt',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS ist ein Open-Source-Toolkit für lokale Sprachsynthese und Voice-Cloning, ursprünglich vom Start-up Coqui AI entwickelt, das seine kostenpflichtigen Dienste im Dezember 2023 einstellte.** Das ursprüngliche Repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), wurde seit August 2024 nicht mehr aktualisiert. Installieren Sie stattdessen den aktiv gepflegten Community-Fork: `pip install coqui-tts`, der aus [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) stammt und vom [Idiap Research Institute](https://www.idiap.ch/) gepflegt wird. Das Toolkit steht unter MPL-2.0 und ist die Software, die das Voice-Cloning-Modell [XTTS v2](https://huggingface.co/coqui/XTTS-v2) ausführt — Toolkit und Modell sind getrennte Dinge mit getrennten Lizenzen (siehe Abschnitt [Lizenz und Kosten](#license-cost)). Für einen vollständigen Lizenzvergleich über lokale TTS-Engines hinweg siehe PromptQuorums [Leitfaden zu lokalen TTS-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'Was ist Coqui TTS und wird es noch gepflegt?',
        answer:
          'Coqui TTS lohnt sich, wenn Sie ein flexibles, lokales Text-zu-Sprache-Toolkit wollen, das mehrere Modellarchitekturen unterstützt (VITS, Tacotron2 und das Voice-Cloning-Modell XTTS v2) mit breiter Sprachabdeckung. Es stammt von Mozillas TTS-Forschungsprojekt ab und wurde vom Start-up Coqui AI entwickelt. Das Unternehmen stellte seine kostenpflichtigen Dienste im Dezember 2023 ein, und sein ursprüngliches Repository, coqui-ai/TTS, hat seit August 2024 keine neuen Commits mehr erhalten — es wird nicht mehr aktiv gepflegt, bleibt aber unter seiner MPL-2.0-Lizenz herunterladbar. Ja, es gibt eine gepflegte Version: Die Weiterentwicklung erfolgt in einem Community-Fork, idiap/coqui-ai-TTS, gepflegt vom Idiap Research Institute und als coqui-tts-Paket auf PyPI veröffentlicht, mit Releases bis Januar 2026. Wählen Sie stattdessen Piper, wenn Sie die schnellste reine CPU-Synthese ohne Interesse an Voice-Cloning wollen; wählen Sie Coqui TTS speziell, wenn Sie XTTS v2 oder andere cloning-fähige Modelle über ein einziges, aktiv gepflegtes Toolkit ausführen möchten.',
        bullets: [
          'Stammt von Mozillas TTS-Forschungsprojekt ab; entwickelt vom Start-up Coqui AI, gegründet 2021 von ehemaligen Mozilla-TTS-Ingenieuren.',
          'Coqui AI stellte seine kostenpflichtigen Dienste im Dezember 2023 ein; das ursprüngliche coqui-ai/TTS-Repository hat seit August 2024 keine neuen Commits mehr erhalten.',
          'Aktiv gepflegter Community-Fork: idiap/coqui-ai-TTS, gepflegt vom Idiap Research Institute, auf PyPI als coqui-tts veröffentlicht.',
          'Lizenz: MPL-2.0 für das Toolkit selbst. Das darauf laufende XTTS-v2-Modell hat eine separate, nicht-kommerzielle Lizenz (CPML) — Toolkit und Modell teilen sich keine Lizenz.',
          'Kostenlos, keine Bezahlstufe; unterstützt CPU-Inferenz, GPU-Beschleunigung wird für größere Modelle wie XTTS v2 empfohlen.',
          'Aktuelles Paket-Release: coqui-tts v0.27.5, veröffentlicht am 26. Januar 2026, laut PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Von Mozilla TTS zum Community-Fork', anchor: 'history' },
      { label: 'Was Coqui TTS tatsächlich tut', anchor: 'what-it-does' },
      { label: 'Coqui TTS und XTTS v2: Das Verhältnis', anchor: 'xtts-relationship' },
      { label: 'Coqui TTS installieren und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Nutzungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und Kosten', anchor: 'license-cost' },
      { label: 'Wofür Coqui TTS nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu Coqui TTS', anchor: 'alternatives' },
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
            text: 'Coqui TTS ist ein Open-Source-Toolkit für lokale Sprachsynthese und Voice-Cloning, das von Mozillas TTS-Projekt abstammt; das ursprüngliche Unternehmen, Coqui AI, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein, wodurch das ursprüngliche Repository seit August 2024 ungepflegt ist — doch ein aktiv gepflegter Community-Fork, idiap/coqui-ai-TTS, führt die Entwicklung unter dem Idiap Research Institute fort.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein Programm, das Sie per `pip install` installieren und das Text mithilfe mehrerer verschiedener KI-Modelle in Sprache umwandeln kann, darunter ein Voice-Cloning-Modell namens XTTS v2 — das Unternehmen dahinter hat geschlossen, doch ein Forschungsinstitut hält die Software heute aktuell.',
          },
        ],
        items: [
          'Stammt von Mozillas TTS-Forschungsprojekt ab; entwickelt vom Start-up Coqui AI, gegründet 2021 von ehemaligen Mozilla-TTS-Ingenieuren.',
          'Coqui AI stellte seine kostenpflichtigen Cloud-Dienste im Dezember 2023 ein; das ursprüngliche GitHub-Repository coqui-ai/TTS hat seit August 2024 keine neuen Commits mehr erhalten.',
          'Aktiv gepflegter Fork: idiap/coqui-ai-TTS, vom Idiap Research Institute, auf PyPI als `coqui-tts` veröffentlicht.',
          'Lizenz: MPL-2.0 für das Toolkit. Das darauf lauffähige XTTS-v2-Modell ist separat unter der nicht-kommerziellen CPML lizenziert — beides nicht verwechseln.',
          'Kostenlos, keine Bezahlstufe; läuft auf der CPU, GPU wird für größere Voice-Cloning-Modelle empfohlen.',
          'Aktuelles Paket-Release: coqui-tts v0.27.5, veröffentlicht am 26. Januar 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Installieren Sie `coqui-tts` (den gepflegten Fork), nicht den ursprünglichen Paketnamen `TTS` aus dem inzwischen ungepflegten coqui-ai/TTS-Repository, wenn Sie eine Version wollen, die Updates erhält. Siehe Abschnitt „Installieren und ausführen" unten.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Von Mozilla TTS zum Community-Fork',
        content: [
          '**Coqui TTS geht auf [Mozillas TTS-Projekt](https://github.com/mozilla/TTS) zurück**, ein internes Mozilla-Forschungsprojekt zu Open-Source-Sprachtechnologie. Als Mozilla diese Forschungsgruppe 2021 auflöste, gründeten mehrere ihrer Ingenieure — darunter Eren Gölge, Kelly Davis, Josh Meyer und Reuben Morais — das Start-up Coqui AI, um die Arbeit als unabhängiges Unternehmen fortzusetzen, mit einem Text-zu-Sprache-Toolkit (Coqui TTS) und einem Sprache-zu-Text-Toolkit (Coqui STT).',
          '**Coqui AI sammelte im März 2023 eine Seed-Finanzierung von 3,3 Millionen US-Dollar ein** und bot sowohl ein Open-Source-Toolkit als auch kostenpflichtige Cloud-Dienste an, einschließlich gehostetem Zugang zu seinem Voice-Cloning-Modell XTTS. Das Unternehmen fand kein tragfähiges Geschäftsmodell auf Basis von Open-Source-Software und kündigte im Dezember 2023 die Einstellung seiner kostenpflichtigen Dienste an; die Server gingen am 11. Dezember 2023 offline.',
          '**Das ursprüngliche Repository, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), bleibt auf GitHub öffentlich verfügbar** unter seiner MPL-2.0-Lizenz, hat aber seit August 2024 keine neuen Commits mehr erhalten, und GitHub zeigt es nicht als formal archiviert an — in der Praxis erhält es keine aktive Weiterentwicklung oder Fehlerbehebungen.',
          '**Ein Community-Fork, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), führt die Entwicklung fort.** Er wird vom [Idiap Research Institute](https://www.idiap.ch/), einem Schweizer Forschungsinstitut, gepflegt und auf PyPI unter dem Paketnamen `coqui-tts` veröffentlicht (getrennt vom ursprünglichen Paketnamen `TTS`). Sein README bezeichnet ihn ausdrücklich als „Fork des ursprünglichen, ungepflegten Repositorys", und seine Release-Historie zeigt laufende Updates, darunter ein v0.27.0-Release mit einem Voice-Cloning-Cache und ein v0.27.5-Release am 26. Januar 2026.',
        ],
        faqs: [
          {
            q: 'Wer hat Coqui TTS entwickelt?',
            a: 'Coqui TTS wurde vom Start-up Coqui AI entwickelt, gegründet 2021 von ehemaligen Ingenieuren des Mozilla-TTS-Forschungsprojekts, darunter Eren Gölge, Kelly Davis, Josh Meyer und Reuben Morais. Nachdem Coqui AI im Dezember 2023 seine kostenpflichtigen Dienste einstellte, wurde die Entwicklung in einem Community-Fork fortgesetzt, der vom Idiap Research Institute gepflegt wird.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was Coqui TTS tatsächlich tut',
        content: [
          'Coqui TTS ist ein Toolkit, kein einzelnes Modell — es bietet eine einheitliche Python-Schnittstelle, CLI und Trainings-Pipeline zum Ausführen (und historisch auch Trainieren) mehrerer verschiedener Text-zu-Sprache-Modellarchitekturen.',
        ],
        items: [
          '**Multi-Modell-Schnittstelle.** Eine einzige `TTS()`-Python-Klasse lädt und führt verschiedene Modellarchitekturen aus, darunter VITS-basierte Single- und Multi-Speaker-Modelle, Tacotron2-basierte Modelle und das Voice-Cloning-Modell [XTTS v2](https://huggingface.co/coqui/XTTS-v2), ohne dass sich der umgebende Anwendungscode ändert.',
          '**Sprachsynthese über die Kommandozeile.** Der `tts`-CLI-Befehl synthetisiert Sprache direkt im Terminal; mit `tts --list_models` werden alle verfügbaren vortrainierten Modelle aufgelistet.',
          '**Voice-Cloning über XTTS v2.** Die Übergabe eines `speaker_wav`-Arguments an ein geladenes XTTS-v2-Modell klont eine Stimme aus einem kurzen Referenzaudioclip und erzeugt Sprache in dieser geklonten Stimme in den von XTTS v2 unterstützten Sprachen.',
          '**Breite Bibliothek vortrainierter Modelle.** Das Toolkit bietet Zugang zu vortrainierten Modellen, die über die zugrunde liegenden, massiv mehrsprachigen Fairseq-basierten Modelle über 1.100 Sprachen abdecken, neben höherwertigen kuratierten Modellen für bestimmte Sprachen.',
          '**Modelltraining und Fine-Tuning.** Über das Ausführen vortrainierter Modelle hinaus enthält das Toolkit Trainingsskripte und Dataset-Analyse-Werkzeuge zum Erstellen oder Feinabstimmen eines eigenen Stimmmodells — historisch eine der meistgenutzten Funktionen vor der Einstellung von Coqui AIs gehostetem Trainingsdienst.',
          '**Streaming-Inferenz für XTTS v2.** Das Toolkit dokumentiert latenzarme Streaming-Synthese mit XTTS v2 (laut Dokumentation des gepflegten Forks unter 200 ms Latenz bis zum ersten Audio), nützlich für interaktive Sprachanwendungen.',
        ],
        note: 'Coqui TTS ist die Software, die Modelle ausführt; XTTS v2 ist ein spezifisches Modell, das damit ausgeführt werden kann. Beide werden hier gemeinsam behandelt, weil die meisten Leser, die Coqui TTS 2026 bewerten, konkret daran interessiert sind, XTTS v2 damit auszuführen — siehe den dedizierten Abschnitt zum Verhältnis unten.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS und XTTS v2: Das Verhältnis',
        content: [
          '**Coqui TTS (das Toolkit) und XTTS v2 (das Modell) sind zwei verschiedene Dinge mit zwei verschiedenen Lizenzen, und deren Verwechslung ist ein häufiger Lizenzfehler.** Das Coqui-TTS-Toolkit — das Python-Paket, die CLI und der Trainingscode — steht unter MPL-2.0, einer freizügigen Lizenz, die kommerzielle Nutzung mit Offenlegungsbedingungen für Änderungen am Toolkit erlaubt. XTTS v2 ist ein spezifisches vortrainiertes Modell, dessen Gewichte unter der Coqui Public Model License (CPML) verteilt werden, einer nicht-kommerziellen Lizenz, getrennt von der MPL-2.0-Lizenz des Toolkits.',
          '**In der Praxis bedeutet das: Sie können das Coqui-TTS-Toolkit mit freizügig lizenzierten Modellen kommerziell nutzen** (VITS- oder Tacotron2-Modelle, die unter kompatiblen Lizenzen trainiert wurden), während die spezifische Kombination „Coqui-TTS-Toolkit führt XTTS v2 aus" die nicht-kommerzielle Einschränkung von XTTS v2 für die Gewichte und Ausgaben dieses Modells erbt. Ein anderes, freizügig lizenziertes Modell über dasselbe Toolkit auszuführen, trägt diese Einschränkung nicht.',
          '**Das `coqui-tts`-Paket dokumentiert die XTTS-v2-Nutzung direkt**, mit dem Modell geladen als `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`, da das Toolkit der primäre unterstützte Weg ist, XTTS v2 auszuführen, außer die Modellgewichte direkt über einen anderen Inferenz-Stack zu verwenden. Siehe PromptQuorums eigenen [XTTS-v2-Test](/power-local-llm/xtts-v2-review) für eine vollständige Aufschlüsselung der Lizenz und Fähigkeiten dieses Modells.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Coqui TTS installieren und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung installiert das aktiv gepflegte `coqui-tts`-Paket und führt eine erste Synthese aus, gemäß der im README des gepflegten Forks dokumentierten Syntax.',
        numberedItems: [
          {
            title: 'Das gepflegte Paket installieren.',
            whyItMatters: 'Führen Sie `pip install coqui-tts` aus (oder `uv pip install coqui-tts` bei Verwendung von uv) in einer Python-Umgebung. Installieren Sie speziell das Paket `coqui-tts` — nicht den älteren Paketnamen `TTS`, der auf das inzwischen ungepflegte ursprüngliche Repository verweist.',
          },
          {
            title: 'Verfügbare vortrainierte Modelle auflisten.',
            whyItMatters: 'Führen Sie `tts --list_models` aus, um den vollständigen Katalog verfügbarer vortrainierter Modelle zu sehen, sortiert nach Sprache und Architektur (VITS, Tacotron2, XTTS und andere).',
          },
          {
            title: 'Sprache über die Kommandozeile synthetisieren.',
            whyItMatters: 'Führen Sie `tts --text "Hello world" --out_path output.wav` aus, um mit dem Standardmodell zu synthetisieren, oder fügen Sie `--model_name <modell>` hinzu, um ein bestimmtes aus der Liste auszuwählen.',
          },
          {
            title: '(Optional) Die Python-API für XTTS-v2-Voice-Cloning verwenden.',
            whyItMatters: 'Laden Sie das Modell mit `TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`, rufen Sie dann `.tts_to_file()` auf mit einem `speaker_wav`-Argument, das auf einen kurzen Referenzaudioclip verweist, und einem `language`-Argument, um eine Stimme zu klonen.',
          },
          {
            title: '(Optional) GPU-Beschleunigung aktivieren.',
            whyItMatters: 'Übergeben Sie `gpu=True` an den `TTS()`-Konstruktor, oder rufen Sie `.to("cuda")` auf dem geladenen Modellobjekt auf, um die Inferenz auf einer NVIDIA-GPU auszuführen — empfohlen für XTTS v2, das auf reiner CPU deutlich langsamer ist.',
          },
          {
            title: '(Optional) Die CPML-Lizenz für XTTS v2 nicht-interaktiv akzeptieren.',
            whyItMatters: 'Das erstmalige Laden von XTTS v2 fragt interaktiv nach Akzeptanz der CPML. Setzen Sie die Umgebungsvariable `COQUI_TOS_AGREED=1`, um sie nicht-interaktiv zu akzeptieren — erforderlich für unbeaufsichtigten Betrieb in Docker-Containern oder CI-Pipelines.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Nutzungsbeispiele',
        content: [
          'Über die grundlegende Installationsanleitung oben hinaus sind dies gängige Nutzungsmuster aus der Dokumentation des gepflegten Forks.',
        ],
        codeBlock: `# Kommandozeile: verfügbare vortrainierte Modelle auflisten
tts --list_models

# Kommandozeile: mit dem Standardmodell synthetisieren
tts --text "Hello world" --out_path output.wav

# Kommandozeile: mit einem bestimmten Modell synthetisieren
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# Python-API: Grundlegende Synthese
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# Python-API: XTTS-v2-Voice-Cloning (zuerst CPML nicht-interaktiv akzeptieren)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# Python-API: Sprecher und Sprachen eines geladenen Modells auflisten
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'Die Umgebungsvariable `COQUI_TOS_AGREED=1` sowie die Argumente `speaker_wav`/`language` sind im README und den API-Dokumenten des gepflegten Forks dokumentiert. Prüfen Sie die aktuelle Dokumentation vor dem Einsatz, da sich die API des Toolkits über Hauptversionen hinweg geändert hat (das ursprüngliche `TTS`-Paket und der gepflegte `coqui-tts`-Fork teilen sich zum Zeitpunkt dieser Prüfung denselben Importpfad `TTS.api.TTS`).',
        items: [
          '**Nicht-interaktive CPML-Akzeptanz** für automatisierte Umgebungen: Setzen Sie `COQUI_TOS_AGREED=1` vor dem ersten Laden von XTTS v2, damit Docker-Builds und CI-Pipelines nicht an einer interaktiven Eingabeaufforderung hängen bleiben.',
          '**Sprecher- und Sprachabfrage**: Nach dem Laden eines Multi-Speaker- oder mehrsprachigen Modells listen `tts.speakers` und `tts.languages` auf, was das geladene Modell tatsächlich unterstützt — nützlich zur Eingabevalidierung vor der Synthese.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und Kosten',
        content: [
          '**Das Coqui-TTS-Toolkit steht unter MPL-2.0 (Mozilla Public License 2.0)**, bestätigt über die veröffentlichten Metadaten des `coqui-tts`-Pakets auf [PyPI](https://pypi.org/project/coqui-tts/) und die Lizenzdatei im [idiap/coqui-ai-TTS-Repository](https://github.com/idiap/coqui-ai-TTS). MPL-2.0 ist eine freizügige Lizenz mit Bedingungen: Sie können das Toolkit kommerziell nutzen, doch wenn Sie die eigenen Quelldateien des Toolkits ändern und weitergeben, müssen Sie diese spezifischen geänderten Dateien ebenfalls unter MPL-2.0 veröffentlichen. Die Nutzung des Toolkits als unveränderte Abhängigkeit stellt Ihren eigenen Anwendungscode nicht unter MPL-2.0.',
          '**Das XTTS-v2-Modell ist separat lizenziert, unter der Coqui Public Model License (CPML), die nicht-kommerziell ist** — dies gilt für die Modellgewichte und deren generierte Audio-Ausgaben, nicht für den Coqui-TTS-Toolkit-Code, der sie ausführt. Siehe PromptQuorums [XTTS-v2-Test](/power-local-llm/xtts-v2-review) für die vollständige Aufschlüsselung dieser Lizenz.',
          '**Es gibt keine Bezahlstufe, kein Abonnement und keine Lizenzgebühr für das Coqui-TTS-Toolkit selbst.** Coqui AIs kostenpflichtige gehostete Dienste wurden im Dezember 2023 eingestellt und sind zu keinem Preis verfügbar; die einzige Möglichkeit, Coqui TTS heute zu nutzen, ist selbst gehostet, entweder mit dem ungepflegten ursprünglichen Paket oder dem aktiv gepflegten `coqui-tts`-Fork.',
        ],
        faqs: [
          {
            q: 'Welche Lizenz verwendet Coqui TTS?',
            a: 'Das Coqui-TTS-Toolkit selbst steht unter MPL-2.0, die kommerzielle Nutzung unter der Bedingung erlaubt, dass Änderungen an den eigenen Quelldateien des Toolkits unter derselben Lizenz veröffentlicht werden. Dies ist getrennt von der Lizenz jedes spezifischen Modells, das damit ausgeführt wird — das XTTS-v2-Modell etwa steht unter der nicht-kommerziellen Coqui Public Model License (CPML), die für die Modellgewichte und -ausgaben gilt, nicht für den Toolkit-Code.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür Coqui TTS nicht geeignet ist',
        content: [
          'Coqui TTS ist ein flexibles Multi-Modell-Toolkit, nicht die schnellste oder einfachste Option für jeden Anwendungsfall. Es ist das falsche Werkzeug für die folgenden Situationen:',
        ],
        items: [
          '**Aufbau auf dem ursprünglichen, ungepflegten Repository.** Wenn Sie `pip install TTS` (den ursprünglichen Paketnamen) statt `pip install coqui-tts` (den gepflegten Fork) ausführen, bauen Sie auf Code auf, der seit August 2024 keine Updates erhalten hat — prüfen Sie, welches Paket ein Tutorial oder eine Abhängigkeit tatsächlich referenziert, bevor Sie sich darauf verlassen.',
          '**Schnellstmögliche reine CPU-Synthese.** Wenn Ihre Priorität Echtzeit-Sprache auf bescheidener Hardware wie einem Raspberry Pi ohne GPU ist, ist [Piper](/power-local-llm/piper-tts-review) speziell dafür gebaut und einfacher zu deployen; die größeren Modelle von Coqui TTS, insbesondere XTTS v2, sind auf reiner CPU merklich langsamer.',
          '**Kommerzielles Voice-Cloning ohne separate Lizenzprüfung.** Das Ausführen von XTTS v2 über das Coqui-TTS-Toolkit trägt weiterhin die eigene nicht-kommerzielle CPML-Einschränkung von XTTS v2 auf die Modellgewichte und -ausgaben — die MPL-2.0-Lizenz des Toolkits hebt das nicht auf. Siehe Abschnitt Lizenz und Kosten oben.',
          '**Garantierter langfristiger Unternehmenssupport.** Das Unternehmen Coqui AI existiert seit Dezember 2023 nicht mehr. Der aktuelle Fork wird von einem Forschungsinstitut auf Community-Basis gepflegt — ein anderes Pflegemodell als ein finanziertes Unternehmen mit Supportvertrag. Berücksichtigen Sie das bei Entscheidungen für kritische Produktionsinfrastruktur.',
          '**Eine einzige, stabile API über Versionen hinweg.** Da sich die Entwicklung zwischen einem ungepflegten Original und einem aktiv entwickelten Fork verlagert hat, verweisen manche Tutorials, Stack-Overflow-Antworten und Blogbeiträge online auf eine ältere API-Oberfläche oder den ursprünglichen Paketnamen — prüfen Sie gegen die aktuelle `coqui-tts`-Dokumentation statt gegen ein älteres Suchergebnis.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu Coqui TTS',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[Piper](/power-local-llm/piper-tts-review)',
            'Am besten für': 'Schnellste reine CPU-Synthese, kein Voice-Cloning, Echtzeit auf einem Raspberry Pi',
            'Lizenz': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Am besten für': 'Das Voice-Cloning-Modell selbst, wenn Sie nur XTTS v2 und nicht das breitere Toolkit benötigen',
            'Lizenz': 'CPML (nicht-kommerziell)',
          },
          {
            'Tool': '[Bark](/power-local-llm/bark-tts-review)',
            'Am besten für': 'Ausdrucksstarkes, nicht-sprachliches Audio — Lachen, Seufzer, Umgebungsgeräusche',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Am besten für': 'Höchste natürlich klingende englische Narrationsqualität (kein Voice-Cloning)',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[ElevenLabs](https://elevenlabs.io)',
            'Am besten für': 'Verwaltete Cloud-API für Teams, die kein Self-Hosting bevorzugen, mit kommerziellem Voice-Cloning',
            'Lizenz': 'Proprietär (kostenpflichtige Cloud-API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Coqui TTS?',
            a: 'Coqui TTS ist ein Open-Source-Toolkit für lokale Sprachsynthese und Voice-Cloning, das von Mozillas TTS-Forschungsprojekt abstammt und ursprünglich vom Start-up Coqui AI entwickelt wurde. Es unterstützt mehrere Modellarchitekturen, darunter das Voice-Cloning-Modell XTTS v2, über eine einzige Python-Schnittstelle und CLI.',
          },
          {
            q: 'Wird Coqui TTS noch gepflegt?',
            a: 'Das ursprüngliche coqui-ai/TTS-Repository wird nicht mehr aktiv gepflegt — es hat seit August 2024 keine neuen Commits mehr erhalten, nachdem das Unternehmen Coqui AI im Dezember 2023 seine kostenpflichtigen Dienste einstellte. Ein aktiv gepflegter Community-Fork, idiap/coqui-ai-TTS, führt die Entwicklung unter dem Idiap Research Institute fort und wird als coqui-tts-Paket auf PyPI veröffentlicht, mit Releases bis Januar 2026.',
          },
          {
            q: 'Ist Coqui TTS kostenlos?',
            a: 'Ja, das Toolkit selbst hat keine Bezahlstufe oder Lizenzgebühr. Coqui AIs frühere kostenpflichtige gehostete Dienste wurden im Dezember 2023 eingestellt und sind zu keinem Preis verfügbar. Manche spezifischen Modelle, die auf dem Toolkit laufen, wie XTTS v2, haben ihre eigene separate Lizenz (CPML), die die kommerzielle Nutzung der Gewichte und Ausgaben dieses Modells einschränkt.',
          },
          {
            q: 'Was ist der Unterschied zwischen den Paketen coqui-tts und TTS?',
            a: 'TTS ist der ursprüngliche PyPI-Paketname, gebunden an das ungepflegte coqui-ai/TTS-Repository ohne Updates seit August 2024. coqui-tts ist der Paketname des aktiv gepflegten Forks, veröffentlicht aus dem idiap/coqui-ai-TTS-Repository unter dem Idiap Research Institute, mit regelmäßigen Releases bis v0.27.5 im Januar 2026. Installieren Sie coqui-tts für eine Version, die Updates erhält.',
          },
          {
            q: 'Unterstützt Coqui TTS Voice-Cloning?',
            a: 'Ja, über das XTTS-v2-Modell, das das Toolkit laden und ausführen kann. XTTS v2 klont eine Stimme aus einem kurzen Referenzaudioclip, der als speaker_wav-Argument übergeben wird. Beachten Sie, dass die eigene Lizenz von XTTS v2, die Coqui Public Model License (CPML), nicht-kommerziell ist, getrennt von der MPL-2.0-Lizenz des Toolkits.',
          },
          {
            q: 'Warum hat Coqui AI geschlossen?',
            a: 'Coqui AI, das Unternehmen hinter Coqui TTS, kündigte im Dezember 2023 die Einstellung seiner kostenpflichtigen gehosteten Dienste an; die Server gingen am 11. Dezember 2023 offline, nachdem das Unternehmen kein tragfähiges Geschäftsmodell auf Basis von Open-Source-Sprachtechnologie gefunden hatte. Das Open-Source-Toolkit selbst blieb verfügbar, und die Entwicklung wurde später in einem Community-Fork fortgesetzt.',
          },
          {
            q: 'Was ist das aktuellste Coqui-TTS-Release?',
            a: 'Das aktuellste Release des aktiv gepflegten coqui-tts-Pakets ist v0.27.5, veröffentlicht am 26. Januar 2026, laut PyPI-Eintrag.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Coqui TTS ist eine wirklich nützliche Fallstudie darüber, was mit Open-Source-Infrastruktur passiert, nachdem das dahinterstehende Unternehmen schließt: Das ursprüngliche Repository verstummte im August 2024, doch die Software verschwand nicht — ein Forschungsinstitut übernahm die Pflege, benannte das Paket um und veröffentlichte weiterhin Releases bis 2026. Für alle, die es heute bewerten, ist die praktische Erkenntnis einfach: Installieren Sie `coqui-tts`, nicht das ursprüngliche `TTS`-Paket, und verstehen Sie, dass die MPL-2.0-Lizenz des Toolkits getrennt von der nicht-kommerziellen CPML-Lizenz des darauf lauffähigen XTTS-v2-Modells ist. Als Toolkit liegt seine Stärke in der Flexibilität über Modellarchitekturen hinweg, nicht darin, für jeden Einzelfall die schnellste oder einfachste Option zu sein — dafür kombinieren Sie diesen Test mit PromptQuorums Abdeckung von [Piper](/power-local-llm/piper-tts-review) für Geschwindigkeit, [XTTS v2](/power-local-llm/xtts-v2-review) speziell für das Cloning-Modell, oder dem [Leitfaden zu lokalen TTS-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) für das Gesamtbild über alle Engines hinweg.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[idiap/coqui-ai-TTS auf GitHub](https://github.com/idiap/coqui-ai-TTS) — der aktiv gepflegte Fork: README, Dokumentation, Lizenz und Release-Historie.',
          '[coqui-tts auf PyPI](https://pypi.org/project/coqui-tts/) — veröffentlichte Paket-Metadaten, einschließlich aktueller MPL-2.0-Lizenz und Versionshistorie.',
          '[coqui-ai/TTS auf GitHub](https://github.com/coqui-ai/TTS) — das ursprüngliche, inzwischen ungepflegte Repository (MPL-2.0-Lizenz).',
          '[XTTS v2 auf Hugging Face](https://huggingface.co/coqui/XTTS-v2) — die Model-Card und der CPML-Lizenztext des Voice-Cloning-Modells.',
          '[Idiap Research Institute](https://www.idiap.ch/) — das Schweizer Forschungsinstitut, das den Community-Fork pflegt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale TTS- und Voice-Cloning-Lizenzen: Piper, XTTS v2, F5-TTS und Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — der Lizenz-Deep-Dive über alle wichtigen lokalen TTS-Engines.',
          '[XTTS-v2-Test](/power-local-llm/xtts-v2-review) — eine vollständige Aufschlüsselung des Voice-Cloning-Modells, das dieses Toolkit ausführen kann.',
          '[Piper-TTS-Test](/power-local-llm/piper-tts-review) — die schnelle, reine CPU-lokale-TTS-Alternative, in derselben Tiefe getestet.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — der Cloud-vs-lokal-Vergleich für Leser, die zwischen Self-Hosting entscheiden.',
          '[Bark-TTS-Test](/power-local-llm/bark-tts-review) — das ausdrucksstarke, nicht-sprachliche lokale TTS-Modell, in derselben Tiefe getestet.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS im Test (2026): Das von der Community gepflegte Voice-Cloning-Toolkit',
      description:
        'Coqui TTS im Test: das Open-Source-Toolkit für lokales Voice-Cloning, das von Mozilla TTS abstammt. Coqui AI schloss 2023; der aktiv gepflegte Fork ist idiap/coqui-ai-TTS. Geschichte, Installation, Verhältnis zu XTTS v2, MPL-2.0-Lizenz und ehrliche Grenzen.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'de',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, selbst gehostete Text-zu-Sprache-Toolkits evaluieren' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Idiap Research Institute' },
        { '@type': 'Thing', name: 'Text-zu-Sprache' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS im Test (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-fr.webp',
    title: 'Coqui TTS : avis (2026) — le kit de clonage vocal maintenu par la communauté',
    seoTitle: 'Coqui TTS : avis 2026 — kit TTS communautaire',
    intro:
      'Coqui TTS est un kit open source de synthèse vocale et de clonage de voix en local, descendant du projet TTS de Mozilla, créé à l\'origine par la start-up Coqui AI, qui a fermé ses services payants en décembre 2023. Le dépôt d\'origine, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), n\'a reçu aucun nouveau commit depuis août 2024 et n\'est plus activement maintenu, bien qu\'il reste disponible sous sa licence MPL-2.0. Le développement se poursuit sur un fork communautaire, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), maintenu par l\'[Institut de recherche Idiap](https://www.idiap.ch/) et publié sur PyPI sous le nom de package `coqui-tts`. Cet avis couvre cette histoire, la relation du kit avec le modèle de clonage vocal [XTTS v2](https://huggingface.co/coqui/XTTS-v2), des commandes d\'installation et d\'utilisation réelles, sa licence MPL-2.0, et les points où cette transition de maintenance compte vraiment en 2026.',
    metaDescription:
      'Coqui TTS, avis : le kit open source de clonage vocal local descendant de Mozilla TTS. Coqui AI a fermé en 2023 ; le fork activement maintenu est idiap/coqui-ai-TTS. Histoire, installation, lien avec XTTS v2, licence MPL-2.0 et limites honnêtes.',
    twitterDescription:
      'Coqui TTS, avis 2026 : le kit de clonage vocal local que Coqui AI a bâti avant de fermer en 2023 — maintenu aujourd\'hui par un fork communautaire à l\'Institut Idiap. Commandes réelles, lien avec XTTS v2, et ce qui a changé après la fermeture.',
    audience:
      'Développeurs et chercheurs qui veulent un kit de synthèse vocale flexible et auto-hébergé avec clonage de voix, et qui doivent comprendre son statut de maintenance après la fermeture de l\'entreprise avant de construire dessus.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS avis',
    targetKeywords: [
      'coqui tts avis',
      'coqui tts',
      'coqui tts installation',
      'coqui tts python',
      'coqui tts licence',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'coqui tts est-il maintenu',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS est un kit open source de synthèse vocale et de clonage de voix en local, créé à l\'origine par la start-up Coqui AI, qui a fermé ses services payants en décembre 2023.** Le dépôt d\'origine, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), n\'a pas été mis à jour depuis août 2024. Installez plutôt le fork communautaire activement maintenu : `pip install coqui-tts`, qui provient de [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), maintenu par l\'[Institut de recherche Idiap](https://www.idiap.ch/). Le kit est sous licence MPL-2.0 et c\'est le logiciel qui fait tourner le modèle de clonage vocal [XTTS v2](https://huggingface.co/coqui/XTTS-v2) — le kit et le modèle sont deux choses distinctes avec des licences distinctes (voir la section [Licence et coût](#license-cost)). Pour une comparaison complète des licences entre moteurs TTS locaux, voir le [guide des licences TTS locales](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que Coqui TTS et est-il encore maintenu ?',
        answer:
          'Coqui TTS vaut le détour si vous voulez un kit de synthèse vocale local flexible qui prend en charge plusieurs architectures de modèles (VITS, Tacotron2 et le modèle de clonage vocal XTTS v2) avec une large couverture linguistique. Il descend du projet de recherche TTS de Mozilla et a été développé par la start-up Coqui AI. L\'entreprise a fermé ses services payants en décembre 2023, et son dépôt d\'origine, coqui-ai/TTS, n\'a reçu aucun nouveau commit depuis août 2024 — il n\'est plus activement maintenu, mais reste téléchargeable sous sa licence MPL-2.0. Oui, une version maintenue existe : le développement se poursuit sur un fork communautaire, idiap/coqui-ai-TTS, maintenu par l\'Institut de recherche Idiap et publié sur PyPI sous le nom coqui-tts, avec des versions aussi récentes que janvier 2026. Choisissez plutôt Piper si vous voulez la synthèse CPU seule la plus rapide sans intérêt pour le clonage vocal ; choisissez Coqui TTS spécifiquement si vous voulez exécuter XTTS v2 ou d\'autres modèles capables de clonage via un seul kit activement mis à jour.',
        bullets: [
          'Descend du projet de recherche TTS de Mozilla ; développé par la start-up Coqui AI, fondée en 2021 par d\'anciens ingénieurs de Mozilla TTS.',
          'Coqui AI a fermé ses services payants en décembre 2023 ; le dépôt d\'origine coqui-ai/TTS n\'a reçu aucun nouveau commit depuis août 2024.',
          'Fork communautaire activement maintenu : idiap/coqui-ai-TTS, maintenu par l\'Institut de recherche Idiap, publié sur PyPI sous le nom coqui-tts.',
          'Licence : MPL-2.0 pour le kit lui-même. Le modèle XTTS v2 qui tourne dessus a une licence distincte et non commerciale (CPML) — le kit et le modèle n\'ont pas la même licence.',
          'Gratuit, aucune offre payante ; fonctionne sur CPU, l\'accélération GPU étant recommandée pour les modèles plus lourds comme XTTS v2.',
          'Dernière version du package : coqui-tts v0.27.5, publiée le 26 janvier 2026, selon PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : de Mozilla TTS à un fork communautaire', anchor: 'history' },
      { label: 'Ce que fait réellement Coqui TTS', anchor: 'what-it-does' },
      { label: 'Coqui TTS et XTTS v2 : le rapport entre les deux', anchor: 'xtts-relationship' },
      { label: 'Installer et exécuter Coqui TTS : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et coût', anchor: 'license-cost' },
      { label: 'Pour quoi Coqui TTS n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à Coqui TTS', anchor: 'alternatives' },
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
            text: 'Coqui TTS est un kit open source de synthèse vocale et de clonage de voix en local, descendant du projet TTS de Mozilla, dont l\'entreprise d\'origine, Coqui AI, a fermé ses services payants en décembre 2023, laissant le dépôt d\'origine sans maintenance depuis août 2024 — mais un fork communautaire activement maintenu, idiap/coqui-ai-TTS, poursuit le développement sous l\'Institut de recherche Idiap.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un programme que vous installez via `pip install` et qui peut transformer du texte en parole grâce à plusieurs modèles d\'IA différents, dont un modèle de clonage vocal appelé XTTS v2 — l\'entreprise qui l\'a créé a fermé, mais un institut de recherche maintient aujourd\'hui le logiciel à jour.',
          },
        ],
        items: [
          'Descend du projet de recherche TTS de Mozilla ; développé par la start-up Coqui AI, fondée en 2021 par d\'anciens ingénieurs de Mozilla TTS.',
          'Coqui AI a fermé ses services cloud payants en décembre 2023 ; le dépôt GitHub d\'origine coqui-ai/TTS n\'a reçu aucun nouveau commit depuis août 2024.',
          'Fork activement maintenu : idiap/coqui-ai-TTS, par l\'Institut de recherche Idiap, publié sur PyPI sous le nom `coqui-tts`.',
          'Licence : MPL-2.0 pour le kit. Le modèle XTTS v2 qu\'il peut exécuter est sous une licence distincte, la CPML non commerciale — ne pas confondre les deux.',
          'Gratuit, aucune offre payante ; fonctionne sur CPU, avec GPU recommandé pour les modèles de clonage vocal plus lourds.',
          'Dernière version du package : coqui-tts v0.27.5, publiée le 26 janvier 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Installez `coqui-tts` (le fork maintenu), pas l\'ancien nom de package `TTS` du dépôt coqui-ai/TTS désormais sans maintenance, si vous voulez une version qui reçoit des mises à jour. Voir la section Installer et exécuter ci-dessous.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : de Mozilla TTS à un fork communautaire',
        content: [
          '**Coqui TTS remonte au [projet TTS de Mozilla](https://github.com/mozilla/TTS)**, un effort de recherche interne de Mozilla sur la technologie vocale open source. Quand Mozilla a dissous ce groupe de recherche en 2021, plusieurs de ses ingénieurs — dont Eren Gölge, Kelly Davis, Josh Meyer et Reuben Morais — ont fondé la start-up Coqui AI pour poursuivre le travail en tant qu\'entreprise indépendante, publiant à la fois un kit de synthèse vocale (Coqui TTS) et un kit de reconnaissance vocale (Coqui STT).',
          '**Coqui AI a levé 3,3 millions de dollars en amorçage en mars 2023** et proposait à la fois un kit open source et des services cloud payants, incluant un accès hébergé à son modèle de clonage vocal, XTTS. L\'entreprise n\'a pas trouvé de modèle économique viable au-dessus d\'un logiciel open source, et a annoncé la fermeture de ses services payants en décembre 2023, ses serveurs passant hors ligne le 11 décembre 2023.',
          '**Le dépôt d\'origine, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), reste publiquement disponible sur GitHub** sous sa licence MPL-2.0, mais n\'a reçu aucun nouveau commit depuis août 2024, et GitHub ne l\'affiche pas comme formellement archivé — en pratique, il ne reçoit aucun développement actif ni correction de bug.',
          '**Un fork communautaire, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), poursuit le développement.** Il est maintenu par l\'[Institut de recherche Idiap](https://www.idiap.ch/), un institut de recherche suisse, et publié sur PyPI sous le nom de package `coqui-tts` (distinct du nom de package d\'origine `TTS`). Son README indique explicitement qu\'il s\'agit d\'un « fork du dépôt d\'origine, non maintenu », et son historique de versions montre des mises à jour continues, dont une version v0.27.0 ajoutant un cache de clonage vocal et une version v0.27.5 le 26 janvier 2026.',
        ],
        faqs: [
          {
            q: 'Qui a créé Coqui TTS ?',
            a: 'Coqui TTS a été créé par la start-up Coqui AI, fondée en 2021 par d\'anciens ingénieurs du projet de recherche TTS de Mozilla, dont Eren Gölge, Kelly Davis, Josh Meyer et Reuben Morais. Après la fermeture des services payants de Coqui AI en décembre 2023, le développement s\'est poursuivi sur un fork communautaire maintenu par l\'Institut de recherche Idiap.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que fait réellement Coqui TTS',
        content: [
          'Coqui TTS est un kit, pas un modèle unique — il fournit une interface Python unifiée, une CLI et un pipeline d\'entraînement pour exécuter (et, historiquement, entraîner) plusieurs architectures de modèles de synthèse vocale différentes.',
        ],
        items: [
          '**Interface multi-modèles.** Une seule classe Python `TTS()` charge et exécute différentes architectures de modèles, dont des modèles VITS mono- et multi-locuteurs, des modèles basés sur Tacotron2 et le modèle de clonage vocal [XTTS v2](https://huggingface.co/coqui/XTTS-v2), sans changer le code applicatif environnant.',
          '**Synthèse en ligne de commande.** La commande CLI `tts` synthétise la parole directement depuis le terminal, listant tous les modèles préentraînés disponibles avec `tts --list_models`.',
          '**Clonage vocal via XTTS v2.** Passer un argument `speaker_wav` à un modèle XTTS v2 chargé clone une voix à partir d\'un court extrait audio de référence, générant la parole dans cette voix clonée dans les langues prises en charge par XTTS v2.',
          '**Large bibliothèque de modèles préentraînés.** Le kit donne accès à des modèles préentraînés couvrant, selon sa documentation, plus de 1 100 langues via les modèles massivement multilingues basés sur Fairseq, en plus de modèles curatés de meilleure qualité pour des langues spécifiques.',
          '**Entraînement et fine-tuning de modèles.** Au-delà de l\'exécution de modèles préentraînés, le kit inclut des scripts d\'entraînement et des outils d\'analyse de jeux de données pour construire ou affiner un modèle vocal personnalisé — historiquement l\'une de ses fonctions les plus utilisées avant la fermeture du service d\'entraînement hébergé de Coqui AI.',
          '**Inférence en streaming pour XTTS v2.** Le kit documente une synthèse en streaming à faible latence avec XTTS v2 (citée par la documentation du fork maintenu comme une latence inférieure à 200 ms jusqu\'au premier audio), utile pour les applications vocales interactives.',
        ],
        note: 'Coqui TTS est le logiciel qui exécute des modèles ; XTTS v2 est un modèle spécifique qu\'il peut exécuter. Les deux sont traités ensemble ici car la plupart des lecteurs évaluant Coqui TTS en 2026 sont spécifiquement intéressés par l\'exécution de XTTS v2 via ce kit — voir la section dédiée à leur relation ci-dessous.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS et XTTS v2 : le rapport entre les deux',
        content: [
          '**Coqui TTS (le kit) et XTTS v2 (le modèle) sont deux choses distinctes avec deux licences distinctes, et les confondre est une erreur de licence courante.** Le kit Coqui TTS — le package Python, la CLI et le code d\'entraînement — est sous licence MPL-2.0, une licence permissive qui autorise l\'usage commercial avec des conditions de divulgation de code sur les modifications du kit. XTTS v2 est un modèle préentraîné spécifique dont les poids sont distribués sous la Coqui Public Model License (CPML), une licence non commerciale, distincte de la licence MPL-2.0 du kit.',
          '**En pratique, cela signifie que vous pouvez utiliser le kit Coqui TTS commercialement avec des modèles sous licence permissive** (modèles VITS ou Tacotron2 entraînés sous des licences compatibles), tandis que la combinaison spécifique « kit Coqui TTS exécutant le modèle XTTS v2 » hérite de la restriction non commerciale de XTTS v2 pour les poids et sorties de ce modèle. Exécuter un modèle différent, sous licence permissive, via le même kit ne porte pas cette restriction.',
          '**Le package `coqui-tts` documente directement l\'utilisation de XTTS v2**, le modèle étant chargé comme `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`, car le kit est le principal moyen pris en charge pour exécuter XTTS v2 en dehors d\'une utilisation directe des poids du modèle via une autre pile d\'inférence. Voir l\'[avis dédié à XTTS v2](/power-local-llm/xtts-v2-review) de PromptQuorum pour une analyse complète de la licence et des capacités de ce modèle.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Installer et exécuter Coqui TTS : étape par étape',
        content: 'Ce guide installe le package `coqui-tts` activement maintenu et exécute une première synthèse, selon la syntaxe documentée dans le README du fork maintenu.',
        numberedItems: [
          {
            title: 'Installer le package maintenu.',
            whyItMatters: 'Exécutez `pip install coqui-tts` (ou `uv pip install coqui-tts` avec uv) dans un environnement Python. Installez spécifiquement le package `coqui-tts` — pas l\'ancien nom de package `TTS`, qui pointe vers le dépôt d\'origine désormais sans maintenance.',
          },
          {
            title: 'Lister les modèles préentraînés disponibles.',
            whyItMatters: 'Exécutez `tts --list_models` pour voir le catalogue complet des modèles préentraînés disponibles au téléchargement, organisés par langue et architecture (VITS, Tacotron2, XTTS et autres).',
          },
          {
            title: 'Synthétiser la parole en ligne de commande.',
            whyItMatters: 'Exécutez `tts --text "Hello world" --out_path output.wav` pour synthétiser avec le modèle par défaut, ou ajoutez `--model_name <modèle>` pour en choisir un spécifique dans la liste.',
          },
          {
            title: '(Optionnel) Utiliser l\'API Python pour le clonage vocal XTTS v2.',
            whyItMatters: 'Chargez le modèle avec `TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`, puis appelez `.tts_to_file()` avec un argument `speaker_wav` pointant vers un court extrait audio de référence et un argument `language` pour cloner une voix.',
          },
          {
            title: '(Optionnel) Activer l\'accélération GPU.',
            whyItMatters: 'Passez `gpu=True` au constructeur `TTS()`, ou appelez `.to("cuda")` sur l\'objet modèle chargé, pour exécuter l\'inférence sur un GPU NVIDIA — recommandé pour XTTS v2, nettement plus lent sur CPU seul.',
          },
          {
            title: '(Optionnel) Accepter la licence CPML de manière non interactive pour XTTS v2.',
            whyItMatters: 'Le premier chargement de XTTS v2 déclenche une étape interactive d\'acceptation de la CPML. Définissez la variable d\'environnement `COQUI_TOS_AGREED=1` pour l\'accepter de manière non interactive, requis pour un usage sans surveillance dans des conteneurs Docker ou des pipelines CI.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Au-delà du guide d\'installation de base ci-dessus, voici des schémas d\'utilisation courants issus de la documentation du fork maintenu.',
        ],
        codeBlock: `# Ligne de commande : lister les modèles préentraînés disponibles
tts --list_models

# Ligne de commande : synthétiser avec le modèle par défaut
tts --text "Hello world" --out_path output.wav

# Ligne de commande : synthétiser avec un modèle spécifique
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# API Python : synthèse de base
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# API Python : clonage vocal XTTS v2 (accepter la CPML de manière non interactive d'abord)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# API Python : lister les locuteurs et langues disponibles sur un modèle chargé
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'La variable d\'environnement `COQUI_TOS_AGREED=1` et les arguments `speaker_wav`/`language` sont documentés dans le README et la documentation API du fork maintenu. Vérifiez la documentation actuelle avant tout déploiement, car l\'API du kit a changé au fil des versions majeures (le package `TTS` d\'origine et le fork `coqui-tts` maintenu partagent le même chemin d\'import `TTS.api.TTS` au moment de la vérification pour cet avis).',
        items: [
          '**Acceptation non interactive de la CPML** pour les environnements automatisés : définissez `COQUI_TOS_AGREED=1` avant le premier chargement de XTTS v2, pour que les builds Docker et les pipelines CI ne restent pas bloqués sur une invite interactive.',
          '**Introspection des locuteurs et langues** : après le chargement d\'un modèle multi-locuteurs ou multilingue, `tts.speakers` et `tts.languages` listent ce que le modèle chargé prend réellement en charge — utile pour valider les entrées avant la synthèse.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et coût',
        content: [
          '**Le kit Coqui TTS est sous licence MPL-2.0 (Mozilla Public License 2.0)**, confirmée via les métadonnées publiées du package `coqui-tts` sur [PyPI](https://pypi.org/project/coqui-tts/) et le fichier de licence du [dépôt idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS). La MPL-2.0 est une licence permissive avec conditions : vous pouvez utiliser le kit commercialement, mais si vous modifiez et distribuez les fichiers source propres du kit, vous devez publier ces fichiers modifiés spécifiques sous MPL-2.0 également. Utiliser le kit comme dépendance non modifiée ne place pas votre propre code applicatif sous MPL-2.0.',
          '**Le modèle XTTS v2 est sous licence distincte, la Coqui Public Model License (CPML), non commerciale** — cela s\'applique aux poids du modèle et à leurs sorties audio générées, pas au code du kit Coqui TTS qui les exécute. Voir l\'[avis XTTS v2](/power-local-llm/xtts-v2-review) de PromptQuorum pour l\'analyse complète de cette licence.',
          '**Il n\'y a aucune offre payante, abonnement ou redevance de licence pour le kit Coqui TTS lui-même.** Les services hébergés payants de Coqui AI ont fermé en décembre 2023 et ne sont disponibles à aucun prix ; la seule façon d\'utiliser Coqui TTS aujourd\'hui est en auto-hébergement, avec soit le package d\'origine non maintenu, soit le fork `coqui-tts` activement maintenu.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise Coqui TTS ?',
            a: 'Le kit Coqui TTS lui-même est sous licence MPL-2.0, qui autorise l\'usage commercial à condition que les modifications aux fichiers source propres du kit soient publiées sous la même licence. Ceci est distinct de la licence de tout modèle spécifique qu\'il exécute — le modèle XTTS v2, par exemple, est sous la Coqui Public Model License (CPML) non commerciale, qui s\'applique aux poids et sorties du modèle, pas au code du kit.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi Coqui TTS n\'est pas adapté',
        content: [
          'Coqui TTS est un kit flexible multi-modèles, pas l\'option la plus rapide ou la plus simple pour chaque cas d\'usage. C\'est le mauvais outil pour les situations suivantes :',
        ],
        items: [
          '**Construire sur le dépôt d\'origine non maintenu.** Si vous exécutez `pip install TTS` (l\'ancien nom de package) plutôt que `pip install coqui-tts` (le fork maintenu), vous construisez sur du code qui n\'a reçu aucune mise à jour depuis août 2024 — vérifiez quel package un tutoriel ou une dépendance référence réellement avant de vous y fier.',
          '**Synthèse CPU seule la plus rapide possible.** Si votre priorité est la parole en temps réel sur du matériel modeste comme un Raspberry Pi sans GPU, [Piper](/power-local-llm/piper-tts-review) est conçu spécifiquement pour cela et plus simple à déployer ; les modèles plus lourds de Coqui TTS, en particulier XTTS v2, sont nettement plus lents sur CPU seul.',
          '**Clonage vocal commercial sans vérification de licence séparée.** Exécuter XTTS v2 via le kit Coqui TTS porte toujours la restriction non commerciale propre à XTTS v2 (CPML) sur les poids et sorties du modèle — la licence MPL-2.0 du kit ne l\'annule pas. Voir la section Licence et coût ci-dessus.',
          '**Support d\'entreprise garanti à long terme.** L\'entreprise Coqui AI n\'existe plus depuis décembre 2023. Le fork actuel est maintenu par un institut de recherche sur une base communautaire, un modèle de maintenance différent d\'une entreprise financée avec un contrat de support — à prendre en compte pour des décisions d\'infrastructure de production critique.',
          '**Une API unique et stable à travers les versions.** Comme le développement s\'est déplacé entre un original non maintenu et un fork activement développé, certains tutoriels, réponses Stack Overflow et articles de blog en ligne référencent une surface d\'API plus ancienne ou l\'ancien nom de package — vérifiez par rapport à la documentation actuelle de `coqui-tts` plutôt qu\'à un ancien résultat de recherche.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à Coqui TTS',
        itemHeadings: true,
        columns: ['Outil', 'Meilleur usage', 'Licence'],
        rows: [
          {
            'Outil': '[Piper](/power-local-llm/piper-tts-review)',
            'Meilleur usage': 'Synthèse CPU seule la plus rapide, pas de clonage vocal, temps réel sur un Raspberry Pi',
            'Licence': 'GPL-3.0-or-later',
          },
          {
            'Outil': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Meilleur usage': 'Le modèle de clonage vocal lui-même, si vous avez besoin uniquement de XTTS v2 et non du kit plus large',
            'Licence': 'CPML (non commerciale)',
          },
          {
            'Outil': '[Bark](/power-local-llm/bark-tts-review)',
            'Meilleur usage': 'Audio non vocal expressif — rires, soupirs, sons ambiants',
            'Licence': 'MIT',
          },
          {
            'Outil': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Meilleur usage': 'Meilleure qualité de narration anglaise naturelle (sans clonage vocal)',
            'Licence': 'MIT',
          },
          {
            'Outil': '[ElevenLabs](https://elevenlabs.io)',
            'Meilleur usage': 'API cloud gérée pour les équipes préférant ne pas s\'auto-héberger, avec clonage vocal commercial',
            'Licence': 'Propriétaire (API cloud payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que Coqui TTS ?',
            a: 'Coqui TTS est un kit open source de synthèse vocale et de clonage de voix en local, descendant du projet de recherche TTS de Mozilla, créé à l\'origine par la start-up Coqui AI. Il prend en charge plusieurs architectures de modèles, dont le modèle de clonage vocal XTTS v2, via une interface Python et une CLI uniques.',
          },
          {
            q: 'Coqui TTS est-il encore maintenu ?',
            a: 'Le dépôt d\'origine coqui-ai/TTS n\'est plus activement maintenu — il n\'a reçu aucun nouveau commit depuis août 2024, après que l\'entreprise Coqui AI a fermé ses services payants en décembre 2023. Un fork communautaire activement maintenu, idiap/coqui-ai-TTS, poursuit le développement sous l\'Institut de recherche Idiap et est publié sur PyPI sous le nom coqui-tts, avec des versions aussi récentes que janvier 2026.',
          },
          {
            q: 'Coqui TTS est-il gratuit ?',
            a: 'Oui, le kit lui-même n\'a aucune offre payante ni redevance de licence. Les anciens services hébergés payants de Coqui AI ont fermé en décembre 2023 et ne sont disponibles à aucun prix. Certains modèles spécifiques exécutés sur le kit, comme XTTS v2, ont leur propre licence distincte (CPML) qui restreint l\'usage commercial des poids et sorties de ce modèle.',
          },
          {
            q: 'Quelle est la différence entre les packages coqui-tts et TTS ?',
            a: 'TTS est le nom de package PyPI d\'origine, lié au dépôt coqui-ai/TTS non maintenu sans mise à jour depuis août 2024. coqui-tts est le nom de package du fork activement maintenu, publié depuis le dépôt idiap/coqui-ai-TTS sous l\'Institut de recherche Idiap, avec des versions régulières incluant v0.27.5 en janvier 2026. Installez coqui-tts pour une version qui reçoit des mises à jour.',
          },
          {
            q: 'Coqui TTS prend-il en charge le clonage vocal ?',
            a: 'Oui, via le modèle XTTS v2, que le kit peut charger et exécuter. XTTS v2 clone une voix à partir d\'un court extrait audio de référence passé comme argument speaker_wav. Notez que la propre licence de XTTS v2, la Coqui Public Model License (CPML), est non commerciale, distincte de la licence MPL-2.0 du kit.',
          },
          {
            q: 'Pourquoi Coqui AI a-t-il fermé ?',
            a: 'Coqui AI, l\'entreprise derrière Coqui TTS, a annoncé la fermeture de ses services hébergés payants en décembre 2023, ses serveurs passant hors ligne le 11 décembre 2023, après avoir peiné à construire un modèle économique viable au-dessus d\'une technologie vocale open source. Le kit open source lui-même est resté disponible, et le développement s\'est ensuite poursuivi sur un fork communautaire.',
          },
          {
            q: 'Quelle est la dernière version de Coqui TTS ?',
            a: 'La dernière version du package coqui-tts activement maintenu est v0.27.5, publiée le 26 janvier 2026, selon son entrée PyPI.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Coqui TTS est une étude de cas réellement utile sur ce qui arrive à une infrastructure open source après la fermeture de l\'entreprise qui la porte : le dépôt d\'origine s\'est tu en août 2024, mais le logiciel n\'a pas disparu — un institut de recherche a repris la maintenance, renommé le package et continué à publier des versions jusqu\'en 2026. Pour quiconque l\'évalue aujourd\'hui, la conclusion pratique est simple : installez `coqui-tts`, pas l\'ancien package `TTS`, et comprenez que la licence MPL-2.0 du kit est distincte de la licence non commerciale CPML du modèle XTTS v2 qu\'il peut exécuter. En tant que kit, sa force réside dans la flexibilité entre architectures de modèles plutôt que dans le fait d\'être l\'option la plus rapide ou la plus simple pour un cas d\'usage donné — pour cela, combinez cet avis avec la couverture par PromptQuorum de [Piper](/power-local-llm/piper-tts-review) pour la vitesse, [XTTS v2](/power-local-llm/xtts-v2-review) pour le modèle de clonage spécifiquement, ou le [guide des licences TTS locales](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) pour la vue d\'ensemble sur tous les moteurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[idiap/coqui-ai-TTS sur GitHub](https://github.com/idiap/coqui-ai-TTS) — le fork activement maintenu : README, documentation, licence et historique des versions.',
          '[coqui-tts sur PyPI](https://pypi.org/project/coqui-tts/) — métadonnées de package publiées, dont la licence MPL-2.0 actuelle et l\'historique des versions.',
          '[coqui-ai/TTS sur GitHub](https://github.com/coqui-ai/TTS) — le dépôt d\'origine, désormais non maintenu (licence MPL-2.0).',
          '[XTTS v2 sur Hugging Face](https://huggingface.co/coqui/XTTS-v2) — la fiche modèle et le texte de licence CPML du modèle de clonage vocal.',
          '[Institut de recherche Idiap](https://www.idiap.ch/) — l\'institut de recherche suisse qui maintient le fork communautaire.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Licences TTS locales et clonage vocal : Piper, XTTS v2, F5-TTS et Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — l\'analyse approfondie des licences pour tous les principaux moteurs TTS locaux.',
          '[Avis XTTS v2](/power-local-llm/xtts-v2-review) — une analyse complète du modèle de clonage vocal que ce kit peut exécuter.',
          '[Avis Piper TTS](/power-local-llm/piper-tts-review) — l\'alternative TTS locale rapide, CPU seul, testée avec la même profondeur.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparaison cloud contre local pour les lecteurs hésitant à s\'auto-héberger.',
          '[Avis Bark TTS](/power-local-llm/bark-tts-review) — le modèle TTS local audio expressif et non vocal, testé avec la même profondeur.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS : avis (2026) — le kit de clonage vocal maintenu par la communauté',
      description:
        'Coqui TTS, avis : le kit open source de clonage vocal local descendant de Mozilla TTS. Coqui AI a fermé en 2023 ; le fork activement maintenu est idiap/coqui-ai-TTS. Histoire, installation, lien avec XTTS v2, licence MPL-2.0 et limites honnêtes.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'fr',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des kits de synthèse vocale locaux et auto-hébergés' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Institut de recherche Idiap' },
        { '@type': 'Thing', name: 'Synthèse vocale' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS : avis (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-es.webp',
    title: 'Coqui TTS: análisis (2026) — el kit de clonación de voz mantenido por la comunidad',
    seoTitle: 'Coqui TTS: análisis 2026 — kit TTS comunitario',
    intro:
      'Coqui TTS es un kit de código abierto para síntesis de voz y clonación de voz local, descendiente del proyecto TTS de Mozilla, creado originalmente por la startup Coqui AI, que cerró sus servicios de pago en diciembre de 2023. El repositorio original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), no ha recibido nuevos commits desde agosto de 2024 y ya no se mantiene activamente, aunque sigue disponible públicamente bajo su licencia MPL-2.0. El desarrollo continúa en un fork comunitario, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), mantenido por el [Instituto de Investigación Idiap](https://www.idiap.ch/) y publicado en PyPI como el paquete `coqui-tts`. Este análisis cubre esa historia, la relación del kit con el modelo de clonación de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2), comandos reales de instalación y uso, su licencia MPL-2.0, y dónde importa realmente esta transición de mantenimiento en 2026.',
    metaDescription:
      'Coqui TTS, análisis: el kit de código abierto de clonación de voz local descendiente de Mozilla TTS. Coqui AI cerró en 2023; el fork mantenido activamente es idiap/coqui-ai-TTS. Historia, instalación, relación con XTTS v2, licencia MPL-2.0 y límites honestos.',
    twitterDescription:
      'Coqui TTS, análisis 2026: el kit de clonación de voz local que Coqui AI construyó antes de cerrar en 2023 — hoy mantenido por un fork comunitario en el Instituto Idiap. Comandos reales, su vínculo con XTTS v2 y qué cambió tras el cierre.',
    audience:
      'Desarrolladores e investigadores que quieren un kit de síntesis de voz flexible y autoalojado con soporte de clonación de voz, y que necesitan entender su estado de mantenimiento tras el cierre de la empresa antes de construir sobre él.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS análisis',
    targetKeywords: [
      'coqui tts análisis',
      'coqui tts',
      'coqui tts instalación',
      'coqui tts python',
      'coqui tts licencia',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'sigue manteniéndose coqui tts',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS es un kit de código abierto de síntesis de voz y clonación de voz local, creado originalmente por la startup Coqui AI, que cerró sus servicios de pago en diciembre de 2023.** El repositorio original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), no se ha actualizado desde agosto de 2024. Instala en su lugar el fork comunitario activamente mantenido: `pip install coqui-tts`, que proviene de [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), mantenido por el [Instituto de Investigación Idiap](https://www.idiap.ch/). El kit está bajo licencia MPL-2.0 y es el software que ejecuta el modelo de clonación de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2) — el kit y el modelo son cosas separadas con licencias separadas (ver la sección [Licencia y coste](#license-cost)). Para una comparación completa de licencias entre motores TTS locales, consulta la [guía de licencias de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es Coqui TTS y sigue manteniéndose?',
        answer:
          'Coqui TTS vale la pena si quieres un kit de síntesis de voz local flexible que soporte varias arquitecturas de modelo (VITS, Tacotron2 y el modelo de clonación de voz XTTS v2) con amplia cobertura de idiomas. Desciende del proyecto de investigación TTS de Mozilla y fue desarrollado por la startup Coqui AI. La empresa cerró sus servicios de pago en diciembre de 2023, y su repositorio original, coqui-ai/TTS, no ha recibido nuevos commits desde agosto de 2024 — ya no se mantiene activamente, aunque sigue siendo descargable bajo su licencia MPL-2.0. Sí, existe una versión mantenida: el desarrollo continúa en un fork comunitario, idiap/coqui-ai-TTS, mantenido por el Instituto de Investigación Idiap y publicado en PyPI como el paquete coqui-tts, con versiones tan recientes como enero de 2026. Elige Piper en su lugar si quieres la síntesis solo-CPU más rápida sin interés en clonación de voz; elige Coqui TTS específicamente si quieres ejecutar XTTS v2 u otros modelos con capacidad de clonación a través de un único kit activamente actualizado.',
        bullets: [
          'Desciende del proyecto de investigación TTS de Mozilla; desarrollado por la startup Coqui AI, fundada en 2021 por antiguos ingenieros de Mozilla TTS.',
          'Coqui AI cerró sus servicios de pago en diciembre de 2023; el repositorio original coqui-ai/TTS no ha recibido nuevos commits desde agosto de 2024.',
          'Fork comunitario activamente mantenido: idiap/coqui-ai-TTS, mantenido por el Instituto de Investigación Idiap, publicado en PyPI como coqui-tts.',
          'Licencia: MPL-2.0 para el kit en sí. El modelo XTTS v2 que se ejecuta en él tiene una licencia separada y no comercial (CPML) — el kit y el modelo no comparten licencia.',
          'Gratuito, sin nivel de pago; funciona en CPU, con aceleración GPU recomendada para modelos más grandes como XTTS v2.',
          'Última versión del paquete: coqui-tts v0.27.5, publicada el 26 de enero de 2026, según PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: de Mozilla TTS a un fork comunitario', anchor: 'history' },
      { label: 'Qué hace realmente Coqui TTS', anchor: 'what-it-does' },
      { label: 'Coqui TTS y XTTS v2: cómo se relacionan', anchor: 'xtts-relationship' },
      { label: 'Instalar y ejecutar Coqui TTS: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y coste', anchor: 'license-cost' },
      { label: 'Para qué no es bueno Coqui TTS', anchor: 'limitations' },
      { label: 'Alternativas a Coqui TTS', anchor: 'alternatives' },
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
            text: 'Coqui TTS es un kit de código abierto de síntesis de voz y clonación de voz local descendiente del proyecto TTS de Mozilla, cuya empresa original, Coqui AI, cerró sus servicios de pago en diciembre de 2023, dejando el repositorio original sin mantenimiento desde agosto de 2024 — pero un fork comunitario activamente mantenido, idiap/coqui-ai-TTS, continúa el desarrollo bajo el Instituto de Investigación Idiap.',
          },
          {
            type: 'plain-terms',
            text: 'Es un programa que instalas con `pip install` y que puede convertir texto en voz usando varios modelos de IA distintos, incluido un modelo de clonación de voz llamado XTTS v2 — la empresa que lo creó cerró, pero un instituto de investigación mantiene hoy el software actualizado.',
          },
        ],
        items: [
          'Desciende del proyecto de investigación TTS de Mozilla; desarrollado por la startup Coqui AI, fundada en 2021 por antiguos ingenieros de Mozilla TTS.',
          'Coqui AI cerró sus servicios de nube de pago en diciembre de 2023; el repositorio original de GitHub coqui-ai/TTS no ha recibido nuevos commits desde agosto de 2024.',
          'Fork activamente mantenido: idiap/coqui-ai-TTS, por el Instituto de Investigación Idiap, publicado en PyPI como `coqui-tts`.',
          'Licencia: MPL-2.0 para el kit. El modelo XTTS v2 que puede ejecutar está bajo la CPML no comercial, por separado — no confundir ambas.',
          'Gratuito, sin nivel de pago; funciona en CPU, con GPU recomendada para modelos de clonación de voz más grandes.',
          'Última versión del paquete: coqui-tts v0.27.5, publicada el 26 de enero de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Instala `coqui-tts` (el fork mantenido), no el nombre de paquete original `TTS` del repositorio coqui-ai/TTS ahora sin mantenimiento, si quieres una versión que reciba actualizaciones. Ver la sección Instalar y ejecutar más abajo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: de Mozilla TTS a un fork comunitario',
        content: [
          '**Coqui TTS se remonta al [proyecto TTS de Mozilla](https://github.com/mozilla/TTS)**, un esfuerzo de investigación interno de Mozilla en tecnología de voz de código abierto. Cuando Mozilla disolvió ese grupo de investigación en 2021, varios de sus ingenieros — entre ellos Eren Gölge, Kelly Davis, Josh Meyer y Reuben Morais — fundaron la startup Coqui AI para continuar el trabajo como empresa independiente, publicando tanto un kit de texto a voz (Coqui TTS) como un kit de voz a texto (Coqui STT).',
          '**Coqui AI recaudó 3,3 millones de dólares en una ronda semilla en marzo de 2023** y ofrecía tanto un kit de código abierto como servicios de nube de pago, incluyendo acceso alojado a su modelo de clonación de voz, XTTS. La empresa no encontró un modelo de negocio sostenible sobre software de código abierto, y anunció el cierre de sus servicios de pago en diciembre de 2023, con sus servidores desconectados el 11 de diciembre de 2023.',
          '**El repositorio original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), permanece públicamente disponible en GitHub** bajo su licencia MPL-2.0, pero no ha recibido nuevos commits desde agosto de 2024, y GitHub no lo muestra como formalmente archivado — en la práctica, no recibe desarrollo activo ni correcciones de errores.',
          '**Un fork comunitario, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), continúa el desarrollo.** Está mantenido por el [Instituto de Investigación Idiap](https://www.idiap.ch/), un instituto de investigación suizo, y se publica en PyPI bajo el nombre de paquete `coqui-tts` (distinto del nombre de paquete original `TTS`). Su README indica explícitamente que es un "fork del repositorio original, sin mantenimiento", y su historial de versiones muestra actualizaciones continuas, incluida una versión v0.27.0 que añadió una caché de clonación de voz y una versión v0.27.5 el 26 de enero de 2026.',
        ],
        faqs: [
          {
            q: '¿Quién creó Coqui TTS?',
            a: 'Coqui TTS fue creado por la startup Coqui AI, fundada en 2021 por antiguos ingenieros del proyecto de investigación TTS de Mozilla, entre ellos Eren Gölge, Kelly Davis, Josh Meyer y Reuben Morais. Tras el cierre de los servicios de pago de Coqui AI en diciembre de 2023, el desarrollo continuó en un fork comunitario mantenido por el Instituto de Investigación Idiap.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente Coqui TTS',
        content: [
          'Coqui TTS es un kit, no un único modelo — proporciona una interfaz de Python unificada, una CLI y un pipeline de entrenamiento para ejecutar (e, históricamente, entrenar) varias arquitecturas distintas de modelos de texto a voz.',
        ],
        items: [
          '**Interfaz multi-modelo.** Una única clase de Python `TTS()` carga y ejecuta distintas arquitecturas de modelo, incluidos modelos VITS de uno y varios hablantes, modelos basados en Tacotron2 y el modelo de clonación de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2), sin cambiar el código de la aplicación circundante.',
          '**Síntesis por línea de comandos.** El comando CLI `tts` sintetiza voz directamente desde la terminal, listando todos los modelos preentrenados disponibles con `tts --list_models`.',
          '**Clonación de voz vía XTTS v2.** Pasar un argumento `speaker_wav` a un modelo XTTS v2 cargado clona una voz a partir de un breve clip de audio de referencia, generando voz en esa voz clonada en los idiomas que XTTS v2 soporta.',
          '**Amplia biblioteca de modelos preentrenados.** El kit da acceso a modelos preentrenados que, según su documentación, cubren más de 1.100 idiomas a través de los modelos masivamente multilingües basados en Fairseq, junto con modelos curados de mayor calidad para idiomas específicos.',
          '**Entrenamiento y ajuste fino de modelos.** Más allá de ejecutar modelos preentrenados, el kit incluye scripts de entrenamiento y utilidades de análisis de datasets para construir o ajustar un modelo de voz personalizado — históricamente una de sus funciones más usadas antes del cierre del servicio de entrenamiento alojado de Coqui AI.',
          '**Inferencia en streaming para XTTS v2.** El kit documenta síntesis en streaming de baja latencia con XTTS v2 (citada por la documentación del fork mantenido como una latencia inferior a 200 ms hasta el primer audio), útil para aplicaciones de voz interactivas.',
        ],
        note: 'Coqui TTS es el software que ejecuta modelos; XTTS v2 es un modelo específico que puede ejecutar. Ambos se tratan juntos aquí porque la mayoría de los lectores que evalúan Coqui TTS en 2026 están específicamente interesados en ejecutar XTTS v2 a través de él — ver la sección dedicada a su relación más abajo.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS y XTTS v2: cómo se relacionan',
        content: [
          '**Coqui TTS (el kit) y XTTS v2 (el modelo) son dos cosas distintas con dos licencias distintas, y confundirlas es un error de licencia común.** El kit Coqui TTS — el paquete de Python, la CLI y el código de entrenamiento — está bajo licencia MPL-2.0, una licencia permisiva que permite el uso comercial con condiciones de divulgación de código sobre las modificaciones al kit. XTTS v2 es un modelo preentrenado específico cuyos pesos se distribuyen bajo la Coqui Public Model License (CPML), una licencia no comercial, separada de la licencia MPL-2.0 del kit.',
          '**En la práctica, esto significa que puedes usar el kit Coqui TTS comercialmente con modelos de licencia permisiva** (modelos VITS o Tacotron2 entrenados bajo licencias compatibles), mientras que la combinación específica de "kit Coqui TTS ejecutando el modelo XTTS v2" hereda la restricción no comercial de XTTS v2 para los pesos y salidas de ese modelo. Ejecutar un modelo distinto, de licencia permisiva, a través del mismo kit no arrastra esa restricción.',
          '**El paquete `coqui-tts` documenta directamente el uso de XTTS v2**, con el modelo cargado como `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`, ya que el kit es la vía principal soportada para ejecutar XTTS v2 fuera de usar directamente los pesos del modelo mediante otro stack de inferencia. Ver el [análisis dedicado de XTTS v2](/power-local-llm/xtts-v2-review) de PromptQuorum para un desglose completo de la licencia y capacidades de ese modelo.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar y ejecutar Coqui TTS: paso a paso',
        content: 'Esta guía instala el paquete `coqui-tts` activamente mantenido y ejecuta una primera síntesis, según la sintaxis documentada en el propio README del fork mantenido.',
        numberedItems: [
          {
            title: 'Instala el paquete mantenido.',
            whyItMatters: 'Ejecuta `pip install coqui-tts` (o `uv pip install coqui-tts` si usas uv) en un entorno Python. Instala específicamente el paquete `coqui-tts` — no el nombre de paquete más antiguo `TTS`, que apunta al repositorio original ahora sin mantenimiento.',
          },
          {
            title: 'Lista los modelos preentrenados disponibles.',
            whyItMatters: 'Ejecuta `tts --list_models` para ver el catálogo completo de modelos preentrenados disponibles para descargar, organizados por idioma y arquitectura (VITS, Tacotron2, XTTS y otros).',
          },
          {
            title: 'Sintetiza voz desde la línea de comandos.',
            whyItMatters: 'Ejecuta `tts --text "Hello world" --out_path output.wav` para sintetizar con el modelo por defecto, o añade `--model_name <modelo>` para elegir uno específico de la lista.',
          },
          {
            title: '(Opcional) Usa la API de Python para clonación de voz con XTTS v2.',
            whyItMatters: 'Carga el modelo con `TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`, luego llama a `.tts_to_file()` con un argumento `speaker_wav` que apunte a un breve clip de audio de referencia y un argumento `language` para clonar una voz.',
          },
          {
            title: '(Opcional) Activa la aceleración por GPU.',
            whyItMatters: 'Pasa `gpu=True` al constructor `TTS()`, o llama a `.to("cuda")` sobre el objeto de modelo cargado, para ejecutar la inferencia en una GPU NVIDIA — recomendado para XTTS v2, notablemente más lento solo con CPU.',
          },
          {
            title: '(Opcional) Acepta la licencia CPML de forma no interactiva para XTTS v2.',
            whyItMatters: 'Cargar XTTS v2 por primera vez solicita un paso interactivo de aceptación de la CPML. Define la variable de entorno `COQUI_TOS_AGREED=1` para aceptarla de forma no interactiva, requerido para uso desatendido en contenedores Docker o pipelines de CI.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Más allá de la guía de instalación básica anterior, estos son patrones de uso comunes de la propia documentación del fork mantenido.',
        ],
        codeBlock: `# Línea de comandos: listar modelos preentrenados disponibles
tts --list_models

# Línea de comandos: sintetizar con el modelo por defecto
tts --text "Hello world" --out_path output.wav

# Línea de comandos: sintetizar con un modelo específico
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# API de Python: síntesis básica
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# API de Python: clonación de voz con XTTS v2 (acepta la CPML de forma no interactiva primero)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# API de Python: listar hablantes e idiomas disponibles en un modelo cargado
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'La variable de entorno `COQUI_TOS_AGREED=1` y los argumentos `speaker_wav`/`language` están documentados en el README y la documentación de la API del fork mantenido. Comprueba la documentación actual antes de desplegar, ya que la API del kit ha cambiado entre versiones mayores (el paquete `TTS` original y el fork `coqui-tts` mantenido comparten la misma ruta de importación `TTS.api.TTS` en el momento de comprobar para este análisis).',
        items: [
          '**Aceptación no interactiva de la CPML** para entornos automatizados: define `COQUI_TOS_AGREED=1` antes de la primera carga de XTTS v2, para que los builds de Docker y los pipelines de CI no se queden bloqueados en una solicitud interactiva.',
          '**Introspección de hablantes e idiomas**: tras cargar un modelo multi-hablante o multilingüe, `tts.speakers` y `tts.languages` listan lo que el modelo cargado realmente soporta — útil para validar la entrada antes de la síntesis.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y coste',
        content: [
          '**El kit Coqui TTS está bajo licencia MPL-2.0 (Mozilla Public License 2.0)**, confirmada a través de los metadatos publicados del paquete `coqui-tts` en [PyPI](https://pypi.org/project/coqui-tts/) y el archivo de licencia en el [repositorio idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS). MPL-2.0 es una licencia permisiva con condiciones: puedes usar el kit comercialmente, pero si modificas y distribuyes los archivos fuente propios del kit, debes publicar esos archivos modificados específicos también bajo MPL-2.0. Usar el kit como dependencia sin modificar no coloca tu propio código de aplicación bajo MPL-2.0.',
          '**El modelo XTTS v2 tiene licencia separada, bajo la Coqui Public Model License (CPML), que es no comercial** — esto se aplica a los pesos del modelo y sus salidas de audio generadas, no al código del kit Coqui TTS que los ejecuta. Ver el [análisis de XTTS v2](/power-local-llm/xtts-v2-review) de PromptQuorum para el desglose completo de esa licencia.',
          '**No hay nivel de pago, suscripción ni cuota de licencia para el kit Coqui TTS en sí.** Los servicios alojados de pago de Coqui AI cerraron en diciembre de 2023 y no están disponibles a ningún precio; la única forma de usar Coqui TTS hoy es autoalojado, ya sea con el paquete original sin mantenimiento o con el fork `coqui-tts` activamente mantenido.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa Coqui TTS?',
            a: 'El kit Coqui TTS en sí está bajo licencia MPL-2.0, que permite el uso comercial con la condición de que las modificaciones a los archivos fuente propios del kit se publiquen bajo la misma licencia. Esto es independiente de la licencia de cualquier modelo específico que ejecute — el modelo XTTS v2, por ejemplo, está bajo la Coqui Public Model License (CPML) no comercial, que se aplica a los pesos y salidas del modelo, no al código del kit.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no es bueno Coqui TTS',
        content: [
          'Coqui TTS es un kit flexible multi-modelo, no la opción más rápida ni más simple para cada caso de uso. Es la herramienta equivocada para las siguientes situaciones:',
        ],
        items: [
          '**Construir sobre el repositorio original sin mantenimiento.** Si ejecutas `pip install TTS` (el nombre de paquete original) en lugar de `pip install coqui-tts` (el fork mantenido), estás construyendo sobre código que no ha recibido actualizaciones desde agosto de 2024 — comprueba qué paquete referencia realmente un tutorial o dependencia antes de confiar en él.',
          '**La síntesis solo-CPU más rápida posible.** Si tu prioridad es la voz en tiempo real en hardware modesto como una Raspberry Pi sin GPU, [Piper](/power-local-llm/piper-tts-review) está construido específicamente para eso y es más simple de desplegar; los modelos más grandes de Coqui TTS, especialmente XTTS v2, son notablemente más lentos solo con CPU.',
          '**Clonación de voz comercial sin una revisión de licencia separada.** Ejecutar XTTS v2 a través del kit Coqui TTS sigue arrastrando la restricción no comercial propia de XTTS v2 (CPML) sobre los pesos y salidas del modelo — la licencia MPL-2.0 del kit no anula eso. Ver la sección Licencia y coste anterior.',
          '**Soporte corporativo garantizado a largo plazo.** La empresa Coqui AI ya no existe desde diciembre de 2023. El fork actual lo mantiene un instituto de investigación de forma comunitaria, un modelo de mantenimiento distinto al de una empresa financiada con contrato de soporte — considéralo para decisiones de infraestructura de producción crítica.',
          '**Una única API estable entre versiones.** Como el desarrollo se trasladó entre un original sin mantenimiento y un fork activamente desarrollado, algunos tutoriales, respuestas de Stack Overflow y publicaciones de blog en línea referencian una superficie de API más antigua o el nombre de paquete original — verifica contra la documentación actual de `coqui-tts` en lugar de un resultado de búsqueda antiguo.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a Coqui TTS',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Piper](/power-local-llm/piper-tts-review)',
            'Mejor para': 'La síntesis solo-CPU más rápida, sin clonación de voz, tiempo real en una Raspberry Pi',
            'Licencia': 'GPL-3.0-or-later',
          },
          {
            'Herramienta': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Mejor para': 'El propio modelo de clonación de voz, si solo necesitas XTTS v2 y no el kit más amplio',
            'Licencia': 'CPML (no comercial)',
          },
          {
            'Herramienta': '[Bark](/power-local-llm/bark-tts-review)',
            'Mejor para': 'Audio no vocal expresivo — risas, suspiros, sonido ambiental',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Mejor para': 'La mejor calidad de narración natural en inglés (sin clonación de voz)',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[ElevenLabs](https://elevenlabs.io)',
            'Mejor para': 'API en la nube gestionada para equipos que prefieren no autoalojar, con clonación de voz comercial',
            'Licencia': 'Propietaria (API en la nube de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Coqui TTS?',
            a: 'Coqui TTS es un kit de código abierto de síntesis de voz y clonación de voz local descendiente del proyecto de investigación TTS de Mozilla, creado originalmente por la startup Coqui AI. Soporta varias arquitecturas de modelo, incluido el modelo de clonación de voz XTTS v2, a través de una única interfaz de Python y CLI.',
          },
          {
            q: '¿Sigue manteniéndose Coqui TTS?',
            a: 'El repositorio original coqui-ai/TTS ya no se mantiene activamente — no ha recibido nuevos commits desde agosto de 2024, tras el cierre de los servicios de pago de la empresa Coqui AI en diciembre de 2023. Un fork comunitario activamente mantenido, idiap/coqui-ai-TTS, continúa el desarrollo bajo el Instituto de Investigación Idiap y se publica en PyPI como el paquete coqui-tts, con versiones tan recientes como enero de 2026.',
          },
          {
            q: '¿Es gratuito Coqui TTS?',
            a: 'Sí, el kit en sí no tiene nivel de pago ni cuota de licencia. Los antiguos servicios alojados de pago de Coqui AI cerraron en diciembre de 2023 y no están disponibles a ningún precio. Algunos modelos específicos que se ejecutan sobre el kit, como XTTS v2, tienen su propia licencia separada (CPML) que restringe el uso comercial de los pesos y salidas de ese modelo.',
          },
          {
            q: '¿Cuál es la diferencia entre los paquetes coqui-tts y TTS?',
            a: 'TTS es el nombre de paquete original de PyPI, ligado al repositorio coqui-ai/TTS sin mantenimiento y sin actualizaciones desde agosto de 2024. coqui-tts es el nombre de paquete del fork activamente mantenido, publicado desde el repositorio idiap/coqui-ai-TTS bajo el Instituto de Investigación Idiap, con versiones regulares incluyendo v0.27.5 en enero de 2026. Instala coqui-tts para una versión que reciba actualizaciones.',
          },
          {
            q: '¿Coqui TTS soporta clonación de voz?',
            a: 'Sí, a través del modelo XTTS v2, que el kit puede cargar y ejecutar. XTTS v2 clona una voz a partir de un breve clip de audio de referencia pasado como argumento speaker_wav. Ten en cuenta que la propia licencia de XTTS v2, la Coqui Public Model License (CPML), es no comercial, separada de la licencia MPL-2.0 del kit.',
          },
          {
            q: '¿Por qué cerró Coqui AI?',
            a: 'Coqui AI, la empresa detrás de Coqui TTS, anunció el cierre de sus servicios alojados de pago en diciembre de 2023, con sus servidores desconectados el 11 de diciembre de 2023, tras no lograr construir un modelo de negocio sostenible sobre tecnología de voz de código abierto. El kit de código abierto en sí siguió disponible, y el desarrollo continuó después en un fork comunitario.',
          },
          {
            q: '¿Cuál es la última versión de Coqui TTS?',
            a: 'La última versión del paquete coqui-tts activamente mantenido es v0.27.5, publicada el 26 de enero de 2026, según su entrada en PyPI.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Coqui TTS es un caso de estudio genuinamente útil sobre qué le ocurre a una infraestructura de código abierto tras el cierre de la empresa que la respalda: el repositorio original enmudeció en agosto de 2024, pero el software no desapareció — un instituto de investigación asumió el mantenimiento, renombró el paquete y siguió publicando versiones hasta 2026. Para cualquiera que lo evalúe hoy, la conclusión práctica es simple: instala `coqui-tts`, no el paquete `TTS` original, y comprende que la licencia MPL-2.0 del kit es independiente de la licencia no comercial CPML del modelo XTTS v2 que puede ejecutar. Como kit, su fortaleza está en la flexibilidad entre arquitecturas de modelo más que en ser la opción más rápida o simple para cualquier caso de uso concreto — para eso, combina este análisis con la cobertura de PromptQuorum sobre [Piper](/power-local-llm/piper-tts-review) para velocidad, [XTTS v2](/power-local-llm/xtts-v2-review) específicamente para el modelo de clonación, o la [guía de licencias de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) para el panorama completo entre motores.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[idiap/coqui-ai-TTS en GitHub](https://github.com/idiap/coqui-ai-TTS) — el fork activamente mantenido: README, documentación, licencia e historial de versiones.',
          '[coqui-tts en PyPI](https://pypi.org/project/coqui-tts/) — metadatos publicados del paquete, incluida la licencia MPL-2.0 actual e historial de versiones.',
          '[coqui-ai/TTS en GitHub](https://github.com/coqui-ai/TTS) — el repositorio original, ahora sin mantenimiento (licencia MPL-2.0).',
          '[XTTS v2 en Hugging Face](https://huggingface.co/coqui/XTTS-v2) — la ficha del modelo y el texto de licencia CPML del modelo de clonación de voz.',
          '[Instituto de Investigación Idiap](https://www.idiap.ch/) — el instituto de investigación suizo que mantiene el fork comunitario.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Licencias de TTS local y clonación de voz: Piper, XTTS v2, F5-TTS y Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — el análisis profundo de licencias en todos los motores TTS locales principales.',
          '[Análisis de XTTS v2](/power-local-llm/xtts-v2-review) — un desglose completo del modelo de clonación de voz que este kit puede ejecutar.',
          '[Análisis de Piper TTS](/power-local-llm/piper-tts-review) — la alternativa TTS local rápida, solo-CPU, analizada con la misma profundidad.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparación nube contra local para lectores que deciden si autoalojarse.',
          '[Análisis de Bark TTS](/power-local-llm/bark-tts-review) — el modelo TTS local de audio expresivo y no vocal, analizado con la misma profundidad.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS: análisis (2026) — el kit de clonación de voz mantenido por la comunidad',
      description:
        'Coqui TTS, análisis: el kit de código abierto de clonación de voz local descendiente de Mozilla TTS. Coqui AI cerró en 2023; el fork mantenido activamente es idiap/coqui-ai-TTS. Historia, instalación, relación con XTTS v2, licencia MPL-2.0 y límites honestos.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'es',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores evaluando kits de texto a voz locales y autoalojados' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Instituto de Investigación Idiap' },
        { '@type': 'Thing', name: 'Texto a voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS: análisis (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-ja.webp',
    title: 'Coqui TTSレビュー(2026):コミュニティが保守する音声クローニング・ツールキット',
    seoTitle: 'Coqui TTSレビュー2026:コミュニティ保守TTS',
    intro:
      'Coqui TTSは、MozillaのTTSプロジェクトから派生したオープンソースのローカル音声合成・音声クローニング・ツールキットです。もともとはスタートアップ企業Coqui AIが開発しましたが、同社は2023年12月に有料サービスを終了しました。元のリポジトリ[coqui-ai/TTS](https://github.com/coqui-ai/TTS)は2024年8月以降新しいコミットがなく、積極的には保守されていません(MPL-2.0ライセンスの下では引き続き公開されています)。開発は現在、コミュニティフォークの[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)で継続されており、[Idiap研究所](https://www.idiap.ch/)が保守し、PyPIには`coqui-tts`パッケージとして公開されています。このレビューでは、この歴史、音声クローニングモデル[XTTS v2](https://huggingface.co/coqui/XTTS-v2)との関係、実際のインストール・使用コマンド、MPL-2.0ライセンス、そして2026年にこの保守移行が実際に重要になる点を扱います。',
    metaDescription:
      'Coqui TTSレビュー:Mozilla TTSから派生したオープンソースのローカル音声クローニング・ツールキット。Coqui AIは2023年に閉鎖、積極的に保守されているフォークはidiap/coqui-ai-TTS。歴史、インストール手順、XTTS v2との関係、MPL-2.0ライセンス、正直な限界。',
    twitterDescription:
      'Coqui TTSレビュー2026:2023年に閉鎖したCoqui AIが構築したローカル音声クローニング・ツールキット — 現在はIdiap研究所のコミュニティフォークが存続させています。実際のインストールコマンド、XTTS v2とのつながり、閉鎖後に変わったこと。',
    audience:
      '柔軟な自己ホスト型音声合成ツールキットと音声クローニング機能を求め、それを基盤に構築する前に閉鎖後の保守状況を理解する必要がある開発者や研究者。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTSレビュー',
    targetKeywords: [
      'coqui tts レビュー',
      'coqui tts',
      'coqui tts インストール',
      'coqui tts python',
      'coqui tts ライセンス',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'coqui tts は保守されているか',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTSは、もともとスタートアップ企業Coqui AIが開発したオープンソースのローカル音声合成・音声クローニング・ツールキットで、同社は2023年12月に有料サービスを終了しました。** 元のリポジトリ[coqui-ai/TTS](https://github.com/coqui-ai/TTS)は2024年8月以降更新されていません。代わりに、積極的に保守されているコミュニティフォークをインストールしてください:`pip install coqui-tts`。これは[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)由来で、[Idiap研究所](https://www.idiap.ch/)が保守しています。このツールキットはMPL-2.0ライセンスで、音声クローニングモデル[XTTS v2](https://huggingface.co/coqui/XTTS-v2)を動かすソフトウェアです — ツールキットとモデルは別物で、それぞれ別のライセンスを持ちます([ライセンスと費用](#license-cost)セクション参照)。ローカルTTSエンジン全体のライセンス比較は、PromptQuorumの[ローカルTTSライセンスガイド](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)を参照してください。',
    quickAnswerTop: {
      en: {
        question: 'Coqui TTSとは何か、今も保守されているのか',
        answer:
          'Coqui TTSは、複数のモデルアーキテクチャ(VITS、Tacotron2、音声クローニングモデルのXTTS v2)を幅広い言語対応でサポートする、柔軟なローカル音声合成ツールキットが欲しい場合に価値があります。MozillaのTTS研究プロジェクトから派生し、スタートアップ企業Coqui AIが開発しました。同社は2023年12月に有料サービスを終了し、元のリポジトリcoqui-ai/TTSは2024年8月以降新しいコミットがありません — 積極的には保守されていませんが、MPL-2.0ライセンスの下でダウンロード可能なまま残っています。はい、保守されているバージョンは存在します:開発はコミュニティフォークのidiap/coqui-ai-TTSで継続されており、Idiap研究所が保守し、PyPIにはcoqui-ttsパッケージとして公開され、2026年1月時点でもリリースが続いています。音声クローニングに関心がなく、最速のCPU専用合成が欲しいならPiperを、XTTS v2など他のクローニング対応モデルを単一の積極的に更新されるツールキットで動かしたいならCoqui TTSを選んでください。',
        bullets: [
          'MozillaのTTS研究プロジェクトから派生;2021年に元MozillaのTTSエンジニアが設立したスタートアップCoqui AIが開発。',
          'Coqui AIは2023年12月に有料サービスを終了;元のcoqui-ai/TTSリポジトリは2024年8月以降新しいコミットがない。',
          '積極的に保守されているコミュニティフォーク:idiap/coqui-ai-TTS、Idiap研究所が保守、PyPIにはcoqui-ttsとして公開。',
          'ライセンス:ツールキット自体はMPL-2.0。その上で動くXTTS v2モデルは別の非商用ライセンス(CPML) — ツールキットとモデルは同じライセンスではない。',
          '無料、有料プランなし;CPUで動作し、XTTS v2のような大型モデルにはGPUアクセラレーションが推奨される。',
          '最新のパッケージリリース:coqui-tts v0.27.5、2026年1月26日公開(PyPIによる)。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:Mozilla TTSからコミュニティフォークへ', anchor: 'history' },
      { label: 'Coqui TTSが実際に行うこと', anchor: 'what-it-does' },
      { label: 'Coqui TTSとXTTS v2の関係', anchor: 'xtts-relationship' },
      { label: 'Coqui TTSのインストールと実行:手順', anchor: 'install-walkthrough' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスと費用', anchor: 'license-cost' },
      { label: 'Coqui TTSが向いていない用途', anchor: 'limitations' },
      { label: 'Coqui TTSの代替候補', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'Coqui TTSはMozillaのTTSプロジェクトから派生したオープンソースのローカル音声合成・音声クローニング・ツールキットで、元の企業Coqui AIは2023年12月に有料サービスを終了し、元のリポジトリは2024年8月以降保守されていないが、積極的に保守されているコミュニティフォークidiap/coqui-ai-TTSがIdiap研究所の下で開発を継続している。',
          },
          {
            type: 'plain-terms',
            text: '`pip install`でインストールするプログラムで、XTTS v2という音声クローニングモデルを含む複数の異なるAIモデルを使ってテキストを音声に変換できます — これを作った会社は閉鎖しましたが、今は研究機関がソフトウェアを最新に保っています。',
          },
        ],
        items: [
          'MozillaのTTS研究プロジェクトから派生;2021年に元MozillaのTTSエンジニアが設立したスタートアップCoqui AIが開発。',
          'Coqui AIは2023年12月に有料クラウドサービスを終了;元のGitHubリポジトリcoqui-ai/TTSは2024年8月以降新しいコミットがない。',
          '積極的に保守されているフォーク:idiap/coqui-ai-TTS、Idiap研究所による保守、PyPIには`coqui-tts`として公開。',
          'ライセンス:ツールキットはMPL-2.0。実行できるXTTS v2モデルは別途、非商用のCPMLの下にある — 両者を混同しないこと。',
          '無料、有料プランなし;CPUで動作し、大型の音声クローニングモデルにはGPUが推奨される。',
          '最新のパッケージリリース:coqui-tts v0.27.5、2026年1月26日公開。',
        ],
        callouts: [
          {
            type: 'note',
            text: '更新を受け取るバージョンが欲しい場合は、今は保守されていないcoqui-ai/TTSリポジトリ由来の元のパッケージ名`TTS`ではなく、`coqui-tts`(保守されているフォーク)をインストールしてください。下記の「インストールと実行」セクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:Mozilla TTSからコミュニティフォークへ',
        content: [
          '**Coqui TTSは[MozillaのTTSプロジェクト](https://github.com/mozilla/TTS)にさかのぼります。** これはオープンソース音声技術に関するMozilla社内の研究プロジェクトでした。Mozillaが2021年にその研究グループを解散した際、Eren Gölge、Kelly Davis、Josh Meyer、Reuben Moraisを含む複数のエンジニアが独立企業としてスタートアップCoqui AIを設立し、テキスト読み上げツールキット(Coqui TTS)と音声認識ツールキット(Coqui STT)の両方をリリースして作業を継続しました。',
          '**Coqui AIは2023年3月にシード資金として330万ドルを調達し**、オープンソースツールキットと、音声クローニングモデルXTTSへのホスト型アクセスを含む有料クラウドサービスの両方を提供していました。同社はオープンソースソフトウェアの上に持続可能なビジネスモデルを見出せず、2023年12月に有料サービスの終了を発表し、サーバーは2023年12月11日にオフラインになりました。',
          '**元のリポジトリ[coqui-ai/TTS](https://github.com/coqui-ai/TTS)は、GitHub上でMPL-2.0ライセンスの下で公開され続けています**が、2024年8月以降新しいコミットはなく、GitHub上で正式にアーカイブ済みとは表示されていません — 実際には、積極的な開発やバグ修正は行われていません。',
          '**コミュニティフォークの[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)が開発を継続しています。** これはスイスの研究機関である[Idiap研究所](https://www.idiap.ch/)によって保守され、PyPIには元のパッケージ名`TTS`とは別に`coqui-tts`というパッケージ名で公開されています。そのREADMEは明示的に「元の、保守されていないリポジトリのフォーク」であると述べており、リリース履歴は継続的な更新を示しています。音声クローニングキャッシュを追加したv0.27.0リリースや、2026年1月26日のv0.27.5リリースなどです。',
        ],
        faqs: [
          {
            q: 'Coqui TTSを作ったのは誰ですか',
            a: 'Coqui TTSは、2021年に設立されたスタートアップCoqui AIが作成しました。設立者にはMozillaのTTS研究プロジェクトの元エンジニアであるEren Gölge、Kelly Davis、Josh Meyer、Reuben Moraisが含まれます。Coqui AIが2023年12月に有料サービスを終了した後、開発はIdiap研究所が保守するコミュニティフォークで継続されました。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Coqui TTSが実際に行うこと',
        content: [
          'Coqui TTSは単一のモデルではなくツールキットです — 複数の異なる音声合成モデルアーキテクチャを実行(そして歴史的には訓練)するための、統一されたPythonインターフェース、CLI、トレーニングパイプラインを提供します。',
        ],
        items: [
          '**マルチモデル・インターフェース。** 単一の`TTS()`Pythonクラスが、VITSベースの単一話者・複数話者モデル、Tacotron2ベースのモデル、そして音声クローニングモデル[XTTS v2](https://huggingface.co/coqui/XTTS-v2)を含む異なるモデルアーキテクチャを、周辺のアプリケーションコードを変更することなくロード・実行します。',
          '**コマンドライン合成。** `tts`CLIコマンドはターミナルから直接音声を合成し、`tts --list_models`で利用可能な全ての事前学習モデルを一覧表示します。',
          '**XTTS v2による音声クローニング。** ロードしたXTTS v2モデルに`speaker_wav`引数を渡すと、短い参照音声クリップから声をクローンし、XTTS v2が対応する言語でそのクローンした声で音声を生成します。',
          '**幅広い事前学習モデルのライブラリ。** このツールキットは、ドキュメントによれば基盤となるFairseqベースの大規模多言語モデルを通じて1,100以上の言語をカバーする事前学習モデルへのアクセスに加え、特定言語向けのより高品質な厳選モデルも提供します。',
          '**モデルの訓練とファインチューニング。** 事前学習モデルの実行に加え、このツールキットには独自の音声モデルを構築・微調整するためのトレーニングスクリプトとデータセット分析ユーティリティが含まれています — Coqui AIのホスト型トレーニングサービス終了以前は、歴史的に最も使われた機能の一つでした。',
          '**XTTS v2のストリーミング推論。** このツールキットは、XTTS v2による低遅延ストリーミング合成を文書化しており(保守されているフォークのドキュメントによれば最初の音声出力まで200ミリ秒未満のレイテンシと引用)、対話型音声アプリケーションに有用です。',
        ],
        note: 'Coqui TTSはモデルを実行するソフトウェアであり、XTTS v2はそれが実行できる特定のモデルです。2026年にCoqui TTSを評価する読者の多くが、それを通じてXTTS v2を実行することに具体的に関心があるため、ここで両方をまとめて扱います — 両者の関係については下記の専用セクションを参照してください。',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTSとXTTS v2の関係',
        content: [
          '**Coqui TTS(ツールキット)とXTTS v2(モデル)は、それぞれ別のライセンスを持つ別物であり、両者を混同するのはよくあるライセンスの誤りです。** Coqui TTSツールキット — Pythonパッケージ、CLI、トレーニングコード — はMPL-2.0の下にあり、ツールキットへの変更に関するソース開示条件付きで商用利用を許可する寛容なライセンスです。XTTS v2は特定の事前学習モデルであり、その重みはCoqui Public Model License(CPML)という非商用ライセンスの下で配布されており、ツールキットのMPL-2.0ライセンスとは別のものです。',
          '**実際には、これはCoqui TTSツールキットを寛容にライセンスされたモデルとともに商用利用できることを意味します**(互換性のあるライセンスの下で訓練されたVITSまたはTacotron2モデルなど)。一方で、「Coqui TTSツールキットがXTTS v2モデルを実行する」という特定の組み合わせは、そのモデルの重みと出力に対するXTTS v2の非商用制限を受け継ぎます。同じツールキットを通じて別の、寛容にライセンスされたモデルを実行する場合は、その制限を負いません。',
          '**`coqui-tts`パッケージはXTTS v2の使用方法を直接文書化しており**、モデルは`TTS("tts_models/multilingual/multi-dataset/xtts_v2")`としてロードされます。これは、別の推論スタックを通じてモデルの重みを直接使用する以外で、XTTS v2を実行する主要なサポート方法がこのツールキットだからです。そのモデルのライセンスと機能の完全な内訳については、PromptQuorumの専用[XTTS v2レビュー](/power-local-llm/xtts-v2-review)を参照してください。',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Coqui TTSのインストールと実行:手順',
        content: 'この手順では、積極的に保守されている`coqui-tts`パッケージをインストールし、保守されているフォーク自身のREADMEに文書化された構文を使って最初の合成を実行します。',
        numberedItems: [
          {
            title: '保守されているパッケージをインストールする。',
            whyItMatters: 'Python環境で`pip install coqui-tts`を実行してください(uvを使う場合は`uv pip install coqui-tts`)。特に`coqui-tts`パッケージをインストールしてください — 今は保守されていない元のリポジトリを指す古いパッケージ名`TTS`ではありません。',
          },
          {
            title: '利用可能な事前学習モデルを一覧表示する。',
            whyItMatters: '`tts --list_models`を実行すると、言語とアーキテクチャ(VITS、Tacotron2、XTTSなど)ごとに整理された、ダウンロード可能な事前学習モデルの全カタログが表示されます。',
          },
          {
            title: 'コマンドラインから音声を合成する。',
            whyItMatters: 'デフォルトモデルで合成するには`tts --text "Hello world" --out_path output.wav`を実行するか、リストから特定のモデルを選ぶには`--model_name <モデル>`を追加してください。',
          },
          {
            title: '(オプション)XTTS v2の音声クローニングにPython APIを使う。',
            whyItMatters: '`TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`でモデルをロードし、短い参照音声クリップを指す`speaker_wav`引数と声をクローンするための`language`引数を指定して`.tts_to_file()`を呼び出します。',
          },
          {
            title: '(オプション)GPUアクセラレーションを有効にする。',
            whyItMatters: '`TTS()`コンストラクタに`gpu=True`を渡すか、ロードしたモデルオブジェクトで`.to("cuda")`を呼び出すことで、NVIDIA GPU上で推論を実行します — CPUのみでは明らかに遅くなるXTTS v2に推奨されます。',
          },
          {
            title: '(オプション)XTTS v2のCPMLライセンスを非対話的に承諾する。',
            whyItMatters: 'XTTS v2を初めてロードすると、CPMLの承諾を求める対話的なステップが表示されます。環境変数`COQUI_TOS_AGREED=1`を設定すると非対話的に承諾でき、DockerコンテナやCIパイプラインでの無人実行に必要です。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          '上記の基本的なインストール手順に加えて、以下は保守されているフォーク自身のドキュメントに基づく一般的な実際の使用パターンです。',
        ],
        codeBlock: `# コマンドライン:利用可能な事前学習モデルを一覧表示
tts --list_models

# コマンドライン:デフォルトモデルで合成
tts --text "Hello world" --out_path output.wav

# コマンドライン:特定のモデルで合成
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# Python API:基本的な合成
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# Python API:XTTS v2による音声クローニング(先にCPMLを非対話的に承諾)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# Python API:ロードしたモデルで利用可能な話者と言語を一覧表示
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: '環境変数`COQUI_TOS_AGREED=1`および`speaker_wav`/`language`引数は、保守されているフォークのREADMEとAPIドキュメントに文書化されています。ツールキットのAPIはメジャーバージョン間で変更されているため(このレビューの確認時点では、元の`TTS`パッケージと保守されている`coqui-tts`フォークは同じインポートパス`TTS.api.TTS`を共有しています)、デプロイ前に最新のドキュメントを確認してください。',
        items: [
          '**自動化環境向けの非対話的CPML承諾**:XTTS v2を最初にロードする前に`COQUI_TOS_AGREED=1`を設定しておくと、DockerビルドやCIパイプラインが対話的なプロンプトで止まらなくなります。',
          '**話者と言語のイントロスペクション**:複数話者または多言語モデルをロードした後、`tts.speakers`と`tts.languages`はロードしたモデルが実際にサポートする内容を一覧表示します — 合成前の入力検証に有用です。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスと費用',
        content: [
          '**Coqui TTSツールキットは、MPL-2.0(Mozilla Public License 2.0)の下でライセンスされています。** これは[PyPI](https://pypi.org/project/coqui-tts/)上で公開されている`coqui-tts`パッケージのメタデータと、[idiap/coqui-ai-TTSリポジトリ](https://github.com/idiap/coqui-ai-TTS)のライセンスファイルによって確認できます。MPL-2.0は条件付きの寛容なライセンスです:ツールキットを商用利用できますが、ツールキット自身のソースファイルを変更して配布する場合、その特定の変更済みファイルもMPL-2.0の下で公開する必要があります。未変更の依存関係としてツールキットを使用する場合、自身のアプリケーションコードをMPL-2.0の下に置く必要はありません。',
          '**XTTS v2モデルは別途、Coqui Public Model License(CPML)の下でライセンスされており、これは非商用です** — これはモデルの重みと生成された音声出力に適用され、それらを実行するCoqui TTSツールキットのコードには適用されません。そのライセンスの完全な内訳については、PromptQuorumの[XTTS v2レビュー](/power-local-llm/xtts-v2-review)を参照してください。',
          '**Coqui TTSツールキット自体には、有料プラン、サブスクリプション、ライセンス料はありません。** Coqui AIの有料ホストサービスは2023年12月に終了しており、いかなる価格でも利用できません。今日Coqui TTSを使う唯一の方法は自己ホスト型で、保守されていない元のパッケージか、積極的に保守されている`coqui-tts`フォークのいずれかを使うことです。',
        ],
        faqs: [
          {
            q: 'Coqui TTSはどのライセンスを使っていますか',
            a: 'Coqui TTSツールキット自体はMPL-2.0の下にあり、ツールキット自身のソースファイルへの変更を同じライセンスの下で公開するという条件付きで商用利用を許可します。これは実行する特定のモデルのライセンスとは別のものです — 例えばXTTS v2モデルは非商用のCoqui Public Model License(CPML)の下にあり、これはモデルの重みと出力に適用され、ツールキットのコードには適用されません。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Coqui TTSが向いていない用途',
        content: [
          'Coqui TTSは柔軟なマルチモデル・ツールキットであり、あらゆる用途において最速または最もシンプルな選択肢ではありません。以下の状況には向いていません:',
        ],
        items: [
          '**元の、保守されていないリポジトリを基盤にすること。** `pip install coqui-tts`(保守されているフォーク)ではなく`pip install TTS`(元のパッケージ名)を実行した場合、2024年8月以降更新のないコードを基盤にすることになります — 依存する前に、チュートリアルや依存関係が実際にどのパッケージを参照しているか確認してください。',
          '**可能な限り最速のCPU専用合成。** Raspberry PiのようなGPUなしの控えめなハードウェア上でのリアルタイム音声が優先事項であれば、[Piper](/power-local-llm/piper-tts-review)がその目的専用に作られておりデプロイも簡単です。Coqui TTSのより大きなモデル、特にXTTS v2は、CPUのみでは明らかに遅くなります。',
          '**別途ライセンス確認なしでの商用音声クローニング。** Coqui TTSツールキットを通じてXTTS v2を実行しても、モデルの重みと出力に対するXTTS v2自身の非商用CPML制限は依然として適用されます — ツールキットのMPL-2.0ライセンスはそれを無効にしません。上記の「ライセンスと費用」セクションを参照してください。',
          '**長期的な企業サポートの保証。** Coqui AIという会社は2023年12月以降存在しません。現在のフォークは研究機関がコミュニティベースで保守しており、サポート契約付きの資金調達済み企業とは異なる保守モデルです — 重要な本番インフラの決定にはこれを考慮してください。',
          '**バージョン間で単一の安定したAPI。** 開発が保守されていないオリジナルと積極的に開発されているフォークの間で移動したため、オンライン上の一部のチュートリアル、Stack Overflowの回答、ブログ記事は古いAPI表面や元のパッケージ名を参照していることがあります — 古い検索結果ではなく、現在の`coqui-tts`ドキュメントと照らし合わせて確認してください。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Coqui TTSの代替候補',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Piper](/power-local-llm/piper-tts-review)',
            '最適な用途': '最速のCPU専用合成、音声クローニングなし、Raspberry Piでリアルタイム',
            'ライセンス': 'GPL-3.0-or-later',
          },
          {
            'ツール': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            '最適な用途': 'XTTS v2だけが必要で、より広いツールキットが不要な場合の音声クローニングモデル自体',
            'ライセンス': 'CPML(非商用)',
          },
          {
            'ツール': '[Bark](/power-local-llm/bark-tts-review)',
            '最適な用途': '表現力豊かな非音声オーディオ — 笑い声、ため息、環境音',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最適な用途': '最も自然な英語ナレーション品質(音声クローニングなし)',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[ElevenLabs](https://elevenlabs.io)',
            '最適な用途': 'セルフホストを好まないチーム向けの、商用音声クローニング対応マネージドクラウドAPI',
            'ライセンス': 'プロプライエタリ(有料クラウドAPI)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Coqui TTSとは何ですか',
            a: 'Coqui TTSは、MozillaのTTS研究プロジェクトから派生し、もともとスタートアップ企業Coqui AIが開発した、オープンソースのローカル音声合成・音声クローニング・ツールキットです。音声クローニングモデルのXTTS v2を含む複数のモデルアーキテクチャを、単一のPythonインターフェースとCLIでサポートしています。',
          },
          {
            q: 'Coqui TTSは今も保守されていますか',
            a: '元のcoqui-ai/TTSリポジトリは積極的に保守されていません — 企業Coqui AIが2023年12月に有料サービスを終了して以降、2024年8月から新しいコミットがありません。積極的に保守されているコミュニティフォークidiap/coqui-ai-TTSがIdiap研究所の下で開発を継続しており、PyPIにはcoqui-ttsパッケージとして公開され、2026年1月時点でもリリースが続いています。',
          },
          {
            q: 'Coqui TTSは無料ですか',
            a: 'はい、ツールキット自体には有料プランやライセンス料はありません。Coqui AIの以前の有料ホストサービスは2023年12月に終了し、いかなる価格でも利用できません。XTTS v2のようにツールキット上で動く一部の特定モデルには、そのモデルの重みと出力の商用利用を制限する独自の別ライセンス(CPML)があります。',
          },
          {
            q: 'coqui-ttsパッケージとTTSパッケージの違いは何ですか',
            a: 'TTSは元のPyPIパッケージ名で、2024年8月以降更新のない、保守されていないcoqui-ai/TTSリポジトリに紐づいています。coqui-ttsは積極的に保守されているフォークのパッケージ名で、Idiap研究所の下のidiap/coqui-ai-TTSリポジトリから公開され、2026年1月のv0.27.5を含む定期的なリリースがあります。更新を受け取るバージョンにはcoqui-ttsをインストールしてください。',
          },
          {
            q: 'Coqui TTSは音声クローニングに対応していますか',
            a: 'はい、ツールキットがロード・実行できるXTTS v2モデルを通じて対応しています。XTTS v2は、speaker_wav引数として渡された短い参照音声クリップから声をクローンします。XTTS v2自身のライセンスであるCoqui Public Model License(CPML)は非商用であり、ツールキットのMPL-2.0ライセンスとは別のものである点に注意してください。',
          },
          {
            q: 'なぜCoqui AIは閉鎖したのですか',
            a: 'Coqui TTSの開発元であるCoqui AIは、オープンソースの音声技術の上に持続可能なビジネスモデルを構築できず、2023年12月に有料ホストサービスの終了を発表し、サーバーは2023年12月11日にオフラインになりました。オープンソースのツールキット自体は利用可能なままで、開発はその後コミュニティフォークで継続されました。',
          },
          {
            q: 'Coqui TTSの最新リリースは何ですか',
            a: 'PyPIの登録情報によれば、積極的に保守されているcoqui-ttsパッケージの最新リリースはv0.27.5で、2026年1月26日に公開されました。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Coqui TTSは、開発元の企業が閉鎖した後にオープンソースインフラに何が起こるかを示す、実に有用なケーススタディです。元のリポジトリは2024年8月に静まり返りましたが、ソフトウェアが消えることはありませんでした — 研究機関が保守を引き継ぎ、パッケージ名を変更し、2026年まで継続してリリースを出し続けています。今日これを評価する誰にとっても、実践的な結論はシンプルです:元の`TTS`パッケージではなく`coqui-tts`をインストールし、ツールキットのMPL-2.0ライセンスが、実行できるXTTS v2モデルの非商用CPMLライセンスとは別物であることを理解してください。ツールキットとしての強みは、単一の用途において最速または最もシンプルであることではなく、モデルアーキテクチャ全体にわたる柔軟性にあります — そのためには、このレビューを速度重視のPromptQuorumによる[Piper](/power-local-llm/piper-tts-review)のカバレッジ、クローニングモデル自体に特化した[XTTS v2](/power-local-llm/xtts-v2-review)、あるいはエンジン全体の全体像をつかむための[ローカルTTSライセンスガイド](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)と組み合わせてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHubのidiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — 積極的に保守されているフォーク:README、ドキュメント、ライセンス、リリース履歴。',
          '[PyPIのcoqui-tts](https://pypi.org/project/coqui-tts/) — 現在のMPL-2.0ライセンスとバージョン履歴を含む公開パッケージメタデータ。',
          '[GitHubのcoqui-ai/TTS](https://github.com/coqui-ai/TTS) — 今は保守されていない元のリポジトリ(MPL-2.0ライセンス)。',
          '[Hugging FaceのXTTS v2](https://huggingface.co/coqui/XTTS-v2) — 音声クローニングモデルのモデルカードとCPMLライセンス本文。',
          '[Idiap研究所](https://www.idiap.ch/) — コミュニティフォークを保守するスイスの研究機関。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルTTSと音声クローニングのライセンス:Piper、XTTS v2、F5-TTS、Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 主要なローカルTTSエンジン全体を扱うライセンスの詳細比較。',
          '[XTTS v2レビュー](/power-local-llm/xtts-v2-review) — このツールキットが実行できる音声クローニングモデルの完全な内訳。',
          '[Piper TTSレビュー](/power-local-llm/piper-tts-review) — 同じ深さでレビューした、高速でCPU専用のローカルTTSの代替案。',
          '[ElevenLabs対Piper対XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — セルフホストするかどうかを決める読者向けの、クラウド対ローカルの比較。',
          '[Bark TTSレビュー](/power-local-llm/bark-tts-review) — 同じ深さでレビューした、表現力豊かで非音声のローカルTTSモデル。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTSレビュー(2026):コミュニティが保守する音声クローニング・ツールキット',
      description:
        'Coqui TTSレビュー:Mozilla TTSから派生したオープンソースのローカル音声クローニング・ツールキット。Coqui AIは2023年に閉鎖、積極的に保守されているフォークはidiap/coqui-ai-TTS。歴史、インストール手順、XTTS v2との関係、MPL-2.0ライセンス、正直な限界。',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'ja',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルの自己ホスト型音声合成ツールキットを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Idiap研究所' },
        { '@type': 'Thing', name: '音声合成' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTSレビュー(2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-pt.webp',
    title: 'Coqui TTS: análise (2026) — o kit de clonagem de voz mantido pela comunidade',
    seoTitle: 'Coqui TTS: análise 2026 — kit TTS comunitário',
    intro:
      'Coqui TTS é um kit de código aberto para síntese de voz e clonagem de voz local, descendente do projeto TTS da Mozilla, criado originalmente pela startup Coqui AI, que encerrou seus serviços pagos em dezembro de 2023. O repositório original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), não recebe novos commits desde agosto de 2024 e não é mais mantido ativamente, embora continue disponível publicamente sob sua licença MPL-2.0. O desenvolvimento continua em um fork da comunidade, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), mantido pelo [Instituto de Pesquisa Idiap](https://www.idiap.ch/) e publicado no PyPI como o pacote `coqui-tts`. Esta análise cobre essa história, a relação do kit com o modelo de clonagem de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2), comandos reais de instalação e uso, sua licença MPL-2.0, e onde essa transição de manutenção realmente importa em 2026.',
    metaDescription:
      'Coqui TTS, análise: o kit de código aberto de clonagem de voz local descendente do Mozilla TTS. A Coqui AI fechou em 2023; o fork mantido ativamente é idiap/coqui-ai-TTS. História, instalação, relação com XTTS v2, licença MPL-2.0 e limites honestos.',
    twitterDescription:
      'Coqui TTS, análise 2026: o kit de clonagem de voz local que a Coqui AI construiu antes de fechar em 2023 — hoje mantido por um fork comunitário no Instituto Idiap. Comandos reais, sua ligação com o XTTS v2 e o que mudou após o fechamento.',
    audience:
      'Desenvolvedores e pesquisadores que querem um kit de síntese de voz flexível e auto-hospedado com suporte a clonagem de voz, e precisam entender seu status de manutenção após o fechamento da empresa antes de construir sobre ele.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS análise',
    targetKeywords: [
      'coqui tts análise',
      'coqui tts',
      'coqui tts instalação',
      'coqui tts python',
      'coqui tts licença',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'coqui tts ainda é mantido',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS é um kit de código aberto de síntese de voz e clonagem de voz local, criado originalmente pela startup Coqui AI, que encerrou seus serviços pagos em dezembro de 2023.** O repositório original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), não é atualizado desde agosto de 2024. Instale em vez disso o fork da comunidade mantido ativamente: `pip install coqui-tts`, que vem de [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), mantido pelo [Instituto de Pesquisa Idiap](https://www.idiap.ch/). O kit é licenciado sob MPL-2.0 e é o software que executa o modelo de clonagem de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2) — o kit e o modelo são coisas separadas com licenças separadas (veja a seção [Licença e custo](#license-cost)). Para uma comparação completa de licenças entre motores de TTS local, veja o [guia de licenças de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) do PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o Coqui TTS e ele ainda é mantido?',
        answer:
          'O Coqui TTS vale a pena se você quer um kit de síntese de voz local flexível que suporte várias arquiteturas de modelo (VITS, Tacotron2 e o modelo de clonagem de voz XTTS v2) com ampla cobertura de idiomas. Ele descende do projeto de pesquisa TTS da Mozilla e foi desenvolvido pela startup Coqui AI. A empresa encerrou seus serviços pagos em dezembro de 2023, e seu repositório original, coqui-ai/TTS, não recebe novos commits desde agosto de 2024 — não é mais mantido ativamente, embora continue disponível para download sob sua licença MPL-2.0. Sim, existe uma versão mantida: o desenvolvimento continua em um fork da comunidade, idiap/coqui-ai-TTS, mantido pelo Instituto de Pesquisa Idiap e publicado no PyPI como o pacote coqui-tts, com versões tão recentes quanto janeiro de 2026. Escolha o Piper em vez disso se você quer a síntese somente-CPU mais rápida sem interesse em clonagem de voz; escolha o Coqui TTS especificamente se quer executar o XTTS v2 ou outros modelos com capacidade de clonagem através de um único kit atualizado ativamente.',
        bullets: [
          'Descende do projeto de pesquisa TTS da Mozilla; desenvolvido pela startup Coqui AI, fundada em 2021 por ex-engenheiros da Mozilla TTS.',
          'A Coqui AI encerrou seus serviços pagos em dezembro de 2023; o repositório original coqui-ai/TTS não recebe novos commits desde agosto de 2024.',
          'Fork da comunidade mantido ativamente: idiap/coqui-ai-TTS, mantido pelo Instituto de Pesquisa Idiap, publicado no PyPI como coqui-tts.',
          'Licença: MPL-2.0 para o kit em si. O modelo XTTS v2 que roda nele tem uma licença separada e não comercial (CPML) — o kit e o modelo não compartilham licença.',
          'Gratuito, sem plano pago; funciona em CPU, com aceleração por GPU recomendada para modelos maiores como o XTTS v2.',
          'Última versão do pacote: coqui-tts v0.27.5, publicada em 26 de janeiro de 2026, segundo o PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'História: da Mozilla TTS a um fork comunitário', anchor: 'history' },
      { label: 'O que o Coqui TTS realmente faz', anchor: 'what-it-does' },
      { label: 'Coqui TTS e XTTS v2: como se relacionam', anchor: 'xtts-relationship' },
      { label: 'Instalar e executar o Coqui TTS: passo a passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos reais de uso', anchor: 'usage-examples' },
      { label: 'Licença e custo', anchor: 'license-cost' },
      { label: 'Para que o Coqui TTS não é bom', anchor: 'limitations' },
      { label: 'Alternativas ao Coqui TTS', anchor: 'alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Coqui TTS é um kit de código aberto de síntese de voz e clonagem de voz local descendente do projeto TTS da Mozilla, cuja empresa original, Coqui AI, encerrou seus serviços pagos em dezembro de 2023, deixando o repositório original sem manutenção desde agosto de 2024 — mas um fork da comunidade mantido ativamente, idiap/coqui-ai-TTS, continua o desenvolvimento sob o Instituto de Pesquisa Idiap.',
          },
          {
            type: 'plain-terms',
            text: 'É um programa que você instala com `pip install` e que pode transformar texto em voz usando vários modelos de IA diferentes, incluindo um modelo de clonagem de voz chamado XTTS v2 — a empresa que o criou fechou, mas um instituto de pesquisa mantém o software atualizado hoje.',
          },
        ],
        items: [
          'Descende do projeto de pesquisa TTS da Mozilla; desenvolvido pela startup Coqui AI, fundada em 2021 por ex-engenheiros da Mozilla TTS.',
          'A Coqui AI encerrou seus serviços de nuvem pagos em dezembro de 2023; o repositório original do GitHub coqui-ai/TTS não recebe novos commits desde agosto de 2024.',
          'Fork mantido ativamente: idiap/coqui-ai-TTS, pelo Instituto de Pesquisa Idiap, publicado no PyPI como `coqui-tts`.',
          'Licença: MPL-2.0 para o kit. O modelo XTTS v2 que ele pode executar está sob a CPML não comercial, separadamente — não confunda os dois.',
          'Gratuito, sem plano pago; roda em CPU, com GPU recomendada para modelos de clonagem de voz maiores.',
          'Última versão do pacote: coqui-tts v0.27.5, publicada em 26 de janeiro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Instale `coqui-tts` (o fork mantido), não o nome de pacote original `TTS` do repositório coqui-ai/TTS agora sem manutenção, se você quer uma versão que recebe atualizações. Veja a seção Instalar e executar abaixo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: da Mozilla TTS a um fork comunitário',
        content: [
          '**O Coqui TTS remonta ao [projeto TTS da Mozilla](https://github.com/mozilla/TTS)**, um esforço de pesquisa interno da Mozilla em tecnologia de voz de código aberto. Quando a Mozilla dissolveu esse grupo de pesquisa em 2021, vários de seus engenheiros — incluindo Eren Gölge, Kelly Davis, Josh Meyer e Reuben Morais — fundaram a startup Coqui AI para continuar o trabalho como uma empresa independente, lançando tanto um kit de texto para voz (Coqui TTS) quanto um kit de voz para texto (Coqui STT).',
          '**A Coqui AI levantou 3,3 milhões de dólares em uma rodada seed em março de 2023** e oferecia tanto um kit de código aberto quanto serviços de nuvem pagos, incluindo acesso hospedado ao seu modelo de clonagem de voz, XTTS. A empresa não conseguiu encontrar um modelo de negócio sustentável sobre software de código aberto, e anunciou o encerramento de seus serviços pagos em dezembro de 2023, com seus servidores saindo do ar em 11 de dezembro de 2023.',
          '**O repositório original, [coqui-ai/TTS](https://github.com/coqui-ai/TTS), permanece publicamente disponível no GitHub** sob sua licença MPL-2.0, mas não recebe novos commits desde agosto de 2024, e o GitHub não o mostra como formalmente arquivado — na prática, ele não recebe desenvolvimento ativo nem correções de bugs.',
          '**Um fork comunitário, [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS), continua o desenvolvimento.** Ele é mantido pelo [Instituto de Pesquisa Idiap](https://www.idiap.ch/), um instituto de pesquisa suíço, e publicado no PyPI sob o nome de pacote `coqui-tts` (distinto do nome de pacote original `TTS`). Seu README declara explicitamente que é um "fork do repositório original, sem manutenção", e seu histórico de versões mostra atualizações contínuas, incluindo uma versão v0.27.0 que adicionou um cache de clonagem de voz e uma versão v0.27.5 em 26 de janeiro de 2026.',
        ],
        faqs: [
          {
            q: 'Quem criou o Coqui TTS?',
            a: 'O Coqui TTS foi criado pela startup Coqui AI, fundada em 2021 por ex-engenheiros do projeto de pesquisa TTS da Mozilla, incluindo Eren Gölge, Kelly Davis, Josh Meyer e Reuben Morais. Após o encerramento dos serviços pagos da Coqui AI em dezembro de 2023, o desenvolvimento continuou em um fork comunitário mantido pelo Instituto de Pesquisa Idiap.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o Coqui TTS realmente faz',
        content: [
          'O Coqui TTS é um kit, não um único modelo — ele fornece uma interface Python unificada, uma CLI e um pipeline de treinamento para executar (e, historicamente, treinar) várias arquiteturas diferentes de modelos de texto para voz.',
        ],
        items: [
          '**Interface multi-modelo.** Uma única classe Python `TTS()` carrega e executa diferentes arquiteturas de modelo, incluindo modelos VITS de um ou vários falantes, modelos baseados em Tacotron2 e o modelo de clonagem de voz [XTTS v2](https://huggingface.co/coqui/XTTS-v2), sem alterar o código da aplicação ao redor.',
          '**Síntese via linha de comando.** O comando CLI `tts` sintetiza voz diretamente pelo terminal, listando todos os modelos pré-treinados disponíveis com `tts --list_models`.',
          '**Clonagem de voz via XTTS v2.** Passar um argumento `speaker_wav` para um modelo XTTS v2 carregado clona uma voz a partir de um curto trecho de áudio de referência, gerando voz nessa voz clonada nos idiomas que o XTTS v2 suporta.',
          '**Ampla biblioteca de modelos pré-treinados.** O kit dá acesso a modelos pré-treinados descritos como cobrindo mais de 1.100 idiomas via os modelos massivamente multilíngues baseados em Fairseq subjacentes, além de modelos curados de maior qualidade para idiomas específicos.',
          '**Treinamento e ajuste fino de modelos.** Além de executar modelos pré-treinados, o kit inclui scripts de treinamento e utilitários de análise de datasets para construir ou ajustar um modelo de voz personalizado — historicamente uma de suas funcionalidades mais usadas antes do encerramento do serviço de treinamento hospedado da Coqui AI.',
          '**Inferência em streaming para o XTTS v2.** O kit documenta síntese em streaming de baixa latência com o XTTS v2 (citada pela documentação do fork mantido como latência inferior a 200ms até o primeiro áudio), útil para aplicações de voz interativas.',
        ],
        note: 'O Coqui TTS é o software que executa modelos; o XTTS v2 é um modelo específico que ele pode executar. Ambos são tratados juntos aqui porque a maioria dos leitores avaliando o Coqui TTS em 2026 está especificamente interessada em executar o XTTS v2 através dele — veja a seção dedicada à relação entre eles abaixo.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS e XTTS v2: como se relacionam',
        content: [
          '**Coqui TTS (o kit) e XTTS v2 (o modelo) são duas coisas diferentes com duas licenças diferentes, e confundi-los é um erro comum de licenciamento.** O kit Coqui TTS — o pacote Python, a CLI e o código de treinamento — é licenciado sob MPL-2.0, uma licença permissiva que permite uso comercial com condições de divulgação de código sobre modificações no kit. O XTTS v2 é um modelo pré-treinado específico cujos pesos são distribuídos sob a Coqui Public Model License (CPML), uma licença não comercial, separada da licença MPL-2.0 do kit.',
          '**Na prática, isso significa que você pode usar o kit Coqui TTS comercialmente com modelos de licença permissiva** (modelos VITS ou Tacotron2 treinados sob licenças compatíveis), enquanto a combinação específica de "kit Coqui TTS executando o modelo XTTS v2" herda a restrição não comercial do XTTS v2 para os pesos e saídas desse modelo. Executar um modelo diferente, de licença permissiva, através do mesmo kit não carrega essa restrição.',
          '**O pacote `coqui-tts` documenta diretamente o uso do XTTS v2**, com o modelo carregado como `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`, já que o kit é a forma principal suportada de executar o XTTS v2 fora de usar diretamente os pesos do modelo através de outra pilha de inferência. Veja a [análise dedicada do XTTS v2](/power-local-llm/xtts-v2-review) do PromptQuorum para uma análise completa da licença e das capacidades desse modelo.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar e executar o Coqui TTS: passo a passo',
        content: 'Este guia instala o pacote `coqui-tts` mantido ativamente e executa uma primeira síntese, usando a sintaxe documentada no próprio README do fork mantido.',
        numberedItems: [
          {
            title: 'Instale o pacote mantido.',
            whyItMatters: 'Execute `pip install coqui-tts` (ou `uv pip install coqui-tts` se usar uv) em um ambiente Python. Instale especificamente o pacote `coqui-tts` — não o nome de pacote mais antigo `TTS`, que aponta para o repositório original agora sem manutenção.',
          },
          {
            title: 'Liste os modelos pré-treinados disponíveis.',
            whyItMatters: 'Execute `tts --list_models` para ver o catálogo completo de modelos pré-treinados disponíveis para download, organizados por idioma e arquitetura (VITS, Tacotron2, XTTS e outros).',
          },
          {
            title: 'Sintetize voz pela linha de comando.',
            whyItMatters: 'Execute `tts --text "Hello world" --out_path output.wav` para sintetizar com o modelo padrão, ou adicione `--model_name <modelo>` para escolher um específico da lista.',
          },
          {
            title: '(Opcional) Use a API Python para clonagem de voz com o XTTS v2.',
            whyItMatters: 'Carregue o modelo com `TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`, depois chame `.tts_to_file()` com um argumento `speaker_wav` apontando para um curto trecho de áudio de referência e um argumento `language` para clonar uma voz.',
          },
          {
            title: '(Opcional) Ative a aceleração por GPU.',
            whyItMatters: 'Passe `gpu=True` ao construtor `TTS()`, ou chame `.to("cuda")` no objeto de modelo carregado, para executar a inferência em uma GPU NVIDIA — recomendado para o XTTS v2, que é significativamente mais lento apenas com CPU.',
          },
          {
            title: '(Opcional) Aceite a licença CPML de forma não interativa para o XTTS v2.',
            whyItMatters: 'Carregar o XTTS v2 pela primeira vez solicita uma etapa interativa de aceitação da CPML. Defina a variável de ambiente `COQUI_TOS_AGREED=1` para aceitá-la de forma não interativa, necessária para uso não supervisionado em containers Docker ou pipelines de CI.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos reais de uso',
        content: [
          'Além do guia básico de instalação acima, estes são padrões comuns de uso real da própria documentação do fork mantido.',
        ],
        codeBlock: `# Linha de comando: listar modelos pré-treinados disponíveis
tts --list_models

# Linha de comando: sintetizar com o modelo padrão
tts --text "Hello world" --out_path output.wav

# Linha de comando: sintetizar com um modelo específico
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# API Python: síntese básica
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# API Python: clonagem de voz com XTTS v2 (aceite a CPML de forma não interativa primeiro)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# API Python: listar falantes e idiomas disponíveis em um modelo carregado
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'A variável de ambiente `COQUI_TOS_AGREED=1` e os argumentos `speaker_wav`/`language` estão documentados no README e na documentação da API do fork mantido. Verifique a documentação atual antes de implantar, já que a API do kit mudou entre versões principais (o pacote `TTS` original e o fork `coqui-tts` mantido compartilham o mesmo caminho de importação `TTS.api.TTS` no momento em que esta análise foi verificada).',
        items: [
          '**Aceitação não interativa da CPML** para ambientes automatizados: defina `COQUI_TOS_AGREED=1` antes do primeiro carregamento do XTTS v2, para que builds do Docker e pipelines de CI não fiquem travados em um prompt interativo.',
          '**Introspecção de falantes e idiomas**: após carregar um modelo multi-falante ou multilíngue, `tts.speakers` e `tts.languages` listam o que o modelo carregado realmente suporta — útil para validar a entrada antes da síntese.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e custo',
        content: [
          '**O kit Coqui TTS é licenciado sob MPL-2.0 (Mozilla Public License 2.0)**, confirmado pelos metadados publicados do pacote `coqui-tts` no [PyPI](https://pypi.org/project/coqui-tts/) e pelo arquivo de licença no [repositório idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS). A MPL-2.0 é uma licença permissiva com condições: você pode usar o kit comercialmente, mas se modificar e distribuir os próprios arquivos-fonte do kit, deve publicar esses arquivos modificados específicos também sob a MPL-2.0. Usar o kit como dependência não modificada não coloca o código da sua própria aplicação sob a MPL-2.0.',
          '**O modelo XTTS v2 é licenciado separadamente, sob a Coqui Public Model License (CPML), que é não comercial** — isso se aplica aos pesos do modelo e suas saídas de áudio geradas, não ao código do kit Coqui TTS que os executa. Veja a [análise do XTTS v2](/power-local-llm/xtts-v2-review) do PromptQuorum para a análise completa dessa licença.',
          '**Não há plano pago, assinatura ou taxa de licença para o kit Coqui TTS em si.** Os serviços hospedados pagos da Coqui AI encerraram em dezembro de 2023 e não estão disponíveis a nenhum preço; a única forma de usar o Coqui TTS hoje é auto-hospedado, usando o pacote original sem manutenção ou o fork `coqui-tts` mantido ativamente.',
        ],
        faqs: [
          {
            q: 'Que licença o Coqui TTS usa?',
            a: 'O kit Coqui TTS em si é licenciado sob MPL-2.0, que permite uso comercial com a condição de que modificações nos próprios arquivos-fonte do kit sejam publicadas sob a mesma licença. Isso é separado da licença de qualquer modelo específico que ele execute — o modelo XTTS v2, por exemplo, está sob a Coqui Public Model License (CPML) não comercial, que se aplica aos pesos e saídas do modelo, não ao código do kit.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o Coqui TTS não é bom',
        content: [
          'O Coqui TTS é um kit flexível multi-modelo, não a opção mais rápida ou mais simples para todo caso de uso. É a ferramenta errada para as seguintes situações:',
        ],
        items: [
          '**Construir sobre o repositório original sem manutenção.** Se você executar `pip install TTS` (o nome de pacote original) em vez de `pip install coqui-tts` (o fork mantido), está construindo sobre código que não recebe atualizações desde agosto de 2024 — verifique a qual pacote um tutorial ou dependência realmente se refere antes de confiar nele.',
          '**A síntese somente-CPU mais rápida possível.** Se sua prioridade é voz em tempo real em hardware modesto como um Raspberry Pi sem GPU, o [Piper](/power-local-llm/piper-tts-review) é construído especificamente para isso e mais simples de implantar; os modelos maiores do Coqui TTS, especialmente o XTTS v2, são notavelmente mais lentos apenas com CPU.',
          '**Clonagem de voz comercial sem uma verificação de licença separada.** Executar o XTTS v2 através do kit Coqui TTS ainda carrega a própria restrição não comercial do XTTS v2 (CPML) sobre os pesos e saídas do modelo — a licença MPL-2.0 do kit não sobrepõe isso. Veja a seção Licença e custo acima.',
          '**Suporte corporativo garantido a longo prazo.** A empresa Coqui AI não existe mais desde dezembro de 2023. O fork atual é mantido por um instituto de pesquisa em base comunitária, um modelo de manutenção diferente de uma empresa financiada com contrato de suporte — considere isso para decisões sobre infraestrutura de produção crítica.',
          '**Uma API única e estável entre versões.** Como o desenvolvimento se moveu entre um original sem manutenção e um fork ativamente desenvolvido, alguns tutoriais, respostas do Stack Overflow e posts de blog online referenciam uma superfície de API mais antiga ou o nome de pacote original — verifique com a documentação atual do `coqui-tts` em vez de um resultado de busca mais antigo.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao Coqui TTS',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor para', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Piper](/power-local-llm/piper-tts-review)',
            'Melhor para': 'A síntese somente-CPU mais rápida, sem clonagem de voz, tempo real em uma Raspberry Pi',
            'Licença': 'GPL-3.0-or-later',
          },
          {
            'Ferramenta': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Melhor para': 'O próprio modelo de clonagem de voz, se você só precisa do XTTS v2 e não do kit mais amplo',
            'Licença': 'CPML (não comercial)',
          },
          {
            'Ferramenta': '[Bark](/power-local-llm/bark-tts-review)',
            'Melhor para': 'Áudio não vocal expressivo — risadas, suspiros, sons ambientes',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Melhor para': 'A melhor qualidade de narração natural em inglês (sem clonagem de voz)',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[ElevenLabs](https://elevenlabs.io)',
            'Melhor para': 'API de nuvem gerenciada para equipes que preferem não se auto-hospedar, com clonagem de voz comercial',
            'Licença': 'Proprietária (API de nuvem paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o Coqui TTS?',
            a: 'Coqui TTS é um kit de código aberto de síntese de voz e clonagem de voz local descendente do projeto de pesquisa TTS da Mozilla, criado originalmente pela startup Coqui AI. Ele suporta várias arquiteturas de modelo, incluindo o modelo de clonagem de voz XTTS v2, através de uma única interface Python e CLI.',
          },
          {
            q: 'O Coqui TTS ainda é mantido?',
            a: 'O repositório original coqui-ai/TTS não é mais mantido ativamente — não recebe novos commits desde agosto de 2024, após a empresa Coqui AI encerrar seus serviços pagos em dezembro de 2023. Um fork da comunidade mantido ativamente, idiap/coqui-ai-TTS, continua o desenvolvimento sob o Instituto de Pesquisa Idiap e é publicado no PyPI como o pacote coqui-tts, com versões tão recentes quanto janeiro de 2026.',
          },
          {
            q: 'O Coqui TTS é gratuito?',
            a: 'Sim, o kit em si não tem plano pago nem taxa de licença. Os antigos serviços hospedados pagos da Coqui AI encerraram em dezembro de 2023 e não estão disponíveis a nenhum preço. Alguns modelos específicos que rodam sobre o kit, como o XTTS v2, têm sua própria licença separada (CPML) que restringe o uso comercial dos pesos e saídas desse modelo.',
          },
          {
            q: 'Qual é a diferença entre os pacotes coqui-tts e TTS?',
            a: 'TTS é o nome de pacote original do PyPI, ligado ao repositório coqui-ai/TTS sem manutenção e sem atualizações desde agosto de 2024. coqui-tts é o nome de pacote do fork mantido ativamente, publicado a partir do repositório idiap/coqui-ai-TTS sob o Instituto de Pesquisa Idiap, com versões regulares incluindo a v0.27.5 em janeiro de 2026. Instale coqui-tts para uma versão que recebe atualizações.',
          },
          {
            q: 'O Coqui TTS suporta clonagem de voz?',
            a: 'Sim, através do modelo XTTS v2, que o kit pode carregar e executar. O XTTS v2 clona uma voz a partir de um curto trecho de áudio de referência passado como argumento speaker_wav. Observe que a própria licença do XTTS v2, a Coqui Public Model License (CPML), é não comercial, separada da licença MPL-2.0 do kit.',
          },
          {
            q: 'Por que a Coqui AI fechou?',
            a: 'A Coqui AI, a empresa por trás do Coqui TTS, anunciou o encerramento de seus serviços hospedados pagos em dezembro de 2023, com seus servidores saindo do ar em 11 de dezembro de 2023, após lutar para construir um modelo de negócio sustentável sobre tecnologia de voz de código aberto. O kit de código aberto em si continuou disponível, e o desenvolvimento continuou depois em um fork comunitário.',
          },
          {
            q: 'Qual é a última versão do Coqui TTS?',
            a: 'A última versão do pacote coqui-tts mantido ativamente é v0.27.5, publicada em 26 de janeiro de 2026, segundo seu registro no PyPI.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Coqui TTS é um estudo de caso genuinamente útil sobre o que acontece com uma infraestrutura de código aberto após o fechamento da empresa por trás dela: o repositório original ficou silencioso em agosto de 2024, mas o software não desapareceu — um instituto de pesquisa assumiu a manutenção, renomeou o pacote e continuou lançando versões até 2026. Para quem o avalia hoje, a conclusão prática é simples: instale `coqui-tts`, não o pacote `TTS` original, e entenda que a licença MPL-2.0 do kit é separada da licença não comercial CPML do modelo XTTS v2 que ele pode executar. Como kit, sua força está na flexibilidade entre arquiteturas de modelo, em vez de ser a opção mais rápida ou mais simples para qualquer caso de uso específico — para isso, combine esta análise com a cobertura do PromptQuorum sobre o [Piper](/power-local-llm/piper-tts-review) para velocidade, o [XTTS v2](/power-local-llm/xtts-v2-review) especificamente para o modelo de clonagem, ou o [guia de licenças de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) para o panorama completo entre motores.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[idiap/coqui-ai-TTS no GitHub](https://github.com/idiap/coqui-ai-TTS) — o fork mantido ativamente: README, documentação, licença e histórico de versões.',
          '[coqui-tts no PyPI](https://pypi.org/project/coqui-tts/) — metadados publicados do pacote, incluindo a licença MPL-2.0 atual e o histórico de versões.',
          '[coqui-ai/TTS no GitHub](https://github.com/coqui-ai/TTS) — o repositório original, agora sem manutenção (licença MPL-2.0).',
          '[XTTS v2 no Hugging Face](https://huggingface.co/coqui/XTTS-v2) — a ficha do modelo e o texto da licença CPML do modelo de clonagem de voz.',
          '[Instituto de Pesquisa Idiap](https://www.idiap.ch/) — o instituto de pesquisa suíço que mantém o fork comunitário.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Licenças de TTS local e clonagem de voz: Piper, XTTS v2, F5-TTS e Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — a análise aprofundada de licenças em todos os principais motores de TTS local.',
          '[Análise do XTTS v2](/power-local-llm/xtts-v2-review) — uma análise completa do modelo de clonagem de voz que este kit pode executar.',
          '[Análise do Piper TTS](/power-local-llm/piper-tts-review) — a alternativa de TTS local rápida e somente-CPU, analisada com a mesma profundidade.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — a comparação nuvem versus local para leitores decidindo se devem se auto-hospedar.',
          '[Análise do Bark TTS](/power-local-llm/bark-tts-review) — o modelo de TTS local de áudio expressivo e não vocal, analisado com a mesma profundidade.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS: análise (2026) — o kit de clonagem de voz mantido pela comunidade',
      description:
        'Coqui TTS, análise: o kit de código aberto de clonagem de voz local descendente do Mozilla TTS. A Coqui AI fechou em 2023; o fork mantido ativamente é idiap/coqui-ai-TTS. História, instalação, relação com XTTS v2, licença MPL-2.0 e limites honestos.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando kits de texto para voz locais e auto-hospedados' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Instituto de Pesquisa Idiap' },
        { '@type': 'Thing', name: 'Texto para voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS: análise (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-ar.webp',
    title: 'مراجعة Coqui TTS (2026): مجموعة أدوات استنساخ الصوت التي تصونها المجتمع',
    seoTitle: 'مراجعة Coqui TTS 2026: أدوات TTS مجتمعية',
    intro:
      'Coqui TTS هي مجموعة أدوات مفتوحة المصدر لتحويل النص إلى كلام واستنساخ الصوت محليًا، منحدرة من مشروع Mozilla TTS، طوّرتها في الأصل شركة Coqui AI الناشئة التي أغلقت خدماتها المدفوعة في ديسمبر 2023. المستودع الأصلي، [coqui-ai/TTS](https://github.com/coqui-ai/TTS)، لم يتلقَّ أي التزامات (commits) جديدة منذ أغسطس 2024 ولم يعد يُصان بنشاط، رغم أنه لا يزال متاحًا للجمهور بموجب ترخيص MPL-2.0. يستمر التطوير في نسخة مجتمعية متفرعة (fork)، [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)، يصونها [معهد Idiap للأبحاث](https://www.idiap.ch/) وتُنشر على PyPI باسم حزمة `coqui-tts`. تتناول هذه المراجعة هذا التاريخ، وعلاقة مجموعة الأدوات بنموذج استنساخ الصوت [XTTS v2](https://huggingface.co/coqui/XTTS-v2)، وأوامر تثبيت واستخدام حقيقية، وترخيص MPL-2.0، والنقاط التي يهم فيها هذا الانتقال في الصيانة فعليًا في عام 2026.',
    metaDescription:
      'مراجعة Coqui TTS: مجموعة أدوات مفتوحة المصدر لاستنساخ الصوت محليًا منحدرة من Mozilla TTS. أغلقت Coqui AI في 2023؛ والنسخة المُصانة فعليًا هي idiap/coqui-ai-TTS. التاريخ، خطوات التثبيت، العلاقة بـXTTS v2، ترخيص MPL-2.0، وحدود صادقة.',
    twitterDescription:
      'مراجعة Coqui TTS 2026: مجموعة أدوات استنساخ الصوت المحلية التي بنتها Coqui AI قبل إغلاقها في 2023 — يصونها اليوم فرع مجتمعي في معهد Idiap. أوامر حقيقية، وارتباطها بـXTTS v2، وما تغيّر بعد الإغلاق.',
    audience:
      'المطورون والباحثون الذين يريدون مجموعة أدوات مرنة لتحويل النص إلى كلام مستضافة ذاتيًا مع دعم استنساخ الصوت، ويحتاجون إلى فهم حالة الصيانة بعد إغلاق الشركة قبل البناء عليها.',
    readTime: '12 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة Coqui TTS',
    targetKeywords: [
      'مراجعة coqui tts',
      'coqui tts',
      'تثبيت coqui tts',
      'coqui tts python',
      'ترخيص coqui tts',
      'idiap coqui-ai-tts',
      'coqui tts مقابل xtts',
      'هل coqui tts لا يزال يُصان',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS هي مجموعة أدوات مفتوحة المصدر لتحويل النص إلى كلام واستنساخ الصوت محليًا، طوّرتها في الأصل شركة Coqui AI الناشئة التي أغلقت خدماتها المدفوعة في ديسمبر 2023.** المستودع الأصلي، [coqui-ai/TTS](https://github.com/coqui-ai/TTS)، لم يُحدَّث منذ أغسطس 2024. ثبّت بدلًا منه النسخة المجتمعية المُصانة فعليًا: `pip install coqui-tts`، الآتية من [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)، ويصونها [معهد Idiap للأبحاث](https://www.idiap.ch/). مجموعة الأدوات مرخّصة بموجب MPL-2.0، وهي البرمجية التي تُشغّل نموذج استنساخ الصوت [XTTS v2](https://huggingface.co/coqui/XTTS-v2) — مجموعة الأدوات والنموذج شيئان منفصلان بترخيصين منفصلين (انظر قسم [الترخيص والتكلفة](#license-cost)). للاطلاع على مقارنة شاملة للتراخيص بين محركات TTS المحلية، راجع [دليل تراخيص TTS المحلي](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو Coqui TTS، وهل لا يزال يُصان؟',
        answer:
          'يستحق Coqui TTS الاستخدام إذا كنت تريد مجموعة أدوات مرنة لتحويل النص إلى كلام محليًا تدعم عدة معماريات نماذج (VITS وTacotron2 ونموذج استنساخ الصوت XTTS v2) مع تغطية لغوية واسعة. ينحدر من مشروع أبحاث Mozilla TTS، وطوّرته شركة Coqui AI الناشئة. أغلقت الشركة خدماتها المدفوعة في ديسمبر 2023، ومستودعها الأصلي، coqui-ai/TTS، لم يتلقَّ التزامات جديدة منذ أغسطس 2024 — لم يعد يُصان بنشاط، لكنه لا يزال قابلًا للتنزيل بموجب ترخيص MPL-2.0. نعم، توجد نسخة مُصانة: يستمر التطوير في فرع مجتمعي، idiap/coqui-ai-TTS، يصونه معهد Idiap للأبحاث ويُنشر على PyPI باسم حزمة coqui-tts، مع إصدارات حديثة حتى يناير 2026. اختر Piper بدلًا منه إذا كنت تريد أسرع تحويل نص إلى كلام يعتمد على المعالج فقط دون اهتمام باستنساخ الصوت؛ واختر Coqui TTS تحديدًا إذا أردت تشغيل XTTS v2 أو نماذج أخرى قادرة على الاستنساخ عبر مجموعة أدوات واحدة تُحدَّث بنشاط.',
        bullets: [
          'ينحدر من مشروع أبحاث Mozilla TTS؛ طوّرته شركة Coqui AI الناشئة، التي أسسها عام 2021 مهندسون سابقون في Mozilla TTS.',
          'أغلقت Coqui AI خدماتها المدفوعة في ديسمبر 2023؛ ومستودع coqui-ai/TTS الأصلي لم يتلقَّ التزامات جديدة منذ أغسطس 2024.',
          'فرع مجتمعي مُصان فعليًا: idiap/coqui-ai-TTS، يصونه معهد Idiap للأبحاث، ويُنشر على PyPI باسم coqui-tts.',
          'الترخيص: MPL-2.0 لمجموعة الأدوات نفسها. نموذج XTTS v2 الذي يعمل عليها له ترخيص منفصل وغير تجاري (CPML) — مجموعة الأدوات والنموذج لا يشتركان في الترخيص.',
          'مجاني، بلا خطة مدفوعة؛ يدعم الاستدلال على المعالج (CPU) مع التوصية بتسريع GPU للنماذج الأكبر مثل XTTS v2.',
          'أحدث إصدار للحزمة: coqui-tts v0.27.5، صدر في 26 يناير 2026، حسب PyPI.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: من Mozilla TTS إلى فرع مجتمعي', anchor: 'history' },
      { label: 'ما الذي يفعله Coqui TTS فعليًا', anchor: 'what-it-does' },
      { label: 'Coqui TTS وXTTS v2: العلاقة بينهما', anchor: 'xtts-relationship' },
      { label: 'تثبيت Coqui TTS وتشغيله: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الترخيص والتكلفة', anchor: 'license-cost' },
      { label: 'فيما لا يصلح Coqui TTS', anchor: 'limitations' },
      { label: 'بدائل Coqui TTS', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الملخص',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Coqui TTS مجموعة أدوات مفتوحة المصدر لتحويل النص إلى كلام واستنساخ الصوت محليًا، منحدرة من مشروع Mozilla TTS؛ أغلقت الشركة الأصلية، Coqui AI، خدماتها المدفوعة في ديسمبر 2023، تاركةً المستودع الأصلي دون صيانة منذ أغسطس 2024 — لكن فرعًا مجتمعيًا مُصانًا فعليًا، idiap/coqui-ai-TTS، يواصل التطوير تحت معهد Idiap للأبحاث.',
          },
          {
            type: 'plain-terms',
            text: 'هو برنامج تُثبّته عبر `pip install` ويمكنه تحويل النص إلى كلام باستخدام عدة نماذج ذكاء اصطناعي مختلفة، من بينها نموذج استنساخ صوت يُسمى XTTS v2 — أغلقت الشركة التي أنشأته، لكن معهد أبحاث يحافظ اليوم على تحديث البرمجية.',
          },
        ],
        items: [
          'ينحدر من مشروع أبحاث Mozilla TTS؛ طوّرته شركة Coqui AI الناشئة، التي أسسها عام 2021 مهندسون سابقون في Mozilla TTS.',
          'أغلقت Coqui AI خدماتها السحابية المدفوعة في ديسمبر 2023؛ ومستودع GitHub الأصلي coqui-ai/TTS لم يتلقَّ التزامات جديدة منذ أغسطس 2024.',
          'فرع مُصان فعليًا: idiap/coqui-ai-TTS، من معهد Idiap للأبحاث، يُنشر على PyPI باسم `coqui-tts`.',
          'الترخيص: MPL-2.0 لمجموعة الأدوات. نموذج XTTS v2 القابل للتشغيل عليها مرخّص بشكل منفصل بموجب CPML غير التجاري — لا تخلط بينهما.',
          'مجاني، بلا خطة مدفوعة؛ يعمل على المعالج، مع التوصية بـGPU لنماذج استنساخ الصوت الأكبر.',
          'أحدث إصدار للحزمة: coqui-tts v0.27.5، صدر في 26 يناير 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ثبّت `coqui-tts` (الفرع المُصان)، وليس اسم الحزمة الأصلي `TTS` من مستودع coqui-ai/TTS غير المُصان الآن، إذا كنت تريد نسخة تتلقى تحديثات. انظر قسم التثبيت والتشغيل أدناه.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: من Mozilla TTS إلى فرع مجتمعي',
        content: [
          '**يعود أصل Coqui TTS إلى [مشروع Mozilla TTS](https://github.com/mozilla/TTS)**، وهو جهد بحثي داخلي في Mozilla حول تقنية الصوت مفتوحة المصدر. عندما حلّت Mozilla مجموعة الأبحاث تلك عام 2021، أسّس عدد من مهندسيها — بينهم Eren Gölge وKelly Davis وJosh Meyer وReuben Morais — شركة Coqui AI الناشئة لمواصلة العمل كشركة مستقلة، فأصدروا مجموعة أدوات لتحويل النص إلى كلام (Coqui TTS) وأخرى لتحويل الكلام إلى نص (Coqui STT).',
          '**جمعت Coqui AI 3.3 مليون دولار في جولة تمويل أولية (seed) في مارس 2023**، وقدّمت مجموعة أدوات مفتوحة المصدر وخدمات سحابية مدفوعة معًا، بما في ذلك وصول مُستضاف إلى نموذج استنساخ الصوت لديها، XTTS. لم تجد الشركة نموذج عمل مستدامًا فوق برمجية مفتوحة المصدر، وأعلنت إغلاق خدماتها المدفوعة في ديسمبر 2023، وتوقفت خوادمها عن العمل في 11 ديسمبر 2023.',
          '**يظل المستودع الأصلي، [coqui-ai/TTS](https://github.com/coqui-ai/TTS)، متاحًا للجمهور على GitHub** بموجب ترخيص MPL-2.0، لكنه لم يتلقَّ التزامات جديدة منذ أغسطس 2024، ولا يُظهره GitHub كمؤرشف رسميًا — عمليًا، لا يتلقى تطويرًا نشطًا ولا إصلاحات أخطاء.',
          '**يواصل فرع مجتمعي، [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)، التطوير.** يصونه [معهد Idiap للأبحاث](https://www.idiap.ch/)، وهو معهد أبحاث سويسري، ويُنشر على PyPI باسم حزمة `coqui-tts` (مختلف عن اسم الحزمة الأصلي `TTS`). يذكر ملف README الخاص به صراحةً أنه "فرع من المستودع الأصلي غير المُصان"، ويُظهر سجل إصداراته تحديثات مستمرة، بما فيها إصدار v0.27.0 الذي أضاف ذاكرة تخزين مؤقت لاستنساخ الصوت، وإصدار v0.27.5 في 26 يناير 2026.',
        ],
        faqs: [
          {
            q: 'من أنشأ Coqui TTS؟',
            a: 'أنشأت Coqui TTS شركة Coqui AI الناشئة، التي أسسها عام 2021 مهندسون سابقون في مشروع أبحاث Mozilla TTS، من بينهم Eren Gölge وKelly Davis وJosh Meyer وReuben Morais. بعد إغلاق Coqui AI لخدماتها المدفوعة في ديسمبر 2023، استمر التطوير في فرع مجتمعي يصونه معهد Idiap للأبحاث.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله Coqui TTS فعليًا',
        content: [
          'Coqui TTS مجموعة أدوات، وليست نموذجًا واحدًا — توفر واجهة Python موحدة وواجهة سطر أوامر (CLI) وخط أنابيب تدريب لتشغيل (وتاريخيًا، تدريب) عدة معماريات نماذج مختلفة لتحويل النص إلى كلام.',
        ],
        items: [
          '**واجهة متعددة النماذج.** فئة Python واحدة `TTS()` تُحمّل وتُشغّل معماريات نماذج مختلفة، بما فيها نماذج VITS أحادية ومتعددة المتحدثين، ونماذج قائمة على Tacotron2، ونموذج استنساخ الصوت [XTTS v2](https://huggingface.co/coqui/XTTS-v2)، دون تغيير كود التطبيق المحيط.',
          '**التحويل عبر سطر الأوامر.** يُحوّل أمر `tts` في سطر الأوامر النص إلى كلام مباشرة من الطرفية، ويسرد جميع النماذج المُدرَّبة مسبقًا المتاحة عبر `tts --list_models`.',
          '**استنساخ الصوت عبر XTTS v2.** تمرير وسيطة `speaker_wav` إلى نموذج XTTS v2 المُحمَّل يستنسخ صوتًا من مقطع صوتي مرجعي قصير، فيولّد كلامًا بهذا الصوت المستنسخ باللغات التي يدعمها XTTS v2.',
          '**مكتبة واسعة من النماذج المُدرَّبة مسبقًا.** توفر مجموعة الأدوات وصولًا إلى نماذج مُدرَّبة مسبقًا تُوصف بأنها تغطي أكثر من 1,100 لغة عبر نماذج Fairseq الضخمة متعددة اللغات الكامنة، إلى جانب نماذج منتقاة أعلى جودة للغات محددة.',
          '**تدريب النماذج وضبطها الدقيق.** بالإضافة إلى تشغيل النماذج المُدرَّبة مسبقًا، تتضمن مجموعة الأدوات نصوص تدريب وأدوات تحليل مجموعات بيانات لبناء أو ضبط نموذج صوت مخصص — وهي تاريخيًا إحدى أكثر ميزاتها استخدامًا قبل إغلاق خدمة التدريب المُستضافة من Coqui AI.',
          '**الاستدلال المتدفق (streaming) لـXTTS v2.** توثّق مجموعة الأدوات التحويل المتدفق منخفض الكمون مع XTTS v2 (تذكره وثائق الفرع المُصان بأنه أقل من 200 ميلي ثانية من الكمون حتى أول صوت)، وهو مفيد لتطبيقات الصوت التفاعلية.',
        ],
        note: 'Coqui TTS هي البرمجية التي تُشغّل النماذج؛ وXTTS v2 نموذج محدد يمكنها تشغيله. نتناولهما معًا هنا لأن معظم القراء الذين يقيّمون Coqui TTS عام 2026 مهتمون تحديدًا بتشغيل XTTS v2 عبرها — انظر القسم المخصص لعلاقتهما أدناه.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS وXTTS v2: العلاقة بينهما',
        content: [
          '**Coqui TTS (مجموعة الأدوات) وXTTS v2 (النموذج) شيئان مختلفان بترخيصين مختلفين، والخلط بينهما خطأ ترخيص شائع.** مجموعة أدوات Coqui TTS — حزمة Python وواجهة سطر الأوامر وكود التدريب — مرخّصة بموجب MPL-2.0، وهو ترخيص متساهل يسمح بالاستخدام التجاري بشروط الإفصاح عن المصدر عند تعديل مجموعة الأدوات. أما XTTS v2 فهو نموذج مُدرَّب مسبقًا محدد تُوزَّع أوزانه بموجب Coqui Public Model License (CPML)، وهو ترخيص غير تجاري، منفصل عن ترخيص MPL-2.0 لمجموعة الأدوات.',
          '**عمليًا، هذا يعني أنه يمكنك استخدام مجموعة أدوات Coqui TTS تجاريًا مع نماذج ذات ترخيص متساهل** (نماذج VITS أو Tacotron2 مُدرَّبة بموجب تراخيص متوافقة)، بينما يرث المزيج المحدد "مجموعة أدوات Coqui TTS تُشغّل نموذج XTTS v2" القيد غير التجاري لـXTTS v2 على أوزان ذلك النموذج ومخرجاته. تشغيل نموذج مختلف ذي ترخيص متساهل عبر مجموعة الأدوات نفسها لا يحمل ذلك القيد.',
          '**توثّق حزمة `coqui-tts` استخدام XTTS v2 مباشرةً**، إذ يُحمَّل النموذج كـ`TTS("tts_models/multilingual/multi-dataset/xtts_v2")`، لأن مجموعة الأدوات هي الطريقة الأساسية المدعومة لتشغيل XTTS v2 خارج استخدام أوزان النموذج مباشرة عبر مكدس استدلال آخر. راجع [مراجعة XTTS v2 المخصصة](/power-local-llm/xtts-v2-review) من PromptQuorum لتفصيل كامل لترخيص وقدرات ذلك النموذج.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تثبيت Coqui TTS وتشغيله: خطوة بخطوة',
        content: 'يُثبّت هذا الدليل حزمة `coqui-tts` المُصانة فعليًا ويُشغّل أول عملية تحويل، باستخدام الصياغة الموثقة في ملف README الخاص بالفرع المُصان نفسه.',
        numberedItems: [
          {
            title: 'ثبّت الحزمة المُصانة.',
            whyItMatters: 'شغّل `pip install coqui-tts` (أو `uv pip install coqui-tts` إذا كنت تستخدم uv) في بيئة Python. ثبّت تحديدًا حزمة `coqui-tts` — وليس اسم الحزمة الأقدم `TTS` الذي يشير إلى المستودع الأصلي غير المُصان الآن.',
          },
          {
            title: 'اعرض النماذج المُدرَّبة مسبقًا المتاحة.',
            whyItMatters: 'شغّل `tts --list_models` لرؤية الكتالوج الكامل للنماذج المُدرَّبة مسبقًا المتاحة للتنزيل، منظمةً حسب اللغة والمعمارية (VITS وTacotron2 وXTTS وغيرها).',
          },
          {
            title: 'حوّل النص إلى كلام عبر سطر الأوامر.',
            whyItMatters: 'شغّل `tts --text "Hello world" --out_path output.wav` للتحويل بالنموذج الافتراضي، أو أضف `--model_name <النموذج>` لاختيار نموذج محدد من القائمة.',
          },
          {
            title: '(اختياري) استخدم واجهة Python لاستنساخ الصوت بـXTTS v2.',
            whyItMatters: 'حمّل النموذج بـ`TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`، ثم استدعِ `.tts_to_file()` مع وسيطة `speaker_wav` تشير إلى مقطع صوتي مرجعي قصير ووسيطة `language` لاستنساخ صوت.',
          },
          {
            title: '(اختياري) فعّل تسريع GPU.',
            whyItMatters: 'مرّر `gpu=True` إلى دالة الإنشاء `TTS()`، أو استدعِ `.to("cuda")` على كائن النموذج المُحمَّل، لتشغيل الاستدلال على معالج رسومي NVIDIA — وهو أمر مُوصى به لـXTTS v2 الذي يكون أبطأ بشكل ملحوظ على المعالج وحده.',
          },
          {
            title: '(اختياري) اقبل ترخيص CPML بشكل غير تفاعلي لـXTTS v2.',
            whyItMatters: 'يطلب تحميل XTTS v2 لأول مرة خطوة تفاعلية لقبول CPML. اضبط متغير البيئة `COQUI_TOS_AGREED=1` لقبوله بشكل غير تفاعلي، وهو مطلوب للاستخدام غير المُراقَب في حاويات Docker أو خطوط CI.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'إلى جانب دليل التثبيت الأساسي أعلاه، هذه أنماط استخدام حقيقية شائعة من وثائق الفرع المُصان نفسه.',
        ],
        codeBlock: `# سطر الأوامر: عرض النماذج المُدرَّبة مسبقًا المتاحة
tts --list_models

# سطر الأوامر: التحويل بالنموذج الافتراضي
tts --text "Hello world" --out_path output.wav

# سطر الأوامر: التحويل بنموذج محدد
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# واجهة Python: تحويل أساسي
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# واجهة Python: استنساخ الصوت بـXTTS v2 (اقبل CPML بشكل غير تفاعلي أولًا)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# واجهة Python: عرض المتحدثين واللغات المتاحة في نموذج مُحمَّل
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: 'متغير البيئة `COQUI_TOS_AGREED=1` ووسيطتا `speaker_wav`/`language` موثقة في ملف README ووثائق الواجهة البرمجية للفرع المُصان. تحقق من الوثائق الحالية قبل النشر، لأن واجهة مجموعة الأدوات تغيّرت عبر الإصدارات الرئيسية (تشترك حزمة `TTS` الأصلية وفرع `coqui-tts` المُصان في نفس مسار الاستيراد `TTS.api.TTS` وقت التحقق لهذه المراجعة).',
        items: [
          '**قبول CPML بشكل غير تفاعلي** للبيئات الآلية: اضبط `COQUI_TOS_AGREED=1` قبل أول تحميل لـXTTS v2، حتى لا تتعطل عمليات بناء Docker وخطوط CI عند مطالبة تفاعلية.',
          '**استكشاف المتحدثين واللغات**: بعد تحميل نموذج متعدد المتحدثين أو متعدد اللغات، تسرد `tts.speakers` و`tts.languages` ما يدعمه النموذج المُحمَّل فعليًا — مفيد للتحقق من المدخلات قبل التحويل.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الترخيص والتكلفة',
        content: [
          '**مجموعة أدوات Coqui TTS مرخّصة بموجب MPL-2.0 (Mozilla Public License 2.0)**، وهو ما تؤكده البيانات الوصفية المنشورة لحزمة `coqui-tts` على [PyPI](https://pypi.org/project/coqui-tts/) وملف الترخيص في [مستودع idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS). ترخيص MPL-2.0 متساهل بشروط: يمكنك استخدام مجموعة الأدوات تجاريًا، لكن إذا عدّلت وملفات المصدر الخاصة بمجموعة الأدوات ووزّعتها، يجب عليك نشر تلك الملفات المُعدَّلة المحددة أيضًا بموجب MPL-2.0. استخدام مجموعة الأدوات كاعتمادية غير مُعدَّلة لا يضع كود تطبيقك الخاص بموجب MPL-2.0.',
          '**نموذج XTTS v2 مرخّص بشكل منفصل، بموجب Coqui Public Model License (CPML)، وهو غير تجاري** — وينطبق ذلك على أوزان النموذج ومخرجاته الصوتية المولَّدة، وليس على كود مجموعة أدوات Coqui TTS التي تُشغّله. راجع [مراجعة XTTS v2](/power-local-llm/xtts-v2-review) من PromptQuorum لتفصيل كامل لذلك الترخيص.',
          '**لا توجد خطة مدفوعة أو اشتراك أو رسوم ترخيص لمجموعة أدوات Coqui TTS نفسها.** أُغلقت خدمات Coqui AI المُستضافة المدفوعة في ديسمبر 2023 وغير متاحة بأي سعر؛ والطريقة الوحيدة لاستخدام Coqui TTS اليوم هي الاستضافة الذاتية، إما بالحزمة الأصلية غير المُصانة أو بفرع `coqui-tts` المُصان فعليًا.',
        ],
        faqs: [
          {
            q: 'ما الترخيص الذي يستخدمه Coqui TTS؟',
            a: 'مجموعة أدوات Coqui TTS نفسها مرخّصة بموجب MPL-2.0، الذي يسمح بالاستخدام التجاري بشرط نشر التعديلات على ملفات المصدر الخاصة بمجموعة الأدوات بموجب الترخيص نفسه. وهذا منفصل عن ترخيص أي نموذج محدد تُشغّله — فنموذج XTTS v2 مثلًا مرخّص بموجب Coqui Public Model License (CPML) غير التجاري، الذي ينطبق على أوزان النموذج ومخرجاته، وليس على كود مجموعة الأدوات.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'فيما لا يصلح Coqui TTS',
        content: [
          'Coqui TTS مجموعة أدوات مرنة متعددة النماذج، وليست الخيار الأسرع أو الأبسط لكل حالة استخدام. إنها الأداة الخاطئة للحالات التالية:',
        ],
        items: [
          '**البناء على المستودع الأصلي غير المُصان.** إذا شغّلت `pip install TTS` (اسم الحزمة الأصلي) بدلًا من `pip install coqui-tts` (الفرع المُصان)، فأنت تبني على كود لم يتلقَّ تحديثات منذ أغسطس 2024 — تحقق من الحزمة التي يشير إليها فعليًا أي درس تعليمي أو اعتمادية قبل الاعتماد عليها.',
          '**أسرع تحويل ممكن يعتمد على المعالج فقط.** إذا كانت أولويتك هي الكلام في الوقت الفعلي على أجهزة متواضعة مثل Raspberry Pi بلا GPU، فإن [Piper](/power-local-llm/piper-tts-review) مبني خصيصًا لذلك وأبسط في النشر؛ ونماذج Coqui TTS الأكبر، وخصوصًا XTTS v2، أبطأ بشكل ملحوظ على المعالج وحده.',
          '**استنساخ الصوت تجاريًا دون التحقق من ترخيص منفصل.** تشغيل XTTS v2 عبر مجموعة أدوات Coqui TTS لا يزال يحمل قيد XTTS v2 الخاص وغير التجاري (CPML) على أوزان النموذج ومخرجاته — ولا يُلغي ترخيص MPL-2.0 لمجموعة الأدوات ذلك. راجع قسم الترخيص والتكلفة أعلاه.',
          '**دعم مؤسسي مضمون طويل الأمد.** لم تعد شركة Coqui AI موجودة منذ ديسمبر 2023. يصون الفرع الحالي معهد أبحاث على أساس مجتمعي، وهو نموذج صيانة مختلف عن شركة ممولة بعقد دعم — ضع ذلك في الاعتبار عند اتخاذ قرارات بشأن بنية تحتية إنتاجية حرجة.',
          '**واجهة برمجية واحدة ومستقرة عبر الإصدارات.** بما أن التطوير انتقل بين أصل غير مُصان وفرع مُطوَّر بنشاط، تشير بعض الدروس التعليمية وإجابات Stack Overflow ومقالات المدونات على الإنترنت إلى سطح واجهة برمجية أقدم أو اسم الحزمة الأصلي — تحقق من وثائق `coqui-tts` الحالية بدلًا من نتيجة بحث قديمة.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل Coqui TTS',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الترخيص'],
        rows: [
          {
            'الأداة': '[Piper](/power-local-llm/piper-tts-review)',
            'الأنسب لـ': 'أسرع تحويل يعتمد على المعالج فقط، بلا استنساخ صوت، وقت فعلي على Raspberry Pi',
            'الترخيص': 'GPL-3.0-or-later',
          },
          {
            'الأداة': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'الأنسب لـ': 'نموذج استنساخ الصوت نفسه، إذا كنت تحتاج XTTS v2 فقط دون مجموعة الأدوات الأوسع',
            'الترخيص': 'CPML (غير تجاري)',
          },
          {
            'الأداة': '[Bark](/power-local-llm/bark-tts-review)',
            'الأنسب لـ': 'صوت غير كلامي معبّر — ضحك، تنهدات، صوت محيطي',
            'الترخيص': 'MIT',
          },
          {
            'الأداة': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'الأنسب لـ': 'أعلى جودة سرد إنجليزي طبيعي (بلا استنساخ صوت)',
            'الترخيص': 'MIT',
          },
          {
            'الأداة': '[ElevenLabs](https://elevenlabs.io)',
            'الأنسب لـ': 'واجهة سحابية مُدارة للفرق التي تفضل عدم الاستضافة الذاتية، مع استنساخ صوت تجاري',
            'الترخيص': 'ملكية خاصة (واجهة سحابية مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Coqui TTS؟',
            a: 'Coqui TTS مجموعة أدوات مفتوحة المصدر لتحويل النص إلى كلام واستنساخ الصوت محليًا، منحدرة من مشروع أبحاث Mozilla TTS، طوّرتها في الأصل شركة Coqui AI الناشئة. تدعم عدة معماريات نماذج، بما فيها نموذج استنساخ الصوت XTTS v2، عبر واجهة Python وسطر أوامر واحد.',
          },
          {
            q: 'هل Coqui TTS لا يزال يُصان؟',
            a: 'لم يعد مستودع coqui-ai/TTS الأصلي يُصان بنشاط — لم يتلقَّ التزامات جديدة منذ أغسطس 2024، بعد أن أغلقت شركة Coqui AI خدماتها المدفوعة في ديسمبر 2023. يواصل فرع مجتمعي مُصان فعليًا، idiap/coqui-ai-TTS، التطوير تحت معهد Idiap للأبحاث ويُنشر على PyPI باسم حزمة coqui-tts، مع إصدارات حديثة حتى يناير 2026.',
          },
          {
            q: 'هل Coqui TTS مجاني؟',
            a: 'نعم، مجموعة الأدوات نفسها لا تحمل خطة مدفوعة أو رسوم ترخيص. أُغلقت خدمات Coqui AI المُستضافة المدفوعة السابقة في ديسمبر 2023 وغير متاحة بأي سعر. بعض النماذج المحددة التي تعمل على مجموعة الأدوات، مثل XTTS v2، لها ترخيص منفصل خاص بها (CPML) يقيّد الاستخدام التجاري لأوزان ذلك النموذج ومخرجاته.',
          },
          {
            q: 'ما الفرق بين حزمتَي coqui-tts وTTS؟',
            a: 'TTS هو اسم حزمة PyPI الأصلي، المرتبط بمستودع coqui-ai/TTS غير المُصان بلا تحديثات منذ أغسطس 2024. أما coqui-tts فهو اسم حزمة الفرع المُصان فعليًا، يُنشر من مستودع idiap/coqui-ai-TTS تحت معهد Idiap للأبحاث، مع إصدارات منتظمة تشمل v0.27.5 في يناير 2026. ثبّت coqui-tts للحصول على نسخة تتلقى تحديثات.',
          },
          {
            q: 'هل يدعم Coqui TTS استنساخ الصوت؟',
            a: 'نعم، عبر نموذج XTTS v2، الذي يمكن لمجموعة الأدوات تحميله وتشغيله. يستنسخ XTTS v2 صوتًا من مقطع صوتي مرجعي قصير يُمرَّر كوسيطة speaker_wav. لاحظ أن ترخيص XTTS v2 نفسه، وهو Coqui Public Model License (CPML)، غير تجاري، ومنفصل عن ترخيص MPL-2.0 لمجموعة الأدوات.',
          },
          {
            q: 'لماذا أغلقت Coqui AI؟',
            a: 'أعلنت Coqui AI، الشركة التي تقف خلف Coqui TTS، إغلاق خدماتها المُستضافة المدفوعة في ديسمبر 2023، وتوقفت خوادمها عن العمل في 11 ديسمبر 2023، بعد أن عجزت عن بناء نموذج عمل مستدام فوق تقنية صوت مفتوحة المصدر. ظلت مجموعة الأدوات مفتوحة المصدر نفسها متاحة، واستمر التطوير لاحقًا في فرع مجتمعي.',
          },
          {
            q: 'ما أحدث إصدار من Coqui TTS؟',
            a: 'أحدث إصدار لحزمة coqui-tts المُصانة فعليًا هو v0.27.5، صدر في 26 يناير 2026، وفق سجلها على PyPI.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يُعد Coqui TTS دراسة حالة مفيدة حقًا حول ما يحدث للبنية التحتية مفتوحة المصدر بعد إغلاق الشركة القائمة عليها: صمت المستودع الأصلي في أغسطس 2024، لكن البرمجية لم تختفِ — تولى معهد أبحاث الصيانة، وأعاد تسمية الحزمة، واستمر في إصدار الإصدارات حتى عام 2026. بالنسبة لأي شخص يُقيّمه اليوم، الخلاصة العملية بسيطة: ثبّت `coqui-tts`، وليس حزمة `TTS` الأصلية، وافهم أن ترخيص MPL-2.0 لمجموعة الأدوات منفصل عن ترخيص CPML غير التجاري لنموذج XTTS v2 القابل للتشغيل عليها. بوصفها مجموعة أدوات، تكمن قوتها في المرونة عبر معماريات النماذج أكثر من كونها الخيار الأسرع أو الأبسط لأي حالة استخدام بعينها — ولذلك، اقرن هذه المراجعة بتغطية PromptQuorum لـ[Piper](/power-local-llm/piper-tts-review) من أجل السرعة، أو [XTTS v2](/power-local-llm/xtts-v2-review) تحديدًا لنموذج الاستنساخ، أو [دليل تراخيص TTS المحلي](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) للصورة الكاملة عبر المحركات.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[idiap/coqui-ai-TTS على GitHub](https://github.com/idiap/coqui-ai-TTS) — الفرع المُصان فعليًا: README والوثائق والترخيص وسجل الإصدارات.',
          '[coqui-tts على PyPI](https://pypi.org/project/coqui-tts/) — البيانات الوصفية المنشورة للحزمة، بما فيها ترخيص MPL-2.0 الحالي وسجل الإصدارات.',
          '[coqui-ai/TTS على GitHub](https://github.com/coqui-ai/TTS) — المستودع الأصلي، غير المُصان الآن (ترخيص MPL-2.0).',
          '[XTTS v2 على Hugging Face](https://huggingface.co/coqui/XTTS-v2) — بطاقة النموذج ونص ترخيص CPML لنموذج استنساخ الصوت.',
          '[معهد Idiap للأبحاث](https://www.idiap.ch/) — المعهد البحثي السويسري الذي يصون الفرع المجتمعي.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[تراخيص TTS المحلي واستنساخ الصوت: Piper وXTTS v2 وF5-TTS وCoqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — التحليل المعمّق للتراخيص عبر أبرز محركات TTS المحلية.',
          '[مراجعة XTTS v2](/power-local-llm/xtts-v2-review) — تفصيل كامل لنموذج استنساخ الصوت الذي يمكن لهذه المجموعة تشغيله.',
          '[مراجعة Piper TTS](/power-local-llm/piper-tts-review) — بديل TTS محلي سريع يعتمد على المعالج فقط، تمت مراجعته بالعمق نفسه.',
          '[ElevenLabs مقابل Piper مقابل XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — مقارنة السحابة مقابل المحلي للقراء المترددين بشأن الاستضافة الذاتية.',
          '[مراجعة Bark TTS](/power-local-llm/bark-tts-review) — نموذج TTS محلي معبّر وغير كلامي، تمت مراجعته بالعمق نفسه.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Coqui TTS (2026): مجموعة أدوات استنساخ الصوت التي تصونها المجتمع',
      description:
        'مراجعة Coqui TTS: مجموعة أدوات مفتوحة المصدر لاستنساخ الصوت محليًا منحدرة من Mozilla TTS. أغلقت Coqui AI في 2023؛ والنسخة المُصانة فعليًا هي idiap/coqui-ai-TTS. التاريخ، خطوات التثبيت، العلاقة بـXTTS v2، ترخيص MPL-2.0، وحدود صادقة.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'ar',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون الذين يقيّمون مجموعات أدوات تحويل النص إلى كلام محلية ومستضافة ذاتيًا' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'معهد Idiap للأبحاث' },
        { '@type': 'Thing', name: 'تحويل النص إلى كلام' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة Coqui TTS (2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-zh.webp',
    title: 'Coqui TTS评测(2026):由社区维护的声音克隆工具包',
    seoTitle: 'Coqui TTS评测2026:社区维护的TTS工具包',
    intro:
      'Coqui TTS是一个开源的本地文本转语音与声音克隆工具包,起源于Mozilla的TTS项目,最初由初创公司Coqui AI打造,该公司已于2023年12月关闭其付费服务。原始仓库[coqui-ai/TTS](https://github.com/coqui-ai/TTS)自2024年8月起没有新提交,已不再积极维护,但仍以MPL-2.0许可证公开可用。开发工作在社区分支[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)中继续进行,由[Idiap研究所](https://www.idiap.ch/)维护,并以`coqui-tts`包名发布在PyPI上。本评测涵盖这段历史、该工具包与声音克隆模型[XTTS v2](https://huggingface.co/coqui/XTTS-v2)的关系、真实的安装与使用命令、其MPL-2.0许可证,以及这次维护权转移在2026年真正重要的地方。',
    metaDescription:
      'Coqui TTS评测:源自Mozilla TTS的开源本地声音克隆工具包。Coqui AI已于2023年关闭;积极维护的分支是idiap/coqui-ai-TTS。历史、安装步骤、与XTTS v2的关系、MPL-2.0许可证及真实局限。',
    twitterDescription:
      'Coqui TTS评测2026:Coqui AI在2023年关闭前打造的本地声音克隆工具包 — 如今由Idiap研究所的社区分支延续维护。真实安装命令、与XTTS v2的关联,以及关闭后发生的变化。',
    audience:
      '希望使用灵活的自托管文本转语音工具包并支持声音克隆、且需要在依赖它之前了解公司关闭后维护状态的开发者与研究人员。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS评测',
    targetKeywords: [
      'coqui tts评测',
      'coqui tts',
      'coqui tts安装',
      'coqui tts python',
      'coqui tts许可证',
      'idiap coqui-ai-tts',
      'coqui tts对比xtts',
      'coqui tts还在维护吗',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS是一个开源的本地文本转语音与声音克隆工具包,最初由初创公司Coqui AI打造,该公司已于2023年12月关闭其付费服务。** 原始仓库[coqui-ai/TTS](https://github.com/coqui-ai/TTS)自2024年8月起未再更新。请改为安装积极维护的社区分支:`pip install coqui-tts`,它来自[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS),由[Idiap研究所](https://www.idiap.ch/)维护。该工具包采用MPL-2.0许可证,是运行声音克隆模型[XTTS v2](https://huggingface.co/coqui/XTTS-v2)的软件 —— 工具包与模型是两个独立事物,各自拥有独立许可证(见[许可证与成本](#license-cost)一节)。要查看本地TTS引擎之间的完整许可证对比,请参阅PromptQuorum的[本地TTS许可证指南](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)。',
    quickAnswerTop: {
      en: {
        question: 'Coqui TTS是什么?它还在维护吗?',
        answer:
          '如果你想要一个支持多种模型架构(VITS、Tacotron2以及声音克隆模型XTTS v2)、语言覆盖广泛的灵活本地文本转语音工具包,Coqui TTS值得使用。它源自Mozilla的TTS研究项目,由初创公司Coqui AI开发。该公司于2023年12月关闭付费服务,其原始仓库coqui-ai/TTS自2024年8月起没有新提交 —— 已不再积极维护,但仍可在MPL-2.0许可证下下载。是的,存在一个受维护的版本:开发工作在社区分支idiap/coqui-ai-TTS中继续,由Idiap研究所维护,并以coqui-tts包名发布在PyPI上,发布记录一直延续到2026年1月。如果你只想要最快的纯CPU合成、对声音克隆不感兴趣,请改选Piper;如果你想通过一个持续更新的工具包运行XTTS v2或其他支持克隆的模型,则应专门选择Coqui TTS。',
        bullets: [
          '源自Mozilla的TTS研究项目;由2021年成立的初创公司Coqui AI开发,创始人是前Mozilla TTS工程师。',
          'Coqui AI于2023年12月关闭付费服务;原始的coqui-ai/TTS仓库自2024年8月起没有新提交。',
          '积极维护的社区分支:idiap/coqui-ai-TTS,由Idiap研究所维护,以coqui-tts包名发布在PyPI上。',
          '许可证:工具包本身为MPL-2.0。可在其上运行的XTTS v2模型采用独立的非商业许可证(CPML)——工具包与模型的许可证并不相同。',
          '免费,无付费方案;支持CPU推理,对于XTTS v2等更大模型建议使用GPU加速。',
          '最新软件包版本:coqui-tts v0.27.5,据PyPI显示于2026年1月26日发布。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '历史:从Mozilla TTS到社区分支', anchor: 'history' },
      { label: 'Coqui TTS实际能做什么', anchor: 'what-it-does' },
      { label: 'Coqui TTS与XTTS v2的关系', anchor: 'xtts-relationship' },
      { label: '安装与运行Coqui TTS:分步指南', anchor: 'install-walkthrough' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与成本', anchor: 'license-cost' },
      { label: 'Coqui TTS不适合哪些场景', anchor: 'limitations' },
      { label: 'Coqui TTS的替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
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
            text: 'Coqui TTS是一个源自Mozilla TTS项目的开源本地文本转语音与声音克隆工具包,其原始公司Coqui AI已于2023年12月关闭付费服务,使原始仓库自2024年8月起处于无人维护状态——但积极维护的社区分支idiap/coqui-ai-TTS仍在Idiap研究所的支持下持续开发。',
          },
          {
            type: 'plain-terms',
            text: '这是一个通过`pip install`安装的程序,可以借助多种不同的AI模型将文本转换为语音,其中包括一个名为XTTS v2的声音克隆模型 —— 打造它的公司已经关闭,但如今有一家研究机构在持续更新这款软件。',
          },
        ],
        items: [
          '源自Mozilla的TTS研究项目;由2021年成立的初创公司Coqui AI开发,创始人是前Mozilla TTS工程师。',
          'Coqui AI于2023年12月关闭付费云服务;原始GitHub仓库coqui-ai/TTS自2024年8月起没有新提交。',
          '积极维护的分支:idiap/coqui-ai-TTS,由Idiap研究所维护,以`coqui-tts`包名发布在PyPI上。',
          '许可证:工具包本身为MPL-2.0。可在其上运行的XTTS v2模型另外采用非商业的CPML许可证——不要将两者混淆。',
          '免费,无付费方案;可在CPU上运行,对于更大的声音克隆模型建议使用GPU。',
          '最新软件包版本:coqui-tts v0.27.5,发布于2026年1月26日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '如果你想要一个能接收更新的版本,请安装`coqui-tts`(受维护的分支),而不是来自如今无人维护的coqui-ai/TTS仓库的原始包名`TTS`。参见下方的"安装与运行"部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:从Mozilla TTS到社区分支',
        content: [
          '**Coqui TTS可追溯至[Mozilla的TTS项目](https://github.com/mozilla/TTS)**,这是Mozilla内部针对开源语音技术的研究项目。当Mozilla于2021年解散该研究团队时,包括Eren Gölge、Kelly Davis、Josh Meyer和Reuben Morais在内的多名工程师创立了初创公司Coqui AI,以独立公司的身份继续这项工作,推出了文本转语音工具包(Coqui TTS)和语音转文本工具包(Coqui STT)。',
          '**Coqui AI于2023年3月完成330万美元的种子轮融资**,同时提供开源工具包和付费云服务,包括对其声音克隆模型XTTS的托管访问。该公司未能在开源软件之上找到可持续的商业模式,于2023年12月宣布关闭付费服务,其服务器于2023年12月11日下线。',
          '**原始仓库[coqui-ai/TTS](https://github.com/coqui-ai/TTS)在MPL-2.0许可证下仍在GitHub上公开可用**,但自2024年8月起没有新提交,GitHub也未将其正式标记为已归档——实际上,它已不再获得积极开发或错误修复。',
          '**社区分支[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)延续了开发工作。** 它由瑞士研究机构[Idiap研究所](https://www.idiap.ch/)维护,并以`coqui-tts`这一包名发布在PyPI上(区别于原始包名`TTS`)。其README明确说明这是"原始未维护仓库的分支",其发布历史显示持续的更新,包括添加了声音克隆缓存的v0.27.0版本,以及2026年1月26日发布的v0.27.5版本。',
        ],
        faqs: [
          {
            q: '谁创建了Coqui TTS?',
            a: 'Coqui TTS由初创公司Coqui AI创建,该公司于2021年由Mozilla TTS研究项目的前工程师创立,包括Eren Gölge、Kelly Davis、Josh Meyer和Reuben Morais。Coqui AI于2023年12月关闭付费服务后,开发工作在由Idiap研究所维护的社区分支中得以延续。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Coqui TTS实际能做什么',
        content: [
          'Coqui TTS是一个工具包,而不是单一模型——它提供统一的Python接口、命令行界面(CLI)和训练流水线,用于运行(以及历史上曾用于训练)多种不同的文本转语音模型架构。',
        ],
        items: [
          '**多模型接口。** 单一的Python类`TTS()`可加载并运行不同的模型架构,包括基于VITS的单说话人和多说话人模型、基于Tacotron2的模型,以及声音克隆模型[XTTS v2](https://huggingface.co/coqui/XTTS-v2),无需更改周围的应用代码。',
          '**命令行合成。** `tts`命令行工具可直接从终端合成语音,使用`tts --list_models`列出所有可用的预训练模型。',
          '**通过XTTS v2进行声音克隆。** 向已加载的XTTS v2模型传入`speaker_wav`参数,即可从一段简短的参考音频克隆声音,并以XTTS v2支持的语言生成该克隆声音的语音。',
          '**丰富的预训练模型库。** 该工具包提供对预训练模型的访问,据文档介绍,通过底层基于Fairseq的大规模多语言模型可覆盖1,100多种语言,此外还为特定语言提供质量更高的精选模型。',
          '**模型训练与微调。** 除了运行预训练模型外,该工具包还包含训练脚本和数据集分析工具,用于构建或微调自定义语音模型——在Coqui AI的托管训练服务关闭之前,这在历史上是其使用最多的功能之一。',
          '**XTTS v2的流式推理。** 该工具包记录了XTTS v2的低延迟流式合成功能(维护中的分支文档称首个音频延迟低于200毫秒),适用于交互式语音应用。',
        ],
        note: 'Coqui TTS是运行模型的软件;XTTS v2是它可以运行的一个具体模型。这里将两者放在一起介绍,是因为2026年评估Coqui TTS的大多数读者,具体感兴趣的正是通过它运行XTTS v2——两者关系的详细说明见下方专门章节。',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS与XTTS v2的关系',
        content: [
          '**Coqui TTS(工具包)与XTTS v2(模型)是两个各自拥有独立许可证的不同事物,混淆两者是常见的许可证错误。** Coqui TTS工具包——即Python包、CLI和训练代码——采用MPL-2.0许可证,这是一种宽松许可证,允许商业使用,但对工具包本身的修改附有源代码公开条件。XTTS v2是一个具体的预训练模型,其权重以Coqui Public Model License(CPML)分发,这是一种非商业许可证,与工具包的MPL-2.0许可证是分开的。',
          '**实际上,这意味着你可以将Coqui TTS工具包与宽松许可的模型一起用于商业用途**(在兼容许可证下训练的VITS或Tacotron2模型),而"Coqui TTS工具包运行XTTS v2模型"这一特定组合,则会继承XTTS v2对该模型权重和输出的非商业限制。通过同一工具包运行另一个宽松许可的模型,不会带有该限制。',
          '**`coqui-tts`包直接记录了XTTS v2的使用方法**,模型通过`TTS("tts_models/multilingual/multi-dataset/xtts_v2")`加载,因为除了通过其他推理栈直接使用模型权重之外,该工具包是运行XTTS v2的主要受支持方式。有关该模型许可证和能力的完整分解,请参阅PromptQuorum专门的[XTTS v2评测](/power-local-llm/xtts-v2-review)。',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '安装与运行Coqui TTS:分步指南',
        content: '本指南将安装积极维护的`coqui-tts`包,并按照受维护分支自身README中记录的语法执行首次合成。',
        numberedItems: [
          {
            title: '安装受维护的包。',
            whyItMatters: '在Python环境中运行`pip install coqui-tts`(如果使用uv,则运行`uv pip install coqui-tts`)。请专门安装`coqui-tts`包——而不是指向如今无人维护的原始仓库的旧包名`TTS`。',
          },
          {
            title: '列出可用的预训练模型。',
            whyItMatters: '运行`tts --list_models`,即可看到按语言和架构(VITS、Tacotron2、XTTS等)组织的完整可下载预训练模型目录。',
          },
          {
            title: '从命令行合成语音。',
            whyItMatters: '运行`tts --text "Hello world" --out_path output.wav`即可使用默认模型合成语音,或添加`--model_name <模型>`从列表中选择特定模型。',
          },
          {
            title: '(可选)使用Python API进行XTTS v2声音克隆。',
            whyItMatters: '使用`TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`加载模型,然后调用`.tts_to_file()`,传入指向简短参考音频的`speaker_wav`参数以及用于克隆声音的`language`参数。',
          },
          {
            title: '(可选)启用GPU加速。',
            whyItMatters: '向`TTS()`构造函数传入`gpu=True`,或在已加载的模型对象上调用`.to("cuda")`,即可在NVIDIA GPU上运行推理——对于仅用CPU时明显较慢的XTTS v2尤为推荐。',
          },
          {
            title: '(可选)为XTTS v2非交互式地接受CPML许可证。',
            whyItMatters: '首次加载XTTS v2会提示一个交互式的CPML接受步骤。设置环境变量`COQUI_TOS_AGREED=1`即可非交互式地接受它,这是在Docker容器或CI流水线中无人值守使用所必需的。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '除了上面的基本安装指南外,以下是来自受维护分支自身文档的常见实际使用模式。',
        ],
        codeBlock: `# 命令行:列出可用的预训练模型
tts --list_models

# 命令行:使用默认模型合成
tts --text "Hello world" --out_path output.wav

# 命令行:使用指定模型合成
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# Python API:基本合成
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# Python API:使用XTTS v2进行声音克隆(先非交互式接受CPML)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# Python API:列出已加载模型可用的说话人和语言
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: '环境变量`COQUI_TOS_AGREED=1`以及`speaker_wav`/`language`参数记录在受维护分支的README和API文档中。部署前请核对当前文档,因为该工具包的API在主要版本之间发生过变化(截至本评测核实时,原始`TTS`包与受维护的`coqui-tts`分支共享相同的导入路径`TTS.api.TTS`)。',
        items: [
          '**为自动化环境非交互式接受CPML**:在首次加载XTTS v2之前设置`COQUI_TOS_AGREED=1`,这样Docker构建和CI流水线就不会卡在交互式提示上。',
          '**说话人与语言自检**:加载多说话人或多语言模型后,`tts.speakers`和`tts.languages`会列出已加载模型实际支持的内容——便于在合成前验证输入。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与成本',
        content: [
          '**Coqui TTS工具包采用MPL-2.0(Mozilla Public License 2.0)许可证**,这一点通过[PyPI](https://pypi.org/project/coqui-tts/)上`coqui-tts`包发布的元数据以及[idiap/coqui-ai-TTS仓库](https://github.com/idiap/coqui-ai-TTS)中的许可证文件得到确认。MPL-2.0是一种附带条件的宽松许可证:你可以将该工具包用于商业用途,但如果你修改并分发工具包自身的源文件,则必须将这些特定的修改文件同样以MPL-2.0发布。将工具包作为未修改的依赖项使用,不会使你自己的应用代码受MPL-2.0约束。',
          '**XTTS v2模型另外采用Coqui Public Model License(CPML)许可证,该许可证为非商业性质** —— 这适用于模型权重及其生成的音频输出,而不适用于运行它们的Coqui TTS工具包代码。有关该许可证的完整分解,请参阅PromptQuorum的[XTTS v2评测](/power-local-llm/xtts-v2-review)。',
          '**Coqui TTS工具包本身没有付费方案、订阅或许可费用。** Coqui AI的付费托管服务已于2023年12月关闭,无论何种价格都不再提供;如今使用Coqui TTS的唯一方式是自托管,可以选择无人维护的原始包,也可以选择积极维护的`coqui-tts`分支。',
        ],
        faqs: [
          {
            q: 'Coqui TTS使用什么许可证?',
            a: 'Coqui TTS工具包本身采用MPL-2.0许可证,允许商业使用,条件是对工具包自身源文件的修改需以相同许可证发布。这与它所运行的任何特定模型的许可证是分开的——例如XTTS v2模型采用非商业性质的Coqui Public Model License(CPML),适用于模型权重和输出,而不适用于工具包代码。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Coqui TTS不适合哪些场景',
        content: [
          'Coqui TTS是一个灵活的多模型工具包,并非在每种使用场景下都是最快或最简单的选择。以下情况不适合使用它:',
        ],
        items: [
          '**基于原始的、无人维护的仓库进行构建。** 如果你运行`pip install TTS`(原始包名)而不是`pip install coqui-tts`(受维护的分支),你所构建的代码自2024年8月起就没有获得过更新——在依赖某个教程或依赖项之前,请先确认它实际引用的是哪个包。',
          '**尽可能最快的纯CPU合成。** 如果你的优先事项是在没有GPU的Raspberry Pi等入门级硬件上实现实时语音,[Piper](/power-local-llm/piper-tts-review)正是为此专门打造且部署更简单;Coqui TTS的更大模型,尤其是XTTS v2,仅用CPU时明显更慢。',
          '**未经单独许可证检查的商业声音克隆。** 通过Coqui TTS工具包运行XTTS v2,仍然带有XTTS v2自身对模型权重和输出的非商业CPML限制——工具包的MPL-2.0许可证并不能凌驾于此之上。参见上方的"许可证与成本"一节。',
          '**长期有保障的企业支持。** Coqui AI这家公司自2023年12月起已不复存在。目前的分支由一家研究机构以社区方式维护,这与由资金充足、附带支持合同的公司维护是不同的维护模式——在做关键生产基础设施决策时应将此纳入考虑。',
          '**跨版本统一稳定的API。** 由于开发在无人维护的原始版本和积极开发的分支之间转移,网上一些教程、Stack Overflow回答和博客文章仍引用较旧的API接口或原始包名——请以当前`coqui-tts`文档为准,而非较旧的搜索结果。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Coqui TTS的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合', '许可证'],
        rows: [
          {
            '工具': '[Piper](/power-local-llm/piper-tts-review)',
            '最适合': '最快的纯CPU合成,无声音克隆,在Raspberry Pi上实时运行',
            '许可证': 'GPL-3.0-or-later',
          },
          {
            '工具': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            '最适合': '如果你只需要XTTS v2而不需要更广泛的工具包,则可直接使用该声音克隆模型本身',
            '许可证': 'CPML(非商业)',
          },
          {
            '工具': '[Bark](/power-local-llm/bark-tts-review)',
            '最适合': '富有表现力的非语音音频——笑声、叹息、环境声音',
            '许可证': 'MIT',
          },
          {
            '工具': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最适合': '最自然的英语朗读质量(无声音克隆)',
            '许可证': 'MIT',
          },
          {
            '工具': '[ElevenLabs](https://elevenlabs.io)',
            '最适合': '面向不想自托管、需要商业声音克隆的团队的托管云API',
            '许可证': '专有(付费云API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Coqui TTS是什么?',
            a: 'Coqui TTS是一个源自Mozilla TTS研究项目的开源本地文本转语音与声音克隆工具包,最初由初创公司Coqui AI打造。它通过单一的Python接口和CLI支持多种模型架构,包括声音克隆模型XTTS v2。',
          },
          {
            q: 'Coqui TTS还在维护吗?',
            a: '原始的coqui-ai/TTS仓库已不再积极维护——自公司Coqui AI于2023年12月关闭付费服务后,自2024年8月起没有新提交。积极维护的社区分支idiap/coqui-ai-TTS在Idiap研究所的支持下继续开发,并以coqui-tts包名发布在PyPI上,发布记录一直延续到2026年1月。',
          },
          {
            q: 'Coqui TTS是免费的吗?',
            a: '是的,该工具包本身没有付费方案或许可费用。Coqui AI此前的付费托管服务已于2023年12月关闭,无论何种价格都不再提供。一些在该工具包上运行的特定模型,例如XTTS v2,拥有自己独立的许可证(CPML),限制该模型权重和输出的商业使用。',
          },
          {
            q: 'coqui-tts包和TTS包有什么区别?',
            a: 'TTS是原始的PyPI包名,与无人维护的coqui-ai/TTS仓库绑定,自2024年8月起没有更新。coqui-tts是积极维护的分支的包名,从Idiap研究所旗下的idiap/coqui-ai-TTS仓库发布,有定期发布记录,包括2026年1月的v0.27.5。安装coqui-tts可获得能持续接收更新的版本。',
          },
          {
            q: 'Coqui TTS支持声音克隆吗?',
            a: '支持,通过该工具包可加载并运行的XTTS v2模型实现。XTTS v2会从作为speaker_wav参数传入的简短参考音频中克隆声音。请注意,XTTS v2自身的许可证——Coqui Public Model License(CPML)——为非商业性质,与工具包的MPL-2.0许可证是分开的。',
          },
          {
            q: '为什么Coqui AI关闭了?',
            a: 'Coqui TTS背后的公司Coqui AI在未能于开源语音技术之上建立可持续商业模式后,于2023年12月宣布关闭其付费托管服务,其服务器于2023年12月11日下线。开源工具包本身仍保持可用,开发工作此后在社区分支中得以延续。',
          },
          {
            q: 'Coqui TTS的最新版本是什么?',
            a: '根据PyPI页面显示,积极维护的coqui-tts包最新版本为v0.27.5,发布于2026年1月26日。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Coqui TTS是一个非常有价值的案例研究,展示了当背后的公司关闭后开源基础设施会发生什么:原始仓库在2024年8月归于沉寂,但软件本身并未消失——一家研究机构接手了维护工作,重新命名了包,并持续发布版本直至2026年。对于今天评估它的任何人来说,实用的结论很简单:安装`coqui-tts`,而不是原始的`TTS`包,并要理解该工具包的MPL-2.0许可证与它可运行的XTTS v2模型的非商业CPML许可证是相互独立的。作为一个工具包,它的优势在于跨模型架构的灵活性,而不是在任何单一使用场景下都是最快或最简单的选择——为此,可将本评测与PromptQuorum关于[Piper](/power-local-llm/piper-tts-review)(速度方面)、专门针对克隆模型的[XTTS v2](/power-local-llm/xtts-v2-review),或涵盖所有引擎全貌的[本地TTS许可证指南](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)结合参考。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub上的idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) —— 积极维护的分支:README、文档、许可证及发布历史。',
          '[PyPI上的coqui-tts](https://pypi.org/project/coqui-tts/) —— 已发布的包元数据,包括当前的MPL-2.0许可证和版本历史。',
          '[GitHub上的coqui-ai/TTS](https://github.com/coqui-ai/TTS) —— 如今无人维护的原始仓库(MPL-2.0许可证)。',
          '[Hugging Face上的XTTS v2](https://huggingface.co/coqui/XTTS-v2) —— 该声音克隆模型的模型卡片和CPML许可证正文。',
          '[Idiap研究所](https://www.idiap.ch/) —— 维护该社区分支的瑞士研究机构。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地TTS与声音克隆许可证:Piper、XTTS v2、F5-TTS与Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) —— 涵盖所有主要本地TTS引擎的许可证深度解析。',
          '[XTTS v2评测](/power-local-llm/xtts-v2-review) —— 对该工具包可运行的声音克隆模型的完整拆解。',
          '[Piper TTS评测](/power-local-llm/piper-tts-review) —— 同样深度评测的快速纯CPU本地TTS替代方案。',
          '[ElevenLabs对比Piper对比XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) —— 面向正在决定是否自托管的读者的云端与本地对比。',
          '[Bark TTS评测](/power-local-llm/bark-tts-review) —— 同样深度评测的富表现力、非语音本地TTS模型。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS评测(2026):由社区维护的声音克隆工具包',
      description:
        'Coqui TTS评测:源自Mozilla TTS的开源本地声音克隆工具包。Coqui AI已于2023年关闭;积极维护的分支是idiap/coqui-ai-TTS。历史、安装步骤、与XTTS v2的关系、MPL-2.0许可证及真实局限。',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'zh',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地自托管文本转语音工具包的开发者' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Idiap研究所' },
        { '@type': 'Thing', name: '文本转语音' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS评测(2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/coqui-tts-review-hero-ko.webp',
    title: 'Coqui TTS 리뷰(2026): 커뮤니티가 관리하는 음성 복제 툴킷',
    seoTitle: 'Coqui TTS 리뷰 2026: 커뮤니티 관리 TTS 툴킷',
    intro:
      'Coqui TTS는 Mozilla의 TTS 프로젝트에서 파생된 오픈소스 로컬 음성 합성 및 음성 복제 툴킷으로, 원래 스타트업 Coqui AI가 개발했으며 이 회사는 2023년 12월에 유료 서비스를 종료했습니다. 원본 저장소인 [coqui-ai/TTS](https://github.com/coqui-ai/TTS)는 2024년 8월 이후 새로운 커밋이 없어 더 이상 적극적으로 관리되지 않지만, MPL-2.0 라이선스 하에 계속 공개되어 있습니다. 개발은 커뮤니티 포크인 [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)에서 계속되고 있으며, [Idiap 연구소](https://www.idiap.ch/)가 관리하고 PyPI에 `coqui-tts` 패키지로 배포되고 있습니다. 이 리뷰에서는 이러한 역사, 음성 복제 모델 [XTTS v2](https://huggingface.co/coqui/XTTS-v2)와의 관계, 실제 설치 및 사용 명령어, MPL-2.0 라이선스, 그리고 2026년에 이 관리 전환이 실제로 중요한 지점을 다룹니다.',
    metaDescription:
      'Coqui TTS 리뷰: Mozilla TTS에서 파생된 오픈소스 로컬 음성 복제 툴킷입니다. Coqui AI는 2023년에 문을 닫았고, 적극적으로 관리되는 포크는 idiap/coqui-ai-TTS입니다. 역사, 설치 단계, XTTS v2와의 관계, MPL-2.0 라이선스, 그리고 솔직한 한계를 정리했습니다.',
    twitterDescription:
      'Coqui TTS 리뷰 2026: 2023년 문을 닫기 전 Coqui AI가 구축한 로컬 음성 복제 툴킷 — 지금은 Idiap 연구소의 커뮤니티 포크가 이를 이어가고 있습니다. 실제 설치 명령어, XTTS v2와의 연결, 그리고 폐쇄 이후 달라진 점.',
    audience:
      '유연한 자체 호스팅 음성 합성 툴킷과 음성 복제 지원을 원하며, 이를 기반으로 구축하기 전에 회사 폐쇄 이후의 관리 상태를 이해해야 하는 개발자와 연구자.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Coqui TTS 리뷰',
    targetKeywords: [
      'coqui tts 리뷰',
      'coqui tts',
      'coqui tts 설치',
      'coqui tts python',
      'coqui tts 라이선스',
      'idiap coqui-ai-tts',
      'coqui tts vs xtts',
      'coqui tts 아직 관리되나요',
    ],
    current_models_mentioned: ['XTTS v2', 'VITS', 'Tacotron2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**Coqui TTS는 원래 스타트업 Coqui AI가 개발한 오픈소스 로컬 음성 합성 및 음성 복제 툴킷이며, 이 회사는 2023년 12월에 유료 서비스를 종료했습니다.** 원본 저장소인 [coqui-ai/TTS](https://github.com/coqui-ai/TTS)는 2024년 8월 이후 업데이트되지 않았습니다. 대신 적극적으로 관리되는 커뮤니티 포크를 설치하십시오: `pip install coqui-tts`이며, 이는 [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)에서 비롯되었고 [Idiap 연구소](https://www.idiap.ch/)가 관리합니다. 이 툴킷은 MPL-2.0 라이선스이며, 음성 복제 모델 [XTTS v2](https://huggingface.co/coqui/XTTS-v2)를 구동하는 소프트웨어입니다 — 툴킷과 모델은 별개이며 각각 별도의 라이선스를 가집니다([라이선스 및 비용](#license-cost) 섹션 참고). 로컬 TTS 엔진 전체에 걸친 라이선스 비교는 PromptQuorum의 [로컬 TTS 라이선스 가이드](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)를 참고하십시오.',
    quickAnswerTop: {
      en: {
        question: 'Coqui TTS란 무엇이며, 지금도 관리되고 있습니까?',
        answer:
          '여러 모델 아키텍처(VITS, Tacotron2, 음성 복제 모델 XTTS v2)를 폭넓은 언어 지원과 함께 지원하는 유연한 로컬 음성 합성 툴킷을 원한다면 Coqui TTS는 사용할 가치가 있습니다. Mozilla의 TTS 연구 프로젝트에서 파생되었으며 스타트업 Coqui AI가 개발했습니다. 이 회사는 2023년 12월에 유료 서비스를 종료했고, 원본 저장소인 coqui-ai/TTS는 2024년 8월 이후 새로운 커밋이 없습니다 — 더 이상 적극적으로 관리되지 않지만, MPL-2.0 라이선스 하에 여전히 다운로드할 수 있습니다. 예, 관리되는 버전이 존재합니다: 개발은 커뮤니티 포크인 idiap/coqui-ai-TTS에서 계속되며, Idiap 연구소가 관리하고 PyPI에 coqui-tts 패키지로 배포되며, 2026년 1월까지도 릴리스가 이어지고 있습니다. 음성 복제에는 관심이 없고 가장 빠른 CPU 전용 합성을 원한다면 대신 Piper를 선택하십시오. XTTS v2나 다른 복제 지원 모델을 지속적으로 업데이트되는 단일 툴킷으로 실행하고 싶다면 Coqui TTS를 구체적으로 선택하십시오.',
        bullets: [
          'Mozilla의 TTS 연구 프로젝트에서 파생; 2021년 전 Mozilla TTS 엔지니어들이 설립한 스타트업 Coqui AI가 개발.',
          'Coqui AI는 2023년 12월에 유료 서비스를 종료; 원본 coqui-ai/TTS 저장소는 2024년 8월 이후 새로운 커밋이 없음.',
          '적극적으로 관리되는 커뮤니티 포크: idiap/coqui-ai-TTS, Idiap 연구소가 관리, PyPI에 coqui-tts로 배포.',
          '라이선스: 툴킷 자체는 MPL-2.0. 그 위에서 실행되는 XTTS v2 모델은 별도의 비상업적 라이선스(CPML)를 가짐 — 툴킷과 모델은 라이선스를 공유하지 않음.',
          '무료, 유료 플랜 없음; CPU에서 동작하며, XTTS v2와 같은 대형 모델에는 GPU 가속이 권장됨.',
          '최신 패키지 릴리스: coqui-tts v0.27.5, PyPI 기준 2026년 1월 26일 공개.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: Mozilla TTS에서 커뮤니티 포크까지', anchor: 'history' },
      { label: 'Coqui TTS가 실제로 하는 일', anchor: 'what-it-does' },
      { label: 'Coqui TTS와 XTTS v2의 관계', anchor: 'xtts-relationship' },
      { label: 'Coqui TTS 설치 및 실행: 단계별 안내', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스 및 비용', anchor: 'license-cost' },
      { label: 'Coqui TTS가 적합하지 않은 경우', anchor: 'limitations' },
      { label: 'Coqui TTS의 대안', anchor: 'alternatives' },
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
            text: 'Coqui TTS는 Mozilla의 TTS 프로젝트에서 파생된 오픈소스 로컬 음성 합성 및 음성 복제 툴킷으로, 원래 회사인 Coqui AI는 2023년 12월에 유료 서비스를 종료하여 원본 저장소가 2024년 8월부터 관리되지 않고 있지만, 적극적으로 관리되는 커뮤니티 포크인 idiap/coqui-ai-TTS가 Idiap 연구소 아래에서 개발을 이어가고 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '`pip install`로 설치하는 프로그램으로, XTTS v2라는 음성 복제 모델을 포함한 여러 AI 모델을 사용해 텍스트를 음성으로 변환할 수 있습니다 — 이를 만든 회사는 문을 닫았지만, 지금은 한 연구 기관이 소프트웨어를 최신 상태로 유지하고 있습니다.',
          },
        ],
        items: [
          'Mozilla의 TTS 연구 프로젝트에서 파생; 2021년 전 Mozilla TTS 엔지니어들이 설립한 스타트업 Coqui AI가 개발.',
          'Coqui AI는 2023년 12월에 유료 클라우드 서비스를 종료; 원본 GitHub 저장소 coqui-ai/TTS는 2024년 8월 이후 새로운 커밋이 없음.',
          '적극적으로 관리되는 포크: idiap/coqui-ai-TTS, Idiap 연구소가 관리, PyPI에 `coqui-tts`로 배포.',
          '라이선스: 툴킷은 MPL-2.0. 실행 가능한 XTTS v2 모델은 별도로 비상업적 CPML 하에 있음 — 둘을 혼동하지 말 것.',
          '무료, 유료 플랜 없음; CPU에서 동작하며, 더 큰 음성 복제 모델에는 GPU가 권장됨.',
          '최신 패키지 릴리스: coqui-tts v0.27.5, 2026년 1월 26일 공개.',
        ],
        callouts: [
          {
            type: 'note',
            text: '업데이트를 계속 받는 버전을 원한다면, 지금은 관리되지 않는 coqui-ai/TTS 저장소 유래의 원래 패키지명 `TTS`가 아니라 `coqui-tts`(관리되는 포크)를 설치하십시오. 아래의 설치 및 실행 섹션을 참고하십시오.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: Mozilla TTS에서 커뮤니티 포크까지',
        content: [
          '**Coqui TTS는 [Mozilla의 TTS 프로젝트](https://github.com/mozilla/TTS)로 거슬러 올라갑니다.** 이는 오픈소스 음성 기술에 관한 Mozilla 내부 연구 프로젝트였습니다. Mozilla가 2021년 이 연구 그룹을 해산하자, Eren Gölge, Kelly Davis, Josh Meyer, Reuben Morais를 포함한 여러 엔지니어가 독립 회사로서 이 작업을 이어가기 위해 스타트업 Coqui AI를 설립하고, 텍스트 음성 변환 툴킷(Coqui TTS)과 음성 텍스트 변환 툴킷(Coqui STT)을 모두 출시했습니다.',
          '**Coqui AI는 2023년 3월 시드 라운드로 330만 달러를 유치했으며**, 오픈소스 툴킷과 음성 복제 모델 XTTS에 대한 호스팅 접근을 포함한 유료 클라우드 서비스를 모두 제공했습니다. 이 회사는 오픈소스 소프트웨어 위에서 지속 가능한 비즈니스 모델을 찾지 못했고, 2023년 12월 유료 서비스 종료를 발표했으며, 서버는 2023년 12월 11일 오프라인으로 전환되었습니다.',
          '**원본 저장소인 [coqui-ai/TTS](https://github.com/coqui-ai/TTS)는 MPL-2.0 라이선스 하에 GitHub에서 계속 공개되어 있지만**, 2024년 8월 이후 새로운 커밋이 없으며 GitHub도 이를 공식적으로 보관 처리된 것으로 표시하지 않습니다 — 실제로는 적극적인 개발이나 버그 수정을 받지 못하고 있습니다.',
          '**커뮤니티 포크인 [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)가 개발을 이어가고 있습니다.** 이는 스위스 연구 기관인 [Idiap 연구소](https://www.idiap.ch/)가 관리하며, PyPI에는 원래 패키지명 `TTS`와 구별되는 `coqui-tts`라는 패키지명으로 배포됩니다. 해당 README는 이를 "원본의, 관리되지 않는 저장소의 포크"라고 명시적으로 밝히고 있으며, 릴리스 이력은 음성 복제 캐시를 추가한 v0.27.0 릴리스와 2026년 1월 26일의 v0.27.5 릴리스를 포함해 지속적인 업데이트를 보여줍니다.',
        ],
        faqs: [
          {
            q: 'Coqui TTS를 만든 사람은 누구입니까?',
            a: 'Coqui TTS는 2021년에 설립된 스타트업 Coqui AI가 만들었으며, 설립자에는 Mozilla TTS 연구 프로젝트의 전 엔지니어인 Eren Gölge, Kelly Davis, Josh Meyer, Reuben Morais가 포함됩니다. Coqui AI가 2023년 12월 유료 서비스를 종료한 후, 개발은 Idiap 연구소가 관리하는 커뮤니티 포크에서 계속되었습니다.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Coqui TTS가 실제로 하는 일',
        content: [
          'Coqui TTS는 단일 모델이 아니라 툴킷입니다 — 여러 서로 다른 음성 합성 모델 아키텍처를 실행(그리고 역사적으로는 훈련)하기 위한 통합 Python 인터페이스, CLI, 훈련 파이프라인을 제공합니다.',
        ],
        items: [
          '**다중 모델 인터페이스.** 단일 `TTS()` Python 클래스가 VITS 기반 단일/다중 화자 모델, Tacotron2 기반 모델, 음성 복제 모델 [XTTS v2](https://huggingface.co/coqui/XTTS-v2)를 포함한 여러 모델 아키텍처를 주변 애플리케이션 코드를 바꾸지 않고 로드하고 실행합니다.',
          '**명령줄 합성.** `tts` CLI 명령어는 터미널에서 직접 음성을 합성하며, `tts --list_models`로 사용 가능한 모든 사전 훈련 모델을 나열합니다.',
          '**XTTS v2를 통한 음성 복제.** 로드된 XTTS v2 모델에 `speaker_wav` 인수를 전달하면 짧은 참조 오디오 클립에서 음성을 복제하여, XTTS v2가 지원하는 언어로 그 복제된 음성으로 음성을 생성합니다.',
          '**방대한 사전 훈련 모델 라이브러리.** 이 툴킷은 문서에 따르면 기반이 되는 Fairseq 기반 대규모 다국어 모델을 통해 1,100개 이상의 언어를 지원하는 사전 훈련 모델에 대한 접근을 제공하며, 특정 언어를 위한 더 높은 품질의 엄선된 모델도 함께 제공합니다.',
          '**모델 훈련 및 파인튜닝.** 사전 훈련 모델 실행을 넘어, 이 툴킷은 사용자 지정 음성 모델을 구축하거나 미세 조정하기 위한 훈련 스크립트와 데이터셋 분석 유틸리티를 포함하고 있으며, 역사적으로 Coqui AI의 호스팅 훈련 서비스가 종료되기 전 가장 많이 사용된 기능 중 하나였습니다.',
          '**XTTS v2의 스트리밍 추론.** 이 툴킷은 XTTS v2를 사용한 저지연 스트리밍 합성을 문서화하고 있으며(관리되는 포크의 문서에 따르면 첫 오디오까지 200밀리초 미만의 지연 시간), 대화형 음성 애플리케이션에 유용합니다.',
        ],
        note: 'Coqui TTS는 모델을 실행하는 소프트웨어이며, XTTS v2는 그것이 실행할 수 있는 특정 모델입니다. 2026년에 Coqui TTS를 평가하는 대부분의 독자가 구체적으로 이를 통해 XTTS v2를 실행하는 데 관심이 있기 때문에, 여기서는 둘을 함께 다룹니다 — 두 관계에 대한 전용 섹션은 아래를 참고하십시오.',
      },
      xttsRelationship: {
        id: 'xtts-relationship',
        title: 'Coqui TTS와 XTTS v2의 관계',
        content: [
          '**Coqui TTS(툴킷)와 XTTS v2(모델)는 각각 별도의 라이선스를 가진 서로 다른 것이며, 이를 혼동하는 것은 흔한 라이선스 실수입니다.** Coqui TTS 툴킷 — Python 패키지, CLI, 훈련 코드 — 은 MPL-2.0 하에 있으며, 이는 툴킷 수정 사항에 대한 소스 공개 조건과 함께 상업적 사용을 허용하는 관대한 라이선스입니다. XTTS v2는 특정 사전 훈련 모델로, 그 가중치는 Coqui Public Model License(CPML)라는 비상업적 라이선스 하에 배포되며, 이는 툴킷의 MPL-2.0 라이선스와는 별개입니다.',
          '**실제로 이는 Coqui TTS 툴킷을 관대하게 라이선스된 모델과 함께 상업적으로 사용할 수 있음을 의미하지만**(호환 가능한 라이선스 하에 훈련된 VITS 또는 Tacotron2 모델), "Coqui TTS 툴킷이 XTTS v2 모델을 실행"하는 특정 조합은 해당 모델의 가중치와 출력에 대한 XTTS v2의 비상업적 제한을 그대로 물려받습니다. 동일한 툴킷을 통해 다른, 관대하게 라이선스된 모델을 실행하는 경우에는 그 제한이 적용되지 않습니다.',
          '**`coqui-tts` 패키지는 XTTS v2 사용법을 직접 문서화하고 있으며**, 모델은 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`로 로드됩니다. 이는 다른 추론 스택을 통해 모델 가중치를 직접 사용하는 것 외에, 이 툴킷이 XTTS v2를 실행하는 주요 지원 방법이기 때문입니다. 해당 모델의 라이선스와 기능에 대한 전체 분석은 PromptQuorum의 전용 [XTTS v2 리뷰](/power-local-llm/xtts-v2-review)를 참고하십시오.',
        ],
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Coqui TTS 설치 및 실행: 단계별 안내',
        content: '이 안내는 적극적으로 관리되는 `coqui-tts` 패키지를 설치하고, 관리되는 포크 자체의 README에 문서화된 구문을 사용해 첫 번째 합성을 실행합니다.',
        numberedItems: [
          {
            title: '관리되는 패키지를 설치합니다.',
            whyItMatters: 'Python 환경에서 `pip install coqui-tts`를 실행하십시오(uv를 사용한다면 `uv pip install coqui-tts`). 지금은 관리되지 않는 원본 저장소를 가리키는 이전 패키지명 `TTS`가 아니라, 구체적으로 `coqui-tts` 패키지를 설치하십시오.',
          },
          {
            title: '사용 가능한 사전 훈련 모델을 나열합니다.',
            whyItMatters: '`tts --list_models`를 실행하면 언어와 아키텍처(VITS, Tacotron2, XTTS 등)별로 정리된, 다운로드 가능한 사전 훈련 모델의 전체 카탈로그를 볼 수 있습니다.',
          },
          {
            title: '명령줄에서 음성을 합성합니다.',
            whyItMatters: '`tts --text "Hello world" --out_path output.wav`를 실행하면 기본 모델로 합성하며, 목록에서 특정 모델을 선택하려면 `--model_name <모델>`을 추가하십시오.',
          },
          {
            title: '(선택 사항) XTTS v2 음성 복제에 Python API를 사용합니다.',
            whyItMatters: '`TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)`로 모델을 로드한 후, 짧은 참조 오디오 클립을 가리키는 `speaker_wav` 인수와 음성을 복제하기 위한 `language` 인수와 함께 `.tts_to_file()`을 호출하십시오.',
          },
          {
            title: '(선택 사항) GPU 가속을 활성화합니다.',
            whyItMatters: '`TTS()` 생성자에 `gpu=True`를 전달하거나 로드된 모델 객체에서 `.to("cuda")`를 호출하면 NVIDIA GPU에서 추론을 실행할 수 있습니다 — CPU만 사용할 때 눈에 띄게 느려지는 XTTS v2에 권장됩니다.',
          },
          {
            title: '(선택 사항) XTTS v2를 위해 CPML 라이선스를 비대화식으로 수락합니다.',
            whyItMatters: 'XTTS v2를 처음 로드하면 CPML 수락을 위한 대화형 단계가 표시됩니다. 환경 변수 `COQUI_TOS_AGREED=1`을 설정하면 이를 비대화식으로 수락할 수 있으며, Docker 컨테이너나 CI 파이프라인에서 무인 사용 시 필요합니다.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '위의 기본 설치 안내 외에도, 다음은 관리되는 포크 자체 문서에서 가져온 일반적인 실제 사용 패턴입니다.',
        ],
        codeBlock: `# 명령줄: 사용 가능한 사전 훈련 모델 나열
tts --list_models

# 명령줄: 기본 모델로 합성
tts --text "Hello world" --out_path output.wav

# 명령줄: 특정 모델로 합성
tts --model_name "tts_models/en/ljspeech/tacotron2-DDC" \\
    --text "This is a test." --out_path output.wav

# Python API: 기본 합성
from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DDC")
tts.tts_to_file(text="Hello world", file_path="output.wav")

# Python API: XTTS v2 음성 복제(먼저 CPML을 비대화식으로 수락)
# export COQUI_TOS_AGREED=1
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

tts.tts_to_file(
    text="Hola, esto es una prueba.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="cloned_output.wav",
)

# Python API: 로드된 모델에서 사용 가능한 화자와 언어 나열
print(tts.speakers)
print(tts.languages)`,
        codeLanguage: 'python',
        note: '환경 변수 `COQUI_TOS_AGREED=1`과 `speaker_wav`/`language` 인수는 관리되는 포크의 README와 API 문서에 문서화되어 있습니다. 이 툴킷의 API는 주요 버전 간에 변경되었으므로(이 리뷰를 확인한 시점 기준으로 원본 `TTS` 패키지와 관리되는 `coqui-tts` 포크는 동일한 임포트 경로 `TTS.api.TTS`를 공유합니다), 배포 전에 최신 문서를 확인하십시오.',
        items: [
          '**자동화 환경을 위한 비대화식 CPML 수락**: XTTS v2를 처음 로드하기 전에 `COQUI_TOS_AGREED=1`을 설정하면, Docker 빌드와 CI 파이프라인이 대화형 프롬프트에서 멈추지 않습니다.',
          '**화자 및 언어 검사**: 다중 화자 또는 다국어 모델을 로드한 후, `tts.speakers`와 `tts.languages`는 로드된 모델이 실제로 지원하는 내용을 나열합니다 — 합성 전 입력을 검증하는 데 유용합니다.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스 및 비용',
        content: [
          '**Coqui TTS 툴킷은 MPL-2.0(Mozilla Public License 2.0) 하에 라이선스되어 있으며**, 이는 [PyPI](https://pypi.org/project/coqui-tts/)에 게시된 `coqui-tts` 패키지의 메타데이터와 [idiap/coqui-ai-TTS 저장소](https://github.com/idiap/coqui-ai-TTS)의 라이선스 파일을 통해 확인할 수 있습니다. MPL-2.0은 조건부 관대한 라이선스입니다: 툴킷을 상업적으로 사용할 수 있지만, 툴킷 자체의 소스 파일을 수정하여 배포하는 경우 그 특정 수정 파일도 MPL-2.0 하에 공개해야 합니다. 툴킷을 수정하지 않은 종속성으로 사용하는 경우, 자체 애플리케이션 코드를 MPL-2.0 하에 둘 필요는 없습니다.',
          '**XTTS v2 모델은 별도로 Coqui Public Model License(CPML) 하에 라이선스되어 있으며, 이는 비상업적입니다** — 이는 모델 가중치와 그 생성된 오디오 출력에 적용되며, 이를 실행하는 Coqui TTS 툴킷 코드에는 적용되지 않습니다. 해당 라이선스에 대한 전체 분석은 PromptQuorum의 [XTTS v2 리뷰](/power-local-llm/xtts-v2-review)를 참고하십시오.',
          '**Coqui TTS 툴킷 자체에는 유료 플랜, 구독, 라이선스 비용이 없습니다.** Coqui AI의 이전 유료 호스팅 서비스는 2023년 12월에 종료되어 어떤 가격으로도 이용할 수 없습니다. 오늘날 Coqui TTS를 사용하는 유일한 방법은 자체 호스팅이며, 관리되지 않는 원본 패키지를 사용하거나 적극적으로 관리되는 `coqui-tts` 포크를 사용하는 것입니다.',
        ],
        faqs: [
          {
            q: 'Coqui TTS는 어떤 라이선스를 사용합니까?',
            a: 'Coqui TTS 툴킷 자체는 MPL-2.0 하에 있으며, 툴킷 자체의 소스 파일에 대한 수정 사항을 동일한 라이선스로 공개한다는 조건으로 상업적 사용을 허용합니다. 이는 실행하는 특정 모델의 라이선스와는 별개입니다 — 예를 들어 XTTS v2 모델은 비상업적인 Coqui Public Model License(CPML) 하에 있으며, 이는 모델 가중치와 출력에 적용되고 툴킷 코드에는 적용되지 않습니다.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Coqui TTS가 적합하지 않은 경우',
        content: [
          'Coqui TTS는 유연한 다중 모델 툴킷이며, 모든 사용 사례에서 가장 빠르거나 가장 단순한 선택지는 아닙니다. 다음과 같은 상황에는 적합하지 않습니다:',
        ],
        items: [
          '**원본의, 관리되지 않는 저장소를 기반으로 구축하는 경우.** `pip install coqui-tts`(관리되는 포크) 대신 `pip install TTS`(원본 패키지명)를 실행하면, 2024년 8월 이후 업데이트를 받지 못한 코드를 기반으로 구축하는 것입니다 — 의존하기 전에 튜토리얼이나 의존성이 실제로 어떤 패키지를 참조하는지 확인하십시오.',
          '**가능한 가장 빠른 CPU 전용 합성.** GPU가 없는 Raspberry Pi 같은 저사양 하드웨어에서 실시간 음성이 우선순위라면, [Piper](/power-local-llm/piper-tts-review)가 이를 위해 특별히 제작되었고 배포도 더 간단합니다. Coqui TTS의 더 큰 모델, 특히 XTTS v2는 CPU만 사용할 때 눈에 띄게 느립니다.',
          '**별도의 라이선스 확인 없는 상업적 음성 복제.** Coqui TTS 툴킷을 통해 XTTS v2를 실행해도 해당 모델의 가중치와 출력에 대한 XTTS v2 자체의 비상업적 CPML 제한은 여전히 적용됩니다 — 툴킷의 MPL-2.0 라이선스가 이를 무효화하지 않습니다. 위의 라이선스 및 비용 섹션을 참고하십시오.',
          '**장기적으로 보장되는 기업 지원.** 회사 Coqui AI는 2023년 12월 이후 더 이상 존재하지 않습니다. 현재 포크는 연구 기관이 커뮤니티 기반으로 관리하고 있으며, 이는 지원 계약을 갖춘 자금 지원 기업과는 다른 관리 모델입니다 — 중요한 프로덕션 인프라 결정에는 이를 고려하십시오.',
          '**버전 간 단일하고 안정적인 API.** 개발이 관리되지 않는 원본과 적극적으로 개발되는 포크 사이에서 이동했기 때문에, 온라인상의 일부 튜토리얼, Stack Overflow 답변, 블로그 게시물은 이전 API 표면이나 원본 패키지명을 참조할 수 있습니다 — 오래된 검색 결과가 아니라 현재의 `coqui-tts` 문서와 대조하여 확인하십시오.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Coqui TTS의 대안',
        itemHeadings: true,
        columns: ['도구', '최적 용도', '라이선스'],
        rows: [
          {
            '도구': '[Piper](/power-local-llm/piper-tts-review)',
            '최적 용도': '가장 빠른 CPU 전용 합성, 음성 복제 없음, Raspberry Pi에서 실시간',
            '라이선스': 'GPL-3.0-or-later',
          },
          {
            '도구': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            '최적 용도': '더 넓은 툴킷이 아니라 XTTS v2만 필요한 경우의 음성 복제 모델 자체',
            '라이선스': 'CPML(비상업적)',
          },
          {
            '도구': '[Bark](/power-local-llm/bark-tts-review)',
            '최적 용도': '표현력 있는 비언어 오디오 — 웃음, 한숨, 환경음',
            '라이선스': 'MIT',
          },
          {
            '도구': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '최적 용도': '가장 자연스러운 영어 내레이션 품질(음성 복제 없음)',
            '라이선스': 'MIT',
          },
          {
            '도구': '[ElevenLabs](https://elevenlabs.io)',
            '최적 용도': '자체 호스팅을 선호하지 않는 팀을 위한, 상업적 음성 복제가 가능한 관리형 클라우드 API',
            '라이선스': '독점(유료 클라우드 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Coqui TTS란 무엇입니까?',
            a: 'Coqui TTS는 Mozilla의 TTS 연구 프로젝트에서 파생된 오픈소스 로컬 음성 합성 및 음성 복제 툴킷으로, 원래 스타트업 Coqui AI가 개발했습니다. 음성 복제 모델 XTTS v2를 포함한 여러 모델 아키텍처를 단일 Python 인터페이스와 CLI를 통해 지원합니다.',
          },
          {
            q: 'Coqui TTS는 지금도 관리되고 있습니까?',
            a: '원본 coqui-ai/TTS 저장소는 더 이상 적극적으로 관리되지 않습니다 — 회사 Coqui AI가 2023년 12월 유료 서비스를 종료한 이후, 2024년 8월부터 새로운 커밋이 없습니다. 적극적으로 관리되는 커뮤니티 포크인 idiap/coqui-ai-TTS가 Idiap 연구소 아래에서 개발을 이어가고 있으며, PyPI에 coqui-tts 패키지로 배포되고 있고, 2026년 1월까지도 릴리스가 이어지고 있습니다.',
          },
          {
            q: 'Coqui TTS는 무료입니까?',
            a: '예, 툴킷 자체에는 유료 플랜이나 라이선스 비용이 없습니다. Coqui AI의 이전 유료 호스팅 서비스는 2023년 12월에 종료되어 어떤 가격으로도 이용할 수 없습니다. XTTS v2와 같이 이 툴킷 위에서 실행되는 일부 특정 모델은 해당 모델의 가중치와 출력의 상업적 사용을 제한하는 자체 별도 라이선스(CPML)를 가지고 있습니다.',
          },
          {
            q: 'coqui-tts 패키지와 TTS 패키지의 차이는 무엇입니까?',
            a: 'TTS는 원본 PyPI 패키지명으로, 2024년 8월 이후 업데이트가 없는 관리되지 않는 coqui-ai/TTS 저장소와 연결되어 있습니다. coqui-tts는 적극적으로 관리되는 포크의 패키지명으로, Idiap 연구소 아래의 idiap/coqui-ai-TTS 저장소에서 배포되며, 2026년 1월의 v0.27.5를 포함해 정기적으로 릴리스됩니다. 업데이트를 계속 받는 버전을 원한다면 coqui-tts를 설치하십시오.',
          },
          {
            q: 'Coqui TTS는 음성 복제를 지원합니까?',
            a: '예, 툴킷이 로드하고 실행할 수 있는 XTTS v2 모델을 통해 지원합니다. XTTS v2는 speaker_wav 인수로 전달된 짧은 참조 오디오 클립에서 음성을 복제합니다. XTTS v2 자체의 라이선스인 Coqui Public Model License(CPML)는 비상업적이며, 툴킷의 MPL-2.0 라이선스와는 별개라는 점에 유의하십시오.',
          },
          {
            q: 'Coqui AI는 왜 문을 닫았습니까?',
            a: 'Coqui TTS의 개발사인 Coqui AI는 오픈소스 음성 기술 위에서 지속 가능한 비즈니스 모델을 구축하는 데 어려움을 겪은 끝에, 2023년 12월 유료 호스팅 서비스 종료를 발표했고 서버는 2023년 12월 11일 오프라인으로 전환되었습니다. 오픈소스 툴킷 자체는 계속 사용 가능한 상태로 남았으며, 개발은 이후 커뮤니티 포크에서 계속되었습니다.',
          },
          {
            q: 'Coqui TTS의 최신 릴리스는 무엇입니까?',
            a: 'PyPI 등록 정보에 따르면 적극적으로 관리되는 coqui-tts 패키지의 최신 릴리스는 v0.27.5이며, 2026년 1월 26일에 공개되었습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Coqui TTS는 배후 회사가 문을 닫은 후 오픈소스 인프라에 무슨 일이 일어나는지 보여주는 진정으로 유용한 사례 연구입니다: 원본 저장소는 2024년 8월에 조용해졌지만 소프트웨어는 사라지지 않았습니다 — 한 연구 기관이 관리를 이어받아 패키지명을 바꾸고 2026년까지 계속 릴리스를 출시했습니다. 오늘날 이를 평가하는 누구에게나 실용적인 결론은 간단합니다: 원본 `TTS` 패키지가 아니라 `coqui-tts`를 설치하고, 툴킷의 MPL-2.0 라이선스가 실행 가능한 XTTS v2 모델의 비상업적 CPML 라이선스와는 별개라는 점을 이해하십시오. 툴킷으로서의 강점은 어떤 단일 사용 사례에서 가장 빠르거나 가장 단순한 것이 아니라 모델 아키텍처 전반에 걸친 유연성에 있습니다 — 이를 위해서는 이 리뷰를 속도를 위한 PromptQuorum의 [Piper](/power-local-llm/piper-tts-review) 커버리지, 복제 모델 자체를 위한 [XTTS v2](/power-local-llm/xtts-v2-review), 또는 엔진 전반의 전체 그림을 위한 [로컬 TTS 라이선스 가이드](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)와 함께 참고하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — 적극적으로 관리되는 포크: README, 문서, 라이선스, 릴리스 이력.',
          '[PyPI의 coqui-tts](https://pypi.org/project/coqui-tts/) — 현재의 MPL-2.0 라이선스와 버전 이력을 포함한 공개 패키지 메타데이터.',
          '[GitHub의 coqui-ai/TTS](https://github.com/coqui-ai/TTS) — 지금은 관리되지 않는 원본 저장소(MPL-2.0 라이선스).',
          '[Hugging Face의 XTTS v2](https://huggingface.co/coqui/XTTS-v2) — 음성 복제 모델의 모델 카드와 CPML 라이선스 본문.',
          '[Idiap 연구소](https://www.idiap.ch/) — 커뮤니티 포크를 관리하는 스위스 연구 기관.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 TTS 및 음성 복제 라이선스: Piper, XTTS v2, F5-TTS, Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 주요 로컬 TTS 엔진 전체를 다루는 라이선스 심층 비교.',
          '[XTTS v2 리뷰](/power-local-llm/xtts-v2-review) — 이 툴킷이 실행할 수 있는 음성 복제 모델의 전체 분석.',
          '[Piper TTS 리뷰](/power-local-llm/piper-tts-review) — 동일한 깊이로 리뷰한, 빠르고 CPU 전용인 로컬 TTS 대안.',
          '[ElevenLabs 대 Piper 대 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 자체 호스팅 여부를 결정하려는 독자를 위한 클라우드 대 로컬 비교.',
          '[Bark TTS 리뷰](/power-local-llm/bark-tts-review) — 동일한 깊이로 리뷰한, 표현력이 풍부하고 비언어적인 로컬 TTS 모델.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Coqui TTS 리뷰(2026): 커뮤니티가 관리하는 음성 복제 툴킷',
      description:
        'Coqui TTS 리뷰: Mozilla TTS에서 파생된 오픈소스 로컬 음성 복제 툴킷입니다. Coqui AI는 2023년에 문을 닫았고, 적극적으로 관리되는 포크는 idiap/coqui-ai-TTS입니다. 역사, 설치 단계, XTTS v2와의 관계, MPL-2.0 라이선스, 그리고 솔직한 한계를 정리했습니다.',
      url: 'https://promptquorum.com/power-local-llm/coqui-tts-review',
      inLanguage: 'ko',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 자체 호스팅 음성 합성 툴킷을 평가하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Idiap 연구소' },
        { '@type': 'Thing', name: '음성 합성' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Coqui TTS 리뷰(2026)', item: 'https://promptquorum.com/power-local-llm/coqui-tts-review' },
      ],
    },
  },
}
