#!/usr/bin/env node
// Deletes one registered Academy certificate record by ID (deletion request by email, SPEC 12.6 / 17.11).
// The verification page then shows "No record found". The sequential number is not reused.
// Run: npm run academy:delete-certificate -- PQA-2026-XXXXXXXXXX

import { Redis } from '@upstash/redis'

const id = (process.argv[2] ?? '').toUpperCase()
if (!/^PQA-\d{4}-[0-9A-HJKMNP-TV-Z]{10}$/.test(id)) {
  console.error('usage: npm run academy:delete-certificate -- PQA-YYYY-XXXXXXXXXX')
  process.exit(1)
}
const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
if (!url || !token) {
  console.error('academy-delete-certificate: no Redis credentials in the environment (.env.local)')
  process.exit(1)
}
const redis = new Redis({ url, token })
const existed = await redis.exists(`academy:cert:${id}`)
await redis.del(`academy:cert:${id}`)
console.log(existed ? `Deleted the record for ${id}.` : `No record found for ${id}.`)
