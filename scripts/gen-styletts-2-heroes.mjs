#!/usr/bin/env node
// One-off hero generator for styletts-2-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'StyleTTS 2 Review (2026): Columbia\'s MIT-Licensed Research Model for Natural Speech',
    subtitle: 'Style diffusion and adversarial training for near-human speech — MIT-licensed code, dormant since March 2024.',
    bullets: [
      'Natural-sounding speech via style diffusion and adversarial training',
      'Code license: MIT; pre-trained weights carry a README disclosure condition',
      'No commits to the official repository since March 7, 2024',
      'Zero-shot style transfer from a 5-10 second reference clip',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'StyleTTS 2 im Test (2026): Columbias MIT-lizenziertes Forschungsmodell für natürliche Sprache',
    subtitle: 'Style-Diffusion und adversariales Training für nahezu menschliche Sprache — MIT-Lizenz, seit März 2024 ruhend.',
    bullets: [
      'Natürlich klingende Sprache durch Style-Diffusion und adversariales Training',
      'Code-Lizenz: MIT; vortrainierte Gewichte mit README-Offenlegungsbedingung',
      'Keine Commits im offiziellen Repository seit dem 7. März 2024',
      'Zero-Shot-Style-Transfer aus einem 5-10-Sekunden-Referenzclip',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'StyleTTS 2 : avis (2026) — le modèle de recherche sous licence MIT de Columbia pour une voix naturelle',
    subtitle: 'Diffusion de style et entraînement adversarial pour une voix quasi humaine — licence MIT, dépôt dormant depuis mars 2024.',
    bullets: [
      'Voix au rendu naturel grâce à la diffusion de style et à l\'entraînement adversarial',
      'Licence du code : MIT ; les poids pré-entraînés portent une condition de divulgation dans le README',
      'Aucun commit sur le dépôt officiel depuis le 7 mars 2024',
      'Transfert de style zero-shot à partir d\'un extrait de référence de 5 à 10 secondes',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'StyleTTS 2 reseña (2026): el modelo de investigación de Columbia con licencia MIT para voz natural',
    subtitle: 'Difusión de estilo y entrenamiento adversarial para voz casi humana — licencia MIT, repositorio inactivo desde marzo de 2024.',
    bullets: [
      'Voz de sonido natural mediante difusión de estilo y entrenamiento adversarial',
      'Licencia del código: MIT; los pesos preentrenados llevan una condición de divulgación en el README',
      'Sin commits en el repositorio oficial desde el 7 de marzo de 2024',
      'Transferencia de estilo zero-shot desde un clip de referencia de 5 a 10 segundos',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'StyleTTS 2レビュー(2026):コロンビア大学のMITライセンス研究モデルで自然な音声を生成',
    subtitle: 'スタイル拡散と敵対的学習で人間に迫る自然な音声を生成。MITライセンスのコードだが、2024年3月から更新停止。',
    bullets: [
      'スタイル拡散と敵対的学習による自然な音声生成',
      'コードライセンス:MIT。事前学習済み重みにはREADMEの開示条件あり',
      '公式リポジトリは2024年3月7日以降コミットなし',
      '5〜10秒の参照音声からゼロショットでスタイル転送',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'StyleTTS 2 análise (2026): o modelo de pesquisa da Columbia com licença MIT para voz natural',
    subtitle: 'Difusão de estilo e treinamento adversarial para voz quase humana — licença MIT, repositório inativo desde março de 2024.',
    bullets: [
      'Fala com som natural via difusão de estilo e treinamento adversarial',
      'Licença do código: MIT; pesos pré-treinados trazem condição de divulgação no README',
      'Nenhum commit no repositório oficial desde 7 de março de 2024',
      'Transferência de estilo zero-shot a partir de um clipe de referência de 5 a 10 segundos',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة StyleTTS 2 (2026): نموذج بحثي من جامعة كولومبيا برخصة MIT لصوت طبيعي',
    subtitle: 'انتشار الأسلوب والتدريب التنافسي لصوت يقارب الصوت البشري — كود برخصة MIT، لكن المستودع خامل منذ مارس 2024.',
    bullets: [
      'كلام طبيعي عبر انتشار الأسلوب والتدريب التنافسي',
      'رخصة الكود: MIT؛ الأوزان المُدرَّبة مسبقًا تحمل شرط إفصاح في README',
      'لا التزامات في المستودع الرسمي منذ 7 مارس 2024',
      'نقل الأسلوب دون أمثلة تدريبية من مقطع صوتي مرجعي مدته 5 إلى 10 ثوانٍ فقط',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'StyleTTS 2评测(2026):哥伦比亚大学MIT许可的自然语音研究模型',
    subtitle: '通过风格扩散和对抗训练生成接近人声的语音——MIT许可代码,但自2024年3月起已停止更新。',
    bullets: [
      '通过风格扩散和对抗训练生成听起来自然的语音',
      '代码许可证:MIT;预训练权重在README中附带披露条件',
      '官方仓库自2024年3月7日起无任何提交',
      '通过5-10秒参考片段实现零样本风格迁移',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'StyleTTS 2 리뷰(2026): 자연스러운 음성을 위한 컬럼비아 대학교의 MIT 라이선스 연구 모델',
    subtitle: '스타일 확산과 적대적 학습으로 인간에 가까운 음성을 생성 — MIT 라이선스 코드지만 2024년 3월 이후 업데이트 중단.',
    bullets: [
      '스타일 확산과 적대적 학습을 통한 자연스러운 음성 생성',
      '코드 라이선스: MIT; 사전 학습된 가중치는 README 공개 조건 포함',
      '공식 저장소는 2024년 3월 7일 이후 커밋 없음',
      '5-10초 참조 클립을 통한 제로샷 스타일 전송',
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
    const outPath = `${OUT_DIR}/styletts-2-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
