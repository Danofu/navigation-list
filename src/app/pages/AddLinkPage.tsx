'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useStore } from '@/app/providers/StoreProvider';
import { LinkForm, LinkFormValues } from '@/features/Link';
import pages from '@/shared/routes/pages';
import styles from './AddLinkPage.module.css';

function AddLinkPage(): React.ReactElement {
  const router = useRouter();
  const addLink = useStore((store) => store.addLink);

  const handleSubmit = (values: LinkFormValues): void => {
    addLink(values.name, values.url);
    router.push(pages.links);
  };

  return (
    <div className={styles.root}>
      <LinkForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddLinkPage;
