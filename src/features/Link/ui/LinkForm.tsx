'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { linkFormSchema, LinkFormValues } from '@/features/Link/model/validation';
import Button from '@/shared/ui/Button';
import TextField from '@/shared/ui/components/TextField';
import SearchLgIcon from '@/shared/ui/icons/SearchLgIcon';
import styles from './LinkForm.module.css';

const defaultValues: LinkFormValues = {
  name: '',
  url: '',
};

type Props = {
  initialValues?: LinkFormValues;
  onCancel: () => void;
  onSubmit: (values: LinkFormValues) => void;
};

function LinkForm({ initialValues = defaultValues, onCancel, onSubmit }: Props): React.ReactElement {
  const form = useForm({ mode: 'onTouched', resolver: zodResolver(linkFormSchema), values: initialValues });

  const { formState, handleSubmit, register } = form;
  const { errors } = formState;

  return (
    <form autoCapitalize="off" autoCorrect="off" className={styles.container} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField error={!!errors.name} helperText={errors.name?.message} label="Nazwa" placeholder="np. Promocje" scale="sm" {...register('name')} />
      <TextField className={styles['link-text-field']} error={!!errors.url} helperText={errors.url?.message} label="Link" placeholder="Wklej lub wyszukaj" scale="sm" startAdornment={<SearchLgIcon />} {...register('url')} />
      <div className={styles.actions}>
        <Button onClick={onCancel} variant="secondary-gray">Anuluj</Button>
        <Button type="submit" variant="secondary">Dodaj</Button>
      </div>
    </form>
  );
}

export default LinkForm;
