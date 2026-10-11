// Local AI App Directory — Local AI Mail: On-Device Email (category: personal-assistants; layer: mobile)
// Added 2026-10-11 at the operator's request, as a very early listing with zero downloads.
// Verified on 2026-10-11 against: the Google Play listing (play.google.com/store/apps/details?id=jp.coffeebozu.mailerai —
// "Local AI Mail: On-Device Email", developer display name コーヒー坊主 / CoffeeBozu, Yokohama; "0+" downloads; updated 2026-10-10;
// v1.0.2 release notes; USK 16+; Data safety "No data collected" / "No data shared with third parties"; price EUR 12.99 on the
// German storefront with a "100% off" offer shown as ending 2026-10-18) and the bilingual privacy policy it links
// (co-hi-boy.blogspot.com, the developer's personal Blogspot blog, dated 2026-09-27: IMAP/SMTP only to the user's own server,
// RECORD_AUDIO for voice prompts via Android system speech recognition, READ_CONTACTS for address autocompletion, on-device AI on
// GPU/NPU, optional Gemini API with the user's own key sent directly to Google, no advertising or tracking SDKs).
// No product website, no source repository and no license text found; web search for the app name returned nothing.
// The model(s) and inference engine are not named in any source read. Version 1.0.2 is from the Play "What's new" text.
// Name variants: the Play title is "Local AI Mail: On-Device Email"; the Japanese privacy policy calls it "LocalMail".

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'local-ai-mail',
  name: 'Local AI Mail',
  categories: ['personal-assistants'],
  interfaces: ['mobile'],
  locality: 'hybrid', // on-device LLM by default; optional cloud AI through the user's own Gemini API key
  platforms: ['android'],
  worksWith: ['IMAP/SMTP', 'Gmail', 'Outlook', 'Yahoo Mail', 'Google Gemini API (cloud, user key)'],
  engine: 'builtin', // runs its own on-device inference (GPU/Vulkan); the engine and model are not named in the sources read
  license: 'Not stated', // no repository or license text found
  price: 'paid', // Play price EUR 12.99; a 100% off offer was running on 2026-10-11, shown as ending 2026-10-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // listing mentions GPU/Vulkan acceleration; no RAM or device requirement stated
  stars: null, // no public repository
  addedDate: '2026-10-11',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: null, // no product website; the developer's personal blog only hosts the privacy policy
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai',
  },
  installEffort: 'installer',
  installEvidence:
    'Google Play listing jp.coffeebozu.mailerai checked 2026-10-11: standard Play install, no terminal step; 0+ downloads, v1.0.2 updated 2026-10-10.',
  tagline: {
    en: 'Very early Android email client that summarizes, translates and drafts replies with an on-device AI, with optional Gemini cloud AI on your own key',
    de: 'Sehr frühe Android-E-Mail-App, die Mails mit einer KI auf dem Gerät zusammenfasst, übersetzt und Antworten entwirft, optional mit Gemini-Cloud-KI über den eigenen Schlüssel',
    fr: "Client e-mail Android très récent qui résume, traduit et rédige des réponses avec une IA sur l'appareil, avec IA cloud Gemini en option via votre propre clé",
    ja: '端末内AIでメールの要約・翻訳・返信下書きを行う、公開直後のAndroidメールアプリ。自分のキーでGeminiクラウドAIも任意で利用可能',
    zh: '刚刚上线的Android邮件客户端，用设备端AI总结、翻译邮件并起草回复，可选用自己的密钥接入Gemini云端AI',
    es: 'Cliente de correo para Android muy reciente que resume, traduce y redacta respuestas con una IA en el dispositivo, con IA en la nube de Gemini opcional con tu propia clave',
    pt: 'Cliente de e-mail para Android muito recente que resume, traduz e redige respostas com uma IA no aparelho, com IA na nuvem do Gemini opcional com sua própria chave',
    ar: 'تطبيق بريد إلكتروني لنظام Android في مرحلة مبكرة جدًا يلخّص الرسائل ويترجمها ويصيغ الردود بذكاء اصطناعي على الجهاز، مع ذكاء Gemini السحابي اختياريًا بمفتاحك الخاص',
    ko: '기기 내 AI로 메일을 요약·번역하고 답장 초안을 작성하는 출시 초기 Android 메일 앱. 본인 키로 Gemini 클라우드 AI를 선택적으로 사용할 수 있음',
  },
  // Each value taken from the Play description on 2026-10-11; a missing key = not stated there, never false.
  // localLlm = on-device LLM; voice = voice-dictated prompts. memory and toolUse stay unset: neither is described.
  compare: { localLlm: true, voice: true },
  lastVerifiedDate: '2026-10-11',
  reviewSlug: 'local-ai-mail-review',
  pqReview: {
    date: '2026-10-11',
    version: '1.0.2',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=jp.coffeebozu.mailerai',
  },
  verdict:
    'Best for Android users curious about an email client with an on-device AI who accept a brand-new, unproven app by a solo developer; limited by 0+ downloads, unnamed model and engine, no published source code, and a paid price once the launch offer ends',
}
