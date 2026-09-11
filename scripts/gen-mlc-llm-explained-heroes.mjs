#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SLUG = 'mlc-llm-explained';
const SPECS = {
  en: {
    title: 'MLC LLM Explained 2026: Compile Once, Run on Phones and Browsers',
    subtitle: 'MLC LLM compiles a language model into an optimized runtime that can run natively on an iPhone, an Android phone, a web browser via WebGPU, or a desktop GPU — the same model, machine-compiled for each target, instead of one engine hand-tuned for a single platform.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'MLC LLM im Überblick 2026: Einmal kompilieren, überall laufen',
    subtitle: 'MLC LLM kompiliert ein Sprachmodell in eine optimierte Laufzeitumgebung, die nativ auf einem iPhone, einem Android-Telefon, im Webbrowser über WebGPU oder auf einer Desktop-GPU laufen kann — dasselbe Modell, für jedes Ziel maschinell kompiliert, statt einer Engine, die auf eine einzelne Plattform handoptimiert ist.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'MLC LLM expliqué 2026 : compiler une fois, exécuter partout',
    subtitle: 'MLC LLM compile un modèle de langage en un runtime optimisé qui peut s\'exécuter nativement sur un iPhone, un téléphone Android, un navigateur web via WebGPU ou un GPU de bureau — le même modèle, compilé pour chaque cible, plutôt qu\'un moteur ajusté à la main pour une seule plateforme.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'MLC LLM 解説 2026:一度コンパイルすれば、どこでも動く',
    subtitle: 'MLC LLMは言語モデルを最適化されたランタイムにコンパイルし、iPhone、Androidスマートフォン、WebGPU経由のWebブラウザ、デスクトップGPUでネイティブに実行できるようにする。単一プラットフォーム向けに手動最適化された1つのエンジンではなく、同じモデルを各ターゲットごとに機械的にコンパイルするアプローチである。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'MLC LLM 解析 2026:一次编译,处处运行',
    subtitle: 'MLC LLM 将语言模型编译为优化过的运行时,可在 iPhone、Android 手机、通过 WebGPU 运行的 Web 浏览器或桌面 GPU 上原生运行——同一个模型针对每个目标进行机器编译,而不是为单一平台手工调优的一个引擎。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'MLC LLM 2026: compilar una vez, ejecutar en todas partes',
    subtitle: 'MLC LLM compila un modelo de lenguaje en un runtime optimizado que puede ejecutarse de forma nativa en un iPhone, un teléfono Android, un navegador web vía WebGPU o una GPU de escritorio — el mismo modelo, compilado para cada destino, en vez de un motor ajustado a mano para una sola plataforma.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'MLC LLM 2026: compile uma vez, rode em qualquer lugar',
    subtitle: 'O MLC LLM compila um modelo de linguagem em um runtime otimizado que pode rodar nativamente em um iPhone, um celular Android, um navegador web via WebGPU ou uma GPU de desktop — o mesmo modelo, compilado por máquina para cada destino, em vez de uma engine ajustada manualmente para uma única plataforma.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح MLC LLM 2026: جمّع مرة واحدة، شغّل في كل مكان',
    subtitle: 'يقوم MLC LLM بتجميع نموذج لغوي إلى بيئة تشغيل محسَّنة يمكنها العمل بشكل أصلي على آيفون أو هاتف أندرويد أو متصفح ويب عبر WebGPU أو معالج رسومي لسطح المكتب — النموذج نفسه، مُجمَّع آليًا لكل هدف، بدلًا من محرك واحد مضبوط يدويًا لمنصة واحدة.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'MLC LLM 해설 2026: 한 번 컴파일하면 어디서든 실행',
    subtitle: 'MLC LLM은 언어 모델을 최적화된 런타임으로 컴파일하여 아이폰, 안드로이드 폰, WebGPU를 통한 웹 브라우저, 데스크톱 GPU에서 네이티브로 실행할 수 있게 한다 — 단일 플랫폼에 수동으로 맞춘 하나의 엔진이 아니라, 동일한 모델을 각 대상마다 기계적으로 컴파일하는 방식이다.',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
