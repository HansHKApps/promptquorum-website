// PromptQuorum Academy — the learner's cabinet: every program taken (lessons, test results, certificate PDF and Course
// Documentation PDF) kept in this browser's own database (IndexedDB) on the learner's computer, so it can be opened
// again later. NOTHING is sent to or stored at PromptQuorum; there is no copy anywhere else, so the learner is warned
// and can download one backup file. Browser only; the pure parts (summary, backup encode/decode) are unit-tested.

import { programmeScore } from './scoring'
import { lessonsDone } from './progress'
import { migrateAcademyState } from './store'
import type { Programme } from './types'

export const CABINET_FLAG_KEY = 'pq_academy_cabinet'
export type CabinetFlag = 'on' | 'declined' | null
export type CabinetFileKind = 'certificate' | 'documentation'

const DB_NAME = 'pq_academy_cabinet'
const STORE = 'entries'
const BACKUP_FORMAT = 'promptquorum-academy-cabinet'

export interface CabinetFile {
  filename: string
  blob: Blob
}

export interface CabinetEntry {
  id: string
  subject: string
  language: string
  createdAt: string
  updatedAt: string
  lessonsDone: number
  lessonsTotal: number
  /** final test percent of the counting attempt, null = no final test yet */
  percent: number | null
  passed: boolean
  programme: Programme
  certificate?: CabinetFile
  documentation?: CabinetFile
}

/** What the list shows, derived from a programme. Pure. */
export function summarize(p: Programme): Pick<CabinetEntry, 'id' | 'subject' | 'language' | 'createdAt' | 'lessonsDone' | 'lessonsTotal' | 'percent' | 'passed'> {
  const score = programmeScore(p)
  return {
    id: p.id,
    subject: p.subject,
    language: p.language,
    createdAt: p.createdAt,
    lessonsDone: lessonsDone(p),
    lessonsTotal: p.lessons.length,
    percent: score ? Math.round(score.percent) : null,
    passed: !!score?.passed,
  }
}

export function getCabinetFlag(): CabinetFlag {
  try {
    const v = localStorage.getItem(CABINET_FLAG_KEY)
    return v === 'on' || v === 'declined' ? v : null
  } catch {
    return null
  }
}
export function setCabinetFlag(v: CabinetFlag): void {
  try {
    if (v) localStorage.setItem(CABINET_FLAG_KEY, v)
    else localStorage.removeItem(CABINET_FLAG_KEY)
  } catch {
    /* blocked */
  }
}

/** False in browsers or windows without IndexedDB (some private windows). */
export function cabinetAvailable(): boolean {
  try {
    return typeof indexedDB !== 'undefined' && indexedDB !== null
  } catch {
    return false
  }
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE, { keyPath: 'id' })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

function tx<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode)
        const req = run(t.objectStore(STORE))
        t.oncomplete = () => {
          db.close()
          resolve(req.result)
        }
        t.onerror = t.onabort = () => {
          db.close()
          reject(t.error)
        }
      }),
  )
}

export async function listEntries(): Promise<CabinetEntry[]> {
  const all = (await tx('readonly', (s) => s.getAll())) as CabinetEntry[]
  return all.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

async function getEntry(id: string): Promise<CabinetEntry | undefined> {
  return (await tx('readonly', (s) => s.get(id))) as CabinetEntry | undefined
}

/** Saves (or updates) a program; files already stored for it are kept. */
export async function putProgramme(p: Programme): Promise<void> {
  const old = await getEntry(p.id)
  const entry: CabinetEntry = { ...old, ...summarize(p), updatedAt: new Date().toISOString(), programme: p }
  await tx('readwrite', (s) => s.put(entry))
}

export async function putFile(p: Programme, kind: CabinetFileKind, file: CabinetFile): Promise<void> {
  const old = await getEntry(p.id)
  const entry: CabinetEntry = { ...old, ...summarize(p), updatedAt: new Date().toISOString(), programme: p, [kind]: file }
  await tx('readwrite', (s) => s.put(entry))
}

export async function deleteEntry(id: string): Promise<void> {
  await tx('readwrite', (s) => s.delete(id))
}

/** "Delete my data": the whole database and the flag. */
export async function clearCabinet(): Promise<void> {
  setCabinetFlag(null)
  if (!cabinetAvailable()) return
  await new Promise<void>((resolve) => {
    const req = indexedDB.deleteDatabase(DB_NAME)
    req.onsuccess = req.onerror = req.onblocked = () => resolve()
  })
}

/** Asks the browser not to clear the cabinet when it is short of space (best effort, may be refused). */
export function requestPersistence(): void {
  try {
    void navigator.storage?.persist?.()
  } catch {
    /* ignore */
  }
}

// ------------------------------------------------------------------------------------------------ backup file

function toBase64(bytes: Uint8Array): string {
  let s = ''
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
  return btoa(s)
}
function fromBase64(b64: string): Uint8Array {
  const s = atob(b64)
  const out = new Uint8Array(s.length)
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i)
  return out
}

async function encodeFile(f?: CabinetFile) {
  return f ? { filename: f.filename, base64: toBase64(new Uint8Array(await f.blob.arrayBuffer())) } : undefined
}
function decodeFile(f: unknown): CabinetFile | undefined {
  const o = f as { filename?: unknown; base64?: unknown } | undefined
  if (!o || typeof o.filename !== 'string' || typeof o.base64 !== 'string') return undefined
  return { filename: o.filename.slice(0, 200), blob: new Blob([fromBase64(o.base64) as BlobPart], { type: 'application/pdf' }) }
}

/** One JSON text with every program and PDF in the cabinet. */
export async function encodeBackup(entries: CabinetEntry[]): Promise<string> {
  const out = []
  for (const e of entries) {
    const { certificate, documentation, ...rest } = e
    out.push({ ...rest, certificate: await encodeFile(certificate), documentation: await encodeFile(documentation) })
  }
  return JSON.stringify({ format: BACKUP_FORMAT, version: 1, exportedAt: new Date().toISOString(), entries: out })
}

/** Backup text -> entries. Programs are checked like saved progress; anything unreadable is skipped. Throws if it is no backup. */
export function decodeBackup(text: string): CabinetEntry[] {
  const raw = JSON.parse(text) as { format?: unknown; entries?: unknown }
  if (raw.format !== BACKUP_FORMAT || !Array.isArray(raw.entries)) throw new Error('not a cabinet backup')
  const out: CabinetEntry[] = []
  for (const r of raw.entries as Record<string, unknown>[]) {
    const state = migrateAcademyState({ version: 1, view: 'programme', programme: r?.programme })
    const p = state.programme
    if (!p || typeof p.id !== 'string' || !Array.isArray(p.lessons) || typeof p.progress !== 'object') continue
    out.push({ ...summarize(p), updatedAt: typeof r.updatedAt === 'string' ? r.updatedAt : new Date().toISOString(), programme: p, certificate: decodeFile(r.certificate), documentation: decodeFile(r.documentation) })
  }
  return out
}

export async function restoreEntries(entries: CabinetEntry[]): Promise<void> {
  for (const e of entries) await tx('readwrite', (s) => s.put(e))
}
