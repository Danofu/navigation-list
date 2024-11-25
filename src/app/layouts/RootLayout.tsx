import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
