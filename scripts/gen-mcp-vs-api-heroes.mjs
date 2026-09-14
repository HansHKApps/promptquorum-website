#!/usr/bin/env node
// One-off generator for the 9 localized hero images for the new
// mcp-vs-api-explained article. Posts real per-locale copy (seoTitle +
// first 3 TL;DR bullets, copied verbatim from the article file) to
// /api/hero-image, saves the PNG, converts to lossless WebP, deletes the PNG.
// Usage: node scripts/gen-mcp-vs-api-heroes.mjs (requires dev server on the port below)
import fs from 'fs/promises'
import sharp from 'sharp'

const BASE = 'http://localhost:3418'
const SLUG = 'mcp-vs-api-explained'

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}

const SPECS = {
  en: {
    title: 'MCP vs. API Explained: Protocol vs. Endpoint',
    bullets: [
      'MCP (Model Context Protocol) standardizes how an AI application discovers and calls external tools; an API is the actual endpoint that does the work. MCP is a layer on top of APIs, not a replacement for them.',
      'MCP typically builds on function calling — the same tools=[]-style parameter many chat completion APIs already expose — and adds a standard client-server architecture around it.',
      'A direct API integration is usually simpler when one application talks to one AI client for one narrow job — running and maintaining an MCP server adds overhead that is not always worth it.',
    ],
  },
  de: {
    title: 'MCP vs. API erklärt: Protokoll vs. Endpunkt',
    bullets: [
      'MCP (Model Context Protocol) standardisiert, wie eine KI-Anwendung externe Tools entdeckt und aufruft; eine API ist der tatsächliche Endpunkt, der die Arbeit erledigt. MCP ist eine Schicht über APIs, kein Ersatz dafür.',
      'MCP baut typischerweise auf Function Calling auf — demselben tools=[]-artigen Parameter, den viele Chat-Completion-APIs bereits bieten — und ergänzt ihn um eine standardisierte Client-Server-Architektur.',
      'Eine direkte API-Integration ist meist einfacher, wenn eine Anwendung mit einem KI-Client für eine eng umrissene Aufgabe spricht — Betrieb und Wartung eines MCP-Servers verursachen Zusatzaufwand, der sich nicht immer lohnt.',
    ],
  },
  fr: {
    title: 'MCP vs. API expliqué : protocole vs. endpoint',
    bullets: [
      "MCP (Model Context Protocol) standardise la manière dont une application IA découvre et appelle des outils externes ; une API est l'endpoint réel qui effectue le travail. MCP est une couche au-dessus des API, pas un remplacement.",
      "MCP s'appuie généralement sur le function calling — le même paramètre de type tools=[] que de nombreuses API de chat exposent déjà — en y ajoutant une architecture client-serveur standardisée.",
      "Une intégration API directe est généralement plus simple quand une application parle à un seul client IA pour une tâche étroite — exploiter et maintenir un serveur MCP ajoute une charge qui n'en vaut pas toujours la peine.",
    ],
  },
  ja: {
    title: 'MCP vs. API 解説：プロトコルとエンドポイント',
    bullets: [
      'MCP（Model Context Protocol）は、AIアプリケーションが外部ツールを発見し呼び出す方法を標準化し、APIは実際に作業を行うエンドポイントそのものです。MCPはAPIの上の層であり、置き換えではありません。',
      'MCPは通常、function callingの上に構築されます——多くのチャット補完APIがすでに提供しているtools=[]形式のパラメータの上に、標準化されたクライアント・サーバーアーキテクチャを追加します。',
      '1つのアプリケーションが1つのAIクライアントと限定的な作業だけをやり取りする場合、直接APIを統合する方が通常シンプルです。',
    ],
  },
  zh: {
    title: 'MCP 与 API 解析：协议与端点',
    bullets: [
      'MCP（Model Context Protocol）标准化了 AI 应用发现和调用外部工具的方式；API 是实际执行工作的端点。MCP 是构建在 API 之上的一层，而不是替代品。',
      'MCP 通常建立在函数调用之上——许多聊天补全 API 已支持的 tools=[] 形式参数——并在此基础上增加了标准化的客户端-服务器架构。',
      '当一个应用只对接一个 AI 客户端、完成一项范围狭窄的任务时，直接集成 API 通常更简单——运行和维护 MCP 服务器会带来额外开销，未必总是值得。',
    ],
  },
  es: {
    title: 'MCP vs. API explicado: protocolo vs. endpoint',
    bullets: [
      'MCP (Model Context Protocol) estandariza cómo una aplicación de IA descubre y llama a herramientas externas; una API es el endpoint real que hace el trabajo. MCP es una capa sobre las API, no un reemplazo.',
      'MCP normalmente se construye sobre function calling — el mismo parámetro tipo tools=[] que ya exponen muchas API de chat completion — añadiendo una arquitectura cliente-servidor estandarizada alrededor.',
      'Una integración de API directa suele ser más simple cuando una aplicación habla con un cliente de IA para una tarea acotada — ejecutar y mantener un servidor MCP añade una sobrecarga que no siempre vale la pena.',
    ],
  },
  pt: {
    title: 'MCP vs. API explicado: protocolo vs. endpoint',
    bullets: [
      'O MCP (Model Context Protocol) padroniza como uma aplicação de IA descobre e chama ferramentas externas; uma API é o endpoint real que faz o trabalho. O MCP é uma camada sobre as APIs, não um substituto.',
      'O MCP normalmente se apoia no function calling — o mesmo parâmetro no estilo tools=[] que muitas APIs de chat completion já expõem — adicionando uma arquitetura cliente-servidor padronizada ao redor.',
      'Uma integração direta com a API costuma ser mais simples quando uma aplicação fala com um único cliente de IA para uma tarefa restrita — rodar e manter um servidor MCP adiciona um custo que nem sempre compensa.',
    ],
  },
  ar: {
    title: 'MCP مقابل API: بروتوكول مقابل نقطة نهاية',
    bullets: [
      'يوحّد MCP (Model Context Protocol) كيفية اكتشاف تطبيق الذكاء الاصطناعي للأدوات الخارجية واستدعائها؛ أما API فهي نقطة النهاية الفعلية التي تنفذ العمل. MCP طبقة فوق واجهات الـ API، وليس بديلاً عنها.',
      'يُبنى MCP عادة فوق استدعاء الدوال — المعامل نفسه من نوع tools=[] الذي تعرضه بالفعل العديد من واجهات إكمال المحادثة — مضيفاً بنية عميل-خادم موحَّدة حوله.',
      'عادة ما يكون التكامل المباشر مع API أبسط عندما يتحدث تطبيق واحد مع عميل ذكاء اصطناعي واحد لمهمة ضيقة النطاق.',
    ],
  },
  ko: {
    title: 'MCP vs. API 정리: 프로토콜 vs. 엔드포인트',
    bullets: [
      'MCP(Model Context Protocol)는 AI 애플리케이션이 외부 도구를 발견하고 호출하는 방식을 표준화하며, API는 실제로 작업을 수행하는 엔드포인트입니다. MCP는 API 위에 놓인 계층이지 대체물이 아닙니다.',
      'MCP는 보통 함수 호출 위에 구축됩니다——많은 채팅 완성 API가 이미 제공하는 tools=[] 형태의 매개변수 위에——표준화된 클라이언트-서버 아키텍처를 추가합니다.',
      '하나의 애플리케이션이 좁은 범위의 작업을 위해 하나의 AI 클라이언트와만 통신할 때는 직접 API 통합이 대개 더 간단합니다.',
    ],
  },
}

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: '', bullets: spec.bullets, footer: FOOTER[lang] }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`${lang}: HTTP ${res.status} — ${text}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = `public/images/${SLUG}-hero-${lang}.png`
  const webpPath = `public/images/${SLUG}-hero-${lang}.webp`
  await fs.writeFile(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  await fs.unlink(pngPath)
  console.log(`  ${webpPath} (${buf.length} bytes PNG source)`)
}

;(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec)
  }
  console.log('Done.')
})()
