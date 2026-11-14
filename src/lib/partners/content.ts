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
  stats: {
    heading: string
    viewsLabel: string
    /** {hours}, {end} */
    viewsWindow: string
    /** {date} */
    gscLabel: string
    na: string
    source: string
    gscNote: string
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
    stats: {
      heading: 'Live traffic',
      viewsLabel: 'Page views, last 24 hours',
      viewsWindow: 'Last {hours} hours until {end} UTC',
      gscLabel: 'Google search clicks on {date}',
      na: 'n/a',
      source: 'Source: Umami / Google Search Console',
      gscNote: 'Google Search Console publishes data with a delay of about two days, so it shows the latest available day.',
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
    stats: {
      heading: 'Live-Zugriffszahlen',
      viewsLabel: 'Seitenaufrufe, letzte 24 Stunden',
      viewsWindow: 'Letzte {hours} Stunden bis {end} UTC',
      gscLabel: 'Google-Suchklicks am {date}',
      na: 'k. A.',
      source: 'Quelle: Umami / Google Search Console',
      gscNote: 'Die Google Search Console liefert Daten mit rund zwei Tagen Verzögerung und zeigt daher den letzten verfügbaren Tag.',
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
    stats: {
      heading: 'Trafic en direct',
      viewsLabel: 'Pages vues, dernières 24 heures',
      viewsWindow: 'Dernières {hours} heures jusqu\'au {end} UTC',
      gscLabel: 'Clics depuis la recherche Google le {date}',
      na: 'n. d.',
      source: 'Source : Umami / Google Search Console',
      gscNote: "Google Search Console publie ses données avec environ deux jours de décalage ; le chiffre affiché correspond donc au dernier jour disponible.",
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
    stats: {
      heading: 'ライブアクセス状況',
      viewsLabel: 'ページビュー（直近24時間）',
      viewsWindow: '直近{hours}時間（{end} UTCまで）',
      gscLabel: '{date}のGoogle検索クリック数',
      na: '取得不可',
      source: '出典：Umami / Google Search Console',
      gscNote: 'Google Search Consoleのデータは約2日遅れで公開されるため、取得できた最新の日の数値を表示しています。',
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
    stats: {
      heading: '实时访问数据',
      viewsLabel: '页面浏览量（最近 24 小时）',
      viewsWindow: '最近 {hours} 小时，截至 {end} UTC',
      gscLabel: '{date} 的 Google 搜索点击量',
      na: '暂无',
      source: '数据来源：Umami / Google Search Console',
      gscNote: 'Google Search Console 的数据约有两天延迟，因此这里显示的是可获得的最新一天。',
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
    stats: {
      heading: 'Tráfico en directo',
      viewsLabel: 'Páginas vistas, últimas 24 horas',
      viewsWindow: 'Últimas {hours} horas hasta el {end} UTC',
      gscLabel: 'Clics de búsqueda de Google el {date}',
      na: 'n. d.',
      source: 'Fuente: Umami / Google Search Console',
      gscNote: 'Google Search Console publica los datos con unos dos días de retraso, por lo que se muestra el último día disponible.',
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
    stats: {
      heading: 'Tráfego ao vivo',
      viewsLabel: 'Visualizações de página, últimas 24 horas',
      viewsWindow: 'Últimas {hours} horas até {end} UTC',
      gscLabel: 'Cliques da busca do Google em {date}',
      na: 'n/d',
      source: 'Fonte: Umami / Google Search Console',
      gscNote: 'O Google Search Console publica os dados com cerca de dois dias de atraso, por isso mostramos o último dia disponível.',
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
    stats: {
      heading: 'حركة الزيارات المباشرة',
      viewsLabel: 'مشاهدات الصفحات، آخر 24 ساعة',
      viewsWindow: 'آخر {hours} ساعة حتى {end} UTC',
      gscLabel: 'نقرات بحث Google بتاريخ {date}',
      na: 'غير متاح',
      source: 'المصدر: Umami / Google Search Console',
      gscNote: 'تنشر Google Search Console البيانات بتأخير يقارب يومين، لذلك نعرض آخر يوم متاح.',
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
    stats: {
      heading: '실시간 방문 현황',
      viewsLabel: '페이지뷰, 최근 24시간',
      viewsWindow: '최근 {hours}시간({end} UTC까지)',
      gscLabel: '{date} Google 검색 클릭 수',
      na: '정보 없음',
      source: '출처: Umami / Google Search Console',
      gscNote: 'Google Search Console은 약 2일 늦게 데이터를 제공하므로, 확인 가능한 가장 최근 날짜의 수치를 표시합니다.',
      messages: { neutral: '전 세계의 독자들이 매일 PromptQuorum을 이용하고 있습니다.' },
    },
  },
}
