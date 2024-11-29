import React from 'react';

import { LinkStatus } from '@/entities/Link/model/Link';
import { LinkState } from '@/entities/Link/model/slice';
import Button from '@/shared/ui/Button';
import MoveIcon from '@/shared/ui/icons/MoveIcon';
import { cn } from '@/shared/ui/lib/utils';
import styles from './LinkElement.module.css';

type Link = LinkState['links'][number];

type Props = Readonly<{
  actions: (linkId: string) => React.ReactNode;
  className?: string;
  link: Link;
  linkForm: (linkId: string, name?: string, url?: string) => React.ReactNode;
}>;

function LinkElement({ actions, className, link, linkForm }: Props): React.ReactElement {
  return (
    <div className={cn(styles.container, className)}>
      {link.status !== LinkStatus.EDITING && (
        <div className={styles['link-container']}>
          <Button className={styles['move-button']} size="md-icon" title="Przenieś" variant="tertiary-gray">
            <MoveIcon />
          </Button>
          <div className={styles['link-info']}>
            <span className={styles['link-label']}>{link.label}</span>
            {link.url && <span className={styles['link-url']}>{link.url}</span>}
          </div>
          {actions(link.id)}
        </div>
      )}
      {link.status === LinkStatus.ADDING_SUB_LINK && <div className={styles['link-form']}>{linkForm(link.id)}</div>}
      {link.status === LinkStatus.EDITING && <div className={styles['link-form']}>{linkForm(link.id, link.label, link.url)}</div>}
      {link.subLink && <LinkElement actions={actions} className={styles['sub-link']} link={link.subLink} linkForm={linkForm} />}
    </div>
  );
}

export default LinkElement;
