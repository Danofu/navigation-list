import React from 'react';

import { inter } from '@/app/fonts';
import styles from './RootLayout.module.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html className={inter.variable} lang="pl">
      <body>
        <main className={styles.root}>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
