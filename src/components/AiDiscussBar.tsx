'use client'

/**
 * AiDiscussBar
 * ------------
 * "Discuss with AI" row for top-level pages. Opt-in per page:
 *   <AiDiscussBar pageId="about" title={...} url={...} description={...} />
 *
 * One mechanism for every platform: copy a short page-context prompt to the
 * clipboard and open the target site in a new tab. Native URL prefill is a
 * bonus only where confirmed reliable (ChatGPT `?q=`). Platforms are config
 * (PLATFORMS below), not hardcoded markup.
 */

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'

const MAX_PROMPT_CHARS = 1500

type Platform = {
  id: string
  name: string
  url: string
  /** Build a native prefilled URL; omit when no confirmed browser prefill exists. */
  prefill?: (prompt: string) => string
}

const PLATFORMS: Platform[] = [
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/', prefill: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}` },
  { id: 'claude', name: 'Claude', url: 'https://claude.ai/new' },
]

type Copy = {
  heading: string
  discussWith: string
  copied: string
  sent: string
  manual: string
  preamble: string // {title} {url} {desc}
  ask: string
}

const COPY: Record<string, Copy> = {
  en: {
    heading: 'Discuss this page with an AI',
    discussWith: 'Discuss with',
    copied: 'Prompt copied — paste it in the chat box.',
    sent: 'Prompt sent.',
    manual: 'Could not copy automatically. Copy this text and paste it in the chat:',
    preamble: "I'm looking at this page from PromptQuorum: {title} — {url}. {desc}",
    ask: 'Help me understand/compare/decide on: ',
  },
  de: {
    heading: 'Diese Seite mit einer KI besprechen',
    discussWith: 'Diskutieren mit',
    copied: 'Prompt kopiert — im Chatfeld einfügen.',
    sent: 'Prompt gesendet.',
    manual: 'Automatisches Kopieren fehlgeschlagen. Text kopieren und im Chat einfügen:',
    preamble: 'Ich sehe mir diese Seite von PromptQuorum an: {title} — {url}. {desc}',
    ask: 'Hilf mir, Folgendes zu verstehen/zu vergleichen/zu entscheiden: ',
  },
  fr: {
    heading: 'Discuter de cette page avec une IA',
    discussWith: 'Discuter avec',
    copied: 'Prompt copié — collez-le dans la zone de discussion.',
    sent: 'Prompt envoyé.',
    manual: 'Copie automatique impossible. Copiez ce texte et collez-le dans le chat :',
    preamble: 'Je consulte cette page de PromptQuorum : {title} — {url}. {desc}',
    ask: 'Aide-moi à comprendre/comparer/décider : ',
  },
  es: {
    heading: 'Comenta esta página con una IA',
    discussWith: 'Hablar con',
    copied: 'Prompt copiado — pégalo en el cuadro de chat.',
    sent: 'Prompt enviado.',
    manual: 'No se pudo copiar automáticamente. Copia este texto y pégalo en el chat:',
    preamble: 'Estoy viendo esta página de PromptQuorum: {title} — {url}. {desc}',
    ask: 'Ayúdame a entender/comparar/decidir sobre: ',
  },
  pt: {
    heading: 'Converse sobre esta página com uma IA',
    discussWith: 'Conversar com',
    copied: 'Prompt copiado — cole na caixa de chat.',
    sent: 'Prompt enviado.',
    manual: 'Não foi possível copiar automaticamente. Copie este texto e cole no chat:',
    preamble: 'Estou vendo esta página da PromptQuorum: {title} — {url}. {desc}',
    ask: 'Ajude-me a entender/comparar/decidir sobre: ',
  },
  ja: {
    heading: 'このページをAIと話し合う',
    discussWith: 'で相談：',
    copied: 'プロンプトをコピーしました。チャット欄に貼り付けてください。',
    sent: 'プロンプトを送信しました。',
    manual: '自動コピーに失敗しました。次のテキストをコピーしてチャットに貼り付けてください：',
    preamble: 'PromptQuorumのこのページを見ています：{title} — {url}。{desc}',
    ask: '次について理解/比較/判断する手助けをしてください：',
  },
  zh: {
    heading: '与AI讨论本页内容',
    discussWith: '与以下AI讨论：',
    copied: '提示词已复制——请粘贴到聊天框。',
    sent: '提示词已发送。',
    manual: '无法自动复制。请复制以下文本并粘贴到聊天中：',
    preamble: '我正在查看 PromptQuorum 的这个页面：{title} — {url}。{desc}',
    ask: '请帮我理解/比较/决定：',
  },
  ko: {
    heading: '이 페이지를 AI와 이야기해 보기',
    discussWith: '와 대화:',
    copied: '프롬프트를 복사했습니다 — 채팅창에 붙여넣으세요.',
    sent: '프롬프트를 보냈습니다.',
    manual: '자동 복사에 실패했습니다. 아래 텍스트를 복사해 채팅에 붙여넣으세요:',
    preamble: 'PromptQuorum의 이 페이지를 보고 있습니다: {title} — {url}. {desc}',
    ask: '다음에 대해 이해/비교/결정하도록 도와주세요: ',
  },
  ar: {
    heading: 'ناقش هذه الصفحة مع الذكاء الاصطناعي',
    discussWith: 'ناقش مع',
    copied: 'تم نسخ الموجّه — الصقه في مربع الدردشة.',
    sent: 'تم إرسال الموجّه.',
    manual: 'تعذّر النسخ تلقائيًا. انسخ هذا النص والصقه في الدردشة:',
    preamble: 'أتصفح هذه الصفحة من PromptQuorum: {title} — {url}. {desc}',
    ask: 'ساعدني على فهم/مقارنة/اتخاذ قرار بشأن: ',
  },
}

type Props = {
  pageId: string
  title: string
  url: string
  description?: string
}

function buildPrompt(c: Copy, { title, url, description }: Props): string {
  const ask = c.ask
  const head = c.preamble.replace('{title}', title).replace('{url}', url)
  const budget = MAX_PROMPT_CHARS - ask.length - head.length - 1
  const desc = (description ?? '').slice(0, Math.max(budget, 0))
  return `${head.replace('{desc}', desc).trim()}\n\n${ask}`.slice(0, MAX_PROMPT_CHARS)
}

export function AiDiscussBar(props: Props) {
  const lang = useLang()
  const c = COPY[lang] ?? COPY.en
  const [toast, setToast] = useState<string | null>(null)
  const [manualText, setManualText] = useState<string | null>(null)

  const handleClick = async (p: Platform) => {
    const prompt = buildPrompt(c, props)
    window.umami?.track('ai_discuss_click', { platform: p.id, page: props.pageId })
    setManualText(null)
    // Open synchronously inside the gesture (before any await) so popup blockers allow it.
    window.open(p.prefill ? p.prefill(prompt) : p.url, '_blank', 'noopener')
    if (p.prefill) {
      setToast(c.sent)
      return
    }
    try {
      await navigator.clipboard.writeText(prompt)
      setToast(c.copied)
    } catch {
      setToast(c.manual)
      setManualText(prompt)
    }
  }

  return (
    <section className="mb-16" aria-labelledby={`ai-discuss-${props.pageId}`}>
      <h2 id={`ai-discuss-${props.pageId}`} className="text-lg font-semibold text-text-primary mb-3">
        {c.heading}
      </h2>
      <div className="flex flex-wrap gap-2">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleClick(p)}
            className="bg-card border border-primary/20 rounded-lg px-4 py-2 text-sm text-text-primary hover:border-primary/40 transition-colors"
          >
            {c.discussWith} {p.name}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="mt-3 text-sm text-text-secondary min-h-5">
        {toast}
      </p>
      {manualText && (
        <textarea
          readOnly
          value={manualText}
          rows={4}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-2 w-full bg-card border border-primary/20 rounded-lg p-3 text-sm text-text-secondary"
        />
      )}
    </section>
  )
}
