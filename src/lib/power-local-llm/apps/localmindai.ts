// Local AI App Directory — LocalMindAI (layer: mobile)
// Added 2026-10-24 at the operator's request (found via a SiliconShelf listing). No maker outreach — independent PromptQuorum entry.
// Not the same product as the `localmind` tile (LocalMind: Ollama & LM Studio, Android/iOS, MIT, by Abdul Momin Sakib).
// Facts verified 2026-10-24 against: the App Store listing id6822007135 (US/DE/JP/BR storefronts + iTunes lookup API: seller
// HIROTAKA SAKAIDA, version 1.1 released 2026-10-21, first release 2026-10-19, free, iOS/iPadOS 26.0+, 49.1 MB, no ratings yet),
// the developer site utsugumi-apps.web.app/localmind and the privacy policy at ninjya54.github.io/app-pages/localmindai/privacy.html
// (effective 2026-10-20). Closed source; no GitHub repository found.
// Last upstream update: 2026-10-21 (App Store version 1.1) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localmindai',
  name: 'LocalMindAI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // listing + policy: chat, memory, speech and text recognition run on the device; network only for model downloads (Hugging Face), version check (GitHub Pages) and ads (AdMob) until a tip is made
  platforms: ['ios'], // iPhone + iPad, iOS/iPadOS 26.0+; the listing also shows Mac (Apple M1+) and visionOS compatibility but marks it "Designed for iPhone and iPad" — only iOS claimed here
  worksWith: null,
  engine: 'builtin', // Apple's built-in on-device model plus downloadable open models (Qwen3.5, Gemma 4, LFM2.5, llm-jp per the listing); the runtime is not named in any public source
  license: 'Closed source',
  price: 'free', // free download, ad-supported; optional tips ($0.99 / $2.99 / $5.99 / $19.99 on the US storefront) switch ads off and unlock no features
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // listing: downloaded models need about 0.5–8 GB each; no RAM figure published
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['phone', 'chat', 'docs'],
  url: 'utsugumi-apps.web.app/localmind',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6822007135 (free, 49.1 MB, iOS/iPadOS 26.0+); no Android or desktop build and no GitHub repository found; checked 2026-10-24',
  tagline: {
    en: 'Free iPhone and iPad AI companion that chats, remembers and reads your documents on the device, with Apple\'s model or downloaded open models',
    de: 'Kostenloser KI-Begleiter für iPhone und iPad, der auf dem Gerät chattet, sich Dinge merkt und Ihre Dokumente liest – mit Apples Modell oder heruntergeladenen offenen Modellen',
    fr: 'Compagnon IA gratuit pour iPhone et iPad qui discute, mémorise et lit vos documents sur l\'appareil, avec le modèle d\'Apple ou des modèles ouverts téléchargés',
    ja: 'iPhone・iPad向けの無料AIコンパニオン。会話・記憶・資料の読み取りを端末内で行い、Appleのモデルまたはダウンロードしたオープンモデルを使用',
    zh: '免费的 iPhone/iPad AI 伙伴应用，在设备上聊天、记忆并读取你的文档，可使用苹果模型或下载的开源模型',
    es: 'Compañero de IA gratuito para iPhone y iPad que chatea, recuerda y lee tus documentos en el dispositivo, con el modelo de Apple o modelos abiertos descargados',
    pt: 'Companheiro de IA gratuito para iPhone e iPad que conversa, memoriza e lê seus documentos no aparelho, com o modelo da Apple ou modelos abertos baixados',
    ar: 'رفيق ذكاء اصطناعي مجاني لـ iPhone وiPad يدردش ويتذكر ويقرأ مستنداتك على الجهاز، بنموذج Apple أو نماذج مفتوحة منزّلة',
    ko: 'iPhone·iPad용 무료 AI 컴패니언 앱, 기기 안에서 대화하고 기억하며 문서를 읽고, Apple 모델 또는 내려받은 오픈 모델을 사용',
  },
  reviewSlug: 'localmindai-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.1',
    versionSourceUrl: 'https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135',
  },
  // Comparison attributes taken from the App Store description + developer site on 2026-10-24; a missing key = not stated there, never false.
  // importModels is not stated (only a curated list of downloadable models), so it stays unset.
  compare: { offline: true, modelDownloads: true, visionInput: true, voice: true }, // voice = on-device transcription of voice messages (input only; no spoken output stated)
  verdict: 'Best for iPhone users on iOS 26 who want a free, ad-supported companion chat that remembers and reads their documents on the device; a days-old release with no ratings, no named runtime and no source code, so its privacy and quality claims rest on the developer\'s own policy.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-21', // iTunes lookup API currentVersionReleaseDate for version 1.1, read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/localmindai-on-device-ai/id6822007135',
}
