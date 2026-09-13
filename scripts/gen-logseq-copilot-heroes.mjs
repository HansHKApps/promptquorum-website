#!/usr/bin/env node
// One-off generator for logseq-copilot-review hero images (9 languages).
const BASE = 'http://localhost:3400';
const SPECS = {
  en: {
    title: 'logseq-copilot Review 2026: Local-Model AI Chat Inside Logseq',
    subtitle: 'A free, MIT-licensed community plugin by developer jarodise that adds AI chat blocks and slash commands to Logseq. Connects to fully local models via Ollama and LM Studio, plus Google Gemini and x.ai Grok. 17 GitHub stars, manual install.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'logseq-copilot Review 2026: KI-Chat mit lokalem Modell in Logseq',
    subtitle: 'Ein kostenloses MIT-Community-Plugin von Entwickler jarodise, das KI-Chat-Blöcke und Slash-Befehle zu Logseq hinzufügt. Verbindet sich mit lokalen Modellen über Ollama und LM Studio sowie Google Gemini und x.ai Grok. 17 GitHub-Sterne, manuelle Installation.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'logseq-copilot Review 2026 : chat IA avec modèle local dans Logseq',
    subtitle: 'Un plugin communautaire gratuit sous licence MIT par le développeur jarodise qui ajoute des blocs de chat IA et des commandes slash à Logseq. Se connecte à des modèles locaux via Ollama et LM Studio, ainsi qu\'à Google Gemini et x.ai Grok. 17 étoiles GitHub, installation manuelle.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'logseq-copilot レビュー2026：Logseq内のローカルモデルAIチャット',
    subtitle: '開発者jarodiseによる無料のMITライセンスコミュニティプラグイン。OllamaやLM Studio、Google Gemini、x.ai Grokと連携しLogseqにAIチャットブロックとスラッシュコマンドを追加。GitHubスター17、手動インストール。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'logseq-copilot评测2026：在Logseq中使用本地模型AI聊天',
    subtitle: '开发者jarodise打造的免费MIT许可社区插件，通过Ollama、LM Studio、Google Gemini和x.ai Grok为Logseq添加AI聊天块和斜杠命令。GitHub星标17，手动安装。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'logseq-copilot Review 2026: chat con IA de modelo local en Logseq',
    subtitle: 'Un plugin comunitario gratuito con licencia MIT del desarrollador jarodise que añade bloques de chat IA y comandos de barra a Logseq. Se conecta a modelos locales vía Ollama y LM Studio, además de Google Gemini y x.ai Grok. 17 estrellas en GitHub, instalación manual.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'logseq-copilot Review 2026: chat com IA de modelo local no Logseq',
    subtitle: 'Um plugin comunitário gratuito com licença MIT do desenvolvedor jarodise que adiciona blocos de chat com IA e comandos de barra ao Logseq. Conecta-se a modelos locais via Ollama e LM Studio, além do Google Gemini e x.ai Grok. 17 estrelas no GitHub, instalação manual.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة logseq-copilot 2026: دردشة بالذكاء الاصطناعي بنموذج محلي داخل Logseq',
    subtitle: 'إضافة مجتمعية مجانية بترخيص MIT من المطور jarodise تضيف كتل دردشة بالذكاء الاصطناعي وأوامر شرطة مائلة إلى Logseq. تتصل بنماذج محلية عبر Ollama وLM Studio، إضافة إلى Google Gemini وx.ai Grok. 17 نجمة على GitHub، تثبيت يدوي.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'logseq-copilot 리뷰 2026: Logseq 안에서 로컬 모델로 AI 채팅하기',
    subtitle: '개발자 jarodise가 만든 무료 MIT 라이선스 커뮤니티 플러그인으로, Ollama와 LM Studio, Google Gemini, x.ai Grok을 통해 Logseq에 AI 채팅 블록과 슬래시 명령을 추가합니다. GitHub 스타 17개, 수동 설치.',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} - ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/logseq-copilot-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  console.log('=== logseq-copilot-review ===');
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
