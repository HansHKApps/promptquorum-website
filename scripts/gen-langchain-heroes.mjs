#!/usr/bin/env node
// One-off hero generator for langchain-review (all 9 locales).
const BASE = 'http://localhost:3411';

const SPECS = {
  en: {
    title: 'LangChain Review 2026: Features, Pricing, Alternatives',
    subtitle: 'LangChain is the most widely used open-source framework for building applications with large language models — chains, RAG, and agents.',
    bullets: [
      'MIT license — free, open-source, self-hostable framework',
      'Founded by Harrison Chase; over $260M raised by LangChain Inc.',
      'LangChain 1.0 and LangGraph 1.0 both reached GA in October 2025',
      'LangSmith pricing: free Developer tier up to $39/seat/month Plus',
      'Over 140,000 GitHub stars on langchain-ai/langchain',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'LangChain 2026: Funktionen, Preise, MIT-Lizenz im Test',
    subtitle: 'LangChain ist eines der am weitesten verbreiteten Open-Source-Frameworks für Anwendungen mit großen Sprachmodellen — Chains, RAG und Agenten.',
    bullets: [
      'MIT-Lizenz — kostenlos, quelloffen, self-hostbar',
      'Gegründet von Harrison Chase; über 260 Mio. $ für LangChain Inc.',
      'LangChain 1.0 und LangGraph 1.0 erreichten im Oktober 2025 GA',
      'LangSmith-Preise: kostenlos bis 39 $/Sitzplatz/Monat (Plus)',
      'Über 140.000 GitHub-Sterne für langchain-ai/langchain',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'LangChain 2026 : fonctionnalités, tarifs, licence MIT',
    subtitle: "LangChain est l'un des frameworks open source les plus utilisés pour construire des applications avec de grands modèles de langage — chaînes, RAG et agents.",
    bullets: [
      'Licence MIT — gratuite, open source, auto-hébergeable',
      "Fondé par Harrison Chase ; plus de 260 M$ levés par LangChain Inc.",
      'LangChain 1.0 et LangGraph 1.0 disponibles en GA en octobre 2025',
      "Tarifs LangSmith : gratuit jusqu'à 39 $/siège/mois (Plus)",
      'Plus de 140 000 étoiles GitHub sur langchain-ai/langchain',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'LangChain徹底レビュー：機能・料金・MITライセンス（2026）',
    subtitle: 'LangChainは、大規模言語モデルでアプリを構築するための最も広く使われるオープンソースフレームワークの1つ——チェーン、RAG、エージェントに対応。',
    bullets: [
      'MITライセンス — 無料、オープンソース、セルフホスト可能',
      'Harrison Chase氏が創業。LangChain Inc.は2億6,000万ドル超を調達',
      'LangChain 1.0とLangGraph 1.0は2025年10月にGAへ到達',
      'LangSmith料金：無料から39ドル/席/月（Plus）まで',
      'langchain-ai/langchainはGitHubスター14万超',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'LangChain 2026 评测：功能、定价与 MIT 许可证',
    subtitle: 'LangChain 是构建 LLM 应用（链、RAG、智能体）中采用最广泛的开源框架之一。',
    bullets: [
      'MIT 许可证——免费、开源、可自托管',
      '由 Harrison Chase 创立；LangChain Inc. 累计融资超 2.6 亿美元',
      'LangChain 1.0 与 LangGraph 1.0 均于 2025 年 10 月正式发布',
      'LangSmith 定价：免费起，Plus 档 $39/席位/月',
      'langchain-ai/langchain 的 GitHub star 超过 14 万',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'LangChain 2026: funciones, precios y licencia MIT',
    subtitle: 'LangChain es uno de los frameworks de código abierto más adoptados para construir aplicaciones con LLM — cadenas, RAG y agentes.',
    bullets: [
      'Licencia MIT — gratuita, de código abierto, autoalojable',
      'Fundado por Harrison Chase; LangChain Inc. ha recaudado más de 260M$',
      'LangChain 1.0 y LangGraph 1.0 alcanzaron GA en octubre de 2025',
      'Precios de LangSmith: gratis hasta 39 $/puesto/mes (Plus)',
      'Más de 140.000 estrellas en GitHub para langchain-ai/langchain',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'LangChain 2026: recursos, preços e licença MIT',
    subtitle: 'LangChain é um dos frameworks de código aberto mais adotados para construir aplicações com LLMs — chains, RAG e agentes.',
    bullets: [
      'Licença MIT — gratuita, código aberto, autoalojável',
      'Fundado por Harrison Chase; LangChain Inc. já captou mais de US$ 260M',
      'LangChain 1.0 e LangGraph 1.0 alcançaram GA em outubro de 2025',
      'Preços do LangSmith: grátis até US$ 39/assento/mês (Plus)',
      'Mais de 140.000 estrelas no GitHub para langchain-ai/langchain',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة LangChain 2026: المزايا والأسعار ورخصة MIT',
    subtitle: 'LangChain أحد أكثر أطر العمل مفتوحة المصدر اعتمادًا لبناء تطبيقات LLM — السلاسل وRAG والوكلاء.',
    bullets: [
      'رخصة MIT — مجانية، مفتوحة المصدر، قابلة للاستضافة الذاتية',
      'أسسها Harrison Chase؛ جمعت LangChain Inc. أكثر من 260 مليون دولار',
      'وصل LangChain 1.0 وLangGraph 1.0 إلى GA في أكتوبر 2025',
      'أسعار LangSmith: مجانًا حتى 39 دولارًا/مقعد/شهر (Plus)',
      'أكثر من 140,000 نجمة على GitHub لـ langchain-ai/langchain',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'LangChain 2026 리뷰: 기능, 가격, MIT 라이선스',
    subtitle: 'LangChain은 LLM 애플리케이션(체인, RAG, 에이전트)을 위한 가장 널리 쓰이는 오픈소스 프레임워크 중 하나입니다.',
    bullets: [
      'MIT 라이선스 — 무료, 오픈소스, 자체 호스팅 가능',
      'Harrison Chase가 설립; LangChain Inc. 누적 투자 유치 2.6억 달러 초과',
      'LangChain 1.0과 LangGraph 1.0 모두 2025년 10월 GA 도달',
      'LangSmith 가격: 무료부터 Plus $39/좌석/월까지',
      'langchain-ai/langchain GitHub 스타 14만 개 초과',
    ],
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
    const outPath = `${OUT_DIR}/langchain-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
