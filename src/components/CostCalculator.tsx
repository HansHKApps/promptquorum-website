'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLang } from '@/hooks/useLang';

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko';

interface ElectricityPreset {
  key: string;
  label: string;
  ratePerKwh: number;
}

interface CopyStrings {
  hoursLabel: string;
  hoursHelp: string;
  cloudRateLabel: string;
  cloudRateHelp: string;
  hardwareLabel: string;
  hardwareHelp: string;
  electricityLabel: string;
  electricityHelp: string;
  drawLabel: string;
  resaleLabel: string;
  resaleHelp: string;
  ownershipLabel: string;
  ownershipHelp: string;
  electricityPresets: ElectricityPreset[];
  customPreset: string;
  resultsHeading: string;
  cloudCostMonth: string;
  localCostMonth: string;
  totalLocalTco: string;
  breakEvenMonths: string;
  breakEvenHours: string;
  never: string;
  recommendationHeading: string;
  buyLocal: string;
  buyLocalDetail: string;
  rentCloud: string;
  rentCloudDetail: string;
  tooClose: string;
  tooCloseDetail: string;
  linkMiniPc: string;
  linkWorkstation: string;
  linkCloud: string;
  linkHrefMiniPc: string;
  linkHrefWorkstation: string;
  linkHrefCloud: string;
  naiveNote: string;
  months: string;
  hours: string;
}

const COPY: Partial<Record<Language, CopyStrings>> = {
  en: {
    hoursLabel: 'Hours of use per month',
    hoursHelp: 'Average daily use × 30. Example: 8 hr/day = 240 hr/month.',
    cloudRateLabel: 'Cloud GPU rate ($/hour)',
    cloudRateHelp: 'Blended spot/on-demand rate for a comparable GPU (RunPod, Vast.ai, Lambda Labs).',
    hardwareLabel: 'Local hardware price ($)',
    hardwareHelp: 'Full system cost — GPU, case, PSU, RAM, storage, not just the GPU.',
    electricityLabel: 'Electricity rate ($/kWh)',
    electricityHelp: 'Your residential rate. Pick a preset or enter your own.',
    drawLabel: 'System power draw (W)',
    resaleLabel: 'Estimated resale value at end ($)',
    resaleHelp: 'What you expect to sell the hardware for at the end of the ownership period.',
    ownershipLabel: 'Ownership period (months)',
    ownershipHelp: 'How long you plan to keep and use this hardware.',
    electricityPresets: [
      { key: 'us', label: 'US (~$0.17/kWh)', ratePerKwh: 0.17 },
      { key: 'de', label: 'Germany (~$0.37/kWh)', ratePerKwh: 0.37 },
      { key: 'uk', label: 'UK (~$0.33/kWh)', ratePerKwh: 0.33 },
      { key: 'fr', label: 'France (~$0.22/kWh)', ratePerKwh: 0.22 },
    ],
    customPreset: 'Custom',
    resultsHeading: 'Your numbers',
    cloudCostMonth: 'Cloud cost / month',
    localCostMonth: 'Local operating cost / month',
    totalLocalTco: 'Total local cost over period (hardware + electricity − resale)',
    breakEvenMonths: 'Break-even (full TCO)',
    breakEvenHours: 'Break-even in cumulative hours',
    never: 'Cloud stays cheaper at these inputs',
    recommendationHeading: 'Recommendation',
    buyLocal: 'BUY LOCAL',
    buyLocalDetail: 'At this usage, owning hardware costs less than renting over your ownership period.',
    rentCloud: 'RENT CLOUD',
    rentCloudDetail: 'At this usage, renting stays cheaper than owning for your ownership period.',
    tooClose: 'TOO CLOSE TO CALL',
    tooCloseDetail: 'The two options land within 10% of each other — pick based on flexibility, privacy, or maintenance preference, not cost alone.',
    linkMiniPc: 'See the mini PC guide →',
    linkWorkstation: 'See the GPU workstation guide →',
    linkCloud: 'Compare current cloud GPU pricing →',
    linkHrefMiniPc: '/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: 'Naive break-even (hardware price ÷ cloud rate only, ignoring electricity and resale) for these hardware/cloud-rate inputs: ',
    months: 'months',
    hours: 'hours',
  },
  de: {
    hoursLabel: 'Nutzungsstunden pro Monat',
    hoursHelp: 'Tägliche Nutzung × 30. Beispiel: 8 Std./Tag = 240 Std./Monat.',
    cloudRateLabel: 'Cloud-GPU-Tarif ($/Std.)',
    cloudRateHelp: 'Gemischter Spot-/On-Demand-Tarif für eine vergleichbare GPU (RunPod, Vast.ai, Lambda Labs).',
    hardwareLabel: 'Preis der lokalen Hardware ($)',
    hardwareHelp: 'Gesamtsystemkosten — GPU, Gehäuse, Netzteil, RAM, Speicher, nicht nur die GPU.',
    electricityLabel: 'Strompreis ($/kWh)',
    electricityHelp: 'Ihr Haushaltstarif. Voreinstellung wählen oder eigenen Wert eingeben.',
    drawLabel: 'Systemleistung (W)',
    resaleLabel: 'Geschätzter Wiederverkaufswert am Ende ($)',
    resaleHelp: 'Was Sie am Ende der Nutzungsdauer für die Hardware erzielen würden.',
    ownershipLabel: 'Nutzungsdauer (Monate)',
    ownershipHelp: 'Wie lange Sie diese Hardware voraussichtlich behalten und nutzen.',
    electricityPresets: [
      { key: 'us', label: 'USA (~0,17 $/kWh)', ratePerKwh: 0.17 },
      { key: 'de', label: 'Deutschland (~0,37 $/kWh)', ratePerKwh: 0.37 },
      { key: 'uk', label: 'UK (~0,33 $/kWh)', ratePerKwh: 0.33 },
      { key: 'fr', label: 'Frankreich (~0,22 $/kWh)', ratePerKwh: 0.22 },
    ],
    customPreset: 'Eigener Wert',
    resultsHeading: 'Ihre Zahlen',
    cloudCostMonth: 'Cloud-Kosten / Monat',
    localCostMonth: 'Lokale Betriebskosten / Monat',
    totalLocalTco: 'Gesamtkosten lokal über Zeitraum (Hardware + Strom − Wiederverkauf)',
    breakEvenMonths: 'Break-even (vollständige TCO)',
    breakEvenHours: 'Break-even in kumulierten Stunden',
    never: 'Bei diesen Werten bleibt Cloud günstiger',
    recommendationHeading: 'Empfehlung',
    buyLocal: 'LOKAL KAUFEN',
    buyLocalDetail: 'Bei dieser Nutzung ist eigene Hardware über den Nutzungszeitraum günstiger als Miete.',
    rentCloud: 'CLOUD MIETEN',
    rentCloudDetail: 'Bei dieser Nutzung bleibt Miete über den Nutzungszeitraum günstiger als Kauf.',
    tooClose: 'ZU KNAPP',
    tooCloseDetail: 'Beide Optionen liegen innerhalb von 10 % beieinander — entscheiden Sie nach Flexibilität, Datenschutz oder Wartungsaufwand, nicht allein nach Kosten.',
    linkMiniPc: 'Zum Mini-PC-Guide →',
    linkWorkstation: 'Zum GPU-Workstation-Guide →',
    linkCloud: 'Aktuelle Cloud-GPU-Preise vergleichen →',
    linkHrefMiniPc: '/de/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/de/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/de/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: 'Naiver Break-even (nur Hardwarepreis ÷ Cloud-Tarif, ohne Strom und Wiederverkauf) für diese Eingaben: ',
    months: 'Monate',
    hours: 'Stunden',
  },
  fr: {
    hoursLabel: "Heures d'utilisation par mois",
    hoursHelp: 'Usage quotidien moyen × 30. Exemple : 8 h/jour = 240 h/mois.',
    cloudRateLabel: 'Tarif GPU cloud ($/h)',
    cloudRateHelp: 'Tarif mixte spot/à la demande pour un GPU comparable (RunPod, Vast.ai, Lambda Labs).',
    hardwareLabel: 'Prix du matériel local ($)',
    hardwareHelp: 'Coût total du système — GPU, boîtier, alimentation, RAM, stockage, pas seulement le GPU.',
    electricityLabel: "Tarif d'électricité ($/kWh)",
    electricityHelp: 'Votre tarif résidentiel. Choisissez un préréglage ou entrez le vôtre.',
    drawLabel: 'Consommation du système (W)',
    resaleLabel: 'Valeur de revente estimée en fin de période ($)',
    resaleHelp: 'Ce que vous espérez revendre le matériel à la fin de la période de possession.',
    ownershipLabel: 'Durée de possession (mois)',
    ownershipHelp: 'Combien de temps vous prévoyez de garder et d\'utiliser ce matériel.',
    electricityPresets: [
      { key: 'us', label: 'États-Unis (~0,17 $/kWh)', ratePerKwh: 0.17 },
      { key: 'de', label: 'Allemagne (~0,37 $/kWh)', ratePerKwh: 0.37 },
      { key: 'uk', label: 'Royaume-Uni (~0,33 $/kWh)', ratePerKwh: 0.33 },
      { key: 'fr', label: 'France (~0,22 $/kWh)', ratePerKwh: 0.22 },
    ],
    customPreset: 'Personnalisé',
    resultsHeading: 'Vos chiffres',
    cloudCostMonth: 'Coût cloud / mois',
    localCostMonth: 'Coût opérationnel local / mois',
    totalLocalTco: 'Coût local total sur la période (matériel + électricité − revente)',
    breakEvenMonths: 'Seuil de rentabilité (TCO complet)',
    breakEvenHours: 'Seuil de rentabilité en heures cumulées',
    never: 'Le cloud reste moins cher avec ces valeurs',
    recommendationHeading: 'Recommandation',
    buyLocal: 'ACHETER LOCAL',
    buyLocalDetail: "À cet usage, posséder le matériel coûte moins cher que la location sur la période choisie.",
    rentCloud: 'LOUER EN CLOUD',
    rentCloudDetail: 'À cet usage, la location reste moins chère que l\'achat sur la période choisie.',
    tooClose: 'TROP PROCHE',
    tooCloseDetail: "Les deux options sont à moins de 10 % l'une de l'autre — choisissez selon la flexibilité, la confidentialité ou l'entretien, pas seulement le coût.",
    linkMiniPc: 'Voir le guide mini PC →',
    linkWorkstation: 'Voir le guide workstation GPU →',
    linkCloud: 'Comparer les prix GPU cloud actuels →',
    linkHrefMiniPc: '/fr/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/fr/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/fr/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: "Seuil de rentabilité naïf (prix du matériel ÷ tarif cloud uniquement, hors électricité et revente) pour ces valeurs : ",
    months: 'mois',
    hours: 'heures',
  },
  ja: {
    hoursLabel: '月間使用時間',
    hoursHelp: '1日の平均使用時間×30。例：1日8時間＝月240時間。',
    cloudRateLabel: 'クラウドGPU料金（ドル/時）',
    cloudRateHelp: '同等GPUのスポット/オンデマンド平均料金（RunPod、Vast.ai、Lambda Labsなど）。',
    hardwareLabel: 'ローカルハードウェア価格（ドル）',
    hardwareHelp: 'GPUだけでなく、ケース・電源・RAM・ストレージを含むシステム全体の価格。',
    electricityLabel: '電気料金（ドル/kWh）',
    electricityHelp: 'ご自宅の電気料金。プリセットを選ぶか、独自の値を入力してください。',
    drawLabel: 'システム消費電力（W）',
    resaleLabel: '期末の想定売却価格（ドル）',
    resaleHelp: '使用期間終了時にハードウェアを売却した場合の想定額。',
    ownershipLabel: '使用予定期間（月）',
    ownershipHelp: 'このハードウェアを使用し続ける予定の期間。',
    electricityPresets: [
      { key: 'us', label: '米国（約0.17ドル/kWh）', ratePerKwh: 0.17 },
      { key: 'de', label: 'ドイツ（約0.37ドル/kWh）', ratePerKwh: 0.37 },
      { key: 'uk', label: '英国（約0.33ドル/kWh）', ratePerKwh: 0.33 },
      { key: 'fr', label: 'フランス（約0.22ドル/kWh）', ratePerKwh: 0.22 },
    ],
    customPreset: 'カスタム',
    resultsHeading: '計算結果',
    cloudCostMonth: 'クラウド費用／月',
    localCostMonth: 'ローカル運用費用／月',
    totalLocalTco: '期間内ローカル総費用（ハードウェア＋電気代−売却額）',
    breakEvenMonths: '損益分岐点（完全TCO）',
    breakEvenHours: '損益分岐点（累計時間）',
    never: 'この条件ではクラウドの方が安いままです',
    recommendationHeading: '推奨',
    buyLocal: 'ローカル購入推奨',
    buyLocalDetail: 'この使用量では、期間全体で見るとハードウェア購入の方がレンタルより安くなります。',
    rentCloud: 'クラウドレンタル推奨',
    rentCloudDetail: 'この使用量では、期間全体で見るとレンタルの方が購入より安いままです。',
    tooClose: '判断が難しい',
    tooCloseDetail: '両者の差は10%以内です。コストだけでなく、柔軟性・プライバシー・保守の好みで判断してください。',
    linkMiniPc: 'ミニPCガイドを見る →',
    linkWorkstation: 'GPUワークステーションガイドを見る →',
    linkCloud: '現在のクラウドGPU料金を比較する →',
    linkHrefMiniPc: '/ja/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/ja/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/ja/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: '単純な損益分岐点（ハードウェア価格÷クラウド料金のみ、電気代・売却額を除く）：',
    months: 'ヶ月',
    hours: '時間',
  },
  zh: {
    hoursLabel: '每月使用小时数',
    hoursHelp: '日均使用时间 × 30。例如：每天8小时 = 每月240小时。',
    cloudRateLabel: '云GPU费率（美元/小时）',
    cloudRateHelp: '同等GPU的现货/按需混合费率（RunPod、Vast.ai、Lambda Labs等）。',
    hardwareLabel: '本地硬件价格（美元）',
    hardwareHelp: '整机成本——GPU、机箱、电源、内存、存储，而不仅是GPU本身。',
    electricityLabel: '电费（美元/kWh）',
    electricityHelp: '您所在地的居民电价。可选择预设值或自行输入。',
    drawLabel: '系统功耗（瓦）',
    resaleLabel: '期末预估转售价值（美元）',
    resaleHelp: '在使用期结束时预计能转售硬件所得的金额。',
    ownershipLabel: '持有周期（月）',
    ownershipHelp: '您计划持有并使用该硬件的时长。',
    electricityPresets: [
      { key: 'us', label: '美国（约0.17美元/kWh）', ratePerKwh: 0.17 },
      { key: 'de', label: '德国（约0.37美元/kWh）', ratePerKwh: 0.37 },
      { key: 'uk', label: '英国（约0.33美元/kWh）', ratePerKwh: 0.33 },
      { key: 'fr', label: '法国（约0.22美元/kWh）', ratePerKwh: 0.22 },
    ],
    customPreset: '自定义',
    resultsHeading: '计算结果',
    cloudCostMonth: '云端费用/月',
    localCostMonth: '本地运行费用/月',
    totalLocalTco: '周期内本地总成本（硬件+电费−转售价值）',
    breakEvenMonths: '盈亏平衡点（完整TCO）',
    breakEvenHours: '盈亏平衡点（累计小时数）',
    never: '在当前输入下，云端始终更便宜',
    recommendationHeading: '建议',
    buyLocal: '建议购买本地硬件',
    buyLocalDetail: '按此使用量，在整个持有周期内自购硬件比租用更便宜。',
    rentCloud: '建议租用云端',
    rentCloudDetail: '按此使用量，在整个持有周期内租用比自购硬件更便宜。',
    tooClose: '难以判断',
    tooCloseDetail: '两个方案的成本差异在10%以内——请根据灵活性、隐私或维护偏好做决定，而不仅仅是成本。',
    linkMiniPc: '查看迷你主机指南 →',
    linkWorkstation: '查看GPU工作站指南 →',
    linkCloud: '比较当前云GPU价格 →',
    linkHrefMiniPc: '/zh/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/zh/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/zh/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: '简单盈亏平衡点（仅硬件价格÷云端费率，不含电费和转售价值）：',
    months: '个月',
    hours: '小时',
  },
  pt: {
    hoursLabel: 'Horas de uso por mês',
    hoursHelp: 'Uso diário médio × 30. Exemplo: 8 h/dia = 240 h/mês.',
    cloudRateLabel: 'Tarifa de GPU em nuvem ($/hora)',
    cloudRateHelp: 'Tarifa mista spot/sob demanda para uma GPU comparável (RunPod, Vast.ai, Lambda Labs).',
    hardwareLabel: 'Preço do hardware local ($)',
    hardwareHelp: 'Custo total do sistema — GPU, gabinete, fonte, RAM, armazenamento, não só a GPU.',
    electricityLabel: 'Tarifa de eletricidade ($/kWh)',
    electricityHelp: 'Sua tarifa residencial. Escolha um valor predefinido ou insira o seu.',
    drawLabel: 'Consumo do sistema (W)',
    resaleLabel: 'Valor de revenda estimado ao final ($)',
    resaleHelp: 'Quanto você espera obter na revenda do hardware ao fim do período de uso.',
    ownershipLabel: 'Período de posse (meses)',
    ownershipHelp: 'Por quanto tempo você planeja manter e usar este hardware.',
    electricityPresets: [
      { key: 'us', label: 'EUA (~US$ 0,17/kWh)', ratePerKwh: 0.17 },
      { key: 'de', label: 'Alemanha (~US$ 0,37/kWh)', ratePerKwh: 0.37 },
      { key: 'uk', label: 'Reino Unido (~US$ 0,33/kWh)', ratePerKwh: 0.33 },
      { key: 'fr', label: 'França (~US$ 0,22/kWh)', ratePerKwh: 0.22 },
    ],
    customPreset: 'Personalizado',
    resultsHeading: 'Seus números',
    cloudCostMonth: 'Custo em nuvem / mês',
    localCostMonth: 'Custo operacional local / mês',
    totalLocalTco: 'Custo local total no período (hardware + eletricidade − revenda)',
    breakEvenMonths: 'Ponto de equilíbrio (TCO completo)',
    breakEvenHours: 'Ponto de equilíbrio em horas acumuladas',
    never: 'A nuvem permanece mais barata com esses valores',
    recommendationHeading: 'Recomendação',
    buyLocal: 'COMPRAR LOCAL',
    buyLocalDetail: 'Nesse uso, possuir o hardware custa menos que alugar durante o período de posse.',
    rentCloud: 'ALUGAR NA NUVEM',
    rentCloudDetail: 'Nesse uso, alugar continua mais barato que comprar durante o período de posse.',
    tooClose: 'MUITO PRÓXIMO',
    tooCloseDetail: 'As duas opções ficam a menos de 10% uma da outra — decida com base em flexibilidade, privacidade ou manutenção, não só no custo.',
    linkMiniPc: 'Ver o guia de mini PC →',
    linkWorkstation: 'Ver o guia de workstation com GPU →',
    linkCloud: 'Comparar preços atuais de GPU em nuvem →',
    linkHrefMiniPc: '/pt/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/pt/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/pt/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: 'Ponto de equilíbrio simples (preço do hardware ÷ tarifa de nuvem apenas, sem eletricidade e revenda) para estes valores: ',
    months: 'meses',
    hours: 'horas',
  },
  ar: {
    hoursLabel: 'ساعات الاستخدام شهريًا',
    hoursHelp: 'متوسط الاستخدام اليومي × 30. مثال: 8 ساعات/يوم = 240 ساعة/شهر.',
    cloudRateLabel: 'تعرفة GPU السحابي (دولار/ساعة)',
    cloudRateHelp: 'تعرفة مختلطة فورية/عند الطلب لبطاقة GPU مماثلة (RunPod، Vast.ai، Lambda Labs).',
    hardwareLabel: 'سعر الأجهزة المحلية (دولار)',
    hardwareHelp: 'تكلفة النظام الكاملة — GPU والصندوق ومزود الطاقة والذاكرة والتخزين، وليس GPU فقط.',
    electricityLabel: 'تعرفة الكهرباء (دولار/كيلوواط ساعة)',
    electricityHelp: 'تعرفتك السكنية. اختر قيمة جاهزة أو أدخل قيمتك الخاصة.',
    drawLabel: 'استهلاك النظام (واط)',
    resaleLabel: 'قيمة إعادة البيع المتوقعة في النهاية (دولار)',
    resaleHelp: 'المبلغ الذي تتوقع الحصول عليه من بيع الجهاز في نهاية فترة الاستخدام.',
    ownershipLabel: 'فترة الامتلاك (أشهر)',
    ownershipHelp: 'المدة التي تخطط للاحتفاظ بهذه الأجهزة واستخدامها.',
    electricityPresets: [
      { key: 'us', label: 'الولايات المتحدة (نحو 0.17 دولار/كيلوواط ساعة)', ratePerKwh: 0.17 },
      { key: 'de', label: 'ألمانيا (نحو 0.37 دولار/كيلوواط ساعة)', ratePerKwh: 0.37 },
      { key: 'uk', label: 'المملكة المتحدة (نحو 0.33 دولار/كيلوواط ساعة)', ratePerKwh: 0.33 },
      { key: 'fr', label: 'فرنسا (نحو 0.22 دولار/كيلوواط ساعة)', ratePerKwh: 0.22 },
    ],
    customPreset: 'مخصص',
    resultsHeading: 'أرقامك',
    cloudCostMonth: 'تكلفة السحابة / شهر',
    localCostMonth: 'تكلفة التشغيل المحلي / شهر',
    totalLocalTco: 'إجمالي التكلفة المحلية خلال الفترة (الأجهزة + الكهرباء − إعادة البيع)',
    breakEvenMonths: 'نقطة التعادل (TCO كاملة)',
    breakEvenHours: 'نقطة التعادل بالساعات التراكمية',
    never: 'تبقى السحابة أرخص عند هذه القيم',
    recommendationHeading: 'التوصية',
    buyLocal: 'اشترِ محليًا',
    buyLocalDetail: 'عند هذا الاستخدام، تكون ملكية الأجهزة أرخص من الاستئجار خلال فترة الامتلاك.',
    rentCloud: 'استأجر سحابيًا',
    rentCloudDetail: 'عند هذا الاستخدام، يبقى الاستئجار أرخص من الشراء خلال فترة الامتلاك.',
    tooClose: 'قريب جدًا للحسم',
    tooCloseDetail: 'يقل الفرق بين الخيارين عن 10% — اختر وفق المرونة أو الخصوصية أو تفضيل الصيانة، لا التكلفة وحدها.',
    linkMiniPc: 'عرض دليل الأجهزة المصغّرة ←',
    linkWorkstation: 'عرض دليل محطة عمل GPU ←',
    linkCloud: 'قارن أسعار GPU السحابي الحالية ←',
    linkHrefMiniPc: '/ar/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/ar/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/ar/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: 'نقطة التعادل البسيطة (سعر الأجهزة ÷ تعرفة السحابة فقط، دون الكهرباء وإعادة البيع) لهذه القيم: ',
    months: 'أشهر',
    hours: 'ساعة',
  },
  ko: {
    hoursLabel: '월간 사용 시간',
    hoursHelp: '일평균 사용 시간 × 30. 예: 하루 8시간 = 월 240시간.',
    cloudRateLabel: '클라우드 GPU 요금 (달러/시간)',
    cloudRateHelp: '동급 GPU의 스팟/온디맨드 혼합 요금 (RunPod, Vast.ai, Lambda Labs 등).',
    hardwareLabel: '로컬 하드웨어 가격 (달러)',
    hardwareHelp: 'GPU뿐 아니라 케이스·전원공급장치·RAM·저장장치를 포함한 시스템 전체 비용.',
    electricityLabel: '전기 요금 (달러/kWh)',
    electricityHelp: '거주 지역 전기 요금. 사전 설정값을 선택하거나 직접 입력하세요.',
    drawLabel: '시스템 소비 전력 (W)',
    resaleLabel: '종료 시점 예상 재판매 가치 (달러)',
    resaleHelp: '사용 기간 종료 시 하드웨어를 재판매했을 때 예상 금액.',
    ownershipLabel: '보유 기간 (개월)',
    ownershipHelp: '이 하드웨어를 보유하고 사용할 것으로 예상되는 기간.',
    electricityPresets: [
      { key: 'us', label: '미국 (약 $0.17/kWh)', ratePerKwh: 0.17 },
      { key: 'de', label: '독일 (약 $0.37/kWh)', ratePerKwh: 0.37 },
      { key: 'uk', label: '영국 (약 $0.33/kWh)', ratePerKwh: 0.33 },
      { key: 'fr', label: '프랑스 (약 $0.22/kWh)', ratePerKwh: 0.22 },
    ],
    customPreset: '사용자 지정',
    resultsHeading: '계산 결과',
    cloudCostMonth: '클라우드 비용 / 월',
    localCostMonth: '로컬 운영 비용 / 월',
    totalLocalTco: '기간 내 로컬 총비용 (하드웨어 + 전기 − 재판매)',
    breakEvenMonths: '손익분기점 (전체 TCO)',
    breakEvenHours: '손익분기점 (누적 시간)',
    never: '이 값에서는 클라우드가 계속 더 저렴합니다',
    recommendationHeading: '추천',
    buyLocal: '로컬 구매 추천',
    buyLocalDetail: '이 사용량에서는 보유 기간 동안 하드웨어 구매가 대여보다 저렴합니다.',
    rentCloud: '클라우드 대여 추천',
    rentCloudDetail: '이 사용량에서는 보유 기간 동안 대여가 구매보다 저렴합니다.',
    tooClose: '판단하기 어려움',
    tooCloseDetail: '두 옵션의 차이가 10% 이내입니다 — 비용만이 아니라 유연성, 개인정보 보호, 유지관리 선호도를 기준으로 결정하세요.',
    linkMiniPc: '미니 PC 가이드 보기 →',
    linkWorkstation: 'GPU 워크스테이션 가이드 보기 →',
    linkCloud: '현재 클라우드 GPU 가격 비교 →',
    linkHrefMiniPc: '/ko/local-llms/best-mini-pcs-local-llm',
    linkHrefWorkstation: '/ko/local-llms/local-llm-workstation-build',
    linkHrefCloud: '/ko/local-llms/cloud-gpu-rental-comparison-2026',
    naiveNote: '단순 손익분기점(하드웨어 가격 ÷ 클라우드 요금만, 전기·재판매 제외) 기준: ',
    months: '개월',
    hours: '시간',
  },
};

export function CostCalculator() {
  const detectedLang = useLang() as Language;
  const lang = detectedLang in COPY ? detectedLang : 'en';
  const t = (COPY[lang] ?? COPY['en'])!;

  const [hoursPerMonth, setHoursPerMonth] = useState<number>(240);
  const [cloudRate, setCloudRate] = useState<number>(0.5);
  const [hardwarePrice, setHardwarePrice] = useState<number>(3200);
  const [electricityRate, setElectricityRate] = useState<number>(0.17);
  const [powerDrawW, setPowerDrawW] = useState<number>(450);
  const [resaleValue, setResaleValue] = useState<number>(1400);
  const [ownershipMonths, setOwnershipMonths] = useState<number>(36);
  const [presetKey, setPresetKey] = useState<string>('us');

  const applyPreset = (preset: ElectricityPreset) => {
    setPresetKey(preset.key);
    setElectricityRate(preset.ratePerKwh);
  };

  const calc = useMemo(() => {
    const electricityCostPerHour = (powerDrawW / 1000) * electricityRate;
    const cloudCostPerMonth = hoursPerMonth * cloudRate;
    const localElectricityPerMonth = hoursPerMonth * electricityCostPerHour;

    const totalCloudCost = cloudCostPerMonth * ownershipMonths;
    const totalLocalCost = hardwarePrice + localElectricityPerMonth * ownershipMonths - resaleValue;

    // Naive break-even: hardware price only, ignoring electricity/resale.
    const naiveBreakEvenHours = cloudRate > 0 ? hardwarePrice / cloudRate : Infinity;

    // Full-TCO break-even: monthly cloud rate vs. monthly local rate (electricity
    // minus amortized resale credit), solved for months, then converted to hours.
    const resaleCreditPerMonth = ownershipMonths > 0 ? resaleValue / ownershipMonths : 0;
    const netLocalMonthlyRate = localElectricityPerMonth - resaleCreditPerMonth;
    const monthlyDelta = cloudCostPerMonth - netLocalMonthlyRate;
    const breakEvenMonths = monthlyDelta > 0 ? hardwarePrice / monthlyDelta : Infinity;
    const breakEvenHours = Number.isFinite(breakEvenMonths) ? breakEvenMonths * hoursPerMonth : Infinity;

    let recommendation: 'local' | 'cloud' | 'close' = 'close';
    if (totalCloudCost > 0) {
      const diff = (totalCloudCost - totalLocalCost) / totalCloudCost;
      if (diff > 0.1) recommendation = 'local';
      else if (diff < -0.1) recommendation = 'cloud';
      else recommendation = 'close';
    }

    return {
      cloudCostPerMonth,
      localElectricityPerMonth,
      totalCloudCost,
      totalLocalCost,
      naiveBreakEvenHours,
      breakEvenMonths,
      breakEvenHours,
      recommendation,
    };
  }, [hoursPerMonth, cloudRate, hardwarePrice, electricityRate, powerDrawW, resaleValue, ownershipMonths]);

  const fmt = (n: number) => (Number.isFinite(n) ? `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '—');
  const fmtRound = (n: number) => (Number.isFinite(n) ? Math.round(n).toLocaleString() : '—');

  const recommendedLinkHref = hoursPerMonth < 100
    ? t.linkHrefCloud
    : hardwarePrice < 1800
      ? t.linkHrefMiniPc
      : t.linkHrefWorkstation;
  const recommendedLinkLabel = hoursPerMonth < 100
    ? t.linkCloud
    : hardwarePrice < 1800
      ? t.linkMiniPc
      : t.linkWorkstation;

  const bannerStyles = {
    local: 'bg-green-50 border-green-300 text-green-800',
    cloud: 'bg-orange-50 border-orange-300 text-orange-800',
    close: 'bg-slate-50 border-slate-300 text-slate-800',
  } as const;

  const bannerTitle = {
    local: t.buyLocal,
    cloud: t.rentCloud,
    close: t.tooClose,
  } as const;

  const bannerDetail = {
    local: t.buyLocalDetail,
    cloud: t.rentCloudDetail,
    close: t.tooCloseDetail,
  } as const;

  return (
    <div className="space-y-6 bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.hoursHelp}>{t.hoursLabel}</label>
          <input
            type="number"
            min={0}
            value={hoursPerMonth}
            onChange={(e) => setHoursPerMonth(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-1">{t.hoursHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.cloudRateHelp}>{t.cloudRateLabel}</label>
          <input
            type="number"
            min={0}
            step={0.01}
            value={cloudRate}
            onChange={(e) => setCloudRate(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-1">{t.cloudRateHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.hardwareHelp}>{t.hardwareLabel}</label>
          <input
            type="number"
            min={0}
            value={hardwarePrice}
            onChange={(e) => setHardwarePrice(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-1">{t.hardwareHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.electricityHelp}>{t.electricityLabel}</label>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {t.electricityPresets.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => applyPreset(p)}
                className={`px-2 py-1 text-xs rounded-md border transition-colors ${
                  presetKey === p.key
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-purple-400'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={0}
            step={0.01}
            value={electricityRate}
            onChange={(e) => { setPresetKey('custom'); setElectricityRate(Math.max(0, Number(e.target.value))); }}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">{t.drawLabel}</label>
          <input
            type="number"
            min={0}
            value={powerDrawW}
            onChange={(e) => setPowerDrawW(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.resaleHelp}>{t.resaleLabel}</label>
          <input
            type="number"
            min={0}
            value={resaleValue}
            onChange={(e) => setResaleValue(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-1">{t.resaleHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" title={t.ownershipHelp}>{t.ownershipLabel}</label>
          <input
            type="number"
            min={1}
            value={ownershipMonths}
            onChange={(e) => setOwnershipMonths(Math.max(1, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-1">{t.ownershipHelp}</p>
        </div>
      </div>

      {/* Recommendation banner */}
      <div className={`border-2 rounded-lg p-5 ${bannerStyles[calc.recommendation]}`}>
        <p className="text-xs font-bold uppercase tracking-widest mb-1">{t.recommendationHeading}</p>
        <p className="text-2xl font-bold mb-1">{bannerTitle[calc.recommendation]}</p>
        <p className="text-sm mb-3">{bannerDetail[calc.recommendation]}</p>
        <Link href={recommendedLinkHref} className="inline-block text-sm font-semibold underline underline-offset-2">
          {recommendedLinkLabel}
        </Link>
      </div>

      {/* Results grid */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
        <p className="text-xs font-semibold text-slate-600 uppercase">{t.resultsHeading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.cloudCostMonth}</p>
            <p className="text-xl font-bold text-slate-900">{fmt(calc.cloudCostPerMonth)}</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.localCostMonth}</p>
            <p className="text-xl font-bold text-slate-900">{fmt(calc.localElectricityPerMonth)}</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 sm:col-span-2">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.totalLocalTco}</p>
            <p className="text-xl font-bold text-slate-900">{fmt(calc.totalLocalCost)}</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.breakEvenMonths}</p>
            <p className="text-xl font-bold text-slate-900">
              {Number.isFinite(calc.breakEvenMonths) ? `${fmtRound(calc.breakEvenMonths)} ${t.months}` : t.never}
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.breakEvenHours}</p>
            <p className="text-xl font-bold text-slate-900">
              {Number.isFinite(calc.breakEvenHours) ? `${fmtRound(calc.breakEvenHours)} ${t.hours}` : t.never}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
          {t.naiveNote}{fmtRound(calc.naiveBreakEvenHours)} {t.hours}
        </p>
      </div>
    </div>
  );
}
