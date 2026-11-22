// Keep the last good number when Redis cannot answer (outage, exhausted request quota, missing env vars).
//
// The public counters (homepage tiles, /askhans, /academy, /mcp-stats) used to swallow a Redis error and
// return zeros, so an outage showed up as "0 answers" and a static rebuild could freeze that zero for a day.
// Now the readers THROW on failure and this wrapper decides what to show instead:
//   1. the last successful read in this server process (memory),
//   2. otherwise a committed floor from `counter-floor.json` (last values known to be real),
//   3. otherwise the caller's empty value.
// Counters only ever grow, so an old number is always a safe thing to show; a successful read replaces it.
// Failures are logged once per key per minute, and are never cached by unstable_cache (it does not cache throws).

import floorJson from './counter-floor.json'

type Floor = Record<string, Record<string, number | string | null> | undefined>
const FLOOR = floorJson as unknown as Floor

const good = new Map<string, unknown>()
const lastLog = new Map<string, number>()

export async function keepLastGood<T>(
  key: string,
  read: () => Promise<T>,
  /** Empty value; `floor` is the committed minimum for this key, if there is one. */
  empty: (floor: Record<string, number | string | null> | undefined) => T,
): Promise<T> {
  try {
    const value = await read()
    good.set(key, value)
    return value
  } catch (err) {
    const now = Date.now()
    if (now - (lastLog.get(key) ?? 0) > 60_000) {
      lastLog.set(key, now)
      console.error(`[counters] ${key}: Redis read failed, showing last known numbers:`, err instanceof Error ? err.message : err)
    }
    if (good.has(key)) return good.get(key) as T
    return empty(FLOOR[key])
  }
}
