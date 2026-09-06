#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'boltai-review': {
    en: { title: "BoltAI Review 2026: Native Mac AI App, Ollama Ready", subtitle: '', bullets: ["BoltAI connects to cloud AI providers (OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock) and to local models via Ollama and LM Studio", "It is sold as a one-time, perpetual-license purchase — Essential $79, Pro $99, Pro+ $199 — not a recurring subscription; a Team tier is $99/seat with an optional $79/seat/year renewal", "A free trial is available with no account required, though several features (voice dictation, image generation, document Q&A, agents, web search, code interpreter) are limited to paid tiers"], footer: "PromptQuorum Guide" },
    de: { title: "BoltAI Review 2026: Native Mac-KI-App mit Ollama-Support", subtitle: '', bullets: ["BoltAI verbindet sich mit Cloud-KI-Anbietern (OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock) und mit lokalen Modellen über Ollama und LM Studio", "Verkauft als einmaliger Kauf mit dauerhafter Lizenz — Essential $79, Pro $99, Pro+ $199 — kein wiederkehrendes Abonnement; eine Team-Stufe kostet $99/Sitz mit optionaler Verlängerung für $79/Sitz/Jahr", "Eine kostenlose Testversion ist ohne Konto verfügbar, wobei mehrere Funktionen (Sprachdiktat, Bildgenerierung, Dokumenten-Q&A, Agenten, Workflows, Websuche, Code-Interpreter) den kostenpflichtigen Stufen vorbehalten sind"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "BoltAI Avis 2026 : application IA native pour Mac, compatible Ollama", subtitle: '', bullets: ["BoltAI se connecte à des fournisseurs d'IA cloud (OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock) et à des modèles locaux via Ollama et LM Studio", "Vendue en achat unique avec licence perpétuelle — Essential 79 $, Pro 99 $, Pro+ 199 $ — pas d'abonnement récurrent ; une formule Team coûte 99 $/siège avec un renouvellement optionnel à 79 $/siège/an", "Un essai gratuit est disponible sans compte, bien que plusieurs fonctions (dictée vocale, génération d'images, questions-réponses sur documents, agents, workflows, recherche web, interpréteur de code) soient réservées aux formules payantes"], footer: "Guide PromptQuorum" },
    es: { title: "BoltAI Reseña 2026: app nativa de IA para Mac, compatible con Ollama", subtitle: '', bullets: ["BoltAI se conecta a proveedores de IA en la nube (OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock) y a modelos locales vía Ollama y LM Studio", "Se vende como compra única con licencia perpetua —Essential 79 $, Pro 99 $, Pro+ 199 $— sin suscripción recurrente; un plan Team cuesta 99 $/asiento con renovación anual opcional de 79 $/asiento/año", "Hay una prueba gratuita disponible sin cuenta, aunque varias funciones (dictado de voz, generación de imágenes, preguntas sobre documentos, agentes, workflows, búsqueda web, intérprete de código) están limitadas a los planes de pago"], footer: "Guía de PromptQuorum" },
    ja: { title: "BoltAIレビュー2026：Ollama対応のネイティブMac AIアプリ", subtitle: '', bullets: ["BoltAIはクラウドAIプロバイダー（OpenAI、Anthropic、Google、Mistral、Azure、Amazon Bedrock）と、Ollama・LM Studio経由のローカルモデルに接続する", "買い切り・永久ライセンスで販売される — Essential 79ドル、Pro 99ドル、Pro+ 199ドル — 定期サブスクリプションではない；Teamプランは1シート99ドルで、年間79ドル/シートの任意更新オプションあり", "無料トライアルはアカウント不要で利用できるが、音声入力、画像生成、ドキュメントQ&A、エージェント、ワークフロー、Web検索、コードインタープリターなど複数機能は有料プラン限定"], footer: "PromptQuorumガイド" },
    zh: { title: "BoltAI评测2026：支持Ollama的原生Mac AI应用", subtitle: '', bullets: ["BoltAI连接云端AI提供商（OpenAI、Anthropic、Google、Mistral、Azure、Amazon Bedrock）以及通过Ollama和LM Studio运行的本地模型", "以一次性买断、永久授权方式销售——Essential 79美元、Pro 99美元、Pro+ 199美元——不是持续订阅;Team档位为每席位99美元,可选每年79美元/席位续订", "提供无需账号的免费试用,但语音听写、图像生成、文档问答、代理、工作流、网络搜索、代码解释器等多项功能仅限付费档位"], footer: "PromptQuorum 指南" },
    pt: { title: "BoltAI Review 2026: app nativo de IA para Mac, com suporte a Ollama", subtitle: '', bullets: ["O BoltAI se conecta a provedores de IA em nuvem (OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock) e a modelos locais via Ollama e LM Studio", "Vendido como compra única com licença perpétua — Essential $79, Pro $99, Pro+ $199 — sem assinatura recorrente; um plano Team custa $99/assento com renovação anual opcional de $79/assento/ano", "Um teste gratuito está disponível sem conta, embora vários recursos (ditado por voz, geração de imagens, perguntas sobre documentos, agentes, workflows, busca na web, interpretador de código) sejam limitados aos planos pagos"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة BoltAI 2026: تطبيق ذكاء اصطناعي أصلي لـ Mac يدعم Ollama", subtitle: '', bullets: ["يتصل BoltAI بمزوّدي الذكاء الاصطناعي السحابي (OpenAI وAnthropic وGoogle وMistral وAzure وAmazon Bedrock) وبالنماذج المحلية عبر Ollama وLM Studio", "يُباع كشراء لمرة واحدة بترخيص دائم — Essential بـ79 دولارًا، وPro بـ99 دولارًا، وPro+ بـ199 دولارًا — وليس اشتراكًا متكررًا؛ خطة Team تكلف 99 دولارًا لكل مقعد مع تجديد سنوي اختياري بـ79 دولارًا لكل مقعد", "تتوفر نسخة تجريبية مجانية دون الحاجة إلى حساب، رغم أن عدة ميزات (الإملاء الصوتي، توليد الصور، الإجابة عن أسئلة المستندات، الوكلاء، سير العمل، البحث على الويب، مفسّر الأكواد) مقتصرة على الخطط المدفوعة"], footer: "دليل PromptQuorum" },
    ko: { title: "BoltAI 리뷰 2026: Ollama를 지원하는 네이티브 Mac AI 앱", subtitle: '', bullets: ["BoltAI는 클라우드 AI 제공업체(OpenAI, Anthropic, Google, Mistral, Azure, Amazon Bedrock)와 Ollama, LM Studio를 통한 로컬 모델에 연결됩니다", "영구 라이선스가 있는 일회성 구매로 판매됩니다 — Essential 79달러, Pro 99달러, Pro+ 199달러 — 정기 구독이 아닙니다; Team 플랜은 좌석당 99달러이며, 좌석당 연간 79달러의 선택적 갱신이 가능합니다", "계정 없이 무료 체험판을 이용할 수 있지만, 음성 받아쓰기, 이미지 생성, 문서 질의응답, 에이전트, 워크플로, 웹 검색, 코드 인터프리터 등 여러 기능은 유료 플랜에서만 제공됩니다"], footer: "PromptQuorum 가이드" },
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
