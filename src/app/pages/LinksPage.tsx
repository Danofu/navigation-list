import React from 'react';
import { redirect } from 'next/navigation';

const empty: boolean = true;

function LinksPage(): React.ReactElement | null {
  if (empty) {
    redirect('/links/empty');
  }

  return null;
}

export default LinksPage;
