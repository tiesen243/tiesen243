import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      colors: {
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-text':
          'linear-gradient(to bottom right, hsl(var(--gradient-from)), hsl(var(--gradient-via)), hsl(var(--gradient-to)))',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: 'hsl(0 0% 100%)',
            foreground: 'hsl(240 10% 3.9%)',
            content1: 'hsl(0 0% 100%)',
            default: {
              DEFAULT: 'hsl(240 5.9% 10%)',
              foreground: 'hsl(0 0% 98%)',
            },
            secondary: {
              DEFAULT: 'hsl(240 4.8% 95.9%)',
              foreground: 'hsl(240 3.8% 46.1%)',
            },
            danger: {
              DEFAULT: 'hsl(0 84.2% 60.2%)',
              foreground: 'hsl(0 0% 98%)',
            },
          },
        },
        dark: {
          colors: {
            background: 'hsl(240 10% 3.9%)',
            foreground: 'hsl(0 0% 98%)',
            content1: 'hsl(240 10% 3.9%)',
            default: {
              DEFAULT: 'hsl(0 0% 98%)',
              foreground: 'hsl(240 5.9% 10%)',
            },
            secondary: {
              DEFAULT: 'hsl(240 3.7% 15.9%)',
              foreground: 'hsl(240 5% 64.9%)',
            },
            danger: {
              DEFAULT: 'hsl(0 62.8% 30.6%)',
              foreground: 'hsl(0 0% 98%)',
            },
          },
        },
      },
    }),
    typography,
  ],
}
export default config
