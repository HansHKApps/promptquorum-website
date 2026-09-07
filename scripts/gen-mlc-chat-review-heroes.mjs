#!/usr/bin/env node
// One-off hero generator for mlc-chat-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'MLC Chat Review (2026): The Mobile App Built on MLC LLM',
    subtitle: 'A hands-on look at the consumer chat app: real iOS/Android download channels, setup steps, and honest limitations.',
    bullets: [
      'iOS: App Store; Android: direct APK from MLC\'s own GitHub releases',
      'Compiles models ahead-of-time per hardware target (Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Apache-2.0 license, built on the MLC LLM compiler and runtime',
      'No official vision-language model support as of this review',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'MLC-Chat-Test (2026): Die mobile App auf Basis von MLC LLM',
    subtitle: 'Ein praktischer Blick auf die Chat-App: echte iOS-/Android-Download-Kanäle, Einrichtungsschritte und ehrliche Einschränkungen.',
    bullets: [
      'iOS: App Store; Android: direkte APK von MLCs eigenen GitHub-Releases',
      'Kompiliert Modelle vorab je Hardware-Ziel (Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Apache-2.0-Lizenz, aufgebaut auf dem MLC-LLM-Compiler und der Laufzeitumgebung',
      'Zum Zeitpunkt dieses Tests keine offizielle Vision-Language-Modell-Unterstützung',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Avis sur MLC Chat (2026) : l\'application mobile construite sur MLC LLM',
    subtitle: 'Un regard pratique sur l\'application de chat : canaux de téléchargement iOS/Android réels, étapes de configuration et limites honnêtes.',
    bullets: [
      'iOS : App Store ; Android : APK direct depuis les publications GitHub de MLC',
      'Compile les modèles à l\'avance par cible matérielle (Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Licence Apache-2.0, construite sur le compilateur et l\'environnement d\'exécution MLC LLM',
      'Aucune prise en charge officielle des modèles vision-langage au moment de cet avis',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Análisis de MLC Chat (2026): la app móvil construida sobre MLC LLM',
    subtitle: 'Una mirada práctica a la app de chat: canales reales de descarga en iOS/Android, pasos de configuración y limitaciones honestas.',
    bullets: [
      'iOS: App Store; Android: APK directo desde los lanzamientos de GitHub de MLC',
      'Compila modelos por adelantado según el objetivo de hardware (Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Licencia Apache-2.0, construida sobre el compilador y runtime MLC LLM',
      'Sin soporte oficial de modelos de visión-lenguaje al momento de este análisis',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'MLC Chat レビュー(2026):MLC LLM上に構築されたモバイルアプリ',
    subtitle: 'チャットアプリの実践的な考察:実際のiOS/Androidダウンロード経路、セットアップ手順、正直な限界。',
    bullets: [
      'iOS:App Store;Android:MLC自身のGitHubリリースから直接APK',
      'ハードウェアターゲットごとにモデルを事前コンパイル(Metal、OpenCL、Vulkan、CUDA、ROCm)',
      'Apache-2.0ライセンス、MLC LLMコンパイラとランタイムの上に構築',
      '本レビュー時点でビジョン言語モデルの公式サポートなし',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Análise do MLC Chat (2026): o app móvel construído sobre o MLC LLM',
    subtitle: 'Um olhar prático sobre o app de chat: canais reais de download para iOS/Android, passos de configuração e limitações honestas.',
    bullets: [
      'iOS: App Store; Android: APK direto dos lançamentos no GitHub da MLC',
      'Compila modelos antecipadamente por alvo de hardware (Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Licença Apache-2.0, construído sobre o compilador e runtime MLC LLM',
      'Sem suporte oficial a modelos de visão-linguagem no momento desta análise',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة MLC Chat (2026): تطبيق الجوال المبني على MLC LLM',
    subtitle: 'نظرة عملية على تطبيق الدردشة: قنوات تنزيل حقيقية لنظامي iOS وAndroid، خطوات إعداد، وقيود صريحة.',
    bullets: [
      'iOS: App Store؛ Android: ملف APK مباشر من إصدارات GitHub الخاصة بـ MLC',
      'يُصرّف النماذج مسبقًا لكل هدف عتاد (Metal وOpenCL وVulkan وCUDA وROCm)',
      'رخصة Apache-2.0، مبني على مُصرّف ومحرك تشغيل MLC LLM',
      'لا دعم رسمي لنماذج الرؤية-اللغة حتى وقت هذه المراجعة',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'MLC Chat评测(2026):基于MLC LLM构建的手机应用',
    subtitle: '聊天应用的实测分析:真实的iOS/Android下载渠道、配置步骤,以及诚实的局限性。',
    bullets: [
      'iOS:App Store;Android:从MLC自己的GitHub发布页直接下载APK',
      '针对每个硬件目标预先编译模型(Metal、OpenCL、Vulkan、CUDA、ROCm)',
      'Apache-2.0许可证,基于MLC LLM编译器与运行时构建',
      '截至本次评测,官方不支持视觉语言模型',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'MLC Chat 리뷰(2026): MLC LLM 위에 구축된 모바일 앱',
    subtitle: '채팅 앱에 대한 실전 분석: 실제 iOS/Android 다운로드 경로, 설정 단계, 솔직한 한계.',
    bullets: [
      'iOS: App Store; Android: MLC 자체 GitHub 릴리스에서 직접 APK',
      '하드웨어 타깃별로 모델을 미리 컴파일(Metal, OpenCL, Vulkan, CUDA, ROCm)',
      'Apache-2.0 라이선스, MLC LLM 컴파일러 및 런타임 위에 구축',
      '본 리뷰 작성 시점 기준 비전-언어 모델의 공식 지원 없음',
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
    const outPath = `${OUT_DIR}/mlc-chat-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
