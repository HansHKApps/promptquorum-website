'use client'

/**
 * AiDiscussBar
 * ------------
 * "Discuss with AI" row for top-level pages, mounted once in layout.tsx above the
 * footer and shown only on the paths matched by SHOW_RE. Title, canonical URL,
 * description, text, links and images are read from the DOM at click time and
 * turned into a markdown briefing (see lib/aiBriefing.ts).
 *
 * One mechanism for every platform: copy a short page-context prompt to the
 * clipboard and open the target site in a new tab. Native URL prefill is a
 * bonus only where confirmed reliable (ChatGPT `?q=`). Platforms are config
 * (PLATFORMS below), not hardcoded markup.
 */

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import { AI_LOGOS } from './ai-logos'
import { buildBriefing, briefingFilename, downloadText } from '@/lib/aiBriefing'

// Top-level pages only (EN + 8 locale prefixes): home, about, directory, pq-apps, hardware, software.
const SHOW_RE = /^(?:\/(?:de|fr|ja|zh|es|pt|ar|ko))?(?:\/(?:about|directory|pq-apps|local-llms|power-local-llm))?\/?$/
// ChatGPT ?q= prefill is only used when the whole briefing fits in a URL; otherwise copy + open.
const MAX_PREFILL_URL_CHARS = 6000

type Platform = {
  id: string
  name: string
  url: string
  /** Build a native prefilled URL; omit when no confirmed browser prefill exists. */
  prefill?: (prompt: string) => string
}

const PLATFORMS: Platform[] = [
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/', prefill: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}` },
  { id: 'claude', name: 'Claude', url: 'https://claude.ai/new', prefill: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}` },
  { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com/app' },
  { id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai/' },
  { id: 'grok', name: 'Grok', url: 'https://grok.com/' },
  { id: 'meta-ai', name: 'Meta AI', url: 'https://www.meta.ai/' },
  { id: 'mistral', name: 'Le Chat', url: 'https://chat.mistral.ai/chat' },
  { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com/' },
  { id: 'copilot', name: 'Copilot', url: 'https://copilot.microsoft.com/' },
  { id: 'poe', name: 'Poe', url: 'https://poe.com/' },
]

type Copy = {
  heading: string
  discussWith: string
  steps: [string, string, string]
  copied: string
  manual: string
  download: string
  downloaded: string
  task: string
}

const COPY: Record<string, Copy> = {
  en: {
    heading: 'Discuss this page with an AI',
    discussWith: 'Discuss with',
    steps: ['1. Click your AI. The briefing is copied and the AI opens in a new tab.', '2. In its chat box, paste with Ctrl+V (⌘+V on Mac) — or attach the downloaded file.', '3. Send. The AI will ask what you want to discuss.'],
    copied: 'Briefing copied. Now paste it into the chat (Ctrl+V / ⌘+V) and send.',
    manual: 'Copy failed. Select all the text below, copy it, and paste it into the chat:',
    download: 'Download briefing (.md)',
    downloaded: 'Downloaded. Attach the file in the AI\'s chat and send.',
    task: 'You are receiving a briefing about ONE page of PromptQuorum (promptquorum.com), a hub for local LLMs and AI tools. Read all of it. Do not summarize it yet. In your first reply, say in one sentence that you have read the briefing, then ask the user what they want to know or discuss about this page. After that, answer using this briefing and the pages it links to. When the user asks about a topic (for example Ollama), list the matching links from "Links on this page" and say what each one covers. If something is not in the briefing, say so and point to "Look up more on PromptQuorum".',
  },
  de: {
    heading: 'Diese Seite mit einer KI besprechen',
    discussWith: 'Besprechen mit',
    steps: ['1. Klicke auf deine KI. Das Briefing wird kopiert und die KI öffnet sich in einem neuen Tab.', '2. Füge es im Chatfeld mit Strg+V (⌘+V auf dem Mac) ein — oder hänge die heruntergeladene Datei an.', '3. Senden. Die KI fragt dich, worüber du sprechen möchtest.'],
    copied: 'Briefing kopiert. Jetzt im Chat einfügen (Strg+V / ⌘+V) und senden.',
    manual: 'Kopieren fehlgeschlagen. Markiere den Text unten, kopiere ihn und füge ihn im Chat ein:',
    download: 'Briefing herunterladen (.md)',
    downloaded: 'Heruntergeladen. Hänge die Datei im Chat der KI an und sende.',
    task: 'Du erhältst ein Briefing zu EINER Seite von PromptQuorum (promptquorum.com), einem Hub für lokale LLMs und KI-Tools. Lies alles. Fasse es noch nicht zusammen. Bestätige in deiner ersten Antwort in einem Satz, dass du das Briefing gelesen hast, und frage dann den Nutzer, was er zu dieser Seite wissen oder besprechen möchte. Danach antwortest du anhand dieses Briefings und der verlinkten Seiten. Fragt der Nutzer nach einem Thema (z. B. Ollama), nenne die passenden Links aus "Links on this page" und sage, was jeder abdeckt. Steht etwas nicht im Briefing, sage das und verweise auf "Look up more on PromptQuorum".',
  },
  fr: {
    heading: 'Discuter de cette page avec une IA',
    discussWith: 'Discuter avec',
    steps: ['1. Clique sur ton IA. Le briefing est copié et l\'IA s\'ouvre dans un nouvel onglet.', '2. Colle-le dans la zone de discussion avec Ctrl+V (⌘+V sur Mac) — ou joins le fichier téléchargé.', '3. Envoie. L\'IA te demandera de quoi tu veux discuter.'],
    copied: 'Briefing copié. Colle-le maintenant dans le chat (Ctrl+V / ⌘+V) et envoie.',
    manual: 'Échec de la copie. Sélectionne tout le texte ci-dessous, copie-le et colle-le dans le chat :',
    download: 'Télécharger le briefing (.md)',
    downloaded: 'Téléchargé. Joins le fichier dans le chat de l\'IA et envoie.',
    task: 'Tu reçois un briefing sur UNE page de PromptQuorum (promptquorum.com), un hub consacré aux LLM locaux et aux outils d\'IA. Lis-le en entier. Ne le résume pas encore. Dans ta première réponse, confirme en une phrase que tu l\'as lu, puis demande à l\'utilisateur ce qu\'il veut savoir ou discuter à propos de cette page. Ensuite, réponds à partir de ce briefing et des pages liées. Si l\'utilisateur pose une question sur un sujet (par exemple Ollama), liste les liens correspondants de "Links on this page" et indique ce que couvre chacun. Si une information manque, dis-le et renvoie à "Look up more on PromptQuorum".',
  },
  es: {
    heading: 'Comenta esta página con una IA',
    discussWith: 'Hablar con',
    steps: ['1. Haz clic en tu IA. El briefing se copia y la IA se abre en una pestaña nueva.', '2. Pégalo en el chat con Ctrl+V (⌘+V en Mac) — o adjunta el archivo descargado.', '3. Envía. La IA te preguntará de qué quieres hablar.'],
    copied: 'Briefing copiado. Pégalo ahora en el chat (Ctrl+V / ⌘+V) y envíalo.',
    manual: 'No se pudo copiar. Selecciona todo el texto de abajo, cópialo y pégalo en el chat:',
    download: 'Descargar briefing (.md)',
    downloaded: 'Descargado. Adjunta el archivo en el chat de la IA y envía.',
    task: 'Recibes un briefing sobre UNA página de PromptQuorum (promptquorum.com), un centro de LLM locales y herramientas de IA. Léelo completo. No lo resumas todavía. En tu primera respuesta, confirma en una frase que lo has leído y pregunta al usuario qué quiere saber o comentar sobre esta página. Después responde con este briefing y las páginas enlazadas. Si el usuario pregunta por un tema (por ejemplo Ollama), enumera los enlaces correspondientes de "Links on this page" e indica qué cubre cada uno. Si algo no está en el briefing, dilo y remite a "Look up more on PromptQuorum".',
  },
  pt: {
    heading: 'Converse sobre esta página com uma IA',
    discussWith: 'Conversar com',
    steps: ['1. Clique na sua IA. O briefing é copiado e a IA abre em uma nova aba.', '2. Cole na caixa de chat com Ctrl+V (⌘+V no Mac) — ou anexe o arquivo baixado.', '3. Envie. A IA vai perguntar o que você quer discutir.'],
    copied: 'Briefing copiado. Agora cole no chat (Ctrl+V / ⌘+V) e envie.',
    manual: 'Falha ao copiar. Selecione todo o texto abaixo, copie e cole no chat:',
    download: 'Baixar briefing (.md)',
    downloaded: 'Baixado. Anexe o arquivo no chat da IA e envie.',
    task: 'Você está recebendo um briefing sobre UMA página da PromptQuorum (promptquorum.com), um hub de LLMs locais e ferramentas de IA. Leia tudo. Ainda não resuma. Na primeira resposta, confirme em uma frase que leu o briefing e pergunte ao usuário o que ele quer saber ou discutir sobre esta página. Depois, responda com base neste briefing e nas páginas linkadas. Se o usuário perguntar sobre um tema (por exemplo Ollama), liste os links correspondentes de "Links on this page" e diga o que cada um cobre. Se algo não estiver no briefing, diga isso e indique "Look up more on PromptQuorum".',
  },
  ja: {
    heading: 'このページをAIと話し合う',
    discussWith: 'AIで相談：',
    steps: ['1. 使いたいAIをクリック。ブリーフィングがコピーされ、AIが新しいタブで開きます。', '2. チャット欄に Ctrl+V（Macは ⌘+V）で貼り付けるか、ダウンロードしたファイルを添付します。', '3. 送信。AIが何を話し合いたいか尋ねます。'],
    copied: 'ブリーフィングをコピーしました。チャットに貼り付け（Ctrl+V / ⌘+V）て送信してください。',
    manual: 'コピーに失敗しました。下のテキストをすべて選択してコピーし、チャットに貼り付けてください：',
    download: 'ブリーフィングをダウンロード (.md)',
    downloaded: 'ダウンロードしました。AIのチャットにファイルを添付して送信してください。',
    task: 'これはPromptQuorum（promptquorum.com、ローカルLLMとAIツールのハブ）の1ページに関するブリーフィングです。全文を読んでください。まだ要約しないでください。最初の返信では、読み終えたことを1文で伝え、そのページについて何を知りたいか、何を話し合いたいかをユーザーに尋ねてください。その後は、このブリーフィングとリンク先ページに基づいて答えてください。ユーザーが特定の話題（例：Ollama）を尋ねたら、"Links on this page"から該当するリンクを挙げ、それぞれの内容を説明してください。ブリーフィングにない内容は、その旨を伝え、"Look up more on PromptQuorum"を案内してください。',
  },
  zh: {
    heading: '与AI讨论本页内容',
    discussWith: '与以下AI讨论：',
    steps: ['1. 点击你要用的AI。简报会被复制，AI 将在新标签页打开。', '2. 在聊天框中按 Ctrl+V（Mac 为 ⌘+V）粘贴，或附上下载的文件。', '3. 发送。AI 会询问你想讨论什么。'],
    copied: '简报已复制。请粘贴到聊天框（Ctrl+V / ⌘+V）并发送。',
    manual: '复制失败。请全选下方文本，复制后粘贴到聊天中：',
    download: '下载简报 (.md)',
    downloaded: '已下载。请在AI聊天中附上该文件并发送。',
    task: '你收到的是关于 PromptQuorum（promptquorum.com，本地大模型与 AI 工具中心）某一个页面的简报。请完整阅读，暂时不要总结。首次回复时，用一句话说明你已读完简报，然后询问用户想了解或讨论本页的什么内容。之后请基于本简报及其链接的页面作答。当用户询问某个主题（例如 Ollama）时，列出“Links on this page”中相关的链接并说明每个链接的内容。如果简报中没有相关信息，请如实说明，并指向“Look up more on PromptQuorum”。',
  },
  ko: {
    heading: '이 페이지를 AI와 이야기해 보기',
    discussWith: '와 대화:',
    steps: ['1. 사용할 AI를 클릭하세요. 브리핑이 복사되고 AI가 새 탭에서 열립니다.', '2. 채팅창에 Ctrl+V(Mac은 ⌘+V)로 붙여넣거나 다운로드한 파일을 첨부하세요.', '3. 전송하세요. AI가 무엇을 논의하고 싶은지 물어봅니다.'],
    copied: '브리핑을 복사했습니다. 채팅창에 붙여넣기(Ctrl+V / ⌘+V) 후 전송하세요.',
    manual: '복사에 실패했습니다. 아래 텍스트를 모두 선택해 복사한 뒤 채팅에 붙여넣으세요:',
    download: '브리핑 다운로드 (.md)',
    downloaded: '다운로드했습니다. AI 채팅에 파일을 첨부해 전송하세요.',
    task: 'PromptQuorum(promptquorum.com, 로컬 LLM과 AI 도구 허브)의 페이지 하나에 대한 브리핑입니다. 전부 읽어 주세요. 아직 요약하지 마세요. 첫 답변에서는 브리핑을 읽었다고 한 문장으로 알린 뒤, 사용자가 이 페이지에 대해 무엇을 알고 싶거나 논의하고 싶은지 물어보세요. 그 이후에는 이 브리핑과 링크된 페이지를 바탕으로 답하세요. 사용자가 특정 주제(예: Ollama)를 물으면 "Links on this page"에서 관련 링크를 나열하고 각각 무엇을 다루는지 설명하세요. 브리핑에 없는 내용은 없다고 말하고 "Look up more on PromptQuorum"을 안내하세요.',
  },
  ar: {
    heading: 'ناقش هذه الصفحة مع الذكاء الاصطناعي',
    discussWith: 'ناقش مع',
    steps: ['١. اضغط على الذكاء الاصطناعي الذي تريده. يتم نسخ الموجز ويُفتح في تبويب جديد.', '٢. الصقه في مربع الدردشة بـ Ctrl+V (⌘+V على Mac) — أو أرفق الملف الذي نزّلته.', '٣. أرسل. سيسألك الذكاء الاصطناعي عمّا تريد مناقشته.'],
    copied: 'تم نسخ الموجز. الصقه الآن في الدردشة (Ctrl+V / ⌘+V) وأرسله.',
    manual: 'تعذّر النسخ. حدّد كل النص أدناه وانسخه والصقه في الدردشة:',
    download: 'تنزيل الموجز (.md)',
    downloaded: 'تم التنزيل. أرفق الملف في دردشة الذكاء الاصطناعي وأرسل.',
    task: 'تتلقى موجزًا عن صفحة واحدة من PromptQuorum (promptquorum.com)، مركز للنماذج اللغوية المحلية وأدوات الذكاء الاصطناعي. اقرأه كاملًا ولا تلخّصه الآن. في ردك الأول، اذكر بجملة واحدة أنك قرأت الموجز، ثم اسأل المستخدم عمّا يريد معرفته أو مناقشته بشأن هذه الصفحة. بعد ذلك أجب اعتمادًا على هذا الموجز والصفحات المرتبطة به. إذا سأل المستخدم عن موضوع (مثل Ollama) فاذكر الروابط المطابقة من "Links on this page" وبيّن ما يغطيه كل رابط. وإذا لم يكن الأمر في الموجز فقل ذلك وأشر إلى "Look up more on PromptQuorum".',
  },
}

export function AiDiscussBar() {
  const lang = useLang()
  const pathname = usePathname()
  const c = COPY[lang] ?? COPY.en
  const [toast, setToast] = useState<string | null>(null)
  const [manualText, setManualText] = useState<string | null>(null)

  if (!pathname || !SHOW_RE.test(pathname)) return null

  const handleClick = async (p: Platform) => {
    const briefing = buildBriefing(c.task, lang)
    setManualText(null)
    const prefillUrl = p.prefill?.(briefing)
    if (prefillUrl && prefillUrl.length <= MAX_PREFILL_URL_CHARS) {
      window.open(prefillUrl, '_blank', 'noopener')
      setToast(null)
      return
    }
    // Copy BEFORE opening the new tab. Opening first (the previous order) let
    // focus move to the new tab before this awaited call resolved, and the
    // Clipboard API silently fails when the document isn't focused — on
    // mobile Chrome that made every non-prefill platform "copy" nothing.
    // A single `await` here still runs inside the click gesture, so popup
    // blockers still allow the `window.open` right after it.
    try {
      await navigator.clipboard.writeText(briefing)
      window.open(p.url, '_blank', 'noopener')
      setToast(c.copied)
    } catch {
      window.open(p.url, '_blank', 'noopener')
      setToast(c.manual)
      setManualText(briefing)
    }
  }

  const handleDownload = () => {
    downloadText(briefingFilename(), buildBriefing(c.task, lang))
    setToast(c.downloaded)
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-10" aria-labelledby="ai-discuss-heading">
      <h2 id="ai-discuss-heading" className="text-lg font-semibold text-text-primary mb-3">
        {c.heading}
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleClick(p)}
            className="flex items-center gap-2 bg-card border border-primary/20 rounded-lg px-3 py-2 text-sm text-text-primary hover:border-primary/40 transition-colors"
          >
            {AI_LOGOS[p.id]}
            <span>{c.discussWith} {p.name}</span>
          </button>
        ))}
      </div>
      <ol className="mt-4 space-y-1 text-sm text-text-secondary list-none p-0">
        {c.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <button
        type="button"
        onClick={handleDownload}
        className="mt-3 text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-2"
      >
        {c.download}
      </button>
      <p role="status" aria-live="polite" className="mt-3 text-sm font-medium text-text-primary min-h-5">
        {toast}
      </p>
      {manualText && (
        <textarea
          readOnly
          value={manualText}
          rows={8}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-2 w-full bg-card border border-primary/20 rounded-lg p-3 text-sm text-text-secondary"
        />
      )}
    </section>
  )
}
