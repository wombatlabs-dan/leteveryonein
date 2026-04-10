
# Visual Redesign Plan — Let Everyone In

## Design Direction
**Body font:** Atkinson Hyperlegible (Google Fonts) — designed by the Braille Institute for readability. A powerful brand statement for an accessibility consulting business.
**Headline font:** Georgia (kept, with improved leading: ~1.15 at display sizes instead of leading-none, letter-spacing tightened to -0.03em).
**Brand color:** Burnt Sienna / Ochre — warm, grounded, human. Primary at oklch(0.50 0.10 55), with a full 9-step OKLCH ramp from 950 (near-black, tinted warm) to 50 (near-white, tinted warm).
**Red accent:** Committed as a secondary brand color for urgency — alert bar, one CTA hover, one editorial accent.

## Implementation — All 10 Audit Fixes

### Fix 1: Focus-visible + reduced-motion (highest priority)
- Global `:focus-visible` rule: 3px solid outline in brand-500, 3px offset, `border-radius: inherit`
- `@media (prefers-reduced-motion: reduce)` block disabling all animation/transition durations
- Applied to every interactive element site-wide

### Fix 2: Kill the wordmark font stack
- Inline the "Let EveryOne In" wordmark as SVG with outlined paths
- Remove Plus Jakarta Sans from Google Fonts `<link>` entirely
- No multi-font fallback stacks anywhere

### Fix 3: Replace Inter with Atkinson Hyperlegible
- Load Atkinson Hyperlegible from Google Fonts (regular 400, bold 700)
- Georgia stays for h1/h2 with intentional leading (~1.15) and letter-spacing (-0.03em)
- Build a real type scale with custom steps (not raw Tailwind text-xs through text-7xl)

### Fix 4: OKLCH brand palette
- Primary hue: burnt sienna/ochre (~55° in OKLCH)
- 9-step ramp: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- Neutrals tinted warm (chroma ~0.005–0.01 toward hue 55)
- No pure #000 or #fff — always tinted
- Override all shadcn tokens (--primary, --secondary, --muted, etc.)
- Override --chart-1 through --chart-5 with ramp-compatible values
- --primary ≠ --foreground (brand color for primary, dark warm neutral for foreground)
- Remove unused dark mode tokens (no toggle exists)

### Fix 5: Red as intentional brand accent
- Keep the alert bar, style it with a committed warm red accent
- Use the same red for: one CTA hover state, one section rule/accent
- Define red in OKLCH as a secondary brand ramp (3-4 steps)

### Fix 6: Varied section spacing
- Three spacing rhythms: tight (~py-12), standard (~py-20), dramatic (~py-36)
- Assign by content density: stats = tight, hero = dramatic, standard sections = standard
- Define as CSS custom properties (--space-section-tight, --space-section, --space-section-dramatic)

### Fix 7: Varied card silhouettes
- Stat cards: borderless, top-rule divider, no rounded corners
- Pricing: comparison table (see Fix 8), no cards
- Process steps: numbered with typography, no card containers
- Overlay facts: editorial list, no card wrapper
- Founder bio quote: pull-quote treatment (see Fix 10)

### Fix 8: Pricing comparison table
- Real HTML table with tier columns (Panic Button / Fix It Right / Stay Protected) and feature rows
- Heavy typographic hierarchy: big prices, clear tier names
- Kill the "Most Popular" badge entirely
- Clean checkmarks for included features, dashes for excluded

### Fix 9: One editorial grid break
- Hero section runs edge-to-edge (full-bleed background with warm-tinted near-white)
- OR: the founder pull-quote outdented wider than the content column
- One moment that breaks the max-w-5xl monotony

### Fix 10: Replace border-l-4 blockquote
- Founder quote becomes a pull-quote: larger Georgia type, em-dash attribution, no left border stripe

## Additional cleanup (from audit honorable mentions)
- Sticky header: solid background + 1px bottom border, no backdrop-blur
- Primary vs secondary buttons: differentiated beyond fill/outline
- All copy, structure, routes, CTAs, Formspree endpoint preserved verbatim
- Skip link, landmarks, heading hierarchy, alt text all preserved
- WCAG 2.2 AA compliance maintained throughout

## Routes to update
- `/` (home) — all sections
- `/about` — founder bio, credentials, approach section
- `/services` — process steps, pricing comparison table
- `/contact` — form styling (Formspree endpoint untouched)
- `/resources` — article list styling
- Resource child pages (ada-demand-letter, overlays-dont-work, ada-compliance-small-business)

## Post-implementation self-audit
Will provide: fixes addressed checklist, contrast-ratio report, focus-visible/reduced-motion confirmation, landmark/heading verification, and any hard-rule exceptions.
