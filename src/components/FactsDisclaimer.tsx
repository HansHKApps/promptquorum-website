const COPY: Record<string, { title: string; body: string }> = {
  en: {
    title: 'A Note on Third-Party Facts',
    body: 'This article references third-party AI models, benchmarks, prices, and licenses. The AI landscape changes rapidly. Benchmark scores, license terms, model names, and API prices can shift between the time of writing and the time you read this. Before making deployment or compliance decisions based on this article, verify current figures on each provider’s official source: Hugging Face model cards for licenses and benchmarks, provider websites for API pricing, and EUR-Lex for current GDPR and EU AI Act text. This article reflects publicly available information as of May 2026.',
  },
  de: {
    title: 'Hinweis zu Drittanbieter-Fakten',
    body: 'Dieser Artikel referenziert KI-Modelle, Benchmarks, Preise und Lizenzen von Drittanbietern. Die KI-Landschaft verändert sich schnell. Benchmark-Werte, Lizenzbedingungen, Modellnamen und API-Preise können sich zwischen dem Zeitpunkt der Erstellung und dem Zeitpunkt ändern, zu dem Sie dies lesen. Bevor Sie Bereitstellungs- oder Compliance-Entscheidungen auf Basis dieses Artikels treffen, überprüfen Sie aktuelle Zahlen bei der offiziellen Quelle jedes Anbieters: Hugging-Face-Modellkarten für Lizenzen und Benchmarks, Anbieter-Websites für API-Preise und EUR-Lex für den aktuellen DSGVO- und EU-KI-Gesetz-Text. Dieser Artikel spiegelt öffentlich verfügbare Informationen vom Mai 2026 wider.',
  },
  fr: {
    title: 'Note sur les faits tiers',
    body: 'Cet article fait référence à des modèles d’IA, des benchmarks, des prix et des licences de tiers. Le paysage de l’IA évolue rapidement. Les scores de benchmark, les conditions de licence, les noms de modèles et les prix des API peuvent changer entre le moment de la rédaction et le moment où vous lisez ceci. Avant de prendre des décisions de déploiement ou de conformité basées sur cet article, vérifiez les chiffres actuels auprès de la source officielle de chaque fournisseur : fiches de modèles Hugging Face pour les licences et benchmarks, sites web des fournisseurs pour les prix API, et EUR-Lex pour les textes RGPD et AI Act actuels. Cet article reflète les informations publiques disponibles en mai 2026.',
  },
  es: {
    title: 'Nota sobre hechos de terceros',
    body: 'Este artículo hace referencia a modelos de IA, benchmarks, precios y licencias de terceros. El panorama de la IA cambia rápidamente. Las puntuaciones de benchmark, los términos de licencia, los nombres de modelos y los precios de API pueden cambiar entre el momento en que se escribió y cuando usted lo lee. Antes de tomar decisiones de despliegue o cumplimiento basadas en este artículo, verifique las cifras actuales en la fuente oficial de cada proveedor: tarjetas de modelos de Hugging Face para licencias y benchmarks, sitios web de proveedores para precios de API y EUR-Lex para el texto actualizado del RGPD y la Ley de IA de la UE. Este artículo refleja información públicamente disponible a mayo de 2026.',
  },
  pt: {
    title: 'Nota sobre informações de terceiros',
    body: 'Este artigo faz referência a modelos de IA, benchmarks, preços e licenças de terceiros. O cenário da IA muda rapidamente. Pontuações de benchmark, termos de licença, nomes de modelos e preços de API podem mudar entre o momento em que foi escrito e quando você está lendo. Antes de tomar decisões de implantação ou conformidade com base neste artigo, verifique os dados atuais na fonte oficial de cada fornecedor: fichas de modelos do Hugging Face para licenças e benchmarks, sites dos fornecedores para preços de API e EUR-Lex para o texto atual do GDPR e da Lei de IA da UE. Este artigo reflete informações publicamente disponíveis em maio de 2026.',
  },
  ja: {
    title: 'サードパーティの情報に関する注意',
    body: 'この記事はサードパーティのAIモデル、ベンチマーク、価格、ライセンスを参照しています。AIの状況は急速に変化しています。ベンチマークスコア、ライセンス条件、モデル名、API価格は執筆時とお読みになる時の間で変わる可能性があります。この記事に基づいてデプロイやコンプライアンスに関する決定を下す前に、各プロバイダーの公式ソース（ライセンスとベンチマークはHugging Faceのモデルカード、API価格はプロバイダーのウェブサイト、現在のGDPRとEU AI法のテキストはEUR-Lex）で最新の数値を確認してください。この記事は2026年5月時点で公開されている情報を反映しています。',
  },
  zh: {
    title: '关于第三方事实的说明',
    body: '本文引用了第三方AI模型、基准测试、价格和许可证。AI领域变化迅速。基准分数、许可条款、模型名称和API价格可能在写作时间和您阅读时之间发生变化。在根据本文做出部署或合规决策之前，请在每个提供商的官方来源核实当前数据：Hugging Face模型卡用于许可证和基准测试，提供商网站用于API定价，EUR-Lex用于当前GDPR和EU AI法案文本。本文反映截至2026年5月的公开可用信息。',
  },
}

export function FactsDisclaimer({ lang = 'en' }: { lang?: string }) {
  const copy = COPY[lang] ?? COPY.en
  return (
    <div className="my-8 p-5 border border-amber-200 bg-amber-50 rounded-xl text-sm text-text-secondary">
      <h2 className="font-bold text-text-primary mb-2 text-base">{copy.title}</h2>
      <p>{copy.body}</p>
    </div>
  )
}
