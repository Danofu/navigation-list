import React from 'react';

import Button from '@/shared/ui/Button';
import TextField from '@/shared/ui/components/TextField';
import SearchLgIcon from '@/shared/ui/icons/SearchLgIcon';
import styles from './LinkForm.module.css';

function LinkForm(): React.ReactElement {
  return (
    <form autoCapitalize="off" autoCorrect="off" className={styles.container} noValidate>
      <TextField label="Nazwa" placeholder="np. Promocje" scale="sm" />
      <TextField className={styles['link-text-field']} label="Link" placeholder="Wklej lub wyszukaj" scale="sm" startAdornment={<SearchLgIcon />} />
      <div className={styles.actions}>
        <Button variant="secondary-gray">Anuluj</Button>
        <Button variant="secondary">Dodaj</Button>
      </div>
    </form>
  );
}

export default LinkForm;
