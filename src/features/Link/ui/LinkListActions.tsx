import React from 'react';
import Link from 'next/link';

import pages from '@/shared/routes/pages';
import Button from '@/shared/ui/Button';
import styles from './LinkListActions.module.css';

function LinkListActions(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Button asChild variant="secondary-gray">
        <Link href={pages.addLink}>Dodaj pozycję menu</Link>
      </Button>
    </div>
  );
}

export default LinkListActions;
