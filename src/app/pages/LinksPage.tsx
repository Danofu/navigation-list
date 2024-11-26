'use client';

import React from 'react';

import { useStore } from '@/app/providers/StoreProvider';
import { LinkList } from '@/entities/Link';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement | null {
  const links = useStore((state) => state.links);
  return (
    <div className={styles.root}>
      <LinkList links={links} />
    </div>
  );
}

export default LinksPage;
