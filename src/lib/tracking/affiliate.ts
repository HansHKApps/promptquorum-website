
// ── Affiliate / product-link tracking ────────────────────────────────────────
// Distinct from the editorial `outbound_click` event (see ./outbound.ts). This
// fires on clicks to retailer / product / signup pages on affiliate buying-guide
// articles.
//
// HONESTY NOTE: a link is only ever described as commission-earning when it
// really is one. The switch is PER LINK and automatic, driven by the URL itself
// (see isMonetisedUrl below and monetised-link-signals.json):
//   - plain provider URL (no referral/affiliate parameter)  -> rel="nofollow"
//     and the neutral third-party-link notice (AFFILIATE_DISCLOSURE);
//   - URL carrying a referral/affiliate code or an affiliate-network redirect
//     -> rel="nofollow sponsored" and, on any page that has at least one such
//     link, the commission wording (AFFILIATE_DISCLOSURE_COMMISSION).
// Nothing here is flipped by hand: writing real codes into the links (for the
// cloud-GPU pages: scripts/apply-gpu-cloud-refs.mjs) is the go-live step, and the
// rel + disclosure follow from it. Today no link on the site carries a code, so
// the live output is unchanged.

import { localeAndCluster } from '@/lib/tracking/umami-events'
import signals from '@/lib/tracking/monetised-link-signals.json'

export interface AffiliateClickParams {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  lang: string
  /** data-placement of the clicked link (top-box, table, inline, footer); defaults to "inline". */
  placement?: string
}

// Bare hostnames (no leading "www.") of known retailers / vendors. Used by
// isAffiliateUrl() as a safety net for auto-detecting product links in body
// text. Structured affiliate links are declared explicitly via AffiliateLink.
const RETAILER_DOMAINS: ReadonlySet<string> = new Set([
  // Amazon (all storefronts)
  'amazon.com', 'amazon.de', 'amazon.fr', 'amazon.co.jp', 'amazon.co.uk',
  'amazon.it', 'amazon.es', 'amazon.ca',
  // PC component retailers
  'newegg.com', 'bhphotovideo.com', 'adorama.com', 'microcenter.com',
  'mindfactory.de', 'caseking.de', 'notebooksbilliger.de', 'alternate.de',
  'ldlc.com', 'materiel.net', 'topachat.com', 'jd.com',
  // Cloud GPU providers
  'runpod.io', 'vast.ai', 'lambdalabs.com', 'lambda.ai', 'paperspace.com',
  'coreweave.com', 'crusoe.ai', 'modal.com', 'together.ai',
  // Hardware brands
  'apple.com', 'synology.com', 'qnap.com', 'westerndigital.com', 'wd.com',
  'samsung.com', 'lenovo.com', 'asus.com', 'frame.work', 'razer.com',
  'dell.com', 'lg.com', 'benq.com', 'minisforum.com', 'aoostar.com',
  'bee-link.com', 'gmktec.com', 'geekompc.com',
  // VPN providers
  'protonvpn.com', 'nordvpn.com', 'mullvad.net', 'surfshark.com', 'expressvpn.com',
  // Developer tools (SaaS)
  'cursor.com', 'continue.dev', 'sourcegraph.com', 'tabnine.com',
  // Course platforms
  // Banner pilot shops and vendors (regional retailers, brand sites, official software sites)
  'amazon.com.br', 'kabum.com.br', 'mercadolivre.com.br', 'pccomponentes.com', 'mediamarkt.es',
  'coupang.com', 'danawa.com', '11st.co.kr', 'rakuten.co.jp', 'kakaku.com',
  'ecoflow.com', 'anker.com', 'raspberrypi.com', 'ollama.com', 'lmstudio.ai', 'jan.ai',
  'coursera.org', 'deeplearning.ai', 'udemy.com', 'datacamp.com', 'fast.ai',
])

/** Hostname of a URL with any leading "www." stripped; the raw input on parse failure. */
export const affiliateDestinationDomain = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * True for an on-page anchor (`#section`) or any URL that resolves to this site's own hostname. `new URL('#x')`
 * throws (no base), so affiliateDestinationDomain() fell back to returning the raw string "#x" as `partner` —
 * that is not a hostname and must never reach the affiliate_click payload. Resolves relative to the current
 * page so a same-site relative link is caught too, not only a bare hash.
 */
const isInternalUrl = (url: string): boolean => {
  if (url.startsWith('#')) return true
  if (typeof window === 'undefined') return false
  try {
    return new URL(url, window.location.href).hostname.replace(/^www\./, '') === window.location.hostname.replace(/^www\./, '')
  } catch {
    return false
  }
}

/** True when a URL points at a known retailer / vendor domain. */
export const isAffiliateUrl = (url: string): boolean => {
  try {
    return RETAILER_DOMAINS.has(new URL(url).hostname.toLowerCase().replace(/^www\./, ''))
  } catch {
    return false
  }
}

const MONETISED_PARAMS: ReadonlySet<string> = new Set(signals.queryParams)
const MONETISED_UTM_MEDIUMS: ReadonlySet<string> = new Set(signals.utmMediumValues)

/**
 * True when the URL is a commission-earning link: it carries a referral / affiliate query parameter
 * (monetised-link-signals.json), a utm_medium that names an affiliate channel, or it points at an
 * affiliate-network redirect host. The site's own outbound source tag (utm_source=promptquorum.com,
 * utm_medium=referral, added at click time by OutboundUtmTagger) is deliberately NOT a signal. Relative
 * and unparsable URLs are never monetised.
 */
export const isMonetisedUrl = (url: string): boolean => {
  let u: URL
  try {
    u = new URL(url)
  } catch {
    return false
  }
  const host = u.hostname.toLowerCase().replace(/^www\./, '')
  if (signals.redirectHosts.some((h) => host === h || host.endsWith(`.${h}`))) return true
  for (const [key, value] of u.searchParams) {
    const k = key.toLowerCase()
    if (k === 'utm_medium') {
      if (MONETISED_UTM_MEDIUMS.has(value.toLowerCase())) return true
      continue
    }
    if (MONETISED_PARAMS.has(k) && value.trim() !== '') return true
  }
  return false
}

/** rel attribute for an affiliate link: "sponsored" is added only for a genuinely monetised URL. */
export const affiliateRelFor = (url: string): string =>
  isMonetisedUrl(url) ? 'nofollow sponsored noopener noreferrer' : 'nofollow noopener noreferrer'

/**
 * True when any `affiliateLinks` entry anywhere inside the given article/section data points at a monetised
 * URL. Walks the whole value, so it covers section-level and ranked-item-level lists in every locale block.
 */
export const hasMonetisedAffiliateLinks = (data: unknown): boolean => {
  const seen = new Set<object>()
  const walk = (node: unknown): boolean => {
    if (!node || typeof node !== 'object') return false
    if (seen.has(node as object)) return false
    seen.add(node as object)
    if (Array.isArray(node)) return node.some(walk)
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      if (key === 'affiliateLinks' && Array.isArray(value)) {
        if (value.some((l) => l && typeof (l as { url?: unknown }).url === 'string' && isMonetisedUrl((l as { url: string }).url))) return true
      } else if (walk(value)) return true
    }
    return false
  }
  return walk(data)
}

/** Disclosure text for a page: commission wording only when the page has a monetised link, else the neutral notice. */
export const affiliateDisclosureFor = (lang: string, pageHasMonetisedLinks: boolean): string => {
  const table = pageHasMonetisedLinks ? AFFILIATE_DISCLOSURE_COMMISSION : AFFILIATE_DISCLOSURE
  return table[lang] ?? table['en']
}

/**
 * Fire an `affiliate_click` event to Umami. Never fires for an on-page anchor or other same-site link — those
 * are navigation, not a click on a third-party product/retailer link, and `partner` must always be a real
 * hostname (see isInternalUrl). An AffiliateLink pointed at an in-page `#anchor` — e.g. a "Compare X vs Y"
 * jump link rendered through the affiliateLinks catalog instead of a plain content link — is a content bug to
 * fix at the source, not something this function should paper over by faking a hostname.
 */
export function trackAffiliateClick(p: AffiliateClickParams): void {
  if (isInternalUrl(p.url)) return
  const payload = {
    destination_domain: affiliateDestinationDomain(p.url),
    product_category: p.productCategory,
    product_name: p.productName,
    price_range: p.priceRange ?? 'n/a',
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
    language: p.lang,
    // Added 2026-11-14 on the SAME single event (additive; the keys above are unchanged so existing
    // reports keep working). partner = link host, product = link text (max 80 chars).
    partner: affiliateDestinationDomain(p.url),
    product: p.productName.slice(0, 80),
    placement: p.placement || 'inline',
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    ...localeAndCluster(typeof window !== 'undefined' ? window.location.pathname : '/'),
  }

  try {
    window.umami?.track('affiliate_click', payload)
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.warn('[affiliate] umami track failed:', err)
  }

}

// Affiliate disclosure shown near the top of each affiliate page.
//
// AFFILIATE_DISCLOSURE is the neutral, currently-accurate notice: PromptQuorum
// is not enrolled in any affiliate program, so outbound links carry no
// affiliate tags and earn no commission. AFFILIATE_DISCLOSURE_COMMISSION holds
// the commission wording. Post clients choose between the two through
// affiliateDisclosureFor(lang, hasMonetisedAffiliateLinks(article)), so a page shows
// the commission wording exactly when it carries a monetised link (see the HONESTY NOTE
// at the top of this file) — never by a manual global switch.
export const AFFILIATE_DISCLOSURE: Record<string, string> = {
  en: 'This page contains links to third-party products for reference. PromptQuorum is not enrolled in any affiliate program — these are plain links that earn no commission. Clicking links and your next steps are entirely your own responsibility. Any recommendation on this page reflects our own reading of the vendors\' public pages, not a vendor endorsement or a test.',
  de: 'Diese Seite enthält Verweislinks zu Produkten von Drittanbietern. PromptQuorum ist an keinem Partnerprogramm beteiligt — es sind reine Referenzlinks, die keine Provision erzielen. Das Anklicken von Links und Ihre nächsten Schritte liegen in Ihrer eigenen Verantwortung. Jede Empfehlung auf dieser Seite beruht auf unserer eigenen Auswertung der öffentlichen Seiten der Anbieter, nicht auf einer Billigung durch die Anbieter oder einem Test.',
  fr: 'Cette page contient des liens de référence vers des produits tiers. PromptQuorum n\'est inscrit à aucun programme d\'affiliation — ce sont de simples liens qui ne génèrent aucune commission. Cliquer sur les liens et vos prochaines étapes relèvent entièrement de votre responsabilité. Toute recommandation sur cette page reflète notre propre lecture des pages publiques des fournisseurs, et non une approbation des fournisseurs ni un test.',
  ja: 'このページには参考用の第三者製品へのリンクが含まれています。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、これらはコミッションを得ない単なる参照リンクです。リンクのクリックと次のステップはご自身の責任です。このページの推奨は、各ベンダーの公開ページに対する当サイト独自の読み取りに基づくものであり、ベンダーによる推奨でもテスト結果でもありません。',
  zh: '本页包含指向第三方产品的参考链接。PromptQuorum 未加入任何联盟计划——这些是不产生佣金的普通链接。点击链接和后续步骤由您自行承担责任。本页的任何推荐均基于我们对各服务商公开页面的自行解读，并非服务商的背书，也不是测试结果。',
  es: 'Esta página contiene enlaces de referencia a productos de terceros. PromptQuorum no participa en ningún programa de afiliados — son enlaces simples que no generan comisión. Hacer clic en los enlaces y los pasos siguientes son de tu entera responsabilidad. Cualquier recomendación de esta página refleja nuestra propia lectura de las páginas públicas de los proveedores, no un respaldo de los proveedores ni una prueba.',
  pt: 'Esta página contém links de referência para produtos de terceiros. O PromptQuorum não está inscrito em nenhum programa de afiliados — são links simples que não geram comissão. Clicar nos links e os próximos passos são de sua inteira responsabilidade. Qualquer recomendação nesta página reflete a nossa própria leitura das páginas públicas dos provedores, não um endosso dos provedores nem um teste.',
  ar: 'تحتوي هذه الصفحة على روابط مرجعية لمنتجات طرف ثالث. لا يشارك PromptQuorum في أي برنامج تابع — هذه روابط عادية لا تدر أي عمولة. النقر على الروابط والخطوات التالية تقع على عاتقك بالكامل. أي توصية في هذه الصفحة تعكس قراءتنا الخاصة للصفحات العامة للمزودين، وليست تأييداً من المزودين ولا نتيجة اختبار.',
  ko: '이 페이지에는 타사 제품에 대한 참조 링크가 포함되어 있습니다. PromptQuorum은 어떤 제휴 프로그램에도 등록되어 있지 않습니다 — 이는 수수료가 발생하지 않는 일반 링크입니다. 링크 클릭 및 이후 단계는 전적으로 귀하의 책임입니다. 이 페이지의 모든 추천은 각 업체 공개 페이지에 대한 당사의 자체 해석을 반영한 것이며, 업체의 보증이나 테스트 결과가 아닙니다.',
}

// Short visible eyebrow label rendered on sections flagged `sponsoredSlot: true`
// (SectionBlock in PowerLocalLLMPostClient / SmartHomePostClient /
// BalconySolarPostClient). A CSS tint alone does not satisfy commercial-content
// disclosure rules (German MStV §22 / UWG §5a(6) Kennzeichnungspflicht, FTC
// Endorsement Guides 16 CFR 255, JP stealth-marketing rules, KR 표시광고법) —
// the section needs a real, legible label identifying it as commercial content.
export const SPONSORED_LABEL: Record<string, string> = {
  en: 'Sponsored',
  de: 'Anzeige',
  fr: 'Publicité',
  ja: '広告',
  zh: '赞助内容',
  es: 'Publicidad',
  pt: 'Publicidade',
  ar: 'إعلان',
  ko: '광고',
}

// Commission wording — shown only on pages with at least one monetised link (see affiliateDisclosureFor).
export const AFFILIATE_DISCLOSURE_COMMISSION: Record<string, string> = {
  en: 'This page contains product links. We may earn a commission if you purchase through these links, at no extra cost to you.',
  de: 'Diese Seite enthält Produktlinks. Wir erhalten möglicherweise eine Provision, wenn Sie über diese Links kaufen — ohne Mehrkosten für Sie.',
  fr: 'Cette page contient des liens produits. Nous pouvons recevoir une commission si vous achetez via ces liens, sans frais supplémentaires pour vous.',
  ja: 'このページには製品リンクが含まれています。これらのリンクを通じてご購入いただいた場合、追加費用なしでコミッションを受け取る場合があります。',
  zh: '本页包含产品链接。如果您通过这些链接购买，我们可能会获得佣金，不会产生额外费用。',
  es: 'Esta página contiene enlaces a productos. Podemos recibir una comisión si realizas una compra a través de estos enlaces, sin coste adicional para ti.',
  pt: 'Esta página contém links de produtos. Podemos receber uma comissão se você comprar por meio desses links, sem custo adicional para você.',
  ar: 'تحتوي هذه الصفحة على روابط منتجات. قد نحصل على عمولة إذا أجريت عملية شراء عبر هذه الروابط، دون أي تكلفة إضافية عليك.',
  ko: '이 페이지에는 제품 링크가 포함되어 있습니다. 이 링크를 통해 구매하시면 추가 비용 없이 수수료를 받을 수 있습니다.',
}
