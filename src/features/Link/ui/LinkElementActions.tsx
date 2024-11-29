import React from 'react';

import Button from '@/shared/ui/Button';
import ButtonGroup from '@/shared/ui/ButtonGroup';

type Props = Readonly<{
  className?: string;
  onAddSubLink: () => void;
  onDelete: () => void;
  onEdit: () => void;
}>;

function LinkElementActions({ className, onAddSubLink, onDelete, onEdit }: Props): React.ReactElement {
  return (
    <ButtonGroup className={className}>
      <Button onClick={onDelete}>Usuń</Button>
      <Button onClick={onEdit}>Edytuj</Button>
      <Button onClick={onAddSubLink}>Dodaj pozycję menu</Button>
    </ButtonGroup>
  );
}

export default LinkElementActions;
