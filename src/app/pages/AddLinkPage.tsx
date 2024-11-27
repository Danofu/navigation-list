'use client';

import React from 'react';

import { LinkForm } from '@/features/Link';
import styles from './AddLinkPage.module.css';

function AddLinkPage(): React.ReactElement | null {
  return (
    <div className={styles.root}>
      <LinkForm />
    </div>
  );
}

export default AddLinkPage;
