// TRACE Framework - Complete multilingual translations (DE, FR, JA, ZH)
export const traceFrameworkTranslations = {
  de: {
    theme: 'Frameworks',
    title: 'TRACE Framework: Beispielbasiertes Prompting für bessere AI-Ergebnisse (2026)',
    intro: 'Der TRACE Framework ist spezialisiert auf beispielgestütztes Lernen und Few-Shot Prompting. Im Gegensatz zu Frameworks, die verbale Anweisungen erfordern, zeigt TRACE die KI die genaue Ausgabe, die Sie erwarten. Dies ist psychologisch mächtiger: "Zeigen, nicht sagen" ist eine bewährte Lernstrategie. TRACE zerlegt Ihren Prompt in Task, Request, Action, Context und ein perfektes Beispiel. Dieser Ansatz ist revolutionär, wenn die KI aus Muster lernt – und deutlich weniger anfällig für Missverständnisse als ausschließlich verbale Anleitung.',
    publishDate: '2026-03-24',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'TRACE Framework',
    sections: {
      whatIsTrace: {
        title: 'Was ist der TRACE Framework?',
        content: [
          '**Der TRACE Framework ist eine strukturierte Vorlage, die ein Beispiel der perfekten Ausgabe als Kernstrategie verwendet, um die KI zu unterrichten, was Sie wollen.** TRACE steht für Task, Request, Action, Context und Example. Während die meisten Frameworks verbale Anweisungen verwenden, nutzt TRACE das Prinzip "Das Zeigen ist mächtiger als das Erklären".',
          'Psychologisch betrachtet: Menschen lernen durch Mustererkennung. Wenn Sie einem Kind zeigen, wie man fährt, indem Sie es auf ein Fahrrad setzen und 10 Minuten üben lassen, lernt es schneller als durch eine 30-minütige verbale Erklärung. TRACE funktioniert mit KI gleich. Ein gutes Beispiel erspart der KI Interpretationsbedarf.'
        ],
      },
      fiveComponents: {
        title: 'Die fünf Komponenten des TRACE Frameworks',
        content: 'TRACE wird aus fünf Elementen aufgebaut, wobei das "Example"-Element das Differenzierungsmerkmal ist:',
        items: [
          '**Task (Aufgabe):** Was ist die übergeordnete Aufgabe? Dies ist der Kontext für die gesamte Anfrage.',
          '**Request (Anfrage):** Was genau möchten Sie, dass die KI tut? Dies ist spezifischer als die Task.',
          '**Action (Aktion):** Welche Aktion soll die KI konkret durchführen? Wie soll sie vorgehen?',
          '**Context (Kontext):** Welche zusätzlichen Informationen benötigt die KI, um die Aktion richtig auszuführen?',
          '**Example (Beispiel):** Zeigen Sie ein konkretes Beispiel des exakten Output-Formats, das Sie erhalten möchten. Dies ist das Herzstück von TRACE – das Beispiel ist wichtiger als alle vorherigen Felder zusammen.'
        ],
      },
      whyTraceIsUseful: {
        title: 'Warum TRACE so mächtig ist',
        content: [
          '**Ein Beispiel löst die Mehrdeutigkeit auf, die Wörter schaffen.** Das Wort "Zusammenfassung" bedeutet verschiedenen Menschen unterschiedliche Dinge. Eine Person stellt sich 2 Sätze vor, eine andere stellt sich 10 Punkte vor. Ein Beispiel eliminiert diese Unklarheit vollständig.',
          'Dies ist besonders wertvoll bei Stilanforderungen. Wenn Sie "professionell" schreiben möchten, können 100 Menschen 100 verschiedene Definitionen haben. Aber wenn Sie ein Beispiel geben, weiß die KI genau, was Sie meinen – Wortlänge, Satzlänge, Ton, Formalität, alles.',
          'TRACE funktioniert auch über Sprachgrenzen hinweg besser. Eine KI, die mehrsprachig ist, kann Ihr Beispiel in der Zielsprache lesen und das Muster perfekt replizieren. Das ist der Grund, warum Few-Shot Prompting in akademischen Forschungsarbeiten zu besseren Ergebnissen führt als Zero-Shot.'
        ],
      },
      badVsGoodExample: {
        title: 'Schlechtes vs. Gutes TRACE-Prompt-Beispiel',
        content: 'Vergleichen Sie diese beiden Prompts:',
        items: [
          '**Schlecht (ohne Beispiel):** „Schreibe einen Produktbeschreibung. Sie sollte überzeugend sein, das Produkt hervorheben und kurz sein. Verwende einen professionellen Ton."',
          '**Gut (TRACE mit Beispiel):** „Task: Schreibe Produktbeschreibungen für einen Tech-Laden. Request: Erstelle eine 2-3 Satz-Beschreibung für ein neues Produkt. Action: Zerlege Vorteile, Spezifikationen und Zielgruppe in prägnante Sätze. Context: Verwende technische, aber zugängliche Sprache. Example: [Produkt: USB-C Kabelorganizer] \"Der USB-C Kabelorganizer reduziert Chaos auf Ihrem Schreibtisch. Mit Platz für bis zu 6 Kabel und rutschfestem Design bleibt alles an Ort und Stelle. Ideal für alle, die mit mehreren Geräten arbeiten.\""'
        ],
      },
      whenToUse: {
        title: 'Wann Sie TRACE verwenden sollten',
        content: 'TRACE ist ideal für diese Anwendungsfälle:',
        items: [
          '**Stilanforderungen:** Wenn Sie Text in einem spezifischen Stil, Ton oder Format benötigen (E-Mails, Blog-Posts, Produktbeschreibungen)',
          '**Konsistente Ausgabe:** Wenn Sie mehrmals ähnliche Inhalte generieren und Konsistenz zwischen den Ausgaben brauchen',
          '**Strukturierte Ausgabe:** Wenn die Ausgabe ein spezifisches Format haben muss (JSON, Markdown, Tabellen, nummerierte Listen)',
          '**Qualitativ hochwertige Generierung:** Wenn Sie lieber Qualität über Schnelligkeit priorisieren',
          '**Mehrsprachige Anfragen:** Wenn Sie möchten, dass die KI ein Muster in einer anderen Sprache repliziert',
          '**Komplexe Anforderungen:** Wenn die Anfrage schwer nur verbal zu beschreiben ist'
        ],
      },
      howPQImplements: {
        title: 'Wie PromptQuorum den TRACE Framework implementiert',
        content: [
          '**PromptQuorum erkennt TRACE-Prompts und macht die Beispiel-Eingabe einfach.** Anstatt Ihr Beispiel manuell zu formatieren, können Sie einfach den gewünschten Output zeigen, und PromptQuorum strukturiert es in das TRACE-Format. Das Tool validiert, dass Ihr Beispiel das richtige Format hat.',
          'PromptQuorum bietet auch die Möglichkeit, mehrere Beispiele zu nutzen. Während TRACE klassisch mit einem Beispiel funktioniert, können Sie mehrere Beispiele hinzufügen, um das Muster noch klarer zu machen. PromptQuorum nennt dies "Multi-Shot Prompting" – und es funktioniert noch besser als Single-Shot.',
          'Wenn Sie ein TRACE-Prompt bei PromptQuorum ausführen, erhalten Sie sofort Zugang zum Consensus Scoring. Sie sehen, ob alle Modelle das gleiche Musterverständnis haben – oder ob einige Modelle das Muster unterschiedlich interpretieren. Das ist ein wertvolles Signal für die Robustheit Ihrer Beispiele.'
        ],
      },
      usingTraceWithOthers: {
        title: 'TRACE mit anderen Frameworks kombinieren',
        content: [
          '**TRACE kann mit CRAFT, CO-STAR und SPECS kombiniert werden, wenn Sie Beispiele zu diesen Frameworks hinzufügen.** Beispiel: Sie verwenden CO-STAR, aber für bessere Ergebnisse fügen Sie ein Beispiel ein.',
          'Praktisches Szenario: Sie schreiben Marketing-Copy mit CO-STAR. Anstatt nur die Felder Context, Objective, Style, Tone, Audience und Response auszufüllen, können Sie auch ein Beispiel von guter Marketing-Copy geben, die Sie bereits gemocht haben. Dies kombiniert die Struktur von CO-STAR mit der Kraft des Beispiel-Lernens von TRACE.',
          'Die allgemeine Regel: Jedes Framework kann von einem Beispiel profitieren. TRACE macht das Beispiel zur Kernstrategie, während andere Frameworks es als Optional behandeln. Aber wenn Sie Qualität brauchen, fügen Sie immer ein Beispiel hinzu – egal welchen Framework Sie verwenden.'
        ],
      },
      howToStart: {
        title: 'Wie Sie mit TRACE beginnen',
        content: 'Folgen Sie diesen fünf Schritten, um einen TRACE-Prompt zu erstellen:',
        numberedItems: [
          '**Definieren Sie die Task:** Was ist das übergeordnete Problem? Beispiel: "Produktbeschreibungen für einen E-Commerce-Shop schreiben". Seien Sie klar, aber nicht zu detailliert – das kommt später.',
          '**Präzisieren Sie die Request:** Was genau soll das Ergebnis sein? Nicht nur "eine Beschreibung", sondern "eine 2-3 Satz-Beschreibung, die Vorteile hervorbringt und zur Zielgruppe spricht".',
          '**Beschreiben Sie die Action:** Wie sollte die KI vorgehen? "Zerlege das Produkt in 3 Vorteile, wähle den überzeugendsten aus, schreibe ihn in einfacher Sprache".',
          '**Geben Sie Context:** Welche zusätzlichen Infos braucht die KI? Zielgruppe, Produkttyp, Ton, Länge, technisches Niveau.',
          '**Zeigen Sie ein Beispiel:** Schreiben Sie oder geben Sie ein konkretes Beispiel des exakten Output-Formats, das Sie erwarten. Dies ist der kritische Schritt – das Beispiel sollte die perfekte Antwort darstellen.'
        ],
      },
    },
  },

  fr: {
    theme: 'Frameworks',
    title: 'Framework TRACE : Apprentissage Par l\'Exemple pour de Meilleurs Résultats IA (2026)',
    intro: 'Le framework TRACE est spécialisé dans l\'apprentissage par l\'exemple et le Few-Shot Prompting. Contrairement aux frameworks qui reposent sur des instructions verbales, TRACE montre à l\'IA la production exacte que vous attendez. C\'est psychologiquement puissant : "montrer, ne pas dire" est une stratégie d\'apprentissage éprouvée. TRACE décompose votre prompt en Task, Request, Action, Context et un exemple parfait. Cette approche est révolutionnaire quand l\'IA apprend à partir de modèles – et bien moins susceptible aux malentendus que les simples instructions verbales.',
    publishDate: '2026-03-24',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Framework TRACE',
    sections: {
      whatIsTrace: {
        title: 'Qu\'est-ce que le Framework TRACE ?',
        content: [
          '**Le framework TRACE est un modèle structuré qui utilise un exemple de la sortie parfaite comme stratégie centrale pour enseigner à l\'IA ce que vous voulez.** TRACE signifie Task, Request, Action, Context et Example. Tandis que la plupart des frameworks utilisent des instructions verbales, TRACE exploite le principe "Montrer est plus puissant qu\'expliquer".',
          'Psychologiquement parlant : les gens apprennent par reconnaissance de motifs. Si vous montrez à un enfant comment faire du vélo en le mettant sur un vélo et en pratiquant pendant 10 minutes, il apprendra plus vite qu\'avec une explication verbale de 30 minutes. TRACE fonctionne de la même manière avec l\'IA. Un bon exemple épargne à l\'IA le besoin d\'interprétation.'
        ],
      },
      fiveComponents: {
        title: 'Les Cinq Composants du Framework TRACE',
        content: 'TRACE est construit à partir de cinq éléments, le « Example » étant la caractéristique différenciante :',
        items: [
          '**Task (Tâche) :** Quel est le problème général ? C\'est le contexte pour toute la demande.',
          '**Request (Demande) :** Que voulez-vous exactement que l\'IA fasse ? C\'est plus spécifique que la Task.',
          '**Action (Action) :** Quelle action précise l\'IA devrait-elle prendre ? Comment devrait-elle procéder ?',
          '**Context (Contexte) :** Quelles informations supplémentaires l\'IA doit-elle pour exécuter l\'action correctement ?',
          '**Example (Exemple) :** Montrez un exemple concret du format de sortie exact que vous souhaitez obtenir. C\'est le cœur du TRACE – l\'exemple est plus important que tous les champs précédents réunis.'
        ],
      },
      whyTraceIsUseful: {
        title: 'Pourquoi TRACE est si Puissant',
        content: [
          '**Un exemple résout l\'ambiguïté que les mots créent.** Le mot "résumé" signifie différentes choses pour différentes personnes. Une personne imagine 2 phrases, une autre imagine 10 puces. Un exemple élimine entièrement cette ambiguïté.',
          'C\'est particulièrement précieux pour les exigences de style. Si vous voulez écrire "professionnel", 100 personnes pourraient avoir 100 définitions différentes. Mais si vous donnez un exemple, l\'IA sait exactement ce que vous voulez dire – longueur des mots, longueur des phrases, ton, formalité, tout.',
          'TRACE fonctionne également mieux au-delà des frontières linguistiques. Une IA multilingue peut lire votre exemple dans la langue cible et répliquer le modèle parfaitement. C\'est pourquoi le Few-Shot Prompting conduit à de meilleurs résultats que le Zero-Shot dans la recherche académique.'
        ],
      },
      badVsGoodExample: {
        title: 'Mauvais vs Bon Exemple de Prompt TRACE',
        content: 'Comparez ces deux prompts :',
        items: [
          '**Mauvais (sans exemple) :** « Écris une description de produit. Elle devrait être convaincante, mettre en avant le produit et être courte. Utilise un ton professionnel. »',
          '**Bon (TRACE avec exemple) :** « Task: Écris des descriptions de produits pour un magasin de technologie. Request: Crée une description de 2-3 phrases pour un nouveau produit. Action: Décompose les avantages, les spécifications et le public cible en phrases concises. Context: Utilise un langage technique mais accessible. Example: [Produit: Organisateur de Câble USB-C] \"L\'organisateur de câble USB-C réduit le désordre sur votre bureau. Avec de la place pour jusqu\'à 6 câbles et un design antidérapant, tout reste en place. Idéal pour tous ceux qui travaillent avec plusieurs appareils.\" »'
        ],
      },
      whenToUse: {
        title: 'Quand Utiliser TRACE',
        content: 'TRACE est idéal pour ces cas d\'utilisation :',
        items: [
          '**Exigences de style :** Quand vous avez besoin d\'un texte avec un style, ton ou format spécifique (e-mails, articles de blog, descriptions de produits)',
          '**Sortie cohérente :** Quand vous générez du contenu similaire plusieurs fois et avez besoin de cohérence entre les résultats',
          '**Sortie structurée :** Quand la sortie doit avoir un format spécifique (JSON, Markdown, tableaux, listes numérotées)',
          '**Génération de haute qualité :** Quand vous préférez la qualité à la rapidité',
          '**Demandes multilingues :** Quand vous voulez que l\'IA réplique un modèle dans une autre langue',
          '**Exigences complexes :** Quand la demande est difficile à décrire verbalement'
        ],
      },
      howPQImplements: {
        title: 'Comment PromptQuorum Implémente le Framework TRACE',
        content: [
          '**PromptQuorum reconnaît les prompts TRACE et facilite la saisie d\'exemples.** Au lieu de formater manuellement votre exemple, vous pouvez simplement montrer la sortie souhaitée, et PromptQuorum la structure au format TRACE. L\'outil valide que votre exemple a le bon format.',
          'PromptQuorum offre également la possibilité d\'utiliser plusieurs exemples. Bien que TRACE fonctionne classiquement avec un exemple, vous pouvez en ajouter plusieurs pour rendre le modèle encore plus clair. PromptQuorum appelle cela le "Multi-Shot Prompting" – et cela fonctionne encore mieux que le Single-Shot.',
          'Quand vous exécutez un prompt TRACE avec PromptQuorum, vous avez immédiatement accès au Consensus Scoring. Vous voyez si tous les modèles ont la même compréhension du modèle – ou si certains modèles interprètent différemment le modèle. C\'est un signal précieux pour la robustesse de vos exemples.'
        ],
      },
      usingTraceWithOthers: {
        title: 'Combiner TRACE avec d\'autres Frameworks',
        content: [
          '**TRACE peut être combiné avec CRAFT, CO-STAR et SPECS si vous ajoutez des exemples à ces frameworks.** Exemple : Vous utilisez CO-STAR, mais pour de meilleurs résultats, vous ajoutez un exemple.',
          'Scénario pratique : Vous écrivez une copie marketing avec CO-STAR. Au lieu de simplement remplir les champs Context, Objective, Style, Tone, Audience et Response, vous pouvez également donner un exemple de bonne copie marketing que vous avez aimée. Cela combine la structure de CO-STAR avec la puissance de l\'apprentissage par exemple de TRACE.',
          'La règle générale : chaque framework peut bénéficier d\'un exemple. TRACE en fait la stratégie centrale, tandis que d\'autres frameworks le traitent comme optionnel. Mais si vous avez besoin de qualité, ajoutez toujours un exemple – quel que soit le framework que vous utilisez.'
        ],
      },
      howToStart: {
        title: 'Comment Commencer avec TRACE',
        content: 'Suivez ces cinq étapes pour créer un prompt TRACE :',
        numberedItems: [
          '**Définissez la Task :** Quel est le problème général ? Exemple : « Écrire des descriptions de produits pour une boutique de commerce électronique ». Soyez clair, mais pas trop détaillé – cela viendra plus tard.',
          '**Précisez la Request :** Que doit être exactement le résultat ? Pas seulement « une description », mais « une description de 2-3 phrases qui met en avant les avantages et parle au public cible ».',
          '**Décrivez l\'Action :** Comment l\'IA devrait-elle procéder ? « Décompose le produit en 3 avantages, choisis le plus convaincant, écris-le en langage simple ».',
          '**Donnez le Context :** Quelles informations supplémentaires l\'IA doit-elle ? Public cible, type de produit, ton, longueur, niveau technique.',
          '**Montrez un Exemple :** Écrivez ou fournissez un exemple concret du format de sortie exact que vous attendez. C\'est l\'étape critique – l\'exemple devrait représenter la réponse parfaite.'
        ],
      },
    },
  },

  ja: {
    theme: 'Frameworks',
    title: 'TRACEフレームワーク：例示型プロンプティングでより良いAI結果を得る（2026）',
    intro: 'TRACEフレームワークは、例示型学習とFew-Shotプロンプティングに特化しています。口頭での指示に頼るフレームワークとは異なり、TRACEはあなたが期待する正確な出力をAIに示します。これは心理的に強力です：「説明ではなく示す」は実証されたな学習戦略です。TRACEはプロンプトをTask、Request、Action、Context、そして完璧な例に分解します。このアプローチは、AIがパターンから学ぶときに革新的です—そして純粋な口頭指示よりも誤解の影響を受けやすくありません。',
    publishDate: '2026-03-24',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'TRACEフレームワーク',
    sections: {
      whatIsTrace: {
        title: 'TRACEフレームワークとは何か',
        content: [
          '**TRACEフレームワークは、完璧な出力の例を中心戦略として使用して、あなたが何を望むかをAIに教える構造化テンプレートです。** TRACEはTask、Request、Action、Context、Exampleを表します。ほとんどのフレームワークが口頭の指示を使う一方、TRACEは「示すことは説明するより強力」という原則を利用します。',
          '心理的には：人間はパターン認識を通じて学習します。子どもに自転車の乗り方を、自転車に乗せて10分練習させることで教えると、30分の口頭説明よりも速く学びます。TRACEはAIでも同じ方法で機能します。良い例は、AIが解釈する必要性を排除します。'
        ],
      },
      fiveComponents: {
        title: 'TRACEフレームワークの5つの構成要素',
        content: 'TRACEは5つの要素から構築されており、「Example」が区別できる特性です：',
        items: [
          '**Task（タスク）：** 一般的な問題は何か？これは全リクエストのコンテキストです。',
          '**Request（リクエスト）：** AIに正確に何をさせたいのか？これはTaskより具体的です。',
          '**Action（アクション）：** AIは具体的にどのアクションを実行すべきか？どのように進めるべきか？',
          '**Context（コンテキスト）：** AIがアクションを正しく実行するために必要な追加情報は何か？',
          '**Example（例）：** 取得したい正確な出力形式の具体的な例を示してください。これはTRACEの中心です—例は他のすべてのフィールドよりも重要です。'
        ],
      },
      whyTraceIsUseful: {
        title: 'なぜTRACEが非常に強力か',
        content: [
          '**一つの例は、言葉が生み出す曖昧さを解決します。** 「サマリー」という言葉は異なる人には異なる意味です。ある人は2文を想像し、別の人は10のポイントを想像します。例はこの曖昧さを完全に排除します。',
          'これはスタイル要件に特に価値があります。「プロフェッショナル」に書きたい場合、100人が100の異なる定義を持つかもしれません。しかし、例を与えると、AIは正確に何を意味するかを知ります—単語の長さ、文の長さ、トーン、形式、すべて。',
          'TRACEは言語の枠を超えてもより良く機能します。多言語AI は、目標言語であなたの例を読み、パターンを完璧に複製できます。これが学術研究でFew-Shotプロンプティングがゼロショットより良い結果をもたらす理由です。'
        ],
      },
      badVsGoodExample: {
        title: '悪いTRACEプロンプトの例と良い例',
        content: '次の2つのプロンプトを比較してください：',
        items: [
          '**悪い（例なし）：** 「製品説明を書いてください。説得力があり、製品をハイライトし、短くする必要があります。プロフェッショナルなトーンを使用してください。」',
          '**良い（TRACEと例）：** 「Task: テック店の製品説明を書く。Request: 新しい製品の2-3文の説明を作成します。Action: 利点、仕様、ターゲットオーディエンスを簡潔な文に分解します。Context: 技術的だが理解しやすい言語を使用します。Example: [製品: USB-C ケーブルオーガナイザー] \"USB-Cケーブルオーガナイザーはあなたのデスク上の混乱を減らします。最大6本のケーブル用スペースと滑り止めデザインにより、すべてが所定の位置に保たれます。複数のデバイスで作業するすべての人に最適です。\"」'
        ],
      },
      whenToUse: {
        title: 'TRACEをいつ使用するか',
        content: 'TRACEは以下の使用例に最適です：',
        items: [
          '**スタイル要件：** 特定のスタイル、トーン、または形式の文章が必要な場合（電子メール、ブログ記事、製品説明）',
          '**一貫した出力：** 複数回類似のコンテンツを生成し、出力間の一貫性が必要な場合',
          '**構造化出力：** 出力が特定の形式である必要がある場合（JSON、Markdown、テーブル、番号付きリスト）',
          '**高品質生成：** 速度より品質を優先する場合',
          '**多言語リクエスト：** AIが別の言語でパターンを複製することを望む場合',
          '**複雑な要件：** 口頭でのみ説明するのが難しい場合'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorumがTRACEフレームワークを実装する方法',
        content: [
          '**PromptQuorumはTRACEプロンプトを認識し、例の入力を簡単にします。** 手動で例をフォーマットする代わりに、単に望ましい出力を表示すると、PromptQuorumがそれをTRACE形式に構造化します。ツールは、例が正しい形式であることを検証します。',
          'PromptQuorumはまた、複数の例を活用する機能も提供します。TRACEは従来的には1つの例で機能しますが、複数の例を追加してパターンをさらに明確にすることができます。PromptQuorumはこれを「Multi-Shot Prompting」と呼び、Single-Shotよりもさらに優れています。',
          'PromptQuorumでTRACEプロンプトを実行すると、Consensus Scoringに即座にアクセスできます。すべてのモデルが同じパターンの理解を持っているかどうかを確認します—または、一部のモデルがパターンを異なる方法で解釈しているかどうかを確認します。これは、例の堅牢性にとって貴重なシグナルです。'
        ],
      },
      usingTraceWithOthers: {
        title: 'TRACEを他のフレームワークと組み合わせる',
        content: [
          '**TRACEをCRAFT、CO-STAR、SPECSと組み合わせることができます。これらのフレームワークに例を追加する場合。** 例：CO-STARを使用していますが、より良い結果のために例を追加します。',
          '実践的なシナリオ：CO-STARでマーケティングコピーを作成しています。単にContext、Objective、Style、Tone、Audience、Responseフィールドを記入するのではなく、あなたが好きなことがある良いマーケティングコピーの例を提供することもできます。これはCO-STARの構造とTRACEの例学習の力を組み合わせます。',
          '一般的なルール：すべてのフレームワークは例から利益を得ることができます。TRACEはそれを中心的な戦略にしますが、他のフレームワークはそれをオプションとして扱います。ただし、品質が必要な場合は、使用するフレームワークに関係なく、常に例を追加してください。'
        ],
      },
      howToStart: {
        title: 'TRACEを始める方法',
        content: 'TRACEプロンプトを作成するために、これらの5つのステップに従います：',
        numberedItems: [
          '**Taskを定義します：** 一般的な問題は何か？例：「電子商取引店の製品説明を書く」。明確にしますが、細部に入りすぎないでください—それは後で来ます。',
          '**Requestを明確にします：** 結果は正確には何であるべきか？単なる「説明」ではなく、「利点をハイライトし、ターゲットオーディエンスに話かける2-3文の説明」。',
          '**Actionを説明します：** AIはどのように進めるべきか？「製品を3つの利点に分解し、最も説得力のあるものを選び、シンプルな言語で書く」。',
          '**Contextを提供します：** AIが必要とする追加情報は何か？ターゲットオーディエンス、製品タイプ、トーン、長さ、技術レベル。',
          '**例を示します：** あなたが期待する正確な出力形式の具体的な例を書くか提供します。これは重要なステップです—例は完璧な答えを表すべきです。'
        ],
      },
    },
  },

  zh: {
    theme: 'Frameworks',
    title: 'TRACE框架：通过示例学习获得更好的AI结果（2026）',
    intro: 'TRACE框架专门用于示例学习和Few-Shot提示。与依赖口头指示的框架不同，TRACE向AI展示您期望的确切输出。这在心理上很强大："表现而不是说"是一个经过验证的学习策略。TRACE将您的提示分解为Task、Request、Action、Context和完美示例。这种方法在AI从模式中学习时是革命性的——并且不容易被误解，不像纯粹的口头指示。',
    publishDate: '2026-03-24',
    readTime: '7分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'TRACE框架',
    sections: {
      whatIsTrace: {
        title: '什么是TRACE框架',
        content: [
          '**TRACE框架是一个结构化模板，使用完美输出的示例作为教AI您想要什么的核心策略。** TRACE代表Task、Request、Action、Context和Example。虽然大多数框架使用口头指示，但TRACE利用了"表现比解释更强大"的原则。',
          '从心理学上讲：人通过模式识别学习。如果您通过将孩子放在自行车上并练习10分钟来教孩子如何骑自行车，他的学习速度会比30分钟的口头解释更快。TRACE以相同的方式与AI协作。一个好的例子消除了AI需要解释的需要。'
        ],
      },
      fiveComponents: {
        title: 'TRACE框架的五个构成部分',
        content: 'TRACE由5个元素构建，其中"Example"是区别性特征：',
        items: [
          '**Task（任务）：** 一般问题是什么？这是整个请求的背景。',
          '**Request（请求）：** 您究竟希望AI做什么？这比Task更具体。',
          '**Action（行动）：** AI应该采取的具体行动是什么？它应该如何进行？',
          '**Context（上下文）：** AI正确执行操作需要什么额外信息？',
          '**Example（示例）：** 显示您想获得的确切输出格式的具体示例。这是TRACE的核心——示例比所有之前的字段加起来都更重要。'
        ],
      },
      whyTraceIsUseful: {
        title: '为什么TRACE如此强大',
        content: [
          '**一个示例解决了文字造成的歧义。** "摘要"这个词对不同的人意味着不同的事情。一个人想象2个句子，另一个想象10个要点。一个示例完全消除了这种歧义。',
          '这对风格要求特别有价值。如果您想以"专业"的方式写作，100个人可能有100个不同的定义。但如果您给出示例，AI就确切地知道您的意思——词长、句长、语气、形式性等。',
          'TRACE也跨越语言边界更好地运作。多语言AI可以以目标语言读取您的示例并完美地复制该模式。这就是为什么在学术研究中，Few-Shot提示会产生比Zero-Shot更好的结果。'
        ],
      },
      badVsGoodExample: {
        title: '不好的TRACE提示示例 vs 好的示例',
        content: '比较这两个提示：',
        items: [
          '**不好（无示例）：** "写一个产品描述。它应该具有说服力，突出产品，并且很短。使用专业的语调。"',
          '**好的（TRACE与示例）：** "Task: 为科技店编写产品描述。Request: 为新产品创建2-3句的描述。Action: 将优点、规格和目标受众分解为简洁的句子。Context: 使用技术但易理解的语言。Example: [产品: USB-C电缆组织器] \"USB-C电缆组织器减少了桌面混乱。支持最多6条电缆，具有防滑设计，一切都保持原位。非常适合使用多个设备工作的人。\"\"'
        ],
      },
      whenToUse: {
        title: '何时使用TRACE',
        content: 'TRACE非常适合以下用例：',
        items: [
          '**风格要求：** 当您需要特定风格、语调或格式的文本时（电子邮件、博客文章、产品说明）',
          '**一致的输出：** 当您多次生成类似内容并需要输出之间的一致性时',
          '**结构化输出：** 当输出必须具有特定格式时（JSON、Markdown、表格、编号列表）',
          '**高质量生成：** 当您优先考虑质量而不是速度时',
          '**多语言请求：** 当您希望AI在另一种语言中复制模式时',
          '**复杂要求：** 当请求很难用语言描述时'
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum如何实现TRACE框架',
        content: [
          '**PromptQuorum识别TRACE提示并使示例输入变得简单。** 而不是手动格式化您的示例，您只需显示所需的输出，PromptQuorum就会将其结构化为TRACE格式。该工具验证您的示例具有正确的格式。',
          'PromptQuorum还提供了利用多个示例的能力。虽然TRACE传统上使用一个示例，但您可以添加多个来使模式更清晰。PromptQuorum称此为"Multi-Shot Prompting"——它比Single-Shot的效果更好。',
          '当您使用PromptQuorum运行TRACE提示时，您可以立即访问Consensus Scoring。您看到所有模型是否有相同的模式理解——或某些模型是否以不同方式解释模式。这是示例稳健性的有价值的信号。'
        ],
      },
      usingTraceWithOthers: {
        title: '将TRACE与其他框架相结合',
        content: [
          '**如果您将示例添加到这些框架，TRACE可以与CRAFT、CO-STAR和SPECS相结合。** 例如：您使用CO-STAR，但为了获得更好的结果，您添加了一个示例。',
          '实际场景：您使用CO-STAR编写营销文案。您可以不仅填充Context、Objective、Style、Tone、Audience和Response字段，还可以给出一个您喜欢的好营销文案的示例。这将CO-STAR的结构与TRACE的示例学习的力量结合起来。',
          '一般规则：每个框架都可以从示例中受益。TRACE将其作为核心策略，而其他框架将其视为可选。但如果您需要质量，请始终添加示例——无论您使用的是什么框架。'
        ],
      },
      howToStart: {
        title: '如何开始使用TRACE',
        content: '按照这五个步骤创建TRACE提示：',
        numberedItems: [
          '**定义Task：** 一般问题是什么？示例："为电子商务店铺编写产品描述"。要清晰，但不要过于详细——这会稍后进行。',
          '**明确Request：** 结果应该准确是什么？不仅是"描述"，而是"突出优点并与目标受众交流的2-3句描述"。',
          '**描述Action：** AI应该如何进行？"将产品分解为3个优势，选择最具说服力的，用简单语言写入"。',
          '**提供Context：** AI需要什么额外信息？目标受众、产品类型、语调、长度、技术水平。',
          '**显示示例：** 编写或提供您期望的确切输出格式的具体示例。这是关键步骤——示例应代表完美的答案。'
        ],
      },
    },
  },
}
