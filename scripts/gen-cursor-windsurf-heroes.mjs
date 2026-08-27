#!/usr/bin/env node
// Hero image generation for cursor-vs-windsurf-vs-copilot-cline-2026, all 9 languages.
// Follows the pattern in scripts/gen-batch10-heroes.mjs.
const BASE = 'http://localhost:3000';
const SLUG = 'cursor-vs-windsurf-vs-copilot-cline-2026';

const SPECS = {
  en: {
    title: 'Best Agentic AI Coding Assistant 2026: Cursor vs Windsurf vs GitHub Copilot vs Cline',
    subtitle: 'Cursor is the best all-around agentic AI coding assistant for 2026 for most professional developers, GitHub Copilot is the safer default for GitHub/Azure teams, and Cline is the best free option with your own API key or a local model. Windsurf now costs the same as Cursor Pro.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Bester agentischer KI-Coding-Assistent 2026: Cursor vs. Windsurf vs. GitHub Copilot vs. Cline',
    subtitle: 'Cursor ist 2026 der beste Allround-KI-Coding-Assistent mit Agentenmodus, GitHub Copilot die sicherere Wahl für GitHub/Azure-Teams, und Cline die beste kostenlose Option mit eigenem API-Schlüssel oder lokalem Modell. Windsurf kostet inzwischen genauso viel wie Cursor Pro.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Meilleur assistant de code IA agentique 2026 : Cursor vs Windsurf vs GitHub Copilot vs Cline',
    subtitle: 'Cursor est le meilleur assistant de code IA agentique généraliste en 2026, GitHub Copilot le choix le plus sûr pour les équipes GitHub/Azure, et Cline la meilleure option gratuite avec votre propre clé API ou un modèle local. Windsurf coûte désormais le même prix que Cursor Pro.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: '2026年ベストのエージェント型AIコーディングアシスタント：Cursor対Windsurf対GitHub Copilot対Cline',
    subtitle: 'Cursorは多くのプロ開発者にとって最良の総合型エージェントAIコーディングアシスタント。GitHub CopilotはGitHub/Azureチームの無難な選択。ClineはAPIキーかローカルモデルで最良の無料選択肢。Windsurfは今やCursorと同価格。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: '2026年最佳智能体式AI编程助手：Cursor对比Windsurf对比GitHub Copilot对比Cline',
    subtitle: 'Cursor是2026年多数专业开发者综合最佳的智能体式AI编程助手，GitHub Copilot适合GitHub/Azure团队，Cline在自带API密钥或本地模型时是最佳免费选项。Windsurf现在与Cursor Pro同价。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Mejor asistente de código IA agéntico 2026: Cursor vs Windsurf vs GitHub Copilot vs Cline',
    subtitle: 'Cursor es el mejor asistente de código IA agéntico general en 2026, GitHub Copilot la opción más segura para equipos GitHub/Azure, y Cline la mejor opción gratuita con tu propia clave API o un modelo local. Windsurf ahora cuesta lo mismo que Cursor Pro.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Melhor Assistente de Código IA Agêntico 2026: Cursor vs Windsurf vs GitHub Copilot vs Cline',
    subtitle: 'O Cursor é o melhor assistente de código IA agêntico geral em 2026, o GitHub Copilot a opção mais segura para equipes GitHub/Azure, e o Cline a melhor opção gratuita com sua própria chave de API ou modelo local. O Windsurf agora custa o mesmo que o Cursor Pro.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'أفضل مساعد برمجة بالذكاء الاصطناعي الوكيلي 2026: Cursor مقابل Windsurf مقابل GitHub Copilot مقابل Cline',
    subtitle: 'Cursor هو أفضل مساعد برمجة بالذكاء الاصطناعي الوكيلي الشامل لعام 2026 لمعظم المطورين المحترفين، وGitHub Copilot هو الخيار الأكثر أماناً للفرق الموحّدة على GitHub أو Azure، وCline هو أفضل خيار مجاني مع مفتاح API خاص أو نموذج محلي عبر Ollama. أصبح Windsurf الآن بنفس سعر Cursor Pro بعد أن كان أرخص في وقت سابق من عام 2026.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '2026년 최고의 에이전틱 AI 코딩 어시스턴트: Cursor vs Windsurf vs GitHub Copilot vs Cline',
    subtitle: 'Cursor는 2026년 대다수 전문 개발자에게 가장 우수한 종합형 에이전틱 AI 코딩 어시스턴트이며, GitHub Copilot은 GitHub/Azure 팀에 안전한 선택, Cline은 자체 API 키나 로컬 모델을 쓸 때 최고의 무료 옵션입니다. Windsurf는 이제 Cursor Pro와 동일한 가격입니다.',
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
  const outPath = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(outPath, buf));
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
