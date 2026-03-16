import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://www.promptquorum.com/</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/R-bDPhT5EMo/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>PromptQuorum Demo — One Prompt to 25+ AI Models</video:title>
      <video:description>Watch how PromptQuorum works: write a structured prompt using 9 frameworks, optimize it with your own LLM, dispatch to ChatGPT, Claude, Gemini and 25+ AI models simultaneously, then run Quorum consensus analysis across all responses.</video:description>
      <video:player_loc>https://www.youtube.com/embed/R-bDPhT5EMo</video:player_loc>
      <video:duration>120</video:duration>
      <video:publication_date>2026-03-13</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
