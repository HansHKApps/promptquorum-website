#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SPECS = {
  "text-generator-review": {
    "en": { "title": "Text Generator Review 2026: Template-Driven AI Writing for Obsidian", "subtitle": "Free, MIT-licensed Obsidian plugin for template-driven AI text generation, with local-model support via any OpenAI-compatible endpoint. 1,985 GitHub stars, actively maintained with a commit as recent as August 2026 and release v0.8.7 in April 2026.", "footer": "PromptQuorum Guide" },
    "de": { "title": "Text Generator Review 2026: Vorlagenbasiertes KI-Schreiben für Obsidian", "subtitle": "Kostenloses, MIT-lizenziertes Obsidian-Plugin für vorlagenbasierte KI-Textgenerierung, mit lokaler Modellunterstützung über jeden OpenAI-kompatiblen Endpunkt. 1.985 GitHub-Sterne, aktiv gepflegt mit Commit im August 2026 und Release v0.8.7 im April 2026.", "footer": "PromptQuorum-Leitfaden" },
    "fr": { "title": "Text Generator Review 2026 : Écriture IA pilotée par modèles pour Obsidian", "subtitle": "Plugin Obsidian gratuit sous licence MIT pour la génération de texte IA pilotée par modèles, avec prise en charge locale via tout point de terminaison compatible OpenAI. 1 985 étoiles GitHub, activement maintenu, commit en août 2026 et release v0.8.7 en avril 2026.", "footer": "Guide PromptQuorum" },
    "ja": { "title": "Text Generatorレビュー2026: Obsidian向けテンプレート駆動AIライティング", "subtitle": "無料・MITライセンスのObsidianプラグインで、任意のOpenAI互換エンドポイント経由のローカルモデル対応を備えたテンプレート駆動AIテキスト生成。GitHubスター1,985、2026年8月にもコミットあり、v0.8.7は2026年4月公開。", "footer": "PromptQuorumガイド" },
    "zh": { "title": "Text Generator评测2026：面向Obsidian的模板驱动AI写作", "subtitle": "免费、MIT许可的Obsidian插件，用于模板驱动的AI文本生成，通过任何兼容OpenAI的端点支持本地模型。GitHub星标1,985个，积极维护，2026年8月有提交，v0.8.7于2026年4月发布。", "footer": "PromptQuorum 指南" },
    "es": { "title": "Text Generator Review 2026: Escritura con IA basada en plantillas para Obsidian", "subtitle": "Plugin de Obsidian gratuito con licencia MIT para generación de texto con IA basada en plantillas, con soporte local vía cualquier endpoint compatible con OpenAI. 1.985 estrellas en GitHub, mantenido activamente, commit en agosto de 2026 y release v0.8.7 en abril de 2026.", "footer": "Guía de PromptQuorum" },
    "pt": { "title": "Text Generator Review 2026: Escrita com IA orientada por modelos para o Obsidian", "subtitle": "Plugin gratuito do Obsidian sob licença MIT para geração de texto por IA orientada por modelos, com suporte local via qualquer endpoint compatível com OpenAI. 1.985 estrelas no GitHub, ativamente mantido, commit em agosto de 2026 e release v0.8.7 em abril de 2026.", "footer": "Guia PromptQuorum" },
    "ar": { "title": "مراجعة Text Generator 2026: كتابة بالذكاء الاصطناعي قائمة على القوالب لـObsidian", "subtitle": "إضافة مجانية لـObsidian مرخّصة بموجب MIT لتوليد نص بالذكاء الاصطناعي قائم على القوالب، مع دعم محلي عبر أي نقطة نهاية متوافقة مع OpenAI. 1,985 نجمة على GitHub، تحت صيانة نشطة، بالتزام في أغسطس 2026 وإصدار v0.8.7 في أبريل 2026.", "footer": "دليل PromptQuorum" },
    "ko": { "title": "Text Generator 리뷰 2026: Obsidian용 템플릿 기반 AI 글쓰기", "subtitle": "무료 MIT 라이선스의 Obsidian 플러그인으로, 모든 OpenAI 호환 엔드포인트를 통한 로컬 지원을 갖춘 템플릿 기반 AI 텍스트 생성. GitHub 스타 1,985개, 2026년 8월에도 커밋, v0.8.7은 2026년 4월 공개.", "footer": "PromptQuorum 가이드" }
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
