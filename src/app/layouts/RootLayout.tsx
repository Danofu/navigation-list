import React from 'react';

import { inter } from '@/app/fonts';
import StoreProvider from '@/app/providers/StoreProvider';
import styles from './RootLayout.module.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html className={inter.variable} lang="pl">
      <body className="bg-gray-100">
        <StoreProvider>
          <main className={styles.root}>
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;
