// Copy for the "how Ask Hans works" sections on /askhans (all 9 locales): how it works, what it can look up,
// a worked example note, how to read the answers and its limits. Tool titles/descriptions are NOT repeated here:
// the cards reuse the MCP page copy (mcp-docs-i18n.ts / mcp-stats-i18n.ts), because Ask Hans calls the same tools.
// "Ask Hans", "PromptQuorum", "MCP", "Claude", "Anthropic" and tool names are never translated.
// Placeholders {messages} and {chars} are filled from ASK_HANS_LIMITS at render time.

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const d = (en: string, de: string, fr: string, ja: string, zh: string, es: string, pt: string, ar: string, ko: string): Dict => ({
  en, de, fr, ja, zh, es, pt, ar, ko,
})

/** The tools Ask Hans can call (kept in step with TOOLS in src/lib/askhans/tools.ts). */
export const ASK_HANS_TOOL_NAMES = [
  'find_best_apps', 'search_apps', 'recommend_stack', 'find_local_alternative', 'get_app_alternatives', 'get_app_details', 'list_categories',
  'compare_apps', 'check_hardware_compatibility', 'estimate_vram', 'explain_license',
  'search_promptquorum', 'get_article', 'get_page', 'list_pages', 'find_related_content', 'get_hands_on_test', 'get_latest', 'list_clusters',
] as const

const DOCS = {
  startHeading: d('How Ask Hans works', 'So funktioniert Ask Hans', 'Comment fonctionne Ask Hans', 'Ask Hansのしくみ', 'Ask Hans 的工作方式', 'Cómo funciona Ask Hans', 'Como o Ask Hans funciona', 'كيف يعمل Ask Hans', 'Ask Hans 작동 방식'),
  startBody: d(
    'You write a question in your own words, in any language. Ask Hans decides which PromptQuorum tools to call, reads the results and answers in your language, with links to the pages it used. It only uses content from promptquorum.com.',
    'Sie schreiben Ihre Frage in eigenen Worten, in jeder Sprache. Ask Hans entscheidet, welche PromptQuorum-Tools er aufruft, liest die Ergebnisse und antwortet in Ihrer Sprache, mit Links zu den verwendeten Seiten. Er nutzt nur Inhalte von promptquorum.com.',
    'Vous écrivez votre question avec vos propres mots, dans n\'importe quelle langue. Ask Hans choisit les outils PromptQuorum à appeler, lit les résultats et répond dans votre langue, avec des liens vers les pages utilisées. Il n\'utilise que des contenus de promptquorum.com.',
    '好きな言葉で、どの言語でも質問を入力します。Ask HansがどのPromptQuorumツールを呼び出すかを判断し、結果を読み、あなたの言語で、使ったページへのリンク付きで回答します。利用するのはpromptquorum.comのコンテンツだけです。',
    '用你自己的话、任何语言输入问题。Ask Hans 决定调用哪些 PromptQuorum 工具，读取结果，并用你的语言作答，附上所用页面的链接。它只使用 promptquorum.com 上的内容。',
    'Escribes tu pregunta con tus propias palabras, en cualquier idioma. Ask Hans decide qué herramientas de PromptQuorum llamar, lee los resultados y responde en tu idioma, con enlaces a las páginas que usó. Solo usa contenido de promptquorum.com.',
    'Você escreve a pergunta com suas próprias palavras, em qualquer idioma. O Ask Hans decide quais ferramentas do PromptQuorum chamar, lê os resultados e responde no seu idioma, com links para as páginas usadas. Ele usa apenas conteúdo do promptquorum.com.',
    'تكتب سؤالك بكلماتك وبأي لغة. يقرر Ask Hans أي أدوات PromptQuorum يستدعيها، ويقرأ النتائج ويجيب بلغتك مع روابط إلى الصفحات التي استخدمها. ولا يستخدم إلا محتوى promptquorum.com.',
    '원하는 말투와 언어로 질문을 입력합니다. Ask Hans가 어떤 PromptQuorum 도구를 호출할지 정하고, 결과를 읽은 뒤, 사용한 페이지 링크와 함께 사용자의 언어로 답합니다. promptquorum.com의 콘텐츠만 사용합니다.',
  ),
  stepsHeading: d('The four steps', 'Die vier Schritte', 'Les quatre étapes', '4つのステップ', '四个步骤', 'Los cuatro pasos', 'As quatro etapas', 'الخطوات الأربع', '네 단계'),
  step1: d('You ask', 'Sie fragen', 'Vous posez la question', '質問する', '你提问', 'Preguntas', 'Você pergunta', 'تسأل', '질문합니다'),
  step2: d('Ask Hans calls tools', 'Ask Hans ruft Tools auf', 'Ask Hans appelle des outils', 'Ask Hansがツールを呼び出す', 'Ask Hans 调用工具', 'Ask Hans llama a las herramientas', 'O Ask Hans chama ferramentas', 'يستدعي Ask Hans الأدوات', 'Ask Hans가 도구를 호출합니다'),
  step3: d('You get an answer with sources', 'Sie erhalten eine Antwort mit Quellen', 'Vous recevez une réponse avec ses sources', '出典付きの回答が届く', '你得到带来源的回答', 'Recibes una respuesta con fuentes', 'Você recebe uma resposta com fontes', 'تحصل على إجابة مع المصادر', '출처가 붙은 답변을 받습니다'),
  step4: d('Matching links and follow-up questions appear', 'Passende Links und Anschlussfragen erscheinen', 'Des liens utiles et des questions de suivi apparaissent', '関連リンクと追加の質問候補が表示される', '出现相关链接和后续问题', 'Aparecen enlaces relacionados y preguntas de seguimiento', 'Aparecem links relacionados e perguntas de acompanhamento', 'تظهر روابط مناسبة وأسئلة متابعة', '관련 링크와 후속 질문이 표시됩니다'),

  toolsHeading: d('What Ask Hans can look up', 'Was Ask Hans nachschlagen kann', 'Ce qu\'Ask Hans peut consulter', 'Ask Hansが調べられること', 'Ask Hans 能查询什么', 'Qué puede consultar Ask Hans', 'O que o Ask Hans pode consultar', 'ما الذي يستطيع Ask Hans البحث عنه', 'Ask Hans가 조회할 수 있는 것'),
  toolsIntro: d(
    'Ask Hans uses the same tools as the public PromptQuorum MCP server, called directly on our server. Each card shows one tool and a question that makes Ask Hans use it.',
    'Ask Hans nutzt dieselben Tools wie der öffentliche MCP-Server von PromptQuorum, direkt auf unserem Server aufgerufen. Jede Karte zeigt ein Tool und eine Frage, mit der Ask Hans es einsetzt.',
    'Ask Hans utilise les mêmes outils que le serveur MCP public de PromptQuorum, appelés directement sur notre serveur. Chaque carte présente un outil et une question qui le déclenche.',
    'Ask Hansは、PromptQuorumの公開MCPサーバーと同じツールを、当社サーバー上で直接呼び出します。各カードには、1つのツールと、それを使わせる質問例を示しています。',
    'Ask Hans 使用与 PromptQuorum 公开 MCP 服务器相同的工具，并直接在我们的服务器上调用。每张卡片展示一个工具，以及会让 Ask Hans 用到它的提问示例。',
    'Ask Hans usa las mismas herramientas que el servidor MCP público de PromptQuorum, llamadas directamente en nuestro servidor. Cada tarjeta muestra una herramienta y una pregunta que hace que Ask Hans la use.',
    'O Ask Hans usa as mesmas ferramentas do servidor MCP público do PromptQuorum, chamadas diretamente no nosso servidor. Cada cartão mostra uma ferramenta e uma pergunta que faz o Ask Hans usá-la.',
    'يستخدم Ask Hans الأدوات نفسها التي يوفرها خادم MCP العام الخاص بـ PromptQuorum، ويستدعيها مباشرة على خادمنا. تعرض كل بطاقة أداة واحدة وسؤالًا يجعل Ask Hans يستخدمها.',
    'Ask Hans는 PromptQuorum 공개 MCP 서버와 같은 도구를 우리 서버에서 직접 호출합니다. 각 카드에는 도구 하나와, Ask Hans가 그 도구를 쓰게 되는 질문 예시가 있습니다.',
  ),
  mcpLink: d('See the MCP server page', 'Zur MCP-Server-Seite', 'Voir la page du serveur MCP', 'MCPサーバーのページを見る', '查看 MCP 服务器页面', 'Ver la página del servidor MCP', 'Ver a página do servidor MCP', 'عرض صفحة خادم MCP', 'MCP 서버 페이지 보기'),

  exampleNote: d(
    'The same question and tool as on the MCP page. Ask Hans answers a little shorter, adds a confidence label to each app and suggests follow-up questions. Answers differ from case to case.',
    'Dieselbe Frage und dasselbe Tool wie auf der MCP-Seite. Ask Hans antwortet etwas kürzer, ergänzt für jede App ein Verlässlichkeits-Label und schlägt Anschlussfragen vor. Antworten fallen von Fall zu Fall verschieden aus.',
    'La même question et le même outil que sur la page MCP. Ask Hans répond un peu plus court, ajoute une étiquette de fiabilité à chaque appli et propose des questions de suivi. Les réponses varient d\'un cas à l\'autre.',
    'MCPページと同じ質問・同じツールです。Ask Hansはやや短めに答え、各アプリに信頼度ラベルを付け、追加の質問候補を示します。回答は場合によって異なります。',
    '与 MCP 页面相同的问题和工具。Ask Hans 的回答稍短，会为每个应用添加可信度标签，并给出后续问题建议。每次的回答可能不同。',
    'La misma pregunta y la misma herramienta que en la página MCP. Ask Hans responde algo más breve, añade una etiqueta de fiabilidad a cada app y sugiere preguntas de seguimiento. Las respuestas varían según el caso.',
    'A mesma pergunta e a mesma ferramenta da página MCP. O Ask Hans responde de forma um pouco mais curta, adiciona um rótulo de confiabilidade a cada app e sugere perguntas de acompanhamento. As respostas variam de caso para caso.',
    'السؤال والأداة نفسهما كما في صفحة MCP. يجيب Ask Hans بإيجاز أكبر قليلًا، ويضيف وسم موثوقية لكل تطبيق، ويقترح أسئلة متابعة. تختلف الإجابات من حالة إلى أخرى.',
    'MCP 페이지와 같은 질문, 같은 도구입니다. Ask Hans는 조금 더 짧게 답하고, 각 앱에 신뢰도 라벨을 붙이며, 후속 질문을 제안합니다. 답변은 경우에 따라 다릅니다.',
  ),

  trustHeading: d('How to read the answers', 'So lesen Sie die Antworten', 'Comment lire les réponses', '回答の読み方', '如何解读回答', 'Cómo leer las respuestas', 'Como ler as respostas', 'كيف تقرأ الإجابات', '답변 읽는 법'),
  trust1: d(
    'Ask Hans is an AI, not Hans himself, and it can be wrong. Check important facts on the linked pages.',
    'Ask Hans ist eine KI, nicht Hans selbst, und kann sich irren. Prüfen Sie wichtige Angaben auf den verlinkten Seiten.',
    'Ask Hans est une IA, pas Hans lui-même, et il peut se tromper. Vérifiez les informations importantes sur les pages liées.',
    'Ask HansはAIであり、Hans本人ではありません。誤ることがあります。重要な情報はリンク先のページで確認してください。',
    'Ask Hans 是 AI，不是 Hans 本人，也可能出错。重要信息请到所附链接的页面核实。',
    'Ask Hans es una IA, no el propio Hans, y puede equivocarse. Comprueba los datos importantes en las páginas enlazadas.',
    'O Ask Hans é uma IA, não o próprio Hans, e pode errar. Confira as informações importantes nas páginas indicadas.',
    'Ask Hans ذكاء اصطناعي وليس هانس نفسه، وقد يخطئ. تحقّق من المعلومات المهمة في الصفحات المرفقة.',
    'Ask Hans는 Hans 본인이 아닌 AI이며 틀릴 수 있습니다. 중요한 내용은 링크된 페이지에서 확인하십시오.',
  ),
  trust2: d(
    'Every app carries a confidence label. High: PromptQuorum tested it hands-on. Medium: the maker checked the entry, we did not test it. Low: only maker statements and directory data, so check the maker\'s page.',
    'Jede App trägt ein Verlässlichkeits-Label. Hoch: PromptQuorum hat sie praktisch getestet. Mittel: Der Hersteller hat den Eintrag geprüft, wir haben sie nicht getestet. Niedrig: nur Herstellerangaben und Verzeichnisdaten, prüfen Sie also die Seite des Herstellers.',
    'Chaque appli porte une étiquette de fiabilité. Élevée : PromptQuorum l\'a testée en pratique. Moyenne : l\'éditeur a vérifié la fiche, nous ne l\'avons pas testée. Faible : seulement des déclarations de l\'éditeur et des données de l\'annuaire, vérifiez donc sa page.',
    'すべてのアプリに信頼度ラベルが付きます。高：PromptQuorumが実際に試した。中：開発元が掲載内容を確認済みで、当社は試していない。低：開発元の説明とディレクトリのデータのみ。開発元のページでご確認ください。',
    '每个应用都带有可信度标签。高：PromptQuorum 亲自实测过。中：开发者核对过条目，我们未实测。低：仅有开发者声明和目录数据，请到开发者页面核实。',
    'Cada app lleva una etiqueta de fiabilidad. Alta: PromptQuorum la probó en la práctica. Media: el desarrollador revisó la ficha y nosotros no la probamos. Baja: solo declaraciones del desarrollador y datos del directorio, así que revisa su página.',
    'Cada app tem um rótulo de confiabilidade. Alta: o PromptQuorum testou na prática. Média: o desenvolvedor conferiu a entrada e nós não testamos. Baixa: apenas declarações do desenvolvedor e dados do diretório, então confira a página dele.',
    'يحمل كل تطبيق وسم موثوقية. عالية: اختبره PromptQuorum عمليًا. متوسطة: راجع المطوّر الإدخال ولم نختبره نحن. منخفضة: بيانات المطوّر والدليل فقط، فتحقّق من صفحة المطوّر.',
    '모든 앱에는 신뢰도 라벨이 붙습니다. 높음: PromptQuorum이 직접 테스트했습니다. 보통: 개발사가 항목을 확인했으며 저희는 테스트하지 않았습니다. 낮음: 개발사 설명과 디렉터리 데이터뿐이므로 개발사 페이지에서 확인하십시오.',
  ),
  trust3: d(
    'It answers from promptquorum.com only: no web search, no news, no live prices. If it finds nothing, it says so.',
    'Er antwortet nur aus promptquorum.com: keine Websuche, keine Nachrichten, keine Live-Preise. Findet er nichts, sagt er das.',
    'Il ne répond qu\'à partir de promptquorum.com : pas de recherche web, pas d\'actualités, pas de prix en direct. S\'il ne trouve rien, il le dit.',
    '回答はpromptquorum.comの内容だけに基づきます。ウェブ検索、ニュース、リアルタイムの価格は扱いません。見つからないときは、その旨を伝えます。',
    '它只根据 promptquorum.com 的内容作答：不做网络搜索，不提供新闻或实时价格。找不到时会如实说明。',
    'Responde solo con contenido de promptquorum.com: sin búsqueda web, sin noticias, sin precios en vivo. Si no encuentra nada, lo dice.',
    'Ele responde apenas com conteúdo do promptquorum.com: sem busca na web, sem notícias, sem preços em tempo real. Se não encontrar nada, ele diz.',
    'يجيب من محتوى promptquorum.com فقط: بلا بحث في الويب ولا أخبار ولا أسعار فورية. وإن لم يجد شيئًا فإنه يقول ذلك.',
    'promptquorum.com의 콘텐츠만으로 답합니다. 웹 검색, 뉴스, 실시간 가격은 다루지 않으며, 찾지 못하면 그렇게 말합니다.',
  ),
  trust4: d(
    'There is a limit of {messages} questions per visit and {chars} characters per question.',
    'Pro Besuch sind {messages} Fragen mit je höchstens {chars} Zeichen möglich.',
    'La limite est de {messages} questions par visite et de {chars} caractères par question.',
    '1回の利用につき{messages}件まで、1件あたり{chars}文字までの質問ができます。',
    '每次访问最多可提 {messages} 个问题，每个问题最多 {chars} 个字符。',
    'Hay un límite de {messages} preguntas por visita y {chars} caracteres por pregunta.',
    'Há um limite de {messages} perguntas por visita e {chars} caracteres por pergunta.',
    'الحد الأقصى {messages} سؤالًا في كل زيارة و{chars} حرفًا لكل سؤال.',
    '방문 1회당 질문은 {messages}개, 질문 하나당 {chars}자까지 가능합니다.',
  ),
  trust5: d(
    'Your question is sent to our server and to Anthropic (Claude) to create the answer. Please do not enter personal data. Conversations stay in your browser and are kept for 7 days only if you choose to save them.',
    'Ihre Frage wird zur Erstellung der Antwort an unseren Server und an Anthropic (Claude) gesendet. Bitte geben Sie keine personenbezogenen Daten ein. Gespräche bleiben in Ihrem Browser und werden nur 7 Tage aufbewahrt, wenn Sie das Speichern wählen.',
    'Votre question est envoyée à notre serveur et à Anthropic (Claude) pour générer la réponse. Merci de ne pas saisir de données personnelles. Les conversations restent dans votre navigateur et ne sont conservées 7 jours que si vous choisissez de les enregistrer.',
    '回答を作成するため、質問は当社のサーバーとAnthropic（Claude）に送信されます。個人情報は入力しないでください。会話はお使いのブラウザ内に残り、保存を選んだ場合のみ7日間保持されます。',
    '为生成回答，你的问题会发送到我们的服务器和 Anthropic（Claude）。请勿输入个人信息。对话保留在你的浏览器中，只有你选择保存时才会保留 7 天。',
    'Tu pregunta se envía a nuestro servidor y a Anthropic (Claude) para crear la respuesta. No introduzcas datos personales. Las conversaciones se quedan en tu navegador y solo se guardan 7 días si eliges guardarlas.',
    'Sua pergunta é enviada ao nosso servidor e à Anthropic (Claude) para criar a resposta. Não informe dados pessoais. As conversas ficam no seu navegador e só são mantidas por 7 dias se você escolher salvá-las.',
    'يُرسل سؤالك إلى خادمنا وإلى Anthropic (Claude) لإنشاء الإجابة. يُرجى عدم إدخال بيانات شخصية. تبقى المحادثات في متصفحك ولا تُحفظ لمدة 7 أيام إلا إذا اخترت حفظها.',
    '답변을 만들기 위해 질문이 저희 서버와 Anthropic(Claude)으로 전송됩니다. 개인정보는 입력하지 마십시오. 대화는 브라우저에 남으며, 저장을 선택한 경우에만 7일간 보관됩니다.',
  ),
  limitsHeading: d('What it does not do', 'Was er nicht tut', 'Ce qu\'il ne fait pas', 'できないこと', '它不做什么', 'Qué no hace', 'O que ele não faz', 'ما لا يفعله', '하지 않는 일'),
  limitsBody: d(
    'No legal, medical, financial or electrical-installation advice: ask a qualified professional. It does not install, change or buy anything for you.',
    'Keine Rechts-, Medizin-, Finanz- oder Elektroinstallationsberatung: Fragen Sie dafür eine Fachperson. Er installiert, ändert oder kauft nichts für Sie.',
    'Pas de conseil juridique, médical, financier ou d\'installation électrique : adressez-vous à un professionnel qualifié. Il n\'installe, ne modifie et n\'achète rien pour vous.',
    '法律・医療・金融・電気工事に関する助言は行いません。資格のある専門家にご相談ください。インストール、設定変更、購入の代行もしません。',
    '不提供法律、医疗、金融或电气安装方面的建议，请咨询有资质的专业人士。它也不会替你安装、修改或购买任何东西。',
    'No da consejos legales, médicos, financieros ni de instalación eléctrica: consulta a un profesional cualificado. No instala, cambia ni compra nada por ti.',
    'Não dá aconselhamento jurídico, médico, financeiro nem de instalação elétrica: consulte um profissional qualificado. Ele não instala, altera nem compra nada por você.',
    'لا يقدم استشارات قانونية أو طبية أو مالية أو في التمديدات الكهربائية: استشر مختصًا مؤهلًا. ولا يثبّت شيئًا ولا يغيّره ولا يشتريه نيابةً عنك.',
    '법률, 의료, 금융, 전기 설비에 관한 조언은 하지 않으니 자격을 갖춘 전문가에게 문의하십시오. 대신 설치하거나 변경하거나 구매해 주지도 않습니다.',
  ),
} satisfies Record<string, Dict>

export type AskDocsKey = keyof typeof DOCS

export function tDocsAsk(key: AskDocsKey, lang: Language, vars?: Record<string, string | number>): string {
  let s = DOCS[key][lang] ?? DOCS[key].en
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(String(v))
  return s
}
