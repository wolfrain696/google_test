import { IconButton, Typography, Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC } from 'react';

import { StyledCardContainer } from './Styled';

interface INoteCard {
  id: number;
  title: string;
  onDeleteCard: (id: number) => void;
}

export const NoteCard: FC<INoteCard> = ({ title, onDeleteCard, id }) => {
  const handleDeleteCard = () => {
    onDeleteCard(id);
  };
  return (
    <Zoom in>
      <StyledCardContainer>
        <Typography variant={'subtitle1'}>{title}</Typography>
        <IconButton onClick={handleDeleteCard} aria-label="delete" size={'small'}>
          <DeleteIcon />
        </IconButton>
      </StyledCardContainer>
    </Zoom>
  );
};
