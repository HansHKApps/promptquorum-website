// Local AI App Directory — FluidVoice: macOS dictation app with on-device speech recognition and optional local text cleanup (layer: desktop dictation app, speech-to-text)
// Added 2026-10-24. Facts verified 2026-10-24 against fluidvoice.com (altic.dev/fluid redirects there; home, FAQ, /fluid/privacy-policy "Last updated: July 5, 2026"),
// the GitHub repo altic-dev/FluidVoice (README, GPL-3.0 licence, GitHub API: Releases and default-branch commits) and the Releases page.
// Latest stable release v1.6.12 published 2026-10-22 (prereleases v1.6.12-beta.1 on 2026-10-13); newest default-branch commit 2026-10-24 ("fix(meeting): preserve summaries when renaming meetings (#1233)").
// Release assets seen on v1.6.12: Fluid-oss-1.6.12.dmg and Fluid-oss-1.6.12.zip. README: `brew install --cask fluidvoice`; macOS 15.0+, Apple Silicon for all models, Intel Macs via Whisper models.
// Windows and iPhone are "beta" per the website (iPhone via TestFlight invitation after a form; Windows download not verified); Linux and Android are waitlist-only. Platforms below list macOS only.
// License: GPLv3 from 2026-02-23 (earlier versions Apache 2.0). The "Fluid Intelligence" / Fluid-1 local cleanup runtime is "a separate, privately maintained" component per the README (not open source).
// Not the separate app "Fluid" (getfluid.app). fluidvoice.org is explicitly disclaimed by the project as not official. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'fluidvoice',
  name: 'FluidVoice',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // website + privacy policy: speech recognition and Fluid-1 text cleanup run on the Mac; optional cloud AI providers (OpenAI, Groq, custom) send text to the provider; model downloads, update checks and optional anonymous analytics use the network
  platforms: ['mac'],
  worksWith: ['Parakeet', 'Whisper', 'Nemotron', 'Cohere Transcribe', 'Apple Speech', 'OpenAI', 'Groq', 'Homebrew'],
  engine: 'builtin', // ships its own CoreML/Metal transcription pipeline (FluidAudio SDK) with downloadable speech models
  license: 'GPL-3.0', // app code GPLv3 since 2026-02-23; the Fluid Intelligence runtime is privately maintained
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; ~1 GB disk for a voice model, ~3.5 GB for the optional Fluid Intelligence model
  stars: 12436, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio'],
  url: 'fluidvoice.com',
  storeLinks: {
    github: 'https://github.com/altic-dev/FluidVoice',
    web: 'https://fluidvoice.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v1.6.12 (2026-10-22) checked 2026-10-24: Fluid-oss-1.6.12.dmg and Fluid-oss-1.6.12.zip assets; the website offers a "Download for Mac" button; README also documents `brew install --cask fluidvoice`',
  tagline: {
    en: 'Free, open-source Mac dictation app with on-device speech models and optional local text cleanup that pastes polished text into any app via a hotkey',
    de: 'Kostenlose, quelloffene Mac-Diktier-App mit Spracherkennung auf dem Gerät und optionaler lokaler Textbereinigung, die per Tastenkürzel aufgeräumten Text in jede App einfügt',
    fr: 'Application de dictée gratuite et open source pour Mac, avec reconnaissance vocale sur l’appareil et nettoyage de texte local facultatif, qui colle un texte soigné dans n’importe quelle application via un raccourci',
    ja: 'デバイス上の音声認識と、任意で使えるローカルのテキスト整形を備え、ホットキー操作で整った文章を任意のアプリに貼り付ける、無料のオープンソースMac用音声入力アプリ',
    zh: '免费开源的 Mac 听写应用，使用设备端语音模型和可选的本地文本润色，并通过快捷键将整理好的文字粘贴到任意应用',
    es: 'App de dictado gratuita y de código abierto para Mac, con reconocimiento de voz en el dispositivo y limpieza de texto local opcional, que pega texto pulido en cualquier aplicación con un atajo',
    pt: 'App de ditado gratuito e de código aberto para Mac, com reconhecimento de voz no dispositivo e limpeza de texto local opcional, que cola texto polido em qualquer aplicativo por um atalho',
    ar: 'تطبيق إملاء مجاني ومفتوح المصدر لنظام Mac بنماذج صوتية على الجهاز وتنقيح نصي محلي اختياري، يلصق نصًا مرتبًا في أي تطبيق باختصار لوحة المفاتيح',
    ko: '기기 내 음성 모델과 선택형 로컬 텍스트 정리를 갖추고 단축키 한 번으로 다듬어진 텍스트를 어떤 앱에든 붙여 넣는 무료 오픈소스 Mac 받아쓰기 앱',
  },
  reviewSlug: 'fluidvoice-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.6.12',
    versionSourceUrl: 'https://github.com/altic-dev/FluidVoice/releases/latest',
  },
  verdict: 'Best for Mac users who want a free, open-source hotkey dictation tool whose speech recognition runs on the device; limited by macOS 15 as the minimum, a Windows and iPhone version that is still in beta, a closed-source local cleanup model, and speed and accuracy claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // newest default-branch commit (GitHub API, read 2026-10-24); latest stable release v1.6.12 published 2026-10-22
  lastUpstreamUpdateSource: 'https://github.com/altic-dev/FluidVoice/commits/main',
}
