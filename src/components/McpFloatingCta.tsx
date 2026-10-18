'use client'

/**
 * McpFloatingCta
 * ---------------
 * Small floating pill (bottom-right) that links straight to /mcp-stats, the
 * page for PromptQuorum's MCP server. Replaces the former Beta pill
 * (BetaFloatingCta), which expanded into a download card.
 *
 * Mounted once in the root layout, so it resolves its language from the URL
 * via useLang() rather than receiving initialLang as a prop.
 */

import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'

// Already on the MCP page, or on pages that carry their own CTA.
const HIDDEN_PATH_PATTERNS = [/\/mcp-stats(\/|$)/, /\/download(\/|$)/]

const ARIA: Record<string, string> = {
  en: 'PromptQuorum MCP server',
  de: 'PromptQuorum MCP-Server',
  fr: 'Serveur MCP PromptQuorum',
  es: 'Servidor MCP de PromptQuorum',
  pt: 'Servidor MCP do PromptQuorum',
  ja: 'PromptQuorum MCPサーバー',
  zh: 'PromptQuorum MCP 服务器',
  ko: 'PromptQuorum MCP 서버',
  ar: 'خادم MCP من PromptQuorum',
}

export function McpFloatingCta() {
  const pathname = usePathname()
  const lang = useLang()
  if (pathname && HIDDEN_PATH_PATTERNS.some((re) => re.test(pathname))) return null

  const href = lang === 'en' ? '/mcp-stats' : `/${lang}/mcp-stats`

  return (
    <a
      href={href}
      aria-label={ARIA[lang] ?? ARIA.en}
      onClick={() => {
        try {
          window.umami?.track('mcp_fab_click', { source_page: pathname })
        } catch {
          // silent
        }
      }}
      className="fixed z-[80] bottom-20 right-4 md:bottom-6 md:right-6 flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg opacity-90 transition-opacity hover:opacity-100"
    >
      MCP
    </a>
  )
}
