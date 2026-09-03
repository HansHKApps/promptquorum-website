#!/usr/bin/env node
// One-off generator for librechat-review-2026 hero images, all 9 languages.
const BASE = 'http://localhost:3500';
const SPECS = {
  en: {
    title: 'LibreChat Review 2026: Self-Hosted ChatGPT Alternative for Local LLMs',
    subtitle: 'LibreChat is a free, MIT-licensed, self-hosted chat interface with agents, MCP tool support, and a RAG API. Connect it to Ollama, LocalAI, vLLM, or LM Studio and run it entirely on local models, with no per-token cost and no data leaving your machine.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'LibreChat im Test 2026: Selbst gehostete ChatGPT-Alternative für lokale LLMs',
    subtitle: 'LibreChat ist eine kostenlose, MIT-lizenzierte, selbst gehostete Chat-Oberfläche mit Agenten, MCP-Unterstützung und RAG-API. Verbinden Sie es mit Ollama, LocalAI, vLLM oder LM Studio für Chat komplett ohne Kosten pro Token und ohne Datenabfluss.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'LibreChat : avis 2026 sur l\'alternative à ChatGPT auto-hébergée pour LLM locaux',
    subtitle: 'LibreChat est une interface de chat gratuite, sous licence MIT et auto-hébergée, avec agents, outils MCP et API RAG. Connectez-la à Ollama, LocalAI, vLLM ou LM Studio pour un chat entièrement local, sans coût par jeton ni données sortantes.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'LibreChatレビュー2026：ローカルLLM向けセルフホスト型ChatGPT代替',
    subtitle: 'LibreChatは無料・MITライセンスのセルフホスト型チャットインターフェースで、エージェント、MCPツール対応、RAG APIを備えています。Ollama、LocalAI、vLLM、LM Studioに接続すれば、トークン課金なし・データが端末外に出ないプライベートなセルフホスト型ChatGPTクローンとして動作します。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'LibreChat 2026评测：面向本地 LLM 的自托管 ChatGPT 替代方案',
    subtitle: 'LibreChat 是一款免费、MIT 许可的自托管聊天界面，具备智能体、MCP 工具支持和 RAG API。连接 Ollama、LocalAI、vLLM 或 LM Studio，即可实现无按 token 计费、数据不出设备的本地聊天体验。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'LibreChat 2026: reseña de la alternativa a ChatGPT autoalojada para LLM locales',
    subtitle: 'LibreChat es una interfaz de chat gratuita, con licencia MIT y autoalojable, con agentes, herramientas MCP y una API de RAG. Conéctala a Ollama, LocalAI, vLLM o LM Studio para un chat totalmente local, sin coste por token y sin salida de datos.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'LibreChat 2026: análise da alternativa ao ChatGPT auto-hospedada para LLMs locais',
    subtitle: 'O LibreChat é uma interface de chat gratuita, com licença MIT e auto-hospedável, com agentes, ferramentas MCP e uma API de RAG. Conecte-o ao Ollama, LocalAI, vLLM ou LM Studio para um chat totalmente local, sem custo por token e sem saída de dados.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة LibreChat 2026: بديل ChatGPT المستضاف ذاتياً للنماذج المحلية',
    subtitle: 'LibreChat واجهة دردشة مجانية ومفتوحة المصدر بترخيص MIT وقابلة للاستضافة الذاتية، مع عملاء ذكيين ودعم أدوات MCP وواجهة RAG API. اربطها بـOllama أو LocalAI أو vLLM أو LM Studio لتعمل بالكامل على نماذج محلية بلا تكلفة API وبلا خروج بيانات من جهازك أبداً.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'LibreChat 리뷰 2026: 로컬 LLM을 위한 셀프호스팅 ChatGPT 대안',
    subtitle: 'LibreChat는 무료이며 MIT 라이선스의 셀프호스팅 채팅 인터페이스로, 에이전트, MCP 도구 지원, RAG API를 갖췄습니다. Ollama, LocalAI, vLLM, LM Studio에 연결하면 토큰당 비용 없이 데이터가 기기 밖으로 나가지 않는 완전한 로컬 채팅이 가능합니다.',
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
  const path = `public/images/librechat-review-2026-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  const only = process.argv.slice(2);
  const entries = only.length ? Object.entries(SPECS).filter(([l]) => only.includes(l)) : Object.entries(SPECS);
  for (const [lang, spec] of entries) {
    await generate(lang, spec);
  }
  console.log('done');
})();
