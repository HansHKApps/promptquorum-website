// Power Local LLM — Local TTS and Voice Cloning 2026: Piper vs Coqui vs XTTS v2 vs F5-TTS vs Bark vs StyleTTS 2
// Slug: local-tts-voice-cloning-piper-coqui-xtts
// Category: Voice, Speech & Multimodal

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Local TTS & Voice Cloning Licenses 2026: Which Engines Allow Commercial Use (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: 'Local TTS & Voice Cloning Licenses 2026: Commercial Use',
    intro:
      'Can you use a local text-to-speech engine in a commercial product? It depends entirely on the license, and the licenses differ sharply. Piper, Bark, and StyleTTS 2 ship under MIT, Kokoro and Tortoise under Apache 2.0 — all four free for commercial use. The Coqui TTS toolkit is MPL 2.0 (commercial with conditions). But the two most popular voice-cloning models are restricted: XTTS v2 uses the Coqui Public Model License (CPML, non-commercial), and F5-TTS uses CC-BY-NC-4.0 (non-commercial). This guide gives the exact license for each engine, a clear "can I use this commercially?" answer per engine, the COQUI_TOS_AGREED environment variable for accepting the CPML non-interactively in Docker and CI, and a head-to-head comparison across quality, speed, VRAM, and voice cloning — so you can pick the right engine without sending audio to the cloud and without a license surprise in production. (Licenses verified June 2026; this is factual reference, not legal advice — read each license yourself before commercial use.)',
    metaDescription:
      'Which local TTS engines allow commercial use? Licenses for Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) & Coqui, plus the COQUI_TOS_AGREED env var. 2026 guide.',
    twitterDescription:
      'Local TTS licenses 2026: which voice-cloning engines allow commercial use? Piper/Bark/StyleTTS 2 (MIT), Kokoro/Tortoise (Apache 2.0), XTTS v2 (CPML non-commercial), F5-TTS (CC-BY-NC). Plus the COQUI_TOS_AGREED env var. All offline.',
    audience:
      'Developers, makers, content creators, and privacy-focused users who want offline text-to-speech and voice cloning without cloud API costs or data exposure.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local text-to-speech',
    targetKeywords: [
      'local TTS 2026',
      'best local TTS',
      'local voice cloning',
      'piper vs coqui',
      'XTTS v2 voice cloning',
      'F5-TTS voice cloning',
      'F5-TTS local',
      'offline voice cloning',
      'bark TTS',
      'StyleTTS 2',
      'piper TTS setup',
      'coqui TTS offline',
    ],
    current_models_mentioned: [
      'Piper TTS',
      'Coqui TTS',
      'XTTS v2',
      'F5-TTS',
      'Bark',
      'StyleTTS 2',
      'Kokoro TTS',
      'Tortoise TTS',
    ],
    current_hardware_mentioned: [
      'CPU (x86/ARM)',
      'Raspberry Pi',
      '2–4 GB GPU',
      '3–5 GB GPU',
      '4–6 GB GPU',
      '4–8 GB GPU',
      'Apple M5 Pro',
      'RTX 4070',
    ],
    leadAnswerBlock:
      '**For commercial use, choose a local TTS engine with a permissive license: Piper, Bark, and StyleTTS 2 are MIT; Kokoro and Tortoise are Apache 2.0 — all free for commercial products.** The Coqui TTS toolkit is MPL 2.0 (commercial allowed if you disclose changes to the toolkit source). The two best-known voice-cloning models are the catch: **XTTS v2 is non-commercial under the Coqui Public Model License (CPML)** and **F5-TTS is non-commercial under CC-BY-NC-4.0** — both prohibit commercial use without a separate agreement, and because Coqui Inc shut down in January 2024 there is currently no one to sell an XTTS v2 commercial license, so treat it as non-commercial only. On capability: Piper is fastest on CPU (real-time on a Raspberry Pi 5, no GPU); XTTS v2 is the best-quality voice clone (6 seconds of reference audio → 17 languages, 4–6 GB VRAM); F5-TTS clones from ~3 seconds with faster flow-matching inference; Bark uniquely generates laughter, sighs, and ambient sound; StyleTTS 2 has the most natural English narration (no cloning); Tortoise is very high quality but extremely slow. This is factual reference, not legal advice — verify each license yourself before commercial deployment.',
    quickAnswerTop: {
      en: {
        question: 'Which local TTS engines can I use commercially in 2026?',
        answer:
          'For commercial use, pick a permissively licensed engine: Piper, Bark, and StyleTTS 2 (MIT) and Kokoro and Tortoise (Apache 2.0) are all free for commercial products; the Coqui TTS toolkit (MPL 2.0) is commercial with source-disclosure conditions. The two most popular voice-cloning models are NOT free for commercial use: XTTS v2 (CPML) and F5-TTS (CC-BY-NC-4.0) are both non-commercial. On capability, Piper is fastest on CPU, XTTS v2 has the best cloning quality (needs 4–6 GB VRAM), and F5-TTS clones from ~3 seconds with faster inference. This is factual reference, not legal advice.',
        bullets: [
          'Free for commercial use → Piper (MIT), Bark (MIT), StyleTTS 2 (MIT), Kokoro (Apache 2.0), Tortoise (Apache 2.0). Coqui TTS toolkit (MPL 2.0): commercial OK with source-disclosure conditions.',
          'NOT free for commercial use → XTTS v2 (CPML, non-commercial) and F5-TTS (CC-BY-NC-4.0, non-commercial). Both need a separate agreement; XTTS v2 has no seller since Coqui shut down (Jan 2024).',
          'Best cloning quality → XTTS v2. 6 sec of audio → 17-language clone, 4–6 GB VRAM. License: CPML (non-commercial). Accept the CPML non-interactively in Docker/CI with COQUI_TOS_AGREED=1.',
          'Zero-shot cloning, faster + newer arch → F5-TTS. ~3 seconds of audio, flow-matching, CC-BY-NC-4.0 (non-commercial).',
          'Speed on CPU / Raspberry Pi → Piper (MIT). Kokoro (Apache 2.0) is a higher-quality CPU alternative.',
          'Best English narration → StyleTTS 2 (MIT). Highest-quality offline cloning that is commercial-friendly → Tortoise (Apache 2.0), but very slow (minutes per sentence).',
          'Creative audio (laughter, music, ambient) → Bark (MIT). Slow and generative.',
          'All engines are 100% offline — no API keys, no audio data sent to the cloud.',
        ],
        updatedDate: '2026-06-15',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Local TTS Matters', anchor: '#why-local-tts' },
      { label: 'Head-to-Head Comparison Table', anchor: '#comparison-table' },
      { label: 'First-Audio Latency Comparison', anchor: '#latency-table' },
      { label: 'Piper TTS — Fastest Lightweight Option', anchor: '#piper' },
      { label: 'Coqui TTS — Best Open-Source All-Rounder', anchor: '#coqui' },
      { label: 'XTTS v2 — Best Voice Cloning Quality', anchor: '#xtts' },
      { label: 'Bark — Generative Audio Beyond Speech', anchor: '#bark' },
      { label: 'StyleTTS 2 — Highest Natural Quality', anchor: '#styletts' },
      { label: 'F5-TTS — Zero-Shot Voice Cloning, Fully Open', anchor: '#f5tts' },
      { label: 'Licenses & Commercial Use (CPML, MIT, CC-BY-NC)', anchor: '#licenses' },
      { label: 'Accept the CPML Non-Interactively (COQUI_TOS_AGREED)', anchor: '#cpml-noninteractive' },
      { label: 'How Local TTS Compares to ElevenLabs', anchor: '#local-vs-cloud' },
      { label: 'How to Choose', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper is the correct choice for speed and embedded use.** It runs entirely on CPU, produces real-time speech on a Raspberry Pi 5, and supports 20+ languages via downloadable voice packs. No GPU, no Python complexity, MIT license.',
          '**XTTS v2 is the best local voice cloning option in 2026 — but it is non-commercial.** Give it 6 seconds of reference audio and it clones the voice in 17 languages (4–6 GB GPU VRAM). The CPML license is non-commercial, and since Coqui shut down (Jan 2024) no commercial license is on sale — treat XTTS v2 as non-commercial only. Accept the CPML non-interactively in Docker/CI with `COQUI_TOS_AGREED=1`.',
          '**F5-TTS is the fastest-growing alternative for zero-shot voice cloning.** It uses a flow-matching architecture instead of GPT, clones a voice from ~3 seconds of reference audio, and achieves quality competitive with XTTS v2 at faster inference speeds. License: CC-BY-NC-4.0 (non-commercial).',
          '**Coqui TTS is the most flexible open-source TTS toolkit.** It supports multiple backends (Tacotron2, VITS, XTTS), voice cloning, and 20+ languages under an MPL 2.0 license. Note: the Coqui company shut down in January 2024; the project is now community-maintained.',
          '**Bark is the only local TTS that generates non-speech audio.** It can produce laughter, coughing, sighs, music snippets, and ambient sound effects alongside speech — useful for creative audio, podcast production, and interactive fiction. Its outputs are slow and non-deterministic.',
          '**StyleTTS 2 achieves the highest mean opinion score (MOS) of any open-source English TTS engine.** Its diffusion-based style transfer produces near-human naturalness on English narration. It is English-only and does not support voice cloning.',
          '**License decides commercial use — and the split is clean.** Free for commercial products: Piper, Bark, StyleTTS 2 (MIT) and Kokoro, Tortoise (Apache 2.0). Commercial with conditions: Coqui TTS toolkit (MPL 2.0, disclose toolkit modifications). Non-commercial only: XTTS v2 (CPML) and F5-TTS (CC-BY-NC-4.0) — both need a separate agreement. For commercial voice cloning, use Tortoise (Apache 2.0) or the Coqui toolkit on a VITS backend (MPL 2.0). Factual reference, not legal advice.',
          '**None of these match commercial TTS quality at scale.** ElevenLabs, Google Text-to-Speech, and Azure TTS still outperform local engines on consistency, naturalness, and latency across all use cases. Local TTS is the right choice when privacy, cost, or offline operation matters more than absolute quality.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Fastest local TTS:** Piper — real-time on Raspberry Pi 5, ~10× faster than real-time on modern desktop CPU.',
          '**Best voice cloning quality:** XTTS v2 — 6 seconds of reference audio, cross-lingual cloning in 17 languages.',
          '**Fastest zero-shot voice cloning (newer arch):** F5-TTS — ~3 seconds of audio, flow-matching, ~3–5× real-time on RTX 4070.',
          '**Most flexible open-source toolkit:** Coqui TTS — supports VITS, Tacotron2, XTTS backends, 20+ language models.',
          '**Only generative audio (non-speech sounds):** Bark — laughter, sighs, music, ambient. Slowest of all.',
          '**Best English narration quality:** StyleTTS 2 — diffusion-based style transfer, near-human MOS on LJSpeech benchmark.',
          '**Free for commercial use:** Piper, Bark, StyleTTS 2 (MIT); Kokoro, Tortoise (Apache 2.0); Coqui TTS toolkit (MPL 2.0, with conditions). **Non-commercial:** XTTS v2 (CPML), F5-TTS (CC-BY-NC-4.0).',
          '**XTTS v2 voices and languages:** No fixed voice list — you supply a 6-second reference clip and it clones that voice. Built-in speaker presets ship with the model, and it generates in 17 languages: en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**XTTS v2 VRAM:** ~2 GB model weights; 4 GB minimum to run, 4–6 GB recommended for real-time inference.',
          '**Accept the CPML in CI/Docker:** `export COQUI_TOS_AGREED=1` — no interactive prompt needed.',
          '**VRAM requirements:** Piper: CPU only. Kokoro: CPU / 1–2 GB. StyleTTS 2: 2–4 GB. Coqui VITS: 2–4 GB. F5-TTS: 3–5 GB. XTTS v2: 4–6 GB. Bark: 4–8 GB. Tortoise: 4–8 GB.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'Why Local TTS Matters',
        content:
          'Cloud TTS services (ElevenLabs, Google TTS, Amazon Polly, Azure Speech) are convenient but come with per-character billing, audio data retention policies, and latency from network round-trips. Local TTS eliminates all three.',
        items: [
          '**Privacy:** Your text content never leaves your machine. Critical for medical dictation, legal summaries, private diary narration, or confidential document read-aloud.',
          '**Cost:** Cloud TTS pricing is typically $4–$30 per million characters. A developer generating 10 million characters per month saves $40–$300/month with a one-time local setup.',
          '**Latency:** No network round-trip. Piper generates the first audio token in under 50 ms on CPU — faster than any cloud TTS round-trip.',
          '**Customization:** Voice cloning (XTTS v2, F5-TTS, Coqui) lets you create a custom voice from a few seconds of audio. Cloud providers charge $10+/month per cloned voice.',
          '**Offline operation:** Works on planes, in secure facilities, in remote areas with no internet. Embedded voice UI for kiosks and appliances.',
          '**Smart home:** Piper is the leading TTS layer for always-on local voice interfaces — real-time on Raspberry Pi, no GPU needed. For a complete offline voice assistant wired into Home Assistant, see [local voice assistant for smart home →](/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Head-to-Head Comparison Table',
        content:
          'All local TTS engines compared across the metrics that matter most for production deployment.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Piper is fastest on CPU; XTTS v2 gives the best voice cloning quality; F5-TTS provides zero-shot cloning with a newer architecture; Bark is the only engine producing laughter and music; StyleTTS 2 has the best English narration naturalness.',
          },
          {
            type: 'plain-terms',
            text: 'For most offline TTS needs: Piper if you want speed and simplicity, Coqui if you want voice cloning with a permissive license, XTTS v2 if you want the best cloning quality and have a GPU, F5-TTS if you want a newer architecture with faster zero-shot cloning.',
          },
        ],
        note: 'MOS (mean opinion score) on a 1–5 scale where 5 is indistinguishable from human speech. Scores are approximate and based on published benchmarks or community evaluations. MOS varies significantly by test sentence and listener pool. Human reference MOS: ~4.5.',
        columns: ['Tool', 'Quality', 'Speed', 'Voice Cloning', 'Multilingual', 'VRAM', 'License', 'MOS (English)'],
        rows: [
          {
            'Tool': 'Piper',
            'Quality': 'Good',
            'Speed': 'Very fast (CPU)',
            'Voice Cloning': 'No',
            'Multilingual': 'Yes (20+ langs)',
            'VRAM': 'CPU only',
            'License': 'MIT',
            'MOS (English)': '~3.5',
          },
          {
            'Tool': 'Kokoro',
            'Quality': 'Very good',
            'Speed': 'Fast (CPU)',
            'Voice Cloning': 'No',
            'Multilingual': 'English + expanding',
            'VRAM': 'CPU / 1–2 GB',
            'License': 'Apache 2.0',
            'MOS (English)': '~4.0',
          },
          {
            'Tool': 'Coqui TTS',
            'Quality': 'Very good',
            'Speed': 'Medium',
            'Voice Cloning': 'Yes',
            'Multilingual': 'Yes (20+ langs)',
            'VRAM': '2–4 GB',
            'License': 'MPL 2.0',
            'MOS (English)': '~3.8',
          },
          {
            'Tool': 'XTTS v2',
            'Quality': 'Excellent',
            'Speed': 'Slow',
            'Voice Cloning': 'Yes (best)',
            'Multilingual': 'Yes (17 langs)',
            'VRAM': '4–6 GB',
            'License': 'CPML (non-commercial)',
            'MOS (English)': '~4.1',
          },
          {
            'Tool': 'F5-TTS',
            'Quality': 'Excellent',
            'Speed': 'Medium-fast',
            'Voice Cloning': 'Yes (zero-shot)',
            'Multilingual': 'Yes (multilingual)',
            'VRAM': '3–5 GB',
            'License': 'CC-BY-NC-4.0',
            'MOS (English)': '~4.1',
          },
          {
            'Tool': 'Bark',
            'Quality': 'Unique / variable',
            'Speed': 'Slow',
            'Voice Cloning': 'Limited',
            'Multilingual': 'Yes (multilingual)',
            'VRAM': '4–8 GB',
            'License': 'MIT',
            'MOS (English)': '~3.2–4.0 (variable)',
          },
          {
            'Tool': 'StyleTTS 2',
            'Quality': 'Excellent (English)',
            'Speed': 'Medium',
            'Voice Cloning': 'No',
            'Multilingual': 'English mainly',
            'VRAM': '2–4 GB',
            'License': 'MIT',
            'MOS (English)': '~4.3',
          },
          {
            'Tool': 'Tortoise',
            'Quality': 'Excellent',
            'Speed': 'Very slow (minutes/sentence)',
            'Voice Cloning': 'Yes',
            'Multilingual': 'English mainly',
            'VRAM': '4–8 GB',
            'License': 'Apache 2.0',
            'MOS (English)': '~4.2',
          },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'First-Audio Latency Comparison',
        content:
          'First-audio latency is the time from text input to first audible output. Critical for voice assistants and interactive applications. For batch processing (audiobooks, podcast production), total throughput matters more than first-audio latency.',
        columns: ['Engine', 'First audio (RTX 4070)', 'First audio (CPU)', 'First audio (M5 Pro)'],
        rows: [
          {
            'Engine': 'Piper',
            'First audio (RTX 4070)': '~30 ms',
            'First audio (CPU)': '~50 ms',
            'First audio (M5 Pro)': '~40 ms',
          },
          {
            'Engine': 'Kokoro',
            'First audio (RTX 4070)': '~50 ms',
            'First audio (CPU)': '~80 ms',
            'First audio (M5 Pro)': '~60 ms',
          },
          {
            'Engine': 'Coqui VITS',
            'First audio (RTX 4070)': '~100 ms',
            'First audio (CPU)': '~300 ms',
            'First audio (M5 Pro)': '~150 ms',
          },
          {
            'Engine': 'StyleTTS 2',
            'First audio (RTX 4070)': '~150 ms',
            'First audio (CPU)': '~500 ms',
            'First audio (M5 Pro)': '~200 ms',
          },
          {
            'Engine': 'F5-TTS',
            'First audio (RTX 4070)': '~200 ms',
            'First audio (CPU)': '~800 ms',
            'First audio (M5 Pro)': '~300 ms',
          },
          {
            'Engine': 'XTTS v2',
            'First audio (RTX 4070)': '~300 ms',
            'First audio (CPU)': '~1500 ms',
            'First audio (M5 Pro)': '~500 ms',
          },
          {
            'Engine': 'Bark',
            'First audio (RTX 4070)': '~500 ms',
            'First audio (CPU)': '~3000 ms',
            'First audio (M5 Pro)': '~800 ms',
          },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — Fastest Lightweight Option',
        content:
          '**Piper is a fast, local text-to-speech system developed by Rhasspy for home automation and embedded use.** It uses a VITS-based neural architecture trained on voice datasets with an onnxruntime backend — optimized to run in real-time on a Raspberry Pi 4 or 5 without a GPU.',
        items: [
          '**Architecture:** VITS neural TTS with ONNX inference. Designed for single-board computers and embedded Linux.',
          '**Installation:** `pip install piper-tts`. Pre-trained voice packs available at the Piper voices repository on Hugging Face.',
          '**Usage:** `echo "Hello, world" | piper --model en_US-lessac-medium.onnx --output_file output.wav`',
          '**Voice packs:** 20+ languages, multiple voice options per language. Each voice pack is a 20–200 MB ONNX model file.',
          '**Speed:** ~10× faster than real-time on a modern desktop CPU. Real-time on Raspberry Pi 5. Sub-50 ms first-audio latency.',
          '**Apple Silicon:** ~15× real-time on M5 Pro (CPU, ARM NEON). Runs natively without GPU — excellent performance on Mac.',
          '**Listen to samples:** [Piper voice samples](https://rhasspy.github.io/piper-samples/)',
          '**Best for:** Home assistants, kiosk devices, embedded voice UI, privacy-sensitive read-aloud where GPU is unavailable.',
          '**Limitation:** No voice cloning. Quality is "good" — natural sounding but clearly synthetic compared to XTTS v2 or StyleTTS 2.',
          '**License:** MIT — fully commercial, no restrictions.',
          '**Kokoro TTS — Piper alternative:** Kokoro TTS is an emerging alternative to Piper in the lightweight category. It achieves higher naturalness than Piper while remaining fast on CPU. Licensed under Apache 2.0. If Piper\'s quality doesn\'t meet your needs but you can\'t afford GPU VRAM, [Kokoro](https://github.com/hexgrad/kokoro) is worth testing.',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — Best Open-Source All-Rounder',
        content:
          '**Coqui TTS is a Python toolkit for text-to-speech supporting multiple model architectures and voice cloning.** It was developed by the Coqui company (which shut down in January 2024) and is now maintained by the open-source community. The toolkit supports Tacotron2, VITS, and XTTS backends.',
        items: [
          '**Installation:** `pip install TTS`. Models download automatically on first use.',
          '**Voice cloning:** Provide 6+ seconds of reference audio. `tts --text "Hello" --model_name tts_models/en/vctk/vits --speaker_wav sample.wav --out_path output.wav`',
          '**Backend options:** VITS (fastest, good quality), Tacotron2 (older, slower), XTTS (best quality, see XTTS v2 section).',
          '**Languages:** 20+ language models available via `tts --list_models`.',
          '**VRAM:** 2–4 GB for VITS backend; 4–6 GB for XTTS backend.',
          '**Apple Silicon:** ~8× real-time on M5 Pro (CPU). No Metal GPU acceleration. Usable for batch generation.',
          '**Community status:** Coqui Inc shut down in January 2024. The open-source repo (`coqui-ai/TTS`) is community-maintained. No active commercial support.',
          '**License:** MPL 2.0 — commercial use allowed, but source code of modifications must be disclosed.',
          '**Best for:** Developers who want voice cloning with an open-source toolkit and a permissive license.',
          '**Listen to samples:** Official coqui.ai demo archived. Community audio examples are linked in the [coqui-ai/TTS GitHub repository](https://github.com/coqui-ai/TTS) under the demos section.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — Best Voice Cloning Quality',
        content:
          '**XTTS v2 (by Coqui) is the highest-quality voice cloning engine available locally in 2026.** It uses a GPT-based architecture with cross-lingual transfer — clone a voice in English and speak it in Spanish, German, French, or 14 other languages from the same 6 seconds of audio.',
        items: [
          '**Architecture:** GPT-based TTS with speaker conditioning. Vision-transformer for prosody modeling.',
          '**Voice cloning:** 6 seconds of reference audio is sufficient for a convincing voice clone. 3 seconds produces passable quality.',
          '**Cross-lingual cloning:** Clone voice in one language, generate speech in 17 different languages with the same voice characteristics.',
          '**Languages (17):** English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Russian, Dutch, Czech, Arabic, Chinese (zh-cn), Japanese, Hungarian, Korean, and Hindi. Korean and Hindi were added in XTTS v2.0.3.',
          '**"XTTS v2 voices":** There is no fixed catalog of named voices. XTTS v2 is a cloning model — you provide a 6-second reference clip and it reproduces that speaker. The repo ships a handful of built-in speaker presets for quick tests, but the intended workflow is supplying your own `speaker_wav`.',
          '**VRAM:** Model weights are ~2 GB. 4 GB VRAM is the practical minimum; 4–6 GB is recommended for real-time inference. Runs on CPU but ~5–10× slower.',
          '**Speed:** Slow — generates ~2× real-time on an RTX 4070. Not suitable for real-time voice assistant pipelines.',
          '**Apple Silicon:** ~3× real-time on M5 Pro (CPU, no Metal acceleration). Usable for batch audio generation, not for real-time voice assistant output.',
          '**Listen to samples:** [XTTS v2 demo on Hugging Face](https://huggingface.co/spaces/coqui/xtts)',
          '**License:** CPML (Coqui Public Model License) — non-commercial. The CPML permits personal, research, and hobby use of the model **and its audio outputs**, but prohibits commercial use (any paid product, SaaS, ad-supported content, or client work) without a separate commercial agreement. Coqui Inc shut down in January 2024, so there is currently no entity selling XTTS v2 commercial licenses — in practice, treat XTTS v2 as non-commercial only. See the [CPML non-interactive acceptance](#cpml-noninteractive) section for the `COQUI_TOS_AGREED` environment variable.',
        ],
        codeBlock: `from TTS.api import TTS

# Load XTTS v2 model
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")

# Clone voice from 6-second reference audio and synthesize in any of 17 languages
tts.tts_to_file(
    text="Bonjour, je suis votre assistant vocal.",
    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker
    language="fr",                        # Output in French using the cloned voice
    file_path="output.wav"
)`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'XTTS v2 is covered by the CPML (non-commercial) license. Commercial use — products, SaaS, services, or paid client work — requires a separate commercial agreement, and since Coqui Inc shut down in January 2024 no such agreement is currently available to buy. If you need commercial voice cloning, use Tortoise (Apache 2.0) or the Coqui TTS toolkit on a VITS backend (MPL 2.0). This is factual reference, not legal advice — read the CPML yourself before deploying.',
          },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — Generative Audio Beyond Speech',
        content:
          '**Bark (by Suno AI) is a generative text-to-audio model that produces speech, music, laughter, coughing, sighs, and ambient sounds from text prompts.** It is not a traditional TTS engine — it is a generative model that interprets text prompts as audio generation instructions.',
        items: [
          '**Unique capability:** Include `[laughs]`, `[sighs]`, `[clears throat]`, `[music]`, or `[sound effect: wind]` in your text and Bark generates those sounds alongside speech.',
          '**Not controllable like traditional TTS:** Output varies between runs for the same input. Quality is inconsistent — some outputs are excellent, others have artifacts or unintelligible segments.',
          '**Speed:** Slow — 2–4× slower than real-time even on an RTX 4090. Not suitable for interactive applications.',
          '**Apple Silicon:** ~1.5× real-time on M5 Pro (CPU, MPS partial). MPS (Metal Performance Shaders) support is partial — most inference still falls back to CPU.',
          '**Listen to samples:** [Bark audio examples on GitHub](https://github.com/suno-ai/bark#examples)',
          '**Best for:** Creative audio, podcast production with sound effects, interactive fiction, experimental voice applications.',
          '**VRAM:** 4–8 GB GPU. Runs on CPU with significantly lower quality.',
          '**Installation:** `pip install suno-bark`. Models download on first run (~2 GB).',
          '**License:** MIT — fully commercial.',
          '**Limitation:** No reliable voice cloning. The "voice presets" bundled with Bark are approximate — not a true voice cloning system.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — Highest Natural Quality',
        content:
          '**StyleTTS 2 is a diffusion-based TTS model that achieves near-human mean opinion scores (MOS) on the LJSpeech benchmark.** It transfers speaking style using diffusion — generating speech that is more natural and expressive than VITS-based models.',
        items: [
          '**Architecture:** Diffusion-based style transfer. Samples from a learned distribution of speaking styles rather than deterministically mapping text to audio.',
          '**Quality:** Highest MOS scores of any open-source English TTS engine on the LJSpeech benchmark. Listeners rate it as near-indistinguishable from human narration in controlled tests.',
          '**Best for:** Audiobook narration, professional voiceover, podcast production, any application where English quality is more important than voice customization.',
          '**Installation:** Clone the GitHub repo, install requirements (`pip install -r requirements.txt`), download model checkpoints (~500 MB).',
          '**Language support:** Primarily English. Limited multilingual capability — not recommended for non-English use.',
          '**Voice cloning:** Not supported. StyleTTS 2 generates in trained speaker voices only.',
          '**VRAM:** 2–4 GB GPU. Faster than XTTS v2 at ~5–8× real-time on RTX 4070.',
          '**Apple Silicon:** ~6× real-time on M5 Pro (CPU). No Metal acceleration, but ARM performance is solid for batch audio generation.',
          '**Listen to samples:** [StyleTTS 2 on GitHub](https://github.com/yl4579/StyleTTS2) — search "StyleTTS 2 audio samples" for community examples if the demo page is unavailable.',
          '**License:** MIT — fully commercial.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Zero-Shot Voice Cloning, Fully Open',
        content:
          '**F5-TTS is a flow-matching-based TTS model with zero-shot voice cloning — clone any voice from ~3 seconds of reference audio without fine-tuning.** It is one of the fastest-growing local TTS projects in 2025–2026, actively developed and rapidly gaining community adoption.',
        items: [
          '**Architecture:** Flow-matching (a diffusion-variant approach) instead of the GPT-based architecture used by XTTS v2. Flow-matching typically offers faster inference with competitive quality.',
          '**Voice cloning:** ~3 seconds of reference audio is sufficient for zero-shot voice cloning. No fine-tuning required — works on any voice at inference time.',
          '**Quality:** Competitive with XTTS v2 on English. MOS scores approximately ~4.1 in community evaluations.',
          '**Speed:** ~3–5× real-time on RTX 4070 — faster than XTTS v2 (~2× real-time) for comparable voice cloning quality.',
          '**Languages:** Multilingual — strong support for English and Chinese, with expanding support for other languages.',
          '**Apple Silicon:** ~2× real-time on M5 Pro (CPU). No Metal acceleration currently.',
          '**VRAM:** 3–5 GB GPU recommended. Smaller footprint than XTTS v2.',
          '**Installation:** `pip install f5-tts` or clone from [GitHub](https://github.com/SWivid/F5-TTS).',
          '**License:** CC-BY-NC-4.0 — non-commercial use only. Commercial use requires a separate agreement with the authors.',
          '**Why it matters:** F5-TTS brings a newer architecture to local voice cloning with an active community. If XTTS v2 is too slow for your pipeline or its CPML license is a concern for non-commercial projects, F5-TTS is the primary alternative to evaluate.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'Licenses & Commercial Use — Can I Use This TTS Engine Commercially?',
        content:
          'License is the single most important factor for production use, and it splits these engines cleanly into two groups. Permissively licensed engines (MIT, Apache 2.0) are free to ship in a commercial product. Restricted engines (CPML, CC-BY-NC-4.0) are non-commercial — using them in a paid product, SaaS, ad-supported content, or client work requires a separate agreement. The table below gives the exact license and a direct "can I use this commercially?" answer for each engine.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For local TTS in a commercial product, Piper, Bark, and StyleTTS 2 (MIT), Kokoro and Tortoise (Apache 2.0), and the Coqui TTS toolkit on a VITS/Tacotron2 backend (MPL 2.0) are all allowed; XTTS v2 (CPML) and F5-TTS (CC-BY-NC-4.0) are non-commercial.',
          },
          {
            type: 'plain-terms',
            text: 'The two most popular voice-cloning models — XTTS v2 and F5-TTS — cannot be used commercially without a separate license. For commercial voice cloning, Tortoise (Apache 2.0) or the Coqui toolkit on a VITS backend (MPL 2.0) are the safe choices.',
          },
        ],
        columns: ['Tool', 'License', 'Commercial OK?', 'Key Condition'],
        rows: [
          {
            'Tool': 'Piper',
            'License': 'MIT',
            'Commercial OK?': 'Yes — no restrictions',
            'Key Condition': 'Include MIT notice; check per-voice model license',
          },
          {
            'Tool': 'Kokoro',
            'License': 'Apache 2.0',
            'Commercial OK?': 'Yes — no restrictions',
            'Key Condition': 'Include Apache 2.0 notice',
          },
          {
            'Tool': 'Coqui TTS (toolkit)',
            'License': 'MPL 2.0',
            'Commercial OK?': 'Yes — with conditions',
            'Key Condition': 'Disclose source of any modifications to the toolkit files',
          },
          {
            'Tool': 'XTTS v2 (model)',
            'License': 'CPML',
            'Commercial OK?': 'No — non-commercial',
            'Key Condition': 'Commercial needs an agreement; none on sale since Coqui closed (Jan 2024)',
          },
          {
            'Tool': 'F5-TTS',
            'License': 'CC-BY-NC-4.0',
            'Commercial OK?': 'No — non-commercial',
            'Key Condition': 'NC carries over even to fine-tunes (Emilia training data)',
          },
          {
            'Tool': 'Bark',
            'License': 'MIT',
            'Commercial OK?': 'Yes — no restrictions',
            'Key Condition': 'Include MIT copyright notice',
          },
          {
            'Tool': 'StyleTTS 2',
            'License': 'MIT',
            'Commercial OK?': 'Yes — no restrictions',
            'Key Condition': 'Include MIT copyright notice',
          },
          {
            'Tool': 'Tortoise',
            'License': 'Apache 2.0',
            'Commercial OK?': 'Yes — no restrictions',
            'Key Condition': 'Attribution; obtain consent for any cloned voice',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Coqui TTS (the toolkit, MPL 2.0) and XTTS v2 (the specific model weights, CPML) are licensed differently. You can ship the Coqui TTS toolkit with VITS or Tacotron2 backends in a commercial product under MPL 2.0. The CPML non-commercial restriction applies specifically to the XTTS v2 model weights and their audio outputs — not to the toolkit code.',
          },
          {
            type: 'warning',
            text: 'This is factual reference, not legal advice. Licenses change and edge cases (voice consent, dataset terms, per-voice model licenses) matter. Read each engine\'s license file yourself, and consult a lawyer, before relying on any of these terms for commercial deployment.',
          },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'Accept the CPML Non-Interactively (COQUI_TOS_AGREED)',
        content:
          'The first time you load an XTTS / Coqui model that is covered by the CPML, the library prints the license terms and waits for you to type "y" to accept. That interactive prompt hangs in Docker builds, CI pipelines, and headless servers. To accept the CPML non-interactively, set the `COQUI_TOS_AGREED` environment variable to `1` — this records that you have read and agreed to the Coqui Public Model License before the model loads. It does not change the license: the CPML is still non-commercial, and setting the variable is your agreement to those terms, not a waiver of them.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Set the environment variable COQUI_TOS_AGREED=1 to accept the Coqui Public Model License (CPML) without the interactive prompt in Docker, CI, or any headless environment.',
          },
          {
            type: 'plain-terms',
            text: 'In a shell or Dockerfile use `export COQUI_TOS_AGREED=1`; in Python set `os.environ["COQUI_TOS_AGREED"] = "1"` before importing or loading the model. Either way the model loads without waiting for keyboard input.',
          },
        ],
        items: [
          '**Shell / CI:** `export COQUI_TOS_AGREED=1` before running your script.',
          '**Docker:** add `ENV COQUI_TOS_AGREED=1` to your Dockerfile, or pass `-e COQUI_TOS_AGREED=1` to `docker run`.',
          '**Python (set it before the model loads):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — must run before `TTS(...)` instantiates the XTTS model.',
          '**What it does:** records non-interactive acceptance of the CPML so model load does not block on a `y/n` prompt. It is not a commercial license and does not remove the non-commercial restriction.',
        ],
        codeBlock: `# 1) Shell / CI — accept the CPML once for the session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — bake acceptance into the image
# ENV COQUI_TOS_AGREED=1

# 3) Python — set it before the model is created
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # must be set BEFORE the TTS() call below

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Model now loads without the interactive license prompt`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'COQUI_TOS_AGREED=1 only suppresses the interactive prompt — it is your acceptance of the CPML, which remains a non-commercial license. It does not grant commercial rights to XTTS v2.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'How Local TTS Compares to ElevenLabs and Cloud TTS',
        content:
          'ElevenLabs, Google Text-to-Speech, and Azure Speech remain the quality ceiling for TTS in 2026. This section shows where local engines compete effectively and where cloud still wins.',
        items: [
          '**Quality ceiling:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper. ElevenLabs is still the quality ceiling in 2026 for consistency and expressiveness.',
          '**Latency:** Piper local (~30–50 ms first audio) is faster than any ElevenLabs API round-trip (~300–500 ms). For real-time voice UI, local Piper wins on latency.',
          '**Cost:** ElevenLabs charges $5–99/month by tier. Local TTS costs $0 after one-time hardware. At scale (millions of characters/month), local is significantly cheaper.',
          '**Voice cloning:** ElevenLabs Instant Voice Clone ≈ XTTS v2 quality. ElevenLabs Professional Voice Clone (requires a speaker recording session) exceeds any local engine.',
          '**Privacy:** Local TTS = no audio data sent anywhere. ElevenLabs = audio processed on their servers. Critical for sensitive content.',
          '**Offline capability:** Local = fully offline. ElevenLabs = requires internet. No offline mode available.',
          '**When to use cloud:** Professional voiceover production, customer-facing products requiring highest quality, multi-voice projects with dozens of characters.',
          '**When to use local:** Privacy-critical audio, embedded devices, cost-sensitive batch processing, offline environments, development and prototyping.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'How to Choose',
        content:
          'A decision flowchart from your requirement to the right TTS engine:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Need voice cloning? → XTTS v2 (best quality) or F5-TTS (faster, newer arch) or Coqui TTS (open license). Need CPU speed? → Piper. Need creative audio? → Bark. Need best English quality? → StyleTTS 2.',
          },
          {
            type: 'plain-terms',
            text: 'If you want to clone someone\'s voice, use XTTS v2 for quality or F5-TTS for faster inference or Coqui VITS for a permissive license. If you\'re building a Raspberry Pi or kiosk voice UI, use Piper. If you\'re making a podcast with sound effects, try Bark. If you\'re narrating audiobooks in English, use StyleTTS 2.',
          },
        ],
        items: [
          '**Need voice cloning?** → Yes: XTTS v2 (best quality, CPML license) or F5-TTS (newer arch, faster, CC-BY-NC-4.0) or Coqui VITS (good quality, MPL 2.0). No: Piper (speed), StyleTTS 2 (quality).',
          '**Need to run on CPU only / Raspberry Pi?** → Piper only. Kokoro is a higher-quality CPU alternative with Apache 2.0 license. All other engines require a GPU for acceptable performance.',
          '**Need creative audio with non-speech sounds?** → Bark. No other local engine produces laughter, sighs, or music natively.',
          '**Need the best English narration quality?** → StyleTTS 2. It outperforms all others on naturalness for English audiobook-style speech.',
          '**Need multilingual support?** → XTTS v2 (17 languages, cross-lingual cloning), Coqui (20+ languages), Piper (20+ language packs).',
          '**Need a permissive commercial license?** → Piper, Bark, StyleTTS 2 (MIT), Kokoro, Tortoise (Apache 2.0), or the Coqui toolkit on VITS (MPL 2.0). Avoid XTTS v2 (CPML) and F5-TTS (CC-BY-NC-4.0) for commercial use — both are non-commercial without a separate agreement.',
          '**Need commercial voice cloning (permissive license)?** → Tortoise (Apache 2.0) for highest quality if you can tolerate minutes-per-sentence generation, or the Coqui TTS toolkit on a VITS backend (MPL 2.0) for faster cloning. XTTS v2 and F5-TTS are higher quality but non-commercial.',
          '**Need voice control via text description?** → Parler-TTS. Describe the voice you want ("a calm elderly man speaking slowly") and it generates matching speech. Novel approach — no reference audio needed, no voice cloning. Useful when you need a specific voice character without a sample. [GitHub](https://github.com/huggingface/parler-tts)',
          '**Building a voice assistant pipeline?** → Piper for low-latency TTS output (see /power-local-llm/build-local-voice-assistant-2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much reference audio do I need for voice cloning with XTTS v2?',
            a: 'XTTS v2 requires a minimum of 3 seconds of clean reference audio, with 6+ seconds giving noticeably better results. The audio must be a single speaker with minimal background noise and no music. Higher quality source audio (recorded in a quiet room with a good microphone) produces better clones than compressed audio.',
          },
          {
            q: 'Can I use Piper TTS in a commercial product?',
            a: 'Yes. Piper is licensed under MIT, which permits unlimited commercial use. You must include the MIT license notice in your product. The voice models (ONNX files) may have separate licenses per voice — check the individual voice model\'s license on the Piper voices repository before deploying.',
          },
          {
            q: 'Is Coqui TTS still maintained after the company shut down?',
            a: 'Yes, but with reduced pace. The Coqui company shut down in January 2024, but the open-source repository (`coqui-ai/TTS`) is maintained by community contributors. Bug fixes and security patches are applied, but major new model training or features are unlikely without significant community effort. For XTTS v2, expect no new model versions from Coqui.',
          },
          {
            q: 'Which local TTS engine has the best multilingual support?',
            a: 'XTTS v2 supports 17 languages with cross-lingual voice cloning — the most impressive multilingual feature of any local engine. Coqui TTS has 20+ language models but without cross-lingual cloning. Piper has 20+ language voice packs for fast CPU inference. If you need to clone a voice and produce speech in multiple languages from one reference sample, XTTS v2 is the only option.',
          },
          {
            q: 'Can Bark produce music?',
            a: 'Bark can produce simple musical snippets alongside speech when prompted with `[music]` or `[singing]` tokens. It is not a dedicated music generator — outputs are short, inconsistent, and often artifact-laden. For actual music generation, Bark is not the right tool. It is best used for adding emotional non-speech sounds (laughter, coughing, sighs) to speech output rather than for full music tracks.',
          },
          {
            q: 'What is the best free local TTS for voice cloning?',
            a: 'F5-TTS (CC-BY-NC-4.0) for non-commercial use — it clones voices from ~3 seconds of audio with quality competitive with XTTS v2. For commercial use, Coqui TTS with VITS backend (MPL 2.0) allows commercial deployment with source disclosure conditions. XTTS v2 has the best quality but its CPML license restricts commercial deployment without a separate agreement.',
          },
          {
            q: 'Can I run XTTS v2 on an Apple Silicon Mac?',
            a: 'Yes, but CPU-only — approximately 3× real-time on M5 Pro. There is no Metal GPU acceleration for TTS engines currently. Unlike whisper.cpp (which has full Metal support), TTS engines run on CPU on Apple Silicon. Performance is usable for batch audio generation but not suitable for real-time voice assistant output.',
          },
          {
            q: 'Which local TTS engine sounds most human?',
            a: 'StyleTTS 2 for English narration — it achieves the highest MOS scores of any open-source English TTS engine (~4.3 vs human reference ~4.5). XTTS v2 and F5-TTS are competitive (~4.1) for cloned voice naturalness. None match ElevenLabs Turbo v2 at peak quality for production use cases.',
          },
          {
            q: 'Can I use XTTS v2 commercially?',
            a: 'No, not without a separate commercial agreement. XTTS v2 is released under the Coqui Public Model License (CPML), which permits personal, research, and hobby use of the model and its audio outputs but prohibits commercial use — any paid product, SaaS, ad-supported content, or client work. Coqui Inc shut down in January 2024, so there is currently no entity selling XTTS v2 commercial licenses; in practice, treat XTTS v2 as non-commercial only. For commercial voice cloning, use Tortoise (Apache 2.0) or the Coqui TTS toolkit on a VITS backend (MPL 2.0). This is factual reference, not legal advice — read the CPML yourself before deploying.',
          },
          {
            q: 'How do I accept the Coqui CPML license non-interactively (Docker / CI)?',
            a: 'Set the environment variable COQUI_TOS_AGREED to 1. The Coqui/XTTS library normally prints the CPML and waits for you to type "y", which hangs in Docker builds, CI, and headless servers. Setting COQUI_TOS_AGREED=1 records your acceptance so the model loads without the prompt. Use `export COQUI_TOS_AGREED=1` in a shell or CI step, `ENV COQUI_TOS_AGREED=1` in a Dockerfile, or `os.environ["COQUI_TOS_AGREED"] = "1"` in Python before the TTS() call. It only suppresses the prompt — it is your agreement to the CPML and does not grant commercial rights.',
          },
          {
            q: 'How many voices and languages does XTTS v2 support?',
            a: 'XTTS v2 has no fixed catalog of named voices — it is a cloning model, so you supply a 6-second reference clip and it reproduces that speaker (the repo also ships a few built-in speaker presets for quick tests). It generates speech in 17 languages: English, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Russian, Dutch, Czech, Arabic, Chinese (zh-cn), Japanese, Hungarian, Korean, and Hindi. Cloning is cross-lingual: clone a voice once and generate it in any of the 17 languages.',
          },
          {
            q: 'Kokoro vs Piper — which lightweight CPU TTS should I use?',
            a: 'Both run fast on CPU with no GPU and both are permissively licensed (Piper is MIT, Kokoro is Apache 2.0), so either is safe for commercial use. Choose Piper when you need the lowest latency and the widest language coverage (20+ language voice packs, real-time on a Raspberry Pi 5) — it is the standard for embedded and smart-home voice. Choose Kokoro (an 82M-parameter model built on the StyleTTS 2 architecture) when you want higher naturalness than Piper and can accept slightly more compute; its English quality is closer to the heavier GPU engines. For a Raspberry Pi or always-on assistant, Piper; for a desktop/server read-aloud where quality matters more than milliseconds, Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — Source code, voice packs, ONNX model downloads, and Raspberry Pi setup guide.',
          '[Coqui TTS on GitHub](https://github.com/coqui-ai/TTS) — Source code, model list, voice cloning documentation, and Python API reference.',
          '[XTTS v2 documentation](https://docs.coqui.ai/en/latest/models/xtts.html) — XTTS v2 model card, license (CPML), and voice cloning API.',
          '[Bark on GitHub](https://github.com/suno-ai/bark) — Source, audio prompt tokens, model download, and example outputs.',
          '[StyleTTS 2 on GitHub](https://github.com/yl4579/StyleTTS2) — Architecture paper, model checkpoints, and inference guide.',
          '[F5-TTS on GitHub](https://github.com/SWivid/F5-TTS) — Flow-matching TTS with zero-shot voice cloning, installation guide, and multilingual support.',
          '[Kokoro TTS on GitHub](https://github.com/hexgrad/kokoro) — Lightweight high-quality TTS with Apache 2.0 license, CPU-optimized.',
          '[Tortoise TTS on GitHub](https://github.com/neonbjb/tortoise-tts) — High-quality multi-voice TTS with voice cloning, Apache 2.0 license. Very slow but commercial-friendly.',
          '[XTTS-v2 LICENSE.txt (CPML) on Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Full text of the Coqui Public Model License governing XTTS v2.',
          '[Piper voices on Hugging Face](https://huggingface.co/rhasspy/piper-voices) — All available language/voice pack downloads with per-voice license information.',
          '[Piper voice samples](https://rhasspy.github.io/piper-samples/) — Audio demos for all Piper voices across supported languages.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Fully Offline Voice Assistant in 2026](/power-local-llm/build-local-voice-assistant-2026) — Use Piper or Coqui TTS as the output layer of a complete Whisper + LLM + TTS pipeline.',
          '[Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026) — The input side of a voice pipeline: STT to complement TTS.',
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Integrate TTS as the voice output layer of a full multimodal stack.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) — Mobile voice assistant using iOS system TTS or Piper.',
          '[Best Budget GPUs for Local LLM](/local-llms/best-budget-gpus-local-llm) — GPU selection for running XTTS v2, F5-TTS, Bark, or StyleTTS 2 inference.',
          '[Best AI Text-to-Speech for Content Creators](/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local: voice quality and latency comparison.',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Lokale TTS- und Voice-Cloning-Lizenzen 2026: Welche Engines erlauben kommerzielle Nutzung (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: 'Lokale TTS- & Voice-Cloning-Lizenzen 2026: Kommerziell',
    intro:
      'Dürfen Sie eine lokale Text-to-Speech-Engine in einem kommerziellen Produkt einsetzen? Das hängt vollständig von der Lizenz ab, und die Lizenzen unterscheiden sich erheblich. Piper, Bark und StyleTTS 2 erscheinen unter MIT, Kokoro und Tortoise unter Apache 2.0 — alle vier kostenlos für die kommerzielle Nutzung. Das Coqui-TTS-Toolkit steht unter MPL 2.0 (kommerziell mit Bedingungen). Doch die beiden beliebtesten Voice-Cloning-Modelle sind eingeschränkt: XTTS v2 nutzt die Coqui Public Model License (CPML, nicht-kommerziell), und F5-TTS nutzt CC-BY-NC-4.0 (nicht-kommerziell). Dieser Leitfaden nennt die exakte Lizenz jeder Engine, eine klare Antwort auf „Darf ich das kommerziell nutzen?" pro Engine, die Umgebungsvariable COQUI_TOS_AGREED zum nicht-interaktiven Akzeptieren der CPML in Docker und CI sowie einen direkten Vergleich nach Qualität, Geschwindigkeit, VRAM und Voice-Cloning — damit Sie die richtige Engine wählen können, ohne Audio in die Cloud zu senden und ohne Lizenz-Überraschung in der Produktion. (Lizenzen geprüft im Juni 2026; dies ist eine sachliche Referenz, keine Rechtsberatung — lesen Sie jede Lizenz selbst, bevor Sie sie kommerziell nutzen.)',
    metaDescription:
      'Welche lokalen TTS-Engines erlauben kommerzielle Nutzung? Lizenzen für Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) & Coqui — plus die COQUI_TOS_AGREED-Variable. 2026.',
    twitterDescription:
      'Lokale TTS-Lizenzen 2026: Welche Voice-Cloning-Engines erlauben kommerzielle Nutzung? Piper/Bark/StyleTTS 2 (MIT), Kokoro/Tortoise (Apache 2.0), XTTS v2 (CPML nicht-kommerziell), F5-TTS (CC-BY-NC). Plus die COQUI_TOS_AGREED-Variable. Alles offline.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper ist die beste Wahl für Geschwindigkeit und Embedded-Anwendungen.** Es läuft vollständig auf der CPU, erzeugt Echtzeit-Sprache auf einem Raspberry Pi 5 und unterstützt 20+ Sprachen über herunterladbare Voice-Packs. Keine GPU, keine Python-Komplexität, MIT-Lizenz.',
          '**XTTS v2 ist die beste lokale Voice-Cloning-Option 2026 — aber nicht-kommerziell.** Geben Sie 6 Sekunden Referenzaudio ein und es klont die Stimme in 17 Sprachen (4–6 GB GPU-VRAM). Die CPML-Lizenz ist nicht-kommerziell, und seit Coqui geschlossen hat (Januar 2024) ist keine kommerzielle Lizenz mehr im Verkauf — behandeln Sie XTTS v2 als ausschließlich nicht-kommerziell. Akzeptieren Sie die CPML nicht-interaktiv in Docker/CI mit `COQUI_TOS_AGREED=1`.',
          '**F5-TTS ist die schnell wachsende Alternative für Zero-Shot-Voice-Cloning.** Es verwendet eine Flow-Matching-Architektur anstelle von GPT, klont eine Stimme aus ~3 Sekunden Referenzaudio und erzielt Qualität vergleichbar mit XTTS v2 bei schnellerem Inferenzen. Lizenz: CC-BY-NC-4.0 (nur nicht-kommerziell).',
          '**Coqui TTS ist das flexibelste Open-Source-TTS-Toolkit.** Es unterstützt mehrere Backends (Tacotron2, VITS, XTTS), Voice-Cloning und 20+ Sprachen unter MPL 2.0-Lizenz. Hinweis: Das Coqui-Unternehmen wurde im Januar 2024 geschlossen; das Projekt wird nun von der Community gepflegt.',
          '**Bark ist die einzige lokale TTS, die nicht-sprachliche Audio generiert.** Es kann Lachen, Husten, Seufzer, Musikschnipsel und Umgebungsgeräusche neben Sprache erzeugen — nützlich für kreative Audioinhalte, Podcast-Produktion und interaktive Fiktion. Die Ausgaben sind langsam und nicht-deterministisch.',
          '**StyleTTS 2 erreicht die höchsten MOS-Werte (Mean Opinion Score) aller Open-Source-englischen TTS-Engines.** Sein diffusionsbasiertes Style-Transfer erzeugt fast-menschliche Natürlichkeit bei englischen Narrationen. Es unterstützt nur Englisch und hat kein Voice-Cloning.',
          '**Die Lizenz entscheidet über die kommerzielle Nutzung — und die Trennung ist klar.** Kostenlos für kommerzielle Produkte: Piper, Bark, StyleTTS 2 (MIT) sowie Kokoro, Tortoise (Apache 2.0). Kommerziell mit Bedingungen: Coqui-TTS-Toolkit (MPL 2.0, Toolkit-Änderungen offenlegen). Nur nicht-kommerziell: XTTS v2 (CPML) und F5-TTS (CC-BY-NC-4.0) — beide benötigen eine separate Vereinbarung. Für kommerzielles Voice-Cloning verwenden Sie Tortoise (Apache 2.0) oder das Coqui-Toolkit auf einem VITS-Backend (MPL 2.0). Sachliche Referenz, keine Rechtsberatung.',
          '**Keine entsprechen kommerzieller TTS-Qualität im großen Maßstab.** ElevenLabs, Google Text-to-Speech und Azure TTS übertreffen lokale Engines immer noch bei Konsistenz, Natürlichkeit und Latenz. Lokale TTS ist die richtige Wahl, wenn Datenschutz, Kosten oder Offline-Betrieb wichtiger ist als absolute Qualität.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzübersicht',
        items: [
          '**Schnellstes lokales TTS:** Piper — Echtzeit auf Raspberry Pi 5, ~10× schneller als Echtzeit auf modernem Desktop-CPU.',
          '**Beste Voice-Cloning-Qualität:** XTTS v2 — 6 Sekunden Referenzaudio, sprachübergreifendes Cloning in 17 Sprachen.',
          '**Schnellstes Zero-Shot-Voice-Cloning (neuere Architektur):** F5-TTS — ~3 Sekunden Audio, Flow-Matching, ~3–5× Echtzeit auf RTX 4070.',
          '**Flexibelstes Open-Source-Toolkit:** Coqui TTS — unterstützt VITS, Tacotron2, XTTS-Backends, 20+ Sprachmodelle.',
          '**Einziges generatives Audio (Nicht-Sprach-Klänge):** Bark — Lachen, Seufzer, Musik, Umgebungsgeräusche. Langsamstes von allen.',
          '**Beste englische Narrations-Qualität:** StyleTTS 2 — diffusionsbasiertes Style-Transfer, nahezu menschlicher MOS auf dem LJSpeech-Benchmark.',
          '**Kostenlos für kommerzielle Nutzung:** Piper, Bark, StyleTTS 2 (MIT); Kokoro, Tortoise (Apache 2.0); Coqui-TTS-Toolkit (MPL 2.0, mit Bedingungen). **Nicht-kommerziell:** XTTS v2 (CPML), F5-TTS (CC-BY-NC-4.0).',
          '**XTTS v2 Stimmen und Sprachen:** Keine feste Stimmenliste — Sie liefern einen 6-Sekunden-Referenzclip, und es klont diese Stimme. Eingebaute Speaker-Presets werden mit dem Modell ausgeliefert, und es generiert in 17 Sprachen: en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**XTTS v2 VRAM:** ~2 GB Modellgewichte; 4 GB Minimum zum Betrieb, 4–6 GB empfohlen für Echtzeit-Inferenz.',
          '**CPML in CI/Docker akzeptieren:** `export COQUI_TOS_AGREED=1` — keine interaktive Eingabeaufforderung nötig.',
          '**VRAM-Anforderungen:** Piper: nur CPU. Kokoro: CPU / 1–2 GB. StyleTTS 2: 2–4 GB. Coqui VITS: 2–4 GB. F5-TTS: 3–5 GB. XTTS v2: 4–6 GB. Bark: 4–8 GB. Tortoise: 4–8 GB.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'Warum lokales TTS wichtig ist',
        content: 'Cloud-TTS-Dienste (ElevenLabs, Google TTS, Amazon Polly, Azure Speech) sind bequem, aber sie bringen zeichenbasierte Abrechnung, Aufbewahrungsrichtlinien für Audiodaten und Latenz durch Netzwerk-Roundtrips mit sich. Lokales TTS eliminiert alle drei Nachteile.',
        items: [
          '**Datenschutz:** Ihr Textinhalt verlässt niemals Ihren Computer. Kritisch für medizinische Diktate, rechtliche Zusammenfassungen, private Tagebuchnarration oder vertrauliches Vorlesen von Dokumenten.',
          '**Kosten:** Cloud-TTS-Preise liegen typischerweise bei 4–30 € pro Million Zeichen. Ein Entwickler, der 10 Millionen Zeichen pro Monat generiert, spart 40–300 €/Monat mit einem einmaligen lokalen Setup.',
          '**Latenz:** Kein Netzwerk-Roundtrip. Piper generiert das erste Audio-Token in unter 50 ms auf der CPU — schneller als jeder Cloud-TTS-Roundtrip.',
          '**Anpassung:** Voice-Cloning (XTTS v2, F5-TTS, Coqui) ermöglicht die Erstellung einer eigenen Stimme aus wenigen Sekunden Audio. Cloud-Anbieter berechnen 10 €+/Monat pro geklonter Stimme.',
          '**Offline-Betrieb:** Funktioniert in Flugzeugen, in gesicherten Einrichtungen, in abgelegenen Gebieten ohne Internet. Eingebettete Sprach-UI für Kioske und Geräte.',
          '**Smart Home:** Piper ist die führende TTS-Schicht für immer-aktive lokale Sprachschnittstellen — Echtzeit auf Raspberry Pi, keine GPU erforderlich. Für einen vollständigen Offline-Sprachassistenten in Home Assistant, siehe [lokaler Sprachassistent für Smart Home →](/de/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Direkter Vergleich',
        content: 'Alle lokalen TTS-Engines im Vergleich anhand der wichtigsten Metriken für den Produktionseinsatz.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Piper ist am schnellsten auf der CPU; XTTS v2 bietet die beste Voice-Cloning-Qualität; F5-TTS ermöglicht Zero-Shot-Cloning mit einer neueren Architektur; Bark ist die einzige Engine, die Lachen und Musik erzeugt; StyleTTS 2 hat die beste englische Narrations-Natürlichkeit.' },
          { type: 'plain-terms', text: 'Für die meisten Offline-TTS-Anforderungen: Piper für Geschwindigkeit und Einfachheit, Coqui für Voice-Cloning mit einer freizügigen Lizenz, XTTS v2 für beste Cloning-Qualität mit GPU, F5-TTS für eine neuere Architektur mit schnellerem Zero-Shot-Cloning.' },
        ],
        note: 'MOS (Mean Opinion Score) auf einer Skala von 1–5, wobei 5 nicht von menschlicher Sprache zu unterscheiden ist. Werte sind näherungsweise und basieren auf veröffentlichten Benchmarks oder Community-Evaluierungen. MOS variiert erheblich je nach Testsatz und Zuhörerpool. Menschlicher Referenz-MOS: ~4,5.',
        columns: ['Tool', 'Qualität', 'Geschwindigkeit', 'Voice-Cloning', 'Mehrsprachig', 'VRAM', 'Lizenz', 'MOS (Englisch)'],
        rows: [
          { 'Tool': 'Piper', 'Qualität': 'Gut', 'Geschwindigkeit': 'Sehr schnell (CPU)', 'Voice-Cloning': 'Nein', 'Mehrsprachig': 'Ja (20+ Sprachen)', 'VRAM': 'Nur CPU', 'Lizenz': 'MIT', 'MOS (Englisch)': '~3,5' },
          { 'Tool': 'Kokoro', 'Qualität': 'Sehr gut', 'Geschwindigkeit': 'Schnell (CPU)', 'Voice-Cloning': 'Nein', 'Mehrsprachig': 'Englisch + wachsend', 'VRAM': 'CPU / 1–2 GB', 'Lizenz': 'Apache 2.0', 'MOS (Englisch)': '~4,0' },
          { 'Tool': 'Coqui TTS', 'Qualität': 'Sehr gut', 'Geschwindigkeit': 'Mittel', 'Voice-Cloning': 'Ja', 'Mehrsprachig': 'Ja (20+ Sprachen)', 'VRAM': '2–4 GB', 'Lizenz': 'MPL 2.0', 'MOS (Englisch)': '~3,8' },
          { 'Tool': 'XTTS v2', 'Qualität': 'Ausgezeichnet', 'Geschwindigkeit': 'Langsam', 'Voice-Cloning': 'Ja (beste)', 'Mehrsprachig': 'Ja (17 Sprachen)', 'VRAM': '4–6 GB', 'Lizenz': 'CPML (nicht-kommerziell)', 'MOS (Englisch)': '~4,1' },
          { 'Tool': 'F5-TTS', 'Qualität': 'Ausgezeichnet', 'Geschwindigkeit': 'Mittel-schnell', 'Voice-Cloning': 'Ja (Zero-Shot)', 'Mehrsprachig': 'Ja (mehrsprachig)', 'VRAM': '3–5 GB', 'Lizenz': 'CC-BY-NC-4.0', 'MOS (Englisch)': '~4,1' },
          { 'Tool': 'Bark', 'Qualität': 'Einzigartig / variabel', 'Geschwindigkeit': 'Langsam', 'Voice-Cloning': 'Begrenzt', 'Mehrsprachig': 'Ja (mehrsprachig)', 'VRAM': '4–8 GB', 'Lizenz': 'MIT', 'MOS (Englisch)': '~3,2–4,0 (variabel)' },
          { 'Tool': 'StyleTTS 2', 'Qualität': 'Ausgezeichnet (Englisch)', 'Geschwindigkeit': 'Mittel', 'Voice-Cloning': 'Nein', 'Mehrsprachig': 'Hauptsächlich Englisch', 'VRAM': '2–4 GB', 'Lizenz': 'MIT', 'MOS (Englisch)': '~4,3' },
          { 'Tool': 'Tortoise', 'Qualität': 'Ausgezeichnet', 'Geschwindigkeit': 'Sehr langsam (Minuten/Satz)', 'Voice-Cloning': 'Ja', 'Mehrsprachig': 'Hauptsächlich Englisch', 'VRAM': '4–8 GB', 'Lizenz': 'Apache 2.0', 'MOS (Englisch)': '~4,2' },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'Erster-Audio-Latenz-Vergleich',
        content: 'Die Erster-Audio-Latenz ist die Zeit von der Texteingabe bis zur ersten hörbaren Ausgabe. Kritisch für Sprach-Assistenten und interaktive Anwendungen. Bei der Stapelverarbeitung (Hörbücher, Podcast-Produktion) ist der Gesamtdurchsatz wichtiger als die Erster-Audio-Latenz.',
        columns: ['Engine', 'Erstes Audio (RTX 4070)', 'Erstes Audio (CPU)', 'Erstes Audio (M5 Pro)'],
        rows: [
          { 'Engine': 'Piper', 'Erstes Audio (RTX 4070)': '~30 ms', 'Erstes Audio (CPU)': '~50 ms', 'Erstes Audio (M5 Pro)': '~40 ms' },
          { 'Engine': 'Kokoro', 'Erstes Audio (RTX 4070)': '~50 ms', 'Erstes Audio (CPU)': '~80 ms', 'Erstes Audio (M5 Pro)': '~60 ms' },
          { 'Engine': 'Coqui VITS', 'Erstes Audio (RTX 4070)': '~100 ms', 'Erstes Audio (CPU)': '~300 ms', 'Erstes Audio (M5 Pro)': '~150 ms' },
          { 'Engine': 'StyleTTS 2', 'Erstes Audio (RTX 4070)': '~150 ms', 'Erstes Audio (CPU)': '~500 ms', 'Erstes Audio (M5 Pro)': '~200 ms' },
          { 'Engine': 'F5-TTS', 'Erstes Audio (RTX 4070)': '~200 ms', 'Erstes Audio (CPU)': '~800 ms', 'Erstes Audio (M5 Pro)': '~300 ms' },
          { 'Engine': 'XTTS v2', 'Erstes Audio (RTX 4070)': '~300 ms', 'Erstes Audio (CPU)': '~1500 ms', 'Erstes Audio (M5 Pro)': '~500 ms' },
          { 'Engine': 'Bark', 'Erstes Audio (RTX 4070)': '~500 ms', 'Erstes Audio (CPU)': '~3000 ms', 'Erstes Audio (M5 Pro)': '~800 ms' },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — Schnellste Leichtgewichts-Option',
        content: '**Piper ist ein schnelles, lokales Text-to-Speech-System, das von Rhasspy für Heimautomatisierung und Embedded-Anwendungen entwickelt wurde.** Es verwendet eine VITS-basierte neuronale Architektur, die auf Sprachdatensätzen mit einem onnxruntime-Backend trainiert wurde — optimiert für den Echtzeit-Betrieb auf einem Raspberry Pi 4 oder 5 ohne GPU.',
        items: [
          '**Architektur:** VITS neuronales TTS mit ONNX-Inferenz. Entwickelt für Einplatinencomputer und Embedded Linux.',
          '**Installation:** `pip install piper-tts`. Vortrainierte Voice-Packs sind im Piper-Voices-Repository auf Hugging Face verfügbar.',
          '**Verwendung:** `echo "Hallo, Welt" | piper --model de_DE-thorsten-medium.onnx --output_file ausgabe.wav`',
          '**Voice-Packs:** 20+ Sprachen, mehrere Voice-Optionen pro Sprache. Jedes Voice-Pack ist eine 20–200 MB große ONNX-Modelldatei.',
          '**Geschwindigkeit:** ~10× schneller als Echtzeit auf einem modernen Desktop-CPU. Echtzeit auf Raspberry Pi 5. Unter-50-ms-Erster-Audio-Latenz.',
          '**Apple Silicon:** ~15× Echtzeit auf M5 Pro (CPU, ARM NEON). Läuft nativ ohne GPU — ausgezeichnete Leistung auf Mac.',
          '**Beispiele anhören:** [Piper Voice-Samples](https://rhasspy.github.io/piper-samples/)',
          '**Am besten für:** Heimassistenten, Kiosk-Geräte, Embedded-Sprach-UI, datenschutzsensitives Vorlesen ohne verfügbare GPU.',
          '**Einschränkung:** Kein Voice-Cloning. Qualität ist „gut" — natürlich klingend, aber klar synthetisch im Vergleich zu XTTS v2 oder StyleTTS 2.',
          '**Lizenz:** MIT — vollständig kommerziell, keine Einschränkungen.',
          '**Kokoro TTS — Piper-Alternative:** Kokoro TTS ist eine aufkommende Alternative zu Piper in der Leichtgewichts-Kategorie. Es erreicht höhere Natürlichkeit als Piper und bleibt dabei schnell auf der CPU. Lizenziert unter Apache 2.0. Wenn Pipers Qualität Ihre Anforderungen nicht erfüllt, Sie sich aber keine GPU-VRAM leisten können, ist [Kokoro](https://github.com/hexgrad/kokoro) einen Test wert.',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — Bestes Open-Source-Allround-Toolkit',
        content: '**Coqui TTS ist ein Python-Toolkit für Text-to-Speech, das mehrere Modellarchitekturen und Voice-Cloning unterstützt.** Es wurde vom Coqui-Unternehmen entwickelt (das im Januar 2024 geschlossen wurde) und wird jetzt von der Open-Source-Community gepflegt. Das Toolkit unterstützt Tacotron2-, VITS- und XTTS-Backends.',
        items: [
          '**Installation:** `pip install TTS`. Modelle werden beim ersten Gebrauch automatisch heruntergeladen.',
          '**Voice-Cloning:** Geben Sie 6+ Sekunden Referenzaudio an. `tts --text "Hallo" --model_name tts_models/de/thorsten/tacotron2-DDC --speaker_wav beispiel.wav --out_path ausgabe.wav`',
          '**Backend-Optionen:** VITS (schnellste, gute Qualität), Tacotron2 (älter, langsamer), XTTS (beste Qualität, siehe XTTS v2-Abschnitt).',
          '**Sprachen:** 20+ Sprachmodelle verfügbar über `tts --list_models`.',
          '**VRAM:** 2–4 GB für VITS-Backend; 4–6 GB für XTTS-Backend.',
          '**Apple Silicon:** ~8× Echtzeit auf M5 Pro (CPU). Keine Metal-GPU-Beschleunigung. Für Stapelgenerierung verwendbar.',
          '**Community-Status:** Coqui Inc schloss im Januar 2024. Das Open-Source-Repo (`coqui-ai/TTS`) wird von der Community gepflegt. Kein aktiver kommerzieller Support.',
          '**Lizenz:** MPL 2.0 — Kommerzielle Nutzung erlaubt, aber Quellcode von Änderungen muss offengelegt werden.',
          '**Am besten für:** Entwickler, die Voice-Cloning mit einem Open-Source-Toolkit und einer freizügigen Lizenz wollen.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — Beste Voice-Cloning-Qualität',
        content: '**XTTS v2 (von Coqui) ist die hochwertigste lokal verfügbare Voice-Cloning-Engine im Jahr 2026.** Es verwendet eine GPT-basierte Architektur mit sprachübergreifendem Transfer — klonen Sie eine Stimme auf Englisch und sprechen Sie sie auf Spanisch, Deutsch, Französisch oder 14 anderen Sprachen aus denselben 6 Sekunden Audio.',
        items: [
          '**Architektur:** GPT-basiertes TTS mit Speaker-Conditioning. Vision-Transformer für Prosodie-Modellierung.',
          '**Voice-Cloning:** 6 Sekunden Referenzaudio sind ausreichend für ein überzeugendes Voice-Cloning. 3 Sekunden erzeugen passable Qualität.',
          '**Sprachübergreifendes Cloning:** Stimme in einer Sprache klonen, Sprache in 17 verschiedenen Sprachen mit denselben Stimm-Charakteristiken generieren.',
          '**Sprachen (17):** Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Polnisch, Türkisch, Russisch, Niederländisch, Tschechisch, Arabisch, Chinesisch (zh-cn), Japanisch, Ungarisch, Koreanisch und Hindi. Koreanisch und Hindi kamen in XTTS v2.0.3 hinzu.',
          '**„XTTS v2 Stimmen":** Es gibt keinen festen Katalog benannter Stimmen. XTTS v2 ist ein Cloning-Modell — Sie liefern einen 6-Sekunden-Referenzclip, und es reproduziert diesen Sprecher. Das Repo liefert eine Handvoll eingebauter Speaker-Presets für schnelle Tests, aber der vorgesehene Workflow besteht darin, Ihr eigenes `speaker_wav` bereitzustellen.',
          '**VRAM:** Modellgewichte sind ~2 GB. 4 GB VRAM sind das praktische Minimum; 4–6 GB werden für Echtzeit-Inferenz empfohlen. Läuft auf CPU, aber ~5–10× langsamer.',
          '**Geschwindigkeit:** Langsam — generiert ~2× Echtzeit auf einem RTX 4070. Nicht geeignet für Echtzeit-Sprach-Assistenten-Pipelines.',
          '**Apple Silicon:** ~3× Echtzeit auf M5 Pro (CPU, keine Metal-Beschleunigung). Für Stapel-Audio-Generierung verwendbar, nicht für Echtzeit-Sprach-Assistenten-Ausgabe.',
          '**Lizenz:** CPML (Coqui Public Model License) — nicht-kommerziell. Die CPML erlaubt persönliche, Forschungs- und Hobby-Nutzung des Modells **und seiner Audio-Ausgaben**, untersagt aber die kommerzielle Nutzung (jedes kostenpflichtige Produkt, SaaS, werbefinanzierte Inhalte oder Auftragsarbeit) ohne separate kommerzielle Vereinbarung. Coqui Inc wurde im Januar 2024 geschlossen, daher gibt es derzeit kein Unternehmen, das XTTS-v2-Kommerzlizenzen verkauft — behandeln Sie XTTS v2 in der Praxis als ausschließlich nicht-kommerziell. Siehe den Abschnitt [Nicht-interaktives Akzeptieren der CPML](#cpml-noninteractive) für die Umgebungsvariable `COQUI_TOS_AGREED`.',
        ],
        codeBlock: `from TTS.api import TTS\n\n# Load XTTS v2 model\ntts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")\n\n# Clone voice from 6-second reference audio and synthesize in any of 17 languages\ntts.tts_to_file(\n    text="Bonjour, je suis votre assistant vocal.",\n    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker\n    language="fr",                        # Output in French using the cloned voice\n    file_path="output.wav"\n)`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'XTTS v2 unterliegt der CPML-Lizenz (nicht-kommerziell). Die kommerzielle Nutzung — Produkte, SaaS, Dienste oder bezahlte Auftragsarbeit — erfordert eine separate kommerzielle Vereinbarung, und da Coqui Inc im Januar 2024 geschlossen wurde, ist eine solche Vereinbarung derzeit nicht käuflich erhältlich. Wenn Sie kommerzielles Voice-Cloning benötigen, verwenden Sie Tortoise (Apache 2.0) oder das Coqui-TTS-Toolkit auf einem VITS-Backend (MPL 2.0). Dies ist eine sachliche Referenz, keine Rechtsberatung — lesen Sie die CPML selbst, bevor Sie sie einsetzen.' },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — Generatives Audio jenseits von Sprache',
        content: '**Bark (von Suno AI) ist ein generatives Text-to-Audio-Modell, das Sprache, Musik, Lachen, Husten, Seufzer und Umgebungsgeräusche aus Textprompts erzeugt.** Es ist kein traditionelles TTS-System — es ist ein generatives Modell, das Textprompts als Audiogenerierungs-Anweisungen interpretiert.',
        items: [
          '**Einzigartige Fähigkeit:** Fügen Sie `[laughs]`, `[sighs]`, `[clears throat]`, `[music]` oder `[sound effect: wind]` in Ihren Text ein und Bark generiert diese Klänge neben der Sprache.',
          '**Nicht steuerbar wie traditionelles TTS:** Die Ausgabe variiert zwischen Durchläufen für dieselbe Eingabe. Die Qualität ist inkonsistent — manche Ausgaben sind ausgezeichnet, andere haben Artefakte oder unverständliche Segmente.',
          '**Geschwindigkeit:** Langsam — 2–4× langsamer als Echtzeit selbst auf einem RTX 4090. Nicht geeignet für interaktive Anwendungen.',
          '**Apple Silicon:** ~1,5× Echtzeit auf M5 Pro (CPU, MPS partiell). MPS (Metal Performance Shaders)-Unterstützung ist partiell — die meiste Inferenz fällt weiterhin auf CPU zurück.',
          '**Am besten für:** Kreatives Audio, Podcast-Produktion mit Soundeffekten, interaktive Fiktion, experimentelle Sprach-Anwendungen.',
          '**VRAM:** 4–8 GB GPU. Läuft auf CPU mit deutlich niedrigerer Qualität.',
          '**Installation:** `pip install suno-bark`. Modelle werden beim ersten Ausführen heruntergeladen (~2 GB).',
          '**Lizenz:** MIT — vollständig kommerziell.',
          '**Einschränkung:** Kein zuverlässiges Voice-Cloning. Die mit Bark gebündelten „Voice-Presets" sind näherungsweise — kein echtes Voice-Cloning-System.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — Höchste natürliche Qualität',
        content: '**StyleTTS 2 ist ein diffusionsbasiertes TTS-Modell, das nahezu menschliche Mean Opinion Scores (MOS) auf dem LJSpeech-Benchmark erreicht.** Es überträgt den Sprechstil mittels Diffusion — generiert Sprache, die natürlicher und ausdrucksvoller ist als VITS-basierte Modelle.',
        items: [
          '**Architektur:** Diffusionsbasiertes Style-Transfer. Sampling aus einer gelernten Verteilung von Sprechstilen statt deterministischer Zuordnung von Text zu Audio.',
          '**Qualität:** Höchste MOS-Werte aller Open-Source-englischen TTS-Engines auf dem LJSpeech-Benchmark.',
          '**Am besten für:** Hörbuch-Narration, professionellen Voiceover, Podcast-Produktion.',
          '**Installation:** GitHub-Repo klonen, Anforderungen installieren (`pip install -r requirements.txt`), Modell-Checkpoints herunterladen (~500 MB).',
          '**Sprachunterstützung:** Hauptsächlich Englisch. Nicht empfohlen für Nicht-Englisch-Verwendung.',
          '**Voice-Cloning:** Nicht unterstützt. StyleTTS 2 generiert nur in trainierten Speaker-Stimmen.',
          '**VRAM:** 2–4 GB GPU. Schneller als XTTS v2 bei ~5–8× Echtzeit auf RTX 4070.',
          '**Apple Silicon:** ~6× Echtzeit auf M5 Pro (CPU). Keine Metal-Beschleunigung.',
          '**Lizenz:** MIT — vollständig kommerziell.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Zero-Shot-Voice-Cloning, vollständig offen',
        content: '**F5-TTS ist ein Flow-Matching-basiertes TTS-Modell mit Zero-Shot-Voice-Cloning — klonen Sie jede Stimme aus ~3 Sekunden Referenzaudio ohne Fine-Tuning.**',
        items: [
          '**Architektur:** Flow-Matching (ein Diffusions-Varianten-Ansatz) statt GPT-basierter Architektur wie bei XTTS v2. Typischerweise schnellere Inferenz mit vergleichbarer Qualität.',
          '**Voice-Cloning:** ~3 Sekunden Referenzaudio sind ausreichend. Kein Fine-Tuning erforderlich.',
          '**Qualität:** Vergleichbar mit XTTS v2 auf Englisch. MOS-Werte ~4,1 in Community-Evaluierungen.',
          '**Geschwindigkeit:** ~3–5× Echtzeit auf RTX 4070 — schneller als XTTS v2.',
          '**Sprachen:** Starke Unterstützung für Englisch und Chinesisch, mit wachsender Unterstützung für weitere Sprachen.',
          '**Apple Silicon:** ~2× Echtzeit auf M5 Pro (CPU). Derzeit keine Metal-Beschleunigung.',
          '**VRAM:** 3–5 GB GPU empfohlen.',
          '**Installation:** `pip install f5-tts` oder von GitHub klonen.',
          '**Lizenz:** CC-BY-NC-4.0 — nur nicht-kommerziell. Kommerzielle Nutzung erfordert eine separate Vereinbarung.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'Lizenzen & kommerzielle Nutzung — Darf ich diese TTS-Engine kommerziell nutzen?',
        content: 'Die Lizenz ist der wichtigste Einzelfaktor für den Produktionseinsatz, und sie teilt diese Engines klar in zwei Gruppen. Freizügig lizenzierte Engines (MIT, Apache 2.0) dürfen frei in einem kommerziellen Produkt ausgeliefert werden. Eingeschränkte Engines (CPML, CC-BY-NC-4.0) sind nicht-kommerziell — ihre Nutzung in einem kostenpflichtigen Produkt, SaaS, werbefinanzierten Inhalten oder Auftragsarbeit erfordert eine separate Vereinbarung. Die Tabelle unten nennt die exakte Lizenz und eine direkte Antwort auf „Darf ich das kommerziell nutzen?" für jede Engine.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Für lokales TTS in einem kommerziellen Produkt sind Piper, Bark und StyleTTS 2 (MIT), Kokoro und Tortoise (Apache 2.0) sowie das Coqui-TTS-Toolkit auf einem VITS-/Tacotron2-Backend (MPL 2.0) alle erlaubt; XTTS v2 (CPML) und F5-TTS (CC-BY-NC-4.0) sind nicht-kommerziell.' },
          { type: 'plain-terms', text: 'Die beiden beliebtesten Voice-Cloning-Modelle — XTTS v2 und F5-TTS — dürfen ohne separate Lizenz nicht kommerziell genutzt werden. Für kommerzielles Voice-Cloning sind Tortoise (Apache 2.0) oder das Coqui-Toolkit auf einem VITS-Backend (MPL 2.0) die sicheren Optionen.' },
        ],
        columns: ['Tool', 'Lizenz', 'Kommerziell erlaubt?', 'Hauptbedingung'],
        rows: [
          { 'Tool': 'Piper', 'Lizenz': 'MIT', 'Kommerziell erlaubt?': 'Ja — keine Einschränkungen', 'Hauptbedingung': 'MIT-Hinweis angeben; Lizenz je Voice-Modell prüfen' },
          { 'Tool': 'Kokoro', 'Lizenz': 'Apache 2.0', 'Kommerziell erlaubt?': 'Ja — keine Einschränkungen', 'Hauptbedingung': 'Apache 2.0-Hinweis angeben' },
          { 'Tool': 'Coqui TTS (Toolkit)', 'Lizenz': 'MPL 2.0', 'Kommerziell erlaubt?': 'Ja — mit Bedingungen', 'Hauptbedingung': 'Quelle aller Änderungen an den Toolkit-Dateien offenlegen' },
          { 'Tool': 'XTTS v2 (Modell)', 'Lizenz': 'CPML', 'Kommerziell erlaubt?': 'Nein — nicht-kommerziell', 'Hauptbedingung': 'Kommerziell braucht eine Vereinbarung; seit Coqui-Schließung (Jan. 2024) keine im Verkauf' },
          { 'Tool': 'F5-TTS', 'Lizenz': 'CC-BY-NC-4.0', 'Kommerziell erlaubt?': 'Nein — nicht-kommerziell', 'Hauptbedingung': 'NC überträgt sich auch auf Fine-Tunes (Emilia-Trainingsdaten)' },
          { 'Tool': 'Bark', 'Lizenz': 'MIT', 'Kommerziell erlaubt?': 'Ja — keine Einschränkungen', 'Hauptbedingung': 'MIT-Copyright-Hinweis angeben' },
          { 'Tool': 'StyleTTS 2', 'Lizenz': 'MIT', 'Kommerziell erlaubt?': 'Ja — keine Einschränkungen', 'Hauptbedingung': 'MIT-Copyright-Hinweis angeben' },
          { 'Tool': 'Tortoise', 'Lizenz': 'Apache 2.0', 'Kommerziell erlaubt?': 'Ja — keine Einschränkungen', 'Hauptbedingung': 'Namensnennung; Einwilligung für jede geklonte Stimme einholen' },
        ],
        callouts: [
          { type: 'note', text: 'Coqui TTS (das Toolkit, MPL 2.0) und XTTS v2 (die spezifischen Modellgewichte, CPML) sind unterschiedlich lizenziert. Sie können das Coqui-TTS-Toolkit mit VITS- oder Tacotron2-Backends unter MPL 2.0 in einem kommerziellen Produkt ausliefern. Die CPML-Beschränkung auf nicht-kommerzielle Nutzung gilt speziell für die XTTS-v2-Modellgewichte und deren Audio-Ausgaben — nicht für den Toolkit-Code.' },
          { type: 'warning', text: 'Dies ist eine sachliche Referenz, keine Rechtsberatung. Lizenzen ändern sich, und Sonderfälle (Stimm-Einwilligung, Datensatz-Bedingungen, Lizenzen einzelner Voice-Modelle) sind relevant. Lesen Sie die Lizenzdatei jeder Engine selbst und konsultieren Sie einen Anwalt, bevor Sie sich für einen kommerziellen Einsatz auf eine dieser Bedingungen verlassen.' },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'Die CPML nicht-interaktiv akzeptieren (COQUI_TOS_AGREED)',
        content: 'Wenn Sie ein XTTS-/Coqui-Modell, das von der CPML abgedeckt ist, zum ersten Mal laden, gibt die Bibliothek die Lizenzbedingungen aus und wartet, bis Sie zum Akzeptieren „y" eingeben. Diese interaktive Eingabeaufforderung blockiert in Docker-Builds, CI-Pipelines und Headless-Servern. Um die CPML nicht-interaktiv zu akzeptieren, setzen Sie die Umgebungsvariable `COQUI_TOS_AGREED` auf `1` — dies hält fest, dass Sie die Coqui Public Model License gelesen und ihr zugestimmt haben, bevor das Modell lädt. Es ändert die Lizenz nicht: Die CPML bleibt nicht-kommerziell, und das Setzen der Variable ist Ihre Zustimmung zu diesen Bedingungen, kein Verzicht darauf.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Setzen Sie die Umgebungsvariable COQUI_TOS_AGREED=1, um die Coqui Public Model License (CPML) ohne die interaktive Eingabeaufforderung in Docker, CI oder jeder Headless-Umgebung zu akzeptieren.' },
          { type: 'plain-terms', text: 'In einer Shell oder einem Dockerfile verwenden Sie `export COQUI_TOS_AGREED=1`; in Python setzen Sie `os.environ["COQUI_TOS_AGREED"] = "1"` vor dem Importieren oder Laden des Modells. In beiden Fällen lädt das Modell, ohne auf Tastatureingaben zu warten.' },
        ],
        items: [
          '**Shell / CI:** `export COQUI_TOS_AGREED=1` vor dem Ausführen Ihres Skripts.',
          '**Docker:** Fügen Sie `ENV COQUI_TOS_AGREED=1` zu Ihrem Dockerfile hinzu oder übergeben Sie `-e COQUI_TOS_AGREED=1` an `docker run`.',
          '**Python (vor dem Laden des Modells setzen):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — muss vor der Instanziierung des XTTS-Modells durch `TTS(...)` laufen.',
          '**Was es bewirkt:** Es hält die nicht-interaktive Zustimmung zur CPML fest, sodass das Laden des Modells nicht an einer `y/n`-Eingabeaufforderung blockiert. Es ist keine kommerzielle Lizenz und hebt die nicht-kommerzielle Beschränkung nicht auf.',
        ],
        codeBlock: `# 1) Shell / CI — die CPML einmal für die Session akzeptieren
export COQUI_TOS_AGREED=1

# 2) Dockerfile — Zustimmung in das Image einbacken
# ENV COQUI_TOS_AGREED=1

# 3) Python — vor der Erstellung des Modells setzen
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # muss VOR dem TTS()-Aufruf unten gesetzt sein

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Das Modell lädt nun ohne die interaktive Lizenz-Eingabeaufforderung`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'COQUI_TOS_AGREED=1 unterdrückt nur die interaktive Eingabeaufforderung — es ist Ihre Zustimmung zur CPML, die eine nicht-kommerzielle Lizenz bleibt. Es gewährt keine kommerziellen Rechte an XTTS v2.' },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Lokales TTS im Vergleich zu ElevenLabs und Cloud-TTS',
        content: 'ElevenLabs, Google Text-to-Speech und Azure Speech bleiben die Qualitätsgrenze für TTS im Jahr 2026.',
        items: [
          '**Qualitätsgrenze:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper.',
          '**Latenz:** Piper lokal (~30–50 ms erstes Audio) ist schneller als jeder ElevenLabs-API-Roundtrip (~300–500 ms).',
          '**Kosten:** ElevenLabs berechnet 5–99 €/Monat nach Tarif. Lokales TTS kostet 0 € nach einmaliger Hardware.',
          '**Voice-Cloning:** ElevenLabs Instant Voice Clone ≈ XTTS v2 Qualität. ElevenLabs Professional Voice Clone übertrifft jede lokale Engine.',
          '**Datenschutz:** Lokales TTS = keine Audiodaten werden irgendwohin gesendet. ElevenLabs = Audio wird auf deren Servern verarbeitet.',
          '**Offline-Fähigkeit:** Lokal = vollständig offline. ElevenLabs = benötigt Internet.',
          '**Wann Cloud verwenden:** Professionelle Voiceover-Produktion, kundenseitige Produkte, die höchste Qualität erfordern.',
          '**Wann lokal verwenden:** Datenschutzkritisches Audio, Embedded-Geräte, kostensensible Stapelverarbeitung, Offline-Umgebungen.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Wie Sie wählen',
        content: 'Ein Entscheidungsdiagramm von Ihrer Anforderung zur richtigen TTS-Engine:',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Voice-Cloning benötigt? → XTTS v2 (beste Qualität) oder F5-TTS (schneller, neuere Architektur) oder Coqui TTS (offene Lizenz). CPU-Geschwindigkeit benötigt? → Piper. Kreatives Audio benötigt? → Bark. Beste englische Qualität benötigt? → StyleTTS 2.' },
          { type: 'plain-terms', text: 'Voice-Cloning: XTTS v2 für Qualität, F5-TTS für Geschwindigkeit, Coqui VITS für freizügige Lizenz. CPU/Raspberry Pi: nur Piper. Podcast-Soundeffekte: Bark. Englische Hörbücher: StyleTTS 2.' },
        ],
        items: [
          '**Voice-Cloning benötigt?** → XTTS v2 (beste Qualität, CPML) oder F5-TTS (neuere Architektur, schneller, CC-BY-NC-4.0) oder Coqui VITS (gute Qualität, MPL 2.0). Kein Cloning benötigt: Piper (Geschwindigkeit) oder StyleTTS 2 (Qualität).',
          '**Nur CPU / Raspberry Pi benötigt?** → Nur Piper. Kokoro ist eine hochwertigere CPU-Alternative (Apache 2.0). Alle anderen Engines benötigen GPU.',
          '**Kreatives Audio mit Nicht-Sprach-Klängen benötigt?** → Bark. Keine andere lokale Engine erzeugt nativ Lachen, Seufzer oder Musik.',
          '**Beste englische Narrations-Qualität benötigt?** → StyleTTS 2.',
          '**Mehrsprachige Unterstützung benötigt?** → XTTS v2 (17 Sprachen), Coqui (20+), Piper (20+ Packs).',
          '**Vollständig kommerzielle MIT-Lizenz benötigt?** → Piper, Bark oder StyleTTS 2.',
          '**Sprach-Assistenten-Pipeline aufbauen?** → Piper für Niedrig-Latenz-TTS-Ausgabe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel Referenz-Audio benötige ich für Voice-Cloning mit XTTS v2?',
            a: 'XTTS v2 benötigt mindestens 3 Sekunden sauberes Referenzaudio, wobei 6+ Sekunden deutlich bessere Ergebnisse geben. Das Audio muss ein einzelner Sprecher mit minimalem Hintergrundgeräusch und ohne Musik sein. Higher-Quality-Quellmaterial erzeugt bessere Klone als komprimiertes Audio.',
          },
          {
            q: 'Kann ich Piper TTS in einem kommerziellen Produkt verwenden?',
            a: 'Ja. Piper ist unter der MIT-Lizenz lizenziert, die unbegrenzte kommerzielle Nutzung gestattet. Sie müssen die MIT-Lizenznotiz in Ihrem Produkt angeben. Die Voice-Modelle (ONNX-Dateien) können separate Lizenzen pro Voice haben.',
          },
          {
            q: 'Muss ich bei der Verwendung von lokalen TTS-Engines die DSGVO beachten?',
            a: 'Lokale TTS-Engines, die vollständig offline laufen, verursachen per Design keine DSGVO-Probleme für interne Nutzung — da keine persönlichen Daten Ihre Systeme verlassen, ist keine Datenverarbeitungsvereinbarung erforderlich. Überprüfen Sie jedoch Ihre lokale Speicherung: Wenn Ihr Orchestrator Gesprächsverlauf oder Audio-Dateien speichert, unterliegen diese Speicher den Aufbewahrungsanforderungen (DSGVO Artikel 5). Verwenden Sie kurzlebigen In-Memory-Speicher oder verschlüsselt lokalen Speicher mit angemessenen Aufbewahrungsrichtlinien.',
          },
          {
            q: 'Ist lokale TTS für den deutschen Mittelstand geeignet?',
            a: 'Ja. Für kleine und mittlere Unternehmen (KMU) bietet lokale TTS Kosten-Effizienz, Datenschutz und Compliance mit BSI-Grundschutz-Standards. Piper ist ideal für einfache Automatisierung und Customer-Service-Anwendungen. Coqui TTS oder XTTS v2 eignen sich für anspruchsvollere Voice-Cloning-Anforderungen in Finanz-, Rechts- oder Gesundheitskontexten.',
          },
          {
            q: 'Darf ich XTTS v2 kommerziell nutzen?',
            a: 'Nein, nicht ohne separate kommerzielle Vereinbarung. XTTS v2 wird unter der Coqui Public Model License (CPML) veröffentlicht, die persönliche, Forschungs- und Hobby-Nutzung des Modells und seiner Audio-Ausgaben erlaubt, aber die kommerzielle Nutzung untersagt — jedes kostenpflichtige Produkt, SaaS, werbefinanzierte Inhalte oder Auftragsarbeit. Coqui Inc wurde im Januar 2024 geschlossen, daher gibt es derzeit kein Unternehmen, das XTTS-v2-Kommerzlizenzen verkauft; behandeln Sie XTTS v2 in der Praxis als ausschließlich nicht-kommerziell. Für kommerzielles Voice-Cloning verwenden Sie Tortoise (Apache 2.0) oder das Coqui-TTS-Toolkit auf einem VITS-Backend (MPL 2.0). Dies ist eine sachliche Referenz, keine Rechtsberatung — lesen Sie die CPML selbst, bevor Sie sie einsetzen.',
          },
          {
            q: 'Wie akzeptiere ich die Coqui-CPML-Lizenz nicht-interaktiv (Docker / CI)?',
            a: 'Setzen Sie die Umgebungsvariable COQUI_TOS_AGREED auf 1. Die Coqui-/XTTS-Bibliothek gibt normalerweise die CPML aus und wartet, bis Sie „y" eingeben, was in Docker-Builds, CI und Headless-Servern blockiert. Das Setzen von COQUI_TOS_AGREED=1 hält Ihre Zustimmung fest, sodass das Modell ohne die Eingabeaufforderung lädt. Verwenden Sie `export COQUI_TOS_AGREED=1` in einer Shell oder einem CI-Schritt, `ENV COQUI_TOS_AGREED=1` in einem Dockerfile oder `os.environ["COQUI_TOS_AGREED"] = "1"` in Python vor dem TTS()-Aufruf. Es unterdrückt nur die Eingabeaufforderung — es ist Ihre Zustimmung zur CPML und gewährt keine kommerziellen Rechte.',
          },
          {
            q: 'Wie viele Stimmen und Sprachen unterstützt XTTS v2?',
            a: 'XTTS v2 hat keinen festen Katalog benannter Stimmen — es ist ein Cloning-Modell, Sie liefern also einen 6-Sekunden-Referenzclip, und es reproduziert diesen Sprecher (das Repo liefert außerdem einige eingebaute Speaker-Presets für schnelle Tests). Es generiert Sprache in 17 Sprachen: Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Polnisch, Türkisch, Russisch, Niederländisch, Tschechisch, Arabisch, Chinesisch (zh-cn), Japanisch, Ungarisch, Koreanisch und Hindi. Das Cloning ist sprachübergreifend: Klonen Sie eine Stimme einmal und generieren Sie sie in jeder der 17 Sprachen.',
          },
          {
            q: 'Kokoro vs Piper — welches Leichtgewichts-CPU-TTS sollte ich verwenden?',
            a: 'Beide laufen schnell auf der CPU ohne GPU, und beide sind freizügig lizenziert (Piper ist MIT, Kokoro ist Apache 2.0), sodass beide für die kommerzielle Nutzung sicher sind. Wählen Sie Piper, wenn Sie die niedrigste Latenz und die breiteste Sprachabdeckung benötigen (20+ Sprach-Voice-Packs, Echtzeit auf einem Raspberry Pi 5) — es ist der Standard für Embedded- und Smart-Home-Sprache. Wählen Sie Kokoro (ein 82M-Parameter-Modell auf Basis der StyleTTS-2-Architektur), wenn Sie höhere Natürlichkeit als Piper wollen und etwas mehr Rechenaufwand akzeptieren können; seine englische Qualität liegt näher an den schwereren GPU-Engines. Für einen Raspberry Pi oder einen immer-aktiven Assistenten: Piper; für ein Desktop-/Server-Vorlesen, bei dem Qualität wichtiger ist als Millisekunden: Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Piper TTS auf GitHub](https://github.com/rhasspy/piper) — Quellcode, Voice-Packs, ONNX-Modell-Downloads und Raspberry-Pi-Anleitung.',
          '[Coqui TTS auf GitHub](https://github.com/coqui-ai/TTS) — Quellcode, Modelliste, Voice-Cloning-Dokumentation und Python-API-Referenz.',
          '[XTTS v2 Dokumentation](https://docs.coqui.ai/en/latest/models/xtts.html) — XTTS v2 Modellkarte, Lizenz (CPML) und Voice-Cloning-API.',
          '[F5-TTS auf GitHub](https://github.com/SWivid/F5-TTS) — Flow-Matching-TTS mit Zero-Shot-Voice-Cloning, Installationsanleitung und mehrsprachiger Unterstützung.',
          '[Tortoise TTS auf GitHub](https://github.com/neonbjb/tortoise-tts) — Hochwertiges Multi-Voice-TTS mit Voice-Cloning, Apache 2.0-Lizenz. Sehr langsam, aber kommerziell-freundlich.',
          '[XTTS-v2 LICENSE.txt (CPML) auf Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Vollständiger Text der Coqui Public Model License, die XTTS v2 regelt.',
        ],
      },
      countrySpecific: {
        id: 'country-specific-de',
        title: 'TTS in Deutschland: DSGVO-konforme Sprachsynthese und deutsche Modelle',
        content: [
          'Deutschland hat mit 9,09% die höchste CTR aller lokalisierten Pfade auf dieser Seite — ein klares Signal, dass der deutschsprachige Markt nach offline-fähigen TTS-Lösungen sucht. Der Grund liegt in der DSGVO: Sprachsynthese für Kundenservice, Barrierefreiheit oder Content-Produktion darf keine Audio-Rohdaten an externe Server übermitteln.',
          'Piper TTS bietet vollständige DSGVO-Compliance durch vollständige Offline-Verarbeitung. BSI Grundschutz-konforme Implementierungen sind mit lokalem TTS deutlich einfacher dokumentierbar als mit Cloud-APIs wie ElevenLabs oder Azure Speech.',
        ],
        items: [
          '**Piper DE-Modelle:** Piper enthält mehrere deutsche Stimmen (de_DE-thorsten-low, de_DE-thorsten-medium, de_DE-eva_k-x_low). Thorsten-medium bietet das beste Verhältnis aus Natürlichkeit und Latenz auf Standard-Hardware (Intel Core i7, kein GPU nötig).',
          '**XTTS v2 für Deutsch:** Coqui XTTS v2 unterstützt Deutsch mit Zero-Shot Voice Cloning. Besonders nützlich für Audiobook-Produktion und barrierefreie Dokumente. GPU-Anforderung: mindestens 6 GB VRAM (RTX 3060 oder besser).',
          '**DSGVO-Implementierungshinweis:** Bei der Verarbeitung von Stimmdaten (Voice Cloning) gelten biometrische Datenschutzanforderungen nach DSGVO Art. 9. Reine Textsynthese (kein Cloning) ist datenschutzrechtlich unkritisch, sofern kein Personenbezug im Text besteht.',
          '**NHK-Äquivalent für DE:** ARD und ZDF veröffentlichen keine Stimmdaten für TTS. Für professionelle deutsche Stimmen: Thorsten-Voice-Projekt (GitHub, Open Source, CC BY 4.0) als Community-Alternative zu proprietären Stimmpaketen.',
          '**Österreich und Schweiz:** Standarddeutsch-Modelle funktionieren für beide Länder. Dialekte (Österreichisch, Schweizerdeutsch) werden von aktuellen Piper/XTTS-Modellen nicht unterstützt — Hochdeutsch-Ausgabe ist der Standardfall.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Vollständig offlinetem Sprach-Assistenten bauen 2026](/de/power-local-llm/build-local-voice-assistant-2026) — Verwenden Sie Piper oder Coqui TTS als Ausgabeschicht einer vollständigen Whisper + LLM + TTS-Pipeline.',
          '[Lokale Sprache-zu-Text 2026: Whisper.cpp vs faster-whisper](/de/power-local-llm/local-whisper-stt-comparison-2026) — Die Eingabeseite einer Sprach-Pipeline.',
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — TTS als Sprach-Ausgabeschicht eines vollständigen multimodalen Stacks integrieren.',
          '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm) — GPU-Auswahl für den Betrieb von XTTS v2, F5-TTS, Bark oder StyleTTS 2.',
          '[Beste KI-Sprachsynthese für Content-Creator](/de/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local: Sprachqualität und Latenzvergleich.',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Licences TTS local et clonage vocal 2026 : quels moteurs autorisent l\'usage commercial (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: 'Licences TTS local 2026 : usage commercial',
    intro:
      'Peut-on utiliser un moteur de synthèse vocale locale dans un produit commercial ? Tout dépend de la licence, et les licences diffèrent fortement. Piper, Bark et StyleTTS 2 sont publiés sous MIT, Kokoro et Tortoise sous Apache 2.0 — les quatre sont libres pour l\'usage commercial. Le toolkit Coqui TTS est sous MPL 2.0 (commercial sous conditions). Mais les deux modèles de clonage vocal les plus populaires sont restreints : XTTS v2 utilise la Coqui Public Model License (CPML, non commerciale) et F5-TTS utilise CC-BY-NC-4.0 (non commerciale). Ce guide donne la licence exacte de chaque moteur, une réponse claire « puis-je l\'utiliser commercialement ? » par moteur, la variable d\'environnement COQUI_TOS_AGREED pour accepter la CPML de manière non interactive dans Docker et CI, et une comparaison directe sur la qualité, la vitesse, la VRAM et le clonage vocal — afin de choisir le bon moteur sans envoyer d\'audio dans le cloud et sans mauvaise surprise de licence en production. (Licences vérifiées en juin 2026 ; ceci est une référence factuelle, pas un conseil juridique — lisez chaque licence vous-même avant tout usage commercial.)',
    metaDescription:
      'Quels moteurs TTS locaux autorisent l\'usage commercial ? Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC), Coqui (MPL 2.0) — plus la variable COQUI_TOS_AGREED. Guide 2026.',
    twitterDescription:
      'Licences TTS local 2026 : quels moteurs de clonage vocal autorisent l\'usage commercial ? Piper/Bark/StyleTTS 2 (MIT), Kokoro/Tortoise (Apache 2.0), XTTS v2 (CPML non commerciale), F5-TTS (CC-BY-NC). Plus la variable COQUI_TOS_AGREED. Tout hors ligne.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper est le meilleur choix pour la vitesse et les applications embarquées.** Il s\'exécute entièrement sur CPU, produit la parole en temps réel sur un Raspberry Pi 5 et supporte 20+ langues via des packs de voix téléchargeables. Pas de GPU, pas de complexité Python, licence MIT.',
          '**XTTS v2 est la meilleure option de clonage vocal local en 2026 — mais elle est non commerciale.** Donnez-lui 6 secondes d\'audio de référence et il clone la voix dans 17 langues (4–6 GB de VRAM GPU). La licence CPML est non commerciale, et depuis la fermeture de Coqui (janvier 2024) aucune licence commerciale n\'est en vente — considérez XTTS v2 comme non commercial uniquement. Acceptez la CPML de manière non interactive dans Docker/CI avec `COQUI_TOS_AGREED=1`.',
          '**F5-TTS est l\'alternative en pleine croissance pour le clonage vocal zéro-shot.** Il utilise une architecture flow-matching au lieu de GPT, clone une voix à partir de ~3 secondes d\'audio de référence et atteint une qualité comparable à XTTS v2 avec une inférence plus rapide. Licence : CC-BY-NC-4.0 (non commerciale).',
          '**Coqui TTS est le toolkit TTS open-source le plus flexible.** Il supporte plusieurs backends (Tacotron2, VITS, XTTS), le clonage vocal et 20+ langues sous licence MPL 2.0. Remarque : l\'entreprise Coqui a fermé en janvier 2024 ; le projet est maintenant maintenu par la communauté.',
          '**Bark est le seul TTS local qui génère de l\'audio non-vocal.** Il peut produire du rire, de la toux, des soupirs, des extraits musicaux et des bruits ambiants aux côtés de la parole — utile pour l\'audio créatif, la production de podcasts et la fiction interactive. Ses sorties sont lentes et non déterministes.',
          '**StyleTTS 2 atteint les scores MOS (Mean Opinion Score) les plus élevés de tous les moteurs TTS anglais open-source.** Son transfert de style basé sur la diffusion produit une naturalité quasi-humaine pour la narration en anglais. Anglais uniquement et sans clonage vocal.',
          '**La licence décide de l\'usage commercial — et la répartition est nette.** Libres pour les produits commerciaux : Piper, Bark, StyleTTS 2 (MIT) et Kokoro, Tortoise (Apache 2.0). Commercial sous conditions : toolkit Coqui TTS (MPL 2.0, divulguer les modifications du toolkit). Non commercial uniquement : XTTS v2 (CPML) et F5-TTS (CC-BY-NC-4.0) — les deux nécessitent un accord séparé. Pour le clonage vocal commercial, utilisez Tortoise (Apache 2.0) ou le toolkit Coqui sur un backend VITS (MPL 2.0). Référence factuelle, pas un conseil juridique.',
          '**Aucun ne correspond à la qualité TTS commerciale à grande échelle.** ElevenLabs, Google Text-to-Speech et Azure TTS surpassent toujours les moteurs locaux en cohérence, naturalité et latence. Le TTS local est le bon choix quand la confidentialité, le coût ou l\'opération hors ligne importent plus que la qualité absolue.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Points clés',
        items: [
          '**TTS local le plus rapide :** Piper — temps réel sur Raspberry Pi 5, ~10× plus rapide que le temps réel sur CPU de bureau moderne.',
          '**Meilleure qualité de clonage vocal :** XTTS v2 — 6 secondes d\'audio de référence, clonage multilingue en 17 langues.',
          '**Clonage vocal zéro-shot le plus rapide (nouvelle architecture) :** F5-TTS — ~3 secondes d\'audio, flow-matching, ~3–5× temps réel sur RTX 4070.',
          '**Toolkit open-source le plus flexible :** Coqui TTS — supporte les backends VITS, Tacotron2, XTTS, 20+ modèles de langues.',
          '**Seul audio génératif (sons non vocaux) :** Bark — rires, soupirs, musique, ambiance. Le plus lent de tous.',
          '**Meilleure qualité de narration anglaise :** StyleTTS 2 — transfert de style basé sur la diffusion, MOS quasi-humain sur le benchmark LJSpeech.',
          '**Libres pour l\'usage commercial :** Piper, Bark, StyleTTS 2 (MIT) ; Kokoro, Tortoise (Apache 2.0) ; toolkit Coqui TTS (MPL 2.0, sous conditions). **Non commercial :** XTTS v2 (CPML), F5-TTS (CC-BY-NC-4.0).',
          '**Voix et langues XTTS v2 :** pas de liste de voix fixe — vous fournissez un extrait de référence de 6 secondes et il clone cette voix. Des préréglages de locuteurs intégrés sont livrés avec le modèle, et il génère dans 17 langues : en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**VRAM XTTS v2 :** ~2 Go de poids de modèle ; 4 Go minimum pour fonctionner, 4–6 Go recommandés pour une inférence en temps réel.',
          '**Accepter la CPML en CI/Docker :** `export COQUI_TOS_AGREED=1` — pas d\'invite interactive nécessaire.',
          '**Exigences VRAM :** Piper : CPU uniquement. Kokoro : CPU / 1–2 Go. StyleTTS 2 : 2–4 Go. Coqui VITS : 2–4 Go. F5-TTS : 3–5 Go. XTTS v2 : 4–6 Go. Bark : 4–8 Go. Tortoise : 4–8 Go.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'Pourquoi le TTS local est important',
        content: 'Les services TTS cloud (ElevenLabs, Google TTS, Amazon Polly, Azure Speech) sont pratiques, mais ils impliquent une facturation par caractère, des politiques de rétention des données audio et une latence due aux allers-retours réseau. Le TTS local élimine ces trois inconvénients.',
        items: [
          '**Confidentialité :** Votre contenu textuel ne quitte jamais votre machine. Essentiel pour la dictée médicale, les résumés juridiques, la narration de journaux privés ou la lecture à voix haute de documents confidentiels.',
          '**Coût :** Le TTS cloud est typiquement facturé 4–30 € par million de caractères. Un développeur générant 10 millions de caractères par mois économise 40–300 €/mois avec une configuration locale unique.',
          '**Latence :** Pas d\'aller-retour réseau. Piper génère le premier token audio en moins de 50 ms sur CPU — plus rapide que tout aller-retour TTS cloud.',
          '**Personnalisation :** Le clonage vocal (XTTS v2, F5-TTS, Coqui) permet de créer une voix personnalisée à partir de quelques secondes d\'audio. Les fournisseurs cloud facturent 10 €+/mois par voix clonée.',
          '**Fonctionnement hors ligne :** Fonctionne dans les avions, dans les installations sécurisées, dans les zones éloignées sans internet. Interface vocale embarquée pour bornes et appareils.',
          '**Maison connectée :** Piper est la couche TTS de référence pour les interfaces vocales locales toujours actives — temps réel sur Raspberry Pi, sans GPU. Pour un assistant vocal hors ligne intégré dans Home Assistant, voir [assistant vocal local pour smart home →](/fr/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau de comparaison',
        content: 'Tous les moteurs TTS locaux comparés selon les métriques les plus importantes pour le déploiement en production.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Piper est le plus rapide sur CPU ; XTTS v2 offre la meilleure qualité de clonage vocal ; F5-TTS fournit un clonage zéro-shot avec une architecture plus récente ; Bark est le seul moteur produisant des rires et de la musique ; StyleTTS 2 a la meilleure naturalité de narration anglaise.' },
          { type: 'plain-terms', text: 'Pour la plupart des besoins TTS hors ligne : Piper pour la vitesse et la simplicité, Coqui pour le clonage vocal avec une licence permissive, XTTS v2 pour la meilleure qualité de clonage avec GPU, F5-TTS pour une architecture plus récente avec un clonage zéro-shot plus rapide.' },
        ],
        note: 'MOS (Mean Opinion Score) sur une échelle de 1 à 5 où 5 est indiscernable de la parole humaine. Les scores sont approximatifs et basés sur des benchmarks publiés ou des évaluations communautaires. Le MOS varie significativement selon la phrase de test et le groupe d\'auditeurs. MOS de référence humaine : ~4,5.',
        columns: ['Outil', 'Qualité', 'Vitesse', 'Clonage vocal', 'Multilingue', 'VRAM', 'Licence', 'MOS (anglais)'],
        rows: [
          { 'Outil': 'Piper', 'Qualité': 'Bon', 'Vitesse': 'Très rapide (CPU)', 'Clonage vocal': 'Non', 'Multilingue': 'Oui (20+ langues)', 'VRAM': 'CPU uniquement', 'Licence': 'MIT', 'MOS (anglais)': '~3,5' },
          { 'Outil': 'Kokoro', 'Qualité': 'Très bon', 'Vitesse': 'Rapide (CPU)', 'Clonage vocal': 'Non', 'Multilingue': 'Anglais + en expansion', 'VRAM': 'CPU / 1–2 Go', 'Licence': 'Apache 2.0', 'MOS (anglais)': '~4,0' },
          { 'Outil': 'Coqui TTS', 'Qualité': 'Très bon', 'Vitesse': 'Moyen', 'Clonage vocal': 'Oui', 'Multilingue': 'Oui (20+ langues)', 'VRAM': '2–4 Go', 'Licence': 'MPL 2.0', 'MOS (anglais)': '~3,8' },
          { 'Outil': 'XTTS v2', 'Qualité': 'Excellent', 'Vitesse': 'Lent', 'Clonage vocal': 'Oui (meilleur)', 'Multilingue': 'Oui (17 langues)', 'VRAM': '4–6 Go', 'Licence': 'CPML (non commercial)', 'MOS (anglais)': '~4,1' },
          { 'Outil': 'F5-TTS', 'Qualité': 'Excellent', 'Vitesse': 'Moyen-rapide', 'Clonage vocal': 'Oui (zéro-shot)', 'Multilingue': 'Oui (multilingue)', 'VRAM': '3–5 Go', 'Licence': 'CC-BY-NC-4.0', 'MOS (anglais)': '~4,1' },
          { 'Outil': 'Bark', 'Qualité': 'Unique / variable', 'Vitesse': 'Lent', 'Clonage vocal': 'Limité', 'Multilingue': 'Oui (multilingue)', 'VRAM': '4–8 Go', 'Licence': 'MIT', 'MOS (anglais)': '~3,2–4,0 (variable)' },
          { 'Outil': 'StyleTTS 2', 'Qualité': 'Excellent (anglais)', 'Vitesse': 'Moyen', 'Clonage vocal': 'Non', 'Multilingue': 'Anglais principalement', 'VRAM': '2–4 Go', 'Licence': 'MIT', 'MOS (anglais)': '~4,3' },
          { 'Outil': 'Tortoise', 'Qualité': 'Excellent', 'Vitesse': 'Très lent (minutes/phrase)', 'Clonage vocal': 'Oui', 'Multilingue': 'Anglais principalement', 'VRAM': '4–8 Go', 'Licence': 'Apache 2.0', 'MOS (anglais)': '~4,2' },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'Comparaison de latence du premier audio',
        content: 'La latence du premier audio est le temps entre l\'entrée du texte et la première sortie audible. Critique pour les assistants vocaux et les applications interactives. Pour le traitement par lots (livres audio, production de podcasts), le débit total est plus important que la latence du premier audio.',
        columns: ['Moteur', 'Premier audio (RTX 4070)', 'Premier audio (CPU)', 'Premier audio (M5 Pro)'],
        rows: [
          { 'Moteur': 'Piper', 'Premier audio (RTX 4070)': '~30 ms', 'Premier audio (CPU)': '~50 ms', 'Premier audio (M5 Pro)': '~40 ms' },
          { 'Moteur': 'Kokoro', 'Premier audio (RTX 4070)': '~50 ms', 'Premier audio (CPU)': '~80 ms', 'Premier audio (M5 Pro)': '~60 ms' },
          { 'Moteur': 'Coqui VITS', 'Premier audio (RTX 4070)': '~100 ms', 'Premier audio (CPU)': '~300 ms', 'Premier audio (M5 Pro)': '~150 ms' },
          { 'Moteur': 'StyleTTS 2', 'Premier audio (RTX 4070)': '~150 ms', 'Premier audio (CPU)': '~500 ms', 'Premier audio (M5 Pro)': '~200 ms' },
          { 'Moteur': 'F5-TTS', 'Premier audio (RTX 4070)': '~200 ms', 'Premier audio (CPU)': '~800 ms', 'Premier audio (M5 Pro)': '~300 ms' },
          { 'Moteur': 'XTTS v2', 'Premier audio (RTX 4070)': '~300 ms', 'Premier audio (CPU)': '~1500 ms', 'Premier audio (M5 Pro)': '~500 ms' },
          { 'Moteur': 'Bark', 'Premier audio (RTX 4070)': '~500 ms', 'Premier audio (CPU)': '~3000 ms', 'Premier audio (M5 Pro)': '~800 ms' },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — Option légère la plus rapide',
        content: '**Piper est un système de synthèse vocale locale rapide développé par Rhasspy pour la domotique et les usages embarqués.** Il utilise une architecture neuronale basée sur VITS entraînée sur des ensembles de données vocales avec un backend onnxruntime — optimisé pour fonctionner en temps réel sur un Raspberry Pi 4 ou 5 sans GPU.',
        items: [
          '**Architecture :** TTS neuronal VITS avec inférence ONNX. Conçu pour les ordinateurs monocarte et Linux embarqué.',
          '**Installation :** `pip install piper-tts`. Des packs de voix pré-entraînés sont disponibles dans le dépôt Piper voices sur Hugging Face.',
          '**Utilisation :** `echo "Bonjour, monde" | piper --model fr_FR-upmc-medium.onnx --output_file sortie.wav`',
          '**Packs de voix :** 20+ langues, plusieurs options de voix par langue. Chaque pack de voix est un fichier modèle ONNX de 20–200 Mo.',
          '**Vitesse :** ~10× plus rapide que le temps réel sur un CPU de bureau moderne. Temps réel sur Raspberry Pi 5. Latence du premier audio inférieure à 50 ms.',
          '**Apple Silicon :** ~15× temps réel sur M5 Pro (CPU, ARM NEON). Fonctionne nativement sans GPU — excellente performance sur Mac.',
          '**Écouter des exemples :** [Échantillons vocaux Piper](https://rhasspy.github.io/piper-samples/)',
          '**Idéal pour :** Assistants domestiques, bornes interactives, interface vocale embarquée, lecture à voix haute sensible à la confidentialité sans GPU disponible.',
          '**Limitation :** Pas de clonage vocal. La qualité est « bonne » — naturelle mais clairement synthétique par rapport à XTTS v2 ou StyleTTS 2.',
          '**Licence :** MIT — entièrement commercial, aucune restriction.',
          '**Kokoro TTS — alternative à Piper :** Kokoro TTS est une alternative émergente à Piper dans la catégorie légère. Il atteint une plus grande naturalité que Piper tout en restant rapide sur CPU. Licencié sous Apache 2.0. Si la qualité de Piper ne répond pas à vos besoins mais que vous ne pouvez pas vous permettre la VRAM GPU, [Kokoro](https://github.com/hexgrad/kokoro) vaut la peine d\'être testé.',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — Meilleur toolkit open-source polyvalent',
        content: '**Coqui TTS est un toolkit Python pour la synthèse vocale supportant plusieurs architectures de modèles et le clonage vocal.** Il a été développé par la société Coqui (qui a fermé en janvier 2024) et est maintenant maintenu par la communauté open-source. Le toolkit supporte les backends Tacotron2, VITS et XTTS.',
        items: [
          '**Installation :** `pip install TTS`. Les modèles se téléchargent automatiquement à la première utilisation.',
          '**Clonage vocal :** Fournissez 6+ secondes d\'audio de référence. `tts --text "Bonjour" --model_name tts_models/fr/css10/vits --speaker_wav exemple.wav --out_path sortie.wav`',
          '**Options de backend :** VITS (le plus rapide, bonne qualité), Tacotron2 (plus ancien, plus lent), XTTS (meilleure qualité, voir section XTTS v2).',
          '**Langues :** 20+ modèles de langues disponibles via `tts --list_models`.',
          '**VRAM :** 2–4 Go pour le backend VITS ; 4–6 Go pour le backend XTTS.',
          '**Apple Silicon :** ~8× temps réel sur M5 Pro (CPU). Pas d\'accélération Metal GPU. Utilisable pour la génération par lots.',
          '**Statut communautaire :** Coqui Inc a fermé en janvier 2024. Le dépôt open-source (`coqui-ai/TTS`) est maintenu par la communauté. Pas de support commercial actif.',
          '**Licence :** MPL 2.0 — utilisation commerciale autorisée, mais le code source des modifications doit être divulgué.',
          '**Idéal pour :** Les développeurs qui veulent le clonage vocal avec un toolkit open-source et une licence permissive.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — Meilleure qualité de clonage vocal',
        content: '**XTTS v2 (par Coqui) est le moteur de clonage vocal de la plus haute qualité disponible localement en 2026.** Il utilise une architecture basée sur GPT avec transfert multilingue — clonez une voix en anglais et parlez-la en espagnol, allemand, français ou 14 autres langues à partir des mêmes 6 secondes d\'audio.',
        items: [
          '**Architecture :** TTS basé sur GPT avec conditionnement de locuteur. Vision-transformer pour la modélisation de la prosodie.',
          '**Clonage vocal :** 6 secondes d\'audio de référence suffisent pour un clone vocal convaincant. 3 secondes produisent une qualité passable.',
          '**Clonage multilingue :** Clonez la voix dans une langue, générez la parole dans 17 langues différentes avec les mêmes caractéristiques vocales.',
          '**Langues (17) :** anglais, espagnol, français, allemand, italien, portugais, polonais, turc, russe, néerlandais, tchèque, arabe, chinois (zh-cn), japonais, hongrois, coréen et hindi. Le coréen et le hindi ont été ajoutés dans XTTS v2.0.3.',
          '**« Voix XTTS v2 » :** il n\'y a pas de catalogue fixe de voix nommées. XTTS v2 est un modèle de clonage — vous fournissez un extrait de référence de 6 secondes et il reproduit ce locuteur. Le dépôt livre quelques préréglages de locuteurs intégrés pour des tests rapides, mais le workflow prévu est de fournir votre propre `speaker_wav`.',
          '**VRAM :** les poids du modèle font ~2 Go. 4 Go de VRAM est le minimum pratique ; 4–6 Go sont recommandés pour une inférence en temps réel. Fonctionne sur CPU mais ~5–10× plus lent.',
          '**Vitesse :** Lent — génère ~2× temps réel sur un RTX 4070. Pas adapté aux pipelines d\'assistant vocal en temps réel.',
          '**Apple Silicon :** ~3× temps réel sur M5 Pro (CPU, pas d\'accélération Metal). Utilisable pour la génération audio par lots, pas pour la sortie d\'assistant vocal en temps réel.',
          '**Licence :** CPML (Coqui Public Model License) — non commerciale. La CPML autorise l\'usage personnel, de recherche et de loisir du modèle **et de ses sorties audio**, mais interdit l\'usage commercial (tout produit payant, SaaS, contenu financé par la publicité ou travail client) sans accord commercial séparé. Coqui Inc a fermé en janvier 2024, donc aucune entité ne vend actuellement de licences commerciales XTTS v2 — en pratique, considérez XTTS v2 comme non commercial uniquement. Voir la section [acceptation non interactive de la CPML](#cpml-noninteractive) pour la variable d\'environnement `COQUI_TOS_AGREED`.',
        ],
        codeBlock: `from TTS.api import TTS\n\n# Load XTTS v2 model\ntts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")\n\n# Clone voice from 6-second reference audio and synthesize in any of 17 languages\ntts.tts_to_file(\n    text="Bonjour, je suis votre assistant vocal.",\n    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker\n    language="fr",                        # Output in French using the cloned voice\n    file_path="output.wav"\n)`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'XTTS v2 est couvert par la licence CPML (non commerciale). L\'usage commercial — produits, SaaS, services ou travail client payant — nécessite un accord commercial séparé, et depuis la fermeture de Coqui Inc en janvier 2024 aucun tel accord n\'est actuellement disponible à l\'achat. Si vous avez besoin de clonage vocal commercial, utilisez Tortoise (Apache 2.0) ou le toolkit Coqui TTS sur un backend VITS (MPL 2.0). Ceci est une référence factuelle, pas un conseil juridique — lisez la CPML vous-même avant de déployer.' },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — Audio génératif au-delà de la parole',
        content: '**Bark (par Suno AI) est un modèle génératif texte-vers-audio qui produit de la parole, de la musique, des rires, des toussotements, des soupirs et des sons ambiants à partir de prompts textuels.** Ce n\'est pas un moteur TTS traditionnel — c\'est un modèle génératif qui interprète les prompts textuels comme des instructions de génération audio.',
        items: [
          '**Capacité unique :** Incluez `[laughs]`, `[sighs]`, `[clears throat]`, `[music]` ou `[sound effect: wind]` dans votre texte et Bark génère ces sons aux côtés de la parole.',
          '**Pas contrôlable comme un TTS traditionnel :** La sortie varie entre les exécutions pour la même entrée. La qualité est inconsistante — certaines sorties sont excellentes, d\'autres ont des artefacts ou des segments incompréhensibles.',
          '**Vitesse :** Lent — 2–4× plus lent que le temps réel même sur un RTX 4090. Pas adapté aux applications interactives.',
          '**Apple Silicon :** ~1,5× temps réel sur M5 Pro (CPU, MPS partiel). Le support MPS (Metal Performance Shaders) est partiel — la plupart des inférences retombent toujours sur CPU.',
          '**Idéal pour :** Audio créatif, production de podcasts avec effets sonores, fiction interactive, applications vocales expérimentales.',
          '**VRAM :** 4–8 Go GPU. Fonctionne sur CPU avec une qualité significativement inférieure.',
          '**Installation :** `pip install suno-bark`. Les modèles se téléchargent à la première exécution (~2 Go).',
          '**Licence :** MIT — entièrement commercial.',
          '**Limitation :** Pas de clonage vocal fiable. Les « préréglages de voix » fournis avec Bark sont approximatifs — pas un vrai système de clonage vocal.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — Qualité naturelle la plus élevée',
        content: '**StyleTTS 2 est un modèle TTS basé sur la diffusion qui atteint des scores MOS (Mean Opinion Score) quasi-humains sur le benchmark LJSpeech.** Il transfère le style d\'élocution par diffusion — générant une parole plus naturelle et expressive que les modèles basés sur VITS.',
        items: [
          '**Architecture :** Transfert de style basé sur la diffusion. Échantillonnage à partir d\'une distribution apprise de styles d\'élocution plutôt que d\'un mappage déterministe du texte vers l\'audio.',
          '**Qualité :** Scores MOS les plus élevés de tout moteur TTS anglais open-source sur le benchmark LJSpeech.',
          '**Idéal pour :** Narration de livres audio, voix professionnelle, production de podcasts.',
          '**Installation :** Clonez le dépôt GitHub, installez les prérequis (`pip install -r requirements.txt`), téléchargez les points de contrôle du modèle (~500 Mo).',
          '**Support linguistique :** Principalement l\'anglais. Non recommandé pour une utilisation non-anglophone.',
          '**Clonage vocal :** Non supporté. StyleTTS 2 génère uniquement dans des voix de locuteurs entraînées.',
          '**VRAM :** 2–4 Go GPU. Plus rapide que XTTS v2 à ~5–8× temps réel sur RTX 4070.',
          '**Apple Silicon :** ~6× temps réel sur M5 Pro (CPU). Pas d\'accélération Metal.',
          '**Licence :** MIT — entièrement commercial.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Clonage vocal zéro-shot, entièrement ouvert',
        content: '**F5-TTS est un modèle TTS basé sur le flow-matching avec clonage vocal zéro-shot — clonez n\'importe quelle voix à partir de ~3 secondes d\'audio de référence sans fine-tuning.**',
        items: [
          '**Architecture :** Flow-matching (une approche variante de la diffusion) plutôt que l\'architecture GPT utilisée par XTTS v2. Inférence typiquement plus rapide avec une qualité compétitive.',
          '**Clonage vocal :** ~3 secondes d\'audio de référence suffisent. Pas de fine-tuning requis.',
          '**Qualité :** Compétitive avec XTTS v2 en anglais. Scores MOS ~4,1 dans les évaluations communautaires.',
          '**Vitesse :** ~3–5× temps réel sur RTX 4070 — plus rapide que XTTS v2.',
          '**Langues :** Fort support pour l\'anglais et le chinois, avec un support en expansion pour d\'autres langues.',
          '**Apple Silicon :** ~2× temps réel sur M5 Pro (CPU). Pas d\'accélération Metal actuellement.',
          '**VRAM :** 3–5 Go GPU recommandé.',
          '**Installation :** `pip install f5-tts` ou cloner depuis GitHub.',
          '**Licence :** CC-BY-NC-4.0 — usage non-commercial uniquement. L\'utilisation commerciale nécessite un accord séparé.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'Licences et usage commercial — puis-je utiliser ce moteur TTS commercialement ?',
        content: 'La licence est le facteur le plus important pour l\'usage en production, et elle répartit nettement ces moteurs en deux groupes. Les moteurs sous licence permissive (MIT, Apache 2.0) sont libres d\'être intégrés dans un produit commercial. Les moteurs restreints (CPML, CC-BY-NC-4.0) sont non commerciaux — les utiliser dans un produit payant, un SaaS, du contenu financé par la publicité ou du travail client nécessite un accord séparé. Le tableau ci-dessous donne la licence exacte et une réponse directe « puis-je l\'utiliser commercialement ? » pour chaque moteur.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Pour un TTS local dans un produit commercial, Piper, Bark et StyleTTS 2 (MIT), Kokoro et Tortoise (Apache 2.0), et le toolkit Coqui TTS sur un backend VITS/Tacotron2 (MPL 2.0) sont tous autorisés ; XTTS v2 (CPML) et F5-TTS (CC-BY-NC-4.0) sont non commerciaux.' },
          { type: 'plain-terms', text: 'Les deux modèles de clonage vocal les plus populaires — XTTS v2 et F5-TTS — ne peuvent pas être utilisés commercialement sans licence séparée. Pour le clonage vocal commercial, Tortoise (Apache 2.0) ou le toolkit Coqui sur un backend VITS (MPL 2.0) sont les choix sûrs.' },
        ],
        columns: ['Outil', 'Licence', 'Commercial autorisé?', 'Condition principale'],
        rows: [
          { 'Outil': 'Piper', 'Licence': 'MIT', 'Commercial autorisé?': 'Oui — aucune restriction', 'Condition principale': 'Inclure la notice MIT ; vérifier la licence du modèle par voix' },
          { 'Outil': 'Kokoro', 'Licence': 'Apache 2.0', 'Commercial autorisé?': 'Oui — aucune restriction', 'Condition principale': 'Inclure la notice Apache 2.0' },
          { 'Outil': 'Coqui TTS (toolkit)', 'Licence': 'MPL 2.0', 'Commercial autorisé?': 'Oui — avec conditions', 'Condition principale': 'Divulguer la source de toute modification des fichiers du toolkit' },
          { 'Outil': 'XTTS v2 (modèle)', 'Licence': 'CPML', 'Commercial autorisé?': 'Non — non commercial', 'Condition principale': 'Le commercial nécessite un accord ; aucun en vente depuis la fermeture de Coqui (janvier 2024)' },
          { 'Outil': 'F5-TTS', 'Licence': 'CC-BY-NC-4.0', 'Commercial autorisé?': 'Non — non commercial', 'Condition principale': 'Le NC se reporte même aux fine-tunes (données d\'entraînement Emilia)' },
          { 'Outil': 'Bark', 'Licence': 'MIT', 'Commercial autorisé?': 'Oui — aucune restriction', 'Condition principale': 'Inclure la notice de copyright MIT' },
          { 'Outil': 'StyleTTS 2', 'Licence': 'MIT', 'Commercial autorisé?': 'Oui — aucune restriction', 'Condition principale': 'Inclure la notice de copyright MIT' },
          { 'Outil': 'Tortoise', 'Licence': 'Apache 2.0', 'Commercial autorisé?': 'Oui — aucune restriction', 'Condition principale': 'Attribution ; obtenir le consentement pour toute voix clonée' },
        ],
        callouts: [
          { type: 'note', text: 'Coqui TTS (le toolkit, MPL 2.0) et XTTS v2 (les poids de modèle spécifiques, CPML) ont des licences différentes. Vous pouvez intégrer le toolkit Coqui TTS avec les backends VITS ou Tacotron2 dans un produit commercial sous MPL 2.0. La restriction non commerciale CPML s\'applique spécifiquement aux poids du modèle XTTS v2 et à leurs sorties audio — pas au code du toolkit.' },
          { type: 'warning', text: 'Ceci est une référence factuelle, pas un conseil juridique. Les licences changent et les cas limites (consentement vocal, conditions des jeux de données, licences de modèle par voix) comptent. Lisez vous-même le fichier de licence de chaque moteur, et consultez un juriste, avant de vous appuyer sur ces conditions pour un déploiement commercial.' },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'Accepter la CPML de manière non interactive (COQUI_TOS_AGREED)',
        content: 'La première fois que vous chargez un modèle XTTS / Coqui couvert par la CPML, la bibliothèque affiche les conditions de licence et attend que vous tapiez « y » pour accepter. Cette invite interactive bloque les builds Docker, les pipelines CI et les serveurs sans interface. Pour accepter la CPML de manière non interactive, définissez la variable d\'environnement `COQUI_TOS_AGREED` à `1` — cela enregistre que vous avez lu et accepté la Coqui Public Model License avant le chargement du modèle. Cela ne change pas la licence : la CPML reste non commerciale, et définir la variable constitue votre accord à ces conditions, pas une renonciation à celles-ci.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Définissez la variable d\'environnement COQUI_TOS_AGREED=1 pour accepter la Coqui Public Model License (CPML) sans l\'invite interactive dans Docker, CI ou tout environnement sans interface.' },
          { type: 'plain-terms', text: 'Dans un shell ou un Dockerfile, utilisez `export COQUI_TOS_AGREED=1` ; en Python, définissez `os.environ["COQUI_TOS_AGREED"] = "1"` avant d\'importer ou de charger le modèle. Dans les deux cas, le modèle se charge sans attendre de saisie clavier.' },
        ],
        items: [
          '**Shell / CI :** `export COQUI_TOS_AGREED=1` avant d\'exécuter votre script.',
          '**Docker :** ajoutez `ENV COQUI_TOS_AGREED=1` à votre Dockerfile, ou passez `-e COQUI_TOS_AGREED=1` à `docker run`.',
          '**Python (à définir avant le chargement du modèle) :** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — doit s\'exécuter avant que `TTS(...)` n\'instancie le modèle XTTS.',
          '**Ce que cela fait :** enregistre l\'acceptation non interactive de la CPML afin que le chargement du modèle ne bloque pas sur une invite `y/n`. Ce n\'est pas une licence commerciale et cela ne supprime pas la restriction non commerciale.',
        ],
        codeBlock: `# 1) Shell / CI — accepter la CPML une fois pour la session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — intégrer l'acceptation dans l'image
# ENV COQUI_TOS_AGREED=1

# 3) Python — la définir avant la création du modèle
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # doit être défini AVANT l'appel TTS() ci-dessous

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Le modèle se charge maintenant sans l'invite de licence interactive`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'COQUI_TOS_AGREED=1 ne fait que supprimer l\'invite interactive — il s\'agit de votre acceptation de la CPML, qui reste une licence non commerciale. Il n\'accorde pas de droits commerciaux sur XTTS v2.' },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'Comment le TTS local se compare à ElevenLabs et au TTS cloud',
        content: 'ElevenLabs, Google Text-to-Speech et Azure Speech restent le plafond de qualité pour le TTS en 2026.',
        items: [
          '**Plafond de qualité :** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper.',
          '**Latence :** Piper local (~30–50 ms premier audio) est plus rapide que tout aller-retour API ElevenLabs (~300–500 ms).',
          '**Coût :** ElevenLabs facture 5–99 €/mois par palier. Le TTS local coûte 0 € après l\'achat matériel unique.',
          '**Clonage vocal :** ElevenLabs Instant Voice Clone ≈ qualité XTTS v2. ElevenLabs Professional Voice Clone dépasse tout moteur local.',
          '**Confidentialité :** TTS local = aucune donnée audio envoyée nulle part. ElevenLabs = audio traité sur leurs serveurs.',
          '**Capacité hors ligne :** Local = entièrement hors ligne. ElevenLabs = nécessite internet.',
          '**Quand utiliser le cloud :** Production de voix professionnelle, produits orientés clients nécessitant la plus haute qualité.',
          '**Quand utiliser le local :** Audio sensible à la confidentialité, appareils embarqués, traitement par lots sensible aux coûts, environnements hors ligne.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Comment choisir',
        content: 'Un organigramme de décision de votre besoin vers le bon moteur TTS :',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Besoin de clonage vocal ? → XTTS v2 (meilleure qualité) ou F5-TTS (plus rapide, nouvelle architecture) ou Coqui TTS (licence ouverte). Besoin de vitesse CPU ? → Piper. Besoin d\'audio créatif ? → Bark. Besoin de la meilleure qualité anglaise ? → StyleTTS 2.' },
          { type: 'plain-terms', text: 'Clonage vocal : XTTS v2 pour la qualité, F5-TTS pour la vitesse, Coqui VITS pour la licence permissive. CPU/Raspberry Pi : Piper uniquement. Effets sonores podcast : Bark. Livres audio en anglais : StyleTTS 2.' },
        ],
        items: [
          '**Besoin de clonage vocal ?** → XTTS v2 (meilleure qualité, CPML) ou F5-TTS (nouvelle architecture, plus rapide, CC-BY-NC-4.0) ou Coqui VITS (bonne qualité, MPL 2.0). Pas de clonage : Piper (vitesse) ou StyleTTS 2 (qualité).',
          '**CPU uniquement / Raspberry Pi ?** → Piper uniquement. Kokoro est une alternative CPU de meilleure qualité (Apache 2.0). Tous les autres moteurs nécessitent un GPU.',
          '**Besoin d\'audio créatif avec des sons non vocaux ?** → Bark. Aucun autre moteur local ne produit nativement des rires, soupirs ou musique.',
          '**Besoin de la meilleure qualité de narration anglaise ?** → StyleTTS 2.',
          '**Besoin de support multilingue ?** → XTTS v2 (17 langues), Coqui (20+), Piper (20+ packs).',
          '**Besoin d\'une licence MIT entièrement commerciale ?** → Piper, Bark ou StyleTTS 2.',
          '**Construction d\'un pipeline d\'assistant vocal ?** → Piper pour une sortie TTS à faible latence.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Combien d\'audio de référence me faut-il pour le clonage vocal avec XTTS v2?',
            a: 'XTTS v2 nécessite un minimum de 3 secondes d\'audio de référence propre, 6+ secondes donnant des résultats nettement meilleurs. L\'audio doit être un seul locuteur avec un bruit de fond minimal et sans musique. Un matériel source de meilleure qualité produit de meilleurs clones que l\'audio compressé.',
          },
          {
            q: 'Puis-je utiliser Piper TTS dans un produit commercial?',
            a: 'Oui. Piper est licencié sous MIT, qui permet l\'utilisation commerciale illimitée. Vous devez inclure la notice de licence MIT dans votre produit. Les modèles de voix (fichiers ONNX) peuvent avoir des licences séparées par voix.',
          },
          {
            q: 'Quel moteur TTS local a le meilleur support multilingue?',
            a: 'XTTS v2 supporte 17 langues avec clonage vocal multilingue — la fonctionnalité multilingue la plus impressionnante de tous les moteurs locaux. Coqui TTS a 20+ modèles de langues mais sans clonage multilingue. Piper a 20+ packs de voix pour l\'inférence CPU rapide.',
          },
          {
            q: 'Quel moteur TTS local sonne le plus humain?',
            a: 'StyleTTS 2 pour la narration en anglais — il atteint les scores MOS les plus élevés de tous les moteurs TTS anglais open-source (~4,3 vs référence humaine ~4,5). XTTS v2 et F5-TTS sont compétitifs (~4,1) pour la naturalité de voix clonée.',
          },
          {
            q: 'Puis-je utiliser XTTS v2 commercialement?',
            a: 'Non, pas sans accord commercial séparé. XTTS v2 est publié sous la Coqui Public Model License (CPML), qui autorise l\'usage personnel, de recherche et de loisir du modèle et de ses sorties audio mais interdit l\'usage commercial — tout produit payant, SaaS, contenu financé par la publicité ou travail client. Coqui Inc a fermé en janvier 2024, donc aucune entité ne vend actuellement de licences commerciales XTTS v2 ; en pratique, considérez XTTS v2 comme non commercial uniquement. Pour le clonage vocal commercial, utilisez Tortoise (Apache 2.0) ou le toolkit Coqui TTS sur un backend VITS (MPL 2.0). Ceci est une référence factuelle, pas un conseil juridique — lisez la CPML vous-même avant de déployer.',
          },
          {
            q: 'Comment accepter la licence Coqui CPML de manière non interactive (Docker / CI)?',
            a: 'Définissez la variable d\'environnement COQUI_TOS_AGREED à 1. La bibliothèque Coqui/XTTS affiche normalement la CPML et attend que vous tapiez « y », ce qui bloque les builds Docker, la CI et les serveurs sans interface. Définir COQUI_TOS_AGREED=1 enregistre votre acceptation afin que le modèle se charge sans l\'invite. Utilisez `export COQUI_TOS_AGREED=1` dans un shell ou une étape CI, `ENV COQUI_TOS_AGREED=1` dans un Dockerfile, ou `os.environ["COQUI_TOS_AGREED"] = "1"` en Python avant l\'appel TTS(). Cela ne fait que supprimer l\'invite — c\'est votre accord à la CPML et cela n\'accorde pas de droits commerciaux.',
          },
          {
            q: 'Combien de voix et de langues XTTS v2 prend-il en charge?',
            a: 'XTTS v2 n\'a pas de catalogue fixe de voix nommées — c\'est un modèle de clonage, vous fournissez donc un extrait de référence de 6 secondes et il reproduit ce locuteur (le dépôt livre aussi quelques préréglages de locuteurs intégrés pour des tests rapides). Il génère la parole dans 17 langues : anglais, espagnol, français, allemand, italien, portugais, polonais, turc, russe, néerlandais, tchèque, arabe, chinois (zh-cn), japonais, hongrois, coréen et hindi. Le clonage est multilingue : clonez une voix une fois et générez-la dans n\'importe laquelle des 17 langues.',
          },
          {
            q: 'Kokoro vs Piper — quel TTS CPU léger choisir?',
            a: 'Les deux fonctionnent rapidement sur CPU sans GPU et tous deux sont sous licence permissive (Piper est MIT, Kokoro est Apache 2.0), donc l\'un ou l\'autre est sûr pour l\'usage commercial. Choisissez Piper quand vous avez besoin de la latence la plus faible et de la couverture linguistique la plus large (20+ packs de voix, temps réel sur un Raspberry Pi 5) — c\'est la référence pour la voix embarquée et la maison connectée. Choisissez Kokoro (un modèle de 82M de paramètres bâti sur l\'architecture StyleTTS 2) quand vous voulez une plus grande naturalité que Piper et pouvez accepter un peu plus de calcul ; sa qualité en anglais est plus proche des moteurs GPU plus lourds. Pour un Raspberry Pi ou un assistant toujours actif, Piper ; pour une lecture à voix haute sur poste de travail/serveur où la qualité importe plus que les millisecondes, Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Piper TTS sur GitHub](https://github.com/rhasspy/piper) — Code source, packs de voix, téléchargements de modèles ONNX et guide Raspberry Pi.',
          '[Coqui TTS sur GitHub](https://github.com/coqui-ai/TTS) — Code source, liste de modèles, documentation sur le clonage vocal et référence de l\'API Python.',
          '[Documentation XTTS v2](https://docs.coqui.ai/en/latest/models/xtts.html) — Fiche de modèle XTTS v2, licence (CPML) et API de clonage vocal.',
          '[F5-TTS sur GitHub](https://github.com/SWivid/F5-TTS) — TTS flow-matching avec clonage vocal zéro-shot, guide d\'installation et support multilingue.',
          '[Tortoise TTS sur GitHub](https://github.com/neonbjb/tortoise-tts) — TTS multi-voix de haute qualité avec clonage vocal, licence Apache 2.0. Très lent mais compatible avec l\'usage commercial.',
          '[XTTS-v2 LICENSE.txt (CPML) sur Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Texte complet de la Coqui Public Model License régissant XTTS v2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture complémentaire',
        items: [
          '[Construire un assistant vocal entièrement hors ligne en 2026](/fr/power-local-llm/build-local-voice-assistant-2026) — Utilisez Piper ou Coqui TTS comme couche de sortie d\'un pipeline complet Whisper + LLM + TTS.',
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison-2026) — Le côté entrée d\'un pipeline vocal.',
          '[Pipeline IA multimodale locale 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Intégrer le TTS comme couche de sortie vocale d\'une pile multimodale complète.',
          '[Meilleurs GPU budget pour LLM local](/fr/local-llms/best-budget-gpus-local-llm) — Sélection de GPU pour exécuter XTTS v2, F5-TTS, Bark ou StyleTTS 2.',
          '[Meilleure IA text-to-speech pour créateurs de contenu](/fr/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local : comparaison qualité vocale et latence.',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカルTTSとボイスクローニングのライセンス2026：商用利用できるエンジンは？（Piper、XTTS v2、F5-TTS、Coqui）',
    seoTitle: 'ローカルTTSライセンス2026：商用利用できるエンジン',
    intro:
      'ローカルの音声合成エンジンを商用製品で使えるかどうかは、すべてライセンス次第であり、各エンジンのライセンスは大きく異なります。Piper、Bark、StyleTTS 2はMIT、KokoroとTortoiseはApache 2.0で提供され、いずれも商用利用が無料です。Coqui TTSツールキットはMPL 2.0（条件付きで商用可）です。しかし最も人気のある2つのボイスクローニングモデルは制限されています：XTTS v2はCoqui Public Model License（CPML、非商用）、F5-TTSはCC-BY-NC-4.0（非商用）を採用しています。このガイドでは、各エンジンの正確なライセンス、エンジンごとの「商用利用できるか？」への明確な回答、DockerやCIでCPMLを非対話的に承諾するための環境変数COQUI_TOS_AGREED、そして品質・速度・VRAM・ボイスクローニングにわたる比較を示します。音声をクラウドに送ることなく、本番環境でライセンスの落とし穴に陥ることなく、適切なエンジンを選べます。（ライセンスは2026年6月に検証済み。これは事実に基づく参考情報であり、法的助言ではありません。商用利用の前に必ず各ライセンスをご自身で確認してください。）',
    metaDescription:
      'どのローカルTTSエンジンが商用利用できるか？Piper（MIT）、XTTS v2（CPML）、F5-TTS（CC-BY-NC）、Coqui、Kokoro、Tortoiseの正確なライセンスに加え、COQUI_TOS_AGREED環境変数とボイスクローニング比較。2026年版。',
    twitterDescription:
      'ローカルTTSライセンス2026：どのボイスクローニングエンジンが商用利用できるか？Piper/Bark/StyleTTS 2（MIT）、Kokoro/Tortoise（Apache 2.0）、XTTS v2（CPML非商用）、F5-TTS（CC-BY-NC）。COQUI_TOS_AGREED環境変数も解説。すべてオフライン。',
    readTime: '16分で読める',
    educationalLevel: 'Intermediate',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piperは速度と組み込みアプリケーションの最良の選択です。** CPUのみで実行され、Raspberry Pi 5でリアルタイム音声を生成し、20+言語をダウンロード可能なボイスパックでサポートしています。GPU なし、Python の複雑性なし、MIT ライセンス。',
          '**XTTS v2は2026年のローカルボイスクローニングの最良の選択ですが、非商用です。** 6秒の参照オーディオを与えると、17言語でボイスをクローンします（4–6 GB GPU VRAM）。CPMLライセンスは非商用であり、Coquiが閉鎖（2024年1月）して以降は商用ライセンスが販売されていないため、XTTS v2は非商用専用として扱ってください。DockerやCIでは`COQUI_TOS_AGREED=1`でCPMLを非対話的に承諾できます。',
          '**F5-TTSはゼロショットボイスクローニング向けの急速に成長している代替案です。** GPTの代わりにフローマッチングアーキテクチャを使用し、~3秒の参照オーディオからボイスをクローンし、より高速なインファレンスでXTTS v2に匹敵する品質を実現します。ライセンス：CC-BY-NC-4.0（非商用のみ）。',
          '**Coqui TTSはもっとも柔軟なオープンソースTTSツールキットです。** 複数のバックエンド（Tacotron2、VITS、XTTS）、ボイスクローニング、20+言語をMPL 2.0ライセンスでサポートしています。注：Coqui社は2024年1月に閉鎖されました。プロジェクトはコミュニティによって維持されています。',
          '**Barkは非言語オーディオを生成する唯一のローカルTTSです。** 笑い、咳、ため息、音楽スニペット、周囲音を音声と共に生成できます — クリエイティブオーディオ、ポッドキャスト制作、インタラクティブフィクションに有用です。',
          '**StyleTTS 2はすべてのオープンソース英語TTSエンジンの最高MOS（Mean Opinion Score）スコアを達成します。** 拡散ベースのスタイルトランスファーは英語ナレーションで準人間的な自然さを生成します。英語のみをサポートし、ボイスクローニングはありません。',
          '**ライセンスが商用利用を決め、その線引きは明確です。** 商用製品に無料：Piper、Bark、StyleTTS 2（MIT）とKokoro、Tortoise（Apache 2.0）。条件付きで商用可：Coqui TTSツールキット（MPL 2.0、ツールキットの変更を開示）。非商用のみ：XTTS v2（CPML）とF5-TTS（CC-BY-NC-4.0） — いずれも別途の契約が必要です。商用のボイスクローニングにはTortoise（Apache 2.0）またはVITSバックエンドのCoquiツールキット（MPL 2.0）を使用してください。事実に基づく参考情報であり、法的助言ではありません。',
          '**どれも大規模な商用TTS品質には相当しません。** ElevenLabs、Google Text-to-Speech、Azure Speech はまだ一貫性、自然さ、レイテンシーですべてのローカルエンジンを上回ります。プライバシー、コスト、またはオフライン運用が絶対品質より重要な場合は、ローカル TTS が正しい選択です。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**最速のローカルTTS：** Piper — Raspberry Pi 5でリアルタイム動作、モダンなデスクトップCPUでリアルタイムの約10倍速。',
          '**最高のボイスクローニング品質：** XTTS v2 — 6秒の参照音声、17言語での多言語クローニング。',
          '**最速のゼロショットボイスクローニング（新アーキテクチャ）：** F5-TTS — 約3秒の音声、フローマッチング、RTX 4070で約3〜5倍のリアルタイム速度。',
          '**最も柔軟なオープンソースツールキット：** Coqui TTS — VITS、Tacotron2、XTTSバックエンドをサポート、20+言語モデル。',
          '**唯一の生成的オーディオ（非音声サウンド）：** Bark — 笑い声、ため息、音楽、環境音。最も遅い。',
          '**最高の英語ナレーション品質：** StyleTTS 2 — 拡散ベースのスタイル転送、LJSpeechベンチマークで人間に近いMOS。',
          '**商用利用が無料：** Piper、Bark、StyleTTS 2（MIT）；Kokoro、Tortoise（Apache 2.0）；Coqui TTSツールキット（MPL 2.0、条件あり）。**非商用：** XTTS v2（CPML）、F5-TTS（CC-BY-NC-4.0）。',
          '**XTTS v2の音声と言語：** 固定の音声リストはありません — 6秒の参照クリップを与えると、その音声をクローンします。モデルには組み込みの話者プリセットが同梱されており、17言語で生成します：en、es、fr、de、it、pt、pl、tr、ru、nl、cs、ar、zh-cn、ja、hu、ko、hi。',
          '**XTTS v2のVRAM：** モデル重みは~2 GB；実行には最低4 GB、リアルタイム推論には4〜6 GB推奨。',
          '**CI/DockerでCPMLを承諾：** `export COQUI_TOS_AGREED=1` — 対話的なプロンプトは不要。',
          '**VRAM要件：** Piper：CPUのみ。Kokoro：CPU / 1〜2 GB。StyleTTS 2：2〜4 GB。Coqui VITS：2〜4 GB。F5-TTS：3〜5 GB。XTTS v2：4〜6 GB。Bark：4〜8 GB。Tortoise：4〜8 GB。',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'ローカルTTSが重要な理由',
        content: 'クラウドTTSサービス（ElevenLabs、Google TTS、Amazon Polly、Azure Speech）は便利ですが、文字単位の課金、音声データ保持ポリシー、ネットワーク往復による遅延という問題があります。ローカルTTSはこれらすべてを解消します。',
        items: [
          '**プライバシー：** テキストコンテンツが端末の外に出ることは一切ありません。医療口述、法律要約、日記の読み上げ、機密文書の音声化に不可欠です。',
          '**コスト：** クラウドTTSの料金は通常100万文字あたり4〜30ドルです。月に1000万文字を生成する開発者は、一度きりのローカルセットアップで月40〜300ドルを節約できます。',
          '**レイテンシ：** ネットワーク往復がありません。PiperはCPUで50ms未満で最初の音声トークンを生成します — あらゆるクラウドTTSの往復より高速です。',
          '**カスタマイズ：** ボイスクローニング（XTTS v2、F5-TTS、Coqui）により、数秒の音声からカスタムボイスを作成できます。クラウドプロバイダはクローン音声1つにつき月10ドル以上請求します。',
          '**オフライン動作：** 飛行機内、セキュリティ施設、インターネットのない遠隔地で動作します。キオスクや機器向けの組み込み音声UIとして使用できます。',
          '**スマートホーム：** Piperは常時稼働のローカル音声インターフェースの主要TTS層で、Raspberry PiでもGPU不要でリアルタイム動作します。Home Assistantと連携した完全オフライン音声アシスタントは、[スマートホーム向けローカル音声アシスタント →](/ja/smart-home/local-voice-assistant-smart-home)をご覧ください。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: 'プロダクションデプロイに最も重要なメトリクスで比較したすべてのローカルTTSエンジン。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PiperはCPU最速；XTTS v2は最高のボイスクローニング品質；F5-TTSは新しいアーキテクチャでゼロショットクローニングを提供；Barkは笑い声と音楽を生成できる唯一のエンジン；StyleTTS 2は英語ナレーションの自然さが最高。' },
          { type: 'plain-terms', text: 'ほとんどのオフラインTTSニーズに：速度とシンプルさならPiper、寛容なライセンスでボイスクローニングならCoqui、GPUで最高のクローニング品質ならXTTS v2、新しいアーキテクチャで高速なゼロショットクローニングならF5-TTS。' },
        ],
        note: 'MOS（平均意見スコア）は1〜5のスケールで、5は人間の音声と区別がつかない。スコアは概算であり、公開されたベンチマークまたはコミュニティ評価に基づいています。MOSはテスト文と聴衆によって大きく異なります。人間参照MOS：約4.5。',
        columns: ['ツール', '品質', '速度', 'ボイスクローニング', '多言語', 'VRAM', 'ライセンス', 'MOS（英語）'],
        rows: [
          { 'ツール': 'Piper', '品質': '良い', '速度': '非常に速い（CPU）', 'ボイスクローニング': 'なし', '多言語': 'あり（20+言語）', 'VRAM': 'CPUのみ', 'ライセンス': 'MIT', 'MOS（英語）': '~3.5' },
          { 'ツール': 'Kokoro', '品質': '非常に良い', '速度': '速い（CPU）', 'ボイスクローニング': 'なし', '多言語': '英語 + 拡張中', 'VRAM': 'CPU / 1〜2 GB', 'ライセンス': 'Apache 2.0', 'MOS（英語）': '~4.0' },
          { 'ツール': 'Coqui TTS', '品質': '非常に良い', '速度': '中程度', 'ボイスクローニング': 'あり', '多言語': 'あり（20+言語）', 'VRAM': '2〜4 GB', 'ライセンス': 'MPL 2.0', 'MOS（英語）': '~3.8' },
          { 'ツール': 'XTTS v2', '品質': '優秀', '速度': '遅い', 'ボイスクローニング': 'あり（最高）', '多言語': 'あり（17言語）', 'VRAM': '4〜6 GB', 'ライセンス': 'CPML（非商用）', 'MOS（英語）': '~4.1' },
          { 'ツール': 'F5-TTS', '品質': '優秀', '速度': '中程度〜速い', 'ボイスクローニング': 'あり（ゼロショット）', '多言語': 'あり（多言語）', 'VRAM': '3〜5 GB', 'ライセンス': 'CC-BY-NC-4.0', 'MOS（英語）': '~4.1' },
          { 'ツール': 'Bark', '品質': 'ユニーク / 変動', '速度': '遅い', 'ボイスクローニング': '限定', '多言語': 'あり（多言語）', 'VRAM': '4〜8 GB', 'ライセンス': 'MIT', 'MOS（英語）': '~3.2〜4.0（変動）' },
          { 'ツール': 'StyleTTS 2', '品質': '優秀（英語）', '速度': '中程度', 'ボイスクローニング': 'なし', '多言語': '主に英語', 'VRAM': '2〜4 GB', 'ライセンス': 'MIT', 'MOS（英語）': '~4.3' },
          { 'ツール': 'Tortoise', '品質': '優秀', '速度': '非常に遅い（1文あたり数分）', 'ボイスクローニング': 'あり', '多言語': '主に英語', 'VRAM': '4〜8 GB', 'ライセンス': 'Apache 2.0', 'MOS（英語）': '~4.2' },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: '初回音声レイテンシ比較',
        content: '初回音声レイテンシはテキスト入力から最初の音声出力までの時間です。音声アシスタントやインタラクティブアプリケーションにとって重要です。バッチ処理（オーディオブック、ポッドキャスト制作）では、初回音声レイテンシよりも総スループットの方が重要です。',
        columns: ['エンジン', '初回音声（RTX 4070）', '初回音声（CPU）', '初回音声（M5 Pro）'],
        rows: [
          { 'エンジン': 'Piper', '初回音声（RTX 4070）': '~30 ms', '初回音声（CPU）': '~50 ms', '初回音声（M5 Pro）': '~40 ms' },
          { 'エンジン': 'Kokoro', '初回音声（RTX 4070）': '~50 ms', '初回音声（CPU）': '~80 ms', '初回音声（M5 Pro）': '~60 ms' },
          { 'エンジン': 'Coqui VITS', '初回音声（RTX 4070）': '~100 ms', '初回音声（CPU）': '~300 ms', '初回音声（M5 Pro）': '~150 ms' },
          { 'エンジン': 'StyleTTS 2', '初回音声（RTX 4070）': '~150 ms', '初回音声（CPU）': '~500 ms', '初回音声（M5 Pro）': '~200 ms' },
          { 'エンジン': 'F5-TTS', '初回音声（RTX 4070）': '~200 ms', '初回音声（CPU）': '~800 ms', '初回音声（M5 Pro）': '~300 ms' },
          { 'エンジン': 'XTTS v2', '初回音声（RTX 4070）': '~300 ms', '初回音声（CPU）': '~1500 ms', '初回音声（M5 Pro）': '~500 ms' },
          { 'エンジン': 'Bark', '初回音声（RTX 4070）': '~500 ms', '初回音声（CPU）': '~3000 ms', '初回音声（M5 Pro）': '~800 ms' },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — 最速の軽量オプション',
        content: '**PiperはRhasspyがホームオートメーションと組み込み用途向けに開発した高速なローカルTTSシステムです。** onnxruntimeバックエンドを使用したVITSベースのニューラルアーキテクチャを採用しており、GPUなしでRaspberry Pi 4または5上でリアルタイム動作するよう最適化されています。',
        items: [
          '**アーキテクチャ：** ONNXインターフェースを持つVITSニューラルTTS。シングルボードコンピュータと組み込みLinux向けに設計。',
          '**インストール：** `pip install piper-tts`。事前トレーニング済みボイスパックはHugging FaceのPiper voicesリポジトリで入手可能。',
          '**使用方法：** `echo "こんにちは" | piper --model ja_JP-kokoro-medium.onnx --output_file output.wav`',
          '**ボイスパック：** 20+言語、各言語に複数のボイスオプション。各ボイスパックは20〜200 MBのONNXモデルファイルです。',
          '**速度：** モダンなデスクトップCPUでリアルタイムの約10倍速。Raspberry Pi 5でリアルタイム。50ms未満の初回音声レイテンシ。',
          '**Apple Silicon：** M5 Pro（CPU、ARM NEON）で約15倍のリアルタイム速度。GPUなしでネイティブ動作 — Macで優れたパフォーマンス。',
          '**サンプルを聴く：** [Piper音声サンプル](https://rhasspy.github.io/piper-samples/)',
          '**最適用途：** ホームアシスタント、キオスクデバイス、組み込み音声UI、GPUが利用できないプライバシー重視の読み上げ。',
          '**制限：** ボイスクローニングなし。品質は「良い」水準 — 自然に聞こえますが、XTTS v2やStyleTTS 2と比べると明確に合成音声。',
          '**ライセンス：** MIT — 完全に商用可、制限なし。',
          '**Kokoro TTS — Piperの代替：** Kokoro TTSは軽量カテゴリでPiperの新興代替品です。CPUで高速なまま、Piperより高い自然さを達成します。Apache 2.0ライセンス。PiperのクオリティがニーズをMたしていないが、GPU VRAMを用意できない場合は、[Kokoro](https://github.com/hexgrad/kokoro)を試す価値があります。',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — 最高のオープンソース総合ツールキット',
        content: '**Coqui TTSは複数のモデルアーキテクチャとボイスクローニングをサポートするPython音声合成ツールキットです。** Coqui社（2024年1月に閉鎖）によって開発され、現在はオープンソースコミュニティによってメンテナンスされています。このツールキットはTacotron2、VITS、XTTSバックエンドをサポートしています。',
        items: [
          '**インストール：** `pip install TTS`。モデルは初回使用時に自動ダウンロード。',
          '**ボイスクローニング：** 6秒以上の参照音声を提供します。`tts --text "こんにちは" --model_name tts_models/ja/kokoro/tacotron2-DDC --speaker_wav sample.wav --out_path output.wav`',
          '**バックエンドオプション：** VITS（最速、良質）、Tacotron2（旧式、低速）、XTTS（最高品質、XTTS v2セクション参照）。',
          '**言語：** `tts --list_models`で20+言語モデルが利用可能。',
          '**VRAM：** VITSバックエンドで2〜4 GB；XTTSバックエンドで4〜6 GB。',
          '**Apple Silicon：** M5 Pro（CPU）で約8倍のリアルタイム速度。Metal GPU加速なし。バッチ生成に使用可能。',
          '**コミュニティ状況：** Coqui社は2024年1月に閉鎖。オープンソースリポジトリ（`coqui-ai/TTS`）はコミュニティによりメンテナンス中。アクティブな商用サポートなし。',
          '**ライセンス：** MPL 2.0 — 商用利用可、ただし変更のソースコードを開示する必要あり。',
          '**最適用途：** オープンソースツールキットと寛容なライセンスでボイスクローニングを求める開発者。',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — 最高のボイスクローニング品質',
        content: '**XTTS v2（Coqui製）は2026年においてローカルで利用できる最高品質のボイスクローニングエンジンです。** 多言語転送を持つGPTベースのアーキテクチャを使用 — 同じ6秒の音声から英語で音声をクローンし、スペイン語、ドイツ語、フランス語または他の14言語で話すことができます。',
        items: [
          '**アーキテクチャ：** スピーカーコンディショニングを持つGPTベースのTTS。韻律モデリングのためのビジョントランスフォーマー。',
          '**ボイスクローニング：** 6秒の参照音声で説得力のあるボイスクローンに十分です。3秒でも合格点の品質が得られます。',
          '**多言語クローニング：** 1つの言語で音声をクローンし、同じ声の特性で17の異なる言語で音声を生成。',
          '**言語（17）：** 英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ポーランド語、トルコ語、ロシア語、オランダ語、チェコ語、アラビア語、中国語（zh-cn）、日本語、ハンガリー語、韓国語、ヒンディー語。韓国語とヒンディー語はXTTS v2.0.3で追加されました。',
          '**「XTTS v2の音声」：** 名前付きの音声の固定カタログはありません。XTTS v2はクローニングモデルです — 6秒の参照クリップを与えると、その話者を再現します。リポジトリには手早くテストするための組み込み話者プリセットがいくつか同梱されていますが、想定される使い方は独自の`speaker_wav`を与えることです。',
          '**VRAM：** モデル重みは~2 GB。実用上の最低は4 GB VRAM；リアルタイム推論には4〜6 GB推奨。CPUでも動作しますが約5〜10倍遅くなります。',
          '**速度：** 遅い — RTX 4070で約2倍のリアルタイム速度で生成。リアルタイム音声アシスタントパイプラインには不向き。',
          '**Apple Silicon：** M5 Pro（CPU、Metalアクセラレーションなし）で約3倍のリアルタイム速度。バッチ音声生成には使用可能、リアルタイム音声アシスタント出力には不向き。',
          '**ライセンス：** CPML（Coqui Public Model License） — 非商用。CPMLはモデル**およびその音声出力**の個人・研究・趣味利用を許可しますが、別途の商用契約なしでの商用利用（有料製品、SaaS、広告付きコンテンツ、クライアント業務など）を禁止しています。Coqui社は2024年1月に閉鎖したため、現在XTTS v2の商用ライセンスを販売している主体は存在しません — 実務上はXTTS v2を非商用専用として扱ってください。`COQUI_TOS_AGREED`環境変数については[CPMLの非対話的承諾](#cpml-noninteractive)セクションを参照してください。',
        ],
        codeBlock: `from TTS.api import TTS\n\n# Load XTTS v2 model\ntts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")\n\n# Clone voice from 6-second reference audio and synthesize in any of 17 languages\ntts.tts_to_file(\n    text="Bonjour, je suis votre assistant vocal.",\n    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker\n    language="fr",                        # Output in French using the cloned voice\n    file_path="output.wav"\n)`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'XTTS v2はCPML（非商用）ライセンスの対象です。商用利用 — 製品、SaaS、サービス、有料のクライアント業務 — には別途の商用契約が必要であり、Coqui社が2024年1月に閉鎖して以降、そのような契約は現在購入できません。商用のボイスクローニングが必要な場合は、Tortoise（Apache 2.0）またはVITSバックエンドのCoqui TTSツールキット（MPL 2.0）を使用してください。これは事実に基づく参考情報であり、法的助言ではありません — デプロイ前にCPMLをご自身で確認してください。' },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — 音声を超えた生成的オーディオ',
        content: '**Bark（Suno AI製）は、テキストプロンプトから音声、音楽、笑い声、咳、ため息、環境音を生成する生成型テキスト-オーディオモデルです。** 従来のTTSエンジンではなく、テキストプロンプトをオーディオ生成の指示として解釈する生成モデルです。',
        items: [
          '**ユニークな機能：** テキストに`[laughs]`、`[sighs]`、`[clears throat]`、`[music]`、または`[sound effect: wind]`を含めると、Barkは音声と共にそれらのサウンドを生成します。',
          '**従来のTTSとは異なる制御性：** 同じ入力でも実行ごとに出力が異なります。品質は一貫していません — 優れた出力もあれば、アーティファクトや不明瞭なセグメントがある出力もあります。',
          '**速度：** 遅い — RTX 4090でさえリアルタイムより2〜4倍遅い。インタラクティブアプリケーションには不向き。',
          '**Apple Silicon：** M5 Pro（CPU、MPS部分的）で約1.5倍のリアルタイム速度。MPS（Metal Performance Shaders）サポートは部分的 — ほとんどの推論は依然としてCPUにフォールバック。',
          '**最適用途：** クリエイティブオーディオ、効果音付きポッドキャスト制作、インタラクティブフィクション、実験的音声アプリケーション。',
          '**VRAM：** 4〜8 GB GPU。CPUでは品質が大幅に低下します。',
          '**インストール：** `pip install suno-bark`。モデルは初回実行時にダウンロード（約2 GB）。',
          '**ライセンス：** MIT — 完全に商用可。',
          '**制限：** 信頼性の高いボイスクローニングなし。Barkに付属する「音声プリセット」は概算的なもの — 真のボイスクローニングシステムではありません。',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — 最高の自然な品質',
        content: '**StyleTTS 2はLJSpeechベンチマークで人間に近いMOS（平均意見スコア）を達成する拡散ベースのTTSモデルです。** 拡散を使ったスタイル転送により音声を生成 — VITSベースのモデルよりも自然で表現豊かな音声を生成します。',
        items: [
          '**アーキテクチャ：** 拡散ベースのスタイル転送。テキストを音声に決定論的にマッピングするのではなく、スピーキングスタイルの学習した分布からサンプリング。',
          '**品質：** LJSpeechベンチマークにおけるすべてのオープンソース英語TTSエンジンの中で最高のMOSスコア。',
          '**最適用途：** オーディオブックのナレーション、プロフェッショナルな音声、ポッドキャスト制作。',
          '**インストール：** GitHubリポジトリをクローン、要件をインストール（`pip install -r requirements.txt`）、モデルチェックポイントをダウンロード（約500 MB）。',
          '**言語サポート：** 主に英語。非英語での使用は推奨しません。',
          '**ボイスクローニング：** サポートなし。StyleTTS 2はトレーニング済みスピーカーボイスのみで生成。',
          '**VRAM：** 2〜4 GB GPU。RTX 4070で約5〜8倍のリアルタイム速度でXTTS v2より高速。',
          '**Apple Silicon：** M5 Pro（CPU）で約6倍のリアルタイム速度。Metalアクセラレーションなし。',
          '**ライセンス：** MIT — 完全に商用可。',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — ゼロショットボイスクローニング、完全オープン',
        content: '**F5-TTSはゼロショットボイスクローニングを持つフローマッチングベースのTTSモデルです — ファインチューニングなしで約3秒の参照音声からあらゆる音声をクローンできます。**',
        items: [
          '**アーキテクチャ：** XTTS v2が使用するGPTベースのアーキテクチャではなく、フローマッチング（拡散のバリアントアプローチ）を採用。通常、競争力のある品質でより高速な推論を提供。',
          '**ボイスクローニング：** 約3秒の参照音声で十分。ファインチューニング不要。',
          '**品質：** 英語でXTTS v2と競争力あり。コミュニティ評価でMOSスコア約4.1。',
          '**速度：** RTX 4070で約3〜5倍のリアルタイム速度 — XTTS v2より高速。',
          '**言語：** 英語と中国語の強力なサポート、他言語への拡大中。',
          '**Apple Silicon：** M5 Pro（CPU）で約2倍のリアルタイム速度。現在Metalアクセラレーションなし。',
          '**VRAM：** 3〜5 GB GPU推奨。',
          '**インストール：** `pip install f5-tts`またはGitHubからクローン。',
          '**ライセンス：** CC-BY-NC-4.0 — 非商用利用のみ。商用利用には別途契約が必要。',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'ライセンスと商用利用 — このTTSエンジンを商用利用できるか？',
        content: 'ライセンスは本番利用において最も重要な要素であり、これらのエンジンを明確に2つのグループに分けます。寛容なライセンス（MIT、Apache 2.0）のエンジンは商用製品に自由に組み込めます。制限付きのエンジン（CPML、CC-BY-NC-4.0）は非商用であり、有料製品、SaaS、広告付きコンテンツ、クライアント業務で使うには別途の契約が必要です。下の表は各エンジンの正確なライセンスと「商用利用できるか？」への直接的な回答を示します。',
        snippetBlocks: [
          { type: 'one-sentence', text: '商用製品でのローカルTTSには、Piper、Bark、StyleTTS 2（MIT）、KokoroとTortoise（Apache 2.0）、およびVITS/Tacotron2バックエンドのCoqui TTSツールキット（MPL 2.0）がいずれも許可されます；XTTS v2（CPML）とF5-TTS（CC-BY-NC-4.0）は非商用です。' },
          { type: 'plain-terms', text: '最も人気のある2つのボイスクローニングモデル — XTTS v2とF5-TTS — は別途のライセンスなしに商用利用できません。商用のボイスクローニングには、Tortoise（Apache 2.0）またはVITSバックエンドのCoquiツールキット（MPL 2.0）が安全な選択です。' },
        ],
        columns: ['ツール', 'ライセンス', '商用利用可?', '主な条件'],
        rows: [
          { 'ツール': 'Piper', 'ライセンス': 'MIT', '商用利用可?': 'はい — 制限なし', '主な条件': 'MIT表示を含める；音声ごとのモデルライセンスを確認' },
          { 'ツール': 'Kokoro', 'ライセンス': 'Apache 2.0', '商用利用可?': 'はい — 制限なし', '主な条件': 'Apache 2.0表示を含める' },
          { 'ツール': 'Coqui TTS（ツールキット）', 'ライセンス': 'MPL 2.0', '商用利用可?': 'はい — 条件あり', '主な条件': 'ツールキットファイルへの変更のソースを開示' },
          { 'ツール': 'XTTS v2（モデル）', 'ライセンス': 'CPML', '商用利用可?': 'いいえ — 非商用', '主な条件': '商用には契約が必要；Coqui閉鎖（2024年1月）以降は販売なし' },
          { 'ツール': 'F5-TTS', 'ライセンス': 'CC-BY-NC-4.0', '商用利用可?': 'いいえ — 非商用', '主な条件': 'NCはファインチューン版にも引き継がれる（Emilia訓練データ）' },
          { 'ツール': 'Bark', 'ライセンス': 'MIT', '商用利用可?': 'はい — 制限なし', '主な条件': 'MIT著作権表示を含める' },
          { 'ツール': 'StyleTTS 2', 'ライセンス': 'MIT', '商用利用可?': 'はい — 制限なし', '主な条件': 'MIT著作権表示を含める' },
          { 'ツール': 'Tortoise', 'ライセンス': 'Apache 2.0', '商用利用可?': 'はい — 制限なし', '主な条件': '帰属表示；クローンする音声について同意を得る' },
        ],
        callouts: [
          { type: 'note', text: 'Coqui TTS（ツールキット、MPL 2.0）とXTTS v2（特定のモデル重み、CPML）はライセンスが異なります。商用製品でCoqui TTSツールキットをVITSまたはTacotron2バックエンドでMPL 2.0の下で出荷できます。CPMLの非商用制限はXTTS v2のモデル重みとその音声出力に特定して適用され、ツールキットのコードには適用されません。' },
          { type: 'warning', text: 'これは事実に基づく参考情報であり、法的助言ではありません。ライセンスは変更されることがあり、エッジケース（音声の同意、データセット条項、音声ごとのモデルライセンス）が問題になります。商用デプロイでこれらの条項に依拠する前に、各エンジンのライセンスファイルをご自身で読み、弁護士に相談してください。' },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'CPMLを非対話的に承諾する（COQUI_TOS_AGREED）',
        content: 'CPMLの対象となるXTTS / Coquiモデルを初めて読み込むとき、ライブラリはライセンス条項を表示し、承諾のために「y」の入力を待ちます。この対話的なプロンプトはDockerビルド、CIパイプライン、ヘッドレスサーバーでハングします。CPMLを非対話的に承諾するには、環境変数`COQUI_TOS_AGREED`を`1`に設定します — これはモデルが読み込まれる前に、Coqui Public Model Licenseを読んで同意したことを記録します。ライセンスそのものは変わりません：CPMLは依然として非商用であり、この変数を設定することはその条項への同意であって、放棄ではありません。',
        snippetBlocks: [
          { type: 'one-sentence', text: '環境変数COQUI_TOS_AGREED=1を設定すると、Docker、CI、その他あらゆるヘッドレス環境で対話的なプロンプトなしにCoqui Public Model License（CPML）を承諾できます。' },
          { type: 'plain-terms', text: 'シェルやDockerfileでは`export COQUI_TOS_AGREED=1`を使い、Pythonではモデルをインポート・読み込みする前に`os.environ["COQUI_TOS_AGREED"] = "1"`を設定します。いずれの場合もキーボード入力を待たずにモデルが読み込まれます。' },
        ],
        items: [
          '**シェル / CI：** スクリプトを実行する前に`export COQUI_TOS_AGREED=1`。',
          '**Docker：** Dockerfileに`ENV COQUI_TOS_AGREED=1`を追加するか、`docker run`に`-e COQUI_TOS_AGREED=1`を渡す。',
          '**Python（モデル読み込み前に設定）：** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — `TTS(...)`がXTTSモデルをインスタンス化する前に実行する必要があります。',
          '**何をするか：** CPMLの非対話的な承諾を記録し、モデル読み込みが`y/n`プロンプトでブロックされないようにします。商用ライセンスではなく、非商用制限を取り除くものでもありません。',
        ],
        codeBlock: `# 1) シェル / CI — セッションに対して一度CPMLを承諾する
export COQUI_TOS_AGREED=1

# 2) Dockerfile — 承諾をイメージに焼き込む
# ENV COQUI_TOS_AGREED=1

# 3) Python — モデル作成前に設定する
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # 下記の TTS() 呼び出しより前に設定する必要がある

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# これでモデルは対話的なライセンスプロンプトなしに読み込まれる`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'COQUI_TOS_AGREED=1は対話的なプロンプトを抑制するだけです — これはCPMLへのあなたの承諾であり、CPMLは依然として非商用ライセンスです。XTTS v2に商用権を付与するものではありません。' },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルTTSとElevenLabsおよびクラウドTTSの比較',
        content: 'ElevenLabs、Google Text-to-Speech、Azure Speechは2026年においてTTSの品質上限のままです。',
        items: [
          '**品質上限：** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper。',
          '**レイテンシ：** ローカルPiper（初回音声30〜50 ms）はElevenLabs APIの往復（300〜500 ms）より高速。',
          '**コスト：** ElevenLabsは月5〜99ドルのティア制。ローカルTTSは一度のハードウェア購入後0ドル。',
          '**ボイスクローニング：** ElevenLabs Instant Voice Clone ≈ XTTS v2品質。ElevenLabs Professional Voice Cloneはすべてのローカルエンジンを超える。',
          '**プライバシー：** ローカルTTS = 音声データはどこにも送信されない。ElevenLabs = 音声がそのサーバーで処理される。',
          '**オフライン機能：** ローカル = 完全オフライン。ElevenLabs = インターネットが必要。',
          '**クラウドを使うべき場合：** プロフェッショナルな音声制作、最高品質が求められるユーザー向け製品。',
          '**ローカルを使うべき場合：** プライバシー重視の音声、組み込みデバイス、コスト重視のバッチ処理、オフライン環境。',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '選び方',
        content: '要件から適切なTTSエンジンへの意思決定フロー：',
        snippetBlocks: [
          { type: 'one-sentence', text: 'ボイスクローニングが必要？ → XTTS v2（最高品質）またはF5-TTS（高速、新アーキテクチャ）またはCoqui TTS（オープンライセンス）。CPU速度が必要？ → Piper。創作オーディオが必要？ → Bark。最高の英語品質が必要？ → StyleTTS 2。' },
          { type: 'plain-terms', text: 'ボイスクローニング：品質ならXTTS v2、速度ならF5-TTS、寛容なライセンスならCoqui VITS。CPU/Raspberry Pi：Piperのみ。ポッドキャスト効果音：Bark。英語オーディオブック：StyleTTS 2。' },
        ],
        items: [
          '**ボイスクローニングが必要？** → XTTS v2（最高品質、CPML）またはF5-TTS（新アーキテクチャ、高速、CC-BY-NC-4.0）またはCoqui VITS（良い品質、MPL 2.0）。クローニング不要：Piper（速度）またはStyleTTS 2（品質）。',
          '**CPUのみ / Raspberry Piが必要？** → Piperのみ。Kokoroはより高品質なCPU代替（Apache 2.0）。他のすべてのエンジンはGPUが必要。',
          '**非音声サウンドを含む創作オーディオが必要？** → Bark。他のローカルエンジンは笑い声、ため息、音楽をネイティブに生成できない。',
          '**最高の英語ナレーション品質が必要？** → StyleTTS 2。',
          '**多言語サポートが必要？** → XTTS v2（17言語）、Coqui（20+）、Piper（20+パック）。',
          '**完全に商用可能なMITライセンスが必要？** → Piper、Bark、またはStyleTTS 2。',
          '**音声アシスタントパイプラインを構築？** → 低レイテンシTTS出力にPiper。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'XTTS v2でボイスクローニングに必要な参照オーディオの量は？',
            a: 'XTTS v2は最低3秒のクリーンな参照オーディオを必要とします。6+秒でより良い結果が得られます。オーディオは単一の話者で、背景ノイズと音楽がなくなければなりません。高品質のソース素材は圧縮されたオーディオより良いクローンを生成します。',
          },
          {
            q: 'Piper TTSを商用製品で使用できますか？',
            a: 'はい。PiperはMITライセンスの下でライセンスされており、無制限の商用利用が可能です。製品にMITライセンス通知を含める必要があります。ボイスモデル（ONNXファイル）は音声ごとに個別のライセンスを持つ可能性があります。',
          },
          {
            q: 'どのローカルTTSエンジンが最高の多言語サポートを持っていますか？',
            a: 'XTTS v2は17言語で多言語ボイスクローニング対応しています — すべてのローカルエンジンの中で最も印象的な多言語機能です。Coqui TTSは20+言語モデルですが、多言語クローニングはありません。Piperは高速CPU推論のために20+言語ボイスパックを持っています。',
          },
          {
            q: 'どのローカルTTSエンジンが最も人間らしく聞こえますか？',
            a: '英語ナレーションではStyleTTS 2 — すべてのオープンソース英語TTSエンジンの最高MOS（~4.3 vs 人間参照 ~4.5）を達成します。XTTS v2とF5-TTSはクローンボイスの自然さで競争力があります（~4.1）。',
          },
          {
            q: 'XTTS v2を商用利用できますか？',
            a: 'いいえ、別途の商用契約なしには利用できません。XTTS v2はCoqui Public Model License（CPML）の下で公開されており、CPMLはモデルとその音声出力の個人・研究・趣味利用を許可しますが、商用利用 — 有料製品、SaaS、広告付きコンテンツ、クライアント業務 — を禁止しています。Coqui社は2024年1月に閉鎖したため、現在XTTS v2の商用ライセンスを販売している主体は存在しません。実務上はXTTS v2を非商用専用として扱ってください。商用のボイスクローニングにはTortoise（Apache 2.0）またはVITSバックエンドのCoqui TTSツールキット（MPL 2.0）を使用してください。これは事実に基づく参考情報であり、法的助言ではありません — デプロイ前にCPMLをご自身で確認してください。',
          },
          {
            q: 'Coqui CPMLライセンスを非対話的に承諾するには（Docker / CI）？',
            a: '環境変数COQUI_TOS_AGREEDを1に設定します。Coqui/XTTSライブラリは通常CPMLを表示して「y」の入力を待ちますが、これはDockerビルド、CI、ヘッドレスサーバーでハングします。COQUI_TOS_AGREED=1を設定すると承諾が記録され、プロンプトなしにモデルが読み込まれます。シェルやCIステップでは`export COQUI_TOS_AGREED=1`、Dockerfileでは`ENV COQUI_TOS_AGREED=1`、PythonではTTS()呼び出しの前に`os.environ["COQUI_TOS_AGREED"] = "1"`を使います。これはプロンプトを抑制するだけ — CPMLへの同意であり、商用権を付与するものではありません。',
          },
          {
            q: 'XTTS v2はいくつの音声と言語をサポートしていますか？',
            a: 'XTTS v2には名前付きの音声の固定カタログはありません — クローニングモデルであるため、6秒の参照クリップを与えるとその話者を再現します（リポジトリには手早くテストするための組み込み話者プリセットもいくつか同梱されています）。17言語で音声を生成します：英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ポーランド語、トルコ語、ロシア語、オランダ語、チェコ語、アラビア語、中国語（zh-cn）、日本語、ハンガリー語、韓国語、ヒンディー語。クローニングは多言語対応です：一度音声をクローンすれば、17言語のいずれでも生成できます。',
          },
          {
            q: 'Kokoro vs Piper — どちらの軽量CPU向けTTSを使うべきですか？',
            a: '両方ともGPUなしのCPUで高速に動作し、いずれも寛容なライセンス（PiperはMIT、KokoroはApache 2.0）なので、どちらも商用利用に安全です。最低のレイテンシと最も広い言語カバレッジ（20+言語のボイスパック、Raspberry Pi 5でリアルタイム）が必要なときはPiperを選んでください — 組み込みやスマートホーム音声の標準です。Piperより高い自然さを求め、わずかに多い計算負荷を許容できるときはKokoro（StyleTTS 2アーキテクチャ上に構築された8200万パラメータのモデル）を選んでください；その英語品質はより重いGPUエンジンに近いです。Raspberry Piや常時稼働のアシスタントにはPiper、ミリ秒よりも品質が重要なデスクトップ/サーバーの読み上げにはKokoroです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — ソースコード、ボイスパック、ONNXモデルダウンロード、Raspberry Pi セットアップガイド。',
          '[Coqui TTS on GitHub](https://github.com/coqui-ai/TTS) — ソースコード、モデルリスト、ボイスクローニングドキュメント、Python API リファレンス。',
          '[XTTS v2 ドキュメント](https://docs.coqui.ai/en/latest/models/xtts.html) — XTTS v2 モデルカード、ライセンス（CPML）、ボイスクローニング API。',
          '[F5-TTS on GitHub](https://github.com/SWivid/F5-TTS) — フローマッチング TTS、ゼロショットボイスクローニング、インストールガイド、多言語サポート。',
          '[Tortoise TTS on GitHub](https://github.com/neonbjb/tortoise-tts) — ボイスクローニング対応の高品質マルチボイスTTS、Apache 2.0ライセンス。非常に遅いが商用フレンドリー。',
          '[XTTS-v2 LICENSE.txt（CPML）on Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — XTTS v2を規定するCoqui Public Model Licenseの全文。',
        ],
      },
      countrySpecific: {
        id: 'country-specific-ja',
        title: '日本語TTS完全ガイド：VOICEVOX・Style-Bert-VITS2・XTTS v2',
        content: [
          'VOICEVOXは日本語TTS界のデファクトスタンダードです。完全無料・商用利用可・完全オフライン動作という三拍子が揃い、個人クリエイターからゲームスタジオまで幅広く採用されています。Piper TTS（英語中心）やCoqui XTTS v2（多言語）とは異なるエコシステムを形成しています。',
          '日本語音声合成特有の課題は読み仮名処理（漢字→ひらがな変換）です。VOICEVOX、Style-Bert-VITS2などの日本語特化TTSはこれを内部処理しますが、XTTS v2では日本語テキストに対して事前のフリガナ付与（pyopenjtalk等）が推奨されます。',
        ],
        items: [
          '**VOICEVOX（推奨）：** 完全無料・オフライン・商用可。四国めたん、ずんだもん等の個性的なキャラクター音声が特徴。Windows/Mac/Linux対応。APIモードで他アプリと連携可能。音声クローニング非対応だが日本語品質は最高水準。',
          '**Style-Bert-VITS2：** VOICEVOXより自然な感情表現が可能な上位互換TTS。訓練データがあれば任意話者のクローニングも可能。GPU推奨（CUDA）だがCPUでも動作。日本語アニメ・ゲーム用途で特に人気。',
          '**XTTS v2の日本語対応：** 多言語クローニングが強み。日本語テキストには事前処理が必要：`pip install pyopenjtalk`でフリガナ変換を追加すると品質が大幅改善。サンプル音声30秒あれば任意の話者に近似可能。',
          '**個人情報保護とプライバシー：** 声紋データは生体情報に相当。個人情報保護法（PIPA）の2022年改正により、クラウドTTSサービスへの音声送信には利用者同意が必要。ローカルTTSはこの問題を根本的に回避。',
          '**コミュニティリソース：** VOICEVOX公式サイト（voicevox.hiroshiba.jp）、Style-Bert-VITS2（GitHub）、日本語TTSの最新動向はZenn「#TTS」タグ、Qiita「音声合成」タグで追跡可能。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年の完全オフライン音声アシスタント構築](/ja/power-local-llm/build-local-voice-assistant-2026) — PiperまたはCoqui TTSをWhisper + LLM + TTSパイプラインの出力レイヤーとして使用。',
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/ja/power-local-llm/local-whisper-stt-comparison-2026) — 音声パイプラインの入力側。',
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 完全なマルチモーダルスタックの音声出力レイヤーとしてTTSを統合。',
          '[ローカルLLM向けベストバジェットGPU](/ja/local-llms/best-budget-gpus-local-llm) — XTTS v2、F5-TTS、Bark、またはStyleTTS 2を実行するためのGPU選択。',
          '[コンテンツクリエイター向けベストAI音声合成](/ja/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local：音声品質とレイテンシ比較。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: '本地TTS与声音克隆许可证2026：哪些引擎允许商业使用（Piper、XTTS v2、F5-TTS、Coqui）',
    seoTitle: '本地TTS声音克隆许可证2026：商业使用',
    intro:
      '本地文字转语音引擎能否用于商业产品？这完全取决于许可证，而各引擎的许可证差异很大。Piper、Bark和StyleTTS 2采用MIT许可证，Kokoro和Tortoise采用Apache 2.0 — 四者均可免费商用。Coqui TTS工具包为MPL 2.0（商用有条件）。但两款最受欢迎的声音克隆模型受限：XTTS v2采用Coqui Public Model License（CPML，非商用），F5-TTS采用CC-BY-NC-4.0（非商用）。本指南给出每款引擎的确切许可证、明确的「能否商用？」答案、用于在Docker和CI中非交互式接受CPML的`COQUI_TOS_AGREED`环境变量，以及质量、速度、VRAM和声音克隆的逐项对比 — 让你无需将音频发送到云端、也不会在生产环境中遇到许可证意外，即可选对引擎。（许可证已于2026年6月核实；本文为事实参考，非法律意见 — 商用前请自行阅读各许可证。）',
    metaDescription:
      '哪些本地TTS引擎允许商业使用？Piper（MIT）、XTTS v2（CPML）、F5-TTS（CC-BY-NC）、Coqui、Kokoro与Tortoise的确切许可证，外加COQUI_TOS_AGREED环境变量与声音克隆对比。2026指南。',
    twitterDescription:
      '2026年本地TTS许可证：哪些声音克隆引擎允许商用？Piper/Bark/StyleTTS 2（MIT）、Kokoro/Tortoise（Apache 2.0）、XTTS v2（CPML非商用）、F5-TTS（CC-BY-NC）。外加COQUI_TOS_AGREED环境变量。全部离线。',
    readTime: '阅读约16分钟',
    educationalLevel: 'Intermediate',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper是速度和嵌入式应用的最佳选择。** 完全在CPU上运行，在Raspberry Pi 5上生成实时语音，通过可下载的语音包支持20+种语言。无GPU、无Python复杂性、MIT许可证。',
          '**XTTS v2是2026年本地声音克隆的最佳选择 — 但它是非商用的。** 输入6秒参考音频，它就能在17种语言中克隆声音（4–6 GB GPU VRAM）。CPML许可证为非商用，且自Coqui于2024年1月关闭后已无商业许可证可售 — 请将XTTS v2视为仅限非商用。在Docker/CI中用`COQUI_TOS_AGREED=1`非交互式接受CPML。',
          '**F5-TTS是零样本声音克隆领域快速增长的替代方案。** 它采用流匹配架构而非GPT，从~3秒参考音频克隆声音，实现与XTTS v2相当的质量但推理速度更快。许可证：CC-BY-NC-4.0（仅非商业）。',
          '**Coqui TTS是最灵活的开源TTS工具包。** 它支持多个后端（Tacotron2、VITS、XTTS）、声音克隆和20+种语言，采用MPL 2.0许可证。注：Coqui公司于2024年1月关闭；该项目现由社区维护。',
          '**Bark是唯一生成非语音音频的本地TTS。** 它可以在语音旁边生成笑声、咳嗽、叹气、音乐片段和环境声——适用于创意音频、播客制作和交互式小说。',
          '**StyleTTS 2达到所有开源英文TTS引擎中最高的MOS（平均意见得分）。** 其基于扩散的风格转移为英文叙述产生接近人类的自然效果。仅支持英文，无声音克隆。',
          '**许可证决定商业使用 — 且界限清晰。** 可免费商用：Piper、Bark、StyleTTS 2（MIT）以及Kokoro、Tortoise（Apache 2.0）。商用有条件：Coqui TTS工具包（MPL 2.0，须披露对工具包的修改）。仅限非商用：XTTS v2（CPML）和F5-TTS（CC-BY-NC-4.0） — 两者均需单独协议。商业声音克隆请用Tortoise（Apache 2.0）或基于VITS后端的Coqui工具包（MPL 2.0）。本文为事实参考，非法律意见。',
          '**都无法与大规模商业TTS质量相媲美。** ElevenLabs、Google Text-to-Speech和Azure Speech在一致性、自然度和延迟方面仍然超过所有本地引擎。当隐私、成本或离线操作比绝对质量更重要时，本地TTS是正确选择。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**最快的本地TTS：** Piper — 在Raspberry Pi 5上实时运行，在现代桌面CPU上约为实时速度的10倍。',
          '**最佳声音克隆质量：** XTTS v2 — 6秒参考音频，支持17种语言的跨语言克隆。',
          '**最快的零样本声音克隆（新架构）：** F5-TTS — 约3秒音频，流匹配，在RTX 4070上约为实时速度的3〜5倍。',
          '**最灵活的开源工具包：** Coqui TTS — 支持VITS、Tacotron2、XTTS后端，20+语言模型。',
          '**唯一的生成式音频（非语音声音）：** Bark — 笑声、叹气、音乐、环境声。所有引擎中最慢。',
          '**最佳英语朗读质量：** StyleTTS 2 — 基于扩散的风格转移，在LJSpeech基准测试中接近人类MOS。',
          '**可免费商用：** Piper、Bark、StyleTTS 2（MIT）；Kokoro、Tortoise（Apache 2.0）；Coqui TTS工具包（MPL 2.0，有条件）。**非商用：** XTTS v2（CPML）、F5-TTS（CC-BY-NC-4.0）。',
          '**XTTS v2的声音与语言：** 无固定声音列表 — 你提供一段6秒参考音频，它便克隆该声音。模型附带内置说话人预设，并能生成17种语言：en、es、fr、de、it、pt、pl、tr、ru、nl、cs、ar、zh-cn、ja、hu、ko、hi。',
          '**XTTS v2 VRAM：** 模型权重约2 GB；运行最低4 GB，实时推理推荐4–6 GB。',
          '**在CI/Docker中接受CPML：** `export COQUI_TOS_AGREED=1` — 无需交互式提示。',
          '**VRAM要求：** Piper：仅CPU。Kokoro：CPU / 1〜2 GB。StyleTTS 2：2〜4 GB。Coqui VITS：2〜4 GB。F5-TTS：3〜5 GB。XTTS v2：4〜6 GB。Bark：4〜8 GB。Tortoise：4〜8 GB。',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: '为什么本地TTS很重要',
        content: '云端TTS服务（ElevenLabs、Google TTS、Amazon Polly、Azure Speech）使用方便，但存在按字符计费、音频数据保留策略以及网络往返延迟等问题。本地TTS消除了所有这三个问题。',
        items: [
          '**隐私：** 您的文本内容永远不会离开您的设备。对医疗口述、法律摘要、私人日记朗读或机密文件读取至关重要。',
          '**成本：** 云端TTS定价通常为每百万字符4〜30美元。每月生成1000万字符的开发者通过一次性本地部署每月可节省40〜300美元。',
          '**延迟：** 无网络往返。Piper在CPU上50ms内生成第一个音频令牌 — 比任何云端TTS往返都快。',
          '**自定义：** 声音克隆（XTTS v2、F5-TTS、Coqui）允许您从几秒钟的音频创建自定义声音。云提供商每个克隆声音收取10美元以上/月。',
          '**离线操作：** 在飞机上、安全设施中、没有互联网的偏远地区均可工作。适用于信息亭和设备的嵌入式语音界面。',
          '**智能家居：** Piper是常驻本地语音界面的主流TTS层，在Raspberry Pi上实时运行，无需GPU。要了解集成到Home Assistant的完整离线语音助手，请参阅[智能家居本地语音助手 →](/zh/smart-home/local-voice-assistant-smart-home)。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '所有本地TTS引擎按照生产部署最重要的指标进行比较。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Piper在CPU上最快；XTTS v2提供最佳声音克隆质量；F5-TTS通过更新的架构提供零样本克隆；Bark是唯一能产生笑声和音乐的引擎；StyleTTS 2具有最佳的英语朗读自然度。' },
          { type: 'plain-terms', text: '对于大多数离线TTS需求：速度和简洁性选Piper，宽松许可证的声音克隆选Coqui，有GPU的最佳克隆质量选XTTS v2，更快零样本克隆的新架构选F5-TTS。' },
        ],
        note: 'MOS（平均意见得分）在1〜5的量表上，5表示与人类语音无法区分。分数是近似值，基于已发布的基准测试或社区评估。MOS因测试句子和听众群体而有显著差异。人类参考MOS：约4.5。',
        columns: ['工具', '质量', '速度', '声音克隆', '多语言', 'VRAM', '许可证', 'MOS（英语）'],
        rows: [
          { '工具': 'Piper', '质量': '良好', '速度': '非常快（CPU）', '声音克隆': '否', '多语言': '是（20+语言）', 'VRAM': '仅CPU', '许可证': 'MIT', 'MOS（英语）': '~3.5' },
          { '工具': 'Kokoro', '质量': '很好', '速度': '快（CPU）', '声音克隆': '否', '多语言': '英语 + 扩展中', 'VRAM': 'CPU / 1〜2 GB', '许可证': 'Apache 2.0', 'MOS（英语）': '~4.0' },
          { '工具': 'Coqui TTS', '质量': '很好', '速度': '中等', '声音克隆': '是', '多语言': '是（20+语言）', 'VRAM': '2〜4 GB', '许可证': 'MPL 2.0', 'MOS（英语）': '~3.8' },
          { '工具': 'XTTS v2', '质量': '优秀', '速度': '慢', '声音克隆': '是（最佳）', '多语言': '是（17种语言）', 'VRAM': '4〜6 GB', '许可证': 'CPML（非商用）', 'MOS（英语）': '~4.1' },
          { '工具': 'F5-TTS', '质量': '优秀', '速度': '中快', '声音克隆': '是（零样本）', '多语言': '是（多语言）', 'VRAM': '3〜5 GB', '许可证': 'CC-BY-NC-4.0', 'MOS（英语）': '~4.1' },
          { '工具': 'Bark', '质量': '独特 / 可变', '速度': '慢', '声音克隆': '有限', '多语言': '是（多语言）', 'VRAM': '4〜8 GB', '许可证': 'MIT', 'MOS（英语）': '~3.2〜4.0（可变）' },
          { '工具': 'StyleTTS 2', '质量': '优秀（英语）', '速度': '中等', '声音克隆': '否', '多语言': '主要英语', 'VRAM': '2〜4 GB', '许可证': 'MIT', 'MOS（英语）': '~4.3' },
          { '工具': 'Tortoise', '质量': '优秀', '速度': '非常慢（每句数分钟）', '声音克隆': '是', '多语言': '主要英语', 'VRAM': '4〜8 GB', '许可证': 'Apache 2.0', 'MOS（英语）': '~4.2' },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: '首次音频延迟比较',
        content: '首次音频延迟是从文本输入到第一个可听输出的时间。对于语音助手和交互式应用程序至关重要。对于批处理（有声书、播客制作），总吞吐量比首次音频延迟更重要。',
        columns: ['引擎', '首次音频（RTX 4070）', '首次音频（CPU）', '首次音频（M5 Pro）'],
        rows: [
          { '引擎': 'Piper', '首次音频（RTX 4070）': '~30 ms', '首次音频（CPU）': '~50 ms', '首次音频（M5 Pro）': '~40 ms' },
          { '引擎': 'Kokoro', '首次音频（RTX 4070）': '~50 ms', '首次音频（CPU）': '~80 ms', '首次音频（M5 Pro）': '~60 ms' },
          { '引擎': 'Coqui VITS', '首次音频（RTX 4070）': '~100 ms', '首次音频（CPU）': '~300 ms', '首次音频（M5 Pro）': '~150 ms' },
          { '引擎': 'StyleTTS 2', '首次音频（RTX 4070）': '~150 ms', '首次音频（CPU）': '~500 ms', '首次音频（M5 Pro）': '~200 ms' },
          { '引擎': 'F5-TTS', '首次音频（RTX 4070）': '~200 ms', '首次音频（CPU）': '~800 ms', '首次音频（M5 Pro）': '~300 ms' },
          { '引擎': 'XTTS v2', '首次音频（RTX 4070）': '~300 ms', '首次音频（CPU）': '~1500 ms', '首次音频（M5 Pro）': '~500 ms' },
          { '引擎': 'Bark', '首次音频（RTX 4070）': '~500 ms', '首次音频（CPU）': '~3000 ms', '首次音频（M5 Pro）': '~800 ms' },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — 最快的轻量级选项',
        content: '**Piper是由Rhasspy为家庭自动化和嵌入式应用开发的快速本地TTS系统。** 它使用基于VITS的神经架构，通过onnxruntime后端在语音数据集上训练 — 经过优化，可在Raspberry Pi 4或5上无需GPU实时运行。',
        items: [
          '**架构：** 带有ONNX推理的VITS神经TTS。专为单板计算机和嵌入式Linux设计。',
          '**安装：** `pip install piper-tts`。预训练语音包可在Hugging Face的Piper voices存储库获取。',
          '**使用：** `echo "你好，世界" | piper --model zh_CN-huayan-medium.onnx --output_file output.wav`',
          '**语音包：** 20+种语言，每种语言多个语音选项。每个语音包是20〜200 MB的ONNX模型文件。',
          '**速度：** 在现代桌面CPU上约为实时速度的10倍。在Raspberry Pi 5上实时运行。首次音频延迟低于50ms。',
          '**Apple Silicon：** 在M5 Pro（CPU，ARM NEON）上约为实时速度的15倍。无需GPU原生运行 — 在Mac上性能出色。',
          '**收听示例：** [Piper语音示例](https://rhasspy.github.io/piper-samples/)',
          '**最适合：** 家庭助手、信息亭设备、嵌入式语音界面、无GPU可用时注重隐私的朗读场景。',
          '**限制：** 无声音克隆。质量"良好" — 听起来自然，但与XTTS v2或StyleTTS 2相比明显是合成音。',
          '**许可证：** MIT — 完全商业化，无限制。',
          '**Kokoro TTS — Piper的替代品：** Kokoro TTS是轻量级类别中Piper的新兴替代品。它在CPU上保持快速的同时实现比Piper更高的自然度。采用Apache 2.0许可证。如果Piper的质量不能满足您的需求，但您无法负担GPU VRAM，[Kokoro](https://github.com/hexgrad/kokoro)值得测试。',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — 最佳开源全能工具包',
        content: '**Coqui TTS是一个支持多种模型架构和声音克隆的Python文字转语音工具包。** 由Coqui公司开发（2024年1月已停止运营），现由开源社区维护。该工具包支持Tacotron2、VITS和XTTS后端。',
        items: [
          '**安装：** `pip install TTS`。模型在首次使用时自动下载。',
          '**声音克隆：** 提供6秒以上的参考音频。`tts --text "你好" --model_name tts_models/zh-CN/baker/tacotron2-DDC-GST --speaker_wav sample.wav --out_path output.wav`',
          '**后端选项：** VITS（最快，质量良好）、Tacotron2（较旧，较慢）、XTTS（最佳质量，参见XTTS v2部分）。',
          '**语言：** 通过`tts --list_models`可获取20+语言模型。',
          '**VRAM：** VITS后端2〜4 GB；XTTS后端4〜6 GB。',
          '**Apple Silicon：** 在M5 Pro（CPU）上约为实时速度的8倍。无Metal GPU加速。可用于批量生成。',
          '**社区状态：** Coqui公司于2024年1月关闭。开源仓库（`coqui-ai/TTS`）由社区维护。无活跃商业支持。',
          '**许可证：** MPL 2.0 — 允许商业使用，但必须披露修改的源代码。',
          '**最适合：** 希望使用开源工具包和宽松许可证进行声音克隆的开发者。',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — 最佳声音克隆质量',
        content: '**XTTS v2（由Coqui开发）是2026年本地可用的最高质量声音克隆引擎。** 它使用具有跨语言迁移的GPT架构 — 用英语克隆一个声音，并用同样的6秒音频以西班牙语、德语、法语或其他14种语言说话。',
        items: [
          '**架构：** 带有说话人条件的GPT TTS。用于韵律建模的视觉变换器。',
          '**声音克隆：** 6秒参考音频即可产生令人信服的声音克隆。3秒可产生可接受的质量。',
          '**跨语言克隆：** 用一种语言克隆声音，用相同的声音特征生成17种不同语言的语音。',
          '**语言（17种）：** 英语、西班牙语、法语、德语、意大利语、葡萄牙语、波兰语、土耳其语、俄语、荷兰语、捷克语、阿拉伯语、中文（zh-cn）、日语、匈牙利语、韩语和印地语。韩语和印地语在XTTS v2.0.3中加入。',
          '**「XTTS v2的声音」：** 没有固定的命名声音目录。XTTS v2是克隆模型 — 你提供一段6秒参考音频，它便复现该说话人。仓库附带少量内置说话人预设供快速测试，但预期的工作流是提供你自己的`speaker_wav`。',
          '**VRAM：** 模型权重约2 GB。实际最低4 GB VRAM；实时推理推荐4〜6 GB。可在CPU上运行但约慢5〜10倍。',
          '**速度：** 慢 — 在RTX 4070上约以实时速度的2倍生成。不适合实时语音助手管道。',
          '**Apple Silicon：** 在M5 Pro（CPU，无Metal加速）上约为实时速度的3倍。可用于批量音频生成，不适合实时语音助手输出。',
          '**收听示例：** [Hugging Face上的XTTS v2演示](https://huggingface.co/spaces/coqui/xtts)',
          '**许可证：** CPML（Coqui Public Model License） — 非商用。CPML允许对模型**及其音频输出**进行个人、研究和爱好用途，但未经单独的商业协议禁止商业使用（任何付费产品、SaaS、广告支持内容或客户工作）。Coqui Inc于2024年1月关闭，因此目前没有任何实体出售XTTS v2商业许可证 — 实际上请将XTTS v2视为仅限非商用。`COQUI_TOS_AGREED`环境变量参见[CPML非交互式接受](#cpml-noninteractive)章节。',
        ],
        codeBlock: `from TTS.api import TTS\n\n# Load XTTS v2 model\ntts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")\n\n# Clone voice from 6-second reference audio and synthesize in any of 17 languages\ntts.tts_to_file(\n    text="Bonjour, je suis votre assistant vocal.",\n    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker\n    language="fr",                        # Output in French using the cloned voice\n    file_path="output.wav"\n)`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'XTTS v2受CPML（非商用）许可证约束。商业使用 — 产品、SaaS、服务或付费客户工作 — 需要单独的商业协议，而自Coqui Inc于2024年1月关闭后，目前已无此类协议可购买。如需商业声音克隆，请使用Tortoise（Apache 2.0）或基于VITS后端的Coqui TTS工具包（MPL 2.0）。本文为事实参考，非法律意见 — 部署前请自行阅读CPML。' },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — 超越语音的生成式音频',
        content: '**Bark（由Suno AI开发）是一个生成式文字转音频模型，可从文本提示生成语音、音乐、笑声、咳嗽、叹息和环境声音。** 它不是传统的TTS引擎 — 而是将文本提示解释为音频生成指令的生成模型。',
        items: [
          '**独特功能：** 在文本中加入`[laughs]`、`[sighs]`、`[clears throat]`、`[music]`或`[sound effect: wind]`，Bark会在语音旁边生成这些声音。',
          '**不像传统TTS那样可控：** 相同输入的输出在不同运行之间会有变化。质量不一致 — 有些输出出色，有些有噪音或难以理解的片段。',
          '**速度：** 慢 — 即使在RTX 4090上也比实时速度慢2〜4倍。不适合交互式应用程序。',
          '**Apple Silicon：** 在M5 Pro（CPU，MPS部分）上约为实时速度的1.5倍。MPS（Metal Performance Shaders）支持不完整 — 大多数推理仍回退到CPU。',
          '**最适合：** 创意音频、带音效的播客制作、互动小说、实验性语音应用程序。',
          '**VRAM：** 4〜8 GB GPU。在CPU上运行质量明显较低。',
          '**安装：** `pip install suno-bark`。模型在首次运行时下载（约2 GB）。',
          '**许可证：** MIT — 完全商业化。',
          '**限制：** 无可靠的声音克隆。Bark附带的"语音预设"是近似的 — 不是真正的声音克隆系统。',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — 最高自然质量',
        content: '**StyleTTS 2是一个基于扩散的TTS模型，在LJSpeech基准测试上达到接近人类的MOS（平均意见得分）。** 它使用扩散进行说话风格迁移 — 生成比基于VITS的模型更自然、更富表现力的语音。',
        items: [
          '**架构：** 基于扩散的风格迁移。从学习到的说话风格分布中采样，而不是将文本确定性地映射到音频。',
          '**质量：** 在LJSpeech基准测试中，所有开源英语TTS引擎中MOS分数最高。',
          '**最适合：** 有声书朗读、专业配音、播客制作。',
          '**安装：** 克隆GitHub仓库，安装要求（`pip install -r requirements.txt`），下载模型检查点（约500 MB）。',
          '**语言支持：** 主要是英语。不建议用于非英语场景。',
          '**声音克隆：** 不支持。StyleTTS 2只使用训练的说话人声音生成。',
          '**VRAM：** 2〜4 GB GPU。在RTX 4070上约为实时速度的5〜8倍，比XTTS v2更快。',
          '**Apple Silicon：** 在M5 Pro（CPU）上约为实时速度的6倍。无Metal加速。',
          '**许可证：** MIT — 完全商业化。',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — 零样本声音克隆，完全开放',
        content: '**F5-TTS是一个具有零样本声音克隆的流匹配TTS模型 — 无需微调，从约3秒参考音频克隆任何声音。**',
        items: [
          '**架构：** 流匹配（扩散变体方法），而非XTTS v2使用的GPT架构。通常以更快的推理速度实现具有竞争力的质量。',
          '**声音克隆：** 约3秒参考音频即可。不需要微调。',
          '**质量：** 在英语上与XTTS v2具有竞争力。社区评估中MOS分数约4.1。',
          '**速度：** 在RTX 4070上约为实时速度的3〜5倍 — 比XTTS v2更快。',
          '**语言：** 对英语和中文有强力支持，对其他语言的支持正在扩展。',
          '**Apple Silicon：** 在M5 Pro（CPU）上约为实时速度的2倍。目前无Metal加速。',
          '**VRAM：** 建议3〜5 GB GPU。',
          '**安装：** `pip install f5-tts`或从GitHub克隆。',
          '**许可证：** CC-BY-NC-4.0 — 仅非商业使用。商业使用需要单独协议。',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: '许可证与商业使用 — 我能商用这款TTS引擎吗？',
        content: '许可证是生产使用中最重要的单一因素，它把这些引擎清晰地分成两类。宽松许可证的引擎（MIT、Apache 2.0）可以自由地装入商业产品发布。受限引擎（CPML、CC-BY-NC-4.0）为非商用 — 将其用于付费产品、SaaS、广告支持内容或客户工作需要单独的协议。下表给出每款引擎的确切许可证及直接的「我能商用吗？」答案。',
        snippetBlocks: [
          { type: 'one-sentence', text: '在商业产品中使用本地TTS：Piper、Bark、StyleTTS 2（MIT）、Kokoro和Tortoise（Apache 2.0），以及基于VITS/Tacotron2后端的Coqui TTS工具包（MPL 2.0）均被允许；XTTS v2（CPML）和F5-TTS（CC-BY-NC-4.0）为非商用。' },
          { type: 'plain-terms', text: '两款最受欢迎的声音克隆模型 — XTTS v2和F5-TTS — 未经单独许可证不能商用。商业声音克隆请选择Tortoise（Apache 2.0）或基于VITS后端的Coqui工具包（MPL 2.0）。' },
        ],
        columns: ['工具', '许可证', '商业使用？', '主要条件'],
        rows: [
          { '工具': 'Piper', '许可证': 'MIT', '商业使用？': '是 — 无限制', '主要条件': '包含MIT声明；检查每个语音模型的许可证' },
          { '工具': 'Kokoro', '许可证': 'Apache 2.0', '商业使用？': '是 — 无限制', '主要条件': '包含Apache 2.0声明' },
          { '工具': 'Coqui TTS（工具包）', '许可证': 'MPL 2.0', '商业使用？': '是 — 有条件', '主要条件': '披露对工具包文件的任何修改的源代码' },
          { '工具': 'XTTS v2（模型）', '许可证': 'CPML', '商业使用？': '否 — 非商用', '主要条件': '商用需协议；自Coqui关闭（2024年1月）后无协议可售' },
          { '工具': 'F5-TTS', '许可证': 'CC-BY-NC-4.0', '商业使用？': '否 — 非商用', '主要条件': '非商用限制延续至微调（Emilia训练数据）' },
          { '工具': 'Bark', '许可证': 'MIT', '商业使用？': '是 — 无限制', '主要条件': '包含MIT版权声明' },
          { '工具': 'StyleTTS 2', '许可证': 'MIT', '商业使用？': '是 — 无限制', '主要条件': '包含MIT版权声明' },
          { '工具': 'Tortoise', '许可证': 'Apache 2.0', '商业使用？': '是 — 无限制', '主要条件': '署名；对任何克隆声音取得同意' },
        ],
        callouts: [
          { type: 'note', text: 'Coqui TTS（工具包，MPL 2.0）和XTTS v2（特定模型权重，CPML）的许可证不同。您可以在商业产品中使用基于VITS或Tacotron2后端的Coqui TTS工具包（MPL 2.0）。CPML非商用限制专门适用于XTTS v2模型权重及其音频输出 — 而非工具包代码。' },
          { type: 'warning', text: '本文为事实参考，非法律意见。许可证会变更，边缘情形（声音同意、数据集条款、每个语音模型的许可证）也很重要。商业部署前请自行阅读每款引擎的许可证文件，并咨询律师。' },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: '非交互式接受CPML（COQUI_TOS_AGREED）',
        content: '首次加载受CPML约束的XTTS / Coqui模型时，库会打印许可证条款并等待你输入「y」以接受。该交互式提示会在Docker构建、CI管道和无头服务器中卡住。要非交互式接受CPML，请将`COQUI_TOS_AGREED`环境变量设为`1` — 这会记录你在模型加载前已阅读并同意Coqui Public Model License。它不会改变许可证：CPML仍为非商用，设置该变量是你对这些条款的同意，而非对它们的豁免。',
        snippetBlocks: [
          { type: 'one-sentence', text: '设置环境变量COQUI_TOS_AGREED=1，即可在Docker、CI或任何无头环境中无需交互式提示地接受Coqui Public Model License（CPML）。' },
          { type: 'plain-terms', text: '在shell或Dockerfile中使用`export COQUI_TOS_AGREED=1`；在Python中于导入或加载模型前设置`os.environ["COQUI_TOS_AGREED"] = "1"`。两种方式都能让模型加载时无需等待键盘输入。' },
        ],
        items: [
          '**Shell / CI：** 运行脚本前执行`export COQUI_TOS_AGREED=1`。',
          '**Docker：** 在Dockerfile中加入`ENV COQUI_TOS_AGREED=1`，或向`docker run`传入`-e COQUI_TOS_AGREED=1`。',
          '**Python（在模型加载前设置）：** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — 必须在`TTS(...)`实例化XTTS模型之前运行。',
          '**它的作用：** 记录对CPML的非交互式接受，使模型加载不会卡在`y/n`提示上。它不是商业许可证，也不会移除非商用限制。',
        ],
        codeBlock: `# 1) Shell / CI — accept the CPML once for the session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — bake acceptance into the image
# ENV COQUI_TOS_AGREED=1

# 3) Python — set it before the model is created
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # must be set BEFORE the TTS() call below

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Model now loads without the interactive license prompt`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'COQUI_TOS_AGREED=1仅抑制交互式提示 — 它是你对CPML的接受，而CPML仍为非商用许可证。它不会授予XTTS v2的商业权利。' },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '本地TTS与ElevenLabs和云端TTS的比较',
        content: 'ElevenLabs、Google Text-to-Speech和Azure Speech在2026年仍是TTS的质量上限。',
        items: [
          '**质量上限：** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper。',
          '**延迟：** 本地Piper（首次音频30〜50 ms）比任何ElevenLabs API往返（300〜500 ms）都快。',
          '**成本：** ElevenLabs按套餐收费5〜99美元/月。本地TTS在一次性硬件后成本为0美元。',
          '**声音克隆：** ElevenLabs Instant Voice Clone ≈ XTTS v2质量。ElevenLabs Professional Voice Clone超过任何本地引擎。',
          '**隐私：** 本地TTS = 音频数据不发送到任何地方。ElevenLabs = 音频在其服务器上处理。',
          '**离线能力：** 本地 = 完全离线。ElevenLabs = 需要互联网。',
          '**何时使用云端：** 专业配音制作、需要最高质量的面向客户产品。',
          '**何时使用本地：** 隐私敏感音频、嵌入式设备、成本敏感的批量处理、离线环境。',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '如何选择',
        content: '从您的需求到正确TTS引擎的决策流程：',
        snippetBlocks: [
          { type: 'one-sentence', text: '需要声音克隆？→ XTTS v2（最佳质量）或F5-TTS（更快，新架构）或Coqui TTS（开放许可证）。需要CPU速度？→ Piper。需要创意音频？→ Bark。需要最佳英语质量？→ StyleTTS 2。' },
          { type: 'plain-terms', text: '声音克隆：质量选XTTS v2，速度选F5-TTS，宽松许可证选Coqui VITS。CPU/Raspberry Pi：仅Piper。播客音效：Bark。英语有声书：StyleTTS 2。' },
        ],
        items: [
          '**需要声音克隆？** → XTTS v2（最佳质量，CPML）或F5-TTS（新架构，更快，CC-BY-NC-4.0）或Coqui VITS（良好质量，MPL 2.0）。不需要克隆：Piper（速度）或StyleTTS 2（质量）。',
          '**需要仅CPU / Raspberry Pi？** → 仅Piper。Kokoro是更高质量的CPU替代品（Apache 2.0）。所有其他引擎都需要GPU。',
          '**需要带有非语音声音的创意音频？** → Bark。没有其他本地引擎能原生产生笑声、叹息或音乐。',
          '**需要最佳英语朗读质量？** → StyleTTS 2。',
          '**需要多语言支持？** → XTTS v2（17种语言），Coqui（20+），Piper（20+语音包）。',
          '**需要完全商业化的MIT许可证？** → Piper、Bark或StyleTTS 2。',
          '**构建语音助手管道？** → 使用Piper实现低延迟TTS输出。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用XTTS v2进行声音克隆需要多少参考音频？',
            a: 'XTTS v2需要至少3秒的干净参考音频，6+秒会得到明显更好的效果。音频必须是单个扬声器，背景噪声和音乐最少。高质量的源材料比压缩音频产生更好的克隆。',
          },
          {
            q: '我可以在商业产品中使用Piper TTS吗？',
            a: '可以。Piper在MIT许可证下授权，允许无限制的商业使用。您必须在产品中包含MIT许可证声明。语音模型（ONNX文件）可能具有单个语音的单独许可证。',
          },
          {
            q: '哪个本地TTS引擎具有最佳的多语言支持？',
            a: 'XTTS v2支持17种语言的多语言声音克隆——所有本地引擎中最令人印象深刻的多语言功能。Coqui TTS拥有20+种语言模型但缺乏多语言克隆。Piper为快速CPU推理拥有20+种语言语音包。',
          },
          {
            q: '哪个本地TTS引擎听起来最像人类？',
            a: '英文叙述方面StyleTTS 2最佳——它达到所有开源英文TTS引擎的最高MOS分数（~4.3 对人类参考 ~4.5）。XTTS v2和F5-TTS在克隆语音自然度方面有竞争力（~4.1）。',
          },
          {
            q: '我可以商用XTTS v2吗？',
            a: '不可以，除非有单独的商业协议。XTTS v2在Coqui Public Model License（CPML）下发布，CPML允许对模型及其音频输出进行个人、研究和爱好用途，但禁止商业使用 — 任何付费产品、SaaS、广告支持内容或客户工作。Coqui Inc于2024年1月关闭，因此目前没有任何实体出售XTTS v2商业许可证；实际上请将XTTS v2视为仅限非商用。商业声音克隆请使用Tortoise（Apache 2.0）或基于VITS后端的Coqui TTS工具包（MPL 2.0）。本文为事实参考，非法律意见 — 部署前请自行阅读CPML。',
          },
          {
            q: '如何非交互式地接受Coqui CPML许可证（Docker / CI）？',
            a: '将环境变量COQUI_TOS_AGREED设为1。Coqui/XTTS库通常会打印CPML并等待你输入「y」，这会在Docker构建、CI和无头服务器中卡住。设置COQUI_TOS_AGREED=1会记录你的接受，使模型加载时无需提示。在shell或CI步骤中使用`export COQUI_TOS_AGREED=1`，在Dockerfile中使用`ENV COQUI_TOS_AGREED=1`，或在Python中于TTS()调用前使用`os.environ["COQUI_TOS_AGREED"] = "1"`。它仅抑制提示 — 它是你对CPML的同意，并不授予商业权利。',
          },
          {
            q: 'XTTS v2支持多少声音和语言？',
            a: 'XTTS v2没有固定的命名声音目录 — 它是克隆模型，你提供一段6秒参考音频，它便复现该说话人（仓库也附带少量内置说话人预设供快速测试）。它能生成17种语言的语音：英语、西班牙语、法语、德语、意大利语、葡萄牙语、波兰语、土耳其语、俄语、荷兰语、捷克语、阿拉伯语、中文（zh-cn）、日语、匈牙利语、韩语和印地语。克隆是跨语言的：克隆一次声音即可用17种语言中的任意一种生成。',
          },
          {
            q: 'Kokoro与Piper — 该用哪款轻量级CPU TTS？',
            a: '两者都在CPU上无需GPU快速运行，且都采用宽松许可证（Piper为MIT，Kokoro为Apache 2.0），因此都可安全商用。当你需要最低延迟和最广的语言覆盖（20+种语言语音包，在Raspberry Pi 5上实时）时选Piper — 它是嵌入式和智能家居语音的标准。当你想要比Piper更高的自然度、且能接受略多的算力时选Kokoro（一个基于StyleTTS 2架构构建的82M参数模型）；其英语质量更接近较重的GPU引擎。Raspberry Pi或常驻助手用Piper；质量比毫秒更重要的桌面/服务器朗读用Kokoro。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资源',
        items: [
          '[Piper TTS on GitHub](https://github.com/rhasspy/piper) — 源代码、语音包、ONNX模型下载和Raspberry Pi设置指南。',
          '[Coqui TTS on GitHub](https://github.com/coqui-ai/TTS) — 源代码、模型列表、声音克隆文档和Python API参考。',
          '[XTTS v2文档](https://docs.coqui.ai/en/latest/models/xtts.html) — XTTS v2模型卡、许可证（CPML）和声音克隆API。',
          '[F5-TTS on GitHub](https://github.com/SWivid/F5-TTS) — 流匹配TTS、零样本声音克隆、安装指南和多语言支持。',
          '[Tortoise TTS on GitHub](https://github.com/neonbjb/tortoise-tts) — 高质量多声音TTS与声音克隆，Apache 2.0许可证。非常慢但对商用友好。',
          '[Hugging Face上的XTTS-v2 LICENSE.txt（CPML）](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — 管辖XTTS v2的Coqui Public Model License全文。',
        ],
      },
      countrySpecific: {
        id: 'country-specific-zh',
        title: '繁體中文TTS指南：台灣與香港的本地語音合成選擇',
        content: [
          '普通話（Mandarin）文字轉語音是XTTS v2最成熟的非英語能力之一。對於台灣和香港用戶，選擇支援繁體中文輸入的TTS引擎至關重要——大多數中文TTS預設以簡體字訓練，繁體字處理需要額外設定。',
          '台灣本地有幾個值得關注的TTS項目：由成功大學、交通大學等機構開發的中文語音合成研究成果，以及部分開源的台語（Taiwanese Hokkien）TTS實驗項目，這些都是雲端TTS服務無法替代的本地資源。',
        ],
        items: [
          '**XTTS v2繁體中文設定：** 語言代碼使用`zh-cn`（XTTS v2目前不區分繁簡，但輸入繁體字可正確發音）。建議在提示詞中加入「請使用台灣國語腔調」以獲得更接近台灣口音的輸出。',
          '**Coqui TTS中文模型：** Coqui提供`tts_models/zh-CN/baker/tacotron2-DDC`作為基礎中文TTS。Baker語料庫以女聲普通話為主，品質穩定但音色單一。適合需要穩定輸出的商業用途。',
          '**聲音克隆（Voice Cloning）注意事項：** 台灣和香港均受個人資料保護法規管轄（台灣個資法、香港《個人資料（私隱）條例》）。使用他人聲音進行克隆需取得明確同意。用於教育、無障礙服務的自身聲音克隆不受此限制。',
          '**台語（Taiwanese）TTS現況：** 目前無成熟的本地台語TTS方案。國立臺灣大學的TWNTTS研究項目持續進行中，但尚未有可直接部署的版本。普通話TTS是目前唯一實用選項。',
          '**硬體建議（台灣市場）：** MacBook M系列（M1/M2/M3/M4）是台灣開發者主流。XTTS v2在M2 Pro 16GB RAM上可實時執行，無需GPU外接卡。NVIDIA GPU用戶（RTX 3060以上）可使用CUDA加速版本。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026年构建完全离线语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — 将Piper或Coqui TTS用作完整Whisper + LLM + TTS管道的输出层。',
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/zh/power-local-llm/local-whisper-stt-comparison-2026) — 语音管道的输入侧。',
          '[本地多模态AI管道2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 将TTS集成为完整多模态栈的语音输出层。',
          '[本地LLM最佳入门GPU](/zh/local-llms/best-budget-gpus-local-llm) — 运行XTTS v2、F5-TTS、Bark或StyleTTS 2的GPU选择指南。',
          '[内容创作者最佳AI文本转语音](/zh/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local：语音质量与延迟对比。',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Licencias de TTS local y clonación de voz 2026: qué motores permiten uso comercial (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: 'Licencias TTS local 2026: uso comercial y clonación',
    intro:
      '¿Puedes usar un motor de síntesis de voz local en un producto comercial? Depende por completo de la licencia, y las licencias difieren marcadamente. Piper, Bark y StyleTTS 2 se distribuyen bajo MIT, Kokoro y Tortoise bajo Apache 2.0 — los cuatro libres para uso comercial. El kit de herramientas Coqui TTS es MPL 2.0 (comercial con condiciones). Pero los dos modelos de clonación de voz más populares están restringidos: XTTS v2 usa la Coqui Public Model License (CPML, no comercial) y F5-TTS usa CC-BY-NC-4.0 (no comercial). Esta guía da la licencia exacta de cada motor, una respuesta clara a "¿puedo usar esto comercialmente?" por motor, la variable de entorno COQUI_TOS_AGREED para aceptar la CPML de forma no interactiva en Docker y CI, y una comparación directa en calidad, velocidad, VRAM y clonación de voz — para que elijas el motor correcto sin enviar audio a la nube y sin una sorpresa de licencia en producción. (Licencias verificadas en junio de 2026; esto es referencia factual, no asesoramiento legal — lee cada licencia tú mismo antes del uso comercial.)',
    metaDescription:
      '¿Qué motores TTS locales permiten uso comercial? Licencias de Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) y Coqui, más la variable COQUI_TOS_AGREED. Guía 2026.',
    twitterDescription:
      'Licencias TTS local 2026: ¿qué motores de clonación de voz permiten uso comercial? Piper/Bark/StyleTTS 2 (MIT), Kokoro/Tortoise (Apache 2.0), XTTS v2 (CPML no comercial), F5-TTS (CC-BY-NC). Más la variable COQUI_TOS_AGREED. Todo offline.',
    audience:
      'Desarrolladores, creadores, creadores de contenido y usuarios centrados en la privacidad que quieren síntesis de voz y clonación de voz sin costos de API en la nube ni exposición de datos.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'síntesis de voz local',
    targetKeywords: [
      'TTS local 2026',
      'mejor TTS local',
      'clonación de voz local',
      'piper vs coqui',
      'XTTS v2 clonación de voz',
      'F5-TTS clonación de voz',
      'F5-TTS local',
      'clonación de voz offline',
      'bark TTS',
      'StyleTTS 2',
      'configurar piper TTS',
      'coqui TTS sin conexión',
    ],
    current_models_mentioned: [
      'Piper TTS',
      'Coqui TTS',
      'XTTS v2',
      'F5-TTS',
      'Bark',
      'StyleTTS 2',
      'Kokoro TTS',
      'Tortoise TTS',
    ],
    current_hardware_mentioned: [
      'CPU (x86/ARM)',
      'Raspberry Pi',
      '2–4 GB GPU',
      '3–5 GB GPU',
      '4–6 GB GPU',
      '4–8 GB GPU',
      'Apple M5 Pro',
      'RTX 4070',
    ],
    leadAnswerBlock:
      '**Para uso comercial, elige un motor TTS local con licencia permisiva: Piper, Bark y StyleTTS 2 son MIT; Kokoro y Tortoise son Apache 2.0 — todos libres para productos comerciales.** El kit de herramientas Coqui TTS es MPL 2.0 (comercial permitido si divulgas los cambios al código fuente del kit). El detalle está en los dos modelos de clonación de voz más conocidos: **XTTS v2 es no comercial bajo la Coqui Public Model License (CPML)** y **F5-TTS es no comercial bajo CC-BY-NC-4.0** — ambos prohíben el uso comercial sin un acuerdo separado, y como Coqui Inc cerró en enero de 2024 actualmente no hay nadie que venda una licencia comercial de XTTS v2, así que trátalo como solo no comercial. En cuanto a capacidad: Piper es el más rápido en CPU (tiempo real en una Raspberry Pi 5, sin GPU); XTTS v2 es el clon de voz de mayor calidad (6 segundos de audio de referencia → 17 idiomas, 4–6 GB de VRAM); F5-TTS clona a partir de ~3 segundos con inferencia de flow-matching más rápida; Bark genera de forma única risas, suspiros y sonido ambiental; StyleTTS 2 tiene la narración en inglés más natural (sin clonación); Tortoise es de muy alta calidad pero extremadamente lento. Esto es referencia factual, no asesoramiento legal — verifica cada licencia tú mismo antes de un despliegue comercial.',
    quickAnswerTop: {
      es: {
        question: '¿Qué motores TTS locales puedo usar comercialmente en 2026?',
        answer:
          'Para uso comercial, elige un motor con licencia permisiva: Piper, Bark y StyleTTS 2 (MIT) y Kokoro y Tortoise (Apache 2.0) son todos libres para productos comerciales; el kit de herramientas Coqui TTS (MPL 2.0) es comercial con condiciones de divulgación de código fuente. Los dos modelos de clonación de voz más populares NO son libres para uso comercial: XTTS v2 (CPML) y F5-TTS (CC-BY-NC-4.0) son ambos no comerciales. En cuanto a capacidad, Piper es el más rápido en CPU, XTTS v2 tiene la mejor calidad de clonación (necesita 4–6 GB de VRAM) y F5-TTS clona a partir de ~3 segundos con inferencia más rápida. Esto es referencia factual, no asesoramiento legal.',
        bullets: [
          'Libre para uso comercial → Piper (MIT), Bark (MIT), StyleTTS 2 (MIT), Kokoro (Apache 2.0), Tortoise (Apache 2.0). Kit Coqui TTS (MPL 2.0): comercial OK con condiciones de divulgación de código fuente.',
          'NO libre para uso comercial → XTTS v2 (CPML, no comercial) y F5-TTS (CC-BY-NC-4.0, no comercial). Ambos necesitan un acuerdo separado; XTTS v2 no tiene vendedor desde que Coqui cerró (enero de 2024).',
          'Mejor calidad de clonación → XTTS v2. 6 segundos de audio → clon en 17 idiomas, 4–6 GB de VRAM. Licencia: CPML (no comercial). Acepta la CPML de forma no interactiva en Docker/CI con COQUI_TOS_AGREED=1.',
          'Clonación zero-shot, más rápida + arquitectura más nueva → F5-TTS. ~3 segundos de audio, flow-matching, CC-BY-NC-4.0 (no comercial).',
          'Velocidad en CPU / Raspberry Pi → Piper (MIT). Kokoro (Apache 2.0) es una alternativa en CPU de mayor calidad.',
          'Mejor narración en inglés → StyleTTS 2 (MIT). La clonación offline de mayor calidad que es apta para uso comercial → Tortoise (Apache 2.0), pero muy lento (minutos por frase).',
          'Audio creativo (risas, música, ambiente) → Bark (MIT). Lento y generativo.',
          'Todos los motores son 100% offline — sin claves API, sin datos de audio enviados a la nube.',
        ],
        updatedDate: '2026-06-15',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Por qué importa el TTS local', anchor: '#why-local-tts' },
      { label: 'Tabla de comparación', anchor: '#comparison-table' },
      { label: 'Comparación de latencia del primer audio', anchor: '#latency-table' },
      { label: 'Piper TTS — Opción ligera más rápida', anchor: '#piper' },
      { label: 'Coqui TTS — Mejor kit de herramientas open source', anchor: '#coqui' },
      { label: 'XTTS v2 — Mejor calidad de clonación de voz', anchor: '#xtts' },
      { label: 'Bark — Audio generativo más allá del habla', anchor: '#bark' },
      { label: 'StyleTTS 2 — Máxima calidad natural', anchor: '#styletts' },
      { label: 'F5-TTS — Clonación de voz zero-shot, totalmente abierto', anchor: '#f5tts' },
      { label: 'Licencias y uso comercial (CPML, MIT, CC-BY-NC)', anchor: '#licenses' },
      { label: 'Aceptar la CPML de forma no interactiva (COQUI_TOS_AGREED)', anchor: '#cpml-noninteractive' },
      { label: 'TTS local vs ElevenLabs', anchor: '#local-vs-cloud' },
      { label: 'Cómo elegir', anchor: '#how-to-choose' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper es la elección correcta para velocidad y uso embebido.** Funciona completamente en CPU, produce voz en tiempo real en una Raspberry Pi 5 y admite más de 20 idiomas mediante paquetes de voz descargables. Sin GPU, sin complejidad en Python, licencia MIT.',
          '**XTTS v2 es la mejor opción de clonación de voz local en 2026 — pero es no comercial.** Dale 6 segundos de audio de referencia y clona la voz en 17 idiomas (4–6 GB de VRAM en GPU). La licencia CPML es no comercial, y desde que Coqui cerró (enero de 2024) no hay ninguna licencia comercial a la venta — trata XTTS v2 como solo no comercial. Acepta la CPML de forma no interactiva en Docker/CI con `COQUI_TOS_AGREED=1`.',
          '**F5-TTS es la alternativa de crecimiento más rápido para clonación de voz zero-shot.** Usa una arquitectura de flow-matching en lugar de GPT, clona una voz a partir de ~3 segundos de audio de referencia y logra calidad competitiva con XTTS v2 a velocidades de inferencia más rápidas. Licencia: CC-BY-NC-4.0 (no comercial).',
          '**Coqui TTS es el kit de herramientas TTS open source más flexible.** Admite múltiples backends (Tacotron2, VITS, XTTS), clonación de voz y más de 20 idiomas bajo licencia MPL 2.0. Nota: la empresa Coqui cerró en enero de 2024; el proyecto ahora lo mantiene la comunidad.',
          '**Bark es el único TTS local que genera audio no hablado.** Puede producir risas, tos, suspiros, fragmentos musicales y efectos de sonido ambientales junto al habla — útil para audio creativo, producción de podcasts y ficción interactiva. Sus salidas son lentas y no deterministas.',
          '**StyleTTS 2 logra las puntuaciones MOS (mean opinion score) más altas de cualquier motor TTS en inglés open source.** Su transferencia de estilo basada en difusión produce naturalidad casi humana en narración en inglés. Solo admite inglés y no tiene clonación de voz.',
          '**La licencia decide el uso comercial — y la división es clara.** Libre para productos comerciales: Piper, Bark, StyleTTS 2 (MIT) y Kokoro, Tortoise (Apache 2.0). Comercial con condiciones: kit de herramientas Coqui TTS (MPL 2.0, divulga las modificaciones del kit). Solo no comercial: XTTS v2 (CPML) y F5-TTS (CC-BY-NC-4.0) — ambos necesitan un acuerdo separado. Para clonación de voz comercial, usa Tortoise (Apache 2.0) o el kit Coqui sobre un backend VITS (MPL 2.0). Referencia factual, no asesoramiento legal.',
          '**Ninguno iguala la calidad de un TTS comercial a escala.** ElevenLabs, Google Text-to-Speech y Azure TTS aún superan a los motores locales en consistencia, naturalidad y latencia en todos los casos de uso. El TTS local es la elección correcta cuando la privacidad, el costo o la operación offline importan más que la calidad absoluta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**TTS local más rápido:** Piper — tiempo real en Raspberry Pi 5, ~10× más rápido que en tiempo real en CPU de escritorio moderno.',
          '**Mejor calidad de clonación de voz:** XTTS v2 — 6 segundos de audio de referencia, clonación multilingüe en 17 idiomas.',
          '**Clonación de voz zero-shot más rápida (arquitectura más nueva):** F5-TTS — ~3 segundos de audio, flow-matching, ~3–5× tiempo real en RTX 4070.',
          '**Kit de herramientas open source más flexible:** Coqui TTS — admite backends VITS, Tacotron2, XTTS, más de 20 modelos de idioma.',
          '**Único audio generativo (sonidos no hablados):** Bark — risas, suspiros, música, ambiente. El más lento de todos.',
          '**Mejor calidad de narración en inglés:** StyleTTS 2 — transferencia de estilo basada en difusión, MOS casi humano en el benchmark LJSpeech.',
          '**Libre para uso comercial:** Piper, Bark, StyleTTS 2 (MIT); Kokoro, Tortoise (Apache 2.0); kit de herramientas Coqui TTS (MPL 2.0, con condiciones). **No comercial:** XTTS v2 (CPML), F5-TTS (CC-BY-NC-4.0).',
          '**Voces e idiomas de XTTS v2:** Sin lista fija de voces — proporcionas un clip de referencia de 6 segundos y clona esa voz. El modelo incluye preajustes de hablante integrados, y genera en 17 idiomas: en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**VRAM de XTTS v2:** ~2 GB de pesos del modelo; 4 GB mínimo para ejecutar, 4–6 GB recomendados para inferencia en tiempo real.',
          '**Aceptar la CPML en CI/Docker:** `export COQUI_TOS_AGREED=1` — sin prompt interactivo necesario.',
          '**Requisitos de VRAM:** Piper: solo CPU. Kokoro: CPU / 1–2 GB. StyleTTS 2: 2–4 GB. Coqui VITS: 2–4 GB. F5-TTS: 3–5 GB. XTTS v2: 4–6 GB. Bark: 4–8 GB. Tortoise: 4–8 GB.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'Por qué importa el TTS local',
        content:
          'Los servicios TTS en la nube (ElevenLabs, Google TTS, Amazon Polly, Azure Speech) son convenientes pero traen facturación por carácter, políticas de retención de datos de audio y latencia por los viajes de red de ida y vuelta. El TTS local elimina los tres problemas.',
        items: [
          '**Privacidad:** Tu contenido de texto nunca sale de tu equipo. Fundamental para dictado médico, resúmenes legales, narración de diarios privados o lectura en voz alta de documentos confidenciales.',
          '**Costo:** Los precios del TTS en la nube son típicamente de $4–$30 por millón de caracteres. Un desarrollador que genera 10 millones de caracteres por mes ahorra $40–$300/mes con una configuración local única.',
          '**Latencia:** Sin viaje de red de ida y vuelta. Piper genera el primer token de audio en menos de 50 ms en CPU — más rápido que cualquier TTS en la nube.',
          '**Personalización:** La clonación de voz (XTTS v2, F5-TTS, Coqui) permite crear una voz personalizada a partir de unos pocos segundos de audio. Los proveedores en la nube cobran $10+/mes por cada voz clonada.',
          '**Operación offline:** Funciona en aviones, instalaciones seguras, zonas remotas sin internet. Interfaz de voz embebida para quioscos y dispositivos.',
          '**Smart home:** Piper es la capa TTS principal para interfaces de voz locales siempre activas — tiempo real en Raspberry Pi, sin GPU. Para un asistente de voz offline completo integrado en Home Assistant, ver [asistente de voz local para smart home →](/es/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla de comparación',
        content:
          'Todos los motores TTS locales comparados en las métricas más importantes para despliegue en producción.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Piper es el más rápido en CPU; XTTS v2 ofrece la mejor calidad de clonación de voz; F5-TTS proporciona clonación zero-shot con una arquitectura más nueva; Bark es el único motor que produce risas y música; StyleTTS 2 tiene la mejor naturalidad de narración en inglés.',
          },
          {
            type: 'plain-terms',
            text: 'Para la mayoría de necesidades TTS offline: Piper si quieres velocidad y simplicidad, Coqui si quieres clonación de voz con licencia permisiva, XTTS v2 si quieres la mejor calidad de clonación y tienes GPU, F5-TTS si quieres una arquitectura más nueva con clonación zero-shot más rápida.',
          },
        ],
        note: 'MOS (mean opinion score) en una escala de 1–5 donde 5 es indistinguible del habla humana. Las puntuaciones son aproximadas y se basan en benchmarks publicados o evaluaciones de la comunidad. El MOS varía significativamente según la frase de prueba y el grupo de oyentes. MOS de referencia humana: ~4,5.',
        columns: ['Herramienta', 'Calidad', 'Velocidad', 'Clonación de voz', 'Multilingüe', 'VRAM', 'Licencia', 'MOS (inglés)'],
        rows: [
          {
            'Herramienta': 'Piper',
            'Calidad': 'Buena',
            'Velocidad': 'Muy rápida (CPU)',
            'Clonación de voz': 'No',
            'Multilingüe': 'Sí (20+ idiomas)',
            'VRAM': 'Solo CPU',
            'Licencia': 'MIT',
            'MOS (inglés)': '~3,5',
          },
          {
            'Herramienta': 'Kokoro',
            'Calidad': 'Muy buena',
            'Velocidad': 'Rápida (CPU)',
            'Clonación de voz': 'No',
            'Multilingüe': 'Inglés + en expansión',
            'VRAM': 'CPU / 1–2 GB',
            'Licencia': 'Apache 2.0',
            'MOS (inglés)': '~4,0',
          },
          {
            'Herramienta': 'Coqui TTS',
            'Calidad': 'Muy buena',
            'Velocidad': 'Media',
            'Clonación de voz': 'Sí',
            'Multilingüe': 'Sí (20+ idiomas)',
            'VRAM': '2–4 GB',
            'Licencia': 'MPL 2.0',
            'MOS (inglés)': '~3,8',
          },
          {
            'Herramienta': 'XTTS v2',
            'Calidad': 'Excelente',
            'Velocidad': 'Lenta',
            'Clonación de voz': 'Sí (la mejor)',
            'Multilingüe': 'Sí (17 idiomas)',
            'VRAM': '4–6 GB',
            'Licencia': 'CPML (no comercial)',
            'MOS (inglés)': '~4,1',
          },
          {
            'Herramienta': 'F5-TTS',
            'Calidad': 'Excelente',
            'Velocidad': 'Media-rápida',
            'Clonación de voz': 'Sí (zero-shot)',
            'Multilingüe': 'Sí (multilingüe)',
            'VRAM': '3–5 GB',
            'Licencia': 'CC-BY-NC-4.0',
            'MOS (inglés)': '~4,1',
          },
          {
            'Herramienta': 'Bark',
            'Calidad': 'Única / variable',
            'Velocidad': 'Lenta',
            'Clonación de voz': 'Limitada',
            'Multilingüe': 'Sí (multilingüe)',
            'VRAM': '4–8 GB',
            'Licencia': 'MIT',
            'MOS (inglés)': '~3,2–4,0 (variable)',
          },
          {
            'Herramienta': 'StyleTTS 2',
            'Calidad': 'Excelente (inglés)',
            'Velocidad': 'Media',
            'Clonación de voz': 'No',
            'Multilingüe': 'Principalmente inglés',
            'VRAM': '2–4 GB',
            'Licencia': 'MIT',
            'MOS (inglés)': '~4,3',
          },
          {
            'Herramienta': 'Tortoise',
            'Calidad': 'Excelente',
            'Velocidad': 'Muy lenta (minutos/frase)',
            'Clonación de voz': 'Sí',
            'Multilingüe': 'Principalmente inglés',
            'VRAM': '4–8 GB',
            'Licencia': 'Apache 2.0',
            'MOS (inglés)': '~4,2',
          },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'Comparación de latencia del primer audio',
        content:
          'La latencia del primer audio es el tiempo desde la entrada de texto hasta la primera salida audible. Fundamental para asistentes de voz y aplicaciones interactivas. Para procesamiento por lotes (audiolibros, producción de podcasts), el rendimiento total importa más que la latencia del primer audio.',
        columns: ['Motor', 'Primer audio (RTX 4070)', 'Primer audio (CPU)', 'Primer audio (M5 Pro)'],
        rows: [
          {
            'Motor': 'Piper',
            'Primer audio (RTX 4070)': '~30 ms',
            'Primer audio (CPU)': '~50 ms',
            'Primer audio (M5 Pro)': '~40 ms',
          },
          {
            'Motor': 'Kokoro',
            'Primer audio (RTX 4070)': '~50 ms',
            'Primer audio (CPU)': '~80 ms',
            'Primer audio (M5 Pro)': '~60 ms',
          },
          {
            'Motor': 'Coqui VITS',
            'Primer audio (RTX 4070)': '~100 ms',
            'Primer audio (CPU)': '~300 ms',
            'Primer audio (M5 Pro)': '~150 ms',
          },
          {
            'Motor': 'StyleTTS 2',
            'Primer audio (RTX 4070)': '~150 ms',
            'Primer audio (CPU)': '~500 ms',
            'Primer audio (M5 Pro)': '~200 ms',
          },
          {
            'Motor': 'F5-TTS',
            'Primer audio (RTX 4070)': '~200 ms',
            'Primer audio (CPU)': '~800 ms',
            'Primer audio (M5 Pro)': '~300 ms',
          },
          {
            'Motor': 'XTTS v2',
            'Primer audio (RTX 4070)': '~300 ms',
            'Primer audio (CPU)': '~1500 ms',
            'Primer audio (M5 Pro)': '~500 ms',
          },
          {
            'Motor': 'Bark',
            'Primer audio (RTX 4070)': '~500 ms',
            'Primer audio (CPU)': '~3000 ms',
            'Primer audio (M5 Pro)': '~800 ms',
          },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — Opción ligera más rápida',
        content:
          '**Piper es un sistema de síntesis de voz local rápido desarrollado por Rhasspy para automatización del hogar y uso embebido.** Usa una arquitectura neuronal basada en VITS entrenada sobre conjuntos de datos de voz con un backend onnxruntime — optimizada para funcionar en tiempo real en una Raspberry Pi 4 o 5 sin GPU.',
        items: [
          '**Arquitectura:** TTS neuronal VITS con inferencia ONNX. Diseñado para computadoras de placa única y Linux embebido.',
          '**Instalación:** `pip install piper-tts`. Los paquetes de voz preentrenados están disponibles en el repositorio de Piper voices en Hugging Face.',
          '**Uso:** `echo "Hola, mundo" | piper --model es_ES-mls-medium.onnx --output_file salida.wav`',
          '**Paquetes de voz:** Más de 20 idiomas, múltiples opciones de voz por idioma. Cada paquete de voz es un archivo de modelo ONNX de 20–200 MB.',
          '**Velocidad:** ~10× más rápido que en tiempo real en una CPU de escritorio moderna. Tiempo real en Raspberry Pi 5. Latencia del primer audio inferior a 50 ms.',
          '**Apple Silicon:** ~15× tiempo real en M5 Pro (CPU, ARM NEON). Funciona de forma nativa sin GPU — excelente rendimiento en Mac.',
          '**Escuchar muestras:** [Muestras de voz de Piper](https://rhasspy.github.io/piper-samples/)',
          '**Ideal para:** Asistentes de hogar, dispositivos de quiosco, interfaz de voz embebida, lectura en voz alta sensible a la privacidad donde no hay GPU disponible.',
          '**Limitación:** Sin clonación de voz. La calidad es "buena" — suena natural pero claramente sintética en comparación con XTTS v2 o StyleTTS 2.',
          '**Licencia:** MIT — completamente comercial, sin restricciones.',
          '**Kokoro TTS — alternativa a Piper:** Kokoro TTS es una alternativa emergente a Piper en la categoría ligera. Logra mayor naturalidad que Piper manteniéndose rápido en CPU. Licenciado bajo Apache 2.0. Si la calidad de Piper no cubre tus necesidades pero no puedes costear VRAM de GPU, [Kokoro](https://github.com/hexgrad/kokoro) vale la pena probar.',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — Mejor kit de herramientas open source',
        content:
          '**Coqui TTS es un kit de herramientas Python para síntesis de voz que admite múltiples arquitecturas de modelos y clonación de voz.** Fue desarrollado por la empresa Coqui (que cerró en enero de 2024) y ahora lo mantiene la comunidad open source. El kit admite backends Tacotron2, VITS y XTTS.',
        items: [
          '**Instalación:** `pip install TTS`. Los modelos se descargan automáticamente en el primer uso.',
          '**Clonación de voz:** Proporciona 6+ segundos de audio de referencia. `tts --text "Hola" --model_name tts_models/es/css10/vits --speaker_wav muestra.wav --out_path salida.wav`',
          '**Opciones de backend:** VITS (el más rápido, buena calidad), Tacotron2 (más antiguo, más lento), XTTS (mejor calidad, ver sección XTTS v2).',
          '**Idiomas:** Más de 20 modelos de idioma disponibles mediante `tts --list_models`.',
          '**VRAM:** 2–4 GB para el backend VITS; 4–6 GB para el backend XTTS.',
          '**Apple Silicon:** ~8× tiempo real en M5 Pro (CPU). Sin aceleración Metal GPU. Utilizable para generación por lotes.',
          '**Estado de la comunidad:** Coqui Inc cerró en enero de 2024. El repositorio open source (`coqui-ai/TTS`) lo mantiene la comunidad. Sin soporte comercial activo.',
          '**Licencia:** MPL 2.0 — uso comercial permitido, pero el código fuente de las modificaciones debe divulgarse.',
          '**Ideal para:** Desarrolladores que quieren clonación de voz con un kit de herramientas open source y licencia permisiva.',
          '**Escuchar muestras:** La demo oficial de coqui.ai está archivada. Ejemplos de audio de la comunidad están enlazados en el [repositorio coqui-ai/TTS en GitHub](https://github.com/coqui-ai/TTS) en la sección de demos.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — Mejor calidad de clonación de voz',
        content:
          '**XTTS v2 (de Coqui) es el motor de clonación de voz de mayor calidad disponible localmente en 2026.** Usa una arquitectura basada en GPT con transferencia entre idiomas — clona una voz en inglés y la habla en español, alemán, francés u otros 14 idiomas a partir de los mismos 6 segundos de audio.',
        items: [
          '**Arquitectura:** TTS basado en GPT con condicionamiento del hablante. Vision-transformer para modelado de prosodia.',
          '**Clonación de voz:** Con 6 segundos de audio de referencia es suficiente para un clon de voz convincente. 3 segundos producen calidad aceptable.',
          '**Clonación multilingüe:** Clona la voz en un idioma, genera habla en 17 idiomas diferentes con las mismas características de voz.',
          '**Idiomas (17):** Inglés, español, francés, alemán, italiano, portugués, polaco, turco, ruso, neerlandés, checo, árabe, chino (zh-cn), japonés, húngaro, coreano e hindi. El coreano y el hindi se añadieron en XTTS v2.0.3.',
          '**"Voces de XTTS v2":** No hay un catálogo fijo de voces con nombre. XTTS v2 es un modelo de clonación — proporcionas un clip de referencia de 6 segundos y reproduce a ese hablante. El repositorio incluye unos pocos preajustes de hablante integrados para pruebas rápidas, pero el flujo de trabajo previsto es proporcionar tu propio `speaker_wav`.',
          '**VRAM:** Los pesos del modelo son ~2 GB. 4 GB de VRAM es el mínimo práctico; se recomiendan 4–6 GB para inferencia en tiempo real. Funciona en CPU pero ~5–10× más lento.',
          '**Velocidad:** Lento — genera ~2× tiempo real en un RTX 4070. No adecuado para pipelines de asistente de voz en tiempo real.',
          '**Apple Silicon:** ~3× tiempo real en M5 Pro (CPU, sin aceleración Metal). Utilizable para generación de audio por lotes, no para salida de asistente de voz en tiempo real.',
          '**Escuchar muestras:** [Demo de XTTS v2 en Hugging Face](https://huggingface.co/spaces/coqui/xtts)',
          '**Licencia:** CPML (Coqui Public Model License) — no comercial. La CPML permite el uso personal, de investigación y de aficionado del modelo **y de sus salidas de audio**, pero prohíbe el uso comercial (cualquier producto de pago, SaaS, contenido con publicidad o trabajo para clientes) sin un acuerdo comercial separado. Coqui Inc cerró en enero de 2024, así que actualmente no hay ninguna entidad vendiendo licencias comerciales de XTTS v2 — en la práctica, trata XTTS v2 como solo no comercial. Consulta la sección de [aceptación no interactiva de la CPML](#cpml-noninteractive) para la variable de entorno `COQUI_TOS_AGREED`.',
        ],
        codeBlock: `from TTS.api import TTS

# Load XTTS v2 model
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")

# Clone voice from 6-second reference audio and synthesize in any of 17 languages
tts.tts_to_file(
    text="Bonjour, je suis votre assistant vocal.",
    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker
    language="fr",                        # Output in French using the cloned voice
    file_path="output.wav"
)`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'XTTS v2 está cubierto por la licencia CPML (no comercial). El uso comercial — productos, SaaS, servicios o trabajo de pago para clientes — requiere un acuerdo comercial separado, y como Coqui Inc cerró en enero de 2024 actualmente no hay ningún acuerdo de ese tipo a la venta. Si necesitas clonación de voz comercial, usa Tortoise (Apache 2.0) o el kit de herramientas Coqui TTS sobre un backend VITS (MPL 2.0). Esto es referencia factual, no asesoramiento legal — lee la CPML tú mismo antes de desplegar.',
          },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — Audio generativo más allá del habla',
        content:
          '**Bark (de Suno AI) es un modelo generativo de texto a audio que produce habla, música, risas, tos, suspiros y sonidos ambientales a partir de prompts de texto.** No es un motor TTS tradicional — es un modelo generativo que interpreta los prompts de texto como instrucciones de generación de audio.',
        items: [
          '**Capacidad única:** Incluye `[laughs]`, `[sighs]`, `[clears throat]`, `[music]` o `[sound effect: wind]` en tu texto y Bark genera esos sonidos junto al habla.',
          '**No controlable como un TTS tradicional:** La salida varía entre ejecuciones para la misma entrada. La calidad es inconsistente — algunas salidas son excelentes, otras tienen artefactos o segmentos incomprensibles.',
          '**Velocidad:** Lento — 2–4× más lento que en tiempo real incluso en un RTX 4090. No adecuado para aplicaciones interactivas.',
          '**Apple Silicon:** ~1,5× tiempo real en M5 Pro (CPU, MPS parcial). El soporte MPS (Metal Performance Shaders) es parcial — la mayor parte de la inferencia sigue cayendo en la CPU.',
          '**Ideal para:** Audio creativo, producción de podcasts con efectos de sonido, ficción interactiva, aplicaciones de voz experimentales.',
          '**VRAM:** GPU de 4–8 GB. Funciona en CPU con calidad significativamente inferior.',
          '**Instalación:** `pip install suno-bark`. Los modelos se descargan en la primera ejecución (~2 GB).',
          '**Licencia:** MIT — completamente comercial.',
          '**Limitación:** Sin clonación de voz fiable. Los "preajustes de voz" incluidos con Bark son aproximados — no es un sistema de clonación de voz real.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — Máxima calidad natural',
        content:
          '**StyleTTS 2 es un modelo TTS basado en difusión que logra puntuaciones MOS (mean opinion score) casi humanas en el benchmark LJSpeech.** Transfiere el estilo del habla mediante difusión — generando habla más natural y expresiva que los modelos basados en VITS.',
        items: [
          '**Arquitectura:** Transferencia de estilo basada en difusión. Muestrea desde una distribución aprendida de estilos de habla en lugar de mapear el texto al audio de forma determinista.',
          '**Calidad:** Las puntuaciones MOS más altas de cualquier motor TTS en inglés open source en el benchmark LJSpeech. Los oyentes lo califican como prácticamente indistinguible de la narración humana en pruebas controladas.',
          '**Ideal para:** Narración de audiolibros, voz profesional en off, producción de podcasts, cualquier aplicación donde la calidad en inglés importa más que la personalización de voz.',
          '**Instalación:** Clona el repositorio de GitHub, instala los requisitos (`pip install -r requirements.txt`), descarga los checkpoints del modelo (~500 MB).',
          '**Soporte de idiomas:** Principalmente inglés. Capacidad multilingüe limitada — no recomendado para uso en idiomas distintos al inglés.',
          '**Clonación de voz:** No compatible. StyleTTS 2 genera solo en voces de hablantes entrenadas.',
          '**VRAM:** GPU de 2–4 GB. Más rápido que XTTS v2 a ~5–8× tiempo real en RTX 4070.',
          '**Apple Silicon:** ~6× tiempo real en M5 Pro (CPU). Sin aceleración Metal, pero el rendimiento en ARM es sólido para generación de audio por lotes.',
          '**Escuchar muestras:** [StyleTTS 2 en GitHub](https://github.com/yl4579/StyleTTS2) — busca "StyleTTS 2 audio samples" para ejemplos de la comunidad si la página de demo no está disponible.',
          '**Licencia:** MIT — completamente comercial.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Clonación de voz zero-shot, totalmente abierto',
        content:
          '**F5-TTS es un modelo TTS basado en flow-matching con clonación de voz zero-shot — clona cualquier voz a partir de ~3 segundos de audio de referencia sin fine-tuning.** Es uno de los proyectos TTS locales de crecimiento más rápido en 2025–2026, con desarrollo activo y adopción comunitaria creciente.',
        items: [
          '**Arquitectura:** Flow-matching (un enfoque variante de la difusión) en lugar de la arquitectura basada en GPT que usa XTTS v2. El flow-matching típicamente ofrece inferencia más rápida con calidad competitiva.',
          '**Clonación de voz:** ~3 segundos de audio de referencia es suficiente para clonación de voz zero-shot. No se requiere fine-tuning — funciona con cualquier voz en tiempo de inferencia.',
          '**Calidad:** Competitiva con XTTS v2 en inglés. Puntuaciones MOS aproximadamente ~4,1 en evaluaciones de la comunidad.',
          '**Velocidad:** ~3–5× tiempo real en RTX 4070 — más rápido que XTTS v2 (~2× tiempo real) para calidad de clonación de voz comparable.',
          '**Idiomas:** Multilingüe — soporte sólido para inglés y chino, con soporte en expansión para otros idiomas.',
          '**Apple Silicon:** ~2× tiempo real en M5 Pro (CPU). Sin aceleración Metal actualmente.',
          '**VRAM:** Se recomienda GPU de 3–5 GB. Menor huella que XTTS v2.',
          '**Instalación:** `pip install f5-tts` o clona desde [GitHub](https://github.com/SWivid/F5-TTS).',
          '**Licencia:** CC-BY-NC-4.0 — solo uso no comercial. El uso comercial requiere un acuerdo separado con los autores.',
          '**Por qué importa:** F5-TTS trae una arquitectura más moderna a la clonación de voz local con una comunidad activa. Si XTTS v2 es demasiado lento para tu pipeline o su licencia CPML es una preocupación para proyectos no comerciales, F5-TTS es la principal alternativa a evaluar.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'Licencias y uso comercial — ¿Puedo usar este motor TTS comercialmente?',
        content:
          'La licencia es el factor más importante para el uso en producción, y divide estos motores limpiamente en dos grupos. Los motores con licencia permisiva (MIT, Apache 2.0) son libres de distribuir en un producto comercial. Los motores restringidos (CPML, CC-BY-NC-4.0) son no comerciales — usarlos en un producto de pago, SaaS, contenido con publicidad o trabajo para clientes requiere un acuerdo separado. La tabla siguiente da la licencia exacta y una respuesta directa a "¿puedo usar esto comercialmente?" para cada motor.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para TTS local en un producto comercial, Piper, Bark y StyleTTS 2 (MIT), Kokoro y Tortoise (Apache 2.0), y el kit de herramientas Coqui TTS sobre un backend VITS/Tacotron2 (MPL 2.0) están todos permitidos; XTTS v2 (CPML) y F5-TTS (CC-BY-NC-4.0) son no comerciales.',
          },
          {
            type: 'plain-terms',
            text: 'Los dos modelos de clonación de voz más populares — XTTS v2 y F5-TTS — no pueden usarse comercialmente sin una licencia separada. Para clonación de voz comercial, Tortoise (Apache 2.0) o el kit Coqui sobre un backend VITS (MPL 2.0) son las opciones seguras.',
          },
        ],
        columns: ['Herramienta', 'Licencia', '¿Comercial?', 'Condición principal'],
        rows: [
          {
            'Herramienta': 'Piper',
            'Licencia': 'MIT',
            '¿Comercial?': 'Sí — sin restricciones',
            'Condición principal': 'Incluir aviso MIT; revisar la licencia del modelo de cada voz',
          },
          {
            'Herramienta': 'Kokoro',
            'Licencia': 'Apache 2.0',
            '¿Comercial?': 'Sí — sin restricciones',
            'Condición principal': 'Incluir aviso Apache 2.0',
          },
          {
            'Herramienta': 'Coqui TTS (kit)',
            'Licencia': 'MPL 2.0',
            '¿Comercial?': 'Sí — con condiciones',
            'Condición principal': 'Divulgar el código fuente de cualquier modificación a los archivos del kit',
          },
          {
            'Herramienta': 'XTTS v2 (modelo)',
            'Licencia': 'CPML',
            '¿Comercial?': 'No — no comercial',
            'Condición principal': 'El uso comercial necesita un acuerdo; ninguno a la venta desde que Coqui cerró (enero de 2024)',
          },
          {
            'Herramienta': 'F5-TTS',
            'Licencia': 'CC-BY-NC-4.0',
            '¿Comercial?': 'No — no comercial',
            'Condición principal': 'La cláusula NC se mantiene incluso en fine-tunes (datos de entrenamiento Emilia)',
          },
          {
            'Herramienta': 'Bark',
            'Licencia': 'MIT',
            '¿Comercial?': 'Sí — sin restricciones',
            'Condición principal': 'Incluir aviso de copyright MIT',
          },
          {
            'Herramienta': 'StyleTTS 2',
            'Licencia': 'MIT',
            '¿Comercial?': 'Sí — sin restricciones',
            'Condición principal': 'Incluir aviso de copyright MIT',
          },
          {
            'Herramienta': 'Tortoise',
            'Licencia': 'Apache 2.0',
            '¿Comercial?': 'Sí — sin restricciones',
            'Condición principal': 'Atribución; obtener consentimiento para cualquier voz clonada',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Coqui TTS (el kit de herramientas, MPL 2.0) y XTTS v2 (los pesos específicos del modelo, CPML) tienen licencias diferentes. Puedes distribuir el kit Coqui TTS con backends VITS o Tacotron2 en un producto comercial bajo MPL 2.0. La restricción no comercial de la CPML se aplica específicamente a los pesos del modelo XTTS v2 y a sus salidas de audio — no al código del kit.',
          },
          {
            type: 'warning',
            text: 'Esto es referencia factual, no asesoramiento legal. Las licencias cambian y los casos límite (consentimiento de voz, términos del conjunto de datos, licencias de modelo por voz) importan. Lee tú mismo el archivo de licencia de cada motor, y consulta a un abogado, antes de basarte en cualquiera de estos términos para un despliegue comercial.',
          },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'Aceptar la CPML de forma no interactiva (COQUI_TOS_AGREED)',
        content:
          'La primera vez que cargas un modelo XTTS / Coqui cubierto por la CPML, la biblioteca imprime los términos de la licencia y espera a que escribas "y" para aceptar. Ese prompt interactivo se cuelga en builds de Docker, pipelines de CI y servidores sin interfaz. Para aceptar la CPML de forma no interactiva, establece la variable de entorno `COQUI_TOS_AGREED` en `1` — esto registra que has leído y aceptado la Coqui Public Model License antes de que el modelo se cargue. No cambia la licencia: la CPML sigue siendo no comercial, y establecer la variable es tu aceptación de esos términos, no una renuncia a ellos.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Establece la variable de entorno COQUI_TOS_AGREED=1 para aceptar la Coqui Public Model License (CPML) sin el prompt interactivo en Docker, CI o cualquier entorno sin interfaz.',
          },
          {
            type: 'plain-terms',
            text: 'En una shell o Dockerfile usa `export COQUI_TOS_AGREED=1`; en Python establece `os.environ["COQUI_TOS_AGREED"] = "1"` antes de importar o cargar el modelo. En cualquier caso el modelo se carga sin esperar entrada de teclado.',
          },
        ],
        items: [
          '**Shell / CI:** `export COQUI_TOS_AGREED=1` antes de ejecutar tu script.',
          '**Docker:** añade `ENV COQUI_TOS_AGREED=1` a tu Dockerfile, o pasa `-e COQUI_TOS_AGREED=1` a `docker run`.',
          '**Python (establécelo antes de que se cargue el modelo):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — debe ejecutarse antes de que `TTS(...)` instancie el modelo XTTS.',
          '**Qué hace:** registra la aceptación no interactiva de la CPML para que la carga del modelo no se bloquee en un prompt `y/n`. No es una licencia comercial y no elimina la restricción no comercial.',
        ],
        codeBlock: `# 1) Shell / CI — accept the CPML once for the session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — bake acceptance into the image
# ENV COQUI_TOS_AGREED=1

# 3) Python — set it before the model is created
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # must be set BEFORE the TTS() call below

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Model now loads without the interactive license prompt`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'COQUI_TOS_AGREED=1 solo suprime el prompt interactivo — es tu aceptación de la CPML, que sigue siendo una licencia no comercial. No otorga derechos comerciales sobre XTTS v2.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'TTS local vs ElevenLabs y TTS en la nube',
        content:
          'ElevenLabs, Google Text-to-Speech y Azure Speech siguen siendo el techo de calidad para el TTS en 2026. Esta sección muestra dónde los motores locales compiten eficazmente y dónde la nube sigue ganando.',
        items: [
          '**Techo de calidad:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper. ElevenLabs sigue siendo el techo de calidad en 2026 en consistencia y expresividad.',
          '**Latencia:** Piper local (~30–50 ms primer audio) es más rápido que cualquier viaje de ida y vuelta de la API de ElevenLabs (~300–500 ms). Para interfaz de voz en tiempo real, Piper local gana en latencia.',
          '**Costo:** ElevenLabs cobra $5–99/mes por nivel. El TTS local cuesta $0 después del hardware inicial. A escala (millones de caracteres/mes), lo local es significativamente más barato.',
          '**Clonación de voz:** ElevenLabs Instant Voice Clone ≈ calidad XTTS v2. ElevenLabs Professional Voice Clone (requiere una sesión de grabación del hablante) supera a cualquier motor local.',
          '**Privacidad:** TTS local = no se envían datos de audio a ningún lugar. ElevenLabs = audio procesado en sus servidores. Fundamental para contenido sensible.',
          '**Capacidad offline:** Local = completamente offline. ElevenLabs = requiere internet. Sin modo offline disponible.',
          '**Cuándo usar la nube:** Producción de voz profesional, productos orientados al cliente que requieren la más alta calidad, proyectos con múltiples voces de decenas de personajes.',
          '**Cuándo usar lo local:** Audio crítico para la privacidad, dispositivos embebidos, procesamiento por lotes sensible al costo, entornos offline, desarrollo y prototipado.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Cómo elegir',
        content:
          'Un diagrama de decisión desde tu requisito hasta el motor TTS correcto:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '¿Necesitas clonación de voz? → XTTS v2 (mejor calidad) o F5-TTS (más rápido, arquitectura más nueva) o Coqui TTS (licencia abierta). ¿Necesitas velocidad en CPU? → Piper. ¿Necesitas audio creativo? → Bark. ¿Necesitas la mejor calidad en inglés? → StyleTTS 2.',
          },
          {
            type: 'plain-terms',
            text: 'Si quieres clonar la voz de alguien, usa XTTS v2 para calidad, F5-TTS para inferencia más rápida o Coqui VITS para licencia permisiva. Si estás construyendo una interfaz de voz para Raspberry Pi o quiosco, usa Piper. Si estás haciendo un podcast con efectos de sonido, prueba Bark. Si estás narrando audiolibros en inglés, usa StyleTTS 2.',
          },
        ],
        items: [
          '**¿Necesitas clonación de voz?** → Sí: XTTS v2 (mejor calidad, licencia CPML) o F5-TTS (arquitectura más nueva, más rápido, CC-BY-NC-4.0) o Coqui VITS (buena calidad, MPL 2.0). No: Piper (velocidad), StyleTTS 2 (calidad).',
          '**¿Necesitas funcionar solo en CPU / Raspberry Pi?** → Solo Piper. Kokoro es una alternativa CPU de mayor calidad con licencia Apache 2.0. Todos los demás motores requieren GPU para un rendimiento aceptable.',
          '**¿Necesitas audio creativo con sonidos no hablados?** → Bark. Ningún otro motor local produce risas, suspiros o música de forma nativa.',
          '**¿Necesitas la mejor calidad de narración en inglés?** → StyleTTS 2. Supera a todos los demás en naturalidad para habla estilo audiolibro en inglés.',
          '**¿Necesitas soporte multilingüe?** → XTTS v2 (17 idiomas, clonación multilingüe), Coqui (20+ idiomas), Piper (20+ paquetes de idioma).',
          '**¿Necesitas una licencia MIT completamente comercial?** → Piper, Bark o StyleTTS 2. Evita XTTS v2 para uso comercial sin revisar el CPML. F5-TTS (CC-BY-NC-4.0) también prohíbe el uso comercial sin acuerdo separado.',
          '**¿Necesitas control de voz mediante descripción de texto?** → Parler-TTS. Describe la voz que quieres ("un hombre mayor tranquilo hablando despacio") y genera habla con esas características. Sin audio de referencia necesario. [GitHub](https://github.com/huggingface/parler-tts)',
          '**¿Construyendo un pipeline de asistente de voz?** → Piper para salida TTS de baja latencia (ver /es/power-local-llm/build-local-voice-assistant-2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto audio de referencia necesito para clonar una voz con XTTS v2?',
            a: 'XTTS v2 requiere un mínimo de 3 segundos de audio de referencia limpio, pero con 6 o más segundos los resultados mejoran notablemente. El audio debe ser de un solo hablante con el mínimo ruido de fondo y sin música. Un audio de mayor calidad (grabado en una habitación silenciosa con un buen micrófono) produce mejores clones que el audio comprimido.',
          },
          {
            q: '¿Puedo usar Piper TTS en un producto comercial?',
            a: 'Sí. Piper está licenciado bajo MIT, que permite uso comercial ilimitado. Debes incluir el aviso de licencia MIT en tu producto. Los modelos de voz (archivos ONNX) pueden tener licencias separadas por voz — revisa la licencia de cada modelo de voz en el repositorio de Piper voices antes de desplegar.',
          },
          {
            q: '¿Coqui TTS sigue mantenido después de que la empresa cerró?',
            a: 'Sí, pero con ritmo reducido. La empresa Coqui cerró en enero de 2024, pero el repositorio open source (`coqui-ai/TTS`) lo mantienen colaboradores de la comunidad. Se aplican correcciones de errores y parches de seguridad, pero es poco probable que haya entrenamiento de modelos nuevos importantes sin un esfuerzo comunitario significativo. Para XTTS v2, no se esperan nuevas versiones de modelo de Coqui.',
          },
          {
            q: '¿Qué motor TTS local tiene el mejor soporte multilingüe?',
            a: 'XTTS v2 admite 17 idiomas con clonación de voz multilingüe — la característica multilingüe más impresionante de cualquier motor local. Coqui TTS tiene más de 20 modelos de idioma pero sin clonación multilingüe. Piper tiene más de 20 paquetes de voz por idioma para inferencia rápida en CPU. Si necesitas clonar una voz y producir habla en varios idiomas desde una sola muestra de referencia, XTTS v2 es la única opción.',
          },
          {
            q: '¿Puede Bark producir música?',
            a: 'Bark puede producir fragmentos musicales simples junto al habla cuando se le indica con tokens `[music]` o `[singing]`. No es un generador de música dedicado — las salidas son cortas, inconsistentes y a menudo con artefactos. Para generación real de música, Bark no es la herramienta adecuada. Es mejor usarlo para añadir sonidos emocionales no hablados (risas, tos, suspiros) a la salida de voz.',
          },
          {
            q: '¿Cuál es el mejor TTS local gratuito para clonación de voz?',
            a: 'F5-TTS (CC-BY-NC-4.0) para uso no comercial — clona voces a partir de ~3 segundos de audio con calidad competitiva con XTTS v2. Para uso comercial, Coqui TTS con backend VITS (MPL 2.0) permite despliegue comercial con condiciones de divulgación de código fuente. XTTS v2 tiene la mejor calidad pero su licencia CPML restringe el despliegue comercial sin acuerdo separado.',
          },
          {
            q: '¿Puedo ejecutar XTTS v2 en un Mac con Apple Silicon?',
            a: 'Sí, pero solo en CPU — aproximadamente 3× tiempo real en M5 Pro. Actualmente no hay aceleración Metal GPU para motores TTS. A diferencia de whisper.cpp (que tiene soporte Metal completo), los motores TTS funcionan en CPU en Apple Silicon. El rendimiento es utilizable para generación de audio por lotes pero no adecuado para salida de asistente de voz en tiempo real.',
          },
          {
            q: '¿Qué motor TTS local suena más humano?',
            a: 'StyleTTS 2 para narración en inglés — logra las puntuaciones MOS más altas de cualquier motor TTS en inglés open source (~4,3 vs referencia humana ~4,5). XTTS v2 y F5-TTS son competitivos (~4,1) en naturalidad de voz clonada. Ninguno iguala a ElevenLabs Turbo v2 en su pico de calidad para casos de uso de producción.',
          },
          {
            q: '¿Puedo usar XTTS v2 comercialmente?',
            a: 'No, no sin un acuerdo comercial separado. XTTS v2 se publica bajo la Coqui Public Model License (CPML), que permite el uso personal, de investigación y de aficionado del modelo y de sus salidas de audio pero prohíbe el uso comercial — cualquier producto de pago, SaaS, contenido con publicidad o trabajo para clientes. Coqui Inc cerró en enero de 2024, así que actualmente no hay ninguna entidad vendiendo licencias comerciales de XTTS v2; en la práctica, trata XTTS v2 como solo no comercial. Para clonación de voz comercial, usa Tortoise (Apache 2.0) o el kit de herramientas Coqui TTS sobre un backend VITS (MPL 2.0). Esto es referencia factual, no asesoramiento legal — lee la CPML tú mismo antes de desplegar.',
          },
          {
            q: '¿Cómo acepto la licencia CPML de Coqui de forma no interactiva (Docker / CI)?',
            a: 'Establece la variable de entorno COQUI_TOS_AGREED en 1. La biblioteca Coqui/XTTS normalmente imprime la CPML y espera a que escribas "y", lo cual se cuelga en builds de Docker, CI y servidores sin interfaz. Establecer COQUI_TOS_AGREED=1 registra tu aceptación para que el modelo se cargue sin el prompt. Usa `export COQUI_TOS_AGREED=1` en una shell o paso de CI, `ENV COQUI_TOS_AGREED=1` en un Dockerfile, o `os.environ["COQUI_TOS_AGREED"] = "1"` en Python antes de la llamada a TTS(). Solo suprime el prompt — es tu aceptación de la CPML y no otorga derechos comerciales.',
          },
          {
            q: '¿Cuántas voces e idiomas admite XTTS v2?',
            a: 'XTTS v2 no tiene un catálogo fijo de voces con nombre — es un modelo de clonación, así que proporcionas un clip de referencia de 6 segundos y reproduce a ese hablante (el repositorio también incluye unos pocos preajustes de hablante integrados para pruebas rápidas). Genera habla en 17 idiomas: inglés, español, francés, alemán, italiano, portugués, polaco, turco, ruso, neerlandés, checo, árabe, chino (zh-cn), japonés, húngaro, coreano e hindi. La clonación es multilingüe: clona una voz una vez y genérala en cualquiera de los 17 idiomas.',
          },
          {
            q: 'Kokoro vs Piper — ¿qué TTS ligero en CPU debo usar?',
            a: 'Ambos funcionan rápido en CPU sin GPU y ambos tienen licencias permisivas (Piper es MIT, Kokoro es Apache 2.0), así que cualquiera es seguro para uso comercial. Elige Piper cuando necesites la latencia más baja y la mayor cobertura de idiomas (más de 20 paquetes de voz por idioma, tiempo real en una Raspberry Pi 5) — es el estándar para voz embebida y de smart home. Elige Kokoro (un modelo de 82M de parámetros construido sobre la arquitectura StyleTTS 2) cuando quieras mayor naturalidad que Piper y puedas aceptar un poco más de cómputo; su calidad en inglés se acerca a la de los motores más pesados con GPU. Para una Raspberry Pi o un asistente siempre activo, Piper; para una lectura en voz alta en escritorio/servidor donde la calidad importa más que los milisegundos, Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Piper TTS en GitHub](https://github.com/rhasspy/piper) — Código fuente, paquetes de voz, descargas de modelos ONNX y guía de configuración para Raspberry Pi.',
          '[Coqui TTS en GitHub](https://github.com/coqui-ai/TTS) — Código fuente, lista de modelos, documentación de clonación de voz y referencia de API Python.',
          '[Documentación de XTTS v2](https://docs.coqui.ai/en/latest/models/xtts.html) — Ficha del modelo XTTS v2, licencia (CPML) y API de clonación de voz.',
          '[Bark en GitHub](https://github.com/suno-ai/bark) — Código fuente, tokens de prompt de audio, descarga del modelo y ejemplos de salida.',
          '[StyleTTS 2 en GitHub](https://github.com/yl4579/StyleTTS2) — Artículo de arquitectura, checkpoints del modelo y guía de inferencia.',
          '[F5-TTS en GitHub](https://github.com/SWivid/F5-TTS) — TTS de flow-matching con clonación de voz zero-shot, guía de instalación y soporte multilingüe.',
          '[Kokoro TTS en GitHub](https://github.com/hexgrad/kokoro) — TTS ligero de alta calidad con licencia Apache 2.0, optimizado para CPU.',
          '[Tortoise TTS en GitHub](https://github.com/neonbjb/tortoise-tts) — TTS multivoz de alta calidad con clonación de voz, licencia Apache 2.0. Muy lento pero apto para uso comercial.',
          '[XTTS-v2 LICENSE.txt (CPML) en Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Texto completo de la Coqui Public Model License que rige XTTS v2.',
          '[Piper voices en Hugging Face](https://huggingface.co/rhasspy/piper-voices) — Todas las descargas de paquetes de idioma/voz disponibles con información de licencia por voz.',
          '[Muestras de voz de Piper](https://rhasspy.github.io/piper-samples/) — Demos de audio para todas las voces de Piper en los idiomas admitidos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Construye un asistente de voz completamente offline en 2026](/es/power-local-llm/build-local-voice-assistant-2026) — Usa Piper o Coqui TTS como capa de salida de un pipeline completo de Whisper + LLM + TTS.',
          '[Reconocimiento de voz local 2026: Whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison-2026) — El lado de entrada de un pipeline de voz: STT para complementar el TTS.',
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Integra el TTS como capa de salida de voz de un stack multimodal completo.',
          '[Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) — Asistente de voz móvil usando TTS del sistema iOS o Piper.',
          '[Mejores GPU económicas para LLM local](/es/local-llms/best-budget-gpus-local-llm) — Selección de GPU para ejecutar inferencia de XTTS v2, F5-TTS, Bark o StyleTTS 2.',
          '[Mejor IA de texto a voz para creadores de contenido](/es/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local: comparación de calidad de voz y latencia.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Licencias de TTS local y clonación de voz 2026: qué motores permiten uso comercial (Piper, XTTS v2, F5-TTS, Coqui)',
       description: '¿Qué motores TTS locales permiten uso comercial? Licencias de Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) y Coqui, más la variable COQUI_TOS_AGREED. Guía 2026.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-06-15',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
},
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: '로컬 TTS 및 음성 복제 라이선스 2026: 상업적 사용이 가능한 엔진 (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: '로컬 TTS 라이선스 2026: 상업적 사용',
    intro: '로컬 음성 합성 엔진을 상업용 제품에 사용할 수 있을까요? 그것은 전적으로 라이선스에 달려 있으며, 라이선스는 엔진마다 크게 다릅니다. Piper, Bark, StyleTTS 2는 MIT, Kokoro와 Tortoise는 Apache 2.0으로 배포되며 — 이 네 가지 모두 상업적 사용이 무료입니다. Coqui TTS 툴킷은 MPL 2.0(조건부 상업적 사용)입니다. 하지만 가장 인기 있는 두 음성 복제 모델은 제한적입니다. XTTS v2는 Coqui Public Model License(CPML, 비상업용)를 사용하고, F5-TTS는 CC-BY-NC-4.0(비상업용)을 사용합니다. 이 가이드는 각 엔진의 정확한 라이선스, 엔진별 "상업적으로 사용할 수 있는가?"에 대한 명확한 답변, Docker 및 CI에서 CPML을 비대화형으로 수락하기 위한 COQUI_TOS_AGREED 환경 변수, 그리고 품질, 속도, VRAM, 음성 복제 전반의 직접 비교를 제공합니다 — 따라서 오디오를 클라우드로 보내지 않고도, 그리고 프로덕션에서 라이선스 문제에 놀라지 않고도 올바른 엔진을 선택할 수 있습니다. (라이선스는 2026년 6월에 확인했습니다. 이는 사실 참고 자료이며 법률 자문이 아닙니다 — 상업적 사용 전에 각 라이선스를 직접 읽으십시오.)',
    metaDescription: '상업적 사용이 가능한 로컬 TTS 엔진은? Piper(MIT), XTTS v2(CPML), F5-TTS(CC-BY-NC), Coqui(MPL 2.0)의 정확한 라이선스와 COQUI_TOS_AGREED 환경 변수, 음성 복제 비교. 2026 가이드.',
    twitterDescription: '로컬 TTS 라이선스 2026: 상업적 사용이 가능한 음성 복제 엔진은? Piper/Bark/StyleTTS 2(MIT), Kokoro/Tortoise(Apache 2.0), XTTS v2(CPML 비상업용), F5-TTS(CC-BY-NC). COQUI_TOS_AGREED 환경 변수 포함. 모두 오프라인.',
    audience: '클라우드 API 비용이나 데이터 노출 없이 음성 합성 및 음성 복제를 원하는 개발자, 크리에이터, 콘텐츠 제작자 및 프라이버시 중심 사용자.',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 음성 합성',
    targetKeywords: ['로컬 TTS 2026', '최고의 로컬 TTS', '로컬 음성 복제', 'piper vs coqui', 'XTTS v2 음성 복제', 'F5-TTS 음성 복제', 'F5-TTS 로컬', '오프라인 음성 복제', 'bark TTS', 'StyleTTS 2', 'piper TTS 설정', 'coqui TTS 오프라인'],
    current_models_mentioned: ['Piper TTS', 'Coqui TTS', 'XTTS v2', 'F5-TTS', 'Bark', 'StyleTTS 2', 'Kokoro TTS', 'Tortoise TTS'],
    current_hardware_mentioned: ['CPU (x86/ARM)', 'Raspberry Pi', '2–4 GB GPU', '3–5 GB GPU', '4–6 GB GPU', '4–8 GB GPU', 'Apple M5 Pro', 'RTX 4070'],
    leadAnswerBlock: '**상업적 사용에는 허용적 라이선스를 가진 로컬 TTS 엔진을 선택하십시오. Piper, Bark, StyleTTS 2는 MIT이고, Kokoro와 Tortoise는 Apache 2.0입니다 — 모두 상업용 제품에 무료입니다.** Coqui TTS 툴킷은 MPL 2.0(툴킷 소스에 대한 수정 사항을 공개하면 상업적 사용 허용)입니다. 가장 잘 알려진 두 음성 복제 모델이 함정입니다. **XTTS v2는 Coqui Public Model License(CPML)에 따라 비상업용**이고 **F5-TTS는 CC-BY-NC-4.0에 따라 비상업용**입니다 — 둘 다 별도 계약 없이는 상업적 사용이 금지되며, Coqui Inc가 2024년 1월에 문을 닫았기 때문에 현재 XTTS v2 상업용 라이선스를 판매할 곳이 없으므로 비상업용으로만 취급하십시오. 기능 측면에서: Piper는 CPU에서 가장 빠르며(Raspberry Pi 5에서 실시간, GPU 불필요), XTTS v2는 최고 품질의 음성 복제(6초의 참조 오디오 → 17개 언어, 4~6 GB VRAM)이고, F5-TTS는 ~3초에서 더 빠른 flow-matching 추론으로 복제하며, Bark는 웃음, 한숨, 환경음을 독특하게 생성하고, StyleTTS 2는 가장 자연스러운 영어 내레이션(복제 없음)을 가지며, Tortoise는 매우 높은 품질이지만 극도로 느립니다. 이는 사실 참고 자료이며 법률 자문이 아닙니다 — 상업적 배포 전에 각 라이선스를 직접 확인하십시오.',
    quickAnswerTop: {
      ko: {
        question: '2026년에 어떤 로컬 TTS 엔진을 상업적으로 사용할 수 있습니까?',
        answer: '상업적 사용에는 허용적 라이선스의 엔진을 선택하십시오. Piper, Bark, StyleTTS 2(MIT)와 Kokoro, Tortoise(Apache 2.0)는 모두 상업용 제품에 무료입니다. Coqui TTS 툴킷(MPL 2.0)은 소스 공개 조건으로 상업적 사용이 가능합니다. 가장 인기 있는 두 음성 복제 모델은 상업적 사용이 무료가 아닙니다. XTTS v2(CPML)와 F5-TTS(CC-BY-NC-4.0)는 둘 다 비상업용입니다. 기능 측면에서 Piper는 CPU에서 가장 빠르고, XTTS v2는 최고의 복제 품질을 가지며(4~6 GB VRAM 필요), F5-TTS는 더 빠른 추론으로 ~3초에서 복제합니다. 이는 사실 참고 자료이며 법률 자문이 아닙니다.',
        bullets: [
          '상업적 사용 무료 → Piper(MIT), Bark(MIT), StyleTTS 2(MIT), Kokoro(Apache 2.0), Tortoise(Apache 2.0). Coqui TTS 툴킷(MPL 2.0): 소스 공개 조건으로 상업적 사용 가능.',
          '상업적 사용 불가 → XTTS v2(CPML, 비상업용)와 F5-TTS(CC-BY-NC-4.0, 비상업용). 둘 다 별도 계약 필요. XTTS v2는 Coqui가 문을 닫은(2024년 1월) 후 판매처가 없습니다.',
          '최고의 복제 품질 → XTTS v2. 6초의 오디오 → 17개 언어로 복제, 4~6 GB VRAM. 라이선스: CPML(비상업용). Docker/CI에서 COQUI_TOS_AGREED=1로 CPML을 비대화형으로 수락합니다.',
          'Zero-shot 복제, 더 빠르고 새로운 아키텍처 → F5-TTS. ~3초의 오디오, flow-matching, CC-BY-NC-4.0(비상업용).',
          'CPU / Raspberry Pi에서의 속도 → Piper(MIT). Kokoro(Apache 2.0)는 더 높은 품질의 CPU 대안입니다.',
          '최고의 영어 내레이션 → StyleTTS 2(MIT). 상업적으로 친화적인 최고 품질의 오프라인 복제 → Tortoise(Apache 2.0), 단 매우 느림(문장당 수 분).',
          '창의적 오디오(웃음, 음악, 환경음) → Bark(MIT). 느리고 생성적.',
          '모든 엔진은 100% 오프라인 — API 키 불필요, 오디오 데이터가 클라우드로 전송되지 않습니다.',
        ],
        updatedDate: '2026-06-15',
      },
    },
    toc: [
      { label: '핵심 사항', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '로컬 TTS가 중요한 이유', anchor: '#why-local-tts' },
      { label: '비교 표', anchor: '#comparison-table' },
      { label: '첫 오디오 지연 시간 비교', anchor: '#latency-table' },
      { label: 'Piper TTS — 가장 빠른 경량 옵션', anchor: '#piper' },
      { label: 'Coqui TTS — 최고의 오픈소스 툴킷', anchor: '#coqui' },
      { label: 'XTTS v2 — 최고의 음성 복제 품질', anchor: '#xtts' },
      { label: 'Bark — 음성을 넘어선 생성적 오디오', anchor: '#bark' },
      { label: 'StyleTTS 2 — 최고의 자연스러운 품질', anchor: '#styletts' },
      { label: 'F5-TTS — Zero-shot 음성 복제', anchor: '#f5tts' },
      { label: '라이선스 및 상업적 사용 (CPML, MIT, CC-BY-NC)', anchor: '#licenses' },
      { label: 'CPML 비대화형 수락 (COQUI_TOS_AGREED)', anchor: '#cpml-noninteractive' },
      { label: '로컬 TTS vs ElevenLabs', anchor: '#local-vs-cloud' },
      { label: '선택 방법', anchor: '#how-to-choose' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '참고 자료', anchor: '#sources' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper는 속도와 임베디드 사용에 올바른 선택입니다.** 완전히 CPU에서 동작하며, Raspberry Pi 5에서 실시간으로 음성을 생성하고 다운로드 가능한 음성 패키지를 통해 20개 이상의 언어를 지원합니다. MIT 라이선스.',
          '**XTTS v2는 2026년 최고의 로컬 음성 복제 옵션입니다 — 하지만 비상업용입니다.** 6초의 참조 오디오로 17개 언어에서 음성을 복제합니다(GPU 4~6 GB VRAM). CPML 라이선스는 비상업용이며, Coqui가 문을 닫은(2024년 1월) 이후 상업용 라이선스를 판매하지 않으므로 — XTTS v2를 비상업용으로만 취급하십시오. Docker/CI에서 `COQUI_TOS_AGREED=1`로 CPML을 비대화형으로 수락합니다.',
          '**F5-TTS는 zero-shot 음성 복제에서 가장 빠르게 성장하는 대안입니다.** GPT 대신 flow-matching 아키텍처를 사용하며, ~3초의 참조 오디오로 음성을 복제하고, 더 빠른 추론 속도로 XTTS v2와 경쟁적인 품질을 달성합니다. 라이선스: CC-BY-NC-4.0(비상업용).',
          '**Coqui TTS는 가장 유연한 오픈소스 TTS 툴킷입니다.** MPL 2.0 라이선스 하에 다양한 백엔드(Tacotron2, VITS, XTTS), 음성 복제, 20개 이상의 언어를 지원합니다. 참고: Coqui 회사는 2024년 1월에 문을 닫았으며, 프로젝트는 현재 커뮤니티에서 유지 관리합니다.',
          '**Bark는 비음성 오디오를 생성하는 유일한 로컬 TTS입니다.** 음성과 함께 웃음, 기침, 한숨, 음악 조각, 환경 음향 효과를 생성할 수 있습니다 — 창의적 오디오, 팟캐스트 제작, 인터랙티브 픽션에 유용합니다. 출력이 느리고 비결정적입니다.',
          '**StyleTTS 2는 오픈소스 영어 TTS 엔진 중 가장 높은 MOS를 달성합니다.** 확산 기반 스타일 전달이 영어 내레이션에서 거의 인간에 가까운 자연스러움을 생성합니다. 영어 전용이며 음성 복제를 지원하지 않습니다.',
          '**라이선스가 상업적 사용을 결정하며 — 구분은 명확합니다.** 상업용 제품에 무료: Piper, Bark, StyleTTS 2(MIT)와 Kokoro, Tortoise(Apache 2.0). 조건부 상업적: Coqui TTS 툴킷(MPL 2.0, 툴킷 수정 사항 공개). 비상업용만: XTTS v2(CPML)와 F5-TTS(CC-BY-NC-4.0) — 둘 다 별도 계약 필요. 상업적 음성 복제에는 Tortoise(Apache 2.0) 또는 VITS 백엔드의 Coqui 툴킷(MPL 2.0)을 사용하십시오. 사실 참고 자료이며 법률 자문이 아닙니다.',
          '**어떤 엔진도 대규모 상업적 TTS의 품질과 동등하지 않습니다.** ElevenLabs, Google TTS, Azure TTS는 여전히 로컬 엔진을 능가합니다. 로컬 TTS는 프라이버시, 비용, 오프라인 운영이 중요할 때 올바른 선택입니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**가장 빠른 로컬 TTS:** Piper — Raspberry Pi 5에서 실시간, 최신 데스크톱 CPU에서 실시간보다 ~10배 빠름.',
          '**최고의 음성 복제 품질:** XTTS v2 — 6초의 참조 오디오, 17개 언어로 다국어 복제.',
          '**가장 빠른 zero-shot 음성 복제:** F5-TTS — ~3초의 오디오, flow-matching, RTX 4070에서 ~3~5배 실시간.',
          '**가장 유연한 오픈소스 툴킷:** Coqui TTS — VITS, Tacotron2, XTTS 백엔드 지원, 20개 이상의 언어 모델.',
          '**유일한 생성적 오디오:** Bark — 웃음, 한숨, 음악, 환경음. 모든 엔진 중 가장 느림.',
          '**최고의 영어 내레이션 품질:** StyleTTS 2 — 확산 기반 스타일 전달, LJSpeech 벤치마크에서 거의 인간에 가까운 MOS.',
          '**상업적 사용 무료:** Piper, Bark, StyleTTS 2(MIT); Kokoro, Tortoise(Apache 2.0); Coqui TTS 툴킷(MPL 2.0, 조건부). **비상업용:** XTTS v2(CPML), F5-TTS(CC-BY-NC-4.0).',
          '**XTTS v2 음성 및 언어:** 고정된 음성 목록이 없습니다 — 6초의 참조 클립을 제공하면 그 음성을 복제합니다. 모델에는 내장 화자 프리셋이 함께 제공되며, 17개 언어로 생성합니다: en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**XTTS v2 VRAM:** 모델 가중치 ~2 GB; 실행에 최소 4 GB, 실시간 추론에 4~6 GB 권장.',
          '**CI/Docker에서 CPML 수락:** `export COQUI_TOS_AGREED=1` — 대화형 프롬프트가 필요 없습니다.',
          '**VRAM 요구 사항:** Piper: CPU 전용. Kokoro: CPU / 1~2 GB. StyleTTS 2: 2~4 GB. Coqui VITS: 2~4 GB. F5-TTS: 3~5 GB. XTTS v2: 4~6 GB. Bark: 4~8 GB. Tortoise: 4~8 GB.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: '로컬 TTS가 중요한 이유',
        content: '클라우드 TTS 서비스(ElevenLabs, Google TTS, Amazon Polly, Azure Speech)는 편리하지만 문자당 청구, 오디오 데이터 보존 정책, 네트워크 왕복 지연 시간이라는 세 가지 문제가 있습니다. 로컬 TTS는 이 세 가지 문제를 모두 해결합니다.',
        items: [
          '**프라이버시:** 텍스트 콘텐츠가 컴퓨터를 벗어나지 않습니다. 의료 받아쓰기, 법적 요약, 기밀 문서 낭독에 필수적입니다.',
          '**비용:** 클라우드 TTS 가격은 일반적으로 백만 문자당 $4~$30입니다. 월 1천만 문자를 생성하는 개발자는 로컬 설정으로 월 $40~$300을 절약할 수 있습니다.',
          '**지연 시간:** 네트워크 왕복 없음. Piper는 CPU에서 50ms 미만에 첫 오디오 토큰을 생성합니다.',
          '**사용자 지정:** 음성 복제(XTTS v2, F5-TTS, Coqui)는 몇 초의 오디오에서 사용자 지정 음성을 만들 수 있습니다.',
          '**오프라인 운영:** 비행기, 보안 시설, 인터넷이 없는 원격 지역에서 작동합니다.',
          '**스마트 홈:** Piper는 항상 켜져 있는 로컬 음성 인터페이스를 위한 주요 TTS 레이어입니다 — Raspberry Pi에서 실시간, GPU 불필요. [스마트 홈용 로컬 음성 어시스턴트 →](/ko/smart-home/local-voice-assistant-smart-home)를 참조하십시오.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교 표',
        content: '프로덕션 배포를 위한 가장 중요한 지표에서 비교한 모든 로컬 TTS 엔진.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Piper는 CPU에서 가장 빠르고, XTTS v2는 최고의 음성 복제 품질을 제공하며, F5-TTS는 더 새로운 아키텍처로 zero-shot 복제를 제공하고, Bark는 웃음과 음악을 생성하는 유일한 엔진이며, StyleTTS 2는 영어 내레이션에서 최고의 자연스러움을 갖습니다.',
          },
          {
            type: 'plain-terms',
            text: '대부분의 오프라인 TTS 요구에 대해: 속도와 단순성을 원하면 Piper, 허용적 라이선스의 음성 복제를 원하면 Coqui, GPU가 있고 최고의 복제 품질을 원하면 XTTS v2, 더 빠른 zero-shot 복제를 원하면 F5-TTS를 사용하십시오.',
          },
        ],
        note: 'MOS(mean opinion score)는 1~5 척도로 5가 인간 음성과 구별할 수 없음을 의미합니다. 점수는 근사치이며 공개된 벤치마크 또는 커뮤니티 평가를 기반으로 합니다. 인간 참조 MOS: ~4.5.',
        columns: ['도구', '품질', '속도', '음성 복제', '다국어', 'VRAM', '라이선스', 'MOS(영어)'],
        rows: [
          { '도구': 'Piper', '품질': '좋음', '속도': '매우 빠름(CPU)', '음성 복제': '없음', '다국어': '예(20개+ 언어)', 'VRAM': 'CPU 전용', '라이선스': 'MIT', 'MOS(영어)': '~3.5' },
          { '도구': 'Kokoro', '품질': '매우 좋음', '속도': '빠름(CPU)', '음성 복제': '없음', '다국어': '영어 + 확장 중', 'VRAM': 'CPU / 1~2 GB', '라이선스': 'Apache 2.0', 'MOS(영어)': '~4.0' },
          { '도구': 'Coqui TTS', '품질': '매우 좋음', '속도': '보통', '음성 복제': '있음', '다국어': '예(20개+ 언어)', 'VRAM': '2~4 GB', '라이선스': 'MPL 2.0', 'MOS(영어)': '~3.8' },
          { '도구': 'XTTS v2', '품질': '우수', '속도': '느림', '음성 복제': '있음(최고)', '다국어': '예(17개 언어)', 'VRAM': '4~6 GB', '라이선스': 'CPML(비상업용)', 'MOS(영어)': '~4.1' },
          { '도구': 'F5-TTS', '품질': '우수', '속도': '보통~빠름', '음성 복제': '있음(zero-shot)', '다국어': '예(다국어)', 'VRAM': '3~5 GB', '라이선스': 'CC-BY-NC-4.0', 'MOS(영어)': '~4.1' },
          { '도구': 'Bark', '품질': '독특함/가변적', '속도': '느림', '음성 복제': '제한적', '다국어': '예(다국어)', 'VRAM': '4~8 GB', '라이선스': 'MIT', 'MOS(영어)': '~3.2~4.0(가변적)' },
          { '도구': 'StyleTTS 2', '품질': '우수(영어)', '속도': '보통', '음성 복제': '없음', '다국어': '주로 영어', 'VRAM': '2~4 GB', '라이선스': 'MIT', 'MOS(영어)': '~4.3' },
          { '도구': 'Tortoise', '품질': '우수', '속도': '매우 느림(문장당 수 분)', '음성 복제': '있음', '다국어': '주로 영어', 'VRAM': '4~8 GB', '라이선스': 'Apache 2.0', 'MOS(영어)': '~4.2' },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: '첫 오디오 지연 시간 비교',
        content: '첫 오디오 지연 시간은 텍스트 입력부터 첫 번째 청취 가능한 출력까지의 시간입니다. 음성 어시스턴트와 인터랙티브 애플리케이션에 필수적입니다.',
        columns: ['엔진', '첫 오디오(RTX 4070)', '첫 오디오(CPU)', '첫 오디오(M5 Pro)'],
        rows: [
          { '엔진': 'Piper', '첫 오디오(RTX 4070)': '~30 ms', '첫 오디오(CPU)': '~50 ms', '첫 오디오(M5 Pro)': '~40 ms' },
          { '엔진': 'Kokoro', '첫 오디오(RTX 4070)': '~50 ms', '첫 오디오(CPU)': '~80 ms', '첫 오디오(M5 Pro)': '~60 ms' },
          { '엔진': 'Coqui VITS', '첫 오디오(RTX 4070)': '~100 ms', '첫 오디오(CPU)': '~300 ms', '첫 오디오(M5 Pro)': '~150 ms' },
          { '엔진': 'StyleTTS 2', '첫 오디오(RTX 4070)': '~150 ms', '첫 오디오(CPU)': '~500 ms', '첫 오디오(M5 Pro)': '~200 ms' },
          { '엔진': 'F5-TTS', '첫 오디오(RTX 4070)': '~200 ms', '첫 오디오(CPU)': '~800 ms', '첫 오디오(M5 Pro)': '~300 ms' },
          { '엔진': 'XTTS v2', '첫 오디오(RTX 4070)': '~300 ms', '첫 오디오(CPU)': '~1500 ms', '첫 오디오(M5 Pro)': '~500 ms' },
          { '엔진': 'Bark', '첫 오디오(RTX 4070)': '~500 ms', '첫 오디오(CPU)': '~3000 ms', '첫 오디오(M5 Pro)': '~800 ms' },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — 가장 빠른 경량 옵션',
        content: '**Piper는 홈 자동화 및 임베디드 사용을 위해 Rhasspy가 개발한 빠른 로컬 음성 합성 시스템입니다.** onnxruntime 백엔드를 갖춘 VITS 기반 신경망 아키텍처를 사용하며, GPU 없이 Raspberry Pi 4 또는 5에서 실시간으로 동작합니다.',
        items: [
          '**아키텍처:** ONNX 추론이 있는 VITS 신경망 TTS. 단일 보드 컴퓨터와 임베디드 Linux용으로 설계.',
          '**설치:** `pip install piper-tts`. 사전 학습된 음성 패키지는 Hugging Face의 Piper voices 저장소에서 사용 가능합니다.',
          '**음성 패키지:** 20개 이상의 언어, 언어당 다양한 음성 옵션. 각 음성 패키지는 20~200 MB의 ONNX 모델 파일입니다.',
          '**속도:** 최신 데스크톱 CPU에서 실시간보다 ~10배 빠릅니다. Raspberry Pi 5에서 실시간. 첫 오디오 지연 시간 50ms 미만.',
          '**Apple Silicon:** M5 Pro에서 ~15배 실시간(CPU, ARM NEON).',
          '**이상적인 용도:** 홈 어시스턴트, 키오스크 장치, 임베디드 음성 인터페이스, GPU가 없는 프라이버시 중심의 낭독.',
          '**제한 사항:** 음성 복제 없음. 품질은 "좋음" — XTTS v2 또는 StyleTTS 2에 비해 명확히 합성음으로 들립니다.',
          '**라이선스:** MIT — 완전한 상업적 사용 가능.',
          '**샘플 듣기:** [Piper 음성 샘플](https://rhasspy.github.io/piper-samples/)',
          '**Kokoro TTS — Piper의 대안:** Kokoro TTS는 CPU에서 빠른 속도를 유지하면서 Piper보다 더 자연스러운 음질을 달성합니다. Apache 2.0 라이선스. [Kokoro](https://github.com/hexgrad/kokoro)',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — 최고의 오픈소스 툴킷',
        content: '**Coqui TTS는 다양한 모델 아키텍처와 음성 복제를 지원하는 Python 음성 합성 툴킷입니다.** Coqui 회사(2024년 1월에 문을 닫음)가 개발했으며 현재는 오픈소스 커뮤니티에서 유지 관리하고 있습니다. 툴킷은 Tacotron2, VITS, XTTS 백엔드를 지원합니다.',
        items: [
          '**설치:** `pip install TTS`. 모델은 첫 사용 시 자동으로 다운로드됩니다.',
          '**백엔드 옵션:** VITS(가장 빠름, 좋은 품질), Tacotron2(구형, 더 느림), XTTS(최고 품질).',
          '**언어:** `tts --list_models`를 통해 20개 이상의 언어 모델 사용 가능.',
          '**VRAM:** VITS 백엔드: 2~4 GB; XTTS 백엔드: 4~6 GB.',
          '**Apple Silicon:** M5 Pro에서 ~8배 실시간(CPU). Metal GPU 가속 없음.',
          '**커뮤니티 현황:** Coqui Inc는 2024년 1월에 문을 닫았습니다. 오픈소스 저장소(`coqui-ai/TTS`)는 커뮤니티에서 유지 관리합니다. 활성 상업적 지원은 없습니다.',
          '**라이선스:** MPL 2.0 — 상업적 사용 허용, 단 수정 사항의 소스 코드를 공개해야 합니다.',
          '**이상적인 용도:** 허용적 라이선스의 오픈소스 툴킷으로 음성 복제를 원하는 개발자.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — 최고의 음성 복제 품질',
        content: '**XTTS v2(Coqui 제작)는 2026년 로컬에서 사용 가능한 최고 품질의 음성 복제 엔진입니다.** 크로스 언어 전달이 있는 GPT 기반 아키텍처를 사용합니다.',
        items: [
          '**음성 복제:** 6초의 참조 오디오로 설득력 있는 음성 복제가 가능합니다. 3초도 허용 가능한 품질을 생성합니다.',
          '**다국어 복제:** 한 언어로 음성을 복제하고 동일한 음성 특성으로 17개 언어에서 말하기를 생성합니다.',
          '**언어(17개):** 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 폴란드어, 터키어, 러시아어, 네덜란드어, 체코어, 아랍어, 중국어(zh-cn), 일본어, 헝가리어, 한국어, 힌디어. 한국어와 힌디어는 XTTS v2.0.3에서 추가되었습니다.',
          '**"XTTS v2 음성":** 이름이 지정된 고정 음성 카탈로그는 없습니다. XTTS v2는 복제 모델입니다 — 6초의 참조 클립을 제공하면 해당 화자를 재현합니다. 저장소에는 빠른 테스트를 위한 몇 가지 내장 화자 프리셋이 제공되지만, 의도된 워크플로는 자신의 `speaker_wav`를 제공하는 것입니다.',
          '**VRAM:** 모델 가중치는 ~2 GB입니다. 4 GB VRAM이 실질적인 최소치이며, 실시간 추론에는 4~6 GB가 권장됩니다. CPU에서도 동작하지만 ~5~10배 느립니다.',
          '**속도:** 느림 — RTX 4070에서 ~2배 실시간. 실시간 음성 어시스턴트 파이프라인에 적합하지 않습니다.',
          '**Apple Silicon:** M5 Pro에서 ~3배 실시간(CPU, Metal 가속 없음).',
          '**샘플 듣기:** [Hugging Face의 XTTS v2 데모](https://huggingface.co/spaces/coqui/xtts)',
          '**라이선스:** CPML(Coqui Public Model License) — 비상업용. CPML은 모델 **및 그 오디오 출력**의 개인, 연구, 취미 용도를 허용하지만, 별도의 상업용 계약 없이는 상업적 사용(유료 제품, SaaS, 광고 지원 콘텐츠, 클라이언트 작업)을 금지합니다. Coqui Inc가 2024년 1월에 문을 닫았으므로 현재 XTTS v2 상업용 라이선스를 판매하는 주체가 없습니다 — 실질적으로 XTTS v2를 비상업용으로만 취급하십시오. `COQUI_TOS_AGREED` 환경 변수는 [CPML 비대화형 수락](#cpml-noninteractive) 섹션을 참조하십시오.',
        ],
        codeBlock: 'from TTS.api import TTS\n\ntts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")\ntts.tts_to_file(\n    text="안녕하세요, 저는 당신의 음성 어시스턴트입니다.",\n    speaker_wav="reference_voice.wav",\n    language="ko",\n    file_path="output.wav"\n)',
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'XTTS v2는 CPML(비상업용) 라이선스의 적용을 받습니다. 상업적 사용 — 제품, SaaS, 서비스 또는 유료 클라이언트 작업 — 에는 별도의 상업용 계약이 필요하며, Coqui Inc가 2024년 1월에 문을 닫았으므로 현재 그러한 계약을 구매할 수 없습니다. 상업적 음성 복제가 필요한 경우 Tortoise(Apache 2.0) 또는 VITS 백엔드의 Coqui TTS 툴킷(MPL 2.0)을 사용하십시오. 이는 사실 참고 자료이며 법률 자문이 아닙니다 — 배포 전에 CPML을 직접 읽으십시오.' },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — 음성을 넘어선 생성적 오디오',
        content: '**Bark(Suno AI 제작)는 텍스트 프롬프트에서 음성, 음악, 웃음, 기침, 한숨 및 환경음을 생성하는 텍스트-오디오 생성 모델입니다.**',
        items: [
          '**고유한 기능:** 텍스트에 `[laughs]`, `[sighs]`, `[music]`를 포함하면 Bark가 음성과 함께 해당 사운드를 생성합니다.',
          '**속도:** 느림 — RTX 4090에서도 실시간보다 2~4배 느립니다.',
          '**Apple Silicon:** M5 Pro에서 ~1.5배 실시간(CPU, 부분적 MPS).',
          '**이상적인 용도:** 창의적 오디오, 음향 효과가 있는 팟캐스트 제작, 인터랙티브 픽션.',
          '**VRAM:** GPU 4~8 GB.',
          '**설치:** `pip install suno-bark`. 모델은 첫 실행 시 다운로드됩니다(~2 GB).',
          '**라이선스:** MIT — 완전한 상업적 사용 가능.',
          '**제한 사항:** 신뢰할 수 있는 음성 복제 없음.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — 최고의 자연스러운 품질',
        content: '**StyleTTS 2는 LJSpeech 벤치마크에서 거의 인간에 가까운 MOS를 달성하는 확산 기반 TTS 모델입니다.**',
        items: [
          '**품질:** LJSpeech 벤치마크에서 오픈소스 영어 TTS 엔진 중 가장 높은 MOS 점수.',
          '**이상적인 용도:** 오디오북 내레이션, 전문 보이스오버, 팟캐스트 제작.',
          '**설치:** GitHub 저장소 클론, `pip install -r requirements.txt`, 모델 체크포인트 다운로드(~500 MB).',
          '**언어 지원:** 주로 영어. 영어 이외의 언어 사용은 권장하지 않습니다.',
          '**음성 복제:** 지원되지 않습니다.',
          '**VRAM:** GPU 2~4 GB. RTX 4070에서 ~5~8배 실시간.',
          '**라이선스:** MIT — 완전한 상업적 사용 가능.',
          '**샘플 듣기:** [GitHub의 StyleTTS 2](https://github.com/yl4579/StyleTTS2)',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Zero-shot 음성 복제, 완전 개방형',
        content: '**F5-TTS는 zero-shot 음성 복제가 있는 flow-matching 기반 TTS 모델로 — fine-tuning 없이 ~3초의 참조 오디오에서 모든 음성을 복제합니다.**',
        items: [
          '**아키텍처:** Flow-matching(확산의 변형). 일반적으로 경쟁력 있는 품질로 더 빠른 추론을 제공합니다.',
          '**음성 복제:** ~3초의 참조 오디오로 zero-shot 음성 복제가 가능합니다.',
          '**품질:** 영어에서 XTTS v2와 경쟁적. 커뮤니티 평가에서 MOS 약 ~4.1.',
          '**속도:** RTX 4070에서 ~3~5배 실시간.',
          '**VRAM:** GPU 3~5 GB 권장.',
          '**설치:** `pip install f5-tts` 또는 [GitHub](https://github.com/SWivid/F5-TTS)에서 클론.',
          '**라이선스:** CC-BY-NC-4.0 — 비상업적 사용만 가능.',
          '**중요한 이유:** XTTS v2가 너무 느리거나 CPML 라이선스가 우려되는 경우 F5-TTS가 주요 대안입니다.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: '라이선스 및 상업적 사용 — 이 TTS 엔진을 상업적으로 사용할 수 있습니까?',
        content: '라이선스는 프로덕션 사용에서 가장 중요한 단일 요소이며, 이 엔진들을 명확하게 두 그룹으로 나눕니다. 허용적 라이선스 엔진(MIT, Apache 2.0)은 상업용 제품에 무료로 출시할 수 있습니다. 제한된 엔진(CPML, CC-BY-NC-4.0)은 비상업용입니다 — 유료 제품, SaaS, 광고 지원 콘텐츠 또는 클라이언트 작업에 사용하려면 별도 계약이 필요합니다. 아래 표는 각 엔진의 정확한 라이선스와 "상업적으로 사용할 수 있는가?"에 대한 직접적인 답변을 제공합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '상업용 제품의 로컬 TTS의 경우 Piper, Bark, StyleTTS 2(MIT), Kokoro와 Tortoise(Apache 2.0), 그리고 VITS/Tacotron2 백엔드의 Coqui TTS 툴킷(MPL 2.0)이 모두 허용됩니다. XTTS v2(CPML)와 F5-TTS(CC-BY-NC-4.0)는 비상업용입니다.',
          },
          {
            type: 'plain-terms',
            text: '가장 인기 있는 두 음성 복제 모델 — XTTS v2와 F5-TTS — 는 별도 라이선스 없이는 상업적으로 사용할 수 없습니다. 상업적 음성 복제에는 Tortoise(Apache 2.0) 또는 VITS 백엔드의 Coqui 툴킷(MPL 2.0)이 안전한 선택입니다.',
          },
        ],
        columns: ['도구', '라이선스', '상업적 가능?', '주요 조건'],
        rows: [
          { '도구': 'Piper', '라이선스': 'MIT', '상업적 가능?': '예 — 제한 없음', '주요 조건': 'MIT 고지 포함; 음성별 모델 라이선스 확인' },
          { '도구': 'Kokoro', '라이선스': 'Apache 2.0', '상업적 가능?': '예 — 제한 없음', '주요 조건': 'Apache 2.0 고지 포함' },
          { '도구': 'Coqui TTS (툴킷)', '라이선스': 'MPL 2.0', '상업적 가능?': '예 — 조건 있음', '주요 조건': '툴킷 파일에 대한 수정 사항의 소스 공개' },
          { '도구': 'XTTS v2 (모델)', '라이선스': 'CPML', '상업적 가능?': '아니오 — 비상업용', '주요 조건': '상업용에는 계약 필요; Coqui가 문을 닫은(2024년 1월) 이후 판매처 없음' },
          { '도구': 'F5-TTS', '라이선스': 'CC-BY-NC-4.0', '상업적 가능?': '아니오 — 비상업용', '주요 조건': 'NC는 fine-tune에도 이어짐(Emilia 학습 데이터)' },
          { '도구': 'Bark', '라이선스': 'MIT', '상업적 가능?': '예 — 제한 없음', '주요 조건': 'MIT 저작권 고지 포함' },
          { '도구': 'StyleTTS 2', '라이선스': 'MIT', '상업적 가능?': '예 — 제한 없음', '주요 조건': 'MIT 저작권 고지 포함' },
          { '도구': 'Tortoise', '라이선스': 'Apache 2.0', '상업적 가능?': '예 — 제한 없음', '주요 조건': '저작자 표시; 복제 음성에 대한 동의 확보' },
        ],
        callouts: [
          { type: 'note', text: 'Coqui TTS(툴킷, MPL 2.0)와 XTTS v2(특정 모델 가중치, CPML)는 서로 다른 라이선스를 가집니다. VITS 또는 Tacotron2 백엔드의 Coqui TTS 툴킷은 MPL 2.0 하에 상업용 제품에 출시할 수 있습니다. CPML 비상업용 제한은 특히 XTTS v2 모델 가중치와 그 오디오 출력에 적용되며 — 툴킷 코드에는 적용되지 않습니다.' },
          { type: 'warning', text: '이는 사실 참고 자료이며 법률 자문이 아닙니다. 라이선스는 변경되며 예외 사례(음성 동의, 데이터셋 조건, 음성별 모델 라이선스)가 중요합니다. 상업적 배포를 위해 이러한 조건에 의존하기 전에 각 엔진의 라이선스 파일을 직접 읽고 변호사와 상담하십시오.' },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'CPML 비대화형 수락 (COQUI_TOS_AGREED)',
        content: 'CPML의 적용을 받는 XTTS / Coqui 모델을 처음 로드하면, 라이브러리가 라이선스 조건을 출력하고 수락을 위해 "y" 입력을 기다립니다. 이 대화형 프롬프트는 Docker 빌드, CI 파이프라인, 헤드리스 서버에서 멈춥니다. CPML을 비대화형으로 수락하려면 `COQUI_TOS_AGREED` 환경 변수를 `1`로 설정하십시오 — 이는 모델이 로드되기 전에 Coqui Public Model License를 읽고 동의했음을 기록합니다. 이것은 라이선스를 변경하지 않습니다. CPML은 여전히 비상업용이며, 이 변수를 설정하는 것은 그 조건에 대한 동의이지 면제가 아닙니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '환경 변수 COQUI_TOS_AGREED=1을 설정하여 Docker, CI 또는 헤드리스 환경에서 대화형 프롬프트 없이 Coqui Public Model License(CPML)를 수락합니다.',
          },
          {
            type: 'plain-terms',
            text: '셸이나 Dockerfile에서는 `export COQUI_TOS_AGREED=1`을 사용하고, Python에서는 모델을 가져오거나 로드하기 전에 `os.environ["COQUI_TOS_AGREED"] = "1"`을 설정하십시오. 어느 쪽이든 모델이 키보드 입력을 기다리지 않고 로드됩니다.',
          },
        ],
        items: [
          '**셸 / CI:** 스크립트를 실행하기 전에 `export COQUI_TOS_AGREED=1`.',
          '**Docker:** Dockerfile에 `ENV COQUI_TOS_AGREED=1`을 추가하거나 `docker run`에 `-e COQUI_TOS_AGREED=1`을 전달하십시오.',
          '**Python(모델 로드 전에 설정):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — `TTS(...)`가 XTTS 모델을 인스턴스화하기 전에 실행되어야 합니다.',
          '**기능:** CPML의 비대화형 수락을 기록하여 모델 로드가 `y/n` 프롬프트에서 멈추지 않도록 합니다. 상업용 라이선스가 아니며 비상업용 제한을 제거하지 않습니다.',
        ],
        codeBlock: `# 1) Shell / CI — accept the CPML once for the session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — bake acceptance into the image
# ENV COQUI_TOS_AGREED=1

# 3) Python — set it before the model is created
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # must be set BEFORE the TTS() call below

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Model now loads without the interactive license prompt`,
        codeLanguage: 'python',
        callouts: [
          { type: 'warning', text: 'COQUI_TOS_AGREED=1은 대화형 프롬프트만 억제합니다 — 이는 비상업용 라이선스로 남아 있는 CPML에 대한 동의입니다. XTTS v2에 대한 상업적 권리를 부여하지 않습니다.' },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: '로컬 TTS vs ElevenLabs 및 클라우드 TTS',
        content: 'ElevenLabs, Google Text-to-Speech, Azure Speech는 2026년 TTS의 품질 상한선으로 남아 있습니다.',
        items: [
          '**품질 상한선:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper.',
          '**지연 시간:** 로컬 Piper(첫 오디오 ~30~50 ms)는 ElevenLabs API 왕복(~300~500 ms)보다 빠릅니다.',
          '**비용:** ElevenLabs는 월 $5~99 요금을 청구합니다. 로컬 TTS는 초기 하드웨어 이후 $0입니다.',
          '**프라이버시:** 로컬 TTS = 오디오 데이터가 어디에도 전송되지 않음. 민감한 콘텐츠에 필수적입니다.',
          '**오프라인 기능:** 로컬 = 완전 오프라인. ElevenLabs = 인터넷 필요.',
          '**클라우드를 사용할 때:** 전문 음성 제작, 최고 품질이 필요한 고객 대면 제품.',
          '**로컬을 사용할 때:** 프라이버시 중요 오디오, 임베디드 장치, 비용에 민감한 배치 처리, 오프라인 환경.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '선택 방법',
        content: '요구 사항에서 올바른 TTS 엔진까지의 결정 다이어그램:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '음성 복제가 필요합니까? → XTTS v2(최고 품질) 또는 F5-TTS(더 빠름) 또는 Coqui TTS(오픈 라이선스). CPU 속도가 필요합니까? → Piper. 창의적 오디오가 필요합니까? → Bark. 최고의 영어 품질이 필요합니까? → StyleTTS 2.',
          },
          {
            type: 'plain-terms',
            text: '누군가의 음성을 복제하려면 품질을 위해 XTTS v2, 더 빠른 추론을 위해 F5-TTS, 허용적 라이선스를 위해 Coqui VITS를 사용하십시오. Raspberry Pi용 음성 인터페이스를 구축하는 경우 Piper를 사용하십시오. 음향 효과가 있는 팟캐스트를 만드는 경우 Bark를 시도하십시오.',
          },
        ],
        items: [
          '**음성 복제가 필요합니까?** → 예: XTTS v2(최고 품질, CPML) 또는 F5-TTS(더 빠름, CC-BY-NC-4.0) 또는 Coqui VITS(좋은 품질, MPL 2.0). 아니오: Piper(속도), StyleTTS 2(품질).',
          '**CPU / Raspberry Pi 전용으로 실행해야 합니까?** → Piper만. Kokoro는 더 높은 품질 CPU 대안입니다.',
          '**비음성 사운드가 있는 창의적 오디오가 필요합니까?** → Bark.',
          '**최고의 영어 내레이션 품질이 필요합니까?** → StyleTTS 2.',
          '**다국어 지원이 필요합니까?** → XTTS v2(17개 언어, 다국어 복제), Coqui(20개+ 언어), Piper(20개+ 언어 패키지).',
          '**완전히 상업적인 MIT 라이선스가 필요합니까?** → Piper, Bark 또는 StyleTTS 2.',
          '**음성 어시스턴트 파이프라인을 구축 중입니까?** → 낮은 지연 시간 TTS 출력을 위해 Piper를 사용하십시오(/ko/power-local-llm/build-local-voice-assistant-2026 참조).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'XTTS v2로 음성을 복제하려면 얼마나 많은 참조 오디오가 필요합니까?',
            a: 'XTTS v2는 최소 3초의 깨끗한 참조 오디오가 필요하지만 6초 이상이면 결과가 현저히 향상됩니다. 오디오는 배경 소음이 최소화된 단일 화자여야 합니다.',
          },
          {
            q: 'Piper TTS를 상업적 제품에 사용할 수 있습니까?',
            a: '예. Piper는 MIT 라이선스로 제한 없는 상업적 사용이 허용됩니다. 음성 모델(ONNX 파일)은 음성별로 별도 라이선스가 있을 수 있으므로 배포 전 확인하십시오.',
          },
          {
            q: '회사가 문을 닫은 후에도 Coqui TTS가 유지 관리됩니까?',
            a: '예, 하지만 속도가 줄어들었습니다. Coqui 회사는 2024년 1월에 문을 닫았지만 오픈소스 저장소(`coqui-ai/TTS`)는 커뮤니티 기여자들이 유지 관리합니다.',
          },
          {
            q: '어떤 로컬 TTS 엔진이 최고의 다국어 지원을 가지고 있습니까?',
            a: 'XTTS v2는 17개 언어를 지원하며 다국어 음성 복제가 가능합니다. Coqui TTS는 20개 이상의 언어 모델을 갖추고 있습니다. 단일 참조 샘플에서 여러 언어로 복제해야 한다면 XTTS v2가 유일한 옵션입니다.',
          },
          {
            q: 'Bark가 음악을 생성할 수 있습니까?',
            a: 'Bark는 `[music]` 토큰으로 간단한 음악 조각을 생성할 수 있습니다. 전용 음악 생성기가 아닙니다 — 출력이 짧고 일관되지 않습니다.',
          },
          {
            q: '음성 복제를 위한 최고의 무료 로컬 TTS는 무엇입니까?',
            a: 'F5-TTS(CC-BY-NC-4.0)는 비상업적 사용에 적합합니다. 상업적 사용의 경우 Coqui TTS(VITS 백엔드, MPL 2.0). XTTS v2는 최고의 품질이지만 CPML이 상업적 배포를 제한합니다.',
          },
          {
            q: 'Apple Silicon Mac에서 XTTS v2를 실행할 수 있습니까?',
            a: '예, 하지만 CPU 전용 — M5 Pro에서 약 3배 실시간입니다. 현재 TTS 엔진을 위한 Metal GPU 가속이 없습니다.',
          },
          {
            q: '어떤 로컬 TTS 엔진이 가장 인간처럼 들립니까?',
            a: '영어 내레이션의 경우 StyleTTS 2 — MOS ~4.3. XTTS v2와 F5-TTS는 복제된 음성 자연스러움에서 경쟁적(~4.1). 어떤 것도 ElevenLabs Turbo v2에 필적하지 않습니다.',
          },
          {
            q: 'XTTS v2를 상업적으로 사용할 수 있습니까?',
            a: '아니오, 별도의 상업용 계약 없이는 불가능합니다. XTTS v2는 Coqui Public Model License(CPML)로 배포되며, 이는 모델과 그 오디오 출력의 개인, 연구, 취미 용도는 허용하지만 상업적 사용 — 유료 제품, SaaS, 광고 지원 콘텐츠 또는 클라이언트 작업 — 은 금지합니다. Coqui Inc가 2024년 1월에 문을 닫았으므로 현재 XTTS v2 상업용 라이선스를 판매하는 주체가 없습니다. 실질적으로 XTTS v2를 비상업용으로만 취급하십시오. 상업적 음성 복제에는 Tortoise(Apache 2.0) 또는 VITS 백엔드의 Coqui TTS 툴킷(MPL 2.0)을 사용하십시오. 이는 사실 참고 자료이며 법률 자문이 아닙니다 — 배포 전에 CPML을 직접 읽으십시오.',
          },
          {
            q: 'Docker / CI에서 Coqui CPML 라이선스를 비대화형으로 수락하는 방법은?',
            a: '환경 변수 COQUI_TOS_AGREED를 1로 설정하십시오. Coqui/XTTS 라이브러리는 일반적으로 CPML을 출력하고 "y" 입력을 기다리는데, 이는 Docker 빌드, CI, 헤드리스 서버에서 멈춥니다. COQUI_TOS_AGREED=1을 설정하면 수락이 기록되어 모델이 프롬프트 없이 로드됩니다. 셸이나 CI 단계에서는 `export COQUI_TOS_AGREED=1`, Dockerfile에서는 `ENV COQUI_TOS_AGREED=1`, Python에서는 TTS() 호출 전에 `os.environ["COQUI_TOS_AGREED"] = "1"`을 사용하십시오. 이는 프롬프트만 억제할 뿐입니다 — CPML에 대한 동의이며 상업적 권리를 부여하지 않습니다.',
          },
          {
            q: 'XTTS v2는 몇 개의 음성과 언어를 지원합니까?',
            a: 'XTTS v2에는 이름이 지정된 고정 음성 카탈로그가 없습니다 — 복제 모델이므로 6초의 참조 클립을 제공하면 해당 화자를 재현합니다(저장소에는 빠른 테스트를 위한 몇 가지 내장 화자 프리셋도 제공됩니다). 17개 언어로 음성을 생성합니다: 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 폴란드어, 터키어, 러시아어, 네덜란드어, 체코어, 아랍어, 중국어(zh-cn), 일본어, 헝가리어, 한국어, 힌디어. 복제는 다국어로 가능합니다: 음성을 한 번 복제하면 17개 언어 중 어느 것으로든 생성할 수 있습니다.',
          },
          {
            q: 'Kokoro vs Piper — 어떤 경량 CPU TTS를 사용해야 합니까?',
            a: '둘 다 GPU 없이 CPU에서 빠르게 동작하며 둘 다 허용적 라이선스(Piper는 MIT, Kokoro는 Apache 2.0)이므로 어느 쪽이든 상업적 사용이 안전합니다. 가장 낮은 지연 시간과 가장 넓은 언어 범위가 필요한 경우(20개 이상의 언어 패키지, Raspberry Pi 5에서 실시간) Piper를 선택하십시오 — 임베디드 및 스마트홈 음성의 표준입니다. Piper보다 더 자연스러운 음질을 원하고 약간 더 많은 연산을 허용할 수 있다면 Kokoro(StyleTTS 2 아키텍처 기반의 8200만 파라미터 모델)를 선택하십시오. 영어 품질이 더 무거운 GPU 엔진에 가깝습니다. Raspberry Pi 또는 항상 켜진 어시스턴트에는 Piper, 밀리초보다 품질이 더 중요한 데스크톱/서버 낭독에는 Kokoro를 사용하십시오.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '참고 자료',
        items: [
          '[GitHub의 Piper TTS](https://github.com/rhasspy/piper) — 소스 코드, 음성 패키지, ONNX 모델 다운로드 및 Raspberry Pi 설정 가이드.',
          '[GitHub의 Coqui TTS](https://github.com/coqui-ai/TTS) — 소스 코드, 모델 목록, 음성 복제 문서 및 Python API 참조.',
          '[XTTS v2 문서](https://docs.coqui.ai/en/latest/models/xtts.html) — XTTS v2 모델 카드, 라이선스(CPML) 및 음성 복제 API.',
          '[GitHub의 Bark](https://github.com/suno-ai/bark) — 소스 코드, 오디오 프롬프트 토큰, 모델 다운로드 및 출력 예제.',
          '[GitHub의 StyleTTS 2](https://github.com/yl4579/StyleTTS2) — 아키텍처 논문, 모델 체크포인트 및 추론 가이드.',
          '[GitHub의 F5-TTS](https://github.com/SWivid/F5-TTS) — zero-shot 음성 복제가 있는 flow-matching TTS.',
          '[GitHub의 Kokoro TTS](https://github.com/hexgrad/kokoro) — Apache 2.0 라이선스의 경량 고품질 TTS, CPU에 최적화.',
          '[GitHub의 Tortoise TTS](https://github.com/neonbjb/tortoise-tts) — 음성 복제가 있는 고품질 다중 음성 TTS, Apache 2.0 라이선스. 매우 느리지만 상업적으로 친화적.',
          '[Hugging Face의 XTTS-v2 LICENSE.txt (CPML)](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — XTTS v2를 규율하는 Coqui Public Model License의 전체 텍스트.',
          '[Hugging Face의 Piper voices](https://huggingface.co/rhasspy/piper-voices) — 음성별 라이선스 정보와 함께 사용 가능한 모든 언어/음성 패키지.',
          '[Piper 음성 샘플](https://rhasspy.github.io/piper-samples/) — 지원되는 언어의 모든 Piper 음성에 대한 오디오 데모.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 완전 오프라인 음성 어시스턴트 구축](/ko/power-local-llm/build-local-voice-assistant-2026) — 완전한 Whisper + LLM + TTS 파이프라인의 출력 레이어로 Piper 또는 Coqui TTS를 사용합니다.',
          '[로컬 음성 인식 2026: Whisper.cpp vs faster-whisper](/ko/power-local-llm/local-whisper-stt-comparison-2026) — 음성 파이프라인의 입력 측면: TTS를 보완하는 STT.',
          '[로컬 멀티모달 AI 파이프라인 2026](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 완전한 멀티모달 스택의 음성 출력 레이어로 TTS를 통합합니다.',
          '[스마트폰에서 로컬 음성 어시스턴트 구축](/ko/power-local-llm/voice-assistant-local-mobile-offline) — iOS 시스템 TTS 또는 Piper를 사용한 모바일 음성 어시스턴트.',
          '[로컬 LLM용 최고의 예산 GPU](/ko/local-llms/best-budget-gpus-local-llm) — XTTS v2, F5-TTS, Bark 또는 StyleTTS 2 추론 실행을 위한 GPU 선택.',
          '[콘텐츠 크리에이터를 위한 최고의 AI 텍스트 음성 변환](/ko/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local: 음성 품질 및 지연 시간 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 TTS 및 음성 복제 라이선스 2026: 상업적 사용이 가능한 엔진 (Piper, XTTS v2, F5-TTS, Coqui)',
      description: '상업적 사용이 가능한 로컬 TTS 엔진은? Piper(MIT), XTTS v2(CPML), F5-TTS(CC-BY-NC), Coqui(MPL 2.0)의 정확한 라이선스와 COQUI_TOS_AGREED 환경 변수, 음성 복제 비교. 2026 가이드.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-06-15',
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
        { '@type': 'ListItem', position: 3, name: '로컬 TTS 및 음성 복제 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'Licenças de TTS local e clonagem de voz 2026: quais motores permitem uso comercial (Piper, XTTS v2, F5-TTS, Coqui)',
    seoTitle: 'Licenças de TTS local e clonagem de voz 2026: uso comercial',
    intro:
      'Você pode usar um motor de síntese de voz local em um produto comercial? Depende inteiramente da licença, e as licenças diferem bastante. Piper, Bark e StyleTTS 2 são distribuídos sob MIT, Kokoro e Tortoise sob Apache 2.0 — os quatro livres para uso comercial. O kit de ferramentas Coqui TTS é MPL 2.0 (comercial com condições). Mas os dois modelos de clonagem de voz mais populares são restritos: XTTS v2 usa a Coqui Public Model License (CPML, não comercial) e F5-TTS usa CC-BY-NC-4.0 (não comercial). Este guia dá a licença exata de cada motor, uma resposta clara de "posso usar isto comercialmente?" por motor, a variável de ambiente COQUI_TOS_AGREED para aceitar a CPML de forma não interativa em Docker e CI, e uma comparação direta em qualidade, velocidade, VRAM e clonagem de voz — para você escolher o motor certo sem enviar áudio para a nuvem e sem surpresas de licença em produção. (Licenças verificadas em junho de 2026; isto é referência factual, não aconselhamento jurídico — leia cada licença você mesmo antes do uso comercial.)',
    metaDescription:
      'Quais motores TTS locais permitem uso comercial? Licenças de Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) e Coqui, mais a variável COQUI_TOS_AGREED. Guia 2026.',
    twitterDescription:
      'Licenças de TTS local 2026: quais motores de clonagem de voz permitem uso comercial? Piper/Bark/StyleTTS 2 (MIT), Kokoro/Tortoise (Apache 2.0), XTTS v2 (CPML não comercial), F5-TTS (CC-BY-NC). Mais a variável COQUI_TOS_AGREED. Tudo offline.',
    audience:
      'Desenvolvedores, criadores, produtores de conteúdo e usuários focados em privacidade que desejam síntese e clonagem de voz sem custos de API em nuvem nem exposição de dados.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'síntese de voz local',
    targetKeywords: [
      'TTS local 2026',
      'melhor TTS local',
      'clonagem de voz local',
      'piper vs coqui',
      'XTTS v2 clonagem de voz',
      'F5-TTS clonagem de voz',
      'F5-TTS local',
      'clonagem de voz offline',
      'bark TTS',
      'StyleTTS 2',
      'configurar piper TTS',
      'coqui TTS offline',
    ],
    current_models_mentioned: [
      'Piper TTS',
      'Coqui TTS',
      'XTTS v2',
      'F5-TTS',
      'Bark',
      'StyleTTS 2',
      'Kokoro TTS',
      'Tortoise TTS',
    ],
    current_hardware_mentioned: [
      'CPU (x86/ARM)',
      'Raspberry Pi',
      '2–4 GB GPU',
      '3–5 GB GPU',
      '4–6 GB GPU',
      '4–8 GB GPU',
      'Apple M5 Pro',
      'RTX 4070',
    ],
    leadAnswerBlock:
      '**Para uso comercial, escolha um motor TTS local com licença permissiva: Piper, Bark e StyleTTS 2 são MIT; Kokoro e Tortoise são Apache 2.0 — todos livres para produtos comerciais.** O kit de ferramentas Coqui TTS é MPL 2.0 (comercial permitido se você divulgar as alterações feitas no código-fonte do kit). Os dois modelos de clonagem de voz mais conhecidos são a pegadinha: **XTTS v2 é não comercial sob a Coqui Public Model License (CPML)** e **F5-TTS é não comercial sob CC-BY-NC-4.0** — ambos proíbem uso comercial sem um acordo separado, e como a Coqui Inc fechou em janeiro de 2024 atualmente não há ninguém para vender uma licença comercial do XTTS v2, então trate-o apenas como não comercial. Sobre capacidade: Piper é o mais rápido em CPU (tempo real em uma Raspberry Pi 5, sem GPU); XTTS v2 é a melhor clonagem de voz (6 segundos de áudio de referência → 17 idiomas, 4–6 GB de VRAM); F5-TTS clona a partir de ~3 segundos com inferência de flow-matching mais rápida; Bark gera de forma única risadas, suspiros e sons ambientes; StyleTTS 2 tem a narração em inglês mais natural (sem clonagem); Tortoise é de qualidade muito alta, mas extremamente lento. Isto é referência factual, não aconselhamento jurídico — verifique cada licença você mesmo antes da implantação comercial.',
    quickAnswerTop: {
      pt: {
        question: 'Quais motores TTS locais posso usar comercialmente em 2026?',
        answer:
          'Para uso comercial, escolha um motor com licença permissiva: Piper, Bark e StyleTTS 2 (MIT) e Kokoro e Tortoise (Apache 2.0) são todos livres para produtos comerciais; o kit de ferramentas Coqui TTS (MPL 2.0) é comercial com condições de divulgação de código-fonte. Os dois modelos de clonagem de voz mais populares NÃO são livres para uso comercial: XTTS v2 (CPML) e F5-TTS (CC-BY-NC-4.0) são ambos não comerciais. Sobre capacidade, Piper é o mais rápido em CPU, XTTS v2 tem a melhor qualidade de clonagem (precisa de 4–6 GB de VRAM) e F5-TTS clona a partir de ~3 segundos com inferência mais rápida. Isto é referência factual, não aconselhamento jurídico.',
        bullets: [
          'Livre para uso comercial → Piper (MIT), Bark (MIT), StyleTTS 2 (MIT), Kokoro (Apache 2.0), Tortoise (Apache 2.0). Kit Coqui TTS (MPL 2.0): comercial OK com condições de divulgação de código-fonte.',
          'NÃO livre para uso comercial → XTTS v2 (CPML, não comercial) e F5-TTS (CC-BY-NC-4.0, não comercial). Ambos precisam de acordo separado; XTTS v2 não tem vendedor desde que a Coqui fechou (janeiro de 2024).',
          'Melhor qualidade de clonagem → XTTS v2. 6 seg de áudio → clone em 17 idiomas, 4–6 GB de VRAM. Licença: CPML (não comercial). Aceite a CPML de forma não interativa em Docker/CI com COQUI_TOS_AGREED=1.',
          'Clonagem zero-shot, mais rápida + arquitetura mais nova → F5-TTS. ~3 segundos de áudio, flow-matching, CC-BY-NC-4.0 (não comercial).',
          'Velocidade em CPU / Raspberry Pi → Piper (MIT). Kokoro (Apache 2.0) é uma alternativa em CPU de maior qualidade.',
          'Melhor narração em inglês → StyleTTS 2 (MIT). Clonagem offline de maior qualidade que é compatível com uso comercial → Tortoise (Apache 2.0), mas muito lento (minutos por frase).',
          'Áudio criativo (risadas, música, ambiente) → Bark (MIT). Lento e generativo.',
          'Todos os motores são 100% offline — sem chaves de API, sem dados de áudio enviados para a nuvem.',
        ],
        updatedDate: '2026-06-15',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'Por que o TTS local importa', anchor: '#why-local-tts' },
      { label: 'Tabela de comparação', anchor: '#comparison-table' },
      { label: 'Comparação de latência do primeiro áudio', anchor: '#latency-table' },
      { label: 'Piper TTS — Opção leve mais rápida', anchor: '#piper' },
      { label: 'Coqui TTS — Melhor kit de ferramentas open source', anchor: '#coqui' },
      { label: 'XTTS v2 — Melhor qualidade de clonagem de voz', anchor: '#xtts' },
      { label: 'Bark — Áudio generativo além da fala', anchor: '#bark' },
      { label: 'StyleTTS 2 — Máxima qualidade natural', anchor: '#styletts' },
      { label: 'F5-TTS — Clonagem de voz zero-shot, totalmente aberto', anchor: '#f5tts' },
      { label: 'Licenças e uso comercial (CPML, MIT, CC-BY-NC)', anchor: '#licenses' },
      { label: 'Aceite a CPML de forma não interativa (COQUI_TOS_AGREED)', anchor: '#cpml-noninteractive' },
      { label: 'TTS local vs ElevenLabs', anchor: '#local-vs-cloud' },
      { label: 'Como escolher', anchor: '#how-to-choose' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper é a escolha certa para velocidade e uso embarcado.** Funciona completamente em CPU, produz voz em tempo real em uma Raspberry Pi 5 e suporta mais de 20 idiomas por pacotes de voz baixáveis. Sem GPU, sem complexidade em Python, licença MIT.',
          '**XTTS v2 é a melhor opção de clonagem de voz local em 2026 — mas é não comercial.** Com 6 segundos de áudio de referência clona a voz em 17 idiomas (4–6 GB de VRAM em GPU). A licença CPML é não comercial e, desde que a Coqui fechou (janeiro de 2024), não há licença comercial à venda — trate o XTTS v2 apenas como não comercial. Aceite a CPML de forma não interativa em Docker/CI com `COQUI_TOS_AGREED=1`.',
          '**F5-TTS é a alternativa de crescimento mais rápido para clonagem de voz zero-shot.** Usa uma arquitetura de flow-matching em vez de GPT, clona uma voz a partir de ~3 segundos de áudio de referência e atinge qualidade competitiva com XTTS v2 a velocidades de inferência mais rápidas. Licença: CC-BY-NC-4.0 (não comercial).',
          '**Coqui TTS é o kit de ferramentas TTS open source mais flexível.** Suporta múltiplos backends (Tacotron2, VITS, XTTS), clonagem de voz e mais de 20 idiomas sob licença MPL 2.0. Nota: a empresa Coqui fechou em janeiro de 2024; o projeto agora é mantido pela comunidade.',
          '**Bark é o único TTS local que gera áudio não falado.** Pode produzir risadas, tosse, suspiros, trechos musicais e efeitos sonoros ambientes junto à fala — útil para áudio criativo, produção de podcasts e ficção interativa. Suas saídas são lentas e não determinísticas.',
          '**StyleTTS 2 alcança as pontuações MOS (mean opinion score) mais altas de qualquer motor TTS em inglês open source.** Sua transferência de estilo baseada em difusão produz naturalidade quase humana em narração em inglês. Suporta somente inglês e não possui clonagem de voz.',
          '**A licença decide o uso comercial — e a divisão é clara.** Livres para produtos comerciais: Piper, Bark, StyleTTS 2 (MIT) e Kokoro, Tortoise (Apache 2.0). Comercial com condições: kit Coqui TTS (MPL 2.0, divulgar modificações do kit). Apenas não comercial: XTTS v2 (CPML) e F5-TTS (CC-BY-NC-4.0) — ambos precisam de acordo separado. Para clonagem de voz comercial, use Tortoise (Apache 2.0) ou o kit Coqui sobre um backend VITS (MPL 2.0). Referência factual, não aconselhamento jurídico.',
          '**Nenhum iguala a qualidade de um TTS comercial em escala.** ElevenLabs, Google Text-to-Speech e Azure TTS ainda superam os motores locais em consistência, naturalidade e latência em todos os casos de uso. O TTS local é a escolha certa quando privacidade, custo ou operação offline importam mais que qualidade absoluta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**TTS local mais rápido:** Piper — tempo real em Raspberry Pi 5, ~10× mais rápido que em tempo real em CPU de desktop moderno.',
          '**Melhor qualidade de clonagem de voz:** XTTS v2 — 6 segundos de áudio de referência, clonagem multilíngue em 17 idiomas.',
          '**Clonagem de voz zero-shot mais rápida (arquitetura mais nova):** F5-TTS — ~3 segundos de áudio, flow-matching, ~3–5× tempo real em RTX 4070.',
          '**Kit de ferramentas open source mais flexível:** Coqui TTS — suporta backends VITS, Tacotron2, XTTS, mais de 20 modelos de idioma.',
          '**Único áudio generativo (sons não falados):** Bark — risadas, suspiros, música, ambiente. O mais lento de todos.',
          '**Melhor qualidade de narração em inglês:** StyleTTS 2 — transferência de estilo baseada em difusão, MOS quase humano no benchmark LJSpeech.',
          '**Livres para uso comercial:** Piper, Bark, StyleTTS 2 (MIT); Kokoro, Tortoise (Apache 2.0); kit Coqui TTS (MPL 2.0, com condições). **Não comercial:** XTTS v2 (CPML), F5-TTS (CC-BY-NC-4.0).',
          '**Vozes e idiomas do XTTS v2:** Não há lista fixa de vozes — você fornece um clipe de referência de 6 segundos e ele clona aquela voz. Presets de falantes embutidos vêm com o modelo, e ele gera em 17 idiomas: en, es, fr, de, it, pt, pl, tr, ru, nl, cs, ar, zh-cn, ja, hu, ko, hi.',
          '**VRAM do XTTS v2:** ~2 GB de pesos do modelo; 4 GB no mínimo para rodar, 4–6 GB recomendados para inferência em tempo real.',
          '**Aceite a CPML em CI/Docker:** `export COQUI_TOS_AGREED=1` — sem necessidade de prompt interativo.',
          '**Requisitos de VRAM:** Piper: somente CPU. Kokoro: CPU / 1–2 GB. StyleTTS 2: 2–4 GB. Coqui VITS: 2–4 GB. F5-TTS: 3–5 GB. XTTS v2: 4–6 GB. Bark: 4–8 GB. Tortoise: 4–8 GB.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'Por que o TTS local importa',
        content:
          'Os serviços TTS em nuvem (ElevenLabs, Google TTS, Amazon Polly, Azure Speech) são convenientes, mas trazem cobrança por caractere, políticas de retenção de dados de áudio e latência por viagens de rede de ida e volta. O TTS local elimina os três problemas.',
        items: [
          '**Privacidade:** Seu conteúdo de texto nunca sai do seu equipamento. Fundamental para ditado médico, resumos jurídicos, narração de diários privados ou leitura em voz alta de documentos confidenciais.',
          '**Custo:** Os preços do TTS em nuvem são tipicamente de US$ 4–30 por milhão de caracteres. Um desenvolvedor que gera 10 milhões de caracteres por mês economiza US$ 40–300/mês com uma configuração local única.',
          '**Latência:** Sem viagem de rede de ida e volta. Piper gera o primeiro token de áudio em menos de 50 ms em CPU — mais rápido que qualquer TTS em nuvem.',
          '**Personalização:** A clonagem de voz (XTTS v2, F5-TTS, Coqui) permite criar uma voz personalizada a partir de poucos segundos de áudio. Os provedores em nuvem cobram US$ 10+/mês por cada voz clonada.',
          '**Operação offline:** Funciona em aviões, instalações seguras, zonas remotas sem internet. Interface de voz embarcada para quiosques e dispositivos.',
          '**Casa inteligente:** Piper é a camada TTS principal para interfaces de voz locais sempre ativas — tempo real em Raspberry Pi, sem GPU. Para um assistente de voz offline completo integrado ao Home Assistant, veja [assistente de voz local para casa inteligente →](/pt/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela de comparação',
        content:
          'Todos os motores TTS locais comparados nas métricas mais importantes para implantação em produção.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Piper é o mais rápido em CPU; XTTS v2 oferece a melhor qualidade de clonagem de voz; F5-TTS fornece clonagem zero-shot com arquitetura mais nova; Bark é o único motor que produz risadas e música; StyleTTS 2 tem a melhor naturalidade de narração em inglês.',
          },
          {
            type: 'plain-terms',
            text: 'Para a maioria das necessidades TTS offline: Piper se quiser velocidade e simplicidade, Coqui se quiser clonagem de voz com licença permissiva, XTTS v2 se quiser a melhor qualidade de clonagem e tiver GPU, F5-TTS se quiser uma arquitetura mais nova com clonagem zero-shot mais rápida.',
          },
        ],
        note: 'MOS (mean opinion score) em uma escala de 1–5 onde 5 é indistinguível da fala humana. As pontuações são aproximadas e baseadas em benchmarks publicados ou avaliações da comunidade. MOS de referência humana: ~4,5.',
        columns: ['Ferramenta', 'Qualidade', 'Velocidade', 'Clonagem de voz', 'Multilíngue', 'VRAM', 'Licença', 'MOS (inglês)'],
        rows: [
          {
            'Ferramenta': 'Piper',
            'Qualidade': 'Boa',
            'Velocidade': 'Muito rápida (CPU)',
            'Clonagem de voz': 'Não',
            'Multilíngue': 'Sim (20+ idiomas)',
            'VRAM': 'Somente CPU',
            'Licença': 'MIT',
            'MOS (inglês)': '~3,5',
          },
          {
            'Ferramenta': 'Kokoro',
            'Qualidade': 'Muito boa',
            'Velocidade': 'Rápida (CPU)',
            'Clonagem de voz': 'Não',
            'Multilíngue': 'Inglês + em expansão',
            'VRAM': 'CPU / 1–2 GB',
            'Licença': 'Apache 2.0',
            'MOS (inglês)': '~4,0',
          },
          {
            'Ferramenta': 'Coqui TTS',
            'Qualidade': 'Muito boa',
            'Velocidade': 'Média',
            'Clonagem de voz': 'Sim',
            'Multilíngue': 'Sim (20+ idiomas)',
            'VRAM': '2–4 GB',
            'Licença': 'MPL 2.0',
            'MOS (inglês)': '~3,8',
          },
          {
            'Ferramenta': 'XTTS v2',
            'Qualidade': 'Excelente',
            'Velocidade': 'Lenta',
            'Clonagem de voz': 'Sim (a melhor)',
            'Multilíngue': 'Sim (17 idiomas)',
            'VRAM': '4–6 GB',
            'Licença': 'CPML (não comercial)',
            'MOS (inglês)': '~4,1',
          },
          {
            'Ferramenta': 'F5-TTS',
            'Qualidade': 'Excelente',
            'Velocidade': 'Média-rápida',
            'Clonagem de voz': 'Sim (zero-shot)',
            'Multilíngue': 'Sim (multilíngue)',
            'VRAM': '3–5 GB',
            'Licença': 'CC-BY-NC-4.0',
            'MOS (inglês)': '~4,1',
          },
          {
            'Ferramenta': 'Bark',
            'Qualidade': 'Único / variável',
            'Velocidade': 'Lenta',
            'Clonagem de voz': 'Limitada',
            'Multilíngue': 'Sim (multilíngue)',
            'VRAM': '4–8 GB',
            'Licença': 'MIT',
            'MOS (inglês)': '~3,2–4,0 (variável)',
          },
          {
            'Ferramenta': 'StyleTTS 2',
            'Qualidade': 'Excelente (inglês)',
            'Velocidade': 'Média',
            'Clonagem de voz': 'Não',
            'Multilíngue': 'Principalmente inglês',
            'VRAM': '2–4 GB',
            'Licença': 'MIT',
            'MOS (inglês)': '~4,3',
          },
          {
            'Ferramenta': 'Tortoise',
            'Qualidade': 'Excelente',
            'Velocidade': 'Muito lenta (minutos/frase)',
            'Clonagem de voz': 'Sim',
            'Multilíngue': 'Principalmente inglês',
            'VRAM': '4–8 GB',
            'Licença': 'Apache 2.0',
            'MOS (inglês)': '~4,2',
          },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'Comparação de latência do primeiro áudio',
        content:
          'A latência do primeiro áudio é o tempo desde a entrada de texto até a primeira saída audível. Fundamental para assistentes de voz e aplicações interativas.',
        columns: ['Motor', 'Primeiro áudio (RTX 4070)', 'Primeiro áudio (CPU)', 'Primeiro áudio (M5 Pro)'],
        rows: [
          {
            'Motor': 'Piper',
            'Primeiro áudio (RTX 4070)': '~30 ms',
            'Primeiro áudio (CPU)': '~50 ms',
            'Primeiro áudio (M5 Pro)': '~40 ms',
          },
          {
            'Motor': 'Kokoro',
            'Primeiro áudio (RTX 4070)': '~50 ms',
            'Primeiro áudio (CPU)': '~80 ms',
            'Primeiro áudio (M5 Pro)': '~60 ms',
          },
          {
            'Motor': 'Coqui VITS',
            'Primeiro áudio (RTX 4070)': '~100 ms',
            'Primeiro áudio (CPU)': '~300 ms',
            'Primeiro áudio (M5 Pro)': '~150 ms',
          },
          {
            'Motor': 'StyleTTS 2',
            'Primeiro áudio (RTX 4070)': '~150 ms',
            'Primeiro áudio (CPU)': '~500 ms',
            'Primeiro áudio (M5 Pro)': '~200 ms',
          },
          {
            'Motor': 'F5-TTS',
            'Primeiro áudio (RTX 4070)': '~200 ms',
            'Primeiro áudio (CPU)': '~800 ms',
            'Primeiro áudio (M5 Pro)': '~300 ms',
          },
          {
            'Motor': 'XTTS v2',
            'Primeiro áudio (RTX 4070)': '~300 ms',
            'Primeiro áudio (CPU)': '~1500 ms',
            'Primeiro áudio (M5 Pro)': '~500 ms',
          },
          {
            'Motor': 'Bark',
            'Primeiro áudio (RTX 4070)': '~500 ms',
            'Primeiro áudio (CPU)': '~3000 ms',
            'Primeiro áudio (M5 Pro)': '~800 ms',
          },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — Opção leve mais rápida',
        content:
          '**Piper é um sistema de síntese de voz local rápido desenvolvido pelo Rhasspy para automação residencial e uso embarcado.** Usa uma arquitetura neural baseada em VITS treinada em conjuntos de dados de voz com um backend onnxruntime — otimizada para funcionar em tempo real em uma Raspberry Pi 4 ou 5 sem GPU.',
        items: [
          '**Arquitetura:** TTS neural VITS com inferência ONNX. Projetado para computadores de placa única e Linux embarcado.',
          '**Instalação:** `pip install piper-tts`. Os pacotes de voz pré-treinados estão disponíveis no repositório Piper voices no Hugging Face.',
          '**Uso:** `echo "Olá, mundo" | piper --model pt_BR-faber-medium.onnx --output_file saida.wav`',
          '**Pacotes de voz:** Mais de 20 idiomas, múltiplas opções de voz por idioma. Cada pacote de voz é um arquivo de modelo ONNX de 20–200 MB.',
          '**Velocidade:** ~10× mais rápido que em tempo real em uma CPU de desktop moderna. Tempo real em Raspberry Pi 5. Latência do primeiro áudio inferior a 50 ms.',
          '**Apple Silicon:** ~15× tempo real em M5 Pro (CPU, ARM NEON). Funciona nativamente sem GPU.',
          '**Ouvir amostras:** [Amostras de voz do Piper](https://rhasspy.github.io/piper-samples/)',
          '**Ideal para:** Assistentes residenciais, dispositivos de quiosque, interface de voz embarcada, leitura em voz alta sensível à privacidade onde não há GPU disponível.',
          '**Limitação:** Sem clonagem de voz. A qualidade é "boa" — soa natural mas claramente sintética em comparação com XTTS v2 ou StyleTTS 2.',
          '**Licença:** MIT — totalmente comercial, sem restrições.',
          '**Kokoro TTS — alternativa ao Piper:** Kokoro TTS é uma alternativa emergente ao Piper na categoria leve. Atinge maior naturalidade que o Piper mantendo-se rápido em CPU. Licenciado sob Apache 2.0. [Kokoro](https://github.com/hexgrad/kokoro)',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — Melhor kit de ferramentas open source',
        content:
          '**Coqui TTS é um kit de ferramentas Python para síntese de voz que suporta múltiplas arquiteturas de modelos e clonagem de voz.** Foi desenvolvido pela empresa Coqui (que fechou em janeiro de 2024) e agora é mantido pela comunidade open source.',
        items: [
          '**Instalação:** `pip install TTS`. Os modelos são baixados automaticamente no primeiro uso.',
          '**Clonagem de voz:** Forneça 6+ segundos de áudio de referência. `tts --text "Olá" --model_name tts_models/pt/cv/vits --speaker_wav amostra.wav --out_path saida.wav`',
          '**Opções de backend:** VITS (o mais rápido, boa qualidade), Tacotron2 (mais antigo, mais lento), XTTS (melhor qualidade).',
          '**Idiomas:** Mais de 20 modelos de idioma disponíveis via `tts --list_models`.',
          '**VRAM:** 2–4 GB para o backend VITS; 4–6 GB para o backend XTTS.',
          '**Apple Silicon:** ~8× tempo real em M5 Pro (CPU). Sem aceleração Metal GPU.',
          '**Status da comunidade:** Coqui Inc fechou em janeiro de 2024. O repositório open source (`coqui-ai/TTS`) é mantido pela comunidade.',
          '**Licença:** MPL 2.0 — uso comercial permitido, mas o código-fonte das modificações deve ser divulgado.',
          '**Ideal para:** Desenvolvedores que querem clonagem de voz com um kit de ferramentas open source e licença permissiva.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — Melhor qualidade de clonagem de voz',
        content:
          '**XTTS v2 (da Coqui) é o motor de clonagem de voz de maior qualidade disponível localmente em 2026.** Usa uma arquitetura baseada em GPT com transferência entre idiomas — clona uma voz em inglês e a fala em espanhol, alemão, francês ou outros 14 idiomas a partir dos mesmos 6 segundos de áudio.',
        items: [
          '**Arquitetura:** TTS baseado em GPT com condicionamento do falante.',
          '**Clonagem de voz:** Com 6 segundos de áudio de referência é suficiente para um clone de voz convincente. 3 segundos produzem qualidade aceitável.',
          '**Clonagem multilíngue:** Clona a voz em um idioma, gera fala em 17 idiomas diferentes com as mesmas características de voz.',
          '**Idiomas (17):** Inglês, espanhol, francês, alemão, italiano, português, polonês, turco, russo, holandês, tcheco, árabe, chinês (zh-cn), japonês, húngaro, coreano e hindi. Coreano e hindi foram adicionados no XTTS v2.0.3.',
          '**"Vozes do XTTS v2":** Não há catálogo fixo de vozes nomeadas. O XTTS v2 é um modelo de clonagem — você fornece um clipe de referência de 6 segundos e ele reproduz aquele falante. O repositório traz alguns presets de falantes embutidos para testes rápidos, mas o fluxo de trabalho pretendido é fornecer seu próprio `speaker_wav`.',
          '**VRAM:** Os pesos do modelo são ~2 GB. 4 GB de VRAM é o mínimo prático; 4–6 GB são recomendados para inferência em tempo real. Funciona em CPU, mas ~5–10× mais lento.',
          '**Velocidade:** Lento — gera ~2× tempo real em um RTX 4070.',
          '**Apple Silicon:** ~3× tempo real em M5 Pro (CPU, sem aceleração Metal).',
          '**Ouvir amostras:** [Demo do XTTS v2 no Hugging Face](https://huggingface.co/spaces/coqui/xtts)',
          '**Licença:** CPML (Coqui Public Model License) — não comercial. A CPML permite uso pessoal, de pesquisa e de hobby do modelo **e de suas saídas de áudio**, mas proíbe uso comercial (qualquer produto pago, SaaS, conteúdo monetizado por anúncios ou trabalho para clientes) sem um acordo comercial separado. A Coqui Inc fechou em janeiro de 2024, então atualmente não há entidade vendendo licenças comerciais do XTTS v2 — na prática, trate o XTTS v2 apenas como não comercial. Veja a seção [aceitação não interativa da CPML](#cpml-noninteractive) para a variável de ambiente `COQUI_TOS_AGREED`.',
        ],
        codeBlock: `from TTS.api import TTS

# Load XTTS v2 model
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")

# Clone voice from 6-second reference audio and synthesize in any of 17 languages
tts.tts_to_file(
    text="Bonjour, je suis votre assistant vocal.",
    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker
    language="fr",                        # Output in French using the cloned voice
    file_path="output.wav"
)`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'XTTS v2 está coberto pela licença CPML (não comercial). O uso comercial — produtos, SaaS, serviços ou trabalho pago para clientes — requer um acordo comercial separado e, como a Coqui Inc fechou em janeiro de 2024, nenhum acordo desse tipo está atualmente disponível para compra. Se você precisa de clonagem de voz comercial, use Tortoise (Apache 2.0) ou o kit Coqui TTS sobre um backend VITS (MPL 2.0). Isto é referência factual, não aconselhamento jurídico — leia a CPML você mesmo antes de implantar.',
          },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — Áudio generativo além da fala',
        content:
          '**Bark (da Suno AI) é um modelo generativo de texto para áudio que produz fala, música, risadas, tosse, suspiros e sons ambientes a partir de prompts de texto.** Não é um motor TTS tradicional — é um modelo generativo que interpreta os prompts de texto como instruções de geração de áudio.',
        items: [
          '**Capacidade única:** Inclua `[laughs]`, `[sighs]`, `[clears throat]`, `[music]` no seu texto e Bark gera esses sons junto à fala.',
          '**Não controlável como um TTS tradicional:** A saída varia entre execuções para a mesma entrada. A qualidade é inconsistente.',
          '**Velocidade:** Lento — 2–4× mais lento que em tempo real mesmo em um RTX 4090.',
          '**Apple Silicon:** ~1,5× tempo real em M5 Pro (CPU, MPS parcial).',
          '**Ideal para:** Áudio criativo, produção de podcasts com efeitos sonoros, ficção interativa.',
          '**VRAM:** GPU de 4–8 GB.',
          '**Instalação:** `pip install suno-bark`. Os modelos são baixados na primeira execução (~2 GB).',
          '**Licença:** MIT — totalmente comercial.',
          '**Limitação:** Sem clonagem de voz confiável.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — Máxima qualidade natural',
        content:
          '**StyleTTS 2 é um modelo TTS baseado em difusão que alcança pontuações MOS (mean opinion score) quase humanas no benchmark LJSpeech.**',
        items: [
          '**Arquitetura:** Transferência de estilo baseada em difusão.',
          '**Qualidade:** As pontuações MOS mais altas de qualquer motor TTS em inglês open source no benchmark LJSpeech.',
          '**Ideal para:** Narração de audiolivros, voz profissional em off, produção de podcasts.',
          '**Instalação:** Clone o repositório do GitHub, instale os requisitos (`pip install -r requirements.txt`), baixe os checkpoints do modelo (~500 MB).',
          '**Suporte de idiomas:** Principalmente inglês. Não recomendado para uso em outros idiomas.',
          '**Clonagem de voz:** Não suportada.',
          '**VRAM:** GPU de 2–4 GB. Mais rápido que XTTS v2 a ~5–8× tempo real em RTX 4070.',
          '**Apple Silicon:** ~6× tempo real em M5 Pro (CPU).',
          '**Ouvir amostras:** [StyleTTS 2 no GitHub](https://github.com/yl4579/StyleTTS2)',
          '**Licença:** MIT — totalmente comercial.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — Clonagem de voz zero-shot, totalmente aberto',
        content:
          '**F5-TTS é um modelo TTS baseado em flow-matching com clonagem de voz zero-shot — clona qualquer voz a partir de ~3 segundos de áudio de referência sem fine-tuning.**',
        items: [
          '**Arquitetura:** Flow-matching em vez da arquitetura baseada em GPT do XTTS v2. Tipicamente oferece inferência mais rápida com qualidade competitiva.',
          '**Clonagem de voz:** ~3 segundos de áudio de referência é suficiente para clonagem de voz zero-shot.',
          '**Qualidade:** Competitiva com XTTS v2 em inglês. Pontuações MOS aproximadamente ~4,1.',
          '**Velocidade:** ~3–5× tempo real em RTX 4070.',
          '**Idiomas:** Multilíngue — suporte sólido para inglês e chinês, com suporte em expansão.',
          '**Apple Silicon:** ~2× tempo real em M5 Pro (CPU).',
          '**VRAM:** GPU de 3–5 GB recomendada.',
          '**Instalação:** `pip install f5-tts` ou clone em [GitHub](https://github.com/SWivid/F5-TTS).',
          '**Licença:** CC-BY-NC-4.0 — somente uso não comercial.',
          '**Por que importa:** F5-TTS traz uma arquitetura mais moderna para clonagem de voz local com comunidade ativa. Se XTTS v2 é muito lento ou sua licença CPML é uma preocupação, F5-TTS é a principal alternativa.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'Licenças e uso comercial — Posso usar este motor TTS comercialmente?',
        content:
          'A licença é o fator mais importante para uso em produção, e ela divide estes motores claramente em dois grupos. Motores com licença permissiva (MIT, Apache 2.0) são livres para incluir em um produto comercial. Motores restritos (CPML, CC-BY-NC-4.0) são não comerciais — usá-los em um produto pago, SaaS, conteúdo monetizado por anúncios ou trabalho para clientes requer um acordo separado. A tabela abaixo dá a licença exata e uma resposta direta de "posso usar isto comercialmente?" para cada motor.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para TTS local em um produto comercial, Piper, Bark e StyleTTS 2 (MIT), Kokoro e Tortoise (Apache 2.0) e o kit Coqui TTS sobre um backend VITS/Tacotron2 (MPL 2.0) são todos permitidos; XTTS v2 (CPML) e F5-TTS (CC-BY-NC-4.0) são não comerciais.',
          },
          {
            type: 'plain-terms',
            text: 'Os dois modelos de clonagem de voz mais populares — XTTS v2 e F5-TTS — não podem ser usados comercialmente sem uma licença separada. Para clonagem de voz comercial, Tortoise (Apache 2.0) ou o kit Coqui sobre um backend VITS (MPL 2.0) são as escolhas seguras.',
          },
        ],
        columns: ['Ferramenta', 'Licença', 'Comercial?', 'Condição principal'],
        rows: [
          {
            'Ferramenta': 'Piper',
            'Licença': 'MIT',
            'Comercial?': 'Sim — sem restrições',
            'Condição principal': 'Incluir aviso MIT; verificar a licença do modelo por voz',
          },
          {
            'Ferramenta': 'Kokoro',
            'Licença': 'Apache 2.0',
            'Comercial?': 'Sim — sem restrições',
            'Condição principal': 'Incluir aviso Apache 2.0',
          },
          {
            'Ferramenta': 'Coqui TTS (kit)',
            'Licença': 'MPL 2.0',
            'Comercial?': 'Sim — com condições',
            'Condição principal': 'Divulgar o código-fonte de quaisquer modificações nos arquivos do kit',
          },
          {
            'Ferramenta': 'XTTS v2 (modelo)',
            'Licença': 'CPML',
            'Comercial?': 'Não — não comercial',
            'Condição principal': 'Comercial precisa de acordo; nenhum à venda desde que a Coqui fechou (janeiro de 2024)',
          },
          {
            'Ferramenta': 'F5-TTS',
            'Licença': 'CC-BY-NC-4.0',
            'Comercial?': 'Não — não comercial',
            'Condição principal': 'A cláusula NC se estende até a fine-tunes (dados de treino Emilia)',
          },
          {
            'Ferramenta': 'Bark',
            'Licença': 'MIT',
            'Comercial?': 'Sim — sem restrições',
            'Condição principal': 'Incluir aviso de copyright MIT',
          },
          {
            'Ferramenta': 'StyleTTS 2',
            'Licença': 'MIT',
            'Comercial?': 'Sim — sem restrições',
            'Condição principal': 'Incluir aviso de copyright MIT',
          },
          {
            'Ferramenta': 'Tortoise',
            'Licença': 'Apache 2.0',
            'Comercial?': 'Sim — sem restrições',
            'Condição principal': 'Atribuição; obter consentimento para qualquer voz clonada',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Coqui TTS (o kit de ferramentas, MPL 2.0) e XTTS v2 (os pesos específicos do modelo, CPML) têm licenças diferentes. Você pode distribuir o kit Coqui TTS com backends VITS ou Tacotron2 em um produto comercial sob MPL 2.0. A restrição não comercial da CPML aplica-se especificamente aos pesos do modelo XTTS v2 e às suas saídas de áudio — não ao código do kit.',
          },
          {
            type: 'warning',
            text: 'Isto é referência factual, não aconselhamento jurídico. Licenças mudam e casos extremos (consentimento de voz, termos de conjuntos de dados, licenças de modelo por voz) importam. Leia o arquivo de licença de cada motor você mesmo, e consulte um advogado, antes de se basear em qualquer um destes termos para implantação comercial.',
          },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'Aceite a CPML de forma não interativa (COQUI_TOS_AGREED)',
        content:
          'Na primeira vez que você carrega um modelo XTTS / Coqui coberto pela CPML, a biblioteca imprime os termos da licença e espera você digitar "y" para aceitar. Esse prompt interativo trava em builds Docker, pipelines de CI e servidores headless. Para aceitar a CPML de forma não interativa, defina a variável de ambiente `COQUI_TOS_AGREED` como `1` — isso registra que você leu e concordou com a Coqui Public Model License antes de o modelo carregar. Isso não muda a licença: a CPML continua sendo não comercial, e definir a variável é a sua concordância com esses termos, não uma renúncia a eles.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Defina a variável de ambiente COQUI_TOS_AGREED=1 para aceitar a Coqui Public Model License (CPML) sem o prompt interativo em Docker, CI ou qualquer ambiente headless.',
          },
          {
            type: 'plain-terms',
            text: 'Em um shell ou Dockerfile use `export COQUI_TOS_AGREED=1`; em Python defina `os.environ["COQUI_TOS_AGREED"] = "1"` antes de importar ou carregar o modelo. De qualquer forma, o modelo carrega sem esperar por entrada de teclado.',
          },
        ],
        items: [
          '**Shell / CI:** `export COQUI_TOS_AGREED=1` antes de executar seu script.',
          '**Docker:** adicione `ENV COQUI_TOS_AGREED=1` ao seu Dockerfile, ou passe `-e COQUI_TOS_AGREED=1` ao `docker run`.',
          '**Python (defina antes de o modelo carregar):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — deve rodar antes de `TTS(...)` instanciar o modelo XTTS.',
          '**O que faz:** registra a aceitação não interativa da CPML para que o carregamento do modelo não fique bloqueado em um prompt `y/n`. Não é uma licença comercial e não remove a restrição não comercial.',
        ],
        codeBlock: `# 1) Shell / CI — aceite a CPML uma vez para a sessão
export COQUI_TOS_AGREED=1

# 2) Dockerfile — incorpore a aceitação na imagem
# ENV COQUI_TOS_AGREED=1

# 3) Python — defina antes de o modelo ser criado
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # deve ser definido ANTES da chamada TTS() abaixo

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# O modelo agora carrega sem o prompt interativo de licença`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'COQUI_TOS_AGREED=1 apenas suprime o prompt interativo — é a sua aceitação da CPML, que continua sendo uma licença não comercial. Não concede direitos comerciais sobre o XTTS v2.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'TTS local vs ElevenLabs e TTS em nuvem',
        content:
          'ElevenLabs, Google Text-to-Speech e Azure Speech continuam sendo o teto de qualidade para TTS em 2026.',
        items: [
          '**Teto de qualidade:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper.',
          '**Latência:** Piper local (~30–50 ms primeiro áudio) é mais rápido que qualquer viagem de ida e volta da API ElevenLabs (~300–500 ms).',
          '**Custo:** ElevenLabs cobra US$ 5–99/mês por nível. O TTS local custa US$ 0 após o hardware inicial.',
          '**Clonagem de voz:** ElevenLabs Instant Voice Clone ≈ qualidade XTTS v2.',
          '**Privacidade:** TTS local = nenhum dado de áudio enviado a lugar nenhum. ElevenLabs = áudio processado em seus servidores.',
          '**Capacidade offline:** Local = totalmente offline. ElevenLabs = requer internet.',
          '**Quando usar a nuvem:** Produção de voz profissional, produtos voltados ao cliente que exigem máxima qualidade.',
          '**Quando usar local:** Áudio crítico para privacidade, dispositivos embarcados, processamento em lote sensível ao custo, ambientes offline.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Como escolher',
        content:
          'Um diagrama de decisão do seu requisito ao motor TTS correto:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Precisa de clonagem de voz? → XTTS v2 (melhor qualidade) ou F5-TTS (mais rápido, arquitetura mais nova) ou Coqui TTS (licença aberta). Precisa de velocidade em CPU? → Piper. Precisa de áudio criativo? → Bark. Precisa da melhor qualidade em inglês? → StyleTTS 2.',
          },
          {
            type: 'plain-terms',
            text: 'Se você quer clonar a voz de alguém, use XTTS v2 para qualidade, F5-TTS para inferência mais rápida ou Coqui VITS para licença permissiva. Se está construindo uma interface de voz para Raspberry Pi ou quiosque, use Piper. Se está fazendo um podcast com efeitos sonoros, experimente Bark. Se está narrando audiolivros em inglês, use StyleTTS 2.',
          },
        ],
        items: [
          '**Precisa de clonagem de voz?** → Sim: XTTS v2 (melhor qualidade, CPML) ou F5-TTS (mais rápido, CC-BY-NC-4.0) ou Coqui VITS (boa qualidade, MPL 2.0). Não: Piper (velocidade), StyleTTS 2 (qualidade).',
          '**Precisa funcionar somente em CPU / Raspberry Pi?** → Apenas Piper. Kokoro é uma alternativa CPU de maior qualidade com licença Apache 2.0.',
          '**Precisa de áudio criativo com sons não falados?** → Bark.',
          '**Precisa da melhor qualidade de narração em inglês?** → StyleTTS 2.',
          '**Precisa de suporte multilíngue?** → XTTS v2 (17 idiomas, clonagem multilíngue), Coqui (20+ idiomas), Piper (20+ pacotes de idioma).',
          '**Precisa de uma licença MIT totalmente comercial?** → Piper, Bark ou StyleTTS 2.',
          '**Construindo um pipeline de assistente de voz?** → Piper para saída TTS de baixa latência (veja /pt/power-local-llm/build-local-voice-assistant-2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto áudio de referência preciso para clonar uma voz com XTTS v2?',
            a: 'XTTS v2 requer no mínimo 3 segundos de áudio de referência limpo, mas com 6 ou mais segundos os resultados melhoram notavelmente. O áudio deve ser de um único falante com o mínimo de ruído de fundo e sem música.',
          },
          {
            q: 'Posso usar Piper TTS em um produto comercial?',
            a: 'Sim. Piper está licenciado sob MIT, que permite uso comercial ilimitado. Você deve incluir o aviso de licença MIT no seu produto. Os modelos de voz (arquivos ONNX) podem ter licenças separadas por voz.',
          },
          {
            q: 'Coqui TTS ainda é mantido após o fechamento da empresa?',
            a: 'Sim, mas com ritmo reduzido. A empresa Coqui fechou em janeiro de 2024, mas o repositório open source (`coqui-ai/TTS`) é mantido por colaboradores da comunidade.',
          },
          {
            q: 'Qual motor TTS local tem o melhor suporte multilíngue?',
            a: 'XTTS v2 suporta 17 idiomas com clonagem de voz multilíngue. Coqui TTS tem mais de 20 modelos de idioma. Piper tem mais de 20 pacotes de voz por idioma. Se você precisa clonar uma voz e produzir fala em vários idiomas a partir de uma única amostra de referência, XTTS v2 é a única opção.',
          },
          {
            q: 'Bark pode produzir música?',
            a: 'Bark pode produzir trechos musicais simples junto à fala com tokens `[music]`. Não é um gerador de música dedicado — as saídas são curtas e inconsistentes.',
          },
          {
            q: 'Qual é o melhor TTS local gratuito para clonagem de voz?',
            a: 'F5-TTS (CC-BY-NC-4.0) para uso não comercial — clona vozes a partir de ~3 segundos de áudio. Para uso comercial, Coqui TTS com backend VITS (MPL 2.0). XTTS v2 tem a melhor qualidade, mas a licença CPML restringe implantação comercial sem acordo separado.',
          },
          {
            q: 'Posso executar XTTS v2 em um Mac com Apple Silicon?',
            a: 'Sim, mas apenas em CPU — aproximadamente 3× tempo real em M5 Pro. Atualmente não há aceleração Metal GPU para motores TTS.',
          },
          {
            q: 'Qual motor TTS local soa mais humano?',
            a: 'StyleTTS 2 para narração em inglês — alcança as pontuações MOS mais altas (~4,3 vs referência humana ~4,5). XTTS v2 e F5-TTS são competitivos (~4,1). Nenhum iguala ElevenLabs Turbo v2 em seu pico de qualidade.',
          },
          {
            q: 'Posso usar o XTTS v2 comercialmente?',
            a: 'Não, não sem um acordo comercial separado. O XTTS v2 é lançado sob a Coqui Public Model License (CPML), que permite uso pessoal, de pesquisa e de hobby do modelo e de suas saídas de áudio, mas proíbe uso comercial — qualquer produto pago, SaaS, conteúdo monetizado por anúncios ou trabalho para clientes. A Coqui Inc fechou em janeiro de 2024, então atualmente não há entidade vendendo licenças comerciais do XTTS v2; na prática, trate o XTTS v2 apenas como não comercial. Para clonagem de voz comercial, use Tortoise (Apache 2.0) ou o kit Coqui TTS sobre um backend VITS (MPL 2.0). Isto é referência factual, não aconselhamento jurídico — leia a CPML você mesmo antes de implantar.',
          },
          {
            q: 'Como aceito a licença CPML da Coqui de forma não interativa (Docker / CI)?',
            a: 'Defina a variável de ambiente COQUI_TOS_AGREED como 1. A biblioteca Coqui/XTTS normalmente imprime a CPML e espera você digitar "y", o que trava em builds Docker, CI e servidores headless. Definir COQUI_TOS_AGREED=1 registra sua aceitação para que o modelo carregue sem o prompt. Use `export COQUI_TOS_AGREED=1` em um shell ou etapa de CI, `ENV COQUI_TOS_AGREED=1` em um Dockerfile, ou `os.environ["COQUI_TOS_AGREED"] = "1"` em Python antes da chamada TTS(). Isso apenas suprime o prompt — é a sua concordância com a CPML e não concede direitos comerciais.',
          },
          {
            q: 'Quantas vozes e idiomas o XTTS v2 suporta?',
            a: 'O XTTS v2 não tem catálogo fixo de vozes nomeadas — é um modelo de clonagem, então você fornece um clipe de referência de 6 segundos e ele reproduz aquele falante (o repositório também traz alguns presets de falantes embutidos para testes rápidos). Ele gera fala em 17 idiomas: inglês, espanhol, francês, alemão, italiano, português, polonês, turco, russo, holandês, tcheco, árabe, chinês (zh-cn), japonês, húngaro, coreano e hindi. A clonagem é multilíngue: clone uma voz uma vez e gere-a em qualquer um dos 17 idiomas.',
          },
          {
            q: 'Kokoro vs Piper — qual TTS leve em CPU devo usar?',
            a: 'Ambos rodam rápido em CPU sem GPU e ambos têm licença permissiva (Piper é MIT, Kokoro é Apache 2.0), então qualquer um é seguro para uso comercial. Escolha o Piper quando precisar da menor latência e da maior cobertura de idiomas (20+ pacotes de voz por idioma, tempo real em uma Raspberry Pi 5) — é o padrão para voz embarcada e de casa inteligente. Escolha o Kokoro (um modelo de 82M de parâmetros construído sobre a arquitetura StyleTTS 2) quando quiser maior naturalidade que o Piper e puder aceitar um pouco mais de processamento; sua qualidade em inglês é mais próxima dos motores mais pesados de GPU. Para uma Raspberry Pi ou assistente sempre ativo, Piper; para leitura em voz alta em desktop/servidor onde a qualidade importa mais que milissegundos, Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Piper TTS no GitHub](https://github.com/rhasspy/piper) — Código-fonte, pacotes de voz, downloads de modelos ONNX e guia de configuração para Raspberry Pi.',
          '[Coqui TTS no GitHub](https://github.com/coqui-ai/TTS) — Código-fonte, lista de modelos, documentação de clonagem de voz.',
          '[Documentação do XTTS v2](https://docs.coqui.ai/en/latest/models/xtts.html) — Ficha do modelo XTTS v2, licença (CPML) e API de clonagem de voz.',
          '[Bark no GitHub](https://github.com/suno-ai/bark) — Código-fonte, tokens de prompt de áudio, download do modelo.',
          '[StyleTTS 2 no GitHub](https://github.com/yl4579/StyleTTS2) — Artigo de arquitetura, checkpoints do modelo e guia de inferência.',
          '[F5-TTS no GitHub](https://github.com/SWivid/F5-TTS) — TTS de flow-matching com clonagem de voz zero-shot.',
          '[Kokoro TTS no GitHub](https://github.com/hexgrad/kokoro) — TTS leve de alta qualidade com licença Apache 2.0.',
          '[Tortoise TTS no GitHub](https://github.com/neonbjb/tortoise-tts) — TTS multivoz de alta qualidade com clonagem de voz, licença Apache 2.0. Muito lento, mas compatível com uso comercial.',
          '[XTTS-v2 LICENSE.txt (CPML) no Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — Texto completo da Coqui Public Model License que rege o XTTS v2.',
          '[Piper voices no Hugging Face](https://huggingface.co/rhasspy/piper-voices) — Todos os downloads de pacotes de idioma/voz disponíveis.',
          '[Amostras de voz do Piper](https://rhasspy.github.io/piper-samples/) — Demos de áudio para todas as vozes do Piper.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Construa um assistente de voz totalmente offline em 2026](/pt/power-local-llm/build-local-voice-assistant-2026) — Use Piper ou Coqui TTS como camada de saída de um pipeline completo de Whisper + LLM + TTS.',
          '[Reconhecimento de voz local 2026: Whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison-2026) — O lado de entrada de um pipeline de voz: STT para complementar o TTS.',
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Integre o TTS como camada de saída de voz de um stack multimodal completo.',
          '[Construa um assistente de voz local no seu telefone](/pt/power-local-llm/voice-assistant-local-mobile-offline) — Assistente de voz móvel usando TTS do sistema iOS ou Piper.',
          '[Melhores GPUs econômicas para LLM local](/pt/local-llms/best-budget-gpus-local-llm) — Seleção de GPU para executar inferência de XTTS v2, F5-TTS, Bark ou StyleTTS 2.',
          '[Melhor IA de texto para voz para criadores de conteúdo](/pt/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper vs Coqui XTTS vs ElevenLabs Local: comparação de qualidade de voz e latência.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Licenças de TTS local e clonagem de voz 2026: quais motores permitem uso comercial (Piper, XTTS v2, F5-TTS, Coqui)',
      description: 'Quais motores TTS locais permitem uso comercial? Licenças de Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) e Coqui, mais a variável COQUI_TOS_AGREED. Guia 2026.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts',
      inLanguage: 'pt',
      datePublished: '2026-05-14',
      dateModified: '2026-06-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-06-15',
    lastFactChecked: '2026-06-15',
    next_refresh_due: '2026-12-15',
    theme: 'Voice, Speech & Multimodal',
    title: 'تراخيص ⁨TTS⁩ المحلي واستنساخ الصوت ⁨2026⁩: أي المحركات تسمح بالاستخدام التجاري (⁨Piper⁩ و⁨XTTS v2⁩ و⁨F5-TTS⁩ و⁨Coqui⁩)',
    seoTitle: 'تراخيص ⁨TTS⁩ واستنساخ الصوت المحلي ⁨2026⁩: استخدام تجاري',
    intro:
      'هل يمكنك استخدام محرك تحويل نص إلى كلام محلي في منتج تجاري؟ الأمر يعتمد كليًا على الترخيص، والتراخيص تختلف بشكل حاد. Piper وBark وStyleTTS 2 تصدر تحت MIT، وKokoro وTortoise تحت Apache 2.0 — وكلها الأربعة مجانية للاستخدام التجاري. مجموعة أدوات Coqui TTS تحت MPL 2.0 (تجاري بشروط). لكن أشهر نموذجين لاستنساخ الصوت مقيّدان: XTTS v2 يستخدم Coqui Public Model License (CPML، غير تجاري)، وF5-TTS يستخدم CC-BY-NC-4.0 (غير تجاري). يقدم هذا الدليل الترخيص الدقيق لكل محرك، وإجابة واضحة عن سؤال "هل يمكنني استخدامه تجاريًا؟" لكل محرك، ومتغير البيئة COQUI_TOS_AGREED لقبول CPML بشكل غير تفاعلي في Docker وCI، ومقارنة مباشرة عبر الجودة والسرعة وVRAM واستنساخ الصوت — لتختار المحرك الصحيح دون إرسال صوت إلى السحابة ودون مفاجأة ترخيص في الإنتاج. (تم التحقق من التراخيص في يونيو 2026؛ هذا مرجع وقائعي وليس استشارة قانونية — اقرأ كل ترخيص بنفسك قبل الاستخدام التجاري.)',
    metaDescription:
      'أي محركات TTS المحلية تسمح بالاستخدام التجاري؟ تراخيص Piper (MIT) وXTTS v2 (CPML) وF5-TTS وCoqui وKokoro، ومقارنة استنساخ الصوت. دليل 2026.',
    twitterDescription:
      'تراخيص TTS المحلي 2026: أي محركات استنساخ الصوت تسمح بالاستخدام التجاري؟ Piper/Bark/StyleTTS 2 (MIT)، وKokoro/Tortoise (Apache 2.0)، وXTTS v2 (CPML غير تجاري)، وF5-TTS (CC-BY-NC). بالإضافة إلى متغير COQUI_TOS_AGREED. كل شيء دون اتصال.',
    audience:
      'المطورون والمبدعون ومنتجو المحتوى والمستخدمون المهتمون بالخصوصية الذين يريدون تحويل النص إلى كلام واستنساخ الصوت دون اتصال ودون تكاليف API السحابية أو تعرض البيانات.',
    readTime: '14 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'تحويل النص إلى كلام محليًا',
    targetKeywords: [
      'TTS محلي 2026',
      'أفضل TTS محلي',
      'استنساخ الصوت محليًا',
      'piper مقابل coqui',
      'XTTS v2 استنساخ الصوت',
      'F5-TTS استنساخ الصوت',
      'F5-TTS محلي',
      'استنساخ الصوت دون اتصال',
      'bark TTS',
      'StyleTTS 2',
      'إعداد piper TTS',
      'coqui TTS دون اتصال',
    ],
    current_models_mentioned: [
      'Piper TTS',
      'Coqui TTS',
      'XTTS v2',
      'F5-TTS',
      'Bark',
      'StyleTTS 2',
      'Kokoro TTS',
      'Tortoise TTS',
    ],
    current_hardware_mentioned: [
      'CPU (x86/ARM)',
      'Raspberry Pi',
      '2–4 GB GPU',
      '3–5 GB GPU',
      '4–6 GB GPU',
      '4–8 GB GPU',
      'Apple M5 Pro',
      'RTX 4070',
    ],
    leadAnswerBlock:
      '**للاستخدام التجاري، اختر محرك TTS محلي بترخيص متساهل: Piper وBark وStyleTTS 2 تحت MIT؛ وKokoro وTortoise تحت Apache 2.0 — وكلها مجانية للمنتجات التجارية.** مجموعة أدوات Coqui TTS تحت MPL 2.0 (مسموح تجاريًا إذا أفصحت عن تعديلاتك على مصدر مجموعة الأدوات). المشكلة في أشهر نموذجين لاستنساخ الصوت: **XTTS v2 غير تجاري تحت Coqui Public Model License (CPML)** و**F5-TTS غير تجاري تحت CC-BY-NC-4.0** — كلاهما يحظر الاستخدام التجاري دون اتفاقية منفصلة، ولأن Coqui Inc أغلقت في يناير 2024 فلا يوجد حاليًا من يبيع ترخيصًا تجاريًا لـXTTS v2، فتعامل معه على أنه غير تجاري فقط. أما من حيث القدرة: Piper هو الأسرع على المعالج (وقت فعلي على Raspberry Pi 5، بلا GPU)؛ XTTS v2 هو أفضل استنساخ صوت جودةً (6 ثوانٍ من الصوت المرجعي ← 17 لغة، 4–6 غيغابايت VRAM)؛ F5-TTS يستنسخ من ~3 ثوانٍ باستدلال flow-matching أسرع؛ Bark يولّد بشكل فريد الضحك والتنهدات والصوت المحيطي؛ StyleTTS 2 يمتلك أكثر سرد إنجليزي طبيعية (بلا استنساخ)؛ Tortoise جودته عالية جدًا لكنه بطيء للغاية. هذا مرجع وقائعي وليس استشارة قانونية — تحقق من كل ترخيص بنفسك قبل النشر التجاري.',
    quickAnswerTop: {
      ar: {
        question: 'أي محركات TTS المحلية يمكنني استخدامها تجاريًا في 2026؟',
        answer:
          'للاستخدام التجاري، اختر محركًا بترخيص متساهل: Piper وBark وStyleTTS 2 (MIT) وKokoro وTortoise (Apache 2.0) كلها مجانية للمنتجات التجارية؛ ومجموعة أدوات Coqui TTS (MPL 2.0) تجارية بشروط الإفصاح عن المصدر. أما أشهر نموذجين لاستنساخ الصوت فليسا مجانيين للاستخدام التجاري: XTTS v2 (CPML) وF5-TTS (CC-BY-NC-4.0) كلاهما غير تجاري. من حيث القدرة، Piper هو الأسرع على المعالج، وXTTS v2 يمتلك أفضل جودة استنساخ (يحتاج 4–6 غيغابايت VRAM)، وF5-TTS يستنسخ من ~3 ثوانٍ باستدلال أسرع. هذا مرجع وقائعي وليس استشارة قانونية.',
        bullets: [
          'مجاني للاستخدام التجاري ← Piper (MIT) وBark (MIT) وStyleTTS 2 (MIT) وKokoro (Apache 2.0) وTortoise (Apache 2.0). مجموعة أدوات Coqui TTS (MPL 2.0): تجاري بشروط الإفصاح عن المصدر.',
          'ليس مجانيًا للاستخدام التجاري ← XTTS v2 (CPML، غير تجاري) وF5-TTS (CC-BY-NC-4.0، غير تجاري). كلاهما يحتاج اتفاقية منفصلة؛ XTTS v2 بلا بائع منذ إغلاق Coqui (يناير 2024).',
          'أفضل جودة استنساخ ← XTTS v2. 6 ثوانٍ صوت ← استنساخ بـ17 لغة، 4–6 غيغابايت VRAM. الترخيص: CPML (غير تجاري). اقبل CPML بشكل غير تفاعلي في Docker/CI بـCOQUI_TOS_AGREED=1.',
          'استنساخ zero-shot أسرع ومعمارية أحدث ← F5-TTS. ~3 ثوانٍ من الصوت، flow-matching، CC-BY-NC-4.0 (غير تجاري).',
          'السرعة على CPU / Raspberry Pi ← Piper (MIT). Kokoro (Apache 2.0) بديل CPU أعلى جودة.',
          'أفضل سرد إنجليزي ← StyleTTS 2 (MIT). أعلى جودة استنساخ دون اتصال ومتوافقة تجاريًا ← Tortoise (Apache 2.0)، لكنه بطيء جدًا (دقائق لكل جملة).',
          'صوت إبداعي (ضحك وموسيقى ومحيط) ← Bark (MIT). بطيء وتوليدي.',
          'جميع المحركات 100% دون اتصال — بلا مفاتيح API، بلا بيانات صوتية مرسلة إلى السحابة.',
        ],
        updatedDate: '2026-06-15',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'لماذا يهم TTS المحلي', anchor: '#why-local-tts' },
      { label: 'جدول المقارنة', anchor: '#comparison-table' },
      { label: 'مقارنة زمن استجابة الصوت الأول', anchor: '#latency-table' },
      { label: 'Piper TTS — الخيار الخفيف الأسرع', anchor: '#piper' },
      { label: 'Coqui TTS — أفضل مجموعة أدوات مفتوحة المصدر', anchor: '#coqui' },
      { label: 'XTTS v2 — أفضل جودة استنساخ صوت', anchor: '#xtts' },
      { label: 'Bark — صوت إبداعي ما وراء الكلام', anchor: '#bark' },
      { label: 'StyleTTS 2 — أقصى جودة طبيعية', anchor: '#styletts' },
      { label: 'F5-TTS — استنساخ صوت zero-shot، مفتوح كليًا', anchor: '#f5tts' },
      { label: 'التراخيص والاستخدام التجاري (CPML وMIT وCC-BY-NC)', anchor: '#licenses' },
      { label: 'قبول CPML بشكل غير تفاعلي (COQUI_TOS_AGREED)', anchor: '#cpml-noninteractive' },
      { label: 'TTS محلي مقابل ElevenLabs', anchor: '#local-vs-cloud' },
      { label: 'كيفية الاختيار', anchor: '#how-to-choose' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Piper هو الاختيار الصحيح للسرعة والاستخدام المُدمج.** يعمل كليًا على المعالج، ينتج صوتًا في الوقت الفعلي على Raspberry Pi 5، ويدعم أكثر من 20 لغة عبر حزم الأصوات القابلة للتحميل. بلا GPU، بلا تعقيد Python، ترخيص MIT.',
          '**XTTS v2 هو أفضل خيار لاستنساخ الصوت محليًا في 2026 — لكنه غير تجاري.** بـ6 ثوانٍ من الصوت المرجعي يستنسخ الصوت بـ17 لغة (4–6 غيغابايت VRAM في GPU). ترخيص CPML غير تجاري، ومنذ إغلاق Coqui (يناير 2024) لا يوجد ترخيص تجاري معروض للبيع — فتعامل مع XTTS v2 على أنه غير تجاري فقط. اقبل CPML بشكل غير تفاعلي في Docker/CI بـ`COQUI_TOS_AGREED=1`.',
          '**F5-TTS هو البديل الأسرع نموًا لاستنساخ الصوت zero-shot.** يستخدم معمارية flow-matching بدلًا من GPT، يستنسخ صوتًا من ~3 ثوانٍ من الصوت المرجعي، ويحقق جودة تنافسية مع XTTS v2 بسرعات استدلال أسرع. الترخيص: CC-BY-NC-4.0 (غير تجاري).',
          '**Coqui TTS هو مجموعة أدوات TTS مفتوحة المصدر الأكثر مرونة.** يدعم backends متعددة (Tacotron2، VITS، XTTS) واستنساخ الصوت وأكثر من 20 لغة تحت ترخيص MPL 2.0. ملاحظة: أغلقت شركة Coqui في يناير 2024؛ والمشروع الآن يحتفظ به المجتمع.',
          '**Bark هو TTS المحلي الوحيد الذي يولّد صوتًا غير منطوق.** يمكنه إنتاج الضحك والسعال والتنهدات والمقاطع الموسيقية ومؤثرات الصوت المحيطي.',
          '**StyleTTS 2 يحقق أعلى درجات MOS من أي محرك TTS إنجليزي مفتوح المصدر.** نقل الأسلوب القائم على الانتشار ينتج طبيعية شبه بشرية في السرد الإنجليزي. إنجليزية فقط، بلا استنساخ صوت.',
          '**الترخيص يحدد الاستخدام التجاري — والتقسيم واضح.** مجاني للمنتجات التجارية: Piper وBark وStyleTTS 2 (MIT) وKokoro وTortoise (Apache 2.0). تجاري بشروط: مجموعة أدوات Coqui TTS (MPL 2.0، الإفصاح عن تعديلات مجموعة الأدوات). غير تجاري فقط: XTTS v2 (CPML) وF5-TTS (CC-BY-NC-4.0) — كلاهما يحتاج اتفاقية منفصلة. لاستنساخ الصوت تجاريًا، استخدم Tortoise (Apache 2.0) أو مجموعة أدوات Coqui على backend VITS (MPL 2.0). مرجع وقائعي وليس استشارة قانونية.',
          '**لا يضاهي أيٌّ منها جودة TTS التجاري على نطاق واسع.** ElevenLabs وGoogle TTS وAzure TTS لا تزال تتفوق على المحركات المحلية. TTS المحلي هو الخيار الصحيح عندما تكون الخصوصية أو التكلفة أو التشغيل دون اتصال أهم من الجودة المطلقة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**أسرع TTS محلي:** Piper — وقت فعلي على Raspberry Pi 5، أسرع ~10× من الوقت الفعلي على CPU حديث.',
          '**أفضل جودة استنساخ صوت:** XTTS v2 — 6 ثوانٍ صوت مرجعي، استنساخ متعدد اللغات بـ17 لغة.',
          '**أسرع استنساخ صوت zero-shot (معمارية أحدث):** F5-TTS — ~3 ثوانٍ صوت، flow-matching، ~3–5× وقت فعلي على RTX 4070.',
          '**أكثر مجموعة أدوات مفتوحة المصدر مرونة:** Coqui TTS — يدعم backends VITS وTacotron2 وXTTS وأكثر من 20 نموذج لغة.',
          '**الصوت الإبداعي الوحيد (أصوات غير منطوقة):** Bark — ضحك وتنهدات وموسيقى وأصوات محيطية. الأبطأ من الجميع.',
          '**أفضل جودة سرد إنجليزي:** StyleTTS 2 — نقل أسلوب قائم على الانتشار، MOS شبه بشري على معيار LJSpeech.',
          '**مجاني للاستخدام التجاري:** Piper وBark وStyleTTS 2 (MIT)؛ Kokoro وTortoise (Apache 2.0)؛ مجموعة أدوات Coqui TTS (MPL 2.0، بشروط). **غير تجاري:** XTTS v2 (CPML)، F5-TTS (CC-BY-NC-4.0).',
          '**أصوات XTTS v2 ولغاته:** لا قائمة أصوات ثابتة — تزوّده بمقطع مرجعي مدته 6 ثوانٍ فيستنسخ ذلك الصوت. تأتي إعدادات متحدثين مدمجة مع النموذج، ويولّد بـ17 لغة: en، es، fr، de، it، pt، pl، tr، ru، nl، cs، ar، zh-cn، ja، hu، ko، hi.',
          '**VRAM لـXTTS v2:** أوزان النموذج ~2 غيغابايت؛ 4 غيغابايت كحد أدنى للتشغيل، 4–6 غيغابايت موصى بها للاستدلال في الوقت الفعلي.',
          '**قبول CPML في CI/Docker:** `export COQUI_TOS_AGREED=1` — بلا مطالبة تفاعلية.',
          '**متطلبات VRAM:** Piper: CPU فقط. Kokoro: CPU / 1–2 غيغابايت. StyleTTS 2: 2–4 غيغابايت. Coqui VITS: 2–4 غيغابايت. F5-TTS: 3–5 غيغابايت. XTTS v2: 4–6 غيغابايت. Bark: 4–8 غيغابايت. Tortoise: 4–8 غيغابايت.',
        ],
      },
      whyLocalTTS: {
        id: 'why-local-tts',
        title: 'لماذا يهم TTS المحلي',
        content:
          'خدمات TTS السحابية (ElevenLabs وGoogle TTS وAmazon Polly وAzure Speech) مريحة لكنها تُحضر الفوترة بالحرف وسياسات الاحتفاظ ببيانات الصوت وزمن استجابة الشبكة. يُزيل TTS المحلي هذه الثلاثة مشاكل.',
        items: [
          '**الخصوصية:** محتوى نصك لا يغادر جهازك. ضروري للإملاء الطبي والملخصات القانونية وقراءة المستندات السرية بصوت عالٍ.',
          '**التكلفة:** أسعار TTS السحابي عادةً 4–30 دولار لكل مليون حرف. مطوّر يولّد 10 ملايين حرف شهريًا يوفر 40–300 دولار/شهر بإعداد محلي.',
          '**زمن الاستجابة:** بلا رحلة شبكة ذهابًا وإيابًا. Piper يولّد أول رمز صوتي في أقل من 50 ميلي ثانية على CPU.',
          '**التخصيص:** استنساخ الصوت (XTTS v2 وF5-TTS وCoqui) يتيح إنشاء صوت مخصص من بضع ثوانٍ من الصوت.',
          '**التشغيل دون اتصال:** يعمل في الطائرات والمنشآت الآمنة والمناطق النائية بلا إنترنت.',
          '**المنزل الذكي:** Piper هو طبقة TTS الرئيسية لواجهات الصوت المحلية دائمة التشغيل — وقت فعلي على Raspberry Pi، بلا GPU. [مساعد صوتي محلي للمنزل الذكي ←](/ar/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content:
          'جميع محركات TTS المحلية مقارنة بأهم المقاييس للنشر في الإنتاج.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Piper الأسرع على CPU؛ XTTS v2 يوفر أفضل جودة استنساخ صوت؛ F5-TTS يوفر استنساخ zero-shot بمعمارية أحدث؛ Bark المحرك الوحيد الذي ينتج الضحك والموسيقى؛ StyleTTS 2 يمتلك أفضل طبيعية في السرد الإنجليزي.',
          },
          {
            type: 'plain-terms',
            text: 'لمعظم احتياجات TTS دون اتصال: Piper إذا أردت السرعة والبساطة، Coqui إذا أردت استنساخ الصوت بترخيص مرن، XTTS v2 إذا أردت أفضل جودة استنساخ ولديك GPU، F5-TTS إذا أردت معمارية أحدث مع استنساخ zero-shot أسرع.',
          },
        ],
        note: 'MOS (درجة الرأي المتوسطة) على مقياس 1–5 حيث 5 لا يمكن تمييزه من الكلام البشري. الدرجات تقريبية وتستند إلى معايير منشورة أو تقييمات المجتمع. MOS المرجع البشري: ~4.5.',
        columns: ['الأداة', 'الجودة', 'السرعة', 'استنساخ الصوت', 'متعدد اللغات', 'VRAM', 'الترخيص', 'MOS (إنجليزي)'],
        rows: [
          {
            'الأداة': 'Piper',
            'الجودة': 'جيدة',
            'السرعة': 'سريعة جدًا (CPU)',
            'استنساخ الصوت': 'لا',
            'متعدد اللغات': 'نعم (20+ لغة)',
            'VRAM': 'CPU فقط',
            'الترخيص': 'MIT',
            'MOS (إنجليزي)': '~3.5',
          },
          {
            'الأداة': 'Kokoro',
            'الجودة': 'جيدة جدًا',
            'السرعة': 'سريعة (CPU)',
            'استنساخ الصوت': 'لا',
            'متعدد اللغات': 'إنجليزي + قيد التوسع',
            'VRAM': 'CPU / 1–2 غيغابايت',
            'الترخيص': 'Apache 2.0',
            'MOS (إنجليزي)': '~4.0',
          },
          {
            'الأداة': 'Coqui TTS',
            'الجودة': 'جيدة جدًا',
            'السرعة': 'متوسطة',
            'استنساخ الصوت': 'نعم',
            'متعدد اللغات': 'نعم (20+ لغة)',
            'VRAM': '2–4 غيغابايت',
            'الترخيص': 'MPL 2.0',
            'MOS (إنجليزي)': '~3.8',
          },
          {
            'الأداة': 'XTTS v2',
            'الجودة': 'ممتازة',
            'السرعة': 'بطيئة',
            'استنساخ الصوت': 'نعم (الأفضل)',
            'متعدد اللغات': 'نعم (17 لغة)',
            'VRAM': '4–6 غيغابايت',
            'الترخيص': 'CPML (غير تجاري)',
            'MOS (إنجليزي)': '~4.1',
          },
          {
            'الأداة': 'F5-TTS',
            'الجودة': 'ممتازة',
            'السرعة': 'متوسطة-سريعة',
            'استنساخ الصوت': 'نعم (zero-shot)',
            'متعدد اللغات': 'نعم (متعدد اللغات)',
            'VRAM': '3–5 غيغابايت',
            'الترخيص': 'CC-BY-NC-4.0',
            'MOS (إنجليزي)': '~4.1',
          },
          {
            'الأداة': 'Bark',
            'الجودة': 'فريدة / متغيرة',
            'السرعة': 'بطيئة',
            'استنساخ الصوت': 'محدود',
            'متعدد اللغات': 'نعم (متعدد اللغات)',
            'VRAM': '4–8 غيغابايت',
            'الترخيص': 'MIT',
            'MOS (إنجليزي)': '~3.2–4.0 (متغير)',
          },
          {
            'الأداة': 'StyleTTS 2',
            'الجودة': 'ممتازة (إنجليزي)',
            'السرعة': 'متوسطة',
            'استنساخ الصوت': 'لا',
            'متعدد اللغات': 'إنجليزي أساسًا',
            'VRAM': '2–4 غيغابايت',
            'الترخيص': 'MIT',
            'MOS (إنجليزي)': '~4.3',
          },
          {
            'الأداة': 'Tortoise',
            'الجودة': 'ممتازة',
            'السرعة': 'بطيئة جدًا (دقائق/جملة)',
            'استنساخ الصوت': 'نعم',
            'متعدد اللغات': 'إنجليزي أساسًا',
            'VRAM': '4–8 غيغابايت',
            'الترخيص': 'Apache 2.0',
            'MOS (إنجليزي)': '~4.2',
          },
        ],
      },
      latencyTable: {
        id: 'latency-table',
        title: 'مقارنة زمن استجابة الصوت الأول',
        content:
          'زمن استجابة الصوت الأول هو الوقت من إدخال النص حتى أول مخرج صوتي مسموع. ضروري للمساعدين الصوتيين والتطبيقات التفاعلية.',
        columns: ['المحرك', 'الصوت الأول (RTX 4070)', 'الصوت الأول (CPU)', 'الصوت الأول (M5 Pro)'],
        rows: [
          {
            'المحرك': 'Piper',
            'الصوت الأول (RTX 4070)': '~30 مللي ثانية',
            'الصوت الأول (CPU)': '~50 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~40 مللي ثانية',
          },
          {
            'المحرك': 'Kokoro',
            'الصوت الأول (RTX 4070)': '~50 مللي ثانية',
            'الصوت الأول (CPU)': '~80 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~60 مللي ثانية',
          },
          {
            'المحرك': 'Coqui VITS',
            'الصوت الأول (RTX 4070)': '~100 مللي ثانية',
            'الصوت الأول (CPU)': '~300 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~150 مللي ثانية',
          },
          {
            'المحرك': 'StyleTTS 2',
            'الصوت الأول (RTX 4070)': '~150 مللي ثانية',
            'الصوت الأول (CPU)': '~500 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~200 مللي ثانية',
          },
          {
            'المحرك': 'F5-TTS',
            'الصوت الأول (RTX 4070)': '~200 مللي ثانية',
            'الصوت الأول (CPU)': '~800 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~300 مللي ثانية',
          },
          {
            'المحرك': 'XTTS v2',
            'الصوت الأول (RTX 4070)': '~300 مللي ثانية',
            'الصوت الأول (CPU)': '~1500 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~500 مللي ثانية',
          },
          {
            'المحرك': 'Bark',
            'الصوت الأول (RTX 4070)': '~500 مللي ثانية',
            'الصوت الأول (CPU)': '~3000 مللي ثانية',
            'الصوت الأول (M5 Pro)': '~800 مللي ثانية',
          },
        ],
      },
      piperDeep: {
        id: 'piper',
        title: 'Piper TTS — الخيار الخفيف الأسرع',
        content:
          '**Piper نظام تركيب صوت محلي سريع طوّره Rhasspy لأتمتة المنازل والاستخدام المُدمج.** يستخدم معمارية عصبية قائمة على VITS مدرّبة على مجموعات بيانات صوتية مع backend onnxruntime — محسّن للعمل في الوقت الفعلي على Raspberry Pi 4 أو 5 بلا GPU.',
        items: [
          '**المعمارية:** TTS عصبي VITS مع استدلال ONNX. مصمم لأجهزة الكمبيوتر ذات اللوحة الواحدة وLinux المُدمج.',
          '**التثبيت:** `pip install piper-tts`. حزم الأصوات المدرّبة مسبقًا متاحة في مستودع Piper voices على Hugging Face.',
          '**الاستخدام:** `echo "مرحبا بالعالم" | piper --model ar_JO-kareem-medium.onnx --output_file output.wav`',
          '**حزم الأصوات:** أكثر من 20 لغة، خيارات أصوات متعددة لكل لغة. كل حزمة صوت ملف نموذج ONNX بحجم 20–200 ميغابايت.',
          '**السرعة:** ~10× أسرع من الوقت الفعلي على CPU حديث. وقت فعلي على Raspberry Pi 5. زمن استجابة الصوت الأول أقل من 50 مللي ثانية.',
          '**Apple Silicon:** ~15× وقت فعلي على M5 Pro (CPU، ARM NEON).',
          '**استمع إلى عينات:** [عينات صوت Piper](https://rhasspy.github.io/piper-samples/)',
          '**مثالي لـ:** المساعدين المنزليين وأجهزة الكشك وواجهة الصوت المُدمجة والقراءة الصوتية الخاصة حيث لا GPU متاح.',
          '**القيد:** بلا استنساخ صوت. الجودة "جيدة" — تبدو طبيعية لكن اصطناعية وضوحًا مقارنة بـXTTS v2 أو StyleTTS 2.',
          '**الترخيص:** MIT — تجاري كليًا، بلا قيود.',
          '**Kokoro TTS — بديل Piper:** Kokoro TTS بديل ناشئ لـPiper في الفئة الخفيفة. يحقق طبيعية أعلى من Piper مع الحفاظ على السرعة على CPU. مرخّص تحت Apache 2.0.',
        ],
      },
      coquiDeep: {
        id: 'coqui',
        title: 'Coqui TTS — أفضل مجموعة أدوات مفتوحة المصدر',
        content:
          '**Coqui TTS مجموعة أدوات Python لتركيب الصوت تدعم معماريات نماذج متعددة واستنساخ الصوت.** طوّرتها شركة Coqui (أغلقت في يناير 2024) وتحتفظ بها الآن مجتمع المصدر المفتوح.',
        items: [
          '**التثبيت:** `pip install TTS`. تُحمَّل النماذج تلقائيًا عند الاستخدام الأول.',
          '**استنساخ الصوت:** وفّر 6+ ثوانٍ من الصوت المرجعي.',
          '**خيارات الـbackend:** VITS (الأسرع، جودة جيدة)، Tacotron2 (أقدم، أبطأ)، XTTS (أفضل جودة).',
          '**اللغات:** أكثر من 20 نموذج لغة متاح عبر `tts --list_models`.',
          '**VRAM:** 2–4 غيغابايت لـbackend VITS؛ 4–6 غيغابايت لـbackend XTTS.',
          '**Apple Silicon:** ~8× وقت فعلي على M5 Pro (CPU). بلا تسريع Metal GPU.',
          '**حالة المجتمع:** Coqui Inc أُغلقت في يناير 2024. المستودع المفتوح (`coqui-ai/TTS`) يحتفظ به المجتمع.',
          '**الترخيص:** MPL 2.0 — الاستخدام التجاري مسموح، لكن يجب الإفصاح عن الكود المصدري للتعديلات.',
          '**مثالي لـ:** المطورين الذين يريدون استنساخ الصوت بمجموعة أدوات مفتوحة المصدر وترخيص مرن.',
        ],
      },
      xttsDeep: {
        id: 'xtts',
        title: 'XTTS v2 — أفضل جودة استنساخ صوت',
        content:
          '**XTTS v2 (من Coqui) هو محرك استنساخ الصوت الأعلى جودة المتاح محليًا في 2026.** يستخدم معمارية قائمة على GPT مع نقل بين اللغات.',
        items: [
          '**استنساخ الصوت:** بـ6 ثوانٍ من الصوت المرجعي يكفي لاستنساخ صوت مقنع. 3 ثوانٍ تنتج جودة مقبولة.',
          '**الاستنساخ متعدد اللغات:** استنسخ الصوت بلغة، ولّد كلامًا بـ17 لغة مختلفة بنفس خصائص الصوت.',
          '**اللغات (17):** الإنجليزية والإسبانية والفرنسية والألمانية والإيطالية والبرتغالية والبولندية والتركية والروسية والهولندية والتشيكية والعربية والصينية (zh-cn) واليابانية والمجرية والكورية والهندية. أُضيفت الكورية والهندية في XTTS v2.0.3.',
          '**"أصوات XTTS v2":** لا توجد قائمة ثابتة بأصوات مُسمّاة. XTTS v2 نموذج استنساخ — تزوّده بمقطع مرجعي مدته 6 ثوانٍ فيعيد إنتاج ذلك المتحدث. يأتي المستودع بعدد قليل من إعدادات المتحدثين المدمجة للاختبارات السريعة، لكن سير العمل المقصود هو تزويد `speaker_wav` الخاص بك.',
          '**VRAM:** أوزان النموذج ~2 غيغابايت. 4 غيغابايت VRAM هي الحد الأدنى العملي؛ 4–6 غيغابايت موصى بها للاستدلال في الوقت الفعلي. يعمل على CPU لكن ~5–10× أبطأ.',
          '**السرعة:** بطيء — يولّد ~2× وقت فعلي على RTX 4070.',
          '**Apple Silicon:** ~3× وقت فعلي على M5 Pro (CPU، بلا تسريع Metal).',
          '**استمع إلى عينات:** [عرض XTTS v2 على Hugging Face](https://huggingface.co/spaces/coqui/xtts)',
          '**الترخيص:** CPML (Coqui Public Model License) — غير تجاري. يسمح CPML بالاستخدام الشخصي والبحثي والهواية للنموذج **ومخرجاته الصوتية**، لكنه يحظر الاستخدام التجاري (أي منتج مدفوع أو SaaS أو محتوى مدعوم بالإعلانات أو عمل للعملاء) دون اتفاقية تجارية منفصلة. أغلقت Coqui Inc في يناير 2024، فلا يوجد حاليًا كيان يبيع تراخيص XTTS v2 التجارية — عمليًا، تعامل مع XTTS v2 على أنه غير تجاري فقط. راجع قسم [قبول CPML بشكل غير تفاعلي](#cpml-noninteractive) لمتغير البيئة `COQUI_TOS_AGREED`.',
        ],
        codeBlock: `from TTS.api import TTS

# Load XTTS v2 model
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")

# Clone voice from 6-second reference audio and synthesize in any of 17 languages
tts.tts_to_file(
    text="Bonjour, je suis votre assistant vocal.",
    speaker_wav="reference_voice.wav",   # 6+ seconds of the target speaker
    language="fr",                        # Output in French using the cloned voice
    file_path="output.wav"
)`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'XTTS v2 مشمول بترخيص CPML (غير تجاري). الاستخدام التجاري — المنتجات أو SaaS أو الخدمات أو عمل العملاء المدفوع — يتطلب اتفاقية تجارية منفصلة، ومنذ إغلاق Coqui Inc في يناير 2024 لا توجد حاليًا اتفاقية كهذه متاحة للشراء. إذا احتجت استنساخ صوت تجاريًا، استخدم Tortoise (Apache 2.0) أو مجموعة أدوات Coqui TTS على backend VITS (MPL 2.0). هذا مرجع وقائعي وليس استشارة قانونية — اقرأ CPML بنفسك قبل النشر.',
          },
        ],
      },
      barkDeep: {
        id: 'bark',
        title: 'Bark — صوت إبداعي ما وراء الكلام',
        content:
          '**Bark (من Suno AI) نموذج توليدي من نص إلى صوت ينتج كلامًا وموسيقى وضحكًا وسعالًا وتنهدات وأصواتًا محيطية من موجّهات نصية.**',
        items: [
          '**القدرة الفريدة:** أدرج `[laughs]` أو `[sighs]` أو `[music]` في نصك ويولّد Bark هذه الأصوات مع الكلام.',
          '**غير قابل للتحكم كـTTS تقليدي:** الناتج يتباين بين التشغيلات لنفس الإدخال.',
          '**السرعة:** بطيء — 2–4× أبطأ من الوقت الفعلي حتى على RTX 4090.',
          '**Apple Silicon:** ~1.5× وقت فعلي على M5 Pro (CPU، MPS جزئي).',
          '**مثالي لـ:** الصوت الإبداعي وإنتاج البودكاست بمؤثرات صوتية والخيال التفاعلي.',
          '**VRAM:** GPU 4–8 غيغابايت.',
          '**التثبيت:** `pip install suno-bark`. تُحمَّل النماذج عند التشغيل الأول (~2 غيغابايت).',
          '**الترخيص:** MIT — تجاري كليًا.',
          '**القيد:** بلا استنساخ صوت موثوق.',
        ],
      },
      styleTtsDeep: {
        id: 'styletts',
        title: 'StyleTTS 2 — أقصى جودة طبيعية',
        content:
          '**StyleTTS 2 نموذج TTS قائم على الانتشار يحقق درجات MOS شبه بشرية على معيار LJSpeech.**',
        items: [
          '**المعمارية:** نقل أسلوب قائم على الانتشار.',
          '**الجودة:** أعلى درجات MOS من أي محرك TTS إنجليزي مفتوح المصدر على معيار LJSpeech.',
          '**مثالي لـ:** سرد الكتب الصوتية والتعليق الصوتي الاحترافي وإنتاج البودكاست.',
          '**التثبيت:** استنسخ المستودع من GitHub، ثبّت المتطلبات، حمّل نقاط التفتيش (~500 ميغابايت).',
          '**دعم اللغات:** إنجليزي أساسًا. غير موصى به لغير الإنجليزية.',
          '**استنساخ الصوت:** غير مدعوم.',
          '**VRAM:** GPU 2–4 غيغابايت. أسرع من XTTS v2 بـ~5–8× وقت فعلي على RTX 4070.',
          '**Apple Silicon:** ~6× وقت فعلي على M5 Pro (CPU).',
          '**استمع إلى عينات:** [StyleTTS 2 على GitHub](https://github.com/yl4579/StyleTTS2)',
          '**الترخيص:** MIT — تجاري كليًا.',
        ],
      },
      f5TtsDeep: {
        id: 'f5tts',
        title: 'F5-TTS — استنساخ صوت zero-shot، مفتوح كليًا',
        content:
          '**F5-TTS نموذج TTS قائم على flow-matching مع استنساخ صوت zero-shot — يستنسخ أي صوت من ~3 ثوانٍ من الصوت المرجعي بلا fine-tuning.**',
        items: [
          '**المعمارية:** Flow-matching بدلًا من المعمارية القائمة على GPT في XTTS v2. عادةً يوفر استدلالًا أسرع بجودة تنافسية.',
          '**استنساخ الصوت:** ~3 ثوانٍ من الصوت المرجعي كافية لاستنساخ zero-shot.',
          '**الجودة:** تنافسية مع XTTS v2 في الإنجليزية. درجات MOS ~4.1 تقريبًا.',
          '**السرعة:** ~3–5× وقت فعلي على RTX 4070.',
          '**اللغات:** متعدد اللغات — دعم قوي للإنجليزية والصينية مع توسع مستمر.',
          '**Apple Silicon:** ~2× وقت فعلي على M5 Pro (CPU).',
          '**VRAM:** GPU 3–5 غيغابايت موصى به.',
          '**التثبيت:** `pip install f5-tts` أو استنسخ من [GitHub](https://github.com/SWivid/F5-TTS).',
          '**الترخيص:** CC-BY-NC-4.0 — غير تجاري فقط.',
          '**لماذا يهم:** F5-TTS يُحضر معمارية أحدث لاستنساخ الصوت المحلي مع مجتمع نشط.',
        ],
      },
      licenseBreakdown: {
        id: 'licenses',
        title: 'التراخيص والاستخدام التجاري — هل يمكنني استخدام محرك TTS هذا تجاريًا؟',
        content:
          'الترخيص هو العامل الأهم منفردًا للاستخدام في الإنتاج، وهو يقسّم هذه المحركات بوضوح إلى مجموعتين. المحركات ذات التراخيص المتساهلة (MIT، Apache 2.0) حرة الشحن في منتج تجاري. أما المحركات المقيّدة (CPML، CC-BY-NC-4.0) فهي غير تجارية — استخدامها في منتج مدفوع أو SaaS أو محتوى مدعوم بالإعلانات أو عمل للعملاء يتطلب اتفاقية منفصلة. يقدم الجدول أدناه الترخيص الدقيق وإجابة مباشرة عن "هل يمكنني استخدامه تجاريًا؟" لكل محرك.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لاستخدام TTS محلي في منتج تجاري، يُسمح بـPiper وBark وStyleTTS 2 (MIT) وKokoro وTortoise (Apache 2.0) ومجموعة أدوات Coqui TTS على backend VITS/Tacotron2 (MPL 2.0)؛ أما XTTS v2 (CPML) وF5-TTS (CC-BY-NC-4.0) فهما غير تجاريين.',
          },
          {
            type: 'plain-terms',
            text: 'أشهر نموذجين لاستنساخ الصوت — XTTS v2 وF5-TTS — لا يمكن استخدامهما تجاريًا دون ترخيص منفصل. لاستنساخ الصوت تجاريًا، Tortoise (Apache 2.0) أو مجموعة أدوات Coqui على backend VITS (MPL 2.0) هما الخياران الآمنان.',
          },
        ],
        columns: ['الأداة', 'الترخيص', 'تجاري؟', 'الشرط الرئيسي'],
        rows: [
          {
            'الأداة': 'Piper',
            'الترخيص': 'MIT',
            'تجاري؟': 'نعم — بلا قيود',
            'الشرط الرئيسي': 'تضمين إشعار MIT؛ تحقق من ترخيص نموذج كل صوت',
          },
          {
            'الأداة': 'Kokoro',
            'الترخيص': 'Apache 2.0',
            'تجاري؟': 'نعم — بلا قيود',
            'الشرط الرئيسي': 'تضمين إشعار Apache 2.0',
          },
          {
            'الأداة': 'Coqui TTS (مجموعة الأدوات)',
            'الترخيص': 'MPL 2.0',
            'تجاري؟': 'نعم — بشروط',
            'الشرط الرئيسي': 'الإفصاح عن مصدر أي تعديلات على ملفات مجموعة الأدوات',
          },
          {
            'الأداة': 'XTTS v2 (النموذج)',
            'الترخيص': 'CPML',
            'تجاري؟': 'لا — غير تجاري',
            'الشرط الرئيسي': 'التجاري يحتاج اتفاقية؛ لا شيء معروض للبيع منذ إغلاق Coqui (يناير 2024)',
          },
          {
            'الأداة': 'F5-TTS',
            'الترخيص': 'CC-BY-NC-4.0',
            'تجاري؟': 'لا — غير تجاري',
            'الشرط الرئيسي': 'قيد NC ينتقل حتى إلى النماذج المُحسّنة (بيانات تدريب Emilia)',
          },
          {
            'الأداة': 'Bark',
            'الترخيص': 'MIT',
            'تجاري؟': 'نعم — بلا قيود',
            'الشرط الرئيسي': 'تضمين إشعار حقوق الطبع MIT',
          },
          {
            'الأداة': 'StyleTTS 2',
            'الترخيص': 'MIT',
            'تجاري؟': 'نعم — بلا قيود',
            'الشرط الرئيسي': 'تضمين إشعار حقوق الطبع MIT',
          },
          {
            'الأداة': 'Tortoise',
            'الترخيص': 'Apache 2.0',
            'تجاري؟': 'نعم — بلا قيود',
            'الشرط الرئيسي': 'النسبة؛ الحصول على موافقة لأي صوت مُستنسَخ',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Coqui TTS (مجموعة الأدوات، MPL 2.0) وXTTS v2 (أوزان النموذج المحددة، CPML) لهما تراخيص مختلفة. يمكنك شحن مجموعة أدوات Coqui TTS مع backends VITS أو Tacotron2 في منتج تجاري تحت MPL 2.0. ينطبق قيد CPML غير التجاري تحديدًا على أوزان نموذج XTTS v2 ومخرجاته الصوتية — لا على كود مجموعة الأدوات.',
          },
          {
            type: 'warning',
            text: 'هذا مرجع وقائعي وليس استشارة قانونية. تتغير التراخيص والحالات الحدّية (موافقة الصوت، شروط مجموعات البيانات، تراخيص نماذج كل صوت) مهمة. اقرأ ملف ترخيص كل محرك بنفسك، واستشر محاميًا، قبل الاعتماد على أيٍّ من هذه الشروط للنشر التجاري.',
          },
        ],
      },
      cpmlNonInteractive: {
        id: 'cpml-noninteractive',
        title: 'قبول CPML بشكل غير تفاعلي (COQUI_TOS_AGREED)',
        content:
          'في المرة الأولى التي تحمّل فيها نموذج XTTS / Coqui مشمولًا بـCPML، تطبع المكتبة شروط الترخيص وتنتظر منك كتابة "y" للقبول. تلك المطالبة التفاعلية تتعلّق في بناء Docker وخطوط CI والخوادم بلا واجهة. لقبول CPML بشكل غير تفاعلي، اضبط متغير البيئة `COQUI_TOS_AGREED` على `1` — هذا يسجّل أنك قرأت ووافقت على Coqui Public Model License قبل تحميل النموذج. وهو لا يغيّر الترخيص: CPML لا يزال غير تجاري، وضبط المتغير هو موافقتك على تلك الشروط، لا تنازلًا عنها.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اضبط متغير البيئة COQUI_TOS_AGREED=1 لقبول Coqui Public Model License (CPML) دون المطالبة التفاعلية في Docker أو CI أو أي بيئة بلا واجهة.',
          },
          {
            type: 'plain-terms',
            text: 'في صدفة أو Dockerfile استخدم `export COQUI_TOS_AGREED=1`؛ وفي Python اضبط `os.environ["COQUI_TOS_AGREED"] = "1"` قبل استيراد النموذج أو تحميله. في كلتا الحالتين يحمَّل النموذج دون انتظار إدخال من لوحة المفاتيح.',
          },
        ],
        items: [
          '**الصدفة / CI:** `export COQUI_TOS_AGREED=1` قبل تشغيل نصك البرمجي.',
          '**Docker:** أضف `ENV COQUI_TOS_AGREED=1` إلى Dockerfile، أو مرّر `-e COQUI_TOS_AGREED=1` إلى `docker run`.',
          '**Python (اضبطه قبل تحميل النموذج):** `import os; os.environ["COQUI_TOS_AGREED"] = "1"` — يجب أن يعمل قبل أن يُنشئ `TTS(...)` نموذج XTTS.',
          '**ما الذي يفعله:** يسجّل قبولًا غير تفاعلي لـCPML بحيث لا يتوقف تحميل النموذج على مطالبة `y/n`. ليس ترخيصًا تجاريًا ولا يزيل القيد غير التجاري.',
        ],
        codeBlock: `# 1) Shell / CI — accept the CPML once for the session
export COQUI_TOS_AGREED=1

# 2) Dockerfile — bake acceptance into the image
# ENV COQUI_TOS_AGREED=1

# 3) Python — set it before the model is created
import os
os.environ["COQUI_TOS_AGREED"] = "1"   # must be set BEFORE the TTS() call below

from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2").to("cuda")
# Model now loads without the interactive license prompt`,
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'COQUI_TOS_AGREED=1 يكبت المطالبة التفاعلية فقط — وهو قبولك لـCPML، الذي يبقى ترخيصًا غير تجاري. لا يمنح حقوقًا تجارية لـXTTS v2.',
          },
        ],
      },
      localVsCloud: {
        id: 'local-vs-cloud',
        title: 'TTS محلي مقابل ElevenLabs وTTS السحابي',
        content:
          'ElevenLabs وGoogle Text-to-Speech وAzure Speech لا تزال سقف الجودة لـTTS في 2026.',
        items: [
          '**سقف الجودة:** ElevenLabs > StyleTTS 2 ≈ XTTS v2 > F5-TTS ≈ Coqui TTS > Piper.',
          '**زمن الاستجابة:** Piper المحلي (~30–50 مللي ثانية أول صوت) أسرع من أي رحلة ذهابًا وإيابًا لـAPI ElevenLabs (~300–500 مللي ثانية).',
          '**التكلفة:** ElevenLabs يُقيّد 5–99 دولار/شهر. TTS المحلي بدون تكلفة بعد الأجهزة الأولية.',
          '**استنساخ الصوت:** ElevenLabs Instant Voice Clone ≈ جودة XTTS v2.',
          '**الخصوصية:** TTS محلي = لا بيانات صوتية مُرسَلة. ElevenLabs = صوت معالَج على خوادمهم.',
          '**القدرة دون اتصال:** محلي = دون اتصال كليًا. ElevenLabs = يتطلب إنترنت.',
          '**متى تستخدم السحابة:** الإنتاج الصوتي الاحترافي، المنتجات الموجّهة للعملاء التي تتطلب أعلى جودة.',
          '**متى تستخدم المحلي:** الصوت الحساس للخصوصية، الأجهزة المُدمجة، المعالجة الدُّفعية الحساسة للتكلفة، البيئات دون اتصال.',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'كيفية الاختيار',
        content:
          'مخطط قرار من متطلباتك إلى محرك TTS الصحيح:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تحتاج استنساخ صوت؟ ← XTTS v2 (أفضل جودة) أو F5-TTS (أسرع، معمارية أحدث) أو Coqui TTS (ترخيص مفتوح). تحتاج سرعة CPU؟ ← Piper. تحتاج صوتًا إبداعيًا؟ ← Bark. تحتاج أفضل جودة إنجليزية؟ ← StyleTTS 2.',
          },
          {
            type: 'plain-terms',
            text: 'إذا أردت استنساخ صوت شخص ما، استخدم XTTS v2 للجودة، F5-TTS للاستدلال الأسرع، أو Coqui VITS للترخيص المرن. إذا كنت تبني واجهة صوتية لـRaspberry Pi، استخدم Piper. إذا كنت تنتج بودكاست بمؤثرات صوتية، جرّب Bark. إذا كنت تسرد كتبًا صوتية إنجليزية، استخدم StyleTTS 2.',
          },
        ],
        items: [
          '**تحتاج استنساخ صوت؟** ← نعم: XTTS v2 (أفضل جودة، CPML) أو F5-TTS (أسرع، CC-BY-NC-4.0) أو Coqui VITS (جودة جيدة، MPL 2.0). لا: Piper (سرعة)، StyleTTS 2 (جودة).',
          '**تحتاج العمل على CPU فقط / Raspberry Pi؟** ← Piper فقط. Kokoro بديل CPU أعلى جودة بترخيص Apache 2.0.',
          '**تحتاج صوتًا إبداعيًا بأصوات غير منطوقة؟** ← Bark.',
          '**تحتاج أفضل جودة سرد إنجليزي؟** ← StyleTTS 2.',
          '**تحتاج دعمًا متعدد اللغات؟** ← XTTS v2 (17 لغة، استنساخ متعدد اللغات)، Coqui (20+ لغة)، Piper (20+ حزمة لغة).',
          '**تحتاج ترخيص MIT تجاريًا كليًا؟** ← Piper أو Bark أو StyleTTS 2.',
          '**تبني خط أنابيب مساعد صوتي؟** ← Piper لمخرج TTS منخفض زمن الاستجابة (انظر /ar/power-local-llm/build-local-voice-assistant-2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم من الصوت المرجعي أحتاج لاستنساخ صوت بـXTTS v2؟',
            a: 'XTTS v2 يتطلب 3 ثوانٍ على الأقل من الصوت المرجعي النظيف، لكن مع 6 ثوانٍ أو أكثر تتحسن النتائج بشكل ملحوظ. يجب أن يكون الصوت لمتحدث واحد مع حد أدنى من ضوضاء الخلفية.',
          },
          {
            q: 'هل يمكنني استخدام Piper TTS في منتج تجاري؟',
            a: 'نعم. Piper مرخّص تحت MIT الذي يسمح بالاستخدام التجاري غير المحدود. يجب تضمين إشعار ترخيص MIT في منتجك. نماذج الأصوات (ملفات ONNX) قد تحمل تراخيص منفصلة لكل صوت.',
          },
          {
            q: 'هل Coqui TTS لا يزال مُصانًا بعد إغلاق الشركة؟',
            a: 'نعم، لكن بإيقاع أبطأ. أغلقت شركة Coqui في يناير 2024، لكن المستودع المفتوح (`coqui-ai/TTS`) يحتفظ به المساهمون من المجتمع.',
          },
          {
            q: 'أي محرك TTS محلي لديه أفضل دعم متعدد اللغات؟',
            a: 'XTTS v2 يدعم 17 لغة مع استنساخ صوت متعدد اللغات. Coqui TTS لديه أكثر من 20 نموذج لغة. Piper لديه أكثر من 20 حزمة صوت لكل لغة. إذا احتجت استنساخ صوت وإنتاج كلام بلغات متعددة من عينة مرجعية واحدة، XTTS v2 هو الخيار الوحيد.',
          },
          {
            q: 'هل يستطيع Bark إنتاج الموسيقى؟',
            a: 'يستطيع Bark إنتاج مقاطع موسيقية بسيطة مع الكلام بتوكن `[music]`. ليس مولّد موسيقى مخصصًا — المخرجات قصيرة وغير متسقة.',
          },
          {
            q: 'ما أفضل TTS محلي مجاني لاستنساخ الصوت؟',
            a: 'F5-TTS (CC-BY-NC-4.0) للاستخدام غير التجاري — يستنسخ أصواتًا من ~3 ثوانٍ من الصوت. للاستخدام التجاري، Coqui TTS مع backend VITS (MPL 2.0). XTTS v2 يمتلك أفضل جودة لكن ترخيص CPML يقيّد النشر التجاري.',
          },
          {
            q: 'هل يمكنني تشغيل XTTS v2 على Mac بـApple Silicon؟',
            a: 'نعم، لكن على CPU فقط — تقريبًا 3× وقت فعلي على M5 Pro. لا يوجد حاليًا تسريع Metal GPU لمحركات TTS.',
          },
          {
            q: 'أي محرك TTS محلي يبدو أكثر إنسانية؟',
            a: 'StyleTTS 2 للسرد الإنجليزي — يحقق أعلى درجات MOS (~4.3 مقابل مرجع بشري ~4.5). XTTS v2 وF5-TTS تنافسيان (~4.1). لا يضاهي أيٌّ منها ElevenLabs Turbo v2 في ذروة جودته.',
          },
          {
            q: 'هل يمكنني استخدام XTTS v2 تجاريًا؟',
            a: 'لا، ليس دون اتفاقية تجارية منفصلة. يصدر XTTS v2 تحت Coqui Public Model License (CPML)، الذي يسمح بالاستخدام الشخصي والبحثي والهواية للنموذج ومخرجاته الصوتية لكنه يحظر الاستخدام التجاري — أي منتج مدفوع أو SaaS أو محتوى مدعوم بالإعلانات أو عمل للعملاء. أغلقت Coqui Inc في يناير 2024، فلا يوجد حاليًا كيان يبيع تراخيص XTTS v2 التجارية؛ عمليًا، تعامل مع XTTS v2 على أنه غير تجاري فقط. لاستنساخ الصوت تجاريًا، استخدم Tortoise (Apache 2.0) أو مجموعة أدوات Coqui TTS على backend VITS (MPL 2.0). هذا مرجع وقائعي وليس استشارة قانونية — اقرأ CPML بنفسك قبل النشر.',
          },
          {
            q: 'كيف أقبل ترخيص Coqui CPML بشكل غير تفاعلي (Docker / CI)؟',
            a: 'اضبط متغير البيئة COQUI_TOS_AGREED على 1. تطبع مكتبة Coqui/XTTS عادةً CPML وتنتظر منك كتابة "y"، وهو ما يتعلّق في بناء Docker وCI والخوادم بلا واجهة. ضبط COQUI_TOS_AGREED=1 يسجّل قبولك بحيث يحمَّل النموذج دون المطالبة. استخدم `export COQUI_TOS_AGREED=1` في صدفة أو خطوة CI، أو `ENV COQUI_TOS_AGREED=1` في Dockerfile، أو `os.environ["COQUI_TOS_AGREED"] = "1"` في Python قبل استدعاء TTS(). هذا يكبت المطالبة فقط — وهو موافقتك على CPML ولا يمنح حقوقًا تجارية.',
          },
          {
            q: 'كم عدد الأصوات واللغات التي يدعمها XTTS v2؟',
            a: 'لا يملك XTTS v2 قائمة ثابتة بأصوات مُسمّاة — فهو نموذج استنساخ، إذ تزوّده بمقطع مرجعي مدته 6 ثوانٍ فيعيد إنتاج ذلك المتحدث (يأتي المستودع أيضًا بعدد قليل من إعدادات المتحدثين المدمجة للاختبارات السريعة). يولّد كلامًا بـ17 لغة: الإنجليزية والإسبانية والفرنسية والألمانية والإيطالية والبرتغالية والبولندية والتركية والروسية والهولندية والتشيكية والعربية والصينية (zh-cn) واليابانية والمجرية والكورية والهندية. الاستنساخ متعدد اللغات: استنسخ صوتًا مرة واحدة وولّده بأي من الـ17 لغة.',
          },
          {
            q: 'Kokoro مقابل Piper — أي محرك TTS خفيف على CPU يجب أن أستخدم؟',
            a: 'كلاهما يعمل بسرعة على CPU بلا GPU وكلاهما مرخّص بتساهل (Piper تحت MIT، Kokoro تحت Apache 2.0)، فأيٌّ منهما آمن للاستخدام التجاري. اختر Piper عندما تحتاج أقل زمن استجابة وأوسع تغطية لغوية (20+ حزمة صوت لغوية، وقت فعلي على Raspberry Pi 5) — فهو المعيار للصوت المُدمج والمنزل الذكي. اختر Kokoro (نموذج بـ82 مليون معامل مبني على معمارية StyleTTS 2) عندما تريد طبيعية أعلى من Piper وتقبل حوسبة أكثر قليلًا؛ جودته الإنجليزية أقرب إلى محركات GPU الأثقل. لـRaspberry Pi أو مساعد دائم التشغيل، Piper؛ ولقراءة صوتية على سطح مكتب/خادم حيث تهم الجودة أكثر من الميلي ثوانٍ، Kokoro.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Piper TTS على GitHub](https://github.com/rhasspy/piper) — الكود المصدري وحزم الأصوات وتنزيلات نماذج ONNX ودليل الإعداد لـRaspberry Pi.',
          '[Coqui TTS على GitHub](https://github.com/coqui-ai/TTS) — الكود المصدري وقائمة النماذج ووثائق استنساخ الصوت.',
          '[وثائق XTTS v2](https://docs.coqui.ai/en/latest/models/xtts.html) — بطاقة نموذج XTTS v2 والترخيص (CPML) وAPI استنساخ الصوت.',
          '[Bark على GitHub](https://github.com/suno-ai/bark) — الكود المصدري وتوكنات موجّه الصوت وتنزيل النموذج.',
          '[StyleTTS 2 على GitHub](https://github.com/yl4579/StyleTTS2) — ورقة المعمارية ونقاط التفتيش ودليل الاستدلال.',
          '[F5-TTS على GitHub](https://github.com/SWivid/F5-TTS) — TTS قائم على flow-matching مع استنساخ صوت zero-shot.',
          '[Kokoro TTS على GitHub](https://github.com/hexgrad/kokoro) — TTS خفيف عالي الجودة بترخيص Apache 2.0.',
          '[Tortoise TTS على GitHub](https://github.com/neonbjb/tortoise-tts) — TTS متعدد الأصوات عالي الجودة مع استنساخ الصوت، ترخيص Apache 2.0. بطيء جدًا لكنه متوافق تجاريًا.',
          '[XTTS-v2 LICENSE.txt (CPML) على Hugging Face](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) — النص الكامل لـCoqui Public Model License الذي يحكم XTTS v2.',
          '[Piper voices على Hugging Face](https://huggingface.co/rhasspy/piper-voices) — جميع تنزيلات حزم اللغة/الصوت المتاحة.',
          '[عينات صوت Piper](https://rhasspy.github.io/piper-samples/) — عروض صوتية لجميع أصوات Piper.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[بناء مساعد صوتي دون اتصال كليًا في 2026](/ar/power-local-llm/build-local-voice-assistant-2026) — استخدم Piper أو Coqui TTS كطبقة مخرجات في خط أنابيب كامل من Whisper + LLM + TTS.',
          '[التعرف على الكلام المحلي 2026: Whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison-2026) — جانب الإدخال في خط أنابيب الصوت: STT لتكملة TTS.',
          '[خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي 2026](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — ادمج TTS كطبقة مخرجات صوتية في مجموعة متعددة الوسائط كاملة.',
          '[بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) — مساعد صوتي موبايل باستخدام TTS نظام iOS أو Piper.',
          '[أفضل وحدات GPU الاقتصادية لـLLM المحلي](/ar/local-llms/best-budget-gpus-local-llm) — اختيار GPU لتشغيل استدلال XTTS v2 وF5-TTS وBark وStyleTTS 2.',
          '[أفضل ذكاء اصطناعي لتحويل النص إلى كلام لمنتجي المحتوى](/ar/prompt-bites/best-ai-text-to-speech-for-content-creators) — Piper مقابل Coqui XTTS مقابل ElevenLabs Local: مقارنة جودة الصوت وزمن الاستجابة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تراخيص TTS المحلي واستنساخ الصوت 2026: أي المحركات تسمح بالاستخدام التجاري (Piper وXTTS v2 وF5-TTS وCoqui)',
      description: 'أي محركات TTS المحلية تسمح بالاستخدام التجاري؟ التراخيص الدقيقة لـPiper (MIT) وXTTS v2 (CPML) وF5-TTS (CC-BY-NC) وCoqui وKokoro وTortoise — بالإضافة إلى متغير COQUI_TOS_AGREED ومقارنة استنساخ الصوت. دليل 2026.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts',
      inLanguage: 'ar',
      datePublished: '2026-05-14',
      dateModified: '2026-06-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
}
