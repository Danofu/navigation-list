import '@/app/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Książka Nawigacji',
    template: '%s | Książka Nawigacji',
  },
};

export { default } from '@/app/layouts/RootLayout';
