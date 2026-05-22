import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Privacy & Security',
    title: 'Is DeepSeek GDPR Safe to Use?',
    seoTitle: 'Is DeepSeek GDPR Safe? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek API is the highest-risk LLM for GDPR: Chinese data law jurisdiction, no EU adequacy decision. DeepSeek local weights are lower risk. May 2026 update.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: ['DeepSeek R1', 'DeepSeek V3', 'DeepSeek Coder V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'DPOs, CISOs, and developers in GDPR-regulated organisations evaluating DeepSeek',
    parentArticle: '/local-llms/gdpr-llm-risk-comparison-2026',
    siblingBites: ['is-qwen-gdpr-compliant', 'can-local-llm-help-gdpr'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is DeepSeek GDPR safe to use?',
        answer: 'DeepSeek API poses the highest GDPR risk of any major LLM because servers are subject to Chinese data-access law (PIPL), there is no EU adequacy decision for China, and the Terms of Service explicitly reserve the right to share data with Chinese authorities. DeepSeek local open-weight models carry a different, lower risk profile.',
        bullets: [
          'DeepSeek API: servers in China, subject to PIPL data disclosure law — highest risk',
          'No EU adequacy decision for China: SCCs + TIA required, but TIA outcome may be unfavourable',
          'DeepSeek R1/V3 local weights (Apache 2.0): much lower risk if deployed locally without API calls',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Ist DeepSeek DSGVO-konform?', answer: 'Die DeepSeek-API stellt das höchste DSGVO-Risiko unter allen großen LLMs dar, weil Server dem chinesischen Datenzugriffsrecht (PIPL) unterliegen, keine EU-Angemessenheitsentscheidung für China besteht und die Nutzungsbedingungen ausdrücklich das Recht vorbehält, Daten mit chinesischen Behörden zu teilen. Lokale DeepSeek-Open-Weight-Modelle haben ein anderes, geringeres Risikoprofil.', bullets: ['DeepSeek-API: Server in China, PIPL-Datenweitergabepflicht — höchstes Risiko', 'Keine EU-Angemessenheitsentscheidung für China: SCC + TFA erforderlich, TFA-Ergebnis aber möglicherweise ungünstig', 'DeepSeek R1/V3 lokale Gewichte (Apache 2.0): wesentlich geringeres Risiko bei lokaler Bereitstellung ohne API-Aufrufe'], updatedDate: '2026-05' },
      fr: { question: 'DeepSeek est-il sûr au regard du RGPD ?', answer: 'L\'API DeepSeek présente le risque RGPD le plus élevé parmi les LLMs majeurs car les serveurs sont soumis à la loi chinoise d\'accès aux données (PIPL), aucune décision d\'adéquation UE n\'existe pour la Chine, et les Conditions d\'utilisation se réservent explicitement le droit de partager des données avec les autorités chinoises. Les modèles DeepSeek open-weight en local ont un profil de risque différent et plus faible.', bullets: ['API DeepSeek : serveurs en Chine, loi PIPL de divulgation — risque le plus élevé', 'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, mais résultat de l\'EIT potentiellement défavorable', 'Poids locaux DeepSeek R1/V3 (Apache 2.0) : risque beaucoup plus faible si déployés localement sans appels API'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekはGDPR的に安全ですか？', answer: 'DeepSeek APIは主要LLMの中でGDPRリスクが最も高い。理由はサーバーが中国の個人情報アクセス法（PIPL）に従属し、中国にEU十分性認定がなく、利用規約が中国当局とのデータ共有権を明示的に留保しているためです。DeepSeekのローカルオープンウェイトモデルはリスクプロファイルが異なり、より低いリスクです。', bullets: ['DeepSeek API：中国サーバー、PILPデータ開示義務あり——最高リスク', '中国のEU十分性認定なし：SCC + TIA必要、ただしTIA結果は不利になる可能性', 'DeepSeek R1/V3ローカル重み（Apache 2.0）：APIコールなしでローカル展開すれば大幅リスク低減'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek在GDPR方面安全吗？', answer: 'DeepSeek API在主要LLM中具有最高的GDPR风险，因为服务器受中国数据访问法（PIPL）管辖，中国没有欧盟充分性认定，且服务条款明确保留了与中国当局共享数据的权利。DeepSeek本地开源权重模型具有不同且更低的风险状况。', bullets: ['DeepSeek API：服务器在中国，受PIPL数据披露法约束——风险最高', '中国无欧盟充分性认定：需要SCCs + TIA，但TIA结果可能不利', 'DeepSeek R1/V3本地权重（Apache 2.0）：本地部署无API调用风险大幅降低'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API is the highest-risk LLM for GDPR use: Chinese jurisdiction, PIPL data-access law, no EU adequacy decision',
          'Standard Contractual Clauses are technically possible but a Transfer Impact Assessment for China is likely to produce an unfavourable result for sensitive data',
          'DeepSeek open-weight models (R1, V3, Coder V2) are Apache 2.0 — running them locally carries the same low risk as local Qwen or Llama',
          'For EU-regulated data: avoid the DeepSeek API; use local weights or switch to a model with EU-hosted API options',
        ],
      },
      body1: {
        title: 'Why the DeepSeek API Is High-Risk Under GDPR',
        content: [
          '<strong>Three compounding factors make the DeepSeek API the highest-risk option for GDPR-regulated data among major LLMs. First: servers are in China, meaning every API call is a GDPR Article 44 third-country transfer. Second: China has no EU adequacy decision (unlike the US, which has the EU-US Data Privacy Framework). Third: China\'s Personal Information Protection Law (PIPL) compels organisations operating in China to provide data to state authorities on request.</strong>',
          'Standard Contractual Clauses are a valid legal mechanism for transfers to China. However, post-Schrems II, organisations must also conduct a Transfer Impact Assessment evaluating whether SCCs provide real protection in practice. For China, the TIA is difficult to pass for sensitive data: PIPL overrides contractual protections, and the Chinese government can demand access. The EU\'s EDPB guidance makes clear that where supplementary measures cannot compensate for deficiencies in the destination country\'s legal framework, the transfer should not go ahead.',
          'This applies to any personal data: HR records, customer information, medical notes, legal correspondence. If your prompts contain any of this, the DeepSeek API creates regulatory exposure that SCCs alone may not cure.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API is the highest GDPR risk among major LLMs because China\'s PIPL law can override Standard Contractual Clauses and compel data disclosure to state authorities.' },
          { type: 'plain-terms', text: 'Chinese law requires companies to hand over data to the government on request, and that law can override any privacy contracts you sign. This means promising to protect EU data with DeepSeek\'s API may not be legally enforceable.' },
        ],
      },
      body2: {
        title: 'DeepSeek Local Weights — A Completely Different Risk Profile',
        content: [
          '<strong>The open-weight DeepSeek models (R1, V3, Coder V2) are a separate product from the API. They are released under Apache 2.0 and can be downloaded and run locally with no connection to DeepSeek servers.</strong> Running local weights eliminates the GDPR Article 44 transfer problem entirely — the same way local Qwen or local Llama does.',
          'Local DeepSeek R1 7B or 8B runs comfortably via Ollama on a 6–8 GB VRAM GPU. The performance is excellent: R1 is one of the strongest reasoning models available at the 7B tier. For coding tasks, DeepSeek Coder V2 is available in smaller variants.',
          'The one remaining question for local DeepSeek: model training. DeepSeek has not published full details of what data was used to train these models. For high-assurance environments (healthcare, legal, government), this uncertainty may be relevant even for local deployment. Qwen 2.5 (Alibaba/Tongyi) and Llama 4 (Meta) provide more transparency about training data provenance.',
        ],
        columns: ['Deployment', 'GDPR Risk', 'Reason', 'Recommended Action'],
        rows: [
          { 'Deployment': 'DeepSeek API', 'GDPR Risk': 'Highest', 'Reason': 'Chinese servers, PIPL, no adequacy decision', 'Recommended Action': 'Avoid for personal or sensitive data' },
          { 'Deployment': 'DeepSeek local (R1/V3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, Apache 2.0 weights', 'Recommended Action': 'Acceptable; note training-data opacity' },
          { 'Deployment': 'Qwen local (2.5/3)', 'GDPR Risk': 'Low', 'Reason': 'No transfer, Apache 2.0, published training info', 'Recommended Action': 'Recommended for data-sensitive use' },
          { 'Deployment': 'Claude / OpenAI API', 'GDPR Risk': 'Medium', 'Reason': 'US jurisdiction; EU region reduces but doesn\'t eliminate risk', 'Recommended Action': 'SCCs + DPA required; EU region preferred' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: DeepSeek and GDPR',
        faqs: [
          {
            q: 'Can I use DeepSeek API with Standard Contractual Clauses for GDPR?',
            a: 'Technically yes — you can sign SCCs with DeepSeek\'s data controller entity. However, you must also complete a Transfer Impact Assessment evaluating whether Chinese law undermines those SCCs in practice. Given China\'s PIPL obligations on data disclosure, a TIA for sensitive personal data is likely to conclude that SCCs are not sufficient. For non-personal data (code, public text), the risk is lower.',
          },
          {
            q: 'Is DeepSeek R1 the same as the DeepSeek API?',
            a: 'No. DeepSeek R1 refers to the open-weight model released on Hugging Face under Apache 2.0. The DeepSeek API (api.deepseek.com) is a separate cloud service with servers in China. The GDPR risk applies to the API, not to the weights. Running R1 locally via Ollama (<code>ollama run deepseek-r1:7b</code>) has no transfer risk.',
          },
          {
            q: 'What is the PIPL and why does it matter for GDPR?',
            a: 'China\'s Personal Information Protection Law (PIPL), effective November 2021, requires organisations operating in China to provide personal information to public security or national security authorities on request, regardless of where those organisations are headquartered. This means that DeepSeek — as a Chinese company — can be compelled to hand over data processed through its API. SCCs cannot override a mandatory disclosure obligation in the destination country\'s law. This is the core reason EU DPAs treat Chinese data transfers as high-risk.',
          },
          {
            q: 'Which LLM is safest for GDPR-regulated data?',
            a: 'For maximum GDPR safety: any local open-weight model (Qwen 2.5, Llama 4, DeepSeek R1 local) running offline with no external API calls. Among these, Qwen 2.5 and Llama 4 have more transparent training data provenance. See the <a href="/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">full GDPR LLM risk comparison</a> for a structured decision tool.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Privacy & Security',
    title: 'Ist DeepSeek DSGVO-sicher?',
    seoTitle: 'Ist DeepSeek DSGVO-sicher? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek-API hat das höchste DSGVO-Risiko aller LLMs: chinesisches Datenzugriffsrecht, keine EU-Angemessenheitsentscheidung. Lokale DeepSeek-Gewichte sind sicherer. Mai 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'Ist DeepSeek DSGVO-sicher?',
        answer: 'Die DeepSeek-API stellt das höchste DSGVO-Risiko unter den großen LLMs dar: Server unterliegen dem chinesischen Datenzugriffsrecht (PIPL), es gibt keine EU-Angemessenheitsentscheidung für China, und die Nutzungsbedingungen behalten ausdrücklich das Recht vor, Daten mit chinesischen Behörden zu teilen. Lokale DeepSeek-Open-Weight-Modelle haben ein deutlich niedrigeres Risikoprofil.',
        bullets: [
          'DeepSeek-API: Server in China, PIPL-Datenweitergabepflicht — höchstes Risiko',
          'Keine EU-Angemessenheitsentscheidung: SCC + TFA erforderlich, Ergebnis für sensible Daten wahrscheinlich ungünstig',
          'Lokale DeepSeek R1/V3 Gewichte (Apache 2.0): wesentlich geringeres Risiko ohne API-Aufrufe',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek-API hat das höchste DSGVO-Risiko: chinesische Jurisdiktion, PIPL-Datenzugriffsgesetz, keine EU-Angemessenheitsentscheidung',
          'SCC sind technisch möglich, aber eine Transferfolgenabschätzung für China wird für sensible Daten wahrscheinlich ein ungünstiges Ergebnis liefern',
          'DeepSeek-Open-Weight-Modelle (R1, V3, Coder V2) sind Apache 2.0 — lokal betrieben haben sie dasselbe geringe Risiko wie lokales Qwen oder Llama',
          'Für EU-regulierte Daten: DeepSeek-API vermeiden; lokale Gewichte nutzen oder auf ein Modell mit EU-gehosteten API-Optionen umsteigen',
        ],
      },
      body1: {
        title: 'Warum die DeepSeek-API unter der DSGVO hohes Risiko birgt',
        content: [
          '<strong>Drei kumulative Faktoren machen die DeepSeek-API zur riskantesten Option für DSGVO-regulierte Daten unter den großen LLMs. Erstens: Server befinden sich in China, was jeden API-Aufruf zu einem DSGVO-Artikel-44-Drittlandtransfer macht. Zweitens: China hat keine EU-Angemessenheitsentscheidung. Drittens: Chinas Datenschutzgesetz für personenbezogene Informationen (PIPL) verpflichtet in China tätige Organisationen, Daten auf staatliche Anfrage bereitzustellen.</strong>',
          'Standardvertragsklauseln sind ein gültiger rechtlicher Mechanismus für Transfers nach China. Nach Schrems II müssen Organisationen jedoch auch eine Transferfolgenabschätzung durchführen, die bewertet, ob SCC in der Praxis wirksamen Schutz bieten. Für China ist die TFA für sensible Daten schwer zu bestehen: PIPL überschreibt vertragliche Schutzmaßnahmen.',
          'Dies gilt für alle personenbezogenen Daten: HR-Unterlagen, Kundendaten, medizinische Notizen, rechtliche Korrespondenz. Falls Ihre Prompts derartige Daten enthalten, schafft die DeepSeek-API regulatorisches Risiko, das SCC allein möglicherweise nicht heilen kann.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die DeepSeek-API ist das höchste DSGVO-Risiko unter den großen LLMs, weil Chinas PIPL-Gesetz Standardvertragsklauseln außer Kraft setzen und staatliche Datenweitergabe erzwingen kann.' },
          { type: 'plain-terms', text: 'Das chinesische Recht verpflichtet Unternehmen, Daten auf Anfrage an die Regierung weiterzugeben, und das Gesetz kann jede Datenschutzvereinbarung außer Kraft setzen. Datenschutzversprechen mit der DeepSeek-API sind möglicherweise rechtlich nicht durchsetzbar.' },
        ],
      },
      body2: {
        title: 'Lokale DeepSeek-Gewichte — ein völlig anderes Risikoprofil',
        content: [
          '<strong>Die Open-Weight-DeepSeek-Modelle (R1, V3, Coder V2) sind ein separates Produkt von der API. Sie sind unter Apache 2.0 verfügbar und können ohne Verbindung zu DeepSeek-Servern lokal ausgeführt werden.</strong> Die Ausführung lokaler Gewichte beseitigt das DSGVO-Artikel-44-Transferproblem vollständig.',
          'Lokales DeepSeek R1 7B oder 8B läuft komfortabel über Ollama auf einer 6–8 GB VRAM GPU. R1 ist eines der stärksten Reasoning-Modelle auf dem 7B-Tier. Für Coding-Aufgaben ist DeepSeek Coder V2 in kleineren Varianten verfügbar.',
          'Die verbleibende Frage für lokales DeepSeek: Model-Training. DeepSeek hat keine vollständigen Details zu den Trainingsdaten veröffentlicht. Für hochsichere Umgebungen (Gesundheitswesen, Recht, Behörden) kann diese Unklarheit relevant sein. Qwen 2.5 und Llama 4 bieten mehr Transparenz bei der Herkunft der Trainingsdaten.',
        ],
        columns: ['Bereitstellung', 'DSGVO-Risiko', 'Begründung', 'Empfohlene Maßnahme'],
        rows: [
          { 'Bereitstellung': 'DeepSeek-API', 'DSGVO-Risiko': 'Höchstes', 'Begründung': 'Chinesische Server, PIPL, keine Angemessenheitsentscheidung', 'Empfohlene Maßnahme': 'Für personenbezogene oder sensible Daten vermeiden' },
          { 'Bereitstellung': 'DeepSeek lokal (R1/V3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, Apache-2.0-Gewichte', 'Empfohlene Maßnahme': 'Akzeptabel; Intransparenz bei Trainingsdaten beachten' },
          { 'Bereitstellung': 'Qwen lokal (2.5/3)', 'DSGVO-Risiko': 'Niedrig', 'Begründung': 'Kein Transfer, Apache 2.0, veröffentlichte Trainingsdaten-Info', 'Empfohlene Maßnahme': 'Für datensensible Nutzung empfohlen' },
          { 'Bereitstellung': 'Claude / OpenAI API', 'DSGVO-Risiko': 'Mittel', 'Begründung': 'US-Jurisdiktion; EU-Region reduziert aber eliminiert nicht das Risiko', 'Empfohlene Maßnahme': 'SCC + AVV erforderlich; EU-Region bevorzugen' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: DeepSeek und DSGVO',
        faqs: [
          {
            q: 'Kann ich die DeepSeek-API mit Standardvertragsklauseln für die DSGVO nutzen?',
            a: 'Technisch ja — Sie können SCC mit DeepSeeks Datenverantwortlichem abschließen. Sie müssen jedoch auch eine Transferfolgenabschätzung durchführen, die bewertet, ob chinesisches Recht diese SCC in der Praxis untergräbt. Angesichts der PIPL-Offenlegungspflichten wird eine TFA für sensible personenbezogene Daten wahrscheinlich zu dem Schluss kommen, dass SCC nicht ausreichen.',
          },
          {
            q: 'Was ist PIPL und warum ist es für die DSGVO relevant?',
            a: 'Chinas Datenschutzgesetz für personenbezogene Informationen (PIPL, in Kraft seit November 2021) verpflichtet in China tätige Organisationen, personenbezogene Daten auf Anfrage von Sicherheits- oder nationalen Sicherheitsbehörden bereitzustellen, unabhängig vom Firmensitz. SCC können keine obligatorische Offenlegungspflicht im Recht des Bestimmungslandes außer Kraft setzen.',
          },
          {
            q: 'Welches LLM ist für DSGVO-regulierte Daten am sichersten?',
            a: 'Für maximale DSGVO-Sicherheit: jedes lokale Open-Weight-Modell (Qwen 2.5, Llama 4, DeepSeek R1 lokal), das offline ohne externe API-Aufrufe läuft. Qwen 2.5 und Llama 4 haben transparentere Trainingsdatenherkunft. Den vollständigen Vergleich finden Sie im <a href="/de/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">vollständigen DSGVO-LLM-Risikoausblick</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Privacy & Security',
    title: 'DeepSeek est-il sûr au regard du RGPD ?',
    seoTitle: 'DeepSeek sûr pour le RGPD 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'L\'API DeepSeek est le LLM le plus risqué pour le RGPD : juridiction chinoise, PIPL, pas de décision d\'adéquation UE. Les poids locaux DeepSeek sont moins risqués. Mai 2026.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'DeepSeek est-il sûr au regard du RGPD ?',
        answer: 'L\'API DeepSeek présente le risque RGPD le plus élevé parmi les LLMs majeurs car les serveurs sont soumis à la loi chinoise d\'accès aux données (PIPL), aucune décision d\'adéquation UE n\'existe pour la Chine, et les CGU se réservent explicitement le droit de partager les données avec les autorités chinoises. Les modèles DeepSeek open-weight en local ont un profil de risque différent et plus faible.',
        bullets: [
          'API DeepSeek : serveurs en Chine, loi PIPL de divulgation — risque le plus élevé',
          'Pas de décision d\'adéquation UE pour la Chine : CCT + EIT requis, résultat potentiellement défavorable',
          'Poids DeepSeek R1/V3 en local (Apache 2.0) : risque bien plus faible sans appels API',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'API DeepSeek présente le risque RGPD le plus élevé : juridiction chinoise, loi PIPL d\'accès aux données, pas de décision d\'adéquation UE',
          'Les CCT sont techniquement possibles mais une EIT pour la Chine aboutira probablement à un résultat défavorable pour les données sensibles',
          'Les modèles open-weight DeepSeek (R1, V3, Coder V2) sont Apache 2.0 — en local, risque aussi faible que Qwen ou Llama local',
          'Pour les données réglementées UE : éviter l\'API DeepSeek ; utiliser les poids locaux ou un modèle avec des options API hébergées en UE',
        ],
      },
      body1: {
        title: 'Pourquoi l\'API DeepSeek est à haut risque sous le RGPD',
        content: [
          '<strong>Trois facteurs cumulatifs font de l\'API DeepSeek l\'option la plus risquée pour les données réglementées RGPD. Premièrement : les serveurs sont en Chine, ce qui fait de chaque appel API un transfert vers un pays tiers selon l\'Article 44 du RGPD. Deuxièmement : la Chine n\'a pas de décision d\'adéquation UE. Troisièmement : la loi chinoise PIPL contraint les organisations opérant en Chine à fournir des données aux autorités d\'État sur demande.</strong>',
          'Les CCT sont un mécanisme juridique valide pour les transferts vers la Chine. Cependant, post-Schrems II, les organisations doivent aussi conduire une EIT évaluant si les CCT fournissent une protection réelle en pratique. Pour la Chine, l\'EIT est difficile à valider pour les données sensibles : PIPL peut outrepasser les protections contractuelles.',
          'Cela s\'applique à toutes les données personnelles : dossiers RH, données clients, notes médicales, correspondance juridique. Si vos prompts contiennent ces données, l\'API DeepSeek crée une exposition réglementaire que les CCT seules peuvent ne pas résoudre.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'L\'API DeepSeek est le risque RGPD le plus élevé parmi les LLMs majeurs car la loi PIPL chinoise peut outrepasser les CCT et contraindre à divulguer des données aux autorités.' },
          { type: 'plain-terms', text: 'La loi chinoise oblige les entreprises à transmettre des données au gouvernement sur demande, et cette loi peut annuler tout contrat de confidentialité. Les promesses de protection des données UE avec l\'API DeepSeek peuvent ne pas être juridiquement opposables.' },
        ],
      },
      body2: {
        title: 'Poids locaux DeepSeek — un profil de risque totalement différent',
        content: [
          '<strong>Les modèles DeepSeek open-weight (R1, V3, Coder V2) sont un produit distinct de l\'API. Publiés sous Apache 2.0, ils peuvent être téléchargés et exécutés localement sans connexion aux serveurs DeepSeek.</strong> L\'exécution locale élimine entièrement le problème de transfert de l\'Article 44 du RGPD.',
          'DeepSeek R1 7B ou 8B en local tourne confortablement via Ollama sur un GPU 6–8 Go de VRAM. R1 est l\'un des meilleurs modèles de raisonnement disponibles au tier 7B. Pour les tâches de code, DeepSeek Coder V2 est disponible en variantes plus compactes.',
          'Question résiduelle pour DeepSeek local : la formation du modèle. DeepSeek n\'a pas publié les détails complets des données d\'entraînement. Pour les environnements à haute assurance (santé, juridique, gouvernement), cette incertitude peut être pertinente. Qwen 2.5 et Llama 4 offrent plus de transparence sur la provenance des données d\'entraînement.',
        ],
        columns: ['Déploiement', 'Risque RGPD', 'Raison', 'Action recommandée'],
        rows: [
          { 'Déploiement': 'API DeepSeek', 'Risque RGPD': 'Le plus élevé', 'Raison': 'Serveurs chinois, PIPL, pas de décision d\'adéquation', 'Action recommandée': 'Éviter pour données personnelles ou sensibles' },
          { 'Déploiement': 'DeepSeek local (R1/V3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, poids Apache 2.0', 'Action recommandée': 'Acceptable ; noter l\'opacité des données d\'entraînement' },
          { 'Déploiement': 'Qwen local (2.5/3)', 'Risque RGPD': 'Faible', 'Raison': 'Pas de transfert, Apache 2.0, info formation publiée', 'Action recommandée': 'Recommandé pour usage data-sensible' },
          { 'Déploiement': 'Claude / OpenAI API', 'Risque RGPD': 'Moyen', 'Raison': 'Juridiction US ; région UE réduit sans éliminer le risque', 'Action recommandée': 'CCT + DPA requis ; région UE préférée' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : DeepSeek et RGPD',
        faqs: [
          {
            q: 'Puis-je utiliser l\'API DeepSeek avec des CCT pour le RGPD ?',
            a: 'Techniquement oui — vous pouvez signer des CCT avec l\'entité responsable de traitement de DeepSeek. Cependant, vous devez aussi conduire une EIT évaluant si la loi chinoise compromet ces CCT en pratique. Compte tenu des obligations PIPL de divulgation de données, une EIT pour des données personnelles sensibles aboutira probablement à la conclusion que les CCT ne sont pas suffisantes.',
          },
          {
            q: 'Qu\'est-ce que PIPL et pourquoi est-ce important pour le RGPD ?',
            a: 'La loi chinoise sur la protection des informations personnelles (PIPL, en vigueur depuis novembre 2021) oblige les organisations opérant en Chine à fournir des informations personnelles aux autorités de sécurité publique ou nationale sur demande, quel que soit le siège de ces organisations. Les CCT ne peuvent pas outrepasser une obligation de divulgation obligatoire dans le droit du pays de destination.',
          },
          {
            q: 'Quel LLM est le plus sûr pour les données réglementées RGPD ?',
            a: 'Pour une sécurité RGPD maximale : tout modèle open-weight local (Qwen 2.5, Llama 4, DeepSeek R1 local) fonctionnant hors ligne sans appels API externes. Qwen 2.5 et Llama 4 ont une provenance de données d\'entraînement plus transparente. Consultez la <a href="/fr/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">comparaison complète des risques RGPD des LLMs</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Privacy & Security',
    title: 'DeepSeekはGDPR的に安全ですか？',
    seoTitle: 'DeepSeekはGDPR安全？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek APIは主要LLM中でGDPRリスクが最高：中国管轄・PIPL・EU十分性認定なし。ローカルDeepSeek重みはリスクが低い。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'DeepSeekはGDPR的に安全ですか？',
        answer: 'DeepSeek APIは主要LLMの中でGDPRリスクが最も高い。サーバーが中国の個人情報保護法（PIPL）に従属し、中国にEU十分性認定がなく、利用規約が中国当局とのデータ共有を明示的に留保しています。DeepSeekのローカルオープンウェイトモデルはリスクプロファイルが異なり、はるかに低いリスクです。',
        bullets: [
          'DeepSeek API：中国サーバー、PIPL開示義務あり——最高リスク',
          '中国のEU十分性認定なし：SCC + TIA必要、感度データへの結果は不利になる可能性',
          'DeepSeek R1/V3ローカル重み（Apache 2.0）：APIなしでローカル展開すればリスク大幅低減',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek APIはGDPRリスクが最高：中国管轄、PILPデータアクセス法、EU十分性認定なし',
          'SCCは技術的に可能だが、中国のTIAは感度データに不利な結果をもたらす可能性が高い',
          'DeepSeekオープンウェイトモデル（R1、V3、Coder V2）はApache 2.0——ローカル実行ならQwenやLlamaと同様の低リスク',
          'EU規制対象データ：DeepSeek APIを避け、ローカル重みかEUホストAPIのあるモデルに切り替える',
        ],
      },
      body1: {
        title: 'DeepSeek APIがGDPR下で高リスクな理由',
        content: [
          '<strong>3つの累積的要因がDeepSeek APIをGDPR規制データに対して最もリスクの高い主要LLMにしています。第一：サーバーが中国にあり、すべてのAPI呼び出しがGDPR第44条の第三国転送になります。第二：中国はEU十分性認定を取得していません。第三：中国の個人情報保護法（PIPL）は中国で事業を行う組織に国家要求時のデータ提供を義務付けています。</strong>',
          '中国への転送にはSCCが有効な法的手段です。ただしPost-Schrems II以降、組織はSCCが実際に保護を提供するかどうかを評価するTIAも実施する必要があります。中国では、PILPが契約上の保護を覆すことができるため、感度データについてTIAをパスすることは困難です。',
          'これはすべての個人データ（HR記録、顧客情報、医療ノート、法的書類）に適用されます。プロンプトにこれらのデータが含まれている場合、DeepSeek APIはSCCだけでは解決できない規制上のリスクを生じさせます。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek APIは主要LLM中でGDPRリスクが最高です。中国のPIPL法がSCCを覆し、当局へのデータ開示を強制できるためです。' },
          { type: 'plain-terms', text: '中国の法律は政府の要求に応じてデータを引き渡すことを企業に義務付けており、この法律はあらゆるプライバシー契約を無効にできます。DeepSeek APIでのEUデータ保護の約束は法的に執行できない可能性があります。' },
        ],
      },
      body2: {
        title: 'ローカルDeepSeek重み——まったく異なるリスクプロファイル',
        content: [
          '<strong>DeepSeekオープンウェイトモデル（R1、V3、Coder V2）はAPIとは別製品です。Apache 2.0でリリースされており、DeepSeekサーバーへの接続なしにローカル実行できます。</strong>ローカル重みの実行はGDPR第44条の転送問題を完全に排除します——ローカルQwenやLlamaと同様です。',
          'ローカルDeepSeek R1 7BまたはBは6〜8 GB VRAM GPUでOllama経由で快適に動作します。R1は7Bティアで最高の推論モデルの一つです。コーディングタスクにはDeepSeek Coder V2の小型バリアントが利用可能です。',
          'ローカルDeepSeekの残る問題：モデル訓練。DeepSeekは訓練データの詳細を完全には公開していません。医療・法務・政府などの高保証環境では、この不確実性はローカル展開でも関連性を持つ場合があります。Qwen 2.5とLlama 4は訓練データの出所についてより透明です。',
        ],
        columns: ['展開方法', 'GDPRリスク', '理由', '推奨アクション'],
        rows: [
          { '展開方法': 'DeepSeek API', 'GDPRリスク': '最高', '理由': '中国サーバー、PIPL、十分性認定なし', '推奨アクション': '個人・機密データには使用を避ける' },
          { '展開方法': 'DeepSeek ローカル（R1/V3）', 'GDPRリスク': '低', '理由': '転送なし、Apache 2.0重み', '推奨アクション': '許容可能；訓練データの不透明性に注意' },
          { '展開方法': 'Qwen ローカル（2.5/3）', 'GDPRリスク': '低', '理由': '転送なし、Apache 2.0、訓練情報公開済み', '推奨アクション': 'データ機密用途に推奨' },
          { '展開方法': 'Claude / OpenAI API', 'GDPRリスク': '中', '理由': 'US管轄；EUリージョンはリスクを軽減するが排除しない', '推奨アクション': 'SCC + DPA必要；EUリージョン推奨' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'DeepSeekとGDPRに関するよくある質問',
        faqs: [
          {
            q: 'GDPRのためにSCCでDeepSeek APIを使用できますか？',
            a: '技術的には可能です——DeepSeekのデータ管理者エンティティとSCCを締結できます。ただし、中国法がそれらのSCCを実際に損なうかどうかを評価するTIAも実施する必要があります。PILPのデータ開示義務を考えると、感度個人データのTIAはSCCが不十分との結論を出す可能性が高いです。',
          },
          {
            q: 'PILPとは何ですか？なぜGDPRにとって重要ですか？',
            a: '中国の個人情報保護法（PIPL、2021年11月施行）は、中国で事業を行う組織に対し、本社所在地に関わらず、公安や国家安全保障当局の要求に応じて個人情報を提供することを義務付けています。SCCは転送先国の法律における必須開示義務を覆すことができません。',
          },
          {
            q: 'GDPR規制対象データに最も安全なLLMはどれですか？',
            a: 'GDPR最大安全を求めるなら：外部APIなしでオフライン動作するローカルオープンウェイトモデル（Qwen 2.5、Llama 4、DeepSeek R1ローカル）。Qwen 2.5とLlama 4は訓練データの出所が透明です。構造化された決定ツールについては<a href="/ja/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLMリスク比較全文</a>を参照してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Privacy & Security',
    title: 'DeepSeek在GDPR方面安全吗？',
    seoTitle: 'DeepSeek符合GDPR安全标准吗？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'DeepSeek API是GDPR风险最高的LLM：中国数据访问法管辖，无欧盟充分性认定。本地DeepSeek权重风险较低。2026年5月更新。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: 'DeepSeek在GDPR方面安全吗？',
        answer: 'DeepSeek API在主要LLM中具有最高的GDPR风险，因为服务器受中国数据访问法（PIPL）管辖，中国没有欧盟充分性认定，且服务条款明确保留了与中国当局共享数据的权利。DeepSeek本地开源权重模型具有完全不同且更低的风险状况。',
        bullets: [
          'DeepSeek API：服务器在中国，受PIPL数据披露法约束——风险最高',
          '中国无欧盟充分性认定：需要SCCs + TIA，敏感数据结果可能不利',
          'DeepSeek R1/V3本地权重（Apache 2.0）：无API调用本地部署风险大幅降低',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'DeepSeek API的GDPR风险最高：中国管辖、PIPL数据访问法、无欧盟充分性认定',
          'SCCs在技术上可行，但针对中国的TIA对敏感数据可能产生不利结果',
          'DeepSeek开源权重模型（R1、V3、Coder V2）为Apache 2.0——本地运行风险与本地Qwen或Llama一样低',
          '对于欧盟监管数据：避免使用DeepSeek API；使用本地权重或切换到有欧盟托管API选项的模型',
        ],
      },
      body1: {
        title: 'DeepSeek API在GDPR下高风险的原因',
        content: [
          '<strong>三个叠加因素使DeepSeek API成为GDPR监管数据中主要LLM里风险最高的选择。第一：服务器在中国，使每次API调用都成为GDPR第44条的第三国传输。第二：中国没有欧盟充分性认定。第三：中国个人信息保护法（PIPL）要求在中国运营的组织在国家要求时提供数据。</strong>',
          '标准合同条款是向中国传输的有效法律机制。但Post-Schrems II之后，组织还必须进行传输影响评估，评估SCCs是否在实践中提供真正保护。对于中国，感度数据的TIA很难通过：PIPL可以覆盖合同保护。',
          '这适用于所有个人数据：HR记录、客户信息、医疗笔记、法律文件。如果您的提示词包含这些数据，DeepSeek API会产生SCCs单独可能无法解决的监管风险。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'DeepSeek API是主要LLM中GDPR风险最高的，因为中国PIPL法律可以覆盖标准合同条款并强制向当局披露数据。' },
          { type: 'plain-terms', text: '中国法律要求企业在政府要求时交出数据，这项法律可以使任何隐私合同失效。使用DeepSeek API保护欧盟数据的承诺可能在法律上无法执行。' },
        ],
      },
      body2: {
        title: '本地DeepSeek权重——完全不同的风险状况',
        content: [
          '<strong>DeepSeek开源权重模型（R1、V3、Coder V2）与API是完全不同的产品。它们以Apache 2.0发布，可以在不连接DeepSeek服务器的情况下本地下载和运行。</strong>本地运行权重完全消除了GDPR第44条的传输问题——与本地Qwen或Llama相同。',
          '本地DeepSeek R1 7B或8B通过Ollama在6-8 GB VRAM GPU上运行流畅。R1是7B层级最强的推理模型之一。对于编程任务，DeepSeek Coder V2有更小的变体可用。',
          '本地DeepSeek的剩余问题：模型训练。DeepSeek没有公布训练数据的完整细节。对于高保证环境（医疗、法律、政府），即使是本地部署，这种不确定性也可能相关。Qwen 2.5和Llama 4在训练数据来源方面更透明。',
        ],
        columns: ['部署方式', 'GDPR风险', '原因', '推荐操作'],
        rows: [
          { '部署方式': 'DeepSeek API', 'GDPR风险': '最高', '原因': '中国服务器、PIPL、无充分性认定', '推荐操作': '个人或敏感数据应避免使用' },
          { '部署方式': 'DeepSeek本地（R1/V3）', 'GDPR风险': '低', '原因': '无传输，Apache 2.0权重', '推荐操作': '可接受；注意训练数据不透明' },
          { '部署方式': 'Qwen本地（2.5/3）', 'GDPR风险': '低', '原因': '无传输，Apache 2.0，已公布训练信息', '推荐操作': '推荐用于数据敏感用途' },
          { '部署方式': 'Claude / OpenAI API', 'GDPR风险': '中', '原因': '美国管辖；欧盟区域降低但不消除风险', '推荐操作': '需要SCCs + DPA；优选欧盟区域' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'DeepSeek与GDPR快速解答',
        faqs: [
          {
            q: '我可以用标准合同条款在GDPR下使用DeepSeek API吗？',
            a: '技术上可以——您可以与DeepSeek的数据控制实体签署SCCs。但您还必须进行TIA，评估中国法律是否在实践中损害了这些SCCs。鉴于PIPL的数据披露义务，针对敏感个人数据的TIA很可能得出SCCs不足的结论。对于非个人数据（代码、公开文本），风险较低。',
          },
          {
            q: 'PIPL是什么？为什么对GDPR重要？',
            a: '中国个人信息保护法（PIPL，2021年11月生效）要求在中国运营的组织在公安或国家安全机关要求时提供个人信息，无论这些组织总部在哪里。SCCs无法覆盖目的地国法律中的强制披露义务。这就是欧盟DPA将中国数据传输视为高风险的核心原因。',
          },
          {
            q: 'GDPR监管数据最安全的LLM是哪个？',
            a: '最大GDPR安全性：任何无外部API调用、离线运行的本地开源权重模型（Qwen 2.5、Llama 4、DeepSeek R1本地）。Qwen 2.5和Llama 4的训练数据来源更透明。结构化决策工具请参阅<a href="/zh/local-llms/gdpr-llm-risk-comparison-2026" class="text-primary hover:underline">GDPR LLM风险完整对比</a>。',
          },
        ],
      },
    },
  },
}
