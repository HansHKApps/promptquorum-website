// Local AI App Directory — Univocal: Mac app that reads text aloud and dictates, both on-device (layer: desktop app, text-to-speech + speech-to-text)
// Added 2026-11-13. Facts verified 2026-11-13 against univocalapp.com (home, /download -> Univocal-0.3.33.dmg, /downloading, /purchase, /changelog,
// /privacy, /alternatives, /guides/read-aloud-mac). The maker's pages were read as text; the disk image itself was not opened or inspected.
// Latest version 0.3.33, dated 2026-11-11 on the changelog (2 days old on 2026-11-13), so the 3-month stale warning is OFF.
// Local claim (home, privacy): "Nothing leaves the Mac", no account, no analytics, no crash reporting; dictation works offline after the first-run download.
// The first launch downloads about 1.2 GB (speech engine packages from pypi.org, models from huggingface.co, a standalone Python from github.com if the Mac has none);
// some read-aloud languages (Korean, German) fetch about 400 MB more. Licence checks go to Lemon Squeezy, the app checks univocalapp.com/updates/appcast.xml about once a day (Sparkle),
// issue reports are sent only when the user presses Send Report. On macOS 26, live typing also uses Apple's on-device SpeechAnalyzer for a draft.
// Models: only Kokoro (read-aloud voices) and Apple's SpeechAnalyzer/Apple voices are named. The dictation recogniser is NOT named (no Whisper or Parakeet mention).
// Prices (USD, /purchase): one-time $39, one licence covers up to 3 Macs, 14-day free trial (no card, no account), 30-day refund; launch code UVLAUNCH $19 and Black Friday code BF2026 $15, both until 30 November 2026.
// Platforms: Apple silicon Mac, macOS 14 or later; no Intel, Windows, iPhone or Android build (the site only offers a notify list). Open source: NOT stated, no repository found.
// Maker: "Univocal, a product of NarNar Labs LLC"; country, founder name and address not stated. Code signing / notarization not stated.
// Not checked: network traffic, accuracy, speed, voice quality, the DMG contents. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'univocal',
  name: 'Univocal',
  categories: ['text-to-speech', 'dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: both directions run on the Mac and nothing is sent anywhere; the network is used for first-run model downloads, licence checks, daily update checks and optional issue reports
  platforms: ['mac'], // Apple silicon only, macOS 14+; no Intel, Windows, iOS or Android build (home page: notify form only)
  worksWith: ['Kokoro', 'Obsidian'], // Kokoro voices (privacy page); Univocal Connect + Obsidian plugin (changelog 0.3.29); Chrome/Edge/Brave/Vivaldi/Arc read-aloud extension (privacy)
  engine: 'builtin', // runs its own local speech engine on 127.0.0.1:8787 (privacy page); the dictation model is not named by the maker
  license: 'Proprietary (no source repository found)', // no open-source statement or repo on any page read
  price: 'paid', // one-time $39 (launch/Black Friday codes until 2026-11-30), 14-day trial; no subscription
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // Apple silicon + macOS 14 required; no RAM figure stated; ~1.2 GB first-run download
  stars: null, // no public source repository
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['audio'],
  url: 'univocalapp.com',
  storeLinks: {
    web: 'https://univocalapp.com',
  },
  installEffort: 'installer',
  installEvidence: 'univocalapp.com/download served Univocal-0.3.33.dmg (disk image, about 6.3 MB) and /downloading names the same file, checked 2026-11-13; updates install from inside the app; models (~1.2 GB) download on first launch; DMG contents and signing not inspected',
  tagline: {
    en: 'Mac app that reads selected text aloud and types what you dictate, both on your own Apple silicon Mac, as a one-time purchase with no subscription',
    de: 'Mac-App, die markierten Text vorliest und Diktiertes tippt, beides auf Ihrem eigenen Apple-Silicon-Mac, als Einmalkauf ohne Abo',
    fr: 'Application Mac qui lit à voix haute le texte sélectionné et saisit ce que vous dictez, le tout sur votre Mac Apple silicon, en achat unique sans abonnement',
    ja: '選択したテキストの読み上げと音声入力の両方をお使いのApple siliconのMac上で行うMacアプリ。サブスクなしの買い切り',
    zh: '在你自己的 Apple 芯片 Mac 上朗读选中文字并输入听写内容的 Mac 应用，一次性购买，无需订阅',
    es: 'App para Mac que lee en voz alta el texto seleccionado y escribe lo que dictas, todo en tu propio Mac con Apple silicon, con pago único y sin suscripción',
    pt: 'App para Mac que lê em voz alta o texto selecionado e digita o que você dita, tudo no seu próprio Mac com Apple silicon, em compra única e sem assinatura',
    ar: 'تطبيق لنظام Mac يقرأ النص المحدد بصوت عالٍ ويكتب ما تمليه، كلاهما على جهاز Mac بمعالج Apple silicon الخاص بك، بشراء لمرة واحدة ودون اشتراك',
    ko: '선택한 텍스트를 소리 내어 읽어 주고 받아쓰기한 내용을 입력하는 Mac 앱으로, 둘 다 내 Apple silicon Mac에서 처리하며 구독 없이 한 번 결제합니다',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-13 (home: "32 Languages … read aloud and dictate in any of them"; changelog 0.3.17 "Dictation types as you speak"); a missing key = not stated, never false.
  compare: { languages: 32, realtime: true },
  reviewSlug: 'univocal-review',
  pqReview: {
    date: '2026-11-13',
    version: '0.3.33',
    versionSourceUrl: 'https://univocalapp.com/changelog/',
  },
  verdict: 'Best for Apple silicon Mac users who want one app for both reading text aloud and dictating, with speech processing that stays on their own Mac, and who accept a paid, closed-source app (one-time $39 after a 14-day trial); limited by no Intel, Windows or mobile version, an unnamed dictation model, a roughly 1.2 GB first-run download, and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-11-11', // maker changelog: version 0.3.33 dated 2026-11-11; read 2026-11-13
  lastUpstreamUpdateSource: 'https://univocalapp.com/changelog/',
}
