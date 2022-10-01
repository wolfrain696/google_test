import { Paper } from '@mui/material';
import { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CustomInput } from '../../components/CustomInput/CustomInput';
import { useNoteContext } from '../../context/Context';
import { NoteCard } from '../../components/NoteCard/NoteCard';

import { SearchList } from './components/SearchList/SearchList';
import { StyledContainer, StyledListWrapper } from './Styled';

export const Note = () => {
  const { noteList, addNote, removeNote, searchedNotes, editNote } = useNoteContext();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (!inputValue) return;
    addNote({ id: Date.now(), value: inputValue });
    setInputValue('');
    navigate('../');
  };

  const handleAddNoteToKeyUp: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === 'Enter' && inputValue) {
      addNote({ id: Date.now(), value: inputValue });
      setInputValue('');
      navigate('../');
    }
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
          onKeyUp={handleAddNoteToKeyUp}
        />
      </Paper>

      <StyledListWrapper>
        <Routes>
          <Route
            path="/search"
            element={
              <SearchList
                onEditNote={editNote}
                searchedNotes={searchedNotes}
                removeNote={removeNote}
              />
            }
          />
          <Route
            path="*"
            element={noteList.map(note => (
              <NoteCard
                onEditNote={editNote}
                id={note.id}
                onDeleteCard={removeNote}
                key={note.id}
                title={note.value}
              />
            ))}
          />
        </Routes>
      </StyledListWrapper>
    </StyledContainer>
  );
};
