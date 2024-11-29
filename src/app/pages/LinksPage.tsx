'use client';

import React from 'react';

import LinkList from '@/app/components/LinkList';
import { useStore } from '@/app/providers/StoreProvider';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement {
  const links = useStore((state) => state.links);
  const updateLink = useStore((state) => state.updateLink);

  return (
    <div className={styles.root}>
      <LinkList items={links} update={updateLink} />
    </div>
  );
}

export default LinksPage;
