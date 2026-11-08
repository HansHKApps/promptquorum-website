
// ── Affiliate / product-link tracking ────────────────────────────────────────
// Distinct from the editorial `outbound_click` event (see ./outbound.ts). This
// fires on clicks to retailer / product / signup pages on affiliate buying-guide
// articles.
//
// HONESTY NOTE: PromptQuorum is not currently enrolled in any affiliate program
// and outbound product links carry no affiliate tags (they earn no commission).
// Links therefore use rel="nofollow" — NOT "sponsored" — and pages show a
// neutral third-party-link notice, NOT a commission disclosure. When real
// affiliate programs go live: (1) switch the AffiliateLink rel to
// "nofollow sponsored", and (2) swap AFFILIATE_DISCLOSURE for
// AFFILIATE_DISCLOSURE_COMMISSION below.

export interface AffiliateClickParams {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  lang: string
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

/** True when a URL points at a known retailer / vendor domain. */
export const isAffiliateUrl = (url: string): boolean => {
  try {
    return RETAILER_DOMAINS.has(new URL(url).hostname.toLowerCase().replace(/^www\./, ''))
  } catch {
    return false
  }
}

/** Fire an `affiliate_click` event to Umami. */
export function trackAffiliateClick(p: AffiliateClickParams): void {
  const payload = {
    destination_domain: affiliateDestinationDomain(p.url),
    product_category: p.productCategory,
    product_name: p.productName,
    price_range: p.priceRange ?? 'n/a',
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
    language: p.lang,
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
// the commission wording — switch the PowerLocalLLMPostClient lookup to it once
// real affiliate programs go live (see the HONESTY NOTE at the top of this file).
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

// Commission wording — use only once real affiliate programs go live.
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
