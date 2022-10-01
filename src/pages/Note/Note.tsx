import { Paper } from '@mui/material';
import { useState } from 'react';

import { CustomInput } from '../../components/CustomInput/CustomInput';
import { useNoteContext } from '../../context/Context';
import { NoteCard } from '../../components/NoteCard/NoteCard';

import { StyledContainer, StyledListWrapper } from './Styled';

export const Note = () => {
  const { noteList, addNote, removeNote, searchedNotes } = useNoteContext();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (!inputValue) return;
    addNote({ id: Date.now(), value: inputValue });
    setInputValue('');
  };

  return (
    <StyledContainer maxWidth={'md'}>
      <Paper>
        <CustomInput
          placeholder={'Введите заголовок'}
          label={'Заметка'}
          value={inputValue}
          onChange={handleChangeInputValue}
          onBlur={handleAddNote}
        />
      </Paper>

      <StyledListWrapper>
        {searchedNotes.length
          ? searchedNotes.map(note => (
              <NoteCard id={note.id} onDeleteCard={removeNote} key={note.id} title={note.value} />
            ))
          : noteList.map(note => (
              <NoteCard id={note.id} onDeleteCard={removeNote} key={note.id} title={note.value} />
            ))}
      </StyledListWrapper>
    </StyledContainer>
  );
};
