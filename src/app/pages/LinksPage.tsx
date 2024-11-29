'use client';

import React from 'react';

import LinkList from '@/app/components/LinkList';
import { useStore } from '@/app/providers/StoreProvider';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement {
  const links = useStore((state) => state.links);
  const updateLink = useStore((state) => state.updateLink);
  const deleteLink = useStore((state) => state.deleteLink);

  return (
    <div className={styles.root}>
      <LinkList deleteItem={deleteLink} items={links} updateItem={updateLink} />
    </div>
  );
}

export default LinksPage;
