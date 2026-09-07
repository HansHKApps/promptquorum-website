#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'jan-review': {
    en: { title: "Jan Review 2026: The Open-Source, Offline ChatGPT Alternative", subtitle: '', bullets: ["Jan is free and open-source; the official GitHub LICENSE is an Apache License 2.0 variant with an added attribution request, and jan.ai has no pricing page", "Runs local models through a built-in llama.cpp engine (MLX is available as an alternative engine on supported Apple Silicon systems)", "Connects to cloud providers — OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter — and to self-hosted backends like Ollama, vLLM, and LocalAI through OpenAI/Anthropic-compatible custom endpoints"], footer: "PromptQuorum Guide" },
    de: { title: "Jan Review 2026: Die Open-Source-Offline-Alternative zu ChatGPT", subtitle: '', bullets: ["Jan ist kostenlos und quelloffen; die offizielle GitHub-LICENSE ist eine Variante der Apache License 2.0 mit zusätzlicher Bitte um Namensnennung, und jan.ai hat keine Preisseite", "Führt lokale Modelle über eine eingebaute llama.cpp-Engine aus (MLX ist als alternative Engine auf unterstützten Apple-Silicon-Systemen verfügbar)", "Verbindet sich mit Cloud-Anbietern — OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter — sowie mit selbst gehosteten Backends wie Ollama, vLLM und LocalAI über OpenAI-/Anthropic-kompatible benutzerdefinierte Endpunkte"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Jan Review 2026 : L'alternative open source et hors ligne à ChatGPT", subtitle: '', bullets: ["Jan est gratuit et open source ; le fichier LICENSE officiel sur GitHub est une variante de la licence Apache 2.0 avec une demande d'attribution ajoutée, et jan.ai n'a pas de page tarifaire", "Exécute des modèles locaux via un moteur llama.cpp intégré (MLX est disponible comme moteur alternatif sur les systèmes Apple Silicon pris en charge)", "Se connecte à des fournisseurs cloud — OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter — et à des backends auto-hébergés comme Ollama, vLLM et LocalAI via des points de terminaison personnalisés compatibles OpenAI/Anthropic"], footer: "Guide PromptQuorum" },
    es: { title: "Jan Review 2026: La alternativa open source y offline a ChatGPT", subtitle: '', bullets: ["Jan es gratis y de código abierto; el LICENSE oficial de GitHub es una variante de la Apache License 2.0 con una solicitud de atribución añadida, y jan.ai no tiene página de precios", "Ejecuta modelos locales mediante un motor llama.cpp integrado (MLX está disponible como motor alternativo en sistemas Apple Silicon compatibles)", "Se conecta a proveedores en la nube — OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter — y a backends autoalojados como Ollama, vLLM y LocalAI mediante endpoints personalizados compatibles con OpenAI/Anthropic"], footer: "Guía de PromptQuorum" },
    ja: { title: "Jan レビュー 2026：オープンソースのオフラインChatGPT代替アプリ", subtitle: '', bullets: ["Janは無料でオープンソース。公式GitHubのLICENSEは帰属表示の要請が追加されたApache License 2.0の派生であり、jan.aiには料金ページがない", "内蔵のllama.cppエンジンでローカルモデルを実行（対応するApple Siliconシステムでは代替エンジンとしてMLXも利用可能）", "クラウドプロバイダー（OpenAI、Anthropic、Google Gemini、Groq、Mistral AI、Azure OpenAI、OpenRouter）と、Ollama・vLLM・LocalAIなどの自己ホスト型バックエンドにOpenAI/Anthropic互換のカスタムエンドポイント経由で接続可能"], footer: "PromptQuorumガイド" },
    zh: { title: "Jan 评测 2026：开源离线版 ChatGPT 替代方案", subtitle: '', bullets: ["Jan 免费开源；官方 GitHub LICENSE 是 Apache License 2.0 的一个变体，附加了署名请求条款，jan.ai 没有定价页面", "通过内置的llama.cpp引擎运行本地模型（在受支持的 Apple Silicon 系统上，MLX 可作为替代引擎）", "可连接云端提供商——OpenAI、Anthropic、Google Gemini、Groq、Mistral AI、Azure OpenAI、OpenRouter——也可通过 OpenAI/Anthropic 兼容的自定义端点连接 Ollama、vLLM、LocalAI 等自托管后端"], footer: "PromptQuorum 指南" },
    pt: { title: "Jan Review 2026: A alternativa open source e offline ao ChatGPT", subtitle: '', bullets: ["O Jan é gratuito e de código aberto; o LICENSE oficial no GitHub é uma variante da Apache License 2.0 com um pedido de atribuição adicionado, e o jan.ai não tem página de preços", "Roda modelos locais por meio de um mecanismo llama.cpp embutido (o MLX está disponível como mecanismo alternativo em sistemas Apple Silicon compatíveis)", "Conecta-se a provedores de nuvem — OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter — e a backends auto-hospedados como Ollama, vLLM e LocalAI por meio de endpoints personalizados compatíveis com OpenAI/Anthropic"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Jan لعام 2026: بديل مفتوح المصدر وغير متصل لـ ChatGPT", subtitle: '', bullets: ["Jan مجاني ومفتوح المصدر؛ ملف LICENSE الرسمي على GitHub هو نسخة معدّلة من رخصة Apache 2.0 مع طلب إضافي بذكر المصدر، ولا تملك jan.ai صفحة أسعار", "يشغّل النماذج المحلية عبر محرك llama.cpp مدمج (يتوفر MLX كمحرك بديل على أنظمة Apple Silicon المدعومة)", "يتصل بمزودي خدمات سحابية — OpenAI وAnthropic وGoogle Gemini وGroq وMistral AI وAzure OpenAI وOpenRouter — وبخلفيات مستضافة ذاتيًا مثل Ollama وvLLM وLocalAI عبر نقاط نهاية مخصصة متوافقة مع OpenAI/Anthropic"], footer: "دليل PromptQuorum" },
    ko: { title: "Jan 리뷰 2026: 오픈소스 오프라인 ChatGPT 대안", subtitle: '', bullets: ["Jan은 무료이며 오픈소스입니다. 공식 GitHub LICENSE는 저작자 표시 요청이 추가된 Apache License 2.0의 변형이며, jan.ai에는 가격 페이지가 없습니다", "내장된 llama.cpp 엔진을 통해 로컬 모델을 실행합니다(지원되는 Apple Silicon 시스템에서는 MLX를 대체 엔진으로 사용 가능)", "OpenAI, Anthropic, Google Gemini, Groq, Mistral AI, Azure OpenAI, OpenRouter 같은 클라우드 제공업체와, OpenAI/Anthropic 호환 사용자 지정 엔드포인트를 통해 Ollama, vLLM, LocalAI 같은 자체 호스팅 백엔드에 연결됩니다"], footer: "PromptQuorum 가이드" },
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
