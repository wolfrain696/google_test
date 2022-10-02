import { IconButton, List, Typography, Zoom } from '@mui/material';
import { Delete, Restore } from '@mui/icons-material';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { EditNoteModal } from '../EditNoteModal/EditNoteModal';

import { StyledCardContainer } from './Styled';

interface INoteCard {
  id: number;
  title: string;
  onDeleteCard: (id: number) => void;
  onEditNote?: (id: number, editValue: string) => void;
  isBasket?: boolean;
  onRestoreNote?: () => void;
}
//Переиспользоваемый компонент "Заметка" с небольшим собственным состояние и хендлерами
export const NoteCard: FC<INoteCard> = ({
  title,
  onDeleteCard,
  id,
  onEditNote,
  isBasket,
  onRestoreNote,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const handleOpenEditModal = () => {
    if (isBasket) return;
    setIsEdit(true);
  };
  const handleCloseModal = () => {
    setIsEdit(false);
  };
  const handleDeleteCard = () => {
    onDeleteCard(id);
  };
  const handleEditNote = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleRestoreNote = () => {
    if (onRestoreNote) onRestoreNote();
    onDeleteCard(id);
  };

  useEffect(() => {
    if (onEditNote) onEditNote(id, editValue);
  }, [editValue]);
  return (
    <>
      <Zoom in>
        <StyledCardContainer onClick={handleOpenEditModal}>
          <Typography variant={'subtitle1'}>{title}</Typography>
          <List>
            <IconButton onClick={handleDeleteCard} aria-label="delete" size={'small'}>
              <Delete />
            </IconButton>
            {isBasket && (
              <IconButton onClick={handleRestoreNote} aria-label="restore" size={'small'}>
                <Restore />
              </IconButton>
            )}
          </List>
        </StyledCardContainer>
      </Zoom>
      <EditNoteModal
        removeNote={handleDeleteCard}
        onChangeEditInput={handleEditNote}
        closeModal={handleCloseModal}
        isOpen={isEdit}
        title={editValue}
        id={id}
      />
    </>
  );
};
