/**
 * IndexNow utility for notifying Bing Search of new/updated URLs
 * https://www.indexnow.org/
 */

const BING_INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'eb7d1cdb86c44057b4ae4694d5c4ba7e'
const SITE_HOST = 'www.promptquorum.com'
const KEY_LOCATION = 'https://www.promptquorum.com/indexnow.json'

export interface IndexNowRequest {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

/**
 * Submit URLs to Bing IndexNow
 * @param urls Array of full URLs to submit
 * @returns Response from Bing IndexNow API
 */
export async function submitToBingIndexNow(urls: string[]): Promise<{ success: boolean; status: number; message?: string }> {
  if (!urls || urls.length === 0) {
    return { success: false, status: 400, message: 'No URLs provided' }
  }

  const payload: IndexNowRequest = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  try {
    const response = await fetch(BING_INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok || response.status === 202) {
      return { success: true, status: response.status }
    } else {
      const errorText = await response.text()
      return { success: false, status: response.status, message: errorText }
    }
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Build a Prompt Engineering article URL
 */
export function buildArticleUrl(slug: string): string {
  return `https://www.promptquorum.com/prompt-engineering/${slug}`
}

/**
 * Build a blog article URL
 */
export function buildBlogUrl(slug: string): string {
  return `https://www.promptquorum.com/blog/${slug}`
}
