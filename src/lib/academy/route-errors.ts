// PromptQuorum Academy — error codes the /api/academy/* routes return as { error: code }.
// Its own file so the browser can import the type without pulling in the server route helpers.

export type AcademyErrorCode = 'disabled' | 'unavailable' | 'rate' | 'invalid_input' | 'unsupported_subject' | 'generation' | 'refused' | 'failed' | 'busy'
