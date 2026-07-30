#!/usr/bin/env node
// One-off regenerator for the local-llms hub hero image, which was missed by
// commit c22b179d5 (fix/hero-image-blank-fallback) — that fix regenerated the
// smart-home hub hero but left local-llms-hub-overview-hero-*.png as the
// original blank (title-band-only) file from batch 02.
// Bullets below are derived by splitting the hub's own existing, already-
// published HUB_HERO_DESC intro copy (src/components/LocalLLMsHub.tsx) into
// 4 facts — same facts, no invented copy — matching how the smart-home fix
// sourced its bullets from already-authored content.
// Usage: node scripts/gen-local-llms-hub-hero.mjs (requires dev server on :3055)

const BASE = 'http://localhost:3055';

const SPECS = {
  en: {
    title: 'Best Local LLMs',
    subtitle: 'Ollama, LM Studio, Hardware & VRAM Guide',
    bullets: [
      'No internet connection needed — runs entirely on your own computer',
      'No API fees — zero ongoing cost after your hardware',
      'No data leaves your machine — private by design',
      'Install Ollama and run Llama 3.2 3B or Qwen3 4B on 8 GB RAM in under 10 minutes',
    ],
    footer: 'Run Llama 3.2 3B or Qwen3 4B on 8 GB RAM in under 10 min',
  },
  de: {
    title: 'Beste Lokale LLMs',
    subtitle: 'Ollama, LM Studio, Hardware & VRAM Guide',
    bullets: [
      'Keine Internetverbindung nötig — läuft vollständig auf Ihrem eigenen Computer',
      'Keine API-Gebühren — keine laufenden Kosten nach der Hardware-Anschaffung',
      'Keine Daten verlassen Ihr Gerät — privat von Grund auf',
      'Installieren Sie Ollama und führen Sie Llama 3.2 3B oder Qwen3 4B mit 8 GB RAM in unter 10 Minuten aus',
    ],
    footer: 'Llama 3.2 3B oder Qwen3 4B mit 8 GB RAM in unter 10 Min.',
  },
  fr: {
    title: 'Meilleurs LLMs Locaux',
    subtitle: 'Ollama, LM Studio & Guide VRAM',
    bullets: [
      "Aucune connexion Internet nécessaire — fonctionne entièrement sur votre ordinateur",
      "Aucun frais d'API — aucun coût récurrent après le matériel",
      'Aucune donnée ne quitte votre machine — privé par conception',
      'Installez Ollama et exécutez Llama 3.2 3B ou Qwen3 4B avec 8 Go de RAM en moins de 10 minutes',
    ],
    footer: 'Llama 3.2 3B ou Qwen3 4B avec 8 Go de RAM en 10 min',
  },
  ja: {
    title: '最高のローカルLLM',
    subtitle: 'Ollama・LM Studio・VRAMガイド',
    bullets: [
      'インターネット接続不要 — 自分のパソコン上だけで完結',
      'API料金なし — ハードウェア購入後の追加費用なし',
      'データが外部に送信されない — 設計から完全プライベート',
      'Ollamaをインストールし、8GB RAMでLlama 3.2 3BまたはQwen3 4Bを10分以内に実行',
    ],
    footer: '8GB RAMでLlama 3.2 3BまたはQwen3 4Bを10分以内に実行',
  },
  zh: {
    title: '最佳本地LLM',
    subtitle: 'Ollama、LM Studio与VRAM硬件指南',
    bullets: [
      '无需联网 — 完全在你自己的电脑上运行',
      '没有API费用 — 硬件购置后无持续成本',
      '数据不会离开你的设备 — 从设计上保证隐私',
      '安装Ollama，用8GB内存10分钟内运行Llama 3.2 3B或Qwen3 4B',
    ],
    footer: '8GB内存10分钟内运行Llama 3.2 3B或Qwen3 4B',
  },
  es: {
    title: 'Mejores LLMs Locales',
    subtitle: 'Ollama, LM Studio, Hardware y Guía de VRAM',
    bullets: [
      'Sin conexión a Internet — funciona por completo en tu propio ordenador',
      'Sin tarifas de API — sin coste continuo tras el hardware',
      'Ningún dato sale de tu máquina — privado por diseño',
      'Instala Ollama y ejecuta Llama 3.2 3B o Qwen3 4B con 8 GB de RAM en menos de 10 minutos',
    ],
    footer: 'Llama 3.2 3B o Qwen3 4B con 8 GB de RAM en 10 min',
  },
  pt: {
    title: 'Melhores LLMs Locais',
    subtitle: 'Ollama, LM Studio, Hardware e Guia de VRAM',
    bullets: [
      'Sem conexão à Internet — roda inteiramente no seu próprio computador',
      'Sem taxas de API — sem custo contínuo após o hardware',
      'Nenhum dado sai da sua máquina — privado por design',
      'Instale o Ollama e rode o Llama 3.2 3B ou o Qwen3 4B com 8 GB de RAM em menos de 10 minutos',
    ],
    footer: 'Llama 3.2 3B ou Qwen3 4B com 8 GB de RAM em 10 min',
  },
  ar: {
    title: 'أفضل النماذج اللغوية المحلية',
    subtitle: 'دليل Ollama وLM Studio والأجهزة وVRAM',
    bullets: [
      'لا حاجة للاتصال بالإنترنت — يعمل بالكامل على جهازك الخاص',
      'لا رسوم API — بلا تكلفة مستمرة بعد شراء الجهاز',
      'لا تغادر أي بيانات جهازك — خاص بالتصميم',
      'ثبّت Ollama وشغّل Llama 3.2 3B أو Qwen3 4B بذاكرة 8 جيجابايت خلال أقل من 10 دقائق',
    ],
    footer: 'شغّل Llama 3.2 3B أو Qwen3 4B بـ 8 GB RAM خلال 10 دقائق',
  },
  ko: {
    title: '최고의 로컬 LLM',
    subtitle: 'Ollama, LM Studio, 하드웨어 및 VRAM 가이드',
    bullets: [
      '인터넷 연결 불필요 — 전적으로 자신의 컴퓨터에서 실행',
      'API 요금 없음 — 하드웨어 구매 후 추가 비용 없음',
      '데이터가 기기를 벗어나지 않음 — 설계부터 완전히 비공개',
      'Ollama를 설치하고 8GB RAM으로 Llama 3.2 3B 또는 Qwen3 4B를 10분 이내에 실행',
    ],
    footer: '8GB RAM으로 10분 이내 Llama 3.2 3B 또는 Qwen3 4B 실행',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} — ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/local-llms-hub-overview-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
