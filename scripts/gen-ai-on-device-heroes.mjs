#!/usr/bin/env node
// One-off hero generator for ai-on-device-review, all 9 locales.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public/images')
const PORT = process.env.PORT || 3418

const specs = [
  {
    lang: 'en', title: 'AI on Device Review (2026): A $4.99 Apple Intelligence-Only App',
    subtitle: 'Offline 3B model, 2-bit quantized — requires an Apple Intelligence-compatible iPhone or Mac',
    bullets: [
      '$4.99 one-time purchase — no subscription, no usage fees, no quotas',
      'Requires Apple Intelligence: iOS 26.0 or macOS 26.0 or later',
      'Runs one fixed 3-billion-parameter model, quantized to 2-bit precision',
      'Too few App Store ratings yet for a star average to display',
    ],
    footer: 'PromptQuorum Guide',
  },
  {
    lang: 'de', title: 'AI on Device im Test (2026): Eine 4,99-$-App nur für Apple Intelligence',
    subtitle: 'Offline-3B-Modell, 2-Bit-quantisiert — erfordert ein Apple-Intelligence-kompatibles iPhone oder Mac',
    bullets: [
      'Einmaliger Kauf für 4,99 $ — kein Abonnement, keine Gebühren, keine Kontingente',
      'Erfordert Apple Intelligence: iOS 26.0 oder macOS 26.0 oder neuer',
      'Führt ein festes 3-Milliarden-Parameter-Modell aus, 2-Bit-quantisiert',
      'Noch zu wenige App-Store-Bewertungen für eine Sternedurchschnittsanzeige',
    ],
    footer: 'PromptQuorum Guide',
  },
  {
    lang: 'fr', title: 'AI on Device en test (2026) : une app à 4,99 $ réservée à Apple Intelligence',
    subtitle: 'Modèle 3B hors ligne, quantifié en 2 bits — nécessite un iPhone ou Mac compatible Apple Intelligence',
    bullets: [
      'Achat unique de 4,99 $ — sans abonnement, sans frais, sans quota',
      'Nécessite Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure',
      'Exécute un modèle fixe de 3 milliards de paramètres, quantifié en 2 bits',
      'Trop peu d\'avis App Store pour afficher une note moyenne',
    ],
    footer: 'Guide PromptQuorum',
  },
  {
    lang: 'es', title: 'AI on Device: reseña (2026) de una app de 4,99 $ solo para Apple Intelligence',
    subtitle: 'Modelo 3B sin conexión, cuantizado a 2 bits — requiere un iPhone o Mac compatible con Apple Intelligence',
    bullets: [
      'Compra única de $4.99 — sin suscripción, sin tarifas, sin cuotas',
      'Requiere Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior',
      'Ejecuta un modelo fijo de 3.000 millones de parámetros, cuantizado a 2 bits',
      'Muy pocas valoraciones en la App Store para mostrar un promedio',
    ],
    footer: 'Guía de PromptQuorum',
  },
  {
    lang: 'pt', title: 'AI on Device: análise (2026) de um app de $4,99 só para Apple Intelligence',
    subtitle: 'Modelo 3B offline, quantizado em 2 bits — requer um iPhone ou Mac compatível com Apple Intelligence',
    bullets: [
      'Compra única de $4,99 — sem assinatura, sem taxas, sem cotas',
      'Requer Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior',
      'Executa um modelo fixo de 3 bilhões de parâmetros, quantizado em 2 bits',
      'Avaliações insuficientes na App Store para exibir uma média',
    ],
    footer: 'Guia PromptQuorum',
  },
  {
    lang: 'ja', title: 'AI on Deviceレビュー(2026):Apple Intelligence専用の4.99ドルアプリ',
    subtitle: 'オフライン3Bモデル、2ビット量子化 — Apple Intelligence対応のiPhoneまたはMacが必須',
    bullets: [
      '4.99ドルの一括払い — サブスクリプション、利用料、利用枠なし',
      'Apple Intelligenceが必須:iOS 26.0またはmacOS 26.0以降',
      '固定の30億パラメータモデルを実行、2ビット量子化',
      'App Storeの評価件数が少なすぎて星評価平均が未表示',
    ],
    footer: 'PromptQuorumガイド',
  },
  {
    lang: 'zh', title: 'AI on Device 评测(2026):一款仅限 Apple Intelligence 的 4.99 美元应用',
    subtitle: '离线 3B 模型,2 位量化 — 需要支持 Apple Intelligence 的 iPhone 或 Mac',
    bullets: [
      '一次性支付 4.99 美元 — 无订阅、无费用、无配额',
      '需要 Apple Intelligence:iOS 26.0 或 macOS 26.0 或更高版本',
      '运行固定的 30 亿参数模型,2 位量化',
      'App Store 评价数量太少,无法显示星级平均分',
    ],
    footer: 'PromptQuorum 指南',
  },
  {
    lang: 'ar', title: 'مراجعة AI on Device (2026): تطبيق بـ4.99 دولار مخصص لـApple Intelligence فقط',
    subtitle: 'نموذج 3B دون اتصال، مكمّم بدقة 2 بت — يتطلب iPhone أو Mac متوافقًا مع Apple Intelligence',
    bullets: [
      'شراء لمرة واحدة بقيمة 4.99 دولار — بلا اشتراك، بلا رسوم، بلا حصص',
      'يتطلب Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث',
      'يشغّل نموذجًا ثابتًا بـ3 مليارات معامل، مكمّم بدقة 2 بت',
      'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط بالنجوم',
    ],
    footer: 'دليل PromptQuorum',
  },
  {
    lang: 'ko', title: 'AI on Device 리뷰 (2026): Apple Intelligence 전용 4.99달러 앱',
    subtitle: '오프라인 3B 모델, 2비트 양자화 — Apple Intelligence 호환 iPhone 또는 Mac 필요',
    bullets: [
      '4.99달러 일회성 구매 — 구독 없음, 사용료 없음, 할당량 없음',
      'Apple Intelligence 필요: iOS 26.0 또는 macOS 26.0 이상',
      '고정된 30억 매개변수 모델 실행, 2비트 양자화',
      'App Store 평가 수가 너무 적어 별점 평균 미표시',
    ],
    footer: 'PromptQuorum 가이드',
  },
]

async function main() {
  for (const spec of specs) {
    const res = await fetch(`http://localhost:${PORT}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang: spec.lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Hero gen failed for ${spec.lang}: ${res.status} ${text}`)
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const pngPath = path.join(OUT_DIR, `ai-on-device-review-hero-${spec.lang}.png`)
    fs.writeFileSync(pngPath, buf)
    console.log(`Wrote ${pngPath} (${buf.length} bytes)`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
