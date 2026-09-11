#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SPECS = {
  en: {
    title: 'Pydantic AI Review 2026: Features, Structured Outputs, Alternatives',
    subtitle: 'Type-safe Python agent framework from the Pydantic team',
    bullets: [
      'Free, MIT-licensed Python agent framework by the Pydantic team',
      'Type-safe outputs validated against a Pydantic model at runtime',
      'Dependency injection for tools, model-agnostic across providers',
      '19,865 GitHub stars, install with pip install pydantic-ai',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Pydantic AI Review 2026: Funktionen, Structured Outputs, Alternativen',
    subtitle: 'Typsicheres Python-Agenten-Framework des Pydantic-Teams',
    bullets: [
      'Kostenloses, MIT-lizenziertes Python-Agenten-Framework des Pydantic-Teams',
      'Typsichere Ausgaben, zur Laufzeit gegen ein Pydantic-Modell validiert',
      'Dependency Injection für Tools, modellunabhängig über Anbieter hinweg',
      '19.865 GitHub-Stars, Installation mit pip install pydantic-ai',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Pydantic AI Review 2026 : Fonctionnalités, Structured Outputs, Alternatives',
    subtitle: "Framework Python d'agents typé de l'équipe Pydantic",
    bullets: [
      "Framework Python d'agents gratuit et sous licence MIT de l'équipe Pydantic",
      "Sorties typées, validées par rapport à un modèle Pydantic à l'exécution",
      "Injection de dépendances pour les outils, agnostique du modèle",
      '19 865 étoiles GitHub, installation avec pip install pydantic-ai',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Pydantic AI Review 2026: Funciones, Structured Outputs, Alternativas',
    subtitle: 'Framework Python de agentes con tipos seguros del equipo Pydantic',
    bullets: [
      'Framework Python de agentes gratuito y con licencia MIT del equipo Pydantic',
      'Salidas con tipos, validadas frente a un modelo Pydantic en tiempo de ejecución',
      'Inyección de dependencias para herramientas, agnóstico del modelo',
      '19.865 estrellas en GitHub, instalación con pip install pydantic-ai',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Pydantic AI Review 2026: Recursos, Structured Outputs, Alternativas',
    subtitle: 'Framework Python de agentes com tipos seguros da equipe Pydantic',
    bullets: [
      'Framework Python de agentes gratuito e licenciado sob MIT da equipe Pydantic',
      'Saídas tipadas, validadas em relação a um modelo Pydantic em tempo de execução',
      'Injeção de dependências para ferramentas, agnóstico de modelo',
      '19.865 estrelas no GitHub, instalação com pip install pydantic-ai',
    ],
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'Pydantic AI レビュー2026：機能、Structured Outputs、代替ツール',
    subtitle: 'Pydanticチームによる型安全なPythonエージェントフレームワーク',
    bullets: [
      'Pydanticチームによる無料・MITライセンスのPythonエージェントフレームワーク',
      '実行時にPydanticモデルで検証される型安全な出力',
      'ツール向け依存性注入、モデル非依存でプロバイダーを横断',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Pydantic AI 评测2026：功能、Structured Outputs、替代方案',
    subtitle: 'Pydantic团队推出的类型安全Python智能体框架',
    bullets: [
      'Pydantic团队开发的免费MIT许可证Python智能体框架',
      '运行时依据Pydantic模型验证的类型安全输出',
      '面向工具的依赖注入，跨提供商模型无关',
      '19,865个GitHub星标，通过pip install pydantic-ai安装',
    ],
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة Pydantic AI 2026: الميزات وStructured Outputs والبدائل',
    subtitle: 'إطار عمل Python آمن النوع للوكلاء من فريق Pydantic',
    bullets: [
      'إطار عمل Python مجاني برخصة MIT للوكلاء من فريق Pydantic',
      'مخرجات آمنة النوع تُحقَّق مقابل نموذج Pydantic وقت التشغيل',
      'حَقن التبعيات للأدوات، ومستقل عن النموذج عبر المزوّدين',
      '19,865 نجمة على GitHub، التثبيت عبر pip install pydantic-ai',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Pydantic AI 리뷰 2026: 기능, Structured Outputs, 대안',
    subtitle: 'Pydantic 팀의 타입 안전 Python 에이전트 프레임워크',
    bullets: [
      'Pydantic 팀이 만든 무료 MIT 라이선스 Python 에이전트 프레임워크',
      '실행 시점에 Pydantic 모델로 검증되는 타입 안전 출력',
      '도구를 위한 의존성 주입, 공급자 전반의 모델 독립성',
      'GitHub 스타 19,865개, pip install pydantic-ai로 설치',
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
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = `public/images/pydantic-ai-review-hero-${lang}.png`;
  await import('node:fs/promises').then((fs) => fs.writeFile(outPath, buf));
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
