#!/usr/bin/env node
// One-off hero generator for animatediff-video-generation-guide-2026 (all 9 locales).
const BASE = 'http://localhost:3400';

const SPECS = {
  en: {
    title: 'AnimateDiff Guide 2026: Animate Any Stable Diffusion Model',
    subtitle:
      'AnimateDiff is an open-source motion module that adds animation capability to existing Stable Diffusion checkpoints without retraining the base model. Pair it with an SD1.5 or SDXL checkpoint you already use, and it injects frame-to-frame coherence so the same style comes out as a short animated clip. Runs free on your own GPU via ComfyUI or AUTOMATIC1111, Apache 2.0 licensed.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'AnimateDiff 2026: Stable-Diffusion-Modelle animieren, Kosten & VRAM',
    subtitle:
      'AnimateDiff ist ein Open-Source-Motion-Modul, das vorhandene Stable-Diffusion-Checkpoints animationsfähig macht, ohne das Basismodell neu zu trainieren. Kombinieren Sie es mit einem bereits genutzten SD1.5- oder SDXL-Checkpoint, und es fügt zeitliche Kohärenz zwischen den Frames hinzu. Läuft kostenlos auf der eigenen GPU über ComfyUI oder AUTOMATIC1111, Apache-2.0-lizenziert.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'AnimateDiff : animer un modèle Stable Diffusion (guide 2026)',
    subtitle:
      "AnimateDiff est un module de mouvement open source qui ajoute une capacité d'animation aux checkpoints Stable Diffusion existants sans réentraîner le modèle de base. Combinez-le avec un checkpoint SD1.5 ou SDXL déjà utilisé pour obtenir un court clip animé dans le même style. Fonctionne gratuitement sur votre GPU via ComfyUI ou AUTOMATIC1111, sous licence Apache 2.0.",
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'AnimateDiffでStable Diffusionを動画化：2026年ガイド',
    subtitle:
      'AnimateDiffは、既存のStable Diffusionチェックポイントにアニメーション機能を追加するオープンソースのモーションモジュールで、ベースモデルの再学習は不要です。ComfyUIまたはAUTOMATIC1111で自分のGPU上で無料実行でき、Apache 2.0ライセンスです。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'AnimateDiff 2026指南：让Stable Diffusion模型动起来',
    subtitle:
      'AnimateDiff是一款开源运动模块，可为现有的Stable Diffusion检查点添加动画能力，无需重新训练基础模型。通过ComfyUI或AUTOMATIC1111在您自己的GPU上免费运行，采用Apache 2.0许可证。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'AnimateDiff 2026: anima cualquier modelo Stable Diffusion',
    subtitle:
      'AnimateDiff es un módulo de movimiento de código abierto que añade capacidad de animación a checkpoints de Stable Diffusion existentes sin reentrenar el modelo base. Combínalo con un checkpoint SD1.5 o SDXL que ya uses para obtener un breve clip animado en el mismo estilo. Funciona gratis en tu propia GPU vía ComfyUI o AUTOMATIC1111, licencia Apache 2.0.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'AnimateDiff 2026: anime qualquer modelo Stable Diffusion',
    subtitle:
      'O AnimateDiff é um módulo de movimento de código aberto que adiciona capacidade de animação a checkpoints existentes do Stable Diffusion sem retreinar o modelo base. Combine-o com um checkpoint SD1.5 ou SDXL que você já usa para obter um clipe animado curto no mesmo estilo. Roda de graça na sua GPU via ComfyUI ou AUTOMATIC1111, licença Apache 2.0.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'دليل AnimateDiff 2026: حرّك أي نموذج Stable Diffusion',
    subtitle:
      'AnimateDiff هو وحدة حركة مفتوحة المصدر تضيف قدرة على التحريك إلى نقاط فحص Stable Diffusion الموجودة دون إعادة تدريب النموذج الأساسي. اجمعه مع نقطة فحص SD1.5 أو SDXL تستخدمها بالفعل للحصول على مقطع متحرك قصير بنفس الأسلوب. يعمل مجاناً على وحدة معالجة الرسومات الخاصة بك عبر ComfyUI أو AUTOMATIC1111، برخصة Apache 2.0.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'AnimateDiff 2026 가이드: Stable Diffusion 모델 애니메이션화',
    subtitle:
      'AnimateDiff는 기존 Stable Diffusion 체크포인트에 애니메이션 기능을 추가하는 오픈소스 모션 모듈로, 기본 모델을 재학습할 필요가 없습니다. 이미 사용 중인 SD1.5 또는 SDXL 체크포인트와 결합해 같은 스타일의 짧은 애니메이션 클립을 만듭니다. ComfyUI나 AUTOMATIC1111을 통해 자신의 GPU에서 무료로 실행되며 Apache 2.0 라이선스입니다.',
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
    const outPath = `${OUT_DIR}/animatediff-video-generation-guide-2026-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
