#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SPECS = {
  en: {
    title: 'Off Grid AI Review (2026): Cross-Platform Local AI',
    subtitle: 'Free, open-source, no-account AI that runs entirely on-device on iOS, Android, macOS, and Windows. Reports 180,000+ combined downloads and 3,000+ GitHub stars, but only 26 App Store ratings — this review checks both pictures directly before deciding if it is worth installing.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Off Grid AI Test (2026): Plattformübergreifende lokale KI',
    subtitle: 'Kostenlose, quelloffene KI ohne Konto, die vollständig auf dem Gerät läuft — auf iOS, Android, macOS und Windows. Über 180.000 Downloads und 3.000+ GitHub-Sterne, aber nur 26 App-Store-Bewertungen — dieser Test prüft beide Bilder direkt.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Avis Off Grid AI (2026) : IA locale multiplateforme',
    subtitle: 'IA gratuite, open source et sans compte, exécutée entièrement sur l\'appareil sur iOS, Android, macOS et Windows. Plus de 180 000 téléchargements et 3 000+ étoiles GitHub, mais seulement 26 avis App Store — cet avis vérifie les deux images directement.',
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de Off Grid AI (2026): IA local multiplataforma',
    subtitle: 'IA gratuita, de código abierto y sin cuenta que se ejecuta completamente en el dispositivo en iOS, Android, macOS y Windows. Más de 180.000 descargas y 3.000+ estrellas en GitHub, pero solo 26 valoraciones en la App Store — esta reseña verifica ambas imágenes directamente.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Análise do Off Grid AI (2026): IA local multiplataforma',
    subtitle: 'IA gratuita, de código aberto e sem conta que roda inteiramente no dispositivo em iOS, Android, macOS e Windows. Mais de 180.000 downloads e 3.000+ estrelas no GitHub, mas apenas 26 avaliações na App Store — esta análise verifica os dois quadros diretamente.',
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'Off Grid AIレビュー（2026年）：クロスプラットフォームローカルAI',
    subtitle: 'iOS・Android・macOS・Windows対応の無料・オープンソース・アカウント不要AI。累計18万件以上のダウンロードと3,000以上のGitHubスターを持つ一方、App Storeのレビューはわずか26件——本レビューは両方の実態を直接検証する。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Off Grid AI评测（2026年）：跨平台本地AI',
    subtitle: '面向iOS、Android、macOS和Windows的免费开源、无需账号AI，完全在设备本地运行。累计下载超18万次、GitHub星标超3000，但App Store仅26条评分——本评测直接核实这两方面的情况。',
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة Off Grid AI (2026): ذكاء اصطناعي محلي عابر للمنصات',
    subtitle: 'تطبيق مجاني ومفتوح المصدر ولا يتطلب حسابًا يعمل بالكامل على الجهاز عبر iOS وAndroid وmacOS وWindows. أكثر من 180 ألف تنزيل و3,000+ نجمة على GitHub، لكن 26 تقييمًا فقط على App Store — تتحقق هذه المراجعة من الصورتين مباشرة.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Off Grid AI 리뷰 (2026년): 크로스플랫폼 로컬 AI',
    subtitle: 'iOS, Android, macOS, Windows에서 완전히 기기 내에서 실행되는 무료 오픈소스 계정 불필요 AI. 누적 18만 건 이상의 다운로드와 GitHub 스타 3,000개 이상을 보유했지만 App Store 평가는 26개뿐 — 이 리뷰는 두 그림을 모두 직접 검증한다.',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/off-grid-ai-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
