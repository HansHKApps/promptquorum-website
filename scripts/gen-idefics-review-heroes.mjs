#!/usr/bin/env node
// One-off hero generator for idefics-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'Idefics Review (2026): HuggingFace\'s Open Vision-Language Models',
    subtitle: 'An open reproduction of DeepMind\'s Flamingo — Idefics vs Idefics2 vs Idefics3, license nuances and real VRAM needs.',
    bullets: [
      'Three generations: Idefics (9B/80B), Idefics2 (8B), Idefics3 (8B)',
      'Idefics3 is the current pick: strongest OCR and document understanding',
      'License varies by generation: research-only, Apache-2.0, or Llama 3.1 terms',
      'Needs ~18-20 GB VRAM at float16 — heavier than LLaVA 7B',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Idefics-Test (2026): HuggingFace\'s offene Vision-Language-Modelle',
    subtitle: 'Eine offene Nachbildung von DeepMinds Flamingo — Idefics vs Idefics2 vs Idefics3, Lizenznuancen und echter VRAM-Bedarf.',
    bullets: [
      'Drei Generationen: Idefics (9B/80B), Idefics2 (8B), Idefics3 (8B)',
      'Idefics3 ist die aktuelle Wahl: stärkstes OCR und Dokumentenverständnis',
      'Lizenz variiert je Generation: nur Forschung, Apache-2.0 oder Llama-3.1-Bedingungen',
      'Benötigt ca. 18-20 GB VRAM bei Float16 — schwerer als LLaVA 7B',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Avis sur Idefics (2026) : les modèles vision-langage ouverts de HuggingFace',
    subtitle: 'Une reproduction ouverte de Flamingo de DeepMind — Idefics vs Idefics2 vs Idefics3, nuances de licence et besoins réels en VRAM.',
    bullets: [
      'Trois générations : Idefics (9B/80B), Idefics2 (8B), Idefics3 (8B)',
      'Idefics3 est le choix actuel : meilleur OCR et compréhension de documents',
      'La licence varie selon la génération : recherche uniquement, Apache-2.0, ou conditions Llama 3.1',
      'Nécessite ~18-20 Go de VRAM en float16 — plus lourd que LLaVA 7B',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Análisis de Idefics (2026): los modelos de visión-lenguaje abiertos de HuggingFace',
    subtitle: 'Una reproducción abierta de Flamingo de DeepMind — Idefics vs Idefics2 vs Idefics3, matices de licencia y necesidades reales de VRAM.',
    bullets: [
      'Tres generaciones: Idefics (9B/80B), Idefics2 (8B), Idefics3 (8B)',
      'Idefics3 es la opción actual: mejor OCR y comprensión de documentos',
      'La licencia varía según la generación: solo investigación, Apache-2.0, o condiciones Llama 3.1',
      'Necesita ~18-20 GB de VRAM en float16 — más pesado que LLaVA 7B',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Idefics レビュー(2026):HuggingFaceのオープンなビジョン言語モデル',
    subtitle: 'DeepMindのFlamingoのオープン再現——Idefics vs Idefics2 vs Idefics3、ライセンスの注意点と実際のVRAM要件。',
    bullets: [
      '3世代:Idefics(9B/80B)、Idefics2(8B)、Idefics3(8B)',
      'Idefics3が現在の推奨:最も強力なOCRと文書理解',
      'ライセンスは世代により異なる:研究専用、Apache-2.0、またはLlama 3.1の条件',
      'float16で約18〜20GBのVRAMが必要——LLaVA 7Bより重い',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Análise do Idefics (2026): os modelos de visão-linguagem abertos da HuggingFace',
    subtitle: 'Uma reprodução aberta do Flamingo da DeepMind — Idefics vs Idefics2 vs Idefics3, nuances de licença e necessidades reais de VRAM.',
    bullets: [
      'Três gerações: Idefics (9B/80B), Idefics2 (8B), Idefics3 (8B)',
      'Idefics3 é a escolha atual: melhor OCR e compreensão de documentos',
      'A licença varia por geração: apenas pesquisa, Apache-2.0, ou termos Llama 3.1',
      'Precisa de ~18-20 GB de VRAM em float16 — mais pesado que o LLaVA 7B',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Idefics (2026): نماذج الرؤية-اللغة المفتوحة من HuggingFace',
    subtitle: 'نسخة مفتوحة من Flamingo الخاص بـ DeepMind — Idefics مقابل Idefics2 مقابل Idefics3، فروق الترخيص ومتطلبات VRAM الفعلية.',
    bullets: [
      'ثلاثة أجيال: Idefics (9B/80B)، وIdefics2 (8B)، وIdefics3 (8B)',
      'Idefics3 هو الخيار الحالي: أقوى تعرف ضوئي وفهم مستندات',
      'يختلف الترخيص حسب الجيل: للأبحاث فقط، أو Apache-2.0، أو شروط Llama 3.1',
      'يحتاج نحو 18-20 غيغابايت VRAM بصيغة float16 — أثقل من LLaVA 7B',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'Idefics评测(2026):HuggingFace开源视觉语言模型',
    subtitle: '对DeepMind Flamingo的开源复现——Idefics vs Idefics2 vs Idefics3,许可证细节与真实VRAM需求。',
    bullets: [
      '三代模型:Idefics(9B/80B)、Idefics2(8B)、Idefics3(8B)',
      'Idefics3是当前推荐:最强的OCR与文档理解能力',
      '许可证因代际而异:仅限研究、Apache-2.0,或Llama 3.1条款',
      'float16下约需18-20GB VRAM——比LLaVA 7B更重',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'Idefics 리뷰(2026): HuggingFace의 오픈 비전-언어 모델',
    subtitle: 'DeepMind Flamingo의 오픈소스 재현 — Idefics vs Idefics2 vs Idefics3, 라이선스 세부 사항과 실제 VRAM 요구 사항.',
    bullets: [
      '세 세대: Idefics(9B/80B), Idefics2(8B), Idefics3(8B)',
      'Idefics3가 현재 권장: 가장 강력한 OCR과 문서 이해',
      '라이선스는 세대별로 다름: 연구 전용, Apache-2.0, 또는 Llama 3.1 조건',
      'float16에서 약 18-20GB VRAM 필요 — LLaVA 7B보다 무거움',
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
    const outPath = `${OUT_DIR}/idefics-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
