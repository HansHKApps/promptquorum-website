// Power Local LLM hub on the shared hub template (src/components/hub-template).
//
// Same recipe as src/lib/smart-home/hub-template.tsx: this file only adapts Power Local LLM data to the
// generic template. Languages listed in POWER_LOCAL_LLM_HUB_TEMPLATE_LANGS use it; the original hub in
// page-helpers.tsx stays as the fallback for any language without strings here.
//
// Nothing here fetches data. Every article link comes from the HUB_THEMES slug lists passed in by
// page-helpers.tsx, so scripts/validate-hub-coverage.mjs keeps working unchanged.

import type { ReactNode } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Lang } from '@/lib/i18n/constants'
import { powerLLMContent } from './content'
import { POWER_LLM_BRIEFS } from './briefs'
import { powerLLMArticlePath } from './metadata-helpers'
import { isPowerLLMArticlePublished } from './published'
import { POWER_LLM_SLUG_TO_KEY } from './slugs'

/** Languages that render the hub with the new template. Add a language only after its strings exist below. */
export const POWER_LOCAL_LLM_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesPowerLocalLlmHubTemplate(lang: Lang): boolean {
  return POWER_LOCAL_LLM_HUB_TEMPLATE_LANGS.has(lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

const DIRECTORY_SLUG = 'local-llm-software-directory'

// Slugs behind the four "Start here" cards (one per common reader goal).
const START_SLUGS = {
  beginner: 'easiest-local-ai-app-windows-mac-linux',
  rag: 'local-rag-on-your-pdfs-step-by-step',
  coding: 'replace-github-copilot-with-local-llm',
  mobile: 'mobile-llm-models-phi4-gemma-smollm',
} as const

const THEME_IDS = [
  'overview-reference',
  'easiest-desktop-apps',
  'rag-document-chat',
  'coding-assistants',
  'local-ai-agents',
  'creative-roleplay',
  'mobile-edge-llms',
  'productivity-tools',
  'voice-speech-multimodal',
  'image-video-generation',
  'enterprise-compliance',
] as const

const DEEPER_HUBS = ['smart-home', 'balcony-solar', 'local-llms', 'prompt-bites', 'prompt-engineering'] as const
type DeeperHub = (typeof DEEPER_HUBS)[number]

interface HubTemplateCopy {
  pill: string
  /** Part of the localized H1 that is highlighted. Must appear in the H1 verbatim. */
  titleHighlight: string
  /** `{count}` = number of tools in the directory. */
  primaryCta: string
  secondaryCta: string
  summary: { label: string; text: string }[]
  flow: { title: string; caption: string; ariaLabel: string; columns: { label: string; tone: HubTone; chips: string[] }[] }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string; goals: Record<keyof typeof START_SLUGS, string> }
  explore: {
    title: string
    /** `{tiles}` topics, `{pages}` articles. */
    intro: string
    unit: string
    tileSummary: Record<(typeof THEME_IDS)[number], string>
  }
  /** Four labels for the first four key takeaways; the fifth becomes the section intro line. */
  why: { title: string; labels: [string, string, string, string] }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; names: Record<DeeperHub, string>; lines: Record<DeeperHub, string> }
}

const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  en: {
    pill: 'Power Local LLM',
    titleHighlight: 'Local LLM Software',
    primaryCta: 'Open the {count}-tool directory',
    secondaryCta: 'See all topics',
    summary: [
      { label: 'In one sentence', text: 'Local LLM software is **programs that run AI models on your own computer, phone or server**, so your prompts and documents do not have to go to a cloud service.' },
      { label: 'In plain terms', text: 'Pick a use case below, such as chat, documents, coding, agents, mobile, voice or images, then follow the guides and reviews for that area. The directory lists **every tool** in one place.' },
    ],
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from the runtime through the app to your use case.',
      ariaLabel: 'Diagram: runtimes such as Ollama, llama.cpp and vLLM serve models to apps such as LM Studio, Jan and Open WebUI, which cover use cases such as coding, RAG and agents',
      columns: [
        { label: 'Runtime', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'App', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: 'Use case', tone: 'rose', chips: ['Coding', 'RAG', 'Agents'] },
      ],
    },
    jump: { label: 'Jump to', start: 'Start here', explore: 'Topics', why: 'Why', latest: 'Latest', deeper: 'Go deeper', faq: 'FAQ' },
    start: {
      title: 'Start here',
      intro: 'Four common goals. Pick the one that fits you.',
      badge: 'Start here',
      goals: { beginner: 'Install your first local AI app', rag: 'Chat with your own PDFs', coding: 'Replace a cloud coding assistant', mobile: 'Run models on your phone' },
    },
    explore: {
      title: 'Explore by topic',
      intro: '{tiles} topics, {pages} articles. One click opens a topic right where you are.',
      unit: 'Articles',
      tileSummary: {
        'overview-reference': 'Runtimes, hardware picks, licences and the map of what exists.',
        'easiest-desktop-apps': 'Download-and-run chat apps for beginners, no terminal needed.',
        'rag-document-chat': 'Chat with your own PDFs and notes without leaving your device.',
        'coding-assistants': 'Local coding assistants and models as alternatives to cloud tools.',
        'local-ai-agents': 'Tool calling, MCP and self-hosted agents for automation.',
        'creative-roleplay': 'Fiction, worldbuilding and character chat with local models.',
        'mobile-edge-llms': 'Models on phones, tablets and edge devices.',
        'productivity-tools': 'Obsidian, Logseq, Joplin and other note and knowledge tools.',
        'voice-speech-multimodal': 'Speech to text, text to speech and vision models, offline.',
        'image-video-generation': 'Image and video generation on your own GPU.',
        'enterprise-compliance': 'Access control, governance and legal topics for companies.',
      },
    },
    why: { title: 'Why run LLM software locally', labels: ['Ecosystem', 'Entry points', 'Biggest shift', 'Mobile and edge'] },
    latest: { title: 'Latest', intro: 'The newest and most recently changed pages.', more: 'See all topics', updated: 'Updated', published: 'Published' },
    deeper: {
      title: 'Go deeper',
      intro: 'The other topic worlds, each in its own color.',
      open: 'Open',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'Local LLMs', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant, Matter and local AI for your home.',
        'balcony-solar': 'Plug-in solar devices, rules and guides.',
        'local-llms': 'Models, storage and hardware for AI at home.',
        'prompt-bites': 'Short answers in 60 seconds.',
        'prompt-engineering': 'Better results with any AI model.',
      },
    },
  },
  de: {
    pill: 'Power Local LLM',
    titleHighlight: 'Lokale LLM-Software',
    primaryCta: 'Verzeichnis mit {count} Tools öffnen',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      { label: 'In einem Satz', text: 'Lokale LLM-Software sind **Programme, die KI-Modelle auf Ihrem eigenen Computer, Smartphone oder Server ausführen**, sodass Ihre Eingaben und Dokumente keinen Cloud-Dienst durchlaufen müssen.' },
      { label: 'In einfachen Worten', text: 'Wählen Sie unten einen Anwendungsfall, etwa Chat, Dokumente, Coding, Agenten, Mobile, Sprache oder Bilder, und folgen Sie den Guides und Reviews dazu. Das Verzeichnis listet **jedes Tool** an einem Ort.' },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: von der Runtime über die App zum Anwendungsfall.',
      ariaLabel: 'Schema: Runtimes wie Ollama, llama.cpp und vLLM stellen Modelle für Apps wie LM Studio, Jan und Open WebUI bereit, die Anwendungsfälle wie Coding, RAG und Agenten abdecken',
      columns: [
        { label: 'Runtime', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'App', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: 'Anwendungsfall', tone: 'rose', chips: ['Coding', 'RAG', 'Agenten'] },
      ],
    },
    jump: { label: 'Springen zu', start: 'Hier starten', explore: 'Themen', why: 'Warum', latest: 'Neueste', deeper: 'Weiter vertiefen', faq: 'Häufige Fragen' },
    start: {
      title: 'Hier starten',
      intro: 'Vier häufige Ziele. Wählen Sie das, das zu Ihnen passt.',
      badge: 'Hier starten',
      goals: { beginner: 'Die erste lokale KI-App installieren', rag: 'Mit eigenen PDFs chatten', coding: 'Einen Cloud-Coding-Assistenten ersetzen', mobile: 'Modelle auf dem Smartphone ausführen' },
    },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Artikel. Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      unit: 'Artikel',
      tileSummary: {
        'overview-reference': 'Runtimes, Hardware-Empfehlungen, Lizenzen und die Karte dessen, was es gibt.',
        'easiest-desktop-apps': 'Herunterladen und starten: Chat-Apps für Einsteiger, ohne Terminal.',
        'rag-document-chat': 'Mit eigenen PDFs und Notizen chatten, ohne das Gerät zu verlassen.',
        'coding-assistants': 'Lokale Coding-Assistenten und Modelle als Alternative zu Cloud-Tools.',
        'local-ai-agents': 'Tool Calling, MCP und selbst gehostete Agenten für Automatisierung.',
        'creative-roleplay': 'Fiktion, Worldbuilding und Charakter-Chat mit lokalen Modellen.',
        'mobile-edge-llms': 'Modelle auf Smartphones, Tablets und Edge-Geräten.',
        'productivity-tools': 'Obsidian, Logseq, Joplin und weitere Notiz- und Wissenstools.',
        'voice-speech-multimodal': 'Spracherkennung, Sprachausgabe und Vision-Modelle, offline.',
        'image-video-generation': 'Bild- und Videogenerierung auf der eigenen GPU.',
        'enterprise-compliance': 'Zugriffskontrolle, Governance und rechtliche Themen für Unternehmen.',
      },
    },
    why: { title: 'Warum LLM-Software lokal betreiben', labels: ['Ökosystem', 'Einstiegspunkte', 'Größter Wandel', 'Mobile und Edge'] },
    latest: { title: 'Neueste', intro: 'Die neuesten und zuletzt geänderten Seiten.', more: 'Alle Themen ansehen', updated: 'Aktualisiert', published: 'Veröffentlicht' },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'Lokale LLMs', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant, Matter und lokale KI für Ihr Zuhause.',
        'balcony-solar': 'Steckerfertige Solargeräte, Regeln und Anleitungen.',
        'local-llms': 'Modelle, Speicher und Hardware für KI zu Hause.',
        'prompt-bites': 'Kurze Antworten in 60 Sekunden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
    },
  },
  fr: {
    pill: 'Power Local LLM',
    titleHighlight: 'Logiciels LLM Locaux',
    primaryCta: "Ouvrir l'annuaire de {count} outils",
    secondaryCta: 'Voir tous les sujets',
    summary: [
      { label: 'En une phrase', text: "Un logiciel LLM local est un **programme qui exécute des modèles d'IA sur votre propre ordinateur, téléphone ou serveur**, de sorte que vos requêtes et vos documents n'ont pas à passer par un service cloud." },
      { label: 'En termes simples', text: "Choisissez un cas d'usage ci-dessous, comme le chat, les documents, le code, les agents, le mobile, la voix ou les images, puis suivez les guides et les tests correspondants. L'annuaire répertorie **tous les outils** au même endroit." },
    ],
    flow: {
      title: 'Comment tout s\'articule',
      caption: "Schéma : du moteur d'exécution à l'application puis au cas d'usage.",
      ariaLabel: "Schéma : des moteurs d'exécution comme Ollama, llama.cpp et vLLM fournissent des modèles à des applications comme LM Studio, Jan et Open WebUI, qui couvrent des cas d'usage comme le code, le RAG et les agents",
      columns: [
        { label: "Moteur d'exécution", tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'Application', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: "Cas d'usage", tone: 'rose', chips: ['Code', 'RAG', 'Agents'] },
      ],
    },
    jump: { label: 'Aller à', start: 'Commencer ici', explore: 'Sujets', why: 'Pourquoi', latest: 'Récents', deeper: 'Approfondir', faq: 'FAQ' },
    start: {
      title: 'Commencer ici',
      intro: 'Quatre objectifs courants. Choisissez celui qui vous correspond.',
      badge: 'Commencer ici',
      goals: { beginner: 'Installer sa première application d\'IA locale', rag: 'Discuter avec ses propres PDF', coding: 'Remplacer un assistant de code cloud', mobile: 'Exécuter des modèles sur son téléphone' },
    },
    explore: {
      title: 'Explorer par sujet',
      intro: '{tiles} sujets, {pages} articles. Un clic ouvre un sujet directement sur place.',
      unit: 'Articles',
      tileSummary: {
        'overview-reference': "Moteurs d'exécution, choix de matériel, licences et la carte de ce qui existe.",
        'easiest-desktop-apps': 'Applications de chat à télécharger et lancer, sans terminal.',
        'rag-document-chat': 'Discuter avec vos PDF et notes sans quitter votre appareil.',
        'coding-assistants': 'Assistants de code locaux et modèles en alternative aux outils cloud.',
        'local-ai-agents': "Appel d'outils, MCP et agents auto-hébergés pour l'automatisation.",
        'creative-roleplay': 'Fiction, construction de mondes et chat de personnages avec des modèles locaux.',
        'mobile-edge-llms': 'Modèles sur téléphones, tablettes et appareils edge.',
        'productivity-tools': 'Obsidian, Logseq, Joplin et d\'autres outils de notes et de connaissances.',
        'voice-speech-multimodal': 'Reconnaissance vocale, synthèse vocale et modèles de vision, hors ligne.',
        'image-video-generation': 'Génération d\'images et de vidéos sur votre propre GPU.',
        'enterprise-compliance': 'Contrôle d\'accès, gouvernance et sujets juridiques pour les entreprises.',
      },
    },
    why: { title: 'Pourquoi exécuter des LLM en local', labels: ['Écosystème', "Points d'entrée", 'Le plus grand changement', 'Mobile et edge'] },
    latest: { title: 'Récents', intro: 'Les pages les plus récentes et les dernières modifiées.', more: 'Voir tous les sujets', updated: 'Mis à jour', published: 'Publié' },
    deeper: {
      title: 'Approfondir',
      intro: 'Les autres univers thématiques, chacun dans sa propre couleur.',
      open: 'Ouvrir',
      names: { 'smart-home': 'Maison connectée', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locaux', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': "Home Assistant, Matter et IA locale pour votre maison.",
        'balcony-solar': 'Appareils solaires prêts à brancher, règles et guides.',
        'local-llms': "Modèles, stockage et matériel pour l'IA à la maison.",
        'prompt-bites': 'Réponses courtes en 60 secondes.',
        'prompt-engineering': "De meilleurs résultats avec n'importe quel modèle d'IA.",
      },
    },
  },
  ja: {
    pill: 'Power Local LLM',
    titleHighlight: 'ローカルLLMソフトウェア',
    primaryCta: '{count}件のツールディレクトリを開く',
    secondaryCta: 'すべてのトピックを見る',
    summary: [
      { label: '一言で言うと', text: 'ローカルLLMソフトウェアとは、**AIモデルを自分のパソコン、スマートフォン、サーバーで動かすプログラム**のことで、プロンプトや文書をクラウドサービスに送る必要がありません。' },
      { label: 'わかりやすく言うと', text: '下からチャット、文書、コーディング、エージェント、モバイル、音声、画像などの用途を選び、その分野のガイドとレビューを読み進めてください。ディレクトリでは**すべてのツール**を一か所で確認できます。' },
    ],
    flow: {
      title: '全体のつながり',
      caption: '図：ランタイムからアプリ、用途までの流れ。',
      ariaLabel: '図：Ollama、llama.cpp、vLLMなどのランタイムがモデルを提供し、LM Studio、Jan、Open WebUIなどのアプリがコーディング、RAG、エージェントといった用途をカバーする',
      columns: [
        { label: 'ランタイム', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'アプリ', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: '用途', tone: 'rose', chips: ['コーディング', 'RAG', 'エージェント'] },
      ],
    },
    jump: { label: '移動', start: 'ここから始める', explore: 'トピック', why: '理由', latest: '新着', deeper: 'さらに深く', faq: 'よくある質問' },
    start: {
      title: 'ここから始める',
      intro: 'よくある4つの目的です。当てはまるものを選んでください。',
      badge: 'ここから始める',
      goals: { beginner: '最初のローカルAIアプリを入れる', rag: '自分のPDFとチャットする', coding: 'クラウドのコーディング支援を置き換える', mobile: 'スマートフォンでモデルを動かす' },
    },
    explore: {
      title: 'トピックから探す',
      intro: '{tiles}トピック、{pages}記事。クリックするとその場でトピックが開きます。',
      unit: '記事',
      tileSummary: {
        'overview-reference': 'ランタイム、ハードウェア選び、ライセンス、存在するツールの全体マップ。',
        'easiest-desktop-apps': 'ダウンロードしてすぐ使えるチャットアプリ。ターミナル不要。',
        'rag-document-chat': '端末の外に出さずに、自分のPDFやノートとチャット。',
        'coding-assistants': 'クラウドツールの代わりに使えるローカルのコーディング支援とモデル。',
        'local-ai-agents': 'ツール呼び出し、MCP、自前運用のエージェントによる自動化。',
        'creative-roleplay': 'ローカルモデルでの小説、世界観づくり、キャラクターチャット。',
        'mobile-edge-llms': 'スマートフォン、タブレット、エッジ機器で動かすモデル。',
        'productivity-tools': 'Obsidian、Logseq、Joplinなどのノート・ナレッジツール。',
        'voice-speech-multimodal': '音声認識、音声合成、ビジョンモデルをオフラインで。',
        'image-video-generation': '自分のGPUでの画像・動画生成。',
        'enterprise-compliance': '企業向けのアクセス管理、ガバナンス、法務のテーマ。',
      },
    },
    why: { title: 'LLMソフトウェアをローカルで動かす理由', labels: ['エコシステム', '入り口', '最大の変化', 'モバイルとエッジ'] },
    latest: { title: '新着', intro: '最も新しい、または最近変更されたページ。', more: 'すべてのトピックを見る', updated: '更新', published: '公開' },
    deeper: {
      title: 'さらに深く',
      intro: '他のトピック領域、それぞれ固有の色で。',
      open: '開く',
      names: { 'smart-home': 'スマートホーム', 'balcony-solar': 'Balcony Solar', 'local-llms': 'ローカルLLM', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant、Matter、自宅向けのローカルAI。',
        'balcony-solar': 'プラグイン式の太陽光発電機器、ルール、ガイド。',
        'local-llms': '自宅でAIを動かすためのモデル、ストレージ、ハードウェア。',
        'prompt-bites': '60秒で読める短い回答。',
        'prompt-engineering': 'どのAIモデルでも結果を良くする方法。',
      },
    },
  },
  zh: {
    pill: 'Power Local LLM',
    titleHighlight: '本地 LLM 软件',
    primaryCta: '打开包含 {count} 款工具的目录',
    secondaryCta: '查看全部主题',
    summary: [
      { label: '一句话', text: '本地 LLM 软件是**在您自己的电脑、手机或服务器上运行 AI 模型的程序**，您的提示词和文档无需经过云服务。' },
      { label: '通俗地说', text: '先在下方选择一个用例，例如聊天、文档、编程、智能体、移动端、语音或图像，然后阅读该领域的指南和评测。目录把**所有工具**集中在一处。' },
    ],
    flow: {
      title: '各部分如何衔接',
      caption: '示意图：从运行时到应用，再到具体用例。',
      ariaLabel: '示意图：Ollama、llama.cpp、vLLM 等运行时为 LM Studio、Jan、Open WebUI 等应用提供模型，这些应用覆盖编程、RAG 和智能体等用例',
      columns: [
        { label: '运行时', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: '应用', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: '用例', tone: 'rose', chips: ['编程', 'RAG', '智能体'] },
      ],
    },
    jump: { label: '跳转到', start: '从这里开始', explore: '主题', why: '为什么', latest: '最新', deeper: '深入了解', faq: '常见问题' },
    start: {
      title: '从这里开始',
      intro: '四个常见目标，选择适合您的一个。',
      badge: '从这里开始',
      goals: { beginner: '安装第一个本地 AI 应用', rag: '与自己的 PDF 对话', coding: '替代云端编程助手', mobile: '在手机上运行模型' },
    },
    explore: {
      title: '按主题探索',
      intro: '{tiles} 个主题，{pages} 篇文章。点击即可在原位展开主题。',
      unit: '篇文章',
      tileSummary: {
        'overview-reference': '运行时、硬件选择、许可证，以及现有工具的全景图。',
        'easiest-desktop-apps': '下载即用的聊天应用，适合新手，无需终端。',
        'rag-document-chat': '不离开设备，与自己的 PDF 和笔记对话。',
        'coding-assistants': '可替代云端工具的本地编程助手与模型。',
        'local-ai-agents': '工具调用、MCP 与自托管智能体，用于自动化。',
        'creative-roleplay': '用本地模型进行小说、世界观构建与角色对话。',
        'mobile-edge-llms': '在手机、平板和边缘设备上运行的模型。',
        'productivity-tools': 'Obsidian、Logseq、Joplin 等笔记与知识工具。',
        'voice-speech-multimodal': '离线的语音转文字、文字转语音与视觉模型。',
        'image-video-generation': '在自己的 GPU 上生成图像和视频。',
        'enterprise-compliance': '面向企业的访问控制、治理与法律主题。',
      },
    },
    why: { title: '为什么在本地运行 LLM 软件', labels: ['生态', '入门选择', '最大转变', '移动与边缘'] },
    latest: { title: '最新', intro: '最新发布和最近有改动的页面。', more: '查看全部主题', updated: '更新于', published: '发布于' },
    deeper: {
      title: '深入了解',
      intro: '其他主题领域，各有专属配色。',
      open: '打开',
      names: { 'smart-home': '智能家居', 'balcony-solar': 'Balcony Solar', 'local-llms': '本地大模型', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant、Matter 与家庭本地 AI。',
        'balcony-solar': '即插即用的太阳能设备、规定与指南。',
        'local-llms': '在家运行 AI 所需的模型、存储和硬件。',
        'prompt-bites': '60 秒读懂的简短回答。',
        'prompt-engineering': '让任何 AI 模型都给出更好的结果。',
      },
    },
  },
  es: {
    pill: 'Power Local LLM',
    titleHighlight: 'Software LLM Local',
    primaryCta: 'Abrir el directorio de {count} herramientas',
    secondaryCta: 'Ver todos los temas',
    summary: [
      { label: 'En una frase', text: 'El software LLM local son **programas que ejecutan modelos de IA en su propio ordenador, móvil o servidor**, de modo que sus prompts y documentos no tienen que pasar por un servicio en la nube.' },
      { label: 'En palabras sencillas', text: 'Elija abajo un caso de uso, como chat, documentos, código, agentes, móvil, voz o imágenes, y siga las guías y reseñas de esa área. El directorio reúne **todas las herramientas** en un solo lugar.' },
    ],
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: del runtime a la aplicación y al caso de uso.',
      ariaLabel: 'Esquema: runtimes como Ollama, llama.cpp y vLLM sirven modelos a aplicaciones como LM Studio, Jan y Open WebUI, que cubren casos de uso como código, RAG y agentes',
      columns: [
        { label: 'Runtime', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'Aplicación', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: 'Caso de uso', tone: 'rose', chips: ['Código', 'RAG', 'Agentes'] },
      ],
    },
    jump: { label: 'Ir a', start: 'Empezar aquí', explore: 'Temas', why: 'Por qué', latest: 'Novedades', deeper: 'Profundizar', faq: 'Preguntas frecuentes' },
    start: {
      title: 'Empezar aquí',
      intro: 'Cuatro objetivos habituales. Elija el que le corresponda.',
      badge: 'Empezar aquí',
      goals: { beginner: 'Instalar su primera app de IA local', rag: 'Chatear con sus propios PDF', coding: 'Sustituir un asistente de código en la nube', mobile: 'Ejecutar modelos en el móvil' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} artículos. Un clic abre un tema justo donde está.',
      unit: 'Artículos',
      tileSummary: {
        'overview-reference': 'Runtimes, elección de hardware, licencias y el mapa de lo que existe.',
        'easiest-desktop-apps': 'Apps de chat para descargar y usar, sin terminal.',
        'rag-document-chat': 'Chatear con sus PDF y notas sin salir de su dispositivo.',
        'coding-assistants': 'Asistentes de código locales y modelos como alternativa a las herramientas en la nube.',
        'local-ai-agents': 'Llamadas a herramientas, MCP y agentes autoalojados para automatizar.',
        'creative-roleplay': 'Ficción, creación de mundos y chat de personajes con modelos locales.',
        'mobile-edge-llms': 'Modelos en móviles, tabletas y dispositivos edge.',
        'productivity-tools': 'Obsidian, Logseq, Joplin y otras herramientas de notas y conocimiento.',
        'voice-speech-multimodal': 'Voz a texto, texto a voz y modelos de visión, sin conexión.',
        'image-video-generation': 'Generación de imágenes y vídeo en su propia GPU.',
        'enterprise-compliance': 'Control de acceso, gobernanza y temas legales para empresas.',
      },
    },
    why: { title: 'Por qué ejecutar software LLM en local', labels: ['Ecosistema', 'Puntos de entrada', 'Mayor cambio', 'Móvil y edge'] },
    latest: { title: 'Novedades', intro: 'Las páginas más nuevas y modificadas más recientemente.', more: 'Ver todos los temas', updated: 'Actualizado', published: 'Publicado' },
    deeper: {
      title: 'Profundizar',
      intro: 'Los otros mundos temáticos, cada uno con su propio color.',
      open: 'Abrir',
      names: { 'smart-home': 'Hogar inteligente', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locales', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant, Matter e IA local para su hogar.',
        'balcony-solar': 'Dispositivos solares listos para enchufar, normas y guías.',
        'local-llms': 'Modelos, almacenamiento y hardware para IA en casa.',
        'prompt-bites': 'Respuestas breves en 60 segundos.',
        'prompt-engineering': 'Mejores resultados con cualquier modelo de IA.',
      },
    },
  },
  pt: {
    pill: 'Power Local LLM',
    titleHighlight: 'Software LLM Local',
    primaryCta: 'Abrir o diretório com {count} ferramentas',
    secondaryCta: 'Ver todos os temas',
    summary: [
      { label: 'Em uma frase', text: 'Software LLM local são **programas que executam modelos de IA no seu próprio computador, celular ou servidor**, de modo que seus prompts e documentos não precisam passar por um serviço na nuvem.' },
      { label: 'Em palavras simples', text: 'Escolha abaixo um caso de uso, como chat, documentos, código, agentes, mobile, voz ou imagens, e siga os guias e análises dessa área. O diretório reúne **todas as ferramentas** em um só lugar.' },
    ],
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Esquema: do runtime ao aplicativo e ao caso de uso.',
      ariaLabel: 'Esquema: runtimes como Ollama, llama.cpp e vLLM fornecem modelos a aplicativos como LM Studio, Jan e Open WebUI, que cobrem casos de uso como código, RAG e agentes',
      columns: [
        { label: 'Runtime', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'Aplicativo', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: 'Caso de uso', tone: 'rose', chips: ['Código', 'RAG', 'Agentes'] },
      ],
    },
    jump: { label: 'Ir para', start: 'Comece aqui', explore: 'Temas', why: 'Por quê', latest: 'Novidades', deeper: 'Aprofundar', faq: 'Perguntas frequentes' },
    start: {
      title: 'Comece aqui',
      intro: 'Quatro objetivos comuns. Escolha o que combina com você.',
      badge: 'Comece aqui',
      goals: { beginner: 'Instalar seu primeiro app de IA local', rag: 'Conversar com seus próprios PDFs', coding: 'Substituir um assistente de código na nuvem', mobile: 'Executar modelos no celular' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} artigos. Um clique abre um tema bem onde você está.',
      unit: 'Artigos',
      tileSummary: {
        'overview-reference': 'Runtimes, escolhas de hardware, licenças e o mapa do que existe.',
        'easiest-desktop-apps': 'Apps de chat para baixar e usar, sem terminal.',
        'rag-document-chat': 'Converse com seus PDFs e notas sem sair do seu dispositivo.',
        'coding-assistants': 'Assistentes de código locais e modelos como alternativa às ferramentas na nuvem.',
        'local-ai-agents': 'Chamada de ferramentas, MCP e agentes auto-hospedados para automação.',
        'creative-roleplay': 'Ficção, criação de mundos e chat de personagens com modelos locais.',
        'mobile-edge-llms': 'Modelos em celulares, tablets e dispositivos edge.',
        'productivity-tools': 'Obsidian, Logseq, Joplin e outras ferramentas de notas e conhecimento.',
        'voice-speech-multimodal': 'Fala para texto, texto para fala e modelos de visão, offline.',
        'image-video-generation': 'Geração de imagens e vídeos na sua própria GPU.',
        'enterprise-compliance': 'Controle de acesso, governança e temas jurídicos para empresas.',
      },
    },
    why: { title: 'Por que executar software LLM localmente', labels: ['Ecossistema', 'Pontos de entrada', 'Maior mudança', 'Mobile e edge'] },
    latest: { title: 'Novidades', intro: 'As páginas mais novas e alteradas mais recentemente.', more: 'Ver todos os temas', updated: 'Atualizado', published: 'Publicado' },
    deeper: {
      title: 'Aprofundar',
      intro: 'Os outros mundos temáticos, cada um com sua própria cor.',
      open: 'Abrir',
      names: { 'smart-home': 'Casa inteligente', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locais', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant, Matter e IA local para a sua casa.',
        'balcony-solar': 'Dispositivos solares prontos para plugar, regras e guias.',
        'local-llms': 'Modelos, armazenamento e hardware para IA em casa.',
        'prompt-bites': 'Respostas curtas em 60 segundos.',
        'prompt-engineering': 'Melhores resultados com qualquer modelo de IA.',
      },
    },
  },
  ar: {
    pill: 'Power Local LLM',
    titleHighlight: 'برمجيات LLM المحلية',
    primaryCta: 'افتح دليل الأدوات ({count} أداة)',
    secondaryCta: 'عرض كل المواضيع',
    summary: [
      { label: 'في جملة واحدة', text: 'برمجيات LLM المحلية هي **برامج تشغّل نماذج الذكاء الاصطناعي على حاسوبك أو هاتفك أو خادمك**، فلا تضطر مطالباتك ومستنداتك إلى المرور عبر خدمة سحابية.' },
      { label: 'بعبارات بسيطة', text: 'اختر حالة استخدام أدناه، مثل الدردشة أو المستندات أو البرمجة أو الوكلاء أو الهاتف أو الصوت أو الصور، ثم اتبع الأدلة والمراجعات الخاصة بها. يضم الدليل **كل الأدوات** في مكان واحد.' },
    ],
    flow: {
      title: 'كيف تترابط الأجزاء',
      caption: 'مخطط: من بيئة التشغيل إلى التطبيق ثم حالة الاستخدام.',
      ariaLabel: 'مخطط: بيئات تشغيل مثل Ollama وllama.cpp وvLLM تقدّم النماذج لتطبيقات مثل LM Studio وJan وOpen WebUI، وهذه تغطي حالات استخدام مثل البرمجة وRAG والوكلاء',
      columns: [
        { label: 'بيئة التشغيل', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: 'التطبيق', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: 'حالة الاستخدام', tone: 'rose', chips: ['البرمجة', 'RAG', 'الوكلاء'] },
      ],
    },
    jump: { label: 'انتقل إلى', start: 'ابدأ هنا', explore: 'المواضيع', why: 'لماذا', latest: 'الأحدث', deeper: 'تعمّق أكثر', faq: 'الأسئلة الشائعة' },
    start: {
      title: 'ابدأ هنا',
      intro: 'أربعة أهداف شائعة. اختر ما يناسبك.',
      badge: 'ابدأ هنا',
      goals: { beginner: 'ثبّت أول تطبيق ذكاء اصطناعي محلي', rag: 'تحدّث مع ملفات PDF الخاصة بك', coding: 'استبدل مساعد برمجة سحابيًا', mobile: 'شغّل النماذج على هاتفك' },
    },
    explore: {
      title: 'استكشف حسب الموضوع',
      intro: '{tiles} مواضيع، {pages} مقالة. نقرة واحدة تفتح الموضوع في مكانه.',
      unit: 'مقالات',
      tileSummary: {
        'overview-reference': 'بيئات التشغيل واختيارات العتاد والتراخيص وخريطة ما هو موجود.',
        'easiest-desktop-apps': 'تطبيقات دردشة تُنزَّل وتعمل مباشرة للمبتدئين، دون طرفية.',
        'rag-document-chat': 'تحدّث مع ملفات PDF وملاحظاتك دون أن تغادر جهازك.',
        'coding-assistants': 'مساعدو برمجة ونماذج محلية بديلة عن الأدوات السحابية.',
        'local-ai-agents': 'استدعاء الأدوات وMCP ووكلاء مستضافون ذاتيًا للأتمتة.',
        'creative-roleplay': 'الخيال وبناء العوالم ومحادثة الشخصيات بنماذج محلية.',
        'mobile-edge-llms': 'نماذج على الهواتف واللوحيات وأجهزة الحافة.',
        'productivity-tools': 'Obsidian وLogseq وJoplin وأدوات ملاحظات ومعرفة أخرى.',
        'voice-speech-multimodal': 'تحويل الكلام إلى نص والنص إلى كلام ونماذج الرؤية، دون اتصال.',
        'image-video-generation': 'توليد الصور والفيديو على وحدة معالجة الرسومات الخاصة بك.',
        'enterprise-compliance': 'التحكم في الوصول والحوكمة والمواضيع القانونية للشركات.',
      },
    },
    why: { title: 'لماذا تشغّل برمجيات LLM محليًا', labels: ['المنظومة', 'نقاط الدخول', 'أكبر تحوّل', 'الهاتف والحافة'] },
    latest: { title: 'الأحدث', intro: 'أحدث الصفحات وأكثرها تغييرًا مؤخرًا.', more: 'عرض كل المواضيع', updated: 'تم التحديث', published: 'نُشر' },
    deeper: {
      title: 'تعمّق أكثر',
      intro: 'عوالم المواضيع الأخرى، لكل منها لونه الخاص.',
      open: 'فتح',
      names: { 'smart-home': 'المنزل الذكي', 'balcony-solar': 'Balcony Solar', 'local-llms': 'نماذج اللغة المحلية', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant وMatter وذكاء اصطناعي محلي لمنزلك.',
        'balcony-solar': 'أجهزة شمسية جاهزة للتوصيل، وقواعد، وأدلة.',
        'local-llms': 'النماذج والتخزين والعتاد للذكاء الاصطناعي في المنزل.',
        'prompt-bites': 'إجابات قصيرة في 60 ثانية.',
        'prompt-engineering': 'نتائج أفضل مع أي نموذج ذكاء اصطناعي.',
      },
    },
  },
  ko: {
    pill: 'Power Local LLM',
    titleHighlight: '로컬 LLM 소프트웨어',
    primaryCta: '{count}개 도구 디렉터리 열기',
    secondaryCta: '모든 주제 보기',
    summary: [
      { label: '한 문장으로', text: '로컬 LLM 소프트웨어는 **AI 모델을 내 컴퓨터, 휴대폰, 서버에서 직접 실행하는 프로그램**으로, 프롬프트와 문서가 클라우드 서비스를 거치지 않아도 됩니다.' },
      { label: '쉽게 말하면', text: '아래에서 채팅, 문서, 코딩, 에이전트, 모바일, 음성, 이미지 같은 용도를 고른 뒤 해당 분야의 가이드와 리뷰를 따라가세요. 디렉터리에는 **모든 도구**가 한곳에 모여 있습니다.' },
    ],
    flow: {
      title: '전체 구조',
      caption: '도식: 런타임에서 앱, 그리고 용도까지.',
      ariaLabel: '도식: Ollama, llama.cpp, vLLM 같은 런타임이 모델을 제공하고, LM Studio, Jan, Open WebUI 같은 앱이 코딩, RAG, 에이전트 같은 용도를 다룹니다',
      columns: [
        { label: '런타임', tone: 'azure', chips: ['Ollama', 'llama.cpp', 'vLLM'] },
        { label: '앱', tone: 'violet', chips: ['LM Studio', 'Jan', 'Open WebUI'] },
        { label: '용도', tone: 'rose', chips: ['코딩', 'RAG', '에이전트'] },
      ],
    },
    jump: { label: '바로가기', start: '여기서 시작', explore: '주제', why: '이유', latest: '최신', deeper: '더 깊이', faq: '자주 묻는 질문' },
    start: {
      title: '여기서 시작',
      intro: '자주 찾는 네 가지 목표입니다. 맞는 것을 고르세요.',
      badge: '여기서 시작',
      goals: { beginner: '첫 로컬 AI 앱 설치하기', rag: '내 PDF와 대화하기', coding: '클라우드 코딩 어시스턴트 대체하기', mobile: '휴대폰에서 모델 실행하기' },
    },
    explore: {
      title: '주제별로 살펴보기',
      intro: '{tiles}개 주제, 글 {pages}개. 클릭하면 그 자리에서 주제가 열립니다.',
      unit: '글',
      tileSummary: {
        'overview-reference': '런타임, 하드웨어 선택, 라이선스, 그리고 어떤 도구가 있는지 한눈에 보는 지도.',
        'easiest-desktop-apps': '내려받아 바로 쓰는 채팅 앱. 터미널이 필요 없는 입문용.',
        'rag-document-chat': '기기 밖으로 내보내지 않고 내 PDF와 노트와 대화하기.',
        'coding-assistants': '클라우드 도구의 대안이 되는 로컬 코딩 어시스턴트와 모델.',
        'local-ai-agents': '도구 호출, MCP, 자체 호스팅 에이전트를 이용한 자동화.',
        'creative-roleplay': '로컬 모델로 하는 소설, 세계관 구축, 캐릭터 채팅.',
        'mobile-edge-llms': '휴대폰, 태블릿, 엣지 기기에서 돌리는 모델.',
        'productivity-tools': 'Obsidian, Logseq, Joplin 등 노트와 지식 관리 도구.',
        'voice-speech-multimodal': '오프라인 음성 인식, 음성 합성, 비전 모델.',
        'image-video-generation': '내 GPU에서 이미지와 영상 생성하기.',
        'enterprise-compliance': '기업을 위한 접근 제어, 거버넌스, 법률 주제.',
      },
    },
    why: { title: 'LLM 소프트웨어를 로컬로 실행하는 이유', labels: ['생태계', '시작점', '가장 큰 변화', '모바일과 엣지'] },
    latest: { title: '최신', intro: '가장 새롭거나 최근에 변경된 페이지.', more: '모든 주제 보기', updated: '업데이트', published: '게시' },
    deeper: {
      title: '더 깊이',
      intro: '다른 주제 영역, 각각 고유한 색으로.',
      open: '열기',
      names: { 'smart-home': '스마트홈', 'balcony-solar': 'Balcony Solar', 'local-llms': '로컬 LLM', 'prompt-bites': 'Prompt Bites', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant, Matter, 집을 위한 로컬 AI.',
        'balcony-solar': '플러그인 방식의 태양광 장치, 규정, 가이드.',
        'local-llms': '집에서 AI를 돌리기 위한 모델, 저장 장치, 하드웨어.',
        'prompt-bites': '60초 안에 읽는 짧은 답변.',
        'prompt-engineering': '어떤 AI 모델에서든 더 나은 결과 얻기.',
      },
    },
  },
}

// One accent color per hub, matching each hub's own pages.
const HUB_TONES_BY_SLUG: Record<DeeperHub, HubTone> = {
  'smart-home': 'cyan',
  'balcony-solar': 'orange',
  'local-llms': 'rose',
  'prompt-bites': 'orchid',
  'prompt-engineering': 'blue',
}

export interface PowerLocalLlmHubThemeSource {
  id: string
  /** Localized tile title and description (HUB_THEME_TEXT_<LANG>, or the EN theme for `en`). */
  badge: string
  description: string
  slugs: string[]
}

export interface PowerLocalLlmHubTemplateSource {
  lang: Lang
  hero: { h1: string; intro: string; introBold: string; keyTakeaways: string[] }
  themes: PowerLocalLlmHubThemeSource[]
  faqs: { q: string; a: string }[]
  faqHeading: string
  relatedReadingHeading: string
  relatedReadingLinks: { href: string; label: string }[]
  toolCount: number
  lastUpdated: string
  lastUpdatedLabel: string
  homeLabel: string
  fallbackTitle: (slug: string) => string
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

export function PowerLocalLlmHubTemplate(source: PowerLocalLlmHubTemplateSource): ReactNode {
  const { lang } = source
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Power Local LLM hub template has no strings for "${lang}"`)
  }

  const articleOf = (slug: string) => {
    const key = POWER_LLM_SLUG_TO_KEY[slug] ?? slug
    const data = powerLLMContent[key]
    return { en: data?.en, local: data?.[lang] ?? data?.en }
  }

  const toItem = (slug: string): HubItem => {
    const { en, local } = articleOf(slug)
    const isNew = isNewArticle(en?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(en?.publishDate, en?.dateModified)
    return {
      href: powerLLMArticlePath(lang, slug),
      title: local?.title ?? en?.title ?? POWER_LLM_BRIEFS[slug]?.title ?? source.fallbackTitle(slug),
      kind: 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // One tile per HUB_THEMES entry. Items = the theme's published slugs, in the editorial order of HUB_THEMES.
  const tiles: HubTile[] = source.themes.map((theme) => ({
    id: theme.id,
    title: theme.badge,
    summary: copy.explore.tileSummary[theme.id as (typeof THEME_IDS)[number]] ?? theme.description,
    intro: theme.description,
    unit: copy.explore.unit,
    items: theme.slugs.filter((slug) => isPowerLLMArticlePublished(slug, lang)).map(toItem),
  }))

  const seen = new Set<string>()
  const allSlugs = tiles.flatMap((tile, i) =>
    source.themes[i].slugs.filter((slug) => {
      if (seen.has(slug) || !isPowerLLMArticlePublished(slug, lang)) return false
      seen.add(slug)
      return true
    }),
  )

  const startTones: HubTone[] = ['violet', 'azure', 'rose', 'indigo']
  const startIcons: HubStartCard['icon'][] = ['package', 'shield', 'trend', 'home']
  const startKeys = Object.keys(START_SLUGS) as (keyof typeof START_SLUGS)[]
  const startCards: HubStartCard[] = startKeys.map((key, i) => ({
    href: powerLLMArticlePath(lang, START_SLUGS[key]),
    goal: copy.start.goals[key],
    title: toItem(START_SLUGS[key]).title,
    tone: startTones[i],
    icon: startIcons[i],
    badge: i === 0 ? copy.start.badge : undefined,
  }))

  // Latest: every article inside the "new" window first (same rule as the old "New This Month" block),
  // then the most recently changed ones, three cards minimum and six at most.
  const dated = allSlugs
    .map((slug) => {
      const { en } = articleOf(slug)
      const date = en?.dateModified ?? en?.publishDate
      return { slug, date, modified: Boolean(en?.dateModified), isNew: isNewArticle(en?.publishDate) }
    })
    .filter((entry): entry is { slug: string; date: string; modified: boolean; isNew: boolean } => Boolean(entry.date))
    .sort((a, b) => b.date.localeCompare(a.date))
  const newOnes = dated.filter((entry) => entry.isNew)
  const latestCount = Math.min(6, Math.max(3, newOnes.length))
  const latest = [...newOnes, ...dated.filter((entry) => !entry.isNew)].slice(0, latestCount)
  const latestTones: HubTone[] = ['orchid', 'azure', 'violet']
  const latestCards: HubLatestCard[] = latest.map((entry, i) => {
    const item = toItem(entry.slug)
    return {
      href: item.href,
      title: item.title,
      tone: latestTones[i % latestTones.length],
      badge: item.badge,
      dateLabel: `${entry.modified ? copy.latest.updated : copy.latest.published}: ${formatDisplayDate(entry.date, lang)}`,
    }
  })

  const hubLinks: HubLink[] = DEEPER_HUBS.map((slug) => ({
    href: lang === 'en' ? `/${slug}` : `/${lang}/${slug}`,
    name: copy.deeper.names[slug],
    line: copy.deeper.lines[slug],
    tone: HUB_TONES_BY_SLUG[slug],
  }))

  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)
  const reviewed = {
    dateTime: source.lastUpdated,
    text: `${source.lastUpdatedLabel} ${formatDisplayDate(source.lastUpdated, lang)}`,
  }

  const takeaways = source.hero.keyTakeaways
  const whyCards = copy.why.labels.map((label, i) => ({ label, detail: takeaways[i] ?? '', tone: cycleTone(i) })).filter((card) => card.detail)
  const lastTakeaway = takeaways[copy.why.labels.length]

  return (
    <HubTemplate
      accent="violet"
      breadcrumb={{ homeLabel: source.homeLabel, homeHref: lang === 'en' ? '/' : `/${lang}`, current: copy.pill }}
      pill={copy.pill}
      title={source.hero.h1}
      titleHighlight={copy.titleHighlight}
      intro={`${source.hero.intro} **${source.hero.introBold}**`}
      primaryCta={{ label: fill(copy.primaryCta, { count: source.toolCount }), href: powerLLMArticlePath(lang, DIRECTORY_SLUG) }}
      secondaryCta={{ label: copy.secondaryCta, href: '#explore' }}
      summaryCards={copy.summary.map((card, i) => ({ ...card, tone: i === 0 ? 'azure' : 'rose' }))}
      reviewed={reviewed}
      flow={copy.flow}
      jump={{
        label: copy.jump.label,
        items: [
          { id: 'start', label: copy.jump.start, tone: jumpTones[0] },
          { id: 'explore', label: copy.jump.explore, tone: jumpTones[1] },
          { id: 'why', label: copy.jump.why, tone: jumpTones[2] },
          { id: 'latest', label: copy.jump.latest, tone: jumpTones[3] },
          { id: 'deeper', label: copy.jump.deeper, tone: jumpTones[4] },
          { id: 'faq', label: copy.jump.faq, tone: jumpTones[5] },
        ],
      }}
      start={{ title: copy.start.title, intro: copy.start.intro, cards: startCards }}
      explore={{
        title: copy.explore.title,
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: allSlugs.length }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{
        title: copy.why.title,
        intro: lastTakeaway ?? '',
        cards: whyCards,
      }}
      latest={{
        title: copy.latest.title,
        intro: copy.latest.intro,
        cards: latestCards,
        moreLabel: copy.latest.more,
        badgeNew: labels.badgeNew,
        badgeUpdated: labels.badgeUpdated,
      }}
      deeper={{ title: copy.deeper.title, intro: copy.deeper.intro, openLabel: copy.deeper.open, links: hubLinks }}
      faq={{ heading: source.faqHeading, items: source.faqs }}
      footer={
        <section className="border-t border-border pt-8">
          <h2 className="mb-4 text-lg font-bold text-text-primary">{source.relatedReadingHeading}</h2>
          <ul className="space-y-2 text-sm">
            {source.relatedReadingLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-hub-violet hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      }
    />
  )
}
