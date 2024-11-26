import React from 'react';

import Button from '@/shared/ui/Button';
import PlusCircleIcon from '@/shared/ui/icons/PlusCircleIcon';
import styles from './LinksPage.module.css';

const empty: boolean = true;

function LinksPage(): React.ReactElement {
  return (
    <div className={styles.root}>
      {empty && (
        <div className={styles['empty-container']}>
          <span className={styles['empty-title']}>Menu jest puste</span>
          <span className={styles['empty-description']}>W tym menu nie ma jeszcze żadnych linków.</span>
          <Button className={styles['empty-add-button']}>
            <PlusCircleIcon />
            Dodaj pozycję menu
          </Button>
        </div>
      )}
    </div>
  );
}

export default LinksPage;
