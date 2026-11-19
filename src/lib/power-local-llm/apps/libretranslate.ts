// Local AI App Directory — LibreTranslate (layer: free, open-source, self-hosted machine translation API and
// web UI; its engine is the Argos Translate library, so translation runs on the operator's own server with
// downloaded language models. A separate paid hosted API exists at libretranslate.com/portal.libretranslate.com)
// Added 2026-11-19 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review
// badge. NOT hands-on tested.
// Sources read 2026-11-19:
// - libretranslate.com (home page: "Free and Open Source Machine Translation API", "Free to download. Offline
//   Capable. Easy to Setup.", AGPLv3, powered by Argos Translate, web UI for text and files, Get API Key portal link;
//   no company name, address, privacy or terms link on the page itself);
// - github.com/LibreTranslate/LibreTranslate (About: "Free and Open Source Machine Translation API. Self-hosted,
//   offline capable and easy to setup."; homepage https://libretranslate.com; license AGPL-3.0; README: "entirely
//   self-hosted. Unlike other APIs, it doesn't rely on proprietary software such as Google or Azure"; engine =
//   Argos Translate; TRADEMARK.md present);
// - api.github.com/repos/LibreTranslate/LibreTranslate (stargazers_count 17793, forks 1866, pushed_at
//   2026-11-14T12:22:54Z, not archived) and /releases (latest v1.9.6 published 2026-05-26T17:45:39Z, no release
//   assets) and /commits (newest commits are Weblate UI-translation updates 2026-11-14 and 2026-11-10; newest
//   code change 2026-10-26 "Use Ubuntu 24.04 for runners", UI change merged 2026-10-26);
// - pypi.org/project/libretranslate (1.9.6 uploaded 2026-05-26, requires Python >=3.8);
// - docs.libretranslate.com (quickstart `pip install libretranslate` then `libretranslate`, example request to
//   http://localhost:5000/translate; installation page: pip, Docker via run.sh / run.bat, docker-compose.cuda.yml
//   for CUDA 12.4.1, Gunicorn, Helm; `--load-only`, `--api-keys`, `--char-limit`, `--req-limit` etc.; default bind
//   127.0.0.1:5000; hardware/RAM/disk requirements NOT stated; API usage: /translate, /detect, /translate_file,
//   /languages, /suggest, /health, source "auto", format html, alternatives);
// - portal.libretranslate.com (hosted API: three paid plans listed at $14, $29 and $58 per month, no free keys,
//   7-day money-back guarantee) and portal.libretranslate.com/privacy.html (last updated September 23, 2025: no
//   storage or logging of translation texts; IP addresses and API keys recorded for 2 days to prevent abuse;
//   Stripe handles payment data; DPO postal address 2462 1st Ave N, St Petersburg, FL 33713, United States);
// - localhosted.com/libretranslate (third-party listing, unclaimed by the project: self-hosted translation API for
//   text and files; notes that text submitted on the public website goes to the hosted service while a self-hosted
//   deployment processes it on your server).
// Notes:
// - Install effort: no installer on the Releases page (no assets) or website; the documented easiest path is
//   `pip install libretranslate` / Docker `./run.sh`, so tier = one-command. A hosted web UI exists but is the
//   operator's service, not an install path.
// - hqCountry US from the privacy policy's postal address (St Petersburg, Florida, United States) of the entity
//   operating libretranslate.com / the paid hosted service; the open-source project itself is community-built
//   ("LibreTranslate Contributors"). The policy names no company form.
// - Hardware: docs state no RAM/disk/GPU requirement; GPU (CUDA 12.4.1) is an optional compose file, so
//   cpuOnly true reflects that the documented quickstart is pip with no GPU.
// Last upstream update: 2026-11-14 (newest push to the default branch, a Weblate translation commit; newest code
// change 2026-10-26; latest release v1.9.6 on 2026-05-26) -> NOT stale (5 days before this 2026-11-19 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'libretranslate',
  name: 'LibreTranslate',
  categories: ['translation'],
  interfaces: ['web', 'cli'],
  locality: 'local', // self-hosted: translation runs on your own server with Argos Translate models; a separate paid hosted API exists
  platforms: ['mac', 'win', 'linux', 'selfhosted', 'web'], // docs: pip (Python >= 3.8), Docker run.sh/run.bat, Helm; public website at libretranslate.com
  worksWith: ['Argos Translate', 'Docker', 'Kubernetes'],
  engine: 'builtin', // translation engine is the Argos Translate library, installed with it
  license: 'AGPL-3.0', // GitHub license field and README, checked 2026-11-19
  price: 'free', // the software is free; the hosted API at portal.libretranslate.com is paid (plans listed at $14, $29, $58 per month), checked 2026-11-19
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // no requirement stated in docs; CUDA via optional docker-compose.cuda.yml
  stars: 17793, // GitHub API, checked 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['docs', 'build'],
  url: 'libretranslate.com',
  storeLinks: {
    web: 'https://libretranslate.com',
    github: 'https://github.com/LibreTranslate/LibreTranslate',
  },
  installEffort: 'one-command',
  installEvidence: 'docs.libretranslate.com quickstart and installation page, checked 2026-11-19: `pip install libretranslate` then `libretranslate` (Python >= 3.8, PyPI 1.9.6); Docker via `./run.sh` (Linux/macOS) or `run.bat` (Windows) from a cloned repository; `docker compose -f docker-compose.cuda.yml up -d --build` for GPU; GitHub Releases v1.9.6 carries no .dmg/.exe/.AppImage assets',
  hqCountry: 'US',
  hqCountrySource: 'https://portal.libretranslate.com/privacy.html',
  tagline: {
    en: 'Free, open-source (AGPL-3.0) machine translation API and web interface you host yourself, powered by the Argos Translate engine, with text, file and language-detection endpoints; a paid hosted API is optional',
    de: 'Kostenlose, quelloffene (AGPL-3.0) Übersetzungs-API samt Weboberfläche zum Selbsthosten, angetrieben von der Argos-Translate-Engine, mit Endpunkten für Text, Dateien und Spracherkennung; eine kostenpflichtige gehostete API ist optional',
    fr: 'API de traduction automatique gratuite et open source (AGPL-3.0), avec interface web, à héberger soi-même, propulsée par le moteur Argos Translate, avec des points d\'accès pour le texte, les fichiers et la détection de langue ; une API hébergée payante est facultative',
    ja: '無料・オープンソース（AGPL-3.0）の機械翻訳APIとWebインターフェース。自分でホストでき、翻訳エンジンはArgos Translate。テキスト・ファイル・言語検出のエンドポイントを備え、有料のホスト型APIは任意',
    zh: '免费开源（AGPL-3.0）的机器翻译 API 与网页界面，可自行托管，翻译引擎为 Argos Translate，提供文本、文件和语言检测接口；付费托管 API 为可选项',
    es: 'API de traducción automática gratuita y de código abierto (AGPL-3.0), con interfaz web, que alojas tú mismo, impulsada por el motor Argos Translate, con endpoints de texto, archivos y detección de idioma; una API alojada de pago es opcional',
    pt: 'API de tradução automática gratuita e de código aberto (AGPL-3.0), com interface web, que você hospeda por conta própria, movida pelo motor Argos Translate, com endpoints de texto, arquivos e detecção de idioma; uma API hospedada paga é opcional',
    ar: 'واجهة برمجة ترجمة آلية مجانية ومفتوحة المصدر (AGPL-3.0) مع واجهة ويب، تستضيفها بنفسك، تعمل بمحرك Argos Translate، وتوفر نقاط وصول للنصوص والملفات وكشف اللغة؛ وواجهة مستضافة مدفوعة اختيارية',
    ko: '직접 호스팅하는 무료 오픈소스(AGPL-3.0) 기계 번역 API 및 웹 인터페이스로, Argos Translate 엔진을 사용하며 텍스트·파일·언어 감지 엔드포인트를 제공합니다. 유료 호스팅 API는 선택 사항입니다',
  },
  // Comparison attributes: the translation category has no comparison segment yet, so none are set.
  reviewSlug: 'libretranslate-review',
  pqReview: {
    date: '2026-11-19',
    version: '1.9.6',
    versionSourceUrl: 'https://github.com/LibreTranslate/LibreTranslate/releases',
  },
  verdict: 'Best for developers and teams who want a free, self-hosted translation API with a web interface and a REST API they control, and who accept a terminal or Docker setup, language models that must be downloaded, no stated hardware requirements and a last release from May 2026; PromptQuorum did not test translation quality or speed, and the hosted API is a separate paid service.',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-14', // GitHub API: newest push to the default branch (Weblate translation commit); newest code change 2026-10-26; latest release v1.9.6 2026-05-26; read 2026-11-19
  lastUpstreamUpdateSource: 'https://github.com/LibreTranslate/LibreTranslate',
}
