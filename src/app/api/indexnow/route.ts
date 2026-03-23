import { submitToBingIndexNow } from '@/lib/indexnow'
import { NextRequest, NextResponse } from 'next/server'

/**
 * API endpoint for submitting URLs to Bing IndexNow
 *
 * POST /api/indexnow
 * Body: { urls: string[] }
 *
 * Example:
 * curl -X POST http://localhost:3000/api/indexnow \
 *   -H "Content-Type: application/json" \
 *   -d '{"urls": ["https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt"]}'
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { urls } = body

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'urls must be a non-empty array' },
        { status: 400 }
      )
    }

    // Validate URLs
    const validUrls = urls.filter((url) => {
      try {
        new URL(url)
        return url.startsWith('https://www.promptquorum.com')
      } catch {
        return false
      }
    })

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid promptquorum.com URLs provided' },
        { status: 400 }
      )
    }

    // Submit to Bing IndexNow
    const result = await submitToBingIndexNow(validUrls)

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          submitted: validUrls.length,
          message: `Successfully submitted ${validUrls.length} URL(s) to Bing IndexNow`,
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: result.message || 'Failed to submit to Bing IndexNow' },
        { status: result.status }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
