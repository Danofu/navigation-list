import React from 'react';
import { redirect, RedirectType } from 'next/navigation';

import LinkEntity from '@/entities/Link/model/Link';
import LinkElement from '@/entities/Link/ui/LinkElement';
import pages from '@/shared/routes/pages';
import styles from './LinkList.module.css';

type Props = Readonly<{
  links: Array<LinkEntity>;
}>;

function LinkList({ links }: Props): React.ReactElement | null {
  if (links.length === 0) {
    redirect(pages.emptyLinks, RedirectType.replace);
  }

  return (
    <div className={styles.container}>
      {links.map((link) => <LinkElement key={Math.random()} link={link} />)}
    </div>
  );
}

export default LinkList;
