// RISEN Framework - Complete multilingual translations (DE, FR, JA, ZH)
export const risenFrameworkTranslations = {
  de: {
    theme: 'Frameworks',
    title: 'RISEN Framework: Mehrstufige Prozesse strukturieren (2026)',
    intro: 'Der RISEN Framework ist spezialisiert auf komplexe, mehrstufige Aufgaben. Im Gegensatz zu einfachen Prompts, die einzelne Anfragen beantworten, zerlegt RISEN Workflows in klar definierte Rollen, Anweisungen, Schritte, Endziele und Einschränkungen. Dieser strukturierte Ansatz ist ideal für Prozessautomatisierung, Schulungskurse, Produktentwicklung und jede Aufgabe, die mehrere unterschiedliche Phasen erfordert. RISEN verhindert, dass die KI vom Weg abkommt und stellt sicher, dass die Ausgabe Ihre genauen Anforderungen erfüllt.',
    publishDate: '2026-03-24',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RISEN Framework',
    sections: {
      whatIsRisen: {
        title: 'Was ist der RISEN Framework?',
        content: [
          '**Der RISEN Framework ist eine strukturierte Vorlage für mehrstufige Aufgaben, die Rollen, Anweisungen, Schritte, Endziele und Einschränkungen klar separiert.** Jedes Element erfüllt einen bestimmten Zweck: Die Rolle definiert die KI-Perspektive, Anweisungen geben Kontext, Schritte zerlegen das Projekt in nummerierte Phasen, Endziele beschreiben das erfolgreiche Ergebnis und Einschränkungen verhindern Abweichungen.',
          'RISEN ist nicht für einzelne Fragen konzipiert – es ist für mehrstufige Workflows, Prozessautomatisierung und strukturiertes Lehren. Jedes Element verstärkt die anderen, um vorhersehbare, qualitativ hochwertige Ausgaben zu erzeugen.'
        ],
      },
      fiveComponents: {
        title: 'Die fünf Komponenten des RISEN Frameworks',
        content: 'RISEN wird aus fünf klar getrennten Komponenten aufgebaut, von denen jede einen unterschiedlichen Aspekt der Aufgabe behandelt:',
        items: [
          '**Role (Rolle):** Welche Rolle sollte die KI spielen? (z.B. „Expertenlehrer", „Senior-Produktmanager", „Sachverständiger für Datenbanken"). Die Rolle definiert die Perspektive und das Expertise-Niveau.',
          '**Instructions (Anweisungen):** Was sind die wichtigsten Richtlinien und der Kontext? Anweisungen prägen die Qualität und den Fokus der Arbeit.',
          '**Steps (Schritte):** Zerlegen Sie die Aufgabe in nummerierte Phasen. Dies verhindert, dass die KI Phasen springt oder übersieht.',
          '**End Goal (Endziel):** Wie sieht Erfolg aus? Definieren Sie konkret, was die KI liefern soll – nicht nur „ein Plan", sondern „ein 4-Wochen-Plan mit wöchentlichen Übersichten und Ressourcenlisten".',
          '**Narrowing (Einschränkungen):** Welche Regeln sollen die KI-Ausgabe begrenzen? (z.B. „keine Code-Beispiele", „halten Sie die Lektionen unter 30 Minuten", „verwenden Sie nur technische Begriffe"). Diese verhindern, dass die KI Ihre Anforderungen überschreitet.'
        ],
      },
      whyRisenIsUseful: {
        title: 'Warum RISEN so mächtig ist',
        content: [
          '**RISEN zerlegt komplexe Aufgaben so, dass die KI keine Schritte auslässt und Ihre Grenzen respektiert.** Der Grund, warum dies funktioniert, ist einfach: Die KI arbeitet besser, wenn Sie die Struktur liefern, nicht wenn Sie erwarten, dass sie sie selbst erfindet.',
          'Beim Vergleich mit anderen Frameworks: CRAFT ist für Marketing optimiert, CO-STAR für Kommunikation, SPECS für technische Genauigkeit. RISEN ist für Prozesse und mehrstufige Workflows optimiert. Wenn Sie ein Schulungsprogramm, einen mehrstufigen Workflow oder eine iterative Produktentwicklung leiten, ist RISEN Ihr optimales Framework.',
          'Das „Narrowing"-Feld ist besonders mächtig. Es verhindert, dass die KI „hilfreich" wird und Ihr Projekt erweitert. Sie sagen „keine Code-Beispiele", und die KI bleibt daran. Sie sagen „halten Sie jede Lektion unter 30 Minuten", und die KI wird das respektieren.'
        ],
      },
      badVsGoodExample: {
        title: 'Schlechtes vs. Gutes RISEN-Prompt-Beispiel',
        content: 'Vergleichen Sie diese beiden Prompts für denselben Task:',
        items: [
          '**Schlecht (unstrukturiert):** „Erstelle einen Prompt Engineering-Kurs. Er sollte für Anfänger sein und etwa 4 Wochen dauern. Bitte erkläre mehrere Frameworks."',
          '**Gut (RISEN):** „Role: Du bist ein Experten-Prompt-Engineer und erfahrener Lehrer mit 10+ Jahren Schulungserfahrung. Instructions: Erstelle einen prägnanten 4-Wochen-Anfängerkurs. Jede Woche sollte einen Kernbereich abdecken. Steps: 1) Definiere Lernziele für Woche 1-4 2) Erstelle wöchentliche Übersichten mit 3-5 Lernpunkte 3) Liste Ressourcen und praktische Übungen 4) Schreibe eine Abschlussbewertung. End Goal: Ein Student sollte nach 4 Wochen eigenständig hochwertige Prompts schreiben können. Narrowing: Keine Code-Beispiele, keine vorherigen KI-Kenntnisse voraussetzen, jede Lektion soll 25-30 Minuten dauern, verwende einfache Sprache, integriere praktische Übungen nach jeder Lektion."'
        ],
      },
      whenToUse: {
        title: 'Wann Sie RISEN verwenden sollten',
        content: 'RISEN ist ideal für diese Anwendungsfälle:',
        items: [
          '**Schulungskurse und Lehrpläne:** Wenn Sie strukturiertes Schulungsmaterial erstellen müssen, das mehrere Wochen oder Module abdeckt',
          '**Mehrstufige Workflows:** Onboarding-Prozesse, Produktentwicklungspipelines, HR-Prozesse oder Geschäftsabläufe',
          '**Prozessautomatisierung:** Wenn Sie ein komplexes System mit mehreren Phasen standardisieren möchten (z.B. Kundenservice-Eskalation)',
          '**Inhaltsproduktion mit Anleitung:** Wenn Sie sicherstellen möchten, dass generierte Inhalte Ihre exakten Standards und Einschränkungen erfüllen',
          '**Iterative Verbesserung:** Wenn Sie ein bestehendes System überarbeiten möchten, das mehrere Validierungsphasen durchläuft'
        ],
      },
      howPQImplements: {
        title: 'Wie PromptQuorum den RISEN Framework implementiert',
        content: [
          '**PromptQuorum erkennt RISEN-Prompts automatisch und strukturiert Ihre Eingaben.** Anstatt manuell Role, Instructions, Steps, End Goal und Narrowing zu schreiben, können Sie PromptQuorum die Struktur vorgeben. Das Tool hilft Ihnen, jeden Bereich auszufüllen, und stellt sicher, dass der Prompt in RISEN-Format optimal strukturiert ist.',
          'Wenn Sie einen RISEN-Prompt mit PromptQuorum ausführen, werden die Ergebnisse an mehreren KI-Modellen (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro) parallel getestet. Sie sehen sofort, wie verschiedene Modelle auf dieselbe RISEN-Struktur reagieren. Dies ist unbezahlbar, wenn Sie einen Workflow auf Robustheit prüfen.',
          'Das Consensus Scoring in PromptQuorum zeigt Ihnen, wo die Modelle bei den mehrstufigen Ergebnissen übereinstimmen. Dies ist ein starkes Signal, dass Ihr Workflow zuverlässig funktioniert – oder hilfreiche Warnsignale, wo Mehrdeutigkeit entstehen könnte.'
        ],
      },
      usingRisenWithOthers: {
        title: 'RISEN mit anderen Frameworks kombinieren',
        content: [
          '**RISEN ist ein Containerframework – es kann andere Frameworks in seinen Steps integrieren.** Beispiel: Wenn einer Ihrer RISEN-Schritte eine Marketing-Ausgabe erfordert, können Sie CRAFT als Unter-Framework in diesem Schritt verwenden.',
          'Praktisches Beispiel: Sie verwenden RISEN, um einen Produktentwicklungs-Workflow zu strukturieren. Schritt 3 könnte sein: \"Erstelle Marketingkopie für das Feature. Verwende den CRAFT Framework (Context, Role, Action, Format, Target)." Der RISEN-Rahmen dirigiert den gesamten Workflow, während CRAFT den spezifischen Marketingschritt optimiert.',
          'Sie könnten auch RISEN + SPECS kombinieren, wenn ein Schritt komplexe technische Spezifikationen erfordert. Die Schlüssel ist: RISEN ist der Top-Level-Prozess-Orchestrator; andere Frameworks sind spezialisierte Tools für einzelne Schritte.'
        ],
      },
      howToStart: {
        title: 'Wie Sie mit RISEN beginnen',
        content: 'Folgen Sie diesen fünf Schritten, um Ihren ersten RISEN-Prompt zu schreiben:',
        numberedItems: [
          '**Definieren Sie die Rolle:** Welchen Experten oder Rolle soll die KI annehmen? Seien Sie spezifisch: „Erfahrener Produktmanager mit 8+ Jahren SaaS-Erfahrung", nicht nur „Expert".',
          '**Schreiben Sie allgemeine Anweisungen:** Geben Sie den Kontext und die Leitlinien. Was ist das Problem? Was ist die Einschränkung? Was ist der Ton?',
          '**Zerlegen Sie in nummerierte Schritte:** Teilen Sie die Aufgabe in 3-6 klar definierte Phasen auf. Jeder Schritt sollte eine unterschiedliche Phase darstellen (z.B. „Recherche", „Planung", „Schreiben", „Überprüfung").',
          '**Definieren Sie das Endziel präzise:** Nicht nur „einen Plan erstellen", sondern „einen 4-Wochen-Plan mit täglichen Aufgaben, Meilensteinen und Ressourcenlisten für jede Woche".',
          '**Setzen Sie Einschränkungen:** Listen Sie die Grenzen auf, die die KI respektieren soll (Länge, Format, Themen, Vokabular, Was nicht enthalten sein darf). Dies ist entscheidend – es verhindert Überraschungen in der Ausgabe.'
        ],
      },
    },
  },

  fr: {
    theme: 'Frameworks',
    title: 'Framework RISEN : Structurer les Processus Multi-Étapes (2026)',
    intro: 'Le framework RISEN est spécialisé dans les tâches complexes et multi-étapes. Contrairement aux prompts simples qui répondent à des questions individuelles, RISEN décompose les workflows en rôles clairement définis, instructions, étapes, objectifs finaux et contraintes. Cette approche structurée est idéale pour l\'automatisation des processus, les cours de formation, le développement de produits et toute tâche nécessitant plusieurs phases distinctes. RISEN empêche l\'IA de s\'égarer et garantit que le résultat respecte vos exigences précises.',
    publishDate: '2026-03-24',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Framework RISEN',
    sections: {
      whatIsRisen: {
        title: 'Qu\'est-ce que le Framework RISEN ?',
        content: [
          '**Le framework RISEN est un modèle structuré pour les tâches multi-étapes qui sépare clairement les rôles, instructions, étapes, objectifs finaux et contraintes.** Chaque élément remplit un objectif spécifique : le rôle définit la perspective de l\'IA, les instructions donnent le contexte, les étapes décomposent le projet en phases numérotées, les objectifs finaux décrivent le résultat réussi, et les contraintes empêchent les écarts.',
          'RISEN n\'est pas conçu pour les questions individuelles – il est conçu pour les workflows multi-étapes, l\'automatisation des processus et l\'enseignement structuré. Chaque élément renforce les autres pour produire des résultats prévisibles et de haute qualité.'
        ],
      },
      fiveComponents: {
        title: 'Les Cinq Composants du Framework RISEN',
        content: 'RISEN est construit à partir de cinq composants clairement séparés, chacun abordant un aspect différent de la tâche :',
        items: [
          '**Role (Rôle) :** Quel rôle l\'IA devrait-elle jouer ? (par exemple, « enseignant expert », « directeur senior de produit », « spécialiste en bases de données »). Le rôle définit la perspective et le niveau d\'expertise.',
          '**Instructions (Instructions) :** Quelles sont les lignes directrices clés et le contexte ? Les instructions façonnent la qualité et la focalisation du travail.',
          '**Steps (Étapes) :** Décomposez la tâche en phases numérotées. Cela empêche l\'IA de sauter ou d\'oublier des phases.',
          '**End Goal (Objectif Final) :** À quoi ressemble la réussite ? Définissez concrètement ce que l\'IA doit livrer – pas seulement « un plan », mais « un plan de 4 semaines avec des aperçus hebdomadaires et des listes de ressources ».',
          '**Narrowing (Contraintes) :** Quelles règles doivent limiter la production de l\'IA ? (par exemple, « pas d\'exemples de code », « gardez les leçons sous 30 minutes », « utilisez uniquement les termes techniques »). Celles-ci empêchent l\'IA de dépasser vos exigences.'
        ],
      },
      whyRisenIsUseful: {
        title: 'Pourquoi RISEN est si Puissant',
        content: [
          '**RISEN décompose les tâches complexes de sorte que l\'IA ne saute aucune étape et respecte vos limites.** La raison pour laquelle cela fonctionne est simple : l\'IA fonctionne mieux lorsque vous fournissez la structure plutôt que de vous attendre à ce qu\'elle l\'invente elle-même.',
          'En comparaison avec d\'autres frameworks : CRAFT est optimisé pour le marketing, CO-STAR pour la communication, SPECS pour la précision technique. RISEN est optimisé pour les processus et les workflows multi-étapes. Si vous dirigez un programme de formation, un workflow multi-étapes ou un développement itératif de produits, RISEN est votre framework optimal.',
          'Le champ « Narrowing » est particulièrement puissant. Il empêche l\'IA de devenir « utile » et d\'agrandir votre projet. Vous dites « pas d\'exemples de code », et l\'IA le respectera. Vous dites « gardez chaque leçon sous 30 minutes », et l\'IA honorera cela.'
        ],
      },
      badVsGoodExample: {
        title: 'Mauvais vs Bon Exemple de Prompt RISEN',
        content: 'Comparez ces deux prompts pour la même tâche :',
        items: [
          '**Mauvais (non structuré) :** « Crée un cours d\'ingénierie de prompts. Il devrait être pour les débutants et durer environ 4 semaines. S\'il te plaît, explique plusieurs frameworks. »',
          '**Bon (RISEN) :** « Role: Tu es un ingénieur de prompts expert et un enseignant expérimenté avec 10+ ans d\'expérience pédagogique. Instructions: Crée un cours d\'introduction succinct de 4 semaines. Chaque semaine devrait couvrir un domaine central. Steps: 1) Définis les objectifs d\'apprentissage pour les semaines 1-4 2) Crée les aperçus hebdomadaires avec 3-5 points clés d\'apprentissage 3) Liste les ressources et les exercices pratiques 4) Écris une évaluation finale. End Goal: Un étudiant devrait pouvoir écrire indépendamment des prompts de haute qualité après 4 semaines. Narrowing: Pas d\'exemples de code, ne présume aucune connaissance préalable en IA, chaque leçon doit durer 25-30 minutes, utilise un langage simple, intègre les exercices pratiques après chaque leçon. »'
        ],
      },
      whenToUse: {
        title: 'Quand Utiliser RISEN',
        content: 'RISEN est idéal pour ces cas d\'utilisation :',
        items: [
          '**Cours de formation et programmes d\'études :** Quand vous avez besoin de créer du matériel pédagogique structuré couvrant plusieurs semaines ou modules',
          '**Workflows multi-étapes :** Processus d\'intégration, pipelines de développement de produits, processus RH ou flux de travail commerciaux',
          '**Automatisation des processus :** Quand vous voulez standardiser un système complexe avec plusieurs phases (par exemple, escalade de service client)',
          '**Production de contenu avec orientation :** Quand vous voulez vous assurer que le contenu généré respecte vos normes et contraintes exactes',
          '**Amélioration itérative :** Quand vous voulez réviser un système existant qui passe par plusieurs phases de validation'
        ],
      },
      howPQImplements: {
        title: 'Comment PromptQuorum Implémente le Framework RISEN',
        content: [
          '**PromptQuorum reconnaît automatiquement les prompts RISEN et structure vos entrées.** Au lieu de rédiger manuellement Role, Instructions, Steps, End Goal et Narrowing, vous pouvez donner à PromptQuorum la structure. L\'outil vous aide à remplir chaque section et garantit que le prompt est optimalement structuré au format RISEN.',
          'Lorsque vous exécutez un prompt RISEN avec PromptQuorum, les résultats sont testés en parallèle sur plusieurs modèles IA (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro). Vous voyez immédiatement comment différents modèles répondent à la même structure RISEN. Ceci est inestimable lorsque vous testez la robustesse d\'un workflow.',
          'Le Consensus Scoring dans PromptQuorum vous montre où les modèles s\'accordent sur les résultats multi-étapes. C\'est un signal puissant que votre workflow fonctionne de manière fiable – ou des signaux d\'alerte utiles sur les endroits où l\'ambiguïté pourrait survenir.'
        ],
      },
      usingRisenWithOthers: {
        title: 'Combiner RISEN avec d\'autres Frameworks',
        content: [
          '**RISEN est un framework conteneur – il peut intégrer d\'autres frameworks dans ses étapes.** Exemple : Si l\'une de vos étapes RISEN nécessite une sortie marketing, vous pouvez utiliser CRAFT comme sous-framework à cette étape.',
          'Exemple pratique : Vous utilisez RISEN pour structurer un workflow de développement de produits. L\'étape 3 pourrait être : « Crée la copie marketing pour la fonctionnalité. Utilise le framework CRAFT (Context, Role, Action, Format, Target). » Le cadre RISEN dirige le workflow entier, tandis que CRAFT optimise l\'étape marketing spécifique.',
          'Vous pourriez également combiner RISEN + SPECS si une étape nécessite des spécifications techniques complexes. La clé est : RISEN est l\'orchestrateur de processus de haut niveau ; les autres frameworks sont des outils spécialisés pour des étapes individuelles.'
        ],
      },
      howToStart: {
        title: 'Comment Commencer avec RISEN',
        content: 'Suivez ces cinq étapes pour rédiger votre premier prompt RISEN :',
        numberedItems: [
          '**Définissez le rôle :** Quel expert ou quel rôle l\'IA devrait-elle assumer ? Soyez précis : « Directeur de produit expérimenté avec 8+ ans d\'expérience SaaS », pas seulement « Expert ».',
          '**Écrivez les instructions générales :** Donnez le contexte et les directives. Quel est le problème ? Quelle est la contrainte ? Quel est le ton ?',
          '**Décomposez en étapes numérotées :** Divisez la tâche en 3-6 phases clairement définies. Chaque étape devrait représenter une phase différente (par exemple, « Recherche », « Planification », « Rédaction », « Révision »).',
          '**Définissez précisément l\'objectif final :** Pas seulement « créer un plan », mais « créer un plan de 4 semaines avec des tâches quotidiennes, des jalons et des listes de ressources pour chaque semaine ».',
          '**Définissez les contraintes :** Listez les limites que l\'IA doit respecter (longueur, format, sujets, vocabulaire, ce qui ne doit pas être inclus). C\'est crucial – cela prévient les surprises dans la production.'
        ],
      },
    },
  },

  ja: {
    theme: 'Frameworks',
    title: 'RISENフレームワーク：複数ステップのプロセスを構造化する（2026）',
    intro: 'RISENフレームワークは、複雑で複数ステップのタスクに特化しています。単一の質問に答えるシンプルなプロンプトとは異なり、RISENはワークフローを明確に定義されたロール、指示、ステップ、エンドゴール、制約に分解します。この構造化されたアプローチは、プロセス自動化、トレーニングコース、製品開発、および複数の異なるフェーズが必要なあらゆるタスクに最適です。RISENはAIが脱線するのを防ぎ、出力があなたの正確な要件を満たすことを保証します。',
    publishDate: '2026-03-24',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RISENフレームワーク',
    sections: {
      whatIsRisen: {
        title: 'RISENフレームワークとは何か',
        content: [
          '**RISENフレームワークは、ロール、指示、ステップ、エンドゴール、制約を明確に分離する複数ステップタスクの構造化テンプレートです。** 各要素は特定の目的を果たします：ロールはAIの視点を定義し、指示は文脈を提供し、ステップはプロジェクトをナンバリングされたフェーズに分解し、エンドゴールは成功した結果を説明し、制約は逸脱を防ぎます。',
          'RISENは単一の質問のために設計されたのではありません。それは複数ステップのワークフロー、プロセス自動化、および構造化された教育のためのものです。各要素が他の要素を強化して、予測可能で高品質の出力を生成します。'
        ],
      },
      fiveComponents: {
        title: 'RISENフレームワークの5つの構成要素',
        content: 'RISENは5つの明確に分離された構成要素から構築されており、各構成要素はタスクの異なる側面に対処します：',
        items: [
          '**Role（ロール）：** AIはどのようなロールを担当すべきか？（例：「エキスパート教師」、「シニアプロダクトマネージャー」、「データベース専門家」）。ロールは視点と専門知識レベルを定義します。',
          '**Instructions（指示）：** 重要なガイドラインと文脈は何か？指示は仕事の品質と焦点を形成します。',
          '**Steps（ステップ）：** タスクをナンバリングされたフェーズに分解します。これにより、AIがフェーズをスキップしたり見落としたりするのを防ぎます。',
          '**End Goal（エンドゴール）：** 成功とは何か？AIが何を提供すべきかを具体的に定義します。単なる「プラン」ではなく、「週単位の概要とリソースリストを含む4週間のプラン」。',
          '**Narrowing（制約）：** AIの出力を制限すべきルールは何か？（例：「コード例なし」、「各レッスンを30分未満に保つ」、「技術用語のみを使用」）。これらはAIがあなたの要件を超えないようにします。'
        ],
      },
      whyRisenIsUseful: {
        title: 'RISENがなぜそれほど強力か',
        content: [
          '**RISENは複雑なタスクを分解するため、AIはステップを見落とさず、あなたの境界を尊重します。** これが機能する理由は単純です：AIはあなたが構造を提供したときにより良く機能し、それ自体を発明することを期待しているわけではありません。',
          '他のフレームワークとの比較：CRAFTはマーケティング用に最適化され、CO-STARはコミュニケーション用に、SPECSは技術的精度用に最適化されます。RISENはプロセスと複数ステップのワークフロー用に最適化されています。トレーニングプログラム、複数ステップのワークフロー、または反復的な製品開発を指揮している場合、RISENはあなたの最適なフレームワークです。',
          '「Narrowing」フィールドは特に強力です。それはAIが「役立つ」ようになり、あなたのプロジェクトを拡張するのを防ぎます。あなたは「コード例なし」と言い、AIはそれを尊重します。あなたは「各レッスンを30分未満に保つ」と言い、AIはそれを尊重します。'
        ],
      },
      badVsGoodExample: {
        title: '悪いRISENプロンプトの例と良い例',
        content: '同じタスクのこれら2つのプロンプトを比較してください：',
        items: [
          '**悪い（非構造化）：** 「プロンプトエンジニアリングコースを作成してください。初心者向けで、約4週間続く必要があります。複数のフレームワークを説明してください。」',
          '**良い（RISEN）：** 「Role: あなたは、10年以上の教育経験を持つエキスパートプロンプトエンジニアと経験豊かな教師です。Instructions: 簡潔な4週間の初心者向けコースを作成します。各週は中核領域をカバーすべきです。Steps: 1)週1-4の学習目標を定義する 2)3-5個の主要学習ポイントを含む週単位の概要を作成する 3)リソースと実践演習をリストアップする 4)最終評価を作成する。End Goal: 学生は4週間後に独立して高品質のプロンプトを作成できるべきです。Narrowing: コード例なし、事前のAI知識を想定しない、各レッスンは25-30分であるべき、シンプルな言語を使用、各レッスン後に実践演習を統合。」'
        ],
      },
      whenToUse: {
        title: 'RISENをいつ使用するか',
        content: 'RISENは以下の使用例に最適です：',
        items: [
          '**トレーニングコースと教育課程：** 複数週またはモジュールにわたる構造化されたトレーニング教材を作成する必要がある場合',
          '**複数ステップのワークフロー：** オンボーディングプロセス、製品開発パイプライン、HR手順、またはビジネスワークフロー',
          '**プロセス自動化：** 複数のフェーズを持つ複雑なシステムを標準化したい場合（例：カスタマーサービスエスカレーション）',
          '**ガイド付きコンテンツ作成：** 生成されたコンテンツがあなたの正確な標準と制約を満たすことを確認したい場合',
          '**反復的改善：** 複数の検証フェーズを通過する既存のシステムを改訂したい場合'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorumがRISENフレームワークをどのように実装するか',
        content: [
          '**PromptQuorumはRISENプロンプトを自動的に認識し、入力を構造化します。** Role、Instructions、Steps、End Goal、Narrowingを手動で書く代わりに、PromptQuorumに構造を提供できます。このツールは各セクションに入力するのを支援し、プロンプトがRISEN形式で最適に構造化されていることを確認します。',
          'PromptQuorumでRISENプロンプトを実行すると、複数のAIモデル（GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro）で結果が並列にテストされます。異なるモデルが同じRISEN構造にどのように応答するかをすぐに見ることができます。これはワークフローの堅牢性をテストするときに非常に重要です。',
          'PromptQuorumのConsensus Scoringは、複数ステップの結果でモデルが一致する場所を表示します。これはあなたのワークフローが確実に機能していることの強いシグナルです—またはあいまいさが生じる可能性がある場所への有用な警告信号。'
        ],
      },
      usingRisenWithOthers: {
        title: 'RISENを他のフレームワークと組み合わせる',
        content: [
          '**RISENはコンテナフレームワークです。ステップ内に他のフレームワークを統合できます。** 例：RISENステップの1つがマーケティング出力を必要とする場合、そのステップでCRAFTをサブフレームワークとして使用できます。',
          '実践的な例：製品開発ワークフローを構造化するためにRISENを使用しています。ステップ3は「機能のマーケティングコピーを作成します。CRAFTフレームワーク（Context、Role、Action、Format、Target）を使用します。」RISENフレームワークはワークフロー全体を指揮し、CRAFTは特定のマーケティングステップを最適化します。',
          'ステップが複雑な技術仕様を必要とする場合、RISEN + SPECSを組み合わせることもできます。重要な点は：RISENはトップレベルのプロセスオーケストレーター；他のフレームワークは個別のステップの専門的なツール。'
        ],
      },
      howToStart: {
        title: 'RISENを始める方法',
        content: '最初のRISENプロンプトを作成するために、これらの5つのステップに従います：',
        numberedItems: [
          '**ロールを定義します：** AIはどんなエキスパートやロールを引き受けるべきか？具体的にしてください：「8年以上のSaaS経験を持つ経験豊かなプロダクトマネージャー」、単に「エキスパート」だけではなく。',
          '**一般的な指示を書きます：** 文脈とガイドラインを提供します。問題は何か？制約は何か？トーンは何か？',
          '**ナンバリングされたステップに分解します：** タスクを3-6の明確に定義されたフェーズに分割します。各ステップは異なるフェーズを表す必要があります（例：「リサーチ」、「計画」、「作成」、「レビュー」）。',
          '**エンドゴールを正確に定義します：** 単なる「プランを作成」ではなく、「各週の日次タスク、マイルストーン、リソースリストを含む4週間のプランを作成」。',
          '**制約を設定します：** AIが尊重すべき制限をリストしてください（長さ、形式、トピック、語彙、含めるべきでないもの）。これは重要です—出力での驚きを防ぎます。'
        ],
      },
    },
  },

  zh: {
    theme: 'Frameworks',
    title: 'RISEN框架：构建多步骤流程（2026）',
    intro: 'RISEN框架专门用于复杂、多步骤的任务。与回答单个问题的简单提示不同，RISEN将工作流分解为明确定义的角色、指令、步骤、最终目标和约束。这种结构化方法对于流程自动化、培训课程、产品开发以及需要多个不同阶段的任何任务都是理想的。RISEN防止AI偏离轨道，并确保输出满足您的确切要求。',
    publishDate: '2026-03-24',
    readTime: '7分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RISEN框架',
    sections: {
      whatIsRisen: {
        title: '什么是RISEN框架',
        content: [
          '**RISEN框架是一个结构化模板，用于多步骤任务，它清楚地分离了角色、指令、步骤、最终目标和约束。** 每个元素都有特定的用途：角色定义AI的视角，指令提供背景，步骤将项目分解为编号阶段，最终目标描述成功的结果，约束防止偏离。',
          'RISEN不是为单个问题设计的——它是为多步骤工作流、流程自动化和结构化教学设计的。每个元素相互强化以产生可预测的高质量输出。'
        ],
      },
      fiveComponents: {
        title: 'RISEN框架的五个组件',
        content: 'RISEN由五个明确分离的组件组成，每个组件都处理任务的不同方面：',
        items: [
          '**Role（角色）：** AI应该扮演什么角色？（例如，"专家教师"、"高级产品经理"、"数据库专家"）。角色定义视角和专业知识水平。',
          '**Instructions（指令）：** 关键的指导方针和背景是什么？指令塑造工作的质量和焦点。',
          '**Steps（步骤）：** 将任务分解为编号的阶段。这可以防止AI跳过或遗漏阶段。',
          '**End Goal（最终目标）：** 成功看起来像什么？具体定义AI应该提供什么——不仅仅是"一个计划"，而是"一个包含每周概述和资源列表的4周计划"。',
          '**Narrowing（约束）：** 应该限制AI输出的规则是什么？（例如，"没有代码示例"、"将每节课保持在30分钟以内"、"仅使用技术术语"）。这些防止AI超出您的要求。'
        ],
      },
      whyRisenIsUseful: {
        title: '为什么RISEN如此强大',
        content: [
          '**RISEN分解复杂任务的方式使AI不会跳过步骤并尊重您的界限。** 这为什么有效很简单：当您提供结构时，AI效果更好，而不是期望它自己发明结构。',
          '与其他框架的比较：CRAFT针对营销进行了优化，CO-STAR针对沟通进行了优化，SPECS针对技术精度进行了优化。RISEN针对流程和多步骤工作流进行了优化。如果您正在指导培训计划、多步骤工作流或迭代产品开发，RISEN是您的最佳框架。',
          '"Narrowing"字段特别强大。它防止AI变得"有帮助"并扩展您的项目。您说"没有代码示例"，AI会尊重它。您说"将每节课保持在30分钟以内"，AI将遵守。'
        ],
      },
      badVsGoodExample: {
        title: '不好的RISEN提示示例 vs 好的示例',
        content: '比较相同任务的这两个提示：',
        items: [
          '**不好（无结构）：** "创建一个提示工程课程。它应该适合初学者，大约需要4周。请解释多个框架。"',
          '**好的（RISEN）：** "Role: 你是一位拥有10多年教学经验的专家提示工程师和经验丰富的教师。Instructions: 创建一个简洁的4周初学者课程。每一周应该涵盖一个核心领域。Steps: 1)定义第1-4周的学习目标 2)创建每周概述，包括3-5个关键学习要点 3)列出资源和实践练习 4)编写最终评估。End Goal: 4周后，学生应该能够独立地编写高质量的提示。Narrowing: 没有代码示例、不假设事先的AI知识、每节课应该持续25-30分钟、使用简单语言、在每节课后整合实践练习。"'
        ],
      },
      whenToUse: {
        title: '何时使用RISEN',
        content: 'RISEN非常适合这些用例：',
        items: [
          '**培训课程和课程：** 当您需要创建跨越多周或多个模块的结构化培训材料时',
          '**多步骤工作流：** 入职流程、产品开发管道、人力资源流程或业务工作流',
          '**流程自动化：** 当您想标准化具有多个阶段的复杂系统时（例如，客户服务升级）',
          '**指导内容创建：** 当您想确保生成的内容满足您的确切标准和约束时',
          '**迭代改进：** 当您想修订通过多个验证阶段的现有系统时'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum如何实现RISEN框架',
        content: [
          '**PromptQuorum自动识别RISEN提示并构建您的输入。** 而不是手动编写Role、Instructions、Steps、End Goal和Narrowing，您可以给PromptQuorum提供结构。该工具帮助您填写每个部分，并确保提示以RISEN格式最优地结构化。',
          '当您使用PromptQuorum运行RISEN提示时，结果会在多个AI模型（GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro）上并行测试。您可以立即看到不同的模型如何对相同的RISEN结构做出响应。当您测试工作流的鲁棒性时，这是无价的。',
          'PromptQuorum中的共识评分显示模型在多步骤结果中的一致位置。这是您的工作流可靠运作的有力信号——或有用的警告信号，指出可能出现歧义的地方。'
        ],
      },
      usingRisenWithOthers: {
        title: '将RISEN与其他框架相结合',
        content: [
          '**RISEN是一个容器框架——它可以在其步骤中整合其他框架。** 例如：如果您的一个RISEN步骤需要营销输出，您可以在该步骤中使用CRAFT作为子框架。',
          '实际示例：您使用RISEN来构建产品开发工作流。第3步可能是："为功能创建营销文案。使用CRAFT框架（上下文、角色、行动、格式、目标）。"RISEN框架指挥整个工作流，而CRAFT优化特定的营销步骤。',
          '如果一个步骤需要复杂的技术规范，您也可以组合RISEN + SPECS。关键是：RISEN是顶级流程编排器；其他框架是各个步骤的专门工具。'
        ],
      },
      howToStart: {
        title: '如何开始使用RISEN',
        content: '按照这五个步骤编写您的第一个RISEN提示：',
        numberedItems: [
          '**定义角色：** AI应该扮演什么样的专家或角色？要具体：例如"拥有8年以上SaaS经验的经验丰富的产品经理"，而不仅仅是"专家"。',
          '**编写一般指令：** 提供背景和指导方针。问题是什么？约束是什么？语调是什么？',
          '**分解为编号步骤：** 将任务分为3-6个明确定义的阶段。每个步骤应代表不同的阶段（例如"研究"、"计划"、"编写"、"审查"）。',
          '**精确定义最终目标：** 不仅仅是"创建计划"，而是"创建一个4周计划，包含每日任务、里程碑和每周的资源列表"。',
          '**设置约束：** 列出AI应该尊重的限制（长度、格式、主题、词汇、不应包含的内容）。这很关键——它防止输出中的意外情况。'
        ],
      },
    },
  },
}
