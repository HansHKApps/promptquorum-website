#!/usr/bin/env node
const BASE = 'http://localhost:3000';
const SPECS = {
  'toolneuron-review': {
    en: { title: "ToolNeuron Review: Open-Source Encrypted Android AI App", subtitle: '', bullets: ["Free and open-source; the official GitHub LICENSE is the MIT License, with encrypted local storage via Android Keystore AES-256-GCM", "Runs GGUF models (Llama, Mistral, Gemma) fully on-device via llama.cpp, plus document RAG, voice input/output, and local image generation", "No cloud component and no telemetry for core features, per the project's own README — requires Android 12 (API 31) or newer"], footer: "PromptQuorum Guide" },
    de: { title: "ToolNeuron Review: Open-Source, verschlüsselte Android-KI-App", subtitle: '', bullets: ["Kostenlos und quelloffen; die offizielle GitHub-LICENSE ist die MIT-Lizenz, mit verschlüsseltem lokalem Speicher über Android Keystore AES-256-GCM", "Führt GGUF-Modelle (Llama, Mistral, Gemma) vollständig auf dem Gerät über llama.cpp aus, plus Dokumenten-RAG, Sprachein-/ausgabe und lokale Bildgenerierung", "Keine Cloud-Komponente und keine Telemetrie für Kernfunktionen, laut dem README des Projekts — benötigt Android 12 (API 31) oder neuer"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Avis ToolNeuron : application Android IA open source et chiffrée", subtitle: '', bullets: ["Gratuite et open source ; le fichier LICENSE officiel sur GitHub est la licence MIT, avec un stockage local chiffré via Android Keystore AES-256-GCM", "Exécute des modèles GGUF (Llama, Mistral, Gemma) entièrement sur l'appareil via llama.cpp, plus RAG documentaire, entrée/sortie vocale et génération d'images locale", "Aucun composant cloud ni télémétrie pour les fonctionnalités principales, selon le README du projet — nécessite Android 12 (API 31) ou plus récent"], footer: "Guide PromptQuorum" },
    es: { title: "Reseña de ToolNeuron: app Android de IA cifrada y de código abierto", subtitle: '', bullets: ["Gratuita y de código abierto; el archivo LICENSE oficial de GitHub es la licencia MIT, con almacenamiento local cifrado mediante Android Keystore AES-256-GCM", "Ejecuta modelos GGUF (Llama, Mistral, Gemma) totalmente en el dispositivo mediante llama.cpp, además de RAG de documentos, entrada/salida de voz y generación de imágenes local", "Sin componente en la nube ni telemetría para las funciones principales, según el README del proyecto — requiere Android 12 (API 31) o superior"], footer: "Guía de PromptQuorum" },
    pt: { title: "Análise do ToolNeuron: app Android de IA open source e criptografado", subtitle: '', bullets: ["Gratuito e de código aberto; o arquivo LICENSE oficial no GitHub é a licença MIT, com armazenamento local criptografado via Android Keystore AES-256-GCM", "Executa modelos GGUF (Llama, Mistral, Gemma) totalmente no dispositivo via llama.cpp, além de RAG de documentos, entrada/saída de voz e geração de imagens local", "Sem componente em nuvem nem telemetria para os recursos principais, segundo o README do projeto — requer Android 12 (API 31) ou mais recente"], footer: "Guia PromptQuorum" },
    ja: { title: "ToolNeuronレビュー:オープンソースの暗号化Android AIアプリ", subtitle: '', bullets: ["無料でオープンソース。公式GitHub LICENSEはMITライセンスで、Android KeystoreのAES-256-GCMによる暗号化ローカルストレージを備える", "llama.cpp経由でGGUFモデル(Llama、Mistral、Gemma)を完全にオンデバイスで実行し、ドキュメントRAG、音声入出力、ローカル画像生成にも対応", "プロジェクト自身のREADMEによれば、コア機能にクラウドコンポーネントやテレメトリはなし——Android 12(API 31)以降が必要"], footer: "PromptQuorumガイド" },
    zh: { title: "ToolNeuron评测:开源加密Android AI应用", subtitle: '', bullets: ["免费且开源;官方GitHub LICENSE为MIT许可证,通过Android Keystore AES-256-GCM提供加密本地存储", "通过llama.cpp完全在设备端运行GGUF模型(Llama、Mistral、Gemma),并支持文档RAG、语音输入输出和本地图像生成", "据项目自身README介绍,核心功能无云端组件、无遥测——需要Android 12(API 31)或更高版本"], footer: "PromptQuorum 指南" },
    ar: { title: "مراجعة ToolNeuron: تطبيق أندرويد مشفّر ومفتوح المصدر للذكاء الاصطناعي", subtitle: '', bullets: ["مجاني ومفتوح المصدر؛ ملف الترخيص الرسمي LICENSE على GitHub هو رخصة MIT، مع تخزين محلي مشفّر عبر Android Keystore AES-256-GCM", "يشغّل نماذج GGUF (Llama وMistral وGemma) بالكامل على الجهاز عبر llama.cpp، إضافة إلى RAG للمستندات، وإدخال/إخراج صوتي، وتوليد صور محليًا", "لا يوجد مكوّن سحابي ولا تتبع للاستخدام (تليمتري) للميزات الأساسية، وفق ملف README الخاص بالمشروع — يتطلب أندرويد 12 (API 31) أو أحدث"], footer: "دليل PromptQuorum" },
    ko: { title: "ToolNeuron 리뷰: 오픈소스 암호화 안드로이드 AI 앱", subtitle: '', bullets: ["무료이며 오픈소스; 공식 GitHub LICENSE는 MIT 라이선스이며, Android Keystore AES-256-GCM을 통한 암호화된 로컬 저장소를 갖춤", "llama.cpp를 통해 GGUF 모델(Llama, Mistral, Gemma)을 완전히 온디바이스에서 실행하며, 문서 RAG, 음성 입출력, 로컬 이미지 생성도 지원", "프로젝트 자체 README에 따르면 핵심 기능에 클라우드 구성 요소나 텔레메트리가 없음 — Android 12(API 31) 이상 필요"], footer: "PromptQuorum 가이드" },
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();
