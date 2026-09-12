#!/usr/bin/env node
const BASE = 'http://localhost:3900';
const SPECS = {
  'kilo-code-review': {
    en: { title: "Kilo Code Review: Open-Source Coding Agent", subtitle: '', bullets: ["Free, open-source (MIT) AI coding agent for VS Code, JetBrains, and CLI, with over 27,000 GitHub stars as of this review", "Connects to local models via Ollama or LM Studio, or a self-hosted OpenAI-compatible endpoint like vLLM or SGLang, alongside 500+ hosted models", "Acquired by Anaconda in July 2026; existing plans and support were unchanged at the time of the deal"], footer: "PromptQuorum Guide" },
    de: { title: "Kilo Code Review: Open-Source-Coding-Agent", subtitle: '', bullets: ["Kostenloser, quelloffener (MIT) KI-Coding-Agent für VS Code, JetBrains und CLI, mit über 27.000 GitHub-Stars zum Zeitpunkt dieser Review", "Verbindet sich über Ollama oder LM Studio mit lokalen Modellen, oder mit einem selbst gehosteten OpenAI-kompatiblen Endpunkt wie vLLM oder SGLang, zusätzlich zu 500+ gehosteten Modellen", "Im Juli 2026 von Anaconda übernommen; bestehende Pläne und Support blieben zum Zeitpunkt des Deals unverändert"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Kilo Code : agent de codage open source", subtitle: '', bullets: ["Agent de codage IA gratuit et open source (MIT) pour VS Code, JetBrains et CLI, avec plus de 27 000 étoiles GitHub au moment de cette review", "Se connecte à des modèles locaux via Ollama ou LM Studio, ou à un point de terminaison auto-hébergé compatible OpenAI comme vLLM ou SGLang, en plus de 500+ modèles hébergés", "Racheté par Anaconda en juillet 2026 ; les offres et le support existants n'ont pas changé au moment du rachat"], footer: "Guide PromptQuorum" },
    es: { title: "Kilo Code: agente de codificación open source", subtitle: '', bullets: ["Agente de codificación con IA gratuito y open source (MIT) para VS Code, JetBrains y CLI, con más de 27.000 estrellas en GitHub al momento de esta review", "Se conecta a modelos locales vía Ollama o LM Studio, o a un endpoint autoalojado compatible con OpenAI como vLLM o SGLang, además de más de 500 modelos alojados", "Adquirido por Anaconda en julio de 2026; los planes y el soporte existentes no cambiaron en el momento de la adquisición"], footer: "Guía de PromptQuorum" },
    pt: { title: "Kilo Code: agente de codificação open source", subtitle: '', bullets: ["Agente de codificação com IA gratuito e open source (MIT) para VS Code, JetBrains e CLI, com mais de 27.000 estrelas no GitHub no momento desta review", "Conecta-se a modelos locais via Ollama ou LM Studio, ou a um endpoint auto-hospedado compatível com OpenAI como vLLM ou SGLang, além de mais de 500 modelos hospedados", "Adquirido pela Anaconda em julho de 2026; planos e suporte existentes permaneceram inalterados no momento do negócio"], footer: "Guia PromptQuorum" },
    ja: { title: "Kilo Codeレビュー：オープンソースコーディングエージェント", subtitle: '', bullets: ["VS Code、JetBrains、CLI向けの無料・オープンソース（MIT）AIコーディングエージェント。本レビュー時点で27,000以上のGitHubスターを獲得", "Ollama、LM Studio経由でローカルモデルに接続、またはvLLMやSGLangなど自己ホスト型のOpenAI互換エンドポイントに接続可能。500以上のホスト型モデルにも対応", "2026年7月にAnacondaに買収。買収時点で既存のプランとサポートは変更なし"], footer: "PromptQuorumガイド" },
    zh: { title: "Kilo Code评测：开源编码代理", subtitle: '', bullets: ["面向VS Code、JetBrains和CLI的免费开源（MIT）AI编码代理，截至本评测已获得超过27,000颗GitHub星", "可通过Ollama或LM Studio连接本地模型，或连接vLLM、SGLang等自托管的OpenAI兼容端点，此外还支持500多个托管模型", "已于2026年7月被Anaconda收购；收购时现有计划和支持保持不变"], footer: "PromptQuorum 指南" },
    ar: { title: "مراجعة Kilo Code: وكيل برمجة مفتوح المصدر", subtitle: '', bullets: ["وكيل برمجة بالذكاء الاصطناعي مجاني ومفتوح المصدر (MIT) لـ VS Code وJetBrains وCLI، بأكثر من 27,000 نجمة على GitHub وقت هذه المراجعة", "يتصل بالنماذج المحلية عبر Ollama أو LM Studio، أو بنقطة نهاية ذاتية الاستضافة متوافقة مع OpenAI مثل vLLM أو SGLang، إلى جانب أكثر من 500 نموذج مستضاف", "استحوذت عليه Anaconda في يوليو 2026؛ ولم تتغيّر الخطط والدعم الحاليان وقت الصفقة"], footer: "دليل PromptQuorum" },
    ko: { title: "Kilo Code 리뷰: 오픈소스 코딩 에이전트", subtitle: '', bullets: ["VS Code, JetBrains, CLI용 무료 오픈소스(MIT) AI 코딩 에이전트로, 이 리뷰 작성 시점 기준 27,000개 이상의 GitHub 스타 보유", "Ollama나 LM Studio를 통해 로컬 모델에 연결하거나 vLLM, SGLang 같은 자체 호스팅 OpenAI 호환 엔드포인트에 연결 가능하며, 500개 이상의 호스팅 모델도 지원", "2026년 7월 Anaconda에 인수됨; 인수 당시 기존 요금제와 지원은 변경되지 않음"], footer: "PromptQuorum 가이드" },
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
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
