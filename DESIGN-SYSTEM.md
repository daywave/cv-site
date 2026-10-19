# Design System — Petit Hunan + Blanca Hernández pattern

> Portable spec extracted from two shipped builds:
> - `/` — Petit Hunan (restaurant, Marquee Hero + Hum-tuned, warm)
> - `/portfolio` — Blanca Hernández (political-scientist portfolio, Long Document + Atelier-tuned, cool editorial)
>
> **Purpose:** train another model (LLM, coding agent, junior dev) to reproduce this
> quality on new briefs. This file is the source of truth. Read it, then apply.
>
> **Non-goal:** template cloning. Every new build MUST diversify per §4.

---

## 1. Working principles

1. **The default LLM landing page is slop.** Rounded cards, "Trusted by 500+ teams",
   gradient hero, three-feature-grid, CTA-in-purple. Refuse it.
2. **Structural variety over visual variety.** Two builds should not share the
   same hero → 3-feature → CTA → footer rhythm. Different sites, not different
   colour-swaps of the same template.
3. **The lazy solution that actually works is right.** No abstractions for one
   caller, no config for a value that never changes, no dependencies for what CSS
   does natively. Delete before you add.
4. **Honesty over polish.** If the user did not supply a number, do not invent
   it. Placeholders are labeled. Fake testimonials are worse than empty space.
5. **Type + colour + rhythm carry a site.** Illustrations, gradients, and
   animation are last-resort enrichment. Typography-only is a legitimate ship.

---

## 2. Decision ladder (apply in order)

Stop at first rung that works:

1. **Does this element need to exist?** Speculative sections = cut.
2. **Does native HTML/CSS cover it?** `<input type="date">` beats a picker lib.
3. **Do already-installed deps cover it?** Reuse before adding.
4. **Can it be one line?** One line.
5. **Only then:** minimum code that works.

Never add: rounded cards defensively, framer-motion for a fade, a lib for what
`useState` handles, a config file for two knobs.

---

## 3. Genre routing (pick before theme)

Detect from the brief. Four genres → four theme clusters:

| Genre | Signals | Theme cluster |
|---|---|---|
| **Editorial** (default) | academic, journal, portfolio, essay, dignified | Atelier, Newsprint, Specimen, Studio, Almanac, Editorial |
| **Modern-minimal** | SaaS, API, dev-tool, B2B, platform | Coral, Cobalt |
| **Atmospheric** | AI tool, music, video, generative, dark | Bloom, Midnight, Terminal, Aurora, Lumen |
| **Playful** | consumer, hospitality, restaurant, family, warm | Hum |

Silence → editorial. Two conflicting signals → ask once, don't guess.

**Applied here:**
- Hunan → playful (hospitality + ducks) → Hum-tuned
- Portfolio → editorial (academic) → Atelier-tuned

---

## 4. Diversification rule (non-negotiable)

Two consecutive builds MUST differ on ≥1 of three axes:

- **Paper band** — dark (L < 30 %) / mid (30–85 %) / light (> 85 %)
- **Display style** — high-contrast-serif / roman-serif / geometric-sans /
  grotesk-sans / rounded-sans / mono / display-condensed / display-heavy /
  risograph-bold
- **Accent hue** — warm (10–60°) / cool (200–300°) / neutral / chromatic-other

Also diversify:
- **Macrostructure** — 21 named shapes. Never same one twice in a row.
- **Nav archetype** (N1a–N13). Never same twice in a row.
- **Footer archetype** (Ft1–Ft8). Never same twice in a row.

**Bans (always):**
- Specimen fall-through (numbered left-margin labels + huge serif) as a default.
- N1a minimal 2-link nav as a default (banned unless the page truly has 2 destinations).
- Ft3 four-column footer as a default.
- Italic display headers (any theme).
- "01 · SECTION" / "02 / FEATURES" eyebrow labels as decoration.
- Fake browser chrome (URL pill + traffic-light dots), fake phone frames, fake IDE windows.
- Invented metrics ("+47% conversion", "10× faster", "trusted by 500+ teams").
- 2-line clickable text (buttons, nav links, footer links, CTAs).

**Log it:** every build appends to `.hallmark/log.json` at project root:

```json
[
  {
    "date": "YYYY-MM-DD",
    "macrostructure": "Long Document",
    "theme": "Atelier-tuned",
    "theme_axes": "light-paper / high-contrast-serif / cool-accent",
    "nav": "N1b canonical",
    "footer": "Ft6 compact contact",
    "brief": "one-line summary"
  }
]
```

Next build reads it and picks different.

---

## 5. Themes shipped

### 5.1 Hum-tuned (playful hospitality — Petit Hunan)

**Axes:** light-paper / rounded-sans (paired with soft-serif display) / warm accent.

```css
:root {
  --color-paper:        oklch(97% 0.012 70);   /* warm cream */
  --color-paper-2:      oklch(94% 0.02 70);
  --color-paper-3:      oklch(90% 0.028 65);
  --color-ink:          oklch(22% 0.02 40);    /* warm near-black */
  --color-ink-2:        oklch(42% 0.02 40);
  --color-ink-3:        oklch(62% 0.015 50);
  --color-accent:       oklch(56% 0.18 30);    /* terracotta */
  --color-accent-2:     oklch(46% 0.16 30);
  --color-accent-soft:  oklch(90% 0.05 40);
  --color-focus:        oklch(56% 0.18 30);
  --color-rule:         oklch(85% 0.02 60);
  --color-danger:       oklch(52% 0.18 25);

  --font-display: Fraunces, Georgia, serif;     /* soft-serif, roman only */
  --font-body:    "Plus Jakarta Sans", system-ui, sans-serif;

  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 22px;            /* rounded, playful */
  --radius-full: 999px;
}
```

Signature moves:
- Rounded corners on cards (`--radius-lg: 22px`).
- Warm cream background, terracotta accent (Hunan/hospitality visual code).
- Fraunces display with SOFT + WONK axes when using variable font.
- Hand-built SVG duck illustration as hero enrichment (Tier B, not Lottie).

### 5.2 Atelier-tuned (editorial academic — Blanca Hernández)

**Axes:** light-paper / high-contrast-serif / cool accent.

```css
:root {
  --color-paper:        oklch(97% 0.008 90);   /* cool cream */
  --color-paper-2:      oklch(94% 0.012 90);
  --color-paper-3:      oklch(88% 0.015 85);
  --color-ink:          oklch(20% 0.012 260);  /* cool near-black */
  --color-ink-2:        oklch(42% 0.015 260);
  --color-ink-3:        oklch(62% 0.012 260);
  --color-accent:       oklch(46% 0.14 255);   /* ink-blue */
  --color-accent-2:     oklch(36% 0.12 255);
  --color-accent-soft:  oklch(90% 0.04 250);
  --color-focus:        oklch(46% 0.14 255);
  --color-rule:         oklch(84% 0.01 260);
  --color-danger:       oklch(52% 0.18 25);

  --font-display: "DM Serif Display", "Times New Roman", serif;  /* high-contrast, roman */
  --font-body:    Inter, system-ui, sans-serif;

  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 14px;            /* restrained */
  --radius-full: 999px;
}
```

Signature moves:
- Cool cream (subtle blue undertone) vs Hunan's warm cream.
- Ink-blue accent (academic authority) vs terracotta.
- High-contrast serif (DM Serif Display) — display size only, roman only.
- Section rhythm with hanging `§ 01 · Sobre` labels + big serif h2 in same column.
  (Not the two-column hanging-label pattern — that's banned. Vertical stack.)
- 2 px thick top border on research-area tiles instead of card backgrounds.
- Publication list uses grid rows with year column, not boxes.

### Comparison

| | Hunan (Hum) | Portfolio (Atelier) |
|---|---|---|
| Paper | warm cream (H=70) | cool cream (H=90) |
| Ink | warm near-black (H=40) | cool near-black (H=260) |
| Accent | terracotta (H=30) | ink-blue (H=255) |
| Display font | Fraunces (soft serif) | DM Serif Display (high-contrast serif) |
| Body font | Plus Jakarta Sans | Inter |
| Radius scale | 4 / 10 / 22 (round) | 3 / 6 / 14 (restrained) |
| Line-height (body) | 1.55 | 1.6 |
| Base font-size | 16px / 1rem | 16px / 1.02rem |
| Enrichment | hand-built SVG duck | none (typography-only) |

They differ on **all three** diversification axes. Deliberate.

---

## 6. Token schema (universal — both builds share this shape)

Always emit `tokens.css` at project root or in `app/`. Page CSS references
tokens by name, never inlines OKLCH.

```css
:root {
  /* palette — 12 slots */
  --color-paper: ...;         /* main background */
  --color-paper-2: ...;       /* slight recession */
  --color-paper-3: ...;       /* hover / deeper recession */
  --color-ink: ...;           /* primary text */
  --color-ink-2: ...;         /* muted text */
  --color-ink-3: ...;         /* meta / label text */
  --color-accent: ...;        /* primary accent */
  --color-accent-2: ...;      /* hover darkening of accent */
  --color-accent-soft: ...;   /* accent tint for backgrounds */
  --color-focus: ...;         /* focus ring — usually === accent */
  --color-rule: ...;          /* dividers, borders */
  --color-danger: ...;        /* error state */

  /* type — 2 fonts + 10 sizes */
  --font-display: ...;
  --font-body: ...;
  --text-xs:  0.78rem;
  --text-sm:  0.9rem;
  --text-base: 1rem;
  --text-lg:  1.15rem;
  --text-xl:  1.4rem;
  --text-2xl: 1.75rem;
  --text-3xl: clamp(1.9rem, 2.3vw + 1rem, 2.6rem);
  --text-4xl: clamp(2.4rem, 3.2vw + 1rem, 3.4rem);
  --text-display-s: clamp(2.4rem, 5vw + 1rem, 4rem);
  --text-display:   clamp(2.8rem, 7vw + 1rem, 5.8rem);

  /* space — 4pt scale, 9 rungs */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4.5rem;
  --space-12: 6rem;
  --space-16: 9rem;

  /* motion — 3 durations, 3 named easings ONLY (never bare `ease`) */
  --dur-fast: 120ms;
  --dur-med: 220ms;
  --dur-slow: 400ms;
  --ease-out:    cubic-bezier(0.2, 0.7, 0.2, 1);
  --ease-in:     cubic-bezier(0.6, 0.05, 0.9, 0.4);
  --ease-in-out: cubic-bezier(0.6, 0, 0.4, 1);

  /* radii */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
  --radius-full: 999px;

  --rule: 1px solid var(--color-rule);
}
```

**Rules:**
- No inline OKLCH / hex / rgb in components. Reference tokens by name.
- If you need a value that isn't a token, add it as a token first.
- Load next/font (Next.js) or `@fontsource` and expose via `--font-display-loaded`
  / `--font-body-loaded` variables, then chain into `--font-display` / `--font-body`
  with fallbacks.

---

## 7. Typography rules

- **Two fonts max** — one display + one body. Same-font pages are allowed only
  when it IS the design (terminal / mono aesthetic).
- **All headings are roman.** `font-style: normal` explicit. Italic display =
  #1 AI tell. Emphasis via colour or weight, not italic.
- **Emphasis inside headings:** wrap the emphasis word in `<em>` and override
  in CSS: `h1 em { font-style: normal; color: var(--color-accent); }`.
- **Hero headline** — ≤ 7 words, ≤ 50 chars. Longer → step down `--text-display-s`
  or rewrite shorter.
- **`overflow-wrap: anywhere; min-width: 0;`** on every display heading. Prevents
  mobile long-word overflow.
- **Body line-height** — 1.55–1.7. Never < 1.5 on paragraphs.
- **Body max-width** — reading blocks capped ~62–72ch. Hero sub ~34–42ch.
- **Weights** — 400/500 for display in most themes. Body 400/500/600.

---

## 8. Motion rules

- Animate `transform` and `opacity` ONLY. Never `width`, `height`, `top`, `left`.
- Three named easings. Never `ease`, never `ease-in-out` shorthand, never bounce
  on UI state.
- Max 3 motion primitives per page. Both builds use: fade-in-on-scroll +
  hover-lift + one signature (breathe on ducks / underline-draw on links).
- `prefers-reduced-motion: reduce` collapses all motion to ≤ 10ms opacity fade.
  Global override in CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- **Never animate focus rings.** They appear instantly on `:focus-visible`.

---

## 9. Component patterns

### 9.1 Navigation

Two archetypes used:

**N6 Masthead (Hunan):** centered wordmark, inline links flanking left, CTA right.
Grid `1fr auto 1fr`.

**N1b Canonical (Portfolio):** wordmark-left, inline section links, CTA-right.
Flex `space-between`.

Both:
- Sticky top, semi-transparent paper background, backdrop-blur, hairline bottom rule.
- Nav links use hover colour = accent, no underline (link-underline reserved for body).
- Mobile (≤ 720 px): hide inline links, keep brand + CTA. Add sheet/menu only if the
  page truly has more than 4–5 destinations that a user might want mid-scroll.

**Banned:** N1a minimal 2-link (default AI tell). Only use when the page has
literally 2 destinations.

### 9.2 Hero

Two shapes used:

**Marquee Hero (Hunan):** center-aligned. Eyebrow → display headline → sub →
CTA row → decorative enrichment below. Single-viewport friendly.

**Editorial Hero (Portfolio):** left-aligned. Eyebrow → single-word/name display →
descriptive sub → meta row (3 labeled facts) → CTA row.

Both use `--text-display` clamp scale. Both keep sub ≤ 42ch. Both `overflow-wrap: anywhere`
on the h1.

### 9.3 Section rhythm

**Marquee (Hunan)** — sections stacked, generous padding (`--space-12` vertical),
optional `.section-head` with left-aligned h2 + sub.

**Long Document (Portfolio)** — sections separated by hairline rules, two-column
`.doc-head` at top:
- left column: `§ 01 · Sobre` label (uppercase, `--text-xs`, letter-spacing)
- right column: big serif h2

On mobile: collapse to single column, label above heading (vertical stack).
**Never** hanging-label two-column on mobile — that's banned.

```css
.doc-head {
  display: grid;
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
  gap: var(--space-8);
  align-items: baseline;
}
@media (max-width: 720px) {
  .doc-head { grid-template-columns: 1fr; gap: var(--space-3); }
}
```

### 9.4 Cards / tiles / list rows

**Hunan dish tile** — rounded card, paper-2 background, top-align tag + h3 + p.
Hover: lift 3px + background paper-3. Radius `--radius-lg`.

**Portfolio research area** — no card. Just top border 2px solid ink, then h3 + p.
Restrained editorial. No hover translate.

**Portfolio publication row** — grid `60px 1fr` (year + body). Hairline top border.
No card background.

Rule: reach for a card only when the content genuinely groups. Otherwise a rule + spacing
carries the same job with less noise.

### 9.5 Form fields (8-state discipline)

Every interactive control ships all 8 states. Example from `reservar-form.tsx`:

```css
.field input {
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  background: var(--color-paper);
  color: var(--color-ink);
  transition: border-color var(--dur-fast) var(--ease-out);
}
.field input:hover                     { border-color: color-mix(in oklch, var(--color-ink) 40%, var(--color-rule)); }
.field input:focus-visible             { outline: 2px solid var(--color-focus); outline-offset: 2px; border-color: var(--color-accent); }
.field input[aria-invalid="true"]      { border-color: var(--color-danger); }
.field input:disabled                  { opacity: 0.6; cursor: not-allowed; }
```

Loading / error / success surfaced via `data-state` attribute + a status
region with `role="status" aria-live="polite"`.

### 9.6 Buttons (8-state)

```css
.btn {
  display: inline-flex; align-items: center; gap: var(--space-2);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  background: var(--color-ink); color: var(--color-paper);
  font-weight: 500; font-size: var(--text-sm); line-height: 1;
  white-space: nowrap;               /* never 2-line CTA */
  cursor: pointer; text-decoration: none;
  transition:
    transform var(--dur-fast) var(--ease-out),
    background var(--dur-fast) var(--ease-out);
}
.btn:hover, .btn.is-hover              { background: var(--color-accent); }
.btn:active, .btn.is-active            { transform: translateY(1px); }
.btn[disabled], .btn.is-disabled       { opacity: 0.5; cursor: not-allowed; background: var(--color-ink-3); }
.btn[data-state="loading"]             { pointer-events: none; opacity: 0.7; }
.btn[data-state="success"]             { background: oklch(50% 0.14 150); }
.btn[data-state="error"]               { background: var(--color-danger); }
```

Variants: `.btn-primary` (accent bg), `.btn-ghost` (transparent bg, ink border).
`.is-hover` / `.is-active` classes let a demo page render all 8 states at once.

### 9.7 Footer archetypes

**Ft5 Statement (Hunan):** big serif statement ("Petit Hunan. Una mesa a la vez.")
on ink background, then compact columns below.

**Ft6 Compact contact (Portfolio):** 2/3 + 1/3 split. Name + role on left, contact
`<dl>` on right. Legal line spans full width at bottom, hairline top rule.

Both use `--color-ink` background with paper text, accent-soft as link hover.

**Banned:** Ft3 four-column-of-links default.

---

## 10. Layout & responsive

Non-negotiables at 320 / 375 / 414 / 768 px:

```css
html, body { overflow-x: clip; }   /* NOT hidden — clip prevents jump-to-anchor bug */

/* image-bearing grids: minmax(0, 1fr), never bare 1fr */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
}

/* display headings survive long words */
h1, h2, .display {
  overflow-wrap: anywhere;
  min-width: 0;
}

/* clickable text never wraps to 2 lines */
.btn, .nav a { white-space: nowrap; }

/* two-column heads collapse to one on mobile */
@media (max-width: 720px) {
  .doc-head { grid-template-columns: 1fr; }
}
```

Container:

```css
.container {
  width: 100%;
  max-width: 1080px;             /* portfolio: 1080; hunan: 1180 */
  margin-inline: auto;
  padding-inline: var(--space-5);
}
@media (min-width: 720px) { .container { padding-inline: var(--space-8); } }
```

---

## 11. Copy voice

Both builds use Spanish. Same tone rules:

- **Concrete over abstract.** "Nueve mesas" > "small footprint". "Roma Norte, CDMX" >
  "prime location".
- **First-person plural when the brand is a place; first-person singular when the
  brand is a person.** Hunan: "Cocinamos". Portfolio: "Estudio", "Escribo".
- **Verbs at the start of buttons.** "Reservar mesa", "Ver el menú", "Escribir".
- **No exclamation marks in nav or CTAs.** Exclamations are for the success toast.
- **No "Discover", "Unlock", "Empower", "Transform".** Ban list.
- **Short-form ampersands only in inline lists** — `Prensa & comentario` in a label,
  never `Menú & Historia & Reservar` in body copy.

---

## 12. Honest-content rule

**Never invent:**
- Metrics ("+47% conversion", "10× faster", "trusted by 500+ teams").
- Testimonials ("Great service! — María, CDMX").
- Client logos, awards, press mentions.
- Publications, papers, journal names, DOIs, page numbers.
- Addresses, phone numbers, emails, social handles.

**Do instead:**
- Label placeholder content: `<p class="placeholder-note">Contenido de ejemplo — reemplazar</p>`
  above lists that need real replacement.
- Use bracket tokens for hard blanks: `[Universidad — completar]`, `[Editor]`, `[Editorial]`.
- Use plausible-shaped but generic content when the user gave partial context (see the
  portfolio publications: real-shaped titles + labeled as example).
- For addresses/phones the user didn't provide: `"Por confirmar"` or `"[Dirección — completar]"`.

Placeholder note style:

```css
.placeholder-note {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--color-accent-soft);
  color: var(--color-accent-2);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-5);
}
```

Non-negotiable. This is the single most-broken rule when an LLM builds "a portfolio".

---

## 13. Stack & file layout

Next.js 15 app-router, TypeScript, React 19. No CSS framework, no UI library,
no motion library.

```
project/
├── package.json                # next 15.0.3 · react 19 · typescript 5.6
├── next.config.mjs             # reactStrictMode: true, nothing else
├── tsconfig.json               # standard Next.js strict TS
├── .gitignore                  # node_modules, .next, .DS_Store
├── .hallmark/
│   └── log.json                # append every build — see §4
└── app/
    ├── tokens.css              # ALL tokens (imported first in globals.css)
    ├── globals.css             # stamp + reset + component styles
    ├── layout.tsx              # next/font, metadata, <html lang="es">
    ├── page.tsx                # server component, sections inline
    └── some-form.tsx           # 'use client' for form/interactive
```

`package.json`:

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.0.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.9.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.6.3"
  }
}
```

`layout.tsx` (font loading pattern):

```tsx
import type { Metadata } from 'next'
import { DisplayFont, BodyFont } from 'next/font/google'
import './globals.css'

const display = DisplayFont({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
  weight: ['400', '500'],   // roman only, no italic
  style: ['normal'],
})
const body = BodyFont({
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

CSS stamp (first line of `globals.css`):

```css
/* Hallmark · macrostructure: <name> · tone: <tone> · anchor hue: <hue>
 * theme: <theme> · nav: <archetype> · footer: <archetype>
 * pre-emit critique: P5 H4 E4 S4 R5 V5
 */
```

Stamp is a durable record — next build reads it and diversifies.

---

## 14. Pre-emit checks (run before shipping)

Score the artifact 1–5 on six axes. Anything < 3 → revise:

- **Philosophy** — does the tone match the brief?
- **Hierarchy** — can you read top-to-bottom without hunting?
- **Execution** — spacing consistent, alignment tight?
- **Specificity** — details show taste (not defaults)?
- **Restraint** — anything you could cut?
- **Variety** — differs from the last build?

Slop-test bans to verify:

- [ ] No italic headers.
- [ ] No inline `oklch()` / hex / rgb in components (tokens only).
- [ ] No fake browser / phone / IDE chrome.
- [ ] No invented metrics or testimonials.
- [ ] `overflow-x: clip` on html + body.
- [ ] `overflow-wrap: anywhere; min-width: 0;` on every display heading.
- [ ] `white-space: nowrap` on buttons + nav links.
- [ ] `minmax(0, 1fr)` on image-bearing grids.
- [ ] `:focus-visible` visible ring, ≥ 3:1 contrast, not animated.
- [ ] `prefers-reduced-motion: reduce` handled globally.
- [ ] All 8 states on every button (default · hover · focus · active · disabled ·
      loading · error · success).
- [ ] All 8 states on every form field.
- [ ] No `01 · SECTION` eyebrow labels unless macrostructure is Long Document /
      Manifesto / Catalogue AND content is genuinely ordinal.
- [ ] No hanging-label two-column heads on mobile.
- [ ] `.hallmark/log.json` updated with this build.
- [ ] All fake data labeled with `.placeholder-note` or bracketed tokens.
- [ ] Section rhythm differs from previous build.

---

## 15. Reproduction prompt template

Feed this to another model to reproduce the pattern:

> You are building a Next.js 15 site using the design system described in
> `DESIGN-SYSTEM.md`. Read that file first. Then:
>
> 1. Read the brief: `<brief here>`.
> 2. Detect genre (§3). State it out loud.
> 3. Read `.hallmark/log.json` if it exists. Pick a macrostructure that isn't
>    in the last 3 entries. Pick a theme that differs from the last entry on
>    ≥ 1 of the 3 axes (paper band / display style / accent hue). Pick nav
>    and footer archetypes that differ from the last build. State picks out
>    loud with the reason.
> 4. Emit a Hallmark preview (bulleted): macrostructure · genre · theme ·
>    nav · footer · enrichment · sections · motion · slop-test pending.
> 5. Write files per §13. Emit `tokens.css` first, then `globals.css` with
>    the stamp, then `layout.tsx` + `page.tsx`.
> 6. Use tokens by name. Roman headers only. Ship all 8 states on interactive
>    controls. Mobile-safe per §10.
> 7. Never invent metrics, testimonials, publications, addresses, emails. Label
>    all placeholder content per §12.
> 8. Run the checklist in §14 before responding "done". Fix anything that fails.
> 9. Append the build to `.hallmark/log.json`.
>
> Ask ONE round of clarifying questions before Step 2 if the brief is under
> ~30 words. Otherwise infer and state inferences at the top of your reply.
>
> Communication style: terse. Lead with what you did. Skip prose the user could
> read from the diff. Never write a summary that repeats what's obvious from the
> code.

---

## 16. Worked mappings from the two shipped builds

### 16.1 Petit Hunan

- Brief: "recreate a restaurant reservation site with menu + story + hours + booking"
- Genre: playful (ducks + hospitality)
- Macrostructure: Marquee Hero (single-viewport hero, then scroll)
- Theme: Hum-tuned (warm cream / soft-serif + rounded-sans / terracotta)
- Nav: N6 Masthead (centered wordmark, inline links flanking)
- Footer: Ft5 Statement ("Una mesa a la vez.")
- Enrichment: Tier B hand-built SVG duck, breathe animation
- Motion: 3 primitives — fade-in on scroll, hover-lift on dishes, duck breathe
- Sections: Nav · Hero · Menú · Historia · Visítanos · Reservar · Footer
- Interactive: reservation form as client component, 8-state discipline, no backend
  (`ponytail:` comment marks swap point)

### 16.2 Blanca Hernández Portfolio

- Brief: "political scientist portfolio, works at IMMA Aguascalientes"
- Genre: editorial (academic)
- Macrostructure: Long Document (numbered § sections, editorial rhythm)
- Theme: Atelier-tuned (cool cream / high-contrast serif + Inter / ink-blue)
- Nav: N1b Canonical (wordmark-left, inline sections, CTA-right)
- Footer: Ft6 Compact contact card
- Enrichment: none (typography-only, editorial default)
- Motion: 2 primitives — fade-in on scroll, hover colour on links
- Sections: Nav · Hero · Sobre · Investigación · Publicaciones · Docencia · Prensa · Contacto · Footer
- Content honesty: real name / institution / location. Everything else labeled
  "Contenido de ejemplo — reemplazar" with plausible-shaped placeholders.

Diversification vs Hunan:
- Macrostructure: Marquee Hero → Long Document ✓
- Paper band: light → light (same — but two other axes differ, valid)
- Display style: rounded-sans → high-contrast-serif ✓
- Accent hue: warm terracotta → cool ink-blue ✓
- Nav: N6 → N1b ✓
- Footer: Ft5 → Ft6 ✓

---

## 17. What NOT to do (fast reference)

- Do not add Tailwind. The system is CSS custom properties + hand-written classes.
  Adding Tailwind now would fragment the token layer.
- Do not add shadcn/ui, MUI, Chakra, DaisyUI, or any component library. Every
  component here is < 60 lines of hand-written CSS.
- Do not add framer-motion / gsap for a fade. CSS transitions handle it in one line.
- Do not add a design-tokens JSON pipeline. `tokens.css` is enough for two sites.
  Add it only when you have three+ sites AND a real reason to bridge to Figma / iOS.
- Do not italicise a heading. Ever.
- Do not use `border-radius: 999px` on cards (that's for buttons). Cards use
  `--radius-lg`. Hunan is the higher-radius end (22px); Atelier the lower (14px).
- Do not add a section eyebrow "01 · WHATEVER" as decoration. The `§ 01` in the
  portfolio is intentional Long Document syntax, not decoration.
- Do not center-align long body paragraphs. Editorial paragraphs are left-aligned.
  Only heroes center in some macrostructures.

---

## 18. Extending the system

To add a **third theme**:

1. Pick genre + cluster first (§3). Avoid Hum and Atelier's exact axes; find at
   least one axis to break.
2. Draft the 12 palette slots in OKLCH. Test contrast: ink on paper ≥ 12:1, accent
   on paper ≥ 4.5:1 for body text or ≥ 3:1 for large / focus rings.
3. Pick two fonts (display + body). Roman only.
4. Set radius scale to match the theme's voice (round = playful, tight = editorial,
   zero = brutal).
5. Write one page with it. Then and only then decide if it's worth codifying.

To add a **new component** (e.g., a modal):

1. Check if native `<dialog>` covers it. It does. Use it.
2. Style with tokens. All 8 states. Focus trap via native `showModal()`.
3. Add nothing to `tokens.css` unless a new colour / size is genuinely required.

To add a **new page**:

1. Read `.hallmark/log.json`. Pick differently.
2. Emit preview block.
3. Write files.
4. Append to log.

---

*End of spec. If it's not in this file, it's not part of the system.*
