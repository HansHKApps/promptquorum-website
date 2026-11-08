// Local AI App Directory — CocoIndex (layer: rag / embeddings-indexing — incremental data pipeline framework for AI agents and RAG)
// Added 2026-11-08 on request (owner: "is cocoindex.io in the directory?"). Facts verified 2026-11-08 against: cocoindex.io (home, llms.txt,
// enterprise page, CocoIndex Code page), the docs corpus cocoindex.io/docs/llms-full.txt (overview, installation, quickstart, database path,
// embedding ops via LiteLLM/Ollama, sentence-transformers op, connectors list, anonymous-telemetry page), the GitHub repo
// cocoindex-io/cocoindex (README, license, releases, pushed_at via GitHub API) and PyPI (cocoindex 1.1.1). Not tested hands-on.
// MAKER: CocoIndex Inc (schema.org Organization on cocoindex.io; founded 2024). Apache-2.0 open-source core; Rust engine, Python API.
// SCOPE: CocoIndex is NOT an LLM runtime or a chat app. It is a framework that keeps vectors/tables/graphs in sync with changing sources
// (files, S3, Drive, Postgres, Kafka, ...) by reprocessing only the delta. "Local LLM" angle = embeddings via Ollama (nomic-embed-text,
// mxbai-embed-large, bge-m3, ...) or sentence-transformers, structured extraction with ollama/llama3.2 (docs: "no API key"), and local targets
// (SQLite, LanceDB, Postgres/pgvector, self-hosted Qdrant). Internal state is an embedded LMDB file (COCOINDEX_DB=./cocoindex.db), no server.
// LOCALITY = hybrid: everything can run on one machine, but the docs equally show OpenAI/Gemini keys, S3/BigQuery/Snowflake connectors and
// hosted targets; anonymous release-build telemetry (event name, OS/arch, Python version) goes to the Scarf gateway unless
// COCOINDEX_DISABLE_USAGE_TRACKING is set.
// PRICE = freemium: open-source core free; "CocoIndex Plus" (pip install cocoindex-plus, license key, shared Postgres state, Helm/Kubernetes)
// is a separate licensed edition with no price published (book-a-call). No figure recorded anywhere.
// RELEASES: GitHub release v1.1.1 published 2026-11-05; PyPI cocoindex 1.1.1 uploaded 2026-11-05 (requires Python >=3.11); repo pushed 2026-11-08.
// Docs say Python 3.11 to 3.13 (the GitHub README badge still says 3.10-3.13; PyPI metadata says >=3.11 — docs value used).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cocoindex',
  name: 'CocoIndex',
  categories: ['rag-frameworks', 'embeddings-indexing'],
  interfaces: ['library', 'cli'], // Python library plus the `cocoindex update` command
  locality: 'hybrid', // runs fully on one machine with Ollama/sentence-transformers and a local target, but cloud keys and connectors are equally documented
  platforms: ['mac', 'win', 'linux'], // docs: macOS 11+ arm64 / 10.12+ x86_64, Linux x86_64/arm64 glibc 2.28+, Windows 10+ x86_64
  worksWith: ['Ollama', 'sentence-transformers', 'LiteLLM', 'Docling', 'PostgreSQL (pgvector)', 'LanceDB', 'Qdrant', 'SQLite'],
  engine: 'library', // no inference engine of its own; embeddings/extraction go to Ollama, sentence-transformers or a cloud API you configure
  license: 'Apache-2.0', // open-source core; the separate CocoIndex Plus edition needs a license key
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs publish no RAM/VRAM floor for the framework; embedding/extraction models you pick decide it
  stars: 11834, // github.com/cocoindex-io/cocoindex, GitHub API 2026-11-08
  addedDate: '2026-11-08',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'cocoindex.io',
  storeLinks: {
    web: 'https://cocoindex.io',
    github: 'https://github.com/cocoindex-io/cocoindex',
  },
  installEffort: 'one-command',
  installEvidence: 'cocoindex.io (home page, read 2026-11-08): "pip install -U cocoindex"; docs/getting_started/installation also lists "uv add cocoindex" and "poetry add cocoindex" (Python 3.11 to 3.13); PyPI cocoindex 1.1.1 (2026-11-05) ships prebuilt wheels with the Rust engine. A pipeline additionally needs a small Python file and an embedding model or API of your choice (the quickstart adds "pip install docling" and a COCOINDEX_DB path)',
  tagline: {
    en: 'Open-source Python framework that keeps vector indexes and AI data pipelines up to date by reprocessing only what changed, with Ollama and local-embedding support',
    de: 'Quelloffenes Python-Framework, das Vektorindizes und KI-Datenpipelines aktuell hält, indem nur Geändertes neu verarbeitet wird, mit Unterstützung für Ollama und lokale Embeddings',
    fr: 'Framework Python open source qui maintient à jour les index vectoriels et les pipelines de données IA en ne retraitant que ce qui a changé, avec prise en charge d’Ollama et des embeddings locaux',
    ja: '変更分だけを再処理してベクトルインデックスやAIデータパイプラインを最新に保つ、オープンソースのPythonフレームワーク。Ollamaとローカル埋め込みに対応',
    zh: '开源 Python 框架，只重新处理发生变化的数据，让向量索引和 AI 数据管道保持最新，支持 Ollama 与本地嵌入模型',
    es: 'Framework de Python de código abierto que mantiene al día los índices vectoriales y los pipelines de datos de IA reprocesando solo lo que cambió, con compatibilidad con Ollama y embeddings locales',
    pt: 'Framework Python de código aberto que mantém atualizados os índices vetoriais e os pipelines de dados de IA reprocessando apenas o que mudou, com suporte a Ollama e embeddings locais',
    ar: 'إطار Python مفتوح المصدر يُبقي الفهارس المتجهة وخطوط بيانات الذكاء الاصطناعي محدّثة بإعادة معالجة ما تغيّر فقط، مع دعم Ollama والتضمينات المحلية',
    ko: '변경된 부분만 다시 처리해 벡터 인덱스와 AI 데이터 파이프라인을 최신 상태로 유지하는 오픈소스 Python 프레임워크로, Ollama와 로컬 임베딩을 지원',
  },
  reviewSlug: 'cocoindex-review',
  pqReview: {
    date: '2026-11-08',
    version: '1.1.1',
    versionSourceUrl: 'https://github.com/cocoindex-io/cocoindex/releases/tag/v1.1.1',
  },
  // Comparison attributes: each value verified against the project's official docs on 2026-11-08; a missing key = not stated there, never false.
  // visualBuilder false: the docs describe only a declarative Python API and a CLI — no drag-and-drop editor.
  // localLlm true: docs/ops/litellm list ollama/nomic-embed-text, ollama/mxbai-embed-large, ollama/bge-m3 ("No API key required") and the
  //   extraction example states ollama/llama3.2 "runs extraction locally with no API key"; docs/ops/sentence_transformers covers local embeddings.
  // multiVector true: docs/connectors list Postgres (pgvector), LanceDB, Qdrant, SQLite, Turbopuffer, Valkey, Zvec, Doris, SurrealDB as targets.
  // agents / dockerDeploy / apiServer left unset: the framework is not an agent framework, and Docker/Helm deployment is documented only for the
  //   separate CocoIndex Plus edition.
  compare: { visualBuilder: false, localLlm: true, multiVector: true },
  verdict: 'Best for Python developers who already run RAG or agent pipelines over changing files and want to re-embed only the changed parts, with Ollama or sentence-transformers keeping embeddings on the machine; it is a framework for building pipelines, not a chat app or model runtime, the open-source core needs Python 3.11 to 3.13 and some code, and PromptQuorum has not tested it.',
  lastVerifiedDate: '2026-11-08',
  lastUpstreamUpdate: '2026-11-08', // GitHub API: cocoindex-io/cocoindex pushed_at 2026-11-08T08:54Z (latest release v1.1.1 2026-11-05), read 2026-11-08
  lastUpstreamUpdateSource: 'https://github.com/cocoindex-io/cocoindex',
}
