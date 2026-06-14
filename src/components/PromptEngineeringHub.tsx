'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { themes, type PETheme } from '@/lib/prompt-engineering/themes'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { useHubSignals } from './hub/useHubSignals'
import { getArticleHighlight, type ArticleHighlight } from './hub/hub-utils'
import { LevelBar } from './hub/LevelBar'
import { HubArticleCard } from './hub/HubArticleCard'
import { GuideStarWidget, type RecommendedArticle } from './hub/GuideStarWidget'
import { LazySection } from './hub/LazySection'

function navHref(path: string, lang: string) {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'Prompt Engineering Guide: 80 Articles Across 9 Topics (2026)',
  de: 'Prompt Engineering Guide: 80 Artikel in 9 Themenbereichen (2026)',
  fr: 'Guide Prompt Engineering : 80 Articles en 9 Thématiques (2026)',
  ja: 'プロンプトエンジニアリングガイド：9テーマ80記事（2026年）',
  zh: 'Prompt工程指南：9大主题80篇文章（2026）',
  es: 'Guía de Prompt Engineering: 80 artículos en 9 temas (2026)',
  pt: 'Guia de Prompt Engineering: 80 Artigos em 9 Temas (2026)',
  ar: 'دليل هندسة التوجيهات: 80 مقالاً في 9 موضوعات (2026)',
  ko: '프롬프트 엔지니어링 가이드: 9개 주제 80편의 기사 (2026)',
}

const HUB_LEAD_ANSWER: Record<string, string> = {
  en: 'Prompt engineering is the practice of designing inputs to AI language models — specifying role, context, constraints, output format, and examples — to produce accurate, consistent results. In 2026, with 25+ commercial and open-source models available, prompt design is the single highest-leverage skill for getting reliable value from AI.',
  de: 'Prompt Engineering ist die Praxis, Eingaben für KI-Sprachmodelle zu strukturieren — Rolle, Kontext, Einschränkungen, Ausgabeformat und Beispiele — um genaue, konsistente Ergebnisse zu erzielen. Im Jahr 2026, mit mehr als 25 verfügbaren Modellen, ist Prompt-Design die wirkungsvollste Fähigkeit, um zuverlässigen Wert aus KI zu gewinnen.',
  fr: 'Le prompt engineering est la pratique qui consiste à concevoir les entrées des modèles de langage IA — en spécifiant rôle, contexte, contraintes, format de sortie et exemples — pour produire des résultats précis et cohérents. En 2026, avec plus de 25 modèles disponibles, la conception de prompts est la compétence la plus rentable pour tirer une valeur fiable de l\'IA.',
  ja: 'プロンプトエンジニアリングとは、AIの言語モデルへの入力（役割・文脈・制約・出力フォーマット・例示）を設計し、正確で一貫した結果を生み出す実践です。2026年、25以上のモデルが利用可能な現在、プロンプト設計はAIから信頼性の高い価値を引き出すための最重要スキルです。',
  zh: '提示词工程是设计AI语言模型输入的实践——指定角色、上下文、约束条件、输出格式和示例——以产生准确、一致的结果。2026年，随着25个以上模型的可用，提示词设计是从AI获取可靠价值的最高效技能。',
  es: 'El prompt engineering es la práctica de diseñar entradas para modelos de lenguaje IA — especificando rol, contexto, restricciones, formato de salida y ejemplos — para producir resultados precisos y consistentes. En 2026, con más de 25 modelos disponibles, el diseño de prompts es la habilidad con mayor impacto para obtener valor fiable de la IA.',
  pt: 'Prompt engineering é a prática de projetar entradas para modelos de linguagem de IA — especificando papel, contexto, restrições, formato de saída e exemplos — para produzir resultados precisos e consistentes. Em 2026, com mais de 25 modelos disponíveis, o design de prompts é a habilidade de maior impacto para obter valor confiável da IA.',
  ar: 'هندسة التوجيهات هي ممارسة تصميم المُدخلات لنماذج اللغة الاصطناعية — بتحديد الدور والسياق والقيود وصيغة الإخراج والأمثلة — للحصول على نتائج دقيقة ومتسقة. في عام 2026، مع توفر أكثر من 25 نموذجاً تجارياً ومفتوح المصدر، يُعدّ تصميم التوجيهات المهارة الأكثر تأثيراً للحصول على قيمة موثوقة من الذكاء الاصطناعي.',
  ko: '프롬프트 엔지니어링은 AI 언어 모델에 대한 입력(역할, 문맥, 제약 조건, 출력 형식, 예시)을 설계하여 정확하고 일관된 결과를 얻는 실천입니다. 2026년에는 25개 이상의 상용 및 오픈소스 모델이 제공되어, 프롬프트 설계는 AI에서 신뢰할 수 있는 가치를 얻기 위한 가장 중요한 기술입니다.',
}

const HUB_IN_ONE_SENTENCE: Record<string, string> = {
  en: 'Prompt engineering is designing inputs to AI models — role, context, constraints, format, examples — to get accurate, consistent, production-grade results.',
  de: 'Prompt Engineering ist das Gestalten von Eingaben für KI-Modelle — Rolle, Kontext, Einschränkungen, Format, Beispiele — um genaue, konsistente, produktionsreife Ergebnisse zu erzielen.',
  fr: 'Le prompt engineering consiste à concevoir les entrées pour les modèles IA — rôle, contexte, contraintes, format, exemples — pour obtenir des résultats précis, cohérents et prêts pour la production.',
  ja: 'プロンプトエンジニアリングとは、AIモデルへの入力（役割・コンテキスト・制約・フォーマット・例）を設計し、正確で一貫した本番環境品質の結果を得ることです。',
  zh: '提示词工程是为AI模型设计输入——角色、上下文、约束、格式、示例——以获得准确、一致、生产级的结果。',
  es: 'El prompt engineering consiste en diseñar entradas para modelos de IA — rol, contexto, restricciones, formato, ejemplos — para obtener resultados precisos, consistentes y listos para producción.',
  pt: 'Prompt engineering consiste em projetar entradas para modelos de IA — papel, contexto, restrições, formato, exemplos — para obter resultados precisos, consistentes e prontos para produção.',
  ar: 'هندسة التوجيهات هي تصميم المُدخلات لنماذج الذكاء الاصطناعي — الدور والسياق والقيود والصيغة والأمثلة — للحصول على نتائج دقيقة ومتسقة وجاهزة للإنتاج.',
  ko: '프롬프트 엔지니어링은 AI 모델에 대한 입력(역할, 문맥, 제약, 형식, 예시)을 설계하여 정확하고 일관된 프로덕션 품질의 결과를 얻는 것입니다.',
}

const HUB_IN_PLAIN_TERMS: Record<string, string> = {
  en: 'Instead of typing "write me an email" and hoping, you tell the AI exactly what role to play, what context it has, what format to use, and what good output looks like — and it performs 3-5× better.',
  de: 'Statt „schreib mir eine E-Mail" einzutippen, teilen Sie der KI genau mit, welche Rolle sie spielen soll, welchen Kontext sie hat, welches Format zu verwenden ist und wie gute Ausgabe aussieht — die Ergebnisse sind 3–5× besser.',
  fr: "Au lieu de taper \"écris-moi un email\" en espérant, vous indiquez à l'IA exactement quel rôle jouer, quel contexte elle a, quel format utiliser, et à quoi ressemble une bonne sortie — les performances sont 3 à 5× meilleures.",
  ja: '「メールを書いて」とだけ入力して期待する代わりに、AIにどの役割を果たすべきか、どのコンテキストを持つか、どのフォーマットを使うか、良い出力とはどのようなものかを正確に伝えると、パフォーマンスが3〜5倍向上します。',
  zh: '不再只是输入"帮我写封邮件"然后祈祷，而是告诉AI确切需要扮演什么角色、拥有什么上下文、使用什么格式以及好的输出是什么样子——性能提升3-5倍。',
  es: 'En lugar de escribir "redáctame un email" y esperar, le dices a la IA exactamente qué rol jugar, qué contexto tiene, qué formato usar y cómo es una buena salida — y el rendimiento mejora 3-5×.',
  pt: 'Em vez de digitar "escreve um e-mail pra mim" e torcer, você diz à IA exatamente qual papel desempenhar, qual contexto ela tem, qual formato usar e como é uma boa saída — e o desempenho melhora de 3 a 5×.',
  ar: 'بدلاً من كتابة "اكتب لي بريداً إلكترونياً" وانتظار النتيجة، أخبر الذكاء الاصطناعي تحديداً بالدور الذي يجب أن يؤديه، والسياق المتاح له، والصيغة المطلوبة، وشكل الإخراج الجيد — فيكون الأداء أفضل بـ 3–5 أضعاف.',
  ko: '\"이메일을 써줘\"라고만 입력하고 기대하는 대신, AI에게 어떤 역할을 맡아야 하는지, 어떤 문맥이 있는지, 어떤 형식을 사용해야 하는지, 좋은 출력이란 무엇인지 정확히 알려주십시오 — 그러면 성능이 3~5배 향상됩니다.',
}

const HUB_IN_ONE_SENTENCE_LABEL: Record<string, string> = {
  en: '📍 In One Sentence', de: '📍 Kurzfassung', fr: '📍 En une phrase', ja: '📍 一言で', zh: '📍 一句话概括', es: '📍 En una frase', pt: '📍 Em uma frase', ar: '📍 في جملة واحدة', ko: '📍 한 문장으로',
}

const HUB_IN_PLAIN_TERMS_LABEL: Record<string, string> = {
  en: '💬 In Plain Terms', de: '💬 Einfach erklärt', fr: '💬 En termes simples', ja: '💬 わかりやすく言うと', zh: '💬 通俗来说', es: '💬 En términos sencillos', pt: '💬 Em termos simples', ar: '💬 بعبارات بسيطة', ko: '💬 쉽게 말하면',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: 'Prompt engineering determines whether an AI model gives you a useful answer or a vague one. A well-engineered prompt specifies the task clearly, provides the right context, sets format constraints, and uses examples to calibrate model behavior — transforming generic AI responses into expert-quality, predictable outputs. These 80 guides cover the complete prompt engineering stack: fundamentals (tokens, context windows, temperature, model selection), proven frameworks (CO-STAR, CRAFT, RTF, APE, RISEN), advanced techniques (chain-of-thought, RAG, self-consistency, few-shot learning), team workflows (version control, governance, CI/CD review gates), evaluation methods (metrics, regression testing, cross-model testing), and tool comparisons (Braintrust, PromptHub, Cursor). Whether you\'re building production AI features, optimizing prompts for GPT-4o, Claude 4.6 Sonnet, or Gemini 2.5 Pro, or scaling prompt engineering across a team, these research-backed guides give you the patterns that work.',
  de: 'Prompt Engineering entscheidet, ob ein KI-Modell eine nützliche oder eine vage Antwort liefert. Ein gut engineerter Prompt spezifiziert die Aufgabe klar, liefert den richtigen Kontext, setzt Formatbeschränkungen und verwendet Beispiele zur Kalibrierung des Modellverhaltens. Diese 80 Leitfäden decken das vollständige Spektrum ab: Grundlagen (Tokens, Kontextfenster, Temperatur), bewährte Frameworks (CO-STAR, CRAFT, RTF, APE), fortgeschrittene Techniken (Chain-of-Thought, RAG, Few-Shot), Team-Prozesse (Versionskontrolle, Steuerung, CI/CD-Kontrollen), Evaluierungsmethoden und Tool-Vergleiche für GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro.',
  fr: 'Le prompt engineering détermine si un modèle d\'IA vous donne une réponse utile ou vague. Un prompt bien conçu spécifie clairement la tâche, fournit le bon contexte, définit des contraintes de format et utilise des exemples pour calibrer le comportement du modèle. Ces 80 guides couvrent l\'ensemble de l\'écosystème prompt engineering : fondamentaux (tokens, fenêtres de contexte, température), frameworks éprouvés (CO-STAR, CRAFT, RTF, APE), techniques avancées (chain-of-thought, RAG, few-shot), processus d\'équipe, méthodes d\'évaluation et comparatifs d\'outils pour GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro.',
  ja: 'プロンプトエンジニアリングは、AIモデルが有用な回答を返すか曖昧な回答を返すかを決定します。適切に設計されたプロンプトは、タスクを明確に指定し、適切なコンテキストを提供し、フォーマット制約を設定し、例を用いてモデルの動作を調整します。これらの80本のガイドは、基礎知識（トークン、コンテキストウィンドウ、温度）、実証済みフレームワーク（CO-STAR、CRAFT、RTF）、高度な技術（チェーン・オブ・ソート、RAG、フューショット）、チームワークフロー、評価手法、GPT-4oとClaude 4.6 Sonnet向けのツール比較を網羅します。',
  zh: '提示词工程决定了AI模型是给出有用答案还是模糊答案。精心设计的提示词明确指定任务、提供正确上下文、设置格式约束并使用示例校准模型行为。这80篇指南涵盖完整的提示词工程体系：基础知识（词元、上下文窗口、温度）、成熟框架（CO-STAR、CRAFT、RTF）、高级技术（思维链、RAG、少样本学习）、团队工作流程、评估方法，以及GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro的工具比较。',
  es: 'El prompt engineering determina si un modelo de IA te da una respuesta útil o vaga. Un prompt bien diseñado especifica la tarea con claridad, proporciona el contexto adecuado, establece restricciones de formato y usa ejemplos para calibrar el comportamiento del modelo. Estas 80 guías cubren el stack completo: fundamentos (tokens, ventanas de contexto, temperatura), frameworks probados (CO-STAR, CRAFT, RTF, APE, RISEN), técnicas avanzadas (chain-of-thought, RAG, self-consistency, few-shot), flujos de trabajo en equipo (control de versiones, governance, CI/CD), métodos de evaluación y comparativas de herramientas para GPT-4o, Claude 4.6 Sonnet y Gemini 2.5 Pro.',
  pt: 'O prompt engineering determina se um modelo de IA vai te dar uma resposta útil ou uma resposta vaga. Um prompt bem elaborado especifica a tarefa com clareza, fornece o contexto certo, define restrições de formato e usa exemplos para calibrar o comportamento do modelo — transformando respostas genéricas de IA em saídas previsíveis e com qualidade de especialista. Estes 80 guias cobrem o stack completo de prompt engineering: fundamentos (tokens, janelas de contexto, temperatura), frameworks comprovados (CO-STAR, CRAFT, RTF, APE, RISEN), técnicas avançadas (chain-of-thought, RAG, self-consistency, few-shot), fluxos de trabalho de equipe (controle de versão, governança, CI/CD), métodos de avaliação e comparativos de ferramentas para GPT-4o, Claude 4.6 Sonnet e Gemini 2.5 Pro.',
  ar: 'هندسة التوجيهات تحدد ما إذا كان نموذج الذكاء الاصطناعي يمنحك إجابة مفيدة أو مبهمة. يحدد التوجيه المُصمم جيداً المهمة بوضوح، ويوفر السياق الملائم، ويضع قيود التنسيق، ويستخدم الأمثلة لضبط سلوك النموذج — محوِّلاً استجابات الذكاء الاصطناعي العامة إلى مخرجات متوقعة بجودة خبراء. تغطي هذه الـ 80 دليلاً المكدس الكامل لهندسة التوجيهات: الأساسيات (الرموز المميزة ونوافذ السياق ودرجة الحرارة واختيار النماذج)، والأطر المُجرَّبة (CO-STAR وCRAFT وRTF وAPE وRISEN)، والتقنيات المتقدمة (سلسلة التفكير وRAG والاتساق الذاتي والتعلم بأمثلة قليلة)، وسير عمل الفريق (التحكم في الإصدار والحوكمة وبوابات مراجعة CI/CD)، وأساليب التقييم ومقارنات الأدوات لـ GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro.',
  ko: '프롬프트 엔지니어링은 AI 모델이 유용한 답변을 제공하는지 모호한 답변을 제공하는지 결정합니다. 잘 설계된 프롬프트는 작업을 명확히 지정하고 적절한 문맥을 제공하며 형식 제약을 설정하고 예시를 사용하여 모델 동작을 조정합니다. 이 80개 가이드는 전체 프롬프트 엔지니어링 스택을 다룹니다: 기초(토큰, 문맥 창, 온도, 모델 선택), 검증된 프레임워크(CO-STAR, CRAFT, RTF, APE, RISEN), 고급 기법(연쇄 사고, RAG, 자기 일관성, 퓨샷 학습), 팀 워크플로(버전 관리, 거버넌스, CI/CD 검토 게이트), 평가 방법 및 도구 비교(GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro).',
}

const HUB_TLDR: Record<string, string> = {
  en: '80 prompt engineering guides organised by skill level: start with Fundamentals (tokens, temperature, model selection), learn Frameworks (CO-STAR, CRAFT, RTF), apply Techniques (chain-of-thought, RAG, few-shot), set up Team Governance (version control, CI/CD gates), and pick the right Tools (Braintrust, Promptfoo, Cursor). Updated May 2026 for GPT-4o, Claude, and Gemini.',
  de: '80 Prompt-Engineering-Leitfäden nach Schwierigkeitsgrad: beginnen Sie mit Grundlagen (Tokens, Temperatur, Modellauswahl), lernen Sie Frameworks (CO-STAR, CRAFT, RTF), wenden Sie Techniken an (Chain-of-Thought, RAG, Few-Shot), richten Sie Team Governance ein (Versionskontrolle, CI/CD-Gates) und wählen Sie die richtigen Tools (Braintrust, Promptfoo, Cursor). Aktualisiert Mai 2026 für GPT-4o, Claude und Gemini.',
  fr: '80 guides de prompt engineering organisés par niveau : débutez par les Fondamentaux (tokens, température, sélection de modèles), apprenez les Frameworks (CO-STAR, CRAFT, RTF), appliquez les Techniques (chain-of-thought, RAG, few-shot), mettez en place la Gouvernance d\'équipe (contrôle de version, CI/CD), et choisissez les bons Outils (Braintrust, Promptfoo, Cursor). Mis à jour mai 2026 pour GPT-4o, Claude et Gemini.',
  ja: 'スキルレベル別の80本のプロンプトエンジニアリングガイド：基礎（トークン、温度、モデル選択）から始め、フレームワーク（CO-STAR、CRAFT、RTF）を学び、テクニック（チェーン・オブ・ソート、RAG、フューショット）を適用し、チームガバナンス（バージョン管理、CI/CDゲート）を設定し、適切なツール（Braintrust、Promptfoo、Cursor）を選択してください。2026年5月にGPT-4o、Claude、Gemini向けに更新済み。',
  zh: '按技能水平整理的80篇Prompt工程指南：从基础开始（词元、温度、模型选择），学习框架（CO-STAR、CRAFT、RTF），应用技术（思维链、RAG、少样本），建立团队治理（版本控制、CI/CD门控），并选择合适的工具（Braintrust、Promptfoo、Cursor）。已更新至2026年5月，适用于GPT-4o、Claude和Gemini。',
  es: '80 guías de prompt engineering organizadas por nivel: empieza con Fundamentos (tokens, temperatura, selección de modelos), aprende Frameworks (CO-STAR, CRAFT, RTF), aplica Técnicas (chain-of-thought, RAG, few-shot), configura la Gobernanza de equipo (control de versiones, CI/CD) y elige las herramientas correctas (Braintrust, Promptfoo, Cursor). Actualizado mayo 2026 para GPT-4o, Claude y Gemini.',
  pt: '80 guias de prompt engineering organizados por nível: comece pelos Fundamentos (tokens, temperatura, seleção de modelos), aprenda os Frameworks (CO-STAR, CRAFT, RTF), aplique as Técnicas (chain-of-thought, RAG, few-shot), configure a Governança de equipe (controle de versão, CI/CD) e escolha as ferramentas certas (Braintrust, Promptfoo, Cursor). Atualizado em maio de 2026 para GPT-4o, Claude e Gemini.',
  ar: '80 دليلاً لهندسة التوجيهات مُنظَّمة حسب مستوى المهارة: ابدأ بالأساسيات (الرموز المميزة ودرجة الحرارة واختيار النماذج)، وتعلّم الأطر (CO-STAR وCRAFT وRTF)، وطبّق التقنيات (سلسلة التفكير وRAG والتعلم بأمثلة قليلة)، وأسّس حوكمة الفريق (التحكم في الإصدار وبوابات CI/CD)، واختر الأدوات المناسبة (Braintrust وPromptfoo وCursor). مُحدَّث في مايو 2026 لـ GPT-4o وClaude وGemini.',
  ko: '기술 수준별로 구성된 80개의 프롬프트 엔지니어링 가이드: 기초(토큰, 온도, 모델 선택)부터 시작하고, 프레임워크(CO-STAR, CRAFT, RTF)를 익히고, 기법(연쇄 사고, RAG, 퓨샷)을 적용하고, 팀 거버넌스(버전 관리, CI/CD 게이트)를 설정하고, 적절한 도구(Braintrust, Promptfoo, Cursor)를 선택하십시오. GPT-4o, Claude, Gemini를 위해 2026년 5월 업데이트되었습니다.',
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum optimizes your prompts automatically and tests them across 25+ AI models simultaneously.',
  de: 'PromptQuorum optimiert Ihre Prompts automatisch und testet sie gleichzeitig mit 25+ KI-Modellen.',
  fr: 'PromptQuorum optimise vos prompts automatiquement et les teste simultanément sur plus de 25 modèles d\'IA.',
  ja: 'PromptQuorumはプロンプトを自動的に最適化し、25以上のAIモデルで同時にテストします。',
  zh: 'PromptQuorum自动优化您的提示词，并同时在25+个AI模型中进行测试。',
  es: 'PromptQuorum optimiza tus prompts automáticamente y los prueba en más de 25 modelos de IA simultáneamente.',
  pt: 'O PromptQuorum otimiza seus prompts automaticamente e os testa em mais de 25 modelos de IA simultaneamente.',
  ar: 'يُحسّن PromptQuorum توجيهاتك تلقائياً ويختبرها عبر أكثر من 25 نموذج ذكاء اصطناعي في آنٍ واحد.',
  ko: 'PromptQuorum은 프롬프트를 자동으로 최적화하고 25개 이상의 AI 모델에서 동시에 테스트합니다.',
}

const HUB_QUICK_FACTS: Record<string, string[]> = {
  en: ['80 articles across 9 topic areas', 'Covers GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro', '5–20 min per article', 'Updated May 2026'],
  de: ['80 Artikel in 9 Themenbereichen', 'Behandelt GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro', '5–20 Min. pro Artikel', 'Aktualisiert Mai 2026'],
  fr: ['80 articles dans 9 domaines', 'Couvre GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro', '5–20 min par article', 'Mis à jour mai 2026'],
  ja: ['9テーマ領域の80記事', 'GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro対応', '記事あたり5〜20分', '2026年5月更新'],
  zh: ['9个主题领域80篇文章', '涵盖GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro', '每篇5-20分钟', '2026年5月更新'],
  es: ['80 artículos en 9 áreas temáticas', 'Cubre GPT-4o, Claude 4.6 Sonnet y Gemini 2.5 Pro', '5–20 min por artículo', 'Actualizado mayo 2026'],
  pt: ['80 artigos em 9 áreas temáticas', 'Cobre GPT-4o, Claude 4.6 Sonnet e Gemini 2.5 Pro', '5–20 min por artigo', 'Atualizado em maio de 2026'],
  ar: ['80 مقالاً في 9 مجالات موضوعية', 'يغطي GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro', '5–20 دقيقة لكل مقال', 'مُحدَّث مايو 2026'],
  ko: ['9개 주제 영역 80편의 기사', 'GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro 포함', '기사당 5~20분', '2026년 5월 업데이트'],
}

const HUB_QUICK_FACTS_DETAILED: Record<string, string[]> = {
  en: [
    '80 articles across 9 topic areas, updated May 2026',
    'Covers GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and 20+ open-source models',
    '5–20 min per article, each with Key Takeaways, FAQ, and Sources',
    'Chain-of-thought prompting improves complex reasoning accuracy by 30–40%',
    'Most production teams need exactly 2 prompt tools: one for evaluation, one for deployment',
    'Start with Fundamentals if new; jump to Evaluation & Reliability or Team Governance if experienced',
  ],
  de: [
    '80 Artikel in 9 Themenbereichen, aktualisiert Mai 2026',
    'Behandelt GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und 20+ Open-Source-Modelle',
    '5–20 Min. pro Artikel, jeweils mit Wichtigsten Erkenntnissen, FAQ und Quellen',
    'Chain-of-Thought-Prompting verbessert die Genauigkeit komplexer Schlussfolgerungen um 30–40 %',
    'Die meisten Produktionsteams brauchen genau 2 Tools: eines für Evaluation, eines für Deployment',
    'Einsteiger starten mit Grundlagen; Fortgeschrittene springen zu Evaluierung & Zuverlässigkeit oder Team-Steuerung',
  ],
  fr: [
    '80 articles dans 9 domaines, mis à jour mai 2026',
    'Couvre GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et 20+ modèles open source',
    '5–20 min par article, chacun avec Points clés, FAQ et Sources',
    'Le chain-of-thought prompting améliore la précision du raisonnement complexe de 30–40%',
    "La plupart des équipes en production n'ont besoin que de 2 outils : un pour l'évaluation, un pour le déploiement",
    'Débutants : commencez par les Fondamentaux ; expérimentés : allez directement à Évaluation & Fiabilité ou Gouvernance d\'équipe',
  ],
  ja: [
    '9テーマ領域の80記事、2026年5月更新',
    'GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、20以上のオープンソースモデル対応',
    '記事あたり5〜20分、各記事に重要なポイント・FAQ・出典付き',
    'チェーン・オブ・ソートプロンプティングで複雑な推論の精度が30〜40%向上',
    'ほとんどの本番チームに必要なツールは2つだけ：評価用1つとデプロイ用1つ',
    '初心者は基礎から始め、経験者は評価と信頼性またはチームガバナンスへ直進',
  ],
  zh: [
    '9大主题80篇文章，2026年5月更新',
    '涵盖GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro及20+开源模型',
    '每篇5-20分钟，含关键要点、FAQ和参考来源',
    '思维链提示将复杂推理准确性提高30-40%',
    '大多数生产团队只需2个工具：一个用于评估，一个用于部署',
    '新手从基础开始；有经验者直接跳至评估与可靠性或团队治理',
  ],
  es: [
    '80 artículos en 9 áreas temáticas, actualizado mayo 2026',
    'Cubre GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro y más de 20 modelos open source',
    '5–20 min por artículo, cada uno con Puntos clave, FAQ y Fuentes',
    'El chain-of-thought prompting mejora la precisión en razonamiento complejo un 30–40%',
    'La mayoría de equipos en producción necesitan exactamente 2 herramientas: una para evaluación y otra para despliegue',
    'Si eres nuevo, empieza por Fundamentos; si tienes experiencia, ve directamente a Evaluación & Fiabilidad o Gobernanza de equipo',
  ],
  pt: [
    '80 artigos em 9 áreas temáticas, atualizado em maio de 2026',
    'Cobre GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro e mais de 20 modelos open source',
    '5–20 min por artigo, cada um com Pontos principais, FAQ e Fontes',
    'O chain-of-thought prompting melhora a precisão em raciocínio complexo em 30–40%',
    'A maioria das equipes em produção precisa de exatamente 2 ferramentas: uma para avaliação e outra para deploy',
    'Se você está começando, comece pelos Fundamentos; se tem experiência, vá direto para Avaliação & Confiabilidade ou Governança de equipe',
  ],
  ar: [
    '80 مقالاً في 9 مجالات موضوعية، مُحدَّث مايو 2026',
    'يغطي GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وأكثر من 20 نموذجاً مفتوح المصدر',
    '5–20 دقيقة لكل مقال، مع النقاط الرئيسية والأسئلة الشائعة والمصادر',
    'يُحسّن التوجيه بسلسلة التفكير دقة الاستدلال المعقد بنسبة 30–40%',
    'تحتاج معظم الفرق الإنتاجية إلى أداتين فقط: إحداهما للتقييم والأخرى للنشر',
    'ابدأ بالأساسيات إن كنت جديداً؛ انتقل مباشرة إلى التقييم والموثوقية أو حوكمة الفريق إن كنت خبيراً',
  ],
  ko: [
    '9개 주제 영역 80편의 기사, 2026년 5월 업데이트',
    'GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro 및 20개 이상의 오픈소스 모델 포함',
    '기사당 5~20분, 각 기사에 핵심 사항, FAQ, 출처 포함',
    '연쇄 사고 프롬프팅으로 복잡한 추론 정확도 30~40% 향상',
    '대부분의 프로덕션 팀에는 정확히 2개의 도구 필요: 평가용 1개, 배포용 1개',
    '초보자라면 기초부터 시작하고, 경험자라면 평가 & 신뢰성 또는 팀 거버넌스로 바로 이동하십시오',
  ],
}

const HUB_QUICK_FACTS_HEADER: Record<string, string> = {
  en: '⚡ Quick Facts', de: '⚡ Schnellfakten', fr: '⚡ En bref', ja: '⚡ クイックファクト', zh: '⚡ 快速事实', es: '⚡ Datos rápidos', pt: '⚡ Fatos rápidos', ar: '⚡ حقائق سريعة', ko: '⚡ 빠른 사실',
}

const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
  es: 'Prueba PromptQuorum gratis →',
  pt: 'Teste o PromptQuorum gratuitamente →',
  ar: 'جرّب PromptQuorum مجاناً ←',
  ko: 'PromptQuorum 무료 체험 →',
}

const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页', es: '← Inicio', pt: '← Início', ar: '← الرئيسية', ko: '← 홈',
}
const HUB_NAV_FEATURES: Record<string, string> = {
  en: 'Features', de: 'Funktionen', fr: 'Fonctionnalités', ja: '機能', zh: '功能', es: 'Características', pt: 'Recursos', ar: 'الميزات', ko: '기능',
}
const HUB_NAV_HOW: Record<string, string> = {
  en: 'How It Works', de: 'So funktioniert es', fr: 'Comment ça marche', ja: '仕組み', zh: '工作原理', es: 'Cómo funciona', pt: 'Como funciona', ar: 'كيف يعمل', ko: '작동 방식',
}
const HUB_NAV_BLOG: Record<string, string> = {
  en: 'Blog', de: 'Blog', fr: 'Blog', ja: 'ブログ', zh: '博客', es: 'Blog', pt: 'Blog', ar: 'المدونة', ko: '블로그',
}

const GUIDES_LABEL: Record<string, string> = {
  en: 'guides', de: 'Leitfäden', fr: 'guides', ja: 'ガイド', zh: '篇指南', es: 'guías', pt: 'guias', ar: 'دليل', ko: '가이드',
}

const GUIDE_LABEL_SINGULAR: Record<string, string> = {
  en: 'guide', de: 'Leitfaden', fr: 'guide', ja: 'ガイド', zh: '篇指南', es: 'guía', pt: 'guia', ar: 'دليل', ko: '가이드',
}

const THEME_DESCRIPTION_LEADS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'What Do You Actually Need to Know?',
    de: 'Was müssen Sie wirklich wissen?',
    fr: 'Que faut-il vraiment savoir ?',
    ja: '本当に必要な知識とは？',
    zh: '你真正需要了解什么？',
    es: '¿Qué necesitas saber realmente?',
    pt: 'O que você realmente precisa saber?',
    ar: 'ما الذي تحتاج لمعرفته فعلاً؟',
    ko: '실제로 무엇을 알아야 합니까?',
  },
  frameworks: {
    en: 'Which Template Gets the Best Results?',
    de: 'Welches Template liefert die besten Ergebnisse?',
    fr: 'Quel modèle donne les meilleurs résultats ?',
    ja: '最高の結果を出すテンプレートは？',
    zh: '哪个模板效果最好？',
    es: '¿Qué plantilla obtiene los mejores resultados?',
    pt: 'Qual template traz os melhores resultados?',
    ar: 'أي قالب يحقق أفضل النتائج؟',
    ko: '어떤 템플릿이 최상의 결과를 가져옵니까?',
  },
  techniques: {
    en: 'What Separates Good Prompts from Great Ones?',
    de: 'Was unterscheidet gute von großartigen Prompts?',
    fr: "Qu'est-ce qui distingue les bons prompts des excellents ?",
    ja: '良いプロンプトと優れたプロンプトの違いは？',
    zh: '好提示词与优秀提示词的区别是什么？',
    es: '¿Qué separa los buenos prompts de los excelentes?',
    pt: 'O que separa bons prompts dos excelentes?',
    ar: 'ما الذي يُميّز التوجيهات الجيدة عن المتميزة؟',
    ko: '좋은 프롬프트와 탁월한 프롬프트의 차이는 무엇입니까?',
  },
  'use-topics': {
    en: 'How Do You Prompt for Your Specific Job?',
    de: 'Wie prompten Sie für Ihren Job?',
    fr: 'Comment prompter pour votre métier ?',
    ja: 'あなたの仕事に合ったプロンプトとは？',
    zh: '如何针对你的工作提示？',
    es: '¿Cómo haces prompts para tu trabajo específico?',
    pt: 'Como você cria prompts para o seu trabalho específico?',
    ar: 'كيف تُوجّه النموذج لعملك المحدد؟',
    ko: '특정 업무에 맞게 모델에 프롬프트를 작성하는 방법은 무엇입니까?',
  },
  policy: {
    en: 'What Do AI Regulations Mean for Your Organization?',
    de: 'Was bedeuten KI-Regulierungen für Ihre Organisation?',
    fr: 'Que signifient les régulations IA pour votre organisation ?',
    ja: 'AI規制はあなたの組織に何を意味するのか？',
    zh: 'AI法规对您的组织意味着什么？',
    es: '¿Qué significan las regulaciones de IA para tu organización?',
    pt: 'O que as regulamentações de IA significam para a sua organização?',
    ar: 'ماذا تعني لوائح الذكاء الاصطناعي لمؤسستك؟',
    ko: 'AI 규제는 귀사에 무엇을 의미합니까?',
  },
  'tools-platforms': {
    en: 'Which Tool Fits Your Workflow?',
    de: 'Welches Tool passt zu Ihrem Arbeitsablauf?',
    fr: 'Quel outil correspond à votre flux de travail ?',
    ja: 'どのツールがあなたのワークフローに合うのか？',
    zh: '哪个工具适合您的工作流程？',
    es: '¿Qué herramienta encaja con tu flujo de trabajo?',
    pt: 'Qual ferramenta combina com o seu fluxo de trabalho?',
    ar: 'أي أداة تناسب سير عملك؟',
    ko: '어떤 도구가 귀하의 워크플로에 맞습니까?',
  },
  'evaluation-reliability': {
    en: 'How Do You Know Your Prompts Work?',
    de: 'Wie wissen Sie, dass Ihre Prompts funktionieren?',
    fr: 'Comment savez-vous que vos prompts fonctionnent ?',
    ja: 'プロンプトが機能していることをどのように確認しますか？',
    zh: '您如何知道提示词是否有效？',
    es: '¿Cómo sabes que tus prompts funcionan?',
    pt: 'Como você sabe que seus prompts funcionam?',
    ar: 'كيف تتحقق من أن توجيهاتك تعمل؟',
    ko: '프롬프트가 작동하는지 어떻게 알 수 있습니까?',
  },
  'team-governance': {
    en: 'How Do You Manage Prompts at Scale?',
    de: 'Wie verwalten Sie Prompts in großem Maßstab?',
    fr: 'Comment gérez-vous les prompts à grande échelle ?',
    ja: '規模を拡大してプロンプトをどのように管理しますか？',
    zh: '如何大规模管理提示词？',
    es: '¿Cómo gestionas prompts a escala?',
    pt: 'Como você gerencia prompts em escala?',
    ar: 'كيف تدير التوجيهات على نطاق واسع؟',
    ko: '대규모로 프롬프트를 어떻게 관리합니까?',
  },
  'workflows-automation': {
    en: 'How Do You Scale Prompts into Systems?',
    de: 'Wie skalieren Sie Prompts zu Systemen?',
    fr: 'Comment transformez-vous les prompts en systèmes ?',
    ja: 'プロンプトをどのようにシステムにスケーリングしますか？',
    zh: '如何将提示词扩展为系统？',
    es: '¿Cómo conviertes prompts en sistemas?',
    pt: 'Como você transforma prompts em sistemas?',
    ar: 'كيف تحوّل التوجيهات إلى أنظمة؟',
    ko: '프롬프트를 시스템으로 확장하는 방법은 무엇입니까?',
  },
}

const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Core concepts every prompt engineer needs to understand — how LLMs work, what tokens are, and why prompt structure determines output quality. These articles explain how temperature controls randomness, why context windows cause AI to "forget," and how different models (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro) interpret instructions differently. Start here if you\'re new to prompt engineering, or use these guides as a reference for the mechanics behind every advanced technique.',
    de: 'Grundkonzepte, die jeder Prompt Engineer verstehen muss — wie LLMs funktionieren, was Tokens sind und warum die Prompt-Struktur die Ausgabequalität bestimmt. Diese Artikel erklären, wie die Temperatur die Zufälligkeit steuert, warum Kontextfenster dazu führen, dass KI "vergisst", und wie verschiedene Modelle Anweisungen unterschiedlich interpretieren. Beginnen Sie hier, wenn Sie neu im Prompt Engineering sind.',
    fr: 'Concepts fondamentaux que tout prompt engineer doit comprendre — comment fonctionnent les LLMs, ce que sont les tokens et pourquoi la structure du prompt détermine la qualité de la sortie. Ces articles expliquent comment la température contrôle l\'aléatoire, pourquoi les fenêtres de contexte font "oublier" à l\'IA, et comment différents modèles interprètent les instructions. Commencez ici si vous débutez en prompt engineering.',
    ja: 'すべてのプロンプトエンジニアが理解すべき基本概念 — LLMの仕組み、トークンとは何か、プロンプトの構造が出力品質を決定する理由。温度がどのようにランダム性を制御するか、なぜコンテキストウィンドウがAIに「忘れさせる」のか、異なるモデルが指示をどのように解釈するかを説明します。プロンプトエンジニアリング初心者はここから始めてください。',
    zh: '每位提示词工程师需要理解的核心概念——LLM的工作原理、词元是什么，以及为什么提示词结构决定输出质量。这些文章解释温度如何控制随机性、为什么上下文窗口会导致AI"遗忘"，以及GPT-4o、Claude 4.6 Sonnet等不同模型如何以不同方式解释指令。提示词工程新手请从这里开始。',
    es: 'Conceptos fundamentales que todo prompt engineer debe entender — cómo funcionan los LLMs, qué son los tokens y por qué la estructura del prompt determina la calidad del resultado. Estos artículos explican cómo la temperatura controla la aleatoriedad, por qué las ventanas de contexto hacen que la IA "olvide" y cómo modelos distintos (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro) interpretan las instrucciones de forma diferente. Empieza aquí si eres nuevo en el prompt engineering.',
    pt: 'Conceitos fundamentais que todo prompt engineer precisa entender — como os LLMs funcionam, o que são tokens e por que a estrutura do prompt determina a qualidade da saída. Estes artigos explicam como a temperatura controla a aleatoriedade, por que as janelas de contexto fazem a IA "esquecer" e como modelos diferentes (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro) interpretam as instruções de formas distintas. Comece por aqui se você é novo em prompt engineering.',
    ar: 'المفاهيم الأساسية التي يحتاج كل مهندس توجيهات إلى فهمها — كيف تعمل النماذج اللغوية الكبيرة، وما هي الرموز المميزة، ولماذا تحدد بنية التوجيه جودة الإخراج. تشرح هذه المقالات كيف تتحكم درجة الحرارة في العشوائية، ولماذا تجعل نوافذ السياق الذكاء الاصطناعي "ينسى"، وكيف تفسر النماذج المختلفة (GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro) التعليمات بطرق مختلفة. ابدأ من هنا إن كنت جديداً على هندسة التوجيهات.',
    ko: '모든 프롬프트 엔지니어가 이해해야 할 핵심 개념 — LLM의 작동 방식, 토큰이란 무엇인지, 프롬프트 구조가 출력 품질을 결정하는 이유. 이 기사들은 온도가 랜덤성을 제어하는 방법, 문맥 창이 AI를 \"잊게\" 하는 이유, 다양한 모델(GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro)이 지시 사항을 다르게 해석하는 방법을 설명합니다. 프롬프트 엔지니어링이 처음이라면 여기서 시작하십시오.',
  },
  frameworks: {
    en: 'Structured templates for building reliable, repeatable prompts across different tasks — marketing, coding, research, and more. Frameworks like CO-STAR, CRAFT, RTF, and APE break down prompts into components (role, context, constraints, output format) to eliminate guesswork and produce consistent results regardless of who writes the prompt. Use these guides to find the right framework for your use case, compare frameworks head-to-head, or build a custom framework tailored to your team\'s specific needs.',
    de: 'Strukturierte Vorlagen für zuverlässige, wiederholbare Prompts für verschiedene Aufgaben — Marketing, Programmierung, Recherche und mehr. Frameworks wie CO-STAR, CRAFT, RTF und APE zerlegen Prompts in Komponenten (Rolle, Kontext, Einschränkungen, Ausgabeformat), um Rätselraten zu eliminieren. Verwenden Sie diese Leitfäden, um das richtige Framework zu finden, Frameworks zu vergleichen oder ein benutzerdefiniertes Framework für Ihr Team zu erstellen.',
    fr: 'Modèles structurés pour construire des prompts fiables et reproductibles pour différentes tâches — marketing, code, recherche et plus encore. Les frameworks comme CO-STAR, CRAFT, RTF et APE décomposent les prompts en composants pour éliminer l\'incertitude et produire des résultats cohérents. Utilisez ces guides pour trouver le bon framework, comparer les frameworks ou construire un framework personnalisé.',
    ja: 'マーケティング、コーディング、調査などさまざまなタスクで信頼性が高く再現可能なプロンプトを構築するための構造化テンプレート。CO-STAR、CRAFT、RTF、APEなどのフレームワークは、プロンプトをコンポーネント（役割、コンテキスト、制約、出力フォーマット）に分解し、誰がプロンプトを書いても一貫した結果を生み出します。',
    zh: '用于构建可靠、可重复提示词的结构化模板，适用于营销、编程、研究等不同任务。CO-STAR、CRAFT、RTF和APE等框架将提示词分解为组成部分（角色、上下文、约束、输出格式），消除猜测并产生一致的结果。使用这些指南为您的用例找到合适的框架，或构建适合团队的自定义框架。',
    es: 'Plantillas estructuradas para construir prompts fiables y repetibles en distintas tareas — marketing, programación, investigación y más. Frameworks como CO-STAR, CRAFT, RTF y APE descomponen los prompts en componentes (rol, contexto, restricciones, formato de salida) para eliminar conjeturas y producir resultados consistentes. Usa estas guías para encontrar el framework adecuado a tu caso de uso, comparar frameworks o crear uno personalizado para tu equipo.',
    pt: 'Templates estruturados para construir prompts confiáveis e repetíveis em diferentes tarefas — marketing, programação, pesquisa e mais. Frameworks como CO-STAR, CRAFT, RTF e APE decompõem os prompts em componentes (papel, contexto, restrições, formato de saída) para eliminar achismos e produzir resultados consistentes, independentemente de quem escreve o prompt. Use estes guias para encontrar o framework certo para o seu caso de uso, comparar frameworks lado a lado ou criar um framework personalizado para as necessidades específicas da sua equipe.',
    ar: 'قوالب منظمة لبناء توجيهات موثوقة وقابلة للتكرار عبر مهام مختلفة — التسويق والبرمجة والبحث وغيرها. تُقسّم الأطر مثل CO-STAR وCRAFT وRTF وAPE التوجيهاتِ إلى مكونات (الدور والسياق والقيود وصيغة الإخراج) للقضاء على التخمين وإنتاج نتائج متسقة بغض النظر عمن يكتب التوجيه. استخدم هذه الأدلة للعثور على الإطار المناسب لحالتك، أو لمقارنة الأطر مع بعضها، أو لبناء إطار مخصص لاحتياجات فريقك.',
    ko: '마케팅, 코딩, 연구 등 다양한 작업에서 신뢰할 수 있고 반복 가능한 프롬프트를 구축하기 위한 구조화된 템플릿. CO-STAR, CRAFT, RTF, APE와 같은 프레임워크는 프롬프트를 구성 요소(역할, 문맥, 제약, 출력 형식)로 나누어 추측을 제거하고 프롬프트를 작성하는 사람에 관계없이 일관된 결과를 생성합니다. 이 가이드를 사용하여 사용 사례에 적합한 프레임워크를 찾거나, 프레임워크를 비교하거나, 팀의 특정 요구에 맞는 맞춤형 프레임워크를 구축하십시오.',
  },
  techniques: {
    en: 'Proven prompting techniques that improve accuracy, reduce errors, and produce more useful AI outputs for any task. These guides cover chain-of-thought prompting (step-by-step reasoning that improves complex problem accuracy), few-shot prompting (teaching with examples), RAG (grounding outputs in external data sources), self-consistency (reliability through multiple solutions), and prompt security (defending against injection attacks). Each technique includes decision criteria: when to use it, when to avoid it, and how to combine techniques for complex tasks.',
    de: 'Bewährte Prompting-Techniken, die die Genauigkeit verbessern, Fehler reduzieren und nützlichere KI-Ausgaben für jede Aufgabe liefern. Diese Leitfäden decken Chain-of-Thought-Prompting, Few-Shot-Prompting, RAG, Selbstkonsistenz und Prompt-Sicherheit gegen Injection-Angriffe ab. Jede Technik enthält Entscheidungskriterien: wann man sie einsetzt, wann man sie vermeidet und wie man Techniken kombiniert.',
    fr: 'Techniques de prompting éprouvées qui améliorent la précision, réduisent les erreurs et produisent des sorties IA plus utiles pour n\'importe quelle tâche. Ces guides couvrent le chain-of-thought prompting, le few-shot prompting, le RAG, la self-consistency et la sécurité des prompts. Chaque technique inclut des critères de décision : quand l\'utiliser, quand l\'éviter et comment combiner les techniques.',
    ja: '精度を向上させ、エラーを削減し、あらゆるタスクでより有用なAI出力を生成することが実証されたプロンプトテクニック。チェーン・オブ・ソート・プロンプティング、フューショット、RAG、自己一貫性、プロンプトインジェクション攻撃への防御を網羅。各テクニックには判断基準（いつ使うか、いつ避けるか、組み合わせ方）が含まれています。',
    zh: '经过验证的提示技术，可提高准确性、减少错误，为任何任务产生更有用的AI输出。这些指南涵盖思维链提示、少样本提示、RAG、自一致性以及针对注入攻击的提示安全防护。每种技术都包含决策标准：何时使用、何时避免，以及如何组合技术处理复杂任务。',
    es: 'Técnicas de prompting probadas que mejoran la precisión, reducen errores y producen resultados de IA más útiles en cualquier tarea. Estas guías cubren chain-of-thought (razonamiento paso a paso), few-shot prompting, RAG, self-consistency y seguridad frente a ataques de inyección. Cada técnica incluye criterios de decisión: cuándo usarla, cuándo evitarla y cómo combinar técnicas para tareas complejas.',
    pt: 'Técnicas de prompting comprovadas que melhoram a precisão, reduzem erros e produzem saídas de IA mais úteis em qualquer tarefa. Estes guias cobrem chain-of-thought (raciocínio passo a passo), few-shot prompting, RAG, self-consistency e segurança contra ataques de injection. Cada técnica inclui critérios de decisão: quando usá-la, quando evitá-la e como combinar técnicas para tarefas complexas.',
    ar: 'تقنيات توجيه مُجرَّبة تُحسّن الدقة وتُقلّل الأخطاء وتُنتج مخرجات ذكاء اصطناعي أكثر فائدة لأي مهمة. تغطي هذه الأدلة التوجيه بسلسلة التفكير (استدلال خطوة بخطوة يُحسّن دقة المسائل المعقدة)، والتوجيه بأمثلة قليلة (التعليم بالأمثلة)، وRAG (ربط المخرجات بمصادر بيانات خارجية)، والاتساق الذاتي (الموثوقية عبر حلول متعددة)، وأمان التوجيه (الدفاع ضد هجمات الحقن). تتضمن كل تقنية معايير قرار: متى تستخدمها، ومتى تتجنبها، وكيف تجمع التقنيات لمهام معقدة.',
    ko: '정확도를 향상시키고 오류를 줄이며 모든 작업에서 더 유용한 AI 출력을 생성하는 검증된 프롬프팅 기법. 이 가이드는 연쇄 사고 프롬프팅(복잡한 문제 정확도를 향상시키는 단계별 추론), 퓨샷 프롬프팅(예시로 가르치기), RAG(외부 데이터 소스에 출력 근거 두기), 자기 일관성(다수의 솔루션을 통한 신뢰성), 프롬프트 보안(인젝션 공격 방어)을 다룹니다. 각 기법에는 결정 기준이 포함됩니다: 사용 시기, 피해야 할 때, 복잡한 작업을 위해 기법을 결합하는 방법.',
  },
  'use-topics': {
    en: 'Practical prompt engineering guides for specific domains and output types. Whether you\'re prompting for code review, research synthesis, SEO content, customer support, or multilingual tasks, these guides provide ready-to-use patterns optimized for each domain. The Output Engineering subsection covers format control, brand voice consistency, quality validation, and prompt library management — the operational layer for teams producing high-volume AI content.',
    de: 'Praktische Prompt Engineering Leitfäden für spezifische Domänen und Ausgabetypen. Ob Code-Review, Forschungssynthese, SEO-Inhalte oder mehrsprachige Aufgaben — diese Leitfäden bieten einsatzbereite Muster für jede Domäne. Die Sektion Output Engineering behandelt Formatsteuerung, Markenkonformität, Qualitätsprüfung und Prompt-Bibliotheksverwaltung.',
    fr: 'Guides pratiques de prompt engineering pour des domaines et types de sortie spécifiques. Ces guides fournissent des modèles prêts à l\'emploi pour la revue de code, la synthèse de recherche, le contenu SEO et les tâches multilingues. La section Ingénierie de sortie couvre le contrôle du format, la cohérence de la voix de marque et la gestion de bibliothèque de prompts.',
    ja: '特定のドメインと出力タイプ向けの実践的なプロンプトエンジニアリングガイド。コードレビュー、調査合成、SEOコンテンツ、多言語タスクなど、各ドメイン向けにすぐに使えるパターンを提供します。出力エンジニアリングセクションでは、フォーマット制御、ブランドボイスの一貫性、品質検証、プロンプトライブラリ管理をカバーします。',
    zh: '面向特定领域和输出类型的实用提示词工程指南。无论是代码审查、研究综合、SEO内容还是多语言任务，这些指南都提供针对各领域优化的即用模式。输出工程子版块涵盖格式控制、品牌声音一致性、质量验证和提示词库管理。',
    es: 'Guías prácticas de prompt engineering para dominios y tipos de salida específicos. Ya sea para revisión de código, síntesis de investigación, contenido SEO, soporte al cliente o tareas multilingüe, estas guías ofrecen patrones listos para usar optimizados para cada dominio. La subsección Output Engineering cubre control de formato, coherencia de voz de marca, validación de calidad y gestión de biblioteca de prompts.',
    pt: 'Guias práticos de prompt engineering para domínios e tipos de saída específicos. Seja para revisão de código, síntese de pesquisa, conteúdo de SEO, suporte ao cliente ou tarefas multilíngues, estes guias oferecem padrões prontos para usar e otimizados para cada domínio. A subseção Output Engineering cobre controle de formato, consistência da voz da marca, validação de qualidade e gerenciamento de biblioteca de prompts.',
    ar: 'أدلة عملية لهندسة التوجيهات في مجالات ومخرجات محددة. سواء أكنت توجّه لمراجعة الكود أم لتلخيص البحث أم لمحتوى SEO أم لدعم العملاء أم لمهام متعددة اللغات، فإن هذه الأدلة تُقدم أنماطاً جاهزة مُحسَّنة لكل مجال. يغطي قسم هندسة الإخراج التحكمَ في التنسيق واتساق صوت العلامة التجارية والتحقق من الجودة وإدارة مكتبة التوجيهات — الطبقة التشغيلية للفرق التي تُنتج محتوى ذكاء اصطناعي بحجم كبير.',
    ko: '특정 도메인 및 출력 유형을 위한 실용적인 프롬프트 엔지니어링 가이드. 코드 검토, 연구 종합, SEO 콘텐츠, 고객 지원 또는 다국어 작업에 대한 프롬프팅에 관계없이 이 가이드는 각 도메인에 최적화된 즉시 사용 가능한 패턴을 제공합니다. 출력 엔지니어링 하위 섹션은 형식 제어, 브랜드 음성 일관성, 품질 검증 및 프롬프트 라이브러리 관리를 다룹니다.',
  },
  policy: {
    en: 'How AI regulation, data residency law, and geopolitical competition affect organizations deploying AI. As governments in the EU, US, China, and Japan establish AI governance frameworks, prompt engineers and AI teams need to understand which compliance obligations affect how prompts can be written, what data they can reference, and how outputs must be handled. This section is expanding — additional guides on EU AI Act compliance, GDPR and AI prompts, and enterprise data residency are in development.',
    de: 'Wie KI-Regulierung, Datenspeichergesetze und geopolitischer Wettbewerb Organisationen beim KI-Einsatz betreffen. Mit zunehmenden Governance-Frameworks in EU, USA, China und Japan müssen Prompt Engineers verstehen, welche Compliance-Verpflichtungen gelten. Dieser Bereich wird ausgebaut — weitere Leitfäden zu EU KI-Gesetz, DSGVO und Unternehmensdatenspeicherung befinden sich in Entwicklung.',
    fr: 'Comment la régulation IA, les lois sur la résidence des données et la concurrence géopolitique affectent les organisations déployant l\'IA. Cette section est en expansion — des guides sur l\'AI Act européen, le RGPD et la résidence des données d\'entreprise sont en développement.',
    ja: 'AI規制、データ保管法、地政学的競争が、AIを展開する組織に与える影響。このセクションは拡充中です — EU AI法、GDPR、企業データ管理に関する追加ガイドを開発中です。',
    zh: 'AI法规、数据驻留法律和地缘政治竞争如何影响部署AI的组织。本版块正在扩充中——欧盟AI法案合规、GDPR与AI提示词相关指南正在开发中。',
    es: 'Cómo la regulación de IA, las leyes de residencia de datos y la competencia geopolítica afectan a las organizaciones que despliegan IA. Esta sección está en expansión — se están desarrollando guías adicionales sobre cumplimiento del AI Act europeo, RGPD y prompts de IA, y residencia de datos empresariales.',
    pt: 'Como a regulamentação de IA, as leis de residência de dados e a competição geopolítica afetam as organizações que implantam IA. Conforme governos da União Europeia, EUA, China e Japão estabelecem frameworks de governança de IA, prompt engineers e equipes de IA precisam entender quais obrigações de compliance afetam como os prompts podem ser escritos, quais dados eles podem referenciar e como as saídas devem ser tratadas. Esta seção está em expansão — guias adicionais sobre conformidade com o AI Act europeu, LGPD e prompts de IA, e residência de dados corporativos estão em desenvolvimento.',
    ar: 'كيف تؤثر لوائح الذكاء الاصطناعي وقوانين إقامة البيانات والمنافسة الجيوسياسية على المؤسسات التي تنشر الذكاء الاصطناعي. مع إنشاء حكومات الاتحاد الأوروبي والولايات المتحدة والصين واليابان لأطر حوكمة الذكاء الاصطناعي، يحتاج مهندسو التوجيهات وفرق الذكاء الاصطناعي إلى فهم الالتزامات الامتثالية التي تؤثر على كيفية كتابة التوجيهات وكيفية التعامل مع المخرجات. هذا القسم في توسع مستمر — أدلة إضافية حول امتثال قانون الذكاء الاصطناعي الأوروبي وGDPR قيد التطوير.',
    ko: 'AI 규제, 데이터 거주 법률 및 지정학적 경쟁이 AI를 배포하는 조직에 미치는 영향. EU, 미국, 중국, 일본 정부가 AI 거버넌스 프레임워크를 수립함에 따라 프롬프트 엔지니어와 AI 팀은 프롬프트 작성 방법, 참조할 수 있는 데이터 및 출력 처리 방법에 영향을 미치는 규정 준수 의무를 이해해야 합니다. 이 섹션은 확장 중입니다 — EU AI 법률 준수에 관한 추가 가이드가 개발 중입니다.',
  },
  'tools-platforms': {
    en: 'Evaluate and compare the best prompt engineering tools, platforms, and IDEs for individual and team workflows. These guides cover prompt testing suites (Braintrust for evaluation depth, Promptfoo for CI/CD integration), version control platforms (PromptHub for collaboration, Vellum for production traffic), developer IDEs (Cursor, VS Code with Continue.dev), and head-to-head comparisons with pricing and team-size fit. Every comparison includes explicit decision criteria so you can match the right tool to your workflow.',
    de: 'Bewerten und vergleichen Sie die besten Prompt Engineering Tools, Plattformen und IDEs. Diese Leitfäden behandeln Testsuiten (Braintrust, Promptfoo), Versionskontrollplattformen (PromptHub, Vellum), Entwickler-IDEs (Cursor, VS Code mit Continue.dev) sowie Direkt-Vergleiche mit Preisen und Team-Empfehlungen. Jeder Vergleich enthält klare Entscheidungskriterien.',
    fr: 'Évaluez et comparez les meilleurs outils, plateformes et IDEs de prompt engineering. Ces guides couvrent les suites de test (Braintrust, Promptfoo), les plateformes de contrôle de version (PromptHub, Vellum), les IDEs développeurs (Cursor, VS Code avec Continue.dev) et des comparatifs tête-à-tête avec tarifs et recommandations.',
    ja: '個人とチームのワークフロー向けの最高のプロンプトエンジニアリングツール、プラットフォーム、IDEを評価・比較します。テストスイート（Braintrust、Promptfoo）、バージョン管理プラットフォーム（PromptHub、Vellum）、開発者IDE（Cursor、VS Code + Continue.dev）を網羅。価格やチームサイズの適合性を含む明確な判断基準付きの比較で最適なツールを選べます。',
    zh: '评估并比较最适合个人和团队工作流的提示词工程工具、平台和IDE。这些指南涵盖测试套件（Braintrust、Promptfoo）、版本控制平台（PromptHub、Vellum）、开发者IDE（Cursor、VS Code+Continue.dev），以及包含定价和团队规模建议的横向比较。',
    es: 'Evalúa y compara las mejores herramientas, plataformas e IDEs de prompt engineering para flujos de trabajo individuales y en equipo. Estas guías cubren suites de testing (Braintrust, Promptfoo), plataformas de control de versiones (PromptHub, Vellum), IDEs para desarrolladores (Cursor, VS Code con Continue.dev) y comparativas con precios y recomendaciones por tamaño de equipo.',
    pt: 'Avalie e compare as melhores ferramentas, plataformas e IDEs de prompt engineering para fluxos de trabalho individuais e de equipe. Estes guias cobrem suites de testes (Braintrust, Promptfoo), plataformas de controle de versão (PromptHub, Vellum), IDEs para desenvolvedores (Cursor, VS Code com Continue.dev) e comparativos diretos com preços e recomendações por tamanho de equipe. Cada comparativo inclui critérios de decisão explícitos para você escolher a ferramenta certa para o seu fluxo de trabalho.',
    ar: 'تقييم ومقارنة أفضل أدوات هندسة التوجيهات والمنصات وبيئات التطوير للأفراد والفرق. تغطي هذه الأدلة مجموعات اختبار التوجيهات (Braintrust للعمق التقييمي، وPromptfoo لتكامل CI/CD)، ومنصات التحكم في الإصدار (PromptHub للتعاون، وVellum لحركة مرور الإنتاج)، وبيئات المطورين (Cursor وVS Code مع Continue.dev)، ومقارنات مباشرة مع الأسعار والملاءمة حسب حجم الفريق. تتضمن كل مقارنة معايير قرار واضحة لتوافق الأداة المناسبة مع سير عملك.',
    ko: '개인 및 팀 워크플로를 위한 최고의 프롬프트 엔지니어링 도구, 플랫폼 및 IDE를 평가하고 비교합니다. 이 가이드는 프롬프트 테스트 스위트(Braintrust(평가 깊이용), Promptfoo(CI/CD 통합용)), 버전 관리 플랫폼(PromptHub(협업용), Vellum(프로덕션 트래픽용)), 개발자 IDE(Cursor, VS Code + Continue.dev), 가격 및 팀 규모 적합성을 포함한 직접 비교를 다룹니다.',
  },
  'evaluation-reliability': {
    en: 'Systematic methods to evaluate prompt quality, test across models, and build reliable prompts for production. Untested prompts fail silently — they return plausible-sounding wrong answers instead of throwing errors, meaning quality issues go undetected until production. These guides cover prompt evaluation metrics (accuracy, consistency, latency), regression testing to catch breaking changes, brittleness reduction strategies, cross-model consistency testing, and building automated review gates into CI/CD pipelines.',
    de: 'Systematische Methoden zur Bewertung der Prompt-Qualität, zum Testen über Modelle hinweg und zum Erstellen zuverlässiger Prompts für die Produktion. Ungetestete Prompts scheitern lautlos. Diese Leitfäden decken Bewertungsmetriken, Regressionstests, Sprödigkeitsreduzierung, Modell-übergreifende Konsistenz und CI/CD-Prüfkontrollen ab.',
    fr: 'Méthodes systématiques pour évaluer la qualité des prompts, tester sur plusieurs modèles et créer des prompts fiables pour la production. Les prompts non testés échouent silencieusement. Ces guides couvrent les métriques d\'évaluation, les tests de régression, la réduction de la fragilité, la cohérence multi-modèles et les contrôles de revue CI/CD.',
    ja: 'プロンプト品質を評価し、複数のモデル間でテストし、本番環境向けに信頼性の高いプロンプトを構築するための体系的な方法。テストされていないプロンプトはサイレントに失敗します。評価指標、回帰テスト、脆弱性低減、クロスモデル一貫性テスト、CI/CDへのレビューゲート統合をカバーします。',
    zh: '评估提示词质量、跨模型测试以及为生产环境构建可靠提示词的系统化方法。未经测试的提示词会悄无声息地失败。这些指南涵盖评估指标、回归测试、脆弱性降低策略、跨模型一致性测试，以及将自动化审查门禁集成到CI/CD流水线中。',
    es: 'Métodos sistemáticos para evaluar la calidad de prompts, probar en varios modelos y construir prompts fiables para producción. Los prompts sin probar fallan en silencio. Estas guías cubren métricas de evaluación, pruebas de regresión, estrategias para reducir la fragilidad, testing de consistencia entre modelos e integración de revisiones automatizadas en pipelines CI/CD.',
    pt: 'Métodos sistemáticos para avaliar a qualidade dos prompts, testar em vários modelos e construir prompts confiáveis para produção. Prompts não testados falham em silêncio — eles retornam respostas erradas com aparência plausível em vez de gerar erros, o que significa que problemas de qualidade passam despercebidos até a produção. Estes guias cobrem métricas de avaliação de prompts (precisão, consistência, latência), testes de regressão para detectar mudanças que quebram, estratégias de redução de fragilidade, testes de consistência entre modelos e a criação de gates de revisão automatizados em pipelines de CI/CD.',
    ar: 'أساليب منهجية لتقييم جودة التوجيهات واختبارها عبر النماذج وبناء توجيهات موثوقة للإنتاج. التوجيهات غير المُختبرة تفشل بصمت — تُعيد إجابات خاطئة تبدو معقولة بدلاً من إثارة أخطاء، مما يعني أن مشكلات الجودة لا تُكتشف حتى مرحلة الإنتاج. تغطي هذه الأدلة مقاييس تقييم التوجيهات (الدقة والاتساق والكمون)، واختبار الانحدار للكشف عن التغييرات المُعطِّلة، واستراتيجيات تقليل الهشاشة، واختبار الاتساق عبر النماذج، وبناء بوابات مراجعة آلية في خطوط أنابيب CI/CD.',
    ko: '프롬프트 품질 평가, 모델 간 테스트 및 프로덕션을 위한 신뢰할 수 있는 프롬프트 구축을 위한 체계적인 방법. 테스트되지 않은 프롬프트는 조용히 실패합니다 — 오류가 발생하는 대신 그럴듯하게 들리는 잘못된 답변을 반환하여 품질 문제가 프로덕션까지 감지되지 않습니다. 이 가이드는 프롬프트 평가 지표(정확도, 일관성, 지연), 변경 사항 감지를 위한 회귀 테스트, 취약성 감소 전략, 모델 간 일관성 테스트 및 CI/CD 파이프라인에 자동화된 검토 게이트 구축을 다룹니다.',
  },
  'team-governance': {
    en: 'Establish version control, documentation, governance, and security workflows for team-based prompt engineering. As AI becomes a core engineering function, teams need repeatable processes: Git-based prompt versioning (every prompt change is a PR), standardized documentation templates, approval workflows with domain and security reviewers, injection-vulnerability scanning, and full audit trails for compliance. These guides explain how to operationalize prompt engineering at team scale without adding workflow overhead.',
    de: 'Etablieren Sie Versionskontrolle, Dokumentation, Steuerung und Sicherheitsprozesse für teambasiertes Prompt Engineering. Teams benötigen reproduzierbare Abläufe: Git-basierte Prompt-Versionierung, standardisierte Dokumentationsvorlagen, Genehmigungsprozesse, Injection-Schwachstellen-Scans und vollständige Prüfpfade.',
    fr: 'Établissez le contrôle de version, la documentation, la gouvernance et les processus de sécurité pour le prompt engineering en équipe. Les équipes ont besoin de processus reproductibles : gestion de versions Git des prompts, modèles de documentation standardisés, processus d\'approbation, analyse des vulnérabilités d\'injection et pistes d\'audit complètes.',
    ja: 'チームベースのプロンプトエンジニアリングのためのバージョン管理、ドキュメント、ガバナンス、セキュリティワークフローを確立します。Gitベースのプロンプトバージョニング、標準化されたドキュメントテンプレート、承認ワークフロー、インジェクション脆弱性スキャン、完全な監査証跡が必要です。',
    zh: '为基于团队的提示词工程建立版本控制、文档、治理和安全工作流。团队需要可重复的流程：基于Git的提示词版本控制、标准化文档模板、审批工作流、注入漏洞扫描和完整审计跟踪。',
    es: 'Establece control de versiones, documentación, gobernanza y flujos de trabajo de seguridad para el prompt engineering en equipo. Los equipos necesitan procesos repetibles: versionado de prompts basado en Git, plantillas de documentación estandarizadas, flujos de aprobación, análisis de vulnerabilidades de inyección y trazabilidad completa para auditorías.',
    pt: 'Estabeleça controle de versão, documentação, governança e fluxos de trabalho de segurança para prompt engineering em equipe. Conforme a IA se torna uma função central de engenharia, as equipes precisam de processos repetíveis: versionamento de prompts baseado em Git (cada alteração de prompt é um PR), templates de documentação padronizados, fluxos de aprovação com revisores de domínio e de segurança, varredura de vulnerabilidades de injection e trilhas de auditoria completas para compliance. Estes guias explicam como operacionalizar o prompt engineering em escala de equipe sem adicionar sobrecarga ao fluxo de trabalho.',
    ar: 'إنشاء سير عمل للتحكم في الإصدار والتوثيق والحوكمة والأمان لهندسة التوجيهات القائمة على الفريق. مع تحول الذكاء الاصطناعي إلى وظيفة هندسية أساسية، تحتاج الفرق إلى عمليات قابلة للتكرار: إصدار التوجيهات المستند إلى Git (كل تغيير في التوجيه هو طلب سحب)، وقوالب توثيق موحدة، وسير عمل موافقة مع مراجعين للمجال والأمان، وفحص ثغرات الحقن، وسجلات تدقيق كاملة للامتثال. تشرح هذه الأدلة كيفية تشغيل هندسة التوجيهات على مستوى الفريق دون إضافة عبء على سير العمل.',
    ko: '팀 기반 프롬프트 엔지니어링을 위한 버전 관리, 문서화, 거버넌스 및 보안 워크플로를 구축합니다. AI가 핵심 엔지니어링 기능이 됨에 따라 팀은 반복 가능한 프로세스가 필요합니다: Git 기반 프롬프트 버전 관리(모든 프롬프트 변경이 PR), 표준화된 문서 템플릿, 도메인 및 보안 검토자를 통한 승인 워크플로, 인젝션 취약성 스캔 및 규정 준수를 위한 완전한 감사 추적.',
  },
  'workflows-automation': {
    en: 'Build structured outputs, automate prompt workflows, and design repeatable processes for teams and use cases. These guides cover JSON mode and structured extraction (Instructor, Outlines, Pydantic AI), prompt chaining into multi-step workflows, cross-model testing pipelines, and how to configure prompt engineering workflows for developers, content teams, and support operations. Each guide includes practical patterns deployable in days, not months.',
    de: 'Erstellen Sie strukturierte Ausgaben, automatisieren Sie Prompt-Abläufe und entwerfen Sie wiederholbare Prozesse. Diese Leitfäden decken JSON-Mode (Instructor, Outlines, Pydantic AI), Prompt-Chaining in mehrstufigen Abläufen und Prompt-Engineering-Setups für Entwickler, Redaktionsteams und Support-Betrieb ab.',
    fr: 'Créez des sorties structurées, automatisez les flux de travail de prompts et concevez des processus reproductibles. Ces guides couvrent le mode JSON (Instructor, Outlines), le prompt chaining en flux de travail multi-étapes, et la configuration des flux de travail pour développeurs, équipes contenu et opérations de support.',
    ja: '構造化された出力を構築し、プロンプトワークフローを自動化し、チームとユースケース向けの反復可能なプロセスを設計します。JSONモードと構造化抽出（Instructor、Outlines、Pydantic AI）、マルチステップワークフロー、開発者・コンテンツチーム・サポートオペレーション向けのワークフロー設定を網羅します。',
    zh: '构建结构化输出、自动化提示词工作流，以及为团队和用例设计可重复的流程。这些指南涵盖JSON模式和结构化提取（Instructor、Outlines、Pydantic AI）、多步骤工作流的提示词链，以及为开发者、内容团队和支持运营配置提示词工程工作流。',
    es: 'Construye salidas estructuradas, automatiza flujos de trabajo de prompts y diseña procesos repetibles para equipos y casos de uso. Estas guías cubren el modo JSON y extracción estructurada (Instructor, Outlines, Pydantic AI), encadenamiento de prompts en flujos de trabajo multi-paso, y cómo configurar flujos de prompt engineering para desarrolladores, equipos de contenido y operaciones de soporte.',
    pt: 'Construa saídas estruturadas, automatize fluxos de trabalho de prompts e projete processos repetíveis para equipes e casos de uso. Estes guias cobrem o modo JSON e extração estruturada (Instructor, Outlines, Pydantic AI), encadeamento de prompts em fluxos de trabalho de múltiplas etapas, pipelines de testes entre modelos e como configurar fluxos de prompt engineering para desenvolvedores, equipes de conteúdo e operações de suporte. Cada guia inclui padrões práticos que podem ser implantados em dias, não meses.',
    ar: 'بناء مخرجات منظمة وأتمتة سير عمل التوجيهات وتصميم عمليات قابلة للتكرار للفرق وحالات الاستخدام. تغطي هذه الأدلة وضع JSON واستخراج البنية (Instructor وOutlines وPydantic AI)، وسلسلة التوجيهات في سير عمل متعدد الخطوات، وخطوط أنابيب الاختبار عبر النماذج، وكيفية تكوين سير عمل هندسة التوجيهات للمطورين وفرق المحتوى وعمليات الدعم. يتضمن كل دليل أنماطاً عملية قابلة للنشر في أيام لا أشهر.',
    ko: '구조화된 출력을 구축하고, 프롬프트 워크플로를 자동화하고, 팀과 사용 사례를 위한 반복 가능한 프로세스를 설계합니다. 이 가이드는 JSON 모드 및 구조화된 추출(Instructor, Outlines, Pydantic AI), 다단계 워크플로로의 프롬프트 체이닝, 개발자, 콘텐츠 팀 및 지원 운영을 위한 프롬프트 엔지니어링 워크플로 구성 방법을 다룹니다.',
  },
}

const SUBSECTION_LABELS: Record<string, Record<string, string>> = {
  'Use Cases by Vertical': {
    en: 'Use Cases by Vertical',
    de: 'Anwendungsfälle nach Branche',
    fr: 'Cas d\'usage par secteur',
    ja: '業種別ユースケース',
    zh: '按垂直领域划分的用例',
    es: 'Casos de uso por sector',
    pt: 'Casos de uso por setor',
    ar: 'حالات الاستخدام حسب القطاع',
    ko: '산업별 활용 사례',
  },
  'Output Engineering': {
    en: 'Output Engineering',
    de: 'Ausgabe-Engineering',
    fr: 'Ingénierie de sortie',
    ja: '出力エンジニアリング',
    zh: '输出工程',
    es: 'Ingeniería de salida',
    pt: 'Output Engineering',
    ar: 'هندسة الإخراج',
    ko: '출력 엔지니어링',
  },
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Fundamentals',
    de: 'Grundlagen',
    fr: 'Fondamentaux',
    ja: '基礎',
    zh: '基础知识',
    es: 'Fundamentos',
    pt: 'Fundamentos',
    ar: 'الأساسيات',
    ko: '기초',
  },
  frameworks: {
    en: 'Frameworks',
    de: 'Frameworks',
    fr: 'Frameworks',
    ja: 'フレームワーク',
    zh: '框架',
    es: 'Frameworks',
    pt: 'Frameworks',
    ar: 'الأطر',
    ko: '프레임워크',
  },
  techniques: {
    en: 'Techniques',
    de: 'Techniken',
    fr: 'Techniques',
    ja: 'テクニック',
    zh: '技术',
    es: 'Técnicas',
    pt: 'Técnicas',
    ar: 'التقنيات',
    ko: '기법',
  },
  'use-topics': {
    en: 'Use Cases & Output Engineering',
    de: 'Anwendungsfälle & Ausgabe-Engineering',
    fr: "Cas d'usage et Ingénierie de sortie",
    ja: 'ユースケースと出力エンジニアリング',
    zh: '用例与输出工程',
    es: 'Casos de uso e Ingeniería de salida',
    pt: 'Casos de uso e Output Engineering',
    ar: 'حالات الاستخدام وهندسة الإخراج',
    ko: '활용 사례 및 출력 엔지니어링',
  },
  policy: {
    en: 'Policy & Compliance',
    de: 'Politik & Compliance',
    fr: 'Politique & Conformité',
    ja: 'ポリシーとコンプライアンス',
    zh: '政策与合规',
    es: 'Política & Cumplimiento',
    pt: 'Política & Compliance',
    ar: 'السياسات والامتثال',
    ko: '정책 및 규정 준수',
  },
  'tools-platforms': {
    en: 'Tools & Platforms',
    de: 'Tools & Plattformen',
    fr: 'Outils & Plateformes',
    ja: 'ツール＆プラットフォーム',
    zh: '工具与平台',
    es: 'Herramientas & Plataformas',
    pt: 'Ferramentas & Plataformas',
    ar: 'الأدوات والمنصات',
    ko: '도구 및 플랫폼',
  },
  'evaluation-reliability': {
    en: 'Evaluation & Reliability',
    de: 'Evaluierung & Zuverlässigkeit',
    fr: 'Évaluation & Fiabilité',
    ja: '評価と信頼性',
    zh: '评估与可靠性',
    es: 'Evaluación & Fiabilidad',
    pt: 'Avaliação & Confiabilidade',
    ar: 'التقييم والموثوقية',
    ko: '평가 및 신뢰성',
  },
  'team-governance': {
    en: 'Team Governance',
    de: 'Team-Steuerung',
    fr: "Gouvernance d'équipe",
    ja: 'チームガバナンス',
    zh: '团队治理',
    es: 'Gobernanza de equipo',
    pt: 'Governança de equipe',
    ar: 'حوكمة الفريق',
    ko: '팀 거버넌스',
  },
  'workflows-automation': {
    en: 'Workflows & Automation',
    de: 'Prozesse & Automatisierung',
    fr: 'Processus & Automatisation',
    ja: 'ワークフロー＆オートメーション',
    zh: '工作流程与自动化',
    es: 'Flujos de trabajo & Automatización',
    pt: 'Fluxos de trabalho & Automação',
    ar: 'سير العمل والأتمتة',
    ko: '워크플로 및 자동화',
  },
}

const THEME_CALLOUTS: Record<string, Record<string, { icon: string; title: string; text: string }>> = {
  fundamentals: {
    en: { icon: '🔍', title: 'Where to Start', text: 'If you read only 3 articles, read: "What Is Prompt Engineering," "Chain-of-Thought Prompting," and "How to Evaluate Prompt Quality." These three cover 80% of what you need.' },
    de: { icon: '🔍', title: 'Wo anfangen', text: 'Wenn Sie nur 3 Artikel lesen: „Was ist Prompt Engineering", „Chain-of-Thought-Prompting" und „Prompt-Qualität bewerten". Diese drei decken 80% ab.' },
    fr: { icon: '🔍', title: 'Par où commencer', text: "Si vous ne lisez que 3 articles : « Qu'est-ce que le prompt engineering », « Chain-of-Thought Prompting » et « Évaluer la qualité des prompts ». Ces trois couvrent 80% de ce dont vous avez besoin." },
    ja: { icon: '🔍', title: 'どこから始めるか', text: '3記事だけ読むなら：「プロンプトエンジニアリングとは」「チェーン・オブ・ソートプロンプティング」「プロンプト品質の評価方法」。この3つで必要な知識の80%がカバーされます。' },
    zh: { icon: '🔍', title: '从哪里开始', text: '如果只读3篇文章：《什么是Prompt工程》《思维链提示》《如何评估Prompt质量》。这三篇涵盖了你所需知识的80%。' },
    es: { icon: '🔍', title: 'Por dónde empezar', text: 'Si solo lees 3 artículos, lee: "Qué es el Prompt Engineering", "Chain-of-Thought Prompting" y "Cómo evaluar la calidad de prompts". Estos tres cubren el 80% de lo que necesitas.' },
    pt: { icon: '🔍', title: 'Por onde começar', text: 'Se você ler apenas 3 artigos, leia: "O que é Prompt Engineering", "Chain-of-Thought Prompting" e "Como avaliar a qualidade dos prompts". Esses três cobrem 80% do que você precisa.' },
    ar: { icon: '🔍', title: 'من أين تبدأ', text: 'إن كنت ستقرأ 3 مقالات فقط، اقرأ: "ما هي هندسة التوجيهات" و"التوجيه بسلسلة التفكير" و"كيف تُقيّم جودة التوجيه". هذه الثلاثة تغطي 80% مما تحتاجه.' },
    ko: { icon: '🔍', title: '시작점', text: '3편의 기사만 읽는다면: \"프롬프트 엔지니어링이란 무엇인가\", \"연쇄 사고 프롬프팅\", \"프롬프트 품질 평가 방법\"을 읽으십시오. 이 세 편이 필요한 것의 80%를 다룹니다.' },
  },
  'tools-platforms': {
    en: { icon: '🔍', title: 'Two-Tool Stack', text: 'Most teams waste money on 3-4 tools. The optimal stack: one for evaluation (Braintrust or Promptfoo) and one for deployment (Vellum or PromptHub). Start with free tools (Promptfoo + PromptQuorum) before paying.' },
    de: { icon: '🔍', title: 'Zwei-Tool-Stack', text: 'Die meisten Teams verschwenden Geld mit 3–4 Tools. Der optimale Stack: eines für die Evaluation (Braintrust oder Promptfoo) und eines für das Deployment (Vellum oder PromptHub). Starten Sie mit kostenlosen Tools (Promptfoo + PromptQuorum) bevor Sie bezahlen.' },
    fr: { icon: '🔍', title: 'Stack deux outils', text: "La plupart des équipes gaspillent de l'argent sur 3-4 outils. Le stack optimal : un pour l'évaluation (Braintrust ou Promptfoo) et un pour le déploiement (Vellum ou PromptHub). Commencez avec des outils gratuits (Promptfoo + PromptQuorum) avant de payer." },
    ja: { icon: '🔍', title: '2ツールスタック', text: 'ほとんどのチームが3〜4つのツールに無駄なお金を使っています。最適なスタック：評価用（BraintrustまたはPromptfoo）とデプロイ用（VellumまたはPromptHub）の2つ。有料ツールを使う前に無料ツール（Promptfoo + PromptQuorum）から始めましょう。' },
    zh: { icon: '🔍', title: '双工具组合', text: '大多数团队在3-4个工具上浪费金钱。最优工具栈：一个用于评估（Braintrust或Promptfoo），一个用于部署（Vellum或PromptHub）。付费前先用免费工具（Promptfoo + PromptQuorum）。' },
    es: { icon: '🔍', title: 'Stack de dos herramientas', text: 'La mayoría de equipos malgasta dinero en 3-4 herramientas. El stack óptimo: una para evaluación (Braintrust o Promptfoo) y una para despliegue (Vellum o PromptHub). Empieza con herramientas gratuitas (Promptfoo + PromptQuorum) antes de pagar.' },
    pt: { icon: '🔍', title: 'Stack de duas ferramentas', text: 'A maioria das equipes desperdiça dinheiro com 3-4 ferramentas. O stack ideal: uma para avaliação (Braintrust ou Promptfoo) e uma para deploy (Vellum ou PromptHub). Comece com ferramentas gratuitas (Promptfoo + PromptQuorum) antes de pagar.' },
    ar: { icon: '🔍', title: 'مجموعة الأداتين', text: 'تُهدر معظم الفرق المال على 3-4 أدوات. المجموعة المثلى: أداة للتقييم (Braintrust أو Promptfoo) وأداة للنشر (Vellum أو PromptHub). ابدأ بالأدوات المجانية (Promptfoo + PromptQuorum) قبل الدفع.' },
    ko: { icon: '🔍', title: '2개 도구 스택', text: '대부분의 팀이 3~4개 도구에 돈을 낭비합니다. 최적 스택: 평가용 1개(Braintrust 또는 Promptfoo)와 배포용 1개(Vellum 또는 PromptHub). 유료 전에 무료 도구(Promptfoo + PromptQuorum)로 시작하십시오.' },
  },
  'evaluation-reliability': {
    en: { icon: '🔍', title: 'Silent Failures', text: 'Prompts fail silently — no error log, no exception. Output quality degrades but nothing breaks visibly. Evaluation and regression testing are the only way to catch this.' },
    de: { icon: '🔍', title: 'Stille Fehler', text: 'Prompts scheitern lautlos — kein Fehlerprotokoll, keine Ausnahme. Die Ausgabequalität sinkt, aber nichts bricht sichtbar. Evaluierung und Regressionstests sind der einzige Weg, dies zu erkennen.' },
    fr: { icon: '🔍', title: 'Échecs silencieux', text: "Les prompts échouent silencieusement — pas de log d'erreur, pas d'exception. La qualité des sorties se dégrade mais rien ne casse visiblement. L'évaluation et les tests de régression sont le seul moyen de détecter cela." },
    ja: { icon: '🔍', title: 'サイレント障害', text: 'プロンプトはサイレントに失敗します — エラーログも例外も出ません。出力品質は低下しますが、表面的には何も壊れません。評価と回帰テストだけがこれを検出する方法です。' },
    zh: { icon: '🔍', title: '静默失败', text: 'Prompt悄无声息地失败——没有错误日志，没有异常。输出质量下降，但表面上什么都没有断裂。评估和回归测试是唯一能发现这个问题的方法。' },
    es: { icon: '🔍', title: 'Fallos silenciosos', text: 'Los prompts fallan sin hacer ruido — sin log de errores, sin excepciones. La calidad de la salida se degrada pero nada falla visiblemente. La evaluación y los tests de regresión son la única forma de detectarlo.' },
    pt: { icon: '🔍', title: 'Falhas silenciosas', text: 'Os prompts falham em silêncio — sem log de erro, sem exceção. A qualidade da saída se degrada, mas nada quebra visivelmente. Avaliação e testes de regressão são a única forma de detectar isso.' },
    ar: { icon: '🔍', title: 'الفشل الصامت', text: 'التوجيهات تفشل بصمت — لا سجل أخطاء ولا استثناءات. تتدهور جودة الإخراج دون أن يظهر أي عطل واضح. التقييم واختبار الانحدار هما الوسيلة الوحيدة لاكتشاف ذلك.' },
    ko: { icon: '🔍', title: '조용한 실패', text: '프롬프트는 조용히 실패합니다 — 오류 로그도 예외도 없습니다. 출력 품질이 저하되지만 눈에 띄게 망가지는 것이 없습니다. 평가와 회귀 테스트만이 이것을 감지하는 방법입니다.' },
  },
}

const HUB_SOURCES_HEADER: Record<string, string> = {
  en: 'Sources', de: 'Quellen', fr: 'Sources', ja: '出典', zh: '参考来源', es: 'Fuentes', pt: 'Fontes', ar: 'المصادر', ko: '출처',
}

const HUB_SOURCES_DATA: Array<{ title: string; url: string; desc: string }> = [
  { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', desc: 'Official OpenAI prompting best practices' },
  { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering', desc: 'Official Anthropic prompting guide for Claude' },
  { title: 'Google Gemini Prompting Guide', url: 'https://ai.google.dev/gemini-api/docs/prompting-intro', desc: 'Official Google prompting strategies for Gemini' },
  { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework', desc: 'Federal governance framework for AI systems' },
  { title: 'EU AI Act Summary', url: 'https://artificialintelligenceact.eu/', desc: 'Regulatory requirements for AI systems in the European Union' },
]

// Proper titles for articles that don't yet have full content (fallback to avoid slug-formatted display)
const FALLBACK_TITLES: Record<string, Record<string, string>> = {
  'prompt-documentation-templates': {
    en: 'Prompt Documentation Templates for Teams',
    de: 'Prompt-Dokumentationsvorlagen für Teams',
    fr: 'Modèles de documentation de prompts pour équipes',
    ja: 'チーム向けプロンプト文書テンプレート',
    zh: '团队提示词文档模板',
    pt: 'Templates de documentação de prompts para equipes',
    ar: 'قوالب توثيق التوجيهات للفرق',
    ko: '팀을 위한 프롬프트 문서화 템플릿',
  },
  'prompt-governance-in-production': {
    en: 'Prompt Governance in Production',
    de: 'Prompt-Steuerung in der Produktion',
    fr: 'Gouvernance des prompts en production',
    ja: '本番環境でのプロンプトガバナンス',
    zh: '生产环境中的提示词治理',
    pt: 'Governança de prompts em produção',
    ar: 'حوكمة التوجيهات في الإنتاج',
    ko: '프로덕션에서의 프롬프트 거버넌스',
  },
  'prompt-security-tools-injection-testing': {
    en: 'Prompt Security Tools & Injection Testing',
    de: 'Prompt-Sicherheitstools und Injection-Tests',
    fr: "Outils de sécurité et tests d'injection de prompts",
    ja: 'プロンプトセキュリティツールとインジェクションテスト',
    zh: '提示词安全工具与注入测试',
    pt: 'Ferramentas de segurança de prompts & testes de injection',
    ar: 'أدوات أمان التوجيهات واختبار الحقن',
    ko: '프롬프트 보안 도구 및 인젝션 테스트',
  },
  'prompt-audit-and-regression-risk': {
    en: 'Prompt Audit & Regression Risk Management',
    de: 'Prompt-Audit und Regressionsrisikomanagement',
    fr: 'Audit de prompts et gestion du risque de régression',
    ja: 'プロンプト監査と回帰リスク管理',
    zh: '提示词审计与回归风险管理',
    pt: 'Auditoria de prompts & gestão de risco de regressão',
    ar: 'تدقيق التوجيهات وإدارة مخاطر الانحدار',
    ko: '프롬프트 감사 및 회귀 위험 관리',
  },
  'multi-model-prompt-testing-workflows': {
    en: 'Multi-Model Prompt Testing Workflows',
    de: 'Multi-Modell-Prompt-Testprozesse',
    fr: 'Processus de test de prompts multi-modèles',
    ja: 'マルチモデルプロンプトテストワークフロー',
    zh: '多模型提示词测试工作流',
    pt: 'Fluxos de teste de prompts multi-modelo',
    ar: 'سير عمل اختبار التوجيهات متعددة النماذج',
    ko: '다중 모델 프롬프트 테스트 워크플로',
  },
  'prompt-library-management-for-teams': {
    en: 'Prompt Library Management for Teams',
    de: 'Prompt-Bibliotheksverwaltung für Teams',
    fr: 'Gestion de bibliothèque de prompts pour équipes',
    ja: 'チーム向けプロンプトライブラリ管理',
    zh: '团队提示词库管理',
    pt: 'Gerenciamento de biblioteca de prompts para equipes',
    ar: 'إدارة مكتبة التوجيهات للفرق',
    ko: '팀을 위한 프롬프트 라이브러리 관리',
  },
  'prompts-to-repeatable-workflows': {
    en: 'From Prompts to Repeatable Workflows',
    de: 'Von Prompts zu wiederholbaren Prozessen',
    fr: 'Des prompts aux processus reproductibles',
    ja: 'プロンプトから反復可能なワークフローへ',
    zh: '从提示词到可重复工作流程',
    pt: 'De prompts a fluxos de trabalho repetíveis',
    ar: 'من التوجيهات إلى سير العمل القابل للتكرار',
    ko: '프롬프트에서 반복 가능한 워크플로로',
  },
  'prompt-engineering-for-content-teams': {
    en: 'Prompt Engineering for Content Teams',
    de: 'Prompt Engineering für Redaktionsteams',
    fr: 'Prompt Engineering pour les équipes contenu',
    ja: 'コンテンツチーム向けプロンプトエンジニアリング',
    zh: '内容团队的提示词工程',
    pt: 'Prompt Engineering para equipes de conteúdo',
    ar: 'هندسة التوجيهات لفرق المحتوى',
    ko: '콘텐츠 팀을 위한 프롬프트 엔지니어링',
  },
  'prompt-engineering-for-developers-workflow': {
    en: 'Prompt Engineering Workflow for Developers',
    de: 'Prompt-Engineering-Prozesse für Entwickler',
    fr: 'Processus de prompt engineering pour développeurs',
    ja: '開発者向けプロンプトエンジニアリングワークフロー',
    zh: '开发者的提示词工程工作流',
    pt: 'Fluxo de prompt engineering para desenvolvedores',
    ar: 'سير عمل هندسة التوجيهات للمطورين',
    ko: '개발자를 위한 프롬프트 엔지니어링 워크플로',
  },
  'prompt-engineering-for-support-operations': {
    en: 'Prompt Engineering for Support Operations',
    de: 'Prompt Engineering für den Support-Betrieb',
    fr: 'Prompt Engineering pour les opérations de support',
    ja: 'サポートオペレーション向けプロンプトエンジニアリング',
    zh: '客户支持运营的提示词工程',
    pt: 'Prompt Engineering para operações de suporte',
    ar: 'هندسة التوجيهات لعمليات الدعم',
    ko: '지원 운영을 위한 프롬프트 엔지니어링',
  },
  'prompt-framework-selection-for-teams': {
    en: 'How to Choose the Right Prompt Framework for Your Team',
    de: 'Das richtige Prompt-Framework für Ihr Team auswählen',
    fr: 'Comment choisir le bon framework de prompts pour votre équipe',
    ja: 'チームに最適なプロンプトフレームワークの選び方',
    zh: '如何为团队选择合适的提示词框架',
    pt: 'Como escolher o framework de prompts certo para a sua equipe',
    ar: 'كيف تختار إطار التوجيه المناسب لفريقك',
    ko: '팀에 적합한 프롬프트 프레임워크 선택 방법',
  },
  'prompts-for-reliable-structured-data': {
    en: 'Prompts for Reliable Structured Data Extraction',
    de: 'Prompts für zuverlässige strukturierte Datenextraktion',
    fr: "Prompts pour l'extraction fiable de données structurées",
    ja: '信頼性の高い構造化データ抽出のためのプロンプト',
    zh: '可靠结构化数据提取的提示词',
    pt: 'Prompts para extração confiável de dados estruturados',
    ar: 'توجيهات استخراج البيانات المنظمة الموثوقة',
    ko: '신뢰할 수 있는 구조화된 데이터 추출을 위한 프롬프트',
  },
}

const HUB_FAQ_HEADER: Record<string, string> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
  pt: 'Perguntas frequentes',
  ar: 'الأسئلة الشائعة',
  ko: '자주 묻는 질문',
}

const HUB_FAQ_DATA: Record<string, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of structuring requests to AI models to get better, more consistent outputs. It involves using frameworks, formatting, examples, and constraints to guide model behavior — turning vague AI responses into accurate, expert-quality outputs.' },
    { q: 'What are the most important prompt engineering techniques?', a: 'The highest-impact techniques are chain-of-thought prompting (step-by-step reasoning that improves accuracy on complex problems), few-shot prompting (providing 2–5 examples to teach the model your desired format), and RAG (grounding outputs in external data to prevent hallucinations). These three techniques cover the majority of production prompt engineering use cases.' },
    { q: 'How does temperature affect AI output?', a: 'Temperature controls randomness in AI responses. Lower values (0.0–0.5) produce deterministic, factual outputs best for structured tasks like data extraction or code. Higher values (0.7–1.0) produce creative, varied responses for writing or brainstorming. Most production use cases work best at 0.3–0.5.' },
    { q: 'What prompt frameworks should I learn first?', a: 'Start with CO-STAR (Context, Objective, Style, Tone, Audience, Response) for general-purpose prompting, and CRAFT for creative and analytical tasks. These two frameworks cover 80% of common prompt engineering scenarios. Learn RTF (Role, Task, Format) as a quick shorthand for simple prompts.' },
    { q: 'Do I need to know coding to do prompt engineering?', a: 'No — basic prompt engineering requires no coding. Advanced use cases like automated testing pipelines, CI/CD gates, and structured output extraction do benefit from Python familiarity. Start with the conceptual frameworks and techniques; learn the engineering layer when your use case requires it.' },
    { q: 'Is prompt engineering still relevant in 2026?', a: 'Yes — despite improvements in model reasoning, prompt engineering remains essential. Models still produce significantly better outputs with structured inputs. Chain-of-thought prompting improves complex reasoning accuracy by 30–40% in benchmarks. As models improve, prompt engineering shifts from correcting weaknesses to unlocking capabilities.' },
    { q: "What's the difference between prompt engineering and fine-tuning?", a: "Prompt engineering shapes model behavior through input design without changing model weights — it's fast (minutes) and model-agnostic. Fine-tuning trains a model on new data to change its baseline behavior — it takes hours, requires datasets, and produces a specialized model. Use prompt engineering first; fine-tune only when prompts consistently can't solve the task." },
    { q: 'What tools do prompt engineers use?', a: 'The core stack: a prompt IDE (Cursor or VS Code with Continue.dev), a testing framework (Braintrust or Promptfoo for evaluation and CI/CD), a version control system (PromptHub or Git), and a multi-model testing platform (PromptQuorum to compare outputs across GPT-4o, Claude, and Gemini simultaneously). Advanced teams add Vellum for production traffic management.' },
    { q: 'How many AI models should I test my prompts on?', a: 'At minimum, test on two models from different providers — for example GPT-4o and Claude 4.6 Sonnet. Production prompts should be tested on three or more. Use PromptQuorum to dispatch to 25+ models in one run and compare outputs, pass rates, and latency side-by-side.' },
    { q: 'What is the difference between prompt engineering and prompt management?', a: 'Prompt engineering is designing individual prompts — choosing the right role, context, format, and examples. Prompt management is the operational layer: version control, team collaboration, testing pipelines, deployment workflows, and audit trails. Small teams start with engineering; growing teams add management.' },
  ],
  de: [
    { q: 'Was ist Prompt Engineering?', a: 'Prompt Engineering ist die Praxis, Anfragen an KI-Modelle so zu strukturieren, dass bessere und konsistentere Ausgaben erzielt werden. Es umfasst den Einsatz von Frameworks, Formatierungen, Beispielen und Einschränkungen zur Steuerung des Modellverhaltens.' },
    { q: 'Was sind die wichtigsten Prompt-Engineering-Techniken?', a: 'Die wirkungsvollsten Techniken sind Chain-of-Thought-Prompting (schrittweises Denken für komplexe Probleme), Few-Shot-Prompting (2–5 Beispiele zum Lehren des gewünschten Formats) und RAG (Verankerung in externen Daten zur Vermeidung von Halluzinationen).' },
    { q: 'Wie beeinflusst die Temperatur die KI-Ausgabe?', a: 'Die Temperatur steuert die Zufälligkeit in KI-Antworten. Niedrigere Werte (0,0–0,5) erzeugen deterministische, sachliche Ausgaben für strukturierte Aufgaben. Höhere Werte (0,7–1,0) erzeugen kreative Antworten. Die meisten Produktionsanwendungsfälle funktionieren am besten bei 0,3–0,5.' },
    { q: 'Welche Prompt-Frameworks sollte ich zuerst lernen?', a: 'Beginnen Sie mit CO-STAR für allgemeines Prompting und CRAFT für kreative und analytische Aufgaben. Diese zwei Frameworks decken 80% der häufigen Prompt-Engineering-Szenarien ab. Lernen Sie RTF als schnelle Kurzform für einfache Prompts.' },
    { q: 'Brauche ich Programmierkenntnisse für Prompt Engineering?', a: 'Nein — grundlegendes Prompt Engineering erfordert keine Programmierkenntnisse. Erweiterte Anwendungsfälle wie automatisierte Testpipelines und CI/CD-Kontrollen profitieren von Python-Kenntnissen. Beginnen Sie mit den konzeptionellen Frameworks.' },
    { q: 'Ist Prompt Engineering im Jahr 2026 noch relevant?', a: 'Ja — trotz verbesserter Modelllogik bleibt Prompt Engineering unverzichtbar. Chain-of-Thought-Prompting verbessert die Genauigkeit bei komplexem Denken um 30–40%. Mit besseren Modellen verschiebt sich Prompt Engineering vom Korrigieren von Schwächen hin zum Freischalten von Fähigkeiten.' },
    { q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?', a: 'Prompt Engineering gestaltet das Modellverhalten durch Eingabedesign ohne Modellgewichte zu ändern — schnell und modell-agnostisch. Fine-Tuning trainiert ein Modell auf neuen Daten und erfordert Datensätze und Stunden. Nutzen Sie zuerst Prompt Engineering.' },
    { q: 'Welche Tools verwenden Prompt Engineers?', a: 'Der Kern-Stack: eine Prompt-IDE (Cursor oder VS Code mit Continue.dev), ein Testframework (Braintrust oder Promptfoo), ein Versionskontrollsystem (PromptHub oder Git) und PromptQuorum für Multi-Modell-Vergleiche. Fortgeschrittene Teams fügen Vellum für Produktions-Traffic hinzu.' },
    { q: 'Muss ich bei der Nutzung von KI-Tools die DSGVO beachten?', a: 'Ja — bei der Verarbeitung personenbezogener Daten über KI-APIs gilt DSGVO Artikel 28 (Auftragsverarbeitung). Lokale Inferenz oder DSGVO-konforme EU-Anbieter reduzieren das Datenschutzrisiko erheblich. Für den deutschen Mittelstand empfehlen die BSI-Grundschutz-Kataloge klare Richtlinien zur KI-Datenverarbeitung.' },
    { q: 'Ist Prompt Engineering für den deutschen Mittelstand geeignet?', a: 'Ja — Mittelstandsunternehmen nutzen Prompt Engineering besonders für Kundenservice-Automatisierung, Dokumentenverarbeitung und interne Wissensverwaltung. Standardisierte Frameworks (CO-STAR, CRAFT) kombiniert mit EU-gehosteten Modellen erfüllen typische BSI-Sicherheitsanforderungen ohne Investitionen in Fine-Tuning.' },
  ],
  fr: [
    { q: "Qu'est-ce que le prompt engineering ?", a: "Le prompt engineering est la pratique qui consiste à structurer les requêtes adressées aux modèles d'IA pour obtenir des sorties meilleures et plus cohérentes. Il implique l'utilisation de frameworks, de formats, d'exemples et de contraintes pour guider le comportement du modèle." },
    { q: 'Quelles sont les techniques de prompt engineering les plus importantes ?', a: "Les techniques à plus fort impact sont : le chain-of-thought prompting (raisonnement étape par étape), le few-shot prompting (2 à 5 exemples pour enseigner le format souhaité) et le RAG (ancrage dans des données externes pour éviter les hallucinations)." },
    { q: "Comment la température affecte-t-elle la sortie IA ?", a: "La température contrôle le caractère aléatoire des réponses IA. Les valeurs basses (0,0–0,5) produisent des sorties déterministes pour les tâches structurées. Les valeurs élevées (0,7–1,0) produisent des réponses créatives. La plupart des cas d'usage en production fonctionnent mieux à 0,3–0,5." },
    { q: 'Quels frameworks de prompts apprendre en premier ?', a: "Commencez par CO-STAR pour le prompting général et CRAFT pour les tâches créatives et analytiques. Ces deux frameworks couvrent 80% des scénarios courants. Apprenez RTF comme raccourci rapide pour les prompts simples." },
    { q: 'Faut-il savoir coder pour faire du prompt engineering ?', a: "Non — le prompt engineering de base ne nécessite pas de compétences en programmation. Les cas d'usage avancés comme les pipelines de test automatisés bénéficient de la familiarité avec Python. Commencez par les frameworks conceptuels." },
    { q: 'Le prompt engineering est-il toujours pertinent en 2026 ?', a: "Oui — malgré les améliorations du raisonnement des modèles, le prompt engineering reste essentiel. Le chain-of-thought prompting améliore la précision de raisonnement complexe de 30 à 40%. À mesure que les modèles s'améliorent, le prompt engineering passe de la correction des faiblesses au déverrouillage des capacités." },
    { q: "Quelle est la différence entre prompt engineering et fine-tuning ?", a: "Le prompt engineering façonne le comportement du modèle par la conception des entrées sans modifier les poids — rapide et agnostique du modèle. Le fine-tuning entraîne un modèle sur de nouvelles données, nécessitant datasets et heures. Utilisez d'abord le prompt engineering." },
    { q: 'Quels outils les prompt engineers utilisent-ils ?', a: "Le stack central : une IDE (Cursor ou VS Code avec Continue.dev), un framework de test (Braintrust ou Promptfoo), un contrôle de version (PromptHub ou Git) et PromptQuorum pour les comparaisons multi-modèles. Les équipes avancées ajoutent Vellum pour la production." },
  ],
  es: [
    { q: '¿Qué es prompt engineering?', a: 'El prompt engineering es la práctica de estructurar las solicitudes a modelos de IA para obtener resultados mejores y más consistentes. Implica usar marcos de trabajo, formateo, ejemplos y restricciones para guiar el comportamiento del modelo — convirtiendo respuestas vagas de IA en salidas precisas y de calidad profesional.' },
    { q: '¿Cuáles son las técnicas más importantes de prompt engineering?', a: 'Las técnicas con mayor impacto son: chain-of-thought prompting (razonamiento paso a paso que mejora la precisión en problemas complejos), few-shot prompting (proporcionar 2–5 ejemplos para enseñar al modelo el formato deseado) y RAG (anclar las salidas en datos externos para prevenir alucinaciones). Estas tres técnicas cubren la mayoría de casos de uso de prompt engineering en producción.' },
    { q: '¿Cómo afecta la temperatura a la salida de IA?', a: 'La temperatura controla la aleatoriedad en las respuestas de IA. Los valores bajos (0,0–0,5) producen salidas determinísticas y basadas en hechos, ideales para tareas estructuradas como extracción de datos o código. Los valores altos (0,7–1,0) producen respuestas creativas y variadas para escritura o lluvia de ideas. La mayoría de casos de uso en producción funcionan mejor a 0,3–0,5.' },
    { q: '¿Qué marcos de trabajo de prompts debería aprender primero?', a: 'Empieza con CO-STAR (Context, Objective, Style, Tone, Audience, Response) para prompt engineering general, y CRAFT para tareas creativas y analíticas. Estos dos marcos cubren el 80% de escenarios comunes de prompt engineering. Aprende RTF (Role, Task, Format) como atajo rápido para prompts simples.' },
    { q: '¿Necesito saber programación para hacer prompt engineering?', a: 'No — el prompt engineering básico no requiere programación. Los casos de uso avanzados como tuberías de pruebas automatizadas, compuertas CI/CD y extracción de salida estructurada se benefician de familiaridad con Python. Comienza con los marcos conceptuales y técnicas; aprende la capa de ingeniería cuando tu caso de uso lo requiera.' },
    { q: '¿Sigue siendo relevante el prompt engineering en 2026?', a: 'Sí — a pesar de las mejoras en el razonamiento de modelos, el prompt engineering sigue siendo esencial. Los modelos producen salidas significativamente mejores con entradas estructuradas. El chain-of-thought prompting mejora la precisión de razonamiento complejo un 30–40% en benchmarks. Conforme los modelos mejoran, el prompt engineering pasa de corregir debilidades a desbloquear capacidades.' },
    { q: '¿Cuál es la diferencia entre prompt engineering y fine-tuning?', a: 'El prompt engineering modela el comportamiento del modelo mediante diseño de entrada sin cambiar los pesos — es rápido (minutos) e independiente del modelo. El fine-tuning entrena un modelo en nuevos datos para cambiar su comportamiento base — toma horas, requiere conjuntos de datos y produce un modelo especializado. Usa prompt engineering primero; solo aplica fine-tuning cuando los prompts consistentemente no pueden resolver la tarea.' },
    { q: '¿Qué herramientas usan los prompt engineers?', a: 'El stack central: un IDE de prompts (Cursor o VS Code con Continue.dev), un marco de pruebas (Braintrust o Promptfoo para evaluación y CI/CD), un sistema de control de versiones (PromptHub o Git) y una plataforma de pruebas multi-modelo (PromptQuorum para comparar salidas de GPT-4o, Claude y Gemini simultáneamente). Los equipos avanzados añaden Vellum para gestión de tráfico en producción.' },
    { q: '¿En cuántos modelos de IA debería probar mis prompts?', a: 'Como mínimo, prueba en dos modelos de diferentes proveedores — por ejemplo GPT-4o y Claude 4.6 Sonnet. Los prompts en producción deben probarse en tres o más. Usa PromptQuorum para enviar a 25+ modelos en una sola ejecución y comparar salidas, tasas de éxito y latencia lado a lado.' },
    { q: '¿Cuál es la diferencia entre prompt engineering y prompt management?', a: 'El prompt engineering consiste en diseñar prompts individuales — elegir el rol, contexto, formato y ejemplos correctos. El prompt management es la capa operativa: control de versiones, colaboración de equipo, tuberías de pruebas, flujos de despliegue y registros de auditoría. Los equipos pequeños comienzan con ingeniería; los equipos en crecimiento añaden gestión.' },
  ],
  pt: [
    { q: 'O que é prompt engineering?', a: 'Prompt engineering é a prática de estruturar as solicitações a modelos de IA para obter saídas melhores e mais consistentes. Envolve usar frameworks, formatação, exemplos e restrições para guiar o comportamento do modelo — transformando respostas vagas de IA em saídas precisas e com qualidade de especialista.' },
    { q: 'Quais são as técnicas mais importantes de prompt engineering?', a: 'As técnicas de maior impacto são: chain-of-thought prompting (raciocínio passo a passo que melhora a precisão em problemas complexos), few-shot prompting (fornecer de 2 a 5 exemplos para ensinar ao modelo o formato desejado) e RAG (ancorar as saídas em dados externos para evitar alucinações). Essas três técnicas cobrem a maioria dos casos de uso de prompt engineering em produção.' },
    { q: 'Como a temperatura afeta a saída da IA?', a: 'A temperatura controla a aleatoriedade nas respostas da IA. Valores baixos (0.0–0.5) produzem saídas determinísticas e factuais, ideais para tarefas estruturadas como extração de dados ou código. Valores altos (0.7–1.0) produzem respostas criativas e variadas, para escrita ou brainstorming. A maioria dos casos de uso em produção funciona melhor entre 0.3 e 0.5.' },
    { q: 'Quais frameworks de prompts eu devo aprender primeiro?', a: 'Comece com o CO-STAR (Context, Objective, Style, Tone, Audience, Response) para prompt engineering de uso geral, e o CRAFT para tarefas criativas e analíticas. Esses dois frameworks cobrem 80% dos cenários comuns de prompt engineering. Aprenda o RTF (Role, Task, Format) como um atalho rápido para prompts simples.' },
    { q: 'Preciso saber programar para fazer prompt engineering?', a: 'Não — o prompt engineering básico não exige programação. Casos de uso avançados, como pipelines de testes automatizados, gates de CI/CD e extração de saída estruturada, se beneficiam de familiaridade com Python. Comece pelos frameworks e técnicas conceituais; aprenda a camada de engenharia quando o seu caso de uso exigir.' },
    { q: 'O prompt engineering ainda é relevante em 2026?', a: 'Sim — apesar das melhorias no raciocínio dos modelos, o prompt engineering continua essencial. Os modelos ainda produzem saídas significativamente melhores com entradas estruturadas. O chain-of-thought prompting melhora a precisão de raciocínio complexo em 30–40% em benchmarks. À medida que os modelos melhoram, o prompt engineering passa de corrigir fraquezas a desbloquear capacidades.' },
    { q: 'Qual é a diferença entre prompt engineering e fine-tuning?', a: 'O prompt engineering molda o comportamento do modelo por meio do design da entrada, sem alterar os pesos do modelo — é rápido (minutos) e independente do modelo. O fine-tuning treina um modelo com novos dados para mudar seu comportamento base — leva horas, exige datasets e produz um modelo especializado. Use prompt engineering primeiro; faça fine-tuning apenas quando os prompts consistentemente não conseguirem resolver a tarefa.' },
    { q: 'Quais ferramentas os prompt engineers usam?', a: 'O stack central: um IDE de prompts (Cursor ou VS Code com Continue.dev), um framework de testes (Braintrust ou Promptfoo para avaliação e CI/CD), um sistema de controle de versão (PromptHub ou Git) e uma plataforma de testes multi-modelo (PromptQuorum para comparar saídas de GPT-4o, Claude e Gemini simultaneamente). Equipes avançadas adicionam o Vellum para gerenciamento de tráfego em produção.' },
    { q: 'Em quantos modelos de IA eu devo testar meus prompts?', a: 'No mínimo, teste em dois modelos de provedores diferentes — por exemplo, GPT-4o e Claude 4.6 Sonnet. Prompts em produção devem ser testados em três ou mais. Use o PromptQuorum para despachar para mais de 25 modelos em uma única execução e comparar saídas, taxas de aprovação e latência lado a lado.' },
    { q: 'Qual é a diferença entre prompt engineering e prompt management?', a: 'O prompt engineering consiste em projetar prompts individuais — escolher o papel, contexto, formato e exemplos corretos. O prompt management é a camada operacional: controle de versão, colaboração em equipe, pipelines de testes, fluxos de deploy e trilhas de auditoria. Equipes pequenas começam com engenharia; equipes em crescimento adicionam gerenciamento.' },
  ],
  ja: [
    { q: 'プロンプトエンジニアリングとは何ですか？', a: 'プロンプトエンジニアリングとは、AIモデルへのリクエストを構造化して、より優れた一貫性のある出力を得るための実践です。フレームワーク、フォーマット、例、制約を使用してモデルの動作を誘導します。' },
    { q: '最も重要なプロンプトエンジニアリングテクニックは？', a: '最も効果的なテクニックは、チェーン・オブ・ソート・プロンプティング（複雑な問題の精度向上）、フューショットプロンプティング（2〜5の例でフォーマットを教える）、RAG（外部データでハルシネーションを防ぐ）の3つです。' },
    { q: '温度はAI出力にどのような影響を与えますか？', a: '温度はAIの応答のランダム性を制御します。低い値（0.0〜0.5）は決定論的で事実に基づく出力を生成します。高い値（0.7〜1.0）はクリエイティブな応答を生成します。多くの本番ユースケースは0.3〜0.5が最適です。' },
    { q: '最初に学ぶべきプロンプトフレームワークは？', a: '汎用プロンプティングにはCO-STAR、クリエイティブ・分析タスクにはCRAFTから始めてください。この2つのフレームワークで一般的なプロンプトエンジニアリングシナリオの80%をカバーできます。' },
    { q: 'プロンプトエンジニアリングにコーディング知識は必要ですか？', a: '不要です — 基本的なプロンプトエンジニアリングにプログラミングスキルは必要ありません。自動テストパイプラインなどの高度なユースケースではPythonの知識が役立ちます。まず概念的なフレームワークから始めてください。' },
    { q: 'プロンプトエンジニアリングは2026年も重要ですか？', a: 'はい — モデルの推論能力が向上しても依然不可欠です。チェーン・オブ・ソート・プロンプティングはベンチマークで複雑な推論精度を30〜40%向上させます。モデルが改善するにつれて、弱点の修正から能力の解放へとシフトしています。' },
    { q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？', a: 'プロンプトエンジニアリングはモデルの重みを変えずに入力設計でモデルの動作を形成します（分単位・モデル非依存）。ファインチューニングは新しいデータでモデルを訓練し、データセットと時間が必要です。' },
    { q: 'プロンプトエンジニアはどんなツールを使いますか？', a: 'コアスタック：プロンプトIDE（CursorまたはContinue.dev付きVS Code）、テストフレームワーク（BraintrustまたはPromptfoo）、バージョン管理（PromptHubまたはGit）、マルチモデルテストプラットフォーム（PromptQuorum）。' },
    { q: 'METIのAIガバナンスガイドラインはプロンプトエンジニアリングにどう関係しますか？', a: '経済産業省（METI）の2024年AIガバナンスガイドラインでは、AIシステムの決定を追跡可能にすることを推奨しています。プロンプトのバージョン管理と承認ワークフローを導入することで、この要件を満たしつつ、変更履歴を監査証跡として保持できます。' },
    { q: 'エンタープライズ環境でプロンプトエンジニアリングを安全に運用するには？', a: 'CI/CDゲートによる自動テスト、セキュリティレビュアーによる承認フロー、インジェクション脆弱性スキャンの3層防御が推奨されます。日本の規制業界（金融・医療・法律）では、本番デプロイ前に必ずコンプライアンスレビューを実施しています。' },
  ],
  zh: [
    { q: '什么是提示词工程？', a: '提示词工程是通过结构化对AI模型的请求来获得更好、更一致输出的实践。它涉及使用框架、格式、示例和约束来指导模型行为，将模糊的AI响应转化为准确的专家级输出。' },
    { q: '最重要的提示词工程技术有哪些？', a: '最有效的技术是：思维链提示（逐步推理提高复杂问题精度）、少样本提示（提供2-5个示例教模型所需格式）以及RAG（基于外部数据防止幻觉）。这三种技术覆盖了大多数生产提示词工程用例。' },
    { q: '温度如何影响AI输出？', a: '温度控制AI响应的随机性。较低的值（0.0–0.5）产生确定性、基于事实的输出，适合结构化任务。较高的值（0.7–1.0）产生创意性响应，适合写作或头脑风暴。大多数生产用例在0.3–0.5效果最佳。' },
    { q: '应该先学哪个提示词框架？', a: '先学CO-STAR（通用提示词工程）和CRAFT（创意和分析任务）。这两个框架覆盖了80%的常见提示词工程场景。学习RTF作为简单提示词的快速简写。' },
    { q: '提示词工程需要编程知识吗？', a: '不需要——基本的提示词工程不需要编程技能。自动化测试流水线等高级用例受益于Python熟悉度。先从概念性框架和技术开始。' },
    { q: '2026年提示词工程还重要吗？', a: '是的——尽管模型推理能力不断提升，提示词工程依然必不可少。思维链提示在基准测试中将复杂推理精度提高30-40%。随着模型改进，提示词工程从纠正弱点转向释放能力。' },
    { q: '提示词工程和微调有什么区别？', a: '提示词工程通过输入设计塑造模型行为而不改变模型权重——速度快（分钟级）且与模型无关。微调在新数据上训练模型，需要数据集和数小时的时间。先使用提示词工程，仅在必要时才进行微调。' },
    { q: '提示词工程师使用哪些工具？', a: '核心工具栈：提示词IDE（Cursor或带Continue.dev的VS Code）、测试框架（Braintrust或Promptfoo）、版本控制（PromptHub或Git）以及多模型测试平台（PromptQuorum用于同时比较GPT-4o、Claude和Gemini）。' },
    { q: '使用AI工具需要遵守中国数据安全法吗？', a: '是的——中国《数据安全法》（2021年）和《个人信息保护法》（PIPL）要求中国用户的数据在境内存储和处理。对于处理敏感数据的企业，本地部署模型或阿里云、腾讯云等国内云服务商的AI接口可满足数据安全合规要求。' },
    { q: '如何为企业级生产环境搭建安全的提示词工程体系？', a: '企业级体系需要三层保障：自动化测试（格式验证、安全扫描、幻觉检测）、人工审核（领域专家 + 安全审查员）以及CI/CD门控（未审批提示词无法合并）。金融、医疗、法律行业还需额外的合规审查，建议使用Git进行版本控制并保留完整审计记录。' },
  ],
  ar: [
    { q: 'ما هي هندسة التوجيهات؟', a: 'هندسة التوجيهات هي ممارسة تنظيم الطلبات الموجهة لنماذج الذكاء الاصطناعي للحصول على مخرجات أفضل وأكثر اتساقاً. تشمل استخدام الأطر والتنسيق والأمثلة والقيود لتوجيه سلوك النموذج — وتحويل استجابات الذكاء الاصطناعي الغامضة إلى مخرجات دقيقة بجودة خبراء.' },
    { q: 'ما أهم تقنيات هندسة التوجيهات؟', a: 'التقنيات الأعلى تأثيراً هي: التوجيه بسلسلة التفكير (استدلال خطوة بخطوة يُحسّن الدقة في المسائل المعقدة)، والتوجيه بأمثلة قليلة (تقديم 2–5 أمثلة لتعليم النموذج الصيغة المطلوبة)، وRAG (ربط المخرجات ببيانات خارجية لمنع الهلوسة). هذه التقنيات الثلاث تغطي معظم حالات استخدام هندسة التوجيهات في الإنتاج.' },
    { q: 'كيف تؤثر درجة الحرارة على مخرجات الذكاء الاصطناعي؟', a: 'تتحكم درجة الحرارة في عشوائية استجابات الذكاء الاصطناعي. القيم المنخفضة (0.0–0.5) تُنتج مخرجات حتمية وواقعية مناسبة للمهام المنظمة كاستخراج البيانات أو كتابة الكود. القيم العالية (0.7–1.0) تُنتج استجابات إبداعية ومتنوعة للكتابة أو العصف الذهني. تعمل معظم حالات الاستخدام الإنتاجي بشكل أفضل عند 0.3–0.5.' },
    { q: 'أي أطر التوجيه يجب أن أتعلم أولاً؟', a: 'ابدأ بـ CO-STAR (السياق والهدف والأسلوب والنبرة والجمهور والاستجابة) للتوجيه العام، وCRAFT للمهام الإبداعية والتحليلية. يغطي هذان الإطاران 80% من سيناريوهات هندسة التوجيهات الشائعة. تعلّم RTF (الدور والمهمة والصيغة) اختصاراً سريعاً للتوجيهات البسيطة.' },
    { q: 'هل أحتاج إلى معرفة البرمجة لممارسة هندسة التوجيهات؟', a: 'لا — هندسة التوجيهات الأساسية لا تتطلب برمجة. حالات الاستخدام المتقدمة كخطوط أنابيب الاختبار الآلي وبوابات CI/CD واستخراج المخرجات المنظمة تستفيد من الإلمام بـ Python. ابدأ بالأطر المفاهيمية والتقنيات؛ وتعلّم طبقة الهندسة حين يستدعي ذلك حالتُك.' },
    { q: 'هل هندسة التوجيهات لا تزال ذات صلة في عام 2026؟', a: 'نعم — رغم التحسينات في استدلال النماذج، تظل هندسة التوجيهات ضرورية. لا تزال النماذج تُنتج مخرجات أفضل بكثير مع مُدخلات منظمة. يُحسّن التوجيه بسلسلة التفكير دقة الاستدلال المعقد بنسبة 30–40% في المعايير المرجعية. مع تطور النماذج، يتحول التركيز من تصحيح نقاط الضعف إلى إطلاق الإمكانات.' },
    { q: 'ما الفرق بين هندسة التوجيهات والضبط الدقيق؟', a: 'تُشكّل هندسة التوجيهات سلوك النموذج من خلال تصميم المُدخلات دون تغيير أوزانه — سريعة (دقائق) وغير مرتبطة بنموذج بعينه. أما الضبط الدقيق فيُدرّب النموذج على بيانات جديدة لتغيير سلوكه الأساسي — يستغرق ساعات ويتطلب مجموعات بيانات وينتج نموذجاً متخصصاً. استخدم هندسة التوجيهات أولاً؛ ولجأ إلى الضبط الدقيق فقط حين تعجز التوجيهات باستمرار عن حل المهمة.' },
    { q: 'ما الأدوات التي يستخدمها مهندسو التوجيهات؟', a: 'المجموعة الأساسية: بيئة توجيهات متكاملة (Cursor أو VS Code مع Continue.dev)، وإطار اختبار (Braintrust أو Promptfoo للتقييم وCI/CD)، ونظام تحكم في الإصدار (PromptHub أو Git)، ومنصة اختبار متعددة النماذج (PromptQuorum لمقارنة مخرجات GPT-4o وClaude وGemini في آنٍ واحد). تُضيف الفرق المتقدمة Vellum لإدارة حركة مرور الإنتاج.' },
    { q: 'على كم نموذج ذكاء اصطناعي يجب أن أختبر توجيهاتي؟', a: 'كحد أدنى، اختبر على نموذجين من مزودَين مختلفَين — مثل GPT-4o وClaude 4.6 Sonnet. ينبغي اختبار التوجيهات الإنتاجية على ثلاثة نماذج أو أكثر. استخدم PromptQuorum للإرسال إلى أكثر من 25 نموذجاً في تشغيل واحد ومقارنة المخرجات ومعدلات النجاح والكمون جنباً إلى جنب.' },
    { q: 'ما الفرق بين هندسة التوجيهات وإدارة التوجيهات؟', a: 'هندسة التوجيهات تعني تصميم توجيهات فردية — اختيار الدور والسياق والصيغة والأمثلة المناسبة. أما إدارة التوجيهات فهي الطبقة التشغيلية: التحكم في الإصدار وتعاون الفريق وخطوط أنابيب الاختبار وسير عمل النشر وسجلات التدقيق. تبدأ الفرق الصغيرة بالهندسة؛ وتُضيف الفرق المتنامية الإدارة.' },
  ],
  ko: [
    { q: '프롬프트 엔지니어링이란 무엇입니까?', a: '프롬프트 엔지니어링은 AI 모델에 대한 요청을 구조화하여 더 나은, 더 일관된 출력을 얻는 실천입니다. 모델 동작을 안내하기 위해 프레임워크, 형식, 예시 및 제약 조건을 사용하여 모호한 AI 응답을 정확한 전문가 수준의 출력으로 변환합니다.' },
    { q: '가장 중요한 프롬프트 엔지니어링 기법은 무엇입니까?', a: '가장 높은 영향력을 가진 기법은 연쇄 사고 프롬프팅(복잡한 문제의 정확도를 향상시키는 단계별 추론), 퓨샷 프롬프팅(원하는 형식을 가르치기 위해 2~5개의 예시 제공), RAG(환각을 방지하기 위해 외부 데이터에 출력 근거 두기)입니다. 이 세 가지 기법이 프로덕션 프롬프트 엔지니어링 사용 사례의 대부분을 다룹니다.' },
    { q: '온도가 AI 출력에 어떤 영향을 미칩니까?', a: '온도는 AI 응답의 랜덤성을 제어합니다. 낮은 값(0.0~0.5)은 데이터 추출이나 코드와 같은 구조화된 작업에 최적인 결정론적이고 사실에 기반한 출력을 생성합니다. 높은 값(0.7~1.0)은 글쓰기나 브레인스토밍에 창의적이고 다양한 응답을 생성합니다. 대부분의 프로덕션 사용 사례는 0.3~0.5에서 가장 잘 작동합니다.' },
    { q: '먼저 어떤 프롬프트 프레임워크를 배워야 합니까?', a: '일반적인 프롬프팅에는 CO-STAR(Context, Objective, Style, Tone, Audience, Response)로, 창의적 및 분석 작업에는 CRAFT로 시작하십시오. 이 두 프레임워크가 일반적인 프롬프트 엔지니어링 시나리오의 80%를 다룹니다. 간단한 프롬프트에 빠른 약식으로 RTF(Role, Task, Format)를 배우십시오.' },
    { q: '프롬프트 엔지니어링을 하려면 코딩을 알아야 합니까?', a: '아니오 — 기본적인 프롬프트 엔지니어링에는 코딩이 필요하지 않습니다. 자동화된 테스트 파이프라인, CI/CD 게이트 및 구조화된 출력 추출과 같은 고급 사용 사례는 Python 친숙도의 혜택을 받습니다. 개념적 프레임워크와 기법부터 시작하십시오.' },
    { q: '프롬프트 엔지니어링은 2026년에도 여전히 관련성이 있습니까?', a: '예 — 모델 추론의 개선에도 불구하고 프롬프트 엔지니어링은 여전히 필수적입니다. 연쇄 사고 프롬프팅은 벤치마크에서 복잡한 추론 정확도를 30~40% 향상시킵니다. 모델이 개선됨에 따라 프롬프트 엔지니어링은 약점 교정에서 기능 해제로 전환됩니다.' },
    { q: '프롬프트 엔지니어링과 파인튜닝의 차이는 무엇입니까?', a: '프롬프트 엔지니어링은 모델 가중치를 변경하지 않고 입력 설계를 통해 모델 동작을 형성합니다 — 빠르고(분 단위) 모델에 독립적입니다. 파인튜닝은 기준 동작을 변경하기 위해 새 데이터로 모델을 학습시킵니다 — 시간, 데이터셋이 필요하고 특화된 모델을 생성합니다. 먼저 프롬프트 엔지니어링을 사용하십시오.' },
    { q: '프롬프트 엔지니어는 어떤 도구를 사용합니까?', a: '핵심 스택: 프롬프트 IDE(Cursor 또는 Continue.dev가 있는 VS Code), 테스트 프레임워크(Braintrust 또는 Promptfoo), 버전 관리 시스템(PromptHub 또는 Git), 다중 모델 테스트 플랫폼(GPT-4o, Claude, Gemini를 동시에 비교하기 위한 PromptQuorum). 고급 팀은 프로덕션 트래픽 관리를 위해 Vellum을 추가합니다.' },
    { q: '몇 개의 AI 모델에서 프롬프트를 테스트해야 합니까?', a: '최소한 GPT-4o와 Claude 4.6 Sonnet과 같이 서로 다른 제공업체의 두 모델에서 테스트하십시오. 프로덕션 프롬프트는 세 개 이상에서 테스트해야 합니다. PromptQuorum을 사용하여 한 번의 실행으로 25개 이상의 모델에 전송하고 출력, 합격률, 지연을 나란히 비교하십시오.' },
    { q: '프롬프트 엔지니어링과 프롬프트 관리의 차이는 무엇입니까?', a: '프롬프트 엔지니어링은 개별 프롬프트 설계 — 올바른 역할, 문맥, 형식 및 예시 선택입니다. 프롬프트 관리는 운영 레이어입니다: 버전 관리, 팀 협업, 테스트 파이프라인, 배포 워크플로 및 감사 추적. 소규모 팀은 엔지니어링으로 시작하고 성장하는 팀은 관리를 추가합니다.' },
  ],
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  policy:       { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-400' },
  'tools-platforms': { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', dot: 'bg-cyan-400' },
  'evaluation-reliability': { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'team-governance': { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'workflows-automation': { badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-400' },
}

// Precomputed slug → theme ID map (derived from themes data)
const SLUG_TO_THEME_ID: Record<string, string> = Object.fromEntries(
  themes.flatMap(theme => {
    const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
    return keys.map(key => [key, theme.id])
  })
)

// Get translated article title — checks titles map, then fallback titles, then formats slug
function getArticleTitle(articleKey: string, lang: Language, titlesMap: Record<string, Partial<Record<Language, string>>>): string {
  const contentKey = PE_SLUG_TO_KEY[articleKey]
  if (contentKey && titlesMap[contentKey]?.[lang]) {
    return titlesMap[contentKey][lang]!
  }
  if (contentKey && titlesMap[contentKey]?.en) {
    return titlesMap[contentKey].en!
  }
  // Use fallback titles for articles without content yet
  if (FALLBACK_TITLES[articleKey]?.[lang]) {
    return FALLBACK_TITLES[articleKey][lang]
  }
  if (FALLBACK_TITLES[articleKey]?.en) {
    return FALLBACK_TITLES[articleKey].en
  }
  return articleKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function ArticleCard({ articleKey, dot, lang, titlesMap }: { articleKey: string; dot: string; lang: Language; titlesMap: Record<string, Partial<Record<Language, string>>> }) {
  const title = getArticleTitle(articleKey, lang, titlesMap)
  const href = navHref(`/prompt-engineering/${articleKey}`, lang)

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 h-full hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors">{title}</span>
    </Link>
  )
}

function PromptEngineeringHubContent({ initialLang, titlesMap, articleLevels, datesMap }: { initialLang?: import("@/hooks/useLang").Lang; titlesMap: Record<string, Partial<Record<Language, string>>>; articleLevels: Record<string, string>; datesMap?: Record<string, { publishDate?: string; dateModified?: string }> }) {
  const lang = useLang(initialLang)
  const { signal, setLevel, clearLevel } = useHubSignals(SLUG_TO_THEME_ID)

  const highlights = useMemo<Record<string, ArticleHighlight>>(() => {
    const map: Record<string, ArticleHighlight> = {}
    for (const theme of themes) {
      const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
      for (const key of keys) {
        const contentKey = PE_SLUG_TO_KEY[key]
        const level = contentKey ? (articleLevels[contentKey] ?? '') : ''
        const themeId = SLUG_TO_THEME_ID[key] ?? ''
        map[key] = getArticleHighlight(signal, level, themeId, [])
      }
    }
    return map
  }, [signal, articleLevels])

  const recommendations = useMemo<RecommendedArticle[]>(() => {
    const recs: RecommendedArticle[] = []
    for (const theme of themes) {
      const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
      for (const key of keys) {
        if (highlights[key]?.isHighlighted) {
          const themeId = SLUG_TO_THEME_ID[key] ?? ''
          recs.push({
            title: getArticleTitle(key, lang, titlesMap),
            url: navHref(`/prompt-engineering/${key}`, lang),
            theme: THEME_LABELS[themeId]?.[lang] ?? themeId,
            level: '',
          })
        }
      }
    }
    return recs.slice(0, 5)
  }, [highlights, lang, titlesMap])

  const activeLevel = signal.type === 'level' ? signal.level : undefined

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-5">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-lg font-semibold text-text-primary leading-relaxed max-w-3xl mb-4 key-takeaways">
            {HUB_LEAD_ANSWER[lang] ?? HUB_LEAD_ANSWER['en']}
          </p>

          {/* In One Sentence / In Plain Terms */}
          <div className="grid sm:grid-cols-2 gap-4 my-5 max-w-3xl">
            <div className="border-l-2 border-primary/40 pl-4 py-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                {HUB_IN_ONE_SENTENCE_LABEL[lang] ?? HUB_IN_ONE_SENTENCE_LABEL['en']}
              </p>
              <p className="text-sm text-text-secondary">{HUB_IN_ONE_SENTENCE[lang] ?? HUB_IN_ONE_SENTENCE['en']}</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-4 py-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                {HUB_IN_PLAIN_TERMS_LABEL[lang] ?? HUB_IN_PLAIN_TERMS_LABEL['en']}
              </p>
              <p className="text-sm text-text-secondary">{HUB_IN_PLAIN_TERMS[lang] ?? HUB_IN_PLAIN_TERMS['en']}</p>
            </div>
          </div>

          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl hub-hero-desc">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>

          {/* TL;DR */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 my-5 max-w-2xl">
            <p className="text-sm font-semibold text-primary mb-1">TL;DR</p>
            <p className="text-sm text-text-secondary leading-relaxed">{HUB_TLDR[lang] ?? HUB_TLDR['en']}</p>
          </div>

          {/* Stats line */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
            {(HUB_QUICK_FACTS[lang] ?? HUB_QUICK_FACTS['en']).map((fact, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <strong className="text-text-primary font-medium">{fact}</strong>
              </li>
            ))}
          </ul>

          {/* Quick Facts detailed */}
          <div className="mt-6 bg-card border border-primary/15 rounded-xl p-5 max-w-2xl">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {HUB_QUICK_FACTS_HEADER[lang] ?? HUB_QUICK_FACTS_HEADER['en']}
            </p>
            <ul className="space-y-2">
              {(HUB_QUICK_FACTS_DETAILED[lang] ?? HUB_QUICK_FACTS_DETAILED['en']).map((fact, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Level self-selection bar — Mechanism A */}
        <LevelBar activeLevel={activeLevel} onSelect={setLevel} onClear={clearLevel} />

        {/* Theme sections */}
        <div className="space-y-20">
          {themes.map((theme, idx) => {
            const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title
            const colors = THEME_COLORS[theme.id]
            const articleKeys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
            const count = articleKeys.length
            const descLead = THEME_DESCRIPTION_LEADS[theme.id]?.[lang] ?? THEME_DESCRIPTION_LEADS[theme.id]?.['en']
            const desc = THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description
            const callout = THEME_CALLOUTS[theme.id]?.[lang] ?? THEME_CALLOUTS[theme.id]?.['en']

            return (
              <LazySection key={theme.id} eager={idx < 2}>
              <section id={theme.id}>
                {/* Theme header */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-text-primary">{label}</h2>
                    <span className="text-sm text-text-secondary font-normal shrink-0">
                      {count} {count === 1
                        ? (GUIDE_LABEL_SINGULAR[lang] ?? GUIDE_LABEL_SINGULAR['en'])
                        : (GUIDES_LABEL[lang] ?? GUIDES_LABEL['en'])}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {descLead && <strong className="text-text-primary font-semibold">{descLead} </strong>}
                    {desc}
                  </p>
                  {callout && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl">
                      <p className="text-sm font-semibold text-amber-800 mb-1">{callout.icon} {callout.title}</p>
                      <p className="text-sm text-amber-700 leading-relaxed">{callout.text}</p>
                    </div>
                  )}
                </div>

                {/* Flat article grid (most themes) */}
                {theme.articleKeys && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {theme.articleKeys.map((key) => {
                      const contentKey = PE_SLUG_TO_KEY[key]
                      const dates = contentKey ? datesMap?.[contentKey] : undefined
                      return (
                        <HubArticleCard key={key} highlight={highlights[key] ?? { isHighlighted: false, isDimmed: false }} publishDate={dates?.publishDate} dateModified={dates?.dateModified} lang={lang}>
                          <ArticleCard articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} />
                        </HubArticleCard>
                      )
                    })}
                  </div>
                )}

                {/* Sub-section article grids (Use Topics) */}
                {theme.subSections && (
                  <div className="space-y-8">
                    {theme.subSections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 px-1 ${colors.badge.split(' ').find(c => c.startsWith('text-')) ?? 'text-primary'}`}>
                          {SUBSECTION_LABELS[sub.title]?.[lang] ?? sub.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sub.articleKeys.map((key) => {
                            const contentKey = PE_SLUG_TO_KEY[key]
                            const dates = contentKey ? datesMap?.[contentKey] : undefined
                            return (
                              <HubArticleCard key={key} highlight={highlights[key] ?? { isHighlighted: false, isDimmed: false }} publishDate={dates?.publishDate} dateModified={dates?.dateModified} lang={lang}>
                                <ArticleCard articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} />
                              </HubArticleCard>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
              </LazySection>
            )
          })}
        </div>

        {/* Cross-link: Local LLMs */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? '🔍 Lokale Modelle ausführen?'
                : lang === 'fr' ? '🔍 Vous utilisez des modèles locaux ?'
                : lang === 'ja' ? '🔍 ローカルモデルを実行中ですか？'
                : lang === 'zh' ? '🔍 正在运行本地模型？'
                : lang === 'pt' ? '🔍 Executando modelos locais?'
                : lang === 'es' ? '🔍 ¿Ejecutando modelos locales?'
                : lang === 'ar' ? '🔍 هل تشغّل نماذج محلية؟'
                : lang === 'ko' ? '🔍 로컬 모델을 실행 중이신가요?'
                : '🔍 Running Local Models?'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Wenn Sie lokale LLMs mit Ollama, LM Studio oder llama.cpp betreiben, gilt jede Technik in diesem Guide auch für Sie. Sehen Sie sich den Abschnitt Lokale LLMs für Hardware-Guides, Modellvergleiche und Einrichtungsanleitungen an.'
                : lang === 'fr'
                ? 'Si vous exécutez des LLM locaux avec Ollama, LM Studio ou llama.cpp, chaque technique de ce guide s\'applique. Consultez la section LLMs locaux pour les guides matériels, les comparaisons de modèles et les instructions d\'installation.'
                : lang === 'ja'
                ? 'Ollama、LM Studio、またはllama.cppでローカルLLMを実行している場合、このガイドのすべてのテクニックが適用されます。ハードウェアガイド・モデル比較・セットアップ手順についてはローカルLLMセクションをご覧ください。'
                : lang === 'zh'
                ? '如果你正在使用Ollama、LM Studio或llama.cpp运行本地LLM，本指南中的每项技术都适用。请查看本地LLMs板块获取硬件指南、模型比较和安装说明。'
                : lang === 'pt'
                ? 'Se você está executando LLMs locais com Ollama, LM Studio ou llama.cpp, cada técnica deste guia se aplica. Consulte a seção de LLMs locais para guias de hardware, comparações de modelos e instruções de configuração — depois volte aqui para técnicas de prompting.'
                : lang === 'es'
                ? 'Si estás ejecutando LLMs locales con Ollama, LM Studio o llama.cpp, cada técnica de esta guía aplica. Consulta la sección de LLMs locales para guías de hardware, comparaciones de modelos e instrucciones de configuración — luego vuelve aquí para técnicas de prompting.'
                : lang === 'ar'
                ? 'إذا كنت تشغّل نماذج LLM المحلية باستخدام Ollama أو LM Studio أو llama.cpp، فإن كل تقنية في هذا الدليل تنطبق عليك. راجع قسم LLMs المحلية للحصول على أدلة الأجهزة ومقارنات النماذج وتعليمات الإعداد — ثم عد إلى هنا لتقنيات Prompting.'
                : lang === 'ko'
                ? 'Ollama, LM Studio 또는 llama.cpp로 로컬 LLM을 실행하고 있다면, 이 가이드의 모든 기법이 그대로 적용됩니다. 하드웨어 가이드, 모델 비교, 설치 안내는 로컬 LLM 섹션을 참고하세요 — 그런 다음 여기로 돌아와 프롬프팅 기법을 익히세요.'
                : 'If you\'re running local LLMs with Ollama, LM Studio, or llama.cpp, every technique in this guide applies. See the Local LLMs section for hardware guides, model comparisons, and setup instructions — then come back here for prompting techniques.'}
            </p>
          </div>
          <Link
            href={navHref('/local-llms', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Lokale LLMs entdecken →'
              : lang === 'fr' ? 'Explorer les LLMs locaux →'
              : lang === 'ja' ? 'ローカルLLMを見る →'
              : lang === 'zh' ? '探索本地LLMs →'
              : lang === 'pt' ? 'Explorar LLMs locais →'
              : lang === 'es' ? 'Explorar LLMs locales →'
              : lang === 'ar' ? 'استكشف LLMs المحلية ←'
              : lang === 'ko' ? '로컬 LLM 탐색하기 →'
              : 'Explore Local LLMs →'}
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Sources */}
        <div className="mt-20 pt-12 border-t border-primary/20" id="sources">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_SOURCES_HEADER[lang] ?? HUB_SOURCES_HEADER['en']}
          </h2>
          <ul className="space-y-3">
            {HUB_SOURCES_DATA.map((s, i) => (
              <li key={i} className="text-sm">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{s.title}</a>
                <span className="text-text-secondary"> — {s.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-primary/20" id="faq">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_HEADER[lang] ?? HUB_FAQ_HEADER['en']}
          </h2>
          <div className="space-y-4">
            {(HUB_FAQ_DATA[lang] ?? HUB_FAQ_DATA['en']).map((item, i) => (
              <div key={i} className="border border-primary/15 rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-text-primary mb-2 text-base">{item.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}</Link>
          <Link href={navHref('/features', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_FEATURES[lang] ?? HUB_NAV_FEATURES['en']}</Link>
          <Link href={navHref('/how-it-works', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOW[lang] ?? HUB_NAV_HOW['en']}</Link>
          <Link href={navHref('/blog', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_BLOG[lang] ?? HUB_NAV_BLOG['en']}</Link>
        </div>

      </div>

      {/* Guide Star recommendation widget — Mechanism C */}
      <GuideStarWidget signal={signal} recommendations={recommendations} />
    </div>
  )
}

export function PromptEngineeringHub({ initialLang, titlesMap, articleLevels, datesMap }: { initialLang?: import("@/hooks/useLang").Lang; titlesMap: Record<string, Partial<Record<Language, string>>>; articleLevels: Record<string, string>; datesMap?: Record<string, { publishDate?: string; dateModified?: string }> }) {
  return <PromptEngineeringHubContent initialLang={initialLang} titlesMap={titlesMap} articleLevels={articleLevels} datesMap={datesMap} />
}
