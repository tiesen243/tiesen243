import { nextui } from '@nextui-org/react'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
          'linear-gradient(to bottom right, #d16ba5, #c777b9, #b88cc8, #a29cd4, #8ba9dd, #7ab4e4, #6abeee, #5dcdf5, #5ddcf5, #6aebee, #7ab4e4, #8ba9dd, #a29cd4, #b88cc8, #c777b9, #d16ba5)',
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
            primary: {
              DEFAULT: 'hsl(240, 4.88%, 83.92%)',
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
            primary: {
              DEFAULT: 'hsl(240, 5.26%, 26.08%)',
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
