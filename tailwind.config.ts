import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        accent: 'var(--accent)',
        accent2: 'var(--accent-2)',
        surface: {
          0: 'var(--surface-0)',
          1: 'var(--surface-1)',
          card: 'var(--surface-card)',
          popover: 'var(--surface-popover)',
          input: 'var(--surface-input)',
          900: 'var(--bg-900)',
          800: 'var(--bg-800)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
          100: 'var(--text-100)',
          muted: 'var(--muted)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        overlay: {
          1: 'var(--overlay-1)',
          2: 'var(--overlay-2)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        geist: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;


