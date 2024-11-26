'use client';

import React from 'react';

import EmptyLinksAlert from '@/app/components/EmptyLinksAlert';
import { useStore } from '@/app/providers/StoreProvider';
import styles from './EmptyLinksPage.module.css';

function EmptyLinksPage(): React.ReactElement | null {
  const empty = useStore(({ links }) => links.length === 0);
  return (
    <div className={styles.root}>
      <EmptyLinksAlert empty={empty} />
    </div>
  );
}

export default EmptyLinksPage;
