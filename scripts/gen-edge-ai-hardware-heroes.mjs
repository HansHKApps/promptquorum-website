#!/usr/bin/env node
const BASE = 'http://localhost:3410';
const SLUG = 'edge-ai-hardware-for-local-llms';

const SPECS = {
  en: {
    title: 'Edge AI Silicon for Local LLMs 2026: What Actually Fits in a Shipping Product',
    subtitle: 'Specifying compute for an embedded product is a different problem than picking a GPU for a desktop.',
    footer: 'PromptQuorum Guide',
    bullets: [
      'Desktop LLM guides optimize tokens/sec against VRAM — edge products optimize joules/token against a fixed thermal design point',
      'Hailo-10H: 9.45 tok/s on Qwen2-1.5B-Instruct at 2.1W average power, per Hailo’s published benchmark data',
      'NVIDIA Jetson AGX Thor (T5000): 2,070 TFLOPS sparse FP4, 40–130W, 128GB LPDDR5X at 273GB/s',
      'Memory bandwidth — not memory capacity — bounds decode speed; industrial temperature range and part lifecycle must match the product’s service life',
    ],
  },
  de: {
    title: 'Edge-AI-Silizium für lokale LLMs 2026: Was tatsächlich in ein Serienprodukt passt',
    subtitle: 'Rechenleistung für ein eingebettetes Produkt zu spezifizieren ist ein anderes Problem als eine GPU für einen Desktop auszuwählen.',
    footer: 'PromptQuorum-Leitfaden',
    bullets: [
      'Desktop-LLM-Leitfäden optimieren Tokens/Sek. gegen VRAM — Edge-Produkte optimieren Joule/Token gegen einen festen thermischen Auslegungspunkt',
      'Hailo-10H: 9,45 Tok/s bei Qwen2-1.5B-Instruct mit durchschnittlich 2,1 W, laut Hailos veröffentlichten Benchmark-Daten',
      'NVIDIA Jetson AGX Thor (T5000): 2.070 TFLOPS FP4 sparse, 40–130 W, 128 GB LPDDR5X mit 273 GB/s',
      'Speicherbandbreite — nicht Speicherkapazität — begrenzt die Decodier-Geschwindigkeit; industrieller Temperaturbereich und Bauteil-Lebenszyklus müssen zur Produktlebensdauer passen',
    ],
  },
  fr: {
    title: 'Silicium IA embarquée pour LLM locaux 2026 : ce qui tient vraiment dans un produit',
    subtitle: "Spécifier le calcul d'un produit embarqué est un problème différent du choix d'un GPU de bureau.",
    footer: 'Guide PromptQuorum',
    bullets: [
      "Les guides LLM de bureau optimisent les tokens/s face à la VRAM — les produits embarqués optimisent les joules/token face à un point de conception thermique fixe",
      "Hailo-10H : 9,45 tok/s sur Qwen2-1.5B-Instruct à 2,1 W en moyenne, selon les données publiées par Hailo",
      "NVIDIA Jetson AGX Thor (T5000) : 2 070 TFLOPS FP4 sparse, 40–130 W, 128 Go de LPDDR5X à 273 Go/s",
      "La bande passante mémoire — pas la capacité — limite la vitesse de décodage ; la plage de température industrielle et le cycle de vie de la puce doivent correspondre à la durée de vie du produit",
    ],
  },
  ja: {
    title: 'ローカルLLM向けエッジAIシリコン2026：量産製品に実際に収まるのは何か',
    subtitle: '組み込み製品の演算リソース選定は、デスクトップ向けGPU選びとは根本的に異なる問題です。',
    footer: 'PromptQuorumガイド',
    bullets: [
      'デスクトップ向けLLMガイドはVRAMに対するトークン/秒を最適化——エッジ製品は固定の熱設計基準点に対するジュール/トークンを最適化する',
      'Hailo-10H：Qwen2-1.5B-Instructで9.45 tok/s、平均電力2.1W（Hailo公表のベンチマークデータより）',
      'NVIDIA Jetson AGX Thor（T5000）：スパースFP4で2,070 TFLOPS、40〜130W、128GB LPDDR5X（273GB/s）',
      'メモリ帯域幅がデコード速度を制限し、産業用温度範囲と調達ライフサイクルは製品のサービス寿命に合わせる必要がある',
    ],
  },
  zh: {
    title: '2026本地LLM边缘AI芯片指南：量产产品里真正装得下的是什么',
    subtitle: '为嵌入式产品选型算力,与为桌面选一块GPU是完全不同的问题。',
    footer: 'PromptQuorum 指南',
    bullets: [
      '桌面LLM指南针对VRAM优化每秒token数——边缘产品针对固定热设计工作点优化每token焦耳数',
      'Hailo-10H:据Hailo公开的基准数据,运行Qwen2-1.5B-Instruct时达到9.45 tok/s,平均功耗2.1W',
      'NVIDIA Jetson AGX Thor(T5000):稀疏FP4算力2,070 TFLOPS,功耗40~130W,128GB LPDDR5X内存,带宽273GB/s',
      '内存带宽决定生成速度,工业温度范围和供货生命周期必须匹配产品的使用寿命',
    ],
  },
  es: {
    title: 'Silicio de IA de borde para LLM locales 2026: qué cabe realmente en un producto en producción',
    subtitle: 'Especificar el cómputo de un producto embebido es un problema distinto a elegir una GPU de escritorio.',
    footer: 'Guía de PromptQuorum',
    bullets: [
      'Las guías de LLM de escritorio optimizan tokens/s frente a la VRAM — los productos de borde optimizan julios/token frente a un punto de diseño térmico fijo',
      'Hailo-10H: 9.45 tok/s en Qwen2-1.5B-Instruct con 2.1W de potencia media, según Hailo',
      'NVIDIA Jetson AGX Thor (T5000): 2.070 TFLOPS FP4 disperso, 40–130W, 128GB de LPDDR5X a 273GB/s',
      'El ancho de banda de memoria limita la velocidad de generación; el rango de temperatura industrial y el ciclo de vida deben ajustarse a la vida útil del producto',
    ],
  },
  pt: {
    title: 'Silício de IA de borda para LLMs locais 2026: o que realmente cabe num produto de produção',
    subtitle: 'Especificar o hardware de um produto embarcado é um problema diferente de escolher uma GPU de desktop.',
    footer: 'Guia PromptQuorum',
    bullets: [
      'Guias de LLM de desktop otimizam tokens/s em relação à VRAM — produtos de borda otimizam joules/token em relação a um ponto de projeto térmico fixo',
      'Hailo-10H: 9.45 tok/s no Qwen2-1.5B-Instruct com 2.1W de potência média, segundo dados da Hailo',
      'NVIDIA Jetson AGX Thor (T5000): 2.070 TFLOPS FP4 esparso, 40–130W, 128GB de LPDDR5X a 273GB/s',
      'A largura de banda de memória limita a geração; a faixa de temperatura industrial e o ciclo de vida devem corresponder à vida útil do produto',
    ],
  },
  ar: {
    title: 'شرائح الذكاء الاصطناعي الطرفي لنماذج اللغة المحلية 2026: ما الذي يناسب فعلاً منتجاً جاهزاً للشحن',
    subtitle: 'تحديد الحوسبة لمنتج مدمج مشكلة مختلفة تماماً عن اختيار بطاقة GPU لجهاز مكتبي.',
    footer: 'دليل PromptQuorum',
    bullets: [
      'أدلة نماذج اللغة لسطح المكتب تُحسِّن الرموز/ثانية مقابل VRAM — أما المنتجات الطرفية فتُحسِّن الجول/رمز مقابل نقطة تصميم حرارية ثابتة',
      'Hailo-10H: 9.45 رمزاً/ثانية على Qwen2-1.5B-Instruct بمتوسط طاقة 2.1 واط، وفقاً لبيانات Hailo المنشورة',
      'NVIDIA Jetson AGX Thor (T5000): 2,070 تيرافلوبس FP4 متناثر، 40–130 واط، 128 غيغابايت LPDDR5X بسرعة 273 غيغابايت/ثانية',
      'عرض النطاق الترددي للذاكرة يحدد سرعة التوليد، ويجب أن يطابق نطاق درجة الحرارة الصناعي ودورة حياة الشريحة عمر خدمة المنتج',
    ],
  },
  ko: {
    title: '로컬 LLM을 위한 엣지 AI 실리콘 2026: 실제로 양산 제품에 들어가는 것은 무엇인가',
    subtitle: '임베디드 제품의 컴퓨팅을 선정하는 일은 데스크톱용 GPU를 고르는 것과는 전혀 다른 문제입니다.',
    footer: 'PromptQuorum 가이드',
    bullets: [
      '데스크톱 LLM 가이드는 VRAM 대비 초당 토큰 수를 최적화하지만, 엣지 제품은 고정된 열설계 기준점 대비 토큰당 줄(J)을 최적화합니다',
      'Hailo-10H: Hailo가 공개한 벤치마크 데이터에 따르면 Qwen2-1.5B-Instruct에서 평균 전력 2.1W로 9.45 tok/s를 기록',
      'NVIDIA Jetson AGX Thor(T5000): 희소 FP4 기준 2,070 TFLOPS, 40~130W, 273GB/s 대역폭의 128GB LPDDR5X',
      '메모리 대역폭이 생성 속도를 결정하며, 산업용 온도 범위와 부품 수명 주기는 제품의 서비스 수명과 맞아야 합니다',
    ],
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer, bullets: spec.bullets }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${lang}: HTTP ${res.status} ${text.slice(0, 300)}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = `public/images/${SLUG}-hero-${lang}.png`;
  const fs = await import('node:fs/promises');
  await fs.writeFile(outPath, buf);
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    console.log(`=== ${lang} ===`);
    await generate(lang, spec);
  }
  console.log('done');
})();
