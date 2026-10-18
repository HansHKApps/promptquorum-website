// Per-language copy for the Local LLMs hub on the shared hub template (see hub-template.tsx).
// Plain data, no JSX. Counts are never typed here: the adapter fills {tiles} / {pages}.
// Strings the old hub already had (hero title and intro, theme labels and descriptions, FAQs, tables,
// start-here picks, regional context) stay in hub-content.ts and are reused as they are.
// Style per docs/geo-translation.md: DE Sie-form, ES tu, FR vous, JA desu/masu, PT voce (pt-BR),
// AR MSA with Latin technical terms, KO formal -seumnida. Product names and identifiers stay Latin.

import type { Lang } from '@/lib/i18n/constants'

export const THEME_IDS = [
  'getting-started',
  'best-models',
  'tools-interfaces',
  'hardware-performance',
  'advanced-techniques',
  'enterprise',
  'gpu-buying-guides',
  'hardware-setups',
  'privacy-business',
  'cost-comparisons',
  'apple-silicon',
  'enterprise-compliance',
] as const

export type ThemeId = (typeof THEME_IDS)[number]

export const DEEPER_SLUGS = ['smart-home', 'balcony-solar', 'power-local-llm', 'prompt-bites', 'prompt-engineering'] as const
export type DeeperSlug = (typeof DEEPER_SLUGS)[number]

export interface HubTemplateCopy {
  pill: string
  /** Must appear verbatim in HUB_HERO_TITLE[lang]. */
  titleHighlight: string
  primaryCta: string
  secondaryCta: string
  summary: [{ label: string; text: string }, { label: string; text: string }]
  flow: { title: string; caption: string; ariaLabel: string; hardware: string; runtime: string; models: string }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string }
  explore: { title: string; intro: string; unit: string; tileSummary: Record<ThemeId, string> }
  why: { title: string; intro: string; takeaway: string }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; lines: Record<DeeperSlug, string> }
  overview: { title: string }
  reviewed: string
  home: string
}

/** Strings the old hub never had in Korean (it fell back to English). Used only by the template. */
export interface KoOverrides {
  faqTitle: string
  presentationHeading: string
  presentationDesc: string
  presentationPdf: string
  captions: { vram: string; cloud: string; models: string; ollama: string; pq: string }
  regionalTitle: string
  regionalItems: { region: string; text: string }[]
}

export const KO_OVERRIDES: KoOverrides = {
  faqTitle: '자주 묻는 질문',
  presentationHeading: '시각 요약: 로컬 LLM 2026',
  presentationDesc:
    '아래 슬라이드는 하드웨어 요구 사항(7B 모델은 8 GB VRAM, 70B는 40 GB 이상), 2026년 최고의 오픈소스 모델, 5분 만에 끝내는 Ollama 설정, Q4_K_M 양자화, 지역별 규정 준수(GDPR, APPI), 핵심 요점을 다룹니다. PDF를 로컬 LLM 빠른 참조 카드로 내려받으세요.',
  presentationPdf: '로컬 LLM 참조 카드 다운로드(PDF)',
  captions: {
    vram: 'Q4_K_M 양자화 기준 VRAM 요구량: 8 GB로 7B 모델을 50~80 tok/s로 실행하고, Llama 4 Scout 같은 70B 모델에는 40 GB 이상이 필요합니다.',
    cloud: '로컬 LLM은 하드웨어 구입 후 토큰당 비용이 $0입니다. 클라우드 API는 100만 토큰당 $0.15~$60를 청구하는 대신 평균 품질이 더 높고 설정이 필요 없습니다.',
    models: '2026년 최고의 오픈소스 로컬 모델: Llama 4 Scout, Qwen3.5 72B, DeepSeek V3(워크스테이션)와 Mistral 7B, Phi-3.5 Mini(일반 소비자용 하드웨어).',
    ollama: 'Ollama 터미널: 명령어 두 개로 Llama 3.2를 로컬에 설치해 실행합니다. 처음부터 10분 이내에 초당 60 토큰까지.',
    pq: 'PromptQuorum은 하나의 프롬프트를 로컬 Ollama 모델과 25개 이상의 클라우드 API에 동시에 보내며, 결과를 한 화면에서 나란히 비교할 수 있습니다.',
  },
  regionalTitle: '규정 준수 및 지역별 맥락',
  regionalItems: [
    {
      region: 'EU / GDPR',
      text: '로컬 LLM은 모든 데이터를 온프레미스에서 처리합니다. 전체 디스크 암호화와 접근 로깅을 함께 사용하면 온프레미스 추론은 GDPR 제28조를 충족합니다(데이터가 기기를 떠나지 않으면 데이터 처리 계약이 필요하지 않습니다). Ollama는 기본적으로 `localhost`에 바인딩되어 외부에 노출되지 않습니다.',
    },
    {
      region: '일본 / APPI',
      text: '일본의 개인정보보호법(APPI)은 개인정보의 국외 이전을 제한합니다. 로컬 LLM은 국외 이전을 아예 없앱니다. 경제산업성(METI)의 2024년 AI 거버넌스 지침은 프라이버시를 보호하는 AI를 장려하며, 로컬 배포는 이 권고와 일치합니다.',
    },
    {
      region: '중국 / CAC',
      text: '중국 국가인터넷정보판공실(CAC)의 「생성형 인공지능 서비스 관리 임시 방법」(2023)은 중국 사용자에게 서비스를 제공하는 AI 제공자에게 등록을 요구합니다. 전적으로 온프레미스에서 실행되는 로컬 LLM은 CAC의 대외 서비스 제공자 정의에 해당하지 않아, 기업 배포의 규정 준수 부담이 크게 줄어듭니다.',
    },
  ],
}

export const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  en: {
    pill: 'Local LLMs',
    titleHighlight: 'Local LLMs',
    primaryCta: 'Run your first model',
    secondaryCta: 'See all topics',
    summary: [
      { label: 'In one sentence', text: 'Local LLMs are **language models that run entirely on your own computer**: no internet connection, no API fees, and no data leaving your machine.' },
      { label: 'In plain terms', text: 'Install Ollama or LM Studio, download a model that fits your VRAM, and start chatting. The guides below cover **every step**, from the first install to hardware, privacy and cost.' },
    ],
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from your hardware through a runtime to the model you run.',
      ariaLabel: 'Diagram: your hardware (VRAM, Apple Silicon, CPU) runs a runtime such as Ollama, LM Studio or llama.cpp, which loads an open model such as Llama, Qwen or Gemma',
      hardware: 'Hardware',
      runtime: 'Runtime',
      models: 'Models',
    },
    jump: { label: 'Jump to', start: 'Start here', explore: 'Topics', why: 'Why', latest: 'Recently updated', deeper: 'Go deeper', faq: 'FAQ' },
    start: { title: 'Start here', intro: 'The questions readers ask first, each with the guide to open. Pick the one that fits you.', badge: 'Start here' },
    explore: {
      title: 'Explore by topic',
      intro: '{tiles} topics, {pages} guides. One click opens a topic right where you are.',
      unit: 'Guides',
      tileSummary: {
        'getting-started': 'Install Ollama or LM Studio, run a first model, set up privately.',
        'best-models': 'Which model fits which job: coding, writing, languages, quantization.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp and other front-ends compared.',
        'hardware-performance': 'VRAM math, GPUs, Apple Silicon and CPU-only setups, speed tips.',
        'advanced-techniques': 'Local RAG, LoRA fine-tuning, agents, multimodal and custom models.',
        enterprise: 'On-prem and air-gapped deployment, GDPR compliance, scaling for teams.',
        'gpu-buying-guides': 'Budget picks, new versus used, and GPU comparisons for 7B to 70B models.',
        'hardware-setups': 'Complete PC builds, mini PCs, laptops and workstations at several budgets.',
        'privacy-business': 'Private setups for teams: NAS, VPN, offline workflows, sensitive data.',
        'cost-comparisons': 'Local versus cloud and subscriptions: cost, ROI and platform comparisons.',
        'apple-silicon': 'Unified memory sizing, MLX versus Ollama, Mac mini and MacBook setups.',
        'enterprise-compliance': 'SOC 2 and ISO 27001, licensing, data residency, enterprise buying and tooling.',
      },
    },
    why: {
      title: 'Practical answers',
      intro: 'Four practical answers, calculated with a simple memory formula (estimates, not measurements). The full tables are at the bottom of this page.',
      takeaway: '**In short:** 8 GB of RAM is enough for a 7B model, all data stays on your machine, and there are no API costs once you own the hardware.',
    },
    latest: { title: 'Recently updated', intro: 'The three pages with the newest change.', more: 'See all topics', updated: 'Updated', published: 'Published' },
    deeper: {
      title: 'Go deeper',
      intro: 'The other topic worlds, each in its own color.',
      open: 'Open',
      lines: {
        'smart-home': 'Run a home on your own hardware, with local voice and AI.',
        'balcony-solar': 'Plug-in solar devices, rules and guides.',
        'power-local-llm': 'Find the right local AI app.',
        'prompt-bites': 'Short answers in 60 seconds.',
        'prompt-engineering': 'Better results with any AI model.',
      },
    },
    overview: { title: 'Overview as a presentation' },
    reviewed: 'Content last reviewed:',
    home: 'Home',
  },
  de: {
    pill: 'Lokale LLMs',
    titleHighlight: 'lokale LLMs',
    primaryCta: 'Erstes Modell starten',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      { label: 'In einem Satz', text: 'Lokale LLMs sind **Sprachmodelle, die vollständig auf Ihrem eigenen Computer laufen**: ohne Internetverbindung, ohne API-Gebühren und ohne dass Daten Ihr Gerät verlassen.' },
      { label: 'In einfachen Worten', text: 'Ollama oder LM Studio installieren, ein Modell laden, das zu Ihrem VRAM passt, und losschreiben. Die Anleitungen unten führen durch **jeden Schritt**, von der Installation bis zu Hardware, Datenschutz und Kosten.' },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: von Ihrer Hardware über eine Laufzeitumgebung zum Modell.',
      ariaLabel: 'Schema: Ihre Hardware (VRAM, Apple Silicon, CPU) führt eine Laufzeitumgebung wie Ollama, LM Studio oder llama.cpp aus, die ein offenes Modell wie Llama, Qwen oder Gemma lädt',
      hardware: 'Hardware',
      runtime: 'Laufzeit',
      models: 'Modelle',
    },
    jump: { label: 'Springen zu', start: 'Hier starten', explore: 'Themen', why: 'Warum', latest: 'Zuletzt aktualisiert', deeper: 'Weiter vertiefen', faq: 'Häufige Fragen' },
    start: { title: 'Hier starten', intro: 'Die Fragen, die Leser zuerst stellen, jeweils mit der passenden Anleitung. Wählen Sie, was zu Ihnen passt.', badge: 'Hier starten' },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Anleitungen. Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      unit: 'Anleitungen',
      tileSummary: {
        'getting-started': 'Ollama oder LM Studio installieren, das erste Modell starten, privat einrichten.',
        'best-models': 'Welches Modell zu welcher Aufgabe passt: Coding, Schreiben, Sprachen, Quantisierung.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp und weitere Oberflächen im Vergleich.',
        'hardware-performance': 'VRAM-Rechnung, GPUs, Apple Silicon und reine CPU-Setups, Tipps für mehr Tempo.',
        'advanced-techniques': 'Lokales RAG, LoRA-Feintuning, Agenten, multimodale und eigene Modelle.',
        enterprise: 'On-Prem- und Air-Gap-Betrieb, DSGVO-Konformität, Skalierung für Teams.',
        'gpu-buying-guides': 'Budget-Tipps, neu oder gebraucht und GPU-Vergleiche für Modelle von 7B bis 70B.',
        'hardware-setups': 'Komplette PC-Builds, Mini-PCs, Laptops und Workstations für verschiedene Budgets.',
        'privacy-business': 'Private Setups für Teams: NAS, VPN, Offline-Workflows, sensible Daten.',
        'cost-comparisons': 'Lokal gegen Cloud und Abos: Kosten, ROI und Plattformvergleiche.',
        'apple-silicon': 'Unified-Memory-Größen, MLX gegen Ollama, Mac-mini- und MacBook-Setups.',
        'enterprise-compliance': 'SOC 2 und ISO 27001, Lizenzen, Datenresidenz, Einkauf und Tools für Unternehmen.',
      },
    },
    why: {
      title: 'Praktische Antworten',
      intro: 'Vier praktische Antworten, berechnet mit einer einfachen Speicherformel (Schätzwerte, keine Messungen). Die vollständigen Tabellen stehen unten auf der Seite.',
      takeaway: '**Kurz gesagt:** 8 GB RAM genügen für ein 7B-Modell, alle Daten bleiben auf Ihrem Gerät, und nach dem Hardwarekauf fallen keine API-Kosten an.',
    },
    latest: { title: 'Zuletzt aktualisiert', intro: 'Die drei Seiten mit der jüngsten Änderung.', more: 'Alle Themen ansehen', updated: 'Aktualisiert', published: 'Veröffentlicht' },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      lines: {
        'smart-home': 'Ein Zuhause auf eigener Hardware, mit lokaler Sprachsteuerung und KI.',
        'balcony-solar': 'Steckerfertige Solargeräte, Regeln und Anleitungen.',
        'power-local-llm': 'Die passende lokale KI-App finden.',
        'prompt-bites': 'Kurze Antworten in 60 Sekunden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
    },
    overview: { title: 'Überblick als Präsentation' },
    reviewed: 'Inhalt zuletzt geprüft:',
    home: 'Startseite',
  },
  fr: {
    pill: 'LLMs locaux',
    titleHighlight: 'LLMs Locaux',
    primaryCta: 'Lancer votre premier modèle',
    secondaryCta: 'Voir tous les sujets',
    summary: [
      { label: 'En une phrase', text: 'Les LLMs locaux sont des **modèles de langage qui s\'exécutent entièrement sur votre propre ordinateur** : sans connexion Internet, sans frais d\'API et sans qu\'aucune donnée ne quitte votre machine.' },
      { label: 'En termes simples', text: 'Installez Ollama ou LM Studio, téléchargez un modèle adapté à votre VRAM et commencez à discuter. Les guides ci-dessous couvrent **chaque étape**, de l\'installation au matériel, à la confidentialité et au coût.' },
    ],
    flow: {
      title: 'Comment tout s\'articule',
      caption: 'Schéma : de votre matériel au modèle, en passant par un moteur d\'exécution.',
      ariaLabel: 'Schéma : votre matériel (VRAM, Apple Silicon, CPU) fait tourner un moteur d\'exécution comme Ollama, LM Studio ou llama.cpp, qui charge un modèle ouvert comme Llama, Qwen ou Gemma',
      hardware: 'Matériel',
      runtime: 'Exécution',
      models: 'Modèles',
    },
    jump: { label: 'Aller à', start: 'Commencer ici', explore: 'Sujets', why: 'Pourquoi', latest: 'Mis à jour récemment', deeper: 'Approfondir', faq: 'FAQ' },
    start: { title: 'Commencer ici', intro: 'Les questions que les lecteurs posent en premier, chacune avec le guide à ouvrir. Choisissez celle qui vous correspond.', badge: 'Commencer ici' },
    explore: {
      title: 'Explorer par sujet',
      intro: '{tiles} sujets, {pages} guides. Un clic ouvre un sujet directement sur place.',
      unit: 'Guides',
      tileSummary: {
        'getting-started': 'Installer Ollama ou LM Studio, lancer un premier modèle, configurer en privé.',
        'best-models': 'Quel modèle pour quelle tâche : code, rédaction, langues, quantification.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp et d\'autres interfaces comparés.',
        'hardware-performance': 'Calcul de la VRAM, GPU, Apple Silicon, configurations CPU seul, conseils de vitesse.',
        'advanced-techniques': 'RAG local, fine-tuning LoRA, agents, modèles multimodaux et personnalisés.',
        enterprise: 'Déploiement sur site et en air-gap, conformité RGPD, passage à l\'échelle pour les équipes.',
        'gpu-buying-guides': 'Choix petit budget, neuf ou d\'occasion, comparatifs de GPU pour des modèles de 7B à 70B.',
        'hardware-setups': 'Configurations PC complètes, mini-PC, portables et stations de travail à plusieurs budgets.',
        'privacy-business': 'Configurations privées pour les équipes : NAS, VPN, flux hors ligne, données sensibles.',
        'cost-comparisons': 'Local face au cloud et aux abonnements : coûts, ROI et comparatifs de plateformes.',
        'apple-silicon': 'Taille de la mémoire unifiée, MLX face à Ollama, configurations Mac mini et MacBook.',
        'enterprise-compliance': 'SOC 2 et ISO 27001, licences, résidence des données, achats et outils pour l\'entreprise.',
      },
    },
    why: {
      title: 'Réponses pratiques',
      intro: 'Quatre réponses pratiques, calculées avec une formule mémoire simple (des estimations, pas des mesures). Les tableaux complets figurent en bas de page.',
      takeaway: '**En bref :** 8 Go de RAM suffisent pour un modèle 7B, toutes les données restent sur votre machine et aucun frais d\'API n\'est dû une fois le matériel acheté.',
    },
    latest: { title: 'Mis à jour récemment', intro: 'Les trois pages modifiées le plus récemment.', more: 'Voir tous les sujets', updated: 'Mis à jour', published: 'Publié' },
    deeper: {
      title: 'Approfondir',
      intro: 'Les autres univers thématiques, chacun dans sa propre couleur.',
      open: 'Ouvrir',
      lines: {
        'smart-home': 'Une maison sur votre propre matériel, avec voix et IA locales.',
        'balcony-solar': 'Appareils solaires prêts à brancher, règles et guides.',
        'power-local-llm': 'Trouver la bonne application d\'IA locale.',
        'prompt-bites': 'Réponses courtes en 60 secondes.',
        'prompt-engineering': 'De meilleurs résultats avec n\'importe quel modèle d\'IA.',
      },
    },
    overview: { title: 'Aperçu en présentation' },
    reviewed: 'Contenu vérifié pour la dernière fois:',
    home: 'Accueil',
  },
  ja: {
    pill: 'ローカルLLM',
    titleHighlight: 'ローカルLLM',
    primaryCta: '最初のモデルを動かす',
    secondaryCta: 'すべてのトピックを見る',
    summary: [
      { label: 'ひとことで', text: 'ローカルLLMとは、**自分のパソコン上だけで動作する大規模言語モデル**のことです。インターネット接続もAPI料金も不要で、データが端末の外に出ることもありません。' },
      { label: 'やさしく言うと', text: 'OllamaまたはLM Studioをインストールし、VRAMに合うモデルをダウンロードして、すぐに使い始めます。以下のガイドが、導入からハードウェア、プライバシー、コストまで**すべての手順**を案内します。' },
    ],
    flow: {
      title: '全体のつながり',
      caption: '図：ハードウェアから実行環境を経て、動かすモデルまで。',
      ariaLabel: '図：ハードウェア（VRAM、Apple Silicon、CPU）がOllama、LM Studio、llama.cppなどの実行環境を動かし、Llama、Qwen、Gemmaなどのオープンモデルを読み込む',
      hardware: 'ハードウェア',
      runtime: '実行環境',
      models: 'モデル',
    },
    jump: { label: '移動', start: 'ここから始める', explore: 'トピック', why: '理由', latest: '最近の更新', deeper: 'さらに深く', faq: 'よくある質問' },
    start: { title: 'ここから始める', intro: '読者が最初に抱く疑問と、最初に開くべきガイドです。当てはまるものを選んでください。', badge: 'ここから始める' },
    explore: {
      title: 'トピックから探す',
      intro: '{tiles}トピック、ガイド{pages}本。クリックすると、その場でトピックが開きます。',
      unit: 'ガイド',
      tileSummary: {
        'getting-started': 'OllamaやLM Studioの導入、最初のモデルの実行、プライベートな環境づくり。',
        'best-models': '用途に合うモデルの選び方：コーディング、文章作成、多言語、量子化。',
        'tools-interfaces': 'Ollama、LM Studio、Open WebUI、vLLM、llama.cppなどのツールとUIを比較。',
        'hardware-performance': 'VRAMの計算、GPU、Apple Silicon、CPUのみの構成、高速化のコツ。',
        'advanced-techniques': 'ローカルRAG、LoRAファインチューニング、エージェント、マルチモーダル、独自モデル。',
        enterprise: 'オンプレミスとエアギャップ運用、GDPR対応、チーム向けのスケール。',
        'gpu-buying-guides': '予算重視の選択、新品と中古、7Bから70Bモデル向けのGPU比較。',
        'hardware-setups': '予算別の完成PC構成、ミニPC、ノートPC、ワークステーション。',
        'privacy-business': 'チーム向けのプライベート環境：NAS、VPN、オフライン運用、機密データ。',
        'cost-comparisons': 'ローカルとクラウド・サブスクの比較：コスト、ROI、プラットフォーム比較。',
        'apple-silicon': 'ユニファイドメモリの目安、MLXとOllamaの比較、Mac miniとMacBookの構成。',
        'enterprise-compliance': 'SOC 2とISO 27001、ライセンス、データ所在地、企業向けの購入ガイドとツール。',
      },
    },
    why: {
      title: '実用的な答え',
      intro: '簡単なメモリ計算式で求めた4つの実用的な答えです（実測ではなく目安）。詳しい表はページ下部にあります。',
      takeaway: '**要点：** 7Bモデルは8 GBのRAMで動かせ、データは手元のマシンから出ず、ハードウェアを用意した後はAPI料金がかかりません。',
    },
    latest: { title: '最近の更新', intro: '最も新しく変更された3ページ。', more: 'すべてのトピックを見る', updated: '更新', published: '公開' },
    deeper: {
      title: 'さらに深く',
      intro: 'ほかのテーマ領域を、それぞれ専用の色で。',
      open: '開く',
      lines: {
        'smart-home': '自分のハードウェアで動く家。音声もAIもローカルで。',
        'balcony-solar': 'プラグイン式の太陽光発電機器、ルール、ガイド。',
        'power-local-llm': '最適なローカルAIアプリを見つける。',
        'prompt-bites': '60秒で読める短い回答。',
        'prompt-engineering': 'どのAIモデルでも結果を良くする方法。',
      },
    },
    overview: { title: 'プレゼンテーションで概要を見る' },
    reviewed: 'コンテンツの最終確認日:',
    home: 'ホーム',
  },
  zh: {
    pill: '本地LLM',
    titleHighlight: '本地LLM',
    primaryCta: '运行第一个模型',
    secondaryCta: '查看全部主题',
    summary: [
      { label: '一句话概括', text: '本地LLM是**完全在您自己电脑上运行的大语言模型**：无需联网，没有API费用，数据也不会离开您的设备。' },
      { label: '通俗地说', text: '安装 Ollama 或 LM Studio，下载与您显存匹配的模型，就可以开始对话。下面的指南涵盖**每一步**，从安装到硬件、隐私和成本。' },
    ],
    flow: {
      title: '整体如何衔接',
      caption: '示意图：从硬件经运行环境到您运行的模型。',
      ariaLabel: '示意图：硬件（显存、Apple 芯片、CPU）运行 Ollama、LM Studio 或 llama.cpp 等运行环境，后者加载 Llama、Qwen 或 Gemma 等开源模型',
      hardware: '硬件',
      runtime: '运行环境',
      models: '模型',
    },
    jump: { label: '跳转到', start: '从这里开始', explore: '主题', why: '为什么', latest: '最近更新', deeper: '深入了解', faq: '常见问题' },
    start: { title: '从这里开始', intro: '读者最先提出的问题，每个问题对应一篇该先打开的指南。选择最适合您的一个。', badge: '从这里开始' },
    explore: {
      title: '按主题浏览',
      intro: '{tiles}个主题，{pages}篇指南。点击即可就地展开主题。',
      unit: '指南',
      tileSummary: {
        'getting-started': '安装 Ollama 或 LM Studio，运行第一个模型，搭建私有环境。',
        'best-models': '什么任务用什么模型：编程、写作、多语言、量化。',
        'tools-interfaces': '对比 Ollama、LM Studio、Open WebUI、vLLM、llama.cpp 等工具与界面。',
        'hardware-performance': '显存计算、显卡、Apple 芯片与纯 CPU 方案，提速技巧。',
        'advanced-techniques': '本地 RAG、LoRA 微调、智能体、多模态与自定义模型。',
        enterprise: '本地部署与物理隔离、GDPR 合规、面向团队的扩展。',
        'gpu-buying-guides': '预算之选、新卡与二手卡、适合 7B 到 70B 模型的显卡对比。',
        'hardware-setups': '不同预算的整机方案、迷你主机、笔记本与工作站。',
        'privacy-business': '面向团队的私有化方案：NAS、VPN、离线工作流、敏感数据。',
        'cost-comparisons': '本地与云端、订阅服务对比：成本、投资回报与平台比较。',
        'apple-silicon': '统一内存容量选择、MLX 与 Ollama 对比、Mac mini 与 MacBook 方案。',
        'enterprise-compliance': 'SOC 2 与 ISO 27001、授权许可、数据驻留、企业采购与工具。',
      },
    },
    why: {
      title: '实用解答',
      intro: '四个用简单内存公式算出的实用解答（估算值，并非实测）。完整表格见页面底部。',
      takeaway: '**简而言之：** 8 GB 内存即可运行 7B 模型，所有数据都留在您的设备上，购买硬件后无需再付 API 费用。',
    },
    latest: { title: '最近更新', intro: '最近有改动的三个页面。', more: '查看全部主题', updated: '更新于', published: '发布于' },
    deeper: {
      title: '深入了解',
      intro: '其他主题板块，各有专属颜色。',
      open: '打开',
      lines: {
        'smart-home': '在自己的硬件上运行的家，语音与 AI 全部本地化。',
        'balcony-solar': '即插即用的太阳能设备、规定与指南。',
        'power-local-llm': '找到合适的本地 AI 应用。',
        'prompt-bites': '60 秒读懂的简短回答。',
        'prompt-engineering': '让任何 AI 模型都给出更好的结果。',
      },
    },
    overview: { title: '以演示文稿查看概览' },
    reviewed: '内容最后审核于:',
    home: '主页',
  },
  es: {
    pill: 'LLMs locales',
    titleHighlight: 'LLMs Locales',
    primaryCta: 'Ejecuta tu primer modelo',
    secondaryCta: 'Ver todos los temas',
    summary: [
      { label: 'En una frase', text: 'Los LLMs locales son **modelos de lenguaje que se ejecutan por completo en tu propio ordenador**: sin conexión a Internet, sin tarifas de API y sin que ningún dato salga de tu equipo.' },
      { label: 'En palabras sencillas', text: 'Instala Ollama o LM Studio, descarga un modelo que quepa en tu VRAM y empieza a conversar. Las guías de abajo cubren **cada paso**, desde la instalación hasta el hardware, la privacidad y el coste.' },
    ],
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: del hardware al modelo, pasando por un entorno de ejecución.',
      ariaLabel: 'Esquema: tu hardware (VRAM, Apple Silicon, CPU) ejecuta un entorno como Ollama, LM Studio o llama.cpp, que carga un modelo abierto como Llama, Qwen o Gemma',
      hardware: 'Hardware',
      runtime: 'Ejecución',
      models: 'Modelos',
    },
    jump: { label: 'Ir a', start: 'Empezar aquí', explore: 'Temas', why: 'Por qué', latest: 'Actualizado recientemente', deeper: 'Profundizar', faq: 'Preguntas frecuentes' },
    start: { title: 'Empezar aquí', intro: 'Las preguntas que los lectores hacen primero, cada una con la guía que conviene abrir. Elige la que más te convenga.', badge: 'Empezar aquí' },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} guías. Un clic abre un tema justo ahí.',
      unit: 'Guías',
      tileSummary: {
        'getting-started': 'Instalar Ollama o LM Studio, ejecutar un primer modelo y configurarlo en privado.',
        'best-models': 'Qué modelo encaja con cada tarea: código, redacción, idiomas, cuantización.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp y otras interfaces comparadas.',
        'hardware-performance': 'Cálculo de VRAM, GPU, Apple Silicon y equipos solo con CPU, trucos de velocidad.',
        'advanced-techniques': 'RAG local, ajuste fino con LoRA, agentes, modelos multimodales y personalizados.',
        enterprise: 'Despliegue local y aislado de la red, cumplimiento del RGPD, escalado para equipos.',
        'gpu-buying-guides': 'Opciones económicas, nuevas o de segunda mano, y comparativas de GPU para modelos de 7B a 70B.',
        'hardware-setups': 'Montajes de PC completos, miniPC, portátiles y estaciones de trabajo para varios presupuestos.',
        'privacy-business': 'Configuraciones privadas para equipos: NAS, VPN, flujos sin conexión, datos sensibles.',
        'cost-comparisons': 'Local frente a nube y suscripciones: costes, ROI y comparativas de plataformas.',
        'apple-silicon': 'Tamaño de la memoria unificada, MLX frente a Ollama, configuraciones con Mac mini y MacBook.',
        'enterprise-compliance': 'SOC 2 e ISO 27001, licencias, residencia de datos, compras y herramientas para empresas.',
      },
    },
    why: {
      title: 'Respuestas prácticas',
      intro: 'Cuatro respuestas prácticas, calculadas con una fórmula de memoria sencilla (estimaciones, no mediciones). Las tablas completas están al final de la página.',
      takeaway: '**En resumen:** 8 GB de RAM bastan para un modelo 7B, todos los datos se quedan en tu equipo y no hay costes de API una vez que tienes el hardware.',
    },
    latest: { title: 'Actualizado recientemente', intro: 'Las tres páginas con el cambio más reciente.', more: 'Ver todos los temas', updated: 'Actualizado', published: 'Publicado' },
    deeper: {
      title: 'Profundizar',
      intro: 'Los demás mundos temáticos, cada uno con su propio color.',
      open: 'Abrir',
      lines: {
        'smart-home': 'Un hogar que funciona en tu propio hardware, con voz e IA locales.',
        'balcony-solar': 'Dispositivos solares listos para enchufar, normas y guías.',
        'power-local-llm': 'Encontrar la aplicación de IA local adecuada.',
        'prompt-bites': 'Respuestas breves en 60 segundos.',
        'prompt-engineering': 'Mejores resultados con cualquier modelo de IA.',
      },
    },
    overview: { title: 'Resumen en presentación' },
    reviewed: 'Contenido revisado por última vez:',
    home: 'Inicio',
  },
  pt: {
    pill: 'LLMs locais',
    titleHighlight: 'LLMs Locais',
    primaryCta: 'Rode seu primeiro modelo',
    secondaryCta: 'Ver todos os temas',
    summary: [
      { label: 'Em uma frase', text: 'Os LLMs locais são **modelos de linguagem que rodam inteiramente no seu próprio computador**: sem conexão com a Internet, sem taxas de API e sem que nenhum dado saia da sua máquina.' },
      { label: 'Em palavras simples', text: 'Instale o Ollama ou o LM Studio, baixe um modelo que caiba na sua VRAM e comece a conversar. Os guias abaixo cobrem **cada etapa**, da instalação ao hardware, à privacidade e ao custo.' },
    ],
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Esquema: do hardware ao modelo, passando por um ambiente de execução.',
      ariaLabel: 'Esquema: seu hardware (VRAM, Apple Silicon, CPU) executa um ambiente como Ollama, LM Studio ou llama.cpp, que carrega um modelo aberto como Llama, Qwen ou Gemma',
      hardware: 'Hardware',
      runtime: 'Execução',
      models: 'Modelos',
    },
    jump: { label: 'Ir para', start: 'Comece aqui', explore: 'Temas', why: 'Por quê', latest: 'Atualizado recentemente', deeper: 'Aprofundar', faq: 'Perguntas frequentes' },
    start: { title: 'Comece aqui', intro: 'As perguntas que os leitores fazem primeiro, cada uma com o guia para abrir. Escolha a que combina com você.', badge: 'Comece aqui' },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} guias. Um clique abre um tema ali mesmo.',
      unit: 'Guias',
      tileSummary: {
        'getting-started': 'Instalar o Ollama ou o LM Studio, rodar um primeiro modelo e configurar tudo em privado.',
        'best-models': 'Qual modelo serve para cada tarefa: código, redação, idiomas, quantização.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp e outras interfaces comparados.',
        'hardware-performance': 'Cálculo de VRAM, GPUs, Apple Silicon e setups só com CPU, dicas de velocidade.',
        'advanced-techniques': 'RAG local, fine-tuning com LoRA, agentes, modelos multimodais e personalizados.',
        enterprise: 'Implantação local e isolada da rede, conformidade com o GDPR, escala para equipes.',
        'gpu-buying-guides': 'Opções econômicas, novas ou usadas e comparativos de GPU para modelos de 7B a 70B.',
        'hardware-setups': 'Montagens de PC completas, mini PCs, notebooks e estações de trabalho para vários orçamentos.',
        'privacy-business': 'Setups privados para equipes: NAS, VPN, fluxos offline, dados sensíveis.',
        'cost-comparisons': 'Local contra nuvem e assinaturas: custos, ROI e comparativos de plataformas.',
        'apple-silicon': 'Tamanho da memória unificada, MLX contra Ollama, setups com Mac mini e MacBook.',
        'enterprise-compliance': 'SOC 2 e ISO 27001, licenças, residência de dados, compras e ferramentas para empresas.',
      },
    },
    why: {
      title: 'Respostas práticas',
      intro: 'Quatro respostas práticas, calculadas com uma fórmula de memória simples (estimativas, não medições). As tabelas completas estão no fim da página.',
      takeaway: '**Resumindo:** 8 GB de RAM bastam para um modelo 7B, todos os dados ficam na sua máquina e não há custo de API depois de ter o hardware.',
    },
    latest: { title: 'Atualizado recentemente', intro: 'As três páginas com a alteração mais recente.', more: 'Ver todos os temas', updated: 'Atualizado', published: 'Publicado' },
    deeper: {
      title: 'Aprofundar',
      intro: 'Os outros universos temáticos, cada um com sua própria cor.',
      open: 'Abrir',
      lines: {
        'smart-home': 'Uma casa que roda no seu próprio hardware, com voz e IA locais.',
        'balcony-solar': 'Dispositivos solares prontos para plugar, regras e guias.',
        'power-local-llm': 'Encontrar o aplicativo de IA local certo.',
        'prompt-bites': 'Respostas curtas em 60 segundos.',
        'prompt-engineering': 'Melhores resultados com qualquer modelo de IA.',
      },
    },
    overview: { title: 'Visão geral em apresentação' },
    reviewed: 'Conteúdo revisado pela última vez em:',
    home: 'Início',
  },
  ar: {
    pill: 'LLM محلية',
    titleHighlight: 'محلي',
    primaryCta: 'شغّل أول نموذج',
    secondaryCta: 'عرض كل المواضيع',
    summary: [
      { label: 'في جملة واحدة', text: 'النماذج اللغوية المحلية (LLM) هي **نماذج لغوية تعمل بالكامل على جهازك الخاص**: بلا اتصال بالإنترنت، وبلا رسوم API، وبلا خروج أي بيانات من جهازك.' },
      { label: 'بعبارات بسيطة', text: 'ثبّت Ollama أو LM Studio، ونزّل نموذجًا يناسب ذاكرة VRAM لديك، وابدأ المحادثة. تغطي الأدلة أدناه **كل خطوة**، من التثبيت إلى الأجهزة والخصوصية والتكلفة.' },
    ],
    flow: {
      title: 'كيف يترابط كل شيء',
      caption: 'مخطط: من الأجهزة عبر بيئة التشغيل إلى النموذج الذي تشغّله.',
      ariaLabel: 'مخطط: أجهزتك (VRAM وApple Silicon وCPU) تشغّل بيئة مثل Ollama أو LM Studio أو llama.cpp، وهي تحمّل نموذجًا مفتوحًا مثل Llama أو Qwen أو Gemma',
      hardware: 'الأجهزة',
      runtime: 'بيئة التشغيل',
      models: 'النماذج',
    },
    jump: { label: 'انتقل إلى', start: 'ابدأ هنا', explore: 'المواضيع', why: 'لماذا', latest: 'آخر التحديثات', deeper: 'تعمّق أكثر', faq: 'الأسئلة الشائعة' },
    start: { title: 'ابدأ هنا', intro: 'الأسئلة التي يطرحها القرّاء أولًا، ومع كل سؤال الدليل المناسب لفتحه. اختر ما يناسبك.', badge: 'ابدأ هنا' },
    explore: {
      title: 'استكشف حسب الموضوع',
      intro: '{tiles} مواضيع، {pages} دليلًا. نقرة واحدة تفتح الموضوع في مكانه.',
      unit: 'دليل',
      tileSummary: {
        'getting-started': 'تثبيت Ollama أو LM Studio، وتشغيل أول نموذج، والإعداد بخصوصية.',
        'best-models': 'أي نموذج يناسب أي مهمة: البرمجة والكتابة واللغات والتكميم.',
        'tools-interfaces': 'مقارنة Ollama وLM Studio وOpen WebUI وvLLM وllama.cpp وواجهات أخرى.',
        'hardware-performance': 'حساب VRAM، وبطاقات GPU، وApple Silicon، وإعدادات CPU فقط، ونصائح للسرعة.',
        'advanced-techniques': 'RAG محلي، وضبط LoRA الدقيق، والوكلاء، والنماذج متعددة الوسائط والمخصصة.',
        enterprise: 'النشر داخل المؤسسة وبمعزل عن الشبكة، والامتثال لـ GDPR، والتوسع للفرق.',
        'gpu-buying-guides': 'خيارات اقتصادية، وجديد أم مستعمل، ومقارنات GPU للنماذج من 7B إلى 70B.',
        'hardware-setups': 'تجميعات حواسيب كاملة، وحواسيب مصغّرة، وحواسيب محمولة، ومحطات عمل لميزانيات متعددة.',
        'privacy-business': 'إعدادات خاصة للفرق: NAS وVPN وسير عمل دون اتصال والبيانات الحساسة.',
        'cost-comparisons': 'المحلي مقابل السحابة والاشتراكات: التكلفة والعائد والمقارنات بين المنصات.',
        'apple-silicon': 'اختيار حجم الذاكرة الموحدة، وMLX مقابل Ollama، وإعدادات Mac mini وMacBook.',
        'enterprise-compliance': 'SOC 2 وISO 27001، والتراخيص، وموقع البيانات، وأدلة الشراء والأدوات للمؤسسات.',
      },
    },
    why: {
      title: 'إجابات عملية',
      intro: 'أربع إجابات عملية محسوبة بمعادلة ذاكرة بسيطة (تقديرات وليست قياسات). الجداول الكاملة في أسفل الصفحة.',
      takeaway: '**باختصار:** تكفي ذاكرة RAM بحجم 8 GB لتشغيل نموذج 7B، وتبقى كل بياناتك على جهازك، ولا توجد تكاليف API بعد شراء الأجهزة.',
    },
    latest: { title: 'آخر التحديثات', intro: 'الصفحات الثلاث الأحدث تغييرًا.', more: 'عرض كل المواضيع', updated: 'تم التحديث', published: 'نُشر' },
    deeper: {
      title: 'تعمّق أكثر',
      intro: 'عوالم المواضيع الأخرى، لكل منها لونه الخاص.',
      open: 'فتح',
      lines: {
        'smart-home': 'منزل يعمل على أجهزتك الخاصة، بصوت وذكاء اصطناعي محليين.',
        'balcony-solar': 'أجهزة شمسية جاهزة للتوصيل، وقواعد، وأدلة.',
        'power-local-llm': 'العثور على تطبيق الذكاء الاصطناعي المحلي المناسب.',
        'prompt-bites': 'إجابات قصيرة في 60 ثانية.',
        'prompt-engineering': 'نتائج أفضل مع أي نموذج ذكاء اصطناعي.',
      },
    },
    overview: { title: 'نظرة عامة في عرض تقديمي' },
    reviewed: 'آخر مراجعة للمحتوى:',
    home: 'الرئيسية',
  },
  ko: {
    pill: '로컬 LLM',
    titleHighlight: '로컬 LLM',
    primaryCta: '첫 모델 실행하기',
    secondaryCta: '모든 주제 보기',
    summary: [
      { label: '한 문장으로', text: '로컬 LLM은 **전적으로 내 컴퓨터에서 실행되는 대규모 언어 모델**입니다. 인터넷 연결도 API 요금도 필요 없고, 데이터가 기기 밖으로 나가지 않습니다.' },
      { label: '쉽게 말하면', text: 'Ollama나 LM Studio를 설치하고, VRAM에 맞는 모델을 내려받아 바로 대화를 시작합니다. 아래 가이드가 설치부터 하드웨어, 개인정보 보호, 비용까지 **모든 단계**를 안내합니다.' },
    ],
    flow: {
      title: '전체 구성',
      caption: '도식: 하드웨어에서 실행 환경을 거쳐 실행하는 모델까지.',
      ariaLabel: '도식: 하드웨어(VRAM, Apple 실리콘, CPU)가 Ollama, LM Studio, llama.cpp 같은 실행 환경을 구동하고, 실행 환경은 Llama, Qwen, Gemma 같은 공개 모델을 불러옴',
      hardware: '하드웨어',
      runtime: '실행 환경',
      models: '모델',
    },
    jump: { label: '바로가기', start: '여기서 시작', explore: '주제', why: '이유', latest: '최근 업데이트', deeper: '더 깊이', faq: '자주 묻는 질문' },
    start: { title: '여기서 시작', intro: '독자가 가장 먼저 묻는 질문과, 먼저 열어 볼 가이드입니다. 맞는 것을 고르세요.', badge: '여기서 시작' },
    explore: {
      title: '주제별 탐색',
      intro: '{tiles}개 주제, 가이드 {pages}개. 클릭하면 그 자리에서 주제가 열립니다.',
      unit: '가이드',
      tileSummary: {
        'getting-started': 'Ollama 또는 LM Studio 설치, 첫 모델 실행, 비공개 환경 설정.',
        'best-models': '작업별로 알맞은 모델: 코딩, 글쓰기, 다국어, 양자화.',
        'tools-interfaces': 'Ollama, LM Studio, Open WebUI, vLLM, llama.cpp 등 도구와 인터페이스 비교.',
        'hardware-performance': 'VRAM 계산, GPU, Apple 실리콘, CPU 전용 구성, 속도 향상 팁.',
        'advanced-techniques': '로컬 RAG, LoRA 파인튜닝, 에이전트, 멀티모달 및 맞춤형 모델.',
        enterprise: '온프레미스·폐쇄망 배포, GDPR 준수, 팀 규모 확장.',
        'gpu-buying-guides': '예산형 선택, 신품과 중고, 7B~70B 모델용 GPU 비교.',
        'hardware-setups': '예산별 완성 PC, 미니 PC, 노트북, 워크스테이션 구성.',
        'privacy-business': '팀을 위한 비공개 구성: NAS, VPN, 오프라인 워크플로, 민감한 데이터.',
        'cost-comparisons': '로컬과 클라우드·구독 비교: 비용, ROI, 플랫폼 비교.',
        'apple-silicon': '통합 메모리 용량 선택, MLX와 Ollama 비교, Mac mini·MacBook 구성.',
        'enterprise-compliance': 'SOC 2와 ISO 27001, 라이선스, 데이터 상주, 기업용 구매 가이드와 도구.',
      },
    },
    why: {
      title: '실용적인 답',
      intro: '간단한 메모리 공식으로 계산한 네 가지 실용적인 답입니다(실측이 아닌 추정치). 전체 표는 페이지 하단에 있습니다.',
      takeaway: '**요약:** 7B 모델은 8 GB RAM으로 실행할 수 있고, 모든 데이터는 내 기기에 남으며, 하드웨어를 갖춘 뒤에는 API 비용이 들지 않습니다.',
    },
    latest: { title: '최근 업데이트', intro: '가장 최근에 변경된 세 페이지.', more: '모든 주제 보기', updated: '업데이트', published: '게시' },
    deeper: {
      title: '더 깊이',
      intro: '다른 주제 영역, 각각 고유한 색으로.',
      open: '열기',
      lines: {
        'smart-home': '내 하드웨어에서 돌아가는 집, 음성과 AI도 로컬로.',
        'balcony-solar': '플러그인 방식의 태양광 장치, 규정, 가이드.',
        'power-local-llm': '알맞은 로컬 AI 앱 찾기.',
        'prompt-bites': '60초 안에 읽는 짧은 답변.',
        'prompt-engineering': '어떤 AI 모델에서든 더 나은 결과 얻기.',
      },
    },
    overview: { title: '프레젠테이션으로 보는 개요' },
    reviewed: '콘텐츠 최종 검토일:',
    home: '홈',
  },
}
