/** @type {import('tailwindcss').Config} */
const tok = (name) => `oklch(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './i18n/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      // ponytail: every colour comes from tokens.css — no raw palette, no dark: variants needed
      colors: {
        paper: tok('paper'),
        sunk: tok('sunk'),
        surface: tok('surface'),
        line: tok('line'),
        ink: { DEFAULT: tok('ink'), 2: tok('ink-2'), 3: tok('ink-3') },
        brand: { DEFAULT: tok('brand'), hover: tok('brand-hover'), ink: tok('brand-ink') },
        accent: { DEFAULT: tok('accent'), hover: tok('accent-hover'), ink: tok('accent-ink'), on: tok('on-accent') },
        cta: { DEFAULT: tok('cta'), hover: tok('cta-hover'), on: tok('on-cta') },
        record: { DEFAULT: tok('record'), edge: tok('record-edge') },
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
        in: 'var(--ease-in)',
        'in-out': 'var(--ease-in-out)',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
      },
    },
  },
  plugins: [],
}
