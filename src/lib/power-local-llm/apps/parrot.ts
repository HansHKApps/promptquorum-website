// Local AI App Directory — Parrot (rishiskhare/parrot)
// Added 2026-10-17. Facts verified via tryparrot.vercel.app, the github.com/rishiskhare/parrot README,
// the GitHub API (MIT, 162 stars, v26.2.4 release assets for macOS/Windows/Linux) on 2026-10-17.
// Fork of Handy (CJ Pais); ships the Kokoro-82M TTS model (~115 MB, CPU-only) and reads selected text aloud.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'parrot',
  name: 'Parrot',
  categories: ['text-to-speech'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // README: ~115 MB Kokoro-82M model, "any modern CPU with no GPU required"; no RAM figure published
  stars: 162,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['audio'],
  url: 'tryparrot.vercel.app',
  storeLinks: { github: 'https://github.com/rishiskhare/parrot', web: 'https://tryparrot.vercel.app/' },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v26.2.4 ships .dmg, .exe/.msi, .AppImage/.deb/.rpm (checked 2026-10-17); README sends users to the website download page',
  tagline: {
    en: 'Free offline text-to-speech that reads any selected text aloud at a keystroke',
    de: 'Kostenlose Offline-Sprachausgabe, die markierten Text per Tastenkürzel vorliest',
    fr: 'Synthèse vocale hors ligne gratuite qui lit à voix haute le texte sélectionné d\'un raccourci',
    ja: '選択したテキストをショートカットで読み上げる、無料のオフライン音声合成アプリ',
    zh: '免费离线文字转语音，选中文本后按快捷键即可朗读',
    es: 'Texto a voz sin conexión y gratuito que lee en voz alta el texto seleccionado con un atajo',
    pt: 'Texto para voz offline e gratuito que lê em voz alta o texto selecionado com um atalho',
    ar: 'تحويل نص إلى كلام مجاني دون اتصال يقرأ النص المحدد بصوت عالٍ باختصار لوحة المفاتيح',
    ko: '단축키 하나로 선택한 텍스트를 읽어 주는 무료 오프라인 음성 합성 앱',
  },
  reviewSlug: 'parrot-review', // dedicated PromptQuorum review
  pqReview: {
    date: '2026-10-18', // v26.2.4 = latest stable GitHub release on that date (published 2026-02-25); no newer tag
    version: '26.2.4',
    versionSourceUrl: 'https://github.com/rishiskhare/parrot/releases/latest',
  },
  // Comparison attributes: each value taken from the project's own README/site on 2026-10-18; a missing key = not stated there, never false.
  // languages: README says "Supports 9 languages" (it lists US and UK English separately); streaming: "audio starts playing before the full text has been synthesized"; cpuUsable: "runs on any modern CPU with no GPU required".
  compare: { languages: 9, streaming: true, cpuUsable: true },
  lastVerifiedDate: '2026-10-18',
  // Latest commit on main (merged PR #8); last release v26.2.4 is 2026-02-25. Branch pushes are not releases.
  lastUpstreamUpdate: '2026-04-28',
  lastUpstreamUpdateSource: 'https://github.com/rishiskhare/parrot/commits/main',
}
