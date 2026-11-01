import type { Language } from '@/lib/blog/blogContent'
import type { OSKey } from '@/lib/power-local-llm/apps/types'

// OS product names stay identical across locales (same rule everywhere in the directory). The two
// deployment targets are descriptive, not product names, so they are localized.
const OS_PRODUCT_NAME: Record<'mac' | 'win' | 'linux' | 'ios' | 'ipados' | 'watchos' | 'android' | 'web', string> = {
  mac: 'macOS',
  win: 'Windows',
  linux: 'Linux',
  ios: 'iOS',
  ipados: 'iPadOS',
  watchos: '⌚ watchOS',
  android: 'Android',
  web: 'Web',
}

const DEPLOYMENT_LABEL: Record<'selfhosted' | 'rpi', Record<Language, string>> = {
  selfhosted: {
    en: 'Self-hosted server (Docker)',
    de: 'Self-hosted-Server (Docker)',
    fr: 'Serveur auto-hébergé (Docker)',
    ja: 'セルフホストサーバー（Docker）',
    zh: '自托管服务器（Docker）',
    es: 'Servidor autoalojado (Docker)',
    pt: 'Servidor self-hosted (Docker)',
    ar: 'خادم مستضاف ذاتيًا (Docker)',
    ko: '셀프 호스팅 서버 (Docker)',
  },
  rpi: {
    en: 'Raspberry Pi & embedded',
    de: 'Raspberry Pi & Embedded',
    fr: 'Raspberry Pi et embarqué',
    ja: 'Raspberry Pi＆組み込み',
    zh: 'Raspberry Pi 与嵌入式',
    es: 'Raspberry Pi y sistemas embebidos',
    pt: 'Raspberry Pi e sistemas embarcados',
    ar: 'Raspberry Pi والأنظمة المدمجة',
    ko: 'Raspberry Pi 및 임베디드',
  },
}

/** Display label for a platform value; unknown values fall back to the raw key. */
export function platformLabel(platform: string, lang: Language): string {
  if (platform === 'selfhosted' || platform === 'rpi') return DEPLOYMENT_LABEL[platform][lang] ?? DEPLOYMENT_LABEL[platform].en
  return OS_PRODUCT_NAME[platform as keyof typeof OS_PRODUCT_NAME] ?? platform
}

export type { OSKey }
