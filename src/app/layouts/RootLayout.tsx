import React from 'react';

import { inter } from '@/app/fonts';

type Props = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html className={inter.variable} lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
