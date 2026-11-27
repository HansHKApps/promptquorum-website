// Local AI App Directory — Weesper Transcribe: on-device audio/video file transcription for Mac (layer: stt, Voice, Speech & Multimodal)
// Added 2026-11-27. Separate product from Weesper Neon Flow (live dictation) by the same maker.
// Facts verified 2026-11-27 against weesperneonflow.ai/en/transcribe, weesperneonflow.ai/transcribe/privacy (last updated 2026-06-11),
// weesperneonflow.ai/en/legal and the App Store listing id6778776535 (iTunes lookup API + 9 storefronts):
// v1.2.3 released 2026-11-18, first release 2026-06-25, macOS 13.0+, 146.4 MB, seller Cyril Guilleminot, copyright "The Blue House",
// privacy label "Data Not Collected", no ratings shown yet. Stale warning OFF.
// Two in-app purchases, both named "Weesper Pro", not told apart on the listing: US $9.99 / $22.99; DE, FR, ES 11,99 / 24,99 EUR;
// JP JPY 1,500 / 3,500; BR R$ 29,90 / 59,90; KR KRW 17,000 / 39,000. The product page calls Pro a one-time lifetime purchase.
// Maker conflicts kept out of the tile: interface languages 27 (App Store) vs 13 (product page); Intel "Haswell, 2013 or later" vs "most Macs from 2014 onward".
// No source repository or licence text found. Not checked: app binary, network traffic, accuracy, speed. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'weesper-transcribe',
  name: 'Weesper Transcribe',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: transcription runs on the Mac with on-device Whisper models, files and transcripts are not uploaded; larger models are an optional download
  platforms: ['mac'], // macOS 13+, Apple silicon or Intel with AVX2
  worksWith: ['Whisper'],
  engine: 'builtin',
  license: 'Proprietary (closed source)', // no repository or licence text found
  price: 'freemium', // free: files up to 15 minutes, one at a time, plain text; Weesper Pro is an in-app purchase
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated
  stars: null, // no public repository
  addedDate: '2026-11-27',
  status: 'listed',
  uses: ['audio'],
  url: 'weesperneonflow.ai/en/transcribe',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id6778776535',
    web: 'https://weesperneonflow.ai/en/transcribe/',
  },
  installEffort: 'installer',
  installEvidence: 'Mac App Store listing id6778776535 checked 2026-11-27: standard store install, no terminal step; v1.2.3 released 2026-11-18, 146.4 MB, minimum macOS 13.0',
  hqCountry: 'FR',
  hqCountrySource: 'https://weesperneonflow.ai/en/legal/', // legal notice: THE BLUE HOUSE (SASU), 7 rue d'Arsonval, 75015 Paris
  tagline: {
    en: 'Mac app that turns audio and video files into transcripts and subtitles with Whisper running on your own computer',
    de: 'Mac-App, die Audio- und Videodateien mit lokal laufendem Whisper in Transkripte und Untertitel umwandelt',
    fr: 'Application Mac qui transforme des fichiers audio et vidéo en transcriptions et sous-titres avec Whisper exécuté sur votre ordinateur',
    ja: '音声・動画ファイルを、Mac上で動くWhisperで文字起こしや字幕に変換するアプリ',
    zh: '用在本机运行的 Whisper 将音频和视频文件转成文字稿与字幕的 Mac 应用',
    es: 'App para Mac que convierte archivos de audio y vídeo en transcripciones y subtítulos con Whisper ejecutándose en tu ordenador',
    pt: 'App para Mac que transforma arquivos de áudio e vídeo em transcrições e legendas com o Whisper rodando no seu computador',
    ar: 'تطبيق لأجهزة Mac يحوّل ملفات الصوت والفيديو إلى نصوص وترجمات باستخدام Whisper الذي يعمل على حاسوبك',
    ko: '내 컴퓨터에서 실행되는 Whisper로 오디오·동영상 파일을 전사문과 자막으로 바꾸는 Mac 앱',
  },
  // Comparison attributes from the product page on 2026-11-27: 57 languages; "Files, not live dictation"; local automation API (Pro, 127.0.0.1, off by default). A missing key = not stated, never false.
  compare: { languages: 57, realtime: false, apiServer: true },
  reviewSlug: 'weesper-transcribe-review',
  pqReview: {
    date: '2026-11-27',
    version: '1.2.3',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6778776535',
  },
  verdict: 'Best for Mac users who want to turn existing audio and video files into transcripts or subtitles on their own computer and can try it on files up to 15 minutes for free; limited by being Mac only and closed source, with longer files, batches, subtitle export, editing and search behind Pro, and no speaker labels stated.',
  lastVerifiedDate: '2026-11-27',
  lastUpstreamUpdate: '2026-11-18', // App Store currentVersionReleaseDate of v1.2.3, read 2026-11-27
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6778776535',
}
