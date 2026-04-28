// PE content entry point — re-exports types and the assembled peContent.
// Post-canary: serves split files exclusively.
export type { PESection, PEArticle } from './types'
export { peContent } from './articles-barrel'
