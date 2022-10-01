import { IconButton, Typography, Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { EditNoteModal } from '../EditNoteModal/EditNoteModal';

import { StyledCardContainer } from './Styled';

interface INoteCard {
  id: number;
  title: string;
  onDeleteCard: (id: number) => void;
  onEditNote: (id: number, editValue: string) => void;
}

export const NoteCard: FC<INoteCard> = ({ title, onDeleteCard, id, onEditNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const handleOpenEditModal = () => {
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

  useEffect(() => {
    onEditNote(id, editValue);
  }, [editValue]);
  return (
    <>
      <Zoom in>
        <StyledCardContainer onClick={handleOpenEditModal}>
          <Typography variant={'subtitle1'}>{title}</Typography>
          <IconButton onClick={handleDeleteCard} aria-label="delete" size={'small'}>
            <DeleteIcon />
          </IconButton>
        </StyledCardContainer>
      </Zoom>
      <EditNoteModal
        onChangeEditInput={handleEditNote}
        closeModal={handleCloseModal}
        isOpen={isEdit}
        title={editValue}
        id={id}
      />
    </>
  );
};
