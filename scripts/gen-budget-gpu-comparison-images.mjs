#!/usr/bin/env node
// Regenerates both table images of best-budget-gpus-local-llm (9 locales, SVG + WebP):
// the GPU price comparison and the RTX 3060 model speeds (also the article hero).
// Prices and dates must match the article's which-budget-gpus table and note. Speed rows are read
// from the article itself; the speeds are ESTIMATES and the image must keep saying so.
// Usage: node scripts/gen-budget-gpu-comparison-images.mjs
// Renders with Chromium (Playwright) so Arabic shaping/bidi and CJK glyphs come out correctly.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { chromium } from 'playwright'
import ts from 'typescript'

const SLUG = 'best-budget-gpus-local-llm-gpu-comparison'
const DIR = path.join(process.cwd(), 'public/images')

const TRACKER = { source: 'InsiderLLM', date: '2026-11-26' }
const ASKING = { source: 'BuySellRAM', date: '2026-10-11' }
// kind: sold (observed sold listings), ask (lowest asking price), old (earlier estimate, not re-verified)
const ROWS = [
  { gpu: 'RTX 3060 12GB ★', vram: 12, price: '310–350', kind: 'sold', ...TRACKER },
  { gpu: 'RX 6700 XT', vram: 12, price: '175–315', kind: 'old' },
  { gpu: 'RTX 4060 Ti 8GB', vram: 8, price: '350', approx: true, kind: 'ask', ...ASKING },
  { gpu: 'RTX 4070 Super', vram: 12, price: '620', approx: true, kind: 'ask', ...ASKING },
  { gpu: 'RTX A4000', vram: 16, price: '790–850', kind: 'old' },
]

const usd = (p, a) => (a ? '~' : '') + '$' + p

const L = {
  en: {
    title: 'Budget GPUs for Local LLMs', sub: 'Used prices in the US (USD). Source and date are shown per row.',
    head: ['GPU', 'VRAM', 'Used price', 'Price basis', 'Our view'], price: usd,
    sold: 'sold listings', ask: 'lowest asking', old: ['Earlier estimate', 'not re-verified'],
    verdicts: ['Best used budget pick', 'Cheaper 12 GB, AMD setup friction', 'Faster (est.), less VRAM', 'Faster (est.), about 2× price', 'No longer a budget card'],
    foot: ['In our assessment, the RTX 3060 12GB is the most balanced used pick.', 'Sold and asking prices are not directly comparable. Check live listings before buying.'],
  },
  de: {
    title: 'Budget-GPUs für lokale LLMs', sub: 'Gebrauchtpreise in den USA (USD). Quelle und Datum stehen je Zeile.',
    head: ['GPU', 'VRAM', 'Preis gebraucht', 'Preisbasis', 'Unsere Einschätzung'], price: (p, a) => (a ? 'ca. ' : '') + p + ' $',
    sold: 'Verkäufe', ask: 'Angebotspreis', old: ['Frühere Schätzung', 'nicht neu geprüft'],
    verdicts: ['Bestes gebrauchtes Budget', 'Günstigere 12 GB, AMD-Aufwand', 'Schneller (geschätzt), weniger VRAM', 'Schneller (geschätzt), ca. 2× Preis', 'Keine Budget-Karte mehr'],
    foot: ['Nach unserer Einschätzung ist die RTX 3060 12GB die ausgewogenste Gebrauchtwahl.', 'Verkaufs- und Angebotspreise sind nicht direkt vergleichbar. Vor dem Kauf aktuelle Angebote prüfen.'],
  },
  fr: {
    title: 'GPU économiques pour LLM locaux', sub: 'Prix d’occasion aux États-Unis (USD). Source et date indiquées par ligne.',
    head: ['GPU', 'VRAM', 'Prix d’occasion', 'Base du prix', 'Notre avis'], price: (p, a) => (a ? 'env. ' : '') + p + ' $',
    sold: 'ventes conclues', ask: 'offre min.', old: ['Estimation antérieure', 'non revérifiée'],
    verdicts: ['Meilleur choix d’occasion', '12 Go moins chers, friction AMD', 'Plus rapide (est.), moins de VRAM', 'Plus rapide (est.), environ 2× le prix', 'Plus une carte économique'],
    foot: ['À notre avis, la RTX 3060 12GB est le choix d’occasion le plus équilibré.', 'Prix de vente et prix demandés ne sont pas directement comparables. Vérifiez les annonces actuelles.'],
  },
  es: {
    title: 'GPUs económicas para LLM locales', sub: 'Precios de segunda mano en EE. UU. (USD). Fuente y fecha en cada fila.',
    head: ['GPU', 'VRAM', 'Precio usada', 'Base del precio', 'Nuestra valoración'], price: usd,
    sold: 'ventas hechas', ask: 'oferta mínima', old: ['Estimación anterior', 'sin reverificar'],
    verdicts: ['Mejor opción usada', '12 GB más baratos, fricción AMD', 'Más rápida (est.), menos VRAM', 'Más rápida (est.), unas 2× el precio', 'Ya no es económica'],
    foot: ['En nuestra valoración, la RTX 3060 12GB es la opción usada más equilibrada.', 'Precios de venta y de oferta no son comparables directamente. Consulta los anuncios actuales.'],
  },
  pt: {
    title: 'GPUs econômicas para LLMs locais', sub: 'Preços de placas usadas nos EUA (USD). Fonte e data em cada linha.',
    head: ['GPU', 'VRAM', 'Preço usada', 'Base do preço', 'Nossa avaliação'], price: (p, a) => (a ? '~' : '') + 'US$ ' + p,
    sold: 'vendas feitas', ask: 'menor anúncio', old: ['Estimativa anterior', 'não reverificada'],
    verdicts: ['Melhor opção usada', '12 GB mais baratos, atrito com AMD', 'Mais rápida (est.), menos VRAM', 'Mais rápida (est.), cerca de 2× o preço', 'Não é mais econômica'],
    foot: ['Na nossa avaliação, a RTX 3060 12GB é a opção usada mais equilibrada.', 'Preços de venda e de anúncio não são diretamente comparáveis. Consulte os anúncios atuais.'],
  },
  ja: {
    title: 'ローカルLLM向けの低予算GPU', sub: '米国の中古価格（USD）。出典と日付は行ごとに記載。',
    head: ['GPU', 'VRAM', '中古価格', '価格の根拠', '当社の評価'], price: (p, a) => (a ? '約' : '') + '$' + p,
    sold: '成約データ', ask: '最低提示価格', old: ['以前の推定値', '再確認していません'],
    verdicts: ['中古の予算向け第一候補', '安価な12GB、AMDは設定に手間', '高速（推定）だがVRAMは少ない', '高速（推定）、価格は約2倍', 'もはや予算向けではない'],
    foot: ['当社の評価では、RTX 3060 12GBが中古で最もバランスの取れた選択です。', '成約価格と提示価格は直接比較できません。購入前に最新の出品を確認してください。'],
  },
  zh: {
    title: '本地LLM预算显卡', sub: '美国二手价格（USD）。每行标明来源和日期。',
    head: ['显卡', '显存', '二手价格', '价格依据', '我们的评价'], price: (p, a) => (a ? '约' : '') + '$' + p,
    sold: '成交记录', ask: '最低挂牌价', old: ['此前估算', '未重新核实'],
    verdicts: ['二手预算首选', '更便宜的12GB，AMD配置较麻烦', '更快（估计），但显存较少', '更快（估计），价格约2倍', '已不属于预算级'],
    foot: ['据我们评估，RTX 3060 12GB是最均衡的二手选择。', '成交价与挂牌价不能直接比较。购买前请查看最新挂牌信息。'],
  },
  ko: {
    title: '로컬 LLM용 예산형 GPU', sub: '미국 중고 가격(USD). 출처와 날짜는 행별로 표시합니다.',
    head: ['GPU', 'VRAM', '중고 가격', '가격 근거', '당사 평가'], price: (p, a) => (a ? '약 ' : '') + '$' + p,
    sold: '낙찰 실적', ask: '최저 호가', old: ['이전 추정치', '재확인하지 않음'],
    verdicts: ['최고의 중고 예산형 선택', '더 저렴한 12GB, AMD 설정 번거로움', '더 빠름(추정), VRAM은 적음', '더 빠름(추정), 가격 약 2배', '더 이상 예산형 아님'],
    foot: ['당사 평가로는 RTX 3060 12GB가 가장 균형 잡힌 중고 선택입니다.', '낙찰가와 호가는 직접 비교할 수 없습니다. 구매 전에 최신 매물을 확인하십시오.'],
  },
  ar: {
    rtl: true,
    title: 'بطاقات GPU اقتصادية لنماذج LLM المحلية', sub: 'أسعار البطاقات المستعملة في الولايات المتحدة (USD). المصدر والتاريخ في كل صف.',
    head: ['البطاقة', 'VRAM', 'سعر المستعملة', 'أساس السعر', 'تقييمنا'], price: (p, a) => (a ? '~' : '') + '$' + p,
    sold: 'مبيعات مكتملة', ask: 'أقل سعر معروض', old: ['تقدير سابق', 'لم يُعَد التحقق منه'],
    verdicts: ['أفضل خيار مستعمل اقتصادي', '12GB أرخص، مع صعوبة إعداد AMD', 'أسرع (تقديرًا) لكن VRAM أقل', 'أسرع (تقديرًا) بنحو ضعف السعر', 'لم تعد بطاقة اقتصادية'],
    foot: ['في تقييمنا، RTX 3060 12GB هي الخيار المستعمل الأكثر توازنًا.', 'لا تصح المقارنة المباشرة بين أسعار البيع وأسعار العرض. راجع العروض الحالية قبل الشراء.'],
  },
}

const FONTS = {
  ja: "'Hiragino Sans', 'Noto Sans JP', sans-serif",
  zh: "'PingFang SC', 'Noto Sans SC', sans-serif",
  ko: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
  ar: "'Geeza Pro', 'Noto Sans Arabic', Arial, sans-serif",
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Shared 1200x675 drawing helpers.
function canvas(lang, rtl) {
  const W = 1200
  const H = 675
  const font = FONTS[lang] || "'Inter', 'Helvetica Neue', Arial, sans-serif"
  // x is given in left-to-right layout; right-to-left mirrors it and anchors on the right edge.
  // ltr=true keeps Latin-only cells (names, prices, dates) in their own direction.
  const text = (x, y, s, { size = 19, fill = '#1C1B1F', weight = 400, ltr = false } = {}) => {
    const px = rtl ? W - x : x
    const dir = rtl && !ltr ? 'rtl' : 'ltr'
    const anchor = rtl && ltr ? 'end' : 'start'
    return `<text x="${px}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" direction="${dir}" text-anchor="${anchor}">${esc(s)}</text>`
  }
  const line = (y, stroke, width) => `<line x1="32" y1="${y}" x2="${W - 32}" y2="${y}" stroke="${stroke}" stroke-width="${width}"/>`
  const frame = (title, body) => {
    const mark = `<text x="${rtl ? 44 : W - 44}" y="661" font-size="13" fill="#8A8591" text-anchor="${rtl ? 'start' : 'end'}">promptquorum.com</text>`
    const meta = '<metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description rdf:about=""><dc:creator>PromptQuorum</dc:creator><dc:rights>© 2026 PromptQuorum. All rights reserved.</dc:rights><dc:source>https://www.promptquorum.com</dc:source></rdf:Description></rdf:RDF></metadata>'
    return `<svg xmlns="http://www.w3.org/2000/svg" xml:lang="${lang}" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="${font.replace(/"/g, "'")}">${meta}<title>${esc(title)}</title>\n${[...body, mark].join('\n')}\n</svg>\n`
  }
  return { text, line, frame }
}

function header(text, title, sub) {
  return [
    '<rect width="1200" height="675" fill="#FFFFFF"/>',
    '<rect width="1200" height="128" fill="#6750A4"/>',
    text(44, 62, title, { size: 34, fill: '#FFFFFF', weight: 700 }),
    text(44, 100, sub, { size: 19, fill: '#EADDFF' }),
  ]
}

function build(lang) {
  const t = L[lang]
  const W = 1200
  const { text, frame } = canvas(lang, !!t.rtl)
  const X = [44, 270, 372, 568, 800]
  const out = header(text, t.title, t.sub)
  t.head.forEach((h, i) => out.push(text(X[i], 170, h, { size: 16, fill: '#6B6574', weight: 700 })))
  out.push(`<line x1="32" y1="186" x2="${W - 32}" y2="186" stroke="#E8DEF8" stroke-width="2"/>`)
  ROWS.forEach((r, i) => {
    const top = 192 + i * 76
    const y = top + 45
    if (i === 0) out.push(`<rect x="32" y="${top}" width="${W - 64}" height="72" rx="8" fill="#F7F2FA"/>`)
    out.push(text(X[0], y, r.gpu, { weight: 700, size: 20, ltr: true }))
    out.push(text(X[1], y, `${r.vram} GB`, { ltr: true }))
    out.push(text(X[2], y, t.price(r.price, r.approx), { weight: 600, size: 20, ltr: !['ja', 'zh', 'ko'].includes(lang) }))
    if (r.kind === 'old') {
      out.push(text(X[3], top + 31, t.old[0], { size: 16, fill: '#49454F' }))
      out.push(text(X[3], top + 55, t.old[1], { size: 16, fill: '#49454F' }))
    } else {
      out.push(text(X[3], top + 31, `${r.source}, ${t[r.kind]}`, { size: 16, fill: '#49454F' }))
      out.push(text(X[3], top + 55, r.date, { size: 16, fill: '#49454F', ltr: true }))
    }
    out.push(text(X[4], y, t.verdicts[i], { size: 17, fill: '#4F378B', weight: 600 }))
    if (i > 0) out.push(`<line x1="32" y1="${top - 2}" x2="${W - 32}" y2="${top - 2}" stroke="#EFEAF4" stroke-width="1"/>`)
  })
  out.push(text(X[0], 603, t.foot[0], { size: 17, weight: 600 }))
  out.push(text(X[0], 631, t.foot[1], { size: 16, fill: '#49454F' }))
  return frame(t.title, out)
}

// Model speed image: rows come from the article's rtx-3060-12gb table, so names and numbers cannot drift.
const SPEED_SLUG = 'best-budget-gpus-local-llm-model-speeds'
// The article only imports types, so transpiling the single file is enough to load it.
const source = fs.readFileSync('src/lib/local-llms/articles/best-budget-gpus-local-llm.ts', 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const { article } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

const S = {
  en: { title: 'RTX 3060 12GB: Estimated Model Speeds', sub: 'Estimates for Ollama at Q4_K_M with 16GB system RAM. Not our own benchmark results.', speed: 'Speed (estimate)', foot: 'Speeds vary by about ±15% with prompt length and context window.' },
  de: { title: 'RTX 3060 12GB: geschätzte Modellgeschwindigkeiten', sub: 'Schätzwerte für Ollama bei Q4_K_M mit 16 GB System-RAM. Keine eigenen Benchmark-Ergebnisse.', speed: 'Tempo (Schätzwert)', foot: 'Die Werte schwanken je nach Promptlänge und Kontextfenster um etwa ±15 %.' },
  fr: { title: 'RTX 3060 12GB : vitesses estimées des modèles', sub: 'Estimations pour Ollama en Q4_K_M avec 16 Go de RAM. Ce ne sont pas nos propres benchmarks.', speed: 'Vitesse (estimation)', foot: 'Les vitesses varient d’environ ±15 % selon la longueur du prompt et la fenêtre de contexte.' },
  es: { title: 'RTX 3060 12GB: velocidades estimadas por modelo', sub: 'Estimaciones para Ollama en Q4_K_M con 16 GB de RAM. No son pruebas propias.', speed: 'Velocidad (estimada)', foot: 'Las velocidades varían en torno a ±15 % según el prompt y la ventana de contexto.' },
  pt: { title: 'RTX 3060 12GB: velocidades estimadas por modelo', sub: 'Estimativas para o Ollama em Q4_K_M com 16 GB de RAM. Não são benchmarks próprios.', speed: 'Velocidade (estimada)', foot: 'As velocidades variam cerca de ±15% conforme o prompt e a janela de contexto.' },
  ja: { title: 'RTX 3060 12GB：モデル別の推定速度', sub: 'Q4_K_M・システムRAM 16GBでのOllamaの推定値です。当社の実測ではありません。', speed: '速度（推定）', foot: '速度はプロンプトの長さやコンテキストウィンドウにより約±15%変動します。' },
  zh: { title: 'RTX 3060 12GB：各模型估算速度', sub: '为Ollama在Q4_K_M、16GB系统内存下的估算值，并非我们的实测。', speed: '速度（估算）', foot: '速度会因提示长度和上下文窗口浮动约±15%。' },
  ko: { title: 'RTX 3060 12GB: 모델별 추정 속도', sub: 'Q4_K_M, 시스템 RAM 16GB 환경의 Ollama 추정치이며 당사의 실측값이 아닙니다.', speed: '속도(추정)', foot: '속도는 프롬프트 길이와 컨텍스트 창에 따라 약 ±15% 달라집니다.' },
  ar: { title: 'RTX 3060 12GB: سرعات تقديرية للنماذج', sub: 'تقديرات لـ Ollama بتكميم Q4_K_M مع ذاكرة نظام 16GB، وليست نتائج اختبارات أجريناها.', speed: 'السرعة (تقديرية)', foot: 'تختلف السرعات بنحو ±15% حسب طول الموجّه ونافذة السياق.' },
}

function buildSpeeds(lang) {
  const t = S[lang]
  const rtl = !!L[lang].rtl
  const section = article[lang].sections['rtx-3060-12gb']
  const c = section.columns
  const { text, frame, line } = canvas(lang, rtl)
  const X = [44, 360, 510, 800]
  const out = header(text, t.title, t.sub)
  ;[c[0], c[3], t.speed, c[5]].forEach((h, i) => out.push(text(X[i], 170, h, { size: 16, fill: '#6B6574', weight: 700 })))
  out.push(line(186, '#E8DEF8', 2))
  section.rows.forEach((row, i) => {
    const [model, , , vram, speed, best] = c.map((key) => row[key])
    const top = 192 + i * 62
    const y = top + 38
    if (i === 0) out.push(`<rect x="32" y="${top}" width="1136" height="58" rx="8" fill="#F7F2FA"/>`)
    out.push(text(X[0], y, model, { weight: 700, size: 20, ltr: true }))
    out.push(text(X[1], y, vram, { ltr: true }))
    // Arabic article cells use a mixed-script unit that reorders badly in an image, so use the Latin unit.
    const value = rtl ? speed.replace('tok/ث', 'tok/s') : speed
    out.push(text(X[2], y, value, { weight: 600, size: 20, fill: '#4F378B', ltr: rtl }))
    out.push(text(X[3], y, best, { size: 17, fill: '#49454F' }))
    if (i > 0) out.push(line(top - 2, '#EFEAF4', 1))
  })
  out.push(text(X[0], 608, t.foot, { size: 17, fill: '#49454F' }))
  return frame(t.title, out)
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } })
let overflow = 0
const JOBS = [[SLUG, build], [SPEED_SLUG, buildSpeeds]]
for (const [slug, draw] of JOBS) for (const lang of Object.keys(L)) {
  // The article uses the WebP; the SVG is the same drawing at the same 1200x675 size.
  fs.writeFileSync(path.join(DIR, `${slug}-${lang}.svg`), draw(lang))
  await page.setContent(`<!doctype html><html lang="${lang}"><body style="margin:0">${draw(lang)}</body></html>`)
  await page.evaluate(() => document.fonts.ready)
  // Flag any text that leaves the canvas or runs into its neighbouring column.
  const bad = await page.evaluate(() => {
    const boxes = [...document.querySelectorAll('svg text')].map((el) => ({ s: el.textContent, b: el.getBBox() }))
    const issues = []
    boxes.forEach((a, i) => {
      if (a.b.x < 28 || a.b.x + a.b.width > 1172) issues.push(`canvas: ${a.s}`)
      boxes.slice(i + 1).forEach((c) => {
        const h = Math.min(a.b.x + a.b.width, c.b.x + c.b.width) - Math.max(a.b.x, c.b.x)
        const v = Math.min(a.b.y + a.b.height, c.b.y + c.b.height) - Math.max(a.b.y, c.b.y)
        if (h > -6 && v > 4) issues.push(`overlap: ${a.s} | ${c.s}`)
      })
    })
    return issues
  })
  if (bad.length) { overflow += bad.length; console.error(lang, bad) }
  const png = await page.screenshot({ type: 'png' })
  await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(DIR, `${slug}-hero-${lang}.webp`))
  console.log('OK', slug, lang)
}
await browser.close()
if (overflow) process.exitCode = 1
