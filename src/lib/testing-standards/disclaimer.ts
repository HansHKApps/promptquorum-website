// Personal-views disclaimer for the "How I test" page and the pointer shown on hands-on test pages.
// English is the source; the other blocks follow docs/geo-translation.md. German/EU orientation (opinion vs.
// statement of fact, limited liability, no endorsement). Not legal advice — have the wording checked by a
// Medienrecht lawyer before relying on it.

import type { Language } from '@/lib/blog/blogContent'

export interface DisclaimerCopy {
  title: string
  paragraphs: string[]
  /** Last paragraph: text before the link, link label (to /impressum), text after the link. */
  contact: { before: string; linkText: string; after: string }
  /** One-line note shown with the link on hands-on test pages. */
  shortNote: string
}

export const DISCLAIMER_COPY: Record<Language, DisclaimerCopy> = {
  en: {
    title: 'Disclaimer: personal views',
    paragraphs: [
      'This page and all hands-on test reports on PromptQuorum express my personal, private and subjective views and experiences. They are expressions of opinion, not statements of fact about the general quality, security, legality or suitability of any product, and they are not professional, technical, legal, financial or purchasing advice.',
      'Each report reflects only the software version, the system and the date on which I tested. Results can differ on other systems, with other settings and in later versions. I do not guarantee that the content is complete, current or free of errors, and I accept no liability for decisions made on the basis of it, except where liability cannot be excluded by law.',
      'Product and company names belong to their respective owners. Mentioning a product does not imply any affiliation with, or endorsement by, its maker.',
    ],
    contact: { before: 'If you believe a statement is factually wrong, please contact me using the details in the ', linkText: 'Impressum', after: ' and I will review it.' },
    shortNote: 'These tests are my personal views, not guarantees.',
  },
  de: {
    title: 'Haftungsausschluss: persönliche Meinung',
    paragraphs: [
      'Diese Seite und alle Praxistests auf PromptQuorum geben meine persönlichen, privaten und subjektiven Ansichten und Erfahrungen wieder. Es sind Meinungsäußerungen und keine Tatsachenbehauptungen über die allgemeine Qualität, Sicherheit, Rechtmäßigkeit oder Eignung eines Produkts, und sie sind keine fachliche, technische, rechtliche, finanzielle oder Kaufberatung.',
      'Jeder Bericht gibt nur die Softwareversion, das System und das Datum wieder, an denen ich getestet habe. Auf anderen Systemen, mit anderen Einstellungen und in späteren Versionen können die Ergebnisse abweichen. Ich übernehme keine Gewähr für Vollständigkeit, Aktualität oder Fehlerfreiheit der Inhalte und hafte nicht für Entscheidungen, die auf dieser Grundlage getroffen werden, soweit die Haftung nicht gesetzlich zwingend ist.',
      'Produkt- und Firmennamen gehören ihren jeweiligen Inhabern. Die Nennung eines Produkts bedeutet weder eine Verbindung zu seinem Hersteller noch eine Empfehlung von dessen Seite.',
    ],
    contact: { before: 'Wenn Sie eine Aussage für sachlich falsch halten, kontaktieren Sie mich bitte über die Angaben im ', linkText: 'Impressum', after: '; ich prüfe das.' },
    shortNote: 'Diese Tests sind meine persönliche Meinung, keine Garantien.',
  },
  fr: {
    title: 'Avertissement : opinions personnelles',
    paragraphs: [
      'Cette page et tous les tests pratiques de PromptQuorum expriment mes points de vue et expériences personnels, privés et subjectifs. Ce sont des expressions d\'opinion, et non des affirmations de fait sur la qualité générale, la sécurité, la légalité ou l\'adéquation d\'un produit ; elles ne constituent pas un conseil professionnel, technique, juridique, financier ou d\'achat.',
      'Chaque compte rendu ne reflète que la version du logiciel, le système et la date auxquels j\'ai testé. Les résultats peuvent différer sur d\'autres systèmes, avec d\'autres réglages et dans des versions ultérieures. Je ne garantis pas que le contenu soit complet, à jour ou exempt d\'erreurs, et je décline toute responsabilité pour les décisions prises sur cette base, sauf lorsque la responsabilité ne peut être exclue par la loi.',
      'Les noms de produits et d\'entreprises appartiennent à leurs propriétaires respectifs. Mentionner un produit n\'implique aucun lien avec son éditeur ni aucune recommandation de sa part.',
    ],
    contact: { before: 'Si vous estimez qu\'une affirmation est factuellement inexacte, contactez-moi via les coordonnées des ', linkText: 'mentions légales (Impressum)', after: ' et je l\'examinerai.' },
    shortNote: 'Ces tests expriment mon opinion personnelle et ne sont pas des garanties.',
  },
  es: {
    title: 'Aviso legal: opiniones personales',
    paragraphs: [
      'Esta página y todas las pruebas prácticas de PromptQuorum expresan mis opiniones y experiencias personales, privadas y subjetivas. Son expresiones de opinión, no afirmaciones de hecho sobre la calidad general, la seguridad, la legalidad o la idoneidad de ningún producto, y no constituyen asesoramiento profesional, técnico, jurídico, financiero ni de compra.',
      'Cada informe refleja únicamente la versión del software, el sistema y la fecha en que probé. Los resultados pueden variar en otros sistemas, con otros ajustes y en versiones posteriores. No garantizo que el contenido esté completo, actualizado o libre de errores, y no asumo responsabilidad por las decisiones tomadas con base en él, salvo cuando la ley no permita excluirla.',
      'Los nombres de productos y empresas pertenecen a sus respectivos propietarios. Mencionar un producto no implica ninguna relación con su fabricante ni su respaldo.',
    ],
    contact: { before: 'Si crees que alguna afirmación es incorrecta, escríbeme con los datos del ', linkText: 'Impressum', after: ' y la revisaré.' },
    shortNote: 'Estas pruebas son mi opinión personal, no garantías.',
  },
  ja: {
    title: '免責事項：個人の見解',
    paragraphs: [
      '本ページおよびPromptQuorumのすべての実機テストレポートは、私個人の私的かつ主観的な見解と体験を述べたものです。これらは意見の表明であり、特定の製品の一般的な品質・安全性・適法性・適合性に関する事実の主張ではなく、専門的・技術的・法的・財務的な助言や購入に関する助言でもありません。',
      '各レポートは、私がテストを行ったソフトウェアのバージョン、システム、日付のみを反映しています。他のシステム、他の設定、後のバージョンでは結果が異なる場合があります。内容の完全性、最新性、誤りのないことを保証せず、法律上責任を免れない場合を除き、これに基づく判断について責任を負いません。',
      '製品名および企業名は、それぞれの権利者に帰属します。製品に言及することは、その開発元との提携や推奨を意味するものではありません。',
    ],
    contact: { before: '事実に誤りがあると思われる場合は、', linkText: 'Impressum（運営者情報）', after: 'の連絡先からご連絡ください。確認いたします。' },
    shortNote: 'これらのテストは私個人の見解であり、保証ではありません。',
  },
  zh: {
    title: '免责声明：个人观点',
    paragraphs: [
      '本页面及PromptQuorum上的所有实测报告，表达的是我个人的、私人的、主观的看法和体验。它们是意见表达，而不是对任何产品的总体质量、安全性、合法性或适用性的事实陈述，也不构成专业、技术、法律、财务或购买方面的建议。',
      '每份报告仅反映我测试时所用的软件版本、系统和日期。在其他系统、其他设置或更高版本上，结果可能不同。我不保证内容完整、最新或没有错误，除法律不允许排除责任的情形外，对基于这些内容所做的决定不承担责任。',
      '产品和公司名称归其各自所有者所有。提及某产品并不意味着与其开发者存在任何关联或获得其认可。',
    ],
    contact: { before: '如果你认为某项陈述与事实不符，请通过', linkText: 'Impressum（法律声明）', after: '中的联系方式告知我，我会核查。' },
    shortNote: '这些测试是我的个人观点，并非保证。',
  },
  pt: {
    title: 'Aviso legal: opiniões pessoais',
    paragraphs: [
      'Esta página e todos os testes práticos do PromptQuorum expressam minhas opiniões e experiências pessoais, privadas e subjetivas. São manifestações de opinião, não afirmações de fato sobre a qualidade geral, a segurança, a legalidade ou a adequação de qualquer produto, e não constituem aconselhamento profissional, técnico, jurídico, financeiro ou de compra.',
      'Cada relatório reflete apenas a versão do software, o sistema e a data em que testei. Os resultados podem variar em outros sistemas, com outras configurações e em versões posteriores. Não garanto que o conteúdo seja completo, atual ou livre de erros e não assumo responsabilidade por decisões tomadas com base nele, exceto quando a responsabilidade não puder ser excluída por lei.',
      'Nomes de produtos e empresas pertencem aos seus respectivos proprietários. Mencionar um produto não implica qualquer vínculo com o fabricante nem aprovação por parte dele.',
    ],
    contact: { before: 'Se você acha que alguma afirmação está factualmente errada, entre em contato usando os dados do ', linkText: 'Impressum', after: ' e vou analisar.' },
    shortNote: 'Estes testes são minha opinião pessoal, não garantias.',
  },
  ar: {
    title: 'إخلاء مسؤولية: آراء شخصية',
    paragraphs: [
      'تعبّر هذه الصفحة وجميع تقارير الاختبار العملي على PromptQuorum عن آرائي وتجاربي الشخصية والخاصة والذاتية. فهي تعبير عن رأي، وليست تقريرات وقائع عن الجودة العامة لأي منتج أو أمانه أو مشروعيته أو ملاءمته، وليست استشارة مهنية أو تقنية أو قانونية أو مالية أو شرائية.',
      'يعكس كل تقرير فقط إصدار البرنامج والنظام والتاريخ الذي أجريت فيه الاختبار. وقد تختلف النتائج على أنظمة أخرى وبإعدادات أخرى وفي إصدارات لاحقة. لا أضمن أن المحتوى كامل أو حديث أو خالٍ من الأخطاء، ولا أتحمل مسؤولية القرارات المتخذة بناءً عليه، إلا في الحالات التي لا يجوز فيها استبعاد المسؤولية قانونًا.',
      'أسماء المنتجات والشركات مملوكة لأصحابها. وذكر أي منتج لا يعني وجود أي صلة بصانعه أو تأييدًا منه.',
    ],
    contact: { before: 'إذا رأيت أن عبارة ما غير صحيحة من حيث الوقائع، فتواصل معي عبر البيانات المذكورة في ', linkText: 'Impressum (البيانات القانونية)', after: ' وسأراجعها.' },
    shortNote: 'هذه الاختبارات آرائي الشخصية وليست ضمانات.',
  },
  ko: {
    title: '면책 고지: 개인적인 견해',
    paragraphs: [
      '이 페이지와 PromptQuorum의 모든 직접 사용 테스트 보고서는 저 개인의 사적이고 주관적인 견해와 경험을 나타냅니다. 이는 의견의 표명이며, 어떤 제품의 일반적인 품질, 보안, 적법성 또는 적합성에 관한 사실 주장이 아니고, 전문적·기술적·법률적·재정적 조언이나 구매 조언도 아닙니다.',
      '각 보고서는 제가 테스트한 소프트웨어 버전, 시스템, 날짜만을 반영합니다. 다른 시스템, 다른 설정, 이후 버전에서는 결과가 다를 수 있습니다. 내용의 완전성, 최신성, 무오류를 보장하지 않으며, 법률상 책임을 배제할 수 없는 경우를 제외하고 이를 근거로 내린 결정에 대해 책임지지 않습니다.',
      '제품명과 회사명은 각 소유자에게 귀속됩니다. 제품을 언급한다고 해서 해당 제작자와의 제휴나 보증을 의미하지는 않습니다.',
    ],
    contact: { before: '사실과 다른 내용이 있다고 생각되시면 ', linkText: 'Impressum(운영자 정보)', after: '에 있는 연락처로 알려 주십시오. 검토하겠습니다.' },
    shortNote: '이 테스트는 저의 개인적인 견해이며 보증이 아닙니다.',
  },
}
