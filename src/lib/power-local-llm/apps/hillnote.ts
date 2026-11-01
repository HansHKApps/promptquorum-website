// Local AI App Directory — Hillnote (layer: notes workspace with local AI; macOS, Windows, iPhone/iPad, Android)
// Added 2026-11-01 on request. Facts verified 2026-11-01 against: hillnote.com/download (macOS/Windows -> GitHub Releases, iOS -> App Store,
// Android -> Google Play; the page title mentions Linux but no Linux download is offered), hillnote.com/pricing (Free $0, Plus $20/year,
// Pro $200/year; local AI "through Ollama and Apple Intelligence"; Plus/Pro bring your own API key), hillnote.com/privacy and /security,
// github.com/Rajathbail/hillnote (GitHub API: the repo holds only README.md, no LICENSE file, 6 stars, latest release v0.43.15 published
// 2026-10-30 with Hillnote-0.43.15-arm64.dmg, Hillnote-0.43.15-arm64-mac.zip and Hillnote-Setup-0.43.15.exe; the README still says
// "Currently: v0.40.9"), the iTunes lookup API (App Store id6754959344: v0.33.46 of 2026-10-29, first release 2026-06-16, free, iOS 16.0+,
// seller Rajath Bail; release notes: downloadable Gemma 3 / Qwen3 offline models on iOS 26+) and the Google Play listing
// (com.hilltask.mobile.android, updated 2026-10-29, v0.33.47).
// LOCALITY = hybrid: notes are plain Markdown files on the user's disk and local AI runs on-device, but premium models (Claude, GPT, Gemini)
// and optional sync (AWS) are cloud services. Not tested hands-on.
// LICENCE: none stated anywhere; the GitHub repository holds only a README and release binaries, so the source is not published there.
// Not found: minimum macOS/Windows version, Intel Mac or Linux build, localized store prices (the website quotes USD only).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hillnote',
  name: 'Hillnote',
  categories: ['notes-integrations'],
  interfaces: ['desktop', 'mobile'],
  locality: 'hybrid', // Markdown files on disk + local AI (Ollama, Apple Intelligence, iOS offline models); premium cloud models and optional AWS sync are separate (pricing page, privacy policy)
  platforms: ['mac', 'win', 'ios', 'ipados', 'android'], // download page + store listings; no Linux or Intel Mac build found
  worksWith: ['Ollama', 'Apple Intelligence', 'Claude', 'ChatGPT', 'Gemini', 'Cursor', 'Codex'],
  engine: 'both', // runs on-device models itself on iPhone (built-in + Gemma 3 / Qwen3) and uses an external Ollama on the desktop
  license: 'Not stated (closed source)', // no licence on the site or in the GitHub repo, which holds only a README and release binaries
  price: 'freemium', // Free $0; Plus $20/year; Pro $200/year (hillnote.com/pricing, USD)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; local models depend on the machine, iOS offers an "Check eligibility" test
  stars: null, // the GitHub repo holds no source; its star count is not a measure of the product
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'hillnote.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/hillnote/id6754959344',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.hilltask.mobile.android',
    web: 'https://hillnote.com',
    github: 'https://github.com/Rajathbail/hillnote',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.43.15 (2026-10-30) checked 2026-11-01: Hillnote-0.43.15-arm64.dmg, Hillnote-0.43.15-arm64-mac.zip, Hillnote-Setup-0.43.15.exe; App Store id6754959344 (free, iOS 16.0+, v0.33.46) and Google Play com.hilltask.mobile.android; double-click install, no terminal step',
  tagline: {
    en: 'Local-first Markdown notes workspace for Mac, Windows, iPhone and Android with on-device AI through Ollama and Apple Intelligence, optional cloud models and sync',
    de: 'Lokal-first-Notiz-Workspace in Markdown für Mac, Windows, iPhone und Android mit KI auf dem Gerät über Ollama und Apple Intelligence, optionalen Cloud-Modellen und Sync',
    fr: 'Espace de notes Markdown local d’abord pour Mac, Windows, iPhone et Android, avec IA sur l’appareil via Ollama et Apple Intelligence, modèles cloud et synchronisation en option',
    ja: 'Mac、Windows、iPhone、Android向けのローカルファーストなMarkdownノート環境。OllamaとApple Intelligenceによる端末内AI、任意のクラウドモデルと同期に対応',
    zh: '面向 Mac、Windows、iPhone 和 Android 的本地优先 Markdown 笔记工作区，通过 Ollama 和 Apple Intelligence 提供设备端 AI，云端模型与同步可选',
    es: 'Espacio de notas en Markdown con enfoque local para Mac, Windows, iPhone y Android, con IA en el dispositivo mediante Ollama y Apple Intelligence, y modelos en la nube y sincronización opcionales',
    pt: 'Espaço de notas em Markdown com foco local para Mac, Windows, iPhone e Android, com IA no aparelho via Ollama e Apple Intelligence, além de modelos na nuvem e sincronização opcionais',
    ar: 'مساحة عمل لملاحظات Markdown تحفظ البيانات محليًا أولًا لأجهزة Mac وWindows وiPhone وAndroid، مع ذكاء اصطناعي على الجهاز عبر Ollama وApple Intelligence ونماذج سحابية ومزامنة اختيارية',
    ko: 'Mac, Windows, iPhone, Android용 로컬 우선 Markdown 노트 작업 공간으로, Ollama와 Apple Intelligence를 통한 기기 내 AI와 선택형 클라우드 모델·동기화를 제공합니다',
  },
  // Comparison attributes (notes segment), read from hillnote.com/pricing and the App Store description on 2026-11-01: localLlm (Ollama,
  // Apple Intelligence, offline iOS models) and chatNotes ("Built-in chat reads your own files, edits them") are stated; semanticSearch is not — unset, never false.
  compare: { noteApp: 'Hillnote', localLlm: true, chatNotes: true },
  reviewSlug: 'hillnote-review',
  pqReview: {
    date: '2026-11-01',
    version: '0.43.15',
    versionSourceUrl: 'https://github.com/Rajathbail/hillnote/releases/tag/v0.43.15',
  },
  verdict: 'Best for note-takers who want plain Markdown files on their own disk with optional local AI and who accept that no licence is stated, the repository holds no source code and PromptQuorum did not test the app hands-on.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-10-30', // GitHub Releases v0.43.15 published 2026-10-30T19:02:39Z (App Store v0.33.46 and Google Play 2026-10-29), read 2026-11-01
  lastUpstreamUpdateSource: 'https://github.com/Rajathbail/hillnote/releases/tag/v0.43.15',
}
