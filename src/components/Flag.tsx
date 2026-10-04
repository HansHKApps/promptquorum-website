/**
 * Country flag rendered from a self-hosted SVG (public/flags, from the MIT-licensed
 * flag-icons set) instead of an emoji: emoji flags show as plain letters ("US") on
 * Windows, SVGs look identical everywhere.
 */
export function Flag({
  country,
  label,
  className = '',
}: {
  /** Lowercase ISO 3166-1 alpha-2 code matching a file in public/flags (us, de, jp, …). */
  country: string
  /** Accessible name, usually the language or country name. */
  label: string
  className?: string
}) {
  return (
    <img
      src={`/flags/${country}.svg`}
      alt={label}
      title={label}
      width={20}
      height={15}
      loading="lazy"
      decoding="async"
      className={`inline-block h-[15px] w-5 shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-black/10 ${className}`}
    />
  )
}
