#!/usr/bin/env node
/**
 * IndexNow post-build submission script
 * Reads all URLs from the live sitemap and submits them to IndexNow in batch.
 * /sitemap.xml is a <sitemapindex> pointing at child sitemaps under
 * /sitemaps/*.xml — this walks the index and reads real page URLs from each
 * child, rather than assuming /sitemap.xml is itself a flat <urlset>.
 *
 * Usage:
 *   node scripts/indexnow-submit.ts
 *   (or via tsx: npx tsx scripts/indexnow-submit.ts)
 *
 * Env vars:
 *   INDEXNOW_KEY - override the default key (optional)
 *   SITE_HOST    - override the default host (optional)
 */

import https from 'https';
import http from 'http';

const INDEXNOW_KEY: string =
  process.env.INDEXNOW_KEY || '2fd43c75367b4c029c9ea4eef7ad34f8';
const SITE_HOST: string =
  process.env.SITE_HOST || 'www.promptquorum.com';
const SITEMAP_URL: string = `https://${SITE_HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT: string = 'https://api.indexnow.org/IndexNow';
const KEY_LOCATION: string = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

/** Fetch a URL and return its body as a string. */
function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
          res.resume();
          return;
        }
        const chunks: Buffer[] = [];
        res.on('data', (chunk: Buffer) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });
}

/** Parse all <loc> URLs from a sitemap XML string. */
function extractLocs(xml: string): string[] {
  const matches = xml.matchAll(/<loc>\s*(https?:\/\/[^<]+?)\s*<\/loc>/gi);
  return Array.from(matches, (m) => m[1]);
}

/**
 * Fetches /sitemap.xml and returns every real page URL. If it's a
 * <sitemapindex>, walks each child sitemap and collects their <loc> values;
 * if it's a flat <urlset> (defensive fallback), returns its <loc> values
 * directly.
 */
async function fetchAllPageUrls(): Promise<string[]> {
  console.log(`📡 Fetching sitemap from ${SITEMAP_URL}…`);
  const xml = await fetchText(SITEMAP_URL);

  if (!xml.includes('<sitemapindex')) {
    return extractLocs(xml);
  }

  const childSitemaps = extractLocs(xml);
  console.log(`ℹ️  /sitemap.xml is a sitemap index — walking ${childSitemaps.length} child sitemap(s).`);

  const urls: string[] = [];
  for (const child of childSitemaps) {
    console.log(`  📡 Fetching child sitemap: ${child}`);
    const childXml = await fetchText(child);
    urls.push(...extractLocs(childXml));
  }
  return urls;
}

/** POST a batch of URLs to the IndexNow API. */
async function submitBatch(urls: string[]): Promise<void> {
  const payload = JSON.stringify({
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: payload,
  });

  if (response.ok || response.status === 202) {
    console.log(`  ✅ Submitted ${urls.length} URL(s) — HTTP ${response.status}`);
  } else {
    const text = await response.text().catch(() => '');
    throw new Error(`IndexNow returned HTTP ${response.status}: ${text}`);
  }
}

async function main(): Promise<void> {
  const urls = await fetchAllPageUrls();
  if (urls.length === 0) {
    console.error('❌ No <loc> URLs found in sitemap. Aborting.');
    process.exit(1);
  }
  console.log(`📋 Found ${urls.length} URL(s) across the sitemap.`);

  // IndexNow recommends batches of up to 10,000 URLs per request.
  const BATCH_SIZE = 10_000;
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  console.log(
    `🚀 Submitting to IndexNow (${batches.length} batch(es))…`
  );
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`  Batch ${i + 1}/${batches.length} — ${batch.length} URL(s)`);
    await submitBatch(batch);
  }

  console.log('✅ All URLs submitted successfully.');
}

main().catch((err) => {
  console.error('❌ Fatal error:', err.message ?? err);
  process.exit(1);
});
