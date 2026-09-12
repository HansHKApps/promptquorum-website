#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SPECS = {
  "bmo-chatbot-review": {
    "en": { "title": "BMO Chatbot Review 2026: Lightweight Local AI Sidebar for Obsidian", "subtitle": "Free, MIT-licensed Obsidian plugin with a note-scoped AI chat sidebar and local-model support via Ollama and LM Studio, plus OpenAI, Anthropic, Gemini, Mistral AI, and OpenRouter. 532 GitHub stars, but no commits or tagged releases since September 2024 — verify current maintenance status directly before relying on it.", "footer": "PromptQuorum Guide" },
    "de": { "title": "BMO Chatbot Review 2026: Schlanke lokale KI-Seitenleiste für Obsidian", "subtitle": "Kostenloses, MIT-lizenziertes Obsidian-Plugin mit notizbezogener KI-Chat-Seitenleiste und lokaler Modellunterstützung über Ollama und LM Studio, dazu OpenAI, Anthropic, Gemini, Mistral AI und OpenRouter. 532 GitHub-Sterne, aber seit September 2024 keine Commits oder Releases mehr — Wartungsstatus vor Nutzung selbst prüfen.", "footer": "PromptQuorum-Leitfaden" },
    "fr": { "title": "BMO Chatbot Review 2026 : Barre latérale IA locale légère pour Obsidian", "subtitle": "Plugin Obsidian gratuit sous licence MIT avec une barre latérale de chat IA limitée à la note ouverte et une prise en charge locale via Ollama et LM Studio, plus OpenAI, Anthropic, Gemini, Mistral AI et OpenRouter. 532 étoiles GitHub, mais aucun commit ni release depuis septembre 2024 — vérifiez l'état de maintenance avant d'en dépendre.", "footer": "Guide PromptQuorum" },
    "ja": { "title": "BMO Chatbotレビュー2026: Obsidian向け軽量ローカルAIサイドバー", "subtitle": "無料・MITライセンスのObsidianプラグインで、ノート単位のAIチャットサイドバーとOllama・LM Studio経由のローカルモデル対応を備える。GitHubスター532、しかし2024年9月以降コミットもリリースも無し。", "footer": "PromptQuorumガイド" },
    "zh": { "title": "BMO Chatbot评测2026：Obsidian的轻量级本地AI侧边栏", "subtitle": "免费、MIT许可的Obsidian插件，具有仅针对当前笔记的AI聊天侧边栏，并通过Ollama和LM Studio支持本地模型。GitHub星标532个，但自2024年9月以来无任何提交或发布版本。", "footer": "PromptQuorum 指南" },
    "es": { "title": "BMO Chatbot Review 2026: Barra lateral de IA local ligera para Obsidian", "subtitle": "Plugin de Obsidian gratuito con licencia MIT, con una barra lateral de chat de IA limitada a la nota abierta y soporte local vía Ollama y LM Studio, además de OpenAI, Anthropic, Gemini, Mistral AI y OpenRouter. 532 estrellas en GitHub, pero sin commits ni releases desde septiembre de 2024 — verifique el mantenimiento antes de depender de él.", "footer": "Guía de PromptQuorum" },
    "pt": { "title": "BMO Chatbot Review 2026: Barra lateral de IA local leve para o Obsidian", "subtitle": "Plugin gratuito do Obsidian sob licença MIT, com barra lateral de chat de IA limitada à nota aberta e suporte local via Ollama e LM Studio, além de OpenAI, Anthropic, Gemini, Mistral AI e OpenRouter. 532 estrelas no GitHub, mas sem commits ou releases desde setembro de 2024 — verifique a manutenção antes de depender dele.", "footer": "Guia PromptQuorum" },
    "ar": { "title": "مراجعة BMO Chatbot 2026: شريط جانبي محلي خفيف للذكاء الاصطناعي في Obsidian", "subtitle": "إضافة مجانية لـObsidian مرخّصة بموجب MIT، تضم شريطًا جانبيًا للدردشة بالذكاء الاصطناعي مقتصرًا على الملاحظة المفتوحة ودعمًا محليًا عبر Ollama وLM Studio، إضافة إلى OpenAI وAnthropic وGemini وMistral AI وOpenRouter. 532 نجمة على GitHub، لكن دون التزامات أو إصدارات منذ سبتمبر 2024 — تحققوا من حالة الصيانة قبل الاعتماد عليها.", "footer": "دليل PromptQuorum" },
    "ko": { "title": "BMO Chatbot 리뷰 2026: Obsidian용 가벼운 로컬 AI 사이드바", "subtitle": "무료 MIT 라이선스의 Obsidian 플러그인으로, 열려 있는 노트에 한정된 AI 채팅 사이드바와 Ollama·LM Studio를 통한 로컬 지원을 제공합니다. GitHub 스타 532개, 하지만 2024년 9월 이후 커밋이나 릴리스가 없습니다.", "footer": "PromptQuorum 가이드" }
  }
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}
(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();
