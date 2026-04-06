// RTF Framework - Complete multilingual translations (DE, FR, JA, ZH)
export const rtfFrameworkTranslations = {
  de: {
    theme: 'Frameworks',
    title: 'RTF Framework: Unternehmensschulung und pädagogische Inhalte (2026)',
    intro: 'Der RTF Framework ist speziell für Schulung, Bildung und strukturiertes Lehren konzipiert. RTF steht für Role, Task und Format – und ist das kompakteste aller Frameworks. Es ist nicht für freiform Anfragen gedacht, sondern für standardisierte Schulungsinhalte, Unterrichtslektionen, Corporate Training und formalisierte Lernpfade. Der Grund, warum RTF so wirksam ist: Es zwingt Sie, den Pädagogen, die Lernziele und das Bildungsformat klar zu trennen. Dies führt zu konsistenten, pädagogisch fundierten Ausgaben, die Lernende wirklich verstehen und behalten können.',
    publishDate: '2026-03-24',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RTF Framework',
    sections: {
      whatIsRtf: {
        title: 'Was ist der RTF Framework?',
        content: [
          '**Der RTF Framework ist ein zielgerichteter Framework für Schulung und Bildung, der Rolle, Aufgabe und Format klar trennt.** Im Gegensatz zu umfassenden Frameworks wie RISEN oder komplexen Frameworks wie SPECS, reduziert RTF die Anfrage auf drei kritische Fragen: Wer lehrt (Role)? Was soll gelehrt werden (Task)? Wie soll es präsentiert werden (Format)?',
          'RTF ist nicht für allgemeine KI-Anfragen gedacht. Es ist spezialisiert. Wenn Sie eine Mitarbeiterschulung, eine akademische Lektion, ein Trainingskurs oder strukturierte Lernmaterialien erstellen, ist RTF Ihr Framework. Der Grund: Schulung hat spezifische pädagogische Anforderungen, die andere Frameworks nicht adressieren.'
        ],
      },
      threeComponents: {
        title: 'Die drei Komponenten des RTF Frameworks',
        content: 'RTF wird aus genau drei Komponenten aufgebaut:',
        items: [
          '**Role (Rolle):** Welche Fachkompetenz sollte die Lehr-KI haben? Ein "Schulungsleiter für Datensicherheit" hat eine andere Perspektive als ein "Softwareentwickler, der neue Entwickler trainiert". Die Rolle definiert nicht nur Expertise, sondern auch Autorität und Kommunikationsstil.',
          '**Task (Aufgabe):** Was genau soll unterrichtet werden? Nicht nur "Lehren Sie Python", sondern "Lehren Sie Anfänger, wie sie ihre erste Python-Funktion schreiben, mit Fokus auf Fehlerbehandlung".',
          '**Format (Format):** Wie soll die Ausgabe strukturiert sein? Sind das Folien? Ein Lektionsplan? Ein Quiz? Eine Schritt-für-Schritt-Anleitung? Das Format bestimmt, wie der Lernende die Information konsumiert.'
        ],
      },
      whyRtfIsUseful: {
        title: 'Warum RTF für Bildung so wertvoll ist',
        content: [
          '**RTF zwingt Sie, Schulungsinhalte mit pädagogischer Intention zu schaffen, nicht nur mit Informationen zu füllen.** Die meisten Prompts fragen "Erkläre dieses Konzept." RTF fragt "Unterrichte ein Schüler dieses Konzept, so dass er es versteht und anwenden kann."',
          'Der Unterschied ist kritisch. Ein "Erklären" kann technisch korrekt sein, aber nicht pädagogisch effektiv. Ein Schüler könnte die Wörter verstehen, aber das Konzept nicht wirklich erfassen. RTF erzwingt, dass die KI mit Lernzielen im Hinterkopf schreibt.',
          'Dies ist besonders wertvoll in Unternehmensumgebungen. Wenn Sie ein neues Tool schulen müssen, kann "Erklären Sie das Tool" zu einem langatmigen Handbuch führen. Aber "Schulen Sie einen neuen Mitarbeiter in diesem Tool so, dass er produktiv wird" führt zu einem fokussierten, praktischen Trainingsplan.'
        ],
      },
      badVsGoodExample: {
        title: 'Schlechtes vs. Gutes RTF-Prompt-Beispiel',
        content: 'Vergleichen Sie diese beiden Anfragen:',
        items: [
          '**Schlecht (zu vage):** „Erkläre Cloud-Computing für Anfänger."',
          '**Gut (RTF):** „Role: Du bist ein erfahrener Cloud-Architekt, der Nicht-Tech-Managern Konzepte erklärt. Task: Unterrichte Anfänger, wie Cloud-Computing die Kosten und Skalierbarkeit für ein Startup verbessert. Format: Erstelle einen 30-Minuten-Schulungsplan mit 3 Schritten, jedem mit Lernziel, 2-Minuten-Erklärung und praktisches Beispiel aus der Praxis."'
        ],
      },
      whenToUse: {
        title: 'Wann Sie RTF verwenden sollten',
        content: 'RTF ist ideal für diese Fälle:',
        items: [
          '**Unternehmensschulung:** Onboarding neuer Mitarbeiter, Schulung zu neuen Tools, Compliance-Training',
          '**Akademische Inhalte:** Lektionenpläne, Kursmodule, Bildungsmaterialien',
          '**Zertifizierungsvorbereitung:** Strukturierte Lernpfade, die jemanden zur Zertifizierung führen',
          '**Interne Dokumentation:** Wenn die Dokumentation auch Personen unterrichten soll, nicht nur informieren',
          '**Schulungsprogramme:** Mehrstufige Programme, in denen jede Phase Lernende an eine neue Fertigkeit führt',
          '**Knowledge Transfer:** Wenn Experten ihr Wissen in strukturierter, lernbarer Form weitergeben'
        ],
      },
      howPQImplements: {
        title: 'Wie PromptQuorum den RTF Framework implementiert',
        content: [
          '**PromptQuorum erkennt RTF-Prompts und bietet vordefinierte Role-Templates für Bildung an.** Anstatt selbst "Ein erfahrener Trainer mit 15 Jahren Schulungserfahrung" zu schreiben, können Sie aus bewährten Rollen wählen. PromptQuorum kennt die Unterschiede zwischen "Unternehmensschulung", "Akademische Lehre" und "technisches Mentoring".',
          'Das Task-Feld wird durch Lernziel-Vorlagen unterstützt. PromptQuorum kann Ihnen helfen, Ihr Trainingsziel zu präzisieren: "Nicht nur verstehen, dass X existiert, sondern können, X zu verwenden, um Y zu erreichen."',
          'Das Format-Feld hat vordefinierte Optionen: Lesson Plan, Schulungspräsentation, Quiz, Step-by-Step Guide, Video Script. Dies stellt sicher, dass Ihre Schulungsausgabe sofort in ein bestehendes Schulungssystem integriert werden kann.'
        ],
      },
      usingRtfWithOthers: {
        title: 'RTF mit anderen Frameworks kombinieren',
        content: [
          '**RTF kann mit RISEN kombiniert werden, wenn Sie mehrstufige Schulungsprogramme erstellen.** RISEN handhabt den gesamten mehrstufigen Prozess, während RTF die pädagogische Qualität jedes Schritts sichert.',
          'Praktisches Szenario: Sie verwenden RISEN, um ein 8-Wochen-Schulungsprogramm zu strukturieren. In jedem Schritt verwenden Sie RTF, um die pädagogische Qualität dieser Woche zu sichern. Die Kombination wird zu: "Unser Programm ist 8 Wochen, gut strukturiert (RISEN), und jede Woche wird pädagogisch effektiv unterrichtet (RTF)."',
          'Sie können auch TRACE mit RTF kombinieren, wenn Sie Schulungsbeispiele haben. RTF gibt das Bildungs-Framework, TRACE zeigt Lern-Beispiele. Dies ist eine starke Kombination für hochwertige Schulung.'
        ],
      },
      howToStart: {
        title: 'Wie Sie mit RTF beginnen',
        content: 'Folgen Sie diesen einfachen Schritten, um einen RTF-Prompt zu schaffen:',
        numberedItems: [
          '**Wählen Sie die Rolle:** Welche Art von Pädagoge oder Trainer soll unterrichten? Ein "Erfahrener Ausbilder für Datenschutz"? Ein "Softwareingenieur, der neue Entwickler unterstützt"? Ein "Lehrplan-Designer für Corporate Training"? Seien Sie spezifisch über Erfahrung und Perspektive.',
          '**Definieren Sie die Aufgabe scharf:** Was soll gelehrt werden? Nicht "Erkläre Projektmanagement", sondern "Lehre neue Projektleiter, wie sie ein 3-Monats-Projekt mit 5 Personen planen und durchführen, mit Fokus auf Risikomanagement".',
          '**Wählen Sie das Format:** Wie soll die Ausgabe strukturiert sein? Möchten Sie einen Lektionsplan, eine Präsentation, ein Video-Skript, ein Quiz, einen Step-by-Step-Guide? Sein Sie klar über die Ausgabe-Struktur.',
          '**Spezifizieren Sie optionale Lernziele:** Wenn Sie Lernziele haben (z.B. "der Trainingsnehmer sollte X verstehen und Y anwenden können"), schreiben Sie sie auf.',
          '**Fügen Sie optionale Zielgruppe hinzu:** Wer sind die Lernenden? "Neue Mitarbeiter ohne Erfahrung", "Manager mit 5+ Jahren Erfahrung", "globale Mitarbeiter"? Dies hilft der KI, die Komplexität und Länge richtig zu kalibrieren.'
        ],
      },
    },
  },

  fr: {
    theme: 'Frameworks',
    title: 'Framework RTF : Contenu Pédagogique et Formation Professionnelle (2026)',
    intro: 'Le framework RTF est spécifiquement conçu pour la formation, l\'éducation et l\'enseignement structuré. RTF signifie Role, Task et Format – et c\'est le plus compact de tous les frameworks. Il n\'est pas conçu pour des demandes sans structure, mais pour du contenu de formation standardisé, des leçons d\'enseignement, de la formation professionnelle et des parcours d\'apprentissage formalisés. La raison pour laquelle RTF est si efficace : il vous force à séparer clairement le pédagogue, les objectifs d\'apprentissage et le format éducatif. Cela conduit à des résultats cohérents et pédagogiquement solides que les apprenants peuvent réellement comprendre et mémoriser.',
    publishDate: '2026-03-24',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Framework RTF',
    sections: {
      whatIsRtf: {
        title: 'Qu\'est-ce que le Framework RTF ?',
        content: [
          '**Le framework RTF est un framework intentionnel pour la formation et l\'éducation qui sépare clairement le rôle, la tâche et le format.** Contrairement aux frameworks complets comme RISEN ou complexes comme SPECS, RTF réduit la demande à trois questions critiques : Qui enseigne (Role) ? Qu\'est-ce qui doit être enseigné (Task) ? Comment devrait-il être présenté (Format) ?',
          'RTF n\'est pas conçu pour les demandes générales d\'IA. Il est spécialisé. Si vous créez une formation pour les employés, une leçon académique, un cours de formation ou du matériel d\'apprentissage structuré, RTF est votre framework. La raison : la formation a des exigences pédagogiques spécifiques que les autres frameworks n\'abordent pas.'
        ],
      },
      threeComponents: {
        title: 'Les Trois Composants du Framework RTF',
        content: 'RTF est construit à partir de exactement trois composants :',
        items: [
          '**Role (Rôle) :** Quelle compétence d\'experts la l\'IA pédagogue devrait-elle avoir ? Un "animateur de formation en sécurité des données" a une perspective différente d\'un "développeur de logiciels qui forme les nouveaux développeurs". Le rôle définit non seulement l\'expertise, mais aussi l\'autorité et le style de communication.',
          '**Task (Tâche) :** Qu\'est-ce qui doit exactement être enseigné ? Pas seulement "Enseigne Python", mais "Enseigne aux débutants comment écrire leur première fonction Python, en mettant l\'accent sur la gestion des erreurs".',
          '**Format (Format) :** Comment la production doit-elle être structurée ? Est-ce des diapositives ? Un plan de cours ? Un quiz ? Un guide étape par étape ? Le format détermine comment l\'apprenant consomme les informations.'
        ],
      },
      whyRtfIsUseful: {
        title: 'Pourquoi RTF est si Précieux pour l\'Éducation',
        content: [
          '**RTF vous force à créer du contenu de formation avec intention pédagogique, pas seulement remplir d\'informations.** La plupart des prompts demandent "Explique ce concept." RTF demande "Enseigne à un apprenant ce concept pour qu\'il le comprenne et puisse l\'appliquer."',
          'La différence est critique. Une "explication" peut être techniquement correcte mais pédagogiquement inefficace. Un apprenant pourrait comprendre les mots mais pas réellement comprendre le concept. RTF force l\'IA à écrire avec les objectifs d\'apprentissage à l\'esprit.',
          'C\'est particulièrement précieux dans les environnements d\'entreprise. Si vous devez former les gens à un nouvel outil, "Explique l\'outil" peut conduire à un manuel verbeux. Mais "Former un nouvel employé sur cet outil pour qu\'il soit productif" conduit à un plan de formation focalisé et pratique.'
        ],
      },
      badVsGoodExample: {
        title: 'Mauvais vs Bon Exemple de Prompt RTF',
        content: 'Comparez ces deux demandes :',
        items: [
          '**Mauvais (trop vague) :** « Explique le Cloud Computing pour les débutants. »',
          '**Bon (RTF) :** « Role: Tu es un architecte cloud expérimenté qui explique les concepts aux managers non-tech. Task: Enseigne aux débutants comment le Cloud Computing améliore les coûts et la scalabilité pour une startup. Format: Crée un plan de formation de 30 minutes avec 3 étapes, chacun avec objectif d\'apprentissage, explication de 2 minutes et exemple réel pratique. »'
        ],
      },
      whenToUse: {
        title: 'Quand Utiliser RTF',
        content: 'RTF est idéal pour ces cas :',
        items: [
          '**Formation Professionnelle :** Intégration des nouveaux employés, formation aux nouveaux outils, formation en conformité',
          '**Contenu Académique :** Plans de cours, modules de cours, matériels éducatifs',
          '**Préparation aux Certifications :** Parcours d\'apprentissage structurés qui préparent quelqu\'un à la certification',
          '**Documentation Interne :** Quand la documentation doit aussi enseigner à d\'autres, pas seulement informer',
          '**Programmes de Formation :** Programmes à plusieurs étapes où chaque phase mène les apprenants à une nouvelle compétence',
          '**Transfert de Connaissances :** Quand les experts partagent leur savoir dans une forme structurée et apprenable'
        ],
      },
      howPQImplements: {
        title: 'Comment PromptQuorum Implémente le Framework RTF',
        content: [
          '**PromptQuorum reconnaît les prompts RTF et propose des modèles de rôles prédéfinis pour l\'éducation.** Au lieu d\'écrire vous-même « Un animateur expérimenté avec 15 ans d\'expérience en formation », vous pouvez choisir parmi des rôles éprouvés. PromptQuorum connaît les différences entre « Formation d\'Entreprise », « Enseignement Académique » et « mentorat technique ».',
          'Le champ Task est soutenu par des modèles d\'objectifs d\'apprentissage. PromptQuorum peut vous aider à préciser votre objectif de formation : « Pas seulement comprendre que X existe, mais pouvoir utiliser X pour atteindre Y ».',
          'Le champ Format a des options prédéfinies : Plan de Cours, Présentation de Formation, Quiz, Guide Étape par Étape, Script Vidéo. Cela garantit que votre résultat de formation peut être immédiatement intégré à un système de formation existant.'
        ],
      },
      usingRtfWithOthers: {
        title: 'Combiner RTF avec d\'autres Frameworks',
        content: [
          '**RTF peut être combiné avec RISEN quand vous créez des programmes de formation multi-étapes.** RISEN gère l\'ensemble du processus multi-étapes, tandis que RTF assure la qualité pédagogique de chaque étape.',
          'Scénario pratique : Vous utilisez RISEN pour structurer un programme de formation de 8 semaines. À chaque étape, vous utilisez RTF pour assurer la qualité pédagogique de cette semaine. La combinaison devient : « Notre programme est 8 semaines, bien structuré (RISEN), et chaque semaine est pédagogiquement efficace (RTF). »',
          'Vous pouvez également combiner TRACE avec RTF si vous avez des exemples de formation. RTF donne le cadre éducatif, TRACE montre les exemples d\'apprentissage. C\'est une combinaison puissante pour une formation de haute qualité.'
        ],
      },
      howToStart: {
        title: 'Comment Commencer avec RTF',
        content: 'Suivez ces étapes simples pour créer un prompt RTF :',
        numberedItems: [
          '**Choisissez le Rôle :** Quel type de pédagogue ou formateur doit enseigner ? Un « animateur de formation chevronné en sécurité des données » ? Un « ingénieur logiciel qui soutient les nouveaux développeurs » ? Un « concepteur de programme pour la formation d\'entreprise » ? Soyez spécifique sur l\'expérience et la perspective.',
          '**Définissez la Tâche Clairement :** Qu\'est-ce qui doit être enseigné ? Pas « Explique la Gestion de Projet », mais « Enseigne aux nouveaux chefs de projet comment planifier et exécuter un projet de 3 mois avec 5 personnes, en mettant l\'accent sur la gestion des risques ».',
          '**Choisissez le Format :** Comment la production doit-elle être structurée ? Voulez-vous un plan de cours, une présentation, un script vidéo, un quiz, un guide étape par étape ? Soyez clair sur la structure de la production.',
          '**Spécifiez les Objectifs d\'Apprentissage Optionnels :** Si vous avez des objectifs d\'apprentissage (par exemple, « l\'apprenant devrait comprendre X et pouvoir appliquer Y »), écrivez-les.',
          '**Ajoutez le Public Cible Optionnel :** Qui sont les apprenants ? « Nouveaux employés sans expérience », « Managers avec 5+ ans d\'expérience », « employés mondiaux » ? Cela aide l\'IA à calibrer correctement la complexité et la longueur.'
        ],
      },
    },
  },

  ja: {
    theme: 'Frameworks',
    title: 'RTFフレームワーク：エンタープライズトレーニングと教育コンテンツ（2026）',
    intro: 'RTFフレームワークは、トレーニング、教育、構造化された教育のために特別に設計されています。RTFはRole、Task、Formatを表し、すべてのフレームワークの中で最もコンパクトです。形態のない要求のために設計されたのではなく、標準化されたトレーニングコンテンツ、教育レッスン、企業トレーニング、および形式化された学習パスのためです。RTFが非常に効果的である理由：それはあなたに教育者、学習目標、教育形式を明確に分離することを強制します。これにより、学習者が実際に理解し、保持できる一貫性のある教育的に健全な出力につながります。',
    publishDate: '2026-03-24',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RTFフレームワーク',
    sections: {
      whatIsRtf: {
        title: 'RTFフレームワークとは何か',
        content: [
          '**RTFフレームワークは、ロール、タスク、フォーマットを明確に分離する、トレーニングと教育の意図的なフレームワークです。** RISENのような包括的なフレームワークやSPECSのような複雑なフレームワークとは異なり、RTFはリクエストを3つの重要な質問に縮小します：誰が教えるのか（Role）？何を教えるべきか（Task）？どのように提示すべきか（Format）？',
          'RTFは一般的なAI要求のために設計されていません。それは専門的です。従業員トレーニング、学術レッスン、トレーニングコース、または構造化された学習教材を作成している場合、RTFはあなたのフレームワークです。理由：トレーニングには他のフレームワークが対処しない特定の教育要件があります。'
        ],
      },
      threeComponents: {
        title: 'RTFフレームワークの3つの構成要素',
        content: 'RTFは正確に3つの構成要素から構築されています：',
        items: [
          '**Role（ロール）：** 教えるAIはどの程度の専門知識を持つべきか？「データセキュリティトレーニングファシリテータ」は「新しい開発者をトレーニングするソフトウェア開発者」とは異なる視点を持ちます。ロールは専門知識だけでなく、権威とコミュニケーションスタイルも定義します。',
          '**Task（タスク）：** 正確に何を教えるべきか？単なる「Pythonを教える」ではなく、「初心者に最初のPython関数を書く方法を教え、エラーハンドリングに焦点を当てる」。',
          '**Format（フォーマット）：** 出力はどのように構造化されるべきか？スライド？レッスンプラン？クイズ？ステップバイステップガイド？フォーマットは、学習者が情報をどのように消費するかを決定します。'
        ],
      },
      whyRtfIsUseful: {
        title: 'なぜRTFが教育にとってそれほど貴重か',
        content: [
          '**RTFはあなたに教育的意図でトレーニングコンテンツを作成することを強制し、単に情報で埋めるのではなく。** ほとんどのプロンプトは「このコンセプトを説明して」と言います。RTFは「このコンセプトを学習者に教え、それが理解でき、適用できるように」と言います。',
          '違いは重要です。「説明」は技術的に正しい場合がありますが、教育的には効果的ではありません。学習者は言葉を理解する場合がありますが、概念を本当に理解しないかもしれません。RTFは学習目標を念頭に置いて書くようにAIを強制します。',
          'これは企業環境で特に価値があります。新しいツールについて人々をトレーニングする必要がある場合、「ツールを説明して」は長々としたマニュアルにつながる可能性があります。しかし「このツール上で新しい従業員をトレーニングして生産性になるように」は焦点を絞った実用的なトレーニング計画につながります。'
        ],
      },
      badVsGoodExample: {
        title: '悪いRTFプロンプトの例と良い例',
        content: 'これら2つの質問を比較してください：',
        items: [
          '**悪い（あまりに曖昧）：** 「初心者向けのクラウドコンピューティングを説明してください。」',
          '**良い（RTF）：** 「Role: あなたは経験豊かなクラウドアーキテクトであり、非技術マネージャーにコンセプトを説明します。Task: 初心者にクラウドコンピューティングがスタートアップのコストとスケーラビリティをどのように改善するかを教えます。Format: 3つのステップを含む30分のトレーニング計画を作成します。各ステップに学習目標、2分間の説明、実際の実例を含めます。」'
        ],
      },
      whenToUse: {
        title: 'RTFをいつ使用するか',
        content: 'RTFは以下のケースに最適です：',
        items: [
          '**エンタープライズトレーニング：** 新しい従業員のオンボーディング、新しいツールへのトレーニング、コンプライアンストレーニング',
          '**学術コンテンツ：** レッスンプラン、コースモジュール、教育教材',
          '**認定試験準備：** 誰かを認定に導く構造化学習パス',
          '**内部ドキュメント：** ドキュメンテーションが他者に教えるべき場合、単に情報を与えるのではなく',
          '**トレーニングプログラム：** 各フェーズが学習者を新しいスキルに導く多段階プログラム',
          '**知識移転：** エキスパートが彼らの知識を構造化された習得可能な形式で共有する場合'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorumがRTFフレームワークを実装する方法',
        content: [
          '**PromptQuorumはRTFプロンプトを認識し、教育用の事前定義されたロールテンプレートを提供します。** 自分で「15年のトレーニング経験を持つ経験豊かなトレーナー」と書く代わりに、実証済みのロールから選択できます。PromptQuorumは「企業トレーニング」、「学術教育」、「技術メンタリング」の違いを知っています。',
          'TaskフィールドはLearning Goal テンプレートでサポートされています。PromptQuorumはあなたのトレーニング目標を明確にするのに役立ちます：「単にXが存在することを理解するだけでなく、XをYを達成するために使用できる」。',
          'フォーマットフィールドには事前定義されたオプションがあります：Lesson Plan、Training Presentation、Quiz、Step-by-Step Guide、Video Script。これにより、トレーニング出力が既存のトレーニングシステムにすぐに統合できることが保証されます。'
        ],
      },
      usingRtfWithOthers: {
        title: 'RTFを他のフレームワークと組み合わせる',
        content: [
          '**マルチステップのトレーニングプログラムを作成するときにRTFをRISENと組み合わせることができます。** RISENはマルチステッププロセス全体を処理し、RTFは各ステップの教育品質を確保します。',
          '実践的なシナリオ：RISENを使用して8週間のトレーニングプログラムを構造化しています。各ステップで、RTFを使用してその週の教育品質を確保します。組み合わせは次のようになります：「当社のプログラムは8週間で、十分に構造化されており（RISEN）、毎週は教育的に効果的に教えられています（RTF）。」',
          'トレーニング例がある場合、RTFをTRACEと組み合わせることもできます。RTFは教育フレームワークを提供し、TRACEは学習例を示します。これは高品質なトレーニングの強力な組み合わせです。'
        ],
      },
      howToStart: {
        title: 'RTFを始める方法',
        content: 'RTFプロンプトを作成するために、これらの簡単なステップに従います：',
        numberedItems: [
          '**ロールを選択します：** どの種類の教育者またはトレーナーが教えるべきか？「データセキュリティトレーニングのベテランアニメータ」？「新しい開発者をサポートするソフトウェアエンジニア」？「企業トレーニング用の教育課程デザイナー」？経験と視点について具体的にしてください。',
          '**タスクを明確に定義します：** 何を教えるべきか？「プロジェクト管理を説明して」ではなく、「新しいプロジェクトマネージャーに、リスク管理に焦点を当てながら、3ヶ月のプロジェクトを5人でどのように計画して実行するかを教える」。',
          '**フォーマットを選択します：** 出力はどのように構造化されるべきか？レッスンプラン、プレゼンテーション、ビデオスクリプト、クイズ、ステップバイステップガイドをしたいですか？出力構造について明確にしてください。',
          '**学習目標をオプションで指定します：** 学習目標がある場合（例：「トレーニング受講者がXを理解し、Yを適用できるべき」）、それらを書き留めてください。',
          '**オプションでターゲットオーディエンスを追加します：** 学習者は誰ですか？「経験のない新しい従業員」、「5年以上の経験を持つマネージャー」、「グローバル従業員」？これにより、AIは複雑さと長さを適切に調整できます。'
        ],
      },
    },
  },

  zh: {
    theme: 'Frameworks',
    title: 'RTF框架：企业培训和教育内容（2026）',
    intro: 'RTF框架专门为培训、教育和结构化教学设计。RTF代表Role、Task和Format——这是所有框架中最紧凑的。它不是为无形式的请求设计，而是为标准化的培训内容、教学课程、企业培训和形式化的学习路径设计。RTF为什么如此有效的原因：它强制您明确分离教育者、学习目标和教育格式。这导致学习者可以真正理解和保留的一致、教育上合理的输出。',
    publishDate: '2026-03-24',
    readTime: '6分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RTF框架',
    sections: {
      whatIsRtf: {
        title: '什么是RTF框架',
        content: [
          '**RTF框架是一个有意的框架，用于培训和教育，它明确分离角色、任务和格式。** 与RISEN这样的综合框架或SPECS这样的复杂框架不同，RTF将请求简化为三个关键问题：谁在教授（Role）？应该教授什么（Task）？应该如何呈现（Format）？',
          'RTF不是为一般AI请求设计的。它是专门的。如果您正在创建员工培训、学术课程、培训课程或结构化学习材料，RTF就是您的框架。原因：培训有特定的教育要求，其他框架无法解决。'
        ],
      },
      threeComponents: {
        title: 'RTF框架的三个构成部分',
        content: 'RTF由恰好三个组件组成：',
        items: [
          '**Role（角色）：** 教授AI应该具有什么程度的专业知识？"数据安全培训协调员"与"培训新开发人员的软件工程师"的视角不同。角色不仅定义专业知识，还定义权威和沟通风格。',
          '**Task（任务）：** 应该准确教授什么？不仅仅是"教Python"，而是"教初学者如何编写他们的第一个Python函数，重点关注错误处理"。',
          '**Format（格式）：** 输出应该如何结构化？是幻灯片吗？课程计划？测验？分步指南？格式确定学习者如何使用信息。'
        ],
      },
      whyRtfIsUseful: {
        title: '为什么RTF对教育如此有价值',
        content: [
          '**RTF强制您以教育意图创建培训内容，而不仅仅是用信息填充。** 大多数提示要求"解释这个概念。"RTF要求"向学习者教授这个概念，使其能够理解并应用它。"',
          '区别至关重要。"解释"在技术上可能是正确的，但教育上无效。学习者可能理解单词，但不真正掌握概念。RTF强制AI以学习目标在心中进行写作。',
          '这在企业环境中特别有价值。如果您需要对新工具进行培训，"解释该工具"可能会导致冗长的手册。但"对新员工进行此工具培训以使其富有成效"会导致集中、实用的培训计划。'
        ],
      },
      badVsGoodExample: {
        title: '不好的RTF提示示例 vs 好的示例',
        content: '比较这两个请求：',
        items: [
          '**不好（过于模糊）：** "为初学者解释云计算。"',
          '**好的（RTF）：** "Role: 你是一位经验丰富的云架构师，为非技术经理解释概念。Task: 教初学者云计算如何改善初创公司的成本和可扩展性。Format: 创建一个30分钟的培训计划，有3个步骤，每个步骤包括学习目标、2分钟解释和实际示例。"'
        ],
      },
      whenToUse: {
        title: '何时使用RTF',
        content: 'RTF非常适合这些情况：',
        items: [
          '**企业培训：** 新员工入职、新工具培训、合规性培训',
          '**学术内容：** 课程计划、课程模块、教育材料',
          '**认证准备：** 结构化学习路径，为认证做准备',
          '**内部文档：** 当文档也应该教导他人，而不仅仅是告知时',
          '**培训计划：** 多阶段计划，其中每个阶段都引导学习者获得新技能',
          '**知识转移：** 当专家以结构化、可学习的形式分享他们的知识时'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum如何实现RTF框架',
        content: [
          '**PromptQuorum识别RTF提示并为教育提供预定义的角色模板。** 您无需自己编写"拥有15年培训经验的经验丰富的培训师"，而是可以从经过验证的角色中选择。PromptQuorum了解"企业培训"、"学术教学"和"技术指导"之间的差异。',
          'Task字段由学习目标模板支持。PromptQuorum可以帮助您明确培训目标："不仅仅是理解X存在，而是能够使用X来实现Y。"',
          'Format字段有预定义的选项：Lesson Plan、Training Presentation、Quiz、Step-by-Step Guide、Video Script。这确保您的培训输出可以立即集成到现有的培训系统中。'
        ],
      },
      usingRtfWithOthers: {
        title: '将RTF与其他框架相结合',
        content: [
          '**在创建多步骤培训计划时，可以将RTF与RISEN结合。** RISEN处理整个多步骤流程，而RTF确保每个步骤的教育质量。',
          '实际场景：您使用RISEN来构建8周的培训计划。在每个步骤处，您使用RTF来确保该周的教育质量。组合变成："我们的计划是8周，结构良好（RISEN），每周教学在教育上有效（RTF）。"',
          '如果您有培训示例，您也可以将RTF与TRACE结合。RTF提供教育框架，TRACE展示学习示例。这是高质量培训的强大组合。'
        ],
      },
      howToStart: {
        title: '如何开始使用RTF',
        content: '遵循这些简单步骤来创建RTF提示：',
        numberedItems: [
          '**选择角色：** 什么类型的教育者或培训师应该教授？"数据安全培训的资深协调员"？"支持新开发人员的软件工程师"？"企业培训的课程设计师"？对经验和观点具体说明。',
          '**清楚地定义任务：** 应该教授什么？不是"解释项目管理"，而是"教新项目经理如何计划和执行一个3个月的项目，5个人，重点关注风险管理"。',
          '**选择格式：** 输出应该如何结构化？您想要课程计划、演示、视频脚本、测验、分步指南吗？对输出结构保持清晰。',
          '**可选地指定学习目标：** 如果您有学习目标（例如，"学员应该理解X并能够应用Y"），请记下来。',
          '**可选地添加目标受众：** 学习者是谁？"没有经验的新员工"、"拥有5年以上经验的经理"、"全球员工"？这有助于AI正确校准复杂性和长度。'
        ],
      },
    },
  },
}
