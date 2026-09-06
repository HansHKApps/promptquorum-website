#!/usr/bin/env node
// One-off hero generator for coqui-tts-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'Coqui TTS Review (2026): Community-Maintained Voice Cloning',
    subtitle: 'Coqui AI shut down in 2023 — a research-institute fork keeps this toolkit alive.',
    bullets: [
      'Descends from Mozilla TTS; built by startup Coqui AI',
      'Coqui AI shut down paid services in December 2023',
      'Maintained fork: idiap/coqui-ai-TTS by the Idiap Research Institute',
      'MPL-2.0 toolkit license; runs the XTTS v2 cloning model',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Coqui TTS im Test (2026): Community-gepflegtes Voice-Cloning',
    subtitle: 'Coqui AI schloss 2023 — ein Forschungsinstitut hält dieses Toolkit am Leben.',
    bullets: [
      'Stammt von Mozilla TTS ab; entwickelt vom Start-up Coqui AI',
      'Coqui AI stellte im Dezember 2023 kostenpflichtige Dienste ein',
      'Gepflegter Fork: idiap/coqui-ai-TTS vom Idiap Research Institute',
      'MPL-2.0-Toolkit-Lizenz; führt das XTTS-v2-Cloning-Modell aus',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Coqui TTS : avis (2026) — clonage vocal maintenu par la communauté',
    subtitle: "Coqui AI a fermé en 2023 — un institut de recherche maintient ce kit en vie.",
    bullets: [
      'Descend du projet de recherche TTS de Mozilla ; créé par la start-up Coqui AI',
      'Coqui AI a fermé ses services cloud payants en décembre 2023',
      "Fork communautaire maintenu : idiap/coqui-ai-TTS par l'Institut de recherche Idiap",
      'Licence MPL-2.0 pour le kit ; il exécute le modèle de clonage vocal XTTS v2',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Coqui TTS: análisis (2026) — clonación de voz mantenida por la comunidad',
    subtitle: 'Coqui AI cerró en 2023 — un instituto de investigación mantiene vivo este kit.',
    bullets: [
      'Desciende de Mozilla TTS; creado por la startup Coqui AI',
      'Coqui AI cerró sus servicios de pago en diciembre de 2023',
      'Fork mantenido: idiap/coqui-ai-TTS por el Instituto Idiap',
      'Licencia MPL-2.0; ejecuta el modelo de clonación XTTS v2',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Coqui TTSレビュー(2026):コミュニティ維持の音声クローニング',
    subtitle: 'Coqui AIは2023年に閉鎖 — 研究機関のフォークがこのツールキットを存続。',
    bullets: [
      'Mozilla TTSから派生;スタートアップCoqui AIが開発',
      'Coqui AIは2023年12月に有料サービスを終了',
      '保守フォーク:Idiap研究所によるidiap/coqui-ai-TTS',
      'MPL-2.0ツールキットライセンス;XTTS v2クローニングモデルを実行',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Coqui TTS: análise (2026) — clonagem de voz mantida pela comunidade',
    subtitle: 'A Coqui AI fechou em 2023 — um instituto de pesquisa mantém este kit vivo.',
    bullets: [
      'Descende do projeto de pesquisa TTS da Mozilla; criado pela startup Coqui AI',
      'A Coqui AI encerrou seus serviços de nuvem pagos em dezembro de 2023',
      'Fork comunitário mantido: idiap/coqui-ai-TTS pelo Instituto de Pesquisa Idiap',
      'Licença MPL-2.0 para o kit; ele executa o modelo de clonagem de voz XTTS v2',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Coqui TTS (2026): استنساخ صوت تصونه المجتمع',
    subtitle: 'أغلقت Coqui AI عام 2023 — يُبقي معهد أبحاث هذه الأداة حية.',
    bullets: [
      'ينحدر من مشروع أبحاث Mozilla TTS؛ طوّرته شركة Coqui AI الناشئة عام 2021',
      'أغلقت Coqui AI خدماتها السحابية المدفوعة في ديسمبر 2023',
      'فرع مجتمعي مُصان: idiap/coqui-ai-TTS من معهد Idiap للأبحاث',
      'ترخيص MPL-2.0 لمجموعة الأدوات؛ تُشغّل نموذج استنساخ الصوت XTTS v2',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'Coqui TTS评测(2026):社区维护的声音克隆工具',
    subtitle: 'Coqui AI已于2023年关闭——一家研究机构让这款工具包延续下去。',
    bullets: [
      '源自Mozilla TTS;由初创公司Coqui AI打造',
      'Coqui AI于2023年12月关闭付费服务',
      '维护分支:Idiap研究所的idiap/coqui-ai-TTS',
      'MPL-2.0工具包许可证;运行XTTS v2克隆模型',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'Coqui TTS 리뷰(2026): 커뮤니티가 관리하는 음성 복제',
    subtitle: 'Coqui AI는 2023년에 문을 닫았고, 연구소 포크가 이 툴킷을 이어갑니다.',
    bullets: [
      'Mozilla TTS에서 파생;스타트업 Coqui AI가 개발',
      'Coqui AI는 2023년 12월 유료 서비스 종료',
      '관리 포크: Idiap 연구소의 idiap/coqui-ai-TTS',
      'MPL-2.0 툴킷 라이선스;XTTS v2 복제 모델 실행',
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
    const outPath = `${OUT_DIR}/coqui-tts-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
