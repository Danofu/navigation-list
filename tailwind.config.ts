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
          secondary: 'hsl(var(--background-secondary))',
        },
        'border': {
          secondary: 'hsl(var(--border-secondary))',
        },
        'text': {
          DEFAULT: 'hsl(var(--text-primary))',
          tertiary: 'hsl(var(--text-tertiary))',
        },
        'button-primary': {
          'foreground': 'hsl(var(--button-primary-foreground))',
          'DEFAULT': 'hsl(var(--button-primary-background))',
          'background-hover': 'hsl(var(--button-primary-background-hover))',
          'border': 'hsl(var(--button-primary-border))',
          'border-hover': 'hsl(var(--button-primary-border-hover))',
        },
        'ring': 'hsl(var(--ring))',
      },
    },
  },
  plugins: [],
} satisfies Config;
