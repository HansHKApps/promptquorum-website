// Local AI App Directory — Linguist (linguister.io): open-source translator extension for Chrome and Firefox with an opt-in offline translator (layer: browser extension, translation)
// Added 2026-11-13 at the owner's request. Facts verified 2026-11-13 against linguister.io (home, docs/guides/OfflineTranslation, docs/CustomTranslator),
// the GitHub API/README/LICENSE/package.json of translate-tools/linguist (1,084 stars, homepage linguister.io) and the Firefox Add-ons API listing.
// Latest release v7.1.0 (not a pre-release) published 2026-08-07T18:01:24Z; newest commit on the default branch 2026-09-04T14:59:55Z (GitHub API pushed_at 2026-09-08).
// Release assets: chrome.zip, chromium.zip, firefox.zip, firefox-standalone.zip, linguist.crx, linguist.xpi. The 3-month stale warning is OFF (70 days since 2026-09-04).
// Product name is "Linguist" (website domain linguister.io, the owner calls it Linguister); other tools share the name Linguist.
// Locality = hybrid: the built-in Bergamot offline translator (since 5.0) runs on the device when selected on the preferences page and works without a connection;
// local servers (LibreTranslate via Docker, Ollama) attach through custom translator modules. The v7.1.0 release notes say the DEFAULT translator is a free Google
// translator (Microsoft's stopped working) with automatic fallback, not enabled for Bergamot/custom users, so a fresh install sends text to Google; ChatGPT, DeepL,
// DeepSeek and Gemini are cloud options via custom modules.
// Telemetry: v7.1.0 release notes "Telemetry added ... does not collect any personal data or texts"; src/lib/telemetry sends event names, a random UID, browser language and
// user agent to events.vitonsky.net (RybbitTracker). Homepage/README still say it collects no user data (not reconciled); no off switch found in the notes, app not checked.
// Licence: LICENSE file = BSD-3-Clause (GitHub API), package.json + Firefox listing (7.0.5) = GPL-3.0 — unresolved, both recorded. Firefox listing showed 7.0.5 on 2026-11-13.
// No dedicated privacy-policy page found on the site. No hands-on testing; translation quality, offline language coverage and network traffic not checked.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'linguister',
  name: 'Linguist',
  categories: ['translation'],
  interfaces: ['plugin'],
  locality: 'hybrid', // opt-in Bergamot translates on the device and offline; the default is a free Google translator; local servers via custom modules; telemetry added in 7.1.0
  platforms: ['mac', 'win', 'linux'], // runs inside Chrome and Firefox on desktop; Android only through Firefox Nightly with a custom add-on collection (README), so not listed
  worksWith: ['Bergamot', 'LibreTranslate', 'Ollama', 'Chrome', 'Firefox'], // Bergamot built in; LibreTranslate and Ollama via custom translator modules (docs, website)
  engine: 'both', // built-in Bergamot offline translator plus external services through custom translator modules
  license: 'Open source (GPL-3.0 per package.json, BSD-3-Clause per LICENSE file)',
  price: 'free', // website: "free and open-source", donations requested; no paid plan found
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated for the extension; a local LibreTranslate server may use an NVIDIA GPU (guide)
  stars: 1084, // GitHub API read 2026-11-13
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['docs'],
  url: 'linguister.io',
  storeLinks: {
    github: 'https://github.com/translate-tools/linguist',
    web: 'https://linguister.io',
  },
  installEffort: 'hosted',
  installEvidence: 'Browser extension: linguister.io links the Chrome Web Store and Firefox Add-ons listings (Firefox API listing read 2026-11-13, version 7.0.5); GitHub Releases v7.1.0 (2026-08-07) ships chrome.zip, chromium.zip, firefox.zip, linguist.crx and linguist.xpi for manual install',
  tagline: {
    en: 'Free, open-source translator extension for Chrome and Firefox that translates pages, selected text and subtitles in the cloud by default and offline on your device with its built-in Bergamot translator',
    de: 'Kostenlose Open-Source-Übersetzer-Erweiterung für Chrome und Firefox, die Seiten, markierten Text und Untertitel standardmäßig in der Cloud und mit dem eingebauten Bergamot-Übersetzer offline auf dem Gerät übersetzt',
    fr: "Extension de traduction gratuite et open source pour Chrome et Firefox qui traduit pages, texte sélectionné et sous-titres dans le cloud par défaut, et hors ligne sur l'appareil avec son traducteur Bergamot intégré",
    ja: 'ChromeとFirefox向けの無料オープンソース翻訳拡張。ページ、選択テキスト、字幕を既定ではクラウドで、内蔵のBergamot翻訳を選べば端末上でオフライン翻訳します',
    zh: '适用于Chrome和Firefox的免费开源翻译扩展，默认在云端翻译网页、选中文本和字幕，选用内置的Bergamot翻译器后可在设备上离线翻译',
    es: 'Extensión de traducción gratuita y de código abierto para Chrome y Firefox que traduce páginas, texto seleccionado y subtítulos en la nube por defecto y sin conexión en el dispositivo con su traductor Bergamot integrado',
    pt: 'Extensão de tradução gratuita e de código aberto para Chrome e Firefox que traduz páginas, texto selecionado e legendas na nuvem por padrão e offline no dispositivo com o tradutor Bergamot integrado',
    ar: 'إضافة ترجمة مجانية ومفتوحة المصدر لـ Chrome وFirefox تترجم الصفحات والنص المحدد والترجمات المصاحبة في السحابة افتراضيًا ودون اتصال على جهازك عبر مترجم Bergamot المدمج',
    ko: 'Chrome·Firefox용 무료 오픈 소스 번역 확장으로, 페이지·선택 텍스트·자막을 기본적으로 클라우드에서 번역하고 내장 Bergamot 번역기를 쓰면 기기에서 오프라인으로 번역합니다',
  },
  // The translation segment has no comparison attributes yet (documents-research has none), so no `compare` block.
  reviewSlug: 'linguister-review',
  pqReview: {
    date: '2026-11-13',
    version: '7.1.0',
    versionSourceUrl: 'https://github.com/translate-tools/linguist/releases/latest',
  },
  verdict: 'Best for Chrome and Firefox users who read foreign-language sites and want a free, open-source translator where they choose between cloud services, the built-in Bergamot offline translator and a local server such as LibreTranslate or Ollama; limited by a Google translator as the default, telemetry added in 7.1.0 next to a site that says it collects no user data, disagreeing license files, no image translation, and offline quality and language coverage that PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-09-04', // GitHub: newer of release v7.1.0 (2026-08-07) and the newest commit on the default branch (2026-09-04T14:59:55Z); read 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/translate-tools/linguist',
}
