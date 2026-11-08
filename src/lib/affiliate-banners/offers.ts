// Offer catalog: 13 category-level offers, merchants per locale. URLs are plain retailer search or official pages, NO affiliate
// tag (PromptQuorum has no affiliate agreement). No prices: verifiedAt is unset, so priceIsShowable() is false everywhere.
// Search queries are English product terms; they work on every shop listed. Merchant URLs must pass scripts/check-affiliate-links.mjs
// before launch (shops that block bots can only be confirmed in a browser).
import { OFFER_COPY, type OfferId } from './copy'
import { LOCALE_MARKET } from './markets'
import type { BannerCategory, BannerLocale, BannerOffer, Market, MerchantLink } from './types'

const LOCALES: BannerLocale[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
const q = encodeURIComponent

const CURRENCY: Record<Market, string> = { us: 'USD', de: 'EUR', fr: 'EUR', jp: 'JPY', es: 'EUR', br: 'BRL', kr: 'KRW', global: 'USD', pt: 'EUR', cn: 'CNY', ae: 'AED' }

type Shop = (query: string) => { vendor: string; url: string }
const shop = (vendor: string, f: (s: string) => string): Shop => (query) => ({ vendor, url: f(query) })
const amazon = (tld: string) => shop('Amazon', (s) => `https://www.amazon.${tld}/s?k=${q(s)}`)

/** Retail shops per market, ordered: first = primary. zh/ar use the US list until Hans decides D2. */
const RETAIL: Record<Market, Shop[]> = {
  us: [amazon('com'), shop('Newegg', (s) => `https://www.newegg.com/p/pl?d=${q(s)}`), shop('B&H', (s) => `https://www.bhphotovideo.com/c/search?q=${q(s)}`)],
  de: [amazon('de'), shop('Alternate', (s) => `https://www.alternate.de/listing.xhtml?q=${q(s)}`), shop('Mindfactory', (s) => `https://www.mindfactory.de/search_result.php?search_query=${q(s)}`)],
  fr: [amazon('fr'), shop('LDLC', (s) => `https://www.ldlc.com/recherche/${q(s)}/`), shop('Materiel.net', (s) => `https://www.materiel.net/recherche/${q(s)}/`)],
  jp: [amazon('co.jp'), shop('Rakuten', (s) => `https://search.rakuten.co.jp/search/mall/${q(s)}/`), shop('Kakaku.com', (s) => `https://kakaku.com/search_results/${q(s)}/`)],
  es: [amazon('es'), shop('PcComponentes', (s) => `https://www.pccomponentes.com/buscar/?query=${q(s)}`), shop('MediaMarkt', (s) => `https://www.mediamarkt.es/es/search.html?query=${q(s)}`)],
  br: [amazon('com.br'), shop('KaBuM!', (s) => `https://www.kabum.com.br/busca/${q(s)}`), shop('Mercado Livre', (s) => `https://lista.mercadolivre.com.br/${s.trim().replace(/\s+/g, '-')}`)],
  kr: [shop('Coupang', (s) => `https://www.coupang.com/np/search?q=${q(s)}`), shop('Danawa', (s) => `https://search.danawa.com/dsearch.php?query=${q(s)}`), shop('11st', (s) => `https://search.11st.co.kr/pc/total-search?kwd=${q(s)}`)],
  global: [amazon('com'), shop('Newegg', (s) => `https://www.newegg.com/p/pl?d=${q(s)}`), shop('B&H', (s) => `https://www.bhphotovideo.com/c/search?q=${q(s)}`)],
  pt: [], cn: [], ae: [],
}

const APPLE_PREFIX: Partial<Record<Market, string>> = { us: '', de: '/de', fr: '/fr', jp: '/jp', es: '/es', kr: '/kr', br: '/br', global: '' }

type Spec = { retail: number } | { fixed: { vendor: string; url: string } } | { apple: true } | { sbcSite: true }
const fixed = (vendor: string, url: string): Spec => ({ fixed: { vendor, url } })

interface OfferDef { category: BannerCategory; query: string; merchants: Spec[] }

const DEFS: Record<OfferId, OfferDef> = {
  'gpu-budget': { category: 'gpu', query: 'RTX 3060 12GB', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  'gpu-24gb': { category: 'gpu', query: 'RTX 4090 24GB', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  'mini-pc': { category: 'mini-pc', query: 'mini PC 32GB RAM', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  mac: { category: 'mac', query: 'Mac mini M4 32GB', merchants: [{ apple: true }, { retail: 0 }, { retail: 1 }] },
  laptop: { category: 'laptop', query: 'laptop RTX 16GB RAM', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  'cloud-gpu': { category: 'cloud-gpu', query: '', merchants: [fixed('RunPod', 'https://www.runpod.io/'), fixed('Vast.ai', 'https://vast.ai/'), fixed('Lambda', 'https://lambda.ai/')] },
  nas: { category: 'nas', query: 'NAS 4-bay', merchants: [{ retail: 0 }, fixed('Synology', 'https://www.synology.com/'), fixed('QNAP', 'https://www.qnap.com/')] },
  vpn: { category: 'vpn', query: '', merchants: [fixed('Proton VPN', 'https://protonvpn.com/'), fixed('Mullvad', 'https://mullvad.net/'), fixed('NordVPN', 'https://nordvpn.com/')] },
  'solar-kit': { category: 'solar', query: 'balcony solar kit microinverter', merchants: [{ retail: 0 }, fixed('EcoFlow', 'https://www.ecoflow.com/'), fixed('Anker SOLIX', 'https://www.anker.com/')] },
  'smart-hub': { category: 'router-hub', query: 'Zigbee USB dongle Home Assistant', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  monitor: { category: 'monitor', query: '27 inch 4K monitor', merchants: [{ retail: 0 }, { retail: 1 }, { retail: 2 }] },
  sbc: { category: 'sbc', query: 'Raspberry Pi 5 8GB', merchants: [{ retail: 0 }, { sbcSite: true }, { retail: 1 }] },
  software: { category: 'software', query: '', merchants: [fixed('Ollama', 'https://ollama.com/'), fixed('LM Studio', 'https://lmstudio.ai/'), fixed('Jan', 'https://jan.ai/')] },
}

function merchantsFor(def: OfferDef, locale: BannerLocale): MerchantLink[] {
  const market = LOCALE_MARKET[locale]
  const shops = RETAIL[market]
  const out: MerchantLink[] = []
  for (const m of def.merchants) {
    let r: { vendor: string; url: string } | undefined
    if ('retail' in m) r = shops[m.retail]?.(def.query)
    else if ('fixed' in m) r = m.fixed
    else if ('apple' in m) r = { vendor: 'Apple', url: `https://www.apple.com${APPLE_PREFIX[market] ?? ''}/shop/buy-mac/mac-mini` }
    else r = { vendor: 'Raspberry Pi', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/' }
    if (r) out.push({ vendor: r.vendor, url: r.url, market, currency: CURRENCY[market], affiliateStatus: 'none' })
  }
  return out
}

export const BANNER_OFFERS: Readonly<Record<OfferId, BannerOffer>> = Object.fromEntries(
  (Object.keys(DEFS) as OfferId[]).map((id) => [
    id,
    {
      id,
      category: DEFS[id].category,
      productKeys: [id],
      copy: OFFER_COPY[id],
      merchantsByLocale: Object.fromEntries(LOCALES.map((l) => [l, merchantsFor(DEFS[id], l)])) as Record<BannerLocale, MerchantLink[]>,
    } satisfies BannerOffer,
  ]),
) as Record<OfferId, BannerOffer>

export function getBannerOffer(id: string): BannerOffer | undefined {
  return (BANNER_OFFERS as Record<string, BannerOffer>)[id]
}
