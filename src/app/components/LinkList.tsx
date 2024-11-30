import React from 'react';
import { redirect, RedirectType } from 'next/navigation';
import { v4 as uuid } from 'uuid';

import { RootStore } from '@/app/store';
import { LinkElement, LinkStatus } from '@/entities/Link';
import { LinkElementActions, LinkForm, LinkFormValues, LinkListActions } from '@/features/Link';
import pages from '@/shared/routes/pages';
import styles from './LinkList.module.css';

type Link = RootStore['links'][number];
type LinkUpdateAction = RootStore['updateLink'];
type LinkDeleteAction = RootStore['deleteLink'];

type Props = Readonly<{
  deleteItem: LinkDeleteAction;
  items: Array<Link>;
  updateItem: LinkUpdateAction;
}>;

function LinkList({ deleteItem, items, updateItem }: Props): React.ReactElement {
  if (items.length === 0) {
    redirect(pages.emptyLinks, RedirectType.replace);
  }

  const addSubLinkHandler = (id: string) => (): void => (
    updateItem(id, (link) => ({ ...link, status: LinkStatus.ADDING_SUB_LINK }))
  );

  const editLinkHandler = (id: string) => (): void => (
    updateItem(id, (link) => ({ ...link, status: LinkStatus.EDITING }))
  );

  const deleteLinkHandler = (id: string) => (): void => deleteItem(id);

  const reorderLinkHandler = (sourceLink: Link, targetLink: Link): void => {
    // source is root link and target is root link
    if (sourceLink.order !== null && targetLink.order !== null) {
      updateItem(sourceLink.id, (link) => ({ ...link, order: targetLink.order }));
      updateItem(targetLink.id, (link) => ({ ...link, order: sourceLink.order }));
    }
  };

  const linkFormSubmitHandler = (id: string) => (values: LinkFormValues): void => (
    updateItem(id, (link) => {
      if (link.status === 'ADDING_SUB_LINK') {
        return {
          ...link,
          subLink: { id: uuid(), label: values.name, url: values.url, subLink: link.subLink, order: null },
          status: undefined,
        };
      }
      if (link.status === 'EDITING') {
        return ({ ...link, label: values.name, url: values.url, status: undefined });
      }
      return link;
    })
  );

  const linkFormCancelHandler = (id: string) => (): void => (
    updateItem(id, (link) => ({ ...link, status: undefined }))
  );

  const linkElementActionsWithId = (linkId: string): React.ReactElement => (
    <LinkElementActions
      className={styles['link-element-actions']}
      onAddSubLink={addSubLinkHandler(linkId)}
      onDelete={deleteLinkHandler(linkId)}
      onEdit={editLinkHandler(linkId)}
    />
  );

  const linkFormWithValues = (linkId: string, name: string = '', url: string = ''): React.ReactElement => (
    <LinkForm
      initialValues={{ name, url }}
      onCancel={linkFormCancelHandler(linkId)}
      onSubmit={linkFormSubmitHandler(linkId)}
    />
  );

  const sortedItems = items.toSorted((linkA, linkB) => {
    if (!linkA.order && !linkB.order) {
      return 0;
    }
    if (!linkA.order) {
      return 1;
    }
    if (!linkB.order) {
      return -1;
    }
    return linkA.order > linkB.order ? -1 : 1;
  });

  return (
    <div className={styles.container}>
      {sortedItems.map((link) => (
        <LinkElement
          actions={linkElementActionsWithId}
          key={link.id}
          link={link}
          linkForm={linkFormWithValues}
          onReorder={reorderLinkHandler}
        />
      ))}
      <LinkListActions />
    </div>
  );
}

export default LinkList;
