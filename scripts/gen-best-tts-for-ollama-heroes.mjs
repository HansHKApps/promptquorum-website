#!/usr/bin/env node
const BASE = 'http://localhost:3505';
const SLUG = 'best-tts-for-ollama';
const SPECS = {
  en: {
    title: 'Best TTS for Ollama (2026): Adding Voice Output to a Local LLM Setup',
    subtitle: 'Ollama has no built-in text-to-speech. Compare Piper, Kokoro, XTTS v2, Coqui TTS, Bark, and Chatterbox on resource use, latency, and license to pick the right local TTS engine to pipe your Ollama output through.',
    bullets: [
      'Piper: GPL-3.0-or-later, CPU-only, real-time even on a Raspberry Pi',
      'Kokoro: Apache-2.0, 82M parameters, higher perceived quality',
      'XTTS v2 & Chatterbox: voice cloning, GPU recommended for real time',
      'Bark: MIT, expressive non-speech audio, not a primary-voice pick',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Beste TTS für Ollama (2026): Sprachausgabe für ein lokales LLM-Setup',
    subtitle: 'Ollama hat keine eingebaute Text-zu-Sprache-Funktion. Vergleich von Piper, Kokoro, XTTS v2, Coqui TTS, Bark und Chatterbox nach Ressourcenverbrauch, Latenz und Lizenz, um die richtige lokale TTS-Engine für Ihre Ollama-Ausgabe zu finden.',
    bullets: [
      'Piper: GPL-3.0-or-later, reines CPU, echtzeitfähig sogar auf einem Raspberry Pi',
      'Kokoro: Apache-2.0, 82M Parameter, höhere wahrgenommene Qualität',
      'XTTS v2 & Chatterbox: Voice-Cloning, GPU für Echtzeit empfohlen',
      'Bark: MIT, ausdrucksstarkes nicht-sprachliches Audio, keine primäre Stimmwahl',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Meilleur TTS pour Ollama (2026) : ajouter une sortie vocale à un LLM local',
    subtitle: 'Ollama n\'a pas de synthèse vocale intégrée. Comparez Piper, Kokoro, XTTS v2, Coqui TTS, Bark et Chatterbox selon la consommation de ressources, la latence et la licence pour choisir le bon moteur TTS local avec Ollama.',
    bullets: [
      'Piper : GPL-3.0-or-later, uniquement CPU, temps réel même sur un Raspberry Pi',
      'Kokoro : Apache-2.0, 82M de paramètres, qualité perçue supérieure',
      'XTTS v2 et Chatterbox : clonage vocal, GPU recommandé en temps réel',
      'Bark : MIT, audio expressif non vocal, pas la meilleure voix principale',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Ollamaに最適なTTSエンジン(2026年):ローカルLLMに音声出力を追加する方法',
    subtitle: 'OllamaにはTTS機能が組み込まれていません。Piper、Kokoro、XTTS v2、Coqui TTS、Bark、Chatterboxをリソース消費量、レイテンシ、ライセンスで比較し、Ollamaの出力を渡すのに適したローカルTTSエンジンを選びます。',
    bullets: [
      'Piper:GPL-3.0-or-later、CPUのみ、Raspberry Piでもリアルタイム',
      'Kokoro:Apache-2.0、8,200万パラメータ、より高い知覚品質',
      'XTTS v2とChatterbox:音声クローニング、リアルタイムにはGPU推奨',
      'Bark:MIT、表現力豊かな非音声オーディオ、主要な声には不向き',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Ollama最佳TTS引擎(2026):为本地LLM添加语音输出',
    subtitle: 'Ollama没有内置文本转语音功能。按资源占用、延迟和许可证比较Piper、Kokoro、XTTS v2、Coqui TTS、Bark和Chatterbox,为Ollama输出选择合适的本地TTS引擎。',
    bullets: [
      'Piper:GPL-3.0-or-later,仅用CPU,在Raspberry Pi上也能实时运行',
      'Kokoro:Apache-2.0,8200万参数,感知音质更高',
      'XTTS v2与Chatterbox:支持语音克隆,实时使用建议配GPU',
      'Bark:MIT许可证,富有表现力的非语音音频,不适合作主力语音',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Mejor TTS para Ollama (2026): añade salida de voz a tu LLM local',
    subtitle: 'Ollama no tiene síntesis de voz integrada. Compara Piper, Kokoro, XTTS v2, Coqui TTS, Bark y Chatterbox por uso de recursos, latencia y licencia para elegir el motor TTS local adecuado para conectar a Ollama.',
    bullets: [
      'Piper: GPL-3.0-or-later, solo CPU, tiempo real incluso en Raspberry Pi',
      'Kokoro: Apache-2.0, 82M de parámetros, mayor calidad percibida',
      'XTTS v2 y Chatterbox: clonación de voz, GPU recomendada en tiempo real',
      'Bark: MIT, audio expresivo no vocal, no como voz principal',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Melhor TTS para Ollama (2026): adicione saída de voz ao seu LLM local',
    subtitle: 'O Ollama não tem síntese de voz embutida. Compare Piper, Kokoro, XTTS v2, Coqui TTS, Bark e Chatterbox por uso de recursos, latência e licença para escolher o mecanismo TTS local certo para a saída do Ollama.',
    bullets: [
      'Piper: GPL-3.0-or-later, só CPU, tempo real até em um Raspberry Pi',
      'Kokoro: Apache-2.0, 82M de parâmetros, qualidade percebida superior',
      'XTTS v2 e Chatterbox: clonagem de voz, GPU recomendada em tempo real',
      'Bark: MIT, áudio expressivo não vocal, não como voz principal',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'أفضل محرك TTS لـ Ollama (2026): إضافة مخرجات صوتية إلى نموذج LLM محلي',
    subtitle: 'لا يملك Ollama تحويل نص إلى كلام مدمج. قارن بين Piper وKokoro وXTTS v2 وCoqui TTS وBark وChatterbox من حيث استهلاك الموارد وزمن الاستجابة والترخيص لاختيار محرك TTS المحلي المناسب لمخرجات Ollama.',
    bullets: [
      'Piper: رخصة GPL-3.0-or-later، CPU فقط، زمن حقيقي حتى على Raspberry Pi',
      'Kokoro: رخصة Apache-2.0، 82 مليون معامل، جودة مُدركة أعلى',
      'XTTS v2 وChatterbox: استنساخ الصوت، يُنصح باستخدام GPU للزمن الحقيقي',
      'Bark: رخصة MIT، صوت غير كلامي معبّر، ليس الخيار الأمثل كصوت أساسي',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Ollama에 가장 적합한 TTS(2026년): 로컬 LLM에 음성 출력 추가하기',
    subtitle: 'Ollama에는 텍스트 음성 변환 기능이 내장되어 있지 않습니다. Piper, Kokoro, XTTS v2, Coqui TTS, Bark, Chatterbox를 리소스 사용량, 지연 시간, 라이선스 기준으로 비교하여 Ollama 출력에 연결할 로컬 TTS 엔진을 선택하세요.',
    bullets: [
      'Piper: GPL-3.0-or-later, CPU 전용, Raspberry Pi에서도 실시간',
      'Kokoro: Apache-2.0, 8,200만 파라미터, 더 높은 체감 품질',
      'XTTS v2와 Chatterbox: 음성 복제, 실시간에는 GPU 권장',
      'Bark: MIT, 표현력 풍부한 비언어 오디오, 주요 음성에는 부적합',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
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
