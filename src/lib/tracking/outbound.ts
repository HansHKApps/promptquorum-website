import { track } from '@vercel/analytics'

export type OutboundPosition = 'in-body' | 'cta-box' | 'comparison-table' | 'resources' | 'footer'
export type OutboundCluster = 'local-llms' | 'prompt-engineering' | 'power-local-llm'

export interface OutboundClickParams {
  url: string
  article: string
  cluster: OutboundCluster
  lang: string
  position: OutboundPosition
}

const VENDOR_MAP: Record<string, string> = {
  'www.hetzner.com': 'hetzner',
  'www.hetzner.de': 'hetzner',
  'hetzner.com': 'hetzner',
  'hetzner.de': 'hetzner',
  'ollama.com': 'ollama',
  'ollama.ai': 'ollama',
  'lmstudio.ai': 'lm-studio',
  'huggingface.co': 'huggingface',
  'docs.anthropic.com': 'anthropic',
  'www.anthropic.com': 'anthropic',
  'anthropic.com': 'anthropic',
  'platform.openai.com': 'openai',
  'openai.com': 'openai',
  'modelcontextprotocol.io': 'mcp',
  'www.nist.gov': 'nist',
  'nist.gov': 'nist',
  'eur-lex.europa.eu': 'eur-lex',
  'oecd.ai': 'oecd',
  'digital-strategy.ec.europa.eu': 'ec-europa',
  'ec.europa.eu': 'ec-europa',
  'www.aisi.gov.uk': 'aisi',
  'aisi.gov.uk': 'aisi',
  'www.gov.uk': 'gov-uk',
  'gov.uk': 'gov-uk',
}

export const extractDomain = (url: string): string => {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

export const extractVendor = (url: string): string => {
  const hostname = extractDomain(url)
  return VENDOR_MAP[hostname] ?? hostname
}

export function trackOutboundClick(p: OutboundClickParams): void {
  const payload = {
    vendor: extractVendor(p.url),
    article: p.article,
    cluster: p.cluster,
    lang: p.lang,
    position: p.position,
    target_domain: extractDomain(p.url),
  }

  // Umami
  try {
    window.umami?.track('outbound_click', payload)
  } catch {
    // silent — umami might be blocked
  }

  // Vercel Analytics
  try {
    track('outbound_click', payload)
  } catch {
    // silent
  }

  // GA4
  try {
    ;(window as any).gtag?.('event', 'outbound_click', payload)
  } catch {
    // silent
  }
}
