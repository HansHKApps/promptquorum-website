'use client';

import { useEffect } from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, caption, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    // The overlay closes on click. The inner wrapper used to be `w-full h-full` with a
    // stopPropagation handler, so it covered the entire viewport and swallowed every
    // click — click-outside-to-close was unreachable and the whole overlay read as dead.
    // The wrapper is now sized to its content, so the dark area around the image closes.
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <figure
        className="relative flex flex-col items-center max-w-full max-h-full m-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain"
        />

        {caption && (
          <figcaption className="text-white text-sm italic mt-4 px-4 text-center max-w-2xl">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
