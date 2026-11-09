// Local AI App Directory — Sprich: German-made macOS dictation app (Apple Silicon) with on-device speech recognition (layer: desktop dictation app, speech-to-text)
// Added 2026-11-09. Facts verified 2026-11-09 against sprich.ai (home incl. its schema.org markup and pricing section, /download, /changelog, /about, /imprint,
// /privacy-policy (Stand 22 Oktober 2026), /vs/superwhisper). No GitHub repo or source link on any page read; licence is not stated -> treated as closed source, not asserted.
// Latest release v2.2.4 dated 2026-10-22 on /changelog and /download (.dmg, 18.2 MB, "macOS 15+", "Apple-Chip (M1 oder neuer)", "Auf Intel-Macs läuft Sprich nicht").
// So the 3-month stale warning is OFF (18 days since the last update).
// Local claim (home, privacy policy): macOS app processes audio on the Mac; home names Parakeet for transcription + a fine-tuned post-processing model, the privacy policy
// names "u. a. Whisper für Spracherkennung" plus a fine-tuned language model — the two pages are not reconciled; the review states both and asserts neither.
// Not local: the privacy policy also describes a Windows application ("Sprich Cloud") that streams dictation audio to the maker's server (Canary 1B v2, hosted in Finland, EU) —
// while the home page offers only a Windows waitlist; free-tier users' weekly/total word counts are sent to the server and tied to the account; models are downloaded via Cloudflare R2.
// Languages: product is "Optimiert für Deutsch" (dialects, Fachsprache, Denglisch); its own /vs/superwhisper page says "primär für Deutsch und Englisch optimiert";
// the home page's SoftwareApplication schema.org markup lists "57 Sprachen" and the free plan lists "Alle Apps · alle Sprachen" — the FAQ answer to "Welche Sprachen unterstützt Sprich?"
// is only revealed client-side and was not readable. The whole site and the app copy are German; no other UI language was found. Maker's languages number is not independently verified.
// Prices (EUR, home #preise): Free 0 € (2,000 words/week, 1 file, 3 meetings, 5 dictionary entries); Pro 8 €/month or 6 €/month billed yearly; Lifetime 150 € once ("Alle Updates der lokalen App").
// Maker: Victor Vollmann, Agricolastraße 55b, 80686 München (Impressum); about page: founded 2025 by three friends (Vollmann, Jakob Spetkamp, Leo Wiedemann). Not checked: network traffic, accuracy, speed.
// No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sprich',
  name: 'Sprich',
  categories: ['dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker's home page + privacy policy: the macOS app transcribes on the Mac; account sign-in, free-tier word counts, model downloads and optional statistics use the network (see header)
  platforms: ['mac'], // macOS 15+ on Apple Silicon only (/download: Intel Macs not supported); Windows/iOS/Android are waitlist-only on the home page
  worksWith: [],
  engine: 'builtin', // ships its own on-device models (Parakeet per home page, Whisper per privacy policy); downloaded inside the app
  license: 'Proprietary (closed source)', // no source repo or licence statement found; the site does not say "closed source" in words
  price: 'freemium', // Free 0 € (2,000 words/week) · Pro 8 €/month (6 € billed yearly) · Lifetime 150 € once
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // /download: Apple Silicon (M1 or newer) + macOS 15 or newer; no RAM figure stated
  stars: null, // no public repository found
  addedDate: '2026-11-09',
  status: 'listed',
  uses: ['audio'],
  url: 'sprich.ai',
  storeLinks: {
    web: 'https://www.sprich.ai',
  },
  installEffort: 'installer',
  installEvidence: 'sprich.ai/download checked 2026-11-09: "Version 2.2.4 · Apple Silicon · 18.2 MB · macOS 15+", ".dmg öffnen → Sprich in Programme ziehen → loslegen"; no terminal step; Intel Macs not supported',
  tagline: {
    en: 'German-made Mac dictation app that, per its maker, transcribes on your Apple Silicon Mac and types into any app; free tier, German-first, site in German only',
    de: 'Diktier-App aus Deutschland für den Mac, die laut Hersteller auf Ihrem Apple-Silicon-Mac transkribiert und in jede App schreibt; Gratis-Tarif, auf Deutsch ausgerichtet, Website nur auf Deutsch',
    fr: 'Application de dictée allemande pour Mac qui, selon son éditeur, transcrit sur votre Mac Apple Silicon et écrit dans n’importe quelle application ; offre gratuite, pensée d’abord pour l’allemand, site uniquement en allemand',
    ja: 'ドイツ製のMac用音声入力アプリ。開発元によればApple SiliconのMac上で文字起こしし、任意のアプリに入力します。無料プランあり、ドイツ語優先、サイトはドイツ語のみ',
    zh: '德国制造的 Mac 听写应用，据开发者称在你的 Apple Silicon Mac 上转写并输入到任意应用；有免费套餐，以德语为先，网站仅有德语版',
    es: 'App de dictado alemana para Mac que, según su desarrollador, transcribe en tu Mac con Apple Silicon y escribe en cualquier aplicación; plan gratuito, orientada primero al alemán, web solo en alemán',
    pt: 'App de ditado alemão para Mac que, segundo o desenvolvedor, transcreve no seu Mac com Apple Silicon e escreve em qualquer aplicativo; plano gratuito, voltado primeiro ao alemão, site só em alemão',
    ar: 'تطبيق إملاء ألماني الصنع لأجهزة Mac يُجري التحويل بحسب مطوّره على جهاز Mac بمعالج Apple Silicon ويكتب في أي تطبيق؛ خطة مجانية، يركّز أولًا على الألمانية، والموقع بالألمانية فقط',
    ko: '독일에서 만든 Mac용 받아쓰기 앱으로, 개발사에 따르면 Apple Silicon Mac에서 변환하여 어떤 앱에든 입력합니다. 무료 요금제, 독일어 우선, 웹사이트는 독일어만 제공',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-09. languages = "57 Sprachen" from the home page's own schema.org markup (not independently verified);
  // speakerLabels = meeting mode "erkennt nach dem Ende die einzelnen Sprecher" (changelog v2.2.0); a missing key = not stated, never false.
  compare: { languages: 57, speakerLabels: true },
  reviewSlug: 'sprich-review',
  pqReview: {
    date: '2026-11-09',
    version: '2.2.4',
    versionSourceUrl: 'https://www.sprich.ai/changelog',
  },
  verdict: 'Best for German-speaking Mac users on Apple Silicon who want push-to-talk dictation into any app, a free tier and a one-off Lifetime option, and who accept a German-only interface, a closed-source app and speech-model and Windows statements that the maker\'s own pages do not reconcile; limited by macOS 15 on Apple Silicon only, an unverified list of 57 languages and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-09',
  lastUpstreamUpdate: '2026-10-22', // sprich.ai/changelog + /download: v2.2.4 dated 2026-10-22; read 2026-11-09
  lastUpstreamUpdateSource: 'https://www.sprich.ai/changelog',
}
