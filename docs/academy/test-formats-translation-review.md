# Academy test formats: native review sheet

For native reviewers of the PromptQuorum Academy UI texts added with the test formats (multiple choice, short written answer, explain the concept). One section per language. Please check: natural wording, the register named in the section, and that the AI-grading notice keeps its full meaning. Corrections go back as "key: new text". Source: `src/components/academy/copy/*.ts`.

Also check visually: the three-line certificate footer, the results page and the written-answer screen on a phone.

Point formatter example (2.5 of 10 points): see each section.

## DE: German (Sie-form)

**What to check:** Formal Sie throughout. Decimal comma in points ("2,5 von 10 Punkten"). "Teilpunkt" reads naturally as half a point.

**Points line:** "2,5 von 10 Punkten" | **Characters left:** "120 Zeichen übrig"

| Key | Where it appears | English | DE |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | Testformat |
| `testFormats.choice.label` | Format name | Multiple choice | Multiple Choice |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | Eine von drei Antworten wählen. |
| `testFormats.free.label` | Format name | Short written answer | Kurze schriftliche Antwort |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | Jede Frage in einigen Sätzen beantworten. |
| `testFormats.explain.label` | Format name | Explain the concept | Konzept erklären |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | Ein Konzept mit eigenen Worten erklären. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | Wie möchten Sie getestet werden? |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | Sie können vor jedem Test neu wählen. Schriftliche Antworten dauern länger. |
| `startTest` | Button | Start test | Test starten |
| `answerLabelFree` | Label above the answer box | Your answer | Ihre Antwort |
| `answerLabelExplain` | Label above the answer box | Your explanation | Ihre Erklärung |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | Schreiben Sie Ihre Antwort in ein bis drei Sätzen. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | Erklären Sie es mit eigenen Worten, so als würden Sie es einem Kollegen erklären. |
| `submitAnswer` | Button | Submit answer | Antwort abgeben |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | Ich bin nicht sicher |
| `gradingAnswer` | Spinner text | Checking your answer | Ihre Antwort wird geprüft |
| `creditFull` | Result label | Full credit | Volle Punktzahl |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | Teilpunkt (ein halber Punkt) |
| `creditNone` | Result label | No credit | Kein Punkt |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | Abgedeckt |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | Fehlt |
| `modelAnswerLabel` | Heading | Model answer | Musterantwort |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | Keine Antwort gegeben. Das gehört in eine gute Antwort. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | Schriftliche Antworten werden von KI anhand einer verborgenen Liste von Kernpunkten bewertet. Die KI-Bewertung kann falsch sein. Bitte melden Sie Fehler. |

## FR: French (vous)

**What to check:** Formal vous. "Point partiel (un demi-point)" and "Choix multiple" are the standard terms. Space before "?" if your house style requires a non-breaking one.

**Points line:** "2.5 points sur 10" | **Characters left:** "120 caractères restants"

| Key | Where it appears | English | FR |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | Format du test |
| `testFormats.choice.label` | Format name | Multiple choice | Choix multiple |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | Choisissez une réponse parmi trois. |
| `testFormats.free.label` | Format name | Short written answer | Réponse écrite courte |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | Répondez à chaque question en quelques phrases. |
| `testFormats.explain.label` | Format name | Explain the concept | Expliquer le concept |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | Expliquez un concept avec vos propres mots. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | Comment souhaitez-vous être testé ? |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | Vous pouvez choisir à nouveau avant chaque test. Les réponses écrites prennent plus de temps. |
| `startTest` | Button | Start test | Commencer le test |
| `answerLabelFree` | Label above the answer box | Your answer | Votre réponse |
| `answerLabelExplain` | Label above the answer box | Your explanation | Votre explication |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | Écrivez votre réponse en une à trois phrases. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | Expliquez avec vos propres mots, comme à un collègue. |
| `submitAnswer` | Button | Submit answer | Valider la réponse |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | Je ne suis pas sûr |
| `gradingAnswer` | Spinner text | Checking your answer | Vérification de votre réponse |
| `creditFull` | Result label | Full credit | Point complet |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | Point partiel (un demi-point) |
| `creditNone` | Result label | No credit | Aucun point |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | Couvert |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | Manquant |
| `modelAnswerLabel` | Heading | Model answer | Réponse modèle |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | Aucune réponse donnée. Voici ce que contient une bonne réponse. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | Les réponses écrites sont notées par une IA à partir d’une liste cachée de points clés. La notation par IA peut être erronée. Merci de signaler les erreurs. |

## ES: Spanish (tú, neutral)

**What to check:** tú form, neutral vocabulary (no vosotros/vos). Decimal point kept ("2.5 de 10 puntos").

**Points line:** "2.5 de 10 puntos" | **Characters left:** "120 caracteres restantes"

| Key | Where it appears | English | ES |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | Formato del test |
| `testFormats.choice.label` | Format name | Multiple choice | Opción múltiple |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | Elige una de tres respuestas. |
| `testFormats.free.label` | Format name | Short written answer | Respuesta escrita corta |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | Responde cada pregunta en pocas frases. |
| `testFormats.explain.label` | Format name | Explain the concept | Explicar el concepto |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | Explica un concepto con tus propias palabras. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | ¿Cómo quieres que te evaluemos? |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | Puedes elegir de nuevo antes de cada test. Las respuestas escritas llevan más tiempo. |
| `startTest` | Button | Start test | Empezar el test |
| `answerLabelFree` | Label above the answer box | Your answer | Tu respuesta |
| `answerLabelExplain` | Label above the answer box | Your explanation | Tu explicación |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | Escribe tu respuesta en una a tres frases. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | Explícalo con tus propias palabras, como a un colega. |
| `submitAnswer` | Button | Submit answer | Enviar respuesta |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | No estoy seguro |
| `gradingAnswer` | Spinner text | Checking your answer | Revisando tu respuesta |
| `creditFull` | Result label | Full credit | Punto completo |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | Punto parcial (medio punto) |
| `creditNone` | Result label | No credit | Sin punto |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | Cubierto |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | Falta |
| `modelAnswerLabel` | Heading | Model answer | Respuesta modelo |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | No diste respuesta. Esto es lo que contiene una buena respuesta. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | Las respuestas escritas las califica una IA con una lista oculta de puntos clave. La calificación de la IA puede equivocarse. Por favor, informa de los errores. |

## PT: Brazilian Portuguese (você)

**What to check:** Brazilian vocabulary only (e.g. "baixar", "tela", "usuário"). "Múltipla escolha", "ponto parcial (meio ponto)".

**Points line:** "2.5 de 10 pontos" | **Characters left:** "120 caracteres restantes"

| Key | Where it appears | English | PT |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | Formato do teste |
| `testFormats.choice.label` | Format name | Multiple choice | Múltipla escolha |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | Escolha uma entre três respostas. |
| `testFormats.free.label` | Format name | Short written answer | Resposta escrita curta |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | Responda cada pergunta em poucas frases. |
| `testFormats.explain.label` | Format name | Explain the concept | Explicar o conceito |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | Explique um conceito com suas próprias palavras. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | Como você quer ser avaliado? |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | Você pode escolher de novo antes de cada teste. Respostas escritas levam mais tempo. |
| `startTest` | Button | Start test | Iniciar o teste |
| `answerLabelFree` | Label above the answer box | Your answer | Sua resposta |
| `answerLabelExplain` | Label above the answer box | Your explanation | Sua explicação |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | Escreva sua resposta em uma a três frases. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | Explique com suas próprias palavras, como para um colega. |
| `submitAnswer` | Button | Submit answer | Enviar resposta |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | Não tenho certeza |
| `gradingAnswer` | Spinner text | Checking your answer | Verificando sua resposta |
| `creditFull` | Result label | Full credit | Ponto completo |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | Ponto parcial (meio ponto) |
| `creditNone` | Result label | No credit | Sem ponto |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | Coberto |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | Faltando |
| `modelAnswerLabel` | Heading | Model answer | Resposta modelo |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | Nenhuma resposta dada. Veja o que uma boa resposta contém. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | As respostas escritas são avaliadas por IA com uma lista oculta de pontos-chave. A avaliação da IA pode errar. Por favor, avise sobre erros. |

## JA: Japanese (です/ます)

**What to check:** Polite です/ます. "満点", "部分点（0.5点）", "記述式" are the exam terms; confirm they match how tests are described in Japan.

**Points line:** "10点中2.5点" | **Characters left:** "残り120文字"

| Key | Where it appears | English | JA |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | テスト形式 |
| `testFormats.choice.label` | Format name | Multiple choice | 選択式 |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | 3つの選択肢から1つ選びます。 |
| `testFormats.free.label` | Format name | Short written answer | 短い記述式 |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | 各質問に数文で答えます。 |
| `testFormats.explain.label` | Format name | Explain the concept | 概念を説明する |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | 概念を自分の言葉で説明します。 |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | どの形式でテストを受けますか？ |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | テストごとに選び直せます。記述式は時間がかかります。 |
| `startTest` | Button | Start test | テストを始める |
| `answerLabelFree` | Label above the answer box | Your answer | あなたの解答 |
| `answerLabelExplain` | Label above the answer box | Your explanation | あなたの説明 |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | 1〜3文で答えを書いてください。 |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | 同僚に話すつもりで、自分の言葉で説明してください。 |
| `submitAnswer` | Button | Submit answer | 解答を送信 |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | わかりません |
| `gradingAnswer` | Spinner text | Checking your answer | 解答を確認しています |
| `creditFull` | Result label | Full credit | 満点 |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | 部分点（0.5点） |
| `creditNone` | Result label | No credit | 得点なし |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | 押さえている点 |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | 不足している点 |
| `modelAnswerLabel` | Heading | Model answer | 模範解答 |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | 解答がありません。良い解答に含まれる内容は次のとおりです。 |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | 記述式の解答は、非公開の要点リストをもとにAIが採点します。AIの採点は誤ることがあります。誤りがあればご報告ください。 |

## ZH: Simplified Chinese

**What to check:** "简答题" and "选择题" as the test-format names; "部分得分（半分）". Simplified only.

**Points line:** "10 分中得 2.5 分" | **Characters left:** "还可输入 120 个字符"

| Key | Where it appears | English | ZH |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | 测验形式 |
| `testFormats.choice.label` | Format name | Multiple choice | 选择题 |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | 从三个答案中选一个。 |
| `testFormats.free.label` | Format name | Short written answer | 简答题 |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | 用几句话回答每个问题。 |
| `testFormats.explain.label` | Format name | Explain the concept | 解释概念 |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | 用自己的话解释一个概念。 |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | 你想用哪种方式测验？ |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | 每次测验前都可以重新选择。书面回答需要更多时间。 |
| `startTest` | Button | Start test | 开始测验 |
| `answerLabelFree` | Label above the answer box | Your answer | 你的回答 |
| `answerLabelExplain` | Label above the answer box | Your explanation | 你的解释 |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | 用一到三句话写出你的回答。 |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | 用自己的话解释，就像向同事讲解一样。 |
| `submitAnswer` | Button | Submit answer | 提交回答 |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | 我不确定 |
| `gradingAnswer` | Spinner text | Checking your answer | 正在检查你的回答 |
| `creditFull` | Result label | Full credit | 满分 |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | 部分得分（半分） |
| `creditNone` | Result label | No credit | 不得分 |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | 已涵盖 |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | 缺少 |
| `modelAnswerLabel` | Heading | Model answer | 参考答案 |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | 未作答。好的回答应包含以下内容。 |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | 书面回答由 AI 根据隐藏的要点清单评分。AI 评分可能出错，请报告错误。 |

## KO: Korean (formal -습니다 register)

**What to check:** Formal register (-습니다/-십시오). "객관식", "서술형", "부분 점수(0.5점)". Check spacing (띄어쓰기) and that "보시겠습니까?" is the right level for an exam prompt.

**Points line:** "10점 중 2.5점" | **Characters left:** "120자 남음"

| Key | Where it appears | English | KO |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | 시험 형식 |
| `testFormats.choice.label` | Format name | Multiple choice | 객관식 |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | 세 개의 답 중 하나를 고릅니다. |
| `testFormats.free.label` | Format name | Short written answer | 짧은 서술형 |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | 각 질문에 몇 문장으로 답합니다. |
| `testFormats.explain.label` | Format name | Explain the concept | 개념 설명하기 |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | 개념을 자신의 말로 설명합니다. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | 어떤 방식으로 시험을 보시겠습니까? |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | 시험마다 다시 선택할 수 있습니다. 서술형은 시간이 더 걸립니다. |
| `startTest` | Button | Start test | 시험 시작 |
| `answerLabelFree` | Label above the answer box | Your answer | 나의 답 |
| `answerLabelExplain` | Label above the answer box | Your explanation | 나의 설명 |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | 한 문장에서 세 문장으로 답을 쓰십시오. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | 동료에게 설명하듯 자신의 말로 설명하십시오. |
| `submitAnswer` | Button | Submit answer | 답 제출 |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | 잘 모르겠습니다 |
| `gradingAnswer` | Spinner text | Checking your answer | 답을 확인하는 중 |
| `creditFull` | Result label | Full credit | 만점 |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | 부분 점수(0.5점) |
| `creditNone` | Result label | No credit | 점수 없음 |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | 포함됨 |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | 빠진 내용 |
| `modelAnswerLabel` | Heading | Model answer | 모범 답안 |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | 답이 없습니다. 좋은 답에 들어가는 내용은 다음과 같습니다. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | 서술형 답은 비공개 핵심 항목 목록을 기준으로 AI가 채점합니다. AI 채점은 틀릴 수 있습니다. 오류를 알려 주십시오. |

## AR: Arabic (MSA, RTL)

**What to check:** Points label is "النقاط: x من y" on purpose (avoids number-noun agreement). Check RTL rendering of mixed Latin/numbers in the results line and the certificate footer. Western numerals.

**Points line:** "النقاط: 2.5 من 10" | **Characters left:** "متبقٍ 120 حرفاً"

| Key | Where it appears | English | AR |
|---|---|---|---|
| `testFormatLegend` | Setup: heading of the format choice | Test format | صيغة الاختبار |
| `testFormats.choice.label` | Format name | Multiple choice | اختيار من متعدد |
| `testFormats.choice.hint` | Format hint | Pick one of three answers. | اختر إجابة واحدة من ثلاث. |
| `testFormats.free.label` | Format name | Short written answer | إجابة كتابية قصيرة |
| `testFormats.free.hint` | Format hint | Answer each question in a few sentences. | أجب عن كل سؤال في بضع جمل. |
| `testFormats.explain.label` | Format name | Explain the concept | شرح المفهوم |
| `testFormats.explain.hint` | Format hint | Explain a concept in your own words. | اشرح مفهوماً بكلماتك الخاصة. |
| `formatPickerTitle` | Shown when a test opens | How do you want to be tested? | كيف تريد أن يتم اختبارك؟ |
| `formatPickerHint` | Shown when a test opens | You can choose again for every test. Written answers take longer. | يمكنك الاختيار من جديد قبل كل اختبار. الإجابات الكتابية تستغرق وقتاً أطول. |
| `startTest` | Button | Start test | ابدأ الاختبار |
| `answerLabelFree` | Label above the answer box | Your answer | إجابتك |
| `answerLabelExplain` | Label above the answer box | Your explanation | شرحك |
| `placeholderFree` | Placeholder in the answer box | Write your answer in one to three sentences. | اكتب إجابتك في جملة إلى ثلاث جمل. |
| `placeholderExplain` | Placeholder in the answer box | Explain it in your own words, as if to a colleague. | اشرح بكلماتك الخاصة كما لو كنت تشرح لزميل. |
| `submitAnswer` | Button | Submit answer | إرسال الإجابة |
| `iAmNotSure` | Button (scores 0, no model call) | I am not sure | لست متأكداً |
| `gradingAnswer` | Spinner text | Checking your answer | جارٍ فحص إجابتك |
| `creditFull` | Result label | Full credit | درجة كاملة |
| `creditPartial` | Result label (half a point) | Partial credit (half a point) | درجة جزئية (نصف نقطة) |
| `creditNone` | Result label | No credit | بدون درجة |
| `keyPointsCovered` | Heading of the list of covered ideas | Covered | مغطّى |
| `keyPointsMissed` | Heading of the list of missing ideas | Missing | ناقص |
| `modelAnswerLabel` | Heading | Model answer | الإجابة النموذجية |
| `notSureFeedback` | Shown after "I am not sure" | No answer given. Here is what a good answer contains. | لم تقدّم إجابة. هذا ما تتضمنه الإجابة الجيدة. |
| `aiGradedNotice` | MOST IMPORTANT: AI-grading notice. Shown after every written answer, on the results page, on the certificate footer and in the Course Documentation. Must say: graded by AI, against a hidden list of key points, can be wrong, please report mistakes. | Written answers are graded by AI against a hidden list of key points. AI grading can be wrong. Please report mistakes. | تُقيَّم الإجابات الكتابية بواسطة الذكاء الاصطناعي بناءً على قائمة مخفية من النقاط الرئيسية. قد يخطئ التقييم، يُرجى الإبلاغ عن الأخطاء. |

