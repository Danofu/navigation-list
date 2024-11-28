import React from 'react';
import { Slot } from '@radix-ui/react-slot';
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

type Props = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> &
  { asChild?: boolean }
>;

function Button({ asChild, children, className, size, type = 'button', variant, ...props }: Props): React.ReactElement {
  const ButtonComponent = asChild ? Slot : 'button';
  return (
    <ButtonComponent className={cn(variants({ className, size, variant }))} type={type} {...props}>
      {children}
    </ButtonComponent>
  );
}

export { type Props, variants };
export default Button;
