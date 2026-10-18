// Balcony Solar hub on the shared hub template (src/components/hub-template).
//
// Pilot: only the languages in BALCONY_SOLAR_HUB_TEMPLATE_LANGS use it; every other language keeps
// the original hub in page-helpers.tsx. A language needs an entry in HUB_TEMPLATE_COPY (below) and
// in src/components/hub-template/labels.ts before it can be added to the allowlist.
//
// Nothing here fetches data. Every article link comes from BALCONY_SOLAR_CATEGORIES, so the
// hub-coverage validator (scripts/validate-hub-coverage.mjs) keeps working unchanged.

import type { ReactNode } from 'react'
import { HubTemplate } from '@/components/hub-template/HubTemplate'
import { HUB_EXPLORE_LABELS, HUB_SORT_LOCALE } from '@/components/hub-template/labels'
import { cycleTone } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'
import type { HubItem, HubLatestCard, HubLink, HubStartCard, HubTile } from '@/components/hub-template/types'
import { PROFILE_META } from './profile-meta'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Lang } from '@/lib/i18n/constants'
import { balconySolarContent } from './content'
import { BALCONY_SOLAR_CATEGORIES } from './categories'
import { balconySolarArticlePath } from './metadata-helpers'
import { BALCONY_SOLAR_SLUG_TO_KEY } from './slugs'

/** Languages that render the hub with the new template. Add a language only after its strings exist below. */
export const BALCONY_SOLAR_HUB_TEMPLATE_LANGS: ReadonlySet<Lang> = new Set<Lang>(['de', 'en', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'])

export function usesBalconySolarHubTemplate(lang: Lang): boolean {
  return BALCONY_SOLAR_HUB_TEMPLATE_LANGS.has(lang) && lang in HUB_TEMPLATE_COPY && lang in HUB_EXPLORE_LABELS
}

// Company profiles live inside the "long-tail" category. They get their own tile and are listed A to Z.
const PROFILE_SLUGS: ReadonlySet<string> = new Set([
  'anker-solix-balcony-solar',
  'ecoflow-balcony-solar',
  'zendure-balcony-solar',
  'growatt-balcony-solar',
  'hoymiles-microinverter-balcony-solar',
  'deye-microinverter-balcony-solar',
  'apsystems-microinverter-balcony-solar',
  'goodwe-balcony-solar',
  'enphase-microinverter-balcony-solar',
  'yuma-balcony-solar',
  'priwatt-balcony-solar',
  'kleines-kraftwerk-balcony-solar',
  'balkonstrom-balcony-solar',
  'green-solar-pluginenergy-balcony-solar',
  'meyer-burger-solarwatt-heckert-balcony-solar',
  'renogy-balcony-solar',
  'allpowers-balcony-solar',
  'jackery-balcony-solar',
  'bluetti-balcony-solar',
])

const PROFILES_TILE_ID = 'company-profiles'
const LONG_TAIL_ID = 'long-tail'

// Slugs behind the four "Start here" cards (one per common reader goal).
const START_SLUGS = {
  kits: 'best-balcony-solar-kits-2026',
  rules: 'balkonkraftwerk-germany-rules',
  noCloud: 'home-assistant-balcony-solar-no-cloud',
  payback: 'balcony-solar-payback-worth-it-2026',
} as const
const COUNTRY_GUIDE_SLUG = 'is-balcony-solar-legal-country-guide'

interface HubTemplateCopy {
  pill: string
  titleHighlight: string
  primaryCta: string
  secondaryCta: string
  summary: { label: string; text: string }[]
  flow: { title: string; caption: string; ariaLabel: string; columns: { label: string; tone: HubTone; chips: string[] }[] }
  jump: { label: string; start: string; explore: string; why: string; latest: string; deeper: string; faq: string }
  start: { title: string; intro: string; badge: string; goals: Record<keyof typeof START_SLUGS, string> }
  explore: { title: string; intro: string; guidesUnit: string; profilesUnit: string; tileSummary: Record<string, string>; profilesTitle: string; profilesIntro: string }
  why: { title: string; takeaway?: string }
  latest: { title: string; intro: string; more: string; updated: string; published: string }
  deeper: { title: string; intro: string; open: string; lines: Record<string, string>; extra: { slug: string; name: string }[] }
  overview: { title: string; iframeTitle: string }
  guideCountToken: string
}

const HUB_TEMPLATE_COPY: Partial<Record<Lang, HubTemplateCopy>> = {
  de: {
    pill: 'Balkonkraftwerke',
    titleHighlight: 'ohne Cloud',
    primaryCta: 'Regeln für mein Land prüfen',
    secondaryCta: 'Alle Themen ansehen',
    summary: [
      {
        label: 'In einem Satz',
        text: 'Ein Balkonkraftwerk ist ein **steckerfertiges Solargerät**, das Strom für den Eigenverbrauch erzeugt, in den meisten Märkten **ohne Dachinstallation oder Elektriker**.',
      },
      {
        label: 'In einfachen Worten',
        text: 'Set auswählen, die Regeln des eigenen Landes prüfen, anschließen. Die Anleitungen unten zeigen **jeden Schritt**.',
      },
    ],
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: vom Solarmodul bis ins Hausnetz.',
      ariaLabel: 'Schema: Solarmodule speisen über einen Mikrowechselrichter in das Hausnetz ein, optional mit Speicher',
      columns: [
        { label: 'Solarmodul', tone: 'azure', chips: ['Balkongeländer', 'Wand', 'Garten'] },
        { label: 'Mikrowechselrichter', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Zuhause', tone: 'rose', chips: ['Steckdose', 'Speicher (optional)', 'Home Assistant'] },
      ],
    },
    jump: {
      label: 'Springen zu',
      start: 'Hier starten',
      explore: 'Themen',
      why: 'Warum',
      latest: 'Zuletzt aktualisiert',
      deeper: 'Weiter vertiefen',
      faq: 'Häufige Fragen',
    },
    start: {
      title: 'Hier starten',
      intro: 'Vier häufige Ziele. Wählen Sie das, das zu Ihnen passt.',
      badge: 'Hier starten',
      goals: {
        kits: 'Das passende Set finden',
        rules: 'Die Regeln in Deutschland prüfen',
        noCloud: 'Ohne Hersteller-Cloud überwachen',
        payback: 'Prüfen, ob es sich lohnt',
      },
    },
    explore: {
      title: 'Themen entdecken',
      intro: '{tiles} Themen, {pages} Seiten ({guides} Anleitungen und {profiles} Firmenprofile). Ein Klick öffnet ein Thema direkt an Ort und Stelle.',
      guidesUnit: 'Anleitungen',
      profilesUnit: 'Profile',
      tileSummary: {
        'hub-money': 'Grundlagen, beste Sets und Betrieb ohne Cloud.',
        'decision-howto': 'Balkon oder Dach, Installation, Anmeldung, Montage.',
        legislation: 'Globaler Tracker plus Länderseiten für Deutschland, USA, UK und mehr.',
        'long-tail': 'Markenvergleich, Speicher-Frage, Amortisation, Fehlersuche.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye und weitere Marken.',
        'trends-2027': 'EU-Standards, Wohnungsgenossenschaften, Net Metering und Länderberichte.',
      },
      profilesTitle: 'Herstellerprofile',
      profilesIntro: 'Profile von **Herstellern und Marken** für Sets, Wechselrichter und Speicher, von **Anker SOLIX bis Zendure**.',
    },
    why: {
      title: 'Warum Balkonkraftwerk und warum ohne Cloud',
      takeaway:
        '**Kurz gesagt:** Ein Balkonkraftwerk braucht **keinen Installateur**, amortisiert sich bei den meisten Sets **innerhalb weniger Jahre**, und lässt sich bei den gängigen Marken **komplett ohne Hersteller-Cloud** über Home Assistant betreiben.',
    },
    latest: {
      title: 'Zuletzt aktualisiert',
      intro: 'Die drei Seiten mit der jüngsten Änderung.',
      more: 'Alle Themen ansehen',
      updated: 'Aktualisiert',
      published: 'Veröffentlicht',
    },
    deeper: {
      title: 'Weiter vertiefen',
      intro: 'Die anderen Themenwelten, jede in ihrer eigenen Farbe.',
      open: 'Öffnen',
      lines: {
        'smart-home': 'Das Zuhause mit lokaler KI betreiben.',
        'local-llms': 'Modelle, Speicher und Hardware für KI zu Hause.',
        'power-local-llm': 'Die passende lokale KI-App finden.',
        'prompt-bites': 'Kurze Antworten in 60 Sekunden.',
        'prompt-engineering': 'Bessere Ergebnisse mit jedem KI-Modell.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Überblick als Präsentation', iframeTitle: 'Balcony Solar Überblick' },
    guideCountToken: '33 Anleitungen',
  },
  en: {
    pill: 'Balcony solar',
    titleHighlight: 'No-Cloud',
    primaryCta: 'Check the rules for my country',
    secondaryCta: 'See all topics',
    summary: [
      { label: 'In one sentence', text: 'A balcony solar system is a **plug-in solar device** that generates power for your own use, in most markets **without a roof installation or an electrician**.' },
      { label: 'In plain terms', text: 'Pick a kit, check your country\'s rules, plug it in. The guides below walk you through **every step**.' },
    ],
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from the solar panel to your home grid.',
      ariaLabel: 'Diagram: solar panels feed the home grid through a micro-inverter, optionally with a battery',
      columns: [
        { label: 'Solar panel', tone: 'azure', chips: ['Balcony railing', 'Wall', 'Garden'] },
        { label: 'Micro-inverter', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Home', tone: 'rose', chips: ['Wall outlet', 'Storage (optional)'] },
      ],
    },
    jump: { label: 'Jump to', start: 'Start here', explore: 'Topics', why: 'Why', latest: 'Recently updated', deeper: 'Go deeper', faq: 'FAQ' },
    start: {
      title: 'Start here',
      intro: 'Four common goals. Pick the one that fits you.',
      badge: 'Start here',
      goals: { kits: 'Find the right kit', rules: 'Check the rules in Germany', noCloud: 'Monitor it without a vendor cloud', payback: 'See whether it pays off' },
    },
    explore: {
      title: 'Explore by topic',
      intro: '{tiles} topics, {pages} pages ({guides} guides and {profiles} company profiles). One click opens a topic right where you are.',
      guidesUnit: 'Guides',
      profilesUnit: 'Profiles',
      tileSummary: {
        'hub-money': 'The basics, best kits, and running it without the cloud.',
        'decision-howto': 'Balcony or roof, installation, registration, mounting.',
        'legislation': 'Global tracker plus country pages for Germany, the US, the UK and more.',
        'long-tail': 'Brand comparisons, the battery question, payback, troubleshooting.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye and more brands.',
        'trends-2027': 'EU standards, housing associations, net metering and country reports.',
      },
      profilesTitle: 'Manufacturer profiles',
      profilesIntro: 'Profiles of **manufacturers and brands** for kits, inverters and storage, from **Anker SOLIX to Zendure**.',
    },
    why: {
      title: 'Why balcony solar, and why without the cloud',
      takeaway: '**In short:** A balcony solar system needs **no installer**, pays for itself within **a few years** for most kits, and on the common brands can be run **entirely without a vendor cloud** through Home Assistant.',
    },
    latest: { title: 'Recently updated', intro: 'The three pages with the newest change.', more: 'See all topics', updated: 'Updated', published: 'Published' },
    deeper: {
      title: 'Go deeper',
      intro: 'The other topic worlds, each in its own color.',
      open: 'Open',
      lines: {
        'smart-home': 'Run your home with local AI.',
        'local-llms': 'Models, storage and hardware for AI at home.',
        'power-local-llm': 'Find the right local AI app.',
        'prompt-bites': 'Short answers in 60 seconds.',
        'prompt-engineering': 'Better results with any AI model.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Overview as a presentation', iframeTitle: 'Balcony Solar overview' },
    guideCountToken: '33 guides',
  },
  fr: {
    pill: 'Solaire de balcon',
    titleHighlight: 'sans cloud',
    primaryCta: 'Vérifier les règles de mon pays',
    secondaryCta: 'Voir tous les sujets',
    summary: [
      { label: 'En une phrase', text: 'Un kit solaire de balcon est un **appareil solaire prêt à brancher** qui produit de l\'électricité pour votre propre consommation, dans la plupart des marchés **sans installation en toiture ni électricien**.' },
      { label: 'En termes simples', text: 'Choisir un kit, vérifier les règles de son pays, le brancher. Les guides ci-dessous détaillent **chaque étape**.' },
    ],
    flow: {
      title: 'Comment tout s\'articule',
      caption: 'Schéma : du panneau solaire au réseau domestique.',
      ariaLabel: 'Schéma : les panneaux solaires alimentent le réseau domestique via un micro-onduleur, avec batterie en option',
      columns: [
        { label: 'Panneau solaire', tone: 'azure', chips: ['Rambarde de balcon', 'Mur', 'Jardin'] },
        { label: 'Micro-onduleur', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Maison', tone: 'rose', chips: ['Prise murale', 'Stockage (optionnel)'] },
      ],
    },
    jump: { label: 'Aller à', start: 'Commencer ici', explore: 'Sujets', why: 'Pourquoi', latest: 'Mis à jour récemment', deeper: 'Approfondir', faq: 'FAQ' },
    start: {
      title: 'Commencer ici',
      intro: 'Quatre objectifs courants. Choisissez celui qui vous correspond.',
      badge: 'Commencer ici',
      goals: { kits: 'Trouver le bon kit', rules: 'Vérifier les règles en Allemagne', noCloud: 'Surveiller sans cloud du fabricant', payback: 'Savoir si c\'est rentable' },
    },
    explore: {
      title: 'Explorer par sujet',
      intro: '{tiles} sujets, {pages} pages ({guides} guides et {profiles} profils d\'entreprises). Un clic ouvre un sujet directement sur place.',
      guidesUnit: 'Guides',
      profilesUnit: 'Profils',
      tileSummary: {
        'hub-money': 'Les bases, les meilleurs kits et le fonctionnement sans cloud.',
        'decision-howto': 'Balcon ou toiture, installation, déclaration, fixation.',
        'legislation': 'Tracker mondial et pages par pays : Allemagne, États-Unis, Royaume-Uni et plus.',
        'long-tail': 'Comparatifs de marques, question de la batterie, rentabilité, dépannage.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye et d\'autres marques.',
        'trends-2027': 'Normes UE, copropriétés, net metering et rapports par pays.',
      },
      profilesTitle: 'Profils de fabricants',
      profilesIntro: 'Profils de **fabricants et de marques** pour kits, onduleurs et stockage, d\'**Anker SOLIX à Zendure**.',
    },
    why: {
      title: 'Pourquoi le solaire de balcon, et pourquoi sans cloud',
      takeaway: '**En bref :** un kit solaire de balcon ne nécessite **aucun installateur**, s\'amortit pour la plupart des kits **en quelques années**, et peut, sur les marques courantes, fonctionner **entièrement sans cloud du fabricant** via Home Assistant.',
    },
    latest: { title: 'Mis à jour récemment', intro: 'Les trois pages modifiées le plus récemment.', more: 'Voir tous les sujets', updated: 'Mis à jour', published: 'Publié' },
    deeper: {
      title: 'Approfondir',
      intro: 'Les autres univers thématiques, chacun dans sa propre couleur.',
      open: 'Ouvrir',
      lines: {
        'smart-home': 'Faire fonctionner la maison avec une IA locale.',
        'local-llms': 'Modèles, stockage et matériel pour l\'IA à la maison.',
        'power-local-llm': 'Trouver la bonne application d\'IA locale.',
        'prompt-bites': 'Réponses courtes en 60 secondes.',
        'prompt-engineering': 'De meilleurs résultats avec n\'importe quel modèle d\'IA.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Aperçu en présentation', iframeTitle: 'Aperçu de Balcony Solar' },
    guideCountToken: '33 guides',
  },
  ja: {
    pill: 'バルコニーソーラー',
    titleHighlight: 'クラウド不要',
    primaryCta: 'お住まいの国のルールを確認',
    secondaryCta: 'すべてのトピックを見る',
    summary: [
      { label: 'ひとことで', text: 'バルコニーソーラーは、自家消費用の電力をつくる**プラグイン式の太陽光発電機器**で、ほとんどの市場で**屋根工事も電気工事士も不要**です。' },
      { label: 'やさしく言うと', text: 'キットを選び、自国のルールを確認して、コンセントに差すだけ。以下のガイドが**すべての手順**を案内します。' },
    ],
    flow: {
      title: '全体のつながり',
      caption: '図：ソーラーパネルから家庭の電力網まで。',
      ariaLabel: '図：ソーラーパネルがマイクロインバーターを通じて家庭の電力網に給電し、蓄電池は任意',
      columns: [
        { label: 'ソーラーパネル', tone: 'azure', chips: ['バルコニーの手すり', '壁', '庭'] },
        { label: 'マイクロインバーター', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: '住宅', tone: 'rose', chips: ['コンセント', '蓄電（任意）'] },
      ],
    },
    jump: { label: '移動', start: 'ここから始める', explore: 'トピック', why: '理由', latest: '最近の更新', deeper: 'さらに深く', faq: 'よくある質問' },
    start: {
      title: 'ここから始める',
      intro: 'よくある4つの目的です。当てはまるものを選んでください。',
      badge: 'ここから始める',
      goals: { kits: '最適なキットを探す', rules: 'ドイツのルールを確認する', noCloud: 'メーカーのクラウドなしで監視する', payback: '元が取れるか確認する' },
    },
    explore: {
      title: 'トピックから探す',
      intro: '{tiles}トピック、{pages}ページ（ガイド{guides}本と企業プロフィール{profiles}件）。クリックすると、その場でトピックが開きます。',
      guidesUnit: 'ガイド',
      profilesUnit: 'プロフィール',
      tileSummary: {
        'hub-money': '基礎、おすすめキット、クラウドなしでの運用。',
        'decision-howto': 'バルコニーか屋根か、設置、届出、取り付け。',
        'legislation': '世界の動向トラッカーと、ドイツ・米国・英国などの国別ページ。',
        'long-tail': 'ブランド比較、蓄電池は必要か、投資回収、トラブルシューティング。',
        [PROFILES_TILE_ID]: 'Anker SOLIX、EcoFlow、Zendure、Hoymiles、Deyeなどのブランド。',
        'trends-2027': 'EU基準、集合住宅管理組合、ネットメータリング、国別レポート。',
      },
      profilesTitle: 'メーカープロフィール',
      profilesIntro: 'キット・インバーター・蓄電池の**メーカーとブランド**のプロフィール。**Anker SOLIXからZendureまで**。',
    },
    why: {
      title: 'なぜバルコニーソーラーか、なぜクラウド不要か',
      takeaway: '**要点：**バルコニーソーラーは**施工業者が不要**で、多くのキットで**数年以内に元が取れ**、主要ブランドなら Home Assistant で**メーカーのクラウドなしで完全に運用**できます。',
    },
    latest: { title: '最近の更新', intro: '最も新しく変更された3ページ。', more: 'すべてのトピックを見る', updated: '更新', published: '公開' },
    deeper: {
      title: 'さらに深く',
      intro: 'ほかのテーマ領域を、それぞれ専用の色で。',
      open: '開く',
      lines: {
        'smart-home': 'ローカルAIで家を運用する。',
        'local-llms': '自宅でAIを動かすためのモデル、ストレージ、ハードウェア。',
        'power-local-llm': '最適なローカルAIアプリを見つける。',
        'prompt-bites': '60秒で読める短い回答。',
        'prompt-engineering': 'どのAIモデルでも結果を良くする方法。',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'プレゼンテーションで概要を見る', iframeTitle: 'Balcony Solar 概要' },
    guideCountToken: '33本',
  },
  zh: {
    pill: '阳台光伏',
    titleHighlight: '无云端',
    primaryCta: '查看所在国家的规定',
    secondaryCta: '查看全部主题',
    summary: [
      { label: '一句话概括', text: '阳台光伏是一种**即插即用的太阳能设备**，为自家用电发电，在大多数市场**无需屋顶安装，也无需电工**。' },
      { label: '通俗地说', text: '选一套产品、查看所在国家的规定、插上电源。下面的指南会带您走完**每一步**。' },
    ],
    flow: {
      title: '整体如何连接',
      caption: '示意图：从太阳能板到家庭电网。',
      ariaLabel: '示意图：太阳能板通过微型逆变器向家庭电网供电，储能为可选项',
      columns: [
        { label: '太阳能板', tone: 'azure', chips: ['阳台栏杆', '墙面', '庭院'] },
        { label: '微型逆变器', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: '家庭', tone: 'rose', chips: ['墙上插座', '储能（可选）'] },
      ],
    },
    jump: { label: '跳转到', start: '从这里开始', explore: '主题', why: '为什么', latest: '最近更新', deeper: '深入了解', faq: '常见问题' },
    start: {
      title: '从这里开始',
      intro: '四个常见目标，选择最适合您的一个。',
      badge: '从这里开始',
      goals: { kits: '找到合适的套件', rules: '查看德国的规定', noCloud: '不依赖厂商云端进行监控', payback: '判断是否划算' },
    },
    explore: {
      title: '按主题浏览',
      intro: '{tiles}个主题，{pages}个页面（{guides}篇指南和{profiles}份企业档案）。点击即可就地展开主题。',
      guidesUnit: '指南',
      profilesUnit: '档案',
      tileSummary: {
        'hub-money': '基础知识、最佳套件，以及无云端运行。',
        'decision-howto': '阳台还是屋顶、安装、登记、固定方式。',
        'legislation': '全球追踪表，以及德国、美国、英国等国家专页。',
        'long-tail': '品牌对比、是否需要电池、回本周期、故障排查。',
        [PROFILES_TILE_ID]: 'Anker SOLIX、EcoFlow、Zendure、Hoymiles、Deye 等品牌。',
        'trends-2027': '欧盟标准、住房合作社、净计量与各国报告。',
      },
      profilesTitle: '厂商档案',
      profilesIntro: '套件、逆变器与储能的**厂商和品牌**档案，从 **Anker SOLIX 到 Zendure**。',
    },
    why: {
      title: '为什么选阳台光伏，为什么不用云端',
      takeaway: '**简而言之：**阳台光伏**无需安装师傅**，多数套件**几年内即可回本**，主流品牌还可通过 Home Assistant **完全脱离厂商云端运行**。',
    },
    latest: { title: '最近更新', intro: '最近有改动的三个页面。', more: '查看全部主题', updated: '更新于', published: '发布于' },
    deeper: {
      title: '深入了解',
      intro: '其他主题板块，各有专属颜色。',
      open: '打开',
      lines: {
        'smart-home': '用本地 AI 运行您的家。',
        'local-llms': '在家运行 AI 所需的模型、存储和硬件。',
        'power-local-llm': '找到合适的本地 AI 应用。',
        'prompt-bites': '60 秒读懂的简短回答。',
        'prompt-engineering': '让任何 AI 模型都给出更好的结果。',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: '以演示文稿查看概览', iframeTitle: 'Balcony Solar 概览' },
    guideCountToken: '33篇',
  },
  es: {
    pill: 'Solar de balcón',
    titleHighlight: 'sin nube',
    primaryCta: 'Comprobar las normas de mi país',
    secondaryCta: 'Ver todos los temas',
    summary: [
      { label: 'En una frase', text: 'Un kit solar de balcón es un **dispositivo solar listo para enchufar** que genera electricidad para consumo propio, en la mayoría de los mercados **sin instalación en el tejado ni electricista**.' },
      { label: 'En palabras sencillas', text: 'Elegir un kit, revisar la normativa del propio país, enchufarlo. Las guías de abajo explican **cada paso**.' },
    ],
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: del panel solar a la red del hogar.',
      ariaLabel: 'Esquema: los paneles solares inyectan en la red del hogar a través de un microinversor, con batería opcional',
      columns: [
        { label: 'Panel solar', tone: 'azure', chips: ['Barandilla del balcón', 'Pared', 'Jardín'] },
        { label: 'Microinversor', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Hogar', tone: 'rose', chips: ['Enchufe', 'Almacenamiento (opcional)'] },
      ],
    },
    jump: { label: 'Ir a', start: 'Empezar aquí', explore: 'Temas', why: 'Por qué', latest: 'Actualizado recientemente', deeper: 'Profundizar', faq: 'Preguntas frecuentes' },
    start: {
      title: 'Empezar aquí',
      intro: 'Cuatro objetivos habituales. Elige el que más te convenga.',
      badge: 'Empezar aquí',
      goals: { kits: 'Encontrar el kit adecuado', rules: 'Revisar las normas en Alemania', noCloud: 'Monitorizar sin nube del fabricante', payback: 'Ver si compensa' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} páginas ({guides} guías y {profiles} perfiles de empresas). Un clic abre un tema justo ahí.',
      guidesUnit: 'Guías',
      profilesUnit: 'Perfiles',
      tileSummary: {
        'hub-money': 'Lo básico, los mejores kits y el funcionamiento sin nube.',
        'decision-howto': 'Balcón o tejado, instalación, registro, montaje.',
        'legislation': 'Rastreador global y páginas por país para Alemania, EE. UU., Reino Unido y más.',
        'long-tail': 'Comparativas de marcas, la cuestión de la batería, amortización, solución de problemas.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye y más marcas.',
        'trends-2027': 'Estándares de la UE, comunidades de vecinos, balance neto e informes por país.',
      },
      profilesTitle: 'Perfiles de fabricantes',
      profilesIntro: 'Perfiles de **fabricantes y marcas** de kits, inversores y almacenamiento, de **Anker SOLIX a Zendure**.',
    },
    why: {
      title: 'Por qué el solar de balcón y por qué sin nube',
      takeaway: '**En resumen:** un kit solar de balcón **no necesita instalador**, se amortiza en la mayoría de los kits **en pocos años** y, en las marcas habituales, puede funcionar **totalmente sin la nube del fabricante** mediante Home Assistant.',
    },
    latest: { title: 'Actualizado recientemente', intro: 'Las tres páginas con el cambio más reciente.', more: 'Ver todos los temas', updated: 'Actualizado', published: 'Publicado' },
    deeper: {
      title: 'Profundizar',
      intro: 'Los demás mundos temáticos, cada uno con su propio color.',
      open: 'Abrir',
      lines: {
        'smart-home': 'Gestionar el hogar con IA local.',
        'local-llms': 'Modelos, almacenamiento y hardware para IA en casa.',
        'power-local-llm': 'Encontrar la aplicación de IA local adecuada.',
        'prompt-bites': 'Respuestas breves en 60 segundos.',
        'prompt-engineering': 'Mejores resultados con cualquier modelo de IA.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Resumen en presentación', iframeTitle: 'Resumen de Balcony Solar' },
    guideCountToken: '33 guías',
  },
  pt: {
    pill: 'Solar de varanda',
    titleHighlight: 'sem nuvem',
    primaryCta: 'Verificar as regras do meu país',
    secondaryCta: 'Ver todos os temas',
    summary: [
      { label: 'Em uma frase', text: 'Um kit solar de varanda é um **dispositivo solar pronto para plugar** que gera energia para consumo próprio, na maioria dos mercados **sem instalação no telhado nem eletricista**.' },
      { label: 'Em palavras simples', text: 'Escolher um kit, conferir as regras do próprio país, plugar. Os guias abaixo mostram **cada etapa**.' },
    ],
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Esquema: do painel solar à rede da casa.',
      ariaLabel: 'Esquema: os painéis solares alimentam a rede da casa por meio de um microinversor, com bateria opcional',
      columns: [
        { label: 'Painel solar', tone: 'azure', chips: ['Grade da varanda', 'Parede', 'Jardim'] },
        { label: 'Microinversor', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'Casa', tone: 'rose', chips: ['Tomada', 'Armazenamento (opcional)'] },
      ],
    },
    jump: { label: 'Ir para', start: 'Comece aqui', explore: 'Temas', why: 'Por quê', latest: 'Atualizado recentemente', deeper: 'Aprofundar', faq: 'Perguntas frequentes' },
    start: {
      title: 'Comece aqui',
      intro: 'Quatro objetivos comuns. Escolha o que combina com você.',
      badge: 'Comece aqui',
      goals: { kits: 'Encontrar o kit certo', rules: 'Conferir as regras na Alemanha', noCloud: 'Monitorar sem a nuvem do fabricante', payback: 'Ver se compensa' },
    },
    explore: {
      title: 'Explorar por tema',
      intro: '{tiles} temas, {pages} páginas ({guides} guias e {profiles} perfis de empresas). Um clique abre um tema ali mesmo.',
      guidesUnit: 'Guias',
      profilesUnit: 'Perfis',
      tileSummary: {
        'hub-money': 'O básico, os melhores kits e a operação sem nuvem.',
        'decision-howto': 'Varanda ou telhado, instalação, registro, fixação.',
        'legislation': 'Rastreador global e páginas por país para Alemanha, EUA, Reino Unido e mais.',
        'long-tail': 'Comparativos de marcas, a questão da bateria, retorno do investimento, solução de problemas.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye e outras marcas.',
        'trends-2027': 'Padrões da UE, condomínios, net metering e relatórios por país.',
      },
      profilesTitle: 'Perfis de fabricantes',
      profilesIntro: 'Perfis de **fabricantes e marcas** de kits, inversores e armazenamento, da **Anker SOLIX à Zendure**.',
    },
    why: {
      title: 'Por que solar de varanda e por que sem nuvem',
      takeaway: '**Resumindo:** um kit solar de varanda **não precisa de instalador**, se paga na maioria dos kits **em poucos anos** e, nas marcas mais comuns, pode funcionar **totalmente sem a nuvem do fabricante** por meio do Home Assistant.',
    },
    latest: { title: 'Atualizado recentemente', intro: 'As três páginas com a alteração mais recente.', more: 'Ver todos os temas', updated: 'Atualizado', published: 'Publicado' },
    deeper: {
      title: 'Aprofundar',
      intro: 'Os outros universos temáticos, cada um com sua própria cor.',
      open: 'Abrir',
      lines: {
        'smart-home': 'Rodar a casa com IA local.',
        'local-llms': 'Modelos, armazenamento e hardware para IA em casa.',
        'power-local-llm': 'Encontrar o aplicativo de IA local certo.',
        'prompt-bites': 'Respostas curtas em 60 segundos.',
        'prompt-engineering': 'Melhores resultados com qualquer modelo de IA.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'Visão geral em apresentação', iframeTitle: 'Visão geral do Balcony Solar' },
    guideCountToken: '33 guias',
  },
  ar: {
    pill: 'الطاقة الشمسية للشرفة',
    titleHighlight: 'بلا سحابة',
    primaryCta: 'تحقق من قواعد بلدي',
    secondaryCta: 'عرض كل المواضيع',
    summary: [
      { label: 'في جملة واحدة', text: 'نظام الطاقة الشمسية للشرفة **جهاز شمسي جاهز للتوصيل بالمقبس** يولّد الكهرباء للاستهلاك الذاتي، وفي معظم الأسواق **دون تركيب على السطح ودون كهربائي**.' },
      { label: 'بعبارات بسيطة', text: 'اختر طقمًا، وتحقق من قواعد بلدك، ثم صله بالمقبس. تشرح الأدلة أدناه **كل خطوة**.' },
    ],
    flow: {
      title: 'كيف تترابط الأجزاء',
      caption: 'مخطط: من اللوح الشمسي إلى شبكة المنزل.',
      ariaLabel: 'مخطط: تغذي الألواح الشمسية شبكة المنزل عبر محول صغير، مع بطارية اختيارية',
      columns: [
        { label: 'لوح شمسي', tone: 'azure', chips: ['درابزين الشرفة', 'جدار', 'حديقة'] },
        { label: 'محول صغير (Micro-inverter)', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: 'المنزل', tone: 'rose', chips: ['مقبس الحائط', 'تخزين (اختياري)'] },
      ],
    },
    jump: { label: 'انتقل إلى', start: 'ابدأ هنا', explore: 'المواضيع', why: 'لماذا', latest: 'آخر التحديثات', deeper: 'تعمّق أكثر', faq: 'الأسئلة الشائعة' },
    start: {
      title: 'ابدأ هنا',
      intro: 'أربعة أهداف شائعة. اختر ما يناسبك.',
      badge: 'ابدأ هنا',
      goals: { kits: 'العثور على الطقم المناسب', rules: 'التحقق من القواعد في ألمانيا', noCloud: 'المراقبة دون سحابة الشركة المصنّعة', payback: 'معرفة ما إذا كان مجديًا' },
    },
    explore: {
      title: 'استكشف حسب الموضوع',
      intro: '{tiles} مواضيع، {pages} صفحة ({guides} دليلًا و{profiles} ملفًا تعريفيًا للشركات). نقرة واحدة تفتح الموضوع في مكانه.',
      guidesUnit: 'أدلة',
      profilesUnit: 'ملفات',
      tileSummary: {
        'hub-money': 'الأساسيات وأفضل الأطقم والتشغيل دون سحابة.',
        'decision-howto': 'الشرفة أم السطح، التركيب، التسجيل، التثبيت.',
        'legislation': 'متتبّع عالمي وصفحات لكل بلد: ألمانيا والولايات المتحدة والمملكة المتحدة وغيرها.',
        'long-tail': 'مقارنات العلامات، مسألة البطارية، فترة الاسترداد، استكشاف الأعطال.',
        [PROFILES_TILE_ID]: 'Anker SOLIX وEcoFlow وZendure وHoymiles وDeye وعلامات أخرى.',
        'trends-2027': 'معايير الاتحاد الأوروبي، جمعيات الملاك، القياس الصافي وتقارير الدول.',
      },
      profilesTitle: 'ملفات الشركات المصنّعة',
      profilesIntro: 'ملفات **الشركات المصنّعة والعلامات** للأطقم والمحوّلات والتخزين، من **Anker SOLIX إلى Zendure**.',
    },
    why: {
      title: 'لماذا الطاقة الشمسية للشرفة ولماذا بلا سحابة',
      takeaway: '**باختصار:** لا يحتاج نظام الطاقة الشمسية للشرفة إلى **فني تركيب**، ويسترد تكلفته في معظم الأطقم **خلال بضع سنوات**، ويمكن تشغيله مع العلامات الشائعة **دون أي سحابة للشركة المصنّعة** عبر Home Assistant.',
    },
    latest: { title: 'آخر التحديثات', intro: 'الصفحات الثلاث الأحدث تغييرًا.', more: 'عرض كل المواضيع', updated: 'تم التحديث', published: 'نُشر' },
    deeper: {
      title: 'تعمّق أكثر',
      intro: 'عوالم المواضيع الأخرى، لكل منها لونه الخاص.',
      open: 'فتح',
      lines: {
        'smart-home': 'تشغيل المنزل بالذكاء الاصطناعي المحلي.',
        'local-llms': 'النماذج والتخزين والعتاد للذكاء الاصطناعي في المنزل.',
        'power-local-llm': 'العثور على تطبيق الذكاء الاصطناعي المحلي المناسب.',
        'prompt-bites': 'إجابات قصيرة في 60 ثانية.',
        'prompt-engineering': 'نتائج أفضل مع أي نموذج ذكاء اصطناعي.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: 'نظرة عامة في عرض تقديمي', iframeTitle: 'نظرة عامة على Balcony Solar' },
    guideCountToken: 'الـ33',
  },
  ko: {
    pill: '발코니 태양광',
    titleHighlight: '클라우드 없는',
    primaryCta: '내 나라의 규정 확인하기',
    secondaryCta: '모든 주제 보기',
    summary: [
      { label: '한 문장으로', text: '발코니 태양광은 자가 소비용 전력을 만드는 **플러그인 방식의 태양광 장치**로, 대부분의 시장에서 **지붕 공사나 전기 기술자 없이** 쓸 수 있습니다.' },
      { label: '쉽게 말하면', text: '키트를 고르고, 내 나라의 규정을 확인하고, 콘센트에 꽂으면 됩니다. 아래 가이드가 **모든 단계**를 안내합니다.' },
    ],
    flow: {
      title: '전체 구성',
      caption: '도식: 태양광 패널에서 가정 전력망까지.',
      ariaLabel: '도식: 태양광 패널이 마이크로인버터를 거쳐 가정 전력망에 전력을 공급하며, 배터리는 선택 사항',
      columns: [
        { label: '태양광 패널', tone: 'azure', chips: ['발코니 난간', '벽', '정원'] },
        { label: '마이크로인버터', tone: 'violet', chips: ['Hoymiles', 'Deye', 'APsystems'] },
        { label: '가정', tone: 'rose', chips: ['벽 콘센트', '저장 장치(선택)'] },
      ],
    },
    jump: { label: '바로가기', start: '여기서 시작', explore: '주제', why: '이유', latest: '최근 업데이트', deeper: '더 깊이', faq: '자주 묻는 질문' },
    start: {
      title: '여기서 시작',
      intro: '자주 찾는 네 가지 목표입니다. 맞는 것을 고르세요.',
      badge: '여기서 시작',
      goals: { kits: '알맞은 키트 찾기', rules: '독일 규정 확인하기', noCloud: '제조사 클라우드 없이 모니터링하기', payback: '본전을 뽑을지 확인하기' },
    },
    explore: {
      title: '주제별로 살펴보기',
      intro: '{tiles}개 주제, {pages}개 페이지(가이드 {guides}개와 기업 프로필 {profiles}개). 클릭하면 그 자리에서 주제가 열립니다.',
      guidesUnit: '가이드',
      profilesUnit: '프로필',
      tileSummary: {
        'hub-money': '기본 개념, 추천 키트, 클라우드 없이 운영하기.',
        'decision-howto': '발코니냐 지붕이냐, 설치, 등록, 거치.',
        'legislation': '글로벌 트래커와 독일, 미국, 영국 등 국가별 페이지.',
        'long-tail': '브랜드 비교, 배터리가 필요한지, 투자 회수, 문제 해결.',
        [PROFILES_TILE_ID]: 'Anker SOLIX, EcoFlow, Zendure, Hoymiles, Deye 등의 브랜드.',
        'trends-2027': 'EU 표준, 공동주택 조합, 넷 미터링, 국가별 보고서.',
      },
      profilesTitle: '제조사 프로필',
      profilesIntro: '키트, 인버터, 저장 장치의 **제조사와 브랜드** 프로필, **Anker SOLIX부터 Zendure까지**.',
    },
    why: {
      title: '왜 발코니 태양광이고, 왜 클라우드 없이인가',
      takeaway: '**요약:** 발코니 태양광은 **설치 기사가 필요 없고**, 대부분의 키트에서 **몇 년 안에 비용을 회수**할 수 있으며, 주요 브랜드는 Home Assistant로 **제조사 클라우드 없이 완전히 운영**할 수 있습니다.',
    },
    latest: { title: '최근 업데이트', intro: '가장 최근에 변경된 세 페이지.', more: '모든 주제 보기', updated: '업데이트', published: '게시' },
    deeper: {
      title: '더 깊이',
      intro: '다른 주제 영역, 각각 고유한 색으로.',
      open: '열기',
      lines: {
        'smart-home': '로컬 AI로 집 운영하기.',
        'local-llms': '집에서 AI를 돌리기 위한 모델, 저장 장치, 하드웨어.',
        'power-local-llm': '알맞은 로컬 AI 앱 찾기.',
        'prompt-bites': '60초 안에 읽는 짧은 답변.',
        'prompt-engineering': '어떤 AI 모델에서든 더 나은 결과 얻기.',
      },
      extra: [
        { slug: 'prompt-bites', name: 'Prompt Bites' },
        { slug: 'prompt-engineering', name: 'Prompt Engineering' },
      ],
    },
    overview: { title: '프레젠테이션으로 보는 개요', iframeTitle: 'Balcony Solar 개요' },
    guideCountToken: '33개',
  },
}

// One accent color per hub, matching the hubs' own pages. "local-llms" and "prompt-bites" were
// 'olive' (green) and 'amber' (yellow-beige) — off-brand next to the rest of the page's
// purple/blue/indigo/magenta/rose palette, per the owner's review — replaced with 'rose' and
// 'orchid' from that same palette. 'cyan', 'violet' and 'blue' were kept (already judged fine).
const HUB_TONES_BY_SLUG: Record<string, HubTone> = {
  'smart-home': 'cyan',
  'local-llms': 'rose',
  'power-local-llm': 'violet',
  'prompt-bites': 'orchid',
  'prompt-engineering': 'blue',
}

interface CategoryCopy {
  badge: string
  description: string
}

export interface BalconySolarHubTemplateSource {
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

const ALL_SLUGS = BALCONY_SOLAR_CATEGORIES.flatMap((category) => category.articleSlugs)

/**
 * The hub intro names how many guides there are. The typed number had drifted (33 typed, 36 real),
 * so for template languages it is computed: every listed page that is not a company profile.
 * Also used for the CollectionPage description so the schema and the visible text agree.
 */
export function withComputedGuideCount(lang: Lang, intro: string): string {
  const copy = HUB_TEMPLATE_COPY[lang]
  if (!copy) return intro
  const guideTotal = ALL_SLUGS.filter((slug) => !PROFILE_SLUGS.has(slug)).length
  return intro.replace(copy.guideCountToken, copy.guideCountToken.replace(/\d+/, String(guideTotal)))
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

function hubSlug(path: string): string {
  return path.split('/').filter(Boolean).pop() ?? path
}

export function BalconySolarHubTemplate(source: BalconySolarHubTemplateSource) {
  const { lang } = source
  const copy = HUB_TEMPLATE_COPY[lang]
  const labels = HUB_EXPLORE_LABELS[lang]
  if (!copy || !labels) {
    throw new Error(`Balcony Solar hub template has no strings for "${lang}"`)
  }

  const articleOf = (slug: string) => {
    const key = BALCONY_SOLAR_SLUG_TO_KEY[slug]
    const data = key ? balconySolarContent[key] : undefined
    return { en: data?.en, local: data?.[lang] ?? data?.en }
  }

  const toItem = (slug: string): HubItem => {
    const { en, local } = articleOf(slug)
    const isNew = isNewArticle(en?.publishDate)
    const isUpdated = !isNew && isUpdatedArticle(en?.publishDate, en?.dateModified)
    const isProfile = PROFILE_SLUGS.has(slug)
    const profile = isProfile ? PROFILE_META[slug] : undefined
    return {
      href: balconySolarArticlePath(lang, slug),
      title: local?.title ?? en?.title ?? source.fallbackTitle(slug),
      summary: local?.intro,
      kind: isProfile ? 'profile' : 'guide',
      badge: isNew ? 'new' : isUpdated ? 'updated' : undefined,
      category: profile?.category,
      categoryTone: profile?.categoryTone,
      fact: profile?.fact,
    }
  }

  // Tiles: one per category; the long-tail category is split into buying help and company profiles.
  const tiles: HubTile[] = []
  for (const category of BALCONY_SOLAR_CATEGORIES) {
    const cc = source.categoryCopy?.[category.id]
    const title = cc?.badge ?? category.titleEn
    const intro = cc?.description ?? category.descriptionEn
    const summary = copy.explore.tileSummary[category.id] ?? intro
    if (category.id === LONG_TAIL_ID) {
      const guides = category.articleSlugs.filter((slug) => !PROFILE_SLUGS.has(slug))
      const profiles = category.articleSlugs.filter((slug) => PROFILE_SLUGS.has(slug))
      if (guides.length > 0) {
        tiles.push({ id: category.id, title, summary, intro, unit: copy.explore.guidesUnit, items: guides.map(toItem) })
      }
      if (profiles.length > 0) {
        tiles.push({
          id: PROFILES_TILE_ID,
          title: copy.explore.profilesTitle,
          summary: copy.explore.tileSummary[PROFILES_TILE_ID] ?? copy.explore.profilesIntro,
          intro: copy.explore.profilesIntro,
          unit: copy.explore.profilesUnit,
          items: profiles.map(toItem),
        })
      }
      continue
    }
    tiles.push({ id: category.id, title, summary, intro, unit: copy.explore.guidesUnit, items: category.articleSlugs.map(toItem) })
  }

  const allSlugs = ALL_SLUGS
  const intro = withComputedGuideCount(lang, source.copy.intro)

  const startTones: HubTone[] = ['violet', 'azure', 'rose', 'indigo']
  const startIcons: HubStartCard['icon'][] = ['package', 'shield', 'home', 'trend']
  const startKeys = Object.keys(START_SLUGS) as (keyof typeof START_SLUGS)[]
  const startCards: HubStartCard[] = startKeys.map((key, i) => ({
    href: balconySolarArticlePath(lang, START_SLUGS[key]),
    goal: copy.start.goals[key],
    title: toItem(START_SLUGS[key]).title,
    tone: startTones[i],
    icon: startIcons[i],
    badge: i === 0 ? copy.start.badge : undefined,
  }))

  // Latest: the three articles with the newest change date (EN dates, same basis as the NEW / UPDATED badges).
  const dated = allSlugs
    .map((slug) => {
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
      accent="indigo"
      breadcrumb={{ homeLabel: source.homeLabel, homeHref: lang === 'en' ? '/' : `/${lang}`, current: copy.pill }}
      pill={copy.pill}
      title={source.copy.title}
      titleHighlight={copy.titleHighlight}
      intro={intro}
      primaryCta={{ label: copy.primaryCta, href: balconySolarArticlePath(lang, COUNTRY_GUIDE_SLUG) }}
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
        intro: fill(copy.explore.intro, { tiles: tiles.length, pages: allSlugs.length, guides: allSlugs.filter((slug) => !PROFILE_SLUGS.has(slug)).length, profiles: allSlugs.filter((slug) => PROFILE_SLUGS.has(slug)).length }),
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
        imageSrc: `/images/balcony-solar-hub-overview-hero-${lang}.webp`,
        imageAlt: source.copy.title,
        iframeSrc: `${source.presentationUrl}?lang=${lang}`,
        iframeTitle: copy.overview.iframeTitle,
      }}
      faq={{ heading: source.faqHeading, items: source.faq }}
      footer={source.footer}
    />
  )
}
