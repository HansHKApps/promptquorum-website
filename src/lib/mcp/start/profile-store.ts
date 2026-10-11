// Pseudonymous profile storage for the MCP `start` / consent flow.
//
// Data minimisation: a row holds ONLY consent_at, consent_version, lang,
// created_at and last_seen_at. No IP, no user agent, no client name, no query
// text, no conversation content. The profile code is a 128+ bit random bearer
// secret that is never stored: the key is HMAC-SHA256(pepper, code). Rows
// expire by Redis TTL (6 months, refreshed on use), so no cron is needed.

import { createHmac, randomBytes } from 'crypto'
import { Redis } from '@upstash/redis'
import { PROFILE_TTL_MONTHS, type StartLang } from './copy'

export const PROFILE_TTL_SECONDS = Math.round(PROFILE_TTL_MONTHS * 30 * 24 * 60 * 60)
const KEY_PREFIX = 'mcp:profile:'
const B32 = 'abcdefghijklmnopqrstuvwxyz234567'
const CODE_CHARS = 26 // 26 base32 chars = 130 bits
const CODE_RE = /^pq[a-z2-7]{26}$/

export interface ProfileRecord {
  created_at: string
  consent_at: string
  consent_version: string
  lang?: StartLang
  last_seen_at: string
}

export interface ProfileStore {
  /** Creates one new profile and returns its plaintext code (shown once). */
  create(input: { consent_version: string; lang?: StartLang }): Promise<string>
  /** Returns the profile and refreshes its expiry, or null if unknown/expired/malformed. */
  get(code: string): Promise<ProfileRecord | null>
  setLang(code: string, lang: StartLang): Promise<boolean>
  delete(code: string): Promise<boolean>
}

export function generateProfileCode(bytes: Buffer = randomBytes(17)): string {
  // 17 random bytes = 136 bits; take 26 base32 chars (130 bits).
  let bits = 0
  let acc = 0
  let out = ''
  for (const b of bytes) {
    acc = (acc << 8) | b
    bits += 8
    while (bits >= 5 && out.length < CODE_CHARS) {
      out += B32[(acc >>> (bits - 5)) & 31]
      bits -= 5
    }
    acc &= (1 << bits) - 1
    if (out.length >= CODE_CHARS) break
  }
  return `pq-${out.slice(0, 5)}-${out.slice(5, 10)}-${out.slice(10, 15)}-${out.slice(15, 20)}-${out.slice(20, 26)}`
}

/** Canonical form used for hashing; returns null if it is not a valid code. */
export function normalizeProfileCode(input: unknown): string | null {
  if (typeof input !== 'string') return null
  const flat = input.toLowerCase().replace(/[\s-]/g, '')
  return CODE_RE.test(flat) ? flat : null
}

export function hashProfileCode(canonical: string, pepper: string): string {
  return createHmac('sha256', pepper).update(canonical).digest('hex')
}

interface RedisLike {
  set(key: string, value: string, opts: { ex: number }): Promise<unknown>
  get<T = unknown>(key: string): Promise<T | null>
  expire(key: string, seconds: number): Promise<unknown>
  del(key: string): Promise<number>
}

export function createRedisProfileStore(redis: RedisLike, pepper: string, now: () => Date = () => new Date()): ProfileStore {
  const keyFor = (canonical: string) => KEY_PREFIX + hashProfileCode(canonical, pepper)
  const read = async (canonical: string): Promise<ProfileRecord | null> => {
    const raw = await redis.get<ProfileRecord | string>(keyFor(canonical))
    if (!raw) return null
    return typeof raw === 'string' ? (JSON.parse(raw) as ProfileRecord) : raw
  }
  return {
    async create({ consent_version, lang }) {
      const code = generateProfileCode()
      const canonical = normalizeProfileCode(code)!
      const ts = now().toISOString()
      const rec: ProfileRecord = { created_at: ts, consent_at: ts, consent_version, last_seen_at: ts, ...(lang ? { lang } : {}) }
      await redis.set(keyFor(canonical), JSON.stringify(rec), { ex: PROFILE_TTL_SECONDS })
      return code
    },
    async get(code) {
      const canonical = normalizeProfileCode(code)
      if (!canonical) return null
      const rec = await read(canonical)
      if (!rec) return null
      const next: ProfileRecord = { ...rec, last_seen_at: now().toISOString() }
      await redis.set(keyFor(canonical), JSON.stringify(next), { ex: PROFILE_TTL_SECONDS })
      return next
    },
    async setLang(code, lang) {
      const canonical = normalizeProfileCode(code)
      if (!canonical) return false
      const rec = await read(canonical)
      if (!rec) return false
      await redis.set(keyFor(canonical), JSON.stringify({ ...rec, lang, last_seen_at: now().toISOString() }), { ex: PROFILE_TTL_SECONDS })
      return true
    },
    async delete(code) {
      const canonical = normalizeProfileCode(code)
      if (!canonical) return false
      return (await redis.del(keyFor(canonical))) > 0
    },
  }
}

/** In-memory store with TTL emulation, used by scripts/check-mcp-start.ts. */
export function createMemoryProfileStore(now: () => Date = () => new Date()) {
  const rows = new Map<string, { rec: ProfileRecord; expiresAt: number }>()
  const pepper = 'test-pepper'
  const fake: RedisLike = {
    async set(key, value, opts) {
      rows.set(key, { rec: JSON.parse(value) as ProfileRecord, expiresAt: now().getTime() + opts.ex * 1000 })
      return 'OK'
    },
    async get<T>(key: string) {
      const row = rows.get(key)
      if (!row) return null
      if (row.expiresAt <= now().getTime()) {
        rows.delete(key)
        return null
      }
      return row.rec as unknown as T
    },
    async expire() {
      return 1
    },
    async del(key) {
      return rows.delete(key) ? 1 : 0
    },
  }
  return { store: createRedisProfileStore(fake, pepper, now), rows, pepper }
}

/**
 * Real store from env. Returns null (→ "saving not available", nothing stored)
 * unless a dedicated profile Redis, a pepper AND an explicit region label are
 * configured. This is deliberate: personal data must never silently fall back
 * to the general-purpose Redis whose region is unknown.
 */
export function profileStoreFromEnv(): { store: ProfileStore; region: string } | null {
  const url = process.env.MCP_PROFILE_REDIS_URL
  const token = process.env.MCP_PROFILE_REDIS_TOKEN
  const pepper = process.env.MCP_PROFILE_PEPPER
  const region = process.env.MCP_PROFILE_REGION
  if (!url || !token || !pepper || !region) return null
  const redis = new Redis({ url, token })
  return { store: createRedisProfileStore(redis as unknown as RedisLike, pepper), region }
}
