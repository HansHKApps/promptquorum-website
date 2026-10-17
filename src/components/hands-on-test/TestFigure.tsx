'use client'

import { useState } from 'react'
import type { HandsOnImage, HandsOnUi } from '@/lib/hands-on-tests'
import { ImageLightbox } from '@/components/ImageLightbox'

/** Alt, caption, width and height come straight from images/manifest.json. Click opens the shared lightbox. */
export function TestFigure({ image, ui }: { image: HandsOnImage; ui: HandsOnUi }) {
  const [open, setOpen] = useState(false)
  return (
    <figure id={`fig-${image.id}`} className="my-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${ui.enlarge} ${image.alt}`}
        className="mx-auto block cursor-zoom-in"
      >
        <img
          src={`/images/${image.file}`}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={image.loading}
          decoding="async"
          {...(image.loading === 'eager' ? { fetchPriority: 'high' as const } : {})}
          className="mx-auto h-auto max-h-[560px] w-auto max-w-full rounded-md border border-border bg-white"
        />
      </button>
      <figcaption className="mt-2 max-w-prose text-sm text-text-muted">
        <span className="me-1.5 text-xs font-semibold uppercase tracking-wide text-text-primary">{ui.figure} {image.figure}</span>
        {image.caption}
      </figcaption>
      {open && (
        <ImageLightbox
          src={`/images/${image.file}`}
          alt={image.alt}
          caption={`${ui.figure} ${image.figure}. ${image.caption}`}
          onClose={() => setOpen(false)}
        />
      )}
    </figure>
  )
}
