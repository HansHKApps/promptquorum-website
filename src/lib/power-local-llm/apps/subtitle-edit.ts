// Local AI App Directory — Subtitle Edit (layer: subtitle editor with local speech-to-text and auto-translate, Voice & Audio / Images & Video)
// Added 2026-10-24. Facts verified 2026-10-24 against the GitHub API (SubtitleEdit/subtitleedit: MIT, not archived, last push 2026-10-24),
// the GitHub Releases page (latest stable v5.3.0 published 2026-10-14; pre-release v5.4.0-beta6 published 2026-10-24; assets include
// SubtitleEdit-Windows-x64-Setup.exe, Windows x64/ARM64 zips, notarized macOS ARM64/x64 .dmg, Linux x64/ARM64 tar.gz and a Flatpak),
// the README (system requirements, Privacy section), change-log.txt and the documentation at subtitleedit.github.io/subtitleedit
// (features/speech-to-text, features/auto-translate, features/auto-translate-advanced, third-party-components, faq).
// The official site https://www.nikse.dk/subtitleedit renders with JavaScript and answered plain HTTP requests with a ModSecurity error,
// so its page text was NOT read; the GitHub homepage field points at nikse.dk/SubtitleEdit/Help. No separate privacy-policy page was found:
// the README "Privacy" section is the maker's privacy statement.
// Not primarily an AI app: the AI parts (Whisper-family speech-to-text, local-LLM and cloud auto-translate) are optional engines the user
// downloads or configures; the editor itself works offline without them. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'subtitle-edit',
  name: 'Subtitle Edit',
  categories: ['speech-to-text', 'editing-upscaling'],
  interfaces: ['desktop', 'cli'], // desktop editor plus the seconv command-line converter shipped in the same releases
  locality: 'hybrid', // editor and the local engines (whisper.cpp, Crisp ASR, llama.cpp, Ollama, LM Studio) run on the machine; optional cloud engines (Google, DeepL, OpenAI, Anthropic, ...) send the text or audio to the chosen provider (README Privacy section)
  platforms: ['win', 'mac', 'linux'],
  worksWith: ['Whisper', 'whisper.cpp', 'Ollama', 'LM Studio', 'llama.cpp', 'FFmpeg', 'mpv'],
  engine: 'both', // downloads and runs its own engines AND connects to external servers (Ollama, LM Studio, OpenAI-compatible endpoints)
  license: 'MIT',
  price: 'free', // FAQ: MIT licence, no ads or limitations; donations via GitHub Sponsors and PayPal
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the chosen speech-to-text / translation model; the docs list CPU, CUDA, Vulkan and Metal backends and model sizes from 75 MB to 9.4 GB
  stars: 14699, // GitHub API, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio', 'build'],
  url: 'nikse.dk/subtitleedit',
  storeLinks: {
    github: 'https://github.com/SubtitleEdit/subtitleedit',
    web: 'https://www.nikse.dk/subtitleedit',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v5.3.0 (2026-10-14) checked 2026-10-24: SubtitleEdit-Windows-x64-Setup.exe, SubtitleEdit-Windows-x64.zip, SubtitleEdit-macOS-ARM64.dmg and -x64.dmg (signed and notarized per the README), SubtitleEdit-Linux-x64.tar.gz and SubtitleEdit-linux-x64.flatpak; Linux native builds need mpv and ffmpeg from the package manager, the Flatpak bundles them',
  tagline: {
    en: 'Free open-source subtitle editor for Windows, macOS and Linux with optional local Whisper-family transcription and local or cloud auto-translate',
    de: 'Kostenloser Open-Source-Untertiteleditor für Windows, macOS und Linux mit optionaler lokaler Whisper-Transkription und lokaler oder Cloud-Übersetzung',
    fr: 'Éditeur de sous-titres libre et gratuit pour Windows, macOS et Linux, avec transcription locale de type Whisper et traduction locale ou cloud en option',
    ja: 'Windows・macOS・Linux対応の無料オープンソース字幕エディタ。ローカルのWhisper系文字起こしと、ローカル／クラウドの自動翻訳を任意で利用可能',
    zh: '适用于 Windows、macOS 和 Linux 的免费开源字幕编辑器，可选用本地 Whisper 系列转写以及本地或云端自动翻译',
    es: 'Editor de subtítulos gratuito y de código abierto para Windows, macOS y Linux, con transcripción local tipo Whisper y traducción local o en la nube opcionales',
    pt: 'Editor de legendas gratuito e de código aberto para Windows, macOS e Linux, com transcrição local da família Whisper e tradução local ou na nuvem opcionais',
    ar: 'محرّر ترجمات مجاني ومفتوح المصدر لأنظمة Windows وmacOS وLinux، مع تفريغ صوتي محلي من عائلة Whisper وترجمة تلقائية محلية أو سحابية اختيارية',
    ko: 'Windows, macOS, Linux용 무료 오픈소스 자막 편집기로, 로컬 Whisper 계열 전사와 로컬 또는 클라우드 자동 번역을 선택적으로 사용할 수 있습니다',
  },
  reviewSlug: 'subtitle-edit-review',
  pqReview: {
    date: '2026-10-24',
    version: '5.3.0',
    versionSourceUrl: 'https://github.com/SubtitleEdit/subtitleedit/releases/tag/v5.3.0',
  },
  // Comparison attributes: each value verified against the project's documentation on 2026-10-24; a missing key = not stated there, never false.
  compare: { cpuUsable: true, speakerLabels: true }, // docs: Whisper CPP is a "local CPU engine"; Crisp ASR "Detect speakers" (Sortformer, up to 8 speakers)
  verdict: 'Best for people who already edit or translate subtitles and want local Whisper-family transcription and local-LLM translation inside one MIT-licensed editor; limited by the fact that the AI engines are separate downloads, cloud engines send your text or audio to a third party, and PromptQuorum has not tested transcription or translation quality.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub Releases: pre-release v5.4.0-beta6 published 2026-10-24 (last stable v5.3.0 on 2026-10-14); API pushed_at 2026-10-24, read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/SubtitleEdit/subtitleedit/releases',
}
