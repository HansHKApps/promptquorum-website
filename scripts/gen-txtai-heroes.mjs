#!/usr/bin/env node
// One-off hero generator for txtai-embedded-vector-database-review (all 9 locales).
const BASE = 'http://localhost:3415';

const SPECS = {
  en: {
    title: 'txtai Review 2026: The Embedded Vector Database That Skips the Server',
    subtitle: 'txtai combines a vector database, semantic search, RAG pipelines, and LLM workflows in one Python package that runs embedded in your process, like SQLite, instead of requiring a separate server. Apache 2.0 licensed and maintained by NeuML, it supports both local LLMs and API-based models through the same pipeline interface.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'txtai im Test 2026: Vektordatenbank ohne separaten Server',
    subtitle: 'txtai vereint Vektordatenbank, semantische Suche, RAG-Pipelines und LLM-Workflows in einem Python-Paket, das eingebettet im eigenen Prozess läuft — wie SQLite, statt einen separaten Server zu benötigen. Apache-2.0-lizenziert und von NeuML gepflegt, unterstützt es lokale und API-basierte LLMs über dieselbe Schnittstelle.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'txtai : la base vectorielle embarquée, sans serveur à déployer (2026)',
    subtitle: 'txtai combine base vectorielle, recherche sémantique, pipelines RAG et workflows LLM dans un seul paquet Python qui s\'exécute dans le processus de l\'application, comme SQLite, sans serveur séparé. Sous licence Apache 2.0 et maintenu par NeuML, il prend en charge les LLM locaux et par API via la même interface.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'txtai比較2026:サーバー不要の組み込みベクトルDB',
    subtitle: 'txtaiはベクトルデータベース、セマンティック検索、RAGパイプライン、LLMワークフローを1つのPythonパッケージに統合し、SQLiteのようにアプリケーションプロセス内に組み込まれて動作する。別サーバーは不要。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'txtai 2026评测:无需服务器的嵌入式向量数据库',
    subtitle: 'txtai将向量数据库、语义搜索、RAG流水线和LLM工作流整合进一个Python包,像SQLite一样嵌入应用进程内运行,无需单独部署服务器。采用Apache 2.0许可证,由NeuML维护,同时支持本地与API模型。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'txtai 2026: la base de datos vectorial embebida que no necesita servidor',
    subtitle: 'txtai combina base de datos vectorial, búsqueda semántica, pipelines RAG y flujos de trabajo LLM en un solo paquete Python que se ejecuta embebido en el proceso, como SQLite, sin servidor separado. Con licencia Apache 2.0 y mantenido por NeuML, soporta LLM locales y por API mediante la misma interfaz.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'txtai 2026: o banco de dados vetorial embutido que dispensa servidor',
    subtitle: 'O txtai combina banco de dados vetorial, busca semântica, pipelines RAG e workflows de LLM em um único pacote Python que roda embutido no processo, como o SQLite, sem servidor separado. Com licença Apache 2.0 e mantido pela NeuML, suporta LLMs locais e por API pela mesma interface.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة txtai 2026: قاعدة بيانات متجهية مضمّنة بلا خادم',
    subtitle: 'تجمع txtai بين قاعدة بيانات متجهية وبحث دلالي وخطوط أنابيب RAG وسير عمل نماذج اللغة الكبيرة في حزمة Python واحدة تعمل مضمّنة داخل العملية، مثل SQLite، دون خادم منفصل. مرخّصة بموجب Apache 2.0 وتصونها NeuML، وتدعم نماذج اللغة المحلية والمعتمدة على واجهة برمجة التطبيقات عبر الواجهة نفسها.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'txtai 2026 리뷰: 서버 없는 임베디드 벡터 DB',
    subtitle: 'txtai는 벡터 데이터베이스, 시맨틱 검색, RAG 파이프라인, LLM 워크플로를 하나의 Python 패키지로 통합해 SQLite처럼 프로세스 안에 내장되어 실행되며, 별도 서버가 필요 없다.',
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';

async function main() {
  for (const [lang, spec] of Object.entries(SPECS)) {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, ...spec }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[${lang}] FAILED ${res.status}: ${text}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = `${OUT_DIR}/txtai-embedded-vector-database-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
