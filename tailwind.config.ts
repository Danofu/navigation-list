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
          error: 'hsl(var(--border-error))',
        },
        'text': {
          'DEFAULT': 'hsl(var(--text-primary))',
          'secondary': 'hsl(var(--text-secondary))',
          'tertiary': 'hsl(var(--text-tertiary))',
          'quaternary': 'hsl(var(--text-quaternary))',
          'placeholder': 'hsl(var(--text-placeholder))',
          'error-primary': 'hsl(var(--text-error-primary))',
        },
        'button-primary': {
          'foreground': 'hsl(var(--button-primary-foreground))',
          'foreground-hover': 'hsl(var(--button-primary-foreground-hover))',
          'DEFAULT': 'hsl(var(--button-primary-background))',
          'background-hover': 'hsl(var(--button-primary-background-hover))',
          'border': 'hsl(var(--button-primary-border))',
          'border-hover': 'hsl(var(--button-primary-border-hover))',
        },
        'button-secondary': {
          'foreground': 'hsl(var(--button-secondary-foreground))',
          'foreground-hover': 'hsl(var(--button-secondary-foreground-hover))',
          'DEFAULT': 'hsl(var(--button-secondary-background))',
          'background-hover': 'hsl(var(--button-secondary-background-hover))',
          'border': 'hsl(var(--button-secondary-border))',
          'border-hover': 'hsl(var(--button-secondary-border-hover))',
        },
        'button-secondary-gray': {
          'foreground': 'hsl(var(--button-secondary-gray-foreground))',
          'foreground-hover': 'hsl(var(--button-secondary-gray-foreground-hover))',
          'DEFAULT': 'hsl(var(--button-secondary-gray-background))',
          'background-hover': 'hsl(var(--button-secondary-gray-background-hover))',
          'border': 'hsl(var(--button-secondary-gray-border))',
          'border-hover': 'hsl(var(--button-secondary-gray-border-hover))',
        },
        'button-tertiary-gray': {
          'foreground': 'hsl(var(--button-tertiary-gray-foreground))',
          'background-hover': 'hsl(var(--button-tertiary-gray-background-hover))',
          'foreground-hover': 'hsl(var(--button-tertiary-gray-foreground-hover))',
        },
        'ring': {
          DEFAULT: 'hsl(var(--ring))',
          error: 'hsl(var(--ring-error))',
          gray: 'hsl(var(--ring-gray))',
        },
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
} satisfies Config;
