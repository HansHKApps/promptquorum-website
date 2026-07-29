#!/usr/bin/env node
// One-off generator for the 5 hub-page hero images (batch 02).
// Posts real, already-published per-locale copy to /api/hero-image and saves
// the PNG to public/images/{cluster}-hub-overview-hero-{lang}.png.
// Usage: node scripts/gen-hub-heroes.mjs (requires the dev server running on :3055)

const BASE = 'http://localhost:3055';

const HUBS = {
  'power-local-llm': {
    en: { title: 'Local LLM Software', subtitle: 'Guides & Comparisons by Use Case', footer: 'Coding, RAG, agents, mobile — 88-tool directory' },
    de: { title: 'Lokale LLM-Software', subtitle: 'Guides und Vergleiche nach Anwendungsfall', footer: 'Coding, RAG, Agenten, Mobile — 88 Tools' },
    fr: { title: 'Logiciels LLM Locaux', subtitle: "Guides et Comparatifs par Cas d'Usage", footer: 'Code, RAG, agents, mobile — 88 outils' },
    ja: { title: 'ローカルLLMソフトウェア', subtitle: '用途別ガイドと比較', footer: 'コーディング・RAG・エージェント — 88ツール' },
    zh: { title: '本地 LLM 软件', subtitle: '按用例分类的指南与对比', footer: '编码、RAG、代理 — 88 款工具目录' },
    es: { title: 'Software LLM Local', subtitle: 'Guías y Comparativas por Caso de Uso', footer: 'Código, RAG, agentes — 88 herramientas' },
    pt: { title: 'Software LLM Local', subtitle: 'Guias e Comparativos por Caso de Uso', footer: 'Código, RAG, agentes — 88 ferramentas' },
    ar: { title: 'برمجيات LLM المحلية', subtitle: 'أدلة ومقارنات حسب حالة الاستخدام', footer: 'البرمجة، RAG، الوكلاء — 88 أداة' },
    ko: { title: '로컬 LLM 소프트웨어', subtitle: '용도별 가이드와 비교', footer: '코딩·RAG·에이전트 — 88개 도구' },
  },
  'local-llms': {
    en: { title: 'Best Local LLMs', subtitle: 'Ollama, LM Studio, Hardware & VRAM Guide', footer: 'Run Llama 3.2 3B or Qwen3 4B on 8 GB RAM in under 10 min' },
    de: { title: 'Beste Lokale LLMs', subtitle: 'Ollama, LM Studio, Hardware & VRAM Guide', footer: 'Llama 3.2 3B oder Qwen3 4B mit 8 GB RAM in unter 10 Min.' },
    fr: { title: 'Meilleurs LLMs Locaux', subtitle: 'Ollama, LM Studio & Guide VRAM', footer: 'Llama 3.2 3B ou Qwen3 4B avec 8 Go de RAM en 10 min' },
    ja: { title: '最高のローカルLLM', subtitle: 'Ollama・LM Studio・VRAMガイド', footer: '8GB RAMでLlama 3.2 3BまたはQwen3 4Bを10分以内に実行' },
    zh: { title: '最佳本地LLM', subtitle: 'Ollama、LM Studio与VRAM硬件指南', footer: '8GB内存10分钟内运行Llama 3.2 3B或Qwen3 4B' },
    es: { title: 'Mejores LLMs Locales', subtitle: 'Ollama, LM Studio, Hardware y Guía de VRAM', footer: 'Llama 3.2 3B o Qwen3 4B con 8 GB de RAM en 10 min' },
    pt: { title: 'Melhores LLMs Locais', subtitle: 'Ollama, LM Studio, Hardware e Guia de VRAM', footer: 'Llama 3.2 3B ou Qwen3 4B com 8 GB de RAM em 10 min' },
    ar: { title: 'أفضل النماذج اللغوية المحلية', subtitle: 'دليل Ollama وLM Studio والأجهزة وVRAM', footer: 'شغّل Llama 3.2 3B أو Qwen3 4B بـ 8 GB RAM خلال 10 دقائق' },
    ko: { title: '최고의 로컬 LLM', subtitle: 'Ollama, LM Studio, 하드웨어 및 VRAM 가이드', footer: '8GB RAM으로 10분 이내 Llama 3.2 3B 또는 Qwen3 4B 실행' },
  },
  'prompt-bites': {
    en: { title: 'Quick Answers to Local LLM Questions', subtitle: 'Short-answer guides, VRAM, Ollama picks', footer: 'Hardware comparisons and setup tips — 60 seconds or less' },
    de: { title: 'Schnelle Antworten zu lokalen LLM-Fragen', subtitle: 'Kurzantwort-Leitfäden, VRAM, Ollama', footer: 'Hardware-Vergleiche und Setup-Tipps — in 60 Sekunden' },
    fr: { title: 'Réponses rapides sur les LLM locaux', subtitle: 'Guides courts, VRAM, choix Ollama', footer: 'Comparaisons matérielles et configuration — en 60 secondes' },
    ja: { title: 'ローカルLLMの質問への迅速な回答', subtitle: '短答ガイド、VRAM、Ollamaのおすすめ', footer: 'ハードウェア比較とセットアップのヒント — 60秒以内' },
    zh: { title: '本地LLM问题的快速解答', subtitle: '简答指南、显存要求、Ollama推荐', footer: '硬件对比和设置技巧 — 60秒内解答' },
    es: { title: 'Respuestas rápidas sobre LLM locales', subtitle: 'Guías rápidas, VRAM, recomendaciones Ollama', footer: 'Comparativas de hardware y consejos — en 60 segundos' },
    pt: { title: 'Respostas rápidas sobre LLMs locais', subtitle: 'Guias rápidos, VRAM, recomendações Ollama', footer: 'Comparações de hardware e dicas — em 60 segundos' },
    ar: { title: 'إجابات سريعة على أسئلة النماذج المحلية', subtitle: 'أدلة قصيرة، VRAM، أفضل نماذج Ollama', footer: 'مقارنات الأجهزة ونصائح الإعداد — خلال 60 ثانية' },
    ko: { title: '로컬 LLM 질문에 대한 빠른 답변', subtitle: '단답 가이드, VRAM, Ollama 추천', footer: '하드웨어 비교와 설정 팁 — 60초 이내 답변' },
  },
  'smart-home': {
    en: { title: 'Run Your Smart Home on a Local LLM', subtitle: 'Not the Cloud', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25 guides' },
    de: { title: 'Smart Home mit lokalem LLM steuern', subtitle: 'Nicht in der Cloud', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25 Guides' },
    fr: { title: 'Pilotez votre maison connectée', subtitle: 'Avec un LLM local, sans cloud', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25 guides' },
    ja: { title: 'ローカルLLMでスマートホームを', subtitle: 'クラウドではなく', footer: 'Home Assistant・Matter・Thread・Whisper・Piper — 25ガイド' },
    zh: { title: '用本地大模型驱动智能家居', subtitle: '告别云端', footer: 'Home Assistant、Matter、Thread、Whisper、Piper — 25篇指南' },
    es: { title: 'Controla tu hogar inteligente', subtitle: 'Con un LLM local, no en la nube', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25 guías' },
    pt: { title: 'Execute sua casa inteligente', subtitle: 'Em um LLM local, não na nuvem', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25 guias' },
    ar: { title: 'شغِّل منزلك الذكي بنموذج محلي', subtitle: 'بدلاً من السحابة', footer: 'Home Assistant وMatter وThread وWhisper وPiper — 25 دليلاً' },
    ko: { title: '클라우드 없이 로컬 LLM으로', subtitle: '스마트홈 구동하기', footer: 'Home Assistant, Matter, Thread, Whisper, Piper — 25개 가이드' },
  },
  'balcony-solar': {
    en: { title: 'Balcony Solar', subtitle: 'Kits, Rules, and No-Cloud Setups', footer: 'No installer needed — plug-in 600-800W kits, notification-only in 6+ EU countries' },
    de: { title: 'Balcony Solar', subtitle: 'Sets, Regeln und Setups ohne Cloud', footer: 'Kein Installateur nötig — 600-800W-Sets, meldepflichtig in 6+ EU-Ländern' },
    fr: { title: 'Balcony Solar', subtitle: 'Kits, réglementation, sans cloud', footer: "Sans installateur — kits 600-800W, notification simple dans 6+ pays de l'UE" },
    ja: { title: 'Balcony Solar', subtitle: 'キット・ルール・クラウド不要', footer: '設置業者不要 — 600〜800Wキット、EU6カ国以上で届出制' },
    zh: { title: 'Balcony Solar', subtitle: '套件、法规与无云端方案', footer: '无需安装工 — 600-800W插入式套件，欧盟6国以上仅需备案' },
    es: { title: 'Balcony Solar', subtitle: 'Kits, normativa y sin nube', footer: 'Sin instalador — kits de 600-800W, solo notificación en 6+ países de la UE' },
    pt: { title: 'Balcony Solar', subtitle: 'Kits, regras e sem nuvem', footer: 'Sem instalador — kits de 600-800W, apenas notificação em 6+ países da UE' },
    ar: { title: 'Balcony Solar', subtitle: 'الأطقم والقواعد بلا سحابة', footer: 'دون فني تركيب — أطقم 600-800 واط، إخطار فقط في 6+ دول أوروبية' },
    ko: { title: 'Balcony Solar', subtitle: '키트, 규정, 클라우드 없는 구성', footer: '설치업자 불필요 — 600-800W 키트, EU 6개국 이상 신고제' },
  },
};

async function generate(cluster, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${cluster}/${lang}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${cluster}-hub-overview-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [cluster, locales] of Object.entries(HUBS)) {
    console.log(`=== ${cluster} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(cluster, lang, spec);
    }
  }
  console.log('done');
})();
