// No-op stub. Analytics (Umami, Vercel Analytics + Speed Insights, Microsoft Clarity)
// run cookieless and ungated for every visitor — wired directly in src/app/layout.tsx.
// This component is intentionally retained (and rendered) so the recovery diff stays
// minimal and reversible; deleting it and its layout usage is a separate cleanup.
export function ConsentedAnalytics() {
  return null
}
