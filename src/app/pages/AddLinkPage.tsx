'use client';

import React from 'react';

import { useStore } from '@/app/providers/StoreProvider';
import { LinkForm, LinkFormValues } from '@/features/Link';
import styles from './AddLinkPage.module.css';

function AddLinkPage(): React.ReactElement {
  const addLink = useStore((store) => store.addLink);

  const handleSubmit = (values: LinkFormValues): void => addLink(values.name, values.url);

  return (
    <div className={styles.root}>
      <LinkForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddLinkPage;
