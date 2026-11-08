// Real hardware photos for the banners. Every file is freely licensed (CC0 or CC BY) from Wikimedia Commons, never a retailer or
// vendor press image. CC BY requires the credit line (author, licence, link to the source); the banner shows it under the photo.
// Files were resized to 960x720 and cropped to 4:3 (the credit says so). Offers without a photo (vpn, software, smart-hub) use the
// large category symbol instead. Add a photo: put a licensed WebP in public/images/aff-banner/<offer-id>.webp and an entry here.
import type { OfferId } from './copy'

export interface BannerImage {
  src: string
  /** Neutral description of what the photo shows (alt text, English; the photo carries no text we translate). */
  alt: string
  author: string
  license: 'CC0' | 'CC BY 3.0' | 'CC BY 4.0'
  /** Commons file page (source link). */
  page: string
}

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`

export const BANNER_IMAGES: Partial<Record<OfferId, BannerImage>> = {
  'gpu-24gb': { src: '/images/aff-banner/gpu-24gb.webp', alt: 'NVIDIA GeForce RTX 4090 Founders Edition graphics card', author: 'ZMASLO', license: 'CC BY 3.0', page: f('NVIDIA_RTX_4090_Founders_Edition_-_Verpackung_(ZMASLO)_(cropped).png') },
  'gpu-budget': { src: '/images/aff-banner/gpu-budget.webp', alt: 'XFX Radeon RX 6750 XT graphics card with three fans', author: 'VladoKosto', license: 'CC BY 4.0', page: f('XFX_Radeon_RX_6750_XT.jpg') },
  'mini-pc': { src: '/images/aff-banner/mini-pc.webp', alt: 'Minisforum mini PC seen from above', author: 'Goovaeh8fot6yugh', license: 'CC0', page: f('Minisforum_N40_Mini_PC_from_above.jpg') },
  mac: { src: '/images/aff-banner/mac.webp', alt: 'Apple Mac mini (M4, 2024)', author: 'Seasider53', license: 'CC BY 4.0', page: f('Mac_mini_2024_M4.jpg') },
  laptop: { src: '/images/aff-banner/laptop.webp', alt: 'Gaming laptop with a red backlit keyboard', author: 'PantheraLeo1359531', license: 'CC BY 4.0', page: f('MSI_Thin_GF63_12UC-667_HOF2290_RAW-Export.png') },
  nas: { src: '/images/aff-banner/nas.webp', alt: 'Synology two-bay NAS', author: 'Piotr Doroszewski', license: 'CC BY 4.0', page: f('Synology_DS213%2B.jpg') },
  sbc: { src: '/images/aff-banner/sbc.webp', alt: 'Raspberry Pi 5 single-board computer', author: 'SimonWaldherr', license: 'CC BY 4.0', page: f('Raspberry_Pi_5.jpg') },
  monitor: { src: '/images/aff-banner/monitor.webp', alt: '27-inch computer monitor on a desk', author: 'Hayden Schiff', license: 'CC BY 4.0', page: f('ASUS_PB278Q_(PXL_20250914_223256075).jpg') },
  'solar-kit': { src: '/images/aff-banner/solar-kit.webp', alt: 'Solar panels mounted on the balconies of an apartment building', author: 'Nikolai Twin', license: 'CC BY 4.0', page: f('Balkonkraftwerk2.jpg') },
  'cloud-gpu': { src: '/images/aff-banner/cloud-gpu.webp', alt: 'Server rack with blue status lights in a data center', author: 'NOIRLab/NSF/AURA/T. Slovinský', license: 'CC BY 4.0', page: f('NOIRLab_HQ_Server_Racks_(6V6A0402-CC).jpg') },
}

/** Credit line text per locale: "Photo: {author}, {licence}" (names and licence ids stay as they are). */
export const PHOTO_CREDIT: Record<string, string> = {
  en: 'Photo', de: 'Foto', fr: 'Photo', ja: '写真', zh: '图片', es: 'Foto', pt: 'Foto', ar: 'صورة', ko: '사진',
}
