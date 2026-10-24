// Local AI App Directory — Genva (category: image-generation; layer: mobile)
// Added 2026-10-24 at the owner's request (link: siliconshelf.app/apps/genva-ai-imagery-on-device/).
// Verified on 2026-10-24 against: the Apple iTunes lookup API (id 6795853918, US storefront) and the US App Store listing —
// "Genva - AI Imagery, On Device" by AppAxis Inc., version 1.0.0, released 2026-10-14, free with in-app purchases (3 free generations a day,
// then a yearly subscription or a one-time Lifetime purchase; prices are not shown on the listing and were not found), iPhone/iPad, iOS 17.0+,
// 37.5 MB, English only, age 4+, no ratings yet, App Privacy label "Data Not Collected".
// Listing text: text to image, image to image, upscale at 1024 or 2048, negative prompts, filters and styles, Apple Neural Engine,
// models downloaded once and then usable offline. The model names are not stated anywhere we could read.
// Developer site appaxis.ca is a generic software-agency page with no Genva page and no privacy-policy page (/privacy returns 404).
// No Google Play listing, no GitHub repository, no hands-on testing. Closed source.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'genva',
  name: 'Genva',
  categories: ['image-generation'],
  interfaces: ['mobile'],
  locality: 'local', // listing states generation runs on-device after a one-time model download; attributed, not tested
  platforms: ['ios'], // iPhone and iPad, iOS 17.0+; no Mac, Android or web version found
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium', // free download, 3 free generations a day; yearly subscription or one-time Lifetime purchase (prices not shown on the listing)
  hardware: null, // the listing names no RAM or device requirement beyond iOS 17.0; 37.5 MB download plus separate model downloads
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['image', 'phone'],
  url: 'appaxis.ca',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918',
  },
  installEffort: 'installer',
  installOn: ['ios'],
  installEvidence:
    'US App Store listing id6795853918 (read 2026-10-24): free download, iPhone/iPad, iOS 17.0+, 37.5 MB; the image models are downloaded separately inside the app after install.',
  tagline: {
    en: 'iPhone and iPad app that generates images on-device from a text prompt or a photo, with upscaling, after a one-time model download',
    de: 'iPhone- und iPad-App, die Bilder nach einmaligem Modell-Download direkt auf dem Gerät aus Text oder Foto erzeugt, inklusive Hochskalierung',
    fr: 'App iPhone et iPad qui génère des images sur l\'appareil à partir d\'un texte ou d\'une photo, avec upscaling, après un téléchargement unique du modèle',
    ja: 'モデルを一度ダウンロードすれば、テキストや写真からデバイス上で画像を生成し、アップスケールもできるiPhone・iPadアプリ',
    zh: '一次性下载模型后，可在设备上根据文字提示或照片生成图像并放大的 iPhone 和 iPad 应用',
    es: 'App para iPhone y iPad que genera imágenes en el dispositivo a partir de un texto o una foto, con ampliación, tras una descarga única del modelo',
    pt: 'App para iPhone e iPad que gera imagens no próprio aparelho a partir de um texto ou de uma foto, com upscale, após um download único do modelo',
    ar: 'تطبيق لـ iPhone وiPad يولّد الصور على الجهاز من وصف نصي أو صورة مع تكبيرها، بعد تنزيل النموذج مرة واحدة',
    ko: '모델을 한 번 내려받으면 텍스트나 사진으로 기기에서 직접 이미지를 생성하고 업스케일까지 하는 iPhone·iPad 앱',
  },
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-14', // App Store: version 1.0.0 released 2026-10-14 (iTunes lookup currentVersionReleaseDate), read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918',
  reviewSlug: 'genva-review',
  pqReview: {
    date: '2026-10-24',
    version: '1.0.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/genva-ai-imagery-on-device/id6795853918',
  },
  verdict:
    'Best for iPhone owners who want a free, offline-capable image generator with text-to-image, photo restyling and upscaling; limited by a brand-new 1.0.0 app with no ratings, unnamed models, unpublished subscription prices, an English-only interface and only 3 free generations a day',
}
