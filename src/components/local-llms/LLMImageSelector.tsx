'use client'

import { useState } from 'react'
import { LLMPipelineFlow } from './LLMPipelineFlow'
import { LLMRamBar } from './LLMRamBar'
import { LLMSpeedTiers } from './LLMSpeedTiers'
import { LLMCloudVsLocal } from './LLMCloudVsLocal'
import { LLMModelBubbles } from './LLMModelBubbles'

const COMPONENTS = [
  { id: 0, name: 'Pipeline Flow', component: LLMPipelineFlow, position: 'intro' },
  { id: 1, name: 'RAM Selector', component: LLMRamBar, position: 'step2' },
  { id: 2, name: 'Speed Tiers', component: LLMSpeedTiers, position: 'speed' },
  { id: 3, name: 'Cloud vs Local', component: LLMCloudVsLocal, position: 'intro' },
  { id: 4, name: 'Model Bubbles', component: LLMModelBubbles, position: 'step2' },
]

interface LLMImageSelectorProps {
  defaultSelected?: number
}

export function LLMImageSelector({ defaultSelected = 0 }: LLMImageSelectorProps) {
  const [selectedId, setSelectedId] = useState(defaultSelected)

  const SelectedComponent = COMPONENTS[selectedId]?.component || LLMPipelineFlow

  return (
    <div className="my-8">
      {/* Selector strip */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 justify-center flex-wrap">
        {COMPONENTS.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setSelectedId(comp.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              selectedId === comp.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-primary/10 text-primary hover:bg-primary/20'
            }`}
            aria-pressed={selectedId === comp.id}
          >
            {comp.name}
          </button>
        ))}
      </div>

      {/* Selected component */}
      <div className="relative">
        <SelectedComponent />
      </div>

      {/* Dev helper: show selected position */}
      <p className="text-xs text-text-secondary text-center mt-4 opacity-60">
        Position: {COMPONENTS[selectedId]?.position}
      </p>
    </div>
  )
}
