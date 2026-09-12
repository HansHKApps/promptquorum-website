#!/usr/bin/env node
const BASE = 'http://localhost:3400';
const SLUG = 'hyperlink-nexa-review';
const SPECS = {
  es: {
    title: 'Hyperlink (Nexa AI) Reseña 2026: Búsqueda de Archivos en el Dispositivo',
    subtitle: 'Aplicación de escritorio gratuita de Nexa AI que indexa tus PDF, notas, capturas de pantalla y diapositivas, y responde preguntas en lenguaje natural con citas a la fuente — procesamiento en el dispositivo, sin subir nada a la nube. Código cerrado; macOS y Windows.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Hyperlink (Nexa AI) Análise 2026: Busca de Arquivos no Dispositivo',
    subtitle: 'Aplicativo de desktop gratuito da Nexa AI que indexa seus PDFs, notas, capturas de tela e slides, e responde perguntas em linguagem natural com citações da fonte — processamento no dispositivo, sem enviar nada para a nuvem. Código fechado; macOS e Windows.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Hyperlink (Nexa AI) 2026: بحث الملفات على الجهاز',
    subtitle: 'تطبيق سطح مكتب مجاني من Nexa AI يفهرس ملفات PDF والملاحظات ولقطات الشاشة والشرائح، ويجيب عن الأسئلة بلغة طبيعية مع الاستشهاد بالمصدر — معالجة على الجهاز، دون رفع أي شيء إلى السحابة. برنامج مغلق المصدر؛ متوفر لنظامي macOS وWindows.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Hyperlink(Nexa AI) 리뷰 2026: 온디바이스 파일 검색',
    subtitle: 'Nexa AI의 무료 데스크톱 앱으로 PDF, 메모, 스크린샷, 슬라이드를 인덱싱하고 출처를 인용해 자연어 질문에 답합니다 — 처리는 기기 내에서 이루어지며 클라우드 업로드가 없습니다. 클로즈드 소스 소프트웨어이며 macOS와 Windows에서 실행됩니다.',
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
