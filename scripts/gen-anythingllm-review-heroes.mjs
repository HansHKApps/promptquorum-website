#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SPECS = {
  'anythingllm-review': {
    en: { title: "AnythingLLM Review: Open-Source RAG and Document Chat", subtitle: '', bullets: ["Free and open-source; the official GitHub LICENSE is the MIT License with no paid tier for the desktop app or self-hosted Docker deployment", "Documents are organized into isolated \"workspaces,\" each with its own chat history, connected LLM, and document set", "Supports many LLM providers — Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI, and Google Gemini — so it can run fully offline or with a cloud API key"], footer: "PromptQuorum Guide" },
    de: { title: "AnythingLLM Review: Open-Source-RAG und Dokumenten-Chat", subtitle: '', bullets: ["Kostenlos und quelloffen; die offizielle GitHub-LICENSE ist die MIT-Lizenz ohne kostenpflichtige Stufe für Desktop-App oder selbst gehostetes Docker-Deployment", "Dokumente werden in isolierten \"Workspaces\" organisiert, jeweils mit eigenem Chatverlauf, verbundenem LLM und Dokumentenbestand", "Unterstützt viele LLM-Anbieter — Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI und Google Gemini — läuft also vollständig offline oder mit Cloud-API-Schlüssel"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Avis AnythingLLM : RAG et chat documentaire open source", subtitle: '', bullets: ["Gratuit et open source ; le fichier LICENSE officiel sur GitHub est la licence MIT, sans palier payant pour l'application de bureau ou le déploiement Docker auto-hébergé", "Les documents sont organisés en \"espaces de travail\" isolés, chacun avec son propre historique de chat, LLM connecté et jeu de documents", "Prend en charge de nombreux fournisseurs de LLM — Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI et Google Gemini"], footer: "Guide PromptQuorum" },
    es: { title: "Reseña de AnythingLLM: RAG y chat documental de código abierto", subtitle: '', bullets: ["Gratuito y de código abierto; el archivo LICENSE oficial de GitHub es la licencia MIT, sin nivel de pago para la app de escritorio ni el despliegue Docker autoalojado", "Los documentos se organizan en \"espacios de trabajo\" aislados, cada uno con su propio historial de chat, LLM conectado y conjunto de documentos", "Admite muchos proveedores de LLM — Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI y Google Gemini"], footer: "Guía de PromptQuorum" },
    ja: { title: "AnythingLLMレビュー：オープンソースのRAG・ドキュメントチャット", subtitle: '', bullets: ["無料でオープンソース。公式GitHub LICENSEはMITライセンスで、デスクトップアプリやセルフホストDocker展開に有料プランはない", "ドキュメントは独立した「ワークスペース」に整理され、それぞれ独自のチャット履歴、接続LLM、ドキュメントセットを持つ", "Ollama、LM Studio、LocalAI、OpenAI、Anthropic、Azure OpenAI、Google Geminiなど多くのLLMプロバイダーをサポート"], footer: "PromptQuorumガイド" },
    zh: { title: "AnythingLLM 评测：开源 RAG 与文档聊天", subtitle: '', bullets: ["免费且开源；官方 GitHub LICENSE 为 MIT 许可证，桌面应用或自托管 Docker 部署均无付费层级", "文档被组织到相互隔离的\"工作区\"中，每个工作区都有自己的聊天记录、所连接的 LLM 及文档集", "支持众多 LLM 提供商——Ollama、LM Studio、LocalAI、OpenAI、Anthropic、Azure OpenAI 和 Google Gemini"], footer: "PromptQuorum 指南" },
    pt: { title: "Análise do AnythingLLM: RAG e chat de documentos open source", subtitle: '', bullets: ["Gratuito e de código aberto; o arquivo LICENSE oficial no GitHub é a licença MIT, sem nível pago para o app de desktop ou a implantação Docker autogerenciada", "Os documentos são organizados em \"workspaces\" isolados, cada um com seu próprio histórico de chat, LLM conectado e conjunto de documentos", "Suporta muitos provedores de LLM — Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI e Google Gemini"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة AnythingLLM: استرجاع معزز بالتوليد ودردشة مستندات مفتوحة المصدر", subtitle: '', bullets: ["مجاني ومفتوح المصدر؛ ملف الترخيص الرسمي LICENSE على GitHub هو رخصة MIT بلا مستوى مدفوع لتطبيق سطح المكتب أو نشر Docker ذاتي الاستضافة", "تُنظَّم المستندات في \"مساحات عمل\" معزولة، لكل منها سجل دردشة خاص ونموذج لغة متصل ومجموعة مستندات", "يدعم العديد من موفري نماذج اللغة — Ollama وLM Studio وLocalAI وOpenAI وAnthropic وAzure OpenAI وGoogle Gemini"], footer: "دليل PromptQuorum" },
    ko: { title: "AnythingLLM 리뷰: 오픈소스 RAG 및 문서 채팅", subtitle: '', bullets: ["무료이며 오픈소스; 공식 GitHub LICENSE는 MIT 라이선스로, 데스크톱 앱이나 자체 호스팅 Docker 배포에 유료 등급이 없음", "문서는 격리된 \"워크스페이스\"로 정리되며, 각각 자체 채팅 기록, 연결된 LLM, 문서 세트를 가짐", "Ollama, LM Studio, LocalAI, OpenAI, Anthropic, Azure OpenAI, Google Gemini를 포함한 다양한 LLM 제공업체를 지원"], footer: "PromptQuorum 가이드" },
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
