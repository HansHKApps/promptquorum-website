import type { Language } from '@/lib/blog/blogContent'

export const PARTNERS_EMAIL = 'hello@promptquorum.com'

export interface PartnersContent {
  metaTitle: string
  metaDescription: string
  home: string
  breadcrumb: string
  h1: string
  subtitle: string
  partners: {
    heading: string
    intro: string
    /** {email} becomes a mailto link. */
    contact: string
    disclaimerTitle: string
    disclaimer: string
    openHeading: string
    open: string[]
  }
  advertising: {
    heading: string
    /** {email} becomes a mailto link. */
    text: string
  }
  audience: {
    heading: string
    intro: string
    metricsHeading: string
    metrics: { label: string; value: string; note: string }[]
    metricsAsOf: string
    countriesIntro: string
    whoHeading: string
    who: string[]
    whatHeading: string
    what: string[]
    fromHeading: string
    from: string
    footnote: string
  }
  stats: {
    heading: string
    viewsLabel: string
    /** {hours}, {end} */
    viewsWindow: string
    /** {date} */
    gscLabel: string
    source: string
    gscNote: string
    /** {n}, {from}, {to} */
    countries: { heading: string; note: string }
    messages: { neutral: string }
  }
}

export const partnersContent: Record<Language, PartnersContent> = {
  en: {
    metaTitle: 'Partners & Advertising | PromptQuorum',
    metaDescription:
      'PromptQuorum is open to partnerships in local AI: hardware, software, tooling and infrastructure. No link exchanges, no paid posts. Advertising outlook for 2027.',
    home: 'PromptQuorum',
    breadcrumb: 'Partners & Advertising',
    h1: 'Partners & Advertising',
    subtitle: 'Working with PromptQuorum: what we are open to, and what we are not.',
    partners: {
      heading: 'Partners',
      intro:
        'PromptQuorum is open to partnerships with companies in local AI: hardware, software, tooling and infrastructure.',
      contact: 'Write to us at {email} with a concrete proposal: who you are, what you offer and what you have in mind.',
      disclaimerTitle: 'What we do not do',
      disclaimer:
        'We do not do link exchanges. We do not accept payment for posted links, guest posts or sponsored blog articles. Requests of this kind will not be answered.',
      openHeading: 'What we are open to',
      open: [
        'Product collaborations',
        'Technical integrations',
        'Hands-on testing and review of hardware or software on our own editorial terms',
        'Data and research partnerships',
        'Co-developed content where we keep full editorial control',
      ],
    },
    advertising: {
      heading: 'Advertising (outlook)',
      text:
        'There are currently no paid advertising or sponsorship activities on PromptQuorum. From 2027, we plan to open selected advertising and sponsorship opportunities, based on contracts, with clear labeling and editorial independence. Interested companies can get in touch now to be considered: {email}.',
    },
    audience: {
      heading: 'Who reads PromptQuorum',
      intro:
        'PromptQuorum is where people go when they stop asking what AI can do and start asking what they can run themselves: which model fits their hardware, which app works on their phone, which mini PC can serve as an always-on AI box at home. Readers arrive with a purchase or setup decision in front of them, and they stay to read.',
      metricsHeading: 'The numbers',
      metrics: [
        { label: 'Google Search clicks', value: '63,347 in 28 days', note: 'About 2,260 per day' },
        { label: 'Google Search impressions', value: '3.69 million in 28 days', note: 'About 132,000 per day' },
        { label: 'Average Google position', value: 'About 6', note: 'First page of results' },
        { label: 'Google Search clicks, 3 months', value: 'About 159,000', note: '14 Aug to 13 Nov 2026' },
        { label: 'Appearances in Google AI answers', value: '3.1 million impressions', note: 'Trailing 3 months' },
        { label: 'Average visit duration', value: 'About 4 to 5 minutes', note: 'Umami, 1 to 8 Nov 2026' },
        { label: 'Languages', value: '9', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: 'Pages', value: 'About 9,000', note: 'Site-wide' },
      ],
      metricsAsOf: 'Screenshot and numbers above taken on 18 November 2026.',
      countriesIntro:
        'Readers do not sit in one market. Japan, the United States, South Korea and Germany each deliver 12 to 16 percent of Google Search clicks, and together account for more than half. Every page exists in all 9 languages, so companies selling into Japan, Korea, Germany or France can reach readers there in their own language. The live country breakdown below updates automatically.',
      whoHeading: 'Who is reading',
      who: [
        'Most visitors use a laptop or desktop; Windows, macOS, iOS, Android and Linux all appear in the device mix.',
        'Readers search for specific tools and setups: LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, eGPU builds.',
        'About a quarter of visitors arrive through privacy-focused search engines such as DuckDuckGo, Brave, Ecosia and Qwant.',
        'About 39% of visitors browse in a language other than English.',
      ],
      whatHeading: 'What they read',
      what: [
        'App guides for Android, iPhone and Mac local-AI apps.',
        'Mini PC guides for local LLM, AMD, Home Assistant and Ollama server builds.',
        'Hardware guides covering GPUs, Apple Silicon, CPU-only and low-end machines.',
        'Model and tooling comparisons, including coding assistants, IDE plugins and frontends.',
      ],
      fromHeading: 'Where the audience comes from',
      from:
        'Search is the main channel. Google referred about 55% of visitors in the measured window, followed by DuckDuckGo (about 18%), Bing (about 7%) and Brave (about 6%). PromptQuorum pages also appear as cited sources inside Google’s AI answers.',
      footnote:
        'Figures are from Google Search Console (28 days to 15 November 2026) and Umami (1 to 8 November 2026). Next update: mid-December 2026.',
    },
    stats: {
      heading: 'Live traffic',
      viewsLabel: 'Page views, last 24 hours',
      viewsWindow: 'Last {hours} hours until {end} UTC',
      gscLabel: 'Google search clicks on {date}',
      source: 'Source: Umami / Google Search Console',
      gscNote: 'Google Search Console publishes data with a delay of about two days, so it shows the latest available day.',
      countries: { heading: 'Google search clicks by country', note: 'Top {n} countries, {from} to {to}. Share of all Google search clicks in this period.' },
      messages: { neutral: 'Readers from around the world use PromptQuorum every day.' },
    },
  },
  de: {
    metaTitle: 'Partner & Werbung | PromptQuorum',
    metaDescription:
      'PromptQuorum ist offen für Partnerschaften rund um lokale KI: Hardware, Software, Tools und Infrastruktur. Kein Linktausch, keine bezahlten Beiträge. Ausblick Werbung 2027.',
    home: 'PromptQuorum',
    breadcrumb: 'Partner & Werbung',
    h1: 'Partner & Werbung',
    subtitle: 'Zusammenarbeit mit PromptQuorum: wofür wir offen sind und wofür nicht.',
    partners: {
      heading: 'Partner',
      intro:
        'PromptQuorum ist offen für Partnerschaften mit Unternehmen aus dem Bereich lokale KI: Hardware, Software, Tools und Infrastruktur.',
      contact: 'Schreiben Sie uns an {email} mit einem konkreten Vorschlag: wer Sie sind, was Sie anbieten und was Sie sich vorstellen.',
      disclaimerTitle: 'Was wir nicht tun',
      disclaimer:
        'Wir betreiben keinen Linktausch. Wir nehmen kein Geld für gesetzte Links, Gastbeiträge oder gesponserte Blogartikel an. Anfragen dieser Art werden nicht beantwortet.',
      openHeading: 'Wofür wir offen sind',
      open: [
        'Produktkooperationen',
        'Technische Integrationen',
        'Praxistests und Reviews von Hardware oder Software zu unseren eigenen redaktionellen Bedingungen',
        'Daten- und Forschungspartnerschaften',
        'Gemeinsam entwickelte Inhalte, bei denen die redaktionelle Kontrolle vollständig bei uns bleibt',
      ],
    },
    advertising: {
      heading: 'Werbung (Ausblick)',
      text:
        'Derzeit gibt es auf PromptQuorum keine bezahlte Werbung und keine Sponsoring-Aktivitäten. Ab 2027 planen wir, ausgewählte Werbe- und Sponsoring-Möglichkeiten zu öffnen, auf vertraglicher Basis, mit klarer Kennzeichnung und redaktioneller Unabhängigkeit. Interessierte Unternehmen können sich schon jetzt melden, um berücksichtigt zu werden: {email}.',
    },
    audience: {
      heading: 'Wer PromptQuorum liest',
      intro:
        'PromptQuorum ist die Anlaufstelle für Menschen, die nicht mehr fragen, was KI kann, sondern was sie selbst betreiben können: welches Modell zur eigenen Hardware passt, welche App auf dem Smartphone läuft, welcher Mini-PC als dauerhaft laufende KI-Box zu Hause dienen kann. Leser kommen mit einer konkreten Kauf- oder Einrichtungsentscheidung vor sich und bleiben zum Lesen.',
      metricsHeading: 'Die Zahlen',
      metrics: [
        { label: 'Google-Suchklicks', value: '63.347 in 28 Tagen', note: 'Etwa 2.260 pro Tag' },
        { label: 'Google-Suchimpressionen', value: '3,69 Millionen in 28 Tagen', note: 'Etwa 132.000 pro Tag' },
        { label: 'Durchschnittliche Google-Position', value: 'Etwa 6', note: 'Erste Ergebnisseite' },
        { label: 'Google-Suchklicks, 3 Monate', value: 'Etwa 159.000', note: '14. August bis 13. November 2026' },
        { label: 'Erscheinungen in Google-KI-Antworten', value: '3,1 Millionen Impressionen', note: 'Letzte 3 Monate' },
        { label: 'Durchschnittliche Besuchsdauer', value: 'Etwa 4 bis 5 Minuten', note: 'Umami, 1. bis 8. November 2026' },
        { label: 'Sprachen', value: '9', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: 'Seiten', value: 'Etwa 9.000', note: 'Website-weit' },
      ],
      metricsAsOf: 'Screenshot und Zahlen oben stammen vom 18. November 2026.',
      countriesIntro:
        'Die Leserschaft konzentriert sich nicht auf einen Markt. Japan, die USA, Südkorea und Deutschland liefern jeweils 12 bis 16 Prozent der Google-Suchklicks und zusammen mehr als die Hälfte. Jede Seite existiert in allen 9 Sprachen, sodass Unternehmen, die nach Japan, Korea, Deutschland oder Frankreich verkaufen, Leser dort in ihrer eigenen Sprache erreichen können. Die Länderaufstellung unten aktualisiert sich automatisch live.',
      whoHeading: 'Wer liest',
      who: [
        'Die meisten Besucher nutzen Laptop oder Desktop; Windows, macOS, iOS, Android und Linux sind alle im Geräte-Mix vertreten.',
        'Leser suchen nach konkreten Tools und Setups: LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, eGPU-Aufbauten.',
        'Etwa ein Viertel der Besucher kommt über datenschutzorientierte Suchmaschinen wie DuckDuckGo, Brave, Ecosia und Qwant.',
        'Etwa 39 % der Besucher nutzen die Seite in einer anderen Sprache als Englisch.',
      ],
      whatHeading: 'Was gelesen wird',
      what: [
        'App-Guides für Android-, iPhone- und Mac-Apps für lokale KI.',
        'Mini-PC-Guides für lokale LLMs, AMD, Home Assistant und Ollama-Server-Aufbauten.',
        'Hardware-Guides zu GPUs, Apple Silicon, reinen CPU-Systemen und Low-End-Geräten.',
        'Vergleiche von Modellen und Tools, darunter Coding-Assistenten, IDE-Plugins und Frontends.',
      ],
      fromHeading: 'Woher die Leserschaft kommt',
      from:
        'Die Suche ist der wichtigste Kanal. Google verwies im gemessenen Zeitraum etwa 55 % der Besucher, gefolgt von DuckDuckGo (etwa 18 %), Bing (etwa 7 %) und Brave (etwa 6 %). PromptQuorum-Seiten erscheinen außerdem als zitierte Quellen in den KI-Antworten von Google.',
      footnote:
        'Die Zahlen stammen aus der Google Search Console (28 Tage bis 15. November 2026) und aus Umami (1. bis 8. November 2026). Nächste Aktualisierung: Mitte Dezember 2026.',
    },
    stats: {
      heading: 'Live-Zugriffszahlen',
      viewsLabel: 'Seitenaufrufe, letzte 24 Stunden',
      viewsWindow: 'Letzte {hours} Stunden bis {end} UTC',
      gscLabel: 'Google-Suchklicks am {date}',
      source: 'Quelle: Umami / Google Search Console',
      gscNote: 'Die Google Search Console liefert Daten mit rund zwei Tagen Verzögerung und zeigt daher den letzten verfügbaren Tag.',
      countries: { heading: 'Google-Suchklicks nach Land', note: 'Top {n} Länder, {from} bis {to}. Anteil an allen Google-Suchklicks in diesem Zeitraum.' },
      messages: { neutral: 'Leserinnen und Leser aus der ganzen Welt nutzen PromptQuorum jeden Tag.' },
    },
  },
  fr: {
    metaTitle: 'Partenaires et publicité | PromptQuorum',
    metaDescription:
      "PromptQuorum est ouvert aux partenariats dans l'IA locale : matériel, logiciels, outils et infrastructure. Ni échange de liens ni article payé. Publicité : perspectives 2027.",
    home: 'PromptQuorum',
    breadcrumb: 'Partenaires et publicité',
    h1: 'Partenaires et publicité',
    subtitle: 'Travailler avec PromptQuorum : ce que nous acceptons et ce que nous refusons.',
    partners: {
      heading: 'Partenaires',
      intro:
        "PromptQuorum est ouvert aux partenariats avec des entreprises de l'IA locale : matériel, logiciels, outils et infrastructure.",
      contact: 'Écrivez-nous à {email} avec une proposition concrète : qui vous êtes, ce que vous proposez et ce que vous envisagez.',
      disclaimerTitle: 'Ce que nous ne faisons pas',
      disclaimer:
        "Nous ne pratiquons pas l'échange de liens. Nous n'acceptons aucun paiement pour des liens publiés, des articles invités ou des articles de blog sponsorisés. Les demandes de ce type resteront sans réponse.",
      openHeading: 'Ce que nous acceptons',
      open: [
        'Collaborations produit',
        'Intégrations techniques',
        'Tests pratiques et évaluations de matériel ou de logiciels selon nos propres conditions éditoriales',
        'Partenariats de données et de recherche',
        'Contenus coproduits, pour lesquels nous gardons le plein contrôle éditorial',
      ],
    },
    advertising: {
      heading: 'Publicité (perspectives)',
      text:
        "Il n'y a actuellement aucune activité de publicité ou de sponsoring rémunérée sur PromptQuorum. À partir de 2027, nous prévoyons d'ouvrir certaines possibilités de publicité et de sponsoring, sur une base contractuelle, avec un étiquetage clair et dans le respect de l'indépendance éditoriale. Les entreprises intéressées peuvent nous contacter dès maintenant pour être prises en compte : {email}.",
    },
    audience: {
      heading: 'Qui lit PromptQuorum',
      intro:
        "PromptQuorum est l'endroit où les gens se rendent quand ils arrêtent de se demander ce que l'IA peut faire et commencent à se demander ce qu'ils peuvent exécuter eux-mêmes : quel modèle convient à leur matériel, quelle application fonctionne sur leur téléphone, quel mini PC peut servir de boîtier IA toujours allumé à la maison. Les lecteurs arrivent avec une décision d'achat ou de configuration à prendre, et restent pour lire.",
      metricsHeading: 'Les chiffres',
      metrics: [
        { label: 'Clics de recherche Google', value: '63 347 sur 28 jours', note: 'Environ 2 260 par jour' },
        { label: 'Impressions de recherche Google', value: '3,69 millions sur 28 jours', note: 'Environ 132 000 par jour' },
        { label: 'Position moyenne sur Google', value: 'Environ 6', note: 'Première page de résultats' },
        { label: 'Clics de recherche Google, 3 mois', value: 'Environ 159 000', note: 'Du 14 août au 13 novembre 2026' },
        { label: "Apparitions dans les réponses IA de Google", value: '3,1 millions d’impressions', note: 'Sur les 3 derniers mois' },
        { label: 'Durée moyenne de visite', value: 'Environ 4 à 5 minutes', note: 'Umami, du 1er au 8 novembre 2026' },
        { label: 'Langues', value: '9', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: 'Pages', value: 'Environ 9 000', note: "Sur l'ensemble du site" },
      ],
      metricsAsOf: "Capture d'écran et chiffres ci-dessus relevés le 18 novembre 2026.",
      countriesIntro:
        "Les lecteurs ne se concentrent pas sur un seul marché. Le Japon, les États-Unis, la Corée du Sud et l'Allemagne apportent chacun 12 à 16 % des clics de recherche Google, et plus de la moitié ensemble. Chaque page existe dans les 9 langues, donc les entreprises qui vendent au Japon, en Corée, en Allemagne ou en France peuvent atteindre ces lecteurs dans leur propre langue. Le détail par pays en direct ci-dessous se met à jour automatiquement.",
      whoHeading: 'Qui lit',
      who: [
        "La plupart des visiteurs utilisent un ordinateur portable ou de bureau ; Windows, macOS, iOS, Android et Linux figurent tous dans le mix d'appareils.",
        'Les lecteurs recherchent des outils et configurations précis : LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, montages eGPU.',
        "Environ un quart des visiteurs arrive via des moteurs de recherche axés sur la confidentialité comme DuckDuckGo, Brave, Ecosia et Qwant.",
        "Environ 39 % des visiteurs naviguent dans une langue autre que l'anglais.",
      ],
      whatHeading: "Ce qu'ils lisent",
      what: [
        "Guides d'applications d'IA locale pour Android, iPhone et Mac.",
        'Guides de mini PC pour LLM local, AMD, Home Assistant et serveurs Ollama.',
        "Guides matériel sur les GPU, Apple Silicon, les machines CPU uniquement et les configurations d'entrée de gamme.",
        "Comparatifs de modèles et d'outils, dont assistants de code, plugins IDE et frontends.",
      ],
      fromHeading: "D'où vient l'audience",
      from:
        "La recherche est le canal principal. Google a dirigé environ 55 % des visiteurs sur la période mesurée, suivi de DuckDuckGo (environ 18 %), Bing (environ 7 %) et Brave (environ 6 %). Les pages de PromptQuorum apparaissent aussi comme sources citées dans les réponses IA de Google.",
      footnote:
        "Les chiffres proviennent de Google Search Console (28 jours jusqu'au 15 novembre 2026) et d'Umami (1er au 8 novembre 2026). Prochaine mise à jour : mi-décembre 2026.",
    },
    stats: {
      heading: 'Trafic en direct',
      viewsLabel: 'Pages vues, dernières 24 heures',
      viewsWindow: 'Dernières {hours} heures jusqu\'au {end} UTC',
      gscLabel: 'Clics depuis la recherche Google le {date}',
      source: 'Source : Umami / Google Search Console',
      gscNote: "Google Search Console publie ses données avec environ deux jours de décalage ; le chiffre affiché correspond donc au dernier jour disponible.",
      countries: { heading: 'Clics depuis la recherche Google par pays', note: 'Top {n} des pays, du {from} au {to}. Part de tous les clics issus de la recherche Google sur cette période.' },
      messages: { neutral: 'Des lecteurs du monde entier utilisent PromptQuorum chaque jour.' },
    },
  },
  ja: {
    metaTitle: 'パートナー・広告 | PromptQuorum',
    metaDescription:
      'PromptQuorumはローカルAI（ハードウェア、ソフトウェア、ツール、インフラ）分野の提携を歓迎します。相互リンクや有料掲載は行いません。広告は2027年からの予定です。',
    home: 'PromptQuorum',
    breadcrumb: 'パートナー・広告',
    h1: 'パートナー・広告',
    subtitle: 'PromptQuorumとの協力について：歓迎できること、お受けできないこと。',
    partners: {
      heading: 'パートナー',
      intro:
        'PromptQuorumは、ローカルAI分野（ハードウェア、ソフトウェア、ツール、インフラ）の企業との提携を歓迎します。',
      contact: '具体的なご提案（貴社の概要、提供内容、ご希望）を {email} までお送りください。',
      disclaimerTitle: 'お受けできないこと',
      disclaimer:
        '相互リンクは行いません。リンク掲載、ゲスト投稿、スポンサード記事に対する対価は受け取りません。この種のご依頼にはお返事しません。',
      openHeading: '歓迎できること',
      open: [
        '製品での協業',
        '技術的な連携・統合',
        '当サイト独自の編集方針に基づく、ハードウェアやソフトウェアの実機テスト・レビュー',
        'データ・調査での提携',
        '当サイトが編集上の完全な主導権を持つ共同制作コンテンツ',
      ],
    },
    advertising: {
      heading: '広告（今後の予定）',
      text:
        '現在、PromptQuorumでは有料広告やスポンサーシップは行っていません。2027年から、契約に基づき、明確な表示と編集の独立性を保ったうえで、一部の広告・スポンサーシップの枠を開く予定です。ご関心のある企業は、検討対象となるよう今のうちに {email} までご連絡ください。',
    },
    audience: {
      heading: 'PromptQuorumの読者層',
      intro:
        'PromptQuorumは、AIに何ができるかではなく、自分で何を動かせるかを考え始めた人が訪れる場所です。自分のハードウェアに合うモデル、スマートフォンで動くアプリ、常時稼働のAIボックスとして使えるミニPC。読者は購入や設定の判断を控えた状態で訪れ、読み進めます。',
      metricsHeading: '数字で見る',
      metrics: [
        { label: 'Google検索クリック数', value: '28日間で63,347件', note: '1日あたり約2,260件' },
        { label: 'Google検索表示回数', value: '28日間で369万回', note: '1日あたり約132,000回' },
        { label: 'Google平均掲載順位', value: '約6位', note: '検索結果の1ページ目' },
        { label: 'Google検索クリック数（3か月）', value: '約159,000件', note: '2026年8月14日〜11月13日' },
        { label: 'Google AI回答への表示', value: '310万インプレッション', note: '直近3か月' },
        { label: '平均滞在時間', value: '約4〜5分', note: 'Umami、2026年11月1日〜8日' },
        { label: '対応言語数', value: '9言語', note: 'EN、DE、FR、ES、PT、JA、KO、ZH、AR' },
        { label: 'ページ数', value: '約9,000ページ', note: 'サイト全体' },
      ],
      metricsAsOf: '上記のスクリーンショットと数値は2026年11月18日時点のものです。',
      countriesIntro:
        '読者は一つの市場に集中していません。日本、米国、韓国、ドイツはそれぞれGoogle検索クリックの12〜16%を占め、合計で半分を超えます。すべてのページは9言語で公開されているため、日本、韓国、ドイツ、フランスに販路を持つ企業は、それぞれの言語で読者にアプローチできます。下にある国別の内訳はライブで自動更新されます。',
      whoHeading: '読者層の特徴',
      who: [
        '訪問者の多くはノートPCまたはデスクトップを使用しています。Windows、macOS、iOS、Android、Linuxがいずれもデバイスの内訳に含まれます。',
        '読者はLM Studio、Open WebUI、SillyTavern、KoboldCpp、Automatic1111、Home Assistant、DGX Spark、eGPU構成など、具体的なツールや構成を検索しています。',
        '訪問者の約4分の1は、DuckDuckGo、Brave、Ecosia、Qwantなどプライバシー重視の検索エンジンから訪れています。',
        '訪問者の約39%は英語以外の言語で閲覧しています。',
      ],
      whatHeading: '読まれているコンテンツ',
      what: [
        'Android、iPhone、Mac向けのローカルAIアプリガイド。',
        'ローカルLLM、AMD、Home Assistant、Ollamaサーバー構築向けのミニPCガイド。',
        'GPU、Apple Silicon、CPUのみの構成、低価格機を扱うハードウェアガイド。',
        'コーディングアシスタント、IDEプラグイン、フロントエンドを含むモデル・ツール比較。',
      ],
      fromHeading: '読者の流入元',
      from:
        '検索が主要な流入経路です。計測期間中、Googleからの訪問者は約55%、続いてDuckDuckGo（約18%）、Bing（約7%）、Brave（約6%）でした。PromptQuorumのページは、GoogleのAI回答内で引用元としても表示されています。',
      footnote:
        'これらの数値はGoogle Search Console（2026年11月15日までの28日間）とUmami（2026年11月1日〜8日）によるものです。次回更新：2026年12月中旬。',
    },
    stats: {
      heading: 'ライブアクセス状況',
      viewsLabel: 'ページビュー（直近24時間）',
      viewsWindow: '直近{hours}時間（{end} UTCまで）',
      gscLabel: '{date}のGoogle検索クリック数',
      source: '出典：Umami / Google Search Console',
      gscNote: 'Google Search Consoleのデータは約2日遅れで公開されるため、取得できた最新の日の数値を表示しています。',
      countries: { heading: '国別のGoogle検索クリック数', note: '上位{n}か国、{from}〜{to}。この期間のGoogle検索クリック全体に占める割合です。' },
      messages: { neutral: '世界中の読者が毎日PromptQuorumを利用しています。' },
    },
  },
  zh: {
    metaTitle: '合作与广告 | PromptQuorum',
    metaDescription:
      'PromptQuorum 欢迎本地 AI 领域（硬件、软件、工具、基础设施）的合作。不做链接互换，不接受付费发文。广告计划自 2027 年起逐步开放。',
    home: 'PromptQuorum',
    breadcrumb: '合作与广告',
    h1: '合作与广告',
    subtitle: '与 PromptQuorum 合作：我们欢迎什么，不接受什么。',
    partners: {
      heading: '合作',
      intro: 'PromptQuorum 欢迎与本地 AI 领域的企业合作，包括硬件、软件、工具和基础设施。',
      contact: '请将具体方案（贵公司是谁、能提供什么、有什么设想）发送至 {email}。',
      disclaimerTitle: '我们不做的事',
      disclaimer:
        '我们不做链接互换。我们不接受任何以发布链接、客座文章或赞助博客文章为目的的付费。此类请求将不予回复。',
      openHeading: '我们欢迎的合作',
      open: [
        '产品合作',
        '技术集成',
        '在我们自己的编辑原则下对硬件或软件进行实测与评测',
        '数据与研究合作',
        '共同开发、但编辑决定权完全由我们保留的内容',
      ],
    },
    advertising: {
      heading: '广告（展望）',
      text:
        '目前 PromptQuorum 上没有任何付费广告或赞助活动。自 2027 年起，我们计划基于合同开放部分广告和赞助机会，并做到清晰标注、保持编辑独立。有意向的企业可以现在就联系我们，以便纳入考虑：{email}。',
    },
    audience: {
      heading: '谁在阅读 PromptQuorum',
      intro:
        'PromptQuorum 是这样一个地方：人们不再只问 AI 能做什么，而是开始问自己能运行什么——哪款模型适合自己的硬件，哪款应用能在手机上运行，哪款迷你 PC 可以作为家中常开的 AI 主机。读者带着具体的购买或配置决策前来，并会留下来阅读。',
      metricsHeading: '核心数据',
      metrics: [
        { label: 'Google 搜索点击量', value: '28 天内 63,347 次', note: '平均每天约 2,260 次' },
        { label: 'Google 搜索展示次数', value: '28 天内 369 万次', note: '平均每天约 132,000 次' },
        { label: 'Google 平均排名', value: '约第 6 位', note: '搜索结果首页' },
        { label: 'Google 搜索点击量（3 个月）', value: '约 159,000 次', note: '2026 年 8 月 14 日至 11 月 13 日' },
        { label: '在 Google AI 回答中出现', value: '310 万次展示', note: '过去 3 个月' },
        { label: '平均访问时长', value: '约 4 到 5 分钟', note: 'Umami，2026 年 11 月 1 日至 8 日' },
        { label: '支持语言数', value: '9 种', note: 'EN、DE、FR、ES、PT、JA、KO、ZH、AR' },
        { label: '页面数', value: '约 9,000 个', note: '覆盖全站' },
      ],
      metricsAsOf: '以上截图及数据截至 2026 年 11 月 18 日。',
      countriesIntro:
        '读者并不集中在单一市场。日本、美国、韩国和德国各占 Google 搜索点击量的 12% 至 16%，合计超过一半。每个页面都提供全部 9 种语言版本，因此面向日本、韩国、德国或法国销售的企业可以用当地语言接触这些读者。下方的实时国家/地区分布会自动更新。',
      whoHeading: '读者画像',
      who: [
        '大多数访问者使用笔记本电脑或台式机；Windows、macOS、iOS、Android 和 Linux 均出现在设备分布中。',
        '读者会搜索具体的工具和配置：LM Studio、Open WebUI、SillyTavern、KoboldCpp、Automatic1111、Home Assistant、DGX Spark、eGPU 方案。',
        '约四分之一的访问者通过 DuckDuckGo、Brave、Ecosia、Qwant 等注重隐私的搜索引擎到达。',
        '约 39% 的访问者使用非英语语言浏览。',
      ],
      whatHeading: '读者阅读的内容',
      what: [
        'Android、iPhone 和 Mac 本地 AI 应用指南。',
        '本地 LLM、AMD、Home Assistant 和 Ollama 服务器搭建的迷你 PC 指南。',
        '涵盖 GPU、Apple Silicon、纯 CPU 方案和低端设备的硬件指南。',
        '模型与工具对比，包括编程助手、IDE 插件和前端工具。',
      ],
      fromHeading: '读者来源',
      from:
        '搜索是主要渠道。在统计期间，Google 带来约 55% 的访问者，其次是 DuckDuckGo（约 18%）、Bing（约 7%）和 Brave（约 6%）。PromptQuorum 的页面也作为引用来源出现在 Google 的 AI 回答中。',
      footnote:
        '数据来自 Google Search Console（截至 2026 年 11 月 15 日的 28 天）和 Umami（2026 年 11 月 1 日至 8 日）。下次更新：2026 年 12 月中旬。',
    },
    stats: {
      heading: '实时访问数据',
      viewsLabel: '页面浏览量（最近 24 小时）',
      viewsWindow: '最近 {hours} 小时，截至 {end} UTC',
      gscLabel: '{date} 的 Google 搜索点击量',
      source: '数据来源：Umami / Google Search Console',
      gscNote: 'Google Search Console 的数据约有两天延迟，因此这里显示的是可获得的最新一天。',
      countries: { heading: '按国家/地区划分的 Google 搜索点击量', note: '前 {n} 个国家/地区，{from} 至 {to}。占该时间段 Google 搜索总点击量的比例。' },
      messages: { neutral: '来自世界各地的读者每天都在使用 PromptQuorum。' },
    },
  },
  es: {
    metaTitle: 'Socios y publicidad | PromptQuorum',
    metaDescription:
      'PromptQuorum está abierto a colaboraciones en IA local: hardware, software, herramientas e infraestructura. Sin intercambio de enlaces ni publicaciones de pago. Publicidad: perspectivas 2027.',
    home: 'PromptQuorum',
    breadcrumb: 'Socios y publicidad',
    h1: 'Socios y publicidad',
    subtitle: 'Colaborar con PromptQuorum: lo que aceptamos y lo que no.',
    partners: {
      heading: 'Socios',
      intro:
        'PromptQuorum está abierto a colaborar con empresas de IA local: hardware, software, herramientas e infraestructura.',
      contact: 'Escríbanos a {email} con una propuesta concreta: quién es usted, qué ofrece y qué tiene en mente.',
      disclaimerTitle: 'Lo que no hacemos',
      disclaimer:
        'No hacemos intercambio de enlaces. No aceptamos pagos por enlaces publicados, artículos de invitado ni artículos patrocinados en el blog. Las solicitudes de este tipo no recibirán respuesta.',
      openHeading: 'Lo que sí aceptamos',
      open: [
        'Colaboraciones de producto',
        'Integraciones técnicas',
        'Pruebas prácticas y análisis de hardware o software bajo nuestras propias condiciones editoriales',
        'Colaboraciones de datos e investigación',
        'Contenido desarrollado en conjunto, en el que conservamos el control editorial total',
      ],
    },
    advertising: {
      heading: 'Publicidad (perspectivas)',
      text:
        'Actualmente no hay actividades de publicidad ni patrocinio de pago en PromptQuorum. A partir de 2027 planeamos abrir algunas oportunidades de publicidad y patrocinio, basadas en contratos, con un etiquetado claro y con independencia editorial. Las empresas interesadas pueden ponerse en contacto desde ya para ser tenidas en cuenta: {email}.',
    },
    audience: {
      heading: 'Quién lee PromptQuorum',
      intro:
        'PromptQuorum es el lugar al que la gente recurre cuando deja de preguntarse qué puede hacer la IA y empieza a preguntarse qué puede ejecutar ella misma: qué modelo se ajusta a su hardware, qué app funciona en su teléfono, qué mini PC puede servir como caja de IA siempre encendida en casa. Los lectores llegan con una decisión de compra o configuración por delante, y se quedan a leer.',
      metricsHeading: 'Las cifras',
      metrics: [
        { label: 'Clics de búsqueda de Google', value: '63.347 en 28 días', note: 'Unos 2.260 al día' },
        { label: 'Impresiones de búsqueda de Google', value: '3,69 millones en 28 días', note: 'Unas 132.000 al día' },
        { label: 'Posición media en Google', value: 'Alrededor de 6', note: 'Primera página de resultados' },
        { label: 'Clics de búsqueda de Google, 3 meses', value: 'Unos 159.000', note: 'Del 14 de agosto al 13 de noviembre de 2026' },
        { label: 'Apariciones en respuestas de IA de Google', value: '3,1 millones de impresiones', note: 'Últimos 3 meses' },
        { label: 'Duración media de la visita', value: 'Entre 4 y 5 minutos, aproximadamente', note: 'Umami, del 1 al 8 de noviembre de 2026' },
        { label: 'Idiomas', value: '9', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: 'Páginas', value: 'Unas 9.000', note: 'En todo el sitio' },
      ],
      metricsAsOf: 'Captura y cifras de arriba tomadas el 18 de noviembre de 2026.',
      countriesIntro:
        'Los lectores no se concentran en un solo mercado. Japón, Estados Unidos, Corea del Sur y Alemania aportan, cada uno, entre el 12 % y el 16 % de los clics de búsqueda de Google, y juntos superan la mitad del total. Cada página existe en los 9 idiomas, así que las empresas que venden en Japón, Corea, Alemania o Francia pueden llegar a esos lectores en su propio idioma. El desglose por país en vivo, más abajo, se actualiza automáticamente.',
      whoHeading: 'Quién lee',
      who: [
        'La mayoría de los visitantes usan portátil o escritorio; Windows, macOS, iOS, Android y Linux aparecen todos en la mezcla de dispositivos.',
        'Los lectores buscan herramientas y configuraciones concretas: LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, montajes con eGPU.',
        'Alrededor de una cuarta parte de los visitantes llega a través de buscadores centrados en la privacidad como DuckDuckGo, Brave, Ecosia y Qwant.',
        'Alrededor del 39 % de los visitantes navega en un idioma distinto del inglés.',
      ],
      whatHeading: 'Qué leen',
      what: [
        'Guías de apps de IA local para Android, iPhone y Mac.',
        'Guías de mini PC para LLM local, AMD, Home Assistant y servidores Ollama.',
        'Guías de hardware sobre GPU, Apple Silicon, equipos solo con CPU y máquinas de gama baja.',
        'Comparativas de modelos y herramientas, incluidos asistentes de código, plugins para IDE y frontends.',
      ],
      fromHeading: 'De dónde viene la audiencia',
      from:
        'La búsqueda es el canal principal. Google dirigió alrededor del 55 % de los visitantes en el periodo medido, seguido de DuckDuckGo (alrededor del 18 %), Bing (alrededor del 7 %) y Brave (alrededor del 6 %). Las páginas de PromptQuorum también aparecen como fuentes citadas dentro de las respuestas de IA de Google.',
      footnote:
        'Las cifras provienen de Google Search Console (28 días hasta el 15 de noviembre de 2026) y de Umami (1 al 8 de noviembre de 2026). Próxima actualización: mediados de diciembre de 2026.',
    },
    stats: {
      heading: 'Tráfico en directo',
      viewsLabel: 'Páginas vistas, últimas 24 horas',
      viewsWindow: 'Últimas {hours} horas hasta el {end} UTC',
      gscLabel: 'Clics de búsqueda de Google el {date}',
      source: 'Fuente: Umami / Google Search Console',
      gscNote: 'Google Search Console publica los datos con unos dos días de retraso, por lo que se muestra el último día disponible.',
      countries: { heading: 'Clics de búsqueda de Google por país', note: 'Los {n} países principales, del {from} al {to}. Porcentaje sobre todos los clics de búsqueda de Google en este período.' },
      messages: { neutral: 'Lectores de todo el mundo usan PromptQuorum cada día.' },
    },
  },
  pt: {
    metaTitle: 'Parceiros e publicidade | PromptQuorum',
    metaDescription:
      'O PromptQuorum está aberto a parcerias em IA local: hardware, software, ferramentas e infraestrutura. Sem troca de links nem publicações pagas. Publicidade: perspectivas para 2027.',
    home: 'PromptQuorum',
    breadcrumb: 'Parceiros e publicidade',
    h1: 'Parceiros e publicidade',
    subtitle: 'Trabalhar com o PromptQuorum: o que aceitamos e o que não aceitamos.',
    partners: {
      heading: 'Parceiros',
      intro:
        'O PromptQuorum está aberto a parcerias com empresas de IA local: hardware, software, ferramentas e infraestrutura.',
      contact: 'Escreva para {email} com uma proposta concreta: quem você é, o que oferece e o que tem em mente.',
      disclaimerTitle: 'O que não fazemos',
      disclaimer:
        'Não fazemos troca de links. Não aceitamos pagamento por links publicados, guest posts ou artigos patrocinados no blog. Pedidos desse tipo não serão respondidos.',
      openHeading: 'O que aceitamos',
      open: [
        'Colaborações de produto',
        'Integrações técnicas',
        'Testes práticos e análises de hardware ou software segundo as nossas próprias condições editoriais',
        'Parcerias de dados e pesquisa',
        'Conteúdo desenvolvido em conjunto, no qual mantemos o controle editorial total',
      ],
    },
    advertising: {
      heading: 'Publicidade (perspectivas)',
      text:
        'Atualmente não há atividades de publicidade ou patrocínio pagas no PromptQuorum. A partir de 2027, pretendemos abrir algumas oportunidades de publicidade e patrocínio, com base em contratos, com identificação clara e independência editorial. As empresas interessadas podem entrar em contato desde já para serem consideradas: {email}.',
    },
    audience: {
      heading: 'Quem lê o PromptQuorum',
      intro:
        'O PromptQuorum é onde as pessoas vão quando param de perguntar o que a IA pode fazer e começam a perguntar o que elas mesmas podem executar: qual modelo cabe no hardware que têm, qual app funciona no celular, qual mini PC pode servir como uma caixa de IA sempre ligada em casa. Os leitores chegam com uma decisão de compra ou configuração pela frente, e ficam para ler.',
      metricsHeading: 'Os números',
      metrics: [
        { label: 'Cliques de busca do Google', value: '63.347 em 28 dias', note: 'Cerca de 2.260 por dia' },
        { label: 'Impressões de busca do Google', value: '3,69 milhões em 28 dias', note: 'Cerca de 132.000 por dia' },
        { label: 'Posição média no Google', value: 'Cerca de 6', note: 'Primeira página de resultados' },
        { label: 'Cliques de busca do Google, 3 meses', value: 'Cerca de 159.000', note: 'De 14 de agosto a 13 de novembro de 2026' },
        { label: 'Aparições nas respostas de IA do Google', value: '3,1 milhões de impressões', note: 'Últimos 3 meses' },
        { label: 'Duração média da visita', value: 'De 4 a 5 minutos, aproximadamente', note: 'Umami, de 1 a 8 de novembro de 2026' },
        { label: 'Idiomas', value: '9', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: 'Páginas', value: 'Cerca de 9.000', note: 'Em todo o site' },
      ],
      metricsAsOf: 'Captura de tela e números acima registrados em 18 de novembro de 2026.',
      countriesIntro:
        'Os leitores não estão concentrados em um único mercado. Japão, Estados Unidos, Coreia do Sul e Alemanha respondem, cada um, por 12% a 16% dos cliques de busca do Google, somando mais da metade. Cada página existe nos 9 idiomas, então empresas que vendem para Japão, Coreia, Alemanha ou França podem alcançar esses leitores no próprio idioma deles. O detalhamento por país em tempo real, abaixo, se atualiza automaticamente.',
      whoHeading: 'Quem lê',
      who: [
        'A maioria dos visitantes usa notebook ou desktop; Windows, macOS, iOS, Android e Linux aparecem todos na combinação de dispositivos.',
        'Os leitores buscam ferramentas e configurações específicas: LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, montagens com eGPU.',
        'Cerca de um quarto dos visitantes chega por buscadores focados em privacidade, como DuckDuckGo, Brave, Ecosia e Qwant.',
        'Cerca de 39% dos visitantes navegam em um idioma diferente do inglês.',
      ],
      whatHeading: 'O que eles leem',
      what: [
        'Guias de apps de IA local para Android, iPhone e Mac.',
        'Guias de mini PC para LLM local, AMD, Home Assistant e servidores Ollama.',
        'Guias de hardware sobre GPUs, Apple Silicon, máquinas somente com CPU e equipamentos de entrada.',
        'Comparações de modelos e ferramentas, incluindo assistentes de código, plugins de IDE e frontends.',
      ],
      fromHeading: 'De onde vem a audiência',
      from:
        'A busca é o principal canal. O Google encaminhou cerca de 55% dos visitantes no período medido, seguido por DuckDuckGo (cerca de 18%), Bing (cerca de 7%) e Brave (cerca de 6%). As páginas do PromptQuorum também aparecem como fontes citadas nas respostas de IA do Google.',
      footnote:
        'Os números vêm do Google Search Console (28 dias até 15 de novembro de 2026) e do Umami (1 a 8 de novembro de 2026). Próxima atualização: meados de dezembro de 2026.',
    },
    stats: {
      heading: 'Tráfego ao vivo',
      viewsLabel: 'Visualizações de página, últimas 24 horas',
      viewsWindow: 'Últimas {hours} horas até {end} UTC',
      gscLabel: 'Cliques da busca do Google em {date}',
      source: 'Fonte: Umami / Google Search Console',
      gscNote: 'O Google Search Console publica os dados com cerca de dois dias de atraso, por isso mostramos o último dia disponível.',
      countries: { heading: 'Cliques da busca do Google por país', note: 'Os {n} principais países, de {from} a {to}. Participação no total de cliques da busca do Google neste período.' },
      messages: { neutral: 'Leitores de todo o mundo usam o PromptQuorum todos os dias.' },
    },
  },
  ar: {
    metaTitle: 'الشركاء والإعلان | PromptQuorum',
    metaDescription:
      'يرحّب PromptQuorum بالشراكات في مجال الذكاء الاصطناعي المحلي: العتاد والبرمجيات والأدوات والبنية التحتية. لا نتبادل الروابط ولا ننشر محتوى مدفوعًا. الإعلانات اعتبارًا من 2027.',
    home: 'PromptQuorum',
    breadcrumb: 'الشركاء والإعلان',
    h1: 'الشركاء والإعلان',
    subtitle: 'التعاون مع PromptQuorum: ما نرحّب به وما لا نقبله.',
    partners: {
      heading: 'الشركاء',
      intro:
        'يرحّب PromptQuorum بالشراكات مع الشركات العاملة في الذكاء الاصطناعي المحلي: العتاد والبرمجيات والأدوات والبنية التحتية.',
      contact: 'راسلونا على {email} مع مقترح محدد: من أنتم، وماذا تقدّمون، وما الذي تتصورونه.',
      disclaimerTitle: 'ما لا نقوم به',
      disclaimer:
        'لا نقوم بتبادل الروابط. ولا نقبل أي مقابل مادي لنشر روابط أو مقالات ضيوف أو مقالات مدونة برعاية. لن يتم الرد على الطلبات من هذا النوع.',
      openHeading: 'ما نرحّب به',
      open: [
        'التعاون في المنتجات',
        'التكاملات التقنية',
        'الاختبار العملي ومراجعة العتاد أو البرمجيات وفق شروطنا التحريرية الخاصة',
        'شراكات البيانات والأبحاث',
        'محتوى يُطوَّر بالتعاون مع بقاء السيطرة التحريرية الكاملة لدينا',
      ],
    },
    advertising: {
      heading: 'الإعلان (نظرة مستقبلية)',
      text:
        'لا توجد حاليًا أي أنشطة إعلانية أو رعاية مدفوعة على PromptQuorum. اعتبارًا من 2027 نخطط لفتح فرص مختارة للإعلان والرعاية، بناءً على عقود ومع وسم واضح واستقلال تحريري. يمكن للشركات المهتمة التواصل الآن ليتم أخذها في الاعتبار: {email}.',
    },
    audience: {
      heading: 'من يقرأ PromptQuorum',
      intro:
        'يرتاد الناس PromptQuorum عندما يتوقفون عن سؤال ما الذي يمكن للذكاء الاصطناعي فعله، ويبدؤون بسؤال ما الذي يمكنهم تشغيله بأنفسهم: أي نموذج يناسب عتادهم، وأي تطبيق يعمل على هاتفهم، وأي حاسوب مصغّر (Mini PC) يمكن أن يعمل كصندوق ذكاء اصطناعي يبقى يعمل باستمرار في المنزل. يصل القرّاء وقرار شراء أو إعداد أمامهم، ويبقون للقراءة.',
      metricsHeading: 'الأرقام',
      metrics: [
        { label: 'نقرات بحث Google', value: '63,347 خلال 28 يومًا', note: 'حوالي 2,260 يوميًا' },
        { label: 'مرات ظهور بحث Google', value: '3.69 مليون خلال 28 يومًا', note: 'حوالي 132,000 يوميًا' },
        { label: 'متوسط ترتيب Google', value: 'حوالي 6', note: 'الصفحة الأولى من النتائج' },
        { label: 'نقرات بحث Google، 3 أشهر', value: 'حوالي 159,000', note: 'من 14 أغسطس إلى 13 نوفمبر 2026' },
        { label: 'الظهور في إجابات الذكاء الاصطناعي من Google', value: '3.1 مليون ظهور', note: 'آخر 3 أشهر' },
        { label: 'متوسط مدة الزيارة', value: 'من 4 إلى 5 دقائق تقريبًا', note: 'Umami، من 1 إلى 8 نوفمبر 2026' },
        { label: 'اللغات', value: '9', note: 'EN، DE، FR، ES، PT، JA، KO، ZH، AR' },
        { label: 'الصفحات', value: 'حوالي 9,000', note: 'على مستوى الموقع كله' },
      ],
      metricsAsOf: 'لقطة الشاشة والأرقام أعلاه مأخوذة بتاريخ 18 نوفمبر 2026.',
      countriesIntro:
        'لا يتركّز القرّاء في سوق واحدة. تساهم كل من اليابان والولايات المتحدة وكوريا الجنوبية وألمانيا بنسبة 12 إلى 16 بالمئة من نقرات بحث Google، ومجتمعة تتجاوز النصف. كل صفحة متوفرة بجميع 9 لغات، لذا يمكن للشركات التي تبيع في اليابان أو كوريا أو ألمانيا أو فرنسا الوصول إلى القرّاء هناك بلغتهم الخاصة. يتحدّث التوزيع المباشر حسب الدولة أدناه تلقائيًا.',
      whoHeading: 'من هم القرّاء',
      who: [
        'يستخدم معظم الزوّار حاسوبًا محمولًا أو مكتبيًا؛ وتظهر أنظمة Windows و macOS و iOS و Android و Linux جميعها في توزيع الأجهزة.',
        'يبحث القرّاء عن أدوات وتهيئات محدّدة: LM Studio، Open WebUI، SillyTavern، KoboldCpp، Automatic1111، Home Assistant، DGX Spark، تجهيزات eGPU.',
        'يصل نحو ربع الزوّار عبر محركات بحث تُركّز على الخصوصية مثل DuckDuckGo و Brave و Ecosia و Qwant.',
        'يتصفّح نحو 39% من الزوّار الموقع بلغة غير الإنجليزية.',
      ],
      whatHeading: 'ماذا يقرؤون',
      what: [
        'أدلة تطبيقات الذكاء الاصطناعي المحلي لأندرويد وآيفون وماك.',
        'أدلة الحواسيب المصغّرة لتشغيل نماذج محلية وAMD وHome Assistant وخوادم Ollama.',
        'أدلة العتاد الخاصة بوحدات معالجة الرسوميات وApple Silicon والأجهزة التي تعمل بالمعالج فقط والأجهزة الاقتصادية.',
        'مقارنات النماذج والأدوات، بما فيها مساعدات الترميز وإضافات بيئات التطوير والواجهات الأمامية.',
      ],
      fromHeading: 'من أين تأتي هذه الجماهير',
      from:
        'البحث هو القناة الرئيسية. أحالت Google نحو 55% من الزوّار خلال الفترة المقاسة، تلتها DuckDuckGo (نحو 18%) وBing (نحو 7%) وBrave (نحو 6%). تظهر صفحات PromptQuorum أيضًا كمصادر مُقتبَسة داخل إجابات الذكاء الاصطناعي من Google.',
      footnote:
        'الأرقام مأخوذة من Google Search Console (28 يومًا حتى 15 نوفمبر 2026) ومن Umami (من 1 إلى 8 نوفمبر 2026). التحديث التالي: منتصف ديسمبر 2026.',
    },
    stats: {
      heading: 'حركة الزيارات المباشرة',
      viewsLabel: 'مشاهدات الصفحات، آخر 24 ساعة',
      viewsWindow: 'آخر {hours} ساعة حتى {end} UTC',
      gscLabel: 'نقرات بحث Google بتاريخ {date}',
      source: 'المصدر: Umami / Google Search Console',
      gscNote: 'تنشر Google Search Console البيانات بتأخير يقارب يومين، لذلك نعرض آخر يوم متاح.',
      countries: { heading: 'نقرات بحث Google حسب الدولة', note: 'أعلى {n} دولة، من {from} إلى {to}. النسبة من إجمالي نقرات بحث Google في هذه الفترة.' },
      messages: { neutral: 'يستخدم قرّاء من أنحاء العالم PromptQuorum كل يوم.' },
    },
  },
  ko: {
    metaTitle: '파트너 및 광고 | PromptQuorum',
    metaDescription:
      'PromptQuorum은 로컬 AI(하드웨어, 소프트웨어, 도구, 인프라) 분야의 파트너십을 환영합니다. 링크 교환이나 유료 게재는 하지 않습니다. 광고는 2027년부터 계획 중입니다.',
    home: 'PromptQuorum',
    breadcrumb: '파트너 및 광고',
    h1: '파트너 및 광고',
    subtitle: 'PromptQuorum과의 협업: 환영하는 것과 받지 않는 것.',
    partners: {
      heading: '파트너',
      intro:
        'PromptQuorum은 로컬 AI 분야(하드웨어, 소프트웨어, 도구, 인프라) 기업과의 파트너십을 환영합니다.',
      contact: '귀사의 소개, 제공 내용, 구상하시는 바를 담은 구체적인 제안을 {email}(으)로 보내 주세요.',
      disclaimerTitle: '하지 않는 일',
      disclaimer:
        '링크 교환은 하지 않습니다. 링크 게재, 게스트 포스트, 스폰서 블로그 기사에 대한 대가는 받지 않습니다. 이러한 요청에는 답변하지 않습니다.',
      openHeading: '환영하는 협업',
      open: [
        '제품 협업',
        '기술 연동',
        '저희 편집 원칙에 따른 하드웨어·소프트웨어 실사용 테스트 및 리뷰',
        '데이터 및 연구 파트너십',
        '편집 권한을 저희가 온전히 유지하는 공동 제작 콘텐츠',
      ],
    },
    advertising: {
      heading: '광고(전망)',
      text:
        '현재 PromptQuorum에는 유료 광고나 스폰서십 활동이 없습니다. 2027년부터 계약을 바탕으로, 명확한 표시와 편집 독립성을 지키는 조건에서 일부 광고 및 스폰서십 기회를 열 계획입니다. 관심 있는 기업은 지금 {email}(으)로 연락 주시면 검토 대상에 포함됩니다.',
    },
    audience: {
      heading: 'PromptQuorum을 읽는 사람들',
      intro:
        'PromptQuorum은 사람들이 AI가 무엇을 할 수 있는지를 묻는 대신, 자신이 직접 무엇을 실행할 수 있는지를 묻기 시작할 때 찾는 곳입니다. 자신의 하드웨어에 맞는 모델, 휴대폰에서 작동하는 앱, 집에서 상시 가동되는 AI 박스로 쓸 수 있는 미니 PC. 독자들은 구매나 설정 결정을 앞두고 찾아와 읽습니다.',
      metricsHeading: '주요 수치',
      metrics: [
        { label: 'Google 검색 클릭 수', value: '28일간 63,347회', note: '하루 평균 약 2,260회' },
        { label: 'Google 검색 노출 수', value: '28일간 369만 회', note: '하루 평균 약 132,000회' },
        { label: 'Google 평균 순위', value: '약 6위', note: '검색 결과 첫 페이지' },
        { label: 'Google 검색 클릭 수(3개월)', value: '약 159,000회', note: '2026년 8월 14일~11월 13일' },
        { label: 'Google AI 답변 내 노출', value: '310만 회 노출', note: '최근 3개월' },
        { label: '평균 방문 시간', value: '약 4~5분', note: 'Umami, 2026년 11월 1일~8일' },
        { label: '지원 언어', value: '9개', note: 'EN, DE, FR, ES, PT, JA, KO, ZH, AR' },
        { label: '페이지 수', value: '약 9,000개', note: '사이트 전체' },
      ],
      metricsAsOf: '위 스크린샷과 수치는 2026년 11월 18일 기준입니다.',
      countriesIntro:
        '독자는 한 시장에 집중되어 있지 않습니다. 일본, 미국, 한국, 독일이 각각 Google 검색 클릭의 12~16%를 차지하며, 합산하면 전체의 절반을 넘습니다. 모든 페이지는 9개 언어로 제공되므로, 일본·한국·독일·프랑스에 제품을 판매하는 기업은 해당 지역 독자에게 그들의 언어로 다가갈 수 있습니다. 아래의 실시간 국가별 현황은 자동으로 갱신됩니다.',
      whoHeading: '독자층의 특징',
      who: [
        '대부분의 방문자는 노트북이나 데스크톱을 사용합니다. Windows, macOS, iOS, Android, Linux가 모두 기기 구성에 포함되어 있습니다.',
        '독자들은 LM Studio, Open WebUI, SillyTavern, KoboldCpp, Automatic1111, Home Assistant, DGX Spark, eGPU 구성 등 구체적인 도구와 설정을 검색합니다.',
        '방문자의 약 4분의 1은 DuckDuckGo, Brave, Ecosia, Qwant 등 프라이버시 중심 검색엔진을 통해 유입됩니다.',
        '방문자의 약 39%는 영어가 아닌 언어로 사이트를 이용합니다.',
      ],
      whatHeading: '읽는 콘텐츠',
      what: [
        'Android, iPhone, Mac용 로컬 AI 앱 가이드.',
        '로컬 LLM, AMD, Home Assistant, Ollama 서버 구성을 위한 미니 PC 가이드.',
        'GPU, Apple Silicon, CPU 전용 구성, 저가형 기기를 다루는 하드웨어 가이드.',
        '코딩 어시스턴트, IDE 플러그인, 프런트엔드를 포함한 모델 및 도구 비교.',
      ],
      fromHeading: '독자의 유입 경로',
      from:
        '검색이 주요 유입 경로입니다. 측정 기간 동안 Google이 방문자의 약 55%를 유입시켰으며, DuckDuckGo(약 18%), Bing(약 7%), Brave(약 6%)가 뒤를 이었습니다. PromptQuorum의 페이지는 Google의 AI 답변 안에서 인용 출처로도 나타납니다.',
      footnote:
        '수치는 Google Search Console(2026년 11월 15일까지의 28일간)과 Umami(2026년 11월 1일~8일)에서 가져온 것입니다. 다음 업데이트: 2026년 12월 중순.',
    },
    stats: {
      heading: '실시간 방문 현황',
      viewsLabel: '페이지뷰, 최근 24시간',
      viewsWindow: '최근 {hours}시간({end} UTC까지)',
      gscLabel: '{date} Google 검색 클릭 수',
      source: '출처: Umami / Google Search Console',
      gscNote: 'Google Search Console은 약 2일 늦게 데이터를 제공하므로, 확인 가능한 가장 최근 날짜의 수치를 표시합니다.',
      countries: { heading: '국가별 Google 검색 클릭 수', note: '상위 {n}개국, {from}부터 {to}까지. 이 기간 전체 Google 검색 클릭에서 차지하는 비율입니다.' },
      messages: { neutral: '전 세계의 독자들이 매일 PromptQuorum을 이용하고 있습니다.' },
    },
  },
}
