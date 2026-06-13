export type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko';

const GEO_ENTITIES = {
  llm: {
    '@id': 'https://www.wikidata.org/wiki/Q115305900',
    names: { en: 'Large language model', de: 'Großes Sprachmodell', fr: 'Grand modèle linguistique', zh: '大型语言模型', ja: '大規模言語モデル', es: 'Modelo de lenguaje grande', pt: 'Modelo de linguagem grande', ar: 'نموذج لغوي كبير', ko: '대형 언어 모델' },
  },
  promptEngineering: {
    '@id': 'https://www.wikidata.org/wiki/Q108941486',
    names: { en: 'Prompt engineering', de: 'Prompt Engineering', fr: 'Ingénierie des prompts', zh: '提示工程', ja: 'プロンプトエンジニアリング', es: 'Prompt engineering', pt: 'Engenharia de prompts', ar: 'هندسة التوجيهات', ko: '프롬프트 엔지니어링' },
  },
  aiHallucination: {
    '@id': 'https://www.wikidata.org/wiki/Q116197048',
    names: { en: 'AI hallucination', de: 'Halluzination (Künstliche Intelligenz)', fr: 'Hallucination (IA)', zh: '人工智能幻觉', ja: 'ハルシネーション (人工知能)', es: 'Alucinación (IA)', pt: 'Alucinação (IA)', ar: 'الهلوسة (ذكاء اصطناعي)', ko: 'AI 환각' },
  },
  openSource: {
    '@id': 'https://www.wikidata.org/wiki/Q1130645',
    names: { en: 'Open-source software', de: 'Open-Source-Software', fr: 'Logiciel open source', zh: '开源软件', ja: 'オープンソースソフトウェア', es: 'Software de código abierto', pt: 'Software de código aberto', ar: 'برمجيات مفتوحة المصدر', ko: '오픈 소스 소프트웨어' },
  },
  gpu: {
    '@id': 'https://www.wikidata.org/wiki/Q183484',
    names: { en: 'Graphics processing unit', de: 'Grafikprozessor', fr: 'Processeur graphique', zh: '图形处理器', ja: 'グラフィックス プロセッシング ユニット', es: 'Unidad de procesamiento gráfico', pt: 'Unidade de processamento gráfico', ar: 'وحدة معالجة الرسوميات', ko: '그래픽 처리 장치' },
  },
  vram: {
    '@id': 'https://www.wikidata.org/wiki/Q114894',
    names: { en: 'Video RAM', de: 'Video Random Access Memory', fr: 'Mémoire vidéo', zh: '显存', ja: 'ビデオメモリ', es: 'RAM de vídeo', pt: 'Memória de vídeo', ar: 'ذاكرة الفيديو', ko: '비디오 RAM' },
  },
  ai: {
    '@id': 'https://www.wikidata.org/wiki/Q11660',
    names: { en: 'Artificial intelligence', de: 'Künstliche Intelligenz', fr: 'Intelligence artificielle', zh: '人工智能', ja: '人工知能', es: 'Inteligencia artificial', pt: 'Inteligência artificial', ar: 'الذكاء الاصطناعي', ko: '인공 지능' },
  },
  ml: {
    '@id': 'https://www.wikidata.org/wiki/Q2539',
    names: { en: 'Machine learning', de: 'Maschinelles Lernen', fr: 'Apprentissage automatique', zh: '机器学习', ja: '機械学習', es: 'Aprendizaje automático', pt: 'Aprendizado de máquina', ar: 'تعلم الآلة', ko: '기계 학습' },
  },
  nlp: {
    '@id': 'https://www.wikidata.org/wiki/Q4845',
    names: { en: 'Natural language processing', de: 'Verarbeitung natürlicher Sprache', fr: 'Traitement du langage naturel', zh: '自然语言处理', ja: '自然言語処理', es: 'Procesamiento del lenguaje natural', pt: 'Processamento de linguagem natural', ar: 'معالجة اللغة الطبيعية', ko: '자연어 처리' },
  },
  appleM1: {
    '@id': 'https://www.wikidata.org/wiki/Q101439988',
    names: { en: 'Apple M1', de: 'Apple M1', fr: 'Apple M1', zh: 'Apple M1', ja: 'Apple M1', es: 'Apple M1', pt: 'Apple M1', ar: 'Apple M1', ko: 'Apple M1' },
  },
} as const;

type GeoEntityKey = keyof typeof GEO_ENTITIES;

export function buildGeoAboutEntities(lang: Language, keys: GeoEntityKey[]) {
  return keys.map(key => ({
    '@type': 'Thing',
    name: GEO_ENTITIES[key].names[lang],
    '@id': GEO_ENTITIES[key]['@id'],
  }));
}

const LOCAL_LLM_THEME_MAP: Record<string, GeoEntityKey[]> = {
  'Getting Started': ['llm', 'ai', 'openSource'],
  'Best Models': ['llm', 'ai', 'ml'],
  'Tools & Interfaces': ['llm', 'openSource', 'ai'],
  'Hardware & Performance': ['llm', 'gpu', 'vram', 'ai'],
  'Advanced Techniques': ['llm', 'ml', 'nlp'],
  Enterprise: ['llm', 'ai', 'ml'],
  'GPU Buying Guides': ['gpu', 'vram', 'llm'],
  'Hardware Setups': ['gpu', 'vram', 'llm'],
  'Models by Use Case': ['llm', 'ml', 'ai'],
  'Privacy & Business': ['llm', 'openSource', 'ai'],
  'Privacy & Security': ['llm', 'openSource', 'ai'],
  'Cost & Comparisons': ['llm', 'gpu', 'ai'],
  'Apple Silicon': ['appleM1', 'llm', 'ml', 'gpu'],
};

const PE_THEME_MAP: Record<string, GeoEntityKey[]> = {
  Fundamentals: ['promptEngineering', 'llm', 'ai', 'nlp'],
  Frameworks: ['promptEngineering', 'llm', 'ml'],
  'Framework & Strategy': ['promptEngineering', 'llm', 'ml'],
  Techniques: ['promptEngineering', 'llm', 'ml'],
  'Use Cases by Vertical': ['promptEngineering', 'llm', 'ai'],
  'Use Cases': ['promptEngineering', 'llm', 'ai'],
  'Tools & Platforms': ['promptEngineering', 'llm', 'ai', 'openSource'],
  'Evaluation & Reliability': ['promptEngineering', 'aiHallucination', 'ml', 'llm'],
  'Team Operations & Governance': ['promptEngineering', 'ai', 'llm'],
  'Workflows & Automation': ['promptEngineering', 'llm', 'ai'],
  'Policy & Compliance': ['promptEngineering', 'ai'],
};

const POWER_LLM_THEME_MAP: Record<string, GeoEntityKey[]> = {
  'Overview & Reference': ['llm', 'openSource', 'ai'],
  'Easiest Desktop Apps': ['llm', 'openSource'],
  'RAG & Document Chat': ['llm', 'openSource', 'nlp'],
  'Coding Assistants': ['llm', 'openSource', 'ai'],
  'Local AI Agents & Tool Use': ['llm', 'ai', 'openSource', 'ml'],
  'Creative & Roleplay': ['llm', 'openSource'],
  'Mobile & Edge LLMs': ['llm', 'openSource', 'ml'],
  'Productivity & Knowledge Tools': ['llm', 'openSource', 'ai'],
  'Voice, Speech & Multimodal': ['llm', 'openSource', 'nlp'],
};

export function getLocalLLMGeoEntities(theme: string, lang: Language, slug?: string) {
  let keys = LOCAL_LLM_THEME_MAP[theme] ?? ['llm', 'ai', 'ml'];

  if (slug && /apple-|m[1-4]-/.test(slug)) {
    if (!keys.includes('appleM1')) {
      keys = [...keys, 'appleM1'];
    }
  }

  return buildGeoAboutEntities(lang, keys);
}

export function getPEGeoEntities(theme: string, lang: Language) {
  const keys = PE_THEME_MAP[theme] ?? ['promptEngineering', 'llm', 'nlp'];
  return buildGeoAboutEntities(lang, keys);
}

export function getPowerLLMGeoEntities(theme: string, lang: Language) {
  const keys = POWER_LLM_THEME_MAP[theme] ?? ['llm', 'openSource', 'ai'];
  return buildGeoAboutEntities(lang, keys);
}
