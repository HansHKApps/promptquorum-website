'use client'

import { useState } from 'react'

const VIDEO_ID = 'R-bDPhT5EMo'

export function YouTubeFacade() {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
        title="PromptQuorum Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="absolute top-0 left-0 w-full h-full group cursor-pointer border-0 p-0 bg-transparent"
      aria-label="Play PromptQuorum demo video"
    >
      <img
        src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
        alt="PromptQuorum demo video thumbnail"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Play button overlay */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-500 transition-colors">
          <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
