// Memory tier of a catalog variant, by the weights actually loaded (GiB).
// Shared by scripts/catalog-build.mjs (assigns it) and scripts/validate-catalog.mjs (re-derives and checks it).
// Thresholds are editorial buckets, not hardware facts: tiny fits any phone/8 GB machine,
// small ~16 GB Macs, mid ~24 GB, large 32-64 GB, xl workstation class.
export function tierFor(gib) {
  if (gib < 2.5) return 'tiny'
  if (gib < 8) return 'small'
  if (gib < 16) return 'mid'
  if (gib < 40) return 'large'
  return 'xl'
}
