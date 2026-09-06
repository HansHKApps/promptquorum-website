#!/usr/bin/env node
// One-off hero generator for bark-tts-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'Bark TTS Review (2026): Suno\'s MIT-Licensed Model for Laughter, Sighs, and Speech',
    subtitle: 'Generates multilingual speech plus laughter and sighs — no commits since April 2024.',
    bullets: [
      'MIT license — fully commercial since May 1, 2023',
      'Generates laughter, sighs, gasps, and simple music from text',
      'No custom voice cloning, per Suno\'s own documentation',
      'No GitHub commits since April 5, 2024 — maintenance uncertain',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Bark TTS im Test (2026): Sunos MIT-lizenziertes Modell für Lachen, Seufzen und Sprache',
    subtitle: 'Erzeugt mehrsprachige Sprache plus Lachen und Seufzen — keine Commits seit April 2024.',
    bullets: [
      'MIT-Lizenz — seit dem 1. Mai 2023 vollständig kommerziell',
      'Erzeugt Lachen, Seufzen, Keuchen und einfache Musik aus Text',
      'Kein individuelles Voice-Cloning, laut Sunos eigener Dokumentation',
      'Keine GitHub-Commits seit dem 5. April 2024 — Pflegestatus unsicher',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Bark TTS : avis (2026) — le modèle sous licence MIT de Suno pour le rire et la parole',
    subtitle: 'Génère une parole multilingue plus rire et soupirs — aucun commit depuis avril 2024.',
    bullets: [
      'Licence MIT — pleinement commerciale depuis le 1er mai 2023',
      'Génère rire, soupirs, halètements et musique simple à partir de texte',
      'Pas de clonage vocal personnalisé, selon la documentation de Suno',
      'Aucun commit GitHub depuis le 5 avril 2024 — maintenance incertaine',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Bark TTS: análisis (2026) — el modelo con licencia MIT de Suno para risas y habla',
    subtitle: 'Genera habla multilingüe más risas y suspiros — sin commits desde abril de 2024.',
    bullets: [
      'Licencia MIT — comercial completo desde el 1 de mayo de 2023',
      'Genera risas, suspiros, jadeos y música simple a partir de texto',
      'Sin clonación de voz personalizada, según la documentación de Suno',
      'Sin commits en GitHub desde el 5 de abril de 2024 — mantenimiento incierto',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Barkレビュー(2026):笑い声・ため息・音声を生成するSunoのMITライセンスモデル',
    subtitle: '多言語音声に加え笑い声やため息を生成 — 2024年4月以降コミットなし。',
    bullets: [
      'MITライセンス — 2023年5月1日以降完全に商用利用可能',
      'テキストから笑い声、ため息、あえぎ声、簡単な音楽を生成',
      'Suno自身のドキュメントによればカスタムボイスクローニングなし',
      '2024年4月5日以降GitHubコミットなし — メンテナンス状況は不確か',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Bark TTS: análise (2026) — o modelo com licença MIT da Suno para risadas e fala',
    subtitle: 'Gera fala multilíngue mais risadas e suspiros — sem commits desde abril de 2024.',
    bullets: [
      'Licença MIT — totalmente comercial desde 1º de maio de 2023',
      'Gera risadas, suspiros, arquejos e música simples a partir de texto',
      'Sem clonagem de voz personalizada, segundo a documentação da Suno',
      'Sem commits no GitHub desde 5 de abril de 2024 — manutenção incerta',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Bark (2026): نموذج Suno المرخّص بموجب MIT للضحك والتنهد والكلام',
    subtitle: 'نموذج Bark الصوتي التوليدي مفتوح المصدر من Suno ينتج كلامًا واقعيًا متعدد اللغات إضافة إلى الضحك والتنهد والموسيقى البسيطة، بموجب رخصة MIT المتساهلة تمامًا، لكن مستودعه العام على GitHub لم يشهد أي التزامات منذ أبريل 2024.',
    bullets: [
      'رخصة MIT — تجارية بالكامل منذ 1 مايو 2023',
      'ينتج الضحك والتنهد واللهاث وموسيقى بسيطة من النص وحده',
      'لا يدعم استنساخ صوت مخصص، وفقًا لوثائق Suno الرسمية',
      'لا التزامات على مستودع GitHub العام منذ 5 أبريل 2024 — حالة الصيانة غير مؤكدة',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'Bark 评测(2026):Suno 旗下支持笑声、叹息与语音的 MIT 许可模型',
    subtitle: '生成多语言语音及笑声与叹息——自2024年4月起无提交记录。',
    bullets: [
      'MIT 许可证——自2023年5月1日起完全商用',
      '从文本生成笑声、叹息、喘息和简单音乐',
      '根据 Suno 官方文档,不支持自定义声音克隆',
      '自2024年4月5日起 GitHub 无提交记录——维护状态不确定',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'Bark 리뷰(2026): 웃음, 한숨, 음성을 만드는 Suno의 MIT 라이선스 모델',
    subtitle: '다국어 음성과 웃음, 한숨을 생성 — 2024년 4월 이후 커밋 없음.',
    bullets: [
      'MIT 라이선스 — 2023년 5월 1일부터 완전 상업용',
      '텍스트로부터 웃음, 한숨, 헐떡임, 간단한 음악 생성',
      'Suno 자체 문서에 따르면 맞춤형 음성 클로닝 없음',
      '2024년 4월 5일 이후 GitHub 커밋 없음 — 유지 관리 불확실',
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
    const outPath = `${OUT_DIR}/bark-tts-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
