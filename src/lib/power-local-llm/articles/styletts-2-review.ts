// StyleTTS 2 Review: Columbia's Research-Grade, MIT-Licensed Speech Model
// Slug: styletts-2-review
// Companion to: local-tts-voice-cloning-piper-coqui-xtts.ts (licensing deep dive),
// elevenlabs-vs-local-tts-piper-xtts.ts (cloud vs. local TTS comparison), piper-tts-review.ts,
// coqui-tts-review.ts, xtts-v2-review.ts, and bark-tts-review.ts — closes out the six-engine TTS/STT review series

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-en.webp',
    title: 'StyleTTS 2 Review (2026): Columbia\'s MIT-Licensed Research Model for Natural Speech',
    seoTitle: 'StyleTTS 2 Review 2026: MIT-Licensed Speech Synthesis',
    intro:
      'StyleTTS 2 is an open-source text-to-speech model released by researchers at Columbia University, distributed on [GitHub](https://github.com/yl4579/StyleTTS2), that generates natural-sounding speech using style diffusion and adversarial training with large speech language models. Its code is licensed under **MIT**, but its README adds a separate, non-license disclosure condition for the pre-trained model weights, and the public repository has had no commits since March 7, 2024. This review covers what StyleTTS 2 actually does, real installation and inference commands, the licensing nuance between the MIT code and the conditional model weights, and its dormant-but-not-archived maintenance status — the honest picture for anyone evaluating it in 2026.',
    metaDescription:
      'StyleTTS 2 review: Columbia University\'s MIT-licensed, style-diffusion speech model. Real install commands, the model-weights licensing nuance, and its maintenance status (no commits since March 2024) for 2026.',
    twitterDescription:
      'StyleTTS 2 review 2026: Columbia\'s research-grade speech model uses style diffusion and adversarial training for natural narration, under an MIT license with a documentation-level catch on the pre-trained weights. Real commands, honest limits, and a maintenance-status check.',
    audience:
      'Developers and researchers evaluating a local, MIT-licensed text-to-speech model for high-quality narration, who need to understand its research-repo maintenance status and licensing nuance before building on it.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 review',
    targetKeywords: [
      'styletts 2 review',
      'styletts2',
      'styletts 2 license',
      'styletts 2 install',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 maintained',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2 is an open-source, research-grade text-to-speech model from Columbia University that generates natural-sounding speech using style diffusion and adversarial training with large speech language models.** Its code is licensed under **MIT**, installed with `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. Its README adds a separate, non-license condition on the pre-trained model weights (disclose that speech is synthesized unless you have the speaker\'s permission), and the public GitHub repository shows no commits since March 7, 2024. For a full licensing comparison across local TTS engines, see PromptQuorum\'s [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'What is StyleTTS 2 and is it still maintained?',
        answer:
          'StyleTTS 2 is worth using if you want the most natural-sounding English narration available from a local, MIT-licensed model, produced through style diffusion and adversarial training, a technique its NeurIPS paper reports as matching or exceeding human recordings on standard benchmarks. Its LibriTTS multi-speaker checkpoint also supports zero-shot style transfer from a 5-10 second (15-30 seconds recommended) reference clip, similar in spirit to voice cloning, though it is not packaged as a one-line cloning feature the way XTTS v2 is. Its code is MIT-licensed, but its own README adds a non-license condition on the pre-trained model weights: you must disclose that speech is synthesized unless you have the speaker\'s permission. Its official inference path requires the GPL-3.0-licensed espeak-ng for phonemization; a separate, community-maintained pip package (`styletts2` by Sidharth Rajaram) avoids that by using the MIT-licensed gruut library instead, but its last release was January 11, 2024. The official GitHub repository is not marked archived, but has had no commits since March 7, 2024 — treat it as a dormant research artifact, not an actively developed product, before depending on it for anything production-critical.',
        bullets: [
          'Generates natural-sounding speech via style diffusion and adversarial training, per its NeurIPS paper, matching or exceeding human recordings on standard single-speaker benchmarks.',
          'Code license: MIT. Pre-trained model weights carry an additional README-level disclosure condition, not part of the MIT license text itself.',
          'LibriTTS multi-speaker checkpoint supports zero-shot style transfer from a 5-10 second reference clip (15-30 seconds recommended for best quality).',
          'Official inference path needs GPL-3.0-licensed espeak-ng; a community pip package (`styletts2`) avoids it via MIT-licensed gruut but was last released January 11, 2024.',
          'No commits to the official GitHub repository since March 7, 2024; not marked archived, 6,300+ stars.',
          'Built by researchers at Columbia University\'s Department of Electrical Engineering; pre-trained checkpoints are primarily English (LJSpeech, LibriTTS).',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: A Columbia Research Project', anchor: 'history' },
      { label: 'What StyleTTS 2 Actually Does', anchor: 'what-it-does' },
      { label: 'Install and Run StyleTTS 2: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Cost', anchor: 'license-cost' },
      { label: 'What StyleTTS 2 Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to StyleTTS 2', anchor: 'alternatives' },
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
            text: 'StyleTTS 2 is Columbia University\'s MIT-licensed, research-grade text-to-speech model that produces natural-sounding speech via style diffusion and adversarial training, with a documentation-level disclosure condition on its pre-trained weights and no GitHub commits since March 7, 2024.',
          },
          {
            type: 'plain-terms',
            text: 'It is a free, downloadable AI model that turns text into very natural-sounding speech, built by university researchers rather than a company — free to use commercially under its code license, but its own instructions ask you to tell listeners the speech is synthesized, and nobody appears to be actively fixing bugs in it anymore.',
          },
        ],
        items: [
          'Natural-sounding speech via style diffusion and adversarial training, matching or exceeding human recordings on standard single-speaker benchmarks per its NeurIPS paper.',
          'Code license: MIT. Pre-trained model weights carry a separate README disclosure condition, not encoded in the MIT license text.',
          'Zero-shot style transfer from a 5-10 second reference clip via the LibriTTS multi-speaker checkpoint (15-30 seconds recommended).',
          'Official inference needs GPL-3.0-licensed espeak-ng; a community pip package avoids it but was last released January 11, 2024.',
          'No commits to the official repository since March 7, 2024; not archived, 6,300+ GitHub stars.',
          'Pre-trained checkpoints are primarily English; the text aligner was also trained on Japanese and Chinese corpora and reportedly generalizes to some other languages without fine-tuning.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A GitHub issue on the project (#37) flagged that the README\'s disclosure requirement for pre-trained models sits outside the MIT license file itself, which some readers find confusing. Read both the LICENSE file and the README\'s model-usage section yourself before deploying — see the License and Cost section below.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: A Columbia Research Project',
        content: [
          '**StyleTTS 2 was created by researchers in the Department of Electrical Engineering at Columbia University** — Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler, and Nima Mesgarani — and published as a NeurIPS 2023 paper titled "StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models."',
          '**The paper\'s central claim is that its combination of style diffusion (modeling speaking style as a latent probability distribution rather than a single fixed vector) and adversarial training against large pre-trained speech language models lets it model human-like speech variation more accurately than earlier approaches.** On the single-speaker LJSpeech benchmark, the paper reports StyleTTS 2 matching or exceeding recordings of real human speech in listener evaluations; on the multi-speaker LibriTTS dataset, it reports outperforming previously available public models on zero-shot speaker adaptation.',
          '**The public [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2) GitHub repository has accumulated over 6,300 stars**, and is not marked archived — but PromptQuorum found no commits to the repository\'s main branch since March 7, 2024, based on the project\'s own public commit history. This is consistent with a university research release rather than a commercially maintained open-source product: the code, paper, and pre-trained checkpoints were published to accompany the research, without an ongoing commitment to feature development or bug-fix releases.',
          '**A community-maintained pip package, `styletts2` by developer Sidharth Rajaram**, wraps the original research code into an installable package (`pip install styletts2`) that swaps out the GPL-3.0-licensed espeak-ng phonemizer for the MIT-licensed gruut library, to keep the whole install chain permissively licensed. Its most recent release on [PyPI](https://pypi.org/project/styletts2/) is version 0.1.6, published January 11, 2024 — also over two and a half years old as of this review, and a separate, third-party project from the original Columbia research code.',
        ],
        faqs: [
          {
            q: 'Who created StyleTTS 2?',
            a: 'StyleTTS 2 was created by Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler, and Nima Mesgarani, researchers in the Department of Electrical Engineering at Columbia University, and published as a NeurIPS 2023 paper.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What StyleTTS 2 Actually Does',
        content: [
          'StyleTTS 2 is a text-to-speech model that generates a mel-spectrogram (and, in its end-to-end configuration, a raw waveform) from input text, using a diffusion model to sample a latent "style" vector rather than requiring one to be predicted deterministically — this is the mechanism its paper credits with producing more natural, human-like prosody.',
        ],
        items: [
          '**Style diffusion for natural prosody.** Instead of predicting a single fixed style embedding from text, StyleTTS 2 samples from a learned probability distribution over styles via diffusion, which its paper reports produces more natural variation in pitch, rhythm, and emphasis than deterministic approaches.',
          '**Adversarial training against speech language models.** The training process pits the TTS model against large pre-trained speech language models (SLMs) acting as discriminators, a technique its paper credits with closing the remaining gap to human-recording quality on the LJSpeech benchmark.',
          '**Two officially released pre-trained checkpoints.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (single English speaker, 24kHz) and [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (multi-speaker English) are both hosted on Hugging Face.',
          '**Zero-shot style transfer from reference audio.** The LibriTTS multi-speaker checkpoint can synthesize new text in a style captured from a reference audio clip — the project\'s own documentation and third-party guides describe a 5-10 second minimum, with 15-30 seconds of clean, single-speaker reference audio recommended for accurate timbre, prosody, and pronunciation.',
          '**Primarily English pre-trained checkpoints, with some multilingual groundwork.** The officially released checkpoints are trained on English datasets (LJSpeech, LibriTTS). The paper notes its text aligner component was also pre-trained on Japanese (JVS) and Chinese (AiShell) corpora and "works well for most other languages without fine-tuning," and a multilingual PL-BERT model covering 14 languages is referenced as a starting point for training a non-English StyleTTS 2 model yourself — but there is no officially released, ready-to-use non-English checkpoint.',
        ],
        note: 'StyleTTS 2 is a research codebase with published pre-trained checkpoints, not a polished consumer product — installing and running it requires more setup than a pip-installable, single-purpose tool like Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Install and Run StyleTTS 2: Step by Step',
        content: 'This walkthrough follows the project\'s own documented setup for running inference with a pre-trained checkpoint.',
        numberedItems: [
          {
            title: 'Clone the repository and install dependencies.',
            whyItMatters: 'Run `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`. This installs the core Python dependencies listed in the project\'s own requirements file.',
          },
          {
            title: 'Install the phonemizer and espeak-ng.',
            whyItMatters: 'Run `pip install phonemizer` and, on Linux, `sudo apt-get install espeak-ng` (or the equivalent for your OS). Note that espeak-ng is itself licensed under GPL-3.0 — see the License and Cost section for why that matters for the inference path, not just the StyleTTS 2 code itself.',
          },
          {
            title: 'Download a pre-trained checkpoint.',
            whyItMatters: 'Download either [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (single speaker) or [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (multi-speaker, supports style transfer) from Hugging Face into the project directory.',
          },
          {
            title: 'Run inference via the provided notebooks.',
            whyItMatters: 'The project ships `Demo/Inference_LJSpeech.ipynb` and `Demo/Inference_LibriTTS.ipynb` — open the one matching your downloaded checkpoint in Jupyter to load the model and synthesize your first sample.',
          },
          {
            title: '(Alternative) Use the community pip package for a simpler MIT-only install chain.',
            whyItMatters: 'Run `pip install styletts2`, then `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("Hello there.", output_wav_file="test.wav")`. This third-party package (last released January 11, 2024) uses the MIT-licensed gruut library instead of espeak-ng, avoiding the GPL-3.0 dependency — at the cost of relying on an also-dormant, unofficial wrapper.',
          },
          {
            title: '(Optional) Provide a reference clip for style transfer.',
            whyItMatters: 'With the LibriTTS checkpoint, pass a `target_voice_path` argument (community package) or the equivalent reference-audio parameter (official notebook) pointing to a clean, 15-30 second single-speaker WAV file to synthesize new text in that captured style.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'These examples show both the community pip package\'s simplified API and the pattern used in the official project\'s inference notebooks.',
        ],
        codeBlock: `# Simplest path: community pip package (MIT-only dependency chain,
# last released 2024-01-11 — verify it still works before depending on it)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# Zero-shot style transfer from a reference clip (LibriTTS-style checkpoint)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# Custom checkpoint and config path
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- Official repository path (requires espeak-ng, GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# Then open Demo/Inference_LJSpeech.ipynb or Demo/Inference_LibriTTS.ipynb
# in Jupyter and run the provided cells against your downloaded checkpoint.`,
        codeLanguage: 'python',
        note: 'The community `styletts2` pip package\'s exact API (`tts.StyleTTS2()`, `.inference()`, `target_voice_path`) is documented in its own [PyPI page](https://pypi.org/project/styletts2/) and README, last updated for version 0.1.6 (January 11, 2024) — verify it still matches before scripting against it. The official repository\'s notebook-based path is documented directly in the [project README](https://github.com/yl4579/StyleTTS2).',
        items: [
          '**Reference audio quality matters for style transfer.** A clean, single-speaker 15-30 second clip produces noticeably better style transfer than a short, noisy, or multi-speaker reference.',
          '**Two separate dependency chains exist.** The official repository\'s notebook path pulls in GPL-3.0-licensed espeak-ng; the community pip package avoids that with gruut instead — pick the chain that matches your licensing requirements before you build tooling around either one.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Cost',
        content: [
          '**StyleTTS 2\'s code is licensed under the MIT License**, confirmed via the `LICENSE` file in the [official repository](https://github.com/yl4579/StyleTTS2). MIT is a permissive license: you can use, modify, and redistribute the code, including commercially, with minimal restriction.',
          '**The pre-trained model weights carry a separate, non-license condition stated in the README, not in the LICENSE file itself.** The project\'s README asks users to "inform listeners that speech samples are synthesized by StyleTTS 2 models, unless you have permission to use the voice you synthesize." This is a documentation-level request, not a formal license clause — a [GitHub issue on the project (#37)](https://github.com/yl4579/StyleTTS2/issues/37) explicitly flagged this as potentially confusing, since the repository\'s license badge and LICENSE file suggest only MIT terms apply to a reader who does not also read the README\'s model-usage section. PromptQuorum found no maintainer response resolving that ambiguity in the public issue thread. Treat the disclosure condition as a real, documented request from the authors, and comply with it — but understand it sits outside the formal MIT grant on the code itself, which is a genuinely unusual structure worth flagging before commercial use.',
          '**Running official inference pulls in a GPL-3.0-licensed dependency: espeak-ng.** The project\'s own installation instructions call for `pip install phonemizer` plus a system-level `espeak-ng` install, and espeak-ng is licensed under GPL-3.0. GPL-3.0 is a copyleft license with distribution obligations distinct from MIT; using espeak-ng as an unmodified external system dependency is generally treated differently from statically linking or redistributing its modified source, but the exact boundary depends on your deployment. The community `styletts2` pip package sidesteps this specific issue by using the MIT-licensed gruut library instead of espeak-ng — a real practical difference if you want an all-permissive dependency chain, at the cost of depending on a third-party package with an even older last release date (January 11, 2024) than the official repository.',
          'None of this is legal advice. Read the LICENSE file, the README\'s model-usage section, and consult a lawyer for your specific deployment before shipping StyleTTS 2 in a commercial product.',
        ],
        faqs: [
          {
            q: 'What license does StyleTTS 2 use?',
            a: 'StyleTTS 2\'s code is licensed under MIT. Its pre-trained model weights carry a separate, non-license condition stated in the project\'s README (disclose synthesized speech unless you have the speaker\'s permission), which is not part of the formal MIT license text — a distinction a GitHub issue on the project flagged as potentially confusing. This is not legal advice; read the LICENSE file and README yourself before commercial use.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What StyleTTS 2 Is Not Good For',
        content: [
          'StyleTTS 2 is a research-grade model with genuinely strong output quality, not a polished, actively maintained consumer product. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Readers who want a simple pip-install-and-go experience.** Unlike [Piper](/power-local-llm/piper-tts-review), which is `pip install piper-tts` and a single CLI command away from working audio, the official StyleTTS 2 path involves cloning a research repository, installing a phonemizer, a system-level espeak-ng dependency, and running Jupyter notebooks — a meaningfully higher setup bar.',
          '**Production deployment without ML engineering effort.** There is no maintained web server mode, no official Docker image, and no company backing ongoing support. Anyone deploying StyleTTS 2 in production should expect to write and maintain their own serving layer around the research code.',
          '**Guaranteed ongoing bug fixes or feature updates.** With no commits to the official repository since March 7, 2024, and the community pip package\'s last release dated January 11, 2024, do not assume active maintenance for either dependency chain — budget for the possibility that you are on your own for any issue you encounter.',
          '**Ready-to-use non-English speech.** The officially released pre-trained checkpoints are English-only (LJSpeech, LibriTTS). Training a non-English model yourself is architecturally possible per the paper\'s notes on its multilingual text aligner and PL-BERT, but requires your own training run — there is no downloadable non-English checkpoint from the project.',
          '**A single, unambiguous license grant on everything you download.** Because the code (MIT) and the pre-trained weights (MIT plus a README disclosure condition) are governed slightly differently, and the official inference path pulls in a GPL-3.0 dependency, StyleTTS 2 does not offer the single, simple license story that a project like Bark (fully MIT, no extra conditions) does.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to StyleTTS 2',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Piper](/power-local-llm/piper-tts-review)',
            'Best fit': 'Simple pip-install-and-go setup, fastest CPU-only synthesis, real-time on a Raspberry Pi',
            'License': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Best fit': 'Packaged voice cloning from 6 seconds of reference audio, 17 languages',
            'License': 'CPML (non-commercial)',
          },
          {
            'Tool': '[Coqui TTS toolkit](/power-local-llm/coqui-tts-review)',
            'Best fit': 'Flexible multi-backend toolkit with broad language support and a maintained fork',
            'License': 'MPL-2.0',
          },
          {
            'Tool': '[Bark](/power-local-llm/bark-tts-review)',
            'Best fit': 'Expressive, non-speech audio — laughter, sighs, ambient sound, single unambiguous MIT license',
            'License': 'MIT',
          },
          {
            'Tool': '[ElevenLabs](https://elevenlabs.io)',
            'Best fit': 'Managed cloud API with commercial voice cloning and active support, no self-hosting effort',
            'License': 'Proprietary (paid cloud API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is StyleTTS 2?',
            a: 'StyleTTS 2 is an open-source text-to-speech model from researchers at Columbia University that generates natural-sounding speech using style diffusion and adversarial training with large speech language models, published as a NeurIPS 2023 paper.',
          },
          {
            q: 'Is StyleTTS 2 free to use commercially?',
            a: 'Its code is licensed under MIT, which permits commercial use. Its pre-trained model weights carry a separate, non-license condition in the README asking you to disclose synthesized speech unless you have the speaker\'s permission. This is not legal advice; read the LICENSE file and README yourself before commercial deployment.',
          },
          {
            q: 'Can StyleTTS 2 clone a voice?',
            a: 'Its LibriTTS multi-speaker checkpoint supports zero-shot style transfer from a reference audio clip (5-10 seconds minimum, 15-30 seconds recommended), which is similar in spirit to voice cloning. It is not packaged as a simple, one-line cloning feature the way XTTS v2 is — using it requires the notebook-based official workflow or the community pip package.',
          },
          {
            q: 'Is StyleTTS 2 still maintained?',
            a: 'The official GitHub repository is not marked archived, but PromptQuorum found no commits since March 7, 2024. The community pip package that simplifies installation was last released January 11, 2024. Treat both as dormant research artifacts rather than actively developed software.',
          },
          {
            q: 'Does StyleTTS 2 support languages other than English?',
            a: 'The officially released pre-trained checkpoints (LJSpeech, LibriTTS) are English-only. The paper notes its text aligner component was also trained on Japanese and Chinese corpora and generalizes reasonably to other languages without fine-tuning, and references a 14-language multilingual PL-BERT model as a starting point for training your own non-English model — but there is no ready-to-use, officially released non-English checkpoint.',
          },
          {
            q: 'Why does StyleTTS 2\'s official install need espeak-ng, and why does that matter?',
            a: 'The official inference path uses the phonemizer library with espeak-ng as its backend for converting text to phonemes. espeak-ng is licensed under GPL-3.0, a copyleft license with different distribution obligations than MIT. A community pip package (`styletts2`) avoids this by using the MIT-licensed gruut library instead, at the cost of depending on an even older, unofficial release (last updated January 11, 2024).',
          },
          {
            q: 'How does StyleTTS 2 compare to XTTS v2?',
            a: 'StyleTTS 2\'s code is MIT-licensed and free for commercial use (with the README disclosure condition on the weights); XTTS v2 is licensed under the non-commercial Coqui Public Model License. StyleTTS 2\'s official setup is more research-grade and requires more manual work; XTTS v2 ships a simpler, packaged voice-cloning API through the Coqui TTS toolkit. Choose based on your licensing needs and tolerance for setup complexity.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'StyleTTS 2 remains genuinely impressive on output quality: its style diffusion and adversarial training approach is credited in its own NeurIPS paper with matching or exceeding human-recording quality on the LJSpeech benchmark, under a code license (MIT) that is about as permissive as it gets. What keeps it from being an easy recommendation for most readers is everything around that core model: a documentation-level disclosure condition on the pre-trained weights that sits outside the formal MIT grant, an official inference path that pulls in a GPL-3.0 dependency, a community pip package that avoids that dependency but is itself over two and a half years stale, and no commits to the official repository since March 7, 2024. If you want the highest natural-sounding English narration quality available locally and are comfortable with research-grade setup and an unmaintained dependency chain, StyleTTS 2 delivers. If you want a simpler install, active maintenance, or packaged voice cloning, pair this review with PromptQuorum\'s coverage of [Piper](/power-local-llm/piper-tts-review) for fast CPU-only synthesis, [XTTS v2](/power-local-llm/xtts-v2-review) for packaged voice cloning, or the [ElevenLabs comparison](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) for a fully managed alternative. This review is the last of six local speech-to-text and text-to-speech engines PromptQuorum has reviewed in depth, alongside [Whisper.cpp](/power-local-llm/whisper-cpp-review), [Faster Whisper](/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/power-local-llm/coqui-tts-review), XTTS v2, and [Bark](/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[StyleTTS 2 on GitHub](https://github.com/yl4579/StyleTTS2) — the official repository: README, LICENSE, install instructions, and commit history.',
          '[StyleTTS 2 paper (arXiv)](https://arxiv.org/abs/2306.07691) — "Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models," the NeurIPS 2023 paper.',
          '[GitHub Issue #37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — the community-flagged discrepancy between the MIT LICENSE file and the README\'s model-usage disclosure condition.',
          '[styletts2 on PyPI](https://pypi.org/project/styletts2/) — the community-maintained pip package (Sidharth Rajaram), version 0.1.6, published January 11, 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) and [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) on Hugging Face — the official pre-trained checkpoints.',
          '[Local TTS & Voice Cloning Licenses](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — full licensing comparison across local TTS engines.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review) — packaged voice cloning from 6 seconds of reference audio, under a non-commercial license.',
          '[Bark TTS Review](/power-local-llm/bark-tts-review) — the expressive, non-speech-audio model with a single, unambiguous MIT license.',
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — the fast, simple-install, CPU-only local TTS alternative.',
          '[Coqui TTS Review](/power-local-llm/coqui-tts-review) — the flexible, multi-backend toolkit and community-maintained fork.',
          '[Local TTS & Voice Cloning Licenses: Piper, XTTS v2, F5-TTS and Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — the licensing deep dive across all major local TTS engines.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — the cloud-vs-local comparison for readers deciding whether to self-host.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 Review (2026): Columbia\'s MIT-Licensed Research Model for Natural Speech',
      description:
        'StyleTTS 2 review: Columbia University\'s MIT-licensed, style-diffusion speech model. Real install commands, the model-weights licensing nuance, and its maintenance status (no commits since March 2024) for 2026.',
      url: 'https://promptquorum.com/power-local-llm/styletts-2-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, research-grade text-to-speech models' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 Review (2026)', item: 'https://promptquorum.com/power-local-llm/styletts-2-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-de.webp',
    title: 'StyleTTS 2 im Test (2026): Columbias MIT-lizenziertes Forschungsmodell für natürliche Sprache',
    seoTitle: 'StyleTTS 2 im Test 2026: MIT-lizenzierte Sprachsynthese',
    intro:
      'StyleTTS 2 ist ein quelloffenes Text-zu-Sprache-Modell von Forschern der Columbia University, veröffentlicht auf [GitHub](https://github.com/yl4579/StyleTTS2), das natürlich klingende Sprache mittels Style-Diffusion und adversarialem Training mit großen Sprachmodellen für Audio erzeugt. Der Code steht unter der **MIT-Lizenz**, doch das README fügt eine separate, nicht-lizenzrechtliche Offenlegungsbedingung für die vortrainierten Modellgewichte hinzu, und das öffentliche Repository zeigt seit dem 7. März 2024 keine Commits mehr. Dieser Test behandelt, was StyleTTS 2 tatsächlich tut, echte Installations- und Inferenzbefehle, die Lizenz-Nuance zwischen dem MIT-Code und den bedingten Modellgewichten sowie seinen ruhenden, aber nicht archivierten Pflegestatus — das ehrliche Bild für jeden, der es 2026 evaluiert.',
    metaDescription:
      'StyleTTS 2 im Test: Columbia Universitys MIT-lizenziertes Style-Diffusion-Sprachmodell. Echte Installationsbefehle, die Lizenz-Nuance bei den Modellgewichten und sein Pflegestatus (keine Commits seit März 2024) für 2026.',
    twitterDescription:
      'StyleTTS 2 im Test 2026: Columbias Forschungsmodell nutzt Style-Diffusion und adversariales Training für natürliche Erzählstimmen, unter MIT-Lizenz mit einem dokumentationsseitigen Haken bei den vortrainierten Gewichten. Echte Befehle, ehrliche Grenzen und ein Pflegestatus-Check.',
    audience:
      'Entwickler und Forscher, die ein lokales, MIT-lizenziertes Text-zu-Sprache-Modell für hochwertige Erzählungen evaluieren und dessen Forschungs-Repo-Pflegestatus sowie Lizenz-Nuance verstehen müssen, bevor sie darauf aufbauen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 im Test',
    targetKeywords: [
      'styletts 2 test',
      'styletts2',
      'styletts 2 lizenz',
      'styletts 2 installieren',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 gepflegt',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2 ist ein quelloffenes, forschungsorientiertes Text-zu-Sprache-Modell der Columbia University, das natürlich klingende Sprache mittels Style-Diffusion und adversarialem Training mit großen Sprachmodellen für Audio erzeugt.** Der Code steht unter der **MIT-Lizenz**, installiert mit `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. Das README fügt eine separate, nicht-lizenzrechtliche Bedingung für die vortrainierten Modellgewichte hinzu (Offenlegung, dass Sprache synthetisiert wurde, sofern keine Erlaubnis des Sprechers vorliegt), und das öffentliche GitHub-Repository zeigt seit dem 7. März 2024 keine Commits mehr. Für einen vollständigen Lizenzvergleich über lokale TTS-Engines hinweg siehe PromptQuorums [Leitfaden zu lokalen TTS-Lizenzen](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'Was ist StyleTTS 2 und wird es noch gepflegt?',
        answer:
          'StyleTTS 2 lohnt sich, wenn Sie die natürlichste verfügbare englische Erzählqualität aus einem lokalen, MIT-lizenzierten Modell wollen, erzeugt durch Style-Diffusion und adversariales Training — eine Technik, die laut NeurIPS-Paper menschliche Aufnahmen bei Standard-Benchmarks erreicht oder übertrifft. Sein LibriTTS-Multi-Speaker-Checkpoint unterstützt zudem Zero-Shot-Stiltransfer aus einem 5-10 Sekunden langen (empfohlen: 15-30 Sekunden) Referenzclip, ähnlich im Geiste dem Voice-Cloning, wenngleich nicht als Ein-Klick-Cloning-Funktion verpackt wie bei XTTS v2. Der Code steht unter MIT-Lizenz, doch das eigene README fügt eine nicht-lizenzrechtliche Bedingung für die vortrainierten Modellgewichte hinzu: Sie müssen offenlegen, dass die Sprache synthetisiert wurde, sofern Sie nicht die Erlaubnis des Sprechers haben. Der offizielle Inferenzpfad benötigt das GPL-3.0-lizenzierte espeak-ng zur Phonemisierung; ein separates, community-gepflegtes pip-Paket (`styletts2` von Sidharth Rajaram) umgeht dies durch die MIT-lizenzierte Bibliothek gruut, doch dessen letztes Release war am 11. Januar 2024. Das offizielle GitHub-Repository ist nicht als archiviert markiert, zeigt aber seit dem 7. März 2024 keine Commits mehr — behandeln Sie es als ruhendes Forschungsartefakt, nicht als aktiv entwickeltes Produkt, bevor Sie sich für irgendetwas Produktionskritisches darauf verlassen.',
        bullets: [
          'Erzeugt natürlich klingende Sprache mittels Style-Diffusion und adversarialem Training, laut NeurIPS-Paper auf Augenhöhe mit oder besser als menschliche Aufnahmen bei Standard-Einzelsprecher-Benchmarks.',
          'Code-Lizenz: MIT. Vortrainierte Modellgewichte tragen eine zusätzliche README-Offenlegungsbedingung, die nicht Teil des MIT-Lizenztextes selbst ist.',
          'LibriTTS-Multi-Speaker-Checkpoint unterstützt Zero-Shot-Stiltransfer aus einem 5-10 Sekunden langen Referenzclip (empfohlen: 15-30 Sekunden).',
          'Der offizielle Inferenzpfad benötigt das GPL-3.0-lizenzierte espeak-ng; ein Community-pip-Paket umgeht dies, wurde aber zuletzt am 11. Januar 2024 veröffentlicht.',
          'Keine Commits im offiziellen Repository seit dem 7. März 2024; nicht archiviert, über 6.300 Sterne.',
          'Entwickelt von Forschern der Fakultät für Elektrotechnik der Columbia University; vortrainierte Checkpoints sind vorrangig Englisch.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Ein Columbia-Forschungsprojekt', anchor: 'history' },
      { label: 'Was StyleTTS 2 tatsächlich tut', anchor: 'what-it-does' },
      { label: 'StyleTTS 2 installieren und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Nutzungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und Kosten', anchor: 'license-cost' },
      { label: 'Wofür StyleTTS 2 nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu StyleTTS 2', anchor: 'alternatives' },
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
            text: 'StyleTTS 2 ist Columbia Universitys MIT-lizenziertes, forschungsorientiertes Text-zu-Sprache-Modell, das mittels Style-Diffusion und adversarialem Training natürlich klingende Sprache erzeugt, mit einer dokumentationsseitigen Offenlegungsbedingung für seine vortrainierten Gewichte und ohne GitHub-Commits seit dem 7. März 2024.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein kostenloses, herunterladbares KI-Modell, das Text in sehr natürlich klingende Sprache verwandelt, entwickelt von Universitätsforschern statt einem Unternehmen — kostenlos kommerziell nutzbar laut Code-Lizenz, doch die eigene Anleitung bittet darum, Hörern mitzuteilen, dass die Sprache synthetisiert wurde, und niemand scheint noch aktiv Fehler darin zu beheben.',
          },
        ],
        items: [
          'Natürlich klingende Sprache mittels Style-Diffusion und adversarialem Training, laut NeurIPS-Paper auf Augenhöhe mit oder besser als menschliche Aufnahmen bei Standard-Einzelsprecher-Benchmarks.',
          'Code-Lizenz: MIT. Vortrainierte Modellgewichte tragen eine separate README-Offenlegungsbedingung, die nicht im MIT-Lizenztext kodiert ist.',
          'Zero-Shot-Stiltransfer aus einem 5-10 Sekunden langen Referenzclip über den LibriTTS-Multi-Speaker-Checkpoint (empfohlen: 15-30 Sekunden).',
          'Die offizielle Inferenz benötigt das GPL-3.0-lizenzierte espeak-ng; ein Community-pip-Paket umgeht dies, wurde aber zuletzt am 11. Januar 2024 veröffentlicht.',
          'Keine Commits im offiziellen Repository seit dem 7. März 2024; nicht archiviert, über 6.300 GitHub-Sterne.',
          'Vortrainierte Checkpoints sind vorrangig Englisch; der Text-Aligner wurde zudem auf japanischen und chinesischen Korpora trainiert und generalisiert Berichten zufolge auf einige andere Sprachen ohne Fine-Tuning.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ein GitHub-Issue zum Projekt (#37) wies darauf hin, dass die Offenlegungspflicht des READMEs für vortrainierte Modelle außerhalb der eigentlichen MIT-Lizenzdatei liegt, was manche Leser verwirrend finden. Lesen Sie sowohl die LICENSE-Datei als auch den Modellnutzungsabschnitt des READMEs selbst, bevor Sie es einsetzen — siehe den Abschnitt Lizenz und Kosten unten.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Ein Columbia-Forschungsprojekt',
        content: [
          '**StyleTTS 2 wurde von Forschern der Fakultät für Elektrotechnik der Columbia University entwickelt** — Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler und Nima Mesgarani — und als NeurIPS-2023-Paper mit dem Titel „StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models" veröffentlicht.',
          '**Die zentrale These des Papers ist, dass die Kombination aus Style-Diffusion (Modellierung des Sprechstils als latente Wahrscheinlichkeitsverteilung statt als einzelner fester Vektor) und adversarialem Training gegen große vortrainierte Sprachmodelle für Audio menschenähnliche Sprachvariation genauer modelliert als frühere Ansätze.** Beim Einzelsprecher-Benchmark LJSpeech berichtet das Paper, dass StyleTTS 2 in Hörerbewertungen echte menschliche Sprachaufnahmen erreicht oder übertrifft; beim Multi-Speaker-Datensatz LibriTTS übertrifft es demnach zuvor verfügbare öffentliche Modelle bei der Zero-Shot-Sprecheranpassung.',
          '**Das öffentliche [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2)-GitHub-Repository hat über 6.300 Sterne gesammelt** und ist nicht als archiviert markiert — doch PromptQuorum fand seit dem 7. März 2024 keine Commits mehr im Hauptzweig des Repositorys, basierend auf der öffentlichen Commit-Historie des Projekts. Das passt eher zu einer universitären Forschungsveröffentlichung als zu einem kommerziell gepflegten Open-Source-Produkt: Code, Paper und vortrainierte Checkpoints wurden begleitend zur Forschung veröffentlicht, ohne laufende Verpflichtung zu Feature-Entwicklung oder Bugfix-Releases.',
          '**Ein community-gepflegtes pip-Paket, `styletts2` des Entwicklers Sidharth Rajaram**, verpackt den ursprünglichen Forschungscode in ein installierbares Paket (`pip install styletts2`), das den GPL-3.0-lizenzierten Phonemizer espeak-ng gegen die MIT-lizenzierte Bibliothek gruut austauscht, um die gesamte Installationskette freizügig lizenziert zu halten. Das jüngste Release auf [PyPI](https://pypi.org/project/styletts2/) ist Version 0.1.6, veröffentlicht am 11. Januar 2024 — zum Zeitpunkt dieses Tests ebenfalls über zweieinhalb Jahre alt und ein separates Drittprojekt, losgelöst vom ursprünglichen Columbia-Forschungscode.',
        ],
        faqs: [
          {
            q: 'Wer hat StyleTTS 2 entwickelt?',
            a: 'StyleTTS 2 wurde von Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler und Nima Mesgarani entwickelt, Forschern der Fakultät für Elektrotechnik der Columbia University, und als NeurIPS-2023-Paper veröffentlicht.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was StyleTTS 2 tatsächlich tut',
        content: [
          'StyleTTS 2 ist ein Text-zu-Sprache-Modell, das aus Eingabetext ein Mel-Spektrogramm (und in seiner End-to-End-Konfiguration eine rohe Wellenform) erzeugt, wobei ein Diffusionsmodell einen latenten „Stil"-Vektor abtastet, statt ihn deterministisch vorherzusagen — dieser Mechanismus wird im Paper als Ursache für natürlichere, menschenähnlichere Prosodie genannt.',
        ],
        items: [
          '**Style-Diffusion für natürliche Prosodie.** Statt aus dem Text ein einzelnes festes Stil-Embedding vorherzusagen, tastet StyleTTS 2 mittels Diffusion aus einer gelernten Wahrscheinlichkeitsverteilung über Stile ab, was laut Paper natürlichere Variation in Tonhöhe, Rhythmus und Betonung erzeugt als deterministische Ansätze.',
          '**Adversariales Training gegen Sprachmodelle für Audio.** Der Trainingsprozess stellt das TTS-Modell gegen große vortrainierte Sprachmodelle für Audio (SLMs) als Diskriminatoren — eine Technik, der das Paper zuschreibt, die verbleibende Lücke zur Qualität menschlicher Aufnahmen beim LJSpeech-Benchmark zu schließen.',
          '**Zwei offiziell veröffentlichte vortrainierte Checkpoints.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (einzelner englischer Sprecher, 24kHz) und [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (mehrere englische Sprecher) sind beide auf Hugging Face gehostet.',
          '**Zero-Shot-Stiltransfer aus Referenzaudio.** Der LibriTTS-Multi-Speaker-Checkpoint kann neuen Text in einem aus einem Referenz-Audioclip erfassten Stil synthetisieren — die eigene Dokumentation des Projekts und Anleitungen Dritter beschreiben ein Minimum von 5-10 Sekunden, wobei 15-30 Sekunden sauberes Einzelsprecher-Referenzaudio für genaue Klangfarbe, Prosodie und Aussprache empfohlen werden.',
          '**Vorrangig englische vortrainierte Checkpoints, mit etwas mehrsprachiger Vorarbeit.** Die offiziell veröffentlichten Checkpoints sind auf englischen Datensätzen (LJSpeech, LibriTTS) trainiert. Das Paper vermerkt, dass die Text-Aligner-Komponente auch auf japanischen (JVS) und chinesischen (AiShell) Korpora vortrainiert wurde und „für die meisten anderen Sprachen ohne Fine-Tuning gut funktioniert", und verweist auf ein mehrsprachiges PL-BERT-Modell für 14 Sprachen als Ausgangspunkt, um selbst ein nicht-englisches StyleTTS-2-Modell zu trainieren — es gibt jedoch keinen offiziell veröffentlichten, einsatzbereiten nicht-englischen Checkpoint.',
        ],
        note: 'StyleTTS 2 ist eine Forschungscodebasis mit veröffentlichten vortrainierten Checkpoints, kein ausgereiftes Verbraucherprodukt — Installation und Ausführung erfordern mehr Aufwand als bei einem pip-installierbaren, zweckgebundenen Tool wie Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'StyleTTS 2 installieren und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung folgt dem vom Projekt selbst dokumentierten Setup für die Inferenz mit einem vortrainierten Checkpoint.',
        numberedItems: [
          {
            title: 'Repository klonen und Abhängigkeiten installieren.',
            whyItMatters: 'Führen Sie `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt` aus. Dies installiert die in der eigenen Requirements-Datei des Projekts gelisteten Kernabhängigkeiten.',
          },
          {
            title: 'Phonemizer und espeak-ng installieren.',
            whyItMatters: 'Führen Sie `pip install phonemizer` und unter Linux `sudo apt-get install espeak-ng` aus (oder das Äquivalent für Ihr Betriebssystem). Beachten Sie, dass espeak-ng selbst unter GPL-3.0 lizenziert ist — siehe den Abschnitt Lizenz und Kosten, warum das für den Inferenzpfad relevant ist, nicht nur für den StyleTTS-2-Code selbst.',
          },
          {
            title: 'Einen vortrainierten Checkpoint herunterladen.',
            whyItMatters: 'Laden Sie entweder [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (einzelner Sprecher) oder [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (mehrere Sprecher, unterstützt Stiltransfer) von Hugging Face in das Projektverzeichnis herunter.',
          },
          {
            title: 'Inferenz über die mitgelieferten Notebooks ausführen.',
            whyItMatters: 'Das Projekt liefert `Demo/Inference_LJSpeech.ipynb` und `Demo/Inference_LibriTTS.ipynb` — öffnen Sie das zu Ihrem heruntergeladenen Checkpoint passende in Jupyter, um das Modell zu laden und Ihr erstes Sample zu synthetisieren.',
          },
          {
            title: '(Alternative) Das Community-pip-Paket für eine einfachere, rein MIT-lizenzierte Installationskette nutzen.',
            whyItMatters: 'Führen Sie `pip install styletts2` aus, dann `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("Hallo.", output_wav_file="test.wav")`. Dieses Drittanbieter-Paket (zuletzt veröffentlicht am 11. Januar 2024) verwendet die MIT-lizenzierte Bibliothek gruut statt espeak-ng und vermeidet so die GPL-3.0-Abhängigkeit — auf Kosten der Abhängigkeit von einem ebenfalls ruhenden, inoffiziellen Wrapper.',
          },
          {
            title: '(Optional) Einen Referenzclip für Stiltransfer bereitstellen.',
            whyItMatters: 'Übergeben Sie beim LibriTTS-Checkpoint ein `target_voice_path`-Argument (Community-Paket) oder den entsprechenden Referenzaudio-Parameter (offizielles Notebook), das auf eine saubere, 15-30 Sekunden lange Einzelsprecher-WAV-Datei verweist, um neuen Text in diesem erfassten Stil zu synthetisieren.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Nutzungsbeispiele',
        content: [
          'Diese Beispiele zeigen sowohl die vereinfachte API des Community-pip-Pakets als auch das Muster aus den offiziellen Inferenz-Notebooks des Projekts.',
        ],
        codeBlock: `# Einfachster Weg: Community-pip-Paket (rein MIT-lizenzierte Abhängigkeitskette,
# zuletzt veröffentlicht am 2024-01-11 — vor Abhängigkeit selbst verifizieren)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# Zero-Shot-Stiltransfer aus einem Referenzclip (LibriTTS-artiger Checkpoint)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# Benutzerdefinierter Checkpoint- und Konfigurationspfad
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- Offizieller Repository-Pfad (benötigt espeak-ng, GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# Öffnen Sie dann Demo/Inference_LJSpeech.ipynb oder Demo/Inference_LibriTTS.ipynb
# in Jupyter und führen Sie die mitgelieferten Zellen mit Ihrem heruntergeladenen Checkpoint aus.`,
        codeLanguage: 'python',
        note: 'Die genaue API des Community-Pakets `styletts2` (`tts.StyleTTS2()`, `.inference()`, `target_voice_path`) ist auf dessen eigener [PyPI-Seite](https://pypi.org/project/styletts2/) und im README dokumentiert, zuletzt aktualisiert für Version 0.1.6 (11. Januar 2024) — vor dem Scripting selbst verifizieren. Der Notebook-basierte Pfad des offiziellen Repositorys ist direkt im [Projekt-README](https://github.com/yl4579/StyleTTS2) dokumentiert.',
        items: [
          '**Die Qualität des Referenzaudios ist für den Stiltransfer entscheidend.** Ein sauberer, 15-30 Sekunden langer Einzelsprecher-Clip erzeugt einen merklich besseren Stiltransfer als eine kurze, verrauschte oder Multi-Speaker-Referenz.',
          '**Es existieren zwei separate Abhängigkeitsketten.** Der Notebook-Pfad des offiziellen Repositorys zieht das GPL-3.0-lizenzierte espeak-ng nach sich; das Community-pip-Paket vermeidet dies stattdessen mit gruut — wählen Sie die Kette passend zu Ihren Lizenzanforderungen, bevor Sie Tooling um eine der beiden herum aufbauen.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und Kosten',
        content: [
          '**Der Code von StyleTTS 2 steht unter der MIT-Lizenz**, bestätigt über die `LICENSE`-Datei im [offiziellen Repository](https://github.com/yl4579/StyleTTS2). MIT ist eine freizügige Lizenz: Sie dürfen den Code mit minimalen Einschränkungen nutzen, verändern und weitergeben, auch kommerziell.',
          '**Die vortrainierten Modellgewichte tragen eine separate, nicht-lizenzrechtliche Bedingung, die im README steht, nicht in der LICENSE-Datei selbst.** Das README des Projekts bittet Nutzer, „Hörern mitzuteilen, dass Sprachbeispiele von StyleTTS-2-Modellen synthetisiert wurden, sofern Sie nicht die Erlaubnis haben, die synthetisierte Stimme zu verwenden". Dies ist eine Bitte auf Dokumentationsebene, keine formale Lizenzklausel — ein [GitHub-Issue zum Projekt (#37)](https://github.com/yl4579/StyleTTS2/issues/37) wies ausdrücklich darauf hin, dass dies potenziell verwirrend sei, da das Lizenz-Badge und die LICENSE-Datei des Repositorys einem Leser, der nicht auch den Modellnutzungsabschnitt des READMEs liest, nahelegen, dass nur MIT-Bedingungen gelten. PromptQuorum fand im öffentlichen Issue-Thread keine Antwort der Maintainer, die diese Unklarheit auflöst. Behandeln Sie die Offenlegungsbedingung als reale, dokumentierte Bitte der Autoren und befolgen Sie sie — verstehen Sie aber, dass sie außerhalb der formalen MIT-Gewährung für den Code selbst liegt, eine tatsächlich ungewöhnliche Struktur, die vor kommerzieller Nutzung erwähnenswert ist.',
          '**Die offizielle Inferenz zieht eine GPL-3.0-lizenzierte Abhängigkeit nach sich: espeak-ng.** Die eigenen Installationsanweisungen des Projekts verlangen `pip install phonemizer` plus eine systemweite Installation von `espeak-ng`, und espeak-ng steht unter GPL-3.0. GPL-3.0 ist eine Copyleft-Lizenz mit Verbreitungspflichten, die sich von MIT unterscheiden; die Nutzung von espeak-ng als unveränderte externe Systemabhängigkeit wird in der Regel anders behandelt als das statische Einbinden oder Weiterverbreiten seines veränderten Quellcodes, doch die genaue Grenze hängt von Ihrer konkreten Bereitstellung ab. Das Community-pip-Paket `styletts2` umgeht dieses spezifische Problem, indem es die MIT-lizenzierte Bibliothek gruut statt espeak-ng verwendet — ein echter praktischer Unterschied, wenn Sie eine durchgehend freizügig lizenzierte Abhängigkeitskette wollen, auf Kosten der Abhängigkeit von einem Drittanbieter-Paket mit einem noch älteren letzten Release-Datum (11. Januar 2024) als das offizielle Repository.',
          'Nichts davon ist Rechtsberatung. Lesen Sie die LICENSE-Datei, den Modellnutzungsabschnitt des READMEs und konsultieren Sie einen Anwalt für Ihre konkrete Bereitstellung, bevor Sie StyleTTS 2 in einem kommerziellen Produkt ausliefern.',
        ],
        faqs: [
          {
            q: 'Welche Lizenz verwendet StyleTTS 2?',
            a: 'Der Code von StyleTTS 2 steht unter MIT. Die vortrainierten Modellgewichte tragen eine separate, nicht-lizenzrechtliche Bedingung im README des Projekts (Offenlegung synthetisierter Sprache, sofern keine Erlaubnis des Sprechers vorliegt), die nicht Teil des formalen MIT-Lizenztextes ist — eine Unterscheidung, auf die ein GitHub-Issue zum Projekt als potenziell verwirrend hinwies. Dies ist keine Rechtsberatung; lesen Sie die LICENSE-Datei und das README selbst, bevor Sie es kommerziell nutzen.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür StyleTTS 2 nicht geeignet ist',
        content: [
          'StyleTTS 2 ist ein forschungsorientiertes Modell mit tatsächlich starker Ausgabequalität, kein ausgereiftes, aktiv gepflegtes Verbraucherprodukt. Es ist das falsche Werkzeug für die folgenden Situationen:',
        ],
        items: [
          '**Leser, die eine einfache Pip-Install-und-los-Erfahrung wollen.** Anders als [Piper](/de/power-local-llm/piper-tts-review), das mit `pip install piper-tts` und einem einzigen CLI-Befehl zu funktionierendem Audio führt, umfasst der offizielle StyleTTS-2-Pfad das Klonen eines Forschungs-Repositorys, die Installation eines Phonemizers, eine systemweite espeak-ng-Abhängigkeit und das Ausführen von Jupyter-Notebooks — eine merklich höhere Einstiegshürde.',
          '**Produktiveinsatz ohne ML-Engineering-Aufwand.** Es gibt keinen gepflegten Webserver-Modus, kein offizielles Docker-Image und kein Unternehmen, das laufenden Support bereitstellt. Wer StyleTTS 2 produktiv einsetzt, sollte einplanen, eine eigene Serving-Schicht rund um den Forschungscode zu schreiben und zu pflegen.',
          '**Garantierte laufende Fehlerbehebungen oder Feature-Updates.** Ohne Commits im offiziellen Repository seit dem 7. März 2024 und mit dem letzten Release des Community-pip-Pakets vom 11. Januar 2024 sollten Sie für keine der beiden Abhängigkeitsketten aktive Pflege annehmen — kalkulieren Sie ein, bei jedem auftretenden Problem auf sich allein gestellt zu sein.',
          '**Einsatzbereite nicht-englische Sprache.** Die offiziell veröffentlichten vortrainierten Checkpoints sind ausschließlich Englisch (LJSpeech, LibriTTS). Ein nicht-englisches Modell selbst zu trainieren ist laut den Anmerkungen des Papers zum mehrsprachigen Text-Aligner und PL-BERT architektonisch möglich, erfordert aber einen eigenen Trainingslauf — es gibt keinen herunterladbaren nicht-englischen Checkpoint vom Projekt.',
          '**Eine einzige, eindeutige Lizenzgewährung für alles, was Sie herunterladen.** Da Code (MIT) und vortrainierte Gewichte (MIT plus README-Offenlegungsbedingung) leicht unterschiedlich geregelt sind und der offizielle Inferenzpfad eine GPL-3.0-Abhängigkeit nach sich zieht, bietet StyleTTS 2 nicht die einfache, eindeutige Lizenzgeschichte, die ein Projekt wie Bark (vollständig MIT, keine zusätzlichen Bedingungen) hat.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu StyleTTS 2',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[Piper](/de/power-local-llm/piper-tts-review)',
            'Am besten für': 'Einfaches Pip-Install-und-los-Setup, schnellste reine CPU-Synthese, Echtzeit auf Raspberry Pi',
            'Lizenz': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[XTTS v2](/de/power-local-llm/xtts-v2-review)',
            'Am besten für': 'Verpacktes Voice-Cloning aus 6 Sekunden Referenzaudio, 17 Sprachen',
            'Lizenz': 'CPML (nicht-kommerziell)',
          },
          {
            'Tool': '[Coqui-TTS-Toolkit](/de/power-local-llm/coqui-tts-review)',
            'Am besten für': 'Flexibles Multi-Backend-Toolkit mit breiter Sprachunterstützung und gepflegtem Fork',
            'Lizenz': 'MPL-2.0',
          },
          {
            'Tool': '[Bark](/de/power-local-llm/bark-tts-review)',
            'Am besten für': 'Ausdrucksstarkes, nicht-sprachliches Audio — Lachen, Seufzer, Umgebungsgeräusche, einzige eindeutige MIT-Lizenz',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[ElevenLabs](https://elevenlabs.io)',
            'Am besten für': 'Verwaltete Cloud-API mit kommerziellem Voice-Cloning und aktivem Support, kein Selbst-Hosting-Aufwand',
            'Lizenz': 'Proprietär (kostenpflichtige Cloud-API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist StyleTTS 2?',
            a: 'StyleTTS 2 ist ein quelloffenes Text-zu-Sprache-Modell von Forschern der Columbia University, das mittels Style-Diffusion und adversarialem Training mit großen Sprachmodellen für Audio natürlich klingende Sprache erzeugt, veröffentlicht als NeurIPS-2023-Paper.',
          },
          {
            q: 'Ist StyleTTS 2 kostenlos kommerziell nutzbar?',
            a: 'Der Code steht unter MIT, was kommerzielle Nutzung erlaubt. Die vortrainierten Modellgewichte tragen im README eine separate, nicht-lizenzrechtliche Bedingung, die Sie bittet, synthetisierte Sprache offenzulegen, sofern Sie nicht die Erlaubnis des Sprechers haben. Dies ist keine Rechtsberatung; lesen Sie die LICENSE-Datei und das README selbst, bevor Sie es kommerziell einsetzen.',
          },
          {
            q: 'Kann StyleTTS 2 eine Stimme klonen?',
            a: 'Der LibriTTS-Multi-Speaker-Checkpoint unterstützt Zero-Shot-Stiltransfer aus einem Referenz-Audioclip (mindestens 5-10 Sekunden, empfohlen 15-30 Sekunden), was dem Voice-Cloning im Geiste ähnelt. Es ist nicht als einfache Ein-Klick-Cloning-Funktion verpackt wie bei XTTS v2 — die Nutzung erfordert den Notebook-basierten offiziellen Workflow oder das Community-pip-Paket.',
          },
          {
            q: 'Wird StyleTTS 2 noch gepflegt?',
            a: 'Das offizielle GitHub-Repository ist nicht als archiviert markiert, doch PromptQuorum fand seit dem 7. März 2024 keine Commits mehr. Das Community-pip-Paket, das die Installation vereinfacht, wurde zuletzt am 11. Januar 2024 veröffentlicht. Behandeln Sie beide als ruhende Forschungsartefakte statt als aktiv entwickelte Software.',
          },
          {
            q: 'Unterstützt StyleTTS 2 andere Sprachen als Englisch?',
            a: 'Die offiziell veröffentlichten vortrainierten Checkpoints (LJSpeech, LibriTTS) sind ausschließlich Englisch. Das Paper vermerkt, dass die Text-Aligner-Komponente auch auf japanischen und chinesischen Korpora trainiert wurde und ohne Fine-Tuning einigermaßen auf andere Sprachen generalisiert, und verweist auf ein mehrsprachiges PL-BERT-Modell für 14 Sprachen als Ausgangspunkt, um selbst ein eigenes nicht-englisches Modell zu trainieren — es gibt jedoch keinen einsatzbereiten, offiziell veröffentlichten nicht-englischen Checkpoint.',
          },
          {
            q: 'Warum benötigt die offizielle Installation von StyleTTS 2 espeak-ng, und warum ist das wichtig?',
            a: 'Der offizielle Inferenzpfad nutzt die Phonemizer-Bibliothek mit espeak-ng als Backend zur Umwandlung von Text in Phoneme. espeak-ng steht unter GPL-3.0, einer Copyleft-Lizenz mit anderen Verbreitungspflichten als MIT. Ein Community-pip-Paket (`styletts2`) umgeht dies, indem es stattdessen die MIT-lizenzierte Bibliothek gruut verwendet — auf Kosten der Abhängigkeit von einem noch älteren, inoffiziellen Release (zuletzt aktualisiert am 11. Januar 2024).',
          },
          {
            q: 'Wie schneidet StyleTTS 2 im Vergleich zu XTTS v2 ab?',
            a: 'Der Code von StyleTTS 2 steht unter MIT und ist kostenlos kommerziell nutzbar (mit der README-Offenlegungsbedingung für die Gewichte); XTTS v2 steht unter der nicht-kommerziellen Coqui Public Model License. Das offizielle Setup von StyleTTS 2 ist forschungsorientierter und erfordert mehr manuelle Arbeit; XTTS v2 liefert über das Coqui-TTS-Toolkit eine einfachere, verpackte Voice-Cloning-API. Wählen Sie basierend auf Ihren Lizenzanforderungen und Ihrer Toleranz für Setup-Komplexität.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'StyleTTS 2 bleibt bei der Ausgabequalität wirklich beeindruckend: Sein Ansatz aus Style-Diffusion und adversarialem Training wird im eigenen NeurIPS-Paper als Erreichen oder Übertreffen der Qualität menschlicher Aufnahmen beim LJSpeech-Benchmark angeführt, unter einer Code-Lizenz (MIT), die kaum freizügiger sein könnte. Was es für die meisten Leser zu keiner einfachen Empfehlung macht, ist alles rund um dieses Kernmodell: eine dokumentationsseitige Offenlegungsbedingung für die vortrainierten Gewichte, die außerhalb der formalen MIT-Gewährung liegt, ein offizieller Inferenzpfad, der eine GPL-3.0-Abhängigkeit nach sich zieht, ein Community-pip-Paket, das diese Abhängigkeit vermeidet, aber selbst über zweieinhalb Jahre veraltet ist, und keine Commits im offiziellen Repository seit dem 7. März 2024. Wenn Sie die höchste verfügbare natürlich klingende englische Erzählqualität lokal wollen und mit forschungsorientiertem Setup sowie einer ungepflegten Abhängigkeitskette einverstanden sind, liefert StyleTTS 2. Wenn Sie eine einfachere Installation, aktive Pflege oder verpacktes Voice-Cloning wollen, kombinieren Sie diesen Test mit PromptQuorums Abdeckung von [Piper](/de/power-local-llm/piper-tts-review) für schnelle reine CPU-Synthese, [XTTS v2](/de/power-local-llm/xtts-v2-review) für verpacktes Voice-Cloning oder dem [ElevenLabs-Vergleich](/de/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) für eine vollständig verwaltete Alternative. Dieser Test ist der letzte von sechs lokalen Sprach-zu-Text- und Text-zu-Sprache-Engines, die PromptQuorum ausführlich getestet hat, neben [Whisper.cpp](/de/power-local-llm/whisper-cpp-review), [Faster Whisper](/de/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/de/power-local-llm/coqui-tts-review), XTTS v2 und [Bark](/de/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[StyleTTS 2 auf GitHub](https://github.com/yl4579/StyleTTS2) — das offizielle Repository: README, LICENSE, Installationsanweisungen und Commit-Historie.',
          '[StyleTTS-2-Paper (arXiv)](https://arxiv.org/abs/2306.07691) — „Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models", das NeurIPS-2023-Paper.',
          '[GitHub-Issue #37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — die von der Community aufgezeigte Diskrepanz zwischen der MIT-LICENSE-Datei und der Modellnutzungs-Offenlegungsbedingung im README.',
          '[styletts2 auf PyPI](https://pypi.org/project/styletts2/) — das community-gepflegte pip-Paket (Sidharth Rajaram), Version 0.1.6, veröffentlicht am 11. Januar 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) und [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) auf Hugging Face — die offiziellen vortrainierten Checkpoints.',
          '[Lokale TTS- & Voice-Cloning-Lizenzen](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — vollständiger Lizenzvergleich über lokale TTS-Engines hinweg.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[XTTS v2 Test](/de/power-local-llm/xtts-v2-review) — verpacktes Voice-Cloning aus 6 Sekunden Referenzaudio, unter nicht-kommerzieller Lizenz.',
          '[Bark TTS Test](/de/power-local-llm/bark-tts-review) — das ausdrucksstarke, nicht-sprachliche Audio-Modell mit einer einzigen, eindeutigen MIT-Lizenz.',
          '[Piper TTS Test](/de/power-local-llm/piper-tts-review) — die schnelle, einfach zu installierende, reine CPU-lokale TTS-Alternative.',
          '[Coqui TTS Test](/de/power-local-llm/coqui-tts-review) — das flexible Multi-Backend-Toolkit und der community-gepflegte Fork.',
          '[Lokale TTS- & Voice-Cloning-Lizenzen: Piper, XTTS v2, F5-TTS und Coqui](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — die Lizenz-Tiefenanalyse über alle wichtigen lokalen TTS-Engines hinweg.',
          '[ElevenLabs vs Piper vs XTTS v2](/de/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — der Cloud-vs-lokal-Vergleich für Leser, die entscheiden, ob sie selbst hosten sollten.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 im Test (2026): Columbias MIT-lizenziertes Forschungsmodell für natürliche Sprache',
      description:
        'StyleTTS 2 im Test: Columbia Universitys MIT-lizenziertes Style-Diffusion-Sprachmodell. Echte Installationsbefehle, die Lizenz-Nuance bei den Modellgewichten und sein Pflegestatus (keine Commits seit März 2024) für 2026.',
      url: 'https://promptquorum.com/de/power-local-llm/styletts-2-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, forschungsorientierte Text-zu-Sprache-Modelle evaluieren' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-Speech' },
        { '@type': 'Thing', name: 'Style Diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/styletts-2-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-fr.webp',
    title: 'StyleTTS 2 : avis (2026) — le modèle de recherche sous licence MIT de Columbia pour une voix naturelle',
    seoTitle: 'StyleTTS 2 avis 2026 : synthèse vocale sous licence MIT',
    intro:
      'StyleTTS 2 est un modèle de synthèse vocale open source publié par des chercheurs de l\'université Columbia sur [GitHub](https://github.com/yl4579/StyleTTS2), qui génère une voix au rendu naturel grâce à la diffusion de style et à un entraînement adversarial avec de grands modèles de langage vocal. Son code est sous **licence MIT**, mais son README ajoute une condition de divulgation distincte, hors licence, pour les poids du modèle pré-entraîné, et le dépôt public n\'a reçu aucun commit depuis le 7 mars 2024. Cet avis couvre ce que fait réellement StyleTTS 2, des commandes d\'installation et d\'inférence réelles, la nuance de licence entre le code MIT et les poids conditionnels, ainsi que son statut de maintenance dormant mais non archivé — le tableau honnête pour quiconque l\'évalue en 2026.',
    metaDescription:
      'Avis StyleTTS 2 : le modèle vocal à diffusion de style sous licence MIT de l\'université Columbia. Commandes d\'installation réelles, nuance de licence sur les poids, et statut de maintenance (aucun commit depuis mars 2024) pour 2026.',
    twitterDescription:
      'Avis StyleTTS 2 en 2026 : le modèle de recherche de Columbia utilise la diffusion de style et l\'entraînement adversarial pour une narration naturelle, sous licence MIT avec une réserve au niveau de la documentation sur les poids pré-entraînés. Commandes réelles, limites honnêtes et vérification du statut de maintenance.',
    audience:
      'Développeurs et chercheurs évaluant un modèle de synthèse vocale local sous licence MIT pour une narration de haute qualité, qui doivent comprendre son statut de maintenance de dépôt de recherche et sa nuance de licence avant de s\'appuyer dessus.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 avis',
    targetKeywords: [
      'styletts 2 avis',
      'styletts2',
      'styletts 2 licence',
      'styletts 2 installation',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 maintenu',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2 est un modèle de synthèse vocale open source, de niveau recherche, de l\'université Columbia, qui génère une voix au rendu naturel grâce à la diffusion de style et à un entraînement adversarial avec de grands modèles de langage vocal.** Son code est sous **licence MIT**, installé avec `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. Son README ajoute une condition distincte, hors licence, sur les poids du modèle pré-entraîné (divulguer que la voix est synthétisée sauf autorisation du locuteur), et le dépôt GitHub public n\'affiche aucun commit depuis le 7 mars 2024. Pour une comparaison complète des licences des moteurs TTS locaux, consultez le [guide des licences TTS locales](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que StyleTTS 2 et est-il encore maintenu ?',
        answer:
          'StyleTTS 2 vaut la peine si vous voulez la narration anglaise la plus naturelle disponible dans un modèle local sous licence MIT, produite par diffusion de style et entraînement adversarial, une technique que son article NeurIPS présente comme égalant ou dépassant les enregistrements humains sur des benchmarks standard. Son point de contrôle multi-locuteurs LibriTTS prend également en charge le transfert de style zero-shot à partir d\'un clip de référence de 5 à 10 secondes (15 à 30 secondes recommandées), dans un esprit proche du clonage vocal, bien qu\'il ne soit pas proposé comme une fonctionnalité de clonage en une ligne comme XTTS v2. Son code est sous licence MIT, mais son propre README ajoute une condition hors licence sur les poids du modèle pré-entraîné : vous devez divulguer que la voix est synthétisée sauf autorisation du locuteur. Son chemin d\'inférence officiel nécessite espeak-ng, sous licence GPL-3.0, pour la phonémisation ; un paquet pip communautaire distinct (`styletts2` de Sidharth Rajaram) évite cela en utilisant la bibliothèque gruut sous licence MIT à la place, mais sa dernière version date du 11 janvier 2024. Le dépôt GitHub officiel n\'est pas marqué comme archivé, mais n\'a reçu aucun commit depuis le 7 mars 2024 — traitez-le comme un artefact de recherche dormant, pas comme un produit activement développé, avant d\'en dépendre pour quoi que ce soit de critique en production.',
        bullets: [
          'Génère une voix au rendu naturel via diffusion de style et entraînement adversarial, selon son article NeurIPS, égalant ou dépassant les enregistrements humains sur les benchmarks standard mono-locuteur.',
          'Licence du code : MIT. Les poids du modèle pré-entraîné portent une condition de divulgation supplémentaire au niveau du README, non incluse dans le texte de la licence MIT elle-même.',
          'Le point de contrôle multi-locuteurs LibriTTS prend en charge le transfert de style zero-shot à partir d\'un clip de référence de 5 à 10 secondes (15 à 30 secondes recommandées).',
          'Le chemin d\'inférence officiel nécessite espeak-ng sous licence GPL-3.0 ; un paquet pip communautaire l\'évite mais sa dernière version date du 11 janvier 2024.',
          'Aucun commit sur le dépôt GitHub officiel depuis le 7 mars 2024 ; non archivé, plus de 6 300 étoiles.',
          'Créé par des chercheurs du département de génie électrique de l\'université Columbia ; les points de contrôle pré-entraînés sont principalement en anglais.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : un projet de recherche de Columbia', anchor: 'history' },
      { label: 'Ce que fait réellement StyleTTS 2', anchor: 'what-it-does' },
      { label: 'Installer et exécuter StyleTTS 2 : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et coût', anchor: 'license-cost' },
      { label: 'Ce pour quoi StyleTTS 2 n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à StyleTTS 2', anchor: 'alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En résumé',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'StyleTTS 2 est le modèle de synthèse vocale de recherche sous licence MIT de l\'université Columbia, qui produit une voix au rendu naturel via diffusion de style et entraînement adversarial, avec une condition de divulgation au niveau de la documentation sur ses poids pré-entraînés et aucun commit GitHub depuis le 7 mars 2024.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un modèle d\'IA gratuit et téléchargeable qui transforme du texte en une voix au rendu très naturel, créé par des chercheurs universitaires plutôt que par une entreprise — libre d\'utilisation commerciale selon la licence du code, mais ses propres instructions demandent d\'informer les auditeurs que la voix est synthétisée, et personne ne semble plus corriger activement les bugs.',
          },
        ],
        items: [
          'Voix au rendu naturel via diffusion de style et entraînement adversarial, égalant ou dépassant les enregistrements humains sur les benchmarks standard mono-locuteur selon son article NeurIPS.',
          'Licence du code : MIT. Les poids du modèle pré-entraîné portent une condition de divulgation distincte dans le README, non codifiée dans le texte de la licence MIT.',
          'Transfert de style zero-shot à partir d\'un clip de référence de 5 à 10 secondes via le point de contrôle multi-locuteurs LibriTTS (15 à 30 secondes recommandées).',
          'L\'inférence officielle nécessite espeak-ng sous licence GPL-3.0 ; un paquet pip communautaire l\'évite mais sa dernière version date du 11 janvier 2024.',
          'Aucun commit sur le dépôt officiel depuis le 7 mars 2024 ; non archivé, plus de 6 300 étoiles GitHub.',
          'Les points de contrôle pré-entraînés sont principalement en anglais ; l\'aligneur de texte a aussi été entraîné sur des corpus japonais et chinois et généraliserait à d\'autres langues sans réglage fin.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un ticket GitHub sur le projet (#37) a signalé que l\'exigence de divulgation du README pour les modèles pré-entraînés se situe en dehors du fichier de licence MIT lui-même, ce que certains lecteurs trouvent déroutant. Lisez vous-même le fichier LICENSE et la section d\'utilisation du modèle du README avant tout déploiement — voir la section Licence et coût ci-dessous.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : un projet de recherche de Columbia',
        content: [
          '**StyleTTS 2 a été créé par des chercheurs du département de génie électrique de l\'université Columbia** — Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler et Nima Mesgarani — et publié sous forme d\'article NeurIPS 2023 intitulé « StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models ».',
          '**L\'affirmation centrale de l\'article est que la combinaison de la diffusion de style (modéliser le style de parole comme une distribution de probabilité latente plutôt qu\'un vecteur fixe unique) et d\'un entraînement adversarial contre de grands modèles de langage vocal pré-entraînés permet de modéliser la variation humaine de la parole plus précisément que les approches antérieures.** Sur le benchmark mono-locuteur LJSpeech, l\'article rapporte que StyleTTS 2 égale ou dépasse des enregistrements de voix humaine réelle lors d\'évaluations d\'auditeurs ; sur le jeu de données multi-locuteurs LibriTTS, il rapporte surpasser les modèles publics précédemment disponibles en adaptation zero-shot au locuteur.',
          '**Le dépôt GitHub public [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2) a accumulé plus de 6 300 étoiles**, et n\'est pas marqué comme archivé — mais PromptQuorum n\'a trouvé aucun commit sur la branche principale du dépôt depuis le 7 mars 2024, d\'après l\'historique public des commits du projet. Cela correspond davantage à une publication de recherche universitaire qu\'à un produit open source maintenu commercialement : le code, l\'article et les points de contrôle pré-entraînés ont été publiés pour accompagner la recherche, sans engagement continu de développement de fonctionnalités ou de versions correctives.',
          '**Un paquet pip maintenu par la communauté, `styletts2` du développeur Sidharth Rajaram**, encapsule le code de recherche original dans un paquet installable (`pip install styletts2`) qui remplace le phonémiseur espeak-ng sous licence GPL-3.0 par la bibliothèque gruut sous licence MIT, afin de garder toute la chaîne d\'installation sous licence permissive. Sa version la plus récente sur [PyPI](https://pypi.org/project/styletts2/) est la 0.1.6, publiée le 11 janvier 2024 — également vieille de plus de deux ans et demi au moment de cet avis, et un projet tiers distinct du code de recherche original de Columbia.',
        ],
        faqs: [
          {
            q: 'Qui a créé StyleTTS 2 ?',
            a: 'StyleTTS 2 a été créé par Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler et Nima Mesgarani, chercheurs au département de génie électrique de l\'université Columbia, et publié sous forme d\'article NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que fait réellement StyleTTS 2',
        content: [
          'StyleTTS 2 est un modèle de synthèse vocale qui génère un mel-spectrogramme (et, dans sa configuration bout en bout, une forme d\'onde brute) à partir d\'un texte d\'entrée, en utilisant un modèle de diffusion pour échantillonner un vecteur de « style » latent plutôt que de devoir le prédire de manière déterministe — ce mécanisme est crédité par l\'article d\'une prosodie plus naturelle et plus humaine.',
        ],
        items: [
          '**Diffusion de style pour une prosodie naturelle.** Plutôt que de prédire un embedding de style fixe unique à partir du texte, StyleTTS 2 échantillonne, via diffusion, une distribution de probabilité apprise sur les styles, ce qui produirait, selon l\'article, une variation plus naturelle du ton, du rythme et de l\'emphase que les approches déterministes.',
          '**Entraînement adversarial contre des modèles de langage vocal.** Le processus d\'entraînement oppose le modèle TTS à de grands modèles de langage vocal (SLM) pré-entraînés agissant comme discriminateurs, une technique que l\'article crédite de combler l\'écart restant avec la qualité des enregistrements humains sur le benchmark LJSpeech.',
          '**Deux points de contrôle pré-entraînés officiellement publiés.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (locuteur anglais unique, 24 kHz) et [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (multi-locuteurs anglais) sont tous deux hébergés sur Hugging Face.',
          '**Transfert de style zero-shot à partir d\'un audio de référence.** Le point de contrôle multi-locuteurs LibriTTS peut synthétiser un nouveau texte dans un style capturé à partir d\'un clip audio de référence — la documentation du projet et des guides tiers décrivent un minimum de 5 à 10 secondes, avec 15 à 30 secondes d\'audio de référence propre, mono-locuteur, recommandées pour une timbre, une prosodie et une prononciation précises.',
          '**Points de contrôle pré-entraînés principalement en anglais, avec un travail préparatoire multilingue.** Les points de contrôle officiellement publiés sont entraînés sur des jeux de données anglais (LJSpeech, LibriTTS). L\'article note que son composant aligneur de texte a également été pré-entraîné sur des corpus japonais (JVS) et chinois (AiShell) et « fonctionne bien pour la plupart des autres langues sans réglage fin », et référence un modèle PL-BERT multilingue couvrant 14 langues comme point de départ pour entraîner soi-même un modèle StyleTTS 2 non anglais — mais il n\'existe aucun point de contrôle non anglais officiellement publié et prêt à l\'emploi.',
        ],
        note: 'StyleTTS 2 est une base de code de recherche avec des points de contrôle pré-entraînés publiés, pas un produit grand public abouti — son installation et son exécution demandent plus de configuration qu\'un outil pip-installable et à usage unique comme Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Installer et exécuter StyleTTS 2 : étape par étape',
        content: 'Ce guide suit la configuration documentée par le projet lui-même pour l\'inférence avec un point de contrôle pré-entraîné.',
        numberedItems: [
          {
            title: 'Cloner le dépôt et installer les dépendances.',
            whyItMatters: 'Exécutez `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`. Cela installe les dépendances Python principales listées dans le fichier requirements du projet.',
          },
          {
            title: 'Installer le phonémiseur et espeak-ng.',
            whyItMatters: 'Exécutez `pip install phonemizer` et, sous Linux, `sudo apt-get install espeak-ng` (ou l\'équivalent pour votre système d\'exploitation). Notez qu\'espeak-ng est lui-même sous licence GPL-3.0 — voir la section Licence et coût pour comprendre pourquoi cela compte pour le chemin d\'inférence, pas seulement pour le code de StyleTTS 2 lui-même.',
          },
          {
            title: 'Télécharger un point de contrôle pré-entraîné.',
            whyItMatters: 'Téléchargez [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (locuteur unique) ou [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (multi-locuteurs, prend en charge le transfert de style) depuis Hugging Face dans le répertoire du projet.',
          },
          {
            title: 'Exécuter l\'inférence via les notebooks fournis.',
            whyItMatters: 'Le projet fournit `Demo/Inference_LJSpeech.ipynb` et `Demo/Inference_LibriTTS.ipynb` — ouvrez celui qui correspond à votre point de contrôle téléchargé dans Jupyter pour charger le modèle et synthétiser votre premier échantillon.',
          },
          {
            title: '(Alternative) Utiliser le paquet pip communautaire pour une chaîne d\'installation plus simple, entièrement sous MIT.',
            whyItMatters: 'Exécutez `pip install styletts2`, puis `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("Bonjour.", output_wav_file="test.wav")`. Ce paquet tiers (dernière version le 11 janvier 2024) utilise la bibliothèque gruut sous licence MIT au lieu d\'espeak-ng, évitant la dépendance GPL-3.0 — au prix de dépendre d\'un wrapper non officiel, lui aussi dormant.',
          },
          {
            title: '(Optionnel) Fournir un clip de référence pour le transfert de style.',
            whyItMatters: 'Avec le point de contrôle LibriTTS, passez un argument `target_voice_path` (paquet communautaire) ou le paramètre audio de référence équivalent (notebook officiel) pointant vers un fichier WAV mono-locuteur propre de 15 à 30 secondes, pour synthétiser un nouveau texte dans ce style capturé.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Ces exemples montrent à la fois l\'API simplifiée du paquet pip communautaire et le schéma utilisé dans les notebooks d\'inférence du projet officiel.',
        ],
        codeBlock: `# Chemin le plus simple : paquet pip communautaire (chaîne de dépendances
# entièrement MIT, dernière version 2024-01-11 — vérifiez avant d'en dépendre)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# Transfert de style zero-shot à partir d'un clip de référence (checkpoint type LibriTTS)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# Chemin de checkpoint et de configuration personnalisé
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- Chemin du dépôt officiel (nécessite espeak-ng, GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# Ouvrez ensuite Demo/Inference_LJSpeech.ipynb ou Demo/Inference_LibriTTS.ipynb
# dans Jupyter et exécutez les cellules fournies avec votre checkpoint téléchargé.`,
        codeLanguage: 'python',
        note: 'L\'API exacte du paquet communautaire `styletts2` (`tts.StyleTTS2()`, `.inference()`, `target_voice_path`) est documentée sur sa propre [page PyPI](https://pypi.org/project/styletts2/) et son README, mis à jour pour la dernière fois pour la version 0.1.6 (11 janvier 2024) — vérifiez qu\'elle correspond toujours avant de scripter dessus. Le chemin basé sur les notebooks du dépôt officiel est documenté directement dans le [README du projet](https://github.com/yl4579/StyleTTS2).',
        items: [
          '**La qualité de l\'audio de référence compte pour le transfert de style.** Un clip mono-locuteur propre de 15 à 30 secondes produit un transfert de style nettement meilleur qu\'une référence courte, bruitée ou multi-locuteurs.',
          '**Deux chaînes de dépendances distinctes existent.** Le chemin par notebook du dépôt officiel entraîne espeak-ng sous licence GPL-3.0 ; le paquet pip communautaire évite cela avec gruut à la place — choisissez la chaîne qui correspond à vos exigences de licence avant de construire des outils autour de l\'une ou l\'autre.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et coût',
        content: [
          '**Le code de StyleTTS 2 est sous licence MIT**, confirmé par le fichier `LICENSE` du [dépôt officiel](https://github.com/yl4579/StyleTTS2). MIT est une licence permissive : vous pouvez utiliser, modifier et redistribuer le code, y compris commercialement, avec des restrictions minimales.',
          '**Les poids du modèle pré-entraîné portent une condition distincte, hors licence, énoncée dans le README, pas dans le fichier LICENSE lui-même.** Le README du projet demande aux utilisateurs « d\'informer les auditeurs que les échantillons de voix sont synthétisés par les modèles StyleTTS 2, sauf si vous avez la permission d\'utiliser la voix que vous synthétisez ». Il s\'agit d\'une demande au niveau de la documentation, pas d\'une clause de licence formelle — un [ticket GitHub sur le projet (#37)](https://github.com/yl4579/StyleTTS2/issues/37) a explicitement signalé que cela pouvait prêter à confusion, puisque le badge de licence et le fichier LICENSE du dépôt suggèrent à un lecteur qui ne lit pas aussi la section d\'utilisation du modèle du README que seules les conditions MIT s\'appliquent. PromptQuorum n\'a trouvé aucune réponse des mainteneurs résolvant cette ambiguïté dans le fil de discussion public. Traitez la condition de divulgation comme une demande réelle et documentée des auteurs, et respectez-la — mais comprenez qu\'elle se situe en dehors de l\'octroi MIT formel sur le code lui-même, une structure véritablement inhabituelle à signaler avant toute utilisation commerciale.',
          '**L\'exécution de l\'inférence officielle entraîne une dépendance sous licence GPL-3.0 : espeak-ng.** Les instructions d\'installation du projet demandent `pip install phonemizer` plus une installation système d\'`espeak-ng`, et espeak-ng est sous licence GPL-3.0. GPL-3.0 est une licence copyleft avec des obligations de distribution différentes de MIT ; utiliser espeak-ng comme dépendance système externe non modifiée est généralement traité différemment du fait de lier statiquement ou de redistribuer son code source modifié, mais la limite exacte dépend de votre déploiement. Le paquet pip communautaire `styletts2` contourne ce problème spécifique en utilisant la bibliothèque gruut sous licence MIT à la place d\'espeak-ng — une différence pratique réelle si vous voulez une chaîne de dépendances entièrement permissive, au prix de dépendre d\'un paquet tiers dont la dernière version (11 janvier 2024) est encore plus ancienne que celle du dépôt officiel.',
          'Rien de tout cela ne constitue un conseil juridique. Lisez le fichier LICENSE, la section d\'utilisation du modèle du README, et consultez un avocat pour votre déploiement spécifique avant de livrer StyleTTS 2 dans un produit commercial.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise StyleTTS 2 ?',
            a: 'Le code de StyleTTS 2 est sous licence MIT. Ses poids de modèle pré-entraîné portent une condition distincte, hors licence, énoncée dans le README du projet (divulguer la voix synthétisée sauf autorisation du locuteur), qui ne fait pas partie du texte formel de la licence MIT — une distinction qu\'un ticket GitHub sur le projet a signalée comme potentiellement déroutante. Ceci n\'est pas un conseil juridique ; lisez vous-même le fichier LICENSE et le README avant toute utilisation commerciale.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce pour quoi StyleTTS 2 n\'est pas adapté',
        content: [
          'StyleTTS 2 est un modèle de niveau recherche avec une qualité de sortie véritablement solide, pas un produit grand public abouti et activement maintenu. C\'est le mauvais outil pour les situations suivantes :',
        ],
        items: [
          '**Les lecteurs qui veulent une expérience simple pip-install-et-c\'est-parti.** Contrairement à [Piper](/fr/power-local-llm/piper-tts-review), qui n\'est qu\'à `pip install piper-tts` et une seule commande CLI d\'un audio fonctionnel, le chemin officiel de StyleTTS 2 implique de cloner un dépôt de recherche, d\'installer un phonémiseur, une dépendance système espeak-ng, et d\'exécuter des notebooks Jupyter — une barrière de configuration nettement plus élevée.',
          '**Le déploiement en production sans effort d\'ingénierie ML.** Il n\'existe aucun mode serveur web maintenu, aucune image Docker officielle, et aucune entreprise assurant un support continu. Quiconque déploie StyleTTS 2 en production doit s\'attendre à écrire et maintenir sa propre couche de service autour du code de recherche.',
          '**Des corrections de bugs ou mises à jour de fonctionnalités continues garanties.** Sans commit sur le dépôt officiel depuis le 7 mars 2024, et avec la dernière version du paquet pip communautaire datée du 11 janvier 2024, ne présumez pas d\'une maintenance active pour l\'une ou l\'autre chaîne de dépendances — prévoyez la possibilité d\'être livré à vous-même pour tout problème rencontré.',
          '**Une voix non anglaise prête à l\'emploi.** Les points de contrôle pré-entraînés officiellement publiés sont uniquement en anglais (LJSpeech, LibriTTS). Entraîner soi-même un modèle non anglais est architecturalement possible selon les notes de l\'article sur son aligneur de texte multilingue et PL-BERT, mais nécessite votre propre entraînement — il n\'existe aucun point de contrôle non anglais téléchargeable auprès du projet.',
          '**Un octroi de licence unique et sans ambiguïté pour tout ce que vous téléchargez.** Parce que le code (MIT) et les poids pré-entraînés (MIT plus une condition de divulgation dans le README) sont régis légèrement différemment, et que le chemin d\'inférence officiel entraîne une dépendance GPL-3.0, StyleTTS 2 n\'offre pas l\'histoire de licence unique et simple qu\'offre un projet comme Bark (entièrement MIT, sans conditions supplémentaires).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à StyleTTS 2',
        itemHeadings: true,
        columns: ['Outil', 'Meilleur usage', 'Licence'],
        rows: [
          {
            'Outil': '[Piper](/fr/power-local-llm/piper-tts-review)',
            'Meilleur usage': 'Configuration simple pip-install-et-c\'est-parti, synthèse CPU la plus rapide, temps réel sur Raspberry Pi',
            'Licence': 'GPL-3.0-or-later',
          },
          {
            'Outil': '[XTTS v2](/fr/power-local-llm/xtts-v2-review)',
            'Meilleur usage': 'Clonage vocal packagé à partir de 6 secondes d\'audio de référence, 17 langues',
            'Licence': 'CPML (non commercial)',
          },
          {
            'Outil': '[Coqui TTS](/fr/power-local-llm/coqui-tts-review)',
            'Meilleur usage': 'Boîte à outils multi-backend flexible avec large support linguistique et fork maintenu',
            'Licence': 'MPL-2.0',
          },
          {
            'Outil': '[Bark](/fr/power-local-llm/bark-tts-review)',
            'Meilleur usage': 'Audio expressif non vocal — rires, soupirs, sons ambiants, licence MIT unique et sans ambiguïté',
            'Licence': 'MIT',
          },
          {
            'Outil': '[ElevenLabs](https://elevenlabs.io)',
            'Meilleur usage': 'API cloud gérée avec clonage vocal commercial et support actif, aucun effort d\'auto-hébergement',
            'Licence': 'Propriétaire (API cloud payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que StyleTTS 2 ?',
            a: 'StyleTTS 2 est un modèle de synthèse vocale open source de chercheurs de l\'université Columbia, qui génère une voix au rendu naturel via diffusion de style et entraînement adversarial avec de grands modèles de langage vocal, publié sous forme d\'article NeurIPS 2023.',
          },
          {
            q: 'StyleTTS 2 est-il libre d\'utilisation commerciale ?',
            a: 'Son code est sous licence MIT, qui autorise l\'usage commercial. Ses poids de modèle pré-entraîné portent une condition distincte, hors licence, dans le README, demandant de divulguer la voix synthétisée sauf autorisation du locuteur. Ceci n\'est pas un conseil juridique ; lisez vous-même le fichier LICENSE et le README avant tout déploiement commercial.',
          },
          {
            q: 'StyleTTS 2 peut-il cloner une voix ?',
            a: 'Son point de contrôle multi-locuteurs LibriTTS prend en charge le transfert de style zero-shot à partir d\'un clip audio de référence (5 à 10 secondes minimum, 15 à 30 secondes recommandées), ce qui s\'apparente au clonage vocal dans l\'esprit. Ce n\'est pas proposé comme une fonctionnalité de clonage simple en une ligne comme XTTS v2 — son utilisation nécessite le workflow officiel basé sur notebook ou le paquet pip communautaire.',
          },
          {
            q: 'StyleTTS 2 est-il encore maintenu ?',
            a: 'Le dépôt GitHub officiel n\'est pas marqué comme archivé, mais PromptQuorum n\'a trouvé aucun commit depuis le 7 mars 2024. Le paquet pip communautaire qui simplifie l\'installation a été publié pour la dernière fois le 11 janvier 2024. Traitez les deux comme des artefacts de recherche dormants plutôt que comme des logiciels activement développés.',
          },
          {
            q: 'StyleTTS 2 prend-il en charge d\'autres langues que l\'anglais ?',
            a: 'Les points de contrôle pré-entraînés officiellement publiés (LJSpeech, LibriTTS) sont uniquement en anglais. L\'article note que son composant aligneur de texte a également été entraîné sur des corpus japonais et chinois et généralise raisonnablement à d\'autres langues sans réglage fin, et référence un modèle PL-BERT multilingue de 14 langues comme point de départ pour entraîner votre propre modèle non anglais — mais il n\'existe aucun point de contrôle non anglais prêt à l\'emploi officiellement publié.',
          },
          {
            q: 'Pourquoi l\'installation officielle de StyleTTS 2 nécessite-t-elle espeak-ng, et pourquoi est-ce important ?',
            a: 'Le chemin d\'inférence officiel utilise la bibliothèque phonemizer avec espeak-ng comme backend pour convertir le texte en phonèmes. espeak-ng est sous licence GPL-3.0, une licence copyleft avec des obligations de distribution différentes de MIT. Un paquet pip communautaire (`styletts2`) évite cela en utilisant la bibliothèque gruut sous licence MIT à la place, au prix de dépendre d\'une version non officielle encore plus ancienne (dernière mise à jour le 11 janvier 2024).',
          },
          {
            q: 'Comment StyleTTS 2 se compare-t-il à XTTS v2 ?',
            a: 'Le code de StyleTTS 2 est sous licence MIT et libre d\'usage commercial (avec la condition de divulgation du README sur les poids) ; XTTS v2 est sous la licence non commerciale Coqui Public Model License. La configuration officielle de StyleTTS 2 est plus orientée recherche et demande plus de travail manuel ; XTTS v2 propose une API de clonage vocal plus simple et packagée via la boîte à outils Coqui TTS. Choisissez selon vos besoins de licence et votre tolérance à la complexité de configuration.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'StyleTTS 2 reste véritablement impressionnant sur la qualité de sortie : son approche par diffusion de style et entraînement adversarial est créditée dans son propre article NeurIPS d\'égaler ou dépasser la qualité des enregistrements humains sur le benchmark LJSpeech, sous une licence de code (MIT) aussi permissive que possible. Ce qui l\'empêche d\'être une recommandation facile pour la plupart des lecteurs, c\'est tout ce qui entoure ce modèle central : une condition de divulgation au niveau de la documentation sur les poids pré-entraînés qui se situe en dehors de l\'octroi MIT formel, un chemin d\'inférence officiel qui entraîne une dépendance GPL-3.0, un paquet pip communautaire qui évite cette dépendance mais qui est lui-même vieux de plus de deux ans et demi, et aucun commit sur le dépôt officiel depuis le 7 mars 2024. Si vous voulez la meilleure qualité de narration anglaise naturelle disponible localement et que vous êtes à l\'aise avec une configuration de niveau recherche et une chaîne de dépendances non maintenue, StyleTTS 2 tient ses promesses. Si vous voulez une installation plus simple, une maintenance active, ou un clonage vocal packagé, combinez cet avis avec la couverture de [Piper](/fr/power-local-llm/piper-tts-review) par PromptQuorum pour une synthèse CPU rapide, [XTTS v2](/fr/power-local-llm/xtts-v2-review) pour un clonage vocal packagé, ou la [comparaison ElevenLabs](/fr/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) pour une alternative entièrement gérée. Cet avis est le dernier des six moteurs locaux de reconnaissance et de synthèse vocale que PromptQuorum a examinés en profondeur, aux côtés de [Whisper.cpp](/fr/power-local-llm/whisper-cpp-review), [Faster Whisper](/fr/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/fr/power-local-llm/coqui-tts-review), XTTS v2 et [Bark](/fr/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[StyleTTS 2 sur GitHub](https://github.com/yl4579/StyleTTS2) — le dépôt officiel : README, LICENSE, instructions d\'installation et historique des commits.',
          '[Article StyleTTS 2 (arXiv)](https://arxiv.org/abs/2306.07691) — « Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models », l\'article NeurIPS 2023.',
          '[Ticket GitHub #37 : Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — la divergence signalée par la communauté entre le fichier LICENSE MIT et la condition de divulgation d\'utilisation du modèle dans le README.',
          '[styletts2 sur PyPI](https://pypi.org/project/styletts2/) — le paquet pip maintenu par la communauté (Sidharth Rajaram), version 0.1.6, publiée le 11 janvier 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) et [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) sur Hugging Face — les points de contrôle pré-entraînés officiels.',
          '[Licences TTS locales et clonage vocal](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparaison complète des licences des moteurs TTS locaux.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis XTTS v2](/fr/power-local-llm/xtts-v2-review) — clonage vocal packagé à partir de 6 secondes d\'audio de référence, sous licence non commerciale.',
          '[Avis Bark TTS](/fr/power-local-llm/bark-tts-review) — le modèle audio expressif non vocal avec une licence MIT unique et sans ambiguïté.',
          '[Avis Piper TTS](/fr/power-local-llm/piper-tts-review) — l\'alternative TTS locale rapide, simple à installer, CPU uniquement.',
          '[Avis Coqui TTS](/fr/power-local-llm/coqui-tts-review) — la boîte à outils flexible multi-backend et son fork maintenu par la communauté.',
          '[Licences TTS locales et clonage vocal : Piper, XTTS v2, F5-TTS et Coqui](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — l\'analyse approfondie des licences pour tous les principaux moteurs TTS locaux.',
          '[ElevenLabs vs Piper vs XTTS v2](/fr/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparaison cloud vs local pour les lecteurs qui décident s\'ils doivent s\'auto-héberger.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 : avis (2026) — le modèle de recherche sous licence MIT de Columbia pour une voix naturelle',
      description:
        'Avis StyleTTS 2 : le modèle vocal à diffusion de style sous licence MIT de l\'université Columbia. Commandes d\'installation réelles, nuance de licence sur les poids, et statut de maintenance (aucun commit depuis mars 2024) pour 2026.',
      url: 'https://promptquorum.com/fr/power-local-llm/styletts-2-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des modèles locaux de synthèse vocale de niveau recherche' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 : avis (2026)', item: 'https://promptquorum.com/fr/power-local-llm/styletts-2-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-es.webp',
    title: 'StyleTTS 2 reseña (2026): el modelo de investigación de Columbia con licencia MIT para voz natural',
    seoTitle: 'StyleTTS 2 reseña 2026: síntesis de voz con licencia MIT',
    intro:
      'StyleTTS 2 es un modelo de texto a voz de código abierto publicado por investigadores de la Universidad de Columbia en [GitHub](https://github.com/yl4579/StyleTTS2), que genera voz de sonido natural mediante difusión de estilo y entrenamiento adversarial con grandes modelos de lenguaje de voz. Su código está bajo **licencia MIT**, pero su README añade una condición de divulgación aparte, fuera de la licencia, para los pesos del modelo preentrenado, y el repositorio público no tiene commits desde el 7 de marzo de 2024. Esta reseña cubre qué hace realmente StyleTTS 2, comandos reales de instalación e inferencia, el matiz de licencia entre el código MIT y los pesos condicionales, y su estado de mantenimiento inactivo pero no archivado — el panorama honesto para quien lo evalúe en 2026.',
    metaDescription:
      'Reseña de StyleTTS 2: el modelo de voz de difusión de estilo con licencia MIT de la Universidad de Columbia. Comandos reales de instalación, el matiz de licencia en los pesos y su estado de mantenimiento (sin commits desde marzo de 2024) para 2026.',
    twitterDescription:
      'Reseña StyleTTS 2 2026: el modelo de investigación de Columbia usa difusión de estilo y entrenamiento adversarial para narración natural, bajo licencia MIT con una advertencia a nivel de documentación sobre los pesos preentrenados. Comandos reales, límites honestos y una verificación del estado de mantenimiento.',
    audience:
      'Desarrolladores e investigadores que evalúan un modelo local de texto a voz con licencia MIT para narración de alta calidad, que necesitan entender su estado de mantenimiento como repositorio de investigación y su matiz de licencia antes de construir sobre él.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 reseña',
    targetKeywords: [
      'styletts 2 reseña',
      'styletts2',
      'styletts 2 licencia',
      'styletts 2 instalación',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 mantenido',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2 es un modelo de texto a voz de código abierto y nivel investigación de la Universidad de Columbia, que genera voz de sonido natural mediante difusión de estilo y entrenamiento adversarial con grandes modelos de lenguaje de voz.** Su código está bajo **licencia MIT**, se instala con `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. Su README añade una condición aparte, fuera de la licencia, sobre los pesos del modelo preentrenado (divulgar que el habla es sintetizada salvo permiso del hablante), y el repositorio público de GitHub no muestra commits desde el 7 de marzo de 2024. Para una comparación completa de licencias entre motores TTS locales, consulta la [guía de licencias TTS locales](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es StyleTTS 2 y sigue mantenido?',
        answer:
          'StyleTTS 2 vale la pena si quieres la narración en inglés más natural disponible en un modelo local con licencia MIT, producida mediante difusión de estilo y entrenamiento adversarial, una técnica que su artículo de NeurIPS reporta como igual o superior a grabaciones humanas en benchmarks estándar. Su checkpoint multi-hablante de LibriTTS también admite transferencia de estilo zero-shot desde un clip de referencia de 5 a 10 segundos (se recomiendan 15 a 30 segundos), en un espíritu similar al clonado de voz, aunque no está empaquetado como una función de clonado de una sola línea como XTTS v2. Su código tiene licencia MIT, pero su propio README añade una condición fuera de la licencia sobre los pesos del modelo preentrenado: debes divulgar que el habla es sintetizada salvo que tengas permiso del hablante. Su ruta de inferencia oficial requiere espeak-ng, con licencia GPL-3.0, para la fonemización; un paquete pip mantenido por la comunidad (`styletts2` de Sidharth Rajaram) evita esto usando la biblioteca gruut con licencia MIT en su lugar, pero su última versión fue el 11 de enero de 2024. El repositorio oficial de GitHub no está marcado como archivado, pero no tiene commits desde el 7 de marzo de 2024 — trátalo como un artefacto de investigación inactivo, no como un producto en desarrollo activo, antes de depender de él para algo crítico en producción.',
        bullets: [
          'Genera voz de sonido natural mediante difusión de estilo y entrenamiento adversarial, según su artículo de NeurIPS, igualando o superando grabaciones humanas en benchmarks estándar de un solo hablante.',
          'Licencia del código: MIT. Los pesos del modelo preentrenado llevan una condición de divulgación adicional a nivel de README, no incluida en el texto de la licencia MIT en sí.',
          'El checkpoint multi-hablante de LibriTTS admite transferencia de estilo zero-shot desde un clip de referencia de 5 a 10 segundos (se recomiendan 15 a 30 segundos).',
          'La ruta de inferencia oficial necesita espeak-ng con licencia GPL-3.0; un paquete pip comunitario lo evita pero su última versión es del 11 de enero de 2024.',
          'Sin commits en el repositorio oficial de GitHub desde el 7 de marzo de 2024; no archivado, más de 6.300 estrellas.',
          'Creado por investigadores del Departamento de Ingeniería Eléctrica de la Universidad de Columbia; los checkpoints preentrenados son principalmente en inglés.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: un proyecto de investigación de Columbia', anchor: 'history' },
      { label: 'Qué hace realmente StyleTTS 2', anchor: 'what-it-does' },
      { label: 'Instalar y ejecutar StyleTTS 2: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y costo', anchor: 'license-cost' },
      { label: 'Para qué no sirve StyleTTS 2', anchor: 'limitations' },
      { label: 'Alternativas a StyleTTS 2', anchor: 'alternatives' },
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
            text: 'StyleTTS 2 es el modelo de texto a voz de investigación con licencia MIT de la Universidad de Columbia, que produce voz de sonido natural mediante difusión de estilo y entrenamiento adversarial, con una condición de divulgación a nivel de documentación sobre sus pesos preentrenados y sin commits en GitHub desde el 7 de marzo de 2024.',
          },
          {
            type: 'plain-terms',
            text: 'Es un modelo de IA gratuito y descargable que convierte texto en voz de sonido muy natural, creado por investigadores universitarios en lugar de una empresa — de uso comercial libre según la licencia del código, pero sus propias instrucciones piden informar a los oyentes que el habla está sintetizada, y nadie parece estar corrigiendo errores activamente ya.',
          },
        ],
        items: [
          'Voz de sonido natural mediante difusión de estilo y entrenamiento adversarial, igualando o superando grabaciones humanas en benchmarks estándar de un solo hablante según su artículo de NeurIPS.',
          'Licencia del código: MIT. Los pesos del modelo preentrenado llevan una condición de divulgación aparte en el README, no codificada en el texto de la licencia MIT.',
          'Transferencia de estilo zero-shot desde un clip de referencia de 5 a 10 segundos vía el checkpoint multi-hablante de LibriTTS (se recomiendan 15 a 30 segundos).',
          'La inferencia oficial necesita espeak-ng con licencia GPL-3.0; un paquete pip comunitario lo evita pero su última versión es del 11 de enero de 2024.',
          'Sin commits en el repositorio oficial desde el 7 de marzo de 2024; no archivado, más de 6.300 estrellas en GitHub.',
          'Los checkpoints preentrenados son principalmente en inglés; el alineador de texto también se entrenó con corpus japonés y chino y generaliza razonablemente a otros idiomas sin ajuste fino.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un issue de GitHub sobre el proyecto (#37) señaló que el requisito de divulgación del README para modelos preentrenados está fuera del propio archivo de licencia MIT, lo que algunos lectores encuentran confuso. Lee tanto el archivo LICENSE como la sección de uso del modelo del README antes de desplegarlo — ver la sección de Licencia y costo abajo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: un proyecto de investigación de Columbia',
        content: [
          '**StyleTTS 2 fue creado por investigadores del Departamento de Ingeniería Eléctrica de la Universidad de Columbia** — Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler y Nima Mesgarani — y publicado como artículo de NeurIPS 2023 titulado "StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models".',
          '**La afirmación central del artículo es que su combinación de difusión de estilo (modelar el estilo del habla como una distribución de probabilidad latente en lugar de un vector fijo único) y entrenamiento adversarial contra grandes modelos de lenguaje de voz preentrenados le permite modelar la variación del habla humana con mayor precisión que los enfoques anteriores.** En el benchmark de un solo hablante LJSpeech, el artículo reporta que StyleTTS 2 iguala o supera grabaciones de habla humana real en evaluaciones de oyentes; en el conjunto de datos multi-hablante LibriTTS, reporta superar a los modelos públicos previamente disponibles en adaptación zero-shot al hablante.',
          '**El repositorio público de GitHub [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2) ha acumulado más de 6.300 estrellas**, y no está marcado como archivado — pero PromptQuorum no encontró commits en la rama principal del repositorio desde el 7 de marzo de 2024, según el historial público de commits del proyecto. Esto es consistente con una publicación de investigación universitaria en lugar de un producto de código abierto mantenido comercialmente: el código, el artículo y los checkpoints preentrenados se publicaron para acompañar la investigación, sin un compromiso continuo de desarrollo de funciones o versiones correctivas.',
          '**Un paquete pip mantenido por la comunidad, `styletts2` del desarrollador Sidharth Rajaram**, envuelve el código de investigación original en un paquete instalable (`pip install styletts2`) que reemplaza el fonemizador espeak-ng con licencia GPL-3.0 por la biblioteca gruut con licencia MIT, para mantener toda la cadena de instalación con licencia permisiva. Su versión más reciente en [PyPI](https://pypi.org/project/styletts2/) es la 0.1.6, publicada el 11 de enero de 2024 — también con más de dos años y medio de antigüedad al momento de esta reseña, y un proyecto de terceros separado del código de investigación original de Columbia.',
        ],
        faqs: [
          {
            q: '¿Quién creó StyleTTS 2?',
            a: 'StyleTTS 2 fue creado por Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler y Nima Mesgarani, investigadores del Departamento de Ingeniería Eléctrica de la Universidad de Columbia, y publicado como artículo de NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente StyleTTS 2',
        content: [
          'StyleTTS 2 es un modelo de texto a voz que genera un mel-espectrograma (y, en su configuración de extremo a extremo, una forma de onda cruda) a partir del texto de entrada, usando un modelo de difusión para muestrear un vector de "estilo" latente en lugar de tener que predecirlo de forma determinista — este mecanismo es al que el artículo atribuye una prosodia más natural y humana.',
        ],
        items: [
          '**Difusión de estilo para prosodia natural.** En lugar de predecir un único embedding de estilo fijo a partir del texto, StyleTTS 2 muestrea, mediante difusión, una distribución de probabilidad aprendida sobre estilos, lo que según el artículo produce una variación más natural en tono, ritmo y énfasis que los enfoques deterministas.',
          '**Entrenamiento adversarial contra modelos de lenguaje de voz.** El proceso de entrenamiento enfrenta al modelo TTS contra grandes modelos de lenguaje de voz (SLM) preentrenados que actúan como discriminadores, una técnica a la que el artículo atribuye cerrar la brecha restante con la calidad de grabación humana en el benchmark LJSpeech.',
          '**Dos checkpoints preentrenados publicados oficialmente.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (un solo hablante en inglés, 24kHz) y [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (multi-hablante en inglés) están alojados en Hugging Face.',
          '**Transferencia de estilo zero-shot desde audio de referencia.** El checkpoint multi-hablante de LibriTTS puede sintetizar texto nuevo en un estilo capturado a partir de un clip de audio de referencia — la propia documentación del proyecto y guías de terceros describen un mínimo de 5 a 10 segundos, recomendando 15 a 30 segundos de audio de referencia limpio y de un solo hablante para un timbre, prosodia y pronunciación precisos.',
          '**Checkpoints preentrenados principalmente en inglés, con algo de trabajo base multilingüe.** Los checkpoints publicados oficialmente se entrenan con conjuntos de datos en inglés (LJSpeech, LibriTTS). El artículo señala que su componente alineador de texto también se preentrenó con corpus japonés (JVS) y chino (AiShell) y "funciona bien para la mayoría de los demás idiomas sin ajuste fino", y hace referencia a un modelo PL-BERT multilingüe que cubre 14 idiomas como punto de partida para entrenar tu propio modelo StyleTTS 2 no inglés — pero no hay un checkpoint no inglés oficialmente publicado y listo para usar.',
        ],
        note: 'StyleTTS 2 es una base de código de investigación con checkpoints preentrenados publicados, no un producto de consumo pulido — instalarlo y ejecutarlo requiere más configuración que una herramienta instalable con pip de un solo propósito como Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar y ejecutar StyleTTS 2: paso a paso',
        content: 'Esta guía sigue la configuración documentada por el propio proyecto para ejecutar inferencia con un checkpoint preentrenado.',
        numberedItems: [
          {
            title: 'Clonar el repositorio e instalar las dependencias.',
            whyItMatters: 'Ejecuta `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`. Esto instala las dependencias principales de Python listadas en el archivo requirements del propio proyecto.',
          },
          {
            title: 'Instalar el fonemizador y espeak-ng.',
            whyItMatters: 'Ejecuta `pip install phonemizer` y, en Linux, `sudo apt-get install espeak-ng` (o el equivalente para tu sistema operativo). Ten en cuenta que espeak-ng en sí tiene licencia GPL-3.0 — ver la sección de Licencia y costo para saber por qué eso importa para la ruta de inferencia, no solo para el código de StyleTTS 2 en sí.',
          },
          {
            title: 'Descargar un checkpoint preentrenado.',
            whyItMatters: 'Descarga [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (un solo hablante) o [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (multi-hablante, admite transferencia de estilo) desde Hugging Face al directorio del proyecto.',
          },
          {
            title: 'Ejecutar la inferencia a través de los notebooks proporcionados.',
            whyItMatters: 'El proyecto incluye `Demo/Inference_LJSpeech.ipynb` y `Demo/Inference_LibriTTS.ipynb` — abre el que coincida con tu checkpoint descargado en Jupyter para cargar el modelo y sintetizar tu primera muestra.',
          },
          {
            title: '(Alternativa) Usar el paquete pip comunitario para una cadena de instalación más simple, solo MIT.',
            whyItMatters: 'Ejecuta `pip install styletts2`, luego `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("Hola.", output_wav_file="test.wav")`. Este paquete de terceros (última versión el 11 de enero de 2024) usa la biblioteca gruut con licencia MIT en lugar de espeak-ng, evitando la dependencia GPL-3.0 — a costa de depender de un wrapper no oficial también inactivo.',
          },
          {
            title: '(Opcional) Proporcionar un clip de referencia para transferencia de estilo.',
            whyItMatters: 'Con el checkpoint de LibriTTS, pasa un argumento `target_voice_path` (paquete comunitario) o el parámetro de audio de referencia equivalente (notebook oficial) apuntando a un archivo WAV limpio de un solo hablante de 15 a 30 segundos, para sintetizar texto nuevo en ese estilo capturado.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Estos ejemplos muestran tanto la API simplificada del paquete pip comunitario como el patrón usado en los notebooks de inferencia del proyecto oficial.',
        ],
        codeBlock: `# Ruta más simple: paquete pip comunitario (cadena de dependencias solo MIT,
# última versión 2024-01-11 — verifica que aún funcione antes de depender de él)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# Transferencia de estilo zero-shot desde un clip de referencia (checkpoint tipo LibriTTS)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# Ruta de checkpoint y configuración personalizados
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- Ruta del repositorio oficial (requiere espeak-ng, GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# Luego abre Demo/Inference_LJSpeech.ipynb o Demo/Inference_LibriTTS.ipynb
# en Jupyter y ejecuta las celdas proporcionadas con tu checkpoint descargado.`,
        codeLanguage: 'python',
        note: 'La API exacta del paquete comunitario `styletts2` (`tts.StyleTTS2()`, `.inference()`, `target_voice_path`) está documentada en su propia [página de PyPI](https://pypi.org/project/styletts2/) y README, actualizada por última vez para la versión 0.1.6 (11 de enero de 2024) — verifica que siga coincidiendo antes de programar sobre ella. La ruta basada en notebooks del repositorio oficial está documentada directamente en el [README del proyecto](https://github.com/yl4579/StyleTTS2).',
        items: [
          '**La calidad del audio de referencia importa para la transferencia de estilo.** Un clip limpio de un solo hablante de 15 a 30 segundos produce una transferencia de estilo notablemente mejor que una referencia corta, ruidosa o de múltiples hablantes.',
          '**Existen dos cadenas de dependencias separadas.** La ruta por notebook del repositorio oficial trae espeak-ng con licencia GPL-3.0; el paquete pip comunitario evita eso con gruut en su lugar — elige la cadena que coincida con tus requisitos de licencia antes de construir herramientas alrededor de cualquiera de las dos.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y costo',
        content: [
          '**El código de StyleTTS 2 tiene licencia MIT**, confirmado a través del archivo `LICENSE` en el [repositorio oficial](https://github.com/yl4579/StyleTTS2). MIT es una licencia permisiva: puedes usar, modificar y redistribuir el código, incluso comercialmente, con restricciones mínimas.',
          '**Los pesos del modelo preentrenado llevan una condición aparte, fuera de la licencia, indicada en el README, no en el archivo LICENSE en sí.** El README del proyecto pide a los usuarios "informar a los oyentes que las muestras de voz son sintetizadas por los modelos StyleTTS 2, a menos que tengas permiso para usar la voz que sintetizas". Esto es una solicitud a nivel de documentación, no una cláusula de licencia formal — un [issue de GitHub sobre el proyecto (#37)](https://github.com/yl4579/StyleTTS2/issues/37) señaló explícitamente esto como potencialmente confuso, ya que la insignia de licencia y el archivo LICENSE del repositorio sugieren a un lector que no lee también la sección de uso del modelo del README que solo aplican los términos MIT. PromptQuorum no encontró respuesta de los mantenedores que resuelva esa ambigüedad en el hilo público del issue. Trata la condición de divulgación como una solicitud real y documentada de los autores, y cúmplela — pero entiende que está fuera de la concesión MIT formal sobre el código en sí, una estructura genuinamente inusual que vale la pena señalar antes del uso comercial.',
          '**Ejecutar la inferencia oficial trae una dependencia con licencia GPL-3.0: espeak-ng.** Las propias instrucciones de instalación del proyecto piden `pip install phonemizer` más una instalación a nivel de sistema de `espeak-ng`, y espeak-ng tiene licencia GPL-3.0. GPL-3.0 es una licencia copyleft con obligaciones de distribución distintas a MIT; usar espeak-ng como dependencia externa del sistema sin modificar generalmente se trata de forma diferente a enlazar estáticamente o redistribuir su código fuente modificado, pero el límite exacto depende de tu implementación. El paquete pip comunitario `styletts2` evita este problema específico usando la biblioteca gruut con licencia MIT en lugar de espeak-ng — una diferencia práctica real si quieres una cadena de dependencias totalmente permisiva, a costa de depender de un paquete de terceros con una fecha de última versión (11 de enero de 2024) aún más antigua que la del repositorio oficial.',
          'Nada de esto es asesoría legal. Lee el archivo LICENSE, la sección de uso del modelo del README, y consulta a un abogado para tu implementación específica antes de lanzar StyleTTS 2 en un producto comercial.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa StyleTTS 2?',
            a: 'El código de StyleTTS 2 tiene licencia MIT. Sus pesos de modelo preentrenado llevan una condición aparte, fuera de la licencia, en el README del proyecto (divulgar el habla sintetizada a menos que tengas permiso del hablante), que no forma parte del texto formal de la licencia MIT — una distinción que un issue de GitHub sobre el proyecto señaló como potencialmente confusa. Esto no es asesoría legal; lee tú mismo el archivo LICENSE y el README antes del uso comercial.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no sirve StyleTTS 2',
        content: [
          'StyleTTS 2 es un modelo de nivel investigación con una calidad de salida genuinamente sólida, no un producto de consumo pulido y activamente mantenido. Es la herramienta equivocada para las siguientes situaciones:',
        ],
        items: [
          '**Lectores que quieren una experiencia simple de instalar con pip y listo.** A diferencia de [Piper](/es/power-local-llm/piper-tts-review), que está a `pip install piper-tts` y un solo comando CLI de tener audio funcionando, la ruta oficial de StyleTTS 2 implica clonar un repositorio de investigación, instalar un fonemizador, una dependencia de espeak-ng a nivel de sistema y ejecutar notebooks de Jupyter — una barrera de configuración notablemente más alta.',
          '**Despliegue en producción sin esfuerzo de ingeniería de ML.** No hay un modo de servidor web mantenido, ni una imagen Docker oficial, ni una empresa respaldando el soporte continuo. Cualquiera que despliegue StyleTTS 2 en producción debe esperar escribir y mantener su propia capa de servicio alrededor del código de investigación.',
          '**Correcciones de errores o actualizaciones de funciones continuas garantizadas.** Sin commits en el repositorio oficial desde el 7 de marzo de 2024, y con la última versión del paquete pip comunitario fechada el 11 de enero de 2024, no asumas mantenimiento activo para ninguna de las dos cadenas de dependencias — presupuesta la posibilidad de estar por tu cuenta ante cualquier problema que encuentres.',
          '**Voz lista para usar en idiomas distintos al inglés.** Los checkpoints preentrenados publicados oficialmente son solo en inglés (LJSpeech, LibriTTS). Entrenar tú mismo un modelo no inglés es arquitectónicamente posible según las notas del artículo sobre su alineador de texto multilingüe y PL-BERT, pero requiere tu propio entrenamiento — no hay un checkpoint no inglés descargable del proyecto.',
          '**Una concesión de licencia única e inequívoca para todo lo que descargas.** Porque el código (MIT) y los pesos preentrenados (MIT más una condición de divulgación en el README) se rigen de forma ligeramente diferente, y la ruta de inferencia oficial trae una dependencia GPL-3.0, StyleTTS 2 no ofrece la historia de licencia única y simple que tiene un proyecto como Bark (totalmente MIT, sin condiciones adicionales).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a StyleTTS 2',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Piper](/es/power-local-llm/piper-tts-review)',
            'Mejor para': 'Configuración simple pip-install-y-listo, síntesis CPU más rápida, tiempo real en Raspberry Pi',
            'Licencia': 'GPL-3.0-or-later',
          },
          {
            'Herramienta': '[XTTS v2](/es/power-local-llm/xtts-v2-review)',
            'Mejor para': 'Clonado de voz empaquetado desde 6 segundos de audio de referencia, 17 idiomas',
            'Licencia': 'CPML (no comercial)',
          },
          {
            'Herramienta': '[Coqui TTS](/es/power-local-llm/coqui-tts-review)',
            'Mejor para': 'Kit multi-backend flexible con amplio soporte de idiomas y fork mantenido',
            'Licencia': 'MPL-2.0',
          },
          {
            'Herramienta': '[Bark](/es/power-local-llm/bark-tts-review)',
            'Mejor para': 'Audio expresivo no vocal — risas, suspiros, sonido ambiental, licencia MIT única e inequívoca',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[ElevenLabs](https://elevenlabs.io)',
            'Mejor para': 'API en la nube gestionada con clonado de voz comercial y soporte activo, sin esfuerzo de autoalojamiento',
            'Licencia': 'Propietaria (API en la nube de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es StyleTTS 2?',
            a: 'StyleTTS 2 es un modelo de texto a voz de código abierto de investigadores de la Universidad de Columbia que genera voz de sonido natural mediante difusión de estilo y entrenamiento adversarial con grandes modelos de lenguaje de voz, publicado como artículo de NeurIPS 2023.',
          },
          {
            q: '¿Es StyleTTS 2 gratuito para uso comercial?',
            a: 'Su código tiene licencia MIT, que permite el uso comercial. Sus pesos de modelo preentrenado llevan una condición aparte, fuera de la licencia, en el README, que pide divulgar el habla sintetizada a menos que tengas permiso del hablante. Esto no es asesoría legal; lee tú mismo el archivo LICENSE y el README antes de un despliegue comercial.',
          },
          {
            q: '¿Puede StyleTTS 2 clonar una voz?',
            a: 'Su checkpoint multi-hablante de LibriTTS admite transferencia de estilo zero-shot desde un clip de audio de referencia (5 a 10 segundos como mínimo, 15 a 30 segundos recomendados), lo cual se asemeja al clonado de voz en espíritu. No está empaquetado como una función de clonado simple de una línea como XTTS v2 — usarlo requiere el flujo de trabajo oficial basado en notebooks o el paquete pip comunitario.',
          },
          {
            q: '¿Sigue mantenido StyleTTS 2?',
            a: 'El repositorio oficial de GitHub no está marcado como archivado, pero PromptQuorum no encontró commits desde el 7 de marzo de 2024. El paquete pip comunitario que simplifica la instalación se publicó por última vez el 11 de enero de 2024. Trata a ambos como artefactos de investigación inactivos en lugar de software en desarrollo activo.',
          },
          {
            q: '¿StyleTTS 2 admite idiomas distintos al inglés?',
            a: 'Los checkpoints preentrenados publicados oficialmente (LJSpeech, LibriTTS) son solo en inglés. El artículo señala que su componente alineador de texto también se entrenó con corpus japonés y chino y generaliza razonablemente a otros idiomas sin ajuste fino, y hace referencia a un modelo PL-BERT multilingüe de 14 idiomas como punto de partida para entrenar tu propio modelo no inglés — pero no hay un checkpoint no inglés listo para usar publicado oficialmente.',
          },
          {
            q: '¿Por qué la instalación oficial de StyleTTS 2 necesita espeak-ng, y por qué importa eso?',
            a: 'La ruta de inferencia oficial usa la biblioteca phonemizer con espeak-ng como backend para convertir texto en fonemas. espeak-ng tiene licencia GPL-3.0, una licencia copyleft con obligaciones de distribución distintas a MIT. Un paquete pip comunitario (`styletts2`) evita esto usando la biblioteca gruut con licencia MIT en su lugar, a costa de depender de una versión no oficial aún más antigua (última actualización el 11 de enero de 2024).',
          },
          {
            q: '¿Cómo se compara StyleTTS 2 con XTTS v2?',
            a: 'El código de StyleTTS 2 tiene licencia MIT y es de uso comercial libre (con la condición de divulgación del README sobre los pesos); XTTS v2 tiene licencia bajo la Coqui Public Model License no comercial. La configuración oficial de StyleTTS 2 es más de nivel investigación y requiere más trabajo manual; XTTS v2 ofrece una API de clonado de voz más simple y empaquetada a través del kit Coqui TTS. Elige según tus necesidades de licencia y tu tolerancia a la complejidad de configuración.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'StyleTTS 2 sigue siendo genuinamente impresionante en calidad de salida: su enfoque de difusión de estilo y entrenamiento adversarial es acreditado en su propio artículo de NeurIPS con igualar o superar la calidad de grabación humana en el benchmark LJSpeech, bajo una licencia de código (MIT) tan permisiva como es posible. Lo que le impide ser una recomendación fácil para la mayoría de los lectores es todo lo que rodea a ese modelo central: una condición de divulgación a nivel de documentación sobre los pesos preentrenados que está fuera de la concesión MIT formal, una ruta de inferencia oficial que trae una dependencia GPL-3.0, un paquete pip comunitario que evita esa dependencia pero que en sí tiene más de dos años y medio de antigüedad, y sin commits en el repositorio oficial desde el 7 de marzo de 2024. Si quieres la mejor calidad de narración en inglés natural disponible localmente y te sientes cómodo con una configuración de nivel investigación y una cadena de dependencias no mantenida, StyleTTS 2 cumple. Si quieres una instalación más simple, mantenimiento activo, o clonado de voz empaquetado, combina esta reseña con la cobertura de PromptQuorum sobre [Piper](/es/power-local-llm/piper-tts-review) para síntesis CPU rápida, [XTTS v2](/es/power-local-llm/xtts-v2-review) para clonado de voz empaquetado, o la [comparación de ElevenLabs](/es/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) para una alternativa completamente gestionada. Esta reseña es la última de seis motores locales de reconocimiento y síntesis de voz que PromptQuorum ha revisado en profundidad, junto a [Whisper.cpp](/es/power-local-llm/whisper-cpp-review), [Faster Whisper](/es/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/es/power-local-llm/coqui-tts-review), XTTS v2 y [Bark](/es/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[StyleTTS 2 en GitHub](https://github.com/yl4579/StyleTTS2) — el repositorio oficial: README, LICENSE, instrucciones de instalación e historial de commits.',
          '[Artículo de StyleTTS 2 (arXiv)](https://arxiv.org/abs/2306.07691) — "Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models", el artículo de NeurIPS 2023.',
          '[Issue de GitHub #37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — la discrepancia señalada por la comunidad entre el archivo LICENSE MIT y la condición de divulgación de uso del modelo en el README.',
          '[styletts2 en PyPI](https://pypi.org/project/styletts2/) — el paquete pip mantenido por la comunidad (Sidharth Rajaram), versión 0.1.6, publicada el 11 de enero de 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) y [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) en Hugging Face — los checkpoints preentrenados oficiales.',
          '[Licencias de TTS local y clonado de voz](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparación completa de licencias entre motores TTS locales.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de XTTS v2](/es/power-local-llm/xtts-v2-review) — clonado de voz empaquetado desde 6 segundos de audio de referencia, bajo licencia no comercial.',
          '[Reseña de Bark TTS](/es/power-local-llm/bark-tts-review) — el modelo de audio expresivo no vocal con una licencia MIT única e inequívoca.',
          '[Reseña de Piper TTS](/es/power-local-llm/piper-tts-review) — la alternativa TTS local rápida, de instalación simple, solo CPU.',
          '[Reseña de Coqui TTS](/es/power-local-llm/coqui-tts-review) — el kit flexible multi-backend y su fork mantenido por la comunidad.',
          '[Licencias de TTS local y clonado de voz: Piper, XTTS v2, F5-TTS y Coqui](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — el análisis profundo de licencias entre todos los principales motores TTS locales.',
          '[ElevenLabs vs Piper vs XTTS v2](/es/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparación nube vs local para lectores que deciden si autoalojarse.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 reseña (2026): el modelo de investigación de Columbia con licencia MIT para voz natural',
      description:
        'Reseña de StyleTTS 2: el modelo de voz de difusión de estilo con licencia MIT de la Universidad de Columbia. Comandos reales de instalación, el matiz de licencia en los pesos y su estado de mantenimiento (sin commits desde marzo de 2024) para 2026.',
      url: 'https://promptquorum.com/es/power-local-llm/styletts-2-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan modelos locales de texto a voz de nivel investigación' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 reseña (2026)', item: 'https://promptquorum.com/es/power-local-llm/styletts-2-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-ja.webp',
    title: 'StyleTTS 2レビュー(2026):コロンビア大学のMITライセンス研究モデルで自然な音声を生成',
    seoTitle: 'StyleTTS 2レビュー2026:MITライセンスの音声合成モデル',
    intro:
      'StyleTTS 2は、コロンビア大学の研究者が[GitHub](https://github.com/yl4579/StyleTTS2)で公開しているオープンソースのテキスト読み上げ(TTS)モデルです。スタイル拡散(style diffusion)と、大規模音声言語モデルを用いた敵対的学習により、自然な音声を生成します。コードは**MITライセンス**ですが、READMEには事前学習済みモデルの重みに対する別個の、ライセンス外の開示条件が追加されており、公開リポジトリは2024年3月7日以降コミットがありません。このレビューでは、StyleTTS 2が実際に何をするか、実際のインストール・推論コマンド、MITコードと条件付きの重みの間のライセンスの微妙な違い、そして休眠中だがアーカイブされてはいないというメンテナンス状況について、2026年に評価する人向けに正直にお伝えします。',
    metaDescription:
      'StyleTTS 2レビュー:コロンビア大学のMITライセンス・スタイル拡散音声モデル。実際のインストールコマンド、重みのライセンスの微妙な違い、2026年時点のメンテナンス状況(2024年3月以降コミットなし)を解説。',
    twitterDescription:
      'StyleTTS 2レビュー2026:コロンビア大学の研究モデルはスタイル拡散と敵対的学習で自然なナレーションを実現、MITライセンスながら事前学習済み重みにはドキュメントレベルの注意事項あり。実際のコマンド、正直な限界、メンテナンス状況を確認。',
    audience:
      '高品質なナレーション用にローカルのMITライセンスTTSモデルを評価している開発者・研究者で、構築前に研究リポジトリのメンテナンス状況とライセンスの微妙な違いを理解する必要がある方。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2レビュー',
    targetKeywords: [
      'styletts 2 レビュー',
      'styletts2',
      'styletts 2 ライセンス',
      'styletts 2 インストール',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 メンテナンス',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2は、コロンビア大学によるオープンソースの研究レベルのテキスト読み上げモデルで、スタイル拡散と大規模音声言語モデルを用いた敵対的学習により自然な音声を生成します。** コードは**MITライセンス**で、`git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`でインストールします。READMEには事前学習済みモデルの重みに対する別個の、ライセンス外の条件(話者の許可がない限り音声が合成されたものであることを開示すること)が追加されており、公開GitHubリポジトリは2024年3月7日以降コミットがありません。ローカルTTSエンジン間の完全なライセンス比較については、PromptQuorumの[ローカルTTSライセンスガイド](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)を参照してください。',
    quickAnswerTop: {
      en: {
        question: 'StyleTTS 2とは何ですか。まだメンテナンスされていますか。',
        answer:
          'StyleTTS 2は、ローカルでMITライセンスのモデルから入手可能な最も自然な英語ナレーション品質を求める場合に価値があります。これはスタイル拡散と敵対的学習によって生み出され、NeurIPS論文では標準ベンチマークで人間の録音と同等かそれを上回ると報告されています。LibriTTSマルチスピーカーチェックポイントは、5〜10秒(推奨15〜30秒)の参照クリップからのゼロショット・スタイル転送もサポートしており、これはボイスクローニングに近い性質を持ちますが、XTTS v2のようなワンラインのクローニング機能としてパッケージ化されているわけではありません。コードはMITライセンスですが、自身のREADMEには事前学習済みモデルの重みに対するライセンス外の条件が追加されています。話者の許可がない限り、音声が合成されたものであることを開示する必要があります。公式の推論パスは音素化のためにGPL-3.0ライセンスのespeak-ngを必要とします。コミュニティ管理のpipパッケージ(Sidharth RajaramによるStyleTTS2)は代わりにMITライセンスのgruutライブラリを使用してこれを回避しますが、最終リリースは2024年1月11日でした。公式のGitHubリポジトリはアーカイブとしてマークされていませんが、2024年3月7日以降コミットがありません。本番環境で重要な用途に依存する前に、活発に開発されている製品ではなく、休眠中の研究成果物として扱ってください。',
        bullets: [
          'スタイル拡散と敵対的学習により自然な音声を生成し、NeurIPS論文によれば標準的な単一話者ベンチマークで人間の録音と同等かそれを上回る。',
          'コードライセンス:MIT。事前学習済みモデルの重みには、MITライセンス本文には含まれない、README独自の追加開示条件が付いている。',
          'LibriTTSマルチスピーカーチェックポイントは5〜10秒の参照クリップからのゼロショット・スタイル転送をサポート(推奨15〜30秒)。',
          '公式の推論パスはGPL-3.0ライセンスのespeak-ngを必要とする。コミュニティ製pipパッケージはこれを回避するが、最終リリースは2024年1月11日。',
          '公式GitHubリポジトリは2024年3月7日以降コミットなし。アーカイブされてはおらず、スター数は6,300以上。',
          'コロンビア大学電気工学科の研究者らによって開発。事前学習済みチェックポイントは主に英語。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:コロンビア大学の研究プロジェクト', anchor: 'history' },
      { label: 'StyleTTS 2が実際に行うこと', anchor: 'what-it-does' },
      { label: 'StyleTTS 2のインストールと実行:手順', anchor: 'install-walkthrough' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスと費用', anchor: 'license-cost' },
      { label: 'StyleTTS 2が向いていない用途', anchor: 'limitations' },
      { label: 'StyleTTS 2の代替手段', anchor: 'alternatives' },
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
            text: 'StyleTTS 2は、スタイル拡散と敵対的学習により自然な音声を生成するコロンビア大学のMITライセンス研究レベルTTSモデルで、事前学習済み重みにはドキュメントレベルの開示条件があり、GitHubは2024年3月7日以降コミットがない。',
          },
          {
            type: 'plain-terms',
            text: '企業ではなく大学の研究者が作った、テキストを非常に自然な音声に変える無料でダウンロード可能なAIモデルです。コードライセンス上は商用利用も無料ですが、独自の説明書では聞き手に音声が合成されたものであると伝えるよう求めており、もはや誰も積極的にバグを修正していないようです。',
          },
        ],
        items: [
          'スタイル拡散と敵対的学習による自然な音声。NeurIPS論文によれば標準的な単一話者ベンチマークで人間の録音と同等かそれを上回る。',
          'コードライセンス:MIT。事前学習済みモデルの重みにはREADME独自の開示条件があり、MITライセンス本文には含まれない。',
          'LibriTTSマルチスピーカーチェックポイント経由で5〜10秒の参照クリップからゼロショット・スタイル転送(推奨15〜30秒)。',
          '公式推論にはGPL-3.0ライセンスのespeak-ngが必要。コミュニティ製pipパッケージはこれを回避するが最終リリースは2024年1月11日。',
          '公式リポジトリは2024年3月7日以降コミットなし。アーカイブされておらず、GitHubスターは6,300以上。',
          '事前学習済みチェックポイントは主に英語。テキストアライナーは日本語・中国語コーパスでも学習されており、他の言語にもファインチューニングなしである程度汎化するとされる。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'プロジェクトのGitHub Issue(#37)では、事前学習済みモデルに対するREADMEの開示要件がMITライセンスファイル自体の外側にあることが指摘されており、混乱を招くと感じる読者もいます。導入前に、LICENSEファイルとREADMEのモデル使用セクションの両方をご自身でお読みください — 詳細は下記のライセンスと費用のセクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:コロンビア大学の研究プロジェクト',
        content: [
          '**StyleTTS 2は、コロンビア大学電気工学科の研究者ら**——Yinghao Aaron Li、Cong Han、Vinay S. Raghavan、Gavin Mischler、Nima Mesgarani——**によって開発され**、「StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models」というタイトルのNeurIPS 2023論文として発表されました。',
          '**論文の中心的な主張は、スタイル拡散(発話スタイルを単一の固定ベクトルではなく潜在的な確率分布としてモデル化)と、大規模な事前学習済み音声言語モデルに対する敵対的学習を組み合わせることで、従来の手法よりも人間らしい発話のばらつきをより正確にモデル化できるというものです。** 単一話者ベンチマークLJSpeechでは、リスナー評価においてStyleTTS 2が実際の人間の音声録音と同等かそれを上回ると報告されています。マルチスピーカーデータセットLibriTTSでは、ゼロショット話者適応において以前に公開されていたモデルを上回ると報告されています。',
          '**公開GitHubリポジトリ[yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2)は6,300以上のスターを獲得しており**、アーカイブとしてマークされていません——しかしPromptQuorumがプロジェクトの公開コミット履歴を調査したところ、リポジトリのメインブランチには2024年3月7日以降コミットが見つかりませんでした。これは商業的に維持されるオープンソース製品というよりも、大学の研究成果の公開に一致するパターンです。コード、論文、事前学習済みチェックポイントは研究に付随して公開されたものであり、継続的な機能開発やバグ修正リリースへのコミットメントはありません。',
          '**開発者Sidharth Rajaramによるコミュニティ管理のpipパッケージ`styletts2`**は、元の研究コードをインストール可能なパッケージ(`pip install styletts2`)にラップし、GPL-3.0ライセンスの音素化ツールespeak-ngをMITライセンスのgruutライブラリに置き換えることで、インストールチェーン全体を寛容なライセンスに保っています。[PyPI](https://pypi.org/project/styletts2/)上の最新リリースはバージョン0.1.6で、2024年1月11日に公開されました——このレビュー時点でも2年半以上前のものであり、元のコロンビア大学の研究コードとは別のサードパーティプロジェクトです。',
        ],
        faqs: [
          {
            q: 'StyleTTS 2を開発したのは誰ですか。',
            a: 'StyleTTS 2は、コロンビア大学電気工学科の研究者であるYinghao Aaron Li、Cong Han、Vinay S. Raghavan、Gavin Mischler、Nima Mesgaraniによって開発され、NeurIPS 2023論文として発表されました。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'StyleTTS 2が実際に行うこと',
        content: [
          'StyleTTS 2は、入力テキストからメルスペクトログラム(エンドツーエンド構成では生の波形)を生成するTTSモデルで、拡散モデルを用いて潜在的な「スタイル」ベクトルを決定的に予測するのではなくサンプリングします。この仕組みが、より自然で人間らしいプロソディを生み出すと論文では説明されています。',
        ],
        items: [
          '**自然なプロソディのためのスタイル拡散。** テキストから単一の固定スタイル埋め込みを予測する代わりに、StyleTTS 2は拡散を通じて学習されたスタイルの確率分布からサンプリングします。論文によれば、これにより決定論的アプローチよりも音程・リズム・強調の自然なばらつきが生まれます。',
          '**音声言語モデルに対する敵対的学習。** 学習プロセスでは、TTSモデルを識別器として機能する大規模な事前学習済み音声言語モデル(SLM)と対戦させます。論文はこの手法により、LJSpeechベンチマークにおける人間の録音品質との残りのギャップを埋めたとしています。',
          '**2つの公式に公開された事前学習済みチェックポイント。** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech)(単一英語話者、24kHz)と[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS)(複数英語話者)がHugging Faceでホストされています。',
          '**参照音声からのゼロショット・スタイル転送。** LibriTTSマルチスピーカーチェックポイントは、参照音声クリップから取得したスタイルで新しいテキストを合成できます。プロジェクト自身のドキュメントとサードパーティガイドは最低5〜10秒を目安とし、正確な音色・プロソディ・発音のためにクリーンな単一話者の15〜30秒の参照音声を推奨しています。',
          '**主に英語の事前学習済みチェックポイント、一部多言語対応の基礎あり。** 公式に公開されているチェックポイントは英語データセット(LJSpeech、LibriTTS)で学習されています。論文によれば、テキストアライナー・コンポーネントは日本語(JVS)・中国語(AiShell)コーパスでも事前学習されており「ファインチューニングなしでも他の多くの言語でうまく機能する」とされ、独自に非英語のStyleTTS 2モデルを学習するための出発点として14言語をカバーする多言語PL-BERTモデルが参照されています——ただし、公式にリリースされたすぐに使える非英語チェックポイントはありません。',
        ],
        note: 'StyleTTS 2は公開された事前学習済みチェックポイントを持つ研究用コードベースであり、洗練された消費者向け製品ではありません——インストールと実行には、Piperのような単一目的でpipインストール可能なツールよりも多くのセットアップが必要です。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'StyleTTS 2のインストールと実行:手順',
        content: 'この手順は、事前学習済みチェックポイントでの推論実行に関するプロジェクト自身が文書化したセットアップに従っています。',
        numberedItems: [
          {
            title: 'リポジトリをクローンし、依存関係をインストールする。',
            whyItMatters: '`git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`を実行します。これにより、プロジェクト自身のrequirementsファイルに記載されているコアPython依存関係がインストールされます。',
          },
          {
            title: 'phonemizerとespeak-ngをインストールする。',
            whyItMatters: '`pip install phonemizer`を実行し、Linuxでは`sudo apt-get install espeak-ng`(またはお使いのOSの同等コマンド)を実行します。espeak-ng自体がGPL-3.0ライセンスであることに注意してください——これがStyleTTS 2のコード自体だけでなく推論パスにとってなぜ重要かは、ライセンスと費用のセクションを参照してください。',
          },
          {
            title: '事前学習済みチェックポイントをダウンロードする。',
            whyItMatters: 'Hugging Faceから[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main)(単一話者)または[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main)(複数話者、スタイル転送対応)をプロジェクトディレクトリにダウンロードします。',
          },
          {
            title: '提供されているノートブック経由で推論を実行する。',
            whyItMatters: 'プロジェクトには`Demo/Inference_LJSpeech.ipynb`と`Demo/Inference_LibriTTS.ipynb`が同梱されています——ダウンロードしたチェックポイントに一致するものをJupyterで開き、モデルをロードして最初のサンプルを合成します。',
          },
          {
            title: '(代替案)よりシンプルなMITのみの依存関係チェーンのためにコミュニティのpipパッケージを使う。',
            whyItMatters: '`pip install styletts2`を実行し、続けて`from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("こんにちは。", output_wav_file="test.wav")`とします。このサードパーティパッケージ(最終リリース2024年1月11日)はespeak-ngの代わりにMITライセンスのgruutライブラリを使用し、GPL-3.0依存を回避しますが、同じく休眠中の非公式ラッパーに依存するというトレードオフがあります。',
          },
          {
            title: '(任意)スタイル転送のための参照クリップを提供する。',
            whyItMatters: 'LibriTTSチェックポイントでは、`target_voice_path`引数(コミュニティパッケージ)または同等の参照音声パラメータ(公式ノートブック)にクリーンな15〜30秒の単一話者WAVファイルを指定することで、その取得したスタイルで新しいテキストを合成できます。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          'これらの例は、コミュニティ製pipパッケージの簡略化されたAPIと、公式プロジェクトの推論ノートブックで使われているパターンの両方を示しています。',
        ],
        codeBlock: `# 最もシンプルな方法:コミュニティpipパッケージ(MITのみの依存関係チェーン、
# 最終リリース2024-01-11 — 依存する前に動作を確認してください)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# 参照クリップからのゼロショット・スタイル転送(LibriTTS系チェックポイント)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# カスタムチェックポイント・設定パス
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- 公式リポジトリの方法(espeak-ng、GPL-3.0が必要) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# 次に、Demo/Inference_LJSpeech.ipynb または Demo/Inference_LibriTTS.ipynb を
# Jupyterで開き、ダウンロードしたチェックポイントに対して提供されたセルを実行します。`,
        codeLanguage: 'python',
        note: 'コミュニティ製`styletts2`パッケージの正確なAPI(`tts.StyleTTS2()`、`.inference()`、`target_voice_path`)は、[PyPIページ](https://pypi.org/project/styletts2/)とREADMEに文書化されており、バージョン0.1.6(2024年1月11日)向けに最後に更新されています——スクリプト化する前に一致することを確認してください。公式リポジトリのノートブックベースの方法は[プロジェクトのREADME](https://github.com/yl4579/StyleTTS2)に直接文書化されています。',
        items: [
          '**スタイル転送には参照音声の品質が重要です。** クリーンな単一話者の15〜30秒のクリップは、短い・ノイズが多い・複数話者の参照よりも明らかに優れたスタイル転送を生成します。',
          '**2つの独立した依存関係チェーンが存在します。** 公式リポジトリのノートブック方式はGPL-3.0ライセンスのespeak-ngを引き込みます。コミュニティのpipパッケージは代わりにgruutを使ってこれを回避します——どちらか一方を中心にツールを構築する前に、ライセンス要件に合ったチェーンを選んでください。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスと費用',
        content: [
          '**StyleTTS 2のコードはMITライセンス**です。[公式リポジトリ](https://github.com/yl4579/StyleTTS2)の`LICENSE`ファイルで確認されています。MITは寛容なライセンスで、商用を含め最小限の制限でコードを使用・改変・再配布できます。',
          '**事前学習済みモデルの重みには、LICENSEファイル自体ではなくREADMEに記載された、別個のライセンス外条件が付いています。** プロジェクトのREADMEは、ユーザーに「合成したい声を使用する許可がない限り、音声サンプルがStyleTTS 2モデルによって合成されたものであることをリスナーに知らせる」よう求めています。これはドキュメントレベルの要請であり、正式なライセンス条項ではありません——[プロジェクトのGitHub Issue(#37)](https://github.com/yl4579/StyleTTS2/issues/37)は、READMEのモデル使用セクションも読まない読者にとって、リポジトリのライセンスバッジとLICENSEファイルがMIT条件のみが適用されると示唆しているため、これが潜在的に混乱を招くと明確に指摘しています。PromptQuorumは、公開のIssueスレッドでこの曖昧さを解消するメンテナーからの回答を見つけられませんでした。開示条件を著者からの実際の、文書化された要請として扱い、これに従ってください——ただしこれはコード自体への正式なMIT付与の外側にあるものであり、商用利用前に注意すべき、実際には珍しい構造であることを理解してください。',
          '**公式推論の実行にはGPL-3.0ライセンスの依存関係であるespeak-ngが必要です。** プロジェクト自身のインストール手順では`pip install phonemizer`に加えてシステムレベルの`espeak-ng`のインストールが求められており、espeak-ngはGPL-3.0ライセンスです。GPL-3.0はMITとは異なる配布義務を持つコピーレフトライセンスです。espeak-ngを変更されていない外部システム依存関係として使用することは、一般的にその変更されたソースを静的リンクまたは再配布することとは異なる扱いを受けますが、正確な境界線はデプロイ方法によります。コミュニティのpipパッケージ`styletts2`は、espeak-ngの代わりにMITライセンスのgruutライブラリを使用することでこの特定の問題を回避します——これは、完全に寛容な依存関係チェーンを望む場合の実際の実用的な違いですが、その代償として、公式リポジトリよりもさらに古い最終リリース日(2024年1月11日)を持つサードパーティパッケージに依存することになります。',
          'これらはいずれも法的助言ではありません。商用製品でStyleTTS 2を出荷する前に、LICENSEファイル、READMEのモデル使用セクションを読み、具体的な導入について弁護士に相談してください。',
        ],
        faqs: [
          {
            q: 'StyleTTS 2はどのライセンスを使用していますか。',
            a: 'StyleTTS 2のコードはMITライセンスです。事前学習済みモデルの重みには、プロジェクトのREADMEに記載された別個のライセンス外条件(話者の許可がない限り合成音声であることを開示すること)が付いており、これは正式なMITライセンス本文の一部ではありません——プロジェクトのGitHub Issueはこの区別が潜在的に混乱を招くと指摘しています。これは法的助言ではありません。商用利用前にLICENSEファイルとREADMEをご自身でお読みください。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'StyleTTS 2が向いていない用途',
        content: [
          'StyleTTS 2は本当に高い出力品質を持つ研究レベルのモデルであり、洗練された、積極的にメンテナンスされている消費者向け製品ではありません。以下の状況では不向きなツールです:',
        ],
        items: [
          '**シンプルなpipインストールで完結する体験を求める読者。** `pip install piper-tts`と単一のCLIコマンドだけで動作する音声が得られる[Piper](/ja/power-local-llm/piper-tts-review)とは異なり、公式のStyleTTS 2の方法は研究リポジトリのクローン、phonemizerのインストール、システムレベルのespeak-ng依存関係、そしてJupyterノートブックの実行を伴います——セットアップのハードルが明らかに高くなります。',
          '**MLエンジニアリングの労力を伴わない本番デプロイ。** メンテナンスされたWebサーバーモードや公式Dockerイメージはなく、継続的なサポートを提供する企業もありません。StyleTTS 2を本番環境にデプロイする人は、研究コードの周りに独自のサービング層を書き、メンテナンスすることを見込むべきです。',
          '**保証された継続的なバグ修正や機能アップデート。** 公式リポジトリは2024年3月7日以降コミットがなく、コミュニティのpipパッケージの最終リリースは2024年1月11日であるため、どちらの依存関係チェーンにも積極的なメンテナンスを想定しないでください——遭遇した問題については自力で対処する可能性を見込んでおいてください。',
          '**すぐに使える英語以外の音声。** 公式にリリースされている事前学習済みチェックポイント(LJSpeech、LibriTTS)は英語のみです。論文の多言語テキストアライナーとPL-BERTに関する記述によれば、独自に英語以外のモデルを学習することはアーキテクチャ上可能ですが、独自の学習実行が必要です——プロジェクトからダウンロード可能な英語以外のチェックポイントはありません。',
          '**ダウンロードするすべてに対する単一の明確なライセンス付与。** コード(MIT)と事前学習済みの重み(MITに加えてREADMEの開示条件)がわずかに異なる形で規定されており、公式の推論パスがGPL-3.0依存関係を引き込むため、StyleTTS 2はBark(完全にMIT、追加条件なし)のようなプロジェクトが持つ単一のシンプルなライセンスの物語を提供しません。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'StyleTTS 2の代替手段',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Piper](/ja/power-local-llm/piper-tts-review)',
            '最適な用途': 'シンプルなpipインストールで完結、最速のCPUのみ合成、Raspberry Piでのリアルタイム動作',
            'ライセンス': 'GPL-3.0-or-later',
          },
          {
            'ツール': '[XTTS v2](/ja/power-local-llm/xtts-v2-review)',
            '最適な用途': '6秒の参照音声からのパッケージ化されたボイスクローニング、17言語対応',
            'ライセンス': 'CPML(非商用)',
          },
          {
            'ツール': '[Coqui TTS](/ja/power-local-llm/coqui-tts-review)',
            '最適な用途': '幅広い言語対応と保守されているフォークを持つ柔軟なマルチバックエンドツールキット',
            'ライセンス': 'MPL-2.0',
          },
          {
            'ツール': '[Bark](/ja/power-local-llm/bark-tts-review)',
            '最適な用途': '表現力豊かな非音声オーディオ——笑い声、ため息、環境音、単一の明確なMITライセンス',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[ElevenLabs](https://elevenlabs.io)',
            '最適な用途': '商用ボイスクローニングと積極的なサポートを備えたマネージドクラウドAPI、セルフホスティング不要',
            'ライセンス': '独自(有料クラウドAPI)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'StyleTTS 2とは何ですか。',
            a: 'StyleTTS 2は、コロンビア大学の研究者によるオープンソースのテキスト読み上げモデルで、スタイル拡散と大規模音声言語モデルを用いた敵対的学習によって自然な音声を生成し、NeurIPS 2023論文として発表されました。',
          },
          {
            q: 'StyleTTS 2は商用利用が無料ですか。',
            a: 'コードはMITライセンスで、商用利用が許可されています。事前学習済みモデルの重みには、話者の許可がない限り合成音声であることを開示するよう求める、README独自のライセンス外条件が付いています。これは法的助言ではありません。商用導入前にLICENSEファイルとREADMEをご自身でお読みください。',
          },
          {
            q: 'StyleTTS 2は音声をクローンできますか。',
            a: 'LibriTTSマルチスピーカーチェックポイントは、参照音声クリップ(最低5〜10秒、推奨15〜30秒)からのゼロショット・スタイル転送をサポートしており、これは精神的にはボイスクローニングに近いものです。XTTS v2のようなシンプルなワンラインのクローニング機能としてパッケージ化されているわけではなく、使用にはノートブックベースの公式ワークフローまたはコミュニティのpipパッケージが必要です。',
          },
          {
            q: 'StyleTTS 2はまだメンテナンスされていますか。',
            a: '公式GitHubリポジトリはアーカイブとしてマークされていませんが、PromptQuorumは2024年3月7日以降のコミットを見つけられませんでした。インストールを簡素化するコミュニティのpipパッケージは、2024年1月11日に最後にリリースされました。どちらも積極的に開発されているソフトウェアではなく、休眠中の研究成果物として扱ってください。',
          },
          {
            q: 'StyleTTS 2は英語以外の言語をサポートしていますか。',
            a: '公式にリリースされている事前学習済みチェックポイント(LJSpeech、LibriTTS)は英語のみです。論文によれば、テキストアライナー・コンポーネントは日本語・中国語コーパスでも学習されており、ファインチューニングなしでも他の言語にある程度合理的に汎化するとされ、独自の英語以外のモデルを学習するための出発点として14言語をカバーする多言語PL-BERTモデルが参照されています——ただし、公式にリリースされたすぐに使える英語以外のチェックポイントはありません。',
          },
          {
            q: 'StyleTTS 2の公式インストールにespeak-ngが必要なのはなぜで、それが重要なのはなぜですか。',
            a: '公式の推論パスは、テキストを音素に変換するためのバックエンドとしてespeak-ngを使用するphonemizerライブラリを使用します。espeak-ngはGPL-3.0ライセンスであり、MITとは異なる配布義務を持つコピーレフトライセンスです。コミュニティのpipパッケージ(`styletts2`)は代わりにMITライセンスのgruutライブラリを使用することでこれを回避しますが、その代償としてさらに古い非公式リリース(最終更新2024年1月11日)に依存することになります。',
          },
          {
            q: 'StyleTTS 2はXTTS v2とどう比較されますか。',
            a: 'StyleTTS 2のコードはMITライセンスで商用利用は無料です(重みに関するREADMEの開示条件付き)。XTTS v2は非商用のCoqui Public Model Licenseの下でライセンスされています。StyleTTS 2の公式セットアップはより研究レベルで、より多くの手動作業が必要です。XTTS v2はCoqui TTSツールキットを通じて、よりシンプルでパッケージ化されたボイスクローニングAPIを提供します。ライセンス要件とセットアップの複雑さへの許容度に基づいて選択してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'StyleTTS 2は出力品質において本当に印象的であり続けています。そのスタイル拡散と敵対的学習のアプローチは、自身のNeurIPS論文において、LJSpeechベンチマークで人間の録音品質と同等かそれを上回るとされており、それも可能な限り寛容なコードライセンス(MIT)の下でです。ほとんどの読者にとって簡単に推奨できない理由は、その中核モデルを取り巻くすべてにあります。正式なMIT付与の外側にある事前学習済み重みのドキュメントレベルの開示条件、GPL-3.0依存関係を引き込む公式の推論パス、その依存関係を回避するもののそれ自体が2年半以上前のものであるコミュニティのpipパッケージ、そして2024年3月7日以降コミットがない公式リポジトリです。ローカルで入手可能な最高の自然な英語ナレーション品質を求め、研究レベルのセットアップとメンテナンスされていない依存関係チェーンに抵抗がないなら、StyleTTS 2はそれを実現します。よりシンプルなインストール、積極的なメンテナンス、またはパッケージ化されたボイスクローニングを求めるなら、このレビューを、高速なCPUのみの合成のための[Piper](/ja/power-local-llm/piper-tts-review)、パッケージ化されたボイスクローニングのための[XTTS v2](/ja/power-local-llm/xtts-v2-review)、または完全にマネージドな代替手段としての[ElevenLabs比較](/ja/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)に関するPromptQuorumの記事と組み合わせてください。このレビューは、PromptQuorumが詳しくレビューした6つのローカル音声認識・音声合成エンジンの最後のものであり、[Whisper.cpp](/ja/power-local-llm/whisper-cpp-review)、[Faster Whisper](/ja/power-local-llm/faster-whisper-review)、Piper、[Coqui TTS](/ja/power-local-llm/coqui-tts-review)、XTTS v2、[Bark](/ja/power-local-llm/bark-tts-review)と並ぶものです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のStyleTTS 2](https://github.com/yl4579/StyleTTS2) — 公式リポジトリ:README、LICENSE、インストール手順、コミット履歴。',
          '[StyleTTS 2論文(arXiv)](https://arxiv.org/abs/2306.07691) — 「Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models」、NeurIPS 2023論文。',
          '[GitHub Issue #37:Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — MIT LICENSEファイルとREADMEのモデル使用開示条件との間のコミュニティが指摘した食い違い。',
          '[PyPI上のstyletts2](https://pypi.org/project/styletts2/) — コミュニティ管理のpipパッケージ(Sidharth Rajaram)、バージョン0.1.6、2024年1月11日公開。',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech)と[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) — Hugging Face上の公式事前学習済みチェックポイント。',
          '[ローカルTTS・ボイスクローニングライセンス](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — ローカルTTSエンジン間の完全なライセンス比較。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[XTTS v2レビュー](/ja/power-local-llm/xtts-v2-review) — 6秒の参照音声からのパッケージ化されたボイスクローニング、非商用ライセンス。',
          '[Bark TTSレビュー](/ja/power-local-llm/bark-tts-review) — 表現力豊かな非音声オーディオモデル、単一の明確なMITライセンス。',
          '[Piper TTSレビュー](/ja/power-local-llm/piper-tts-review) — 高速でインストールが簡単な、CPUのみのローカルTTS代替手段。',
          '[Coqui TTSレビュー](/ja/power-local-llm/coqui-tts-review) — 柔軟なマルチバックエンドツールキットとコミュニティ管理のフォーク。',
          '[ローカルTTS・ボイスクローニングライセンス:Piper、XTTS v2、F5-TTS、Coqui](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 主要なローカルTTSエンジン全体のライセンス詳細比較。',
          '[ElevenLabs vs Piper vs XTTS v2](/ja/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — セルフホスティングすべきか判断する読者のためのクラウド対ローカル比較。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2レビュー(2026):コロンビア大学のMITライセンス研究モデルで自然な音声を生成',
      description:
        'StyleTTS 2レビュー:コロンビア大学のMITライセンス・スタイル拡散音声モデル。実際のインストールコマンド、重みのライセンスの微妙な違い、2026年時点のメンテナンス状況(2024年3月以降コミットなし)を解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/styletts-2-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルな研究レベルのテキスト読み上げモデルを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'テキスト読み上げ' },
        { '@type': 'Thing', name: 'スタイル拡散' },
        { '@type': 'Thing', name: 'コロンビア大学' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2レビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/styletts-2-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-pt.webp',
    title: 'StyleTTS 2 análise (2026): o modelo de pesquisa da Columbia com licença MIT para voz natural',
    seoTitle: 'StyleTTS 2 análise 2026: síntese de voz com licença MIT',
    intro:
      'O StyleTTS 2 é um modelo de texto para voz de código aberto lançado por pesquisadores da Universidade Columbia, distribuído no [GitHub](https://github.com/yl4579/StyleTTS2), que gera fala com som natural usando difusão de estilo e treinamento adversarial com grandes modelos de linguagem de voz. Seu código está sob **licença MIT**, mas seu README adiciona uma condição de divulgação separada, fora da licença, para os pesos do modelo pré-treinado, e o repositório público não tem commits desde 7 de março de 2024. Esta análise cobre o que o StyleTTS 2 realmente faz, comandos reais de instalação e inferência, a nuance de licenciamento entre o código MIT e os pesos condicionais, e seu status de manutenção adormecido mas não arquivado — o panorama honesto para quem o avalia em 2026.',
    metaDescription:
      'Análise do StyleTTS 2: o modelo de voz por difusão de estilo com licença MIT da Universidade Columbia. Comandos reais de instalação, a nuance de licenciamento nos pesos e seu status de manutenção (sem commits desde março de 2024) para 2026.',
    twitterDescription:
      'Análise StyleTTS 2 2026: o modelo de pesquisa da Columbia usa difusão de estilo e treinamento adversarial para narração natural, sob licença MIT com uma ressalva em nível de documentação sobre os pesos pré-treinados. Comandos reais, limites honestos e verificação do status de manutenção.',
    audience:
      'Desenvolvedores e pesquisadores avaliando um modelo local de texto para voz com licença MIT para narração de alta qualidade, que precisam entender o status de manutenção do repositório de pesquisa e a nuance de licenciamento antes de construir sobre ele.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 análise',
    targetKeywords: [
      'styletts 2 análise',
      'styletts2',
      'styletts 2 licença',
      'styletts 2 instalação',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 mantido',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**O StyleTTS 2 é um modelo de texto para voz de código aberto e nível de pesquisa da Universidade Columbia, que gera fala com som natural usando difusão de estilo e treinamento adversarial com grandes modelos de linguagem de voz.** Seu código está sob **licença MIT**, instalado com `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. Seu README adiciona uma condição separada, fora da licença, sobre os pesos do modelo pré-treinado (divulgar que a fala é sintetizada, a menos que você tenha permissão do locutor), e o repositório público do GitHub não mostra commits desde 7 de março de 2024. Para uma comparação completa de licenças entre motores TTS locais, consulte o [guia de licenças de TTS local](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) da PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o StyleTTS 2 e ele ainda é mantido?',
        answer:
          'O StyleTTS 2 vale a pena se você quer a narração em inglês mais natural disponível em um modelo local com licença MIT, produzida por difusão de estilo e treinamento adversarial, uma técnica que seu artigo do NeurIPS relata como igualando ou superando gravações humanas em benchmarks padrão. Seu checkpoint multi-locutor do LibriTTS também suporta transferência de estilo zero-shot a partir de um clipe de referência de 5 a 10 segundos (15 a 30 segundos recomendados), algo semelhante em espírito à clonagem de voz, embora não seja empacotado como um recurso de clonagem de uma linha como o XTTS v2. Seu código tem licença MIT, mas seu próprio README adiciona uma condição fora da licença sobre os pesos do modelo pré-treinado: você deve divulgar que a fala é sintetizada, a menos que tenha permissão do locutor. Seu caminho de inferência oficial requer o espeak-ng, licenciado sob GPL-3.0, para fonemização; um pacote pip mantido pela comunidade (`styletts2`, de Sidharth Rajaram) evita isso usando a biblioteca gruut, licenciada sob MIT, mas seu último lançamento foi em 11 de janeiro de 2024. O repositório oficial do GitHub não está marcado como arquivado, mas não tem commits desde 7 de março de 2024 — trate-o como um artefato de pesquisa adormecido, não como um produto em desenvolvimento ativo, antes de depender dele para algo crítico em produção.',
        bullets: [
          'Gera fala com som natural via difusão de estilo e treinamento adversarial, segundo seu artigo do NeurIPS, igualando ou superando gravações humanas em benchmarks padrão de locutor único.',
          'Licença do código: MIT. Os pesos do modelo pré-treinado carregam uma condição de divulgação adicional em nível de README, não incluída no texto da licença MIT em si.',
          'O checkpoint multi-locutor do LibriTTS suporta transferência de estilo zero-shot a partir de um clipe de referência de 5 a 10 segundos (15 a 30 segundos recomendados).',
          'O caminho de inferência oficial precisa do espeak-ng, licenciado sob GPL-3.0; um pacote pip comunitário evita isso, mas seu último lançamento é de 11 de janeiro de 2024.',
          'Nenhum commit no repositório oficial do GitHub desde 7 de março de 2024; não arquivado, mais de 6.300 estrelas.',
          'Criado por pesquisadores do Departamento de Engenharia Elétrica da Universidade Columbia; os checkpoints pré-treinados são principalmente em inglês.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'História: um projeto de pesquisa da Columbia', anchor: 'history' },
      { label: 'O que o StyleTTS 2 realmente faz', anchor: 'what-it-does' },
      { label: 'Instalar e executar o StyleTTS 2: passo a passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos de uso reais', anchor: 'usage-examples' },
      { label: 'Licença e custo', anchor: 'license-cost' },
      { label: 'Para que o StyleTTS 2 não é bom', anchor: 'limitations' },
      { label: 'Alternativas ao StyleTTS 2', anchor: 'alternatives' },
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
            text: 'O StyleTTS 2 é o modelo de texto para voz de pesquisa com licença MIT da Universidade Columbia, que produz fala com som natural via difusão de estilo e treinamento adversarial, com uma condição de divulgação em nível de documentação sobre seus pesos pré-treinados e sem commits no GitHub desde 7 de março de 2024.',
          },
          {
            type: 'plain-terms',
            text: 'É um modelo de IA gratuito e baixável que transforma texto em fala com som muito natural, criado por pesquisadores universitários em vez de uma empresa — livre para uso comercial segundo a licença do código, mas suas próprias instruções pedem para você informar aos ouvintes que a fala é sintetizada, e ninguém parece estar corrigindo erros ativamente nele mais.',
          },
        ],
        items: [
          'Fala com som natural via difusão de estilo e treinamento adversarial, igualando ou superando gravações humanas em benchmarks padrão de locutor único segundo seu artigo do NeurIPS.',
          'Licença do código: MIT. Os pesos do modelo pré-treinado carregam uma condição de divulgação separada no README, não codificada no texto da licença MIT.',
          'Transferência de estilo zero-shot a partir de um clipe de referência de 5 a 10 segundos via o checkpoint multi-locutor do LibriTTS (15 a 30 segundos recomendados).',
          'A inferência oficial precisa do espeak-ng, licenciado sob GPL-3.0; um pacote pip comunitário evita isso, mas seu último lançamento é de 11 de janeiro de 2024.',
          'Nenhum commit no repositório oficial desde 7 de março de 2024; não arquivado, mais de 6.300 estrelas no GitHub.',
          'Os checkpoints pré-treinados são principalmente em inglês; o alinhador de texto também foi treinado com corpora japonês e chinês e generaliza razoavelmente para outros idiomas sem ajuste fino.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uma issue do GitHub sobre o projeto (#37) apontou que o requisito de divulgação do README para modelos pré-treinados fica fora do próprio arquivo de licença MIT, o que alguns leitores consideram confuso. Leia o arquivo LICENSE e a seção de uso do modelo do README você mesmo antes de implantar — veja a seção Licença e custo abaixo.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: um projeto de pesquisa da Columbia',
        content: [
          '**O StyleTTS 2 foi criado por pesquisadores do Departamento de Engenharia Elétrica da Universidade Columbia** — Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler e Nima Mesgarani — e publicado como um artigo do NeurIPS 2023 intitulado "StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models".',
          '**A alegação central do artigo é que sua combinação de difusão de estilo (modelar o estilo de fala como uma distribuição de probabilidade latente em vez de um único vetor fixo) e treinamento adversarial contra grandes modelos de linguagem de voz pré-treinados permite modelar a variação de fala humana com mais precisão do que abordagens anteriores.** No benchmark de locutor único LJSpeech, o artigo relata que o StyleTTS 2 iguala ou supera gravações de fala humana real em avaliações de ouvintes; no conjunto de dados multi-locutor LibriTTS, relata superar modelos públicos disponíveis anteriormente na adaptação zero-shot ao locutor.',
          '**O repositório público do GitHub [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2) acumulou mais de 6.300 estrelas**, e não está marcado como arquivado — mas a PromptQuorum não encontrou commits na branch principal do repositório desde 7 de março de 2024, com base no histórico público de commits do projeto. Isso é consistente com um lançamento de pesquisa universitária, e não com um produto de código aberto mantido comercialmente: o código, o artigo e os checkpoints pré-treinados foram publicados para acompanhar a pesquisa, sem compromisso contínuo com desenvolvimento de recursos ou lançamentos de correção de bugs.',
          '**Um pacote pip mantido pela comunidade, `styletts2`, do desenvolvedor Sidharth Rajaram**, envolve o código de pesquisa original em um pacote instalável (`pip install styletts2`) que substitui o fonemizador espeak-ng, licenciado sob GPL-3.0, pela biblioteca gruut, licenciada sob MIT, para manter toda a cadeia de instalação sob licença permissiva. Seu lançamento mais recente no [PyPI](https://pypi.org/project/styletts2/) é a versão 0.1.6, publicada em 11 de janeiro de 2024 — também com mais de dois anos e meio no momento desta análise, e um projeto de terceiros separado do código de pesquisa original da Columbia.',
        ],
        faqs: [
          {
            q: 'Quem criou o StyleTTS 2?',
            a: 'O StyleTTS 2 foi criado por Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler e Nima Mesgarani, pesquisadores do Departamento de Engenharia Elétrica da Universidade Columbia, e publicado como um artigo do NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o StyleTTS 2 realmente faz',
        content: [
          'O StyleTTS 2 é um modelo de texto para voz que gera um espectrograma mel (e, em sua configuração ponta a ponta, uma forma de onda bruta) a partir do texto de entrada, usando um modelo de difusão para amostrar um vetor de "estilo" latente em vez de exigir que seja previsto de forma determinística — esse mecanismo é creditado pelo artigo como produtor de uma prosódia mais natural e humana.',
        ],
        items: [
          '**Difusão de estilo para prosódia natural.** Em vez de prever um único embedding de estilo fixo a partir do texto, o StyleTTS 2 amostra, via difusão, uma distribuição de probabilidade aprendida sobre estilos, o que, segundo o artigo, produz variação mais natural em tom, ritmo e ênfase do que abordagens determinísticas.',
          '**Treinamento adversarial contra modelos de linguagem de voz.** O processo de treinamento coloca o modelo TTS contra grandes modelos de linguagem de voz (SLMs) pré-treinados atuando como discriminadores, uma técnica que o artigo credita por fechar a lacuna restante em relação à qualidade de gravação humana no benchmark LJSpeech.',
          '**Dois checkpoints pré-treinados oficialmente lançados.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (locutor único em inglês, 24kHz) e [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (multi-locutor em inglês) estão ambos hospedados no Hugging Face.',
          '**Transferência de estilo zero-shot a partir de áudio de referência.** O checkpoint multi-locutor do LibriTTS pode sintetizar novo texto em um estilo capturado a partir de um clipe de áudio de referência — a documentação do próprio projeto e guias de terceiros descrevem um mínimo de 5 a 10 segundos, com 15 a 30 segundos de áudio de referência limpo, de locutor único, recomendados para timbre, prosódia e pronúncia precisos.',
          '**Checkpoints pré-treinados principalmente em inglês, com algum trabalho de base multilíngue.** Os checkpoints oficialmente lançados são treinados em conjuntos de dados em inglês (LJSpeech, LibriTTS). O artigo observa que seu componente alinhador de texto também foi pré-treinado em corpora japonês (JVS) e chinês (AiShell) e "funciona bem para a maioria dos outros idiomas sem ajuste fino", e faz referência a um modelo PL-BERT multilíngue cobrindo 14 idiomas como ponto de partida para treinar você mesmo um modelo StyleTTS 2 não inglês — mas não há um checkpoint não inglês oficialmente lançado e pronto para uso.',
        ],
        note: 'O StyleTTS 2 é uma base de código de pesquisa com checkpoints pré-treinados publicados, não um produto de consumo polido — instalá-lo e executá-lo exige mais configuração do que uma ferramenta instalável via pip e de propósito único como o Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Instalar e executar o StyleTTS 2: passo a passo',
        content: 'Este passo a passo segue a configuração documentada pelo próprio projeto para executar inferência com um checkpoint pré-treinado.',
        numberedItems: [
          {
            title: 'Clonar o repositório e instalar as dependências.',
            whyItMatters: 'Execute `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`. Isso instala as dependências principais do Python listadas no próprio arquivo de requisitos do projeto.',
          },
          {
            title: 'Instalar o fonemizador e o espeak-ng.',
            whyItMatters: 'Execute `pip install phonemizer` e, no Linux, `sudo apt-get install espeak-ng` (ou o equivalente para seu sistema operacional). Observe que o espeak-ng em si é licenciado sob GPL-3.0 — veja a seção Licença e custo para entender por que isso importa para o caminho de inferência, não apenas para o código do StyleTTS 2 em si.',
          },
          {
            title: 'Baixar um checkpoint pré-treinado.',
            whyItMatters: 'Baixe [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (locutor único) ou [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (multi-locutor, suporta transferência de estilo) do Hugging Face para o diretório do projeto.',
          },
          {
            title: 'Executar inferência via os notebooks fornecidos.',
            whyItMatters: 'O projeto vem com `Demo/Inference_LJSpeech.ipynb` e `Demo/Inference_LibriTTS.ipynb` — abra o que corresponde ao seu checkpoint baixado no Jupyter para carregar o modelo e sintetizar sua primeira amostra.',
          },
          {
            title: '(Alternativa) Usar o pacote pip comunitário para uma cadeia de instalação mais simples, somente MIT.',
            whyItMatters: 'Execute `pip install styletts2`, depois `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("Olá.", output_wav_file="test.wav")`. Este pacote de terceiros (último lançamento em 11 de janeiro de 2024) usa a biblioteca gruut, licenciada sob MIT, em vez do espeak-ng, evitando a dependência GPL-3.0 — ao custo de depender de um wrapper não oficial que também está adormecido.',
          },
          {
            title: '(Opcional) Fornecer um clipe de referência para transferência de estilo.',
            whyItMatters: 'Com o checkpoint do LibriTTS, passe um argumento `target_voice_path` (pacote comunitário) ou o parâmetro de áudio de referência equivalente (notebook oficial) apontando para um arquivo WAV limpo de locutor único de 15 a 30 segundos, para sintetizar novo texto naquele estilo capturado.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos de uso reais',
        content: [
          'Estes exemplos mostram tanto a API simplificada do pacote pip comunitário quanto o padrão usado nos notebooks de inferência do projeto oficial.',
        ],
        codeBlock: `# Caminho mais simples: pacote pip comunitário (cadeia de dependências somente MIT,
# último lançamento em 2024-01-11 — verifique se ainda funciona antes de depender dele)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# Transferência de estilo zero-shot a partir de um clipe de referência (checkpoint tipo LibriTTS)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# Caminho de checkpoint e configuração personalizados
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- Caminho do repositório oficial (requer espeak-ng, GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# Depois abra Demo/Inference_LJSpeech.ipynb ou Demo/Inference_LibriTTS.ipynb
# no Jupyter e execute as células fornecidas com seu checkpoint baixado.`,
        codeLanguage: 'python',
        note: 'A API exata do pacote comunitário `styletts2` (`tts.StyleTTS2()`, `.inference()`, `target_voice_path`) está documentada em sua própria [página do PyPI](https://pypi.org/project/styletts2/) e README, atualizada pela última vez para a versão 0.1.6 (11 de janeiro de 2024) — verifique se ainda corresponde antes de programar sobre ela. O caminho baseado em notebooks do repositório oficial está documentado diretamente no [README do projeto](https://github.com/yl4579/StyleTTS2).',
        items: [
          '**A qualidade do áudio de referência importa para a transferência de estilo.** Um clipe limpo, de locutor único, de 15 a 30 segundos produz uma transferência de estilo notavelmente melhor do que uma referência curta, ruidosa ou multi-locutor.',
          '**Existem duas cadeias de dependências separadas.** O caminho por notebook do repositório oficial traz o espeak-ng, licenciado sob GPL-3.0; o pacote pip comunitário evita isso usando o gruut — escolha a cadeia que corresponde aos seus requisitos de licenciamento antes de construir ferramentas em torno de qualquer uma delas.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e custo',
        content: [
          '**O código do StyleTTS 2 é licenciado sob a licença MIT**, confirmado pelo arquivo `LICENSE` no [repositório oficial](https://github.com/yl4579/StyleTTS2). MIT é uma licença permissiva: você pode usar, modificar e redistribuir o código, inclusive comercialmente, com restrições mínimas.',
          '**Os pesos do modelo pré-treinado carregam uma condição separada, fora da licença, declarada no README, não no arquivo LICENSE em si.** O README do projeto pede aos usuários que "informem aos ouvintes que as amostras de fala são sintetizadas pelos modelos StyleTTS 2, a menos que você tenha permissão para usar a voz que sintetiza". Isso é um pedido em nível de documentação, não uma cláusula de licença formal — uma [issue do GitHub sobre o projeto (#37)](https://github.com/yl4579/StyleTTS2/issues/37) sinalizou explicitamente isso como potencialmente confuso, já que o selo de licença e o arquivo LICENSE do repositório sugerem, a um leitor que não lê também a seção de uso do modelo do README, que apenas os termos MIT se aplicam. A PromptQuorum não encontrou resposta dos mantenedores resolvendo essa ambiguidade no tópico público da issue. Trate a condição de divulgação como um pedido real e documentado dos autores, e cumpra-a — mas entenda que ela fica fora da concessão MIT formal sobre o código em si, uma estrutura genuinamente incomum que vale a pena observar antes do uso comercial.',
          '**Executar a inferência oficial traz uma dependência licenciada sob GPL-3.0: o espeak-ng.** As próprias instruções de instalação do projeto pedem `pip install phonemizer` mais uma instalação em nível de sistema do `espeak-ng`, e o espeak-ng é licenciado sob GPL-3.0. GPL-3.0 é uma licença copyleft com obrigações de distribuição distintas da MIT; usar o espeak-ng como uma dependência de sistema externa não modificada geralmente é tratado de forma diferente de vincular estaticamente ou redistribuir seu código-fonte modificado, mas o limite exato depende da sua implantação. O pacote pip comunitário `styletts2` contorna esse problema específico usando a biblioteca gruut, licenciada sob MIT, em vez do espeak-ng — uma diferença prática real se você quiser uma cadeia de dependências totalmente permissiva, ao custo de depender de um pacote de terceiros com uma data de último lançamento (11 de janeiro de 2024) ainda mais antiga do que a do repositório oficial.',
          'Nada disso é aconselhamento jurídico. Leia o arquivo LICENSE, a seção de uso do modelo do README, e consulte um advogado para sua implantação específica antes de lançar o StyleTTS 2 em um produto comercial.',
        ],
        faqs: [
          {
            q: 'Qual licença o StyleTTS 2 usa?',
            a: 'O código do StyleTTS 2 é licenciado sob MIT. Seus pesos de modelo pré-treinado carregam uma condição separada, fora da licença, declarada no README do projeto (divulgar fala sintetizada, a menos que você tenha permissão do locutor), que não faz parte do texto formal da licença MIT — uma distinção que uma issue do GitHub sobre o projeto sinalizou como potencialmente confusa. Isso não é aconselhamento jurídico; leia o arquivo LICENSE e o README você mesmo antes do uso comercial.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o StyleTTS 2 não é bom',
        content: [
          'O StyleTTS 2 é um modelo de nível de pesquisa com qualidade de saída genuinamente forte, não um produto de consumo polido e ativamente mantido. É a ferramenta errada para as seguintes situações:',
        ],
        items: [
          '**Leitores que querem uma experiência simples de instalar com pip e pronto.** Ao contrário do [Piper](/pt/power-local-llm/piper-tts-review), que está a `pip install piper-tts` e um único comando CLI de distância de ter áudio funcionando, o caminho oficial do StyleTTS 2 envolve clonar um repositório de pesquisa, instalar um fonemizador, uma dependência de sistema do espeak-ng e executar notebooks Jupyter — uma barreira de configuração notavelmente mais alta.',
          '**Implantação em produção sem esforço de engenharia de ML.** Não há um modo de servidor web mantido, nenhuma imagem Docker oficial, e nenhuma empresa apoiando suporte contínuo. Qualquer um que implante o StyleTTS 2 em produção deve esperar escrever e manter sua própria camada de serviço em torno do código de pesquisa.',
          '**Correções de bugs ou atualizações de recursos contínuas garantidas.** Sem commits no repositório oficial desde 7 de março de 2024, e com o último lançamento do pacote pip comunitário datado de 11 de janeiro de 2024, não assuma manutenção ativa para nenhuma das duas cadeias de dependências — planeje-se para a possibilidade de estar por conta própria em qualquer problema que encontrar.',
          '**Fala pronta para uso em outro idioma que não o inglês.** Os checkpoints pré-treinados oficialmente lançados são apenas em inglês (LJSpeech, LibriTTS). Treinar você mesmo um modelo não inglês é arquiteturalmente possível segundo as notas do artigo sobre seu alinhador de texto multilíngue e o PL-BERT, mas exige seu próprio treinamento — não há checkpoint não inglês baixável do projeto.',
          '**Uma única concessão de licença inequívoca para tudo o que você baixa.** Como o código (MIT) e os pesos pré-treinados (MIT mais uma condição de divulgação no README) são regidos de forma ligeiramente diferente, e o caminho de inferência oficial traz uma dependência GPL-3.0, o StyleTTS 2 não oferece a história de licença única e simples que um projeto como o Bark (totalmente MIT, sem condições extras) tem.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao StyleTTS 2',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor para', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Piper](/pt/power-local-llm/piper-tts-review)',
            'Melhor para': 'Configuração simples pip-install-e-pronto, síntese CPU mais rápida, tempo real em Raspberry Pi',
            'Licença': 'GPL-3.0-or-later',
          },
          {
            'Ferramenta': '[XTTS v2](/pt/power-local-llm/xtts-v2-review)',
            'Melhor para': 'Clonagem de voz empacotada a partir de 6 segundos de áudio de referência, 17 idiomas',
            'Licença': 'CPML (não comercial)',
          },
          {
            'Ferramenta': '[Coqui TTS](/pt/power-local-llm/coqui-tts-review)',
            'Melhor para': 'Kit multi-backend flexível com amplo suporte de idiomas e fork mantido',
            'Licença': 'MPL-2.0',
          },
          {
            'Ferramenta': '[Bark](/pt/power-local-llm/bark-tts-review)',
            'Melhor para': 'Áudio expressivo não vocal — risadas, suspiros, som ambiente, licença MIT única e inequívoca',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[ElevenLabs](https://elevenlabs.io)',
            'Melhor para': 'API em nuvem gerenciada com clonagem de voz comercial e suporte ativo, sem esforço de auto-hospedagem',
            'Licença': 'Proprietária (API em nuvem paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o StyleTTS 2?',
            a: 'O StyleTTS 2 é um modelo de texto para voz de código aberto de pesquisadores da Universidade Columbia, que gera fala com som natural via difusão de estilo e treinamento adversarial com grandes modelos de linguagem de voz, publicado como um artigo do NeurIPS 2023.',
          },
          {
            q: 'O StyleTTS 2 é gratuito para uso comercial?',
            a: 'Seu código é licenciado sob MIT, que permite uso comercial. Seus pesos de modelo pré-treinado carregam uma condição separada, fora da licença, no README, pedindo para divulgar a fala sintetizada, a menos que você tenha permissão do locutor. Isso não é aconselhamento jurídico; leia o arquivo LICENSE e o README você mesmo antes de uma implantação comercial.',
          },
          {
            q: 'O StyleTTS 2 pode clonar uma voz?',
            a: 'Seu checkpoint multi-locutor do LibriTTS suporta transferência de estilo zero-shot a partir de um clipe de áudio de referência (5 a 10 segundos no mínimo, 15 a 30 segundos recomendados), o que se assemelha à clonagem de voz em espírito. Não é empacotado como um recurso de clonagem simples de uma linha como o XTTS v2 — usá-lo requer o fluxo de trabalho oficial baseado em notebook ou o pacote pip comunitário.',
          },
          {
            q: 'O StyleTTS 2 ainda é mantido?',
            a: 'O repositório oficial do GitHub não está marcado como arquivado, mas a PromptQuorum não encontrou commits desde 7 de março de 2024. O pacote pip comunitário que simplifica a instalação foi lançado pela última vez em 11 de janeiro de 2024. Trate ambos como artefatos de pesquisa adormecidos, e não como software em desenvolvimento ativo.',
          },
          {
            q: 'O StyleTTS 2 suporta idiomas além do inglês?',
            a: 'Os checkpoints pré-treinados oficialmente lançados (LJSpeech, LibriTTS) são apenas em inglês. O artigo observa que seu componente alinhador de texto também foi treinado com corpora japonês e chinês e generaliza razoavelmente para outros idiomas sem ajuste fino, e faz referência a um modelo PL-BERT multilíngue de 14 idiomas como ponto de partida para treinar seu próprio modelo não inglês — mas não há checkpoint não inglês pronto para uso oficialmente lançado.',
          },
          {
            q: 'Por que a instalação oficial do StyleTTS 2 precisa do espeak-ng, e por que isso importa?',
            a: 'O caminho de inferência oficial usa a biblioteca phonemizer com o espeak-ng como backend para converter texto em fonemas. O espeak-ng é licenciado sob GPL-3.0, uma licença copyleft com obrigações de distribuição diferentes da MIT. Um pacote pip comunitário (`styletts2`) evita isso usando a biblioteca gruut, licenciada sob MIT, em vez disso, ao custo de depender de um lançamento não oficial ainda mais antigo (última atualização em 11 de janeiro de 2024).',
          },
          {
            q: 'Como o StyleTTS 2 se compara ao XTTS v2?',
            a: 'O código do StyleTTS 2 é licenciado sob MIT e livre para uso comercial (com a condição de divulgação do README sobre os pesos); o XTTS v2 é licenciado sob a Coqui Public Model License, não comercial. A configuração oficial do StyleTTS 2 é mais de nível de pesquisa e exige mais trabalho manual; o XTTS v2 oferece uma API de clonagem de voz mais simples e empacotada através do kit Coqui TTS. Escolha com base em suas necessidades de licenciamento e tolerância à complexidade de configuração.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O StyleTTS 2 continua genuinamente impressionante em qualidade de saída: sua abordagem de difusão de estilo e treinamento adversarial é creditada em seu próprio artigo do NeurIPS por igualar ou superar a qualidade de gravação humana no benchmark LJSpeech, sob uma licença de código (MIT) tão permissiva quanto possível. O que o impede de ser uma recomendação fácil para a maioria dos leitores é tudo o que envolve esse modelo central: uma condição de divulgação em nível de documentação sobre os pesos pré-treinados que fica fora da concessão MIT formal, um caminho de inferência oficial que traz uma dependência GPL-3.0, um pacote pip comunitário que evita essa dependência mas que em si tem mais de dois anos e meio de idade, e nenhum commit no repositório oficial desde 7 de março de 2024. Se você quer a melhor qualidade de narração em inglês natural disponível localmente e está confortável com uma configuração de nível de pesquisa e uma cadeia de dependências não mantida, o StyleTTS 2 entrega. Se você quer uma instalação mais simples, manutenção ativa, ou clonagem de voz empacotada, combine esta análise com a cobertura da PromptQuorum sobre o [Piper](/pt/power-local-llm/piper-tts-review) para síntese CPU rápida, o [XTTS v2](/pt/power-local-llm/xtts-v2-review) para clonagem de voz empacotada, ou a [comparação com o ElevenLabs](/pt/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) para uma alternativa totalmente gerenciada. Esta análise é a última de seis motores locais de reconhecimento e síntese de fala que a PromptQuorum analisou em profundidade, ao lado do [Whisper.cpp](/pt/power-local-llm/whisper-cpp-review), [Faster Whisper](/pt/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/pt/power-local-llm/coqui-tts-review), XTTS v2 e [Bark](/pt/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[StyleTTS 2 no GitHub](https://github.com/yl4579/StyleTTS2) — o repositório oficial: README, LICENSE, instruções de instalação e histórico de commits.',
          '[Artigo do StyleTTS 2 (arXiv)](https://arxiv.org/abs/2306.07691) — "Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models", o artigo do NeurIPS 2023.',
          '[Issue do GitHub #37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — a discrepância sinalizada pela comunidade entre o arquivo LICENSE MIT e a condição de divulgação de uso do modelo no README.',
          '[styletts2 no PyPI](https://pypi.org/project/styletts2/) — o pacote pip mantido pela comunidade (Sidharth Rajaram), versão 0.1.6, publicada em 11 de janeiro de 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) e [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) no Hugging Face — os checkpoints pré-treinados oficiais.',
          '[Licenças de TTS local e clonagem de voz](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparação completa de licenças entre motores TTS locais.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do XTTS v2](/pt/power-local-llm/xtts-v2-review) — clonagem de voz empacotada a partir de 6 segundos de áudio de referência, sob licença não comercial.',
          '[Análise do Bark TTS](/pt/power-local-llm/bark-tts-review) — o modelo de áudio expressivo não vocal com uma licença MIT única e inequívoca.',
          '[Análise do Piper TTS](/pt/power-local-llm/piper-tts-review) — a alternativa TTS local rápida, de instalação simples, apenas CPU.',
          '[Análise do Coqui TTS](/pt/power-local-llm/coqui-tts-review) — o kit flexível multi-backend e seu fork mantido pela comunidade.',
          '[Licenças de TTS local e clonagem de voz: Piper, XTTS v2, F5-TTS e Coqui](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — a análise profunda de licenças entre os principais motores TTS locais.',
          '[ElevenLabs vs Piper vs XTTS v2](/pt/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — a comparação nuvem vs local para leitores decidindo se devem se auto-hospedar.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 análise (2026): o modelo de pesquisa da Columbia com licença MIT para voz natural',
      description:
        'Análise do StyleTTS 2: o modelo de voz por difusão de estilo com licença MIT da Universidade Columbia. Comandos reais de instalação, a nuance de licenciamento nos pesos e seu status de manutenção (sem commits desde março de 2024) para 2026.',
      url: 'https://promptquorum.com/pt/power-local-llm/styletts-2-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando modelos locais de texto para voz de nível de pesquisa' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/styletts-2-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-ar.webp',
    title: 'مراجعة StyleTTS 2 (2026): نموذج بحثي من جامعة كولومبيا برخصة MIT لصوت طبيعي',
    seoTitle: 'مراجعة StyleTTS 2‏ 2026: تركيب صوت برخصة MIT',
    intro:
      'StyleTTS 2 هو نموذج مفتوح المصدر لتحويل النص إلى كلام، أصدره باحثون في جامعة كولومبيا ونشروه على [GitHub](https://github.com/yl4579/StyleTTS2)، يُولّد كلامًا يبدو طبيعيًا باستخدام انتشار الأسلوب (style diffusion) والتدريب التنافسي (adversarial training) مع نماذج لغوية صوتية كبيرة. الكود مرخّص بموجب **رخصة MIT**، لكن ملف README يضيف شرط إفصاح منفصلًا خارج نطاق الرخصة نفسها يخص أوزان النموذج المُدرَّب مسبقًا، والمستودع العام لم يشهد أي التزام (commit) منذ 7 مارس 2024. تتناول هذه المراجعة ما يفعله StyleTTS 2 فعليًا، وأوامر تثبيت واستدلال حقيقية، والفارق الدقيق في الترخيص بين كود MIT والأوزان المشروطة، وحالة صيانته الخاملة لكن غير المؤرشفة — الصورة الصادقة لمن يقيّمه في 2026.',
    metaDescription:
      'مراجعة StyleTTS 2: نموذج الصوت بانتشار الأسلوب من جامعة كولومبيا برخصة MIT. أوامر تثبيت حقيقية، الفارق الدقيق في ترخيص الأوزان، وحالة الصيانة (لا التزامات منذ مارس 2024) لعام 2026.',
    twitterDescription:
      'مراجعة StyleTTS 2‏ 2026: نموذج البحث من كولومبيا يستخدم انتشار الأسلوب والتدريب التنافسي لسرد صوتي طبيعي، برخصة MIT مع تحفظ على مستوى التوثيق بشأن الأوزان المُدرَّبة مسبقًا. أوامر حقيقية، وحدود صادقة، وفحص لحالة الصيانة.',
    audience:
      'المطورون والباحثون الذين يقيّمون نموذجًا محليًا لتحويل النص إلى كلام برخصة MIT لسرد صوتي عالي الجودة، ويحتاجون لفهم حالة صيانة المستودع البحثي والفارق الدقيق في الترخيص قبل البناء عليه.',
    readTime: '12 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة StyleTTS 2',
    targetKeywords: [
      'styletts 2 مراجعة',
      'styletts2',
      'styletts 2 رخصة',
      'styletts 2 تثبيت',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 صيانة',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2 هو نموذج مفتوح المصدر على مستوى بحثي لتحويل النص إلى كلام من جامعة كولومبيا، يُولّد كلامًا يبدو طبيعيًا باستخدام انتشار الأسلوب والتدريب التنافسي مع نماذج لغوية صوتية كبيرة.** الكود مرخّص بموجب **رخصة MIT**، ويُثبَّت باستخدام `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`. يضيف ملف README شرطًا منفصلًا خارج نطاق الرخصة يخص أوزان النموذج المُدرَّب مسبقًا (الإفصاح عن أن الكلام مُصنَّع ما لم يكن لديك إذن من المتحدث)، ومستودع GitHub العام لا يُظهر أي التزامات منذ 7 مارس 2024. للاطلاع على مقارنة كاملة للتراخيص بين محركات TTS المحلية، راجع [دليل تراخيص TTS المحلية](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو StyleTTS 2 وهل ما زال يخضع للصيانة؟',
        answer:
          'يستحق StyleTTS 2 الاستخدام إذا كنت تريد أعلى جودة سرد صوتي إنجليزي طبيعي متاحة من نموذج محلي برخصة MIT، تُنتَج عبر انتشار الأسلوب والتدريب التنافسي، وهي تقنية تُفيد ورقتها البحثية في NeurIPS بأنها تعادل أو تتفوق على التسجيلات البشرية في معايير قياسية. يدعم أيضًا نقطة التحقق متعددة المتحدثين من LibriTTS نقل الأسلوب بدون أمثلة سابقة (zero-shot) من مقطع مرجعي مدته 5 إلى 10 ثوانٍ (يُنصح بـ15 إلى 30 ثانية)، وهو أمر يشبه استنساخ الصوت من حيث الروح، رغم أنه غير مُغلَّف كميزة استنساخ بسطر واحد مثل XTTS v2. الكود مرخّص بموجب MIT، لكن ملف README الخاص به يضيف شرطًا خارج نطاق الرخصة يخص أوزان النموذج المُدرَّب مسبقًا: يجب عليك الإفصاح عن أن الكلام مُصنَّع ما لم يكن لديك إذن من المتحدث. يتطلب مسار الاستدلال الرسمي مكتبة espeak-ng المرخّصة بموجب GPL-3.0 لتحويل النص إلى وحدات صوتية؛ وتتجنب حزمة pip يديرها المجتمع (`styletts2` من Sidharth Rajaram) ذلك باستخدام مكتبة gruut المرخّصة بموجب MIT بدلًا منها، لكن أحدث إصدار لها كان في 11 يناير 2024. مستودع GitHub الرسمي غير مُصنَّف كمؤرشف، لكنه لم يشهد أي التزامات منذ 7 مارس 2024 — تعامل معه كأثر بحثي خامل وليس منتجًا قيد التطوير النشط، قبل الاعتماد عليه في أي شيء حرج في بيئة الإنتاج.',
        bullets: [
          'يُولّد كلامًا يبدو طبيعيًا عبر انتشار الأسلوب والتدريب التنافسي، وفقًا لورقته البحثية في NeurIPS، معادلًا أو متفوقًا على التسجيلات البشرية في معايير قياسية لمتحدث واحد.',
          'رخصة الكود: MIT. تحمل أوزان النموذج المُدرَّب مسبقًا شرط إفصاح إضافيًا على مستوى README، غير مُدرَج في نص رخصة MIT نفسها.',
          'تدعم نقطة التحقق متعددة المتحدثين من LibriTTS نقل الأسلوب بدون أمثلة سابقة من مقطع مرجعي مدته 5 إلى 10 ثوانٍ (يُنصح بـ15 إلى 30 ثانية).',
          'يحتاج مسار الاستدلال الرسمي إلى espeak-ng المرخّصة بموجب GPL-3.0؛ تتجنب حزمة pip من المجتمع ذلك لكن أحدث إصدار لها في 11 يناير 2024.',
          'لا توجد التزامات في مستودع GitHub الرسمي منذ 7 مارس 2024؛ غير مؤرشف، وله أكثر من 6,300 نجمة.',
          'أنشأه باحثون في قسم الهندسة الكهربائية بجامعة كولومبيا؛ نقاط التحقق المُدرَّبة مسبقًا هي بالإنجليزية بشكل أساسي.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: مشروع بحثي من كولومبيا', anchor: 'history' },
      { label: 'ما الذي يفعله StyleTTS 2 فعليًا', anchor: 'what-it-does' },
      { label: 'تثبيت وتشغيل StyleTTS 2: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الترخيص والتكلفة', anchor: 'license-cost' },
      { label: 'ما لا يصلح له StyleTTS 2', anchor: 'limitations' },
      { label: 'بدائل StyleTTS 2', anchor: 'alternatives' },
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
            text: 'StyleTTS 2 هو نموذج بحثي من جامعة كولومبيا برخصة MIT لتحويل النص إلى كلام، يُنتج كلامًا يبدو طبيعيًا عبر انتشار الأسلوب والتدريب التنافسي، مع شرط إفصاح على مستوى التوثيق يخص أوزانه المُدرَّبة مسبقًا، ودون أي التزامات على GitHub منذ 7 مارس 2024.',
          },
          {
            type: 'plain-terms',
            text: 'إنه نموذج ذكاء اصطناعي مجاني وقابل للتنزيل يحوّل النص إلى كلام يبدو طبيعيًا جدًا، أنشأه باحثون جامعيون وليس شركة — استخدامه التجاري مجاني بحسب رخصة الكود، لكن تعليماته الخاصة تطلب منك إخبار المستمعين بأن الكلام مُصنَّع، ولا يبدو أن أحدًا يُصلح الأخطاء فيه بنشاط بعد الآن.',
          },
        ],
        items: [
          'يُولّد كلامًا يبدو طبيعيًا عبر انتشار الأسلوب والتدريب التنافسي، معادلًا أو متفوقًا على التسجيلات البشرية في معايير قياسية لمتحدث واحد وفقًا لورقته البحثية في NeurIPS.',
          'رخصة الكود: MIT. تحمل أوزان النموذج المُدرَّب مسبقًا شرط إفصاح منفصلًا في README، وغير مُدوَّن في نص رخصة MIT.',
          'نقل أسلوب بدون أمثلة سابقة من مقطع مرجعي مدته 5 إلى 10 ثوانٍ عبر نقطة التحقق متعددة المتحدثين من LibriTTS (يُنصح بـ15 إلى 30 ثانية).',
          'يحتاج الاستدلال الرسمي إلى espeak-ng المرخّصة بموجب GPL-3.0؛ تتجنب حزمة pip من المجتمع ذلك لكن أحدث إصدار لها في 11 يناير 2024.',
          'لا توجد التزامات في المستودع الرسمي منذ 7 مارس 2024؛ غير مؤرشف، وله أكثر من 6,300 نجمة على GitHub.',
          'نقاط التحقق المُدرَّبة مسبقًا هي بالإنجليزية بشكل أساسي؛ كما جرى تدريب محاذي النص على مجموعات بيانات يابانية وصينية ويُقال إنه يعمم بشكل معقول على لغات أخرى دون ضبط دقيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'أشارت مشكلة (issue) على GitHub تخص المشروع (#37) إلى أن متطلب الإفصاح في README الخاص بالنماذج المُدرَّبة مسبقًا يقع خارج ملف رخصة MIT نفسه، وهو ما يجده بعض القراء مربكًا. اقرأ ملف LICENSE وقسم استخدام النموذج في README بنفسك قبل النشر — راجع قسم الترخيص والتكلفة أدناه.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: مشروع بحثي من كولومبيا',
        content: [
          '**أنشأ StyleTTS 2 باحثون في قسم الهندسة الكهربائية بجامعة كولومبيا** — Yinghao Aaron Li وCong Han وVinay S. Raghavan وGavin Mischler وNima Mesgarani — ونُشر كورقة بحثية في مؤتمر NeurIPS 2023 بعنوان "StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models".',
          '**الادعاء المركزي للورقة البحثية هو أن الجمع بين انتشار الأسلوب (نمذجة أسلوب الكلام كتوزيع احتمالي كامن بدلًا من متجه ثابت واحد) والتدريب التنافسي ضد نماذج لغوية صوتية كبيرة مُدرَّبة مسبقًا يتيح نمذجة التباين في الكلام البشري بدقة أكبر من الأساليب السابقة.** في معيار LJSpeech لمتحدث واحد، تفيد الورقة بأن StyleTTS 2 يعادل أو يتفوق على تسجيلات كلام بشري حقيقي في تقييمات المستمعين؛ وفي مجموعة بيانات LibriTTS متعددة المتحدثين، تفيد بأنه يتفوق على النماذج العامة المتاحة سابقًا في التكيف مع المتحدث بدون أمثلة سابقة.',
          '**جمع مستودع GitHub العام [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2) أكثر من 6,300 نجمة**، وهو غير مُصنَّف كمؤرشف — لكن PromptQuorum لم تجد أي التزامات في الفرع الرئيسي للمستودع منذ 7 مارس 2024، استنادًا إلى سجل الالتزامات العام للمشروع. يتوافق هذا مع إصدار بحثي جامعي أكثر من كونه منتجًا مفتوح المصدر يخضع لصيانة تجارية: نُشرت الشيفرة والورقة البحثية ونقاط التحقق المُدرَّبة مسبقًا مصاحبةً للبحث، دون التزام مستمر بتطوير الميزات أو إصدارات إصلاح الأخطاء.',
          '**تُغلِّف حزمة pip يديرها المجتمع، `styletts2` من المطور Sidharth Rajaram**، الشيفرة البحثية الأصلية في حزمة قابلة للتثبيت (`pip install styletts2`) تستبدل مُحوِّل الأصوات espeak-ng المرخّص بموجب GPL-3.0 بمكتبة gruut المرخّصة بموجب MIT، للحفاظ على سلسلة التثبيت بأكملها تحت ترخيص متساهل. أحدث إصدار لها على [PyPI](https://pypi.org/project/styletts2/) هو الإصدار 0.1.6، الصادر في 11 يناير 2024 — وهو أيضًا أقدم من عامين ونصف عند كتابة هذه المراجعة، ومشروع طرف ثالث منفصل عن الشيفرة البحثية الأصلية من كولومبيا.',
        ],
        faqs: [
          {
            q: 'من أنشأ StyleTTS 2؟',
            a: 'أنشأ StyleTTS 2 كل من Yinghao Aaron Li وCong Han وVinay S. Raghavan وGavin Mischler وNima Mesgarani، وهم باحثون في قسم الهندسة الكهربائية بجامعة كولومبيا، ونُشر كورقة بحثية في مؤتمر NeurIPS 2023.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله StyleTTS 2 فعليًا',
        content: [
          'StyleTTS 2 هو نموذج لتحويل النص إلى كلام يُولّد مخططًا طيفيًا من نوع Mel (وفي إعداده من طرف إلى طرف، شكل موجة خام) من نص الإدخال، باستخدام نموذج انتشار لأخذ عينة من متجه "أسلوب" كامن بدلًا من التنبؤ به بشكل حتمي — تُنسب هذه الآلية في الورقة البحثية إلى إنتاج تنغيم (بروسودي) أكثر طبيعية وشبهًا بالبشر.',
        ],
        items: [
          '**انتشار الأسلوب لتنغيم طبيعي.** بدلًا من التنبؤ بتمثيل أسلوب ثابت واحد من النص، يأخذ StyleTTS 2 عينة، عبر الانتشار، من توزيع احتمالي مُتعلَّم للأساليب، وهو ما يُنتج، وفقًا للورقة البحثية، تباينًا أكثر طبيعية في النبرة والإيقاع والتشديد مقارنة بالأساليب الحتمية.',
          '**التدريب التنافسي ضد نماذج لغوية صوتية.** تضع عملية التدريب نموذج TTS في مواجهة نماذج لغوية صوتية كبيرة مُدرَّبة مسبقًا تعمل كمُميِّزات، وهي تقنية تُنسب إليها الورقة البحثية سد الفجوة المتبقية مع جودة التسجيل البشري في معيار LJSpeech.',
          '**نقطتا تحقق مُدرَّبتان مسبقًا صادرتان رسميًا.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) (متحدث إنجليزي واحد، 24 كيلوهرتز) و[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) (متعدد المتحدثين بالإنجليزية) كلاهما مُستضاف على Hugging Face.',
          '**نقل أسلوب بدون أمثلة سابقة من صوت مرجعي.** يمكن لنقطة التحقق متعددة المتحدثين من LibriTTS تركيب نص جديد بأسلوب مُلتقَط من مقطع صوتي مرجعي — يصف توثيق المشروع نفسه وأدلة طرف ثالث حدًا أدنى من 5 إلى 10 ثوانٍ، مع التوصية بـ15 إلى 30 ثانية من صوت مرجعي نظيف لمتحدث واحد للحصول على جرس صوت وتنغيم ونطق دقيق.',
          '**نقاط تحقق مُدرَّبة مسبقًا بالإنجليزية بشكل أساسي، مع بعض العمل التأسيسي متعدد اللغات.** تُدرَّب نقاط التحقق الصادرة رسميًا على مجموعات بيانات إنجليزية (LJSpeech وLibriTTS). تُشير الورقة البحثية إلى أن مكوّن محاذاة النص دُرِّب مسبقًا أيضًا على مجموعات بيانات يابانية (JVS) وصينية (AiShell) و"يعمل بشكل جيد لمعظم اللغات الأخرى دون ضبط دقيق"، وتشير إلى نموذج PL-BERT متعدد اللغات يغطي 14 لغة كنقطة انطلاق لتدريب نموذج StyleTTS 2 غير إنجليزي بنفسك — لكن لا توجد نقطة تحقق غير إنجليزية صادرة رسميًا وجاهزة للاستخدام.',
        ],
        note: 'StyleTTS 2 هو قاعدة شيفرة بحثية مع نقاط تحقق مُدرَّبة مسبقًا منشورة، وليس منتجًا استهلاكيًا مُصقَّلًا — يتطلب تثبيته وتشغيله إعدادًا أكبر من أداة أحادية الغرض قابلة للتثبيت عبر pip مثل Piper.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تثبيت وتشغيل StyleTTS 2: خطوة بخطوة',
        content: 'يتبع هذا الدليل الإعداد الموثَّق من المشروع نفسه لتشغيل الاستدلال باستخدام نقطة تحقق مُدرَّبة مسبقًا.',
        numberedItems: [
          {
            title: 'استنساخ المستودع وتثبيت التبعيات.',
            whyItMatters: 'نفّذ `git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`. يؤدي هذا إلى تثبيت تبعيات Python الأساسية المُدرجة في ملف المتطلبات الخاص بالمشروع.',
          },
          {
            title: 'تثبيت مُحوِّل الأصوات وespeak-ng.',
            whyItMatters: 'نفّذ `pip install phonemizer`، وعلى Linux `sudo apt-get install espeak-ng` (أو ما يعادله لنظام تشغيلك). لاحظ أن espeak-ng نفسها مرخّصة بموجب GPL-3.0 — راجع قسم الترخيص والتكلفة لمعرفة سبب أهمية ذلك لمسار الاستدلال، وليس فقط لشيفرة StyleTTS 2 نفسها.',
          },
          {
            title: 'تنزيل نقطة تحقق مُدرَّبة مسبقًا.',
            whyItMatters: 'نزِّل [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main) (متحدث واحد) أو [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main) (متعدد المتحدثين، يدعم نقل الأسلوب) من Hugging Face إلى مجلد المشروع.',
          },
          {
            title: 'تشغيل الاستدلال عبر دفاتر Jupyter المُوفَّرة.',
            whyItMatters: 'يأتي المشروع مع `Demo/Inference_LJSpeech.ipynb` و`Demo/Inference_LibriTTS.ipynb` — افتح الدفتر المطابق لنقطة التحقق التي نزّلتها في Jupyter لتحميل النموذج وتركيب أول عيّنة لك.',
          },
          {
            title: '(بديل) استخدام حزمة pip المجتمعية لسلسلة تثبيت أبسط ومقتصرة على MIT.',
            whyItMatters: 'نفّذ `pip install styletts2`، ثم `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("مرحبًا.", output_wav_file="test.wav")`. تستخدم هذه الحزمة من طرف ثالث (آخر إصدار في 11 يناير 2024) مكتبة gruut المرخّصة بموجب MIT بدلًا من espeak-ng، متجنبةً تبعية GPL-3.0 — على حساب الاعتماد على غلاف غير رسمي خامل هو الآخر.',
          },
          {
            title: '(اختياري) توفير مقطع مرجعي لنقل الأسلوب.',
            whyItMatters: 'مع نقطة تحقق LibriTTS، مرّر وسيطًا `target_voice_path` (الحزمة المجتمعية) أو المعامل المكافئ للصوت المرجعي (الدفتر الرسمي) يشير إلى ملف WAV نظيف لمتحدث واحد مدته 15 إلى 30 ثانية، لتركيب نص جديد بذلك الأسلوب المُلتقَط.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'توضح هذه الأمثلة كلًا من واجهة برمجة التطبيقات المُبسَّطة لحزمة pip المجتمعية والنمط المستخدم في دفاتر الاستدلال الخاصة بالمشروع الرسمي.',
        ],
        codeBlock: `# المسار الأبسط: حزمة pip مجتمعية (سلسلة تبعيات مقتصرة على MIT،
# آخر إصدار 2024-01-11 — تحقق من أنها لا تزال تعمل قبل الاعتماد عليها)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# نقل أسلوب بدون أمثلة سابقة من مقطع مرجعي (نقطة تحقق من نوع LibriTTS)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# مسار نقطة تحقق وإعدادات مخصص
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- مسار المستودع الرسمي (يتطلب espeak-ng، GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# ثم افتح Demo/Inference_LJSpeech.ipynb أو Demo/Inference_LibriTTS.ipynb
# في Jupyter وشغّل الخلايا المُوفَّرة مع نقطة التحقق التي نزّلتها.`,
        codeLanguage: 'python',
        note: 'واجهة برمجة التطبيقات الدقيقة لحزمة `styletts2` المجتمعية (`tts.StyleTTS2()`، `.inference()`، `target_voice_path`) موثَّقة في [صفحتها على PyPI](https://pypi.org/project/styletts2/) وملف README الخاص بها، آخر تحديث لها للإصدار 0.1.6 (11 يناير 2024) — تحقق من أنها لا تزال مطابقة قبل الاعتماد عليها في سكربتاتك. مسار الدفاتر الخاص بالمستودع الرسمي موثَّق مباشرة في [README المشروع](https://github.com/yl4579/StyleTTS2).',
        items: [
          '**جودة الصوت المرجعي مهمة لنقل الأسلوب.** ينتج مقطع نظيف لمتحدث واحد مدته 15 إلى 30 ثانية نقل أسلوب أفضل بشكل ملحوظ من مرجع قصير أو صاخب أو متعدد المتحدثين.',
          '**توجد سلسلتا تبعيات منفصلتان.** يجلب مسار الدفاتر الخاص بالمستودع الرسمي espeak-ng المرخّصة بموجب GPL-3.0؛ وتتجنب حزمة pip المجتمعية ذلك باستخدام gruut بدلًا منها — اختر السلسلة التي تناسب متطلبات الترخيص لديك قبل بناء أدوات حول أي منهما.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الترخيص والتكلفة',
        content: [
          '**شيفرة StyleTTS 2 مرخّصة بموجب رخصة MIT**، وهو ما تأكد من خلال ملف `LICENSE` في [المستودع الرسمي](https://github.com/yl4579/StyleTTS2). رخصة MIT متساهلة: يمكنك استخدام الشيفرة وتعديلها وإعادة توزيعها، بما في ذلك تجاريًا، بقيود ضئيلة.',
          '**تحمل أوزان النموذج المُدرَّب مسبقًا شرطًا منفصلًا خارج نطاق الرخصة، مذكورًا في README وليس في ملف LICENSE نفسه.** يطلب README المشروع من المستخدمين "إخبار المستمعين بأن عيّنات الصوت مُصنَّعة بواسطة نماذج StyleTTS 2، ما لم يكن لديك إذن باستخدام الصوت الذي تُصنّعه". هذا طلب على مستوى التوثيق، وليس بندًا رسميًا في الرخصة — أشارت [مشكلة على GitHub تخص المشروع (#37)](https://github.com/yl4579/StyleTTS2/issues/37) صراحةً إلى أن هذا قد يكون مربكًا، لأن شارة الرخصة وملف LICENSE في المستودع توحيان لقارئ لا يقرأ أيضًا قسم استخدام النموذج في README بأن شروط MIT فقط هي المطبَّقة. لم تجد PromptQuorum ردًا من القائمين على الصيانة يحل هذا الغموض في خيط المناقشة العام. تعامل مع شرط الإفصاح كطلب حقيقي وموثَّق من المؤلفين، والتزم به — لكن افهم أنه يقع خارج منح MIT الرسمي على الشيفرة نفسها، وهو هيكل غير معتاد فعليًا يستحق الإشارة إليه قبل الاستخدام التجاري.',
          '**يجلب تشغيل الاستدلال الرسمي تبعية مرخّصة بموجب GPL-3.0: espeak-ng.** تطلب تعليمات التثبيت الخاصة بالمشروع نفسه `pip install phonemizer` بالإضافة إلى تثبيت `espeak-ng` على مستوى النظام، وespeak-ng مرخّصة بموجب GPL-3.0. رخصة GPL-3.0 هي رخصة copyleft ذات التزامات توزيع مختلفة عن MIT؛ يُعامَل استخدام espeak-ng كتبعية نظام خارجية غير مُعدَّلة عادةً بشكل مختلف عن الربط الثابت بشيفرتها المصدرية المُعدَّلة أو إعادة توزيعها، لكن الحد الفاصل الدقيق يعتمد على طريقة نشرك. تتجنب حزمة pip المجتمعية `styletts2` هذه المشكلة تحديدًا باستخدام مكتبة gruut المرخّصة بموجب MIT بدلًا من espeak-ng — فرق عملي حقيقي إن أردت سلسلة تبعيات متساهلة بالكامل، على حساب الاعتماد على حزمة طرف ثالث بتاريخ إصدار أخير (11 يناير 2024) أقدم حتى من المستودع الرسمي.',
          'لا شيء من هذا يُعد استشارة قانونية. اقرأ ملف LICENSE، وقسم استخدام النموذج في README، واستشر محاميًا بشأن نشرك المحدد قبل شحن StyleTTS 2 في منتج تجاري.',
        ],
        faqs: [
          {
            q: 'ما الرخصة التي يستخدمها StyleTTS 2؟',
            a: 'شيفرة StyleTTS 2 مرخّصة بموجب MIT. تحمل أوزان نموذجه المُدرَّب مسبقًا شرطًا منفصلًا خارج نطاق الرخصة في README المشروع (الإفصاح عن الكلام المُصنَّع ما لم يكن لديك إذن من المتحدث)، وهو ليس جزءًا من النص الرسمي لرخصة MIT — وهو تمييز أشارت إليه مشكلة على GitHub تخص المشروع بأنه قد يكون مربكًا. هذا ليس استشارة قانونية؛ اقرأ ملف LICENSE وREADME بنفسك قبل الاستخدام التجاري.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له StyleTTS 2',
        content: [
          'StyleTTS 2 نموذج على مستوى بحثي بجودة إخراج قوية فعليًا، وليس منتجًا استهلاكيًا مُصقَّلًا وتحت صيانة نشطة. إنه الأداة الخاطئة للحالات التالية:',
        ],
        items: [
          '**القراء الذين يريدون تجربة بسيطة من نوع التثبيت عبر pip والانطلاق مباشرة.** على عكس [Piper](/ar/power-local-llm/piper-tts-review)، الذي لا يبعد سوى `pip install piper-tts` وأمر CLI واحد عن الحصول على صوت يعمل، يتضمن المسار الرسمي لـStyleTTS 2 استنساخ مستودع بحثي، وتثبيت مُحوِّل أصوات، وتبعية espeak-ng على مستوى النظام، وتشغيل دفاتر Jupyter — حاجز إعداد أعلى بشكل ملحوظ.',
          '**النشر في بيئة الإنتاج دون جهد هندسي في تعلم الآلة.** لا يوجد وضع خادم ويب تحت صيانة، ولا صورة Docker رسمية، ولا شركة تدعم استمرارية الدعم. يجب على أي شخص ينشر StyleTTS 2 في بيئة الإنتاج أن يتوقع كتابة طبقة تقديم خاصة به وصيانتها حول الشيفرة البحثية.',
          '**ضمان إصلاح الأخطاء أو تحديثات الميزات المستمرة.** بدون التزامات في المستودع الرسمي منذ 7 مارس 2024، وبآخر إصدار لحزمة pip المجتمعية بتاريخ 11 يناير 2024، لا تفترض صيانة نشطة لأي من سلسلتي التبعيات — ضع في حسبانك احتمال أن تكون وحدك في مواجهة أي مشكلة تصادفها.',
          '**كلام جاهز للاستخدام بلغة غير الإنجليزية.** نقاط التحقق المُدرَّبة مسبقًا الصادرة رسميًا هي بالإنجليزية فقط (LJSpeech وLibriTTS). تدريب نموذج غير إنجليزي بنفسك ممكن معماريًا وفقًا لملاحظات الورقة البحثية حول محاذي النص متعدد اللغات وPL-BERT، لكنه يتطلب تدريبًا خاصًا بك — لا توجد نقطة تحقق غير إنجليزية قابلة للتنزيل من المشروع.',
          '**منح ترخيص واحد لا لبس فيه لكل ما تُنزّله.** لأن الشيفرة (MIT) والأوزان المُدرَّبة مسبقًا (MIT مع شرط إفصاح في README) تخضعان لأحكام مختلفة قليلًا، ولأن مسار الاستدلال الرسمي يجلب تبعية GPL-3.0، لا يقدم StyleTTS 2 قصة الترخيص الواحدة البسيطة التي يمتلكها مشروع مثل Bark (MIT بالكامل، دون شروط إضافية).',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل StyleTTS 2',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الترخيص'],
        rows: [
          {
            'الأداة': '[Piper](/ar/power-local-llm/piper-tts-review)',
            'الأنسب لـ': 'إعداد بسيط بالتثبيت عبر pip والانطلاق، أسرع تركيب على CPU فقط، وقت حقيقي على Raspberry Pi',
            'الترخيص': 'GPL-3.0-or-later',
          },
          {
            'الأداة': '[XTTS v2](/ar/power-local-llm/xtts-v2-review)',
            'الأنسب لـ': 'استنساخ صوت مُغلَّف من 6 ثوانٍ من الصوت المرجعي، 17 لغة',
            'الترخيص': 'CPML (غير تجاري)',
          },
          {
            'الأداة': '[Coqui TTS](/ar/power-local-llm/coqui-tts-review)',
            'الأنسب لـ': 'مجموعة أدوات مرنة متعددة الواجهات الخلفية مع دعم لغوي واسع وفرع تحت صيانة',
            'الترخيص': 'MPL-2.0',
          },
          {
            'الأداة': '[Bark](/ar/power-local-llm/bark-tts-review)',
            'الأنسب لـ': 'صوت تعبيري غير كلامي — ضحك، تنهدات، صوت محيطي، رخصة MIT واحدة لا لبس فيها',
            'الترخيص': 'MIT',
          },
          {
            'الأداة': '[ElevenLabs](https://elevenlabs.io)',
            'الأنسب لـ': 'واجهة برمجة تطبيقات سحابية مُدارة مع استنساخ صوت تجاري ودعم نشط، دون جهد استضافة ذاتية',
            'الترخيص': 'مملوكة (واجهة برمجة تطبيقات سحابية مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو StyleTTS 2؟',
            a: 'StyleTTS 2 هو نموذج مفتوح المصدر لتحويل النص إلى كلام من باحثين في جامعة كولومبيا، يُولّد كلامًا يبدو طبيعيًا عبر انتشار الأسلوب والتدريب التنافسي مع نماذج لغوية صوتية كبيرة، ونُشر كورقة بحثية في مؤتمر NeurIPS 2023.',
          },
          {
            q: 'هل StyleTTS 2 مجاني للاستخدام التجاري؟',
            a: 'شيفرته مرخّصة بموجب MIT، والتي تسمح بالاستخدام التجاري. تحمل أوزان نموذجه المُدرَّب مسبقًا شرطًا منفصلًا خارج نطاق الرخصة في README يطلب الإفصاح عن الكلام المُصنَّع ما لم يكن لديك إذن من المتحدث. هذا ليس استشارة قانونية؛ اقرأ ملف LICENSE وREADME بنفسك قبل أي نشر تجاري.',
          },
          {
            q: 'هل يمكن لـStyleTTS 2 استنساخ صوت؟',
            a: 'تدعم نقطة التحقق متعددة المتحدثين من LibriTTS نقل الأسلوب بدون أمثلة سابقة من مقطع صوتي مرجعي (5 إلى 10 ثوانٍ كحد أدنى، ويُنصح بـ15 إلى 30 ثانية)، وهو ما يشبه استنساخ الصوت من حيث الروح. لا يُغلَّف كميزة استنساخ بسيطة بسطر واحد مثل XTTS v2 — استخدامه يتطلب سير العمل الرسمي القائم على الدفاتر أو حزمة pip المجتمعية.',
          },
          {
            q: 'هل ما زال StyleTTS 2 تحت الصيانة؟',
            a: 'مستودع GitHub الرسمي غير مُصنَّف كمؤرشف، لكن PromptQuorum لم تجد أي التزامات منذ 7 مارس 2024. صدر آخر إصدار من حزمة pip المجتمعية التي تُبسّط التثبيت في 11 يناير 2024. تعامل مع كليهما كأثرين بحثيين خاملين وليسا برمجيات قيد التطوير النشط.',
          },
          {
            q: 'هل يدعم StyleTTS 2 لغات غير الإنجليزية؟',
            a: 'نقاط التحقق المُدرَّبة مسبقًا الصادرة رسميًا (LJSpeech وLibriTTS) هي بالإنجليزية فقط. تُشير الورقة البحثية إلى أن مكوّن محاذاة النص دُرِّب أيضًا على مجموعات بيانات يابانية وصينية ويُعمَّم بشكل معقول على لغات أخرى دون ضبط دقيق، وتشير إلى نموذج PL-BERT متعدد اللغات لـ14 لغة كنقطة انطلاق لتدريب نموذجك الخاص غير الإنجليزي — لكن لا توجد نقطة تحقق غير إنجليزية جاهزة للاستخدام صادرة رسميًا.',
          },
          {
            q: 'لماذا يحتاج التثبيت الرسمي لـStyleTTS 2 إلى espeak-ng، ولماذا يهم ذلك؟',
            a: 'يستخدم مسار الاستدلال الرسمي مكتبة phonemizer مع espeak-ng كواجهة خلفية لتحويل النص إلى وحدات صوتية. espeak-ng مرخّصة بموجب GPL-3.0، وهي رخصة copyleft ذات التزامات توزيع مختلفة عن MIT. تتجنب حزمة pip مجتمعية (`styletts2`) ذلك باستخدام مكتبة gruut المرخّصة بموجب MIT بدلًا من ذلك، على حساب الاعتماد على إصدار غير رسمي أقدم (آخر تحديث في 11 يناير 2024).',
          },
          {
            q: 'كيف يُقارَن StyleTTS 2 بـXTTS v2؟',
            a: 'شيفرة StyleTTS 2 مرخّصة بموجب MIT ومجانية للاستخدام التجاري (مع شرط الإفصاح في README بشأن الأوزان)؛ بينما XTTS v2 مرخّص بموجب رخصة Coqui Public Model License غير التجارية. إعداد StyleTTS 2 الرسمي أكثر توجهًا بحثيًا ويتطلب مزيدًا من العمل اليدوي؛ بينما يوفر XTTS v2 واجهة برمجة تطبيقات أبسط ومُغلَّفة لاستنساخ الصوت عبر مجموعة أدوات Coqui TTS. اختر بناءً على احتياجاتك من الترخيص وتحملك لتعقيد الإعداد.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يظل StyleTTS 2 مثيرًا للإعجاب فعليًا من حيث جودة الإخراج: يُنسَب لأسلوبه في انتشار الأسلوب والتدريب التنافسي، في ورقته البحثية الخاصة في NeurIPS، معادلة أو تجاوز جودة التسجيل البشري في معيار LJSpeech، تحت رخصة كود (MIT) متساهلة قدر الإمكان. ما يمنعه من أن يكون توصية سهلة لمعظم القراء هو كل ما يحيط بهذا النموذج الأساسي: شرط إفصاح على مستوى التوثيق يخص الأوزان المُدرَّبة مسبقًا يقع خارج منح MIT الرسمي، ومسار استدلال رسمي يجلب تبعية GPL-3.0، وحزمة pip مجتمعية تتجنب تلك التبعية لكنها هي نفسها أقدم من عامين ونصف، وعدم وجود أي التزامات في المستودع الرسمي منذ 7 مارس 2024. إذا كنت تريد أفضل جودة سرد صوتي إنجليزي طبيعي متاحة محليًا وترتاح لإعداد على مستوى بحثي وسلسلة تبعيات غير مُصانة، فإن StyleTTS 2 يفي بذلك. إذا كنت تريد تثبيتًا أبسط، أو صيانة نشطة، أو استنساخ صوت مُغلَّف، اجمع بين هذه المراجعة وتغطية PromptQuorum لـ[Piper](/ar/power-local-llm/piper-tts-review) للتركيب السريع على CPU فقط، أو [XTTS v2](/ar/power-local-llm/xtts-v2-review) لاستنساخ الصوت المُغلَّف، أو [مقارنة ElevenLabs](/ar/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) كبديل مُدار بالكامل. تُعد هذه المراجعة الأخيرة من بين ست محركات محلية للتعرف على الكلام وتركيبه راجعتها PromptQuorum بعمق، إلى جانب [Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) و[Faster Whisper](/ar/power-local-llm/faster-whisper-review) وPiper و[Coqui TTS](/ar/power-local-llm/coqui-tts-review) وXTTS v2 و[Bark](/ar/power-local-llm/bark-tts-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[StyleTTS 2 على GitHub](https://github.com/yl4579/StyleTTS2) — المستودع الرسمي: README، وLICENSE، وتعليمات التثبيت، وسجل الالتزامات.',
          '[ورقة StyleTTS 2 البحثية (arXiv)](https://arxiv.org/abs/2306.07691) — "Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models"، ورقة NeurIPS 2023.',
          '[مشكلة GitHub رقم 37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — التناقض الذي أشار إليه المجتمع بين ملف رخصة MIT وشرط الإفصاح عن استخدام النموذج في README.',
          '[styletts2 على PyPI](https://pypi.org/project/styletts2/) — حزمة pip يديرها المجتمع (Sidharth Rajaram)، الإصدار 0.1.6، الصادر في 11 يناير 2024.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) و[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) على Hugging Face — نقاط التحقق المُدرَّبة مسبقًا الرسمية.',
          '[تراخيص TTS المحلية واستنساخ الصوت](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مقارنة كاملة للتراخيص بين محركات TTS المحلية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة XTTS v2](/ar/power-local-llm/xtts-v2-review) — استنساخ صوت مُغلَّف من 6 ثوانٍ من الصوت المرجعي، برخصة غير تجارية.',
          '[مراجعة Bark TTS](/ar/power-local-llm/bark-tts-review) — نموذج الصوت التعبيري غير الكلامي برخصة MIT واحدة لا لبس فيها.',
          '[مراجعة Piper TTS](/ar/power-local-llm/piper-tts-review) — البديل المحلي السريع وسهل التثبيت لتحويل النص إلى كلام على CPU فقط.',
          '[مراجعة Coqui TTS](/ar/power-local-llm/coqui-tts-review) — مجموعة الأدوات المرنة متعددة الواجهات الخلفية وفرعها تحت صيانة المجتمع.',
          '[تراخيص TTS المحلية واستنساخ الصوت: Piper وXTTS v2 وF5-TTS وCoqui](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — التحليل المعمّق للتراخيص عبر محركات TTS المحلية الرئيسية.',
          '[ElevenLabs مقابل Piper مقابل XTTS v2](/ar/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — مقارنة السحابة مقابل المحلي للقراء الذين يقررون ما إذا كانوا سيستضيفون بأنفسهم.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة StyleTTS 2 (2026): نموذج بحثي من جامعة كولومبيا برخصة MIT لصوت طبيعي',
      description:
        'مراجعة StyleTTS 2: نموذج الصوت بانتشار الأسلوب من جامعة كولومبيا برخصة MIT. أوامر تثبيت حقيقية، الفارق الدقيق في ترخيص الأوزان، وحالة الصيانة (لا التزامات منذ مارس 2024) لعام 2026.',
      url: 'https://promptquorum.com/ar/power-local-llm/styletts-2-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون يقيّمون نماذج محلية على مستوى بحثي لتحويل النص إلى كلام' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة StyleTTS 2 (2026)', item: 'https://promptquorum.com/ar/power-local-llm/styletts-2-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-zh.webp',
    title: 'StyleTTS 2评测(2026):哥伦比亚大学MIT许可的自然语音研究模型',
    seoTitle: 'StyleTTS 2评测2026:MIT许可的语音合成模型',
    intro:
      'StyleTTS 2是哥伦比亚大学研究人员发布的开源文本转语音模型,托管在[GitHub](https://github.com/yl4579/StyleTTS2)上,通过风格扩散(style diffusion)和使用大型语音语言模型的对抗训练生成听起来自然的语音。其代码采用**MIT许可证**,但README中为预训练模型权重添加了一项独立的、许可证之外的披露条件,而公开仓库自2024年3月7日起没有任何提交记录。本评测将介绍StyleTTS 2的实际功能、真实的安装和推理命令、MIT代码与附条件权重之间的许可差异,以及其休眠但未归档的维护状态——为2026年评估该项目的读者提供真实全貌。',
    metaDescription:
      'StyleTTS 2评测:哥伦比亚大学基于风格扩散、MIT许可的语音模型。真实安装命令、权重许可差异,以及2026年的维护状态(自2024年3月起无提交)。',
    twitterDescription:
      'StyleTTS 2评测2026:哥伦比亚大学的研究模型通过风格扩散和对抗训练实现自然叙述,采用MIT许可但预训练权重存在文档层面的注意事项。真实命令、真实限制,以及维护状态核查。',
    audience:
      '评估本地、MIT许可的文本转语音模型以获得高质量叙述效果的开发者和研究人员,他们需要在构建应用前了解该研究仓库的维护状态和许可差异。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2评测',
    targetKeywords: [
      'styletts 2 评测',
      'styletts2',
      'styletts 2 许可证',
      'styletts 2 安装',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 维护',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2是哥伦比亚大学的开源研究级文本转语音模型,通过风格扩散和使用大型语音语言模型的对抗训练生成听起来自然的语音。** 其代码采用**MIT许可证**,使用`git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`安装。README中为预训练模型权重添加了一项独立的、许可证之外的条件(除非获得说话者许可,否则必须披露语音为合成生成),公开GitHub仓库自2024年3月7日起未显示任何提交。有关本地TTS引擎间的完整许可对比,请参阅PromptQuorum的[本地TTS许可指南](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)。',
    quickAnswerTop: {
      en: {
        question: 'StyleTTS 2是什么?它还在维护吗?',
        answer:
          '如果你想要本地MIT许可模型中可获得的最自然的英语叙述质量,StyleTTS 2值得使用——它通过风格扩散和对抗训练生成语音,其NeurIPS论文报告称在标准基准测试中达到或超过了人类录音水平。其LibriTTS多说话人检查点还支持从5到10秒(建议15到30秒)的参考片段进行零样本风格迁移,这在精神上类似于声音克隆,尽管它并未像XTTS v2那样被打包为一键克隆功能。其代码采用MIT许可证,但README自身为预训练模型权重添加了一项许可证之外的条件:除非获得说话者许可,否则必须披露语音为合成生成。其官方推理路径需要使用GPL-3.0许可的espeak-ng进行音素化;一个由社区维护的pip包(Sidharth Rajaram开发的`styletts2`)通过改用MIT许可的gruut库避免了这一点,但其最新版本发布于2024年1月11日。官方GitHub仓库未被标记为已归档,但自2024年3月7日起没有任何提交——在依赖它处理任何生产环境中的关键任务之前,请将其视为休眠的研究成果,而非积极开发中的产品。',
        bullets: [
          '通过风格扩散和对抗训练生成听起来自然的语音,据其NeurIPS论文称,在标准单说话人基准测试中达到或超过人类录音水平。',
          '代码许可证:MIT。预训练模型权重携带额外的README级披露条件,该条件并未包含在MIT许可证文本本身中。',
          'LibriTTS多说话人检查点支持从5到10秒的参考片段进行零样本风格迁移(建议15到30秒)。',
          '官方推理路径需要GPL-3.0许可的espeak-ng;一个社区pip包避免了这一点,但其最新版本发布于2024年1月11日。',
          '官方GitHub仓库自2024年3月7日起无提交记录;未被归档,拥有超过6,300颗星标。',
          '由哥伦比亚大学电气工程系的研究人员开发;预训练检查点主要为英语。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '历史:哥伦比亚大学的一个研究项目', anchor: 'history' },
      { label: 'StyleTTS 2的实际功能', anchor: 'what-it-does' },
      { label: '安装与运行StyleTTS 2:分步指南', anchor: 'install-walkthrough' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与成本', anchor: 'license-cost' },
      { label: 'StyleTTS 2不适合的场景', anchor: 'limitations' },
      { label: 'StyleTTS 2的替代方案', anchor: 'alternatives' },
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
            text: 'StyleTTS 2是哥伦比亚大学MIT许可的研究级文本转语音模型,通过风格扩散和对抗训练生成听起来自然的语音,其预训练权重存在文档层面的披露条件,自2024年3月7日起GitHub上无任何提交记录。',
          },
          {
            type: 'plain-terms',
            text: '这是一个免费、可下载的AI模型,能将文字转换为听起来非常自然的语音,由大学研究人员而非企业创建——根据代码许可证,商业使用免费,但其自身说明要求你告知听众语音是合成的,而且似乎已经没有人在积极修复其中的问题了。',
          },
        ],
        items: [
          '通过风格扩散和对抗训练生成听起来自然的语音,据其NeurIPS论文称,在标准单说话人基准测试中达到或超过人类录音水平。',
          '代码许可证:MIT。预训练模型权重在README中携带独立的披露条件,并未编码在MIT许可证文本中。',
          '通过LibriTTS多说话人检查点,从5到10秒的参考片段进行零样本风格迁移(建议15到30秒)。',
          '官方推理需要GPL-3.0许可的espeak-ng;社区pip包避免了这一点,但其最新版本发布于2024年1月11日。',
          '官方仓库自2024年3月7日起无提交记录;未被归档,GitHub星标超过6,300颗。',
          '预训练检查点主要为英语;文本对齐器也曾在日语和中文语料库上训练,据称无需微调即可较好地泛化到其他语言。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该项目的一个GitHub issue(#37)指出,README中针对预训练模型的披露要求位于MIT许可证文件本身之外,一些读者认为这令人困惑。部署前请自行阅读LICENSE文件和README的模型使用部分——详见下方的许可证与成本部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:哥伦比亚大学的一个研究项目',
        content: [
          '**StyleTTS 2由哥伦比亚大学电气工程系的研究人员开发**——Yinghao Aaron Li、Cong Han、Vinay S. Raghavan、Gavin Mischler和Nima Mesgarani——并作为NeurIPS 2023论文发表,题为《StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models》。',
          '**论文的核心论点是,将风格扩散(将说话风格建模为潜在概率分布而非单一固定向量)与针对大型预训练语音语言模型的对抗训练相结合,能够比以往方法更准确地建模类人语音变化。** 在单说话人基准LJSpeech上,论文报告称StyleTTS 2在听众评估中达到或超过了真实人类语音录音水平;在多说话人数据集LibriTTS上,报告称其在零样本说话人自适应方面超越了此前可用的公开模型。',
          '**公开GitHub仓库[yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2)已积累超过6,300颗星标**,且未被标记为已归档——但根据项目公开的提交历史,PromptQuorum发现该仓库主分支自2024年3月7日起没有任何提交。这与大学研究成果发布的模式相符,而非商业维护的开源产品:代码、论文和预训练检查点是伴随研究发布的,并没有持续的功能开发或错误修复发布承诺。',
          '**由开发者Sidharth Rajaram维护的社区pip包`styletts2`**,将原始研究代码封装为可安装的包(`pip install styletts2`),用MIT许可的gruut库替代了GPL-3.0许可的espeak-ng音素化工具,以保持整个安装链采用宽松许可。其在[PyPI](https://pypi.org/project/styletts2/)上的最新版本为0.1.6,发布于2024年1月11日——截至本评测时,该版本也已超过两年半,是与哥伦比亚大学原始研究代码分离的独立第三方项目。',
        ],
        faqs: [
          {
            q: '谁开发了StyleTTS 2?',
            a: 'StyleTTS 2由Yinghao Aaron Li、Cong Han、Vinay S. Raghavan、Gavin Mischler和Nima Mesgarani开发,他们均为哥伦比亚大学电气工程系的研究人员,并作为NeurIPS 2023论文发表。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'StyleTTS 2的实际功能',
        content: [
          'StyleTTS 2是一个文本转语音模型,从输入文本生成梅尔频谱图(在其端到端配置中生成原始波形),使用扩散模型对潜在的"风格"向量进行采样,而非确定性地预测它——论文将这一机制归功于产生更自然、更接近人类的韵律。',
        ],
        items: [
          '**用于自然韵律的风格扩散。** StyleTTS 2并非从文本预测单一固定的风格嵌入,而是通过扩散从学习到的风格概率分布中采样,据论文称,这比确定性方法产生了更自然的音调、节奏和重音变化。',
          '**针对语音语言模型的对抗训练。** 训练过程将TTS模型与充当判别器的大型预训练语音语言模型(SLM)相对抗,论文将这一技术归功于缩小了在LJSpeech基准上与人类录音质量之间的剩余差距。',
          '**两个官方发布的预训练检查点。** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech)(单一英语说话人,24kHz)和[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS)(多英语说话人)均托管在Hugging Face上。',
          '**从参考音频进行零样本风格迁移。** LibriTTS多说话人检查点可以用从参考音频片段中捕获的风格合成新文本——项目自身文档和第三方指南描述最低5到10秒即可,推荐使用15到30秒干净的单说话人参考音频,以获得准确的音色、韵律和发音。',
          '**预训练检查点主要为英语,并有一些多语言基础工作。** 官方发布的检查点是在英语数据集(LJSpeech、LibriTTS)上训练的。论文指出,其文本对齐器组件也曾在日语(JVS)和中文(AiShell)语料库上预训练,并"无需微调即可在大多数其他语言上表现良好",还提到一个覆盖14种语言的多语言PL-BERT模型,可作为自行训练非英语StyleTTS 2模型的起点——但目前没有官方发布的、可直接使用的非英语检查点。',
        ],
        note: 'StyleTTS 2是一个带有已发布预训练检查点的研究代码库,而非精雕细琢的消费级产品——安装和运行它所需的配置远多于像Piper这样单一用途、可pip安装的工具。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '安装与运行StyleTTS 2:分步指南',
        content: '本分步指南遵循项目自身文档中记录的、使用预训练检查点运行推理的配置流程。',
        numberedItems: [
          {
            title: '克隆仓库并安装依赖项。',
            whyItMatters: '运行`git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`。这将安装项目自身requirements文件中列出的核心Python依赖项。',
          },
          {
            title: '安装音素化工具和espeak-ng。',
            whyItMatters: '运行`pip install phonemizer`,在Linux上运行`sudo apt-get install espeak-ng`(或适用于你操作系统的等效命令)。请注意,espeak-ng本身采用GPL-3.0许可——查看下方许可证与成本部分了解这为何不仅关系到StyleTTS 2代码本身,也关系到推理路径。',
          },
          {
            title: '下载预训练检查点。',
            whyItMatters: '从Hugging Face下载[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main)(单说话人)或[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main)(多说话人,支持风格迁移)到项目目录中。',
          },
          {
            title: '通过提供的笔记本运行推理。',
            whyItMatters: '项目附带`Demo/Inference_LJSpeech.ipynb`和`Demo/Inference_LibriTTS.ipynb`——在Jupyter中打开与你下载的检查点匹配的那个,以加载模型并合成你的第一个样本。',
          },
          {
            title: '(替代方案)使用社区pip包实现更简单的、纯MIT的安装链。',
            whyItMatters: '运行`pip install styletts2`,然后`from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("你好。", output_wav_file="test.wav")`。这个第三方包(最新版本发布于2024年1月11日)使用MIT许可的gruut库替代espeak-ng,避免了GPL-3.0依赖——代价是依赖一个同样休眠的非官方封装工具。',
          },
          {
            title: '(可选)提供参考片段进行风格迁移。',
            whyItMatters: '使用LibriTTS检查点时,传递`target_voice_path`参数(社区包)或等效的参考音频参数(官方笔记本),指向一个15到30秒的干净单说话人WAV文件,即可以该捕获的风格合成新文本。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '以下示例展示了社区pip包的简化API以及官方项目推理笔记本中使用的模式。',
        ],
        codeBlock: `# 最简单的路径:社区pip包(纯MIT依赖链,
# 最新版本发布于2024-01-11 — 依赖前请确认其仍可正常工作)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# 从参考片段进行零样本风格迁移(类LibriTTS检查点)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# 自定义检查点与配置路径
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- 官方仓库路径(需要espeak-ng,GPL-3.0) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# 然后在Jupyter中打开 Demo/Inference_LJSpeech.ipynb 或 Demo/Inference_LibriTTS.ipynb
# 并针对你下载的检查点运行提供的单元格。`,
        codeLanguage: 'python',
        note: '社区`styletts2`包的确切API(`tts.StyleTTS2()`、`.inference()`、`target_voice_path`)记录在其[PyPI页面](https://pypi.org/project/styletts2/)和README中,最后一次更新对应0.1.6版本(2024年1月11日)——在编写脚本前请确认其仍然一致。官方仓库基于笔记本的路径直接记录在[项目README](https://github.com/yl4579/StyleTTS2)中。',
        items: [
          '**参考音频质量对风格迁移至关重要。** 干净的单说话人15到30秒片段比短促、嘈杂或多说话人的参考音频产生的风格迁移效果明显更好。',
          '**存在两条独立的依赖链。** 官方仓库的笔记本路径会引入GPL-3.0许可的espeak-ng;社区pip包则通过改用gruut避免了这一点——在围绕其中任何一条构建工具之前,请选择符合你许可要求的依赖链。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与成本',
        content: [
          '**StyleTTS 2的代码采用MIT许可证**,这一点已通过[官方仓库](https://github.com/yl4579/StyleTTS2)中的`LICENSE`文件确认。MIT是一种宽松许可证:你可以使用、修改和再分发该代码,包括用于商业用途,限制极少。',
          '**预训练模型权重携带一项独立的、许可证之外的条件,该条件写在README中,而非LICENSE文件本身。** 项目README要求用户"告知听众语音样本是由StyleTTS 2模型合成的,除非你已获得使用所合成声音的许可"。这是文档层面的请求,而非正式的许可条款——该项目的一个[GitHub issue(#37)](https://github.com/yl4579/StyleTTS2/issues/37)明确指出这可能造成混淆,因为仓库的许可证徽章和LICENSE文件会让未阅读README模型使用部分的读者以为仅适用MIT条款。PromptQuorum未在该公开issue讨论串中找到维护者对此模糊之处的回应。请将该披露条件视为作者提出的真实、有文档记录的要求,并予以遵守——但要理解它位于代码本身正式MIT授权之外,这是一种在商业使用前值得关注的、确实不寻常的结构。',
          '**运行官方推理会引入一个GPL-3.0许可的依赖项:espeak-ng。** 项目自身的安装说明要求`pip install phonemizer`外加系统级安装`espeak-ng`,而espeak-ng采用GPL-3.0许可。GPL-3.0是一种copyleft许可证,其分发义务与MIT不同;将espeak-ng作为未经修改的外部系统依赖使用,通常与静态链接或再分发其修改后源代码的处理方式不同,但确切的边界取决于你的部署方式。社区pip包`styletts2`通过使用MIT许可的gruut库替代espeak-ng,专门规避了这一问题——如果你想要一条完全宽松许可的依赖链,这是一个实际的实用差异,但代价是依赖一个第三方包,其最新版本日期(2024年1月11日)甚至比官方仓库更旧。',
          '以上均不构成法律建议。在将StyleTTS 2投入商业产品前,请阅读LICENSE文件、README的模型使用部分,并就你的具体部署咨询律师。',
        ],
        faqs: [
          {
            q: 'StyleTTS 2使用什么许可证?',
            a: 'StyleTTS 2的代码采用MIT许可证。其预训练模型权重在项目README中携带一项独立的、许可证之外的条件(除非获得说话者许可,否则须披露合成语音),该条件不属于正式MIT许可证文本的一部分——该项目的一个GitHub issue指出这一区别可能造成混淆。这不构成法律建议;商业使用前请自行阅读LICENSE文件和README。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'StyleTTS 2不适合的场景',
        content: [
          'StyleTTS 2是一个输出质量确实出色的研究级模型,而非精雕细琢、积极维护的消费级产品。它不适合以下情况:',
        ],
        items: [
          '**希望简单pip安装即可使用的读者。** 与只需`pip install piper-tts`加一条CLI命令即可获得可用音频的[Piper](/zh/power-local-llm/piper-tts-review)不同,StyleTTS 2的官方路径涉及克隆研究仓库、安装音素化工具、系统级espeak-ng依赖以及运行Jupyter笔记本——配置门槛明显更高。',
          '**没有机器学习工程投入的生产部署。** 没有经过维护的Web服务器模式,没有官方Docker镜像,也没有企业为持续支持提供保障。任何将StyleTTS 2部署到生产环境的人都应预期需要围绕该研究代码编写并维护自己的服务层。',
          '**保证持续的错误修复或功能更新。** 官方仓库自2024年3月7日起没有提交记录,社区pip包的最新版本日期为2024年1月11日,因此不要假设任一依赖链有积极维护——请为遇到问题时可能需要自行解决的情况做好预算。',
          '**开箱即用的非英语语音。** 官方发布的预训练检查点仅限英语(LJSpeech、LibriTTS)。根据论文关于其多语言文本对齐器和PL-BERT的说明,自行训练非英语模型在架构上是可行的,但需要你自己完成训练——项目没有提供可下载的非英语检查点。',
          '**对下载的所有内容提供单一、明确的许可授权。** 由于代码(MIT)和预训练权重(MIT加README披露条件)受到略有不同的约束,且官方推理路径会引入GPL-3.0依赖,StyleTTS 2无法提供像Bark(完全MIT、无额外条件)这样项目所具备的单一、简单的许可故事。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'StyleTTS 2的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合', '许可证'],
        rows: [
          {
            '工具': '[Piper](/zh/power-local-llm/piper-tts-review)',
            '最适合': '简单的pip安装即用配置、最快的纯CPU合成、Raspberry Pi上的实时运行',
            '许可证': 'GPL-3.0-or-later',
          },
          {
            '工具': '[XTTS v2](/zh/power-local-llm/xtts-v2-review)',
            '最适合': '基于6秒参考音频的打包式声音克隆,支持17种语言',
            '许可证': 'CPML(非商业)',
          },
          {
            '工具': '[Coqui TTS](/zh/power-local-llm/coqui-tts-review)',
            '最适合': '灵活的多后端工具包,语言支持广泛,有持续维护的分支',
            '许可证': 'MPL-2.0',
          },
          {
            '工具': '[Bark](/zh/power-local-llm/bark-tts-review)',
            '最适合': '富有表现力的非语音音频——笑声、叹息、环境声,单一明确的MIT许可证',
            '许可证': 'MIT',
          },
          {
            '工具': '[ElevenLabs](https://elevenlabs.io)',
            '最适合': '带商业声音克隆和积极支持的托管云API,无需自行托管',
            '许可证': '专有(付费云API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'StyleTTS 2是什么?',
            a: 'StyleTTS 2是哥伦比亚大学研究人员开发的开源文本转语音模型,通过风格扩散和使用大型语音语言模型的对抗训练生成听起来自然的语音,作为NeurIPS 2023论文发表。',
          },
          {
            q: 'StyleTTS 2可以免费商用吗?',
            a: '其代码采用MIT许可证,允许商业使用。其预训练模型权重在README中携带一项独立的、许可证之外的条件,要求除非获得说话者许可,否则须披露合成语音。这不构成法律建议;商业部署前请自行阅读LICENSE文件和README。',
          },
          {
            q: 'StyleTTS 2能克隆声音吗?',
            a: '其LibriTTS多说话人检查点支持从参考音频片段(最低5到10秒,建议15到30秒)进行零样本风格迁移,这在精神上类似于声音克隆。它并未像XTTS v2那样被打包为简单的一键克隆功能——使用它需要基于笔记本的官方工作流程或社区pip包。',
          },
          {
            q: 'StyleTTS 2还在维护吗?',
            a: '官方GitHub仓库未被标记为已归档,但PromptQuorum未发现自2024年3月7日以来的任何提交记录。简化安装的社区pip包最后一次发布于2024年1月11日。请将两者都视为休眠的研究成果,而非积极开发中的软件。',
          },
          {
            q: 'StyleTTS 2支持英语以外的语言吗?',
            a: '官方发布的预训练检查点(LJSpeech、LibriTTS)仅限英语。论文指出,其文本对齐器组件也曾在日语和中文语料库上训练,无需微调即可较为合理地泛化到其他语言,并提到一个覆盖14种语言的多语言PL-BERT模型,可作为训练你自己的非英语模型的起点——但目前没有官方发布的、开箱即用的非英语检查点。',
          },
          {
            q: '为什么StyleTTS 2的官方安装需要espeak-ng,这为何重要?',
            a: '官方推理路径使用phonemizer库,以espeak-ng作为将文本转换为音素的后端。espeak-ng采用GPL-3.0许可,这是一种分发义务与MIT不同的copyleft许可证。社区pip包(`styletts2`)通过改用MIT许可的gruut库避免了这一点,但代价是依赖一个更旧的非官方版本(最后更新于2024年1月11日)。',
          },
          {
            q: 'StyleTTS 2与XTTS v2相比如何?',
            a: 'StyleTTS 2的代码采用MIT许可,可免费商用(权重方面有README披露条件);XTTS v2则采用非商业的Coqui Public Model License许可。StyleTTS 2的官方配置更偏研究级,需要更多手动操作;XTTS v2通过Coqui TTS工具包提供更简单、打包式的声音克隆API。请根据你的许可需求和对配置复杂度的容忍度进行选择。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'StyleTTS 2在输出质量方面依然令人印象深刻:其风格扩散与对抗训练方法在自身的NeurIPS论文中被认为在LJSpeech基准上达到或超过了人类录音质量,且代码许可证(MIT)已尽可能宽松。让它无法轻易推荐给大多数读者的,是围绕这一核心模型的一切:预训练权重存在一项位于正式MIT授权之外的文档层面披露条件,官方推理路径会引入GPL-3.0依赖,一个避开该依赖但自身已超过两年半的社区pip包,以及自2024年3月7日起官方仓库无任何提交记录。如果你想要本地可获得的最佳自然英语叙述质量,并能接受研究级配置和未维护的依赖链,StyleTTS 2能够做到。如果你想要更简单的安装、积极的维护,或打包式的声音克隆,可以将本评测与PromptQuorum对[Piper](/zh/power-local-llm/piper-tts-review)(快速纯CPU合成)、[XTTS v2](/zh/power-local-llm/xtts-v2-review)(打包式声音克隆)或[ElevenLabs对比](/zh/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)(完全托管的替代方案)的报道结合起来阅读。本评测是PromptQuorum深入评测的六款本地语音识别与语音合成引擎中的最后一款,与[Whisper.cpp](/zh/power-local-llm/whisper-cpp-review)、[Faster Whisper](/zh/power-local-llm/faster-whisper-review)、Piper、[Coqui TTS](/zh/power-local-llm/coqui-tts-review)、XTTS v2和[Bark](/zh/power-local-llm/bark-tts-review)并列。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub上的StyleTTS 2](https://github.com/yl4579/StyleTTS2) — 官方仓库:README、LICENSE、安装说明和提交历史。',
          '[StyleTTS 2论文(arXiv)](https://arxiv.org/abs/2306.07691) — 《Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models》,NeurIPS 2023论文。',
          '[GitHub issue #37:Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — 社区指出的MIT LICENSE文件与README模型使用披露条件之间的差异。',
          '[PyPI上的styletts2](https://pypi.org/project/styletts2/) — 社区维护的pip包(Sidharth Rajaram),0.1.6版本,发布于2024年1月11日。',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech)和[StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) — Hugging Face上的官方预训练检查点。',
          '[本地TTS与声音克隆许可](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 本地TTS引擎间的完整许可对比。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[XTTS v2评测](/zh/power-local-llm/xtts-v2-review) — 基于6秒参考音频的打包式声音克隆,采用非商业许可。',
          '[Bark TTS评测](/zh/power-local-llm/bark-tts-review) — 具有单一明确MIT许可的表现力非语音音频模型。',
          '[Piper TTS评测](/zh/power-local-llm/piper-tts-review) — 快速、安装简单、纯CPU的本地TTS替代方案。',
          '[Coqui TTS评测](/zh/power-local-llm/coqui-tts-review) — 灵活的多后端工具包及其社区维护的分支。',
          '[本地TTS与声音克隆许可:Piper、XTTS v2、F5-TTS和Coqui](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 各主要本地TTS引擎的许可深度对比。',
          '[ElevenLabs对比Piper对比XTTS v2](/zh/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 帮助读者决定是否自行托管的云端与本地对比。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2评测(2026):哥伦比亚大学MIT许可的自然语音研究模型',
      description:
        'StyleTTS 2评测:哥伦比亚大学基于风格扩散、MIT许可的语音模型。真实安装命令、权重许可差异,以及2026年的维护状态(自2024年3月起无提交)。',
      url: 'https://promptquorum.com/zh/power-local-llm/styletts-2-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '评估本地研究级文本转语音模型的开发者' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/styletts-2-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/styletts-2-review-hero-ko.webp',
    title: 'StyleTTS 2 리뷰(2026): 자연스러운 음성을 위한 컬럼비아 대학교의 MIT 라이선스 연구 모델',
    seoTitle: 'StyleTTS 2 리뷰 2026: MIT 라이선스 음성 합성 모델',
    intro:
      'StyleTTS 2는 컬럼비아 대학교 연구진이 [GitHub](https://github.com/yl4579/StyleTTS2)에 공개한 오픈소스 텍스트 음성 변환(TTS) 모델로, 스타일 확산(style diffusion)과 대형 음성 언어 모델을 활용한 적대적 학습을 통해 자연스러운 음성을 생성합니다. 코드는 **MIT 라이선스**를 따르지만, README에는 사전 학습된 모델 가중치에 대해 라이선스와는 별개의 공개 조건이 추가되어 있으며, 공개 저장소는 2026년 기준 2024년 3월 7일 이후 커밋이 없습니다. 이 리뷰에서는 StyleTTS 2가 실제로 무엇을 하는지, 실제 설치 및 추론 명령어, MIT 코드와 조건부 가중치 사이의 라이선스 미묘한 차이, 그리고 휴면 상태이지만 아카이브되지는 않은 유지보수 상태를 다룹니다 — 2026년 이 모델을 평가하는 이들을 위한 솔직한 그림입니다.',
    metaDescription:
      'StyleTTS 2 리뷰: 컬럼비아 대학교의 MIT 라이선스 스타일 확산 음성 모델. 실제 설치 명령어, 가중치의 라이선스 미묘한 차이, 2026년 기준 유지보수 상태(2024년 3월 이후 커밋 없음)를 다룹니다.',
    twitterDescription:
      'StyleTTS 2 리뷰 2026: 컬럼비아 대학교의 연구 모델은 스타일 확산과 적대적 학습으로 자연스러운 내레이션을 구현하며, MIT 라이선스이지만 사전 학습된 가중치에는 문서 수준의 유의 사항이 있습니다. 실제 명령어, 솔직한 한계, 유지보수 상태 확인.',
    audience:
      '고품질 내레이션을 위해 로컬 MIT 라이선스 TTS 모델을 평가하는 개발자 및 연구자로, 구축 전에 연구 저장소의 유지보수 상태와 라이선스 미묘한 차이를 이해해야 하는 분들.',
    readTime: '12분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'StyleTTS 2 리뷰',
    targetKeywords: [
      'styletts 2 리뷰',
      'styletts2',
      'styletts 2 라이선스',
      'styletts 2 설치',
      'styletts 2 vs xtts v2',
      'styletts 2 voice cloning',
      'styletts 2 유지보수',
      'columbia styletts',
    ],
    current_models_mentioned: ['StyleTTS 2', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**StyleTTS 2는 컬럼비아 대학교의 오픈소스 연구급 텍스트 음성 변환 모델로, 스타일 확산과 대형 음성 언어 모델을 활용한 적대적 학습을 통해 자연스러운 음성을 생성합니다.** 코드는 **MIT 라이선스**이며, `git clone https://github.com/yl4579/StyleTTS2.git && pip install -r requirements.txt`로 설치합니다. README에는 사전 학습된 모델 가중치에 대해 라이선스와는 별개의 조건(화자의 허가가 없는 한 음성이 합성되었음을 공개해야 함)이 추가되어 있으며, 공개 GitHub 저장소는 2024년 3월 7일 이후 커밋이 없습니다. 로컬 TTS 엔진 간 전체 라이선스 비교는 PromptQuorum의 [로컬 TTS 라이선스 가이드](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)를 참고하십시오.',
    quickAnswerTop: {
      en: {
        question: 'StyleTTS 2는 무엇이며 아직 유지보수되고 있습니까?',
        answer:
          'StyleTTS 2는 MIT 라이선스의 로컬 모델에서 얻을 수 있는 가장 자연스러운 영어 내레이션 품질을 원한다면 사용할 가치가 있습니다. 이는 스타일 확산과 적대적 학습을 통해 만들어지며, NeurIPS 논문에서는 표준 벤치마크에서 인간 녹음과 동등하거나 이를 능가한다고 보고합니다. LibriTTS 다중 화자 체크포인트는 5~10초(권장 15~30초)의 참조 클립을 이용한 제로샷 스타일 전송도 지원하는데, 이는 정신적으로 보이스 클로닝과 유사하지만 XTTS v2처럼 한 줄짜리 클로닝 기능으로 패키징되어 있지는 않습니다. 코드는 MIT 라이선스이지만, README 자체에는 사전 학습된 모델 가중치에 대해 라이선스와는 별개의 조건이 추가되어 있습니다. 화자의 허가가 없는 한 음성이 합성되었음을 공개해야 합니다. 공식 추론 경로는 음소화를 위해 GPL-3.0 라이선스인 espeak-ng가 필요합니다. 커뮤니티가 관리하는 pip 패키지(Sidharth Rajaram이 만든 `styletts2`)는 대신 MIT 라이선스인 gruut 라이브러리를 사용해 이를 피하지만, 최신 릴리스는 2024년 1월 11일이었습니다. 공식 GitHub 저장소는 아카이브로 표시되어 있지 않지만 2024년 3월 7일 이후 커밋이 없습니다 — 프로덕션에서 중요한 용도로 의존하기 전에, 활발히 개발되는 제품이 아니라 휴면 상태의 연구 산출물로 취급하십시오.',
        bullets: [
          'NeurIPS 논문에 따르면 스타일 확산과 적대적 학습을 통해 자연스러운 음성을 생성하며, 표준 단일 화자 벤치마크에서 인간 녹음과 동등하거나 이를 능가함.',
          '코드 라이선스: MIT. 사전 학습된 모델 가중치에는 MIT 라이선스 텍스트 자체에는 포함되지 않은 추가적인 README 수준의 공개 조건이 있음.',
          'LibriTTS 다중 화자 체크포인트를 통해 5~10초의 참조 클립으로 제로샷 스타일 전송 지원(권장 15~30초).',
          '공식 추론 경로에는 GPL-3.0 라이선스인 espeak-ng가 필요함. 커뮤니티 pip 패키지는 이를 피하지만 최신 릴리스는 2024년 1월 11일임.',
          '공식 GitHub 저장소는 2024년 3월 7일 이후 커밋 없음. 아카이브되지 않았으며 6,300개 이상의 스타를 보유.',
          '컬럼비아 대학교 전기공학과 연구진이 개발함. 사전 학습된 체크포인트는 주로 영어임.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: 컬럼비아 대학교의 연구 프로젝트', anchor: 'history' },
      { label: 'StyleTTS 2가 실제로 하는 일', anchor: 'what-it-does' },
      { label: 'StyleTTS 2 설치 및 실행: 단계별 안내', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스 및 비용', anchor: 'license-cost' },
      { label: 'StyleTTS 2가 적합하지 않은 경우', anchor: 'limitations' },
      { label: 'StyleTTS 2의 대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 자료', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'StyleTTS 2는 스타일 확산과 적대적 학습을 통해 자연스러운 음성을 만들어내는 컬럼비아 대학교의 MIT 라이선스 연구급 텍스트 음성 변환 모델로, 사전 학습된 가중치에는 문서 수준의 공개 조건이 있으며 2024년 3월 7일 이후 GitHub 커밋이 없습니다.',
          },
          {
            type: 'plain-terms',
            text: '기업이 아닌 대학 연구진이 만든, 텍스트를 매우 자연스러운 음성으로 바꿔주는 무료 다운로드 가능한 AI 모델입니다. 코드 라이선스상 상업적 사용도 무료이지만, 자체 안내문에서는 청취자에게 음성이 합성된 것임을 알리도록 요구하고 있으며, 더 이상 아무도 버그를 적극적으로 수정하지 않는 것으로 보입니다.',
          },
        ],
        items: [
          'NeurIPS 논문에 따르면 스타일 확산과 적대적 학습을 통해 자연스러운 음성을 생성하며, 표준 단일 화자 벤치마크에서 인간 녹음과 동등하거나 이를 능가함.',
          '코드 라이선스: MIT. 사전 학습된 모델 가중치는 README에 별도의 공개 조건이 있으며, MIT 라이선스 텍스트에는 명시되어 있지 않음.',
          'LibriTTS 다중 화자 체크포인트를 통해 5~10초의 참조 클립으로 제로샷 스타일 전송(권장 15~30초).',
          '공식 추론에는 GPL-3.0 라이선스인 espeak-ng가 필요함. 커뮤니티 pip 패키지는 이를 피하지만 최신 릴리스는 2024년 1월 11일임.',
          '공식 저장소는 2024년 3월 7일 이후 커밋 없음. 아카이브되지 않았으며 GitHub 스타는 6,300개 이상.',
          '사전 학습된 체크포인트는 주로 영어임. 텍스트 정렬기(text aligner)는 일본어 및 중국어 말뭉치로도 학습되었으며, 미세 조정 없이도 다른 언어에 어느 정도 일반화된다고 알려져 있음.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 프로젝트에 대한 GitHub 이슈(#37)는 사전 학습된 모델에 대한 README의 공개 요구 사항이 MIT 라이선스 파일 자체 외부에 있다고 지적했으며, 일부 독자는 이를 혼란스럽게 느낍니다. 배포 전에 LICENSE 파일과 README의 모델 사용 섹션을 직접 읽어보십시오 — 자세한 내용은 아래 라이선스 및 비용 섹션을 참고하십시오.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: 컬럼비아 대학교의 연구 프로젝트',
        content: [
          '**StyleTTS 2는 컬럼비아 대학교 전기공학과의 연구진**—Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler, Nima Mesgarani—**에 의해 만들어졌으며**, "StyleTTS 2: Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models"라는 제목의 NeurIPS 2023 논문으로 발표되었습니다.',
          '**논문의 핵심 주장은 스타일 확산(발화 스타일을 단일 고정 벡터가 아닌 잠재 확률 분포로 모델링)과 대형 사전 학습된 음성 언어 모델에 대한 적대적 학습을 결합하면 이전 접근 방식보다 인간과 유사한 발화 변이를 더 정확하게 모델링할 수 있다는 것입니다.** 단일 화자 벤치마크인 LJSpeech에서 논문은 StyleTTS 2가 청취자 평가에서 실제 인간 음성 녹음과 동등하거나 이를 능가한다고 보고합니다. 다중 화자 데이터셋인 LibriTTS에서는 제로샷 화자 적응에서 이전에 공개된 모델들을 능가한다고 보고합니다.',
          '**공개 GitHub 저장소 [yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2)는 6,300개 이상의 스타를 모았으며**, 아카이브로 표시되어 있지는 않습니다 — 그러나 PromptQuorum이 프로젝트의 공개 커밋 이력을 확인한 결과, 저장소의 메인 브랜치에는 2024년 3월 7일 이후 커밋이 없었습니다. 이는 상업적으로 유지보수되는 오픈소스 제품이라기보다는 대학 연구 발표와 일치하는 패턴입니다. 코드, 논문, 사전 학습된 체크포인트는 연구와 함께 공개되었으며, 지속적인 기능 개발이나 버그 수정 릴리스에 대한 약속은 없습니다.',
          '**개발자 Sidharth Rajaram이 만든 커뮤니티 관리 pip 패키지 `styletts2`**는 원래의 연구 코드를 설치 가능한 패키지(`pip install styletts2`)로 감싸며, GPL-3.0 라이선스인 espeak-ng 음소화 도구를 MIT 라이선스인 gruut 라이브러리로 대체하여 전체 설치 체인을 관대한 라이선스로 유지합니다. [PyPI](https://pypi.org/project/styletts2/)에서 가장 최근 릴리스는 버전 0.1.6으로, 2024년 1월 11일에 게시되었습니다 — 이 리뷰 시점 기준 2년 반 이상 된 것이며, 원래 컬럼비아 대학교 연구 코드와는 별개의 서드파티 프로젝트입니다.',
        ],
        faqs: [
          {
            q: 'StyleTTS 2는 누가 만들었습니까?',
            a: 'StyleTTS 2는 컬럼비아 대학교 전기공학과 연구진인 Yinghao Aaron Li, Cong Han, Vinay S. Raghavan, Gavin Mischler, Nima Mesgarani가 만들었으며, NeurIPS 2023 논문으로 발표되었습니다.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'StyleTTS 2가 실제로 하는 일',
        content: [
          'StyleTTS 2는 입력 텍스트로부터 멜 스펙트로그램(엔드투엔드 구성에서는 원시 파형)을 생성하는 텍스트 음성 변환 모델로, 잠재적인 "스타일" 벡터를 결정론적으로 예측하는 대신 확산 모델을 사용해 샘플링합니다 — 논문은 이 메커니즘이 더 자연스럽고 인간과 유사한 운율을 만들어낸다고 설명합니다.',
        ],
        items: [
          '**자연스러운 운율을 위한 스타일 확산.** 텍스트로부터 단일 고정 스타일 임베딩을 예측하는 대신, StyleTTS 2는 확산을 통해 학습된 스타일 확률 분포에서 샘플링합니다. 논문에 따르면 이는 결정론적 접근 방식보다 음높이, 리듬, 강조에서 더 자연스러운 변화를 만들어냅니다.',
          '**음성 언어 모델에 대한 적대적 학습.** 학습 과정은 TTS 모델을 판별자 역할을 하는 대형 사전 학습된 음성 언어 모델(SLM)과 경쟁시킵니다. 논문은 이 기법이 LJSpeech 벤치마크에서 인간 녹음 품질과의 남은 격차를 좁혔다고 평가합니다.',
          '**공식적으로 공개된 두 개의 사전 학습 체크포인트.** [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech)(단일 영어 화자, 24kHz)와 [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS)(다중 영어 화자) 모두 Hugging Face에 호스팅되어 있습니다.',
          '**참조 오디오로부터의 제로샷 스타일 전송.** LibriTTS 다중 화자 체크포인트는 참조 오디오 클립에서 포착한 스타일로 새로운 텍스트를 합성할 수 있습니다 — 프로젝트 자체 문서와 서드파티 가이드는 최소 5~10초를 설명하며, 정확한 음색, 운율, 발음을 위해 깨끗한 단일 화자 참조 오디오 15~30초를 권장합니다.',
          '**주로 영어인 사전 학습 체크포인트와 일부 다국어 기초 작업.** 공식적으로 공개된 체크포인트는 영어 데이터셋(LJSpeech, LibriTTS)으로 학습되었습니다. 논문은 텍스트 정렬기 구성 요소가 일본어(JVS)와 중국어(AiShell) 말뭉치로도 사전 학습되었으며 "미세 조정 없이도 대부분의 다른 언어에서 잘 작동한다"고 언급하며, 14개 언어를 다루는 다국어 PL-BERT 모델을 직접 비영어권 StyleTTS 2 모델을 학습시키기 위한 출발점으로 참조하고 있습니다 — 하지만 공식적으로 공개된 즉시 사용 가능한 비영어 체크포인트는 없습니다.',
        ],
        note: 'StyleTTS 2는 공개된 사전 학습 체크포인트를 갖춘 연구용 코드베이스이며, 세련된 소비자 제품이 아닙니다 — 설치하고 실행하려면 Piper 같은 단일 목적의 pip 설치 가능한 도구보다 더 많은 설정이 필요합니다.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'StyleTTS 2 설치 및 실행: 단계별 안내',
        content: '이 안내는 사전 학습된 체크포인트로 추론을 실행하기 위해 프로젝트 자체가 문서화한 설정을 따릅니다.',
        numberedItems: [
          {
            title: '저장소를 클론하고 의존성을 설치합니다.',
            whyItMatters: '`git clone https://github.com/yl4579/StyleTTS2.git && cd StyleTTS2 && pip install -r requirements.txt`를 실행합니다. 이는 프로젝트 자체 requirements 파일에 나열된 핵심 Python 의존성을 설치합니다.',
          },
          {
            title: 'phonemizer와 espeak-ng를 설치합니다.',
            whyItMatters: '`pip install phonemizer`를 실행하고, Linux에서는 `sudo apt-get install espeak-ng`(또는 사용 중인 OS에 맞는 명령)를 실행합니다. espeak-ng 자체가 GPL-3.0 라이선스라는 점에 유의하십시오 — 이것이 StyleTTS 2 코드 자체뿐 아니라 추론 경로에도 왜 중요한지는 라이선스 및 비용 섹션을 참고하십시오.',
          },
          {
            title: '사전 학습된 체크포인트를 다운로드합니다.',
            whyItMatters: 'Hugging Face에서 [StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech/tree/main)(단일 화자) 또는 [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS/tree/main)(다중 화자, 스타일 전송 지원)를 프로젝트 디렉터리로 다운로드합니다.',
          },
          {
            title: '제공된 노트북을 통해 추론을 실행합니다.',
            whyItMatters: '프로젝트에는 `Demo/Inference_LJSpeech.ipynb`와 `Demo/Inference_LibriTTS.ipynb`가 포함되어 있습니다 — 다운로드한 체크포인트와 일치하는 것을 Jupyter에서 열어 모델을 로드하고 첫 번째 샘플을 합성합니다.',
          },
          {
            title: '(대안) 더 간단한 MIT 전용 설치 체인을 위해 커뮤니티 pip 패키지를 사용합니다.',
            whyItMatters: '`pip install styletts2`를 실행한 다음, `from styletts2 import tts; my_tts = tts.StyleTTS2(); my_tts.inference("안녕하세요.", output_wav_file="test.wav")`를 실행합니다. 이 서드파티 패키지(최신 릴리스 2024년 1월 11일)는 espeak-ng 대신 MIT 라이선스인 gruut 라이브러리를 사용해 GPL-3.0 의존성을 피하지만, 그 대가로 마찬가지로 휴면 상태인 비공식 래퍼에 의존하게 됩니다.',
          },
          {
            title: '(선택 사항) 스타일 전송을 위한 참조 클립을 제공합니다.',
            whyItMatters: 'LibriTTS 체크포인트를 사용할 때, `target_voice_path` 인자(커뮤니티 패키지) 또는 동등한 참조 오디오 파라미터(공식 노트북)에 깨끗한 15~30초 단일 화자 WAV 파일을 지정하면 해당 포착된 스타일로 새 텍스트를 합성할 수 있습니다.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '다음 예시는 커뮤니티 pip 패키지의 단순화된 API와 공식 프로젝트의 추론 노트북에서 사용되는 패턴을 모두 보여줍니다.',
        ],
        codeBlock: `# 가장 간단한 경로: 커뮤니티 pip 패키지(MIT 전용 의존성 체인,
# 최신 릴리스 2024-01-11 — 의존하기 전에 여전히 작동하는지 확인하십시오)
pip install styletts2

from styletts2 import tts

my_tts = tts.StyleTTS2()
my_tts.inference(
    "Hello there, this is a natural-sounding synthesized sentence.",
    output_wav_file="test.wav",
)

# 참조 클립으로부터의 제로샷 스타일 전송(LibriTTS 유형 체크포인트)
my_tts.inference(
    "The same text, now spoken in a captured reference style.",
    target_voice_path="reference_voice.wav",
    output_wav_file="styled_test.wav",
)

# 커스텀 체크포인트 및 설정 경로
custom_tts = tts.StyleTTS2(
    model_checkpoint_path="/path/to/epochs_2nd_00020.pth",
    config_path="/path/to/config.yml",
)

# --- 공식 저장소 경로(espeak-ng, GPL-3.0 필요) ---
# git clone https://github.com/yl4579/StyleTTS2.git
# cd StyleTTS2 && pip install -r requirements.txt
# pip install phonemizer && sudo apt-get install espeak-ng
# 그런 다음 Jupyter에서 Demo/Inference_LJSpeech.ipynb 또는
# Demo/Inference_LibriTTS.ipynb를 열어 다운로드한 체크포인트에 대해
# 제공된 셀을 실행합니다.`,
        codeLanguage: 'python',
        note: '커뮤니티 `styletts2` 패키지의 정확한 API(`tts.StyleTTS2()`, `.inference()`, `target_voice_path`)는 [PyPI 페이지](https://pypi.org/project/styletts2/)와 README에 문서화되어 있으며, 버전 0.1.6(2024년 1월 11일)에 대해 마지막으로 업데이트되었습니다 — 스크립트를 작성하기 전에 여전히 일치하는지 확인하십시오. 공식 저장소의 노트북 기반 경로는 [프로젝트 README](https://github.com/yl4579/StyleTTS2)에 직접 문서화되어 있습니다.',
        items: [
          '**스타일 전송에는 참조 오디오 품질이 중요합니다.** 깨끗한 단일 화자 15~30초 클립은 짧거나, 잡음이 있거나, 다중 화자인 참조보다 눈에 띄게 더 나은 스타일 전송을 만들어냅니다.',
          '**두 개의 별도 의존성 체인이 존재합니다.** 공식 저장소의 노트북 경로는 GPL-3.0 라이선스인 espeak-ng를 끌어들입니다. 커뮤니티 pip 패키지는 대신 gruut를 사용해 이를 피합니다 — 둘 중 하나를 중심으로 도구를 구축하기 전에 라이선스 요구 사항에 맞는 체인을 선택하십시오.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스 및 비용',
        content: [
          '**StyleTTS 2의 코드는 MIT 라이선스를 따릅니다.** 이는 [공식 저장소](https://github.com/yl4579/StyleTTS2)의 `LICENSE` 파일을 통해 확인되었습니다. MIT는 관대한 라이선스로, 최소한의 제한으로 코드를 사용, 수정, 재배포할 수 있으며 상업적 사용도 포함됩니다.',
          '**사전 학습된 모델 가중치는 LICENSE 파일 자체가 아닌 README에 명시된, 라이선스와는 별개의 조건을 갖고 있습니다.** 프로젝트의 README는 사용자에게 "합성하려는 목소리를 사용할 허가가 없는 한, 음성 샘플이 StyleTTS 2 모델에 의해 합성되었음을 청취자에게 알릴 것"을 요청합니다. 이는 문서 수준의 요청이며, 공식적인 라이선스 조항이 아닙니다 — 이 프로젝트에 대한 [GitHub 이슈(#37)](https://github.com/yl4579/StyleTTS2/issues/37)는 README의 모델 사용 섹션까지 읽지 않는 독자에게는 저장소의 라이선스 배지와 LICENSE 파일이 MIT 조건만 적용된다고 암시하기 때문에 이것이 잠재적으로 혼란스러울 수 있다고 명시적으로 지적했습니다. PromptQuorum은 공개 이슈 스레드에서 이 모호함을 해소하는 유지 관리자의 답변을 찾지 못했습니다. 공개 조건을 저자의 실제이고 문서화된 요청으로 취급하고 이를 준수하되, 이것이 코드 자체에 대한 공식 MIT 부여 외부에 있다는 점을 이해하십시오. 이는 상업적 사용 전에 짚고 넘어갈 만한, 실제로 이례적인 구조입니다.',
          '**공식 추론을 실행하려면 GPL-3.0 라이선스 의존성인 espeak-ng가 필요합니다.** 프로젝트 자체의 설치 지침은 `pip install phonemizer`에 더해 시스템 수준의 `espeak-ng` 설치를 요구하며, espeak-ng는 GPL-3.0 라이선스입니다. GPL-3.0은 MIT와는 다른 배포 의무를 갖는 카피레프트 라이선스입니다. 수정되지 않은 외부 시스템 의존성으로 espeak-ng를 사용하는 것은 일반적으로 그 수정된 소스를 정적으로 링크하거나 재배포하는 것과는 다르게 취급되지만, 정확한 경계는 배포 방식에 따라 달라집니다. 커뮤니티 pip 패키지 `styletts2`는 espeak-ng 대신 MIT 라이선스인 gruut 라이브러리를 사용함으로써 이 특정 문제를 피합니다 — 완전히 관대한 라이선스의 의존성 체인을 원한다면 실질적인 차이이지만, 그 대가로 공식 저장소보다 최신 릴리스 날짜(2024년 1월 11일)가 더 오래된 서드파티 패키지에 의존하게 됩니다.',
          '이 중 어느 것도 법률 자문이 아닙니다. 상업 제품에 StyleTTS 2를 출시하기 전에 LICENSE 파일, README의 모델 사용 섹션을 읽고 구체적인 배포에 대해 변호사와 상담하십시오.',
        ],
        faqs: [
          {
            q: 'StyleTTS 2는 어떤 라이선스를 사용합니까?',
            a: 'StyleTTS 2의 코드는 MIT 라이선스를 따릅니다. 사전 학습된 모델 가중치는 프로젝트의 README에 별도의, 라이선스와는 별개의 조건(화자의 허가가 없는 한 합성 음성임을 공개해야 함)을 갖고 있으며, 이는 공식 MIT 라이선스 텍스트의 일부가 아닙니다 — 이 프로젝트에 대한 GitHub 이슈는 이러한 구분이 잠재적으로 혼란스러울 수 있다고 지적했습니다. 이는 법률 자문이 아닙니다. 상업적 사용 전에 LICENSE 파일과 README를 직접 읽어보십시오.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'StyleTTS 2가 적합하지 않은 경우',
        content: [
          'StyleTTS 2는 출력 품질이 진정으로 뛰어난 연구급 모델이지, 세련되고 적극적으로 유지보수되는 소비자 제품이 아닙니다. 다음과 같은 상황에는 적합하지 않은 도구입니다:',
        ],
        items: [
          '**간단한 pip 설치 후 바로 사용하는 경험을 원하는 독자.** `pip install piper-tts`와 단일 CLI 명령만으로 작동하는 오디오를 얻을 수 있는 [Piper](/ko/power-local-llm/piper-tts-review)와 달리, StyleTTS 2의 공식 경로는 연구 저장소 클론, phonemizer 설치, 시스템 수준 espeak-ng 의존성, Jupyter 노트북 실행을 수반합니다 — 눈에 띄게 더 높은 설정 장벽입니다.',
          '**ML 엔지니어링 노력 없는 프로덕션 배포.** 유지보수되는 웹 서버 모드가 없고, 공식 Docker 이미지도 없으며, 지속적인 지원을 뒷받침하는 회사도 없습니다. StyleTTS 2를 프로덕션에 배포하는 사람은 연구 코드 주변에 자체 서빙 레이어를 작성하고 유지보수해야 할 것으로 예상해야 합니다.',
          '**보장된 지속적인 버그 수정이나 기능 업데이트.** 공식 저장소에 2024년 3월 7일 이후 커밋이 없고 커뮤니티 pip 패키지의 최신 릴리스가 2024년 1월 11일이므로, 두 의존성 체인 모두 적극적인 유지보수가 이루어진다고 가정하지 마십시오 — 발생하는 문제에 대해 스스로 해결해야 할 가능성을 예산에 포함하십시오.',
          '**즉시 사용 가능한 비영어 음성.** 공식적으로 공개된 사전 학습 체크포인트(LJSpeech, LibriTTS)는 영어 전용입니다. 논문의 다국어 텍스트 정렬기와 PL-BERT에 대한 설명에 따르면 비영어 모델을 직접 학습시키는 것은 아키텍처상 가능하지만 자체 학습 실행이 필요합니다 — 프로젝트에서 다운로드 가능한 비영어 체크포인트는 없습니다.',
          '**다운로드하는 모든 것에 대한 단일하고 명확한 라이선스 부여.** 코드(MIT)와 사전 학습된 가중치(MIT에 README 공개 조건 추가)가 약간 다르게 규정되고 공식 추론 경로가 GPL-3.0 의존성을 끌어들이기 때문에, StyleTTS 2는 Bark(완전히 MIT, 추가 조건 없음) 같은 프로젝트가 가진 단일하고 간단한 라이선스 이야기를 제공하지 않습니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'StyleTTS 2의 대안',
        itemHeadings: true,
        columns: ['도구', '최적 용도', '라이선스'],
        rows: [
          {
            '도구': '[Piper](/ko/power-local-llm/piper-tts-review)',
            '최적 용도': '간단한 pip 설치 후 바로 사용, 가장 빠른 CPU 전용 합성, Raspberry Pi에서 실시간 동작',
            '라이선스': 'GPL-3.0-or-later',
          },
          {
            '도구': '[XTTS v2](/ko/power-local-llm/xtts-v2-review)',
            '최적 용도': '6초 참조 오디오로부터의 패키지화된 보이스 클로닝, 17개 언어 지원',
            '라이선스': 'CPML(비상업적)',
          },
          {
            '도구': '[Coqui TTS](/ko/power-local-llm/coqui-tts-review)',
            '최적 용도': '폭넓은 언어 지원과 유지보수되는 포크를 갖춘 유연한 멀티 백엔드 툴킷',
            '라이선스': 'MPL-2.0',
          },
          {
            '도구': '[Bark](/ko/power-local-llm/bark-tts-review)',
            '최적 용도': '표현력 있는 비언어 오디오 — 웃음, 한숨, 주변음, 단일하고 명확한 MIT 라이선스',
            '라이선스': 'MIT',
          },
          {
            '도구': '[ElevenLabs](https://elevenlabs.io)',
            '최적 용도': '상업적 보이스 클로닝과 적극적인 지원을 갖춘 관리형 클라우드 API, 셀프 호스팅 불필요',
            '라이선스': '독점(유료 클라우드 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'StyleTTS 2는 무엇입니까?',
            a: 'StyleTTS 2는 컬럼비아 대학교 연구진이 만든 오픈소스 텍스트 음성 변환 모델로, 스타일 확산과 대형 음성 언어 모델을 활용한 적대적 학습을 통해 자연스러운 음성을 생성하며, NeurIPS 2023 논문으로 발표되었습니다.',
          },
          {
            q: 'StyleTTS 2는 상업적으로 무료로 사용할 수 있습니까?',
            a: '코드는 MIT 라이선스이며 상업적 사용을 허용합니다. 사전 학습된 모델 가중치는 README에 별도의, 라이선스와는 별개의 조건이 있으며, 화자의 허가가 없는 한 합성 음성임을 공개하도록 요구합니다. 이는 법률 자문이 아닙니다. 상업적 배포 전에 LICENSE 파일과 README를 직접 읽어보십시오.',
          },
          {
            q: 'StyleTTS 2는 음성을 복제할 수 있습니까?',
            a: 'LibriTTS 다중 화자 체크포인트는 참조 오디오 클립(최소 5~10초, 권장 15~30초)으로부터의 제로샷 스타일 전송을 지원하며, 이는 정신적으로 보이스 클로닝과 유사합니다. XTTS v2처럼 간단한 한 줄짜리 클로닝 기능으로 패키징되어 있지는 않으며, 사용하려면 노트북 기반 공식 워크플로우나 커뮤니티 pip 패키지가 필요합니다.',
          },
          {
            q: 'StyleTTS 2는 아직 유지보수되고 있습니까?',
            a: '공식 GitHub 저장소는 아카이브로 표시되어 있지 않지만, PromptQuorum은 2024년 3월 7일 이후의 커밋을 찾지 못했습니다. 설치를 간소화하는 커뮤니티 pip 패키지는 2024년 1월 11일에 마지막으로 릴리스되었습니다. 둘 다 적극적으로 개발되는 소프트웨어가 아니라 휴면 상태의 연구 산출물로 취급하십시오.',
          },
          {
            q: 'StyleTTS 2는 영어 외의 언어를 지원합니까?',
            a: '공식적으로 공개된 사전 학습 체크포인트(LJSpeech, LibriTTS)는 영어 전용입니다. 논문은 텍스트 정렬기 구성 요소가 일본어와 중국어 말뭉치로도 학습되었으며 미세 조정 없이도 다른 언어에 어느 정도 합리적으로 일반화된다고 언급하며, 14개 언어를 다루는 다국어 PL-BERT 모델을 자체 비영어 모델을 학습시키기 위한 출발점으로 참조합니다 — 하지만 공식적으로 공개된 즉시 사용 가능한 비영어 체크포인트는 없습니다.',
          },
          {
            q: 'StyleTTS 2의 공식 설치에 espeak-ng가 필요한 이유는 무엇이며, 왜 중요합니까?',
            a: '공식 추론 경로는 텍스트를 음소로 변환하는 백엔드로 espeak-ng를 사용하는 phonemizer 라이브러리를 사용합니다. espeak-ng는 GPL-3.0 라이선스이며, 이는 MIT와는 다른 배포 의무를 갖는 카피레프트 라이선스입니다. 커뮤니티 pip 패키지(`styletts2`)는 대신 MIT 라이선스인 gruut 라이브러리를 사용해 이를 피하지만, 그 대가로 더 오래된 비공식 릴리스(마지막 업데이트 2024년 1월 11일)에 의존하게 됩니다.',
          },
          {
            q: 'StyleTTS 2는 XTTS v2와 비교해 어떻습니까?',
            a: 'StyleTTS 2의 코드는 MIT 라이선스이며 상업적으로 무료로 사용할 수 있습니다(가중치에 대한 README 공개 조건 포함). XTTS v2는 비상업적인 Coqui Public Model License를 따릅니다. StyleTTS 2의 공식 설정은 더 연구급이며 더 많은 수동 작업이 필요합니다. XTTS v2는 Coqui TTS 툴킷을 통해 더 간단하고 패키지화된 보이스 클로닝 API를 제공합니다. 라이선스 요구 사항과 설정 복잡성에 대한 감수 수준에 따라 선택하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'StyleTTS 2는 출력 품질 면에서 여전히 진정으로 인상적입니다. 스타일 확산과 적대적 학습을 결합한 접근 방식은 자체 NeurIPS 논문에서 LJSpeech 벤치마크에서 인간 녹음 품질과 동등하거나 이를 능가한다고 평가되며, 코드 라이선스(MIT)는 가능한 한 관대합니다. 대부분의 독자에게 쉽게 추천하기 어렵게 만드는 것은 이 핵심 모델을 둘러싼 모든 것입니다. 공식 MIT 부여 외부에 있는 사전 학습 가중치에 대한 문서 수준의 공개 조건, GPL-3.0 의존성을 끌어들이는 공식 추론 경로, 그 의존성을 피하지만 그 자체로 2년 반 이상 지난 커뮤니티 pip 패키지, 그리고 2024년 3월 7일 이후 공식 저장소에 커밋이 없다는 점입니다. 로컬에서 얻을 수 있는 최고의 자연스러운 영어 내레이션 품질을 원하고 연구급 설정과 유지보수되지 않는 의존성 체인을 감수할 수 있다면, StyleTTS 2는 이를 실현해 줍니다. 더 간단한 설치, 적극적인 유지보수, 또는 패키지화된 보이스 클로닝을 원한다면, 이 리뷰를 PromptQuorum의 빠른 CPU 전용 합성을 위한 [Piper](/ko/power-local-llm/piper-tts-review), 패키지화된 보이스 클로닝을 위한 [XTTS v2](/ko/power-local-llm/xtts-v2-review), 또는 완전히 관리되는 대안을 위한 [ElevenLabs 비교](/ko/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) 리뷰와 함께 참고하십시오. 이 리뷰는 PromptQuorum이 심층적으로 다룬 여섯 개의 로컬 음성 인식 및 음성 합성 엔진 중 마지막으로, [Whisper.cpp](/ko/power-local-llm/whisper-cpp-review), [Faster Whisper](/ko/power-local-llm/faster-whisper-review), Piper, [Coqui TTS](/ko/power-local-llm/coqui-tts-review), XTTS v2, [Bark](/ko/power-local-llm/bark-tts-review)와 나란히 위치합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 StyleTTS 2](https://github.com/yl4579/StyleTTS2) — 공식 저장소: README, LICENSE, 설치 지침, 커밋 이력.',
          '[StyleTTS 2 논문(arXiv)](https://arxiv.org/abs/2306.07691) — "Towards Human-Level Text-to-Speech through Style Diffusion and Adversarial Training with Large Speech Language Models", NeurIPS 2023 논문.',
          '[GitHub 이슈 #37: Possibly misleading license info](https://github.com/yl4579/StyleTTS2/issues/37) — MIT LICENSE 파일과 README의 모델 사용 공개 조건 사이의 커뮤니티가 지적한 불일치.',
          '[PyPI의 styletts2](https://pypi.org/project/styletts2/) — 커뮤니티가 관리하는 pip 패키지(Sidharth Rajaram), 버전 0.1.6, 2024년 1월 11일 게시.',
          '[StyleTTS2-LJSpeech](https://huggingface.co/yl4579/StyleTTS2-LJSpeech) 및 [StyleTTS2-LibriTTS](https://huggingface.co/yl4579/StyleTTS2-LibriTTS) — Hugging Face의 공식 사전 학습 체크포인트.',
          '[로컬 TTS 및 보이스 클로닝 라이선스](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 로컬 TTS 엔진 간 전체 라이선스 비교.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[XTTS v2 리뷰](/ko/power-local-llm/xtts-v2-review) — 6초 참조 오디오로부터의 패키지화된 보이스 클로닝, 비상업적 라이선스.',
          '[Bark TTS 리뷰](/ko/power-local-llm/bark-tts-review) — 단일하고 명확한 MIT 라이선스를 가진 표현력 있는 비언어 오디오 모델.',
          '[Piper TTS 리뷰](/ko/power-local-llm/piper-tts-review) — 빠르고 설치가 간단한 CPU 전용 로컬 TTS 대안.',
          '[Coqui TTS 리뷰](/ko/power-local-llm/coqui-tts-review) — 유연한 멀티 백엔드 툴킷과 커뮤니티가 유지보수하는 포크.',
          '[로컬 TTS 및 보이스 클로닝 라이선스: Piper, XTTS v2, F5-TTS, Coqui](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 주요 로컬 TTS 엔진 전반의 라이선스 심층 비교.',
          '[ElevenLabs 대 Piper 대 XTTS v2](/ko/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 셀프 호스팅 여부를 결정하는 독자를 위한 클라우드 대 로컬 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'StyleTTS 2 리뷰(2026): 자연스러운 음성을 위한 컬럼비아 대학교의 MIT 라이선스 연구 모델',
      description:
        'StyleTTS 2 리뷰: 컬럼비아 대학교의 MIT 라이선스 스타일 확산 음성 모델. 실제 설치 명령어, 가중치의 라이선스 미묘한 차이, 2026년 기준 유지보수 상태(2024년 3월 이후 커밋 없음)를 다룹니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/styletts-2-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 연구급 텍스트 음성 변환 모델을 평가하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'StyleTTS 2' },
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Style diffusion' },
        { '@type': 'Thing', name: 'Columbia University' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/styletts-2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'StyleTTS 2 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/styletts-2-review' },
      ],
    },
  },
}
