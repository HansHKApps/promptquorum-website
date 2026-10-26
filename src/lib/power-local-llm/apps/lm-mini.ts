// Local AI App Directory — LM Mini (layer: mobile / iPhone, iPad, Mac)
// Added 2026-10-24 on request (siliconshelf.app/apps/lm-mini). Verified on 2026-10-24 against: the App Store listing
// (apps.apple.com/us/app/lm-mini/id6751125309) and the iTunes lookup API for the US/DE/JP storefronts (developer "Sultan Haider",
// v1.10.4, current version released 2026-10-19, first release 2025-09-20, free with in-app purchases, iOS/iPadOS 16.0+, macOS 14.0+,
// visionOS 1.0+, watchOS 10.0+, English only, 181.5 MB), and the privacy policy neuro9.net/LMMini/privacy.html (last updated
// 2025-08-16 — it predates the first release and describes only a connection to a user's own LM Studio server).
// LOCALITY = hybrid: the listing names three modes — on-device models that run offline, a connection to the user's own computer
// (LM Studio, Ollama, Jan AI, oMLX over Wi-Fi or USB), and "LM Mini Connect" remote access — plus optional cloud APIs (OpenAI,
// OpenRouter, Mistral, DeepSeek, Google Gemini) and optional encrypted cloud backups. Not tested hands-on; the siliconshelf.app
// "on-device / offline" tags are keyword-detected and the page itself says "not tested by us".
// No public source repository and no developer website were found (the listing has no website link; neuro9.net/ serves
// "Under Maintainance!" and only /LMMini/privacy.html is public), so the licence is recorded as closed source and `url` is the
// App Store listing. The on-device model runtime and the models offered are NOT named in the listing.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lm-mini',
  name: 'LM Mini',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'hybrid', // on-device models + your own LM Studio/Ollama/Jan/oMLX server + LM Mini Connect remote access + optional cloud APIs, per the App Store description
  platforms: ['ios', 'ipados', 'mac'], // iPhone and iPad (iOS 16+); listed for Mac (macOS 14+), Apple Watch and Vision too — the listing does not say whether the Mac build is native or the iPad app
  worksWith: ['LM Studio', 'Ollama', 'Jan', 'oMLX', 'ComfyUI', 'Automatic1111', 'SearXNG', 'OpenAI', 'OpenRouter', 'Mistral', 'DeepSeek', 'Google Gemini'],
  engine: 'both', // downloads and runs models on the phone itself AND connects to external servers; the on-device runtime is not named
  license: 'Closed source', // no public source repository found; the listing states only the Apple standard EULA
  price: 'freemium', // free download; in-app purchases (US storefront: $4.99 monthly, $29.99 yearly, $119.99 lifetime)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // on-device: "enough free storage and memory for the model you pick"; connected: the server's hardware
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'apps.apple.com/us/app/lm-mini/id6751125309', // no official website exists; the App Store listing is the only official channel
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/lm-mini/id6751125309',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6751125309 (free download, iOS/iPadOS 16.0+, macOS 14.0+, v1.10.4 released 2026-10-19; connected mode needs LM Studio/Ollama/Jan/oMLX on a computer), read 2026-10-24',
  tagline: {
    en: 'iPhone and iPad chat app that runs models on the device, connects to your own LM Studio or Ollama server, or reaches it remotely',
    de: 'Chat-App für iPhone und iPad, die Modelle auf dem Gerät ausführt, sich mit Ihrem eigenen LM-Studio- oder Ollama-Server verbindet oder ihn aus der Ferne erreicht',
    fr: 'Appli de chat pour iPhone et iPad qui exécute des modèles sur l’appareil, se connecte à votre propre serveur LM Studio ou Ollama, ou l’atteint à distance',
    ja: 'iPhone・iPad向けチャットアプリ。端末上でモデルを実行するほか、自分のLM StudioやOllamaサーバーへの接続やリモート接続にも対応',
    zh: '适用于 iPhone 和 iPad 的聊天应用：可在设备上运行模型，也可连接自己的 LM Studio 或 Ollama 服务器，或远程访问',
    es: 'App de chat para iPhone y iPad que ejecuta modelos en el dispositivo, se conecta a tu propio servidor LM Studio u Ollama o accede a él de forma remota',
    pt: 'App de chat para iPhone e iPad que executa modelos no aparelho, conecta ao seu próprio servidor LM Studio ou Ollama ou o acessa remotamente',
    ar: 'تطبيق دردشة لـ iPhone وiPad يشغّل النماذج على الجهاز، أو يتصل بخادم LM Studio أو Ollama الخاص بك، أو يصل إليه عن بُعد',
    ko: 'iPhone·iPad용 채팅 앱. 기기에서 모델을 실행하거나, 직접 운영하는 LM Studio·Ollama 서버에 연결하거나 원격으로 접속',
  },
  // Comparison attributes (mobile-chat segment), read from the App Store description on 2026-10-24: offline (on-device models "with no
  // internet"), modelDownloads ("Download and run on-device models") and voice (Kokoro voice chat) are stated. importModels and
  // visionInput are not stated — left unset, never false.
  compare: { offline: true, modelDownloads: true, voice: true },
  mcpSupport: true, // "MCP tool calling" is listed in the App Store feature list; not tested
  reviewSlug: 'lm-mini-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.10.4',
    versionSourceUrl: 'https://apps.apple.com/us/app/lm-mini/id6751125309',
  },
  verdict: 'Worth a look for iPhone and iPad users who already run LM Studio, Ollama or Jan at home and want one app for that and for on-device chat, if they accept a closed-source app whose privacy policy predates its current features.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-19', // iTunes lookup currentVersionReleaseDate 2026-10-19T16:32:12Z (v1.10.4)
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/lm-mini/id6751125309',
}
