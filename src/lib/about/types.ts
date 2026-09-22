// About page copy schema — one block per language, enforced identical in
// shape by this interface (TypeScript itself is the schema-fidelity check:
// a translated block missing a field, or inventing one, fails `tsc`).
//
// Numeric facts (app/article/group/category counts) are injected at render
// time via literal `{{token}}` placeholders — translators move the token to
// match natural word order in their language, but must not alter its spelling.
// Tokens used: {{appCount}} {{articleCount}} {{groupCount}} {{categoryCount}}
//
// Brand/product names are never translated: PromptQuorum, Hugging Face,
// Ollama, LM Studio, llama.cpp, Open WebUI, MCP, VS Code, GitHub, X,
// LinkedIn, YouTube, Substack, hello@promptquorum.com.

export interface AboutWave {
  n: string // 'Wave 1' — short label, also used as the diagram node's wave label
  title: string // 'Models'
  solved: string // 'Made AI downloadable.'
  text: string
  catch: string // sentence after "The catch:"
  product: string // diagram node product label for this wave, e.g. 'Hugging Face'
}

export type LeadRest = [string, string]

export interface AboutCopy {
  // Hero
  kicker: string
  h1: string
  heroLead: string // {{appCount}} {{articleCount}}
  heroSub: string
  ctaDirectory: string
  ctaHardware: string
  ctaEcosystem: string
  ctaMcp: string

  // Three waves
  wavesH2: string
  wavesLead: string
  waves: [AboutWave, AboutWave, AboutWave]
  theCatchLabel: string
  waveHighlightBadge: string
  wavesClosing: string

  // Why local / beliefs
  believeH2: string
  believeQuoteTitle: string
  believeQuotePre: string
  believeQuoteBold: string
  believeQuotePost: string
  beliefs: [LeadRest, LeadRest, LeadRest, LeadRest, LeadRest]
  believeClosing: string
  believeItalic: string

  // Ecosystem
  ecosystemH2: string
  ecosystemLead: string
  connectsLabel: string
  findLabel: string
  learnLabel: string
  useLabel: string
  askLabel: string
  partFindTitle: string
  partFindBody: string // {{appCount}} {{groupCount}} {{categoryCount}}
  partFindConnects: string
  partLearnTitle: string
  partLearnBody: string // {{articleCount}}
  partLearnConnects: string
  partUseTitle: string
  partUseBody: string
  partUseConnects: string
  partAskTitle: string
  partAskBody: string
  partAskConnects: string
  ctaOpenDirectory: string
  ctaReadGuides: string
  ctaAboutApp: string
  ctaSeeHowToConnect: string
  practiceH3: string
  practiceIntro: string
  practiceSteps: [string, string, string, string] // paired by index with find/learn/use/askLabel

  // Goal-first + audience
  forYouH2: string
  forYouLead: string
  goals: [string, string, string, string, string]
  ctaBrowse: string
  ctaSetHardware: string
  forYouIfH3: string
  forYouList: [string, string, string, string, string, string]
  notForYouH3: string
  notForYouText: string

  // Neutral
  neutralH2: string
  neutralLead: string
  neutral: [LeadRest, LeadRest, LeadRest, LeadRest, LeadRest, LeadRest, LeadRest]

  // Languages
  languagesH2: string
  languagesLead: string
  languagesClosing: string

  // MCP
  mcpH2: string
  mcpLead: string
  mcpEndpointLabel: string
  mcpEndpointNote: string
  mcpManifestLabel: string
  mcpToolsLabel: string
  ctaMcpGuide: string

  // Founder
  founderH2: string
  founderImgAlt: string
  founderTitle: string
  founderBioP1: string
  founderBioP2: string
  founderBioP3: string
  founderBioSmall: string

  // Roadmap
  roadmapH2: string
  roadmapLead: string
  roadmap: [LeadRest, LeadRest, LeadRest, LeadRest]
  roadmapClosing: string

  // Get involved
  involvedH2: string
  foundersLabel: string
  foundersText: string
  pressLabel: string
  followLabel: string

  // Schema / breadcrumb
  breadcrumbHome: string
  breadcrumbAbout: string
}

/** Replaces literal {{token}} placeholders — the only interpolation this page needs. */
export function fillTokens(text: string, tokens: Record<string, string | number>): string {
  return Object.entries(tokens).reduce(
    (acc, [key, value]) => acc.split(`{{${key}}}`).join(String(value)),
    text
  )
}
