import { Fade, IconButton, Modal } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { CustomInput } from '../CustomInput/CustomInput';

import { StyledModalContent } from './Styled';

interface Props {
  isOpen: boolean;
  title: string;
  id: number;
  closeModal: () => void;
  onChangeEditInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const EditNoteModal: FC<Props> = ({ isOpen, title, closeModal, onChangeEditInput }) => (
  <Modal open={isOpen} onClose={closeModal}>
    <Fade in={isOpen}>
      <StyledModalContent>
        <CustomInput onChange={onChangeEditInput} value={title} />
        <IconButton onClick={closeModal} size={'small'}>
          <DeleteIcon />
        </IconButton>
      </StyledModalContent>
    </Fade>
  </Modal>
);
