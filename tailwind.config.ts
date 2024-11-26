import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: 'hsl(var(--background-primary))',
          secondary: 'hsl(var(--background-secondary))',
        },
        'border': {
          DEFAULT: 'hsl(var(--border-primary))',
          secondary: 'hsl(var(--border-secondary))',
        },
        'text': {
          DEFAULT: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
        },
        'button-primary': {
          'foreground': 'hsl(var(--button-primary-foreground))',
          'foreground-hover': 'hsl(var(--button-primary-foreground-hover))',
          'DEFAULT': 'hsl(var(--button-primary-background))',
          'background-hover': 'hsl(var(--button-primary-background-hover))',
          'border': 'hsl(var(--button-primary-border))',
          'border-hover': 'hsl(var(--button-primary-border-hover))',
        },
        'button-tertiary-gray': {
          'foreground': 'hsl(var(--button-tertiary-gray-foreground))',
          'background-hover': 'hsl(var(--button-tertiary-gray-background-hover))',
          'foreground-hover': 'hsl(var(--button-tertiary-gray-foreground-hover))',
        },
        'ring': 'hsl(var(--ring))',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
} satisfies Config;
