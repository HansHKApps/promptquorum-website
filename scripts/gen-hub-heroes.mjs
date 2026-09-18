#!/usr/bin/env node
// One-off generator for the 5 hub-page hero images (batch 02).
// Posts real, already-published per-locale copy to /api/hero-image and saves
// the image to public/images/{cluster}-hub-overview-hero-{lang}.webp.
// Usage: node scripts/gen-hub-heroes.mjs (requires the dev server running on :3055)

import fs from 'node:fs'

const BASE = 'http://localhost:3055';

// The power-local-llm hub footer states the directory's current tool count.
// `apps-barrel.ts` is TypeScript with extensionless relative imports, which a
// plain Node ESM script can't resolve without a bundler/loader (verified: a
// native `import()` of the .ts file — even with --experimental-strip-types —
// fails on `./apps/ollama` with no extension). So instead of hardcoding the
// number, this reads the same file `TOTAL_TOOL_COUNT = localAiApps.length` is
// derived from and counts the array entries directly — self-updating as long
// as apps-barrel.ts keeps one bare identifier per line inside that array
// literal. If this ever throws, hardcode the real count as a fallback and
// re-verify it against TOTAL_TOOL_COUNT before running.
function getPowerLocalLlmToolCount() {
  const content = fs.readFileSync('src/lib/power-local-llm/apps-barrel.ts', 'utf-8');
  const m = content.match(/export const localAiApps:\s*ToolRecord\[\]\s*=\s*\[([\s\S]*?)\n\]/);
  if (!m) throw new Error('gen-hub-heroes: could not find localAiApps array in apps-barrel.ts — hardcode the tool count manually and re-verify against TOTAL_TOOL_COUNT');
  const entries = m[1].split('\n').map(s => s.trim()).filter(s => s && !s.startsWith('//'));
  if (entries.length < 1) throw new Error('gen-hub-heroes: parsed 0 tools from apps-barrel.ts — aborting rather than writing a bogus count');
  return entries.length;
}

const TOOL_COUNT = getPowerLocalLlmToolCount();

// NOTE: /api/hero-image now rejects any spec whose rendered body content
// (bullets/table/callout, or — with none of those — the subtitle) falls
// under a per-language char floor (see MIN_BODY_CHARS_* in the route), added
// after these hub heroes were first generated to stop near-empty hero cards.
// The original short subtitles here (e.g. "Guides & Comparisons by Use
// Case") are well under that floor, so each power-local-llm subtitle below
// is expanded with real, factual elaboration (the same use-case categories
// already named in the footer) purely so the regenerated image has a
// non-empty body — this is longer than the site's actual UI copy for this
// hub and is not meant to match it verbatim.
const HUBS = {
  'power-local-llm': {
    en: { title: 'Local LLM Software', subtitle: 'Guides & Comparisons by Use Case — coding assistants, RAG stacks, agent frameworks, and mobile runtimes, each compared by hardware needs, licensing, and offline support so you can pick the right local LLM tool for your workflow.', footer: `Coding, RAG, agents, mobile — ${TOOL_COUNT}-tool directory` },
    de: { title: 'Lokale LLM-Software', subtitle: 'Guides und Vergleiche nach Anwendungsfall — Coding-Assistenten, RAG-Stacks, Agenten-Frameworks und mobile Runtimes, jeweils verglichen nach Hardwarebedarf, Lizenz und Offline-Fähigkeit, damit du das passende lokale LLM-Tool für deinen Workflow findest.', footer: `Coding, RAG, Agenten, Mobile — ${TOOL_COUNT} Tools` },
    fr: { title: 'Logiciels LLM Locaux', subtitle: "Guides et comparatifs par cas d'usage — assistants de code, piles RAG, frameworks d'agents et runtimes mobiles, comparés selon les besoins matériels, la licence et le fonctionnement hors ligne pour choisir le bon outil LLM local.", footer: `Code, RAG, agents, mobile — ${TOOL_COUNT} outils` },
    ja: { title: 'ローカルLLMソフトウェア', subtitle: '用途別ガイドと比較 — コーディング支援、RAGスタック、エージェントフレームワーク、モバイル対応ランタイムをハードウェア要件・ライセンス・オフライン対応で比較し、ワークフローに合ったローカルLLMツールを選べます。', footer: `コーディング・RAG・エージェント — ${TOOL_COUNT}ツール` },
    zh: { title: '本地 LLM 软件', subtitle: '按用例分类的指南与对比 — 涵盖编码助手、RAG检索增强技术栈、多步骤代理框架和移动端运行时，按硬件需求、许可协议和离线支持等维度进行详细对比，帮助你为工作流选择合适的本地LLM工具。', footer: `编码、RAG、代理 — ${TOOL_COUNT} 款工具目录` },
    es: { title: 'Software LLM Local', subtitle: 'Guías y comparativas por caso de uso — asistentes de código, stacks RAG, frameworks de agentes y runtimes móviles, comparados por requisitos de hardware, licencia y soporte sin conexión para elegir la herramienta LLM local adecuada.', footer: `Código, RAG, agentes — ${TOOL_COUNT} herramientas` },
    pt: { title: 'Software LLM Local', subtitle: 'Guias e comparativos por caso de uso — assistentes de código, stacks RAG, frameworks de agentes e runtimes móveis, comparados por requisitos de hardware, licença e suporte offline para escolher a ferramenta LLM local certa.', footer: `Código, RAG, agentes — ${TOOL_COUNT} ferramentas` },
    ar: { title: 'برمجيات LLM المحلية', subtitle: 'أدلة ومقارنات حسب حالة الاستخدام — مساعدات ترميز، وحزم RAG لاسترجاع المعلومات، وأطر عمل للوكلاء متعددة الخطوات، وبيئات تشغيل مخصّصة للجوال، تمت مقارنتها من حيث متطلبات الجهاز والترخيص ومدى الدعم دون اتصال بالإنترنت، لاختيار أداة LLM المحلية المناسبة لسير عملك.', footer: `البرمجة، RAG، الوكلاء — ${TOOL_COUNT} أداة` },
    ko: { title: '로컬 LLM 소프트웨어', subtitle: '용도별 가이드와 비교 — 코딩 어시스턴트, RAG 스택, 에이전트 프레임워크, 모바일 런타임을 하드웨어 요구사항·라이선스·오프라인 지원 기준으로 비교해 워크플로에 맞는 로컬 LLM 도구를 고를 수 있습니다.', footer: `코딩·RAG·에이전트 — ${TOOL_COUNT}개 도구` },
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
  const path = `public/images/${cluster}-hub-overview-hero-${lang}.webp`;
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
