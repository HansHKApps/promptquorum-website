// Prompt Bites hub on the shared hub template (src/components/hub-template).
//
// Same recipe as src/lib/smart-home/hub-template.tsx: this file only adapts Prompt Bites data to the
// generic template. Languages listed in PROMPT_BITES_HUB_TEMPLATE_LANGS use it; the original hub
// (PromptBitesHubClient) stays as the fallback for any language without strings here.
//
// Nothing here fetches data. Every article link comes from PROMPT_BITES_CATEGORIES (plus one computed
// "more answers" tile for published bites no category lists), filtered by the publish allowlist, so
// the old hub's listing is kept and every published bite is reachable. All counts are computed.

import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubFaqItem, HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { AppLink as Link } from '@/components/AppLink'
import { LangLinksBar } from '@/components/LangLinksBar'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Lang } from '@/lib/i18n/constants'
import { promptBitesContent } from './articles-barrel'
import { PROMPT_BITES_CATEGORIES } from './categories'
import { DEEPDIVE_LINKS } from './hub-deepdive'
import type { PromptBitesHubData } from './hub-data'
import { promptBitesArticlePath } from './metadata-helpers'
import { PROMPT_BITES_PUBLISHED_SLUGS } from './published'
import { PROMPT_BITES_SLUG_TO_KEY } from './slugs'

/** Languages that render the hub with the new template. Add a language only after its strings exist below. */
export const PROMPT_BITES_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesPromptBitesHubTemplate(lang: Lang): boolean {
  return PROMPT_BITES_HUB_TEMPLATE_LANGS.has(lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

// Slugs behind the four "Start here" cards, the primary button and the visible FAQ.
const START_SLUGS = {
  quant: 'what-is-q4-k-m-quantization',
  tool: 'ollama-vs-lm-studio',
  models: 'best-ollama-models-right-now',
  hw: 'best-mini-pc-for-local-llm',
} as const
const PRIMARY_CTA_SLUG = 'how-much-vram-for-local-llm'
const FAQ_SLUGS = [PRIMARY_CTA_SLUG, ...Object.values(START_SLUGS), 'ollama-128k-context-models']
const MORE_TILE_ID = 'more-answers'
// "Why" cards reuse four category titles and descriptions (the old hero named VRAM, Ollama, comparisons, hardware).
const WHY_CATEGORY_IDS = ['quantization-vram', 'ollama', 'tool-comparisons', 'hardware-specific']

type DeeperSlug = 'smart-home' | 'balcony-solar' | 'local-llms' | 'power-local-llm' | 'prompt-engineering'
const DEEPER_ORDER: DeeperSlug[] = ['smart-home', 'balcony-solar', 'local-llms', 'power-local-llm', 'prompt-engineering']
const DEEPER_TONES: Record<DeeperSlug, HubTone> = {
  'smart-home': 'cyan',
  'balcony-solar': 'orange',
  'local-llms': 'rose',
  'power-local-llm': 'violet',
  'prompt-engineering': 'blue',
}

interface HubTemplateCopy {
  pill: string
  title: string
  titleHighlight: string
  /** `{count}` = number of published bites. */
  intro: string
  primaryCta: string
  secondaryCta: string
  summary: { label: string; text: string }[]
  flow: { title: string; caption: string; ariaLabel: string; columns: { label: string; tone: HubTone; chips: string[] }[] }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string; goals: Record<keyof typeof START_SLUGS, string> }
  explore: {
    title: string
    /** `{tiles}` and `{pages}` are computed. */
    intro: string
    unit: string
    /** Tile summary line per category id (plus the computed "more answers" tile). */
    tileSummary: Record<string, string>
    moreTitle: string
    moreIntro: string
  }
  why: { title: string; intro: string; takeaway: string }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; names: Record<DeeperSlug, string>; lines: Record<DeeperSlug, string> }
  deepDives: string
  reviewed: string
  faqHeading: string
}

const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  en: {
    pill: 'Prompt Bites',
    title: 'Quick Answers to Local LLM Questions',
    titleHighlight: 'Local LLM',
    intro: '{count} short-answer guides. VRAM requirements, Ollama picks, hardware comparisons and setup tips, answered in **60 seconds or less**.',
    primaryCta: 'Start with the VRAM guide',
    secondaryCta: 'See all topics',
    summary: [
      { label: 'In one sentence', text: 'A Prompt Bite is a **short-answer guide** to one local LLM question, such as how much VRAM you need or which Ollama model to run.' },
      { label: 'In plain terms', text: 'Every page gives the answer first, in **60 seconds or less**. Pick a topic below and open the question you have.' },
    ],
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from your question to a short answer to a deeper guide.',
      ariaLabel: 'Diagram: your question about VRAM, quantization or Ollama leads to a short answer, which links on to deeper guides',
      columns: [
        { label: 'Your question', tone: 'azure', chips: ['VRAM', 'Quantization', 'Ollama'] },
        { label: 'Short answer', tone: 'violet', chips: ['Answer first', 'Key numbers', '60 seconds or less'] },
        { label: 'Go deeper', tone: 'rose', chips: ['Deep-dive guides', 'Local LLMs', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'Jump to', start: 'Start here', explore: 'Topics', why: 'Why', latest: 'Recently updated', deeper: 'Go deeper', faq: 'FAQ' },
    start: {
      title: 'Start here',
      intro: 'Four common questions. Pick the one that fits you.',
      badge: 'Start here',
      goals: { quant: 'Understand quantization', tool: 'Choose Ollama or LM Studio', models: 'Find the best Ollama models', hw: 'Pick a mini PC for local LLMs' },
    },
    explore: {
      title: 'Explore by topic',
      intro: '{tiles} topics, {pages} short answers. One click opens a topic right where you are.',
      unit: 'Answers',
      tileSummary: {
        'quantization-vram': 'How much memory you need, which quantization format to pick, VRAM decision trees.',
        ollama: 'Latest versions, best models, context windows, vision, CPU-only use.',
        'tool-comparisons': 'Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek: two-way comparisons.',
        'model-comparisons': 'Best 14B models, MoE models, mini PCs, head-to-head model matchups.',
        'hardware-specific': 'GPU picks by budget, mini PCs, SSDs, cloud GPUs and eGPUs.',
        'quick-answers': 'Yes/no and one-number answers: RAM limits, laptop picks.',
        'prompt-engineering': 'Quick definitions and best-of lists for prompt engineering.',
        'privacy-compliance': 'GDPR compliance, data sovereignty and privacy-safe local AI.',
        'balcony-solar-regulation': 'State-by-state rules for plug-in solar in the US.',
        [MORE_TILE_ID]: 'More short answers on local AI, trends and regulation.',
      },
      moreTitle: 'More answers',
      moreIntro: 'Short answers that are not sorted into one of the topics above yet.',
    },
    why: {
      title: 'Why short answers',
      intro: 'Every Prompt Bite starts with the answer. Read it in **60 seconds or less**, then follow a deep-dive link if you want the long version.',
      takeaway: '**In short:** Prompt Bites answer one local LLM question first, in **60 seconds or less**, and point to a deeper guide when you need more.',
    },
    latest: { title: 'Recently updated', intro: 'The three pages with the newest change.', more: 'See all topics', updated: 'Updated', published: 'Published' },
    deeper: {
      title: 'Go deeper',
      intro: 'The other topic worlds, each in its own color.',
      open: 'Open',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'Local LLMs', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Local smart home guides with Home Assistant and Matter.',
        'balcony-solar': 'Plug-in solar devices, rules and guides.',
        'local-llms': 'Models, storage and hardware for AI at home.',
        'power-local-llm': 'Find the right local AI app.',
        'prompt-engineering': 'Better results with any AI model.',
      },
    },
    deepDives: 'Deep dives',
    reviewed: 'Content last reviewed:',
    faqHeading: 'Frequently asked questions',
  },
  de: {
    pill: 'Prompt-Häppchen',
    title: 'Schnelle Antworten zu lokalen LLM-Fragen',
    titleHighlight: 'lokalen LLM',
    intro: '{count} Kurzantwort-Leitfäden. VRAM-Anforderungen, Ollama-Empfehlungen, Hardware-Vergleiche und Setup-Tipps, beantwortet in **60 Sekunden oder weniger**.',
    primaryCta: 'Mit dem VRAM-Leitfaden starten',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      { label: 'In einem Satz', text: 'Ein Prompt Bite ist ein **Kurzantwort-Leitfaden** zu genau einer Frage über lokale LLMs, etwa wie viel VRAM Sie brauchen oder welches Ollama-Modell passt.' },
      { label: 'In einfachen Worten', text: 'Jede Seite nennt zuerst die Antwort, in **60 Sekunden oder weniger**. Wählen Sie unten ein Thema und öffnen Sie Ihre Frage.' },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: von Ihrer Frage über die Kurzantwort zum vertiefenden Leitfaden.',
      ariaLabel: 'Schema: Ihre Frage zu VRAM, Quantisierung oder Ollama führt zu einer Kurzantwort, die auf vertiefende Leitfäden verweist',
      columns: [
        { label: 'Ihre Frage', tone: 'azure', chips: ['VRAM', 'Quantisierung', 'Ollama'] },
        { label: 'Kurzantwort', tone: 'violet', chips: ['Antwort zuerst', 'Kennzahlen', '60 Sekunden oder weniger'] },
        { label: 'Vertiefen', tone: 'rose', chips: ['Vertiefende Leitfäden', 'Lokale LLMs', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'Springen zu', start: 'Hier starten', explore: 'Themen', why: 'Warum', latest: 'Zuletzt aktualisiert', deeper: 'Weiter vertiefen', faq: 'Häufige Fragen' },
    start: {
      title: 'Hier starten',
      intro: 'Vier häufige Fragen. Wählen Sie die, die zu Ihnen passt.',
      badge: 'Hier starten',
      goals: { quant: 'Quantisierung verstehen', tool: 'Ollama oder LM Studio wählen', models: 'Die besten Ollama-Modelle finden', hw: 'Einen Mini-PC für lokale LLMs wählen' },
    },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Kurzantworten. Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      unit: 'Antworten',
      tileSummary: {
        'quantization-vram': 'Wie viel Speicher Sie brauchen, welches Quantisierungsformat passt, VRAM-Entscheidungsbäume.',
        ollama: 'Aktuelle Versionen, beste Modelle, Kontextfenster, Vision, Betrieb nur mit CPU.',
        'tool-comparisons': 'Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek: Vergleiche zu zweit.',
        'model-comparisons': 'Beste 14B-Modelle, MoE-Modelle, Mini-PCs und direkte Modellvergleiche.',
        'hardware-specific': 'GPU-Empfehlungen nach Budget, Mini-PCs, SSDs, Cloud-GPUs und eGPUs.',
        'quick-answers': 'Ja/Nein- und Ein-Zahl-Antworten: RAM-Grenzen, Laptop-Empfehlungen.',
        'prompt-engineering': 'Kurze Definitionen und Bestenlisten rund um Prompt Engineering.',
        'privacy-compliance': 'DSGVO-Konformität, Datensouveränität und datenschutzfreundliche lokale KI.',
        'balcony-solar-regulation': 'Regeln für Steckersolar in den USA, Bundesstaat für Bundesstaat.',
        [MORE_TILE_ID]: 'Weitere Kurzantworten zu lokaler KI, Trends und Regulierung.',
      },
      moreTitle: 'Weitere Antworten',
      moreIntro: 'Kurzantworten, die noch keinem der Themen oben zugeordnet sind.',
    },
    why: {
      title: 'Warum Kurzantworten',
      intro: 'Jedes Prompt Bite beginnt mit der Antwort. Lesen Sie sie in **60 Sekunden oder weniger** und folgen Sie bei Bedarf einem Vertiefungslink.',
      takeaway: '**Kurz gesagt:** Prompt Bites beantworten zuerst eine Frage zu lokalen LLMs, in **60 Sekunden oder weniger**, und verweisen auf einen vertiefenden Leitfaden, wenn Sie mehr brauchen.',
    },
    latest: { title: 'Zuletzt aktualisiert', intro: 'Die drei Seiten mit der jüngsten Änderung.', more: 'Alle Themen ansehen', updated: 'Aktualisiert', published: 'Veröffentlicht' },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'Lokale LLMs', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Lokale Smart-Home-Anleitungen mit Home Assistant und Matter.',
        'balcony-solar': 'Steckerfertige Solargeräte, Regeln und Anleitungen.',
        'local-llms': 'Modelle, Speicher und Hardware für KI zu Hause.',
        'power-local-llm': 'Die passende lokale KI-App finden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
    },
    deepDives: 'Vertiefende Leitfäden',
    reviewed: 'Inhalt zuletzt geprüft:',
    faqHeading: 'Häufige Fragen',
  },
  fr: {
    pill: 'Prompts en bref',
    title: 'Réponses rapides aux questions sur les LLM locaux',
    titleHighlight: 'LLM locaux',
    intro: '{count} guides à réponse rapide. Besoins en VRAM, choix Ollama, comparaisons matérielles et conseils de configuration, avec une réponse en **60 secondes ou moins**.',
    primaryCta: 'Commencer par le guide VRAM',
    secondaryCta: 'Voir tous les sujets',
    summary: [
      { label: 'En une phrase', text: 'Un Prompt Bite est un **guide à réponse rapide** sur une seule question concernant les LLM locaux, par exemple la quantité de VRAM nécessaire ou le modèle Ollama à lancer.' },
      { label: 'En termes simples', text: 'Chaque page donne d\'abord la réponse, en **60 secondes ou moins**. Choisissez un sujet ci-dessous et ouvrez votre question.' },
    ],
    flow: {
      title: 'Comment tout s\'articule',
      caption: 'Schéma : de votre question à une réponse courte, puis à un guide approfondi.',
      ariaLabel: 'Schéma : votre question sur la VRAM, la quantisation ou Ollama mène à une réponse courte, qui renvoie vers des guides approfondis',
      columns: [
        { label: 'Votre question', tone: 'azure', chips: ['VRAM', 'Quantisation', 'Ollama'] },
        { label: 'Réponse courte', tone: 'violet', chips: ['Réponse d\'abord', 'Chiffres clés', '60 secondes ou moins'] },
        { label: 'Approfondir', tone: 'rose', chips: ['Guides approfondis', 'LLM locaux', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'Aller à', start: 'Commencer ici', explore: 'Sujets', why: 'Pourquoi', latest: 'Mis à jour récemment', deeper: 'Approfondir', faq: 'FAQ' },
    start: {
      title: 'Commencer ici',
      intro: 'Quatre questions courantes. Choisissez celle qui vous correspond.',
      badge: 'Commencer ici',
      goals: { quant: 'Comprendre la quantisation', tool: 'Choisir Ollama ou LM Studio', models: 'Trouver les meilleurs modèles Ollama', hw: 'Choisir un mini PC pour LLM locaux' },
    },
    explore: {
      title: 'Explorer par sujet',
      intro: '{tiles} sujets, {pages} réponses courtes. Un clic ouvre un sujet directement sur place.',
      unit: 'Réponses',
      tileSummary: {
        'quantization-vram': 'La mémoire nécessaire, le format de quantisation à choisir, arbres de décision VRAM.',
        ollama: 'Dernières versions, meilleurs modèles, fenêtres de contexte, vision, usage CPU seul.',
        'tool-comparisons': 'Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek : comparaisons à deux.',
        'model-comparisons': 'Meilleurs modèles 14B, modèles MoE, mini PC, duels de modèles.',
        'hardware-specific': 'GPU par budget, mini PC, SSD, GPU cloud et eGPU.',
        'quick-answers': 'Réponses oui/non et en un chiffre : limites de RAM, choix de portables.',
        'prompt-engineering': 'Définitions rapides et sélections pour le prompt engineering.',
        'privacy-compliance': 'Conformité RGPD, souveraineté des données et IA locale respectueuse de la vie privée.',
        'balcony-solar-regulation': 'Règles du solaire branchable aux États-Unis, État par État.',
        [MORE_TILE_ID]: 'Autres réponses courtes sur l\'IA locale, les tendances et la réglementation.',
      },
      moreTitle: 'Autres réponses',
      moreIntro: 'Réponses courtes pas encore classées dans l\'un des sujets ci-dessus.',
    },
    why: {
      title: 'Pourquoi des réponses courtes',
      intro: 'Chaque Prompt Bite commence par la réponse. Lisez-la en **60 secondes ou moins**, puis suivez un lien d\'approfondissement pour la version longue.',
      takeaway: '**En bref :** les Prompt Bites répondent d\'abord à une question sur les LLM locaux, en **60 secondes ou moins**, et renvoient vers un guide approfondi quand il vous en faut plus.',
    },
    latest: { title: 'Mis à jour récemment', intro: 'Les trois pages modifiées le plus récemment.', more: 'Voir tous les sujets', updated: 'Mis à jour', published: 'Publié' },
    deeper: {
      title: 'Approfondir',
      intro: 'Les autres univers thématiques, chacun dans sa propre couleur.',
      open: 'Ouvrir',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locaux', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Guides de maison connectée locale avec Home Assistant et Matter.',
        'balcony-solar': 'Appareils solaires prêts à brancher, règles et guides.',
        'local-llms': 'Modèles, stockage et matériel pour l\'IA à la maison.',
        'power-local-llm': 'Trouver la bonne application d\'IA locale.',
        'prompt-engineering': 'De meilleurs résultats avec n\'importe quel modèle d\'IA.',
      },
    },
    deepDives: 'Guides approfondis',
    reviewed: 'Contenu vérifié pour la dernière fois:',
    faqHeading: 'Questions fréquentes',
  },
  ja: {
    pill: 'プロンプト早わかり',
    title: 'ローカルLLMの質問への迅速な回答',
    titleHighlight: 'ローカルLLM',
    intro: '{count}の短答ガイド。VRAM要件、Ollamaのおすすめ、ハードウェア比較、セットアップのヒントに、**60秒以内**で答えます。',
    primaryCta: 'VRAMガイドから始める',
    secondaryCta: 'すべてのトピックを見る',
    summary: [
      { label: 'ひとことで', text: 'Prompt Bitesは、必要なVRAM量や動かすOllamaモデルなど、ローカルLLMの質問を1つ取り上げた**短答ガイド**です。' },
      { label: 'かんたんに言うと', text: 'どのページも、まず答えを**60秒以内**で示します。下のトピックから知りたい質問を開いてください。' },
    ],
    flow: {
      title: '全体のつながり',
      caption: '図：質問から短い答え、さらに詳しいガイドへ。',
      ariaLabel: '図：VRAM、量子化、Ollamaに関する質問が短い答えにつながり、さらに詳しいガイドへリンクする',
      columns: [
        { label: 'あなたの質問', tone: 'azure', chips: ['VRAM', '量子化', 'Ollama'] },
        { label: '短い答え', tone: 'violet', chips: ['答えが先', '主要な数値', '60秒以内'] },
        { label: 'さらに深く', tone: 'rose', chips: ['詳細ガイド', 'ローカルLLM', 'Power Local LLM'] },
      ],
    },
    jump: { label: '移動', start: 'ここから始める', explore: 'トピック', why: '理由', latest: '最近の更新', deeper: 'さらに深く', faq: 'よくある質問' },
    start: {
      title: 'ここから始める',
      intro: 'よくある4つの質問です。当てはまるものを選んでください。',
      badge: 'ここから始める',
      goals: { quant: '量子化を理解する', tool: 'OllamaかLM Studioを選ぶ', models: 'おすすめのOllamaモデルを探す', hw: 'ローカルLLM向けのミニPCを選ぶ' },
    },
    explore: {
      title: 'トピックから探す',
      intro: '{tiles}トピック、短答{pages}本。クリックすると、その場でトピックが開きます。',
      unit: '回答',
      tileSummary: {
        'quantization-vram': '必要なメモリ量、選ぶべき量子化形式、VRAMの意思決定ツリー。',
        ollama: '最新バージョン、おすすめモデル、コンテキストウィンドウ、ビジョン、CPUのみでの利用。',
        'tool-comparisons': 'Ollama vs LM Studio、Jan vs LM Studio、Qwen vs DeepSeekなどの2者比較。',
        'model-comparisons': '14Bモデルのおすすめ、MoEモデル、ミニPC、モデル同士の直接比較。',
        'hardware-specific': '予算別のGPU、ミニPC、SSD、クラウドGPU、eGPU。',
        'quick-answers': 'はい・いいえや数字ひとつで答える質問：RAMの上限、ノートPCの選び方。',
        'prompt-engineering': 'プロンプトエンジニアリングの用語の要点とおすすめまとめ。',
        'privacy-compliance': 'GDPR対応、データ主権、プライバシーに配慮したローカルAI。',
        'balcony-solar-regulation': '米国のプラグイン式ソーラーの州別ルール。',
        [MORE_TILE_ID]: 'ローカルAI、トレンド、規制に関するその他の短答。',
      },
      moreTitle: 'その他の回答',
      moreIntro: '上のトピックにまだ分類されていない短答です。',
    },
    why: {
      title: 'なぜ短答なのか',
      intro: 'どのPrompt Bitesも答えから始まります。**60秒以内**で読み、詳しく知りたければ詳細ガイドへのリンクをたどってください。',
      takeaway: '**要点：**Prompt Bitesは、ローカルLLMの質問にまず**60秒以内**で答え、さらに知りたいときは詳しいガイドへ案内します。',
    },
    latest: { title: '最近の更新', intro: '最も新しく変更された3ページ。', more: 'すべてのトピックを見る', updated: '更新', published: '公開' },
    deeper: {
      title: 'さらに深く',
      intro: 'ほかのテーマ領域を、それぞれ専用の色で。',
      open: '開く',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'ローカルLLM', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home AssistantとMatterで作るローカルスマートホームのガイド。',
        'balcony-solar': 'プラグイン式の太陽光発電機器、ルール、ガイド。',
        'local-llms': '自宅でAIを動かすためのモデル、ストレージ、ハードウェア。',
        'power-local-llm': '最適なローカルAIアプリを見つける。',
        'prompt-engineering': 'どのAIモデルでも結果を良くする方法。',
      },
    },
    deepDives: '詳細ガイド',
    reviewed: 'コンテンツの最終確認日:',
    faqHeading: 'よくある質問',
  },
  zh: {
    pill: '提示词速答',
    title: '本地LLM问题的快速解答',
    titleHighlight: '本地LLM',
    intro: '{count}篇简答指南。显存要求、Ollama推荐、硬件对比和设置技巧，**60秒内**解答。',
    primaryCta: '从显存指南开始',
    secondaryCta: '查看全部主题',
    summary: [
      { label: '一句话说明', text: 'Prompt Bites 是针对一个本地 LLM 问题的**简答指南**，例如需要多少显存，或该运行哪个 Ollama 模型。' },
      { label: '通俗地说', text: '每个页面都先给出答案，用时**60秒内**。在下方选择主题，打开您关心的问题。' },
    ],
    flow: {
      title: '整体如何连接',
      caption: '示意图：从您的问题到简短答案，再到更深入的指南。',
      ariaLabel: '示意图：您关于显存、量化或 Ollama 的问题得到简短答案，并链接到更深入的指南',
      columns: [
        { label: '您的问题', tone: 'azure', chips: ['显存', '量化', 'Ollama'] },
        { label: '简短答案', tone: 'violet', chips: ['先给答案', '关键数字', '60秒内'] },
        { label: '深入了解', tone: 'rose', chips: ['深度指南', '本地大模型', 'Power Local LLM'] },
      ],
    },
    jump: { label: '跳转到', start: '从这里开始', explore: '主题', why: '为什么', latest: '最近更新', deeper: '深入了解', faq: '常见问题' },
    start: {
      title: '从这里开始',
      intro: '四个常见问题，选择最适合您的一个。',
      badge: '从这里开始',
      goals: { quant: '了解量化', tool: '选择 Ollama 还是 LM Studio', models: '找到最佳 Ollama 模型', hw: '为本地 LLM 选一台迷你主机' },
    },
    explore: {
      title: '按主题浏览',
      intro: '{tiles}个主题，{pages}条简答。点击即可就地展开主题。',
      unit: '条解答',
      tileSummary: {
        'quantization-vram': '所需内存量、选择哪种量化格式、显存决策树。',
        ollama: '最新版本、最佳模型、上下文窗口、视觉、仅用 CPU 运行。',
        'tool-comparisons': 'Ollama 对比 LM Studio、Jan 对比 LM Studio、Qwen 对比 DeepSeek：两两对比。',
        'model-comparisons': '最佳 14B 模型、MoE 模型、迷你主机、模型正面对比。',
        'hardware-specific': '按预算选 GPU、迷你主机、SSD、云 GPU 和外置显卡。',
        'quick-answers': '是否类和单个数字的答案：内存上限、笔记本推荐。',
        'prompt-engineering': '提示词工程的快速定义与精选清单。',
        'privacy-compliance': 'GDPR 合规、数据主权与注重隐私的本地 AI。',
        'balcony-solar-regulation': '美国各州对即插即用太阳能的规定。',
        [MORE_TILE_ID]: '关于本地 AI、趋势与监管的更多简答。',
      },
      moreTitle: '更多解答',
      moreIntro: '尚未归入上述主题的简答。',
    },
    why: {
      title: '为什么要简答',
      intro: '每篇 Prompt Bite 都先给出答案。请在**60秒内**读完，想看完整版本时再点开深度链接。',
      takeaway: '**简而言之：**Prompt Bites 先在**60秒内**回答一个本地 LLM 问题，需要更多时再指向更深入的指南。',
    },
    latest: { title: '最近更新', intro: '最近有改动的三个页面。', more: '查看全部主题', updated: '更新于', published: '发布于' },
    deeper: {
      title: '深入了解',
      intro: '其他主题板块，各有专属颜色。',
      open: '打开',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': '本地大模型', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': '基于 Home Assistant 和 Matter 的本地智能家居指南。',
        'balcony-solar': '即插即用的太阳能设备、规定与指南。',
        'local-llms': '在家运行 AI 所需的模型、存储和硬件。',
        'power-local-llm': '找到合适的本地 AI 应用。',
        'prompt-engineering': '让任何 AI 模型都给出更好的结果。',
      },
    },
    deepDives: '深度指南',
    reviewed: '内容最后审核于:',
    faqHeading: '常见问题',
  },
  es: {
    pill: 'Prompts en breve',
    title: 'Respuestas rápidas a preguntas sobre LLM locales',
    titleHighlight: 'LLM locales',
    intro: '{count} guías de respuesta rápida. Requisitos de VRAM, recomendaciones de Ollama, comparativas de hardware y consejos de configuración, respondidos en **60 segundos o menos**.',
    primaryCta: 'Empezar con la guía de VRAM',
    secondaryCta: 'Ver todos los temas',
    summary: [
      { label: 'En una frase', text: 'Un Prompt Bite es una **guía de respuesta rápida** sobre una sola pregunta de LLM locales, como cuánta VRAM necesitas o qué modelo de Ollama ejecutar.' },
      { label: 'En palabras sencillas', text: 'Cada página da primero la respuesta, en **60 segundos o menos**. Elige un tema abajo y abre la pregunta que tengas.' },
    ],
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: de tu pregunta a una respuesta corta y a una guía más profunda.',
      ariaLabel: 'Esquema: tu pregunta sobre VRAM, cuantización u Ollama lleva a una respuesta corta, que enlaza con guías más profundas',
      columns: [
        { label: 'Tu pregunta', tone: 'azure', chips: ['VRAM', 'Cuantización', 'Ollama'] },
        { label: 'Respuesta corta', tone: 'violet', chips: ['Primero la respuesta', 'Cifras clave', '60 segundos o menos'] },
        { label: 'Profundizar', tone: 'rose', chips: ['Guías en profundidad', 'LLMs locales', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'Ir a', start: 'Empezar aquí', explore: 'Temas', why: 'Por qué', latest: 'Actualizado recientemente', deeper: 'Profundizar', faq: 'Preguntas frecuentes' },
    start: {
      title: 'Empezar aquí',
      intro: 'Cuatro preguntas habituales. Elige la que más te convenga.',
      badge: 'Empezar aquí',
      goals: { quant: 'Entender la cuantización', tool: 'Elegir entre Ollama y LM Studio', models: 'Encontrar los mejores modelos de Ollama', hw: 'Elegir un mini PC para LLM locales' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} respuestas cortas. Un clic abre un tema justo ahí.',
      unit: 'Respuestas',
      tileSummary: {
        'quantization-vram': 'Cuánta memoria necesitas, qué formato de cuantización elegir, árboles de decisión de VRAM.',
        ollama: 'Últimas versiones, mejores modelos, ventanas de contexto, visión, uso solo con CPU.',
        'tool-comparisons': 'Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek: comparativas de dos en dos.',
        'model-comparisons': 'Mejores modelos de 14B, modelos MoE, mini PC y duelos entre modelos.',
        'hardware-specific': 'GPU por presupuesto, mini PC, SSD, GPU en la nube y eGPU.',
        'quick-answers': 'Respuestas de sí/no y de una cifra: límites de RAM, portátiles recomendados.',
        'prompt-engineering': 'Definiciones rápidas y listas de lo mejor sobre ingeniería de prompts.',
        'privacy-compliance': 'Cumplimiento del RGPD, soberanía de datos e IA local respetuosa con la privacidad.',
        'balcony-solar-regulation': 'Normas del solar enchufable en EE. UU., estado por estado.',
        [MORE_TILE_ID]: 'Más respuestas cortas sobre IA local, tendencias y regulación.',
      },
      moreTitle: 'Más respuestas',
      moreIntro: 'Respuestas cortas que aún no están clasificadas en ninguno de los temas anteriores.',
    },
    why: {
      title: 'Por qué respuestas cortas',
      intro: 'Cada Prompt Bite empieza por la respuesta. Léela en **60 segundos o menos** y sigue un enlace de profundización si quieres la versión larga.',
      takeaway: '**En resumen:** los Prompt Bites responden primero una pregunta sobre LLM locales, en **60 segundos o menos**, y remiten a una guía más profunda cuando necesitas más.',
    },
    latest: { title: 'Actualizado recientemente', intro: 'Las tres páginas con el cambio más reciente.', more: 'Ver todos los temas', updated: 'Actualizado', published: 'Publicado' },
    deeper: {
      title: 'Profundizar',
      intro: 'Los demás mundos temáticos, cada uno con su propio color.',
      open: 'Abrir',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locales', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Guías de hogar inteligente local con Home Assistant y Matter.',
        'balcony-solar': 'Dispositivos solares listos para enchufar, normas y guías.',
        'local-llms': 'Modelos, almacenamiento y hardware para IA en casa.',
        'power-local-llm': 'Encontrar la aplicación de IA local adecuada.',
        'prompt-engineering': 'Mejores resultados con cualquier modelo de IA.',
      },
    },
    deepDives: 'Guías en profundidad',
    reviewed: 'Contenido revisado por última vez:',
    faqHeading: 'Preguntas frecuentes',
  },
  pt: {
    pill: 'Prompts em resumo',
    title: 'Respostas rápidas para perguntas sobre LLMs locais',
    titleHighlight: 'LLMs locais',
    intro: '{count} guias de resposta rápida. Requisitos de VRAM, recomendações de Ollama, comparações de hardware e dicas de configuração, respondidos em **60 segundos ou menos**.',
    primaryCta: 'Começar pelo guia de VRAM',
    secondaryCta: 'Ver todos os temas',
    summary: [
      { label: 'Em uma frase', text: 'Um Prompt Bite é um **guia de resposta rápida** sobre uma única pergunta de LLM local, como quanta VRAM você precisa ou qual modelo do Ollama executar.' },
      { label: 'Em termos simples', text: 'Cada página dá a resposta primeiro, em **60 segundos ou menos**. Escolha um tema abaixo e abra a pergunta que você tem.' },
    ],
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Esquema: da sua pergunta a uma resposta curta e a um guia mais aprofundado.',
      ariaLabel: 'Esquema: sua pergunta sobre VRAM, quantização ou Ollama leva a uma resposta curta, que aponta para guias mais aprofundados',
      columns: [
        { label: 'Sua pergunta', tone: 'azure', chips: ['VRAM', 'Quantização', 'Ollama'] },
        { label: 'Resposta curta', tone: 'violet', chips: ['Resposta primeiro', 'Números-chave', '60 segundos ou menos'] },
        { label: 'Aprofundar', tone: 'rose', chips: ['Guias aprofundados', 'LLMs locais', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'Ir para', start: 'Comece aqui', explore: 'Temas', why: 'Por quê', latest: 'Atualizado recentemente', deeper: 'Aprofundar', faq: 'Perguntas frequentes' },
    start: {
      title: 'Comece aqui',
      intro: 'Quatro perguntas comuns. Escolha a que combina com você.',
      badge: 'Comece aqui',
      goals: { quant: 'Entender a quantização', tool: 'Escolher entre Ollama e LM Studio', models: 'Encontrar os melhores modelos do Ollama', hw: 'Escolher um mini PC para LLMs locais' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} respostas curtas. Um clique abre um tema ali mesmo.',
      unit: 'Respostas',
      tileSummary: {
        'quantization-vram': 'Quanta memória você precisa, qual formato de quantização escolher, árvores de decisão de VRAM.',
        ollama: 'Últimas versões, melhores modelos, janelas de contexto, visão, uso apenas com CPU.',
        'tool-comparisons': 'Ollama vs LM Studio, Jan vs LM Studio, Qwen vs DeepSeek: comparações de dois em dois.',
        'model-comparisons': 'Melhores modelos de 14B, modelos MoE, mini PCs e confrontos diretos entre modelos.',
        'hardware-specific': 'GPUs por orçamento, mini PCs, SSDs, GPUs na nuvem e eGPUs.',
        'quick-answers': 'Respostas de sim/não e de um número: limites de RAM, notebooks recomendados.',
        'prompt-engineering': 'Definições rápidas e listas dos melhores sobre engenharia de prompts.',
        'privacy-compliance': 'Conformidade com o GDPR, soberania de dados e IA local que protege a privacidade.',
        'balcony-solar-regulation': 'Regras da energia solar plug-and-play nos EUA, estado a estado.',
        [MORE_TILE_ID]: 'Mais respostas curtas sobre IA local, tendências e regulamentação.',
      },
      moreTitle: 'Mais respostas',
      moreIntro: 'Respostas curtas que ainda não estão em nenhum dos temas acima.',
    },
    why: {
      title: 'Por que respostas curtas',
      intro: 'Cada Prompt Bite começa pela resposta. Leia em **60 segundos ou menos** e siga um link de aprofundamento se quiser a versão longa.',
      takeaway: '**Em resumo:** os Prompt Bites respondem primeiro a uma pergunta sobre LLMs locais, em **60 segundos ou menos**, e apontam para um guia mais aprofundado quando você precisa de mais.',
    },
    latest: { title: 'Atualizado recentemente', intro: 'As três páginas com a alteração mais recente.', more: 'Ver todos os temas', updated: 'Atualizado', published: 'Publicado' },
    deeper: {
      title: 'Aprofundar',
      intro: 'Os outros universos temáticos, cada um com sua própria cor.',
      open: 'Abrir',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'LLMs locais', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Guias de casa inteligente local com Home Assistant e Matter.',
        'balcony-solar': 'Dispositivos solares prontos para plugar, regras e guias.',
        'local-llms': 'Modelos, armazenamento e hardware para IA em casa.',
        'power-local-llm': 'Encontrar o aplicativo de IA local certo.',
        'prompt-engineering': 'Melhores resultados com qualquer modelo de IA.',
      },
    },
    deepDives: 'Guias aprofundados',
    reviewed: 'Conteúdo revisado pela última vez em:',
    faqHeading: 'Perguntas frequentes',
  },
  ar: {
    pill: 'Prompt Bites',
    title: 'إجابات سريعة على أسئلة النماذج اللغوية المحلية',
    titleHighlight: 'النماذج اللغوية المحلية',
    intro: '{count} دليل للإجابات القصيرة. متطلبات VRAM، وأفضل نماذج Ollama، ومقارنات الأجهزة، ونصائح الإعداد، بإجابات في **60 ثانية أو أقل**.',
    primaryCta: 'ابدأ بدليل VRAM',
    secondaryCta: 'عرض كل المواضيع',
    summary: [
      { label: 'في جملة واحدة', text: 'Prompt Bite هو **دليل إجابة قصيرة** عن سؤال واحد حول النماذج اللغوية المحلية، مثل حجم VRAM الذي تحتاجه أو نموذج Ollama الذي تشغّله.' },
      { label: 'بعبارات بسيطة', text: 'تعرض كل صفحة الإجابة أولًا، في **60 ثانية أو أقل**. اختر موضوعًا أدناه وافتح السؤال الذي يهمك.' },
    ],
    flow: {
      title: 'كيف تترابط الأجزاء',
      caption: 'مخطط: من سؤالك إلى إجابة قصيرة ثم إلى دليل أعمق.',
      ariaLabel: 'مخطط: سؤالك عن VRAM أو التكميم أو Ollama يقود إلى إجابة قصيرة تربط بأدلة أعمق',
      columns: [
        { label: 'سؤالك', tone: 'azure', chips: ['VRAM', 'التكميم', 'Ollama'] },
        { label: 'إجابة قصيرة', tone: 'violet', chips: ['الإجابة أولًا', 'الأرقام الأساسية', '60 ثانية أو أقل'] },
        { label: 'تعمّق أكثر', tone: 'rose', chips: ['أدلة معمّقة', 'نماذج اللغة المحلية', 'Power Local LLM'] },
      ],
    },
    jump: { label: 'انتقل إلى', start: 'ابدأ هنا', explore: 'المواضيع', why: 'لماذا', latest: 'آخر التحديثات', deeper: 'تعمّق أكثر', faq: 'الأسئلة الشائعة' },
    start: {
      title: 'ابدأ هنا',
      intro: 'أربعة أسئلة شائعة. اختر ما يناسبك.',
      badge: 'ابدأ هنا',
      goals: { quant: 'فهم التكميم', tool: 'الاختيار بين Ollama وLM Studio', models: 'العثور على أفضل نماذج Ollama', hw: 'اختيار جهاز مصغّر للنماذج اللغوية المحلية' },
    },
    explore: {
      title: 'استكشف حسب الموضوع',
      intro: '{tiles} مواضيع، {pages} إجابة قصيرة. نقرة واحدة تفتح الموضوع في مكانه.',
      unit: 'إجابة',
      tileSummary: {
        'quantization-vram': 'حجم الذاكرة المطلوب، وصيغة التكميم المناسبة، وأشجار قرارات VRAM.',
        ollama: 'أحدث الإصدارات، وأفضل النماذج، ونوافذ السياق، والرؤية، والتشغيل على المعالج فقط.',
        'tool-comparisons': 'Ollama مقابل LM Studio، وJan مقابل LM Studio، وQwen مقابل DeepSeek: مقارنات ثنائية.',
        'model-comparisons': 'أفضل نماذج 14B، ونماذج MoE، والأجهزة المصغّرة، ومواجهات مباشرة بين النماذج.',
        'hardware-specific': 'بطاقات GPU حسب الميزانية، والأجهزة المصغّرة، وSSD، وGPU السحابية، وeGPU.',
        'quick-answers': 'إجابات بنعم/لا أو برقم واحد: حدود الذاكرة RAM، وأجهزة لابتوب موصى بها.',
        'prompt-engineering': 'تعريفات سريعة وقوائم مختارة عن هندسة الأوامر.',
        'privacy-compliance': 'الامتثال للائحة GDPR، وسيادة البيانات، وذكاء اصطناعي محلي يحترم الخصوصية.',
        'balcony-solar-regulation': 'قواعد الطاقة الشمسية القابلة للتوصيل في الولايات المتحدة، ولاية بولاية.',
        [MORE_TILE_ID]: 'مزيد من الإجابات القصيرة عن الذكاء الاصطناعي المحلي والاتجاهات والتنظيم.',
      },
      moreTitle: 'مزيد من الإجابات',
      moreIntro: 'إجابات قصيرة لم تُصنَّف بعد ضمن المواضيع أعلاه.',
    },
    why: {
      title: 'لماذا الإجابات القصيرة',
      intro: 'يبدأ كل Prompt Bite بالإجابة. اقرأها في **60 ثانية أو أقل**، ثم اتبع رابط التعمّق إذا أردت النسخة الأطول.',
      takeaway: '**باختصار:** تجيب Prompt Bites أولًا عن سؤال واحد حول النماذج اللغوية المحلية في **60 ثانية أو أقل**، وتحيلك إلى دليل أعمق عندما تحتاج المزيد.',
    },
    latest: { title: 'آخر التحديثات', intro: 'الصفحات الثلاث الأحدث تغييرًا.', more: 'عرض كل المواضيع', updated: 'تم التحديث', published: 'نُشر' },
    deeper: {
      title: 'تعمّق أكثر',
      intro: 'عوالم المواضيع الأخرى، لكل منها لونه الخاص.',
      open: 'فتح',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': 'نماذج اللغة المحلية', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'أدلة المنزل الذكي المحلي مع Home Assistant وMatter.',
        'balcony-solar': 'أجهزة شمسية جاهزة للتوصيل، وقواعد، وأدلة.',
        'local-llms': 'النماذج والتخزين والعتاد للذكاء الاصطناعي في المنزل.',
        'power-local-llm': 'العثور على تطبيق الذكاء الاصطناعي المحلي المناسب.',
        'prompt-engineering': 'نتائج أفضل مع أي نموذج ذكاء اصطناعي.',
      },
    },
    deepDives: 'أدلة معمّقة',
    reviewed: 'آخر مراجعة للمحتوى:',
    faqHeading: 'الأسئلة الشائعة',
  },
  ko: {
    pill: '프롬프트 요점',
    title: '로컬 LLM 질문에 대한 빠른 답변',
    titleHighlight: '로컬 LLM',
    intro: '{count}편 단답 가이드. VRAM 요구 사항, Ollama 추천, 하드웨어 비교, 설정 팁을 **60초 이하**로 답변합니다.',
    primaryCta: 'VRAM 가이드로 시작하기',
    secondaryCta: '모든 주제 보기',
    summary: [
      { label: '한 문장으로', text: 'Prompt Bites는 필요한 VRAM 용량이나 실행할 Ollama 모델처럼 로컬 LLM 질문 하나에 답하는 **단답 가이드**입니다.' },
      { label: '쉽게 말하면', text: '모든 페이지가 답을 먼저, **60초 이하**로 알려 줍니다. 아래에서 주제를 고르고 궁금한 질문을 열어 보세요.' },
    ],
    flow: {
      title: '전체 구성',
      caption: '도식: 질문에서 짧은 답변, 더 깊은 가이드까지.',
      ariaLabel: '도식: VRAM, 양자화, Ollama에 대한 질문이 짧은 답변으로 이어지고, 더 깊은 가이드로 연결된다',
      columns: [
        { label: '내 질문', tone: 'azure', chips: ['VRAM', '양자화', 'Ollama'] },
        { label: '짧은 답변', tone: 'violet', chips: ['답이 먼저', '핵심 수치', '60초 이하'] },
        { label: '더 깊이', tone: 'rose', chips: ['심층 가이드', '로컬 LLM', 'Power Local LLM'] },
      ],
    },
    jump: { label: '바로가기', start: '여기서 시작', explore: '주제', why: '이유', latest: '최근 업데이트', deeper: '더 깊이', faq: '자주 묻는 질문' },
    start: {
      title: '여기서 시작',
      intro: '자주 찾는 네 가지 질문입니다. 맞는 것을 고르세요.',
      badge: '여기서 시작',
      goals: { quant: '양자화 이해하기', tool: 'Ollama와 LM Studio 중 고르기', models: '최고의 Ollama 모델 찾기', hw: '로컬 LLM용 미니 PC 고르기' },
    },
    explore: {
      title: '주제별로 살펴보기',
      intro: '{tiles}개 주제, 단답 {pages}개. 클릭하면 그 자리에서 주제가 열립니다.',
      unit: '답변',
      tileSummary: {
        'quantization-vram': '필요한 메모리 용량, 선택할 양자화 형식, VRAM 결정 트리.',
        ollama: '최신 버전, 최고의 모델, 컨텍스트 윈도우, 비전, CPU 전용 사용.',
        'tool-comparisons': 'Ollama 대 LM Studio, Jan 대 LM Studio, Qwen 대 DeepSeek: 일대일 비교.',
        'model-comparisons': '최고의 14B 모델, MoE 모델, 미니 PC, 모델 간 직접 비교.',
        'hardware-specific': '예산별 GPU, 미니 PC, SSD, 클라우드 GPU, eGPU.',
        'quick-answers': '예/아니오와 숫자 하나로 답하는 질문: RAM 한계, 노트북 추천.',
        'prompt-engineering': '프롬프트 엔지니어링의 간단한 정의와 추천 목록.',
        'privacy-compliance': 'GDPR 준수, 데이터 주권, 개인정보를 지키는 로컬 AI.',
        'balcony-solar-regulation': '미국 플러그인 태양광의 주별 규정.',
        [MORE_TILE_ID]: '로컬 AI, 트렌드, 규제에 대한 추가 단답.',
      },
      moreTitle: '추가 답변',
      moreIntro: '위의 주제에 아직 분류되지 않은 단답입니다.',
    },
    why: {
      title: '왜 단답인가',
      intro: '모든 Prompt Bite는 답으로 시작합니다. **60초 이하**로 읽고, 긴 버전이 필요하면 심층 링크를 따라가세요.',
      takeaway: '**요약:** Prompt Bites는 로컬 LLM 질문 하나에 먼저 **60초 이하**로 답하고, 더 필요할 때 더 깊은 가이드로 안내합니다.',
    },
    latest: { title: '최근 업데이트', intro: '가장 최근에 변경된 세 페이지.', more: '모든 주제 보기', updated: '업데이트', published: '게시' },
    deeper: {
      title: '더 깊이',
      intro: '다른 주제 영역, 각각 고유한 색으로.',
      open: '열기',
      names: { 'smart-home': 'Smart Home', 'balcony-solar': 'Balcony Solar', 'local-llms': '로컬 LLM', 'power-local-llm': 'Power Local LLM', 'prompt-engineering': 'Prompt Engineering' },
      lines: {
        'smart-home': 'Home Assistant와 Matter로 만드는 로컬 스마트홈 가이드.',
        'balcony-solar': '플러그인 방식의 태양광 장치, 규정, 가이드.',
        'local-llms': '집에서 AI를 돌리기 위한 모델, 저장 장치, 하드웨어.',
        'power-local-llm': '알맞은 로컬 AI 앱 찾기.',
        'prompt-engineering': '어떤 AI 모델에서든 더 나은 결과 얻기.',
      },
    },
    deepDives: '심층 가이드',
    reviewed: '콘텐츠 최종 검토일:',
    faqHeading: '자주 묻는 질문',
  },
}

export interface PromptBitesHubTemplateSource {
  lang: Lang
  data: PromptBitesHubData
  homeLabel: string
}

const LISTED_SLUGS = new Set(PROMPT_BITES_CATEGORIES.flatMap((category) => category.articleSlugs))

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

/** Same rule the old hub used for its JSON-LD: the resolved-language quick answer, English when absent. */
function quickAnswerOf(slug: string, lang: Lang): { question: string; answer: string; bullets?: string[] } | undefined {
  const key = PROMPT_BITES_SLUG_TO_KEY[slug]
  const data = key ? promptBitesContent[key] : undefined
  const article = (data?.[lang] ?? data?.en) as { quickAnswerTop?: Record<string, { question?: string; answer?: string; bullets?: string[] }> } | undefined
  const qa = article?.quickAnswerTop?.[lang] ?? article?.quickAnswerTop?.en
  if (!qa?.question || !qa.answer) return undefined
  return { question: qa.question, answer: qa.answer, bullets: qa.bullets }
}

export function PromptBitesHubTemplate({ lang, data, homeLabel }: PromptBitesHubTemplateSource) {
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Prompt Bites hub template has no strings for "${lang}"`)
  }

  const isLive = (slug: string) => PROMPT_BITES_PUBLISHED_SLUGS.has(slug) && Boolean(data.articles[slug])

  const toItem = (slug: string): HubItem => {
    const article = data.articles[slug]
    const isNew = isNewArticle(article.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(article.publishDate, article.dateModified)
    return {
      href: promptBitesArticlePath(lang, slug),
      title: article.title,
      summary: article.previewText ?? undefined,
      kind: 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
    }
  }

  // One tile per category (published slugs only, editorial order).
  const tiles: HubTile[] = PROMPT_BITES_CATEGORIES.map((category) => {
    const intro = category.description[lang] ?? category.descriptionEn
    return {
      id: category.id,
      title: category.title[lang] ?? category.titleEn,
      summary: copy.explore.tileSummary[category.id] ?? intro,
      intro,
      unit: copy.explore.unit,
      items: category.articleSlugs.filter(isLive).map(toItem),
    }
  }).filter((tile) => tile.items.length > 0)

  // Published bites that no category lists would be unreachable from the hub; they get one computed tile.
  const unlisted = Object.keys(PROMPT_BITES_SLUG_TO_KEY).filter((slug) => !LISTED_SLUGS.has(slug) && isLive(slug))
  if (unlisted.length > 0) {
    tiles.push({
      id: MORE_TILE_ID,
      title: copy.explore.moreTitle,
      summary: copy.explore.tileSummary[MORE_TILE_ID],
      intro: copy.explore.moreIntro,
      unit: copy.explore.unit,
      items: unlisted.map(toItem),
    })
  }
  const pageCount = tiles.reduce((sum, tile) => sum + tile.items.length, 0)

  const startTones: HubTone[] = ['violet', 'azure', 'rose', 'indigo']
  const startIcons: HubStartCard['icon'][] = ['package', 'shield', 'trend', 'home']
  const startKeys = (Object.keys(START_SLUGS) as (keyof typeof START_SLUGS)[]).filter((key) => isLive(START_SLUGS[key]))
  const startCards: HubStartCard[] = startKeys.map((key, i) => ({
    href: promptBitesArticlePath(lang, START_SLUGS[key]),
    goal: copy.start.goals[key],
    title: data.articles[START_SLUGS[key]].title,
    tone: startTones[i],
    icon: startIcons[i],
    badge: i === 0 ? copy.start.badge : undefined,
  }))

  // Latest: the three bites with the newest change (EN dates, same basis as the NEW / UPDATED badges).
  const dated = Object.keys(PROMPT_BITES_SLUG_TO_KEY)
    .filter(isLive)
    .map((slug) => {
      const article = data.articles[slug]
      return { slug, date: article.dateModified ?? article.publishDate, modified: Boolean(article.dateModified) }
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

  const hubLinks: HubLink[] = DEEPER_ORDER.map((slug) => ({
    href: lang === 'en' ? `/${slug}` : `/${lang}/${slug}`,
    name: copy.deeper.names[slug],
    line: copy.deeper.lines[slug],
    tone: DEEPER_TONES[slug],
  }))

  const whyCards = WHY_CATEGORY_IDS.flatMap((id, i) => {
    const category = PROMPT_BITES_CATEGORIES.find((c) => c.id === id)
    return category
      ? [{ label: category.title[lang] ?? category.titleEn, detail: category.description[lang] ?? category.descriptionEn, tone: cycleTone(i) }]
      : []
  })

  // Visible FAQ = the quick answers of a few key bites; each is also part of the page's FAQPage JSON-LD.
  const faqItems: HubFaqItem[] = FAQ_SLUGS.filter(isLive)
    .map((slug) => quickAnswerOf(slug, lang))
    .filter((qa): qa is NonNullable<typeof qa> => Boolean(qa))
    .map((qa) => ({ q: qa.question, a: qa.answer, bullets: qa.bullets && qa.bullets.length > 0 ? qa.bullets : undefined }))

  // Per-category deep-dive links to the long-form cluster articles (kept from the old hub; plain server-rendered links).
  const deepDiveLinks = DEEPDIVE_LINKS[lang] ?? DEEPDIVE_LINKS.en ?? {}
  const deepDives = PROMPT_BITES_CATEGORIES.flatMap((category) => {
    const link = deepDiveLinks[category.titleEn]
    return link ? [link] : []
  })

  const jumpTones = [0, 1, 2, 3, 4, 5].map(cycleTone)
  const reviewed = data.latestDateModified
    ? { dateTime: data.latestDateModified, text: `${copy.reviewed} ${formatDisplayDate(data.latestDateModified, lang)}` }
    : undefined

  return (
    <HubTemplate
      accent="orchid"
      breadcrumb={{ homeLabel, homeHref: lang === 'en' ? '/' : `/${lang}`, current: copy.pill }}
      pill={copy.pill}
      title={copy.title}
      titleHighlight={copy.titleHighlight}
      intro={fill(copy.intro, { count: PROMPT_BITES_PUBLISHED_SLUGS.size })}
      primaryCta={{ label: copy.primaryCta, href: promptBitesArticlePath(lang, PRIMARY_CTA_SLUG) }}
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
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: pageCount }),
        tiles,
        labels,
        sortLocale: HUB_SORT_LOCALE[lang] ?? lang,
      }}
      why={{ title: copy.why.title, intro: copy.why.intro, cards: whyCards, takeaway: copy.why.takeaway }}
      latest={{
        title: copy.latest.title,
        intro: copy.latest.intro,
        cards: latestCards,
        moreLabel: copy.latest.more,
        badgeNew: labels.badgeNew,
        badgeUpdated: labels.badgeUpdated,
      }}
      deeper={{ title: copy.deeper.title, intro: copy.deeper.intro, openLabel: copy.deeper.open, links: hubLinks }}
      faq={{ heading: copy.faqHeading, items: faqItems }}
      footer={
        <div className="space-y-8">
          {deepDives.length > 0 && (
            <nav aria-label={copy.deepDives}>
              <h2 className="mb-3 text-lg font-bold text-text-primary">{copy.deepDives}</h2>
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {deepDives.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-primary hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="flex justify-center">
            <LangLinksBar cluster="prompt-bites" slug="" availableLangs={['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']} initialLang={lang} />
          </div>
        </div>
      }
    />
  )
}
