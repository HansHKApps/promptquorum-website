#!/usr/bin/env node
// Hero generator for the 7 GPU-cloud pages: public/images/{slug}-overview-hero-{lang}.webp
// Sparse poster: short localized topic title + up to 3 neutral highlights (no claims/prices/ratings).
// Usage: HERO_BASE=http://localhost:3100 node scripts/gen-gpu-cloud-hub-heroes.mjs [slug] [lang]
import fs from 'node:fs'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3100'
const OUT = process.env.HERO_OUT || 'public/images'
const L = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'ko', 'pt', 'ar']
const mk = (arr) => Object.fromEntries(L.map((l, i) => [l, arr[i]]))

// Highlight building blocks, order: en de fr es ja zh ko pt ar
const H = {
  DOCS_REVIEW: mk(['Documentation-based review', 'Dokumentationsbasiert geprüft', 'Basé sur la documentation', 'Basado en la documentación', 'ドキュメントに基づく', '基于官方文档', '문서 기반 리뷰', 'Baseado na documentação', 'مبني على الوثائق']),
  DOCS_COMPARE: mk(['Documentation-based comparison', 'Dokumentationsbasierter Vergleich', 'Comparaison basée sur la documentation', 'Comparativa basada en documentación', 'ドキュメントに基づく比較', '基于官方文档的对比', '문서 기반 비교', 'Comparação baseada em documentação', 'مقارنة مبنية على الوثائق']),
  PODS: mk(['Pods vs Serverless', 'Pods vs. Serverless', 'Pods ou Serverless', 'Pods vs Serverless', 'PodとServerless', 'Pod 与 Serverless', 'Pod와 Serverless', 'Pods vs Serverless', 'Pods مقابل Serverless']),
  SECCOM: mk(['Secure vs Community Cloud', 'Secure vs. Community Cloud', 'Secure ou Community Cloud', 'Secure vs Community Cloud', 'Secure/Community', 'Secure/Community', 'Secure/Community', 'Secure vs Community Cloud', 'Secure مقابل Community Cloud']),
  MARKET: mk(['GPU marketplace', 'GPU-Marktplatz', 'Place de marché GPU', 'Marketplace de GPUs', 'GPUマーケットプレイス', 'GPU 市场', 'GPU 마켓플레이스', 'Marketplace de GPUs', 'سوق GPU']),
  ONDINT: mk(['On-demand vs interruptible', 'On-Demand vs. unterbrechbar', 'À la demande ou interruptible', 'Bajo demanda vs interrumpible', 'オンデマンドと中断可能', '按需与可中断', '온디맨드 vs 중단 가능', 'Sob demanda vs interruptível', 'حسب الطلب أو قابل للمقاطعة']),
  CRYPTO: mk(['Crypto-paid GPU marketplace', 'GPU-Marktplatz, Krypto-Zahlung', 'Marché GPU, paiement crypto', 'Marketplace GPU, pago en cripto', '暗号資産払いのGPU市場', '加密货币支付的 GPU 市场', '암호화폐 결제 GPU 마켓', 'Marketplace GPU pago em cripto', 'سوق GPU بالدفع المشفر']),
  SPOT: mk(['Spot vs On-Demand', 'Spot vs. On-Demand', 'Spot ou On-Demand', 'Spot vs On-Demand', 'SpotとOn-Demand', 'Spot 与 On-Demand', 'Spot와 On-Demand', 'Spot vs On-Demand', 'Spot مقابل On-Demand']),
  MODELAPI: mk(['Model APIs', 'Modell-APIs', 'API de modèles', 'APIs de modelos', 'モデルAPI', '模型 API', '모델 API', 'APIs de modelos', 'واجهات API للنماذج']),
  SLGPU: mk(['Serverless GPUs', 'Serverless-GPUs', 'GPU Serverless', 'GPUs Serverless', 'Serverless GPU', 'Serverless GPU', 'Serverless GPU', 'GPUs Serverless', 'Serverless GPU']),
  THREE: mk(['Three GPU cloud providers', 'Drei GPU-Cloud-Anbieter', 'Trois fournisseurs de GPU cloud', 'Tres proveedores de GPU en la nube', '3社のGPUクラウド', '三家 GPU 云服务商', 'GPU 클라우드 3곳', 'Três provedores de GPU na nuvem', 'ثلاثة مزودين لسحابة GPU']),
  ODSPOT: mk(['On-demand and spot', 'On-Demand und Spot', 'À la demande et spot', 'Bajo demanda y spot', 'オンデマンドとスポット', '按需与竞价实例', '온디맨드와 스팟', 'Sob demanda e spot', 'عند الطلب وSpot']),
  DEDVPS: mk(['Dedicated servers and VPS', 'Dedizierte Server und VPS', 'Serveurs dédiés et VPS', 'Servidores dedicados y VPS', '専用サーバーとVPS', '独立服务器与 VPS', '전용 서버와 VPS', 'Servidores dedicados e VPS', 'خوادم مخصصة وVPS']),
  ODGPU: mk(['On-demand GPU instances', 'GPU-Instanzen on demand', 'Instances GPU à la demande', 'Instancias GPU bajo demanda', 'オンデマンドGPU', '按需 GPU 实例', '온디맨드 GPU 인스턴스', 'Instâncias GPU sob demanda', 'مثيلات GPU عند الطلب']),
  FIXEDTERM: mk(['Fixed-term GPU rental', 'GPU-Miete mit fester Laufzeit', 'Location de GPU à durée fixe', 'Alquiler de GPU a plazo fijo', '固定期間レンタル', '固定期限租用', '고정 기간 임대', 'Aluguel de GPU por prazo fixo', 'تأجير GPU لمدة محددة']),
  HUB1: mk(['Spot, on-demand, serverless', 'Spot, On-Demand, Serverless', 'Spot, à la demande, serverless', 'Spot, bajo demanda, serverless', 'スポットとオンデマンド', '竞价、按需、Serverless', '스팟, 온디맨드', 'Spot, sob demanda, serverless', 'Spot وعند الطلب وServerless']),
  HUB2: mk(['Marketplaces and crypto payment', 'Marktplätze und Krypto-Zahlung', 'Marchés GPU et paiement crypto', 'Marketplaces y pago en cripto', 'マーケットプレイスと暗号資産', '市场平台与加密支付', '마켓플레이스와 암호화폐', 'Marketplaces e pagamento em cripto', 'الأسواق والدفع بالعملات المشفرة']),
}

const T = {
  'best-cloud-gpu-providers': { title: mk(['Cloud GPU Providers Compared', 'Cloud-GPU-Anbieter im Vergleich', 'Fournisseurs de GPU cloud comparés', 'Proveedores de GPU en la nube comparados', 'クラウドGPUプロバイダー比較', '云 GPU 服务商对比', '클라우드 GPU 제공업체 비교', 'Provedores de GPU na Nuvem Comparados', 'مقارنة مزودي GPU السحابية']), hl: ['HUB1', 'HUB2', 'DOCS_COMPARE'] },
  'runpod-review': { title: mk(['RunPod Review', 'RunPod Review', 'Test de RunPod', 'Análisis de RunPod', 'RunPodレビュー', 'RunPod 评测', 'RunPod 리뷰', 'Análise da RunPod', 'مراجعة RunPod']), hl: ['PODS', 'SECCOM', 'DOCS_REVIEW'] },
  'vast-ai-review': { title: mk(['Vast.ai Review', 'Vast.ai Review', 'Test de Vast.ai', 'Análisis de Vast.ai', 'Vast.aiレビュー', 'Vast.ai 评测', 'Vast.ai 리뷰', 'Análise da Vast.ai', 'مراجعة Vast.ai']), hl: ['MARKET', 'ONDINT', 'DOCS_REVIEW'] },
  'clore-ai-review': { title: mk(['Clore.ai Review', 'Clore.ai Review', 'Test de Clore.ai', 'Análisis de Clore.ai', 'Clore.aiレビュー', 'Clore.ai 评测', 'Clore.ai 리뷰', 'Análise da Clore.ai', 'مراجعة Clore.ai']), hl: ['CRYPTO', 'SPOT', 'DOCS_REVIEW'] },
  'novita-ai-review': { title: mk(['Novita AI Review', 'Novita AI Review', 'Test de Novita AI', 'Análisis de Novita AI', 'Novita AIレビュー', 'Novita AI 评测', 'Novita AI 리뷰', 'Análise da Novita AI', 'مراجعة Novita AI']), hl: ['MODELAPI', 'SLGPU', 'DOCS_REVIEW'] },
  'vultr-digitalocean-upcloud-gpu-cloud': { title: mk(['Vultr, DigitalOcean & UpCloud GPU Cloud', 'Vultr, DigitalOcean & UpCloud GPU-Cloud', 'GPU cloud : Vultr, DigitalOcean et UpCloud', 'GPU en la nube: Vultr, DigitalOcean y UpCloud', 'Vultr・DigitalOcean・UpCloudのGPUクラウド', 'Vultr、DigitalOcean 与 UpCloud GPU 云', 'Vultr, DigitalOcean, UpCloud GPU 클라우드', 'GPU Cloud: Vultr, DigitalOcean e UpCloud', 'Vultr وDigitalOcean وUpCloud: سحابة GPU']), hl: ['THREE', 'ODSPOT', 'DOCS_COMPARE'] },
  'gpu-server-hosting-cudo-cherry-database-mart': { title: mk(['GPU Server Hosting: Cudo, Cherry & Database Mart', 'GPU-Server-Hosting: Cudo, Cherry & Database Mart', 'Hébergement de serveurs GPU : Cudo, Cherry et Database Mart', 'Alojamiento de servidores GPU: Cudo, Cherry y Database Mart', 'GPUサーバーホスティング：Cudo・Cherry・Database Mart', 'GPU 服务器托管：Cudo、Cherry 与 Database Mart', 'GPU 서버 호스팅: Cudo, Cherry, Database Mart', 'Hospedagem de Servidor GPU: Cudo, Cherry e Database Mart', 'استضافة خوادم GPU: Cudo وCherry وDatabase Mart']), hl: ['DEDVPS', 'FIXEDTERM', 'DOCS_COMPARE'] },
}

const [onlySlug, onlyLang] = process.argv.slice(2)
for (const [slug, spec] of Object.entries(T)) {
  if (onlySlug && onlySlug !== slug) continue
  console.log(`=== ${slug} ===`)
  for (const lang of L) {
    if (onlyLang && onlyLang !== lang) continue
    const body = { lang, title: spec.title[lang], highlights: spec.hl.map((k) => H[k][lang]) }
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (!res.ok) throw new Error(`${slug}/${lang}: HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const out = `${OUT}/${slug}-overview-hero-${lang}.webp`
    await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(out)
    console.log(`  ${out} (${fs.statSync(out).size} bytes)`)
  }
}
console.log('done')
