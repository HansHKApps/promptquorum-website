#!/usr/bin/env node
// One-off hero generator for dspy-review (Agent Frameworks Series, article 11 of 14).
// Follows the same pattern as scripts/gen-batch10-heroes.mjs: one POST per locale to
// /api/hero-image, save PNG, then convert to lossless WebP and delete the PNG.
const BASE = 'http://localhost:3415';
const SLUG = 'dspy-review';

const SPECS = {
  en: {
    title: 'DSPy Review 2026: Features, Optimizers, Alternatives',
    subtitle: "DSPy is Stanford NLP's free, MIT-licensed framework for programming (not prompting) LLMs — Signatures, Modules, and optimizers like MIPROv2. Verified GitHub data and install steps.",
    bullets: [
      'MIT license — free to use, modify, and self-host, including commercially',
      'GitHub repository stanfordnlp/dspy has passed 37,900 stars and 3,300 forks (started at Stanford NLP in December 2022)',
      'PyPI package dspy, current release 3.3.1 (August 21, 2026) — actively maintained',
      'Core abstractions: Signatures (typed I/O), Modules (Predict, ChainOfThought, ReAct), Optimizers (BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'DSPy Review 2026: Funktionen, Optimizer, Alternativen',
    subtitle: 'DSPy ist Stanford NLPs kostenloses, MIT-lizenziertes Framework zum Programmieren (nicht Prompten) von LLMs — Signatures, Modules und Optimizer wie MIPROv2. Verifizierte GitHub-Daten und Installationsschritte.',
    bullets: [
      'MIT-Lizenz — kostenlos nutzbar, veränderbar und selbst hostbar, auch kommerziell',
      'GitHub-Repository stanfordnlp/dspy hat 37.900 Stars und 3.300 Forks überschritten (gestartet bei Stanford NLP im Dezember 2022)',
      'PyPI-Paket dspy, aktuelle Version 3.3.1 (21. August 2026) — aktiv gepflegt',
      'Kernabstraktionen: Signatures (typisierte Ein-/Ausgaben), Modules (Predict, ChainOfThought, ReAct), Optimizer (BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'DSPy : avis 2026, fonctionnalités et alternatives',
    subtitle: "DSPy est le framework gratuit de Stanford NLP, sous licence MIT, pour programmer (pas prompter) les LLM — Signatures, Modules et optimiseurs comme MIPROv2. Données GitHub vérifiées et étapes d'installation.",
    bullets: [
      'Licence MIT — utilisation, modification et auto-hébergement gratuits, y compris commercialement',
      'Le dépôt GitHub stanfordnlp/dspy a dépassé 37 900 étoiles et 3 300 forks (démarré à Stanford NLP en décembre 2022)',
      'Paquet PyPI dspy, version actuelle 3.3.1 (21 août 2026) — activement maintenu',
      'Abstractions principales : Signatures (E/S typées), Modules (Predict, ChainOfThought, ReAct), Optimizers (BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de DSPy 2026: funciones, optimizadores, alternativas',
    subtitle: 'DSPy es el framework gratuito de Stanford NLP, con licencia MIT, para programar (no dar prompts a) LLM — Signatures, Modules y optimizadores como MIPROv2. Datos de GitHub verificados y pasos de instalación.',
    bullets: [
      'Licencia MIT — gratuito para usar, modificar y autoalojar, incluso comercialmente',
      'El repositorio de GitHub stanfordnlp/dspy ha superado las 37.900 estrellas y 3.300 forks (iniciado en Stanford NLP en diciembre de 2022)',
      'Paquete de PyPI dspy, versión actual 3.3.1 (21 de agosto de 2026) — mantenido activamente',
      'Abstracciones principales: Signatures (E/S tipadas), Modules (Predict, ChainOfThought, ReAct), Optimizers (BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'DSPy: análise 2026, recursos e alternativas',
    subtitle: 'DSPy é o framework gratuito da Stanford NLP, licença MIT, para programar (não dar prompts a) LLMs — Signatures, Modules e otimizadores como MIPROv2. Dados verificados do GitHub e passos de instalação.',
    bullets: [
      'Licença MIT — gratuito para usar, modificar e hospedar você mesmo, inclusive comercialmente',
      'O repositório GitHub stanfordnlp/dspy já ultrapassou 37.900 estrelas e 3.300 forks (iniciado na Stanford NLP em dezembro de 2022)',
      'Pacote PyPI dspy, versão atual 3.3.1 (21 de agosto de 2026) — mantido ativamente',
      'Abstrações principais: Signatures (E/S tipadas), Modules (Predict, ChainOfThought, ReAct), Optimizers (BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'DSPyレビュー2026：機能・オプティマイザー・代替ツール',
    subtitle: 'DSPyはStanford NLPの無料・MITライセンスのLLMプログラミング（プロンプトではなく）フレームワーク——Signature、Module、MIPROv2などのオプティマイザー。検証済みGitHubデータとインストール手順。',
    bullets: [
      'MITライセンス——商用利用を含め、無料で利用・改変・セルフホスト可能',
      'GitHubリポジトリstanfordnlp/dspyは37,900以上のスターと3,300以上のフォークを獲得（2022年12月にStanford NLPで開始）',
      'PyPIパッケージdspy、現行バージョン3.3.1（2026年8月21日）——活発にメンテナンスされている',
      'コア抽象化：Signature（型付き入出力）、Module（Predict、ChainOfThought、ReAct）、Optimizer（BootstrapFewShot、MIPROv2、GEPA）',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'DSPy评测2026：功能、优化器与替代方案',
    subtitle: 'DSPy是斯坦福NLP出品的免费、MIT许可的LLM编程（而非提示）框架——Signature、Module与MIPROv2等优化器。已核实的GitHub数据与安装步骤。',
    bullets: [
      'MIT许可——可免费使用、修改和自托管，包括商业用途',
      'GitHub仓库stanfordnlp/dspy已突破37,900颗星标和3,300个fork（2022年12月在斯坦福NLP启动）',
      'PyPI包dspy，当前版本3.3.1（2026年8月21日）——持续积极维护',
      '核心抽象：Signature（类型化输入/输出）、Module（Predict、ChainOfThought、ReAct）、Optimizer（BootstrapFewShot、MIPROv2、GEPA）',
    ],
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة DSPy 2026: الميزات والمُحسِّنات والبدائل',
    subtitle: 'DSPy إطار عمل مجاني من Stanford NLP، مرخّص بموجب MIT، لبرمجة (لا مُوجَّهة) نماذج اللغة — Signatures وModules ومُحسِّنات مثل MIPROv2. بيانات GitHub موثّقة وخطوات تثبيت.',
    bullets: [
      'رخصة MIT — استخدام واستضافة ذاتية وتعديل مجاني، بما في ذلك الاستخدام التجاري',
      'تجاوز مستودع GitHub الخاص بـ stanfordnlp/dspy عتبة 37,900 نجمة و3,300 تفرّع (بدأ في Stanford NLP في ديسمبر 2022)',
      'حزمة PyPI باسم dspy، الإصدار الحالي 3.3.1 (21 أغسطس 2026) — تتم صيانتها بنشاط',
      'التجريدات الأساسية: Signatures (مدخلات/مخرجات مُحدَّدة النوع)، Modules (مثل Predict وChainOfThought وReAct)، Optimizers (مثل BootstrapFewShot وMIPROv2 وGEPA)',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'DSPy 리뷰 2026: 기능, 옵티마이저, 대안',
    subtitle: 'DSPy는 Stanford NLP의 무료 MIT 라이선스 LLM 프로그래밍(프롬프팅이 아닌) 프레임워크입니다 — Signature, Module, MIPROv2 같은 옵티마이저. 검증된 GitHub 데이터와 설치 방법.',
    bullets: [
      'MIT 라이선스 — 상업적 이용을 포함해 무료로 사용, 수정, 자체 호스팅 가능',
      'GitHub 저장소 stanfordnlp/dspy는 스타 37,900개, 포크 3,300개를 돌파(2022년 12월 Stanford NLP에서 시작)',
      'PyPI 패키지 dspy, 현재 버전 3.3.1(2026년 8월 21일) — 활발히 유지보수되고 있음',
      '핵심 추상화: Signature(타입 지정 입출력), Module(Predict, ChainOfThought, ReAct), Optimizer(BootstrapFewShot, MIPROv2, GEPA)',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${lang}: HTTP ${res.status} — ${text}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = `public/images/${SLUG}-hero-${lang}.png`;
  const fs = await import('node:fs/promises');
  await fs.writeFile(outPath, buf);
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  console.log(`=== ${SLUG} ===`);
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
