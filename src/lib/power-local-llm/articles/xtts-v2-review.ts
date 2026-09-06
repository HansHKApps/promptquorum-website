// XTTS v2 Review: Coqui's Multilingual Voice-Cloning Model
// Slug: xtts-v2-review
// Companion to: local-tts-voice-cloning-piper-coqui-xtts.ts (licensing deep dive),
// elevenlabs-vs-local-tts-piper-xtts.ts (cloud vs. local TTS comparison), and coqui-tts-review.ts (the toolkit that runs this model)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-en.webp',
    title: 'XTTS v2 Review (2026): Multilingual Voice Cloning from 6 Seconds of Audio',
    seoTitle: 'XTTS v2 Review 2026: Multilingual Voice Cloning',
    intro:
      'XTTS v2 is a multilingual voice-cloning model released by Coqui, distributed on [Hugging Face](https://huggingface.co/coqui/XTTS-v2), that clones a voice from as little as 6 seconds of reference audio and speaks it back across 17 languages. It runs through the [Coqui TTS toolkit](/power-local-llm/coqui-tts-review) — the actively maintained fork is [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — or can be used standalone via the model weights. This review covers what XTTS v2 actually does, real usage commands, its license (the Coqui Public Model License, CPML, which is non-commercial), and where it is and is not the right tool, since Coqui AI, the company that originally released it, shut down its paid services in December 2023.',
    metaDescription:
      'XTTS v2 review: Coqui\'s multilingual voice-cloning model, clones a voice from 6 seconds of audio across 17 languages. Real usage commands, the non-commercial CPML license, and honest limits for 2026.',
    twitterDescription:
      'XTTS v2 review 2026: Coqui\'s voice-cloning model clones a voice from just 6 seconds of reference audio and speaks it in 17 languages. Real commands, the non-commercial CPML license explained, and when to use something else instead.',
    audience:
      'Developers and researchers evaluating local, self-hosted voice cloning for personal projects, research, or prototyping, who need to understand the non-commercial license before building anything real on top of it.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 review',
    targetKeywords: [
      'xtts v2 review',
      'xtts v2',
      'xtts v2 voice cloning',
      'xtts v2 license',
      'xtts v2 commercial use',
      'coqui xtts v2',
      'xtts v2 languages',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 is a multilingual voice-cloning model released by Coqui that clones a voice from as little as 6 seconds of reference audio and generates speech in that voice across 17 languages.** It runs through the [Coqui TTS toolkit](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`, then `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). Its license, the Coqui Public Model License (CPML), is **non-commercial** — and because Coqui AI, the company, shut down its paid services in December 2023, there is currently no active pathway to a commercial license. For a full licensing comparison across local TTS engines, see PromptQuorum\'s [local TTS licensing guide](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'What is XTTS v2 and can I use it commercially?',
        answer:
          'XTTS v2 is worth using if you want the highest-quality local voice cloning available, from just 6 seconds of reference audio, generating speech in 17 languages including cross-lingual cloning (clone a voice in English, speak it in Spanish). It runs through the Coqui TTS toolkit or directly via its Hugging Face model weights, with GPU acceleration recommended and sub-200ms streaming latency documented by its maintainers. No, you cannot use it commercially without a separate agreement: its license, the Coqui Public Model License (CPML), explicitly restricts use to non-commercial purposes — personal projects, research, and hobby work. Coqui AI, the company that released XTTS v2, shut down its paid services in December 2023, so there is currently no entity offering a commercial license for it. Choose Piper or Kokoro instead if you need a permissively licensed engine for a commercial product; neither clones voices, but both are free for commercial use.',
        bullets: [
          'Clones a voice from as little as 6 seconds of reference audio, per its official Hugging Face model card.',
          'Speaks the cloned voice in 17 languages, including cross-lingual cloning across those languages.',
          'License: Coqui Public Model License (CPML), non-commercial — personal, research, and hobby use only.',
          'No active commercial licensing path: Coqui AI, the releasing company, shut down its paid services in December 2023.',
          'Runs through the Coqui TTS toolkit (pip install coqui-tts); supports streaming with sub-200ms latency to first audio.',
          'GPU strongly recommended; runs on CPU but at meaningfully lower speed.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What XTTS v2 Actually Does', anchor: 'what-it-does' },
      { label: 'Real Usage Examples', anchor: 'usage-examples' },
      { label: 'License and Commercial Use', anchor: 'license-cost' },
      { label: 'What XTTS v2 Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to XTTS v2', anchor: 'alternatives' },
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
            text: 'XTTS v2 is Coqui\'s multilingual voice-cloning model that clones a voice from 6 seconds of reference audio and speaks it in 17 languages, licensed under the non-commercial Coqui Public Model License (CPML), with no active commercial licensing path since Coqui AI, the releasing company, shut down its paid services in December 2023.',
          },
          {
            type: 'plain-terms',
            text: 'It is an AI model that listens to a short clip of someone talking and can then generate new sentences in that same voice, in 17 different languages — free for personal and research use, but not for a paid product without a separate agreement that currently does not exist.',
          },
        ],
        items: [
          'Clones a voice from as little as 6 seconds of reference audio, across 17 languages.',
          'Runs through the Coqui TTS toolkit (`pip install coqui-tts`) or directly via its Hugging Face model weights.',
          'License: Coqui Public Model License (CPML) — non-commercial only.',
          'No active commercial licensing path: Coqui AI shut down its paid services in December 2023.',
          'Documented sub-200ms streaming latency to first audio; GPU strongly recommended.',
          'Requires accepting the CPML — set `COQUI_TOS_AGREED=1` to do so non-interactively in Docker or CI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The CPML is not the same license as the Coqui TTS toolkit that runs XTTS v2 — the toolkit is MPL-2.0, but this specific model\'s weights and outputs are non-commercial. See the License and Commercial Use section below.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'What XTTS v2 Actually Does',
        content: [
          'XTTS v2 is a GPT-based, cross-lingual voice-cloning text-to-speech model. Given a short reference audio clip and target text, it generates speech in the cloned voice, including in a different language than the reference audio.',
        ],
        items: [
          '**Few-second voice cloning.** A single 6-second reference audio clip is enough to clone a voice, per Coqui\'s official model card — no fine-tuning or training run is required for a new voice.',
          '**17-language support with cross-lingual cloning.** Supported languages are English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Russian, Dutch, Czech, Arabic, Chinese (zh-cn), Japanese, Hungarian, Korean, and Hindi — you can clone a voice from English audio and generate speech in any of the other 16 languages with that same cloned voice.',
          '**Streaming inference.** XTTS v2 supports streaming synthesis with sub-200ms latency to first audio, documented since the feature was introduced in Coqui TTS v0.20.0 — useful for interactive voice applications where waiting for a full audio file to render is too slow.',
          '**Runs via the Coqui TTS toolkit.** The primary supported way to run XTTS v2 is through [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`), which exposes it as `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`.',
          '**Speaker embedding reuse.** Beyond passing a raw reference clip each time, the toolkit supports computing and reusing a speaker\'s latent embedding, avoiding recomputation for repeated synthesis with the same cloned voice.',
        ],
        note: 'XTTS v2 is a model, not a toolkit — for the software that runs it (and other models), see PromptQuorum\'s dedicated [Coqui TTS review](/power-local-llm/coqui-tts-review).',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples',
        content: [
          'These commands use the Coqui TTS toolkit\'s documented Python API, the primary supported way to run XTTS v2.',
        ],
        codeBlock: `# Install the toolkit
pip install coqui-tts

# Accept the CPML non-interactively (required for Docker/CI; otherwise an
# interactive prompt appears on first load)
export COQUI_TOS_AGREED=1

# Python API: clone a voice and generate speech
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# Same-language cloning
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# Cross-lingual cloning: clone from English audio, speak Spanish
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# Streaming synthesis (low latency to first audio)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'The exact streaming API method name and signature can change between toolkit versions — check the current [Coqui TTS documentation](https://github.com/idiap/coqui-ai-TTS) before deploying. The `COQUI_TOS_AGREED=1` environment variable and `speaker_wav`/`language` arguments are documented in the toolkit\'s own README.',
        items: [
          '**Reference audio quality matters.** A clean 6-second clip of a single speaker with no background noise or music produces a noticeably better clone than a short, noisy, or multi-speaker clip.',
          '**Non-interactive CPML acceptance** is required the first time XTTS v2 loads in an unattended environment (Docker, CI) — set `COQUI_TOS_AGREED=1` before that first load.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'License and Commercial Use',
        content: [
          '**XTTS v2\'s model weights and generated audio outputs are licensed under the Coqui Public Model License (CPML) 1.0.0**, confirmed via the license file published alongside the model on [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt). The CPML explicitly states it "allows only non-commercial use of a machine learning model and its outputs" — permitted uses include personal projects, academic research, and hobby work, so long as you do not receive direct or indirect payment tied to that use.',
          '**There is currently no active commercial licensing path for XTTS v2.** The model card lists a contact address, info@coqui.ai, for commercial licensing inquiries, but Coqui AI, the company, shut down its paid services in December 2023 — PromptQuorum could not confirm that this address is actively staffed or that a commercial license is obtainable today. Treat XTTS v2 as non-commercial only unless you independently confirm otherwise before shipping a paid product.',
          '**The CPML applies specifically to the XTTS v2 model weights and their outputs — not to the Coqui TTS toolkit code that runs the model**, which is separately licensed under MPL-2.0 and does permit commercial use with source-disclosure conditions on toolkit modifications. This paragraph explains the license\'s general shape; it is not legal advice — read the CPML yourself and consult a lawyer before any commercial deployment.',
        ],
        faqs: [
          {
            q: 'What license does XTTS v2 use?',
            a: 'XTTS v2 is released under the Coqui Public Model License (CPML) 1.0.0, a non-commercial license that applies to the model weights and their generated audio outputs. It permits personal, research, and hobby use, but prohibits commercial use — any paid product, SaaS tool, or client deliverable — without a separate agreement. This is not legal advice; read the CPML yourself before commercial use.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What XTTS v2 Is Not Good For',
        content: [
          'XTTS v2 is a high-quality voice-cloning model, not a general-purpose, commercially deployable TTS engine. It is the wrong tool for the following situations:',
        ],
        items: [
          '**Any commercial product without a confirmed license.** The CPML is non-commercial, and there is currently no confirmed, active pathway to a commercial license following Coqui AI\'s 2023 shutdown. Do not ship XTTS v2 in a paid product, ad-supported app, or client deliverable without independently confirming licensing terms first.',
          '**CPU-only, resource-constrained real-time use.** XTTS v2 does support low-latency streaming, but that performance assumes GPU acceleration; on CPU alone it is meaningfully slower than a lightweight engine like [Piper](/power-local-llm/piper-tts-review), and may not be practical for real-time use on modest hardware such as a Raspberry Pi.',
          '**Cloning a voice from very short or noisy audio.** While 6 seconds is the documented minimum, a noisy, compressed, or multi-speaker reference clip produces a noticeably worse clone than a clean, single-speaker recording.',
          '**A language outside its supported 17.** XTTS v2 supports exactly English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Russian, Dutch, Czech, Arabic, Chinese (zh-cn), Japanese, Hungarian, Korean, and Hindi — there is no official roadmap for additional languages as of publication.',
          '**Impersonating someone without consent.** Cloning a real person\'s voice without their knowledge or consent raises consent, right-of-publicity, and potentially fraud or impersonation concerns that are independent of the CPML\'s non-commercial restriction — those apply regardless of license terms, in personal and commercial use alike.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to XTTS v2',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Piper](/power-local-llm/piper-tts-review)',
            'Best fit': 'Fastest CPU-only synthesis, no voice cloning, real-time on a Raspberry Pi',
            'License': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[Coqui TTS toolkit](/power-local-llm/coqui-tts-review)',
            'Best fit': 'The software that runs XTTS v2 (and other models) with a broader, permissively licensed codebase',
            'License': 'MPL-2.0 (toolkit only)',
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
            'Best fit': 'Managed cloud API with commercial voice cloning and clear commercial licensing',
            'License': 'Proprietary (paid cloud API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is XTTS v2?',
            a: 'XTTS v2 is a multilingual voice-cloning text-to-speech model released by Coqui that clones a voice from as little as 6 seconds of reference audio and generates speech in that voice across 17 languages, including cross-lingual cloning.',
          },
          {
            q: 'Can I use XTTS v2 commercially?',
            a: 'Not without a separate agreement. XTTS v2 is licensed under the Coqui Public Model License (CPML), which permits personal, research, and hobby use but prohibits commercial use — any paid product, SaaS, ad-supported content, or client work. Coqui AI, the company that released it, shut down its paid services in December 2023, and PromptQuorum could not confirm an active commercial licensing pathway exists today. Treat XTTS v2 as non-commercial only.',
          },
          {
            q: 'How much reference audio does XTTS v2 need to clone a voice?',
            a: 'As little as 6 seconds of clean, single-speaker reference audio, per its official Hugging Face model card. A longer, cleaner clip generally produces a more accurate clone.',
          },
          {
            q: 'How many languages does XTTS v2 support?',
            a: 'Exactly 17: English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Russian, Dutch, Czech, Arabic, Chinese (zh-cn), Japanese, Hungarian, Korean, and Hindi. It supports cross-lingual cloning — clone a voice from audio in one of these languages and generate speech in any of the others.',
          },
          {
            q: 'How do I run XTTS v2?',
            a: 'Install the Coqui TTS toolkit with `pip install coqui-tts`, then load the model with `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. Set the `COQUI_TOS_AGREED=1` environment variable first if you need to accept the CPML license non-interactively, such as in a Docker container or CI pipeline.',
          },
          {
            q: 'Do I need a GPU to run XTTS v2?',
            a: 'A GPU is strongly recommended. XTTS v2 runs on CPU, but meaningfully slower — its documented sub-200ms streaming latency assumes GPU acceleration, and CPU-only use is not practical for real-time applications.',
          },
          {
            q: 'What is the difference between XTTS v2 and the Coqui TTS toolkit?',
            a: 'XTTS v2 is a specific voice-cloning model, licensed under the non-commercial CPML. The Coqui TTS toolkit is the software — a Python package and CLI — that runs XTTS v2 and other models, licensed separately under MPL-2.0, which does permit commercial use of the toolkit code itself.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'XTTS v2 remains one of the highest-quality local voice-cloning models available in 2026, and the combination of a 6-second cloning requirement, 17-language cross-lingual support, and sub-200ms streaming latency is genuinely capable for personal, research, and prototyping use. The decision that actually matters for most readers is the license: the Coqui Public Model License is unambiguously non-commercial, and with Coqui AI having shut down in December 2023, there is no confirmed active pathway to a commercial license today. If your use case is personal, academic, or a non-commercial prototype, XTTS v2 is a strong, well-documented choice. If you need commercial voice cloning, verify licensing terms independently before you build on it, or pair this review with PromptQuorum\'s coverage of [Piper](/power-local-llm/piper-tts-review) and [Bark](/power-local-llm/bark-tts-review) for permissively licensed alternatives, or the [ElevenLabs comparison](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) for a managed commercial option.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[XTTS v2 on Hugging Face](https://huggingface.co/coqui/XTTS-v2) — the model card: languages, cloning requirements, and license reference.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — the full Coqui Public Model License (CPML) 1.0.0 text.',
          '[idiap/coqui-ai-TTS on GitHub](https://github.com/idiap/coqui-ai-TTS) — the actively maintained toolkit that runs XTTS v2, with usage documentation.',
          '[Coqui TTS Review](/power-local-llm/coqui-tts-review) — PromptQuorum\'s dedicated review of the toolkit, including its post-shutdown maintenance history.',
          '[Local TTS & Voice Cloning Licenses](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — full licensing comparison across local TTS engines.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Coqui TTS Review](/power-local-llm/coqui-tts-review) — the toolkit that runs XTTS v2, including its maintenance status after Coqui AI shut down.',
          '[Local TTS & Voice Cloning Licenses: Piper, XTTS v2, F5-TTS and Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — the licensing deep dive across all major local TTS engines.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — the cloud-vs-local comparison for readers deciding whether to self-host.',
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — the fast, permissively licensed, CPU-only local TTS alternative.',
          '[Bark TTS Review](/power-local-llm/bark-tts-review) — the expressive, non-speech-audio local TTS model, reviewed in the same depth.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2 Review (2026): Multilingual Voice Cloning from 6 Seconds of Audio',
      description:
        'XTTS v2 review: Coqui\'s multilingual voice-cloning model, clones a voice from 6 seconds of audio across 17 languages. Real usage commands, the non-commercial CPML license, and honest limits for 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'en',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local, self-hosted voice-cloning models' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'Voice cloning' },
        { '@type': 'Thing', name: 'Text-to-speech' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2 Review (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-de.webp',
    title: 'XTTS v2 im Test (2026): Mehrsprachiges Voice-Cloning aus 6 Sekunden Audio',
    seoTitle: 'XTTS v2 im Test 2026: Mehrsprachiges Voice-Cloning',
    intro:
      'XTTS v2 ist ein mehrsprachiges Voice-Cloning-Modell von Coqui, veröffentlicht auf [Hugging Face](https://huggingface.co/coqui/XTTS-v2), das eine Stimme aus nur 6 Sekunden Referenzaudio klont und sie in 17 Sprachen sprechen lässt. Es läuft über das [Coqui-TTS-Toolkit](/power-local-llm/coqui-tts-review) — der aktiv gepflegte Fork ist [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — oder kann eigenständig über die Modellgewichte verwendet werden. Dieser Test behandelt, was XTTS v2 tatsächlich tut, echte Nutzungsbefehle, seine Lizenz (die Coqui Public Model License, CPML, die nicht-kommerziell ist) und wo es das richtige Werkzeug ist und wo nicht — denn Coqui AI, das Unternehmen, das es ursprünglich veröffentlichte, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein.',
    metaDescription:
      'XTTS v2 im Test: Coquis mehrsprachiges Voice-Cloning-Modell, klont eine Stimme aus 6 Sekunden Audio in 17 Sprachen. Echte Befehle, die nicht-kommerzielle CPML-Lizenz und ehrliche Grenzen für 2026.',
    twitterDescription:
      'XTTS v2 im Test 2026: Coquis Voice-Cloning-Modell klont eine Stimme aus nur 6 Sekunden Referenzaudio und spricht sie in 17 Sprachen. Echte Befehle, die nicht-kommerzielle CPML-Lizenz erklärt, und wann Sie stattdessen etwas anderes nutzen sollten.',
    audience:
      'Entwickler und Forscher, die lokales, selbst gehostetes Voice-Cloning für private Projekte, Forschung oder Prototyping evaluieren und die nicht-kommerzielle Lizenz verstehen müssen, bevor sie etwas Reales darauf aufbauen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 im Test',
    targetKeywords: [
      'xtts v2 test',
      'xtts v2',
      'xtts v2 voice cloning',
      'xtts v2 lizenz',
      'xtts v2 kommerzielle nutzung',
      'coqui xtts v2',
      'xtts v2 sprachen',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 ist ein mehrsprachiges Voice-Cloning-Modell von Coqui, das eine Stimme aus nur 6 Sekunden Referenzaudio klont und Sprache in dieser Stimme in 17 Sprachen erzeugt.** Es läuft über das [Coqui-TTS-Toolkit](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`, dann `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). Seine Lizenz, die Coqui Public Model License (CPML), ist **nicht-kommerziell** — und da Coqui AI, das Unternehmen, seine kostenpflichtigen Dienste im Dezember 2023 einstellte, gibt es derzeit keinen aktiven Weg zu einer kommerziellen Lizenz. Für einen vollständigen Lizenzvergleich über lokale TTS-Engines hinweg siehe PromptQuorums [Leitfaden zu lokalen TTS-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts).',
    quickAnswerTop: {
      en: {
        question: 'Was ist XTTS v2 und darf ich es kommerziell nutzen?',
        answer:
          'XTTS v2 lohnt sich, wenn Sie das qualitativ hochwertigste verfügbare lokale Voice-Cloning wollen, aus nur 6 Sekunden Referenzaudio, mit Sprachausgabe in 17 Sprachen einschließlich sprachübergreifendem Cloning (Stimme auf Englisch klonen, auf Spanisch sprechen lassen). Es läuft über das Coqui-TTS-Toolkit oder direkt über seine Hugging-Face-Modellgewichte, mit empfohlener GPU-Beschleunigung und von den Maintainern dokumentierter Streaming-Latenz unter 200 ms. Nein, Sie dürfen es ohne separate Vereinbarung nicht kommerziell nutzen: Seine Lizenz, die Coqui Public Model License (CPML), beschränkt die Nutzung ausdrücklich auf nicht-kommerzielle Zwecke — private Projekte, Forschung und Hobby-Arbeit. Coqui AI, das Unternehmen, das XTTS v2 veröffentlichte, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein, sodass derzeit niemand eine kommerzielle Lizenz dafür anbietet. Wählen Sie stattdessen Piper oder Kokoro, wenn Sie eine freizügig lizenzierte Engine für ein kommerzielles Produkt benötigen; keine der beiden klont Stimmen, aber beide sind für die kommerzielle Nutzung kostenlos.',
        bullets: [
          'Klont eine Stimme aus nur 6 Sekunden Referenzaudio, laut offizieller Hugging-Face-Model-Card.',
          'Spricht die geklonte Stimme in 17 Sprachen, einschließlich sprachübergreifendem Cloning über diese Sprachen hinweg.',
          'Lizenz: Coqui Public Model License (CPML), nicht-kommerziell — nur private, Forschungs- und Hobby-Nutzung.',
          'Kein aktiver kommerzieller Lizenzweg: Coqui AI, das veröffentlichende Unternehmen, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein.',
          'Läuft über das Coqui-TTS-Toolkit (pip install coqui-tts); unterstützt Streaming mit Latenz unter 200 ms bis zum ersten Audio.',
          'GPU dringend empfohlen; läuft auf CPU, aber deutlich langsamer.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was XTTS v2 tatsächlich tut', anchor: 'what-it-does' },
      { label: 'Echte Nutzungsbeispiele', anchor: 'usage-examples' },
      { label: 'Lizenz und kommerzielle Nutzung', anchor: 'license-cost' },
      { label: 'Wofür XTTS v2 nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu XTTS v2', anchor: 'alternatives' },
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
            text: 'XTTS v2 ist Coquis mehrsprachiges Voice-Cloning-Modell, das eine Stimme aus 6 Sekunden Referenzaudio klont und in 17 Sprachen sprechen lässt, lizenziert unter der nicht-kommerziellen Coqui Public Model License (CPML), ohne aktiven kommerziellen Lizenzweg, seit Coqui AI, das veröffentlichende Unternehmen, seine kostenpflichtigen Dienste im Dezember 2023 einstellte.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist ein KI-Modell, das sich einen kurzen Sprachclip anhört und dann neue Sätze in genau dieser Stimme erzeugen kann, in 17 verschiedenen Sprachen — kostenlos für private und Forschungsnutzung, aber nicht für ein bezahltes Produkt ohne eine separate Vereinbarung, die derzeit nicht existiert.',
          },
        ],
        items: [
          'Klont eine Stimme aus nur 6 Sekunden Referenzaudio, über 17 Sprachen hinweg.',
          'Läuft über das Coqui-TTS-Toolkit (`pip install coqui-tts`) oder direkt über seine Hugging-Face-Modellgewichte.',
          'Lizenz: Coqui Public Model License (CPML) — nur nicht-kommerziell.',
          'Kein aktiver kommerzieller Lizenzweg: Coqui AI stellte seine kostenpflichtigen Dienste im Dezember 2023 ein.',
          'Dokumentierte Streaming-Latenz unter 200 ms bis zum ersten Audio; GPU dringend empfohlen.',
          'Erfordert die Akzeptanz der CPML — setzen Sie `COQUI_TOS_AGREED=1`, um dies nicht-interaktiv in Docker oder CI zu tun.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die CPML ist nicht dieselbe Lizenz wie das Coqui-TTS-Toolkit, das XTTS v2 ausführt — das Toolkit ist MPL-2.0, doch die Gewichte und Ausgaben dieses spezifischen Modells sind nicht-kommerziell. Siehe Abschnitt Lizenz und kommerzielle Nutzung unten.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Was XTTS v2 tatsächlich tut',
        content: [
          'XTTS v2 ist ein GPT-basiertes, sprachübergreifendes Voice-Cloning-Text-zu-Sprache-Modell. Bei einem kurzen Referenzaudioclip und Zieltext erzeugt es Sprache in der geklonten Stimme, auch in einer anderen Sprache als das Referenzaudio.',
        ],
        items: [
          '**Voice-Cloning in wenigen Sekunden.** Ein einziger 6-Sekunden-Referenzaudioclip reicht laut Coquis offizieller Model-Card zum Klonen einer Stimme — kein Fine-Tuning oder Trainingslauf für eine neue Stimme erforderlich.',
          '**Unterstützung für 17 Sprachen mit sprachübergreifendem Cloning.** Unterstützte Sprachen sind Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Polnisch, Türkisch, Russisch, Niederländisch, Tschechisch, Arabisch, Chinesisch (zh-cn), Japanisch, Ungarisch, Koreanisch und Hindi — Sie können eine Stimme aus englischem Audio klonen und mit derselben geklonten Stimme Sprache in jeder der anderen 16 Sprachen erzeugen.',
          '**Streaming-Inferenz.** XTTS v2 unterstützt Streaming-Synthese mit Latenz unter 200 ms bis zum ersten Audio, dokumentiert seit Einführung dieser Funktion in Coqui TTS v0.20.0 — nützlich für interaktive Sprachanwendungen, bei denen das Warten auf eine vollständig gerenderte Audiodatei zu langsam ist.',
          '**Läuft über das Coqui-TTS-Toolkit.** Der primäre unterstützte Weg, XTTS v2 auszuführen, ist über [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`), das es als `TTS("tts_models/multilingual/multi-dataset/xtts_v2")` bereitstellt.',
          '**Wiederverwendung von Speaker-Embeddings.** Über das jedes Mal erneute Übergeben eines rohen Referenzclips hinaus unterstützt das Toolkit das Berechnen und Wiederverwenden des latenten Embeddings eines Sprechers, was erneute Berechnungen bei wiederholter Synthese mit derselben geklonten Stimme vermeidet.',
        ],
        note: 'XTTS v2 ist ein Modell, kein Toolkit — für die Software, die es (und andere Modelle) ausführt, siehe PromptQuorums dedizierten [Coqui-TTS-Test](/power-local-llm/coqui-tts-review).',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Nutzungsbeispiele',
        content: [
          'Diese Befehle verwenden die dokumentierte Python-API des Coqui-TTS-Toolkits, den primären unterstützten Weg, XTTS v2 auszuführen.',
        ],
        codeBlock: `# Toolkit installieren
pip install coqui-tts

# CPML nicht-interaktiv akzeptieren (erforderlich für Docker/CI; sonst
# erscheint beim ersten Laden eine interaktive Eingabeaufforderung)
export COQUI_TOS_AGREED=1

# Python-API: Stimme klonen und Sprache erzeugen
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# Cloning in derselben Sprache
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# Sprachübergreifendes Cloning: aus englischem Audio klonen, Spanisch sprechen
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# Streaming-Synthese (niedrige Latenz bis zum ersten Audio)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'Der genaue Name und die Signatur der Streaming-API-Methode können sich zwischen Toolkit-Versionen ändern — prüfen Sie die aktuelle [Coqui-TTS-Dokumentation](https://github.com/idiap/coqui-ai-TTS) vor dem Einsatz. Die Umgebungsvariable `COQUI_TOS_AGREED=1` und die Argumente `speaker_wav`/`language` sind im README des Toolkits dokumentiert.',
        items: [
          '**Die Qualität des Referenzaudios ist entscheidend.** Ein sauberer 6-Sekunden-Clip eines einzelnen Sprechers ohne Hintergrundgeräusche oder Musik erzeugt einen merklich besseren Klon als ein kurzer, verrauschter oder Multi-Speaker-Clip.',
          '**Nicht-interaktive CPML-Akzeptanz** ist beim ersten Laden von XTTS v2 in einer unbeaufsichtigten Umgebung (Docker, CI) erforderlich — setzen Sie `COQUI_TOS_AGREED=1` vor diesem ersten Laden.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Lizenz und kommerzielle Nutzung',
        content: [
          '**Die Modellgewichte und generierten Audio-Ausgaben von XTTS v2 stehen unter der Coqui Public Model License (CPML) 1.0.0**, bestätigt über die zusammen mit dem Modell auf [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) veröffentlichte Lizenzdatei. Die CPML besagt ausdrücklich, dass sie „nur die nicht-kommerzielle Nutzung eines Machine-Learning-Modells und seiner Ausgaben erlaubt" — erlaubte Nutzungen umfassen private Projekte, akademische Forschung und Hobby-Arbeit, solange Sie keine direkte oder indirekte Vergütung im Zusammenhang mit dieser Nutzung erhalten.',
          '**Derzeit gibt es keinen aktiven kommerziellen Lizenzweg für XTTS v2.** Die Model-Card listet eine Kontaktadresse, info@coqui.ai, für Anfragen zu kommerziellen Lizenzen, doch Coqui AI, das Unternehmen, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein — PromptQuorum konnte nicht bestätigen, dass diese Adresse noch aktiv besetzt ist oder dass eine kommerzielle Lizenz heute erhältlich ist. Behandeln Sie XTTS v2 als ausschließlich nicht-kommerziell, es sei denn, Sie bestätigen unabhängig etwas anderes, bevor Sie ein bezahltes Produkt ausliefern.',
          '**Die CPML gilt speziell für die XTTS-v2-Modellgewichte und deren Ausgaben — nicht für den Coqui-TTS-Toolkit-Code, der das Modell ausführt**, der separat unter MPL-2.0 lizenziert ist und die kommerzielle Nutzung mit Offenlegungsbedingungen für Toolkit-Änderungen durchaus erlaubt. Dieser Absatz erklärt die allgemeine Form der Lizenz; es ist keine Rechtsberatung — lesen Sie die CPML selbst und konsultieren Sie einen Anwalt vor jeder kommerziellen Bereitstellung.',
        ],
        faqs: [
          {
            q: 'Welche Lizenz verwendet XTTS v2?',
            a: 'XTTS v2 wird unter der Coqui Public Model License (CPML) 1.0.0 veröffentlicht, einer nicht-kommerziellen Lizenz, die für die Modellgewichte und deren generierte Audio-Ausgaben gilt. Sie erlaubt private, Forschungs- und Hobby-Nutzung, verbietet aber die kommerzielle Nutzung — jedes bezahlte Produkt, SaaS-Tool oder Kundenprodukt — ohne separate Vereinbarung. Dies ist keine Rechtsberatung; lesen Sie die CPML selbst, bevor Sie sie kommerziell nutzen.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür XTTS v2 nicht geeignet ist',
        content: [
          'XTTS v2 ist ein hochwertiges Voice-Cloning-Modell, keine universell einsetzbare, kommerziell bereitstellbare TTS-Engine. Es ist das falsche Werkzeug für die folgenden Situationen:',
        ],
        items: [
          '**Jedes kommerzielle Produkt ohne bestätigte Lizenz.** Die CPML ist nicht-kommerziell, und derzeit gibt es keinen bestätigten, aktiven Weg zu einer kommerziellen Lizenz nach Coqui AIs Schließung 2023. Liefern Sie XTTS v2 nicht in einem bezahlten Produkt, einer werbefinanzierten App oder einem Kundenprodukt aus, ohne zuvor unabhängig die Lizenzbedingungen zu bestätigen.',
          '**Reine CPU-Nutzung mit begrenzten Ressourcen in Echtzeit.** XTTS v2 unterstützt zwar latenzarmes Streaming, doch diese Leistung setzt GPU-Beschleunigung voraus; auf reiner CPU ist es merklich langsamer als eine leichtgewichtige Engine wie [Piper](/power-local-llm/piper-tts-review) und für den Echtzeit-Einsatz auf bescheidener Hardware wie einem Raspberry Pi möglicherweise nicht praktikabel.',
          '**Klonen einer Stimme aus sehr kurzem oder verrauschtem Audio.** Zwar sind 6 Sekunden das dokumentierte Minimum, doch ein verrauschter, komprimierter oder Multi-Speaker-Referenzclip erzeugt einen merklich schlechteren Klon als eine saubere Einzelsprecher-Aufnahme.',
          '**Eine Sprache außerhalb der unterstützten 17.** XTTS v2 unterstützt genau Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Polnisch, Türkisch, Russisch, Niederländisch, Tschechisch, Arabisch, Chinesisch (zh-cn), Japanisch, Ungarisch, Koreanisch und Hindi — zum Zeitpunkt der Veröffentlichung gibt es keine offizielle Roadmap für weitere Sprachen.',
          '**Jemanden ohne Zustimmung imitieren.** Das Klonen der Stimme einer echten Person ohne deren Wissen oder Zustimmung wirft Fragen zu Einwilligung, Persönlichkeitsrechten und potenziell Betrug oder Identitätsdiebstahl auf, die unabhängig von der nicht-kommerziellen Einschränkung der CPML bestehen — diese gelten unabhängig von den Lizenzbedingungen, sowohl bei privater als auch bei kommerzieller Nutzung.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu XTTS v2',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[Piper](/power-local-llm/piper-tts-review)',
            'Am besten für': 'Schnellste reine CPU-Synthese, kein Voice-Cloning, Echtzeit auf einem Raspberry Pi',
            'Lizenz': 'GPL-3.0-or-later',
          },
          {
            'Tool': '[Coqui-TTS-Toolkit](/power-local-llm/coqui-tts-review)',
            'Am besten für': 'Die Software, die XTTS v2 (und andere Modelle) mit einer breiteren, freizügig lizenzierten Codebasis ausführt',
            'Lizenz': 'MPL-2.0 (nur Toolkit)',
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
            'Am besten für': 'Verwaltete Cloud-API mit kommerziellem Voice-Cloning und klarer kommerzieller Lizenzierung',
            'Lizenz': 'Proprietär (kostenpflichtige Cloud-API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist XTTS v2?',
            a: 'XTTS v2 ist ein mehrsprachiges Voice-Cloning-Text-zu-Sprache-Modell von Coqui, das eine Stimme aus nur 6 Sekunden Referenzaudio klont und Sprache in dieser Stimme in 17 Sprachen erzeugt, einschließlich sprachübergreifendem Cloning.',
          },
          {
            q: 'Darf ich XTTS v2 kommerziell nutzen?',
            a: 'Nicht ohne separate Vereinbarung. XTTS v2 steht unter der Coqui Public Model License (CPML), die private, Forschungs- und Hobby-Nutzung erlaubt, aber kommerzielle Nutzung verbietet — jedes bezahlte Produkt, SaaS, werbefinanzierte Inhalte oder Kundenarbeit. Coqui AI, das Unternehmen, das es veröffentlichte, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein, und PromptQuorum konnte nicht bestätigen, dass heute ein aktiver kommerzieller Lizenzweg existiert. Behandeln Sie XTTS v2 als ausschließlich nicht-kommerziell.',
          },
          {
            q: 'Wie viel Referenzaudio benötigt XTTS v2 zum Klonen einer Stimme?',
            a: 'Laut offizieller Hugging-Face-Model-Card reichen bereits 6 Sekunden sauberes Einzelsprecher-Referenzaudio. Ein längerer, sauberer Clip erzeugt in der Regel einen genaueren Klon.',
          },
          {
            q: 'Wie viele Sprachen unterstützt XTTS v2?',
            a: 'Genau 17: Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Polnisch, Türkisch, Russisch, Niederländisch, Tschechisch, Arabisch, Chinesisch (zh-cn), Japanisch, Ungarisch, Koreanisch und Hindi. Es unterstützt sprachübergreifendes Cloning — klonen Sie eine Stimme aus Audio in einer dieser Sprachen und erzeugen Sie Sprache in jeder der anderen.',
          },
          {
            q: 'Wie führe ich XTTS v2 aus?',
            a: 'Installieren Sie das Coqui-TTS-Toolkit mit `pip install coqui-tts`, laden Sie dann das Modell mit `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. Setzen Sie zuerst die Umgebungsvariable `COQUI_TOS_AGREED=1`, wenn Sie die CPML-Lizenz nicht-interaktiv akzeptieren müssen, etwa in einem Docker-Container oder einer CI-Pipeline.',
          },
          {
            q: 'Benötige ich eine GPU, um XTTS v2 auszuführen?',
            a: 'Eine GPU wird dringend empfohlen. XTTS v2 läuft auf der CPU, aber merklich langsamer — seine dokumentierte Streaming-Latenz unter 200 ms setzt GPU-Beschleunigung voraus, und reine CPU-Nutzung ist für Echtzeitanwendungen nicht praktikabel.',
          },
          {
            q: 'Was ist der Unterschied zwischen XTTS v2 und dem Coqui-TTS-Toolkit?',
            a: 'XTTS v2 ist ein spezifisches Voice-Cloning-Modell, lizenziert unter der nicht-kommerziellen CPML. Das Coqui-TTS-Toolkit ist die Software — ein Python-Paket und eine CLI —, die XTTS v2 und andere Modelle ausführt, separat lizenziert unter MPL-2.0, was die kommerzielle Nutzung des Toolkit-Codes selbst durchaus erlaubt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'XTTS v2 bleibt eines der qualitativ hochwertigsten lokal verfügbaren Voice-Cloning-Modelle im Jahr 2026, und die Kombination aus einer 6-Sekunden-Cloning-Anforderung, 17-sprachiger sprachübergreifender Unterstützung und Streaming-Latenz unter 200 ms ist für private Nutzung, Forschung und Prototyping wirklich leistungsfähig. Die Entscheidung, die für die meisten Leser tatsächlich zählt, ist die Lizenz: Die Coqui Public Model License ist eindeutig nicht-kommerziell, und da Coqui AI im Dezember 2023 geschlossen hat, gibt es heute keinen bestätigten aktiven Weg zu einer kommerziellen Lizenz. Wenn Ihr Anwendungsfall privat, akademisch oder ein nicht-kommerzieller Prototyp ist, ist XTTS v2 eine starke, gut dokumentierte Wahl. Wenn Sie kommerzielles Voice-Cloning benötigen, bestätigen Sie die Lizenzbedingungen unabhängig, bevor Sie darauf aufbauen, oder kombinieren Sie diesen Test mit PromptQuorums Abdeckung von [Piper](/power-local-llm/piper-tts-review) und [Bark](/power-local-llm/bark-tts-review) für freizügig lizenzierte Alternativen oder dem [ElevenLabs-Vergleich](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) für eine verwaltete kommerzielle Option.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[XTTS v2 auf Hugging Face](https://huggingface.co/coqui/XTTS-v2) — die Model-Card: Sprachen, Cloning-Anforderungen und Lizenzverweis.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — der vollständige Text der Coqui Public Model License (CPML) 1.0.0.',
          '[idiap/coqui-ai-TTS auf GitHub](https://github.com/idiap/coqui-ai-TTS) — das aktiv gepflegte Toolkit, das XTTS v2 ausführt, mit Nutzungsdokumentation.',
          '[Coqui-TTS-Test](/power-local-llm/coqui-tts-review) — PromptQuorums dedizierter Test des Toolkits, einschließlich seiner Pflegegeschichte nach der Schließung.',
          '[Lokale TTS- & Voice-Cloning-Lizenzen](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — vollständiger Lizenzvergleich über lokale TTS-Engines hinweg.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Coqui-TTS-Test](/power-local-llm/coqui-tts-review) — das Toolkit, das XTTS v2 ausführt, einschließlich seines Pflegestatus nach der Schließung von Coqui AI.',
          '[Lokale TTS- und Voice-Cloning-Lizenzen: Piper, XTTS v2, F5-TTS und Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — der Lizenz-Deep-Dive über alle wichtigen lokalen TTS-Engines.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — der Cloud-vs-lokal-Vergleich für Leser, die zwischen Self-Hosting entscheiden.',
          '[Piper-TTS-Test](/power-local-llm/piper-tts-review) — die schnelle, freizügig lizenzierte, reine-CPU-lokale-TTS-Alternative.',
          '[Bark-TTS-Test](/power-local-llm/bark-tts-review) — das ausdrucksstarke, nicht-sprachliche lokale TTS-Modell, in derselben Tiefe getestet.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2 im Test (2026): Mehrsprachiges Voice-Cloning aus 6 Sekunden Audio',
      description:
        'XTTS v2 im Test: Coquis mehrsprachiges Voice-Cloning-Modell, klont eine Stimme aus 6 Sekunden Audio in 17 Sprachen. Echte Befehle, die nicht-kommerzielle CPML-Lizenz und ehrliche Grenzen für 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'de',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale, selbst gehostete Voice-Cloning-Modelle evaluieren' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'Voice-Cloning' },
        { '@type': 'Thing', name: 'Text-zu-Sprache' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2 im Test (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-fr.webp',
    title: 'XTTS v2 : avis (2026) — clonage vocal multilingue à partir de 6 secondes d\'audio',
    seoTitle: 'XTTS v2 : avis 2026 — clonage vocal multilingue',
    intro:
      'XTTS v2 est un modèle de clonage vocal multilingue publié par Coqui, distribué sur [Hugging Face](https://huggingface.co/coqui/XTTS-v2), qui clone une voix à partir d\'à peine 6 secondes d\'audio de référence et la fait parler dans 17 langues. Il s\'exécute via le [kit Coqui TTS](/power-local-llm/coqui-tts-review) — le fork activement maintenu est [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — ou peut être utilisé de manière autonome via les poids du modèle. Cet avis couvre ce que fait réellement XTTS v2, des commandes d\'utilisation réelles, sa licence (la Coqui Public Model License, CPML, non commerciale) et où il est ou non le bon outil, car Coqui AI, l\'entreprise qui l\'a publié à l\'origine, a fermé ses services payants en décembre 2023.',
    metaDescription:
      'XTTS v2, avis : le modèle de clonage vocal multilingue de Coqui, clone une voix à partir de 6 secondes d\'audio en 17 langues. Commandes réelles, licence CPML non commerciale, limites honnêtes pour 2026.',
    twitterDescription:
      'XTTS v2, avis 2026 : le modèle de clonage vocal de Coqui clone une voix à partir de seulement 6 secondes d\'audio de référence et la fait parler en 17 langues. Commandes réelles, licence CPML non commerciale expliquée, et quand utiliser autre chose.',
    audience:
      'Développeurs et chercheurs évaluant le clonage vocal local et auto-hébergé pour des projets personnels, la recherche ou le prototypage, qui doivent comprendre la licence non commerciale avant de construire quoi que ce soit de réel dessus.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 avis',
    targetKeywords: [
      'xtts v2 avis',
      'xtts v2',
      'xtts v2 clonage vocal',
      'xtts v2 licence',
      'xtts v2 usage commercial',
      'coqui xtts v2',
      'xtts v2 langues',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 est un modèle de clonage vocal multilingue publié par Coqui qui clone une voix à partir d\'à peine 6 secondes d\'audio de référence et génère de la parole dans cette voix en 17 langues.** Il s\'exécute via le [kit Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`, puis `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). Sa licence, la Coqui Public Model License (CPML), est **non commerciale** — et comme Coqui AI, l\'entreprise, a fermé ses services payants en décembre 2023, il n\'existe actuellement aucune voie active vers une licence commerciale. Pour une comparaison complète des licences entre moteurs TTS locaux, voir le [guide des licences TTS locales](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que XTTS v2 et puis-je l\'utiliser commercialement ?',
        answer:
          'XTTS v2 vaut le détour si vous voulez le clonage vocal local de la plus haute qualité disponible, à partir de seulement 6 secondes d\'audio de référence, générant de la parole en 17 langues, y compris le clonage translingue (cloner une voix en anglais, la faire parler en espagnol). Il s\'exécute via le kit Coqui TTS ou directement via ses poids de modèle Hugging Face, avec accélération GPU recommandée et une latence de streaming inférieure à 200 ms documentée par ses mainteneurs. Non, vous ne pouvez pas l\'utiliser commercialement sans accord séparé : sa licence, la Coqui Public Model License (CPML), restreint explicitement l\'usage à des fins non commerciales — projets personnels, recherche et travail amateur. Coqui AI, l\'entreprise qui a publié XTTS v2, a fermé ses services payants en décembre 2023, donc aucune entité n\'offre actuellement de licence commerciale pour ce modèle. Choisissez plutôt Piper ou Kokoro si vous avez besoin d\'un moteur sous licence permissive pour un produit commercial ; aucun des deux ne clone les voix, mais les deux sont libres pour un usage commercial.',
        bullets: [
          'Clone une voix à partir d\'à peine 6 secondes d\'audio de référence, selon sa fiche modèle officielle sur Hugging Face.',
          'Fait parler la voix clonée en 17 langues, y compris le clonage translingue entre ces langues.',
          'Licence : Coqui Public Model License (CPML), non commerciale — usage personnel, recherche et amateur uniquement.',
          'Aucune voie de licence commerciale active : Coqui AI, l\'entreprise éditrice, a fermé ses services payants en décembre 2023.',
          'S\'exécute via le kit Coqui TTS (pip install coqui-tts) ; prend en charge le streaming avec une latence inférieure à 200 ms jusqu\'au premier audio.',
          'GPU fortement recommandé ; fonctionne sur CPU mais à une vitesse nettement plus faible.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce que fait réellement XTTS v2', anchor: 'what-it-does' },
      { label: 'Exemples d\'utilisation réels', anchor: 'usage-examples' },
      { label: 'Licence et usage commercial', anchor: 'license-cost' },
      { label: 'Pour quoi XTTS v2 n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à XTTS v2', anchor: 'alternatives' },
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
            text: 'XTTS v2 est le modèle de clonage vocal multilingue de Coqui qui clone une voix à partir de 6 secondes d\'audio de référence et la fait parler en 17 langues, sous licence Coqui Public Model License (CPML) non commerciale, sans voie de licence commerciale active depuis que Coqui AI, l\'entreprise éditrice, a fermé ses services payants en décembre 2023.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est un modèle d\'IA qui écoute un court extrait de quelqu\'un en train de parler et peut ensuite générer de nouvelles phrases dans cette même voix, en 17 langues différentes — gratuit pour un usage personnel et de recherche, mais pas pour un produit payant sans un accord séparé qui n\'existe actuellement pas.',
          },
        ],
        items: [
          'Clone une voix à partir d\'à peine 6 secondes d\'audio de référence, en 17 langues.',
          'S\'exécute via le kit Coqui TTS (`pip install coqui-tts`) ou directement via ses poids de modèle Hugging Face.',
          'Licence : Coqui Public Model License (CPML) — non commerciale uniquement.',
          'Aucune voie de licence commerciale active : Coqui AI a fermé ses services payants en décembre 2023.',
          'Latence de streaming documentée inférieure à 200 ms jusqu\'au premier audio ; GPU fortement recommandé.',
          'Nécessite d\'accepter la CPML — définissez `COQUI_TOS_AGREED=1` pour le faire de manière non interactive dans Docker ou CI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La CPML n\'est pas la même licence que le kit Coqui TTS qui exécute XTTS v2 — le kit est sous MPL-2.0, mais les poids et sorties de ce modèle spécifique sont non commerciaux. Voir la section Licence et usage commercial ci-dessous.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Ce que fait réellement XTTS v2',
        content: [
          'XTTS v2 est un modèle de synthèse vocale à clonage translingue basé sur GPT. À partir d\'un court extrait audio de référence et d\'un texte cible, il génère de la parole dans la voix clonée, y compris dans une langue différente de celle de l\'audio de référence.',
        ],
        items: [
          '**Clonage vocal en quelques secondes.** Un seul extrait audio de référence de 6 secondes suffit à cloner une voix, selon la fiche modèle officielle de Coqui — aucun fine-tuning ni entraînement n\'est requis pour une nouvelle voix.',
          '**Prise en charge de 17 langues avec clonage translingue.** Les langues prises en charge sont l\'anglais, l\'espagnol, le français, l\'allemand, l\'italien, le portugais, le polonais, le turc, le russe, le néerlandais, le tchèque, l\'arabe, le chinois (zh-cn), le japonais, le hongrois, le coréen et l\'hindi — vous pouvez cloner une voix à partir d\'un audio en anglais et générer de la parole dans n\'importe laquelle des 16 autres langues avec cette même voix clonée.',
          '**Inférence en streaming.** XTTS v2 prend en charge la synthèse en streaming avec une latence inférieure à 200 ms jusqu\'au premier audio, documentée depuis l\'introduction de cette fonctionnalité dans Coqui TTS v0.20.0 — utile pour les applications vocales interactives où attendre le rendu complet d\'un fichier audio est trop lent.',
          '**S\'exécute via le kit Coqui TTS.** La principale méthode prise en charge pour exécuter XTTS v2 est via [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`), qui l\'expose comme `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`.',
          '**Réutilisation de l\'embedding du locuteur.** Au-delà du passage d\'un extrait de référence brut à chaque fois, le kit prend en charge le calcul et la réutilisation de l\'embedding latent d\'un locuteur, évitant un recalcul pour des synthèses répétées avec la même voix clonée.',
        ],
        note: 'XTTS v2 est un modèle, pas un kit — pour le logiciel qui l\'exécute (et d\'autres modèles), voir l\'[avis dédié à Coqui TTS](/power-local-llm/coqui-tts-review) de PromptQuorum.',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels',
        content: [
          'Ces commandes utilisent l\'API Python documentée du kit Coqui TTS, la principale méthode prise en charge pour exécuter XTTS v2.',
        ],
        codeBlock: `# Installer le kit
pip install coqui-tts

# Accepter la CPML de manière non interactive (requis pour Docker/CI ;
# sinon une invite interactive apparaît au premier chargement)
export COQUI_TOS_AGREED=1

# API Python : cloner une voix et générer de la parole
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# Clonage dans la même langue
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# Clonage translingue : cloner à partir d'un audio anglais, parler en espagnol
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# Synthèse en streaming (faible latence jusqu'au premier audio)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'Le nom exact et la signature de la méthode de l\'API de streaming peuvent changer entre les versions du kit — vérifiez la [documentation actuelle de Coqui TTS](https://github.com/idiap/coqui-ai-TTS) avant tout déploiement. La variable d\'environnement `COQUI_TOS_AGREED=1` et les arguments `speaker_wav`/`language` sont documentés dans le README du kit.',
        items: [
          '**La qualité de l\'audio de référence compte.** Un extrait propre de 6 secondes d\'un seul locuteur sans bruit de fond ni musique produit un clone nettement meilleur qu\'un extrait court, bruyant ou multi-locuteurs.',
          '**L\'acceptation non interactive de la CPML** est requise la première fois que XTTS v2 se charge dans un environnement sans surveillance (Docker, CI) — définissez `COQUI_TOS_AGREED=1` avant ce premier chargement.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licence et usage commercial',
        content: [
          '**Les poids du modèle XTTS v2 et les sorties audio générées sont sous licence Coqui Public Model License (CPML) 1.0.0**, confirmée via le fichier de licence publié avec le modèle sur [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt). La CPML précise explicitement qu\'elle « n\'autorise qu\'un usage non commercial d\'un modèle d\'apprentissage automatique et de ses sorties » — les usages autorisés incluent les projets personnels, la recherche académique et le travail amateur, tant que vous ne recevez aucun paiement direct ou indirect lié à cet usage.',
          '**Il n\'existe actuellement aucune voie de licence commerciale active pour XTTS v2.** La fiche modèle indique une adresse de contact, info@coqui.ai, pour les demandes de licence commerciale, mais Coqui AI, l\'entreprise, a fermé ses services payants en décembre 2023 — PromptQuorum n\'a pas pu confirmer que cette adresse est activement suivie ou qu\'une licence commerciale est obtenable aujourd\'hui. Traitez XTTS v2 comme non commercial uniquement, sauf confirmation indépendante contraire avant de lancer un produit payant.',
          '**La CPML s\'applique spécifiquement aux poids du modèle XTTS v2 et à leurs sorties — pas au code du kit Coqui TTS qui exécute le modèle**, qui est sous licence distincte MPL-2.0 et autorise bien l\'usage commercial avec des conditions de divulgation de code sur les modifications du kit. Ce paragraphe explique la forme générale de la licence ; ce n\'est pas un conseil juridique — lisez la CPML vous-même et consultez un avocat avant tout déploiement commercial.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise XTTS v2 ?',
            a: 'XTTS v2 est publié sous la Coqui Public Model License (CPML) 1.0.0, une licence non commerciale qui s\'applique aux poids du modèle et à leurs sorties audio générées. Elle autorise l\'usage personnel, de recherche et amateur, mais interdit l\'usage commercial — tout produit payant, outil SaaS ou livrable client — sans accord séparé. Ceci n\'est pas un conseil juridique ; lisez la CPML vous-même avant tout usage commercial.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi XTTS v2 n\'est pas adapté',
        content: [
          'XTTS v2 est un modèle de clonage vocal de haute qualité, pas un moteur TTS polyvalent et déployable commercialement. C\'est le mauvais outil pour les situations suivantes :',
        ],
        items: [
          '**Tout produit commercial sans licence confirmée.** La CPML est non commerciale, et il n\'existe actuellement aucune voie confirmée et active vers une licence commerciale depuis la fermeture de Coqui AI en 2023. Ne déployez pas XTTS v2 dans un produit payant, une application financée par la publicité ou un livrable client sans confirmer au préalable et de manière indépendante les conditions de licence.',
          '**Usage en temps réel avec des ressources limitées, CPU seul.** XTTS v2 prend en charge le streaming à faible latence, mais cette performance suppose une accélération GPU ; sur CPU seul, il est nettement plus lent qu\'un moteur léger comme [Piper](/power-local-llm/piper-tts-review), et peut ne pas être pratique pour un usage en temps réel sur du matériel modeste comme un Raspberry Pi.',
          '**Cloner une voix à partir d\'un audio très court ou bruyant.** Bien que 6 secondes soit le minimum documenté, un extrait de référence bruyant, compressé ou multi-locuteurs produit un clone nettement moins bon qu\'un enregistrement propre d\'un seul locuteur.',
          '**Une langue en dehors des 17 prises en charge.** XTTS v2 prend en charge exactement l\'anglais, l\'espagnol, le français, l\'allemand, l\'italien, le portugais, le polonais, le turc, le russe, le néerlandais, le tchèque, l\'arabe, le chinois (zh-cn), le japonais, le hongrois, le coréen et l\'hindi — il n\'y a aucune feuille de route officielle pour d\'autres langues à la date de publication.',
          '**Usurper l\'identité de quelqu\'un sans consentement.** Cloner la voix d\'une personne réelle sans son consentement soulève des questions de consentement, de droit à l\'image et potentiellement de fraude ou d\'usurpation d\'identité qui sont indépendantes de la restriction non commerciale de la CPML — elles s\'appliquent quelles que soient les conditions de licence, aussi bien en usage personnel que commercial.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à XTTS v2',
        itemHeadings: true,
        columns: ['Outil', 'Meilleur usage', 'Licence'],
        rows: [
          {
            'Outil': '[Piper](/power-local-llm/piper-tts-review)',
            'Meilleur usage': 'Synthèse CPU seule la plus rapide, pas de clonage vocal, temps réel sur un Raspberry Pi',
            'Licence': 'GPL-3.0-or-later',
          },
          {
            'Outil': '[Kit Coqui TTS](/power-local-llm/coqui-tts-review)',
            'Meilleur usage': 'Le logiciel qui exécute XTTS v2 (et d\'autres modèles) avec une base de code plus large et sous licence permissive',
            'Licence': 'MPL-2.0 (kit uniquement)',
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
            'Meilleur usage': 'API cloud gérée avec clonage vocal commercial et licence commerciale claire',
            'Licence': 'Propriétaire (API cloud payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que XTTS v2 ?',
            a: 'XTTS v2 est un modèle de synthèse vocale à clonage multilingue publié par Coqui qui clone une voix à partir d\'à peine 6 secondes d\'audio de référence et génère de la parole dans cette voix en 17 langues, y compris le clonage translingue.',
          },
          {
            q: 'Puis-je utiliser XTTS v2 commercialement ?',
            a: 'Pas sans accord séparé. XTTS v2 est sous licence Coqui Public Model License (CPML), qui autorise l\'usage personnel, de recherche et amateur mais interdit l\'usage commercial — tout produit payant, SaaS, contenu financé par la publicité ou travail client. Coqui AI, l\'entreprise qui l\'a publié, a fermé ses services payants en décembre 2023, et PromptQuorum n\'a pas pu confirmer qu\'une voie de licence commerciale active existe aujourd\'hui. Traitez XTTS v2 comme non commercial uniquement.',
          },
          {
            q: 'Combien d\'audio de référence XTTS v2 nécessite-t-il pour cloner une voix ?',
            a: 'À peine 6 secondes d\'audio de référence propre d\'un seul locuteur, selon sa fiche modèle officielle sur Hugging Face. Un extrait plus long et plus propre produit généralement un clone plus précis.',
          },
          {
            q: 'Combien de langues XTTS v2 prend-il en charge ?',
            a: 'Exactement 17 : anglais, espagnol, français, allemand, italien, portugais, polonais, turc, russe, néerlandais, tchèque, arabe, chinois (zh-cn), japonais, hongrois, coréen et hindi. Il prend en charge le clonage translingue — clonez une voix à partir d\'un audio dans l\'une de ces langues et générez de la parole dans n\'importe laquelle des autres.',
          },
          {
            q: 'Comment exécuter XTTS v2 ?',
            a: 'Installez le kit Coqui TTS avec `pip install coqui-tts`, puis chargez le modèle avec `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. Définissez d\'abord la variable d\'environnement `COQUI_TOS_AGREED=1` si vous devez accepter la licence CPML de manière non interactive, par exemple dans un conteneur Docker ou un pipeline CI.',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour exécuter XTTS v2 ?',
            a: 'Un GPU est fortement recommandé. XTTS v2 s\'exécute sur CPU, mais nettement plus lentement — sa latence de streaming documentée inférieure à 200 ms suppose une accélération GPU, et l\'usage CPU seul n\'est pas pratique pour les applications en temps réel.',
          },
          {
            q: 'Quelle est la différence entre XTTS v2 et le kit Coqui TTS ?',
            a: 'XTTS v2 est un modèle de clonage vocal spécifique, sous licence CPML non commerciale. Le kit Coqui TTS est le logiciel — un package Python et une CLI — qui exécute XTTS v2 et d\'autres modèles, sous licence distincte MPL-2.0, qui autorise bien l\'usage commercial du code du kit lui-même.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'XTTS v2 reste l\'un des modèles de clonage vocal locaux de la plus haute qualité disponibles en 2026, et la combinaison d\'une exigence de clonage de 6 secondes, d\'une prise en charge translingue en 17 langues et d\'une latence de streaming inférieure à 200 ms est réellement performante pour un usage personnel, de recherche et de prototypage. La décision qui compte réellement pour la plupart des lecteurs est la licence : la Coqui Public Model License est sans ambiguïté non commerciale, et avec la fermeture de Coqui AI en décembre 2023, il n\'existe aujourd\'hui aucune voie active confirmée vers une licence commerciale. Si votre cas d\'usage est personnel, académique ou un prototype non commercial, XTTS v2 est un choix solide et bien documenté. Si vous avez besoin de clonage vocal commercial, vérifiez les conditions de licence de manière indépendante avant de construire dessus, ou combinez cet avis avec la couverture par PromptQuorum de [Piper](/power-local-llm/piper-tts-review) et [Bark](/power-local-llm/bark-tts-review) pour des alternatives sous licence permissive, ou la [comparaison ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) pour une option commerciale gérée.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[XTTS v2 sur Hugging Face](https://huggingface.co/coqui/XTTS-v2) — la fiche modèle : langues, exigences de clonage et référence de licence.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — le texte complet de la Coqui Public Model License (CPML) 1.0.0.',
          '[idiap/coqui-ai-TTS sur GitHub](https://github.com/idiap/coqui-ai-TTS) — le kit activement maintenu qui exécute XTTS v2, avec documentation d\'utilisation.',
          '[Avis Coqui TTS](/power-local-llm/coqui-tts-review) — l\'avis dédié de PromptQuorum sur le kit, y compris son historique de maintenance après la fermeture.',
          '[Licences TTS locales et clonage vocal](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparaison complète des licences entre moteurs TTS locaux.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Coqui TTS](/power-local-llm/coqui-tts-review) — le kit qui exécute XTTS v2, y compris son statut de maintenance depuis la fermeture de Coqui AI.',
          '[Licences TTS locales et clonage vocal : Piper, XTTS v2, F5-TTS et Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — l\'analyse approfondie des licences pour tous les principaux moteurs TTS locaux.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparaison cloud contre local pour les lecteurs hésitant à s\'auto-héberger.',
          '[Avis Piper TTS](/power-local-llm/piper-tts-review) — l\'alternative TTS locale rapide, sous licence permissive, CPU seul.',
          '[Avis Bark TTS](/power-local-llm/bark-tts-review) — le modèle TTS local audio expressif et non vocal, testé avec la même profondeur.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2 : avis (2026) — clonage vocal multilingue à partir de 6 secondes d\'audio',
      description:
        'XTTS v2, avis : le modèle de clonage vocal multilingue de Coqui, clone une voix à partir de 6 secondes d\'audio en 17 langues. Commandes réelles, licence CPML non commerciale, limites honnêtes pour 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'fr',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des modèles de clonage vocal locaux et auto-hébergés' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'Clonage vocal' },
        { '@type': 'Thing', name: 'Synthèse vocale' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2 : avis (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-es.webp',
    title: 'XTTS v2: análisis (2026) — clonación de voz multilingüe desde 6 segundos de audio',
    seoTitle: 'XTTS v2: análisis 2026 — clonación de voz multilingüe',
    intro:
      'XTTS v2 es un modelo de clonación de voz multilingüe publicado por Coqui, distribuido en [Hugging Face](https://huggingface.co/coqui/XTTS-v2), que clona una voz a partir de apenas 6 segundos de audio de referencia y la hace hablar en 17 idiomas. Se ejecuta a través del [kit de herramientas Coqui TTS](/power-local-llm/coqui-tts-review) — el fork mantenido activamente es [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — o puede usarse de forma independiente mediante los pesos del modelo. Este análisis cubre qué hace realmente XTTS v2, comandos de uso reales, su licencia (la Coqui Public Model License, CPML, no comercial) y cuándo es o no la herramienta adecuada, ya que Coqui AI, la empresa que lo publicó originalmente, cerró sus servicios de pago en diciembre de 2023.',
    metaDescription:
      'XTTS v2, análisis: el modelo de clonación de voz multilingüe de Coqui clona una voz desde 6 segundos de audio en 17 idiomas. Comandos reales, licencia CPML no comercial y límites honestos para 2026.',
    twitterDescription:
      'XTTS v2, análisis 2026: el modelo de clonación de voz de Coqui clona una voz a partir de solo 6 segundos de audio de referencia y la hace hablar en 17 idiomas. Comandos reales, licencia CPML no comercial explicada, y cuándo usar otra cosa.',
    audience:
      'Desarrolladores e investigadores que evalúan la clonación de voz local y autoalojada para proyectos personales, investigación o prototipado, y que necesitan entender la licencia no comercial antes de construir algo real sobre ella.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 análisis',
    targetKeywords: [
      'xtts v2 análisis',
      'xtts v2',
      'xtts v2 clonación de voz',
      'xtts v2 licencia',
      'xtts v2 uso comercial',
      'coqui xtts v2',
      'xtts v2 idiomas',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 es un modelo de clonación de voz multilingüe de Coqui que clona una voz a partir de apenas 6 segundos de audio de referencia y genera habla con esa voz en 17 idiomas.** Se ejecuta a través del [kit de herramientas Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`, luego `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). Su licencia, la Coqui Public Model License (CPML), es **no comercial** — y como Coqui AI, la empresa, cerró sus servicios de pago en diciembre de 2023, actualmente no existe una vía activa hacia una licencia comercial. Para una comparación completa de licencias entre motores TTS locales, consulta la [guía de licencias de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es XTTS v2 y puedo usarlo comercialmente?',
        answer:
          'XTTS v2 vale la pena si buscas la clonación de voz local de mayor calidad disponible, a partir de solo 6 segundos de audio de referencia, generando habla en 17 idiomas incluida la clonación entre idiomas (clonar una voz en inglés, hacerla hablar en español). Se ejecuta a través del kit de herramientas Coqui TTS o directamente mediante sus pesos de modelo en Hugging Face, con aceleración por GPU recomendada y una latencia de streaming inferior a 200 ms documentada por sus mantenedores. No, no puedes usarlo comercialmente sin un acuerdo aparte: su licencia, la Coqui Public Model License (CPML), restringe explícitamente el uso a fines no comerciales — proyectos personales, investigación y uso como hobby. Coqui AI, la empresa que publicó XTTS v2, cerró sus servicios de pago en diciembre de 2023, por lo que actualmente ninguna entidad ofrece una licencia comercial para él. Elige Piper o Kokoro si necesitas un motor con licencia permisiva para un producto comercial; ninguno clona voces, pero ambos son gratuitos para uso comercial.',
        bullets: [
          'Clona una voz a partir de apenas 6 segundos de audio de referencia, según su ficha oficial en Hugging Face.',
          'Hace hablar la voz clonada en 17 idiomas, incluida la clonación entre idiomas.',
          'Licencia: Coqui Public Model License (CPML), no comercial — solo uso personal, de investigación y hobby.',
          'Sin vía comercial activa: Coqui AI, la empresa que lo publicó, cerró sus servicios de pago en diciembre de 2023.',
          'Se ejecuta mediante el kit de herramientas Coqui TTS (pip install coqui-tts); admite streaming con latencia inferior a 200 ms hasta el primer audio.',
          'Se recomienda encarecidamente una GPU; funciona en CPU pero con una velocidad notablemente menor.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué hace realmente XTTS v2', anchor: 'what-it-does' },
      { label: 'Ejemplos de uso reales', anchor: 'usage-examples' },
      { label: 'Licencia y uso comercial', anchor: 'license-cost' },
      { label: 'Para qué no sirve XTTS v2', anchor: 'limitations' },
      { label: 'Alternativas a XTTS v2', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'XTTS v2 es el modelo de clonación de voz multilingüe de Coqui que clona una voz a partir de 6 segundos de audio de referencia y la hace hablar en 17 idiomas, licenciado bajo la Coqui Public Model License (CPML) no comercial, sin vía comercial activa desde que Coqui AI, la empresa que lo publicó, cerró sus servicios de pago en diciembre de 2023.',
          },
          {
            type: 'plain-terms',
            text: 'Es un modelo de IA que escucha un clip corto de alguien hablando y luego puede generar nuevas frases con esa misma voz, en 17 idiomas distintos — gratuito para uso personal e investigación, pero no para un producto de pago sin un acuerdo aparte que actualmente no existe.',
          },
        ],
        items: [
          'Clona una voz a partir de apenas 6 segundos de audio de referencia, en 17 idiomas.',
          'Se ejecuta mediante el kit de herramientas Coqui TTS (`pip install coqui-tts`) o directamente mediante sus pesos de modelo en Hugging Face.',
          'Licencia: Coqui Public Model License (CPML) — solo no comercial.',
          'Sin vía comercial activa: Coqui AI cerró sus servicios de pago en diciembre de 2023.',
          'Latencia de streaming documentada inferior a 200 ms hasta el primer audio; se recomienda encarecidamente una GPU.',
          'Requiere aceptar la CPML — establece `COQUI_TOS_AGREED=1` para hacerlo de forma no interactiva en Docker o CI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La CPML no es la misma licencia que el kit de herramientas Coqui TTS que ejecuta XTTS v2 — el kit es MPL-2.0, pero los pesos y las salidas de este modelo específico son no comerciales. Consulta la sección Licencia y uso comercial más abajo.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'Qué hace realmente XTTS v2',
        content: [
          'XTTS v2 es un modelo de texto a voz con clonación entre idiomas basado en GPT. Dado un clip de audio de referencia corto y un texto objetivo, genera habla con la voz clonada, incluso en un idioma distinto al del audio de referencia.',
        ],
        items: [
          '**Clonación de voz en pocos segundos.** Un único clip de audio de referencia de 6 segundos es suficiente para clonar una voz, según la ficha oficial de Coqui — no se requiere ajuste fino ni entrenamiento para una voz nueva.',
          '**Compatibilidad con 17 idiomas y clonación entre idiomas.** Los idiomas admitidos son inglés, español, francés, alemán, italiano, portugués, polaco, turco, ruso, neerlandés, checo, árabe, chino (zh-cn), japonés, húngaro, coreano e hindi — puedes clonar una voz a partir de audio en inglés y generar habla en cualquiera de los otros 16 idiomas con esa misma voz clonada.',
          '**Inferencia por streaming.** XTTS v2 admite síntesis por streaming con una latencia inferior a 200 ms hasta el primer audio, documentada desde que se introdujo la función en Coqui TTS v0.20.0 — útil para aplicaciones de voz interactivas donde esperar un archivo de audio completo es demasiado lento.',
          '**Se ejecuta mediante el kit de herramientas Coqui TTS.** La forma principal y compatible de ejecutar XTTS v2 es a través de [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`), que lo expone como `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`.',
          '**Reutilización de embeddings de hablante.** Más allá de pasar un clip de referencia sin procesar cada vez, el kit de herramientas permite calcular y reutilizar el embedding latente de un hablante, evitando recalcularlo en síntesis repetidas con la misma voz clonada.',
        ],
        note: 'XTTS v2 es un modelo, no un kit de herramientas — para el software que lo ejecuta (y otros modelos), consulta el [análisis dedicado de Coqui TTS](/power-local-llm/coqui-tts-review) de PromptQuorum.',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales',
        content: [
          'Estos comandos usan la API de Python documentada del kit de herramientas Coqui TTS, la forma principal y compatible de ejecutar XTTS v2.',
        ],
        codeBlock: `# Instalar el kit de herramientas
pip install coqui-tts

# Aceptar la CPML de forma no interactiva (necesario para Docker/CI; de lo
# contrario aparece un aviso interactivo en la primera carga)
export COQUI_TOS_AGREED=1

# API de Python: clonar una voz y generar habla
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# Clonación en el mismo idioma
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# Clonación entre idiomas: clonar desde audio en inglés, hablar en español
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# Síntesis por streaming (baja latencia hasta el primer audio)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'El nombre exacto y la firma del método de la API de streaming pueden cambiar entre versiones del kit de herramientas — comprueba la [documentación actual de Coqui TTS](https://github.com/idiap/coqui-ai-TTS) antes de desplegar. La variable de entorno `COQUI_TOS_AGREED=1` y los argumentos `speaker_wav`/`language` están documentados en el propio README del kit de herramientas.',
        items: [
          '**La calidad del audio de referencia importa.** Un clip limpio de 6 segundos de un solo hablante, sin ruido de fondo ni música, produce un clon notablemente mejor que un clip corto, ruidoso o con varios hablantes.',
          '**La aceptación no interactiva de la CPML** es necesaria la primera vez que XTTS v2 se carga en un entorno desatendido (Docker, CI) — establece `COQUI_TOS_AGREED=1` antes de esa primera carga.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licencia y uso comercial',
        content: [
          '**Los pesos del modelo y las salidas de audio generadas por XTTS v2 están licenciados bajo la Coqui Public Model License (CPML) 1.0.0**, confirmado mediante el archivo de licencia publicado junto al modelo en [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt). La CPML establece explícitamente que "permite únicamente el uso no comercial de un modelo de aprendizaje automático y sus salidas" — los usos permitidos incluyen proyectos personales, investigación académica y trabajo como hobby, siempre que no recibas una compensación directa o indirecta ligada a ese uso.',
          '**Actualmente no existe una vía comercial activa para XTTS v2.** La ficha del modelo indica una dirección de contacto, info@coqui.ai, para consultas de licencia comercial, pero Coqui AI, la empresa, cerró sus servicios de pago en diciembre de 2023 — PromptQuorum no pudo confirmar que esa dirección esté activamente atendida ni que hoy se pueda obtener una licencia comercial. Trata XTTS v2 como exclusivamente no comercial a menos que confirmes lo contrario de forma independiente antes de lanzar un producto de pago.',
          '**La CPML se aplica específicamente a los pesos del modelo XTTS v2 y sus salidas — no al código del kit de herramientas Coqui TTS que ejecuta el modelo**, que está licenciado por separado bajo MPL-2.0 y sí permite el uso comercial con condiciones de divulgación de código sobre las modificaciones del kit. Este párrafo explica la forma general de la licencia; no es asesoría legal — lee la CPML tú mismo y consulta a un abogado antes de cualquier despliegue comercial.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa XTTS v2?',
            a: 'XTTS v2 se publica bajo la Coqui Public Model License (CPML) 1.0.0, una licencia no comercial que se aplica a los pesos del modelo y a sus salidas de audio generadas. Permite el uso personal, de investigación y como hobby, pero prohíbe el uso comercial — cualquier producto de pago, herramienta SaaS o entregable a un cliente — sin un acuerdo aparte. Esto no es asesoría legal; lee la CPML tú mismo antes de usarla comercialmente.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no sirve XTTS v2',
        content: [
          'XTTS v2 es un modelo de clonación de voz de alta calidad, no un motor de TTS de propósito general apto para despliegue comercial. Es la herramienta equivocada para las siguientes situaciones:',
        ],
        items: [
          '**Cualquier producto comercial sin una licencia confirmada.** La CPML es no comercial, y actualmente no existe una vía confirmada y activa hacia una licencia comercial tras el cierre de Coqui AI en 2023. No despliegues XTTS v2 en un producto de pago, una app con publicidad o un entregable a cliente sin confirmar de forma independiente los términos de licencia primero.',
          '**Uso en tiempo real solo con CPU y recursos limitados.** XTTS v2 sí admite streaming de baja latencia, pero ese rendimiento asume aceleración por GPU; solo en CPU es notablemente más lento que un motor ligero como [Piper](/power-local-llm/piper-tts-review), y puede no ser práctico para uso en tiempo real en hardware modesto como una Raspberry Pi.',
          '**Clonar una voz a partir de audio muy corto o ruidoso.** Aunque 6 segundos es el mínimo documentado, un clip de referencia ruidoso, comprimido o con varios hablantes produce un clon notablemente peor que una grabación limpia de un solo hablante.',
          '**Un idioma fuera de los 17 admitidos.** XTTS v2 admite exactamente inglés, español, francés, alemán, italiano, portugués, polaco, turco, ruso, neerlandés, checo, árabe, chino (zh-cn), japonés, húngaro, coreano e hindi — no hay una hoja de ruta oficial para más idiomas a fecha de esta publicación.',
          '**Suplantar a alguien sin su consentimiento.** Clonar la voz de una persona real sin su conocimiento o consentimiento plantea problemas de consentimiento, derechos de imagen y potencialmente fraude o suplantación que son independientes de la restricción no comercial de la CPML — se aplican al margen de los términos de licencia, tanto en uso personal como comercial.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a XTTS v2',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Piper](/power-local-llm/piper-tts-review)',
            'Mejor para': 'Síntesis solo con CPU más rápida, sin clonación de voz, tiempo real en una Raspberry Pi',
            'Licencia': 'GPL-3.0-or-later',
          },
          {
            'Herramienta': '[Kit de herramientas Coqui TTS](/power-local-llm/coqui-tts-review)',
            'Mejor para': 'El software que ejecuta XTTS v2 (y otros modelos) con una base de código más amplia y de licencia permisiva',
            'Licencia': 'MPL-2.0 (solo el kit)',
          },
          {
            'Herramienta': '[Bark](/power-local-llm/bark-tts-review)',
            'Mejor para': 'Audio expresivo, no verbal — risas, suspiros, sonido ambiental',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Mejor para': 'Máxima calidad de narración en inglés con sonido natural (sin clonación de voz)',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[ElevenLabs](https://elevenlabs.io)',
            'Mejor para': 'API en la nube gestionada con clonación de voz comercial y licencia comercial clara',
            'Licencia': 'Propietaria (API en la nube de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es XTTS v2?',
            a: 'XTTS v2 es un modelo de texto a voz con clonación de voz multilingüe publicado por Coqui que clona una voz a partir de apenas 6 segundos de audio de referencia y genera habla con esa voz en 17 idiomas, incluida la clonación entre idiomas.',
          },
          {
            q: '¿Puedo usar XTTS v2 comercialmente?',
            a: 'No sin un acuerdo aparte. XTTS v2 está licenciado bajo la Coqui Public Model License (CPML), que permite el uso personal, de investigación y como hobby, pero prohíbe el uso comercial — cualquier producto de pago, SaaS, contenido con publicidad o trabajo para clientes. Coqui AI, la empresa que lo publicó, cerró sus servicios de pago en diciembre de 2023, y PromptQuorum no pudo confirmar que hoy exista una vía comercial activa. Trata XTTS v2 como exclusivamente no comercial.',
          },
          {
            q: '¿Cuánto audio de referencia necesita XTTS v2 para clonar una voz?',
            a: 'Apenas 6 segundos de audio de referencia limpio y de un solo hablante, según su ficha oficial en Hugging Face. Un clip más largo y limpio suele producir un clon más preciso.',
          },
          {
            q: '¿Cuántos idiomas admite XTTS v2?',
            a: 'Exactamente 17: inglés, español, francés, alemán, italiano, portugués, polaco, turco, ruso, neerlandés, checo, árabe, chino (zh-cn), japonés, húngaro, coreano e hindi. Admite la clonación entre idiomas — clona una voz a partir de audio en uno de estos idiomas y genera habla en cualquiera de los otros.',
          },
          {
            q: '¿Cómo ejecuto XTTS v2?',
            a: 'Instala el kit de herramientas Coqui TTS con `pip install coqui-tts`, luego carga el modelo con `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. Establece primero la variable de entorno `COQUI_TOS_AGREED=1` si necesitas aceptar la licencia CPML de forma no interactiva, como en un contenedor Docker o una pipeline de CI.',
          },
          {
            q: '¿Necesito una GPU para ejecutar XTTS v2?',
            a: 'Se recomienda encarecidamente una GPU. XTTS v2 funciona en CPU, pero de forma notablemente más lenta — su latencia de streaming documentada inferior a 200 ms asume aceleración por GPU, y el uso solo con CPU no es práctico para aplicaciones en tiempo real.',
          },
          {
            q: '¿Cuál es la diferencia entre XTTS v2 y el kit de herramientas Coqui TTS?',
            a: 'XTTS v2 es un modelo específico de clonación de voz, licenciado bajo la CPML no comercial. El kit de herramientas Coqui TTS es el software — un paquete de Python y una CLI — que ejecuta XTTS v2 y otros modelos, licenciado por separado bajo MPL-2.0, que sí permite el uso comercial del propio código del kit.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'XTTS v2 sigue siendo uno de los modelos de clonación de voz local de mayor calidad disponibles en 2026, y la combinación de un requisito de clonación de 6 segundos, compatibilidad entre 17 idiomas y latencia de streaming inferior a 200 ms es genuinamente capaz para uso personal, investigación y prototipado. La decisión que realmente importa para la mayoría de los lectores es la licencia: la Coqui Public Model License es inequívocamente no comercial, y como Coqui AI cerró en diciembre de 2023, hoy no existe una vía confirmada y activa hacia una licencia comercial. Si tu caso de uso es personal, académico o un prototipo no comercial, XTTS v2 es una opción sólida y bien documentada. Si necesitas clonación de voz comercial, verifica los términos de licencia de forma independiente antes de construir sobre él, o combina este análisis con la cobertura de [Piper](/power-local-llm/piper-tts-review) y [Bark](/power-local-llm/bark-tts-review) de PromptQuorum para alternativas con licencia permisiva, o la [comparación con ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) para una opción comercial gestionada.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[XTTS v2 en Hugging Face](https://huggingface.co/coqui/XTTS-v2) — la ficha del modelo: idiomas, requisitos de clonación y referencia de licencia.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — el texto completo de la Coqui Public Model License (CPML) 1.0.0.',
          '[idiap/coqui-ai-TTS en GitHub](https://github.com/idiap/coqui-ai-TTS) — el kit de herramientas mantenido activamente que ejecuta XTTS v2, con documentación de uso.',
          '[Análisis de Coqui TTS](/power-local-llm/coqui-tts-review) — el análisis dedicado de PromptQuorum del kit de herramientas, incluida su historia de mantenimiento tras el cierre.',
          '[Licencias de TTS local y clonación de voz](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparación completa de licencias entre motores TTS locales.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Coqui TTS](/power-local-llm/coqui-tts-review) — el kit de herramientas que ejecuta XTTS v2, incluido su estado de mantenimiento tras el cierre de Coqui AI.',
          '[Licencias de TTS local y clonación de voz: Piper, XTTS v2, F5-TTS y Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — el análisis a fondo de licencias entre los principales motores TTS locales.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparación entre la nube y lo local para lectores que deciden si autoalojar.',
          '[Análisis de Piper TTS](/power-local-llm/piper-tts-review) — la alternativa de TTS local rápida, con licencia permisiva y solo CPU.',
          '[Análisis de Bark TTS](/power-local-llm/bark-tts-review) — el modelo de TTS local expresivo y no verbal, analizado con la misma profundidad.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2: análisis (2026) — clonación de voz multilingüe desde 6 segundos de audio',
      description:
        'XTTS v2, análisis: el modelo de clonación de voz multilingüe de Coqui clona una voz desde 6 segundos de audio en 17 idiomas. Comandos reales, licencia CPML no comercial y límites honestos para 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'es',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan modelos de clonación de voz locales y autoalojados' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'Clonación de voz' },
        { '@type': 'Thing', name: 'Texto a voz' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2: análisis (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-ja.webp',
    title: 'XTTS v2レビュー(2026):わずか6秒の音声から多言語ボイスクローニング',
    seoTitle: 'XTTS v2レビュー2026:多言語ボイスクローニング',
    intro:
      'XTTS v2はCoquiが公開した多言語ボイスクローニングモデルで、[Hugging Face](https://huggingface.co/coqui/XTTS-v2)で配布されており、わずか6秒の参照音声から声をクローンし、17言語で話させることができます。実行には[Coqui TTSツールキット](/power-local-llm/coqui-tts-review)を使う方法が中心で、活発にメンテナンスされているフォークは[idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)です。モデルの重みを直接使って単独で利用することもできます。このレビューでは、XTTS v2が実際に何をするか、実際の使用コマンド、そのライセンス(非商用のCoqui Public Model License、CPML)、そしてどこで使うべきか・使うべきでないかを扱います。なぜなら、これを当初公開した企業Coqui AIは2023年12月に有料サービスを終了しているからです。',
    metaDescription:
      'XTTS v2レビュー:Coquiの多言語ボイスクローニングモデルは6秒の音声から17言語で声をクローンします。実際のコマンド、非商用CPMLライセンス、2026年時点での正直な限界を解説。',
    twitterDescription:
      'XTTS v2レビュー2026:Coquiのボイスクローニングモデルはわずか6秒の参照音声から声をクローンし、17言語で話させます。実際のコマンド、非商用CPMLライセンスの解説、そして代わりに何を使うべきかを紹介。',
    audience:
      '個人プロジェクト、研究、プロトタイピング向けにローカルでセルフホストするボイスクローニングを評価している開発者や研究者で、実際の構築を始める前に非商用ライセンスを理解する必要がある人。',
    readTime: '12分で読了',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2レビュー',
    targetKeywords: [
      'xtts v2 レビュー',
      'xtts v2',
      'xtts v2 ボイスクローニング',
      'xtts v2 ライセンス',
      'xtts v2 商用利用',
      'coqui xtts v2',
      'xtts v2 言語',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2はCoquiが公開した多言語ボイスクローニングモデルで、わずか6秒の参照音声から声をクローンし、17言語でその声による音声を生成します。** 実行には[Coqui TTSツールキット](/power-local-llm/coqui-tts-review)を使います(`pip install coqui-tts`、その後 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`)。そのライセンスであるCoqui Public Model License(CPML)は**非商用**です。さらに、企業であるCoqui AIは2023年12月に有料サービスを終了しているため、現在商用ライセンスへの有効な道筋は存在しません。ローカルTTSエンジン全体のライセンス比較については、PromptQuorumの[ローカルTTSライセンスガイド](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)を参照してください。',
    quickAnswerTop: {
      en: {
        question: 'XTTS v2とは何か、商用利用できるか?',
        answer:
          'XTTS v2は、わずか6秒の参照音声から利用できる、現時点で最高品質のローカルボイスクローニングを求める場合に価値があります。17言語で音声を生成でき、言語をまたいだクローニング(英語で声をクローンし、スペイン語で話させる)にも対応しています。実行にはCoqui TTSツールキット、またはHugging Face上のモデルの重みを直接使う方法があり、GPUアクセラレーションが推奨され、メンテナーが文書化している200ミリ秒未満のストリーミングレイテンシがあります。商用利用については、別途契約なしにはできません。そのライセンスであるCoqui Public Model License(CPML)は、個人プロジェクト、研究、趣味の利用のみに使用を明示的に制限しています。XTTS v2を公開した企業Coqui AIは2023年12月に有料サービスを終了しており、現在それに対する商用ライセンスを提供する主体は存在しません。商用製品向けに寛容なライセンスのエンジンが必要な場合はPiperまたはKokoroを選んでください。どちらも声のクローニングはできませんが、どちらも商用利用が無料です。',
        bullets: [
          '公式のHugging Faceモデルカードによれば、わずか6秒の参照音声から声をクローンできる。',
          'クローンした声を17言語で話させることができ、言語をまたいだクローニングにも対応。',
          'ライセンス:Coqui Public Model License(CPML)、非商用 — 個人・研究・趣味利用のみ。',
          '有効な商用ライセンスの道筋はない:公開企業のCoqui AIは2023年12月に有料サービスを終了。',
          'Coqui TTSツールキット(pip install coqui-tts)で実行。最初の音声出力まで200ミリ秒未満のストリーミングに対応。',
          'GPUを強く推奨。CPUでも動作するが速度は大幅に低下する。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'XTTS v2が実際に行うこと', anchor: 'what-it-does' },
      { label: '実際の使用例', anchor: 'usage-examples' },
      { label: 'ライセンスと商用利用', anchor: 'license-cost' },
      { label: 'XTTS v2が向いていないこと', anchor: 'limitations' },
      { label: 'XTTS v2の代替案', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'XTTS v2はCoquiの多言語ボイスクローニングモデルで、6秒の参照音声から声をクローンして17言語で話させることができ、非商用のCoqui Public Model License(CPML)の下でライセンスされており、公開企業のCoqui AIが2023年12月に有料サービスを終了して以来、有効な商用ライセンスの道筋はない。',
          },
          {
            type: 'plain-terms',
            text: 'これは、誰かが話す短い音声クリップを聞き取り、同じ声で17の異なる言語による新しい文章を生成できるAIモデルです。個人利用や研究利用は無料ですが、現在は存在しない別途の契約なしに有料製品で使うことはできません。',
          },
        ],
        items: [
          'わずか6秒の参照音声から、17言語にわたって声をクローンできる。',
          'Coqui TTSツールキット(`pip install coqui-tts`)、またはHugging Face上のモデルの重みを直接使って実行できる。',
          'ライセンス:Coqui Public Model License(CPML) — 非商用のみ。',
          '有効な商用ライセンスの道筋はない:Coqui AIは2023年12月に有料サービスを終了した。',
          '最初の音声出力まで200ミリ秒未満のストリーミングレイテンシが文書化されている。GPUを強く推奨。',
          'CPMLへの同意が必要 — Dockerや CIで非対話的に同意するには `COQUI_TOS_AGREED=1` を設定する。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'CPMLは、XTTS v2を実行するCoqui TTSツールキットと同じライセンスではありません。ツールキット自体はMPL-2.0ですが、この特定モデルの重みと出力は非商用です。詳しくは下記の「ライセンスと商用利用」セクションを参照してください。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'XTTS v2が実際に行うこと',
        content: [
          'XTTS v2はGPTベースの、言語をまたいだボイスクローニング対応のテキスト読み上げモデルです。短い参照音声クリップと目的のテキストを与えると、参照音声とは異なる言語であっても、クローンした声で音声を生成します。',
        ],
        items: [
          '**数秒でのボイスクローニング。** Coquiの公式モデルカードによれば、6秒の参照音声クリップ1つだけで声をクローンできる — 新しい声のためのファインチューニングや学習実行は不要。',
          '**言語をまたいだクローニングに対応した17言語サポート。** 対応言語は英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ポーランド語、トルコ語、ロシア語、オランダ語、チェコ語、アラビア語、中国語(zh-cn)、日本語、ハンガリー語、韓国語、ヒンディー語。英語音声から声をクローンし、同じクローンした声で他の16言語のいずれでも音声を生成できる。',
          '**ストリーミング推論。** XTTS v2は最初の音声出力まで200ミリ秒未満のレイテンシでストリーミング合成に対応しており、この機能がCoqui TTS v0.20.0で導入されて以来文書化されている — 完全な音声ファイルのレンダリングを待つには遅すぎるインタラクティブな音声アプリケーションで有用。',
          '**Coqui TTSツールキット経由での実行。** XTTS v2を実行する主要かつサポート対象の方法は[Coqui TTS](/power-local-llm/coqui-tts-review)(`pip install coqui-tts`)経由で、`TTS("tts_models/multilingual/multi-dataset/xtts_v2")`として公開されている。',
          '**話者埋め込みの再利用。** 毎回生の参照クリップを渡す以外に、ツールキットは話者の潜在埋め込みを計算して再利用することをサポートしており、同じクローンした声で繰り返し合成する際の再計算を回避できる。',
        ],
        note: 'XTTS v2はモデルであり、ツールキットではありません — このモデル(および他のモデル)を実行するソフトウェアについては、PromptQuorumの専用[Coqui TTSレビュー](/power-local-llm/coqui-tts-review)を参照してください。',
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例',
        content: [
          'これらのコマンドは、XTTS v2を実行する主要かつサポート対象の方法である、Coqui TTSツールキットの文書化されたPython APIを使用しています。',
        ],
        codeBlock: `# ツールキットをインストール
pip install coqui-tts

# CPMLに非対話的に同意する(Docker/CIでは必須。そうしないと
# 初回ロード時に対話的なプロンプトが表示される)
export COQUI_TOS_AGREED=1

# Python API: 声をクローンして音声を生成
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# 同一言語でのクローニング
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# 言語をまたいだクローニング: 英語音声からクローンし、スペイン語で話す
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# ストリーミング合成(最初の音声出力までのレイテンシが低い)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'ストリーミングAPIのメソッド名やシグネチャの正確な内容は、ツールキットのバージョン間で変わる可能性があります — デプロイ前に最新の[Coqui TTSドキュメント](https://github.com/idiap/coqui-ai-TTS)を確認してください。`COQUI_TOS_AGREED=1` 環境変数と `speaker_wav`/`language` 引数は、ツールキット自体のREADMEに文書化されています。',
        items: [
          '**参照音声の品質が重要。** バックグラウンドノイズや音楽のない単一話者のクリーンな6秒クリップは、短くノイズが多い、または複数話者のクリップよりも明らかに優れたクローンを生成する。',
          '**非対話的なCPML同意** は、無人環境(Docker、CI)でXTTS v2が初めてロードされる際に必要 — その初回ロード前に `COQUI_TOS_AGREED=1` を設定すること。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'ライセンスと商用利用',
        content: [
          '**XTTS v2のモデルの重みと生成された音声出力は、Coqui Public Model License(CPML)1.0.0の下でライセンスされています。** これは[Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt)上でモデルと一緒に公開されているライセンスファイルによって確認済みです。CPMLは「機械学習モデルとその出力の非商用利用のみを許可する」と明示しており、許可される用途には個人プロジェクト、学術研究、趣味の作業が含まれます。ただし、その利用に関連して直接的または間接的な報酬を受け取らないことが条件です。',
          '**現在、XTTS v2には有効な商用ライセンスの道筋はありません。** モデルカードには商用ライセンスに関する問い合わせ先として info@coqui.ai というアドレスが記載されていますが、企業であるCoqui AIは2023年12月に有料サービスを終了しています — PromptQuorumはこのアドレスが実際に対応しているか、今日商用ライセンスが取得可能かを確認できませんでした。有料製品を出荷する前に独自に別の確認が取れない限り、XTTS v2は非商用のみとして扱ってください。',
          '**CPMLはXTTS v2のモデルの重みとその出力に特化して適用され、モデルを実行するCoqui TTSツールキットのコードには適用されません。** ツールキットは別途MPL-2.0でライセンスされており、ツールキットの改変に関する情報開示条件付きで商用利用が認められています。この段落はライセンスの大まかな形を説明するものであり、法的助言ではありません — 商用展開の前に自分でCPMLを読み、弁護士に相談してください。',
        ],
        faqs: [
          {
            q: 'XTTS v2はどのライセンスを使用していますか?',
            a: 'XTTS v2はCoqui Public Model License(CPML)1.0.0の下で公開されており、これはモデルの重みと生成された音声出力に適用される非商用ライセンスです。個人・研究・趣味利用は許可されますが、有料製品、SaaSツール、クライアント成果物などの商用利用は、別途の契約なしには禁止されています。これは法的助言ではありません。商用利用の前に自分でCPMLを読んでください。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'XTTS v2が向いていないこと',
        content: [
          'XTTS v2は高品質なボイスクローニングモデルであり、商用展開可能な汎用TTSエンジンではありません。以下のような状況には向いていません。',
        ],
        items: [
          '**確認済みライセンスのない商用製品全般。** CPMLは非商用であり、2023年のCoqui AIの閉鎖後、確認済みで有効な商用ライセンスへの道筋は現在ありません。ライセンス条件を独自に確認しないまま、有料製品、広告付きアプリ、クライアント成果物にXTTS v2を出荷しないでください。',
          '**CPUのみ、リソースが限られたリアルタイム利用。** XTTS v2は低レイテンシのストリーミングに対応していますが、その性能はGPUアクセラレーションを前提としています。CPUのみでは、[Piper](/power-local-llm/piper-tts-review)のような軽量エンジンより明らかに遅く、Raspberry Piのような控えめなハードウェアでのリアルタイム利用には実用的でない可能性があります。',
          '**非常に短い、またはノイズの多い音声からのボイスクローニング。** 6秒が文書化された最小値ですが、ノイズが多い、圧縮されている、または複数話者の参照クリップは、クリーンな単一話者の録音よりも明らかに劣るクローンを生成します。',
          '**対応する17言語以外の言語。** XTTS v2は英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ポーランド語、トルコ語、ロシア語、オランダ語、チェコ語、アラビア語、中国語(zh-cn)、日本語、ハンガリー語、韓国語、ヒンディー語のみに対応しており、本記事公開時点で追加言語の公式ロードマップはありません。',
          '**同意のない本人なりすまし。** 実在の人物の声を本人の知識や同意なしにクローンすることは、CPMLの非商用制限とは独立した、同意、パブリシティ権、場合によっては詐欺やなりすましに関する懸念を生じさせます。これらはライセンス条件に関係なく、個人利用・商用利用のいずれでも適用されます。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'XTTS v2の代替案',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Piper](/power-local-llm/piper-tts-review)',
            '最適な用途': '最速のCPUのみ合成、ボイスクローニングなし、Raspberry Piでのリアルタイム利用',
            'ライセンス': 'GPL-3.0-or-later',
          },
          {
            'ツール': '[Coqui TTSツールキット](/power-local-llm/coqui-tts-review)',
            '最適な用途': 'XTTS v2(および他のモデル)を実行するソフトウェアで、より広く寛容なライセンスのコードベース',
            'ライセンス': 'MPL-2.0(ツールキットのみ)',
          },
          {
            'ツール': '[Bark](/power-local-llm/bark-tts-review)',
            '最適な用途': '表現力豊かな非音声オーディオ — 笑い声、ため息、環境音',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最適な用途': '最高水準の自然な英語ナレーション品質(ボイスクローニングなし)',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[ElevenLabs](https://elevenlabs.io)',
            '最適な用途': '商用ボイスクローニングと明確な商用ライセンスを備えたマネージドクラウドAPI',
            'ライセンス': 'プロプライエタリ(有料クラウドAPI)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'XTTS v2とは何ですか?',
            a: 'XTTS v2はCoquiが公開した多言語ボイスクローニング対応のテキスト読み上げモデルで、わずか6秒の参照音声から声をクローンし、言語をまたいだクローニングを含む17言語でその声による音声を生成します。',
          },
          {
            q: 'XTTS v2を商用利用できますか?',
            a: '別途の契約なしにはできません。XTTS v2はCoqui Public Model License(CPML)の下でライセンスされており、個人・研究・趣味利用は許可されますが、有料製品、SaaS、広告付きコンテンツ、クライアント業務などの商用利用は禁止されています。これを公開した企業Coqui AIは2023年12月に有料サービスを終了しており、PromptQuorumは今日有効な商用ライセンスの道筋が存在するかを確認できませんでした。XTTS v2は非商用のみとして扱ってください。',
          },
          {
            q: 'XTTS v2が声をクローンするにはどれくらいの参照音声が必要ですか?',
            a: '公式のHugging Faceモデルカードによれば、クリーンな単一話者の参照音声がわずか6秒あれば十分です。より長くクリーンなクリップの方が、一般的により正確なクローンを生成します。',
          },
          {
            q: 'XTTS v2は何言語に対応していますか?',
            a: '正確には17言語です:英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ポーランド語、トルコ語、ロシア語、オランダ語、チェコ語、アラビア語、中国語(zh-cn)、日本語、ハンガリー語、韓国語、ヒンディー語。これらの言語のいずれかの音声から声をクローンし、他のいずれの言語でも音声を生成できる、言語をまたいだクローニングに対応しています。',
          },
          {
            q: 'XTTS v2はどうやって実行しますか?',
            a: '`pip install coqui-tts` でCoqui TTSツールキットをインストールし、`TTS("tts_models/multilingual/multi-dataset/xtts_v2")` でモデルをロードします。DockerコンテナやCIパイプラインなど、非対話的にCPMLライセンスに同意する必要がある場合は、先に環境変数 `COQUI_TOS_AGREED=1` を設定してください。',
          },
          {
            q: 'XTTS v2の実行にGPUは必要ですか?',
            a: 'GPUを強く推奨します。XTTS v2はCPUでも動作しますが、明らかに遅くなります — 文書化されている200ミリ秒未満のストリーミングレイテンシはGPUアクセラレーションを前提としており、CPUのみの利用はリアルタイムアプリケーションには実用的ではありません。',
          },
          {
            q: 'XTTS v2とCoqui TTSツールキットの違いは何ですか?',
            a: 'XTTS v2は非商用のCPMLの下でライセンスされた特定のボイスクローニングモデルです。Coqui TTSツールキットは、XTTS v2や他のモデルを実行するソフトウェア(Pythonパッケージ兼CLI)であり、別途MPL-2.0でライセンスされています。これはツールキットのコード自体の商用利用を認めています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'XTTS v2は2026年時点でも利用可能な、最高品質のローカルボイスクローニングモデルの一つであり続けています。6秒でのクローニング要件、17言語にわたる言語横断サポート、200ミリ秒未満のストリーミングレイテンシの組み合わせは、個人利用、研究、プロトタイピングにおいて本当に実力があります。ほとんどの読者にとって実際に重要な判断はライセンスです。Coqui Public Model Licenseは紛れもなく非商用であり、Coqui AIが2023年12月に閉鎖したため、今日確認済みで有効な商用ライセンスへの道筋はありません。ユースケースが個人利用、学術利用、または非商用のプロトタイプであれば、XTTS v2は強力で十分に文書化された選択肢です。商用のボイスクローニングが必要な場合は、構築を始める前にライセンス条件を独自に確認するか、寛容なライセンスの代替案としてPromptQuorumの[Piper](/power-local-llm/piper-tts-review)や[Bark](/power-local-llm/bark-tts-review)のレビュー、あるいはマネージドな商用オプションとして[ElevenLabsとの比較](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)を併せて参照してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Hugging Face上のXTTS v2](https://huggingface.co/coqui/XTTS-v2) — モデルカード:言語、クローニング要件、ライセンス参照。',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Coqui Public Model License(CPML)1.0.0の全文。',
          '[GitHub上のidiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — XTTS v2を実行する、活発にメンテナンスされているツールキットと使用方法のドキュメント。',
          '[Coqui TTSレビュー](/power-local-llm/coqui-tts-review) — PromptQuorumによるツールキットの専用レビュー。閉鎖後のメンテナンス履歴を含む。',
          '[ローカルTTSとボイスクローニングのライセンス](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — ローカルTTSエンジン全体のライセンス完全比較。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Coqui TTSレビュー](/power-local-llm/coqui-tts-review) — XTTS v2を実行するツールキット。Coqui AI閉鎖後のメンテナンス状況を含む。',
          '[ローカルTTSとボイスクローニングのライセンス:Piper、XTTS v2、F5-TTS、Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 主要なローカルTTSエンジン全体のライセンス詳細解説。',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — セルフホストするかどうかを検討する読者向けの、クラウドとローカルの比較。',
          '[Piper TTSレビュー](/power-local-llm/piper-tts-review) — 高速で寛容なライセンスの、CPUのみのローカルTTS代替案。',
          '[Bark TTSレビュー](/power-local-llm/bark-tts-review) — 表現力豊かな非音声オーディオのローカルTTSモデルを、同じ深さでレビュー。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2レビュー(2026):わずか6秒の音声から多言語ボイスクローニング',
      description:
        'XTTS v2レビュー:Coquiの多言語ボイスクローニングモデルは6秒の音声から17言語で声をクローンします。実際のコマンド、非商用CPMLライセンス、2026年時点での正直な限界を解説。',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'ja',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルでセルフホストするボイスクローニングモデルを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'ボイスクローニング' },
        { '@type': 'Thing', name: 'テキスト読み上げ' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2レビュー(2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-pt.webp',
    title: 'XTTS v2: análise (2026) — clonagem de voz multilíngue a partir de 6 segundos de áudio',
    seoTitle: 'XTTS v2: análise 2026 — clonagem de voz multilíngue',
    intro:
      'O XTTS v2 é um modelo de clonagem de voz multilíngue lançado pela Coqui, distribuído no [Hugging Face](https://huggingface.co/coqui/XTTS-v2), que clona uma voz a partir de apenas 6 segundos de áudio de referência e a faz falar em 17 idiomas. Ele roda através do [kit de ferramentas Coqui TTS](/power-local-llm/coqui-tts-review) — o fork mantido ativamente é o [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — ou pode ser usado de forma independente pelos pesos do modelo. Esta análise cobre o que o XTTS v2 realmente faz, comandos de uso reais, sua licença (a Coqui Public Model License, CPML, não comercial) e onde ele é ou não a ferramenta certa, já que a Coqui AI, a empresa que o lançou originalmente, encerrou seus serviços pagos em dezembro de 2023.',
    metaDescription:
      'XTTS v2, análise: o modelo de clonagem de voz multilíngue da Coqui clona uma voz a partir de 6 segundos de áudio em 17 idiomas. Comandos reais, licença CPML não comercial e limites honestos para 2026.',
    twitterDescription:
      'XTTS v2, análise 2026: o modelo de clonagem de voz da Coqui clona uma voz a partir de apenas 6 segundos de áudio de referência e a faz falar em 17 idiomas. Comandos reais, licença CPML não comercial explicada, e quando usar outra coisa.',
    audience:
      'Desenvolvedores e pesquisadores avaliando clonagem de voz local e auto-hospedada para projetos pessoais, pesquisa ou prototipagem, que precisam entender a licença não comercial antes de construir algo real sobre ela.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 análise',
    targetKeywords: [
      'xtts v2 análise',
      'xtts v2',
      'xtts v2 clonagem de voz',
      'xtts v2 licença',
      'xtts v2 uso comercial',
      'coqui xtts v2',
      'xtts v2 idiomas',
      'xtts v2 vs elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**O XTTS v2 é um modelo de clonagem de voz multilíngue da Coqui que clona uma voz a partir de apenas 6 segundos de áudio de referência e gera fala nessa voz em 17 idiomas.** Ele roda através do [kit de ferramentas Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`, depois `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). Sua licença, a Coqui Public Model License (CPML), é **não comercial** — e como a Coqui AI, a empresa, encerrou seus serviços pagos em dezembro de 2023, atualmente não existe um caminho ativo para uma licença comercial. Para uma comparação completa de licenças entre motores de TTS locais, veja o [guia de licenças de TTS local](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) da PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o XTTS v2 e posso usá-lo comercialmente?',
        answer:
          'O XTTS v2 vale a pena se você quer a clonagem de voz local de maior qualidade disponível, a partir de apenas 6 segundos de áudio de referência, gerando fala em 17 idiomas, incluindo clonagem entre idiomas (clonar uma voz em inglês, falar em espanhol). Ele roda pelo kit de ferramentas Coqui TTS ou diretamente pelos pesos do modelo no Hugging Face, com aceleração por GPU recomendada e latência de streaming abaixo de 200ms documentada por seus mantenedores. Não, você não pode usá-lo comercialmente sem um acordo separado: sua licença, a Coqui Public Model License (CPML), restringe explicitamente o uso a fins não comerciais — projetos pessoais, pesquisa e uso como hobby. A Coqui AI, a empresa que lançou o XTTS v2, encerrou seus serviços pagos em dezembro de 2023, então atualmente nenhuma entidade oferece uma licença comercial para ele. Escolha o Piper ou o Kokoro se precisar de um motor com licença permissiva para um produto comercial; nenhum dos dois clona vozes, mas ambos são gratuitos para uso comercial.',
        bullets: [
          'Clona uma voz a partir de apenas 6 segundos de áudio de referência, segundo sua ficha oficial no Hugging Face.',
          'Faz a voz clonada falar em 17 idiomas, incluindo clonagem entre idiomas.',
          'Licença: Coqui Public Model License (CPML), não comercial — apenas uso pessoal, de pesquisa e hobby.',
          'Sem caminho comercial ativo: a Coqui AI, empresa que o lançou, encerrou seus serviços pagos em dezembro de 2023.',
          'Roda pelo kit de ferramentas Coqui TTS (pip install coqui-tts); suporta streaming com latência abaixo de 200ms até o primeiro áudio.',
          'GPU fortemente recomendada; funciona em CPU, mas com velocidade bem menor.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que o XTTS v2 realmente faz', anchor: 'what-it-does' },
      { label: 'Exemplos reais de uso', anchor: 'usage-examples' },
      { label: 'Licença e uso comercial', anchor: 'license-cost' },
      { label: 'Para que o XTTS v2 não serve', anchor: 'limitations' },
      { label: 'Alternativas ao XTTS v2', anchor: 'alternatives' },
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
            text: 'O XTTS v2 é o modelo de clonagem de voz multilíngue da Coqui que clona uma voz a partir de 6 segundos de áudio de referência e a faz falar em 17 idiomas, licenciado sob a Coqui Public Model License (CPML) não comercial, sem caminho comercial ativo desde que a Coqui AI, a empresa que o lançou, encerrou seus serviços pagos em dezembro de 2023.',
          },
          {
            type: 'plain-terms',
            text: 'É um modelo de IA que ouve um trecho curto de alguém falando e depois consegue gerar novas frases nessa mesma voz, em 17 idiomas diferentes — gratuito para uso pessoal e de pesquisa, mas não para um produto pago sem um acordo separado que atualmente não existe.',
          },
        ],
        items: [
          'Clona uma voz a partir de apenas 6 segundos de áudio de referência, em 17 idiomas.',
          'Roda pelo kit de ferramentas Coqui TTS (`pip install coqui-tts`) ou diretamente pelos pesos do modelo no Hugging Face.',
          'Licença: Coqui Public Model License (CPML) — somente não comercial.',
          'Sem caminho comercial ativo: a Coqui AI encerrou seus serviços pagos em dezembro de 2023.',
          'Latência de streaming documentada abaixo de 200ms até o primeiro áudio; GPU fortemente recomendada.',
          'Exige aceitar a CPML — defina `COQUI_TOS_AGREED=1` para fazer isso de forma não interativa em Docker ou CI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A CPML não é a mesma licença do kit de ferramentas Coqui TTS que executa o XTTS v2 — o kit é MPL-2.0, mas os pesos e as saídas deste modelo específico são não comerciais. Veja a seção Licença e uso comercial abaixo.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'O que o XTTS v2 realmente faz',
        content: [
          'O XTTS v2 é um modelo de texto para fala com clonagem de voz entre idiomas, baseado em GPT. Dado um clipe de áudio de referência curto e um texto-alvo, ele gera fala na voz clonada, inclusive em um idioma diferente do áudio de referência.',
        ],
        items: [
          '**Clonagem de voz em poucos segundos.** Um único clipe de áudio de referência de 6 segundos é suficiente para clonar uma voz, segundo a ficha oficial da Coqui — nenhum ajuste fino ou treinamento é necessário para uma nova voz.',
          '**Suporte a 17 idiomas com clonagem entre idiomas.** Os idiomas suportados são inglês, espanhol, francês, alemão, italiano, português, polonês, turco, russo, holandês, tcheco, árabe, chinês (zh-cn), japonês, húngaro, coreano e hindi — você pode clonar uma voz a partir de áudio em inglês e gerar fala em qualquer um dos outros 16 idiomas com essa mesma voz clonada.',
          '**Inferência por streaming.** O XTTS v2 suporta síntese por streaming com latência abaixo de 200ms até o primeiro áudio, documentada desde que o recurso foi introduzido no Coqui TTS v0.20.0 — útil para aplicações de voz interativas em que esperar um arquivo de áudio completo é lento demais.',
          '**Roda pelo kit de ferramentas Coqui TTS.** A forma principal e suportada de executar o XTTS v2 é através do [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`), que o expõe como `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`.',
          '**Reutilização de embedding de locutor.** Além de passar um clipe de referência bruto a cada vez, o kit de ferramentas permite calcular e reutilizar o embedding latente de um locutor, evitando recálculo em sínteses repetidas com a mesma voz clonada.',
        ],
        note: 'O XTTS v2 é um modelo, não um kit de ferramentas — para o software que o executa (e outros modelos), veja a [análise dedicada do Coqui TTS](/power-local-llm/coqui-tts-review) da PromptQuorum.',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos reais de uso',
        content: [
          'Estes comandos usam a API Python documentada do kit de ferramentas Coqui TTS, a forma principal e suportada de executar o XTTS v2.',
        ],
        codeBlock: `# Instalar o kit de ferramentas
pip install coqui-tts

# Aceitar a CPML de forma não interativa (necessário para Docker/CI;
# caso contrário, aparece um prompt interativo no primeiro carregamento)
export COQUI_TOS_AGREED=1

# API Python: clonar uma voz e gerar fala
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# Clonagem no mesmo idioma
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# Clonagem entre idiomas: clonar de áudio em inglês, falar em espanhol
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# Síntese por streaming (baixa latência até o primeiro áudio)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'O nome exato e a assinatura do método da API de streaming podem mudar entre versões do kit de ferramentas — confira a [documentação atual do Coqui TTS](https://github.com/idiap/coqui-ai-TTS) antes de implantar. A variável de ambiente `COQUI_TOS_AGREED=1` e os argumentos `speaker_wav`/`language` estão documentados no próprio README do kit de ferramentas.',
        items: [
          '**A qualidade do áudio de referência importa.** Um clipe limpo de 6 segundos de um único locutor, sem ruído de fundo ou música, produz um clone notavelmente melhor do que um clipe curto, ruidoso ou com vários locutores.',
          '**A aceitação não interativa da CPML** é necessária na primeira vez que o XTTS v2 é carregado em um ambiente não supervisionado (Docker, CI) — defina `COQUI_TOS_AGREED=1` antes desse primeiro carregamento.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'Licença e uso comercial',
        content: [
          '**Os pesos do modelo e as saídas de áudio geradas pelo XTTS v2 são licenciados sob a Coqui Public Model License (CPML) 1.0.0**, confirmado pelo arquivo de licença publicado junto ao modelo no [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt). A CPML afirma explicitamente que "permite apenas o uso não comercial de um modelo de aprendizado de máquina e suas saídas" — usos permitidos incluem projetos pessoais, pesquisa acadêmica e trabalho como hobby, desde que você não receba remuneração direta ou indireta vinculada a esse uso.',
          '**Atualmente não existe um caminho comercial ativo para o XTTS v2.** A ficha do modelo lista um endereço de contato, info@coqui.ai, para consultas de licenciamento comercial, mas a Coqui AI, a empresa, encerrou seus serviços pagos em dezembro de 2023 — a PromptQuorum não conseguiu confirmar que esse endereço está ativamente atendido ou que uma licença comercial pode ser obtida hoje. Trate o XTTS v2 como exclusivamente não comercial, a menos que confirme o contrário de forma independente antes de lançar um produto pago.',
          '**A CPML se aplica especificamente aos pesos do modelo XTTS v2 e suas saídas — não ao código do kit de ferramentas Coqui TTS que executa o modelo**, que é licenciado separadamente sob a MPL-2.0 e permite uso comercial com condições de divulgação de código sobre modificações do kit. Este parágrafo explica a forma geral da licença; não é aconselhamento jurídico — leia a CPML você mesmo e consulte um advogado antes de qualquer implantação comercial.',
        ],
        faqs: [
          {
            q: 'Qual licença o XTTS v2 usa?',
            a: 'O XTTS v2 é lançado sob a Coqui Public Model License (CPML) 1.0.0, uma licença não comercial que se aplica aos pesos do modelo e suas saídas de áudio geradas. Ela permite uso pessoal, de pesquisa e hobby, mas proíbe o uso comercial — qualquer produto pago, ferramenta SaaS ou entrega a cliente — sem um acordo separado. Isso não é aconselhamento jurídico; leia a CPML você mesmo antes de qualquer uso comercial.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o XTTS v2 não serve',
        content: [
          'O XTTS v2 é um modelo de clonagem de voz de alta qualidade, não um motor de TTS de uso geral pronto para implantação comercial. É a ferramenta errada para as seguintes situações:',
        ],
        items: [
          '**Qualquer produto comercial sem uma licença confirmada.** A CPML é não comercial, e atualmente não existe um caminho confirmado e ativo para uma licença comercial após o encerramento da Coqui AI em 2023. Não lance o XTTS v2 em um produto pago, aplicativo com anúncios ou entrega a cliente sem confirmar de forma independente os termos de licenciamento primeiro.',
          '**Uso em tempo real apenas com CPU e recursos limitados.** O XTTS v2 suporta streaming de baixa latência, mas esse desempenho assume aceleração por GPU; apenas em CPU, ele é notavelmente mais lento que um motor leve como o [Piper](/power-local-llm/piper-tts-review), e pode não ser prático para uso em tempo real em hardware modesto, como um Raspberry Pi.',
          '**Clonar uma voz a partir de áudio muito curto ou ruidoso.** Embora 6 segundos seja o mínimo documentado, um clipe de referência ruidoso, comprimido ou com vários locutores produz um clone notavelmente pior do que uma gravação limpa de um único locutor.',
          '**Um idioma fora dos 17 suportados.** O XTTS v2 suporta exatamente inglês, espanhol, francês, alemão, italiano, português, polonês, turco, russo, holandês, tcheco, árabe, chinês (zh-cn), japonês, húngaro, coreano e hindi — não há roteiro oficial para idiomas adicionais até a publicação desta análise.',
          '**Personificar alguém sem consentimento.** Clonar a voz de uma pessoa real sem seu conhecimento ou consentimento levanta questões de consentimento, direito de imagem e potencialmente fraude ou personificação que são independentes da restrição não comercial da CPML — essas se aplicam independentemente dos termos de licença, tanto em uso pessoal quanto comercial.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao XTTS v2',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor uso', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Piper](/power-local-llm/piper-tts-review)',
            'Melhor uso': 'Síntese apenas em CPU mais rápida, sem clonagem de voz, tempo real em um Raspberry Pi',
            'Licença': 'GPL-3.0-or-later',
          },
          {
            'Ferramenta': '[Kit de ferramentas Coqui TTS](/power-local-llm/coqui-tts-review)',
            'Melhor uso': 'O software que executa o XTTS v2 (e outros modelos) com uma base de código mais ampla e de licença permissiva',
            'Licença': 'MPL-2.0 (apenas o kit)',
          },
          {
            'Ferramenta': '[Bark](/power-local-llm/bark-tts-review)',
            'Melhor uso': 'Áudio expressivo, não verbal — risadas, suspiros, som ambiente',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'Melhor uso': 'Máxima qualidade de narração em inglês com som natural (sem clonagem de voz)',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[ElevenLabs](https://elevenlabs.io)',
            'Melhor uso': 'API em nuvem gerenciada com clonagem de voz comercial e licenciamento comercial claro',
            'Licença': 'Proprietária (API em nuvem paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o XTTS v2?',
            a: 'O XTTS v2 é um modelo de texto para fala com clonagem de voz multilíngue lançado pela Coqui, que clona uma voz a partir de apenas 6 segundos de áudio de referência e gera fala nessa voz em 17 idiomas, incluindo clonagem entre idiomas.',
          },
          {
            q: 'Posso usar o XTTS v2 comercialmente?',
            a: 'Não sem um acordo separado. O XTTS v2 é licenciado sob a Coqui Public Model License (CPML), que permite uso pessoal, de pesquisa e hobby, mas proíbe uso comercial — qualquer produto pago, SaaS, conteúdo com anúncios ou trabalho para clientes. A Coqui AI, a empresa que o lançou, encerrou seus serviços pagos em dezembro de 2023, e a PromptQuorum não conseguiu confirmar que existe hoje um caminho comercial ativo. Trate o XTTS v2 como exclusivamente não comercial.',
          },
          {
            q: 'Quanto áudio de referência o XTTS v2 precisa para clonar uma voz?',
            a: 'Apenas 6 segundos de áudio de referência limpo e de um único locutor, segundo sua ficha oficial no Hugging Face. Um clipe mais longo e limpo geralmente produz um clone mais preciso.',
          },
          {
            q: 'Quantos idiomas o XTTS v2 suporta?',
            a: 'Exatamente 17: inglês, espanhol, francês, alemão, italiano, português, polonês, turco, russo, holandês, tcheco, árabe, chinês (zh-cn), japonês, húngaro, coreano e hindi. Ele suporta clonagem entre idiomas — clone uma voz a partir de áudio em um desses idiomas e gere fala em qualquer um dos outros.',
          },
          {
            q: 'Como executo o XTTS v2?',
            a: 'Instale o kit de ferramentas Coqui TTS com `pip install coqui-tts`, depois carregue o modelo com `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. Defina primeiro a variável de ambiente `COQUI_TOS_AGREED=1` se precisar aceitar a licença CPML de forma não interativa, como em um contêiner Docker ou pipeline de CI.',
          },
          {
            q: 'Preciso de uma GPU para executar o XTTS v2?',
            a: 'Uma GPU é fortemente recomendada. O XTTS v2 roda em CPU, mas de forma notavelmente mais lenta — sua latência de streaming documentada abaixo de 200ms assume aceleração por GPU, e o uso apenas em CPU não é prático para aplicações em tempo real.',
          },
          {
            q: 'Qual é a diferença entre o XTTS v2 e o kit de ferramentas Coqui TTS?',
            a: 'O XTTS v2 é um modelo específico de clonagem de voz, licenciado sob a CPML não comercial. O kit de ferramentas Coqui TTS é o software — um pacote Python e uma CLI — que executa o XTTS v2 e outros modelos, licenciado separadamente sob a MPL-2.0, que permite o uso comercial do código do kit em si.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O XTTS v2 continua sendo um dos modelos de clonagem de voz local de maior qualidade disponíveis em 2026, e a combinação de um requisito de clonagem de 6 segundos, suporte a clonagem entre 17 idiomas e latência de streaming abaixo de 200ms é genuinamente capaz para uso pessoal, pesquisa e prototipagem. A decisão que realmente importa para a maioria dos leitores é a licença: a Coqui Public Model License é inequivocamente não comercial, e como a Coqui AI encerrou suas atividades em dezembro de 2023, não há hoje um caminho confirmado e ativo para uma licença comercial. Se o seu caso de uso é pessoal, acadêmico ou um protótipo não comercial, o XTTS v2 é uma escolha sólida e bem documentada. Se você precisa de clonagem de voz comercial, verifique os termos de licenciamento de forma independente antes de construir sobre ele, ou combine esta análise com a cobertura da PromptQuorum sobre [Piper](/power-local-llm/piper-tts-review) e [Bark](/power-local-llm/bark-tts-review) para alternativas com licença permissiva, ou a [comparação com o ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) para uma opção comercial gerenciada.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[XTTS v2 no Hugging Face](https://huggingface.co/coqui/XTTS-v2) — a ficha do modelo: idiomas, requisitos de clonagem e referência de licença.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — o texto completo da Coqui Public Model License (CPML) 1.0.0.',
          '[idiap/coqui-ai-TTS no GitHub](https://github.com/idiap/coqui-ai-TTS) — o kit de ferramentas mantido ativamente que executa o XTTS v2, com documentação de uso.',
          '[Análise do Coqui TTS](/power-local-llm/coqui-tts-review) — a análise dedicada da PromptQuorum sobre o kit de ferramentas, incluindo seu histórico de manutenção após o encerramento.',
          '[Licenças de TTS local e clonagem de voz](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — comparação completa de licenças entre motores de TTS locais.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Coqui TTS](/power-local-llm/coqui-tts-review) — o kit de ferramentas que executa o XTTS v2, incluindo seu status de manutenção após o encerramento da Coqui AI.',
          '[Licenças de TTS local e clonagem de voz: Piper, XTTS v2, F5-TTS e Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — a análise aprofundada de licenças entre os principais motores de TTS locais.',
          '[ElevenLabs vs Piper vs XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — a comparação entre nuvem e local para leitores decidindo se devem auto-hospedar.',
          '[Análise do Piper TTS](/power-local-llm/piper-tts-review) — a alternativa de TTS local rápida, com licença permissiva e apenas CPU.',
          '[Análise do Bark TTS](/power-local-llm/bark-tts-review) — o modelo de TTS local expressivo e não verbal, analisado com a mesma profundidade.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2: análise (2026) — clonagem de voz multilíngue a partir de 6 segundos de áudio',
      description:
        'XTTS v2, análise: o modelo de clonagem de voz multilíngue da Coqui clona uma voz a partir de 6 segundos de áudio em 17 idiomas. Comandos reais, licença CPML não comercial e limites honestos para 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando modelos de clonagem de voz locais e auto-hospedados' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'Clonagem de voz' },
        { '@type': 'Thing', name: 'Texto para fala' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2: análise (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-ar.webp',
    title: 'مراجعة XTTS v2 (2026): استنساخ صوتي متعدد اللغات من 6 ثوانٍ من الصوت',
    seoTitle: 'مراجعة XTTS v2 2026: استنساخ صوتي متعدد اللغات',
    intro:
      'XTTS v2 هو نموذج استنساخ صوتي متعدد اللغات أصدرته Coqui، ومتوفر على [Hugging Face](https://huggingface.co/coqui/XTTS-v2)، يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي ويجعله يتحدث بـ17 لغة. يعمل عبر [أدوات Coqui TTS](/power-local-llm/coqui-tts-review) — والنسخة المُصانة بنشاط هي [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — أو يمكن استخدامه بشكل مستقل عبر أوزان النموذج مباشرة. تتناول هذه المراجعة ما يفعله XTTS v2 فعليًا، وأوامر استخدام حقيقية، ورخصته (رخصة Coqui Public Model License، أو CPML، وهي رخصة غير تجارية)، ومتى يكون الأداة المناسبة ومتى لا يكون كذلك، إذ إن شركة Coqui AI التي أصدرته في الأصل أوقفت خدماتها المدفوعة في ديسمبر 2023.',
    metaDescription:
      'مراجعة XTTS v2: نموذج Coqui للاستنساخ الصوتي متعدد اللغات يستنسخ صوتًا من 6 ثوانٍ من الصوت بـ17 لغة. أوامر استخدام حقيقية، ورخصة CPML غير التجارية، وحدود صادقة لعام 2026.',
    twitterDescription:
      'مراجعة XTTS v2 2026: نموذج Coqui للاستنساخ الصوتي يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي ويجعله يتحدث بـ17 لغة. أوامر حقيقية، وشرح لرخصة CPML غير التجارية، ومتى تستخدم بديلاً آخر.',
    audience:
      'المطورون والباحثون الذين يقيّمون استنساخ الصوت المحلي المستضاف ذاتيًا لمشاريع شخصية أو أبحاث أو نماذج أولية، ويحتاجون إلى فهم الرخصة غير التجارية قبل بناء أي شيء حقيقي عليها.',
    readTime: 'وقت القراءة 12 دقيقة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة XTTS v2',
    targetKeywords: [
      'مراجعة xtts v2',
      'xtts v2',
      'استنساخ صوت xtts v2',
      'رخصة xtts v2',
      'استخدام xtts v2 تجاريًا',
      'coqui xtts v2',
      'لغات xtts v2',
      'xtts v2 مقابل elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 هو نموذج استنساخ صوتي متعدد اللغات من Coqui يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي ويولّد كلامًا بهذا الصوت بـ17 لغة.** يعمل عبر [أدوات Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`، ثم `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). رخصته، وهي Coqui Public Model License (CPML)، **غير تجارية** — ولأن شركة Coqui AI أوقفت خدماتها المدفوعة في ديسمبر 2023، لا يوجد حاليًا مسار نشط للحصول على رخصة تجارية. للاطلاع على مقارنة كاملة للرخص بين محركات TTS المحلية، راجع [دليل رخص TTS المحلية](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو XTTS v2 وهل يمكنني استخدامه تجاريًا؟',
        answer:
          'يستحق XTTS v2 الاستخدام إذا كنت تريد أعلى جودة متاحة لاستنساخ الصوت المحلي، من 6 ثوانٍ فقط من صوت مرجعي، مع توليد كلام بـ17 لغة بما في ذلك الاستنساخ عبر اللغات (استنساخ صوت بالإنجليزية، والتحدث به بالإسبانية). يعمل عبر أدوات Coqui TTS أو مباشرة عبر أوزان النموذج على Hugging Face، مع تسريع GPU الموصى به وزمن استجابة بث موثّق أقل من 200 مللي ثانية من قِبل القائمين على صيانته. لا، لا يمكنك استخدامه تجاريًا دون اتفاقية منفصلة: رخصته، وهي Coqui Public Model License (CPML)، تقيّد الاستخدام صراحةً على الأغراض غير التجارية — المشاريع الشخصية والأبحاث والعمل كهواية. أوقفت Coqui AI، الشركة التي أصدرت XTTS v2، خدماتها المدفوعة في ديسمبر 2023، لذا لا توجد حاليًا أي جهة تقدّم رخصة تجارية له. اختر Piper أو Kokoro بدلاً منه إذا كنت تحتاج إلى محرك برخصة متساهلة لمنتج تجاري؛ لا يستنسخ أي منهما الأصوات، لكن كلاهما مجاني للاستخدام التجاري.',
        bullets: [
          'يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي، وفقًا لبطاقة النموذج الرسمية على Hugging Face.',
          'يجعل الصوت المستنسخ يتحدث بـ17 لغة، بما في ذلك الاستنساخ عبر اللغات.',
          'الرخصة: Coqui Public Model License (CPML)، غير تجارية — للاستخدام الشخصي والبحثي والهواية فقط.',
          'لا يوجد مسار تجاري نشط: أوقفت Coqui AI، الشركة المُصدرة، خدماتها المدفوعة في ديسمبر 2023.',
          'يعمل عبر أدوات Coqui TTS (pip install coqui-tts)؛ يدعم البث بزمن استجابة أقل من 200 مللي ثانية حتى أول صوت.',
          'يوصى بشدة باستخدام GPU؛ يعمل على CPU لكن بسرعة أقل بكثير.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما الذي يفعله XTTS v2 فعليًا', anchor: 'what-it-does' },
      { label: 'أمثلة استخدام حقيقية', anchor: 'usage-examples' },
      { label: 'الرخصة والاستخدام التجاري', anchor: 'license-cost' },
      { label: 'ما لا يصلح له XTTS v2', anchor: 'limitations' },
      { label: 'بدائل XTTS v2', anchor: 'alternatives' },
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
            text: 'XTTS v2 هو نموذج Coqui للاستنساخ الصوتي متعدد اللغات الذي يستنسخ صوتًا من 6 ثوانٍ من صوت مرجعي ويجعله يتحدث بـ17 لغة، وهو مرخّص بموجب Coqui Public Model License (CPML) غير التجارية، دون مسار تجاري نشط منذ أن أوقفت Coqui AI، الشركة المُصدرة، خدماتها المدفوعة في ديسمبر 2023.',
          },
          {
            type: 'plain-terms',
            text: 'إنه نموذج ذكاء اصطناعي يستمع إلى مقطع قصير لشخص يتحدث، ثم يمكنه توليد جمل جديدة بنفس الصوت، بـ17 لغة مختلفة — مجاني للاستخدام الشخصي والبحثي، لكن ليس لمنتج مدفوع دون اتفاقية منفصلة غير موجودة حاليًا.',
          },
        ],
        items: [
          'يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي، بـ17 لغة.',
          'يعمل عبر أدوات Coqui TTS (`pip install coqui-tts`) أو مباشرة عبر أوزان النموذج على Hugging Face.',
          'الرخصة: Coqui Public Model License (CPML) — غير تجارية فقط.',
          'لا يوجد مسار تجاري نشط: أوقفت Coqui AI خدماتها المدفوعة في ديسمبر 2023.',
          'زمن استجابة بث موثّق أقل من 200 مللي ثانية حتى أول صوت؛ يوصى بشدة باستخدام GPU.',
          'يتطلب قبول رخصة CPML — عيّن `COQUI_TOS_AGREED=1` للقيام بذلك بشكل غير تفاعلي في Docker أو CI.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'رخصة CPML ليست نفس رخصة أدوات Coqui TTS التي تشغّل XTTS v2 — الأدوات مرخّصة بموجب MPL-2.0، لكن أوزان ومخرجات هذا النموذج تحديدًا غير تجارية. راجع قسم الرخصة والاستخدام التجاري أدناه.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'ما الذي يفعله XTTS v2 فعليًا',
        content: [
          'XTTS v2 هو نموذج تحويل نص إلى كلام قائم على GPT يدعم الاستنساخ الصوتي عبر اللغات. بمعطيات مقطع صوتي مرجعي قصير ونص مستهدف، يولّد كلامًا بالصوت المستنسخ، حتى بلغة مختلفة عن لغة الصوت المرجعي.',
        ],
        items: [
          '**استنساخ صوتي في ثوانٍ معدودة.** يكفي مقطع صوتي مرجعي واحد مدته 6 ثوانٍ لاستنساخ صوت، وفقًا لبطاقة النموذج الرسمية من Coqui — دون الحاجة إلى ضبط دقيق أو عملية تدريب لصوت جديد.',
          '**دعم 17 لغة مع استنساخ عبر اللغات.** اللغات المدعومة هي الإنجليزية والإسبانية والفرنسية والألمانية والإيطالية والبرتغالية والبولندية والتركية والروسية والهولندية والتشيكية والعربية والصينية (zh-cn) واليابانية والمجرية والكورية والهندية — يمكنك استنساخ صوت من صوت إنجليزي وتوليد كلام بأي من اللغات الـ16 الأخرى بنفس الصوت المستنسخ.',
          '**الاستدلال عبر البث.** يدعم XTTS v2 التوليد المتزامن (streaming) بزمن استجابة أقل من 200 مللي ثانية حتى أول صوت، موثّق منذ إدخال هذه الميزة في Coqui TTS الإصدار 0.20.0 — مفيد لتطبيقات الصوت التفاعلية حيث يكون انتظار ملف صوتي كامل بطيئًا جدًا.',
          '**يعمل عبر أدوات Coqui TTS.** الطريقة الرئيسية والمدعومة لتشغيل XTTS v2 هي عبر [Coqui TTS](/power-local-llm/coqui-tts-review) (`pip install coqui-tts`)، الذي يتيحه باسم `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`.',
          '**إعادة استخدام تضمين المتحدث.** بالإضافة إلى تمرير مقطع مرجعي خام في كل مرة، تدعم الأدوات حساب التضمين الكامن للمتحدث وإعادة استخدامه، مما يتجنب إعادة الحساب عند التوليد المتكرر بنفس الصوت المستنسخ.',
        ],
        note: 'XTTS v2 هو نموذج وليس أداة — للاطلاع على البرنامج الذي يشغّله (ونماذج أخرى)، راجع [مراجعة Coqui TTS المخصصة](/power-local-llm/coqui-tts-review) من PromptQuorum.',
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية',
        content: [
          'تستخدم هذه الأوامر واجهة برمجة تطبيقات بايثون الموثّقة الخاصة بأدوات Coqui TTS، وهي الطريقة الرئيسية والمدعومة لتشغيل XTTS v2.',
        ],
        codeBlock: `# تثبيت الأدوات
pip install coqui-tts

# قبول رخصة CPML بشكل غير تفاعلي (مطلوب لبيئات Docker/CI؛ وإلا
# ستظهر مطالبة تفاعلية عند التحميل الأول)
export COQUI_TOS_AGREED=1

# واجهة برمجة بايثون: استنساخ صوت وتوليد كلام
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# استنساخ بنفس اللغة
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# استنساخ عبر اللغات: الاستنساخ من صوت إنجليزي والتحدث بالإسبانية
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# التوليد المتزامن (زمن استجابة منخفض حتى أول صوت)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: 'قد يتغيّر الاسم الدقيق لطريقة واجهة البث وتوقيعها بين إصدارات الأدوات — تحقق من [توثيق Coqui TTS الحالي](https://github.com/idiap/coqui-ai-TTS) قبل النشر. متغيّر البيئة `COQUI_TOS_AGREED=1` والوسيطتان `speaker_wav`/`language` موثّقتان في ملف README الخاص بالأدوات نفسها.',
        items: [
          '**جودة الصوت المرجعي مهمة.** مقطع نظيف مدته 6 ثوانٍ لمتحدث واحد دون ضوضاء خلفية أو موسيقى ينتج استنساخًا أفضل بشكل ملحوظ من مقطع قصير أو صاخب أو متعدد المتحدثين.',
          '**قبول رخصة CPML بشكل غير تفاعلي** مطلوب عند تحميل XTTS v2 لأول مرة في بيئة غير مراقَبة (Docker، CI) — عيّن `COQUI_TOS_AGREED=1` قبل ذلك التحميل الأول.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: 'الرخصة والاستخدام التجاري',
        content: [
          '**أوزان نموذج XTTS v2 ومخرجات الصوت المولَّدة مرخّصة بموجب Coqui Public Model License (CPML) 1.0.0**، وقد تم التأكد من ذلك عبر ملف الرخصة المنشور مع النموذج على [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt). تنص رخصة CPML صراحةً على أنها "تسمح فقط بالاستخدام غير التجاري لنموذج تعلم آلي ومخرجاته" — تشمل الاستخدامات المسموح بها المشاريع الشخصية والأبحاث الأكاديمية والعمل كهواية، طالما أنك لا تتلقى أجرًا مباشرًا أو غير مباشر مرتبطًا بذلك الاستخدام.',
          '**لا يوجد حاليًا مسار تجاري نشط لـ XTTS v2.** تدرج بطاقة النموذج عنوان اتصال، info@coqui.ai، للاستفسارات عن الترخيص التجاري، لكن Coqui AI، الشركة، أوقفت خدماتها المدفوعة في ديسمبر 2023 — لم تتمكن PromptQuorum من التأكد من أن هذا العنوان لا يزال نشطًا أو أن رخصة تجارية متاحة اليوم. عامل XTTS v2 على أنه غير تجاري حصرًا ما لم تؤكد خلاف ذلك بشكل مستقل قبل إطلاق منتج مدفوع.',
          '**تنطبق رخصة CPML تحديدًا على أوزان نموذج XTTS v2 ومخرجاته — وليس على كود أدوات Coqui TTS التي تشغّل النموذج**، وهي مرخّصة بشكل منفصل بموجب MPL-2.0 وتسمح فعليًا بالاستخدام التجاري بشروط الإفصاح عن الكود الخاصة بتعديلات الأدوات. تشرح هذه الفقرة الشكل العام للرخصة؛ وهي ليست استشارة قانونية — اقرأ رخصة CPML بنفسك واستشر محاميًا قبل أي نشر تجاري.',
        ],
        faqs: [
          {
            q: 'ما الرخصة التي يستخدمها XTTS v2؟',
            a: 'يُصدر XTTS v2 بموجب Coqui Public Model License (CPML) 1.0.0، وهي رخصة غير تجارية تنطبق على أوزان النموذج ومخرجاته الصوتية المولَّدة. تسمح بالاستخدام الشخصي والبحثي والهواية، لكنها تحظر الاستخدام التجاري — أي منتج مدفوع أو أداة SaaS أو تسليم لعميل — دون اتفاقية منفصلة. هذا ليس استشارة قانونية؛ اقرأ رخصة CPML بنفسك قبل أي استخدام تجاري.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له XTTS v2',
        content: [
          'XTTS v2 نموذج استنساخ صوتي عالي الجودة، وليس محرك TTS عام الغرض قابلاً للنشر التجاري. إنه الأداة الخاطئة للحالات التالية:',
        ],
        items: [
          '**أي منتج تجاري دون رخصة مؤكدة.** رخصة CPML غير تجارية، ولا يوجد حاليًا مسار مؤكد ونشط للحصول على رخصة تجارية بعد إغلاق Coqui AI في 2023. لا تُطلق XTTS v2 في منتج مدفوع أو تطبيق مدعوم بالإعلانات أو تسليم لعميل دون التأكد بشكل مستقل من شروط الترخيص أولاً.',
          '**الاستخدام في الوقت الفعلي على CPU فقط مع موارد محدودة.** يدعم XTTS v2 البث بزمن استجابة منخفض، لكن هذا الأداء يفترض تسريع GPU؛ على CPU وحده يكون أبطأ بشكل ملحوظ من محرك خفيف مثل [Piper](/power-local-llm/piper-tts-review)، وقد لا يكون عمليًا للاستخدام في الوقت الفعلي على أجهزة متواضعة مثل Raspberry Pi.',
          '**استنساخ صوت من صوت قصير جدًا أو صاخب.** رغم أن 6 ثوانٍ هي الحد الأدنى الموثّق، فإن مقطعًا مرجعيًا صاخبًا أو مضغوطًا أو متعدد المتحدثين ينتج استنساخًا أسوأ بشكل ملحوظ من تسجيل نظيف لمتحدث واحد.',
          '**لغة خارج اللغات الـ17 المدعومة.** يدعم XTTS v2 بالضبط الإنجليزية والإسبانية والفرنسية والألمانية والإيطالية والبرتغالية والبولندية والتركية والروسية والهولندية والتشيكية والعربية والصينية (zh-cn) واليابانية والمجرية والكورية والهندية — ولا توجد خارطة طريق رسمية للغات إضافية حتى تاريخ نشر هذه المراجعة.',
          '**انتحال شخصية دون موافقة.** استنساخ صوت شخص حقيقي دون علمه أو موافقته يثير مخاوف تتعلق بالموافقة وحق الصورة، وربما الاحتيال أو الانتحال، وهي مخاوف مستقلة عن قيد رخصة CPML غير التجاري — وتنطبق بغض النظر عن شروط الرخصة، سواء في الاستخدام الشخصي أو التجاري.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل XTTS v2',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[Piper](/power-local-llm/piper-tts-review)',
            'الأنسب لـ': 'أسرع توليد على CPU فقط، دون استنساخ صوتي، وقت فعلي على Raspberry Pi',
            'الرخصة': 'GPL-3.0-or-later',
          },
          {
            'الأداة': '[أدوات Coqui TTS](/power-local-llm/coqui-tts-review)',
            'الأنسب لـ': 'البرنامج الذي يشغّل XTTS v2 (ونماذج أخرى) بقاعدة كود أوسع وذات رخصة متساهلة',
            'الرخصة': 'MPL-2.0 (الأدوات فقط)',
          },
          {
            'الأداة': '[Bark](/power-local-llm/bark-tts-review)',
            'الأنسب لـ': 'صوت تعبيري غير كلامي — ضحك، تنهدات، صوت محيطي',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            'الأنسب لـ': 'أعلى جودة سرد إنجليزي طبيعي (دون استنساخ صوتي)',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[ElevenLabs](https://elevenlabs.io)',
            'الأنسب لـ': 'واجهة سحابية مُدارة مع استنساخ صوتي تجاري وترخيص تجاري واضح',
            'الرخصة': 'ملكية خاصة (واجهة سحابية مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو XTTS v2؟',
            a: 'XTTS v2 هو نموذج تحويل نص إلى كلام باستنساخ صوتي متعدد اللغات أصدرته Coqui، يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي ويولّد كلامًا بهذا الصوت بـ17 لغة، بما في ذلك الاستنساخ عبر اللغات.',
          },
          {
            q: 'هل يمكنني استخدام XTTS v2 تجاريًا؟',
            a: 'ليس دون اتفاقية منفصلة. XTTS v2 مرخّص بموجب Coqui Public Model License (CPML)، التي تسمح بالاستخدام الشخصي والبحثي والهواية لكنها تحظر الاستخدام التجاري — أي منتج مدفوع أو SaaS أو محتوى مدعوم بالإعلانات أو عمل لعميل. أوقفت Coqui AI، الشركة التي أصدرته، خدماتها المدفوعة في ديسمبر 2023، ولم تتمكن PromptQuorum من التأكد من وجود مسار تجاري نشط اليوم. عامل XTTS v2 على أنه غير تجاري حصرًا.',
          },
          {
            q: 'كم من الصوت المرجعي يحتاجه XTTS v2 لاستنساخ صوت؟',
            a: '6 ثوانٍ فقط من صوت مرجعي نظيف لمتحدث واحد، وفقًا لبطاقة النموذج الرسمية على Hugging Face. يُنتج المقطع الأطول والأنظف عادةً استنساخًا أكثر دقة.',
          },
          {
            q: 'كم عدد اللغات التي يدعمها XTTS v2؟',
            a: '17 لغة بالضبط: الإنجليزية والإسبانية والفرنسية والألمانية والإيطالية والبرتغالية والبولندية والتركية والروسية والهولندية والتشيكية والعربية والصينية (zh-cn) واليابانية والمجرية والكورية والهندية. يدعم الاستنساخ عبر اللغات — استنسخ صوتًا من صوت بإحدى هذه اللغات وولّد كلامًا بأي من اللغات الأخرى.',
          },
          {
            q: 'كيف أشغّل XTTS v2؟',
            a: 'ثبّت أدوات Coqui TTS باستخدام `pip install coqui-tts`، ثم حمّل النموذج باستخدام `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`. عيّن متغيّر البيئة `COQUI_TOS_AGREED=1` أولاً إذا كنت بحاجة إلى قبول رخصة CPML بشكل غير تفاعلي، مثل داخل حاوية Docker أو خط أنابيب CI.',
          },
          {
            q: 'هل أحتاج إلى GPU لتشغيل XTTS v2؟',
            a: 'يوصى بشدة باستخدام GPU. يعمل XTTS v2 على CPU، لكن بشكل أبطأ ملحوظًا — يفترض زمن استجابة البث الموثّق الأقل من 200 مللي ثانية تسريع GPU، والاستخدام على CPU فقط غير عملي للتطبيقات في الوقت الفعلي.',
          },
          {
            q: 'ما الفرق بين XTTS v2 وأدوات Coqui TTS؟',
            a: 'XTTS v2 هو نموذج استنساخ صوتي محدد، مرخّص بموجب رخصة CPML غير التجارية. أدوات Coqui TTS هي البرنامج — حزمة بايثون وواجهة سطر أوامر — التي تشغّل XTTS v2 ونماذج أخرى، مرخّصة بشكل منفصل بموجب MPL-2.0، والتي تسمح فعليًا بالاستخدام التجاري لكود الأدوات نفسه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يظل XTTS v2 واحدًا من أعلى نماذج الاستنساخ الصوتي المحلي جودة المتاحة في 2026، والجمع بين متطلب استنساخ مدته 6 ثوانٍ ودعم 17 لغة عبر الاستنساخ المتعدد اللغات وزمن استجابة بث أقل من 200 مللي ثانية قدرات حقيقية للاستخدام الشخصي والبحثي والنماذج الأولية. القرار الذي يهم معظم القراء فعليًا هو الرخصة: رخصة Coqui Public Model License غير تجارية بشكل لا لبس فيه، ولأن Coqui AI أغلقت في ديسمبر 2023، لا يوجد اليوم مسار مؤكد ونشط للحصول على رخصة تجارية. إذا كان استخدامك شخصيًا أو أكاديميًا أو نموذجًا أوليًا غير تجاري، فإن XTTS v2 خيار قوي وموثّق جيدًا. إذا كنت بحاجة إلى استنساخ صوتي تجاري، تحقق من شروط الترخيص بشكل مستقل قبل البناء عليه، أو اجمع بين هذه المراجعة وتغطية PromptQuorum لـ[Piper](/power-local-llm/piper-tts-review) و[Bark](/power-local-llm/bark-tts-review) كبدائل ذات رخصة متساهلة، أو [مقارنة ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) كخيار تجاري مُدار.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[XTTS v2 على Hugging Face](https://huggingface.co/coqui/XTTS-v2) — بطاقة النموذج: اللغات ومتطلبات الاستنساخ ومرجع الرخصة.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — النص الكامل لرخصة Coqui Public Model License (CPML) 1.0.0.',
          '[idiap/coqui-ai-TTS على GitHub](https://github.com/idiap/coqui-ai-TTS) — الأدوات المُصانة بنشاط التي تشغّل XTTS v2، مع توثيق الاستخدام.',
          '[مراجعة Coqui TTS](/power-local-llm/coqui-tts-review) — مراجعة PromptQuorum المخصصة للأدوات، بما في ذلك تاريخ صيانتها بعد الإغلاق.',
          '[رخص TTS المحلي والاستنساخ الصوتي](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — مقارنة كاملة للرخص بين محركات TTS المحلية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Coqui TTS](/power-local-llm/coqui-tts-review) — الأدوات التي تشغّل XTTS v2، بما في ذلك حالة صيانتها بعد إغلاق Coqui AI.',
          '[رخص TTS المحلي والاستنساخ الصوتي: Piper وXTTS v2 وF5-TTS وCoqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — التحليل المعمّق للرخص بين محركات TTS المحلية الرئيسية.',
          '[ElevenLabs مقابل Piper مقابل XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — مقارنة السحابة مقابل المحلي للقراء الذين يقررون ما إذا كانوا سيستضيفون ذاتيًا.',
          '[مراجعة Piper TTS](/power-local-llm/piper-tts-review) — بديل TTS محلي سريع، برخصة متساهلة، ويعمل على CPU فقط.',
          '[مراجعة Bark TTS](/power-local-llm/bark-tts-review) — نموذج TTS محلي تعبيري وغير كلامي، تمت مراجعته بنفس العمق.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة XTTS v2 (2026): استنساخ صوتي متعدد اللغات من 6 ثوانٍ من الصوت',
      description:
        'مراجعة XTTS v2: نموذج Coqui للاستنساخ الصوتي متعدد اللغات يستنسخ صوتًا من 6 ثوانٍ من الصوت بـ17 لغة. أوامر استخدام حقيقية، ورخصة CPML غير التجارية، وحدود صادقة لعام 2026.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'ar',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون يقيّمون نماذج الاستنساخ الصوتي المحلية والمستضافة ذاتيًا' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: 'استنساخ صوتي' },
        { '@type': 'Thing', name: 'تحويل النص إلى كلام' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة XTTS v2 (2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-zh.webp',
    title: 'XTTS v2 评测(2026):仅需6秒音频即可实现多语言声音克隆',
    seoTitle: 'XTTS v2 评测 2026:多语言声音克隆',
    intro:
      'XTTS v2 是 Coqui 发布的多语言声音克隆模型,发布于 [Hugging Face](https://huggingface.co/coqui/XTTS-v2),仅需 6 秒参考音频即可克隆一个声音,并让其用 17 种语言说话。它通过 [Coqui TTS 工具包](/power-local-llm/coqui-tts-review) 运行——目前积极维护的分支是 [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)——也可以直接使用模型权重独立运行。本评测介绍 XTTS v2 实际能做什么、真实的使用命令、其许可证(非商业性质的 Coqui Public Model License,CPML),以及它适合与不适合的场景,因为最初发布它的公司 Coqui AI 已于 2023 年 12 月关闭了其付费服务。',
    metaDescription:
      'XTTS v2 评测:Coqui 的多语言声音克隆模型可从 6 秒音频中克隆声音,支持 17 种语言。真实使用命令、非商业性质的 CPML 许可证,以及 2026 年的真实局限。',
    twitterDescription:
      'XTTS v2 评测 2026:Coqui 的声音克隆模型仅需 6 秒参考音频即可克隆一个声音,并用 17 种语言说话。真实命令、非商业 CPML 许可证详解,以及何时该用其他方案。',
    audience:
      '正在评估本地自托管声音克隆方案、用于个人项目、研究或原型开发的开发者和研究人员,在构建任何实际产品之前需要理解其非商业许可证。',
    readTime: '阅读时间12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 评测',
    targetKeywords: [
      'xtts v2 评测',
      'xtts v2',
      'xtts v2 声音克隆',
      'xtts v2 许可证',
      'xtts v2 商业使用',
      'coqui xtts v2',
      'xtts v2 语言',
      'xtts v2 对比 elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2 是 Coqui 推出的多语言声音克隆模型,仅需 6 秒参考音频即可克隆一个声音,并用该声音生成 17 种语言的语音。** 它通过 [Coqui TTS 工具包](/power-local-llm/coqui-tts-review) 运行(`pip install coqui-tts`,然后执行 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`)。其许可证 Coqui Public Model License(CPML)是**非商业性质**的——由于公司 Coqui AI 已于 2023 年 12 月关闭其付费服务,目前没有获取商业许可证的有效途径。关于本地 TTS 引擎间的完整许可证比较,请参见 PromptQuorum 的[本地 TTS 许可证指南](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)。',
    quickAnswerTop: {
      en: {
        question: 'XTTS v2 是什么?可以商用吗?',
        answer:
          '如果你想要目前可用的最高质量本地声音克隆,仅需 6 秒参考音频即可实现,并支持 17 种语言(包括跨语言克隆,例如用英语克隆一个声音,再让它说西班牙语),那么 XTTS v2 值得一用。它可以通过 Coqui TTS 工具包运行,也可以直接使用其 Hugging Face 上的模型权重,建议使用 GPU 加速,其维护者记录的流式传输延迟低于 200 毫秒。不,未经单独协议你不能将其用于商业用途:其许可证 Coqui Public Model License(CPML)明确将使用限制为非商业目的——个人项目、研究和业余用途。发布 XTTS v2 的公司 Coqui AI 已于 2023 年 12 月关闭其付费服务,因此目前没有任何主体提供其商业许可证。如果你的商业产品需要宽松许可证的引擎,请改用 Piper 或 Kokoro;两者都不支持声音克隆,但都可免费商用。',
        bullets: [
          '根据其官方 Hugging Face 模型卡,仅需 6 秒参考音频即可克隆声音。',
          '可用 17 种语言让克隆的声音说话,支持跨语言克隆。',
          '许可证:Coqui Public Model License(CPML),非商业性质——仅限个人、研究和业余用途。',
          '没有有效的商业许可途径:发布公司 Coqui AI 已于 2023 年 12 月关闭其付费服务。',
          '通过 Coqui TTS 工具包运行(pip install coqui-tts);支持流式传输,首个音频延迟低于 200 毫秒。',
          '强烈建议使用 GPU;可在 CPU 上运行,但速度明显更慢。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'XTTS v2 实际能做什么', anchor: 'what-it-does' },
      { label: '真实使用示例', anchor: 'usage-examples' },
      { label: '许可证与商业使用', anchor: 'license-cost' },
      { label: 'XTTS v2 不适合的场景', anchor: 'limitations' },
      { label: 'XTTS v2 的替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'XTTS v2 是 Coqui 的多语言声音克隆模型,可从 6 秒参考音频中克隆声音并用 17 种语言说话,采用非商业性质的 Coqui Public Model License(CPML)授权,自发布公司 Coqui AI 于 2023 年 12 月关闭其付费服务以来,没有有效的商业许可途径。',
          },
          {
            type: 'plain-terms',
            text: '这是一个 AI 模型,它听一小段某人说话的音频片段,然后就能用同样的声音、以 17 种不同语言生成新的句子——个人和研究用途免费,但未经目前尚不存在的单独协议,不能用于付费产品。',
          },
        ],
        items: [
          '仅需 6 秒参考音频即可克隆声音,支持 17 种语言。',
          '通过 Coqui TTS 工具包(`pip install coqui-tts`)运行,或直接使用其 Hugging Face 模型权重。',
          '许可证:Coqui Public Model License(CPML)——仅限非商业用途。',
          '没有有效的商业许可途径:Coqui AI 已于 2023 年 12 月关闭其付费服务。',
          '记录在案的首个音频流式传输延迟低于 200 毫秒;强烈建议使用 GPU。',
          '需要接受 CPML——在 Docker 或 CI 中设置 `COQUI_TOS_AGREED=1` 以非交互方式接受。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'CPML 与运行 XTTS v2 的 Coqui TTS 工具包所用的许可证不同——工具包本身采用 MPL-2.0,但这个特定模型的权重和输出是非商业性质的。详见下方的许可证与商业使用部分。',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'XTTS v2 实际能做什么',
        content: [
          'XTTS v2 是一个基于 GPT 的跨语言声音克隆文本转语音模型。给定一段简短的参考音频片段和目标文本,它会用克隆的声音生成语音,甚至可以使用与参考音频不同的语言。',
        ],
        items: [
          '**几秒钟内完成声音克隆。** 根据 Coqui 的官方模型卡,仅需一段 6 秒的参考音频片段即可克隆声音——无需为新声音进行微调或训练。',
          '**支持 17 种语言并可跨语言克隆。** 支持的语言包括英语、西班牙语、法语、德语、意大利语、葡萄牙语、波兰语、土耳其语、俄语、荷兰语、捷克语、阿拉伯语、中文(zh-cn)、日语、匈牙利语、韩语和印地语——你可以用英语音频克隆一个声音,然后用同一个克隆声音以其余 16 种语言中的任意一种生成语音。',
          '**流式推理。** XTTS v2 支持流式合成,首个音频的延迟低于 200 毫秒,这一特性自 Coqui TTS v0.20.0 引入以来一直有文档记录——适用于等待完整音频文件渲染太慢的交互式语音应用。',
          '**通过 Coqui TTS 工具包运行。** 运行 XTTS v2 的主要且受支持的方式是通过 [Coqui TTS](/power-local-llm/coqui-tts-review)(`pip install coqui-tts`),它将其公开为 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`。',
          '**说话人嵌入复用。** 除了每次传入原始参考片段外,该工具包还支持计算并复用说话人的潜在嵌入,避免在使用同一克隆声音重复合成时进行重复计算。',
        ],
        note: 'XTTS v2 是一个模型,而非工具包——关于运行它(及其他模型)的软件,请参见 PromptQuorum 专门的 [Coqui TTS 评测](/power-local-llm/coqui-tts-review)。',
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例',
        content: [
          '以下命令使用 Coqui TTS 工具包已记录的 Python API,这是运行 XTTS v2 的主要且受支持的方式。',
        ],
        codeBlock: `# 安装工具包
pip install coqui-tts

# 以非交互方式接受 CPML(Docker/CI 环境中必需;否则
# 首次加载时会出现交互式提示)
export COQUI_TOS_AGREED=1

# Python API:克隆声音并生成语音
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# 同语言克隆
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# 跨语言克隆:从英语音频克隆,用西班牙语说话
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# 流式合成(首个音频延迟较低)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: '流式 API 的具体方法名称和签名可能在不同工具包版本之间发生变化——部署前请查阅最新的 [Coqui TTS 文档](https://github.com/idiap/coqui-ai-TTS)。`COQUI_TOS_AGREED=1` 环境变量以及 `speaker_wav`/`language` 参数在工具包自身的 README 中有文档记录。',
        items: [
          '**参考音频质量很重要。** 一段干净的 6 秒单一说话人片段(无背景噪音或音乐)产生的克隆效果,明显优于短促、嘈杂或多说话人的片段。',
          '**非交互式接受 CPML** 是 XTTS v2 首次在无人值守环境(Docker、CI)中加载时所必需的——请在首次加载前设置 `COQUI_TOS_AGREED=1`。',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '许可证与商业使用',
        content: [
          '**XTTS v2 的模型权重和生成的音频输出根据 Coqui Public Model License(CPML)1.0.0 授权**,这已通过与模型一同发布在 [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) 上的许可证文件得到确认。CPML 明确指出它"仅允许对机器学习模型及其输出进行非商业使用"——允许的用途包括个人项目、学术研究和业余工作,前提是你不会因该用途获得直接或间接报酬。',
          '**目前 XTTS v2 没有有效的商业许可途径。** 模型卡列出了一个用于商业许可咨询的联系地址 info@coqui.ai,但公司 Coqui AI 已于 2023 年 12 月关闭其付费服务——PromptQuorum 无法确认该地址目前是否仍有人负责处理,也无法确认今天是否真的能获得商业许可证。除非你在发布付费产品之前独立确认了相反的情况,否则请将 XTTS v2 视为仅限非商业使用。',
          '**CPML 仅适用于 XTTS v2 的模型权重及其输出——不适用于运行该模型的 Coqui TTS 工具包代码**,后者单独采用 MPL-2.0 授权,并且确实允许商业使用,但对工具包的修改需附带源代码公开条件。本段仅解释许可证的大致框架;这不是法律建议——在任何商业部署之前,请自行阅读 CPML 并咨询律师。',
        ],
        faqs: [
          {
            q: 'XTTS v2 使用什么许可证?',
            a: 'XTTS v2 依据 Coqui Public Model License(CPML)1.0.0 发布,这是一个适用于模型权重及其生成音频输出的非商业许可证。它允许个人、研究和业余用途,但禁止商业使用——任何付费产品、SaaS 工具或客户交付成果——除非有单独的协议。这不是法律建议;在商业使用前请自行阅读 CPML。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'XTTS v2 不适合的场景',
        content: [
          'XTTS v2 是一个高质量的声音克隆模型,而不是一个可用于商业部署的通用 TTS 引擎。在以下情况下它是错误的选择:',
        ],
        items: [
          '**任何没有确认许可证的商业产品。** CPML 是非商业性质的,自 2023 年 Coqui AI 关闭以来,目前没有确认存在的、有效的商业许可途径。在没有事先独立确认许可条款的情况下,不要将 XTTS v2 部署到付费产品、带广告的应用或客户交付成果中。',
          '**仅使用 CPU、资源受限的实时场景。** XTTS v2 确实支持低延迟流式传输,但这一性能是以 GPU 加速为前提的;仅使用 CPU 时,它明显比 [Piper](/power-local-llm/piper-tts-review) 这样的轻量级引擎更慢,在 Raspberry Pi 等性能有限的硬件上可能无法用于实时场景。',
          '**从很短或嘈杂的音频克隆声音。** 虽然 6 秒是记录在案的最低要求,但嘈杂、压缩过或多说话人的参考片段所产生的克隆效果,明显比干净的单说话人录音差。',
          '**支持的 17 种语言以外的语言。** XTTS v2 恰好支持英语、西班牙语、法语、德语、意大利语、葡萄牙语、波兰语、土耳其语、俄语、荷兰语、捷克语、阿拉伯语、中文(zh-cn)、日语、匈牙利语、韩语和印地语——截至本文发布时,没有官方的语言扩展路线图。',
          '**未经同意冒充他人。** 在未经本人知情或同意的情况下克隆真人的声音,会引发同意、形象权,以及潜在的欺诈或冒充问题,这些问题独立于 CPML 的非商业限制——无论许可条款如何,也无论是个人使用还是商业使用,这些问题都同样适用。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'XTTS v2 的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合场景', '许可证'],
        rows: [
          {
            '工具': '[Piper](/power-local-llm/piper-tts-review)',
            '最适合场景': '仅CPU下最快的合成速度,不支持声音克隆,可在树莓派上实时运行',
            '许可证': 'GPL-3.0-or-later',
          },
          {
            '工具': '[Coqui TTS 工具包](/power-local-llm/coqui-tts-review)',
            '最适合场景': '运行 XTTS v2(及其他模型)的软件,拥有更广泛、许可更宽松的代码库',
            '许可证': 'MPL-2.0(仅工具包)',
          },
          {
            '工具': '[Bark](/power-local-llm/bark-tts-review)',
            '最适合场景': '富有表现力的非语音音频——笑声、叹息、环境音',
            '许可证': 'MIT',
          },
          {
            '工具': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '最适合场景': '最高水准的自然英语朗读质量(不支持声音克隆)',
            '许可证': 'MIT',
          },
          {
            '工具': '[ElevenLabs](https://elevenlabs.io)',
            '最适合场景': '具有商业声音克隆和明确商业许可的托管云端 API',
            '许可证': '专有(付费云端 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'XTTS v2 是什么?',
            a: 'XTTS v2 是 Coqui 发布的多语言声音克隆文本转语音模型,仅需 6 秒参考音频即可克隆一个声音,并用该声音生成 17 种语言的语音,包括跨语言克隆。',
          },
          {
            q: '我可以将 XTTS v2 用于商业用途吗?',
            a: '未经单独协议不可以。XTTS v2 依据 Coqui Public Model License(CPML)授权,允许个人、研究和业余用途,但禁止商业使用——任何付费产品、SaaS、带广告的内容或客户工作。发布它的公司 Coqui AI 已于 2023 年 12 月关闭其付费服务,PromptQuorum 无法确认今天是否存在有效的商业许可途径。请将 XTTS v2 视为仅限非商业使用。',
          },
          {
            q: 'XTTS v2 克隆一个声音需要多少参考音频?',
            a: '根据其官方 Hugging Face 模型卡,仅需 6 秒干净的单说话人参考音频。更长、更干净的片段通常会产生更准确的克隆效果。',
          },
          {
            q: 'XTTS v2 支持多少种语言?',
            a: '恰好 17 种:英语、西班牙语、法语、德语、意大利语、葡萄牙语、波兰语、土耳其语、俄语、荷兰语、捷克语、阿拉伯语、中文(zh-cn)、日语、匈牙利语、韩语和印地语。它支持跨语言克隆——用这些语言中某一种的音频克隆声音,并用其余任意一种语言生成语音。',
          },
          {
            q: '我该如何运行 XTTS v2?',
            a: '使用 `pip install coqui-tts` 安装 Coqui TTS 工具包,然后用 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")` 加载模型。如果需要在 Docker 容器或 CI 流水线等场景中以非交互方式接受 CPML 许可证,请先设置环境变量 `COQUI_TOS_AGREED=1`。',
          },
          {
            q: '运行 XTTS v2 需要 GPU 吗?',
            a: '强烈建议使用 GPU。XTTS v2 可以在 CPU 上运行,但速度会明显变慢——其记录在案的低于 200 毫秒的流式传输延迟是以 GPU 加速为前提的,仅使用 CPU 并不适合实时应用。',
          },
          {
            q: 'XTTS v2 和 Coqui TTS 工具包有什么区别?',
            a: 'XTTS v2 是一个特定的声音克隆模型,依据非商业性质的 CPML 授权。Coqui TTS 工具包是运行 XTTS v2 及其他模型的软件——一个 Python 包和命令行工具——单独依据 MPL-2.0 授权,该许可证确实允许对工具包代码本身进行商业使用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'XTTS v2 在 2026 年仍然是可用的最高质量本地声音克隆模型之一,6 秒克隆要求、17 种语言的跨语言支持,以及低于 200 毫秒的流式传输延迟三者的结合,对于个人、研究和原型开发用途而言确实具有实用能力。对大多数读者来说真正重要的决定因素是许可证:Coqui Public Model License 毫无疑问是非商业性质的,而且由于 Coqui AI 已在 2023 年 12 月关闭,如今没有确认存在的、有效的商业许可途径。如果你的用例是个人、学术或非商业原型,XTTS v2 是一个稳健且文档完善的选择。如果你需要商业声音克隆,请在基于它构建之前独立核实许可条款,或者结合 PromptQuorum 对 [Piper](/power-local-llm/piper-tts-review) 和 [Bark](/power-local-llm/bark-tts-review) 等宽松许可替代方案的报道,或查看[与 ElevenLabs 的比较](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)以了解托管商业选项。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Hugging Face 上的 XTTS v2](https://huggingface.co/coqui/XTTS-v2)——模型卡:语言、克隆要求和许可证参考。',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt)——Coqui Public Model License(CPML)1.0.0 全文。',
          '[GitHub 上的 idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)——运行 XTTS v2 的积极维护工具包,附带使用文档。',
          '[Coqui TTS 评测](/power-local-llm/coqui-tts-review)——PromptQuorum 对该工具包的专门评测,包括其关闭后的维护历史。',
          '[本地 TTS 与声音克隆许可证](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)——本地 TTS 引擎间的完整许可证比较。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Coqui TTS 评测](/power-local-llm/coqui-tts-review)——运行 XTTS v2 的工具包,包括 Coqui AI 关闭后的维护状态。',
          '[本地 TTS 与声音克隆许可证:Piper、XTTS v2、F5-TTS 和 Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)——主要本地 TTS 引擎间的许可证深度解析。',
          '[ElevenLabs 对比 Piper 对比 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)——为决定是否自托管的读者提供的云端与本地对比。',
          '[Piper TTS 评测](/power-local-llm/piper-tts-review)——快速、许可宽松、仅需 CPU 的本地 TTS 替代方案。',
          '[Bark TTS 评测](/power-local-llm/bark-tts-review)——表现力丰富的非语音本地 TTS 模型,同等深度的评测。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2 评测(2026):仅需6秒音频即可实现多语言声音克隆',
      description:
        'XTTS v2 评测:Coqui 的多语言声音克隆模型可从 6 秒音频中克隆声音,支持 17 种语言。真实使用命令、非商业性质的 CPML 许可证,以及 2026 年的真实局限。',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'zh',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估本地自托管声音克隆模型的开发者' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: '声音克隆' },
        { '@type': 'Thing', name: '文本转语音' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2 评测(2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/xtts-v2-review-hero-ko.webp',
    title: 'XTTS v2 리뷰(2026): 단 6초의 오디오로 만드는 다국어 음성 클로닝',
    seoTitle: 'XTTS v2 리뷰 2026: 다국어 음성 클로닝',
    intro:
      'XTTS v2는 Coqui가 공개한 다국어 음성 클로닝 모델로, [Hugging Face](https://huggingface.co/coqui/XTTS-v2)에 배포되어 있으며, 단 6초의 참조 오디오만으로 목소리를 복제해 17개 언어로 말하게 할 수 있습니다. 이 모델은 [Coqui TTS 툴킷](/power-local-llm/coqui-tts-review)을 통해 실행되며, 현재 활발히 유지 관리되는 포크는 [idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS)입니다. 모델 가중치를 직접 사용해 독립적으로 실행할 수도 있습니다. 이 리뷰에서는 XTTS v2가 실제로 무엇을 하는지, 실제 사용 명령어, 라이선스(비상업용인 Coqui Public Model License, CPML), 그리고 이 모델이 적합한 경우와 그렇지 않은 경우를 다룹니다. 이 모델을 처음 공개한 회사 Coqui AI가 2023년 12월에 유료 서비스를 종료했기 때문입니다.',
    metaDescription:
      'XTTS v2 리뷰: Coqui의 다국어 음성 클로닝 모델은 6초의 오디오로 17개 언어의 목소리를 복제합니다. 실제 사용 명령어, 비상업용 CPML 라이선스, 2026년 기준 솔직한 한계를 다룹니다.',
    twitterDescription:
      'XTTS v2 리뷰 2026: Coqui의 음성 클로닝 모델은 단 6초의 참조 오디오만으로 목소리를 복제해 17개 언어로 말하게 합니다. 실제 명령어, 비상업용 CPML 라이선스 설명, 그리고 대신 무엇을 써야 할지 안내합니다.',
    audience:
      '개인 프로젝트, 연구, 프로토타이핑을 위해 로컬에서 직접 호스팅하는 음성 클로닝을 검토 중인 개발자와 연구자들로, 실제로 무언가를 구축하기 전에 비상업용 라이선스를 이해해야 하는 사람들.',
    readTime: '읽는 시간 12분',
    educationalLevel: 'Intermediate',
    primaryTerm: 'XTTS v2 리뷰',
    targetKeywords: [
      'xtts v2 리뷰',
      'xtts v2',
      'xtts v2 음성 클로닝',
      'xtts v2 라이선스',
      'xtts v2 상업적 사용',
      'coqui xtts v2',
      'xtts v2 언어',
      'xtts v2 대 elevenlabs',
    ],
    current_models_mentioned: ['XTTS v2'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**XTTS v2는 Coqui가 만든 다국어 음성 클로닝 모델로, 단 6초의 참조 오디오만으로 목소리를 복제해 17개 언어로 해당 목소리의 음성을 생성합니다.** [Coqui TTS 툴킷](/power-local-llm/coqui-tts-review)을 통해 실행됩니다(`pip install coqui-tts` 실행 후 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`). 라이선스인 Coqui Public Model License(CPML)는 **비상업용**입니다. 회사인 Coqui AI가 2023년 12월에 유료 서비스를 종료했기 때문에, 현재 상업용 라이선스로 가는 활성화된 경로는 없습니다. 로컬 TTS 엔진 전반의 라이선스 비교는 PromptQuorum의 [로컬 TTS 라이선스 가이드](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts)를 참고하세요.',
    quickAnswerTop: {
      en: {
        question: 'XTTS v2란 무엇이며 상업적으로 사용할 수 있나요?',
        answer:
          '단 6초의 참조 오디오만으로 이용 가능한, 현재 최고 품질의 로컬 음성 클로닝을 원한다면 XTTS v2는 사용할 가치가 있습니다. 17개 언어로 음성을 생성할 수 있으며, 언어 간 클로닝(영어로 목소리를 복제한 뒤 스페인어로 말하게 하는 것)도 포함됩니다. Coqui TTS 툴킷을 통해, 또는 Hugging Face에 있는 모델 가중치를 직접 사용해 실행할 수 있으며, GPU 가속이 권장되고 관리자들이 문서화한 200밀리초 미만의 스트리밍 지연 시간을 제공합니다. 그러나 별도의 계약 없이는 상업적으로 사용할 수 없습니다. 라이선스인 Coqui Public Model License(CPML)는 개인 프로젝트, 연구, 취미 작업으로만 사용을 명시적으로 제한합니다. XTTS v2를 공개한 회사 Coqui AI는 2023년 12월 유료 서비스를 종료했으며, 따라서 현재 이 모델에 대한 상업용 라이선스를 제공하는 주체가 없습니다. 상업용 제품에 관대한 라이선스의 엔진이 필요하다면 대신 Piper나 Kokoro를 선택하세요. 둘 다 음성 클로닝은 지원하지 않지만, 둘 다 상업적 사용이 무료입니다.',
        bullets: [
          '공식 Hugging Face 모델 카드에 따르면 단 6초의 참조 오디오만으로 목소리를 복제할 수 있다.',
          '복제된 목소리로 17개 언어를 말하게 할 수 있으며, 언어 간 클로닝도 지원한다.',
          '라이선스: Coqui Public Model License(CPML), 비상업용 — 개인, 연구, 취미 용도만 허용.',
          '활성화된 상업용 라이선스 경로 없음: 공개한 회사 Coqui AI가 2023년 12월 유료 서비스를 종료했다.',
          'Coqui TTS 툴킷(pip install coqui-tts)을 통해 실행되며, 첫 오디오까지 200밀리초 미만의 스트리밍을 지원한다.',
          'GPU를 강력히 권장하며, CPU에서도 동작하지만 속도가 눈에 띄게 느리다.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'XTTS v2가 실제로 하는 일', anchor: 'what-it-does' },
      { label: '실제 사용 예시', anchor: 'usage-examples' },
      { label: '라이선스와 상업적 사용', anchor: 'license-cost' },
      { label: 'XTTS v2가 적합하지 않은 경우', anchor: 'limitations' },
      { label: 'XTTS v2의 대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'XTTS v2는 Coqui의 다국어 음성 클로닝 모델로, 6초의 참조 오디오로 목소리를 복제해 17개 언어로 말하게 할 수 있으며, 비상업용 Coqui Public Model License(CPML) 하에 라이선스되어 있고, 공개한 회사 Coqui AI가 2023년 12월 유료 서비스를 종료한 이후 활성화된 상업용 라이선스 경로가 없다.',
          },
          {
            type: 'plain-terms',
            text: '누군가 말하는 짧은 오디오 클립을 듣고, 같은 목소리로 17개의 서로 다른 언어로 새로운 문장을 생성할 수 있는 AI 모델입니다. 개인 및 연구 용도로는 무료지만, 현재 존재하지 않는 별도 계약 없이는 유료 제품에 사용할 수 없습니다.',
          },
        ],
        items: [
          '단 6초의 참조 오디오만으로 목소리를 복제하며, 17개 언어를 지원한다.',
          'Coqui TTS 툴킷(`pip install coqui-tts`)을 통해, 또는 Hugging Face 모델 가중치를 직접 사용해 실행할 수 있다.',
          '라이선스: Coqui Public Model License(CPML) — 비상업용에 한함.',
          '활성화된 상업용 라이선스 경로 없음: Coqui AI가 2023년 12월 유료 서비스를 종료했다.',
          '첫 오디오까지 200밀리초 미만의 스트리밍 지연 시간이 문서화되어 있다. GPU를 강력히 권장한다.',
          'CPML 동의가 필요하다 — Docker나 CI에서 비대화형으로 동의하려면 `COQUI_TOS_AGREED=1`을 설정한다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'CPML은 XTTS v2를 실행하는 Coqui TTS 툴킷과 동일한 라이선스가 아닙니다 — 툴킷 자체는 MPL-2.0이지만, 이 특정 모델의 가중치와 출력물은 비상업용입니다. 자세한 내용은 아래 라이선스와 상업적 사용 섹션을 참고하세요.',
          },
        ],
      },
      whatItDoes: {
        id: 'what-it-does',
        title: 'XTTS v2가 실제로 하는 일',
        content: [
          'XTTS v2는 GPT 기반의 언어 간 음성 클로닝 텍스트 음성 변환 모델입니다. 짧은 참조 오디오 클립과 목표 텍스트가 주어지면, 참조 오디오와 다른 언어일지라도 복제된 목소리로 음성을 생성합니다.',
        ],
        items: [
          '**몇 초 만에 완료되는 음성 클로닝.** Coqui의 공식 모델 카드에 따르면, 단 하나의 6초짜리 참조 오디오 클립만으로 목소리를 복제할 수 있으며, 새로운 목소리를 위한 미세 조정이나 학습 과정이 필요하지 않다.',
          '**언어 간 클로닝을 지원하는 17개 언어.** 지원 언어는 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 폴란드어, 터키어, 러시아어, 네덜란드어, 체코어, 아랍어, 중국어(zh-cn), 일본어, 헝가리어, 한국어, 힌디어이다 — 영어 오디오로 목소리를 복제한 뒤, 동일한 복제 목소리로 나머지 16개 언어 중 어느 것으로든 음성을 생성할 수 있다.',
          '**스트리밍 추론.** XTTS v2는 첫 오디오까지 200밀리초 미만의 지연 시간으로 스트리밍 합성을 지원하며, 이 기능은 Coqui TTS v0.20.0에 도입된 이래 문서화되어 있다 — 완전한 오디오 파일 렌더링을 기다리기에는 너무 느린 대화형 음성 애플리케이션에 유용하다.',
          '**Coqui TTS 툴킷을 통한 실행.** XTTS v2를 실행하는 주요하고 지원되는 방법은 [Coqui TTS](/power-local-llm/coqui-tts-review)(`pip install coqui-tts`)를 통하는 것이며, 이는 `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`로 노출된다.',
          '**화자 임베딩 재사용.** 매번 원본 참조 클립을 전달하는 것 외에도, 이 툴킷은 화자의 잠재 임베딩을 계산하고 재사용하는 것을 지원해, 동일한 복제 목소리로 반복 합성할 때 재계산을 피할 수 있다.',
        ],
        note: 'XTTS v2는 모델이지 툴킷이 아닙니다 — 이 모델(및 다른 모델)을 실행하는 소프트웨어에 대해서는 PromptQuorum의 전용 [Coqui TTS 리뷰](/power-local-llm/coqui-tts-review)를 참고하세요.',
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시',
        content: [
          '이 명령어들은 Coqui TTS 툴킷의 문서화된 Python API를 사용하며, 이는 XTTS v2를 실행하는 주요하고 지원되는 방법입니다.',
        ],
        codeBlock: `# 툴킷 설치
pip install coqui-tts

# CPML을 비대화형으로 동의(Docker/CI에서 필수; 그렇지 않으면
# 첫 로드 시 대화형 프롬프트가 나타남)
export COQUI_TOS_AGREED=1

# Python API: 목소리 복제 및 음성 생성
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to(device)

# 동일 언어 클로닝
tts.tts_to_file(
    text="This is a cloned voice speaking a new sentence.",
    speaker_wav="reference_voice.wav",
    language="en",
    file_path="output_en.wav",
)

# 언어 간 클로닝: 영어 오디오로 복제 후 스페인어로 말하기
tts.tts_to_file(
    text="Esta es la misma voz clonada, ahora hablando en español.",
    speaker_wav="reference_voice.wav",
    language="es",
    file_path="output_es.wav",
)

# 스트리밍 합성(첫 오디오까지 낮은 지연 시간)
for chunk in tts.tts_stream(
    text="Streaming audio, chunk by chunk, for interactive use.",
    speaker_wav="reference_voice.wav",
    language="en",
):
    play_audio(chunk)`,
        codeLanguage: 'python',
        note: '스트리밍 API 메서드의 정확한 이름과 시그니처는 툴킷 버전에 따라 달라질 수 있습니다 — 배포 전에 최신 [Coqui TTS 문서](https://github.com/idiap/coqui-ai-TTS)를 확인하세요. `COQUI_TOS_AGREED=1` 환경 변수와 `speaker_wav`/`language` 인수는 툴킷 자체의 README에 문서화되어 있습니다.',
        items: [
          '**참조 오디오 품질이 중요합니다.** 배경 소음이나 음악이 없는 단일 화자의 깨끗한 6초 클립은 짧거나, 시끄럽거나, 여러 화자가 섞인 클립보다 눈에 띄게 더 나은 클론을 만들어낸다.',
          '**비대화형 CPML 동의**는 무인 환경(Docker, CI)에서 XTTS v2가 처음 로드될 때 필요합니다 — 첫 로드 전에 `COQUI_TOS_AGREED=1`을 설정하세요.',
        ],
      },
      licenseCost: {
        id: 'license-cost',
        title: '라이선스와 상업적 사용',
        content: [
          '**XTTS v2의 모델 가중치와 생성된 오디오 출력물은 Coqui Public Model License(CPML) 1.0.0 하에 라이선스되어 있습니다.** 이는 [Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt)에서 모델과 함께 공개된 라이선스 파일을 통해 확인되었습니다. CPML은 "머신러닝 모델과 그 출력물의 비상업적 사용만을 허용한다"고 명시하고 있습니다 — 허용되는 용도에는 개인 프로젝트, 학술 연구, 취미 작업이 포함되며, 해당 사용과 관련해 직접적이든 간접적이든 보수를 받지 않는다는 조건이 붙습니다.',
          '**현재 XTTS v2에는 활성화된 상업용 라이선스 경로가 없습니다.** 모델 카드에는 상업용 라이선스 문의를 위한 연락처로 info@coqui.ai가 기재되어 있지만, 회사인 Coqui AI는 2023년 12월 유료 서비스를 종료했습니다 — PromptQuorum은 이 주소가 현재 실제로 관리되고 있는지, 혹은 오늘날 상업용 라이선스를 실제로 얻을 수 있는지 확인할 수 없었습니다. 유료 제품을 출시하기 전에 독립적으로 다른 확인을 하지 않는 한, XTTS v2를 오직 비상업용으로만 취급하세요.',
          '**CPML은 XTTS v2의 모델 가중치와 그 출력물에만 구체적으로 적용되며, 모델을 실행하는 Coqui TTS 툴킷 코드에는 적용되지 않습니다.** 툴킷은 별도로 MPL-2.0 하에 라이선스되어 있으며, 툴킷 수정에 대한 소스 공개 조건과 함께 상업적 사용을 실제로 허용합니다. 이 단락은 라이선스의 대략적인 형태를 설명한 것일 뿐이며 법률 자문이 아닙니다 — 상업적 배포 전에 직접 CPML을 읽고 변호사와 상담하세요.',
        ],
        faqs: [
          {
            q: 'XTTS v2는 어떤 라이선스를 사용하나요?',
            a: 'XTTS v2는 Coqui Public Model License(CPML) 1.0.0 하에 공개되어 있으며, 이는 모델 가중치와 생성된 오디오 출력물에 적용되는 비상업용 라이선스입니다. 개인, 연구, 취미 용도는 허용되지만, 유료 제품, SaaS 도구, 클라이언트 납품물 등 상업적 사용은 별도 계약 없이는 금지됩니다. 이는 법률 자문이 아닙니다. 상업적으로 사용하기 전에 직접 CPML을 읽으세요.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'XTTS v2가 적합하지 않은 경우',
        content: [
          'XTTS v2는 고품질 음성 클로닝 모델이지, 상업적으로 배포 가능한 범용 TTS 엔진이 아닙니다. 다음과 같은 상황에는 적합하지 않은 도구입니다.',
        ],
        items: [
          '**확인된 라이선스가 없는 모든 상업용 제품.** CPML은 비상업용이며, 2023년 Coqui AI가 폐업한 이후 확인되고 활성화된 상업용 라이선스 경로는 현재 존재하지 않는다. 라이선스 조건을 먼저 독립적으로 확인하지 않은 채 유료 제품, 광고 기반 앱, 클라이언트 납품물에 XTTS v2를 출시하지 마세요.',
          '**CPU만 사용하는, 리소스가 제한된 실시간 사용.** XTTS v2는 저지연 스트리밍을 지원하지만, 그 성능은 GPU 가속을 전제로 합니다. CPU만 사용할 경우 [Piper](/power-local-llm/piper-tts-review) 같은 경량 엔진보다 눈에 띄게 느리며, Raspberry Pi 같은 보급형 하드웨어에서의 실시간 사용에는 실용적이지 않을 수 있습니다.',
          '**매우 짧거나 시끄러운 오디오로부터의 음성 클로닝.** 6초가 문서화된 최소 요구치이긴 하지만, 시끄럽거나 압축되었거나 여러 화자가 섞인 참조 클립은 깨끗한 단일 화자 녹음보다 눈에 띄게 나쁜 클론을 만들어냅니다.',
          '**지원되는 17개 언어 이외의 언어.** XTTS v2는 정확히 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 폴란드어, 터키어, 러시아어, 네덜란드어, 체코어, 아랍어, 중국어(zh-cn), 일본어, 헝가리어, 한국어, 힌디어만 지원하며, 본 게시물 발행 시점 기준으로 추가 언어에 대한 공식 로드맵은 없습니다.',
          '**동의 없이 누군가를 사칭하는 것.** 실제 인물의 목소리를 본인의 인지나 동의 없이 복제하는 것은 CPML의 비상업용 제한과는 별개로 동의, 퍼블리시티권, 그리고 잠재적으로 사기나 사칭과 관련된 문제를 야기합니다 — 이는 라이선스 조건과 무관하게, 개인 및 상업적 사용 모두에 동일하게 적용됩니다.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'XTTS v2의 대안',
        itemHeadings: true,
        columns: ['도구', '최적 용도', '라이선스'],
        rows: [
          {
            '도구': '[Piper](/power-local-llm/piper-tts-review)',
            '최적 용도': '가장 빠른 CPU 전용 합성, 음성 클로닝 없음, Raspberry Pi에서 실시간 실행',
            '라이선스': 'GPL-3.0-or-later',
          },
          {
            '도구': '[Coqui TTS 툴킷](/power-local-llm/coqui-tts-review)',
            '최적 용도': 'XTTS v2(및 다른 모델)를 실행하는, 더 넓고 관대한 라이선스의 코드베이스를 가진 소프트웨어',
            '라이선스': 'MPL-2.0(툴킷에만 적용)',
          },
          {
            '도구': '[Bark](/power-local-llm/bark-tts-review)',
            '최적 용도': '표현력이 풍부한 비언어 오디오 — 웃음, 한숨, 주변 소리',
            '라이선스': 'MIT',
          },
          {
            '도구': '[StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
            '최적 용도': '가장 자연스러운 영어 내레이션 품질(음성 클로닝 없음)',
            '라이선스': 'MIT',
          },
          {
            '도구': '[ElevenLabs](https://elevenlabs.io)',
            '최적 용도': '상업용 음성 클로닝과 명확한 상업용 라이선스를 갖춘 관리형 클라우드 API',
            '라이선스': '독점(유료 클라우드 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'XTTS v2란 무엇인가요?',
            a: 'XTTS v2는 Coqui가 공개한 다국어 음성 클로닝 텍스트 음성 변환 모델로, 단 6초의 참조 오디오만으로 목소리를 복제해 언어 간 클로닝을 포함한 17개 언어로 해당 목소리의 음성을 생성합니다.',
          },
          {
            q: 'XTTS v2를 상업적으로 사용할 수 있나요?',
            a: '별도의 계약 없이는 불가능합니다. XTTS v2는 Coqui Public Model License(CPML) 하에 라이선스되어 있으며, 개인, 연구, 취미 용도는 허용되지만 유료 제품, SaaS, 광고 기반 콘텐츠, 클라이언트 작업 등 상업적 사용은 금지됩니다. 이를 공개한 회사 Coqui AI는 2023년 12월 유료 서비스를 종료했으며, PromptQuorum은 오늘날 활성화된 상업용 라이선스 경로가 존재하는지 확인할 수 없었습니다. XTTS v2를 오직 비상업용으로만 취급하세요.',
          },
          {
            q: 'XTTS v2가 목소리를 복제하는 데 필요한 참조 오디오는 얼마나 되나요?',
            a: '공식 Hugging Face 모델 카드에 따르면 깨끗한 단일 화자 참조 오디오 단 6초면 충분합니다. 더 길고 깨끗한 클립일수록 일반적으로 더 정확한 클론을 만들어냅니다.',
          },
          {
            q: 'XTTS v2는 몇 개의 언어를 지원하나요?',
            a: '정확히 17개입니다: 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 폴란드어, 터키어, 러시아어, 네덜란드어, 체코어, 아랍어, 중국어(zh-cn), 일본어, 헝가리어, 한국어, 힌디어. 이 언어들 중 하나로 된 오디오로 목소리를 복제한 뒤 나머지 언어 중 어느 것으로든 음성을 생성하는 언어 간 클로닝을 지원합니다.',
          },
          {
            q: 'XTTS v2는 어떻게 실행하나요?',
            a: '`pip install coqui-tts`로 Coqui TTS 툴킷을 설치한 다음, `TTS("tts_models/multilingual/multi-dataset/xtts_v2")`로 모델을 로드하세요. Docker 컨테이너나 CI 파이프라인처럼 CPML 라이선스를 비대화형으로 동의해야 한다면, 먼저 환경 변수 `COQUI_TOS_AGREED=1`을 설정하세요.',
          },
          {
            q: 'XTTS v2를 실행하려면 GPU가 필요한가요?',
            a: 'GPU를 강력히 권장합니다. XTTS v2는 CPU에서도 실행되지만 눈에 띄게 느려집니다 — 문서화된 200밀리초 미만의 스트리밍 지연 시간은 GPU 가속을 전제로 하며, CPU만 사용하는 것은 실시간 애플리케이션에는 실용적이지 않습니다.',
          },
          {
            q: 'XTTS v2와 Coqui TTS 툴킷의 차이는 무엇인가요?',
            a: 'XTTS v2는 비상업용 CPML 하에 라이선스된 특정 음성 클로닝 모델입니다. Coqui TTS 툴킷은 XTTS v2와 다른 모델들을 실행하는 소프트웨어(Python 패키지와 CLI)로, 별도로 MPL-2.0 하에 라이선스되어 있으며 이는 툴킷 코드 자체의 상업적 사용을 실제로 허용합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'XTTS v2는 2026년 기준으로도 이용 가능한 가장 높은 품질의 로컬 음성 클로닝 모델 중 하나로 남아 있으며, 6초 클로닝 요구 조건, 17개 언어에 걸친 언어 간 지원, 200밀리초 미만의 스트리밍 지연 시간의 조합은 개인, 연구, 프로토타이핑 용도로 진정으로 뛰어난 성능을 보여줍니다. 대부분의 독자에게 실제로 중요한 결정 요소는 라이선스입니다. Coqui Public Model License는 명백히 비상업용이며, Coqui AI가 2023년 12월에 폐업했기 때문에 오늘날 확인되고 활성화된 상업용 라이선스 경로는 존재하지 않습니다. 사용 목적이 개인, 학술, 또는 비상업용 프로토타입이라면 XTTS v2는 강력하고 문서화가 잘 된 선택지입니다. 상업용 음성 클로닝이 필요하다면, 그 위에 무언가를 구축하기 전에 독립적으로 라이선스 조건을 확인하거나, 관대한 라이선스의 대안으로 PromptQuorum의 [Piper](/power-local-llm/piper-tts-review)와 [Bark](/power-local-llm/bark-tts-review) 리뷰, 또는 관리형 상업용 옵션으로 [ElevenLabs 비교](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)를 함께 참고하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Hugging Face의 XTTS v2](https://huggingface.co/coqui/XTTS-v2) — 모델 카드: 언어, 클로닝 요구 사항, 라이선스 참조.',
          '[XTTS v2 LICENSE.txt](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Coqui Public Model License(CPML) 1.0.0 전문.',
          '[GitHub의 idiap/coqui-ai-TTS](https://github.com/idiap/coqui-ai-TTS) — XTTS v2를 실행하는, 활발히 유지 관리되는 툴킷과 사용 문서.',
          '[Coqui TTS 리뷰](/power-local-llm/coqui-tts-review) — 폐업 이후 유지 관리 이력을 포함한, PromptQuorum의 툴킷 전용 리뷰.',
          '[로컬 TTS 및 음성 클로닝 라이선스](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 로컬 TTS 엔진 전반의 완전한 라이선스 비교.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Coqui TTS 리뷰](/power-local-llm/coqui-tts-review) — XTTS v2를 실행하는 툴킷으로, Coqui AI 폐업 이후의 유지 관리 상태를 포함합니다.',
          '[로컬 TTS 및 음성 클로닝 라이선스: Piper, XTTS v2, F5-TTS, Coqui](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 주요 로컬 TTS 엔진 전반의 라이선스 심층 분석.',
          '[ElevenLabs 대 Piper 대 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 자체 호스팅 여부를 결정하려는 독자를 위한 클라우드 대 로컬 비교.',
          '[Piper TTS 리뷰](/power-local-llm/piper-tts-review) — 빠르고, 관대한 라이선스의, CPU 전용 로컬 TTS 대안.',
          '[Bark TTS 리뷰](/power-local-llm/bark-tts-review) — 표현력이 풍부한 비언어 오디오 로컬 TTS 모델로, 동일한 깊이로 리뷰되었습니다.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'XTTS v2 리뷰(2026): 단 6초의 오디오로 만드는 다국어 음성 클로닝',
      description:
        'XTTS v2 리뷰: Coqui의 다국어 음성 클로닝 모델은 6초의 오디오로 17개 언어의 목소리를 복제합니다. 실제 사용 명령어, 비상업용 CPML 라이선스, 2026년 기준 솔직한 한계를 다룹니다.',
      url: 'https://promptquorum.com/power-local-llm/xtts-v2-review',
      inLanguage: 'ko',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 자체 호스팅 음성 클로닝 모델을 검토하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Coqui TTS' },
        { '@type': 'Thing', name: '음성 클로닝' },
        { '@type': 'Thing', name: '텍스트 음성 변환' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'XTTS v2 리뷰(2026)', item: 'https://promptquorum.com/power-local-llm/xtts-v2-review' },
      ],
    },
  },
}
