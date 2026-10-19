import type { Language } from '@/lib/blog/blogContent'

export interface SecuritySection {
  heading: string
  /** Paragraphs. Tokens: {privacy} {impressum} {email} become links; `code` becomes a code span. */
  paragraphs: string[]
}

export interface SecurityContent {
  metaTitle: string
  metaDescription: string
  home: string
  breadcrumb: string
  h1: string
  subtitle: string
  privacyLabel: string
  impressumLabel: string
  sections: SecuritySection[]
}

export const SECURITY_EMAIL = 'hello@promptquorum.com'

export const securityContent: Record<Language, SecurityContent> = {
  en: {
    metaTitle: 'Security & Data Handling | PromptQuorum',
    metaDescription:
      'How PromptQuorum handles prompts, API keys and website data: browser-side processing, direct provider calls, named processors and how to report a vulnerability.',
    home: 'PromptQuorum',
    breadcrumb: 'Security',
    h1: 'Security & data handling',
    subtitle: 'What PromptQuorum does with your prompts, API keys and website data, and how to report a problem.',
    privacyLabel: 'Privacy Policy',
    impressumLabel: 'Impressum',
    sections: [
      {
        heading: 'In short',
        paragraphs: [
          'PromptQuorum does not host or run any AI models and has no server that receives your prompts or API keys. Requests go from your device directly to the AI providers you choose.',
        ],
      },
      {
        heading: 'Prompts and AI responses',
        paragraphs: [
          "Prompts and responses are handled in your browser and sent straight from your device to the provider you selected (for example OpenAI, Anthropic or Google). They do not pass through PromptQuorum servers. What each provider does with that data is governed by the provider's own terms and privacy policy. Local models you run yourself stay on your machine.",
        ],
      },
      {
        heading: 'API keys',
        paragraphs: [
          "You bring your own keys. They are stored only in your browser's localStorage and are used for direct calls to your chosen provider. PromptQuorum servers never receive or transmit them. localStorage is not encrypted storage: anyone with access to your browser profile or device, or malicious software or browser extensions running on it, could read it. Use provider keys with spending limits, and revoke a key at the provider if you suspect exposure.",
        ],
      },
      {
        heading: 'What the website itself processes',
        paragraphs: [
          'The website and its public MCP server process a small amount of personal data: hosting and server logs, cookie-consent records, rate-limiting hashes and an optional pseudonymous MCP profile. We collect no payment data. The full list, purposes, lawful bases and processors (including their locations) are in the {privacy}.',
          'Website analytics (Umami and Microsoft Clarity) run in cookieless mode.',
        ],
      },
      {
        heading: 'Responsible party and GDPR',
        paragraphs: [
          'The data controller is Hans Kuepper, Germany (see the {impressum}). You can request access, correction or deletion of your data, or withdraw consent, at any time by emailing the address below. MCP profiles can also be viewed and deleted with the `my_profile` and `forget_me` tools.',
        ],
      },
      {
        heading: 'Report a vulnerability',
        paragraphs: [
          'If you find a security issue, email {email} with enough detail to reproduce it. Please give us reasonable time to fix it before disclosing it publicly. We do not run a paid bug-bounty programme.',
        ],
      },
    ],
  },
  de: {
    metaTitle: 'Sicherheit & Datenverarbeitung | PromptQuorum',
    metaDescription:
      'Wie PromptQuorum mit Prompts, API-Schlüsseln und Website-Daten umgeht: Verarbeitung im Browser, direkte Anbieteraufrufe, benannte Auftragsverarbeiter und Meldung von Schwachstellen.',
    home: 'PromptQuorum',
    breadcrumb: 'Sicherheit',
    h1: 'Sicherheit & Datenverarbeitung',
    subtitle: 'Was PromptQuorum mit Ihren Prompts, API-Schlüsseln und Website-Daten macht – und wie Sie ein Problem melden.',
    privacyLabel: 'Datenschutzerklärung',
    impressumLabel: 'Impressum',
    sections: [
      {
        heading: 'Kurz gesagt',
        paragraphs: [
          'PromptQuorum hostet und betreibt keine KI-Modelle und hat keinen Server, der Ihre Prompts oder API-Schlüssel empfängt. Anfragen gehen direkt von Ihrem Gerät an die von Ihnen gewählten KI-Anbieter.',
        ],
      },
      {
        heading: 'Prompts und KI-Antworten',
        paragraphs: [
          'Prompts und Antworten werden in Ihrem Browser verarbeitet und direkt von Ihrem Gerät an den ausgewählten Anbieter gesendet (zum Beispiel OpenAI, Anthropic oder Google). Sie laufen nicht über PromptQuorum-Server. Was der jeweilige Anbieter mit diesen Daten tut, richtet sich nach dessen eigenen Nutzungsbedingungen und Datenschutzhinweisen. Lokale Modelle, die Sie selbst betreiben, verbleiben auf Ihrem Rechner.',
        ],
      },
      {
        heading: 'API-Schlüssel',
        paragraphs: [
          'Sie verwenden Ihre eigenen Schlüssel. Sie werden ausschließlich im localStorage Ihres Browsers gespeichert und für direkte Aufrufe an den von Ihnen gewählten Anbieter genutzt. PromptQuorum-Server empfangen oder übertragen sie nie. localStorage ist kein verschlüsselter Speicher: Wer Zugriff auf Ihr Browserprofil oder Ihr Gerät hat, oder Schadsoftware bzw. Browser-Erweiterungen, die dort laufen, könnten ihn auslesen. Verwenden Sie Anbieter-Schlüssel mit Ausgabenlimit und widerrufen Sie einen Schlüssel beim Anbieter, wenn Sie eine Offenlegung vermuten.',
        ],
      },
      {
        heading: 'Was die Website selbst verarbeitet',
        paragraphs: [
          'Die Website und ihr öffentlicher MCP-Server verarbeiten wenige personenbezogene Daten: Hosting- und Server-Logs, Cookie-Einwilligungsnachweise, Hashwerte zur Anfragebegrenzung und ein optionales pseudonymes MCP-Profil. Zahlungsdaten erheben wir nicht. Die vollständige Liste, Zwecke, Rechtsgrundlagen und Auftragsverarbeiter (einschließlich ihrer Standorte) finden Sie in der {privacy}.',
          'Die Website-Analyse (Umami und Microsoft Clarity) läuft im cookielosen Modus.',
        ],
      },
      {
        heading: 'Verantwortlicher und DSGVO',
        paragraphs: [
          'Verantwortlicher ist Hans Kuepper, Deutschland (siehe {impressum}). Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen oder Ihre Einwilligung widerrufen, indem Sie an die unten genannte Adresse schreiben. MCP-Profile können Sie außerdem mit den Tools `my_profile` und `forget_me` einsehen und löschen.',
        ],
      },
      {
        heading: 'Schwachstelle melden',
        paragraphs: [
          'Wenn Sie ein Sicherheitsproblem finden, schreiben Sie an {email} und beschreiben Sie es so, dass wir es nachvollziehen können. Bitte geben Sie uns angemessene Zeit zur Behebung, bevor Sie es öffentlich machen. Ein bezahltes Bug-Bounty-Programm betreiben wir nicht.',
        ],
      },
    ],
  },
  fr: {
    metaTitle: 'Sécurité et traitement des données | PromptQuorum',
    metaDescription:
      "Comment PromptQuorum traite les prompts, les clés API et les données du site : traitement dans le navigateur, appels directs aux fournisseurs, sous-traitants nommés et signalement d'une vulnérabilité.",
    home: 'PromptQuorum',
    breadcrumb: 'Sécurité',
    h1: 'Sécurité et traitement des données',
    subtitle: 'Ce que PromptQuorum fait de vos prompts, de vos clés API et des données du site, et comment signaler un problème.',
    privacyLabel: 'Politique de confidentialité',
    impressumLabel: 'Impressum (mentions légales)',
    sections: [
      {
        heading: 'En bref',
        paragraphs: [
          "PromptQuorum n'héberge ni n'exécute aucun modèle d'IA et ne dispose d'aucun serveur qui reçoit vos prompts ou vos clés API. Les requêtes partent directement de votre appareil vers les fournisseurs d'IA que vous choisissez.",
        ],
      },
      {
        heading: "Prompts et réponses de l'IA",
        paragraphs: [
          "Les prompts et les réponses sont traités dans votre navigateur et envoyés directement de votre appareil au fournisseur sélectionné (par exemple OpenAI, Anthropic ou Google). Ils ne transitent pas par les serveurs de PromptQuorum. Ce que chaque fournisseur fait de ces données relève de ses propres conditions d'utilisation et de sa politique de confidentialité. Les modèles locaux que vous exécutez vous-même restent sur votre machine.",
        ],
      },
      {
        heading: 'Clés API',
        paragraphs: [
          "Vous utilisez vos propres clés. Elles sont stockées uniquement dans le localStorage de votre navigateur et servent aux appels directs vers le fournisseur de votre choix. Les serveurs de PromptQuorum ne les reçoivent ni ne les transmettent jamais. Le localStorage n'est pas un stockage chiffré : toute personne ayant accès à votre profil de navigateur ou à votre appareil, ou un logiciel malveillant ou une extension de navigateur qui s'y exécute, pourrait le lire. Utilisez des clés de fournisseur assorties de plafonds de dépenses et révoquez une clé auprès du fournisseur si vous soupçonnez une exposition.",
        ],
      },
      {
        heading: 'Ce que traite le site lui-même',
        paragraphs: [
          "Le site et son serveur MCP public traitent un faible volume de données personnelles : journaux d'hébergement et de serveur, enregistrements de consentement aux cookies, hachages de limitation de débit et un profil MCP pseudonymisé facultatif. Nous ne collectons aucune donnée de paiement. La liste complète, les finalités, les bases légales et les sous-traitants (avec leur localisation) figurent dans la {privacy}.",
          "L'analyse d'audience du site (Umami et Microsoft Clarity) fonctionne sans cookies.",
        ],
      },
      {
        heading: 'Responsable du traitement et RGPD',
        paragraphs: [
          "Le responsable du traitement est Hans Kuepper, Allemagne (voir l'{impressum}). Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données, ou retirer votre consentement, en écrivant à l'adresse ci-dessous. Les profils MCP peuvent aussi être consultés et supprimés avec les outils `my_profile` et `forget_me`.",
        ],
      },
      {
        heading: 'Signaler une vulnérabilité',
        paragraphs: [
          "Si vous découvrez un problème de sécurité, écrivez à {email} en donnant assez de détails pour le reproduire. Merci de nous laisser un délai raisonnable pour le corriger avant toute divulgation publique. Nous ne proposons pas de programme de bug bounty rémunéré.",
        ],
      },
    ],
  },
  es: {
    metaTitle: 'Seguridad y tratamiento de datos | PromptQuorum',
    metaDescription:
      'Cómo trata PromptQuorum los prompts, las claves de API y los datos del sitio: procesamiento en el navegador, llamadas directas a los proveedores, encargados nombrados y cómo notificar una vulnerabilidad.',
    home: 'PromptQuorum',
    breadcrumb: 'Seguridad',
    h1: 'Seguridad y tratamiento de datos',
    subtitle: 'Qué hace PromptQuorum con tus prompts, tus claves de API y los datos del sitio, y cómo notificar un problema.',
    privacyLabel: 'Política de privacidad',
    impressumLabel: 'Impressum (aviso legal)',
    sections: [
      {
        heading: 'En resumen',
        paragraphs: [
          'PromptQuorum no aloja ni ejecuta ningún modelo de IA y no tiene ningún servidor que reciba tus prompts o tus claves de API. Las solicitudes van directamente desde tu dispositivo a los proveedores de IA que elijas.',
        ],
      },
      {
        heading: 'Prompts y respuestas de la IA',
        paragraphs: [
          'Los prompts y las respuestas se procesan en tu navegador y se envían directamente desde tu dispositivo al proveedor que seleccionaste (por ejemplo, OpenAI, Anthropic o Google). No pasan por los servidores de PromptQuorum. Lo que cada proveedor haga con esos datos se rige por sus propios términos y su política de privacidad. Los modelos locales que ejecutas tú mismo permanecen en tu equipo.',
        ],
      },
      {
        heading: 'Claves de API',
        paragraphs: [
          'Tú aportas tus propias claves. Se guardan únicamente en el localStorage de tu navegador y se usan para llamadas directas al proveedor que elijas. Los servidores de PromptQuorum nunca las reciben ni las transmiten. localStorage no es un almacenamiento cifrado: cualquiera con acceso a tu perfil de navegador o a tu dispositivo, o software malicioso o extensiones del navegador que se ejecuten en él, podría leerlo. Usa claves de proveedor con límites de gasto y revoca una clave en el proveedor si sospechas que quedó expuesta.',
        ],
      },
      {
        heading: 'Qué trata el propio sitio web',
        paragraphs: [
          'El sitio web y su servidor MCP público tratan una pequeña cantidad de datos personales: registros de alojamiento y de servidor, registros de consentimiento de cookies, hashes para limitar la tasa de solicitudes y un perfil MCP seudónimo opcional. No recopilamos datos de pago. La lista completa, las finalidades, las bases jurídicas y los encargados del tratamiento (con su ubicación) están en la {privacy}.',
          'La analítica del sitio (Umami y Microsoft Clarity) funciona sin cookies.',
        ],
      },
      {
        heading: 'Responsable del tratamiento y RGPD',
        paragraphs: [
          'El responsable del tratamiento es Hans Kuepper, Alemania (consulta el {impressum}). Puedes solicitar en cualquier momento el acceso, la rectificación o la supresión de tus datos, o retirar tu consentimiento, escribiendo a la dirección indicada abajo. Los perfiles MCP también se pueden consultar y eliminar con las herramientas `my_profile` y `forget_me`.',
        ],
      },
      {
        heading: 'Notificar una vulnerabilidad',
        paragraphs: [
          'Si encuentras un problema de seguridad, escribe a {email} con el detalle suficiente para reproducirlo. Danos un plazo razonable para corregirlo antes de divulgarlo públicamente. No ofrecemos un programa de recompensas por errores (bug bounty).',
        ],
      },
    ],
  },
  pt: {
    metaTitle: 'Segurança e tratamento de dados | PromptQuorum',
    metaDescription:
      'Como o PromptQuorum trata prompts, chaves de API e dados do site: processamento no navegador, chamadas diretas aos provedores, operadores nomeados e como relatar uma vulnerabilidade.',
    home: 'PromptQuorum',
    breadcrumb: 'Segurança',
    h1: 'Segurança e tratamento de dados',
    subtitle: 'O que o PromptQuorum faz com seus prompts, suas chaves de API e os dados do site, e como relatar um problema.',
    privacyLabel: 'Política de Privacidade',
    impressumLabel: 'Impressum (informações legais)',
    sections: [
      {
        heading: 'Em resumo',
        paragraphs: [
          'O PromptQuorum não hospeda nem executa nenhum modelo de IA e não possui servidor que receba seus prompts ou suas chaves de API. As solicitações vão do seu dispositivo diretamente para os provedores de IA que você escolher.',
        ],
      },
      {
        heading: 'Prompts e respostas da IA',
        paragraphs: [
          'Prompts e respostas são tratados no seu navegador e enviados diretamente do seu dispositivo ao provedor selecionado (por exemplo, OpenAI, Anthropic ou Google). Eles não passam pelos servidores do PromptQuorum. O que cada provedor faz com esses dados é regido pelos termos e pela política de privacidade do próprio provedor. Modelos locais que você mesmo executa permanecem na sua máquina.',
        ],
      },
      {
        heading: 'Chaves de API',
        paragraphs: [
          'Você usa suas próprias chaves. Elas ficam armazenadas apenas no localStorage do seu navegador e são usadas em chamadas diretas ao provedor escolhido. Os servidores do PromptQuorum nunca as recebem nem as transmitem. O localStorage não é um armazenamento criptografado: qualquer pessoa com acesso ao perfil do seu navegador ou ao seu dispositivo, ou software malicioso ou extensões de navegador em execução nele, poderia lê-lo. Use chaves de provedor com limite de gastos e revogue uma chave no provedor se suspeitar de exposição.',
        ],
      },
      {
        heading: 'O que o próprio site trata',
        paragraphs: [
          'O site e seu servidor MCP público tratam uma pequena quantidade de dados pessoais: registros de hospedagem e de servidor, registros de consentimento de cookies, hashes de limitação de taxa e um perfil MCP pseudonimizado opcional. Não coletamos dados de pagamento. A lista completa, as finalidades, as bases legais e os operadores (com sua localização) estão na {privacy}.',
          'A análise de audiência do site (Umami e Microsoft Clarity) funciona sem cookies.',
        ],
      },
      {
        heading: 'Controlador e GDPR',
        paragraphs: [
          'O controlador dos dados é Hans Kuepper, Alemanha (veja o {impressum}). Você pode solicitar a qualquer momento acesso, correção ou exclusão dos seus dados, ou retirar seu consentimento, escrevendo para o endereço abaixo. Os perfis MCP também podem ser consultados e excluídos com as ferramentas `my_profile` e `forget_me`.',
        ],
      },
      {
        heading: 'Relatar uma vulnerabilidade',
        paragraphs: [
          'Se você encontrar um problema de segurança, escreva para {email} com detalhes suficientes para reproduzi-lo. Pedimos um prazo razoável para corrigi-lo antes de qualquer divulgação pública. Não mantemos um programa remunerado de bug bounty.',
        ],
      },
    ],
  },
  ja: {
    metaTitle: 'セキュリティとデータの取り扱い | PromptQuorum',
    metaDescription:
      'PromptQuorumがプロンプト、APIキー、サイトデータをどう扱うか。ブラウザ内処理、プロバイダーへの直接通信、委託先、脆弱性の報告方法を説明します。',
    home: 'PromptQuorum',
    breadcrumb: 'セキュリティ',
    h1: 'セキュリティとデータの取り扱い',
    subtitle: 'PromptQuorumがプロンプト、APIキー、サイトデータをどのように扱うか、また問題の報告方法をご案内します。',
    privacyLabel: 'プライバシーポリシー',
    impressumLabel: 'Impressum（事業者情報）',
    sections: [
      {
        heading: '要点',
        paragraphs: [
          'PromptQuorumはAIモデルのホスティングや実行を行わず、プロンプトやAPIキーを受信するサーバーも持っていません。リクエストは、お使いの端末から選択したAIプロバイダーへ直接送信されます。',
        ],
      },
      {
        heading: 'プロンプトとAIの応答',
        paragraphs: [
          'プロンプトと応答はブラウザ内で処理され、お使いの端末から選択したプロバイダー（OpenAI、Anthropic、Googleなど）へ直接送信されます。PromptQuorumのサーバーは経由しません。各プロバイダーがそのデータをどう扱うかは、プロバイダー自身の利用規約とプライバシーポリシーに従います。ご自身で実行するローカルモデルのデータは、お使いのマシン内にとどまります。',
        ],
      },
      {
        heading: 'APIキー',
        paragraphs: [
          'APIキーはご自身のものをお使いいただきます。キーはブラウザのlocalStorageにのみ保存され、選択したプロバイダーへの直接呼び出しに使われます。PromptQuorumのサーバーがキーを受信・送信することはありません。localStorageは暗号化された保存領域ではないため、ブラウザのプロファイルや端末にアクセスできる人、またはそこで動作するマルウェアやブラウザ拡張機能が読み取る可能性があります。利用上限を設定したプロバイダーのキーを使い、漏えいの疑いがある場合はプロバイダー側でキーを無効化してください。',
        ],
      },
      {
        heading: 'ウェブサイト自体が処理するデータ',
        paragraphs: [
          'ウェブサイトと公開MCPサーバーが処理する個人データはごく少量で、ホスティング／サーバーのログ、Cookie同意の記録、レート制限用のハッシュ、任意の仮名化MCPプロフィールです。決済情報は収集しません。完全な一覧、利用目的、法的根拠、委託先（所在地を含む）は{privacy}に記載しています。',
          'サイトのアクセス解析（UmamiおよびMicrosoft Clarity）はCookieを使わないモードで動作します。',
        ],
      },
      {
        heading: '管理者とGDPR',
        paragraphs: [
          'データ管理者はドイツのHans Kuepperです（{impressum}をご覧ください）。データへのアクセス、訂正、削除の請求や同意の撤回は、下記のアドレスへのメールでいつでも可能です。MCPプロフィールは、`my_profile`ツールで確認し、`forget_me`ツールで削除することもできます。',
        ],
      },
      {
        heading: '脆弱性の報告',
        paragraphs: [
          'セキュリティ上の問題を見つけた場合は、再現できる程度の詳細を添えて{email}までメールでご連絡ください。公開前に、修正のための合理的な期間をいただけますようお願いします。有償のバグバウンティプログラムは実施していません。',
        ],
      },
    ],
  },
  zh: {
    metaTitle: '安全与数据处理 | PromptQuorum',
    metaDescription:
      'PromptQuorum 如何处理提示词、API 密钥和网站数据：浏览器内处理、直连模型提供商、列明的数据处理方，以及如何报告安全漏洞。',
    home: 'PromptQuorum',
    breadcrumb: '安全',
    h1: '安全与数据处理',
    subtitle: '说明 PromptQuorum 如何处理您的提示词、API 密钥和网站数据，以及如何报告问题。',
    privacyLabel: '隐私政策',
    impressumLabel: 'Impressum（法律声明）',
    sections: [
      {
        heading: '简要说明',
        paragraphs: [
          'PromptQuorum 不托管也不运行任何 AI 模型，也没有接收您的提示词或 API 密钥的服务器。请求由您的设备直接发送到您选择的 AI 提供商。',
        ],
      },
      {
        heading: '提示词与 AI 回复',
        paragraphs: [
          '提示词和回复在您的浏览器中处理，并由您的设备直接发送到您选择的提供商（例如 OpenAI、Anthropic 或 Google），不会经过 PromptQuorum 的服务器。各提供商如何处理这些数据，取决于其自身的服务条款和隐私政策。您自行运行的本地模型则保留在您的设备上。',
        ],
      },
      {
        heading: 'API 密钥',
        paragraphs: [
          '您使用自己的密钥。密钥仅存储在浏览器的 localStorage 中，用于直接调用您选择的提供商。PromptQuorum 的服务器不会接收或传输这些密钥。localStorage 不是加密存储：能够访问您浏览器配置文件或设备的人，或在其上运行的恶意软件和浏览器扩展，都可能读取其中内容。请使用设有消费上限的提供商密钥；如怀疑密钥已泄露，请在提供商处将其吊销。',
        ],
      },
      {
        heading: '网站本身处理的数据',
        paragraphs: [
          '网站及其公开的 MCP 服务器仅处理少量个人数据：托管和服务器日志、Cookie 同意记录、用于限流的哈希值，以及可选的假名化 MCP 档案。我们不收集支付数据。完整清单、处理目的、法律依据和数据处理方（含其所在地）见{privacy}。',
          '网站分析（Umami 和 Microsoft Clarity）以无 Cookie 模式运行。',
        ],
      },
      {
        heading: '责任方与 GDPR',
        paragraphs: [
          '数据控制者为德国的 Hans Kuepper（见{impressum}）。您可随时通过发送邮件至下方地址，申请访问、更正或删除您的数据，或撤回同意。MCP 档案也可通过 `my_profile` 工具查看，并通过 `forget_me` 工具删除。',
        ],
      },
      {
        heading: '报告安全漏洞',
        paragraphs: [
          '如发现安全问题，请发送邮件至 {email}，并提供足以复现的详细信息。在公开披露之前，请给我们合理的时间进行修复。我们不设有偿漏洞赏金计划。',
        ],
      },
    ],
  },
  ar: {
    metaTitle: 'الأمان ومعالجة البيانات | PromptQuorum',
    metaDescription:
      'كيف يتعامل PromptQuorum مع الـ prompts ومفاتيح API وبيانات الموقع: المعالجة داخل المتصفح، واستدعاء المزوّدين مباشرةً، ومعالجو البيانات المسمَّون، وكيفية الإبلاغ عن ثغرة.',
    home: 'PromptQuorum',
    breadcrumb: 'الأمان',
    h1: 'الأمان ومعالجة البيانات',
    subtitle: 'ما يفعله PromptQuorum بالـ prompts ومفاتيح API وبيانات الموقع، وكيفية الإبلاغ عن مشكلة.',
    privacyLabel: 'سياسة الخصوصية',
    impressumLabel: 'Impressum (البيانات القانونية)',
    sections: [
      {
        heading: 'باختصار',
        paragraphs: [
          'لا يستضيف PromptQuorum أي نموذج ذكاء اصطناعي ولا يشغّله، وليس لديه خادم يستقبل الـ prompts أو مفاتيح API الخاصة بك. تنتقل الطلبات من جهازك مباشرةً إلى مزوّدي الذكاء الاصطناعي الذين تختارهم.',
        ],
      },
      {
        heading: 'الـ prompts وردود الذكاء الاصطناعي',
        paragraphs: [
          'تُعالَج الـ prompts والردود داخل متصفحك وتُرسَل من جهازك مباشرةً إلى المزوّد الذي اخترته (مثل OpenAI أو Anthropic أو Google). ولا تمرّ عبر خوادم PromptQuorum. وما يفعله كل مزوّد بهذه البيانات تحكمه شروطه وسياسة الخصوصية الخاصة به. أما النماذج المحلية التي تشغّلها بنفسك فتبقى على جهازك.',
        ],
      },
      {
        heading: 'مفاتيح API',
        paragraphs: [
          'تستخدم مفاتيحك الخاصة. تُخزَّن فقط في localStorage بمتصفحك وتُستخدم في استدعاءات مباشرة إلى المزوّد الذي اخترته. ولا تستقبلها خوادم PromptQuorum ولا تنقلها أبدًا. إن localStorage ليس تخزينًا مشفّرًا: فيمكن لأي شخص يصل إلى ملف تعريف المتصفح أو إلى جهازك، أو لبرمجية خبيثة أو إضافات متصفح تعمل عليه، أن يقرأه. استخدم مفاتيح مزوّدين لها حدود إنفاق، وألغِ المفتاح لدى المزوّد إذا اشتبهت في تسريبه.',
        ],
      },
      {
        heading: 'ما يعالجه الموقع نفسه',
        paragraphs: [
          'يعالج الموقع وخادم MCP العام التابع له قدرًا صغيرًا من البيانات الشخصية: سجلات الاستضافة والخادم، وسجلات الموافقة على ملفات تعريف الارتباط، ورموز التجزئة المستخدمة لتحديد معدل الطلبات، وملف MCP اختياري بهوية مستعارة. لا نجمع بيانات الدفع. تجد القائمة الكاملة والأغراض والأسس القانونية والمعالِجين (مع مواقعهم) في {privacy}.',
          'تعمل تحليلات الموقع (Umami وMicrosoft Clarity) بوضع لا يستخدم ملفات تعريف الارتباط.',
        ],
      },
      {
        heading: 'الجهة المسؤولة واللائحة العامة لحماية البيانات (GDPR)',
        paragraphs: [
          'المتحكم في البيانات هو Hans Kuepper في ألمانيا (انظر {impressum}). يمكنك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، أو سحب موافقتك، بمراسلتنا على العنوان أدناه. ويمكن أيضًا عرض ملفات MCP وحذفها باستخدام الأداتين `my_profile` و`forget_me`.',
        ],
      },
      {
        heading: 'الإبلاغ عن ثغرة',
        paragraphs: [
          'إذا وجدت مشكلة أمنية، فراسلنا على {email} مع تفاصيل كافية لإعادة إنتاجها. نرجو منحنا وقتًا معقولًا لإصلاحها قبل الإفصاح عنها علنًا. ولا نقدّم برنامج مكافآت مدفوعة للإبلاغ عن الثغرات.',
        ],
      },
    ],
  },
  ko: {
    metaTitle: '보안 및 데이터 처리 | PromptQuorum',
    metaDescription:
      'PromptQuorum이 프롬프트, API 키, 웹사이트 데이터를 처리하는 방식: 브라우저 내 처리, 제공업체 직접 호출, 명시된 수탁자, 취약점 신고 방법.',
    home: 'PromptQuorum',
    breadcrumb: '보안',
    h1: '보안 및 데이터 처리',
    subtitle: 'PromptQuorum이 프롬프트, API 키, 웹사이트 데이터를 어떻게 다루는지와 문제를 신고하는 방법을 안내합니다.',
    privacyLabel: '개인정보 처리방침',
    impressumLabel: 'Impressum(사업자 정보)',
    sections: [
      {
        heading: '요약',
        paragraphs: [
          'PromptQuorum은 AI 모델을 호스팅하거나 실행하지 않으며, 프롬프트나 API 키를 수신하는 서버도 없습니다. 요청은 사용자의 기기에서 사용자가 선택한 AI 제공업체로 직접 전송됩니다.',
        ],
      },
      {
        heading: '프롬프트와 AI 응답',
        paragraphs: [
          '프롬프트와 응답은 브라우저 안에서 처리되며, 사용자의 기기에서 선택한 제공업체(예: OpenAI, Anthropic, Google)로 직접 전송됩니다. PromptQuorum 서버를 거치지 않습니다. 각 제공업체가 해당 데이터를 어떻게 처리하는지는 제공업체 자체의 약관과 개인정보 처리방침을 따릅니다. 직접 실행하는 로컬 모델은 사용자의 컴퓨터에만 남습니다.',
        ],
      },
      {
        heading: 'API 키',
        paragraphs: [
          '사용자는 본인의 키를 사용합니다. 키는 브라우저의 localStorage에만 저장되며, 선택한 제공업체를 직접 호출하는 데 사용됩니다. PromptQuorum 서버는 키를 수신하거나 전송하지 않습니다. localStorage는 암호화된 저장소가 아니므로, 브라우저 프로필이나 기기에 접근할 수 있는 사람 또는 그곳에서 실행되는 악성 소프트웨어나 브라우저 확장 프로그램이 내용을 읽을 수 있습니다. 사용 한도가 설정된 제공업체 키를 사용하고, 노출이 의심되면 제공업체에서 해당 키를 폐기하세요.',
        ],
      },
      {
        heading: '웹사이트 자체가 처리하는 데이터',
        paragraphs: [
          '웹사이트와 공개 MCP 서버가 처리하는 개인정보는 소량으로, 호스팅 및 서버 로그, 쿠키 동의 기록, 요청 빈도 제한용 해시, 선택적 가명 MCP 프로필입니다. 결제 정보는 수집하지 않습니다. 전체 목록, 처리 목적, 법적 근거, 수탁자(소재지 포함)는 {privacy}에서 확인할 수 있습니다.',
          '웹사이트 분석(Umami 및 Microsoft Clarity)은 쿠키를 사용하지 않는 모드로 작동합니다.',
        ],
      },
      {
        heading: '책임자와 GDPR',
        paragraphs: [
          '데이터 관리자는 독일의 Hans Kuepper입니다({impressum} 참조). 아래 주소로 이메일을 보내 언제든지 데이터 열람, 정정, 삭제를 요청하거나 동의를 철회할 수 있습니다. MCP 프로필은 `my_profile` 도구로 조회하고 `forget_me` 도구로 삭제할 수도 있습니다.',
        ],
      },
      {
        heading: '취약점 신고',
        paragraphs: [
          '보안 문제를 발견하셨다면 재현에 충분한 상세 내용을 담아 {email}로 이메일을 보내 주세요. 공개하기 전에 수정할 수 있도록 합리적인 시간을 주시기 바랍니다. 유료 버그 바운티 프로그램은 운영하지 않습니다.',
        ],
      },
    ],
  },
}
