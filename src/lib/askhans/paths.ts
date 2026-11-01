// Key for a PromptQuorum page, independent of language prefix, host, query string, hash and trailing slash:
// "https://www.promptquorum.com/de/power-local-llm/x/?a=1#b" and "/power-local-llm/x" share the key "/power-local-llm/x".

export function normalizePagePath(url: string): string {
  const path = url.replace(/^https?:\/\/(?:www\.)?promptquorum\.com/i, '').split('#')[0].split('?')[0]
  const noLocale = path.replace(/^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/, '')
  return (noLocale.replace(/\/+$/, '') || '/')
}
