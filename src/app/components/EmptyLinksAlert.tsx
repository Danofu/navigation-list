import React from 'react';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';

import pages from '@/shared/routes/pages';
import Button from '@/shared/ui/Button';
import PlusCircleIcon from '@/shared/ui/icons/PlusCircleIcon';
import styles from './EmptyLinksAlert.module.css';

type Props = Readonly<{
  empty: boolean;
}>;

function EmptyLinksAlert({ empty }: Props): React.ReactElement {
  if (!empty) {
    redirect(pages.links, RedirectType.replace);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Menu jest puste</span>
      <span className={styles.description}>W tym menu nie ma jeszcze żadnych linków.</span>
      <Button asChild className={styles['add-button']}>
        <Link href={pages.addLink}>
          <PlusCircleIcon />
          Dodaj pozycję menu
        </Link>
      </Button>
    </div>
  );
}

export default EmptyLinksAlert;
