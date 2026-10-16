// Local AI App Directory — Honey LLM - Offline AI (categories: general-chat-clients, document-pdf-chat; layer: mobile)
// Added 2026-10-16 at the operator's request. No maker outreach — this is an independent PromptQuorum entry.
// Verified on 2026-10-16 against: the Google Play listing (play.google.com/store/apps/details?id=com.ronbee.honeyllm —
// developer display name "Ron.Bee", released 2026-03-13, updated 2026-10-01, app version 3.5.0, Android 8.0 and up,
// 10K+ downloads, 3.7 stars from 31 ratings, content rating Everyone, "Offers in-app purchases", Data safety "No data collected"
// / "No data shared with third parties") and the privacy policy it links (github.com/Ron-Bee/privacy.html, file "privacy policy",
// "Last updated: February 2026": nothing collected, stored or transmitted; network only for optional model/app downloads;
// it does not mention documents, the Vault or purchases).
// Per-storefront Play in-app purchase price (checked 2026-10-16, one price shown per storefront): US $6.99, DE EUR 6,99,
// ES/FR EUR 7,49, JP JPY 1,220, BR R$ 9,99, KR KRW 12,000, SA SAR 29.99; the Chinese storefront showed no price. The title is
// "Honey LLM - Offline AI" in every storefront checked; the privacy policy calls the app "HoneyLLM Offline AI".
// The Play description names a free local AI demo and a "one-time in-app purchase" for unlimited use, no subscription.
// No product website and no source repository for the app found (Play page, the developer's GitHub profile, web search;
// honeyllm.com only redirects to a domain lander with no app content). Models, model sizes and inference engine are not named in any source read.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'honey-llm',
  name: 'Honey LLM',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // per the listing, chat and document processing run on the phone after a one-time model download; not audited
  platforms: ['android'],
  worksWith: [],
  engine: 'builtin', // runs its own on-device inference; the engine and model catalog are not named in the sources read
  license: 'Not stated', // closed source; no repository or license text found
  price: 'freemium', // free local demo; one-time in-app purchase unlocks unlimited use (Play: $6.99 on the US storefront)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // Android 8.0+ only; no RAM or model size stated
  stars: null, // no public repository
  addedDate: '2026-10-16',
  status: 'listed',
  uses: ['phone', 'chat', 'docs'],
  url: null, // no product website; the Play listing links only the privacy policy
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ronbee.honeyllm',
  },
  installEffort: 'installer',
  installEvidence:
    'Google Play listing com.ronbee.honeyllm checked 2026-10-16: standard Play install, no terminal step; Android 8.0+, v3.5.0, 10K+ downloads; the AI model is a separate in-app download.',
  tagline: {
    en: 'Android app that chats and answers questions about your PDF, DOCX, TXT and Markdown files with an on-device AI, plus an encrypted local vault',
    de: 'Android-App, die mit einer KI auf dem Gerät chattet und Fragen zu PDF-, DOCX-, TXT- und Markdown-Dateien beantwortet, mit verschlüsseltem lokalem Tresor',
    fr: "Application Android qui discute et répond aux questions sur vos fichiers PDF, DOCX, TXT et Markdown avec une IA sur l'appareil, avec coffre local chiffré",
    ja: '端末内AIでチャットし、PDF・DOCX・TXT・Markdownの内容に答えるAndroidアプリ。暗号化されたローカル金庫も搭載',
    zh: '用设备端AI聊天并回答PDF、DOCX、TXT和Markdown文件问题的Android应用，另带加密本地保险库',
    es: 'App de Android que chatea y responde preguntas sobre tus archivos PDF, DOCX, TXT y Markdown con una IA en el dispositivo, con bóveda local cifrada',
    pt: 'App para Android que conversa e responde perguntas sobre seus arquivos PDF, DOCX, TXT e Markdown com uma IA no aparelho, com cofre local criptografado',
    ar: 'تطبيق Android يدردش ويجيب عن الأسئلة حول ملفات PDF وDOCX وTXT وMarkdown بذكاء اصطناعي على الجهاز، مع خزنة محلية مشفّرة',
    ko: '기기 내 AI로 채팅하고 PDF·DOCX·TXT·Markdown 파일에 대한 질문에 답하는 Android 앱. 암호화된 로컬 보관함 포함',
  },
  // Each value taken from the Play description on 2026-10-16; a missing key = not stated there, never false.
  // offline = the developer says chat works without internet once a model is installed; modelDownloads = models are
  // downloaded in-app; localLlm/multiFormat/citations = on-device document Q&A over PDF, DOCX, TXT and Markdown with
  // "supporting page or section references". importModels, voice and visionInput stay unset: none is described.
  compare: { offline: true, modelDownloads: true, localLlm: true, multiFormat: true, citations: true },
  lastVerifiedDate: '2026-10-16',
  reviewSlug: 'honey-llm-review',
  pqReview: {
    date: '2026-10-16',
    version: '3.5.0',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.ronbee.honeyllm',
  },
  verdict:
    'Best for Android users who want a simple offline chat and document Q&A app with a free demo and a one-time unlock, and accept closed source and an unnamed model and engine; limited by claims that rest on the Play listing alone, no published code and a privacy policy that predates the document features',
}
