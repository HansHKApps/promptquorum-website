// Local AI App Directory — Local AI: Offline Chat & Image by GeetMark (layer: mobile)
// Added 2026-10-09 at the operator's request.
// Verified on 2026-10-09 against: the Google Play listing (play.google.com/store/apps/details?id=com.geetmark.localai —
// "Local AI: Offline Chat & Image" by GeetMark, 5K+ downloads, released 2026-04-04, updated 2026-09-30, Android 8.0+, USK all ages,
// "Contains ads" label, Data safety: "No data collected" and "No data shared with third parties") and the developer website
// linked from the listing (localai.appsgm.com, "Local AI Hub", a model/prompt directory). The site's /apps and /download pages
// advertise a separate "Local AI Hub Android" app (v1.2.0, "open-source") via github.com/localai-hub/*, but those repositories
// return 404 and the site never links the Play app, so it is NOT treated as the same product and its open-source claim is not used.
// No source repository or license text found for the Play app. Version 26.10.11 read from the Play page's embedded app data
// (the same field returns TokForge's 1.3.6.1 on its own listing); it is not shown in the visible page text.
// Name collision: unrelated to LocalAI (mudler, local-ai.io) and to the Local AI Hub Android download on the same website.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'local-ai-geetmark',
  name: 'Local AI: Offline Chat & Image (GeetMark)',
  categories: ['general-chat-clients', 'image-generation'],
  interfaces: ['mobile'],
  locality: 'local', // listing: "Fully offline AI — no cloud, no tracking"; model downloads need a network
  platforms: ['android'],
  worksWith: ['Hugging Face', 'Civitai'], // developer policy page names Hugging Face and Civitai as model sources
  engine: 'builtin', // runs models inside the app; the inference engine is not named in the sources read
  license: 'Not stated', // no license text and no public source repository found
  price: 'free', // Play listing: EUR 0, carries a "Contains ads" label
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // Play: "RAM: 4GB+ recommended", 2–15 GB storage, best on Snapdragon 8 Gen 1 or newer, CPU/GPU fallback
  stars: null,
  addedDate: '2026-10-09',
  status: 'listed',
  uses: ['phone', 'chat', 'image', 'code'],
  url: 'localai.appsgm.com',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.geetmark.localai',
    web: 'https://localai.appsgm.com/',
  },
  tagline: {
    en: 'Free Android app for offline chat with 20+ models, Stable Diffusion images and 15 prompt toolkits',
    de: 'Kostenlose Android-App für Offline-Chat mit über 20 Modellen, Stable-Diffusion-Bildern und 15 Prompt-Toolkits',
    fr: "Application Android gratuite pour discuter hors ligne avec plus de 20 modèles, générer des images Stable Diffusion et utiliser 15 kits de prompts",
    ja: '20以上のモデルでのオフラインチャット、Stable Diffusion画像生成、15種類のプロンプトツールキットを備えた無料のAndroidアプリ',
    zh: '免费的Android应用,支持20多个模型的离线聊天、Stable Diffusion图像生成和15个提示词工具包',
    es: 'App gratuita de Android para chatear sin conexión con más de 20 modelos, imágenes Stable Diffusion y 15 kits de prompts',
    pt: 'App gratuito de Android para conversar offline com mais de 20 modelos, imagens Stable Diffusion e 15 kits de prompts',
    ar: 'تطبيق Android مجاني للدردشة دون اتصال مع أكثر من 20 نموذجًا وتوليد صور Stable Diffusion و15 حزمة أدوات للمطالبات',
    ko: '20개 이상의 모델로 오프라인 채팅, Stable Diffusion 이미지 생성, 15가지 프롬프트 툴킷을 제공하는 무료 Android 앱',
  },
  // Comparison attributes: each value taken from the Play description on 2026-10-09; a missing key = not stated, never false.
  // modelDownloads = in-app local LLM manager with background model downloads. Image-model import (.safetensors/LoRA) is for
  // Stable Diffusion, not chat models, so importModels stays unset; voice / vision input are not mentioned.
  compare: { offline: true, modelDownloads: true },
  lastVerifiedDate: '2026-10-09',
  reviewSlug: 'local-ai-geetmark-review',
  pqReview: {
    date: '2026-10-09',
    version: '26.10.11',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.geetmark.localai',
  },
  verdict: 'Best for Android users who want a free offline chat-and-image app with ready-made prompt toolkits and accept ads, an unstated license and unpublished source; limited by unverified performance, a small install base and a privacy policy that sits on a differently named product page.',
}
