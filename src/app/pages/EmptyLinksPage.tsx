import React from 'react';
import { redirect } from 'next/navigation';

import Button from '@/shared/ui/Button';
import PlusCircleIcon from '@/shared/ui/icons/PlusCircleIcon';
import styles from './EmptyLinksPage.module.css';

const empty: boolean = true;

function EmptyLinksPage(): React.ReactElement {
  if (!empty) {
    redirect('/links');
  }

  return (
    <div className={styles.root}>
      <div className={styles['empty-container']}>
        <span className={styles['empty-title']}>Menu jest puste</span>
        <span className={styles['empty-description']}>W tym menu nie ma jeszcze żadnych linków.</span>
        <Button className={styles['empty-add-button']}>
          <PlusCircleIcon />
          Dodaj pozycję menu
        </Button>
      </div>
    </div>
  );
}

export default EmptyLinksPage;
