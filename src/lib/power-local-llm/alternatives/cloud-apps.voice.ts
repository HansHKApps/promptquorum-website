import type { CloudApp, CloudAppSource } from './types'

// Voice / audio mapping (text-to-speech, speech-to-text, meeting transcription).
// `sourced` bases come from the directory's own tagline, license and compare flags
// (src/lib/power-local-llm/apps/*.ts). Closeness describes tool type and workflow, NOT audio quality,
// voice naturalness or language coverage. Online-app descriptions are deliberately generic: they
// name the product category only, and link to the vendor's own page instead of repeating
// feature, pricing or quota claims that change.

const VERIFIED = '2026-10-03'

const src = (label: string, url: string): CloudAppSource => ({ label, url })

const GUIDE = src('PromptQuorum: local voice and audio tools compared', '/power-local-llm/local-llm-voice-audio-compared')

export const VOICE_CLOUD_APPS: CloudApp[] = [
  {
    id: 'elevenlabs',
    category: 'voice',
    name: 'ElevenLabs',
    vendor: 'ElevenLabs',
    aliases: ['elevenlabs', 'eleven labs', 'elevenlabs ai', '11labs', 'eleven labs ai'],
    summary: 'Closed cloud service for text-to-speech and voice cloning, with speech-to-text and dubbing products.',
    localMatches: [
      { slug: 'izwi', tier: 'closest', basis: 'Local runtime covering text-to-speech, voice cloning, transcription and speaker labels in one tool (directory data).', confidence: 'sourced' },
      { slug: 'xtts-v2', tier: 'similar', basis: 'Voice cloning from short audio samples, 17 languages stated. License is CPML; check its commercial-use terms.', confidence: 'sourced' },
      { slug: 'coqui-tts', tier: 'similar', basis: 'Voice cloning, streaming and an API server stated in the directory data.', confidence: 'sourced' },
      { slug: 'styletts-2', tier: 'similar', basis: 'Natural-sounding text-to-speech with style control (directory description); no cloning flag set.', confidence: 'sourced' },
      { slug: 'piper-tts', tier: 'partial', basis: 'Lightweight multilingual text-to-speech on CPU; no voice cloning stated.', confidence: 'sourced' },
      { slug: 'bark', tier: 'partial', basis: 'Generative speech with sound effects and music; voice cloning is marked false in the directory data.', confidence: 'sourced' },
    ],
    gapNote: 'A hosted voice library, studio editing and dubbing workflows have no direct local counterpart in the directory. Voice quality and language coverage depend on the model you load and your hardware.',
    verifiedAt: VERIFIED,
    sources: [src('ElevenLabs (vendor site)', 'https://elevenlabs.io'), GUIDE],
  },
  {
    id: 'openai-tts',
    category: 'voice',
    name: 'OpenAI Text-to-Speech',
    vendor: 'OpenAI',
    aliases: ['openai tts', 'openai text to speech', 'openai speech', 'openai voice', 'openai voices', 'gpt tts', 'chatgpt voice'],
    summary: 'Closed text-to-speech API from OpenAI, also used for voice replies in ChatGPT.',
    localMatches: [
      { slug: 'openai-edge-tts', tier: 'closest', basis: 'Self-hosted, OpenAI-compatible text-to-speech API server. Hybrid: it relies on Microsoft Edge\'s online voices, so it is not fully local.', confidence: 'sourced' },
      { slug: 'piper-tts', tier: 'similar', basis: 'Local text-to-speech with an API server stated; runs on CPU.', confidence: 'sourced' },
      { slug: 'coqui-tts', tier: 'similar', basis: 'Local synthesis with an API server stated.', confidence: 'sourced' },
      { slug: 'willow-inference-server', tier: 'partial', basis: 'Self-hosted speech server with TTS, ASR and LLM inference and an API server stated.', confidence: 'sourced' },
    ],
    gapNote: 'For a drop-in replacement of the API, look for OpenAI-compatible endpoints. Voice quality varies by model and hardware.',
    verifiedAt: VERIFIED,
    sources: [src('OpenAI text-to-speech docs (vendor)', 'https://platform.openai.com/docs/guides/text-to-speech'), GUIDE],
  },
  {
    id: 'openai-whisper-api',
    category: 'voice',
    name: 'OpenAI Whisper API',
    vendor: 'OpenAI',
    aliases: ['openai whisper', 'openai whisper api', 'whisper api', 'openai speech to text', 'openai transcription'],
    summary: 'Hosted speech-to-text API from OpenAI. The Whisper model itself is also available to run locally.',
    localMatches: [
      { slug: 'whisper-cpp', tier: 'closest', basis: 'Local Whisper speech recognition for CPU and GPU, with an API server stated (directory data).', confidence: 'sourced' },
      { slug: 'faster-whisper', tier: 'closest', basis: 'Whisper transcription through CTranslate2; usable on CPU (directory data).', confidence: 'sourced' },
      { slug: 'macwhisper', tier: 'similar', basis: 'One-time-purchase Mac app for local Whisper transcription with speaker labels (proprietary).', confidence: 'sourced' },
      { slug: 'willow-inference-server', tier: 'similar', basis: 'Self-hosted server combining Whisper ASR with TTS and an API server.', confidence: 'sourced' },
    ],
    gapNote: 'Local Whisper runs the same model family as the hosted API, but accuracy and speed depend on the model size and your hardware.',
    verifiedAt: VERIFIED,
    sources: [src('OpenAI speech-to-text docs (vendor)', 'https://platform.openai.com/docs/guides/speech-to-text'), GUIDE],
  },
  {
    id: 'otter-ai',
    category: 'voice',
    name: 'Otter.ai',
    vendor: 'Otter.ai',
    aliases: ['otter ai', 'otter', 'otter.ai', 'otterai'],
    summary: 'Closed cloud service for meeting transcription and notes.',
    localMatches: [
      { slug: 'meetily', tier: 'closest', basis: '100% local meeting assistant with live transcription and speaker diarization (directory data).', confidence: 'sourced' },
      { slug: 'macwhisper', tier: 'similar', basis: 'Local transcription app for Mac with speaker labels; not a live meeting assistant.', confidence: 'sourced' },
      { slug: 'funclip', tier: 'partial', basis: 'Self-hosted audio/video clipping with transcription and speaker labels.', confidence: 'sourced' },
      { slug: 'faster-whisper', tier: 'partial', basis: 'Transcription engine only; no meeting UI or notes.', confidence: 'sourced' },
    ],
    gapNote: 'Calendar integration, shared workspaces and cloud search across meetings have no direct local counterpart in the directory.',
    verifiedAt: VERIFIED,
    sources: [src('Otter.ai (vendor site)', 'https://otter.ai'), GUIDE],
  },
  {
    id: 'murf-ai',
    category: 'voice',
    name: 'Murf AI',
    vendor: 'Murf',
    aliases: ['murf ai', 'murf', 'murf.ai', 'murf studio'],
    summary: 'Closed online studio for text-to-speech voiceovers.',
    localMatches: [
      { slug: 'styletts-2', tier: 'similar', basis: 'Natural-sounding text-to-speech with style control (directory description).', confidence: 'sourced' },
      { slug: 'xtts-v2', tier: 'similar', basis: 'Multilingual speech with voice cloning from short samples; CPML license.', confidence: 'sourced' },
      { slug: 'coqui-tts', tier: 'similar', basis: 'Open-source voice synthesis with multiple model architectures.', confidence: 'sourced' },
      { slug: 'piper-tts', tier: 'partial', basis: 'Lightweight multilingual text-to-speech on CPU; no studio editor.', confidence: 'sourced' },
    ],
    gapNote: 'The browser-based studio (timeline, pacing and emphasis editing, stock voice library) has no direct local counterpart in the directory.',
    verifiedAt: VERIFIED,
    sources: [src('Murf (vendor site)', 'https://murf.ai'), GUIDE],
  },
  {
    id: 'speechify',
    category: 'voice',
    name: 'Speechify',
    vendor: 'Speechify',
    aliases: ['speechify', 'speechify ai', 'speechify text to speech'],
    summary: 'Closed app that reads documents and web pages aloud with synthetic voices.',
    localMatches: [
      { slug: 'piper-tts', tier: 'similar', basis: 'Lightweight local text-to-speech on CPU, usable for read-aloud setups; needs your own front end.', confidence: 'sourced' },
      { slug: 'styletts-2', tier: 'partial', basis: 'Natural-sounding text-to-speech; a model, not a reader app.', confidence: 'sourced' },
      { slug: 'openai-edge-tts', tier: 'partial', basis: 'Self-hosted TTS API server; hybrid, uses Microsoft Edge\'s online voices.', confidence: 'sourced' },
    ],
    gapNote: 'No directory app is documented as a ready-made read-aloud reader for documents and web pages; the tools above are engines that need a front end.',
    verifiedAt: VERIFIED,
    sources: [src('Speechify (vendor site)', 'https://speechify.com'), GUIDE],
  },
  {
    id: 'descript',
    category: 'voice',
    name: 'Descript',
    vendor: 'Descript',
    aliases: ['descript', 'descript ai', 'descript studio'],
    summary: 'Closed editor that edits audio and video through their transcript.',
    localMatches: [
      { slug: 'funclip', tier: 'similar', basis: 'Self-hosted clipping of video/audio from transcripts, with an LLM to find segments; no full editor.', confidence: 'sourced' },
      { slug: 'macwhisper', tier: 'partial', basis: 'Local transcription with speaker labels; no audio or video editing.', confidence: 'sourced' },
      { slug: 'whisper-cpp', tier: 'partial', basis: 'Local transcription engine; no editing interface.', confidence: 'sourced' },
    ],
    gapNote: 'No directory app combines transcription with full transcript-based audio and video editing.',
    verifiedAt: VERIFIED,
    sources: [src('Descript (vendor site)', 'https://www.descript.com'), GUIDE],
  },
  {
    id: 'amazon-polly',
    category: 'voice',
    name: 'Amazon Polly',
    vendor: 'Amazon Web Services',
    aliases: ['amazon polly', 'aws polly', 'polly', 'amazon text to speech', 'google cloud text to speech', 'google tts'],
    summary: 'Closed cloud text-to-speech API (also covers comparable cloud TTS APIs such as Google Cloud Text-to-Speech).',
    localMatches: [
      { slug: 'piper-tts', tier: 'closest', basis: 'Local multilingual text-to-speech with an API server stated; runs on CPU.', confidence: 'sourced' },
      { slug: 'coqui-tts', tier: 'similar', basis: 'Local synthesis with streaming and an API server stated.', confidence: 'sourced' },
      { slug: 'openai-edge-tts', tier: 'partial', basis: 'Self-hosted TTS API server; hybrid, uses Microsoft Edge\'s online voices.', confidence: 'sourced' },
    ],
    gapNote: 'Managed scaling, service-level guarantees and the vendor\'s voice catalogue have no local counterpart; local voices vary by model.',
    verifiedAt: VERIFIED,
    sources: [src('Amazon Polly (vendor site)', 'https://aws.amazon.com/polly/'), GUIDE],
  },
]
