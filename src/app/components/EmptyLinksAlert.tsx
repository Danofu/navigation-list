import React from 'react';
import { redirect, RedirectType } from 'next/navigation';

import Button from '@/shared/ui/Button';
import PlusCircleIcon from '@/shared/ui/icons/PlusCircleIcon';
import styles from './EmptyLinksAlert.module.css';

type Props = Readonly<{
  empty: boolean;
}>;

function EmptyLinksAlert({ empty }: Props): React.ReactElement {
  if (!empty) {
    redirect('/links', RedirectType.replace);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Menu jest puste</span>
      <span className={styles.description}>W tym menu nie ma jeszcze żadnych linków.</span>
      <Button className={styles['add-button']}>
        <PlusCircleIcon />
        Dodaj pozycję menu
      </Button>
    </div>
  );
}

export default EmptyLinksAlert;
