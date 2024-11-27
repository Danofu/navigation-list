import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/ui/lib/utils';
import styles from './Button.module.css';

const variants = cva(
  styles.base,
  {
    variants: {
      variant: {
        'primary': styles['variant-primary'],
        'secondary': styles['variant-secondary'],
        'secondary-gray': styles['variant-secondary-gray'],
        'tertiary-gray': styles['variant-tertiary-gray'],
      },
      size: {
        'md': styles['size-md'],

        'md-icon': styles['size-md-icon'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type Props = Readonly<React.ComponentProps<'button'> & VariantProps<typeof variants>>;

function Button({ children, className, size, type = 'button', variant, ...props }: Props): React.ReactElement {
  return <button className={cn(variants({ className, size, variant }))} type={type} {...props}>{children}</button>;
}

export { type Props, variants };
export default Button;
