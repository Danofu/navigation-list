'use client';

import React, { useId } from 'react';

import Input, { InputProps } from '@/shared/ui/Input';
import { cn } from '@/shared/ui/lib/utils';
import styles from './TextField.module.css';

type Props = Readonly<InputProps & {
  className?: string;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
}>;

function TextField({ className, error, helperText, label, ...props }: Props): React.ReactElement {
  const inputId = useId();

  return (
    <fieldset className={cn(styles.container, error && styles['container-error'], className)}>
      {label && <label className={styles.label} htmlFor={inputId}>{label}</label>}
      <Input error={error} id={inputId} {...props} />
      {helperText && <span className={styles['helper-text']}>{helperText}</span>}
    </fieldset>
  );
}

export default TextField;
