// Unit test for the per-link affiliate switch (src/lib/tracking/affiliate.ts):
//   plain provider URL            -> rel "nofollow", neutral "no commission" notice
//   URL with a real referral code -> rel "nofollow sponsored", commission notice on that page
// Run: npm run test:affiliate-monetised
import {
  AFFILIATE_DISCLOSURE,
  AFFILIATE_DISCLOSURE_COMMISSION,
  affiliateDisclosureFor,
  affiliateRelFor,
  hasMonetisedAffiliateLinks,
  isMonetisedUrl,
} from '../src/lib/tracking/affiliate'

let failed = 0
const check = (name: string, ok: boolean, detail = '') => {
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${ok ? '' : detail ? ` — ${detail}` : ''}`)
}

// 1. plain links are never monetised (this is the live state of the site today)
const plain = [
  'https://www.runpod.io/',
  'https://vast.ai/pricing',
  'https://clore.ai/',
  'https://www.cherryservers.com/dedicated-gpu-servers',
  'https://www.amazon.com/dp/B0CHX1W1XY',
  // the site's own outbound source tag must never count as a commission signal
  'https://www.runpod.io/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review',
  'https://github.com/vllm-project/vllm?ref=',
  '/power-local-llm/runpod-review',
  '#vs-g3-plus',
  'not a url',
]
for (const u of plain) check(`plain stays plain: ${u}`, !isMonetisedUrl(u) && affiliateRelFor(u) === 'nofollow noopener noreferrer')

// 2. a real code switches the link
const monetised = [
  'https://www.runpod.io/?ref=abc123',
  'https://clore.ai?ref_id=XYZ789',
  'https://vast.ai/?ref=friend',
  'https://www.amazon.com/dp/B0CHX1W1XY?tag=promptquorum-20',
  'https://www.awin1.com/cread.php?awinmid=1&awinaffid=2&ued=https%3A%2F%2Fwww.cherryservers.com%2F',
  'https://www.cherryservers.com/?awc=123_456_abc',
  'https://novita.ai/?utm_medium=affiliate',
  'https://app.partnerstack.com/x',
  'https://go.example.pxf.io/c/1/2/3',
]
for (const u of monetised) check(`code switches: ${u}`, isMonetisedUrl(u) && affiliateRelFor(u) === 'nofollow sponsored noopener noreferrer')

// 3. page-level detection walks nested affiliateLinks in any locale/section/ranked item
const plainArticle = { en: { sections: { a: { affiliateLinks: [{ url: 'https://www.runpod.io/' }] }, b: { rankedItems: [{ affiliateLinks: [{ url: 'https://vast.ai/' }] }] } } } }
const codedArticle = { en: { sections: { a: { affiliateLinks: [{ url: 'https://www.runpod.io/' }] } } }, de: { sections: { b: { rankedItems: [{ affiliateLinks: [{ url: 'https://vast.ai/?ref=x' }] }] } } } }
check('plain article has no monetised links', !hasMonetisedAffiliateLinks(plainArticle))
check('one coded link anywhere flips the page', hasMonetisedAffiliateLinks(codedArticle))
check('links outside affiliateLinks are ignored', !hasMonetisedAffiliateLinks({ en: { sections: { a: { content: '[x](https://vast.ai/?ref=x)', items: [{ url: 'https://vast.ai/?ref=x' }] } } } }))

// 4. disclosure text follows the page, in every locale
const langs = ['en', 'de', 'fr', 'es', 'ja', 'zh', 'ko', 'pt', 'ar']
for (const l of langs) {
  check(`neutral notice, ${l}`, affiliateDisclosureFor(l, false) === AFFILIATE_DISCLOSURE[l])
  check(`commission notice, ${l}`, affiliateDisclosureFor(l, true) === AFFILIATE_DISCLOSURE_COMMISSION[l])
}
check('unknown locale falls back to en', affiliateDisclosureFor('xx', false) === AFFILIATE_DISCLOSURE.en && affiliateDisclosureFor('xx', true) === AFFILIATE_DISCLOSURE_COMMISSION.en)
check('neutral text says no commission', /earn no commission/.test(AFFILIATE_DISCLOSURE.en))
check('commission text says may earn commission', /may earn a commission/.test(AFFILIATE_DISCLOSURE_COMMISSION.en))

console.log(failed ? `\n${failed} check(s) failed` : '\naffiliate monetised-link switch: all checks passed')
process.exit(failed ? 1 : 0)
