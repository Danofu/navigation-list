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

  const linkFormSubmitHandler = (id: string) => (values: LinkFormValues): void => (
    update(id, (link) => {
      if (link.status === 'ADDING_SUB_LINK') {
        return {
          ...link,
          subLink: { id: uuid(), label: values.name, url: values.url, subLink: link.subLink },
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
    update(id, (link) => ({ ...link, status: undefined }))
  );

  const linkElementActionsWithId = (linkId: string): React.ReactElement => (
    <LinkElementActions
      className={styles['link-element-actions']}
      onAddSubLink={addSubLinkHandler(linkId)}
      onDelete={deleteLinkHandler}
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

  return (
    <div className={styles.container}>
      {items.map((link) => (
        <LinkElement actions={linkElementActionsWithId} key={link.id} link={link} linkForm={linkFormWithValues} />
      ))}
      <LinkListActions />
    </div>
  );
}

export default LinkList;
