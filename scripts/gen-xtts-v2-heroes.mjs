#!/usr/bin/env node
// One-off hero generator for xtts-v2-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'XTTS v2 Review (2026): Multilingual Voice Cloning from 6 Seconds of Audio',
    subtitle: 'Clones a voice from 6 seconds of audio, 17 languages — non-commercial CPML license.',
    bullets: [
      'Clones a voice from as little as 6 seconds of reference audio',
      'Speaks the cloned voice in 17 languages, cross-lingual cloning',
      'License: Coqui Public Model License (CPML), non-commercial only',
      'Runs via the Coqui TTS toolkit (pip install coqui-tts)',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'XTTS v2 im Test (2026): Mehrsprachiges Voice-Cloning aus 6 Sekunden Audio',
    subtitle: 'Klont eine Stimme aus 6 Sekunden Audio, 17 Sprachen — nicht-kommerzielle CPML-Lizenz.',
    bullets: [
      'Klont eine Stimme aus nur 6 Sekunden Referenzaudio',
      'Spricht die geklonte Stimme in 17 Sprachen, sprachübergreifendes Cloning',
      'Lizenz: Coqui Public Model License (CPML), nur nicht-kommerziell',
      'Läuft über das Coqui-TTS-Toolkit (pip install coqui-tts)',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'XTTS v2 : avis (2026) — clonage vocal multilingue à partir de 6 secondes d\'audio',
    subtitle: 'Clone une voix à partir de 6 secondes d\'audio, 17 langues — licence CPML non commerciale.',
    bullets: [
      'Clone une voix à partir d\'à peine 6 secondes d\'audio de référence',
      'Fait parler la voix clonée en 17 langues, clonage entre langues',
      'Licence : Coqui Public Model License (CPML), non commerciale uniquement',
      's\'exécute via le kit Coqui TTS (pip install coqui-tts)',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'XTTS v2: análisis (2026) — clonación de voz multilingüe desde 6 segundos de audio',
    subtitle: 'Clona una voz desde 6 segundos de audio, 17 idiomas — licencia CPML no comercial.',
    bullets: [
      'Clona una voz a partir de apenas 6 segundos de audio de referencia',
      'Hace hablar la voz clonada en 17 idiomas, clonación entre idiomas',
      'Licencia: Coqui Public Model License (CPML), solo no comercial',
      'Se ejecuta mediante el kit Coqui TTS (pip install coqui-tts)',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'XTTS v2レビュー(2026):わずか6秒の音声から多言語ボイスクローニング',
    subtitle: '6秒の音声から声をクローン、17言語対応 — 非商用CPMLライセンス。',
    bullets: [
      'わずか6秒の参照音声から声をクローン',
      'クローンした声を17言語で話させる、言語間クローニング対応',
      'ライセンス:Coqui Public Model License(CPML)、非商用のみ',
      'Coqui TTSツールキット経由で実行(pip install coqui-tts)',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'XTTS v2: análise (2026) — clonagem de voz multilíngue a partir de 6 segundos de áudio',
    subtitle: 'Clona uma voz a partir de 6 segundos de áudio, 17 idiomas — licença CPML não comercial.',
    bullets: [
      'Clona uma voz a partir de apenas 6 segundos de áudio de referência',
      'Faz a voz clonada falar em 17 idiomas, clonagem entre idiomas',
      'Licença: Coqui Public Model License (CPML), somente não comercial',
      'Roda pelo kit de ferramentas Coqui TTS (pip install coqui-tts)',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة XTTS v2 (2026): استنساخ صوتي متعدد اللغات من 6 ثوانٍ من الصوت',
    subtitle: 'يستنسخ نموذج Coqui للاستنساخ الصوتي صوتًا من 6 ثوانٍ فقط من الصوت المرجعي، ويدعم 17 لغة مختلفة — بموجب رخصة Coqui Public Model License غير التجارية.',
    bullets: [
      'يستنسخ صوتًا من 6 ثوانٍ فقط من صوت مرجعي نظيف',
      'يجعل الصوت المستنسخ يتحدث بـ17 لغة، مع دعم الاستنساخ عبر اللغات',
      'الرخصة: Coqui Public Model License (CPML)، غير تجارية فقط، للاستخدام الشخصي والبحثي',
      'يعمل عبر أدوات Coqui TTS المفتوحة المصدر (pip install coqui-tts)',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'XTTS v2 评测(2026):仅需6秒音频即可实现多语言声音克隆',
    subtitle: '从6秒音频克隆声音,支持17种语言——非商业性质的CPML许可证。',
    bullets: [
      '仅需6秒参考音频即可克隆声音',
      '可用17种语言让克隆的声音说话,支持跨语言克隆',
      '许可证:Coqui Public Model License(CPML),仅限非商业用途',
      '通过Coqui TTS工具包运行(pip install coqui-tts)',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'XTTS v2 리뷰(2026): 단 6초의 오디오로 만드는 다국어 음성 클로닝',
    subtitle: '6초의 오디오로 목소리를 복제, 17개 언어 지원 — 비상업용 CPML 라이선스.',
    bullets: [
      '단 6초의 참조 오디오만으로 목소리를 복제',
      '복제된 목소리로 17개 언어를 말하게 함, 언어 간 클로닝 지원',
      '라이선스: Coqui Public Model License(CPML), 비상업용에 한함',
      'Coqui TTS 툴킷을 통해 실행(pip install coqui-tts)',
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
    const outPath = `${OUT_DIR}/xtts-v2-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
