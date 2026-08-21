import type { SVGProps } from 'react'

export function Logo({ size = 36, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PromptQuorum"
      {...props}
    >
      <rect x="10" y="14" width="8" height="36" rx="1" fill="#6750A4" opacity="1" />
      <rect x="22" y="14" width="8" height="36" rx="1" fill="#6750A4" opacity="0.75" />
      <rect x="34" y="14" width="8" height="36" rx="1" fill="#6750A4" opacity="0.5" />
      <rect x="46" y="14" width="8" height="36" rx="1" fill="#6750A4" opacity="0.3" />
    </svg>
  )
}
