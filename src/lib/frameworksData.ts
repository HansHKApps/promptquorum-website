export type FrameworkLang = 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

export type FrameworkTranslation = {
  tagline: string
  fields: { name: string; description: string }[]
  bestFor: string[]
  notFor: string[]
  example: { scenario: string; prompt: string }
  faq: { q: string; a: string }[]
  seoTitle: string
  metaDescription: string
  heroImage?: string
  bestForImage?: string
}

export type Framework = {
  slug: string
  name: string
  expansion: string
  tagline: string
  complexity: 'Low' | 'Medium' | 'High'
  fields: { name: string; description: string }[]
  bestFor: string[]
  notFor: string[]
  example: { scenario: string; prompt: string }
  badge?: string
  related: string[]
  faq: { q: string; a: string }[]
  seoTitle?: string
  metaDescription?: string
  publishDate?: string
  dateModified?: string
  heroImage?: string
  bestForImage?: string
  /** Per-language overrides. Field `name` values (e.g. "Context", "Role") stay in
   *  English everywhere — they're the mnemonic letters (C-R-A-F-T) and translating
   *  them would break the acronym. Only descriptions/prose are localized. */
  translations?: Partial<Record<FrameworkLang, FrameworkTranslation>>
}

export const FRAMEWORKS: Framework[] = [
  {
    slug: 'co-star',
    name: 'CO-STAR',
    expansion: 'Context · Objective · Style · Tone · Audience · Response',
    tagline: 'The Singapore GPT-4 competition winner. Maximum control over voice, audience, and output format.',
    seoTitle: 'CO-STAR Framework: 6 Fields That Won a GPT-4 Contest',
    metaDescription: 'CO-STAR beat every entry in Singapore\'s GPT-4 contest by splitting Style from Tone. See all 6 fields, a real example, and CRAFT comparison.',
    heroImage: '/images/frameworks-co-star-fields-overview-hero-en.webp',
    bestForImage: '/images/frameworks-co-star-best-for-hero-en.webp',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'Medium',
    badge: 'Won Singapore GPT-4 Competition',
    fields: [
      { name: 'Context', description: 'Background information the AI needs to understand the task and situation.' },
      { name: 'Objective', description: 'The specific goal or outcome you want the AI to achieve.' },
      { name: 'Style', description: 'The writing style — e.g., formal, conversational, journalistic, academic.' },
      { name: 'Tone', description: 'The emotional register — e.g., persuasive, empathetic, authoritative, friendly.' },
      { name: 'Audience', description: 'Who the output is for. Shapes vocabulary, depth, and assumptions.' },
      { name: 'Response', description: 'The exact output format — e.g., bullet list, 500-word article, JSON, table.' },
    ],
    bestFor: [
      'Business communication and marketing copy',
      'Content where voice and tone matter (brand writing)',
      'Professional writing for a specific audience',
      'Any task where you need to control style separately from tone',
    ],
    notFor: [
      'Quick one-off queries where structure adds no value',
      'Sequential multi-step tasks (use RISEN instead)',
      'Technical tasks where examples matter more (use TRACE)',
    ],
    example: {
      scenario: 'Writing a product launch email for a SaaS tool targeting CTOs',
      prompt: 'Context: PromptQuorum is a multi-model AI tool launching in July 2026. Objective: Write a product launch email that drives signups. Style: Clear and direct, no fluff. Tone: Confident and professional. Audience: CTOs at mid-size tech companies. Response: 200-word email with subject line.',
    },
    related: ['craft', 'specs', 'rtf'],
    faq: [
      { q: 'What does CO-STAR stand for?', a: 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response — six fields that give you precise control over AI output.' },
      { q: 'Why did CO-STAR win the Singapore GPT-4 competition?', a: 'CO-STAR won because it separates Style (presentation) from Tone (emotion), giving more precise control than frameworks that treat them as one field.' },
      { q: 'When should I use CO-STAR vs CRAFT?', a: 'Use CO-STAR when you need fine-grained control over voice and audience. Use CRAFT when you want a Role-based framing with a clear Target persona. Learn how to measure the effectiveness of your CO-STAR prompts at https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality.' },
    ],
    translations: {
      de: {
        tagline: 'Der Gewinner des Singapur-GPT-4-Wettbewerbs. Maximale Kontrolle über Stimme, Zielgruppe und Ausgabeformat.',
        seoTitle: 'CO-STAR Framework: 6 Felder, die einen GPT-4-Contest gewannen',
        metaDescription: 'CO-STAR schlug jeden Beitrag im GPT-4-Wettbewerb aus Singapur, weil es Style von Tone trennt. Alle 6 Felder, ein echtes Beispiel und der Vergleich mit CRAFT.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-de.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-de.webp',
        fields: [
          { name: 'Context', description: 'Hintergrundinformationen, die die KI braucht, um Aufgabe und Situation zu verstehen.' },
          { name: 'Objective', description: 'Das konkrete Ziel bzw. Ergebnis, das die KI erreichen soll.' },
          { name: 'Style', description: 'Der Schreibstil — z. B. formell, gesprächsnah, journalistisch, akademisch.' },
          { name: 'Tone', description: 'Das emotionale Register — z. B. überzeugend, einfühlsam, autoritativ, freundlich.' },
          { name: 'Audience', description: 'Für wen die Ausgabe bestimmt ist. Bestimmt Wortwahl, Tiefe und Annahmen.' },
          { name: 'Response', description: 'Das exakte Ausgabeformat — z. B. Aufzählung, 500-Wörter-Artikel, JSON, Tabelle.' },
        ],
        bestFor: [
          'Businesskommunikation und Marketingtexte',
          'Inhalte, bei denen Stimme und Tonalität entscheidend sind (Markenkommunikation)',
          'Professionelle Texte für eine klar definierte Zielgruppe',
          'Aufgaben, bei denen Style und Tone getrennt gesteuert werden müssen',
        ],
        notFor: [
          'Kurze Einzelanfragen, bei denen Struktur keinen Mehrwert bringt',
          'Sequenzielle Mehrschritt-Aufgaben (stattdessen RISEN verwenden)',
          'Technische Aufgaben, bei denen Beispiele wichtiger sind (stattdessen TRACE verwenden)',
        ],
        example: {
          scenario: 'Eine Produkt-Launch-E-Mail für ein SaaS-Tool schreiben, das sich an CTOs richtet',
          prompt: 'Context: PromptQuorum ist ein Multi-Modell-KI-Tool, das im Juli 2026 startet. Objective: Schreibe eine Produkt-Launch-E-Mail, die Anmeldungen generiert. Style: Klar und direkt, ohne Füllwörter. Tone: Selbstbewusst und professionell. Audience: CTOs bei mittelgroßen Tech-Unternehmen. Response: 200-Wörter-E-Mail mit Betreffzeile.',
        },
        faq: [
          { q: 'Wofür steht CO-STAR?', a: 'CO-STAR steht für Context, Objective, Style, Tone, Audience und Response — sechs Felder, die dir präzise Kontrolle über die KI-Ausgabe geben.' },
          { q: 'Warum hat CO-STAR den Singapur-GPT-4-Wettbewerb gewonnen?', a: 'CO-STAR gewann, weil es Style (Darstellung) von Tone (Emotion) trennt und dadurch präzisere Kontrolle ermöglicht als Frameworks, die beides als ein Feld behandeln.' },
          { q: 'Wann sollte ich CO-STAR statt CRAFT verwenden?', a: 'Verwende CO-STAR, wenn du feingranulare Kontrolle über Stimme und Zielgruppe brauchst. Verwende CRAFT, wenn du eine rollenbasierte Herangehensweise mit klar definierter Zielperson willst. Wie du die Qualität deiner CO-STAR-Prompts misst, erfährst du unter https://www.promptquorum.com/de/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      fr: {
        tagline: 'Le grand gagnant du concours GPT-4 de Singapour. Un contrôle maximal sur la voix, le public et le format de sortie.',
        seoTitle: 'Framework CO-STAR : les 6 champs qui ont gagné un concours GPT-4',
        metaDescription: 'CO-STAR a battu toutes les autres méthodes au concours GPT-4 de Singapour en séparant Style et Tone. Découvrez les 6 champs, un exemple concret et la comparaison avec CRAFT.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-fr.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-fr.webp',
        fields: [
          { name: 'Context', description: 'Les informations de fond dont l\'IA a besoin pour comprendre la tâche et la situation.' },
          { name: 'Objective', description: 'L\'objectif précis ou le résultat que vous attendez de l\'IA.' },
          { name: 'Style', description: 'Le style rédactionnel — par exemple formel, conversationnel, journalistique, académique.' },
          { name: 'Tone', description: 'Le registre émotionnel — par exemple persuasif, empathique, autoritaire, chaleureux.' },
          { name: 'Audience', description: 'À qui s\'adresse la sortie. Détermine le vocabulaire, le niveau de détail et les présupposés.' },
          { name: 'Response', description: 'Le format de sortie exact — par exemple liste à puces, article de 500 mots, JSON, tableau.' },
        ],
        bestFor: [
          'La communication d\'entreprise et les textes marketing',
          'Les contenus où la voix et le ton comptent (rédaction de marque)',
          'La rédaction professionnelle pour un public précis',
          'Toute tâche nécessitant de contrôler le style indépendamment du ton',
        ],
        notFor: [
          'Les requêtes ponctuelles rapides où la structure n\'apporte rien',
          'Les tâches séquentielles en plusieurs étapes (préférer RISEN)',
          'Les tâches techniques où les exemples comptent plus (préférer TRACE)',
        ],
        example: {
          scenario: 'Rédiger un e-mail de lancement produit pour un outil SaaS destiné aux CTO',
          prompt: 'Context: PromptQuorum est un outil d\'IA multi-modèles qui sera lancé en juillet 2026. Objective: Rédige un e-mail de lancement produit qui génère des inscriptions. Style: Clair et direct, sans fioritures. Tone: Confiant et professionnel. Audience: CTO d\'entreprises tech de taille moyenne. Response: E-mail de 200 mots avec objet.',
        },
        faq: [
          { q: 'Que signifie CO-STAR ?', a: 'CO-STAR signifie Context, Objective, Style, Tone, Audience et Response — six champs qui vous donnent un contrôle précis sur la sortie de l\'IA.' },
          { q: 'Pourquoi CO-STAR a-t-il gagné le concours GPT-4 de Singapour ?', a: 'CO-STAR a gagné parce qu\'il sépare le Style (la présentation) du Tone (l\'émotion), offrant un contrôle plus fin que les frameworks qui les traitent comme un seul champ.' },
          { q: 'Quand utiliser CO-STAR plutôt que CRAFT ?', a: 'Utilisez CO-STAR quand vous avez besoin d\'un contrôle fin sur la voix et le public. Utilisez CRAFT quand vous voulez une approche basée sur un rôle avec une cible bien définie. Pour apprendre à mesurer l\'efficacité de vos prompts CO-STAR, consultez https://www.promptquorum.com/fr/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      es: {
        tagline: 'El ganador del concurso GPT-4 de Singapur. Control máximo sobre la voz, el público y el formato de salida.',
        seoTitle: 'Framework CO-STAR: los 6 campos que ganaron un concurso GPT-4',
        metaDescription: 'CO-STAR venció a todos los rivales en el concurso GPT-4 de Singapur al separar Style de Tone. Descubre los 6 campos, un ejemplo real y la comparación con CRAFT.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-es.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-es.webp',
        fields: [
          { name: 'Context', description: 'La información de fondo que la IA necesita para entender la tarea y la situación.' },
          { name: 'Objective', description: 'El objetivo concreto o resultado que quieres que la IA logre.' },
          { name: 'Style', description: 'El estilo de redacción — por ejemplo, formal, conversacional, periodístico, académico.' },
          { name: 'Tone', description: 'El registro emocional — por ejemplo, persuasivo, empático, autoritario, cercano.' },
          { name: 'Audience', description: 'A quién va dirigida la salida. Determina el vocabulario, la profundidad y los supuestos.' },
          { name: 'Response', description: 'El formato exacto de salida — por ejemplo, lista con viñetas, artículo de 500 palabras, JSON, tabla.' },
        ],
        bestFor: [
          'Comunicación empresarial y copy de marketing',
          'Contenido donde la voz y el tono importan (redacción de marca)',
          'Escritura profesional para un público específico',
          'Cualquier tarea donde necesites controlar el estilo por separado del tono',
        ],
        notFor: [
          'Consultas puntuales rápidas donde la estructura no aporta valor',
          'Tareas secuenciales de varios pasos (usa RISEN en su lugar)',
          'Tareas técnicas donde los ejemplos importan más (usa TRACE en su lugar)',
        ],
        example: {
          scenario: 'Escribir un correo de lanzamiento de producto para una herramienta SaaS dirigida a CTOs',
          prompt: 'Context: PromptQuorum es una herramienta de IA multimodelo que se lanza en julio de 2026. Objective: Escribe un correo de lanzamiento de producto que genere registros. Style: Claro y directo, sin relleno. Tone: Confiado y profesional. Audience: CTOs de empresas tecnológicas medianas. Response: Correo de 200 palabras con asunto.',
        },
        faq: [
          { q: '¿Qué significa CO-STAR?', a: 'CO-STAR significa Context, Objective, Style, Tone, Audience y Response — seis campos que te dan control preciso sobre la salida de la IA.' },
          { q: '¿Por qué ganó CO-STAR el concurso GPT-4 de Singapur?', a: 'CO-STAR ganó porque separa el Style (la presentación) del Tone (la emoción), lo que da un control más preciso que los frameworks que tratan ambos como un solo campo.' },
          { q: '¿Cuándo usar CO-STAR en lugar de CRAFT?', a: 'Usa CO-STAR cuando necesites un control muy fino sobre la voz y el público. Usa CRAFT cuando quieras un enfoque basado en un rol con un target bien definido. Aprende a medir la efectividad de tus prompts CO-STAR en https://www.promptquorum.com/es/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      pt: {
        tagline: 'O vencedor do concurso GPT-4 de Singapura. Controle máximo sobre voz, público e formato de saída.',
        seoTitle: 'Framework CO-STAR: os 6 campos que venceram um concurso GPT-4',
        metaDescription: 'O CO-STAR venceu todos os concorrentes no concurso GPT-4 de Singapura ao separar Style de Tone. Veja os 6 campos, um exemplo real e a comparação com o CRAFT.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-pt.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-pt.webp',
        fields: [
          { name: 'Context', description: 'As informações de contexto que a IA precisa para entender a tarefa e a situação.' },
          { name: 'Objective', description: 'O objetivo específico ou resultado que você quer que a IA alcance.' },
          { name: 'Style', description: 'O estilo de escrita — por exemplo, formal, conversacional, jornalístico, acadêmico.' },
          { name: 'Tone', description: 'O registro emocional — por exemplo, persuasivo, empático, autoritativo, amigável.' },
          { name: 'Audience', description: 'Para quem é a saída. Define vocabulário, profundidade e premissas.' },
          { name: 'Response', description: 'O formato exato de saída — por exemplo, lista com marcadores, artigo de 500 palavras, JSON, tabela.' },
        ],
        bestFor: [
          'Comunicação empresarial e textos de marketing',
          'Conteúdo em que voz e tom importam (redação de marca)',
          'Escrita profissional para um público específico',
          'Qualquer tarefa em que você precise controlar o estilo separadamente do tom',
        ],
        notFor: [
          'Consultas rápidas e pontuais em que a estrutura não agrega valor',
          'Tarefas sequenciais em múltiplas etapas (use o RISEN)',
          'Tarefas técnicas em que exemplos importam mais (use o TRACE)',
        ],
        example: {
          scenario: 'Escrever um e-mail de lançamento de produto para uma ferramenta SaaS voltada a CTOs',
          prompt: 'Context: A PromptQuorum é uma ferramenta de IA multimodelo com lançamento em julho de 2026. Objective: Escreva um e-mail de lançamento de produto que gere cadastros. Style: Claro e direto, sem enrolação. Tone: Confiante e profissional. Audience: CTOs de empresas de tecnologia de médio porte. Response: E-mail de 200 palavras com linha de assunto.',
        },
        faq: [
          { q: 'O que significa CO-STAR?', a: 'CO-STAR significa Context, Objective, Style, Tone, Audience e Response — seis campos que dão a você controle preciso sobre a saída da IA.' },
          { q: 'Por que o CO-STAR venceu o concurso GPT-4 de Singapura?', a: 'O CO-STAR venceu porque separa o Style (a apresentação) do Tone (a emoção), oferecendo um controle mais preciso do que frameworks que tratam os dois como um único campo.' },
          { q: 'Quando usar CO-STAR em vez de CRAFT?', a: 'Use o CO-STAR quando precisar de controle refinado sobre voz e público. Use o CRAFT quando quiser uma abordagem baseada em papel (Role) com um público-alvo bem definido. Aprenda a medir a eficácia dos seus prompts CO-STAR em https://www.promptquorum.com/pt/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      ja: {
        tagline: 'シンガポールのGPT-4コンテスト優勝フレームワーク。声のトーン・読者・出力形式を最大限にコントロールできる。',
        seoTitle: 'CO-STARフレームワーク:GPT-4コンテストを制した6要素',
        metaDescription: 'CO-STARはStyleとToneを分離することで、シンガポールのGPT-4コンテストの全出場作を上回った。6つの要素、実例、CRAFTとの比較を解説。',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-ja.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-ja.webp',
        fields: [
          { name: 'Context', description: 'AIがタスクと状況を理解するために必要な背景情報。' },
          { name: 'Objective', description: 'AIに達成してほしい具体的なゴールや成果。' },
          { name: 'Style', description: '文章のスタイル——フォーマル、会話調、ジャーナリスティック、学術的など。' },
          { name: 'Tone', description: '感情的なトーン——説得力のある、共感的な、権威的な、親しみやすいなど。' },
          { name: 'Audience', description: '出力の対象読者。語彙・深さ・前提知識を決める要素。' },
          { name: 'Response', description: '出力形式の指定——箇条書き、500語の記事、JSON、表など。' },
        ],
        bestFor: [
          'ビジネスコミュニケーションやマーケティングコピー',
          '声のトーンが重要になるコンテンツ(ブランドライティング)',
          '特定の読者層向けのプロフェッショナルな文章',
          'スタイルとトーンを別々にコントロールしたいタスク全般',
        ],
        notFor: [
          '構造化が価値を生まない一回限りの簡単な質問',
          '複数ステップの逐次的なタスク(代わりにRISENを使う)',
          '実例が重要になる技術的タスク(代わりにTRACEを使う)',
        ],
        example: {
          scenario: 'CTO向けのSaaSツールの製品ローンチメールを書く',
          prompt: 'Context: PromptQuorumは2026年7月にローンチするマルチモデルAIツールです。Objective: 登録を促す製品ローンチメールを書いてください。Style: 無駄のない明快な文体。Tone: 自信に満ちたプロフェッショナルな口調。Audience: 中規模テック企業のCTO。Response: 件名付きの200語のメール。',
        },
        faq: [
          { q: 'CO-STARとは何の略ですか?', a: 'CO-STARはContext、Objective、Style、Tone、Audience、Responseの略で、AIの出力を精密にコントロールする6つの要素を表します。' },
          { q: 'なぜCO-STARはシンガポールのGPT-4コンテストで優勝したのですか?', a: 'CO-STARはStyle(表現方法)とTone(感情)を分けて扱うことで、両者を一つの要素として扱う他のフレームワークより精密なコントロールを実現したため優勝しました。' },
          { q: 'CO-STARとCRAFTはどちらを使うべきですか?', a: '声のトーンや読者層を細かくコントロールしたい場合はCO-STARを使ってください。明確なターゲット像を持つロールベースの構成にしたい場合はCRAFTが適しています。CO-STARプロンプトの効果測定方法はhttps://www.promptquorum.com/ja/prompt-engineering/how-to-evaluate-prompt-qualityで解説しています。' },
        ],
      },
      zh: {
        tagline: '新加坡GPT-4大赛冠军框架。对语气、受众和输出格式拥有最大程度的控制力。',
        seoTitle: 'CO-STAR框架:赢得GPT-4大赛的6个字段',
        metaDescription: 'CO-STAR通过将Style与Tone分离,击败了新加坡GPT-4大赛的所有对手。了解全部6个字段、真实案例,以及与CRAFT的对比。',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-zh.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-zh.webp',
        fields: [
          { name: 'Context', description: 'AI理解任务和情境所需的背景信息。' },
          { name: 'Objective', description: '你希望AI实现的具体目标或结果。' },
          { name: 'Style', description: '写作风格——例如正式、口语化、新闻体、学术风格。' },
          { name: 'Tone', description: '情感基调——例如有说服力、富有同理心、权威、友好。' },
          { name: 'Audience', description: '输出内容面向的受众,决定用词、深度和默认假设。' },
          { name: 'Response', description: '确切的输出格式——例如项目符号列表、500字文章、JSON、表格。' },
        ],
        bestFor: [
          '商务沟通和营销文案',
          '语气与风格至关重要的内容(品牌写作)',
          '面向特定受众的专业写作',
          '需要将风格与语气分开控制的任何任务',
        ],
        notFor: [
          '结构化并无增益的简单一次性提问',
          '需要按顺序完成的多步骤任务(请改用RISEN)',
          '案例比结构更重要的技术性任务(请改用TRACE)',
        ],
        example: {
          scenario: '为面向CTO的SaaS工具撰写产品发布邮件',
          prompt: 'Context: PromptQuorum是一款将于2026年7月上线的多模型AI工具。Objective: 撰写一封能带来注册转化的产品发布邮件。Style: 简洁直接,不废话。Tone: 自信而专业。Audience: 中型科技公司的CTO。Response: 200字邮件正文,含主题行。',
        },
        faq: [
          { q: 'CO-STAR代表什么?', a: 'CO-STAR代表Context、Objective、Style、Tone、Audience和Response——这六个字段能让你精确控制AI的输出。' },
          { q: '为什么CO-STAR能赢得新加坡的GPT-4大赛?', a: 'CO-STAR之所以获胜,是因为它将Style(呈现方式)与Tone(情感基调)分开处理,比把两者合并为一个字段的框架提供了更精确的控制。' },
          { q: '什么时候该用CO-STAR而不是CRAFT?', a: '当你需要对语气和受众进行精细控制时,使用CO-STAR;当你想要基于角色设定、并有明确目标人群时,使用CRAFT。想了解如何评估CO-STAR提示词的效果,请访问https://www.promptquorum.com/zh/prompt-engineering/how-to-evaluate-prompt-quality。' },
        ],
      },
      ar: {
        tagline: 'الإطار الفائز في مسابقة GPT-4 بسنغافورة. أقصى قدر من التحكم في نبرة الصوت والجمهور وصيغة المخرجات.',
        seoTitle: 'إطار CO-STAR: 6 حقول فازت بمسابقة GPT-4',
        metaDescription: 'تفوّق CO-STAR على كل المتسابقين في مسابقة GPT-4 بسنغافورة بفصله بين Style وTone. تعرّف على الحقول الـ6 كافة، ومثال حقيقي، ومقارنة مع CRAFT.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-ar.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-ar.webp',
        fields: [
          { name: 'Context', description: 'المعلومات الخلفية التي يحتاجها الذكاء الاصطناعي لفهم المهمة والموقف.' },
          { name: 'Objective', description: 'الهدف أو النتيجة المحددة التي تريد أن يحققها الذكاء الاصطناعي.' },
          { name: 'Style', description: 'أسلوب الكتابة — مثل الرسمي أو الحواري أو الصحفي أو الأكاديمي.' },
          { name: 'Tone', description: 'النبرة العاطفية — مثل المقنعة أو المتعاطفة أو ذات السلطة أو الودية.' },
          { name: 'Audience', description: 'الفئة الموجَّه إليها الناتج. تحدد المفردات ومستوى العمق والافتراضات.' },
          { name: 'Response', description: 'صيغة المخرجات الدقيقة — مثل قائمة نقطية، أو مقال من 500 كلمة، أو JSON، أو جدول.' },
        ],
        bestFor: [
          'التواصل التجاري ونصوص التسويق',
          'المحتوى الذي تهم فيه نبرة الصوت والأسلوب (كتابة العلامة التجارية)',
          'الكتابة الاحترافية لجمهور محدد',
          'أي مهمة تحتاج فيها إلى التحكم في الأسلوب بمعزل عن النبرة',
        ],
        notFor: [
          'الاستفسارات السريعة لمرة واحدة حيث لا يضيف الهيكل أي قيمة',
          'المهام المتسلسلة متعددة الخطوات (استخدم RISEN بدلاً من ذلك)',
          'المهام التقنية التي تكون فيها الأمثلة أهم (استخدم TRACE بدلاً من ذلك)',
        ],
        example: {
          scenario: 'كتابة رسالة إطلاق منتج لأداة SaaS موجهة لمديري التقنية (CTOs)',
          prompt: 'Context: PromptQuorum أداة ذكاء اصطناعي متعددة النماذج تُطلق في يوليو 2026. Objective: اكتب رسالة إطلاق منتج تدفع لزيادة التسجيلات. Style: واضحة ومباشرة، بلا حشو. Tone: واثقة ومهنية. Audience: مديرو التقنية (CTOs) في شركات تقنية متوسطة الحجم. Response: رسالة من 200 كلمة مع عنوان.',
        },
        faq: [
          { q: 'ماذا يعني CO-STAR؟', a: 'يرمز CO-STAR إلى Context وObjective وStyle وTone وAudience وResponse — ستة حقول تمنحك تحكماً دقيقاً في مخرجات الذكاء الاصطناعي.' },
          { q: 'لماذا فاز CO-STAR بمسابقة GPT-4 في سنغافورة؟', a: 'فاز CO-STAR لأنه يفصل بين Style (طريقة العرض) وTone (النبرة العاطفية)، مما يمنح تحكماً أدق مقارنة بالأطر التي تعامل الاثنين كحقل واحد.' },
          { q: 'متى أستخدم CO-STAR بدلاً من CRAFT؟', a: 'استخدم CO-STAR عندما تحتاج إلى تحكم دقيق في نبرة الصوت والجمهور. واستخدم CRAFT عندما تريد صياغة قائمة على الدور مع شخصية مستهدفة واضحة. تعرّف على كيفية قياس فعالية موجهات CO-STAR الخاصة بك على الرابط https://www.promptquorum.com/ar/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      ko: {
        tagline: '싱가포르 GPT-4 대회 우승 프레임워크. 어조와 독자, 출력 형식을 최대한으로 제어할 수 있다.',
        seoTitle: 'CO-STAR 프레임워크: GPT-4 대회를 제패한 6가지 요소',
        metaDescription: 'CO-STAR는 Style과 Tone을 분리해 싱가포르 GPT-4 대회의 모든 참가작을 이겼다. 6가지 요소와 실제 예시, CRAFT와의 비교를 확인해 보세요.',
        heroImage: '/images/frameworks-co-star-fields-overview-hero-ko.webp',
        bestForImage: '/images/frameworks-co-star-best-for-hero-ko.webp',
        fields: [
          { name: 'Context', description: 'AI가 과제와 상황을 이해하는 데 필요한 배경 정보.' },
          { name: 'Objective', description: 'AI가 달성하기를 원하는 구체적인 목표나 결과.' },
          { name: 'Style', description: '글쓰기 스타일 — 예를 들어 격식체, 대화체, 저널리즘풍, 학술적 스타일 등.' },
          { name: 'Tone', description: '감정적 어조 — 예를 들어 설득력 있는, 공감적인, 권위 있는, 친근한 어조 등.' },
          { name: 'Audience', description: '결과물이 향할 대상. 어휘 수준, 깊이, 전제 지식을 결정한다.' },
          { name: 'Response', description: '정확한 출력 형식 — 예를 들어 글머리 기호 목록, 500단어 기사, JSON, 표 등.' },
        ],
        bestFor: [
          '비즈니스 커뮤니케이션과 마케팅 카피',
          '어조와 톤이 중요한 콘텐츠(브랜드 라이팅)',
          '특정 독자를 대상으로 한 전문적인 글쓰기',
          '스타일과 톤을 별도로 제어해야 하는 모든 작업',
        ],
        notFor: [
          '구조화가 별 가치를 더하지 않는 짧고 단발적인 질문',
          '순차적으로 진행되는 다단계 작업(대신 RISEN 사용)',
          '예시가 구조보다 중요한 기술적 작업(대신 TRACE 사용)',
        ],
        example: {
          scenario: 'CTO를 대상으로 한 SaaS 툴의 제품 출시 이메일 작성',
          prompt: 'Context: PromptQuorum은 2026년 7월에 출시되는 멀티 모델 AI 툴입니다. Objective: 가입을 이끌어낼 제품 출시 이메일을 작성하세요. Style: 군더더기 없이 명확하고 직접적으로. Tone: 자신감 있고 전문적으로. Audience: 중견 테크 기업의 CTO. Response: 제목이 포함된 200단어 분량의 이메일.',
        },
        faq: [
          { q: 'CO-STAR는 무엇의 약자인가요?', a: 'CO-STAR는 Context, Objective, Style, Tone, Audience, Response의 약자로, AI 출력을 정밀하게 제어할 수 있는 여섯 가지 요소입니다.' },
          { q: 'CO-STAR는 왜 싱가포르 GPT-4 대회에서 우승했나요?', a: 'CO-STAR는 Style(표현 방식)과 Tone(감정적 어조)을 분리함으로써, 두 요소를 하나로 묶어 다루는 다른 프레임워크보다 더 정밀한 제어가 가능했기 때문에 우승했습니다.' },
          { q: 'CRAFT 대신 CO-STAR는 언제 써야 하나요?', a: '어조와 독자층을 세밀하게 제어해야 할 때는 CO-STAR를 사용하세요. 명확한 타깃 페르소나가 있는 역할 기반 구성을 원할 때는 CRAFT를 사용하세요. CO-STAR 프롬프트의 효과를 측정하는 방법은 https://www.promptquorum.com/ko/prompt-engineering/how-to-evaluate-prompt-quality 에서 확인할 수 있습니다.' },
        ],
      },
    },
  },
  {
    slug: 'craft',
    name: 'CRAFT',
    expansion: 'Context · Role · Action · Format · Target',
    tagline: 'Role-based framing with a clear target audience. Great for marketing, copywriting, and creative work.',
    seoTitle: 'CRAFT Prompt Framework: 5 Fields for On-Brand Copy',
    metaDescription: 'Generic prompts produce generic copy. CRAFT fixes that with a Role field and a defined Target reader. See all 5 fields, a real example, vs CO-STAR.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-15',
    complexity: 'Medium',
    fields: [
      { name: 'Context', description: 'Background the AI needs — what project, product, or situation this relates to.' },
      { name: 'Role', description: 'The persona the AI should adopt — e.g., expert copywriter, senior developer, UX researcher.' },
      { name: 'Action', description: 'The specific task — what you want the AI to do.' },
      { name: 'Format', description: 'How the output should be structured — e.g., numbered list, email, code block, table.' },
      { name: 'Target', description: 'The intended audience for the output. Defines vocabulary, depth, and angle.' },
    ],
    bestFor: [
      'Marketing copy and content creation',
      'Creative writing and storytelling',
      'Any task where a specific expert persona improves quality',
      'Writing targeted at a defined reader',
    ],
    notFor: [
      'Tasks requiring fine-grained tone/style separation (use CO-STAR)',
      'Sequential step-by-step processes (use RISEN)',
      'Tasks where few-shot examples are the key signal (use TRACE)',
    ],
    example: {
      scenario: 'Writing a LinkedIn post for a new AI product launch',
      prompt: 'Context: PromptQuorum is launching a multi-AI comparison tool. Role: You are a B2B SaaS marketing expert. Action: Write a LinkedIn post announcing the product. Format: 3 short paragraphs + 5 hashtags. Target: Startup founders and AI-curious professionals.',
    },
    related: ['co-star', 'rtf', 'google-prompt'],
    faq: [
      { q: 'What does CRAFT stand for?', a: 'CRAFT stands for Context, Role, Action, Format, and Target — five fields that combine role-based framing with a clear audience definition.' },
      { q: 'How is CRAFT different from CO-STAR?', a: 'CRAFT uses a Role field (giving the AI a persona) while CO-STAR splits style and tone separately. CRAFT is simpler; CO-STAR gives more voice control.' },
      { q: 'What is CRAFT best used for?', a: 'CRAFT excels at marketing copy and creative writing where assigning an expert persona and defining a target audience significantly improves output quality. After building CRAFT prompts, evaluate their quality using systematic frameworks at https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality.' },
    ],
    translations: {
      de: {
        tagline: 'Rollenbasiertes Framing mit klar definierter Zielgruppe. Ideal für Marketing, Copywriting und kreative Texte.',
        seoTitle: 'CRAFT Prompt-Framework: 5 Felder für markenkonforme Texte',
        metaDescription: 'Generische Prompts erzeugen generische Texte. CRAFT löst das mit einem Role-Feld und einer klar definierten Zielgruppe. Alle 5 Felder, ein echtes Beispiel, im Vergleich zu CO-STAR.',
        fields: [
          { name: 'Context', description: 'Der Hintergrund, den die KI benötigt — zu welchem Projekt, Produkt oder welcher Situation sich die Anfrage bezieht.' },
          { name: 'Role', description: 'Die Persona, die die KI einnehmen soll — z. B. erfahrener Werbetexter, Senior-Entwickler, UX-Researcher.' },
          { name: 'Action', description: 'Die konkrete Aufgabe — was die KI tun soll.' },
          { name: 'Format', description: 'Wie die Ausgabe strukturiert sein soll — z. B. nummerierte Liste, E-Mail, Codeblock, Tabelle.' },
          { name: 'Target', description: 'Die Zielgruppe der Ausgabe. Bestimmt Wortwahl, Tiefe und Blickwinkel.' },
        ],
        bestFor: [
          'Marketingtexte und Content-Erstellung',
          'Kreatives Schreiben und Storytelling',
          'Aufgaben, bei denen eine konkrete Experten-Persona die Qualität verbessert',
          'Texte für eine klar definierte Leserschaft',
        ],
        notFor: [
          'Aufgaben mit feingranularer Ton-/Stil-Trennung (CO-STAR verwenden)',
          'Sequenzielle Schritt-für-Schritt-Prozesse (RISEN verwenden)',
          'Aufgaben, bei denen Few-Shot-Beispiele entscheidend sind (TRACE verwenden)',
        ],
        example: {
          scenario: 'Einen LinkedIn-Post für den Launch eines neuen KI-Produkts schreiben',
          prompt: 'Context: PromptQuorum launcht ein Tool zum Vergleich mehrerer KI-Modelle. Role: Du bist B2B-SaaS-Marketing-Experte. Action: Schreibe einen LinkedIn-Post zur Produktankündigung. Format: 3 kurze Absätze + 5 Hashtags. Target: Startup-Gründer und KI-interessierte Fachkräfte.',
        },
        faq: [
          { q: 'Wofür steht CRAFT?', a: 'CRAFT steht für Context, Role, Action, Format und Target — fünf Felder, die rollenbasiertes Framing mit einer klaren Zielgruppendefinition kombinieren.' },
          { q: 'Wie unterscheidet sich CRAFT von CO-STAR?', a: 'CRAFT nutzt ein Role-Feld (gibt der KI eine Persona), während CO-STAR Stil und Ton getrennt behandelt. CRAFT ist einfacher; CO-STAR bietet mehr Kontrolle über die Stimme.' },
          { q: 'Wofür eignet sich CRAFT am besten?', a: 'CRAFT eignet sich hervorragend für Marketingtexte und kreatives Schreiben, wenn eine Experten-Persona und eine definierte Zielgruppe die Ausgabequalität deutlich verbessern. Bewerte CRAFT-Prompts anschließend systematisch unter https://www.promptquorum.com/de/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      fr: {
        tagline: 'Un cadrage basé sur un rôle avec un public cible clair. Idéal pour le marketing, la rédaction et les contenus créatifs.',
        seoTitle: 'Framework de prompt CRAFT : 5 champs pour un texte de marque',
        metaDescription: 'Un prompt générique produit un texte générique. CRAFT corrige cela avec un champ Role et un Target bien défini. Les 5 champs, un exemple réel, comparé à CO-STAR.',
        fields: [
          { name: 'Context', description: 'Le contexte dont l\'IA a besoin — projet, produit ou situation concernés par la demande.' },
          { name: 'Role', description: 'Le rôle que l\'IA doit endosser — ex. rédacteur publicitaire expert, développeur senior, UX researcher.' },
          { name: 'Action', description: 'La tâche précise — ce que vous voulez que l\'IA fasse.' },
          { name: 'Format', description: 'La structure attendue du résultat — ex. liste numérotée, e-mail, bloc de code, tableau.' },
          { name: 'Target', description: 'Le public visé par le résultat. Détermine le vocabulaire, la profondeur et l\'angle.' },
        ],
        bestFor: [
          'Textes marketing et création de contenu',
          'Écriture créative et storytelling',
          'Toute tâche où un persona expert précis améliore la qualité',
          'Rédaction destinée à un lecteur bien défini',
        ],
        notFor: [
          'Tâches nécessitant une séparation fine ton/style (utiliser CO-STAR)',
          'Processus séquentiels étape par étape (utiliser RISEN)',
          'Tâches où les exemples few-shot sont le signal clé (utiliser TRACE)',
        ],
        example: {
          scenario: 'Rédiger un post LinkedIn pour le lancement d\'un nouveau produit IA',
          prompt: 'Context : PromptQuorum lance un outil de comparaison multi-IA. Role : Vous êtes expert en marketing SaaS B2B. Action : Rédigez un post LinkedIn annonçant le produit. Format : 3 courts paragraphes + 5 hashtags. Target : Fondateurs de startups et professionnels curieux d\'IA.',
        },
        faq: [
          { q: 'Que signifie CRAFT ?', a: 'CRAFT signifie Context, Role, Action, Format et Target — cinq champs qui combinent un cadrage basé sur un rôle avec une définition claire du public.' },
          { q: 'En quoi CRAFT diffère-t-il de CO-STAR ?', a: 'CRAFT utilise un champ Role (donne un persona à l\'IA), tandis que CO-STAR sépare style et ton. CRAFT est plus simple ; CO-STAR offre un contrôle plus fin de la voix.' },
          { q: 'Pour quoi CRAFT est-il le plus adapté ?', a: 'CRAFT excelle pour les textes marketing et l\'écriture créative, quand assigner un persona expert et définir un public cible améliore nettement la qualité du résultat. Évaluez ensuite vos prompts CRAFT sur https://www.promptquorum.com/fr/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      es: {
        tagline: 'Un enfoque basado en roles con una audiencia objetivo clara. Ideal para marketing, copywriting y contenido creativo.',
        seoTitle: 'Framework de prompt CRAFT: 5 campos para copy con tu marca',
        metaDescription: 'Un prompt genérico produce un texto genérico. CRAFT lo soluciona con un campo Role y un Target bien definido. Los 5 campos, un ejemplo real, vs CO-STAR.',
        fields: [
          { name: 'Context', description: 'La información de fondo que la IA necesita — a qué proyecto, producto o situación se refiere la tarea.' },
          { name: 'Role', description: 'La persona que debe adoptar la IA — p. ej. copywriter experto, desarrollador senior, UX researcher.' },
          { name: 'Action', description: 'La tarea específica — qué quieres que haga la IA.' },
          { name: 'Format', description: 'Cómo debe estructurarse el resultado — p. ej. lista numerada, email, bloque de código, tabla.' },
          { name: 'Target', description: 'La audiencia a la que se dirige el resultado. Define vocabulario, profundidad y enfoque.' },
        ],
        bestFor: [
          'Copy de marketing y creación de contenido',
          'Escritura creativa y storytelling',
          'Cualquier tarea donde un persona experto concreto mejore la calidad',
          'Textos dirigidos a un lector bien definido',
        ],
        notFor: [
          'Tareas que requieren separar tono y estilo con precisión (usa CO-STAR)',
          'Procesos secuenciales paso a paso (usa RISEN)',
          'Tareas donde los ejemplos few-shot son la señal clave (usa TRACE)',
        ],
        example: {
          scenario: 'Escribir un post de LinkedIn para el lanzamiento de un nuevo producto de IA',
          prompt: 'Context: PromptQuorum lanza una herramienta de comparación multi-IA. Role: Eres experto en marketing SaaS B2B. Action: Escribe un post de LinkedIn anunciando el producto. Format: 3 párrafos cortos + 5 hashtags. Target: Fundadores de startups y profesionales interesados en IA.',
        },
        faq: [
          { q: '¿Qué significa CRAFT?', a: 'CRAFT significa Context, Role, Action, Format y Target — cinco campos que combinan un enfoque basado en roles con una definición clara de audiencia.' },
          { q: '¿En qué se diferencia CRAFT de CO-STAR?', a: 'CRAFT usa un campo Role (le da una persona a la IA), mientras que CO-STAR separa estilo y tono. CRAFT es más simple; CO-STAR da más control sobre la voz.' },
          { q: '¿Para qué es mejor usar CRAFT?', a: 'CRAFT destaca en copy de marketing y escritura creativa, cuando asignar un persona experto y definir una audiencia objetivo mejora notablemente la calidad del resultado. Después evalúa tus prompts CRAFT en https://www.promptquorum.com/es/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      pt: {
        tagline: 'Enquadramento baseado em papel com público-alvo claro. Ótimo para marketing, copywriting e conteúdo criativo.',
        seoTitle: 'Framework de prompt CRAFT: 5 campos para copy alinhado à marca',
        metaDescription: 'Um prompt genérico gera um texto genérico. O CRAFT resolve isso com um campo Role e um Target bem definido. Os 5 campos, um exemplo real, comparado ao CO-STAR.',
        fields: [
          { name: 'Context', description: 'O contexto que a IA precisa — a qual projeto, produto ou situação a tarefa se refere.' },
          { name: 'Role', description: 'A persona que a IA deve assumir — ex.: redator publicitário especialista, desenvolvedor sênior, UX researcher.' },
          { name: 'Action', description: 'A tarefa específica — o que você quer que a IA faça.' },
          { name: 'Format', description: 'Como o resultado deve ser estruturado — ex.: lista numerada, e-mail, bloco de código, tabela.' },
          { name: 'Target', description: 'O público-alvo do resultado. Define vocabulário, profundidade e ângulo.' },
        ],
        bestFor: [
          'Copy de marketing e criação de conteúdo',
          'Escrita criativa e storytelling',
          'Qualquer tarefa em que uma persona especialista melhore a qualidade',
          'Textos direcionados a um leitor bem definido',
        ],
        notFor: [
          'Tarefas que exigem separação fina de tom/estilo (use CO-STAR)',
          'Processos sequenciais passo a passo (use RISEN)',
          'Tarefas em que exemplos few-shot são o sinal principal (use TRACE)',
        ],
        example: {
          scenario: 'Escrever um post no LinkedIn para o lançamento de um novo produto de IA',
          prompt: 'Context: A PromptQuorum está lançando uma ferramenta de comparação multi-IA. Role: Você é especialista em marketing SaaS B2B. Action: Escreva um post no LinkedIn anunciando o produto. Format: 3 parágrafos curtos + 5 hashtags. Target: Fundadores de startups e profissionais curiosos sobre IA.',
        },
        faq: [
          { q: 'O que significa CRAFT?', a: 'CRAFT significa Context, Role, Action, Format e Target — cinco campos que combinam enquadramento baseado em papel com uma definição clara de público.' },
          { q: 'Qual a diferença entre CRAFT e CO-STAR?', a: 'O CRAFT usa um campo Role (dá uma persona à IA), enquanto o CO-STAR separa estilo e tom. O CRAFT é mais simples; o CO-STAR dá mais controle sobre a voz.' },
          { q: 'Para que o CRAFT é mais indicado?', a: 'O CRAFT se destaca em copy de marketing e escrita criativa, quando atribuir uma persona especialista e definir um público-alvo melhora bastante a qualidade do resultado. Depois avalie seus prompts CRAFT em https://www.promptquorum.com/pt/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      ja: {
        tagline: 'ロールベースのフレーミングと明確なターゲット読者を組み合わせたフレームワークです。マーケティング、コピーライティング、クリエイティブ制作に適しています。',
        seoTitle: 'CRAFTプロンプトフレームワーク：5項目でブランドに合うコピーを',
        metaDescription: '汎用的なプロンプトは汎用的な文章しか生みません。CRAFTはRole項目と明確なTargetでこれを解決します。5項目すべて、実例、CO-STARとの比較を掲載。',
        fields: [
          { name: 'Context', description: 'AIが必要とする背景情報——どのプロジェクト、製品、状況に関するタスクかを示します。' },
          { name: 'Role', description: 'AIに担わせるペルソナ——例：熟練コピーライター、シニア開発者、UXリサーチャーなど。' },
          { name: 'Action', description: '具体的なタスク——AIに何をしてほしいかを示します。' },
          { name: 'Format', description: '出力の構成方法——例：番号付きリスト、メール、コードブロック、表など。' },
          { name: 'Target', description: '出力の対象読者。語彙、深さ、切り口を決定します。' },
        ],
        bestFor: [
          'マーケティングコピーとコンテンツ制作',
          'クリエイティブライティングとストーリーテリング',
          '専門家ペルソナを与えることで品質が上がるタスク全般',
          '読者が明確に定義されている文章の作成',
        ],
        notFor: [
          'トーンとスタイルを細かく分けたいタスク（CO-STARを使用）',
          '順序立てたステップ処理が必要なタスク（RISENを使用）',
          'Few-shot例が最も重要なシグナルとなるタスク（TRACEを使用）',
        ],
        example: {
          scenario: '新しいAI製品ローンチのLinkedIn投稿を書く',
          prompt: 'Context: PromptQuorumはマルチAI比較ツールをローンチします。Role: あなたはB2B SaaSマーケティングの専門家です。Action: 製品発表のLinkedIn投稿を書いてください。Format: 短い段落3つ＋ハッシュタグ5個。Target: スタートアップ創業者とAIに関心のあるビジネスパーソン。',
        },
        faq: [
          { q: 'CRAFTとは何の略ですか？', a: 'CRAFTはContext、Role、Action、Format、Targetの略です。ロールベースのフレーミングと明確なターゲット読者の定義を組み合わせた5つの項目です。' },
          { q: 'CRAFTとCO-STARの違いは何ですか？', a: 'CRAFTはRole項目でAIにペルソナを与えます。一方CO-STARはスタイルとトーンを別々の項目に分けます。CRAFTはよりシンプルで、CO-STARはより細かく声のコントロールができます。' },
          { q: 'CRAFTはどのような場面に最も向いていますか？', a: '専門家ペルソナの付与とターゲット読者の定義が出力品質を大きく高める、マーケティングコピーやクリエイティブライティングに最適です。CRAFTプロンプト作成後は https://www.promptquorum.com/ja/prompt-engineering/how-to-evaluate-prompt-quality で体系的に品質を評価してください。' },
        ],
      },
      zh: {
        tagline: '基于角色的框架，搭配明确的目标受众。适用于营销文案、文案写作和创意内容。',
        seoTitle: 'CRAFT提示词框架：5个字段打造品牌一致的文案',
        metaDescription: '通用提示词只能产出通用文案。CRAFT通过Role字段和明确的Target受众解决这个问题。5个字段、真实示例、对比CO-STAR。',
        fields: [
          { name: 'Context', description: 'AI需要的背景信息——任务涉及哪个项目、产品或场景。' },
          { name: 'Role', description: 'AI应扮演的角色——例如资深文案、高级开发者、UX研究员。' },
          { name: 'Action', description: '具体任务——你希望AI做什么。' },
          { name: 'Format', description: '输出应如何组织——例如编号列表、邮件、代码块、表格。' },
          { name: 'Target', description: '输出面向的受众。决定用词、深度和切入角度。' },
        ],
        bestFor: [
          '营销文案与内容创作',
          '创意写作与叙事内容',
          '赋予AI专家角色能明显提升质量的任务',
          '面向明确读者群体的写作',
        ],
        notFor: [
          '需要精细区分语气与风格的任务（改用CO-STAR）',
          '需要按顺序执行的多步骤流程（改用RISEN）',
          '少样本示例是关键信号的任务（改用TRACE）',
        ],
        example: {
          scenario: '为新AI产品发布撰写一条LinkedIn帖子',
          prompt: 'Context：PromptQuorum即将推出一款多模型AI对比工具。Role：你是一名B2B SaaS营销专家。Action：撰写一条宣布产品发布的LinkedIn帖子。Format：3个简短段落+5个话题标签。Target：创业公司创始人和对AI感兴趣的从业者。',
        },
        faq: [
          { q: 'CRAFT代表什么？', a: 'CRAFT代表Context、Role、Action、Format和Target——五个字段，将基于角色的框架与明确的受众定义结合在一起。' },
          { q: 'CRAFT与CO-STAR有什么区别？', a: 'CRAFT使用Role字段为AI赋予角色，而CO-STAR将风格与语气分开处理。CRAFT更简单；CO-STAR对语气的控制更精细。' },
          { q: 'CRAFT最适合用在哪些场景？', a: 'CRAFT在营销文案和创意写作中表现出色，赋予专家角色并定义目标受众能显著提升输出质量。构建CRAFT提示词后，可在 https://www.promptquorum.com/zh/prompt-engineering/how-to-evaluate-prompt-quality 系统评估其效果。' },
        ],
      },
      ar: {
        tagline: 'صياغة قائمة على الأدوار مع جمهور مستهدف واضح. مناسب للتسويق والكتابة الإعلانية والمحتوى الإبداعي.',
        seoTitle: 'إطار CRAFT لصياغة الأوامر: 5 حقول لمحتوى متوافق مع علامتك التجارية',
        metaDescription: 'الأوامر العامة تنتج نصوصاً عامة. يعالج CRAFT هذه المشكلة بحقل Role وحقل Target محدد بوضوح. جميع الحقول الخمسة، مثال حقيقي، ومقارنة مع CO-STAR.',
        fields: [
          { name: 'Context', description: 'المعلومات الأساسية التي يحتاجها الذكاء الاصطناعي — ما المشروع أو المنتج أو الموقف الذي تتعلق به المهمة.' },
          { name: 'Role', description: 'الشخصية التي يجب أن يتبناها الذكاء الاصطناعي — مثل كاتب إعلانات خبير، أو مطور أول، أو باحث تجربة مستخدم.' },
          { name: 'Action', description: 'المهمة المحددة — ما الذي تريد من الذكاء الاصطناعي القيام به.' },
          { name: 'Format', description: 'كيف يجب أن يكون الناتج منظّماً — مثل قائمة مرقمة، بريد إلكتروني، كتلة كود، أو جدول.' },
          { name: 'Target', description: 'الجمهور المستهدف من الناتج. يحدد المفردات والعمق وزاوية الطرح.' },
        ],
        bestFor: [
          'المحتوى التسويقي وإنشاء المحتوى',
          'الكتابة الإبداعية ورواية القصص',
          'أي مهمة يحسّن فيها تبني شخصية خبير من جودة الناتج',
          'الكتابة الموجهة لقارئ محدد بوضوح',
        ],
        notFor: [
          'المهام التي تتطلب فصلاً دقيقاً بين النبرة والأسلوب (استخدم CO-STAR)',
          'العمليات المتسلسلة خطوة بخطوة (استخدم RISEN)',
          'المهام التي تكون فيها الأمثلة القليلة (few-shot) هي الإشارة الأهم (استخدم TRACE)',
        ],
        example: {
          scenario: 'كتابة منشور على LinkedIn للإعلان عن إطلاق منتج ذكاء اصطناعي جديد',
          prompt: 'Context: تطلق PromptQuorum أداة لمقارنة نماذج ذكاء اصطناعي متعددة. Role: أنت خبير تسويق B2B SaaS. Action: اكتب منشور LinkedIn للإعلان عن المنتج. Format: 3 فقرات قصيرة + 5 وسوم. Target: مؤسسو الشركات الناشئة والمهنيون المهتمون بالذكاء الاصطناعي.',
        },
        faq: [
          { q: 'ماذا يعني اختصار CRAFT؟', a: 'يشير CRAFT إلى Context وRole وAction وFormat وTarget — خمسة حقول تجمع بين الصياغة القائمة على الأدوار وتحديد واضح للجمهور.' },
          { q: 'ما الفرق بين CRAFT وCO-STAR؟', a: 'يستخدم CRAFT حقل Role لمنح الذكاء الاصطناعي شخصية، بينما يفصل CO-STAR بين الأسلوب والنبرة. CRAFT أبسط، بينما يمنح CO-STAR تحكماً أدق في الصوت.' },
          { q: 'ما أفضل استخدام لإطار CRAFT؟', a: 'يتفوق CRAFT في المحتوى التسويقي والكتابة الإبداعية، حيث يؤدي تبني شخصية خبير وتحديد جمهور مستهدف إلى تحسين جودة الناتج بشكل ملحوظ. بعد بناء أوامر CRAFT، قيّم جودتها عبر https://www.promptquorum.com/ar/prompt-engineering/how-to-evaluate-prompt-quality.' },
        ],
      },
      ko: {
        tagline: '명확한 타깃 독자를 갖춘 역할 기반 프레이밍입니다. 마케팅, 카피라이팅, 크리에이티브 작업에 적합합니다.',
        seoTitle: 'CRAFT 프롬프트 프레임워크: 브랜드에 맞는 카피를 위한 5가지 필드',
        metaDescription: '일반적인 프롬프트는 일반적인 카피를 만듭니다. CRAFT는 Role 필드와 명확한 Target으로 이 문제를 해결합니다. 5가지 필드, 실제 예시, CO-STAR와의 비교를 확인하십시오.',
        fields: [
          { name: 'Context', description: 'AI가 필요로 하는 배경 정보입니다 — 어떤 프로젝트, 제품, 상황과 관련된 작업인지를 나타냅니다.' },
          { name: 'Role', description: 'AI가 맡아야 할 페르소나입니다 — 예: 숙련된 카피라이터, 시니어 개발자, UX 리서처.' },
          { name: 'Action', description: '구체적인 작업입니다 — AI가 무엇을 해야 하는지를 나타냅니다.' },
          { name: 'Format', description: '결과물의 구성 방식입니다 — 예: 번호 매긴 목록, 이메일, 코드 블록, 표.' },
          { name: 'Target', description: '결과물의 대상 독자입니다. 어휘, 깊이, 관점을 결정합니다.' },
        ],
        bestFor: [
          '마케팅 카피 및 콘텐츠 제작',
          '크리에이티브 라이팅과 스토리텔링',
          '전문가 페르소나 부여가 품질을 크게 높이는 작업',
          '명확히 정의된 독자를 대상으로 하는 글쓰기',
        ],
        notFor: [
          '톤과 스타일을 세밀하게 분리해야 하는 작업 (CO-STAR 사용 권장)',
          '순차적인 단계별 프로세스 (RISEN 사용 권장)',
          'Few-shot 예시가 핵심 신호가 되는 작업 (TRACE 사용 권장)',
        ],
        example: {
          scenario: '신규 AI 제품 출시를 알리는 LinkedIn 게시글 작성',
          prompt: 'Context: PromptQuorum은 여러 AI 모델을 비교하는 도구를 출시합니다. Role: 당신은 B2B SaaS 마케팅 전문가입니다. Action: 제품 출시를 알리는 LinkedIn 게시글을 작성하십시오. Format: 짧은 문단 3개 + 해시태그 5개. Target: 스타트업 창업자 및 AI에 관심 있는 전문가.',
        },
        faq: [
          { q: 'CRAFT는 무엇의 약자입니까?', a: 'CRAFT는 Context, Role, Action, Format, Target의 약자입니다. 역할 기반 프레이밍과 명확한 대상 독자 정의를 결합한 5가지 필드입니다.' },
          { q: 'CRAFT는 CO-STAR와 어떻게 다릅니까?', a: 'CRAFT는 Role 필드를 사용해 AI에 페르소나를 부여하는 반면, CO-STAR는 스타일과 톤을 별도로 분리합니다. CRAFT가 더 단순하며, CO-STAR는 어조 제어가 더 정교합니다.' },
          { q: 'CRAFT는 어떤 경우에 가장 적합합니까?', a: 'CRAFT는 전문가 페르소나 부여와 대상 독자 정의가 결과물 품질을 크게 높이는 마케팅 카피와 크리에이티브 라이팅에 탁월합니다. CRAFT 프롬프트 작성 후에는 https://www.promptquorum.com/ko/prompt-engineering/how-to-evaluate-prompt-quality 에서 체계적으로 품질을 평가하십시오.' },
        ],
      },
    },
  },
  {
    slug: 'risen',
    name: 'RISEN',
    expansion: 'Role · Instructions · Steps · End Goal · Narrowing',
    tagline: 'Built for multi-step enterprise tasks. The Narrowing field keeps AI output on-track and within constraints.',
    seoTitle: 'RISEN Framework: Stop AI Scope Drift in 5 Steps',
    metaDescription: 'Long AI tasks drift off-topic without limits. RISEN\'s Narrowing field sets explicit guardrails. See all 5 fields, a real example, and when to use it.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'High',
    fields: [
      { name: 'Role', description: 'The expert persona the AI should adopt for this task.' },
      { name: 'Instructions', description: 'Clear directives about how the AI should approach and execute the task.' },
      { name: 'Steps', description: 'The sequential steps the AI should follow, in order.' },
      { name: 'End Goal', description: 'The final deliverable or outcome you want to achieve.' },
      { name: 'Narrowing', description: 'Constraints, exclusions, and guardrails — what the AI should NOT do or include.' },
    ],
    bestFor: [
      'Enterprise workflows with sequential steps',
      'Complex processes requiring a specific order of operations',
      'Tasks where you need strict constraints on output',
      'Multi-stage research or analysis tasks',
    ],
    notFor: [
      'Simple one-answer questions (use APE or RTF)',
      'Tasks focused on tone and voice (use CO-STAR)',
      'Creative writing where constraints reduce quality',
    ],
    example: {
      scenario: 'Building a competitive analysis report',
      prompt: 'Role: Senior market analyst. Instructions: Analyze the multi-LLM tool market objectively. Steps: 1) List top 5 competitors, 2) Compare features, 3) Identify gaps. End Goal: A structured report with actionable insights. Narrowing: Do not include tools with fewer than 1000 users. Focus on tools launched after 2023.',
    },
    related: ['trace', 'specs', 'co-star'],
    faq: [
      { q: 'What does RISEN stand for?', a: 'RISEN stands for Role, Instructions, Steps, End Goal, and Narrowing — a framework designed for sequential, multi-step enterprise tasks.' },
      { q: 'What makes the Narrowing field useful?', a: 'The Narrowing field lets you define explicit constraints — what to exclude, avoid, or stay within. This prevents AI from going off-topic or including irrelevant content.' },
      { q: 'When should I use RISEN instead of SPECS?', a: 'Use RISEN when your task has a clear sequence of steps to follow. Use SPECS when you need to define complex technical requirements without a fixed step order.' },
    ],
    translations: {
  de: {
    tagline: 'Für mehrstufige Business-Aufgaben entwickelt. Das Narrowing-Feld hält die KI-Ausgabe auf Kurs und innerhalb der Grenzen.',
    seoTitle: 'RISEN-Framework: KI-Prompts ohne Themenabdrift',
    metaDescription: 'Lange KI-Aufgaben driften ohne Grenzen ab. Das Narrowing-Feld von RISEN setzt klare Leitplanken. Alle 5 Felder, ein echtes Beispiel und wann du es einsetzt.',
    fields: [
      { name: 'Role', description: 'Die Experten-Rolle, die die KI für diese Aufgabe einnehmen soll.' },
      { name: 'Instructions', description: 'Klare Vorgaben dazu, wie die KI die Aufgabe angehen und ausführen soll.' },
      { name: 'Steps', description: 'Die aufeinanderfolgenden Schritte, die die KI in der vorgegebenen Reihenfolge befolgen soll.' },
      { name: 'End Goal', description: 'Das gewünschte Endergebnis oder Liefergut, das erreicht werden soll.' },
      { name: 'Narrowing', description: 'Einschränkungen, Ausschlüsse und Leitplanken — was die KI NICHT tun oder einbeziehen soll.' },
    ],
    bestFor: [
      'Unternehmensprozesse mit aufeinanderfolgenden Schritten',
      'Komplexe Abläufe, die eine bestimmte Reihenfolge erfordern',
      'Aufgaben, bei denen strikte Vorgaben für die Ausgabe nötig sind',
      'Mehrstufige Recherche- oder Analyseaufgaben',
    ],
    notFor: [
      'Einfache Ein-Antwort-Fragen (APE oder RTF verwenden)',
      'Aufgaben, bei denen Ton und Stimme im Fokus stehen (CO-STAR verwenden)',
      'Kreatives Schreiben, bei dem Einschränkungen die Qualität mindern',
    ],
    example: {
      scenario: 'Einen Wettbewerbsanalyse-Report erstellen',
      prompt: 'Role: Senior-Marktanalyst. Instructions: Analysiere den Markt für Multi-LLM-Tools objektiv. Steps: 1) Liste die Top-5-Wettbewerber auf, 2) Vergleiche die Funktionen, 3) Identifiziere Lücken. End Goal: Ein strukturierter Report mit umsetzbaren Erkenntnissen. Narrowing: Berücksichtige keine Tools mit weniger als 1000 Nutzern. Fokussiere dich auf Tools, die nach 2023 gestartet sind.',
    },
    faq: [
      { q: 'Wofür steht RISEN?', a: 'RISEN steht für Role, Instructions, Steps, End Goal und Narrowing — ein Framework für sequenzielle, mehrstufige Unternehmensaufgaben.' },
      { q: 'Was macht das Narrowing-Feld nützlich?', a: 'Mit dem Narrowing-Feld definierst du explizite Einschränkungen — was ausgeschlossen, vermieden oder eingehalten werden soll. Das verhindert, dass die KI vom Thema abweicht oder irrelevante Inhalte einbezieht.' },
      { q: 'Wann sollte ich RISEN statt SPECS verwenden?', a: 'Verwende RISEN, wenn deine Aufgabe eine klare Abfolge von Schritten hat. Verwende SPECS, wenn du komplexe technische Anforderungen ohne feste Schrittreihenfolge definieren musst.' },
    ],
  },
  fr: {
    tagline: 'Conçu pour les tâches d\'entreprise à plusieurs étapes. Le champ Narrowing garde la production de l\'IA sur la bonne voie et dans les limites fixées.',
    seoTitle: 'Framework RISEN : éviter la dérive des prompts IA',
    metaDescription: 'Les longues tâches IA dérivent sans limites. Le champ Narrowing de RISEN pose des garde-fous précis. Découvrez les 5 champs et un exemple concret.',
    fields: [
      { name: 'Role', description: 'Le rôle d\'expert que l\'IA doit endosser pour cette tâche.' },
      { name: 'Instructions', description: 'Des directives claires sur la façon dont l\'IA doit aborder et exécuter la tâche.' },
      { name: 'Steps', description: 'Les étapes séquentielles que l\'IA doit suivre, dans l\'ordre.' },
      { name: 'End Goal', description: 'Le livrable final ou le résultat que vous souhaitez obtenir.' },
      { name: 'Narrowing', description: 'Les contraintes, exclusions et garde-fous — ce que l\'IA ne doit PAS faire ou inclure.' },
    ],
    bestFor: [
      'Les processus d\'entreprise avec des étapes séquentielles',
      'Les processus complexes nécessitant un ordre d\'exécution précis',
      'Les tâches où des contraintes strictes sur le résultat sont nécessaires',
      'Les tâches de recherche ou d\'analyse à plusieurs étapes',
    ],
    notFor: [
      'Les questions simples à réponse unique (utilisez APE ou RTF)',
      'Les tâches centrées sur le ton et la voix (utilisez CO-STAR)',
      'L\'écriture créative, où les contraintes nuisent à la qualité',
    ],
    example: {
      scenario: 'Rédiger un rapport d\'analyse concurrentielle',
      prompt: 'Role: Analyste de marché senior. Instructions: Analyse objectivement le marché des outils multi-LLM. Steps: 1) Liste les 5 principaux concurrents, 2) Compare les fonctionnalités, 3) Identifie les lacunes. End Goal: Un rapport structuré avec des recommandations concrètes. Narrowing: N\'inclus pas les outils comptant moins de 1000 utilisateurs. Concentre-toi sur les outils lancés après 2023.',
    },
    faq: [
      { q: 'Que signifie RISEN ?', a: 'RISEN signifie Role, Instructions, Steps, End Goal et Narrowing — un framework conçu pour les tâches d\'entreprise séquentielles et à plusieurs étapes.' },
      { q: 'En quoi le champ Narrowing est-il utile ?', a: 'Le champ Narrowing permet de définir des contraintes explicites — ce qu\'il faut exclure, éviter ou respecter. Cela empêche l\'IA de s\'éloigner du sujet ou d\'inclure du contenu hors propos.' },
      { q: 'Quand utiliser RISEN plutôt que SPECS ?', a: 'Utilisez RISEN lorsque votre tâche suit une séquence d\'étapes claire. Utilisez SPECS lorsque vous devez définir des exigences techniques complexes sans ordre d\'étapes fixe.' },
    ],
  },
  es: {
    tagline: 'Diseñado para tareas empresariales de varios pasos. El campo Narrowing mantiene la salida de la IA encaminada y dentro de los límites.',
    seoTitle: 'Framework RISEN: evita que la IA se desvíe del tema',
    metaDescription: 'Las tareas largas de IA se desvían sin límites. El campo Narrowing de RISEN marca límites claros. Descubre los 5 campos, un ejemplo real y cuándo usarlo.',
    fields: [
      { name: 'Role', description: 'El rol de experto que la IA debe adoptar para esta tarea.' },
      { name: 'Instructions', description: 'Directrices claras sobre cómo la IA debe abordar y ejecutar la tarea.' },
      { name: 'Steps', description: 'Los pasos secuenciales que la IA debe seguir, en orden.' },
      { name: 'End Goal', description: 'El resultado final o entregable que quieres conseguir.' },
      { name: 'Narrowing', description: 'Restricciones, exclusiones y límites — lo que la IA NO debe hacer ni incluir.' },
    ],
    bestFor: [
      'Flujos de trabajo empresariales con pasos secuenciales',
      'Procesos complejos que requieren un orden de ejecución específico',
      'Tareas donde necesitas restricciones estrictas sobre el resultado',
      'Tareas de investigación o análisis en varias etapas',
    ],
    notFor: [
      'Preguntas simples de respuesta única (usa APE o RTF)',
      'Tareas centradas en el tono y la voz (usa CO-STAR)',
      'Escritura creativa donde las restricciones reducen la calidad',
    ],
    example: {
      scenario: 'Elaborar un informe de análisis competitivo',
      prompt: 'Role: Analista de mercado sénior. Instructions: Analiza de forma objetiva el mercado de herramientas multi-LLM. Steps: 1) Enumera los 5 principales competidores, 2) Compara las funciones, 3) Identifica las carencias. End Goal: Un informe estructurado con conclusiones accionables. Narrowing: No incluyas herramientas con menos de 1000 usuarios. Céntrate en herramientas lanzadas después de 2023.',
    },
    faq: [
      { q: '¿Qué significa RISEN?', a: 'RISEN significa Role, Instructions, Steps, End Goal y Narrowing — un framework diseñado para tareas empresariales secuenciales de varios pasos.' },
      { q: '¿Para qué sirve el campo Narrowing?', a: 'El campo Narrowing te permite definir restricciones explícitas — qué excluir, evitar o respetar. Esto evita que la IA se desvíe del tema o incluya contenido irrelevante.' },
      { q: '¿Cuándo debo usar RISEN en lugar de SPECS?', a: 'Usa RISEN cuando tu tarea tenga una secuencia clara de pasos. Usa SPECS cuando necesites definir requisitos técnicos complejos sin un orden de pasos fijo.' },
    ],
  },
  pt: {
    tagline: 'Criado para tarefas empresariais de várias etapas. O campo Narrowing mantém a saída da IA no rumo certo e dentro dos limites.',
    seoTitle: 'Framework RISEN: evite que a IA fuja do tema',
    metaDescription: 'Tarefas longas de IA perdem o foco sem limites. O campo Narrowing do RISEN define limites claros. Veja os 5 campos, um exemplo real e quando usar.',
    fields: [
      { name: 'Role', description: 'A persona especialista que a IA deve adotar para essa tarefa.' },
      { name: 'Instructions', description: 'Diretrizes claras sobre como a IA deve abordar e executar a tarefa.' },
      { name: 'Steps', description: 'As etapas sequenciais que a IA deve seguir, em ordem.' },
      { name: 'End Goal', description: 'O resultado final ou entregável que você quer alcançar.' },
      { name: 'Narrowing', description: 'Restrições, exclusões e limites — o que a IA NÃO deve fazer ou incluir.' },
    ],
    bestFor: [
      'Fluxos de trabalho corporativos com etapas sequenciais',
      'Processos complexos que exigem uma ordem específica de execução',
      'Tarefas em que você precisa de restrições rígidas sobre o resultado',
      'Tarefas de pesquisa ou análise em várias etapas',
    ],
    notFor: [
      'Perguntas simples de resposta única (use APE ou RTF)',
      'Tarefas focadas em tom e voz (use CO-STAR)',
      'Escrita criativa em que restrições prejudicam a qualidade',
    ],
    example: {
      scenario: 'Criar um relatório de análise competitiva',
      prompt: 'Role: Analista de mercado sênior. Instructions: Analise objetivamente o mercado de ferramentas multi-LLM. Steps: 1) Liste os 5 principais concorrentes, 2) Compare os recursos, 3) Identifique lacunas. End Goal: Um relatório estruturado com insights acionáveis. Narrowing: Não inclua ferramentas com menos de 1000 usuários. Foque em ferramentas lançadas depois de 2023.',
    },
    faq: [
      { q: 'O que significa RISEN?', a: 'RISEN significa Role, Instructions, Steps, End Goal e Narrowing — um framework criado para tarefas empresariais sequenciais de várias etapas.' },
      { q: 'Para que serve o campo Narrowing?', a: 'O campo Narrowing permite definir restrições explícitas — o que excluir, evitar ou respeitar. Isso evita que a IA fuja do tema ou inclua conteúdo irrelevante.' },
      { q: 'Quando devo usar RISEN em vez de SPECS?', a: 'Use RISEN quando sua tarefa tiver uma sequência clara de etapas. Use SPECS quando precisar definir requisitos técnicos complexos sem uma ordem fixa de etapas.' },
    ],
  },
  ja: {
    tagline: '複数ステップの企業タスク向けに設計されたフレームワーク。Narrowingフィールドで、AIの出力を軌道から外さず制約内に収める。',
    seoTitle: 'RISENフレームワークとは？AIの脱線を防ぐ5項目',
    metaDescription: '長時間のAIタスクは制約がないと脱線する。RISENのNarrowingフィールドが明確なガードレールを設定。5つの項目すべてと実例、使うべき場面を紹介。',
    fields: [
      { name: 'Role', description: 'このタスクでAIが担うべき専門家としての役割。' },
      { name: 'Instructions', description: 'AIがタスクにどう取り組み、実行すべきかを示す明確な指示。' },
      { name: 'Steps', description: 'AIが順番に従うべき、一連のステップ。' },
      { name: 'End Goal', description: '達成したい最終的な成果物や結果。' },
      { name: 'Narrowing', description: '制約・除外事項・ガードレール — AIがしてはいけないこと、含めてはいけないこと。' },
    ],
    bestFor: [
      '順序立ったステップを伴う企業のワークフロー',
      '特定の実行順序が求められる複雑なプロセス',
      '出力に厳格な制約が必要なタスク',
      '複数段階にわたる調査・分析タスク',
    ],
    notFor: [
      '単純な一問一答の質問（APEやRTFを使用）',
      'トーンや文体に焦点を当てたタスク（CO-STARを使用）',
      '制約が品質を下げてしまう創作的な文章作成',
    ],
    example: {
      scenario: '競合分析レポートを作成する',
      prompt: 'Role: シニア市場アナリスト。Instructions: マルチLLMツール市場を客観的に分析する。Steps: 1) 上位5社の競合をリストアップする、2) 機能を比較する、3) ギャップを特定する。End Goal: 実用的なインサイトを含む構造化されたレポート。Narrowing: ユーザー数1000人未満のツールは含めない。2023年以降にローンチされたツールに絞る。',
    },
    faq: [
      { q: 'RISENとは何の略ですか？', a: 'RISENはRole、Instructions、Steps、End Goal、Narrowingの略で、順序立った複数ステップの企業タスクのために設計されたフレームワークです。' },
      { q: 'Narrowingフィールドは何が便利なのですか？', a: 'Narrowingフィールドを使うと、除外すること・避けること・守るべき範囲といった明確な制約を定義できます。これにより、AIが話題から逸れたり、無関係な内容を含めたりするのを防げます。' },
      { q: 'SPECSではなくRISENを使うべきなのはどんなときですか？', a: 'タスクに明確なステップの順序がある場合はRISENを使いましょう。固定された順序のない複雑な技術要件を定義する必要がある場合はSPECSを使いましょう。' },
    ],
  },
  zh: {
    tagline: '专为多步骤企业任务设计。Narrowing（限定）字段让AI的输出保持在正轨上，并控制在既定范围内。',
    seoTitle: 'RISEN框架：5个字段防止AI任务跑偏',
    metaDescription: '长篇AI任务没有限制就容易跑偏。RISEN的Narrowing字段设定了明确的边界。查看全部5个字段、真实示例，以及适用场景。',
    fields: [
      { name: 'Role', description: 'AI在此任务中应扮演的专家角色。' },
      { name: 'Instructions', description: '关于AI应如何处理和执行该任务的明确指示。' },
      { name: 'Steps', description: 'AI应按顺序遵循的一系列步骤。' },
      { name: 'End Goal', description: '你想要达成的最终交付成果。' },
      { name: 'Narrowing', description: '约束、排除项和限制条件 — 即AI不应该做什么或包含什么。' },
    ],
    bestFor: [
      '具有顺序步骤的企业工作流程',
      '需要特定操作顺序的复杂流程',
      '需要对输出严格限制的任务',
      '多阶段的调研或分析任务',
    ],
    notFor: [
      '简单的单一答案问题（使用APE或RTF）',
      '专注于语气和风格的任务（使用CO-STAR）',
      '限制条件会降低质量的创意写作',
    ],
    example: {
      scenario: '撰写一份竞争分析报告',
      prompt: 'Role: 高级市场分析师。Instructions: 客观分析多LLM工具市场。Steps: 1) 列出前5大竞争对手，2) 比较功能，3) 找出差距。End Goal: 一份包含可执行洞察的结构化报告。Narrowing: 不要包含用户数低于1000的工具。只关注2023年之后推出的工具。',
    },
    faq: [
      { q: 'RISEN代表什么？', a: 'RISEN代表Role、Instructions、Steps、End Goal和Narrowing——一个专为顺序性、多步骤企业任务设计的框架。' },
      { q: 'Narrowing字段有什么用？', a: 'Narrowing字段可以让你设定明确的限制条件——需要排除、避免或遵守的内容。这可以防止AI偏离主题或包含不相关的内容。' },
      { q: '什么时候应该用RISEN而不是SPECS？', a: '当你的任务有明确的步骤顺序时，使用RISEN。当你需要定义复杂的技术要求、且没有固定步骤顺序时，使用SPECS。' },
    ],
  },
  ar: {
    tagline: 'مصمم للمهام المؤسسية متعددة الخطوات. حقل Narrowing يحافظ على مخرجات الذكاء الاصطناعي ضمن المسار الصحيح وفي حدود القيود المحددة.',
    seoTitle: 'إطار RISEN: أوقف انحراف الذكاء الاصطناعي عن المهمة',
    metaDescription: 'المهام الطويلة للذكاء الاصطناعي تنحرف عن مسارها دون قيود. حقل Narrowing في RISEN يضع ضوابط واضحة. تعرّف على الحقول الخمسة، ومثال حقيقي، ووقت استخدامه.',
    fields: [
      { name: 'Role', description: 'الدور الذي ينبغي أن يتقمصه الذكاء الاصطناعي كخبير في هذه المهمة.' },
      { name: 'Instructions', description: 'تعليمات واضحة حول كيفية تعامل الذكاء الاصطناعي مع المهمة وتنفيذها.' },
      { name: 'Steps', description: 'الخطوات المتسلسلة التي يجب أن يتبعها الذكاء الاصطناعي، بالترتيب.' },
      { name: 'End Goal', description: 'النتيجة النهائية أو المُخرَج الذي تريد تحقيقه.' },
      { name: 'Narrowing', description: 'القيود والاستثناءات والضوابط — ما يجب ألا يفعله الذكاء الاصطناعي أو يتضمنه.' },
    ],
    bestFor: [
      'سير العمل المؤسسي ذو الخطوات المتسلسلة',
      'العمليات المعقدة التي تتطلب ترتيباً محدداً للتنفيذ',
      'المهام التي تحتاج إلى قيود صارمة على المخرجات',
      'مهام البحث أو التحليل متعددة المراحل',
    ],
    notFor: [
      'الأسئلة البسيطة ذات الإجابة الواحدة (استخدم APE أو RTF)',
      'المهام التي تركز على النبرة وأسلوب الصوت (استخدم CO-STAR)',
      'الكتابة الإبداعية التي تقلل فيها القيود من الجودة',
    ],
    example: {
      scenario: 'إعداد تقرير تحليل تنافسي',
      prompt: 'Role: محلل سوق أول. Instructions: حلّل سوق أدوات الذكاء الاصطناعي متعددة النماذج بموضوعية. Steps: 1) اذكر أهم 5 منافسين، 2) قارن بين الميزات، 3) حدد الثغرات. End Goal: تقرير منظم يتضمن رؤى قابلة للتنفيذ. Narrowing: لا تُدرج أدوات يقل عدد مستخدميها عن 1000 مستخدم. ركّز على الأدوات التي أُطلقت بعد عام 2023.',
    },
    faq: [
      { q: 'ما الذي يرمز إليه RISEN؟', a: 'يرمز RISEN إلى Role وInstructions وSteps وEnd Goal وNarrowing — وهو إطار عمل مصمم للمهام المؤسسية المتسلسلة والمتعددة الخطوات.' },
      { q: 'ما الفائدة من حقل Narrowing؟', a: 'يتيح لك حقل Narrowing تحديد قيود واضحة — ما ينبغي استبعاده أو تجنبه أو الالتزام به. وهذا يمنع الذكاء الاصطناعي من الخروج عن الموضوع أو تضمين محتوى غير ذي صلة.' },
      { q: 'متى يجب استخدام RISEN بدلاً من SPECS؟', a: 'استخدم RISEN عندما تتضمن مهمتك تسلسلاً واضحاً من الخطوات. استخدم SPECS عندما تحتاج إلى تحديد متطلبات تقنية معقدة دون ترتيب ثابت للخطوات.' },
    ],
  },
  ko: {
    tagline: '여러 단계로 이루어진 기업 업무를 위해 설계됨. Narrowing 필드가 AI의 출력을 정해진 범위 안에서 궤도를 벗어나지 않게 유지한다.',
    seoTitle: 'RISEN 프레임워크: AI 작업 이탈을 막는 5단계',
    metaDescription: '긴 AI 작업은 제약이 없으면 주제를 벗어난다. RISEN의 Narrowing 필드가 명확한 가드레일을 설정한다. 5가지 필드와 실제 예시, 활용 시점을 확인하자.',
    fields: [
      { name: 'Role', description: '이 작업에서 AI가 맡아야 할 전문가 역할.' },
      { name: 'Instructions', description: 'AI가 작업에 어떻게 접근하고 실행해야 하는지에 대한 명확한 지침.' },
      { name: 'Steps', description: 'AI가 순서대로 따라야 할 일련의 단계.' },
      { name: 'End Goal', description: '달성하고자 하는 최종 결과물이나 목표.' },
      { name: 'Narrowing', description: '제약, 제외 사항, 가드레일 — AI가 하지 말아야 하거나 포함하지 말아야 할 것.' },
    ],
    bestFor: [
      '순차적인 단계가 있는 기업 워크플로',
      '특정 실행 순서가 필요한 복잡한 프로세스',
      '출력에 엄격한 제약이 필요한 작업',
      '여러 단계에 걸친 리서치 또는 분석 작업',
    ],
    notFor: [
      '단순한 한 가지 답변 질문 (APE 또는 RTF 사용)',
      '톤과 목소리에 초점을 맞춘 작업 (CO-STAR 사용)',
      '제약이 품질을 떨어뜨리는 창작 글쓰기',
    ],
    example: {
      scenario: '경쟁사 분석 보고서 작성하기',
      prompt: 'Role: 시니어 시장 분석가. Instructions: 멀티 LLM 도구 시장을 객관적으로 분석하라. Steps: 1) 상위 5개 경쟁사를 나열한다, 2) 기능을 비교한다, 3) 격차를 파악한다. End Goal: 실행 가능한 인사이트를 담은 체계적인 보고서. Narrowing: 사용자 수가 1000명 미만인 도구는 포함하지 마라. 2023년 이후 출시된 도구에 집중하라.',
    },
    faq: [
      { q: 'RISEN은 무엇의 약자인가요?', a: 'RISEN은 Role, Instructions, Steps, End Goal, Narrowing의 약자로, 순차적이고 여러 단계로 이루어진 기업 업무를 위해 설계된 프레임워크입니다.' },
      { q: 'Narrowing 필드는 왜 유용한가요?', a: 'Narrowing 필드를 사용하면 제외할 것, 피할 것, 지켜야 할 범위 같은 명확한 제약을 정의할 수 있습니다. 이를 통해 AI가 주제에서 벗어나거나 관련 없는 내용을 포함하는 것을 막을 수 있습니다.' },
      { q: 'SPECS 대신 RISEN을 언제 사용해야 하나요?', a: '작업에 명확한 단계 순서가 있을 때는 RISEN을 사용하세요. 고정된 단계 순서 없이 복잡한 기술 요구사항을 정의해야 할 때는 SPECS를 사용하세요.' },
    ],
  },
},
  },
  {
    slug: 'trace',
    name: 'TRACE',
    expansion: 'Task · Request · Action · Context · Example',
    tagline: 'Show, don\'t tell. The Example field teaches the AI exactly what you want better than any description.',
    seoTitle: 'TRACE Framework: Why One Example Beats a Long Prompt',
    metaDescription: 'A single example often out-performs paragraphs of instructions. TRACE builds prompts around that fact. See all 5 fields, a real example, and limits.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'High',
    fields: [
      { name: 'Task', description: 'The broad category or type of task you are asking the AI to perform.' },
      { name: 'Request', description: 'The specific, precise request — what exactly you need.' },
      { name: 'Action', description: 'The concrete action the AI should take to fulfil the request.' },
      { name: 'Context', description: 'Relevant background, constraints, and situational information.' },
      { name: 'Example', description: 'A concrete example of what good output looks like. The most powerful field in TRACE.' },
    ],
    bestFor: [
      'Tasks where you have an example of the ideal output',
      'Few-shot prompting scenarios',
      'Replicating a writing style or format',
      'Generating structured data when you can show the schema',
    ],
    notFor: [
      'Tasks where no good example exists',
      'Creative tasks where examples constrain originality',
      'Simple factual questions (use APE)',
    ],
    example: {
      scenario: 'Generating structured product descriptions in a specific format',
      prompt: 'Task: Product description writing. Request: Write a product description for PromptQuorum. Action: Follow the exact structure in the example. Context: B2B SaaS tool, technical audience. Example: "Notion — The all-in-one workspace. Write, plan, collaborate, and get organized. Notion is everything you need — in one tool."',
    },
    related: ['risen', 'craft', 'specs'],
    faq: [
      { q: 'What does TRACE stand for?', a: 'TRACE stands for Task, Request, Action, Context, and Example — a few-shot framework where providing an example teaches the AI precisely what output you want.' },
      { q: 'Why is the Example field so powerful in TRACE?', a: 'Showing beats telling. A concrete example communicates format, tone, length, and style simultaneously — more efficiently than any written description.' },
      { q: 'How is TRACE different from RISEN?', a: 'TRACE uses examples to guide AI output; RISEN uses explicit sequential steps. Use TRACE when you can show what good looks like; use RISEN for ordered workflows.' },
    ],
    translations: {
  de: {
    tagline: 'Zeigen statt erklären. Das Feld „Example" bringt der KI genau das bei, was du willst — besser als jede Beschreibung.',
    seoTitle: 'TRACE-Framework: Ein Beispiel schlägt jeden langen Prompt',
    metaDescription: 'Ein einziges Beispiel schlägt oft ganze Absätze voller Anweisungen. TRACE baut Prompts genau darauf auf. Alle 5 Felder, ein echtes Beispiel und die Grenzen im Überblick.',
    fields: [
      { name: 'Task', description: 'Die grobe Kategorie oder Art der Aufgabe, die die KI erledigen soll.' },
      { name: 'Request', description: 'Die konkrete, präzise Anfrage — was genau du brauchst.' },
      { name: 'Action', description: 'Die konkrete Handlung, die die KI ausführen soll, um die Anfrage zu erfüllen.' },
      { name: 'Context', description: 'Relevanter Hintergrund, Einschränkungen und situative Informationen.' },
      { name: 'Example', description: 'Ein konkretes Beispiel dafür, wie ein gutes Ergebnis aussieht — das stärkste Feld in TRACE.' },
    ],
    bestFor: [
      'Aufgaben, für die du bereits ein Beispiel des idealen Ergebnisses hast',
      'Few-Shot-Prompting-Szenarien',
      'Nachbilden eines bestimmten Schreibstils oder Formats',
      'Erzeugen strukturierter Daten, wenn du das Schema zeigen kannst',
    ],
    notFor: [
      'Aufgaben, für die kein gutes Beispiel existiert',
      'Kreative Aufgaben, bei denen Beispiele die Originalität einschränken',
      'Einfache Faktenfragen (APE verwenden)',
    ],
    example: {
      scenario: 'Strukturierte Produktbeschreibungen in einem festen Format erstellen',
      prompt: 'Task: Produktbeschreibung schreiben. Request: Schreibe eine Produktbeschreibung für PromptQuorum. Action: Halte dich exakt an die Struktur im Beispiel. Context: B2B-SaaS-Tool, technisches Publikum. Example: "Notion — der All-in-one-Arbeitsbereich. Schreiben, planen, zusammenarbeiten und organisieren. Notion ist alles, was du brauchst — in einem Tool."',
    },
    faq: [
      { q: 'Wofür steht TRACE?', a: 'TRACE steht für Task, Request, Action, Context und Example — ein Few-Shot-Framework, bei dem ein Beispiel der KI genau zeigt, welches Ergebnis du erwartest.' },
      { q: 'Warum ist das Example-Feld bei TRACE so wirkungsvoll?', a: 'Zeigen wirkt stärker als erklären. Ein konkretes Beispiel vermittelt Format, Ton, Länge und Stil gleichzeitig — effizienter als jede schriftliche Beschreibung.' },
      { q: 'Wie unterscheidet sich TRACE von RISEN?', a: 'TRACE steuert die KI-Ausgabe über Beispiele, RISEN über explizite, sequenzielle Schritte. Nutze TRACE, wenn du zeigen kannst, wie ein gutes Ergebnis aussieht, und RISEN für geordnete Arbeitsabläufe.' },
    ],
  },
  fr: {
    tagline: 'Montrer plutôt qu\'expliquer. Le champ Example apprend à l\'IA exactement ce que vous voulez, mieux qu\'aucune description.',
    seoTitle: 'Framework TRACE : un exemple vaut mieux qu\'un long prompt',
    metaDescription: 'Un seul exemple surpasse souvent des paragraphes d\'instructions. TRACE construit les prompts sur cette idée. Découvrez les 5 champs, un exemple réel et ses limites.',
    fields: [
      { name: 'Task', description: 'La catégorie ou le type général de tâche que vous demandez à l\'IA d\'accomplir.' },
      { name: 'Request', description: 'La demande précise et spécifique — ce dont vous avez exactement besoin.' },
      { name: 'Action', description: 'L\'action concrète que l\'IA doit réaliser pour répondre à la demande.' },
      { name: 'Context', description: 'Le contexte pertinent, les contraintes et les informations de situation.' },
      { name: 'Example', description: 'Un exemple concret de ce à quoi ressemble un bon résultat — le champ le plus puissant de TRACE.' },
    ],
    bestFor: [
      'Les tâches pour lesquelles vous disposez d\'un exemple du résultat idéal',
      'Les scénarios de prompting few-shot',
      'La reproduction d\'un style d\'écriture ou d\'un format précis',
      'La génération de données structurées lorsque vous pouvez montrer le schéma',
    ],
    notFor: [
      'Les tâches pour lesquelles aucun bon exemple n\'existe',
      'Les tâches créatives où les exemples limitent l\'originalité',
      'Les questions factuelles simples (utilisez APE)',
    ],
    example: {
      scenario: 'Générer des descriptions de produit structurées dans un format précis',
      prompt: 'Task: Rédaction de description produit. Request: Rédige une description produit pour PromptQuorum. Action: Suis exactement la structure de l\'exemple. Context: outil SaaS B2B, public technique. Example: "Notion — l\'espace de travail tout-en-un. Écrivez, planifiez, collaborez et organisez-vous. Notion, c\'est tout ce dont vous avez besoin — dans un seul outil."',
    },
    faq: [
      { q: 'Que signifie TRACE ?', a: 'TRACE signifie Task, Request, Action, Context et Example — un framework few-shot où un exemple apprend précisément à l\'IA le résultat que vous attendez.' },
      { q: 'Pourquoi le champ Example est-il si puissant dans TRACE ?', a: 'Montrer vaut mieux qu\'expliquer. Un exemple concret transmet à la fois le format, le ton, la longueur et le style — plus efficacement qu\'aucune description écrite.' },
      { q: 'En quoi TRACE diffère-t-il de RISEN ?', a: 'TRACE guide la sortie de l\'IA par des exemples, tandis que RISEN utilise des étapes séquentielles explicites. Utilisez TRACE quand vous pouvez montrer à quoi ressemble un bon résultat, et RISEN pour des workflows ordonnés.' },
    ],
  },
  es: {
    tagline: 'Mostrar en lugar de explicar. El campo Example le enseña a la IA exactamente lo que quieres, mejor que cualquier descripción.',
    seoTitle: 'Framework TRACE: un ejemplo vale más que un prompt largo',
    metaDescription: 'Un solo ejemplo suele superar a párrafos de instrucciones. TRACE construye los prompts sobre esa idea. Descubre los 5 campos, un ejemplo real y sus límites.',
    fields: [
      { name: 'Task', description: 'La categoría o el tipo general de tarea que le pides a la IA que realice.' },
      { name: 'Request', description: 'La solicitud específica y precisa — lo que exactamente necesitas.' },
      { name: 'Action', description: 'La acción concreta que la IA debe llevar a cabo para cumplir la solicitud.' },
      { name: 'Context', description: 'El trasfondo relevante, las restricciones y la información de la situación.' },
      { name: 'Example', description: 'Un ejemplo concreto de cómo se ve un buen resultado — el campo más potente de TRACE.' },
    ],
    bestFor: [
      'Tareas para las que ya tienes un ejemplo del resultado ideal',
      'Escenarios de prompting few-shot',
      'Replicar un estilo de escritura o un formato concreto',
      'Generar datos estructurados cuando puedes mostrar el esquema',
    ],
    notFor: [
      'Tareas para las que no existe un buen ejemplo',
      'Tareas creativas donde los ejemplos limitan la originalidad',
      'Preguntas factuales sencillas (usa APE)',
    ],
    example: {
      scenario: 'Generar descripciones de producto estructuradas en un formato específico',
      prompt: 'Task: Redacción de descripción de producto. Request: Escribe una descripción de producto para PromptQuorum. Action: Sigue exactamente la estructura del ejemplo. Context: herramienta SaaS B2B, público técnico. Example: "Notion — el espacio de trabajo todo en uno. Escribe, planifica, colabora y organízate. Notion es todo lo que necesitas — en una sola herramienta."',
    },
    faq: [
      { q: '¿Qué significa TRACE?', a: 'TRACE significa Task, Request, Action, Context y Example — un framework few-shot en el que un ejemplo le enseña a la IA con precisión el resultado que esperas.' },
      { q: '¿Por qué el campo Example es tan potente en TRACE?', a: 'Mostrar vale más que explicar. Un ejemplo concreto comunica formato, tono, longitud y estilo a la vez — de forma más eficiente que cualquier descripción escrita.' },
      { q: '¿En qué se diferencia TRACE de RISEN?', a: 'TRACE guía la salida de la IA mediante ejemplos, mientras que RISEN usa pasos secuenciales explícitos. Usa TRACE cuando puedas mostrar cómo luce un buen resultado, y RISEN para flujos de trabajo ordenados.' },
    ],
  },
  pt: {
    tagline: 'Mostrar em vez de explicar. O campo Example ensina a IA exatamente o que você quer, melhor do que qualquer descrição.',
    seoTitle: 'Framework TRACE: um exemplo vale mais que um prompt longo',
    metaDescription: 'Um único exemplo costuma superar parágrafos de instruções. O TRACE constrói prompts em cima dessa ideia. Veja os 5 campos, um exemplo real e os limites.',
    fields: [
      { name: 'Task', description: 'A categoria ou o tipo geral de tarefa que você está pedindo para a IA realizar.' },
      { name: 'Request', description: 'O pedido específico e preciso — o que exatamente você precisa.' },
      { name: 'Action', description: 'A ação concreta que a IA deve tomar para atender ao pedido.' },
      { name: 'Context', description: 'O histórico relevante, as restrições e as informações da situação.' },
      { name: 'Example', description: 'Um exemplo concreto de como é um bom resultado — o campo mais poderoso do TRACE.' },
    ],
    bestFor: [
      'Tarefas em que você já tem um exemplo do resultado ideal',
      'Cenários de few-shot prompting',
      'Replicar um estilo de escrita ou formato específico',
      'Gerar dados estruturados quando você pode mostrar o esquema',
    ],
    notFor: [
      'Tarefas para as quais não existe um bom exemplo',
      'Tarefas criativas em que exemplos limitam a originalidade',
      'Perguntas factuais simples (use APE)',
    ],
    example: {
      scenario: 'Gerar descrições de produto estruturadas em um formato específico',
      prompt: 'Task: Redação de descrição de produto. Request: Escreva uma descrição de produto para o PromptQuorum. Action: Siga exatamente a estrutura do exemplo. Context: ferramenta SaaS B2B, público técnico. Example: "Notion — o espaço de trabalho tudo em um. Escreva, planeje, colabore e se organize. O Notion é tudo o que você precisa — em uma única ferramenta."',
    },
    faq: [
      { q: 'O que significa TRACE?', a: 'TRACE significa Task, Request, Action, Context e Example — um framework few-shot em que um exemplo ensina à IA, com precisão, o resultado que você espera.' },
      { q: 'Por que o campo Example é tão poderoso no TRACE?', a: 'Mostrar vale mais do que explicar. Um exemplo concreto comunica formato, tom, tamanho e estilo ao mesmo tempo — de forma mais eficiente do que qualquer descrição escrita.' },
      { q: 'Qual a diferença entre TRACE e RISEN?', a: 'O TRACE guia a saída da IA por meio de exemplos, enquanto o RISEN usa etapas sequenciais explícitas. Use o TRACE quando puder mostrar como é um bom resultado, e o RISEN para fluxos de trabalho ordenados.' },
    ],
  },
  ja: {
    tagline: '説明するより見せる。Exampleフィールドは、どんな説明よりも的確にAIへ望む出力を教える。',
    seoTitle: 'TRACEフレームワーク：長い指示より一つの例が効く理由',
    metaDescription: '一つの具体例は、長い指示文よりも高い効果を発揮することが多い。TRACEはその原則を核に構築されたフレームワーク。5つのフィールド、実例、限界まで解説。',
    fields: [
      { name: 'Task', description: 'AIに依頼するタスクの大まかなカテゴリーや種類。' },
      { name: 'Request', description: '具体的で正確な依頼内容 — 本当に必要なものは何か。' },
      { name: 'Action', description: '依頼を実現するためにAIが取るべき具体的な行動。' },
      { name: 'Context', description: '関連する背景情報、制約条件、状況に関する情報。' },
      { name: 'Example', description: '良い出力の具体例。TRACEの中で最も強力なフィールド。' },
    ],
    bestFor: [
      '理想的な出力の例がすでにある場合',
      'few-shotプロンプティングのシナリオ',
      '特定の文体やフォーマットを再現したい場合',
      'スキーマを示せる構造化データの生成',
    ],
    notFor: [
      '適切な例が存在しないタスク',
      '例が独創性を制限してしまう創造的なタスク',
      'シンプルな事実質問（APEを使用）',
    ],
    example: {
      scenario: '特定のフォーマットで構造化された商品説明文を生成する',
      prompt: 'Task: 商品説明文の作成。Request: PromptQuorumの商品説明文を書いてください。Action: 例に示した構成に正確に従ってください。Context: B2B SaaSツール、技術系読者向け。Example: 「Notion — オールインワンのワークスペース。書く、計画する、共同作業する、整理する。Notionはあなたに必要なすべてを、たった一つのツールで提供します。」',
    },
    faq: [
      { q: 'TRACEとは何の略ですか？', a: 'TRACEはTask、Request、Action、Context、Exampleの略で、例を示すことでAIに望む出力を正確に教えるfew-shotフレームワークです。' },
      { q: 'TRACEでExampleフィールドがこれほど強力なのはなぜですか？', a: '説明するより見せる方が効果的だからです。具体例はフォーマット、トーン、長さ、スタイルを同時に伝えられ、文章による説明よりも効率的です。' },
      { q: 'TRACEとRISENはどう違いますか？', a: 'TRACEは例を使ってAIの出力を導き、RISENは明示的な順序立てたステップを使います。良い出力の例を示せるならTRACEを、順序立てたワークフローにはRISENを使ってください。' },
    ],
  },
  zh: {
    tagline: '展示胜于说明。Example字段能比任何文字描述都更精准地告诉AI你想要什么。',
    seoTitle: 'TRACE框架：一个示例胜过一长串提示词指令',
    metaDescription: '一个具体示例往往胜过大段文字指令。TRACE正是基于这一原理设计的提示词框架。查看全部5个字段、真实示例及适用局限。',
    fields: [
      { name: 'Task', description: '你要求AI完成的任务的大致类别或类型。' },
      { name: 'Request', description: '具体而精确的请求——你到底需要什么。' },
      { name: 'Action', description: 'AI为满足请求应采取的具体行动。' },
      { name: 'Context', description: '相关背景、限制条件和情境信息。' },
      { name: 'Example', description: '一个展示优质输出效果的具体示例——TRACE中最有力的字段。' },
    ],
    bestFor: [
      '已有理想输出示例的任务',
      '少样本（few-shot）提示场景',
      '复刻特定写作风格或格式',
      '在能展示结构（schema）时生成结构化数据',
    ],
    notFor: [
      '找不到合适示例的任务',
      '示例会限制创造力的创意任务',
      '简单的事实性问题（使用APE）',
    ],
    example: {
      scenario: '按特定格式生成结构化的产品描述',
      prompt: 'Task: 撰写产品描述。Request: 为PromptQuorum撰写一段产品描述。Action: 严格遵循示例中的结构。Context: 面向技术受众的B2B SaaS工具。Example: "Notion——一体化工作空间。写作、规划、协作、井井有条。Notion满足你的一切所需——只需一个工具。"',
    },
    faq: [
      { q: 'TRACE代表什么？', a: 'TRACE代表Task（任务）、Request（请求）、Action（行动）、Context（背景）和Example（示例）——一种少样本框架，通过提供示例精确地告诉AI你想要的输出。' },
      { q: '为什么Example字段在TRACE中如此强大？', a: '展示胜于说明。一个具体示例能同时传达格式、语气、长度和风格——比任何文字描述都更高效。' },
      { q: 'TRACE与RISEN有什么区别？', a: 'TRACE通过示例引导AI输出，而RISEN依靠明确的顺序步骤。当你能展示优质输出的样子时使用TRACE，需要有序工作流程时使用RISEN。' },
    ],
  },
  ar: {
    tagline: 'أَرِ ولا تشرح. حقل Example يعلّم الذكاء الاصطناعي بدقة ما تريده، أفضل من أي وصف نصي.',
    seoTitle: 'إطار TRACE: مثال واحد أقوى من موجّه طويل',
    metaDescription: 'غالبًا ما يتفوق مثال واحد على فقرات كاملة من التعليمات. إطار TRACE يبني الموجّهات على هذه الفكرة. تعرّف على الحقول الخمسة، مثال حقيقي، وحدوده.',
    fields: [
      { name: 'Task', description: 'الفئة أو النوع العام للمهمة التي تطلب من الذكاء الاصطناعي تنفيذها.' },
      { name: 'Request', description: 'الطلب المحدد والدقيق — ما تحتاجه بالضبط.' },
      { name: 'Action', description: 'الإجراء الملموس الذي يجب على الذكاء الاصطناعي اتخاذه لتلبية الطلب.' },
      { name: 'Context', description: 'الخلفية ذات الصلة، والقيود، والمعلومات الظرفية.' },
      { name: 'Example', description: 'مثال ملموس يوضّح شكل الناتج الجيد — أقوى حقل في TRACE.' },
    ],
    bestFor: [
      'المهام التي يتوفر لديك فيها مثال على الناتج المثالي',
      'سيناريوهات التلقين بأمثلة قليلة (few-shot)',
      'محاكاة أسلوب كتابة أو تنسيق معيّن',
      'توليد بيانات منظّمة عندما يمكنك عرض المخطط (schema)',
    ],
    notFor: [
      'المهام التي لا يوجد لها مثال جيد',
      'المهام الإبداعية حيث تحدّ الأمثلة من الأصالة',
      'الأسئلة الواقعية البسيطة (استخدم APE)',
    ],
    example: {
      scenario: 'توليد أوصاف منتجات منظّمة بتنسيق محدد',
      prompt: 'Task: كتابة وصف منتج. Request: اكتب وصف منتج لـPromptQuorum. Action: اتبع البنية الموجودة في المثال بدقة. Context: أداة SaaS للأعمال (B2B)، جمهور تقني. Example: "Notion — مساحة العمل الشاملة. اكتب، خطّط، تعاون، ونظّم. Notion يمنحك كل ما تحتاجه — في أداة واحدة."',
    },
    faq: [
      { q: 'ما الذي يرمز إليه TRACE؟', a: 'يرمز TRACE إلى Task وRequest وAction وContext وExample — إطار عمل قائم على الأمثلة القليلة يعلّم الذكاء الاصطناعي بدقة الناتج الذي تريده من خلال تقديم مثال.' },
      { q: 'لماذا يُعد حقل Example بهذه القوة في TRACE؟', a: 'الإظهار أقوى من الشرح. المثال الملموس ينقل التنسيق والنبرة والطول والأسلوب في آن واحد — بكفاءة تفوق أي وصف مكتوب.' },
      { q: 'ما الفرق بين TRACE وRISEN؟', a: 'يعتمد TRACE على الأمثلة لتوجيه ناتج الذكاء الاصطناعي، بينما يعتمد RISEN على خطوات متسلسلة صريحة. استخدم TRACE عندما يمكنك إظهار شكل الناتج الجيد، واستخدم RISEN لسير العمل المرتب بخطوات.' },
    ],
  },
  ko: {
    tagline: '설명하지 말고 보여줘라. Example 필드는 어떤 설명보다도 AI에게 원하는 결과를 정확히 알려준다.',
    seoTitle: 'TRACE 프레임워크: 예시 하나가 긴 프롬프트를 이긴다',
    metaDescription: '예시 하나가 긴 지시문보다 더 효과적인 경우가 많습니다. TRACE는 이 원리를 바탕으로 프롬프트를 설계합니다. 5가지 필드, 실제 예시, 한계까지 확인하세요.',
    fields: [
      { name: 'Task', description: 'AI에게 요청하는 작업의 대략적인 범주나 유형.' },
      { name: 'Request', description: '구체적이고 정확한 요청 — 정확히 무엇이 필요한지.' },
      { name: 'Action', description: '요청을 충족하기 위해 AI가 취해야 할 구체적인 행동.' },
      { name: 'Context', description: '관련 배경, 제약 조건, 상황 정보.' },
      { name: 'Example', description: '좋은 결과물이 어떤 모습인지 보여주는 구체적인 예시 — TRACE에서 가장 강력한 필드.' },
    ],
    bestFor: [
      '이상적인 결과물의 예시가 이미 있는 작업',
      '퓨샷(few-shot) 프롬프팅 시나리오',
      '특정 글쓰기 스타일이나 형식을 재현하는 작업',
      '스키마를 보여줄 수 있을 때 구조화된 데이터를 생성하는 작업',
    ],
    notFor: [
      '적절한 예시가 존재하지 않는 작업',
      '예시가 독창성을 제한하는 창의적인 작업',
      '단순한 사실 확인 질문 (APE 사용)',
    ],
    example: {
      scenario: '특정 형식으로 구조화된 제품 설명 생성하기',
      prompt: 'Task: 제품 설명 작성. Request: PromptQuorum을 위한 제품 설명을 작성하세요. Action: 예시에 나온 구조를 정확히 따르세요. Context: B2B SaaS 도구, 기술 중심 독자. Example: "Notion — 올인원 워크스페이스. 작성하고, 계획하고, 협업하고, 정리하세요. Notion 하나면 필요한 모든 것이 해결됩니다."',
    },
    faq: [
      { q: 'TRACE는 무엇의 약자인가요?', a: 'TRACE는 Task, Request, Action, Context, Example의 약자로, 예시를 제공해 AI에게 원하는 결과물을 정확히 알려주는 퓨샷 프레임워크입니다.' },
      { q: 'TRACE에서 Example 필드가 그렇게 강력한 이유는 무엇인가요?', a: '설명보다 보여주는 것이 더 효과적이기 때문입니다. 구체적인 예시는 형식, 어조, 길이, 스타일을 동시에 전달하며, 어떤 서술형 설명보다 효율적입니다.' },
      { q: 'TRACE와 RISEN은 어떻게 다른가요?', a: 'TRACE는 예시를 통해 AI의 출력을 유도하고, RISEN은 명시적인 순차적 단계를 사용합니다. 좋은 결과물을 예시로 보여줄 수 있다면 TRACE를, 순서가 있는 워크플로에는 RISEN을 사용하세요.' },
    ],
  },
},
  },
  {
    slug: 'ape',
    name: 'APE',
    expansion: 'Action · Purpose · Expectation',
    tagline: 'Three fields, high impact. The fastest framework — ideal for everyday prompts before graduating to more complex structures.',
    seoTitle: 'APE Framework: The 3-Field Prompt for Fast, Everyday Use',
    metaDescription: 'Not every prompt needs 6 fields. APE covers Action, Purpose, and Expectation for quick, everyday requests. See a real example and when to graduate to CRAFT.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'Low',
    fields: [
      { name: 'Action', description: 'What you want the AI to do — the verb of your request.' },
      { name: 'Purpose', description: 'Why you need it — the goal or use case behind the request.' },
      { name: 'Expectation', description: 'What a good response looks like — format, length, tone, or specific requirements.' },
    ],
    bestFor: [
      'Quick, everyday prompts',
      'First-pass drafts before refining with a more detailed framework',
      'Situations where time matters more than polish',
      'Users new to prompt engineering',
    ],
    notFor: [
      'Complex multi-step tasks (use RISEN)',
      'Tasks requiring precise voice control (use CO-STAR)',
      'Tasks where audience definition is critical (use CRAFT)',
    ],
    example: {
      scenario: 'Summarising a long document quickly',
      prompt: 'Action: Summarise the following meeting transcript. Purpose: I need a quick reference for what was decided. Expectation: 5 bullet points, each under 20 words, decisions only.',
    },
    related: ['rtf', 'craft', 'single-prompt-line'],
    faq: [
      { q: 'What does APE stand for?', a: 'APE stands for Action, Purpose, and Expectation — a minimal 3-field framework ideal for quick, everyday prompts.' },
      { q: 'When should I upgrade from APE to a more complex framework?', a: 'Upgrade when your output quality plateaus. If APE gives inconsistent results, switch to CRAFT or CO-STAR for more control over voice, format, and audience.' },
      { q: 'Is APE good for beginners?', a: 'Yes. APE is the best starting framework for beginners — it teaches the habit of structured prompting without overwhelming complexity.' },
    ],
    translations: {
  de: {
    tagline: 'Drei Felder, große Wirkung. Das schnellste Framework — ideal für den Alltag, bevor du zu komplexeren Strukturen übergehst.',
    fields: [
      { name: 'Action', description: 'Was die KI tun soll — das Verb deiner Anfrage.' },
      { name: 'Purpose', description: 'Warum du es brauchst — das Ziel oder der Anwendungsfall hinter der Anfrage.' },
      { name: 'Expectation', description: 'Wie eine gute Antwort aussieht — Format, Länge, Ton oder konkrete Anforderungen.' },
    ],
    bestFor: [
      'Schnelle Alltags-Prompts',
      'Erste Entwürfe, bevor du sie mit einem detaillierteren Framework verfeinerst',
      'Situationen, in denen Zeit wichtiger ist als Feinschliff',
      'Einsteiger:innen im Prompt Engineering',
    ],
    notFor: [
      'Komplexe mehrstufige Aufgaben (RISEN verwenden)',
      'Aufgaben mit präziser Tonalitätskontrolle (CO-STAR verwenden)',
      'Aufgaben, bei denen die Zielgruppendefinition entscheidend ist (CRAFT verwenden)',
    ],
    example: {
      scenario: 'Ein langes Dokument schnell zusammenfassen',
      prompt: 'Action: Fasse das folgende Meeting-Transkript zusammen. Purpose: Ich brauche eine schnelle Übersicht über die getroffenen Entscheidungen. Expectation: 5 Stichpunkte, je unter 20 Wörtern, nur Entscheidungen.',
    },
    faq: [
      { q: 'Wofür steht APE?', a: 'APE steht für Action, Purpose und Expectation — ein minimalistisches 3-Felder-Framework, ideal für schnelle Alltags-Prompts.' },
      { q: 'Wann sollte ich von APE auf ein komplexeres Framework umsteigen?', a: 'Steig um, sobald sich die Qualität deiner Ergebnisse nicht mehr verbessert. Liefert APE inkonsistente Resultate, wechsle zu CRAFT oder CO-STAR für mehr Kontrolle über Tonalität, Format und Zielgruppe.' },
      { q: 'Eignet sich APE für Einsteiger?', a: 'Ja. APE ist das beste Einstiegs-Framework für Anfänger:innen — es vermittelt die Gewohnheit strukturierter Prompts, ohne mit Komplexität zu überfordern.' },
    ],
    seoTitle: 'APE-Framework: Der 3-Felder-Prompt für den schnellen Alltag',
    metaDescription: 'Nicht jeder Prompt braucht 6 Felder. APE deckt Action, Purpose und Expectation für schnelle Alltagsanfragen ab. Mit Beispiel und Umstiegstipp zu CRAFT.',
  },
  fr: {
    tagline: 'Trois champs, un fort impact. Le framework le plus rapide — idéal pour les prompts du quotidien avant de passer à des structures plus élaborées.',
    fields: [
      { name: 'Action', description: 'Ce que vous voulez que l\'IA fasse — le verbe de votre demande.' },
      { name: 'Purpose', description: 'Pourquoi vous en avez besoin — l\'objectif ou le cas d\'usage derrière la demande.' },
      { name: 'Expectation', description: 'À quoi ressemble une bonne réponse — format, longueur, ton ou exigences précises.' },
    ],
    bestFor: [
      'Des prompts rapides du quotidien',
      'Des premiers jets avant de les affiner avec un framework plus détaillé',
      'Les situations où la rapidité prime sur la finition',
      'Les débutants en prompt engineering',
    ],
    notFor: [
      'Les tâches complexes à plusieurs étapes (utilisez RISEN)',
      'Les tâches exigeant un contrôle précis du ton (utilisez CO-STAR)',
      'Les tâches où la définition du public est essentielle (utilisez CRAFT)',
    ],
    example: {
      scenario: 'Résumer rapidement un document long',
      prompt: 'Action: Résume la transcription de réunion suivante. Purpose: J\'ai besoin d\'un aperçu rapide des décisions prises. Expectation: 5 puces, chacune de moins de 20 mots, uniquement les décisions.',
    },
    faq: [
      { q: 'Que signifie APE ?', a: 'APE signifie Action, Purpose et Expectation — un framework minimaliste à 3 champs, idéal pour les prompts rapides du quotidien.' },
      { q: 'Quand passer d\'APE à un framework plus complexe ?', a: 'Passez à un framework plus complexe quand la qualité de vos résultats stagne. Si APE donne des résultats inégaux, optez pour CRAFT ou CO-STAR afin de mieux contrôler le ton, le format et le public.' },
      { q: 'APE convient-il aux débutants ?', a: 'Oui. APE est le meilleur framework pour débuter — il installe le réflexe du prompt structuré sans complexité excessive.' },
    ],
    seoTitle: 'Framework APE : le prompt à 3 champs pour aller vite',
    metaDescription: 'Un prompt n\'a pas toujours besoin de 6 champs. APE couvre Action, Purpose et Expectation pour vos demandes du quotidien, avec un exemple concret et le passage à CRAFT.',
  },
  es: {
    tagline: 'Tres campos, gran impacto. El framework más rápido — ideal para prompts del día a día antes de pasar a estructuras más complejas.',
    fields: [
      { name: 'Action', description: 'Lo que quieres que la IA haga — el verbo de tu solicitud.' },
      { name: 'Purpose', description: 'Por qué lo necesitas — el objetivo o caso de uso detrás de la solicitud.' },
      { name: 'Expectation', description: 'Cómo debe verse una buena respuesta — formato, extensión, tono o requisitos específicos.' },
    ],
    bestFor: [
      'Prompts rápidos del día a día',
      'Primeros borradores antes de refinarlos con un framework más detallado',
      'Situaciones donde la rapidez importa más que el acabado',
      'Usuarios que se inician en el prompt engineering',
    ],
    notFor: [
      'Tareas complejas de varios pasos (usa RISEN)',
      'Tareas que requieren un control preciso del tono (usa CO-STAR)',
      'Tareas donde definir la audiencia es clave (usa CRAFT)',
    ],
    example: {
      scenario: 'Resumir rápidamente un documento largo',
      prompt: 'Action: Resume la siguiente transcripción de una reunión. Purpose: Necesito una referencia rápida de lo que se decidió. Expectation: 5 puntos, cada uno de menos de 20 palabras, solo decisiones.',
    },
    faq: [
      { q: '¿Qué significa APE?', a: 'APE significa Action, Purpose y Expectation — un framework minimalista de 3 campos, ideal para prompts rápidos del día a día.' },
      { q: '¿Cuándo debo pasar de APE a un framework más complejo?', a: 'Cambia cuando la calidad de tus resultados se estanque. Si APE te da resultados inconsistentes, usa CRAFT o CO-STAR para tener más control sobre el tono, el formato y la audiencia.' },
      { q: '¿Es APE bueno para principiantes?', a: 'Sí. APE es el mejor framework para empezar — enseña el hábito de estructurar prompts sin abrumar con complejidad.' },
    ],
    seoTitle: 'Framework APE: el prompt de 3 campos para el día a día',
    metaDescription: 'No todo prompt necesita 6 campos. APE cubre Action, Purpose y Expectation para solicitudes rápidas del día a día. Con ejemplo real y cuándo pasar a CRAFT.',
  },
  pt: {
    tagline: 'Três campos, alto impacto. O framework mais rápido — ideal para prompts do dia a dia antes de partir para estruturas mais complexas.',
    fields: [
      { name: 'Action', description: 'O que você quer que a IA faça — o verbo do seu pedido.' },
      { name: 'Purpose', description: 'Por que você precisa disso — o objetivo ou caso de uso por trás do pedido.' },
      { name: 'Expectation', description: 'Como deve ser uma boa resposta — formato, tamanho, tom ou requisitos específicos.' },
    ],
    bestFor: [
      'Prompts rápidos do dia a dia',
      'Primeiros rascunhos antes de refinar com um framework mais detalhado',
      'Situações em que velocidade importa mais que polimento',
      'Quem está começando em prompt engineering',
    ],
    notFor: [
      'Tarefas complexas com várias etapas (use o RISEN)',
      'Tarefas que exigem controle preciso de tom (use o CO-STAR)',
      'Tarefas em que definir o público é essencial (use o CRAFT)',
    ],
    example: {
      scenario: 'Resumir um documento longo rapidamente',
      prompt: 'Action: Resuma a transcrição de reunião a seguir. Purpose: Preciso de uma referência rápida do que foi decidido. Expectation: 5 tópicos, cada um com menos de 20 palavras, só as decisões.',
    },
    faq: [
      { q: 'O que significa APE?', a: 'APE significa Action, Purpose e Expectation — um framework minimalista de 3 campos, ideal para prompts rápidos do dia a dia.' },
      { q: 'Quando devo migrar do APE para um framework mais complexo?', a: 'Migre quando a qualidade dos resultados estagnar. Se o APE gerar resultados inconsistentes, use o CRAFT ou o CO-STAR para ter mais controle sobre tom, formato e público.' },
      { q: 'O APE é bom para iniciantes?', a: 'Sim. O APE é o melhor framework para começar — ele cria o hábito de estruturar prompts sem sobrecarregar com complexidade.' },
    ],
    seoTitle: 'Framework APE: o prompt de 3 campos para o dia a dia',
    metaDescription: 'Nem todo prompt precisa de 6 campos. O APE cobre Action, Purpose e Expectation para pedidos rápidos do dia a dia. Veja um exemplo real e quando migrar para o CRAFT.',
  },
  ja: {
    tagline: '3つのフィールドで大きな効果。最も手軽なフレームワークで、より複雑な構成に進む前の日常的なプロンプトに最適です。',
    fields: [
      { name: 'Action', description: 'AIに何をしてほしいか — リクエストの動詞にあたる部分。' },
      { name: 'Purpose', description: 'なぜそれが必要か — リクエストの背景にある目的やユースケース。' },
      { name: 'Expectation', description: '良い回答がどのようなものか — フォーマット、長さ、トーン、または具体的な要件。' },
    ],
    bestFor: [
      '日常的でスピード重視のプロンプト',
      'より詳細なフレームワークで仕上げる前の初稿作成',
      '仕上がりよりもスピードが重視される場面',
      'プロンプトエンジニアリングを始めたばかりのユーザー',
    ],
    notFor: [
      '複雑な複数ステップのタスク(RISENを使用)',
      'トーンを精密に制御したいタスク(CO-STARを使用)',
      '対象読者の定義が重要なタスク(CRAFTを使用)',
    ],
    example: {
      scenario: '長い文書を素早く要約する',
      prompt: 'Action: 以下の会議の文字起こしを要約してください。Purpose: 決定事項をすぐに確認できる資料が必要です。Expectation: 箇条書き5点、各20語以内、決定事項のみ。',
    },
    faq: [
      { q: 'APEとは何の略ですか?', a: 'APEはAction、Purpose、Expectationの略で、日常的でスピード重視のプロンプトに最適な、最小構成の3フィールドフレームワークです。' },
      { q: 'APEからより複雑なフレームワークに切り替えるタイミングは?', a: '出力の質が頭打ちになったら切り替えどきです。APEの結果が安定しない場合は、トーン・フォーマット・対象読者をより細かく制御できるCRAFTやCO-STARに移行しましょう。' },
      { q: 'APEは初心者に向いていますか?', a: 'はい。APEは初心者に最適な入門フレームワークで、複雑さに圧倒されることなく、構造化されたプロンプトを書く習慣が身につきます。' },
    ],
    seoTitle: 'APEフレームワーク:3項目で書く時短プロンプト術',
    metaDescription: 'プロンプトに6項目は不要な場合も。APEはAction・Purpose・Expectationの3項目で日常的な依頼に対応します。実例とCRAFTへの移行タイミングも解説。',
  },
  zh: {
    tagline: '三个字段,高效直达。最快捷的框架——适合日常提示词,是进阶到更复杂结构之前的最佳起点。',
    fields: [
      { name: 'Action', description: '你希望AI做什么——你请求中的动词部分。' },
      { name: 'Purpose', description: '你为什么需要它——请求背后的目标或使用场景。' },
      { name: 'Expectation', description: '好的回答应该是什么样子——格式、长度、语气或具体要求。' },
    ],
    bestFor: [
      '快速的日常提示词',
      '在用更详细的框架打磨之前的初稿',
      '时间比打磨更重要的场景',
      '刚接触提示词工程的用户',
    ],
    notFor: [
      '复杂的多步骤任务(使用RISEN)',
      '需要精确控制语气的任务(使用CO-STAR)',
      '受众定义至关重要的任务(使用CRAFT)',
    ],
    example: {
      scenario: '快速总结一份长文档',
      prompt: 'Action: 总结以下会议记录。Purpose: 我需要快速了解会上做了哪些决定。Expectation: 5个要点,每条不超过20个词,只列决定事项。',
    },
    faq: [
      { q: 'APE代表什么?', a: 'APE代表Action(行动)、Purpose(目的)和Expectation(期望)——一个极简的三字段框架,适合快速的日常提示词。' },
      { q: '什么时候该从APE升级到更复杂的框架?', a: '当输出质量遇到瓶颈时就该升级了。如果APE给出的结果不稳定,可以改用CRAFT或CO-STAR,以便更精确地控制语气、格式和受众。' },
      { q: 'APE适合新手吗?', a: '适合。APE是新手最好的入门框架——它能培养结构化写提示词的习惯,又不会因为过于复杂而让人望而却步。' },
    ],
    seoTitle: 'APE框架:3个字段搞定日常提示词',
    metaDescription: '不是每个提示词都需要6个字段。APE用Action、Purpose、Expectation三个字段应对日常请求,附真实示例,以及何时该升级到CRAFT。',
  },
  ar: {
    tagline: 'ثلاثة حقول بتأثير كبير. أسرع إطار عمل—مثالي للأوامر اليومية قبل الانتقال إلى بنى أكثر تعقيدًا.',
    fields: [
      { name: 'Action', description: 'ما تريد أن يفعله الذكاء الاصطناعي—فعل طلبك.' },
      { name: 'Purpose', description: 'لماذا تحتاج إليه—الهدف أو حالة الاستخدام وراء الطلب.' },
      { name: 'Expectation', description: 'كيف يبدو الرد الجيد—التنسيق، الطول، النبرة، أو المتطلبات المحددة.' },
    ],
    bestFor: [
      'الأوامر اليومية السريعة',
      'المسودات الأولى قبل تحسينها باستخدام إطار عمل أكثر تفصيلاً',
      'المواقف التي يكون فيها الوقت أهم من الصقل',
      'المستخدمون الجدد في هندسة الأوامر',
    ],
    notFor: [
      'المهام المعقدة متعددة الخطوات (استخدم RISEN)',
      'المهام التي تتطلب تحكمًا دقيقًا في النبرة (استخدم CO-STAR)',
      'المهام التي يكون فيها تحديد الجمهور أمرًا حاسمًا (استخدم CRAFT)',
    ],
    example: {
      scenario: 'تلخيص مستند طويل بسرعة',
      prompt: 'Action: لخّص محضر الاجتماع التالي. Purpose: أحتاج إلى مرجع سريع لما تم اتخاذه من قرارات. Expectation: 5 نقاط، كل واحدة أقل من 20 كلمة، القرارات فقط.',
    },
    faq: [
      { q: 'ماذا يعني APE؟', a: 'يشير APE إلى Action وPurpose وExpectation—إطار عمل مبسّط من 3 حقول، مثالي للأوامر اليومية السريعة.' },
      { q: 'متى يجب الانتقال من APE إلى إطار عمل أكثر تعقيدًا؟', a: 'انتقل عندما تصل جودة النتائج إلى حد ثابت. إذا كانت نتائج APE غير متسقة، فانتقل إلى CRAFT أو CO-STAR للحصول على تحكم أكبر في النبرة والتنسيق والجمهور.' },
      { q: 'هل APE مناسب للمبتدئين؟', a: 'نعم. APE هو أفضل إطار عمل للبدء بالنسبة للمبتدئين—فهو يرسّخ عادة صياغة الأوامر بشكل منظم دون تعقيد مُرهق.' },
    ],
    seoTitle: 'إطار APE: أمر بثلاثة حقول للاستخدام اليومي السريع',
    metaDescription: 'ليس كل أمر يحتاج إلى 6 حقول. يغطي APE عناصر Action وPurpose وExpectation للطلبات اليومية السريعة. شاهد مثالاً حقيقيًا ومتى تنتقل إلى CRAFT.',
  },
  ko: {
    tagline: '3개 필드로 큰 효과를. 가장 빠른 프레임워크로, 더 복잡한 구조로 넘어가기 전 일상적인 프롬프트에 이상적입니다.',
    fields: [
      { name: 'Action', description: 'AI가 무엇을 하길 원하는지 — 요청의 동사에 해당하는 부분.' },
      { name: 'Purpose', description: '왜 필요한지 — 요청 뒤에 있는 목표나 사용 사례.' },
      { name: 'Expectation', description: '좋은 응답이 어떤 모습이어야 하는지 — 형식, 분량, 어조, 또는 구체적인 요구사항.' },
    ],
    bestFor: [
      '빠르고 일상적인 프롬프트',
      '더 상세한 프레임워크로 다듬기 전의 초안 작성',
      '완성도보다 속도가 중요한 상황',
      '프롬프트 엔지니어링을 처음 접하는 사용자',
    ],
    notFor: [
      '복잡한 다단계 작업(RISEN 사용)',
      '정밀한 어조 제어가 필요한 작업(CO-STAR 사용)',
      '대상 독자 정의가 중요한 작업(CRAFT 사용)',
    ],
    example: {
      scenario: '긴 문서를 빠르게 요약하기',
      prompt: 'Action: 다음 회의록을 요약해줘. Purpose: 결정된 사항을 빠르게 참고할 자료가 필요해. Expectation: 5개의 글머리 기호, 각 20단어 이내, 결정사항만.',
    },
    faq: [
      { q: 'APE는 무엇의 약자인가요?', a: 'APE는 Action, Purpose, Expectation의 약자로, 빠르고 일상적인 프롬프트에 이상적인 최소 3필드 프레임워크입니다.' },
      { q: '언제 APE에서 더 복잡한 프레임워크로 넘어가야 하나요?', a: '결과물의 품질이 정체될 때 넘어가세요. APE의 결과가 일관되지 않다면, 어조와 형식, 대상 독자를 더 세밀하게 제어할 수 있는 CRAFT나 CO-STAR로 전환하세요.' },
      { q: 'APE는 초보자에게 적합한가요?', a: '네. APE는 초보자에게 가장 좋은 입문 프레임워크입니다 — 과한 복잡함 없이 구조화된 프롬프트 작성 습관을 길러줍니다.' },
    ],
    seoTitle: 'APE 프레임워크: 빠른 일상 프롬프트를 위한 3필드 구조',
    metaDescription: '모든 프롬프트에 6개 필드가 필요한 건 아닙니다. APE는 Action, Purpose, Expectation 3개 필드로 빠른 일상 요청을 처리합니다. 실제 예시와 CRAFT로 넘어갈 시점도 확인하세요.',
  },
},
  },
  {
    slug: 'specs',
    name: 'SPECS',
    expansion: 'Situation · Purpose · Expected Output · Context · Style',
    tagline: 'Detail-oriented and precise. The Expected Output field eliminates guesswork and is ideal for complex technical tasks.',
    seoTitle: 'SPECS Framework: 5 Fields for Precise Technical Prompts',
    metaDescription: 'Vague requirements produce vague AI output. SPECS forces an exact Expected Output field before you ask. See all 5 fields, a real example, and use case.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'High',
    fields: [
      { name: 'Situation', description: 'The current state or problem that needs to be addressed.' },
      { name: 'Purpose', description: 'Why this task matters — the business or personal goal behind it.' },
      { name: 'Expected Output', description: 'An exact description of what the output should contain, formatted as, and deliver.' },
      { name: 'Context', description: 'Constraints, background, relevant data, or domain-specific information.' },
      { name: 'Style', description: 'The voice, format, and presentation style for the output.' },
    ],
    bestFor: [
      'Complex technical analysis and research tasks',
      'Tasks with precise output requirements',
      'Scenarios where the AI needs extensive context',
      'Professional deliverables with defined specifications',
    ],
    notFor: [
      'Quick everyday tasks (use APE or RTF)',
      'Creative tasks where open-endedness is valuable',
      'Tasks with a natural step-by-step flow (use RISEN)',
    ],
    example: {
      scenario: 'Producing a technical specification document',
      prompt: 'Situation: We need an API integration between our CRM and email platform. Purpose: Automate lead nurturing workflows. Expected Output: A 500-word technical spec with endpoint list, auth method, and error handling requirements. Context: REST APIs, OAuth 2.0, 10k contacts. Style: Technical, structured with headers.',
    },
    related: ['risen', 'co-star', 'trace'],
    faq: [
      { q: 'What does SPECS stand for?', a: 'SPECS stands for Situation, Purpose, Expected Output, Context, and Style — a high-detail framework ideal for complex technical and professional tasks.' },
      { q: 'What makes the Expected Output field unique?', a: 'The Expected Output field forces you to define exactly what success looks like before you ask the AI, preventing vague or misaligned responses.' },
      { q: 'How is SPECS different from CO-STAR?', a: 'SPECS focuses on defining output requirements precisely; CO-STAR focuses on controlling voice, tone, and audience. Use SPECS for technical deliverables, CO-STAR for content.' },
    ],
    translations: {
  de: {
    tagline: 'Detailorientiert und präzise. Das Feld Expected Output eliminiert Rätselraten und eignet sich ideal für komplexe technische Aufgaben.',
    seoTitle: 'SPECS-Framework: 5 Felder für präzise Tech-Prompts',
    metaDescription: 'Vage Anforderungen erzeugen vage KI-Ausgaben. SPECS erzwingt ein exaktes Expected-Output-Feld, bevor du fragst. Alle 5 Felder, ein echtes Beispiel und der passende Einsatzbereich.',
    fields: [
      { name: 'Situation', description: 'Der aktuelle Zustand oder das Problem, das angegangen werden muss.' },
      { name: 'Purpose', description: 'Warum diese Aufgabe wichtig ist — das geschäftliche oder persönliche Ziel dahinter.' },
      { name: 'Expected Output', description: 'Eine exakte Beschreibung dessen, was die Ausgabe enthalten, wie sie formatiert sein und was sie liefern soll.' },
      { name: 'Context', description: 'Einschränkungen, Hintergrundinformationen, relevante Daten oder Fachwissen zur Domäne.' },
      { name: 'Style', description: 'Der Tonfall, das Format und die Präsentationsweise der Ausgabe.' },
    ],
    bestFor: [
      'Komplexe technische Analysen und Recherche-Aufgaben',
      'Aufgaben mit präzisen Anforderungen an die Ausgabe',
      'Szenarien, in denen die KI umfangreichen Kontext benötigt',
      'Professionelle Arbeitsergebnisse mit klar definierten Spezifikationen',
    ],
    notFor: [
      'Schnelle Alltagsaufgaben (APE oder RTF verwenden)',
      'Kreative Aufgaben, bei denen Offenheit von Vorteil ist',
      'Aufgaben mit natürlichem Schritt-für-Schritt-Ablauf (RISEN verwenden)',
    ],
    example: {
      scenario: 'Ein technisches Spezifikationsdokument erstellen',
      prompt: 'Situation: Wir benötigen eine API-Integration zwischen unserem CRM und unserer E-Mail-Plattform. Purpose: Automatisierung der Lead-Nurturing-Workflows. Expected Output: Eine technische Spezifikation mit 500 Wörtern, inklusive Endpoint-Liste, Auth-Methode und Anforderungen an die Fehlerbehandlung. Context: REST-APIs, OAuth 2.0, 10.000 Kontakte. Style: Technisch, strukturiert mit Überschriften.',
    },
    faq: [
      { q: 'Wofür steht SPECS?', a: 'SPECS steht für Situation, Purpose, Expected Output, Context und Style — ein detailreiches Framework, ideal für komplexe technische und professionelle Aufgaben.' },
      { q: 'Was macht das Feld Expected Output besonders?', a: 'Das Feld Expected Output zwingt dich dazu, genau zu definieren, wie Erfolg aussieht, bevor du die KI überhaupt fragst — das verhindert vage oder ungenaue Antworten.' },
      { q: 'Wie unterscheidet sich SPECS von CO-STAR?', a: 'SPECS konzentriert sich darauf, Ausgabeanforderungen präzise zu definieren; CO-STAR konzentriert sich auf Tonfall, Stimme und Zielgruppe. Nutze SPECS für technische Arbeitsergebnisse, CO-STAR für Content.' },
    ],
  },
  fr: {
    tagline: "Axé sur le détail et la précision. Le champ Expected Output élimine les approximations et convient parfaitement aux tâches techniques complexes.",
    seoTitle: 'Framework SPECS : 5 champs pour des prompts techniques précis',
    metaDescription: "Des exigences vagues produisent des résultats vagues. SPECS impose un champ Expected Output exact avant de solliciter l'IA. Les 5 champs, un exemple concret et son usage idéal.",
    fields: [
      { name: 'Situation', description: "L'état actuel ou le problème à résoudre." },
      { name: 'Purpose', description: "Pourquoi cette tâche compte — l'objectif professionnel ou personnel qui la motive." },
      { name: 'Expected Output', description: 'Une description exacte de ce que le résultat doit contenir, comment il doit être formaté et ce qu\'il doit livrer.' },
      { name: 'Context', description: 'Les contraintes, le contexte, les données pertinentes ou les connaissances spécifiques au domaine.' },
      { name: 'Style', description: 'Le ton, le format et la présentation attendus pour le résultat.' },
    ],
    bestFor: [
      'Analyses techniques complexes et tâches de recherche',
      'Tâches avec des exigences de résultat précises',
      "Situations où l'IA a besoin d'un contexte étendu",
      'Livrables professionnels avec des spécifications définies',
    ],
    notFor: [
      'Tâches rapides du quotidien (utiliser APE ou RTF)',
      "Tâches créatives où l'ouverture est un atout",
      'Tâches suivant un déroulé naturel étape par étape (utiliser RISEN)',
    ],
    example: {
      scenario: 'Rédiger un document de spécifications techniques',
      prompt: "Situation: Nous avons besoin d'une intégration API entre notre CRM et notre plateforme d'e-mailing. Purpose: Automatiser les workflows de lead nurturing. Expected Output: Une spécification technique de 500 mots avec la liste des endpoints, la méthode d'authentification et les exigences de gestion des erreurs. Context: API REST, OAuth 2.0, 10 000 contacts. Style: Technique, structuré avec des titres.",
    },
    faq: [
      { q: 'Que signifie SPECS ?', a: 'SPECS signifie Situation, Purpose, Expected Output, Context et Style — un framework très détaillé, idéal pour les tâches techniques et professionnelles complexes.' },
      { q: "Qu'est-ce qui rend le champ Expected Output unique ?", a: "Le champ Expected Output vous oblige à définir précisément à quoi ressemble le succès avant même de solliciter l'IA, ce qui évite les réponses vagues ou mal alignées." },
      { q: 'En quoi SPECS diffère-t-il de CO-STAR ?', a: 'SPECS se concentre sur la définition précise des exigences de résultat, tandis que CO-STAR se concentre sur le contrôle du ton, de la voix et de l\'audience. Utilisez SPECS pour les livrables techniques, CO-STAR pour le contenu.' },
    ],
  },
  es: {
    tagline: 'Orientado al detalle y la precisión. El campo Expected Output elimina las conjeturas y es ideal para tareas técnicas complejas.',
    seoTitle: 'Framework SPECS: 5 campos para prompts técnicos precisos',
    metaDescription: 'Los requisitos vagos producen resultados vagos. SPECS exige un campo Expected Output exacto antes de preguntar. Los 5 campos, un ejemplo real y su mejor uso.',
    fields: [
      { name: 'Situation', description: 'El estado actual o el problema que hay que resolver.' },
      { name: 'Purpose', description: 'Por qué importa esta tarea — el objetivo empresarial o personal detrás de ella.' },
      { name: 'Expected Output', description: 'Una descripción exacta de lo que debe contener el resultado, cómo debe estar formateado y qué debe entregar.' },
      { name: 'Context', description: 'Restricciones, antecedentes, datos relevantes o información específica del dominio.' },
      { name: 'Style', description: 'El tono, el formato y la presentación esperados para el resultado.' },
    ],
    bestFor: [
      'Análisis técnicos complejos y tareas de investigación',
      'Tareas con requisitos de salida precisos',
      'Escenarios en los que la IA necesita mucho contexto',
      'Entregables profesionales con especificaciones definidas',
    ],
    notFor: [
      'Tareas cotidianas rápidas (usar APE o RTF)',
      'Tareas creativas donde la apertura aporta valor',
      'Tareas con un flujo natural paso a paso (usar RISEN)',
    ],
    example: {
      scenario: 'Elaborar un documento de especificaciones técnicas',
      prompt: 'Situation: Necesitamos una integración de API entre nuestro CRM y nuestra plataforma de email. Purpose: Automatizar los flujos de nutrición de leads. Expected Output: Una especificación técnica de 500 palabras con la lista de endpoints, el método de autenticación y los requisitos de manejo de errores. Context: APIs REST, OAuth 2.0, 10.000 contactos. Style: Técnico, estructurado con encabezados.',
    },
    faq: [
      { q: '¿Qué significa SPECS?', a: 'SPECS son las siglas de Situation, Purpose, Expected Output, Context y Style — un framework muy detallado, ideal para tareas técnicas y profesionales complejas.' },
      { q: '¿Qué hace especial al campo Expected Output?', a: 'El campo Expected Output te obliga a definir exactamente cómo se ve el éxito antes de pedírselo a la IA, lo que evita respuestas vagas o desalineadas.' },
      { q: '¿En qué se diferencia SPECS de CO-STAR?', a: 'SPECS se centra en definir con precisión los requisitos del resultado; CO-STAR se centra en controlar el tono, la voz y la audiencia. Usa SPECS para entregables técnicos y CO-STAR para contenido.' },
    ],
  },
  pt: {
    tagline: 'Focado em detalhe e precisão. O campo Expected Output elimina o achismo e é ideal para tarefas técnicas complexas.',
    seoTitle: 'Framework SPECS: 5 campos para prompts técnicos precisos',
    metaDescription: 'Requisitos vagos geram resultados vagos. O SPECS exige um campo Expected Output exato antes de perguntar. Veja os 5 campos, um exemplo real e quando usar.',
    fields: [
      { name: 'Situation', description: 'O estado atual ou o problema que precisa ser resolvido.' },
      { name: 'Purpose', description: 'Por que essa tarefa importa — o objetivo de negócio ou pessoal por trás dela.' },
      { name: 'Expected Output', description: 'Uma descrição exata do que o resultado deve conter, como deve ser formatado e o que deve entregar.' },
      { name: 'Context', description: 'Restrições, contexto, dados relevantes ou informações específicas do domínio.' },
      { name: 'Style', description: 'O tom, o formato e a apresentação esperados para o resultado.' },
    ],
    bestFor: [
      'Análises técnicas complexas e tarefas de pesquisa',
      'Tarefas com requisitos de saída precisos',
      'Cenários em que a IA precisa de bastante contexto',
      'Entregáveis profissionais com especificações bem definidas',
    ],
    notFor: [
      'Tarefas rápidas do dia a dia (use APE ou RTF)',
      'Tarefas criativas em que a abertura é um diferencial',
      'Tarefas com um fluxo natural passo a passo (use RISEN)',
    ],
    example: {
      scenario: 'Produzir um documento de especificação técnica',
      prompt: 'Situation: Precisamos de uma integração de API entre nosso CRM e nossa plataforma de e-mail. Purpose: Automatizar os fluxos de nutrição de leads. Expected Output: Uma especificação técnica de 500 palavras com a lista de endpoints, o método de autenticação e os requisitos de tratamento de erros. Context: APIs REST, OAuth 2.0, 10 mil contatos. Style: Técnico, estruturado com títulos.',
    },
    faq: [
      { q: 'O que significa SPECS?', a: 'SPECS significa Situation, Purpose, Expected Output, Context e Style — um framework rico em detalhes, ideal para tarefas técnicas e profissionais complexas.' },
      { q: 'O que torna o campo Expected Output único?', a: 'O campo Expected Output obriga você a definir exatamente como é o sucesso antes mesmo de pedir algo à IA, evitando respostas vagas ou desalinhadas.' },
      { q: 'Qual é a diferença entre SPECS e CO-STAR?', a: 'O SPECS foca em definir os requisitos de saída com precisão; o CO-STAR foca em controlar tom de voz, estilo e público. Use SPECS para entregáveis técnicos e CO-STAR para conteúdo.' },
    ],
  },
  ja: {
    tagline: '細部と正確さにこだわるフレームワーク。Expected Outputフィールドが曖昧さを排除し、複雑な技術タスクに最適です。',
    seoTitle: 'SPECSフレームワーク:精密な技術プロンプトの5項目',
    metaDescription: '曖昧な要件は曖昧な出力を生みます。SPECSは依頼前にExpected Outputを正確に定義させる手法です。5つの項目、実例、活用シーンを解説します。',
    fields: [
      { name: 'Situation', description: '対応が必要な現在の状況や課題。' },
      { name: 'Purpose', description: 'このタスクが重要な理由——その背景にあるビジネス上または個人的な目的。' },
      { name: 'Expected Output', description: '出力に何を含めるべきか、どのような形式にすべきか、何を提供すべきかを正確に記述したもの。' },
      { name: 'Context', description: '制約条件、背景情報、関連データ、またはドメイン固有の情報。' },
      { name: 'Style', description: '出力の文体、フォーマット、見せ方。' },
    ],
    bestFor: [
      '複雑な技術分析やリサーチタスク',
      '出力要件が厳密に決まっているタスク',
      'AIに幅広いコンテキストが必要なシナリオ',
      '仕様が明確に定義されたプロフェッショナルな成果物',
    ],
    notFor: [
      '手早く済ませたい日常的なタスク(APEやRTFを使用)',
      '自由度の高さが価値になるクリエイティブなタスク',
      '自然な段階的な流れを持つタスク(RISENを使用)',
    ],
    example: {
      scenario: '技術仕様書を作成する',
      prompt: 'Situation: 自社のCRMとメールプラットフォームの間でAPI連携が必要です。Purpose: リードナーチャリングのワークフローを自動化するため。Expected Output: エンドポイント一覧、認証方式、エラー処理要件を含む500語の技術仕様書。Context: REST API、OAuth 2.0、コンタクト数1万件。Style: 見出しで構造化された技術的な文体。',
    },
    faq: [
      { q: 'SPECSとは何の略ですか?', a: 'SPECSはSituation、Purpose、Expected Output、Context、Styleの頭文字で、複雑な技術タスクやプロフェッショナルな業務に最適な、詳細度の高いフレームワークです。' },
      { q: 'Expected Outputフィールドの特徴は何ですか?', a: 'Expected Outputフィールドは、AIに依頼する前に成功の姿を正確に定義することを求めるため、曖昧だったり的外れな回答を防げます。' },
      { q: 'SPECSとCO-STARの違いは何ですか?', a: 'SPECSは出力要件を正確に定義することに重点を置き、CO-STARはトーンや声、対象読者のコントロールに重点を置きます。技術的な成果物にはSPECS、コンテンツ制作にはCO-STARが適しています。' },
    ],
  },
  zh: {
    tagline: '注重细节与精确性。Expected Output字段消除了猜测,非常适合复杂的技术任务。',
    seoTitle: 'SPECS提示词框架:精准技术提示的5个字段',
    metaDescription: '模糊的要求只会产生模糊的输出。SPECS要求在提问前先精确定义Expected Output。了解全部5个字段、真实示例及适用场景。',
    fields: [
      { name: 'Situation', description: '需要解决的当前状态或问题。' },
      { name: 'Purpose', description: '这项任务为何重要——背后的业务或个人目标。' },
      { name: 'Expected Output', description: '准确描述输出应包含什么内容、采用什么格式、要交付什么结果。' },
      { name: 'Context', description: '限制条件、背景信息、相关数据或特定领域知识。' },
      { name: 'Style', description: '输出的语气、格式与呈现方式。' },
    ],
    bestFor: [
      '复杂的技术分析与调研任务',
      '对输出有精确要求的任务',
      'AI需要大量上下文信息的场景',
      '有明确规格要求的专业交付物',
    ],
    notFor: [
      '快速的日常任务(使用APE或RTF)',
      '开放性本身有价值的创意任务',
      '有自然分步流程的任务(使用RISEN)',
    ],
    example: {
      scenario: '撰写一份技术规格文档',
      prompt: 'Situation: 我们需要在CRM和邮件平台之间实现API集成。Purpose: 自动化潜在客户培育流程。Expected Output: 一份500字的技术规格文档,包含端点列表、认证方式和错误处理要求。Context: REST API,OAuth 2.0,1万个联系人。Style: 技术性文风,用标题分段结构化呈现。',
    },
    faq: [
      { q: 'SPECS代表什么?', a: 'SPECS代表Situation、Purpose、Expected Output、Context和Style——一个细节丰富的框架,非常适合复杂的技术和专业任务。' },
      { q: 'Expected Output字段有什么特别之处?', a: 'Expected Output字段要求你在向AI提问之前就明确定义成功的标准,从而避免得到模糊或偏离预期的回答。' },
      { q: 'SPECS与CO-STAR有何不同?', a: 'SPECS专注于精确定义输出要求;CO-STAR则专注于控制语气、语调和受众。技术性交付物用SPECS,内容创作用CO-STAR。' },
    ],
  },
  ar: {
    tagline: 'إطار عمل دقيق وشديد الاهتمام بالتفاصيل. حقل Expected Output يقضي على الغموض ويُعد مثاليًا للمهام التقنية المعقدة.',
    seoTitle: 'إطار عمل SPECS: 5 حقول لصياغة أوامر تقنية دقيقة',
    metaDescription: 'المتطلبات الغامضة تنتج مخرجات غامضة. يفرض SPECS تحديد حقل Expected Output بدقة قبل السؤال. تعرّف على الحقول الخمسة ومثال حقيقي وأفضل استخدام.',
    fields: [
      { name: 'Situation', description: 'الوضع الحالي أو المشكلة التي يجب معالجتها.' },
      { name: 'Purpose', description: 'سبب أهمية هذه المهمة — الهدف التجاري أو الشخصي وراءها.' },
      { name: 'Expected Output', description: 'وصف دقيق لما يجب أن يحتويه المخرج، وكيفية تنسيقه، وما الذي يجب أن يقدّمه.' },
      { name: 'Context', description: 'القيود والخلفية والبيانات ذات الصلة أو المعلومات الخاصة بالمجال.' },
      { name: 'Style', description: 'نبرة الأسلوب وتنسيق المخرج وطريقة عرضه.' },
    ],
    bestFor: [
      'التحليلات التقنية المعقدة ومهام البحث',
      'المهام ذات متطلبات المخرجات الدقيقة',
      'السيناريوهات التي تحتاج فيها الذكاء الاصطناعي إلى سياق موسّع',
      'المخرجات الاحترافية ذات المواصفات المحددة بدقة',
    ],
    notFor: [
      'المهام اليومية السريعة (استخدم APE أو RTF)',
      'المهام الإبداعية التي تكون فيها المرونة والانفتاح ذات قيمة',
      'المهام ذات التسلسل الطبيعي خطوة بخطوة (استخدم RISEN)',
    ],
    example: {
      scenario: 'إعداد وثيقة مواصفات تقنية',
      prompt: 'Situation: نحتاج إلى ربط API بين نظام CRM ومنصة البريد الإلكتروني لدينا. Purpose: أتمتة مسارات رعاية العملاء المحتملين. Expected Output: وثيقة مواصفات تقنية من 500 كلمة تتضمن قائمة نقاط النهاية وطريقة المصادقة ومتطلبات معالجة الأخطاء. Context: واجهات REST API، بروتوكول OAuth 2.0، 10 آلاف جهة اتصال. Style: أسلوب تقني منظّم بعناوين فرعية.',
    },
    faq: [
      { q: 'ما الذي يرمز إليه SPECS؟', a: 'يرمز SPECS إلى Situation وPurpose وExpected Output وContext وStyle — وهو إطار عمل عالي التفصيل مثالي للمهام التقنية والمهنية المعقدة.' },
      { q: 'ما الذي يميز حقل Expected Output؟', a: 'يُجبرك حقل Expected Output على تحديد شكل النجاح بدقة قبل أن تطلب من الذكاء الاصطناعي أي شيء، مما يمنع الحصول على إجابات غامضة أو غير متوافقة مع احتياجاتك.' },
      { q: 'ما الفرق بين SPECS وCO-STAR؟', a: 'يركّز SPECS على تحديد متطلبات المخرجات بدقة، بينما يركّز CO-STAR على التحكم في النبرة والصوت والجمهور المستهدف. استخدم SPECS للمخرجات التقنية وCO-STAR لإنشاء المحتوى.' },
    ],
  },
  ko: {
    tagline: '세부 사항과 정확성을 중시하는 프레임워크. Expected Output 필드가 모호함을 없애 복잡한 기술 작업에 이상적입니다.',
    seoTitle: 'SPECS 프레임워크: 정밀한 기술 프롬프트를 위한 5가지 필드',
    metaDescription: '모호한 요구사항은 모호한 결과를 낳습니다. SPECS는 질문 전에 Expected Output을 정확히 정의하도록 요구합니다. 5가지 필드와 실제 예시, 활용법을 확인하세요.',
    fields: [
      { name: 'Situation', description: '해결해야 할 현재 상태나 문제.' },
      { name: 'Purpose', description: '이 작업이 왜 중요한지 — 그 이면에 있는 비즈니스 또는 개인적인 목표.' },
      { name: 'Expected Output', description: '결과물에 무엇이 포함되어야 하는지, 어떤 형식이어야 하는지, 무엇을 전달해야 하는지에 대한 정확한 설명.' },
      { name: 'Context', description: '제약 조건, 배경 정보, 관련 데이터 또는 도메인 특화 정보.' },
      { name: 'Style', description: '결과물의 어조, 형식, 표현 방식.' },
    ],
    bestFor: [
      '복잡한 기술 분석 및 리서치 작업',
      '결과물 요구사항이 정확한 작업',
      'AI에 방대한 맥락이 필요한 상황',
      '명확한 사양이 정의된 전문적인 산출물',
    ],
    notFor: [
      '빠르게 처리하는 일상적인 작업(APE 또는 RTF 사용)',
      '개방성이 가치를 갖는 창의적인 작업',
      '자연스러운 단계별 흐름이 있는 작업(RISEN 사용)',
    ],
    example: {
      scenario: '기술 명세서 작성하기',
      prompt: 'Situation: CRM과 이메일 플랫폼 간의 API 연동이 필요합니다. Purpose: 리드 육성 워크플로를 자동화하기 위해서입니다. Expected Output: 엔드포인트 목록, 인증 방식, 오류 처리 요구사항을 포함한 500단어 분량의 기술 명세서. Context: REST API, OAuth 2.0, 연락처 1만 건. Style: 제목으로 구조화된 기술적인 문체.',
    },
    faq: [
      { q: 'SPECS는 무엇의 약자인가요?', a: 'SPECS는 Situation, Purpose, Expected Output, Context, Style의 약자로, 복잡한 기술 및 전문 작업에 이상적인 세부 지향적 프레임워크입니다.' },
      { q: 'Expected Output 필드의 특별한 점은 무엇인가요?', a: 'Expected Output 필드는 AI에게 요청하기 전에 성공의 모습을 정확히 정의하도록 요구하여, 모호하거나 방향이 어긋난 답변을 방지합니다.' },
      { q: 'SPECS는 CO-STAR와 어떻게 다른가요?', a: 'SPECS는 결과물 요구사항을 정확하게 정의하는 데 초점을 맞추고, CO-STAR는 어조와 목소리, 대상 독자를 조절하는 데 초점을 맞춥니다. 기술적인 산출물에는 SPECS를, 콘텐츠 제작에는 CO-STAR를 사용하세요.' },
    ],
  },
},
  },
  {
    slug: 'rtf',
    name: 'RTF',
    expansion: 'Role · Task · Format',
    tagline: 'Minimum viable prompt structure. Three fields that cover the three most impactful variables in any prompt.',
    seoTitle: 'RTF Framework: The Minimum Viable Prompt Structure',
    metaDescription: 'Role, Task, Format: the three variables that move the needle most in any prompt. See the full structure, a real example, and when APE is enough instead.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'Low',
    fields: [
      { name: 'Role', description: 'The expert persona the AI should adopt — what specialist knowledge to draw on.' },
      { name: 'Task', description: 'Precisely what you want the AI to do.' },
      { name: 'Format', description: 'How the output should be structured and presented.' },
    ],
    bestFor: [
      'Professional tasks where a role matters',
      'When you want structured output without verbose setup',
      'Training and educational content generation',
      'When APE is too minimal but full frameworks are overkill',
    ],
    notFor: [
      'Tasks requiring audience definition (use CRAFT)',
      'Tasks needing tone/style separation (use CO-STAR)',
      'Complex multi-step workflows (use RISEN)',
    ],
    example: {
      scenario: 'Creating a training module on prompt engineering',
      prompt: 'Role: Instructional designer with 10 years of corporate training experience. Task: Create a 30-minute training module on prompt engineering fundamentals for non-technical employees. Format: Module outline with 5 sections, learning objectives, and a quiz at the end.',
    },
    related: ['ape', 'craft', 'co-star'],
    faq: [
      { q: 'What does RTF stand for?', a: 'RTF stands for Role, Task, and Format — a minimal three-field framework covering the three highest-impact variables in any prompt.' },
      { q: 'When should I use RTF instead of APE?', a: 'Use RTF when assigning an expert role improves output quality. Use APE when the task is simple enough that a role would add no value.' },
      { q: 'Is RTF good for generating training content?', a: 'Yes. RTF works especially well for training and educational content because the Role field sets expert authority and the Format field ensures consistent structure.' },
    ],
    translations: {
    de: {
      tagline: 'Minimale, aber vollständige Prompt-Struktur. Drei Felder, die die drei wirkungsvollsten Stellhebel in jedem Prompt abdecken.',
      seoTitle: 'RTF-Framework: Die minimale Prompt-Struktur, die trägt',
      metaDescription: 'Role, Task, Format: die drei Variablen mit dem größten Hebel in jedem Prompt. Vollständige Struktur, echtes Beispiel und wann APE stattdessen reicht.',
      fields: [
        { name: 'Role', description: 'Die Experten-Persona, die die KI einnehmen soll — auf welches Fachwissen sie zurückgreift.' },
        { name: 'Task', description: 'Was die KI konkret tun soll.' },
        { name: 'Format', description: 'Wie das Ergebnis strukturiert und dargestellt sein soll.' },
      ],
      bestFor: [
        'Professionelle Aufgaben, bei denen eine Rolle den Unterschied macht',
        'Wenn du strukturierten Output ohne aufwendiges Setup willst',
        'Erstellung von Trainings- und Lerninhalten',
        'Wenn APE zu minimal, aber ein volles Framework Overkill wäre',
      ],
      notFor: [
        'Aufgaben, die eine Zielgruppendefinition erfordern (CRAFT verwenden)',
        'Aufgaben mit klarer Trennung von Ton und Stil (CO-STAR verwenden)',
        'Komplexe mehrstufige Workflows (RISEN verwenden)',
      ],
      example: {
        scenario: 'Ein Trainingsmodul zum Thema Prompt Engineering erstellen',
        prompt: 'Role: Instructional Designer mit 10 Jahren Erfahrung in der Unternehmensschulung. Task: Erstelle ein 30-minütiges Trainingsmodul zu den Grundlagen von Prompt Engineering für nicht-technische Mitarbeiter. Format: Modul-Gliederung mit 5 Abschnitten, Lernzielen und einem abschließenden Quiz.',
      },
      faq: [
        { q: 'Wofür steht RTF?', a: 'RTF steht für Role, Task und Format — ein minimales Drei-Felder-Framework, das die drei wirkungsvollsten Variablen in jedem Prompt abdeckt.' },
        { q: 'Wann sollte ich RTF statt APE verwenden?', a: 'Verwende RTF, wenn eine Experten-Rolle die Ausgabequalität verbessert. Verwende APE, wenn die Aufgabe so einfach ist, dass eine Rolle keinen Mehrwert bringt.' },
        { q: 'Eignet sich RTF gut für die Erstellung von Trainingsinhalten?', a: 'Ja. RTF funktioniert besonders gut für Trainings- und Lerninhalte, weil das Role-Feld fachliche Autorität herstellt und das Format-Feld eine konsistente Struktur sicherstellt.' },
      ],
    },
    fr: {
      tagline: 'Structure de prompt minimale mais complète. Trois champs qui couvrent les trois variables les plus déterminantes de tout prompt.',
      seoTitle: 'Framework RTF : la structure de prompt minimale efficace',
      metaDescription: 'Role, Task, Format : les trois variables qui ont le plus d\'impact dans un prompt. Structure complète, exemple concret, et quand APE suffit à la place.',
      fields: [
        { name: 'Role', description: 'Le profil d\'expert que l\'IA doit adopter — quelles connaissances spécialisées mobiliser.' },
        { name: 'Task', description: 'Ce que vous voulez précisément que l\'IA fasse.' },
        { name: 'Format', description: 'Comment le résultat doit être structuré et présenté.' },
      ],
      bestFor: [
        'Tâches professionnelles où le rôle compte',
        'Quand vous voulez un résultat structuré sans mise en place verbeuse',
        'Génération de contenus de formation et pédagogiques',
        'Quand APE est trop minimal mais qu\'un framework complet est excessif',
      ],
      notFor: [
        'Tâches nécessitant de définir une audience (utiliser CRAFT)',
        'Tâches nécessitant de séparer ton et style (utiliser CO-STAR)',
        'Workflows complexes en plusieurs étapes (utiliser RISEN)',
      ],
      example: {
        scenario: 'Créer un module de formation sur le prompt engineering',
        prompt: 'Role: Concepteur pédagogique avec 10 ans d\'expérience en formation en entreprise. Task: Crée un module de formation de 30 minutes sur les fondamentaux du prompt engineering pour des collaborateurs non techniques. Format: Plan du module avec 5 sections, des objectifs pédagogiques, et un quiz final.',
      },
      faq: [
        { q: 'Que signifie RTF ?', a: 'RTF signifie Role, Task et Format — un framework minimal à trois champs qui couvre les trois variables les plus déterminantes de tout prompt.' },
        { q: 'Quand utiliser RTF plutôt qu\'APE ?', a: 'Utilisez RTF quand assigner un rôle expert améliore la qualité du résultat. Utilisez APE quand la tâche est assez simple pour qu\'un rôle n\'apporte rien.' },
        { q: 'RTF est-il adapté à la génération de contenus de formation ?', a: 'Oui. RTF fonctionne particulièrement bien pour les contenus de formation et pédagogiques, car le champ Role installe une autorité d\'expert et le champ Format garantit une structure cohérente.' },
      ],
    },
    es: {
      tagline: 'Estructura de prompt mínima pero completa. Tres campos que cubren las tres variables con más impacto en cualquier prompt.',
      seoTitle: 'Framework RTF: la estructura mínima de prompt que funciona',
      metaDescription: 'Role, Task, Format: las tres variables con más impacto en cualquier prompt. Estructura completa, un ejemplo real y cuándo APE es suficiente en su lugar.',
      fields: [
        { name: 'Role', description: 'La persona experta que debe adoptar la IA — qué conocimiento especializado debe aplicar.' },
        { name: 'Task', description: 'Qué quieres exactamente que haga la IA.' },
        { name: 'Format', description: 'Cómo debe estructurarse y presentarse el resultado.' },
      ],
      bestFor: [
        'Tareas profesionales donde el rol importa',
        'Cuando quieres un resultado estructurado sin una configuración extensa',
        'Generación de contenido formativo y educativo',
        'Cuando APE se queda corto pero un framework completo es excesivo',
      ],
      notFor: [
        'Tareas que requieren definir una audiencia (usar CRAFT)',
        'Tareas que necesitan separar tono y estilo (usar CO-STAR)',
        'Flujos de trabajo complejos de varios pasos (usar RISEN)',
      ],
      example: {
        scenario: 'Crear un módulo de formación sobre prompt engineering',
        prompt: 'Role: Diseñador instruccional con 10 años de experiencia en formación corporativa. Task: Crea un módulo de formación de 30 minutos sobre los fundamentos del prompt engineering para empleados sin perfil técnico. Format: Esquema del módulo con 5 secciones, objetivos de aprendizaje y un cuestionario final.',
      },
      faq: [
        { q: '¿Qué significa RTF?', a: 'RTF significa Role, Task y Format — un framework mínimo de tres campos que cubre las tres variables de mayor impacto en cualquier prompt.' },
        { q: '¿Cuándo debería usar RTF en lugar de APE?', a: 'Usa RTF cuando asignar un rol experto mejora la calidad del resultado. Usa APE cuando la tarea es lo bastante simple como para que un rol no aporte valor.' },
        { q: '¿RTF es bueno para generar contenido formativo?', a: 'Sí. RTF funciona especialmente bien para contenido formativo y educativo porque el campo Role aporta autoridad experta y el campo Format asegura una estructura consistente.' },
      ],
    },
    pt: {
      tagline: 'Estrutura mínima de prompt, mas completa. Três campos que cobrem as três variáveis de maior impacto em qualquer prompt.',
      seoTitle: 'Framework RTF: a estrutura mínima de prompt que funciona',
      metaDescription: 'Role, Task, Format: as três variáveis que mais impactam qualquer prompt. Veja a estrutura completa, um exemplo real e quando o APE já basta.',
      fields: [
        { name: 'Role', description: 'A persona especialista que a IA deve assumir — qual conhecimento técnico ela deve aplicar.' },
        { name: 'Task', description: 'O que exatamente você quer que a IA faça.' },
        { name: 'Format', description: 'Como o resultado deve ser estruturado e apresentado.' },
      ],
      bestFor: [
        'Tarefas profissionais em que o papel/persona faz diferença',
        'Quando você quer resultado estruturado sem uma configuração longa',
        'Geração de conteúdo de treinamento e educacional',
        'Quando o APE é minimalista demais, mas um framework completo é exagero',
      ],
      notFor: [
        'Tarefas que exigem definição de público-alvo (use o CRAFT)',
        'Tarefas que precisam separar tom e estilo (use o CO-STAR)',
        'Fluxos de trabalho complexos com múltiplas etapas (use o RISEN)',
      ],
      example: {
        scenario: 'Criar um módulo de treinamento sobre prompt engineering',
        prompt: 'Role: Designer instrucional com 10 anos de experiência em treinamento corporativo. Task: Crie um módulo de treinamento de 30 minutos sobre os fundamentos de prompt engineering para colaboradores não técnicos. Format: Estrutura do módulo com 5 seções, objetivos de aprendizagem e um quiz ao final.',
      },
      faq: [
        { q: 'O que significa RTF?', a: 'RTF significa Role, Task e Format — um framework mínimo de três campos que cobre as três variáveis de maior impacto em qualquer prompt.' },
        { q: 'Quando devo usar RTF em vez de APE?', a: 'Use RTF quando atribuir um papel especialista melhora a qualidade do resultado. Use APE quando a tarefa é simples o suficiente para que um papel não agregue valor.' },
        { q: 'RTF é bom para gerar conteúdo de treinamento?', a: 'Sim. O RTF funciona muito bem para conteúdo de treinamento e educacional, porque o campo Role estabelece autoridade especialista e o campo Format garante uma estrutura consistente.' },
      ],
    },
    ja: {
      tagline: '必要最小限でありながら十分な情報を持つプロンプト構造。あらゆるプロンプトで最も影響力の大きい3つの変数をカバーする3項目。',
      seoTitle: 'RTFフレームワーク：機能する最小限のプロンプト構造',
      metaDescription: 'Role、Task、Formatは、あらゆるプロンプトで最も効果を左右する3つの変数。構造全体と実例、APEで十分なケースまで解説。',
      fields: [
        { name: 'Role', description: 'AIに担わせる専門家のペルソナ——どの分野の専門知識を活用させるか。' },
        { name: 'Task', description: 'AIに具体的に何をしてほしいか。' },
        { name: 'Format', description: '出力をどのように構成し、どう提示するか。' },
      ],
      bestFor: [
        '役割設定が重要な業務タスク',
        '冗長な準備なしで構造化された出力が欲しいとき',
        '研修・教育コンテンツの生成',
        'APEでは物足りないが、フル装備のフレームワークは過剰なとき',
      ],
      notFor: [
        '対象読者の定義が必要なタスク（CRAFTを使用）',
        'トーンとスタイルの分離が必要なタスク（CO-STARを使用）',
        '複雑な複数ステップのワークフロー（RISENを使用）',
      ],
      example: {
        scenario: 'プロンプトエンジニアリングに関する研修モジュールを作成する',
        prompt: 'Role: 企業研修歴10年のインストラクショナルデザイナー。Task: 非技術系社員向けに、プロンプトエンジニアリングの基礎を扱う30分の研修モジュールを作成してください。Format: 5セクション構成のモジュール概要、学習目標、および最後の確認クイズ。',
      },
      faq: [
        { q: 'RTFとは何の略ですか？', a: 'RTFはRole、Task、Formatの略で、あらゆるプロンプトで最も影響力の大きい3つの変数をカバーする最小限の3項目フレームワークです。' },
        { q: 'APEではなくRTFを使うべきなのはどんなときですか？', a: '専門家の役割を割り当てることで出力品質が向上する場合はRTFを使用してください。役割を設定しても価値が加わらないほどタスクがシンプルな場合はAPEを使用してください。' },
        { q: 'RTFは研修コンテンツの生成に適していますか？', a: 'はい。Roleフィールドが専門的な説得力を、Formatフィールドが一貫した構成を担保するため、RTFは研修・教育コンテンツに特に適しています。' },
      ],
    },
    zh: {
      tagline: '最简却完整的提示词结构。三个字段覆盖了任何提示词中最具影响力的三个变量。',
      seoTitle: 'RTF框架：真正好用的最简提示词结构',
      metaDescription: 'Role、Task、Format：任何提示词中最具影响力的三个变量。完整结构解析、真实示例，以及何时用APE就够了。',
      fields: [
        { name: 'Role', description: 'AI应扮演的专家角色——需要调用哪方面的专业知识。' },
        { name: 'Task', description: '你希望AI具体完成什么任务。' },
        { name: 'Format', description: '输出内容应如何组织和呈现。' },
      ],
      bestFor: [
        '角色设定很重要的专业任务',
        '希望获得结构化输出但不想写冗长设定的场景',
        '培训和教育内容的生成',
        'APE太简单、但完整框架又显得过度时',
      ],
      notFor: [
        '需要明确目标受众的任务（使用CRAFT）',
        '需要区分语气与风格的任务（使用CO-STAR）',
        '复杂的多步骤工作流（使用RISEN）',
      ],
      example: {
        scenario: '制作一个关于提示词工程的培训模块',
        prompt: 'Role: 拥有10年企业培训经验的教学设计师。Task: 为非技术背景的员工制作一个30分钟的提示词工程基础培训模块。Format: 包含5个部分的模块大纲、学习目标，以及结尾的测验。',
      },
      faq: [
        { q: 'RTF代表什么？', a: 'RTF代表Role（角色）、Task（任务）和Format（格式）——一个最简的三字段框架，覆盖了任何提示词中影响力最大的三个变量。' },
        { q: '什么时候该用RTF而不是APE？', a: '当赋予AI一个专家角色能提升输出质量时，使用RTF。当任务足够简单、角色设定无法带来额外价值时，使用APE。' },
        { q: 'RTF适合用来生成培训内容吗？', a: '适合。RTF在培训和教育内容方面表现尤其出色，因为Role字段能建立专业权威性，而Format字段能确保结构的一致性。' },
      ],
    },
    ar: {
      tagline: 'أبسط بنية ممكنة لبرومبت فعّال. ثلاثة حقول تغطي أكثر ثلاثة متغيرات تأثيرًا في أي برومبت.',
      seoTitle: 'إطار RTF: أبسط بنية برومبت تُحدث فرقًا فعليًا',
      metaDescription: 'Role وTask وFormat هي المتغيرات الثلاثة الأكثر تأثيرًا في أي برومبت. تعرّف على البنية الكاملة ومثال حقيقي، ومتى يكفيك إطار APE بدلًا منها.',
      fields: [
        { name: 'Role', description: 'الشخصية الخبيرة التي يجب أن يتبناها الذكاء الاصطناعي — أي معرفة متخصصة عليه الاعتماد عليها.' },
        { name: 'Task', description: 'ما تريد بالضبط أن يقوم به الذكاء الاصطناعي.' },
        { name: 'Format', description: 'كيف يجب أن يكون المخرج منظمًا ومعروضًا.' },
      ],
      bestFor: [
        'المهام المهنية التي يكون فيها تحديد الدور مؤثرًا',
        'عندما تريد مخرجات منظمة دون إعداد مطوّل',
        'إنشاء محتوى تدريبي وتعليمي',
        'عندما يكون إطار APE بسيطًا جدًا لكن الأطر الكاملة مبالغ فيها',
      ],
      notFor: [
        'المهام التي تتطلب تحديد الجمهور المستهدف (استخدم CRAFT)',
        'المهام التي تحتاج إلى فصل النبرة عن الأسلوب (استخدم CO-STAR)',
        'سير العمل المعقد متعدد الخطوات (استخدم RISEN)',
      ],
      example: {
        scenario: 'إنشاء وحدة تدريبية عن هندسة البرومبت',
        prompt: 'Role: مصمم تعليمي يمتلك 10 سنوات من الخبرة في التدريب المؤسسي. Task: أنشئ وحدة تدريبية مدتها 30 دقيقة عن أساسيات هندسة البرومبت موجهة للموظفين غير التقنيين. Format: مخطط للوحدة يتضمن 5 أقسام، وأهداف تعليمية، واختبارًا قصيرًا في النهاية.',
      },
      faq: [
        { q: 'ماذا يعني اختصار RTF؟', a: 'يشير RTF إلى Role وTask وFormat — إطار مبسّط من ثلاثة حقول يغطي أكثر ثلاثة متغيرات تأثيرًا في أي برومبت.' },
        { q: 'متى يجب أن أستخدم RTF بدلًا من APE؟', a: 'استخدم RTF عندما يؤدي تحديد دور خبير إلى تحسين جودة المخرجات. واستخدم APE عندما تكون المهمة بسيطة بما يكفي بحيث لا يضيف الدور أي قيمة.' },
        { q: 'هل RTF مناسب لإنشاء محتوى تدريبي؟', a: 'نعم. يعمل RTF بشكل جيد بوجه خاص مع المحتوى التدريبي والتعليمي، لأن حقل Role يمنح مصداقية الخبرة وحقل Format يضمن بنية متسقة.' },
      ],
    },
    ko: {
      tagline: '최소한이지만 완결된 프롬프트 구조. 모든 프롬프트에서 가장 영향력 큰 세 가지 변수를 다루는 세 필드.',
      seoTitle: 'RTF 프레임워크: 실제로 통하는 최소 프롬프트 구조',
      metaDescription: 'Role, Task, Format은 모든 프롬프트에서 가장 큰 영향을 미치는 세 가지 변수입니다. 전체 구조와 실제 예시, APE로 충분한 경우까지 확인해보세요.',
      fields: [
        { name: 'Role', description: 'AI가 맡아야 할 전문가 페르소나 — 어떤 전문 지식을 활용할지.' },
        { name: 'Task', description: 'AI가 정확히 무엇을 하기를 원하는지.' },
        { name: 'Format', description: '결과물을 어떻게 구조화하고 제시할지.' },
      ],
      bestFor: [
        '역할 설정이 중요한 전문 업무',
        '장황한 설정 없이 구조화된 결과물을 원할 때',
        '교육 및 트레이닝 콘텐츠 생성',
        'APE로는 부족하지만 완전한 프레임워크는 과할 때',
      ],
      notFor: [
        '대상 독자 정의가 필요한 작업 (CRAFT 사용)',
        '톤과 스타일 분리가 필요한 작업 (CO-STAR 사용)',
        '복잡한 다단계 워크플로우 (RISEN 사용)',
      ],
      example: {
        scenario: '프롬프트 엔지니어링 트레이닝 모듈 만들기',
        prompt: 'Role: 기업 교육 경력 10년의 교수 설계자. Task: 비기술직 직원을 위한 프롬프트 엔지니어링 기초 30분 트레이닝 모듈을 만드세요. Format: 5개 섹션으로 구성된 모듈 개요, 학습 목표, 그리고 마지막 퀴즈.',
      },
      faq: [
        { q: 'RTF는 무엇의 약자인가요?', a: 'RTF는 Role, Task, Format의 약자로, 모든 프롬프트에서 가장 영향력이 큰 세 가지 변수를 다루는 최소 3필드 프레임워크입니다.' },
        { q: 'APE 대신 RTF를 언제 사용해야 하나요?', a: '전문가 역할을 부여하는 것이 결과물의 품질을 높일 때는 RTF를 사용하세요. 역할 설정이 별다른 가치를 더하지 못할 만큼 작업이 단순할 때는 APE를 사용하세요.' },
        { q: 'RTF는 트레이닝 콘텐츠 생성에 적합한가요?', a: '네. Role 필드가 전문성에 대한 신뢰를 부여하고 Format 필드가 일관된 구조를 보장하기 때문에, RTF는 트레이닝 및 교육 콘텐츠에 특히 잘 맞습니다.' },
      ],
    },
  },
  },
  {
    slug: 'google-prompt',
    name: 'Google Prompt',
    expansion: 'Task · Context · Persona',
    tagline: 'Developed and recommended by Google. Optimised for Gemini and professional workplace tasks.',
    seoTitle: 'Google\'s Prompt Framework: Task, Context, Persona for Gemini',
    metaDescription: 'Google\'s own 3-field structure for Gemini and Workspace tasks. See Task, Context, and Persona explained, a real example, and how it compares to RTF.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'Low',
    fields: [
      { name: 'Task', description: 'What you want the AI to do — clear, specific, action-oriented.' },
      { name: 'Context', description: 'Relevant background, constraints, and situational information the AI needs.' },
      { name: 'Persona', description: 'The role or perspective the AI should adopt when responding.' },
    ],
    bestFor: [
      'Business and professional tasks',
      'Google Workspace workflows (Docs, Gmail, Slides)',
      'Users working primarily with Gemini',
      'Clean, professional output without over-engineering',
    ],
    notFor: [
      'Complex multi-step processes (use RISEN)',
      'Tasks requiring fine-grained style control (use CO-STAR)',
      'Creative tasks where open persona works better',
    ],
    example: {
      scenario: 'Drafting a professional meeting summary',
      prompt: 'Task: Summarise the key decisions and action items from this meeting transcript. Context: Weekly product team meeting, 8 attendees, 45 minutes. Three major decisions were made about the Q2 roadmap. Persona: Executive assistant to the CPO.',
    },
    related: ['rtf', 'craft', 'ape'],
    faq: [
      { q: 'Who created the Google Prompt framework?', a: 'The Google Prompt framework (Task, Context, Persona) was developed and recommended by Google as a structured approach for professional AI prompting, optimised for Gemini.' },
      { q: 'How is Google Prompt different from RTF?', a: 'Both are three-field frameworks. Google Prompt uses Task-Context-Persona; RTF uses Role-Task-Format. Google Prompt is context-first; RTF is format-first.' },
      { q: 'Is Google Prompt framework good for Gemini?', a: 'Yes. The framework was designed to work with Gemini and integrates well with Google Workspace tools like Docs, Gmail, and Slides.' },
    ],
    translations: {
  de: {
    tagline: 'Von Google entwickelt und empfohlen. Optimiert für Gemini und professionelle Aufgaben im Arbeitsalltag.',
    seoTitle: 'Googles Prompt-Framework: Task, Context, Persona für Gemini',
    metaDescription: 'Googles eigene 3-Felder-Struktur für Gemini und Workspace-Aufgaben. Task, Context und Persona erklärt, mit echtem Beispiel und Vergleich zu RTF.',
    fields: [
      { name: 'Task', description: 'Was die KI tun soll — klar, konkret und handlungsorientiert formuliert.' },
      { name: 'Context', description: 'Relevanter Hintergrund, Rahmenbedingungen und situative Informationen, die die KI benötigt.' },
      { name: 'Persona', description: 'Die Rolle oder Perspektive, aus der die KI antworten soll.' },
    ],
    bestFor: [
      'Geschäftliche und berufliche Aufgaben',
      'Google-Workspace-Workflows (Docs, Gmail, Slides)',
      'Nutzer, die vorwiegend mit Gemini arbeiten',
      'Saubere, professionelle Ergebnisse ohne unnötigen Aufwand',
    ],
    notFor: [
      'Komplexe mehrstufige Prozesse (dafür RISEN verwenden)',
      'Aufgaben mit feingranularer Stilkontrolle (dafür CO-STAR verwenden)',
      'Kreative Aufgaben, bei denen eine offene Persona besser funktioniert',
    ],
    example: {
      scenario: 'Eine professionelle Meeting-Zusammenfassung verfassen',
      prompt: 'Task: Fasse die wichtigsten Entscheidungen und Aufgaben aus diesem Meeting-Transkript zusammen. Context: Wöchentliches Product-Team-Meeting, 8 Teilnehmer, 45 Minuten. Es wurden drei zentrale Entscheidungen zur Q2-Roadmap getroffen. Persona: Executive Assistant der CPO.',
    },
    faq: [
      { q: 'Wer hat das Google-Prompt-Framework entwickelt?', a: 'Das Google-Prompt-Framework (Task, Context, Persona) wurde von Google entwickelt und empfohlen — als strukturierter Ansatz für professionelles Prompting, optimiert für Gemini.' },
      { q: 'Wie unterscheidet sich Google Prompt von RTF?', a: 'Beide sind Drei-Felder-Frameworks. Google Prompt nutzt Task-Context-Persona, RTF nutzt Role-Task-Format. Google Prompt stellt den Kontext in den Vordergrund, RTF das Format.' },
      { q: 'Eignet sich das Google-Prompt-Framework gut für Gemini?', a: 'Ja. Das Framework wurde speziell für die Arbeit mit Gemini konzipiert und lässt sich gut in Google-Workspace-Tools wie Docs, Gmail und Slides integrieren.' },
    ],
  },
  fr: {
    tagline: 'Développé et recommandé par Google. Optimisé pour Gemini et les tâches professionnelles en entreprise.',
    seoTitle: 'Framework Google Prompt : Task, Context, Persona pour Gemini',
    metaDescription: 'La structure à 3 champs conçue par Google pour Gemini et Workspace. Task, Context et Persona expliqués, un exemple concret et la comparaison avec RTF.',
    fields: [
      { name: 'Task', description: 'Ce que vous voulez que l\'IA fasse — de façon claire, précise et orientée action.' },
      { name: 'Context', description: 'Le contexte pertinent, les contraintes et les informations situationnelles dont l\'IA a besoin.' },
      { name: 'Persona', description: 'Le rôle ou le point de vue que l\'IA doit adopter dans sa réponse.' },
    ],
    bestFor: [
      'Tâches professionnelles et métier',
      'Workflows Google Workspace (Docs, Gmail, Slides)',
      'Utilisateurs travaillant principalement avec Gemini',
      'Un résultat propre et professionnel sans complexité inutile',
    ],
    notFor: [
      'Processus complexes à plusieurs étapes (utilisez RISEN)',
      'Tâches nécessitant un contrôle fin du style (utilisez CO-STAR)',
      'Tâches créatives où une persona ouverte fonctionne mieux',
    ],
    example: {
      scenario: 'Rédiger un compte-rendu de réunion professionnel',
      prompt: 'Task : Résume les décisions clés et les actions à mener issues de cette transcription de réunion. Context : Réunion hebdomadaire de l\'équipe produit, 8 participants, 45 minutes. Trois décisions majeures ont été prises concernant la roadmap du Q2. Persona : Assistante de direction du CPO.',
    },
    faq: [
      { q: 'Qui a créé le framework Google Prompt ?', a: 'Le framework Google Prompt (Task, Context, Persona) a été développé et recommandé par Google comme approche structurée pour le prompting professionnel, optimisée pour Gemini.' },
      { q: 'En quoi Google Prompt diffère-t-il de RTF ?', a: 'Les deux sont des frameworks à trois champs. Google Prompt utilise Task-Context-Persona, tandis que RTF utilise Role-Task-Format. Google Prompt privilégie le contexte, RTF privilégie le format.' },
      { q: 'Le framework Google Prompt est-il adapté à Gemini ?', a: 'Oui. Ce framework a été conçu pour fonctionner avec Gemini et s\'intègre bien aux outils Google Workspace comme Docs, Gmail et Slides.' },
    ],
  },
  es: {
    tagline: 'Desarrollado y recomendado por Google. Optimizado para Gemini y tareas profesionales de trabajo.',
    seoTitle: 'Framework Google Prompt: Task, Context y Persona para Gemini',
    metaDescription: 'La estructura de 3 campos creada por Google para Gemini y Workspace. Task, Context y Persona explicados, con un ejemplo real y comparación con RTF.',
    fields: [
      { name: 'Task', description: 'Qué quieres que haga la IA — de forma clara, específica y orientada a la acción.' },
      { name: 'Context', description: 'El trasfondo relevante, las restricciones y la información situacional que la IA necesita.' },
      { name: 'Persona', description: 'El rol o la perspectiva que la IA debe adoptar al responder.' },
    ],
    bestFor: [
      'Tareas empresariales y profesionales',
      'Flujos de trabajo de Google Workspace (Docs, Gmail, Slides)',
      'Usuarios que trabajan principalmente con Gemini',
      'Resultados limpios y profesionales sin complicaciones innecesarias',
    ],
    notFor: [
      'Procesos complejos de varios pasos (usa RISEN)',
      'Tareas que requieren control fino del estilo (usa CO-STAR)',
      'Tareas creativas donde una persona abierta funciona mejor',
    ],
    example: {
      scenario: 'Redactar el resumen profesional de una reunión',
      prompt: 'Task: Resume las decisiones clave y los puntos de acción de esta transcripción de la reunión. Context: Reunión semanal del equipo de producto, 8 asistentes, 45 minutos. Se tomaron tres decisiones importantes sobre la hoja de ruta del Q2. Persona: Asistente ejecutiva del CPO.',
    },
    faq: [
      { q: '¿Quién creó el framework Google Prompt?', a: 'El framework Google Prompt (Task, Context, Persona) fue desarrollado y recomendado por Google como un enfoque estructurado para el prompting profesional, optimizado para Gemini.' },
      { q: '¿En qué se diferencia Google Prompt de RTF?', a: 'Ambos son frameworks de tres campos. Google Prompt usa Task-Context-Persona, mientras que RTF usa Role-Task-Format. Google Prompt prioriza el contexto; RTF prioriza el formato.' },
      { q: '¿Es bueno el framework Google Prompt para Gemini?', a: 'Sí. El framework fue diseñado para funcionar con Gemini y se integra bien con herramientas de Google Workspace como Docs, Gmail y Slides.' },
    ],
  },
  pt: {
    tagline: 'Desenvolvido e recomendado pelo Google. Otimizado para o Gemini e tarefas profissionais do dia a dia.',
    seoTitle: 'Framework Google Prompt: Task, Context e Persona no Gemini',
    metaDescription: 'A estrutura de 3 campos criada pelo Google para o Gemini e o Workspace. Task, Context e Persona explicados, com exemplo real e comparação com RTF.',
    fields: [
      { name: 'Task', description: 'O que você quer que a IA faça — de forma clara, específica e orientada à ação.' },
      { name: 'Context', description: 'O histórico relevante, as restrições e as informações situacionais que a IA precisa.' },
      { name: 'Persona', description: 'O papel ou a perspectiva que a IA deve adotar ao responder.' },
    ],
    bestFor: [
      'Tarefas corporativas e profissionais',
      'Fluxos de trabalho do Google Workspace (Docs, Gmail, Slides)',
      'Usuários que trabalham principalmente com o Gemini',
      'Resultados limpos e profissionais, sem complexidade desnecessária',
    ],
    notFor: [
      'Processos complexos com várias etapas (use o RISEN)',
      'Tarefas que exigem controle fino de estilo (use o CO-STAR)',
      'Tarefas criativas em que uma persona aberta funciona melhor',
    ],
    example: {
      scenario: 'Redigir um resumo profissional de reunião',
      prompt: 'Task: Resuma as principais decisões e os itens de ação desta transcrição de reunião. Context: Reunião semanal da equipe de produto, 8 participantes, 45 minutos. Três decisões importantes foram tomadas sobre o roadmap do Q2. Persona: Assistente executiva do CPO.',
    },
    faq: [
      { q: 'Quem criou o framework Google Prompt?', a: 'O framework Google Prompt (Task, Context, Persona) foi desenvolvido e recomendado pelo Google como uma abordagem estruturada para prompting profissional, otimizada para o Gemini.' },
      { q: 'Qual a diferença entre o Google Prompt e o RTF?', a: 'Ambos são frameworks de três campos. O Google Prompt usa Task-Context-Persona, enquanto o RTF usa Role-Task-Format. O Google Prompt prioriza o contexto; o RTF prioriza o formato.' },
      { q: 'O framework Google Prompt é bom para o Gemini?', a: 'Sim. O framework foi criado para funcionar com o Gemini e se integra bem a ferramentas do Google Workspace, como Docs, Gmail e Slides.' },
    ],
  },
  ja: {
    tagline: 'Googleが開発し推奨するフレームワーク。GeminiやビジネスシーンでのタスクにMostly最適化されています。',
    seoTitle: 'Googleのプロンプト設計：Gemini向けTask・Context・Persona',
    metaDescription: 'GeminiとWorkspace向けにGoogleが提唱する3項目構成。Task・Context・Personaの解説と実例、RTFとの比較を紹介します。',
    fields: [
      { name: 'Task', description: 'AIに実行してほしいことを、明確かつ具体的に、行動指向で示します。' },
      { name: 'Context', description: 'AIが必要とする背景情報、制約条件、状況に関する情報です。' },
      { name: 'Persona', description: 'AIが回答時に採用すべき役割や視点です。' },
    ],
    bestFor: [
      'ビジネス・業務タスク全般',
      'Google Workspaceのワークフロー（Docs、Gmail、Slides）',
      '主にGeminiを利用するユーザー',
      '過剰な作り込みなしで、簡潔かつプロフェッショナルな出力を得たい場合',
    ],
    notFor: [
      '複雑な多段階プロセス（RISENを推奨）',
      '細かなスタイル制御が必要なタスク（CO-STARを推奨）',
      '自由なペルソナの方が適したクリエイティブなタスク',
    ],
    example: {
      scenario: 'ビジネス向けの会議議事録を作成する',
      prompt: 'Task: この会議の文字起こしから、主要な決定事項とアクションアイテムをまとめてください。Context: 週次のプロダクトチーム会議、参加者8名、所要時間45分。Q2ロードマップに関する3つの重要な決定がなされました。Persona: CPOのエグゼクティブアシスタント。',
    },
    faq: [
      { q: 'Google Promptフレームワークは誰が作ったのですか？', a: 'Google Promptフレームワーク（Task、Context、Persona）は、Geminiに最適化された構造的なプロンプト設計手法として、Googleが開発・推奨しています。' },
      { q: 'Google PromptとRTFの違いは何ですか？', a: 'どちらも3項目構成のフレームワークです。Google PromptはTask-Context-Personaを使用し、RTFはRole-Task-Formatを使用します。Google Promptは文脈重視、RTFは出力形式重視という違いがあります。' },
      { q: 'Google PromptフレームワークはGeminiに適していますか？', a: 'はい。このフレームワークはGeminiでの利用を想定して設計されており、Docs、Gmail、SlidesなどのGoogle Workspaceツールともよく連携します。' },
    ],
  },
  zh: {
    tagline: '由 Google 开发并推荐，针对 Gemini 和专业办公场景任务进行了优化。',
    seoTitle: 'Google 提示词框架：面向 Gemini 的 Task、Context、Persona',
    metaDescription: 'Google 官方为 Gemini 和 Workspace 设计的三字段结构。详解 Task、Context、Persona，附真实示例并与 RTF 对比。',
    fields: [
      { name: 'Task', description: '你希望 AI 完成的任务——清晰、具体、以行动为导向。' },
      { name: 'Context', description: 'AI 需要了解的相关背景、约束条件和情境信息。' },
      { name: 'Persona', description: 'AI 在作答时应采用的角色或视角。' },
    ],
    bestFor: [
      '商务与专业办公任务',
      'Google Workspace 工作流（Docs、Gmail、Slides）',
      '主要使用 Gemini 的用户',
      '追求简洁专业输出、无需过度设计的场景',
    ],
    notFor: [
      '复杂的多步骤流程（建议使用 RISEN）',
      '需要精细风格控制的任务（建议使用 CO-STAR）',
      '更适合开放式人设的创意任务',
    ],
    example: {
      scenario: '撰写一份专业的会议纪要',
      prompt: 'Task: 总结这份会议记录中的关键决策和行动事项。Context: 每周产品团队会议，共8位与会者，时长45分钟。会上就Q2路线图做出了三项重大决策。Persona: CPO的行政助理。',
    },
    faq: [
      { q: 'Google Prompt 框架是谁创建的？', a: 'Google Prompt 框架（Task、Context、Persona）由 Google 开发并推荐，作为一种面向专业提示词写作的结构化方法，针对 Gemini 进行了优化。' },
      { q: 'Google Prompt 与 RTF 有什么区别？', a: '两者都是三字段框架。Google Prompt 使用 Task-Context-Persona，而 RTF 使用 Role-Task-Format。Google Prompt 更强调上下文优先，RTF 更强调格式优先。' },
      { q: 'Google Prompt 框架适合 Gemini 吗？', a: '是的。该框架专为配合 Gemini 使用而设计，并能很好地与 Docs、Gmail、Slides 等 Google Workspace 工具集成。' },
    ],
  },
  ar: {
    tagline: 'طوّرته Google وأوصت به. مُحسَّن لـ Gemini ولمهام بيئة العمل الاحترافية.',
    seoTitle: 'إطار Google للبرومبت: Task وContext وPersona لـ Gemini',
    metaDescription: 'بنية Google الخاصة بثلاثة حقول لمهام Gemini وWorkspace. شرح Task وContext وPersona، مع مثال حقيقي ومقارنة مع RTF.',
    fields: [
      { name: 'Task', description: 'ما تريد أن يقوم به الذكاء الاصطناعي — بوضوح ودقة وتوجّه عملي نحو الفعل.' },
      { name: 'Context', description: 'الخلفية ذات الصلة والقيود والمعلومات الظرفية التي يحتاجها الذكاء الاصطناعي.' },
      { name: 'Persona', description: 'الدور أو المنظور الذي ينبغي أن يتبناه الذكاء الاصطناعي عند الرد.' },
    ],
    bestFor: [
      'المهام التجارية والاحترافية',
      'سير عمل Google Workspace (Docs وGmail وSlides)',
      'المستخدمون الذين يعملون بشكل أساسي مع Gemini',
      'مخرجات نظيفة واحترافية دون تعقيد زائد',
    ],
    notFor: [
      'العمليات المعقدة متعددة الخطوات (استخدم RISEN)',
      'المهام التي تتطلب تحكمًا دقيقًا في الأسلوب (استخدم CO-STAR)',
      'المهام الإبداعية التي تناسبها شخصية مفتوحة بشكل أفضل',
    ],
    example: {
      scenario: 'صياغة ملخص احترافي لاجتماع',
      prompt: 'Task: لخّص القرارات الرئيسية وبنود العمل من نص هذا الاجتماع. Context: اجتماع أسبوعي لفريق المنتج، 8 حضور، 45 دقيقة. تم اتخاذ ثلاثة قرارات رئيسية بشأن خارطة طريق الربع الثاني. Persona: مساعدة تنفيذية لمدير المنتج (CPO).',
    },
    faq: [
      { q: 'من طوّر إطار عمل Google Prompt؟', a: 'طوّرت Google إطار عمل Google Prompt (Task وContext وPersona) وأوصت به كمنهج منظّم لكتابة برومبتات احترافية، مُحسَّن للعمل مع Gemini.' },
      { q: 'ما الفرق بين Google Prompt وRTF؟', a: 'كلاهما إطار عمل من ثلاثة حقول. يستخدم Google Prompt الترتيب Task-Context-Persona، بينما يستخدم RTF الترتيب Role-Task-Format. يمنح Google Prompt الأولوية للسياق، بينما يمنح RTF الأولوية للتنسيق.' },
      { q: 'هل إطار عمل Google Prompt مناسب لـ Gemini؟', a: 'نعم. صُمم هذا الإطار للعمل مع Gemini ويتكامل جيدًا مع أدوات Google Workspace مثل Docs وGmail وSlides.' },
    ],
  },
  ko: {
    tagline: 'Google가 개발하고 권장하는 프레임워크로, Gemini와 업무용 작업에 최적화되어 있습니다.',
    seoTitle: '구글 프롬프트 프레임워크: Gemini를 위한 Task·Context·Persona',
    metaDescription: 'Gemini와 Workspace 작업을 위해 Google이 직접 만든 3단계 구조. Task, Context, Persona를 실제 예시와 함께 설명하고 RTF와 비교합니다.',
    fields: [
      { name: 'Task', description: 'AI가 수행해야 할 작업 — 명확하고 구체적이며 행동 중심으로 작성합니다.' },
      { name: 'Context', description: 'AI가 필요로 하는 관련 배경, 제약 조건, 상황 정보입니다.' },
      { name: 'Persona', description: 'AI가 답변할 때 취해야 할 역할이나 관점입니다.' },
    ],
    bestFor: [
      '비즈니스 및 업무 관련 작업',
      'Google Workspace 워크플로우(Docs, Gmail, Slides)',
      '주로 Gemini를 사용하는 사용자',
      '불필요한 과설계 없이 깔끔하고 전문적인 결과물이 필요한 경우',
    ],
    notFor: [
      '복잡한 다단계 프로세스(RISEN 사용 권장)',
      '세밀한 스타일 제어가 필요한 작업(CO-STAR 사용 권장)',
      '개방적인 페르소나가 더 잘 맞는 창작 작업',
    ],
    example: {
      scenario: '전문적인 회의 요약 작성하기',
      prompt: 'Task: 이 회의 녹취록에서 핵심 결정사항과 실행 항목을 요약해 주세요. Context: 주간 제품팀 회의, 참석자 8명, 45분 소요. Q2 로드맵과 관련해 세 가지 주요 결정이 내려졌습니다. Persona: CPO의 임원 비서.',
    },
    faq: [
      { q: '구글 프롬프트 프레임워크는 누가 만들었나요?', a: '구글 프롬프트 프레임워크(Task, Context, Persona)는 Gemini에 최적화된 전문적인 프롬프트 작성을 위한 구조화된 접근법으로 Google이 개발하고 권장했습니다.' },
      { q: '구글 프롬프트와 RTF는 어떻게 다른가요?', a: '둘 다 세 가지 항목으로 구성된 프레임워크입니다. 구글 프롬프트는 Task-Context-Persona 순서를 사용하고, RTF는 Role-Task-Format 순서를 사용합니다. 구글 프롬프트는 맥락을 우선시하고, RTF는 형식을 우선시합니다.' },
      { q: '구글 프롬프트 프레임워크는 Gemini에 적합한가요?', a: '네. 이 프레임워크는 Gemini와 함께 작동하도록 설계되었으며 Docs, Gmail, Slides 같은 Google Workspace 도구와도 잘 연동됩니다.' },
    ],
  },
},
  },
  {
    slug: 'single-prompt-line',
    name: 'Single Prompt Line',
    expansion: 'One clear, direct sentence',
    tagline: 'No framework fields — just a single well-crafted sentence. Faster to write, still effective for simple queries.',
    seoTitle: 'Single Prompt Line: When One Sentence Beats a Framework',
    metaDescription: 'Structured frameworks aren\'t always faster. See when a single, well-built sentence out-performs a 5-field prompt, plus a real example and the limits.',
    publishDate: '2026-03-16',
    dateModified: '2026-07-16',
    complexity: 'Low',
    fields: [
      { name: 'Prompt', description: 'One complete, specific sentence that contains your entire request. No separate fields — all context, action, and expectations in one line.' },
    ],
    bestFor: [
      'Quick factual lookups',
      'Brainstorming and idea generation',
      'Testing how a model responds before adding structure',
      'Conversational follow-up questions in a chat session',
    ],
    notFor: [
      'Complex deliverables requiring precise output format',
      'Tasks where tone, audience, or style need control',
      'Professional content where quality and consistency matter',
    ],
    example: {
      scenario: 'Quick research question',
      prompt: 'What are the three most commonly cited reasons why AI models hallucinate factual information?',
    },
    related: ['ape', 'rtf', 'craft'],
    faq: [
      { q: 'When is a single prompt line better than a structured framework?', a: 'When speed matters more than precision — quick lookups, brainstorming, or testing model responses before investing in full prompt engineering.' },
      { q: 'How do I write a good single prompt line?', a: 'Be specific, include your context inline, and state the output format in the same sentence. Vague single-line prompts produce vague results.' },
      { q: 'Should I always use a framework instead of a single prompt line?', a: 'No. Frameworks add structure overhead. For simple queries, a well-crafted single sentence often produces better results faster than filling out 5-6 fields.' },
    ],
    translations: {
  de: {
    tagline: 'Kein Framework mit mehreren Feldern — nur ein präziser, gut formulierter Satz. Schneller geschrieben und bei einfachen Anfragen genauso wirksam.',
    seoTitle: 'Single Prompt Line: Wann ein Satz reicht statt Framework',
    metaDescription: 'Ein strukturiertes Framework ist nicht immer die schnellere Wahl. Hier erfährst du, wann ein gut formulierter Satz einem 5-Felder-Prompt überlegen ist — mit Beispiel und Grenzen.',
    fields: [
      { name: 'Prompt', description: 'Ein vollständiger, präziser Satz, der deine gesamte Anfrage enthält. Kein separates Feld — Kontext, Aktion und Erwartung stehen zusammen in einer Zeile.' },
    ],
    bestFor: [
      'Schnelle Faktenrecherchen',
      'Brainstorming und Ideenfindung',
      'Testen, wie ein Modell reagiert, bevor du Struktur hinzufügst',
      'Anschlussfragen in einem laufenden Chat-Gespräch',
    ],
    notFor: [
      'Komplexe Ergebnisse, die ein präzises Ausgabeformat brauchen',
      'Aufgaben, bei denen Ton, Zielgruppe oder Stil kontrolliert werden müssen',
      'Professionelle Inhalte, bei denen Qualität und Konsistenz zählen',
    ],
    example: {
      scenario: 'Schnelle Recherchefrage',
      prompt: 'Was sind die drei am häufigsten genannten Gründe dafür, dass KI-Modelle Fakten halluzinieren?',
    },
    faq: [
      { q: 'Wann ist eine einzelne Prompt-Zeile besser als ein strukturiertes Framework?', a: 'Wenn Geschwindigkeit wichtiger ist als Präzision — bei schnellen Recherchen, Brainstorming oder um zu testen, wie ein Modell reagiert, bevor du in ein vollständiges Prompt-Engineering investierst.' },
      { q: 'Wie schreibe ich eine gute Single-Prompt-Zeile?', a: 'Sei konkret, baue den Kontext direkt in den Satz ein und nenne das gewünschte Ausgabeformat gleich mit. Vage Ein-Zeilen-Prompts liefern vage Ergebnisse.' },
      { q: 'Sollte ich statt einer einzelnen Prompt-Zeile immer ein Framework verwenden?', a: 'Nein. Frameworks bringen zusätzlichen Strukturaufwand mit sich. Bei einfachen Anfragen liefert ein gut formulierter einzelner Satz oft schneller bessere Ergebnisse als das Ausfüllen von 5-6 Feldern.' },
    ],
  },
  fr: {
    tagline: 'Pas de champs à remplir — juste une phrase claire et directe. Plus rapide à écrire, tout aussi efficace pour les demandes simples.',
    seoTitle: 'Single Prompt Line : quand une phrase suffit',
    metaDescription: 'Un framework structuré n\'est pas toujours le plus rapide. Découvrez quand une phrase bien construite surpasse un prompt à 5 champs, avec un exemple concret et ses limites.',
    fields: [
      { name: 'Prompt', description: 'Une phrase complète et précise qui contient toute votre demande. Pas de champs séparés — contexte, action et attentes tiennent en une seule ligne.' },
    ],
    bestFor: [
      'Recherches factuelles rapides',
      'Brainstorming et génération d\'idées',
      'Tester la réaction d\'un modèle avant d\'ajouter de la structure',
      'Questions de suivi dans une conversation en cours',
    ],
    notFor: [
      'Livrables complexes nécessitant un format de sortie précis',
      'Tâches où le ton, l\'audience ou le style doivent être maîtrisés',
      'Contenus professionnels où la qualité et la cohérence comptent',
    ],
    example: {
      scenario: 'Question de recherche rapide',
      prompt: 'Quelles sont les trois raisons les plus souvent citées pour expliquer pourquoi les modèles d\'IA hallucinent des informations factuelles ?',
    },
    faq: [
      { q: 'Quand une ligne de prompt unique est-elle préférable à un framework structuré ?', a: 'Quand la rapidité compte plus que la précision — recherches rapides, brainstorming, ou test de la réaction d\'un modèle avant d\'investir dans un prompt engineering complet.' },
      { q: 'Comment rédiger une bonne ligne de prompt unique ?', a: 'Soyez précis, intégrez le contexte directement dans la phrase et indiquez le format de sortie souhaité dans la même phrase. Une ligne de prompt vague donne des résultats vagues.' },
      { q: 'Faut-il toujours préférer un framework à une ligne de prompt unique ?', a: 'Non. Les frameworks ajoutent une charge structurelle supplémentaire. Pour des demandes simples, une phrase unique bien construite produit souvent de meilleurs résultats, plus vite, que le remplissage de 5 à 6 champs.' },
    ],
  },
  es: {
    tagline: 'Sin campos de framework que rellenar — solo una frase clara y directa. Más rápida de escribir y igual de eficaz para consultas sencillas.',
    seoTitle: 'Single Prompt Line: cuándo una frase supera a un framework',
    metaDescription: 'Un framework estructurado no siempre es la opción más rápida. Descubre cuándo una frase bien construida supera a un prompt de 5 campos, con un ejemplo real y sus límites.',
    fields: [
      { name: 'Prompt', description: 'Una frase completa y precisa que contiene toda tu solicitud. Sin campos separados — contexto, acción y expectativas van juntos en una sola línea.' },
    ],
    bestFor: [
      'Búsquedas factuales rápidas',
      'Lluvia de ideas y generación de conceptos',
      'Probar cómo responde un modelo antes de añadir estructura',
      'Preguntas de seguimiento dentro de una conversación de chat',
    ],
    notFor: [
      'Entregables complejos que requieren un formato de salida preciso',
      'Tareas donde el tono, la audiencia o el estilo deben controlarse',
      'Contenido profesional donde la calidad y la consistencia importan',
    ],
    example: {
      scenario: 'Pregunta de investigación rápida',
      prompt: '¿Cuáles son las tres razones más citadas por las que los modelos de IA alucinan información factual?',
    },
    faq: [
      { q: '¿Cuándo es mejor una única línea de prompt que un framework estructurado?', a: 'Cuando la velocidad importa más que la precisión — búsquedas rápidas, lluvia de ideas o probar cómo responde un modelo antes de invertir en un prompt engineering completo.' },
      { q: '¿Cómo escribo una buena línea de prompt única?', a: 'Sé específico, incluye el contexto directamente en la frase y menciona el formato de salida en la misma oración. Los prompts de una línea vagos producen resultados vagos.' },
      { q: '¿Debería usar siempre un framework en lugar de una línea de prompt única?', a: 'No. Los frameworks añaden una sobrecarga de estructura. Para consultas simples, una frase única bien construida suele producir mejores resultados, más rápido, que rellenar 5-6 campos.' },
    ],
  },
  pt: {
    tagline: 'Sem campos de framework para preencher — só uma frase clara e direta. Mais rápida de escrever e igualmente eficaz para consultas simples.',
    seoTitle: 'Single Prompt Line: quando uma frase supera um framework',
    metaDescription: 'Um framework estruturado nem sempre é a opção mais rápida. Veja quando uma frase bem construída supera um prompt de 5 campos, com um exemplo real e seus limites.',
    fields: [
      { name: 'Prompt', description: 'Uma frase completa e específica que contém todo o seu pedido. Sem campos separados — contexto, ação e expectativas ficam todos em uma única linha.' },
    ],
    bestFor: [
      'Buscas factuais rápidas',
      'Brainstorming e geração de ideias',
      'Testar como um modelo responde antes de adicionar estrutura',
      'Perguntas de acompanhamento dentro de uma conversa de chat',
    ],
    notFor: [
      'Entregas complexas que exigem um formato de saída preciso',
      'Tarefas em que tom, público-alvo ou estilo precisam ser controlados',
      'Conteúdo profissional em que qualidade e consistência importam',
    ],
    example: {
      scenario: 'Pergunta de pesquisa rápida',
      prompt: 'Quais são os três motivos mais citados para os modelos de IA alucinarem informações factuais?',
    },
    faq: [
      { q: 'Quando uma única linha de prompt é melhor do que um framework estruturado?', a: 'Quando a velocidade importa mais do que a precisão — buscas rápidas, brainstorming ou testar a resposta de um modelo antes de investir em um prompt engineering completo.' },
      { q: 'Como escrevo uma boa linha de prompt única?', a: 'Seja específico, inclua o contexto diretamente na frase e indique o formato de saída na mesma frase. Prompts de uma linha vagos geram resultados vagos.' },
      { q: 'Devo sempre usar um framework em vez de uma linha de prompt única?', a: 'Não. Frameworks trazem uma sobrecarga extra de estrutura. Para consultas simples, uma única frase bem construída costuma gerar resultados melhores e mais rápidos do que preencher 5-6 campos.' },
    ],
  },
  ja: {
    tagline: 'フィールドを埋める必要のないフレームワーク不要のアプローチ——明確で的確な一文だけ。書くのが速く、シンプルな質問には十分な効果を発揮する。',
    seoTitle: 'Single Prompt Line：一文がフレームワークに勝る時',
    metaDescription: '構造化フレームワークが常に最速とは限らない。よく練られた一文が5項目のプロンプトを上回るケースを、実例と限界とともに解説する。',
    fields: [
      { name: 'Prompt', description: 'リクエストのすべてを含む、完全で具体的な一文。フィールドを分けず、文脈・行動・期待をすべて一行に収める。' },
    ],
    bestFor: [
      '簡単な事実確認',
      'ブレインストーミングとアイデア出し',
      '構造を加える前にモデルの応答を試す',
      'チャットセッション中の会話的なフォローアップ質問',
    ],
    notFor: [
      '正確な出力形式が求められる複雑な成果物',
      'トーンや対象読者、スタイルを制御する必要があるタスク',
      '品質と一貫性が重視されるプロフェッショナルなコンテンツ',
    ],
    example: {
      scenario: '簡単なリサーチ質問',
      prompt: 'AIモデルが事実情報を誤って生成（ハルシネーション）する理由として最もよく挙げられる3つは何か？',
    },
    faq: [
      { q: '単一のプロンプト行が構造化フレームワークより優れているのはどんな時か？', a: '精度よりスピードが重視される場合——簡単な調べ物、ブレインストーミング、本格的なプロンプトエンジニアリングに取り組む前にモデルの応答を試す場合など。' },
      { q: '良い単一プロンプト行はどう書けばよいか？', a: '具体的に書き、文脈を文中に組み込み、同じ文の中で出力形式を指定する。曖昧な一行プロンプトは曖昧な結果しか生まない。' },
      { q: '単一プロンプト行の代わりに常にフレームワークを使うべきか？', a: 'いいえ。フレームワークは構造の分だけ手間が増える。単純な質問であれば、よく練られた一文の方が5〜6項目を埋めるより速く、良い結果を生むことが多い。' },
    ],
  },
  zh: {
    tagline: '无需框架字段——只需一句清晰直接的话。写起来更快，对简单查询同样有效。',
    seoTitle: 'Single Prompt Line：一句话胜过框架的时机',
    metaDescription: '结构化框架并非总是更快。了解一句精心写就的话何时能胜过5字段提示词，附真实示例及其局限性。',
    fields: [
      { name: 'Prompt', description: '一句完整、具体的话，包含你的全部请求。无需拆分字段——上下文、动作和期望都写在同一行里。' },
    ],
    bestFor: [
      '快速事实查询',
      '头脑风暴与创意生成',
      '在添加结构之前测试模型的响应方式',
      '聊天会话中的对话式追问',
    ],
    notFor: [
      '需要精确输出格式的复杂交付物',
      '需要控制语气、受众或风格的任务',
      '重视质量与一致性的专业内容',
    ],
    example: {
      scenario: '快速研究性提问',
      prompt: 'AI模型产生事实性幻觉最常被提及的三个原因是什么？',
    },
    faq: [
      { q: '什么时候单行提示词比结构化框架更好？', a: '当速度比精确度更重要时——快速查询、头脑风暴，或在投入完整的提示词工程之前先测试模型的响应方式。' },
      { q: '如何写出一句好的单行提示词？', a: '要具体，把上下文直接写进句子里,并在同一句话中说明所需的输出格式。含糊的单行提示词只会得到含糊的结果。' },
      { q: '是否应该始终用框架代替单行提示词？', a: '不需要。框架会带来额外的结构开销。对于简单查询,一句精心写就的话往往比填写5-6个字段更快得到更好的结果。' },
    ],
  },
  ar: {
    tagline: 'بلا حقول إطار عمل تملؤها — مجرد جملة واحدة واضحة ومباشرة. أسرع في الكتابة، وفعّالة بنفس القدر للاستفسارات البسيطة.',
    seoTitle: 'السطر الواحد: متى تتفوق جملة واحدة على الإطار الكامل',
    metaDescription: 'الإطار المُهيكل ليس دائمًا الخيار الأسرع. تعرّف على متى تتفوق جملة مصاغة بعناية على موجّه من 5 حقول، مع مثال حقيقي وحدود هذا الأسلوب.',
    fields: [
      { name: 'Prompt', description: 'جملة واحدة كاملة ومحددة تحتوي على طلبك بأكمله. بلا حقول منفصلة — السياق والإجراء والتوقعات كلها في سطر واحد.' },
    ],
    bestFor: [
      'الاستفسارات الواقعية السريعة',
      'العصف الذهني وتوليد الأفكار',
      'اختبار كيفية استجابة النموذج قبل إضافة أي هيكلة',
      'أسئلة المتابعة الحوارية ضمن جلسة محادثة',
    ],
    notFor: [
      'المخرجات المعقدة التي تتطلب تنسيق إخراج دقيق',
      'المهام التي تحتاج إلى التحكم في النبرة أو الجمهور أو الأسلوب',
      'المحتوى الاحترافي حيث تُعدّ الجودة والاتساق أمرًا بالغ الأهمية',
    ],
    example: {
      scenario: 'سؤال بحثي سريع',
      prompt: 'ما هي الأسباب الثلاثة الأكثر ذكرًا لتفسير سبب توليد نماذج الذكاء الاصطناعي لمعلومات واقعية غير صحيحة (الهلوسة)؟',
    },
    faq: [
      { q: 'متى يكون السطر الواحد أفضل من إطار عمل مُهيكل؟', a: 'عندما تكون السرعة أهم من الدقة — كالاستفسارات السريعة، أو العصف الذهني، أو اختبار استجابة النموذج قبل الاستثمار في هندسة موجّهات كاملة.' },
      { q: 'كيف أكتب سطر موجّه جيدًا؟', a: 'كن محددًا، وأدرج السياق مباشرة داخل الجملة، واذكر تنسيق الإخراج المطلوب في الجملة نفسها. الموجّهات الغامضة ذات السطر الواحد تنتج نتائج غامضة.' },
      { q: 'هل يجب أن أستخدم دائمًا إطار عمل بدلًا من سطر واحد؟', a: 'لا. الأطر تضيف عبئًا هيكليًا إضافيًا. بالنسبة للاستفسارات البسيطة، غالبًا ما تُنتج جملة واحدة مصاغة بعناية نتائج أفضل وأسرع من ملء 5 إلى 6 حقول.' },
    ],
  },
  ko: {
    tagline: '채워야 할 프레임워크 필드가 없다 — 명확하고 직접적인 한 문장이면 충분하다. 작성 속도가 빠르고, 단순한 질문에는 그만큼 효과적이다.',
    seoTitle: 'Single Prompt Line: 한 문장이 프레임워크를 이기는 순간',
    metaDescription: '구조화된 프레임워크가 항상 더 빠른 것은 아니다. 잘 만든 한 문장이 5개 필드 프롬프트를 능가하는 경우를 실제 예시와 한계와 함께 살펴본다.',
    fields: [
      { name: 'Prompt', description: '요청 전체를 담은 완전하고 구체적인 한 문장. 별도의 필드 없이 맥락, 행동, 기대치가 한 줄에 모두 담긴다.' },
    ],
    bestFor: [
      '빠른 사실 확인 검색',
      '브레인스토밍과 아이디어 발상',
      '구조를 추가하기 전에 모델의 응답 방식 테스트',
      '채팅 세션 중 이어지는 대화형 후속 질문',
    ],
    notFor: [
      '정확한 출력 형식이 필요한 복잡한 결과물',
      '어조, 대상 독자, 스타일을 통제해야 하는 작업',
      '품질과 일관성이 중요한 전문 콘텐츠',
    ],
    example: {
      scenario: '빠른 리서치 질문',
      prompt: 'AI 모델이 사실 정보를 환각(할루시네이션)하는 이유로 가장 자주 언급되는 세 가지는 무엇인가?',
    },
    faq: [
      { q: '단일 프롬프트 한 줄이 구조화된 프레임워크보다 나은 경우는 언제인가?', a: '정확성보다 속도가 중요할 때다 — 빠른 검색, 브레인스토밍, 또는 본격적인 프롬프트 엔지니어링에 투자하기 전에 모델의 응답 방식을 테스트할 때.' },
      { q: '좋은 단일 프롬프트 한 줄은 어떻게 작성하는가?', a: '구체적으로 작성하고, 맥락을 문장 안에 포함시키며, 같은 문장 안에서 원하는 출력 형식을 명시한다. 모호한 한 줄 프롬프트는 모호한 결과를 낳는다.' },
      { q: '단일 프롬프트 한 줄 대신 항상 프레임워크를 사용해야 하는가?', a: '아니다. 프레임워크는 구조적인 부담을 추가한다. 단순한 질문이라면 잘 만든 한 문장이 5-6개 필드를 채우는 것보다 더 빠르게 더 나은 결과를 내는 경우가 많다.' },
    ],
  },
},
  },
]

export const FRAMEWORK_SLUGS = FRAMEWORKS.map(f => f.slug)

export function getFramework(slug: string): Framework | undefined {
  return FRAMEWORKS.find(f => f.slug === slug)
}

/** Resolves a framework merged with its translation for the given language.
 *  `name`, `expansion`, `slug`, `complexity`, `related`, `badge`, and field `name`
 *  values are never overridden — only prose fields are localized. Falls back to
 *  the English base when no translation exists for that language/framework. */
export function getFrameworkLocalized(slug: string, lang: FrameworkLang | 'en'): Framework | undefined {
  const fw = getFramework(slug)
  if (!fw) return undefined
  if (lang === 'en') return fw

  const t = fw.translations?.[lang]
  if (!t) return fw

  return {
    ...fw,
    tagline: t.tagline,
    seoTitle: t.seoTitle,
    metaDescription: t.metaDescription,
    fields: fw.fields.map((field, i) => ({ name: field.name, description: t.fields[i]?.description ?? field.description })),
    bestFor: t.bestFor,
    notFor: t.notFor,
    example: t.example,
    heroImage: t.heroImage ?? fw.heroImage,
    bestForImage: t.bestForImage ?? fw.bestForImage,
    faq: t.faq,
  }
}
