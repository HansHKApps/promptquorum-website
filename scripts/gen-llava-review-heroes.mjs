#!/usr/bin/env node
// One-off hero generator for llava-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'LLaVA Review (2026): The Research Model That Started Local Vision AI',
    subtitle: 'The vision-encoder-plus-LLM pattern most local multimodal AI still follows — Apache-2.0 code, Llama-2-derived checkpoint terms.',
    bullets: [
      'Created by UW-Madison, Microsoft Research, and Columbia University researchers',
      'Code license: Apache-2.0; checkpoints inherit the Llama 2 community license via Vicuna',
      'Runs via `ollama pull llava` (7B, 13B, or 34B)',
      'No commits to the official repository since May 11, 2024',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'LLaVA im Test (2026): Das Forschungsmodell, das lokale Vision-KI begründete',
    subtitle: 'Das Muster Vision-Encoder-plus-LLM, dem die meiste lokale multimodale KI noch folgt — Apache-2.0-Code, von Llama 2 abgeleitete Checkpoint-Bedingungen.',
    bullets: [
      'Entwickelt von Forschern der UW-Madison, Microsoft Research und Columbia University',
      'Code-Lizenz: Apache-2.0; Checkpoints erben die Llama-2-Community-Lizenz über Vicuna',
      'Läuft über `ollama pull llava` (7B, 13B oder 34B)',
      'Keine Commits im offiziellen Repository seit dem 11. Mai 2024',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'LLaVA : avis (2026) — le modèle de recherche à l\'origine de l\'IA visuelle locale',
    subtitle: 'Le schéma encodeur-visuel-plus-LLM que suit encore la plupart de l\'IA multimodale locale — code Apache-2.0, conditions de checkpoint dérivées de Llama 2.',
    bullets: [
      'Créé par des chercheurs de l\'UW-Madison, de Microsoft Research et de l\'université Columbia',
      'Licence du code : Apache-2.0 ; les checkpoints héritent de la licence communautaire Llama 2 via Vicuna',
      's\'exécute via `ollama pull llava` (7B, 13B ou 34B)',
      'Aucun commit sur le dépôt officiel depuis le 11 mai 2024',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'LLaVA: análisis (2026) — el modelo de investigación que inició la IA visual local',
    subtitle: 'El patrón codificador-visual-más-LLM que aún sigue la mayoría de la IA multimodal local — código Apache-2.0, condiciones de checkpoint derivadas de Llama 2.',
    bullets: [
      'Creado por investigadores de la UW-Madison, Microsoft Research y la Universidad de Columbia',
      'Licencia del código: Apache-2.0; los checkpoints heredan la licencia comunitaria de Llama 2 vía Vicuna',
      'Se ejecuta mediante `ollama pull llava` (7B, 13B o 34B)',
      'Sin commits en el repositorio oficial desde el 11 de mayo de 2024',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'LLaVAレビュー(2026):ローカルビジョンAIの原点となった研究モデル',
    subtitle: '多くのローカルマルチモーダルAIが今も従うビジョンエンコーダー+LLMパターン。Apache-2.0コード、Llama 2由来のチェックポイント条件。',
    bullets: [
      'UW-Madison、Microsoft Research、コロンビア大学の研究者が開発',
      'コードライセンス:Apache-2.0。チェックポイントはVicuna経由でLlama 2コミュニティライセンスを継承',
      '`ollama pull llava`(7B、13B、34B)で実行可能',
      '2024年5月11日以降、公式リポジトリにコミットなし',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'LLaVA: análise (2026) — o modelo de pesquisa que iniciou a IA visual local',
    subtitle: 'O padrão codificador-visual-mais-LLM que a maioria da IA multimodal local ainda segue — código Apache-2.0, termos de checkpoint derivados do Llama 2.',
    bullets: [
      'Criado por pesquisadores da UW-Madison, Microsoft Research e Universidade Columbia',
      'Licença do código: Apache-2.0; os checkpoints herdam a licença comunitária do Llama 2 via Vicuna',
      'Executa via `ollama pull llava` (7B, 13B ou 34B)',
      'Sem commits no repositório oficial desde 11 de maio de 2024',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة LLaVA (2026): النموذج البحثي الذي أطلق الذكاء الاصطناعي البصري المحلي',
    subtitle: 'نمط مشفِّر بصري بالإضافة إلى نموذج لغوي كبير الذي لا يزال يتبعه معظم الذكاء الاصطناعي المتعدد الوسائط المحلي — كود Apache-2.0، شروط نقطة تحقق مشتقة من Llama 2.',
    bullets: [
      'طوّره باحثون من جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش وجامعة كولومبيا',
      'رخصة الكود: Apache-2.0؛ نقاط التحقق ترث رخصة Llama 2 المجتمعية عبر Vicuna',
      'يعمل عبر `ollama pull llava` (7B أو 13B أو 34B)',
      'لا التزامات في المستودع الرسمي منذ 11 مايو 2024',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'LLaVA评测(2026):开启本地视觉AI的研究模型',
    subtitle: '大多数本地多模态AI仍在遵循的视觉编码器加LLM模式——Apache-2.0代码,源自Llama 2的检查点条款。',
    bullets: [
      '由UW-Madison、微软研究院和哥伦比亚大学的研究人员创建',
      '代码许可证:Apache-2.0;检查点通过Vicuna继承Llama 2社区许可证',
      '通过`ollama pull llava`运行(7B、13B或34B)',
      '官方仓库自2024年5月11日起无任何提交',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'LLaVA 리뷰(2026): 로컬 비전 AI의 시작을 연 연구 모델',
    subtitle: '대부분의 로컬 멀티모달 AI가 여전히 따르는 비전 인코더 플러스 LLM 패턴 — Apache-2.0 코드, Llama 2에서 파생된 체크포인트 조건.',
    bullets: [
      'UW-Madison, Microsoft Research, 컬럼비아 대학교 연구진이 개발',
      '코드 라이선스: Apache-2.0; 체크포인트는 Vicuna를 통해 Llama 2 커뮤니티 라이선스를 상속',
      '`ollama pull llava`(7B, 13B, 34B)로 실행 가능',
      '공식 저장소는 2024년 5월 11일 이후 커밋 없음',
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
    const outPath = `${OUT_DIR}/llava-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
