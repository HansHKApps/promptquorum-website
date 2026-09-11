#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SLUG = 'exllamav2-explained';
const SPECS = {
  en: {
    title: 'ExLlamaV2 Explained 2026: Archived, Succeeded by ExLlamaV3',
    subtitle: 'ExLlamaV2 was a fast, consumer-GPU-focused inference library known for its flexible EXL2 quantization format — but as of this writing its own repository is archived, with development continuing on its successor, ExLlamaV3.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'ExLlamaV2 erklärt 2026: Archiviert, abgelöst durch ExLlamaV3',
    subtitle: 'ExLlamaV2 war eine schnelle, auf Consumer-GPUs ausgerichtete Inferenz-Bibliothek, bekannt für ihr flexibles EXL2-Quantisierungsformat — doch zum Zeitpunkt dieses Artikels ist das eigene Repository archiviert, und die Entwicklung wird beim Nachfolger ExLlamaV3 fortgesetzt.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'ExLlamaV2 expliqué 2026 : archivé, remplacé par ExLlamaV3',
    subtitle: 'ExLlamaV2 était une bibliothèque d\'inférence rapide, axée sur les GPU grand public, connue pour son format de quantification EXL2 flexible — mais au moment de la rédaction, son propre dépôt est archivé, le développement se poursuivant sur son successeur, ExLlamaV3.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'ExLlamaV2解説2026:アーカイブ済み、ExLlamaV3が後継',
    subtitle: 'ExLlamaV2は、柔軟なEXL2量子化フォーマットで知られる、コンシューマーGPU向けの高速な推論ライブラリでした。しかし本記事執筆時点で、そのリポジトリ自体はアーカイブ済みとなっており、開発は後継のExLlamaV3で継続されています。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'ExLlamaV2详解2026:已归档,由ExLlamaV3接替',
    subtitle: 'ExLlamaV2曾是一个专注于消费级GPU的快速推理库,以灵活的EXL2量化格式著称——但截至本文撰写时,其自身的仓库已被归档,开发工作已转移到其继任者ExLlamaV3。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'ExLlamaV2 explicado 2026: archivado, sucedido por ExLlamaV3',
    subtitle: 'ExLlamaV2 era una biblioteca de inferencia rápida centrada en GPU de consumo, conocida por su flexible formato de cuantización EXL2 — pero a fecha de este artículo su propio repositorio está archivado, y el desarrollo continúa en su sucesor, ExLlamaV3.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'ExLlamaV2 Explicado 2026: Arquivado, Sucedido pelo ExLlamaV3',
    subtitle: 'O ExLlamaV2 era uma biblioteca de inferência rápida, voltada para GPUs de consumo, conhecida por seu formato de quantização EXL2 flexível — mas, no momento em que este artigo foi escrito, seu próprio repositório está arquivado, com o desenvolvimento continuando em seu sucessor, o ExLlamaV3.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح ExLlamaV2 2026: مؤرشف الآن، وخلفه ExLlamaV3',
    subtitle: 'كان ExLlamaV2 مكتبة استدلال سريعة موجهة لمعالجات سطح المكتب الاستهلاكية، معروفة بصيغة التكميم EXL2 المرنة — لكن حتى وقت كتابة هذا المقال، أصبح مستودعه الخاص مؤرشفًا، مع استمرار التطوير في خلفه، ExLlamaV3. وهي مكتبة مرخّصة بموجب MIT من تطوير مبرمج يُعرف باسم turboderp، وتركّز حصريًا على معالجات NVIDIA الاستهلاكية.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'ExLlamaV2 해설 2026: 아카이브됨, ExLlamaV3로 계승',
    subtitle: 'ExLlamaV2는 유연한 EXL2 양자화 형식으로 알려진, 소비자용 GPU에 특화된 빠른 추론 라이브러리였다 — 하지만 이 글 작성 시점 기준으로 저장소 자체가 아카이브되었으며, 개발은 후속 프로젝트인 ExLlamaV3에서 계속되고 있다.',
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
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
