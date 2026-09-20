'use client'

import { trackAffiliateClick, SPONSORED_LABEL } from '@/lib/tracking/affiliate'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'

interface ToolAffiliateLinkProps {
  tool: Pick<ToolRecord, 'name' | 'affiliate'>
  lang: string
  /** Visible link text. Defaults to the tool name. */
  label?: string
}

/**
 * Outbound link for a directory tool whose record carries an enrolled `affiliate` programme.
 * Unlike AffiliateLink (hardware buying guides, no programme yet, rel="nofollow"), this is only
 * ever rendered for a real programme, so it carries rel="sponsored nofollow" and a visible
 * "Sponsored" label. Renders nothing when the tool has no `affiliate` entry — callers fall back
 * to the plain outbound link.
 */
export function ToolAffiliateLink({ tool, lang, label }: ToolAffiliateLinkProps) {
  const affiliate = tool.affiliate
  if (!affiliate) return null

  return (
    <a
      href={affiliate.url}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={() =>
        trackAffiliateClick({
          url: affiliate.url,
          productName: tool.name,
          productCategory: 'software-directory',
          lang,
        })
      }
      className="affiliate-link inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
    >
      {label ?? tool.name}
      <span className="text-[10px] uppercase tracking-wide text-text-secondary">
        ({SPONSORED_LABEL[lang] ?? SPONSORED_LABEL.en})
      </span>
    </a>
  )
}
