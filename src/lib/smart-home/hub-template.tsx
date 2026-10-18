// Smart Home hub on the shared hub template (src/components/hub-template).
//
// Same recipe as src/lib/balcony-solar/hub-template.tsx: this file only adapts Smart Home data to the
// generic template. Languages listed in SMART_HOME_HUB_TEMPLATE_LANGS use it; the original hub in
// page-helpers.tsx stays as the fallback for any language without strings here.
//
// Nothing here fetches data. Every article link comes from SMART_HOME_CATEGORIES, so the
// hub-coverage validator (scripts/validate-hub-coverage.mjs) keeps working unchanged.

import type { ReactNode } from 'react'
import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Lang } from '@/lib/i18n/constants'
import { smartHomeContent } from './content'
import { SMART_HOME_CATEGORIES } from './categories'
import { smartHomeArticlePath } from './metadata-helpers'
import { SMART_HOME_SLUG_TO_KEY } from './slugs'

/** Languages that render the hub with the new template. Add a language only after its strings exist below. */
export const SMART_HOME_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesSmartHomeHubTemplate(lang: Lang): boolean {
  return SMART_HOME_HUB_TEMPLATE_LANGS.has(lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

// Slugs behind the four "Start here" cards (one per common reader goal).
const START_SLUGS = {
  beginner: 'smart-home-for-beginners-where-to-start',
  setup: 'home-assistant-getting-started',
  ai: 'home-assistant-ollama-integration',
  buy: 'best-mini-pc-home-assistant-local-ai',
} as const
const PRIMARY_CTA_SLUG = 'local-smart-home-complete-guide'

interface HubTemplateCopy {
  pill: string
  titleHighlight: string
  primaryCta: string
  secondaryCta: string
  summary: { label: string; text: string }[]
  flow: { title: string; caption: string; ariaLabel: string; columns: { label: string; tone: HubTone; chips: string[] }[] }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string; goals: Record<keyof typeof START_SLUGS, string> }
  explore: {
    title: string
    intro: string
    guidesUnit: string
    /** Tile summary line per category id. */
    tileSummary: Record<string, string>
    /** Localized tile titles for categories that CATEGORY_COPY in page-helpers.tsx does not cover. */
    tileTitles: Record<string, string>
  }
  why: { title: string; takeaway?: string }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; lines: Record<string, string>; extra: { slug: string; name: string }[] }
  overview: { title: string; iframeTitle: string }
  guideCountToken: string
}

const DEEPER_EXTRA = [
  { slug: 'balcony-solar', name: 'Balcony Solar' },
  { slug: 'prompt-bites', name: 'Prompt Bites' },
  { slug: 'prompt-engineering', name: 'Prompt Engineering' },
]

const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  de: {
    pill: 'Smart Home',
    titleHighlight: 'lokalen LLM',
    primaryCta: 'Kompletten Leitfaden lesen',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      { label: 'In einem Satz', text: 'Ein lokales Smart Home ist ein **Zuhause, das auf Ihrer eigenen Hardware läuft**, mit Automatisierungen, Sprachsteuerung und optional einem KI-Modell **ohne Hersteller-Cloud**.' },
      { label: 'In einfachen Worten', text: 'Home Assistant auf einem kleinen PC einrichten, Geräte über Matter, Zigbee oder Thread verbinden, lokale Sprachsteuerung ergänzen. Die Anleitungen unten zeigen **jeden Schritt**.' },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: von den Geräten über Home Assistant bis zur lokalen KI.',
      ariaLabel: 'Schema: Geräte über Matter, Zigbee und Thread sind mit Home Assistant verbunden, das lokale KI-Dienste wie Ollama, Whisper und Piper nutzt',
      columns: [
        { label: 'Geräte', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['Automatisierungen', 'Dashboards', 'Energie'] },
        { label: 'Lokale KI', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'Springen zu', start: 'Hier starten', explore: 'Themen', why: 'Warum', latest: 'Zuletzt aktualisiert', deeper: 'Weiter vertiefen', faq: 'Häufige Fragen' },
    start: {
      title: 'Hier starten',
      intro: 'Vier häufige Ziele. Wählen Sie das, das zu Ihnen passt.',
      badge: 'Hier starten',
      goals: { beginner: 'Als Einsteiger anfangen', setup: 'Home Assistant einrichten', ai: 'Ein lokales LLM anbinden', buy: 'Den passenden Mini-PC finden' },
    },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Anleitungen. Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      guidesUnit: 'Anleitungen',
      tileSummary: {
        foundations: 'Was ein Smart Home ist, Ökosysteme, Protokolle und Datenschutzrisiken.',
        'local-first': 'Home Assistant, Matter vor Ort, DSGVO-freundliche Setups, Abschied von der Cloud.',
        'local-ai': 'Ollama mit Home Assistant, lokale Sprachsteuerung, KI-Automatisierungen, Kameras.',
        'decision-comparison': 'Vergleiche, Mini-PCs für Home Assistant, Smart Home ohne Abos.',
        'energy-solar-integration': 'Solar, Speicher und Wärmepumpe mit Matter und Home Assistant verbinden.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, EU Data Act und das IKEA-Matter-Ökosystem.',
        'advanced-local-ai': 'Kleine Sprachmodelle, Radar-Präsenz, weniger Halluzinationen, Sensorfusion.',
        'affiliate-buyers-guides': 'Kameras, Schlösser, Thermostate, Zigbee-/Thread-Dongles, Hubs, Energiemessung.',
      },
      tileTitles: {
        'energy-solar-integration': 'Energie und Solar',
        'protocols-regulation-2027': 'Protokolle und Regulierung 2026',
        'advanced-local-ai': 'Fortgeschrittene lokale KI',
        'affiliate-buyers-guides': 'Kaufberatung',
      },
    },
    why: {
      title: 'Warum ein lokales Smart Home',
      takeaway: '**Kurz gesagt:** Ein lokales Smart Home hält Sprache, Kamerabilder und Automatisierungen **auf Ihrer eigenen Hardware**, braucht **keine Abos** und läuft bei einem Internetausfall **weiter**.',
    },
    latest: { title: 'Zuletzt aktualisiert', intro: 'Die drei Seiten mit der jüngsten Änderung.', more: 'Alle Themen ansehen', updated: 'Aktualisiert', published: 'Veröffentlicht' },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      lines: {
        'local-llms': 'Modelle, Speicher und Hardware für KI zu Hause.',
        'power-local-llm': 'Die passende lokale KI-App finden.',
        'pq-apps#compare-tools': 'Apps und Modelle nebeneinander vergleichen.',
        'balcony-solar': 'Steckerfertige Solargeräte, Regeln und Anleitungen.',
        'prompt-bites': 'Kurze Antworten in 60 Sekunden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'Überblick als Präsentation', iframeTitle: 'Smart Home Überblick' },
    guideCountToken: '25 Guides',
  },
  en: {
    pill: 'Smart Home',
    titleHighlight: 'Local LLM',
    primaryCta: 'Read the complete guide',
    secondaryCta: 'See all topics',
    summary: [
      { label: 'In one sentence', text: 'A local-first smart home is a **home that runs on your own hardware**, with automations, voice control and optionally an AI model working **without a manufacturer cloud**.' },
      { label: 'In plain terms', text: 'Set up Home Assistant on a small PC, connect devices over Matter, Zigbee or Thread, add local voice. The guides below walk you through **every step**.' },
    ],
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from your devices through Home Assistant to local AI.',
      ariaLabel: 'Diagram: devices on Matter, Zigbee and Thread connect to Home Assistant, which uses local AI services such as Ollama, Whisper and Piper',
      columns: [
        { label: 'Devices', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['Automations', 'Dashboards', 'Energy'] },
        { label: 'Local AI', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'Jump to', start: 'Start here', explore: 'Topics', why: 'Why', latest: 'Recently updated', deeper: 'Go deeper', faq: 'FAQ' },
    start: {
      title: 'Start here',
      intro: 'Four common goals. Pick the one that fits you.',
      badge: 'Start here',
      goals: { beginner: 'Start as a beginner', setup: 'Set up Home Assistant', ai: 'Connect a local LLM', buy: 'Find the right mini PC' },
    },
    explore: {
      title: 'Explore by topic',
      intro: '{tiles} topics, {pages} guides. One click opens a topic right where you are.',
      guidesUnit: 'Guides',
      tileSummary: {
        foundations: 'What a smart home is, ecosystems, protocols and privacy risks.',
        'local-first': 'Home Assistant, local Matter control, GDPR-friendly setups, leaving the cloud.',
        'local-ai': 'Ollama with Home Assistant, local voice, AI automations, cameras.',
        'decision-comparison': 'Comparisons, mini PCs for Home Assistant, smart home without subscriptions.',
        'energy-solar-integration': 'Connect solar, batteries and heat pumps through Matter and Home Assistant.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, the EU Data Act and the IKEA Matter ecosystem.',
        'advanced-local-ai': 'Small language models, radar presence, fewer hallucinations, sensor fusion.',
        'affiliate-buyers-guides': 'Cameras, locks, thermostats, Zigbee and Thread dongles, hubs, energy monitoring.',
      },
      tileTitles: {},
    },
    why: {
      title: 'Why a local-first smart home',
      takeaway: '**In short:** A local-first smart home keeps voice, camera footage and automations **on your own hardware**, needs **no subscriptions**, and keeps **running** when the internet goes down.',
    },
    latest: { title: 'Recently updated', intro: 'The three pages with the newest change.', more: 'See all topics', updated: 'Updated', published: 'Published' },
    deeper: {
      title: 'Go deeper',
      intro: 'The other topic worlds, each in its own color.',
      open: 'Open',
      lines: {
        'local-llms': 'Models, storage and hardware for AI at home.',
        'power-local-llm': 'Find the right local AI app.',
        'pq-apps#compare-tools': 'Compare apps and models side by side.',
        'balcony-solar': 'Plug-in solar devices, rules and guides.',
        'prompt-bites': 'Short answers in 60 seconds.',
        'prompt-engineering': 'Better results with any AI model.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'Overview as a presentation', iframeTitle: 'Smart Home overview' },
    guideCountToken: '25 guides',
  },
  fr: {
    pill: 'Maison connectée',
    titleHighlight: 'LLM local',
    primaryCta: 'Lire le guide complet',
    secondaryCta: 'Voir tous les sujets',
    summary: [
      { label: 'En une phrase', text: 'Une maison connectée locale est une **maison qui fonctionne sur votre propre matériel**, avec automatisations, commande vocale et, en option, un modèle d\'IA **sans cloud du fabricant**.' },
      { label: 'En termes simples', text: 'Installer Home Assistant sur un petit PC, relier les appareils via Matter, Zigbee ou Thread, ajouter la voix locale. Les guides ci-dessous détaillent **chaque étape**.' },
    ],
    flow: {
      title: 'Comment tout s\'articule',
      caption: 'Schéma : des appareils à l\'IA locale en passant par Home Assistant.',
      ariaLabel: 'Schéma : les appareils Matter, Zigbee et Thread se connectent à Home Assistant, qui utilise des services d\'IA locaux comme Ollama, Whisper et Piper',
      columns: [
        { label: 'Appareils', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['Automatisations', 'Tableaux de bord', 'Énergie'] },
        { label: 'IA locale', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'Aller à', start: 'Commencer ici', explore: 'Sujets', why: 'Pourquoi', latest: 'Mis à jour récemment', deeper: 'Approfondir', faq: 'FAQ' },
    start: {
      title: 'Commencer ici',
      intro: 'Quatre objectifs courants. Choisissez celui qui vous correspond.',
      badge: 'Commencer ici',
      goals: { beginner: 'Débuter pas à pas', setup: 'Installer Home Assistant', ai: 'Connecter un LLM local', buy: 'Trouver le bon mini PC' },
    },
    explore: {
      title: 'Explorer par sujet',
      intro: '{tiles} sujets, {pages} guides. Un clic ouvre un sujet directement sur place.',
      guidesUnit: 'Guides',
      tileSummary: {
        foundations: 'Ce qu\'est une maison connectée, écosystèmes, protocoles et risques pour la vie privée.',
        'local-first': 'Home Assistant, Matter en local, configurations conformes au RGPD, quitter le cloud.',
        'local-ai': 'Ollama avec Home Assistant, voix locale, automatisations IA, caméras.',
        'decision-comparison': 'Comparatifs, mini PC pour Home Assistant, maison connectée sans abonnement.',
        'energy-solar-integration': 'Relier solaire, batteries et pompes à chaleur via Matter et Home Assistant.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, Data Act européen et écosystème IKEA Matter.',
        'advanced-local-ai': 'Petits modèles de langage, présence par radar, moins d\'hallucinations, fusion de capteurs.',
        'affiliate-buyers-guides': 'Caméras, serrures, thermostats, clés Zigbee et Thread, hubs, suivi énergétique.',
      },
      tileTitles: {
        'energy-solar-integration': 'Énergie et solaire',
        'protocols-regulation-2027': 'Protocoles et réglementation 2026',
        'advanced-local-ai': 'IA locale avancée',
        'affiliate-buyers-guides': 'Guides d\'achat',
      },
    },
    why: {
      title: 'Pourquoi une maison connectée locale',
      takeaway: '**En bref :** une maison connectée locale garde la voix, les images des caméras et les automatisations **sur votre propre matériel**, ne demande **aucun abonnement** et **continue de fonctionner** en cas de panne Internet.',
    },
    latest: { title: 'Mis à jour récemment', intro: 'Les trois pages modifiées le plus récemment.', more: 'Voir tous les sujets', updated: 'Mis à jour', published: 'Publié' },
    deeper: {
      title: 'Approfondir',
      intro: 'Les autres univers thématiques, chacun dans sa propre couleur.',
      open: 'Ouvrir',
      lines: {
        'local-llms': 'Modèles, stockage et matériel pour l\'IA à la maison.',
        'power-local-llm': 'Trouver la bonne application d\'IA locale.',
        'pq-apps#compare-tools': 'Comparer applications et modèles côte à côte.',
        'balcony-solar': 'Appareils solaires prêts à brancher, règles et guides.',
        'prompt-bites': 'Réponses courtes en 60 secondes.',
        'prompt-engineering': 'De meilleurs résultats avec n\'importe quel modèle d\'IA.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'Aperçu en présentation', iframeTitle: 'Aperçu de la maison connectée' },
    guideCountToken: '25 guides',
  },
  ja: {
    pill: 'スマートホーム',
    titleHighlight: 'ローカルLLM',
    primaryCta: '総合ガイドを読む',
    secondaryCta: 'すべてのトピックを見る',
    summary: [
      { label: 'ひとことで', text: 'ローカルファーストのスマートホームとは、**自分のハードウェアで動く家**のこと。自動化や音声操作、必要ならAIモデルも**メーカーのクラウドなし**で動かせます。' },
      { label: 'やさしく言うと', text: '小型PCにHome Assistantを入れ、Matter・Zigbee・Threadで機器をつなぎ、ローカル音声を追加します。以下のガイドが**すべての手順**を案内します。' },
    ],
    flow: {
      title: '全体のつながり',
      caption: '図：機器からHome Assistantを経てローカルAIまで。',
      ariaLabel: '図：Matter、Zigbee、Threadの機器がHome Assistantにつながり、Ollama、Whisper、PiperなどのローカルAIサービスを利用する',
      columns: [
        { label: '機器', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['自動化', 'ダッシュボード', 'エネルギー'] },
        { label: 'ローカルAI', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: '移動', start: 'ここから始める', explore: 'トピック', why: '理由', latest: '最近の更新', deeper: 'さらに深く', faq: 'よくある質問' },
    start: {
      title: 'ここから始める',
      intro: 'よくある4つの目的です。当てはまるものを選んでください。',
      badge: 'ここから始める',
      goals: { beginner: '初心者として始める', setup: 'Home Assistantを設定する', ai: 'ローカルLLMをつなぐ', buy: '最適なミニPCを探す' },
    },
    explore: {
      title: 'トピックから探す',
      intro: '{tiles}トピック、ガイド{pages}本。クリックすると、その場でトピックが開きます。',
      guidesUnit: 'ガイド',
      tileSummary: {
        foundations: 'スマートホームとは、エコシステム、プロトコル、プライバシーのリスク。',
        'local-first': 'Home Assistant、Matterのローカル制御、GDPRに配慮した構成、クラウドからの移行。',
        'local-ai': 'OllamaとHome Assistant、ローカル音声、AI自動化、カメラ。',
        'decision-comparison': '比較、Home Assistant向けミニPC、サブスクなしのスマートホーム。',
        'energy-solar-integration': '太陽光、蓄電池、ヒートポンプをMatterとHome Assistantでつなぐ。',
        'protocols-regulation-2027': 'Matter 1.6、Thread 1.4、Wi-Fi 7、EUデータ法、IKEAのMatterエコシステム。',
        'advanced-local-ai': '小型言語モデル、レーダーによる在室検知、幻覚の低減、センサーフュージョン。',
        'affiliate-buyers-guides': 'カメラ、スマートロック、サーモスタット、Zigbee/Threadドングル、ハブ、電力計測。',
      },
      tileTitles: {
        'energy-solar-integration': 'エネルギーと太陽光',
        'protocols-regulation-2027': 'プロトコルと規制 2026',
        'advanced-local-ai': '上級ローカルAI',
        'affiliate-buyers-guides': '購入ガイド',
      },
    },
    why: {
      title: 'なぜローカルファーストのスマートホームか',
      takeaway: '**要点：**ローカルファーストのスマートホームは、音声・カメラ映像・自動化を**自分のハードウェア上**に置き、**サブスクは不要**で、インターネットが止まっても**動き続けます**。',
    },
    latest: { title: '最近の更新', intro: '最も新しく変更された3ページ。', more: 'すべてのトピックを見る', updated: '更新', published: '公開' },
    deeper: {
      title: 'さらに深く',
      intro: 'ほかのテーマ領域を、それぞれ専用の色で。',
      open: '開く',
      lines: {
        'local-llms': '自宅でAIを動かすためのモデル、ストレージ、ハードウェア。',
        'power-local-llm': '最適なローカルAIアプリを見つける。',
        'pq-apps#compare-tools': 'アプリやモデルを並べて比較する。',
        'balcony-solar': 'プラグイン式の太陽光発電機器、ルール、ガイド。',
        'prompt-bites': '60秒で読める短い回答。',
        'prompt-engineering': 'どのAIモデルでも結果を良くする方法。',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'プレゼンテーションで概要を見る', iframeTitle: 'スマートホーム概要' },
    guideCountToken: '25本',
  },
  zh: {
    pill: '智能家居',
    titleHighlight: '本地大模型',
    primaryCta: '阅读完整指南',
    secondaryCta: '查看全部主题',
    summary: [
      { label: '一句话概括', text: '本地优先的智能家居是**运行在您自己硬件上的家**，自动化、语音控制，以及可选的 AI 模型都**无需厂商云端**。' },
      { label: '通俗地说', text: '在小型电脑上装好 Home Assistant，用 Matter、Zigbee 或 Thread 连接设备，再加上本地语音。下面的指南会带您走完**每一步**。' },
    ],
    flow: {
      title: '整体如何连接',
      caption: '示意图：从设备经 Home Assistant 到本地 AI。',
      ariaLabel: '示意图：Matter、Zigbee 和 Thread 设备连接到 Home Assistant，后者调用 Ollama、Whisper、Piper 等本地 AI 服务',
      columns: [
        { label: '设备', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['自动化', '仪表盘', '能源'] },
        { label: '本地 AI', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: '跳转到', start: '从这里开始', explore: '主题', why: '为什么', latest: '最近更新', deeper: '深入了解', faq: '常见问题' },
    start: {
      title: '从这里开始',
      intro: '四个常见目标，选择最适合您的一个。',
      badge: '从这里开始',
      goals: { beginner: '从零基础开始', setup: '设置 Home Assistant', ai: '接入本地大模型', buy: '选对迷你主机' },
    },
    explore: {
      title: '按主题浏览',
      intro: '{tiles}个主题，{pages}篇指南。点击即可就地展开主题。',
      guidesUnit: '指南',
      tileSummary: {
        foundations: '什么是智能家居、生态系统、协议与隐私风险。',
        'local-first': 'Home Assistant、Matter 本地控制、符合 GDPR 的方案、摆脱云端。',
        'local-ai': 'Ollama 搭配 Home Assistant、本地语音、AI 自动化、摄像头。',
        'decision-comparison': '对比评测、适合 Home Assistant 的迷你主机、无订阅智能家居。',
        'energy-solar-integration': '通过 Matter 和 Home Assistant 连接光伏、储能与热泵。',
        'protocols-regulation-2027': 'Matter 1.6、Thread 1.4、Wi-Fi 7、欧盟数据法案与 IKEA 的 Matter 生态。',
        'advanced-local-ai': '小型语言模型、雷达人体存在感知、减少幻觉、传感器融合。',
        'affiliate-buyers-guides': '摄像头、门锁、温控器、Zigbee/Thread 适配器、网关、能耗监测。',
      },
      tileTitles: {
        'energy-solar-integration': '能源与光伏',
        'protocols-regulation-2027': '协议与法规 2026',
        'advanced-local-ai': '进阶本地 AI',
        'affiliate-buyers-guides': '选购指南',
      },
    },
    why: {
      title: '为什么选择本地优先的智能家居',
      takeaway: '**简而言之：**本地优先的智能家居把语音、摄像头画面和自动化**留在您自己的硬件上**，**无需订阅**，断网时也能**继续运行**。',
    },
    latest: { title: '最近更新', intro: '最近有改动的三个页面。', more: '查看全部主题', updated: '更新于', published: '发布于' },
    deeper: {
      title: '深入了解',
      intro: '其他主题板块，各有专属颜色。',
      open: '打开',
      lines: {
        'local-llms': '在家运行 AI 所需的模型、存储和硬件。',
        'power-local-llm': '找到合适的本地 AI 应用。',
        'pq-apps#compare-tools': '并排比较应用与模型。',
        'balcony-solar': '即插即用的太阳能设备、规定与指南。',
        'prompt-bites': '60 秒读懂的简短回答。',
        'prompt-engineering': '让任何 AI 模型都给出更好的结果。',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: '以演示文稿查看概览', iframeTitle: '智能家居概览' },
    guideCountToken: '25篇',
  },
  es: {
    pill: 'Hogar inteligente',
    titleHighlight: 'LLM local',
    primaryCta: 'Leer la guía completa',
    secondaryCta: 'Ver todos los temas',
    summary: [
      { label: 'En una frase', text: 'Un hogar inteligente local es un **hogar que funciona en tu propio hardware**, con automatizaciones, control por voz y, opcionalmente, un modelo de IA **sin la nube del fabricante**.' },
      { label: 'En palabras sencillas', text: 'Instalar Home Assistant en un PC pequeño, conectar dispositivos con Matter, Zigbee o Thread, añadir voz local. Las guías de abajo explican **cada paso**.' },
    ],
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: de los dispositivos a la IA local pasando por Home Assistant.',
      ariaLabel: 'Esquema: los dispositivos Matter, Zigbee y Thread se conectan a Home Assistant, que usa servicios de IA local como Ollama, Whisper y Piper',
      columns: [
        { label: 'Dispositivos', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['Automatizaciones', 'Paneles', 'Energía'] },
        { label: 'IA local', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'Ir a', start: 'Empezar aquí', explore: 'Temas', why: 'Por qué', latest: 'Actualizado recientemente', deeper: 'Profundizar', faq: 'Preguntas frecuentes' },
    start: {
      title: 'Empezar aquí',
      intro: 'Cuatro objetivos habituales. Elige el que más te convenga.',
      badge: 'Empezar aquí',
      goals: { beginner: 'Empezar desde cero', setup: 'Configurar Home Assistant', ai: 'Conectar un LLM local', buy: 'Encontrar el mini PC adecuado' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} guías. Un clic abre un tema justo ahí.',
      guidesUnit: 'Guías',
      tileSummary: {
        foundations: 'Qué es un hogar inteligente, ecosistemas, protocolos y riesgos de privacidad.',
        'local-first': 'Home Assistant, control local con Matter, configuraciones compatibles con el RGPD, salir de la nube.',
        'local-ai': 'Ollama con Home Assistant, voz local, automatizaciones con IA, cámaras.',
        'decision-comparison': 'Comparativas, mini PCs para Home Assistant, hogar inteligente sin suscripciones.',
        'energy-solar-integration': 'Conectar solar, baterías y bombas de calor con Matter y Home Assistant.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, la Ley de Datos de la UE y el ecosistema Matter de IKEA.',
        'advanced-local-ai': 'Modelos de lenguaje pequeños, presencia por radar, menos alucinaciones, fusión de sensores.',
        'affiliate-buyers-guides': 'Cámaras, cerraduras, termostatos, dongles Zigbee y Thread, hubs, medición de energía.',
      },
      tileTitles: {
        'energy-solar-integration': 'Energía y solar',
        'protocols-regulation-2027': 'Protocolos y regulación 2026',
        'advanced-local-ai': 'IA local avanzada',
        'affiliate-buyers-guides': 'Guías de compra',
      },
    },
    why: {
      title: 'Por qué un hogar inteligente local',
      takeaway: '**En resumen:** un hogar inteligente local mantiene la voz, las imágenes de las cámaras y las automatizaciones **en tu propio hardware**, **no requiere suscripciones** y **sigue funcionando** si se cae internet.',
    },
    latest: { title: 'Actualizado recientemente', intro: 'Las tres páginas con el cambio más reciente.', more: 'Ver todos los temas', updated: 'Actualizado', published: 'Publicado' },
    deeper: {
      title: 'Profundizar',
      intro: 'Los demás mundos temáticos, cada uno con su propio color.',
      open: 'Abrir',
      lines: {
        'local-llms': 'Modelos, almacenamiento y hardware para IA en casa.',
        'power-local-llm': 'Encontrar la aplicación de IA local adecuada.',
        'pq-apps#compare-tools': 'Comparar aplicaciones y modelos lado a lado.',
        'balcony-solar': 'Dispositivos solares listos para enchufar, normas y guías.',
        'prompt-bites': 'Respuestas breves en 60 segundos.',
        'prompt-engineering': 'Mejores resultados con cualquier modelo de IA.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'Resumen en presentación', iframeTitle: 'Resumen del hogar inteligente' },
    guideCountToken: '25 guías',
  },
  pt: {
    pill: 'Casa inteligente',
    titleHighlight: 'LLM local',
    primaryCta: 'Ler o guia completo',
    secondaryCta: 'Ver todos os temas',
    summary: [
      { label: 'Em uma frase', text: 'Uma casa inteligente local é uma **casa que funciona no seu próprio hardware**, com automações, controle por voz e, opcionalmente, um modelo de IA **sem a nuvem do fabricante**.' },
      { label: 'Em palavras simples', text: 'Instalar o Home Assistant em um PC pequeno, conectar dispositivos por Matter, Zigbee ou Thread, adicionar voz local. Os guias abaixo mostram **cada etapa**.' },
    ],
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Esquema: dos dispositivos à IA local, passando pelo Home Assistant.',
      ariaLabel: 'Esquema: dispositivos Matter, Zigbee e Thread se conectam ao Home Assistant, que usa serviços de IA local como Ollama, Whisper e Piper',
      columns: [
        { label: 'Dispositivos', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['Automações', 'Painéis', 'Energia'] },
        { label: 'IA local', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'Ir para', start: 'Comece aqui', explore: 'Temas', why: 'Por quê', latest: 'Atualizado recentemente', deeper: 'Aprofundar', faq: 'Perguntas frequentes' },
    start: {
      title: 'Comece aqui',
      intro: 'Quatro objetivos comuns. Escolha o que combina com você.',
      badge: 'Comece aqui',
      goals: { beginner: 'Começar do zero', setup: 'Configurar o Home Assistant', ai: 'Conectar um LLM local', buy: 'Encontrar o mini PC certo' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} guias. Um clique abre um tema ali mesmo.',
      guidesUnit: 'Guias',
      tileSummary: {
        foundations: 'O que é uma casa inteligente, ecossistemas, protocolos e riscos de privacidade.',
        'local-first': 'Home Assistant, controle local com Matter, configurações compatíveis com a LGPD, sair da nuvem.',
        'local-ai': 'Ollama com Home Assistant, voz local, automações com IA, câmeras.',
        'decision-comparison': 'Comparativos, mini PCs para Home Assistant, casa inteligente sem assinaturas.',
        'energy-solar-integration': 'Conectar solar, baterias e bombas de calor com Matter e Home Assistant.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, a Lei de Dados da UE e o ecossistema Matter da IKEA.',
        'advanced-local-ai': 'Modelos de linguagem pequenos, presença por radar, menos alucinações, fusão de sensores.',
        'affiliate-buyers-guides': 'Câmeras, fechaduras, termostatos, dongles Zigbee e Thread, hubs, medição de energia.',
      },
      tileTitles: {
        'energy-solar-integration': 'Energia e solar',
        'protocols-regulation-2027': 'Protocolos e regulamentação 2026',
        'advanced-local-ai': 'IA local avançada',
        'affiliate-buyers-guides': 'Guias de compra',
      },
    },
    why: {
      title: 'Por que uma casa inteligente local',
      takeaway: '**Resumindo:** uma casa inteligente local mantém voz, imagens de câmeras e automações **no seu próprio hardware**, **não exige assinaturas** e **continua funcionando** quando a internet cai.',
    },
    latest: { title: 'Atualizado recentemente', intro: 'As três páginas com a alteração mais recente.', more: 'Ver todos os temas', updated: 'Atualizado', published: 'Publicado' },
    deeper: {
      title: 'Aprofundar',
      intro: 'Os outros universos temáticos, cada um com sua própria cor.',
      open: 'Abrir',
      lines: {
        'local-llms': 'Modelos, armazenamento e hardware para IA em casa.',
        'power-local-llm': 'Encontrar o aplicativo de IA local certo.',
        'pq-apps#compare-tools': 'Comparar aplicativos e modelos lado a lado.',
        'balcony-solar': 'Dispositivos solares prontos para plugar, regras e guias.',
        'prompt-bites': 'Respostas curtas em 60 segundos.',
        'prompt-engineering': 'Melhores resultados com qualquer modelo de IA.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'Visão geral em apresentação', iframeTitle: 'Visão geral da casa inteligente' },
    guideCountToken: '25 guias',
  },
  ar: {
    pill: 'المنزل الذكي',
    titleHighlight: 'نموذج لغوي محلي',
    primaryCta: 'اقرأ الدليل الكامل',
    secondaryCta: 'عرض كل المواضيع',
    summary: [
      { label: 'في جملة واحدة', text: 'المنزل الذكي المحلي **منزل يعمل على أجهزتك الخاصة**، بأتمتة وتحكم صوتي ونموذج ذكاء اصطناعي اختياري **دون سحابة الشركة المصنّعة**.' },
      { label: 'بعبارات بسيطة', text: 'ثبّت Home Assistant على حاسوب صغير، وصِل الأجهزة عبر Matter أو Zigbee أو Thread، وأضف الصوت المحلي. تشرح الأدلة أدناه **كل خطوة**.' },
    ],
    flow: {
      title: 'كيف تترابط الأجزاء',
      caption: 'مخطط: من الأجهزة عبر Home Assistant إلى الذكاء الاصطناعي المحلي.',
      ariaLabel: 'مخطط: أجهزة Matter وZigbee وThread تتصل بـ Home Assistant الذي يستخدم خدمات ذكاء اصطناعي محلية مثل Ollama وWhisper وPiper',
      columns: [
        { label: 'الأجهزة', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['الأتمتة', 'لوحات المعلومات', 'الطاقة'] },
        { label: 'ذكاء اصطناعي محلي', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: 'انتقل إلى', start: 'ابدأ هنا', explore: 'المواضيع', why: 'لماذا', latest: 'آخر التحديثات', deeper: 'تعمّق أكثر', faq: 'الأسئلة الشائعة' },
    start: {
      title: 'ابدأ هنا',
      intro: 'أربعة أهداف شائعة. اختر ما يناسبك.',
      badge: 'ابدأ هنا',
      goals: { beginner: 'البدء كمبتدئ', setup: 'إعداد Home Assistant', ai: 'ربط نموذج لغوي محلي', buy: 'اختيار الحاسوب المصغّر المناسب' },
    },
    explore: {
      title: 'استكشف حسب الموضوع',
      intro: '{tiles} مواضيع، {pages} دليلًا. نقرة واحدة تفتح الموضوع في مكانه.',
      guidesUnit: 'أدلة',
      tileSummary: {
        foundations: 'ما هو المنزل الذكي، والمنظومات، والبروتوكولات، ومخاطر الخصوصية.',
        'local-first': 'Home Assistant، والتحكم المحلي عبر Matter، وإعدادات متوافقة مع اللائحة العامة لحماية البيانات، والتخلي عن السحابة.',
        'local-ai': 'Ollama مع Home Assistant، والصوت المحلي، وأتمتة بالذكاء الاصطناعي، والكاميرات.',
        'decision-comparison': 'مقارنات، وحواسيب مصغّرة لـ Home Assistant، ومنزل ذكي بلا اشتراكات.',
        'energy-solar-integration': 'ربط الطاقة الشمسية والبطاريات والمضخات الحرارية عبر Matter وHome Assistant.',
        'protocols-regulation-2027': 'Matter 1.6 وThread 1.4 وWi-Fi 7 وقانون البيانات الأوروبي ومنظومة Matter من IKEA.',
        'advanced-local-ai': 'نماذج لغوية صغيرة، واستشعار الحضور بالرادار، وهلوسة أقل، ودمج المستشعرات.',
        'affiliate-buyers-guides': 'كاميرات، وأقفال، ومنظمات حرارة، ومحوّلات Zigbee وThread، ومراكز تحكم، وقياس الطاقة.',
      },
      tileTitles: {
        'energy-solar-integration': 'الطاقة والطاقة الشمسية',
        'protocols-regulation-2027': 'البروتوكولات والتنظيم 2026',
        'advanced-local-ai': 'الذكاء الاصطناعي المحلي المتقدم',
        'affiliate-buyers-guides': 'أدلة الشراء',
      },
    },
    why: {
      title: 'لماذا المنزل الذكي المحلي',
      takeaway: '**باختصار:** يُبقي المنزل الذكي المحلي الصوت ولقطات الكاميرات والأتمتة **على أجهزتك الخاصة**، ولا يتطلب **اشتراكات**، ويواصل **العمل** عند انقطاع الإنترنت.',
    },
    latest: { title: 'آخر التحديثات', intro: 'الصفحات الثلاث الأحدث تغييرًا.', more: 'عرض كل المواضيع', updated: 'تم التحديث', published: 'نُشر' },
    deeper: {
      title: 'تعمّق أكثر',
      intro: 'عوالم المواضيع الأخرى، لكل منها لونه الخاص.',
      open: 'فتح',
      lines: {
        'local-llms': 'النماذج والتخزين والعتاد للذكاء الاصطناعي في المنزل.',
        'power-local-llm': 'العثور على تطبيق الذكاء الاصطناعي المحلي المناسب.',
        'pq-apps#compare-tools': 'مقارنة التطبيقات والنماذج جنبًا إلى جنب.',
        'balcony-solar': 'أجهزة شمسية جاهزة للتوصيل، وقواعد، وأدلة.',
        'prompt-bites': 'إجابات قصيرة في 60 ثانية.',
        'prompt-engineering': 'نتائج أفضل مع أي نموذج ذكاء اصطناعي.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: 'نظرة عامة في عرض تقديمي', iframeTitle: 'نظرة عامة على المنزل الذكي' },
    guideCountToken: 'الـ25',
  },
  ko: {
    pill: '스마트홈',
    titleHighlight: '로컬 LLM',
    primaryCta: '전체 가이드 읽기',
    secondaryCta: '모든 주제 보기',
    summary: [
      { label: '한 문장으로', text: '로컬 퍼스트 스마트홈은 **내 하드웨어에서 돌아가는 집**으로, 자동화와 음성 제어, 필요하면 AI 모델까지 **제조사 클라우드 없이** 운영합니다.' },
      { label: '쉽게 말하면', text: '작은 PC에 Home Assistant를 설치하고, Matter·Zigbee·Thread로 기기를 연결하고, 로컬 음성을 더하면 됩니다. 아래 가이드가 **모든 단계**를 안내합니다.' },
    ],
    flow: {
      title: '전체 구성',
      caption: '도식: 기기에서 Home Assistant를 거쳐 로컬 AI까지.',
      ariaLabel: '도식: Matter, Zigbee, Thread 기기가 Home Assistant에 연결되고, Home Assistant는 Ollama, Whisper, Piper 같은 로컬 AI 서비스를 사용',
      columns: [
        { label: '기기', tone: 'azure', chips: ['Matter', 'Zigbee', 'Thread'] },
        { label: 'Home Assistant', tone: 'violet', chips: ['자동화', '대시보드', '에너지'] },
        { label: '로컬 AI', tone: 'rose', chips: ['Ollama', 'Whisper', 'Piper'] },
      ],
    },
    jump: { label: '바로가기', start: '여기서 시작', explore: '주제', why: '이유', latest: '최근 업데이트', deeper: '더 깊이', faq: '자주 묻는 질문' },
    start: {
      title: '여기서 시작',
      intro: '자주 찾는 네 가지 목표입니다. 맞는 것을 고르세요.',
      badge: '여기서 시작',
      goals: { beginner: '입문자로 시작하기', setup: 'Home Assistant 설정하기', ai: '로컬 LLM 연결하기', buy: '알맞은 미니 PC 찾기' },
    },
    explore: {
      title: '주제별로 살펴보기',
      intro: '{tiles}개 주제, 가이드 {pages}개. 클릭하면 그 자리에서 주제가 열립니다.',
      guidesUnit: '가이드',
      tileSummary: {
        foundations: '스마트홈이란 무엇인가, 생태계, 프로토콜, 개인정보 위험.',
        'local-first': 'Home Assistant, Matter 로컬 제어, GDPR을 고려한 구성, 클라우드에서 벗어나기.',
        'local-ai': 'Ollama와 Home Assistant, 로컬 음성, AI 자동화, 카메라.',
        'decision-comparison': '비교, Home Assistant용 미니 PC, 구독 없는 스마트홈.',
        'energy-solar-integration': '태양광, 배터리, 히트펌프를 Matter와 Home Assistant로 연결하기.',
        'protocols-regulation-2027': 'Matter 1.6, Thread 1.4, Wi-Fi 7, EU 데이터법, IKEA의 Matter 생태계.',
        'advanced-local-ai': '소형 언어 모델, 레이더 재실 감지, 환각 줄이기, 센서 퓨전.',
        'affiliate-buyers-guides': '카메라, 도어락, 온도조절기, Zigbee/Thread 동글, 허브, 전력 모니터링.',
      },
      tileTitles: {
        'energy-solar-integration': '에너지와 태양광',
        'protocols-regulation-2027': '프로토콜과 규제 2026',
        'advanced-local-ai': '고급 로컬 AI',
        'affiliate-buyers-guides': '구매 가이드',
      },
    },
    why: {
      title: '왜 로컬 퍼스트 스마트홈인가',
      takeaway: '**요약:** 로컬 퍼스트 스마트홈은 음성, 카메라 영상, 자동화를 **내 하드웨어에** 두고, **구독이 필요 없으며**, 인터넷이 끊겨도 **계속 동작**합니다.',
    },
    latest: { title: '최근 업데이트', intro: '가장 최근에 변경된 세 페이지.', more: '모든 주제 보기', updated: '업데이트', published: '게시' },
    deeper: {
      title: '더 깊이',
      intro: '다른 주제 영역, 각각 고유한 색으로.',
      open: '열기',
      lines: {
        'local-llms': '집에서 AI를 돌리기 위한 모델, 저장 장치, 하드웨어.',
        'power-local-llm': '알맞은 로컬 AI 앱 찾기.',
        'pq-apps#compare-tools': '앱과 모델을 나란히 비교하기.',
        'balcony-solar': '플러그인 방식의 태양광 장치, 규정, 가이드.',
        'prompt-bites': '60초 안에 읽는 짧은 답변.',
        'prompt-engineering': '어떤 AI 모델에서든 더 나은 결과 얻기.',
      },
      extra: DEEPER_EXTRA,
    },
    overview: { title: '프레젠테이션으로 보는 개요', iframeTitle: '스마트홈 개요' },
    guideCountToken: '25개',
  },
}

// One accent color per hub, matching each hub's own pages.
const HUB_TONES_BY_SLUG: Record<string, HubTone> = {
  'smart-home': 'cyan',
  'balcony-solar': 'orange',
  'local-llms': 'rose',
  'power-local-llm': 'violet',
  'prompt-bites': 'orchid',
  'prompt-engineering': 'blue',
  'pq-apps#compare-tools': 'azure',
}

interface CategoryCopy {
  badge: string
  description: string
}

export interface SmartHomeHubTemplateSource {
  lang: Lang
  copy: { title: string; intro: string; intro2: string; benefits: { label: string; detail: string }[] }
  categoryCopy?: Record<string, CategoryCopy>
  faq: { q: string; a: string; bullets?: string[] }[]
  faqHeading: string
  relatedLinks: { label: string; path: string }[]
  reviewedDate?: string
  reviewedLabel: string
  homeLabel: string
  presentationDescription: string
  presentationUrl: string
  fallbackTitle: (slug: string) => string
  footer?: ReactNode
}

const ALL_SLUGS = SMART_HOME_CATEGORIES.flatMap((category) => category.articleSlugs)

/**
 * The hub intro names how many guides there are. The typed number had drifted (25 typed, more listed),
 * so for template languages it is computed from the category registry. Also used for the CollectionPage
 * description so the schema and the visible text agree.
 */
export function withComputedGuideCount(lang: Lang, intro: string): string {
  const copy = HUB_TEMPLATE_COPY[lang]
  if (!copy) return intro
  return intro.replace(copy.guideCountToken, copy.guideCountToken.replace(/\d+/, String(ALL_SLUGS.length)))
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

function hubSlug(path: string): string {
  return path.split('/').filter(Boolean).pop() ?? path
}

export function SmartHomeHubTemplate(source: SmartHomeHubTemplateSource) {
  const { lang } = source
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Smart Home hub template has no strings for "${lang}"`)
  }

  const articleOf = (slug: string) => {
    const key = SMART_HOME_SLUG_TO_KEY[slug]
    const data = key ? smartHomeContent[key] : undefined
    return { en: data?.en, local: data?.[lang] ?? data?.en }
  }

  const toItem = (slug: string): HubItem => {
    const { en, local } = articleOf(slug)
    const isNew = isNewArticle(en?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(en?.publishDate, en?.dateModified)
    return {
      href: smartHomeArticlePath(lang, slug),
      title: local?.title ?? en?.title ?? source.fallbackTitle(slug),
      summary: local?.intro,
      kind: 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // One tile per category. Titles: CATEGORY_COPY where it exists, else this adapter's own localized title.
  const tiles: HubTile[] = SMART_HOME_CATEGORIES.map((category) => {
    const cc = source.categoryCopy?.[category.id]
    const title = cc?.badge ?? (lang === 'en' ? undefined : copy.explore.tileTitles[category.id]) ?? category.titleEn
    const intro = cc?.description ?? category.descriptionEn
    return {
      id: category.id,
      title,
      summary: copy.explore.tileSummary[category.id] ?? intro,
      intro,
      unit: copy.explore.guidesUnit,
      items: category.articleSlugs.map(toItem),
    }
  })

  const intro = withComputedGuideCount(lang, source.copy.intro)

  const startTones: HubTone[] = ['violet', 'azure', 'rose', 'indigo']
  const startIcons: HubStartCard['icon'][] = ['home', 'shield', 'trend', 'package']
  const startKeys = Object.keys(START_SLUGS) as (keyof typeof START_SLUGS)[]
  const startCards: HubStartCard[] = startKeys.map((key, i) => ({
    href: smartHomeArticlePath(lang, START_SLUGS[key]),
    goal: copy.start.goals[key],
    title: toItem(START_SLUGS[key]).title,
    tone: startTones[i],
    icon: startIcons[i],
    badge: i === 0 ? copy.start.badge : undefined,
  }))

  // Latest: the three articles with the newest change date (EN dates, same basis as the NEW / UPDATED badges).
  const dated = ALL_SLUGS.map((slug) => {
    const { en } = articleOf(slug)
    const date = en?.dateModified ?? en?.publishDate
    return { slug, date, modified: Boolean(en?.dateModified) }
  })
    .filter((entry): entry is { slug: string; date: string; modified: boolean } => Boolean(entry.date))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
  const latestTones: HubTone[] = ['orchid', 'azure', 'violet']
  const latestCards: HubLatestCard[] = dated.map((entry, i) => {
    const item = toItem(entry.slug)
    return {
      href: item.href,
      title: item.title,
      summary: item.summary,
      tone: latestTones[i % latestTones.length],
      badge: item.badge,
      dateLabel: `${entry.modified ? copy.latest.updated : copy.latest.published}: ${formatDisplayDate(entry.date, lang)}`,
    }
  })

  const hubLinks: HubLink[] = [
    ...source.relatedLinks.map((link) => ({ href: link.path, name: link.label })),
    ...copy.deeper.extra.map((extra) => ({ href: lang === 'en' ? `/${extra.slug}` : `/${lang}/${extra.slug}`, name: extra.name })),
  ].map((link) => {
    const slug = hubSlug(link.href)
    return { ...link, line: copy.deeper.lines[slug] ?? '', tone: HUB_TONES_BY_SLUG[slug] ?? 'violet' }
  })

  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)
  const reviewed = source.reviewedDate
    ? { dateTime: source.reviewedDate, text: `${source.reviewedLabel} ${formatDisplayDate(source.reviewedDate, lang)}` }
    : undefined

  return (
    <HubTemplate
      accent="cyan"
      breadcrumb={{ homeLabel: source.homeLabel, homeHref: lang === 'en' ? '/' : `/${lang}`, current: copy.pill }}
      pill={copy.pill}
      title={source.copy.title}
      titleHighlight={copy.titleHighlight}
      intro={intro}
      primaryCta={{ label: copy.primaryCta, href: smartHomeArticlePath(lang, PRIMARY_CTA_SLUG) }}
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
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: ALL_SLUGS.length }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{
        title: copy.why.title,
        intro: source.copy.intro2,
        cards: source.copy.benefits.map((benefit, i) => ({ ...benefit, tone: cycleTone(i) })),
        takeaway: copy.why.takeaway,
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
      overview={{
        title: copy.overview.title,
        description: source.presentationDescription,
        imageSrc: `/images/smart-home-hub-overview-hero-${lang}.webp`,
        imageAlt: source.copy.title,
        iframeSrc: `${source.presentationUrl}?lang=${lang}`,
        iframeTitle: copy.overview.iframeTitle,
      }}
      faq={{ heading: source.faqHeading, items: source.faq }}
      footer={source.footer}
    />
  )
}
