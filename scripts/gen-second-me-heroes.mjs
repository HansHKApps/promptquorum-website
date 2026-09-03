#!/usr/bin/env node
// One-off hero generator for second-me-review-2026 (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3400';

const SPECS = {
  en: {
    title: 'Second Me Review 2026: Train Your Own Personal AI Locally',
    subtitle: 'Second Me (github.com/mindverse/Second-Me) is an open-source project, released under the Apache License 2.0, for training a personalized AI representation of yourself from your own data rather than talking to a generic chatbot. It runs locally through llama.cpp, uses Microsoft\'s GraphRAG to turn your data into something the model can draw on, and starts from base models in the Qwen2.5 series.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Second Me Review 2026: Trainieren Sie Ihre eigene KI lokal',
    subtitle: 'Second Me (github.com/mindverse/Second-Me) ist ein Open-Source-Projekt unter der Apache License 2.0, mit dem Sie eine personalisierte KI-Repräsentation Ihrer selbst aus Ihren eigenen Daten trainieren, statt mit einem generischen Chatbot zu sprechen. Es läuft lokal über llama.cpp, nutzt Microsofts GraphRAG, um Ihre Daten in eine für das Modell nutzbare Form zu bringen, und startet von Basismodellen der Qwen2.5-Serie.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Second Me Review 2026 : entraînez votre propre IA en local',
    subtitle: 'Second Me (github.com/mindverse/Second-Me) est un projet open source sous licence Apache 2.0, permettant d\'entraîner une représentation IA personnalisée de vous-même à partir de vos propres données, plutôt que de parler à un chatbot générique. Il fonctionne en local via llama.cpp, utilise GraphRAG de Microsoft pour transformer vos données en une forme exploitable par le modèle, et part de modèles de base de la série Qwen2.5.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Second Meレビュー2026：自分専用のAIをローカルで訓練する',
    subtitle: 'Second Me（github.com/mindverse/Second-Me）は、Apache License 2.0の下で公開されているオープンソースプロジェクトで、汎用チャットボットと話す代わりに、自分自身のデータからパーソナライズされたAI表現を訓練するためのものです。llama.cppを通じてローカルで動作し、MicrosoftのGraphRAGを使ってデータをモデルが利用できる形に変換し、Qwen2.5シリーズのベースモデルから始まります。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Second Me评测2026：在本地训练属于你自己的AI',
    subtitle: 'Second Me（github.com/mindverse/Second-Me）是一个采用Apache License 2.0许可的开源项目，让你用自己的数据训练一个个性化的AI分身，而不是与通用聊天机器人对话。它通过llama.cpp在本地运行，使用微软的GraphRAG将你的数据转化为模型可以利用的形式，并从Qwen2.5系列基础模型出发。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Second Me Review 2026: entrena tu propia IA en local',
    subtitle: 'Second Me (github.com/mindverse/Second-Me) es un proyecto de código abierto bajo la Apache License 2.0 para entrenar una representación de IA personalizada de ti mismo a partir de tus propios datos, en lugar de hablar con un chatbot genérico. Funciona en local mediante llama.cpp, usa GraphRAG de Microsoft para convertir tus datos en algo que el modelo pueda aprovechar, y parte de modelos base de la serie Qwen2.5.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Second Me Review 2026: treine sua própria IA localmente',
    subtitle: 'O Second Me (github.com/mindverse/Second-Me) é um projeto open source sob a Apache License 2.0, para treinar uma representação de IA personalizada de você a partir dos seus próprios dados, em vez de conversar com um chatbot genérico. Ele roda localmente via llama.cpp, usa o GraphRAG da Microsoft para transformar seus dados em algo que o modelo pode aproveitar, e parte de modelos base da série Qwen2.5.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Second Me لعام 2026: درّب ذكاءك الاصطناعي الخاص محليًا',
    subtitle: 'Second Me (github.com/mindverse/Second-Me) هو مشروع مفتوح المصدر بموجب رخصة Apache 2.0، يتيح لك تدريب تمثيل ذكاء اصطناعي شخصي عنك من بياناتك الخاصة، بدلاً من التحدث إلى روبوت محادثة عام. يعمل محليًا عبر llama.cpp، ويستخدم GraphRAG من Microsoft لتحويل بياناتك إلى شكل يمكن للنموذج الاستفادة منه، وينطلق من نماذج أساس من سلسلة Qwen2.5.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Second Me 리뷰 2026: 나만의 AI를 로컬에서 훈련하기',
    subtitle: 'Second Me(github.com/mindverse/Second-Me)는 Apache License 2.0 라이선스로 공개된 오픈소스 프로젝트로, 범용 챗봇과 대화하는 대신 자신의 데이터로 개인화된 AI 표현을 훈련할 수 있게 해줍니다. llama.cpp를 통해 로컬에서 실행되며, Microsoft의 GraphRAG를 사용해 데이터를 모델이 활용할 수 있는 형태로 변환하고, Qwen2.5 시리즈의 베이스 모델에서 시작합니다.',
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';
const SLUG = 'second-me-review-2026';

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
    const outPath = `${OUT_DIR}/${SLUG}-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
