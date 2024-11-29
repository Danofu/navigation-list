'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useStore } from '@/app/providers/StoreProvider';
import { LinkElement, LinkStatus } from '@/entities/Link';
import { LinkElementActions, LinkListActions } from '@/features/Link';
import pages from '@/shared/routes/pages';
import styles from './LinksPage.module.css';

function LinksPage(): React.ReactElement {
  const router = useRouter();
  const links = useStore((state) => state.links);
  const updateLink = useStore((state) => state.updateLink);

  const addSubLinkHandler = (id: string) => (): void => (
    updateLink(id, (link) => ({ ...link, status: LinkStatus.ADDING_SUB_LINK }))
  );

  const editLinkHandler = (id: string) => (): void => (
    updateLink(id, (link) => ({ ...link, status: LinkStatus.EDITING }))
  );

  const deleteLinkHandler = (): void => {};

  useEffect(() => {
    if (links.length === 0) {
      router.replace(pages.emptyLinks);
    }
  }, [links.length, router]);

  return (
    <div className={styles.root}>
      <div className={styles['link-list-container']}>
        {links.map((link) => (
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
    </div>
  );
}

export default LinksPage;
