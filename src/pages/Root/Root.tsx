import React from 'react';
import { Container } from '@mui/material';

import { Note } from '../Note/Note';
import { NoteContextProvider } from '../../context/Context';
import { SearchAppBar } from '../../components/SearchAppBar/SearchAppBar';

const Root = () => {
  console.log('work');
  return (
    <NoteContextProvider>
      <SearchAppBar />
      <Container maxWidth={'lg'}>
        <Note />
      </Container>
    </NoteContextProvider>
  );
};

export default Root;
