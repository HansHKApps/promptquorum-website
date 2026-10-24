// Local AI App Directory — On-Device AI Translator (category: personal-assistants; layer: mobile)
// Added 2026-10-24 at the owner's request, from the SiliconShelf entry siliconshelf.app/apps/on-device-ai-translator/. SiliconShelf is only the pointer:
// every fact below was re-read on 2026-10-24 from primary sources, not taken from that page.
//   - App Store listing id6759458075 (US title "On-Device AI Translator", subtitle "On-device LLM Translation"; iTunes lookup: v1.2, current version released
//     2026-10-19, first release 2026-03-01, free, iOS 18.4+, 109 MB, 4+, genres Reference/Utilities, store languages EN + ZH, bundle com.localtranslate.app,
//     3.0 from 2 US ratings). The AT/DE/JP/KR/BR storefronts all title it "本地 AI 翻译" and show it free. In-app purchases (Lifetime; Pro monthly/yearly with a
//     3-day trial) are named in the description but NO price is shown anywhere we could read. Version history: 1.0 on 28 Feb/1 Mar 2026, 1.1 on 18 Sep 2026, 1.2 on 19 Oct 2026.
//   - Developer site on-device-ai-application.github.io/translator-site/ (a "Local AI Translate – Support" page, GitHub Pages) and its privacy policy
//     (effective 1 January 2025; names only "Local AI Translate"; says llama.cpp inference, no analytics, text never leaves the device, model downloads only).
//     The GitHub org On-Device-AI-Application holds only website repos (no app source, no licence) -> licence recorded as closed source.
//   - The app name differs by place: "On-Device AI Translator" (US App Store), "AI Translator" (description), "Local AI Translate" (developer site and policy), "本地 AI 翻译" (other storefronts).
// No hands-on testing. Not a general chat client: it only translates (plus voice conversations as of 1.2), hence personal-assistants, like Local AI Mail.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'on-device-ai-translator',
  name: 'On-Device AI Translator',
  categories: ['personal-assistants'],
  interfaces: ['mobile'],
  locality: 'local', // translation with a downloaded model makes no network requests per listing and policy; model downloads and optional update checks use the network
  platforms: ['ios'], // iPhone/iPad, iOS 18.4+; the listing also shows Apple-silicon Macs "not verified for macOS" — no native desktop build
  worksWith: ['llama.cpp', 'Apple Translation', 'Tencent Hy-MT2', 'TranslateGemma', 'Qwen'], // models named in the listing; llama.cpp named in the privacy policy
  engine: 'builtin',
  license: 'Closed source', // no app source repository; the developer's GitHub org only hosts its websites
  price: 'freemium', // free download; Lifetime and Pro (monthly/yearly, 3-day trial) in-app purchases, prices not shown in the sources read
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM figure stated; the listing says to pick a model to match the device's memory
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'on-device-ai-application.github.io/translator-site', // the developer's support page (also hosts the privacy policy); no separate product site exists
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/on-device-ai-translator/id6759458075',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6759458075 (free, iOS 18.4+, 109 MB), standard App Store install, no terminal step; iTunes lookup and listing read 2026-10-24',
  tagline: {
    en: 'iPhone translator that runs Tencent Hy-MT2, TranslateGemma and Qwen models on the device, covers 20 languages and can replace the system translate sheet',
    de: 'iPhone-Übersetzer, der Tencent Hy-MT2, TranslateGemma und Qwen auf dem Gerät ausführt, 20 Sprachen abdeckt und das System-Übersetzungsmenü ersetzen kann',
    fr: "Traducteur pour iPhone qui exécute Tencent Hy-MT2, TranslateGemma et Qwen sur l'appareil, couvre 20 langues et peut remplacer la fenêtre de traduction du système",
    ja: 'Tencent Hy-MT2・TranslateGemma・Qwenを端末内で実行し、20言語に対応、システムの翻訳シートも置き換えられるiPhone用翻訳アプリ',
    zh: '在设备上运行腾讯 Hy-MT2、TranslateGemma 和 Qwen 模型的 iPhone 翻译应用，支持 20 种语言，可替代系统翻译面板',
    es: 'Traductor para iPhone que ejecuta Tencent Hy-MT2, TranslateGemma y Qwen en el dispositivo, cubre 20 idiomas y puede sustituir la hoja de traducción del sistema',
    pt: 'Tradutor para iPhone que executa Tencent Hy-MT2, TranslateGemma e Qwen no aparelho, cobre 20 idiomas e pode substituir a janela de tradução do sistema',
    ar: 'مترجم لـ iPhone يشغّل نماذج Tencent Hy-MT2 وTranslateGemma وQwen على الجهاز ويدعم 20 لغة ويمكنه استبدال لوحة الترجمة في النظام',
    ko: 'Tencent Hy-MT2, TranslateGemma, Qwen 모델을 기기에서 실행하고 20개 언어를 지원하며 시스템 번역 시트를 대체할 수 있는 iPhone 번역 앱',
  },
  // Each value read from the App Store description and release notes on 2026-10-24; a missing key = not stated, never false.
  // localLlm = on-device LLMs do the translation; voice = two-way voice conversations and continuous listening (1.2 release notes).
  // memory and toolUse stay unset: neither is described.
  compare: { localLlm: true, voice: true },
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-19', // App Store currentVersionReleaseDate of 1.2 (iTunes lookup, read 2026-10-24)
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/on-device-ai-translator/id6759458075',
  reviewSlug: 'on-device-ai-translator-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.2',
    versionSourceUrl: 'https://apps.apple.com/us/app/on-device-ai-translator/id6759458075',
  },
  verdict: 'Best for iPhone users on iOS 18.4 or later who want text translated by downloadable on-device models (Hy-MT2, TranslateGemma, Qwen) instead of a cloud service, with 20 languages and a free Apple-translation fallback; limited by being closed source and young (2 App Store ratings), by a privacy policy dated before the app existed, and by unpublished prices for the Lifetime and Pro purchases that unlock the larger models.',
}
