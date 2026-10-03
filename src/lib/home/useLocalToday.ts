import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * The visitor's current local date (midnight), or null during server render and hydration.
 * useSyncExternalStore gives the server snapshot (null) first and swaps in the client snapshot after
 * hydration with no mismatch warning — and unlike setState-in-an-effect it is the sanctioned way to
 * read a browser-only value. The snapshot is the date STRING so it stays referentially stable between
 * calls (a fresh Date object per call would loop).
 */
export function useLocalToday(): Date | null {
  const day = useSyncExternalStore(
    subscribe,
    () => new Date().toDateString(),
    () => null,
  )
  return day ? new Date(day) : null
}
