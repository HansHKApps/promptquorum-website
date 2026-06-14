'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/hooks/useLang';

interface GPU {
  name: string;
  vram: number;
  price?: number;
}

interface Tooltip {
  title: string;
  description: string;
}

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko';

const VRAM_TRANSLATIONS: Partial<Record<Language, {
  popularModels: string;
  modelSize: string;
  quantization: string;
  context: string;
  batchSize: string;
  useCase: string;
  singleUser: string;
  multiUser: string;
  batchProcessing: string;
  baseModel: string;
  contextOH: string;
  batchOH: string;
  systemOH: string;
  totalMinimum: string;
  recommended: string;
  lookFor: string;
  compatibleGPUs: string;
  headroom: string;
  shortBy: string;
  proTips: string;
  tips: string[];
  shareConfig: string;
  loading: string;
  tooltips: Record<string, Tooltip>;
}>> = {
  en: {
    popularModels: 'Popular Models',
    modelSize: 'Model Size',
    quantization: 'Quantization',
    context: 'Context',
    batchSize: 'Batch Size',
    useCase: 'Use Case',
    singleUser: 'Single-user chat',
    multiUser: 'Multi-user API',
    batchProcessing: 'Batch processing',
    baseModel: 'Base Model',
    contextOH: 'Context OH',
    batchOH: 'Batch OH',
    systemOH: 'System OH',
    totalMinimum: 'Total Minimum',
    recommended: 'Recommended (with 25% safety margin)',
    lookFor: 'Look for a GPU with at least',
    compatibleGPUs: 'Compatible GPUs',
    headroom: 'GB headroom',
    shortBy: 'Short by',
    proTips: '💡 Pro Tips:',
    tips: [
      'Always use the "with safety margin" figure when buying a GPU',
      'Q4 gives 90-95% quality with 25% size reduction. Q5 is better if you have room',
      'Context overhead grows with conversation length. Budget 1-3 GB for typical usage',
      'Batch size matters for multi-user APIs. Single-user chat can ignore batch overhead',
    ],
    shareConfig: '📋 Share this configuration:',
    loading: 'Loading...',
    tooltips: {
      modelSize: { title: 'Model Size', description: 'The number of parameters in billions (B). Larger models (70B) are more capable but require more VRAM. Examples: 7B is good for general tasks, 13B for coding/analysis, 70B for advanced reasoning.' },
      quantization: { title: 'Quantization', description: 'Reduces precision of model weights to save VRAM. FP16 is full precision (100% quality), Q8 = 8-bit (99% quality), Q4 = 4-bit (95% quality). Q4 is standard; saves ~75% VRAM with minimal quality loss.' },
      context: { title: 'Context Length', description: 'Maximum conversation history the model can remember. 4K = ~3,000 words, 8K = ~6,000 words, 16K = ~12,000 words. Longer context uses more VRAM during inference.' },
      batchSize: { title: 'Batch Size', description: 'Number of requests processed simultaneously. Size 1 = one user at a time (single-user chat). Size 4+ = multiple users (APIs/servers). Larger batches use more VRAM but improve throughput.' },
      useCase: { title: 'Use Case', description: 'Single-user chat = one person talking to the model. Multi-user API = server handling many concurrent requests. Batch processing = running many requests sequentially (no real-time requirement).' },
    },
  },
  de: {
    popularModels: 'Beliebte Modelle',
    modelSize: 'Modellgröße',
    quantization: 'Quantisierung',
    context: 'Kontext',
    batchSize: 'Batch-Größe',
    useCase: 'Anwendungsfall',
    singleUser: 'Einzelnutzer-Chat',
    multiUser: 'Multi-User-API',
    batchProcessing: 'Batch-Verarbeitung',
    baseModel: 'Basismodell',
    contextOH: 'Kontext-Overhead',
    batchOH: 'Batch-Overhead',
    systemOH: 'System-Overhead',
    totalMinimum: 'Mindest-VRAM',
    recommended: 'Empfohlen (mit 25 % Sicherheitspuffer)',
    lookFor: 'GPU mit mindestens',
    compatibleGPUs: 'Kompatible GPUs',
    headroom: 'GB Puffer',
    shortBy: 'Fehlen',
    proTips: '💡 Praxis-Tipps:',
    tips: [
      'Kaufen Sie immer anhand des Werts „mit Sicherheitspuffer"',
      'Q4 liefert 90–95 % Qualität bei 25 % weniger Größe. Q5 ist besser, wenn VRAM vorhanden',
      'Kontext-Overhead wächst mit der Konversationslänge. Planen Sie 1–3 GB für typische Nutzung ein',
      'Batch-Größe ist wichtig für Multi-User-APIs. Einzelnutzer-Chat kann Batch-Overhead ignorieren',
    ],
    shareConfig: '📋 Diese Konfiguration teilen:',
    loading: 'Wird geladen …',
    tooltips: {
      modelSize: { title: 'Modellgröße', description: 'Anzahl der Parameter in Milliarden (B). Größere Modelle (70B) sind leistungsfähiger, benötigen aber mehr VRAM. Beispiele: 7B für allgemeine Aufgaben, 13B für Code/Analyse, 70B für komplexes Reasoning.' },
      quantization: { title: 'Quantisierung', description: 'Reduziert die Präzision der Modellgewichte, um VRAM zu sparen. FP16 = volle Präzision (100 % Qualität), Q8 = 8-Bit (99 % Qualität), Q4 = 4-Bit (95 % Qualität). Q4 ist Standard: spart ~75 % VRAM bei minimalem Qualitätsverlust.' },
      context: { title: 'Kontextlänge', description: 'Maximale Konversationshistorie, die das Modell behalten kann. 4K = ~3.000 Wörter, 8K = ~6.000 Wörter, 16K = ~12.000 Wörter. Längerer Kontext verbraucht mehr VRAM.' },
      batchSize: { title: 'Batch-Größe', description: 'Anzahl gleichzeitig verarbeiteter Anfragen. Größe 1 = ein Nutzer gleichzeitig. Größe 4+ = mehrere Nutzer (APIs/Server). Größere Batches brauchen mehr VRAM, verbessern aber den Durchsatz.' },
      useCase: { title: 'Anwendungsfall', description: 'Einzelnutzer-Chat = eine Person spricht mit dem Modell. Multi-User-API = Server verarbeitet viele gleichzeitige Anfragen. Batch-Verarbeitung = viele Anfragen sequenziell ohne Echtzeit-Anforderung.' },
    },
  },
  fr: {
    popularModels: 'Modèles populaires',
    modelSize: 'Taille du modèle',
    quantization: 'Quantisation',
    context: 'Contexte',
    batchSize: 'Taille du lot',
    useCase: 'Cas d\'usage',
    singleUser: 'Chat mono-utilisateur',
    multiUser: 'API multi-utilisateurs',
    batchProcessing: 'Traitement par lots',
    baseModel: 'Modèle de base',
    contextOH: 'Surcharge contexte',
    batchOH: 'Surcharge lot',
    systemOH: 'Surcharge système',
    totalMinimum: 'VRAM minimum',
    recommended: 'Recommandé (avec marge de sécurité 25 %)',
    lookFor: 'Choisissez un GPU avec au moins',
    compatibleGPUs: 'GPU compatibles',
    headroom: 'Go de marge',
    shortBy: 'Manque',
    proTips: '💡 Conseils pratiques :',
    tips: [
      'Achetez toujours en vous basant sur la valeur "avec marge de sécurité"',
      'Q4 offre 90-95 % de qualité avec 25 % de réduction de taille. Q5 est préférable si vous avez de la marge',
      'La surcharge de contexte augmente avec la longueur des conversations. Prévoyez 1-3 Go pour un usage typique',
      'La taille du lot compte pour les API multi-utilisateurs. Le chat mono-utilisateur peut ignorer la surcharge de lot',
    ],
    shareConfig: '📋 Partager cette configuration :',
    loading: 'Chargement…',
    tooltips: {
      modelSize: { title: 'Taille du modèle', description: 'Nombre de paramètres en milliards (B). Les modèles plus grands (70B) sont plus performants mais nécessitent plus de VRAM. Exemples : 7B pour les tâches générales, 13B pour le code/analyse, 70B pour le raisonnement avancé.' },
      quantization: { title: 'Quantisation', description: 'Réduit la précision des poids du modèle pour économiser la VRAM. FP16 = précision totale (100 % qualité), Q8 = 8 bits (99 % qualité), Q4 = 4 bits (95 % qualité). Q4 est standard : économise ~75 % de VRAM avec une perte de qualité minimale.' },
      context: { title: 'Longueur de contexte', description: 'Historique de conversation maximal que le modèle peut mémoriser. 4K = ~3 000 mots, 8K = ~6 000 mots, 16K = ~12 000 mots. Un contexte plus long utilise plus de VRAM pendant l\'inférence.' },
      batchSize: { title: 'Taille du lot', description: 'Nombre de requêtes traitées simultanément. Taille 1 = un utilisateur à la fois. Taille 4+ = plusieurs utilisateurs (APIs/serveurs). Les lots plus grands utilisent plus de VRAM mais améliorent le débit.' },
      useCase: { title: 'Cas d\'usage', description: 'Chat mono-utilisateur = une personne parle au modèle. API multi-utilisateurs = serveur gérant de nombreuses requêtes simultanées. Traitement par lots = nombreuses requêtes séquentielles sans exigence temps réel.' },
    },
  },
  ja: {
    popularModels: '人気モデル',
    modelSize: 'モデルサイズ',
    quantization: '量子化',
    context: 'コンテキスト',
    batchSize: 'バッチサイズ',
    useCase: 'ユースケース',
    singleUser: 'シングルユーザーチャット',
    multiUser: 'マルチユーザーAPI',
    batchProcessing: 'バッチ処理',
    baseModel: 'ベースモデル',
    contextOH: 'コンテキストOH',
    batchOH: 'バッチOH',
    systemOH: 'システムOH',
    totalMinimum: '最低VRAM',
    recommended: '推奨（25%安全マージン込み）',
    lookFor: '最低でも以下のVRAMを持つGPUを選択してください：',
    compatibleGPUs: '対応GPU',
    headroom: 'GB余裕',
    shortBy: '不足：',
    proTips: '💡 実践的なヒント：',
    tips: [
      'GPU購入時は常に「安全マージン込み」の値を使用してください',
      'Q4は25%サイズ削減で90〜95%の品質を提供します。余裕があればQ5がより良い',
      'コンテキストオーバーヘッドは会話の長さと共に増加します。通常の使用には1〜3 GBを見込んでください',
      'バッチサイズはマルチユーザーAPIで重要です。シングルユーザーチャットはバッチオーバーヘッドを無視できます',
    ],
    shareConfig: '📋 この設定を共有：',
    loading: '読み込み中…',
    tooltips: {
      modelSize: { title: 'モデルサイズ', description: 'パラメータ数（十億単位）。大きいモデル（70B）はより高性能ですが、より多くのVRAMが必要です。例：7Bは一般タスク向け、13Bはコード/分析向け、70Bは高度な推論向け。' },
      quantization: { title: '量子化', description: 'VRAMを節約するためにモデルウェイトの精度を下げます。FP16は完全精度（品質100%）、Q8=8ビット（99%）、Q4=4ビット（95%）。Q4は標準的で、最小限の品質低下でVRAMを約75%節約します。' },
      context: { title: 'コンテキスト長', description: 'モデルが記憶できる会話履歴の最大量。4K=約3,000語、8K=約6,000語、16K=約12,000語。長いコンテキストは推論中により多くのVRAMを使用します。' },
      batchSize: { title: 'バッチサイズ', description: '同時に処理するリクエスト数。サイズ1=一度に1ユーザー。サイズ4以上=複数ユーザー（API/サーバー）。バッチが大きいほどVRAMが多く必要ですが、スループットが向上します。' },
      useCase: { title: 'ユースケース', description: 'シングルユーザーチャット=1人がモデルと会話。マルチユーザーAPI=多数の同時リクエストを処理するサーバー。バッチ処理=リアルタイム要件なしで多数のリクエストを順次実行。' },
    },
  },
  zh: {
    popularModels: '热门模型',
    modelSize: '模型大小',
    quantization: '量化',
    context: '上下文',
    batchSize: '批量大小',
    useCase: '使用场景',
    singleUser: '单用户聊天',
    multiUser: '多用户API',
    batchProcessing: '批量处理',
    baseModel: '基础模型',
    contextOH: '上下文开销',
    batchOH: '批量开销',
    systemOH: '系统开销',
    totalMinimum: '最低VRAM',
    recommended: '推荐（含25%安全余量）',
    lookFor: '请选择至少具备以下VRAM的GPU：',
    compatibleGPUs: '兼容GPU',
    headroom: 'GB余量',
    shortBy: '不足',
    proTips: '💡 实用技巧：',
    tips: [
      '购买GPU时始终参考"含安全余量"的数值',
      'Q4以减少25%大小获得90-95%质量，有余量时Q5更佳',
      '上下文开销随对话长度增加，典型使用请预留1-3 GB',
      '批量大小对多用户API很重要，单用户聊天可忽略批量开销',
    ],
    shareConfig: '📋 分享此配置：',
    loading: '加载中…',
    tooltips: {
      modelSize: { title: '模型大小', description: '参数数量（以十亿为单位）。更大的模型（70B）能力更强但需要更多VRAM。示例：7B适合一般任务，13B适合代码/分析，70B适合高级推理。' },
      quantization: { title: '量化', description: '降低模型权重精度以节省VRAM。FP16为全精度（100%质量），Q8=8位（99%质量），Q4=4位（95%质量）。Q4是标准选择，以最小质量损失节省约75%的VRAM。' },
      context: { title: '上下文长度', description: '模型可记忆的最大对话历史。4K≈3,000词，8K≈6,000词，16K≈12,000词。更长的上下文在推理过程中需要更多VRAM。' },
      batchSize: { title: '批量大小', description: '同时处理的请求数量。大小1=每次一个用户（单用户聊天）。大小4以上=多个用户（API/服务器）。更大的批量使用更多VRAM，但可提高吞吐量。' },
      useCase: { title: '使用场景', description: '单用户聊天=一个人与模型对话。多用户API=服务器处理多个并发请求。批量处理=顺序运行多个请求（无实时要求）。' },
    },
  },
  ko: {
    popularModels: '인기 모델',
    modelSize: '모델 크기(Model Size)',
    quantization: '양자화(Quantization)',
    context: '컨텍스트(Context)',
    batchSize: '배치 크기(Batch Size)',
    useCase: '사용 사례(Use Case)',
    singleUser: '단일 사용자 채팅',
    multiUser: '다중 사용자 API',
    batchProcessing: '일괄 처리',
    baseModel: '기본 모델',
    contextOH: '컨텍스트 오버헤드',
    batchOH: '배치 오버헤드',
    systemOH: '시스템 오버헤드',
    totalMinimum: '최소 VRAM',
    recommended: '권장 사양 (25% 안전 마진 포함)',
    lookFor: '최소 다음 VRAM을 갖춘 GPU를 선택하세요:',
    compatibleGPUs: '호환 GPU',
    headroom: 'GB 여유',
    shortBy: '부족:',
    proTips: '💡 실용 팁:',
    tips: [
      'GPU 구매 시 항상 "안전 마진 포함" 수치를 기준으로 하세요',
      'Q4는 크기를 25% 줄이면서 90~95% 품질을 유지합니다. 여유가 있다면 Q5가 더 좋습니다',
      '컨텍스트 오버헤드는 대화 길이에 따라 증가합니다. 일반적인 사용에는 1~3 GB를 예비로 확보하세요',
      '배치 크기는 다중 사용자 API에서 중요합니다. 단일 사용자 채팅은 배치 오버헤드를 무시해도 됩니다',
    ],
    shareConfig: '📋 이 설정 공유:',
    loading: '로딩 중…',
    tooltips: {
      modelSize: { title: '모델 크기', description: '매개변수 수(단위: 십억, B). 큰 모델(70B)은 더 강력하지만 더 많은 VRAM이 필요합니다. 예: 7B는 일반 작업에 적합, 13B는 코딩/분석, 70B는 고급 추론에 적합합니다.' },
      quantization: { title: '양자화', description: 'VRAM 절약을 위해 모델 가중치의 정밀도를 낮춥니다. FP16은 완전 정밀도(품질 100%), Q8=8비트(99%), Q4=4비트(95%). Q4가 표준이며, 최소한의 품질 손실로 VRAM을 약 75% 절약합니다.' },
      context: { title: '컨텍스트 길이', description: '모델이 기억할 수 있는 최대 대화 이력입니다. 4K=약 3,000단어, 8K=약 6,000단어, 16K=약 12,000단어. 컨텍스트가 길수록 추론 시 더 많은 VRAM을 사용합니다.' },
      batchSize: { title: '배치 크기', description: '동시에 처리하는 요청 수입니다. 크기 1=한 번에 한 명의 사용자(단일 사용자 채팅). 크기 4 이상=다중 사용자(API/서버). 배치가 클수록 더 많은 VRAM이 필요하지만 처리량이 향상됩니다.' },
      useCase: { title: '사용 사례', description: '단일 사용자 채팅=한 명이 모델과 대화하는 방식입니다. 다중 사용자 API=여러 동시 요청을 처리하는 서버. 일괄 처리=실시간 요구 사항 없이 여러 요청을 순차적으로 실행하는 방식입니다.' },
    },
  },
  pt: {
    popularModels: 'Modelos populares',
    modelSize: 'Tamanho do modelo',
    quantization: 'Quantização',
    context: 'Contexto',
    batchSize: 'Tamanho do lote',
    useCase: 'Caso de uso',
    singleUser: 'Chat de usuário único',
    multiUser: 'API multiusuário',
    batchProcessing: 'Processamento em lote',
    baseModel: 'Modelo base',
    contextOH: 'Overhead de contexto',
    batchOH: 'Overhead de lote',
    systemOH: 'Overhead do sistema',
    totalMinimum: 'VRAM mínima',
    recommended: 'Recomendado (com margem de segurança de 25%)',
    lookFor: 'Procure uma GPU com pelo menos',
    compatibleGPUs: 'GPUs compatíveis',
    headroom: 'GB de margem',
    shortBy: 'Faltam',
    proTips: '💡 Dicas práticas:',
    tips: [
      'Sempre use o valor "com margem de segurança" ao comprar uma GPU',
      'Q4 oferece 90–95% de qualidade com 25% de redução de tamanho. Q5 é melhor se você tiver margem',
      'O overhead de contexto cresce com o tamanho da conversa. Preveja 1–3 GB para uso típico',
      'O tamanho do lote importa para APIs multiusuário. Chat de usuário único pode ignorar o overhead de lote',
    ],
    shareConfig: '📋 Compartilhar esta configuração:',
    loading: 'Carregando…',
    tooltips: {
      modelSize: { title: 'Tamanho do modelo', description: 'O número de parâmetros em bilhões (B). Modelos maiores (70B) são mais capazes, mas exigem mais VRAM. Exemplos: 7B é bom para tarefas gerais, 13B para código/análise, 70B para raciocínio avançado.' },
      quantization: { title: 'Quantização', description: 'Reduz a precisão dos pesos do modelo para economizar VRAM. FP16 é precisão total (100% de qualidade), Q8 = 8 bits (99%), Q4 = 4 bits (95%). Q4 é padrão; economiza ~75% de VRAM com perda mínima de qualidade.' },
      context: { title: 'Comprimento do contexto', description: 'Histórico máximo de conversa que o modelo consegue lembrar. 4K = ~3.000 palavras, 8K = ~6.000 palavras, 16K = ~12.000 palavras. Contextos mais longos usam mais VRAM durante a inferência.' },
      batchSize: { title: 'Tamanho do lote', description: 'Número de requisições processadas simultaneamente. Tamanho 1 = um usuário por vez (chat único). Tamanho 4+ = múltiplos usuários (APIs/servidores). Lotes maiores usam mais VRAM, mas melhoram o throughput.' },
      useCase: { title: 'Caso de uso', description: 'Chat de usuário único = uma pessoa conversando com o modelo. API multiusuário = servidor atendendo muitas requisições simultâneas. Processamento em lote = executar muitas requisições sequencialmente (sem requisito de tempo real).' },
    },
  },
};

interface Preset {
  name: string;
  modelSize: string;
  quantization: string;
  contextLength: string;
  batchSize: string;
}

const PRESETS: Preset[] = [
  {
    name: 'Llama 3.1 8B',
    modelSize: '8B',
    quantization: 'Q5',
    contextLength: '8K',
    batchSize: '1'
  },
  {
    name: 'Mistral 7B',
    modelSize: '7B',
    quantization: 'Q4',
    contextLength: '16K',
    batchSize: '1'
  },
  {
    name: 'Llama 2 13B',
    modelSize: '13B',
    quantization: 'Q5',
    contextLength: '4K',
    batchSize: '1'
  },
  {
    name: 'Llama 2 70B',
    modelSize: '70B',
    quantization: 'Q4',
    contextLength: '4K',
    batchSize: '1'
  }
];

const GPUS: GPU[] = [
  { name: 'RTX 3060', vram: 12, price: 400 },
  { name: 'RTX 4070', vram: 12, price: 600 },
  { name: 'RTX 4070 Ti', vram: 12, price: 700 },
  { name: 'RTX 4080', vram: 16, price: 1200 },
  { name: 'RTX 4090', vram: 24, price: 1800 },
  { name: 'Mac mini M5 (16 GB)', vram: 16, price: 0 },
  { name: 'Mac mini M4 (16 GB)', vram: 16, price: 0 },
  { name: 'MacBook Pro (24 GB)', vram: 24, price: 0 },
  { name: 'M3 Max (36 GB)', vram: 36, price: 0 },
];

const MODEL_SIZES: { [key: string]: number } = {
  '1B': 1,
  '3B': 3,
  '7B': 7,
  '8B': 8,
  '13B': 13,
  '32B': 32,
  '70B': 70,
  '405B': 405,
};

const QUANT_BITS: { [key: string]: number } = {
  'FP16': 16,
  'Q8': 8,
  'Q6': 6,
  'Q5': 5,
  'Q4': 4,
  'Q3': 3,
  'Q2': 2,
};

const CONTEXT_OVERHEAD: { [key: string]: number } = {
  '2K': 0.5,
  '4K': 1.5,
  '8K': 2.5,
  '16K': 4,
  '32K': 6,
  '128K': 12,
};

const BATCH_MULTIPLIER: { [key: string]: number } = {
  '1': 0,
  '2': 0.5,
  '4': 1.5,
  '8': 3,
};

export function VramCalculator() {
  const detectedLang = useLang() as Language
  const lang = detectedLang in VRAM_TRANSLATIONS ? detectedLang : 'en';
  const t = (VRAM_TRANSLATIONS[lang] ?? VRAM_TRANSLATIONS["en"])!;

  const [modelSize, setModelSize] = useState<string>('13B');
  const [quantization, setQuantization] = useState<string>('Q4');
  const [contextLength, setContextLength] = useState<string>('4K');
  const [batchSize, setBatchSize] = useState<string>('1');
  const [useCase, setUseCase] = useState<string>('single');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  // Load from URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const urlModel = params.get('model');
    const urlQuant = params.get('quant');
    const urlContext = params.get('context');
    const urlBatch = params.get('batch');

    if (urlModel && Object.keys(MODEL_SIZES).includes(urlModel)) {
      setModelSize(urlModel);
    }
    if (urlQuant && Object.keys(QUANT_BITS).includes(urlQuant)) {
      setQuantization(urlQuant);
    }
    if (urlContext && Object.keys(CONTEXT_OVERHEAD).includes(urlContext)) {
      setContextLength(urlContext);
    }
    if (urlBatch && Object.keys(BATCH_MULTIPLIER).includes(urlBatch)) {
      setBatchSize(urlBatch);
    }
  }, []);

  useEffect(() => {
    setShareUrl(
      `${window.location.origin}${window.location.pathname}${generateShareUrl(modelSize, quantization, contextLength, batchSize)}`
    );
  }, [modelSize, quantization, contextLength, batchSize]);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveTooltip(null);
    };
    document.addEventListener('click', handleClickOutside, { passive: true });
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const calculations = useMemo(() => {
    const modelBillions = MODEL_SIZES[modelSize] || 13;
    const quantBits = QUANT_BITS[quantization] || 4;
    const contextOH = CONTEXT_OVERHEAD[contextLength] || 1.5;
    const batchOH = BATCH_MULTIPLIER[batchSize] || 0;

    const baseVram = (modelBillions * quantBits) / 8;
    const contextVram = contextOH;
    const batchVram = batchOH;
    const systemVram = 1;

    const totalRequired = baseVram + contextVram + batchVram + systemVram;
    const withSafety = Math.ceil(totalRequired * 1.25 * 4) / 4; // Round up to nearest 0.25

    return {
      baseVram: baseVram.toFixed(2),
      contextVram: contextVram.toFixed(2),
      batchVram: batchVram.toFixed(2),
      systemVram: systemVram.toFixed(2),
      totalRequired: totalRequired.toFixed(2),
      withSafety: withSafety.toFixed(2),
    };
  }, [modelSize, quantization, contextLength, batchSize]);

  const getGpuFit = (requiredVram: number, gpuVram: number) => {
    const headroom = gpuVram - requiredVram;
    if (headroom < 0) return { status: '❌ Exceeds', color: 'bg-red-50', text: 'text-red-700' };
    if (headroom < 1) return { status: '⚠️ Tight', color: 'bg-yellow-50', text: 'text-yellow-700' };
    return { status: '✅ Fits', color: 'bg-green-50', text: 'text-green-700' };
  };

  const required = parseFloat(calculations.withSafety);

  const LabelWithInfo = ({ tooltipKey }: { tooltipKey: string }) => (
    <div className="flex items-center gap-1">
      <label className="text-sm font-semibold text-slate-700">{t.tooltips[tooltipKey]?.title ?? tooltipKey}</label>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setActiveTooltip(activeTooltip === tooltipKey ? null : tooltipKey);
        }}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-700 text-xs font-bold cursor-help transition-colors"
        title="Click for more info"
      >
        ℹ
      </button>
    </div>
  );

  const applyPreset = (preset: Preset) => {
    setModelSize(preset.modelSize);
    setQuantization(preset.quantization);
    setContextLength(preset.contextLength);
    setBatchSize(preset.batchSize);
  };

  return (
    <div className="space-y-6 bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
      {/* Preset Buttons */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-600 uppercase">{t.popularModels}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="px-3 py-2 bg-white hover:bg-purple-50 border border-slate-300 hover:border-purple-400 rounded-md text-sm font-medium text-slate-700 hover:text-purple-700 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Model Size */}
        <div className="relative">
          <div className="block mb-2">
            <LabelWithInfo tooltipKey="modelSize" />
          </div>
          {activeTooltip === 'modelSize' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{t.tooltips.modelSize.title}</p>
              <p>{t.tooltips.modelSize.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={modelSize}
            onChange={(e) => setModelSize(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(MODEL_SIZES).map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Quantization */}
        <div className="relative">
          <div className="block mb-2">
            <LabelWithInfo tooltipKey="quantization" />
          </div>
          {activeTooltip === 'quantization' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg w-64 text-xs">
              <p className="font-semibold mb-1">{t.tooltips.quantization.title}</p>
              <p>{t.tooltips.quantization.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={quantization}
            onChange={(e) => setQuantization(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(QUANT_BITS).map((quant) => (
              <option key={quant} value={quant}>{quant}</option>
            ))}
          </select>
        </div>

        {/* Context Length */}
        <div className="relative">
          <div className="block mb-2">
            <LabelWithInfo tooltipKey="context" />
          </div>
          {activeTooltip === 'context' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg w-64 text-xs">
              <p className="font-semibold mb-1">{t.tooltips.context.title}</p>
              <p>{t.tooltips.context.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={contextLength}
            onChange={(e) => setContextLength(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(CONTEXT_OVERHEAD).map((ctx) => (
              <option key={ctx} value={ctx}>{ctx}</option>
            ))}
          </select>
        </div>

        {/* Batch Size */}
        <div className="relative">
          <div className="block mb-2">
            <LabelWithInfo tooltipKey="batchSize" />
          </div>
          {activeTooltip === 'batchSize' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg w-64 text-xs">
              <p className="font-semibold mb-1">{t.tooltips.batchSize.title}</p>
              <p>{t.tooltips.batchSize.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(BATCH_MULTIPLIER).map((batch) => (
              <option key={batch} value={batch}>{batch}</option>
            ))}
          </select>
        </div>

        {/* Use Case */}
        <div className="relative">
          <div className="block mb-2">
            <LabelWithInfo tooltipKey="useCase" />
          </div>
          {activeTooltip === 'useCase' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg w-64 text-xs">
              <p className="font-semibold mb-1">{t.tooltips.useCase.title}</p>
              <p>{t.tooltips.useCase.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="single">{t.singleUser}</option>
            <option value="multi">{t.multiUser}</option>
            <option value="batch">{t.batchProcessing}</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.baseModel}</p>
            <p className="text-xl font-bold text-slate-900">{calculations.baseVram} GB</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.contextOH}</p>
            <p className="text-xl font-bold text-slate-900">{calculations.contextVram} GB</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.batchOH}</p>
            <p className="text-xl font-bold text-slate-900">{calculations.batchVram} GB</p>
          </div>
          <div className="border-l-4 border-gray-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.systemOH}</p>
            <p className="text-xl font-bold text-slate-900">{calculations.systemVram} GB</p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 md:col-span-2">
            <p className="text-xs font-semibold text-slate-600 uppercase">{t.totalMinimum}</p>
            <p className="text-xl font-bold text-slate-900">{calculations.totalRequired} GB</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-4">
          <p className="text-xs font-semibold text-slate-600 uppercase mb-1">{t.recommended}</p>
          <p className="text-2xl font-bold text-purple-700">{calculations.withSafety} GB</p>
          <p className="text-xs text-slate-600 mt-2">👉 {t.lookFor} {calculations.withSafety} GB VRAM</p>
        </div>
      </div>

      {/* GPU Compatibility */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">{t.compatibleGPUs}</h3>
        <div className="space-y-2">
          {GPUS.map((gpu) => {
            const fit = getGpuFit(required, gpu.vram);
            return (
              <div key={gpu.name} className={`${fit.color} border border-slate-200 rounded-lg p-3 flex items-center justify-between`}>
                <div>
                  <p className={`font-semibold ${fit.text}`}>{gpu.name} ({gpu.vram} GB)</p>
                  <p className="text-xs text-slate-600">
                    {gpu.vram >= required
                      ? `${(gpu.vram - required).toFixed(1)} ${t.headroom}`
                      : `${t.shortBy} ${(required - gpu.vram).toFixed(1)} GB`}
                  </p>
                </div>
                <span className="text-lg font-bold">{fit.status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-slate-700 space-y-1">
        <p className="font-semibold text-blue-900">{t.proTips}</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          {t.tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>

      {/* URL Share Feature */}
      <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
        <p className="font-semibold text-slate-700 mb-2">{t.shareConfig}</p>
        <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-xs break-all">
          {shareUrl ?? t.loading}
        </div>
      </div>
    </div>
  );
}

function generateShareUrl(modelSize: string, quantization: string, contextLength: string, batchSize: string) {
  const params = new URLSearchParams({
    model: modelSize,
    quant: quantization,
    context: contextLength,
    batch: batchSize,
  });
  return `?${params.toString()}`;
}
