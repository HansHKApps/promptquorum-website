#!/usr/bin/env node
/**
 * IndexNow post-build submission script
  * Reads all URLs from the live sitemap and submits them to IndexNow in batch.
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
             process.env.INDEXNOW_KEY || 'eb7d1cdb86c44057b4ae4694d5c4ba7e';
             const SITE_HOST: string =
               process.env.SITE_HOST || 'www.promptquorum.com';
               const SITEMAP_URL: string = `https://${SITE_HOST}/sitemap.xml`;
               const INDEXNOW_ENDPOINT: string = 'https://api.indexnow.org/IndexNow';
               const KEY_LOCATION: string = `https://${SITE_HOST}/indexnow.json`;

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
                                                                                                                   function extractUrls(xml: string): string[] {
                                                                                                                     const matches = xml.matchAll(/<loc>\s*(https?:\/\/[^<]+?)\s*<\/loc>/gi);
                                                                                                                       return Array.from(matches, (m) => m[1]);
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
                                                                                                                                                                               console.log(`📡 Fetching sitemap from ${SITEMAP_URL}…`);
                                                                                                                                                                                 const xml = await fetchText(SITEMAP_URL);
                                                                                                                                                                                 
                                                                                                                                                                                   const urls = extractUrls(xml);
                                                                                                                                                                                     if (urls.length === 0) {
                                                                                                                                                                                         console.error('❌ No <loc> URLs found in sitemap. Aborting.');
                                                                                                                                                                                             process.exit(1);
                                                                                                                                                                                               }
                                                                                                                                                                                                 console.log(`📋 Found ${urls.length} URL(s) in sitemap.`);
                                                                                                                                                                                                 
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
