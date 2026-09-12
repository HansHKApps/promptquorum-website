#!/usr/bin/env node
// One-off hero generator for dograh-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'dograh Review: Self-Hosted Voice AI Agent Platform',
    subtitle: 'An open-source, Docker-deployed alternative to Vapi and Retell with local LLM/STT/TTS support.',
    bullets: [
      'BSD-2-Clause license — self-hosting free forever',
      'Local LLM via Ollama/vLLM, local STT/TTS via Speaches',
      'Built-in telephony: Twilio, Vonage, Telnyx, Plivo',
      '5,636 GitHub stars, latest release v1.46.0',
      'Managed cloud option: $0.01/minute + provider usage',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'dograh im Test: Selbst gehostete Voice-AI-Agenten-Plattform',
    subtitle: 'Eine Open-Source-Alternative zu Vapi und Retell per Docker, mit lokalem LLM/STT/TTS-Support.',
    bullets: [
      'BSD-2-Clause-Lizenz — Selbst-Hosting für immer kostenlos',
      'Lokales LLM via Ollama/vLLM, lokales STT/TTS via Speaches',
      'Integrierte Telefonie: Twilio, Vonage, Telnyx, Plivo',
      '5.636 GitHub-Sterne, aktuellstes Release v1.46.0',
      'Managed-Cloud-Option: 0,01 $/Minute + Anbieterkosten',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'dograh : avis — plateforme d\'agents vocaux auto-hébergée',
    subtitle: 'Une alternative open source à Vapi et Retell déployée via Docker, avec LLM/STT/TTS locaux.',
    bullets: [
      'Licence BSD-2-Clause — auto-hébergement gratuit pour toujours',
      'LLM local via Ollama/vLLM, STT/TTS local via Speaches',
      'Téléphonie intégrée : Twilio, Vonage, Telnyx, Plivo',
      '5 636 étoiles GitHub, dernière version v1.46.0',
      'Option cloud gérée : 0,01 $/minute + usage fournisseurs',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'dograh: análisis — plataforma de agentes de voz autoalojada',
    subtitle: 'Una alternativa open source a Vapi y Retell desplegada vía Docker, con LLM/STT/TTS locales.',
    bullets: [
      'Licencia BSD-2-Clause — autoalojamiento gratis para siempre',
      'LLM local vía Ollama/vLLM, STT/TTS local vía Speaches',
      'Telefonía integrada: Twilio, Vonage, Telnyx, Plivo',
      '5,636 estrellas en GitHub, última versión v1.46.0',
      'Opción de nube gestionada: $0.01/minuto + uso de proveedores',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'dograh: análise — plataforma de agentes de voz auto-hospedada',
    subtitle: 'Uma alternativa open source ao Vapi e Retell implantada via Docker, com LLM/STT/TTS locais.',
    bullets: [
      'Licença BSD-2-Clause — auto-hospedagem grátis para sempre',
      'LLM local via Ollama/vLLM, STT/TTS local via Speaches',
      'Telefonia integrada: Twilio, Vonage, Telnyx, Plivo',
      '5.636 estrelas no GitHub, última versão v1.46.0',
      'Opção de nuvem gerenciada: $0,01/min + uso de provedores',
    ],
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'dograhレビュー:セルフホスト型音声AIエージェントプラットフォーム',
    subtitle: 'Dockerでデプロイするオープンソースの Vapi・Retell 代替、ローカルLLM/STT/TTS対応。',
    bullets: [
      'BSD-2-Clauseライセンス — セルフホストは永久無料',
      'Ollama/vLLMでローカルLLM、SpeachesでローカルSTT/TTS',
      '組み込みテレフォニー:Twilio、Vonage、Telnyx、Plivo',
      'GitHubスター5,636、最新リリースv1.46.0',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'dograh评测:自托管语音AI智能体平台',
    subtitle: '通过Docker部署的开源Vapi/Retell替代方案,支持本地LLM/STT/TTS。',
    bullets: [
      'BSD-2-Clause许可证——自托管永久免费',
      '通过Ollama/vLLM实现本地LLM,通过Speaches实现本地STT/TTS',
      '内置电话集成:Twilio、Vonage、Telnyx、Plivo',
      'GitHub星标5,636,最新版本v1.46.0',
    ],
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة dograh: منصة وكلاء صوتيين ذاتية الاستضافة',
    subtitle: 'بديل مفتوح المصدر لـVapi وRetell يُنشر عبر Docker، بدعم LLM/STT/TTS محلي.',
    bullets: [
      'رخصة BSD-2-Clause — الاستضافة الذاتية مجانية إلى الأبد',
      'LLM محلي عبر Ollama/vLLM، وSTT/TTS محلي عبر Speaches',
      'تكامل هاتفي مدمج: Twilio وVonage وTelnyx وPlivo',
      '5,636 نجمة على GitHub، أحدث إصدار v1.46.0',
      'خيار السحابة المُدارة: 0.01$ في الدقيقة زائد استخدام المزوّدين',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'dograh 리뷰: 셀프 호스팅 음성 AI 에이전트 플랫폼',
    subtitle: 'Docker로 배포하는 오픈소스 Vapi·Retell 대안, 로컬 LLM/STT/TTS 지원.',
    bullets: [
      'BSD-2-Clause 라이선스 — 셀프 호스팅 영구 무료',
      'Ollama/vLLM로 로컬 LLM, Speaches로 로컬 STT/TTS',
      '내장 텔레포니: Twilio, Vonage, Telnyx, Plivo',
      'GitHub 스타 5,636개, 최신 릴리스 v1.46.0',
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
    const outPath = `${OUT_DIR}/dograh-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
