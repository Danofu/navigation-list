'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import LinkList from '@/app/components/LinkList';
import { useStore } from '@/app/providers/StoreProvider';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement {
  const links = useStore((state) => state.links);
  const updateLink = useStore((state) => state.updateLink);
  const deleteLink = useStore((state) => state.deleteLink);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.root}>
        <LinkList deleteItem={deleteLink} items={links} updateItem={updateLink} />
      </div>
    </DndProvider>
  );
}

export default LinksPage;
