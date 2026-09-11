#!/usr/bin/env node
const BASE = process.env.HERO_BASE_URL || 'http://localhost:3504'
const SLUG = 'chatterbox-vs-elevenlabs'
const SPECS = {
  en: {
    title: 'Chatterbox vs ElevenLabs (2026): Open-Source vs Cloud Voice Cloning',
    subtitle: 'Chatterbox is a free, MIT-licensed local voice-cloning model from Resemble AI that you download and run yourself. ElevenLabs is a paid, managed cloud platform you access through a browser or API. Full comparison and buying guide for choosing between them.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Chatterbox vs ElevenLabs (2026): Open Source vs Cloud Voice Cloning',
    subtitle: 'Chatterbox ist ein kostenloses, MIT-lizenziertes lokales Voice-Cloning-Modell von Resemble AI, das Sie selbst herunterladen und betreiben. ElevenLabs ist eine kostenpflichtige, gemanagte Cloud-Plattform, auf die Sie per Browser oder API zugreifen. Der volle Vergleich.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Chatterbox vs ElevenLabs (2026) : open source ou cloud ?',
    subtitle: 'Chatterbox est un modèle de clonage vocal local gratuit sous licence MIT de Resemble AI, que vous téléchargez et exécutez vous-même. ElevenLabs est une plateforme cloud payante et gérée, accessible via navigateur ou API. Comparatif complet des deux outils.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Chatterbox vs ElevenLabs(2026):オープンソースかクラウドか',
    subtitle: 'ChatterboxはResemble AIによる無料・MITライセンスのローカル音声クローンモデル。ElevenLabsは有料のマネージドクラウドプラットフォーム。完全比較ガイド。どちらを選ぶべきか徹底解説します。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Chatterbox vs ElevenLabs(2026):开源还是云端克隆语音?',
    subtitle: 'Chatterbox 是 Resemble AI 推出的免费 MIT 许可本地语音克隆模型，可自行下载运行；ElevenLabs 是付费托管云平台，通过浏览器或 API 访问。完整对比指南，帮助你做出正确选择。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Chatterbox vs ElevenLabs (2026): ¿código abierto o nube?',
    subtitle: 'Chatterbox es un modelo local de clonación de voz gratuito con licencia MIT de Resemble AI que descargas y ejecutas tú mismo. ElevenLabs es una plataforma en la nube de pago y gestionada, accesible desde el navegador o una API. Comparativa completa.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Chatterbox vs ElevenLabs (2026): Código Aberto ou Nuvem?',
    subtitle: 'Chatterbox é um modelo local de clonagem de voz gratuito com licença MIT da Resemble AI, que você baixa e executa por conta própria. ElevenLabs é uma plataforma paga e gerenciada na nuvem, acessada pelo navegador ou por API. Comparativo completo.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Chatterbox مقابل ElevenLabs (2026): مفتوح المصدر أم سحابي؟',
    subtitle: 'Chatterbox نموذج مجاني برخصة MIT لاستنساخ الصوت محلياً من Resemble AI، تقوم بتنزيله وتشغيله بنفسك. أما ElevenLabs فهي منصة سحابية مدفوعة ومُدارة يتم الوصول إليها عبر المتصفح أو واجهة برمجة التطبيقات. مقارنة شاملة بين الأداتين.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Chatterbox vs ElevenLabs(2026년): 오픈소스냐 클라우드냐',
    subtitle: 'Chatterbox는 Resemble AI가 제공하는 무료 MIT 라이선스 로컬 음성 복제 모델이며, ElevenLabs는 유료 매니지드 클라우드 플랫폼입니다. 완전 비교 가이드로 알아봅니다.',
    footer: 'PromptQuorum 가이드',
  },
}

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  })
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const path = `public/images/${SLUG}-hero-${lang}.png`
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf))
  console.log(`  ${path} (${buf.length} bytes)`)
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec)
  }
  console.log('done')
})()
