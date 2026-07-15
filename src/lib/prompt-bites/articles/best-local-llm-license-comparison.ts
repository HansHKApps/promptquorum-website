import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Technique & Concept Explainers',
    title: 'Open-Weight Model License Comparison for Commercial Use',
    seoTitle: 'Open-Weight Model License Comparison | Prompt Bites',
    metaDescription:
      'A comparison of open-weight model license terms — permissive licenses like Apache and MIT versus custom vendor licenses with usage restrictions and output clauses.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers and businesses checking whether an open-weight model\'s license permits commercial use',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Permissive licenses like Apache 2.0 and MIT place no meaningful restriction on commercial use, while several open-weight model vendors ship custom licenses with usage caps, redistribution limits, or output-restriction clauses.</strong> Always read the specific model\'s license file rather than assuming "open-weight" means unrestricted.',
    toc: [
      { label: 'License Categories', anchor: '#license-categories' },
      { label: 'What to Check Before Commercial Deployment', anchor: '#what-to-check' },
      { label: 'Common License Clauses', anchor: '#common-clauses' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Can I use open-weight local LLMs commercially?',
        answer:
          'It depends on the specific license. Models released under Apache 2.0 or MIT can be used commercially with essentially no restriction. Some vendors instead use a custom license with conditions such as a monthly-active-user cap or restrictions on using outputs to train competing models — check the model\'s license file before deploying it commercially.',
        bullets: [
          'Apache 2.0 and MIT are permissive — commercial use is allowed with minimal conditions.',
          'Some vendors use custom licenses with usage caps or output-restriction clauses.',
          '"Open-weight" (weights are downloadable) is not the same guarantee as an open-source license.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apache 2.0 and MIT licenses place essentially no restriction on commercial use',
          'Some model vendors attach custom licenses with usage caps or output restrictions',
          'A monthly-active-user threshold is a common trigger requiring a separate commercial agreement',
          '"Open-weight" only guarantees downloadable weights, not any specific license freedom',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Permissive licenses like Apache 2.0 and MIT allow unrestricted commercial use of open-weight models, while some vendors attach custom licenses with usage limits.' },
          { type: 'plain-terms', text: 'In plain terms: not every downloadable model is free to use commercially without conditions — always check the specific license file, not just the marketing description.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'License Categories',
        content: [
          'Open-weight models fall into two broad license categories. Permissive licenses (Apache 2.0, MIT) impose essentially no restriction on commercial use or redistribution — you can deploy, modify, and sell products built on the model without a separate agreement with the model\'s creator.',
          'Custom vendor licenses are the second category. These may include a monthly-active-user threshold above which a separate commercial agreement is required, or clauses restricting the use of model outputs to train a competing model. The term "open-weight" only guarantees that the weights are downloadable — it says nothing about the license terms attached to them, so two "open-weight" models can carry very different commercial obligations.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check Before Commercial Deployment',
        content: [
          'Use a permissively licensed model (Apache 2.0, MIT) if you need to deploy without any usage-scale reporting or separate commercial negotiation. Check for a usage-scale threshold if the model ships with a custom license — many custom licenses only restrict large-scale commercial deployments above a stated user or revenue threshold, and are effectively free for smaller projects.',
          'Watch for output-restriction clauses if you plan to use the model\'s outputs for further training — some custom licenses explicitly prohibit using generated outputs to train a competing model, which matters if you plan to fine-tune a different model on this model\'s generations. Avoid assuming a research-only license permits production use — a license phrase like "non-commercial" or "research purposes only" blocks commercial deployment entirely, regardless of how the weights are distributed.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'Common License Clauses',
        content: [
          'A monthly-active-user (MAU) cap is one of the most common custom-license conditions: below the stated threshold, the license behaves like a permissive one; above it, a separate commercial agreement with the vendor is required. Attribution requirements are common even in otherwise permissive licenses, requiring a credit line in your product\'s documentation or about page.',
          'Redistribution restrictions sometimes limit how you can package and re-share the model weights themselves, separate from any restriction on the applications built with them. Field-of-use restrictions occasionally appear, prohibiting use of the model in specific domains (such as weapons development) regardless of scale.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is a model "open-source" just because the weights are downloadable?',
            a: 'Not necessarily. Open-source implies specific license freedoms defined by standards bodies like the Open Source Initiative; many "open-weight" releases use custom licenses that fall short of those standard definitions, even though the weight files themselves are freely downloadable.',
          },
          {
            q: 'Does a permissive license like Apache 2.0 require attribution?',
            a: 'Apache 2.0 requires that you retain the original copyright notice and license text in redistributed copies, but it does not require prominent attribution in your product\'s user interface. Always check the specific license text, since requirements vary between permissive licenses.',
          },
          {
            q: 'Can a model\'s license change after I\'ve already deployed it?',
            a: 'The license terms in effect when you downloaded a specific model version generally continue to apply to that version, but a vendor can change the license for future releases or updates. Keep a record of which license version applied to the exact weights you deployed.',
          },
          {
            q: 'Do license restrictions apply to fine-tuned versions of a model?',
            a: 'Usually yes — most open-weight licenses state that derivative works (including fine-tunes) inherit the same license terms and restrictions as the base model. Check the specific license\'s clause on derivative works before fine-tuning a custom-licensed model for commercial use.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Technique & Concept Explainers',
    title: 'Lizenzvergleich für Open-Weight-Modelle bei kommerzieller Nutzung',
    seoTitle: 'Lizenzvergleich für Open-Weight-Modelle | Prompt Bites',
    metaDescription:
      'Ein Vergleich von Lizenzbedingungen für Open-Weight-Modelle — freizügige Lizenzen wie Apache und MIT im Vergleich zu individuellen Anbieterlizenzen mit Nutzungsbeschränkungen und Klauseln zu Ausgaben.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und Unternehmen, die prüfen möchten, ob die Lizenz eines Open-Weight-Modells eine kommerzielle Nutzung erlaubt',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Freizügige Lizenzen wie Apache 2.0 und MIT schränken die kommerzielle Nutzung praktisch nicht ein, während mehrere Anbieter von Open-Weight-Modellen individuelle Lizenzen mit Nutzungsobergrenzen, Weitergabebeschränkungen oder Klauseln zur Einschränkung von Ausgaben verwenden.</strong> Lesen Sie immer die Lizenzdatei des jeweiligen Modells, statt anzunehmen, dass „Open-Weight" uneingeschränkte Nutzung bedeutet.',
    toc: [
      { label: 'Lizenzkategorien', anchor: '#license-categories' },
      { label: 'Was Sie vor dem kommerziellen Einsatz prüfen sollten', anchor: '#what-to-check' },
      { label: 'Häufige Lizenzklauseln', anchor: '#common-clauses' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Darf ich Open-Weight-Local-LLMs kommerziell nutzen?',
        answer:
          'Das hängt von der jeweiligen Lizenz ab. Modelle, die unter Apache 2.0 oder MIT veröffentlicht werden, dürfen praktisch ohne Einschränkung kommerziell genutzt werden. Manche Anbieter verwenden stattdessen eine individuelle Lizenz mit Bedingungen wie einer Obergrenze für monatlich aktive Nutzer oder Einschränkungen bei der Verwendung von Ausgaben zum Training konkurrierender Modelle — prüfen Sie vor dem kommerziellen Einsatz die Lizenzdatei des Modells.',
        bullets: [
          'Apache 2.0 und MIT sind freizügig — kommerzielle Nutzung ist mit minimalen Bedingungen erlaubt.',
          'Manche Anbieter verwenden individuelle Lizenzen mit Nutzungsobergrenzen oder Klauseln zur Einschränkung von Ausgaben.',
          '„Open-Weight" (die Gewichte sind herunterladbar) ist keine Garantie für eine Open-Source-Lizenz.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apache-2.0- und MIT-Lizenzen schränken die kommerzielle Nutzung praktisch nicht ein',
          'Manche Modellanbieter fügen individuelle Lizenzen mit Nutzungsobergrenzen oder Ausgabebeschränkungen hinzu',
          'Eine Obergrenze für monatlich aktive Nutzer ist ein häufiger Auslöser, der eine separate kommerzielle Vereinbarung erfordert',
          '„Open-Weight" garantiert nur herunterladbare Gewichte, keine bestimmte Lizenzfreiheit',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Freizügige Lizenzen wie Apache 2.0 und MIT erlauben die uneingeschränkte kommerzielle Nutzung von Open-Weight-Modellen, während manche Anbieter individuelle Lizenzen mit Nutzungsgrenzen verwenden.' },
          { type: 'plain-terms', text: 'Einfach gesagt: Nicht jedes herunterladbare Modell darf ohne Bedingungen kommerziell genutzt werden — prüfen Sie immer die konkrete Lizenzdatei und nicht nur die Marketingbeschreibung.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'Lizenzkategorien',
        content: [
          'Open-Weight-Modelle lassen sich grob in zwei Lizenzkategorien einteilen. Freizügige Lizenzen (Apache 2.0, MIT) schränken die kommerzielle Nutzung oder Weitergabe praktisch nicht ein — Sie können darauf aufbauende Produkte bereitstellen, verändern und verkaufen, ohne eine separate Vereinbarung mit dem Ersteller des Modells zu benötigen.',
          'Individuelle Anbieterlizenzen sind die zweite Kategorie. Diese können eine Obergrenze für monatlich aktive Nutzer enthalten, ab der eine separate kommerzielle Vereinbarung erforderlich ist, oder Klauseln, die die Verwendung von Modellausgaben zum Training eines konkurrierenden Modells einschränken. Der Begriff „Open-Weight" garantiert nur, dass die Gewichte herunterladbar sind — er sagt nichts über die damit verbundenen Lizenzbedingungen aus, sodass zwei „Open-Weight"-Modelle sehr unterschiedliche kommerzielle Verpflichtungen mit sich bringen können.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Was Sie vor dem kommerziellen Einsatz prüfen sollten',
        content: [
          'Verwenden Sie ein freizügig lizenziertes Modell (Apache 2.0, MIT), wenn Sie ohne jede Meldepflicht zur Nutzungsgröße oder separate kommerzielle Verhandlung bereitstellen möchten. Prüfen Sie eine Nutzungsgrößen-Schwelle, wenn das Modell mit einer individuellen Lizenz ausgeliefert wird — viele individuelle Lizenzen schränken nur großangelegte kommerzielle Einsätze oberhalb einer festgelegten Nutzer- oder Umsatzschwelle ein und sind für kleinere Projekte faktisch kostenlos.',
          'Achten Sie auf Klauseln zur Einschränkung von Ausgaben, wenn Sie die Ausgaben des Modells für weiteres Training verwenden möchten — manche individuellen Lizenzen verbieten ausdrücklich, generierte Ausgaben zum Training eines konkurrierenden Modells zu verwenden, was relevant ist, wenn Sie ein anderes Modell mit den Generierungen dieses Modells feinabstimmen möchten. Gehen Sie nicht davon aus, dass eine reine Forschungslizenz die Produktionsnutzung erlaubt — eine Lizenzformulierung wie „nicht kommerziell" oder „nur für Forschungszwecke" schließt den kommerziellen Einsatz vollständig aus, unabhängig davon, wie die Gewichte verteilt werden.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'Häufige Lizenzklauseln',
        content: [
          'Eine Obergrenze für monatlich aktive Nutzer (Monthly Active Users, MAU) ist eine der häufigsten individuellen Lizenzbedingungen: Unterhalb der festgelegten Schwelle verhält sich die Lizenz wie eine freizügige Lizenz; oberhalb davon ist eine separate kommerzielle Vereinbarung mit dem Anbieter erforderlich. Namensnennungspflichten sind auch bei ansonsten freizügigen Lizenzen üblich und verlangen einen Hinweis in der Dokumentation oder auf der Über-uns-Seite Ihres Produkts.',
          'Weitergabebeschränkungen begrenzen manchmal, wie Sie die Modellgewichte selbst verpacken und weitergeben dürfen, unabhängig von etwaigen Einschränkungen der damit gebauten Anwendungen. Gelegentlich treten Einsatzbereichsbeschränkungen auf, die die Nutzung des Modells in bestimmten Bereichen (etwa der Waffenentwicklung) unabhängig vom Umfang verbieten.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist ein Modell allein deshalb „Open-Source", weil die Gewichte herunterladbar sind?',
            a: 'Nicht unbedingt. Open-Source setzt bestimmte, von Standardisierungsgremien wie der Open Source Initiative definierte Lizenzfreiheiten voraus; viele „Open-Weight"-Veröffentlichungen verwenden individuelle Lizenzen, die diese Standarddefinitionen nicht erfüllen, auch wenn die Gewichtsdateien selbst frei herunterladbar sind.',
          },
          {
            q: 'Erfordert eine freizügige Lizenz wie Apache 2.0 eine Namensnennung?',
            a: 'Apache 2.0 verlangt, dass Sie den ursprünglichen Copyright-Hinweis und den Lizenztext in weitergegebenen Kopien beibehalten, schreibt aber keine auffällige Namensnennung in der Benutzeroberfläche Ihres Produkts vor. Prüfen Sie stets den konkreten Lizenztext, da sich die Anforderungen zwischen freizügigen Lizenzen unterscheiden.',
          },
          {
            q: 'Kann sich die Lizenz eines Modells ändern, nachdem ich es bereits eingesetzt habe?',
            a: 'Die Lizenzbedingungen, die zum Zeitpunkt des Downloads einer bestimmten Modellversion galten, gelten in der Regel weiterhin für diese Version, ein Anbieter kann jedoch die Lizenz für künftige Veröffentlichungen oder Aktualisierungen ändern. Halten Sie fest, welche Lizenzversion für die konkreten von Ihnen eingesetzten Gewichte galt.',
          },
          {
            q: 'Gelten Lizenzbeschränkungen auch für feinabgestimmte Versionen eines Modells?',
            a: 'In der Regel ja — die meisten Open-Weight-Lizenzen legen fest, dass abgeleitete Werke (einschließlich Feinabstimmungen) dieselben Lizenzbedingungen und Beschränkungen wie das Basismodell übernehmen. Prüfen Sie die Klausel zu abgeleiteten Werken der jeweiligen Lizenz, bevor Sie ein individuell lizenziertes Modell für die kommerzielle Nutzung feinabstimmen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Technique & Concept Explainers',
    title: 'Comparatif des licences de modèles Open-Weight pour un usage commercial',
    seoTitle: 'Comparatif des licences de modèles Open-Weight | Prompt Bites',
    metaDescription:
      "Comparatif des conditions de licence des modèles Open-Weight — licences permissives comme Apache et MIT face aux licences propriétaires personnalisées avec restrictions d'usage et clauses sur les sorties.",
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: "Développeurs et entreprises vérifiant si la licence d'un modèle Open-Weight autorise un usage commercial",
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      "<strong>Les licences permissives comme Apache 2.0 et MIT n'imposent aucune restriction significative à l'usage commercial, tandis que plusieurs éditeurs de modèles Open-Weight utilisent des licences personnalisées avec plafonds d'utilisation, limites de redistribution ou clauses restreignant les sorties.</strong> Lisez toujours le fichier de licence du modèle concerné plutôt que de supposer qu'« Open-Weight » signifie sans restriction.",
    toc: [
      { label: 'Catégories de licences', anchor: '#license-categories' },
      { label: "Ce qu'il faut vérifier avant un déploiement commercial", anchor: '#what-to-check' },
      { label: 'Clauses de licence courantes', anchor: '#common-clauses' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Puis-je utiliser des LLM locaux Open-Weight à des fins commerciales ?',
        answer:
          "Cela dépend de la licence spécifique. Les modèles publiés sous Apache 2.0 ou MIT peuvent être utilisés commercialement sans quasiment aucune restriction. Certains éditeurs utilisent plutôt une licence personnalisée avec des conditions comme un plafond d'utilisateurs actifs mensuels ou des restrictions sur l'utilisation des sorties pour entraîner des modèles concurrents — vérifiez le fichier de licence du modèle avant tout déploiement commercial.",
        bullets: [
          "Apache 2.0 et MIT sont permissives — l'usage commercial est autorisé avec des conditions minimales.",
          "Certains éditeurs utilisent des licences personnalisées avec des plafonds d'utilisation ou des clauses restreignant les sorties.",
          '« Open-Weight » (poids téléchargeables) n\'offre pas la même garantie qu\'une licence open source.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Les licences Apache 2.0 et MIT n'imposent quasiment aucune restriction à l'usage commercial",
          "Certains éditeurs de modèles ajoutent des licences personnalisées avec plafonds d'utilisation ou restrictions sur les sorties",
          "Un seuil d'utilisateurs actifs mensuels est un déclencheur courant nécessitant un accord commercial distinct",
          '« Open-Weight » garantit uniquement des poids téléchargeables, pas une liberté de licence particulière',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Les licences permissives comme Apache 2.0 et MIT autorisent un usage commercial illimité des modèles Open-Weight, tandis que certains éditeurs utilisent des licences personnalisées avec des limites d'utilisation." },
          { type: 'plain-terms', text: "En clair : tout modèle téléchargeable n'est pas forcément utilisable commercialement sans condition — vérifiez toujours le fichier de licence exact, pas seulement la description marketing." },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'Catégories de licences',
        content: [
          "Les modèles Open-Weight se répartissent globalement en deux catégories de licences. Les licences permissives (Apache 2.0, MIT) n'imposent quasiment aucune restriction à l'usage commercial ou à la redistribution — vous pouvez déployer, modifier et vendre des produits basés sur le modèle sans accord distinct avec son créateur.",
          "Les licences propriétaires personnalisées constituent la seconde catégorie. Elles peuvent inclure un seuil d'utilisateurs actifs mensuels au-delà duquel un accord commercial distinct est requis, ou des clauses restreignant l'utilisation des sorties du modèle pour entraîner un modèle concurrent. Le terme « Open-Weight » garantit uniquement que les poids sont téléchargeables — il ne dit rien des conditions de licence associées, si bien que deux modèles « Open-Weight » peuvent comporter des obligations commerciales très différentes.",
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: "Ce qu'il faut vérifier avant un déploiement commercial",
        content: [
          "Utilisez un modèle sous licence permissive (Apache 2.0, MIT) si vous devez déployer sans obligation de déclaration liée à l'échelle d'utilisation ni négociation commerciale distincte. Vérifiez l'existence d'un seuil d'échelle d'utilisation si le modèle est fourni avec une licence personnalisée — de nombreuses licences personnalisées ne restreignent que les déploiements commerciaux à grande échelle au-delà d'un seuil d'utilisateurs ou de revenus donné, et restent en pratique gratuites pour les projets plus modestes.",
          "Surveillez les clauses restreignant les sorties si vous prévoyez d'utiliser les sorties du modèle pour un entraînement ultérieur — certaines licences personnalisées interdisent explicitement d'utiliser les sorties générées pour entraîner un modèle concurrent, ce qui compte si vous prévoyez d'affiner un autre modèle à partir des générations de celui-ci. Ne supposez pas qu'une licence réservée à la recherche autorise un usage en production — une mention comme « non commercial » ou « à des fins de recherche uniquement » exclut totalement le déploiement commercial, quelle que soit la manière dont les poids sont distribués.",
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'Clauses de licence courantes',
        content: [
          "Un plafond d'utilisateurs actifs mensuels (MAU) est l'une des conditions personnalisées les plus courantes : en dessous du seuil indiqué, la licence se comporte comme une licence permissive ; au-dessus, un accord commercial distinct avec l'éditeur est requis. Les exigences d'attribution sont fréquentes même dans des licences par ailleurs permissives, imposant une mention dans la documentation ou la page « à propos » de votre produit.",
          "Les restrictions de redistribution limitent parfois la manière dont vous pouvez empaqueter et repartager les poids du modèle eux-mêmes, indépendamment de toute restriction sur les applications construites avec. Des restrictions de domaine d'usage apparaissent occasionnellement, interdisant l'utilisation du modèle dans certains domaines (comme le développement d'armements) quelle que soit l'échelle.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Un modèle est-il « open source » simplement parce que ses poids sont téléchargeables ?',
            a: "Pas nécessairement. L'open source implique des libertés de licence précises définies par des organismes comme l'Open Source Initiative ; de nombreuses publications « Open-Weight » utilisent des licences personnalisées qui n'atteignent pas ces définitions standard, même si les fichiers de poids eux-mêmes sont librement téléchargeables.",
          },
          {
            q: 'Une licence permissive comme Apache 2.0 exige-t-elle une attribution ?',
            a: "Apache 2.0 exige de conserver l'avis de copyright original et le texte de la licence dans les copies redistribuées, mais n'impose pas d'attribution visible dans l'interface utilisateur de votre produit. Vérifiez toujours le texte exact de la licence, car les exigences varient d'une licence permissive à l'autre.",
          },
          {
            q: "La licence d'un modèle peut-elle changer après son déploiement ?",
            a: "Les conditions de licence en vigueur au moment du téléchargement d'une version donnée du modèle continuent généralement de s'appliquer à cette version, mais un éditeur peut modifier la licence pour les futures versions ou mises à jour. Conservez une trace de la version de licence applicable aux poids exacts que vous avez déployés.",
          },
          {
            q: "Les restrictions de licence s'appliquent-elles aux versions affinées d'un modèle ?",
            a: "En général, oui — la plupart des licences Open-Weight précisent que les œuvres dérivées (y compris les versions affinées) héritent des mêmes conditions et restrictions de licence que le modèle de base. Vérifiez la clause relative aux œuvres dérivées de la licence concernée avant d'affiner un modèle sous licence personnalisée à des fins commerciales.",
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Technique & Concept Explainers',
    title: '商用利用のためのOpen-Weightモデルライセンス比較',
    seoTitle: 'Open-Weightモデルのライセンス比較 | Prompt Bites',
    metaDescription:
      'Open-Weightモデルのライセンス条件を比較します——ApacheやMITのような寛容なライセンスと、利用制限や出力制限条項を含むベンダー独自のカスタムライセンスの違いを解説します。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Open-Weightモデルのライセンスが商用利用を許可しているかを確認したい開発者や企業',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Apache 2.0やMITのような寛容なライセンスは商用利用に実質的な制限を課しませんが、一部のOpen-Weightモデルベンダーは利用上限、再配布制限、出力制限条項を含む独自のカスタムライセンスを採用しています。</strong>「Open-Weight」だからといって無制限に使えると思い込まず、必ずそのモデル固有のライセンスファイルを確認してください。',
    toc: [
      { label: 'ライセンスカテゴリー', anchor: '#license-categories' },
      { label: '商用導入前に確認すべきこと', anchor: '#what-to-check' },
      { label: 'よくあるライセンス条項', anchor: '#common-clauses' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'Open-WeightのローカルLLMは商用利用できますか?',
        answer:
          'それは個別のライセンスによります。Apache 2.0やMITでリリースされたモデルは、実質的に制限なく商用利用できます。一部のベンダーは代わりに、月間アクティブユーザー数の上限や、出力を競合モデルの学習に使うことへの制限といった条件を含む独自のカスタムライセンスを採用しています——商用導入前にモデルのライセンスファイルを必ず確認してください。',
        bullets: [
          'Apache 2.0とMITは寛容なライセンスで、最小限の条件で商用利用が認められています。',
          '一部のベンダーは、利用上限や出力制限条項を含む独自のカスタムライセンスを採用しています。',
          '「Open-Weight」(重みがダウンロード可能)であることは、オープンソースライセンスと同じ保証を意味しません。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apache 2.0とMITライセンスは商用利用に実質的な制限を課しません',
          '一部のモデルベンダーは、利用上限や出力制限を含む独自のカスタムライセンスを追加しています',
          '月間アクティブユーザー数のしきい値は、別途商用契約が必要になる一般的なトリガーです',
          '「Open-Weight」は重みがダウンロード可能であることのみを保証し、特定のライセンス上の自由を保証するものではありません',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Apache 2.0やMITのような寛容なライセンスはOpen-Weightモデルの無制限な商用利用を許可しますが、一部のベンダーは利用制限を伴う独自のカスタムライセンスを採用しています。' },
          { type: 'plain-terms', text: '簡単に言うと、ダウンロード可能なモデルすべてが無条件で商用利用できるわけではありません——マーケティング上の説明だけでなく、必ず個別のライセンスファイルを確認してください。' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'ライセンスカテゴリー',
        content: [
          'Open-Weightモデルは、大きく2つのライセンスカテゴリーに分類されます。寛容なライセンス(Apache 2.0、MIT)は商用利用や再配布に実質的な制限を課さず、モデル作成者と別途契約を結ばなくても、モデルを基にした製品を導入・改変・販売できます。',
          '2つ目のカテゴリーはベンダー独自のカスタムライセンスです。これには、超えると別途商用契約が必要になる月間アクティブユーザー数のしきい値や、モデルの出力を競合モデルの学習に使うことを制限する条項が含まれる場合があります。「Open-Weight」という用語が保証するのは重みがダウンロード可能であることだけで、それに付随するライセンス条件については何も保証しません。そのため、同じ「Open-Weight」モデルでも、商用利用上の義務が大きく異なることがあります。',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '商用導入前に確認すべきこと',
        content: [
          '利用規模の報告や個別の商用交渉なしに導入したい場合は、寛容なライセンス(Apache 2.0、MIT)のモデルを使用してください。モデルが独自のカスタムライセンスで提供されている場合は、利用規模のしきい値を確認してください——多くのカスタムライセンスは、定められたユーザー数や収益のしきい値を超える大規模な商用導入のみを制限しており、小規模なプロジェクトでは事実上無料で使えます。',
          'モデルの出力をさらなる学習に利用する予定がある場合は、出力制限条項に注意してください——一部のカスタムライセンスは、生成された出力を競合モデルの学習に使うことを明示的に禁止しており、このモデルの生成結果を使って別のモデルをファインチューニングする予定がある場合は特に重要です。研究専用ライセンスが本番利用を許可していると思い込まないでください——「非商用」や「研究目的限定」といったライセンス文言は、重みの配布方法にかかわらず、商用導入を完全に禁止します。',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'よくあるライセンス条項',
        content: [
          '月間アクティブユーザー数(MAU)の上限は、最も一般的なカスタムライセンス条件の一つです。定められたしきい値以下では寛容なライセンスと同様に扱われますが、それを超えるとベンダーとの別途商用契約が必要になります。それ以外は寛容なライセンスであっても、製品のドキュメントやAboutページへのクレジット表記を求める帰属表示要件が一般的に見られます。',
          '再配布制限は、モデルを使って構築したアプリケーションへの制限とは別に、モデルの重み自体をどのようにパッケージ化し再配布できるかを制限する場合があります。用途制限が設けられることもあり、規模にかかわらず、特定の分野(兵器開発など)でのモデル利用を禁止する場合があります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '重みがダウンロード可能というだけで、そのモデルは「オープンソース」と言えますか?',
            a: '必ずしもそうとは限りません。オープンソースには、Open Source Initiativeのような標準化団体が定める特定のライセンス上の自由が伴います。多くの「Open-Weight」リリースは、重みファイル自体は自由にダウンロードできても、こうした標準的な定義を満たさない独自のカスタムライセンスを採用しています。',
          },
          {
            q: 'Apache 2.0のような寛容なライセンスでも帰属表示は必要ですか?',
            a: 'Apache 2.0では、再配布するコピーに元の著作権表示とライセンス文書を保持することが求められますが、製品のユーザーインターフェース上での目立つ帰属表示までは求められません。要件は寛容なライセンスの間でも異なるため、必ず個別のライセンス文書を確認してください。',
          },
          {
            q: 'すでに導入した後で、モデルのライセンスが変更されることはありますか?',
            a: '特定のモデルバージョンをダウンロードした時点で有効だったライセンス条件は、通常そのバージョンに対して継続して適用されますが、ベンダーは今後のリリースやアップデートについてライセンスを変更できます。導入した重みに、どのライセンスバージョンが適用されていたかを記録しておいてください。',
          },
          {
            q: 'ライセンス制限は、モデルのファインチューニング版にも適用されますか?',
            a: '通常はい——ほとんどのOpen-Weightライセンスでは、派生物(ファインチューニングを含む)はベースモデルと同じライセンス条件と制限を引き継ぐと定められています。カスタムライセンスのモデルを商用目的でファインチューニングする前に、そのライセンスの派生物に関する条項を確認してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Technique & Concept Explainers',
    title: '开放权重模型商用许可对比',
    seoTitle: '开放权重模型许可对比 | Prompt Bites',
    metaDescription:
      '对比开放权重模型的许可条款——Apache、MIT 等宽松许可证与包含使用限制及输出限制条款的厂商自定义许可证。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '需要确认某个开放权重模型的许可证是否允许商用的开发者和企业',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Apache 2.0 和 MIT 等宽松许可证对商用几乎没有实质性限制,而部分开放权重模型厂商采用带使用上限、再分发限制或输出限制条款的自定义许可证。</strong>请始终查看具体模型的许可证文件,而不要假设"开放权重"就等于无限制使用。',
    toc: [
      { label: '许可证类别', anchor: '#license-categories' },
      { label: '商用部署前应检查的内容', anchor: '#what-to-check' },
      { label: '常见许可条款', anchor: '#common-clauses' },
      { label: '常见问题', anchor: '#faq' },
    ],
    quickAnswerTop: {
      zh: {
        question: '开放权重的本地大模型可以商用吗?',
        answer:
          '这取决于具体许可证。采用 Apache 2.0 或 MIT 许可证发布的模型基本上可以无限制商用。部分厂商则采用自定义许可证,附带月活跃用户数上限,或限制使用模型输出训练竞品模型等条件——部署前请务必检查该模型的许可证文件。',
        bullets: [
          'Apache 2.0 和 MIT 属于宽松许可证,商用条件极少。',
          '部分厂商采用带使用上限或输出限制条款的自定义许可证。',
          '「开放权重」(权重可下载)不等同于开源许可证的保障。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apache 2.0 和 MIT 许可证对商用几乎没有限制',
          '部分模型厂商附加带使用上限或输出限制的自定义许可证',
          '月活跃用户数阈值是触发需要单独商业协议的常见条件',
          '「开放权重」只保证权重可下载,不保证任何特定的许可自由度',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Apache 2.0 和 MIT 等宽松许可证允许开放权重模型无限制商用,而部分厂商采用带使用限制的自定义许可证。' },
          { type: 'plain-terms', text: '简单来说:并非所有可下载的模型都能无条件商用——务必查看具体许可证文件,而不只是营销说明。' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: '许可证类别',
        content: [
          '开放权重模型大致分为两类许可证。宽松许可证(Apache 2.0、MIT)对商用或再分发几乎没有限制——你可以部署、修改并出售基于该模型构建的产品,无需与模型创建者另行签订协议。',
          '厂商自定义许可证是第二类。这类许可证可能设定月活跃用户数阈值,超过阈值需另行签订商业协议,或包含限制使用模型输出训练竞品模型的条款。「开放权重」一词仅保证权重可下载——不代表其附带的许可条款内容,因此两个同为「开放权重」的模型可能承担完全不同的商用义务。',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '商用部署前应检查的内容',
        content: [
          '如果需要在无使用规模报告义务或单独商业谈判的情况下部署,请选用采用宽松许可证(Apache 2.0、MIT)的模型。若模型采用自定义许可证,请检查使用规模阈值——许多自定义许可证只限制超过指定用户数或收入阈值的大规模商用部署,对小型项目实际上是免费的。',
          '如果计划使用模型输出做进一步训练,请留意输出限制条款——部分自定义许可证明确禁止将生成输出用于训练竞品模型,如果你打算用该模型的生成结果对另一个模型做微调,这点尤其重要。不要假设仅限研究用途的许可证允许生产环境使用——「非商用」或「仅限研究目的」这类许可措辞会完全禁止商用部署,无论权重以何种方式分发。',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: '常见许可条款',
        content: [
          '月活跃用户数(MAU)上限是最常见的自定义许可条件之一:低于设定阈值时,许可证表现如同宽松许可证;超过阈值则需与厂商另行签订商业协议。署名要求即使在其他方面宽松的许可证中也很常见,要求在产品文档或关于页面中注明来源。',
          '再分发限制有时会限制你如何打包和再分享模型权重本身,这与基于权重构建的应用所受的限制是分开的。有时还会出现用途限制,禁止在特定领域(如武器开发)使用模型,无论规模大小。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '仅凭权重可下载,就能说这个模型是「开源」的吗?',
            a: '不一定。开源意味着符合 Open Source Initiative 等标准化组织所定义的特定许可自由度;许多「开放权重」发布采用的自定义许可证并未达到这些标准定义,即便权重文件本身可以自由下载。',
          },
          {
            q: '像 Apache 2.0 这样的宽松许可证需要署名吗?',
            a: 'Apache 2.0 要求在再分发的副本中保留原始版权声明和许可证文本,但不要求在产品用户界面中显著署名。请务必查看具体的许可证文本,因为不同宽松许可证之间的要求存在差异。',
          },
          {
            q: '模型部署后,其许可证是否可能发生变化?',
            a: '下载特定模型版本时生效的许可条款通常会继续适用于该版本,但厂商可以为未来的发布或更新更改许可证。请记录你所部署的具体权重适用的许可证版本。',
          },
          {
            q: '许可限制是否适用于模型的微调版本?',
            a: '通常适用——大多数开放权重许可证规定,衍生作品(包括微调版本)继承与基础模型相同的许可条款和限制。在对采用自定义许可证的模型进行商用微调前,请检查该许可证中关于衍生作品的条款。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Technique & Concept Explainers',
    title: 'Comparativa de licencias de modelos Open-Weight para uso comercial',
    seoTitle: 'Comparativa de licencias de modelos Open-Weight | Prompt Bites',
    metaDescription:
      'Una comparativa de los términos de licencia de modelos Open-Weight: licencias permisivas como Apache y MIT frente a licencias personalizadas de proveedores con restricciones de uso y cláusulas sobre las salidas.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores y empresas que quieren confirmar si la licencia de un modelo Open-Weight permite el uso comercial',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Las licencias permisivas como Apache 2.0 y MIT no imponen restricciones significativas al uso comercial, mientras que varios proveedores de modelos Open-Weight usan licencias personalizadas con límites de uso, restricciones de redistribución o cláusulas que limitan las salidas.</strong> Lee siempre el archivo de licencia del modelo específico en lugar de asumir que "Open-Weight" significa sin restricciones.',
    toc: [
      { label: 'Categorías de licencia', anchor: '#license-categories' },
      { label: 'Qué revisar antes de un despliegue comercial', anchor: '#what-to-check' },
      { label: 'Cláusulas de licencia comunes', anchor: '#common-clauses' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Puedo usar LLM locales Open-Weight con fines comerciales?',
        answer:
          'Depende de la licencia específica. Los modelos publicados bajo Apache 2.0 o MIT se pueden usar comercialmente sin apenas restricciones. Algunos proveedores usan en cambio una licencia personalizada con condiciones como un límite de usuarios activos mensuales o restricciones sobre el uso de las salidas para entrenar modelos de la competencia — revisa el archivo de licencia del modelo antes de desplegarlo comercialmente.',
        bullets: [
          'Apache 2.0 y MIT son permisivas: el uso comercial está permitido con condiciones mínimas.',
          'Algunos proveedores usan licencias personalizadas con límites de uso o cláusulas que restringen las salidas.',
          'Que un modelo sea "Open-Weight" (pesos descargables) no equivale a la garantía de una licencia open source.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Las licencias Apache 2.0 y MIT no imponen prácticamente ninguna restricción al uso comercial',
          'Algunos proveedores de modelos añaden licencias personalizadas con límites de uso o restricciones sobre las salidas',
          'Un umbral de usuarios activos mensuales es un desencadenante habitual que exige un acuerdo comercial aparte',
          '"Open-Weight" solo garantiza pesos descargables, no ninguna libertad de licencia en concreto',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Las licencias permisivas como Apache 2.0 y MIT permiten el uso comercial sin restricciones de modelos Open-Weight, mientras que algunos proveedores usan licencias personalizadas con límites de uso.' },
          { type: 'plain-terms', text: 'En términos simples: no todos los modelos descargables se pueden usar comercialmente sin condiciones — revisa siempre el archivo de licencia concreto, no solo la descripción de marketing.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'Categorías de licencia',
        content: [
          'Los modelos Open-Weight se dividen a grandes rasgos en dos categorías de licencia. Las licencias permisivas (Apache 2.0, MIT) no imponen prácticamente ninguna restricción al uso comercial o a la redistribución: puedes desplegar, modificar y vender productos basados en el modelo sin necesidad de un acuerdo aparte con quien lo creó.',
          'Las licencias personalizadas de proveedores son la segunda categoría. Pueden incluir un umbral de usuarios activos mensuales por encima del cual se requiere un acuerdo comercial aparte, o cláusulas que restringen el uso de las salidas del modelo para entrenar un modelo de la competencia. El término "Open-Weight" solo garantiza que los pesos son descargables — no dice nada sobre las condiciones de licencia asociadas, por lo que dos modelos "Open-Weight" pueden conllevar obligaciones comerciales muy distintas.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Qué revisar antes de un despliegue comercial',
        content: [
          'Usa un modelo con licencia permisiva (Apache 2.0, MIT) si necesitas desplegar sin ningún reporte de escala de uso ni negociación comercial aparte. Comprueba si existe un umbral de escala de uso si el modelo se distribuye con una licencia personalizada — muchas licencias personalizadas solo restringen despliegues comerciales a gran escala por encima de un umbral de usuarios o ingresos, y son prácticamente gratuitas para proyectos más pequeños.',
          'Presta atención a las cláusulas que restringen las salidas si planeas usar las salidas del modelo para entrenamiento adicional — algunas licencias personalizadas prohíben explícitamente usar las salidas generadas para entrenar un modelo de la competencia, algo relevante si piensas ajustar otro modelo con las generaciones de este. No asumas que una licencia solo para investigación permite su uso en producción — una frase como "no comercial" o "solo para fines de investigación" bloquea por completo el despliegue comercial, sin importar cómo se distribuyan los pesos.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'Cláusulas de licencia comunes',
        content: [
          'Un límite de usuarios activos mensuales (MAU) es una de las condiciones de licencia personalizada más habituales: por debajo del umbral indicado, la licencia se comporta como una permisiva; por encima, se requiere un acuerdo comercial aparte con el proveedor. Los requisitos de atribución son comunes incluso en licencias por lo demás permisivas, y exigen una mención en la documentación o en la página "acerca de" de tu producto.',
          'Las restricciones de redistribución a veces limitan cómo puedes empaquetar y volver a compartir los propios pesos del modelo, algo independiente de cualquier restricción sobre las aplicaciones construidas con ellos. Ocasionalmente aparecen restricciones de campo de uso, que prohíben usar el modelo en dominios específicos (como el desarrollo de armamento) sin importar la escala.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Un modelo es "open source" solo porque sus pesos se pueden descargar?',
            a: 'No necesariamente. Open source implica libertades de licencia específicas definidas por organismos de estandarización como la Open Source Initiative; muchas publicaciones "Open-Weight" usan licencias personalizadas que no llegan a cumplir esas definiciones estándar, aunque los archivos de pesos en sí se puedan descargar libremente.',
          },
          {
            q: '¿Una licencia permisiva como Apache 2.0 exige atribución?',
            a: 'Apache 2.0 exige conservar el aviso de copyright original y el texto de la licencia en las copias redistribuidas, pero no exige una atribución visible en la interfaz de usuario de tu producto. Revisa siempre el texto de licencia concreto, ya que los requisitos varían entre licencias permisivas.',
          },
          {
            q: '¿Puede cambiar la licencia de un modelo después de que ya lo haya desplegado?',
            a: 'Los términos de licencia vigentes cuando descargaste una versión concreta del modelo generalmente se siguen aplicando a esa versión, pero un proveedor puede cambiar la licencia para futuras versiones o actualizaciones. Lleva un registro de qué versión de licencia se aplicaba a los pesos exactos que desplegaste.',
          },
          {
            q: '¿Las restricciones de licencia se aplican a las versiones ajustadas (fine-tuned) de un modelo?',
            a: 'Normalmente sí — la mayoría de las licencias Open-Weight indican que los trabajos derivados (incluidos los ajustes finos) heredan las mismas condiciones y restricciones de licencia que el modelo base. Revisa la cláusula sobre trabajos derivados de la licencia concreta antes de ajustar un modelo con licencia personalizada para uso comercial.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Technique & Concept Explainers',
    title: 'Comparativo de licenças de modelos Open-Weight para uso comercial',
    seoTitle: 'Comparativo de licenças de modelos Open-Weight | Prompt Bites',
    metaDescription:
      'Um comparativo dos termos de licença de modelos Open-Weight — licenças permissivas como Apache e MIT versus licenças personalizadas de fornecedores com restrições de uso e cláusulas sobre saídas.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e empresas que querem verificar se a licença de um modelo Open-Weight permite uso comercial',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Licenças permissivas como Apache 2.0 e MIT não impõem restrição relevante ao uso comercial, enquanto vários fornecedores de modelos Open-Weight usam licenças personalizadas com limites de uso, restrições de redistribuição ou cláusulas que restringem as saídas.</strong> Sempre leia o arquivo de licença do modelo específico em vez de presumir que "Open-Weight" significa sem restrições.',
    toc: [
      { label: 'Categorias de licença', anchor: '#license-categories' },
      { label: 'O que verificar antes de um deploy comercial', anchor: '#what-to-check' },
      { label: 'Cláusulas de licença comuns', anchor: '#common-clauses' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Posso usar LLMs locais Open-Weight comercialmente?',
        answer:
          'Depende da licença específica. Modelos lançados sob Apache 2.0 ou MIT podem ser usados comercialmente com praticamente nenhuma restrição. Alguns fornecedores usam, em vez disso, uma licença personalizada com condições como um limite de usuários ativos mensais ou restrições ao uso das saídas para treinar modelos concorrentes — verifique o arquivo de licença do modelo antes de implantá-lo comercialmente.',
        bullets: [
          'Apache 2.0 e MIT são permissivas — o uso comercial é permitido com condições mínimas.',
          'Alguns fornecedores usam licenças personalizadas com limites de uso ou cláusulas que restringem as saídas.',
          '"Open-Weight" (pesos disponíveis para download) não é a mesma garantia de uma licença open source.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Licenças Apache 2.0 e MIT praticamente não restringem o uso comercial',
          'Alguns fornecedores de modelos adicionam licenças personalizadas com limites de uso ou restrições sobre as saídas',
          'Um limite de usuários ativos mensais é um gatilho comum que exige um acordo comercial separado',
          '"Open-Weight" garante apenas pesos disponíveis para download, não nenhuma liberdade de licença específica',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Licenças permissivas como Apache 2.0 e MIT permitem uso comercial irrestrito de modelos Open-Weight, enquanto alguns fornecedores usam licenças personalizadas com limites de uso.' },
          { type: 'plain-terms', text: 'Em termos simples: nem todo modelo disponível para download pode ser usado comercialmente sem condições — sempre verifique o arquivo de licença específico, não apenas a descrição de marketing.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'Categorias de licença',
        content: [
          'Os modelos Open-Weight se dividem, de forma geral, em duas categorias de licença. Licenças permissivas (Apache 2.0, MIT) praticamente não restringem o uso comercial ou a redistribuição — você pode implantar, modificar e vender produtos baseados no modelo sem um acordo separado com quem o criou.',
          'Licenças personalizadas de fornecedores formam a segunda categoria. Elas podem incluir um limite de usuários ativos mensais acima do qual é exigido um acordo comercial separado, ou cláusulas que restringem o uso das saídas do modelo para treinar um modelo concorrente. O termo "Open-Weight" garante apenas que os pesos estão disponíveis para download — não diz nada sobre os termos de licença associados a eles, então dois modelos "Open-Weight" podem ter obrigações comerciais muito diferentes.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'O que verificar antes de um deploy comercial',
        content: [
          'Use um modelo com licença permissiva (Apache 2.0, MIT) se precisar implantar sem qualquer relatório de escala de uso ou negociação comercial separada. Verifique se há um limite de escala de uso se o modelo vier com uma licença personalizada — muitas licenças personalizadas restringem apenas implantações comerciais em grande escala acima de um limite definido de usuários ou receita, e são efetivamente gratuitas para projetos menores.',
          'Fique atento a cláusulas que restringem as saídas se você planeja usar as saídas do modelo para treinamento adicional — algumas licenças personalizadas proíbem explicitamente usar as saídas geradas para treinar um modelo concorrente, o que importa se você planeja fazer fine-tuning de outro modelo com as gerações deste modelo. Não presuma que uma licença apenas para pesquisa permite uso em produção — uma frase de licença como "não comercial" ou "apenas para fins de pesquisa" bloqueia totalmente a implantação comercial, independentemente de como os pesos são distribuídos.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'Cláusulas de licença comuns',
        content: [
          'Um limite de usuários ativos mensais (MAU) é uma das condições de licença personalizada mais comuns: abaixo do limite indicado, a licença se comporta como uma permissiva; acima dele, é exigido um acordo comercial separado com o fornecedor. Exigências de atribuição são comuns mesmo em licenças por outro lado permissivas, exigindo uma menção na documentação ou na página "sobre" do seu produto.',
          'Restrições de redistribuição às vezes limitam como você pode empacotar e recompartilhar os próprios pesos do modelo, separadamente de qualquer restrição sobre as aplicações construídas com eles. Restrições de campo de uso aparecem ocasionalmente, proibindo o uso do modelo em domínios específicos (como desenvolvimento de armas), independentemente da escala.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um modelo é "open source" só porque os pesos estão disponíveis para download?',
            a: 'Não necessariamente. Open source implica liberdades de licença específicas definidas por órgãos de padronização como a Open Source Initiative; muitos lançamentos "Open-Weight" usam licenças personalizadas que não atendem a essas definições padrão, mesmo que os arquivos de pesos em si sejam livremente disponíveis para download.',
          },
          {
            q: 'Uma licença permissiva como Apache 2.0 exige atribuição?',
            a: 'A Apache 2.0 exige que você mantenha o aviso de copyright original e o texto da licença nas cópias redistribuídas, mas não exige atribuição visível na interface do seu produto. Sempre verifique o texto específico da licença, já que os requisitos variam entre licenças permissivas.',
          },
          {
            q: 'A licença de um modelo pode mudar depois que eu já o implantei?',
            a: 'Os termos de licença vigentes no momento em que você baixou uma versão específica do modelo geralmente continuam se aplicando a essa versão, mas o fornecedor pode alterar a licença para versões ou atualizações futuras. Mantenha um registro de qual versão de licença se aplicava aos pesos exatos que você implantou.',
          },
          {
            q: 'As restrições de licença se aplicam a versões com fine-tuning de um modelo?',
            a: 'Geralmente sim — a maioria das licenças Open-Weight afirma que trabalhos derivados (incluindo fine-tunings) herdam os mesmos termos e restrições de licença do modelo base. Verifique a cláusula sobre trabalhos derivados da licença específica antes de fazer fine-tuning de um modelo com licença personalizada para uso comercial.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Technique & Concept Explainers',
    title: 'مقارنة تراخيص نماذج Open-Weight للاستخدام التجاري',
    seoTitle: 'مقارنة تراخيص نماذج Open-Weight | Prompt Bites',
    metaDescription:
      'مقارنة بين شروط تراخيص نماذج Open-Weight — التراخيص المتساهلة مثل Apache وMIT مقابل التراخيص المخصصة من الموردين التي تتضمن قيود استخدام وبنود تتعلق بالمخرجات.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون والشركات الذين يتحققون مما إذا كان ترخيص نموذج Open-Weight يسمح بالاستخدام التجاري',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>لا تفرض التراخيص المتساهلة مثل Apache 2.0 وMIT أي قيود جوهرية على الاستخدام التجاري، بينما يقدّم عدد من موردي نماذج Open-Weight تراخيص مخصصة تتضمن حدودًا للاستخدام أو قيودًا على إعادة التوزيع أو بنودًا تقيّد المخرجات.</strong> اقرأ دائمًا ملف الترخيص الخاص بالنموذج المحدد بدلًا من افتراض أن "Open-Weight" تعني عدم وجود أي قيود.',
    toc: [
      { label: 'فئات التراخيص', anchor: '#license-categories' },
      { label: 'ما يجب التحقق منه قبل النشر التجاري', anchor: '#what-to-check' },
      { label: 'بنود الترخيص الشائعة', anchor: '#common-clauses' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني استخدام نماذج LLM المحلية من فئة Open-Weight تجاريًا؟',
        answer:
          'يعتمد ذلك على الترخيص المحدد. يمكن استخدام النماذج الصادرة بموجب Apache 2.0 أو MIT تجاريًا دون أي قيود تُذكر تقريبًا. يستخدم بعض الموردين بدلًا من ذلك ترخيصًا مخصصًا يتضمن شروطًا مثل حد أقصى لعدد المستخدمين النشطين شهريًا أو قيودًا على استخدام المخرجات لتدريب نماذج منافسة — تحقق من ملف ترخيص النموذج قبل نشره تجاريًا.',
        bullets: [
          'تُعد Apache 2.0 وMIT تراخيص متساهلة — الاستخدام التجاري مسموح بشروط محدودة.',
          'يستخدم بعض الموردين تراخيص مخصصة تتضمن حدودًا للاستخدام أو بنودًا تقيّد المخرجات.',
          'لا تعني عبارة "Open-Weight" (الأوزان قابلة للتنزيل) نفس ضمان ترخيص المصدر المفتوح.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تراخيص Apache 2.0 وMIT لا تفرض أي قيود تُذكر تقريبًا على الاستخدام التجاري',
          'يضيف بعض موردي النماذج تراخيص مخصصة تتضمن حدودًا للاستخدام أو قيودًا على المخرجات',
          'يُعد حد المستخدمين النشطين شهريًا محفزًا شائعًا يستلزم اتفاقية تجارية منفصلة',
          '"Open-Weight" تضمن فقط أن الأوزان قابلة للتنزيل، وليس أي حرية ترخيص محددة',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تسمح التراخيص المتساهلة مثل Apache 2.0 وMIT بالاستخدام التجاري غير المقيّد لنماذج Open-Weight، بينما يستخدم بعض الموردين تراخيص مخصصة تتضمن حدود استخدام.' },
          { type: 'plain-terms', text: 'بعبارة بسيطة: ليس كل نموذج قابل للتنزيل مجانيًا للاستخدام التجاري دون شروط — تحقق دائمًا من ملف الترخيص المحدد، لا من الوصف التسويقي فقط.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: 'فئات التراخيص',
        content: [
          'تنقسم نماذج Open-Weight بشكل عام إلى فئتين رئيسيتين من التراخيص. لا تفرض التراخيص المتساهلة (Apache 2.0، MIT) أي قيود تُذكر تقريبًا على الاستخدام التجاري أو إعادة التوزيع — يمكنك نشر المنتجات المبنية على النموذج وتعديلها وبيعها دون الحاجة إلى اتفاقية منفصلة مع منشئ النموذج.',
          'التراخيص المخصصة من الموردين هي الفئة الثانية. قد تتضمن حدًا أقصى لعدد المستخدمين النشطين شهريًا يستلزم تجاوزه إبرام اتفاقية تجارية منفصلة، أو بنودًا تقيّد استخدام مخرجات النموذج لتدريب نموذج منافس. لا تضمن عبارة "Open-Weight" سوى أن الأوزان قابلة للتنزيل — ولا تشير إلى شروط الترخيص المرتبطة بها، لذلك قد يحمل نموذجان من فئة "Open-Weight" التزامات تجارية مختلفة تمامًا.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'ما يجب التحقق منه قبل النشر التجاري',
        content: [
          'استخدم نموذجًا مرخصًا بترخيص متساهل (Apache 2.0، MIT) إذا كنت بحاجة إلى النشر دون أي إبلاغ عن حجم الاستخدام أو تفاوض تجاري منفصل. تحقق من وجود حد لحجم الاستخدام إذا كان النموذج مرفقًا بترخيص مخصص — فالعديد من التراخيص المخصصة تقتصر قيودها على عمليات النشر التجاري واسعة النطاق التي تتجاوز حدًا معينًا من المستخدمين أو الإيرادات، وتكون فعليًا مجانية للمشاريع الأصغر.',
          'انتبه لبنود تقييد المخرجات إذا كنت تخطط لاستخدام مخرجات النموذج في تدريب إضافي — تحظر بعض التراخيص المخصصة صراحةً استخدام المخرجات المولدة لتدريب نموذج منافس، وهو أمر مهم إذا كنت تخطط لضبط نموذج آخر باستخدام مخرجات هذا النموذج. لا تفترض أن الترخيص المخصص للأبحاث فقط يسمح بالاستخدام في الإنتاج — فعبارات مثل "غير تجاري" أو "لأغراض البحث فقط" تمنع النشر التجاري تمامًا، بغض النظر عن طريقة توزيع الأوزان.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: 'بنود الترخيص الشائعة',
        content: [
          'يُعد حد المستخدمين النشطين شهريًا (MAU) أحد أكثر شروط التراخيص المخصصة شيوعًا: أسفل الحد المحدد، يتصرف الترخيص كترخيص متساهل؛ وفوقه، يلزم إبرام اتفاقية تجارية منفصلة مع المورد. متطلبات نسب الفضل شائعة حتى في التراخيص المتساهلة في جوانب أخرى، وتستلزم إدراج إشارة في وثائق المنتج أو صفحة "حول".',
          'تحدّ قيود إعادة التوزيع أحيانًا من طريقة تعبئة أوزان النموذج نفسها وإعادة مشاركتها، بمعزل عن أي قيود على التطبيقات المبنية باستخدامها. تظهر أحيانًا قيود على مجال الاستخدام، تمنع استخدام النموذج في مجالات محددة (مثل تطوير الأسلحة) بغض النظر عن الحجم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يُعد النموذج "مفتوح المصدر" لمجرد أن أوزانه قابلة للتنزيل؟',
            a: 'ليس بالضرورة. يستلزم مفهوم المصدر المفتوح حريات ترخيص محددة تحددها جهات معيارية مثل Open Source Initiative؛ تستخدم العديد من إصدارات Open-Weight تراخيص مخصصة لا ترقى إلى هذه التعريفات القياسية، حتى وإن كانت ملفات الأوزان نفسها قابلة للتنزيل بحرية.',
          },
          {
            q: 'هل يتطلب ترخيص متساهل مثل Apache 2.0 نسب الفضل؟',
            a: 'يتطلب Apache 2.0 الاحتفاظ بإشعار حقوق النشر الأصلي ونص الترخيص في النسخ المُعاد توزيعها، لكنه لا يتطلب نسب فضل بارزًا في واجهة مستخدم منتجك. تحقق دائمًا من نص الترخيص المحدد، لأن المتطلبات تختلف بين التراخيص المتساهلة.',
          },
          {
            q: 'هل يمكن أن يتغير ترخيص النموذج بعد أن أكون قد نشرته بالفعل؟',
            a: 'تستمر شروط الترخيص السارية وقت تنزيل إصدار محدد من النموذج عمومًا بالتطبيق على ذلك الإصدار، لكن يمكن للمورد تغيير الترخيص للإصدارات أو التحديثات المستقبلية. احتفظ بسجل يوضح إصدار الترخيص الذي كان ساريًا على الأوزان المحددة التي نشرتها.',
          },
          {
            q: 'هل تنطبق قيود الترخيص على النسخ المضبوطة دقيقًا (fine-tuned) من النموذج؟',
            a: 'عادةً نعم — تنص معظم تراخيص Open-Weight على أن الأعمال المشتقة (بما في ذلك الضبط الدقيق) ترث نفس شروط وقيود ترخيص النموذج الأساسي. تحقق من بند الأعمال المشتقة في الترخيص المحدد قبل إجراء ضبط دقيق تجاري لنموذج مرخص برخصة مخصصة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Technique & Concept Explainers',
    title: '상업적 이용을 위한 Open-Weight 모델 라이선스 비교',
    seoTitle: 'Open-Weight 모델 라이선스 비교 | Prompt Bites',
    metaDescription:
      'Open-Weight 모델의 라이선스 조건을 비교합니다 — Apache, MIT 같은 허용적 라이선스와 사용 제한 및 출력 제한 조항이 포함된 벤더 맞춤형 라이선스를 비교합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'evergreen',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Open-Weight 모델의 라이선스가 상업적 이용을 허용하는지 확인하려는 개발자와 기업',
    siblingBites: ['best-china-compliant-local-llm', 'best-local-llm-legal-medical-privacy'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Apache 2.0, MIT와 같은 허용적 라이선스는 상업적 이용에 실질적인 제한을 두지 않지만, 일부 Open-Weight 모델 벤더는 사용 상한, 재배포 제한, 출력 제한 조항이 포함된 맞춤형 라이선스를 제공합니다.</strong> "Open-Weight"라고 해서 무제한 이용이 가능하다고 가정하지 말고, 항상 해당 모델의 라이선스 파일을 확인해야 합니다.',
    toc: [
      { label: '라이선스 범주', anchor: '#license-categories' },
      { label: '상업적 배포 전 확인 사항', anchor: '#what-to-check' },
      { label: '흔한 라이선스 조항', anchor: '#common-clauses' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'Open-Weight 로컬 LLM을 상업적으로 이용할 수 있습니까?',
        answer:
          '특정 라이선스에 따라 다릅니다. Apache 2.0 또는 MIT로 배포된 모델은 사실상 제한 없이 상업적으로 이용할 수 있습니다. 일부 벤더는 대신 월간 활성 사용자 수 상한이나, 출력을 경쟁 모델 학습에 사용하는 것을 제한하는 조건이 포함된 맞춤형 라이선스를 사용합니다 — 상업적으로 배포하기 전에 반드시 해당 모델의 라이선스 파일을 확인해야 합니다.',
        bullets: [
          'Apache 2.0과 MIT는 허용적 라이선스로, 최소한의 조건으로 상업적 이용이 가능합니다.',
          '일부 벤더는 사용 상한이나 출력 제한 조항이 포함된 맞춤형 라이선스를 사용합니다.',
          '"Open-Weight"(가중치를 다운로드할 수 있음)는 오픈소스 라이선스와 동일한 보장을 의미하지 않습니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apache 2.0과 MIT 라이선스는 상업적 이용에 사실상 제한을 두지 않습니다',
          '일부 모델 벤더는 사용 상한이나 출력 제한이 포함된 맞춤형 라이선스를 추가합니다',
          '월간 활성 사용자 수 임계값은 별도의 상업적 계약이 필요해지는 흔한 조건입니다',
          '"Open-Weight"는 가중치를 다운로드할 수 있다는 것만 보장하며, 특정 라이선스상의 자유를 보장하지는 않습니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Apache 2.0과 MIT 같은 허용적 라이선스는 Open-Weight 모델의 무제한 상업적 이용을 허용하지만, 일부 벤더는 사용 제한이 있는 맞춤형 라이선스를 사용합니다.' },
          { type: 'plain-terms', text: '쉽게 말해, 다운로드 가능한 모델이라고 해서 모두 조건 없이 상업적으로 이용할 수 있는 것은 아닙니다 — 마케팅 설명만이 아니라 항상 구체적인 라이선스 파일을 확인해야 합니다.' },
        ],
      },
      licenseCategories: {
        id: 'license-categories',
        title: '라이선스 범주',
        content: [
          'Open-Weight 모델은 크게 두 가지 라이선스 범주로 나뉩니다. 허용적 라이선스(Apache 2.0, MIT)는 상업적 이용이나 재배포에 사실상 제한을 두지 않으므로, 모델 제작자와 별도의 계약 없이도 해당 모델을 기반으로 한 제품을 배포·수정·판매할 수 있습니다.',
          '벤더 맞춤형 라이선스가 두 번째 범주입니다. 여기에는 초과 시 별도의 상업적 계약이 필요한 월간 활성 사용자 수 임계값이나, 모델 출력을 경쟁 모델 학습에 사용하는 것을 제한하는 조항이 포함될 수 있습니다. "Open-Weight"라는 용어는 가중치를 다운로드할 수 있다는 것만 보장할 뿐, 그에 수반되는 라이선스 조건에 대해서는 아무것도 말해주지 않으므로, 두 "Open-Weight" 모델이 서로 매우 다른 상업적 의무를 가질 수 있습니다.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '상업적 배포 전 확인 사항',
        content: [
          '사용 규모 보고나 별도의 상업적 협상 없이 배포해야 한다면 허용적 라이선스(Apache 2.0, MIT)를 사용하는 모델을 선택하십시오. 모델이 맞춤형 라이선스로 제공된다면 사용 규모 임계값을 확인하십시오 — 많은 맞춤형 라이선스는 정해진 사용자 수나 매출 임계값을 초과하는 대규모 상업적 배포만 제한하며, 소규모 프로젝트에는 사실상 무료입니다.',
          '모델의 출력을 추가 학습에 사용할 계획이라면 출력 제한 조항에 주의하십시오 — 일부 맞춤형 라이선스는 생성된 출력을 경쟁 모델 학습에 사용하는 것을 명시적으로 금지하며, 이 모델의 생성 결과로 다른 모델을 파인튜닝할 계획이라면 특히 중요합니다. 연구 전용 라이선스가 프로덕션 이용을 허용한다고 가정하지 마십시오 — "비상업적" 또는 "연구 목적 전용"과 같은 라이선스 문구는 가중치 배포 방식과 무관하게 상업적 배포를 완전히 막습니다.',
        ],
      },
      commonClauses: {
        id: 'common-clauses',
        title: '흔한 라이선스 조항',
        content: [
          '월간 활성 사용자(MAU) 상한은 가장 흔한 맞춤형 라이선스 조건 중 하나입니다. 명시된 임계값 이하에서는 라이선스가 허용적 라이선스처럼 작동하지만, 그 이상에서는 벤더와의 별도 상업적 계약이 필요합니다. 저작자 표시 요구는 다른 면에서는 허용적인 라이선스에서도 흔하며, 제품 문서나 소개 페이지에 출처 표기를 요구합니다.',
          '재배포 제한은 이를 기반으로 구축된 애플리케이션에 대한 제한과는 별개로, 모델 가중치 자체를 어떻게 패키징하고 재공유할 수 있는지를 제한하는 경우가 있습니다. 사용 분야 제한이 가끔 나타나기도 하는데, 규모와 무관하게 특정 분야(예: 무기 개발)에서의 모델 이용을 금지합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '가중치를 다운로드할 수 있다는 이유만으로 모델이 "오픈소스"라고 할 수 있습니까?',
            a: '반드시 그런 것은 아닙니다. 오픈소스는 Open Source Initiative와 같은 표준화 기구가 정의한 특정 라이선스상의 자유를 전제로 합니다. 많은 "Open-Weight" 배포는 가중치 파일 자체는 자유롭게 다운로드할 수 있어도, 이러한 표준 정의에 미치지 못하는 맞춤형 라이선스를 사용합니다.',
          },
          {
            q: 'Apache 2.0 같은 허용적 라이선스도 저작자 표시가 필요합니까?',
            a: 'Apache 2.0은 재배포되는 사본에 원래의 저작권 고지와 라이선스 전문을 유지할 것을 요구하지만, 제품 사용자 인터페이스에 눈에 띄는 저작자 표시를 요구하지는 않습니다. 허용적 라이선스마다 요구 사항이 다르므로 항상 구체적인 라이선스 전문을 확인해야 합니다.',
          },
          {
            q: '이미 배포한 후에 모델의 라이선스가 변경될 수 있습니까?',
            a: '특정 모델 버전을 다운로드한 시점에 유효했던 라이선스 조건은 일반적으로 해당 버전에 계속 적용되지만, 벤더는 향후 릴리스나 업데이트에 대해 라이선스를 변경할 수 있습니다. 배포한 정확한 가중치에 어떤 라이선스 버전이 적용되었는지 기록해 두어야 합니다.',
          },
          {
            q: '라이선스 제한이 모델의 파인튜닝 버전에도 적용됩니까?',
            a: '일반적으로 그렇습니다 — 대부분의 Open-Weight 라이선스는 파생물(파인튜닝 포함)이 기본 모델과 동일한 라이선스 조건과 제한을 물려받는다고 명시합니다. 맞춤형 라이선스가 적용된 모델을 상업적 목적으로 파인튜닝하기 전에 해당 라이선스의 파생물 관련 조항을 확인해야 합니다.',
          },
        ],
      },
    },
  },
}
