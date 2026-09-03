#!/usr/bin/env node
// One-off hero generator for h2ogpt-review-2026 (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3411';

const SPECS = {
  en: {
    title: 'h2oGPT Review 2026: Features, Setup, and Why the Project Is Archived',
    subtitle: 'h2oGPT bundles private document RAG, vision, and voice into one Apache 2.0 codebase from H2O.ai.',
    bullets: [
      'H2O.ai archived (read-only) the repo on February 26, 2026 — no new commits or patches',
      'Apache 2.0 license, roughly 12,000 GitHub stars and 1,300 forks at archival',
      'RAG over documents, images, audio, video; 50+ backends including Ollama and vLLM',
      'H2O.ai\'s actively maintained successor is h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'h2oGPT im Test 2026: Funktionen, Setup und warum das Projekt archiviert ist',
    subtitle: 'h2oGPT bündelt privates Dokumenten-RAG, Vision und Sprache in einer Apache-2.0-Codebasis von H2O.ai.',
    bullets: [
      'H2O.ai archivierte das Repository am 26. Februar 2026 — keine neuen Commits mehr',
      'Apache-2.0-Lizenz, rund 12.000 GitHub-Stars und 1.300 Forks zur Archivierung',
      'RAG über Dokumente, Bilder, Audio, Video; über 50 Backends inklusive Ollama und vLLM',
      'H2O.ais aktiv gepflegter Nachfolger ist h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'h2oGPT en 2026 : fonctionnalités, installation et pourquoi le projet est archivé',
    subtitle: 'h2oGPT combine RAG documentaire privé, vision et voix dans une base de code Apache 2.0 signée H2O.ai.',
    bullets: [
      'H2O.ai a archivé le dépôt le 26 février 2026 — plus aucun nouveau commit',
      'Licence Apache 2.0, environ 12 000 étoiles GitHub et 1 300 forks à l\'archivage',
      'RAG sur documents, images, audio, vidéo ; plus de 50 backends dont Ollama et vLLM',
      'Le successeur activement maintenu par H2O.ai est h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'h2oGPTレビュー2026：機能・セットアップ・アーカイブされた理由',
    subtitle: 'h2oGPTはプライベート文書RAG、ビジョン、音声をH2O.ai製のApache 2.0コードベースに統合しています。',
    bullets: [
      'H2O.aiは2026年2月26日にリポジトリをアーカイブ — 新しいコミットはなし',
      'Apache 2.0ライセンス、アーカイブ時点で約12,000スター・1,300フォーク',
      'ドキュメント・画像・音声・動画のRAG。Ollama・vLLMなど50以上のバックエンド',
      'H2O.aiが積極的に保守する後継製品はh2oGPTe（Enterprise h2oGPT）',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'h2oGPT评测2026：功能、部署方式与项目被归档的原因',
    subtitle: 'h2oGPT将私有文档RAG、视觉与语音整合进H2O.ai的Apache 2.0代码库。',
    bullets: [
      'H2O.ai于2026年2月26日将仓库归档 —— 不再有新提交',
      'Apache 2.0许可证，归档时约12,000星标、1,300分叉',
      '支持文档、图像、音频、视频RAG；50多种后端，包括Ollama和vLLM',
      'H2O.ai积极维护的继任产品是h2oGPTe（Enterprise h2oGPT）',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'h2oGPT en 2026: funciones, instalación y por qué el proyecto está archivado',
    subtitle: 'h2oGPT combina RAG documental privado, visión y voz en una base de código Apache 2.0 de H2O.ai.',
    bullets: [
      'H2O.ai archivó el repositorio el 26 de febrero de 2026 — sin nuevos commits',
      'Licencia Apache 2.0, cerca de 12.000 estrellas en GitHub y 1.300 forks al archivarse',
      'RAG sobre documentos, imágenes, audio, video; más de 50 backends incluyendo Ollama y vLLM',
      'El sucesor mantenido activamente por H2O.ai es h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'h2oGPT em 2026: recursos, instalação e por que o projeto está arquivado',
    subtitle: 'O h2oGPT combina RAG documental privado, visão e voz em uma base de código Apache 2.0 da H2O.ai.',
    bullets: [
      'A H2O.ai arquivou o repositório em 26 de fevereiro de 2026 — sem novos commits',
      'Licença Apache 2.0, cerca de 12.000 estrelas no GitHub e 1.300 forks no arquivamento',
      'RAG sobre documentos, imagens, áudio, vídeo; mais de 50 backends incluindo Ollama e vLLM',
      'O sucessor mantido ativamente pela H2O.ai é o h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة h2oGPT لعام 2026: الميزات، الإعداد، ولماذا أُرشف المشروع',
    subtitle: 'يجمع h2oGPT بين RAG الخاص على المستندات والرؤية والصوت في قاعدة كود واحدة من H2O.ai.',
    bullets: [
      'أرشفت H2O.ai المستودع في 26 فبراير 2026 — لا توجد commits جديدة',
      'رخصة Apache 2.0، ونحو 12,000 نجمة و1,300 fork وقت الأرشفة',
      'RAG على المستندات والصور والصوت والفيديو؛ أكثر من 50 خلفية منها Ollama وvLLM',
      'الخَلَف الذي تصونه H2O.ai بنشاط هو h2oGPTe (Enterprise h2oGPT)',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'h2oGPT 리뷰 2026: 기능, 설치 방법, 그리고 프로젝트가 아카이브된 이유',
    subtitle: 'h2oGPT는 비공개 문서 RAG, 비전, 음성을 H2O.ai의 Apache 2.0 코드베이스 하나로 통합합니다.',
    bullets: [
      'H2O.ai가 2026년 2월 26일 저장소를 아카이브 — 새로운 커밋 없음',
      'Apache 2.0 라이선스, 아카이브 시점 약 12,000 스타·1,300 포크',
      '문서·이미지·오디오·비디오 RAG. Ollama, vLLM 등 50개 이상 백엔드',
      'H2O.ai가 적극적으로 유지 관리하는 후속 제품은 h2oGPTe(Enterprise h2oGPT)',
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
    const outPath = `${OUT_DIR}/h2ogpt-review-2026-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
