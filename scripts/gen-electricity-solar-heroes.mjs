#!/usr/bin/env node
// One-off hero generator for local-llm-electricity-cost-balcony-solar-2026 (all 9 locales).
const BASE = 'http://localhost:3406';

const SPECS = {
  en: {
    title: 'What Running a Local LLM Costs in Electricity (2026)',
    subtitle: 'A GPU running a local LLM 4 hours a day costs about $6.60/month in the US, or nearly $60/month run 24/7 on a power-hungry card. An 800W balcony solar system covers the moderate case in summer but not heavy always-on use, in any season.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Was ein lokales LLM an Strom kostet (2026)',
    subtitle: 'Eine GPU, die 4 Stunden am Tag ein lokales LLM betreibt, kostet in den USA etwa 6,60 $/Monat, im 24/7-Betrieb auf einer stromhungrigen Karte fast 60 $/Monat. Ein 800-Watt-Balkonkraftwerk deckt den moderaten Fall im Sommer, aber keine schwere Dauerlast, in keiner Jahreszeit.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Ce que coûte un LLM local en électricité (2026)',
    subtitle: 'Un GPU faisant tourner un LLM local 4 heures par jour coûte environ 6,60 $/mois aux États-Unis, près de 60 $/mois en 24h/24 sur une carte gourmande. Un solaire de balcon de 800 W couvre le cas modéré en été, mais pas un usage lourd permanent, quelle que soit la saison.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'ローカルLLMの電気代はいくらか（2026年）',
    subtitle: '1日4時間ローカルLLMを動かすGPUは米国で月額約$6.60、電力大食いカードを24時間稼働させると月額約$60近くに達する。800Wベランダ太陽光は夏の中程度利用ケースをカバーするが、どの季節でも重い常時稼働は相殺できない。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: '运行本地LLM的电费是多少（2026版）',
    subtitle: '每天运行本地LLM 4小时的GPU在美国每月电费约为$6.60,若让耗电大户显卡24小时运行则接近每月$60。800W阳台光伏可以覆盖夏季中等使用场景,但无论哪个季节都无法抵消长期重度使用。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Cuánto cuesta en electricidad un LLM local (2026)',
    subtitle: 'Una GPU que ejecuta un LLM local 4 horas al día cuesta unos $6.60/mes en EE. UU., casi $60/mes en uso 24/7 con una tarjeta muy exigente. Un solar de balcón de 800 W cubre el caso moderado en verano, pero no un uso pesado permanente, en ninguna estación.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Quanto custa em energia rodar um LLM local (2026)',
    subtitle: 'Uma GPU rodando um LLM local 4 horas por dia custa cerca de $6,60/mês nos EUA, perto de $60/mês em uso 24/7 numa placa que consome muita energia. Um solar de varanda de 800 W cobre o caso moderado no verão, mas não um uso pesado contínuo, em nenhuma estação.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'كم تكلف كهرباء تشغيل LLM محلي (2026)',
    subtitle: 'بطاقة GPU تشغّل LLM محليًا 4 ساعات يوميًا تكلّف نحو 6.60$ شهريًا في أمريكا، وتقترب من 60$ شهريًا عند التشغيل على مدار الساعة ببطاقة كثيفة الاستهلاك. نظام شمسي للشرفة بقدرة 800 واط يغطي الحالة المعتدلة صيفًا، لكن ليس الاستخدام الثقيل المستمر في أي فصل.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '로컬 LLM의 전기 요금은 얼마인가 (2026)',
    subtitle: '하루 4시간 로컬 LLM을 구동하는 GPU는 미국에서 월 약 $6.60가 들고, 전력을 많이 소모하는 카드를 24시간 가동하면 월 $60에 가까워집니다. 800W 발코니 태양광은 여름철 적당한 사용은 감당하지만 어떤 계절이든 상시 가동되는 무거운 사용은 상쇄하지 못합니다.',
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
    const outPath = `${OUT_DIR}/local-llm-electricity-cost-balcony-solar-2026-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
