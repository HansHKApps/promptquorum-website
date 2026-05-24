import { submitToBingIndexNow } from '@/lib/indexnow'
import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'

export async function POST(request: NextRequest) {
  // Auth gate: caller must supply X-IndexNow-Secret matching INDEXNOW_SECRET env var
  const provided = request.headers.get('x-indexnow-secret') ?? ''
  const expected = process.env.INDEXNOW_SECRET ?? ''
  let authorized = false
  try {
    authorized =
      provided.length > 0 &&
      provided.length === expected.length &&
      timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
  } catch {
    authorized = false
  }
  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

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
