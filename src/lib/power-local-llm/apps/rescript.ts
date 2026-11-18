// Local AI App Directory — Rescript (layer: transcript-based video and audio editor; Whisper transcription, speaker labels, filler/silence removal and optional voice-cloned line fixes run on the user's device)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: getrescript.com (home page, /privacy dated 8 August 2026, /terms, /acceptable-use, /regenerate-speech), GitHub repository wassgha/rescript
// (API metadata, README, LICENSE header, releases v1.2.3 to v1.2.5 with asset lists, v1.2.5 release notes, commits, owner profile).
// Notes:
// - Stars: GitHub API 1102 on 2026-11-18 (owner's list said 1,083). Repo created 2026-07-26. Name on the website is "Rescript" (README title "rescript.").
// - License: PolyForm Noncommercial 1.0.0 (LICENSE file; GitHub API reports NOASSERTION). The maker calls the project "open source"; commercial use needs a paid licence (FAQ and README),
//   so PromptQuorum lists it as source-available. README: earlier releases published under MIT stay under MIT for those versions only.
// - Version: v1.2.5, published 2026-10-29. Last commit on main 2026-11-05 (merged pull request, Swedish localization; not yet in a release).
// - Install: README and website link desktop builds for macOS (Apple Silicon and Intel), Windows and Linux; v1.2.5 ships Rescript-mac-arm64.dmg and Rescript-mac-x64.dmg, Rescript-Setup.exe,
//   Rescript-linux.AppImage and Rescript-linux.deb. A browser version (app.getrescript.com) needs no install. README: macOS builds signed and notarized (maker statement, NOT checked);
//   Windows and Linux signing not stated. Desktop builds auto-update from GitHub Releases.
// - engine = 'builtin': Whisper Base/Small (transformers.js, ONNX, WebGPU with WASM fallback), pyannote-segmentation-3.0 and Pocket TTS (Regenerate, six languages) run inside the app;
//   models are downloaded once from Hugging Face. PromptQuorum did NOT run any of it.
// - locality 'local' is the maker's statement (privacy page: media, transcripts, voices and exports never leave the device); optional telemetry and crash reports, an optional email sign-up,
//   one-time model downloads and update checks do use the network. PromptQuorum did not inspect network traffic.
// - Price: free for noncommercial use; commercial use requires a paid licence; the maker says optional paid server features may come later.
// - HQ country: US. Terms of Use: "governed by the laws of the State of California, United States", exclusive jurisdiction of the state and federal courts in California; the privacy page says its
//   providers are US companies and data is stored in the United States; the owner's GitHub profile lists San Francisco. No company name or imprint was found (privacy and terms say "we"/"Rescript").
//   Set from the governing-law clause per the owner's standing HQ-flag rule (2026-11-15).
// - Categories: speech-to-text first, then subtitles-dubbing (SRT/VTT export, transcript-first editing).
// - Compare (speech-to-text segment): speakerLabels (pyannote diarization) and cpuUsable (WASM fallback, ffmpeg.wasm on CPU) are set from the README. languages, realtime and apiServer are not set:
//   the README gives no language count, transcription is file-based, and no API is documented.
// Last upstream update: 2026-11-05 (last commit on main, GitHub API 2026-11-18; latest release v1.2.5 on 2026-10-29) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rescript',
  name: 'Rescript',
  categories: ['speech-to-text', 'subtitles-dubbing'],
  interfaces: ['desktop', 'web'],
  locality: 'local', // maker statement: transcription, editing, voice cloning and export run on the device; optional telemetry, model downloads and update checks use the network
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Whisper', 'pyannote', 'FFmpeg', 'Hugging Face', 'DaVinci Resolve', 'Premiere Pro', 'Final Cut Pro', 'Blender'], // README: Whisper via transformers.js, pyannote segmentation, ffmpeg.wasm; NLE/DAW timeline export
  engine: 'builtin', // Whisper, speaker labelling and voice models run inside the app; models are fetched once from Hugging Face
  license: 'Source-available (PolyForm Noncommercial 1.0.0)', // LICENSE file; the maker calls it open source, commercial use needs a paid licence; GitHub API reports NOASSERTION
  price: 'free', // free for noncommercial use; commercial use requires a paid licence (FAQ); optional paid server features may come later (FAQ)
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // no memory minimum published; README: WebGPU with WASM fallback, export re-encodes on the CPU
  stars: 1102,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['audio'],
  url: 'getrescript.com',
  storeLinks: {
    github: 'https://github.com/wassgha/rescript',
    web: 'https://getrescript.com',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://www.getrescript.com/terms',
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v1.2.5 listed Rescript-mac-arm64.dmg and Rescript-mac-x64.dmg (macOS), Rescript-Setup.exe (Windows), and Rescript-linux.AppImage and Rescript-linux.deb (Linux). The README and the website link the same downloads, and a browser version at app.getrescript.com needs no install. The README says desktop builds auto-update from GitHub Releases.',
  tagline: {
    en: 'Source-available editor that cuts video and audio by deleting words in a Whisper transcript, with speaker labels and optional voice-cloned line fixes',
    de: 'Editor mit einsehbarem Quellcode, der Video und Audio durch Löschen von Wörtern in einem Whisper-Transkript schneidet, mit Sprecherlabels und optionalen Zeilenkorrekturen per Stimmklon',
    fr: 'Éditeur à code source disponible qui coupe la vidéo et l’audio en supprimant des mots d’une transcription Whisper, avec étiquettes de locuteurs et correction facultative de phrases à la voix clonée',
    ja: 'Whisperの文字起こしから単語を削除するだけで動画・音声をカットできるソース公開型エディター。話者ラベルと、声のクローンによる任意のセリフ修正に対応しています',
    zh: '源码可见的编辑器，在 Whisper 转写文本中删除词语即可剪辑视频和音频，带说话人标签和可选的克隆声音台词修正',
    es: 'Editor de código disponible que corta vídeo y audio al borrar palabras de una transcripción de Whisper, con etiquetas de hablantes y corrección opcional de frases con voz clonada',
    pt: 'Editor de código disponível que corta vídeo e áudio ao apagar palavras de uma transcrição do Whisper, com rótulos de falantes e correção opcional de falas com voz clonada',
    ar: 'محرّر متاح الشيفرة المصدرية يقصّ الفيديو والصوت بحذف كلمات من نص Whisper المفرَّغ، مع تمييز المتحدثين وتصحيح اختياري للجمل بصوت مستنسَخ',
    ko: 'Whisper 전사 텍스트에서 단어를 지우면 영상과 오디오가 잘리는 소스 공개형 편집기로, 화자 구분과 선택형 복제 음성 문장 수정을 지원합니다',
  },
  reviewSlug: 'rescript-review',
  pqReview: {
    date: '2026-11-18',
    version: '1.2.5',
    versionSourceUrl: 'https://github.com/wassgha/rescript/releases/tag/v1.2.5',
  },
  // Comparison attributes: each value verified against the project's README on 2026-11-18; a missing key = not stated there, never false.
  compare: { speakerLabels: true, cpuUsable: true }, // README: speaker diarization (pyannote-segmentation-3.0); Whisper runs via WebGPU with WASM fallback and ffmpeg.wasm re-encodes on the CPU
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-05', // last commit on main 2026-11-05T21:42Z (GitHub API 2026-11-18); latest release v1.2.5 published 2026-10-29
  lastUpstreamUpdateSource: 'https://github.com/wassgha/rescript (last commit 2026-11-05; latest release v1.2.5, 2026-10-29)',
}
