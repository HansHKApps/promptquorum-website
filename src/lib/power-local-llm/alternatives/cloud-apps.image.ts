import type { CloudApp, CloudAppSource } from './types'

const TURING: CloudAppSource = {
  label: 'Turing Post: Best AI Image Generators in 2026 (12 models compared)',
  url: 'https://www.turingpost.com/p/11-options-for-image-generation',
}
const DECODER: CloudAppSource = {
  label: 'The Decoder: Ideogram 4.0 as an open-weight model',
  url: 'https://the-decoder.com/ideogram-4-0-drops-as-an-open-weight-model-with-native-2k-resolution-and-improved-text-rendering/',
}
const COMPAREGEN: CloudAppSource = {
  label: 'CompareGen: AI image generators, commercial guide 2026',
  url: 'https://www.comparegen.ai/blog/ai-image-generators-commercial-guide-2026',
}

const VERIFIED = '2026-10-03'

// Source note: the sources above are undated trade/review pages whose titles say 2026.
// CompareGen lists Ideogram as closed/cloud-only; The Decoder (fetched 2026-10-03, article dated 2026-06-03)
// confirms open weights for Ideogram 4.0 with a paid commercial license, so we follow The Decoder. No `closest` tier is assigned on an `assumption`
// basis; unverified placements sit at `similar` or lower.

export const IMAGE_CLOUD_APPS: CloudApp[] = [
  {
    id: 'chatgpt-images',
    category: 'image',
    name: 'ChatGPT Images (GPT Image)',
    vendor: 'OpenAI',
    aliases: ['chatgpt images', 'chatgpt image', 'chatgpt image generation', 'gpt image', 'gpt image 2', 'gpt images', 'openai image', 'openai images', 'dall-e', 'dalle', 'dall e 3', 'dall-e 3'],
    summary: 'Closed model inside ChatGPT: conversational editing, text rendering, multi-reference input, API available.',
    localMatches: [
      { slug: 'comfyui', tier: 'similar', basis: 'Node-based runner for open-weight models; FLUX.2 is open-weight with editing and multi-reference input (Turing Post).', confidence: 'assumption' },
      { slug: 'invoke-ai', tier: 'similar', basis: 'Canvas-style editing with inpainting stated in the directory data.', confidence: 'sourced' },
      { slug: 'stableswarmui', tier: 'partial', basis: 'Multi-model UI, but the directory entry shows no release since 2024.', confidence: 'sourced' },
      { slug: 'automatic1111-webui', tier: 'partial', basis: 'Inpainting stated; Stable Diffusion family, no chat-driven editing.', confidence: 'sourced' },
    ],
    gapNote: 'No local app reproduces the chat-driven editing workflow. The closest route is an editing-capable open-weight model in a node or canvas UI.',
    verifiedAt: VERIFIED,
    sources: [TURING, COMPAREGEN],
  },
  {
    id: 'nano-banana',
    category: 'image',
    name: 'Google Nano Banana (Gemini image)',
    vendor: 'Google',
    aliases: ['nano banana', 'nano banana 2', 'nano banana pro', 'gemini image', 'gemini images', 'gemini image generation', 'google nano banana'],
    summary: 'Closed model: fast editing, photorealism, 4K output, multilingual text, search-grounded generation.',
    localMatches: [
      { slug: 'comfyui', tier: 'similar', basis: 'Flexible pipeline for open-weight editing models; no 4K search-grounded equivalent.', confidence: 'assumption' },
      { slug: 'invoke-ai', tier: 'similar', basis: 'Inpainting and node workflows stated in the directory data.', confidence: 'sourced' },
      { slug: 'stableswarmui', tier: 'partial', basis: 'Multi-model UI with node workflow stated; directory shows no release since 2024.', confidence: 'sourced' },
      { slug: 'draw-things', tier: 'partial', basis: 'On-device image generation for macOS and iOS, closed source.', confidence: 'sourced' },
    ],
    gapNote: 'Search-grounded generation (Turing Post) has no local counterpart in the directory.',
    verifiedAt: VERIFIED,
    sources: [TURING],
  },
  {
    id: 'midjourney',
    category: 'image',
    name: 'Midjourney',
    vendor: 'Midjourney, Inc.',
    aliases: ['midjourney', 'mid journey', 'midjourney v7', 'midjourney v8', 'mj'],
    summary: 'Closed model with a web editor (inpainting/outpainting); cinematic, art-directed look; no API (per CompareGen).',
    localMatches: [
      { slug: 'fooocus', tier: 'similar', basis: 'Simple prompt-first UI with minimal tuning, near Midjourney in ease of use. Directory shows no release since 2024.', confidence: 'assumption' },
      { slug: 'invoke-ai', tier: 'similar', basis: 'Canvas editor with inpainting, comparable to Midjourney\'s web editor workflow.', confidence: 'assumption' },
      { slug: 'diffusionbee', tier: 'similar', basis: 'One-click Mac app with inpainting stated in the directory data.', confidence: 'sourced' },
      { slug: 'draw-things', tier: 'similar', basis: 'Polished native macOS/iOS generator.', confidence: 'assumption' },
      { slug: 'stable-diffusion-forge', tier: 'similar', basis: 'Web UI optimised for speed and lower VRAM (directory description).', confidence: 'sourced' },
      { slug: 'comfyui', tier: 'partial', basis: 'Maximum flexibility but a node-graph learning curve.', confidence: 'sourced' },
    ],
    gapNote: 'Midjourney\'s model is proprietary (CompareGen: closed, no API). No local tool reproduces its look; the look depends on the open-weight model you load.',
    verifiedAt: VERIFIED,
    sources: [TURING, COMPAREGEN],
  },
  {
    id: 'adobe-firefly',
    category: 'image',
    name: 'Adobe Firefly',
    vendor: 'Adobe',
    aliases: ['adobe firefly', 'firefly', 'adobe firefly image', 'firefly image model', 'adobe generative fill', 'generative fill'],
    summary: 'Closed, cloud-based; generative fill/expand/recolor, Creative Cloud integration, commercial licensing with enterprise indemnification.',
    localMatches: [
      { slug: 'invoke-ai', tier: 'similar', basis: 'Inpainting canvas, the nearest to generative fill. Outpainting not verified.', confidence: 'assumption' },
      { slug: 'automatic1111-webui', tier: 'similar', basis: 'Inpainting stated; directory shows no release since 2025.', confidence: 'sourced' },
      { slug: 'diffusionbee', tier: 'similar', basis: 'Inpainting stated in the directory data (Mac only).', confidence: 'sourced' },
      { slug: 'comfyui', tier: 'partial', basis: 'Can build fill workflows, but not out of the box.', confidence: 'assumption' },
    ],
    gapNote: 'No local tool integrates with Photoshop/Illustrator or offers Adobe\'s IP indemnification. With local open models the operator carries the licensing responsibility (CompareGen).',
    verifiedAt: VERIFIED,
    sources: [TURING, COMPAREGEN],
  },
  {
    id: 'leonardo-ai',
    category: 'image',
    name: 'Leonardo AI',
    vendor: 'Leonardo.Ai',
    aliases: ['leonardo ai', 'leonardo', 'leonardo.ai', 'leonardo canvas'],
    summary: 'Closed hosted platform: concept art and game assets, canvas editing (inpainting/outpainting), fine-tuning, API.',
    localMatches: [
      { slug: 'invoke-ai', tier: 'closest', basis: 'Canvas editing plus node workflows, both stated in the directory data.', confidence: 'sourced' },
      { slug: 'automatic1111-webui', tier: 'similar', basis: 'Inpainting, extensions and API server stated; directory shows no release since 2025.', confidence: 'sourced' },
      { slug: 'comfyui', tier: 'similar', basis: 'Visual builder and API server stated in the directory data.', confidence: 'sourced' },
      { slug: 'stableswarmui', tier: 'similar', basis: 'Node workflow and extensions stated; directory shows no release since 2024.', confidence: 'sourced' },
      { slug: 'locally-uncensored', tier: 'partial', basis: 'LoRA training stated; image and video in one installer. Not a canvas editor.', confidence: 'sourced' },
    ],
    gapNote: 'Hosted token billing and one-click fine-tuning have no direct local equivalent; local fine-tuning means LoRA tooling.',
    verifiedAt: VERIFIED,
    sources: [TURING, COMPAREGEN],
  },
  {
    id: 'ideogram',
    category: 'image',
    name: 'Ideogram',
    vendor: 'Ideogram AI',
    aliases: ['ideogram', 'ideogram ai', 'ideogram 4', 'ideogram 4.0'],
    summary: 'Typography and poster focus, layout control, 2K output. Reported open weights for Ideogram 4.0; commercial use reportedly needs a paid license.',
    localMatches: [
      { slug: 'comfyui', tier: 'similar', basis: 'The Decoder lists ComfyUI among the platforms offering Ideogram 4.0 (released June 3, 2026); check the ComfyUI docs for current support.', confidence: 'sourced' },
      { slug: 'invoke-ai', tier: 'partial', basis: 'General image UI; text rendering depends on the model loaded.', confidence: 'assumption' },
      { slug: 'stableswarmui', tier: 'partial', basis: 'Multi-model UI; directory shows no release since 2024.', confidence: 'sourced' },
    ],
    gapNote: 'Per The Decoder (June 3, 2026), Ideogram 4.0 weights and code are on GitHub and commercial use requires a paid license. Older sources list Ideogram as cloud-only.',
    verifiedAt: VERIFIED,
    sources: [DECODER, TURING, COMPAREGEN],
  },
  {
    id: 'recraft',
    category: 'image',
    name: 'Recraft',
    vendor: 'Recraft',
    aliases: ['recraft', 'recraft v4', 'recraft ai'],
    summary: 'Closed, design-oriented: vector and raster variants, icon and logo focus, SVG asset generation.',
    localMatches: [],
    gapNote: 'No directory app is documented to output native SVG (based on directory data, not exhaustive). Local tools listed here are raster-only.',
    verifiedAt: VERIFIED,
    sources: [TURING],
  },
  {
    id: 'grok-imagine',
    category: 'image',
    name: 'Grok Imagine',
    vendor: 'xAI',
    aliases: ['grok imagine', 'grok image', 'grok images', 'xai image', 'grok imagine image'],
    summary: 'Closed: instruction following, typography, multi-part layouts, editing.',
    localMatches: [
      { slug: 'comfyui', tier: 'similar', basis: 'Flexible pipeline for open-weight editing models.', confidence: 'assumption' },
      { slug: 'invoke-ai', tier: 'similar', basis: 'Inpainting and node workflows stated in the directory data.', confidence: 'sourced' },
      { slug: 'stableswarmui', tier: 'partial', basis: 'Multi-model UI; directory shows no release since 2024.', confidence: 'sourced' },
    ],
    gapNote: 'Typography and instruction following depend on the open-weight model you load, not on the app.',
    verifiedAt: VERIFIED,
    sources: [TURING],
  },
]
