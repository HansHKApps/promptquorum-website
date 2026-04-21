# Privacy Policy — Complete Multilingual Translations

## Structure
All key strings for the privacy policy, translated into German (DE), French (FR), Japanese (JA), and Simplified Chinese (ZH).

These should be added to `src/translations.ts` within each language block.

---

## Translation Keys

### Common Labels & Headers

```typescript
// English (EN) — existing
privacyPolicyTitle: "Privacy Policy",
privacyBreadcrumb: "Privacy Policy",
privacyEffectiveDate: "Effective date: {{date}}",
privacyController: "Controller:",
privacyContact: "Contact:",
privacyGdprBanner: "This policy is written to comply with the EU General Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA). If you have questions or wish to exercise your rights, email {{email}} and we will respond within 30 days.",

// German (DE)
privacyPolicyTitle: "Datenschutzrichtlinie",
privacyBreadcrumb: "Datenschutzrichtlinie",
privacyEffectiveDate: "Gültig ab: {{date}}",
privacyController: "Verantwortlicher:",
privacyContact: "Kontakt:",
privacyGdprBanner: "Diese Richtlinie wurde verfasst, um die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO), der britischen DSGVO und des California Consumer Privacy Act (CCPA) zu erfüllen. Wenn Sie Fragen haben oder Ihre Rechte ausüben möchten, senden Sie eine E-Mail an {{email}} und wir werden innerhalb von 30 Tagen antworten.",

// French (FR)
privacyPolicyTitle: "Politique de confidentialité",
privacyBreadcrumb: "Politique de confidentialité",
privacyEffectiveDate: "Date d'effet: {{date}}",
privacyController: "Responsable du traitement:",
privacyContact: "Contact:",
privacyGdprBanner: "Cette politique est rédigée pour se conformer au Règlement général sur la protection des données (RGPD) de l'UE, au RGPD du Royaume-Uni et à la California Consumer Privacy Act (CCPA). Si vous avez des questions ou souhaitez exercer vos droits, envoyez un e-mail à {{email}} et nous vous répondrons dans les 30 jours.",

// Japanese (JA)
privacyPolicyTitle: "プライバシーポリシー",
privacyBreadcrumb: "プライバシーポリシー",
privacyEffectiveDate: "発効日: {{date}}",
privacyController: "データ管理者:",
privacyContact: "お問い合わせ:",
privacyGdprBanner: "本ポリシーはEU一般データ保護規則(GDPR)、UK GDPR、およびカリフォルニア州消費者プライバシー法(CCPA)に準拠するために作成されています。ご質問があるか権利を行使したい場合は、{{email}}にメールを送信してください。30日以内に対応いたします。",

// Chinese Simplified (ZH)
privacyPolicyTitle: "隐私政策",
privacyBreadcrumb: "隐私政策",
privacyEffectiveDate: "生效日期: {{date}}",
privacyController: "数据控制人:",
privacyContact: "联系方式:",
privacyGdprBanner: "本政策旨在遵守欧盟通用数据保护条例(GDPR)、英国GDPR和加州消费者隐私法(CCPA)。如您有任何疑问或希望行使您的权利,请发送电子邮件至{{email}},我们将在30天内回复。",
```

---

## Section 1: Who We Are

```typescript
// EN
privacyS1Title: "Who we are",
privacyS1Para1: "PromptQuorum (\"we\", \"us\", or \"our\") is a software product available at {{url}}. PromptQuorum is developed by Hans Kuepper (the \"data controller\" for the purposes of GDPR).",
privacyS1Para2: "We operate a multi-model AI dispatch and consensus analysis tool. The product itself processes no personal data — prompts, API keys, and AI responses are handled entirely within your browser and transmitted directly from your device to the AI providers you choose. PromptQuorum servers never receive, store, or process your prompts or API keys.",
privacyS1Para3: "This Privacy Policy covers only the personal data we collect through the PromptQuorum website — specifically the waitlist form at {{url}}.",

// DE
privacyS1Title: "Wer wir sind",
privacyS1Para1: "PromptQuorum (\"wir\", \"uns\" oder \"unser\") ist ein Softwareprodukt, das unter {{url}} verfügbar ist. PromptQuorum wird von Hans Kuepper entwickelt (der \"Verantwortliche\" im Sinne der DSGVO).",
privacyS1Para2: "Wir betreiben ein Multi-Modell-KI-Dispatch- und Konsensanalyse-Tool. Das Produkt selbst verarbeitet keine personenbezogenen Daten — Prompts, API-Schlüssel und KI-Antworten werden vollständig in Ihrem Browser verarbeitet und direkt von Ihrem Gerät an die KI-Anbieter Ihrer Wahl übertragen. PromptQuorum-Server empfangen, speichern oder verarbeiten niemals Ihre Prompts oder API-Schlüssel.",
privacyS1Para3: "Diese Datenschutzrichtlinie deckt nur die personenbezogenen Daten ab, die wir über die PromptQuorum-Website sammeln — speziell über das Wartelisten-Formular unter {{url}}.",

// FR
privacyS1Title: "Qui nous sommes",
privacyS1Para1: "PromptQuorum (\"nous\", \"nos\" ou \"notre\") est un produit logiciel disponible à {{url}}. PromptQuorum est développé par Hans Kuepper (le \"responsable du traitement\" au sens du RGPD).",
privacyS1Para2: "Nous exploitons un outil de distribution multi-IA et d'analyse de consensus. Le produit lui-même ne traite aucune donnée personnelle — les prompts, les clés API et les réponses d'IA sont entièrement traités dans votre navigateur et transmis directement de votre appareil aux fournisseurs d'IA que vous choisissez. Les serveurs PromptQuorum ne reçoivent, ne stockent ni ne traitent jamais vos prompts ou clés API.",
privacyS1Para3: "Cette politique de confidentialité ne couvre que les données personnelles que nous collectons via le site Web PromptQuorum — spécifiquement le formulaire de liste d'attente à {{url}}.",

// JA
privacyS1Title: "私たちについて",
privacyS1Para1: "PromptQuorum(「私たち」、「当社」、または「当方」)は{{url}}で利用可能なソフトウェア製品です。PromptQuorumはHans Kuepper(GDPR目的での「データ管理者」)により開発されています。",
privacyS1Para2: "私たちはマルチモデルAI配信およびコンセンサス分析ツールを運営しています。製品自体は個人データを処理しません—プロンプト、APIキー、AI応答はすべてあなたのブラウザ内で処理され、あなたのデバイスから直接あなたが選択したAIプロバイダーに送信されます。PromptQuorumサーバーはあなたのプロンプトやAPIキーを受信、保存、処理することはありません。",
privacyS1Para3: "本プライバシーポリシーは、PromptQuorumウェブサイトを通じて収集する個人データのみをカバーしています—特に{{url}}のウェイティングリストフォームです。",

// ZH
privacyS1Title: "我们是谁",
privacyS1Para1: "PromptQuorum(\"我们\"、\"本\"或\"我们的\")是在{{url}}提供的软件产品。PromptQuorum由Hans Kuepper开发(GDPR目的下的\"数据控制人\")。",
privacyS1Para2: "我们运营一个多模型AI分发和共识分析工具。该产品本身不处理任何个人数据—提示词、API密钥和AI响应完全在您的浏览器中处理,并直接从您的设备传输给您选择的AI提供商。PromptQuorum服务器绝不接收、存储或处理您的提示词或API密钥。",
privacyS1Para3: "本隐私政策仅涵盖我们通过PromptQuorum网站收集的个人数据—特别是{{url}}的候补名单表单。",
```

---

## Section 2: Data We Collect and Why

```typescript
// EN
privacyS2Title: "Data we collect and why",
privacyS2Intro: "We collect the following personal data:",
privacyS2TableCol1: "Data",
privacyS2TableCol2: "How collected",
privacyS2TableCol3: "Purpose",
privacyS2TableCol4: "Lawful basis",
privacyS2Row1Col1: "Email address",
privacyS2Row1Col2: "Waitlist form on homepage",
privacyS2Row1Col3: "Beta launch notification; product update emails",
privacyS2Row1Col4: "Consent (Art. 6(1)(a) GDPR)",
privacyS2Row2Col1: "Anonymous usage analytics",
privacyS2Row2Col2: "Google Analytics 4 (GA4) cookie",
privacyS2Row2Col3: "Understand which pages are visited; improve the site",
privacyS2Row2Col4: "Legitimate interest (Art. 6(1)(f) GDPR) — see §7",
privacyS2Closure: "We do not collect names, phone numbers, payment information, IP addresses stored beyond session-level aggregation, or any special-category data under Art. 9 GDPR.",

// DE
privacyS2Title: "Daten, die wir sammeln, und warum",
privacyS2Intro: "Wir sammeln die folgenden personenbezogenen Daten:",
privacyS2TableCol1: "Daten",
privacyS2TableCol2: "Wie gesammelt",
privacyS2TableCol3: "Zweck",
privacyS2TableCol4: "Rechtliche Grundlage",
privacyS2Row1Col1: "E-Mail-Adresse",
privacyS2Row1Col2: "Wartelisten-Formular auf der Startseite",
privacyS2Row1Col3: "Beta-Start-Benachrichtigung; Produkt-Update-E-Mails",
privacyS2Row1Col4: "Einwilligung (Art. 6(1)(a) DSGVO)",
privacyS2Row2Col1: "Anonyme Nutzungsanalytik",
privacyS2Row2Col2: "Google Analytics 4 (GA4) Cookie",
privacyS2Row2Col3: "Verstehen, welche Seiten besucht werden; Website verbessern",
privacyS2Row2Col4: "Berechtigtes Interesse (Art. 6(1)(f) DSGVO) — siehe §7",
privacyS2Closure: "Wir sammeln keine Namen, Telefonnummern, Zahlungsinformationen, IP-Adressen, die über die Aggregation auf Sitzungsebene hinaus gespeichert werden, oder spezielle Kategorien von Daten gemäß Art. 9 DSGVO.",

// FR
privacyS2Title: "Données que nous collectons et pourquoi",
privacyS2Intro: "Nous collectons les données personnelles suivantes:",
privacyS2TableCol1: "Données",
privacyS2TableCol2: "Comment collectées",
privacyS2TableCol3: "Objet",
privacyS2TableCol4: "Fondement juridique",
privacyS2Row1Col1: "Adresse e-mail",
privacyS2Row1Col2: "Formulaire de liste d'attente sur la page d'accueil",
privacyS2Row1Col3: "Notification de lancement bêta; e-mails de mise à jour des produits",
privacyS2Row1Col4: "Consentement (Art. 6(1)(a) RGPD)",
privacyS2Row2Col1: "Analytique d'utilisation anonyme",
privacyS2Row2Col2: "Cookie Google Analytics 4 (GA4)",
privacyS2Row2Col3: "Comprendre quelles pages sont visitées; améliorer le site",
privacyS2Row2Col4: "Intérêt légitime (Art. 6(1)(f) RGPD) — voir §7",
privacyS2Closure: "Nous ne collectons pas les noms, les numéros de téléphone, les informations de paiement, les adresses IP stockées au-delà de l'agrégation au niveau de la session, ou toute catégorie particulière de données en vertu de l'art. 9 RGPD.",

// JA
privacyS2Title: "収集するデータとその理由",
privacyS2Intro: "私たちは以下の個人データを収集します:",
privacyS2TableCol1: "データ",
privacyS2TableCol2: "収集方法",
privacyS2TableCol3: "目的",
privacyS2TableCol4: "法的根拠",
privacyS2Row1Col1: "メールアドレス",
privacyS2Row1Col2: "ホームページのウェイティングリストフォーム",
privacyS2Row1Col3: "ベータ版起動通知; 製品更新メール",
privacyS2Row1Col4: "同意(GDPR第6条(1)(a))",
privacyS2Row2Col1: "匿名使用分析",
privacyS2Row2Col2: "Google Analytics 4 (GA4)クッキー",
privacyS2Row2Col3: "訪問されたページを理解する; サイトを改善する",
privacyS2Row2Col4: "正当な利益(GDPR第6条(1)(f)) — §7を参照",
privacyS2Closure: "私たちは名前、電話番号、支払い情報、セッションレベルの集約を超えて保存されたIPアドレス、またはGDPR第9条の特別カテゴリーのデータを収集しません。",

// ZH
privacyS2Title: "我们收集的数据及其原因",
privacyS2Intro: "我们收集以下个人数据:",
privacyS2TableCol1: "数据",
privacyS2TableCol2: "收集方式",
privacyS2TableCol3: "用途",
privacyS2TableCol4: "法律依据",
privacyS2Row1Col1: "电子邮件地址",
privacyS2Row1Col2: "主页上的候补名单表单",
privacyS2Row1Col3: "测试版启动通知; 产品更新电子邮件",
privacyS2Row1Col4: "同意(GDPR第6条(1)(a))",
privacyS2Row2Col1: "匿名使用分析",
privacyS2Row2Col2: "Google Analytics 4 (GA4)Cookie",
privacyS2Row2Col3: "了解访问的页面; 改进网站",
privacyS2Row2Col4: "合法利益(GDPR第6条(1)(f)) — 参见§7",
privacyS2Closure: "我们不收集姓名、电话号码、付款信息、超过会话级别汇总存储的IP地址或GDPR第9条下的任何特殊类别数据。",
```

---

## Section 3: Lawful Basis for Processing

```typescript
// EN
privacyS3Title: "Lawful basis for processing",
privacyS3SubtitleConsent: "Consent — email address",
privacyS3Para1: "When you enter your email and click \"Join Waitlist\", you give us explicit consent to contact you with beta launch announcements and product updates. Consent is the lawful basis under Art. 6(1)(a) GDPR. You may withdraw consent at any time by clicking the unsubscribe link in any email we send, or by emailing {{email}}. Withdrawal of consent does not affect the lawfulness of processing before withdrawal.",
privacyS3SubtitleInterest: "Legitimate interest — analytics",
privacyS3Para2: "We use Google Analytics 4 to understand how visitors interact with the site in aggregate. We have assessed that this interest is not overridden by your interests or rights, given that: (a) we use IP anonymisation; (b) data is aggregated and not used to identify individuals; and (c) you can opt out via browser settings or the Google Analytics Opt-out Browser Add-on. If you prefer, you can email us to request we stop processing analytics data associated with your visit.",

// DE
privacyS3Title: "Rechtliche Grundlage für die Verarbeitung",
privacyS3SubtitleConsent: "Einwilligung — E-Mail-Adresse",
privacyS3Para1: "Wenn Sie Ihre E-Mail eingeben und auf \"Warteliste beitreten\" klicken, erteilen Sie uns ausdrückliche Zustimmung, Sie mit Beta-Start-Ankündigungen und Produkt-Updates zu kontaktieren. Die Einwilligung ist die rechtliche Grundlage nach Art. 6(1)(a) DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie auf den Abmeldelink in einer E-Mail klicken, die wir Ihnen senden, oder indem Sie uns unter {{email}} anschreiben. Der Widerruf der Einwilligung hat keine Auswirkungen auf die Rechtmäßigkeit der Verarbeitung vor dem Widerruf.",
privacyS3SubtitleInterest: "Berechtigtes Interesse — Analytik",
privacyS3Para2: "Wir verwenden Google Analytics 4, um zu verstehen, wie Besucher insgesamt mit der Website interagieren. Wir haben bewertet, dass dieses Interesse nicht durch Ihre Interessen oder Rechte überschrieben wird, da: (a) wir IP-Anonymisierung verwenden; (b) Daten aggregiert werden und nicht zur Identifizierung von Personen verwendet werden; und (c) Sie sich über Browser-Einstellungen oder das Google Analytics Opt-out-Browser-Add-on abmelden können. Wenn Sie möchten, können Sie uns eine E-Mail schreiben, um die Verarbeitung von Analysedaten zu Ihrem Besuch einzustellen.",

// FR
privacyS3Title: "Fondement juridique du traitement",
privacyS3SubtitleConsent: "Consentement — adresse e-mail",
privacyS3Para1: "Lorsque vous entrez votre e-mail et cliquez sur \"Rejoindre la liste d'attente\", vous nous donnez un consentement explicite pour vous contacter avec les annonces de lancement bêta et les mises à jour de produits. Le consentement est le fondement juridique en vertu de l'art. 6(1)(a) RGPD. Vous pouvez retirer votre consentement à tout moment en cliquant sur le lien de désinscription dans tout e-mail que nous vous envoyons, ou en nous envoyant un e-mail à {{email}}. Le retrait du consentement n'affecte pas la licéité du traitement avant le retrait.",
privacyS3SubtitleInterest: "Intérêt légitime — analytique",
privacyS3Para2: "Nous utilisons Google Analytics 4 pour comprendre comment les visiteurs interagissent avec le site globalement. Nous avons évalué que cet intérêt n'est pas remis en cause par vos intérêts ou vos droits, étant donné que: (a) nous utilisons l'anonymisation des adresses IP; (b) les données sont agrégées et ne sont pas utilisées pour identifier les individus; et (c) vous pouvez vous désabonner via les paramètres du navigateur ou le module complémentaire Google Analytics Opt-out. Si vous préférez, vous pouvez nous envoyer un e-mail pour demander l'arrêt du traitement des données d'analyse associées à votre visite.",

// JA
privacyS3Title: "処理の法的根拠",
privacyS3SubtitleConsent: "同意 — メールアドレス",
privacyS3Para1: "メールを入力して\"ウェイティングリストに参加\"をクリックすると、ベータ版起動アナウンスと製品更新であなたに連絡する明示的な同意を与えます。同意はGDPR第6条(1)(a)に基づく法的根拠です。あなたが送信した電子メール内の登録解除リンクをクリックするか、{{email}}にメールを送信することで、いつでも同意を撤回できます。同意の撤回は、撤回前の処理の適法性に影響しません。",
privacyS3SubtitleInterest: "正当な利益 — 分析",
privacyS3Para2: "私たちはGoogle Analytics 4を使用して、訪問者がサイトとどのようにやり取りするかを総合的に理解します。(a)IP匿名化を使用していること、(b)データが集約されており個人を特定するために使用されていないこと、および(c)ブラウザ設定またはGoogle Analytics Opt-out Browser Add-onを通じてオプトアウトできることを考慮して、この利益があなたの利益または権利によって置き換えられないと評価しました。ご希望の場合は、{{email}}にメールを送信して、あなたの訪問に関連する分析データの処理を停止するよう要求できます。",

// ZH
privacyS3Title: "处理的法律依据",
privacyS3SubtitleConsent: "同意 — 电子邮件地址",
privacyS3Para1: "当您输入电子邮件地址并点击\"加入候补名单\"时,您明确同意我们使用测试版启动公告和产品更新与您联系。同意是GDPR第6条(1)(a)下的法律依据。您可以通过点击我们发送给您的任何电子邮件中的取消订阅链接或向{{email}}发送电子邮件,随时撤回您的同意。撤回同意不影响撤回前处理的合法性。",
privacyS3SubtitleInterest: "合法利益 — 分析",
privacyS3Para2: "我们使用Google Analytics 4来总体了解访问者如何与该网站互动。我们已评估该利益不会被您的利益或权利所覆盖,原因如下:(a)我们使用IP匿名化;(b)数据被汇总,不用于识别个人;且(c)您可以通过浏览器设置或Google Analytics选择退出浏览器扩展程序进行选择退出。如果您愿意,可以向{{email}}发送电子邮件,要求我们停止处理与您访问相关的分析数据。",
```

---

## Section 4: Data Processors and Third Parties

```typescript
// EN
privacyS4Title: "Data processors and third parties",
privacyS4Intro: "We use the following third-party processors. Each is bound by a Data Processing Agreement (DPA) and GDPR-compliant data handling obligations:",
privacyS4TableCol1: "Processor",
privacyS4TableCol2: "Role",
privacyS4TableCol3: "Data shared",
privacyS4TableCol4: "Location",
privacyS4Row1Col1: "Resend (Resend Inc.)",
privacyS4Row1Col2: "Waitlist signup handler — stores subscriber email addresses and sends confirmation and launch emails on our behalf",
privacyS4Row1Col3: "Email address",
privacyS4Row1Col4: "United States",
privacyS4Row2Col1: "Google Analytics 4 (Google LLC)",
privacyS4Row2Col2: "Website analytics — anonymised aggregate usage data",
privacyS4Row2Col3: "Anonymised analytics events, no PII",
privacyS4Row2Col4: "United States",
privacyS4Closure: "We do not sell your data to any third party. We do not share your email address with advertisers.",

// DE
privacyS4Title: "Datenverarbeiter und Dritte",
privacyS4Intro: "Wir nutzen die folgenden Drittanbieter-Verarbeiter. Jeder ist an eine Datenverarbeitungsvereinbarung (DPA) und DSGVO-konforme Datenverarbeitungspflichten gebunden:",
privacyS4TableCol1: "Verarbeiter",
privacyS4TableCol2: "Rolle",
privacyS4TableCol3: "Übermittelte Daten",
privacyS4TableCol4: "Standort",
privacyS4Row1Col1: "Resend (Resend Inc.)",
privacyS4Row1Col2: "Wartelisten-Anmeldeverarbeiter — speichert E-Mail-Adressen von Abonnenten und versendet in unserem Auftrag Bestätigungs- und Start-E-Mails",
privacyS4Row1Col3: "E-Mail-Adresse",
privacyS4Row1Col4: "Vereinigte Staaten",
privacyS4Row2Col1: "Google Analytics 4 (Google LLC)",
privacyS4Row2Col2: "Website-Analytik — anonymisierte aggregierte Nutzungsdaten",
privacyS4Row2Col3: "Anonymisierte Analyticsereignisse, keine PII",
privacyS4Row2Col4: "Vereinigte Staaten",
privacyS4Closure: "Wir verkaufen Ihre Daten nicht an Dritte. Wir geben Ihre E-Mail-Adresse nicht an Werbetreibende weiter.",

// FR
privacyS4Title: "Sous-traitants et tiers",
privacyS4Intro: "Nous utilisons les sous-traitants tiers suivants. Chacun est lié par un accord de traitement des données (DPA) et des obligations de traitement des données conformes au RGPD:",
privacyS4TableCol1: "Sous-traitant",
privacyS4TableCol2: "Rôle",
privacyS4TableCol3: "Données partagées",
privacyS4TableCol4: "Localisation",
privacyS4Row1Col1: "Resend (Resend Inc.)",
privacyS4Row1Col2: "Gestionnaire d'inscription à la liste d'attente — stocke les adresses e-mail des abonnés et envoie les e-mails de confirmation et de lancement en notre nom",
privacyS4Row1Col3: "Adresse e-mail",
privacyS4Row1Col4: "États-Unis",
privacyS4Row2Col1: "Google Analytics 4 (Google LLC)",
privacyS4Row2Col2: "Analytique du site Web — données d'utilisation agrégées anonymes",
privacyS4Row2Col3: "Événements d'analyse anonymisés, aucune PII",
privacyS4Row2Col4: "États-Unis",
privacyS4Closure: "Nous ne vendons pas vos données à des tiers. Nous ne partageons pas votre adresse e-mail avec les annonceurs.",

// JA
privacyS4Title: "データ処理業者と第三者",
privacyS4Intro: "私たちは以下の第三者処理業者を使用しています。各処理業者はデータ処理契約(DPA)とGDPR準拠のデータ処理義務に拘束されています:",
privacyS4TableCol1: "処理業者",
privacyS4TableCol2: "役割",
privacyS4TableCol3: "共有データ",
privacyS4TableCol4: "所在地",
privacyS4Row1Col1: "Resend (Resend Inc.)",
privacyS4Row1Col2: "ウェイティングリストサインアップハンドラー — サブスクライバーのメールアドレスを保存し、当社の代理で確認メールと起動メールを送信します",
privacyS4Row1Col3: "メールアドレス",
privacyS4Row1Col4: "アメリカ合衆国",
privacyS4Row2Col1: "Google Analytics 4 (Google LLC)",
privacyS4Row2Col2: "ウェブサイト分析 — 匿名化された集約使用データ",
privacyS4Row2Col3: "匿名化された分析イベント、PIIなし",
privacyS4Row2Col4: "アメリカ合衆国",
privacyS4Closure: "私たちはあなたのデータを第三者に売却しません。あなたのメールアドレスを広告主と共有することはありません。",

// ZH
privacyS4Title: "数据处理人和第三方",
privacyS4Intro: "我们使用以下第三方处理人。每个都受数据处理协议(DPA)和符合GDPR的数据处理义务的约束:",
privacyS4TableCol1: "处理人",
privacyS4TableCol2: "角色",
privacyS4TableCol3: "共享的数据",
privacyS4TableCol4: "位置",
privacyS4Row1Col1: "Resend (Resend Inc.)",
privacyS4Row1Col2: "候补名单注册处理程序 — 存储订户电子邮件地址并代表我们发送确认和启动电子邮件",
privacyS4Row1Col3: "电子邮件地址",
privacyS4Row1Col4: "美利坚合众国",
privacyS4Row2Col1: "Google Analytics 4 (Google LLC)",
privacyS4Row2Col2: "网站分析 — 匿名聚合使用数据",
privacyS4Row2Col3: "匿名化分析事件,无个人身份信息",
privacyS4Row2Col4: "美利坚合众国",
privacyS4Closure: "我们不向任何第三方出售您的数据。我们不与广告商分享您的电子邮件地址。",
```

---

## Section 5: International Data Transfers

```typescript
// EN
privacyS5Title: "International data transfers",
privacyS5Intro: "Some of our processors are based in the United States. Transfers of personal data from the European Economic Area (EEA) or the United Kingdom (UK) to the United States are subject to appropriate safeguards:",
privacyS5Bullet1: "Resend: Transfer is covered by Standard Contractual Clauses (SCCs) adopted by the European Commission under GDPR Art. 46(2)(c). Resend's Data Processing Agreement is available at resend.com/legal/dpa.",
privacyS5Bullet2: "Google Analytics: Google LLC participates in the EU–US Data Privacy Framework. Transfer is additionally covered by SCCs. Google's data transfer documentation is available at business.safety.google/gdpr.",
privacyS5Closure: "You may request a copy of the applicable SCCs by emailing {{email}}.",

// DE
privacyS5Title: "Internationale Datenübertragungen",
privacyS5Intro: "Einige unserer Verarbeiter sind in den USA ansässig. Übertragungen personenbezogener Daten aus dem Europäischen Wirtschaftsraum (EWR) oder dem Vereinigten Königreich (UK) in die USA unterliegen angemessenen Schutzmaßnahmen:",
privacyS5Bullet1: "Resend: Die Übertragung wird durch Standardvertragsklauseln (SVK) abgedeckt, die von der Europäischen Kommission unter DSGVO Art. 46(2)(c) angenommen wurden. Die Datenverarbeitungsvereinbarung von Resend ist unter resend.com/legal/dpa verfügbar.",
privacyS5Bullet2: "Google Analytics: Google LLC nimmt am EU-USA-Datenschutzrahmen teil. Die Übertragung ist zusätzlich durch SVK abgedeckt. Die Datenübertragungsdokumentation von Google ist unter business.safety.google/gdpr verfügbar.",
privacyS5Closure: "Sie können eine Kopie der geltenden SVK anfordern, indem Sie {{email}} eine E-Mail senden.",

// FR
privacyS5Title: "Transferts de données internationaux",
privacyS5Intro: "Certains de nos sous-traitants sont basés aux États-Unis. Les transferts de données personnelles de l'Espace économique européen (EEE) ou du Royaume-Uni (RU) vers les États-Unis sont soumis à des garanties appropriées:",
privacyS5Bullet1: "Resend: Le transfert est couvert par les clauses contractuelles types (CCT) adoptées par la Commission européenne en vertu de l'art. 46(2)(c) du RGPD. L'accord de traitement des données de Resend est disponible à resend.com/legal/dpa.",
privacyS5Bullet2: "Google Analytics: Google LLC participe au cadre de confidentialité des données UE-États-Unis. Le transfert est également couvert par les CCT. La documentation de transfert de données de Google est disponible à business.safety.google/gdpr.",
privacyS5Closure: "Vous pouvez demander une copie des CCT applicables en envoyant un e-mail à {{email}}.",

// JA
privacyS5Title: "国際的なデータ転送",
privacyS5Intro: "私たちの処理業者の一部は米国に拠点を置いています。ヨーロッパ経済地域(EEA)または英国(UK)から米国への個人データの転送には、適切な保護措置が適用されます:",
privacyS5Bullet1: "Resend: 転送はGDPR第46条(2)(c)の下で欧州委員会により採択された標準契約条項(SCC)によってカバーされています。Resendのデータ処理契約はresend.com/legal/dpaで利用可能です。",
privacyS5Bullet2: "Google Analytics: Google LLCはEU-US Data Privacy Frameworkに参加しています。転送はさらにSCCでカバーされています。Googleのデータ転送ドキュメンテーションはbusiness.safety.google/gdprで利用可能です。",
privacyS5Closure: "{{email}}にメールを送信することで、適用されるSCCのコピーをリクエストできます。",

// ZH
privacyS5Title: "国际数据转移",
privacyS5Intro: "我们的一些处理人位于美国。从欧洲经济区(EEA)或英国(UK)向美国转移个人数据受适当的保护措施约束:",
privacyS5Bullet1: "Resend: 转移受欧盟委员会在GDPR第46条(2)(c)下采用的标准合同条款(SCC)的保护。Resend的数据处理协议可在resend.com/legal/dpa获取。",
privacyS5Bullet2: "Google Analytics: Google LLC参与欧盟-美国数据隐私框架。转移还受SCC保护。Google的数据转移文档可在business.safety.google/gdpr获取。",
privacyS5Closure: "您可以通过向{{email}}发送电子邮件来请求适用SCC的副本。",
```

---

## Section 6: Data Retention

```typescript
// EN
privacyS6Title: "Data retention",
privacyS6Para1: "We retain your email address for 24 months from the date of submission, or until you unsubscribe — whichever comes first. After this period, your email address is permanently deleted from all systems, including our email service provider's list.",
privacyS6Para2: "Anonymised Google Analytics data is retained for 14 months (the minimum configurable retention period in GA4). No personal data is retained in GA4.",
privacyS6Para3: "Resend retains transactional email logs for up to 30 days. Audience contact records (your email address and subscription status) are retained for as long as your subscription is active, or until you request deletion.",

// DE
privacyS6Title: "Datenspeicherung",
privacyS6Para1: "Wir speichern Ihre E-Mail-Adresse 24 Monate lang ab dem Einreichungsdatum oder bis zur Abmeldung — je nachdem, was zuerst eintritt. Nach diesem Zeitraum wird Ihre E-Mail-Adresse dauerhaft aus allen Systemen gelöscht, einschließlich der Liste unseres E-Mail-Dienstanbieters.",
privacyS6Para2: "Anonymisierte Google Analytics-Daten werden 14 Monate lang gespeichert (die minimale konfigurierbare Aufbewahrungsdauer in GA4). Keine personenbezogenen Daten werden in GA4 gespeichert.",
privacyS6Para3: "Resend speichert Transaktions-E-Mail-Logs bis zu 30 Tage lang. Zielgruppen-Kontaktdatensätze (Ihre E-Mail-Adresse und Ihr Abonnementstatus) werden so lange gespeichert, wie Ihr Abonnement aktiv ist, oder bis Sie die Löschung anfordern.",

// FR
privacyS6Title: "Conservation des données",
privacyS6Para1: "Nous conservons votre adresse e-mail pendant 24 mois à partir de la date de soumission, ou jusqu'à ce que vous vous désabonniez — selon ce qui se produit en premier. Après cette période, votre adresse e-mail est définitivement supprimée de tous les systèmes, y compris la liste de notre fournisseur de services de messagerie.",
privacyS6Para2: "Les données Google Analytics anonymisées sont conservées pendant 14 mois (la période minimale de conservation configurable dans GA4). Aucune donnée personnelle n'est conservée dans GA4.",
privacyS6Para3: "Resend conserve les journaux de courrier électronique transactionnel jusqu'à 30 jours. Les dossiers de contact d'audience (votre adresse e-mail et votre statut d'abonnement) sont conservés aussi longtemps que votre abonnement est actif, ou jusqu'à ce que vous demandiez la suppression.",

// JA
privacyS6Title: "データ保持",
privacyS6Para1: "提出日から24ヶ月間、またはあなたが登録を解除するまで — どちらか先に来たかに関わらず、あなたのメールアドレスを保持します。このその後、あなたのメールアドレスは、電子メールサービスプロバイダーのリストを含むすべてのシステムから完全に削除されます。",
privacyS6Para2: "匿名化されたGoogle Analyticsデータは14ヶ月間保持されます(GA4の最小設定可能保持期間)。個人データはGA4に保持されません。",
privacyS6Para3: "Resendは最大30日間トランザクションメールログを保持します。オーディエンス連絡先レコード(あなたのメールアドレスとサブスクリプションステータス)は、あなたのサブスクリプションがアクティブである限り、またはあなたが削除をリクエストするまで保持されます。",

// ZH
privacyS6Title: "数据保留",
privacyS6Para1: "从提交之日起24个月或直到您取消订阅为止(以较早者为准),我们保留您的电子邮件地址。在此期间之后,您的电子邮件地址将从所有系统(包括我们的电子邮件服务提供商列表)中永久删除。",
privacyS6Para2: "匿名Google Analytics数据保留14个月(GA4的最低可配置保留期)。GA4中不保留任何个人数据。",
privacyS6Para3: "Resend保留最多30天的事务性电子邮件日志。受众联系记录(您的电子邮件地址和订阅状态)只要您的订阅处于活跃状态就保留,或直到您请求删除。",
```

---

## Sections 7-13 (Cookies, GDPR Rights, etc.)

**Due to message length limits, I'll provide these in a follow-up response.**

### Next Steps:

1. **Copy the translations above** into your `translations.ts` file
2. **Refactor the privacy page** to use translation keys instead of hardcoded strings
3. **Add language support** via the `useLang()` hook

Would you like me to:
- ✅ Provide the remaining sections (7-13) in a follow-up?
- ✅ Show you how to refactor the privacy component to use these translations?
- ✅ Create a pull request with the full implementation?