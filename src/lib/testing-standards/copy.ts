// "How I test local AI software" — owner-written page (Hans, 2026-10-16), first person on purpose.
// English is the source; the other eight blocks follow docs/geo-translation.md (register per language,
// no regional additions, nothing strengthened or softened). Page is noindex by design.

import type { Language } from '@/lib/blog/blogContent'

export interface TestingStandardsCopy {
  metaTitle: string
  metaDescription: string
  h1: string
  sections: { h: string; p: string[] }[]
  /** Bold key question, rendered after the last section's paragraphs. */
  question: string
  closing: string
  tagline: string
  /** Label of the link shown at the end of every hands-on test page. */
  linkLabel: string
}

export const TESTING_STANDARDS_PATH = '/directory/testing-standards-non-standard'

export const TESTING_STANDARDS_COPY: Record<Language, TestingStandardsCopy> = {
  en: {
    metaTitle: 'How I Test Local AI Software | PromptQuorum',
    metaDescription: 'How PromptQuorum tests local AI software: about one hour of hands-on use as a normal user, not a QA audit, a benchmark or a guarantee.',
    h1: 'How I Test Local AI Software',
    sections: [
      {
        h: "I'm a normal user. That's the point.",
        p: [
          "I test local AI applications because I want to find software that does something useful for ordinary people. I'm not a software QA engineer, and PromptQuorum is not a technical auditing service.",
          'My approach is simple: I spend approximately one hour with an application and try the things that interest me. I want to discover what it can do, whether I can get it working, and how much effort it takes to achieve something useful.',
          "I don't test every function. I don't spend an hour reading documentation to figure out a feature I cannot discover. And I don't investigate every problem until I find its technical root cause.",
          'If something works, I report it. If something confuses me, I report that. If I cannot get something working within my testing session, I say so.',
          "That's the experience another normal user might have, too.",
        ],
      },
      {
        h: 'The human factor',
        p: [
          "I might conduct a test in the morning, late in the evening, when I'm tired, or after drinking two beers. My patience, concentration and expectations aren't constant. Neither are those of your average user.",
          'Does that make my findings imperfect? Absolutely.',
          'I can misunderstand a feature. I can overlook a setting. I can get something wrong. My experience is not universal, and my conclusions can be challenged.',
          'But that is precisely why I document what I actually experienced rather than pretending to deliver an objective technical verdict.',
        ],
      },
      {
        h: 'Developers are welcome to respond',
        p: [
          "If you develop an application I've tested, I welcome your feedback.",
          "You can explain a feature, point out a mistake, demonstrate a better workflow or submit a counterstatement. If new information changes my understanding, I'll make that clear.",
          'My observations remain my own. Your response gives readers additional context.',
        ],
      },
      {
        h: "What my tests are — and what they aren't",
        p: [
          "These are independent, time-limited, hands-on user experiences. They are not exhaustive feature audits, security assessments, performance benchmarks or guarantees that a particular function will behave the same way on every system.",
          'I use the software, explore what interests me, document what happens and share my conclusions.',
        ],
      },
    ],
    question: 'The question is simple: can a normal person get something useful out of this application?',
    closing: "That's what I want PromptQuorum to help you discover.",
    tagline: 'Built for humans. Structured for AI.',
    linkLabel: 'How I test apps — and why there is no fixed standard',
  },
  de: {
    metaTitle: 'Wie ich lokale KI-Software teste | PromptQuorum',
    metaDescription: 'Wie PromptQuorum lokale KI-Software testet: etwa eine Stunde praktische Nutzung als normaler Anwender – kein QA-Audit, kein Benchmark, keine Garantie.',
    h1: 'Wie ich lokale KI-Software teste',
    sections: [
      {
        h: 'Ich bin ein normaler Anwender. Das ist der Punkt.',
        p: [
          'Ich teste lokale KI-Anwendungen, weil ich Software finden möchte, die für ganz normale Menschen etwas Nützliches leistet. Ich bin kein Software-QA-Ingenieur, und PromptQuorum ist kein technischer Prüfdienst.',
          'Mein Vorgehen ist einfach: Ich verbringe ungefähr eine Stunde mit einer Anwendung und probiere die Dinge aus, die mich interessieren. Ich möchte herausfinden, was sie kann, ob ich sie zum Laufen bekomme und wie viel Aufwand es kostet, etwas Nützliches zu erreichen.',
          'Ich teste nicht jede Funktion. Ich verbringe keine Stunde damit, Dokumentation zu lesen, um eine Funktion zu verstehen, die ich nicht selbst entdecken kann. Und ich gehe nicht jedem Problem nach, bis ich seine technische Ursache gefunden habe.',
          'Wenn etwas funktioniert, berichte ich es. Wenn mich etwas verwirrt, berichte ich auch das. Wenn ich etwas in meiner Testsitzung nicht zum Laufen bringe, sage ich es.',
          'Genau diese Erfahrung könnte auch ein anderer normaler Anwender machen.',
        ],
      },
      {
        h: 'Der menschliche Faktor',
        p: [
          'Ich teste vielleicht morgens, spätabends, wenn ich müde bin, oder nach zwei Bier. Meine Geduld, Konzentration und Erwartungen sind nicht konstant. Die des durchschnittlichen Anwenders sind es auch nicht.',
          'Macht das meine Ergebnisse unvollkommen? Auf jeden Fall.',
          'Ich kann eine Funktion missverstehen. Ich kann eine Einstellung übersehen. Ich kann mich irren. Meine Erfahrung ist nicht allgemeingültig, und meine Schlussfolgerungen lassen sich anfechten.',
          'Aber genau deshalb dokumentiere ich, was ich tatsächlich erlebt habe, statt so zu tun, als würde ich ein objektives technisches Urteil abgeben.',
        ],
      },
      {
        h: 'Entwickler dürfen gern antworten',
        p: [
          'Wenn Sie eine Anwendung entwickeln, die ich getestet habe, freue ich mich über Ihr Feedback.',
          'Sie können eine Funktion erklären, auf einen Fehler hinweisen, einen besseren Arbeitsablauf zeigen oder eine Gegendarstellung einreichen. Wenn neue Informationen mein Verständnis ändern, mache ich das deutlich.',
          'Meine Beobachtungen bleiben meine eigenen. Ihre Antwort gibt den Lesern zusätzlichen Kontext.',
        ],
      },
      {
        h: 'Was meine Tests sind – und was nicht',
        p: [
          'Es sind unabhängige, zeitlich begrenzte, praktische Anwendererfahrungen. Sie sind keine umfassenden Funktionsprüfungen, keine Sicherheitsbewertungen, keine Leistungs-Benchmarks und keine Garantie dafür, dass sich eine bestimmte Funktion auf jedem System gleich verhält.',
          'Ich nutze die Software, erkunde, was mich interessiert, dokumentiere, was passiert, und teile meine Schlussfolgerungen.',
        ],
      },
    ],
    question: 'Die Frage ist einfach: Kann ein normaler Mensch etwas Nützliches aus dieser Anwendung herausholen?',
    closing: 'Genau das soll PromptQuorum Ihnen zu entdecken helfen.',
    tagline: 'Für Menschen gebaut. Für KI strukturiert.',
    linkLabel: 'Wie ich Apps teste – und warum es keinen festen Standard gibt',
  },
  fr: {
    metaTitle: 'Comment je teste les logiciels d\'IA locale | PromptQuorum',
    metaDescription: 'Comment PromptQuorum teste les logiciels d\'IA locale : environ une heure d\'utilisation en simple utilisateur, sans audit QA, sans benchmark ni garantie.',
    h1: 'Comment je teste les logiciels d\'IA locale',
    sections: [
      {
        h: 'Je suis un utilisateur ordinaire. C\'est justement le but.',
        p: [
          'Je teste des applications d\'IA locale parce que je veux trouver des logiciels qui apportent quelque chose d\'utile aux gens ordinaires. Je ne suis pas ingénieur QA logiciel, et PromptQuorum n\'est pas un service d\'audit technique.',
          'Mon approche est simple : je passe environ une heure avec une application et j\'essaie les choses qui m\'intéressent. Je veux découvrir ce qu\'elle sait faire, si j\'arrive à la faire fonctionner et quel effort il faut pour obtenir quelque chose d\'utile.',
          'Je ne teste pas toutes les fonctions. Je ne passe pas une heure à lire la documentation pour comprendre une fonction que je ne parviens pas à découvrir. Et je n\'examine pas chaque problème jusqu\'à en trouver la cause technique.',
          'Si quelque chose fonctionne, je le signale. Si quelque chose me déroute, je le signale aussi. Si je n\'arrive pas à faire fonctionner quelque chose pendant ma session de test, je le dis.',
          'C\'est aussi l\'expérience qu\'un autre utilisateur ordinaire pourrait vivre.',
        ],
      },
      {
        h: 'Le facteur humain',
        p: [
          'Il m\'arrive de faire un test le matin, tard le soir, quand je suis fatigué, ou après avoir bu deux bières. Ma patience, ma concentration et mes attentes ne sont pas constantes. Celles de l\'utilisateur moyen non plus.',
          'Cela rend-il mes constats imparfaits ? Absolument.',
          'Je peux mal comprendre une fonction. Je peux passer à côté d\'un réglage. Je peux me tromper. Mon expérience n\'est pas universelle, et mes conclusions peuvent être contestées.',
          'Mais c\'est précisément pourquoi je documente ce que j\'ai réellement vécu plutôt que de prétendre rendre un verdict technique objectif.',
        ],
      },
      {
        h: 'Les développeurs sont invités à répondre',
        p: [
          'Si vous développez une application que j\'ai testée, vos retours sont les bienvenus.',
          'Vous pouvez expliquer une fonction, signaler une erreur, montrer un meilleur flux de travail ou soumettre une réponse contradictoire. Si de nouvelles informations changent ma compréhension, je le préciserai clairement.',
          'Mes observations restent les miennes. Votre réponse donne aux lecteurs un contexte supplémentaire.',
        ],
      },
      {
        h: 'Ce que sont mes tests — et ce qu\'ils ne sont pas',
        p: [
          'Ce sont des expériences d\'utilisateur indépendantes, limitées dans le temps et pratiques. Ce ne sont ni des audits exhaustifs des fonctions, ni des évaluations de sécurité, ni des benchmarks de performance, ni des garanties qu\'une fonction se comportera de la même façon sur tous les systèmes.',
          'J\'utilise le logiciel, j\'explore ce qui m\'intéresse, je documente ce qui se passe et je partage mes conclusions.',
        ],
      },
    ],
    question: 'La question est simple : une personne ordinaire peut-elle tirer quelque chose d\'utile de cette application ?',
    closing: 'C\'est ce que je veux que PromptQuorum vous aide à découvrir.',
    tagline: 'Conçu pour les humains. Structuré pour l\'IA.',
    linkLabel: 'Comment je teste les applications — et pourquoi il n\'existe pas de norme fixe',
  },
  es: {
    metaTitle: 'Cómo pruebo software de IA local | PromptQuorum',
    metaDescription: 'Cómo prueba PromptQuorum el software de IA local: una hora de uso práctico como usuario normal, sin auditoría QA, sin benchmarks y sin garantías.',
    h1: 'Cómo pruebo software de IA local',
    sections: [
      {
        h: 'Soy un usuario normal. Ese es el punto.',
        p: [
          'Pruebo aplicaciones de IA local porque quiero encontrar software que haga algo útil para la gente corriente. No soy ingeniero de QA de software, y PromptQuorum no es un servicio de auditoría técnica.',
          'Mi método es sencillo: dedico aproximadamente una hora a una aplicación y pruebo las cosas que me interesan. Quiero descubrir qué puede hacer, si consigo ponerla en marcha y cuánto esfuerzo cuesta lograr algo útil.',
          'No pruebo todas las funciones. No dedico una hora a leer documentación para entender una función que no consigo descubrir por mi cuenta. Y no investigo cada problema hasta encontrar su causa técnica.',
          'Si algo funciona, lo cuento. Si algo me confunde, también lo cuento. Si no consigo que algo funcione durante mi sesión de prueba, lo digo.',
          'Esa es también la experiencia que podría tener otro usuario normal.',
        ],
      },
      {
        h: 'El factor humano',
        p: [
          'Puedo hacer una prueba por la mañana, a última hora de la noche, cuando estoy cansado o después de beber dos cervezas. Mi paciencia, mi concentración y mis expectativas no son constantes. Las del usuario medio tampoco.',
          '¿Hace eso que mis conclusiones sean imperfectas? Por supuesto.',
          'Puedo malinterpretar una función. Puedo pasar por alto un ajuste. Puedo equivocarme. Mi experiencia no es universal y mis conclusiones se pueden cuestionar.',
          'Pero precisamente por eso documento lo que realmente viví, en lugar de fingir que ofrezco un veredicto técnico objetivo.',
        ],
      },
      {
        h: 'Los desarrolladores pueden responder',
        p: [
          'Si desarrollas una aplicación que he probado, tus comentarios son bienvenidos.',
          'Puedes explicar una función, señalar un error, mostrar un flujo de trabajo mejor o presentar una contrarréplica. Si nueva información cambia mi comprensión, lo dejaré claro.',
          'Mis observaciones siguen siendo mías. Tu respuesta da a los lectores contexto adicional.',
        ],
      },
      {
        h: 'Qué son mis pruebas — y qué no son',
        p: [
          'Son experiencias de usuario independientes, limitadas en el tiempo y prácticas. No son auditorías exhaustivas de funciones, evaluaciones de seguridad, benchmarks de rendimiento ni garantías de que una función concreta se comporte igual en todos los sistemas.',
          'Uso el software, exploro lo que me interesa, documento lo que ocurre y comparto mis conclusiones.',
        ],
      },
    ],
    question: 'La pregunta es simple: ¿puede una persona normal sacar algo útil de esta aplicación?',
    closing: 'Eso es lo que quiero que PromptQuorum te ayude a descubrir.',
    tagline: 'Hecho para personas. Estructurado para la IA.',
    linkLabel: 'Cómo pruebo las apps — y por qué no hay un estándar fijo',
  },
  ja: {
    metaTitle: 'ローカルAIソフトの試し方 | PromptQuorum',
    metaDescription: 'PromptQuorumがローカルAIソフトを試す方法です。一般ユーザーとして約1時間実際に使います。QA監査やベンチマークではなく、動作の保証もしません。',
    h1: 'ローカルAIソフトの試し方',
    sections: [
      {
        h: '私は普通のユーザーです。それが大切なのです。',
        p: [
          '私がローカルAIアプリをテストするのは、普通の人にとって役に立つソフトを見つけたいからです。私はソフトウェアのQAエンジニアではなく、PromptQuorumも技術監査サービスではありません。',
          'やり方はシンプルです。1つのアプリに約1時間かけて、気になることを試します。何ができるのか、動かせるのか、役に立つ結果を得るのにどれだけ手間がかかるのかを知りたいのです。',
          'すべての機能は試しません。自分で見つけられない機能を理解するために、1時間かけてドキュメントを読むこともしません。また、すべての問題について技術的な根本原因を突き止めるまで調べることもしません。',
          '動いたものは、動いたと報告します。戸惑ったことは、戸惑ったと報告します。テストの時間内に動かせなかったものは、動かせなかったと書きます。',
          'それは、別の普通のユーザーも体験しうることです。',
        ],
      },
      {
        h: '人間という要素',
        p: [
          'テストは朝に行うこともあれば、夜遅くや疲れているとき、ビールを2杯飲んだ後に行うこともあります。私の忍耐力、集中力、期待は一定ではありません。平均的なユーザーも同じです。',
          'だから私の結果は不完全なのでしょうか。その通りです。',
          '私は機能を誤解することがあります。設定を見落とすこともあります。間違えることもあります。私の体験は万人に当てはまるものではなく、私の結論には異論もありえます。',
          'だからこそ、客観的な技術的判定を下しているふりをせず、実際に体験したことを記録しているのです。',
        ],
      },
      {
        h: '開発者の方の反論・補足を歓迎します',
        p: [
          '私がテストしたアプリを開発されている方は、ぜひご意見をお寄せください。',
          '機能の説明、誤りの指摘、より良い使い方の提示、反対意見の提出が可能です。新しい情報によって私の理解が変わった場合は、はっきりと明記します。',
          '私の観察は私自身のものです。開発者の方の回答は、読者に追加の文脈を与えます。',
        ],
      },
      {
        h: '私のテストとは何か、何ではないか',
        p: [
          'これらは独立した、時間を区切った、実際に使った体験です。網羅的な機能監査、セキュリティ評価、性能ベンチマークではなく、特定の機能がどのシステムでも同じように動くことの保証でもありません。',
          'ソフトを使い、気になるところを試し、起きたことを記録し、結論を共有します。',
        ],
      },
    ],
    question: '問いはシンプルです。普通の人が、このアプリから何か役に立つものを得られるでしょうか。',
    closing: 'それを見つける手助けをすることが、PromptQuorumの目的です。',
    tagline: '人のために作り、AIのために構造化する。',
    linkLabel: 'アプリの試し方：なぜ決まった基準がないのか',
  },
  zh: {
    metaTitle: '我如何测试本地AI软件 | PromptQuorum',
    metaDescription: 'PromptQuorum如何测试本地AI软件：以普通用户身份实际使用约一小时，不是QA审计，不是性能基准测试，也不是任何形式的保证。',
    h1: '我如何测试本地AI软件',
    sections: [
      {
        h: '我是普通用户，这正是重点。',
        p: [
          '我测试本地AI应用，是因为我想找到对普通人真正有用的软件。我不是软件QA工程师，PromptQuorum也不是技术审计服务。',
          '我的方法很简单：在一个应用上花大约一小时，试用我感兴趣的功能。我想知道它能做什么、我能不能让它运行起来，以及要得到有用的结果需要付出多少努力。',
          '我不会测试每一项功能。我不会花一小时读文档，去弄懂一个我自己发现不了的功能。我也不会为每个问题都追查到技术根源。',
          '如果某样东西能用，我会如实报告。如果某样东西让我困惑，我也会报告。如果在测试时间内我没能让它运行，我会直接说明。',
          '另一位普通用户也可能遇到同样的体验。',
        ],
      },
      {
        h: '人的因素',
        p: [
          '我可能在早上测试，也可能在深夜、疲惫时，或喝了两杯啤酒之后测试。我的耐心、专注力和期望并不恒定，普通用户也是如此。',
          '这是否让我的结论不够完美？当然。',
          '我可能误解某项功能，可能忽略某个设置，也可能出错。我的体验并不具有普遍性，我的结论也可以被质疑。',
          '但正因如此，我记录的是我实际经历的内容，而不是假装给出客观的技术结论。',
        ],
      },
      {
        h: '欢迎开发者回应',
        p: [
          '如果你开发了我测试过的应用，欢迎你提出反馈。',
          '你可以解释某项功能、指出错误、演示更好的工作流程，或提交反驳声明。如果新的信息改变了我的理解，我会明确说明。',
          '我的观察仍然是我自己的观察。你的回应为读者提供了更多背景。',
        ],
      },
      {
        h: '我的测试是什么，又不是什么',
        p: [
          '这些是独立的、限时的、亲身使用的体验。它们不是详尽的功能审计，不是安全评估，不是性能基准测试，也不保证某项功能在每个系统上表现一致。',
          '我使用软件，探索我感兴趣的部分，记录发生的情况，并分享我的结论。',
        ],
      },
    ],
    question: '问题很简单：一个普通人能从这个应用中得到有用的东西吗？',
    closing: '这就是我希望PromptQuorum帮你发现的。',
    tagline: '为人而建，为AI而构。',
    linkLabel: '我如何测试应用——以及为什么没有固定标准',
  },
  pt: {
    metaTitle: 'Como eu testo software de IA local | PromptQuorum',
    metaDescription: 'Como o PromptQuorum testa software de IA local: cerca de uma hora de uso prático como usuário comum, sem auditoria de QA, benchmark ou garantia.',
    h1: 'Como eu testo software de IA local',
    sections: [
      {
        h: 'Sou um usuário comum. É esse o ponto.',
        p: [
          'Eu testo aplicativos de IA local porque quero encontrar software que faça algo útil para pessoas comuns. Não sou engenheiro de QA de software, e o PromptQuorum não é um serviço de auditoria técnica.',
          'Minha abordagem é simples: passo aproximadamente uma hora com um aplicativo e experimento as coisas que me interessam. Quero descobrir o que ele consegue fazer, se consigo colocá-lo para funcionar e quanto esforço é preciso para obter algo útil.',
          'Não testo todas as funções. Não passo uma hora lendo a documentação para entender um recurso que não consigo descobrir. E não investigo cada problema até encontrar sua causa técnica.',
          'Se algo funciona, eu relato. Se algo me confunde, eu relato isso também. Se não consigo fazer algo funcionar durante minha sessão de teste, eu digo.',
          'Essa também pode ser a experiência de outro usuário comum.',
        ],
      },
      {
        h: 'O fator humano',
        p: [
          'Posso fazer um teste de manhã, tarde da noite, quando estou cansado ou depois de tomar duas cervejas. Minha paciência, minha concentração e minhas expectativas não são constantes. As do usuário médio também não.',
          'Isso torna minhas conclusões imperfeitas? Com certeza.',
          'Posso entender mal um recurso. Posso deixar passar uma configuração. Posso errar. Minha experiência não é universal, e minhas conclusões podem ser contestadas.',
          'Mas é justamente por isso que documento o que realmente vivi, em vez de fingir que entrego um veredito técnico objetivo.',
        ],
      },
      {
        h: 'Desenvolvedores são bem-vindos para responder',
        p: [
          'Se você desenvolve um aplicativo que testei, seu feedback é bem-vindo.',
          'Você pode explicar um recurso, apontar um erro, mostrar um fluxo de trabalho melhor ou enviar uma contestação. Se novas informações mudarem meu entendimento, deixarei isso claro.',
          'Minhas observações continuam sendo minhas. Sua resposta dá aos leitores contexto adicional.',
        ],
      },
      {
        h: 'O que meus testes são — e o que não são',
        p: [
          'São experiências de uso independentes, com tempo limitado e feitas na prática. Não são auditorias completas de funções, avaliações de segurança, benchmarks de desempenho nem garantias de que uma função se comportará da mesma forma em todos os sistemas.',
          'Eu uso o software, exploro o que me interessa, documento o que acontece e compartilho minhas conclusões.',
        ],
      },
    ],
    question: 'A pergunta é simples: uma pessoa comum consegue tirar algo útil deste aplicativo?',
    closing: 'É isso que quero que o PromptQuorum ajude você a descobrir.',
    tagline: 'Feito para pessoas. Estruturado para IA.',
    linkLabel: 'Como eu testo aplicativos — e por que não há um padrão fixo',
  },
  ar: {
    metaTitle: 'كيف أختبر برامج الذكاء الاصطناعي المحلية | PromptQuorum',
    metaDescription: 'كيف يختبر PromptQuorum برامج الذكاء الاصطناعي المحلية: نحو ساعة من الاستخدام العملي بصفة مستخدم عادي، دون تدقيق جودة أو اختبارات أداء أو ضمانات.',
    h1: 'كيف أختبر برامج الذكاء الاصطناعي المحلية',
    sections: [
      {
        h: 'أنا مستخدم عادي. وهذا هو المقصود.',
        p: [
          'أختبر تطبيقات الذكاء الاصطناعي المحلية لأنني أريد العثور على برامج تقدّم شيئًا مفيدًا للناس العاديين. لست مهندس ضمان جودة برمجيات، وPromptQuorum ليس خدمة تدقيق تقني.',
          'أسلوبي بسيط: أقضي نحو ساعة مع التطبيق وأجرّب الأشياء التي تهمّني. أريد أن أعرف ما الذي يستطيع فعله، وهل أستطيع تشغيله، وكم من الجهد يلزم للوصول إلى نتيجة مفيدة.',
          'لا أختبر كل وظيفة. ولا أقضي ساعة في قراءة التوثيق لفهم ميزة لا أستطيع اكتشافها بنفسي. ولا أتقصّى كل مشكلة حتى أجد سببها التقني الجذري.',
          'إذا نجح شيء ما، أذكر ذلك. وإذا أربكني شيء ما، أذكر ذلك أيضًا. وإذا لم أستطع تشغيل شيء ما خلال جلسة الاختبار، أقول ذلك.',
          'وقد تكون هذه هي التجربة نفسها لمستخدم عادي آخر.',
        ],
      },
      {
        h: 'العامل البشري',
        p: [
          'قد أجري اختبارًا في الصباح، أو في وقت متأخر من الليل، أو وأنا متعب، أو بعد شرب كأسين من الجعة. صبري وتركيزي وتوقعاتي ليست ثابتة. وكذلك حال المستخدم العادي.',
          'هل يجعل ذلك نتائجي غير كاملة؟ بالتأكيد.',
          'قد أسيء فهم ميزة ما. وقد أغفل إعدادًا. وقد أخطئ. تجربتي ليست شاملة، ويمكن الاعتراض على استنتاجاتي.',
          'ولهذا بالتحديد أوثّق ما مررت به فعلًا بدلًا من التظاهر بتقديم حكم تقني موضوعي.',
        ],
      },
      {
        h: 'المطوّرون مرحَّب بردودهم',
        p: [
          'إذا كنت تطوّر تطبيقًا اختبرته، فملاحظاتك موضع ترحيب.',
          'يمكنك شرح ميزة، أو الإشارة إلى خطأ، أو عرض أسلوب عمل أفضل، أو تقديم رد مضاد. وإذا غيّرت معلومات جديدة فهمي، فسأوضح ذلك.',
          'تبقى ملاحظاتي ملكي أنا. وردّك يمنح القرّاء سياقًا إضافيًا.',
        ],
      },
      {
        h: 'ما هي اختباراتي — وما ليست كذلك',
        p: [
          'هذه تجارب استخدام مستقلة ومحدودة بالوقت وعملية. وهي ليست تدقيقات شاملة للميزات، ولا تقييمات أمنية، ولا اختبارات أداء، ولا ضمانات بأن وظيفة معينة ستتصرف بالطريقة نفسها على كل نظام.',
          'أستخدم البرنامج، وأستكشف ما يهمّني، وأوثّق ما يحدث، وأشارك استنتاجاتي.',
        ],
      },
    ],
    question: 'السؤال بسيط: هل يستطيع شخص عادي أن يحصل على شيء مفيد من هذا التطبيق؟',
    closing: 'هذا ما أريد أن يساعدك PromptQuorum على اكتشافه.',
    tagline: 'مصمَّم للبشر. ومنظَّم للذكاء الاصطناعي.',
    linkLabel: 'كيف أختبر التطبيقات — ولماذا لا يوجد معيار ثابت',
  },
  ko: {
    metaTitle: '로컬 AI 소프트웨어를 테스트하는 방법 | PromptQuorum',
    metaDescription: 'PromptQuorum이 로컬 AI 소프트웨어를 테스트하는 방법입니다. 일반 사용자로서 약 1시간 직접 사용하며, QA 감사나 벤치마크, 보증이 아닙니다.',
    h1: '로컬 AI 소프트웨어를 테스트하는 방법',
    sections: [
      {
        h: '저는 평범한 사용자입니다. 바로 그 점이 핵심입니다.',
        p: [
          '저는 평범한 사람들에게 실제로 쓸모 있는 소프트웨어를 찾고 싶어서 로컬 AI 애플리케이션을 테스트합니다. 저는 소프트웨어 QA 엔지니어가 아니며, PromptQuorum도 기술 감사 서비스가 아닙니다.',
          '방식은 단순합니다. 애플리케이션 하나에 대략 1시간을 들여 관심 있는 것들을 해 봅니다. 무엇을 할 수 있는지, 제가 실행시킬 수 있는지, 쓸모 있는 결과를 얻기까지 얼마나 노력이 드는지 알고 싶습니다.',
          '모든 기능을 테스트하지는 않습니다. 스스로 찾아내지 못한 기능을 이해하려고 1시간 동안 문서를 읽지도 않습니다. 그리고 모든 문제의 기술적 근본 원인을 찾을 때까지 파고들지도 않습니다.',
          '무언가 작동하면 그대로 보고합니다. 무언가 헷갈리면 그것도 보고합니다. 테스트 시간 안에 작동시키지 못하면 그렇다고 말합니다.',
          '다른 평범한 사용자도 같은 경험을 할 수 있습니다.',
        ],
      },
      {
        h: '사람이라는 변수',
        p: [
          '저는 아침에, 늦은 밤에, 피곤할 때, 또는 맥주 두 잔을 마신 뒤에 테스트할 수도 있습니다. 저의 인내심, 집중력, 기대치는 일정하지 않습니다. 평균적인 사용자도 마찬가지입니다.',
          '그렇다면 제 결과는 불완전할까요? 물론 그렇습니다.',
          '저는 기능을 오해할 수 있습니다. 설정을 놓칠 수 있습니다. 틀릴 수 있습니다. 제 경험은 보편적이지 않으며, 제 결론에는 이의를 제기할 수 있습니다.',
          '그래서 객관적인 기술 판정을 내리는 척하는 대신, 실제로 겪은 것을 기록합니다.',
        ],
      },
      {
        h: '개발자의 답변을 환영합니다',
        p: [
          '제가 테스트한 애플리케이션을 개발하셨다면, 의견을 환영합니다.',
          '기능을 설명하거나, 오류를 지적하거나, 더 나은 작업 방식을 보여 주거나, 반론을 제출하실 수 있습니다. 새로운 정보로 제 이해가 바뀌면 그 사실을 분명히 밝히겠습니다.',
          '제 관찰은 어디까지나 제 것입니다. 개발자의 답변은 독자에게 추가적인 맥락을 제공합니다.',
        ],
      },
      {
        h: '제 테스트는 무엇이고, 무엇이 아닌가',
        p: [
          '이것은 독립적이고 시간이 제한된, 직접 써 본 사용 경험입니다. 모든 기능을 빠짐없이 살피는 감사, 보안 평가, 성능 벤치마크가 아니며, 특정 기능이 모든 시스템에서 똑같이 동작한다는 보증도 아닙니다.',
          '저는 소프트웨어를 사용하고, 관심 있는 부분을 탐색하고, 일어난 일을 기록하고, 결론을 공유합니다.',
        ],
      },
    ],
    question: '질문은 단순합니다. 평범한 사람이 이 애플리케이션에서 쓸모 있는 것을 얻을 수 있을까요?',
    closing: '그것을 알아가도록 돕는 것이 PromptQuorum가 하려는 일입니다.',
    tagline: '사람을 위해 만들고, AI를 위해 구조화했습니다.',
    linkLabel: '앱을 테스트하는 방법 — 그리고 고정된 기준이 없는 이유',
  },
}
