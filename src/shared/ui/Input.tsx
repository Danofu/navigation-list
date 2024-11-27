import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/ui/lib/utils';
import styles from './Input.module.css';

const variants = cva(
  styles.base,
  {
    variants: {
      scale: {
        sm: styles['scale-sm'],
        md: styles['scale-md'],
      },
    },
    defaultVariants: {
      scale: 'md',
    },
  },
);

type Props = Readonly<React.ComponentProps<'input'> & VariantProps<typeof variants> & {
  error?: boolean;
  startAdornment?: React.ReactNode;
}>;

function Input({ className, error, scale, startAdornment, ...props }: Props): React.ReactElement {
  return (
    <div className={cn(variants({ scale }), styles.container, error && styles.destructive)}>
      {startAdornment && <div className={styles['start-adornment']}>{startAdornment}</div>}
      <input className={cn(styles.input, className)} {...props} />
    </div>
  );
}

export { type Props as InputProps, variants as inputVariants };
export default Input;
