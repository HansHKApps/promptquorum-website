// Source tag for every link that leaves promptquorum.com, so app makers and shops can see in their
// own analytics that a visit came from us (owner rule 2026-10-28). The tag is the same for every
// visitor and carries nothing personal: utm_source is our domain, utm_medium is always "referral",
// utm_campaign says which part of the site sent it.
//
// PromptQuorum has NO affiliate programme (owner, 2026-10-28), so nothing here ever says
// "affiliate", and shop links are not treated differently in the tag. The one exception is Amazon:
// it ignores UTM parameters, so for Amazon we send the plain Referer header instead (see
// isAmazonHost and OutboundUtmTagger) and leave the URL untouched.
//
// Applied at interaction time by OutboundUtmTagger (mounted once in the root layout), so it covers
// directory tiles, drawers, reviews, hub pages, article prose and every future link without each
// call site having to remember it. Server-rendered HTML, JSON-LD, sitemaps, llms.txt and MCP
// output keep the clean URL on purpose.

export const UTM_SOURCE = 'promptquorum.com'

/** Amazon storefronts and its short-link host. Amazon reads the Referer header, not utm_*. */
export const isAmazonHost = (host: string): boolean =>
  /(^|\.)amazon\.(com|de|fr|es|it|nl|se|pl|ca|com\.mx|com\.br|co\.uk|co\.jp|com\.au|in|ae|sa|sg|com\.tr|eg)$/.test(host) ||
  host === 'amzn.to' || host === 'amzn.eu' || host === 'a.co'

/** Our own hosts: never tagged. */
const OWN_HOSTS = ['promptquorum.com']

/**
 * Hosts where a UTM is useless or harmful, matched as the host itself or any subdomain.
 *  - Code hosts and stores: the maker sees nothing, and app stores use their own campaign
 *    parameters (App Store ct/pt, Google Play referrer) which a UTM can break.
 *  - Reference sites, standards bodies and law: no analytics value, and tagging looks spammy.
 *  - Social and chat platforms: the tag is stripped or ignored and the URLs are often canonical IDs.
 */
const SKIP_HOSTS = [
  'github.com', 'githubusercontent.com', 'gitlab.com', 'codeberg.org', 'bitbucket.org',
  'sourceforge.net', 'huggingface.co', 'pypi.org', 'npmjs.com', 'crates.io', 'pkg.go.dev',
  'hub.docker.com', 'ghcr.io', 'formulae.brew.sh', 'snapcraft.io', 'flathub.org',
  'apps.apple.com', 'itunes.apple.com', 'testflight.apple.com', 'play.google.com',
  'microsoft.com', 'chromewebstore.google.com', 'addons.mozilla.org', 'f-droid.org',
  'wikipedia.org', 'wikimedia.org', 'wikidata.org', 'arxiv.org', 'doi.org', 'nature.com',
  'sciencedirect.com', 'acm.org', 'ieee.org', 'openreview.net', 'semanticscholar.org',
  'europa.eu', 'eur-lex.europa.eu', 'nist.gov', 'oecd.ai', 'oecd.org', 'iso.org', 'w3.org',
  'ietf.org', 'schema.org', 'modelcontextprotocol.io',
  'x.com', 'twitter.com', 'linkedin.com', 'facebook.com', 'instagram.com', 'threads.net',
  'youtube.com', 'youtu.be', 'reddit.com', 'discord.com', 'discord.gg', 'telegram.me', 't.me',
  'bsky.app', 'mastodon.social', 'medium.com', 'substack.com', 'news.ycombinator.com',
  'google.com', 'g.co', 'bing.com', 'duckduckgo.com',
]

const matchesHost = (host: string, list: readonly string[]): boolean =>
  list.some((h) => host === h || host.endsWith(`.${h}`))

/** True for government and university hosts, whatever the country (gov.uk, bund.de via .gov, *.edu, *.ac.uk). */
const isInstitutionHost = (host: string): boolean =>
  /(^|\.)(gov|edu|mil)(\.[a-z]{2})?$/.test(host) || /(^|\.)ac\.[a-z]{2}$/.test(host)

/** Should this absolute URL carry our source tag? */
export function shouldTagUrl(url: string): boolean {
  let u: URL
  try {
    u = new URL(url)
  } catch {
    return false
  }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return false
  const host = u.hostname.toLowerCase().replace(/^www\./, '')
  if (!host.includes('.')) return false
  if (matchesHost(host, OWN_HOSTS)) return false
  if (matchesHost(host, SKIP_HOSTS) || isInstitutionHost(host) || isAmazonHost(host)) return false
  // Never overwrite a tag the destination or an affiliate network already set.
  for (const key of u.searchParams.keys()) if (key.startsWith('utm_')) return false
  return true
}

/**
 * Which part of the site sent the visitor, from the page path (locale prefix ignored).
 * Lets a maker tell a directory tile from their own review page from a general article.
 */
export function campaignForPath(pathname: string): string {
  const p = pathname.replace(/^\/(de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/, '').toLowerCase()
  if (p.includes('software-directory') || p.startsWith('/directory')) return 'directory'
  if (/-review\/?$/.test(p)) return 'app-review'
  if (p.includes('-compared') || p.startsWith('/compare')) return 'comparison'
  if (p.startsWith('/prompt-bites')) return 'prompt-bites'
  if (p === '/' || p === '') return 'home'
  return 'article'
}

/**
 * Append the source tag to an outbound URL. Idempotent: returns the input unchanged when the URL
 * should not be tagged or already has a utm_source. Keeps the existing query, the #fragment and the
 * original spelling of the rest of the URL.
 */
export function withUtm(url: string, opts: { campaign: string }): string {
  if (!shouldTagUrl(url)) return url
  const hashAt = url.indexOf('#')
  const hash = hashAt >= 0 ? url.slice(hashAt) : ''
  const base = hashAt >= 0 ? url.slice(0, hashAt) : url
  const sep = base.includes('?') ? (/[?&]$/.test(base) ? '' : '&') : '?'
  const tag =
    `utm_source=${UTM_SOURCE}&utm_medium=referral` +
    `&utm_campaign=${encodeURIComponent(opts.campaign)}`
  return `${base}${sep}${tag}${hash}`
}
