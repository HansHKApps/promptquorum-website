#!/usr/bin/env node
// One-off hero generator for ollama-vision-models-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'Ollama Vision Models (2026): How to Actually Run Image Models Locally',
    subtitle: 'A practical guide to running vision-capable models through Ollama: real CLI/API syntax and which models are actually in its library.',
    bullets: [
      'Verified library: LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate and /api/chat accept base64 images in an `images` array',
      'Multimodal support since v0.1.15 (Dec 2023); new engine May 2026',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Ollama-Vision-Modelle (2026): So führen Sie Bildmodelle wirklich lokal aus',
    subtitle: 'Ein praktischer Leitfaden zum Ausführen von Vision-Modellen über Ollama: echte CLI-/API-Syntax und tatsächlich verfügbare Modelle.',
    bullets: [
      'Verifizierte Bibliothek: LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate und /api/chat akzeptieren Base64-Bilder im `images`-Array',
      'Multimodal-Support seit v0.1.15 (Dez. 2023); neue Engine Mai 2026',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Modèles de vision Ollama (2026) : comment exécuter des modèles d\'image en local',
    subtitle: 'Un guide pratique pour exécuter des modèles de vision via Ollama : syntaxe CLI/API réelle et modèles réellement disponibles.',
    bullets: [
      'Bibliothèque vérifiée : LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI : `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate et /api/chat acceptent des images base64 dans un tableau `images`',
      'Support multimodal depuis v0.1.15 (déc. 2023) ; nouveau moteur mai 2026',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Modelos de visión de Ollama (2026): cómo ejecutar modelos de imagen localmente',
    subtitle: 'Una guía práctica para ejecutar modelos de visión mediante Ollama: sintaxis real de CLI/API y modelos realmente disponibles.',
    bullets: [
      'Biblioteca verificada: LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate y /api/chat aceptan imágenes base64 en un array `images`',
      'Soporte multimodal desde v0.1.15 (dic. 2023); nuevo motor mayo 2026',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Ollamaのビジョンモデル(2026):画像モデルを実際にローカルで実行する方法',
    subtitle: 'Ollamaでビジョンモデルを実行する実践ガイド。実際のCLI/API構文と実際に利用可能なモデル。',
    bullets: [
      '検証済みライブラリ:LLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream',
      'CLI:`ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generateと/api/chatは`images`配列でbase64画像を受け付ける',
      'v0.1.15(2023年12月)以降マルチモーダル対応;2026年5月に新エンジン',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Modelos de Visão do Ollama (2026): como rodar modelos de imagem localmente',
    subtitle: 'Um guia prático para rodar modelos de visão pelo Ollama: sintaxe real de CLI/API e modelos realmente disponíveis.',
    bullets: [
      'Biblioteca verificada: LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate e /api/chat aceitam imagens base64 em um array `images`',
      'Suporte multimodal desde v0.1.15 (dez. 2023); novo mecanismo maio 2026',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'نماذج الرؤية في Ollama (2026): كيف تُشغّل نماذج الصور محليًا فعليًا',
    subtitle: 'دليل عملي لتشغيل نماذج الرؤية عبر Ollama: صيغة CLI/API فعلية والنماذج المتاحة فعليًا.',
    bullets: [
      'مكتبة موثقة: LLaVA وLlama 3.2 Vision وQwen2.5-VL وMiniCPM-V وMoondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      'يقبل /api/generate و/api/chat صور base64 ضمن مصفوفة `images`',
      'دعم متعدد الوسائط منذ v0.1.15 (ديسمبر 2023)؛ محرك جديد مايو 2026',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'Ollama视觉模型(2026):如何真正在本地运行图像模型',
    subtitle: '通过Ollama运行视觉模型的实用指南:真实的CLI/API语法与实际可用的模型。',
    bullets: [
      '已验证模型库:LLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream',
      'CLI:`ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate和/api/chat在`images`数组中接受base64图像',
      '自v0.1.15(2023年12月)起支持多模态;2026年5月推出新引擎',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'Ollama 비전 모델(2026): 이미지 모델을 로컬에서 실제로 실행하는 방법',
    subtitle: 'Ollama로 비전 모델을 실행하는 실전 가이드. 실제 CLI/API 문법과 실제로 사용 가능한 모델.',
    bullets: [
      '확인된 라이브러리: LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream',
      'CLI: `ollama run llava "describe this image: ./photo.jpg"`',
      '/api/generate와 /api/chat은 `images` 배열에 base64 이미지를 받음',
      'v0.1.15(2023년 12월)부터 멀티모달 지원; 2026년 5월 신규 엔진',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';

async function main() {
  for (const [lang, spec] of Object.entries(SPECS)) {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, ...spec }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[${lang}] FAILED ${res.status}: ${text}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = `${OUT_DIR}/ollama-vision-models-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
