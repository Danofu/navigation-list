'use client';

import React from 'react';
import { useShallow } from 'zustand/react/shallow';

import EmptyLinksAlert from '@/app/components/EmptyLinksAlert';
import { useStore } from '@/app/providers/StoreProvider';
import styles from './EmptyLinksPage.module.css';

function EmptyLinksPage(): React.ReactElement | null {
  const empty = useStore(useShallow(({ links }) => links.length === 0));
  return (
    <div className={styles.root}>
      <EmptyLinksAlert empty={empty} />
    </div>
  );
}

export default EmptyLinksPage;
