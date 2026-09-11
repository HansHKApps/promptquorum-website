#!/usr/bin/env node
const BASE = process.env.HERO_BASE || 'http://localhost:3508';
const SLUG = 'best-local-tts-nvidia-gpu';
const SPECS = {
  en: {
    title: 'Best Local TTS Engine for an NVIDIA GPU Setup (2026)',
    subtitle: 'XTTS v2, Chatterbox, and Bark compared on VRAM and CUDA speedup for voice cloning and expressive audio — plus Kokoro, the lightweight pick when a GPU is overkill.',
    bullets: [
      'XTTS v2: 4-6 GB VRAM, best voice-cloning quality, non-commercial CPML license.',
      'Chatterbox: MIT license, real-time conversational cloning, commercial-use eligible.',
      'Bark: ~8-12 GB VRAM, expressive non-speech audio, no voice cloning.',
      'Kokoro: ~2 GB VRAM or CPU-only — the pick when a GPU is overkill.',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Die beste lokale TTS-Engine für ein NVIDIA-GPU-Setup (2026)',
    subtitle: 'XTTS v2, Chatterbox und Bark im Vergleich nach VRAM und CUDA-Beschleunigung für Voice-Cloning und ausdrucksstarkes Audio — plus Kokoro als schlanke Option, wenn eine GPU übertrieben wäre.',
    bullets: [
      'XTTS v2: 4-6 GB VRAM, beste Voice-Cloning-Qualität, nicht-kommerzielle CPML-Lizenz.',
      'Chatterbox: MIT-Lizenz, Echtzeit-Cloning, kommerzielle Nutzung erlaubt.',
      'Bark: ~8-12 GB VRAM, ausdrucksstarkes nicht-sprachliches Audio, kein Voice-Cloning.',
      'Kokoro: ~2 GB VRAM oder nur CPU — die Wahl, wenn eine GPU übertrieben wäre.',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Meilleur moteur TTS local pour une configuration GPU NVIDIA (2026)',
    subtitle: 'XTTS v2, Chatterbox et Bark comparés sur la VRAM et l\'accélération CUDA pour le clonage vocal et l\'audio expressif — plus Kokoro, le choix léger quand un GPU est superflu.',
    bullets: [
      'XTTS v2 : 4-6 Go de VRAM, meilleure qualité de clonage vocal, licence CPML non commerciale.',
      'Chatterbox : licence MIT, clonage conversationnel en temps réel, usage commercial autorisé.',
      'Bark : ~8-12 Go de VRAM, audio expressif non vocal, pas de clonage vocal.',
      'Kokoro : ~2 Go de VRAM ou CPU seul — le choix quand un GPU est superflu.',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'NVIDIA GPU環境向け ベストなローカルTTSエンジン(2026)',
    subtitle: 'ボイスクローニングと表現力のあるオーディオに向けて、XTTS v2・Chatterbox・BarkをVRAMとCUDA高速化で比較。GPUが不要な場合の軽量な選択肢Kokoroも紹介。',
    bullets: [
      'XTTS v2: VRAM 4-6GB、最高品質のボイスクローニング、非商用のCPMLライセンス。',
      'Chatterbox: MITライセンス、リアルタイム会話クローニング、商用利用可。',
      'Bark: 約8-12GBのVRAM、表現力豊かな非音声オーディオ、ボイスクローニング非対応。',
      'Kokoro: 約2GBのVRAMまたはCPUのみ — GPUが不要な場合の選択肢。',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'NVIDIA GPU 配置下最佳本地 TTS 引擎(2026)',
    subtitle: '从 VRAM 需求和 CUDA 加速效果对比 XTTS v2、Chatterbox 和 Bark 的声音克隆与表现力音频能力,并介绍 GPU 用不上时的轻量选择 Kokoro。',
    bullets: [
      'XTTS v2:4-6GB 显存,最佳声音克隆质量,CPML 非商业许可证。',
      'Chatterbox:MIT 许可证,实时对话式克隆,可用于商业用途。',
      'Bark:约 8-12GB 显存,富有表现力的非语音音频,不支持声音克隆。',
      'Kokoro:约 2GB 显存或纯 CPU 运行——GPU 用不上时的选择。',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Mejor motor TTS local para una configuración con GPU NVIDIA (2026)',
    subtitle: 'XTTS v2, Chatterbox y Bark comparados en VRAM y aceleración CUDA para clonación de voz y audio expresivo — más Kokoro, la opción ligera cuando una GPU es excesiva.',
    bullets: [
      'XTTS v2: 4-6 GB de VRAM, mejor calidad de clonación de voz, licencia CPML no comercial.',
      'Chatterbox: licencia MIT, clonación conversacional en tiempo real, uso comercial permitido.',
      'Bark: ~8-12 GB de VRAM, audio expresivo no hablado, sin clonación de voz.',
      'Kokoro: ~2 GB de VRAM o solo CPU — la opción cuando una GPU es excesiva.',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'O Melhor Motor de TTS Local para uma GPU NVIDIA (2026)',
    subtitle: 'XTTS v2, Chatterbox e Bark comparados em VRAM e aceleração CUDA para clonagem de voz e áudio expressivo — além do Kokoro, a opção leve quando uma GPU é exagero.',
    bullets: [
      'XTTS v2: 4-6 GB de VRAM, melhor qualidade de clonagem de voz, licença CPML não comercial.',
      'Chatterbox: licença MIT, clonagem conversacional em tempo real, uso comercial permitido.',
      'Bark: ~8-12 GB de VRAM, áudio expressivo não falado, sem clonagem de voz.',
      'Kokoro: ~2 GB de VRAM ou apenas CPU — a opção quando uma GPU é exagero.',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'أفضل محرك تحويل نص إلى كلام محلي لإعداد GPU من NVIDIA (2026)',
    subtitle: 'مقارنة XTTS v2 وChatterbox وBark من حيث VRAM وتسريع CUDA لاستنساخ الصوت والصوت المعبّر — بالإضافة إلى Kokoro، الخيار الخفيف عندما تكون GPU زائدة عن الحاجة.',
    bullets: [
      'XTTS v2: ذاكرة VRAM من 4 إلى 6 غيغابايت، أفضل جودة لاستنساخ الصوت، ترخيص CPML غير تجاري.',
      'Chatterbox: ترخيص MIT، استنساخ محادثة فوري، يسمح بالاستخدام التجاري.',
      'Bark: حوالي 8-12 غيغابايت VRAM، صوت معبّر غير كلامي، بدون استنساخ صوت.',
      'Kokoro: حوالي 2 غيغابايت VRAM أو CPU فقط — الخيار عندما تكون GPU زائدة عن الحاجة.',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'NVIDIA GPU 환경을 위한 최고의 로컬 TTS 엔진(2026)',
    subtitle: '음성 복제와 표현력 있는 오디오를 위해 XTTS v2, Chatterbox, Bark를 VRAM과 CUDA 가속 기준으로 비교하고, GPU가 과할 때 적합한 경량 옵션 Kokoro도 소개합니다.',
    bullets: [
      'XTTS v2: VRAM 4-6GB, 최고 수준의 음성 복제 품질, 비상업용 CPML 라이선스.',
      'Chatterbox: MIT 라이선스, 실시간 대화형 음성 복제, 상업적 사용 가능.',
      'Bark: 약 8-12GB VRAM, 표현력 있는 비음성 오디오, 음성 복제 미지원.',
      'Kokoro: 약 2GB VRAM 또는 CPU만으로 실행 — GPU가 과할 때 적합한 선택.',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lang,
      title: spec.title,
      subtitle: spec.subtitle,
      bullets: spec.bullets,
      footer: spec.footer,
    }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
