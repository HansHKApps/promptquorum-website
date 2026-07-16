import type { FrameworkLang } from '@/lib/frameworksData'

export type FrameworkUiLabels = {
  home: string
  frameworks: string
  complexity: { Low: string; Medium: string; High: string }
  complexitySuffix: string
  definition: string
  definitionBody: (name: string, expansion: string, fieldCount: number, bestFor: string) => string
  fieldsHeading: (count: number) => string
  realExample: string
  scenario: string
  promptLabel: (name: string) => string
  whenToUse: (name: string) => string
  bestFor: string
  notIdealFor: string
  faqHeading: string
  relatedHeading: string
  allFrameworks: string
}

const EN: FrameworkUiLabels = {
  home: 'Home',
  frameworks: 'Frameworks',
  complexity: { Low: 'Low', Medium: 'Medium', High: 'High' },
  complexitySuffix: 'complexity',
  definition: 'Definition',
  definitionBody: (name, expansion, fieldCount, bestFor) =>
    `The ${name} framework (${expansion}) is a prompt engineering structure that breaks your AI request into ${fieldCount} discrete fields. It is best suited for ${bestFor}.`,
  fieldsHeading: count => `The ${count} Fields`,
  realExample: 'Real Example',
  scenario: 'Scenario:',
  promptLabel: name => `${name} Prompt`,
  whenToUse: name => `When to Use ${name}`,
  bestFor: 'Best for',
  notIdealFor: 'Not ideal for',
  faqHeading: 'Frequently Asked Questions',
  relatedHeading: 'Related Frameworks',
  allFrameworks: 'All Frameworks',
}

const LABELS: Record<FrameworkLang, FrameworkUiLabels> = {
  de: {
    home: 'Startseite',
    frameworks: 'Frameworks',
    complexity: { Low: 'Niedrig', Medium: 'Mittel', High: 'Hoch' },
    complexitySuffix: 'Komplexität',
    definition: 'Definition',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `Das ${name}-Framework (${expansion}) ist eine Prompt-Engineering-Struktur, die Ihre KI-Anfrage in ${fieldCount} einzelne Felder unterteilt. Es eignet sich am besten für ${bestFor}.`,
    fieldsHeading: count => `Die ${count} Felder`,
    realExample: 'Echtes Beispiel',
    scenario: 'Szenario:',
    promptLabel: name => `${name}-Prompt`,
    whenToUse: name => `Wann Sie ${name} einsetzen sollten`,
    bestFor: 'Geeignet für',
    notIdealFor: 'Weniger geeignet für',
    faqHeading: 'Häufig gestellte Fragen',
    relatedHeading: 'Verwandte Frameworks',
    allFrameworks: 'Alle Frameworks',
  },
  fr: {
    home: 'Accueil',
    frameworks: 'Frameworks',
    complexity: { Low: 'Faible', Medium: 'Moyenne', High: 'Élevée' },
    complexitySuffix: 'complexité',
    definition: 'Définition',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `Le framework ${name} (${expansion}) est une structure de prompt engineering qui décompose votre demande en ${fieldCount} champs distincts. Il convient particulièrement à ${bestFor}.`,
    fieldsHeading: count => `Les ${count} champs`,
    realExample: 'Exemple réel',
    scenario: 'Scénario :',
    promptLabel: name => `Prompt ${name}`,
    whenToUse: name => `Quand utiliser ${name}`,
    bestFor: 'Idéal pour',
    notIdealFor: 'Moins adapté pour',
    faqHeading: 'Questions fréquentes',
    relatedHeading: 'Frameworks associés',
    allFrameworks: 'Tous les frameworks',
  },
  es: {
    home: 'Inicio',
    frameworks: 'Frameworks',
    complexity: { Low: 'Baja', Medium: 'Media', High: 'Alta' },
    complexitySuffix: 'complejidad',
    definition: 'Definición',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `El framework ${name} (${expansion}) es una estructura de prompt engineering que divide tu solicitud a la IA en ${fieldCount} campos independientes. Es ideal para ${bestFor}.`,
    fieldsHeading: count => `Los ${count} campos`,
    realExample: 'Ejemplo real',
    scenario: 'Escenario:',
    promptLabel: name => `Prompt ${name}`,
    whenToUse: name => `Cuándo usar ${name}`,
    bestFor: 'Ideal para',
    notIdealFor: 'No ideal para',
    faqHeading: 'Preguntas frecuentes',
    relatedHeading: 'Frameworks relacionados',
    allFrameworks: 'Todos los frameworks',
  },
  pt: {
    home: 'Início',
    frameworks: 'Frameworks',
    complexity: { Low: 'Baixa', Medium: 'Média', High: 'Alta' },
    complexitySuffix: 'complexidade',
    definition: 'Definição',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `O framework ${name} (${expansion}) é uma estrutura de prompt engineering que divide seu pedido à IA em ${fieldCount} campos distintos. É mais indicado para ${bestFor}.`,
    fieldsHeading: count => `Os ${count} campos`,
    realExample: 'Exemplo real',
    scenario: 'Cenário:',
    promptLabel: name => `Prompt ${name}`,
    whenToUse: name => `Quando usar ${name}`,
    bestFor: 'Ideal para',
    notIdealFor: 'Não ideal para',
    faqHeading: 'Perguntas frequentes',
    relatedHeading: 'Frameworks relacionados',
    allFrameworks: 'Todos os frameworks',
  },
  ja: {
    home: 'ホーム',
    frameworks: 'フレームワーク',
    complexity: { Low: '低', Medium: '中', High: '高' },
    complexitySuffix: '複雑度',
    definition: '定義',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `${name}フレームワーク（${expansion}）は、AIへのリクエストを${fieldCount}個の項目に分解するプロンプトエンジニアリング構造です。${bestFor}に最適です。`,
    fieldsHeading: count => `${count}つの項目`,
    realExample: '実例',
    scenario: 'シナリオ：',
    promptLabel: name => `${name}プロンプト`,
    whenToUse: name => `${name}を使うべき場面`,
    bestFor: '適している用途',
    notIdealFor: '適していない用途',
    faqHeading: 'よくある質問',
    relatedHeading: '関連フレームワーク',
    allFrameworks: 'すべてのフレームワーク',
  },
  zh: {
    home: '首页',
    frameworks: '框架',
    complexity: { Low: '低', Medium: '中', High: '高' },
    complexitySuffix: '复杂度',
    definition: '定义',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `${name}框架（${expansion}）是一种提示词工程结构，将你对AI的请求拆分为${fieldCount}个独立字段。最适合${bestFor}。`,
    fieldsHeading: count => `${count}个字段`,
    realExample: '真实示例',
    scenario: '场景：',
    promptLabel: name => `${name}提示词`,
    whenToUse: name => `何时使用${name}`,
    bestFor: '适用场景',
    notIdealFor: '不适用场景',
    faqHeading: '常见问题',
    relatedHeading: '相关框架',
    allFrameworks: '所有框架',
  },
  ar: {
    home: 'الرئيسية',
    frameworks: 'أطر العمل',
    complexity: { Low: 'منخفضة', Medium: 'متوسطة', High: 'عالية' },
    complexitySuffix: 'التعقيد',
    definition: 'التعريف',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `إطار ${name} (${expansion}) هو بنية لهندسة الأوامر تقسّم طلبك إلى الذكاء الاصطناعي إلى ${fieldCount} حقول منفصلة. وهو الأنسب لـ${bestFor}.`,
    fieldsHeading: count => `الحقول الـ${count}`,
    realExample: 'مثال حقيقي',
    scenario: 'السيناريو:',
    promptLabel: name => `أمر ${name}`,
    whenToUse: name => `متى تستخدم ${name}`,
    bestFor: 'الأنسب لـ',
    notIdealFor: 'غير مناسب لـ',
    faqHeading: 'الأسئلة الشائعة',
    relatedHeading: 'أطر عمل ذات صلة',
    allFrameworks: 'جميع أطر العمل',
  },
  ko: {
    home: '홈',
    frameworks: '프레임워크',
    complexity: { Low: '낮음', Medium: '보통', High: '높음' },
    complexitySuffix: '복잡도',
    definition: '정의',
    definitionBody: (name, expansion, fieldCount, bestFor) =>
      `${name} 프레임워크(${expansion})는 AI 요청을 ${fieldCount}개의 개별 필드로 나누는 프롬프트 엔지니어링 구조입니다. ${bestFor}에 가장 적합합니다.`,
    fieldsHeading: count => `${count}가지 필드`,
    realExample: '실제 예시',
    scenario: '시나리오:',
    promptLabel: name => `${name} 프롬프트`,
    whenToUse: name => `${name}를 사용해야 할 때`,
    bestFor: '적합한 용도',
    notIdealFor: '적합하지 않은 용도',
    faqHeading: '자주 묻는 질문',
    relatedHeading: '관련 프레임워크',
    allFrameworks: '모든 프레임워크',
  },
}

export function getFrameworkUiLabels(lang: FrameworkLang | 'en'): FrameworkUiLabels {
  return lang === 'en' ? EN : LABELS[lang]
}
