import React from 'react';

import { cn } from '@/shared/ui/lib/utils';
import styles from './ButtonGroup.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function ButtonGroup({ children, className }: Props): React.ReactElement {
  return <div className={cn(styles.container, className)}>{children}</div>;
}

export default ButtonGroup;
