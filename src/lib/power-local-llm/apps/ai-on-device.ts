// Local AI App Directory — AI on Device (layer: mobile)
// Paid, single-fixed-model on-device chat app for iPhone/Mac by independent developer
// Eduardo Dominguez Menendez. Has a full PromptQuorum review (ai-on-device-review), so
// tagline/url/license/platforms are sourced from that article and from direct
// verification against the App Store listing.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ai-on-device',
  name: 'AI on Device',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'paid',
  hardware: null, // TODO: hard requirement is Apple Intelligence compatibility (iOS 26.0 / macOS 26.0+), not a RAM/VRAM floor — needs manual research if a numeric floor is ever published
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: null,
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/ai-on-device/id6753206463',
  },
  tagline: {
    en: 'Offline 3B model (2-bit), $4.99 one-time — requires an Apple Intelligence-compatible device',
    de: 'Offline-3B-Modell (2-Bit), einmalig 4,99 $ — erfordert ein Apple-Intelligence-kompatibles Gerät',
    fr: 'Modèle 3B hors ligne (2 bits), 4,99 $ à l\'achat unique — nécessite un appareil compatible Apple Intelligence',
    ja: 'オフライン3Bモデル(2ビット)、4.99ドル一括払い — Apple Intelligence対応デバイスが必須',
    zh: '离线3B模型(2位),一次性4.99美元 — 需要支持Apple Intelligence的设备',
    es: 'Modelo 3B sin conexión (2 bits), $4.99 pago único — requiere un dispositivo compatible con Apple Intelligence',
    pt: 'Modelo 3B offline (2 bits), $4,99 pagamento único — requer um dispositivo compatível com Apple Intelligence',
    ar: 'نموذج 3B دون اتصال (2 بت)، 4.99 دولار لمرة واحدة — يتطلب جهازًا متوافقًا مع Apple Intelligence',
    ko: '오프라인 3B 모델(2비트), 4.99달러 일회성 — Apple Intelligence 호환 기기 필요',
  },
  reviewSlug: 'ai-on-device-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-12',
}
