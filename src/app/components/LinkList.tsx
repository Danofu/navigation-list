import React from 'react';
import { redirect, RedirectType } from 'next/navigation';

import { RootStore } from '@/app/store';
import { LinkElement, LinkStatus } from '@/entities/Link';
import { LinkElementActions, LinkListActions } from '@/features/Link';
import pages from '@/shared/routes/pages';
import styles from './LinkList.module.css';

type Link = RootStore['links'][number];
type LinkUpdateAction = RootStore['updateLink'];

type Props = Readonly<{
  items: Array<Link>;
  update: LinkUpdateAction;
}>;

function LinkList({ items, update }: Props): React.ReactElement {
  if (items.length === 0) {
    redirect(pages.emptyLinks, RedirectType.replace);
  }

  const addSubLinkHandler = (id: string) => (): void => (
    update(id, (link) => ({ ...link, status: LinkStatus.ADDING_SUB_LINK }))
  );

  const editLinkHandler = (id: string) => (): void => (
    update(id, (link) => ({ ...link, status: LinkStatus.EDITING }))
  );

  const deleteLinkHandler = (): void => {};

  return (
    <div className={styles.container}>
      {items.map((link) => (
        <LinkElement
          actions={(
            <LinkElementActions
              className={styles['link-element-actions']}
              onAddSubLink={addSubLinkHandler(link.id)}
              onDelete={deleteLinkHandler}
              onEdit={editLinkHandler(link.id)}
            />
          )}
          key={link.id}
          link={link}
        />
      ))}
      <LinkListActions />
    </div>
  );
}

export default LinkList;
