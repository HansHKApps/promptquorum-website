'use client'

// Copy-to-clipboard button for the MCP endpoint URL on /mcp-stats. Falls back
// to a hidden textarea where the async Clipboard API is unavailable (non-HTTPS,
// older browsers). Labels are localized; the URL itself is never translated.

import { useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'

const COPY: Record<Language, { copy: string; copied: string; aria: string }> = {
  en: { copy: 'Copy', copied: 'Copied ✓', aria: 'Copy the MCP server URL' },
  de: { copy: 'Kopieren', copied: 'Kopiert ✓', aria: 'MCP-Server-URL kopieren' },
  fr: { copy: 'Copier', copied: 'Copié ✓', aria: 'Copier l\'URL du serveur MCP' },
  ja: { copy: 'コピー', copied: 'コピーしました ✓', aria: 'MCPサーバーのURLをコピー' },
  zh: { copy: '复制', copied: '已复制 ✓', aria: '复制 MCP 服务器地址' },
  es: { copy: 'Copiar', copied: 'Copiado ✓', aria: 'Copiar la URL del servidor MCP' },
  pt: { copy: 'Copiar', copied: 'Copiado ✓', aria: 'Copiar a URL do servidor MCP' },
  ar: { copy: 'نسخ', copied: 'تم النسخ ✓', aria: 'نسخ رابط خادم MCP' },
  ko: { copy: '복사', copied: '복사됨 ✓', aria: 'MCP 서버 URL 복사' },
}

export function CopyEndpointButton({ text, lang }: { text: string; lang: Language }) {
  const [copied, setCopied] = useState(false)
  const labels = COPY[lang] ?? COPY.en

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } finally {
        document.body.removeChild(ta)
      }
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={labels.aria}
      className="inline-flex items-center justify-center rounded-lg border border-primary/30 bg-white px-3 py-2 text-xs font-semibold text-text-primary hover:bg-primary/5"
    >
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  )
}
