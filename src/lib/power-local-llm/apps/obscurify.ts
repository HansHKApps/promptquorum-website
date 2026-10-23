// Local AI App Directory — Obscurify (categories: general-chat-clients; layers: web + mobile)
// Added 2026-10-23 at the operator's request. No maker outreach — this is an independent PromptQuorum entry.
// Verified on 2026-10-23 against: the official website obscurify.ai (home, /about, /pricing, /privacy, /blog, /tutorials),
// the GitHub organisation github.com/Obscurify-ai (web_client: GPL-3.0, created 2026-10-21, last push 2026-10-21, 0 stars, no
// releases; obscurify-android: GPL-3.0, created 2026-10-21, releases v0.4.0 and v0.4.1 on 2026-10-21 with asset obscurify-0.4.1.apk).
// Product facts as the site states them: anonymous AI chat ("your VPN for AI") with 200+ models behind one account number (no email,
// phone or password); plans Guest (free, up to 30 messages an hour, one open model), Pay As You Go ($0/mo, prepaid balance),
// Casual ($20/mo, $15 usage included), Pro ($45/mo, $35 usage included, OpenAI-compatible API, uncensored models); payments by
// blind vouchers (Monero, Bitcoin, Lightning via the operator's own BTCPay server, or card via Stripe); optional local mode that
// runs GGUF models in the browser (llama.cpp compiled to WebAssembly, BrowserAgentKit, Apache-2.0); Tor hidden service.
// Privacy policy last updated 2026-10-22: chat prompts and replies are not saved on the servers, IP address and user agent kept 30 days,
// providers OpenRouter (zero-data-retention routes) and NanoGPT. The operator entity, address and jurisdiction are not stated anywhere
// on the site. The model catalog page (/model_cards) renders client-side and was not readable, so no local model list is stated.
// There is no App Store or Google Play listing; the Android app is a sideloaded APK from GitHub Releases. Prices are USD only.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'obscurify',
  name: 'Obscurify',
  categories: ['general-chat-clients'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid', // default is cloud models via the operator's servers; optional local mode runs GGUF models in the browser
  platforms: ['web', 'android'], // website (any browser, plus a Tor hidden service); Android APK from GitHub Releases
  worksWith: ['OpenRouter', 'NanoGPT', 'llama.cpp'], // privacy policy names the two providers; local mode uses llama.cpp compiled to WebAssembly
  engine: 'builtin', // cloud routing is the operator's own; local mode ships its own in-browser engine
  license: 'GPL-3.0 (clients); server not published', // web client and Android app are GPL-3.0; no server repository found
  price: 'freemium', // free guest chat; Pay As You Go prepaid balance; Casual $20/mo; Pro $45/mo
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // only local mode uses the device; depends on the model loaded
  stars: 0, // github.com/Obscurify-ai/web_client, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['chat'],
  url: 'obscurify.ai',
  storeLinks: {
    github: 'https://github.com/Obscurify-ai',
    web: 'https://obscurify.ai',
  },
  installEffort: 'hosted',
  installOn: ['web'],
  installEvidence:
    'obscurify.ai opens in the browser with guest chat and no sign-up (home and /pricing, read 2026-10-23); the Android app is a separate APK (obscurify-0.4.1.apk on GitHub Releases) that has to be sideloaded — no Google Play listing was found.',
  tagline: {
    en: 'Anonymous AI chat in the browser and on Android: 200+ cloud models behind a random account number, paid with unlinkable vouchers, plus an optional mode that runs GGUF models locally',
    de: 'Anonymer KI-Chat im Browser und auf Android: über 200 Cloud-Modelle hinter einer zufälligen Kontonummer, bezahlt mit nicht verknüpfbaren Gutscheinen, dazu ein optionaler Modus für lokale GGUF-Modelle',
    fr: 'Chat IA anonyme dans le navigateur et sur Android : plus de 200 modèles cloud derrière un numéro de compte aléatoire, payés par bons non traçables, avec un mode optionnel exécutant des modèles GGUF en local',
    ja: 'ブラウザとAndroidで使える匿名AIチャット。ランダムなアカウント番号の裏で200以上のクラウドモデルを利用でき、追跡できないバウチャーで支払い。GGUFモデルをローカル実行する任意モードも搭載',
    zh: '浏览器和 Android 上的匿名 AI 聊天：随机账号背后提供 200 多个云端模型，用无法关联的代金券付款，另有可选的本地 GGUF 模型模式',
    es: 'Chat de IA anónimo en el navegador y en Android: más de 200 modelos en la nube tras un número de cuenta aleatorio, pagados con vales no vinculables, y un modo opcional que ejecuta modelos GGUF en local',
    pt: 'Chat de IA anônimo no navegador e no Android: mais de 200 modelos na nuvem atrás de um número de conta aleatório, pagos com vouchers não vinculáveis, mais um modo opcional que roda modelos GGUF localmente',
    ar: 'دردشة ذكاء اصطناعي مجهولة الهوية في المتصفح وعلى Android: أكثر من 200 نموذج سحابي خلف رقم حساب عشوائي، ويُدفع ثمنها بقسائم لا يمكن ربطها بالدافع، مع وضع اختياري لتشغيل نماذج GGUF محليًا',
    ko: '브라우저와 Android에서 쓰는 익명 AI 채팅: 무작위 계정 번호 뒤에서 200개 이상의 클라우드 모델을 제공하고 연결할 수 없는 바우처로 결제하며, GGUF 모델을 로컬로 실행하는 선택 모드도 지원',
  },
  // Each value taken from the Android README (image attachments) on 2026-10-23; a missing key = not stated, never false.
  compare: { visionInput: true },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-21', // GitHub Releases: obscurify-android v0.4.1 published 2026-10-21 (web_client last push the same day), read 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/Obscurify-ai/obscurify-android/releases/tag/v0.4.1',
  reviewSlug: 'obscurify-review',
  pqReview: {
    date: '2026-10-23',
    version: '0.4.1', // Android app version; the website and web client carry no version number
    versionSourceUrl: 'https://github.com/Obscurify-ai/obscurify-android/releases/tag/v0.4.1',
  },
  verdict:
    'Best for people who want to use cloud AI models without an email, phone number or identity and can accept a service whose operator is not named and whose "no logs" claim still includes 30-day IP retention; limited by paid plans for frontier and uncensored models, a brand-new public codebase, and an Android app that has to be sideloaded',
}
