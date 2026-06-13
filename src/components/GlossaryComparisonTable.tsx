import { useLang } from '@/hooks/useLang'

interface ConfusedPair {
  category: string
  termA: string
  termB: string
  difference: string
}

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

const CONFUSED_PAIRS: Record<Lang, ConfusedPair[]> = {
  en: [
  {
    category: 'Prompting Technique',
    termA: 'Zero-shot',
    termB: 'Few-shot',
    difference: 'Zero-shot: ask without examples (faster, cheaper). Few-shot: provide 2–5 examples (more accurate for specific formats or domains).',
  },
  {
    category: 'Reasoning',
    termA: 'Chain-of-Thought',
    termB: 'Tree-of-Thought',
    difference: 'CoT: single linear reasoning path. ToT: explores multiple branches, evaluates paths. ToT costs 2–3× more tokens but handles harder problems.',
  },
  {
    category: 'Knowledge Architecture',
    termA: 'RAG',
    termB: 'Fine-tuning',
    difference: 'RAG: retrieves current data at inference time — no retraining. Fine-tuning: adjusts model weights permanently — expensive, requires labeled data.',
  },
  {
    category: 'Security',
    termA: 'Prompt injection',
    termB: 'Jailbreak',
    difference: 'Injection: structural attack — user input overrides system instructions. Jailbreak: behavioral attack — crafted phrasing bypasses safety guardrails.',
  },
  {
    category: 'Sampling Parameters',
    termA: 'Temperature',
    termB: 'Top-p',
    difference: 'Temperature: scales all token probabilities (0 = deterministic, 1+ = creative). Top-p: samples only from the smallest set of tokens covering probability p. Use one at a time.',
  },
  {
    category: 'Memory',
    termA: 'Short-term memory',
    termB: 'Long-term memory',
    difference: 'Short-term: active conversation context (tokens in window). Long-term: persistent store across sessions (vector DB or key-value). Agents need both.',
  },
  {
    category: 'Alignment',
    termA: 'Guardrail',
    termB: 'RLHF',
    difference: 'Guardrail: runtime policy enforcement (filter, validate, block) — no retraining. RLHF: training-time alignment via human feedback — rewires model behavior permanently.',
  },
  {
    category: 'Agent Behavior',
    termA: 'Tool calling',
    termB: 'Agentic',
    difference: 'Tool calling: single function invocation per turn. Agentic: autonomous loop — decide → call tool → observe → decide — until goal is achieved.',
  },
  {
    category: 'Output Quality',
    termA: 'Hallucination',
    termB: 'Confabulation',
    difference: 'Synonymous in practice. Both describe confident, plausible-sounding but false model output. "Hallucination" is more common in US/tech; "confabulation" in academic/EU contexts.',
  },
  {
    category: 'Prompt Architecture',
    termA: 'System prompt',
    termB: 'User prompt',
    difference: 'System: persistent instructions (role, rules, format) — set once per conversation. User: specific task per turn. System controls behavior; user specifies request.',
  },
  ],
  pt: [
  { category: 'Técnica de Prompting', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot: pergunta sem exemplos (mais rápido, mais barato). Few-shot: fornece 2–5 exemplos (mais preciso para formatos ou domínios específicos).' },
  { category: 'Raciocínio', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT: caminho linear único de raciocínio. ToT: explora múltiplos ramos, avalia caminhos. ToT custa 2–3× mais tokens, mas resolve problemas mais difíceis.' },
  { category: 'Arquitetura de Conhecimento', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG: recupera dados atuais no momento da inferência — sem retraining. Fine-tuning: ajusta pesos do modelo permanentemente — caro, requer dados rotulados.' },
  { category: 'Segurança', termA: 'Prompt injection', termB: 'Jailbreak', difference: 'Injection: ataque estrutural — entrada do usuário substitui instruções do sistema. Jailbreak: ataque comportamental — phrasing elaborado contorna as proteções de segurança.' },
  { category: 'Parâmetros de Amostragem', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature: escala todas as probabilidades de tokens (0 = determinístico, 1+ = criativo). Top-p: amostra apenas do menor conjunto de tokens cobrindo probabilidade p. Use um por vez.' },
  { category: 'Memória', termA: 'Memória de curto prazo', termB: 'Memória de longo prazo', difference: 'Curto prazo: contexto ativo da conversa (tokens na janela). Longo prazo: armazenamento persistente entre sessões (DB vetorial ou chave-valor). Agentes precisam de ambos.' },
  { category: 'Alinhamento', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail: aplicação de política em runtime (filtrar, validar, bloquear) — sem retraining. RLHF: alinhamento no treinamento via feedback humano — reconfigura o comportamento do modelo permanentemente.' },
  { category: 'Comportamento de Agente', termA: 'Tool calling', termB: 'Agêntico', difference: 'Tool calling: invocação de função única por turno. Agêntico: loop autônomo — decidir → chamar ferramenta → observar → decidir — até atingir o objetivo.' },
  { category: 'Qualidade da Saída', termA: 'Alucinação', termB: 'Confabulação', difference: 'Sinônimos na prática. Ambos descrevem saídas confiantes, plausíveis mas falsas do modelo. "Alucinação" é mais comum em contextos técnicos; "confabulação" em contextos acadêmicos/EU.' },
  { category: 'Arquitetura de Prompt', termA: 'System prompt', termB: 'User prompt', difference: 'System: instruções persistentes (papel, regras, formato) — definidas uma vez por conversa. User: tarefa específica por turno. System controla comportamento; user especifica a requisição.' },
  ],
  de: [
  { category: 'Prompting-Technik', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot: Anfrage ohne Beispiele (schneller, günstiger). Few-shot: 2–5 Beispiele vorgeben (präziser für spezifische Formate oder Domänen).' },
  { category: 'Reasoning', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT: linearer Denkpfad. ToT: erkundet mehrere Äste, bewertet Pfade. ToT verbraucht 2–3× mehr Tokens, löst aber schwierigere Probleme.' },
  { category: 'Wissensarchitektur', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG: ruft aktuelle Daten zur Inferenzzeit ab — kein Retraining. Fine-tuning: passt Modellgewichte dauerhaft an — teuer, erfordert gelabelte Daten.' },
  { category: 'Sicherheit', termA: 'Prompt Injection', termB: 'Jailbreak', difference: 'Injection: struktureller Angriff — Nutzereingabe überschreibt Systemanweisungen. Jailbreak: Verhaltensangriff — spezifische Formulierung umgeht Sicherheitsmaßnahmen.' },
  { category: 'Sampling-Parameter', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature: skaliert alle Token-Wahrscheinlichkeiten (0 = deterministisch, 1+ = kreativ). Top-p: sampelt nur aus der kleinsten Tokenmenge mit Wahrscheinlichkeit p. Nur eines verwenden.' },
  { category: 'Gedächtnis', termA: 'Kurzzeitgedächtnis', termB: 'Langzeitgedächtnis', difference: 'Kurzzeitgedächtnis: aktiver Gesprächskontext (Tokens im Fenster). Langzeitgedächtnis: persistenter Speicher zwischen Sitzungen (Vektor-DB oder Key-Value). Agenten brauchen beides.' },
  { category: 'Alignment', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail: Laufzeit-Durchsetzung von Richtlinien (filtern, validieren, blockieren) — kein Retraining. RLHF: Alignment zur Trainingszeit via menschlichem Feedback — verändert Modellverhalten dauerhaft.' },
  { category: 'Agentenverhalten', termA: 'Tool Calling', termB: 'Agentisch', difference: 'Tool Calling: einzelner Funktionsaufruf pro Zug. Agentisch: autonome Schleife — entscheiden → Tool aufrufen → beobachten → entscheiden — bis Ziel erreicht.' },
  { category: 'Ausgabequalität', termA: 'Halluzination', termB: 'Konfabulation', difference: 'In der Praxis synonym. Beide beschreiben zuversichtliche, plausibel klingende, aber falsche Modellausgaben. "Halluzination" ist im Tech-Kontext verbreitet; "Konfabulation" im akademischen.' },
  { category: 'Prompt-Architektur', termA: 'System-Prompt', termB: 'User-Prompt', difference: 'System: persistente Anweisungen (Rolle, Regeln, Format) — einmal pro Gespräch gesetzt. User: spezifische Aufgabe pro Zug. System steuert Verhalten; User spezifiziert Anfrage.' },
  ],
  fr: [
  { category: 'Technique de prompting', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot : demande sans exemples (plus rapide, moins cher). Few-shot : fournit 2–5 exemples (plus précis pour des formats ou domaines spécifiques).' },
  { category: 'Raisonnement', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT : chemin de raisonnement linéaire unique. ToT : explore plusieurs branches, évalue les chemins. ToT coûte 2–3× plus de tokens mais résout des problèmes plus complexes.' },
  { category: 'Architecture de connaissance', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG : récupère les données actuelles à l\'inférence — sans réentraînement. Fine-tuning : ajuste les poids du modèle de manière permanente — coûteux, nécessite des données annotées.' },
  { category: 'Sécurité', termA: 'Prompt injection', termB: 'Jailbreak', difference: 'Injection : attaque structurelle — l\'entrée utilisateur remplace les instructions système. Jailbreak : attaque comportementale — formulation contourne les garde-fous de sécurité.' },
  { category: 'Paramètres d\'échantillonnage', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature : échelle toutes les probabilités de tokens (0 = déterministe, 1+ = créatif). Top-p : échantillonne uniquement depuis le plus petit ensemble de tokens couvrant la probabilité p. Utiliser un seul à la fois.' },
  { category: 'Mémoire', termA: 'Mémoire à court terme', termB: 'Mémoire à long terme', difference: 'Court terme : contexte de conversation active (tokens dans la fenêtre). Long terme : stockage persistant entre sessions (DB vectorielle ou clé-valeur). Les agents ont besoin des deux.' },
  { category: 'Alignement', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail : application de politique en temps réel (filtrer, valider, bloquer) — sans réentraînement. RLHF : alignement à l\'entraînement via retours humains — reconfigure le comportement du modèle de manière permanente.' },
  { category: 'Comportement agent', termA: 'Tool calling', termB: 'Agentique', difference: 'Tool calling : invocation de fonction unique par tour. Agentique : boucle autonome — décider → appeler outil → observer → décider — jusqu\'à l\'atteinte de l\'objectif.' },
  { category: 'Qualité de sortie', termA: 'Hallucination', termB: 'Confabulation', difference: 'Synonymes en pratique. Les deux décrivent des sorties confiantes, plausibles mais fausses du modèle. "Hallucination" est plus courant en contexte technique ; "confabulation" en contexte académique.' },
  { category: 'Architecture de prompt', termA: 'System prompt', termB: 'User prompt', difference: 'System : instructions persistantes (rôle, règles, format) — définies une fois par conversation. User : tâche spécifique par tour. System contrôle le comportement ; user spécifie la requête.' },
  ],
  ja: [
  { category: 'プロンプティング技法', termA: 'ゼロショット', termB: 'フューショット', difference: 'ゼロショット：例なしで質問（速く安い）。フューショット：2〜5例を提供（特定のフォーマットやドメインでより精度が高い）。' },
  { category: '推論', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT：単一の線形推論パス。ToT：複数の分岐を探索し、パスを評価。ToTはトークンが2〜3倍かかるが、より難しい問題を解決できる。' },
  { category: '知識アーキテクチャ', termA: 'RAG', termB: 'ファインチューニング', difference: 'RAG：推論時に最新データを取得 — 再学習不要。ファインチューニング：モデルの重みを恒久的に調整 — 高コストでラベル付きデータが必要。' },
  { category: 'セキュリティ', termA: 'プロンプトインジェクション', termB: 'ジェイルブレイク', difference: 'インジェクション：構造的攻撃 — ユーザー入力がシステム指示を上書き。ジェイルブレイク：行動的攻撃 — 特定の言い回しで安全ガードをバイパス。' },
  { category: 'サンプリングパラメータ', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature：全トークン確率をスケーリング（0=決定論的、1+=創造的）。Top-p：確率pをカバーする最小トークン集合からサンプリング。一度に一方だけ使用。' },
  { category: 'メモリ', termA: '短期記憶', termB: '長期記憶', difference: '短期：アクティブな会話コンテキスト（ウィンドウ内のトークン）。長期：セッション間の永続ストア（ベクターDBまたはKey-Value）。エージェントは両方が必要。' },
  { category: 'アライメント', termA: 'ガードレール', termB: 'RLHF', difference: 'ガードレール：ランタイムポリシー施行（フィルター、検証、ブロック）— 再学習不要。RLHF：人間フィードバックによる訓練時アライメント — モデル動作を恒久的に変更。' },
  { category: 'エージェント動作', termA: 'ツール呼び出し', termB: 'エージェンティック', difference: 'ツール呼び出し：ターンごとに単一関数呼び出し。エージェンティック：自律ループ — 決定→ツール呼び出し→観察→決定 — 目標達成まで継続。' },
  { category: '出力品質', termA: '幻覚', termB: 'コンファビュレーション', difference: '実際には同義語。どちらも確信を持って、もっともらしく聞こえるが誤ったモデル出力を指す。"幻覚"はUS/技術コンテキストで一般的；"コンファビュレーション"は学術/EUコンテキストで使用。' },
  { category: 'プロンプトアーキテクチャ', termA: 'システムプロンプト', termB: 'ユーザープロンプト', difference: 'システム：永続的指示（役割、ルール、フォーマット）— 会話ごとに一度設定。ユーザー：ターンごとの特定タスク。システムは動作を制御し、ユーザーはリクエストを指定。' },
  ],
  zh: [
  { category: '提示技术', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot：无示例提问（更快、更便宜）。Few-shot：提供2–5个示例（对特定格式或领域更准确）。' },
  { category: '推理', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT：单一线性推理路径。ToT：探索多个分支，评估路径。ToT消耗2–3倍tokens但能处理更难的问题。' },
  { category: '知识架构', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG：推理时检索当前数据——无需重新训练。Fine-tuning：永久调整模型权重——昂贵，需要标注数据。' },
  { category: '安全', termA: 'Prompt注入', termB: 'Jailbreak', difference: '注入：结构性攻击——用户输入覆盖系统指令。Jailbreak：行为攻击——特定措辞绕过安全护栏。' },
  { category: '采样参数', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature：缩放所有token概率（0=确定性，1+=创意）。Top-p：仅从覆盖概率p的最小token集采样。一次只用一个。' },
  { category: '记忆', termA: '短期记忆', termB: '长期记忆', difference: '短期：活跃对话上下文（窗口内的token）。长期：跨会话持久存储（向量DB或键值对）。智能体两者都需要。' },
  { category: '对齐', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail：运行时策略执行（过滤、验证、阻止）——无需重新训练。RLHF：通过人类反馈的训练时对齐——永久改变模型行为。' },
  { category: '智能体行为', termA: '工具调用', termB: '智能体式', difference: '工具调用：每轮单次函数调用。智能体式：自主循环——决定→调用工具→观察→决定——直到实现目标。' },
  { category: '输出质量', termA: '幻觉', termB: '虚构', difference: '实践中同义。两者都描述模型自信、听起来合理但错误的输出。"幻觉"在美国/技术圈更常见；"虚构"在学术/欧盟背景中使用。' },
  { category: '提示架构', termA: 'System prompt', termB: 'User prompt', difference: 'System：持久指令（角色、规则、格式）——每次对话设置一次。User：每轮具体任务。System控制行为；User指定请求。' },
  ],
  es: [
  { category: 'Técnica de prompting', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot: pregunta sin ejemplos (más rápido, más barato). Few-shot: proporciona 2–5 ejemplos (más preciso para formatos o dominios específicos).' },
  { category: 'Razonamiento', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT: único camino lineal de razonamiento. ToT: explora múltiples ramas, evalúa caminos. ToT cuesta 2–3× más tokens pero maneja problemas más difíciles.' },
  { category: 'Arquitectura de conocimiento', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG: recupera datos actuales en tiempo de inferencia — sin reentrenamiento. Fine-tuning: ajusta pesos del modelo permanentemente — caro, requiere datos etiquetados.' },
  { category: 'Seguridad', termA: 'Prompt injection', termB: 'Jailbreak', difference: 'Injection: ataque estructural — la entrada del usuario anula las instrucciones del sistema. Jailbreak: ataque conductual — la redacción específica omite las barreras de seguridad.' },
  { category: 'Parámetros de muestreo', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature: escala todas las probabilidades de tokens (0 = determinista, 1+ = creativo). Top-p: muestrea solo del conjunto más pequeño de tokens que cubre la probabilidad p. Usar uno a la vez.' },
  { category: 'Memoria', termA: 'Memoria a corto plazo', termB: 'Memoria a largo plazo', difference: 'Corto plazo: contexto activo de conversación (tokens en ventana). Largo plazo: almacenamiento persistente entre sesiones (vector DB o clave-valor). Los agentes necesitan ambos.' },
  { category: 'Alineamiento', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail: aplicación de políticas en runtime (filtrar, validar, bloquear) — sin reentrenamiento. RLHF: alineamiento en tiempo de entrenamiento con retroalimentación humana — reconfigura el comportamiento del modelo permanentemente.' },
  { category: 'Comportamiento agente', termA: 'Tool calling', termB: 'Agéntico', difference: 'Tool calling: invocación única de función por turno. Agéntico: bucle autónomo — decidir → llamar herramienta → observar → decidir — hasta alcanzar el objetivo.' },
  { category: 'Calidad de salida', termA: 'Alucinación', termB: 'Confabulación', difference: 'Sinónimos en práctica. Ambos describen salidas confiadas, plausibles pero falsas del modelo. "Alucinación" es más común en contextos técnicos/US; "confabulación" en contextos académicos/EU.' },
  { category: 'Arquitectura de prompt', termA: 'System prompt', termB: 'User prompt', difference: 'System: instrucciones persistentes (rol, reglas, formato) — establecidas una vez por conversación. User: tarea específica por turno. System controla el comportamiento; user especifica la solicitud.' },
  ],
  ar: [
  { category: 'تقنية التوجيه', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot: السؤال بدون أمثلة (أسرع وأقل تكلفة). Few-shot: تقديم 2–5 أمثلة (أكثر دقة لتنسيقات أو مجالات محددة).' },
  { category: 'الاستدلال', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT: مسار استدلال خطي واحد. ToT: يستكشف فروعًا متعددة، يقيّم المسارات. ToT يكلف 2–3× رموزًا أكثر لكنه يتعامل مع مشكلات أصعب.' },
  { category: 'بنية المعرفة', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG: يسترجع البيانات الحالية وقت الاستنتاج — بدون إعادة تدريب. Fine-tuning: يضبط أوزان النموذج بشكل دائم — مكلف، يتطلب بيانات مُعلَّمة.' },
  { category: 'الأمان', termA: 'Prompt injection', termB: 'Jailbreak', difference: 'الحقن: هجوم هيكلي — إدخال المستخدم يتجاوز تعليمات النظام. Jailbreak: هجوم سلوكي — صياغة محددة تتجاوز ضمانات الأمان.' },
  { category: 'معاملات أخذ العينات', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature: يُقيّس جميع احتمالات الرموز (0 = حتمي، 1+ = إبداعي). Top-p: يأخذ عينة فقط من أصغر مجموعة رموز تغطي الاحتمال p. استخدم واحدًا في كل مرة.' },
  { category: 'الذاكرة', termA: 'الذاكرة قصيرة المدى', termB: 'الذاكرة طويلة المدى', difference: 'قصيرة المدى: سياق المحادثة النشط (رموز في النافذة). طويلة المدى: مخزن دائم بين الجلسات (قاعدة بيانات متجهية أو مفتاح-قيمة). العملاء يحتاجون كليهما.' },
  { category: 'المواءمة', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail: تطبيق سياسة وقت التشغيل (تصفية، تحقق، حجب) — بدون إعادة تدريب. RLHF: مواءمة وقت التدريب عبر ملاحظات بشرية — يُعيد تشكيل سلوك النموذج بشكل دائم.' },
  { category: 'سلوك العميل', termA: 'Tool calling', termB: 'وكيلي', difference: 'Tool calling: استدعاء دالة واحدة لكل دور. وكيلي: حلقة مستقلة — قرار → استدعاء أداة → ملاحظة → قرار — حتى تحقيق الهدف.' },
  { category: 'جودة المخرجات', termA: 'الهلوسة', termB: 'التلفيق', difference: 'مترادفان عمليًا. كلاهما يصف مخرجات النموذج الواثقة والمقنعة لكنها خاطئة. "الهلوسة" أكثر شيوعًا في السياق التقني؛ "التلفيق" في السياق الأكاديمي.' },
  { category: 'بنية التوجيه', termA: 'System prompt', termB: 'User prompt', difference: 'النظام: تعليمات دائمة (الدور، القواعد، التنسيق) — تُحدَّد مرة واحدة لكل محادثة. المستخدم: مهمة محددة لكل دور. النظام يتحكم في السلوك؛ المستخدم يحدد الطلب.' },
  ],
  ko: [
  { category: '프롬프팅 기법', termA: 'Zero-shot', termB: 'Few-shot', difference: 'Zero-shot: 예시 없이 질문(더 빠르고 저렴). Few-shot: 2~5개의 예시 제공(특정 형식이나 도메인에 더 정확).' },
  { category: '추론', termA: 'Chain-of-Thought', termB: 'Tree-of-Thought', difference: 'CoT: 단선적 추론 경로 하나. ToT: 여러 분기를 탐색하고 경로를 평가. ToT는 토큰이 2~3배 더 들지만 더 어려운 문제를 처리합니다.' },
  { category: '지식 구조', termA: 'RAG', termB: 'Fine-tuning', difference: 'RAG: 재학습 없이 추론 시 현재 데이터를 검색합니다. Fine-tuning: 모델 가중치를 영구적으로 조정합니다 — 비용이 많이 들고 레이블링된 데이터가 필요합니다.' },
  { category: '보안', termA: 'Prompt injection', termB: 'Jailbreak', difference: '인젝션: 구조적 공격 — 사용자 입력이 시스템 지시를 우회. Jailbreak: 행동 공격 — 특정 형식이 안전 장치를 우회.' },
  { category: '샘플링 매개변수', termA: 'Temperature', termB: 'Top-p', difference: 'Temperature: 모든 토큰 확률을 조정(0 = 결정론적, 1+ = 창의적). Top-p: 확률 p를 커버하는 가장 작은 토큰 집합에서만 샘플링. 한 번에 하나만 사용하십시오.' },
  { category: '메모리', termA: '단기 메모리', termB: '장기 메모리', difference: '단기: 활성 대화 문맥(창 내 토큰). 장기: 세션 간 영구 저장소(벡터 DB 또는 키-값). 에이전트는 둘 다 필요합니다.' },
  { category: '정렬', termA: 'Guardrail', termB: 'RLHF', difference: 'Guardrail: 런타임 정책 시행(필터링, 검증, 차단) — 재학습 없음. RLHF: 인간 피드백을 통한 학습 시간 정렬 — 모델 동작을 영구적으로 재형성합니다.' },
  { category: '에이전트 동작', termA: 'Tool calling', termB: '에이전틱', difference: 'Tool calling: 턴당 단일 함수 호출. 에이전틱: 자율 루프 — 결정 → 도구 호출 → 관찰 → 결정 — 목표 달성까지.' },
  { category: '출력 품질', termA: '환각', termB: '작화', difference: '실용적으로 동의어. 둘 다 자신감 있고 그럴듯하지만 거짓된 모델 출력을 설명합니다. "환각"은 기술/미국 맥락에서, "작화"는 학술 맥락에서 더 일반적입니다.' },
  { category: '프롬프트 구조', termA: 'System prompt', termB: 'User prompt', difference: '시스템: 영구 지시(역할, 규칙, 형식) — 대화당 한 번 설정. 사용자: 턴당 특정 작업. 시스템이 동작을 제어하고 사용자가 요청을 지정합니다.' },
  ],
}

const TABLE_HEADERS: Record<Lang, { heading: string; description: string; category: string; termA: string; termB: string; difference: string }> = {
  en: { heading: 'Commonly Confused AI Terms', description: 'Quick reference for 10 term pairs that are frequently misunderstood or used interchangeably.', category: 'Category', termA: 'Term A', termB: 'Term B', difference: 'Key Difference' },
  de: { heading: 'Häufig verwechselte KI-Begriffe', description: 'Schnellreferenz für 10 Begriffspaare, die häufig missverstanden oder synonym verwendet werden.', category: 'Kategorie', termA: 'Begriff A', termB: 'Begriff B', difference: 'Wesentlicher Unterschied' },
  fr: { heading: 'Termes IA souvent confondus', description: 'Référence rapide pour 10 paires de termes fréquemment mal compris ou utilisés de façon interchangeable.', category: 'Catégorie', termA: 'Terme A', termB: 'Terme B', difference: 'Différence clé' },
  ja: { heading: 'よく混同されるAI用語', description: '頻繁に誤解されたり、同義語として使われる10組の用語の簡易リファレンス。', category: 'カテゴリ', termA: '用語A', termB: '用語B', difference: '主な違い' },
  zh: { heading: '常被混淆的AI术语', description: '10组常被误解或互换使用的术语对的快速参考。', category: '类别', termA: '术语A', termB: '术语B', difference: '关键区别' },
  es: { heading: 'Términos de IA comúnmente confundidos', description: 'Referencia rápida para 10 pares de términos frecuentemente malentendidos o usados indistintamente.', category: 'Categoría', termA: 'Término A', termB: 'Término B', difference: 'Diferencia clave' },
  pt: { heading: 'Termos de IA Frequentemente Confundidos', description: 'Referência rápida para 10 pares de termos frequentemente mal compreendidos ou usados de forma intercambiável.', category: 'Categoria', termA: 'Termo A', termB: 'Termo B', difference: 'Diferença principal' },
  ar: { heading: 'مصطلحات الذكاء الاصطناعي المتشابهة', description: 'مرجع سريع لـ10 أزواج من المصطلحات التي كثيرًا ما يساء فهمها أو تُستخدم بالتبادل.', category: 'الفئة', termA: 'المصطلح أ', termB: 'المصطلح ب', difference: 'الفرق الرئيسي' },
  ko: { heading: '자주 혼동되는 AI 용어', description: '자주 오해되거나 혼용되는 10쌍의 용어에 대한 빠른 참조입니다.', category: '카테고리', termA: '용어 A', termB: '용어 B', difference: '주요 차이점' },
}

export function GlossaryComparisonTable() {
  const rawLang = useLang() as Lang
  const lang: Lang = (rawLang in CONFUSED_PAIRS ? rawLang : 'en') as Lang
  const pairs = CONFUSED_PAIRS[lang] ?? CONFUSED_PAIRS['en']
  const h = TABLE_HEADERS[lang] ?? TABLE_HEADERS['en']
  return (
    <section className="my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">{h.heading}</h2>
      <p className="text-text-secondary text-sm mb-6">{h.description}</p>
      <div className="relative overflow-x-auto rounded-xl border border-primary/20">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-primary/20 bg-primary/5">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-text-primary text-xs uppercase tracking-wider sticky left-0 z-10 bg-primary/5">{h.category}</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary text-xs uppercase tracking-wider">{h.termA}</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-primary text-xs uppercase tracking-wider">{h.termB}</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-text-primary text-xs uppercase tracking-wider">{h.difference}</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-primary/10 transition-colors hover:bg-primary/5 group ${idx % 2 === 0 ? 'bg-white' : 'bg-surface/50'}`}
              >
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs text-text-secondary font-medium whitespace-nowrap sticky left-0 z-10 group-hover:bg-primary/5 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-surface/50'}">{row.category}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-primary whitespace-nowrap">{row.termA}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-primary whitespace-nowrap">{row.termB}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-text-secondary leading-relaxed">{row.difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
      </div>
    </section>
  )
}
