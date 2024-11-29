'use client';

import React from 'react';

import { useStore } from '@/app/providers/StoreProvider';
import { LinkList } from '@/entities/Link';
import { LinkListActions } from '@/features/Link';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement {
  const links = useStore((state) => state.links);
  return (
    <div className={styles.root}>
      <LinkList links={links} listActions={<LinkListActions />} />
    </div>
  );
}

export default LinksPage;
