'use client'

/**
 * AiDiscussBar
 * ------------
 * "Discuss with AI" row for top-level pages, mounted once in layout.tsx above the
 * footer and shown only on the paths matched by SHOW_RE. Title, canonical URL,
 * description and the page's visible text are read from the DOM at click time.
 *
 * One mechanism for every platform: copy a short page-context prompt to the
 * clipboard and open the target site in a new tab. Native URL prefill is a
 * bonus only where confirmed reliable (ChatGPT `?q=`). Platforms are config
 * (PLATFORMS below), not hardcoded markup.
 */

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'

// Top-level pages only (EN + 8 locale prefixes): home, about, directory, pq-apps, hardware, software.
const SHOW_RE = /^(?:\/(?:de|fr|ja|zh|es|pt|ar|ko))?(?:\/(?:about|directory|pq-apps|local-llms|power-local-llm))?\/?$/
// Browsers/servers reject very long URLs; above this, ChatGPT falls back to copy + open.
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
  { id: 'claude', name: 'Claude', url: 'https://claude.ai/new' },
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

function readPage() {
  const title = document.title
  const url = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? window.location.href
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''
  const content = (document.getElementById('main')?.innerText ?? '').replace(/\n{3,}/g, '\n\n').trim()
  return { title, url, description, content }
}

function buildPrompt(c: Copy): string {
  const { title, url, description, content } = readPage()
  const head = c.preamble.replace('{title}', title).replace('{url}', url).replace('{desc}', description).trim()
  return `${head}\n\n---\n${content}\n---\n\n${c.ask}`
}

export function AiDiscussBar() {
  const lang = useLang()
  const pathname = usePathname()
  const c = COPY[lang] ?? COPY.en
  const [toast, setToast] = useState<string | null>(null)
  const [manualText, setManualText] = useState<string | null>(null)

  if (!pathname || !SHOW_RE.test(pathname)) return null

  const handleClick = async (p: Platform) => {
    const prompt = buildPrompt(c)
    setManualText(null)
    const prefillUrl = p.prefill?.(prompt)
    if (prefillUrl && prefillUrl.length <= MAX_PREFILL_URL_CHARS) {
      window.open(prefillUrl, '_blank', 'noopener')
      setToast(c.sent)
      return
    }
    // Open synchronously inside the gesture (before any await) so popup blockers allow it.
    window.open(p.url, '_blank', 'noopener')
    try {
      await navigator.clipboard.writeText(prompt)
      setToast(c.copied)
    } catch {
      setToast(c.manual)
      setManualText(prompt)
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-10" aria-labelledby="ai-discuss-heading">
      <h2 id="ai-discuss-heading" className="text-lg font-semibold text-text-primary mb-3">
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
          rows={6}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-2 w-full bg-card border border-primary/20 rounded-lg p-3 text-sm text-text-secondary"
        />
      )}
    </section>
  )
}
