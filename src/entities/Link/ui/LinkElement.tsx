import React from 'react';

import LinkEntity from '@/entities/Link/model/Link';
import Button from '@/shared/ui/Button';
import MoveIcon from '@/shared/ui/icons/MoveIcon';
import { cn } from '@/shared/ui/lib/utils';
import styles from './LinkElement.module.css';

type Props = Readonly<{
  actions: React.ReactNode;
  className?: string;
  link: LinkEntity;
}>;

function LinkElement({ actions, className, link }: Props): React.ReactElement {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles['link-container']}>
        <Button className={styles['move-button']} size="md-icon" title="Przenieś" variant="tertiary-gray">
          <MoveIcon />
        </Button>
        <div className={styles['link-info']}>
          <span className={styles['link-label']}>{link.label}</span>
          <span className={styles['link-url']}>{link.url}</span>
        </div>
        {actions}
      </div>
      {link.subLink && <LinkElement actions={actions} className={styles['sub-link']} link={link.subLink} />}
    </div>
  );
}

export default LinkElement;
