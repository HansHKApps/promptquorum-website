#!/usr/bin/env node
// One-off hero generator for asus-mini-pc-local-ai-2026 (all 9 locales).
const BASE = 'http://localhost:3406';

const SPECS = {
  en: {
    title: 'ASUS Mini PC for Local AI: NUC 16 Pro vs. ExpertCenter PN55 (2026)',
    subtitle: 'ASUS NUC 16 Pro and ExpertCenter PN55 compared against the GMKtec EVO-X2, Beelink SER10 MAX, and MINISFORUM AI X1 Pro. ASUS caps out at 96GB RAM while the field leaders reach 128GB — ASUS wins on Copilot+ certification and business support instead of raw local-LLM specs.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'ASUS Mini-PC für lokale KI: NUC 16 Pro vs. ExpertCenter PN55 (2026)',
    subtitle: 'ASUS NUC 16 Pro und ExpertCenter PN55 im Vergleich zu GMKtec EVO-X2, Beelink SER10 MAX und MINISFORUM AI X1 Pro. ASUS ist bei 96 GB RAM gedeckelt, während die Spitzenreiter 128 GB erreichen — ASUS punktet mit Copilot+-Zertifizierung und Business-Support statt mit Rohdaten.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Mini PC ASUS pour l\'IA locale : NUC 16 Pro vs. ExpertCenter PN55 (2026)',
    subtitle: 'ASUS NUC 16 Pro et ExpertCenter PN55 comparés au GMKtec EVO-X2, au Beelink SER10 MAX et au MINISFORUM AI X1 Pro. ASUS plafonne à 96 Go de RAM quand les leaders atteignent 128 Go — ASUS mise sur la certification Copilot+ et le support professionnel plutôt que sur les specs brutes.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'ローカルAI向けASUS mini PC: NUC 16 Pro vs. ExpertCenter PN55（2026年）',
    subtitle: 'ASUS NUC 16 ProとExpertCenter PN55をGMKtec EVO-X2、Beelink SER10 MAX、MINISFORUM AI X1 Proと比較。ASUSは96GBが上限だが競合は128GBに到達 — ASUSの強みはスペックではなくCopilot+認証とビジネスサポート。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: '本地AI用ASUS迷你主机：NUC 16 Pro对比ExpertCenter PN55（2026版）',
    subtitle: '将ASUS NUC 16 Pro和ExpertCenter PN55与GMKtec EVO-X2、Beelink SER10 MAX、MINISFORUM AI X1 Pro对比。ASUS的RAM上限为96GB,而领先机型可达128GB——ASUS的优势在于Copilot+认证与商用支持,而非硬件规格。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Mini PC ASUS para IA local: NUC 16 Pro vs. ExpertCenter PN55 (2026)',
    subtitle: 'ASUS NUC 16 Pro y ExpertCenter PN55 comparados con el GMKtec EVO-X2, el Beelink SER10 MAX y el MINISFORUM AI X1 Pro. ASUS se limita a 96 GB de RAM mientras los líderes llegan a 128 GB — ASUS gana en certificación Copilot+ y soporte empresarial, no en especificaciones brutas.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Mini PC ASUS para IA local: NUC 16 Pro vs. ExpertCenter PN55 (2026)',
    subtitle: 'ASUS NUC 16 Pro e ExpertCenter PN55 comparados ao GMKtec EVO-X2, Beelink SER10 MAX e MINISFORUM AI X1 Pro. A ASUS tem limite de 96 GB de RAM enquanto os líderes chegam a 128 GB — a ASUS vence em certificação Copilot+ e suporte corporativo, não em especificações brutas.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'كمبيوتر ASUS المصغر للذكاء الاصطناعي المحلي: NUC 16 Pro مقابل ExpertCenter PN55 (2026)',
    subtitle: 'مقارنة ASUS NUC 16 Pro وExpertCenter PN55 مع GMKtec EVO-X2 وBeelink SER10 MAX وMINISFORUM AI X1 Pro. تصل ASUS إلى حد أقصى 96GB من الذاكرة بينما يصل المنافسون إلى 128GB — تتفوق ASUS باعتماد Copilot+ ودعم الأعمال، وليس بالمواصفات الخام.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '로컬 AI용 ASUS 미니 PC: NUC 16 Pro와 ExpertCenter PN55 비교 (2026)',
    subtitle: 'ASUS NUC 16 Pro와 ExpertCenter PN55를 GMKtec EVO-X2, Beelink SER10 MAX, MINISFORUM AI X1 Pro와 비교. ASUS는 RAM이 96GB로 제한되지만 선두 기종은 128GB에 도달합니다 — ASUS의 강점은 사양이 아니라 Copilot+ 인증과 비즈니스 지원입니다.',
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
    const outPath = `${OUT_DIR}/asus-mini-pc-local-ai-2026-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
